/* Mode revisió de Numi Tech: ?v=tech&revisio=1 obre l'app amb un perfil local i tots els cursos oberts, sense servidor.
   Només a les URL de previsualització de Vercel (mates-numi-<id>-….vercel.app) i en local: mai als dominis de producció. */
(function () {
  let q; try { q = new URLSearchParams(location.search); } catch (e) { return; }
  if (!q.has('revisio')) return;
  const h = location.hostname, ok = h === 'localhost' || h === '127.0.0.1' || /^mates-numi-(?!git-)[a-z0-9]{6,}-[a-z0-9-]+\.vercel\.app$/.test(h) || /^mates-numi-git-[a-z0-9-]+\.vercel\.app$/.test(h);
  if (!ok) return;
  const start = () => {
    if (typeof DB === 'undefined' || typeof freshProgress !== 'function') return;
    const old = DB.profiles && DB.profiles.revisio;
    P = old && old.variant === 'tech' ? old : { id: 'revisio', name: 'Revisió', unlockAll: true, lang: q.get('lang') === 'es' ? 'es' : 'ca', sound: true, ...freshProgress(), variant: 'tech', code: 'REVISIO', consent: 'ok', tech: { c: q.get('curs') || 'robot', s: {}, port: [], badges: {} } };
    P.unlockAll = true; DB.profiles.revisio = P; DB.current = 'revisio'; saveLocal(); go('home');
  };
  if (document.readyState === 'complete') setTimeout(start, 300); else addEventListener('load', () => setTimeout(start, 300));
})();
/* «Vista d'alumne» del professor: ?v=tech&docent=1[&curs=robot][&s=r1-2][&l=es] obre l'app com la veu un alumne, amb tots els cursos
   i sessions oberts. Cal tenir sessió al panell del professor (el testimoni que hi desa, numi-dt): el servidor el comprova.
   El perfil és local (no es registra ni se sincronitza) i es diu «docent». */
(function () {
  let q; try { q = new URLSearchParams(location.search); } catch (e) { return; }
  if (!q.has('docent')) return;
  const tok = (() => { try { return sessionStorage.getItem('dt') || localStorage.getItem('numi-dt') || ''; } catch (e) { return ''; } })();
  const local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  const lang = q.get('l') === 'es' || q.get('lang') === 'es' ? 'es' : q.get('l') === 'ca' || q.get('lang') === 'ca' ? 'ca' : null;
  const deny = () => { document.body.insertAdjacentHTML('beforeend', `<div class="tdocno"><div><b>${lang === 'es' ? 'Vista de alumno' : "Vista d'alumne"}</b><p>${lang === 'es' ? 'Para verla, entra en el panel del profesor y ábrela desde «Material Tech».' : 'Per veure-la, entra al panell del professor i obre-la des de «Material Tech».'}</p><a href="profe.html#/material">${lang === 'es' ? 'Abre el panel' : 'Obre el panell'}</a></div></div>`); };
  const start = async () => {
    if (typeof DB === 'undefined' || typeof freshProgress !== 'function') return;
    let ok = false;
    if (tok) { const r = await fetch('/api/guia?f=me', { headers: { 'x-docent': tok }, cache: 'no-store' }).catch(() => null); ok = !!(r && r.ok); if (r && r.status === 401) { try { localStorage.removeItem('numi-dt'); } catch (e) { } } }
    if (!ok && local) ok = true;   // proves en local
    if (!ok) return deny();
    const old = DB.profiles && DB.profiles.docent, curs = q.get('curs');
    P = old && old.variant === 'tech' ? old : { id: 'docent', name: 'Profe', lang: lang || 'ca', sound: true, ...freshProgress(), variant: 'tech', consent: 'ok', tech: { c: 'robot', s: {}, port: [], badges: {} } };
    P.unlockAll = true; P.docent = true; P.holdReg = true; delete P.code; if (lang) P.lang = lang;
    if (curs && typeof TECH !== 'undefined' && TECH.some(c => c.id === curs)) P.tech.c = curs;
    DB.profiles.docent = P; DB.current = 'docent'; saveLocal();
    LANG = P.lang; document.documentElement.lang = LANG;
    go('home');
    const sid = q.get('s'); if (sid && typeof tOpen === 'function') setTimeout(() => tOpen(sid), 150);
    try { history.replaceState(null, '', location.pathname + '?v=tech'); } catch (e) { }
  };
  if (document.readyState === 'complete') setTimeout(start, 300); else addEventListener('load', () => setTimeout(start, 300));
})();
// el professor pot tornar a començar com un alumne nou (esborra només el progrés del perfil «docent»)
function tDocReset() {
  if (!P || !P.docent) return;
  if (!confirm(L("Vols esborrar el progrés d'aquesta vista d'alumne?", '¿Quieres borrar el progreso de esta vista de alumno?'))) return;
  P.tech = { c: P.tech.c, s: {}, port: [], badges: {} }; saveLocal(); go('home');
}
