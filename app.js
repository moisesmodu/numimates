/* ===== Mates amb Numi — lògica de l'app ===== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const app = $('#app');
document.body.insertAdjacentHTML('afterbegin', DEFS);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
const dayDiff = (a, b) => Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 864e5);
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Estat local ---------- */
const SKEY = 'mates-numi-v1';
let DB; try { DB = JSON.parse(localStorage.getItem(SKEY)); } catch (e) { }
if (!DB || !DB.profiles) DB = { profiles: {}, current: null };
function freshProgress() {
  return { companion: 'numi', owned: ['numi'], accOwned: [], acc: {}, xp: 0, gems: 20, streak: 0, best: 0, lastDay: null, days: [], freeze: 0, srw: [],
    daily: { d: today(), xp: 0 }, prog: {}, skip: {}, badges: [], stats: { answers: 0, correct: 0, perfect: 0, lessons: 0, trains: 0, combo: 0, bestCombo: 0, sprintBest: 0, sk: {} } };
}
function migrate(p) {
  const f = freshProgress();
  for (const k in f) if (p[k] === undefined) p[k] = f[k];
  if (p.course === undefined) { p.course = 3; p.baseCourse = 3; }
  if (p.baseCourse === undefined) p.baseCourse = p.course;
  for (let i = 1; i <= 8; i++) if (p.prog['u' + i]) { p.prog['c4-' + i] = p.prog['u' + i]; delete p.prog['u' + i]; }
  if (!p.code && !p.pendingReg) p.pendingReg = true;
  return p;
}
Object.values(DB.profiles).forEach(migrate);
let P = DB.current && DB.profiles[DB.current] || null;
function saveLocal() { try { localStorage.setItem(SKEY, JSON.stringify(DB)); } catch (e) { } }
function save() { saveLocal(); if (P) { P.dirty = true; clearTimeout(save.t); save.t = setTimeout(syncNow, 1500); } }

/* ---------- Núvol ---------- */
const api = (path, data) => fetch('/api/' + path, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) }).then(r => r.json().then(j => ({ status: r.status, ...j })));
let SYNCING = false;
async function syncNow() {
  if (!P || SYNCING || !navigator.onLine) return;
  SYNCING = true;
  try {
    if (!P.code) {
      const r = await api('register', { name: P.name, survey: P.survey || null, state: P });
      if (r.code) { P.code = r.code; P.pendingReg = false; P.dirty = false; saveLocal(); }
    } else if (P.dirty) {
      const r = await api('sync', { code: P.code, state: P });
      if (r.ok === false && r.state && r.state.xp > P.xp) { adopt(r.state); }
      else if (r.ok) P.dirty = false;
      saveLocal();
    }
  } catch (e) { }
  SYNCING = false;
  const s = $('#cloud'); if (s) s.innerHTML = cloudTxt();
}
async function pull() {
  if (!P || !P.code || !navigator.onLine) return;
  try { const r = await api('login', { code: P.code }); if (r.state && r.state.xp > P.xp) { adopt(r.state); if (VIEW === 'home') renderHome(); } } catch (e) { }
}
function adopt(st) { const id = P.id; Object.assign(P, migrate(st), { id, dirty: false }); DB.profiles[id] = P; saveLocal(); }
const cloudTxt = () => !P.code ? '⏳ Encara no s\'ha pogut desar al núvol (es tornarà a provar sol).' : P.dirty ? '⏳ Desant els últims canvis…' : '☁️ Progrés desat al núvol.';
addEventListener('online', syncNow);
setInterval(() => { if (P && (P.dirty || !P.code)) syncNow(); }, 30000);
addEventListener('visibilitychange', () => { if (document.hidden) syncNow(); });

/* ---------- Cursos i progrés ---------- */
const CUR = () => COURSES[P.course];
const UNITS_ = () => CUR().units;
const lvlOf = xp => Math.floor(Math.sqrt(xp / 20)) + 1;
const xpFor = l => 20 * (l - 1) ** 2;
function dailyRoll() { if (P.daily.d !== today()) P.daily = { d: today(), xp: 0 }; }
function addXP(x) { dailyRoll(); P.xp += x; P.daily.xp += x; }
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
const prog = (ui, c = CUR()) => (P.prog[c.units[ui].id] ||= { stars: [0, 0, 0, 0, 0, 0] });
function unitOpen(ui, ci = P.course) {
  const c = COURSES[ci];
  return ui === 0 || P.unlockAll || ci < P.baseCourse || ui <= (P.skip[c.id] || 0) || prog(ui - 1, c).stars[5] > 0;
}
function lessonOpen(ui, li) {
  if (!unitOpen(ui)) return false;
  return li === 0 || P.unlockAll || P.course < P.baseCourse || ui < (P.skip[CUR().id] || 0) || prog(ui).stars[li - 1] > 0;
}
const unitsDone = p => COURSES.reduce((n, c) => n + c.units.filter(u => (p.prog[u.id]?.stars[5] || 0) > 0).length, 0);
function currentNode() {
  const us = UNITS_(), from = Math.min(P.skip[CUR().id] || 0, us.length - 1);
  for (const start of [from, 0]) for (let ui = start; ui < us.length; ui++) for (let li = 0; li < 6; li++) if (lessonOpen(ui, li) && !prog(ui).stars[li]) return [ui, li];
  return null;
}
function record(sk, ok) {
  const s = P.stats; s.answers++; if (ok) s.correct++;
  const a = s.sk[sk] ||= [0, 0]; a[1]++; if (ok) a[0]++;
  if (ok) { s.combo++; s.bestCombo = Math.max(s.bestCombo, s.combo); } else s.combo = 0;
}

/* ---------- Premis de ratxa ---------- */
const SRW = [
  { d: 3, gems: 30, icon: '🎁', txt: '30 cristalls' },
  { d: 7, gems: 50, acc: 'medalla', icon: '🏅', txt: 'Medalla de foc + 50 cristalls' },
  { d: 14, gems: 100, acc: 'auriculars', icon: '🎧', txt: 'Auriculars + 100 cristalls' },
  { d: 30, gems: 150, char: 'estel', icon: '⭐', txt: 'Nova companya: Estel + 150 cristalls' },
  { d: 60, gems: 250, acc: 'coronafoc', icon: '👑', txt: 'Corona de foc + 250 cristalls' },
  { d: 100, gems: 500, icon: '🏆', txt: 'Títol de Llegenda + 500 cristalls' }
];
function grantStreak() {
  const got = SRW.filter(r => P.streak >= r.d && !P.srw.includes(r.d));
  got.forEach(r => { P.srw.push(r.d); P.gems += r.gems; if (r.acc && !P.accOwned.includes(r.acc)) P.accOwned.push(r.acc); if (r.char && !P.owned.includes(r.char)) P.owned.push(r.char); });
  return got;
}
function streakCard() {
  const s = streakNow(), next = SRW.find(r => !P.srw.includes(r.d));
  const dots = SRW.map(r => `<div class="srw ${P.srw.includes(r.d) ? 'got' : ''} ${next && next.d === r.d ? 'next' : ''}"><div class="sri">${r.icon}</div><span>${r.d} d</span></div>`).join('');
  const prev = next ? (SRW[SRW.indexOf(next) - 1]?.d || 0) : 100, pc = next ? Math.min(100, Math.max(0, (s - prev) / (next.d - prev) * 100)) : 100;
  return `<div class="scard"><div class="shead"><span class="sico">${ICON.flame}</span><div><b>${s ? `Ratxa de ${s} ${s === 1 ? 'dia' : 'dies'}` : 'Encén la teva ratxa!'}</b><small>${next ? `Et falten <b>${Math.max(0, next.d - s)} ${next.d - s === 1 ? 'dia' : 'dies'}</b> per aconseguir: ${next.txt}` : 'Has aconseguit tots els premis. Ets una llegenda!'}</small></div></div>
    <div class="strack"><div class="sline"><div style="width:${(SRW.filter(r => P.srw.includes(r.d)).length) / (SRW.length - 1) * 100}%"></div></div>${dots}</div></div>`;
}

