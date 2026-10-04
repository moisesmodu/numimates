/* ===== Numi Tech · Robòtica: simulador del Maqueen Lite V5 amb micro:bit V2 =====
   Simulador propi de Numi, fet per comportar-se com el robot de l'aula (DFRobot Maqueen Lite V5 + micro:bit V2), perquè
   el que s'aprèn aquí funcioni igual al robot de veritat i el programa es pugui passar a MakeCode (extensió «Maqueen»):
   · Mides reals: cos de 8,1 × 8,5 cm, rodes de 4,2 cm, motors N20 (1:150, 133 rpm) → uns 29 cm/s a velocitat 255.
     Per sota de velocitat ~30 els motors no tenen prou força i no giren (com al robot real).
   · Sensors: ultrasons HC-SR04 al davant (cm; si no veu res, 500, com la llibreria), 3 sensors de línia L/M/R a sota
     (0 = blanc, 1 = negre o «aire»; i el valor analògic ADC), 2 sensors de llum (0-1023), botons A i B, matriu 5 × 5,
     2 llums RGB del cotxe (vermell, verd, groc, blau, porpra, cian, blanc), 4 RGB de sota, brunzidor i seguiment de
     línia del xip (patrolling).
   · Programes amb blocs: «en iniciar», «per sempre», «en prémer A / B». S'executen com a la micro:bit: cada guió és un
     fil, el temps avança de 10 en 10 ms i «per sempre» descansa 20 ms a cada volta.
   · Les distàncies són en cm i els angles en graus (0 = amunt, 90 = dreta, en el sentit de les agulles del rellotge).
   · Sense eval (CSP): els programes són arbres de blocs i els executa un intèrpret propi. */

const ROBO = {
  R: 4.3,            // radi del robot (cm) per als xocs
  TRACK: 6.8,        // distància entre rodes (cm)
  VMAX: 29.2,        // cm/s a velocitat 255 (133 rpm × π × 4,2 cm / 60)
  DEAD: 30,          // velocitat mínima perquè el motor giri
  TAU: .09,          // segons que tarda el motor a arribar a la velocitat (inèrcia)
  DT: .01,           // pas de simulació (s)
  SONAR: 4.4,        // el sensor d'ultrasons és 4,4 cm per davant del centre
  LINE_F: 3.6, LINE_S: 1.25,   // sensors de línia: 3,6 cm per davant del centre, separats 1,25 cm
  LIGHT_F: 3.8, LIGHT_S: 3.2,  // sensors de llum: a les cantonades del davant
  FOREVER_MS: 20
};
const RCOL = { red: '#FF3B30', green: '#2BD45A', yellow: '#FFD60A', blue: '#2F7BFF', purple: '#C43BFF', cyan: '#2EE6F0', white: '#FFFFFF', black: null, orange: '#FF9F0A' };
const RCOL_N = { red: ['vermell', 'rojo'], green: ['verd', 'verde'], yellow: ['groc', 'amarillo'], blue: ['blau', 'azul'], purple: ['porpra', 'púrpura'], cyan: ['cian', 'cian'], white: ['blanc', 'blanco'], black: ['apagat', 'apagado'], orange: ['taronja', 'naranja'] };
const RCAR_COLS = ['red', 'green', 'yellow', 'blue', 'purple', 'cyan', 'white', 'black'];
// icones de la matriu 5 × 5 de la micro:bit (les mateixes que basic.showIcon)
const RICONS = {
  heart: '01010 11111 11111 01110 00100', smallheart: '00000 01010 01110 00100 00000', yes: '00000 00001 00010 10100 01000', no: '10001 01010 00100 01010 10001',
  happy: '00000 01010 00000 10001 01110', sad: '00000 01010 00000 01110 10001', surprised: '01010 00000 00100 01010 00100', asleep: '00000 11011 00000 01110 00000',
  arrowN: '00100 01110 10101 00100 00100', arrowE: '00100 00010 11111 00010 00100', arrowS: '00100 00100 10101 01110 00100', arrowW: '00100 01000 11111 01000 00100',
  square: '11111 10001 10001 10001 11111', diamond: '00100 01010 10001 01010 00100', target: '00100 01110 11011 01110 00100', skull: '01110 10101 11111 01110 01110',
  ghost: '11111 10101 11111 11111 10101', butterfly: '11011 11111 00100 11111 11011', umbrella: '01110 11111 00100 10100 01100', house: '00100 01110 11111 01110 01010',
  music: '01111 01001 01001 11011 11011', snake: '11000 11011 01010 01110 00000', tortoise: '00000 01110 11111 01010 00000', rabbit: '10100 10100 11110 11010 11110'
};
const RICON_MC = { heart: 'Heart', smallheart: 'SmallHeart', yes: 'Yes', no: 'No', happy: 'Happy', sad: 'Sad', surprised: 'Surprised', asleep: 'Asleep', arrowN: 'ArrowNorth', arrowE: 'ArrowEast', arrowS: 'ArrowSouth', arrowW: 'ArrowWest', square: 'Square', diamond: 'Diamond', target: 'Target', skull: 'Skull', ghost: 'Ghost', butterfly: 'Butterfly', umbrella: 'Umbrella', house: 'House', music: 'EighthNote', snake: 'Snake', tortoise: 'Tortoise', rabbit: 'Rabbit' };
const RICON_N = { heart: ['cor', 'corazón'], smallheart: ['cor petit', 'corazón pequeño'], yes: ['sí', 'sí'], no: ['no', 'no'], happy: ['content', 'contento'], sad: ['trist', 'triste'], surprised: ['sorprès', 'sorprendido'], asleep: ['adormit', 'dormido'],
  arrowN: ['fletxa amunt', 'flecha arriba'], arrowE: ['fletxa dreta', 'flecha derecha'], arrowS: ['fletxa avall', 'flecha abajo'], arrowW: ['fletxa esquerra', 'flecha izquierda'], square: ['quadrat', 'cuadrado'], diamond: ['diamant', 'diamante'],
  target: ['diana', 'diana'], skull: ['calavera', 'calavera'], ghost: ['fantasma', 'fantasma'], butterfly: ['papallona', 'mariposa'], umbrella: ['paraigua', 'paraguas'], house: ['casa', 'casa'], music: ['nota', 'nota'], snake: ['serp', 'serpiente'], tortoise: ['tortuga', 'tortuga'], rabbit: ['conill', 'conejo'] };
const RNOTES = { C4: 262, D4: 294, E4: 330, F4: 349, G4: 392, A4: 440, B4: 494, C5: 523, D5: 587, E5: 659, F5: 698, G5: 784 };
const RNOTE_N = { C4: 'do', D4: 're', E4: 'mi', F4: 'fa', G4: 'sol', A4: 'la', B4: 'si', C5: 'do′', D5: 're′', E5: 'mi′', F5: 'fa′', G5: 'sol′' };
const RBEATS = { '1/4': 125, '1/2': 250, '1': 500, '2': 1000, '4': 2000 };

/* ---------- L'arena ----------
   spec: { w, h (cm), bot: [x, y, angle], lines: [{ p: [[x,y]…], closed?, w? }] o [[x,y]…], walls: [[x,y,w,h]…],
     zones: [{ id, r: [x,y,w,h] o c: [x,y,r], col: 'green'|…, label? }], objs: [{ x, y, r, kind: 'can'|'ball'|'box' }],
     ring: { x, y, r } (dohyo de sumo: cercle negre de 2 cm), lamp: { x, y, on? } (focus de llum), dark: true (fosc),
     border: false (sense parets al voltant), leader: { path: [[x,y]…], speed, loop } (un altre robot),
     env: [{ t: 3, dark: true }, …] (canvis amb el temps), press: [{ t: 1, b: 'A' }] (botons en les proves),
     goal: [ comprovacions ], time: segons màxims, alts: [ arenes alternatives (mateixos camps) ] } */
function roboWorld(spec) {
  const W = { ...spec, w: spec.w || 120, h: spec.h || 80, border: spec.border !== undefined ? spec.border !== false : !spec.ring };   // amb dohyo, per defecte sense parets (fora és l'aire)
  W.bot = spec.bot || [20, W.h / 2, 90];
  W.lines = (spec.lines || []).map(l => Array.isArray(l) ? { p: l, w: 2 } : { w: 2, ...l });
  W.walls = (spec.walls || []).map(r => r.slice());
  if (W.border) { const t = 3; W.bwalls = [[-t, -t, W.w + 2 * t, t], [-t, W.h, W.w + 2 * t, t], [-t, 0, t, W.h], [W.w, 0, t, W.h]]; } else W.bwalls = [];
  W.zones = (spec.zones || []).map(z => ({ col: 'green', ...z }));
  W.objs = (spec.objs || []).map(o => ({ r: 3, kind: 'can', ...o }));
  W.time = spec.time || 20;
  W.goal = spec.goal || [];
  return W;
}
// distància d'un punt a un segment
function roboSegD(px, py, ax, ay, bx, by) { const dx = bx - ax, dy = by - ay, l = dx * dx + dy * dy, t = l ? Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / l)) : 0; return Math.hypot(px - ax - t * dx, py - ay - t * dy); }
const roboInRect = (x, y, r) => x >= r[0] && y >= r[1] && x <= r[0] + r[2] && y <= r[1] + r[3];
const roboInZone = (x, y, z) => z.r ? roboInRect(x, y, z.r) : Math.hypot(x - z.c[0], y - z.c[1]) <= z.c[2];
// què hi ha a terra en un punt: negre (cinta o vora del dohyo), una zona de color o el blanc del tapet; fora del tapet, «aire»
function roboFloor(W, x, y) {
  if (x < 0 || y < 0 || x > W.w || y > W.h) return { black: true, adc: 1000, air: true };
  for (const l of W.lines) { const p = l.p, n = p.length; for (let i = 0; i < n - (l.closed ? 0 : 1); i++) { const a = p[i], b = p[(i + 1) % n]; if (roboSegD(x, y, a[0], a[1], b[0], b[1]) <= l.w / 2) return { black: true, adc: 900 }; } }
  if (W.ring) { const d = Math.hypot(x - W.ring.x, y - W.ring.y); if (d > W.ring.r) return { black: true, adc: 1000, air: true }; if (d > W.ring.r - 2) return { black: true, adc: 880 }; }
  for (const z of W.zones) if (roboInZone(x, y, z)) return z.col === 'black' ? { black: true, adc: 900, zone: z } : { black: false, adc: z.col === 'white' ? 90 : 360, zone: z };
  return { black: false, adc: 90 };
}
function roboSim(W) {
  const [x, y, h] = W.bot;
  return { x, y, h, vl: 0, vr: 0, tl: 0, tr: 0, t: 0, hits: 0, hit: false, car: { L: null, R: null }, under: [null, null, null, null], mx: null, mxT: null, notes: [], vars: {}, patrol: false,
    trail: [[x, y]], objs: W.objs.map(o => ({ ...o })), lead: W.leader ? { i: 0, x: W.leader.path[0][0], y: W.leader.path[0][1], h: W.leader.path[1] ? (Math.atan2(W.leader.path[1][0] - W.leader.path[0][0], -(W.leader.path[1][1] - W.leader.path[0][1])) * 180 / Math.PI + 360) % 360 : 0 } : null, dark: !!W.dark, lamp: W.lamp ? { ...W.lamp, on: W.lamp.on !== false } : null,
    log: [], cps: 0, cover: new Set(), stopT: 0, out: false, crash: null, ended: false, btn: { A: 0, B: 0 }, sound: null };
}
/* ---------- Sensors ---------- */
const rad = a => a * Math.PI / 180;
const roboFwd = (S, f, s = 0) => { const a = rad(S.h); return [S.x + Math.sin(a) * f + Math.cos(a) * s, S.y - Math.cos(a) * f + Math.sin(a) * s]; };
// raig contra rectangles i cercles; torna la distància o Infinity
function roboRayRect(ox, oy, dx, dy, r) {
  let t0 = 0, t1 = Infinity;
  for (const [o, d, lo, hi] of [[ox, dx, r[0], r[0] + r[2]], [oy, dy, r[1], r[1] + r[3]]]) {
    if (Math.abs(d) < 1e-9) { if (o < lo || o > hi) return Infinity; continue; }
    let a = (lo - o) / d, b = (hi - o) / d; if (a > b) [a, b] = [b, a]; t0 = Math.max(t0, a); t1 = Math.min(t1, b); if (t0 > t1) return Infinity;
  }
  return t0;
}
function roboRayCirc(ox, oy, dx, dy, cx, cy, r) { const fx = ox - cx, fy = oy - cy, b = fx * dx + fy * dy, c = fx * fx + fy * fy - r * r, d = b * b - c; if (d < 0) return Infinity; const t = -b - Math.sqrt(d); return t >= 0 ? t : (c < 0 ? 0 : Infinity); }
// ultrasons: un con estret (±8°) cap endavant; de 2 a 400 cm; si no rep l'eco, 500 (com la llibreria del Maqueen)
function roboDist(W, S) {
  const [ox, oy] = roboFwd(S, ROBO.SONAR); let best = Infinity;
  for (const da of [-8, -4, 0, 4, 8]) {
    const a = rad(S.h + da), dx = Math.sin(a), dy = -Math.cos(a);
    for (const r of W.walls) best = Math.min(best, roboRayRect(ox, oy, dx, dy, r));
    for (const r of W.bwalls) best = Math.min(best, roboRayRect(ox, oy, dx, dy, r));
    for (const o of S.objs) if (!o.gone) best = Math.min(best, roboRayCirc(ox, oy, dx, dy, o.x, o.y, o.r));
    if (S.lead) best = Math.min(best, roboRayCirc(ox, oy, dx, dy, S.lead.x, S.lead.y, ROBO.R));
  }
  if (best > 400) return 500;
  return Math.max(2, Math.round(best));
}
const ROBO_SIDE = { L: -1, M: 0, R: 1 };
function roboLine(W, S, k) { const [x, y] = roboFwd(S, ROBO.LINE_F, ROBO_SIDE[k] * ROBO.LINE_S); return roboFloor(W, x, y); }
function roboLight(W, S, k) {
  const [x, y] = roboFwd(S, ROBO.LIGHT_F, (k === 'L' ? -1 : 1) * ROBO.LIGHT_S); let v = S.dark ? 25 : 260;
  if (S.lamp && S.lamp.on) { const dx = S.lamp.x - x, dy = S.lamp.y - y, d = Math.hypot(dx, dy), a = rad(S.h + (k === 'L' ? -35 : 35)), cos = (dx * Math.sin(a) - dy * Math.cos(a)) / (d || 1);
    v += 760 * Math.max(0, cos) / (1 + (d / 25) ** 2); }
  return Math.max(0, Math.min(1023, Math.round(v)));
}
// el valor d'un operand: número, sensor o variable
function roboVal(W, S, v) {
  if (typeof v === 'number') return v;
  if (v == null) return 0;
  switch (v.r) {
    case 'dist': return roboDist(W, S);
    case 'L': case 'M': case 'R': return roboLine(W, S, v.r).black ? 1 : 0;
    case 'aL': case 'aM': case 'aR': return roboLine(W, S, v.r.slice(1)).adc;
    case 'lL': return roboLight(W, S, 'L'); case 'lR': return roboLight(W, S, 'R');
    case 'A': case 'B': return S.btn[v.r] ? 1 : 0;
    case 'var': return S.vars[v.v] || 0;
    case 'time': return Math.round(S.t * 1000);
  }
  return 0;
}
function roboCond(W, S, c) {
  if (!c) return false;
  if (c.and) return roboCond(W, S, c.and[0]) && roboCond(W, S, c.and[1]);
  if (c.or) return roboCond(W, S, c.or[0]) || roboCond(W, S, c.or[1]);
  const a = roboVal(W, S, c.a), b = roboVal(W, S, c.b);
  switch (c.op) { case '<': return a < b; case '>': return a > b; case '=': return a === b; case '≠': return a !== b; case '≤': return a <= b; case '≥': return a >= b; }
  return false;
}
/* ---------- Física ---------- */
const roboWheel = (dir, s) => { s = Math.max(0, Math.min(255, s)); return s < ROBO.DEAD ? 0 : (dir === 'back' ? -1 : 1) * ROBO.VMAX * (s - ROBO.DEAD) / (255 - ROBO.DEAD) * (255 / 255); };
function roboPhys(W, S, dt) {
  // seguiment de línia del xip (patrolling): el Maqueen segueix la línia sol amb els tres sensors
  if (S.patrol) { const l = roboLine(W, S, 'L').black, m = roboLine(W, S, 'M').black, r = roboLine(W, S, 'R').black;
    const v = roboWheel('fwd', 90); if (m && !l && !r || l && m && r) { S.tl = v; S.tr = v; } else if (l) { S.tl = v * .1; S.tr = v; } else if (r) { S.tl = v; S.tr = v * .1; } else { S.tl = v * .6; S.tr = v * .6; } }
  const k = 1 - Math.exp(-dt / ROBO.TAU); S.vl += (S.tl - S.vl) * k; S.vr += (S.tr - S.vr) * k;
  const v = (S.vl + S.vr) / 2, w = (S.vl - S.vr) / ROBO.TRACK;   // w positiu = gira cap a la dreta (sentit horari)
  S.h = (S.h + w * dt * 180 / Math.PI + 360) % 360;
  const a = rad(S.h); let nx = S.x + Math.sin(a) * v * dt, ny = S.y - Math.cos(a) * v * dt;
  // xocs amb parets (el robot és un cercle): se l'empeny fora i compta un cop
  let hit = false;
  for (const r of [...W.walls, ...W.bwalls]) { const cx = Math.max(r[0], Math.min(nx, r[0] + r[2])), cy = Math.max(r[1], Math.min(ny, r[1] + r[3])), d = Math.hypot(nx - cx, ny - cy);
    if (d < ROBO.R) { hit = true; if (d > 1e-6) { nx = cx + (nx - cx) / d * ROBO.R; ny = cy + (ny - cy) / d * ROBO.R; } else { nx = S.x; ny = S.y; } } }
  // objectes que es poden empènyer (llaunes, pilotes, caixes)
  for (const o of S.objs) { if (o.gone) continue; const dx = o.x - nx, dy = o.y - ny, d = Math.hypot(dx, dy), m = ROBO.R + o.r;
    if (d < m && d > 1e-6) { const p = m - d; o.x += dx / d * p; o.y += dy / d * p; o.moved = true;
      for (const r of W.walls) { const cx = Math.max(r[0], Math.min(o.x, r[0] + r[2])), cy = Math.max(r[1], Math.min(o.y, r[1] + r[3])), e = Math.hypot(o.x - cx, o.y - cy); if (e < o.r && e > 1e-6) { o.x = cx + (o.x - cx) / e * o.r; o.y = cy + (o.y - cy) / e * o.r; nx -= dx / d * (o.r - e); ny -= dy / d * (o.r - e); } } } }
  if (S.lead) { const dx = S.lead.x - nx, dy = S.lead.y - ny, d = Math.hypot(dx, dy); if (d < 2 * ROBO.R && d > 1e-6) { hit = true; nx = S.lead.x - dx / d * 2 * ROBO.R; ny = S.lead.y - dy / d * 2 * ROBO.R; } }
  if (hit && !S.hit) { S.hits++; S.log.push({ t: S.t, k: 'hit' }); }
  S.hit = hit; S.x = nx; S.y = ny;
  // el robot líder (segueix el seu camí)
  if (S.lead && W.leader) { const L = W.leader, p = L.path; let step = (L.speed || 10) * dt;
    if (!(L.stopAt && S.t > L.stopAt) && !(L.wait && S.t < L.wait)) while (step > 0 && S.lead.i < p.length - 1 + (L.loop ? 1 : 0)) { const b = p[(S.lead.i + 1) % p.length], dx = b[0] - S.lead.x, dy = b[1] - S.lead.y, d = Math.hypot(dx, dy);
      if (d <= step) { S.lead.x = b[0]; S.lead.y = b[1]; step -= d; S.lead.i++; if (L.loop && S.lead.i >= p.length) S.lead.i = 0; } else { S.lead.x += dx / d * step; S.lead.y += dy / d * step; S.lead.h = (Math.atan2(dx, -dy) * 180 / Math.PI + 360) % 360; step = 0; } } }
  // rastre i superfície netejada (aspirador): cel·les de 5 cm
  const last = S.trail[S.trail.length - 1]; if (Math.hypot(S.x - last[0], S.y - last[1]) > 1.5) S.trail.push([S.x, S.y]);
  S.cover.add(Math.floor(S.x / 5) + ',' + Math.floor(S.y / 5));
  if (W.ring && Math.hypot(S.x - W.ring.x, S.y - W.ring.y) > W.ring.r) S.out = true;
  for (const o of S.objs) if (W.ring && !o.out && Math.hypot(o.x - W.ring.x, o.y - W.ring.y) > W.ring.r + o.r * .3) { o.out = true; o.gone = true; S.log.push({ t: S.t, k: 'out' }); }   // ha caigut del dohyo: ja no hi és
  // punts de control d'un circuit (en ordre)
  const cps = (W.goal.find(g => g.k === 'cps') || {}).pts; if (cps && S.cps < cps.length && Math.hypot(S.x - cps[S.cps][0], S.y - cps[S.cps][1]) < ((W.goal.find(g => g.k === 'cps') || {}).r || 7)) { S.cps++; S.log.push({ t: S.t, k: 'cp', n: S.cps }); }
  if (Math.abs(S.vl) < .3 && Math.abs(S.vr) < .3) S.stopT += dt; else S.stopT = 0;
  // l'entorn canvia (es fa fosc, s'encén el focus…)
  if (W.env) for (const e of W.env) if (!e.done && S.t >= e.t) { if (!S.envDone) S.envDone = new Set(); if (!S.envDone.has(e)) { S.envDone.add(e); if ('dark' in e) S.dark = e.dark; if ('lamp' in e && S.lamp) S.lamp.on = e.lamp; } }
  if (S.mxT && S.t >= S.mxT) { S.mxT = null; }
}
/* ---------- Programes ----------
   Un programa és { start: [blocs], forever: [blocs], A: [blocs], B: [blocs] }. Blocs:
   run {m: all|L|R, d: fwd|back, s} · stop {m} · wait {ms} · car {side: all|L|R, c} · under {i: all|1-4, c} · note {n, bt} · icon {ic} · num {v} · clear
   patrol {on} · set {v, a} · change {v, a} · calc {v, a, op, y} · rep {n, b} · while {c, b} · until {c, b} · if {c, b, e}
   Els números poden ser operands: {r: 'dist'|'L'|'M'|'R'|'aL'|'aM'|'aR'|'lL'|'lR'|'A'|'B'|'var', v} */
