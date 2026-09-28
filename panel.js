/* ===== Panell del docent · Numi Mates =====
   Una sola pàgina amb rutes al hash (#/resum, #/alumnes/<codi>, #/grups, #/informes/<pestanya>…).
   El docent veu els seus grups; el coordinador, tot el centre; l'administrador, tot i la gestió. */
const $ = (s, el = document) => el.querySelector(s), $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
// valor dins d'un onclick="…": literal JS (JSON) i després escapat per a l'atribut
const js = v => esc(JSON.stringify(v));
const store = { get: (k, d) => { try { return localStorage.getItem(k) ?? d; } catch (e) { return d; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { } } };
let LANG = store.get('numi-profe-lang', 'ca');
const L = (ca, es) => LANG === 'es' ? es : ca;
const tx = s => { const p = String(s || '').split('|'); return LANG === 'es' ? (p[1] || p[0]) : p[0]; };
const ico = (n, c = '') => `<svg class="i ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const root = $('#root');

/* ---------- sessió ---------- */
// la sessió és sempre un testimoni signat (també la de l'administrador): la contrasenya no es guarda enlloc
const dtok = () => sessionStorage.getItem('dt'), wasAdmin = () => sessionStorage.getItem('adm') === '1';
const AUTH = () => dtok() ? { 'x-docent': dtok() } : null;
let D = null, ROWS = [], ADMIN = false, ME = null, GRUPS = [], G = store.get('numi-profe-g', '');
async function load() {
  const h = AUTH(); if (!h) return login();
  const r = await fetch('/api/profe', { headers: h }).catch(() => null);
  if (!r) return banner(L("No s'ha pogut carregar. Comprova la connexió.", 'No se ha podido cargar. Comprueba la conexión.'));
  if (r.status === 401 || r.status === 403) { const adm = wasAdmin(); sessionStorage.clear(); return login(L('La sessió ha caducat. Torna a entrar.', 'La sesión ha caducado. Vuelve a entrar.'), adm); }
  if (r.status !== 200) return banner(L("El servidor no respon ara mateix. Torna-ho a provar d'aquí a un moment.", 'El servidor no responde ahora mismo. Vuelve a intentarlo en un momento.'));
  D = await r.json(); ADMIN = !!D.admin; ME = D.me || null; GRUPS = D.grups || [];
  if (G && !GRUPS.some(g => String(g.id) === G)) G = '';
  ROWS = (D.rows || []).map(enrich);
  route.last = null; route();
}
async function act(action, extra = {}) {
  const r = await fetch('/api/profe', { method: 'POST', headers: { ...AUTH(), 'content-type': 'application/json' }, body: JSON.stringify({ action, ...extra }) });
  return r.json().catch(() => ({ error: 'xarxa' }));
}

/* ---------- dades de cada alumne ---------- */
const DAY = 864e5, iso = d => { const x = new Date(d); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`; };
const TODAY = iso(Date.now()), dayN = n => iso(Date.now() - n * DAY);
const daysAgo = d => d ? Math.round((new Date(TODAY + 'T12:00') - new Date(String(d).slice(0, 10) + 'T12:00')) / DAY) : null;
const ago = d => { const n = daysAgo(d); return n == null ? L('mai', 'nunca') : n <= 0 ? L('avui', 'hoy') : n === 1 ? L('ahir', 'ayer') : L(`fa ${n} dies`, `hace ${n} días`); };
const MES = { ca: ['gen.', 'febr.', 'març', 'abr.', 'maig', 'juny', 'jul.', 'ag.', 'set.', 'oct.', 'nov.', 'des.'], es: ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.', 'dic.'] };
const fdate = d => { if (!d) return '—'; const x = new Date(String(d).slice(0, 10) + 'T12:00'); return `${x.getDate()} ${MES[LANG][x.getMonth()]}`; };
const CURS = ['1r primària|1.º primaria', '2n primària|2.º primaria', '3r primària|3.º primaria', '4t primària|4.º primaria', '5è primària|5.º primaria', '6è primària|6.º primaria', '1r ESO|1.º ESO', '2n ESO|2.º ESO', '3r ESO|3.º ESO', '4t ESO|4.º ESO'];
const curs = i => i == null ? '—' : tx(CURS[i] || '');
const SENT = { num: ['Numèric|Numérico', 'Sentit numèric|Sentido numérico'], mes: ['Mesura|Medida', 'Sentit de la mesura|Sentido de la medida'], esp: ['Espacial|Espacial', 'Sentit espacial|Sentido espacial'], alg: ['Algebraic|Algebraico', 'Sentit algebraic i pensament computacional|Sentido algebraico y pensamiento computacional'], est: ['Estocàstic|Estocástico', 'Sentit estocàstic|Sentido estocástico'] };
// mateix mapa habilitat → sentit que l'app (ex3.js, skillSent): si canvia allà, cal canviar-lo aquí
function skillSent(sk) {
  const n = sk.split(':')[0];
  if (/^v\.(balance|pattern|maze)$/.test(n)) return 'alg';
  if (n === 'v.frac') return 'num';
  if (/^v\./.test(n)) return 'esp';
  if (/^(me\.clock|me\.units|me\.money|me\.perim|g\.clock|g\.coins|g\.ruler|geo\.area)$/.test(n)) return 'mes';
  if (/^(me\.shape|g\.shape|geo\.angle|vol|e\.|geo\.pyth|geo\.thales|trig)/.test(n)) return 'esp';
  if (/^(geo\.circle|geo\.vol2)$/.test(n)) return 'mes';
  if (/^(l\.|g\.seq|pc\.|g\.repeat|alg\.|fn\.|seq\.)/.test(n)) return 'alg';
  if (/^(stat|at\.|prob2)/.test(n)) return 'est';
  return 'num';
}
const band = (pct, n) => n == null || n < 20 || pct == null ? 'none' : pct >= 80 ? 'good' : pct >= 60 ? 'warn' : 'crit';
const BAND = { good: 'Domina|Domina', warn: 'En procés|En proceso', crit: 'Cal reforçar|Hay que reforzar', none: 'Poques dades|Pocos datos' };
const CURS_S = ['1r|1.º', '2n|2.º', '3r|3.º', '4t|4.º', '5è|5.º', '6è|6.º', '1r ESO|1.º ESO', '2n ESO|2.º ESO', '3r ESO|3.º ESO', '4t ESO|4.º ESO'];
// uid = "c4-3" → curs 4 (4t), unitat 3; amb withCourse davant hi posa el curs (per quan hi ha més d'un nivell)
const unitName = (uid, withCourse) => { const t = (typeof UNIT_T !== 'undefined' ? UNIT_T : {})[uid], [c, n] = uid.replace(/^c/, '').split('-'); const pre = withCourse && CURS_S[c - 1] ? tx(CURS_S[c - 1]) + ' · ' : ''; return t ? `${pre}U${n} · ${tx(t)}` : uid; };
const mixed = R => new Set(R.flatMap(r => r.exams.map(x => x.uid.split('-')[0]))).size > 1;
const to12 = p => Math.round((p || 0) * 12 / 100);
// Tot el que ve de l'estat de l'alumne (JSON escrit per l'app) es normalitza aquí: números com a números,
// dates com a dates i unitats amb el format c4-3. Així cap valor estrany pot acabar pintat com a HTML.
const nn = v => (v === '' || v == null || !Number.isFinite(+v)) ? null : +v, n0 = v => nn(v) ?? 0;
const isO = v => v && typeof v === 'object' && !Array.isArray(v), arr = v => Array.isArray(v) ? v : [];
const dstr = v => (typeof v === 'string' && /^\d{4}-\d{2}-\d{2}/.test(v)) ? v.slice(0, 10) : null;
function norm(r) {
  const o = { ...r };
  ['course', 'xp', 'streak', 'best', 'lessons', 'answers', 'correct', 'grup_id'].forEach(k => o[k] = nn(r[k]));
  ['xp', 'streak', 'best', 'lessons', 'answers', 'correct'].forEach(k => o[k] ??= 0);
  o.code = String(r.code || '').replace(/[^A-Z0-9-]/g, '');
  o.days = arr(r.days).map(dstr).filter(Boolean);
  o.sk = isO(r.sk) ? Object.fromEntries(Object.entries(r.sk).filter(([, v]) => Array.isArray(v)).map(([k, v]) => [k, [n0(v[0]), n0(v[1])]])) : {};
  o.tests = arr(r.tests).filter(t => isO(t) && nn(t.pct) != null).map(t => ({ date: dstr(t.date) || '', pct: Math.round(+t.pct), ok: n0(t.ok), n: n0(t.n), course: nn(t.course), kind: t.kind === 'evo' ? 'evo' : 'inicial' }));
  o.exams = isO(r.exams) ? Object.fromEntries(Object.entries(r.exams).filter(([k, x]) => /^c\d{1,2}-\d{1,2}$/.test(k) && isO(x)).map(([k, x]) => [k, { best: n0(x.best), last: n0(x.last), tries: n0(x.tries), d: dstr(x.d) || '' }])) : {};
  o.school = isO(r.school) && nn(r.school.ui) != null ? { ui: +r.school.ui, course: nn(r.school.course) } : null;
  o.week = isO(r.week) ? { xp: n0(r.week.xp) } : null;
  o.album = isO(r.album) ? r.album : {};
  o.crowns = arr(r.crowns);
  o.bwins = n0(r.bwins);
  o.reco = isO(r.reco) ? { items: arr(r.reco.items) } : null;
  o.survey = isO(r.survey) ? { result: typeof r.survey.result === 'string' ? r.survey.result.slice(0, 60) : null, feel: typeof r.survey.feel === 'string' ? r.survey.feel : null } : {};
  o.unlock_all = r.unlock_all === true;
  return o;
}
function enrich(r) {
  r = norm(r);
  const days = new Set(r.days);
  const d14 = Array.from({ length: 14 }, (_, i) => days.has(dayN(13 - i)));
  const act = n => { let c = 0; for (let i = 0; i < n; i++) if (days.has(dayN(i))) c++; return c; };
  const sent = {}; Object.keys(SENT).forEach(k => sent[k] = { c: 0, t: 0 });
  Object.entries(r.sk || {}).forEach(([k, v]) => { if (['sprint', 'flash', 'chain'].includes(k) || !Array.isArray(v)) return; const s = sent[skillSent(k)]; s.c += v[0] || 0; s.t += v[1] || 0; });
  Object.values(sent).forEach(s => s.pct = s.t ? Math.round(100 * s.c / s.t) : null);
  const tests = (r.tests || []).slice().sort((a, b) => String(a.date).localeCompare(String(b.date)));
  // l'evolució només es compara amb la prova anterior del mateix nivell
  const lt = tests[tests.length - 1], pt = lt ? tests.slice(0, -1).reverse().find(t => t.course === lt.course) : null, evoD = lt && pt ? lt.pct - pt.pct : null;
  const exams = Object.entries(r.exams || {}).map(([uid, x]) => ({ uid, ...x })).sort((a, b) => String(b.d || '').localeCompare(String(a.d || '')));
  const acc = r.answers ? Math.round(100 * r.correct / r.answers) : null;
  const reasons = [], add = (sev, txt) => reasons.push({ sev, txt });
  const idle = daysAgo(r.last_day);
  if (!r.lessons && !r.days.length && daysAgo(r.created_at) > 3) add('crit', L("No ha entrat mai", 'No ha entrado nunca'));
  else if (idle != null && idle > 14) add('crit', L(`Sense activitat fa ${idle} dies`, `Sin actividad hace ${idle} días`));
  // porta encallada: 2 intents o més sense aprovar, i l'últim fa menys de 30 dies
  const stuck = exams.find(x => (x.tries || 0) >= 2 && (x.best || 0) < 75 && x.d && daysAgo(x.d) <= 30);
  if (stuck) add('crit', L(`No supera la porta (U${stuck.uid.split('-')[1]}, ${stuck.tries} intents)`, `No supera la puerta (U${stuck.uid.split('-')[1]}, ${stuck.tries} intentos)`));
  if (idle != null && idle >= 8 && idle <= 14) add('warn', L(`Sense activitat fa ${idle} dies`, `Sin actividad hace ${idle} días`));
  if (r.answers >= 40 && acc < 60) add('warn', L(`Precisió baixa (${acc} %)`, `Precisión baja (${acc} %)`));
  if (evoD != null && evoD <= -10) add('warn', L(`Baixa a la prova d'evolució (${evoD})`, `Baja en la prueba de evolución (${evoD})`));
  const weak = Object.entries(sent).filter(([, s]) => s.t >= 20 && s.pct < 60).sort((a, b) => a[1].pct - b[1].pct)[0];
  if (weak) add('warn', L('Cal reforçar: ', 'Hay que reforzar: ') + tx(SENT[weak[0]][0]));
  const sev = reasons.some(x => x.sev === 'crit') ? 2 : reasons.length ? 1 : 0;
  return { ...r, d14, act7: act(7), actPrev7: act(14) - act(7), act14: act(14), act30: act(30), sent, tests, lt, evoD, exams, acc, reasons, sev, idle };
}
const scope = () => G ? ROWS.filter(r => String(r.grup_id) === G) : ROWS;
const gName = id => (GRUPS.find(g => g.id === id) || {}).nom || '';
const INIT_BG = ['#EDE3F4', '#E3EEF7', '#E6F2EA', '#F7EEDC', '#F6E4E8', '#E9E6EE'];
const avatar = (r, cls = '') => { const p = String(r.name || '?').trim().split(/\s+/); const ini = (p[0][0] + (p[1] ? p[1][0] : '')).toUpperCase(); let h = 0; for (const c of String(r.code)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return `<span class="av ${cls}" style="background:${INIT_BG[h % 6]}">${esc(ini)}</span>`; };

/* ---------- entrada ---------- */
function login(err = '', admin = location.hash === '#admin') {
  document.title = 'Numi Mates · ' + L('Panell docent', 'Panel docente');
  root.innerHTML = `<div class="login-wrap"><div><form class="login-card" id="lf" novalidate>
      <img src="img/brand/logo-horitzontal.svg" alt="Numi Mates">
      <div><h1>${admin ? L('Administració', 'Administración') : L('Accedeix al panell docent', 'Accede al panel docente')}</h1><p class="t2">Numi Mates ${L('per a escoles', 'para escuelas')}</p></div>
      ${admin ? '' : `<label class="field"><span>${L('Correu electrònic o usuari', 'Correo electrónico o usuario')}</span><input id="lu" autocomplete="username" autocapitalize="off"></label>`}
      <label class="field"><span>${L('Contrasenya', 'Contraseña')}</span><div class="pw"><input id="lp" type="password" autocomplete="current-password"><button type="button" class="ib sm" aria-label="${L('Mostra la contrasenya', 'Mostrar la contraseña')}" onclick="const i=$('#lp');i.type=i.type==='password'?'text':'password'">${ico('eye')}</button></div></label>
      <div class="err-msg" id="le">${esc(err)}</div>
      <button class="btn primary lg full" id="lb">${L('Entra', 'Entra')}</button>
      <div class="login-foot"><span>${admin ? '' : L('Has oblidat la contrasenya? Demana-la a la coordinació del centre.', '¿Has olvidado la contraseña? Pídela a la coordinación del centro.')}</span>
        <span class="seg"><button type="button" class="${LANG === 'ca' ? 'on' : ''}" onclick="setLang('ca',true)">CA</button><button type="button" class="${LANG === 'es' ? 'on' : ''}" onclick="setLang('es',true)">ES</button></span></div>
    </form></div>
    <div class="login-side"><img src="img/brand/logo-blanc.svg" alt="" style="height:26px;width:auto;align-self:flex-start"><h2>${L('Veu qui avança i qui necessita un cop de mà.', 'Ve quién avanza y quién necesita una ayuda.')}</h2><p>${L('El progrés de cada alumne, els sentits del currículum i els resultats de la porta del Cavaller, a punt per a les tutories.', 'El progreso de cada alumno, los sentidos del currículo y los resultados de la puerta del Caballero, listos para las tutorías.')}</p>
      <div class="mini" aria-hidden="true"><b>${L('Sentits del currículum · exemple', 'Sentidos del currículo · ejemplo')}</b>${[['num', 84], ['mes', 71], ['esp', 78], ['alg', 66], ['est', 88]].map(([k, v]) => `<div><span>${tx(SENT[k][0])}</span><i><s style="width:${v}%"></s></i><span>${v} %</span></div>`).join('')}</div></div></div>`;
  ($('#lu') || $('#lp')).focus();
  $('#lf').onsubmit = async e => {
    e.preventDefault(); const b = $('#lb'); b.disabled = true; b.textContent = '…'; sessionStorage.clear();
    const data = admin ? { action: 'admin', password: $('#lp').value } : { action: 'login', email: $('#lu').value, password: $('#lp').value };
    const x = await fetch('/api/docent', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) }).catch(() => null);
    const r = x ? await x.json().catch(() => ({})) : {};
    if (!r.token) {
      b.disabled = false; b.textContent = L('Entra', 'Entra');
      $('#le').textContent = !x ? L("No hi ha connexió. Torna-ho a provar.", 'No hay conexión. Vuelve a intentarlo.')
        : x.status === 429 ? L('Massa intents seguits. Espera uns minuts i torna-ho a provar.', 'Demasiados intentos seguidos. Espera unos minutos y vuelve a intentarlo.')
        : admin ? L('Contrasenya incorrecta.', 'Contraseña incorrecta.') : L('Correu, usuari o contrasenya incorrectes.', 'Correo, usuario o contraseña incorrectos.');
      return;
    }
    sessionStorage.setItem('dt', r.token); if (admin) { sessionStorage.setItem('adm', '1'); if (location.hash === '#admin') history.replaceState(null, '', '#/resum'); }
    load();
  };
}
function logout() { sessionStorage.clear(); D = null; ROWS = []; GRUPS = []; ME = null; ADMIN = false; closeDrawer(true); $$('.modal-s,.proj').forEach(x => x.remove()); clearInterval(PROJ_T); history.replaceState(null, '', location.pathname); login(); }
function setLang(l, onLogin) { LANG = l; store.set('numi-profe-lang', l); document.documentElement.lang = l; if (onLogin && !D) return login(); ROWS = (D?.rows || []).map(enrich); route.last = null; route(); }

