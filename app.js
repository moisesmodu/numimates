/* ===== Mates amb Numi — lògica de l'app (CA/ES) ===== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const app = $('#app');
document.body.insertAdjacentHTML('afterbegin', DEFS);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
const dayDiff = (a, b) => Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 864e5);
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const TEST_DAYS = 14;

/* ---------- Estat local ---------- */
const SKEY = 'mates-numi-v1';
let DB; try { DB = JSON.parse(localStorage.getItem(SKEY)); } catch (e) { }
if (!DB || !DB.profiles) DB = { profiles: {}, current: null };
if (!DB.lang) DB.lang = /^es/i.test(navigator.language || '') ? 'es' : 'ca';
function freshProgress() {
  return { companion: 'numi', owned: ['numi'], accOwned: [], acc: {}, xp: 0, gems: 20, streak: 0, best: 0, lastDay: null, days: [], freeze: 0, srw: [], tests: [],
    daily: { d: today(), xp: 0 }, prog: {}, skip: {}, badges: [], stats: { answers: 0, correct: 0, perfect: 0, lessons: 0, trains: 0, combo: 0, bestCombo: 0, sprintBest: 0, bests: {}, games: 0, sk: {} } };
}
function migrate(p) {
  const f = freshProgress();
  for (const k in f) if (p[k] === undefined) p[k] = f[k];
  // l'estat pot venir del núvol: els números han de ser números (i no text que es pintaria com a HTML)
  for (const k of ['xp', 'gems', 'streak', 'best', 'freeze']) if (typeof p[k] !== 'number' || !Number.isFinite(p[k])) p[k] = Number.isFinite(+p[k]) ? +p[k] : f[k];
  for (const k of ['goal', 'course', 'baseCourse', 'maxCourse']) if (p[k] !== undefined && (typeof p[k] !== 'number' || !Number.isFinite(p[k]))) p[k] = Number.isFinite(+p[k]) && p[k] !== '' ? +p[k] : undefined;
  if (typeof p.name === 'string') p.name = p.name.slice(0, 30);
  if (!p.stats || typeof p.stats !== 'object') p.stats = f.stats;
  if (!p.cxp) p.cxp = {};
  if (!p.stats.bests) p.stats.bests = { sprint: p.stats.sprintBest || 0 };
  if (p.stats.games === undefined) p.stats.games = 0;
  if (p.course === undefined) { p.course = 3; p.baseCourse = 3; }
  if (p.baseCourse === undefined) p.baseCourse = p.course;
  if (p.maxCourse === undefined) p.maxCourse = Math.max(p.course, p.baseCourse);
  if (!p.lang) p.lang = DB.lang;
  if (!(p.goal > 0)) p.goal = 20;
  if (p.sound === undefined) p.sound = true;
  for (let i = 1; i <= 8; i++) if (p.prog['u' + i]) { p.prog['c4-' + i] = p.prog['u' + i]; delete p.prog['u' + i]; }
  if (!p.m3) {
    Object.values(p.prog).forEach(x => { const s = x.stars, n = s.length; if (n >= 31 || n < 6) return; const ns = Array(31).fill(0);
      for (let i = 0; i < 5; i++) { ns[i] = s[i] || 0; if (n >= 11) ns[10 + i] = s[5 + i] || 0; if (n >= 16) ns[20 + i] = s[10 + i] || 0; }
      ns[30] = s[n - 1] || 0; x.stars = ns; });
    const rv = {}; Object.entries(p.rev || {}).forEach(([k, v]) => { const q = k.split('|'), li = +q[2]; q[2] = li < 5 ? li : li < 10 ? li + 5 : li + 10; rv[q.join('|')] = v; }); p.rev = rv;
    p.m3 = 1;
  }
  if (!p.m2) { Object.values(p.prog).forEach(x => { x.stars = x.stars.map(s => s === 1 ? 2 : s); }); p.m2 = 1; }
  if (!p.code && !p.pendingReg && !p.holdReg) p.pendingReg = true;
  return p;
}
Object.values(DB.profiles).forEach(migrate);
let P = DB.current && DB.profiles[DB.current] || null;
setVariant(varOf(P));
function setLang(l, rerender = true) {
  LANG = l; document.documentElement.lang = l; DB.lang = l; document.title = `${VAR.name} · ${tx(VAR.tag)}`;
  if (P && P.id !== 'tmp') { P.lang = l; save(); } else saveLocal();
  if (rerender) { const v = VIEW; if (v === 'onboard') onb(ONB.step || 0); else go(v || 'home'); }
}
LANG = P ? P.lang : DB.lang; document.documentElement.lang = LANG; document.title = `${VAR.name} · ${tx(VAR.tag)}`;
function saveLocal() { try { localStorage.setItem(SKEY, JSON.stringify(DB)); } catch (e) { } }
// save.n compta els desaments: si n'hi ha durant una pujada, el perfil continua pendent de sincronitzar
function save() { save.n = (save.n || 0) + 1; saveLocal(); if (P && P.id !== 'tmp') { P.dirty = true; clearTimeout(save.t); save.t = setTimeout(syncNow, 1500); } }

/* ---------- Núvol ---------- */
// Clau de dispositiu: als comptes amb contrasenya, el servidor dona a cada dispositiu una clau secreta (capçalera
// x-alumne-new) que s'envia a totes les peticions d'aquell compte. Es guarda a DB.toks[codi], fora dels perfils
// (que es sincronitzen), perquè no surti mai del dispositiu.
{
  const f0 = window.fetch.bind(window);
  window.fetch = async (u, o) => {
    const isApi = typeof u === 'string' && u.startsWith('/api/'); let code = null;
    if (isApi && o && typeof o.body === 'string') { try { code = JSON.parse(o.body).code || null; } catch (e) { } }
    const toks = (typeof DB === 'object' && DB) ? (DB.toks = DB.toks || {}) : {};
    if (code && toks[code]) o = { ...o, headers: { ...(o.headers || {}), 'x-alumne': toks[code] } };
    const r = await f0(u, o), nt = isApi && r.headers.get('x-alumne-new');
    if (nt) { let c = code; if (!c) { try { c = (await r.clone().json()).code; } catch (e) { } } if (c) { toks[c] = nt; saveLocal(); } }
    if (isApi && r.status === 401 && code && P && P.code === code && !['/api/profe', '/api/docent'].some(x => u.startsWith(x))) askPassAgain();
    return r;
  };
}
// aquest dispositiu ja no té la clau del compte (s'ha posat o canviat la contrasenya en un altre lloc): cal tornar a entrar
function askPassAgain() {
  if (askPassAgain.on || $('.modal-bg')) return; askPassAgain.on = true; setTimeout(() => askPassAgain.on = false, 60000);
  toast(L('Per seguretat, torna a escriure la teva contrasenya.', 'Por seguridad, vuelve a escribir tu contraseña.'));
  setTimeout(() => { if (!$('.modal-bg')) { loginModal(0); const u = $('#lu'); if (u && P && P.username) { u.value = P.username; const p = $('#lp'); p && p.focus(); } } }, 400);
}
// amb 15 s de marge: una petició penjada no pot deixar la sincronització bloquejada
const api = (path, data) => { const c = new AbortController(), t = setTimeout(() => c.abort(), 15000);
  return fetch('/api/' + path, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data), signal: c.signal }).then(r => r.json().then(j => ({ status: r.status, ...j }))).finally(() => clearTimeout(t)); };
let SYNCING = false;
async function syncNow() {
  if (!P || P.id === 'tmp' || P.holdReg || SYNCING || !navigator.onLine) return;
  SYNCING = true;
  try {
    if (!P.code) {
      const r = await api('register', { name: P.name, survey: P.survey || null, state: P, variant: VAR.id });
      if (r.code) { P.code = r.code; P.pendingReg = false; P.dirty = false; saveLocal(); }
    } else if (P.dirty && !P.gone) {
      const n0 = save.n, r = await api('sync', { code: P.code, state: P, reset: !!P.resetPending });
      // el perfil ja no existeix al núvol (donat de baixa o esborrat): deixem de provar-ho
      if (r.status === 410 || r.status === 404) { P.gone = true; saveLocal(); SYNCING = false; return; }
      if (r.ok === false && r.state) mergeIn(r.state);
      else if (r.ok && save.n === n0) { P.dirty = false; P.resetPending = false; }
      saveLocal();
    }
  } catch (e) { }
  SYNCING = false;
  const s = $('#cloud'); if (s) s.innerHTML = cloudTxt();
}
async function pull() {
  if (!P || !P.code || !navigator.onLine) return;
  if (P.gone) return;
  try { const r = await api('login', { code: P.code }); if (r.status === 410) { P.gone = true; saveLocal(); return; }
    if (r.pla && r.pla !== P.pla) { P.pla = r.pla; saveLocal(); if (VIEW === 'home') renderHome(); }
    if ('sub' in r && JSON.stringify(r.sub || null) !== JSON.stringify(P.sub || null)) { P.sub = r.sub || null; saveLocal(); if (VIEW === 'profile') renderProfile(); } if (r.state && r.state.xp > P.xp && !P.resetPending) { mergeIn(r.state); if (VIEW === 'home') renderHome(); }
    if (r.state && !!r.state.unlockAll !== !!P.unlockAll) { P.unlockAll = !!r.state.unlockAll; saveLocal(); if (VIEW === 'home') renderHome(); } if (r.username && !P.username) { P.username = r.username; saveLocal(); } } catch (e) { }
}
// Fusiona el progrés de dos dispositius (la tauleta de l'escola i el mòbil de casa) sense perdre res de cap dels dos:
// estrelles, cartes, medalles, proves i estadístiques es combinen; els comptadors es queden amb el valor més alt.
function mergeState(a, b) {
  const base = (+b.xp || 0) > (+a.xp || 0) ? b : a, other = base === a ? b : a, o = JSON.parse(JSON.stringify(base));
  const mx = (x, y) => Math.max(+x || 0, +y || 0), uni = (x, y) => [...new Set([...(x || []), ...(y || [])])];
  const maxMap = (x, y) => { const r = { ...(y || {}) }; for (const k in x || {}) r[k] = mx(x[k], r[k]); return r; };
  for (const k of ['xp', 'best', 'maxCourse', 'gems', 'freeze']) o[k] = mx(a[k], b[k]);
  const la = a.lastDay || '', lb = b.lastDay || '';
  if (la !== lb) { const w = la > lb ? a : b; o.lastDay = w.lastDay; o.streak = w.streak; } else o.streak = mx(a.streak, b.streak);
  o.days = uni(a.days, b.days).sort().slice(-400);
  for (const k of ['owned', 'accOwned', 'badges', 'crowns', 'srw']) o[k] = uni(a[k], b[k]);
  const T = new Map(); [...(a.tests || []), ...(b.tests || [])].forEach(t => T.set(`${t.date}|${t.kind}|${t.course}`, t)); o.tests = [...T.values()].sort((x, y) => String(x.date).localeCompare(String(y.date)));
  o.prog = {};
  for (const id of uni(Object.keys(a.prog || {}), Object.keys(b.prog || {}))) {
    const pa = (a.prog || {})[id], pb = (b.prog || {})[id];
    if (!pa || !pb) { o.prog[id] = JSON.parse(JSON.stringify(pa || pb)); continue; }
    const n = Math.max(pa.stars.length, pb.stars.length); o.prog[id] = { ...pb, ...pa, stars: Array.from({ length: n }, (_, i) => mx(pa.stars[i], pb.stars[i])) };
  }
  o.album = maxMap(a.album, b.album); o.cxp = maxMap(a.cxp, b.cxp); o.skip = maxMap(a.skip, b.skip);
  o.learned = { ...(other.learned || {}), ...(base.learned || {}) }; o.bpaid = { ...(other.bpaid || {}), ...(base.bpaid || {}) };
  o.rev = { ...(other.rev || {}) }; for (const k in base.rev || {}) { const x = base.rev[k], y = o.rev[k]; o.rev[k] = !y || x.b > y.b || (x.b === y.b && x.d > y.d) ? x : y; }
  o.exams = { ...(other.exams || {}) };
  for (const k in base.exams || {}) { const x = base.exams[k], y = o.exams[k]; if (!y) { o.exams[k] = x; continue; } const nw = String(x.d) >= String(y.d) ? x : y; o.exams[k] = { ...nw, best: mx(x.best, y.best), tries: mx(x.tries, y.tries) }; }
  const sa = a.stats || {}, sb = b.stats || {}; o.stats = { ...sb, ...sa };
  for (const k of ['answers', 'correct', 'perfect', 'lessons', 'trains', 'bestCombo', 'sprintBest', 'games', 'bwins']) o.stats[k] = mx(sa[k], sb[k]);
  o.stats.bests = maxMap(sa.bests, sb.bests);
  o.stats.sk = { ...(sb.sk || {}) }; for (const k in sa.sk || {}) { const x = sa.sk[k], y = o.stats.sk[k]; o.stats.sk[k] = !y || x[1] > y[1] ? x : y; }
  if (a.season && b.season && a.season.id === b.season.id) o.season = { ...a.season, xp: mx(a.season.xp, b.season.xp), got: uni(a.season.got, b.season.got) };
  else if (a.season || b.season) o.season = [a.season, b.season].filter(Boolean).sort((x, y) => String(y.id).localeCompare(String(x.id)))[0];
  if (a.week && b.week && a.week.id === b.week.id) o.week = { ...a.week, xp: mx(a.week.xp, b.week.xp) };
  return o;
}
// incorpora l'estat del núvol al perfil d'aquest dispositiu i, si hi ha res nou d'aquí, el torna a pujar
function mergeIn(st) {
  const keep = { id: P.id, code: P.code, classe: P.classe, hintAsk: P.hintAsk, gone: P.gone }, before = JSON.stringify({ ...st, dirty: 0 });
  Object.assign(P, migrate(mergeState(JSON.parse(JSON.stringify(P)), st)), keep);
  P.dirty = JSON.stringify({ ...P, id: st.id, code: st.code, classe: st.classe, hintAsk: st.hintAsk, gone: st.gone, dirty: 0 }) !== before;
  DB.profiles[P.id] = P; LANG = P.lang; document.documentElement.lang = LANG; saveLocal();
  // fre de seguretat: si el núvol i el dispositiu no es posen d'acord, no reintentem més de 3 vegades seguides
  mergeIn.n = Date.now() - (mergeIn.t || 0) < 60000 ? (mergeIn.n || 0) + 1 : 1; mergeIn.t = Date.now();
  if (P.dirty && mergeIn.n <= 3) { clearTimeout(save.t); save.t = setTimeout(syncNow, 1500); }
}
function adopt(st) { const id = P.id; Object.assign(P, migrate(st), { id, dirty: false }); DB.profiles[id] = P; LANG = P.lang; saveLocal(); }
const cloudTxt = () => P.gone ? L("Aquest perfil ja no està actiu al núvol. Parla amb el teu docent.", 'Este perfil ya no está activo en la nube. Habla con tu docente.') : !P.code ? L("⏳ Encara no s'ha pogut desar al núvol (es tornarà a provar sol).", '⏳ Aún no se ha podido guardar en la nube (se volverá a intentar solo).') : P.dirty ? L('⏳ Desant els últims canvis…', '⏳ Guardando los últimos cambios…') : L('☁️ Progrés desat al núvol.', '☁️ Progreso guardado en la nube.');
addEventListener('online', syncNow);
setInterval(() => { if (P && !P.gone && (P.dirty || !P.code)) syncNow(); syncOthers(); }, 30000);
// tauleta compartida: els altres perfils del dispositiu amb canvis pendents també es pugen (un cada vegada)
async function syncOthers() {
  if (!navigator.onLine || SYNCING) return;
  const p = Object.values(DB.profiles).find(x => x !== P && x.code && x.dirty && !x.gone); if (!p) return;
  try {
    const r = await api('sync', { code: p.code, state: p, reset: !!p.resetPending });
    if (r.status === 410 || r.status === 404) p.gone = true;
    else if (r.ok) { p.dirty = false; p.resetPending = false; }
    else if (r.ok === false && r.state) { const keep = { id: p.id, code: p.code, classe: p.classe, hintAsk: p.hintAsk }; DB.profiles[p.id] = Object.assign(migrate(mergeState(p, r.state)), keep, { dirty: true }); }
    saveLocal();
  } catch (e) { }
}
addEventListener('visibilitychange', () => { if (document.hidden) syncNow(); });

/* ---------- Cursos i progrés ---------- */
const CUR = () => COURSES[P.course];
const UNITS_ = () => CUR().units;
const lvlOf = xp => Math.floor(Math.sqrt(xp / 20)) + 1;
const clvOf = id => charLvl((P.cxp || {})[id]);
const meC = (mood = 'idle', cls = '') => charSVG(P.companion, mood, P.acc, cls, clvOf(P.companion));
function clvBar(id) {
  const xp = (P.cxp || {})[id] || 0, lv = charLvl(xp), a = CLV[lv - 1], b = CLV[lv];
  return `<div class="clv"><span>${L('Nivell', 'Nivel')} ${lv}${lv >= 5 ? ' · MAX' : ''}</span>${b ? `<div class="clvbar"><div style="width:${Math.min(100, (xp - a) / (b - a) * 100)}%"></div></div>` : ''}</div>`;
}
const xpFor = l => 20 * (l - 1) ** 2;
function dailyRoll() { if (P.daily.d !== today()) P.daily = { d: today(), xp: 0 }; }
function addXP(x) { dailyRoll(); P.xp += x; P.daily.xp += x; weekXP(x); seasonXP(x); misEvent('xp', x); P.cxp = P.cxp || {}; P.cxp[P.companion] = (P.cxp[P.companion] || 0) + x; }
function streakNow() { if (!P.lastDay) return 0; const d = dayDiff(P.lastDay, today()); return d <= 1 || (d === 2 && P.freeze > 0) ? P.streak : 0; }
function touchStreak() {
  const t = today();
  if (!P.days.includes(t)) { P.days.push(t); if (P.days.length > 120) P.days.shift(); }
  if (P.lastDay === t) return false;
  const d = P.lastDay ? dayDiff(P.lastDay, t) : 99;
  if (d === 1) P.streak++; else if (d === 2 && P.freeze > 0) { P.freeze--; P.streak++; } else P.streak = 1;
  P.lastDay = t; P.best = Math.max(P.best, P.streak);
  return true;
}
const REP = u => u.lessons.length;
// Ordre del camí: nivells 1-2 + 3 primeres lliçons del nivell 3 → porta del Cavaller → resta del nivell 3 (bonus)
const PRE_T3 = 3;
const ORD = u => { const a = [], b = []; let t3 = 0; u.lessons.forEach((l, i) => { if ((l.tier || 1) < 3 || t3++ < PRE_T3) a.push(i); else b.push(i); }); return [...a, REP(u), ...b]; };
const preGate = u => { const o = ORD(u); return o.slice(0, o.indexOf(REP(u))); };
const isBonus = (u, li) => li < REP(u) && !preGate(u).includes(li);
function prog(ui, c = CUR()) {
  const u = c.units[ui], n = REP(u) + 1; let p = P.prog[u.id];
  if (!p) p = P.prog[u.id] = { stars: Array(n).fill(0) };
  if (p.stars.length < n) { const old = p.stars, rep = old[old.length - 1]; p.stars = [...old.slice(0, old.length - 1), ...Array(n - old.length).fill(0), rep]; }
  return p;
}
const udone = (p, u) => { const st = p.prog[u.id]?.stars; return !!(st && st[st.length - 1] >= PASS); };
function unitOpen(ui, ci = P.course) { const c = COURSES[ci]; return ui === 0 || P.unlockAll || ci < P.baseCourse || ui <= (P.skip[c.id] || 0) || prog(ui - 1, c).stars[REP(c.units[ui - 1])] >= PASS; }
function lessonOpen(ui, li) {
  if (!unitOpen(ui)) return false;
  const u = UNITS_()[ui], o = ORD(u), p = o.indexOf(li), st = prog(ui).stars;
  return p === 0 || P.unlockAll || P.course < P.baseCourse || ui < (P.skip[CUR().id] || 0) || st[o[p - 1]] >= PASS || o.slice(p + 1).some(i => st[i] > 0);
}
const unitsDone = p => COURSES.reduce((n, c) => n + c.units.filter(u => udone(p, u)).length, 0);
function currentNode() {
  const us = UNITS_(), from = Math.min(P.skip[CUR().id] || 0, us.length - 1);
  for (const start of [from, 0]) for (let ui = start; ui < us.length; ui++) for (const li of ORD(us[ui]).filter(i => !isBonus(us[ui], i))) if (lessonOpen(ui, li) && (prog(ui).stars[li] || 0) < PASS) return [ui, li];
  return null;
}
function record(sk, ok) {
  const s = P.stats; s.answers++; if (ok) s.correct++;
  const a = s.sk[sk] ||= [0, 0]; a[1]++; if (ok) a[0]++;
  if (ok) { s.combo++; s.bestCombo = Math.max(s.bestCombo, s.combo); } else s.combo = 0;
}
function testInfo() {
  const last = P.tests.length ? P.tests[P.tests.length - 1].date : (P.survey?.date || null);
  const left = last ? TEST_DAYS - dayDiff(last, today()) : 0;
  return { due: left <= 0, left: Math.max(0, left) };
}

/* ---------- Premis de ratxa ---------- */
const SRW = [
  { d: 3, gems: 30, icon: '🎁', txt: ['30 diamants', '30 diamantes'] },
  { d: 7, gems: 50, acc: 'medalla', icon: '🏅', txt: ['Medalla de foc + 50 diamants', 'Medalla de fuego + 50 diamantes'] },
  { d: 14, gems: 100, acc: 'auriculars', icon: '🎧', txt: ['Auriculars + 100 diamants', 'Auriculares + 100 diamantes'] },
  { d: 30, gems: 150, char: 'estel', icon: '⭐', txt: ['Nova companya: Estel + 150 diamants', 'Nueva compañera: Estel + 150 diamantes'] },
  { d: 60, gems: 250, acc: 'coronafoc', icon: '👑', txt: ['Corona de foc + 250 diamants', 'Corona de fuego + 250 diamantes'] },
  { d: 100, gems: 500, icon: '🏆', txt: ['Títol de Llegenda + 500 diamants', 'Título de Leyenda + 500 diamantes'] }
];
function grantStreak() {
  const got = SRW.filter(r => P.streak >= r.d && !P.srw.includes(r.d));
  got.forEach(r => { P.srw.push(r.d); P.gems += r.gems; if (r.acc && !P.accOwned.includes(r.acc)) P.accOwned.push(r.acc); if (r.char && !P.owned.includes(r.char)) P.owned.push(r.char); });
  return got;
}
const dies = n => n === 1 ? L('dia', 'día') : L('dies', 'días');
function streakCard() {
  const s = streakNow(), next = SRW.find(r => !P.srw.includes(r.d));
  const dots = SRW.map(r => `<div class="srw ${P.srw.includes(r.d) ? 'got' : ''} ${next && next.d === r.d ? 'next' : ''}"><div class="sri">${r.icon}</div><span>${r.d} d</span></div>`).join('');
  return `<div class="scard"><div class="shead"><span class="sico">${ICON.flame}</span><div><b>${s ? L(`Ratxa de ${s} ${dies(s)}`, `Racha de ${s} ${dies(s)}`) : L('Encén la teva ratxa!', '¡Enciende tu racha!')}</b><small>${next ? L(`Et falten <b>${Math.max(0, next.d - s)} ${dies(next.d - s)}</b> per aconseguir: ${tx(next.txt)}`, `Te faltan <b>${Math.max(0, next.d - s)} ${dies(next.d - s)}</b> para conseguir: ${tx(next.txt)}`) : L('Has aconseguit tots els premis. Ets una llegenda!', '¡Has conseguido todos los premios! Eres una leyenda.')}</small></div></div>
    <div class="strack"><div class="sline"><div style="width:${(SRW.filter(r => P.srw.includes(r.d)).length) / (SRW.length - 1) * 100}%"></div></div>${dots}</div></div>`;
}

