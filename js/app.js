/* Levantamiento v5 — app shell (dark, Tahoma, Fig. 2-1), hash routes, one section at a time */
(function(){
"use strict";
const D = window.CGDATA;
const DW = window.CGDRAW;
const STORE = D.STORE_V2;
const PHOTO_DB = "cg-levantamiento-fotos-v2";
const PHOTO_STORE = "thumbs";

/* ---------- icons (inline SVG) ---------- */
const ICO = {
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 19l-7-7 7-7"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5L12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',
  draw: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 14h4l2-3 3 5 3-4 4 2"/></svg>',
  sum: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 5h14v6H5zM5 13h6v6H5zM13 13h6v6h-6z"/></svg>',
  piping: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 10h5l2-3h4l2 3h5"/><rect x="4" y="10" width="16" height="8" rx="1"/><circle cx="8" cy="14" r="1.2"/><circle cx="16" cy="14" r="1.2"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M10 3h4l.6 2.2a7 7 0 0 1 1.7.7L18 5l2 3.5-1.8 1.3c.1.5.2 1 .2 1.2s-.1.8-.2 1.2L20 13.5 18 17l-1.7-.9a7 7 0 0 1-1.7.7L14 21h-4l-.6-2.2a7 7 0 0 1-1.7-.7L6 17l-2-3.5 1.8-1.3A7 7 0 0 1 5.6 11c0-.4.1-.8.2-1.2L4 8.5 6 5l1.7.9a7 7 0 0 1 1.7-.7L10 3z"/><circle cx="12" cy="12" r="3"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M13 3L5 13h7l-1 8 8-10h-7l1-8z"/></svg>',
  oring: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M14 7a4 4 0 0 0-5.4 5.4L3 18v3h3l5.6-5.6A4 4 0 0 0 17 10l-3 3-3-3 3-3z"/></svg>',
  safety: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></svg>',
  plug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M9 7v5a3 3 0 0 0 6 0V7M9 3v4M15 3v4M12 15v6"/></svg>',
  flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 3h6M10 3v6L5 20h14L14 9V3"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3h8l5 5v13H7z"/><path d="M15 3v5h5"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1.5 1-1.5 2v.2"/><circle cx="12" cy="17" r=".8" fill="currentColor"/></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 21V4m0 0h10l-2 4 2 4H6"/></svg>',
  clip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="6" y="4" width="12" height="16" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>',
  cam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8h4l2-2h4l2 2h4v12H4z"/><circle cx="12" cy="14" r="4"/></svg>',
  note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  ok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12l5 5 9-9"/></svg>',
  falta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  danado: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 4l9 16H3L12 4z"/><path d="M12 10v4M12 16v1"/></svg>',
  incomp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12h8"/></svg>',
  na: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M7 7l10 10"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 11l8-4M8 13l8 4"/></svg>'
};

/* ---------- state ---------- */
function loadRaw(key){ try{ return JSON.parse(localStorage.getItem(key)||"{}"); }catch(e){ return {}; } }
function migrate(){
  const v2 = loadRaw(STORE);
  if(Object.keys(v2).length) return v2;
  const v1 = loadRaw(D.STORE_V1);
  if(Object.keys(v1).length){ localStorage.setItem(STORE, JSON.stringify(v1)); return v1; }
  return {};
}
let state = migrate();
let unit = state._unit || "hfo";
function save(){ state._unit = unit; localStorage.setItem(STORE, JSON.stringify(state)); }
function val(k, def){ const v=state[k]; return v===undefined||v===null? (def||""):v; }
function setVal(k,v){ state[k]=v; save(); refreshChrome(); }

/* ---------- index of items ---------- */
const ITEM = {};
function addItem(it, sec, group){ ITEM[it.id] = Object.assign({sec, group}, it); }
D.SECTIONS.forEach(s=>{
  (s.groups||[]).forEach(g=> (g.items||[]).forEach(it=> addItem(it,s.id,g.title)));
  (s.items||[]).forEach(it=> addItem(it,s.id,""));
});
D.GOITEMS.forEach(g=> addItem({id:g.id,label:g.label,cite:g.cite,kind:"single",est:"go"}, "s9","Go / no-go"));
D.SPARES.forEach(s=>{
  addItem({id:"sp_hfo_"+s.no,label:s.no+" · "+s.name+" ("+s.mat+")",cite:s.cite,kind:"single",est:"inst",role:"spare",no:s.no,pn:s.hfo,qty:s.qty,side:"hfo"},"s2","Kit HFO");
  addItem({id:"sp_lo_"+s.no,label:s.no+" · "+s.name+" ("+s.mat+")",cite:s.cite,kind:"single",est:"inst",role:"spare",no:s.no,pn:s.lo,qty:s.qty,side:"lo"},"s2","Kit LO");
});
D.TOOLS.forEach(t=>{
  addItem({id:"tl_hfo_"+t.no,label:t.no+" · "+t.name,cite:t.cite,kind:"single",est:"tool",role:"tool",no:t.no,pn:t.hfo,qty:t.qty,side:"hfo",naDefault:t.naDefault,naNote:t.naNote},"s3","Herramientas HFO");
  addItem({id:"tl_lo_"+t.no,label:t.no+" · "+t.name,cite:t.cite,kind:"single",est:"tool",role:"tool",no:t.no,pn:t.lo,qty:t.qty,side:"lo",naDefault:t.naDefault,naNote:t.naNote},"s3","Herramientas LO");
});
/* 822 does not apply to SJ20G / SJ30GH — prefill N/A once, do not overwrite a field entry */
(function initNATools(){
  let changed=false;
  D.TOOLS.forEach(t=>{
    if(!t.naDefault) return;
    ["hfo","lo"].forEach(side=>{
      const id="tl_"+side+"_"+t.no;
      const k=id+"__est";
      if(!state[k]){ state[k]="N/A"; changed=true; }
      const ok=id+"__obs"; // tools are kind=single
      /* v4: do not prefill explanatory N/A notes into comments */
    });
  });
  if(changed) save();
})();

function resolveId(id){
  if(!id) return id;
  return id.replace("{unit}", unit);
}
function kindOf(id){
  id=resolveId(id);
  const it=ITEM[id];
  if(it) return it.kind||"dual";
  if(id.startsWith("d.")||id.startsWith("sp_")||id.startsWith("tl_")) return "single";
  return "dual";
}
function estKey(id){
  id=resolveId(id);
  const k=kindOf(id);
  if(k==="single") return id+"__est";
  return id+"__"+unit+"__est";
}
function fieldKey(id, f){
  id=resolveId(id);
  const k=kindOf(id);
  if(k==="single") return id+"__"+f;
  return id+"__"+unit+"__"+f;
}
function getEst(id){ return val(estKey(id),""); }
function setEst(id, v){ setVal(estKey(id), v); }

const ST_CLASS = {
  "OK":"ok","Falta":"falta","Dañado":"danado","Incompleto":"incomp","N/A":"na",
  "Presente y usable":"ok","Presente dañada":"danado","Perdida":"falta",
  "Requiere reemplazo":"falta","Requiere fabricación local":"incomp",
  "Sí — listo":"ok","No — bloquea la programación":"falta","Pendiente de confirmar":"incomp"
};
const BAD = new Set(["Falta","Dañado","Incompleto","Presente dañada","Perdida","Requiere reemplazo","Requiere fabricación local","No — bloquea la programación","Pendiente de confirmar"]);
const OKSET = new Set(["OK","Presente y usable","N/A","Sí — listo"]);

function isAnswered(id){ return !!getEst(id); }
function isPending(id){
  const st=getEst(id);
  return !st || BAD.has(st);
}

function sectionItems(sid){
  if(sid==="s2") return D.SPARES.map(s=>ITEM["sp_"+unit+"_"+s.no]).filter(Boolean);
  if(sid==="s3") return D.TOOLS.map(t=>ITEM["tl_"+unit+"_"+t.no]).filter(Boolean);
  if(sid==="s9") return D.GOITEMS.map(g=>ITEM[g.id]);
  const s=D.SECTIONS.find(x=>x.id===sid);
  if(!s) return [];
  const out=[];
  if(s.groups&&s.groups.length) s.groups.forEach(g=> (g.items||[]).forEach(it=> out.push(ITEM[it.id])));
  else (s.items||[]).forEach(it=> out.push(ITEM[it.id]));
  return out.filter(Boolean);
}
function sectionGroups(sid){
  if(sid==="s2") return [{title: unit==="hfo"?"Kit HFO — SJ30GH":"Kit LO — SJ20G", items:sectionItems(sid)}];
  if(sid==="s3") return [{title: unit==="hfo"?"Herramientas HFO":"Herramientas LO", items:sectionItems(sid)}];
  if(sid==="s9") return [{title:"Decisión", items:sectionItems(sid)}];
  const s=D.SECTIONS.find(x=>x.id===sid);
  return (s && s.groups) ? s.groups : [{title:"", items:sectionItems(sid)}];
}

function countList(items){
  let a=0,falta=0,dan=0,t=items.length;
  items.forEach(it=>{
    const st=getEst(it.id);
    if(st) a++;
    if(st==="Falta"||st==="Perdida"||st==="Requiere reemplazo") falta++;
    if(st==="Dañado"||st==="Presente dañada") dan++;
  });
  return {t,a,falta,dan,pct:t?Math.round(100*a/t):0};
}
function progressOf(sid){
  return countList(sectionItems(sid));
}
function progressAll(){
  const cur=unit;
  const acc={t:0,a:0,falta:0,dan:0};
  function add(p){ acc.t+=p.t; acc.a+=p.a; acc.falta+=p.falta; acc.dan+=p.dan; }
  D.TILES.forEach(tile=>{
    if(tile.id==="datos") return;
    if(tile.id==="s2"||tile.id==="s3"){
      unit="hfo"; add(progressOf(tile.id));
      unit="lo"; add(progressOf(tile.id));
      unit=cur;
    } else add(progressOf(tile.id));
  });
  acc.pct=acc.t?Math.round(100*acc.a/acc.t):0;
  return acc;
}

/* ---------- hash router ---------- */
function parseHash(){
  const h=(location.hash||"#/").replace(/^#/,"");
  const q=new URLSearchParams((h.split("?")[1]||location.search.replace(/^\?/,"")));
  const parts=(h.split("?")[0]||"/").split("/").filter(Boolean);
  return {parts, q, path:"/"+parts.join("/")};
}
function toolsDwg(){ return unit==="lo"?"tools_lo":"tools_hfo"; }
function dwgFamily(id){ return (id==="tools"||id==="tools_hfo"||id==="tools_lo") ? "tools" : id; }
let dwgPage=0, dwgFam="";
function setDwgContext(id, keepPage){
  const fam=dwgFamily(id);
  if(fam!==dwgFam){ if(!keepPage) dwgPage=0; dwgFam=fam; }
}
function go(path){
  const hash=path.startsWith("#")?path:("#"+path);
  if(modalDepth>0 || sheetIsOn() || lbIsOn()){
    hideLbVisual(); hideSheetVisual();
    modalDepth=0;
    try{ history.replaceState(null, "", hash); }catch(e){ location.hash=hash; return; }
    route();
    return;
  }
  location.hash=hash;
}

/* ---------- chrome ---------- */
function ringSVG(pct, size){
  const r=(size/2)-4, c=2*Math.PI*r, d=c*(1-pct/100);
  return `<svg viewBox="0 0 ${size} ${size}" aria-hidden="true">
    <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="#e2ddd4" stroke-width="4"/>
    <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="#8b3e2f" stroke-width="4"
      stroke-linecap="round" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${d.toFixed(2)}"
      transform="rotate(-90 ${size/2} ${size/2})"/></svg>`;
}
function topbar(opts){
  const p=progressAll();
  return `<header class="topbar">
    ${opts.back?`<button class="back" data-go="${opts.back}" aria-label="Volver">${ICO.back}</button>`:""}
    <div class="titles">
      <div class="kicker">${opts.kicker||"Caribbean Glass  ·  ex Zanzibar"}</div>
      <h1>${opts.title||"Purificadoras Samgong"}</h1>
    </div>
    <div class="ring-wrap" title="Progreso">${ringSVG(p.pct,44)}<div class="rp">${p.pct}%</div></div>
  </header>`;
}
function unitBar(show){
  if(!show) return "";
  return `<div class="unit-bar"><div class="seg" role="tablist" aria-label="Unidad">
    <button type="button" data-unit="hfo" aria-pressed="${unit==="hfo"}">HFO · SJ30GH</button>
    <button type="button" data-unit="lo" aria-pressed="${unit==="lo"}">LO · SJ20G</button>
  </div></div>`;
}
function tabbar(cur){
  return `<nav class="tabbar" aria-label="Principal">
    <button type="button" data-go="#/" aria-current="${cur==="home"?"page":"false"}">${ICO.home}Inicio</button>
    <button type="button" data-go="#/diagramas" aria-current="${cur==="diagramas"?"page":"false"}">${ICO.draw}Diagramas</button>
    <button type="button" data-go="#/resumen" aria-current="${cur==="resumen"?"page":"false"}">${ICO.sum}Resumen</button>
  </nav>`;
}
function refreshChrome(){
  const el=document.querySelector(".ring-wrap");
  if(el){ const p=progressAll(); el.innerHTML=ringSVG(p.pct,44)+`<div class="rp">${p.pct}%</div>`; }
  /* update tile bars if on home without full rerender is harder; ok on next paint */
}

/* ---------- home ---------- */
function renderHome(){
  const p=progressAll();
  const tiles=D.TILES.map(t=>{
    if(t.id==="datos"){
      const filled=["inspector","fecha","sitio"].filter(k=>val("meta_"+k)).length;
      return tileHTML(t, {t:3,a:filled,falta:0,dan:0,pct:Math.round(100*filled/3)});
    }
    return tileHTML(t, progressOf(t.id));
  }).join("");
  document.getElementById("app").innerHTML =
    topbar({title:"Levantamiento preliminar", kicker:"Caribbean Glass  ·  Samgong SELFJECTOR"})+
    unitBar(true)+
    `<div class="main"><div class="pad">
      <section class="hero">
        <div class="lede">Visita previa al overhaul de las dos unidades ex Zanzibar 4.7 MW.</div>
        <div class="hero-stats">
          <div class="hero-ring">${ringSVG(p.pct,88)}<div class="rp"><b>${p.pct}%</b><span>${p.a}/${p.t}</span></div></div>
          <div class="stat-rows">
            <div class="row"><span>Anotados</span><span class="num">${p.a} / ${p.t}</span></div>
            <div class="row"><span>Falta / perdido</span><span class="num">${p.falta}</span></div>
            <div class="row"><span>Dañado</span><span class="num">${p.dan}</span></div>
            <div class="row"><span>Unidad activa</span><span class="num">${unit==="hfo"?"HFO SJ30GH":"LO SJ20G"}</span></div>
          </div>
        </div>
      </section>
      <div class="grid">${tiles}</div>
    </div></div>`+tabbar("home");
}
function tileHTML(t,p){
  const href = t.id==="datos" ? "#/datos" : `#/seccion/${t.id}`;
  const ico=ICO[t.icon]||ICO.doc;
  const flags=[
    p.falta?`<span class="pill falta">${p.falta} falta</span>`:"",
    p.dan?`<span class="pill danado">${p.dan} dañado</span>`:""
  ].join("");
  return `<button type="button" class="tile" data-go="${href}">
    <span class="ico">${ico}</span>
    <h2>${t.title}</h2>
    <p>${t.blurb}</p>
    <div class="meta"><span>${p.a}/${p.t}</span>${flags}</div>
    <span class="bar"><i style="width:${p.pct}%"></i></span>
  </button>`;
}

/* ---------- datos ---------- */
function renderDatos(){
  const fields=D.META_FIELDS.map(f=>{
    const typ=f.type||"text";
    const v=val("meta_"+f.id, f.value||"");
    return `<div class="field"><label for="meta_${f.id}">${f.label}</label>
      <input id="meta_${f.id}" type="${typ}" class="${f.cls||""}" value="${esc(v)}"></div>`;
  }).join("");
  document.getElementById("app").innerHTML =
    topbar({title:"Datos del levantamiento", back:"#/"})+
    `<div class="main"><div class="pad">${fields}</div></div>`+tabbar("home");
  document.querySelectorAll("[id^=meta_]").forEach(inp=>{
    inp.addEventListener("input",()=>setVal(inp.id, inp.value));
  });
}

/* ---------- section ---------- */
const SEC_ORDER = D.TILES.filter(t=>t.id!=="datos").map(t=>t.id);
function renderSection(sid, view, dwg, groupFilter, onlyPend){
  const tile=D.TILES.find(t=>t.id===sid);
  if(!tile){ go("#/"); return; }
  const idx=SEC_ORDER.indexOf(sid);
  const prev=idx>0?SEC_ORDER[idx-1]:null;
  const next=idx<SEC_ORDER.length-1?SEC_ORDER[idx+1]:null;
  const defaultView=tile.defaultView||"lista";
  view = view || defaultView;
  if(view==="plano"){
    if(!dwg){
      if(sid==="s11") dwg = "fig21";
      else if(sid==="s12") dwg="bowl";
      else if(sid==="s3") dwg = toolsDwg();
    }
    if(dwg==="booster") dwg="fig21";
    if(dwg==="tools") dwg=toolsDwg();
    setDwgContext(dwg);
  }
  const p=progressOf(sid);
  const groups=sectionGroups(sid);
  const chips = groups.length>1 ? `<div class="chip-row">
    <button type="button" class="chip ${!groupFilter?"on":""}" data-grp="">Todas</button>
    ${groups.map(g=>`<button type="button" class="chip ${groupFilter===g.title?"on":""}" data-grp="${esc(g.title)}">${esc(shortGrp(g.title))}</button>`).join("")}
  </div>` : "";

  const viewChips = tile.hasPlan ? `<div class="chip-row">
    ${sid==="s11"?`
      <button class="chip ${dwg==="fig21"&&view==="plano"?"on":""}" data-go="#/seccion/s11/plano/fig21">Sistema de purificación</button>
      <button class="chip ${dwg==="hdzzb01"&&view==="plano"?"on":""}" data-go="#/seccion/s11/plano/hdzzb01">Flujo HFO</button>
      <button class="chip ${dwg==="hdzzb03"&&view==="plano"?"on":""}" data-go="#/seccion/s11/plano/hdzzb03">Flujo LO</button>`:""}
    ${sid==="s3"?`
      <button class="chip ${view!=="plano"?"on":""}" data-go="#/seccion/s3">Tarjetas</button>
      <button class="chip ${dwg===(unit==="lo"?"tools_lo":"tools_hfo")&&view==="plano"?"on":""}" data-go="#/seccion/s3/plano/${unit==="lo"?"tools_lo":"tools_hfo"}">Lista</button>`:""}
    ${sid==="s12"?`
      <button class="chip ${dwg==="bowl"&&view==="plano"?"on":""}" data-go="#/seccion/s12/plano/bowl">Bowl</button>
      <button class="chip ${dwg==="water"&&view==="plano"?"on":""}" data-go="#/seccion/s12/plano/water">Agua 701–711</button>
      <button class="chip ${dwg==="hshaft"&&view==="plano"?"on":""}" data-go="#/seccion/s12/plano/hshaft">Eje hor. / freno</button>
      <button class="chip ${dwg==="pump"&&view==="plano"?"on":""}" data-go="#/seccion/s12/plano/pump">Bomba GP20G</button>
      <button class="chip ${dwg==="frame"&&view==="plano"?"on":""}" data-go="#/seccion/s12/plano/frame">Bastidor</button>`:""}
    ${sid!=="s3"?`<button class="chip ${view==="lista"?"on":""}" data-go="#/seccion/${sid}/lista">Lista</button>`:""}
  </div>` : "";

  let body;
  if(view==="plano" && dwg && DW.CATALOG[dwg]) body = drawingHTML(dwg, onlyPend);
  else body = listHTML(sid, groupFilter, onlyPend);

  document.getElementById("app").innerHTML =
    topbar({title:tile.short||tile.title, kicker:tile.title, back:"#/"})+
    unitBar(sid==="s2"||sid==="s3"||sid==="s11"||sid==="s12"||sid==="s13")+
    `<div class="main"><div class="pad">
      <div class="draw-head"><h2>${tile.title}</h2><div class="count">${p.a} / ${p.t} · ${p.falta} falta · ${p.dan} dañado</div></div>
      ${viewChips}
      <div class="filters">
        <label class="toggle"><input type="checkbox" id="onlyPend" ${onlyPend?"checked":""}> Solo pendientes / faltantes</label>
      </div>
      ${view==="lista"?chips:""}
      <div id="sec-body"><div id="dwg-root">${body}</div></div>
      <div class="nav-sec">
        <button type="button" ${prev?`data-go="#/seccion/${prev}"`:"disabled"}>${prev?"← "+(D.TILES.find(t=>t.id===prev)||{}).short:""}</button>
        <button type="button" ${next?`data-go="#/seccion/${next}"`:"disabled"}>${next?(D.TILES.find(t=>t.id===next)||{}).short+" →":""}</button>
      </div>
    </div></div>`+tabbar("home")+sheetHTML()+lightboxHTML();

  if(view==="plano" && dwg){
    paintDrawing(document.getElementById("svg-vp"), onlyPend);
    enablePanZoom(document.getElementById("svg-vp"));
    bindDrawingClicks(document.getElementById("svg-vp"));
  }
  bindPhotos();
  bindToolCards();
  const pend=document.getElementById("onlyPend");
  if(pend) pend.addEventListener("change",()=>{
    const r=parseHash();
    const base="#/"+(r.parts.join("/"));
    go(base + (pend.checked?"?pend=1":""));
  });
  document.querySelectorAll("[data-grp]").forEach(b=>{
    b.addEventListener("click",()=>{
      const r=parseHash();
      const q=new URLSearchParams();
      if(b.dataset.grp) q.set("grp", b.dataset.grp);
      if(document.getElementById("onlyPend")?.checked) q.set("pend","1");
      go("#/seccion/"+sid+"/lista"+(q.toString()?"?"+q:""));
    });
  });
}
function sIntro(sid){
  const s=D.SECTIONS.find(x=>x.id===sid);
  if(s&&s.intro) return s.intro;
  const t=D.TILES.find(x=>x.id===sid);
  return t?t.blurb:"";
}

/* ---------- list ---------- */
function listHTML(sid, grp, onlyPend){
  if(sid==="s3") return toolCardsHTML(onlyPend);
  const groups=sectionGroups(sid);
  return groups.map(g=>{
    if(grp && g.title!==grp) return "";
    const items=(g.items||[]).filter(it=> !onlyPend || isPending(it.id));
    if(!items.length) return "";
    return `${g.title?`<h3 class="h3">${esc(g.title)}</h3>`:""}${items.map(it=>itemCard(it)).join("")}`;
  }).join("") || `<p class="note">No hay ítems en este filtro.</p>`;
}
function toolShape(no){
  const p="assets/diagrams/tools/"+no+".png";
  return (window.CG_ASSETS && window.CG_ASSETS[p]) || p;
}
function toolCardsHTML(onlyPend){
  const items=sectionItems("s3").filter(it=> !onlyPend || isPending(it.id));
  if(!items.length) return `<p class="note">No hay ítems en este filtro.</p>`;
  const cards=items.map(it=>{
    const st=getEst(it.id)||"";
    const cls=ST_CLASS[st]||"";
    const miss=it.no==="822";
    const src=miss?"":toolShape(it.no);
    const shape=miss
      ? ``
      : `<div class="shape"><img src="${esc(src)}" alt="${esc(it.name||it.label)}"></div>`;
    return `<button type="button" class="tool-card ${miss?"na-card":""}" data-tool="${esc(it.id)}">
      ${shape}
      <div class="body">
        <div class="no">${esc(it.no)}</div>
        <h3>${esc(it.no==="822"?it.label.replace(/^822 · /,""): (D.TOOLS.find(t=>t.no===it.no)||{}).name || it.label)}</h3>
        <div class="meta">P/N ${esc(it.pn)} · cant. ${esc(it.qty)}</div>
        <span class="pill stpill ${cls}">${esc(st||"Sin anotar")}</span>
      </div>
    </button>`;
  }).join("");
  return `<div class="tool-grid">${cards}</div>`;
}
function estButtons(id, opts){
  return `<div class="status" role="group">${opts.map(o=>{
    const cls=ST_CLASS[o]||"na";
    const ico=ICO[cls]||"";
    const on=getEst(id)===o;
    return `<button type="button" class="${cls}" data-est-for="${esc(resolveId(id))}" data-est="${esc(o)}" aria-pressed="${on}">${ico}${esc(o)}</button>`;
  }).join("")}</div>`;
}
function itemCard(it){
  const id=it.id;
  const opts = it.est==="tool"?D.EST_TOOL : it.est==="go"?["Sí — listo","No — bloquea la programación","Pendiente de confirmar","N/A"]:D.EST_INST;
  const qty = it.role==="spare"||it.role==="tool";
  let extra="";
  if(it.role==="spare"){
    const stock=val("stk_"+id,"");
    const ask=Math.max(0,(it.qty||0)-(parseFloat(stock)||0));
    extra = `<div class="pn">P/N ${esc(it.pn)} · req. ${it.qty}</div>
      <div class="step"><label>En stock</label><div class="ctrl">
        <button type="button" data-step="stk_${id}" data-d="-1">−</button>
        <input type="number" min="0" id="stk_${id}" value="${esc(stock)}">
        <button type="button" data-step="stk_${id}" data-d="1">+</button>
      </div><span class="req">A pedir: <b data-ask="${id}">${ask}</b></span></div>`;
  } else if(it.role==="tool"){
    extra = `<div class="pn">P/N ${esc(it.pn)} · cant. ${it.qty}</div>
      <div class="step"><label>Cant. hallada</label><div class="ctrl">
        <button type="button" data-step="${fieldKey(id,"qty")}" data-d="-1">−</button>
        <input type="number" min="0" id="${fieldKey(id,"qty")}" value="${esc(val(fieldKey(id,"qty"),""))}">
        <button type="button" data-step="${fieldKey(id,"qty")}" data-d="1">+</button>
      </div></div>`;
  } else {
    extra = `<div class="step"><label>Cant. hallada</label><div class="ctrl">
      <button type="button" data-step="${fieldKey(id,"qty")}" data-d="-1">−</button>
      <input type="number" min="0" id="${fieldKey(id,"qty")}" value="${esc(val(fieldKey(id,"qty"),""))}">
      <button type="button" data-step="${fieldKey(id,"qty")}" data-d="1">+</button>
    </div></div>`;
  }
  const openNotes=!!val(fieldKey(id,"obs"));
  return `<article class="item" data-item="${esc(resolveId(id))}">
    <div class="item-title">${esc(it.label)}</div>
    ${estButtons(id, opts)}
    ${extra}
    <div class="item-actions">
      <button type="button" class="icon-btn" data-notes="${esc(resolveId(id))}">${ICO.note} Nota</button>
      <label class="icon-btn">${ICO.cam} Foto
        <input type="file" accept="image/*" capture="environment" data-photo="${esc(resolveId(id))}" hidden>
      </label>
    </div>
    <div class="notes ${openNotes?"":"hidden"}" data-notes-box="${esc(resolveId(id))}">
      <textarea data-obs="${esc(resolveId(id))}" placeholder="Observaciones">${esc(val(fieldKey(id,"obs")))}</textarea>
    </div>
    <div class="thumbs" data-thumbs="${esc(resolveId(id))}"></div>
  </article>`;
}

/* ---------- drawing ---------- */
function drawingHTML(dwg, onlyPend, pageIdx){
  const meta=DW.CATALOG[dwg];
  const parts=DW.render(dwg, unit, (pageIdx==null?dwgPage:pageIdx)||0);
  const chrome=parts.chrome||"", stage=parts.stage||"", below=parts.below||"";
  const ids=DW.idsIn(dwg, unit).map(resolveId);
  const tot=ids.length;
  const done=ids.filter(id=>isAnswered(id)).length;
  return `<div class="legend">
      <span><i></i>Sin anotar</span><span><i class="ok"></i>OK</span>
      <span><i class="falta"></i>Falta</span><span><i class="danado"></i>Dañado</span>
      <span><i class="incomp"></i>Incompleto</span><span><i class="na"></i>N/A</span>
    </div>
    <div class="draw-head"><span class="count" id="dwg-count">${done} / ${tot} en este plano</span></div>
    ${chrome}
    <div class="viewport" id="svg-vp"><div class="stage">${stage}</div>
      <div class="zoom-tools">
        <button type="button" data-z="in" aria-label="Acercar">+</button>
        <button type="button" data-z="out" aria-label="Alejar">−</button>
        <button type="button" data-z="reset" aria-label="Ajustar">⌂</button>
      </div>
    </div>
    ${below}`;
}
function asset(p){ if(!p) return ""; return (window.CG_ASSETS && window.CG_ASSETS[p]) || p; }

function paintDrawing(vp, onlyPend){
  if(!vp) return;
  const nodes=[...vp.querySelectorAll(".hot[data-id], .hot-btn[data-id]")];
  nodes.forEach(g=>{
    const id=resolveId(g.getAttribute("data-id"));
    g.setAttribute("data-id", id);
    g.classList.remove("st-ok","st-falta","st-danado","st-incomp","st-na");
    const st=getEst(id);
    const cls=ST_CLASS[st];
    if(cls) g.classList.add("st-"+cls);
    if(onlyPend && st && OKSET.has(st)) g.style.opacity=".28";
    else g.style.opacity="";
  });
  document.querySelectorAll(".leg-table tr[data-id]").forEach(tr=>{
    const id=resolveId(tr.getAttribute("data-id"));
    tr.setAttribute("data-id", id);
    tr.classList.remove("st-ok","st-falta","st-danado","st-incomp","st-na");
    const st=getEst(id);
    const cls=ST_CLASS[st];
    if(cls) tr.classList.add("st-"+cls);
  });
  const wrap=vp.querySelector(".draw-wrap");
  const dwg=wrap && wrap.getAttribute("data-dwg");
  const uniq = dwg ? [...new Set(DW.idsIn(dwg, unit).map(resolveId))]
                   : [...new Set(nodes.map(g=>g.getAttribute("data-id")).filter(Boolean))];
  const done=uniq.filter(isAnswered).length;
  const c=document.getElementById("dwg-count");
  if(c) c.textContent=`${done} / ${uniq.length} en este plano`;
}
function bindDrawingClicks(vp){
  if(!vp) return;
  function openFrom(el){
    if(vp._moved) return;
    const id=el.getAttribute("data-id");
    const hot=el.getAttribute("data-hot");
    const tag=hot && DW.tagOf(hot);
    const title=tag ? tag.en : ((el.querySelector("title")||{}).textContent||id);
    openSheet(id, title, tag);
  }
  vp.querySelectorAll(".hot[data-id], .hot-btn[data-id]").forEach(g=>{
    g.addEventListener("click", e=>{
      e.stopPropagation();
      openFrom(g);
    });
  });
  document.querySelectorAll(".leg-table tr[data-id]").forEach(tr=>{
    tr.addEventListener("click", ()=> openFrom(tr));
  });
  vp.querySelectorAll("[data-z]").forEach(b=> b.addEventListener("click",()=>vp._zoom(b.dataset.z)));
}
function drawingHost(){
  return document.getElementById("dwg-root") || document.getElementById("sec-body");
}
function showDrawingPage(catalogId, page, onlyPend){
  const id = (catalogId==="tools") ? toolsDwg() : catalogId;
  dwgPage = +page||0;
  setDwgContext(id, true);
  const host=drawingHost();
  if(!host) return false;
  host.innerHTML=drawingHTML(id, onlyPend, dwgPage);
  const nvp=document.getElementById("svg-vp");
  paintDrawing(nvp, onlyPend);
  enablePanZoom(nvp);
  bindDrawingClicks(nvp);
  return true;
}

function enablePanZoom(vp){
  if(!vp) return;
  const stage=vp.querySelector(".stage");
  let s=1,x=0,y=0;
  const pts=new Map();
  function apply(){ stage.style.transform=`translate(${x}px,${y}px) scale(${s})`; }
  function fit(){
    const wrap=stage.querySelector(".draw-wrap")||stage;
    const r=vp.getBoundingClientRect();
    const w=wrap.offsetWidth||r.width, h=wrap.offsetHeight||r.height;
    s=Math.min(1, (r.width-8)/Math.max(1,w), (r.height-8)/Math.max(1,h));
    x=(r.width - w*s)/2; y=(r.height - h*s)/2;
    apply();
  }
  const img=stage.querySelector("img.dwg");
  if(img){ if(img.complete) setTimeout(fit,0); else img.addEventListener("load", fit, {once:true}); }
  else setTimeout(fit,0);
  vp._zoom = (cmd)=>{
    if(cmd==="reset") return fit();
    const f=cmd==="in"?1.25:0.8;
    const r=vp.getBoundingClientRect();
    const cx=r.width/2, cy=r.height/2;
    const ns=Math.min(8, Math.max(0.4, s*f));
    x = cx - (cx-x)*(ns/s); y = cy - (cy-y)*(ns/s); s=ns; apply();
  };
  vp.addEventListener("wheel", ev=>{
    ev.preventDefault();
    const f=ev.deltaY<0?1.12:0.9;
    const r=vp.getBoundingClientRect();
    const cx=ev.clientX-r.left, cy=ev.clientY-r.top;
    const ns=Math.min(8, Math.max(0.4, s*f));
    x = cx - (cx-x)*(ns/s); y = cy - (cy-y)*(ns/s); s=ns; apply();
  }, {passive:false});
  vp.addEventListener("pointerdown", ev=>{
    vp._moved=false; vp._sx=ev.clientX; vp._sy=ev.clientY;
    pts.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});
    vp.setPointerCapture(ev.pointerId);
  });
  vp.addEventListener("pointermove", ev=>{
    if(!pts.has(ev.pointerId)) return;
    if(pts.size===1){
      const dx=ev.clientX-vp._sx, dy=ev.clientY-vp._sy;
      if(Math.hypot(dx,dy)>6) vp._moved=true;
      x+=ev.clientX-pts.get(ev.pointerId).x;
      y+=ev.clientY-pts.get(ev.pointerId).y;
      pts.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});
      apply();
    } else if(pts.size===2){
      const arr=[...pts.values()];
      const d0=Math.hypot(arr[0].x-arr[1].x, arr[0].y-arr[1].y)||1;
      pts.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});
      const arr2=[...pts.values()];
      const d1=Math.hypot(arr2[0].x-arr2[1].x, arr2[0].y-arr2[1].y)||1;
      const r=vp.getBoundingClientRect();
      const cx=(arr2[0].x+arr2[1].x)/2-r.left, cy=(arr2[0].y+arr2[1].y)/2-r.top;
      const ns=Math.min(8, Math.max(0.4, s*(d1/d0)));
      x = cx - (cx-x)*(ns/s); y = cy - (cy-y)*(ns/s); s=ns; apply();
      vp._moved=true;
    }
  });
  vp.addEventListener("pointerup", ev=> pts.delete(ev.pointerId));
  vp.addEventListener("pointercancel", ev=> pts.delete(ev.pointerId));
}