/* ---------- carcassa ---------- */
const NAV = () => [['resum', 'layout-dashboard', L('Resum', 'Resumen')], ['alumnes', 'users', L('Alumnes', 'Alumnos'), scope().length], ['grups', 'school', L('Grups', 'Grupos')], ['informes', 'chart-column', L('Informes', 'Informes')]];
const ADMIN_NAV = () => { const seen = +store.get('numi-profe-sol', 0), nou = (D.contacts || []).filter(c => new Date(c.created_at).getTime() > seen).length; return [['centres', 'building-2', L('Centres', 'Centros')], ['docents', 'graduation-cap', L('Docents', 'Docentes')], ['totsgrups', 'layout-grid', L('Tots els grups', 'Todos los grupos')], ['sollicituds', 'inbox', L('Sol·licituds', 'Solicitudes'), nou, true], ['activitat', 'activity', L('Activitat', 'Actividad')]]; };
function shell(view, title, body, { acts = '', fluid = false, switcher = true } = {}) {
  const na = ([k, ic, t, n, isNew]) => `<a href="#/${k}" class="${view === k ? 'on' : ''}" title="${esc(t)}">${ico(ic, 'i20')}<span>${esc(t)}</span>${n ? `<i class="badge ${isNew ? 'new' : ''}">${n}</i>` : ''}</a>`;
  const who = ADMIN ? { nom: ME?.nom || L('Administració', 'Administración'), rol: 'Numi Mates' } : { nom: ME.nom, rol: ME.rol === 'admin_centre' ? L('Coordinació de centre', 'Coordinación de centro') : L('Docent', 'Docente') };
  root.innerHTML = `<div class="app" id="app"><aside class="side">
      <div class="brand"><img src="img/brand/logo-horitzontal.svg" alt="Numi Mates"><span>${esc(ADMIN ? L('Tots els centres', 'Todos los centros') : ME.centre || '')}</span></div>
      <nav class="nav">${NAV().map(na).join('')}<hr>${na(['guia', 'circle-help', L("Com funciona l'app", 'Cómo funciona la app')])}
        ${ADMIN ? `<div class="lbl">${L('Administració', 'Administración')}</div>${ADMIN_NAV().map(na).join('')}` : ''}</nav>
      <div class="me"><div class="who"><b>${esc(who.nom)}</b><small>${esc(who.rol)}</small></div>
        <div class="row"><span class="seg"><button class="${LANG === 'ca' ? 'on' : ''}" onclick="setLang('ca')">CA</button><button class="${LANG === 'es' ? 'on' : ''}" onclick="setLang('es')">ES</button></span>
        ${ADMIN && !ME ? '' : `<a class="ib" href="#/compte" title="${L('Compte', 'Cuenta')}">${ico('user-cog')}</a>`}<button class="ib" title="${L('Tanca la sessió', 'Cerrar sesión')}" onclick="logout()">${ico('log-out')}</button></div></div>
    </aside><main class="main"><header class="top"><button class="ib menu-btn" onclick="$('#app').classList.toggle('open')" aria-label="Menu">${ico('menu')}</button>
      ${switcher ? switcherHTML() + '<span class="sep"></span>' : ''}<h1>${esc(title)}</h1><div class="acts">${acts}</div></header>
      <div class="content ${fluid ? 'fluid' : ''}">${body}</div></main>
    <div class="side-scrim" onclick="$('#app').classList.remove('open')"></div>
    <nav class="tabbar" aria-label="${L('Navegació', 'Navegación')}">${NAV().map(([k, ic, t]) => `<a href="#/${k}" class="${view === k ? 'on' : ''}">${ico(ic, 'i20')}<span>${esc(t)}</span></a>`).join('')}<button class="${!NAV().some(n => n[0] === view) ? 'on' : ''}" onclick="$('#app').classList.add('open')">${ico('menu', 'i20')}<span>${L('Més', 'Más')}</span></button></nav></div>`;
  document.title = `${title} · Numi Mates`;
}
function switcherHTML() {
  const cur = G ? gName(+G) : (ADMIN ? L('Tots els grups', 'Todos los grupos') : ME?.rol === 'admin_centre' ? L('Tots els grups del centre', 'Todos los grupos del centro') : L('Tots els meus grups', 'Todos mis grupos'));
  return `<div class="gsw"><button onclick="toggleSw(event)"><span>${L('Grup:', 'Grupo:')}</span>${esc(cur)}${ico('chevron-down')}</button></div>`;
}
function toggleSw(e) {
  e.stopPropagation(); const w = e.currentTarget.parentElement; if ($('.pop', w)) return closePops();
  closePops(); const n = id => ROWS.filter(r => r.grup_id === id).length;
  const by = {}; GRUPS.forEach(g => { const k = ADMIN ? g.centre : (ME.rol === 'admin_centre' ? (g.docent || '—') : ''); (by[k] ||= []).push(g); });
  w.insertAdjacentHTML('beforeend', `<div class="pop"><button class="${G ? '' : 'on'}" onclick="setG('')">${ADMIN ? L('Tots els grups', 'Todos los grupos') : L('Tots els meus grups', 'Todos mis grupos')}<span class="n">${ROWS.length}</span></button>
    ${Object.entries(by).map(([k, gs]) => `${k ? `<div class="h">${esc(k)}</div>` : '<hr>'}${gs.map(g => `<button class="${String(g.id) === G ? 'on' : ''}" onclick="setG('${g.id}')">${esc(g.nom)}<span class="n">${n(g.id)}</span></button>`).join('')}`).join('')}</div>`);
}
function setG(id) { G = String(id); store.set('numi-profe-g', G); closePops(); route.last = null; route(); }
function closePops() { $$('.pop').forEach(p => p.remove()); }
document.addEventListener('click', e => { if (!e.target.closest('.pop')) closePops(); });

/* ---------- rutes ---------- */
function route() {
  if (!D) return;
  const h = location.hash.replace(/^#\/?/, '').split('?')[0], [v, arg] = h.split('/');
  if (v === 'alumnes' && route.last === 'alumnes' && $('#tbl')) { if (arg) openDrawer(decodeURIComponent(arg), true); else if ($('.drawer')) closeDrawer(true); return; }
  route.last = v;
  const V = { resum: vResum, alumnes: vAlumnes, grups: vGrups, informes: vInformes, guia: vGuia, compte: vCompte };
  if (ADMIN) Object.assign(V, { centres: vCentres, docents: vDocents, totsgrups: vTotsGrups, sollicituds: vSol, activitat: vActivitat });
  (V[v] || vResum)(arg);
  if (v === 'alumnes' && arg) openDrawer(decodeURIComponent(arg), true); else if ($('.drawer')) closeDrawer(true);
}
addEventListener('hashchange', () => { if (D) route(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if ($('.modal-s')) return $('.modal-s').remove(); if ($('.proj')) return $('.proj').remove(), clearInterval(PROJ_T); if ($('.drawer')) return closeDrawer(); }
  if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) && $('#q')) { e.preventDefault(); $('#q').focus(); }
});

