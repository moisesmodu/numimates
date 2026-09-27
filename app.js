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
  if (!p.cxp) p.cxp = {};
  if (!p.stats.bests) p.stats.bests = { sprint: p.stats.sprintBest || 0 };
  if (p.stats.games === undefined) p.stats.games = 0;
  if (p.course === undefined) { p.course = 3; p.baseCourse = 3; }
  if (p.baseCourse === undefined) p.baseCourse = p.course;
  if (!p.lang) p.lang = DB.lang;
  for (let i = 1; i <= 8; i++) if (p.prog['u' + i]) { p.prog['c4-' + i] = p.prog['u' + i]; delete p.prog['u' + i]; }
  if (!p.code && !p.pendingReg && !p.holdReg) p.pendingReg = true;
  return p;
}
Object.values(DB.profiles).forEach(migrate);
let P = DB.current && DB.profiles[DB.current] || null;
function setLang(l, rerender = true) {
  LANG = l; document.documentElement.lang = l; DB.lang = l;
  if (P && P.id !== 'tmp') { P.lang = l; save(); } else saveLocal();
  if (rerender) { const v = VIEW; if (v === 'onboard') onb(ONB.step || 0); else go(v || 'home'); }
}
LANG = P ? P.lang : DB.lang; document.documentElement.lang = LANG;
function saveLocal() { try { localStorage.setItem(SKEY, JSON.stringify(DB)); } catch (e) { } }
function save() { saveLocal(); if (P && P.id !== 'tmp') { P.dirty = true; clearTimeout(save.t); save.t = setTimeout(syncNow, 1500); } }

/* ---------- Núvol ---------- */
const api = (path, data) => fetch('/api/' + path, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) }).then(r => r.json().then(j => ({ status: r.status, ...j })));
let SYNCING = false;
async function syncNow() {
  if (!P || P.id === 'tmp' || P.holdReg || SYNCING || !navigator.onLine) return;
  SYNCING = true;
  try {
    if (!P.code) {
      const r = await api('register', { name: P.name, survey: P.survey || null, state: P });
      if (r.code) { P.code = r.code; P.pendingReg = false; P.dirty = false; saveLocal(); }
    } else if (P.dirty) {
      const r = await api('sync', { code: P.code, state: P });
      if (r.ok === false && r.state && r.state.xp > P.xp) adopt(r.state);
      else if (r.ok) P.dirty = false;
      saveLocal();
    }
  } catch (e) { }
  SYNCING = false;
  const s = $('#cloud'); if (s) s.innerHTML = cloudTxt();
}
async function pull() {
  if (!P || !P.code || !navigator.onLine) return;
  try { const r = await api('login', { code: P.code }); if (r.state && r.state.xp > P.xp) { adopt(r.state); if (VIEW === 'home') renderHome(); }
    if (r.state && !!r.state.unlockAll !== !!P.unlockAll) { P.unlockAll = !!r.state.unlockAll; saveLocal(); if (VIEW === 'home') renderHome(); } if (r.username && !P.username) { P.username = r.username; saveLocal(); } } catch (e) { }
}
function adopt(st) { const id = P.id; Object.assign(P, migrate(st), { id, dirty: false }); DB.profiles[id] = P; LANG = P.lang; saveLocal(); }
const cloudTxt = () => `<i class="ci">${ICON.cloud}</i>` + (!P.code ? L("Encara no s'ha pogut desar al núvol. Ho tornarà a provar sol.", 'Aún no se ha podido guardar en la nube. Lo volverá a intentar solo.') : P.dirty ? L('Desant els últims canvis…', 'Guardando los últimos cambios…') : L('Progrés desat al núvol.', 'Progreso guardado en la nube.'));
addEventListener('online', syncNow);
setInterval(() => { if (P && (P.dirty || !P.code)) syncNow(); }, 30000);
addEventListener('visibilitychange', () => { if (document.hidden) syncNow(); });

/* ---------- Cursos i progrés ---------- */
const CUR = () => COURSES[P.course];
const SICON = { num: 'hash', mes: 'ruler', esp: 'shapes', alg: 'blocks', est: 'dice' };
const icn = k => `<i class="ci">${ICON[k] || ''}</i>`;
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
function addXP(x) { dailyRoll(); P.xp += x; P.daily.xp += x; weekXP(x); misEvent('xp', x); P.cxp = P.cxp || {}; P.cxp[P.companion] = (P.cxp[P.companion] || 0) + x; }
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
function prog(ui, c = CUR()) {
  const u = c.units[ui], n = REP(u) + 1; let p = P.prog[u.id];
  if (!p) p = P.prog[u.id] = { stars: Array(n).fill(0) };
  if (p.stars.length < n) { const old = p.stars, rep = old[old.length - 1]; p.stars = [...old.slice(0, old.length - 1), ...Array(n - old.length).fill(0), rep]; }
  return p;
}
const udone = (p, u) => { const st = p.prog[u.id]?.stars; return !!(st && st[st.length - 1] > 0); };
function unitOpen(ui, ci = P.course) { const c = COURSES[ci]; return ui === 0 || P.unlockAll || ci < P.baseCourse || ui <= (P.skip[c.id] || 0) || prog(ui - 1, c).stars[REP(c.units[ui - 1])] > 0; }
function lessonOpen(ui, li) { if (!unitOpen(ui)) return false; return li === 0 || P.unlockAll || P.course < P.baseCourse || ui < (P.skip[CUR().id] || 0) || prog(ui).stars[li - 1] > 0; }
const unitsDone = p => COURSES.reduce((n, c) => n + c.units.filter(u => udone(p, u)).length, 0);
function currentNode() {
  const us = UNITS_(), from = Math.min(P.skip[CUR().id] || 0, us.length - 1);
  for (const start of [from, 0]) for (let ui = start; ui < us.length; ui++) for (let li = 0; li <= REP(us[ui]); li++) if (lessonOpen(ui, li) && !prog(ui).stars[li]) return [ui, li];
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
  { d: 3, gems: 30, icon: 'gift', txt: ['30 cristalls', '30 cristales'] },
  { d: 7, gems: 50, acc: 'medalla', icon: 'medal', txt: ['Medalla de foc + 50 cristalls', 'Medalla de fuego + 50 cristales'] },
  { d: 14, gems: 100, acc: 'auriculars', icon: 'headphones', txt: ['Auriculars + 100 cristalls', 'Auriculares + 100 cristales'] },
  { d: 30, gems: 150, char: 'estel', icon: 'star', txt: ['Nova companya: Estel + 150 cristalls', 'Nueva compañera: Estel + 150 cristales'] },
  { d: 60, gems: 250, acc: 'coronafoc', icon: 'crown', txt: ['Corona de foc + 250 cristalls', 'Corona de fuego + 250 cristales'] },
  { d: 100, gems: 500, icon: 'trophy', txt: ['500 cristalls i la medalla dels 100 dies', '500 cristales y la medalla de los 100 días'] }
];
function grantStreak() {
  const got = SRW.filter(r => P.streak >= r.d && !P.srw.includes(r.d));
  got.forEach(r => { P.srw.push(r.d); P.gems += r.gems; if (r.acc && !P.accOwned.includes(r.acc)) P.accOwned.push(r.acc); if (r.char && !P.owned.includes(r.char)) P.owned.push(r.char); });
  return got;
}
const dies = n => n === 1 ? L('dia', 'día') : L('dies', 'días');
function streakCard() {
  const s = streakNow(), next = SRW.find(r => !P.srw.includes(r.d));
  const dots = SRW.map(r => `<div class="srw ${P.srw.includes(r.d) ? 'got' : ''} ${next && next.d === r.d ? 'next' : ''}"><div class="sri">${ICON[r.icon]}</div><span>${r.d} d</span></div>`).join('');
  return `<div class="scard"><div class="shead"><span class="sico">${ICON.flame}</span><div><b>${s ? L(`Ratxa de ${s} ${dies(s)}`, `Racha de ${s} ${dies(s)}`) : L('Comença una ratxa avui', 'Empieza una racha hoy')}</b><small>${next ? L(`Falten <b>${Math.max(0, next.d - s)} ${dies(next.d - s)}</b> per al premi següent: ${tx(next.txt)}.`, `Faltan <b>${Math.max(0, next.d - s)} ${dies(next.d - s)}</b> para el próximo premio: ${tx(next.txt)}.`) : L('Ja tens tots els premis de ratxa.', 'Ya tienes todos los premios de racha.')}</small></div></div>
    <div class="strack"><div class="sline"><div style="width:${(SRW.filter(r => P.srw.includes(r.d)).length) / (SRW.length - 1) * 100}%"></div></div>${dots}</div></div>`;
}

/* ---------- So, confeti i animacions ---------- */
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
  win() { [523, 659, 784, 1047].forEach((f, i) => tone(f, .25, i * .11)); }, coin() { tone(988, .08); tone(1319, .18, .07); },
  tick() { tone(880, .04, 0, 'square', .03); }, boing() { tone(300, .1); tone(600, .15, .06); }
};
function confetti(n = 70) {
  if (REDUCED) return;
  const c = document.createElement('canvas'), dpr = devicePixelRatio || 1; c.className = 'confetti'; document.body.appendChild(c);
  const ctx = c.getContext('2d'), W = c.width = innerWidth * dpr, H = c.height = innerHeight * dpr, cols = ['#2C4A9A', '#F0B429', '#E8643C', '#1F8F87', '#3A7BD5'];
  const ps = [...Array(n)].map(() => ({ x: W / 2 + (Math.random() - .5) * W * .4, y: H * .38, vx: (Math.random() - .5) * 20 * dpr, vy: (-Math.random() * 17 - 5) * dpr, r: (4 + Math.random() * 5) * dpr, c: pick(cols), a: Math.random() * 6, va: (Math.random() - .5) * .3 }));
  let f = 0;
  (function loop() { ctx.clearRect(0, 0, W, H); ps.forEach(p => { p.vy += .5 * dpr; p.x += p.vx; p.y += p.vy; p.vx *= .99; p.a += p.va; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); ctx.restore(); }); if (++f < 160) requestAnimationFrame(loop); else c.remove(); })();
}
function sparkle(el, n = 8) {
  if (REDUCED || !el) return;
  const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  for (let i = 0; i < n; i++) {
    const s = document.createElement('i'), a = Math.PI * 2 * i / n + Math.random() * .4, d = 50 + Math.random() * 50;
    s.className = 'spark';
    s.style.cssText = `left:${cx}px;top:${cy}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px;color:${pick(['#F0B429', '#2F9461', '#2C4A9A', '#E8643C'])}`;
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
  if (![5, 10, 20, 30].includes(n)) return;
  const d = document.createElement('div'); d.className = 'combobanner';
  d.innerHTML = `<i class="ci">${ICON.flame}</i> ${L(`${n} encerts seguits`, `${n} aciertos seguidos`)}`;
  document.body.appendChild(d); setTimeout(() => d.remove(), 1500); SFX.boing();
}
const SAY = () => L(['Hola!', 'Fem una lliçó?', 'Hi, hi, pessigolles.', 'Som-hi.', 'Quan vulguis.', 'Què aprenem avui?'], ['¡Hola!', '¿Hacemos una lección?', 'Ji, ji, cosquillas.', 'Vamos allá.', 'Cuando quieras.', '¿Qué aprendemos hoy?']);
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
  document.body.appendChild(d);
}
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
  VIEW = v;
  ({ home: renderHome, train: renderTrain, league: () => renderLeague(), album: () => renderAlbum(), shop: renderShop, badges: () => renderAlbum('medals'), profile: renderProfile, profiles: renderProfiles, onboard: () => onb(0) }[v] || renderHome)();
  if (v !== 'home') window.scrollTo(0, 0);
}
const NAV = () => [['home', ICON.path, L('Camí', 'Camino')], ['train', ICON.target, L('Entrena', 'Entrena')], ['album', ICON.cards, L('Àlbum', 'Álbum')], ['shop', ICON.bag, L('Botiga', 'Tienda')], ['profile', ICON.user, L('Perfil', 'Perfil')]];
const nav = t => `<nav class="nav">${NAV().map(([v, i, l]) => `<button class="${v === t ? 'on' : ''}" ${v === t ? 'aria-current="page"' : ''} onclick="go('${v}')"><span class="ni">${i}</span><span>${l}</span></button>`).join('')}</nav>`;
const shell = (inner, tab) => `<div class="page">${topbar()}${inner}</div>${nav(tab)}`;
function topbar() {
  const s = streakNow();
  return `<header class="topbar"><button class="avatar" onclick="go('profiles')" title="${L("Canvia d'alumne", 'Cambiar de alumno')}">${meC('idle')}</button>
  <div class="chips"><span class="chip ${s ? 'fire' : 'off'}" id="chipFire"><i class="ci">${ICON.flame}</i>${s}</span><span class="chip gem" id="chipGem"><i class="ci">${ICON.gem}</i>${P.gems}</span><span class="chip lvl" id="chipLvl"><i class="ci">${ICON.bolt}</i>${lvlOf(P.xp)}</span></div></header>`;
}
const STAR = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.6l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
const starsHTML = (n, cls = '') => `<span class="stars ${cls}" aria-label="${n}/3">${[1, 2, 3].map(i => `<i class="${i <= n ? 'on' : ''}">${STAR}</i>`).join('')}</span>`;
function showGain() {
  if (!GAIN) return;
  const g = GAIN; GAIN = null;
  setTimeout(() => {
    if (g.gems) { const c = $('#chipGem'); if (c) { floatTxt(c, `+${g.gems} <i class="ci">${ICON.gem}</i>`, 'gain'); c.classList.add('bump'); } }
    if (g.xp) { const c = $('#chipLvl'); if (c) { floatTxt(c, `+${g.xp} XP`, 'gain xp'); c.classList.add('bump'); } }
  }, 250);
}