function* roboRun(W, S, list, depth = 0) {
  for (const b of list || []) {
    if (S.crash || S.ended) return;
    if (++S.steps > 200000) { S.crash = 'long'; return; }
    yield { b };
    switch (b.k) {
      case 'run': { const v = roboWheel(b.d, roboVal(W, S, b.s)); S.patrol = false; if (b.m !== 'R') S.tl = v; if (b.m !== 'L') S.tr = v; break; }
      case 'stop': if (b.m !== 'R') S.tl = 0; if (b.m !== 'L') S.tr = 0; S.patrol = false; break;
      case 'wait': yield { wait: Math.max(0, roboVal(W, S, b.ms)) }; break;
      case 'car': { const c = b.c === 'black' ? null : b.c; if (b.side !== 'R') S.car.L = c; if (b.side !== 'L') S.car.R = c; S.log.push({ t: S.t, k: 'car', c: b.c }); break; }
      case 'under': { const c = b.c === 'black' ? null : b.c; if (b.i === 'all') S.under = [c, c, c, c]; else S.under[(+b.i || 1) - 1] = c; break; }
      case 'note': S.notes.push(b.n); S.sound = { n: b.n, t: S.t }; S.log.push({ t: S.t, k: 'note', n: b.n }); yield { wait: RBEATS[b.bt || '1'] || 500, note: b.n }; break;
      case 'icon': S.mx = RICONS[b.ic] || RICONS.heart; S.mxN = null; S.log.push({ t: S.t, k: 'icon', ic: b.ic }); yield { wait: 400 }; break;
      case 'num': { const n = Math.round(roboVal(W, S, b.v)); S.mxN = String(n); S.mx = null; S.log.push({ t: S.t, k: 'num', n }); yield { wait: S.mxN.length < 2 ? 400 : S.mxN.length * 420 }; break; }
      case 'clear': S.mx = null; S.mxN = null; break;
      case 'patrol': S.patrol = !!b.on; if (!b.on) { S.tl = 0; S.tr = 0; } break;
      case 'set': S.vars[b.v] = roboVal(W, S, b.a); break;
      case 'change': S.vars[b.v] = (S.vars[b.v] || 0) + roboVal(W, S, b.a); break;
      case 'calc': { const x = roboVal(W, S, b.a), y = roboVal(W, S, b.y); S.vars[b.v] = b.op === '+' ? x + y : b.op === '-' ? x - y : b.op === '×' ? x * y : b.op === '÷' ? (y ? Math.round(x / y) : 0) : x; break; }
      case 'rep': for (let i = 0; i < (roboVal(W, S, b.n) || 0); i++) { yield* roboRun(W, S, b.b, depth); if (S.crash || S.ended) return; yield { wait: 0 }; } break;
      case 'while': while (roboCond(W, S, b.c)) { yield* roboRun(W, S, b.b, depth); if (S.crash || S.ended) return; yield { wait: 0 }; } break;
      case 'until': while (!roboCond(W, S, b.c)) { yield* roboRun(W, S, b.b, depth); if (S.crash || S.ended) return; yield { wait: 0 }; } break;
      case 'if': yield* roboRun(W, S, roboCond(W, S, b.c) ? b.b : b.e, depth); break;
    }
  }
}
function* roboForever(W, S, list) { for (;;) { yield* roboRun(W, S, list); if (S.crash || S.ended) return; yield { wait: ROBO.FOREVER_MS }; } }
// planificador: cada guió és un fil; el temps avança a passos de 10 ms
function roboMachine(W, prog) {
  const S = roboSim(W); S.steps = 0;
  const M = { W, S, prog, fibers: [], cur: {} };
  const add = (id, gen) => M.fibers.push({ id, gen, until: 0, done: false });
  // «en iniciar» primer; «per sempre» comença quan acaba «en iniciar» (com a MakeCode)
  M.startF = { id: 'start', gen: roboRun(W, S, prog.start || []), until: 0, done: false }; M.fibers.push(M.startF);
  M.foreverPending = !!(prog.forever && prog.forever.length);
  M.press = b => { if (!prog[b] || !prog[b].length) return; S.btn[b] = 1; S.btnT = S.t; M.fibers.push({ id: b, gen: roboRun(W, S, prog[b]), until: S.t, done: false }); S.log.push({ t: S.t, k: 'press', b }); };
  M.tick = () => {
    const now = S.t;
    for (const f of M.fibers) {
      if (f.done || f.until > now + 1e-9) continue;
      let guard = 0;
      for (;;) { const r = f.gen.next(); if (r.done) { f.done = true; M.cur[f.id] = null; break; } if (r.value.b) M.cur[f.id] = r.value.b; if (r.value.wait !== undefined) { f.until = now + r.value.wait / 1000; if (r.value.wait > 0 || ++guard > 50) break; } if (++guard > 4000) { S.crash = 'busy'; f.done = true; break; } }
      if (S.crash) break;
    }
    if (M.foreverPending && M.startF.done) { M.foreverPending = false; M.fibers.push({ id: 'forever', gen: roboForever(W, S, prog.forever), until: now, done: false }); }
    // els botons de la prova: una còpia per execució (si no, en tornar a executar ja estarien «premuts»)
    if (!M.pq) M.pq = (W.press || []).map(p => ({ ...p }));
    for (const p of M.pq) if (!p.done && S.t >= p.t) { p.done = true; M.press(p.b); }
    if (S.btn.A && S.t - S.btnT > .15) S.btn.A = 0; if (S.btn.B && S.t - S.btnT > .15) S.btn.B = 0;
    roboPhys(W, S, ROBO.DT); S.t += ROBO.DT;
  };
  M.idle = () => M.fibers.every(f => f.done) && !M.foreverPending && !S.patrol && Math.abs(S.tl) < .01 && Math.abs(S.tr) < .01 && Math.abs(S.vl) < .2 && Math.abs(S.vr) < .2;
  return M;
}
/* ---------- Comprovar la missió ----------
   goal: [{ k: 'zone', id, stop? }, { k: 'nohit' }, { k: 'near', min, max } (distància final a l'obstacle de davant),
     { k: 'cps', pts, r } (passar pels punts en ordre), { k: 'out', n? } (treure objectes del dohyo), { k: 'inring' },
     { k: 'cover', min } (fracció de la superfície netejada), { k: 'push', obj, id } (objecte dins una zona),
     { k: 'at', t, car?, moving?, icon?, under?, zone? } (estat en un moment), { k: 'notes', n: ['C4',…] }, { k: 'icon', ic },
     { k: 'stopped' }, { k: 'time', max }, { k: 'dist', min } (recorregut mínim), { k: 'follow', min, max, from? } (a distància del líder),
     { k: 'var', v, eq }, { k: 'face', h, tol } (mirant cap a…), { k: 'moved', min } ] */