/* ---------- Resum ---------- */
function vResum() {
  const R = scope(), n = R.length;
  const a7 = R.filter(r => r.act7).length, p7 = R.filter(r => r.actPrev7).length, dA = a7 - p7;
  const ans = R.reduce((s, r) => s + (r.answers || 0), 0), cor = R.reduce((s, r) => s + (r.correct || 0), 0);
  const ex = R.flatMap(r => r.exams), exOk = ex.filter(x => (x.best || 0) >= 75).length;
  const att = R.filter(r => r.sev).sort((a, b) => b.sev - a.sev || (b.idle || 0) - (a.idle || 0) || a.name.localeCompare(b.name));
  const kpi = (l, v, m, cls = '') => `<div class="kpi"><span class="kpi-l">${l}</span><span class="kpi-v ${cls}">${v}</span><span class="kpi-m">${m}</span></div>`;
  const byDay = Array.from({ length: 14 }, (_, i) => R.filter(r => r.d14[i]).length), mx = Math.max(1, n);
  const avg = Math.round(byDay.reduce((s, x) => s + x, 0) / 14);
  const sentRows = Object.keys(SENT).map(k => { const b = { good: 0, warn: 0, crit: 0, none: 0 }; let c = 0, t = 0; R.forEach(r => { const s = r.sent[k]; b[band(s.pct, s.t)]++; c += s.c; t += s.t; }); return { k, b, pct: t ? Math.round(100 * c / t) : null }; });
  const units = {}; R.forEach(r => r.exams.forEach(x => { const u = units[x.uid] ||= { ok: 0, ko: 0 }; (x.best >= 75 ? u.ok++ : u.ko++); }));
  const mx2 = mixed(R), topU = Object.entries(units).sort((a, b) => (b[1].ok + b[1].ko) - (a[1].ok + a[1].ko)).slice(0, 3);
  const w = v => `${n ? v / n * 100 : 0}%`;
  if (!n) return shell('resum', L('Resum', 'Resumen'), emptyState('users', L('Encara no hi ha alumnes', 'Aún no hay alumnos'), L('Crea un grup i comparteix el codi amb la classe.', 'Crea un grupo y comparte el código con la clase.'), `<a class="btn" href="#/grups">${L('Ves als grups', 'Ir a los grupos')}</a>`));
  shell('resum', L('Resum', 'Resumen'), `
    <div class="card kpis">
      ${kpi(L('Actius aquesta setmana', 'Activos esta semana'), `${a7} <span class="t3" style="font-size:18px;font-weight:600">/ ${n}</span>`, p7 || a7 ? `${ico(dA >= 0 ? 'trending-up' : 'trending-down', dA >= 0 ? 'up' : 'down')}${dA >= 0 ? '+' : ''}${dA} ${L('respecte la setmana passada', 'respecto a la semana pasada')}` : L('Encara sense activitat', 'Aún sin actividad'))}
      ${kpi(L('Precisió mitjana', 'Precisión media'), ans ? Math.round(100 * cor / ans) + ' %' : '—', `${L("des de l'inici", 'desde el inicio')} · ${ans.toLocaleString(LANG)} ${L('respostes', 'respuestas')}`)}
      ${kpi(L('Porta del Cavaller', 'Puerta del Caballero'), ex.length ? Math.round(100 * exOk / ex.length) + ' %' : '—', ex.length ? `${exOk} ${L('de', 'de')} ${ex.length} ${L('portes superades', 'puertas superadas')}` : L('Encara ningú no hi ha arribat', 'Aún nadie ha llegado'))}
      ${kpi(L('Necessiten atenció', 'Necesitan atención'), att.length, att.length ? `<a href="#/alumnes?f=att">${L('Veure la llista', 'Ver la lista')}</a>` : L('Tot en ordre', 'Todo en orden'), att.length ? 'crit' : '')}
    </div>
    <div class="grid12">
      <section class="c8" id="att"><div class="sec-h"><h2>${L('Necessiten atenció', 'Necesitan atención')}</h2></div><div class="card">
        ${att.length ? `<ul class="alist">${att.slice(0, 8).map(r => `<li onclick="location.hash='#/alumnes/${encodeURIComponent(r.code)}'">${avatar(r)}<div class="who"><b>${esc(r.name)}${!G && r.grup_id ? ` <span class="t3" style="font-weight:400">· ${esc(gName(r.grup_id))}</span>` : ''}</b><div class="why">${r.reasons.slice(0, 2).map(x => `<span><i class="dot ${x.sev}"></i>${esc(x.txt)}</span>`).join('')}</div></div><span class="when">${ago(r.last_day)}</span>${ico('chevron-right', 't3')}</li>`).join('')}</ul>
          ${att.length > 8 ? `<div class="card-foot"><a href="#/alumnes?f=att">${L(`Mostra'ls tots (${att.length})`, `Mostrarlos todos (${att.length})`)}</a></div>` : ''}`
          : emptyState('check', L('Tot en ordre', 'Todo en orden'), L('Cap alumne no necessita atenció ara mateix.', 'Ningún alumno necesita atención ahora mismo.'))}</div></section>
      <section class="c4"><div class="sec-h"><h2>${L('Activitat', 'Actividad')}</h2><small>${L('14 dies', '14 días')}</small></div><div class="card pad">
        <div class="bars14">${byDay.map((v, i) => { const d = new Date(Date.now() - (13 - i) * DAY), we = d.getDay() === 0 || d.getDay() === 6; return `<i class="${i === 13 ? 'today' : we ? 'we' : ''}" style="height:${v / mx * 100}%" title="${fdate(iso(d))} · ${v} ${L('alumnes', 'alumnos')}"></i>`; }).join('')}</div>
        <div class="bars14-x"><span>${fdate(dayN(13))}</span>${'<span></span>'.repeat(5)}<span>${fdate(dayN(7))}</span>${'<span></span>'.repeat(6)}<span>${L('avui', 'hoy')}</span></div>
        <p class="t3" style="margin:12px 0 0;font-size:12.5px">${L('Mitjana', 'Media')}: ${avg} ${L('alumnes/dia', 'alumnos/día')}</p></div></section>
      <section class="c7"><div class="sec-h"><h2>${L('Sentits del currículum', 'Sentidos del currículo')}</h2><small>Decret 175/2022 · ${L("des de l'inici", 'desde el inicio')}</small></div><div class="card pad">
        <div class="legend">${['good', 'warn', 'crit', 'none'].map(b => `<span><i class="dot ${b}"></i>${tx(BAND[b])}</span>`).join('')}</div>
        ${sentRows.map(s => `<div class="srow" onclick="location.hash='#/informes/sentits'"><span>${tx(SENT[s.k][0])}</span><div class="sbar">${['good', 'warn', 'crit', 'none'].map(b => s.b[b] ? `<i class="${b}" style="width:${w(s.b[b])}" title="${tx(BAND[b])}: ${s.b[b]}"></i>` : '').join('')}</div><b class="num">${s.pct == null ? '—' : s.pct + ' %'}</b></div>`).join('')}</div></section>
      <section class="c5"><div class="sec-h"><h2>${L('Porta del Cavaller', 'Puerta del Caballero')}</h2><a class="r" href="#/informes/porta">${L('Totes les unitats', 'Todas las unidades')}</a></div><div class="card pad">
        ${topU.length ? topU.map(([uid, u]) => { const no = Math.max(0, n - u.ok - u.ko); return `<div style="display:grid;gap:6px;margin-bottom:14px"><div style="display:flex;justify-content:space-between;gap:8px"><span>${esc(unitName(uid, mx2))}</span><b class="num">${u.ok}/${n}</b></div><div class="sbar"><i class="good" style="width:${w(u.ok)}"></i><i class="crit" style="width:${w(u.ko)}"></i><i class="none" style="width:${w(no)}"></i></div></div>`; }).join('') + `<div class="legend" style="margin:0"><span><i class="dot good"></i>${L('Superada', 'Superada')}</span><span><i class="dot crit"></i>${L('No superada', 'No superada')}</span><span><i class="dot"></i>${L('Sense intentar', 'Sin intentar')}</span></div>`
          : `<p class="t3" style="margin:0">${L('Encara ningú no ha arribat a cap porta.', 'Aún nadie ha llegado a ninguna puerta.')}</p>`}</div></section>
    </div>`);
}
const emptyState = (ic, t, m, extra = '') => `<div class="empty">${ico(ic)}<b>${t}</b><span>${m}</span>${extra}</div>`;

/* ---------- Alumnes ---------- */
let AF = { f: 'all', q: '', lv: '', sort: ['sev', -1], compact: store.get('numi-profe-compact', '') === '1' };
function vAlumnes() {
  const qs = new URLSearchParams(location.hash.split('?')[1] || ''); if (qs.get('f')) { AF.f = qs.get('f'); history.replaceState(null, '', '#/alumnes'); }
  const R = scope(), counts = { all: R.length, att: R.filter(r => r.sev).length, idle: R.filter(r => r.idle == null || r.idle > 7).length, new: R.filter(r => !r.lessons).length };
  const lvls = [...new Set(R.map(r => r.course))].sort((a, b) => a - b);
  shell('alumnes', L('Alumnes', 'Alumnos'), `
    <div class="toolbar"><div class="search">${ico('search')}<input id="q" placeholder="${L('Cerca per nom, usuari o codi', 'Busca por nombre, usuario o código')}" value="${esc(AF.q)}" oninput="AF.q=this.value;clearTimeout(window._qt);window._qt=setTimeout(drawTable,120)"><span class="kbd">/</span></div>
      <span class="seg">${[['all', L('Tots', 'Todos')], ['att', L('Necessiten atenció', 'Necesitan atención')], ['idle', L('Sense activitat', 'Sin actividad')], ['new', L('Sense començar', 'Sin empezar')]].map(([k, t]) => `<button class="${AF.f === k ? 'on' : ''}" onclick="AF.f='${k}';vAlumnes()">${t}<b>${counts[k]}</b></button>`).join('')}</span>
      <select style="width:auto" onchange="AF.lv=this.value;drawTable()"><option value="">${L('Tots els nivells', 'Todos los niveles')}</option>${lvls.map(l => `<option value="${l}" ${String(l) === AF.lv ? 'selected' : ''}>${curs(l)}</option>`).join('')}</select>
      <select class="only-sm" style="width:auto" aria-label="${L('Ordena', 'Ordena')}" onchange="const [k,d]=this.value.split(',');AF.sort=[k,+d];drawTable()">${[['sev,-1', L('Primer, qui necessita atenció', 'Primero, quien necesita atención')], ['name,1', L('Per nom', 'Por nombre')], ['last,-1', L('Activitat més recent', 'Actividad más reciente')], ['last,1', L('Més dies sense entrar', 'Más días sin entrar')], ['acc,-1', L('Precisió més alta', 'Precisión más alta')], ['acc,1', L('Precisió més baixa', 'Precisión más baja')], ['les,-1', L('Més lliçons', 'Más lecciones')]].map(([v, t]) => `<option value="${v}" ${AF.sort.join(',') === v ? 'selected' : ''}>${t}</option>`).join('')}</select>
      <span class="count" id="cnt"></span>
      <span class="r"><button class="ib hide-sm ${AF.compact ? 'on' : ''}" title="${L('Compacte', 'Compacto')}" onclick="AF.compact=!AF.compact;store.set('numi-profe-compact',AF.compact?'1':'');drawTable()">${ico('rows-3')}</button><button class="btn" onclick="csvResum()">${ico('download')}${L('Exporta CSV', 'Exporta CSV')}</button></span></div>
    <div id="tbl"></div>`, { fluid: true });
  drawTable();
}
function filtered() {
  const q = AF.q.trim().toLowerCase();
  let R = scope().filter(r => (AF.f === 'all' || (AF.f === 'att' && r.sev) || (AF.f === 'idle' && (r.idle == null || r.idle > 7)) || (AF.f === 'new' && !r.lessons)) && (!AF.lv || String(r.course) === AF.lv) && (!q || (r.name + ' ' + (r.username || '') + ' ' + r.code).toLowerCase().includes(q)));
  const [k, d] = AF.sort, val = r => ({ sev: r.sev * 1e6 + Math.min(r.idle ?? 999, 999), name: r.name.toLowerCase(), course: r.course, last: -(r.idle ?? 1e4), act: r.act14, les: r.lessons, acc: r.acc ?? -1, evo: r.lt ? r.lt.pct : -1, gate: r.exams[0] ? r.exams[0].best : -1 })[k];
  return R.sort((a, b) => { const x = val(a), y = val(b); return (x > y ? 1 : x < y ? -1 : a.name.localeCompare(b.name)) * (k === 'name' ? -d : d); });
}
function drawTable() {
  const R = filtered(), q = AF.q.trim();
  $('#cnt').textContent = `${R.length} ${R.length === 1 ? L('alumne', 'alumno') : L('alumnes', 'alumnos')}`;
  const th = (k, t, cls = '') => `<th class="s ${cls} ${AF.sort[0] === k ? 'on' : ''}" onclick="AF.sort=['${k}',AF.sort[0]==='${k}'?-AF.sort[1]:-1];drawTable()" aria-sort="${AF.sort[0] === k ? ((k === 'name' ? -AF.sort[1] : AF.sort[1]) < 0 ? 'descending' : 'ascending') : 'none'}">${t} ${ico(AF.sort[0] === k && AF.sort[1] > 0 ? 'chevron-down' : 'chevron-down')}</th>`;
  const sevDot = r => `<i class="dot ${r.sev === 2 ? 'crit' : r.sev ? 'warn' : ''}" style="${r.sev ? '' : 'visibility:hidden'}"></i>`;
  $('#tbl').innerHTML = !scope().length ? `<div class="card">${emptyState('users', L('Encara no hi ha alumnes', 'Aún no hay alumnos'), L('Comparteix el codi del grup perquè els alumnes hi entrin.', 'Comparte el código del grupo para que los alumnos entren.'), `<a class="btn" href="#/grups">${L('Ves als grups', 'Ir a los grupos')}</a>`)}</div>`
    : `<div class="tw al ${AF.compact ? 'compact' : ''}"><table><thead><tr>${th('name', L('Alumne', 'Alumno'), 'stick')}${th('course', L('Nivell', 'Nivel'), 'hide-sm')}${th('last', L('Última activitat', 'Última actividad'), 'r')}${th('act', L('Dies actius (14 d)', 'Días activos (14 d)'), 'hide-md')}${th('les', L('Lliçons', 'Lecciones'), 'r hide-lg')}${th('acc', L('Precisió', 'Precisión'), 'r')}${th('evo', L('Evolució', 'Evolución'), 'r hide-sm')}${th('gate', L('Porta del Cavaller', 'Puerta del Caballero'), 'hide-sm')}<th></th></tr></thead><tbody>
    ${R.map(r => { const x = r.exams[0], b = band(r.acc, r.answers); return `<tr tabindex="0" data-c="${esc(r.code)}" onclick="if(!event.target.closest('.rowmenu'))location.hash='#/alumnes/${encodeURIComponent(r.code)}'" onkeydown="rowKey(event,this)">
      <td class="stick c-name"><div class="nm">${sevDot(r)}${avatar(r)}<div><b>${esc(r.name)}</b><small>${r.username ? '@' + esc(r.username) : L('entra amb codi', 'entra con código')}${!G && r.grup_id ? ' · ' + esc(gName(r.grup_id)) : ''}${q && r.code.toLowerCase().includes(q.toLowerCase()) ? ' · ' + esc(r.code) : ''}</small></div></div></td>
      <td class="hide-sm">${curs(r.course)}</td><td class="r c-last ${r.idle > 7 || r.idle == null ? 't3' : ''}" data-l="${L('Última activitat', 'Última actividad')}">${ago(r.last_day)}</td>
      <td class="hide-md c-act" data-l="${L('Dies actius (14 d)', 'Días activos (14 d)')}"><span class="d14">${r.d14.map(o => `<i class="${o ? 'on' : ''}"></i>`).join('')}</span><span class="num">${r.act14}</span></td>
      <td class="r num hide-lg">${r.lessons}</td>
      <td class="r num c-acc" data-l="${L('Precisió', 'Precisión')}" style="color:var(--${b === 'none' ? 'text-3' : b})">${r.answers >= 20 ? r.acc + ' %' : '—'}</td>
      <td class="r num hide-sm">${r.lt ? `${r.lt.pct} %${r.evoD != null ? ` <span class="${r.evoD >= 0 ? 'up' : 'down'}">${ico(r.evoD >= 0 ? 'trending-up' : 'trending-down')}${r.evoD >= 0 ? '+' : ''}${r.evoD}</span>` : ''}` : '<span class="t3">—</span>'}</td>
      <td class="hide-sm c-gate" data-l="${L('Porta', 'Puerta')}">${x ? `<span class="gate">U${x.uid.split('-')[1]} · ${to12(x.best)}/12 ${x.best >= 75 ? ico('check', 'ok') : ico('x', 'ko')}</span>` : '<span class="t3">—</span>'}</td>
      <td class="r c-menu"><button class="ib sm rowmenu" aria-label="${L('Accions', 'Acciones')}" onclick="rowMenu(event,${js(r.code)})">${ico('ellipsis')}</button></td></tr>`; }).join('') || `<tr><td colspan="9">${emptyState('search', L('Cap resultat', 'Ningún resultado'), L('Prova amb un altre filtre o una altra cerca.', 'Prueba con otro filtro u otra búsqueda.'))}</td></tr>`}
    </tbody></table></div>`;
  const cur = decodeURIComponent((location.hash.match(/^#\/alumnes\/([^?]+)/) || [])[1] || ''); if (cur) $$('tbody tr').forEach(t => t.classList.toggle('sel', t.dataset.c === cur));
}
function rowKey(e, tr) { if (e.key === 'Enter') location.hash = '#/alumnes/' + encodeURIComponent(tr.dataset.c); if (e.key === 'ArrowDown') tr.nextElementSibling?.focus(); if (e.key === 'ArrowUp') tr.previousElementSibling?.focus(); }
function rowMenu(e, code) {
  e.stopPropagation(); closePops(); const r = ROWS.find(x => x.code === code), c = js(code);
  e.currentTarget.parentElement.style.position = 'relative';
  e.currentTarget.insertAdjacentHTML('afterend', `<div class="pop right" style="top:40px">
    <a href="#/alumnes/${encodeURIComponent(code)}">${ico('users')}${L('Obre la fitxa', 'Abrir la ficha')}</a>
    <button onclick="printReport(${c})">${ico('printer')}${L("Imprimeix l'informe", 'Imprimir el informe')}</button>
    ${r.username ? `<button onclick="location.hash='#/alumnes/${encodeURIComponent(code)}';setTimeout(()=>pwForm(${c}),50)">${ico('key-round')}${L('Canvia la contrasenya', 'Cambiar la contraseña')}</button>` : ''}
    <button onclick="doUnlock(${c},${!r.unlock_all})">${ico(r.unlock_all ? 'lock' : 'lock-open')}${r.unlock_all ? L('Torna al camí normal', 'Volver al camino normal') : L('Obre totes les unitats', 'Abrir todas las unidades')}</button>
    ${r.grup_id ? `<button onclick="doTreure(${c})">${ico('user-minus')}${L('Treu del grup', 'Quitar del grupo')}</button>` : ''}
    ${ADMIN ? `<hr><button class="danger" onclick="doBaixa(${c})">${ico('trash-2')}${L('Dona de baixa', 'Dar de baja')}</button>` : ''}</div>`);
}

/* ---------- fitxa de l'alumne ---------- */
function openDrawer(code, keep) {
  const r = ROWS.find(x => x.code === code); if (!r) return;
  if (!$('.drawer')) closeDrawer.from = document.activeElement; closeDrawer(true);
  const list = $('#tbl') ? filtered() : scope(), i = list.findIndex(x => x.code === code), prev = list[i - 1], next = list[i + 1];
  document.body.insertAdjacentHTML('beforeend', `<div class="scrim" onclick="closeDrawer()"></div><aside class="drawer" role="dialog" aria-modal="true" tabindex="-1" aria-label="${esc(r.name)}">
    <div class="dr-h">${avatar(r, 'lg')}<div><h2>${esc(r.name)}</h2><small>${[r.grup_id ? gName(r.grup_id) : '', curs(r.course), r.lang === 'es' ? 'Castellano' : 'Català'].filter(Boolean).map(esc).join(' · ')}</small></div>
      <div class="acts"><button class="ib" ${prev ? `onclick="location.hash='#/alumnes/${encodeURIComponent(prev.code)}'"` : 'disabled'} aria-label="${L('Anterior', 'Anterior')}">${ico('chevron-left')}</button><button class="ib" ${next ? `onclick="location.hash='#/alumnes/${encodeURIComponent(next.code)}'"` : 'disabled'} aria-label="${L('Següent', 'Siguiente')}">${ico('chevron-right')}</button>
      <button class="btn sm" onclick="printReport(${js(r.code)})">${ico('printer')}${L('Imprimeix', 'Imprimir')}</button><button class="ib" onclick="closeDrawer()" aria-label="${L('Tanca', 'Cerrar')}">${ico('x')}</button></div></div>
    <div class="dr-b">${reportHTML(r, false)}</div></aside>`);
  $$('tbody tr').forEach(t => t.classList.toggle('sel', t.dataset.c === code));
  requestAnimationFrame(() => { const d = $('.drawer'); if (d && !d.contains(document.activeElement)) d.focus(); });
}
function closeDrawer(silent) { const had = $('.drawer'); $$('.drawer,.scrim').forEach(x => x.remove()); $$('tbody tr.sel').forEach(t => t.classList.remove('sel')); if (had && !silent && closeDrawer.from && document.contains(closeDrawer.from)) closeDrawer.from.focus(); if (!silent && /^#\/alumnes\/./.test(location.hash)) history.replaceState(null, '', '#/alumnes'); }
function reportHTML(r, print) {
  const s = r.sent, best = Object.entries(s).filter(([, x]) => x.t >= 20).sort((a, b) => b[1].pct - a[1].pct);
  const pts = [];
  if (best[0] && best[0][1].pct >= 80) pts.push(L(`Punt fort: ${tx(SENT[best[0][0]][0])} (${best[0][1].pct} %).`, `Punto fuerte: ${tx(SENT[best[0][0]][0])} (${best[0][1].pct} %).`));
  const worst = best[best.length - 1]; if (worst && worst[1].pct < 60) pts.push(L(`A reforçar: ${tx(SENT[worst[0]][0])} (${worst[1].pct} %).`, `A reforzar: ${tx(SENT[worst[0]][0])} (${worst[1].pct} %).`));
  pts.push(L(`Hàbit: ${r.act30} dies actius en els últims 30.`, `Hábito: ${r.act30} días activos en los últimos 30.`));
  if (r.evoD != null) pts.push(L(`Evolució: ${r.evoD >= 0 ? 'ha pujat' : 'ha baixat'} ${Math.abs(r.evoD)} punts a l'última prova.`, `Evolución: ${r.evoD >= 0 ? 'ha subido' : 'ha bajado'} ${Math.abs(r.evoD)} puntos en la última prueba.`));
  const passed = r.exams.filter(x => x.best >= 75).length; if (r.exams.length) pts.push(L(`Porta del Cavaller: ${passed} de ${r.exams.length} superades.`, `Puerta del Caballero: ${passed} de ${r.exams.length} superadas.`));
  const days = new Set(r.days || []), cal = Array.from({ length: 56 }, (_, i) => days.has(dayN(55 - i)));
  const wk = [0, 0, 0, 0, 0, 0, 0]; (r.days || []).forEach(d => wk[new Date(d + 'T12:00').getDay()]++);
  const WD = LANG === 'es' ? ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'] : ['dg.', 'dl.', 'dt.', 'dc.', 'dj.', 'dv.', 'ds.'];
  const topD = wk.map((v, i) => [v, i]).filter(x => x[0]).sort((a, b) => b[0] - a[0]).slice(0, 3).map(x => WD[x[1]]);
  const FEEL = { love: "M'encanten|Me encantan", good: 'Bé|Bien', meh: 'Normal|Normal', hard: 'Em costen|Me cuestan' };
  const sv = r.survey || {};
  const tests = r.tests;
  const chart = tests.length ? (() => { const W = 500, H = 140, P = 24, lo = Math.max(0, Math.min(50, Math.floor((Math.min(...tests.map(t => t.pct)) - 5) / 25) * 25)), GL = [lo, Math.round((lo + 100) / 2), 100], xs = i => P + (tests.length === 1 ? (W - 2 * P) / 2 : i * (W - 2 * P) / (tests.length - 1)), ys = v => H - 16 - (v - lo) / (100 - lo) * (H - 32);
    return `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="${L("Proves d'evolució", 'Pruebas de evolución')}"><g stroke="#E4E0EA">${GL.map(v => `<line x1="${P}" x2="${W - P}" y1="${ys(v)}" y2="${ys(v)}"/>`).join('')}</g><g font-size="10" fill="#857C90">${GL.map(v => `<text x="2" y="${ys(v) + 3}">${v}</text>`).join('')}</g>
      <polyline fill="none" stroke="#602B7A" stroke-width="2" points="${tests.map((t, i) => `${xs(i)},${ys(t.pct)}`).join(' ')}"/>${tests.map((t, i) => `<circle cx="${xs(i)}" cy="${ys(t.pct)}" r="4" fill="${t.kind === 'inicial' ? '#fff' : '#602B7A'}" stroke="#602B7A" stroke-width="2"/>`).join('')}</svg>`; })() : '';
  const sec = (t, body, cls = '') => `<section class="dsec ${cls}"><h3>${t}</h3>${body}</section>`;
  const access = print ? '' : sec(L('Accés', 'Acceso'), `<dl class="dl"><dt>${L("Codi de l'alumne", 'Código del alumno')}</dt><dd><span class="mono">${esc(r.code)}</span> <button class="ib sm" onclick="copyTxt(${js(r.code)})" aria-label="${L('Copia', 'Copiar')}">${ico('copy')}</button></dd>
      <dt>${L('Usuari', 'Usuario')}</dt><dd>${r.username ? '@' + esc(r.username) : L('Entra amb codi', 'Entra con código')}</dd></dl>
      ${r.username ? `<div style="margin-top:12px"><button class="btn sm" onclick="pwForm(${js(r.code)})">${ico('key-round')}${L('Canvia la contrasenya', 'Cambiar la contraseña')}</button><div id="pwf"></div></div>` : ''}
      <label class="switch" style="margin-top:16px"><input type="checkbox" ${r.unlock_all ? 'checked' : ''} onchange="doUnlock(${js(r.code)},this.checked)"><span><b style="font-weight:600">${L('Mode mestre: obre totes les unitats', 'Modo maestro: abre todas las unidades')}</b><br><small class="t3">${L("L'alumne podrà fer qualsevol unitat sense passar la porta.", 'El alumno podrá hacer cualquier unidad sin pasar la puerta.')}</small></span></label>
      ${ADMIN ? `<div class="inline-form"><label class="field"><span>${L('Pla', 'Plan')}</span><select onchange="doPla(${js(r.code)},this.value)">${[['free', 'Gratuït|Gratuito'], ['premium', 'Premium|Premium'], ['escola', 'Escola|Escuela']].map(([k, t]) => `<option value="${k}" ${r.pla === k ? 'selected' : ''}>${tx(t)}</option>`).join('')}</select></label>
        <label class="field"><span>${L('Grup', 'Grupo')}</span><select onchange="doAssign(${js(r.code)},this.value)"><option value="">${L('Sense grup', 'Sin grupo')}</option>${GRUPS.map(g => `<option value="${g.id}" ${g.id === r.grup_id ? 'selected' : ''}>${esc(g.nom)} · ${esc(g.centre)}</option>`).join('')}</select></label>
        <button class="btn danger sm" style="justify-self:start" onclick="doBaixa(${js(r.code)})">${ico('trash-2')}${L('Dona de baixa', 'Dar de baja')}</button></div>` : r.grup_id ? `<button class="btn sm" style="margin-top:12px" onclick="doTreure(${js(r.code)})">${ico('user-minus')}${L('Treu del grup', 'Quitar del grupo')}</button>` : ''}`);
  return `
    ${sec(L('Resum', 'Resumen'), `<div class="stats4"><div><span>${L('Dies actius (30 d)', 'Días activos (30 d)')}</span><b class="num">${r.act30}</b></div><div><span>${L('Lliçons fetes', 'Lecciones hechas')}</span><b class="num">${r.lessons}</b></div><div><span>${L('Precisió', 'Precisión')}</span><b class="num">${r.acc == null ? '—' : r.acc + ' %'}</b></div><div><span>${L('Ratxa · millor', 'Racha · mejor')}</span><b class="num">${r.idle != null && r.idle <= 1 ? r.streak : 0} · ${r.best} ${L('dies', 'días')}</b></div></div>`)}
    ${sec(L('Sentits del currículum', 'Sentidos del currículo'), Object.keys(SENT).map(k => { const x = s[k], b = band(x.pct, x.t); return `<div class="snt"><span>${tx(SENT[k][0])}</span><div class="bar"><i style="width:${x.pct || 0}%;background:var(--${b === 'none' ? 'none' : b}-fill)"></i></div><span class="p num">${x.pct == null ? '—' : x.pct + ' %'}</span><small class="t3 num">(${x.t} ${L('resp.', 'resp.')})</small><span class="chip ${b}">${tx(BAND[b])}</span></div>`; }).join(''))}
    ${sec(L("Proves d'evolució", 'Pruebas de evolución'), tests.length ? chart + `<p class="t2" style="margin:8px 0 0;font-size:13px">${tests.map((t, i) => `${fdate(t.date)} · ${t.pct} %${t.kind === 'inicial' ? ` (${L('inicial', 'inicial')})` : i ? ` (${t.pct - tests[i - 1].pct >= 0 ? '+' : ''}${t.pct - tests[i - 1].pct})` : ''}`).join(' · ')}</p>` : `<p class="t3" style="margin:0">${L("Encara no ha fet cap prova. La primera surt als 14 dies d'haver començat.", 'Aún no ha hecho ninguna prueba. La primera sale a los 14 días de empezar.')}</p>`)}
    ${sec(L('Porta del Cavaller', 'Puerta del Caballero'), r.exams.length ? `<table class="mini-t"><thead><tr><th>${L('Unitat', 'Unidad')}</th><th class="r">${L('Millor', 'Mejor')}</th><th class="r">${L('Últim', 'Último')}</th><th class="r">${L('Intents', 'Intentos')}</th><th>${L('Estat', 'Estado')}</th></tr></thead><tbody>${r.exams.map(x => `<tr><td style="white-space:normal">${esc(unitName(x.uid))}</td><td class="r num">${to12(x.best)}/12</td><td class="r num">${to12(x.last)}/12</td><td class="r num">${x.tries || 1}</td><td><span class="chip ${x.best >= 75 ? 'good' : 'warn'}">${x.best >= 75 ? L('Superada', 'Superada') : L('Pendent', 'Pendiente')}</span></td></tr>`).join('')}</tbody></table>` : `<p class="t3" style="margin:0">${L('Encara no ha arribat a cap porta.', 'Aún no ha llegado a ninguna puerta.')}</p>`)}
    ${sec(L('Hàbit', 'Hábito'), `<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap"><div class="cal">${cal.map(o => `<i class="${o ? 'on' : ''}"></i>`).join('')}</div><span class="t2" style="font-size:13px">${topD.length ? L(`Practica sobretot ${topD.join(', ')}`, `Practica sobre todo ${topD.join(', ')}`) : L('Encara sense dies de pràctica.', 'Aún sin días de práctica.')}<br><span class="t3">${L('Últimes 8 setmanes', 'Últimas 8 semanas')}</span></span></div>`)}
    ${sec(L("Què diu l'alumne", 'Qué dice el alumno'), `<dl class="dl"><dt>${L('Resultat de la prova inicial', 'Resultado de la prueba inicial')}</dt><dd>${esc(sv.result || '—')}</dd><dt>${L('Com se sent amb les mates', 'Cómo se siente con las mates')}</dt><dd>${FEEL[sv.feel] ? tx(FEEL[sv.feel]) : '—'}</dd><dt>${L('Tema que diu que fa a classe', 'Tema que dice que da en clase')}</dt><dd>${r.school ? L(`Unitat ${r.school.ui + 1} de ${curs(r.school.course)}`, `Unidad ${r.school.ui + 1} de ${curs(r.school.course)}`) : '—'}</dd>${r.reco ? `<dt>${L('Missió recomanada pendent', 'Misión recomendada pendiente')}</dt><dd>${(r.reco.items || []).length} ${L('lliçons', 'lecciones')}</dd>` : ''}</dl>`)}
    ${sec(L('Punts per a la tutoria', 'Puntos para la tutoría'), `<ul class="bullets">${pts.map(p => `<li>${esc(p)}</li>`).join('')}</ul>${print ? `<div id="pnotes"></div>` : `<label class="field" style="margin-top:12px"><span>${L('Notes (només per imprimir)', 'Notas (solo para imprimir)')}</span><textarea id="notes" placeholder="${L('Apunts per a la reunió amb la família…', 'Apuntes para la reunión con la familia…')}"></textarea></label>`}`)}
    ${print ? '' : `<section class="dsec"><details class="more"><summary>${ico('chevron-right')}${L("Motivació a l'app", 'Motivación en la app')}</summary><dl class="dl" style="margin-top:12px"><dt>XP</dt><dd class="num">${r.xp}</dd><dt>${L('XP aquesta setmana', 'XP esta semana')}</dt><dd class="num">${r.week && r.week.xp ? r.week.xp : 0}</dd><dt>${L('Cartes', 'Cartas')}</dt><dd class="num">${Object.keys(r.album || {}).length} / 100</dd><dt>${L('Batalles guanyades', 'Batallas ganadas')}</dt><dd class="num">${r.bwins || 0}</dd><dt>${L('Corones', 'Coronas')}</dt><dd class="num">${(r.crowns || []).length}</dd></dl></details></section>`}
    ${access}`;
}
function printReport(code) {
  const r = ROWS.find(x => x.code === code); if (!r) return; closePops();
  const notes = $('#notes')?.value || '';
  let p = $('#print'); if (!p) { p = document.createElement('div'); p.id = 'print'; document.body.appendChild(p); }
  const today = new Date().toLocaleDateString(LANG === 'es' ? 'es-ES' : 'ca-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  p.innerHTML = `<div class="ph"><img src="img/brand/logo-horitzontal.svg" alt="Numi Mates"><div>${esc(ADMIN ? '' : ME.centre || '')}${r.grup_id ? ' · ' + esc(gName(r.grup_id)) : ''}<br>${L('Informe de tutoria', 'Informe de tutoría')} · ${today}</div></div>
    <h1>${esc(r.name)} <span style="font-weight:400;color:#574E62;font-size:12pt">· ${curs(r.course)}</span></h1>${reportHTML(r, true)}
    <div class="pf">${L(`Dades des de l'inici fins al ${fdate(TODAY)}`, `Datos desde el inicio hasta el ${fdate(TODAY)}`)} · Numi Mates</div>`;
  if (notes) $('#pnotes', p).innerHTML = `<p style="margin-top:8px;white-space:pre-wrap"><b>${L('Notes', 'Notas')}:</b> ${esc(notes)}</p>`;
  document.body.classList.add('printing'); setTimeout(() => { window.print(); document.body.classList.remove('printing'); }, 50);
}
function pwForm(code) {
  const f = $('#pwf'); if (!f) return;
  f.innerHTML = `<div class="inline-form"><label class="field"><span>${L('Contrasenya nova', 'Contraseña nueva')}</span><input id="np1" type="password" autocomplete="new-password"><small>${L('Mínim 4 caràcters.', 'Mínimo 4 caracteres.')}</small></label><label class="field"><span>${L('Repeteix-la', 'Repítela')}</span><input id="np2" type="password" autocomplete="new-password"></label><div class="err-msg" id="npe"></div><div style="display:flex;gap:8px"><button class="btn primary sm" onclick="doPw(${js(code)})">${L('Desa', 'Guardar')}</button><button class="btn sm" onclick="$('#pwf').innerHTML=''">${L('Cancel·la', 'Cancelar')}</button></div></div>`;
  $('#np1').focus();
}
async function doPw(code) {
  const a = $('#np1').value, b = $('#np2').value, r = ROWS.find(x => x.code === code);
  if (a.length < 4) return $('#npe').textContent = L('Mínim 4 caràcters.', 'Mínimo 4 caracteres.');
  if (a !== b) return $('#npe').textContent = L('Les contrasenyes no coincideixen.', 'Las contraseñas no coinciden.');
  const j = await act('setpass', { code, password: a }); if (!j.ok) return $('#npe').textContent = L("No s'ha pogut canviar.", 'No se ha podido cambiar.');
  $('#pwf').innerHTML = ''; toast(L(`Contrasenya canviada. Comunica-la a ${r.name}.`, `Contraseña cambiada. Comunícasela a ${r.name}.`));
}
async function doUnlock(code, v) { closePops(); await act('unlock', { code, value: v }); toast(v ? L('Totes les unitats obertes per a aquest alumne.', 'Todas las unidades abiertas para este alumno.') : L("L'alumne torna al camí normal.", 'El alumno vuelve al camino normal.')); reload(); }
async function doTreure(code) { closePops(); const r = ROWS.find(x => x.code === code); if (!await confirmBox(L(`Treure ${r.name} del grup?`, `¿Quitar a ${r.name} del grupo?`), L('Tornarà al pla gratuït.', 'Volverá al plan gratuito.'), L('Treu del grup', 'Quitar del grupo'))) return; await act('treure', { code }); closeDrawer(); toast(L('Alumne tret del grup.', 'Alumno quitado del grupo.')); reload(); }
async function doBaixa(code) { closePops(); const r = ROWS.find(x => x.code === code); if (!await confirmBox(L(`Donar de baixa ${r.name}?`, `¿Dar de baja a ${r.name}?`), L("Deixarà d'aparèixer i no podrà entrar.", 'Dejará de aparecer y no podrá entrar.'), L('Dona de baixa', 'Dar de baja'))) return; await act('off', { code }); closeDrawer(); toast(L('Alumne donat de baixa.', 'Alumno dado de baja.')); reload(); }
async function doPla(code, pla) { await act('pla', { code, pla }); toast(L('Pla actualitzat.', 'Plan actualizado.')); reload(); }
async function doAssign(code, grup_id) { await act('assign', { code, grup_id }); toast(L('Grup actualitzat.', 'Grupo actualizado.')); reload(); }
async function reload() { const keep = location.hash; await load(); if (location.hash !== keep) location.hash = keep; }

/* ---------- Grups ---------- */
function grupCard(g) {
  const n = ROWS.filter(r => r.grup_id === g.id).length;
  return `<div class="card gc"><div class="r1"><b>${esc(g.nom)}</b><button class="ib" onclick="grupMenu(event,${g.id})" aria-label="${L('Accions', 'Acciones')}">${ico('ellipsis')}</button></div>
    <div class="meta">${[curs(g.curs), `${n} ${n === 1 ? L('alumne', 'alumno') : L('alumnes', 'alumnos')}`, g.docent ? L('Docent', 'Docente') + ': ' + g.docent : '', ADMIN ? g.centre : ''].filter(Boolean).map(esc).join(' · ')}</div>
    <div class="codebox"><code>${esc(g.codi)}</code><button class="ib" title="${L('Copia el codi', 'Copiar el código')}" onclick="copyTxt(${js(g.codi)},L('Codi copiat','Código copiado'))">${ico('copy')}</button><button class="ib" title="${L('Mostra el codi a la pissarra', 'Mostrar el código en la pizarra')}" onclick="projectar(${g.id})">${ico('qr-code')}</button></div>
    <button class="btn full" onclick="copyInstr(${js(g.codi)})">${ico('copy')}${L('Copia les instruccions', 'Copiar las instrucciones')}</button>
    <div class="foot">${L("Els alumnes l'escriuen a Perfil → Tinc un codi de classe", 'Los alumnos lo escriben en Perfil → Tengo un código de clase')}</div>
    <hr class="gsep">${temaField(g)}
    <details class="more gopts"><summary>${ico('chevron-right')}${L('Mode escola', 'Modo escuela')}<small>${modeSummary(g)}</small></summary>
      <p class="t3" style="margin:8px 0 4px;font-size:12.5px">${L("Tria què poden fer els alumnes d'aquest grup a l'app. Les lliçons, els repassos i la porta sempre hi són.", 'Elige qué pueden hacer los alumnos de este grupo en la app. Las lecciones, los repasos y la puerta siempre están.')}</p>
      ${[['batalles', L('Batalles entre alumnes', 'Batallas entre alumnos')], ['intercanvis', L('Intercanvi de cartes', 'Intercambio de cartas')]].map(([k, t]) => `<label class="switch"><input type="checkbox" ${(g.opts || {})[k] !== false ? 'checked' : ''} onchange="grupOpt(${g.id},'${k}',this.checked,this)"><span>${t}</span></label>`).join('')}
    </details></div>`;
}
// tema que es treballa a classe: l'app el mostra a la pantalla principal i en fa pràctiques (70 % tema, 30 % repàs)
function temaField(g) {
  const cs = g.curs != null ? [g.curs] : CURS.map((_, i) => i), opt = k => `<option value="${k}" ${g.tema === k ? 'selected' : ''}>${esc(unitName(k))}</option>`;
  const byC = c => Object.keys(UNIT_T).filter(k => k.startsWith(`c${c + 1}-`));
  return `<label class="field"><span>${L('Tema que treballeu ara', 'Tema que trabajáis ahora')}</span><select onchange="grupTema(${g.id},this.value)"><option value="">${L("Cap (cada alumne tria el seu)", 'Ninguno (cada alumno elige el suyo)')}</option>${cs.length === 1 ? byC(cs[0]).map(opt).join('') : cs.map(c => `<optgroup label="${esc(curs(c))}">${byC(c).map(opt).join('')}</optgroup>`).join('')}</select>
    <small>${g.tema ? L(`Marcat el ${fdate(localDay(g.tema_at))} · l'app el posa a la pantalla principal: 70 % del tema i 30 % de repàs.`, `Marcado el ${fdate(localDay(g.tema_at))} · la app lo pone en la pantalla principal: 70 % del tema y 30 % de repaso.`) : L("Si el marqueu, l'app el posarà a la pantalla principal de tots els alumnes del grup.", 'Si lo marcáis, la app lo pondrá en la pantalla principal de todos los alumnos del grupo.')}</small></label>`;
}
const localDay = d => { const x = d ? new Date(d) : new Date(); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`; };
const modeSummary = g => { const o = g.opts || {}, off = ['batalles', 'intercanvis'].filter(k => o[k] === false).length; return off ? L(` · ${off} apagat${off > 1 ? 's' : ''}`, ` · ${off} desactivado${off > 1 ? 's' : ''}`) : L(' · tot actiu', ' · todo activo'); };
async function grupTema(id, v) {
  const j = await act('grup_tema', { id, tema: v || null }), g = GRUPS.find(x => x.id === id);
  if (!j.ok) return toast(L("No s'ha pogut desar el tema.", 'No se ha podido guardar el tema.'));
  g.tema = j.tema; g.tema_at = j.tema ? new Date().toISOString() : null; vGrups();
  toast(j.tema ? L("Tema desat. Els alumnes el veuran la pròxima vegada que obrin l'app.", 'Tema guardado. Los alumnos lo verán la próxima vez que abran la app.') : L('Tema tret.', 'Tema quitado.'));
}
async function grupOpt(id, k, on, el) {
  const g = GRUPS.find(x => x.id === id), j = await act('grup_opts', { id, opts: { ...(g.opts || {}), [k]: on } });
  if (!j.ok) { toast(L("No s'ha pogut desar.", 'No se ha podido guardar.')); return vGrups(); }
  g.opts = j.opts; const sm = el && $('.gopts summary small', el.closest('.gc')); if (sm) sm.textContent = modeSummary(g);
  toast(on ? L('Activat per a aquest grup.', 'Activado para este grupo.') : L('Apagat per a aquest grup.', 'Desactivado para este grupo.'));
}
function vGrups() {
  const mine = GRUPS;
  shell('grups', L('Grups', 'Grupos'), mine.length ? `<div class="gcards">${mine.map(grupCard).join('')}</div>` : `<div class="card">${emptyState('school', L('Encara no tens cap grup', 'Aún no tienes ningún grupo'), L('Crea un grup i comparteix el codi amb els alumnes.', 'Crea un grupo y comparte el código con los alumnos.'), `<button class="btn primary" onclick="grupModal()">${ico('plus')}${L('Nou grup', 'Nuevo grupo')}</button>`)}</div>`,
    { acts: `<button class="btn primary" onclick="grupModal()">${ico('plus')}${L('Nou grup', 'Nuevo grupo')}</button>`, switcher: false });
}
function grupMenu(e, id) {
  e.stopPropagation(); closePops(); e.currentTarget.insertAdjacentHTML('beforeend', `<div class="pop right" onclick="event.stopPropagation()"><button onclick="grupModal(${id})">${ico('pencil')}${L('Edita', 'Editar')}</button><button onclick="grupCodi(${id})">${ico('refresh-cw')}${L('Genera un codi nou', 'Generar un código nuevo')}</button><hr><button class="danger" onclick="grupOff(${id})">${ico('trash-2')}${L('Tanca el grup', 'Cerrar el grupo')}</button></div>`);
}
function grupModal(id) {
  closePops(); const g = GRUPS.find(x => x.id === id) || {};
  const docs = (D.docents || []).filter(d => ADMIN || d.centre_id === ME?.centre_id);
  modal(`<h3>${id ? L('Edita el grup', 'Editar el grupo') : L('Nou grup', 'Nuevo grupo')}</h3>
    <label class="field"><span>${L('Nom del grup', 'Nombre del grupo')}</span><input id="g_nom" value="${esc(g.nom || '')}" placeholder="${L('p. ex. 4t A', 'p. ej. 4.º A')}"></label>
    <label class="field"><span>${L('Nivell', 'Nivel')}</span><select id="g_curs"><option value="">—</option>${CURS.map((c, i) => `<option value="${i}" ${g.curs === i ? 'selected' : ''}>${tx(c)}</option>`).join('')}</select></label>
    ${ADMIN && !id ? `<label class="field"><span>${L('Centre', 'Centro')}</span><select id="g_centre">${(D.centres || []).map(c => `<option value="${c.id}">${esc(c.nom)}</option>`).join('')}</select></label>` : ''}
    ${ADMIN || ME?.rol === 'admin_centre' ? `<label class="field"><span>${L('Docent', 'Docente')}</span><select id="g_doc"><option value="">${L('Sense docent', 'Sin docente')}</option>${docs.map(d => `<option value="${d.id}" ${g.docent_id === d.id ? 'selected' : ''}>${esc(d.nom)}</option>`).join('')}</select></label>` : ''}
    <div class="err-msg" id="g_err"></div>
    <div class="acts"><button class="btn" onclick="closeModal()">${L('Cancel·la', 'Cancelar')}</button><button class="btn primary" onclick="grupSave(${id || 0})">${id ? L('Desa els canvis', 'Guardar los cambios') : L('Crea el grup', 'Crear el grupo')}</button></div>`, 'w480');
  $('#g_nom').focus();
}
async function grupSave(id) {
  if (ADMIN && !id && !(D.centres || []).length) return $('#g_err').textContent = L('Primer crea un centre.', 'Primero crea un centro.');
  const j = await act('grup_save', { id: id || undefined, nom: $('#g_nom').value, curs: $('#g_curs').value, centre_id: $('#g_centre')?.value, docent_id: $('#g_doc')?.value });
  if (!j.ok) return $('#g_err').textContent = j.error === 'nom' ? L('Posa un nom al grup.', 'Pon un nombre al grupo.') : j.error === 'centre' ? L('Tria el centre del grup.', 'Elige el centro del grupo.') : j.error === 'permís' ? L("No tens permís per editar aquest grup.", 'No tienes permiso para editar este grupo.') : L("No s'ha pogut desar. Torna-ho a provar.", 'No se ha podido guardar. Vuelve a intentarlo.');
  closeModal(); toast(id ? L('Grup desat.', 'Grupo guardado.') : L(`Grup creat. Codi: ${j.grup.codi}`, `Grupo creado. Código: ${j.grup.codi}`)); reload();
}
async function grupCodi(id) { closePops(); if (!await confirmBox(L('Generar un codi nou?', '¿Generar un código nuevo?'), L("L'actual deixarà de funcionar. Els alumnes que ja són dins no en sortiran.", 'El actual dejará de funcionar. Los alumnos que ya están dentro no saldrán.'), L("Genera'n un de nou", 'Generar uno nuevo'), false)) return; const j = await act('grup_codi', { id }); toast(L(`Codi nou: ${j.codi}`, `Código nuevo: ${j.codi}`)); reload(); }
async function grupOff(id) { closePops(); const g = GRUPS.find(x => x.id === id); if (!await confirmBox(L(`Tancar el grup ${g.nom}?`, `¿Cerrar el grupo ${g.nom}?`), L('Els alumnes en sortiran i tornaran al pla gratuït.', 'Los alumnos saldrán y volverán al plan gratuito.'), L('Tanca el grup', 'Cerrar el grupo'))) return; await act('grup_off', { id }); toast(L('Grup tancat.', 'Grupo cerrado.')); reload(); }
const JOIN = c => `https://app.numimates.com/?classe=${c}`;
function copyInstr(c) { copyTxt(L(`Per unir-te a la classe a Numi Mates:\n1. Obre ${JOIN(c)}\n2. Si no s'obre sol: Perfil → «Tinc un codi de classe»\n3. Escriu el codi: ${c}`, `Para unirte a la clase en Numi Mates:\n1. Abre ${JOIN(c)}\n2. Si no se abre solo: Perfil → «Tinc un codi de classe»\n3. Escribe el código: ${c}`), L("Instruccions copiades. Enganxa-les al grup de la classe o a l'aula virtual.", 'Instrucciones copiadas. Pégalas en el grupo de la clase o en el aula virtual.')); }
let PROJ_T;
function projectar(id) {
  const g = GRUPS.find(x => x.id === id), qr = window.qrcode ? (() => { const q = qrcode(0, 'M'); q.addData(JOIN(g.codi)); q.make(); return q.createSvgTag({ cellSize: 8, margin: 0, scalable: true }); })() : '';
  const cnt = () => `${ROWS.filter(r => r.grup_id === id).length} ${L('alumnes ja són dins', 'alumnos ya están dentro')}`;
  document.body.insertAdjacentHTML('beforeend', `<div class="proj"><button class="btn close" onclick="$('.proj').remove();clearInterval(PROJ_T)">${ico('x')}${L('Tanca', 'Cerrar')}</button>
    <div><h2>${L('Uneix-te a la classe', 'Únete a la clase')} ${esc(g.nom)}</h2><ol><li>${L('Obre', 'Abre')} <b>app.numimates.com</b></li><li>${L('Ves a Perfil → Tinc un codi de classe', 'Ve a Perfil → Tengo un código de clase')}</li><li>${L('Escriu aquest codi', 'Escribe este código')}</li></ol><code>${esc(g.codi)}</code><div class="cnt" id="pcnt">${cnt()}</div></div>
    <div class="qr">${qr}${qr ? `<p>${L('O escaneja aquest codi amb la tauleta', 'O escanea este código con la tableta')}</p>` : ''}</div></div>`);
  clearInterval(PROJ_T); PROJ_T = setInterval(async () => { if (!$('.proj')) return clearInterval(PROJ_T); const h = location.hash; await fetch('/api/profe', { headers: AUTH() }).then(r => r.json()).then(j => { if (!j || !Array.isArray(j.rows)) return; D = j; ROWS = j.rows.map(enrich); const e = $('#pcnt'); if (e) e.textContent = cnt(); }).catch(() => { }); }, 15000);
}

/* ---------- Informes ---------- */
function vInformes(tab = 'sentits') {
  const R = scope().slice().sort((a, b) => a.name.localeCompare(b.name)), tabs = [['sentits', L('Sentits', 'Sentidos')], ['porta', L('Porta del Cavaller', 'Puerta del Caballero')], ['evolucio', L('Evolució', 'Evolución')], ['exporta', L('Exporta', 'Exportar')]];
  let body = '';
  const HEAT = ['#F2EBF6', '#DCC6E8', '#B98FD0', '#8A55A8', '#602B7A'], hc = p => p == null ? null : HEAT[Math.min(4, Math.floor(p / 20))];
  if (tab === 'sentits') {
    const tot = k => { let c = 0, t = 0; R.forEach(r => { c += r.sent[k].c; t += r.sent[k].t; }); return t ? Math.round(100 * c / t) : null; };
    const glob = r => { let c = 0, t = 0; Object.values(r.sent).forEach(s => { c += s.c; t += s.t; }); return t >= 20 ? Math.round(100 * c / t) : null; };
    const cell = (p, n, who, k) => p == null || n < 20 ? `<td class="h t3" style="background:var(--none-bg)">—</td>` : `<td class="h num" style="background:${hc(p)};color:${p >= 60 ? '#fff' : 'var(--text)'}" title="${esc(who)} · ${esc(k)} · ${p} % (${n} ${L('respostes', 'respuestas')})">${p}</td>`;
    const weak = Object.keys(SENT).map(k => [k, tot(k)]).filter(x => x[1] != null).sort((a, b) => a[1] - b[1]).slice(0, 2);
    body = R.length ? `<div class="grid12"><div class="c8"><div class="tw"><table class="heat"><thead><tr><th class="stick">${L('Alumne', 'Alumno')}</th>${Object.keys(SENT).map(k => `<th class="r">${tx(SENT[k][0])}</th>`).join('')}<th class="r">Global</th></tr></thead><tbody>
      <tr class="avg"><td class="stick">${L('Mitjana del grup', 'Media del grupo')}</td>${Object.keys(SENT).map(k => { const p = tot(k); return p == null ? '<td class="h">—</td>' : `<td class="h num">${p}</td>`; }).join('')}<td class="h num">—</td></tr>
      ${R.map(r => `<tr onclick="location.hash='#/alumnes/${encodeURIComponent(r.code)}'"><td class="stick"><div class="nm">${avatar(r)}<b>${esc(r.name)}</b></div></td>${Object.keys(SENT).map(k => cell(r.sent[k].pct, r.sent[k].t, r.name, tx(SENT[k][0]))).join('')}${(() => { const g = glob(r); return g == null ? '<td class="h t3" style="background:var(--none-bg)">—</td>' : `<td class="h num" style="background:${hc(g)};color:${g >= 60 ? '#fff' : 'var(--text)'}">${g}</td>`; })()}</tr>`).join('')}</tbody></table></div></div>
      <aside class="c4"><div class="card pad"><div class="sec-h"><h2>${L('Punts febles del grup', 'Puntos débiles del grupo')}</h2></div>${weak.length ? weak.map(([k, p]) => `<div style="margin-bottom:14px"><b style="font-weight:600">${tx(SENT[k][1])}</b> <span class="t3">· ${p} %</span><p class="t2" style="margin:4px 0 0;font-size:13px">${R.filter(r => r.sent[k].t >= 20 && r.sent[k].pct < 60).map(r => esc(r.name)).join(', ') || L('Cap alumne per sota del 60 %.', 'Ningún alumno por debajo del 60 %.')}</p></div>`).join('') : `<p class="t3" style="margin:0">${L('Encara hi ha poques dades.', 'Aún hay pocos datos.')}</p>`}</div></aside></div>` : emptyState('chart-column', L('Encara no hi ha dades', 'Aún no hay datos'), '');
  } else if (tab === 'porta') {
    const U = {}; R.forEach(r => r.exams.forEach(x => (U[x.uid] ||= []).push({ r, x })));
    const rows = Object.entries(U).sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true })); const mx = mixed(R);
    body = rows.length ? `<div class="tw"><table><thead><tr><th>${L('Unitat', 'Unidad')}</th><th class="r">${L('Han intentat', 'Han intentado')}</th><th class="r">${L('Superada', 'Superada')}</th><th class="r">${L('No superada', 'No superada')}</th><th class="r">${L('Mitjana', 'Media')}</th><th class="r">${L('Intents mitjans', 'Intentos medios')}</th></tr></thead><tbody>
      ${rows.map(([uid, l], i) => { const ok = l.filter(z => z.x.best >= 75).length, avgB = l.reduce((s, z) => s + (z.x.best || 0), 0) / l.length, avgT = l.reduce((s, z) => s + (z.x.tries || 1), 0) / l.length; return `<tr onclick="const e=document.getElementById('pu${i}');e.hidden=!e.hidden"><td>${ico('chevron-right', 't3')} ${esc(unitName(uid, mx))}</td><td class="r num">${l.length}</td><td class="r num">${ok} (${Math.round(100 * ok / l.length)} %)</td><td class="r num">${l.length - ok}</td><td class="r num">${to12(avgB)}/12</td><td class="r num">${avgT.toFixed(1).replace('.', LANG === 'es' || LANG === 'ca' ? ',' : '.')}</td></tr>
        <tr id="pu${i}" hidden><td colspan="6" style="height:auto;padding:8px 16px 12px 40px;background:var(--surface-2);white-space:normal">${l.map(z => `<span style="display:inline-flex;gap:6px;align-items:center;margin:4px 16px 4px 0"><i class="dot ${z.x.best >= 75 ? 'good' : 'crit'}"></i>${esc(z.r.name)} · ${to12(z.x.best)}/12 · ${z.x.tries || 1} ${L('intents', 'intentos')}</span>`).join('')}</td></tr>`; }).join('')}</tbody></table></div>` : `<div class="card">${emptyState('lock-open', L('Encara ningú no ha arribat a cap porta', 'Aún nadie ha llegado a ninguna puerta'), '')}</div>`;
  } else if (tab === 'evolucio') {
    const E = R.filter(r => r.tests.length);
    body = E.length ? `<div class="tw"><table><thead><tr><th>${L('Alumne', 'Alumno')}</th><th class="r">${L('Primera prova', 'Primera prueba')}</th><th class="r">${L('Última prova', 'Última prueba')}</th><th class="r">${L('Diferència', 'Diferencia')}</th><th class="r">${L('Proves', 'Pruebas')}</th></tr></thead><tbody>
      ${E.map(r => { const f = r.tests[0], l = r.lt, d = l.pct - f.pct; return `<tr onclick="location.hash='#/alumnes/${encodeURIComponent(r.code)}'"><td><div class="nm">${avatar(r)}<b>${esc(r.name)}</b></div></td><td class="r num">${f.pct} % <span class="t3">· ${fdate(f.date)}</span></td><td class="r num">${l.pct} % <span class="t3">· ${fdate(l.date)}</span></td><td class="r num ${r.tests.length < 2 ? 't3' : d >= 0 ? 'up' : 'down'}">${r.tests.length < 2 ? '—' : (d >= 0 ? '+' : '') + d}</td><td class="r num">${r.tests.length}</td></tr>`; }).join('')}</tbody></table></div>`
      : `<div class="card">${emptyState('trending-up', L("Encara no hi ha proves d'evolució", 'Aún no hay pruebas de evolución'), L("La primera surt als 14 dies d'haver començat.", 'La primera sale a los 14 días de empezar.'))}</div>`;
  } else {
    body = `<div class="card">${[['csvResum', L('Resum per alumne', 'Resumen por alumno'), L('Nivell, activitat, lliçons, precisió, evolució, porta, usuari, codi, XP i ratxa.', 'Nivel, actividad, lecciones, precisión, evolución, puerta, usuario, código, XP y racha.')], ['csvSentits', L('Sentits per alumne', 'Sentidos por alumno'), L('El percentatge i el nombre de respostes de cada sentit.', 'El porcentaje y el número de respuestas de cada sentido.')], ['csvPorta', L('Porta del Cavaller per unitat', 'Puerta del Caballero por unidad'), L('Una fila per alumne i unitat, amb la millor nota, l\'última i els intents.', 'Una fila por alumno y unidad, con la mejor nota, la última y los intentos.')]].map(([fn, t, d]) => `<div class="exp-row"><div><b>${t}</b><span>${d}</span></div><button class="btn" onclick="${fn}()">${ico('download')}${L('Descarrega CSV', 'Descargar CSV')}</button></div>`).join('')}</div>`;
  }
  shell('informes', L('Informes', 'Informes'), `<nav class="tabs">${tabs.map(([k, t]) => `<a href="#/informes/${k}" class="${tab === k ? 'on' : ''}">${t}</a>`).join('')}</nav>${body}`, { fluid: tab === 'sentits' || tab === 'porta' });
}
function download(name, head, rows) {
  const s = '﻿' + [head, ...rows].map(r => r.map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(';')).join('\n');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([s], { type: 'text/csv' }));
  const g = G ? gName(+G).replace(/\W+/g, '-').toLowerCase() : 'tots'; a.download = `numi-${g}-${name}-${TODAY}.csv`; a.click();
}
function csvResum() { download('resum', [L('Alumne', 'Alumno'), L('Usuari', 'Usuario'), L('Codi', 'Código'), L('Grup', 'Grupo'), L('Nivell', 'Nivel'), L('Última activitat', 'Última actividad'), L('Dies actius (14 d)', 'Días activos (14 d)'), L('Lliçons', 'Lecciones'), L('Precisió %', 'Precisión %'), L('Última prova %', 'Última prueba %'), L('Porta (última)', 'Puerta (última)'), 'XP', L('Ratxa', 'Racha')], filteredOrScope().map(r => [r.name, r.username || '', r.code, gName(r.grup_id), curs(r.course), r.last_day || '', r.act14, r.lessons, r.acc ?? '', r.lt ? r.lt.pct : '', r.exams[0] ? `${r.exams[0].uid} ${to12(r.exams[0].best)}/12` : '', r.xp, r.streak])); }
function csvSentits() { download('sentits', [L('Alumne', 'Alumno'), ...Object.keys(SENT).flatMap(k => [tx(SENT[k][0]) + ' %', tx(SENT[k][0]) + ' ' + L('respostes', 'respuestas')])], scope().map(r => [r.name, ...Object.keys(SENT).flatMap(k => [r.sent[k].pct ?? '', r.sent[k].t])])); }
function csvPorta() { download('porta', [L('Alumne', 'Alumno'), L('Unitat', 'Unidad'), L('Millor /12', 'Mejor /12'), L('Última /12', 'Última /12'), L('Intents', 'Intentos'), L('Superada', 'Superada')], scope().flatMap(r => r.exams.map(x => [r.name, unitName(x.uid), to12(x.best), to12(x.last), x.tries || 1, x.best >= 75 ? L('sí', 'sí') : 'no']))); }
const filteredOrScope = () => $('#tbl') ? filtered() : scope();

