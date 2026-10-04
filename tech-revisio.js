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
