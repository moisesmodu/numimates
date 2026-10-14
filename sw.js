/* =====================================================================================================================
   Numi · funcionar sense connexió (la wifi de les escoles falla sovint)
   Xarxa primer, sempre: amb connexió tot va com sempre i es fa servir la versió nova de cada fitxer.
   Cada fitxer de l'app que arriba bé es desa; si la xarxa falla, se serveix el que es va desar l'última vegada
   (la portada, els scripts, els estils, les imatges i els sons que ja s'havien carregat).
   Mai es desa res de /api (dades dels alumnes, progrés, xat) ni el panell del docent.
   El progrés de l'alumne ja es guarda al dispositiu i es puja sol quan torna la connexió (app.js, syncNow).
   Si mai calgués desactivar-ho: obrir l'app amb ?nosw=1 (app.js l'esborra) o publicar aquest fitxer amb OFF = true.
   ===================================================================================================================== */
const OFF = false;
const CACHE = 'numi-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k !== CACHE || OFF) await caches.delete(k);
  if (OFF) { await self.registration.unregister(); return; }
  await self.clients.claim();
})()));

self.addEventListener('fetch', e => {
  if (OFF) return;
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== self.location.origin || r.headers.has('range')) return;
  if (u.pathname.startsWith('/api/') || /^\/profe(\.html)?$/.test(u.pathname) || u.pathname === '/sw.js') return;
  const nav = r.mode === 'navigate';
  e.respondWith((async () => {
    try {
      const res = await fetch(r);
      // només respostes bones del mateix web (les portades es desen sense la consulta: ?v=tech, ?classe=…)
      if (res.ok && res.type === 'basic') { const c = await caches.open(CACHE); c.put(nav ? new Request(u.origin + u.pathname) : r, res.clone()).catch(() => { }); }
      return res;
    } catch (err) {
      const c = await caches.open(CACHE);
      const hit = await c.match(nav ? u.origin + u.pathname : r, { ignoreSearch: nav }) || (nav ? await c.match(u.origin + '/') || await c.match(u.origin + '/index.html') : null);
      return hit || Response.error();
    }
  })());
});