const roboRunLen = S => S.trail.reduce((a, p, i) => i ? a + Math.hypot(p[0] - S.trail[i - 1][0], p[1] - S.trail[i - 1][1]) : 0, 0);
function roboEval(W, S, final) {
  const bad = [];
  for (const g of W.goal) {
    const z = g.id ? W.zones.find(q => q.id === g.id) : null;
    switch (g.k) {
      case 'zone': if (!z || !roboInZone(S.x, S.y, z) || (g.stop && S.stopT < .3)) bad.push(g); break;
      case 'nohit': if (S.hits) bad.push(g); break;
      case 'near': { const d = roboDist(W, S); if (d < (g.min ?? 0) || d > (g.max ?? 999) || S.stopT < .3) bad.push(g); break; }
      case 'cps': if (S.cps < g.pts.length) bad.push(g); break;
      case 'out': if (S.objs.filter(o => o.out).length < (g.n ?? S.objs.length)) bad.push(g); break;
      case 'inring': if (S.out) bad.push(g); break;
      case 'cover': { const tot = Math.floor(W.w / 5) * Math.floor(W.h / 5) - (g.minus || 0); if (S.cover.size / tot < g.min) bad.push(g); break; }
      case 'push': { const o = S.objs[g.obj || 0]; if (!o || !roboInZone(o.x, o.y, z)) bad.push(g); break; }
      case 'at': { const e = (S.snap || {})[g.t]; if (!e) { bad.push(g); break; }
        if (g.car !== undefined && (e.car.L || 'black') !== g.car && (e.car.R || 'black') !== g.car) bad.push(g);
        else if (g.moving !== undefined && e.moving !== g.moving) bad.push(g);
        else if (g.icon !== undefined && e.icon !== g.icon) bad.push(g);
        else if (g.zone !== undefined && !roboInZone(e.x, e.y, W.zones.find(q => q.id === g.zone))) bad.push(g);
        else if (g.under !== undefined && (e.under[0] || 'black') !== g.under) bad.push(g); break; }
      case 'notes': if (S.notes.join() !== g.n.join()) bad.push(g); break;
      case 'icon': { const last = [...S.log].reverse().find(l => l.k === 'icon'); if (!last || last.ic !== g.ic) bad.push(g); break; }
      case 'stopped': if (S.stopT < .3 || S.patrol) bad.push(g); break;
      // el temps es compta fins que la resta de la missió es compleix (doneT); si encara no s'ha fixat, mirem si es compleix ara mateix
      case 'time': { const t = S.doneT ?? (!roboEval({ ...W, goal: W.goal.filter(q => q.k !== 'time') }, S, final).length ? S.t : undefined); if (t === undefined || t > g.max) bad.push(g); break; }
      case 'dist': if (roboRunLen(S) < g.min) bad.push(g); break;
      case 'follow': { const f = S.follow || { ok: 0, n: 0 }; if (!f.n || f.ok / f.n < (g.frac || .85)) bad.push(g); break; }
      case 'var': if ((S.vars[g.v] || 0) !== g.eq) bad.push(g); break;
      case 'face': { const d = Math.abs(((S.h - g.h) % 360 + 540) % 360 - 180); if (d > (g.tol || 15)) bad.push(g); break; }
      case 'car': if ((S.car.L || 'black') !== g.c && (S.car.R || 'black') !== g.c) bad.push(g); break;
    }
  }
  return bad;
}
// fotos de l'estat en els moments que demana la missió (per a les comprovacions «at»)
function roboSnap(W, S) {
  for (const g of W.goal) if (g.k === 'at' && Math.abs(S.t - g.t) < ROBO.DT / 2 + 1e-9) { S.snap = S.snap || {};
    S.snap[g.t] = { car: { ...S.car }, moving: Math.abs(S.vl) + Math.abs(S.vr) > .6, icon: [...S.log].reverse().find(l => l.k === 'icon')?.ic, x: S.x, y: S.y, under: S.under.slice() }; }
  const fg = W.goal.find(g => g.k === 'follow'); if (fg && S.lead && S.t >= (fg.from || 2)) { S.follow = S.follow || { ok: 0, n: 0 }; const d = Math.hypot(S.lead.x - S.x, S.lead.y - S.y) - 2 * ROBO.R; S.follow.n++; if (d >= fg.min && d <= fg.max) S.follow.ok++; }
}
// fins quan s'executa: fins al temps màxim; o abans, si la missió ja està complerta i el robot quiet, o si el programa ha acabat i el robot és quiet
function roboShouldEnd(M) {
  const { W, S } = M; if (S.crash) return 'crash'; if (S.t >= W.time - 1e-9) return 'time';
  if (W.ring && S.out) return 'out';
  { const tg = W.goal.find(g => g.k === 'time'); if (tg && S.doneT === undefined && S.t > tg.max + .5) return 'late'; }   // ja ha passat el temps de la contrarellotge
  if (M.idle() && S.t > .3 && (S.stopT > .4 || !W.goal.some(g => g.stop || g.k === 'stopped' || g.k === 'near')) && !(M.pq || W.press || []).some(p => !p.done) && !(W.env || []).some(e => e.t > S.t) && !W.goal.some(g => g.k === 'at' && g.t > S.t)) return 'idle';
  if (W.goal.some(g => !['nohit', 'inring', 'time'].includes(g.k)) && !W.goal.some(g => ['at', 'follow', 'cover', 'dist', 'notes'].includes(g.k)) && S.t > .5 && !roboEval(W, S).length) { S.doneT = S.doneT ?? S.t; if (S.stopT > .4 || !W.goal.some(g => g.stop || g.k === 'stopped' || g.k === 'near')) return 'goal'; }
  return null;
}
// executar sense dibuixar (validació i proves): torna { S, bad, why }
function roboHeadless(spec, prog) {
  const W = roboWorld(spec); if (W.press) W.press = W.press.map(p => ({ ...p })); const M = roboMachine(W, prog);
  let why = null; for (let i = 0; i < 100000 && !(why = roboShouldEnd(M)); i++) { roboSnap(W, M.S); M.tick(); }
  if (M.S.doneT === undefined && !roboEval(W, M.S).length) M.S.doneT = M.S.t;
  return { S: M.S, bad: roboEval(W, M.S, true), why, W };
}
function roboAlts(spec) { return spec.alts && spec.alts.length ? [spec, ...spec.alts.map(a => ({ ...spec, ...a, alts: null }))] : [spec]; }
function roboSolves(spec, prog) { for (const [i, sp] of roboAlts(spec).entries()) { const r = roboHeadless(sp, prog); if (r.bad.length || r.why === 'crash') return { i, bad: r.bad, why: r.why, S: r.S }; } return null; }

/* ---------- Programes en text (per als reptes i les solucions) ----------
   RQ('start{ run:all,fwd,150 wait:1000 stop:all } forever{ if:dist<15{ stop:all } else{ run:all,fwd,120 } } A{ icon:heart }')
   operands: números, dist, L M R (línia, 0/1), aL aM aR (ADC), lL lR (llum), A B (botó), $x (variable x), t (temps en ms)
   condicions: a<b a>b a=b a!=b a<=b a>=b, i també a<b&&c=1 o a<b||c=1 */
function roboOp(t) { if (/^-?\d+(\.\d+)?$/.test(t)) return +t; if (t === 'dist') return { r: 'dist' }; if (['L', 'M', 'R', 'aL', 'aM', 'aR', 'lL', 'lR', 'A', 'B'].includes(t)) return { r: t }; if (t === 't') return { r: 'time' }; if (t[0] === '$') return { r: 'var', v: t.slice(1) }; throw new Error('RQ: operand desconegut «' + t + '»'); }
function roboCondP(t) {
  // «o» lliga menys que «i» (com a MakeCode): L=1||M=1&&R=1 és L=1 || (M=1 && R=1); més de dues parts s'encadenen
  const i = t.indexOf('||'); if (i >= 0) return { or: [roboCondP(t.slice(0, i)), roboCondP(t.slice(i + 2))] };
  const j = t.indexOf('&&'); if (j >= 0) return { and: [roboCondP(t.slice(0, j)), roboCondP(t.slice(j + 2))] };
  const m = t.match(/^(.+?)(<=|>=|!=|<|>|=)(.+)$/); if (!m) throw new Error('RQ: condició «' + t + '»');
  return { a: roboOp(m[1]), op: { '<=': '≤', '>=': '≥', '!=': '≠' }[m[2]] || m[2], b: roboOp(m[3]) };
}
function RQ(src) {
  if (typeof src === 'object' && !Array.isArray(src)) return JSON.parse(JSON.stringify(src));
  const tok = String(src).match(/[{}]|[^\s{}]+/g) || []; let i = 0;
  const body = () => { if (tok[i] !== '{') throw new Error('RQ: falta «{»'); i++; const l = list(); if (tok[i] !== '}') throw new Error('RQ: falta «}»'); i++; return l; };
  const list = () => { const out = [];
    while (i < tok.length && tok[i] !== '}') { const t = tok[i++], j = t.indexOf(':'), k = j < 0 ? t : t.slice(0, j), a = j < 0 ? [] : t.slice(j + 1).split(','); let b;
      switch (k) {
        case 'run': b = { k, m: a[0] || 'all', d: a[1] || 'fwd', s: roboOp(a[2] || '150') }; break;
        case 'stop': b = { k, m: a[0] || 'all' }; break;
        case 'wait': b = { k, ms: roboOp(a[0] || '1000') }; break;
        case 'car': b = { k, side: a[1] ? a[0] : 'all', c: a[1] || a[0] || 'red' }; break;
        case 'under': b = { k, i: a[1] ? a[0] : 'all', c: a[1] || a[0] || 'red' }; break;
        case 'note': b = { k, n: a[0] || 'C4', bt: a[1] || '1' }; break;
        case 'icon': b = { k, ic: a[0] || 'heart' }; break;
        case 'num': b = { k, v: roboOp(a[0] || 'dist') }; break;
        case 'clear': b = { k }; break;
        case 'patrol': b = { k, on: a[0] !== 'off' }; break;
        case 'set': b = { k, v: a[0], a: roboOp(a[1] || '0') }; break;
        case 'change': b = { k, v: a[0], a: roboOp(a[1] || '1') }; break;
        case 'calc': b = { k, v: a[0], a: roboOp(a[1]), op: a[2] === '*' ? '×' : a[2] === '/' ? '÷' : a[2], y: roboOp(a[3]) }; break;
        case 'rep': b = { k, n: roboOp(a[0] || '4'), b: body() }; break;
        case 'while': case 'until': b = { k, c: roboCondP(t.slice(j + 1)), b: body() }; break;
        case 'if': b = { k, c: roboCondP(t.slice(j + 1)), b: body(), e: null }; if (tok[i] === 'else') { i++; b.e = body(); } break;
        default: throw new Error('RQ: bloc desconegut «' + t + '»');
      }
      out.push(b); }
    return out; };
  const P = { start: [], forever: [], A: [], B: [] };
  while (i < tok.length) { const h = tok[i++]; if (!(h in P)) throw new Error('RQ: guió desconegut «' + h + '» (start, forever, A, B)'); P[h] = body(); }
  return P;
}

/* ---------- Del simulador a MakeCode (JavaScript de l'extensió «Maqueen», V5) ---------- */
// les variables que fa servir un programa (per ensenyar-les al tauler quan el pas no les diu)
function roboProgVars(P) { const v = new Set(), w = l => (l || []).forEach(b => { if (typeof b.v === 'string' && ['set', 'change', 'calc'].includes(b.k)) v.add(b.v); w(Array.isArray(b.b) ? b.b : null); w(b.e); }); Object.values(P || {}).forEach(w); return [...v]; }
function roboMC(prog) {
  const vars = new Set(), walk = l => (l || []).forEach(b => { if (b.v && typeof b.v === 'string') vars.add(b.v); const o = [b.s, b.ms, b.a, b.y, b.n, b.v]; o.forEach(x => x && x.r === 'var' && vars.add(x.v)); const c = x => { if (!x) return; if (x.and || x.or) (x.and || x.or).forEach(c); else [x.a, x.b].forEach(y => y && y.r === 'var' && vars.add(y.v)); }; c(b.c); walk(b.b); walk(b.e); });
  Object.values(prog).forEach(walk);
  const op = v => typeof v === 'number' ? String(v) : !v ? '0' : v.r === 'dist' ? 'Maqueen_V5.Ultrasonic()' : ['L', 'M', 'R'].includes(v.r) ? `Maqueen_V5.readPatrol(Maqueen_V5.Patrol.${v.r})` : ['aL', 'aM', 'aR'].includes(v.r) ? `Maqueen_V5.readPatrolData(Maqueen_V5.Patrol.${v.r.slice(1)})`
    : v.r === 'lL' ? 'Maqueen_V5.readLightIntensity(Maqueen_V5.DirectionType2.Left)' : v.r === 'lR' ? 'Maqueen_V5.readLightIntensity(Maqueen_V5.DirectionType2.Right)' : v.r === 'A' ? 'input.buttonIsPressed(Button.A)' : v.r === 'B' ? 'input.buttonIsPressed(Button.B)' : v.r === 'var' ? v.v : v.r === 'time' ? 'input.runningTime()' : '0';
  const cond = c => c.and ? `${cond(c.and[0])} && ${cond(c.and[1])}` : c.or ? `${cond(c.or[0])} || ${cond(c.or[1])}` : `${op(c.a)} ${{ '=': '==', '≠': '!=', '≤': '<=', '≥': '>=' }[c.op] || c.op} ${op(c.b)}`;
  const M = { all: 'All', L: 'M1', R: 'M2' }, SIDE = { all: 'All', L: 'Left', R: 'Right' }, cap = s => s[0].toUpperCase() + s.slice(1);
  const NOTE = { C4: 'Note.C', D4: 'Note.D', E4: 'Note.E', F4: 'Note.F', G4: 'Note.G', A4: 'Note.A', B4: 'Note.B', C5: 'Note.C5', D5: 'Note.D5', E5: 'Note.E5', F5: 'Note.F5', G5: 'Note.G5' };
  const BEAT = { '1/4': 'BeatFraction.Quarter', '1/2': 'BeatFraction.Half', '1': 'BeatFraction.Whole', '2': 'BeatFraction.Double', '4': 'BeatFraction.Breve' };
  let strip = false;
  const L1 = (l, ind) => (l || []).map(b => ind + line(b, ind)).join('\n');
  const line = (b, ind) => { switch (b.k) {
    case 'run': return `Maqueen_V5.motorRun(Maqueen_V5.Motors.${M[b.m]}, Maqueen_V5.Dir.${b.d === 'back' ? 'CCW' : 'CW'}, ${typeof b.s === 'number' ? op(b.s) : `Math.constrain(${op(b.s)}, 0, 255)`})`;   // el robot de veritat no limita la velocitat: una calculada es fixa entre 0 i 255, com al simulador
    case 'stop': return `Maqueen_V5.motorStop(Maqueen_V5.Motors.${M[b.m]})`;
    case 'wait': return `basic.pause(${op(b.ms)})`;
    case 'car': return b.c === 'black' ? `Maqueen_V5.setRgbOff(Maqueen_V5.DirectionType.${SIDE[b.side]})` : `Maqueen_V5.setRgblLed(Maqueen_V5.DirectionType.${SIDE[b.side]}, Maqueen_V5.CarLightColors.${cap(b.c)})`;
    case 'under': strip = true; return b.i === 'all' ? `strip.showColor(neopixel.colors(NeoPixelColors.${cap(b.c)}))` : `strip.setPixelColor(${(+b.i || 1) - 1}, neopixel.colors(NeoPixelColors.${cap(b.c)}))\n${ind}strip.show()`;
    case 'note': return `music.playTone(${NOTE[b.n] ? `${NOTE[b.n].replace('Note.', 'Note.')}` : 'Note.C'}, music.beat(${BEAT[b.bt || '1']}))`;
    case 'icon': return `basic.showIcon(IconNames.${RICON_MC[b.ic] || 'Heart'})`;
    case 'num': return `basic.showNumber(${op(b.v)})`;
    case 'clear': return 'basic.clearScreen()';
    case 'patrol': return `Maqueen_V5.patrolling(Maqueen_V5.Patrolling.${b.on ? 'ON' : 'OFF'})`;
    case 'set': return `${b.v} = ${op(b.a)}`;
    case 'change': return `${b.v} += ${op(b.a)}`;
    case 'calc': return `${b.v} = ${b.op === '÷' ? `Math.idiv(${op(b.a)}, ${op(b.y)})` : `${op(b.a)} ${b.op === '×' ? '*' : b.op} ${op(b.y)}`}`;
    case 'rep': return `for (let index = 0; index < ${op(b.n)}; index++) {\n${L1(b.b, ind + '    ')}\n${ind}}`;
    case 'while': return `while (${cond(b.c)}) {\n${L1(b.b, ind + '    ')}\n${ind}}`;
    case 'until': return `while (!(${cond(b.c)})) {\n${L1(b.b, ind + '    ')}\n${ind}}`;
    case 'if': return `if (${cond(b.c)}) {\n${L1(b.b, ind + '    ')}\n${ind}}${b.e ? ` else {\n${L1(b.e, ind + '    ')}\n${ind}}` : ''}`;
  } return ''; };
  const out = [];
  const st = L1(prog.start, ''), fe = L1(prog.forever, '    '), a = L1(prog.A, '    '), bb = L1(prog.B, '    ');
  out.push('Maqueen_V5.I2CInit()');
  if (strip) out.push('let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)');
  for (const v of vars) out.push(`let ${v} = 0`);
  if (st) out.push(st);
  if (a) out.push(`input.onButtonPressed(Button.A, function () {\n${a}\n})`);
  if (bb) out.push(`input.onButtonPressed(Button.B, function () {\n${bb}\n})`);
  if (fe) out.push(`basic.forever(function () {\n${fe}\n})`);
  return out.join('\n');
}

/* =====================================================================================================================
   Interfície: arena (3D si es pot, si no 2D), tauler de sensors amb la micro:bit, editor de blocs per tocs i execució
   ===================================================================================================================== */