/* ---------- Com funciona l'app ---------- */
function vGuia() {
  const box = (t, rows) => `<div class="card pad"><h3>${t}</h3><dl>${rows.map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join('')}</dl></div>`;
  shell('guia', L("Com funciona l'app", 'Cómo funciona la app'), `<p class="t2" style="margin:0;max-width:70ch">${L("El que ha de saber un docent per acompanyar els alumnes: com s'avança, què es premia i quins límits hi ha.", 'Lo que debe saber un docente para acompañar a los alumnos: cómo se avanza, qué se premia y qué límites hay.')}</p>
    <div class="guide">
      ${box(L('El camí', 'El camino'), [[L('Unitat', 'Unidad'), L('Teoria + 3 nivells de 10 lliçons (5 del tema, 2 visuals, 2 de barreja, 1 enigma)', 'Teoría + 3 niveles de 10 lecciones (5 del tema, 2 visuales, 2 de mezcla, 1 enigma)')], [L('Per obrir la següent', 'Para abrir la siguiente'), L('Mínim 2 estrelles: com a màxim 2 errors de 8', 'Mínimo 2 estrellas: como máximo 2 errores de 8')], [L('Porta del Cavaller', 'Puerta del Caballero'), L('12 preguntes; cal 9 (més d\'un 7). Si no, repàs previ i preguntes sobre el que ha fallat', '12 preguntas; hacen falta 9 (más de un 7). Si no, repaso previo y preguntas sobre lo que ha fallado')], [L('Repàs espaiat', 'Repaso espaciado'), L('Cada lliçó torna als 2, 5, 12, 30 i 60 dies', 'Cada lección vuelve a los 2, 5, 12, 30 y 60 días')]])}
      ${box(L('Límits diaris', 'Límites diarios'), [[L('Lliçons noves', 'Lecciones nuevas'), L('Màxim 5 al dia; només les 3 primeres donen premi', 'Máximo 5 al día; solo las 3 primeras dan premio')], [L('Sense límit', 'Sin límite'), L('Porta del Cavaller, repassos i entrenaments', 'Puerta del Caballero, repasos y entrenamientos')], [L('Mode mestre', 'Modo maestro'), L("El docent pot obrir totes les unitats a un alumne des de la seva fitxa", 'El docente puede abrir todas las unidades a un alumno desde su ficha')]])}
      ${box(L('Eines del docent', 'Herramientas del docente'), [[L('Tema de classe', 'Tema de clase'), L("A Grups, marqueu el tema que feu a classe: surt a la pantalla principal de tots els alumnes del grup, amb pràctiques de 10 preguntes (7 del tema i 3 de repàs del que més els costa)", 'En Grupos, marcad el tema que dais en clase: sale en la pantalla principal de todos los alumnos del grupo, con prácticas de 10 preguntas (7 del tema y 3 de repaso de lo que más les cuesta)')], [L('Mode escola', 'Modo escuela'), L('Per a cada grup podeu apagar les batalles i els intercanvis de cartes. Les lliçons, els repassos i la porta no es poden apagar', 'Para cada grupo podéis desactivar las batallas y los intercambios de cartas. Las lecciones, los repasos y la puerta no se pueden desactivar')], [L('Ajuda «Com es fa?»', 'Ayuda «¿Cómo se hace?»'), L("A les lliçons, l'alumne pot veure un exemple resolt del mateix tipus. No perd punts, però aquella pregunta no suma a la ratxa i la lliçó queda com a molt en 2 estrelles. No hi és a la porta ni a les proves", 'En las lecciones, el alumno puede ver un ejemplo resuelto del mismo tipo. No pierde puntos, pero esa pregunta no suma a la racha y la lección queda como máximo en 2 estrellas. No está en la puerta ni en las pruebas')]])}
      ${box(L('Proves', 'Pruebas'), [[L('Prova de nivell', 'Prueba de nivel'), L("En entrar, per saber on començar", 'Al entrar, para saber dónde empezar')], [L("Prova d'evolució", 'Prueba de evolución'), L('Cada 14 dies, 12 preguntes del seu nivell', 'Cada 14 días, 12 preguntas de su nivel')], [L('Precisió', 'Precisión'), L("Encerts sobre respostes des de l'inici", 'Aciertos sobre respuestas desde el inicio')]])}
      ${box(L('Motivació', 'Motivación'), [[L('Diamants', 'Diamantes'), L('Es guanyen fent lliçons, missions i ratxes; no es poden comprar', 'Se ganan haciendo lecciones, misiones y rachas; no se pueden comprar')], [L('Cartes', 'Cartas'), L('100 cartes de mitologia; un sobre en acabar cada lliçó amb premi', '100 cartas de mitología; un sobre al acabar cada lección con premio')], [L('Batalles', 'Batallas'), L('Duels i partides de fins a 10 amb les mateixes preguntes; només es guanyen diamants', 'Duelos y partidas de hasta 10 con las mismas preguntas; solo se ganan diamantes')], [L('Ruta de temporada', 'Ruta de temporada'), L('Cada mes, 25 trams i 3 cartes exclusives', 'Cada mes, 25 tramos y 3 cartas exclusivas')]])}
    </div>`, { switcher: false });
}

