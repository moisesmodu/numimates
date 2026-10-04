/* ===== Numi Tech · programació, robòtica i projectes digitals =====
   La quarta app (tech.numimates.com): el mateix compte, servidor i Premium que les altres, amb pantalles pròpies,
   com Numi Ment. Tot l'estat va a P.tech (el servidor el desa tal qual).
   · Una SESSIÓ és llarga (30-45 minuts), com una classe: recordar → missió → mans a l'obra → predir i provar →
     investigar → pausa activa → reptes → crear → tancament. Es pot deixar a mitges i continuar-la un altre dia.
   · El contingut (cursos, unitats, sessions i passos) és a tech-c*.js; aquí hi ha el motor i les pantalles. */

const tval = v => typeof v === 'function' ? v() : tx(v);
const TPH = {
  recorda: ['Recorda', 'Recuerda'], missio: ['La missió', 'La misión'], descobreix: ['Descobreix', 'Descubre'], mans: ["Mans a l'obra", 'Manos a la obra'], prova: ['Prediu i prova', 'Predice y prueba'],
  investiga: ['Investiga', 'Investiga'], pausa: ['Pausa activa', 'Pausa activa'], repte: ['Reptes', 'Retos'], crea: ['Crea', 'Crea'], tanca: ['Tancament', 'Cierre']
};
const TS_ = () => { const t = P.tech = P.tech || {}; t.s = t.s || {}; t.port = Array.isArray(t.port) ? t.port : []; t.badges = t.badges || {}; t.c = t.c || 'robot'; t.maps = t.maps || {}; return t; };
const tCourse = id => TECH.find(c => c.id === id) || TECH[0];
// totes les sessions d'un curs en ordre, amb la unitat
const tSessions = c => c.units.flatMap((u, ui) => u.s.map((s, si) => ({ ...s, ui, si, u })));
const tDone = id => !!(TS_().s[id] && TS_().s[id].done);
// Accés: Numi Tech es fa servir a les extraescolars amb classe guiada. El professor assigna els cursos al grup (i fins a
// quina sessió poden arribar) des del panell; l'administrador també pot obrir cursos a un alumne concret. No hi ha Premium.
function tAccess() {
  if (P && P.unlockAll) return { courses: new Set(TECH.map(c => c.id)), fins: {} };
  const o = P && P.classe && P.classe.opts, t = o && (o.app === 'tech' || o.app === 'both') && o.tech;
  if (t) return { courses: new Set(t.courses || []), fins: t.fins || {}, classe: P.classe };
  if (P && Array.isArray(P.tcursos)) return { courses: new Set(P.tcursos), fins: {} };
  return { courses: new Set(), fins: {} };
}
// una sessió és oberta si el curs és assignat i no passa d'on el professor ha obert (les ja fetes sempre es poden repetir)
function tSessOpen(c, s) {
  const a = tAccess(); if (!a.courses.has(c.id)) return false;
  const f = a.fins[c.id]; if (!f || f === 'tot' || tDone(s.id)) return true;
  const all = tSessions(c), i = all.findIndex(x => x.id === s.id), j = all.findIndex(x => x.id === f);
  return j < 0 || i <= j;
}
function tLocked(c, s) {
  const a = tAccess(), mine = a.courses.has(c.id);
  modal(`<div class="sheet card cent"><div class="tsoonico" style="--cc:${c.color}">${c.ico}</div><h3>${mine ? L('Aquesta sessió encara no és oberta', 'Esta sesión aún no está abierta') : tx(c.name)}</h3>
    <p>${mine ? L("La farem a classe: el teu professor l'obrirà quan hi arribeu.", 'La haremos en clase: tu profesor la abrirá cuando lleguéis.') : `${tx(c.desc)}</p><p class="mut">${a.classe ? L("Aquest curs te l'ha d'assignar el teu professor.", 'Este curso te lo tiene que asignar tu profesor.') : L('Per començar, entra a la teva classe amb el codi que et dona el professor.', 'Para empezar, entra en tu clase con el código que te da el profesor.')}`}</p>
    ${!a.classe && !a.courses.size ? `<button class="btn big" onclick="closeModal();classeModal()">${L('TINC UN CODI DE CLASSE', 'TENGO UN CÓDIGO DE CLASE')}</button>` : ''}<button class="btn ghost big" onclick="closeModal()">${L("D'ACORD", 'DE ACUERDO')}</button></div>`, true);
}
const tReady = s => !!(s.steps && s.steps.length);