/* ---------- Camí ---------- */
function goalCard() {
  dailyRoll();
  const x = P.daily.xp, g = P.goal, pc = Math.min(100, Math.round(x / g * 100));
  const msg = x >= g ? L("Objectiu d'avui fet. Bona feina.", 'Objetivo de hoy hecho. Buen trabajo.') : x === 0 ? L(`Hola, ${esc(P.name)}. Fem una lliçó?`, `Hola, ${esc(P.name)}. ¿Hacemos una lección?`) : L(`Et falten ${g - x} XP per a l'objectiu d'avui.`, `Te faltan ${g - x} XP para el objetivo de hoy.`);
  return `<div class="goal"><div class="gchar tapme">${meC(x >= g ? 'happy' : 'idle')}</div><div class="gbody"><div class="gmsg">${msg}</div><div class="gbar"><div style="width:${pc}%"></div></div><div class="gnum">${x} / ${g} ${L('XP avui', 'XP hoy')}</div></div></div>`;
}
function testCard() {
  const t = testInfo(); if (!t.due) return '';
  return `<button class="testcard" onclick="startEvolution()"><span class="tci">${ICON.chart}</span><span><b>${L("Ja pots fer la prova d'evolució", 'Ya puedes hacer la prueba de evolución')}</b><small>${L('12 preguntes per veure com has avançat. Dona 20 cristalls.', '12 preguntas para ver cómo has avanzado. Da 20 cristales.')}</small></span><span class="go">${ICON.right}</span></button>`;
}
const OFF = [0, -54, -80, -54, 0, 54, 80, 54, 0, -54, -80, -54];
function unitHTML(u, ui) {
  const open = unitOpen(ui), st = prog(ui).stars, cur = currentNode();
  const R_ = REP(u), nodes = [...Array(R_ + 1).keys()].map(li => {
    const isR = li === R_, done = st[li] > 0, can = lessonOpen(ui, li), isCur = cur && cur[0] === ui && cur[1] === li;
    const cls = !can ? 'locked' : isCur ? 'cur' : done ? (st[li] === 3 ? 'gold' : 'done') : 'open';
    const icon = !can ? ICON.lock : isR ? (done ? ICON.trophy : ICON.gift) : done ? (st[li] === 3 ? ICON.crown : ICON.check) : ICON.star;
    return `<div class="nwrap" style="--x:${OFF[li]}px;transition-delay:${li * 50}ms">
      ${isCur ? `<div class="tip">${isR ? L('Repte', 'Reto') : L('Comença', 'Empieza')}</div>` : ''}
      <button class="node ${cls} ${isR ? 'rep' : ''}" onclick="openLesson(${ui},${li})" aria-label="${isR ? L('Repte final', 'Reto final') : L('Lliçó ', 'Lección ') + (li + 1)}"><i class="nico">${icon}</i></button>
      ${done && !isR ? starsHTML(st[li], 'mini') : ''}</div>${li === 4 && R_ > 5 ? `<div class="pdiv"><span>${L('Nivell 2', 'Nivel 2')}</span></div>` : ''}`;
  }).join('');
  return `<section class="unit ${open ? '' : 'closed'}" style="--uc:${u.color}">
    <div class="ubanner"><div class="utext"><div class="ukick">${L('Unitat', 'Unidad')} ${ui + 1}</div><h2>${tx(u.title)}</h2><div class="usents">${unitSents(u).map(k => `<span title="${tx(SENT[k])}">${icn(SICON[k])}${tx(SENT[k]).replace(/^Sentit |^Sentido /, '').replace(/ i pensament computacional| y pensamiento computacional/, '')}</span>`).join('')}</div><p>${open ? tx(u.desc) : L('Supera el repte de la unitat anterior per obrir-la.', 'Supera el reto de la unidad anterior para abrirla.')}</p></div><div class="uguide tapme">${charSVG(u.guide, 'idle')}</div></div>
    <div class="path">${nodes}<div class="pguide tapme ${ui % 2 ? 'l' : ''}">${charSVG(u.guide, open ? 'happy' : 'idle')}</div></div></section>`;
}
function renderHome() {
  VIEW = 'home';
  const c = CUR();
  app.innerHTML = shell(`<button class="course" onclick="pickCourse()"><span class="cem">${tx(c.name)}</span><span><small>${L('Estàs fent', 'Estás haciendo')}</small><b>${tx(c.long)}</b></span><span class="cch">${L('Canvia', 'Cambiar')}${icn('down')}</span></button>
    ${testCard()}${recoBox()}${schoolCard()}${goalCard()}${missionsCard()}${streakCard()}${UNITS_().map(unitHTML).join('')}
    <div class="theend">${P.course < 5 ? L(`Després de ${tx(c.long)} ve <b>${tx(COURSES[P.course + 1].long)}</b>.`, `Después de ${tx(c.long)} viene <b>${tx(COURSES[P.course + 1].long)}</b>.`) : L("Aquest és l'últim curs de primària.", 'Este es el último curso de primaria.')}</div>`, 'home');
  revealNodes(); showGain();
  const n = $('.node.cur'); if (n) setTimeout(() => n.scrollIntoView({ block: 'center', behavior: 'smooth' }), 60);
}
function pickCourse() {
  modal(`<div class="sheet"><h3>${L('Tria el curs', 'Elige el curso')}</h3><p>${L('Pots repassar cursos anteriors quan vulguis.', 'Puedes repasar cursos anteriores cuando quieras.')}</p><div class="cgrid">${COURSES.map((c, i) => {
    const done = c.units.filter(u => udone(P, u)).length;
    return `<button class="cbtn ${i === P.course ? 'on' : ''}" onclick="setCourse(${i})"><b>${tx(c.name)}</b><small>${done}/${c.units.length} ${L('unitats', 'unidades')}</small></button>`;
  }).join('')}</div></div>`);
}
function setCourse(i) { P.course = i; save(); closeModal(); renderHome(); window.scrollTo(0, 0); }
function openLesson(ui, li) {
  if (!lessonOpen(ui, li)) { toast(icn('lock') + (li === 0 ? L('Primer cal superar el repte de la unitat anterior.', 'Primero hay que superar el reto de la unidad anterior.') : L('Primer cal fer la lliçó anterior.', 'Primero hay que hacer la lección anterior.'))); SFX.ko(); return; }
  const u = UNITS_()[ui], isR = li === REP(u), st = prog(ui).stars[li];
  modal(`<div class="sheet" style="--uc:${u.color}"><div class="sk">${tx(CUR().name)} · ${L('Unitat', 'Unidad')} ${ui + 1} · ${isR ? L('Repte final', 'Reto final') : L('Lliçó ', 'Lección ') + (li + 1) + L(' de ', ' de ') + REP(u)}</div>
    <h3>${isR ? L('Repte: ', 'Reto: ') + tx(u.title).toLowerCase() : tx(u.lessons[li].t)}</h3>
    <p>${isR ? L('10 exercicis de tota la unitat. Si el superes, obres la unitat següent i un cofre amb cristalls.', '10 ejercicios de toda la unidad. Si lo superas, abres la unidad siguiente y un cofre con cristales.') : L("8 exercicis. Si te n'equivoques algun, el tornaràs a practicar al final.", '8 ejercicios. Si fallas alguno, lo volverás a practicar al final.')}</p>
    ${st ? `<div class="sstars">${starsHTML(st)}</div>` : ''}
    <button class="btn big" style="--c:${u.color}" onclick="closeModal();startLesson(${ui},${li})">${st ? L('Torna-la a fer', 'Repetir') : L('Comença', 'Empezar')}</button></div>`);
}