/* ---------- Compte ---------- */
function vCompte() {
  if (!ME) return vResum();
  shell('compte', L('Compte', 'Cuenta'), `
    <div class="card pad" style="max-width:720px"><div class="sec-h"><h2>${L('Perfil', 'Perfil')}</h2></div>
      ${[[L('Nom', 'Nombre'), ME.nom], [L('Correu', 'Correo'), ME.email], [L('Centre', 'Centro'), ME.centre], [L('Rol', 'Rol'), ME.rol === 'admin' ? L('Administració', 'Administración') : ME.rol === 'admin_centre' ? L('Coordinació de centre', 'Coordinación de centro') : L('Docent', 'Docente')]].map(([a, b]) => `<div class="rowcard"><span>${a}</span><b style="font-weight:600">${esc(b || '—')}</b></div>`).join('')}</div>
    <div class="card pad" style="max-width:720px"><div class="sec-h"><h2>${L('Contrasenya', 'Contraseña')}</h2></div>
      <div style="display:grid;gap:12px;max-width:360px"><label class="field"><span>${L('Contrasenya nova', 'Contraseña nueva')}</span><input id="cp1" type="password" autocomplete="new-password"><small>${L('Mínim 8 caràcters.', 'Mínimo 8 caracteres.')}</small></label><label class="field"><span>${L('Repeteix-la', 'Repítela')}</span><input id="cp2" type="password" autocomplete="new-password"></label><div class="err-msg" id="cpe"></div><button class="btn primary" style="justify-self:start" onclick="myPass()">${L('Desa la contrasenya', 'Guardar la contraseña')}</button></div></div>
    <div class="card pad" style="max-width:720px"><div class="sec-h"><h2>${L('Sessió', 'Sesión')}</h2></div><p class="t2" style="margin:0 0 12px">${L('La sessió caduca al cap de 12 hores.', 'La sesión caduca a las 12 horas.')}</p><button class="btn" onclick="logout()">${ico('log-out')}${L('Tanca la sessió', 'Cerrar sesión')}</button></div>`, { switcher: false });
}
async function myPass() {
  const a = $('#cp1').value, b = $('#cp2').value;
  if (a.length < 8) return $('#cpe').textContent = L('Mínim 8 caràcters.', 'Mínimo 8 caracteres.');
  if (a !== b) return $('#cpe').textContent = L('Les contrasenyes no coincideixen.', 'Las contraseñas no coinciden.');
  const j = await fetch('/api/docent', { method: 'POST', headers: { ...AUTH(), 'content-type': 'application/json' }, body: JSON.stringify({ action: 'setpass', password: a }) }).then(r => r.json()).catch(() => ({}));
  if (!j.ok) return $('#cpe').textContent = L("No s'ha pogut canviar.", 'No se ha podido cambiar.');
  $('#cp1').value = $('#cp2').value = ''; $('#cpe').textContent = ''; toast(L('Contrasenya canviada.', 'Contraseña cambiada.'));
}

