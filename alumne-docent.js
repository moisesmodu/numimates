/* ===== El professor entra com un alumne del seu grup =====
   Des del panell (Grups → «Entra com a alumne»): /index.html?v=<tech|mates|pro>&alumne=<id del grup>
   El panell desa les dades del grup a localStorage (numi-alumne-grup) i obre l'app al mateix domini; aquí es comprova
   el testimoni del docent amb el servidor (/api/guia?f=me) i es crea un perfil local «Profe» que veu l'app igual que
   els alumnes del grup (mateixos cursos i sessions obertes). Es guarda només en aquest dispositiu: no es registra cap
   compte, no surt a la llista d'alumnes ni a les estadístiques, i no se sincronitza. Amb «Obre-ho tot» pot avançar-se. */
(function () {
  let q; try { q = new URLSearchParams(location.search); } catch (e) { return; }
  if (!q.has('alumne')) return;
  const gid = +q.get('alumne'), app = ['tech', 'mates', 'pro'].includes(q.get('v')) ? q.get('v') : 'mates';
  let G = null; try { G = JSON.parse(localStorage.getItem('numi-alumne-grup') || 'null'); } catch (e) { }
  const tok = (() => { try { return sessionStorage.getItem('dt') || localStorage.getItem('numi-dt') || ''; } catch (e) { return ''; } })();
  const local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  const es = () => (G && G.lang === 'es') || (typeof LANG !== 'undefined' && LANG === 'es');
  const T = (ca, esp) => es() ? esp : ca;
  const css = `.adoc{position:fixed;z-index:70;bottom:calc(84px + env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:6px;max-width:calc(100vw - 16px);padding:5px 5px 5px 12px;border-radius:999px;background:#1B2B6B;color:#fff;font:600 13px/1.2 system-ui,sans-serif;box-shadow:0 8px 24px rgba(16,28,80,.35)}
.adoc b{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:38vw}
.adoc button,.adoc a{flex:none;border:0;border-radius:999px;padding:6px 10px;font:700 12.5px/1 system-ui,sans-serif;cursor:pointer;text-decoration:none;background:rgba(255,255,255,.14);color:#fff}
.adoc .on{background:#FFC531;color:#3A2600}
body:has(.tsess) .adoc,body:has(.lesson) .adoc,body:has(.mgame) .adoc,body:has(.modal-bg) .adoc{display:none}
@media (min-width:700px){.adoc{bottom:18px}}
.adocno{position:fixed;inset:0;z-index:90;display:grid;place-items:center;background:rgba(10,16,40,.55);padding:16px}.adocno>div{max-width:380px;background:#fff;border-radius:20px;padding:22px;text-align:center;font:500 15px/1.45 system-ui,sans-serif;color:#1B2B6B}.adocno b{display:block;font-size:18px;margin-bottom:6px}.adocno a{display:inline-block;margin-top:14px;padding:10px 16px;border-radius:12px;background:#2F5BEA;color:#fff;text-decoration:none;font-weight:700}`;
  const style = () => { if (document.getElementById('adoc-css')) return; const s = document.createElement('style'); s.id = 'adoc-css'; s.textContent = css; document.head.appendChild(s); };
  const deny = msg => { style(); document.body.insertAdjacentHTML('beforeend', `<div class="adocno"><div><b>${T("Entra com a alumne", 'Entra como alumno')}</b>${msg}<br><a href="/profe.html">${T('Ves al panell', 'Ir al panel')}</a></div></div>`); };
  const bar = () => {
    style(); const old = document.querySelector('.adoc'); if (old) old.remove();
    const tech = P.variant === 'tech';
    document.body.insertAdjacentHTML('beforeend', `<div class="adoc" role="region" aria-label="${T("Vista d'alumne", 'Vista de alumno')}"><b>${T('Com a alumne', 'Como alumno')} · ${esc(G.nom || '')}</b>
      ${tech ? `<button class="${P.unlockAll ? 'on' : ''}" onclick="adocTot()">${P.unlockAll ? T('Tot obert', 'Todo abierto') : T('Obre-ho tot', 'Ábrelo todo')}</button>` : ''}
      <a href="/profe.html">${T('Panell', 'Panel')}</a></div>`);
  };
  // Numi Tech: alternar entre «com el grup» (les sessions que el professor ha obert) i tot obert
  window.adocTot = () => { if (!P || !P.adoc) return; P.unlockAll = !P.unlockAll; P.docTot = P.unlockAll; saveLocal(); go('home'); bar(); };
  const start = async () => {
    if (typeof DB === 'undefined' || typeof freshProgress !== 'function') return;
    if (!G || G.id !== gid) return deny(`<p>${T('Obre aquesta vista des del panell del docent (Grups → «Entra com a alumne»).', 'Abre esta vista desde el panel del docente (Grupos → «Entra como alumno»).')}</p>`);
    let ok = false;
    if (tok) { const r = await fetch('/api/guia?f=me', { headers: { 'x-docent': tok }, cache: 'no-store' }).catch(() => null); ok = !!(r && r.ok); }
    if (!ok && local) ok = true;   // proves en local
    if (!ok) return deny(`<p>${T('Cal tenir la sessió oberta al panell del docent en aquest navegador.', 'Hace falta tener la sesión abierta en el panel del docente en este navegador.')}</p>`);
    const id = 'docent-g' + gid + '-' + app, old = DB.profiles && DB.profiles[id];
    const lang = G.lang === 'es' ? 'es' : 'ca';
    P = old && old.variant === app ? old : { id, name: 'Profe', goal: 20, sound: true, lang, ...freshProgress(), variant: app, consent: 'ok' };
    P.adoc = true; delete P.docent; P.holdReg = true; delete P.code; delete P.pendingReg;
    P.classe = { nom: G.nom, centre: G.centre || '', curs: G.curs, tema: G.tema || null, opts: G.opts || {} };
    if (app === 'tech') {
      const cs = ((G.opts || {}).tech || {}).courses || ['robot'];
      P.tech = P.tech || { c: cs[0] || 'robot', s: {}, port: [], badges: {} };
      if (!cs.includes(P.tech.c)) P.tech.c = cs[0] || 'robot';
      P.unlockAll = !!P.docTot;
    } else {
      // Numi Mates / Pro: el curs del grup i totes les lliçons obertes per poder-les ensenyar
      const c = Number.isInteger(G.curs) ? G.curs : (P.course ?? 3);
      Object.assign(P, { course: c, baseCourse: c, maxCourse: Math.max(c, P.maxCourse || 0), unlockAll: true });
    }
    DB.profiles[id] = P; DB.current = id; saveLocal();
    if (typeof setVariant === 'function') setVariant(app);
    if (typeof setLang === 'function') setLang(P.lang, false);
    // sessions tancades: el professor les pot obrir des del panell o veure-ho tot des de la barra
    if (app === 'tech' && typeof tLocked === 'function' && !window.__adocLock) { window.__adocLock = 1; const l0 = tLocked;
      tLocked = function (c, ss) { if (!P || !P.adoc) return l0.apply(this, arguments);
        modal(`<div class="sheet card cent"><h3>${T('El grup encara no té aquesta sessió oberta', 'El grupo aún no tiene esta sesión abierta')}</h3><p>${T("Els alumnes la veuran tancada. Obre-la al panell (Grups → «Obert fins a») o prem «Obre-ho tot» per veure-ho tot com a professor.", 'Los alumnos la verán cerrada. Ábrela en el panel (Grupos → «Abierto hasta») o pulsa «Ábrelo todo» para verlo todo como profesor.')}</p><button class="btn big" onclick="closeModal();adocTot()">${T('OBRE-HO TOT', 'ÁBRELO TODO')}</button><button class="btn ghost big" onclick="closeModal()">${T("D'ACORD", 'DE ACUERDO')}</button></div>`, true); }; }
    go('home'); bar();
    try { history.replaceState(null, '', location.pathname + '?v=' + app + '&alumne=' + gid); } catch (e) { }
  };
  if (document.readyState === 'complete') setTimeout(start, 350); else addEventListener('load', () => setTimeout(start, 350));
})();