const RB_CAT = { run: 'mov', stop: 'mov', patrol: 'mov', wait: 'loop', rep: 'loop', while: 'loop', until: 'loop', if: 'cond', car: 'art', under: 'art', icon: 'art', num: 'art', clear: 'art', note: 'snd', set: 'var', change: 'var', calc: 'var' };
const RB_ICO = {
  run: '<svg viewBox="0 0 24 24"><circle cx="7" cy="17" r="4" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="17" cy="17" r="4" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M4 11h16l-2-5H8z" fill="currentColor"/></svg>',
  stop: '<svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="3" fill="currentColor"/></svg>',
  patrol: '<svg viewBox="0 0 24 24"><path d="M12 2c-4 6-4 14 0 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="16" cy="12" r="3.4" fill="currentColor"/></svg>',
  wait: '<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 9v4l3 2M9 2h6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  rep: BIT_ICO.rep, while: BIT_ICO.until, until: BIT_ICO.until, if: BIT_ICO.if,
  car: '<svg viewBox="0 0 24 24"><path d="M3 10h4l2-4h6l2 4h4v7H3z" fill="currentColor"/><circle cx="6" cy="13" r="1.6" fill="#fff"/><circle cx="18" cy="13" r="1.6" fill="#fff"/></svg>',
  under: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="7" rx="3" fill="currentColor"/><path d="M6 17l-1 3M12 17v3M18 17l1 3" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  icon: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><g fill="currentColor"><circle cx="8" cy="8" r="1.6"/><circle cx="16" cy="8" r="1.6"/><circle cx="7" cy="14" r="1.6"/><circle cx="12" cy="16" r="1.6"/><circle cx="17" cy="14" r="1.6"/></g></svg>',
  num: '<svg viewBox="0 0 24 24"><text x="12" y="17" text-anchor="middle" font-size="14" font-weight="900" fill="currentColor">12</text><rect x="2" y="3" width="20" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  clear: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  note: BIT_ICO.note, set: BIT_ICO.setv, change: BIT_ICO.add, calc: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M7 9h4M9 7v4M13 9h4M7 15l4 0M14 14l3 3M17 14l-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
};
const RT = {
  all: ['els dos', 'los dos'], L: ['esquerre', 'izquierdo'], R: ['dret', 'derecho'], fwd: ['endavant', 'adelante'], back: ['enrere', 'atrás'],
  sideAll: ['tots dos', 'los dos'], sideL: ["l'esquerre", 'el izquierdo'], sideR: ['el dret', 'el derecho'], on: ['activat', 'activado'], off: ['desactivat', 'desactivado']
};
const RTX = k => tx(RT[k].join('|'));
const ROP_N = { dist: ['distància (cm)', 'distancia (cm)'], L: ['línia L', 'línea L'], M: ['línia M', 'línea M'], R: ['línia R', 'línea R'], aL: ['línia L (ADC)', 'línea L (ADC)'], aM: ['línia M (ADC)', 'línea M (ADC)'], aR: ['línia R (ADC)', 'línea R (ADC)'], lL: ['llum esquerra', 'luz izquierda'], lR: ['llum dreta', 'luz derecha'], A: ['botó A premut', 'botón A pulsado'], B: ['botó B premut', 'botón B pulsado'], time: ['temps (ms)', 'tiempo (ms)'] };
const rbVName = (v, st) => { const n = st && st.varNames && st.varNames[v]; return n ? tx(n) : v; };
const rbOpTxt = (v, st) => typeof v === 'number' ? String(v) : !v ? '0' : v.r === 'var' ? rbVName(v.v, st) : tx(ROP_N[v.r].join('|'));
const rbCondTxt = (c, st) => !c ? '?' : c.and ? `${rbCondTxt(c.and[0], st)} ${L('i', 'y')} ${rbCondTxt(c.and[1], st)}` : c.or ? `${rbCondTxt(c.or[0], st)} ${L('o', 'o')} ${rbCondTxt(c.or[1], st)}` : `${rbOpTxt(c.a, st)} ${c.op} ${rbOpTxt(c.b, st)}`;
// l'etiqueta d'un bloc; f(camí, text) dibuixa un camp que es pot tocar per canviar-lo (a l'editor)
function rbLabel(b, f = (p, t) => `<b>${t}</b>`, st) {
  const col = c => `<i class="rdot" style="background:${RCOL[c] || '#1B2240'}"></i>${tx(RCOL_N[c].join('|'))}`;
  const cond = (c, p) => c.and || c.or ? `${cond((c.and || c.or)[0], p + (c.and ? '.and.0' : '.or.0'))} ${f(p + '.join', c.and ? L('i', 'y') : L('o', 'o'))} ${cond((c.and || c.or)[1], p + (c.and ? '.and.1' : '.or.1'))}` : `${f(p + '.a', rbOpTxt(c.a, st))} ${f(p + '.op', c.op)} ${f(p + '.b', rbOpTxt(c.b, st))}`;
  switch (b.k) {
    case 'run': return `${L('motor', 'motor')} ${f('m', RTX(b.m))} ${f('d', RTX(b.d))} ${L('a velocitat', 'a velocidad')} ${f('s', rbOpTxt(b.s, st))}`;
    case 'stop': return `${L('atura el motor', 'para el motor')} ${f('m', RTX(b.m))}`;
    case 'patrol': return `${L('seguiment de línia', 'seguimiento de línea')} ${f('on', RTX(b.on ? 'on' : 'off'))}`;
    case 'wait': return `${L('espera', 'espera')} ${f('ms', rbOpTxt(b.ms, st))} ms`;
    case 'car': return `${L('llums del cotxe', 'luces del coche')} ${f('side', RTX('side' + b.side[0].toUpperCase() + b.side.slice(1)))} ${f('c', col(b.c))}`;
    case 'under': return `${L('llums de sota', 'luces de abajo')} ${f('i', b.i === 'all' ? L('totes', 'todas') : b.i)} ${f('c', col(b.c))}`;
    case 'note': return `${L('toca la nota', 'toca la nota')} ${f('n', RNOTE_N[b.n] || b.n)} ${L('durant', 'durante')} ${f('bt', b.bt || '1')} ${L('temps', 'tiempo')}`;
    case 'icon': return `${L('mostra la icona', 'muestra el icono')} ${f('ic', `<span class="rmx sm">${rbMx(RICONS[b.ic])}</span>${tx(RICON_N[b.ic].join('|'))}`)}`;
    case 'num': return `${L('mostra el número', 'muestra el número')} ${f('v', rbOpTxt(b.v, st))}`;
    case 'clear': return L('esborra la pantalla', 'borra la pantalla');
    case 'set': return `${L('posa', 'pon')} ${f('v', rbVName(b.v, st))} ${L('a', 'a')} ${f('a', rbOpTxt(b.a, st))}`;
    case 'change': return `${L('canvia', 'cambia')} ${f('v', rbVName(b.v, st))} ${L('en', 'en')} ${f('a', rbOpTxt(b.a, st))}`;
    case 'calc': return `${L('posa', 'pon')} ${f('v', rbVName(b.v, st))} ${L('a', 'a')} ${f('a', rbOpTxt(b.a, st))} ${f('op', b.op)} ${f('y', rbOpTxt(b.y, st))}`;
    case 'rep': return `${L('repeteix', 'repite')} ${f('n', rbOpTxt(b.n, st))} ${L('vegades', 'veces')}`;
    case 'while': return `${L('mentre', 'mientras')} ${cond(b.c, 'c')}`;
    case 'until': return `${L('repeteix fins que', 'repite hasta que')} ${cond(b.c, 'c')}`;
    case 'if': return `${L('si', 'si')} ${cond(b.c, 'c')}`;
  }
  return b.k;
}
const rbMx = rows => { const r = (rows || '00000 00000 00000 00000 00000').split(' '); return `<svg viewBox="0 0 5 5">${r.map((l, y) => [...l].map((c, x) => `<rect x="${x + .12}" y="${y + .12}" width=".76" height=".76" rx=".2" fill="${c === '1' ? '#FF3B30' : '#3A1F24'}"/>`).join('')).join('')}</svg>`; };
const RB_HATS = { start: ['en iniciar', 'al iniciar'], forever: ['per sempre', 'para siempre'], A: ['en prémer el botó A', 'al pulsar el botón A'], B: ['en prémer el botó B', 'al pulsar el botón B'] };
const rbNew = (k, st) => {
  const v0 = (st && st.vars && st.vars[0]) || 'v';
  return { run: { k, m: 'all', d: 'fwd', s: 150 }, stop: { k, m: 'all' }, patrol: { k, on: true }, wait: { k, ms: 1000 }, car: { k, side: 'all', c: 'red' }, under: { k, i: 'all', c: 'blue' }, note: { k, n: 'C4', bt: '1' }, icon: { k, ic: 'heart' }, num: { k, v: { r: 'dist' } }, clear: { k },
    set: { k, v: v0, a: 0 }, change: { k, v: v0, a: 1 }, calc: { k, v: v0, a: { r: 'dist' }, op: '×', y: 2 }, rep: { k, n: 4, b: [] }, while: { k, c: { a: { r: 'dist' }, op: '>', b: 15 }, b: [] }, until: { k, c: { a: { r: 'dist' }, op: '<', b: 15 }, b: [] }, if: { k, c: { a: { r: 'dist' }, op: '<', b: 15 }, b: [], e: null } }[k];
};
const rbClone = p => JSON.parse(JSON.stringify(p, (k, v) => k === '_id' ? undefined : v));
const rbCount = l => (l || []).reduce((n, b) => n + 1 + rbCount(b.b) + rbCount(b.e), 0);
const rbCountAll = P => Object.values(P).reduce((n, l) => n + rbCount(l), 0);

/* ---------- Estat de l'escenari (RB): només n'hi ha un de visible alhora ---------- */
let RB = null, RB_ID = 0;
function rbMake(st, o = {}) {
  const spec = st.w, alts = roboAlts(spec);
  const scripts = st.scripts || ['start', 'forever'];
  const prog = { start: [], forever: [], A: [], B: [] }; if (o.prog || st.prog) Object.assign(prog, rbClone(RQ(o.prog || st.prog)));
  RB = { st, spec, alts, altI: 0, altOk: new Set(), W: roboWorld(alts[0]), prog, scripts, pal: st.pal || ['run', 'stop', 'wait'], mode: o.mode || 'edit', ops: st.ops || ['dist'], vars: st.vars || ((st.pal || []).some(k => ['set', 'change', 'calc'].includes(k)) ? ['v'] : roboProgVars(prog)),
    cur: null, sel: null, run: false, speed: 1, solved: false, tries: 0, onDone: o.onDone || null, onFail: o.onFail || null, M: null, view: o.view || 'auto', max: st.max || 0, lists: [], ids: {} };
  RB.cur = { l: prog[scripts[scripts.length - 1]] || prog.start, i: 0 };
  RB.cur.i = RB.cur.l.length;
  RB.M = roboMachine(RB.W, prog);
  return RB;
}
function rbIndex() { RB.lists = []; RB.ids = {}; const walk = l => { RB.lists.push(l); for (const b of l) { if (!b._id) b._id = ++RB_ID; RB.ids[b._id] = { b, list: l }; if (b.b && Array.isArray(b.b)) walk(b.b); if (b.e) walk(b.e); } }; RB.scripts.forEach(s => walk(RB.prog[s])); }
const rbLid = l => RB.lists.indexOf(l);
function rbBlock(b, ro) {
  const cont = ['rep', 'while', 'until', 'if'].includes(b.k), sel = RB.sel === b;
  const f = ro ? undefined : (p, t) => `<button class="rf" onclick="event.stopPropagation();rbField(${b._id},'${p}')">${t}</button>`;
  return `<div class="tb rb c-${RB_CAT[b.k]}${sel ? ' sel' : ''}${cont ? ' cont' : ''}" id="rb${b._id}"><div class="tbh" ${ro ? '' : `onclick="rbSel(${b._id})"`}><span class="tbi">${RB_ICO[b.k] || ''}</span><span class="tbl">${rbLabel(b, f, RB.st)}</span></div>
    ${cont ? `<div class="tbin">${rbList(b.b, ro)}</div>${b.k === 'if' && b.e ? `<div class="tbelse">${L('si no', 'si no')}</div><div class="tbin">${rbList(b.e, ro)}</div>` : ''}<div class="tbend"></div>` : ''}</div>${sel && !ro ? rbTools(b) : ''}`;
}
function rbSlot(l, i) { const on = RB.cur && RB.cur.l === l && RB.cur.i === i; return `<button class="tslot${on ? ' on' : ''}" onclick="rbCur(${rbLid(l)},${i})" aria-label="${L('Posa els blocs aquí', 'Pon los bloques aquí')}">${on ? `<span>${L('els blocs nous van aquí', 'los bloques nuevos van aquí')}</span>` : ''}</button>`; }
function rbList(list, ro) { if (ro || RB.mode !== 'edit') return list.map(b => rbBlock(b, true)).join(''); return list.map((b, i) => rbSlot(list, i) + rbBlock(b)).join('') + rbSlot(list, list.length); }
function rbTools(b) {
  const ix = RB.ids[b._id], i = ix.list.indexOf(b);
  return `<div class="tbtools"><button onclick="rbMove(-1)" ${!rbMoveTo(b, -1) ? 'disabled' : ''} aria-label="${L('Puja', 'Sube')}">↑</button><button onclick="rbMove(1)" ${!rbMoveTo(b, 1) ? 'disabled' : ''} aria-label="${L('Baixa', 'Baja')}">↓</button>
    ${b.k === 'if' && RB.pal.includes('else') ? `<button class="wide" onclick="rbElse()">${b.e ? L('Treu «si no»', 'Quita «si no»') : L('Afegeix «si no»', 'Añade «si no»')}</button>` : ''}
    ${(b.k === 'if' || b.k === 'while' || b.k === 'until') && RB.pal.includes('and') ? `<button class="wide" onclick="rbJoin()">${b.c.and || b.c.or ? L('Una sola condició', 'Una sola condición') : L('Afegeix «i / o»', 'Añade «y / o»')}</button>` : ''}
    <button class="del" onclick="rbDel()">${L('Esborra', 'Borra')}</button></div>`;
}
function rbPalette() {
  const full = RB.max && rbCountAll(RB.prog) >= RB.max;
  return `<div class="tpal rpal">${RB.pal.filter(k => !['else', 'and'].includes(k)).map(k => { const b = rbNew(k, RB.st); return `<button class="tb rb c-${RB_CAT[k]} tpb" onclick="rbIns('${k}')" ${full ? 'disabled' : ''}><span class="tbi">${RB_ICO[k]}</span><span class="tbl">${rbLabel(b, undefined, RB.st)}</span></button>`; }).join('')}</div>`;
}
function rbCode() {
  rbIndex();
  const used = rbCountAll(RB.prog), ro = RB.mode !== 'edit';
  const scripts = RB.scripts.map(s => `<div class="rscript h-${s}"><div class="rhat"><span>${s === 'A' || s === 'B' ? `<i class="rbtn">${s}</i>` : s === 'forever' ? BIT_ICO.rep : TIC.play}</span><b>${tx(RB_HATS[s].join('|'))}</b></div><div class="tprog rprog">${rbList(RB.prog[s], ro) || (ro ? `<p class="tempty">—</p>` : '')}</div></div>`).join('');
  return `<div class="tphead"><b>${L('Programa', 'Programa')}</b><span class="tphr">${RB.max ? `<span class="tcount ${used >= RB.max ? 'full' : ''}">${used}/${RB.max} ${L('blocs', 'bloques')}</span>` : `<span class="tcount">${bitN(used)}</span>`}
    <button class="tclr" onclick="rbShowMC()" title="MakeCode" aria-label="${L('Mostra el codi per a MakeCode', 'Muestra el código para MakeCode')}"><svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    ${!ro && used ? `<button class="tclr" onclick="rbClear()" aria-label="${L('Buida el programa', 'Vacía el programa')}"><svg viewBox="0 0 24 24"><path d="M6 7h12l-1 14H7zM9 3h6l1 2h4v2H4V5h4z" fill="currentColor"/></svg></button>` : ''}</span></div>
    <div class="rscripts" id="rprog">${scripts}</div>${ro ? '' : rbPalette()}`;
}
/* ---------- El tauler: arena + sensors + micro:bit ---------- */
function rbWorldHTML() {
  const ar = Math.max(.5, Math.min(1, RB.W.h / RB.W.w));
  const alts = RB.alts.length > 1 ? `<div class="talts">${RB.alts.map((_, i) => `<button class="${i === RB.altI ? 'on' : ''} ${RB.altOk.has(i) ? 'ok' : ''}" onclick="rbAlt(${i})">${RB.altOk.has(i) ? '✓ ' : ''}${L('Pista', 'Pista')} ${i + 1}</button>`).join('')}</div>` : '';
  return `<div class="tworld rworld" id="rworld">${alts}<div class="rarena" id="rarena" style="--ar2:${(1 / ar).toFixed(3)};--ar3:${(1 / Math.max(ar, .62)).toFixed(3)}"><canvas id="rcv"></canvas><div class="rcam" id="rcam" hidden><button onclick="rbView()" aria-label="${L('Canvia la vista', 'Cambia la vista')}" id="rviewb">${rbViewLabel()}</button></div></div>
    <div class="rdash" id="rdash">${rbDashHTML()}</div><p class="tsay" id="tsay" aria-live="polite"></p>
    <div class="trun"><button class="btn big trgo" id="rbgo" onclick="rbGo()">${TIC.play}${L('Executa', 'Ejecuta')}</button><button class="btn ghost ico" onclick="rbReset()" aria-label="${L('Torna a començar', 'Vuelve a empezar')}"><svg viewBox="0 0 24 24"><path d="M12 5V2L7 6l5 4V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z" fill="currentColor"/></svg></button><button class="btn ghost ico" onclick="rbSpeed()" id="rbsp" aria-label="${L('Velocitat', 'Velocidad')}">×1</button></div></div>`;
}
function rbDashHTML() {
  const W = RB.W, S = RB.M.S, d = roboDist(W, S), ln = ['L', 'M', 'R'].map(k => roboLine(W, S, k).black ? 1 : 0), lL = roboLight(W, S, 'L'), lR = roboLight(W, S, 'R');
  const bar = v => `<i style="--v:${Math.round(Math.abs(v) / ROBO.VMAX * 100)}%" class="${v < -.2 ? 'neg' : ''}"></i>`;
  const mx = S.mxN != null ? `<span class="rmxn">${S.mxN}</span>` : rbMx(S.mx);
  return `<div class="rmb"><div class="rmbm">${mx}</div><button class="rbtn big" onclick="rbPress('A')" aria-label="A">A</button><button class="rbtn big" onclick="rbPress('B')" aria-label="B">B</button></div>
    <div class="rsens"><span class="rs"><small>${L('Distància', 'Distancia')}</small><b>${d}<em>cm</em></b></span>
      <span class="rs"><small>${L('Línia', 'Línea')} L·M·R</small><b class="rln">${ln.map((v, i) => `<i class="${v ? 'k' : ''}" title="${'LMR'[i]}">${v}</i>`).join('')}</b></span>
      <span class="rs"><small>${L('Llum', 'Luz')} E·D</small><b class="rlt">${lL}<em>·</em>${lR}</b></span>
      <span class="rs"><small>${L('Motors', 'Motores')}</small><b class="rmot">${bar(S.vl)}${bar(S.vr)}</b></span>
      ${Object.keys(S.vars).length || RB.vars.length ? `<span class="rs"><small>${RB.vars.map(v => rbVName(v, RB.st)).join(' · ')}</small><b>${RB.vars.map(v => S.vars[v] ?? 0).join(' · ')}</b></span>` : ''}
      <span class="rs t"><small>${L('Temps', 'Tiempo')}</small><b>${S.t.toFixed(1)}<em>s</em></b></span></div>`;
}
function rbHTML(extra = '') {
  return `<div class="tstage rstage m-${RB.mode}">${rbWorldHTML()}<div class="tcode">${extra}${rbCode()}</div></div>`;
}
function rbDraw() { const c = document.querySelector('.rstage .tcode'); if (!c) return; const sc = document.getElementById('rprog'), top = sc ? sc.scrollTop : 0; c.innerHTML = (RB.extra || '') + rbCode(); const s2 = document.getElementById('rprog'); if (s2) s2.scrollTop = top; }
function rbDash() { const e = document.getElementById('rdash'); if (e) e.innerHTML = rbDashHTML(); }
function rbSay(t, cls = '') { const e = document.getElementById('tsay'); if (e) { e.className = 'tsay ' + cls; e.innerHTML = t; } }