/* ---------- So, confeti i animacions ---------- */
// Sons: sfx.js (campanetes, reverberació i espurnes; es carrega abans que aquest fitxer)
const SFX = makeSFX(() => P && P.sound);
function confetti(n = 140) {
  if (REDUCED) return;
  const c = document.createElement('canvas'), dpr = devicePixelRatio || 1; c.className = 'confetti'; document.body.appendChild(c);
  const ctx = c.getContext('2d'), W = c.width = innerWidth * dpr, H = c.height = innerHeight * dpr, cols = ['#602B7A', '#FFC93C', '#5FD3B3', '#FF7AA8', '#36A9E1', '#FF9A3C'];
  const ps = [...Array(n)].map(() => ({ x: W / 2 + (Math.random() - .5) * W * .4, y: H * .38, vx: (Math.random() - .5) * 20 * dpr, vy: (-Math.random() * 17 - 5) * dpr, r: (4 + Math.random() * 5) * dpr, c: pick(cols), a: Math.random() * 6, va: (Math.random() - .5) * .3 }));
  let f = 0;
  (function loop() { ctx.clearRect(0, 0, W, H); ps.forEach(p => { p.vy += .5 * dpr; p.x += p.vx; p.y += p.vy; p.vx *= .99; p.a += p.va; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); ctx.restore(); }); if (++f < 160) requestAnimationFrame(loop); else c.remove(); })();
}
function sparkle(el, n = 14) {
  if (REDUCED || !el) return;
  const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  for (let i = 0; i < n; i++) {
    const s = document.createElement('i'), a = Math.PI * 2 * i / n + Math.random() * .4, d = 50 + Math.random() * 50;
    s.className = 'spark'; s.textContent = pick(['✦', '★', '•', '✧']);
    s.style.cssText = `left:${cx}px;top:${cy}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px;color:${pick(['#FFC93C', '#3CC46A', '#36A9E1', '#FF7AA8', '#8A4FB0'])}`;
    document.body.appendChild(s); setTimeout(() => s.remove(), 750);
  }
}
function floatTxt(el, txt, cls = '') {
  if (!el) return;
  const r = el.getBoundingClientRect(), s = document.createElement('div');
  s.className = 'floattxt ' + cls; s.innerHTML = txt; s.style.left = (r.left + r.width / 2) + 'px'; s.style.top = r.top + 'px';
  document.body.appendChild(s); setTimeout(() => s.remove(), 1300);
}
function comboBanner(n) {
  if (![3, 5, 10, 15, 20, 30].includes(n)) return;
  const d = document.createElement('div'); d.className = 'combobanner';
  d.innerHTML = `<i class="ci">${ICON.flame}</i> ${L(`Ratxa de ${n}!`, `¡Racha de ${n}!`)} <small>${n >= 10 ? L('Imparable!', '¡Imparable!') : L('Molt bé!', '¡Muy bien!')}</small>`;
  document.body.appendChild(d); setTimeout(() => d.remove(), 1500); SFX.boing();
}
const SAY = () => L(['Som-hi!', 'Tu pots!', 'Quina il·lusió!', 'Hola!', 'Una lliçó més?', 'Ets un crac!', 'Hehe, pessigolles!', 'Anem a aprendre!'], ['¡Vamos!', '¡Tú puedes!', '¡Qué ilusión!', '¡Hola!', '¿Una lección más?', '¡Eres un crack!', '¡Jeje, cosquillas!', '¡Vamos a aprender!']);
document.addEventListener('click', e => {
  const w = e.target.closest('.tapme'); if (!w) return;
  const c = w.querySelector('.char'); if (!c) return;
  c.classList.remove('jump'); void c.getBoundingClientRect(); c.classList.add('jump'); SFX.boing();
  floatTxt(w, pick(SAY()), 'say');
});
function revealNodes() {
  if (REDUCED || !('IntersectionObserver' in window)) { $$('.nwrap').forEach(n => n.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .2 });
  $$('.nwrap').forEach(n => io.observe(n));
}

/* ---------- Modals ---------- */
function modal(html, center) {
  closeModal();
  const d = document.createElement('div'); d.className = 'modal-bg' + (center ? ' center' : ''); d.innerHTML = html;
  d.addEventListener('click', e => { if (e.target === d && !center) closeModal(); });
  // totes les finestres es poden tancar amb la creu (menys les que esperen un pagament: .nox)
  const sh = d.querySelector('.sheet');
  if (sh && !sh.classList.contains('nox')) sh.insertAdjacentHTML('afterbegin', `<button class="mx" onclick="closeModal()" aria-label="${L('Tanca', 'Cierra')}">×</button>`);
  document.body.appendChild(d);
}
document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('.modal-bg .mx')) closeModal(); });
const closeModal = () => $$('.modal-bg').forEach(m => m.remove());
function ask(txt, yes, no, onYes) {
  modal(`<div class="sheet card"><p class="askt">${txt}</p><div class="row2"><button class="btn ghost" onclick="closeModal()">${no}</button><button class="btn red" id="askYes">${yes}</button></div></div>`, true);
  $('#askYes').onclick = () => { closeModal(); onYes(); };
}
function toast(t) { const d = document.createElement('div'); d.className = 'toast'; d.innerHTML = t; document.body.appendChild(d); setTimeout(() => d.classList.add('out'), 2300); setTimeout(() => d.remove(), 2700); }
const langPill = () => `<div class="langpill"><button class="${LANG === 'ca' ? 'on' : ''}" onclick="setLang('ca')">CAT</button><button class="${LANG === 'es' ? 'on' : ''}" onclick="setLang('es')">ES</button></div>`;

