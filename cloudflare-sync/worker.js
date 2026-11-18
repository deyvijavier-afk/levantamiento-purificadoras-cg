/* Levantamiento CG — sync API for levantamiento.cnergyconsultant.com
   Bindings: STATE (KV), PIN_HASH (secret, sha256 hex of the shared PIN).
   Optional: PHOTOS (R2) — used when the account has R2 enabled; otherwise photo
   blobs are stored in KV under b:{itemId}:{id}. */
const PWA_ORIGIN = "https://deyvijavier-afk.github.io";
const PWA_BASE = PWA_ORIGIN + "/levantamiento-purificadoras-cg";
const APP_ORIGIN = "https://levantamiento.cnergyconsultant.com";

function allowOrigin(origin) {
  if (!origin) return "";
  if (origin === PWA_ORIGIN || origin === APP_ORIGIN) return origin;
  if (/^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(origin)) return origin;
  return "";
}

function cors(req, headers) {
  const h = new Headers(headers || {});
  const allow = allowOrigin(req.headers.get("Origin") || "");
  if (allow) {
    h.set("Access-Control-Allow-Origin", allow);
    h.set("Vary", "Origin");
    h.set("Access-Control-Allow-Headers", "Content-Type, X-Sync-Pin");
    h.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    h.set("Access-Control-Max-Age", "86400");
  }
  h.set("X-Content-Type-Options", "nosniff");
  return h;
}

function json(req, status, body) {
  return new Response(JSON.stringify(body), {
    status: status,
    headers: cors(req, { "Content-Type": "application/json; charset=utf-8" })
  });
}

async function sha256hex(s) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  const b = new Uint8Array(buf);
  let out = "";
  for (let i = 0; i < b.length; i++) out += b[i].toString(16).padStart(2, "0");
  return out;
}

function timingSafeEq(a, b) {
  const x = new TextEncoder().encode(String(a || ""));
  const y = new TextEncoder().encode(String(b || ""));
  const n = Math.max(x.length, y.length);
  let d = x.length ^ y.length;
  for (let i = 0; i < n; i++) d |= (x[i] || 0) ^ (y[i] || 0);
  return d === 0;
}

async function checkPin(req, env) {
  if (!env.PIN_HASH) return false;
  const pin = req.headers.get("X-Sync-Pin") || "";
  if (!pin) return false;
  const got = await sha256hex(pin);
  return timingSafeEq(got, String(env.PIN_HASH).toLowerCase());
}

async function listPrefix(kv, prefix) {
  const out = [];
  let cursor;
  for (;;) {
    const page = await kv.list({ prefix: prefix, cursor: cursor, limit: 1000 });
    for (const k of page.keys || []) out.push(k.name);
    if (page.list_complete) break;
    cursor = page.cursor;
  }
  return out;
}

function fieldKey(k) { return "f:" + k; }
function photoMetaKey(itemId, id) { return "p:" + itemId + ":" + id; }
function photoBlobKey(itemId, id) { return "b:" + itemId + ":" + id; }
function photoR2Key(itemId, id) { return "photos/" + itemId + "/" + id + ".jpg"; }

function parsePhotoMetaName(name) {
  // p:{itemId}:{id} — itemId and id do not contain ":" in our client
  if (!name.startsWith("p:")) return null;
  const rest = name.slice(2);
  const i = rest.indexOf(":");
  if (i <= 0) return null;
  return { itemId: rest.slice(0, i), id: rest.slice(i + 1) };
}

async function photoPutBlob(env, itemId, id, bytes, contentType) {
  if (env.PHOTOS) {
    await env.PHOTOS.put(photoR2Key(itemId, id), bytes, {
      httpMetadata: { contentType: contentType || "image/jpeg" }
    });
    return;
  }
  await env.STATE.put(photoBlobKey(itemId, id), bytes);
}