function cleanDesc(s, tag){
  if(!s) return "";
  let x=String(s);
  const hadMissing=/sin descripci[oó]n/i.test(x) || /no hay descripci[oó]n/i.test(x);
  x=x.replace(/\s*sin descripci[oó]n en el manual\.?/gi, "");
    x=x.replace(/\s*sin descripci[oó]n individual en el manual\.?/gi, "");
    x=x.replace(/\s*Etiqueta del plano\.?/gi, "");
  x=x.replace(/\s*No hay descripci[oó]n individual[^.]*\./gi, "");
  x=x.replace(/\s*No se suministra en (la )?especificación automática GBC-1[^.]*\./gi, "");
  x=x.replace(/\s*No se suministra en (especificación )?GBC-1[^.]*\./gi, "");
  x=x.replace(/\s*En la especificación automática GBC-1[^.]*\./gi, "");
  x=x.replace(/\s*En GBC-1 \(LO\)[^.]*\./gi, "");
  x=x.replace(/\s*\(nota de Fig\.?\s*2-1[^)]*\)/gi, "");
  x=x.replace(/\s*·\s*no aplica a GBC-1[^·]*/gi, "");
  x=x.replace(/\s{2,}/g," ").replace(/\s*·\s*$/,"").replace(/^\s*·\s*/,"").trim();
  if(hadMissing && (!x || (tag && x.replace(/[·\s—–-]/g,"")===String(tag).replace(/[·\s—–-]/g,"")))) return "";
  return x;
}
/* ---------- bottom sheet ---------- */
function sheetHTML(){
  return `<div class="scrim" id="scrim"></div>
    <div class="sheet" id="sheet" role="dialog" aria-modal="true">
      <div class="handle" id="sheet-handle" aria-hidden="true"></div>
      <button type="button" class="close-x" id="sheet-x" aria-label="Cerrar">${ICO.close}</button>
      <h3 id="sheet-title"></h3>
      <p class="sheet-es" id="sheet-es"></p>
      <div class="sheet-sketch" id="sheet-sketch" hidden></div>
      <div id="sheet-cite"></div>
      <div id="sheet-status"></div>
      <div class="field"><label>Comentario</label><textarea id="sheet-obs" rows="3"></textarea></div>
      <div class="item-actions">
        <label class="icon-btn">${ICO.cam} Foto
          <input type="file" accept="image/*" capture="environment" id="sheet-photo" hidden>
        </label>
      </div>
      <div class="thumbs" id="sheet-thumbs"></div>
    </div>`;
}
function lightboxHTML(){
  return `<div class="lb" id="lb"><button type="button" id="lb-x" class="close-x" aria-label="Cerrar">${ICO.close}</button><img id="lb-img" alt="Plano"></div>`;
}
function openSheet(id, title, tag){
  id=resolveId(id);
  tag = tag || DW.tagOf(id) || null;
  const it=ITEM[id]||{id,label:id,kind:"single"};
  const opts = it.est==="tool"?D.EST_TOOL : it.est==="go"?["Sí — listo","No — bloquea la programación","Pendiente de confirmar","N/A"]:D.EST_INST;
  const en = (tag && tag.en) || title || it.label || id;
  const es = cleanDesc((tag && tag.es) || "", (tag && tag.tag) || "");
  document.getElementById("sheet-title").textContent = en;
  const esEl=document.getElementById("sheet-es");
  if(esEl){ esEl.textContent=es; esEl.style.display=es?"":"none"; }
  const sketchEl=document.getElementById("sheet-sketch");
  if(sketchEl){
    const no=it && it.no;
    const side=(it && it.side) || unit || "hfo";
    if(it && it.role==="tool" && no && no!=="822"){
      const full=`assets/diagrams/tools/full/${side}/${no}.png`;
      const src=(window.CG_ASSETS && (window.CG_ASSETS[full] || window.CG_ASSETS[`assets/diagrams/tools/${no}.png`])) || full;
      sketchEl.innerHTML=`<img src="${esc(src)}" alt="${esc(it.label||no)}">`;
      sketchEl.hidden=false;
    } else {
      sketchEl.innerHTML="";
      sketchEl.hidden=true;
    }
  }
  const citeEl=document.getElementById("sheet-cite");
  if(citeEl){ citeEl.innerHTML=""; citeEl.hidden=true; }
  document.getElementById("sheet-status").innerHTML = estButtons(id, opts);
  const ta=document.getElementById("sheet-obs");
  ta.value=val(fieldKey(id,"obs"));
  ta.oninput=()=>setVal(fieldKey(id,"obs"), ta.value);
  const inp=document.getElementById("sheet-photo");
  inp.onchange=()=>{ if(inp.files[0]) addPhoto(id, inp.files[0]).then(()=>renderThumbs(id, document.getElementById("sheet-thumbs"))); inp.value=""; };
  renderThumbs(id, document.getElementById("sheet-thumbs"));
  const sheetEl=document.getElementById("sheet");
  const already=sheetEl.classList.contains("on");
  sheetEl.dataset.id=id;
  sheetEl.classList.add("on");
  document.getElementById("scrim").classList.add("on");
  if(!already) pushModal("sheet");
}
let modalDepth=0;
function sheetIsOn(){ return !!document.getElementById("sheet")?.classList.contains("on"); }
function lbIsOn(){ return !!document.getElementById("lb")?.classList.contains("on"); }
function pushModal(kind){
  try{ history.pushState({cgModal:kind}, ""); }catch(e){}
  modalDepth++;
}
function hideSheetVisual(){
  const sheet=document.getElementById("sheet");
  if(sheet){ sheet.classList.remove("on"); sheet.style.transform=""; }
  document.getElementById("scrim")?.classList.remove("on");
  const vp=document.getElementById("svg-vp");
  if(vp) paintDrawing(vp, document.getElementById("onlyPend")?.checked);
}
function hideLbVisual(){ document.getElementById("lb")?.classList.remove("on"); }
function closeSheet(opts){
  opts=opts||{};
  if(lbIsOn()){
    hideLbVisual();
    if(!opts.fromPop && modalDepth>0){ modalDepth--; try{ history.back(); }catch(e){} }
    else if(opts.fromPop && modalDepth>0) modalDepth--;
    return true;
  }
  if(sheetIsOn()){
    hideSheetVisual();
    if(!opts.fromPop && modalDepth>0){ modalDepth--; try{ history.back(); }catch(e){} }
    else if(opts.fromPop && modalDepth>0) modalDepth--;
    return true;
  }
  return false;
}
function closeAllModals(opts){
  opts=opts||{};
  hideLbVisual();
  hideSheetVisual();
  if(!opts.fromPop){
    while(modalDepth>0){ modalDepth--; try{ history.back(); }catch(e){} }
  } else {
    modalDepth=0;
  }
}