/* ---------- Motor de lliçons ---------- */
function genEx(sk, lv, seen, mix) {
  const [name, arg] = sk.split(':'); let e;
  for (let t = 0; t < 10; t++) { e = EX[name](lv, arg); if (mix) e = remix(e); e.sk = sk; e.L = lv; const key = e.q + (e.vis || '') + (e.items || ''); if (!seen.has(key)) { seen.add(key); break; } }
  return e;
}
function startLesson(ui, li) {
  const u = UNITS_()[ui]; let plan = [];
  if (li === REP(u)) { const sks = [...new Set(u.lessons.flatMap(l => l.sk))], top = Math.max(...u.lessons.map(l => l.L)); for (let i = 0; i < 10; i++) plan.push([sks[i % sks.length], Math.max(1, top - (i < 4 ? 1 : 0))]); }
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
  if (!pool.length) { toast(L('Primer cal fer alguna lliçó del camí.', 'Primero hay que hacer alguna lección del camino.')); return; }
  const w = pool.map(([s]) => { const [c, t] = P.stats.sk[s] || [0, 0]; return 1 + 4 * (1 - (c + 1) / (t + 2)); });
  const sum = w.reduce((a, b) => a + b, 0), plan = [];
  for (let i = 0; i < 8; i++) { let r = Math.random() * sum, j = 0; while (j < w.length - 1 && r > w[j]) { r -= w[j]; j++; } plan.push(pool[j]); }
  startRun({ mode: 'train', ui: ui ?? null, li: null, plan, color: ui != null ? UNITS_()[ui].color : '#2C4A9A' });
}
function startRun(o) {
  closeModal();
  const seen = new Set();
  const mix = !['place', 'evo'].includes(o.mode);
  LS = { ...o, seen, mix, queue: o.plan.map(([s, lv], i) => { const e = genEx(s, lv, seen, mix); if (o.review && o.review[i]) e.review = true; return e; }), total: o.plan.length, done: 0, miss: 0, combo: 0, maxCombo: 0, gold: 0, t0: Date.now(), res: [] };
  if (mix && o.plan.length >= 6) { const g = ri(2, o.plan.length - 1); LS.queue[g].gold = true; }
  nextEx();
}
function nextEx() {
  if (LS.done >= LS.total) return LS.mode === 'place' ? finishPlacement() : LS.mode === 'evo' ? finishEvolution() : finishRun();
  LS.cur = LS.queue.shift(); LS.sel = null; LS.input = ''; LS.order = []; LS.state = 'ask';
  renderLesson();
}
function renderLesson() {
  const e = LS.cur, quiet = LS.mode === 'place' || LS.mode === 'evo';
  const tag = LS.mode === 'place' ? icn('compass') + L('Prova de nivell. Si no ho saps, toca «No ho sé».', 'Prueba de nivel. Si no lo sabes, toca «No lo sé».') : LS.mode === 'evo' ? icn('chart') + L("Prova d'evolució. Respon amb calma.", 'Prueba de evolución. Responde con calma.') : '';
  app.innerHTML = `<div class="lesson ${e.gold ? 'isgold' : ''}" style="--uc:${LS.color || '#2C4A9A'}">
    <div class="l-top"><button class="xbtn" onclick="quitRun()" aria-label="${L('Surt', 'Salir')}">${ICON.x}</button>
      <div class="pbar"><div class="pfill" style="width:${LS.done / LS.total * 100}%"></div></div>
      ${quiet ? `<div class="pcount">${LS.done + 1}/${LS.total}</div>` : `<div class="combo ${LS.combo >= 2 ? 'on' : ''}" id="combo"><i class="ci">${ICON.flame}</i><b>${LS.combo}</b></div>`}</div>
    <div class="l-body" id="lbody">
      ${e.retry ? `<div class="retry">${icn('repeat')}${L('Una altra oportunitat', 'Otra oportunidad')}</div>` : ''}${e.gold ? `<div class="retry goldq">${icn('star')}${L('Pregunta daurada: +5 XP', 'Pregunta dorada: +5 XP')}</div>` : ''}${e.review ? `<div class="retry rev">${icn('history')}${L("Repàs d'una lliçó anterior", 'Repaso de una lección anterior')}</div>` : ''}${tag ? `<div class="retry place">${tag}</div>` : ''}
      <div class="l-q ${e.long ? 'long' : ''}"><div class="buddy tapme" id="buddy">${meC('think')}</div><div class="bubble">${e.q}</div></div>
      ${e.vis ? `<div class="l-vis">${e.vis}</div>` : ''}
      <div class="l-ans">${ansHTML(e)}</div>
    </div>
    <div class="l-foot" id="foot"><div class="fwrap"><div class="fb" id="fb"></div>${quiet ? `<button class="btn ghost skip" onclick="skipPlace()">${L('No ho sé', 'No lo sé')}</button>` : ''}<button class="btn check" id="chk" onclick="check()" disabled>${L('Comprova', 'Comprobar')}</button></div></div>
  </div>`;
}
function padHTML(fn, extra) {
  const last = extra ? `<button class="pk-x" onclick="${fn}('${extra}')">${extra}</button>` : `<button class="pk-ok" onclick="${fn}('ok')" aria-label="OK">${ICON.check}</button>`;
  return `<div class="pad">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button onclick="${fn}('${n}')">${n}</button>`).join('')}<button class="pk-del" onclick="${fn}('del')" aria-label="${L('Esborra', 'Borrar')}">${ICON.backspace}</button><button onclick="${fn}('0')">0</button>${last}</div>`;
}
const showOf = e => e.show || fmt;
function ansHTML(e) {
  if (e.type === 'choice' && e.balloon) return `<div class="balloons">${e.opts.map((o, i) => `<button class="bln b${i}" style="--d:${i * .35}s;--c:${['#D9577A', '#3A7BD5', '#2F9461', '#E8843C'][i]}" onclick="pickOpt(${i})"><span>${o}</span></button>`).join('')}</div>`;
  if (e.type === 'choice' && e.tf) return `<div class="opts tfopts">${e.opts.map((o, i) => `<button class="opt tf${i}" onclick="pickOpt(${i})"><span class="ov">${o}</span></button>`).join('')}</div>`;
  if (e.type === 'choice') {
    const long = e.list || e.opts.some(o => String(o).replace(/<[^>]+>/g, '').length > 10);
    return `<div class="opts ${e.big && !long ? 'big' : ''} ${long ? 'list' : ''}">${e.opts.map((o, i) => `<button class="opt" style="animation-delay:${80 + i * 60}ms" onclick="pickOpt(${i})"><span class="k">${i + 1}</span><span class="ov">${o}</span></button>`).join('')}</div>`;
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
const PRAISE = () => L(['Molt bé', 'Correcte', 'Ben fet', 'Exacte', 'Això mateix', 'Ben pensat'], ['Muy bien', 'Correcto', 'Bien hecho', 'Exacto', 'Eso es', 'Bien pensado']);
const OOPS = () => L(['No és aquesta', 'Encara no', 'Mirem-ho', 'Mirem-ho junts'], ['No es esa', 'Todavía no', 'Vamos a verlo', 'Veámoslo juntos']);
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
function skipPlace() { if (!LS) return; LS.res.push(false); LS.done++; SFX.tap(); nextEx(); }
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
  $$('.pad button').forEach(b => { if (!b.classList.contains('pk-ok')) b.disabled = true; });
  const foot = $('#foot'), fb = $('#fb'), chk = $('#chk');
  foot.classList.add(ok ? 'ok' : 'ko');
  if (ok) {
    LS.done++; LS.combo++; LS.maxCombo = Math.max(LS.maxCombo, LS.combo); SFX.ok(); sparkle(target); comboBanner(LS.combo);
    misEvent('answer'); misEvent('combo', LS.combo);
    if (e.gold) { LS.gold++; misEvent('gold'); floatTxt(target, '+5 XP', 'gain xp'); }
    const pf = $('.pfill'); pf.style.width = (LS.done / LS.total * 100) + '%'; pf.classList.remove('shine'); void pf.offsetWidth; pf.classList.add('shine');
    fb.innerHTML = `<div class="fbh">${icn('check')}${LS.combo >= 3 ? L(`${LS.combo} encerts seguits`, `${LS.combo} aciertos seguidos`) : pick(PRAISE())}</div>${(e.long || e.retry) && e.ex ? `<div class="exp"><span>${e.ex}</span></div>` : ''}`;
  } else {
    LS.miss++; LS.combo = 0; SFX.ko(); $('#lbody').classList.add('shake');
    const n = genEx(e.sk, e.L, LS.seen, LS.mix); n.retry = true; LS.queue.push(n);
    fb.innerHTML = `<div class="fbh">${icn('x')}${pick(OOPS())}</div><div class="ans">${L('Resposta correcta', 'Respuesta correcta')}: <b>${ansText(e)}</b></div>${e.ex ? `<div class="exp">${icn('bulb')}<span>${e.ex}</span></div>` : ''}`;
  }
  $('#buddy').innerHTML = meC(ok ? 'happy' : 'sad');
  const cb = $('#combo'); cb.innerHTML = `<i class="ci">${ICON.flame}</i><b>${LS.combo}</b>`; cb.classList.toggle('on', LS.combo >= 2); if (ok && LS.combo >= 2) { cb.classList.remove('pop'); void cb.offsetWidth; cb.classList.add('pop'); }
  chk.textContent = L('Continua', 'Continuar'); chk.disabled = false; chk.className = 'btn check ' + (ok ? 'okb' : 'kob');
  foot.scrollIntoView({ block: 'nearest' });
  saveLocal();
}
function quitRun() {
  if (LS && LS.mode === 'place') return ask(L('Vols saltar-te la prova de nivell? Començaràs pel principi del curs.', '¿Quieres saltarte la prueba de nivel? Empezarás por el principio del curso.'), L('Salta-la', 'Saltarla'), L('Continua', 'Seguir'), () => { LS.res = []; finishPlacement(true); });
  ask(L('Si surts ara, aquesta activitat no es desarà.', 'Si sales ahora, esta actividad no se guardará.'), L('Surt', 'Salir'), L('Continua', 'Seguir'), () => go('home'));
}

/* ---------- Final i recompenses ---------- */
const BADGES = [
  ['first', 'flag', 'Primer pas|Primer paso', 'Completa la teva primera lliçó|Completa tu primera lección', p => p.stats.lessons >= 1],
  ['perfect', 'check', 'Sense errors|Sin errores', 'Fes una lliçó sense cap error|Haz una lección sin ningún error', p => p.stats.perfect >= 1],
  ['perfect10', 'target', 'Punteria fina|Puntería fina', 'Fes 10 lliçons perfectes|Haz 10 lecciones perfectas', p => p.stats.perfect >= 10],
  ['combo10', 'bolt', 'Concentració|Concentración', 'Encerta 10 respostes seguides|Acierta 10 respuestas seguidas', p => p.stats.bestCombo >= 10],
  ['combo30', 'bolt', 'Trenta seguides|Treinta seguidas', 'Encerta 30 respostes seguides|Acierta 30 respuestas seguidas', p => p.stats.bestCombo >= 30],
  ['streak3', 'flame', 'Foc encès|Fuego encendido', 'Practica 3 dies seguits|Practica 3 días seguidos', p => p.best >= 3],
  ['streak7', 'flame', 'Setmana de foc|Semana de fuego', 'Practica 7 dies seguits|Practica 7 días seguidos', p => p.best >= 7],
  ['streak30', 'flame', 'Un mes seguit|Un mes seguido', 'Practica 30 dies seguits|Practica 30 días seguidos', p => p.best >= 30],
  ['streak100', 'trophy', 'Cent dies|Cien días', 'Practica 100 dies seguits|Practica 100 días seguidos', p => p.best >= 100],
  ['xp100', 'star', '100 XP', "Aconsegueix 100 punts d'experiència|Consigue 100 puntos de experiencia", p => p.xp >= 100],
  ['xp500', 'star', '500 XP', "Aconsegueix 500 punts d'experiència|Consigue 500 puntos de experiencia", p => p.xp >= 500],
  ['xp2000', 'star', '2.000 XP', "Aconsegueix 2.000 punts d'experiència|Consigue 2.000 puntos de experiencia", p => p.xp >= 2000],
  ['unit1', 'path', 'Primera unitat|Primera unidad', "Supera el repte d'una unitat|Supera el reto de una unidad", p => unitsDone(p) >= 1],
  ['unit5', 'compass', 'Exploració|Exploración', 'Supera 5 unitats|Supera 5 unidades', p => unitsDone(p) >= 5],
  ['course', 'cap', 'Curs complet|Curso completo', "Supera totes les unitats d'un curs|Supera todas las unidades de un curso", p => COURSES.some(c => c.units.every(u => udone(p, u)))],
  ['evo1', 'flask', 'Primera prova|Primera prueba', "Fes una prova d'evolució|Haz una prueba de evolución", p => p.tests.filter(t => t.kind === 'evo').length >= 1],
  ['evoUp', 'chart', 'Cap amunt|Hacia arriba', "Millora la nota en una prova d'evolució|Mejora la nota en una prueba de evolución", p => p.tests.some((t, i) => i && t.kind === 'evo' && t.pct > p.tests[i - 1].pct)],
  ['friends3', 'users', 'Bona colla|Buena pandilla', 'Aconsegueix 3 companys|Consigue 3 compañeros', p => p.owned.length >= 3],
  ['friends6', 'users', 'Tota la colla|Toda la pandilla', 'Aconsegueix els 6 companys|Consigue los 6 compañeros', p => p.owned.length >= 6],
  ['style', 'hat', 'Amb estil|Con estilo', 'Aconsegueix un accessori|Consigue un accesorio', p => p.accOwned.length >= 1],
  ['train5', 'dumbbell', 'Entrenament|Entrenamiento', 'Fes 5 entrenaments|Haz 5 entrenamientos', p => p.stats.trains >= 5],
  ['agile5', 'puzzle', 'Ment àgil|Mente ágil', "Juga 5 partides d'agilitat mental|Juega 5 partidas de agilidad mental", p => p.stats.games >= 5],
  ['sprint15', 'clock', 'Bon ritme|Buen ritmo', 'Fes 15 encerts en una contrarellotge|Haz 15 aciertos en una contrarreloj', p => (p.stats.bests.sprint || 0) >= 15],
  ['sprint30', 'clock', 'Ritme de rellotge|Ritmo de reloj', 'Fes 30 encerts en una contrarellotge|Haz 30 aciertos en una contrarreloj', p => (p.stats.bests.sprint || 0) >= 30],
  ['chain5', 'link', 'Cadena perfecta|Cadena perfecta', 'Encerta les 5 cadenes de càlcul|Acierta las 5 cadenas de cálculo', p => (p.stats.bests.chain || 0) >= 5],
  ['ans500', 'abacus', 'Calculadora humana|Calculadora humana', 'Respon 500 preguntes|Responde 500 preguntas', p => p.stats.answers >= 500]
];
function checkBadges() { const nw = BADGES.filter(b => !P.badges.includes(b[0]) && b[4](P)); nw.forEach(b => { P.badges.push(b[0]); P.gems += 10; }); return nw; }
function finishRun() {
  const R = { mode: LS.mode, ui: LS.ui, li: LS.li, acc: Math.round(100 * LS.total / (LS.total + LS.miss)), perfect: LS.miss === 0, stars: 0, chest: 0 };
  if (R.mode === 'reco') { R.xp = 12 + (R.perfect ? 4 : 0); R.gems = 6; P.stats.trains++; if (R.acc >= 75) { P.reco = null; R.recoDone = true; } }
  else if (R.mode === 'train') { R.xp = 8 + (R.perfect ? 4 : 0); R.gems = 3 + (R.perfect ? 2 : 0); P.stats.trains++; }
  else {
    R.xp = 10 + (R.perfect ? 5 : 0) + (R.mode === 'repte' ? 10 : 0); R.gems = 5 + (R.perfect ? 5 : 0);
    R.stars = R.perfect ? 3 : LS.miss <= 2 ? 2 : 1;
    const pr = prog(R.ui), first = !pr.stars[R.li];
    pr.stars[R.li] = Math.max(pr.stars[R.li], R.stars);
    if (R.mode === 'repte' && first) R.chest = ri(30, 50);
    P.stats.lessons++; if (R.perfect) P.stats.perfect++;
  }
  R.bonus = Math.floor(LS.maxCombo / 3) * 2 + LS.gold * 5; R.xp += R.bonus;
  if (R.mode === 'lesson' || R.mode === 'repte' || R.mode === 'reco') { misEvent('lesson'); R.pack = openPack(R.mode === 'repte' ? 2 : 1); }
  if (R.perfect && R.mode !== 'train') misEvent('perfect');
  if (R.mode === 'train' || R.mode === 'reco') misEvent('train');
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
  FLOW.back = R.mode === 'game' ? 'train' : 'home';
  if (R.streakUp) FLOW.push(scrStreak);
  if (R.srw.length) FLOW.push(() => scrStreakReward(R.srw));
  if (R.chest) FLOW.push(() => scrChest(R));
  if (R.lvUp) FLOW.push(() => scrLevel(R.lvUp));
  if (R.pack) FLOW.push(() => scrPack(R.pack));
  if (R.clv) FLOW.push(() => scrCharLevel(...R.clv));
  if (R.knight) FLOW.push(scrKnight);
  if (R.newB.length) FLOW.push(() => scrBadges(R.newB));
  flowNext();
}
function flowNext() { closeModal(); const f = FLOW.shift(); if (f) f(); else go(FLOW.back || 'home'); }
function countUp() { $$('[data-count]').forEach(el => { const to = +el.dataset.count, suf = el.dataset.suf || '', t0 = performance.now(); (function step(t) { const k = Math.min(1, (t - t0) / 800); el.textContent = Math.round(to * (1 - (1 - k) ** 3)) + suf; if (k < 1) requestAnimationFrame(step); })(t0); }); }
function scrResult(R) {
  const game = R.mode === 'game';
  const title = game ? tx(R.title) : R.mode === 'reco' ? L('Repàs fet', 'Repaso hecho') : R.perfect ? L('Lliçó sense errors', 'Lección sin errores') : R.mode === 'train' ? L('Entrenament fet', 'Entrenamiento hecho') : L('Lliçó feta', 'Lección hecha');
  const sub = game ? (R.record ? L('Nou rècord personal.', 'Nuevo récord personal.') : L(`El teu rècord: ${R.best}`, `Tu récord: ${R.best}`)) : R.mode === 'reco' && !R.recoDone ? L('Encara costa una mica. El repàs continua a la pantalla principal per quan hi vulguis tornar.', 'Todavía cuesta un poco. El repaso sigue en la pantalla principal para cuando quieras volver.') : R.perfect ? L('Totes les respostes a la primera.', 'Todas las respuestas a la primera.') : L('Les que has fallat han tornat al final i les has resolt.', 'Las que has fallado han vuelto al final y las has resuelto.');
  const third = game ? `<div class="rs acc"><span>${L('Punts', 'Puntos')}</span><b data-count="${R.score}">0</b></div>` : `<div class="rs acc"><span>${L('Precisió', 'Precisión')}</span><b data-count="${R.acc}" data-suf="%">0</b></div>`;
  app.innerHTML = `<div class="scr"><div class="cheer"><div class="saybubble">${cheerMsg(R)}</div><div class="rchar dance tapme">${meC('happy')}</div></div>
    <h1>${title}</h1><p class="sub">${sub}</p>
    ${R.stars ? `<div class="bigstars">${[1, 2, 3].map(i => `<i class="${i <= R.stars ? 'on' : ''}" style="animation-delay:${.25 + i * .22}s">${STAR}</i>`).join('')}</div>` : ''}
    ${R.bonus ? `<div class="bonus">${icn('flame')}${L('Punts extra', 'Puntos extra')}: <b>+${R.bonus} XP</b></div>` : ''}
    <div class="rstats"><div class="rs xp"><span>XP</span><b data-count="${R.xp}">0</b></div><div class="rs gem"><span>${L('Cristalls', 'Cristales')}</span><b data-count="${R.gems}">0</b></div>${third}</div>
    <button class="btn big" onclick="flowNext()">${L('Continua', 'Continuar')}</button></div>`;
  countUp(); SFX.win(); if (R.perfect || R.record) confetti(60);
}
function scrStreak() {
  const DOW = L(['dl', 'dt', 'dc', 'dj', 'dv', 'ds', 'dg'], ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do']), now = new Date(), wd = (now.getDay() + 6) % 7, days = [];
  for (let i = 0; i < 7; i++) { const d = new Date(now); d.setDate(now.getDate() - wd + i); const k = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; days.push(`<div class="wd ${P.days.includes(k) ? 'on' : ''} ${i === wd ? 'today' : ''}" style="animation-delay:${i * 70}ms"><span>${DOW[i]}</span><i>${P.days.includes(k) ? ICON.flame : ''}</i></div>`); }
  const next = SRW.find(r => !P.srw.includes(r.d));
  app.innerHTML = `<div class="scr"><div class="flame">${ICON.flame}</div><div class="snum" data-count="${P.streak}">0</div>
    <h1>${P.streak === 1 ? L('Primer dia de ratxa', 'Primer día de racha') : L('Dies seguits practicant', 'Días seguidos practicando')}</h1>
    <p class="sub">${next ? L(`Als ${next.d} dies: ${tx(next.txt)}.`, `A los ${next.d} días: ${tx(next.txt)}.`) : L('Una mica cada dia fa molta feina.', 'Un poco cada día cunde mucho.')}</p>
    <div class="week">${days.join('')}</div><button class="btn big orange" onclick="flowNext()">${L('Continua', 'Continuar')}</button></div>`;
  countUp(); SFX.coin();
}
function scrStreakReward(list) {
  const r = list[list.length - 1];
  const pic = r.char ? charSVG(r.char, 'happy') : r.acc ? charSVG(P.companion, 'happy', { ...P.acc, [ACC[r.acc].slot]: r.acc }, '', clvOf(P.companion)) : `<div class="bigicon">${ICON[r.icon]}</div>`;
  app.innerHTML = `<div class="scr"><div class="ribbon">${L('Premi de ratxa', 'Premio de racha')} · ${r.d} ${L('dies', 'días')}</div><div class="rchar big tapme">${pic}</div>
    <h1>${r.char ? L(`${tx(CH[r.char].name)} s'uneix a la colla`, `${tx(CH[r.char].name)} se une a la pandilla`) : L('Premi aconseguit', 'Premio conseguido')}</h1><p class="sub">${list.map(x => tx(x.txt)).join('<br>')}</p>
    ${r.acc ? `<button class="btn big gold" onclick="P.acc['${ACC[r.acc].slot}']='${r.acc}';save();flowNext()">${L("Posa-t'ho", 'Póntelo')}</button>` : ''}
    ${r.char ? `<button class="btn big gold" onclick="P.companion='${r.char}';save();flowNext()">${L('Vull anar amb ', 'Quiero ir con ')}${tx(CH[r.char].name)}</button>` : ''}
    <button class="btn big ${r.acc || r.char ? 'ghost' : ''}" onclick="flowNext()">${L('Continua', 'Continuar')}</button></div>`;
  SFX.win(); confetti(80);
}
const chestSVG = () => `<svg viewBox="0 0 160 140" class="chestsvg"><ellipse cx="80" cy="130" rx="60" ry="7" fill="#000" opacity=".12"/>
  <rect x="22" y="64" width="116" height="62" rx="10" fill="#B86B2E"/><rect x="22" y="64" width="116" height="12" fill="#9A5522"/><rect x="28" y="84" width="104" height="4" rx="2" fill="rgba(255,255,255,.15)"/>
  <rect x="38" y="64" width="12" height="62" fill="url(#gGold)"/><rect x="110" y="64" width="12" height="62" fill="url(#gGold)"/>
  <g class="lid"><path d="M22 68 Q22 28 80 28 Q138 28 138 68Z" fill="#D07D3A"/><path d="M34 50 Q40 34 70 32" stroke="rgba(255,255,255,.3)" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M38 34 Q44 31 50 30 L50 68 L38 68Z" fill="url(#gGold)"/><path d="M110 30 Q116 31 122 34 L122 68 L110 68Z" fill="url(#gGold)"/></g>
  <rect x="69" y="58" width="22" height="26" rx="5" fill="url(#gGold)" stroke="#E0A300" stroke-width="3"/><circle cx="80" cy="69" r="3.5" fill="#8A5A00"/></svg>`;
function scrChest(R) {
  const nx = UNITS_()[R.ui + 1];
  app.innerHTML = `<div class="scr"><h1>${L('Repte superat', 'Reto superado')}</h1><p class="sub">${L('Toca el cofre per obrir-lo', 'Toca el cofre para abrirlo')}</p>
    <button class="chest wiggle" id="chest" onclick="openChest()" aria-label="${L('Obre el cofre', 'Abrir el cofre')}">${chestSVG()}</button>
    <div id="chestOut" class="chestout" hidden><div class="loot">+${R.chest} <i class="ci big">${ICON.gem}</i></div>
    <p>${nx ? L(`Nova unitat desbloquejada: <b>${tx(nx.title)}</b>`, `Nueva unidad desbloqueada: <b>${tx(nx.title)}</b>`) : L(`Has acabat ${tx(CUR().long)}.`, `Has terminado ${tx(CUR().long)}.`)}</p>
    <button class="btn big" onclick="flowNext()">${L('Continua', 'Continuar')}</button></div></div>`;
}
function openChest() { const c = $('#chest'); if (c.classList.contains('open')) return; c.classList.remove('wiggle'); c.classList.add('open'); SFX.win(); confetti(80); setTimeout(() => { $('#chestOut').hidden = false; }, 450); }
function scrLevel(l) {
  app.innerHTML = `<div class="scr"><div class="lvbadge">${l}</div><h1>${L(`Has pujat al nivell ${l}`, `Has subido al nivel ${l}`)}</h1><p class="sub">${L('Per pujar de nivell, 10 cristalls.', 'Por subir de nivel, 10 cristales.')}</p><div class="rchar tapme">${meC('happy')}</div><button class="btn big" onclick="flowNext()">${L('Continua', 'Continuar')}</button></div>`;
  SFX.win();
}
function scrBadges(list) {
  app.innerHTML = `<div class="scr"><h1>${list.length > 1 ? L('Medalles noves', 'Medallas nuevas') : L('Medalla nova', 'Medalla nueva')}</h1><p class="sub">${L('Cada medalla et dona +10 cristalls', 'Cada medalla te da +10 cristales')}</p>
    <div class="newb">${list.map((b, i) => `<div class="badge on pop" style="animation-delay:${i * 150}ms"><div class="bi">${ICON[b[1]]}</div><b>${tx(b[2])}</b><span>${tx(b[3])}</span></div>`).join('')}</div>
    <button class="btn big" onclick="flowNext()">${L('Continua', 'Continuar')}</button></div>`;
  SFX.coin();
}

function cheerMsg(R) {
  const n = esc(P.name), nm = tx(CH[P.companion].name);
  const good = L([`Bona feina, ${n}.`, `${n}, aquesta lliçó ja la tens.`, `Molt bé, ${n}. Anem fent camí.`, `Ho has fet amb calma i t'ha sortit bé.`, `${n}, quan vulguis, fem la següent.`],
    [`Buen trabajo, ${n}.`, `${n}, esta lección ya la tienes.`, `Muy bien, ${n}. Vamos haciendo camino.`, `Lo has hecho con calma y te ha salido bien.`, `${n}, cuando quieras, hacemos la siguiente.`]);
  const perfect = L([`Cap error, ${n}. Molt ben fet.`, `${n}, totes a la primera.`], [`Ningún error, ${n}. Muy bien hecho.`, `${n}, todas a la primera.`]);
  const hard = L([`Aquesta ha costat, ${n}, però l'has acabat.`, `${n}, els errors ens diuen què cal repassar. Ho tornarem a veure.`], [`Esta ha costado, ${n}, pero la has terminado.`, `${n}, los errores nos dicen qué hay que repasar. Lo volveremos a ver.`]);
  const game = L([`Bona partida, ${n}.`, `Ben jugat, ${n}. Vols provar de superar-te?`], [`Buena partida, ${n}.`, `Bien jugado, ${n}. ¿Quieres intentar superarte?`]);
  const list = R.mode === 'game' ? game : R.perfect ? perfect : (R.acc != null && R.acc < 60) ? hard : good;
  return `<b>${nm}:</b> ${pick(list)}`;
}

