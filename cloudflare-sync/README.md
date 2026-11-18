Worker `cg-levantamiento-sync` for https://levantamiento.cnergyconsultant.com

- API: `/api/pull`, `/api/push`, `/api/photos`, `/api/photos/delete`, `/api/photos/:item/:id`
- KV namespace: `cg-levantamiento-kv` (fields, photo metadata; photo blobs until R2 is enabled)
- Secret: `PIN_HASH` (SHA-256 hex of the shared PIN). Never commit the PIN.
- Other paths proxy the GitHub Pages app so the custom domain can also serve the PWA.

Do not attach this Worker to the apex or www; those stay on the `cnergyconsultant` Pages project.