/* ---------- Navegació ---------- */
let LS = null, SP = null, AG = null, FLOW = [], VIEW = '', GAIN = null;
function go(v) {
  LS = null; stopSprint(); stopAgility(); closeModal();
  if (!P && v !== 'profiles') v = Object.keys(DB.profiles).length ? 'profiles' : 'onboard';
  if (v !== 'profiles' && v !== 'onboard' && appMismatch(P)) { LS = null; closeModal(); return appHandoff(); }
  if ((v === 'battles' || v === 'season') && !isPremium()) { premiumModal(v === 'battles' ? 'batalles' : 'temporada'); v = VIEW && VIEW !== v ? VIEW : 'home'; if (v === VIEW) return; }
  if ((v === 'battles' && classOff('batalles'))) { toast(L("El teu docent ha desactivat les batalles per a la classe.", 'Tu docente ha desactivado las batallas para la clase.')); v = 'train'; }
  VIEW = v;
  if (v !== 'onboard') setVariant(varOf(P));
  ({ home: renderHome, train: renderTrain, album: () => renderAlbum(), shop: renderShop, badges: () => renderAlbum('medals'), profile: renderProfile, profiles: renderProfiles, battles: () => renderBattles(), season: () => renderSeason(), league: () => renderLeague('w'), onboard: () => onb(0) }[v] || renderHome)();
  if (v !== 'home') window.scrollTo(0, 0);
  else { setTimeout(classeLink, 500); setTimeout(payReturn, 400); setTimeout(() => typeof lligaCheck === 'function' && lligaCheck(), 2500); }
}
const NAV = () => [['home', '🗺️', L('Camí', 'Camino')], ['train', '🎯', L('Entrena', 'Entrena')], ['album', '🎴', L('Àlbum', 'Álbum')], ['shop', '🛍️', L('Botiga', 'Tienda')], ['profile', '👤', L('Perfil', 'Perfil')]];
// a Numi Pro i Numi Ment, el xat amb en Numi és un botó més de la barra
const nav = t => `<nav class="nav">${NAV().map(([v, i, l]) => `<button class="${v === t ? 'on' : ''}" onclick="go('${v}')"><span class="ni">${i}</span><span>${l}</span></button>`).join('')}${VAR.chat ? `<button class="navxat" onclick="xatOpen()" aria-label="${L("Pregunta a en Numi (xat d'ajuda)", 'Pregunta a Numi (chat de ayuda)')}"><span class="ni">${charSVG('numi', 'happy')}</span><span>${L('Pregunta', 'Pregunta')}</span></button>` : ''}</nav>`;
const shell = (inner, tab) => `<div class="page">${topbar()}${inner}</div>${nav(tab)}`;
function topbar() {
  const s = streakNow();
  return `<header class="topbar"><button class="avatar" onclick="go('profiles')" title="${L("Canvia d'alumne", 'Cambiar de alumno')}">${meC('idle')}</button>
  <div class="chips"><span class="chip ${s ? 'fire' : 'off'}" id="chipFire"><i class="ci">${ICON.flame}</i>${s}</span><span class="chip gem" id="chipGem"><i class="ci">${ICON.gem}</i>${P.gems}</span><span class="chip lvl" id="chipLvl"><i class="ci">${ICON.bolt}</i>${lvlOf(P.xp)}</span></div></header>`;
}
const starsHTML = (n, cls = '') => `<span class="stars ${cls}">${[1, 2, 3].map(i => `<i class="${i <= n ? 'on' : ''}">★</i>`).join('')}</span>`;
function showGain() {
  if (!GAIN) return;
  const g = GAIN; GAIN = null;
  setTimeout(() => {
    if (g.gems) { const c = $('#chipGem'); if (c) { floatTxt(c, `+${g.gems} 💎`, 'gain'); c.classList.add('bump'); } }
    if (g.xp) { const c = $('#chipLvl'); if (c) { floatTxt(c, `+${g.xp} XP`, 'gain xp'); c.classList.add('bump'); } }
  }, 250);
}

/* ---------- Camí ---------- */
// Plans: gratuït = 1 lliçó nova al dia; Premium o escola = lliçons sense límit (diamants i cartes només a les 3 primeres), batalles i ruta de temporada
const isPremium = () => !!(P && (P.unlockAll || P.classe || P.pla === 'premium' || P.pla === 'escola'));
const dayMax = () => isPremium() ? Infinity : 1, dayReward = () => isPremium() ? 3 : 1;
function dayLessons() { if (!P.dayl || P.dayl.d !== today()) P.dayl = { d: today(), n: 0 }; return P.dayl; }
const dayCapped = () => !P.unlockAll && dayLessons().n >= dayMax();
function dayTxt() {
  const n = dayLessons().n, M = dayMax(), left = Math.max(0, dayReward() - n);
  return n >= M ? (M === 1 ? L("Avui ja has fet la lliçó del dia", 'Hoy ya has hecho la lección del día') : L(`Avui ja has fet les ${M} lliçons del dia`, `Hoy ya has hecho las ${M} lecciones del día`)) : M === 1 ? L("Lliçó d'avui: 0/1 · amb premi", 'Lección de hoy: 0/1 · con premio') : M === Infinity ? L(`Lliçons d'avui: ${n} · ${left ? `${left} amb premi` : 'ja sense diamants ni cartes'}`, `Lecciones de hoy: ${n} · ${left ? `${left} con premio` : 'ya sin diamantes ni cartas'}`) : L(`Lliçons d'avui: ${n}/${M} · ${left ? `${left} amb premi` : 'ja sense diamants ni cartes'}`, `Lecciones de hoy: ${n}/${M} · ${left ? `${left} con premio` : 'ya sin diamantes ni cartas'}`);
}
function premiumModal(what) {
  // títol segons el que ha tocat l'alumne. És informativa: els preus i la compra només surten a la pantalla de l'adult
  // (la llei de competència deslleial, art. 30, prohibeix exhortar directament els nens a comprar)
  const head = what === 'batalles' ? L('Les batalles són de Premium', 'Las batallas son de Premium') : what === 'temporada' ? L('La ruta de temporada és de Premium', 'La ruta de temporada es de Premium') : what === 'dia' ? L('Amb Premium, lliçons sense límit', 'Con Premium, lecciones sin límite') : what === 'xat' ? L("L'assistent amb IA és de Premium", 'El asistente con IA es de Premium') : `${VAR.name} Premium`;
  modal(`<div class="sheet card cent prem-sheet"><h3>${head}</h3>
    <ul class="prem"><li><span>📚</span><span>${L('<b>Lliçons sense límit</b>', '<b>Lecciones sin límite</b>')}</span></li>
      <li><span>⚔️</span><span>${L('<b>Batalles</b> de mates', '<b>Batallas</b> de mates')}</span></li>
      <li><span>🏆</span><span>${L('<b>Ruta de temporada</b> i cartes exclusives', '<b>Ruta de temporada</b> y cartas exclusivas')}</span></li>${VAR.chat ? `<li><span>💬</span><span>${L("<b>Assistent amb IA</b>: pistes quan t'encallis", '<b>Asistente con IA</b>: pistas cuando te atasques')}</span></li>` : ''}</ul>
    <p class="prem-note">${L('Premium el decideix i el contracta un adult.', 'Premium lo decide y lo contrata un adulto.')}</p>
    <div id="premplans"><button class="btn big gold" onclick="buyPremium()">${L('PER A UN ADULT', 'PARA UN ADULTO')} ›</button></div>
    ${P && P.code && !P.classe ? `<p class="prem-school">🏫 ${L(`Si la teva escola fa servir ${VAR.name}, ja el tens.`, `Si tu escuela usa ${VAR.name}, ya lo tienes.`)} <button class="link" onclick="closeModal();classeModal()">${L('Tinc un codi de classe', 'Tengo un código de clase')} ›</button></p>` : ''}
    <button class="btn big ghost" onclick="closeModal()">${L('ARA NO', 'AHORA NO')}</button></div>`, true);
  // si encara no es pot pagar des de l'app, en lloc dels plans surt el correu
  payCheck().then(ok => { const d = $('#premplans'); if (ok !== false || !d) return; d.outerHTML = `<p class="prem-school">${L('Un adult ens pot escriure a <b>hola@numimates.com</b> per activar-lo.', 'Un adulto nos puede escribir a <b>hola@numimates.com</b> para activarlo.')}</p>`; const n = $('#premnote'); if (n) n.remove(); });
}
let PAY_OK;
// Stripe en mode prova: els botons de pagament només surten si s'entra amb ?provapagament (per provar-ho sense que ho vegin les famílies)
const payTest = () => { try { return sessionStorage.getItem('numi-prova-pagament') === '1'; } catch (e) { return false; } };
(() => { try { if (new URLSearchParams(location.search).has('provapagament')) { sessionStorage.setItem('numi-prova-pagament', '1'); history.replaceState(null, '', location.pathname); } } catch (e) { } })();
async function payCheck() {
  if (PAY_OK !== undefined) return PAY_OK;
  try { const r = await fetch('/api/pay?a=info'); if (r.status === 503) return (PAY_OK = false); const j = await r.json(); if (j.mes) PAY_OK = j.mode === 'live' || payTest(); return j.mes ? PAY_OK : false; } catch (e) { return null; }
}
// Compra de Premium: la fa un adult a la pàgina de pagament de Stripe (l'app no veu mai la targeta).
// Premium és per a aquest perfil; el portal de Stripe (amb el correu de l'adult) serveix per canviar-lo o cancel·lar-lo.
const PLA_TXT = { mes: ['Mensual · 4,99 € al mes', 'Mensual · 4,99 € al mes'], any: ['Anual · 49 € a l\'any', 'Anual · 49 € al año'] };
let PREM_PLA = 'any';
function buyPremium(pla) {
  if (pla) PREM_PLA = pla === 'mes' ? 'mes' : 'any';
  if (!P || !P.code) { syncNow(); return toast(L('Primer cal guardar el perfil al núvol: connecta\'t a internet i torna-ho a provar.', 'Primero hay que guardar el perfil en la nube: conéctate a internet y vuelve a probarlo.')); }
  const pb = (k, t, pr, per, tag) => `<button class="${PREM_PLA === k ? 'sel' : ''} ${k === 'any' ? 'best' : ''}" onclick="buyPremium('${k}')">${tag ? `<i>${tag}</i>` : ''}<b>${t}</b><span>${pr}<small>/${per}</small></span></button>`;
  modal(`<div class="sheet card cent prem-sheet"><h3>${IS_MENT ? `${VAR.name} Premium` : '🔒 ' + L('Per a un adult', 'Para un adulto')}</h3>
    <p class="prem-sum">${IS_MENT ? L('Tots els jocs sense límit, cada dia.', 'Todos los juegos sin límite, cada día.') : `${L(`${VAR.name} Premium per a`, `${VAR.name} Premium para`)} <b>${esc(P.name)}</b>`}</p>
    <div class="prem-plans">${pb('mes', L('Mensual', 'Mensual'), '4,99 €', L('mes', 'mes'))}${pb('any', L('Anual', 'Anual'), '49 €', L('any', 'año'), L('Estalvia un 18 %', 'Ahorra un 18 %'))}</div>
    <p class="prem-note">${L('IVA inclòs · Es renova sol i es cancel·la quan vulgueu des de l\'app · Pagament amb targeta a Stripe', 'IVA incluido · Se renueva solo y se cancela cuando queráis desde la app · Pago con tarjeta en Stripe')}</p>
    <label class="prem-ok"><input type="checkbox" id="premok" onchange="$('#premgo').disabled=!this.checked"> <span>${IS_MENT ? L("Sóc major d'edat i accepto les", 'Soy mayor de edad y acepto las') : L('Sóc el pare, la mare o el tutor legal i accepto les', 'Soy el padre, la madre o el tutor legal y acepto las')} <a href="https://numimates.com/condicions?l=${LANG}" target="_blank" rel="noopener">${L('condicions de contractació', 'condiciones de contratación')}</a>.</span></label>
    <p class="err" id="premerr"></p>
    <button class="btn big gold" id="premgo" disabled onclick="payGo(PREM_PLA)">${L('CONTINUA AL PAGAMENT', 'CONTINUAR AL PAGO')}</button>
    <button class="btn ghost big" onclick="closeModal()">${L('ARA NO', 'AHORA NO')}</button></div>`, true);
}
async function payGo(pla) {
  const b = $('#premgo'), e = $('#premerr'); if (!b || b.disabled) return;
  b.disabled = true; b.textContent = L('UN MOMENT…', 'UN MOMENTO…'); e.textContent = '';
  try {
    const r = await api('pay?a=checkout', { code: P.code, pla, lang: LANG, prova: payTest() });
    if (r.url && /^https:\/\/checkout\.stripe\.com\//.test(r.url)) { try { sessionStorage.setItem('numi-pay-code', P.code); } catch (x) { } location.href = r.url; return; }
    e.textContent = r.error === 'escola' ? L('Aquest perfil és d\'una classe: ja té Premium amb l\'escola.', 'Este perfil es de una clase: ya tiene Premium con la escuela.')
      : r.error === 'ja' ? L('Aquest perfil ja té Premium.', 'Este perfil ya tiene Premium.')
      : r.status === 429 ? ERR('massa') : r.status === 503 ? L('Encara no es pot pagar des de l\'app. Escriviu-nos a hola@numimates.com.', 'Todavía no se puede pagar desde la app. Escribidnos a hola@numimates.com.') : ERR();
  } catch (x) { e.textContent = ERR(); }
  b.disabled = false; b.textContent = L('CONTINUA AL PAGAMENT', 'CONTINUAR AL PAGO');
}
// en tornar de Stripe (?premium=ok|cancel): Stripe avisa el servidor pel seu compte; aquí només esperem que arribi
(() => { try { const q = new URLSearchParams(location.search).get('premium'); if (q === 'ok' || q === 'cancel') { sessionStorage.setItem('numi-pay', q); history.replaceState(null, '', location.pathname); } } catch (e) { } })();
async function payReturn() {
  let q = null, who = null; try { q = sessionStorage.getItem('numi-pay'); who = sessionStorage.getItem('numi-pay-code'); } catch (e) { }
  if (!q || !P || !P.code || VIEW !== 'home' || $('.modal-bg')) return;
  try { sessionStorage.removeItem('numi-pay'); } catch (e) { }
  if (q === 'cancel') return toast(L('Pagament cancel·lat: no s\'ha cobrat res.', 'Pago cancelado: no se ha cobrado nada.'));
  if (who && who !== P.code) return;
  modal(`<div class="sheet card cent nox"><div class="mchar">${meC('happy')}</div><h3>${L('Gràcies!', '¡Gracias!')}</h3><p id="paymsg">${L('Estem activant Premium…', 'Estamos activando Premium…')}</p></div>`, true);
  for (let i = 0; i < 10 && P.pla !== 'premium'; i++) { await new Promise(r => setTimeout(r, 2500)); await pull(); }
  closeModal();
  if (P.pla === 'premium') {
    SFX.win(); renderHome();
    modal(`<div class="sheet card cent"><div class="mchar tapme">${meC('happy')}</div><h3>${L(`Ja tens ${VAR.name} Premium!`, `¡Ya tienes ${VAR.name} Premium!`)}</h3>
      <p>${L('Ara pots fer totes les lliçons que vulguis, jugar batalles de mates i seguir la ruta de temporada.', 'Ahora puedes hacer todas las lecciones que quieras, jugar batallas de mates y seguir la ruta de temporada.')}</p>
      <button class="btn big" onclick="closeModal()">${L('SOM-HI!', '¡VAMOS!')}</button></div>`, true);
  } else {
    modal(`<div class="sheet card cent"><h3>${L('Pagament rebut', 'Pago recibido')}</h3><p>${L('Premium s\'activarà en uns minuts. Si d\'aquí a una estona encara no el teniu, escriviu-nos a <b>hola@numimates.com</b>.', 'Premium se activará en unos minutos. Si dentro de un rato todavía no lo tenéis, escribidnos a <b>hola@numimates.com</b>.')}</p>
      <button class="btn big" onclick="closeModal()">${L('ENTESOS', 'ENTENDIDO')}</button></div>`, true);
  }
}
// secció del perfil: què té aquest perfil i on es gestiona
const dayLong = d => new Date(d + 'T12:00').toLocaleDateString(LANG === 'es' ? 'es-ES' : 'ca-ES', { day: 'numeric', month: 'long' });
function premiumBox() {
  if (P.classe) return '';
  if (P.pla === 'premium') {
    const S = P.sub, per = S && (S.periode === 'any' ? L('Anual', 'Anual') : L('Mensual', 'Mensual'));
    const estat = !S ? (IS_MENT ? L('Tots els jocs sense límit i reptes amb amics.', 'Todos los juegos sin límite y retos con amigos.') : L('Lliçons sense límit, batalles i ruta de temporada.', 'Lecciones sin límite, batallas y ruta de temporada.'))
      : S.cancel ? L(`Cancel·lada: no es cobrarà res més. Tens Premium fins al ${dayLong(S.renova)} i després passes al pla gratuït.`, `Cancelada: no se cobrará nada más. Tienes Premium hasta el ${dayLong(S.renova)} y después pasas al plan gratuito.`)
      : S.pendent ? L('No s\'ha pogut cobrar la renovació: revisa la targeta.', 'No se ha podido cobrar la renovación: revisa la tarjeta.')
      : L(`${per} · es renova el ${dayLong(S.renova)}.`, `${per} · se renueva el ${dayLong(S.renova)}.`);
    return `<div class="prem-box on"><b>⭐ ${VAR.name} Premium</b><span>${estat}</span>
      ${S ? (S.cancel ? `<button class="btn sm gold" onclick="subResume()">${L('REACTIVA LA SUBSCRIPCIÓ', 'REACTIVAR LA SUSCRIPCIÓN')}</button>`
        : `<button class="btn sm ghost redt" onclick="subCancel(1)">${L('CANCEL·LA LA SUBSCRIPCIÓ', 'CANCELAR LA SUSCRIPCIÓN')}</button>`) : ''}</div>`;
  }
  return `<div class="prem-box"><b>${L('Pla gratuït', 'Plan gratuito')}</b><span>${L('1 lliçó nova al dia. Amb Premium, sense límit, amb batalles i ruta de temporada.', '1 lección nueva al día. Con Premium, sin límite, con batallas y ruta de temporada.')}</span>
    <button class="btn sm gold" onclick="premiumModal()">${L('QUÈ ÉS PREMIUM?', '¿QUÉ ES PREMIUM?')}</button></div>`;
}
// Cancel·lar des de l'app, amb doble confirmació: 1) què passarà; 2) confirmació d'adult. Es cancel·la al final del període pagat.
function subCancel(step) {
  const S = P.sub; if (!S) return;
  if (step === 1) return modal(`<div class="sheet card cent"><h3>${L('Vols cancel·lar Premium?', '¿Quieres cancelar Premium?')}</h3>
    <p>${L(`No es cobrarà cap més quota. Tens Premium fins al <b>${dayLong(S.renova)}</b> i després passes al pla gratuït sense perdre cap progrés.`, `No se cobrará ninguna cuota más. Tienes Premium hasta el <b>${dayLong(S.renova)}</b> y después pasas al plan gratuito sin perder ningún progreso.`)}</p>
    <button class="btn big" onclick="closeModal()">${L('NO, EL MANTINC', 'NO, LO MANTENGO')}</button>
    <button class="btn ghost big redt" onclick="subCancel(2)">${L('SÍ, VULL CANCEL·LAR', 'SÍ, QUIERO CANCELAR')}</button></div>`, true);
  modal(`<div class="sheet card cent prem-sheet"><h3>${L('Confirma la cancel·lació', 'Confirma la cancelación')}</h3>
    <p class="prem-sum">${VAR.name} Premium · <b>${esc(P.name)}</b></p>
    <label class="prem-ok"><input type="checkbox" onchange="$('#subgo').disabled=!this.checked"> <span>${L('Sóc el pare, la mare o el tutor legal i vull cancel·lar la subscripció.', 'Soy el padre, la madre o el tutor legal y quiero cancelar la suscripción.')}</span></label>
    <p class="err" id="suberr"></p>
    <button class="btn big red" id="subgo" disabled onclick="subDo(false)">${L('CANCEL·LA LA SUBSCRIPCIÓ', 'CANCELAR LA SUSCRIPCIÓN')}</button>
    <button class="btn ghost big" onclick="closeModal()">${L('TORNA', 'VOLVER')}</button></div>`, true);
}
function subResume() { subDo(true); }
async function subDo(resume) {
  const b = $('#subgo'); if (b) { b.disabled = true; b.textContent = L('UN MOMENT…', 'UN MOMENTO…'); }
  try {
    const r = await api(resume ? 'pay?a=resume' : 'pay?a=cancel', { code: P.code });
    if (r.ok) {
      P.sub = r.sub || null; saveLocal(); closeModal(); renderProfile();
      return toast(resume ? L('Subscripció reactivada. Continues amb Premium!', '¡Suscripción reactivada. Sigues con Premium!')
        : L(`Cancel·lada a Stripe: no es farà cap més cobrament. Tens Premium fins al ${dayLong(P.sub ? P.sub.renova : today())}.`, `Cancelada en Stripe: no se hará ningún cobro más. Tienes Premium hasta el ${dayLong(P.sub ? P.sub.renova : today())}.`));
    }
    const m = r.status === 429 ? ERR('massa') : r.status === 502 ? (resume ? L('Stripe no ha confirmat la reactivació. Torna-ho a provar.', 'Stripe no ha confirmado la reactivación. Vuelve a intentarlo.') : L('Stripe no ha confirmat la cancel·lació, així que encara no està cancel·lada. Torna-ho a provar o escriu a hola@numimates.com.', 'Stripe no ha confirmado la cancelación, así que todavía no está cancelada. Vuelve a intentarlo o escribe a hola@numimates.com.')) : ERR();
    if ($('#suberr')) $('#suberr').textContent = m; else toast(m);
  } catch (e) { if ($('#suberr')) $('#suberr').textContent = ERR(); else toast(ERR()); }
  if (b) { b.disabled = false; b.textContent = L('CANCEL·LA LA SUBSCRIPCIÓ', 'CANCELAR LA SUSCRIPCIÓN'); }
}
function scrDayDone() {
  const M = dayMax(), free = !isPremium();
  modal(`<div class="sheet card cent"><div class="mchar tapme">${meC('happy')}</div>
    <h3>${M === 1 ? L("Ja has fet la lliçó d'avui!", '¡Ya has hecho la lección de hoy!') : L(`Ja has fet les ${M} lliçons d'avui!`, `¡Ya has hecho las ${M} lecciones de hoy!`)}</h3>
    <p>${L('Demà, més. Ara pots entrenar o repassar.', 'Mañana, más. Ahora puedes entrenar o repasar.')}</p>
    <button class="btn big" onclick="closeModal();go('train')">${L('ANEM A ENTRENAR', 'VAMOS A ENTRENAR')}</button><button class="btn ghost big" onclick="closeModal()">${L('TORNA', 'VOLVER')}</button>
    ${free ? `<button class="link" onclick="premiumModal('dia')">⭐ ${L('Amb Premium, sense límit', 'Con Premium, sin límite')}</button>` : ''}</div>`, true);
}
function goalCard() {
  dailyRoll();
  const x = P.daily.xp, g = P.goal, pc = Math.min(100, Math.round(x / g * 100)), dl = dayLessons().n;
  const msg = x >= g ? L("Objectiu d'avui complert! Ets un crac.", '¡Objetivo de hoy cumplido! Eres un crack.') : x === 0 ? L(`Hola, ${esc(P.name)}! Fem una lliçó?`, `¡Hola, ${esc(P.name)}! ¿Hacemos una lección?`) : L(`Et falten ${g - x} XP per a l'objectiu d'avui.`, `Te faltan ${g - x} XP para el objetivo de hoy.`);
  return `<div class="goal"><div class="gchar tapme">${meC(x >= g ? 'happy' : 'idle')}</div><div class="gbody"><div class="gmsg">${msg}</div><div class="gbar"><div style="width:${pc}%"></div></div><div class="gnum">${x} / ${g} ${L('XP avui', 'XP hoy')}</div><div class="gday">${[...Array(Math.min(dayMax(), dayReward())).keys()].map(i => `<i class="${i < dl ? 'on' : ''} ${i < dayReward() ? 'rw' : ''}">${i < dayReward() ? '💎' : ''}</i>`).join('')}<span>${dayTxt()}</span></div></div></div>`;
}
function testCard() {
  const t = testInfo(); if (!t.due) return '';
  return `<button class="testcard" onclick="startEvolution()"><span class="tci">🧪</span><span><b>${L("Toca la prova d'evolució!", '¡Toca la prueba de evolución!')}</b><small>${L('12 preguntes per veure quant has millorat. +20 💎', '12 preguntas para ver cuánto has mejorado. +20 💎')}</small></span><span class="go">›</span></button>`;
}
const OFF = [0, -54, -80, -54, 0, 54, 80, 54, 0, -54, -80, -54];
const DECO = ['+', '×', '÷', '=', '½', '%', '7', '3', '△', '○', '□', '9'];
function unitHTML(u, ui) {
  const open = unitOpen(ui), st = prog(ui).stars, cur = currentNode();
  // Les unitats ja superades es pleguen (si no és l'actual) perquè el mapa no sigui infinit
  const doneN = st.slice(0, REP(u)).filter(s => s >= PASS).length, passed = st[REP(u)] >= PASS, folded = open && !UNFOLD.has(u.id) && !(cur ? cur[0] === ui : ui === 0) && JUST_OPEN !== u.id;
  const R_ = REP(u), nodes = ORD(u).map((li, pos) => {
    const isR = li === R_, done = st[li] > 0, can = lessonOpen(ui, li), isCur = cur && cur[0] === ui && cur[1] === li;
    const cls = (!can ? 'locked' : isCur ? 'cur' : done ? (st[li] === 3 ? 'gold' : 'done') : 'open') + (done && !isR && isDue(ui, li) ? ' rust' : '');
    const icon = !can ? ICON.lock : isR ? (done ? ICON.trophy : ICON.gift) : done ? (st[li] === 3 ? ICON.crown : ICON.check) : ICON.star;
    return `${li === R_ ? `<div class="pdiv gatediv"><span>🏰 ${L('LA PORTA DEL CAVALLER', 'LA PUERTA DEL CABALLERO')}</span></div>` : ''}${isBonus(u, li) && ORD(u)[ORD(u).indexOf(R_) + 1] === li ? `<div class="pdiv bonusdiv"><span>⭐ ${L('BONUS · RESTA DEL NIVELL 3', 'BONUS · RESTO DEL NIVEL 3')}</span></div>` : ''}<div class="nwrap ${isBonus(u, li) ? 'bonusn' : ''}" style="--x:${OFF[pos % OFF.length]}px;transition-delay:${Math.min(pos, 12) * 50}ms">
      ${isCur ? `<div class="tip">${isR ? L('LA PORTA!', '¡LA PUERTA!') : L('COMENÇA', 'EMPIEZA')}</div>` : ''}
      <button class="node ${cls} ${isR ? 'rep' : ''}" onclick="openLesson(${ui},${li})" aria-label="${isR ? L('Repte final', 'Reto final') : L('Lliçó ', 'Lección ') + (li + 1)}"><i class="nico">${icon}</i></button>
      ${done && !isR ? starsHTML(st[li], 'mini') : ''}</div>${!isR && !isBonus(u, li) && u.lessons[li + 1] && (u.lessons[li + 1].tier || 1) !== (u.lessons[li].tier || 1) ? `<div class="pdiv"><span>${L('NIVELL', 'NIVEL')} ${u.lessons[li + 1].tier}</span></div>` : ''}`;
  }).join('');
  const deco = [0, 1, 2, 3].map(k => `<span class="deco" style="${k % 2 ? 'left' : 'right'}:${6 + (k * 7 + ui * 5) % 20}%;top:${14 + k * 22}%;animation-delay:${k * .7}s">${DECO[(ui * 3 + k) % DECO.length]}</span>`).join('');
  return `<section class="unit ${open ? '' : 'closed'}" style="--uc:${u.color}">
    <div class="ubanner"><div class="utext"><div class="ukick">${L('UNITAT', 'UNIDAD')} ${ui + 1}${(P.crowns || []).includes(u.id) ? ` · 👑 ${L('DOMINADA', 'DOMINADA')}` : ''}</div><h2>${tx(u.title)}</h2><div class="usents">${unitSents(u).map(k => `<span title="${tx(SENT[k])}">${SENT[k][2]} ${tx(SENT[k]).replace(/^Sentit |^Sentido /, '').replace(/ i pensament computacional| y pensamiento computacional/, '')}</span>`).join('')}</div><p>${open ? tx(u.desc) : L('🔒 Supera el repte de la unitat anterior per obrir-la.', '🔒 Supera el reto de la unidad anterior para abrirla.')}</p>${open ? `<button class="learnbtn" onclick="showLearn(${ui})">📖 ${L('Aprèn la teoria', 'Aprende la teoría')}${(P.learned || {})[u.id] && P.learned[u.id] !== 'skip' ? ' ✓' : ''}</button>${IS_PRO && THEORY[u.id] ? `<button class="learnbtn fx" onclick="fitxa(P.course,${ui})">📄 ${L('Fitxa', 'Ficha')}</button>` : ''}` : ''}</div><div class="uguide tapme">${charSVG(u.guide, 'idle')}</div></div>
    ${!open ? '' : folded ? `<button class="unfold" onclick="UNFOLD.add('${u.id}');renderHome()">${(passed ? L(`✅ Porta superada · ${doneN}/${REP(u)} lliçons · Mostra-les`, `✅ Puerta superada · ${doneN}/${REP(u)} lecciones · Mostrarlas`) : L(`${doneN}/${REP(u)} lliçons fetes · Mostra-les ▾`, `${doneN}/${REP(u)} lecciones hechas · Mostrarlas ▾`))}</button>` : `<div class="path">${deco}${nodes}<div class="pguide tapme ${ui % 2 ? 'l' : ''}">${charSVG(u.guide, open ? 'happy' : 'idle')}</div></div>`}${open ? trailHTML(ui) : ''}</section>`;
}
// Camí que surt de la porta del Cavaller cap a la unitat següent (o el nivell següent)
function trailHTML(ui) {
  const us = UNITS_(), u = us[ui], passed = (prog(ui).stars[REP(u)] || 0) >= PASS, nx = us[ui + 1];
  const to = nx ? L(`la unitat ${ui + 2}: ${tx(nx.title)}`, `la unidad ${ui + 2}: ${tx(nx.title)}`) : L('el nivell següent', 'el nivel siguiente');
  return `<div class="trail ${passed ? 'open' : ''} ${JUST_OPEN === u.id ? 'fresh' : ''}"><i class="tsteps"></i><span>${passed ? `🏰 ${L('Camí obert cap a', 'Camino abierto hacia')} ${to}` : `🔒 ${L('La porta del Cavaller obre el camí cap a', 'La puerta del Caballero abre el camino hacia')} ${to}`}</span></div>`;
}
let JUST_OPEN = null; const UNFOLD = new Set();
const gateMissTitles = u => { const ex = (P.exams || {})[u.id]; return [...new Set((ex?.miss || []).map(s => (u.lessons.find(l => (l.tier || 1) <= 2 && l.sk.includes(s)) || {}).t).filter(Boolean))].slice(0, 4).map(tx); };
function scrGatePrep(ui) {
  const u = UNITS_()[ui], ts = gateMissTitles(u);
  app.innerHTML = `<div class="scr"><div class="rchar big tapme">${charSVG('cavaller', 'happy')}</div><h1>${L('Repassem-ho junts?', '¿Lo repasamos juntos?')}</h1>
    <p class="sub">${L('Abans de tornar a la porta, practica el que t\'ha costat més:', 'Antes de volver a la puerta, practica lo que más te ha costado:')}</p>
    ${ts.length ? `<ul class="preplist">${ts.map(t => `<li>${t}</li>`).join('')}</ul>` : ''}
    <button class="btn big" onclick="startGatePrep(${ui})">${L('REPASSA ARA (+8 💎)', 'REPASA AHORA (+8 💎)')}</button>
    <button class="btn ghost big" onclick="flowNext()">${L('MÉS TARD', 'MÁS TARDE')}</button></div>`;
}
function startGatePrep(ui) {
  const u = UNITS_()[ui], ex = (P.exams || {})[u.id]; if (!ex || !ex.miss || !ex.miss.length) return;
  if (ex.prep) return toast(L('Ja has fet aquest repàs. Ara, a la porta!', 'Ya has hecho este repaso. ¡Ahora, a la puerta!'));
  ex.prep = true; FLOW = [];
  const lv = s => (u.lessons.find(l => (l.tier || 1) <= 2 && l.sk.includes(s)) || u.lessons[0]).L, plan = [];
  for (let i = 0; i < 8; i++) { const s = ex.miss[i % ex.miss.length]; plan.push([s, lv(s)]); }
  startRun({ mode: 'prep', ui, li: null, plan: shuffle(plan), color: u.color });
}
function scrGate(ui) {
  const us = UNITS_(), u = us[ui], nx = us[ui + 1];
  app.innerHTML = `<div class="scr gatescr"><div class="burst gold"></div>
    <div class="door"><div class="dpath">${nx ? `<b>${L('UNITAT', 'UNIDAD')} ${ui + 2}</b><span>${tx(nx.title)}</span>` : `<b>${L('NIVELL NOU', 'NIVEL NUEVO')}</b>`}</div><div class="dl"></div><div class="dr"></div></div>
    <div class="rchar tapme knightc">${charSVG('cavaller', 'happy')}</div>
    <h1>${L('La porta s\'obre!', '¡La puerta se abre!')}</h1>
    <p class="sub">${nx ? L(`El Cavaller et deixa passar: s'ha obert el camí cap a <b>${tx(nx.title)}</b>. I la resta del nivell 3 de «${tx(u.title)}» ja és teva per guanyar estrelles de bonus!`, `El Caballero te deja pasar: se ha abierto el camino hacia <b>${tx(nx.title)}</b>. ¡Y el resto del nivel 3 de «${tx(u.title)}» ya es tuyo para ganar estrellas de bonus!`) : L("Has superat l'última porta d'aquest nivell!", '¡Has superado la última puerta de este nivel!')}</p>
    <button class="btn big" onclick="JUST_OPEN='${u.id}';flowNext()">${L('ANEM-HI!', '¡VAMOS!')}</button></div>`;
  SFX.win(); setTimeout(() => confetti(160), 900);
}
function renderHome() {
  VIEW = 'home';
  const c = CUR();
  app.innerHTML = shell(`<button class="course" onclick="pickCourse()"><span class="cem">${c.emoji}</span><span><small>${L('Estàs fent', 'Estás haciendo')}</small><b>${tx(c.long)}</b></span><span class="cch">${L('Canvia', 'Cambia')} ▾</span></button>
    ${seasonCard()}${IS_PRO && typeof examCard === 'function' ? examCard() : ''}${testCard()}${reviewCard()}${recoBox()}${schoolCard()}${goalCard()}${missionsCard()}${streakCard()}${UNITS_().map(unitHTML).join('')}
    <div class="theend">${P.course < COURSES.length - 1 ? L(`Quan acabis ${tx(c.long)}, t'espera <b>${tx(COURSES[P.course + 1].long)}</b>! 🚀`, `Cuando acabes ${tx(c.long)}, ¡te espera <b>${tx(COURSES[P.course + 1].long)}</b>! 🚀`) : L('Has arribat a l\'últim nivell! 🎓', '¡Has llegado al último nivel! 🎓')}</div>`, 'home');
  revealNodes(); showGain();
  if (JUST_OPEN) { const t = $('.trail.fresh'); if (t) setTimeout(() => t.scrollIntoView({ block: 'center', behavior: 'smooth' }), 80); JUST_OPEN = null; return; }
  const n = $('.node.cur'); if (n) setTimeout(() => n.scrollIntoView({ block: 'center', behavior: 'smooth' }), 60);
}
const courseOpen = ci => P.unlockAll || ci <= P.maxCourse;
function pickCourse() {
  modal(`<div class="sheet"><h3>${L('Tria el nivell', 'Elige el nivel')}</h3><p>${L('Pots repassar els nivells de sota quan vulguis. Els de sobre s\'obren quan acabes el nivell anterior.', 'Puedes repasar los niveles de abajo cuando quieras. Los de arriba se abren cuando acabas el nivel anterior.')}</p><div class="cgrid">${COURSES.map((c, i) => { if (!VAR.courses.includes(i) && i !== P.course) return '';
    const done = c.units.filter(u => udone(P, u)).length, open = courseOpen(i);
    return `<button class="cbtn ${i === P.course ? 'on' : ''} ${open ? '' : 'locked'}" onclick="setCourse(${i})"><span class="cem">${open ? c.emoji : '🔒'}</span><b>${L('Nivell', 'Nivel')} ${c.n}</b><small>${open ? `${done}/${c.units.length} ${L('unitats', 'unidades')}` : L('Tancat', 'Cerrado')}</small></button>`;
  }).join('')}</div></div>`);
}
function setCourse(i) { if (!courseOpen(i)) { SFX.ko(); toast(L(`🔒 Primer acaba el nivell ${i}.`, `🔒 Primero acaba el nivel ${i}.`)); return; } P.course = i; save(); closeModal(); renderHome(); window.scrollTo(0, 0); }
function openLesson(ui, li) {
  if (!lessonOpen(ui, li)) { toast(li === 0 ? L('🔒 Primer supera el repte de la unitat anterior.', '🔒 Primero supera el reto de la unidad anterior.') : (isBonus(UNITS_()[ui], li) ? L("⭐ La resta del nivell 3 és de bonus: s'obre quan superes la porta del Cavaller.", '⭐ El resto del nivel 3 es de bonus: se abre cuando superas la puerta del Caballero.') : li === REP(UNITS_()[ui]) ? L('🔒 La porta s\'obre quan acabes les 3 primeres lliçons del nivell 3 (2 estrelles a cada lliçó).', '🔒 La puerta se abre cuando acabas las 3 primeras lecciones del nivel 3 (2 estrellas en cada lección).') : prog(ui).stars[ORD(UNITS_()[ui])[ORD(UNITS_()[ui]).indexOf(li) - 1]] ? L('🔒 Necessites 2 estrelles a la lliçó anterior (màxim 2 errors).', '🔒 Necesitas 2 estrellas en la lección anterior (máximo 2 errores).') : L('🔒 Primer fes la lliçó anterior.', '🔒 Primero haz la lección anterior.'))); SFX.ko(); return; }
  const u = UNITS_()[ui], isR = li === REP(u), st = prog(ui).stars[li];
  if (!isR && dayCapped()) return scrDayDone();
  // la primera vegada que s'entra a la unitat, primer una mica de teoria
  if (li === ORD(u)[0] && !(P.learned || {})[u.id]) return showLearn(ui, () => { go('home'); openLesson(ui, li); });
  modal(`<div class="sheet" style="--uc:${u.color}"><div class="sk">${tx(CUR().name).toUpperCase()} · ${L('UNITAT', 'UNIDAD')} ${ui + 1} · ${isR ? L('PROVA FINAL', 'PRUEBA FINAL') : (isBonus(u, li) ? '⭐ BONUS · ' : '') + L('NIVELL ', 'NIVEL ') + (u.lessons[li].tier || 1) + ' · ' + L('LLIÇÓ ', 'LECCIÓN ') + (li % 10 + 1) + ' / 10'}</div>
    <h3>${isR ? L('🏰 La porta del Cavaller', '🏰 La puerta del Caballero') : tx(u.lessons[li].t)}</h3>
    <p>${isR ? L("El Cavaller del Codi vigila la porta de la unitat següent. Et farà 12 enigmes de tot el que has practicat: treu més d'un 7 i s'obrirà. Aquí no hi ha segones oportunitats… però la pots tornar a provar sempre que vulguis!", 'El Caballero del Código vigila la puerta de la unidad siguiente. Te hará 12 enigmas de todo lo que has practicado: saca más de un 7 y se abrirá. Aquí no hay segundas oportunidades… ¡pero puedes volver a intentarlo siempre que quieras!') : L("8 exercicis. Si te n'equivoques algun, el tornaràs a practicar al final.", '8 ejercicios. Si fallas alguno, lo volverás a practicar al final.')}</p>
    ${!isR ? `<p class="dayinfo">${dayTxt()}</p>` : ''}${st ? `<div class="sstars">${starsHTML(st)}</div>` : ''}${isR && st < PASS && (P.exams || {})[u.id]?.miss?.length && !P.exams[u.id].prep ? `<button class="btn ghost big" onclick="closeModal();startGatePrep(${ui})">🔁 ${L('Primer repassa el que et va costar (+8 💎)', 'Primero repasa lo que te costó (+8 💎)')}</button>` : ''}
    <button class="btn big" style="--c:${u.color}" onclick="closeModal();startLesson(${ui},${li})">${st ? L('REPETEIX', 'REPITE') : L('COMENÇA', 'EMPIEZA')}</button></div>`);
}

/* ---------- Motor de lliçons ---------- */
function genEx(sk, lv, seen, mix) {
  const [name, arg] = sk.split(':'); let e;
  for (let t = 0; t < 10; t++) { e = EX[name](lv, arg); if (mix) e = remix(e); e.sk = sk; e.L = lv; const key = e.q + (e.vis || '') + (e.items || '') + (e.fixed || '') + (e.need || ''); if (!seen.has(key)) { seen.add(key); break; } }
  return e;
}
function startLesson(ui, li) {
  const u = UNITS_()[ui]; let plan = [];
  if (li === REP(u)) {
    // La porta del Cavaller: examen camuflat amb 8 preguntes del tema i 4 d'activitats visuals, sense segones oportunitats
    const ls = preGate(u).map(i => u.lessons[i]), lv = sk => (ls.find(l => l.tier === 2 && l.sk.includes(sk)) || ls.find(l => l.sk.includes(sk))).L;
    const core = shuffle([...new Set(ls.filter(l => !l.vis).flatMap(l => l.sk).filter(s => !/^v\./.test(s)))]), vis = shuffle([...new Set(ls.flatMap(l => l.sk).filter(s => /^v\./.test(s)))]);
    const miss = shuffle(((P.exams || {})[u.id]?.miss || []).filter(s => ls.some(l => l.sk.includes(s)))).slice(0, 6);
    miss.forEach(s => plan.push([s, lv(s)]));
    let ci = 0, vi = 0;
    while (plan.length < 12) { const s = vis.length && plan.filter(p => /^v\./.test(p[0])).length < 4 && (plan.length >= 8 || Math.random() < .35) ? vis[vi++ % vis.length] : core[ci++ % core.length]; plan.push([s, lv(s)]); }
    return startRun({ mode: 'repte', exam: true, ui, li, plan: shuffle(plan), review: {}, color: u.color });
  }
  else { const l = u.lessons[li]; for (let i = 0; i < 8; i++) plan.push([l.sk[i % l.sk.length], l.L]); }
  plan = shuffle(plan);
  const review = {}, old = trainPool().filter(([s]) => !u.lessons.some(l => l.sk.includes(s)));
  if (li !== REP(u) && old.length) { const k = ri(1, plan.length - 2); plan[k] = pick(old); review[k] = true; }
  startRun({ mode: li === REP(u) ? 'repte' : 'lesson', ui, li, plan, review, color: u.color });
}
function trainPool(ui) {
  const pool = [];
  UNITS_().forEach((u, i) => {
    if ((ui != null && i !== ui) || !unitOpen(i)) return;
    const st = prog(i).stars;
    u.lessons.forEach((l, li) => { if (st[li] > 0 || P.unlockAll || P.course < P.baseCourse || i < (P.skip[CUR().id] || 0)) l.sk.forEach(s => pool.push([s, l.L])); });
  });
  return pool;
}
function startTrain(ui) {
  const pool = trainPool(ui);
  if (!pool.length) { toast(L('Primer fes alguna lliçó del camí!', '¡Primero haz alguna lección del camino!')); return; }
  const w = pool.map(([s]) => { const [c, t] = P.stats.sk[s] || [0, 0]; return 1 + 4 * (1 - (c + 1) / (t + 2)); });
  const sum = w.reduce((a, b) => a + b, 0), plan = [];
  for (let i = 0; i < 8; i++) { let r = Math.random() * sum, j = 0; while (j < w.length - 1 && r > w[j]) { r -= w[j]; j++; } plan.push(pool[j]); }
  startRun({ mode: 'train', ui: ui ?? null, li: null, plan, color: ui != null ? UNITS_()[ui].color : '#602B7A' });
}
function startRun(o) {
  closeModal();
  const seen = new Set();
  const mix = !['place', 'evo'].includes(o.mode);
  LS = { ...o, seen, mix, queue: o.plan.map(([s, lv], i) => { const e = genEx(s, lv, seen, mix); if (o.review && o.review[i]) e.review = true; return e; }), total: o.plan.length, done: 0, miss: 0, combo: 0, maxCombo: 0, gold: 0, t0: Date.now(), res: [] };
  if (mix && !o.exam && o.plan.length >= 6) { const g = ri(2, o.plan.length - 1); LS.queue[g].gold = true; }
  LS.eres = []; LS.emiss = [];
  nextEx();
}
function nextEx() {
  if (LS.done >= LS.total) return LS.mode === 'place' ? finishPlacement() : LS.mode === 'evo' ? finishEvolution() : LS.mode === 'battle' ? finishBattle() : finishRun();
  LS.cur = LS.queue.shift(); LS.sel = null; LS.input = ''; LS.order = []; LS.gsel = new Set(); LS.state = 'ask';
  renderLesson();
}
function renderLesson() {
  const e = LS.cur, quiet = LS.mode === 'place' || LS.mode === 'evo';
  const tag = LS.mode === 'place' ? L('🧭 Prova de nivell · si no ho saps, no passa res!', '🧭 Prueba de nivel · si no lo sabes, ¡no pasa nada!') : LS.mode === 'evo' ? L("🧪 Prova d'evolució · fes-ho tan bé com puguis!", '🧪 Prueba de evolución · ¡hazlo lo mejor que puedas!') : '';
  app.innerHTML = `<div class="lesson ${e.gold ? 'isgold' : ''}" style="--uc:${LS.color || '#602B7A'}">
    <div class="l-top"><button class="xbtn" onclick="quitRun()" aria-label="${L('Surt', 'Salir')}">✕</button>
      <div class="pbar"><div class="pfill" style="width:${LS.done / LS.total * 100}%"></div></div>
      ${LS.mode === 'battle' ? `<div class="pcount">${LS.done + 1}/${LS.total}</div>` : quiet ? `<div class="pcount">${LS.done + 1}/${LS.total}</div>` : `<div class="combo ${LS.combo >= 2 ? 'on' : ''}" id="combo"><i class="ci">${ICON.flame}</i><b>${LS.combo}</b></div>`}</div>
    ${LS.mode === 'battle' ? '<div class="bstrip" id="bstrip"></div>' : ''}${LS.exam ? `<div class="gate"><span class="gt">🏰 ${L('La porta del Cavaller', 'La puerta del Caballero')}</span>${[...Array(LS.total).keys()].map(i => `<i class="${i < LS.eres.length ? (LS.eres[i] ? 'k' : 'x') : ''}">${i < LS.eres.length ? (LS.eres[i] ? '🔑' : '·') : '🔒'}</i>`).join('')}</div>` : ''}
    <div class="l-body" id="lbody">
      ${e.retry ? `<div class="retry">🔁 ${L('Una altra oportunitat', 'Otra oportunidad')}</div>` : ''}${e.gold ? `<div class="retry goldq">⭐ ${L('Pregunta daurada: XP doble!', '¡Pregunta dorada: XP doble!')}</div>` : ''}${e.review ? `<div class="retry rev">🧠 ${L('Repàs sorpresa', 'Repaso sorpresa')}</div>` : ''}${tag ? `<div class="retry place">${tag}</div>` : ''}
      <div class="l-q ${e.long ? 'long' : ''}"><div class="buddy tapme" id="buddy">${meC('think')}</div><div class="bubble">${e.q}</div></div>
      ${e.vis ? `<div class="l-vis">${e.vis}</div>` : ''}
      <div class="l-ans">${ansHTML(e)}</div>
    </div>
    <div class="l-foot" id="foot"><div class="fwrap"><div class="fb" id="fb"></div>${quiet ? `<button class="btn ghost skip" onclick="skipPlace()">${L('NO HO SÉ', 'NO LO SÉ')}</button>` : LS.mode === 'battle' || LS.exam ? '' : (LS.helps || 0) >= HINTS && !e.helped ? '' : `<button class="btn hintb ${e.retry ? 'nudge' : ''}" id="hintb" onclick="showHint()" data-n="${HINTS - (LS.helps || 0)}" aria-label="${L('Com es fa?', '¿Cómo se hace?')}" title="${L('Com es fa?', '¿Cómo se hace?')}"><img class="hic" src="img/ic/bulb.webp" alt="" draggable="false"></button>`}<button class="btn check" id="chk" onclick="check()" disabled>${L('COMPROVA', 'COMPRUEBA')}</button></div></div>
  </div>`;
  if (LS.mode === 'battle') { LS.q0 = Date.now(); battleStrip(); }
}
function padHTML(fn, extra) {
  const last = extra ? `<button class="pk-x" onclick="${fn}('${extra}')">${extra}</button>` : `<button class="pk-ok" onclick="${fn}('ok')" aria-label="OK">✓</button>`;
  return `<div class="pad">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button onclick="${fn}('${n}')">${n}</button>`).join('')}<button class="pk-del" onclick="${fn}('del')" aria-label="⌫">⌫</button><button onclick="${fn}('0')">0</button>${last}</div>`;
}
const showOf = e => e.show || fmt;
function ansHTML(e) {
  if (e.type === 'grid') return tapGridHTML(e);
  if (e.type === 'choice' && e.balloon) return `<div class="balloons">${e.opts.map((o, i) => `<button class="bln b${i}" style="--d:${i * .35}s;--c:${['#FF6FA3', '#36A9E1', '#3CC46A', '#FF9A3C'][i]}" onclick="pickOpt(${i})"><span>${o}</span></button>`).join('')}</div>`;
  if (e.type === 'choice' && e.tf) return `<div class="opts tfopts">${e.opts.map((o, i) => `<button class="opt tf${i}" onclick="pickOpt(${i})"><span class="ov">${o}</span></button>`).join('')}</div>`;
  if (e.type === 'choice') {
    const len = o => String(o).replace(/<[^>]+>/g, '').length, long = !e.pics && (e.list || e.opts.some(o => len(o) > 10));
    // lletra grossa només si totes les opcions són curtes: «Decreixent» a 38 px no cap en dues columnes al mòbil
    return `<div class="opts ${e.pics ? 'pics' : ''} ${e.big && !long && e.opts.every(o => len(o) <= 9) ? 'big' : ''} ${long ? 'list' : ''}">${e.opts.map((o, i) => `<button class="opt" style="animation-delay:${80 + i * 60}ms" onclick="pickOpt(${i})"><span class="k">${i + 1}</span><span class="ov">${o}</span></button>`).join('')}</div>`;
  }
  if (e.type === 'input') return `<div class="inbox" id="inbox"><span id="inval" class="ph">?</span>${e.unit ? `<span class="iu">${e.unit}</span>` : ''}</div>${padHTML('key', e.dec ? ',' : e.neg ? '−' : null)}`;
  return `<div class="oslots" id="oslots"><span class="ohint">${L('Toca els números en ordre', 'Toca los números en orden')}</span></div><div class="obank" id="obank">${e.items.map((v, i) => `<button class="chipn" data-i="${i}" onclick="ordTap(${i})">${showOf(e)(v)}</button>`).join('')}</div>`;
}
function pickOpt(i) { if (!LS || LS.state !== 'ask') return; LS.sel = i; SFX.tap(); $$('.opt,.bln').forEach((b, j) => b.classList.toggle('sel', j === i)); $('#chk').disabled = false; if (LS.cur.balloon || LS.cur.tf) check(); }
function inputShow(s) { if (!s) return '?'; const neg = s.startsWith('−'), body = neg ? s.slice(1) : s, [i, f] = body.split(','); return (neg ? '−' : '') + (i ? fmt(+i) : (f !== undefined ? '0' : '')) + (f !== undefined ? ',' + f : ''); }
const inputVal = s => parseFloat(s.replace('−', '-').replace(',', '.'));
function key(k) {
  if (!LS) return;
  if (k === 'ok') return check();
  if (LS.state !== 'ask') return;
  let s = LS.input;
  if (k === 'del') s = s.slice(0, -1);
  else if (k === ',') { if (!s.includes(',')) s = (s === '' || s === '−' ? s + '0' : s) + ','; }
  else if (k === '−') s = s.startsWith('−') ? s.slice(1) : '−' + s;
  else if (s.replace(/[−,]/g, '').length < 10) { if (s === '0') s = ''; if (s === '−0') s = '−'; s += k; }
  LS.input = s; SFX.tap();
  const el = $('#inval'); el.textContent = inputShow(s); el.classList.toggle('ph', !s); el.classList.remove('typed'); void el.offsetWidth; el.classList.add('typed');
  $('#chk').disabled = !/\d/.test(s);
}
function ordTap(i) { if (!LS || LS.state !== 'ask' || LS.order.includes(i)) return; LS.order.push(i); SFX.tap(); renderOrder(); }
function ordRemove(p) { if (!LS || LS.state !== 'ask') return; LS.order.splice(p, 1); renderOrder(); }
function renderOrder() {
  const e = LS.cur;
  $('#oslots').innerHTML = LS.order.length ? LS.order.map((i, p) => `<button class="chipn pop-in" onclick="ordRemove(${p})">${showOf(e)(e.items[i])}</button>`).join('') : `<span class="ohint">${L('Toca els números en ordre', 'Toca los números en orden')}</span>`;
  $$('#obank .chipn').forEach(b => b.classList.toggle('used', LS.order.includes(+b.dataset.i)));
  $('#chk').disabled = LS.order.length < e.items.length;
}
const PRAISE = () => L(['Molt bé!', 'Genial!', 'Correcte!', 'Fantàstic!', 'Ben fet!', 'Increïble!', 'Així es fa!', 'Perfecte!'], ['¡Muy bien!', '¡Genial!', '¡Correcto!', '¡Fantástico!', '¡Bien hecho!', '¡Increíble!', '¡Así se hace!', '¡Perfecto!']);
const OOPS = () => L(['Gairebé!', 'Ui, per poc!', 'No passa res!', 'Quasi quasi!'], ['¡Casi!', '¡Uy, por poco!', '¡No pasa nada!', '¡Casi casi!']);
function ansText(e) {
  if (e.type === 'grid') return e.need ? L(`${e.need} caselles pintades`, `${e.need} casillas pintadas`) : gridSolSVG(e);
  if (e.type === 'choice') return e.opts[e.ans];
  if (e.type === 'input') return (e.dec ? fmtD(e.ans) : fmt(e.ans)) + (e.unit ? ' ' + e.unit : '');
  const s = showOf(e); return e.ans.map(s).join(e.ans[0] > e.ans[1] ? ' > ' : ' < ');
}
function isRight(e) {
  if (e.type === 'grid') return gridRight(e);
  if (e.type === 'choice') return LS.sel === e.ans;
  if (e.type === 'input') return Math.abs(inputVal(LS.input) - e.ans) < 1e-6;
  return LS.order.map(i => e.items[i]).join() === e.ans.join();
}
function ready(e) { return e.type === 'grid' ? LS.gsel && LS.gsel.size > 0 : e.type === 'choice' ? LS.sel != null : e.type === 'input' ? /\d/.test(LS.input) : LS.order.length === e.items.length; }
function skipPlace() { if (!LS) return; LS.res.push(false); LS.done++; SFX.tap(); nextEx(); }
// Ajuda pas a pas: un exemple resolt del mateix tipus (amb altres números), sense donar la resposta de la pregunta.
// No resta punts, però la pregunta no suma a la ratxa i la lliçó ja no pot ser perfecta (com a molt, 2 estrelles).
const HINTS = 2;   // ajudes per lliçó
// exemple resolt semblant (mateixa habilitat, altres números o un altre dibuix); es genera una sola vegada per pregunta
const exKey = x => [x.q, x.vis, x.opts, x.items, x.fixed, x.need].map(v => typeof v === 'string' ? v : JSON.stringify(v ?? '')).join('|');
function hintEx(e) {
  if (e.hx !== undefined) return e.hx;
  let x = null;
  for (let i = 0; i < 12; i++) { try { x = genEx(e.sk, e.L, new Set(), false); } catch (err) { x = null; break; } if (x && exKey(x) !== exKey(e)) break; x = null; }
  return (e.hx = x);
}
// sense exemple: a Numi Pro, en Numi hi dona una pista pel xat; si no, un avís
function noHint() {
  if (VAR.chat && P.code && isPremium() && typeof xatOpen === 'function') { xatOpen(); const q = $('#xatq'); if (q) { q.value = L("Dona'm una pista per a aquesta pregunta, sense dir-me la resposta", 'Dame una pista para esta pregunta, sin decirme la respuesta'); q.focus(); } return; }
  toast(L('Per a aquesta pregunta no hi ha exemple. Llegeix-la a poc a poc i prova-ho!', 'Para esta pregunta no hay ejemplo. ¡Léela despacio e inténtalo!'));
}
function showHint(ok) {
  if (!LS || LS.state !== 'ask') return; const e = LS.cur;
  if (!e.helped && (LS.helps || 0) >= HINTS) return toast(L(`Ja has fet servir les ${HINTS} ajudes d'aquesta lliçó. Tu pots!`, `Ya has usado las ${HINTS} ayudas de esta lección. ¡Tú puedes!`));
  // les 3 primeres vegades (i sempre que la lliçó encara pot ser perfecta) avisem del que costa l'ajuda abans de mostrar-la
  if (!hintEx(e)) return noHint();
  if (!ok && !e.helped && (P.hintAsk || 0) < 3) return modal(`<div class="sheet card cent hintsheet"><div class="hhead"><span class="hbulb"><img src="img/ic/bulb.webp" alt="" draggable="false"></span><div><b>${L('Vols una ajuda?', '¿Quieres una ayuda?')}</b><small>${L('Et mostrarem un exemple resolt', 'Te mostraremos un ejemplo resuelto')}</small></div></div>
    <ul class="hwarn"><li>${L(`Tens <b>${HINTS} ajudes</b> per lliçó.`, `Tienes <b>${HINTS} ayudas</b> por lección.`)}</li><li>${L('Aquesta pregunta <b>no sumarà a la ratxa</b>.', 'Esta pregunta <b>no sumará a la racha</b>.')}</li><li>${L('La lliçó quedarà com a molt en <b>2 estrelles</b> (per passar en calen 2, així que no et bloqueja).', 'La lección quedará como mucho en <b>2 estrellas</b> (para pasar hacen falta 2, así que no te bloquea).')}</li></ul>
    <div class="row2"><button class="btn ghost" onclick="closeModal()">${L('HO PROVO', 'LO INTENTO')}</button><button class="btn gold" onclick="P.hintAsk=(P.hintAsk||0)+1;saveLocal();showHint(1)">${L("VULL L'AJUDA", 'QUIERO LA AYUDA')}</button></div></div>`, true);
  const x = hintEx(e);
  if (!x) return noHint();
  if (!e.helped) { e.helped = true; LS.helps = (LS.helps || 0) + 1; }
  modal(`<div class="sheet hintsheet"><div class="hhead"><span class="hbulb"><img src="img/ic/bulb.webp" alt="" draggable="false"></span><div><b>${L('Com es fa?', '¿Cómo se hace?')}</b><small>${L('Mira aquest exemple amb altres números', 'Mira este ejemplo con otros números')}</small></div></div>
    <div class="lq">${x.q}</div>${x.vis ? `<div class="l-vis lvis">${x.vis}</div>` : ''}
    <div class="lans"><span>${L('Resposta', 'Respuesta')}:</span> <b>${ansText(x)}</b></div>${x.ex ? `<div class="lex">${x.ex}</div>` : ''}
    <p class="hnote">${L("Ara prova-ho tu amb la teva pregunta. Amb ajuda no perds punts, però aquesta no suma a la ratxa i la lliçó queda com a molt en 2 estrelles.", 'Ahora pruébalo tú con tu pregunta. Con ayuda no pierdes puntos, pero esta no suma a la racha y la lección queda como mucho en 2 estrellas.')}</p>
    <button class="btn big" onclick="closeModal()">${L('HO PROVO!', '¡LO INTENTO!')}</button></div>`);
}
function check() {
  if (!LS) return;
  if (LS.state === 'fb') return nextEx();
  const e = LS.cur; if (!ready(e)) return;
  const ok = isRight(e);
  if (LS.mode === 'place' || LS.mode === 'evo') { LS.res.push(ok); if (LS.mode === 'evo') record(e.sk, ok); LS.done++; SFX.tap(); return nextEx(); }
  LS.state = 'fb';
  record(e.sk, ok);
  let target = null;
  if (e.type === 'choice') $$('.opt,.bln').forEach((b, i) => { b.disabled = true; if (i === e.ans) { b.classList.add('right'); target = b; } else if (i === LS.sel) b.classList.add(e.balloon ? 'popped' : 'wrong'); });
  if (e.type === 'input') { $('#inbox').classList.add(ok ? 'right' : 'wrong'); target = $('#inbox'); }
  if (e.type === 'order') { $('#oslots').classList.add(ok ? 'right' : 'wrong'); target = $('#oslots'); }
  if (e.type === 'grid') { $('#tgrid').classList.add(ok ? 'right' : 'wrong'); target = $('#tgrid'); }
  if (LS.exam) { LS.eres.push(ok); if (!ok) LS.emiss.push(e.sk); }
  $$('.pad button').forEach(b => { if (!b.classList.contains('pk-ok')) b.disabled = true; });
  const hb = $('#hintb'); if (hb) hb.remove();
  const foot = $('#foot'), fb = $('#fb'), chk = $('#chk');
  foot.classList.add(ok ? 'ok' : 'ko');
  if (ok) {
    LS.done++; if (!e.helped) LS.combo++; LS.maxCombo = Math.max(LS.maxCombo, LS.combo); SFX.ok(); sparkle(target); if (!e.helped) comboBanner(LS.combo);
    misEvent('answer'); misEvent('combo', LS.combo);
    if (e.gold && !e.helped) { LS.gold++; misEvent('gold'); floatTxt(target, '⭐ +5 XP', 'gain xp'); }
    const pf = $('.pfill'); pf.style.width = (LS.done / LS.total * 100) + '%'; pf.classList.remove('shine'); void pf.offsetWidth; pf.classList.add('shine');
    fb.innerHTML = `<div class="fbh">✔ ${LS.combo >= 3 ? L(`Ratxa de ${LS.combo}! 🔥`, `¡Racha de ${LS.combo}! 🔥`) : pick(PRAISE())}</div>${e.long || e.retry ? `<div class="exp">${e.ex || ''}</div>` : ''}`;
  } else {
    LS.miss++; LS.combo = 0; SFX.ko(); $('#lbody').classList.add('shake');
    if (LS.mode === 'battle' || LS.exam) LS.done++;
    else { const n = genEx(e.sk, e.L, LS.seen, LS.mix); n.retry = true; LS.queue.push(n); }
    fb.innerHTML = `<div class="fbh">✖ ${pick(OOPS())}</div><div class="ans">${L('Resposta correcta', 'Respuesta correcta')}: <b>${ansText(e)}</b></div>${e.ex ? `<div class="exp">💡 ${e.ex}</div>` : ''}`;
  }
  if (LS.mode === 'battle') battleAnswer(ok);
  $('#buddy').innerHTML = meC(ok ? 'happy' : 'sad');
  const cb = $('#combo'); if (cb) { cb.innerHTML = `<i class="ci">${ICON.flame}</i><b>${LS.combo}</b>`; cb.classList.toggle('on', LS.combo >= 2); } if (cb && ok && LS.combo >= 2) { cb.classList.remove('pop'); void cb.offsetWidth; cb.classList.add('pop'); }
  chk.textContent = L('CONTINUA', 'CONTINÚA'); chk.disabled = false; chk.className = 'btn check ' + (ok ? 'okb' : 'kob');
  foot.scrollIntoView({ block: 'nearest' });
  saveLocal();
}
function quitRun() {
  if (LS && LS.mode === 'battle') return quitBattle();
  if (LS && LS.mode === 'place') return ask(L('Vols saltar-te la prova de nivell? Començaràs pel principi del curs.', '¿Quieres saltarte la prueba de nivel? Empezarás por el principio del curso.'), L('SALTA', 'SALTAR'), L('CONTINUA', 'CONTINÚA'), () => { LS.res = []; finishPlacement(true); });
  ask(L("Segur que vols sortir? Perdràs el progrés d'aquesta activitat.", '¿Seguro que quieres salir? Perderás el progreso de esta actividad.'), L('SURT', 'SALIR'), L('CONTINUA AQUÍ', 'SEGUIR AQUÍ'), () => go('home'));
}

/* ---------- Final i recompenses ---------- */
const BADGES = [
  ['first', '🚀', 'Primer pas|Primer paso', 'Completa la teva primera lliçó|Completa tu primera lección', p => p.stats.lessons >= 1],
  ['perfect', '💯', 'Perfecte!|¡Perfecto!', 'Fes una lliçó sense cap error|Haz una lección sin ningún error', p => p.stats.perfect >= 1],
  ['perfect10', '🎯', 'Punteria fina|Puntería fina', 'Fes 10 lliçons perfectes|Haz 10 lecciones perfectas', p => p.stats.perfect >= 10],
  ['combo10', '⚡', 'Imparable|Imparable', 'Encerta 10 respostes seguides|Acierta 10 respuestas seguidas', p => p.stats.bestCombo >= 10],
  ['combo30', '🌪️', 'Huracà|Huracán', 'Encerta 30 respostes seguides|Acierta 30 respuestas seguidas', p => p.stats.bestCombo >= 30],
  ['streak3', '🔥', 'Foc encès|Fuego encendido', 'Practica 3 dies seguits|Practica 3 días seguidos', p => p.best >= 3],
  ['streak7', '☄️', 'Setmana de foc|Semana de fuego', 'Practica 7 dies seguits|Practica 7 días seguidos', p => p.best >= 7],
  ['streak30', '🌋', 'Volcà|Volcán', 'Practica 30 dies seguits|Practica 30 días seguidos', p => p.best >= 30],
  ['streak100', '🏆', 'Llegenda|Leyenda', 'Practica 100 dies seguits|Practica 100 días seguidos', p => p.best >= 100],
  ['xp100', '⭐', '100 XP', "Aconsegueix 100 punts d'experiència|Consigue 100 puntos de experiencia", p => p.xp >= 100],
  ['xp500', '🌟', '500 XP', "Aconsegueix 500 punts d'experiència|Consigue 500 puntos de experiencia", p => p.xp >= 500],
  ['xp2000', '💫', '2.000 XP', "Aconsegueix 2.000 punts d'experiència|Consigue 2.000 puntos de experiencia", p => p.xp >= 2000],
  ['unit1', '🗺️', 'Primera unitat|Primera unidad', "Supera el repte d'una unitat|Supera el reto de una unidad", p => unitsDone(p) >= 1],
  ['unit5', '🧭', 'Exploració|Exploración', 'Supera 5 unitats|Supera 5 unidades', p => unitsDone(p) >= 5],
  ['course', '🎓', 'Curs complet|Curso completo', "Supera totes les unitats d'un curs|Supera todas las unidades de un curso", p => COURSES.some(c => c.units.every(u => udone(p, u)))],
  ['evo1', '🧪', 'Científic/a|Científico/a', "Fes una prova d'evolució|Haz una prueba de evolución", p => p.tests.filter(t => t.kind === 'evo').length >= 1],
  ['evoUp', '📈', 'Cap amunt!|¡Hacia arriba!', "Millora la nota en una prova d'evolució|Mejora la nota en una prueba de evolución", p => p.tests.some((t, i) => i && t.kind === 'evo' && t.pct > p.tests[i - 1].pct)],
  ['friends3', '🤝', 'Bona colla|Buena pandilla', 'Aconsegueix 3 companys|Consigue 3 compañeros', p => p.owned.length >= 3],
  ['friends6', '🎉', 'Tota la colla|Toda la pandilla', 'Aconsegueix els 6 companys|Consigue los 6 compañeros', p => p.owned.length >= 6],
  ['style', '🎩', 'Amb estil|Con estilo', 'Aconsegueix un accessori|Consigue un accesorio', p => p.accOwned.length >= 1],
  ['train5', '🏋️', 'Entrenament|Entrenamiento', 'Fes 5 entrenaments|Haz 5 entrenamientos', p => p.stats.trains >= 5],
  ['agile5', '🧠', 'Ment àgil|Mente ágil', "Juga 5 partides d'agilitat mental|Juega 5 partidas de agilidad mental", p => p.stats.games >= 5],
  ['sprint15', '⏱️', 'Llampec|Relámpago', 'Fes 15 encerts en una contrarellotge|Haz 15 aciertos en una contrarreloj', p => (p.stats.bests.sprint || 0) >= 15],
  ['sprint30', '🏎️', 'Supersònic|Supersónico', 'Fes 30 encerts en una contrarellotge|Haz 30 aciertos en una contrarreloj', p => (p.stats.bests.sprint || 0) >= 30],
  ['chain5', '🔗', 'Cadena perfecta|Cadena perfecta', 'Encerta les 5 cadenes de càlcul|Acierta las 5 cadenas de cálculo', p => (p.stats.bests.chain || 0) >= 5],
  ['ans500', '🧮', 'Calculadora humana|Calculadora humana', 'Respon 500 preguntes|Responde 500 preguntas', p => p.stats.answers >= 500]
];
function checkBadges() { const nw = BADGES.filter(b => !P.badges.includes(b[0]) && b[4](P)); nw.forEach(b => { P.badges.push(b[0]); P.gems += 10; }); return nw; }
function finishRun() {
  const R = { mode: LS.mode, ui: LS.ui, li: LS.li, acc: LS.exam ? 0 : Math.round(100 * LS.total / (LS.total + LS.miss)), perfect: LS.miss === 0 && !LS.helps, stars: 0, chest: 0 };
  if (R.mode === 'reco') { R.xp = 12 + (R.perfect ? 4 : 0); R.gems = 6; P.stats.trains++; if (R.acc >= 75) { P.reco = null; R.recoDone = true; } }
  else if (R.mode === 'train') { R.xp = 8 + (R.perfect ? 4 : 0); R.gems = 3 + (R.perfect ? 2 : 0); P.stats.trains++; }
  else if (R.mode === 'prep') { R.xp = 10 + (R.perfect ? 4 : 0); R.gems = 8; P.stats.trains++; R.sub = L('Ben repassat! Ara ja pots tornar a la porta del Cavaller.', '¡Bien repasado! Ahora ya puedes volver a la puerta del Caballero.'); }
  else if (R.mode === 'review') { R.pass = LS.miss <= 2; R.xp = 12 + (R.perfect ? 4 : 0); R.gems = R.pass ? 6 : 2; P.stats.trains++; reviewDone(LS.revKeys, R.pass);
    R.sub = R.pass ? L('Lliçons repassades i a punt. Tornaran a sortir d\'aquí uns dies.', 'Lecciones repasadas y a punto. Volverán a salir dentro de unos días.') : L('Encara costen una mica: tornaran a sortir aviat per reforçar-les.', 'Aún cuestan un poco: volverán a salir pronto para reforzarlas.'); }
  else {
    R.xp = 10 + (R.perfect ? 5 : 0) + (R.mode === 'repte' ? 10 : 0); R.gems = 5 + (R.perfect ? 5 : 0);
    R.stars = R.perfect ? 3 : LS.miss + Math.ceil((LS.helps || 0) / 2) <= 2 ? 2 : 1;
    if (LS.exam) {
      const okN = LS.total - LS.miss; R.exam = true; R.acc = Math.round(100 * okN / LS.total); R.stars = okN >= 11 ? 3 : okN >= 9 ? 2 : 1;
      const uid = UNITS_()[R.ui].id; P.exams = P.exams || {}; const ex = P.exams[uid] || { tries: 0, best: 0 };
      ex.tries++; ex.last = R.acc; ex.best = Math.max(ex.best, R.acc); ex.d = today(); ex.miss = [...new Set(LS.emiss)]; ex.prep = false; P.exams[uid] = ex;
      if (R.stars < PASS && ex.miss.length) R.prep = R.ui;
      const nota = String(Math.round(okN / LS.total * 100) / 10).replace('.', ','); R.nota = nota;
      R.sub = R.stars >= PASS ? L(`Nota: <b>${nota}</b> (${okN} de ${LS.total}). La porta s'ha obert: la unitat següent t'espera, i també les lliçons de bonus!`, `Nota: <b>${nota}</b> (${okN} de ${LS.total}). La puerta se ha abierto: ¡te espera la unidad siguiente y también las lecciones de bonus!`) : L(`Nota: <b>${nota}</b> (${okN} de ${LS.total}). Per obrir la porta cal més d'un 7: repassa una mica i torna-ho a provar!`, `Nota: <b>${nota}</b> (${okN} de ${LS.total}). Para abrir la puerta hace falta más de un 7: ¡repasa un poco y vuelve a intentarlo!`);
    }
    const pr = prog(R.ui), first = (pr.stars[R.li] || 0) < PASS && R.stars >= PASS;
    pr.stars[R.li] = Math.max(pr.stars[R.li], R.stars);
    revMark(UNITS_()[R.ui], R.li, R.stars >= PASS);
    if (!R.exam && R.stars < PASS && pr.stars[R.li] < PASS) R.sub = L(`Per obrir ${R.mode === 'repte' ? 'la unitat següent' : 'la lliçó següent'} necessites 2 estrelles: com a molt 2 errors. Tu pots!`, `Para abrir ${R.mode === 'repte' ? 'la unidad siguiente' : 'la lección siguiente'} necesitas 2 estrellas: como mucho 2 errores. ¡Tú puedes!`);
    const cu = crownCheck(R.ui); if (cu) { R.crown = cu; R.gems += 50; }
    if (R.mode === 'repte' && first) R.chest = ri(30, 50);
    R.firstPass = first;
    if (R.exam && first) R.gate = R.ui;
    P.stats.lessons++; if (R.perfect) P.stats.perfect++;
    if (R.mode === 'lesson') { const dl = dayLessons(); dl.n++; if (dl.n > dayReward() && !P.unlockAll) { R.gems = 0; R.noPrize = true; R.sub = (R.sub ? R.sub + ' ' : '') + L(`Lliçó ${dl.n} d'avui: els diamants i les cartes són per a les ${dayReward()} primeres, però l'XP i les estrelles compten igual!`, `Lección ${dl.n} de hoy: los diamantes y las cartas son para las ${dayReward()} primeras, ¡pero la XP y las estrellas cuentan igual!`); } }
  }
  R.bonus = Math.floor(LS.maxCombo / 3) * 2 + LS.gold * 5; R.xp += R.bonus;
  // sobres: lliçons (amb el límit diari), la porta només la primera vegada que s'obre i la missió només quan s'acaba bé
  if (R.mode === 'lesson' || R.mode === 'repte' || R.mode === 'reco' || (R.mode === 'review' && R.pass)) { misEvent('lesson'); const packOk = R.mode === 'lesson' || R.mode === 'review' || (R.mode === 'repte' && R.firstPass) || (R.mode === 'reco' && R.recoDone); if (!R.noPrize && packOk) R.pack = openPack(R.mode === 'repte' ? 2 : 1); }
  if (R.perfect && R.mode !== 'train') misEvent('perfect');
  if (R.mode === 'train' || R.mode === 'reco' || R.mode === 'review' || R.mode === 'prep') misEvent('train');
  LS = null; reward(R);
}
function reward(R) {
  const lv0 = lvlOf(P.xp), cid = P.companion, cl0 = clvOf(cid);
  addXP(R.xp);
  R.clv = clvOf(cid) > cl0 ? [cid, clvOf(cid)] : null;
  R.knight = unitsDone(P) >= 3 && !P.owned.includes('cavaller') ? (P.owned.push('cavaller'), true) : false; P.gems += R.gems + R.chest;
  R.streakUp = touchStreak(); R.srw = R.streakUp ? grantStreak() : [];
  R.lvUp = lvlOf(P.xp) > lv0 ? lvlOf(P.xp) : 0; if (R.lvUp) P.gems += 10;
  R.newB = checkBadges();
  GAIN = { gems: R.gems + R.chest, xp: R.xp };
  save(); syncNow();
  FLOW = [() => (R.mode === 'evo' ? scrEvolution(R) : scrResult(R))];
  FLOW.back = R.mode === 'game' ? 'train' : R.mode === 'battle' ? 'battles' : 'home';
  if (R.streakUp) FLOW.push(scrStreak);
  if (R.srw.length) FLOW.push(() => scrStreakReward(R.srw));
  if (R.chest) FLOW.push(() => scrChest(R));
  if (R.lvUp) FLOW.push(() => scrLevel(R.lvUp));
  if (R.pack) FLOW.push(() => scrPack(R.pack));
  if (R.clv) FLOW.push(() => scrCharLevel(...R.clv));
  if (R.knight) FLOW.push(scrKnight);
  if (R.gate != null) FLOW.push(() => scrGate(R.gate));
  if (R.prep != null) FLOW.push(() => scrGatePrep(R.prep));
  if (R.crown) FLOW.push(() => scrCrown(R.crown));
  const mc_ = COURSES[P.maxCourse];
  if (mc_ && P.maxCourse < COURSES.length - 1 && mc_.units.every(u => udone(P, u))) { P.maxCourse++; save(); const nl = P.maxCourse; FLOW.push(() => scrNewLevel(nl)); }
  if (R.newB.length) FLOW.push(() => scrBadges(R.newB));
  flowNext();
}
function flowNext() { closeModal(); const f = FLOW.shift(); if (f) f(); else go(FLOW.back || 'home'); }
function countUp() { $$('[data-count]').forEach(el => { const to = +el.dataset.count, suf = el.dataset.suf || '', t0 = performance.now(); (function step(t) { const k = Math.min(1, (t - t0) / 800); el.textContent = Math.round(to * (1 - (1 - k) ** 3)) + suf; if (k < 1) requestAnimationFrame(step); })(t0); }); }
function scrResult(R) {
  const game = R.mode === 'game' || R.mode === 'battle';
  const title = game ? tx(R.title) : R.exam ? (R.stars >= PASS ? L('Porta oberta!', '¡Puerta abierta!') : L('La porta encara resisteix…', 'La puerta aún resiste…')) : R.recoDone ? L('Missió del Cavaller complerta!', '¡Misión del Caballero cumplida!') : R.perfect ? L('Lliçó perfecta!', '¡Lección perfecta!') : R.mode === 'reco' ? L('Bona feina! Torna-ho a provar per completar la missió.', '¡Buen trabajo! Vuelve a intentarlo para completar la misión.') : R.mode === 'train' ? L('Entrenament fet!', '¡Entrenamiento hecho!') : R.mode === 'review' || R.mode === 'prep' ? L('Repàs fet!', '¡Repaso hecho!') : R.exam ? (R.stars >= PASS ? L('Porta oberta!', '¡Puerta abierta!') : L('La porta encara resisteix…', 'La puerta aún resiste…')) : R.stars && R.stars < PASS ? L('Gairebé!', '¡Casi!') : L('Lliçó completada!', '¡Lección completada!');
  const sub = R.sub || (game ? (R.record ? L('🏆 Nou rècord personal!', '🏆 ¡Nuevo récord personal!') : L(`El teu rècord: ${R.best}`, `Tu récord: ${R.best}`)) : R.perfect ? L('Ni un sol error. Ets imparable!', 'Ni un solo error. ¡Eres imparable!') : L('Cada error és una oportunitat per aprendre.', 'Cada error es una oportunidad para aprender.'));
  const third = game ? `<div class="rs acc"><span>${L('PUNTS', 'PUNTOS')}</span><b data-count="${R.score}">0</b></div>` : `<div class="rs acc"><span>${L('PRECISIÓ', 'PRECISIÓN')}</span><b data-count="${R.acc}" data-suf="%">0</b></div>`;
  app.innerHTML = `<div class="scr"><div class="burst"></div><div class="cheer"><div class="saybubble">${cheerMsg(R)}</div><div class="rchar dance tapme">${meC('happy')}</div></div>
    <h1>${title}</h1><p class="sub">${sub}</p>
    ${R.stars ? `<div class="bigstars">${[1, 2, 3].map(i => `<i class="${i <= R.stars ? 'on' : ''}" style="animation-delay:${.25 + i * .22}s">★</i>`).join('')}</div>` : ''}
    ${R.bonus ? `<div class="bonus">🔥 ${L('Bonus de ratxa i preguntes daurades', 'Bonus de racha y preguntas doradas')}: <b>+${R.bonus} XP</b></div>` : ''}
    <div class="rstats"><div class="rs xp"><span>XP</span><b data-count="${R.xp}">0</b></div><div class="rs gem"><span>${L('DIAMANTS', 'DIAMANTES')}</span><b data-count="${R.gems}">0</b></div>${third}</div>
    <button class="btn big" onclick="flowNext()">${L('CONTINUA', 'CONTINÚA')}</button></div>`;
  countUp(); SFX.win(); if (R.perfect || R.record) confetti();
}
function scrStreak() {
  const DOW = L(['dl', 'dt', 'dc', 'dj', 'dv', 'ds', 'dg'], ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do']), now = new Date(), wd = (now.getDay() + 6) % 7, days = [];
  for (let i = 0; i < 7; i++) { const d = new Date(now); d.setDate(now.getDate() - wd + i); const k = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; days.push(`<div class="wd ${P.days.includes(k) ? 'on' : ''} ${i === wd ? 'today' : ''}" style="animation-delay:${i * 70}ms"><span>${DOW[i]}</span><i>${P.days.includes(k) ? '🔥' : ''}</i></div>`); }
  const next = SRW.find(r => !P.srw.includes(r.d));
  app.innerHTML = `<div class="scr"><div class="flame">${ICON.flame}</div><div class="snum" data-count="${P.streak}">0</div>
    <h1>${P.streak === 1 ? L('Has encès la ratxa!', '¡Has encendido la racha!') : L(`${P.streak} dies seguits!`, `¡${P.streak} días seguidos!`)}</h1>
    <p class="sub">${next ? L(`Premi dels ${next.d} dies: ${next.icon} ${tx(next.txt)}`, `Premio de los ${next.d} días: ${next.icon} ${tx(next.txt)}`) : L('Practicar una mica cada dia és el gran secret.', 'Practicar un poco cada día es el gran secreto.')}</p>
    <div class="week">${days.join('')}</div><button class="btn big orange" onclick="flowNext()">${L('CONTINUA', 'CONTINÚA')}</button></div>`;
  countUp(); SFX.coin();
}
function scrStreakReward(list) {
  const r = list[list.length - 1];
  const pic = r.char ? charSVG(r.char, 'happy') : r.acc ? charSVG(P.companion, 'happy', { ...P.acc, [ACC[r.acc].slot]: r.acc }, '', clvOf(P.companion)) : `<div class="bigicon">${r.icon}</div>`;
  app.innerHTML = `<div class="scr"><div class="burst gold"></div><div class="ribbon">${L('PREMI DE RATXA', 'PREMIO DE RACHA')} · ${r.d} ${L('DIES', 'DÍAS')}</div><div class="rchar big tapme">${pic}</div>
    <h1>${r.char ? L(`${tx(CH[r.char].name)} s'uneix a la colla!`, `¡${tx(CH[r.char].name)} se une a la pandilla!`) : L('Has guanyat un premi!', '¡Has ganado un premio!')}</h1><p class="sub">${list.map(x => `${x.icon} ${tx(x.txt)}`).join('<br>')}</p>
    ${r.acc ? `<button class="btn big gold" onclick="P.acc['${ACC[r.acc].slot}']='${r.acc}';save();flowNext()">${L("POSA-T'HO!", '¡PÓNTELO!')}</button>` : ''}
    ${r.char ? `<button class="btn big gold" onclick="P.companion='${r.char}';save();flowNext()">${L('VULL ANAR AMB ', 'QUIERO IR CON ')}${tx(CH[r.char].name).toUpperCase()}!</button>` : ''}
    <button class="btn big ${r.acc || r.char ? 'ghost' : ''}" onclick="flowNext()">${L('CONTINUA', 'CONTINÚA')}</button></div>`;
  SFX.win(); confetti(200);
}
const chestSVG = () => `<svg viewBox="0 0 160 140" class="chestsvg"><ellipse cx="80" cy="130" rx="60" ry="7" fill="#000" opacity=".12"/>
  <rect x="22" y="64" width="116" height="62" rx="10" fill="#B86B2E"/><rect x="22" y="64" width="116" height="12" fill="#9A5522"/><rect x="28" y="84" width="104" height="4" rx="2" fill="rgba(255,255,255,.15)"/>
  <rect x="38" y="64" width="12" height="62" fill="url(#gGold)"/><rect x="110" y="64" width="12" height="62" fill="url(#gGold)"/>
  <g class="lid"><path d="M22 68 Q22 28 80 28 Q138 28 138 68Z" fill="#D07D3A"/><path d="M34 50 Q40 34 70 32" stroke="rgba(255,255,255,.3)" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M38 34 Q44 31 50 30 L50 68 L38 68Z" fill="url(#gGold)"/><path d="M110 30 Q116 31 122 34 L122 68 L110 68Z" fill="url(#gGold)"/></g>
  <rect x="69" y="58" width="22" height="26" rx="5" fill="url(#gGold)" stroke="#E0A300" stroke-width="3"/><circle cx="80" cy="69" r="3.5" fill="#8A5A00"/></svg>`;
function scrChest(R) {
  const nx = UNITS_()[R.ui + 1];
  app.innerHTML = `<div class="scr"><h1>${L('Repte superat!', '¡Reto superado!')}</h1><p class="sub">${L('Toca el cofre per obrir-lo', 'Toca el cofre para abrirlo')}</p>
    <button class="chest wiggle" id="chest" onclick="openChest()" aria-label="${L('Obre el cofre', 'Abrir el cofre')}"><div class="chestglow"></div>${chestSVG()}</button>
    <div id="chestOut" class="chestout" hidden><div class="loot">+${R.chest} <i class="ci big">${ICON.gem}</i></div>
    <p>${nx ? L(`Nova unitat desbloquejada: <b>${tx(nx.title)}</b>`, `Nueva unidad desbloqueada: <b>${tx(nx.title)}</b>`) : L(`Has completat ${tx(CUR().long)}! Ets increïble!`, `¡Has completado ${tx(CUR().long)}! ¡Eres increíble!`)}</p>
    <button class="btn big" onclick="flowNext()">${L('CONTINUA', 'CONTINÚA')}</button></div></div>`;
}
function openChest() { const c = $('#chest'); if (c.classList.contains('open')) return; c.classList.remove('wiggle'); c.classList.add('open'); SFX.win(); confetti(180); setTimeout(() => { $('#chestOut').hidden = false; }, 450); }
function scrLevel(l) {
  app.innerHTML = `<div class="scr"><div class="burst"></div><div class="lvbadge">${l}</div><h1>${L(`Has pujat al nivell ${l}!`, `¡Has subido al nivel ${l}!`)}</h1><p class="sub">${L('+10 diamants de regal. Continua així!', '+10 diamantes de regalo. ¡Sigue así!')}</p><div class="rchar tapme">${meC('happy')}</div><button class="btn big" onclick="flowNext()">${L('CONTINUA', 'CONTINÚA')}</button></div>`;
  SFX.win(); confetti(90);
}
function scrBadges(list) {
  app.innerHTML = `<div class="scr"><h1>${list.length > 1 ? L('Noves medalles!', '¡Nuevas medallas!') : L('Nova medalla!', '¡Nueva medalla!')}</h1><p class="sub">${L('Cada medalla et dona +10 diamants', 'Cada medalla te da +10 diamantes')}</p>
    <div class="newb">${list.map((b, i) => `<div class="badge on pop" style="animation-delay:${i * 150}ms"><div class="bi">${b[1]}</div><b>${tx(b[2])}</b><span>${tx(b[3])}</span></div>`).join('')}</div>
    <button class="btn big" onclick="flowNext()">${L('CONTINUA', 'CONTINÚA')}</button></div>`;
  SFX.coin();
}

function cheerMsg(R) {
  const n = esc(P.name), nm = tx(CH[P.companion].name);
  const good = L([`Ho has fet genial, ${n}! Estic molt orgullós de tu.`, `${n}, cada dia ets més bo/na amb les mates!`, `Increïble! El teu cervell està fent múscul, ${n}.`, `Així m'agrada! Pas a pas arribarem molt lluny.`, `${n}, has estat un crac! Anem a per la següent?`, `Quina passada! Aquesta lliçó ja és teva.`],
    [`¡Lo has hecho genial, ${n}! Estoy muy orgulloso de ti.`, `¡${n}, cada día eres mejor en mates!`, `¡Increíble! Tu cerebro se está poniendo fuerte, ${n}.`, `¡Así me gusta! Paso a paso llegaremos muy lejos.`, `¡${n}, has sido un crack! ¿Vamos a por la siguiente?`, `¡Qué pasada! Esta lección ya es tuya.`]);
  const perfect = L([`PERFECTE, ${n}! Ni un sol error! 🌟`, `Uau, ${n}! Lliçó perfecta! Ets imparable!`], [`¡PERFECTO, ${n}! ¡Ni un solo error! 🌟`, `¡Guau, ${n}! ¡Lección perfecta! ¡Eres imparable!`]);
  const hard = L([`Els errors també ensenyen, ${n}. Ho has intentat i això és el més important!`, `No passa res per equivocar-se, ${n}. La propera sortirà millor!`], [`Los errores también enseñan, ${n}. ¡Lo has intentado y eso es lo más importante!`, `No pasa nada por equivocarse, ${n}. ¡La próxima saldrá mejor!`]);
  const game = L([`Quina velocitat, ${n}! El teu cervell va a tota màquina!`, `Bona partida, ${n}! Cada vegada ets més ràpid/a.`], [`¡Qué velocidad, ${n}! ¡Tu cerebro va a toda máquina!`, `¡Buena partida, ${n}! Cada vez eres más rápido/a.`]);
  const almost = L([`Gairebé ho tens, ${n}! Torna-ho a provar amb calma i obrirem la següent.`, `Molt a prop, ${n}! Amb 2 errors o menys, passem a la següent.`], [`¡Casi lo tienes, ${n}! Vuelve a intentarlo con calma y abriremos la siguiente.`, `¡Muy cerca, ${n}! Con 2 errores o menos, pasamos a la siguiente.`]);
  const list = R.mode === 'game' || R.mode === 'battle' ? game : R.perfect ? perfect : (R.stars && R.stars < PASS) ? almost : (R.acc != null && R.acc < 60) ? hard : good;
  return `<b>${nm}:</b> ${pick(list)}`;
}

/* ---------- Recomanacions del Cavaller ---------- */
function weakSkills() {
  const sks = new Set(UNITS_().flatMap(u => u.lessons.flatMap(l => l.sk)));
  return Object.entries(P.stats.sk).filter(([k, [c, t]]) => sks.has(k) && t >= 4 && c / t < .6).sort((a, b) => a[1][0] / a[1][1] - b[1][0] / b[1][1]).map(([sk]) => ({ sk }));
}
function makeReco(wrong, source) {
  const us = UNITS_(), items = [], seen = new Set();
  [...wrong, ...weakSkills()].forEach(({ sk }) => {
    if (seen.has(sk) || items.length >= 3) return;
    for (let ui = 0; ui < us.length; ui++) { const li = us[ui].lessons.findIndex(l => l.sk.includes(sk)); if (li >= 0) { seen.add(sk); items.push({ ui, li, sk, L: us[ui].lessons[li].L }); break; } }
  });
  P.reco = items.length ? { date: today(), source, course: P.course, items } : null;
}
function recoBox(inResult) {
  const r = P.reco; if (!r || r.course !== P.course || !r.items.length) return '';
  const us = UNITS_();
  return `<div class="reco ${inResult ? 'inres' : ''}"><div class="rhead"><div class="rknight tapme">${charSVG('cavaller', 'happy', null, '', 1)}</div><div><b>${L('El Cavaller et recomana', 'El Caballero te recomienda')}</b><small>${r.source === 'evo' ? L('Segons la teva prova d\'evolució:', 'Según tu prueba de evolución:') : r.source === 'place' ? L('Segons la prova de nivell:', 'Según la prueba de nivel:') : L('Per millorar:', 'Para mejorar:')}</small></div></div>
    <ul>${r.items.map(it => `<li><span class="rdot" style="background:${us[it.ui].color}"></span>${tx(us[it.ui].lessons[it.li].t)} <small>· ${tx(us[it.ui].title)}</small></li>`).join('')}</ul>
    <button class="btn gold" onclick="FLOW=[];startReco()">⚔️ ${L('ACCEPTA LA MISSIÓ', 'ACEPTA LA MISIÓN')}</button></div>`;
}
function startReco() {
  const r = P.reco; if (!r) return;
  const plan = []; for (let i = 0; i < 8; i++) { const it = r.items[i % r.items.length]; plan.push([it.sk, it.L]); }
  startRun({ mode: 'reco', ui: null, li: null, plan: shuffle(plan), color: '#2F8FA6' });
}
function scrCharLevel(id, lv) {
  app.innerHTML = `<div class="scr"><div class="burst gold"></div><div class="ribbon">${L('EL TEU COMPANY PUJA DE NIVELL', 'TU COMPAÑERO SUBE DE NIVEL')}</div><div class="rchar big tapme levelup">${charSVG(id, 'happy', P.acc, '', lv)}</div>
    <h1>${L(`${tx(CH[id].name)} ara és de nivell ${lv}!`, `¡${tx(CH[id].name)} ahora es de nivel ${lv}!`)}</h1>
    <p class="sub">${lv >= 5 ? L('Nivell màxim: és llegendari! ✨', 'Nivel máximo: ¡es legendario! ✨') : lv >= 3 ? L('Ara brilla amb una aura màgica. Com més practiqueu junts, més creix!', 'Ahora brilla con un aura mágica. ¡Cuanto más practicáis juntos, más crece!') : L('Com més practiqueu junts, més creix!', '¡Cuanto más practicáis juntos, más crece!')}</p>
    <button class="btn big" onclick="flowNext()">${L('CONTINUA', 'CONTINÚA')}</button></div>`;
  SFX.win(); confetti(160);
}
function scrNewLevel(ci) {
  const c = COURSES[ci];
  app.innerHTML = `<div class="scr"><div class="burst gold"></div><div class="ribbon">${L('NIVELL SUPERAT', 'NIVEL SUPERADO')}</div><div class="lvbadge">${c.n}</div>
    <h1>${L(`Has obert el nivell ${c.n}!`, `¡Has abierto el nivel ${c.n}!`)}</h1><p class="sub">${L('Has acabat totes les unitats del nivell anterior. Enhorabona!', 'Has acabado todas las unidades del nivel anterior. ¡Enhorabuena!')}</p>
    <button class="btn big gold" onclick="P.course=${ci};save();flowNext()">${L(`ANAR AL NIVELL ${c.n}`, `IR AL NIVEL ${c.n}`)}</button><button class="btn big ghost" onclick="flowNext()">${L('CONTINUA', 'CONTINÚA')}</button></div>`;
  SFX.win(); confetti(220);
}
function scrKnight() {
  app.innerHTML = `<div class="scr"><div class="burst gold"></div><div class="ribbon">${L('NOU COMPANY', 'NUEVO COMPAÑERO')}</div><div class="rchar big tapme">${charSVG('cavaller', 'happy')}</div>
    <h1>${L("El Cavaller del Codi s'uneix a la colla!", '¡El Caballero del Código se une a la pandilla!')}</h1><p class="sub">«${tx(CH.cavaller.hello)}»</p>
    <button class="btn big gold" onclick="P.companion='cavaller';save();flowNext()">${L('VULL ANAR AMB EL CAVALLER!', '¡QUIERO IR CON EL CABALLERO!')}</button>
    <button class="btn big ghost" onclick="flowNext()">${L('CONTINUA', 'CONTINÚA')}</button></div>`;
  SFX.win(); confetti(200);
}

/* ---------- Tema de l'escola i currículum ---------- */
function schoolCard() {
  const tt = teacherTema();
  if (tt) return `<button class="testcard school" onclick="startSchool(true)"><span class="tci">📚</span><span><b>${L('Tema de classe:', 'Tema de clase:')} ${tx(tt.u.title)}</b><small>${L("L'ha triat el teu docent. 10 preguntes: 7 del tema i 3 de repàs.", 'Lo ha elegido tu docente. 10 preguntas: 7 del tema y 3 de repaso.')}</small></span><span class="go">›</span></button>`;
  const sc = P.school; if (!sc || sc.course !== P.course) return '';
  const u = UNITS_()[sc.ui]; if (!u) return '';
  return `<button class="testcard school" onclick="startSchool()"><span class="tci">📚</span><span><b>${L("A l'escola fas:", 'En el cole das:')} ${tx(u.title)}</b><small>${L('Practica-ho: 10 preguntes del tema. +XP i cromo!', 'Practícalo: 10 preguntas del tema. ¡+XP y cromo!')}</small></span><span class="go">›</span></button>`;
}
function pickSchool() {
  modal(`<div class="sheet"><h3>${L("Què fas ara a l'escola?", '¿Qué estás dando en el cole?')}</h3><p>${L(`Tria el tema de ${tx(CUR().long)} que feu a classe. Te'l posarem a la pantalla principal per practicar-lo.`, `Elige el tema de ${tx(CUR().long)} que dais en clase. Te lo pondremos en la pantalla principal para practicarlo.`)}</p>
    <div class="slist">${UNITS_().map((u, i) => `<button class="sitem ${P.school && P.school.course === P.course && P.school.ui === i ? 'on' : ''}" style="--uc:${u.color}" onclick="setSchool(${i})"><span class="sdot"></span><span><b>${tx(u.title)}</b><small>${unitSents(u).map(k => SENT[k][2] + ' ' + tx(SENT[k])).join(' · ')}</small></span></button>`).join('')}</div></div>`);
}
function setSchool(i) { P.school = { course: P.course, ui: i, date: today() }; save(); closeModal(); startSchool(); }
// Pràctica del tema de classe: 7 preguntes del tema i 3 de repàs del que ja ha fet (sobretot del que li costa)
function startSchool(fromTeacher) {
  const tt = fromTeacher ? teacherTema() : null, sc = P.school, u = tt ? tt.u : UNITS_()[sc.ui];
  const own = new Set(u.lessons.flatMap(l => l.sk)), opts = u.lessons.map(l => l.sk.map(s => [s, l.L])).flat();
  // repàs: el que ja ha obert del seu curs i, si el tema és d'un altre curs, les unitats anteriors d'aquell curs que ja ha practicat
  const prev = tt && tt.ci !== P.course ? COURSES[tt.ci].units.slice(0, tt.ui).flatMap(x => x.lessons.flatMap(l => l.sk.filter(k => P.stats.sk[k]).map(k => [k, l.L]))) : [];
  const rev = [...trainPool(null), ...prev].filter(([s]) => !own.has(s)), nRev = rev.length ? 3 : 0, plan = [];
  for (let i = 0; i < 10 - nRev; i++) plan.push(pick(opts));
  const w = rev.map(([s]) => { const [c, t] = P.stats.sk[s] || [0, 0]; return 1 + 4 * (1 - (c + 1) / (t + 2)); }), sum = w.reduce((a, b) => a + b, 0);
  for (let i = 0; i < nRev; i++) { let r = Math.random() * sum, j = 0; while (j < w.length - 1 && r > w[j]) { r -= w[j]; j++; } plan.splice(ri(1, plan.length), 0, rev[j]); }
  startRun({ mode: 'train', ui: tt ? (tt.ci === P.course ? tt.ui : null) : sc.ui, li: null, plan, color: u.color });
}
function curriculumBox() {
  const s = P.stats, rows = Object.keys(SENT).map(k => {
    const sks = new Set(); UNITS_().forEach(u => u.lessons.forEach(l => l.sk.forEach(x => { if (skillSent(x) === k) sks.add(x); })));
    if (!sks.size) return '';
    let c = 0, t = 0; sks.forEach(x => { const v = s.sk[x]; if (v) { c += v[0]; t += v[1]; } });
    const pc = t ? Math.round(100 * c / t) : 0, lvl = !t ? L('Encara no', 'Aún no') : pc >= 85 ? L('Ho domines', 'Lo dominas') : pc >= 65 ? L('Vas bé', 'Vas bien') : L('A reforçar', 'A reforzar');
    return `<div class="crow"><div class="cn"><span>${SENT[k][2]}</span><b>${tx(SENT[k])}</b><small class="${!t ? '' : pc >= 85 ? 'up' : pc >= 65 ? '' : 'down'}">${lvl}${t ? ' · ' + pc + '%' : ''}</small></div><div class="cbar"><div style="width:${pc}%;background:${pc >= 85 ? 'var(--ok)' : pc >= 65 ? '#FFC93C' : t ? 'var(--ko)' : '#E6DEEE'}"></div></div></div>`;
  }).join('');
  return `<h2 class="h2">🏫 ${L("Currículum de l'escola", 'Currículo del cole')}</h2><p class="lead sm">${L('Els continguts segueixen el currículum oficial de matemàtiques de Catalunya per a primària i ESO (Decret 175/2022).', 'Los contenidos siguen el currículo oficial de matemáticas de Cataluña para primaria y ESO (Decreto 175/2022).')}</p><div class="cbox">${rows}</div>`;
}

/* ---------- Prova d'evolució ---------- */
function startEvolution() {
  const us = UNITS_(); let top = 0;
  us.forEach((u, i) => { if (unitOpen(i)) top = i; });
  const units = us.slice(0, Math.min(us.length, top + 2)), meta = [];
  for (let i = 0; i < 12; i++) { const ui = i % units.length, u = units[ui], l = u.lessons[i < 6 ? 2 : 4]; meta.push({ sk: pick(l.sk), L: l.L, ui }); }
  startRun({ mode: 'evo', plan: meta.map(m => [m.sk, m.L]), meta, color: '#22B5A0' });
}
function finishEvolution() {
  const res = LS.res, meta = LS.meta, ok = res.filter(Boolean).length, pct = Math.round(100 * ok / res.length);
  const byUnit = {}; meta.forEach((m, i) => { const k = m.ui; byUnit[k] ||= [0, 0]; byUnit[k][1]++; if (res[i]) byUnit[k][0]++; });
  const prev = [...P.tests].reverse().find(t => t.course === P.course);
  makeReco(meta.filter((m, i) => !res[i]), 'evo');
  P.tests.push({ date: today(), course: P.course, pct, ok, n: res.length, kind: 'evo', byUnit });
  LS = null;
  reward({ mode: 'evo', xp: 20, gems: 20, chest: 0, pct, prev: prev ? prev.pct : null, byUnit });
}
function evoChart(tests) {
  const t = tests.slice(-8); if (!t.length) return '';
  const W = 320, H = 150, x0 = 40, y0 = 120, w = (W - x0 - 16) / Math.max(1, t.length - 1);
  const pts = t.map((d, i) => [x0 + (t.length === 1 ? (W - x0) / 2 - 8 : i * w), y0 - d.pct / 100 * 100]);
  let s = `<svg viewBox="0 0 ${W} ${H}" class="evochart">`;
  [0, 50, 100].forEach(v => { const y = y0 - v; s += `<line x1="${x0}" y1="${y}" x2="${W - 8}" y2="${y}" stroke="#ECE4F3" stroke-width="1.5"/><text x="${x0 - 6}" y="${y + 4}" text-anchor="end" font-size="10" font-weight="800" fill="#8A7B99" font-family="Lexend">${v}%</text>`; });
  if (pts.length > 1) s += `<polyline points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="#22B5A0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="drawline"/>`;
  pts.forEach((p, i) => { s += `<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="#fff" stroke="#22B5A0" stroke-width="3" class="dot" style="animation-delay:${i * 120}ms"/><text x="${p[0]}" y="${p[1] - 11}" text-anchor="middle" font-size="11" font-weight="900" fill="#12806F" font-family="Lexend">${t[i].pct}%</text><text x="${p[0]}" y="${H - 8}" text-anchor="middle" font-size="9.5" font-weight="800" fill="#8A7B99" font-family="Lexend">${t[i].date.slice(8, 10)}/${t[i].date.slice(5, 7)}</text>`; });
  return s + '</svg>';
}
function scrEvolution(R) {
  const diff = R.prev == null ? null : R.pct - R.prev;
  const msg = diff == null ? L('Ja tenim el teu primer punt a la gràfica!', '¡Ya tenemos tu primer punto en la gráfica!') : diff > 0 ? L(`Has millorat <b>+${diff}%</b> des de l'última prova!`, `¡Has mejorado <b>+${diff}%</b> desde la última prueba!`) : diff === 0 ? L('Et mantens igual. A continuar practicant!', 'Te mantienes igual. ¡A seguir practicando!') : L('Aquesta vegada ha costat més. Cap problema: repassa i la propera anirà millor!', 'Esta vez ha costado más. ¡No pasa nada: repasa y la próxima irá mejor!');
  const us = UNITS_();
  app.innerHTML = `<div class="scr"><div class="burst"></div><div class="rchar tapme">${meC(diff == null || diff >= 0 ? 'happy' : 'think')}</div>
    <h1>${L("Prova d'evolució", 'Prueba de evolución')}: ${R.pct}%</h1><p class="sub">${msg}</p>
    <div class="evobox">${evoChart(P.tests.filter(t => t.course === P.course))}</div>
    <div class="plres">${Object.entries(R.byUnit).map(([ui, [c, t]]) => `<div class="${c === t ? 'ok' : ''}"><span>${c === t ? '✔' : c ? '½' : '·'}</span>${tx(us[ui].title)} <small class="mut">${c}/${t}</small></div>`).join('')}</div>
    ${recoBox(true)}
    <button class="btn big" onclick="flowNext()">${L('CONTINUA', 'CONTINÚA')}</button></div>`;
  countUp(); SFX.win(); if (diff > 0) confetti(160);
}

/* ---------- Entrena i agilitat mental ---------- */
const GAMES = () => [
  ['sprint', '⏱️', L('Contrarellotge', 'Contrarreloj'), L('60 segons: encerta tants càlculs com puguis.', '60 segundos: acierta tantos cálculos como puedas.')],
  ['flash', '⚡', L('Llampec', 'Relámpago'), L('15 preguntes amb 6 segons cadascuna. Com més ràpid, més punts!', '15 preguntas con 6 segundos cada una. ¡Cuanto más rápido, más puntos!')],
  ['chain', '🔗', L('Càlcul en cadena', 'Cálculo en cadena'), L('Els números apareixen d\'un en un: calcula de memòria fins al final.', 'Los números aparecen de uno en uno: calcula de memoria hasta el final.')]
];
function renderTrain() {
  const units = UNITS_().map((u, i) => ({ u, i })).filter(({ i }) => unitOpen(i) && trainPool(i).length), B = P.stats.bests;
  app.innerHTML = shell(`<h1 class="ph1">${L('Entrena', 'Entrena')}</h1><p class="lead">${L(`Practica el que ja has après de ${tx(CUR().long)} i posa a prova la teva agilitat mental.`, `Practica lo que ya has aprendido de ${tx(CUR().long)} y pon a prueba tu agilidad mental.`)}</p>
    ${classOff('batalles') ? '' : `<button class="tcard battle ${isPremium() ? '' : 'locked'}" onclick="${isPremium() ? "go('battles')" : "premiumModal('batalles')"}"><span class="ti">⚔️</span><span><b>${L('Batalles de mates', 'Batallas de mates')}</b><small>${L('Duels 1 contra 1 i partides de fins a 10. Mateixes preguntes per a tothom!', 'Duelos 1 contra 1 y partidas de hasta 10. ¡Mismas preguntas para todos!')}</small></span></button>`}
    ${P.classe && classOff('lliga') ? '' : `<button class="tcard lliga" onclick="go('league')"><span class="ti">🏆</span><span><b>${L('Lliga Numi', 'Liga Numi')}</b><small>${L('Cada XP és un punt. Els 3 primers de cada mes guanyen premi!', 'Cada XP es un punto. ¡Los 3 primeros de cada mes ganan premio!')}</small></span></button>`}
    <button class="tcard" onclick="startTrain()"><span class="ti">🧠</span><span><b>${L('Entrenament intel·ligent', 'Entrenamiento inteligente')}</b><small>${L('8 exercicis del que et costa més. Ideal per repassar.', '8 ejercicios de lo que más te cuesta. Ideal para repasar.')}</small></span></button>
    ${testInfo().due ? `<button class="tcard evo" onclick="startEvolution()"><span class="ti">🧪</span><span><b>${L("Prova d'evolució", 'Prueba de evolución')}</b><small>${L('Ja la pots fer! Mira quant has millorat.', '¡Ya puedes hacerla! Mira cuánto has mejorado.')}</small></span></button>` : ''}
    <button class="tcard school" onclick="pickSchool()"><span class="ti">📚</span><span><b>${L("Què fas ara a l'escola?", '¿Qué estás dando en el cole?')}</b><small>${L("Tria el tema que fas a classe i practica'l: així t'anirà millor a l'escola!", 'Elige el tema que das en clase y practícalo: ¡así te irá mejor en el cole!')}</small></span></button>
    ${typeof esoTools === 'function' ? esoTools() : ''}<h2 class="h2">⚡ ${L('Agilitat mental', 'Agilidad mental')}</h2>
    <div class="ggrid">${GAMES().map(([id, ic, t, d]) => `<button class="gcard" onclick="startGame('${id}')"><span class="gi">${ic}</span><b>${t}</b><small>${d}</small><span class="grec">🏆 ${B[id] || 0}</span></button>`).join('')}</div>
    <h2 class="h2">${L('Repassa una unitat', 'Repasa una unidad')}</h2>
    ${units.length ? units.map(({ u, i }) => `<button class="ucard" style="--uc:${u.color}" onclick="startTrain(${i})"><span class="uic">${charSVG(u.guide, 'idle')}</span><span><b>${tx(u.title)}</b><small>${L('Unitat', 'Unidad')} ${i + 1}</small></span><span class="go">›</span></button>`).join('') : `<p class="empty">${L('Quan acabis la primera lliçó del camí, aquí podràs repassar-la.', 'Cuando acabes la primera lección del camino, aquí podrás repasarla.')}</p>`}`, 'train');
}
function quickQ() {
  const n = CUR().n, kinds = n === 1 ? ['add', 'sub'] : n === 2 ? ['add', 'sub', 'mul'] : ['add', 'sub', 'mul', 'div'];
  let a, b;
  switch (pick(kinds)) {
    case 'add': if (n === 1) { a = ri(1, 10); b = ri(1, 10); } else { a = ri(10, 89); b = ri(2, n >= 3 ? 40 : 9); } return { q: `${a} + ${b}`, ans: a + b };
    case 'sub': if (n === 1) { a = ri(5, 20); b = ri(1, Math.min(a, 10)); } else { a = ri(20, 99); b = ri(2, Math.min(a - 1, n >= 3 ? 40 : 9)); } return { q: `${a} − ${b}`, ans: a - b };
    case 'mul': a = n === 2 ? pick([2, 5, 10]) : ri(2, n >= 5 ? 12 : 10); b = ri(2, 10); return { q: `${a} × ${b}`, ans: a * b };
    default: b = ri(2, n >= 5 ? 12 : 10); a = ri(2, 10); return { q: `${a * b} ÷ ${b}`, ans: a };
  }
}
function startGame(id) { if (id === 'sprint') return startSprint(); startAgility(id); }
function gameShell(id, extraTop, body) {
  app.innerHTML = `<div class="lesson game"><div class="l-top"><button class="xbtn" onclick="go('train')" aria-label="${L('Surt', 'Salir')}">✕</button>${extraTop}</div><div class="l-body">${body}</div></div>`;
}
function startSprint() {
  SP = { t0: Date.now(), dur: 60000, score: 0, input: '', busy: false };
  gameShell('sprint', `<div class="pbar time"><div class="pfill" id="tbar" style="width:100%"></div></div><div class="combo on">✅<b id="sc">0</b></div>`, `<div class="sq" id="sq"></div><div class="inbox" id="inbox"><span id="inval" class="ph">?</span></div>${padHTML('skey')}`);
  nextSprint();
  SP.timer = setInterval(() => { const left = Math.max(0, 1 - (Date.now() - SP.t0) / SP.dur); $('#tbar').style.width = left * 100 + '%'; $('#tbar').classList.toggle('low', left < .2); if (left <= 0) endSprint(); }, 100);
}
function nextSprint() { SP.cur = quickQ(); SP.input = ''; SP.busy = false; const q = $('#sq'); q.textContent = SP.cur.q + ' = ?'; q.classList.remove('pop-in'); void q.offsetWidth; q.classList.add('pop-in'); updSprint(); $('#inbox').className = 'inbox'; }
function updSprint() { const el = $('#inval'); el.textContent = SP.input || '?'; el.classList.toggle('ph', !SP.input); }
function skey(k) {
  if (!SP || SP.busy) return;
  const ansS = String(SP.cur.ans);
  if (k === 'del') { SP.input = SP.input.slice(0, -1); return updSprint(); }
  if (k !== 'ok') { SP.input += k; updSprint(); }
  if (SP.input === ansS) { SP.score++; record('sprint', true); SFX.ok(); $('#sc').textContent = SP.score; $('#inbox').classList.add('right'); sparkle($('#inbox'), 8); SP.busy = true; setTimeout(() => SP && nextSprint(), 220); }
  else if (k === 'ok' ? SP.input.length > 0 : SP.input.length >= ansS.length) { record('sprint', false); SFX.ko(); $('#inbox').classList.add('wrong'); $('#inval').textContent = ansS; SP.busy = true; setTimeout(() => SP && nextSprint(), 900); }
}
function stopSprint() { if (SP && SP.timer) clearInterval(SP.timer); SP = null; }
function endSprint() { const score = SP.score; stopSprint(); endGame('sprint', score, L('Temps!|¡Tiempo!', 'Temps!|¡Tiempo!')); }
function endGame(id, score, title) {
  const B = P.stats.bests, rec = score > (B[id] || 0); if (rec) B[id] = score;
  if (id === 'sprint') P.stats.sprintBest = B.sprint;
  P.stats.games++; misEvent('game');
  reward({ mode: 'game', title, score, record: rec, best: B[id], xp: Math.max(2, Math.round(score * (id === 'chain' ? 4 : id === 'flash' ? .5 : 1))), gems: Math.floor(score * (id === 'chain' ? 2 : id === 'flash' ? .15 : .34)), chest: 0, perfect: false });
}
/* Llampec i càlcul en cadena */
function startAgility(id) {
  AG = { id, round: 0, score: 0, input: '', busy: false };
  if (id === 'flash') {
    AG.total = 15;
    gameShell(id, `<div class="pbar"><div class="pfill" id="gbar" style="width:0%"></div></div><div class="combo on">⚡<b id="sc">0</b></div>`,
      `<div class="ring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" class="rbg"/><circle cx="60" cy="60" r="52" class="rfg" id="rfg"/></svg><div class="sq" id="sq"></div></div><div class="inbox" id="inbox"><span id="inval" class="ph">?</span></div>${padHTML('akey')}`);
    return nextFlash();
  }
  AG.total = 5;
  gameShell(id, `<div class="pbar"><div class="pfill" id="gbar" style="width:0%"></div></div><div class="combo on">🔗<b id="sc">0</b></div>`, `<div id="chainBox"></div>`);
  nextChain();
}
function stopAgility() { if (AG) { clearInterval(AG.timer); clearTimeout(AG.to); } AG = null; }
function nextFlash() {
  if (!AG) return;
  if (AG.round >= AG.total) { const s = AG.score; stopAgility(); return endGame('flash', s, 'Llampec!|¡Relámpago!'); }
  AG.cur = quickQ(); AG.input = ''; AG.busy = false; AG.t0 = Date.now(); AG.round++;
  $('#gbar').style.width = (AG.round - 1) / AG.total * 100 + '%';
  const q = $('#sq'); q.textContent = AG.cur.q; q.classList.remove('pop-in'); void q.offsetWidth; q.classList.add('pop-in');
  $('#inbox').className = 'inbox'; updAg();
  clearInterval(AG.timer);
  AG.timer = setInterval(() => {
    const left = Math.max(0, 1 - (Date.now() - AG.t0) / 6000), c = $('#rfg'); if (!c) return;
    c.style.strokeDashoffset = 327 * (1 - left); c.classList.toggle('low', left < .34);
    if (left <= 0) { clearInterval(AG.timer); flashMiss(); }
  }, 50);
}
function updAg() { const el = $('#inval'); if (el) { el.textContent = AG.input || '?'; el.classList.toggle('ph', !AG.input); } }
function flashMiss() { AG.busy = true; SFX.ko(); $('#inbox').classList.add('wrong'); $('#inval').textContent = AG.cur.ans; AG.to = setTimeout(nextFlash, 900); }
function akey(k) {
  if (!AG || AG.busy) return;
  if (AG.id === 'chain') return chainKey(k);
  const ansS = String(AG.cur.ans);
  if (k === 'del') { AG.input = AG.input.slice(0, -1); return updAg(); }
  if (k !== 'ok') { AG.input += k; updAg(); }
  if (AG.input === ansS) {
    clearInterval(AG.timer); AG.busy = true;
    const pts = Math.max(1, Math.ceil((6000 - (Date.now() - AG.t0)) / 1000)) * 2;
    AG.score += pts; record('flash', true); SFX.ok(); $('#sc').textContent = AG.score; $('#inbox').classList.add('right'); sparkle($('#inbox'), 10); floatTxt($('#inbox'), '+' + pts, 'gain');
    AG.to = setTimeout(nextFlash, 450);
  } else if (k === 'ok' ? AG.input.length > 0 : AG.input.length >= ansS.length) { clearInterval(AG.timer); record('flash', false); flashMiss(); }
}
function chainGen() {
  const n = CUR().n, steps = n <= 2 ? 3 : n <= 4 ? 4 : 5; let v = ri(n <= 2 ? 1 : 2, n <= 2 ? 9 : 12); const seq = [String(v)];
  for (let i = 0; i < steps; i++) {
    const opts = ['+', '−']; if (n >= 3 && v <= 20) opts.push('×'); if (n >= 3 && v % 2 === 0 && v > 2) opts.push('÷');
    const op = pick(opts);
    if (op === '+') { const a = ri(1, n <= 2 ? 9 : 15); v += a; seq.push('+ ' + a); }
    else if (op === '−') { if (v <= 1) { const a = ri(1, 9); v += a; seq.push('+ ' + a); continue; } const a = ri(1, Math.min(v - 1, n <= 2 ? 9 : 15)); v -= a; seq.push('− ' + a); }
    else if (op === '×') { const a = pick([2, 3]); v *= a; seq.push('× ' + a); }
    else { v /= 2; seq.push('÷ 2'); }
  }
  return { seq, ans: v };
}
function nextChain() {
  if (!AG) return;
  if (AG.round >= AG.total) { const s = AG.score; stopAgility(); return endGame('chain', s, 'Cadena completa!|¡Cadena completa!'); }
  AG.round++; AG.cur = chainGen(); AG.input = ''; AG.busy = true;
  $('#gbar').style.width = (AG.round - 1) / AG.total * 100 + '%';
  const box = $('#chainBox'), speed = CUR().n <= 2 ? 1700 : CUR().n <= 4 ? 1450 : 1250;
  box.innerHTML = `<div class="chainhead">${L('Cadena', 'Cadena')} ${AG.round}/${AG.total} · ${L('calcula de memòria!', '¡calcula de memoria!')}</div><div class="chainstage"><div class="chainnum" id="cnum"></div></div><div class="chaindots">${AG.cur.seq.map(() => '<i></i>').join('')}</div>`;
  let i = 0;
  const show = () => {
    if (!AG) return;
    if (i < AG.cur.seq.length) {
      const el = $('#cnum'); el.textContent = AG.cur.seq[i]; el.classList.remove('flip'); void el.offsetWidth; el.classList.add('flip');
      $$('.chaindots i')[i].classList.add('on'); SFX.tick(); i++; AG.to = setTimeout(show, speed);
    } else {
      box.innerHTML = `<div class="chainhead">${L('Quin és el resultat final?', '¿Cuál es el resultado final?')}</div><div class="inbox" id="inbox"><span id="inval" class="ph">?</span></div>${padHTML('akey')}`;
      AG.busy = false;
    }
  };
  AG.to = setTimeout(show, 600);
}
function chainKey(k) {
  if (k === 'del') { AG.input = AG.input.slice(0, -1); return updAg(); }
  if (k !== 'ok') { if (AG.input.length < 5) AG.input += k; return updAg(); }
  if (!AG.input) return;
  AG.busy = true; const ok = +AG.input === AG.cur.ans;
  record('chain', ok);
  if (ok) { AG.score++; $('#sc').textContent = AG.score; SFX.ok(); $('#inbox').classList.add('right'); sparkle($('#inbox'), 14); }
  else { SFX.ko(); $('#inbox').classList.add('wrong'); }
  $('#chainBox').insertAdjacentHTML('beforeend', `<div class="chainrecap">${AG.cur.seq.join(' ')} = <b>${AG.cur.ans}</b></div>`);
  AG.to = setTimeout(nextChain, ok ? 1200 : 2600);
}

/* ---------- Botiga ---------- */
function renderShop() {
  const comp = Object.keys(CH).map(id => {
    const c = CH[id], own = P.owned.includes(id), sel = P.companion === id;
    const btn = sel ? `<button class="btn sm ghost" disabled>${L('AMB TU', 'CONTIGO')}</button>` : own ? `<button class="btn sm" onclick="choose('${id}')">${L('TRIA', 'ELEGIR')}</button>` : c.price == null ? `<button class="btn sm fire" disabled>🔥 ${tx(c.unlock)}</button>` : `<button class="btn sm gold" ${P.gems < c.price ? 'disabled' : ''} onclick="buyChar('${id}')"><i class="ci">${ICON.gem}</i>${c.price}</button>`;
    return `<div class="item ${sel ? 'sel' : ''} ${own ? '' : 'nown'} ${c.price == null ? 'excl' : ''}"><div class="ipic tapme">${charSVG(id, sel ? 'happy' : 'idle', own ? P.acc : null, '', own ? clvOf(id) : 1)}</div><div class="iname">${tx(c.name)}</div>${own ? clvBar(id) : ''}<div class="idesc">${tx(c.desc)}</div>${btn}</div>`;
  }).join('');
  const acc = Object.keys(ACC).map(id => {
    const a = ACC[id], own = P.accOwned.includes(id), on = P.acc[a.slot] === id;
    const btn = own ? `<button class="btn sm ${on ? 'ghost' : ''}" onclick="toggleAcc('${id}')">${on ? L('TREU', 'QUITAR') : L('POSA', 'PONER')}</button>` : a.price == null ? `<button class="btn sm fire" disabled>🔥 ${tx(a.unlock)}</button>` : `<button class="btn sm gold" ${P.gems < a.price ? 'disabled' : ''} onclick="buyAcc('${id}')"><i class="ci">${ICON.gem}</i>${a.price}</button>`;
    return `<div class="item ${on ? 'sel' : ''} ${a.price == null ? 'excl' : ''}"><div class="ipic">${charSVG(P.companion, 'idle', { [a.slot]: id }, '', clvOf(P.companion))}</div><div class="iname">${tx(a.name)}</div>${btn}</div>`;
  }).join('');
  app.innerHTML = shell(`<h1 class="ph1">${L('Botiga', 'Tienda')}</h1><p class="lead">${L("Guanya diamants fent lliçons i canvia'ls per companys i accessoris. Els marcats amb 🔥 només es guanyen amb les ratxes!", 'Gana diamantes haciendo lecciones y cámbialos por compañeros y accesorios. ¡Los marcados con 🔥 solo se ganan con las rachas!')}</p>
    <h2 class="h2">${L('Companys', 'Compañeros')}</h2><div class="grid">${comp}</div>
    <h2 class="h2">${L('Accessoris', 'Accesorios')} <small>${L('per al teu company · un a la vegada', 'para tu compañero · uno a la vez')}</small></h2><div class="grid">${acc}</div>
    <h2 class="h2">${L('Carta especial', 'Carta especial')}</h2><div class="item wide"><div class="ipic nikepic">${stickerHTML(cardById('nike'))}</div><div><div class="iname">${L('Nike, la deessa de la victòria', 'Nike, la diosa de la victoria')}</div><div class="idesc">${L(`La carta dels campions de les batalles. ${P.album && P.album.nike ? `En tens ${P.album.nike}.` : 'Encara no la tens!'}`, `La carta de los campeones de las batallas. ${P.album && P.album.nike ? `Tienes ${P.album.nike}.` : '¡Todavía no la tienes!'}`)}</div></div>
    <button class="btn sm gold" ${P.gems < NIKE_PRICE ? 'disabled' : ''} onclick="buyNike()"><i class="ci">${ICON.gem}</i>${NIKE_PRICE}</button></div>
    <h2 class="h2">${L('Ajudes', 'Ayudas')}</h2><div class="item wide"><div class="ipic big-emoji">🧊</div><div><div class="iname">${L('Protector de ratxa', 'Protector de racha')}</div><div class="idesc">${L(`Si un dia no pots practicar, la ratxa no s'apaga. En tens ${P.freeze} de 2.`, `Si un día no puedes practicar, la racha no se apaga. Tienes ${P.freeze} de 2.`)}</div></div>
    <button class="btn sm gold" ${P.gems < 50 || P.freeze >= 2 ? 'disabled' : ''} onclick="buyFreeze()"><i class="ci">${ICON.gem}</i>50</button></div>`, 'shop');
}
function buyChar(id) {
  const c = CH[id]; if (c.price == null || P.gems < c.price || P.owned.includes(id)) return;
  P.gems -= c.price; P.owned.push(id); P.companion = id;
  const nb = checkBadges(); save(); SFX.coin(); confetti(100); renderShop();
  modal(`<div class="sheet card cent"><div class="mchar tapme">${charSVG(id, 'happy', P.acc)}</div><h3>${L(`${tx(c.name)} s'uneix a la colla!`, `¡${tx(c.name)} se une a la pandilla!`)}</h3><p>«${tx(c.hello)}»</p><button class="btn big" onclick="closeModal()">${L('GENIAL!', '¡GENIAL!')}</button></div>`, true);
  nb.forEach(b => toast(`${b[1]} ${L('Nova medalla', 'Nueva medalla')}: <b>${tx(b[2])}</b> (+10 💎)`));
}
function choose(id) { P.companion = id; save(); SFX.tap(); renderShop(); }
function buyAcc(id) {
  const a = ACC[id]; if (a.price == null || P.gems < a.price || P.accOwned.includes(id)) return;
  P.gems -= a.price; P.accOwned.push(id); P.acc = { [a.slot]: id };
  const nb = checkBadges(); save(); SFX.coin(); confetti(60); renderShop();
  toast(`${tx(a.name)} ✨`); nb.forEach(b => setTimeout(() => toast(`${b[1]} ${L('Nova medalla', 'Nueva medalla')}: <b>${tx(b[2])}</b> (+10 💎)`), 900));
}
function toggleAcc(id) { const s = ACC[id].slot; if (P.acc[s] === id) delete P.acc[s]; else P.acc = { [s]: id }; // un accessori a la vegada
  save(); SFX.tap(); renderShop(); }
const NIKE_PRICE = 250;
function buyNike() { if (P.gems < NIKE_PRICE) return; P.gems -= NIKE_PRICE; albumFix(); const dup = !!P.album.nike; P.album.nike = (P.album.nike || 0) + 1; save(); SFX.coin(); FLOW = [() => scrPack([{ s: cardById('nike'), dup }])]; FLOW.back = 'shop'; flowNext(); }
function buyFreeze() { if (P.gems < 50 || P.freeze >= 2) return; P.gems -= 50; P.freeze++; save(); SFX.coin(); renderShop(); toast(L('🧊 Protector de ratxa preparat!', '🧊 ¡Protector de racha listo!')); }

/* ---------- Medalles ---------- */
function renderBadges(tabs = '') {
  const got = BADGES.filter(b => P.badges.includes(b[0])).length;
  app.innerHTML = shell(`<h1 class="ph1">${L('La meva col·lecció', 'Mi colección')}</h1>${tabs}<p class="lead">${L(`N'has aconseguit <b>${got}</b> de ${BADGES.length}. Cada una val +10 diamants.`, `Has conseguido <b>${got}</b> de ${BADGES.length}. Cada una vale +10 diamantes.`)}</p>
    <h2 class="h2">${L('Premis de ratxa', 'Premios de racha')}</h2><div class="bgrid">${SRW.map(r => { const on = P.srw.includes(r.d); return `<div class="badge ${on ? 'on fire' : ''}"><div class="bi">${on ? r.icon : '🔒'}</div><b>${r.d} ${L('dies seguits', 'días seguidos')}</b><span>${tx(r.txt)}</span></div>`; }).join('')}</div>
    <h2 class="h2">${L('Medalles', 'Medallas')}</h2><div class="bgrid">${BADGES.map(b => { const on = P.badges.includes(b[0]); return `<div class="badge ${on ? 'on' : ''}"><div class="bi">${on ? b[1] : '🔒'}</div><b>${tx(b[2])}</b><span>${tx(b[3])}</span></div>`; }).join('')}</div>`, 'album');
}

/* ---------- Perfil ---------- */
const FEEL = { love: ["😍 M'encanten", '😍 Me encantan'], good: ['🙂 Em van bé', '🙂 Me van bien'], meh: ['😐 Normal', '😐 Normal'], hard: ['😟 Em costen', '😟 Me cuestan'] };
const LIKE = { calc: ['🧮 Calcular', '🧮 Calcular'], logic: ['🧩 Enigmes i lògica', '🧩 Enigmas y lógica'], geo: ['📐 Formes i mesures', '📐 Formas y medidas'], prob: ['🕵️ Problemes', '🕵️ Problemas'] };
function renderProfile() {
  // Premium de pagament: l'estat de la subscripció (renovació, cancel·lació) es consulta en obrir el perfil
  if (P.pla === 'premium' && !P.classe && !renderProfile.pulled) { renderProfile.pulled = 1; pull(); }
  if (!renderProfile.q) { renderProfile.q = 1; classeRefresh().then(() => { renderProfile.q = 0; if (VIEW === 'profile') renderProfile.inner(); }); }
  return renderProfile.inner();
}
renderProfile.inner = function () {
  const l = lvlOf(P.xp), a = xpFor(l), b = xpFor(l + 1), s = P.stats, acc = s.answers ? Math.round(100 * s.correct / s.answers) : 0, ti = testInfo();
  const rows = UNITS_().map((u, i) => {
    const sks = new Set(u.lessons.flatMap(x => x.sk)); let c = 0, t = 0;
    sks.forEach(k => { const v = s.sk[k]; if (v) { c += v[0]; t += v[1]; } });
    const done = prog(i).stars.filter(x => x).length, tot = REP(u) + 1, pc = t ? Math.round(100 * c / t) : 0;
    return `<div class="urow" style="--uc:${u.color}"><div class="un"><b>${i + 1}. ${tx(u.title)}</b><small>${done}/${tot} · ${t ? pc + L("% d'encerts", '% de aciertos') : L('encara no', 'aún no')}</small></div><div class="ubar"><div style="width:${done / tot * 100}%"></div></div></div>`;
  }).join('');
  const myB = BADGES.filter(x => P.badges.includes(x[0])), mySR = SRW.filter(r => P.srw.includes(r.d)), evo = P.tests.filter(t => t.course === P.course);
  const sv = P.survey;
  app.innerHTML = shell(`<div class="phead"><div class="pchar tapme">${meC('happy')}</div><div><h1>${esc(P.name)}</h1><div class="plv">${L('Nivell', 'Nivel')} ${l} · ${P.xp} XP</div><div class="lbar"><div style="width:${Math.min(100, (P.xp - a) / (b - a) * 100)}%"></div></div><small class="mut">${L(`${b - P.xp} XP per al nivell ${l + 1}`, `${b - P.xp} XP para el nivel ${l + 1}`)}</small></div></div>
    <h2 class="h2">🏆 ${L('Els meus assoliments', 'Mis logros')}</h2>
    <div class="sgrid">
      <div class="st"><b>🔥 ${streakNow()}</b><span>${L('ratxa actual', 'racha actual')}</span></div><div class="st"><b>🏆 ${P.best}</b><span>${L('millor ratxa', 'mejor racha')}</span></div>
      <div class="st"><b>📚 ${s.lessons}</b><span>${L('lliçons', 'lecciones')}</span></div><div class="st"><b>🎯 ${acc}%</b><span>${L("d'encerts", 'de aciertos')}</span></div>
      <div class="st"><b>💯 ${s.perfect}</b><span>${L('perfectes', 'perfectas')}</span></div><div class="st"><b>⚡ ${s.bestCombo}</b><span>${L("millor ratxa d'encerts", 'mejor racha de aciertos')}</span></div>
      <div class="st"><b>🏅 ${myB.length}/${BADGES.length}</b><span>${L('medalles', 'medallas')}</span></div><div class="st"><b>🗺️ ${unitsDone(P)}</b><span>${L('unitats superades', 'unidades superadas')}</span></div></div>
    ${myB.length || mySR.length ? `<div class="mylogros">${[...mySR.map(r => `<span class="lg fire" title="${tx(r.txt)}">${r.icon}</span>`), ...myB.map(x => `<span class="lg" title="${tx(x[2])}">${x[1]}</span>`)].join('')}<button class="lgmore" onclick="go('badges')">${L('Veure-les totes', 'Verlas todas')} ›</button></div>` : `<p class="empty">${L('Encara no tens medalles. Fes la primera lliçó i guanya la primera!', 'Aún no tienes medallas. ¡Haz la primera lección y gana la primera!')}</p>`}
    <div class="gbests">${GAMES().map(([id, ic, t]) => `<div><span>${ic}</span><b>${s.bests[id] || 0}</b><small>${t}</small></div>`).join('')}</div>
    <h2 class="h2">📈 ${L('La meva evolució', 'Mi evolución')}</h2>
    <div class="evobox">${evo.length ? evoChart(evo) : `<p class="empty">${L("Fes la teva primera prova d'evolució per veure la gràfica.", 'Haz tu primera prueba de evolución para ver la gráfica.')}</p>`}
      ${ti.due ? `<button class="btn big" onclick="startEvolution()">🧪 ${L("FES LA PROVA D'EVOLUCIÓ", 'HAZ LA PRUEBA DE EVOLUCIÓN')}</button>` : `<p class="mut c">${L(`Propera prova d'evolució d'aquí a <b>${ti.left} ${dies(ti.left)}</b>.`, `Próxima prueba de evolución dentro de <b>${ti.left} ${dies(ti.left)}</b>.`)}</p>`}</div>
    ${curriculumBox()}
    <h2 class="h2">${L('Progrés a ', 'Progreso en ')}${tx(CUR().long)}</h2><div class="urows">${rows}</div>
    <h2 class="h2">🔑 ${L('El meu compte', 'Mi cuenta')}</h2>
    <div class="codecard"><div>${P.username ? `<small>${L('Usuari', 'Usuario')}</small><b>${esc(P.username)}</b>` : `<small>${L('El teu codi secret', 'Tu código secreto')}</small><b>${P.code || '…'}</b>`}<span id="cloud">${cloudTxt()}</span></div>
      <div class="ctip">${P.username ? L(`Entra des de qualsevol dispositiu amb el teu usuari i contrasenya. Codi de reserva: <b>${P.code || '…'}</b>`, `Entra desde cualquier dispositivo con tu usuario y contraseña. Código de reserva: <b>${P.code || '…'}</b>`) : L("✏️ Apunta'l! O crea un usuari i contrasenya, que és més fàcil de recordar.", '✏️ ¡Apúntalo! O crea un usuario y contraseña, que es más fácil de recordar.')}</div>
      <button class="btn sm gold" onclick="accountModal()">${P.username ? L('CANVIA LA CONTRASENYA', 'CAMBIAR LA CONTRASEÑA') : L('CREA USUARI I CONTRASENYA', 'CREAR USUARIO Y CONTRASEÑA')}</button></div>
    <h2 class="h2">🏫 ${L('La meva classe', 'Mi clase')}</h2>${classeBox()}
    ${P.classe ? '' : `<h2 class="h2">⭐ ${L('El meu pla', 'Mi plan')}</h2>${premiumBox()}`}
    ${sv ? `<h2 class="h2">${L("Prova d'inici", 'Prueba inicial')}</h2><div class="survey"><div><span>${L('Curs', 'Curso')}</span><b>${esc(sv.curs)}</b></div><div><span>${L('Les mates…', 'Las mates…')}</span><b>${FEEL[sv.feel] ? tx(FEEL[sv.feel]) : '—'}</b></div><div><span>${L("M'agrada", 'Me gusta')}</span><b>${LIKE[sv.like] ? tx(LIKE[sv.like]) : '—'}</b></div><div><span>${L('Resultat', 'Resultado')}</span><b>${esc(sv.result)}</b></div></div>` : ''}
    <h2 class="h2">${L('Ajustos', 'Ajustes')}</h2>
    <div class="set"><span>${L('Idioma', 'Idioma')}</span><div class="seg"><button class="${LANG === 'ca' ? 'on' : ''}" onclick="setLang('ca')">Català</button><button class="${LANG === 'es' ? 'on' : ''}" onclick="setLang('es')">Castellano</button></div></div>
    <div class="set"><span>${L('Objectiu diari', 'Objetivo diario')}</span><div class="seg">${[10, 20, 30, 50].map(g => `<button class="${P.goal === g ? 'on' : ''}" onclick="P.goal=${g};save();renderProfile()">${g} XP</button>`).join('')}</div></div>
    <div class="set"><span>${L('Sons', 'Sonidos')}</span><button class="tog ${P.sound ? 'on' : ''}" onclick="P.sound=!P.sound;save();renderProfile()" aria-label="${L('Sons', 'Sonidos')}"><i></i></button></div>
    <div class="row2 pbtns"><button class="btn ghost" onclick="go('profiles')">${L("CANVIA D'ALUMNE", 'CAMBIAR DE ALUMNO')}</button><button class="btn ghost redt" onclick="resetP()">${L('ESBORRA EL PROGRÉS', 'BORRAR EL PROGRESO')}</button></div>
    <p class="foot"><img src="${VAR.logo}" alt="${VAR.name}" class="footlogo"></p>
    <p class="legalf"><a href="https://numimates.com/privacitat?l=${LANG}" target="_blank" rel="noopener">${L('Privadesa', 'Privacidad')}</a> · <a href="https://numimates.com/avis-legal?l=${LANG}" target="_blank" rel="noopener">${L('Avís legal', 'Aviso legal')}</a></p>`, 'profile');
}
/* ---------- La meva classe: unir-se al grup del docent amb el codi AULA-XXXX ---------- */
function classeBox() {
  const c = P.classe;
  if (c) return `<div class="codecard"><div><small>${esc(c.centre)}</small><b>${esc(c.nom)}</b><span class="mut">${L('El teu docent veu el teu progrés.', 'Tu docente ve tu progreso.')}</span></div>
    <button class="btn sm ghost" onclick="classeLeave()">${L('SURT DE LA CLASSE', 'SALIR DE LA CLASE')}</button></div>`;
  return `<div class="codecard"><div><small>${L("Si el teu docent t'ha donat un codi", 'Si tu docente te ha dado un código')}</small><b>AULA-····</b></div>
    <button class="btn sm gold" onclick="classeModal()">${L('TINC UN CODI DE CLASSE', 'TENGO UN CÓDIGO DE CLASE')}</button></div>`;
}
function classeModal() {
  if (!P.code) return toast(L('Primer cal connexió a internet.', 'Primero hace falta conexión a internet.'));
  modal(`<div class="sheet card cent"><h3>${L('Uneix-te a la teva classe', 'Únete a tu clase')}</h3><p>${L('Escriu el codi que t\'ha donat el teu docent.', 'Escribe el código que te ha dado tu docente.')}</p>
    <input id="aula" class="nm" maxlength="9" placeholder="AULA-XXXX" autocapitalize="characters" autocomplete="off" style="text-transform:uppercase;text-align:center;letter-spacing:.1em">
    <p class="err" id="aerr"></p><button class="btn big" onclick="classeJoin()">${L('ENTRA A LA CLASSE', 'ENTRA EN LA CLASE')}</button></div>`, true);
  setTimeout(() => { const i = $('#aula'); i && i.focus(); i && i.addEventListener('keydown', e => { if (e.key === 'Enter') classeJoin(); }); }, 50);
}
async function classeJoin() {
  const v = $('#aula').value.trim(); if (!v) return;
  $('#aerr').textContent = '…';
  try {
    const r = await api('classe', { code: P.code, classe: v });
    if (!r.grup) { $('#aerr').textContent = r.status === 429 ? ERR('massa') : L('Aquest codi no existeix. Revisa-ho amb el teu docent.', 'Ese código no existe. Revísalo con tu docente.'); return; }
    P.classe = r.grup; save(); closeModal(); SFX.win(); toast(L(`Ja ets a ${esc(r.grup.nom)}!`, `¡Ya estás en ${esc(r.grup.nom)}!`)); renderProfile();
  } catch (e) { $('#aerr').textContent = ERR(); }
}
// enllaç o QR del docent (?classe=AULA-XXXX): obre el formulari amb el codi ja escrit quan l'alumne ja té compte
(() => { try { const q = new URLSearchParams(location.search).get('classe'); if (q && /^AULA-[A-Z0-9]{4}$/i.test(q)) sessionStorage.setItem('numi-classe', q.toUpperCase()); if (q) history.replaceState(null, '', location.pathname); } catch (e) { } })();
function classeLink() {
  let c = null; try { c = sessionStorage.getItem('numi-classe'); } catch (e) { }
  if (!c || !P || !P.code || VIEW !== 'home' || $('.modal-bg')) return;
  try { sessionStorage.removeItem('numi-classe'); } catch (e) { }
  if (P.classe) return toast(L(`Ja ets a la classe ${esc(P.classe.nom)}.`, `Ya estás en la clase ${esc(P.classe.nom)}.`));
  classeModal(); setTimeout(() => { const i = $('#aula'); if (i) i.value = c; }, 60);
}
function classeLeave() {
  ask(L('Segur que vols sortir de la classe? El teu docent ja no veurà el teu progrés.', '¿Seguro que quieres salir de la clase? Tu docente ya no verá tu progreso.'), L('SURT', 'SALIR'), L('CANCEL·LA', 'CANCELAR'), async () => {
    try { await api('classe', { code: P.code, action: 'leave' }); } catch (e) { }
    delete P.classe; save(); renderProfile();
  });
}
// si el docent tanca el grup o treu l'alumne, l'app se n'assabenta en obrir el perfil
async function classeRefresh() {
  if (!P || !P.code || !navigator.onLine) return; const was = JSON.stringify(P.classe || null);
  try { const r = await api('classe', { code: P.code, action: 'info' }); if (r.grup) P.classe = r.grup; else delete P.classe; if (JSON.stringify(P.classe || null) !== was) { saveLocal(); if (VIEW === 'home') renderHome(); } } catch (e) { }
}
// «Mode escola»: el docent pot apagar les batalles o els intercanvis per al seu grup
const classOff = k => !!(P && P.classe && P.classe.opts && P.classe.opts[k] === false);
// Tema que el docent ha marcat per al grup (té prioritat sobre el que tria l'alumne)
function teacherTema() {
  const t = P && P.classe && P.classe.tema; if (!t) return null;
  for (let ci = 0; ci < COURSES.length; ci++) { const ui = COURSES[ci].units.findIndex(u => u.id === t); if (ui >= 0) return { ci, ui, u: COURSES[ci].units[ui] }; }
  return null;
}
function resetP() {
  ask(L(`Segur que vols esborrar tot el progrés de <b>${esc(P.name)}</b>? No es pot desfer.`, `¿Seguro que quieres borrar todo el progreso de <b>${esc(P.name)}</b>? No se puede deshacer.`), L('ESBORRA', 'BORRAR'), L('CANCEL·LA', 'CANCELAR'), async () => {
    const keep = { id: P.id, code: P.code, username: P.username, name: P.name, lang: P.lang, course: P.course, baseCourse: P.baseCourse, survey: P.survey, goal: P.goal, sound: P.sound, unlockAll: false };
    for (const k in P) delete P[k]; Object.assign(P, freshProgress(), keep, { resetPending: true });
    save();   // es queda pendent (i es torna a provar) fins que el servidor confirma l'esborrat
    go('home');
  });
}
function slugName(n) { return (n.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '') || 'alumne').slice(0, 14) + ri(10, 99); }
const ERR = e => ({ 'usuari-ocupat': L('Aquest usuari ja existeix. Prova\'n un altre!', 'Ese usuario ya existe. ¡Prueba otro!'), 'usuari-format': L('L\'usuari ha de tenir de 3 a 20 lletres o números (sense espais).', 'El usuario debe tener de 3 a 20 letras o números (sin espacios).'), 'contrasenya-format': L('La contrasenya ha de tenir almenys 4 caràcters.', 'La contraseña debe tener al menos 4 caracteres.'), 'credencials': L('Usuari o contrasenya incorrectes.', 'Usuario o contraseña incorrectos.'), 'massa': L('Massa intents seguits. Espera uns minuts i torna-ho a provar.', 'Demasiados intentos seguidos. Espera unos minutos y vuelve a intentarlo.'), 'contrasenya-actual': L('La contrasenya actual no és correcta.', 'La contraseña actual no es correcta.') })[e] || L('No hi ha connexió. Torna-ho a provar.', 'No hay conexión. Vuelve a intentarlo.');
const passField = (id, ph) => `<div class="passf"><input id="${id}" class="nm" type="password" maxlength="60" placeholder="${ph}" autocomplete="new-password"><button type="button" class="eye" onclick="const i=document.getElementById('${id}');i.type=i.type==='password'?'text':'password'" aria-label="👁">👁</button></div>`;
function accountModal() {
  if (!P.code) return toast(L('Primer cal connexió a internet.', 'Primero hace falta conexión a internet.'));
  const has = !!P.username;
  modal(`<div class="sheet card cent"><h3>${has ? L('Canvia la contrasenya', 'Cambia la contraseña') : L('Crea el teu usuari', 'Crea tu usuario')}</h3>
    <input id="au" class="nm" maxlength="20" placeholder="${L('Usuari', 'Usuario')}" autocomplete="username" autocapitalize="none" value="${esc(P.username || slugName(P.name))}" ${has ? 'readonly' : ''}>
    ${has ? passField('ao', L('Contrasenya actual', 'Contraseña actual')) : ''}${passField('ap', has ? L('Contrasenya nova', 'Contraseña nueva') : L('Contrasenya', 'Contraseña'))}<div id="aerr" class="err"></div>
    ${has ? `<p class="mut" style="font-size:13px;margin:0">${L("Si no la recordes, el teu docent te la pot canviar.", 'Si no la recuerdas, tu docente te la puede cambiar.')}</p>` : ''}
    <div class="row2"><button class="btn ghost" onclick="closeModal()">${L('TORNA', 'VOLVER')}</button><button class="btn" onclick="saveAccount()">${L('DESA', 'GUARDAR')}</button></div></div>`, true);
}
async function saveAccount() {
  const u = $('#au').value.trim().toLowerCase(), p = $('#ap').value;
  if (!/^[a-z0-9._-]{3,20}$/.test(u)) return $('#aerr').textContent = ERR('usuari-format');
  if (p.length < 4) return $('#aerr').textContent = ERR('contrasenya-format');
  $('#aerr').textContent = '…';
  try {
    const r = await api('account', { code: P.code, username: u, password: p, old: $('#ao') ? $('#ao').value : undefined });
    if (r.ok) { P.username = u; saveLocal(); closeModal(); toast(L('✅ Compte desat!', '✅ ¡Cuenta guardada!')); renderProfile(); }
    else $('#aerr').textContent = ERR(r.error);
  } catch (e) { $('#aerr').textContent = ERR(); }
}

/* ---------- Alumnes i entrada ---------- */
function renderProfiles() {
  VIEW = 'profiles';
  const ps = Object.values(DB.profiles);
  app.innerHTML = `<div class="page solo">${langPill()}<h1 class="ph1 c">${L('Qui aprèn avui?', '¿Quién aprende hoy?')}</h1>
    <div class="plist">${ps.map((p, i) => `<div class="pcard" style="animation-delay:${i * 70}ms"><button class="pmain" onclick="switchP('${p.id}')"><span class="pav">${charSVG(p.companion, 'idle', p.acc, '', charLvl((p.cxp || {})[p.companion]))}</span><span><b>${esc(p.name)}</b><small>${COURSES[p.course] ? tx(COURSES[p.course].name) : ''} · ${L('Nivell', 'Nivel')} ${lvlOf(p.xp)} · 🔥 ${p.streak}</small></span></button><button class="pdel" onclick="delP('${p.id}')" aria-label="✕">✕</button></div>`).join('')}</div>
    <button class="btn big" onclick="onb(0)">+ ${L('SOC NOU/NOVA', 'SOY NUEVO/A')}</button>
    <button class="btn big ghost mt" onclick="loginModal()">🔑 ${L('JA TINC COMPTE', 'YA TENGO CUENTA')}</button></div>`;
}
function switchP(id) { P = DB.profiles[id]; DB.current = id; LANG = P.lang || DB.lang; saveLocal(); pull(); classeRefresh(); go('home'); }
function delP(id) {
  const p = DB.profiles[id];
  ask(L(`Vols treure <b>${esc(p.name)}</b> d'aquest dispositiu? El progrés continua desat al núvol.`, `¿Quieres quitar a <b>${esc(p.name)}</b> de este dispositivo? El progreso sigue guardado en la nube.`), L('TREU', 'QUITAR'), L('CANCEL·LA', 'CANCELAR'), () => {
    delete DB.profiles[id]; if (DB.current === id) { DB.current = null; P = null; } saveLocal();
    Object.keys(DB.profiles).length ? renderProfiles() : onb(0);
  });
}
function loginModal(withCode) {
  modal(`<div class="sheet card cent"><h3>${L('Entra al teu compte', 'Entra en tu cuenta')}</h3>
    ${withCode ? `<p>${L("Escriu el codi secret (per exemple, GUINEU-4827).", 'Escribe el código secreto (por ejemplo, GUINEU-4827).')}</p><input id="cd" class="nm" maxlength="20" placeholder="CODI-0000" autocomplete="off" autocapitalize="characters">`
      : `<input id="lu" class="nm" maxlength="20" placeholder="${L('Usuari', 'Usuario')}" autocomplete="username" autocapitalize="none">${passField('lp', L('Contrasenya', 'Contraseña')).replace('new-password', 'current-password')}`}
    <div id="lerr" class="err"></div>
    <div class="row2"><button class="btn ghost" onclick="closeModal()">${L('TORNA', 'VOLVER')}</button><button class="btn" onclick="doLogin(${withCode ? 1 : 0})">${L('ENTRA', 'ENTRAR')}</button></div>
    <button class="link" onclick="loginModal(${withCode ? 0 : 1})">${withCode ? L('Entra amb usuari i contrasenya', 'Entrar con usuario y contraseña') : L('Tinc un codi secret', 'Tengo un código secreto')}</button></div>`, true);
  const i = $(withCode ? '#cd' : '#lu'); i.focus();
  $$('.modal-bg input').forEach(x => x.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(withCode ? 1 : 0); }));
}
async function doLogin(withCode) {
  const data = withCode ? { code: $('#cd').value.trim().toUpperCase() } : { username: $('#lu').value.trim().toLowerCase(), password: $('#lp').value };
  if (withCode ? !data.code : !data.username || !data.password) return;
  $('#lerr').textContent = '…';
  try {
    const r = await api('login', data);
    if (!r.state) { $('#lerr').textContent = r.status === 429 ? ERR('massa') : r.error === 'clau' ? L('Aquest compte té contrasenya: entra amb el teu usuari i la contrasenya.', 'Esta cuenta tiene contraseña: entra con tu usuario y la contraseña.') : withCode ? L('No trobem aquest codi. Revisa les lletres i els números.', 'No encontramos ese código. Revisa las letras y los números.') : ERR('credencials'); return; }
    const code = r.code || data.code, ex = Object.values(DB.profiles).find(p => p.code === code);
    if (ex) { closeModal(); return switchP(ex.id); }
    const id = 'p' + Date.now().toString(36);
    P = migrate({ ...r.state, id, code, name: r.name, username: r.state.username || r.username || (withCode ? null : data.username), pla: r.pla || 'free', sub: r.sub || null }); P.dirty = false; P.holdReg = false;
    DB.profiles[id] = P; DB.current = id; LANG = P.lang; saveLocal();
    closeModal(); go('home'); toast(L(`Hola de nou, ${esc(P.name)}! 👋`, `¡Hola de nuevo, ${esc(P.name)}! 👋`));
  } catch (e) { $('#lerr').textContent = ERR(); }
}

/* ---------- Registre, enquesta i prova de nivell ---------- */
let ONB = {};
function onbShell(step, inner, back = true) {
  ONB.step = step;
  app.innerHTML = `<div class="page solo onb"><div class="onbtop"><div class="osteps">${[0, 1, 2, 3, 4].map(i => `<i class="${i <= step ? 'on' : ''}"></i>`).join('')}</div>${langPill()}</div>${inner}
    ${back && (step > 0 || Object.keys(DB.profiles).length) ? `<button class="link" onclick="${step > 0 ? `onb(${step - 1})` : 'renderProfiles()'}">${L('Tornar', 'Volver')}</button>` : ''}</div>`;
}
function onb(step) {
  VIEW = 'onboard';
  setVariant(ONB.variant && (step >= 2 || (step === 1 && ONB.stage)) ? ONB.variant : 'mates');
  if (step === 0) {
    ONB.stage = null; ONB.variant = null;
    onbShell(0, `<img class="onb-logo" src="${VAR.logo}" alt="${VAR.name}"><div class="onb-char tapme">${charSVG('numi', 'happy')}</div>
      <div class="bubble big">${IS_MENT ? L("Hola! Soc en <b>Numi</b>. T'acompanyaré cada dia a mantenir la ment activa. <b>Com et dius?</b>", '¡Hola! Soy <b>Numi</b>. Te acompañaré cada día a mantener la mente activa. <b>¿Cómo te llamas?</b>') : IS_PRO ? L("Ei! Soc en <b>Numi</b>. Les mates d'ESO, pas a pas i sense avorrir-te. <b>Com et dius?</b>", '¡Ey! Soy <b>Numi</b>. Las mates de ESO, paso a paso y sin aburrirte. <b>¿Cómo te llamas?</b>') : L("Hola! Soc en <b>Numi</b>. T'acompanyaré pas a pas perquè les mates et surtin rodones. <b>Com et dius?</b>", '¡Hola! Soy <b>Numi</b>. Te acompañaré paso a paso para que las mates te salgan redondas. <b>¿Cómo te llamas?</b>')}</div>
      <input id="nm" class="nm" maxlength="16" placeholder="${L('El teu nom', 'Tu nombre')}" autocomplete="off" enterkeyhint="go" value="${esc(ONB.name || '')}">
      <button class="btn big" onclick="onbName()">${L('SEGÜENT', 'SIGUIENTE')}</button>
      <button class="link" onclick="loginModal()">🔑 ${L('Ja tinc compte', 'Ya tengo cuenta')}</button>`);
    const i = $('#nm'); i.addEventListener('keydown', e => { if (e.key === 'Enter') onbName(); });
  }
  if (step === 1 && !ONB.stage) onbShell(1, `<div class="onb-char sm tapme">${charSVG('numi', 'idle')}</div><div class="bubble big">${L(`Encantat, <b>${esc(ONB.name)}</b>! <b>Què estàs estudiant?</b>`, `¡Encantado, <b>${esc(ONB.name)}</b>! <b>¿Qué estás estudiando?</b>`)}</div>
    <div class="ogrid stages">${[['primaria', '🎒', L('Primària', 'Primaria'), L('de 1r a 6è', 'de 1.º a 6.º')], ['eso', '🎓', L('Secundària', 'Secundaria'), L("ESO, de 1r a 4t", 'ESO, de 1.º a 4.º')], ['altres', '🌱', L('Altres', 'Otros'), L('Soc adult i vull entrenar la ment', 'Soy adulto y quiero entrenar la mente')]].map(([k, e, t, d], i) => `<button class="obtn ${ONB.stage === k ? 'on' : ''}" style="animation-delay:${i * 60}ms" onclick="onbStage('${k}')"><span>${e}</span><b>${t}</b><small>${d}</small></button>`).join('')}</div>`);
  else if (step === 1) onbShell(1, `<div class="onb-char sm tapme">${charSVG('numi', 'idle')}</div><div class="bubble big">${L('<b>Quants anys tens?</b>', '<b>¿Cuántos años tienes?</b>')}</div>
    <div class="cgrid ages">${(ONB.stage === 'eso' ? [12, 13, 14, 15, 16] : [5, 6, 7, 8, 9, 10, 11, 12]).map((a, i) => `<button class="cbtn ${ONB.age === a ? 'on' : ''}" style="animation-delay:${i * 40}ms" onclick="onbAge(${a})"><b>${a}${a === 16 ? '+' : ''}</b><small>${L('anys', 'años')}</small></button>`).join('')}</div>
    <button class="link" onclick="ONB.stage=null;ONB.variant=null;onb(1)">${L('No, estudio una altra cosa', 'No, estudio otra cosa')}</button>`);
  if (step === 2) onbShell(2, `<div class="onb-char sm tapme">${charSVG('guida', 'idle')}</div><div class="bubble big">${L("Soc la <b>Guida</b>. Explica'm una mica: <b>com et sents amb les mates?</b>", 'Soy <b>Guida</b>. Cuéntame un poco: <b>¿cómo te sientes con las mates?</b>')}</div>
    <div class="ogrid">${Object.entries(FEEL).map(([k, v], i) => { const t = tx(v); return `<button class="obtn ${ONB.feel === k ? 'on' : ''}" style="animation-delay:${i * 60}ms" onclick="ONB.feel='${k}';onb(3)"><span>${t.split(' ')[0]}</span>${t.slice(t.indexOf(' ') + 1)}</button>`; }).join('')}</div>`);
  if (step === 3) onbShell(3, `<div class="onb-char sm tapme">${charSVG('vuit', 'idle')}</div><div class="bubble big">${L("I ara, <b>què t'agrada més?</b>", 'Y ahora, <b>¿qué te gusta más?</b>')}</div>
    <div class="ogrid">${Object.entries(LIKE).map(([k, v], i) => { const t = tx(v); return `<button class="obtn ${ONB.like === k ? 'on' : ''}" style="animation-delay:${i * 60}ms" onclick="ONB.like='${k}';onb(4)"><span>${t.split(' ')[0]}</span>${t.slice(t.indexOf(' ') + 1)}</button>`; }).join('')}</div>`);
  if (step === 4) onbShell(4, `<div class="onb-char tapme">${charSVG('numi', 'happy')}</div>
    <div class="bubble big">${L("Perfecte! Ara et faré <b>unes preguntes</b> per saber per on hem de començar. <b>No és cap examen:</b> si no en saps alguna, toca «No ho sé» i ja està.", '¡Perfecto! Ahora te haré <b>unas preguntas</b> para saber por dónde empezar. <b>No es un examen:</b> si no sabes alguna, toca «No lo sé» y ya está.')}</div>
    <button class="btn big" onclick="startPlacement()">${L('COMENCEM!', '¡EMPECEMOS!')}</button><button class="link" onclick="LS={res:[]};finishPlacement(true)">${L('Salta la prova i comença pel principi', 'Salta la prueba y empieza por el principio')}</button>`);
}
// l'edat decideix la variant: a partir de 12 anys, Numi Pro (la mateixa app amb l'aspecte i les eines de l'ESO)
// primer què estudia (primària → Numi Mates, ESO → Numi Pro, altres → Numi Ment) i després l'edat
function onbStage(k) {
  // a les apps publicades, cada etapa és a la seva app
  const want = k === 'eso' ? 'pro' : k === 'altres' ? 'ment' : 'mates';
  if (HOST_VAR && want !== HOST_VAR) return stageHandoff(want);
  ONB.stage = k; ONB.age = null;
  if (HOST_VAR === 'pro') { ONB.variant = 'pro'; return onb(1); }
  if (k === 'altres') { ONB.variant = 'ment'; return typeof onbMent === 'function' ? onbMent() : toast(L('Numi Ment, per entrenar la ment, arriba molt aviat!', '¡Numi Ment, para entrenar la mente, llega muy pronto!')); }
  ONB.variant = k === 'eso' ? 'pro' : 'mates';
  if (k !== 'eso') return onb(1);
  setVariant('pro');
  app.innerHTML = `<div class="scr varsplash"><img class="onb-logo" src="${VAR.logo}" alt="${VAR.name}"><h1>${L("Et donem la benvinguda a Numi Pro", 'Te damos la bienvenida a Numi Pro')}</h1>
    <p class="sub">${L("La versió de Numi per a l'ESO: el temari d'institut, reptes més durs i en Numi com a assistent quan t'encallis.", 'La versión de Numi para la ESO: el temario del instituto, retos más duros y Numi como asistente cuando te atasques.')}</p>
    <button class="btn big" onclick="onb(1)">${L('ENDAVANT', 'ADELANTE')}</button></div>`;
  SFX.win && SFX.win();
}
function onbAge(a) {
  ONB.age = a;
  ONB.course = ONB.stage === 'eso' ? Math.min(9, Math.max(ESO_FROM, a - 6)) : Math.min(5, Math.max(0, a - 6));
  onb(2);
}
function onbName() { const n = $('#nm').value.trim(); if (!n) { $('#nm').classList.add('shake'); setTimeout(() => $('#nm').classList.remove('shake'), 500); return; } ONB.name = n; if (HOST_VAR === 'ment') { ONB.stage = 'altres'; ONB.variant = 'ment'; return onbMent(); } onb(1); }
function startPlacement() {
  const ci = ONB.course, c = COURSES[ci], meta = [];
  if (ci > 0) { const pc = COURSES[ci - 1]; [1, 2].forEach(k => { const l = pc.units[k].lessons[2]; meta.push({ sk: l.sk[0], L: l.L, tag: 'prev' }); }); }
  c.units.slice(0, 6).forEach((u, ui) => { const l = u.lessons[2]; meta.push({ sk: l.sk[0], L: l.L, tag: 'cur', ui }); });
  P = { id: 'tmp', name: ONB.name, companion: 'numi', acc: {}, sound: true, stats: { sk: {} }, variant: ONB.variant };
  startRun({ mode: 'place', plan: meta.map(m => [m.sk, m.L]), meta, color: '#602B7A' });
}
function finishPlacement(skipped) {
  const ci = ONB.course, c = COURSES[ci], meta = LS && LS.meta || [], res = LS ? LS.res : [];
  const prevN = meta.filter(m => m.tag === 'prev').length, prevOk = res.slice(0, prevN).filter(Boolean).length;
  const cur = res.slice(prevN); let lead = 0; while (lead < cur.length && cur[lead]) lead++;
  const curOk = cur.filter(Boolean).length;
  let course = ci, skip = Math.min(lead, c.units.length - 2), msg;
  if (skipped) { skip = 0; msg = L(`Comencem ${tx(c.long)} des del principi.`, `Empezamos ${tx(c.long)} desde el principio.`); }
  else if (ci > 0 && prevOk === 0 && curOk <= 1) { course = ci - 1; skip = 0; msg = L(`Farem un petit repàs de <b>${tx(COURSES[ci - 1].long)}</b> per agafar força. Els nivells de sota sempre els tindràs oberts per repassar.`, `Haremos un pequeño repaso de <b>${tx(COURSES[ci - 1].long)}</b> para coger fuerza. Los niveles de abajo siempre los tendrás abiertos para repasar.`); }
  else if (skip > 0) msg = L(`Ho fas molt bé! Obrim ${tx(c.long)} fins a la <b>unitat ${skip + 1}</b>: ${tx(c.units[skip].title)}.`, `¡Lo haces muy bien! Abrimos ${tx(c.long)} hasta la <b>unidad ${skip + 1}</b>: ${tx(c.units[skip].title)}.`);
  else msg = L(`Començarem ${tx(c.long)} per la unitat 1: ${tx(c.units[0].title)}. Pas a pas!`, `Empezaremos ${tx(c.long)} por la unidad 1: ${tx(c.units[0].title)}. ¡Paso a paso!`);
  const result = skipped ? L('Sense prova', 'Sin prueba') : `${prevN ? L(`Nivell anterior ${prevOk}/${prevN} · `, `Nivel anterior ${prevOk}/${prevN} · `) : ''}${tx(c.long)}: ${curOk}/${cur.length}`;
  LS = null;
  const id = 'p' + Date.now().toString(36);
  P = { id, name: ONB.name, goal: 20, sound: true, unlockAll: false, lang: LANG, ...freshProgress(), course, baseCourse: course, maxCourse: course, holdReg: true, variant: ONB.variant || 'mates',
    survey: { curs: tx(c.long), age: ONB.age, feel: ONB.feel, like: ONB.like, result, start: `${tx(COURSES[course].long)} · ${L('unitat', 'unidad')} ${(course === ci ? skip : 0) + 1}`, date: today() } };
  if (!skipped) makeReco(meta.filter(m => m.tag === 'cur').filter((m, i) => !cur[i]), 'place');
  if (!skipped && cur.length) P.tests.push({ date: today(), course: ci, pct: Math.round(100 * curOk / cur.length), ok: curOk, n: cur.length, kind: 'inicial' });
  P.skip[COURSES[course].id] = course === ci ? skip : 0;
  DB.profiles[id] = P; DB.current = id; saveLocal();
  const areas = skipped ? '' : `<div class="plres">${meta.filter(m => m.tag === 'cur').map((m, i) => `<div class="${cur[i] ? 'ok' : ''}" style="animation-delay:${i * 90}ms"><span>${cur[i] ? '✔' : '·'}</span>${tx(c.units[m.ui].title)}</div>`).join('')}</div>`;
  app.innerHTML = `<div class="scr"><div class="burst"></div><div class="rchar tapme">${charSVG('numi', 'happy')}</div><h1>${L('Ja tenim el teu punt de partida!', '¡Ya tenemos tu punto de partida!')}</h1>
    <p class="sub">${msg}</p>${areas}<button class="btn big" onclick="onbAccount()">${L('SEGÜENT', 'SIGUIENTE')}</button></div>`;
  SFX.win(); confetti(120);
}
function onbAccount() {
  ONB.step = 5;
  app.innerHTML = `<div class="page solo onb"><div class="onb-char sm tapme">${charSVG('numi', 'happy')}</div>
    <div class="bubble big">${L('Últim pas! <b>Crea el teu usuari i contrasenya</b> per guardar el progrés i entrar des de qualsevol ordinador o tauleta.', '¡Último paso! <b>Crea tu usuario y contraseña</b> para guardar tu progreso y entrar desde cualquier ordenador o tablet.')}</div>
    <label class="lbl">${L('Usuari', 'Usuario')}</label><input id="au" class="nm" maxlength="20" autocomplete="username" autocapitalize="none" value="${esc(slugName(P.name))}">
    <label class="lbl">${L('Contrasenya (mínim 4)', 'Contraseña (mínimo 4)')}</label>${passField('ap', '••••')}
    <div id="aerr" class="err"></div>
    <button class="btn big" id="regBtn" onclick="doRegister()">${L('CREA EL COMPTE', 'CREAR LA CUENTA')}</button>
    <button class="link" onclick="doRegister(true)">${L('Ara no (et donarem un codi secret)', 'Ahora no (te daremos un código secreto)')}</button>
    <p class="legalf">${L("Si tens menys de 14 anys, fes-ho amb permís de la teva família. Guardem el mínim de dades i no hi ha publicitat:", 'Si tienes menos de 14 años, hazlo con permiso de tu familia. Guardamos el mínimo de datos y no hay publicidad:')} <a href="https://numimates.com/privacitat?l=${LANG}" target="_blank" rel="noopener">${L('política de privadesa', 'política de privacidad')}</a>.</p></div>`;
}
async function doRegister(noUser) {
  const u = noUser ? null : $('#au').value.trim().toLowerCase(), p = noUser ? null : $('#ap').value;
  if (!noUser) {
    if (!/^[a-z0-9._-]{3,20}$/.test(u)) return $('#aerr').textContent = ERR('usuari-format');
    if (p.length < 4) return $('#aerr').textContent = ERR('contrasenya-format');
  }
  $('#aerr').textContent = '…';
  let r;
  try { r = await api('register', { name: P.name, survey: P.survey, state: { ...P, holdReg: false }, username: u, password: p, variant: VAR.id }); } catch (e) { r = { error: 'net' }; }
  if (r.error === 'usuari-ocupat' || r.error === 'usuari-format' || r.error === 'contrasenya-format') return $('#aerr').textContent = ERR(r.error);
  P.holdReg = false;
  if (r.code) { P.code = r.code; P.username = r.username || null; P.pendingReg = false; P.dirty = false; } else P.pendingReg = true;
  saveLocal();
  app.innerHTML = `<div class="scr"><div class="burst gold"></div><div class="rchar big tapme">${charSVG('numi', 'happy')}</div><h1>${L('Tot a punt!', '¡Todo listo!')}</h1>
    ${P.username ? `<div class="codecard big"><div><small>${L('El teu usuari', 'Tu usuario')}</small><b>${esc(P.username)}</b></div><div class="ctip">${L(`Guarda bé la contrasenya. Codi de reserva: <b>${P.code}</b>`, `Guarda bien la contraseña. Código de reserva: <b>${P.code}</b>`)}</div></div>`
      : P.code ? `<div class="codecard big"><div><small>${L('El teu codi secret', 'Tu código secreto')}</small><b>${P.code}</b></div><div class="ctip">${L("✏️ Apunta'l! Amb aquest codi pots continuar des de qualsevol dispositiu.", '✏️ ¡Apúntalo! Con este código puedes continuar desde cualquier dispositivo.')}</div></div>`
      : `<p class="sub">${L("No hi ha connexió. Es desarà sol quan tornis a tenir internet.", 'No hay conexión. Se guardará solo cuando vuelvas a tener internet.')}</p>`}
    <button class="btn big" onclick="ONB={};go('home')">${L('ANEM-HI!', '¡VAMOS!')}</button></div>`;
  SFX.win(); confetti(150);
}

/* ---------- Teclat ---------- */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if (SP) { if (/^\d$/.test(e.key)) skey(e.key); else if (e.key === 'Backspace') skey('del'); else if (e.key === 'Enter') skey('ok'); return; }
  if (AG) { if (/^\d$/.test(e.key)) akey(e.key); else if (e.key === 'Backspace') akey('del'); else if (e.key === 'Enter') akey('ok'); return; }
  if (!LS || !LS.cur || $('.modal-bg')) return;
  if (e.key === 'Enter') { e.preventDefault(); return check(); }
  if (LS.state !== 'ask') return;
  const t = LS.cur.type;
  if (t === 'input') { if (/^\d$/.test(e.key)) key(e.key); else if (e.key === 'Backspace') key('del'); else if ((e.key === ',' || e.key === '.') && LS.cur.dec) key(','); else if (e.key === '-' && LS.cur.neg) key('−'); }
  else if (t === 'choice') { const n = +e.key; if (n >= 1 && n <= LS.cur.opts.length) pickOpt(n - 1); }
  else if (t === 'order') { if (e.key === 'Backspace' && LS.order.length) ordRemove(LS.order.length - 1); else { const n = +e.key; if (n >= 1 && n <= LS.cur.items.length) ordTap(n - 1); } }
});