/* ---------- photos (IndexedDB) ---------- */
function idb(){
  return new Promise((res,rej)=>{
    const r=indexedDB.open(PHOTO_DB,1);
    r.onupgradeneeded=()=> r.result.createObjectStore(PHOTO_STORE);
    r.onsuccess=()=>res(r.result);
    r.onerror=()=>rej(r.error);
  });
}
async function photoList(id){
  try{
    const db=await idb();
    return await new Promise((res,rej)=>{
      const q=db.transaction(PHOTO_STORE).objectStore(PHOTO_STORE).get(id);
      q.onsuccess=()=>res(q.result||[]);
      q.onerror=()=>rej(q.error);
    });
  }catch(e){ return []; }
}
async function photoSet(id, arr){
  const db=await idb();
  return new Promise((res,rej)=>{
    const q=db.transaction(PHOTO_STORE,"readwrite").objectStore(PHOTO_STORE).put(arr,id);
    q.onsuccess=()=>res(); q.onerror=()=>rej(q.error);
  });
}
async function addPhoto(id, file){
  const bmp=await createImageBitmap(file);
  const max=800; let w=bmp.width,h=bmp.height;
  if(Math.max(w,h)>max){ const r=max/Math.max(w,h); w=Math.round(w*r); h=Math.round(h*r); }
  const c=document.createElement("canvas"); c.width=w; c.height=h;
  c.getContext("2d").drawImage(bmp,0,0,w,h);
  const data=c.toDataURL("image/jpeg",0.72);
  const arr=await photoList(id); arr.push({t:Date.now(), data});
  await photoSet(id, arr);
}
async function renderThumbs(id, el){
  if(!el) return;
  const arr=await photoList(id);
  el.innerHTML=arr.map((p,i)=>`<img src="${p.data}" alt="foto ${i+1}" data-del="${id}:${i}">`).join("");
  el.querySelectorAll("img").forEach(img=>{
    img.addEventListener("click",()=>{
      const lb=document.getElementById("lb"); if(!lb) return;
      document.getElementById("lb-img").src=img.src;
      const already=lbIsOn();
      lb.classList.add("on");
      if(!already) pushModal("lb");
    });
  });
}
function bindToolCards(){
  document.querySelectorAll("[data-tool]").forEach(b=>{
    b.addEventListener("click",()=>{
      const id=b.getAttribute("data-tool");
      const it=ITEM[id];
      openSheet(id, it&&it.label);
    });
  });
}
function bindPhotos(){
  document.querySelectorAll("[data-photo]").forEach(inp=>{
    inp.addEventListener("change", async ()=>{
      if(!inp.files[0]) return;
      const id=inp.dataset.photo;
      await addPhoto(id, inp.files[0]);
      inp.value="";
      renderThumbs(id, document.querySelector(`[data-thumbs="${CSS.escape(id)}"]`));
    });
  });
  document.querySelectorAll("[data-thumbs]").forEach(el=> renderThumbs(el.dataset.thumbs, el));
}