async function photoGetBlob(env, itemId, id) {
  if (env.PHOTOS) {
    const obj = await env.PHOTOS.get(photoR2Key(itemId, id));
    if (!obj) return null;
    return { body: obj.body, type: (obj.httpMetadata && obj.httpMetadata.contentType) || "image/jpeg" };
  }
  const buf = await env.STATE.get(photoBlobKey(itemId, id), "arrayBuffer");
  if (!buf) return null;
  return { body: buf, type: "image/jpeg" };
}

function dataUrlToBytes(data) {
  if (typeof data !== "string") return null;
  const m = data.match(/^data:([^;]+);base64,(.+)$/);
  const b64 = m ? m[2] : data;
  const type = m ? m[1] : "image/jpeg";
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return { bytes: bytes, type: type };
}

async function handlePull(req, env) {
  const fields = {};
  const photos = {};
  const fkeys = await listPrefix(env.STATE, "f:");
  if (fkeys.length) {
    const vals = await Promise.all(fkeys.map(function (k) { return env.STATE.get(k, "json"); }));
    for (let i = 0; i < fkeys.length; i++) {
      const rec = vals[i];
      if (!rec || typeof rec !== "object") continue;
      fields[fkeys[i].slice(2)] = { v: rec.v, t: rec.t || 0, d: rec.d || "" };
    }
  }
  const pkeys = await listPrefix(env.STATE, "p:");
  if (pkeys.length) {
    const vals = await Promise.all(pkeys.map(function (k) { return env.STATE.get(k, "json"); }));
    for (let i = 0; i < pkeys.length; i++) {
      const parsed = parsePhotoMetaName(pkeys[i]);
      const rec = vals[i];
      if (!parsed || !rec) continue;
      if (!photos[parsed.itemId]) photos[parsed.itemId] = [];
      photos[parsed.itemId].push({ id: rec.id || parsed.id, t: rec.t || 0, deleted: !!rec.deleted });
    }
  }
  return json(req, 200, { fields: fields, photos: photos, serverTime: Date.now() });
}

async function handlePush(req, env) {
  let body;
  try { body = await req.json(); } catch (e) { return json(req, 400, { error: "invalid_json" }); }
  const incoming = Array.isArray(body && body.fields) ? body.fields : [];
  const winners = {};
  for (let i = 0; i < incoming.length; i++) {
    const it = incoming[i] || {};
    const k = String(it.k || "");
    if (!k || k.indexOf(":") >= 0 && k.startsWith("cg-sync")) continue;
    if (k === "_sync" || k.indexOf("cg-sync") === 0) continue;
    const t = Number(it.t) || 0;
    const rec = { v: it.v, t: t, d: String(it.d || "") };
    const key = fieldKey(k);
    const cur = await env.STATE.get(key, "json");
    if (!cur || t > (cur.t || 0)) {
      await env.STATE.put(key, JSON.stringify(rec));
      winners[k] = rec;
    } else {
      winners[k] = cur;
    }
  }
  return json(req, 200, { fields: winners });
}

async function handlePhotoUpload(req, env) {
  let body;
  try { body = await req.json(); } catch (e) { return json(req, 400, { error: "invalid_json" }); }
  const itemId = String(body.itemId || "");
  const id = String(body.id || "");
  const t = Number(body.t) || 0;
  if (!itemId || !id || itemId.indexOf(":") >= 0 || id.indexOf(":") >= 0) {
    return json(req, 400, { error: "bad_ids" });
  }
  const parsed = dataUrlToBytes(body.data);
  if (!parsed || !parsed.bytes.length) return json(req, 400, { error: "no_data" });
  if (parsed.bytes.length > 1500000) return json(req, 413, { error: "too_large" });
  const metaKey = photoMetaKey(itemId, id);
  const cur = await env.STATE.get(metaKey, "json");
  if (cur && cur.deleted && (cur.t || 0) >= t) {
    return json(req, 200, { id: id, t: cur.t, deleted: true, skipped: true });
  }
  if (cur && !cur.deleted && (cur.t || 0) > t) {
    return json(req, 200, { id: id, t: cur.t, deleted: false, skipped: true });
  }
  await photoPutBlob(env, itemId, id, parsed.bytes, parsed.type);
  const meta = { id: id, t: t, deleted: false };
  await env.STATE.put(metaKey, JSON.stringify(meta));
  return json(req, 200, meta);
}