/* ---------- So i confeti ---------- */
let AC;
function tone(f, d, t = 0, type = 'sine', v = .14) {
  if (!P || !P.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    const o = AC.createOscillator(), g = AC.createGain(), n = AC.currentTime + t;
    o.type = type; o.frequency.value = f;
    g.gain.setValueAtTime(.0001, n); g.gain.exponentialRampToValueAtTime(v, n + .02); g.gain.exponentialRampToValueAtTime(.0001, n + d);
    o.connect(g).connect(AC.destination); o.start(n); o.stop(n + d + .05);
  } catch (e) { }
}
const SFX = {
  ok() { tone(660, .12); tone(990, .2, .09); }, ko() { tone(200, .28, 0, 'triangle', .12); }, tap() { tone(520, .05, 0, 'sine', .05); },
  win() { [523, 659, 784, 1047].forEach((f, i) => tone(f, .25, i * .11)); }, coin() { tone(988, .08); tone(1319, .18, .07); }
};
function confetti(n = 140) {
  if (REDUCED) return;
  const c = document.createElement('canvas'), dpr = devicePixelRatio || 1; c.className = 'confetti'; document.body.appendChild(c);
  const ctx = c.getContext('2d'), W = c.width = innerWidth * dpr, H = c.height = innerHeight * dpr, cols = ['#602B7A', '#FFC93C', '#5FD3B3', '#FF7AA8', '#36A9E1', '#FF9A3C'];
  const ps = [...Array(n)].map(() => ({ x: W / 2 + (Math.random() - .5) * W * .4, y: H * .38, vx: (Math.random() - .5) * 20 * dpr, vy: (-Math.random() * 17 - 5) * dpr, r: (4 + Math.random() * 5) * dpr, c: pick(cols), a: Math.random() * 6, va: (Math.random() - .5) * .3 }));
  let f = 0;
  (function loop() { ctx.clearRect(0, 0, W, H); ps.forEach(p => { p.vy += .5 * dpr; p.x += p.vx; p.y += p.vy; p.vx *= .99; p.a += p.va; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); ctx.restore(); }); if (++f < 160) requestAnimationFrame(loop); else c.remove(); })();
}

/* ---------- Modals ---------- */
function modal(html, center) {
  closeModal();
  const d = document.createElement('div'); d.className = 'modal-bg' + (center ? ' center' : ''); d.innerHTML = html;
  d.addEventListener('click', e => { if (e.target === d && !center) closeModal(); });
  document.body.appendChild(d);
}
const closeModal = () => $$('.modal-bg').forEach(m => m.remove());
function ask(txt, yes, no, onYes) {
  modal(`<div class="sheet card"><p class="askt">${txt}</p><div class="row2"><button class="btn ghost" onclick="closeModal()">${no}</button><button class="btn red" id="askYes">${yes}</button></div></div>`, true);
  $('#askYes').onclick = () => { closeModal(); onYes(); };
}
function toast(t) { const d = document.createElement('div'); d.className = 'toast'; d.innerHTML = t; document.body.appendChild(d); setTimeout(() => d.classList.add('out'), 2300); setTimeout(() => d.remove(), 2700); }

/* ---------- Navegació ---------- */
let LS = null, SP = null, FLOW = [], VIEW = '';
function go(v) {
  LS = null; stopSprint(); closeModal();
  if (!P && v !== 'profiles') v = Object.keys(DB.profiles).length ? 'profiles' : 'onboard';
  VIEW = v;
  ({ home: renderHome, train: renderTrain, shop: renderShop, badges: renderBadges, profile: renderProfile, profiles: renderProfiles, onboard: () => onb(0) }[v] || renderHome)();
  if (v !== 'home') window.scrollTo(0, 0);
}
const NAV = [['home', '🗺️', 'Camí'], ['train', '🎯', 'Entrena'], ['shop', '🛍️', 'Botiga'], ['badges', '🏅', 'Medalles'], ['profile', '👤', 'Perfil']];
const nav = t => `<nav class="nav">${NAV.map(([v, i, l]) => `<button class="${v === t ? 'on' : ''}" onclick="go('${v}')"><span class="ni">${i}</span><span>${l}</span></button>`).join('')}</nav>`;
const shell = (inner, tab) => `<div class="page">${topbar()}${inner}</div>${nav(tab)}`;
function topbar() {
  const s = streakNow();
  return `<header class="topbar"><button class="avatar" onclick="go('profiles')" title="Canvia d'alumne">${charSVG(P.companion, 'idle', P.acc)}</button>
  <div class="chips"><span class="chip ${s ? 'fire' : 'off'}" title="Ratxa de dies"><i class="ci">${ICON.flame}</i>${s}</span><span class="chip gem" title="Cristalls"><i class="ci">${ICON.gem}</i>${P.gems}</span><span class="chip lvl" title="Nivell"><i class="ci">${ICON.bolt}</i>${lvlOf(P.xp)}</span></div></header>`;
}
const starsHTML = (n, cls = '') => `<span class="stars ${cls}">${[1, 2, 3].map(i => `<i class="${i <= n ? 'on' : ''}">★</i>`).join('')}</span>`;