/* ---------- resumen / diagramas ---------- */
function renderDiagramas(dwg){
  if(dwg==="booster"){ go("#/diagramas"); return; }
  const isTools = dwg==="tools" || dwg==="tools_hfo" || dwg==="tools_lo";
  if(isTools) dwg = toolsDwg();
  if(dwg && DW.CATALOG[dwg]){
    setDwgContext(dwg);
    const meta=DW.CATALOG[dwg];
    const title = isTools ? "Herramientas especiales" : meta.title;
    document.getElementById("app").innerHTML =
      topbar({title:title, kicker:"Diagramas", back:"#/diagramas"})+unitBar(true)+
      `<div class="main"><div class="pad"><div id="dwg-root">${drawingHTML(dwg,false,dwgPage)}</div></div></div>`+
      tabbar("diagramas")+sheetHTML()+lightboxHTML();
    paintDrawing(document.getElementById("svg-vp"));
    enablePanZoom(document.getElementById("svg-vp"));
    bindDrawingClicks(document.getElementById("svg-vp"));
    return;
  }
  dwgFam=""; dwgPage=0;
  const skip=new Set(["booster","tools_hfo","tools_lo"]);
  const list=Object.values(DW.CATALOG).filter(d=>d && d.id && !skip.has(d.id));
  const cards=list.map(d=>`
    <button type="button" class="tile" data-go="#/diagramas/${d.id}">
      <span class="ico">${ICO.draw}</span>
      <h2>${esc(d.title)}</h2>
    </button>`).join("")+`
    <button type="button" class="tile" data-go="#/diagramas/tools">
      <span class="ico">${ICO.draw}</span>
      <h2>Herramientas especiales</h2>
    </button>`;
  document.getElementById("app").innerHTML =
    topbar({title:"Diagramas interactivos", kicker:"Caribbean Glass  ·  Samgong SELFJECTOR"})+
    `<div class="main"><div class="pad">
      <div class="grid">${cards}</div>
    </div></div>`+tabbar("diagramas");
}