async function handlePhotoDelete(req, env) {
  let body;
  try { body = await req.json(); } catch (e) { return json(req, 400, { error: "invalid_json" }); }
  const itemId = String(body.itemId || "");
  const id = String(body.id || "");
  const t = Number(body.t) || Date.now();
  if (!itemId || !id) return json(req, 400, { error: "bad_ids" });
  const metaKey = photoMetaKey(itemId, id);
  const cur = await env.STATE.get(metaKey, "json") || { id: id, t: 0, deleted: false };
  if ((cur.t || 0) > t && cur.deleted) return json(req, 200, cur);
  const meta = { id: id, t: Math.max(t, cur.t || 0), deleted: true };
  await env.STATE.put(metaKey, JSON.stringify(meta));
  return json(req, 200, meta);
}

async function handlePhotoGet(req, env, itemId, id) {
  const meta = await env.STATE.get(photoMetaKey(itemId, id), "json");
  if (!meta || meta.deleted) return json(req, 404, { error: "not_found" });
  const blob = await photoGetBlob(env, itemId, id);
  if (!blob) return json(req, 404, { error: "not_found" });
  return new Response(blob.body, { status: 200, headers: cors(req, { "Content-Type": blob.type, "Cache-Control": "private, max-age=31536000" }) });
}

async function proxyPwa(request) {
  const url = new URL(request.url);
  const target = PWA_BASE + (url.pathname === "/" ? "/index.html" : url.pathname) + url.search;
  const init = { method: request.method, redirect: "follow", headers: new Headers(), cache: "no-store" };
  const accept = request.headers.get("Accept");
  const acceptEnc = request.headers.get("Accept-Encoding");
  if (accept) init.headers.set("Accept", accept);
  if (acceptEnc) init.headers.set("Accept-Encoding", acceptEnc);
  const res = await fetch(target, init);
  const headers = new Headers(res.headers);
  headers.delete("content-security-policy");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Cache-Control", "no-cache");
  return new Response(res.body, { status: res.status, headers: headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors(request) });
    }
    if (url.pathname === "/api/health") {
      return json(request, 200, { ok: true, r2: !!env.PHOTOS });
    }
    if (url.pathname === "/api/pull" || url.pathname === "/api/push" ||
        url.pathname === "/api/photos" || url.pathname === "/api/photos/delete" ||
        url.pathname.startsWith("/api/photos/")) {
      if (!(await checkPin(request, env))) return json(request, 401, { error: "auth" });
      try {
        if (url.pathname === "/api/pull" && request.method === "GET") return await handlePull(request, env);
        if (url.pathname === "/api/push" && request.method === "POST") return await handlePush(request, env);
        if (url.pathname === "/api/photos" && request.method === "POST") return await handlePhotoUpload(request, env);
        if (url.pathname === "/api/photos/delete" && request.method === "POST") return await handlePhotoDelete(request, env);
        if (url.pathname.startsWith("/api/photos/") && request.method === "GET") {
          const parts = url.pathname.split("/").filter(Boolean); // api, photos, itemId, id
          if (parts.length === 4) return await handlePhotoGet(request, env, parts[2], parts[3]);
        }
        return json(request, 405, { error: "method" });
      } catch (err) {
        return json(request, 500, { error: "server" });
      }
    }
    if (request.method === "GET" || request.method === "HEAD") {
      return proxyPwa(request);
    }
    return json(request, 404, { error: "not_found" });
  }
};