if (P) { pull(); syncNow(); classeRefresh(); }
go(P ? 'home' : 'onboard');

/* ---------- Pregunta sencera a la pantalla: si l'exercici no hi cap, s'encongeix per passos ---------- */
// alçada real del contingut (sense comptar les animacions, que amb transform semblen ocupar més)
const contentH = b => { const kids = [...b.children].filter(c => !c.classList.contains('morebtn')); return Math.max(0, ...kids.map(c => c.offsetTop + c.offsetHeight)) - b.offsetTop + parseFloat(getComputedStyle(b).paddingBottom || 0); };
// també si alguna cosa surt pels costats (una fila d'emojis o dos números llargs a comparar)
const lessonOver = b => contentH(b) > b.clientHeight + 2 || b.scrollWidth > b.clientWidth + 1;
function fitLesson() {
  const les = document.querySelector('.lesson:not(.learn)'), b = les && les.querySelector('.l-body'); if (!b) return;
  for (let k = 1; k <= 6 && lessonOver(b); k++) les.classList.add('fit' + k);
  les.querySelectorAll('.l-body img').forEach(i => i.complete || i.addEventListener('load', fitLesson, { once: true }));
}
{ const rl = renderLesson; renderLesson = function () { rl(); fitLesson(); }; }
/* ---------- «Més a sota»: si la teoria o l'exercici no hi caben, un botó ho indica i hi baixa ---------- */
function moreHints() {
  $$('.l-body, .lwrap').forEach(el => {
    let b = el.querySelector(':scope > .morebtn');
    const left = () => contentH(el) - el.clientHeight - el.scrollTop, more = left() > 40;
    if (!b && contentH(el) - el.clientHeight > 40) {
      b = document.createElement('button'); b.className = 'morebtn'; b.type = 'button';
      b.innerHTML = `▾ ${L('Més a sota', 'Más abajo')}`;
      b.onclick = () => el.scrollBy({ top: el.clientHeight * .7, behavior: 'smooth' });
      el.appendChild(b);
      el.addEventListener('scroll', () => b.classList.toggle('gone', left() < 40), { passive: true });
    }
    if (b) b.classList.toggle('gone', !more);
  });
}
new MutationObserver(() => { fitLesson(); clearTimeout(moreHints.t); moreHints.t = setTimeout(moreHints, 350); }).observe(document.getElementById('app'), { childList: true, subtree: true });
addEventListener('resize', () => setTimeout(() => { fitLesson(); moreHints(); }, 200));