function renderResumen(){
  const p=progressAll();
  const flags=[];
  const shop=[];
  D.TILES.forEach(t=>{
    if(t.id==="datos") return;
    sectionItems(t.id).forEach(it=>{
      const st=getEst(it.id);
      if(BAD.has(st) || st==="Falta" || st==="Dañado"){
        flags.push({sec:t.short||t.title, it, st, unit: it.side||unit, obs:val(fieldKey(it.id,"obs"))});
      }
      if(it.role==="spare"){
        const stock=parseFloat(val("stk_"+it.id,""))||0;
        const ask=Math.max(0,(it.qty||0)-stock);
        if(ask>0) shop.push({lado:it.side, no:it.no, name:it.label, pn:it.pn, qty:it.qty, stock, ask});
      }
      if(it.role==="tool" && (st==="Perdida"||st==="Requiere reemplazo"||st==="Requiere fabricación local"||st==="Presente dañada")){
        shop.push({lado:it.side, no:it.no, name:it.label, pn:it.pn, qty:it.qty, stock:"", ask:it.qty, tool:true, st});
      }
    });
  });
  const go=D.GOITEMS.map(g=>{
    const st=getEst(g.id)||"Pendiente";
    return `<div class="faltante"><span class="pill ${ST_CLASS[st]||""}">${esc(st)}</span><div><b>${esc(g.label)}</b></div></div>`;
  }).join("");
  document.getElementById("app").innerHTML =
    topbar({title:"Resumen y decisión", kicker:"Informe de campo"})+
    `<div class="main"><div class="pad">
      <section class="hero">
        <div class="hero-stats">
          <div class="hero-ring">${ringSVG(p.pct,88)}<div class="rp"><b>${p.pct}%</b><span>${p.a}/${p.t}</span></div></div>
          <div class="stat-rows">
            <div class="row"><span>Falta / perdido</span><span class="num">${p.falta}</span></div>
            <div class="row"><span>Dañado</span><span class="num">${p.dan}</span></div>
          </div>
        </div>
        <div class="actions">
          <button type="button" class="btn" id="btn-csv">Exportar CSV</button>
          <button type="button" class="btn primary" id="btn-pdf">Informe PDF</button>
          <button type="button" class="btn ghost" id="btn-share">${ICO.share} Compartir</button>
        </div>
      </section>
      <h3 class="h3">Faltantes y dañados</h3>
      ${flags.length?flags.map(f=>`<div class="faltante"><span class="pill ${ST_CLASS[f.st]||"falta"}">${esc(f.st)}</span>
        <div><b>${esc(f.it.label)}</b><div class="sub">${esc(f.sec)} · ${esc(f.unit||"")}</div>
        ${f.obs?`<div>${esc(f.obs)}</div>`:""}</div></div>`).join(""):`<p class="note">Todavía no hay ítems en falta o dañados.</p>`}
      <h3 class="h3">Lista a pedir (sellos y herramientas)</h3>
      ${shop.length?`<table class="shop"><thead><tr><th>Lado</th><th>Ítem</th><th>P/N</th><th>Req.</th><th>Stock</th><th>A pedir</th></tr></thead>
        <tbody>${shop.map(r=>`<tr><td>${esc(r.lado)}</td><td>${esc(r.name)}</td><td class="pn">${esc(r.pn)}</td><td>${r.qty||""}</td><td>${r.stock}</td><td><b>${r.ask}</b></td></tr>`).join("")}</tbody></table>`
        :`<p class="note">Sin pendientes de compra (rellene stock en la sección 2, o estado de herramientas en la 3).</p>`}
      <h3 class="h3">Go / no-go</h3>
      ${go}
      <div class="field"><label>Faltantes críticos (síntesis)</label><textarea id="go_faltantes">${esc(val("go_faltantes"))}</textarea></div>
      <div class="field"><label>Decisión y fecha tentativa</label><textarea id="go_decision">${esc(val("go_decision"))}</textarea></div>
    </div></div>`+tabbar("resumen");
  document.getElementById("go_faltantes").oninput=e=>setVal("go_faltantes",e.target.value);
  document.getElementById("go_decision").oninput=e=>setVal("go_decision",e.target.value);
  document.getElementById("btn-csv").onclick=exportCSV;
  document.getElementById("btn-pdf").onclick=()=>window.print();
  document.getElementById("btn-share").onclick=shareReport;
}

