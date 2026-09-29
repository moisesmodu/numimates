/* ---------- Domini, repàs espaiat i ruta de temporada ----------
   Idees preses d'altres apps: IXL i Khan Academy (no n'hi ha prou de fer-ho, cal fer-ho bé),
   Duolingo (les lliçons s'«oxiden» i cal repassar-les) i el ruta de temporada dels jocs, però
   gratuït i sense compres: aquí tot es guanya practicant. */
const PASS = 2;                        // estrelles mínimes per obrir la lliçó següent (màx. 2 errors)
const REV_DAYS = [2, 5, 12, 30, 60];   // caixes de Leitner: dies fins al pròxim repàs

/* Repàs espaiat: cada lliçó ben feta es torna a demanar al cap d'uns dies */
const revKey = (c, u, li) => `${c.id}|${u.id}|${li}`;
function revMark(u, li, passed) {
  P.rev = P.rev || {};
  const k = revKey(CUR(), u, li), r = P.rev[k];
  if (!r) { if (passed) P.rev[k] = { d: today(), b: 0 }; return; }
  r.d = today(); r.b = passed ? Math.min(REV_DAYS.length - 1, r.b + 1) : Math.max(0, r.b - 1);
}
function revDue() {
  const c = CUR(), out = [];
  for (const [k, r] of Object.entries(P.rev || {})) {
    const [cid, uid, li] = k.split('|'); if (cid !== c.id) continue;
    if (dayDiff(r.d, today()) < REV_DAYS[r.b]) continue;
    const ui = c.units.findIndex(u => u.id === uid); if (ui < 0 || !c.units[ui].lessons[+li]) continue;
    out.push({ k, ui, li: +li, late: dayDiff(r.d, today()) - REV_DAYS[r.b] });
  }
  return out.sort((a, b) => b.late - a.late);
}
const isDue = (ui, li) => { const r = (P.rev || {})[revKey(CUR(), UNITS_()[ui], li)]; return !!r && dayDiff(r.d, today()) >= REV_DAYS[r.b]; };
function reviewCard() {
  const due = revDue(); if (!due.length) return '';
  return `<button class="testcard rev" onclick="startReview()"><span class="tci">🔧</span><span><b>${L(`Tens ${due.length} ${due.length === 1 ? 'lliçó' : 'lliçons'} per repassar`, `Tienes ${due.length} ${due.length === 1 ? 'lección' : 'lecciones'} para repasar`)}</b><small>${L("El que no es practica s'oblida. Repassa-les i posa-les a punt: +6 💎 i una carta.", 'Lo que no se practica se olvida. Repásalas y ponlas a punto: +6 💎 y una carta.')}</small></span><span class="go">›</span></button>`;
}
function startReview() {
  const due = revDue().slice(0, 4); if (!due.length) return;
  const plan = [];
  for (let i = 0; i < 8; i++) { const d = due[i % due.length], l = UNITS_()[d.ui].lessons[d.li]; plan.push([pick(l.sk), l.L]); }
  startRun({ mode: 'review', ui: null, li: null, plan: shuffle(plan), color: '#2A8C82', revKeys: due.map(d => d.k) });
}
function reviewDone(keys, passed) {
  for (const k of keys) { const r = (P.rev || {})[k]; if (!r) continue; r.d = today(); r.b = passed ? Math.min(REV_DAYS.length - 1, r.b + 1) : 0; }
}

/* Corona d'unitat: totes les lliçons amb 3 estrelles */
function crownCheck(ui) {
  const u = UNITS_()[ui], st = prog(ui).stars;
  P.crowns = P.crowns || [];
  if (P.crowns.includes(u.id)) return null;
  const ok = u.lessons.every((l, i) => st[i] === 3) && st[REP(u)] >= PASS;
  if (!ok) return null;
  P.crowns.push(u.id); return u;
}
function scrCrown(u) {
  app.innerHTML = `<div class="scr"><div class="burst gold"></div><div class="bigcrown">👑</div><h1>${L('Unitat dominada!', '¡Unidad dominada!')}</h1>
    <p class="sub">${L(`Totes les lliçons de «${tx(u.title)}» amb 3 estrelles. Això és dominar-ho de veritat!`, `Todas las lecciones de «${tx(u.title)}» con 3 estrellas. ¡Esto es dominarlo de verdad!`)}</p>
    <div class="rstats"><div class="rs gem"><span>${L('DIAMANTS', 'DIAMANTES')}</span><b>+50</b></div></div>
    <button class="btn big" onclick="flowNext()">${L('CONTINUA', 'CONTINÚA')}</button></div>`;
  SFX.win(); confetti(220);
}