/* ---------- Camí ---------- */
function goalCard() {
  dailyRoll();
  const x = P.daily.xp, g = P.goal, pc = Math.min(100, Math.round(x / g * 100));
  const msg = x >= g ? "Objectiu d'avui complert! Ets un crac." : x === 0 ? `Hola, ${esc(P.name)}! Fem una lliçó?` : `Et falten ${g - x} XP per a l'objectiu d'avui.`;
  return `<div class="goal"><div class="gchar">${charSVG(P.companion, x >= g ? 'happy' : 'idle', P.acc)}</div><div class="gbody"><div class="gmsg">${msg}</div><div class="gbar"><div style="width:${pc}%"></div></div><div class="gnum">${x} / ${g} XP avui</div></div></div>`;
}
const OFF = [0, -54, -80, -54, 0, 54];
const DECO = ['+', '×', '÷', '=', '½', '%', '7', '3', '△', '○', '□', '9'];
function unitHTML(u, ui) {
  const open = unitOpen(ui), st = prog(ui).stars, cur = currentNode();
  const nodes = [0, 1, 2, 3, 4, 5].map(li => {
    const isR = li === 5, done = st[li] > 0, can = lessonOpen(ui, li), isCur = cur && cur[0] === ui && cur[1] === li;
    const cls = !can ? 'locked' : isCur ? 'cur' : done ? (st[li] === 3 ? 'gold' : 'done') : 'open';
    const icon = !can ? ICON.lock : isR ? (done ? ICON.trophy : ICON.gift) : done ? (st[li] === 3 ? ICON.crown : ICON.check) : ICON.star;
    return `<div class="nwrap" style="transform:translateX(${OFF[li]}px)">
      ${isCur ? `<div class="tip">${isR ? 'REPTE!' : 'COMENÇA'}</div>` : ''}
      <button class="node ${cls} ${isR ? 'rep' : ''}" onclick="openLesson(${ui},${li})" aria-label="${isR ? 'Repte final' : 'Lliçó ' + (li + 1)}"><i class="nico">${icon}</i></button>
      ${done && !isR ? starsHTML(st[li], 'mini') : ''}</div>`;
  }).join('');
  const deco = [0, 1, 2, 3].map(k => `<span class="deco" style="${k % 2 ? 'left' : 'right'}:${6 + (k * 7 + ui * 5) % 20}%;top:${14 + k * 22}%;animation-delay:${k * .7}s">${DECO[(ui * 3 + k) % DECO.length]}</span>`).join('');
  return `<section class="unit ${open ? '' : 'closed'}" style="--uc:${u.color}">
    <div class="ubanner"><div class="utext"><div class="ukick">UNITAT ${ui + 1}</div><h2>${u.title}</h2><p>${open ? u.desc : '🔒 Supera el repte de la unitat anterior per obrir-la.'}</p></div><div class="uguide">${charSVG(u.guide, 'idle')}</div></div>
    <div class="path">${deco}${nodes}<div class="pguide ${ui % 2 ? 'l' : ''}">${charSVG(u.guide, open ? 'happy' : 'idle')}</div></div></section>`;
}
function renderHome() {
  VIEW = 'home';
  const c = CUR();
  app.innerHTML = shell(`<button class="course" onclick="pickCourse()"><span class="cem">${c.emoji}</span><span><small>Estàs fent</small><b>${c.long}</b></span><span class="cch">Canvia ▾</span></button>
    ${goalCard()}${streakCard()}${UNITS_().map(unitHTML).join('')}
    <div class="theend">${P.course < 5 ? `Quan acabis ${c.long}, t'espera <b>${COURSES[P.course + 1].long}</b>! 🚀` : 'Has arribat al final de primària! 🎓'}</div>`, 'home');
  const n = $('.node.cur'); if (n) setTimeout(() => n.scrollIntoView({ block: 'center', behavior: 'smooth' }), 60);
}
function pickCourse() {
  modal(`<div class="sheet"><h3>Tria el curs</h3><p>Pots repassar cursos anteriors quan vulguis.</p><div class="cgrid">${COURSES.map((c, i) => {
    const done = c.units.filter(u => (P.prog[u.id]?.stars[5] || 0) > 0).length;
    return `<button class="cbtn ${i === P.course ? 'on' : ''}" onclick="setCourse(${i})"><span class="cem">${c.emoji}</span><b>${c.name}</b><small>${done}/${c.units.length} unitats</small></button>`;
  }).join('')}</div></div>`);
}
function setCourse(i) { P.course = i; save(); closeModal(); renderHome(); window.scrollTo(0, 0); }
function openLesson(ui, li) {
  if (!lessonOpen(ui, li)) { toast(li === 0 ? '🔒 Primer supera el repte de la unitat anterior.' : '🔒 Primer fes la lliçó anterior.'); SFX.ko(); return; }
  const u = UNITS_()[ui], isR = li === 5, st = prog(ui).stars[li];
  modal(`<div class="sheet" style="--uc:${u.color}"><div class="sk">${CUR().name.toUpperCase()} · UNITAT ${ui + 1} · ${isR ? 'REPTE FINAL' : 'LLIÇÓ ' + (li + 1) + ' DE 5'}</div>
    <h3>${isR ? 'Repte: ' + u.title.toLowerCase() : u.lessons[li].t}</h3>
    <p>${isR ? '10 exercicis barrejats de tota la unitat. Si el superes, obres un cofre ple de cristalls i la unitat següent!' : "8 exercicis. Si te n'equivoques algun, el tornaràs a practicar al final."}</p>
    ${st ? `<div class="sstars">${starsHTML(st)}</div>` : ''}
    <button class="btn big" style="--c:${u.color}" onclick="closeModal();startLesson(${ui},${li})">${st ? 'REPETEIX' : 'COMENÇA'}</button></div>`);
}

/* ---------- Motor de lliçons ---------- */
function genEx(sk, L, seen) {
  const [name, arg] = sk.split(':'); let e;
  for (let t = 0; t < 10; t++) {
    e = EX[name](L, arg); e.sk = sk; e.L = L;
    const key = e.q + (e.vis || '') + (e.items || '');
    if (!seen.has(key)) { seen.add(key); break; }
  }
  return e;
}
function startLesson(ui, li) {
  const u = UNITS_()[ui]; let plan = [];
  if (li === 5) { const sks = [...new Set(u.lessons.flatMap(l => l.sk))]; for (let i = 0; i < 10; i++) plan.push([sks[i % sks.length], Math.max(...u.lessons.map(l => l.L)) - (i < 4 ? 1 : 0) || 1]); }
  else { const l = u.lessons[li]; for (let i = 0; i < 8; i++) plan.push([l.sk[i % l.sk.length], l.L]); }
  startRun({ mode: li === 5 ? 'repte' : 'lesson', ui, li, plan: shuffle(plan), color: u.color });
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
  if (!pool.length) { toast('Primer fes alguna lliçó del camí!'); return; }
  const w = pool.map(([s]) => { const [c, t] = P.stats.sk[s] || [0, 0]; return 1 + 4 * (1 - (c + 1) / (t + 2)); });
  const sum = w.reduce((a, b) => a + b, 0), plan = [];
  for (let i = 0; i < 8; i++) { let r = Math.random() * sum, j = 0; while (j < w.length - 1 && r > w[j]) { r -= w[j]; j++; } plan.push(pool[j]); }
  startRun({ mode: 'train', ui: ui ?? null, li: null, plan, color: ui != null ? UNITS_()[ui].color : '#602B7A' });
}
function startRun(o) {
  closeModal();
  const seen = new Set();
  LS = { ...o, seen, queue: o.plan.map(([s, L]) => genEx(s, L, seen)), total: o.plan.length, done: 0, miss: 0, combo: 0, t0: Date.now(), res: [] };
  nextEx();
}
function nextEx() {
  if (LS.done >= LS.total) return LS.mode === 'place' ? finishPlacement() : finishRun();
  LS.cur = LS.queue.shift(); LS.sel = null; LS.input = ''; LS.order = []; LS.state = 'ask';
  renderLesson();
}
function renderLesson() {
  const e = LS.cur, place = LS.mode === 'place';
  app.innerHTML = `<div class="lesson" style="--uc:${LS.color || '#602B7A'}">
    <div class="l-top"><button class="xbtn" onclick="quitRun()" aria-label="Surt">✕</button>
      <div class="pbar"><div class="pfill" style="width:${LS.done / LS.total * 100}%"></div></div>
      ${place ? `<div class="pcount">${LS.done + 1}/${LS.total}</div>` : `<div class="combo ${LS.combo >= 2 ? 'on' : ''}" id="combo"><i class="ci">${ICON.flame}</i><b>${LS.combo}</b></div>`}</div>
    <div class="l-body">
      ${e.retry ? '<div class="retry">🔁 Una altra oportunitat</div>' : ''}${place ? '<div class="retry place">🧭 Prova de nivell · si no ho saps, no passa res!</div>' : ''}
      <div class="l-q ${e.long ? 'long' : ''}"><div class="buddy" id="buddy">${charSVG(P.companion, 'think', P.acc)}</div><div class="bubble">${e.q}</div></div>
      ${e.vis ? `<div class="l-vis">${e.vis}</div>` : ''}
      <div class="l-ans">${ansHTML(e)}</div>
    </div>
    <div class="l-foot" id="foot"><div class="fwrap"><div class="fb" id="fb"></div>${place ? `<button class="btn ghost skip" onclick="skipPlace()">NO HO SÉ</button>` : ''}<button class="btn check" id="chk" onclick="check()" disabled>COMPROVA</button></div></div>
  </div>`;
}
function padHTML(fn, extra) {
  const last = extra ? `<button class="pk-x" onclick="${fn}('${extra}')">${extra}</button>` : `<button class="pk-ok" onclick="${fn}('ok')" aria-label="Comprova">✓</button>`;
  return `<div class="pad">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button onclick="${fn}('${n}')">${n}</button>`).join('')}<button class="pk-del" onclick="${fn}('del')" aria-label="Esborra">⌫</button><button onclick="${fn}('0')">0</button>${last}</div>`;
}
const showOf = e => e.show || fmt;
function ansHTML(e) {
  if (e.type === 'choice') {
    const long = e.list || e.opts.some(o => String(o).replace(/<[^>]+>/g, '').length > 10);
    return `<div class="opts ${e.big && !long ? 'big' : ''} ${long ? 'list' : ''}">${e.opts.map((o, i) => `<button class="opt" onclick="pickOpt(${i})"><span class="k">${i + 1}</span><span class="ov">${o}</span></button>`).join('')}</div>`;
  }
  if (e.type === 'input') return `<div class="inbox" id="inbox"><span id="inval" class="ph">?</span>${e.unit ? `<span class="iu">${e.unit}</span>` : ''}</div>${padHTML('key', e.dec ? ',' : e.neg ? '−' : null)}`;
  return `<div class="oslots" id="oslots"><span class="ohint">Toca els números en ordre</span></div><div class="obank" id="obank">${e.items.map((v, i) => `<button class="chipn" data-i="${i}" onclick="ordTap(${i})">${showOf(e)(v)}</button>`).join('')}</div>`;
}
function pickOpt(i) {
  if (!LS || LS.state !== 'ask') return;
  LS.sel = i; SFX.tap();
  $$('.opt').forEach((b, j) => b.classList.toggle('sel', j === i));
  $('#chk').disabled = false;
}
function inputShow(s) {
  if (!s) return '?';
  const neg = s.startsWith('−'), body = neg ? s.slice(1) : s, [i, f] = body.split(',');
  return (neg ? '−' : '') + (i ? fmt(+i) : (f !== undefined ? '0' : '')) + (f !== undefined ? ',' + f : '');
}
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
  const el = $('#inval'); el.textContent = inputShow(s); el.classList.toggle('ph', !s);
  $('#chk').disabled = !/\d/.test(s);
}
function ordTap(i) { if (!LS || LS.state !== 'ask' || LS.order.includes(i)) return; LS.order.push(i); SFX.tap(); renderOrder(); }
function ordRemove(p) { if (!LS || LS.state !== 'ask') return; LS.order.splice(p, 1); renderOrder(); }
function renderOrder() {
  const e = LS.cur;
  $('#oslots').innerHTML = LS.order.length ? LS.order.map((i, p) => `<button class="chipn" onclick="ordRemove(${p})">${showOf(e)(e.items[i])}</button>`).join('') : '<span class="ohint">Toca els números en ordre</span>';
  $$('#obank .chipn').forEach(b => b.classList.toggle('used', LS.order.includes(+b.dataset.i)));
  $('#chk').disabled = LS.order.length < e.items.length;
}
const PRAISE = ['Molt bé!', 'Genial!', 'Correcte!', 'Fantàstic!', 'Ben fet!', 'Increïble!', 'Així es fa!', 'Perfecte!'];
const OOPS = ['Gairebé!', 'Ui, per poc!', 'No passa res!', 'Quasi quasi!'];
function ansText(e) {
  if (e.type === 'choice') return e.opts[e.ans];
  if (e.type === 'input') return (e.dec ? fmtD(e.ans) : fmt(e.ans)) + (e.unit ? ' ' + e.unit : '');
  const s = showOf(e); return e.ans.map(s).join(e.ans[0] > e.ans[1] ? ' > ' : ' < ');
}
function isRight(e) {
  if (e.type === 'choice') return LS.sel === e.ans;
  if (e.type === 'input') return Math.abs(inputVal(LS.input) - e.ans) < 1e-6;
  return LS.order.map(i => e.items[i]).join() === e.ans.join();
}
function ready(e) { return e.type === 'choice' ? LS.sel != null : e.type === 'input' ? /\d/.test(LS.input) : LS.order.length === e.items.length; }
function skipPlace() { if (!LS || LS.mode !== 'place') return; LS.res.push(false); LS.done++; SFX.tap(); nextEx(); }
function check() {
  if (!LS) return;
  if (LS.state === 'fb') return nextEx();
  const e = LS.cur; if (!ready(e)) return;
  const ok = isRight(e);
  if (LS.mode === 'place') { LS.res.push(ok); LS.done++; SFX.tap(); return nextEx(); }
  LS.state = 'fb';
  record(e.sk, ok);
  if (e.type === 'choice') $$('.opt').forEach((b, i) => { b.disabled = true; if (i === e.ans) b.classList.add('right'); else if (i === LS.sel) b.classList.add('wrong'); });
  if (e.type === 'input') $('#inbox').classList.add(ok ? 'right' : 'wrong');
  if (e.type === 'order') $('#oslots').classList.add(ok ? 'right' : 'wrong');
  $$('.pad button').forEach(b => { if (!b.classList.contains('pk-ok')) b.disabled = true; });
  const foot = $('#foot'), fb = $('#fb'), chk = $('#chk');
  foot.classList.add(ok ? 'ok' : 'ko');
  if (ok) {
    LS.done++; LS.combo++; SFX.ok();
    $('.pfill').style.width = (LS.done / LS.total * 100) + '%';
    fb.innerHTML = `<div class="fbh">✔ ${LS.combo >= 3 ? `Ratxa de ${LS.combo}! 🔥` : pick(PRAISE)}</div>${e.long || e.retry ? `<div class="exp">${e.ex || ''}</div>` : ''}`;
  } else {
    LS.miss++; LS.combo = 0; SFX.ko();
    const n = genEx(e.sk, e.L, LS.seen); n.retry = true; LS.queue.push(n);
    fb.innerHTML = `<div class="fbh">✖ ${pick(OOPS)}</div><div class="ans">Resposta correcta: <b>${ansText(e)}</b></div>${e.ex ? `<div class="exp">💡 ${e.ex}</div>` : ''}`;
  }
  $('#buddy').innerHTML = charSVG(P.companion, ok ? 'happy' : 'sad', P.acc);
  const cb = $('#combo'); cb.innerHTML = `<i class="ci">${ICON.flame}</i><b>${LS.combo}</b>`; cb.classList.toggle('on', LS.combo >= 2); if (ok && LS.combo >= 2) { cb.classList.remove('pop'); void cb.offsetWidth; cb.classList.add('pop'); }
  chk.textContent = 'CONTINUA'; chk.disabled = false; chk.className = 'btn check ' + (ok ? 'okb' : 'kob');
  foot.scrollIntoView({ block: 'nearest' });
  saveLocal();
}
function quitRun() {
  if (LS && LS.mode === 'place') return ask('Vols saltar-te la prova de nivell? Començaràs pel principi del curs.', 'SALTA', 'CONTINUA', () => { LS.res = []; finishPlacement(true); });
  ask("Segur que vols sortir? Perdràs el progrés d'aquesta lliçó.", 'SURT', 'CONTINUA AQUÍ', () => go('home'));
}

/* ---------- Final i recompenses ---------- */
const BADGES = [
  ['first', '🚀', 'Primer pas', 'Completa la teva primera lliçó', p => p.stats.lessons >= 1],
  ['perfect', '💯', 'Perfecte!', 'Fes una lliçó sense cap error', p => p.stats.perfect >= 1],
  ['perfect10', '🎯', 'Punteria fina', 'Fes 10 lliçons perfectes', p => p.stats.perfect >= 10],
  ['combo10', '⚡', 'Imparable', 'Encerta 10 respostes seguides', p => p.stats.bestCombo >= 10],
  ['combo30', '🌪️', 'Huracà', 'Encerta 30 respostes seguides', p => p.stats.bestCombo >= 30],
  ['streak3', '🔥', 'Foc encès', 'Practica 3 dies seguits', p => p.best >= 3],
  ['streak7', '☄️', 'Setmana de foc', 'Practica 7 dies seguits', p => p.best >= 7],
  ['streak30', '🌋', 'Volcà', 'Practica 30 dies seguits', p => p.best >= 30],
  ['streak100', '🏆', 'Llegenda', 'Practica 100 dies seguits', p => p.best >= 100],
  ['xp100', '⭐', '100 XP', "Aconsegueix 100 punts d'experiència", p => p.xp >= 100],
  ['xp500', '🌟', '500 XP', "Aconsegueix 500 punts d'experiència", p => p.xp >= 500],
  ['xp2000', '💫', '2.000 XP', "Aconsegueix 2.000 punts d'experiència", p => p.xp >= 2000],
  ['unit1', '🗺️', 'Primera unitat', "Supera el repte d'una unitat", p => unitsDone(p) >= 1],
  ['unit5', '🧭', 'Exploració', 'Supera 5 unitats', p => unitsDone(p) >= 5],
  ['course', '🎓', 'Curs complet', 'Supera totes les unitats d\'un curs', p => COURSES.some(c => c.units.every(u => (p.prog[u.id]?.stars[5] || 0) > 0))],
  ['friends3', '🤝', 'Bona colla', 'Aconsegueix 3 companys', p => p.owned.length >= 3],
  ['friends6', '🎉', 'Tota la colla', 'Aconsegueix els 6 companys', p => p.owned.length >= 6],
  ['style', '🎩', 'Amb estil', 'Aconsegueix un accessori', p => p.accOwned.length >= 1],
  ['train5', '🏋️', 'Entrenament', 'Fes 5 entrenaments', p => p.stats.trains >= 5],
  ['sprint15', '⏱️', 'Llampec', 'Fes 15 encerts en una contrarellotge', p => p.stats.sprintBest >= 15],
  ['sprint30', '🏎️', 'Supersònic', 'Fes 30 encerts en una contrarellotge', p => p.stats.sprintBest >= 30],
  ['ans500', '🧮', 'Calculadora humana', 'Respon 500 preguntes', p => p.stats.answers >= 500]
];
function checkBadges() { const nw = BADGES.filter(b => !P.badges.includes(b[0]) && b[4](P)); nw.forEach(b => { P.badges.push(b[0]); P.gems += 10; }); return nw; }
function finishRun() {
  const R = { mode: LS.mode, ui: LS.ui, li: LS.li, acc: Math.round(100 * LS.total / (LS.total + LS.miss)), perfect: LS.miss === 0, stars: 0, chest: 0 };
  if (R.mode === 'train') { R.xp = 8 + (R.perfect ? 4 : 0); R.gems = 3 + (R.perfect ? 2 : 0); P.stats.trains++; }
  else {
    R.xp = 10 + (R.perfect ? 5 : 0) + (R.mode === 'repte' ? 10 : 0); R.gems = 5 + (R.perfect ? 5 : 0);
    R.stars = R.perfect ? 3 : LS.miss <= 2 ? 2 : 1;
    const pr = prog(R.ui), first = !pr.stars[R.li];
    pr.stars[R.li] = Math.max(pr.stars[R.li], R.stars);
    if (R.mode === 'repte' && first) R.chest = ri(30, 50);
    P.stats.lessons++; if (R.perfect) P.stats.perfect++;
  }
  LS = null; reward(R);
}
function reward(R) {
  const lv0 = lvlOf(P.xp);
  addXP(R.xp); P.gems += R.gems + R.chest;
  R.streakUp = touchStreak(); R.srw = R.streakUp ? grantStreak() : [];
  R.lvUp = lvlOf(P.xp) > lv0 ? lvlOf(P.xp) : 0; if (R.lvUp) P.gems += 10;
  R.newB = checkBadges();
  save(); syncNow();
  FLOW = [() => scrResult(R)];
  if (R.streakUp) FLOW.push(scrStreak);
  if (R.srw.length) FLOW.push(() => scrStreakReward(R.srw));
  if (R.chest) FLOW.push(() => scrChest(R));
  if (R.lvUp) FLOW.push(() => scrLevel(R.lvUp));
  if (R.newB.length) FLOW.push(() => scrBadges(R.newB));
  flowNext();
}
function flowNext() { closeModal(); const f = FLOW.shift(); if (f) f(); else go('home'); }
function countUp() {
  $$('[data-count]').forEach(el => { const to = +el.dataset.count, suf = el.dataset.suf || '', t0 = performance.now(); (function step(t) { const k = Math.min(1, (t - t0) / 800); el.textContent = Math.round(to * (1 - (1 - k) ** 3)) + suf; if (k < 1) requestAnimationFrame(step); })(t0); });
}
function scrResult(R) {
  const title = R.mode === 'sprint' ? 'Temps!' : R.perfect ? 'Lliçó perfecta!' : R.mode === 'train' ? 'Entrenament fet!' : 'Lliçó completada!';
  const sub = R.mode === 'sprint' ? (R.record ? '🏆 Nou rècord personal!' : `El teu rècord: ${P.stats.sprintBest}`) : R.perfect ? 'Ni un sol error. Ets imparable!' : 'Cada error és una oportunitat per aprendre.';
  const third = R.mode === 'sprint' ? `<div class="rs acc"><span>ENCERTS</span><b data-count="${R.score}">0</b></div>` : `<div class="rs acc"><span>PRECISIÓ</span><b data-count="${R.acc}" data-suf="%">0</b></div>`;
  app.innerHTML = `<div class="scr"><div class="burst"></div><div class="rchar">${charSVG(P.companion, 'happy', P.acc)}</div>
    <h1>${title}</h1><p class="sub">${sub}</p>
    ${R.stars ? `<div class="bigstars">${[1, 2, 3].map(i => `<i class="${i <= R.stars ? 'on' : ''}" style="animation-delay:${.25 + i * .22}s">★</i>`).join('')}</div>` : ''}
    <div class="rstats"><div class="rs xp"><span>XP</span><b data-count="${R.xp}">0</b></div><div class="rs gem"><span>CRISTALLS</span><b data-count="${R.gems}">0</b></div>${third}</div>
    <button class="btn big" onclick="flowNext()">CONTINUA</button></div>`;
  countUp(); SFX.win(); if (R.perfect || R.record) confetti();
}
function scrStreak() {
  const DOW = ['dl', 'dt', 'dc', 'dj', 'dv', 'ds', 'dg'], now = new Date(), wd = (now.getDay() + 6) % 7, days = [];
  for (let i = 0; i < 7; i++) { const d = new Date(now); d.setDate(now.getDate() - wd + i); const k = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; days.push(`<div class="wd ${P.days.includes(k) ? 'on' : ''} ${i === wd ? 'today' : ''}"><span>${DOW[i]}</span><i>${P.days.includes(k) ? '🔥' : ''}</i></div>`); }
  const next = SRW.find(r => !P.srw.includes(r.d));
  app.innerHTML = `<div class="scr"><div class="flame">${ICON.flame}</div><div class="snum" data-count="${P.streak}">0</div>
    <h1>${P.streak === 1 ? 'Has encès la ratxa!' : `${P.streak} dies seguits!`}</h1>
    <p class="sub">${next ? `Premi dels ${next.d} dies: ${next.icon} ${next.txt}` : 'Practicar una mica cada dia és el gran secret.'}</p>
    <div class="week">${days.join('')}</div><button class="btn big orange" onclick="flowNext()">CONTINUA</button></div>`;
  countUp(); SFX.coin();
}
function scrStreakReward(list) {
  const r = list[list.length - 1];
  const pic = r.char ? charSVG(r.char, 'happy') : r.acc ? charSVG(P.companion, 'happy', { ...P.acc, [ACC[r.acc].slot]: r.acc }) : `<div class="bigicon">${r.icon}</div>`;
  app.innerHTML = `<div class="scr"><div class="burst gold"></div><div class="ribbon">PREMI DE RATXA · ${r.d} DIES</div><div class="rchar big">${pic}</div>
    <h1>${r.char ? `${CH[r.char].name} s'uneix a la colla!` : 'Has guanyat un premi!'}</h1><p class="sub">${list.map(x => `${x.icon} ${x.txt}`).join('<br>')}</p>
    ${r.acc ? `<button class="btn big gold" onclick="P.acc['${ACC[r.acc].slot}']='${r.acc}';save();flowNext()">POSA-T'HO!</button>` : ''}
    ${r.char ? `<button class="btn big gold" onclick="P.companion='${r.char}';save();flowNext()">VULL ANAR AMB ${CH[r.char].name.toUpperCase()}!</button>` : ''}
    <button class="btn big ${r.acc || r.char ? 'ghost' : ''}" onclick="flowNext()">CONTINUA</button></div>`;
  SFX.win(); confetti(200);
}
const chestSVG = () => `<svg viewBox="0 0 160 140" class="chestsvg"><ellipse cx="80" cy="130" rx="60" ry="7" fill="#000" opacity=".12"/>
  <rect x="22" y="64" width="116" height="62" rx="10" fill="#B86B2E"/><rect x="22" y="64" width="116" height="12" fill="#9A5522"/><rect x="28" y="84" width="104" height="4" rx="2" fill="rgba(255,255,255,.15)"/>
  <rect x="38" y="64" width="12" height="62" fill="url(#gGold)"/><rect x="110" y="64" width="12" height="62" fill="url(#gGold)"/>
  <g class="lid"><path d="M22 68 Q22 28 80 28 Q138 28 138 68Z" fill="#D07D3A"/><path d="M34 50 Q40 34 70 32" stroke="rgba(255,255,255,.3)" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M38 34 Q44 31 50 30 L50 68 L38 68Z" fill="url(#gGold)"/><path d="M110 30 Q116 31 122 34 L122 68 L110 68Z" fill="url(#gGold)"/></g>
  <rect x="69" y="58" width="22" height="26" rx="5" fill="url(#gGold)" stroke="#E0A300" stroke-width="3"/><circle cx="80" cy="69" r="3.5" fill="#8A5A00"/></svg>`;
function scrChest(R) {
  const nx = UNITS_()[R.ui + 1];
  app.innerHTML = `<div class="scr"><h1>Repte superat!</h1><p class="sub">Toca el cofre per obrir-lo</p>
    <button class="chest wiggle" id="chest" onclick="openChest()" aria-label="Obre el cofre"><div class="chestglow"></div>${chestSVG()}</button>
    <div id="chestOut" class="chestout" hidden><div class="loot">+${R.chest} <i class="ci big">${ICON.gem}</i></div>
    <p>${nx ? `Nova unitat desbloquejada: <b>${nx.title}</b>` : `Has completat ${CUR().long}! Ets increïble!`}</p>
    <button class="btn big" onclick="flowNext()">CONTINUA</button></div></div>`;
}
function openChest() { const c = $('#chest'); if (c.classList.contains('open')) return; c.classList.remove('wiggle'); c.classList.add('open'); SFX.win(); confetti(180); setTimeout(() => { $('#chestOut').hidden = false; }, 450); }
function scrLevel(l) {
  app.innerHTML = `<div class="scr"><div class="burst"></div><div class="lvbadge">${l}</div><h1>Has pujat al nivell ${l}!</h1><p class="sub">+10 cristalls de regal. Continua així!</p><div class="rchar">${charSVG(P.companion, 'happy', P.acc)}</div><button class="btn big" onclick="flowNext()">CONTINUA</button></div>`;
  SFX.win(); confetti(90);
}
function scrBadges(list) {
  app.innerHTML = `<div class="scr"><h1>${list.length > 1 ? 'Noves medalles!' : 'Nova medalla!'}</h1><p class="sub">Cada medalla et dona +10 cristalls</p>
    <div class="newb">${list.map(b => `<div class="badge on pop"><div class="bi">${b[1]}</div><b>${b[2]}</b><span>${b[3]}</span></div>`).join('')}</div>
    <button class="btn big" onclick="flowNext()">CONTINUA</button></div>`;
  SFX.coin();
}

/* ---------- Entrena i contrarellotge ---------- */
function renderTrain() {
  const units = UNITS_().map((u, i) => ({ u, i })).filter(({ i }) => unitOpen(i) && trainPool(i).length);
  app.innerHTML = shell(`<h1 class="ph1">Entrena</h1><p class="lead">Practica el que ja has après de ${CUR().long} per no oblidar-ho.</p>
    <button class="tcard" onclick="startTrain()"><span class="ti">🧠</span><span><b>Entrenament intel·ligent</b><small>8 exercicis del que et costa més. Ideal per repassar.</small></span></button>
    <button class="tcard sp" onclick="startSprint()"><span class="ti">⏱️</span><span><b>Contrarellotge</b><small>60 segons de càlcul mental. El teu rècord: ${P.stats.sprintBest} encerts.</small></span></button>
    <h2 class="h2">Repassa una unitat</h2>
    ${units.length ? units.map(({ u, i }) => `<button class="ucard" style="--uc:${u.color}" onclick="startTrain(${i})"><span class="uic">${charSVG(u.guide, 'idle')}</span><span><b>${u.title}</b><small>Unitat ${i + 1}</small></span><span class="go">›</span></button>`).join('') : '<p class="empty">Quan acabis la primera lliçó del camí, aquí podràs repassar-la.</p>'}`, 'train');
}
function sprintQ() {
  const n = CUR().n, kinds = n === 1 ? ['add', 'sub'] : n === 2 ? ['add', 'sub', 'mul'] : ['add', 'sub', 'mul', 'div'];
  let a, b;
  switch (pick(kinds)) {
    case 'add': if (n === 1) { a = ri(1, 10); b = ri(1, 10); } else { a = ri(10, 89); b = ri(2, n >= 3 ? 40 : 9); } return { q: `${a} + ${b}`, ans: a + b };
    case 'sub': if (n === 1) { a = ri(5, 20); b = ri(1, Math.min(a, 10)); } else { a = ri(20, 99); b = ri(2, Math.min(a - 1, n >= 3 ? 40 : 9)); } return { q: `${a} − ${b}`, ans: a - b };
    case 'mul': a = n === 2 ? pick([2, 5, 10]) : ri(2, n >= 5 ? 12 : 10); b = ri(2, 10); return { q: `${a} × ${b}`, ans: a * b };
    default: b = ri(2, n >= 5 ? 12 : 10); a = ri(2, 10); return { q: `${a * b} ÷ ${b}`, ans: a };
  }
}
function startSprint() {
  SP = { t0: Date.now(), dur: 60000, score: 0, miss: 0, input: '', busy: false };
  app.innerHTML = `<div class="lesson sprint"><div class="l-top"><button class="xbtn" onclick="go('train')" aria-label="Surt">✕</button>
    <div class="pbar time"><div class="pfill" id="tbar" style="width:100%"></div></div><div class="combo on">✅<b id="sc">0</b></div></div>
    <div class="l-body"><div class="sq" id="sq"></div><div class="inbox" id="inbox"><span id="inval" class="ph">?</span></div>${padHTML('skey')}</div></div>`;
  nextSprint();
  SP.timer = setInterval(() => { const left = Math.max(0, 1 - (Date.now() - SP.t0) / SP.dur); $('#tbar').style.width = left * 100 + '%'; $('#tbar').classList.toggle('low', left < .2); if (left <= 0) endSprint(); }, 100);
}
function nextSprint() { SP.cur = sprintQ(); SP.input = ''; SP.busy = false; $('#sq').textContent = SP.cur.q + ' = ?'; updSprint(); $('#inbox').className = 'inbox'; }
function updSprint() { const el = $('#inval'); el.textContent = SP.input || '?'; el.classList.toggle('ph', !SP.input); }
function skey(k) {
  if (!SP || SP.busy) return;
  const ansS = String(SP.cur.ans);
  if (k === 'del') { SP.input = SP.input.slice(0, -1); return updSprint(); }
  if (k !== 'ok') { SP.input += k; updSprint(); }
  if (SP.input === ansS) { SP.score++; record('sprint', true); SFX.ok(); $('#sc').textContent = SP.score; $('#inbox').classList.add('right'); SP.busy = true; setTimeout(() => SP && nextSprint(), 220); }
  else if (k === 'ok' ? SP.input.length > 0 : SP.input.length >= ansS.length) { SP.miss++; record('sprint', false); SFX.ko(); $('#inbox').classList.add('wrong'); $('#inval').textContent = ansS; SP.busy = true; setTimeout(() => SP && nextSprint(), 900); }
}
function stopSprint() { if (SP && SP.timer) clearInterval(SP.timer); SP = null; }
function endSprint() {
  const score = SP.score; stopSprint();
  const rec = score > P.stats.sprintBest; if (rec) P.stats.sprintBest = score;
  reward({ mode: 'sprint', score, record: rec, xp: Math.max(2, score), gems: Math.floor(score / 3), chest: 0, perfect: false });
}

/* ---------- Botiga ---------- */
function renderShop() {
  const comp = Object.keys(CH).map(id => {
    const c = CH[id], own = P.owned.includes(id), sel = P.companion === id;
    const btn = sel ? `<button class="btn sm ghost" disabled>AMB TU</button>` : own ? `<button class="btn sm" onclick="choose('${id}')">TRIA</button>` : c.price == null ? `<button class="btn sm fire" disabled>🔥 ${c.unlock}</button>` : `<button class="btn sm gold" ${P.gems < c.price ? 'disabled' : ''} onclick="buyChar('${id}')"><i class="ci">${ICON.gem}</i>${c.price}</button>`;
    return `<div class="item ${sel ? 'sel' : ''} ${own ? '' : 'nown'} ${c.price == null ? 'excl' : ''}"><div class="ipic">${charSVG(id, sel ? 'happy' : 'idle', own ? P.acc : null)}</div><div class="iname">${c.name}</div><div class="idesc">${c.desc}</div>${btn}</div>`;
  }).join('');
  const acc = Object.keys(ACC).map(id => {
    const a = ACC[id], own = P.accOwned.includes(id), on = P.acc[a.slot] === id;
    const btn = own ? `<button class="btn sm ${on ? 'ghost' : ''}" onclick="toggleAcc('${id}')">${on ? 'TREU' : 'POSA'}</button>` : a.price == null ? `<button class="btn sm fire" disabled>🔥 ${a.unlock}</button>` : `<button class="btn sm gold" ${P.gems < a.price ? 'disabled' : ''} onclick="buyAcc('${id}')"><i class="ci">${ICON.gem}</i>${a.price}</button>`;
    return `<div class="item ${on ? 'sel' : ''} ${a.price == null ? 'excl' : ''}"><div class="ipic">${charSVG(P.companion, 'idle', { [a.slot]: id })}</div><div class="iname">${a.name}</div>${btn}</div>`;
  }).join('');
  app.innerHTML = shell(`<h1 class="ph1">Botiga</h1><p class="lead">Guanya cristalls fent lliçons i canvia'ls per companys i accessoris. Els marcats amb 🔥 només es guanyen amb les ratxes!</p>
    <h2 class="h2">Companys</h2><div class="grid">${comp}</div>
    <h2 class="h2">Accessoris <small>per al teu company</small></h2><div class="grid">${acc}</div>
    <h2 class="h2">Ajudes</h2><div class="item wide"><div class="ipic big-emoji">🧊</div><div><div class="iname">Protector de ratxa</div><div class="idesc">Si un dia no pots practicar, la ratxa no s'apaga. En tens ${P.freeze} de 2.</div></div>
    <button class="btn sm gold" ${P.gems < 50 || P.freeze >= 2 ? 'disabled' : ''} onclick="buyFreeze()"><i class="ci">${ICON.gem}</i>50</button></div>`, 'shop');
}
function buyChar(id) {
  const c = CH[id]; if (c.price == null || P.gems < c.price || P.owned.includes(id)) return;
  P.gems -= c.price; P.owned.push(id); P.companion = id;
  const nb = checkBadges(); save(); SFX.coin(); confetti(100); renderShop();
  modal(`<div class="sheet card cent"><div class="mchar">${charSVG(id, 'happy', P.acc)}</div><h3>${c.name} s'uneix a la colla!</h3><p>«${c.hello}»</p><button class="btn big" onclick="closeModal()">GENIAL!</button></div>`, true);
  nb.forEach(b => toast(`${b[1]} Nova medalla: <b>${b[2]}</b> (+10 💎)`));
}
function choose(id) { P.companion = id; save(); SFX.tap(); renderShop(); }
function buyAcc(id) {
  const a = ACC[id]; if (a.price == null || P.gems < a.price || P.accOwned.includes(id)) return;
  P.gems -= a.price; P.accOwned.push(id); P.acc[a.slot] = id;
  const nb = checkBadges(); save(); SFX.coin(); confetti(60); renderShop();
  toast(`${a.name} per al teu company! ✨`); nb.forEach(b => setTimeout(() => toast(`${b[1]} Nova medalla: <b>${b[2]}</b> (+10 💎)`), 900));
}
function toggleAcc(id) { const s = ACC[id].slot; if (P.acc[s] === id) delete P.acc[s]; else P.acc[s] = id; save(); SFX.tap(); renderShop(); }
function buyFreeze() { if (P.gems < 50 || P.freeze >= 2) return; P.gems -= 50; P.freeze++; save(); SFX.coin(); renderShop(); toast('🧊 Protector de ratxa preparat!'); }