/* ---------- Recomanacions de la Xifra (personatge 'cavaller') ---------- */
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
  return `<div class="reco ${inResult ? 'inres' : ''}"><div class="rhead"><div class="rknight tapme">${charSVG('cavaller', 'happy', null, '', 1)}</div><div><b>${L(`La ${tx(CH.cavaller.name)} et proposa un repàs`, `${tx(CH.cavaller.name)} te propone un repaso`)}</b><small>${r.source === 'evo' ? L("A partir de la teva prova d'evolució", 'A partir de tu prueba de evolución') : r.source === 'place' ? L('A partir de la prova de nivell', 'A partir de la prueba de nivel') : L('Per reforçar', 'Para reforzar')}</small></div></div>
    <ul>${r.items.map(it => `<li><span class="rdot" style="background:${us[it.ui].color}"></span>${tx(us[it.ui].lessons[it.li].t)} <small>· ${tx(us[it.ui].title)}</small></li>`).join('')}</ul>
    <button class="btn" onclick="FLOW=[];startReco()">${L('Fes el repàs', 'Hacer el repaso')}</button></div>`;
}
function startReco() {
  const r = P.reco; if (!r) return;
  const plan = []; for (let i = 0; i < 8; i++) { const it = r.items[i % r.items.length]; plan.push([it.sk, it.L]); }
  startRun({ mode: 'reco', ui: null, li: null, plan: shuffle(plan), color: '#2C4A9A' });
}
function scrCharLevel(id, lv) {
  app.innerHTML = `<div class="scr"><div class="ribbon">${L('Nivell del company', 'Nivel del compañero')}</div><div class="rchar big tapme levelup">${charSVG(id, 'happy', P.acc, '', lv)}</div>
    <h1>${L(`${tx(CH[id].name)} ara és de nivell ${lv}`, `${tx(CH[id].name)} ahora es de nivel ${lv}`)}</h1>
    <p class="sub">${lv >= 5 ? L('És el nivell més alt.', 'Es el nivel más alto.') : lv >= 3 ? L("Ara porta una aura de colors. Com més practiqueu junts, més creix.", 'Ahora lleva un aura de colores. Cuanto más practicáis juntos, más crece.') : L('Com més practiqueu junts, més creix.', 'Cuanto más practicáis juntos, más crece.')}</p>
    <button class="btn big" onclick="flowNext()">${L('Continua', 'Continuar')}</button></div>`;
  SFX.win();
}
function scrKnight() {
  const nm = tx(CH.cavaller.name);
  app.innerHTML = `<div class="scr"><div class="ribbon">${L('Nova companya', 'Nueva compañera')}</div><div class="rchar big tapme">${charSVG('cavaller', 'happy')}</div>
    <h1>${L(`La ${nm} s'uneix a la colla`, `${nm} se une a la pandilla`)}</h1><p class="sub">«${tx(CH.cavaller.hello)}»</p>
    <button class="btn big gold" onclick="P.companion='cavaller';save();flowNext()">${L(`Vull anar amb la ${nm}`, `Quiero ir con ${nm}`)}</button>
    <button class="btn big ghost" onclick="flowNext()">${L('Continua', 'Continuar')}</button></div>`;
  SFX.win(); confetti(80);
}

/* ---------- Tema de l'escola i currículum ---------- */
function schoolCard() {
  const sc = P.school; if (!sc || sc.course !== P.course) return '';
  const u = UNITS_()[sc.ui]; if (!u) return '';
  return `<button class="testcard school" onclick="startSchool()"><span class="tci">${ICON.book}</span><span><b>${L("A l'escola fas:", 'En el cole das:')} ${tx(u.title)}</b><small>${L("10 preguntes d'aquest tema per practicar-lo.", '10 preguntas de este tema para practicarlo.')}</small></span><span class="go">${ICON.right}</span></button>`;
}
function pickSchool() {
  modal(`<div class="sheet"><h3>${L("Què fas ara a l'escola?", '¿Qué estás dando en el cole?')}</h3><p>${L(`Tria el tema de ${tx(CUR().long)} que feu a classe. Te'l posarem a la pantalla principal per practicar-lo.`, `Elige el tema de ${tx(CUR().long)} que dais en clase. Te lo pondremos en la pantalla principal para practicarlo.`)}</p>
    <div class="slist">${UNITS_().map((u, i) => `<button class="sitem ${P.school && P.school.course === P.course && P.school.ui === i ? 'on' : ''}" style="--uc:${u.color}" onclick="setSchool(${i})"><span class="sdot"></span><span><b>${tx(u.title)}</b><small>${unitSents(u).map(k => tx(SENT[k])).join(' · ')}</small></span></button>`).join('')}</div></div>`);
}
function setSchool(i) { P.school = { course: P.course, ui: i, date: today() }; save(); closeModal(); startSchool(); }
function startSchool() {
  const sc = P.school, u = UNITS_()[sc.ui], opts = u.lessons.map(l => l.sk.map(s => [s, l.L])).flat(), plan = [];
  for (let i = 0; i < 10; i++) plan.push(pick(opts));
  startRun({ mode: 'train', ui: sc.ui, li: null, plan, color: u.color });
}
function curriculumBox() {
  const s = P.stats, rows = Object.keys(SENT).map(k => {
    const sks = new Set(); UNITS_().forEach(u => u.lessons.forEach(l => l.sk.forEach(x => { if (skillSent(x) === k) sks.add(x); })));
    if (!sks.size) return '';
    let c = 0, t = 0; sks.forEach(x => { const v = s.sk[x]; if (v) { c += v[0]; t += v[1]; } });
    const pc = t ? Math.round(100 * c / t) : 0, lvl = !t ? L('Encara no', 'Aún no') : pc >= 85 ? L('Ho domines', 'Lo dominas') : pc >= 65 ? L('Vas bé', 'Vas bien') : L('A reforçar', 'A reforzar');
    return `<div class="crow"><div class="cn"><span>${ICON[SICON[k]]}</span><b>${tx(SENT[k])}</b><small class="${!t ? '' : pc >= 85 ? 'up' : pc >= 65 ? '' : 'down'}">${lvl}${t ? ' · ' + pc + '%' : ''}</small></div><div class="cbar"><div style="width:${pc}%;background:${pc >= 85 ? 'var(--ok)' : pc >= 65 ? 'var(--sun)' : t ? 'var(--ko)' : 'var(--sunk)'}"></div></div></div>`;
  }).join('');
  return `<h2 class="h2">${icn('book')}${L("Currículum de l'escola", 'Currículo del cole')}</h2><p class="lead sm">${L('Els continguts segueixen el currículum oficial de matemàtiques de primària de Catalunya (Decret 175/2022).', 'Los contenidos siguen el currículo oficial de matemáticas de primaria de Cataluña (Decreto 175/2022).')}</p><div class="cbox">${rows}</div>`;
}

/* ---------- Prova d'evolució ---------- */
function startEvolution() {
  const us = UNITS_(); let top = 0;
  us.forEach((u, i) => { if (unitOpen(i)) top = i; });
  const units = us.slice(0, Math.min(us.length, top + 2)), meta = [];
  for (let i = 0; i < 12; i++) { const ui = i % units.length, u = units[ui], l = u.lessons[i < 6 ? 2 : 4]; meta.push({ sk: pick(l.sk), L: l.L, ui }); }
  startRun({ mode: 'evo', plan: meta.map(m => [m.sk, m.L]), meta, color: '#1F8F87' });
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
  [0, 50, 100].forEach(v => { const y = y0 - v; s += `<line x1="${x0}" y1="${y}" x2="${W - 8}" y2="${y}" stroke="#E6DFD0" stroke-width="1"/><text x="${x0 - 6}" y="${y + 4}" text-anchor="end" font-size="10" font-weight="400" fill="#7D8296" font-family="Lexend,sans-serif">${v}%</text>`; });
  if (pts.length > 1) s += `<polyline points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="#1F8F87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="drawline"/>`;
  pts.forEach((p, i) => { s += `<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="#FFFDF8" stroke="#1F8F87" stroke-width="2.5" class="dot" style="animation-delay:${i * 120}ms"/><text x="${p[0]}" y="${p[1] - 11}" text-anchor="middle" font-size="11" font-weight="600" fill="#17706A" font-family="Lexend,sans-serif">${t[i].pct}%</text><text x="${p[0]}" y="${H - 8}" text-anchor="middle" font-size="9.5" font-weight="400" fill="#7D8296" font-family="Lexend,sans-serif">${t[i].date.slice(8, 10)}/${t[i].date.slice(5, 7)}</text>`; });
  return s + '</svg>';
}
function scrEvolution(R) {
  const diff = R.prev == null ? null : R.pct - R.prev;
  const msg = diff == null ? L('Aquest és el primer punt de la teva gràfica.', 'Este es el primer punto de tu gráfica.') : diff > 0 ? L(`Has millorat <b>${diff} punts</b> des de l'última prova.`, `Has mejorado <b>${diff} puntos</b> desde la última prueba.`) : diff === 0 ? L("Igual que l'última vegada. Continuem practicant.", 'Igual que la última vez. Seguimos practicando.') : L('Aquesta vegada ha costat més. Repassar els temes que han fallat ajuda molt.', 'Esta vez ha costado más. Repasar los temas que han fallado ayuda mucho.');
  const us = UNITS_();
  app.innerHTML = `<div class="scr"><div class="rchar tapme">${meC(diff == null || diff >= 0 ? 'happy' : 'think')}</div>
    <h1>${L("Prova d'evolució", 'Prueba de evolución')}: ${R.pct}%</h1><p class="sub">${msg}</p>
    <div class="evobox">${evoChart(P.tests.filter(t => t.course === P.course))}</div>
    <div class="plres">${Object.entries(R.byUnit).map(([ui, [c, t]]) => `<div class="${c === t ? 'ok' : ''}"><span>${c === t ? ICON.check : c ? '½' : '·'}</span>${tx(us[ui].title)} <small class="mut">${c}/${t}</small></div>`).join('')}</div>
    ${recoBox(true)}
    <button class="btn big" onclick="flowNext()">${L('Continua', 'Continuar')}</button></div>`;
  countUp(); SFX.win(); if (diff > 0) confetti(60);
}