/* ---------- Ruta de temporada (cada mes, gratuït) ---------- */
const SP_TIER = 40, SP_TIERS = 25;
// Cartes exclusives de cada temporada: només es guanyen a la ruta d'aquell mes
const SEASONS = {
  '2026-10': { name: "La nit de l'Olimp|La noche del Olimpo", icon: '🌙', color: '#3B2A6B', cards: { 8: 'nyx', 16: 'selene', 25: 'hecate' } },
  '2026-11': { name: 'El bosc de tardor|El bosque de otoño', icon: '🍂', color: '#8A4A1F', cards: { 8: 'dryad', 16: 'pan', 25: 'persephone' } },
  '2026-12': { name: "El solstici d'hivern|El solsticio de invierno", icon: '❄️', color: '#1F4E79', cards: { 8: 'hestia', 16: 'boreas', 25: 'helios' } },
  '2027-01': { name: "Janus i l'any nou|Jano y el año nuevo", icon: '🗝️', color: '#7A5A12', cards: { 8: 'eos', 16: 'horae', 25: 'janus' } },
  '2027-02': { name: 'Les Muses|Las Musas', icon: '🎭', color: '#6B1F5E', cards: { 8: 'terpsichore', 16: 'calliope', 25: 'urania' } },
  '2027-03': { name: "El despertar de la primavera|El despertar de la primavera", icon: "🌸", color: "#2F6B2F", cards: { 8: "zephyrus", 16: "flora", 25: "pomona" } },
  '2027-04': { name: "Els Jocs d'Olímpia|Los Juegos de Olimpia", icon: "🏅", color: "#9A3412", cards: { 8: "pelops", 16: "hippodamia", 25: "milo" } },
  '2027-05': { name: "El laberint de Creta|El laberinto de Creta", icon: "🧶", color: "#7A1F3D", cards: { 8: "ariadne", 16: "daedalus", 25: "minos" } },
  '2027-06': { name: "Els argonautes|Los argonautas", icon: "⛵", color: "#0E5A5A", cards: { 8: "medea", 16: "dioscuri", 25: "goldenfleece" } }
};
const SEASON_ONLY = Object.values(SEASONS).flatMap(s => Object.values(s.cards));
function seasonId(d = new Date()) {
  const id = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  return id < '2026-10' ? '2026-10' : id;   // pretemporada: els últims dies de setembre ja compten per a octubre
}
const MONTHS = ['gener|enero', 'febrer|febrero', 'març|marzo', 'abril|abril', 'maig|mayo', 'juny|junio', 'juliol|julio', 'agost|agosto', 'setembre|septiembre', 'octubre|octubre', 'novembre|noviembre', 'desembre|diciembre'];
function seasonInfo() {
  const id = seasonId(), [y, m] = id.split('-').map(Number), cfg = SEASONS[id] || { name: `Temporada de ${tx(MONTHS[m - 1])}|Temporada de ${tx(MONTHS[m - 1])}`, icon: '⭐', color: '#602B7A', cards: {} };
  const end = new Date(y, m, 1), left = Math.max(1, Math.ceil((end - new Date()) / 864e5));
  return { id, cfg, left };
}
function seasonState() {
  const id = seasonId();
  if (!P.season || P.season.id !== id) P.season = { id, xp: 0, got: [] };
  return P.season;
}
function seasonXP(x) { seasonState().xp += x; }
const seasonTier = s => Math.min(SP_TIERS, Math.floor(s.xp / SP_TIER));
function tierReward(t, cfg) {
  if (cfg.cards[t]) return { card: cfg.cards[t] };
  if (t === SP_TIERS) return { gems: 100 };
  if (t % 5 === 0) return { pack: 3 };
  if (t === 12) return { freeze: 1 };
  if (t % 3 === 0) return { pack: 1 };
  return { gems: 10 + Math.floor(t / 5) * 5 };
}
function rewardLabel(r) {
  if (r.card) { const s = STK.find(x => x[0] === r.card); return `🌟 ${s ? tx(s[2]) : ''}`; }
  if (r.pack) return r.pack === 1 ? L('🃏 1 carta', '🃏 1 carta') : L(`🎴 Sobre de ${r.pack}`, `🎴 Sobre de ${r.pack}`);
  if (r.freeze) return L('🧊 Protector de ratxa', '🧊 Protector de racha');
  return `💎 ${r.gems}`;
}
function seasonCard() {
  if (!isPremium()) { const { cfg } = seasonInfo(); return `<button class="seasoncard locked" style="--sc:${cfg.color}" onclick="premiumModal('temporada')"><span class="sci">${cfg.icon}</span><span class="scx"><small>${L('RUTA DE TEMPORADA', 'RUTA DE TEMPORADA')} · PREMIUM</small><b>${tx(cfg.name)}</b><em>${L('Cartes exclusives cada mes', 'Cartas exclusivas cada mes')}</em></span><span class="go">🔒</span></button>`; }
  const { cfg, left } = seasonInfo(), s = seasonState(), t = seasonTier(s), pend = [...Array(t).keys()].map(i => i + 1).filter(i => !s.got.includes(i)).length;
  return `<button class="seasoncard" style="--sc:${cfg.color}" onclick="go('season')"><span class="sci">${cfg.icon}</span><span class="scx"><small>${L('RUTA DE TEMPORADA', 'RUTA DE TEMPORADA')} · ${L(`queden ${left} dies`, `quedan ${left} días`)}</small><b>${tx(cfg.name)}</b>
    <span class="scbar"><i style="width:${t / SP_TIERS * 100}%"></i></span><em>${L('Nivell', 'Nivel')} ${t}/${SP_TIERS}${pend ? ` · 🎁 ${pend} ${L('per recollir', 'por recoger')}` : ''}</em></span><span class="go">›</span></button>`;
}
function renderSeason() {
  VIEW = 'season';
  const { cfg, left } = seasonInfo(), s = seasonState(), t = seasonTier(s), into = s.xp - t * SP_TIER;
  const cards = Object.entries(cfg.cards).map(([tier, id]) => { const c = STK.find(x => x[0] === id); return c ? `<div class="sccard"><div>${stickerHTML(c)}</div><small>${L('Nivell', 'Nivel')} ${tier}</small></div>` : ''; }).join('');
  const rows = [...Array(SP_TIERS).keys()].map(i => i + 1).map(i => {
    const r = tierReward(i, cfg), got = s.got.includes(i), can = i <= t && !got;
    return `<div class="tier ${got ? 'got' : can ? 'can' : ''} ${r.card ? 'big' : ''}"><span class="tn">${i}</span><span class="tr">${rewardLabel(r)}</span>${got ? '<span class="tok">✓</span>' : can ? `<button class="btn sm gold" onclick="claimTier(${i})">${L('RECULL', 'RECOGE')}</button>` : `<span class="tl">${i * SP_TIER} XP</span>`}</div>`;
  }).join('');
  app.innerHTML = shell(`<div class="seasonhead" style="--sc:${cfg.color}"><div class="shi">${cfg.icon}</div><small>${L('RUTA DE TEMPORADA', 'RUTA DE TEMPORADA')}</small><h1>${tx(cfg.name)}</h1>
    <p>${L(`Queden <b>${left} dies</b>. Tota l'XP que guanyis aquest mes et fa pujar de nivell. L'1 del mes que ve comença una temporada nova.`, `Quedan <b>${left} días</b>. Toda la XP que ganes este mes te hace subir de nivel. El día 1 del mes que viene empieza una temporada nueva.`)}</p>
    <div class="shlv"><b>${L('Nivell', 'Nivel')} ${t}</b><span class="scbar"><i style="width:${t >= SP_TIERS ? 100 : into / SP_TIER * 100}%"></i></span><small>${t >= SP_TIERS ? L('Temporada completada! 🏆', '¡Temporada completada! 🏆') : `${into}/${SP_TIER} XP`}</small></div></div>
    ${cards ? `<h2 class="h2">${L('Cartes exclusives d\'aquesta temporada', 'Cartas exclusivas de esta temporada')}</h2><div class="sccards">${cards}</div>` : ''}
    ${t > s.got.length ? `<button class="btn big gold" onclick="claimAllTiers()">🎁 ${L('RECULL-HO TOT', 'RECÓGELO TODO')}</button>` : ''}
    <div class="tiers">${rows}</div>`, 'home');
}
function grantTier(i, pack) {
  const { cfg } = seasonInfo(), s = seasonState();
  if (s.got.includes(i) || i > seasonTier(s)) return 0;
  s.got.push(i);
  const r = tierReward(i, cfg); let g = 0;
  if (r.gems) { P.gems += r.gems; g += r.gems; }
  if (r.freeze) { if (P.freeze < 2) P.freeze++; else { P.gems += 30; g += 30; } }
  if (r.pack) pack.push(...openPack(r.pack));
  if (r.card) { albumFix(); const c = STK.find(x => x[0] === r.card); const dup = !!P.album[r.card]; P.album[r.card] = (P.album[r.card] || 0) + 1; pack.push({ s: c, dup }); }
  return g;
}
function claimTier(i) { claimTiers([i]); }
function claimAllTiers() { const s = seasonState(); claimTiers([...Array(seasonTier(s)).keys()].map(i => i + 1)); }
function claimTiers(list) {
  const pack = []; let g = 0;
  list.forEach(i => { g += grantTier(i, pack); });
  save(); SFX.coin();
  if (g) toast(`+${g} 💎`);
  if (pack.length) { FLOW = [() => scrPack(pack)]; FLOW.back = 'season'; flowNext(); } else renderSeason();
}