/* ---------- Medalles ---------- */
function renderBadges() {
  const got = BADGES.filter(b => P.badges.includes(b[0])).length;
  app.innerHTML = shell(`<h1 class="ph1">Medalles</h1><p class="lead">N'has aconseguit <b>${got}</b> de ${BADGES.length}. Cada una val +10 cristalls.</p>
    <h2 class="h2">Premis de ratxa</h2><div class="bgrid">${SRW.map(r => { const on = P.srw.includes(r.d); return `<div class="badge ${on ? 'on fire' : ''}"><div class="bi">${on ? r.icon : '🔒'}</div><b>${r.d} dies seguits</b><span>${r.txt}</span></div>`; }).join('')}</div>
    <h2 class="h2">Medalles</h2><div class="bgrid">${BADGES.map(b => { const on = P.badges.includes(b[0]); return `<div class="badge ${on ? 'on' : ''}"><div class="bi">${on ? b[1] : '🔒'}</div><b>${b[2]}</b><span>${b[3]}</span></div>`; }).join('')}</div>`, 'badges');
}

/* ---------- Perfil ---------- */
const FEEL = { love: '😍 M\'encanten', good: '🙂 Em van bé', meh: '😐 Normal', hard: '😟 Em costen' };
const LIKE = { calc: '🧮 Calcular', logic: '🧩 Enigmes i lògica', geo: '📐 Formes i mesures', prob: '🕵️ Problemes' };
function renderProfile() {
  const l = lvlOf(P.xp), a = xpFor(l), b = xpFor(l + 1), s = P.stats, acc = s.answers ? Math.round(100 * s.correct / s.answers) : 0;
  const rows = UNITS_().map((u, i) => {
    const sks = new Set(u.lessons.flatMap(x => x.sk)); let c = 0, t = 0;
    sks.forEach(k => { const v = s.sk[k]; if (v) { c += v[0]; t += v[1]; } });
    const done = prog(i).stars.filter(x => x).length, pc = t ? Math.round(100 * c / t) : 0;
    return `<div class="urow" style="--uc:${u.color}"><div class="un"><b>${i + 1}. ${u.title}</b><small>${done}/6 fetes · ${t ? pc + "% d'encerts" : 'encara no'}</small></div><div class="ubar"><div style="width:${done / 6 * 100}%"></div></div></div>`;
  }).join('');
  const sv = P.survey;
  app.innerHTML = shell(`<div class="phead"><div class="pchar">${charSVG(P.companion, 'happy', P.acc)}</div><div><h1>${esc(P.name)}</h1><div class="plv">Nivell ${l} · ${P.xp} XP</div><div class="lbar"><div style="width:${Math.min(100, (P.xp - a) / (b - a) * 100)}%"></div></div><small class="mut">${b - P.xp} XP per al nivell ${l + 1}</small></div></div>
    <div class="codecard"><div><small>El teu codi secret</small><b>${P.code || '…'}</b><span id="cloud">${cloudTxt()}</span></div><div class="ctip">✏️ Apunta'l! Amb aquest codi pots entrar des de qualsevol ordinador o tauleta.</div></div>
    <div class="sgrid">
      <div class="st"><b>🔥 ${streakNow()}</b><span>ratxa actual</span></div><div class="st"><b>🏆 ${P.best}</b><span>millor ratxa</span></div>
      <div class="st"><b>📚 ${s.lessons}</b><span>lliçons</span></div><div class="st"><b>🎯 ${acc}%</b><span>d'encerts</span></div>
      <div class="st"><b>💯 ${s.perfect}</b><span>perfectes</span></div><div class="st"><b>⚡ ${s.bestCombo}</b><span>millor ratxa d'encerts</span></div></div>
    <h2 class="h2">Progrés a ${CUR().long}</h2><div class="urows">${rows}</div>
    ${sv ? `<h2 class="h2">Prova d'inici</h2><div class="survey"><div><span>Curs</span><b>${sv.curs}</b></div><div><span>Les mates…</span><b>${FEEL[sv.feel] || '—'}</b></div><div><span>Li agrada</span><b>${LIKE[sv.like] || '—'}</b></div><div><span>Resultat</span><b>${sv.result}</b></div></div>` : ''}
    <h2 class="h2">Ajustos</h2>
    <div class="set"><span>Objectiu diari</span><div class="seg">${[10, 20, 30, 50].map(g => `<button class="${P.goal === g ? 'on' : ''}" onclick="P.goal=${g};save();renderProfile()">${g} XP</button>`).join('')}</div></div>
    <div class="set"><span>Sons</span><button class="tog ${P.sound ? 'on' : ''}" onclick="P.sound=!P.sound;save();renderProfile()" aria-label="Sons"><i></i></button></div>
    <div class="set"><span>Mode mestre<small>Obre totes les unitats per treballar a classe.</small></span><button class="tog ${P.unlockAll ? 'on' : ''}" onclick="P.unlockAll=!P.unlockAll;save();renderProfile()" aria-label="Mode mestre"><i></i></button></div>
    <div class="row2 pbtns"><button class="btn ghost" onclick="go('profiles')">CANVIA D'ALUMNE</button><button class="btn ghost redt" onclick="resetP()">ESBORRA EL PROGRÉS</button></div>
    <p class="foot">Mates amb Numi · Algorithmics Lleida<br><a href="/profe.html">Zona del professorat</a></p>`, 'profile');
}
function resetP() {
  ask(`Segur que vols esborrar tot el progrés de <b>${esc(P.name)}</b>? No es pot desfer.`, 'ESBORRA', 'CANCEL·LA', async () => {
    const keep = { id: P.id, code: P.code, name: P.name, course: P.course, baseCourse: P.baseCourse, survey: P.survey, goal: P.goal, sound: P.sound, unlockAll: false };
    for (const k in P) delete P[k]; Object.assign(P, freshProgress(), keep);
    saveLocal();
    if (P.code) { try { await api('sync', { code: P.code, state: P, reset: true }); } catch (e) { } }
    go('home');
  });
}

/* ---------- Alumnes ---------- */
function renderProfiles() {
  VIEW = 'profiles';
  const ps = Object.values(DB.profiles);
  app.innerHTML = `<div class="page solo"><h1 class="ph1 c">Qui aprèn avui?</h1>
    <div class="plist">${ps.map(p => `<div class="pcard"><button class="pmain" onclick="switchP('${p.id}')"><span class="pav">${charSVG(p.companion, 'idle', p.acc)}</span><span><b>${esc(p.name)}</b><small>${COURSES[p.course]?.name || ''} · Nivell ${lvlOf(p.xp)} · 🔥 ${p.streak}</small></span></button><button class="pdel" onclick="delP('${p.id}')" aria-label="Treu d'aquest dispositiu">✕</button></div>`).join('')}</div>
    <button class="btn big" onclick="onb(0)">+ SOC NOU/NOVA</button>
    <button class="btn big ghost mt" onclick="loginCode()">🔑 JA TINC UN CODI</button></div>`;
}
function switchP(id) { P = DB.profiles[id]; DB.current = id; saveLocal(); pull(); go('home'); }
function delP(id) {
  ask(`Vols treure <b>${esc(DB.profiles[id].name)}</b> d'aquest dispositiu? ${DB.profiles[id].code ? `El progrés continua desat amb el codi <b>${DB.profiles[id].code}</b>.` : ''}`, 'TREU', 'CANCEL·LA', () => {
    delete DB.profiles[id]; if (DB.current === id) { DB.current = null; P = null; } saveLocal();
    Object.keys(DB.profiles).length ? renderProfiles() : onb(0);
  });
}
function loginCode() {
  modal(`<div class="sheet card cent"><h3>Entra amb el teu codi</h3><p>És el codi secret que et va donar en Numi (per exemple, GUINEU-4827).</p>
    <input id="cd" class="nm" maxlength="20" placeholder="CODI-0000" autocomplete="off" autocapitalize="characters"><div id="cderr" class="err"></div>
    <div class="row2"><button class="btn ghost" onclick="closeModal()">TORNA</button><button class="btn" onclick="doLogin()">ENTRA</button></div></div>`, true);
  const i = $('#cd'); i.focus(); i.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
}
async function doLogin() {
  const code = $('#cd').value.trim().toUpperCase(); if (!code) return;
  const ex = Object.values(DB.profiles).find(p => p.code === code); if (ex) { closeModal(); return switchP(ex.id); }
  $('#cderr').textContent = 'Buscant…';
  try {
    const r = await api('login', { code });
    if (!r.state) { $('#cderr').textContent = 'No trobem aquest codi. Revisa les lletres i els números.'; return; }
    const id = 'p' + Date.now().toString(36);
    P = migrate({ ...r.state, id, code, name: r.name }); P.dirty = false; DB.profiles[id] = P; DB.current = id; saveLocal();
    closeModal(); go('home'); toast(`Hola de nou, ${esc(P.name)}! 👋`);
  } catch (e) { $('#cderr').textContent = 'No hi ha connexió. Torna-ho a provar.'; }
}