/* ---------- Navegació ---------- */
const TIC = {
  apren: '<svg viewBox="0 0 24 24"><path d="M4 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H4zM20 5h-4a3 3 0 0 0-3 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M20 5v13h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  projectes: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="13" y="3" width="8" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="3" y="13" width="8" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M17 13v8M13 17h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  perfil: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 21a8 8 0 0 1 16 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  foc: '<svg viewBox="0 0 24 24"><path d="M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-6 1-9.5z" fill="currentColor"/></svg>',
  ok: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="11" rx="2" fill="currentColor"/><path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2.4"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>',
  rellotge: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
};
function tNav(t) {
  const it = [['home', 'apren', L('Aprèn', 'Aprende')], ['projectes', 'projectes', L('Projectes', 'Proyectos')], ['profile', 'perfil', L('Perfil', 'Perfil')]];
  return `<nav class="nav tnav">${it.map(([v, i, l]) => `<button class="${v === t ? 'on' : ''}" onclick="go('${v}')"><span class="ni">${TIC[i]}</span><span>${l}</span></button>`).join('')}${VAR.chat ? `<button class="navxat" onclick="xatOpen()" aria-label="${L("Pregunta a en Numi (xat d'ajuda)", 'Pregunta a Numi (chat de ayuda)')}"><span class="ni">${charSVG('numi', 'happy')}</span><span>${L('Pregunta', 'Pregunta')}</span></button>` : ''}</nav>`;
}
function tShell(t, body, hero = '') {
  return `<div class="tpage tp-${t}"><header class="ttop"><img src="${VAR.logo}" alt="${VAR.name}"><span class="tchip2" title="${L('Dies seguits', 'Días seguidos')}">${TIC.foc} ${P.streak || 0}</span></header>${hero}<main class="tmain">${body}</main>${tNav(t)}</div>`;
}
function techGo(v) {
  tStop(); VIEW = ['home', 'projectes', 'profile'].includes(v) ? v : 'home';
  ({ home: techHome, projectes: techProjectes, profile: techProfile })[VIEW]();
  window.scrollTo(0, 0);
}
{
  const g0 = go;
  go = function (v) {
    if (P && P.id !== 'tmp' && varOf(P) === 'tech' && !appMismatch(P) && v !== 'profiles' && v !== 'onboard') { LS = null; closeModal(); setVariant('tech'); return techGo(v); }
    return g0(v);
  };
}
function tStop() { if (typeof TB !== 'undefined' && TB) { clearTimeout(TB.t); TB.run = null; } clearInterval(TS_T); TS_T = null; typeof tDemoStop === 'function' && tDemoStop(); typeof rbStop === 'function' && rbStop(); typeof roboDemoStop === 'function' && roboDemoStop(); (window.TSTOPS || []).forEach(f => f()); }

/* ---------- Aprèn: el curs, unitat per unitat ---------- */
function techHome() {
  if (P.code && navigator.onLine && !techHome.pulled && typeof classeRefresh === 'function') { techHome.pulled = 1; classeRefresh(); }
  const t = TS_(), acc = tAccess();
  if (!acc.courses.size) return techCatalog();
  if (!acc.courses.has(t.c)) t.c = [...acc.courses].find(id => TECH.some(c => c.id === id)) || t.c;
  const c = tCourse(t.c), all = tSessions(c), nxt = all.find(s => tReady(s) && !tDone(s.id) && tSessOpen(c, s));
  const done = all.filter(s => tDone(s.id)).length;
  const prog = nxt && t.s[nxt.id] && t.s[nxt.id].i ? t.s[nxt.id] : null;
  const hero = `<section class="thero img" style="--hb:url(img/tech/scenes/hero-${c.id}.webp)"><div class="thtxt"><p class="tkick">${tx(c.name)} · ${tx(c.age)}</p><h1>${L(`Hola, ${esc(P.name)}!`, `¡Hola, ${esc(P.name)}!`)}</h1>
      ${acc.classe ? `<p class="tcls">${esc(acc.classe.nom)}${acc.classe.centre ? ' · ' + esc(acc.classe.centre) : ''}</p>` : ''}${nxt ? `<p>${L('Següent sessió', 'Siguiente sesión')}: <b>${tx(nxt.t)}</b></p><button class="btn big tgo" onclick="tOpen('${nxt.id}')">${TIC.play} ${prog ? L('Continua la sessió', 'Continúa la sesión') : L('Comença la sessió', 'Empieza la sesión')}</button>`
        : `<p>${L("Has fet totes les sessions obertes. La següent l'obrirà el teu professor a classe.", 'Has hecho todas las sesiones abiertas. La siguiente la abrirá tu profesor en clase.')}</p>`}</div>
    <div class="thbot" aria-hidden="true">${bitChar('happy')}</div>
    <div class="thbar"><i style="width:${Math.round(100 * done / all.length)}%"></i></div><small class="thsm">${L(`${done} de ${all.length} sessions`, `${done} de ${all.length} sesiones`)}</small></section>`;
  const courses = `<div class="tcourses">${TECH.map(k => { const mine = acc.courses.has(k.id);
    return `<button class="tcrs ${k.id === c.id ? 'on' : ''} ${mine ? '' : 'lock'}" onclick="${mine ? `TS_().c='${k.id}';save();techHome()` : `tLocked(tCourse('${k.id}'))`}" style="--cc:${k.color}"><span class="tcico">${k.ico}</span><b>${tx(k.short)}</b><small>${mine ? tx(k.age) : `${TIC.lock} ${L('No assignat', 'No asignado')}`}</small></button>`; }).join('')}</div>`;
  const units = `<div class="tunits">${c.units.map((u, ui) => tIsland(c, u, ui, nxt)).join('<div class="tbridge" aria-hidden="true"></div>')}</div>`;
  app.innerHTML = tShell('home', courses + units, hero);
}
function tSoon(id) { const k = tCourse(id); modal(`<div class="sheet card cent"><div class="tsoonico" style="--cc:${k.color}">${k.ico}</div><h3>${tx(k.name)}</h3><p>${tx(k.desc)}</p><p class="mut">${L('Aquest curs arriba aviat.', 'Este curso llega pronto.')}</p><button class="btn big" onclick="closeModal()">${L("D'acord", 'De acuerdo')}</button></div>`, true); }
function tSoonS() { toast(L('Aquesta sessió encara és en preparació.', 'Esta sesión aún está en preparación.')); }
function tPrem() {
  modal(`<div class="sheet card cent"><h3>${VAR.name} Premium</h3><p>${L('La primera unitat de cada curs és gratis. Amb Premium tens tots els cursos sencers, amb tots els projectes.', 'La primera unidad de cada curso es gratis. Con Premium tienes todos los cursos completos, con todos los proyectos.')}</p>
    <button class="btn big gold" onclick="closeModal();buyPremium()">${needsFam && needsFam() ? L('Demana-ho a la família', 'Pídeselo a tu familia') : L('Vull Premium', 'Quiero Premium')}</button><button class="btn ghost big" onclick="closeModal()">${L('Ara no', 'Ahora no')}</button></div>`, true);
}

// cada unitat és una illa: un camí amb les 4 sessions, arbres i roques, i en Bit a la sessió que toca
function tIsland(c, u, ui, nxt) {
  const t = TS_(), col = u.color || c.color, n = u.s.length;
  const W = 360, H = 70 + n * 108, xs = [96, 262, 112, 250, 100, 258], P = u.s.map((_, i) => [xs[i % xs.length], 64 + i * 108]);
  const road = P.reduce((d, [x, y], i) => i ? d + ` C${P[i - 1][0]} ${P[i - 1][1] + 60} ${x} ${y - 60} ${x} ${y}` : `M${x} ${y}`, '');
  const R = k => bwRnd(ui + 3, k, 7);
  // illa en 3D (imatge renderitzada) si n'hi ha una amb les mateixes parades
  const I3 = typeof TECH_ISLES !== 'undefined' && TECH_ISLES[`${c.id}-${ui + 1}`], use3 = !!(I3 && I3.length === n);
  // decoració: arbres i roques lluny del camí
  const deco = [];
  for (let k = 0; k < 14; k++) { const x = 30 + R(k) * 300, y = 30 + R(k + 40) * (H - 70);
    if (P.some(([px, py]) => Math.hypot(px - x, py - y) < 70)) continue;
    const near = Math.min(...P.map(([px, py], i) => i ? Math.abs((x - px)) + Math.abs(y - py) : 999)); void near;
    deco.push(R(k + 80) < .65 ? `<g transform="translate(${x.toFixed(0)} ${y.toFixed(0)}) scale(.8)"><ellipse cx="2" rx="18" ry="5" fill="#0B2A12" opacity=".2"/><path d="M-3 0V-14h6V0z" fill="#8A5A33"/><circle cx="-8" cy="-20" r="11" fill="url(#bwLeaf)"/><circle cx="8" cy="-22" r="11" fill="url(#bwLeaf)"/><circle cy="-32" r="13" fill="url(#bwLeaf2)"/></g>`
      : `<g transform="translate(${x.toFixed(0)} ${y.toFixed(0)}) scale(.7)"><path d="M-21 -2Q-24 -24 -6 -31Q12 -36 20 -18Q25 -4 16 -1L-14 0Q-20 0 -21 -2Z" fill="url(#bwRock)" stroke="#5E667A" stroke-width="2"/></g>`); }
  const svg = `<svg class="tisl" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">${bitDefs()}
    <path d="M24 ${H - 22} Q4 ${H / 2} 30 26 Q180 -6 330 26 Q356 ${H / 2} 336 ${H - 22} Q180 ${H + 8} 24 ${H - 22}Z" fill="#0B3A66" opacity=".18" transform="translate(0 10)"/>
    <path d="M24 ${H - 22} Q4 ${H / 2} 30 26 Q180 -6 330 26 Q356 ${H / 2} 336 ${H - 22} Q180 ${H + 8} 24 ${H - 22}Z" fill="url(#bwCliff)" transform="translate(0 8)"/>
    <path d="M24 ${H - 22} Q4 ${H / 2} 30 26 Q180 -6 330 26 Q356 ${H / 2} 336 ${H - 22} Q180 ${H + 8} 24 ${H - 22}Z" fill="url(#bwGrass)" stroke="#6DB64A" stroke-width="3"/>
    ${deco.join('')}
    <path d="${road}" fill="none" stroke="#E2BE76" stroke-width="34" stroke-linecap="round"/><path d="${road}" fill="none" stroke="url(#bwSand)" stroke-width="28" stroke-linecap="round"/>
    <path d="${road}" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="2 14" stroke-linecap="round" opacity=".7"/></svg>`;
  const nodes = u.s.map((s, si) => {
    const [x, y] = P[si], pos = use3 ? I3[si] : [x / W * 100, y / H * 100], d = tDone(s.id), ready = tReady(s), open = tSessOpen(c, s), cur = nxt && nxt.id === s.id, part = t.s[s.id] && t.s[s.id].i && !d, right = pos[0] < 50;
    const ico = d ? TIC.ok : !ready ? '<b>…</b>' : !open ? TIC.lock : s.proj ? '<svg viewBox="0 0 24 24"><path d="M7 3h10v4a5 5 0 0 1-10 0z" fill="currentColor"/><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3M10 13h4v3h-4zM8 19h8v2H8z" fill="currentColor"/></svg>' : `<b>${si + 1}</b>`;
    return `<button class="tnode ${d ? 'done' : ''} ${cur ? 'cur' : ''} ${ready ? '' : 'soon'} ${!open && ready ? 'lock' : ''} ${s.proj ? 'proj' : ''}" style="left:${pos[0].toFixed(2)}%;top:${pos[1].toFixed(2)}%" onclick="${ready ? (open ? `tOpen('${s.id}')` : `tLocked(tCourse('${c.id}'),1)`) : 'tSoonS()'}">
      <span class="tnc">${ico}</span>${cur ? `<span class="tnbit" aria-hidden="true"><svg viewBox="-30 -74 60 80">${bitBot(2)}</svg></span>` : ''}
      <span class="tnl ${right ? 'r' : 'l'}"><b>${tx(s.t)}</b><small>${s.proj ? `<em>${L('Projecte', 'Proyecto')}</em> ` : ''}${ready ? `${s.min || 40} min` : L('En preparació', 'En preparación')}${part ? ` · ${L('a mitges', 'a medias')}` : ''}</small></span></button>`;
  }).join('');
  const nd = u.s.filter(s => tDone(s.id)).length;
  return `<section class="tunit2 ${use3 ? 'i3' : ''} ${u.s.some(tReady) ? '' : 'soon'}" style="--uc:${col}"><header class="tuh2"><span class="tun">${ui + 1}</span><div><h2>${tx(u.t)}</h2><p>${tx(u.d)}</p></div>${nd ? `<span class="tuc">${nd}/${n}</span>` : ''}</header>
    ${use3 ? `<div class="tmap t3"><img class="tisl3" src="img/tech/isles/${c.id}-${ui + 1}.webp" alt="" width="900" height="1125" loading="${ui ? 'lazy' : 'eager'}" decoding="async">${nodes}</div>` : `<div class="tmap" style="aspect-ratio:${W}/${H}">${svg}${nodes}</div>`}</section>`;
}

/* ---------- Projectes (portafoli) ----------
   Els projectes del món d'en Bit es dibuixen aquí; els dels altres cursos (robòtica, escenari, web…) es registren a
   TPORT[kind] = { thumb(p) → HTML, after(p, el)?, open(p) → HTML, mount()? } des del seu fitxer. */
const TPORT = {};
function techProjectes() {
  const t = TS_();
  const hero = `<section class="thero sub"><div class="thtxt"><h1>${L('Els meus projectes', 'Mis proyectos')}</h1><p>${L('Tot el que crees a les sessions es guarda aquí. Torna-hi quan vulguis i ensenya-ho a casa.', 'Todo lo que creas en las sesiones se guarda aquí. Vuelve cuando quieras y enséñalo en casa.')}</p></div></section>`;
  const list = t.port.length ? `<div class="tports">${t.port.slice().reverse().map(p => { const K = p.kind && TPORT[p.kind];
    if (K) return `<button class="tport k-${p.kind}" onclick="tPortOpen('${p.id}')"><span class="tpimg">${K.thumb(p)}</span><b>${tx(p.t)}</b><small>${dayShort ? dayShort(p.d) : p.d}</small></button>`;
    if (p.kind) return '';
    const W = bitWorld(p.w), S = bitSim(W);
    return `<button class="tport" onclick="tPortOpen('${p.id}')"><span class="tpimg">${bitSVG(W, S, { still: true })}</span><b>${tx(p.t)}</b><small>${dayShort ? dayShort(p.d) : p.d} · ${bitN(bitCount(p.prog))}</small></button>`; }).join('')}</div>`
    : `<div class="tempty2">${bitChar('idle')}<p>${L('Encara no tens cap projecte. A cada sessió en crearàs un!', 'Aún no tienes ningún proyecto. ¡En cada sesión crearás uno!')}</p></div>`;
  app.innerHTML = tShell('projectes', list, hero);
  t.port.forEach(p => { const K = p.kind && TPORT[p.kind]; if (K && K.after) K.after(p, app); });
}
function tPortOpen(id) {
  const p = TS_().port.find(x => x.id === id); if (!p) return;
  VIEW = 'tport';
  const K = p.kind && TPORT[p.kind];
  if (K) { app.innerHTML = `<div class="tsess"><div class="tstop"><button class="xbtn" onclick="go('projectes')" aria-label="${L('Tanca', 'Cierra')}">✕</button><b class="tsph">${tx(p.t)}</b><span></span></div>
    ${K.open(p)}<div class="tsfoot"><button class="link" onclick="tPortDel('${p.id}')">${L('Esborra el projecte', 'Borra el proyecto')}</button></div></div>`; K.mount && K.mount(p); return; }
  tbMake(p.w, { prog: p.prog, mode: p.evs ? 'edit' : 'view', fns: p.fns, fnName: p.fnName, ev: p.evs ? Object.keys(p.evs) : null, evs: p.evs, pal: [] });
  if (p.evs) TB.lock = true;
  app.innerHTML = `<div class="tsess"><div class="tstop"><button class="xbtn" onclick="go('projectes')" aria-label="${L('Tanca', 'Cierra')}">✕</button><b class="tsph">${tx(p.t)}</b><span></span></div>
    <div class="tsbody wide">${tbHTML()}</div><div class="tsfoot"><button class="link" onclick="tPortDel('${p.id}')">${L('Esborra el projecte', 'Borra el proyecto')}</button></div></div>`;
  tb3dMount();
}
function tPortDel(id) { if (!confirm(L('Segur que vols esborrar aquest projecte?', '¿Seguro que quieres borrar este proyecto?'))) return; const t = TS_(); t.port = t.port.filter(x => x.id !== id); save(); go('projectes'); }

/* ---------- Perfil ---------- */
function techProfile() {
  const prem = isPremium(), t = TS_(), nb = Object.keys(t.badges).length;
  const hero = `<section class="thero sub"><div class="thtxt"><h1>${esc(P.name)}</h1><p>${prem ? `${VAR.name} Premium` : L(`${VAR.name} · pla gratuït`, `${VAR.name} · plan gratuito`)}${P.streak > 1 ? ` · ${L(`${P.streak} dies seguits`, `${P.streak} días seguidos`)}` : ''}</p></div></section>`;
  const badges = Object.values(TBADGE).map(b => `<div class="tbadge ${t.badges[b.id] ? 'on' : ''}" title="${esc(tx(b.d))}"><span>${b.ico}</span><b>${tx(b.n)}</b></div>`).join('');
  app.innerHTML = tShell('profile', `<section class="tcard"><div class="tch"><b>${L('Insígnies', 'Insignias')}</b><span>${nb}/${Object.keys(TBADGE).length}</span></div><div class="tbadges">${badges}</div></section>
    <section class="tcard"><div class="tch"><b>${L('Idioma', 'Idioma')}</b></div>${langPill()}</section>
    ${P.code ? `<section class="tcard"><div class="tch"><b>${L('El meu compte', 'Mi cuenta')}</b></div>${P.username ? `<p>${L('Usuari', 'Usuario')}: <b>${esc(P.username)}</b></p>` : `<p class="mut">${L('Encara no tens usuari i contrasenya.', 'Aún no tienes usuario y contraseña.')}</p><button class="btn ghost" onclick="accountModal()">${L('Crea usuari i contrasenya', 'Crea usuario y contraseña')}</button>`}</section>` : ''}
    <section class="tcard"><div class="tch"><b>${L('La meva classe', 'Mi clase')}</b></div>${P.classe ? `<p><b>${esc(P.classe.nom)}</b>${P.classe.centre ? ' · ' + esc(P.classe.centre) : ''}</p><p class="mut">${L('El teu professor veu el teu progrés i et va obrint les sessions.', 'Tu profesor ve tu progreso y te va abriendo las sesiones.')}</p>` : `<p class="mut">${L('Encara no ets a cap classe. Demana el codi al teu professor.', 'Aún no estás en ninguna clase. Pide el código a tu profesor.')}</p><button class="btn ghost" onclick="classeModal()">${L('Tinc un codi de classe', 'Tengo un código de clase')}</button>`}</section>
    <section class="tcard"><div class="tch"><b>${L('So', 'Sonido')}</b></div><button class="btn ghost" onclick="P.sound=!P.sound;save();techProfile()">${P.sound ? L('Activat', 'Activado') : L('Desactivat', 'Desactivado')}</button></section>
    <div class="tprofb"><button class="btn ghost" onclick="renderProfiles()">${L('Canvia de perfil', 'Cambia de perfil')}</button><a class="link" href="https://numimates.com/privacitat" target="_blank" rel="noopener">${L('Privadesa', 'Privacidad')}</a><button class="link" onclick="exportMe()">${L('Descarrega les meves dades', 'Descarga mis datos')}</button><button class="link" onclick="eraseMe()">${L('Esborra el compte', 'Borrar la cuenta')}</button></div>`, hero);
}

/* ---------- Una sessió ---------- */
let TSS = null, TS_T = null;
function tFind(id) { for (const c of TECH) { const s = tSessions(c).find(x => x.id === id); if (s) return { c, s }; } return null; }
function tOpen(id) {
  const f = tFind(id); if (!f || !tReady(f.s)) return;
  if (!tSessOpen(f.c, f.s)) return tLocked(f.c, f.s);
  const rec = TS_().s[id] || {}, again = rec.done;
  TSS = { c: f.c, s: f.s, id, i: again ? 0 : Math.min(rec.i || 0, f.s.steps.length - 1), ok: 0, n: 0, again };
  VIEW = 'tsess'; tStep();
}
function tQuit() {
  if (TSS && TSS.i > 0 && !confirm(L('Vols sortir? La sessió es queda guardada i la podràs continuar on l\'has deixat.', '¿Quieres salir? La sesión se queda guardada y podrás continuarla donde la dejaste.'))) return;
  if (TSS) { const rec = tTime(); rec.d = rec.d || today(); save(); }
  tStop(); TSS = null; TB = null; go('home');
}
// barra de dalt: un tros per fase, amb el nom de la fase actual
function tBar() {
  const st = TSS.s.steps, phs = [];
  st.forEach((x, i) => { const last = phs[phs.length - 1]; if (last && last.ph === x.ph) last.n++; else phs.push({ ph: x.ph, n: 1, from: i }); });
  const cur = st[TSS.i].ph;
  return `<div class="tphases">${phs.map(p => { return `<i style="flex:${p.n}" class="${p.ph === cur ? 'cur' : ''}"><em style="width:${100 * Math.min(p.n, Math.max(0, TSS.i - p.from)) / p.n}%"></em></i>`; }).join('')}</div>`;
}
function tStep() {
  tStop(); TB = null; typeof tDemoStop === 'function' && tDemoStop();
  const st = TSS.s.steps[TSS.i], ph = tx(TPH[st.ph].join('|'));
  TSS.st = st; TSS.ready = false; TSS.t0 = Date.now();
  app.innerHTML = `<div class="tsess k-${st.k}"><div class="tstop"><button class="xbtn" onclick="tQuit()" aria-label="${L('Surt', 'Salir')}">✕</button><div class="tstopm"><b class="tsph">${ph}</b>${tBar()}</div><span class="tsmin">${TSS.i + 1}/${TSS.s.steps.length}</span></div>
    <div class="tsbody" id="tsb"></div><div class="tsfoot" id="tsf"></div></div>`;
  (TSTEP[st.k] || TSTEP.story)(st);
  const b = document.querySelector('.tsbody'); if (b) b.scrollTop = 0;
  tFitWatch(); tUndoStart();
}
// en obrir un editor, el punt de partida per desfer
function tUndoStart() {
  const st = document.querySelector('.tsbody>.tstage'); if (!st || typeof TUNDO === 'undefined') return;
  const ed = st.classList.contains('sstagew') ? 'sg' : st.classList.contains('rstage') ? 'rb' : 'tb', U = TUNDO[ed], S = U.S(); if (!S) return;
  S._uh = []; S._last = tuSer(U.get(S)); tUndoBtn(ed, S);
}
// tot el pas a la vista, sense haver de baixar: si no hi cap, el contingut es fa més petit (fins a un mínim llegible)
const TFIT = { ro: null, raf: 0 };
// editors de blocs: el món, el programa i la paleta en franges fixes; aquí es calcula quant pot ocupar el món
function tEdFit(b) {
  const st = b.querySelector(':scope>.tstage'), w = st && st.querySelector('.tworld'), box = w && w.querySelector('.b3d,.rarena,.sstage'); if (!box) return;
  const two = getComputedStyle(st).gridTemplateColumns.trim().split(/\s+/).length > 1, H = st.clientHeight;
  let others = 0; [...w.children].forEach(c => { if (c !== box && c.offsetParent !== null) others += c.offsetHeight + 8; });
  const avail = two ? H - others - 20 : Math.min(H * .52 - others, H - others - 190);
  st.style.setProperty('--wh', Math.max(110, Math.round(avail)) + 'px');
}
function tFit() {
  const b = document.querySelector('.tsess>.tsbody'); if (!b) return;
  if (b.querySelector(':scope>.tstage')) { b.style.zoom = ''; tEdFit(b); return; }
  b.style.zoom = ''; const z0 = parseFloat(getComputedStyle(b).zoom) || 1, min = z0 * (innerWidth < 600 ? .72 : .66);
  const fits = z => { b.style.zoom = z.toFixed(3); return b.scrollHeight <= b.clientHeight + 2; };
  let z = z0;
  if (!fits(z0)) {   // el contingut es recol·loca en fer-se més petit: es busca la mida més gran que hi cap
    let lo = min, hi = z0; if (!fits(lo)) z = lo; else { for (let n = 0; n < 7; n++) { const m = (lo + hi) / 2; if (fits(m)) lo = m; else hi = m; } z = lo; }
    b.style.zoom = z.toFixed(3);
  } else b.style.zoom = '';
  b.classList.toggle('fitz', z < z0);
}
function tFitWatch() {
  const b = document.querySelector('.tsess>.tsbody'); if (!b) return;
  const go = () => { cancelAnimationFrame(TFIT.raf); TFIT.raf = requestAnimationFrame(tFit); };
  const imgs = () => b.querySelectorAll('img').forEach(i => i.complete || i.addEventListener('load', go, { once: true }));
  if (TFIT.ro) TFIT.ro.disconnect();
  if (typeof MutationObserver === 'function') { TFIT.ro = new MutationObserver(() => { imgs(); go(); }); TFIT.ro.observe(b, { childList: true, subtree: true, characterData: true }); }
  imgs();
  go(); setTimeout(go, 400); setTimeout(go, 1500);
}
addEventListener('resize', () => { if (document.querySelector('.tsess')) { cancelAnimationFrame(TFIT.raf); TFIT.raf = requestAnimationFrame(tFit); } });
// botó de baix: «Continua» (activat quan el pas està fet) o el que demani el pas
function tFoot(label, fn, on = true, extra = '') {
  const f = document.getElementById('tsf'); if (!f) return;
  f.innerHTML = `${extra}<button class="btn big tnext" id="tnext" ${on ? '' : 'disabled'}>${label}</button>`;
  document.getElementById('tnext').onclick = fn;
}
// temps de la sessió (per al panell i els informes): cada pas compta fins a 8 minuts com a molt
function tTime() { const rec = TS_().s[TSS.id] = TS_().s[TSS.id] || {}; if (TSS.t0) rec.ms = (rec.ms || 0) + Math.min(Date.now() - TSS.t0, 8 * 60000); TSS.t0 = Date.now(); return rec; }
function tNext() {
  TSS.n++;
  const rec = tTime();
  if (TSS.i + 1 >= TSS.s.steps.length) return tFinish();
  TSS.i++;
  if (!rec.done) { rec.i = TSS.i; save(); }
  addXPsafe(2);
  tStep();
}
const addXPsafe = n => { if (typeof addXP === 'function' && P.daily) addXP(n); else P.xp = (P.xp || 0) + n; };
const tContinue = () => tFoot(L('Continua', 'Continúa'), tNext);
function tFinish() {
  const t = TS_(), rec = tTime(), first = !rec.done;
  rec.done = 1; rec.i = 0; rec.d = today(); rec.n = (rec.n || 0) + 1;
  if (first) { addXPsafe(30); P.stats = P.stats || {}; P.stats.lessons = (P.stats.lessons || 0) + 1; }
  const bd = TSS.s.badge && TBADGE[TSS.s.badge], newB = bd && !t.badges[bd.id];
  if (newB) t.badges[bd.id] = today();
  if (typeof touchStreak === 'function') touchStreak();
  save(); if (typeof syncNow === 'function') syncNow();
  const s = TSS.s;
  app.innerHTML = `<div class="tsess k-end"><div class="tsbody"><div class="tend"><div class="burst"></div><div class="tendbot">${bitChar('win')}</div>
    <h1>${L('Sessió completada!', '¡Sesión completada!')}</h1><p class="sub">${tx(s.t)}</p>
    ${s.learn ? `<div class="tlearn"><b>${L('Avui has après…', 'Hoy has aprendido…')}</b><ul>${s.learn.map(x => `<li>${TIC.ok}<span>${tval(x)}</span></li>`).join('')}</ul></div>` : ''}
    ${newB ? `<div class="tnewb"><span>${bd.ico}</span><div><small>${L('Insígnia nova', 'Insignia nueva')}</small><b>${tx(bd.n)}</b><p>${tx(bd.d)}</p></div></div>` : ''}
    ${first ? `<p class="txp">+${30 + 2 * (s.steps.length - 1)} XP</p>` : ''}</div></div>
    <div class="tsfoot"><button class="btn big" onclick="TSS=null;go('home')">${L('Molt bé!', '¡Muy bien!')}</button></div></div>`;
  SFX.win && SFX.win(); typeof confetti === 'function' && confetti(140);
}

/* ---------- Tipus de pas ---------- */
const tWho = (who, mood) => who === 'bit' ? bitChar(mood || 'idle') : charSVG('numi', mood || 'happy');
const tBubble = (who, html, mood) => `<div class="tsay2 w-${who || 'numi'}"><div class="tsc2">${tWho(who, mood)}</div><div class="bubble big">${html}</div></div>`;
const TSTEP = {
  // història o explicació: personatge, bafarada i, si cal, un dibuix o un món d'exemple
  story(st) {
    const art = st.w ? (() => { const W = bitWorld(st.w); return `<div class="tart">${bitSVG(W, bitSim(W))}</div>`; })() : st.art ? `<div class="tart">${typeof st.art === 'function' ? st.art() : st.art}</div>` : '';
    const blocks = st.blocks ? `<div class="tlegend">${st.blocks.map(k => `<div class="tlg"><span class="tb c-${BIT_CAT[k]} tpb"><span class="tbi">${BIT_ICO[k]}</span><span class="tbl">${bitLabel(bitNew(k))}</span></span><span>${tx(TBLK[k] || '')}</span></div>`).join('')}</div>` : '';
    const top = st.scene && typeof tScene === 'function' ? `${tScene(st.scene, st.who, st.mood)}<div class="bubble big tsbub">${tval(st.t)}</div>` : tBubble(st.who, tval(st.t), st.mood);
    $('#tsb').innerHTML = `<div class="tcol">${st.title ? `<h2 class="tsh">${tval(st.title)}</h2>` : ''}${top}${art}${blocks}${st.box ? `<div class="tbox">${tval(st.box)}</div>` : ''}</div>`;
    tContinue();
  },
  // pregunta de triar (una de bona). opts poden dur dibuixos (HTML)
  quiz(st) {
    // una resposta que cita un bloc entre «» es veu com la peça de colors de l'editor
    const QB = [[/^(mou-te|muévete|gira|ves a|ve a|llisca|desliza|apunta|posa [xy]|pon [xy]|canvia [xy]|cambia [xy]|rebota|endavant|enrere|avança|avanza|adelante|atrás|motor|atura|para el motor|segueix la línia|seguir la línea|seguir la línia)/i, 'mov'],
      [/^(repeteix|repite|per sempre|para siempre|espera)/i, 'loop'], [/^(si |quan |en iniciar|al iniciar|en prémer|al empezar|al pulsar|al tocar|al cambiar)/i, 'cond'],
      [/^(digues|di |di ¡|pensa|piensa|vestit|disfraz|mostra|muestra|amaga|escón|esborra|borra|canvia el vestit|cambia el disfraz)/i, 'art'], [/^(toca la nota|toca el so|reprodueix|so |sonido)/i, 'snd'], [/^(suma|posa punts|pon puntos|canvia punts|cambia puntos)/i, 'var']];
    const blk = h => h.replace(/«([^«»<]{2,60})»/g, (m, t) => { const c = (QB.find(([r]) => r.test(t)) || [])[1]; return c ? `<span class="tqb c-${c}">${t}</span>` : m; });
    const order = st.keep ? st.opts.map((_, i) => i) : shuffle(st.opts.map((_, i) => i));
    let pick = null;
    $('#tsb').innerHTML = `<div class="tcol">${st.who ? tBubble(st.who, tval(st.q)) : `<div class="tqh"><span class="tqbit">${bitChar('think')}</span><h2 class="tsq">${tval(st.q)}</h2></div>`}${st.art ? `<div class="tart sm">${typeof st.art === 'function' ? st.art() : st.art}</div>` : ''}${st.w ? (() => { const W = bitWorld(st.w); return `<div class="tart sm">${bitSVG(W, bitSim(W))}</div>`; })() : ''}
      <div class="topts ${st.grid ? 'grid' : ''}">${order.map((i, k) => `<button class="topt" data-i="${i}"><span class="tol">${'ABCDEF'[k]}</span><span class="tot">${blk(tval(st.opts[i]))}</span></button>`).join('')}</div><div class="tfb" id="tfb"></div></div>`;
    document.querySelectorAll('.topt').forEach(b => b.onclick = () => { if (TSS.ready) return; pick = +b.dataset.i; document.querySelectorAll('.topt').forEach(x => x.classList.toggle('on', x === b)); SFX.tap && SFX.tap(); tFoot(L('Comprova', 'Comprueba'), check); });
    const check = () => {
      if (pick === null) return; TSS.ready = true;
      const ok = pick === st.a;
      document.querySelectorAll('.topt').forEach(x => { const i = +x.dataset.i; x.disabled = true; if (i === st.a) x.classList.add('ok'); else if (i === pick) x.classList.add('ko'); });
      $('#tfb').innerHTML = `<div class="tfbox ${ok ? 'ok' : 'ko'}"><b>${ok ? tx(st.yes || "Molt bé!|¡Muy bien!") : L('No ben bé.', 'No exactamente.')}</b>${st.ex ? ` ${tval(st.ex)}` : ''}</div>`;
      ok ? SFX.ok && SFX.ok() : SFX.ko && SFX.ko(); if (ok) TSS.ok++;
      tContinue();
    };
    tFoot(L('Comprova', 'Comprueba'), check, false);
  },
  // posar coses en ordre (tocar-les una darrere l'altra)
  seq(st) {
    // ordenar: totes les targetes en una llista que es reordena arrossegant (o amb ↑ ↓); «Comprova» marca cada lloc
    let ord = shuffle(st.items.map((_, i) => i)); if (ord.every((v, i) => v === i) && ord.length > 1) ord.reverse();
    let phase = 'sort'; const first = { v: true };
    const draw = () => {
      $('#tsb').innerHTML = `<div class="tcol tseqw">${st.who ? tBubble(st.who, tval(st.q)) : `<div class="tqh"><span class="tqbit">${bitChar('think')}</span><h2 class="tsq">${tval(st.q)}</h2></div>`}
        <div class="tfb" id="tfb"></div>
        ${phase === 'sort' ? `<p class="dhint">${L('Arrossega les targetes (o fes servir les fletxes) per posar-les en ordre.', 'Arrastra las tarjetas (o usa las flechas) para ponerlas en orden.')}</p>` : ''}
        <ol class="tseq2">${ord.map((v, k) => `<li class="tsq2i ${phase !== 'sort' ? (v === k ? 'ok' : 'ko') : ''}" data-k="${k}"><span class="tsqn">${k + 1}</span><span class="tsqt">${tval(st.items[v])}</span>${phase === 'sort' ? `<span class="tsqa"><button data-m="-1" ${k === 0 ? 'disabled' : ''} aria-label="${L('Puja', 'Sube')}">↑</button><button data-m="1" ${k === ord.length - 1 ? 'disabled' : ''} aria-label="${L('Baixa', 'Baja')}">↓</button></span><span class="tsqg" aria-hidden="true">⋮⋮</span>` : phase === 'retry' ? `<i class="dcm">${v === k ? '✓' : '✕'}</i>` : '<i class="dcm">✓</i>'}</li>`).join('')}</ol></div>`;
      wire();
      if (phase === 'sort') tFoot(L('Comprova', 'Comprueba'), check, true);
      else if (phase === 'retry') tFoot(L('Torna-ho a provar', 'Vuelve a intentarlo'), () => { phase = 'sort'; draw(); }, true);
    };
    const move = (k, d) => { const j = k + d; if (j < 0 || j >= ord.length) return; [ord[k], ord[j]] = [ord[j], ord[k]]; SFX.tap && SFX.tap(); draw(); };
    const check = () => {
      const ok = ord.every((v, i) => v === i);
      if (ok) { phase = 'done'; if (first.v) TSS.ok++; SFX.ok && SFX.ok(); typeof confetti === 'function' && confetti(50); draw();
        $('#tfb').innerHTML = `<div class="tfbox ok"><b>${L('Perfecte! Aquest és l\'ordre.', '¡Perfecto! Este es el orden.')}</b>${st.ex ? ' ' + tval(st.ex) : ''}</div>`; TSS.ready = true; tContinue(); return; }
      first.v = false; phase = 'retry'; SFX.ko && SFX.ko(); const n = ord.filter((v, i) => v === i).length; draw();
      $('#tfb').innerHTML = `<div class="tfbox ko"><b>${L(`${n} de ${ord.length} al seu lloc.`, `${n} de ${ord.length} en su sitio.`)}</b> ${L('Les marcades amb ✕ no hi van. Pensa què ha de passar abans i què després.', 'Las marcadas con ✕ no van ahí. Piensa qué debe pasar antes y qué después.')}</div>`;
      document.querySelectorAll('.tsq2i.ko').forEach(e => e.classList.add('shake'));
    };
    const wire = () => {
      const list = document.querySelector('.tseq2'); if (!list || phase !== 'sort') return;
      list.querySelectorAll('.tsqa button').forEach(b => b.onclick = ev => { ev.stopPropagation(); move(+b.closest('li').dataset.k, +b.dataset.m); });
      list.querySelectorAll('.tsq2i').forEach(li => li.onpointerdown = ev => {
        if (ev.target.closest('button')) return; ev.preventDefault(); const k0 = +li.dataset.k, items = [...list.children], r = li.getBoundingClientRect(), y0 = ev.clientY, mids = items.map(x => { const q = x.getBoundingClientRect(); return q.top + q.height / 2; }); let ghost = null, to = k0;
        const mv = m => { const dy = m.clientY - y0; if (!ghost && Math.abs(dy) < 6) return;
          if (!ghost) { ghost = li.cloneNode(true); ghost.classList.add('ghost'); ghost.style.cssText = `width:${r.width}px;left:${r.left}px;top:${r.top}px;animation:none`; document.body.appendChild(ghost); li.classList.add('lift'); }
          ghost.style.top = `${r.top + dy}px`;
          to = mids.findIndex(y => m.clientY < y); if (to < 0) to = items.length - 1; else if (to > k0) to--;
          items.forEach((x, n) => x.classList.toggle('gap', n === (to >= k0 ? to + 1 : to) && n !== k0)); };
        const up = () => { li.removeEventListener('pointermove', mv); li.removeEventListener('pointerup', up); li.removeEventListener('pointercancel', up);
          if (!ghost) return; ghost.remove(); if (to !== k0) { const [v] = ord.splice(k0, 1); ord.splice(to, 0, v); SFX.tap && SFX.tap(); } draw(); };
        li.setPointerCapture && li.setPointerCapture(ev.pointerId); li.addEventListener('pointermove', mv); li.addEventListener('pointerup', up); li.addEventListener('pointercancel', up);
      });
    };
    draw();
  },

  // moure en Bit amb botons: el que fas queda apuntat com un programa
  hand(st) {
    tbMake(st.w, { mode: 'hand' });
    TB.onDone = () => { tSayOk(st.done || L('Mira a sota: els moviments que has fet són un <b>programa</b>!', 'Mira abajo: ¡los movimientos que has hecho son un <b>programa</b>!')); tContinue(); };
    tStage(st);
    tFoot(L('Continua', 'Continúa'), tNext, false);
  },
  // predir: on acabarà en Bit amb aquest programa? (A, B o C) i després es comprova executant-lo
  predict(st) {
    tbMake(st.w, { mode: 'view', prog: st.prog, marks: true, fns: st.fns, fnName: st.fnName });
    let pick = null;
    const opts = Object.keys(TB.W.marks).sort();
    TB.extra = `<div class="tpick">${opts.map(k => `<button class="topt sm" data-m="${k}">${k}</button>`).join('')}</div>`;
    tStage(st);
    const wire = () => document.querySelectorAll('.tpick .topt').forEach(b => b.onclick = () => { if (TSS.ready) return; pick = b.dataset.m; document.querySelectorAll('.tpick .topt').forEach(x => x.classList.toggle('on', x === b)); document.querySelectorAll('.bmark').forEach(x => x.classList.toggle('on', x.dataset.m === pick)); TB.pick = pick; TB.b3 && TB.b3.marks(true, pick); SFX.tap && SFX.tap(); tFoot(L('Comprova-ho executant el programa', 'Compruébalo ejecutando el programa'), check); });
    wire();
    // abans de triar no es pot executar
    const go0 = document.getElementById('tbgo'); if (go0) go0.disabled = true;
    const check = () => {
      if (!pick) return; TSS.ready = true;
      document.querySelectorAll('.tpick .topt').forEach(b => b.disabled = true);
      TB.onDone = TB.onFail = null;
      TB.b3 && TB.b3.marks(false);
      tbGo();
      const wait = setInterval(() => { if (TB && TB.run) return; clearInterval(wait); const ok = pick === st.a;
        document.querySelectorAll('.tpick .topt').forEach(b => b.classList.add(b.dataset.m === st.a ? 'ok' : b.dataset.m === pick ? 'ko' : 'x'));
        tbSay(ok ? L(`Exacte! Acaba a la <b>${st.a}</b>.`, `¡Exacto! Termina en la <b>${st.a}</b>.`) : L(`Acaba a la <b>${st.a}</b>. ${st.ex ? tval(st.ex) : 'Fixa\'t en cada gir.'}`, `Termina en la <b>${st.a}</b>. ${st.ex ? tval(st.ex) : 'Fíjate en cada giro.'}`), ok ? 'ok' : 'bad');
        ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko();
        tContinue(); }, 120);
    };
    tFoot(L('Tria una lletra', 'Elige una letra'), check, false);
  },
  // investigar: tocar el bloc que… (el bo porta x:1)
  spot(st) {
    tbMake(st.w, { mode: 'spot', prog: st.prog, fns: st.fns, fnName: st.fnName });
    TB.onSpot = (id, b) => {
      if (TSS.ready) return; TSS.ready = true;
      const ok = !!(b && b.x);
      const e = document.getElementById('tb' + id); if (e) e.classList.add(ok ? 'good' : 'err');
      if (!ok) { const g = Object.values(TB.ids).find(v => v.b.x); if (g) document.getElementById('tb' + g.b._id).classList.add('good'); }
      tSayOk(ok ? (st.yes ? tval(st.yes) : L('Molt bé!', '¡Muy bien!')) : (st.ex ? tval(st.ex) : L('No és aquest. És el que està marcat en verd.', 'No es este. Es el que está marcado en verde.')), !ok);
      ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko();
      tContinue();
    };
    tStage(st);
    tFoot(L('Toca un bloc del programa', 'Toca un bloque del programa'), () => { }, false);
  },
  // reptes: construir el programa (o arreglar-ne un: st.prog) amb una paleta i, de vegades, un màxim de blocs
  build(st) {
    tbMake(st.w, { prog: st.prog, pal: st.pal, max: st.max, fns: st.fns, fnEdit: st.fnEdit, fnName: st.fnName, ev: st.ev, evs: st.evs });
    TB.conds = st.conds; TB.colors = st.colors; TB.notes = st.notes;
    TB.onDone = () => { tContinue(); if (st.after) setTimeout(() => tbSay(tval(st.after), 'ok'), 900); };
    TB.onFail = () => { if (TB.tries >= 2) tHintBtn(st); };
    tStage(st);
    tFoot(L('Continua', 'Continúa'), tNext, false);
  },
  // ordenar blocs donats
  parsons(st) {
    tbMake(st.w, { mode: 'parsons', pool: shuffle(bitClone(st.pool)), fns: st.fns, fnName: st.fnName });
    TB.onDone = () => tContinue();
    TB.onFail = () => { if (TB.tries >= 2) tHintBtn(st); };
    tStage(st);
    tFoot(L('Continua', 'Continúa'), tNext, false);
  },
  // projecte lliure: amb uns mínims; quan funciona, es pot desar al portafoli
  create(st) {
    TSTEP.build(st);
    TB.onDone = () => {
      const bad = st.check && st.check(TB.prog, TB);
      if (bad) { TB.solved = false; tbSay(tval(bad), 'bad'); return; }
      tFoot(L('Desa-ho i continua', 'Guárdalo y continúa'), () => { tSaveProj(st); tNext(); }, true, `<button class="btn ghost" onclick="tbReset()">${L('El milloro', 'Lo mejoro')}</button>`);
    };
  },
  // activitat sense pantalla (amb algú de casa); es pot deixar per a més tard
  unplug(st) {
    $('#tsb').innerHTML = `<div class="tcol"><div class="tunp"><div class="tunph"><span class="tunpi">${st.ico || '🧍'}</span><div><small>${L('Sense pantalla', 'Sin pantalla')}</small><h2>${tval(st.title)}</h2></div></div>
      ${tval(st.t)}<ol>${st.steps.map(x => `<li>${tval(x)}</li>`).join('')}</ol>${st.tip ? `<p class="ttip">${tx(st.tip)}</p>` : ''}</div></div>`;
    tFoot(L('Ho hem fet!', '¡Lo hemos hecho!'), () => { addXPsafe(5); tNext(); }, true, `<button class="btn ghost" onclick="tNext()">${L('Ara no', 'Ahora no')}</button>`);
  },
  // pausa activa: moure el cos (amb compte enrere)
  move(st) {
    let n = st.secs || 30;
    $('#tsb').innerHTML = `<div class="tcol"><div class="tmove"><div class="tmvbot">${bitChar('dance')}</div><h2>${tx(st.title || 'Pausa activa!|¡Pausa activa!')}</h2><p>${tval(st.t)}</p><div class="tclock" id="tclock">${n}</div></div></div>`;
    tFoot(L('Ja està!', '¡Ya está!'), tNext, false);
    TS_T = setInterval(() => { n--; const c = document.getElementById('tclock'); if (c) c.textContent = Math.max(0, n); if (n <= 0) { clearInterval(TS_T); TS_T = null; SFX.ok && SFX.ok(); const b = document.getElementById('tnext'); if (b) b.disabled = false; } }, 1000);
    setTimeout(() => { const b = document.getElementById('tnext'); if (b) b.disabled = false; }, Math.min(8000, n * 1000));
  },
  // com t'ha anat? (autoavaluació; no compta per a res, ajuda a pensar-hi)
  feel(st) {
    $('#tsb').innerHTML = `<div class="tcol">${tBubble('numi', tx(st.q || 'Com t\'ha anat la sessió d\'avui?|¿Cómo te ha ido la sesión de hoy?'))}
      <div class="tfeel">${[['😎', L('Molt fàcil', 'Muy fácil')], ['🙂', L('Bé', 'Bien')], ['🤔', L("M'ha costat", 'Me ha costado')], ['😵', L('Molt difícil', 'Muy difícil')]].map(([e, t], i) => `<button data-i="${i}"><span>${e}</span>${t}</button>`).join('')}</div></div>`;
    document.querySelectorAll('.tfeel button').forEach(b => b.onclick = () => { document.querySelectorAll('.tfeel button').forEach(x => x.classList.toggle('on', x === b)); const r = TS_().s[TSS.id] = TS_().s[TSS.id] || {}; r.f = +b.dataset.i; tContinue(); });
    tFoot(L('Continua', 'Continúa'), tNext, false);
  }
};
/* ---------- Unitat 8: el meu propi repte (dissenyar el mapa, resoldre'l, que el provi algú altre) i el diploma ---------- */
// mapa dissenyat per l'alumne (P.tech.maps[slot]) o, si encara no n'hi ha, el de partida del pas
const tMyMap = slot => { const m = TS_().maps[slot || 'r8']; return m && m.map ? m : null; };
// es pot arribar a tot? (camí obert des d'en Bit fins a la bandera, les estrelles, les caixes i les cases)
function tMapCheck(rows) {
  const spec = { map: rows }, W = bitWorld(spec), bots = rows.join('').replace(/[^\^>v<]/g, '').length;
  const seen = new Set([bitKey(W.bot[0], W.bot[1])]), q = [[W.bot[0], W.bot[1]]];
  while (q.length) { const [x, y] = q.shift(); for (let d = 0; d < 4; d++) { const nx = x + BIT_DX[d], ny = y + BIT_DY[d], k = bitKey(nx, ny); if (!seen.has(k) && !bitBlocked(W, nx, ny)) { seen.add(k); q.push([nx, ny]); } } }
  const things = [...W.gems, ...W.boxes, ...W.homes, ...(W.goal ? [bitKey(...W.goal)] : [])];
  return { bot: bots === 1, aim: !!(W.goal || W.gems.size || W.homes.size), boxes: W.boxes.size >= W.homes.size, reach: bots === 1 && things.every(k => seen.has(k)), W };
}
const TDES_TOOLS = [['#', "Camí|Camino"], ['.', 'Herba|Hierba'], ['R', 'Roca|Roca'], ['~', 'Aigua|Agua'], ['*', 'Estrella|Estrella'], ['F', 'Bandera|Bandera'], ['b', 'Caixa|Caja'], ['H', 'Casa|Casa'], ['bot', 'En Bit|Bit']];
TSTEP.design = function (st) {
  const old = tMyMap(st.slot), w = (st.size || [7, 6])[0], h = (st.size || [7, 6])[1];
  let rows = old ? old.map.slice() : (st.w ? st.w.map.slice() : [ '>' + '.'.repeat(w - 1), ...Array.from({ length: h - 1 }, () => '.'.repeat(w)) ]);
  let tool = '#', name = old ? old.name : '';
  const tools = (st.tools || TDES_TOOLS.map(t => t[0])).map(k => TDES_TOOLS.find(t => t[0] === k)).filter(Boolean);
  const put = (x, y) => {
    const r = rows.map(l => [...l]), c = r[y][x];
    if (tool === 'bot') { const dirs = '^>v<'; if (dirs.includes(c)) r[y][x] = dirs[(dirs.indexOf(c) + 1) % 4]; else { r.forEach(l => l.forEach((ch, i) => { if (dirs.includes(ch)) l[i] = '#'; })); r[y][x] = '>'; } }
    else { if ('^>v<'.includes(c) && tool !== '#') return; if (tool === 'F') r.forEach(l => l.forEach((ch, i) => { if (ch === 'F') l[i] = '#'; })); r[y][x] = '^>v<'.includes(c) ? c : tool; }
    rows = r.map(l => l.join('')); SFX.tap && SFX.tap(); draw();
  };
  const draw = () => {
    const ck = tMapCheck(rows), W = ck.W, ok = ck.bot && ck.aim && ck.reach && ck.boxes && name.trim().length > 1;
    const vb = [w * BIT_C + 2 * BW_M, h * BIT_C + 2 * BW_M + BW_TOP + BW_CL];
    const cells = rows.flatMap((l, y) => [...l].map((_, x) => `<button style="left:${((BW_M + x * BIT_C) / vb[0] * 100).toFixed(3)}%;top:${((BW_M + BW_TOP + y * BIT_C) / vb[1] * 100).toFixed(3)}%;width:${(BIT_C / vb[0] * 100).toFixed(3)}%;height:${(BIT_C / vb[1] * 100).toFixed(3)}%" onclick="TDES.put(${x},${y})" aria-label="${x + 1},${y + 1}"></button>`)).join('');
    const crit = [[ck.bot, L('Hi ha en Bit (un de sol)', 'Está Bit (solo uno)')], [ck.aim, L('Hi ha una bandera, estrelles o cases', 'Hay una bandera, estrellas o casas')], [ck.reach, L('En Bit pot arribar a tot', 'Bit puede llegar a todo')], [ck.boxes, L('Hi ha prou caixes per a les cases', 'Hay cajas suficientes para las casas')], [name.trim().length > 1, L('El repte té nom', 'El reto tiene nombre')]];
    $('#tsb').innerHTML = `<div class="tdes"><div class="tsq2"><span class="tsqc">${bitChar('idle')}</span><div><p>${tval(st.q)}</p>${st.crit ? `<ul class="tcrit">${st.crit.map(c => `<li>${tval(c)}</li>`).join('')}</ul>` : ''}</div></div>
      <div class="tdesg"><div class="tdesw">${bitSVG(W, bitSim(W), { still: true })}<div class="tdesc">${cells}</div></div>
      <div class="tdesp"><div class="tdtools">${tools.map(([k, t]) => `<button class="${k === tool ? 'on' : ''}" onclick="TDES.tool('${k}')"><span class="tdti">${tDesIco(k)}</span>${tx(t)}</button>`).join('')}</div>
        <p class="tdhelp">${tool === 'bot' ? L('Toca una casella per posar-hi en Bit. Torna-la a tocar per canviar cap on mira.', 'Toca una casilla para poner a Bit. Vuelve a tocarla para cambiar hacia dónde mira.') : tool === '#' ? L('Si dibuixes un camí, la resta de l\'illa es converteix en bosc: en Bit només podrà anar pel camí.', 'Si dibujas un camino, el resto de la isla se convierte en bosque: Bit solo podrá ir por el camino.') : L('Toca les caselles per posar-hi el que has triat.', 'Toca las casillas para poner lo que has elegido.')}</p>
        <label class="lbl">${L('Nom del teu repte', 'Nombre de tu reto')}</label><input id="tdname" class="nm" maxlength="28" value="${esc(name)}" placeholder="${L('p. ex. El laberint del pirata', 'p. ej. El laberinto del pirata')}">
        <ul class="tdck">${crit.map(([o, t]) => `<li class="${o ? 'ok' : ''}">${o ? TIC.ok : '○'} ${t}</li>`).join('')}</ul></div></div></div>`;
    $('#tdname').oninput = e => { name = e.target.value; const lis = document.querySelectorAll('.tdck li'); const okN = name.trim().length > 1; lis[4].className = okN ? 'ok' : ''; lis[4].innerHTML = `${okN ? TIC.ok : '○'} ${crit[4][1]}`; const all = ck.bot && ck.aim && ck.reach && ck.boxes && okN; const b = document.getElementById('tnext'); if (b) b.disabled = !all; };
    $('#tsb').classList.add('wide');
    tFoot(L('Desa el repte', 'Guarda el reto'), () => { TS_().maps[st.slot || 'r8'] = { map: rows.slice(), name: name.trim(), d: today() }; save(); addXPsafe(5); toast(L('Repte desat!', '¡Reto guardado!')); tNext(); }, ok);
  };
  window.TDES = { put, tool(k) { tool = k; draw(); } };
  draw();
};
function tDesIco(k) {
  const W = bitWorld({ map: [k === 'bot' ? '>' : k], paths: false });
  return `<svg viewBox="${-BW_M / 2} ${-BW_M / 2 - BW_TOP} ${BIT_C + BW_M} ${BIT_C + BW_M + BW_TOP}">${bitDefs()}${k === '~' ? bitGround(W, 0, 0) : k === '#' || k === 'bot' || 'F*b'.includes(k) ? `<rect x="3" y="3" width="54" height="54" rx="12" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.5"/>` : `<rect x="0" y="0" width="60" height="60" rx="12" fill="url(#bwGrass)"/>`}${k === 'R' ? bitThing({ ...W, rocks: new Set(['0,0']) }, 0, 0) : k === 'H' ? bitThing(W, 0, 0) : k === '.' ? '' : bitItems(W)}${k === 'bot' ? `<g transform="translate(30 54)">${bitBot(1)}</g>` : ''}</svg>`;
}
// resoldre un repte dissenyat: el meu (r8-2) o el d'un company/a, que s'asseu al meu ordinador (r8-3)
TSTEP.mybuild = function (st) {
  const m = tMyMap(st.slot);
  if (!m) { $('#tsb').innerHTML = `<div class="tcol">${tBubble('numi', L('Encara no has desat cap repte. Torna a la sessió «Dissenya el teu repte» i desa\'n un: aquí el podràs programar.', 'Aún no has guardado ningún reto. Vuelve a la sesión «Diseña tu reto» y guarda uno: aquí podrás programarlo.'))}</div>`; return tContinue(); }
  const cst = { ...st, w: { map: m.map }, name: m.name, q: tval(st.q).replace('{nom}', esc(m.name)) };
  TSTEP.create(cst);
  // és el repte de l'alumne/a: si després de tres intents encara no surt, el pot desar tal com està (i el revisa amb el professor/a)
  const f0 = TB.onFail; TB.onFail = m => { if (f0) f0(m); if (TB.tries >= 3 && !TB.solved) tFoot(L("Desa'l tal com està i continua", 'Guárdalo tal como está y continúa'), () => { tSaveProj(cst); tNext(); }, true); };
};
// valoració del repte d'un company/a: tres preguntes ràpides, es desa al perfil
TSTEP.review = function (st) {
  // una pregunta cada vegada (punts a dalt per anar-hi i veure les que falten): sempre cap a la pantalla
  const ans = {}, qs = st.items || []; let cur = 0;
  const btn = st.btn ? tval(st.btn) : L('Desa la valoració', 'Guarda la valoración');
  const draw = () => {
    const it = qs[cur];
    $('#tsb').innerHTML = `<div class="tcol">${tBubble(st.who || 'numi', tval(st.q))}<div class="trev pg">
      <div class="trdots">${qs.map((_, i) => `<button class="${i === cur ? 'on' : ''} ${ans[i] != null ? 'ok' : ''}" data-g="${i}" aria-label="${i + 1}">${i + 1}</button>`).join('')}</div>
      <div class="trq"><b>${tval(it.q)}</b><div class="trop">${it.opts.map((o, j) => `<button data-o="${j}" class="${ans[cur] === j ? 'on' : ''}">${tval(o)}</button>`).join('')}</div></div></div></div>`;
    document.querySelectorAll('.trdots button').forEach(b => b.onclick = () => { cur = +b.dataset.g; SFX.tap && SFX.tap(); draw(); });
    document.querySelectorAll('.trop button').forEach(b => b.onclick = () => { ans[cur] = +b.dataset.o; SFX.tap && SFX.tap(); draw();
      const next = qs.findIndex((_, i) => ans[i] == null && i > cur) >= 0 ? qs.findIndex((_, i) => ans[i] == null && i > cur) : qs.findIndex((_, i) => ans[i] == null);
      if (next >= 0) setTimeout(() => { cur = next; draw(); }, 380); });
    const all = Object.keys(ans).length === qs.length;
    tFoot(all ? btn : L(`Respon les ${qs.length} preguntes`, `Responde las ${qs.length} preguntas`), () => { if (!all) return; const t = TS_(); t.rev = t.rev || {}; t.rev[TSS.id] = { a: qs.map((_, i) => ans[i]), d: today() }; save(); tNext(); }, all);
  };
  draw();
};
// el diploma del curs: nom, curs, sessions fetes, insígnies i projectes
TSTEP.diploma = function (st) {
  const t = TS_(), c = TSS.c, all = tSessions(c), done = all.filter(s => tDone(s.id) || s.id === TSS.id).length, nb = Object.keys(t.badges).length, np = t.port.length;
  $('#tsb').innerHTML = `<div class="tcol"><div class="tdip" id="tdip"><img class="tdlogo" src="${VAR.logo}" alt="${VAR.name}"><p class="tdk">${L('Diploma', 'Diploma')}</p><h1>${esc(P.name)}</h1>
    <p>${tval(st.t || (L(`ha completat el curs <b>${tx(c.name)}</b>.`, `ha completado el curso <b>${tx(c.name)}</b>.`)))}</p>
    <div class="tdstats"><span><b>${done}</b>${L('sessions', 'sesiones')}</span><span><b>${nb}</b>${L('insígnies', 'insignias')}</span><span><b>${np}</b>${L('projectes', 'proyectos')}</span></div>
    ${st.skills ? `<ul class="tdsk">${st.skills.map(k => `<li>${TIC.ok}${tval(k)}</li>`).join('')}</ul>` : ''}<p class="tddate">${new Date().toLocaleDateString(LANG === 'es' ? 'es-ES' : 'ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p><div class="tdbit">${bitChar('win')}</div></div></div>`;
  SFX.win && SFX.win(); typeof confetti === 'function' && confetti(160);
  tFoot(L('Continua', 'Continúa'), tNext, true, `<button class="btn ghost" onclick="window.print()">${L('Imprimeix', 'Imprimir')}</button>`);
};
// escenari dins la sessió: enunciat + món + programa
function tStage(st) {
  const q = st.q ? `<div class="tsq2">${st.who === 'bit' ? `<span class="tsqc">${bitChar('idle')}</span>` : `<span class="tsqc">${charSVG('numi', 'idle')}</span>`}<div><p>${tval(st.q)}</p>${st.crit ? `<ul class="tcrit">${st.crit.map(c => `<li>${tval(c)}</li>`).join('')}</ul>` : ''}</div></div>` : '';
  $('#tsb').innerHTML = `${q}${tbHTML(TB.extra || '')}`;
  $('#tsb').classList.add('wide');
  tb3dMount();
}
function tSayOk(html, bad) { tbSay(html, bad ? 'bad' : 'ok'); }
function tHintBtn(st) {
  if (document.getElementById('thint') || !(st.hint || st.sol)) return;
  const f = document.getElementById('tsf'), b = document.createElement('button');
  b.className = 'btn ghost'; b.id = 'thint'; b.textContent = L('Una pista', 'Una pista');
  b.onclick = () => {
    if (st.hint && !b.dataset.k) { b.dataset.k = 1; tbSay(`💡 ${tval(st.hint)}`); b.textContent = st.sol ? L('Mostra una solució', 'Muestra una solución') : L('Una pista', 'Una pista'); if (!st.sol) b.remove(); return; }
    if (st.sol) { TB.prog.splice(0, TB.prog.length, ...bitClone(st.sol)); TB.cur = { l: TB.prog, i: TB.prog.length }; if (TB.pool) TB.pool.splice(0);
      if (st.solFns && TB.fns) for (const [f, l] of Object.entries(st.solFns)) if (TB.fns[f]) TB.fns[f].splice(0, TB.fns[f].length, ...bitClone(l));
      if (st.solEv && TB.evs) for (const [e, l] of Object.entries(st.solEv)) if (TB.evs[e]) TB.evs[e].splice(0, TB.evs[e].length, ...bitClone(l));
      tbFresh(); tbDraw(); tbSay(L('Aquí tens una solució. Executa-la i mira què fa cada bloc.', 'Aquí tienes una solución. Ejecútala y mira qué hace cada bloque.')); b.remove(); }
  };
  f.insertBefore(b, f.firstChild);
}
function tSaveProj(st) {
  const t = TS_();
  t.port.push({ id: 'pj' + Date.now().toString(36), sid: TSS.id, t: st.name || TSS.s.t, w: st.w, prog: bitClone(TB.prog), fns: TB.fns ? bitClone(TB.fns) : null, fnName: st.fnName || null, evs: TB.evs ? bitClone(TB.evs) : null, d: today() });
  if (t.port.length > 60) t.port.shift();
  save(); toast(L('Projecte desat a «Projectes»!', '¡Proyecto guardado en «Proyectos»!'));
}

/* ---------- Catàleg: quan encara no hi ha cap curs assignat ---------- */
function techCatalog() {
  const acc = tAccess();
  const hero = `<section class="thero"><div class="thtxt"><p class="tkick">Numi Tech</p><h1>${L(`Hola, ${esc(P.name)}!`, `¡Hola, ${esc(P.name)}!`)}</h1>
    <p>${acc.classe ? L("Ja ets a la teva classe. Quan el professor t'assigni un curs, el trobaràs aquí.", 'Ya estás en tu clase. Cuando el profesor te asigne un curso, lo encontrarás aquí.') : L('Per començar, entra a la teva classe amb el codi que et dona el professor.', 'Para empezar, entra en tu clase con el código que te da el profesor.')}</p>
    ${acc.classe ? '' : `<button class="btn big tgo" onclick="classeModal()">${L('TINC UN CODI DE CLASSE', 'TENGO UN CÓDIGO DE CLASE')}</button>`}</div>
    <div class="thbot" aria-hidden="true">${bitChar('happy')}</div></section>`;
  const cards = TECH.map(k => `<button class="tcat" style="--cc:${k.color}" onclick="tLocked(tCourse('${k.id}'))"><span class="tcico">${k.ico}</span><span><b>${tx(k.name)}</b><small>${tx(k.age)} · ${k.units.length} ${L('unitats', 'unidades')}</small><em>${tx(k.desc)}</em></span></button>`).join('');
  app.innerHTML = tShell('home', `<h2 class="tcath">${L('Els cursos de Numi Tech', 'Los cursos de Numi Tech')}</h2><div class="tcats">${cards}</div>`, hero);
}

/* ---------- Alta a Numi Tech: amb el codi de classe del professor, o entrant amb l'usuari ---------- */
function onbTech() {
  setVariant('tech'); VIEW = 'onboard';
  let pre = ''; try { pre = sessionStorage.getItem('numi-classe') || ''; } catch (e) { }
  app.innerHTML = `<div class="page solo onb tonb"><div class="onbtop">${langPill()}</div><img class="onb-logo" src="${VAR.logo}" alt="${VAR.name}"><div class="onb-char tapme">${bitChar('happy')}</div>
    <div class="bubble big">${L('Hola! Soc en <b>Bit</b>. Aquí aprendràs a programar robots, crear jocs i fer projectes digitals a la teva classe.', '¡Hola! Soy <b>Bit</b>. Aquí aprenderás a programar robots, crear juegos y hacer proyectos digitales en tu clase.')}</div>
    <button class="btn big" onclick="loginModal()">${L('ENTRA AMB EL TEU USUARI', 'ENTRA CON TU USUARIO')}</button>
    <button class="btn big ghost" onclick="onbTechCode()">${L('TINC UN CODI DE CLASSE', 'TENGO UN CÓDIGO DE CLASE')}</button>
    <p class="mut" style="font-size:14px;margin-top:14px">${L("L'usuari i la contrasenya, o el codi de classe, te'ls dona el teu professor.", 'El usuario y la contraseña, o el código de clase, te los da tu profesor.')}</p></div>`;
  if (pre) onbTechCode();
}
function onbTechCode() {
  let pre = ''; try { pre = sessionStorage.getItem('numi-classe') || ''; } catch (e) { }
  app.innerHTML = `<div class="page solo onb tonb"><img class="onb-logo" src="${VAR.logo}" alt="${VAR.name}">
    <h2 class="tonbh">${L('Entra a la teva classe', 'Entra en tu clase')}</h2>
    <label class="lbl">${L('Codi de classe', 'Código de clase')}</label><input id="tcl" class="nm" maxlength="12" placeholder="AULA-XXXX" autocapitalize="characters" value="${esc(pre)}">
    <label class="lbl">${L('El teu nom', 'Tu nombre')}</label><input id="tnm" class="nm" maxlength="16" autocomplete="off" placeholder="${L('Només el nom', 'Solo el nombre')}">
    <label class="lbl">${L('Inventa un usuari', 'Inventa un usuario')}</label><input id="tus" class="nm" maxlength="20" autocomplete="username" autocapitalize="none" placeholder="${L('p. ex. laia.robot', 'p. ej. laia.robot')}">
    <label class="lbl">${L('Contrasenya (mínim 4)', 'Contraseña (mínimo 4)')}</label>${passField('tpw', '••••')}
    <div id="terr" class="err"></div>
    <button class="btn big" id="tgo" onclick="onbTechGo()">${L('CREA EL COMPTE', 'CREA LA CUENTA')}</button>
    <button class="link" onclick="onbTech()">${L('Tornar', 'Volver')}</button>
    <p class="legalf">${L('No posis el cognom ni dades personals a l\'usuari. Guardem el mínim de dades:', 'No pongas el apellido ni datos personales en el usuario. Guardamos el mínimo de datos:')} <a href="https://numimates.com/privacitat?l=${LANG}" target="_blank" rel="noopener">${L('política de privadesa', 'política de privacidad')}</a>.</p></div>`;
  $(pre ? '#tnm' : '#tcl').focus();
}
async function onbTechGo() {
  const classe = $('#tcl').value.trim(), name = $('#tnm').value.trim(), user = $('#tus').value.trim().toLowerCase(), pass = $('#tpw').value, err = $('#terr');
  if (!/^(AULA-?)?[A-Z0-9]{4}$/i.test(classe)) return err.textContent = L('Escriu el codi de classe (AULA-XXXX).', 'Escribe el código de clase (AULA-XXXX).');
  if (!name) return err.textContent = L('Escriu el teu nom.', 'Escribe tu nombre.');
  if (!/^[a-z0-9._-]{3,20}$/.test(user)) return err.textContent = ERR('usuari-format');
  if (pass.length < 4) return err.textContent = ERR('contrasenya-format');
  err.textContent = '…'; $('#tgo').disabled = true;
  const id = 'p' + Date.now().toString(36);
  const st = { name, goal: 20, sound: true, unlockAll: false, lang: LANG, ...freshProgress(), course: 0, baseCourse: 0, maxCourse: 0, variant: 'tech', tech: { c: 'robot', s: {}, port: [], badges: {} } };
  let r; try { r = await api('register', { name, survey: { curs: 'Numi Tech', date: today() }, state: st, username: user, password: pass, variant: 'tech', classe }); } catch (e) { r = { error: 'net' }; }
  $('#tgo').disabled = false;
  if (!r.code) return err.textContent = r.error === 'codi-classe' ? L('Aquest codi de classe no existeix. Revisa-ho amb el teu professor.', 'Este código de clase no existe. Revísalo con tu profesor.') : r.error === 'ple' ? L('Aquesta classe ja és plena.', 'Esta clase ya está llena.') : ERR(r.error || 'net');
  try { sessionStorage.removeItem('numi-classe'); } catch (e) { }
  P = { id, ...st, code: r.code, username: r.username, classe: r.grup || null, holdReg: false, consent: 'ok' };
  DB.profiles[id] = P; DB.current = id; saveLocal(); save();
  SFX.win && SFX.win(); go('home');
  toast(L(`Benvingut/da a ${esc(r.grup ? r.grup.nom : 'Numi Tech')}!`, `¡Bienvenido/a a ${esc(r.grup ? r.grup.nom : 'Numi Tech')}!`));
}

// en arrencar, app.js ha pintat la primera pantalla abans que existís aquest fitxer: si és de Numi Tech, es torna a pintar
setTimeout(() => {
  if (typeof P !== 'undefined' && P && P.id !== 'tmp' && varOf(P) === 'tech' && VIEW !== 'profiles') go(VIEW && VIEW !== 'onboard' ? VIEW : 'home');
  else if (VIEW === 'onboard' && (HOST_VAR === 'tech' || VAR_TEST === 'tech')) onbTech();
}, 0);

/* ---------- Arrossegar blocs als editors (en Bit, Maqueen, escenari) ----------
   De la paleta al lloc exacte del programa (es veu on caurà), d'un lloc a l'altre del programa, i a la paleta per esborrar-lo.
   Tocar continua funcionant igual (toc = afegeix on hi ha el cursor; toc al bloc = el selecciona). */
const TDND = { at: 0 };
const TED = {
  tb: { S: () => TB, cur: (l, i) => tbCur(l, i), ins: k => tbIns(k), del: () => tbDel(), fresh: () => { tbFresh(); tbDraw(); } },
  rb: { S: () => RB, cur: (l, i) => rbCur(l, i), ins: k => rbIns(k), del: () => rbDel(), fresh: () => { rbFresh(); rbDraw(); } },
  sg: { S: () => SG, cur: (l, i) => sgCurAt(l, i), ins: k => sgIns(k), del: () => sgDel(), fresh: () => { sgFresh(); sgDraw(); } }
};
const tdSlot = e => { const m = (e.getAttribute('onclick') || '').match(/(tb|rb|sg)Cur(?:At)?\((\d+),(\d+)\)/); return m ? { ed: m[1], li: +m[2], i: +m[3] } : null; };
const tdInside = (b, list) => { const w = l => (l || []).some(x => x === b || x.b === list || x.e === list || w(x.b) || w(x.e)); return b.b === list || b.e === list || w(b.b) || w(b.e); };
document.addEventListener('pointerdown', ev => {
  if (ev.button > 0) return;
  const pb = ev.target.closest('.tsbody>.tstage .tpal .tpb'), bh = !pb && ev.target.closest('.tsbody>.tstage .tcode .tbh');
  if (!pb && !bh) return;
  let src;
  if (pb) { if (pb.disabled) return; const m = (pb.getAttribute('onclick') || '').match(/(tb|rb|sg)Ins\('([^']+)'\)/); if (!m) return; src = { ed: m[1], k: m[2], el: pb }; }
  else { const blk = bh.closest('.tb'), m = blk && blk.id.match(/^(tb|rb|sg)(\d+)$/); if (!m || !blk.closest('.tprog,.sprogw,.tcode') || !document.querySelector('.tsbody>.tstage .tslot')) return; src = { ed: m[1], id: +m[2], el: bh, blk }; }
  const x0 = ev.clientX, y0 = ev.clientY, stage = document.querySelector('.tsbody>.tstage'); let ghost = null, drop = null, trash = false, raf = 0;
  const pal = stage.querySelector('.tpal');
  const start = () => {
    const r = src.el.getBoundingClientRect(); ghost = src.el.cloneNode(true); ghost.classList.add('tdghost'); ghost.removeAttribute('id'); ghost.style.width = Math.min(r.width, 300) + 'px'; const cs = getComputedStyle(src.el); ghost.style.background = cs.backgroundColor; ghost.style.color = cs.color; ghost.style.borderRadius = cs.borderRadius;
    document.body.appendChild(ghost); stage.classList.add('dnd', src.k ? 'dnd-new' : 'dnd-move'); if (src.blk) src.blk.classList.add('tdlift'); SFX.tap && SFX.tap();
  };
  const move = m => {
    if (!ghost) { if (Math.hypot(m.clientX - x0, m.clientY - y0) < 8) return; start(); }
    m.preventDefault(); ghost.style.transform = `translate(${m.clientX - 24}px, ${m.clientY - 22}px) rotate(-2deg)`;
    // el buit més proper dins del programa que hi ha sota el dit
    let best = null, bd = 1e9;
    stage.querySelectorAll('.tcode .tslot').forEach(s => { if (src.blk && src.blk.contains(s)) return; const q = s.getBoundingClientRect(); if (!q.width) return;
      const vis = s.closest('#tprog,#rprog,#sprog') || s.closest('.tcode'), vr = vis.getBoundingClientRect(); if (q.bottom < vr.top - 2 || q.top > vr.bottom + 2) return;   // només els buits que es veuen
      const box = s.closest('.tprog,.sprogw,.tcode').getBoundingClientRect(); if (m.clientX < box.left - 30 || m.clientX > box.right + 30 || m.clientY < box.top - 40 || m.clientY > box.bottom + 40) return;
      const d = Math.abs(m.clientY - (q.top + q.height / 2)) + (m.clientX < q.left ? q.left - m.clientX : m.clientX > q.right ? m.clientX - q.right : 0) * .3; if (d < bd) { bd = d; best = s; } });
    trash = !!(src.blk && pal && (() => { const q = pal.getBoundingClientRect(); return m.clientY > q.top + 4 && m.clientY < q.bottom + 10 && m.clientX > q.left - 10 && m.clientX < q.right + 10; })());
    if (trash) best = null;
    if (best !== drop) { drop && drop.classList.remove('drop'); drop = best; drop && drop.classList.add('drop'); }
    pal && pal.classList.toggle('trash', trash);
    // a prop de les vores del programa, es desplaça sol
    const sc = drop && drop.closest('.tprog'); cancelAnimationFrame(raf);
    if (sc) { const q = sc.getBoundingClientRect(), d = m.clientY < q.top + 34 ? -8 : m.clientY > q.bottom - 34 ? 8 : 0; if (d) { const step = () => { sc.scrollTop += d; raf = requestAnimationFrame(step); }; raf = requestAnimationFrame(step); } }
  };
  const end = () => {
    removeEventListener('pointermove', move); removeEventListener('pointerup', end); removeEventListener('pointercancel', end); cancelAnimationFrame(raf);
    if (!ghost) return;
    TDND.at = Date.now(); ghost.remove(); stage.classList.remove('dnd', 'dnd-new', 'dnd-move'); pal && pal.classList.remove('trash'); src.blk && src.blk.classList.remove('tdlift');
    const E = TED[src.ed], S = E && E.S(); if (!S) return;
    if (src.k) { const t = drop && tdSlot(drop); if (t && t.ed === src.ed) { E.cur(t.li, t.i); E.ins(src.k); } return; }
    const ix = S.ids[src.id]; if (!ix) return;
    if (trash) { S.sel = ix.b; E.del(); SFX.ko && SFX.ko(); return; }
    const t = drop && tdSlot(drop); if (!t || t.ed !== src.ed) return;
    const tl = S.lists[t.li]; if (!tl || tdInside(ix.b, tl)) return;
    if (S.run) (src.ed === 'tb' ? tbStop : src.ed === 'rb' ? rbStop : sgStop)();
    let i = t.i; const j = ix.list.indexOf(ix.b); if (ix.list === tl && j < i) i--; if (ix.list === tl && j === i) return;
    ix.list.splice(j, 1); tl.splice(i, 0, ix.b); S.sel = null; S.cur = { l: tl, i: i + 1 }; SFX.tap && SFX.tap(); E.fresh();
    const e = document.getElementById(src.ed + src.id); if (e) { e.classList.add('tdin'); setTimeout(() => e.classList.remove('tdin'), 450); }
  };
  addEventListener('pointermove', move, { passive: false }); addEventListener('pointerup', end); addEventListener('pointercancel', end);
}, true);
// el clic que el navegador envia en deixar anar un arrossegament no ha d'afegir ni seleccionar res
document.addEventListener('click', e => { if (Date.now() - TDND.at < 350 && e.target.closest('.tstage')) { e.stopPropagation(); e.preventDefault(); } }, true);

/* ---------- Desfer (als tres editors): cada canvi del programa es pot desfer amb un toc ---------- */
const TUNDO = {
  tb: { S: () => typeof TB !== 'undefined' && TB, get: S => ({ p: S.prog, f: S.fns, e: S.evs }),
    set: (S, v) => { S.prog.splice(0, S.prog.length, ...v.p); for (const k of Object.keys(S.fns || {})) S.fns[k].splice(0, S.fns[k].length, ...((v.f || {})[k] || [])); for (const k of Object.keys(S.evs || {})) S.evs[k].splice(0, S.evs[k].length, ...((v.e || {})[k] || [])); S.cur = { l: S.prog, i: S.prog.length }; },
    fresh: () => { tbFresh(); tbDraw(); }, draw: 'tbDraw' },
  rb: { S: () => typeof RB !== 'undefined' && RB, get: S => S.prog,
    set: (S, v) => { for (const s of Object.keys(S.prog)) S.prog[s].splice(0, S.prog[s].length, ...(v[s] || [])); const l = S.prog[S.scripts[0]]; S.cur = { l, i: l.length }; },
    fresh: () => { rbFresh(); rbDraw(); }, draw: 'rbDraw' },
  sg: { S: () => typeof SG !== 'undefined' && SG, get: S => S.progs,
    set: (S, v) => { for (const id of Object.keys(S.progs)) for (const h of Object.keys(S.progs[id])) S.progs[id][h] = (v[id] || {})[h] || [[]]; const P = S.progs[S.who] || {}, h = Object.keys(P)[0], l = h ? P[h][0] : []; S.cur = { l, i: l.length }; },
    fresh: () => { sgFresh(); sgDraw(); }, draw: 'sgDraw' }
};
const tuSer = v => JSON.stringify(v, (k, x) => k === '_id' ? undefined : x);
function tUndo(ed) {
  const U = TUNDO[ed], S = U && U.S(); if (!S || !S._uh || !S._uh.length) return;
  const run = ed === 'tb' ? S.run && tbStop : ed === 'rb' ? S.run && rbStop : S.run && sgStop; run && run();
  const prev = S._uh.pop(); S._undoing = true; U.set(S, JSON.parse(prev)); S.sel = null; S._last = prev; SFX.tap && SFX.tap(); U.fresh(); S._undoing = false;
}
function tUndoBtn(ed, S) {
  const h = document.querySelector('.tsbody>.tstage .tphead .tphr'); if (!h || S.mode !== 'edit') return;
  let b = h.querySelector('.tundo');
  if (!b) { h.insertAdjacentHTML('afterbegin', `<button class="tclr tundo" onclick="tUndo('${ed}')" aria-label="${L('Desfés', 'Deshacer')}" title="${L('Desfés', 'Deshacer')}"><svg viewBox="0 0 24 24"><path d="M9 7H4V2M4 7a9 9 0 1 1-1 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`); b = h.querySelector('.tundo'); }
  b.disabled = !(S._uh && S._uh.length);
  // pressupost de blocs: un punt per bloc (ple = fet servir), com els forats de Lightbot
  const c = h.querySelector('.tcount'), m = c && c.textContent.match(/^\s*(\d+)\s*\/\s*(\d+)/);
  if (m && +m[2] <= 12) { const u = +m[1], n = +m[2]; c.classList.add('dots'); c.innerHTML = `<span class="tdots">${Array.from({ length: n }, (_, i) => `<i class="${i < u ? 'on' : ''}"></i>`).join('')}</span><b>${u}/${n}</b>`; c.title = L(`${u} de ${n} blocs`, `${u} de ${n} bloques`); }
}
addEventListener('load', () => {
  for (const [ed, U] of Object.entries(TUNDO)) {
    const f = window[U.draw]; if (typeof f !== 'function') continue;
    window[U.draw] = function () {
      const S = U.S(); let r;
      if (S && S.mode === 'edit') { const now = tuSer(U.get(S)); if (S._last !== undefined && now !== S._last && !S._undoing) { (S._uh = S._uh || []).push(S._last); if (S._uh.length > 60) S._uh.shift(); } S._last = now; }
      r = f.apply(this, arguments); if (S) tUndoBtn(ed, S); return r;
    };
  }
});