/* ---------- Administració ---------- */
const PLA_C = { pilot: 'Pilot|Piloto', escola: 'De pagament|De pago', gratuit: 'Gratuït|Gratuito' }, TIP_C = { escola: 'Escola|Escuela', institut: 'Institut|Instituto', academia: 'Acadèmia|Academia' };
function vCentres() {
  const C = D.centres || [];
  shell('centres', L('Centres', 'Centros'), C.length ? `<div class="tw"><table><thead><tr><th>${L('Centre', 'Centro')}</th><th>${L('Pla', 'Plan')}</th><th>${L('Places', 'Plazas')}</th><th class="r">${L('Docents', 'Docentes')}</th><th class="r">${L('Grups', 'Grupos')}</th><th>${L('Vigència', 'Vigencia')}</th><th>${L('Notes', 'Notas')}</th></tr></thead><tbody>
    ${C.map(c => { const used = c.alumnes || 0, over = c.places && used > c.places, fi = c.fi ? daysAgo(c.fi) : null; return `<tr onclick="centreModal(${c.id})"><td><div class="nm"><div><b>${esc(c.nom)}</b><small>${tx(TIP_C[c.tipus] || c.tipus)}</small></div></div></td><td>${tx(PLA_C[c.pla] || c.pla)}</td>
      <td><span class="num">${used}${c.places ? ' / ' + c.places : ''}</span>${c.places ? ` <span class="sbar" style="display:inline-flex;width:60px;height:6px;vertical-align:middle"><i class="${over ? 'crit' : 'good'}" style="width:${Math.min(100, used / c.places * 100)}%"></i></span>` : ''}${over ? ` <span class="down" style="font-size:12px">${L('Supera les places', 'Supera las plazas')}</span>` : ''}</td>
      <td class="r num">${(D.docents || []).filter(d => d.centre_id === c.id).length}</td><td class="r num">${GRUPS.filter(g => g.centre_id === c.id).length}</td>
      <td>${c.inici ? fdate(c.inici) : '—'} → ${c.fi ? fdate(c.fi) : '—'}${fi != null && fi >= -30 && fi <= 0 ? ` <span style="color:var(--warn);font-size:12px">${L(`Caduca d'aquí a ${-fi} dies`, `Caduca en ${-fi} días`)}</span>` : ''}</td><td style="max-width:240px;overflow:hidden;text-overflow:ellipsis">${esc(c.notes || '')}</td></tr>`; }).join('')}</tbody></table></div>`
    : `<div class="card">${emptyState('building-2', L('Encara no hi ha centres', 'Aún no hay centros'), L('Crea el primer centre per donar d\'alta docents i grups.', 'Crea el primer centro para dar de alta docentes y grupos.'))}</div>`,
    { acts: `<button class="btn primary" onclick="centreModal()">${ico('plus')}${L('Nou centre', 'Nuevo centro')}</button>`, switcher: false });
}
function centreModal(id, pre = {}) {
  const c = (D.centres || []).find(x => x.id === id) || pre, d = v => v ? String(v).slice(0, 10) : '';
  modal(`<h3>${id ? L('Edita el centre', 'Editar el centro') : L('Nou centre', 'Nuevo centro')}</h3>
    <label class="field"><span>${L('Nom del centre', 'Nombre del centro')}</span><input id="c_nom" value="${esc(c.nom || '')}"></label>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><label class="field"><span>${L('Tipus', 'Tipo')}</span><select id="c_tip">${Object.entries(TIP_C).map(([k, t]) => `<option value="${k}" ${c.tipus === k ? 'selected' : ''}>${tx(t)}</option>`).join('')}</select></label>
      <label class="field"><span>${L('Pla', 'Plan')}</span><select id="c_pla">${Object.entries(PLA_C).map(([k, t]) => `<option value="${k}" ${c.pla === k ? 'selected' : ''}>${tx(t)}</option>`).join('')}</select></label>
      <label class="field"><span>${L('Places', 'Plazas')}</span><input id="c_pl" type="number" min="0" value="${c.places ?? ''}"></label><span></span>
      <label class="field"><span>${L('Inici', 'Inicio')}</span><input id="c_in" type="date" value="${d(c.inici)}"></label><label class="field"><span>${L('Fi', 'Fin')}</span><input id="c_fi" type="date" value="${d(c.fi)}"></label></div>
    <label class="field"><span>${L('Notes', 'Notas')}</span><textarea id="c_no">${esc(c.notes || '')}</textarea></label><div class="err-msg" id="c_err"></div>
    <div class="acts"><button class="btn" onclick="closeModal()">${L('Cancel·la', 'Cancelar')}</button><button class="btn primary" onclick="centreSave(${id || 0})">${L('Desa', 'Guardar')}</button></div>`, 'w480');
}
async function centreSave(id) { const j = await act('centre_save', { id: id || undefined, nom: $('#c_nom').value, tipus: $('#c_tip').value, pla: $('#c_pla').value, places: $('#c_pl').value, inici: $('#c_in').value, fi: $('#c_fi').value, notes: $('#c_no').value }); if (!j.ok) return $('#c_err').textContent = L('Posa el nom del centre.', 'Pon el nombre del centro.'); closeModal(); toast(L('Centre desat.', 'Centro guardado.')); reload(); }
function vDocents() {
  const T = D.docents || [];
  shell('docents', L('Docents', 'Docentes'), T.length ? `<div class="tw"><table><thead><tr><th>${L('Nom', 'Nombre')}</th><th>${L('Usuari', 'Usuario')}</th><th>${L('Correu', 'Correo')}</th><th>${L('Centre', 'Centro')}</th><th>${L('Rol', 'Rol')}</th><th>${L('Últim accés', 'Último acceso')}</th><th>${L('Estat', 'Estado')}</th><th></th></tr></thead><tbody>
    ${T.map(d => `<tr onclick="if(!event.target.closest('.rowmenu'))docentModal(${d.id})"><td><b style="font-weight:600">${esc(d.nom)}</b></td><td class="mono" style="font-size:12.5px">${esc(d.usuari || '—')}</td><td>${esc(d.email)}</td><td>${esc(((D.centres || []).find(c => c.id === d.centre_id) || {}).nom || '—')}</td><td>${d.rol === 'admin_centre' ? L('Coordinació', 'Coordinación') : L('Docent', 'Docente')}</td><td class="${d.last_login ? '' : 't3'}">${d.last_login ? ago(d.last_login) : L('Mai', 'Nunca')}</td><td><span style="display:inline-flex;gap:6px;align-items:center"><i class="dot ${d.actiu ? 'good' : ''}"></i>${d.actiu ? L('Actiu', 'Activo') : L('Inactiu', 'Inactivo')}</span></td>
      <td class="r"><button class="ib sm rowmenu" onclick="docMenu(event,${d.id})">${ico('ellipsis')}</button></td></tr>`).join('')}</tbody></table></div>`
    : `<div class="card">${emptyState('graduation-cap', L('Encara no hi ha docents', 'Aún no hay docentes'), (D.centres || []).length ? L('Dona d\'alta el primer docent.', 'Da de alta al primer docente.') : L('Primer crea un centre.', 'Primero crea un centro.'))}</div>`,
    { acts: (D.centres || []).length ? `<button class="btn primary" onclick="docentModal()">${ico('plus')}${L('Nou docent', 'Nuevo docente')}</button>` : '', switcher: false });
}
function docMenu(e, id) { e.stopPropagation(); closePops(); const d = D.docents.find(x => x.id === id); e.currentTarget.parentElement.style.position = 'relative'; e.currentTarget.insertAdjacentHTML('afterend', `<div class="pop right" style="top:40px"><button onclick="docPass(${id})">${ico('key-round')}${L('Genera una contrasenya nova', 'Generar una contraseña nueva')}</button><button onclick="docentModal(${id})">${ico('pencil')}${L('Edita', 'Editar')}</button><hr><button class="danger" onclick="docActiu(${id},${!d.actiu})">${ico(d.actiu ? 'lock' : 'lock-open')}${d.actiu ? L('Desactiva', 'Desactivar') : L('Activa', 'Activar')}</button></div>`); }
function docentModal(id) {
  closePops(); const d = (D.docents || []).find(x => x.id === id) || {};
  modal(`<h3>${id ? L('Edita el docent', 'Editar el docente') : L('Nou docent', 'Nuevo docente')}</h3>
    <label class="field"><span>${L('Nom i cognoms', 'Nombre y apellidos')}</span><input id="d_nom" value="${esc(d.nom || '')}"></label>
    <label class="field"><span>${L('Correu', 'Correo')}</span><input id="d_em" type="email" value="${esc(d.email || '')}"></label>
    <label class="field"><span>${L("Nom d'usuari", 'Nombre de usuario')}</span><input id="d_us" value="${esc(d.usuari || '')}" autocapitalize="off" placeholder="${L('Si el deixes buit: la part del correu abans de @', 'Si lo dejas vacío: la parte del correo antes de @')}"><small>${L('Podrà entrar amb el correu o amb aquest usuari.', 'Podrá entrar con el correo o con este usuario.')}</small></label>
    <label class="field"><span>${L('Centre', 'Centro')}</span><select id="d_ce">${(D.centres || []).map(c => `<option value="${c.id}" ${d.centre_id === c.id ? 'selected' : ''}>${esc(c.nom)}</option>`).join('')}</select></label>
    <label class="field"><span>${L('Rol', 'Rol')}</span><select id="d_rol"><option value="docent">${L('Docent (veu els seus grups)', 'Docente (ve sus grupos)')}</option><option value="admin_centre" ${d.rol === 'admin_centre' ? 'selected' : ''}>${L('Coordinació (veu tot el centre)', 'Coordinación (ve todo el centro)')}</option></select></label>
    <div class="err-msg" id="d_err"></div><div class="acts"><button class="btn" onclick="closeModal()">${L('Cancel·la', 'Cancelar')}</button><button class="btn primary" onclick="docentSave(${id || 0})">${id ? L('Desa', 'Guardar') : L("Dona d'alta", 'Dar de alta')}</button></div>`, 'w480');
  $('#d_nom').focus();
}
async function docentSave(id) {
  const d = (D.docents || []).find(x => x.id === id);
  const j = await act('docent_save', { id: id || undefined, nom: $('#d_nom').value, email: $('#d_em').value, usuari: $('#d_us').value, centre_id: $('#d_ce').value, rol: $('#d_rol').value, actiu: d ? d.actiu : true });
  if (!j.ok) return $('#d_err').textContent = j.error === 'ja existeix' ? L('Ja hi ha un docent amb aquest correu.', 'Ya hay un docente con ese correo.') : j.error === 'usuari ocupat' ? L("Aquest nom d'usuari ja existeix.", 'Ese nombre de usuario ya existe.') : L('Revisa el nom, el correu i el centre.', 'Revisa el nombre, el correo y el centro.');
  if (id) { closeModal(); toast(L('Docent desat.', 'Docente guardado.')); return reload(); }
  creds(L("Docent donat d'alta", 'Docente dado de alta'), $('#d_em').value, j.usuari, j.password); reload();
}
function creds(title, email, usuari, pw) {
  const txt = `${L('Panell docent', 'Panel docente')}: https://app.numimates.com/profe.html\n${L('Correu', 'Correo')}: ${email}${usuari ? `\n${L('Usuari', 'Usuario')}: ${usuari}` : ''}\n${L('Contrasenya provisional', 'Contraseña provisional')}: ${pw}`;
  modal(`<h3>${title}</h3><p>${L("Comparteix aquestes dades i demana-li que canviï la contrasenya en entrar. La contrasenya no es tornarà a mostrar.", 'Comparte estos datos y pídele que cambie la contraseña al entrar. La contraseña no se volverá a mostrar.')}</p><div class="creds">${esc(txt)}</div>
    <div class="acts"><button class="btn" onclick="copyTxt(${js(txt)},L('Copiat','Copiado'))">${ico('copy')}${L("Copia-ho tot", 'Copiarlo todo')}</button><button class="btn primary" onclick="closeModal()">${L('Fet', 'Hecho')}</button></div>`, 'w480');
}
async function docPass(id) { closePops(); const d = D.docents.find(x => x.id === id); if (!await confirmBox(L(`Generar una contrasenya nova per a ${d.nom}?`, `¿Generar una contraseña nueva para ${d.nom}?`), L("L'actual deixarà de funcionar.", 'La actual dejará de funcionar.'), L('Genera-la', 'Generarla'), false)) return; const j = await act('docent_pass', { id }); if (j.ok) creds(L('Contrasenya nova', 'Contraseña nueva'), d.email, d.usuari, j.password); }
async function docActiu(id, v) { closePops(); const d = D.docents.find(x => x.id === id); await act('docent_save', { id, nom: d.nom, email: d.email, usuari: d.usuari, centre_id: d.centre_id, rol: d.rol, actiu: v }); toast(v ? L('Docent activat.', 'Docente activado.') : L('Docent desactivat.', 'Docente desactivado.')); reload(); }
function vTotsGrups() {
  const by = {}; GRUPS.forEach(g => (by[g.centre] ||= []).push(g));
  shell('totsgrups', L('Tots els grups', 'Todos los grupos'), Object.keys(by).length ? Object.entries(by).map(([c, gs]) => `<section><div class="sec-h"><h2>${esc(c)}</h2><small>${gs.length} ${L('grups', 'grupos')}</small></div><div class="gcards">${gs.map(grupCard).join('')}</div></section>`).join('')
    : `<div class="card">${emptyState('layout-grid', L('Encara no hi ha grups', 'Aún no hay grupos'), '')}</div>`, { acts: `<button class="btn primary" onclick="grupModal()">${ico('plus')}${L('Nou grup', 'Nuevo grupo')}</button>`, switcher: false });
}
function vSol() {
  const C = D.contacts || [], seen = +store.get('numi-profe-sol', 0);
  store.set('numi-profe-sol', Date.now());
  shell('sollicituds', L('Sol·licituds', 'Solicitudes'), C.length ? `<div class="tw"><table><thead><tr><th>${L('Data', 'Fecha')}</th><th>${L('Nom', 'Nombre')}</th><th>${L('Centre', 'Centro')}</th><th>${L('Correu', 'Correo')}</th><th>${L('Cursos', 'Cursos')}</th><th>${L('Idioma', 'Idioma')}</th><th></th></tr></thead><tbody>
    ${C.map((c, i) => `<tr><td>${new Date(c.created_at).getTime() > seen ? '<i class="dot gold" title="Nova"></i> ' : ''}${fdate(c.created_at)}</td><td><b style="font-weight:600">${esc(c.nom)}</b></td><td>${esc(c.centre)}</td><td>${esc(c.mail)}</td><td style="white-space:normal">${esc(c.cursos || '—')}</td><td>${c.lang === 'es' ? 'ES' : 'CA'}</td><td class="r" style="position:relative"><button class="ib sm" onclick="solMenu(event,${i})">${ico('ellipsis')}</button></td></tr>`).join('')}</tbody></table></div>`
    : `<div class="card">${emptyState('inbox', L('Cap sol·licitud', 'Ninguna solicitud'), L('Encara no ha arribat cap sol·licitud des de numimates.com.', 'Aún no ha llegado ninguna solicitud desde numimates.com.'))}</div>`, { switcher: false });
}
function solMenu(e, i) { e.stopPropagation(); closePops(); const c = D.contacts[i], subj = encodeURIComponent(`Numi Mates · ${LANG === 'es' ? 'Demostración para' : 'Demostració per a'} ${c.centre}`); e.currentTarget.insertAdjacentHTML('afterend', `<div class="pop right" style="top:40px"><a href="mailto:${esc(c.mail)}?subject=${subj}">${ico('mail')}${L('Respon per correu', 'Responder por correo')}</a><button onclick="closePops();centreModal(0,{nom:${js(c.centre)},pla:'pilot'})">${ico('building-2')}${L('Crea el centre', 'Crear el centro')}</button><button onclick="copyTxt(${js(c.mail)},L('Correu copiat','Correo copiado'))">${ico('copy')}${L('Copia el correu', 'Copiar el correo')}</button></div>`); }
function vActivitat(tab = 'batalles') {
  const B = D.battles || [], T = D.trades || [], ST = { open: 'Esperant oferta|Esperando oferta', offered: 'Oferta pendent|Oferta pendiente', done: 'Fet|Hecho', reject: 'Rebutjat|Rechazado', cancel: 'Cancel·lat|Cancelado', expired: 'Caducat|Caducado' };
  const secs = ms => (ms / 1000).toFixed(1).replace('.', ',') + ' s';
  const body = tab === 'batalles'
    ? (B.length ? `<div class="tw"><table><thead><tr><th>${L('Codi', 'Código')}</th><th>${L('Tipus', 'Tipo')}</th><th>${L('Nivell', 'Nivel')}</th><th>${L('Creada', 'Creada')}</th><th>${L('Classificació', 'Clasificación')}</th></tr></thead><tbody>${B.map(b => `<tr style="cursor:default"><td class="mono">${esc(b.code)}</td><td>${b.kind === 'duel' ? 'Duel' : L('Grup', 'Grupo')}</td><td>${curs(b.course)}</td><td>${fdate(b.created_at)}</td><td style="white-space:normal">${(b.players || []).map((p, i) => `${i + 1}. ${esc(p.name)} ${p.finished ? `${p.correct}/10 · ${secs(p.ms)}` : `<span class="t3">${L('en joc', 'en juego')}</span>`}`).join(' &nbsp; ')}</td></tr>`).join('')}</tbody></table></div>` : `<div class="card">${emptyState('swords', L("Encara no s'ha jugat cap batalla", 'Aún no se ha jugado ninguna batalla'), '')}</div>`)
    : (T.length ? `<div class="tw"><table><thead><tr><th>${L('Codi', 'Código')}</th><th>${L('Ofereix', 'Ofrece')}</th><th>${L('A canvi', 'A cambio')}</th><th>${L('Estat', 'Estado')}</th><th>${L('Data', 'Fecha')}</th></tr></thead><tbody>${T.map(t => `<tr style="cursor:default"><td class="mono">${esc(t.code)}</td><td>${esc(t.a_name)} · ${esc(t.a_card)}</td><td>${t.b_name ? esc(t.b_name) + ' · ' + esc(t.b_card) : '—'}</td><td>${tx(ST[t.status] || t.status)}</td><td>${fdate(t.created_at)}</td></tr>`).join('')}</tbody></table></div>` : `<div class="card">${emptyState('repeat', L('Encara no hi ha cap intercanvi', 'Aún no hay ningún intercambio'), '')}</div>`);
  shell('activitat', L('Activitat', 'Actividad'), `<nav class="tabs"><a href="#/activitat/batalles" class="${tab === 'batalles' ? 'on' : ''}">${L('Batalles', 'Batallas')}</a><a href="#/activitat/intercanvis" class="${tab === 'intercanvis' ? 'on' : ''}">${L('Intercanvis', 'Intercambios')}</a><span class="t3" style="margin-left:auto;align-self:center;font-size:12.5px">${L('Últims 30 dies', 'Últimos 30 días')}</span></nav>${body}`, { switcher: false, fluid: true });
}

/* ---------- peces comunes ---------- */
function modal(html, cls = '') { closeModal(); document.body.insertAdjacentHTML('beforeend', `<div class="modal-s" onclick="if(event.target===this)closeModal()"><div class="modal ${cls}" role="dialog">${html}</div></div>`); }
function closeModal() { $$('.modal-s').forEach(m => m.remove()); }
function confirmBox(title, text, okTxt, danger = true) {
  return new Promise(res => {
    modal(`<h3>${esc(title)}</h3><p>${esc(text)}</p><div class="acts"><button class="btn" id="cb0">${L('Cancel·la', 'Cancelar')}</button><button class="btn ${danger ? 'danger solid' : 'primary'}" id="cb1">${esc(okTxt)}</button></div>`);
    $('#cb0').onclick = () => { closeModal(); res(false); }; $('#cb1').onclick = () => { closeModal(); res(true); }; $('#cb1').focus();
  });
}
function toast(msg) {
  let t = $('.toasts'); if (!t) { t = document.createElement('div'); t.className = 'toasts'; document.body.appendChild(t); }
  const e = document.createElement('div'); e.className = 'toast'; e.setAttribute('role', 'status'); e.innerHTML = ico('check') + `<span>${esc(msg)}</span>`; t.appendChild(e); setTimeout(() => e.remove(), 4000);
}
function copyTxt(t, msg) { closePops(); (navigator.clipboard?.writeText(t) || Promise.reject()).then(() => toast(msg || L('Copiat', 'Copiado')), () => { const a = document.createElement('textarea'); a.value = t; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); toast(msg || L('Copiat', 'Copiado')); } catch (e) { } a.remove(); }); }
function banner(msg) { root.innerHTML = `<div class="content"><div class="banner">${ico('circle-alert')}<span>${esc(msg)}</span><button class="btn sm" style="margin-left:auto" onclick="load()">${L('Torna-ho a provar', 'Vuelve a intentarlo')}</button></div></div>`; }

document.documentElement.lang = LANG;
AUTH() ? load() : login();