/* ---------- csv / share ---------- */
function csvEsc(s){ s=s==null?"":String(s); return /[",\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s; }
function exportCSV(){
  const rows=[["seccion","id","lado","descripcion","estado","cant","stock","a_pedir","parte","observaciones"]];
  function push(sec,it,lado){
    const id=it.id;
    const stock=val("stk_"+id,"");
    const ask=it.qty!=null?Math.max(0,it.qty-(parseFloat(stock)||0)):"";
    rows.push([sec,id,lado||it.side||"",it.label,getEst(id),val(fieldKey(id,"qty")),stock,ask,it.pn||"",val(fieldKey(id,"obs"))].map(csvEsc));
  }
  D.TILES.forEach(t=>{
    if(t.id==="datos") return;
    sectionItems(t.id).forEach(it=>{
      if((it.kind||"dual")==="dual"){
        const cur=unit;
        unit="hfo"; push(t.title,it,"HFO");
        unit="lo"; push(t.title,it,"LO");
        unit=cur;
      } else push(t.title,it,it.side||"");
    });
  });
  const blob=new Blob([rows.map(r=>r.join(",")).join("\n")],{type:"text/csv;charset=utf-8"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="levantamiento-purificadoras-caribbean-glass.csv";
  a.click(); URL.revokeObjectURL(a.href);
  return blob;
}
async function shareReport(){
  const p=progressAll();
  const text=`Levantamiento purificadoras Caribbean Glass (ex Zanzibar)\nProgreso ${p.a}/${p.t} (${p.pct}%). Falta: ${p.falta}. Dañado: ${p.dan}.\nUnidad activa: ${unit==="hfo"?"HFO SJ30GH":"LO SJ20G"}.`;
  const blob=exportCSV();
  const file=new File([blob],"levantamiento-purificadoras-caribbean-glass.csv",{type:"text/csv"});
  try{
    if(navigator.share && navigator.canShare && navigator.canShare({files:[file]})){
      await navigator.share({title:"Levantamiento purificadoras", text, files:[file]}); return;
    }
    if(navigator.share){ await navigator.share({title:"Levantamiento purificadoras", text}); return; }
  }catch(e){ if(e && e.name==="AbortError") return; }
  await navigator.clipboard?.writeText(text);
  alert("Resumen copiado al portapapeles (este navegador no ofrece Web Share).");
}

/* ---------- events / render ---------- */
function shortGrp(t){t=String(t||"").replace(/^\d+(\.\d+)?\s*/,""); const map={"Interfaz de proceso — boquillas de cada unidad":"Boquillas N-1 a N-11","Tanques y equipos de la unidad (lista de suministro)":"Tanques y equipos","Instrumentación (programa HD0071P-IS)":"Instrumentos","Instrumentación":"Instrumentos","Interfaz de planta (P&ID del booster HFO, Vol. V)":"Interfaz de planta","Interfaz de planta":"Interfaz de planta","Identificación y bancada":"Identificación","Conjunto mecánico (según planos de conjunto y MM)":"Conjunto mecánico","Conjunto mecánico":"Conjunto mecánico","Potencia":"Potencia","Control, sensores y alarmas":"Control y alarmas"}; return map[t]||(t.length>28?t.slice(0,26)+"…":t);}
function esc(s){ return String(s||"").replace(/[&<>"']/g,c=>({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;" }[c])); }

function route(){
  const r=parseHash();
  const [a,b,c,d]=r.parts;
  const pend=r.q.get("pend")==="1" || new URLSearchParams(location.search).get("pend")==="1";
  const grp=r.q.get("grp")||"";
  if(!a) renderHome();
  else if(a==="datos") renderDatos();
  else if(a==="resumen") renderResumen();
  else if(a==="diagramas") renderDiagramas(b);
  else if(a==="seccion" && b) renderSection(b, c, d, grp, pend);
  else renderHome();
}

document.addEventListener("click", ev=>{
  const pageBtn=ev.target.closest("[data-page]");
  if(pageBtn && pageBtn.closest("[data-pager]")){
    ev.preventDefault();
    ev.stopPropagation();
    const id=pageBtn.closest("[data-pager]").dataset.pager;
    showDrawingPage(id, pageBtn.dataset.page, document.getElementById("onlyPend")?.checked);
    return;
  }
  const goEl=ev.target.closest("[data-go]");
  if(goEl && goEl.getAttribute("data-go") && !goEl.disabled){ ev.preventDefault(); go(goEl.getAttribute("data-go")); return; }
  const u=ev.target.closest("[data-unit]");
  if(u){
    unit=u.dataset.unit; save();
    const r=parseHash();
    if(r.parts[0]==="diagramas" && r.parts[1] && (r.parts[1]==="tools"||r.parts[1]==="tools_hfo"||r.parts[1]==="tools_lo")){
      const next="#/diagramas/tools";
      if((location.hash||"")===next || (location.hash||"")==="#diagramas/tools"){ route(); }
      else go(next);
      return;
    }
    if(r.parts[0]==="seccion" && r.parts[1]==="s3" && r.parts[2]==="plano"){
      const next="#/seccion/s3/plano/"+toolsDwg();
      if((location.hash||"")===next){ route(); }
      else go(next);
      return;
    }
    route();
    return;
  }
  const est=ev.target.closest("[data-est-for]");
  if(est){
    const id=est.dataset.estFor, v=est.dataset.est;
    setEst(id, getEst(id)===v?"":v);
    document.querySelectorAll(`[data-est-for="${CSS.escape(id)}"]`).forEach(b=> b.setAttribute("aria-pressed", b.dataset.est===getEst(id)?"true":"false"));
    const vp=document.getElementById("svg-vp"); if(vp) paintDrawing(vp, document.getElementById("onlyPend")?.checked);
    return;
  }
  const st=ev.target.closest("[data-step]");
  if(st && ev.target.matches("button")){
    const k=st.dataset.step;
    const inp=document.getElementById(k);
    const n=Math.max(0,(parseFloat(inp.value)||0)+parseFloat(st.dataset.d));
    inp.value=String(n); setVal(k, String(n));
    if(k.startsWith("stk_")){
      const id=k.slice(4); const it=ITEM[id];
      const ask=Math.max(0,(it&&it.qty||0)-n);
      const a=document.querySelector(`[data-ask="${CSS.escape(id)}"]`);
      if(a) a.textContent=ask;
      setVal("ask_"+id, String(ask));
    }
    return;
  }
  const nt=ev.target.closest("[data-notes]");
  if(nt){
    const box=document.querySelector(`[data-notes-box="${CSS.escape(nt.dataset.notes)}"]`);
    if(box) box.classList.toggle("hidden");
    return;
  }
  if(dismissTarget(ev.target)){ ev.preventDefault(); requestClose(ev); return; }
  const src=ev.target.closest("[data-src]");
  if(src){
    const lb=document.getElementById("lb");
    document.getElementById("lb-img").src=src.dataset.src;
    const already=lbIsOn();
    lb.classList.add("on");
    if(!already) pushModal("lb");
  }
});
function dismissTarget(el){
  if(!el || !el.closest) return null;
  if(el.closest("#lb-x")) return "lb-x";
  if(el.closest("#sheet-x") || el.closest(".close-x")) return "sheet-x";
  if(el.id==="scrim" || el.closest("#scrim")) return "scrim";
  if(el.id==="lb") return "lb";
  return null;
}
let lastCloseAt=0;
function requestClose(ev){
  const now=Date.now();
  if(now-lastCloseAt<350) return;
  lastCloseAt=now;
  closeSheet();
}
function onDismissPointer(ev){
  if(!dismissTarget(ev.target)) return;
  ev.preventDefault();
  requestClose(ev);
}
document.addEventListener("pointerup", onDismissPointer);
document.addEventListener("touchend", onDismissPointer, {passive:false});

/* swipe-down on the handle / sheet header to close */
(function bindSheetSwipe(){
  let startY=0, startX=0, dragging=false, sheet=null, shifted=false;
  function pt(ev){
    if(ev.changedTouches && ev.changedTouches[0]) return ev.changedTouches[0];
    if(ev.touches && ev.touches[0]) return ev.touches[0];
    return ev;
  }
  function fromHeader(ev, sh){
    const t=ev.target;
    if(t && t.closest && t.closest("#sheet-handle, .handle")) return true;
    if(t && t.closest && t.closest("#sheet-x, .close-x, textarea, input, select, button, a, #sheet-status, .sheet-sketch")) return false;
    const r=sh.getBoundingClientRect();
    const y=pt(ev).clientY;
    return (y-r.top)<=72;
  }
  function down(ev){
    const sh=document.getElementById("sheet");
    if(!sh || !sh.classList.contains("on")) return;
    if(!fromHeader(ev, sh)) return;
    const p=pt(ev);
    startY=p.clientY; startX=p.clientX;
    dragging=true; shifted=false; sheet=sh;
    sh.style.transition="none";
  }
  function move(ev){
    if(!dragging || !sheet) return;
    const p=pt(ev);
    const dy=p.clientY-startY, dx=p.clientX-startX;
    if(dy>6 && Math.abs(dy)>=Math.abs(dx)){
      ev.preventDefault();
      shifted=true;
      sheet.style.transform="translateY("+dy+"px)";
    }
  }
  function up(ev){
    if(!dragging) return;
    const p=pt(ev);
    const dy=(p.clientY||startY)-startY;
    dragging=false;
    if(sheet){
      sheet.style.transition="";
      sheet.style.transform="";
    }
    const shouldClose=shifted && dy>56;
    sheet=null;
    if(shouldClose) requestClose(ev);
  }
  document.addEventListener("touchstart", down, {passive:true});
  document.addEventListener("touchmove", move, {passive:false});
  document.addEventListener("touchend", up);
  document.addEventListener("touchcancel", up);
  document.addEventListener("pointerdown", ev=>{ if(ev.pointerType!=="touch") down(ev); });
  document.addEventListener("pointermove", ev=>{ if(ev.pointerType!=="touch" && dragging) move(ev); });
  document.addEventListener("pointerup", ev=>{ if(ev.pointerType!=="touch") up(ev); });
})();
window.addEventListener("popstate", ()=>{ closeSheet({fromPop:true}); });

document.addEventListener("input", ev=>{
  if(ev.target.matches("textarea[data-obs]")) setVal(fieldKey(ev.target.dataset.obs,"obs"), ev.target.value);
  if(ev.target.matches("input[type=number]")){
    setVal(ev.target.id, ev.target.value);
    if(ev.target.id.startsWith("stk_")){
      const id=ev.target.id.slice(4); const it=ITEM[id];
      const ask=Math.max(0,(it&&it.qty||0)-(parseFloat(ev.target.value)||0));
      const a=document.querySelector(`[data-ask="${CSS.escape(id)}"]`);
      if(a) a.textContent=ask;
      setVal("ask_"+id, String(ask));
    }
  }
});
document.addEventListener("keydown", ev=>{ if(ev.key==="Escape") closeSheet(); });

window.addEventListener("hashchange", route);
if("serviceWorker" in navigator && location.protocol.startsWith("http") && !window.CG_ASSETS){
  navigator.serviceWorker.register("./sw.js").catch(()=>{});
}

/* demo seed for QA screenshots */
function maybeDemo(){
  if(!/demo=1/.test(location.search+location.hash)) return;
  if(state._demo) return;
  setEst("n1","Falta"); setVal(fieldKey("n1","obs"),"Brida ciega; no hay tramo hasta el tanque de sedimentación.");
  setEst("n2","OK"); setEst("heater","Dañado"); setEst("strainer","Incompleto");
  setEst("sp_"+unit+"_118","Falta");
  state._demo=1; save();
}

maybeDemo();
route();
(function(){
  const r=parseHash();
  const sh=r.q.get("sheet");
  if(sh) setTimeout(()=>openSheet(sh, ITEM[resolveId(sh)]&&ITEM[resolveId(sh)].label), 80);
  if(r.q.get("notes") && document.querySelector("[data-notes=\""+r.q.get("notes")+"\"]")){
    document.querySelector("[data-notes=\""+r.q.get("notes")+"\"]").click();
  }
})();
})();