/* ---------- Registre i prova de nivell ---------- */
let ONB = {};
function onbShell(step, inner, back = true) {
  app.innerHTML = `<div class="page solo onb"><div class="osteps">${[0, 1, 2, 3].map(i => `<i class="${i <= step ? 'on' : ''}"></i>`).join('')}</div>${inner}
    ${back && (step > 0 || Object.keys(DB.profiles).length) ? `<button class="link" onclick="${step > 0 ? `onb(${step - 1})` : 'renderProfiles()'}">Tornar</button>` : ''}</div>`;
}
function onb(step) {
  VIEW = 'onboard';
  if (step === 0) {
    onbShell(0, `<div class="onb-char">${charSVG('numi', 'happy')}</div>
      <div class="bubble big">Hola! Soc en <b>Numi</b>. T'acompanyaré pas a pas perquè les mates et surtin rodones. <b>Com et dius?</b></div>
      <input id="nm" class="nm" maxlength="16" placeholder="El teu nom" autocomplete="off" enterkeyhint="go" value="${esc(ONB.name || '')}">
      <button class="btn big" onclick="onbName()">SEGÜENT</button>`);
    const i = $('#nm'); i.focus(); i.addEventListener('keydown', e => { if (e.key === 'Enter') onbName(); });
  }
  if (step === 1) onbShell(1, `<div class="onb-char sm">${charSVG('numi', 'idle')}</div><div class="bubble big">Encantat, <b>${esc(ONB.name)}</b>! <b>Quin curs fas?</b></div>
    <div class="cgrid">${COURSES.map((c, i) => `<button class="cbtn ${ONB.course === i ? 'on' : ''}" onclick="ONB.course=${i};onb(2)"><span class="cem">${c.emoji}</span><b>${c.name}</b><small>primària</small></button>`).join('')}</div>`);
  if (step === 2) onbShell(2, `<div class="onb-char sm">${charSVG('guida', 'idle')}</div><div class="bubble big">Soc la <b>Guida</b>. Explica'm una mica: <b>com et sents amb les mates?</b></div>
    <div class="ogrid">${Object.entries(FEEL).map(([k, v]) => `<button class="obtn ${ONB.feel === k ? 'on' : ''}" onclick="ONB.feel='${k}';onb(3)"><span>${v.split(' ')[0]}</span>${v.slice(v.indexOf(' ') + 1)}</button>`).join('')}</div>`);
  if (step === 3) onbShell(3, `<div class="onb-char sm">${charSVG('vuit', 'idle')}</div><div class="bubble big">I ara, <b>què t'agrada més?</b></div>
    <div class="ogrid">${Object.entries(LIKE).map(([k, v]) => `<button class="obtn ${ONB.like === k ? 'on' : ''}" onclick="ONB.like='${k}';onbTest()"><span>${v.split(' ')[0]}</span>${v.slice(v.indexOf(' ') + 1)}</button>`).join('')}</div>`);
}
function onbName() { const n = $('#nm').value.trim(); if (!n) { $('#nm').classList.add('shake'); setTimeout(() => $('#nm').classList.remove('shake'), 500); return; } ONB.name = n; onb(1); }
function onbTest() {
  app.innerHTML = `<div class="page solo onb"><div class="onb-char">${charSVG('numi', 'happy')}</div>
    <div class="bubble big">Perfecte! Ara et faré <b>unes preguntes</b> per saber per on hem de començar. <b>No és cap examen:</b> si no en saps alguna, toca «No ho sé» i ja està.</div>
    <button class="btn big" onclick="startPlacement()">COMENCEM!</button><button class="link" onclick="LS={res:[]};finishPlacement(true)">Salta la prova i comença pel principi</button></div>`;
}
function startPlacement() {
  const ci = ONB.course, c = COURSES[ci], meta = [];
  if (ci > 0) { const pc = COURSES[ci - 1]; [1, 2].forEach(k => { const l = pc.units[k].lessons[2]; meta.push({ sk: l.sk[0], L: l.L, tag: 'prev' }); }); }
  c.units.slice(0, 6).forEach((u, ui) => { const l = u.lessons[2]; meta.push({ sk: l.sk[0], L: l.L, tag: 'cur', ui }); });
  P = { id: 'tmp', name: ONB.name, companion: 'numi', acc: {}, sound: true, stats: { sk: {} } };
  startRun({ mode: 'place', plan: meta.map(m => [m.sk, m.L]), meta, color: '#602B7A' });
}
function finishPlacement(skipped) {
  const ci = ONB.course, c = COURSES[ci], meta = LS && LS.meta || [], res = LS ? LS.res : [];
  const prevN = meta.filter(m => m.tag === 'prev').length, prevOk = res.slice(0, prevN).filter(Boolean).length;
  const cur = res.slice(prevN); let lead = 0; while (lead < cur.length && cur[lead]) lead++;
  const curOk = cur.filter(Boolean).length;
  let course = ci, skip = Math.min(lead, c.units.length - 2), msg;
  if (skipped) { skip = 0; msg = `Comencem ${c.long} des del principi.`; }
  else if (ci > 0 && prevOk === 0 && curOk <= 1) { course = ci - 1; skip = 0; msg = `Farem un petit repàs de <b>${COURSES[ci - 1].long}</b> per agafar força. Quan vulguis, pots canviar de curs!`; }
  else if (skip > 0) msg = `Ho fas molt bé! Obrim ${c.long} fins a la <b>unitat ${skip + 1}</b>: ${c.units[skip].title}.`;
  else msg = `Començarem ${c.long} per la unitat 1: ${c.units[0].title}. Pas a pas!`;
  const result = skipped ? 'Sense prova' : `${prevN ? `Curs anterior ${prevOk}/${prevN} · ` : ''}${c.name}: ${curOk}/${cur.length}`;
  LS = null;
  const id = 'p' + Date.now().toString(36);
  P = { id, name: ONB.name, goal: 20, sound: true, unlockAll: false, ...freshProgress(), course, baseCourse: course, pendingReg: true,
    survey: { curs: c.long, feel: ONB.feel, like: ONB.like, result, start: `${COURSES[course].name} · unitat ${(course === ci ? skip : 0) + 1}`, date: today() } };
  P.skip[COURSES[course].id] = course === ci ? skip : 0;
  DB.profiles[id] = P; DB.current = id; saveLocal();
  const areas = skipped ? '' : `<div class="plres">${meta.filter(m => m.tag === 'cur').map((m, i) => `<div class="${cur[i] ? 'ok' : ''}"><span>${cur[i] ? '✔' : '·'}</span>${c.units[m.ui].title}</div>`).join('')}</div>`;
  app.innerHTML = `<div class="scr"><div class="burst"></div><div class="rchar">${charSVG('numi', 'happy')}</div><h1>Ja tenim el teu punt de partida!</h1>
    <p class="sub">${msg}</p>${areas}<div id="codeBox" class="codecard big"><div><small>El teu codi secret</small><b>Creant…</b></div></div>
    <button class="btn big" onclick="ONB={};go('home')">ANEM-HI!</button></div>`;
  SFX.win(); confetti(120);
  syncNow().then(() => { const b = $('#codeBox'); if (b) b.innerHTML = P.code ? `<div><small>El teu codi secret</small><b>${P.code}</b></div><div class="ctip">✏️ Apunta'l! Amb aquest codi pots continuar des de qualsevol ordinador o tauleta.</div>` : `<div><small>El teu codi secret</small><b>—</b></div><div class="ctip">No hi ha connexió. El codi apareixerà al teu perfil quan tornis a tenir internet.</div>`; });
}

/* ---------- Teclat ---------- */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if (SP) { if (/^\d$/.test(e.key)) skey(e.key); else if (e.key === 'Backspace') skey('del'); else if (e.key === 'Enter') skey('ok'); return; }
  if (!LS || !LS.cur || $('.modal-bg')) return;
  if (e.key === 'Enter') { e.preventDefault(); return check(); }
  if (LS.state !== 'ask') return;
  const t = LS.cur.type;
  if (t === 'input') { if (/^\d$/.test(e.key)) key(e.key); else if (e.key === 'Backspace') key('del'); else if ((e.key === ',' || e.key === '.') && LS.cur.dec) key(','); else if (e.key === '-' && LS.cur.neg) key('−'); }
  else if (t === 'choice') { const n = +e.key; if (n >= 1 && n <= LS.cur.opts.length) pickOpt(n - 1); }
  else if (t === 'order') { if (e.key === 'Backspace' && LS.order.length) ordRemove(LS.order.length - 1); else { const n = +e.key; if (n >= 1 && n <= LS.cur.items.length) ordTap(n - 1); } }
});

if (P) { pull(); syncNow(); }
go(P ? 'home' : 'onboard');