/* ---------- Entrena i agilitat mental ---------- */
const GAMES = () => [
  ['sprint', ICON.clock, L('Contrarellotge', 'Contrarreloj'), L('60 segons: encerta tants càlculs com puguis.', '60 segundos: acierta tantos cálculos como puedas.')],
  ['flash', ICON.bolt, L('Llampec', 'Relámpago'), L('15 càlculs, 6 segons per a cadascun. Si respons abans, sumes més punts.', '15 cálculos, 6 segundos para cada uno. Si respondes antes, sumas más puntos.')],
  ['chain', ICON.link, L('Càlcul en cadena', 'Cálculo en cadena'), L('Els números apareixen d\'un en un: calcula de memòria fins al final.', 'Los números aparecen de uno en uno: calcula de memoria hasta el final.')]
];
function renderTrain() {
  const units = UNITS_().map((u, i) => ({ u, i })).filter(({ i }) => unitOpen(i) && trainPool(i).length), B = P.stats.bests;
  app.innerHTML = shell(`<h1 class="ph1">${L('Entrena', 'Entrena')}</h1><p class="lead">${L(`Practica el que ja has après de ${tx(CUR().long)} i posa a prova la teva agilitat mental.`, `Practica lo que ya has aprendido de ${tx(CUR().long)} y pon a prueba tu agilidad mental.`)}</p>
    <button class="tcard" onclick="startTrain()"><span class="ti">${ICON.repeat}</span><span><b>${L('Entrenament personal', 'Entrenamiento personal')}</b><small>${L('8 exercicis triats entre el que et costa més.', '8 ejercicios elegidos entre lo que más te cuesta.')}</small></span></button>
    ${testInfo().due ? `<button class="tcard evo" onclick="startEvolution()"><span class="ti">${ICON.chart}</span><span><b>${L("Prova d'evolució", 'Prueba de evolución')}</b><small>${L('Ja la pots fer. Veuràs com has avançat.', 'Ya puedes hacerla. Verás cómo has avanzado.')}</small></span></button>` : ''}
    <button class="tcard school" onclick="pickSchool()"><span class="ti">${ICON.book}</span><span><b>${L("Què fas ara a l'escola?", '¿Qué estás dando en el cole?')}</b><small>${L("Tria el tema que feu a classe i practica'l aquí.", 'Elige el tema que dais en clase y practícalo aquí.')}</small></span></button>
    <h2 class="h2">${icn('bolt')}${L('Agilitat mental', 'Agilidad mental')}</h2>
    <div class="ggrid">${GAMES().map(([id, gic, t, d]) => `<button class="gcard" onclick="startGame('${id}')"><span class="gi">${gic}</span><b>${t}</b><small>${d}</small><span class="grec" title="${L('Rècord', 'Récord')}">${icn('trophy')}${B[id] || 0}</span></button>`).join('')}</div>
    <h2 class="h2">${L('Repassa una unitat', 'Repasa una unidad')}</h2>
    ${units.length ? units.map(({ u, i }) => `<button class="ucard" style="--uc:${u.color}" onclick="startTrain(${i})"><span class="uic">${charSVG(u.guide, 'idle')}</span><span><b>${tx(u.title)}</b><small>${L('Unitat', 'Unidad')} ${i + 1}</small></span><span class="go">${ICON.right}</span></button>`).join('') : `<p class="empty">${L('Quan acabis la primera lliçó del camí, aquí podràs repassar-la.', 'Cuando acabes la primera lección del camino, aquí podrás repasarla.')}</p>`}`, 'train');
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
  app.innerHTML = `<div class="lesson game"><div class="l-top"><button class="xbtn" onclick="go('train')" aria-label="${L('Surt', 'Salir')}">${ICON.x}</button>${extraTop}</div><div class="l-body">${body}</div></div>`;
}
function startSprint() {
  SP = { t0: Date.now(), dur: 60000, score: 0, input: '', busy: false };
  gameShell('sprint', `<div class="pbar time"><div class="pfill" id="tbar" style="width:100%"></div></div><div class="combo on">${icn('check')}<b id="sc">0</b></div>`, `<div class="sq" id="sq"></div><div class="inbox" id="inbox"><span id="inval" class="ph">?</span></div>${padHTML('skey')}`);
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
function endSprint() { const score = SP.score; stopSprint(); endGame('sprint', score, 'Temps esgotat|Se acabó el tiempo'); }
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
    gameShell(id, `<div class="pbar"><div class="pfill" id="gbar" style="width:0%"></div></div><div class="combo on">${icn('bolt')}<b id="sc">0</b></div>`,
      `<div class="ring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" class="rbg"/><circle cx="60" cy="60" r="52" class="rfg" id="rfg"/></svg><div class="sq" id="sq"></div></div><div class="inbox" id="inbox"><span id="inval" class="ph">?</span></div>${padHTML('akey')}`);
    return nextFlash();
  }
  AG.total = 5;
  gameShell(id, `<div class="pbar"><div class="pfill" id="gbar" style="width:0%"></div></div><div class="combo on">${icn('link')}<b id="sc">0</b></div>`, `<div id="chainBox"></div>`);
  nextChain();
}
function stopAgility() { if (AG) { clearInterval(AG.timer); clearTimeout(AG.to); } AG = null; }
function nextFlash() {
  if (!AG) return;
  if (AG.round >= AG.total) { const s = AG.score; stopAgility(); return endGame('flash', s, 'Llampec acabat|Relámpago terminado'); }
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
  if (AG.round >= AG.total) { const s = AG.score; stopAgility(); return endGame('chain', s, 'Cadenes acabades|Cadenas terminadas'); }
  AG.round++; AG.cur = chainGen(); AG.input = ''; AG.busy = true;
  $('#gbar').style.width = (AG.round - 1) / AG.total * 100 + '%';
  const box = $('#chainBox'), speed = CUR().n <= 2 ? 1700 : CUR().n <= 4 ? 1450 : 1250;
  box.innerHTML = `<div class="chainhead">${L('Cadena', 'Cadena')} ${AG.round}/${AG.total} · ${L('calcula de memòria', 'calcula de memoria')}</div><div class="chainstage"><div class="chainnum" id="cnum"></div></div><div class="chaindots">${AG.cur.seq.map(() => '<i></i>').join('')}</div>`;
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
    const btn = sel ? `<button class="btn sm ghost" disabled>${L('Amb tu', 'Contigo')}</button>` : own ? `<button class="btn sm" onclick="choose('${id}')">${L('Tria', 'Elegir')}</button>` : c.price == null ? `<button class="btn sm fire" disabled>${icn('lock')}${tx(c.unlock)}</button>` : `<button class="btn sm gold" ${P.gems < c.price ? 'disabled' : ''} onclick="buyChar('${id}')"><i class="ci">${ICON.gem}</i>${c.price}</button>`;
    return `<div class="item ${sel ? 'sel' : ''} ${own ? '' : 'nown'} ${c.price == null ? 'excl' : ''}"><div class="ipic tapme">${charSVG(id, sel ? 'happy' : 'idle', own ? P.acc : null, '', own ? clvOf(id) : 1)}</div><div class="iname">${tx(c.name)}</div>${own ? clvBar(id) : ''}<div class="idesc">${tx(c.desc)}</div>${btn}</div>`;
  }).join('');
  const acc = Object.keys(ACC).map(id => {
    const a = ACC[id], own = P.accOwned.includes(id), on = P.acc[a.slot] === id;
    const btn = own ? `<button class="btn sm ${on ? 'ghost' : ''}" onclick="toggleAcc('${id}')">${on ? L('Treu', 'Quitar') : L('Posa', 'Poner')}</button>` : a.price == null ? `<button class="btn sm fire" disabled>${icn('lock')}${tx(a.unlock)}</button>` : `<button class="btn sm gold" ${P.gems < a.price ? 'disabled' : ''} onclick="buyAcc('${id}')"><i class="ci">${ICON.gem}</i>${a.price}</button>`;
    return `<div class="item ${on ? 'sel' : ''} ${a.price == null ? 'excl' : ''}"><div class="ipic">${charSVG(P.companion, 'idle', { [a.slot]: id }, '', clvOf(P.companion))}</div><div class="iname">${tx(a.name)}</div>${btn}</div>`;
  }).join('');
  app.innerHTML = shell(`<h1 class="ph1">${L('Botiga', 'Tienda')}</h1><p class="lead">${L("Els cristalls que guanyes amb les lliçons es poden canviar per companys i accessoris. Els que tenen un cadenat s'aconsegueixen amb les ratxes o superant unitats.", 'Los cristales que ganas con las lecciones se pueden cambiar por compañeros y accesorios. Los que tienen un candado se consiguen con las rachas o superando unidades.')}</p>
    <h2 class="h2">${L('Companys', 'Compañeros')}</h2><div class="grid">${comp}</div>
    <h2 class="h2">${L('Accessoris', 'Accesorios')} <small>${L('per al teu company', 'para tu compañero')}</small></h2><div class="grid">${acc}</div>
    <h2 class="h2">${L('Ajudes', 'Ayudas')}</h2><div class="item wide"><div class="big-emoji">${ICON.shield}</div><div><div class="iname">${L('Protector de ratxa', 'Protector de racha')}</div><div class="idesc">${L(`Si un dia no pots practicar, la ratxa no s'apaga. En tens ${P.freeze} de 2.`, `Si un día no puedes practicar, la racha no se apaga. Tienes ${P.freeze} de 2.`)}</div></div>
    <button class="btn sm gold" ${P.gems < 50 || P.freeze >= 2 ? 'disabled' : ''} onclick="buyFreeze()"><i class="ci">${ICON.gem}</i>50</button></div>`, 'shop');
}
function buyChar(id) {
  const c = CH[id]; if (c.price == null || P.gems < c.price || P.owned.includes(id)) return;
  P.gems -= c.price; P.owned.push(id); P.companion = id;
  const nb = checkBadges(); save(); SFX.coin(); confetti(50); renderShop();
  modal(`<div class="sheet card cent"><div class="mchar tapme">${charSVG(id, 'happy', P.acc)}</div><h3>${L(`${tx(c.name)} s'uneix a la colla`, `${tx(c.name)} se une a la pandilla`)}</h3><p>«${tx(c.hello)}»</p><button class="btn big" onclick="closeModal()">${L("D'acord", 'De acuerdo')}</button></div>`, true);
  nb.forEach(b => toast(`${icn(b[1])}${L('Medalla nova', 'Medalla nueva')}: <b>${tx(b[2])}</b> (+10)`));
}
function choose(id) { P.companion = id; save(); SFX.tap(); renderShop(); }
function buyAcc(id) {
  const a = ACC[id]; if (a.price == null || P.gems < a.price || P.accOwned.includes(id)) return;
  P.gems -= a.price; P.accOwned.push(id); P.acc[a.slot] = id;
  const nb = checkBadges(); save(); SFX.coin(); renderShop();
  toast(`${icn('check')}${L('Ja és teu', 'Ya es tuyo')}: ${tx(a.name)}`); nb.forEach(b => setTimeout(() => toast(`${icn(b[1])}${L('Medalla nova', 'Medalla nueva')}: <b>${tx(b[2])}</b> (+10)`), 900));
}
function toggleAcc(id) { const s = ACC[id].slot; if (P.acc[s] === id) delete P.acc[s]; else P.acc[s] = id; save(); SFX.tap(); renderShop(); }
function buyFreeze() { if (P.gems < 50 || P.freeze >= 2) return; P.gems -= 50; P.freeze++; save(); SFX.coin(); renderShop(); toast(icn('shield') + L('Protector de ratxa a punt.', 'Protector de racha listo.')); }

/* ---------- Medalles ---------- */
function renderBadges(tabs = '') {
  const got = BADGES.filter(b => P.badges.includes(b[0])).length;
  app.innerHTML = shell(`<h1 class="ph1">${L('La meva col·lecció', 'Mi colección')}</h1>${tabs}<p class="lead">${L(`N'has aconseguit <b>${got}</b> de ${BADGES.length}. Cada una val +10 cristalls.`, `Has conseguido <b>${got}</b> de ${BADGES.length}. Cada una vale +10 cristales.`)}</p>
    <h2 class="h2">${L('Premis de ratxa', 'Premios de racha')}</h2><div class="bgrid">${SRW.map(r => { const on = P.srw.includes(r.d); return `<div class="badge ${on ? 'on fire' : ''}"><div class="bi">${on ? ICON[r.icon] : ICON.lock}</div><b>${r.d} ${L('dies seguits', 'días seguidos')}</b><span>${tx(r.txt)}</span></div>`; }).join('')}</div>
    <h2 class="h2">${L('Medalles', 'Medallas')}</h2><div class="bgrid">${BADGES.map(b => { const on = P.badges.includes(b[0]); return `<div class="badge ${on ? 'on' : ''}"><div class="bi">${on ? ICON[b[1]] : ICON.lock}</div><b>${tx(b[2])}</b><span>${tx(b[3])}</span></div>`; }).join('')}</div>`, 'album');
}

/* ---------- Perfil ---------- */
const FEEL = { love: ["M'encanten", 'Me encantan', 'face_love'], good: ['Em van bé', 'Me van bien', 'face_good'], meh: ['Normal', 'Normal', 'face_meh'], hard: ['Em costen', 'Me cuestan', 'face_hard'] };
const LIKE = { calc: ['Calcular', 'Calcular', 'calc'], logic: ['Enigmes i lògica', 'Enigmas y lógica', 'puzzle'], geo: ['Formes i mesures', 'Formas y medidas', 'shapes'], prob: ['Problemes', 'Problemas', 'search'] };
function renderProfile() {
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
    <h2 class="h2">${icn('trophy')}${L('El que has fet', 'Lo que has hecho')}</h2>
    <div class="sgrid">
      <div class="st"><b>${icn('flame')}${streakNow()}</b><span>${L('ratxa actual', 'racha actual')}</span></div><div class="st"><b>${icn('trophy')}${P.best}</b><span>${L('millor ratxa', 'mejor racha')}</span></div>
      <div class="st"><b>${icn('book')}${s.lessons}</b><span>${L('lliçons', 'lecciones')}</span></div><div class="st"><b>${icn('target')}${acc}%</b><span>${L("d'encerts", 'de aciertos')}</span></div>
      <div class="st"><b>${icn('check')}${s.perfect}</b><span>${L('lliçons sense errors', 'lecciones sin errores')}</span></div><div class="st"><b>${icn('bolt')}${s.bestCombo}</b><span>${L('encerts seguits (rècord)', 'aciertos seguidos (récord)')}</span></div>
      <div class="st"><b>${icn('medal')}${myB.length}/${BADGES.length}</b><span>${L('medalles', 'medallas')}</span></div><div class="st"><b>${icn('path')}${unitsDone(P)}</b><span>${L('unitats superades', 'unidades superadas')}</span></div></div>
    ${myB.length || mySR.length ? `<div class="mylogros">${[...mySR.map(r => `<span class="lg fire" title="${tx(r.txt)}">${ICON[r.icon]}</span>`), ...myB.map(x => `<span class="lg" title="${tx(x[2])}">${ICON[x[1]]}</span>`)].join('')}<button class="lgmore" onclick="go('badges')">${L('Veure-les totes', 'Verlas todas')}${icn('right')}</button></div>` : `<p class="empty">${L('Encara no tens medalles. La primera arriba quan acabes una lliçó.', 'Aún no tienes medallas. La primera llega cuando terminas una lección.')}</p>`}
    <div class="gbests">${GAMES().map(([id, gic, t]) => `<div><span>${gic}</span><b>${s.bests[id] || 0}</b><small>${t}</small></div>`).join('')}</div>
    <h2 class="h2">${icn('chart')}${L('La meva evolució', 'Mi evolución')}</h2>
    <div class="evobox">${evo.length ? evoChart(evo) : `<p class="empty">${L("Fes la teva primera prova d'evolució per veure la gràfica.", 'Haz tu primera prueba de evolución para ver la gráfica.')}</p>`}
      ${ti.due ? `<button class="btn big" onclick="startEvolution()">${L("Fes la prova d'evolució", 'Hacer la prueba de evolución')}</button>` : `<p class="mut c">${L(`Propera prova d'evolució d'aquí a <b>${ti.left} ${dies(ti.left)}</b>.`, `Próxima prueba de evolución dentro de <b>${ti.left} ${dies(ti.left)}</b>.`)}</p>`}</div>
    ${curriculumBox()}
    <h2 class="h2">${L('Progrés a ', 'Progreso en ')}${tx(CUR().long)}</h2><div class="urows">${rows}</div>
    <h2 class="h2">${icn('key')}${L('El meu compte', 'Mi cuenta')}</h2>
    <div class="codecard"><div>${P.username ? `<small>${L('Usuari', 'Usuario')}</small><b>${esc(P.username)}</b>` : `<small>${L('El teu codi secret', 'Tu código secreto')}</small><b>${P.code || '…'}</b>`}<span id="cloud">${cloudTxt()}</span></div>
      <div class="ctip">${P.username ? L(`Entra des de qualsevol dispositiu amb el teu usuari i contrasenya. Codi de reserva: <b>${P.code || '…'}</b>`, `Entra desde cualquier dispositivo con tu usuario y contraseña. Código de reserva: <b>${P.code || '…'}</b>`) : L("Apunta'l en un lloc segur, o crea un usuari i una contrasenya, que es recorden més fàcilment.", 'Apúntalo en un sitio seguro, o crea un usuario y una contraseña, que se recuerdan más fácilmente.')}</div>
      <button class="btn sm gold" onclick="accountModal()">${P.username ? L('Canvia la contrasenya', 'Cambiar la contraseña') : L('Crea usuari i contrasenya', 'Crear usuario y contraseña')}</button></div>
    ${sv ? `<h2 class="h2">${L("Prova d'inici", 'Prueba inicial')}</h2><div class="survey"><div><span>${L('Curs', 'Curso')}</span><b>${esc(sv.curs)}</b></div><div><span>${L('Les mates…', 'Las mates…')}</span><b>${FEEL[sv.feel] ? tx(FEEL[sv.feel]) : '—'}</b></div><div><span>${L("M'agrada", 'Me gusta')}</span><b>${LIKE[sv.like] ? tx(LIKE[sv.like]) : '—'}</b></div><div><span>${L('Resultat', 'Resultado')}</span><b>${esc(sv.result)}</b></div></div>` : ''}
    <h2 class="h2">${L('Ajustos', 'Ajustes')}</h2>
    <div class="set"><span>${L('Idioma', 'Idioma')}</span><div class="seg"><button class="${LANG === 'ca' ? 'on' : ''}" onclick="setLang('ca')">Català</button><button class="${LANG === 'es' ? 'on' : ''}" onclick="setLang('es')">Castellano</button></div></div>
    <div class="set"><span>${L('Objectiu diari', 'Objetivo diario')}</span><div class="seg">${[10, 20, 30, 50].map(g => `<button class="${P.goal === g ? 'on' : ''}" onclick="P.goal=${g};save();renderProfile()">${g} XP</button>`).join('')}</div></div>
    <div class="set"><span>${L('Sons', 'Sonidos')}</span><button class="tog ${P.sound ? 'on' : ''}" onclick="P.sound=!P.sound;save();renderProfile()" aria-label="${L('Sons', 'Sonidos')}"><i></i></button></div>
    <div class="row2 pbtns"><button class="btn ghost" onclick="go('profiles')">${L("Canvia d'alumne", 'Cambiar de alumno')}</button><button class="btn ghost redt" onclick="resetP()">${L('Esborra el progrés', 'Borrar el progreso')}</button></div>
    <p class="foot">Mates amb Numi</p>`, 'profile');
}
function resetP() {
  ask(L(`Segur que vols esborrar tot el progrés de <b>${esc(P.name)}</b>? No es pot desfer.`, `¿Seguro que quieres borrar todo el progreso de <b>${esc(P.name)}</b>? No se puede deshacer.`), L('Esborra', 'Borrar'), L('Cancel·la', 'Cancelar'), async () => {
    const keep = { id: P.id, code: P.code, username: P.username, name: P.name, lang: P.lang, course: P.course, baseCourse: P.baseCourse, survey: P.survey, goal: P.goal, sound: P.sound, unlockAll: false };
    for (const k in P) delete P[k]; Object.assign(P, freshProgress(), keep);
    saveLocal();
    if (P.code) { try { await api('sync', { code: P.code, state: P, reset: true }); } catch (e) { } }
    go('home');
  });
}
function slugName(n) { return (n.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '') || 'alumne').slice(0, 14) + ri(10, 99); }
const ERR = e => ({ 'usuari-ocupat': L("Aquest usuari ja existeix. Prova'n un altre.", 'Ese usuario ya existe. Prueba otro.'), 'usuari-format': L('L\'usuari ha de tenir de 3 a 20 lletres o números (sense espais).', 'El usuario debe tener de 3 a 20 letras o números (sin espacios).'), 'contrasenya-format': L('La contrasenya ha de tenir almenys 4 caràcters.', 'La contraseña debe tener al menos 4 caracteres.'), 'credencials': L('Usuari o contrasenya incorrectes.', 'Usuario o contraseña incorrectos.') })[e] || L('No hi ha connexió. Torna-ho a provar.', 'No hay conexión. Vuelve a intentarlo.');
const passField = (id, ph) => `<div class="passf"><input id="${id}" class="nm" type="password" maxlength="60" placeholder="${ph}" autocomplete="new-password"><button type="button" class="eye" onclick="const i=document.getElementById('${id}');i.type=i.type==='password'?'text':'password'" aria-label="${L('Mostra la contrasenya', 'Mostrar la contraseña')}">${ICON.eye}</button></div>`;
function accountModal() {
  if (!P.code) return toast(L('Primer cal connexió a internet.', 'Primero hace falta conexión a internet.'));
  const has = !!P.username;
  modal(`<div class="sheet card cent"><h3>${has ? L('Canvia la contrasenya', 'Cambia la contraseña') : L('Crea el teu usuari', 'Crea tu usuario')}</h3>
    <input id="au" class="nm" maxlength="20" placeholder="${L('Usuari', 'Usuario')}" autocomplete="username" autocapitalize="none" value="${esc(P.username || slugName(P.name))}" ${has ? 'readonly' : ''}>
    ${passField('ap', has ? L('Contrasenya nova', 'Contraseña nueva') : L('Contrasenya', 'Contraseña'))}<div id="aerr" class="err"></div>
    <div class="row2"><button class="btn ghost" onclick="closeModal()">${L('Torna', 'Volver')}</button><button class="btn" onclick="saveAccount()">${L('Desa', 'Guardar')}</button></div></div>`, true);
}
async function saveAccount() {
  const u = $('#au').value.trim().toLowerCase(), p = $('#ap').value;
  if (!/^[a-z0-9._-]{3,20}$/.test(u)) return $('#aerr').textContent = ERR('usuari-format');
  if (p.length < 4) return $('#aerr').textContent = ERR('contrasenya-format');
  $('#aerr').textContent = '…';
  try {
    const r = await api('account', { code: P.code, username: u, password: p });
    if (r.ok) { P.username = u; saveLocal(); closeModal(); toast(icn('check') + L('Compte desat.', 'Cuenta guardada.')); renderProfile(); }
    else $('#aerr').textContent = ERR(r.error);
  } catch (e) { $('#aerr').textContent = ERR(); }
}