/* ---------- Editor ---------- */
function rbIns(k) {
  if (RB.run) rbStop();
  if (RB.max && rbCountAll(RB.prog) >= RB.max) return toast(L(`Només pots fer servir ${RB.max} blocs.`, `Solo puedes usar ${RB.max} bloques.`));
  const b = rbNew(k, RB.st); const { l, i } = RB.cur; l.splice(i, 0, b);
  RB.cur = b.b ? { l: b.b, i: 0 } : { l, i: i + 1 }; RB.sel = null; SFX.tap && SFX.tap(); rbFresh(); rbDraw();
}
function rbCur(li, i) { if (RB.run) rbStop(); RB.cur = { l: RB.lists[li], i }; RB.sel = null; rbDraw(); }
function rbSel(id) { if (RB.run) rbStop(); const ix = RB.ids[id]; if (!ix) return; RB.sel = RB.sel === ix.b ? null : ix.b; RB.cur = { l: ix.list, i: ix.list.indexOf(ix.b) + 1 }; rbDraw(); }
// ↑ / ↓: el bloc passa per sobre del veí; entra als bucles i als «si», en surt per la vora i passa d'un guió a l'altre
const RB_CONT = k => k === 'rep' || k === 'while' || k === 'until' || k === 'if';
function rbParent(l) { for (const ix of Object.values(RB.ids)) if (ix.b.b === l || ix.b.e === l) return ix; return null; }
function rbMoveTo(b, d) {
  const l = RB.ids[b._id].list, i = l.indexOf(b), nb = l[i + d];
  if (nb && RB_CONT(nb.k)) { const into = d > 0 ? nb.b : (nb.e || nb.b); return into ? { l: into, i: d > 0 ? 0 : into.length } : null; }
  if (nb) return { l, i: i + d };
  const par = rbParent(l);
  if (!par) { const sc = RB.scripts, k = sc.findIndex(x => RB.prog[x] === l), o = sc[k + d]; return o && RB.prog[o] ? { l: RB.prog[o], i: d > 0 ? 0 : RB.prog[o].length } : null; }
  if (par.b.e === l && d < 0) return { l: par.b.b, i: par.b.b.length };
  if (par.b.e && par.b.b === l && d > 0) return { l: par.b.e, i: 0 };
  const j = par.list.indexOf(par.b); return { l: par.list, i: d > 0 ? j + 1 : j };
}
function rbMove(d) { const b = RB.sel, l = RB.ids[b._id].list, to = rbMoveTo(b, d); if (!to) return; l.splice(l.indexOf(b), 1); to.l.splice(to.i, 0, b); RB.cur = { l: to.l, i: to.i + 1 }; rbFresh(); rbDraw(); }
function rbDel() { const b = RB.sel, l = RB.ids[b._id].list, i = l.indexOf(b); l.splice(i, 1); RB.sel = null; RB.cur = { l, i }; rbFresh(); rbDraw(); }
function rbElse() { const b = RB.sel; b.e = b.e ? null : []; rbFresh(); rbDraw(); }
function rbJoin() { const b = RB.sel; b.c = b.c.and || b.c.or ? (b.c.and || b.c.or)[0] : { and: [b.c, { a: { r: 'dist' }, op: '>', b: 10 }] }; rbFresh(); rbDraw(); }
function rbClear() { if (RB.run) rbStop(); RB.scripts.forEach(s => RB.prog[s].splice(0)); RB.sel = null; RB.cur = { l: RB.prog[RB.scripts[RB.scripts.length - 1]], i: 0 }; rbFresh(); rbDraw(); }
// qualsevol canvi: el robot torna a la sortida
function rbFresh() { RB.M = roboMachine(RB.W, RB.prog); if (RB.b3) RB.b3.reset(RB.W, RB.M.S); RB.solved = false; if (RB.altOk.size) RB.altOk.clear(); rbRender(); rbDash(); }
// camps: tocar-ne un obre un selector
const rbGet = (o, p) => p.split('.').reduce((a, k) => a == null ? a : a[k], o);
const rbSet = (o, p, v) => { const k = p.split('.'), last = k.pop(), t = k.reduce((a, x) => a[x], o); t[last] = v; };
function rbField(id, path) {
  if (RB.run) rbStop();
  const ix = RB.ids[id]; if (!ix) return; const b = ix.b;
  const field = path.split('.').pop(), cur = path.endsWith('.join') ? null : rbGet(b, path);
  const opt = (v, label, on) => `<button class="${on ? 'on' : ''}" data-v='${JSON.stringify(v).replace(/'/g, '&#39;')}'>${label}</button>`;
  let body = '', numeric = false;
  if (path.endsWith('.join')) { const c = rbGet(b, path.slice(0, -5)); body = opt('and', L('i (les dues)', 'y (las dos)'), !!c.and) + opt('or', L('o (alguna)', 'o (alguna)'), !!c.or); }
  else if (field === 'm' || field === 'side') body = ['all', 'L', 'R'].map(v => opt(v, field === 'm' ? RTX(v) : RTX('side' + v[0].toUpperCase() + v.slice(1)), cur === v)).join('');
  else if (field === 'd') body = ['fwd', 'back'].map(v => opt(v, RTX(v), cur === v)).join('');
  else if (field === 'on') body = [true, false].map(v => opt(v, RTX(v ? 'on' : 'off'), cur === v)).join('');
  else if (field === 'c' && (b.k === 'car' || b.k === 'under')) body = (b.k === 'car' ? RCAR_COLS : ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black']).map(v => opt(v, `<i class="rdot" style="background:${RCOL[v] || '#1B2240'}"></i>${tx(RCOL_N[v].join('|'))}`, cur === v)).join('');
  else if (field === 'i') body = ['all', '1', '2', '3', '4'].map(v => opt(v, v === 'all' ? L('totes', 'todas') : v, cur === v)).join('');
  else if (field === 'n' && b.k === 'note') body = Object.keys(RNOTES).map(v => opt(v, RNOTE_N[v], cur === v)).join('');
  else if (field === 'bt') body = Object.keys(RBEATS).map(v => opt(v, v, cur === v)).join('');
  else if (field === 'ic') body = Object.keys(RICONS).map(v => opt(v, `<span class="rmx sm">${rbMx(RICONS[v])}</span>`, cur === v)).join('');
  else if (field === 'op') body = (b.k === 'calc' ? ['+', '-', '×', '÷'] : ['<', '>', '=', '≠', '≤', '≥']).map(v => opt(v, v, cur === v)).join('');
  else if (field === 'v' && b.k !== 'num') body = RB.vars.map(v => opt(v, rbVName(v, RB.st), cur === v)).join('');
  else { numeric = true; const ops = [...RB.ops, ...RB.vars.map(v => '$' + v)].filter((v, i, a) => a.indexOf(v) === i);
    body = `<div class="rnum"><input id="rnumi" type="number" inputmode="numeric" value="${typeof cur === 'number' ? cur : ''}" placeholder="${L('número', 'número')}"><button class="btn" id="rnumok">OK</button></div>${ops.length ? `<p class="rpk">${L('o un sensor / variable:', 'o un sensor / variable:')}</p><div class="rpops">${ops.map(o => { const v = o[0] === '$' ? { r: 'var', v: o.slice(1) } : { r: o }; return opt(v, rbOpTxt(v, RB.st), cur && cur.r === v.r && cur.v === v.v); }).join('')}</div>` : ''}`; }
  modal(`<div class="sheet card rpick"><h3>${L('Tria', 'Elige')}</h3><div class="rpopts">${body}</div><button class="btn ghost big" onclick="closeModal()">${L('Tanca', 'Cierra')}</button></div>`, true);
  const apply = v => {
    if (path.endsWith('.join')) { const cp = path.slice(0, -5), c = rbGet(b, cp), pair = c.and || c.or; rbSet(b, cp, v === 'and' ? { and: pair } : { or: pair }); }
    else rbSet(b, path, v);
    closeModal(); SFX.tap && SFX.tap(); rbFresh(); rbDraw(); };
  document.querySelectorAll('.rpick .rpopts button[data-v], .rpick .rpops button[data-v]').forEach(x => x.onclick = () => apply(JSON.parse(x.dataset.v)));
  if (numeric) { const inp = document.getElementById('rnumi'), ok = () => { const n = parseFloat(inp.value); if (!isNaN(n)) apply(field === 's' ? Math.max(0, Math.min(255, Math.round(n))) : Math.round(n)); };
    document.getElementById('rnumok').onclick = ok; inp.onkeydown = e => { if (e.key === 'Enter') ok(); }; setTimeout(() => inp.focus(), 50); }
}
function rbShowMC() {
  const code = roboMC(RB.prog);
  modal(`<div class="sheet card rmc"><h3>${L('El teu programa per al robot de veritat', 'Tu programa para el robot de verdad')}</h3>
    <p class="mut">${L('A <b>makecode.microbit.org</b>: nou projecte → Extensions → busca «maqueen» → JavaScript → enganxa-hi aquest codi. Després torna a «Blocs»: hi veuràs el mateix programa.', 'En <b>makecode.microbit.org</b>: nuevo proyecto → Extensiones → busca «maqueen» → JavaScript → pega este código. Después vuelve a «Bloques»: verás el mismo programa.')}</p>
    <pre class="rcode">${esc(code)}</pre><div class="rmcb"><button class="btn" id="rmccp">${L('Copia el codi', 'Copia el código')}</button><button class="btn ghost" onclick="closeModal()">${L('Tanca', 'Cierra')}</button></div></div>`, true);
  document.getElementById('rmccp').onclick = () => { try { navigator.clipboard.writeText(code); toast(L('Codi copiat!', '¡Código copiado!')); } catch (e) { } };
}

/* ---------- Dibuix 2D de l'arena (vista de planta), també per a les miniatures i les demos ---------- */
// només el terra (tapet, zones, cinta, dohyo, punts de control i marques), per a la textura del 3D: k píxels per cm
function roboFloorPaint(g, W, S, k) {
  g.setTransform(k, 0, 0, k, 0, 0);
  g.fillStyle = W.ring ? '#2B3142' : '#F8F7F2'; g.fillRect(0, 0, W.w, W.h);
  if (!W.ring) { g.strokeStyle = 'rgba(40,60,120,.07)'; g.lineWidth = .25; for (let x = 10; x < W.w; x += 10) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, W.h); g.stroke(); } for (let y = 10; y < W.h; y += 10) { g.beginPath(); g.moveTo(0, y); g.lineTo(W.w, y); g.stroke(); } }
  roboPaintFloorItems(g, W, S, {});
}
function roboPaint(cv, W, S, o = {}) {
  const box = cv.parentElement, cw = Math.max(200, (o.w || box.clientWidth || 600)), ch = Math.round(cw * W.h / W.w), dpr = Math.min(2, window.devicePixelRatio || 1);
  if (cv.width !== Math.round(cw * dpr) || cv.height !== Math.round(ch * dpr)) { cv.width = Math.round(cw * dpr); cv.height = Math.round(ch * dpr); cv.style.width = cw + 'px'; cv.style.height = ch + 'px'; }
  const g = cv.getContext('2d'), k = cw / W.w * dpr; g.setTransform(k, 0, 0, k, 0, 0);
  // tapet
  g.fillStyle = W.ring ? '#2B3142' : '#F8F7F2'; g.fillRect(0, 0, W.w, W.h);
  if (!W.ring) { g.strokeStyle = 'rgba(40,60,120,.07)'; g.lineWidth = .25; for (let x = 10; x < W.w; x += 10) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, W.h); g.stroke(); } for (let y = 10; y < W.h; y += 10) { g.beginPath(); g.moveTo(0, y); g.lineTo(W.w, y); g.stroke(); } }
  if (S.dark) { g.fillStyle = 'rgba(10,16,40,.55)'; g.fillRect(0, 0, W.w, W.h); }
  roboPaintFloorItems(g, W, S, o);
  // focus de llum
  if (S.lamp) { const L0 = S.lamp; if (L0.on) { const gr = g.createRadialGradient(L0.x, L0.y, 1, L0.x, L0.y, 34); gr.addColorStop(0, 'rgba(255,230,120,.75)'); gr.addColorStop(1, 'rgba(255,230,120,0)'); g.fillStyle = gr; g.beginPath(); g.arc(L0.x, L0.y, 34, 0, 7); g.fill(); }
    g.fillStyle = L0.on ? '#FFD54A' : '#8A8F9E'; g.strokeStyle = '#6B5200'; g.lineWidth = .6; g.beginPath(); g.arc(L0.x, L0.y, 3.2, 0, 7); g.fill(); g.stroke(); }
  // parets (caixes de fusta)
  const wall = r => { g.fillStyle = 'rgba(20,20,40,.18)'; g.fillRect(r[0] + 1, r[1] + 1.4, r[2], r[3]); const gr = g.createLinearGradient(r[0], r[1], r[0], r[1] + r[3]); gr.addColorStop(0, '#E2B279'); gr.addColorStop(1, '#C48A4E'); g.fillStyle = gr; g.fillRect(r[0], r[1], r[2], r[3]); g.strokeStyle = '#8A5A2E'; g.lineWidth = .5; g.strokeRect(r[0], r[1], r[2], r[3]); };
  W.walls.forEach(wall);
  if (W.border && !W.ring) { g.strokeStyle = '#B98552'; g.lineWidth = 2.4; g.strokeRect(-1.2, -1.2, W.w + 2.4, W.h + 2.4); }
  // objectes
  for (const ob of S.objs) { if (ob.gone) continue; g.save(); g.translate(ob.x, ob.y); g.fillStyle = 'rgba(0,0,0,.2)'; g.beginPath(); g.arc(.6, .9, ob.r, 0, 7); g.fill();
    if (ob.kind === 'box') { g.fillStyle = '#D29A5A'; g.fillRect(-ob.r, -ob.r, ob.r * 2, ob.r * 2); g.strokeStyle = '#8A5A2E'; g.lineWidth = .5; g.strokeRect(-ob.r, -ob.r, ob.r * 2, ob.r * 2); }
    else { const gr = g.createRadialGradient(-ob.r * .3, -ob.r * .3, .2, 0, 0, ob.r); gr.addColorStop(0, ob.kind === 'ball' ? '#FFC06B' : '#FF8A80'); gr.addColorStop(1, ob.kind === 'ball' ? '#E07B12' : '#C62828'); g.fillStyle = gr; g.beginPath(); g.arc(0, 0, ob.r, 0, 7); g.fill();
      if (ob.kind === 'can') { g.strokeStyle = '#E0E3EA'; g.lineWidth = .7; g.beginPath(); g.arc(0, 0, ob.r * .72, 0, 7); g.stroke(); } }
    g.restore(); }
  // rastre
  if (S.trail.length > 1 && o.trail !== false) { g.strokeStyle = 'rgba(47,91,234,.45)'; g.lineWidth = .8; g.setLineDash([1.6, 1.4]); g.beginPath(); S.trail.forEach((p, i) => i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])); g.stroke(); g.setLineDash([]); }
  // l'altre robot
  if (S.lead) roboBot(g, { x: S.lead.x, y: S.lead.y, h: S.lead.h, car: { L: 'red', R: 'red' }, under: [], mx: RICONS.target }, { other: true });
  // ultrasons (con)
  if (o.sonar !== false) { const d = roboDist(W, S); if (d < 500) { const [sx, sy] = roboFwd(S, ROBO.SONAR), a = rad(S.h); g.save(); g.translate(sx, sy); g.rotate(a);
    const gr = g.createLinearGradient(0, 0, 0, -d); gr.addColorStop(0, 'rgba(46,230,240,.30)'); gr.addColorStop(1, 'rgba(46,230,240,0)'); g.fillStyle = gr; const sp = Math.tan(rad(8)) * d;
    g.beginPath(); g.moveTo(-1.2, 0); g.lineTo(-sp - 1, -d); g.lineTo(sp + 1, -d); g.lineTo(1.2, 0); g.closePath(); g.fill(); g.strokeStyle = 'rgba(14,160,170,.6)'; g.lineWidth = .4; g.setLineDash([1, 1]); g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -d); g.stroke(); g.setLineDash([]); g.restore(); } }
  roboBot(g, S, { W });
}
function roboPaintFloorItems(g, W, S, o) {
  if (W.ring) { const r = W.ring; g.fillStyle = '#F4F2EA'; g.beginPath(); g.arc(r.x, r.y, r.r, 0, 7); g.fill(); g.strokeStyle = '#121418'; g.lineWidth = 2; g.beginPath(); g.arc(r.x, r.y, r.r - 1, 0, 7); g.stroke();
    g.strokeStyle = '#C9C3B3'; g.lineWidth = .6; [-1, 1].forEach(s => { g.beginPath(); g.moveTo(r.x + s * 6, r.y - 5); g.lineTo(r.x + s * 6, r.y + 5); g.stroke(); }); }
  // zones de colors
  const ZC = { green: '#3CC47C', red: '#EF5A5A', blue: '#3D8BFF', yellow: '#FFC531', purple: '#8B5CF6', orange: '#F08A24', black: '#15171C', white: '#FFFFFF', grey: '#A9B0C0' };
  for (const z of W.zones) { g.fillStyle = (ZC[z.col] || z.col) + (z.col === 'black' ? '' : '55'); g.strokeStyle = ZC[z.col] || z.col; g.lineWidth = .6;
    g.beginPath(); if (z.r) g.roundRect(z.r[0], z.r[1], z.r[2], z.r[3], 2.5); else g.arc(z.c[0], z.c[1], z.c[2], 0, 7); g.fill(); g.setLineDash([2, 1.5]); g.stroke(); g.setLineDash([]);
    if (z.label) { const [cx, cy] = z.r ? [z.r[0] + z.r[2] / 2, z.r[1] + z.r[3] / 2] : z.c; g.fillStyle = z.col === 'black' ? '#fff' : '#14204A'; g.font = '900 5px Lexend,system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(tx(z.label), cx, cy); } }
  // cinta negra
  g.lineCap = 'round'; g.lineJoin = 'round';
  for (const l of W.lines) { g.strokeStyle = '#121418'; g.lineWidth = l.w; g.beginPath(); l.p.forEach((p, i) => i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])); if (l.closed) g.closePath(); g.stroke(); g.strokeStyle = 'rgba(255,255,255,.08)'; g.lineWidth = l.w * .3; g.stroke(); }
  // punts de control
  const cpg = W.goal.find(q => q.k === 'cps'); if (cpg && o.cps !== false) cpg.pts.forEach((p, i) => { const done = i < S.cps; g.fillStyle = done ? '#3CC47C' : 'rgba(255,255,255,.92)'; g.strokeStyle = done ? '#1E8A50' : '#F08A24'; g.lineWidth = .7; g.beginPath(); g.arc(p[0], p[1], 3, 0, 7); g.fill(); g.stroke(); g.fillStyle = done ? '#fff' : '#B4501A'; g.font = '900 3.4px Lexend,system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(i + 1, p[0], p[1] + .2); });
  // marques A B C
  for (const [m, p] of Object.entries(W.marks || {})) { g.fillStyle = o.pick === m ? '#FFC531' : '#fff'; g.strokeStyle = '#20306A'; g.lineWidth = .8; g.beginPath(); g.arc(p[0], p[1], 4, 0, 7); g.fill(); g.stroke(); g.fillStyle = '#20306A'; g.font = '900 5px Lexend,system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(m, p[0], p[1] + .3); }
}
// el Maqueen Lite V5 vist des de dalt (8,1 × 8,5 cm) amb la micro:bit, les rodes, els ultrasons i els llums
function roboBot(g, S, o = {}) {
  g.save(); g.translate(S.x, S.y); g.rotate(rad(S.h));
  const under = (S.under || []).find(c => c);
  if (under) { const gr = g.createRadialGradient(0, 0, 2, 0, 0, 9); gr.addColorStop(0, RCOL[under] + 'AA'); gr.addColorStop(1, RCOL[under] + '00'); g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 9, 0, 7); g.fill(); }
  g.fillStyle = 'rgba(0,0,0,.25)'; g.beginPath(); g.ellipse(.5, .9, 4.6, 4.8, 0, 0, 7); g.fill();
  // rodes
  g.fillStyle = '#1B1D22'; [-1, 1].forEach(s => { g.beginPath(); g.roundRect(s * 4.05 - (s > 0 ? 0 : 1.5), -1.2, 1.5, 4.2, .5); g.fill(); g.fillStyle = '#3A3E48'; for (let i = 0; i < 4; i++) g.fillRect(s * 4.05 - (s > 0 ? 0 : 1.5), -1 + i, 1.5, .25); g.fillStyle = '#1B1D22'; });
  // xassís (placa)
  g.fillStyle = o.other ? '#5B6478' : '#152238'; g.strokeStyle = o.other ? '#3B4255' : '#F2B21B'; g.lineWidth = .35;
  g.beginPath(); g.moveTo(-3.4, 4.2); g.lineTo(3.4, 4.2); g.quadraticCurveTo(4, 4.2, 4, 3.4); g.lineTo(4, -2.4); g.quadraticCurveTo(4, -4.2, 2.2, -4.2); g.lineTo(-2.2, -4.2); g.quadraticCurveTo(-4, -4.2, -4, -2.4); g.lineTo(-4, 3.4); g.quadraticCurveTo(-4, 4.2, -3.4, 4.2); g.fill(); g.stroke();
  // llums del cotxe (davant)
  [['L', -2.8], ['R', 2.8]].forEach(([k, x]) => { const c = S.car && S.car[k]; if (c) { const gr = g.createRadialGradient(x, -4.2, .2, x, -4.2, 5); gr.addColorStop(0, RCOL[c] + 'EE'); gr.addColorStop(1, RCOL[c] + '00'); g.fillStyle = gr; g.beginPath(); g.arc(x, -4.6, 5, 0, 7); g.fill(); } g.fillStyle = c ? RCOL[c] : '#C7CBD6'; g.beginPath(); g.arc(x, -3.7, .55, 0, 7); g.fill(); });
  // ultrasons: placa blava amb dos «ulls»
  g.fillStyle = '#1F5FBF'; g.beginPath(); g.roundRect(-2.3, -5.1, 4.6, 1.6, .4); g.fill(); [-1.2, 1.2].forEach(x => { g.fillStyle = '#D7DCE6'; g.beginPath(); g.arc(x, -4.6, .75, 0, 7); g.fill(); g.fillStyle = '#5A6070'; g.beginPath(); g.arc(x, -4.6, .4, 0, 7); g.fill(); });
  // micro:bit amb la matriu
  g.fillStyle = '#121212'; g.beginPath(); g.roundRect(-2.6, -2.2, 5.2, 4.2, .4); g.fill(); g.fillStyle = '#C9A24A'; g.fillRect(-2.6, 1.6, 5.2, .4);
  const mx = S.mxN != null ? null : (S.mx || '').split(' ');
  for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) { const on = mx ? mx[y] && mx[y][x] === '1' : S.mxN != null && (x + y) % 2 === 0 && y < 4 && false; g.fillStyle = on ? '#FF3B30' : '#3A2226'; if (on) { g.shadowColor = '#FF3B30'; g.shadowBlur = 1.2; } g.fillRect(-1.55 + x * .66, -1.75 + y * .66, .38, .38); g.shadowBlur = 0; }
  if (S.mxN != null) { g.fillStyle = '#FF3B30'; g.font = '900 2.6px Lexend,system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(S.mxN.slice(-2), 0, -.4); }
  [-2.15, 2.15].forEach(x => { g.fillStyle = '#2A2A2A'; g.beginPath(); g.arc(x, -.2, .38, 0, 7); g.fill(); });
  // sensors de línia (es veuen encesos si toquen negre)
  if (o.W) ['L', 'M', 'R'].forEach(k => { const on = roboLine(o.W, S, k).black; g.fillStyle = on ? '#2EE6F0' : 'rgba(255,255,255,.35)'; g.beginPath(); g.arc(ROBO_SIDE[k] * ROBO.LINE_S, -ROBO.LINE_F, .32, 0, 7); g.fill(); });
  g.restore();
}
/* ---------- Execució en directe ---------- */
let RB_RAF = null, RB_AC = null;
function rbTone(n, ms) { if (typeof P !== 'undefined' && P && P.sound === false) return; try { const ctx = RB_AC = RB_AC || new (window.AudioContext || window.webkitAudioContext)(); if (ctx.state === 'suspended') ctx.resume(); const t = ctx.currentTime, o = ctx.createOscillator(), gn = ctx.createGain(); o.type = 'square'; o.frequency.value = RNOTES[n] || 262; o.connect(gn); gn.connect(ctx.destination); gn.gain.setValueAtTime(.0001, t); gn.gain.exponentialRampToValueAtTime(.05, t + .01); gn.gain.exponentialRampToValueAtTime(.0001, t + Math.max(.08, ms / 1000 * .9)); o.start(t); o.stop(t + ms / 1000); } catch (e) { } }
function rbRender() { const cv = document.getElementById('rcv'); if (!cv || !RB) return; if (RB.b3) { RB.b3.sync(RB.M.S); return; } roboPaint(cv, RB.W, RB.M.S, { pick: RB.pick }); }
function rbMarkNow() { document.querySelectorAll('.rb.now').forEach(e => e.classList.remove('now')); if (!RB || !RB.run) return; for (const b of Object.values(RB.M.cur)) if (b && b._id) { const e = document.getElementById('rb' + b._id); if (e) e.classList.add('now'); } }
function rbGo() {
  if (!RB) return; if (RB.run) return rbStop();
  if (!rbCountAll(RB.prog)) return rbSay(L('Primer posa algun bloc al programa.', 'Primero pon algún bloque en el programa.'));
  RB.W = roboWorld(RB.alts[RB.altI]); RB.M = roboMachine(RB.W, RB.prog); if (RB.b3) RB.b3.reset(RB.W, RB.M.S); RB.run = true; RB.tries++; RB.sel = null; rbSay('');
  const b = document.getElementById('rbgo'); if (b) b.innerHTML = L('Atura', 'Para');
  let last = performance.now(), acc = 0, fr = 0, lastNote = null;
  const step = now => {
    if (!RB || !RB.run) return;
    acc += Math.min(100, now - last) * RB.speed; last = now; let why = null;
    while (acc >= ROBO.DT * 1000) { acc -= ROBO.DT * 1000; roboSnap(RB.W, RB.M.S); RB.M.tick(); if ((why = roboShouldEnd(RB.M))) break; }
    const S = RB.M.S; if (S.sound && S.sound !== lastNote) { lastNote = S.sound; rbTone(S.sound.n, 300); }
    rbRender(); if (++fr % 3 === 0) { rbDash(); rbMarkNow(); }
    if (why) return rbEnd(why);
    RB_RAF = requestAnimationFrame(step);
  };
  RB_RAF = requestAnimationFrame(step);
}
function rbStop() { if (!RB) return; RB.run = false; cancelAnimationFrame(RB_RAF); const b = document.getElementById('rbgo'); if (b) b.innerHTML = `${TIC.play}${L('Executa', 'Ejecuta')}`; document.querySelectorAll('.rb.now').forEach(e => e.classList.remove('now')); }
function rbReset() { if (!RB) return; rbStop(); RB.W = roboWorld(RB.alts[RB.altI]); RB.M = roboMachine(RB.W, RB.prog); if (RB.b3) RB.b3.reset(RB.W, RB.M.S); rbRender(); rbDash(); rbSay(''); }
function rbSpeed() { RB.speed = RB.speed === 1 ? 2 : RB.speed === 2 ? 4 : 1; const b = document.getElementById('rbsp'); if (b) b.textContent = '×' + RB.speed; }
function rbPress(k) { if (!RB) return; const b = document.querySelector(`.rmb .rbtn:nth-of-type(${k === 'A' ? 1 : 2})`); if (b) { b.classList.remove('hit'); void b.offsetWidth; b.classList.add('hit'); } if (!RB.run) { if (!RB.prog[k] || !RB.prog[k].length) return rbSay(L(`El botó <b>${k}</b> no té cap programa.`, `El botón <b>${k}</b> no tiene ningún programa.`)); rbGo(); } RB.M.press(k); }
function rbAlt(i) { if (!RB || i < 0 || i >= RB.alts.length) return; rbStop(); RB.altI = i; RB.W = roboWorld(RB.alts[i]); RB.M = roboMachine(RB.W, RB.prog); if (RB.b3) RB.b3.reset(RB.W, RB.M.S); rbRender(); rbDash(); const t = document.querySelector('#rworld .talts'); if (t) t.outerHTML = rbWorldHTML().match(/<div class="talts">[\s\S]*?<\/div>/)[0]; }
// vistes: general en 3D → seguint el robot → planta (2D)
const RB_VIEWS = ['3d', 'chase', '2d'];
const rbViewLabel = () => { const v = RB && RB.view === 'auto' ? '3d' : RB && RB.view; return v === '3d' ? `👁 ${L('General', 'General')}` : v === 'chase' ? `🎥 ${L('Seguint', 'Siguiendo')}` : `🗺 ${L('Planta', 'Planta')}`; };
function rbView() { const v = RB.view === 'auto' ? '3d' : RB.view; RB.view = RB_VIEWS[(RB_VIEWS.indexOf(v) + 1) % 3]; try { localStorage.setItem('numi-robo-view', RB.view); } catch (e) { } const b = document.getElementById('rviewb'); if (b) b.textContent = rbViewLabel(); if (RB.b3 && RB.view !== '2d') { RB.b3.setMode(RB.view === 'chase' ? 'chase' : 'over'); return; } rb3dMount(); }
// què ha fallat, explicat
function rbWhy(g, W, S) {
  const z = g.id ? W.zones.find(q => q.id === g.id) : null, zn = z && z.label ? `«${tx(z.label)}»` : '';
  switch (g.k) {
    case 'zone': return g.stop ? L(`El robot s'ha d'aturar dins la zona ${zn}.`, `El robot tiene que pararse dentro de la zona ${zn}.`) : L(`El robot ha d'arribar a la zona ${zn}.`, `El robot tiene que llegar a la zona ${zn}.`);
    case 'nohit': return L(`Ha xocat ${S.hits === 1 ? 'una vegada' : S.hits + ' vegades'}. Cal fer-ho sense tocar res.`, `Ha chocado ${S.hits === 1 ? 'una vez' : S.hits + ' veces'}. Hay que hacerlo sin tocar nada.`);
    case 'near': return L(`S'ha d'aturar a entre ${g.min ?? 0} i ${g.max} cm de l'obstacle (ara és a ${roboDist(W, S)} cm).`, `Tiene que pararse a entre ${g.min ?? 0} y ${g.max} cm del obstáculo (ahora está a ${roboDist(W, S)} cm).`);
    case 'cps': return L(`Ha passat per ${S.cps} de ${g.pts.length} punts del circuit.`, `Ha pasado por ${S.cps} de ${g.pts.length} puntos del circuito.`);
    case 'out': return L(`Ha tret ${S.objs.filter(o => o.out).length} de ${g.n ?? S.objs.length} objectes del dohyo.`, `Ha sacado ${S.objs.filter(o => o.out).length} de ${g.n ?? S.objs.length} objetos del dohyo.`);
    case 'inring': return L('El robot ha sortit del dohyo!', '¡El robot ha salido del dohyo!');
    case 'cover': { const tot = Math.floor(W.w / 5) * Math.floor(W.h / 5) - (g.minus || 0); return L(`Ha netejat el ${Math.round(100 * S.cover.size / tot)} % del terra; cal el ${Math.round(g.min * 100)} %.`, `Ha limpiado el ${Math.round(100 * S.cover.size / tot)} % del suelo; hace falta el ${Math.round(g.min * 100)} %.`); }
    case 'push': return L(`Cal portar l'objecte a la zona ${zn}.`, `Hay que llevar el objeto a la zona ${zn}.`);
    case 'at': return g.why ? tx(g.why) : L(`Al segon ${g.t}, el robot no fa el que demana el repte.`, `En el segundo ${g.t}, el robot no hace lo que pide el reto.`);
    case 'notes': return L(`Havia de sonar: ${g.n.map(n => RNOTE_N[n]).join(', ')}.`, `Tenía que sonar: ${g.n.map(n => RNOTE_N[n]).join(', ')}.`);
    case 'icon': return L(`Al final, la micro:bit ha de mostrar la icona «${tx(RICON_N[g.ic].join('|'))}».`, `Al final, la micro:bit tiene que mostrar el icono «${tx(RICON_N[g.ic].join('|'))}».`);
    case 'stopped': return L('Al final, el robot ha d\'estar aturat.', 'Al final, el robot tiene que estar parado.');
    case 'time': return L(`Ha tardat massa: ha de fer-ho en menys de ${g.max} segons.`, `Ha tardado demasiado: tiene que hacerlo en menos de ${g.max} segundos.`);
    case 'dist': return L(`Ha recorregut ${Math.round(roboRunLen(S))} cm; n'ha de fer almenys ${g.min}.`, `Ha recorrido ${Math.round(roboRunLen(S))} cm; tiene que hacer al menos ${g.min}.`);
    case 'follow': return L(`Ha de seguir el líder a entre ${g.min} i ${g.max} cm gairebé tota l'estona.`, `Tiene que seguir al líder a entre ${g.min} y ${g.max} cm casi todo el rato.`);
    case 'var': return L(`La variable ${g.v} havia de valer ${g.eq} (val ${S.vars[g.v] || 0}).`, `La variable ${g.v} tenía que valer ${g.eq} (vale ${S.vars[g.v] || 0}).`);
    case 'face': return L('Al final, el robot no mira cap on toca.', 'Al final, el robot no mira hacia donde toca.');
    case 'car': return L(`Els llums del cotxe havien de quedar de color ${tx(RCOL_N[g.c].join('|'))}.`, `Las luces del coche tenían que quedar de color ${tx(RCOL_N[g.c].join('|'))}.`);
  }
  return L('Encara no compleix la missió.', 'Aún no cumple la misión.');
}
function rbEnd(why) {
  rbStop(); rbDash();
  const W = RB.W, S = RB.M.S;
  if (!W.goal.length) { rbSay(why === 'crash' ? L('El programa no s\'acaba mai sense esperar: posa-hi algun «espera».', 'El programa no termina nunca sin esperar: pon algún «espera».') : L('Programa acabat.', 'Programa terminado.'), why === 'crash' ? 'bad' : ''); if (RB.onDone && why !== 'crash') RB.onDone(); return; }
  if (S.doneT === undefined && !roboEval(W, S).length) S.doneT = S.t;
  const bad = why === 'crash' ? [{ k: 'crash' }] : roboEval(W, S);
  if (!bad.length) {
    if (RB.alts.length > 1) { RB.altOk.add(RB.altI); const nx = RB.alts.findIndex((_, i) => !RB.altOk.has(i));
      const tabs = document.querySelector('#rworld .talts'); if (tabs) tabs.outerHTML = rbWorldHTML().match(/<div class="talts">[\s\S]*?<\/div>/)[0];
      if (nx >= 0) { SFX.ok && SFX.ok(); rbSay(L(`Funciona a la pista ${RB.altI + 1}! Ara el mateix programa a la pista ${nx + 1}…`, `¡Funciona en la pista ${RB.altI + 1}! Ahora el mismo programa en la pista ${nx + 1}…`), 'ok'); setTimeout(() => { if (!RB || RB.run) return; rbAlt(nx); rbGo(); }, 1500); return; } }
    RB.solved = true; SFX.win && SFX.win(); typeof confetti === 'function' && confetti(90);
    rbSay(RB.alts.length > 1 ? L(`Missió complerta a les ${RB.alts.length} pistes!`, `¡Misión cumplida en las ${RB.alts.length} pistas!`) : L('Missió complerta!', '¡Misión cumplida!'), 'ok'); if (RB.onDone) RB.onDone(); return;
  }
  SFX.ko && SFX.ko();
  rbSay((RB.alts.length > 1 ? L(`A la pista ${RB.altI + 1}: `, `En la pista ${RB.altI + 1}: `) : '') + (bad[0].k === 'crash' ? L('El programa es queda penjat: dins dels bucles cal algun «espera» o algun moviment.', 'El programa se queda colgado: dentro de los bucles hace falta algún «espera» o algún movimiento.') : rbWhy(bad[0], W, S)) + ' ' + L('Canvia el programa i torna-ho a provar.', 'Cambia el programa y vuelve a probar.'), 'bad');
  if (RB.onFail) RB.onFail(bad);
}
// 3D (tech-robo3d.js); si no es pot, la planta 2D
let ROBO3D_P = null;
function rb3dMount() {
  const box = document.getElementById('rarena'); if (!box || !RB) return;
  const want3 = RB.view !== '2d' && !(typeof REDUCED !== 'undefined' && REDUCED === 'force2d');
  if (!want3) { const cam = document.getElementById('rcam'); if (cam && ROBO3D_P) cam.hidden = false; if (RB.b3) { RB.b3.dispose(); RB.b3 = null; box.classList.remove('on3d'); box.querySelectorAll('.b3c').forEach(c => c.remove()); } rbRender(); return; }
  const me = RB;
  (ROBO3D_P = ROBO3D_P || import('./tech-robo3d.js').then(m => m.ok() ? m : null).catch(() => null)).then(M => {
    const cam = document.getElementById('rcam'); if (cam && M) cam.hidden = false;
    if (!M || RB !== me || me.view === '2d' || me.b3 || !document.getElementById('rarena')) return;
    try { me.b3 = M.create(box, me.W, me.M.S, { shot: !!window.__shot, mode: me.view === 'chase' ? 'chase' : 'over' }); box.classList.add('on3d'); me.b3.sync(me.M.S); } catch (e) { me.b3 = null; }
  });
}
function rbMount() { try { const v = localStorage.getItem('numi-robo-view'); if (v && RB.view === 'auto') RB.view = v; } catch (e) { } rbRender(); rb3dMount(); new ResizeObserver(() => rbRender()).observe(document.getElementById('rarena')); }

/* ---------- Tipus de pas de Robòtica ----------
   robo: repte {q, w, pal, sol (RQ), scripts?, ops?, vars?, varNames?, max?, prog?, hint}
   rcreate: projecte lliure {…, name, crit, check?(prog)} · rpredict: on acabarà / què farà {w (amb marks), prog, a}
   rspot: tocar el bloc que… {w, prog (amb ! al bloc bo), ex} */
function rbStage(st) {
  const q = st.q ? `<div class="tsq2"><span class="tsqc">${charSVG('numi', 'idle')}</span><div><p>${tval(st.q)}</p>${st.crit ? `<ul class="tcrit">${st.crit.map(c => `<li>${tval(c)}</li>`).join('')}</ul>` : ''}</div></div>` : '';
  $('#tsb').innerHTML = `${q}${rbHTML(RB.extra || '')}`; $('#tsb').classList.add('wide'); rbMount();
}
function rbHint(st) {
  if (document.getElementById('thint') || !(st.hint || st.sol)) return;
  const f = document.getElementById('tsf'), b = document.createElement('button'); b.className = 'btn ghost'; b.id = 'thint'; b.textContent = L('Una pista', 'Una pista');
  b.onclick = () => { if (st.hint && !b.dataset.k) { b.dataset.k = 1; rbSay(`💡 ${tval(st.hint)}`); b.textContent = st.sol ? L('Mostra una solució', 'Muestra una solución') : ''; if (!st.sol) b.remove(); return; }
    if (st.sol) { const P = RQ(st.sol); RB.scripts.forEach(s => RB.prog[s].splice(0, RB.prog[s].length, ...(P[s] || []))); RB.cur = { l: RB.prog[RB.scripts[0]], i: 0 }; rbFresh(); rbDraw(); rbSay(L('Aquí tens una solució. Executa-la i mira què fa cada bloc.', 'Aquí tienes una solución. Ejecútala y mira qué hace cada bloque.')); b.remove(); } };
  f.insertBefore(b, f.firstChild);
}
if (typeof TSTEP !== 'undefined') {
  TSTEP.robo = function (st) {
    rbMake(st); RB.onDone = () => tContinue(); RB.onFail = () => { if (RB.tries >= 2) rbHint(st); };
    rbStage(st); tFoot(L('Continua', 'Continúa'), tNext, false);
  };
  TSTEP.rcreate = function (st) {
    TSTEP.robo(st);
    RB.onDone = () => { const bad = st.check && st.check(RB.prog); if (bad) { RB.solved = false; rbSay(tval(bad), 'bad'); return; }
      tFoot(L('Desa-ho i continua', 'Guárdalo y continúa'), () => { const t = TS_(); t.port.push({ id: 'pj' + Date.now().toString(36), kind: 'robo', sid: TSS.id, t: st.name || TSS.s.t, w: st.w, prog: rbClone(RB.prog), st: { scripts: st.scripts, vars: st.vars, varNames: st.varNames }, d: today() }); if (t.port.length > 60) t.port.shift(); save(); toast(L('Projecte desat a «Projectes»!', '¡Proyecto guardado en «Proyectos»!')); tNext(); }, true, `<button class="btn ghost" onclick="rbReset()">${L('El milloro', 'Lo mejoro')}</button>`); };
  };
  TSTEP.rpredict = function (st) {
    rbMake(st, { mode: 'view' }); let pick = null;
    RB.extra = `<div class="tpick">${Object.keys(st.w.marks || {}).sort().map(k => `<button class="topt sm" data-m="${k}">${k}</button>`).join('')}</div>`;
    rbStage(st); const go = document.getElementById('rbgo'); if (go) go.disabled = true;
    document.querySelectorAll('.tpick .topt').forEach(b => b.onclick = () => { if (TSS.ready) return; pick = b.dataset.m; RB.pick = pick; rbRender(); document.querySelectorAll('.tpick .topt').forEach(x => x.classList.toggle('on', x === b)); SFX.tap && SFX.tap(); tFoot(L('Comprova-ho executant el programa', 'Compruébalo ejecutando el programa'), check); });
    const check = () => { if (!pick) return; TSS.ready = true; document.querySelectorAll('.tpick .topt').forEach(b => b.disabled = true);
      RB.onDone = RB.onFail = () => { const S = RB.M.S, ms = Object.entries(st.w.marks), near = ms.sort((a, b) => Math.hypot(a[1][0] - S.x, a[1][1] - S.y) - Math.hypot(b[1][0] - S.x, b[1][1] - S.y))[0][0], ok = pick === st.a;
        document.querySelectorAll('.tpick .topt').forEach(b => b.classList.add(b.dataset.m === st.a ? 'ok' : b.dataset.m === pick ? 'ko' : 'x'));
        rbSay(ok ? L(`Exacte! Acaba a la <b>${st.a}</b>.`, `¡Exacto! Termina en la <b>${st.a}</b>.`) + (st.ex ? ' ' + tval(st.ex) : '') : L(`Acaba a la <b>${st.a}</b>. `, `Termina en la <b>${st.a}</b>. `) + (st.ex ? tval(st.ex) : ''), ok ? 'ok' : 'bad');
        ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko(); void near; tContinue(); };
      const g = document.getElementById('rbgo'); if (g) g.disabled = false; RB.W.goal = []; rbGo(); };
    tFoot(L('Tria una lletra', 'Elige una letra'), check, false);
  };
  TSTEP.rspot = function (st) {
    rbMake(st, { mode: 'view' }); rbStage(st);
    const all = []; const walk = l => (l || []).forEach(b => { all.push(b); walk(b.b && Array.isArray(b.b) ? b.b : null); walk(b.e); }); RB.scripts.forEach(s => walk(RB.prog[s]));
    all.forEach(b => { const e = document.getElementById('rb' + b._id); if (!e) return; const h = e.querySelector('.tbh'); h.classList.add('rspot'); h.onclick = () => { if (TSS.ready) return; TSS.ready = true; const ok = !!b.x;
      e.classList.add(ok ? 'good' : 'err'); if (!ok) { const g = all.find(x => x.x); if (g) document.getElementById('rb' + g._id).classList.add('good'); }
      rbSay(ok ? (st.yes ? tval(st.yes) : L('Molt bé!', '¡Muy bien!')) : (st.ex ? tval(st.ex) : L('No és aquest: és el que està marcat en verd.', 'No es este: es el que está marcado en verde.')), ok ? 'ok' : 'bad');
      ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko(); tContinue(); }; });
    tFoot(L('Toca un bloc del programa', 'Toca un bloque del programa'), () => { }, false);
  };
}
// el ! del text RQ marca el bloc que s'ha de tocar a «rspot»
{ const RQ0 = RQ; RQ = function (src) { if (typeof src !== 'string' || !src.includes('!')) return RQ0(src); const marks = []; const clean = src.replace(/(\S+?)!(?=\s|\{|$)/g, (m, t) => { marks.push(t); return t + '§'; });
    const P = RQ0(clean.replace(/§/g, '')); let n = 0, idx = []; const toks = clean.match(/[{}]|[^\s{}]+/g).filter(t => !['{', '}', 'else', 'start', 'forever', 'A', 'B'].includes(t)); toks.forEach((t, i) => { if (t.endsWith('§')) idx.push(i); });
    const walk = l => (l || []).forEach(b => { if (idx.includes(n)) b.x = 1; n++; if (Array.isArray(b.b)) walk(b.b); walk(b.e); }); ['start', 'forever', 'A', 'B'].forEach(s => walk(P[s])); return P; }; }

/* ---------- Demostració en directe (targetes de teoria i presentació) ---------- */
let RDEMO = null;
function roboDemoHTML(d) { return `<div class="rdemo"><div class="rdw"><canvas></canvas></div><div class="rdp">${rbDemoChips(RQ(d.prog), d)}</div></div>`; }
function rbDemoChips(P, d) {
  const ch = l => (l || []).map(b => `<span class="rdb c-${RB_CAT[b.k]}"><span class="tbi">${RB_ICO[b.k]}</span><span>${rbLabel(b, undefined, d)}</span></span>${Array.isArray(b.b) ? `<span class="rdin">${ch(b.b)}</span>${b.e ? `<span class="rdelse">${L('si no', 'si no')}</span><span class="rdin">${ch(b.e)}</span>` : ''}` : ''}`).join('');
  return Object.entries(P).filter(([, l]) => l.length).map(([s, l]) => `<div class="rdh"><b>${tx(RB_HATS[s].join('|'))}</b>${ch(l)}</div>`).join('');
}
function roboDemoStop() { if (RDEMO) { cancelAnimationFrame(RDEMO.raf); clearTimeout(RDEMO.t); RDEMO = null; } }
function roboDemoStart(el, d) {
  roboDemoStop(); const cv = el.querySelector('.rdemo canvas'); if (!cv) return;
  const me = RDEMO = {}; const reset = () => { me.W = roboWorld(d.w); me.M = roboMachine(me.W, RQ(d.prog)); me.last = performance.now(); };
  reset();
  const loop = now => { if (RDEMO !== me || !cv.isConnected) return; let n = Math.min(10, Math.floor((now - me.last) / 10)); me.last += n * 10; let why = null;
    while (n-- > 0 && !(why = roboShouldEnd(me.M))) { roboSnap(me.W, me.M.S); me.M.tick(); }
    roboPaint(cv, me.W, me.M.S); if (why || me.M.S.t > (d.time || me.W.time)) { me.t = setTimeout(() => { if (RDEMO !== me) return; reset(); me.raf = requestAnimationFrame(loop); }, 1600); return; }
    me.raf = requestAnimationFrame(loop); };
  me.raf = requestAnimationFrame(loop);
}
// el portafoli: miniatura i vista dels projectes de robòtica
if (typeof TPORT !== 'undefined') TPORT.robo = {
  thumb: p => `<canvas class="rthumb" data-p="${p.id}"></canvas>`,
  after: (p, el) => { const cv = el.querySelector(`canvas[data-p="${p.id}"]`); if (cv) { const W = roboWorld(p.w); roboPaint(cv, W, roboSim(W), { w: 220, sonar: false }); } },
  open: p => { rbMake({ w: p.w, ...p.st, pal: [] }, { prog: p.prog, mode: 'view' }); return `<div class="tsbody wide">${rbHTML()}</div>`; },
  mount: () => rbMount()
};

/* ---------- Unitat 8 de Robòtica: dissenyar la pista i la missió (rdesign) i programar-la (rmybuild) ----------
   La pista es dibuixa en una quadrícula de caselles de 10 cm: parets, zona de meta, llaunes, focus, la sortida del
   robot i la cinta negra (caselles tocades en ordre). Es desa a P.tech.rmaps[slot] amb la missió triada. */
const RDES_TOOLS = [['wall', 'Paret|Pared'], ['line', 'Cinta negra|Cinta negra'], ['goal', 'Meta|Meta'], ['can', 'Llauna|Lata'], ['lamp', 'Focus de llum|Foco de luz'], ['bot', 'El robot|El robot'], ['erase', 'Esborra|Borra']];
const RDES_GOALS = [['zone', "Arribar a la meta i aturar-s'hi|Llegar a la meta y pararse"], ['nohit', 'Sense xocar|Sin chocar'], ['push', 'Portar la llauna a la meta|Llevar la lata a la meta'], ['time', 'En menys de 20 segons|En menos de 20 segundos'], ['cps', 'Seguir la cinta fins al final|Seguir la cinta hasta el final']];
// arrodoneix els vèrtexs d'una línia (radi r cm): la cinta de l'editor fa cantonades suaus, com quan es posa a terra
function roboRound(p, r) {
  if (p.length < 3) return p; const o = [p[0]];
  for (let i = 1; i < p.length - 1; i++) {
    const [ax, ay] = p[i - 1], [bx, by] = p[i], [cx, cy] = p[i + 1], l1 = Math.hypot(bx - ax, by - ay), l2 = Math.hypot(cx - bx, cy - by);
    const k = Math.min(r, l1 / 2, l2 / 2); if (!k) { o.push(p[i]); continue; }
    const s = [bx - (bx - ax) / l1 * k, by - (by - ay) / l1 * k], e = [bx + (cx - bx) / l2 * k, by + (cy - by) / l2 * k];
    for (let t = 0; t <= 1.0001; t += .25) o.push([(1 - t) * (1 - t) * s[0] + 2 * (1 - t) * t * bx + t * t * e[0], (1 - t) * (1 - t) * s[1] + 2 * (1 - t) * t * by + t * t * e[1]]);
  }
  o.push(p[p.length - 1]); return o;
}
function roboDesSpec(D) {
  const C = 10, spec = { w: D.cw * C, h: D.ch * C, bot: [D.bot[0] * C + 5, D.bot[1] * C + 5, D.bot[2]], walls: D.walls.map(([x, y]) => [x * C + .5, y * C + .5, C - 1, C - 1]), zones: [], objs: D.cans.map(([x, y]) => ({ x: x * C + 5, y: y * C + 5, r: 3, kind: 'can' })), goal: [], time: 30 };
  if (D.goal) spec.zones.push({ id: 'meta', r: [D.goal[0] * C, D.goal[1] * C, 2 * C, 2 * C], col: 'green', label: 'META|META' });
  if (D.line.length > 1) spec.lines = [{ p: roboRound(D.line.map(([x, y]) => [x * C + 5, y * C + 5]), 5) }];
  if (D.lamp) spec.lamp = { x: D.lamp[0] * C + 5, y: D.lamp[1] * C + 5 };
  for (const g of D.goals) { if (g === 'zone' && D.goal) spec.goal.push({ k: 'zone', id: 'meta', stop: true }); if (g === 'nohit') spec.goal.push({ k: 'nohit' }); if (g === 'push' && D.goal && D.cans.length) spec.goal.push({ k: 'push', obj: 0, id: 'meta' }); if (g === 'time') spec.goal.push({ k: 'time', max: 20 }); if (g === 'cps' && D.line.length > 1) { const p = spec.lines[0].p; spec.goal.push({ k: 'cps', pts: [p[Math.floor(p.length / 2)], p[p.length - 1]], r: 7 }); } }
  return spec;
}
const rdMine = slot => { const t = TS_(); t.rmaps = t.rmaps || {}; return t.rmaps[slot || 'k8']; };
if (typeof TSTEP !== 'undefined') {
  TSTEP.rdesign = function (st) {
    const old = rdMine(st.slot); let D = old && old.D ? JSON.parse(JSON.stringify(old.D)) : { cw: 12, ch: 8, bot: [1, 4, 90], walls: [], cans: [], line: [], goal: null, lamp: null, goals: ['zone', 'nohit'] };
    let tool = 'wall', name = old ? old.name : '';
    const draw = () => {
      const spec = roboDesSpec(D), okN = name.trim().length > 1, ok = D.goal && D.goals.length && okN && !D.walls.some(([x, y]) => x === D.bot[0] && y === D.bot[1]);
      $('#tsb').innerHTML = `<div class="tdes"><div class="tsq2"><span class="tsqc">${charSVG('numi', 'idle')}</span><div><p>${tval(st.q)}</p>${st.crit ? `<ul class="tcrit">${st.crit.map(c => `<li>${tval(c)}</li>`).join('')}</ul>` : ''}</div></div>
        <div class="tdesg"><div class="tdesw rdesw"><canvas id="rdcv"></canvas><div class="tdesc">${Array.from({ length: D.cw * D.ch }, (_, i) => { const x = i % D.cw, y = Math.floor(i / D.cw); return `<button style="left:${x / D.cw * 100}%;top:${y / D.ch * 100}%;width:${100 / D.cw}%;height:${100 / D.ch}%" onclick="RDES.put(${x},${y})" aria-label="${x + 1},${y + 1}"></button>`; }).join('')}</div></div>
        <div class="tdesp"><div class="tdtools">${RDES_TOOLS.map(([k, t]) => `<button class="${k === tool ? 'on' : ''}" onclick="RDES.tool('${k}')"><span class="tdti rdti">${{ wall: '🧱', line: '〰️', goal: '🏁', can: '🥫', lamp: '💡', bot: '🤖', erase: '🧽' }[k]}</span>${tx(t)}</button>`).join('')}</div>
          <p class="tdhelp">${tool === 'line' ? L("Toca les caselles en ordre per fer el camí de cinta. Per començar-ne un de nou, toca «Cinta nova».", 'Toca las casillas en orden para hacer el camino de cinta. Para empezar uno nuevo, toca «Cinta nueva».') + ` <button class="link" onclick="RDES.newLine()">${L('Cinta nova', 'Cinta nueva')}</button>` : tool === 'bot' ? L('Toca on comença el robot. Torna-hi a tocar per girar-lo.', 'Toca donde empieza el robot. Vuelve a tocar para girarlo.') : tool === 'goal' ? L('La meta ocupa 2 × 2 caselles (20 × 20 cm).', 'La meta ocupa 2 × 2 casillas (20 × 20 cm).') : L('Cada casella de la quadrícula fa 10 × 10 cm.', 'Cada casilla de la cuadrícula mide 10 × 10 cm.')}</p>
          <b class="rdmh">${L('La missió', 'La misión')}</b><div class="rdgoals">${RDES_GOALS.map(([k, t]) => `<label><input type="checkbox" ${D.goals.includes(k) ? 'checked' : ''} onchange="RDES.goal('${k}',this.checked)"> ${tx(t)}</label>`).join('')}</div>
          <label class="lbl">${L('Nom de la missió', 'Nombre de la misión')}</label><input id="tdname" class="nm" maxlength="28" value="${esc(name)}" placeholder="${L('p. ex. El rescat del gat', 'p. ej. El rescate del gato')}">
          <ul class="tdck"><li class="${D.goal ? 'ok' : ''}">${D.goal ? TIC.ok : '○'} ${L('Hi ha una meta', 'Hay una meta')}</li><li class="${D.goals.length ? 'ok' : ''}">${D.goals.length ? TIC.ok : '○'} ${L('Has triat la missió', 'Has elegido la misión')}</li><li class="${okN ? 'ok' : ''}" id="rdnm">${okN ? TIC.ok : '○'} ${L('La missió té nom', 'La misión tiene nombre')}</li></ul></div></div></div>`;
      $('#tsb').classList.add('wide');
      const cv = document.getElementById('rdcv'), W = roboWorld(spec); roboPaint(cv, W, roboSim(W), { sonar: false });
      $('#tdname').oninput = e => { name = e.target.value; const okn = name.trim().length > 1, li = document.getElementById('rdnm'); li.className = okn ? 'ok' : ''; li.innerHTML = `${okn ? TIC.ok : '○'} ${L('La missió té nom', 'La misión tiene nombre')}`; const b = document.getElementById('tnext'); if (b) b.disabled = !(D.goal && D.goals.length && okn); };
      tFoot(L('Desa la missió', 'Guarda la misión'), () => { const t = TS_(); t.rmaps = t.rmaps || {}; t.rmaps[st.slot || 'k8'] = { D, spec: roboDesSpec(D), name: name.trim(), d: today() }; save(); addXPsafe(5); toast(L('Missió desada!', '¡Misión guardada!')); tNext(); }, ok);
    };
    const eq = (a, x, y) => a[0] === x && a[1] === y;
    window.RDES = {
      tool(k) { tool = k; draw(); }, newLine() { D.line = []; draw(); }, goal(k, on) { D.goals = on ? [...new Set([...D.goals, k])] : D.goals.filter(g => g !== k); draw(); },
      put(x, y) {
        if (tool === 'wall') { const i = D.walls.findIndex(w => eq(w, x, y)); if (i >= 0) D.walls.splice(i, 1); else if (!eq(D.bot, x, y)) D.walls.push([x, y]); }
        else if (tool === 'line') { if (!D.line.length || !eq(D.line[D.line.length - 1], x, y)) D.line.push([x, y]); }
        else if (tool === 'goal') D.goal = [Math.min(x, D.cw - 2), Math.min(y, D.ch - 2)];
        else if (tool === 'can') { const i = D.cans.findIndex(w => eq(w, x, y)); if (i >= 0) D.cans.splice(i, 1); else if (D.cans.length < 4) D.cans.push([x, y]); }
        else if (tool === 'lamp') D.lamp = D.lamp && eq(D.lamp, x, y) ? null : [x, y];
        else if (tool === 'bot') { if (eq(D.bot, x, y)) D.bot[2] = (D.bot[2] + 90) % 360; else { D.bot = [x, y, D.bot[2]]; D.walls = D.walls.filter(w => !eq(w, x, y)); } }
        else if (tool === 'erase') { D.walls = D.walls.filter(w => !eq(w, x, y)); D.cans = D.cans.filter(w => !eq(w, x, y)); D.line = D.line.filter(w => !eq(w, x, y)); if (D.lamp && eq(D.lamp, x, y)) D.lamp = null; if (D.goal && x >= D.goal[0] && x <= D.goal[0] + 1 && y >= D.goal[1] && y <= D.goal[1] + 1) D.goal = null; }
        SFX.tap && SFX.tap(); draw(); }
    };
    draw();
  };
  // programar la missió desada (un projecte lliure: la paleta sencera)
  TSTEP.rmybuild = function (st) {
    const m = rdMine(st.slot);
    if (!m) { $('#tsb').innerHTML = `<div class="tcol">${tBubble('numi', L('Encara no has desat cap missió. Torna a la sessió «Dissenya la missió» i desa\'n una: aquí la podràs programar.', 'Aún no has guardado ninguna misión. Vuelve a la sesión «Diseña la misión» y guarda una: aquí podrás programarla.'))}</div>`; return tContinue(); }
    TSTEP.rcreate({ ...st, w: m.spec, name: m.name, q: tval(st.q).replace('{nom}', esc(m.name)) });
    // és la missió de l'alumne/a: si després de tres intents encara no surt, la pot desar tal com està (i la revisa amb el professor/a)
    let tries = 0; const f0 = RB.onFail; RB.onFail = bad => { if (f0) f0(bad); if (++tries >= 3 && !RB.solved) tFoot(L('Desa-la tal com està i continua', 'Guárdala tal como está y continúa'), () => { const t = TS_(); t.port.push({ id: 'pj' + Date.now().toString(36), kind: 'robo', sid: TSS.id, t: m.name || TSS.s.t, w: m.spec, prog: rbClone(RB.prog), st: { scripts: st.scripts, vars: st.vars, varNames: st.varNames }, d: today() }); if (t.port.length > 60) t.port.shift(); save(); toast(L('Projecte desat a «Projectes»!', '¡Proyecto guardado en «Proyectos»!')); tNext(); }, true); };
  };
}