/* ---------- Alumnes i entrada ---------- */
function renderProfiles() {
  VIEW = 'profiles';
  const ps = Object.values(DB.profiles);
  app.innerHTML = `<div class="page solo">${langPill()}<h1 class="ph1 c">${L('Qui aprèn avui?', '¿Quién aprende hoy?')}</h1>
    <div class="plist">${ps.map((p, i) => `<div class="pcard" style="animation-delay:${i * 70}ms"><button class="pmain" onclick="switchP('${p.id}')"><span class="pav">${charSVG(p.companion, 'idle', p.acc, '', charLvl((p.cxp || {})[p.companion]))}</span><span><b>${esc(p.name)}</b><small>${COURSES[p.course] ? tx(COURSES[p.course].name) : ''} · ${L('Nivell', 'Nivel')} ${lvlOf(p.xp)} · ${icn('flame')}${p.streak}</small></span></button><button class="pdel" onclick="delP('${p.id}')" aria-label="${L('Treu', 'Quitar')}">${ICON.x}</button></div>`).join('')}</div>
    <button class="btn big" onclick="onb(0)">${icn('plus')}${L('Soc nou o nova', 'Soy nuevo o nueva')}</button>
    <button class="btn big ghost mt" onclick="loginModal()">${L('Ja tinc compte', 'Ya tengo cuenta')}</button></div>`;
}
function switchP(id) { P = DB.profiles[id]; DB.current = id; LANG = P.lang || DB.lang; saveLocal(); pull(); go('home'); }
function delP(id) {
  const p = DB.profiles[id];
  ask(L(`Vols treure <b>${esc(p.name)}</b> d'aquest dispositiu? El progrés continua desat al núvol.`, `¿Quieres quitar a <b>${esc(p.name)}</b> de este dispositivo? El progreso sigue guardado en la nube.`), L('Treu', 'Quitar'), L('Cancel·la', 'Cancelar'), () => {
    delete DB.profiles[id]; if (DB.current === id) { DB.current = null; P = null; } saveLocal();
    Object.keys(DB.profiles).length ? renderProfiles() : onb(0);
  });
}
function loginModal(withCode) {
  modal(`<div class="sheet card cent"><h3>${L('Entra al teu compte', 'Entra en tu cuenta')}</h3>
    ${withCode ? `<p>${L("Escriu el codi secret (per exemple, GUINEU-4827).", 'Escribe el código secreto (por ejemplo, GUINEU-4827).')}</p><input id="cd" class="nm" maxlength="20" placeholder="CODI-0000" autocomplete="off" autocapitalize="characters">`
      : `<input id="lu" class="nm" maxlength="20" placeholder="${L('Usuari', 'Usuario')}" autocomplete="username" autocapitalize="none">${passField('lp', L('Contrasenya', 'Contraseña')).replace('new-password', 'current-password')}`}
    <div id="lerr" class="err"></div>
    <div class="row2"><button class="btn ghost" onclick="closeModal()">${L('Torna', 'Volver')}</button><button class="btn" onclick="doLogin(${withCode ? 1 : 0})">${L('Entra', 'Entrar')}</button></div>
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
    if (!r.state) { $('#lerr').textContent = withCode ? L('No trobem aquest codi. Revisa les lletres i els números.', 'No encontramos ese código. Revisa las letras y los números.') : ERR('credencials'); return; }
    const code = r.code || data.code, ex = Object.values(DB.profiles).find(p => p.code === code);
    if (ex) { closeModal(); return switchP(ex.id); }
    const id = 'p' + Date.now().toString(36);
    P = migrate({ ...r.state, id, code, name: r.name, username: r.state.username || r.username || (withCode ? null : data.username) }); P.dirty = false; P.holdReg = false;
    DB.profiles[id] = P; DB.current = id; LANG = P.lang; saveLocal();
    closeModal(); go('home'); toast(L(`Hola de nou, ${esc(P.name)}.`, `Hola de nuevo, ${esc(P.name)}.`));
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
  if (step === 0) {
    onbShell(0, `<div class="onb-char tapme">${charSVG('numi', 'happy')}</div>
      <div class="bubble big">${L('Hola, soc en <b>Numi</b>. Farem les mates pas a pas, sense presses. <b>Com et dius?</b>', 'Hola, soy <b>Numi</b>. Haremos las mates paso a paso, sin prisas. <b>¿Cómo te llamas?</b>')}</div>
      <input id="nm" class="nm" maxlength="16" placeholder="${L('El teu nom', 'Tu nombre')}" autocomplete="off" enterkeyhint="go" value="${esc(ONB.name || '')}">
      <button class="btn big" onclick="onbName()">${L('Següent', 'Siguiente')}</button>
      <button class="link" onclick="loginModal()">${L('Ja tinc compte', 'Ya tengo cuenta')}</button>`);
    const i = $('#nm'); i.addEventListener('keydown', e => { if (e.key === 'Enter') onbName(); });
  }
  if (step === 1) onbShell(1, `<div class="onb-char sm tapme">${charSVG('numi', 'idle')}</div><div class="bubble big">${L(`Encantat, <b>${esc(ONB.name)}</b>. <b>Quin curs fas?</b>`, `Encantado, <b>${esc(ONB.name)}</b>. <b>¿Qué curso haces?</b>`)}</div>
    <div class="cgrid">${COURSES.map((c, i) => `<button class="cbtn ${ONB.course === i ? 'on' : ''}" style="animation-delay:${i * 50}ms" onclick="ONB.course=${i};onb(2)"><b>${tx(c.name)}</b><small>${L('primària', 'primaria')}</small></button>`).join('')}</div>`);
  if (step === 2) onbShell(2, `<div class="onb-char sm tapme">${charSVG('guida', 'idle')}</div><div class="bubble big">${L("Soc la <b>Guida</b>. Explica'm una mica: <b>com et sents amb les mates?</b>", 'Soy <b>Guida</b>. Cuéntame un poco: <b>¿cómo te sientes con las mates?</b>')}</div>
    <div class="ogrid">${Object.entries(FEEL).map(([k, v], i) => { const t = tx(v); return `<button class="obtn ${ONB.feel === k ? 'on' : ''}" style="animation-delay:${i * 60}ms" onclick="ONB.feel='${k}';onb(3)"><span>${ICON[v[2]]}</span>${t}</button>`; }).join('')}</div>`);
  if (step === 3) onbShell(3, `<div class="onb-char sm tapme">${charSVG('vuit', 'idle')}</div><div class="bubble big">${L("I ara, <b>què t'agrada més?</b>", 'Y ahora, <b>¿qué te gusta más?</b>')}</div>
    <div class="ogrid">${Object.entries(LIKE).map(([k, v], i) => { const t = tx(v); return `<button class="obtn ${ONB.like === k ? 'on' : ''}" style="animation-delay:${i * 60}ms" onclick="ONB.like='${k}';onb(4)"><span>${ICON[v[2]]}</span>${t}</button>`; }).join('')}</div>`);
  if (step === 4) onbShell(4, `<div class="onb-char tapme">${charSVG('numi', 'happy')}</div>
    <div class="bubble big">${L("D'acord. Ara et faré <b>unes quantes preguntes</b> per saber per on començar. <b>No és cap examen</b>: si no en saps alguna, toca «No ho sé».", 'De acuerdo. Ahora te haré <b>unas cuantas preguntas</b> para saber por dónde empezar. <b>No es un examen</b>: si no sabes alguna, toca «No lo sé».')}</div>
    <button class="btn big" onclick="startPlacement()">${L('Comencem', 'Empezamos')}</button><button class="link" onclick="LS={res:[]};finishPlacement(true)">${L('Salta la prova i comença pel principi', 'Salta la prueba y empieza por el principio')}</button>`);
}
function onbName() { const n = $('#nm').value.trim(); if (!n) { $('#nm').classList.add('shake'); setTimeout(() => $('#nm').classList.remove('shake'), 500); return; } ONB.name = n; onb(1); }
function startPlacement() {
  const ci = ONB.course, c = COURSES[ci], meta = [];
  if (ci > 0) { const pc = COURSES[ci - 1]; [1, 2].forEach(k => { const l = pc.units[k].lessons[2]; meta.push({ sk: l.sk[0], L: l.L, tag: 'prev' }); }); }
  c.units.slice(0, 6).forEach((u, ui) => { const l = u.lessons[2]; meta.push({ sk: l.sk[0], L: l.L, tag: 'cur', ui }); });
  P = { id: 'tmp', name: ONB.name, companion: 'numi', acc: {}, sound: true, stats: { sk: {} } };
  startRun({ mode: 'place', plan: meta.map(m => [m.sk, m.L]), meta, color: '#2C4A9A' });
}
function finishPlacement(skipped) {
  const ci = ONB.course, c = COURSES[ci], meta = LS && LS.meta || [], res = LS ? LS.res : [];
  const prevN = meta.filter(m => m.tag === 'prev').length, prevOk = res.slice(0, prevN).filter(Boolean).length;
  const cur = res.slice(prevN); let lead = 0; while (lead < cur.length && cur[lead]) lead++;
  const curOk = cur.filter(Boolean).length;
  let course = ci, skip = Math.min(lead, c.units.length - 2), msg;
  if (skipped) { skip = 0; msg = L(`Comencem ${tx(c.long)} des del principi.`, `Empezamos ${tx(c.long)} desde el principio.`); }
  else if (ci > 0 && prevOk === 0 && curOk <= 1) { course = ci - 1; skip = 0; msg = L(`Començarem amb un repàs de <b>${tx(COURSES[ci - 1].long)}</b>. Pots canviar de curs quan vulguis.`, `Empezaremos con un repaso de <b>${tx(COURSES[ci - 1].long)}</b>. Puedes cambiar de curso cuando quieras.`); }
  else if (skip > 0) msg = L(`Ja domines una part de ${tx(c.long)}, així que obrim fins a la <b>unitat ${skip + 1}</b>: ${tx(c.units[skip].title)}.`, `Ya dominas una parte de ${tx(c.long)}, así que abrimos hasta la <b>unidad ${skip + 1}</b>: ${tx(c.units[skip].title)}.`);
  else msg = L(`Començarem ${tx(c.long)} per la unitat 1: ${tx(c.units[0].title)}.`, `Empezaremos ${tx(c.long)} por la unidad 1: ${tx(c.units[0].title)}.`);
  const result = skipped ? L('Sense prova', 'Sin prueba') : `${prevN ? L(`Curs anterior ${prevOk}/${prevN} · `, `Curso anterior ${prevOk}/${prevN} · `) : ''}${tx(c.name)}: ${curOk}/${cur.length}`;
  LS = null;
  const id = 'p' + Date.now().toString(36);
  P = { id, name: ONB.name, goal: 20, sound: true, unlockAll: false, lang: LANG, ...freshProgress(), course, baseCourse: course, holdReg: true,
    survey: { curs: tx(c.long), feel: ONB.feel, like: ONB.like, result, start: `${tx(COURSES[course].name)} · ${L('unitat', 'unidad')} ${(course === ci ? skip : 0) + 1}`, date: today() } };
  if (!skipped) makeReco(meta.filter(m => m.tag === 'cur').filter((m, i) => !cur[i]), 'place');
  if (!skipped && cur.length) P.tests.push({ date: today(), course: ci, pct: Math.round(100 * curOk / cur.length), ok: curOk, n: cur.length, kind: 'inicial' });
  P.skip[COURSES[course].id] = course === ci ? skip : 0;
  DB.profiles[id] = P; DB.current = id; saveLocal();
  const areas = skipped ? '' : `<div class="plres">${meta.filter(m => m.tag === 'cur').map((m, i) => `<div class="${cur[i] ? 'ok' : ''}" style="animation-delay:${i * 90}ms"><span>${cur[i] ? ICON.check : '·'}</span>${tx(c.units[m.ui].title)}</div>`).join('')}</div>`;
  app.innerHTML = `<div class="scr"><div class="rchar tapme">${charSVG('numi', 'happy')}</div><h1>${L('Punt de partida', 'Punto de partida')}</h1>
    <p class="sub">${msg}</p>${areas}<button class="btn big" onclick="onbAccount()">${L('Següent', 'Siguiente')}</button></div>`;
  SFX.win();
}
function onbAccount() {
  ONB.step = 5;
  app.innerHTML = `<div class="page solo onb"><div class="onb-char sm tapme">${charSVG('numi', 'happy')}</div>
    <div class="bubble big">${L('Últim pas: <b>crea un usuari i una contrasenya</b>. Així el progrés queda desat i pots entrar des de qualsevol ordinador o tauleta.', 'Último paso: <b>crea un usuario y una contraseña</b>. Así el progreso queda guardado y puedes entrar desde cualquier ordenador o tablet.')}</div>
    <label class="lbl">${L('Usuari', 'Usuario')}</label><input id="au" class="nm" maxlength="20" autocomplete="username" autocapitalize="none" value="${esc(slugName(P.name))}">
    <label class="lbl">${L('Contrasenya (mínim 4)', 'Contraseña (mínimo 4)')}</label>${passField('ap', '••••')}
    <div id="aerr" class="err"></div>
    <button class="btn big" id="regBtn" onclick="doRegister()">${L('Crea el compte', 'Crear la cuenta')}</button>
    <button class="link" onclick="doRegister(true)">${L('Ara no (et donarem un codi secret)', 'Ahora no (te daremos un código secreto)')}</button></div>`;
}
async function doRegister(noUser) {
  const u = noUser ? null : $('#au').value.trim().toLowerCase(), p = noUser ? null : $('#ap').value;
  if (!noUser) {
    if (!/^[a-z0-9._-]{3,20}$/.test(u)) return $('#aerr').textContent = ERR('usuari-format');
    if (p.length < 4) return $('#aerr').textContent = ERR('contrasenya-format');
  }
  $('#aerr').textContent = '…';
  let r;
  try { r = await api('register', { name: P.name, survey: P.survey, state: { ...P, holdReg: false }, username: u, password: p }); } catch (e) { r = { error: 'net' }; }
  if (r.error === 'usuari-ocupat' || r.error === 'usuari-format' || r.error === 'contrasenya-format') return $('#aerr').textContent = ERR(r.error);
  P.holdReg = false;
  if (r.code) { P.code = r.code; P.username = r.username || null; P.pendingReg = false; P.dirty = false; } else P.pendingReg = true;
  saveLocal();
  app.innerHTML = `<div class="scr"><div class="rchar big tapme">${charSVG('numi', 'happy')}</div><h1>${L('Tot a punt', 'Todo listo')}</h1>
    ${P.username ? `<div class="codecard big"><div><small>${L('El teu usuari', 'Tu usuario')}</small><b>${esc(P.username)}</b></div><div class="ctip">${L(`Guarda bé la contrasenya. Codi de reserva: <b>${P.code}</b>`, `Guarda bien la contraseña. Código de reserva: <b>${P.code}</b>`)}</div></div>`
      : P.code ? `<div class="codecard big"><div><small>${L('El teu codi secret', 'Tu código secreto')}</small><b>${P.code}</b></div><div class="ctip">${L("Apunta'l. Amb aquest codi pots continuar des de qualsevol dispositiu.", 'Apúntalo. Con este código puedes continuar desde cualquier dispositivo.')}</div></div>`
      : `<p class="sub">${L("No hi ha connexió. Es desarà sol quan tornis a tenir internet.", 'No hay conexión. Se guardará solo cuando vuelvas a tener internet.')}</p>`}
    <button class="btn big" onclick="ONB={};go('home')">${L('Comença', 'Empezar')}</button></div>`;
  SFX.win();
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

if (P) { pull(); syncNow(); }
go(P ? 'home' : 'onboard');
