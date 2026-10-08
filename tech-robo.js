/* ===== Numi Tech · Tech Robòtica: el simulador del robot (micro:bit + Maqueen Lite V5) =====
   Contingut i codi propis de Numi. Un robot de dues rodes en una arena contínua (en centímetres), amb física de
   tracció diferencial, xocs, i els sensors del kit de l'aula: ultrasons (distància), 3 sensors de línia (L, M, R),
   2 sensors de llum, llums davanters RGB, brunzidor i la pantalla 5×5 del micro:bit.
   · El motor de simulació (aquest bloc) no toca el DOM: el fa servir l'escenari de la sessió i també les proves
     automàtiques (Node, sense navegador), que comproven que cada repte té una solució que funciona.
   · Els programes són arbres de blocs (sense eval). L'intèrpret és un generador que «demana temps» (esperes) i el
     bucle de física avança a pas fix (50 vegades per segon), igual al navegador que a les proves.
   · Unitats: centímetres, segons i graus. x cap a la dreta, y cap avall (com la pantalla); angle 0 = mira a la dreta,
     90 = mira avall, -90 = mira amunt. Velocitat dels motors: 0-255, com a MakeCode. */

const ROBO_K = {
  B: 6.4,        // distància entre rodes (cm): a velocitat 100 girant sobre si mateix fa 180°/s → 90° en 0,5 s
  R: 5.2,        // radi del cos per als xocs (cm)
  KV: .1,        // cm/s per unitat de velocitat: velocitat 100 → 10 cm/s
  DZ: 18,        // zona morta: per sota d'aquesta velocitat les rodes no tenen prou força i no giren
  TAU: .07,      // inèrcia dels motors (s)
  DT: .02,       // pas de la física (s)
  WR: 2.15,      // radi de la roda (cm)
  LS: [[3.4, -1.5], [3.4, 0], [3.4, 1.5]],   // sensors de línia L, M, R (endavant, cap a la dreta)
  US: 5.2,                                     // sensor d'ultrasons, a la part del davant
  LT: [[2.6, -2.8, -40], [2.6, 2.8, 40]],      // sensors de llum (endavant, dreta, angle on miren)
  BOX: 6.2,      // radi de la caixa de sumo per als xocs (és un cub de 10 cm)
  LW: 2.2        // amplada de la cinta negra (cm)
};
const roboClamp = (v, a, b) => Math.max(a, Math.min(b, v));
const roboRad = d => d * Math.PI / 180;
// atzar amb llavor (cada execució és igual: el soroll dels sensors es pot repetir)
function roboRng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

/* ---------- Arenes ----------
   Una arena s'escriu com un objecte:
   { w, h, start:[x,y,angle], lines:[camí…], walls:[[x,y,w,h,estil]], posts:[[x,y,r]], zones:[{id,x,y,w,h | r, c, t}],
     ring:{x,y,r}, box:[x,y], lamp:[x,y], amb, movers:[{x,y,a,w,h,prof:[[t,v]…]}], marks:{A:[x,y]}, ghost:[[x,y]…],
     goals:[…], tmax, pen, starts:[[x,y,a]…], dark }
   Un camí és una llista d'ordres: ['M',x,y] (comença), ['L',x,y] (recta), ['A',cx,cy,r,a0,a1] (arc de a0 a a1 graus),
   ['Q',cx,cy,x,y] (corba), ['Z'] (tanca). */
function roboPathPts(cmds) {
  const pts = []; let cx = 0, cy = 0, sx = 0, sy = 0;
  const add = (x, y) => { const l = pts[pts.length - 1]; if (!l || Math.hypot(l[0] - x, l[1] - y) > .01) pts.push([x, y]); };
  for (const c of cmds) {
    if (c[0] === 'M') { cx = sx = c[1]; cy = sy = c[2]; add(cx, cy); }
    else if (c[0] === 'L') { const n = Math.max(1, Math.ceil(Math.hypot(c[1] - cx, c[2] - cy))); for (let i = 1; i <= n; i++) add(cx + (c[1] - cx) * i / n, cy + (c[2] - cy) * i / n); cx = c[1]; cy = c[2]; }
    else if (c[0] === 'A') { const [, ox, oy, r, a0, a1] = c, n = Math.max(2, Math.ceil(Math.abs(roboRad(a1 - a0)) * r)); for (let i = 0; i <= n; i++) { const a = roboRad(a0 + (a1 - a0) * i / n); add(ox + r * Math.cos(a), oy + r * Math.sin(a)); } cx = ox + r * Math.cos(roboRad(a1)); cy = oy + r * Math.sin(roboRad(a1)); }
    else if (c[0] === 'Q') { const [, qx, qy, x, y] = c, n = Math.max(4, Math.ceil(Math.hypot(qx - cx, qy - cy) + Math.hypot(x - qx, y - qy))); for (let i = 1; i <= n; i++) { const t = i / n, u = 1 - t; add(u * u * cx + 2 * u * t * qx + t * t * x, u * u * cy + 2 * u * t * qy + t * t * y); } cx = x; cy = y; }
    else if (c[0] === 'Z') { const n = Math.max(1, Math.ceil(Math.hypot(sx - cx, sy - cy))); for (let i = 1; i <= n; i++) add(cx + (sx - cx) * i / n, cy + (sy - cy) * i / n); cx = sx; cy = sy; }
  }
  return pts;
}
const roboInZone = (z, x, y) => z.r ? Math.hypot(x - z.x, y - z.y) <= z.r : x >= z.x && x <= z.x + z.w && y >= z.y && y <= z.y + z.h;
function roboArena(spec) {
  if (typeof spec === 'string') spec = ROBO_AR[spec];
  if (spec.base) spec = { ...ROBO_AR[spec.base], ...spec, base: null };
  const A = { spec, w: spec.w || 200, h: spec.h || 140, lw: spec.lw || ROBO_K.LW, lines: (spec.lines || []).map(roboPathPts), walls: (spec.walls || []).map(w => ({ x: w[0], y: w[1], w: w[2], h: w[3], st: w[4] || 'block' })),
    posts: (spec.posts || []).map(p => ({ x: p[0], y: p[1], r: p[2] || 4, st: p[3] || 'cone' })), zones: (spec.zones || []).map(z => ({ c: 'g', ...z })), ring: spec.ring || null, box: spec.box || null, lamp: spec.lamp || null,
    amb: spec.amb ?? (spec.lamp ? 12 : 150), dark: spec.dark ?? !!spec.lamp, movers: (spec.movers || []).map(m => ({ w: 10, h: 8, ...m })), marks: spec.marks || {}, ghost: spec.ghost || null,
    goals: spec.goals || [], tmax: spec.tmax || 30, pen: !!spec.pen, starts: spec.starts || [spec.start || [30, 70, 0]], seed: spec.seed || 7, decor: spec.decor || [], tunnels: (spec.zones || []).filter(z => z.amb != null) };
  // terra: una trama de mig centímetre on 1 = negre (cinta, vora del ring…)
  const fw = A.fw = Math.ceil(A.w * 2), fh = A.fh = Math.ceil(A.h * 2), fr = A.fr = new Uint8Array(fw * fh), hw = A.lw / 2;
  A.segs = [];
  const stamp = (x1, y1, x2, y2, r) => {
    const minx = Math.max(0, Math.floor((Math.min(x1, x2) - r) * 2)), maxx = Math.min(fw - 1, Math.ceil((Math.max(x1, x2) + r) * 2)), miny = Math.max(0, Math.floor((Math.min(y1, y2) - r) * 2)), maxy = Math.min(fh - 1, Math.ceil((Math.max(y1, y2) + r) * 2));
    const dx = x2 - x1, dy = y2 - y1, L2 = dx * dx + dy * dy || 1e-9;
    for (let j = miny; j <= maxy; j++) for (let i = minx; i <= maxx; i++) { const px = (i + .5) / 2, py = (j + .5) / 2, t = roboClamp(((px - x1) * dx + (py - y1) * dy) / L2, 0, 1); if (Math.hypot(px - x1 - t * dx, py - y1 - t * dy) <= r) fr[j * fw + i] = 1; }
  };
  for (const p of A.lines) for (let i = 1; i < p.length; i++) { stamp(p[i - 1][0], p[i - 1][1], p[i][0], p[i][1], hw); A.segs.push([p[i - 1][0], p[i - 1][1], p[i][0], p[i][1]]); }
  if (A.ring) { const { x, y, r } = A.ring; for (let j = 0; j < fh; j++) for (let i = 0; i < fw; i++) { const d = Math.hypot((i + .5) / 2 - x, (j + .5) / 2 - y); if (d >= r - 3.5 && d <= r + .5) fr[j * fw + i] = 1; } }
  for (const z of A.zones) if (z.black) for (let j = 0; j < fh; j++) for (let i = 0; i < fw; i++) if (roboInZone(z, (i + .5) / 2, (j + .5) / 2)) fr[j * fw + i] = 1;
  // caselles per a l'aspiradora (10 cm): les que no són dins d'un obstacle
  A.cov = { n: 0, cs: 10, nx: Math.floor(A.w / 10), ny: Math.floor(A.h / 10), free: new Set() };
  for (let j = 0; j < A.cov.ny; j++) for (let i = 0; i < A.cov.nx; i++) { const cx = i * 10 + 5, cy = j * 10 + 5; if (!A.walls.some(w => cx > w.x - 3 && cx < w.x + w.w + 3 && cy > w.y - 3 && cy < w.y + w.h + 3) && !A.posts.some(p => Math.hypot(cx - p.x, cy - p.y) < p.r + 3)) A.cov.free.add(i + ',' + j); }
  return A;
}

/* ---------- Estat del robot ---------- */
function roboState(A, start) {
  const [x, y, a] = start || A.starts[0];
  return { x, y, th: roboRad(a), vl: 0, vr: 0, ml: 0, mr: 0, wl: 0, wr: 0, t: 0, hits: 0, hit: false, push: false, odo: 0,
    lights: { L: null, R: null }, mat: null, notes: [], vars: {}, ev: [], trail: [[x, y]], cov: new Set(), viz: { us: null, ls: [0, 0, 0], lt: [0, 0] },
    box: A.box ? { x: A.box[0], y: A.box[1], a: 0 } : null, movers: A.movers.map(m => ({ ...m, v: 0, th: roboRad(m.a || 0) })), rng: roboRng(A.seed) };
}
const roboPt = (S, f, s) => { const c = Math.cos(S.th), n = Math.sin(S.th); return [S.x + f * c - s * n, S.y + f * n + s * c]; };
const roboBlackAt = (A, x, y) => x < 0 || y < 0 || x >= A.w || y >= A.h ? 0 : A.fr[(Math.floor(y * 2)) * A.fw + Math.floor(x * 2)];
function roboLineS(A, S, i) { const [f, s] = ROBO_K.LS[i], [x, y] = roboPt(S, f, s); return roboBlackAt(A, x, y); }
// llum ambient en un punt: les zones d'ombra (túnels) en tenen menys
function roboAmb(A, x, y) { for (const z of A.tunnels) if (roboInZone(z, x, y)) return z.amb; return A.amb; }
function roboLight(A, S, side, noisy = true) {
  const [f, s, an] = ROBO_K.LT[side === 'R' ? 1 : 0], [px, py] = roboPt(S, f, s);
  let v = roboAmb(A, px, py);
  if (A.lamp) { const dx = A.lamp[0] - px, dy = A.lamp[1] - py, d = Math.hypot(dx, dy) || 1, dir = S.th + roboRad(an), c = (dx * Math.cos(dir) + dy * Math.sin(dir)) / d; v += 240 / (1 + (d / 34) ** 2) * (.4 + .6 * Math.max(0, c)); }
  return Math.round(roboClamp(v + (noisy ? (S.rng() - .5) * 2 : 0), 0, 255));
}
// raig des d'un punt: on xoca primer (parets, vores de l'arena, pals, caixa, robots que es mouen)
function roboRay(A, S, ox, oy, dx, dy) {
  let best = 300;
  const rect = (x0, y0, x1, y1) => { let tmin = -Infinity, tmax = Infinity;
    for (const [o, d, a, b] of [[ox, dx, x0, x1], [oy, dy, y0, y1]]) { if (Math.abs(d) < 1e-9) { if (o < a || o > b) return; } else { let t1 = (a - o) / d, t2 = (b - o) / d; if (t1 > t2) [t1, t2] = [t2, t1]; tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2); } }
    if (tmax >= tmin && tmin > 0 && tmin < best) best = tmin; };
  const circ = (cx, cy, r) => { const fx = ox - cx, fy = oy - cy, b = fx * dx + fy * dy, c = fx * fx + fy * fy - r * r, D = b * b - c; if (D < 0) return; const t = -b - Math.sqrt(D); if (t > 0 && t < best) best = t; };
  // vores: la paret de l'arena (l'interior és lliure)
  const tx = dx > 0 ? (A.w - ox) / dx : dx < 0 ? -ox / dx : Infinity, ty = dy > 0 ? (A.h - oy) / dy : dy < 0 ? -oy / dy : Infinity; best = Math.min(best, tx, ty);
  for (const w of A.walls) rect(w.x, w.y, w.x + w.w, w.y + w.h);
  for (const p of A.posts) circ(p.x, p.y, p.r);
  if (S.box) rect(S.box.x - 5, S.box.y - 5, S.box.x + 5, S.box.y + 5);
  for (const m of S.movers) circ(m.x, m.y, Math.max(m.w, m.h) / 2);
  return best;
}
// sensor d'ultrasons: un con estret (3 raigs) i una mica de soroll; torna centímetres sencers, com el de veritat
function roboDist(A, S, noisy = true) {
  const [ox, oy] = roboPt(S, ROBO_K.US, 0); let d = 300, hit = null;
  for (const da of [-8, 0, 8]) { const a = S.th + roboRad(da), t = roboRay(A, S, ox, oy, Math.cos(a), Math.sin(a)); if (t < d) { d = t; hit = [ox + Math.cos(a) * t, oy + Math.sin(a) * t]; } }
  S.viz.us = { x: ox, y: oy, hx: hit ? hit[0] : ox + Math.cos(S.th) * 300, hy: hit ? hit[1] : oy + Math.sin(S.th) * 300, d, t: S.t };
  if (!noisy) return d;
  return Math.round(roboClamp(d + (S.rng() + S.rng() - 1) * .6, 0, 300));
}

/* ---------- Física: un pas de 20 ms ---------- */
function roboWheelV(v) { const a = Math.abs(v); return a < ROBO_K.DZ ? 0 : Math.sign(v) * Math.min(255, a) * ROBO_K.KV; }
function roboPhys(A, S) {
  const K = ROBO_K, dt = K.DT, f = 1 - Math.exp(-dt / K.TAU);
  // els robots que es mouen sols (el líder)
  for (const m of S.movers) {
    let v = 0; for (const [t, vv] of m.prof || []) if (S.t >= t) v = vv; m.v = v;
    const nx = m.x + Math.cos(m.th) * v * dt, ny = m.y + Math.sin(m.th) * v * dt, r = Math.max(m.w, m.h) / 2;
    const free = nx > r && ny > r && nx < A.w - r && ny < A.h - r && !A.walls.some(w => nx + r > w.x && nx - r < w.x + w.w && ny + r > w.y && ny - r < w.y + w.h) && Math.hypot(nx - S.x, ny - S.y) > K.R + r;
    if (free) { m.x = nx; m.y = ny; } else m.v = 0;
  }
  S.vl += (roboWheelV(S.ml) - S.vl) * f; S.vr += (roboWheelV(S.mr) - S.vr) * f;
  if (Math.abs(S.vl) < 1e-3) S.vl = 0; if (Math.abs(S.vr) < 1e-3) S.vr = 0;
  let v = (S.vl + S.vr) / 2; const w = (S.vl - S.vr) / K.B;
  if (S.push) v *= .6;   // empènyer la caixa costa
  const x0 = S.x, y0 = S.y;
  S.th += w * dt; S.x += v * Math.cos(S.th - w * dt / 2) * dt; S.y += v * Math.sin(S.th - w * dt / 2) * dt;
  S.wl += S.vl * dt / K.WR; S.wr += S.vr * dt / K.WR;
  // xocs: el robot és un cercle
  const R = K.R; let hit = false, nx = 0, ny = 0;
  const outRect = (x0_, y0_, x1_, y1_) => { const cx = roboClamp(S.x, x0_, x1_), cy = roboClamp(S.y, y0_, y1_), dx = S.x - cx, dy = S.y - cy, d = Math.hypot(dx, dy);
    if (d < R) { if (d < 1e-6) { S.x = x0; S.y = y0; } else { S.x = cx + dx / d * R; S.y = cy + dy / d * R; nx += dx / d; ny += dy / d; } hit = true; } };
  for (const wl of A.walls) outRect(wl.x, wl.y, wl.x + wl.w, wl.y + wl.h);
  for (const p of A.posts) { const dx = S.x - p.x, dy = S.y - p.y, d = Math.hypot(dx, dy); if (d < R + p.r) { S.x = p.x + dx / d * (R + p.r); S.y = p.y + dy / d * (R + p.r); hit = true; } }
  for (const m of S.movers) { const r = Math.max(m.w, m.h) / 2, dx = S.x - m.x, dy = S.y - m.y, d = Math.hypot(dx, dy); if (d < R + r) { S.x = m.x + dx / d * (R + r); S.y = m.y + dy / d * (R + r); hit = true; } }
  if (S.x < R) { S.x = R; hit = true; } if (S.y < R) { S.y = R; hit = true; } if (S.x > A.w - R) { S.x = A.w - R; hit = true; } if (S.y > A.h - R) { S.y = A.h - R; hit = true; }
  // la caixa de sumo: el robot l'empeny
  S.push = false;
  if (S.box) { const b = S.box, dx = b.x - S.x, dy = b.y - S.y, d = Math.hypot(dx, dy) || 1e-6, ov = R + K.BOX - d;
    if (ov > 0) { S.push = true; b.x += dx / d * ov * .85; b.y += dy / d * ov * .85; S.x -= dx / d * ov * .15; S.y -= dy / d * ov * .15; b.a += (dx * Math.sin(S.th) - dy * Math.cos(S.th)) / d * .01;
      const r = K.BOX; let stuck = false; if (b.x < r) { b.x = r; stuck = true; } if (b.y < r) { b.y = r; stuck = true; } if (b.x > A.w - r) { b.x = A.w - r; stuck = true; } if (b.y > A.h - r) { b.y = A.h - r; stuck = true; }
      for (const wl of A.walls) { const cx = roboClamp(b.x, wl.x, wl.x + wl.w), cy = roboClamp(b.y, wl.y, wl.y + wl.h), ex = b.x - cx, ey = b.y - cy, e = Math.hypot(ex, ey); if (e < r && e > 1e-6) { b.x = cx + ex / e * r; b.y = cy + ey / e * r; stuck = true; } }
      if (stuck) { const ex = S.x - b.x, ey = S.y - b.y, e = Math.hypot(ex, ey) || 1; if (e < R + K.BOX) { S.x = b.x + ex / e * (R + K.BOX); S.y = b.y + ey / e * (R + K.BOX); } } } }
  if (hit && !S.hit) { S.hits++; S.ev.push({ k: 'bump', x: S.x + Math.cos(S.th) * R, y: S.y + Math.sin(S.th) * R, t: S.t }); }
  S.hit = hit;
  const mv = Math.hypot(S.x - x0, S.y - y0); S.odo += mv;
  // rastre (llapis) i caselles visitades
  const l = S.trail[S.trail.length - 1]; if (Math.hypot(S.x - l[0], S.y - l[1]) > .5) { S.trail.push([S.x, S.y]); if (S.trail.length > 6000) S.trail.splice(1, 1); }
  const cs = A.cov.cs; for (let j = Math.floor((S.y - R) / cs); j <= Math.floor((S.y + R) / cs); j++) for (let i = Math.floor((S.x - R) / cs); i <= Math.floor((S.x + R) / cs); i++) if (Math.hypot(i * cs + 5 - S.x, j * cs + 5 - S.y) < R + 2) S.cov.add(i + ',' + j);
  S.viz.ls = [0, 1, 2].map(i => roboLineS(A, S, i));
  S.t = Math.round((S.t + dt) * 1000) / 1000;
}
const roboStill = S => Math.abs(S.vl) < .3 && Math.abs(S.vr) < .3;
// distància real (sense soroll) del davant del robot a l'obstacle que té al davant
const roboFront = (A, S) => { const [ox, oy] = roboPt(S, ROBO_K.US, 0); return roboRay(A, S, ox, oy, Math.cos(S.th), Math.sin(S.th)); };
// distància del centre de la barra de sensors a la línia més propera
function roboOffLine(A, S) { const [px, py] = roboPt(S, ROBO_K.LS[1][0], 0); let b = 1e9; for (const [x1, y1, x2, y2] of A.segs) { const dx = x2 - x1, dy = y2 - y1, L2 = dx * dx + dy * dy || 1e-9, t = roboClamp(((px - x1) * dx + (py - y1) * dy) / L2, 0, 1), d = Math.hypot(px - x1 - t * dx, py - y1 - t * dy); if (d < b) b = d; } return b; }

/* ---------- Blocs i intèrpret ---------- */
const ROBO_VARS = { vel: ['velocitat', 'velocidad'], n: ['comptador', 'contador'], g: ['gir', 'giro'] };
const ROBO_COL = { r: '#F2453D', g: '#2ED16B', u: '#2F7BFF', y: '#FFC531', p: '#A35CFF', c: '#22D3EE', w: '#FFFFFF', off: null };
const ROBO_CN = { r: ['vermell', 'rojo'], g: ['verd', 'verde'], u: ['blau', 'azul'], y: ['groc', 'amarillo'], p: ['lila', 'lila'], c: ['cian', 'cian'], w: ['blanc', 'blanco'], off: ['apagats', 'apagadas'] };
const ROBO_NOTES = { do: 262, re: 294, mi: 330, fa: 349, sol: 392, la: 440, si: 494, 'do+': 523 };
// la pantalla de 5×5: icones (1 = LED encès), fila a fila
const ROBO_ICONS = {
  heart: '01010 11111 11111 01110 00100', happy: '00000 01010 00000 10001 01110', sad: '00000 01010 00000 01110 10001', yes: '00000 00001 00010 10100 01000',
  no: '10001 01010 00100 01010 10001', house: '00100 01110 11111 01110 01010', target: '00100 01110 11011 01110 00100', square: '11111 10001 10001 10001 11111',
  up: '00100 01110 10101 00100 00100', ghost: '01110 10101 11111 11111 10101'
};
const ROBO_ICN = { heart: ['cor', 'corazón'], happy: ['cara contenta', 'cara contenta'], sad: ['cara trista', 'cara triste'], yes: ['sí ✓', 'sí ✓'], no: ['no ✗', 'no ✗'], house: ['casa', 'casa'], target: ['diana', 'diana'], square: ['quadrat', 'cuadrado'], up: ['fletxa', 'flecha'], ghost: ['fantasma', 'fantasma'] };
const ROBO_DIG = ['111 101 101 101 111', '010 110 010 010 111', '111 001 111 100 111', '111 001 111 001 111', '101 101 111 001 001', '111 100 111 001 111', '111 100 111 101 111', '111 001 010 010 010', '111 101 111 101 111', '111 101 111 001 111'];
const roboVal = (S, v) => typeof v === 'number' ? v : typeof v === 'string' ? (S.vars[v] || 0) : 0;
function roboSetVal(R, b) {
  const { A, S } = R;
  const src = b.src || 'n';
  if (src === 'n') return b.n || 0;
  const raw = src === 'dist' ? roboDist(A, S) : src === 'lightL' ? roboLight(A, S, 'L') : src === 'lightR' ? roboLight(A, S, 'R') : roboVal(S, src);
  return Math.round((raw - (b.o || 0)) * (b.m ?? 1) * 100) / 100;
}
function roboCmp(a, op, b) { return op === '<' ? a < b : op === '>' ? a > b : a === b; }
function roboCond(R, c) {
  const { A, S } = R;
  if (!c) return false;
  switch (c.s) {
    case 'dist': return roboCmp(roboDist(A, S), c.op || '<', c.n);
    case 'line': { const v = [0, 1, 2].map(i => roboLineS(A, S, i)), b = c.b ?? 1;
      if (c.p === 'L') return v[0] === b; if (c.p === 'M') return v[1] === b; if (c.p === 'R') return v[2] === b;
      if (c.p === 'LR') return v[0] === b && v[2] === b; if (c.p === 'all') return v.every(x => x === b); if (c.p === 'any') return v.some(x => x === b); return false; }
    case 'light': { const l = roboLight(A, S, c.p || 'L'); S.viz.lt[c.p === 'R' ? 1 : 0] = l; return roboCmp(l, c.op || '>', c.n); }
    case 'lightc': { const l = roboLight(A, S, 'L'), r = roboLight(A, S, 'R'); S.viz.lt = [l, r]; return l > r; }
    case 'var': return roboCmp(S.vars[c.v] || 0, c.op || '<', c.n);
  }
  return false;
}
// intèrpret: dona {b} (el bloc que comença), {w:segons} (esperar), {u:condició} (esperar fins que…) o {k:1} (un pas de física)
function* roboExec(R, list, depth = 0) {
  const S = R.S;
  const mot = (l, r) => { S.ml = roboClamp(Math.round(l), -255, 255); S.mr = roboClamp(Math.round(r), -255, 255); };
  for (const b of list || []) {
    if (R.halt) return;
    if (++R.n > 20000) { R.halt = 'long'; return; }
    yield { b };
    switch (b.k) {
      case 'go': { const v = roboVal(S, b.v) * (b.d === 'b' ? -1 : 1); mot(v, v); yield { w: b.t }; mot(0, 0); break; }
      case 'turn': { const v = roboVal(S, b.v); b.d === 'l' ? mot(-v, v) : mot(v, -v); yield { w: b.t }; mot(0, 0); break; }
      case 'run': { const v = roboVal(S, b.v) * (b.d === 'b' ? -1 : 1); mot(v, v); break; }
      case 'mot': mot(roboVal(S, b.l), roboVal(S, b.r)); break;
      case 'stop': mot(0, 0); break;
      case 'wait': yield { w: b.t }; break;
      case 'waitu': yield { u: b.c }; break;
      case 'rep': for (let i = 0; i < (b.n || 1); i++) { const t0 = S.t; yield* roboExec(R, b.b, depth); if (R.halt) return; if (S.t === t0) yield { k: 1 }; } break;
      case 'ever': for (;;) { const t0 = S.t; yield* roboExec(R, b.b, depth); if (R.halt) return; if (S.t === t0) yield { k: 1 }; } // eslint-disable-line no-unreachable
      case 'while': case 'until': for (;;) { const c = roboCond(R, b.c); if (b.k === 'while' ? !c : c) break; const t0 = S.t; yield* roboExec(R, b.b, depth); if (R.halt) return; if (S.t === t0) yield { k: 1 }; } break;
      case 'if': yield* roboExec(R, roboCond(R, b.c) ? b.b : b.e, depth); break;
      case 'light': { const c = b.c === 'off' ? null : b.c; if (b.p !== 'R') S.lights.L = c; if (b.p !== 'L') S.lights.R = c; S.ev.push({ k: 'light', t: S.t }); break; }
      case 'note': S.notes.push({ t: S.t, n: b.n }); S.ev.push({ k: 'note', n: b.n, t: S.t }); yield { w: (b.d || 1) * .5 }; break;
      case 'set': S.vars[b.v] = roboSetVal(R, b); break;
      case 'chg': S.vars[b.v] = Math.round(((S.vars[b.v] || 0) + (b.n ?? 1)) * 100) / 100; break;
      case 'num': S.mat = { k: 'n', v: Math.round(roboVal(S, b.v)), t: S.t }; break;
      case 'icon': S.mat = { k: 'i', v: b.i || 'heart', t: S.t }; break;
    }
  }
}
// l'executor: la física i el programa avancen junts, 20 ms cada vegada
function roboRunner(A, prog, o = {}) {
  const S = roboState(A, o.start);
  const R = { A, S, prog, n: 0, wait: null, gdone: false, endT: 0, cur: null, res: null, halt: null, goals: (o.goals || A.goals).map(g => ({ ...g, st: 0, i: 0 })), still: 0, motorsOnAtEnd: false };
  R.gen = roboExec(R, prog);
  return R;
}
function roboTick(R) {
  if (R.res) return R.res;
  const { A, S } = R;
  // 1. el programa avança fins que demana temps
  let guard = 0;
  while (!R.wait && !R.gdone) {
    const r = R.gen.next();
    if (r.done || R.halt) { R.gdone = true; R.endT = S.t; R.motorsOnAtEnd = S.ml !== 0 || S.mr !== 0; break; }
    const v = r.value;
    if (v.b) { R.cur = v.b; R.lastB = v.b; continue; }
    if (v.w != null) { R.wait = { until: S.t + Math.max(0, v.w) }; break; }
    if (v.u) { R.wait = { c: v.u }; if (roboCond(R, v.u)) R.wait = null; else break; continue; }
    if (v.k) { R.wait = { until: S.t + ROBO_K.DT / 2 }; break; }
    if (++guard > 5000) { R.halt = 'loop'; R.gdone = true; break; }
  }
  // 2. un pas de física
  roboPhys(A, S);
  // 3. s'ha acabat l'espera?
  if (R.wait) { if (R.wait.until != null && S.t >= R.wait.until - 1e-9) R.wait = null; else if (R.wait.c && roboCond(R, R.wait.c)) R.wait = null; }
  // 4. objectius
  R.still = roboStill(S) ? R.still + ROBO_K.DT : 0;
  const f = roboGoalLive(R);
  if (f) return (R.res = { ok: false, why: f });
  // èxit abans d'hora: només si hi ha algun objectiu «d'arribar» (no només restriccions com «sense tocar res»)
  if (R.goals.some(g => !ROBO_CONSTR.includes(g.k)) && R.goals.every(g => roboGoalOk(R, g))) return (R.res = { ok: true });
  if (R.halt === 'loop' || R.halt === 'long') return (R.res = { ok: false, why: R.halt });
  // 5. final: el programa s'ha acabat i el robot s'ha aturat (o fa massa estona que corre)
  const settled = R.gdone && (R.still >= .3 || S.t - R.endT > 2.5);
  if (settled || S.t >= A.tmax) {
    if (!R.goals.length) return (R.res = { ok: true, free: true });
    const g = R.goals.find(g => !roboGoalOk(R, g));
    let why = g ? roboGoalWhy(R, g) : 'long';
    if (!g && !R.gdone && R.goals.every(g => ROBO_CONSTR.includes(g.k))) return (R.res = { ok: true });
    if (!R.gdone && g) why = R.goals.some(g => g.k === 'time') ? 'time' : why === 'nostop' ? 'nostop' : 'long';
    else if (R.motorsOnAtEnd && !roboStill(S)) why = 'motoron';
    if (!R.prog.length) why = 'empty';
    return (R.res = { ok: false, why });
  }
  return null;
}
// sense dibuixar: executa fins al final (proves automàtiques, «on acabarà?»)
function roboSim(spec, prog, o = {}) {
  const A = spec.fr ? spec : roboArena(spec), out = [];
  for (const st of (o.start ? [o.start] : A.starts)) {
    const R = roboRunner(A, prog, { ...o, start: st });
    let n = 0; while (!roboTick(R) && ++n < 200000);
    out.push({ ...R.res, S: R.S, R });
    if (!R.res.ok && !o.all) break;
  }
  const last = out[out.length - 1];
  return { ok: out.every(r => r.ok), why: (out.find(r => !r.ok) || {}).why, S: last.S, R: last.R, runs: out };
}

/* ---------- Objectius dels reptes ----------
   zone {z, pass?}       arribar (i parar) dins una zona; amb pass, n'hi ha prou de passar-hi
   seq {zs:[…]}          passar per les zones en aquest ordre (i parar a l'última)
   near {min,max}        parar amb el davant a aquesta distància de l'obstacle
   notouch               no tocar res
   line {off}            no sortir de la línia (el centre dels sensors a menys de «off» cm)
   out                   treure la caixa del ring          inring   el robot no surt del ring
   time {max}            acabar en menys de max segons     cover {pct}  netejar (passar per) aquest % del terra
   path {pts, tol}       passar pels punts en ordre (dibuixos) i parar al final
   rule {when, light?, note?}   mentre es compleix «when», els llums han de ser d'aquest color (i ha de sonar alguna nota)
   show {n | i}          la pantalla acaba mostrant aquest número o icona
   lights {c}            els llums acaben d'aquest color      notes {n}  tocar almenys n notes
   uses {b}              el programa fa servir aquest bloc (es comprova abans d'executar) */
const ROBO_CONSTR = ['notouch', 'line', 'inring', 'time', 'uses', 'rule'];
function roboZone(A, id) { return A.zones.find(z => z.id === id); }
function roboGoalLive(R) {
  const { A, S } = R;
  for (const g of R.goals) {
    if (g.k === 'notouch' && S.hits) return 'bump';
    if (g.k === 'line') { const d = roboOffLine(A, S); if (d < (g.off || 4.5)) g.on = 1; if (g.on && d > (g.off || 4.5)) { g.out = (g.out || 0) + ROBO_K.DT; if (g.out > .25) return 'offline'; } else g.out = 0; }
    if (g.k === 'inring' && A.ring && Math.hypot(S.x - A.ring.x, S.y - A.ring.y) > A.ring.r) return 'outring';
    if (g.k === 'time' && S.t > g.max) return 'time';
    if (g.k === 'out' && S.box && Math.hypot(S.box.x - A.ring.x, S.box.y - A.ring.y) > A.ring.r + 2) g.st = 1;
    if (g.k === 'zone' && g.pass) { const z = roboZone(A, g.z); if (z && roboInZone(z, S.x, S.y)) g.st = 1; }
    if (g.k === 'seq') { const z = roboZone(A, g.zs[g.i]); if (z && g.i < g.zs.length && roboInZone(z, S.x, S.y)) g.i++; }
    if (g.k === 'path') { const p = g.pts[g.i]; if (p && Math.hypot(S.x - p[0], S.y - p[1]) < (g.tol || 6)) g.i++; }
    if (g.k === 'rule') {
      const on = roboCond(R, g.when);
      if (on) { g.ton = (g.ton || 0) + ROBO_K.DT; if (!g.inE) { g.inE = 1; g.eps = (g.eps || 0) + 1; g.noteE = S.notes.length; } }
      else { if (g.inE && g.note && S.notes.length === g.noteE && g.ton > .6) return 'rulenote'; g.ton = 0; g.inE = 0; g.toff = (g.toff || 0) + ROBO_K.DT; }
      if (g.light !== undefined) { const want = g.light === 'off' ? null : g.light, cur = S.lights.L || S.lights.R || null;
        if (on && g.ton > (g.grace || .5) && cur !== want) return 'rulelight';
        if (!on && g.else !== undefined && g.toff > (g.grace || .5)) { const w2 = g.else === 'off' ? null : g.else; if (cur !== w2) return 'rulelight2'; } }
      if (!on) g.toff = g.toff || 0; else g.toff = 0;
    }
  }
  return null;
}
function roboGoalOk(R, g) {
  const { A, S } = R, still = R.still >= .3;
  switch (g.k) {
    case 'zone': { if (g.pass) return !!g.st; const z = roboZone(A, g.z); return !!z && roboInZone(z, S.x, S.y) && still; }
    case 'seq': return g.i >= g.zs.length && (g.pass || still);
    case 'near': { const d = roboFront(A, S); return still && d >= g.min && d <= g.max; }
    case 'notouch': return true;
    case 'line': return true;
    case 'inring': return true;
    case 'time': return true;
    case 'out': return !!g.st;
    case 'cover': return S.cov.size / Math.max(1, A.cov.free.size) * 100 >= g.pct;
    case 'path': return g.i >= g.pts.length && still;
    case 'rule': return (g.eps || 0) >= (g.min || 1) && !g.inE;
    case 'show': return !!S.mat && (g.i ? S.mat.k === 'i' && S.mat.v === g.i : S.mat.k === 'n' && S.mat.v === g.n);
    case 'lights': return (S.lights.L || null) === (g.c === 'off' ? null : g.c) && (S.lights.R || null) === (g.c === 'off' ? null : g.c);
    case 'notes': return S.notes.length >= (g.n || 1);
    case 'uses': return true;
  }
  return true;
}
function roboGoalWhy(R, g) {
  const { A, S } = R;
  switch (g.k) {
    case 'zone': return R.still < .3 && g.z && roboInZone(roboZone(A, g.z), S.x, S.y) ? 'nostop' : 'nozone';
    case 'seq': return 'seq';
    case 'near': { const d = roboFront(A, S); return d < g.min ? 'close' : 'far'; }
    case 'out': return 'nobox';
    case 'cover': return 'cover';
    case 'path': return 'path';
    case 'rule': return (g.eps || 0) < (g.min || 1) ? 'rulenever' : 'rulelight';
    case 'show': return 'show';
    case 'lights': return 'lights';
    case 'notes': return 'notes';
  }
  return 'long';
}
const ROBO_WHY = {
  bump: ['Pam! El robot ha xocat. Cal parar o girar abans.', '¡Pum! El robot ha chocado. Hay que parar o girar antes.'],
  offline: ["El robot ha sortit de la línia. Mira què fa quan un sensor deixa de veure negre.", 'El robot ha salido de la línea. Mira qué hace cuando un sensor deja de ver negro.'],
  outring: ['El robot ha sortit del ring.', 'El robot ha salido del ring.'],
  time: ["S'ha acabat el temps. Cal anar més de pressa o fer un camí més curt.", 'Se ha acabado el tiempo. Hay que ir más deprisa o hacer un camino más corto.'],
  long: ['El robot no ha acabat la missió a temps.', 'El robot no ha terminado la misión a tiempo.'],
  loop: ['El programa dona voltes sense fer res. Revisa els bucles.', 'El programa da vueltas sin hacer nada. Revisa los bucles.'],
  nozone: ["El robot no s'ha aturat dins la zona.", 'El robot no se ha parado dentro de la zona.'],
  nostop: ['És a la zona, però no ha parat.', 'Está en la zona, pero no ha parado.'],
  seq: ['No ha passat per totes les zones en ordre.', 'No ha pasado por todas las zonas en orden.'],
  close: ["S'ha aturat massa a prop.", 'Se ha parado demasiado cerca.'],
  far: ["S'ha aturat massa lluny.", 'Se ha parado demasiado lejos.'],
  nobox: ['La caixa encara és dins del ring.', 'La caja todavía está dentro del ring.'],
  cover: ['Encara queda massa terra per netejar.', 'Todavía queda demasiado suelo por limpiar.'],
  path: ['El dibuix no passa per tots els punts.', 'El dibujo no pasa por todos los puntos.'],
  rulenote: ['Quan passa, també ha de sonar una nota.', 'Cuando pasa, también tiene que sonar una nota.'],
  rulelight: ['Els llums no tenen el color que toca en aquell moment.', 'Las luces no tienen el color que toca en ese momento.'],
  rulelight2: ['Quan ja no passa, els llums han de tornar a canviar.', 'Cuando ya no pasa, las luces tienen que volver a cambiar.'],
  rulenever: ['El robot no ha arribat a provar la situació que demana el repte.', 'El robot no ha llegado a probar la situación que pide el reto.'],
  show: ['La pantalla no mostra el que demana el repte.', 'La pantalla no muestra lo que pide el reto.'],
  lights: ['Els llums no acaben del color que demana el repte.', 'Las luces no terminan del color que pide el reto.'],
  notes: ['Falta que soni alguna nota.', 'Falta que suene alguna nota.'],
  motoron: ["El programa s'ha acabat però els motors seguien engegats: falta un bloc «Para».", 'El programa ha terminado pero los motores seguían encendidos: falta un bloque «Para».'],
  empty: ['Primer posa algun bloc al programa.', 'Primero pon algún bloque en el programa.'],
  uses: ['El repte demana fer servir un bloc concret.', 'El reto pide usar un bloque concreto.']
};
// text curt de cada objectiu (la llista de la dreta)
function roboGoalTxt(A, g) {
  const zn = id => { const z = roboZone(A, id); return z && z.t ? tx(z.t) : id; };
  if (g.t) return tx(g.t);
  switch (g.k) {
    case 'zone': return g.pass ? L(`Passa per la zona ${zn(g.z)}`, `Pasa por la zona ${zn(g.z)}`) : L(`Para dins la zona ${zn(g.z)}`, `Para dentro de la zona ${zn(g.z)}`);
    case 'seq': return L(`Passa per ${g.zs.map(zn).join(' → ')}`, `Pasa por ${g.zs.map(zn).join(' → ')}`);
    case 'near': return L(`Para a ${g.min}-${g.max} cm de l'obstacle`, `Para a ${g.min}-${g.max} cm del obstáculo`);
    case 'notouch': return L('Sense tocar res', 'Sin tocar nada');
    case 'line': return L('Sense sortir de la línia', 'Sin salir de la línea');
    case 'out': return L('Treu la caixa del ring', 'Saca la caja del ring');
    case 'inring': return L('El robot no surt del ring', 'El robot no sale del ring');
    case 'time': return L(`En menys de ${g.max} s`, `En menos de ${g.max} s`);
    case 'cover': return L(`Neteja el ${g.pct} % del terra`, `Limpia el ${g.pct} % del suelo`);
    case 'path': return L('Passa per tots els punts del dibuix', 'Pasa por todos los puntos del dibujo');
    case 'rule': return L('Avisa quan cal', 'Avisa cuando toca');
    case 'show': return g.i ? L(`La pantalla mostra: ${tx(ROBO_ICN[g.i].join('|'))}`, `La pantalla muestra: ${tx(ROBO_ICN[g.i].join('|'))}`) : L(`La pantalla mostra el ${g.n}`, `La pantalla muestra el ${g.n}`);
    case 'lights': return L(`Llums: ${tx(ROBO_CN[g.c].join('|'))}`, `Luces: ${tx(ROBO_CN[g.c].join('|'))}`);
    case 'notes': return L('Toca alguna nota', 'Toca alguna nota');
    case 'uses': return L(`Fes servir «${roboLabel(roboNew(g.b), true)}»`, `Usa «${roboLabel(roboNew(g.b), true)}»`);
  }
  return '';
}

/* ---------- Els blocs: categories, icones i textos ---------- */
const ROBO_CAT = { go: 'mov', turn: 'mov', run: 'mov', mot: 'mov', stop: 'mov', wait: 'act', waitu: 'act', rep: 'loop', ever: 'loop', while: 'loop', until: 'loop', if: 'cond', light: 'art', icon: 'art', num: 'art', note: 'snd', set: 'fn', chg: 'fn' };
const ROBO_ICO = {
  go: '<svg viewBox="0 0 24 24"><path d="M12 3l7 9h-4.5v9h-5v-9H5z" fill="currentColor"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M12 21l7-9h-4.5V3h-5v9H5z" fill="currentColor"/></svg>',
  turn: '<svg viewBox="0 0 24 24"><path d="M15 4l6 6-6 6v-4h-5a4 4 0 0 0-4 4v5H3v-5a7 7 0 0 1 7-7h5z" fill="currentColor"/></svg>',
  turnl: '<svg viewBox="0 0 24 24"><path d="M9 4L3 10l6 6v-4h5a4 4 0 0 1 4 4v5h3v-5a7 7 0 0 0-7-7H9z" fill="currentColor"/></svg>',
  run: '<svg viewBox="0 0 24 24"><circle cx="7" cy="17" r="3.2" fill="currentColor"/><circle cx="17" cy="17" r="3.2" fill="currentColor"/><path d="M3 12h18M14 7l5 5-5 5" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/></svg>',
  mot: '<svg viewBox="0 0 24 24"><rect x="2" y="6" width="6" height="12" rx="2.5" fill="currentColor"/><rect x="16" y="6" width="6" height="12" rx="2.5" fill="currentColor"/><path d="M10 12h4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M5 3v2M19 3v2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  stop: '<svg viewBox="0 0 24 24"><path d="M8 2h8l6 6v8l-6 6H8l-6-6V8z" fill="currentColor"/><rect x="7" y="10.5" width="10" height="3" rx="1.5" fill="#fff" opacity=".85"/></svg>',
  wait: '<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8.5" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M12 8v5l3 2M9 2h6" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linecap="round"/></svg>',
  waitu: '<svg viewBox="0 0 24 24"><circle cx="10" cy="13" r="7.5" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M10 9v4l2.5 1.6" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M18.5 4.5q3 3.5 0 7M21 2.5q4.5 5.5 0 11" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
  rep: '<svg viewBox="0 0 24 24"><path d="M17 3l4 4-4 4V8H8a3 3 0 0 0-3 3v1H2v-1a6 6 0 0 1 6-6h9zM7 21l-4-4 4-4v3h9a3 3 0 0 0 3-3v-1h3v1a6 6 0 0 1-6 6H7z" fill="currentColor"/></svg>',
  ever: '<svg viewBox="0 0 24 24"><path d="M7 8a4 4 0 1 0 0 8c3 0 7-8 10-8a4 4 0 1 1 0 8c-3 0-7-8-10-8z" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>',
  while: '<svg viewBox="0 0 24 24"><path d="M17 3l4 4-4 4V8H8a3 3 0 0 0-3 3v1H2v-1a6 6 0 0 1 6-6h9z" fill="currentColor"/><path d="M12 13l7 4-7 4-7-4z" fill="currentColor" opacity=".8"/></svg>',
  until: '<svg viewBox="0 0 24 24"><path d="M17 3l4 4-4 4V8H8a3 3 0 0 0-3 3v1H2v-1a6 6 0 0 1 6-6h9z" fill="currentColor"/><path d="M8 14h3v7H8zM13 14h3v7h-3z" fill="currentColor"/></svg>',
  if: '<svg viewBox="0 0 24 24"><path d="M12 2l10 10-10 10L2 12z" fill="none" stroke="currentColor" stroke-width="2.4"/><text x="12" y="16.5" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">?</text></svg>',
  light: '<svg viewBox="0 0 24 24"><path d="M3 9h6l4-4v14l-4-4H3z" fill="currentColor"/><path d="M16 8l5-2M16 12h6M16 16l5 2" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  icon: '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" stroke-width="2.2"/><g fill="currentColor"><circle cx="8" cy="9" r="1.8"/><circle cx="16" cy="9" r="1.8"/><circle cx="7" cy="15" r="1.6"/><circle cx="12" cy="17" r="1.6"/><circle cx="17" cy="15" r="1.6"/></g></svg>',
  num: '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="12" y="17" text-anchor="middle" font-size="13" font-weight="900" fill="currentColor">7</text></svg>',
  note: '<svg viewBox="0 0 24 24"><path d="M9 3v12.3A3.5 3.5 0 1 0 11 18V8h8V3z" fill="currentColor"/></svg>',
  set: '<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="13" rx="3.5" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M7 3h10" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><text x="12" y="16.5" text-anchor="middle" font-size="9.5" font-weight="900" fill="currentColor">=</text></svg>',
  chg: '<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="13" rx="3.5" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 9v7M8.5 12.5h7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>'
};
const roboIco = b => b.k === 'go' && b.d === 'b' ? ROBO_ICO.back : b.k === 'turn' && b.d === 'l' ? ROBO_ICO.turnl : ROBO_ICO[b.k] || '';
// números amb coma decimal (0,5 s)
const roboFmt = n => String(Math.round(n * 100) / 100).replace('.', ',');
const roboVarN = v => tx((ROBO_VARS[v] || [v, v]).join('|'));
const roboV = v => typeof v === 'string' ? `<b class="ro-var">${roboVarN(v)}</b>` : `<b class="tnum">${roboFmt(v)}</b>`;
const ROBO_LS = { L: 'L', M: 'M', R: 'R' };
function roboCondTxt(c) {
  if (!c) return '…';
  const n = v => `<b class="tnum">${roboFmt(v)}</b>`, op = c.op || '<';
  switch (c.s) {
    case 'dist': return L(`distància ${op} ${n(c.n)} cm`, `distancia ${op} ${n(c.n)} cm`);
    case 'line': { const col = (c.b ?? 1) ? L('negre', 'negro') : L('blanc', 'blanco');
      if (c.p === 'LR') return L(`L i R veuen ${col}`, `L y R ven ${col}`);
      if (c.p === 'all') return L(`els 3 sensors veuen ${col}`, `los 3 sensores ven ${col}`);
      if (c.p === 'any') return L(`algun sensor veu ${col}`, `algún sensor ve ${col}`);
      return L(`el sensor <b>${c.p}</b> veu ${col}`, `el sensor <b>${c.p}</b> ve ${col}`); }
    case 'light': return `${c.p === 'R' ? L('llum dreta', 'luz derecha') : L('llum esquerra', 'luz izquierda')} ${c.op || '>'} ${n(c.n)}`;
    case 'lightc': return L("més llum a l'esquerra", 'más luz a la izquierda');
    case 'var': return `${roboV(c.v)} ${op} ${n(c.n)}`;
  }
  return '…';
}
// text del bloc (plain: sense etiquetes HTML, per a llistes i exportacions)
function roboLabel(b, plain) {
  const s = (() => {
    switch (b.k) {
      case 'go': return `${b.d === 'b' ? L('Enrere', 'Atrás') : L('Endavant', 'Adelante')} ${L('a', 'a')} ${roboV(b.v)} ${L('durant', 'durante')} ${roboV(b.t)} s`;
      case 'turn': return `${b.d === 'l' ? L("Gira a l'esquerra", 'Gira a la izquierda') : L('Gira a la dreta', 'Gira a la derecha')} ${L('a', 'a')} ${roboV(b.v)} ${L('durant', 'durante')} ${roboV(b.t)} s`;
      case 'run': return `${b.d === 'b' ? L('Engega enrere a', 'Arranca hacia atrás a') : L('Engega endavant a', 'Arranca hacia delante a')} ${roboV(b.v)}`;
      case 'mot': return `${L('Motors', 'Motores')}: ${L('esquerre', 'izquierdo')} ${roboV(b.l)} · ${L('dret', 'derecho')} ${roboV(b.r)}`;
      case 'stop': return L('Para els motors', 'Para los motores');
      case 'wait': return `${L('Espera', 'Espera')} ${roboV(b.t)} s`;
      case 'waitu': return `${L('Espera fins que', 'Espera hasta que')} ${roboCondTxt(b.c)}`;
      case 'rep': return L(`Repeteix ${roboV(b.n)} vegades`, `Repite ${roboV(b.n)} veces`);
      case 'ever': return L('Per sempre', 'Para siempre');
      case 'while': return `${L('Mentre', 'Mientras')} ${roboCondTxt(b.c)}`;
      case 'until': return `${L('Repeteix fins que', 'Repite hasta que')} ${roboCondTxt(b.c)}`;
      case 'if': return `${L('Si', 'Si')} ${roboCondTxt(b.c)}`;
      case 'light': { const side = b.p === 'L' ? L('Llum esquerre', 'Luz izquierda') : b.p === 'R' ? L('Llum dret', 'Luz derecha') : L('Llums', 'Luces');
        return `${side}: ${b.c === 'off' ? `<i class="tdot ro-off"></i> ${L('apagat', 'apagado')}` : `<i class="tdot" style="background:${ROBO_COL[b.c]}"></i> ${tx(ROBO_CN[b.c].join('|'))}`}`; }
      case 'note': return `${L('Toca', 'Toca')} <b class="tnum">${b.n}</b> ${(b.d || 1) === 1 ? L('(1 temps)', '(1 tiempo)') : L(`(${roboFmt(b.d)} temps)`, `(${roboFmt(b.d)} tiempos)`)}`;
      case 'set': { const src = b.src || 'n', sn = src === 'dist' ? L('distància', 'distancia') : src === 'lightL' ? L('llum esquerra', 'luz izquierda') : src === 'lightR' ? L('llum dreta', 'luz derecha') : src !== 'n' ? roboVarN(src) : '';
        const val = src === 'n' ? `<b class="tnum">${roboFmt(b.n || 0)}</b>` : b.o ? `(${sn} − <b class="tnum">${roboFmt(b.o)}</b>)${(b.m ?? 1) !== 1 ? ` × <b class="tnum">${roboFmt(b.m)}</b>` : ''}` : `${sn}${(b.m ?? 1) !== 1 ? ` × <b class="tnum">${roboFmt(b.m)}</b>` : ''}`;
        return L(`Posa ${roboV(b.v)} a ${val}`, `Pon ${roboV(b.v)} a ${val}`); }
      case 'chg': return (b.n ?? 1) >= 0 ? L(`Suma <b class="tnum">${roboFmt(b.n ?? 1)}</b> a ${roboV(b.v)}`, `Suma <b class="tnum">${roboFmt(b.n ?? 1)}</b> a ${roboV(b.v)}`) : L(`Resta <b class="tnum">${roboFmt(-b.n)}</b> a ${roboV(b.v)}`, `Resta <b class="tnum">${roboFmt(-b.n)}</b> a ${roboV(b.v)}`);
      case 'num': return `${L('Mostra el número', 'Muestra el número')} ${roboV(b.v)}`;
      case 'icon': return `${L('Mostra', 'Muestra')} <i class="ro-mini">${roboMatSVG(ROBO_ICONS[b.i || 'heart'])}</i> ${tx(ROBO_ICN[b.i || 'heart'].join('|'))}`;
    }
    return b.k;
  })();
  return plain ? s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : s;
}
// la pantalla 5×5 en petit (per als blocs)
function roboMatSVG(pat, on = '#FF4D4D') {
  const rows = (pat || '').split(' ');
  return `<svg viewBox="0 0 25 25" class="ro-mat">${rows.map((r, y) => [...r].map((c, x) => `<rect x="${x * 5 + .8}" y="${y * 5 + .8}" width="3.4" height="3.4" rx="1" fill="${c === '1' ? on : '#3A2F38'}"/>`).join('')).join('')}</svg>`;
}
// un bloc nou, amb valors per defecte
const roboNew = k => ({ k, ...({ go: { d: 'f', v: 100, t: 1 }, turn: { d: 'r', v: 100, t: .5 }, run: { d: 'f', v: 100 }, mot: { l: 100, r: 100 }, wait: { t: 1 }, waitu: { c: { s: 'dist', op: '<', n: 15 } },
  rep: { n: 4, b: [] }, ever: { b: [] }, while: { c: { s: 'dist', op: '>', n: 15 }, b: [] }, until: { c: { s: 'dist', op: '<', n: 15 }, b: [] }, if: { c: { s: 'dist', op: '<', n: 15 }, b: [], e: null },
  light: { p: 'all', c: 'r' }, note: { n: 'do', d: 1 }, set: { v: 'vel', src: 'n', n: 100 }, chg: { v: 'n', n: 1 }, num: { v: 5 }, icon: { i: 'heart' } })[k] });
const roboClone = p => JSON.parse(JSON.stringify(p, (k, v) => k === '_id' ? undefined : v));
const roboCount = list => (list || []).reduce((n, b) => n + 1 + roboCount(b.b) + roboCount(b.e), 0);
const roboHas = (list, k) => (list || []).some(b => b.k === k || roboHas(b.b, k) || roboHas(b.e, k));

/* ---------- Programes en text (per escriure els reptes de pressa) ----------
   roboP('go f 100 2; turn r 100 .5; rep 4 { go f 100 1; turn r 100 .5 }')
   go f|b V T · turn r|l V T · run f|b V · mot L R · stop · wait T · waitu COND · rep N {…} · ever {…} · while COND {…}
   until COND {…} · if COND {…} else {…} · light all|L|R COLOR · note NOTA BEATS · set VAR VALOR · chg VAR N · num V · icon NOM
   COND: dist<15 · line.M=1 · line.LR=0 · light.L>100 · lightc · var.n<3     VALOR: 100 · dist · (dist-10)*4 · lightL*2
   Un «!» després de la paraula (go! …) marca el bloc que s'ha de trobar al pas «investiga». */
function roboCondP(t) {
  let m;
  if ((m = t.match(/^dist([<>=])(\d+(?:\.\d+)?)$/))) return { s: 'dist', op: m[1], n: +m[2] };
  if ((m = t.match(/^line\.(L|M|R|LR|all|any)=([01])$/))) return { s: 'line', p: m[1], b: +m[2] };
  if ((m = t.match(/^light\.(L|R)([<>])(\d+)$/))) return { s: 'light', p: m[1], op: m[2], n: +m[3] };
  if (t === 'lightc') return { s: 'lightc' };
  if ((m = t.match(/^var\.(\w+)([<>=])(-?\d+(?:\.\d+)?)$/))) return { s: 'var', v: m[1], op: m[2], n: +m[3] };
  throw new Error('roboP: condició ' + t);
}
function roboP(src) {
  const tk = src.replace(/([{};])/g, ' $1 ').trim().split(/\s+/).filter(Boolean); let i = 0;
  const num = t => isNaN(+t) ? t : +t;
  const list = () => { const out = [];
    while (i < tk.length && tk[i] !== '}') { if (tk[i] === ';') { i++; continue; } out.push(one()); }
    return out; };
  const body = () => { if (tk[i] !== '{') throw new Error('roboP: falta { a ' + tk.slice(i - 3, i + 2).join(' ')); i++; const l = list(); if (tk[i] !== '}') throw new Error('roboP: falta }'); i++; return l; };
  const one = () => {
    let w = tk[i++]; const x = w.endsWith('!'); if (x) w = w.slice(0, -1);
    let b;
    switch (w) {
      case 'go': b = { k: 'go', d: tk[i++], v: num(tk[i++]), t: +tk[i++] }; break;
      case 'turn': b = { k: 'turn', d: tk[i++], v: num(tk[i++]), t: +tk[i++] }; break;
      case 'run': b = { k: 'run', d: tk[i++], v: num(tk[i++]) }; break;
      case 'mot': b = { k: 'mot', l: num(tk[i++]), r: num(tk[i++]) }; break;
      case 'stop': b = { k: 'stop' }; break;
      case 'wait': b = { k: 'wait', t: +tk[i++] }; break;
      case 'waitu': b = { k: 'waitu', c: roboCondP(tk[i++]) }; break;
      case 'rep': b = { k: 'rep', n: +tk[i++] }; b.b = body(); break;
      case 'ever': b = { k: 'ever' }; b.b = body(); break;
      case 'while': case 'until': b = { k: w, c: roboCondP(tk[i++]) }; b.b = body(); break;
      case 'if': b = { k: 'if', c: roboCondP(tk[i++]) }; b.b = body(); b.e = null; if (tk[i] === 'else') { i++; b.e = body(); } break;
      case 'light': b = { k: 'light', p: tk[i++], c: tk[i++] }; break;
      case 'note': b = { k: 'note', n: tk[i++], d: +tk[i++] || 1 }; break;
      case 'set': { b = { k: 'set', v: tk[i++] }; const e = tk[i++]; let m;
        if (!isNaN(+e)) { b.src = 'n'; b.n = +e; }
        else if ((m = e.match(/^\(?(dist|lightL|lightR|\w+)(?:-(\d+(?:\.\d+)?))?\)?(?:\*(-?\d+(?:\.\d+)?))?$/))) { b.src = m[1]; if (m[2]) b.o = +m[2]; if (m[3]) b.m = +m[3]; }
        else throw new Error('roboP: valor ' + e); break; }
      case 'chg': b = { k: 'chg', v: tk[i++], n: +tk[i++] }; break;
      case 'num': b = { k: 'num', v: num(tk[i++]) }; break;
      case 'icon': b = { k: 'icon', i: tk[i++] }; break;
      default: throw new Error('roboP: bloc ' + w);
    }
    if (x) b.x = 1;
    return b;
  };
  const out = list(); if (i < tk.length) throw new Error('roboP: sobra ' + tk.slice(i).join(' '));
  return out;
}

/* ---------- Exportar a MakeCode (micro:bit + extensió Maqueen) ----------
   Tota la traducció a l'API de l'extensió és aquí, en una sola taula: si l'extensió oficial fa servir noms una mica
   diferents, només cal canviar ROBO_MK. Els noms són els de l'extensió Maqueen_V5 (per confirmar a l'aula). */
const ROBO_MK = {
  init: 'Maqueen_V5.I2CInit()',
  run: (m, fwd, s) => `Maqueen_V5.motorRun(Motors.${m}, Dir.${fwd ? 'CW' : 'CCW'}, ${s})`,
  stop: m => `Maqueen_V5.motorStop(Motors.${m})`,
  dist: 'Maqueen_V5.Ultrasonic()',
  line: p => `Maqueen_V5.readPatrol(Patrol.${p})`,
  black: 1,      // valor que torna readPatrol quan el sensor veu negre (per confirmar)
  led: (p, c) => `Maqueen_V5.setRgblLed(DirectionType.${p}, CarLightColors.${c})`,
  light: p => `Maqueen_V5.readLightIntensity(DirectionType.${p})`,
  M: { L: 'M1', R: 'M2', all: 'All' }, P: { L: 'Left', R: 'Right', all: 'All' },
  C: { r: 'Red', g: 'Green', u: 'Blue', y: 'Yellow', p: 'Purple', c: 'Cyan', w: 'White', off: 'Black' },
  N: { do: 'Note.C', re: 'Note.D', mi: 'Note.E', fa: 'Note.F', sol: 'Note.G', la: 'Note.A', si: 'Note.B', 'do+': 'Note.C5' },
  I: { heart: 'Heart', happy: 'Happy', sad: 'Sad', yes: 'Yes', no: 'No', house: 'House', target: 'Target', square: 'Square', up: 'ArrowNorth', ghost: 'Ghost' }
};
function roboMakeCode(prog) {
  const K = ROBO_MK, vars = new Set(), lang = typeof LANG !== 'undefined' ? LANG : 'ca';
  const vn = v => (ROBO_VARS[v] ? ROBO_VARS[v][lang === 'es' ? 1 : 0] : v).normalize('NFD').replace(/[^\w]/g, '');
  let helper = false;
  const val = v => { if (typeof v === 'string') { vars.add(v); return vn(v); } return String(Math.round(v)); };
  const cond = c => {
    switch (c.s) {
      case 'dist': return `${K.dist} ${c.op === '=' ? '==' : c.op} ${c.n}`;
      case 'line': { const one = p => `${K.line(p)} == ${(c.b ?? 1) ? K.black : 1 - K.black}`;
        if (c.p === 'LR') return `${one('L')} && ${one('R')}`; if (c.p === 'all') return `${one('L')} && ${one('M')} && ${one('R')}`; if (c.p === 'any') return `(${one('L')} || ${one('M')} || ${one('R')})`; return one(c.p); }
      case 'light': return `${K.light(K.P[c.p || 'L'])} ${c.op || '>'} ${c.n}`;
      case 'lightc': return `${K.light(K.P.L)} > ${K.light(K.P.R)}`;
      case 'var': vars.add(c.v); return `${vn(c.v)} ${c.op === '=' ? '==' : c.op} ${c.n}`;
    }
    return 'false';
  };
  // l i r: números o expressions amb variables (text)
  const mot = (l, r) => {
    if (typeof l === 'string' || typeof r === 'string') { helper = true; const e = x => typeof x === 'string' ? x : String(Math.round(x)); return [`motor(Motors.${K.M.L}, ${e(l)})`, `motor(Motors.${K.M.R}, ${e(r)})`]; }
    if (l < 0 !== r < 0 || Math.abs(l) !== Math.abs(r)) { const one = (m, v) => v === 0 ? K.stop(m) : K.run(m, v > 0, Math.min(255, Math.abs(Math.round(v)))); return [one(K.M.L, l), one(K.M.R, r)]; }
    return [l === 0 ? K.stop(K.M.all) : K.run(K.M.all, l > 0, Math.min(255, Math.abs(Math.round(l))))];
  };
  const sv = (v, sign) => typeof v === 'string' ? (vars.add(v), (sign < 0 ? '-' : '') + vn(v)) : sign * v;
  const ms = t => Math.round(t * 1000);
  const blk = (list, ind) => (list || []).flatMap(b => one(b, ind));
  const P = (ind, s) => '    '.repeat(ind) + s;
  const loopPause = (body, ind) => body.length && !/pause|playTone/.test(body.join('\n')) ? [...body, P(ind, 'basic.pause(20)')] : body;
  const one = (b, ind) => {
    switch (b.k) {
      case 'go': { const s = b.d === 'b' ? -1 : 1; return [...mot(sv(b.v, s), sv(b.v, s)).map(x => P(ind, x)), P(ind, `basic.pause(${ms(b.t)})`), P(ind, K.stop(K.M.all))]; }
      case 'turn': { const l = b.d === 'l' ? -1 : 1; return [...mot(sv(b.v, l), sv(b.v, -l)).map(x => P(ind, x)), P(ind, `basic.pause(${ms(b.t)})`), P(ind, K.stop(K.M.all))]; }
      case 'run': { const s = b.d === 'b' ? -1 : 1; return mot(sv(b.v, s), sv(b.v, s)).map(x => P(ind, x)); }
      case 'mot': return mot(sv(b.l, 1), sv(b.r, 1)).map(x => P(ind, x));
      case 'stop': return [P(ind, K.stop(K.M.all))];
      case 'wait': return [P(ind, `basic.pause(${ms(b.t)})`)];
      case 'waitu': return [P(ind, `while (!(${cond(b.c)})) {`), P(ind + 1, 'basic.pause(20)'), P(ind, '}')];
      case 'rep': return [P(ind, `for (let i = 0; i < ${b.n}; i++) {`), ...blk(b.b, ind + 1), P(ind, '}')];
      case 'ever': return [P(ind, 'while (true) {'), ...loopPause(blk(b.b, ind + 1), ind + 1), P(ind, '}')];
      case 'while': return [P(ind, `while (${cond(b.c)}) {`), ...loopPause(blk(b.b, ind + 1), ind + 1), P(ind, '}')];
      case 'until': return [P(ind, `while (!(${cond(b.c)})) {`), ...loopPause(blk(b.b, ind + 1), ind + 1), P(ind, '}')];
      case 'if': return [P(ind, `if (${cond(b.c)}) {`), ...blk(b.b, ind + 1), ...(b.e ? [P(ind, '} else {'), ...blk(b.e, ind + 1)] : []), P(ind, '}')];
      case 'light': return [P(ind, K.led(K.P[b.p || 'all'], K.C[b.c]))];
      case 'note': return [P(ind, `music.playTone(${K.N[b.n] || 'Note.C'}, music.beat(${(b.d || 1) >= 2 ? 'BeatFraction.Double' : (b.d || 1) <= .5 ? 'BeatFraction.Half' : 'BeatFraction.Whole'}))`)];
      case 'set': { vars.add(b.v); const src = b.src || 'n'; let e = src === 'n' ? String(b.n || 0) : src === 'dist' ? K.dist : src === 'lightL' ? K.light(K.P.L) : src === 'lightR' ? K.light(K.P.R) : val(src);
        if (src !== 'n' && b.o) e = `(${e} - ${b.o})`; if (src !== 'n' && (b.m ?? 1) !== 1) e = `${e} * ${b.m}`; return [P(ind, `${vn(b.v)} = ${e}`)]; }
      case 'chg': vars.add(b.v); return [P(ind, `${vn(b.v)} += ${b.n ?? 1}`)];
      case 'num': return [P(ind, `basic.showNumber(${val(b.v)})`)];
      case 'icon': return [P(ind, `basic.showIcon(IconNames.${K.I[b.i] || 'Heart'})`)];
    }
    return [];
  };
  // l'últim «per sempre» del programa va a basic.forever, com a MakeCode
  const last = prog[prog.length - 1], top = last && last.k === 'ever' ? prog.slice(0, -1) : prog;
  const start = blk(top, 0), fore = last && last.k === 'ever' ? loopPause(blk(last.b, 1), 1) : null;
  const out = [`// ${L('Programa fet amb Numi Tech · Robòtica', 'Programa hecho con Numi Tech · Robótica')} (micro:bit + Maqueen Lite V5)`, K.init];
  if (vars.size) out.splice(1, 0, ...[...vars].map(v => `let ${vn(v)} = 0`));
  if (helper) out.push(`function motor(m: Motors, v: number) {`, `    if (v >= 0) ${K.run('m', true, 'Math.min(255, v)').replace('Motors.m', 'm')}`, `    else ${K.run('m', false, 'Math.min(255, -v)').replace('Motors.m', 'm')}`, `}`);
  out.push(...start);
  if (fore) out.push('basic.forever(function () {', ...fore, '})');
  return out.join('\n');
}

/* ---------- Dibuix 2D: el terra de l'arena (també és la textura del 3D) i la vista de dalt de reserva ---------- */
const ROBO_ZC = { g: '#2ED16B', y: '#FFB800', u: '#2F7BFF', r: '#F2453D', p: '#A35CFF', o: '#FF8A2A', k: '#5B6478', c: '#16B8D8' };
function roboRR(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
function roboFloorCanvas(A, o = {}) {
  const s = o.s || Math.min(8, 2048 / Math.max(A.w, A.h)), c = document.createElement('canvas'); c.width = Math.round(A.w * s); c.height = Math.round(A.h * s);
  const g = c.getContext('2d'), sp = A.spec || {};
  g.scale(s, s);
  // estora: blanc trencat amb una mica de textura i vinyeta
  g.fillStyle = sp.mat || '#F1EEE4'; g.fillRect(0, 0, A.w, A.h);
  const rg = g.createRadialGradient(A.w / 2, A.h / 2, Math.min(A.w, A.h) * .2, A.w / 2, A.h / 2, Math.max(A.w, A.h) * .75); rg.addColorStop(0, 'rgba(255,255,255,.35)'); rg.addColorStop(1, 'rgba(120,110,90,.10)'); g.fillStyle = rg; g.fillRect(0, 0, A.w, A.h);
  // quadrícula de 10 cm (més marcada cada 50) i regle a les vores
  if (sp.grid !== false) {
    for (let x = 10; x < A.w; x += 10) { g.strokeStyle = x % 50 ? 'rgba(47,91,234,.13)' : 'rgba(47,91,234,.28)'; g.lineWidth = x % 50 ? .18 : .3; g.beginPath(); g.moveTo(x, 0); g.lineTo(x, A.h); g.stroke(); }
    for (let y = 10; y < A.h; y += 10) { g.strokeStyle = y % 50 ? 'rgba(47,91,234,.13)' : 'rgba(47,91,234,.28)'; g.lineWidth = y % 50 ? .18 : .3; g.beginPath(); g.moveTo(0, y); g.lineTo(A.w, y); g.stroke(); }
    g.fillStyle = 'rgba(27,43,107,.55)'; g.font = '800 3.2px Lexend, system-ui, sans-serif'; g.textBaseline = 'top';
    for (let x = 0; x <= A.w; x += 10) { g.fillRect(x - .15, 0, .3, x % 50 ? 1.6 : 3); if (x % 50 === 0 && x && x < A.w) { g.textAlign = 'center'; g.fillText(String(x), x, 3.4); } }
    g.textAlign = 'left'; g.textBaseline = 'middle';
    for (let y = 0; y <= A.h; y += 10) { g.fillRect(0, y - .15, y % 50 ? 1.6 : 3, .3); if (y % 50 === 0 && y && y < A.h) g.fillText(String(y), 3.6, y); }
  }
  // zones de colors (meta, aparcament, estacions…)
  for (const z of A.zones) {
    const col = ROBO_ZC[z.c] || z.c, x = z.r ? z.x - z.r : z.x, y = z.r ? z.y - z.r : z.y, w = z.r ? z.r * 2 : z.w, h = z.r ? z.r * 2 : z.h;
    const path = () => { if (z.r) { g.beginPath(); g.arc(z.x, z.y, z.r, 0, 7); } else roboRR(g, x, y, w, h, Math.min(3, w / 4, h / 4)); };
    if (z.black) { path(); g.fillStyle = '#17171F'; g.fill(); continue; }
    if (z.amb != null) { path(); g.fillStyle = 'rgba(30,40,80,.16)'; g.fill(); }
    else if (z.bay) { // plaça d'aparcament: línies grogues en forma de U
      g.strokeStyle = '#F2B21B'; g.lineWidth = 1.4; g.lineCap = 'round'; g.beginPath();
      const o2 = z.open || 'l'; const P = [[x, y], [x + w, y], [x + w, y + h], [x, y + h]], sides = { t: [0, 1], r: [1, 2], b: [2, 3], l: [3, 0] };
      for (const [k, [a, b]] of Object.entries(sides)) if (k !== o2) { g.moveTo(...P[a]); g.lineTo(...P[b]); }
      g.stroke(); g.fillStyle = 'rgba(255,197,49,.12)'; g.fillRect(x, y, w, h);
    } else { path(); g.fillStyle = col + '2E'; g.fill(); g.setLineDash([2.2, 1.6]); g.lineWidth = .7; g.strokeStyle = col; path(); g.stroke(); g.setLineDash([]); }
    if (z.t) { const t = tx(z.t); g.save(); g.fillStyle = z.bay ? '#B07D00' : col; g.globalAlpha = .9; g.font = `900 ${Math.min(5.5, Math.max(3, Math.min(w, h) / 3.6))}px Lexend, system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(t.toUpperCase(), x + w / 2, y + h / 2 + (z.tdy || 0)); g.restore(); }
  }
  // ring de sumo
  if (A.ring) { const { x, y, r } = A.ring; g.beginPath(); g.arc(x, y, r + 2, 0, 7); g.fillStyle = '#ECEBE6'; g.fill(); g.beginPath(); g.arc(x, y, r - 3.5, 0, 7); g.fillStyle = '#FFFFFF'; g.fill(); g.lineWidth = 4; g.strokeStyle = '#17171F'; g.beginPath(); g.arc(x, y, r - 1.5, 0, 7); g.stroke();
    g.strokeStyle = 'rgba(242,69,61,.55)'; g.lineWidth = 1; for (const s2 of [-1, 1]) { g.beginPath(); g.moveTo(x + s2 * 6, y - 6); g.lineTo(x + s2 * 6, y + 6); g.stroke(); } }
  // cinta negra (línies)
  g.lineCap = 'round'; g.lineJoin = 'round';
  for (const p of A.lines) { g.beginPath(); p.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.strokeStyle = '#17171F'; g.lineWidth = A.lw; g.stroke(); g.strokeStyle = 'rgba(255,255,255,.07)'; g.lineWidth = A.lw * .25; g.stroke(); }
  // dibuix model (punts on ha de passar el llapis)
  if (A.ghost) { g.setLineDash([2, 2]); g.lineWidth = .8; g.strokeStyle = 'rgba(123,63,228,.55)'; g.beginPath(); A.ghost.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.stroke(); g.setLineDash([]); g.fillStyle = 'rgba(123,63,228,.8)'; A.ghost.forEach(([x, y]) => { g.beginPath(); g.arc(x, y, 1.6, 0, 7); g.fill(); }); }
  // la sortida: un requadre amb una fletxa
  if (sp.startPad !== false) for (const [x, y, a] of A.starts.slice(0, 1)) { g.save(); g.translate(x, y); g.rotate(roboRad(a)); g.setLineDash([1.6, 1.2]); g.lineWidth = .5; g.strokeStyle = 'rgba(47,91,234,.6)'; roboRR(g, -8, -7.5, 16, 15, 3); g.stroke(); g.setLineDash([]);
    g.fillStyle = 'rgba(47,91,234,.35)'; g.beginPath(); g.moveTo(9.5, 0); g.lineTo(12.5, -2.4); g.lineTo(12.5, 2.4); g.closePath(); g.fill(); g.restore(); }
  if (o.marks) for (const [k, [x, y]] of Object.entries(A.marks)) { g.beginPath(); g.arc(x, y, 5, 0, 7); g.fillStyle = '#fff'; g.fill(); g.lineWidth = .8; g.strokeStyle = '#14204A'; g.stroke(); g.fillStyle = '#14204A'; g.font = '900 6px Lexend, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(k, x, y + .3); }
  return c;
}
// el robot vist de dalt (vista 2D i animacions)
function roboTop2D(g, S, sc = 1, col = '#EF5B4F') {
  g.save(); g.translate(S.x, S.y); g.rotate(S.th); g.scale(sc, sc);
  const lc = S.lights || {};
  for (const [side, sy] of [['L', -2.9], ['R', 2.9]]) if (lc[side]) { const rg = g.createRadialGradient(6, sy, 0, 6, sy, 9); rg.addColorStop(0, ROBO_COL[lc[side]] + 'CC'); rg.addColorStop(1, ROBO_COL[lc[side]] + '00'); g.fillStyle = rg; g.beginPath(); g.arc(6, sy, 9, 0, 7); g.fill(); }
  g.fillStyle = 'rgba(0,0,0,.18)'; roboRR(g, -3.4, -3.6, 9.6, 8.8, 2.4); g.fill();
  g.fillStyle = '#22252E'; roboRR(g, -2.2, -5.0, 4.4, 1.3, .5); g.fill(); roboRR(g, -2.2, 3.7, 4.4, 1.3, .5); g.fill();
  g.fillStyle = col; roboRR(g, -3.2, -3.7, 8.4, 7.4, 2.2); g.fill();
  g.fillStyle = '#FBFBFD'; roboRR(g, -2.6, -3.1, 7, 6.2, 1.6); g.fill();
  g.fillStyle = '#1D2333'; roboRR(g, -3.1, -2.6, 1.6, 5.2, .5); g.fill();
  g.fillStyle = '#2453C9'; g.fillRect(4.7, -2.5, .5, 5); g.fillStyle = '#D9DEE8'; for (const sy of [-1.3, 1.3]) { g.beginPath(); g.arc(5.6, sy, .85, 0, 7); g.fill(); }
  for (const [side, sy] of [['L', -2.9], ['R', 2.9]]) { g.fillStyle = lc[side] ? ROBO_COL[lc[side]] : '#E3E6EE'; g.beginPath(); g.arc(5.1, sy, .55, 0, 7); g.fill(); }
  g.restore();
}
function roboDraw2D(cv, A, S, o = {}) {
  const r = cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1), W = Math.max(100, r.width), H = Math.max(80, r.height);
  if (cv.width !== Math.round(W * dpr)) { cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); }
  const g = cv.getContext('2d'), sc = Math.min(W / (A.w + 8), H / (A.h + 8)), ox = (W - A.w * sc) / 2, oy = (H - A.h * sc) / 2;
  g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H);
  g.save(); g.translate(ox, oy); g.scale(sc, sc);
  g.fillStyle = 'rgba(20,30,70,.18)'; roboRR(g, -2, 0, A.w + 4, A.h + 3.5, 3); g.fill();
  if (!A._floor) A._floor = roboFloorCanvas(A, { marks: true });
  g.drawImage(A._floor, 0, 0, A.w, A.h);
  if (A.dark) { const rg = g.createRadialGradient(A.lamp ? A.lamp[0] : A.w / 2, A.lamp ? A.lamp[1] : A.h / 2, 5, A.lamp ? A.lamp[0] : A.w / 2, A.lamp ? A.lamp[1] : A.h / 2, Math.max(A.w, A.h) * .7); rg.addColorStop(0, 'rgba(10,14,40,0)'); rg.addColorStop(1, 'rgba(10,14,40,.62)'); g.fillStyle = rg; g.fillRect(0, 0, A.w, A.h); }
  g.lineWidth = 2; g.strokeStyle = '#FFFFFF'; g.strokeRect(-1, -1, A.w + 2, A.h + 2); g.strokeStyle = '#EF5B4F'; g.lineWidth = .8; g.strokeRect(-2.2, -2.2, A.w + 4.4, A.h + 4.4);
  const foam = ['#7AA7FF', '#FFB35C', '#76D39B', '#F58DB6', '#B79CFF'];
  A.walls.forEach((w, i) => { g.fillStyle = 'rgba(0,0,0,.15)'; roboRR(g, w.x + .8, w.y + 1.2, w.w, w.h, 1.2); g.fill(); g.fillStyle = w.st === 'crate' ? '#D6A15E' : w.st === 'wall' ? '#FAFBFF' : foam[i % 5]; roboRR(g, w.x, w.y, w.w, w.h, 1.2); g.fill(); if (w.st === 'wall') { g.strokeStyle = '#EF5B4F'; g.lineWidth = .8; g.stroke(); } });
  for (const p of A.posts) { g.fillStyle = '#FF7A1A'; g.beginPath(); g.arc(p.x, p.y, p.r, 0, 7); g.fill(); g.fillStyle = '#fff'; g.beginPath(); g.arc(p.x, p.y, p.r * .45, 0, 7); g.fill(); }
  if (A.lamp) { const [x, y] = A.lamp, rg = g.createRadialGradient(x, y, 0, x, y, 30); rg.addColorStop(0, 'rgba(255,220,120,.9)'); rg.addColorStop(1, 'rgba(255,220,120,0)'); g.fillStyle = rg; g.beginPath(); g.arc(x, y, 30, 0, 7); g.fill(); g.fillStyle = '#2E3446'; g.beginPath(); g.arc(x, y, 4, 0, 7); g.fill(); g.fillStyle = '#FFE08A'; g.beginPath(); g.arc(x, y, 2.2, 0, 7); g.fill(); }
  if (S.box) { g.save(); g.translate(S.box.x, S.box.y); g.rotate(S.box.a || 0); g.fillStyle = '#D6A15E'; g.fillRect(-5, -5, 10, 10); g.strokeStyle = '#7A4A1E'; g.lineWidth = .8; g.strokeRect(-4.6, -4.6, 9.2, 9.2); g.restore(); }
  for (const m of S.movers || []) roboTop2D(g, m, 1, '#2F6BFF');
  if (S.pen && S.trail.length > 1) { g.strokeStyle = '#7B3FE4'; g.lineWidth = .7; g.lineCap = 'round'; g.lineJoin = 'round'; g.beginPath(); S.trail.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.stroke(); }
  if (o.sens && S.viz && S.viz.us) { const u = S.viz.us; g.strokeStyle = 'rgba(34,211,238,.7)'; g.lineWidth = .6; g.setLineDash([1.5, 1]); g.beginPath(); g.moveTo(u.x, u.y); g.lineTo(u.hx, u.hy); g.stroke(); g.setLineDash([]); }
  roboTop2D(g, S);
  g.restore();
}

/* ---------- Escenes per a les històries (el taller de robòtica) ---------- */
function roboScene(kind = 'taller') {
  const night = kind === 'nit', sky = night ? ['#1B2B6B', '#33467A'] : ['#DCE8FF', '#F6F0FF'];
  const car = (x, y, s, col = '#EF5B4F', flip) => `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})">
    <ellipse cx="0" cy="18" rx="30" ry="5" fill="#0B1838" opacity=".18"/>
    <rect x="-26" y="-2" width="54" height="14" rx="7" fill="${col}"/><rect x="-22" y="-6" width="44" height="7" rx="3.5" fill="#FBFBFD"/>
    <rect x="-24" y="-30" width="5" height="26" rx="2" fill="#1D2333" transform="rotate(-18 -21 -17)"/><g transform="rotate(-18 -21 -17)">${[0, 1, 2, 3, 4].map(i => `<rect x="-23.2" y="${-27 + i * 4.6}" width="3" height="3" rx=".8" fill="${i % 2 ? '#FF4D4D' : '#3A2F38'}"/>`).join('')}</g>
    <rect x="25" y="-16" width="4" height="16" rx="1.5" fill="#2453C9"/><circle cx="31" cy="-11" r="5.5" fill="#D9DEE8" stroke="#9AA3B5" stroke-width="1.2"/><circle cx="31" cy="-11" r="2.4" fill="#15171E"/><circle cx="32" cy="-12.5" r=".9" fill="#fff"/>
    <circle cx="-4" cy="12" r="9" fill="#22252E"/><circle cx="-4" cy="12" r="4.6" fill="#FFC531"/><circle cx="-4" cy="12" r="1.6" fill="#22252E"/>
    <circle cx="27" cy="9" r="3.4" fill="${night ? '#FFF6C8' : '#EDEFF5'}" ${night ? 'filter="url(#roGl)"' : ''}/></g>`;
  const bench = `<rect x="0" y="132" width="320" height="48" fill="#C98A4B"/><rect x="0" y="132" width="320" height="6" fill="#A86A33"/>
    <rect x="14" y="118" width="150" height="18" rx="3" fill="#F7F5EF" stroke="#D9D2C2"/><path d="M20 127h138" stroke="#17171F" stroke-width="3" stroke-linecap="round"/>`;
  const shelf = `<rect x="200" y="22" width="104" height="8" rx="3" fill="#A86A33"/><rect x="210" y="6" width="16" height="16" rx="3" fill="#7AA7FF"/><rect x="230" y="10" width="12" height="12" rx="3" fill="#FFB35C"/><circle cx="262" cy="14" r="8" fill="none" stroke="#FFC531" stroke-width="5"/><rect x="278" y="4" width="18" height="18" rx="4" fill="#76D39B"/>`;
  const board = `<rect x="20" y="16" width="120" height="76" rx="8" fill="#fff" stroke="#DCE4FA" stroke-width="3"/><path d="M34 40h52M34 54h80M34 68h40" stroke="#2F5BEA" stroke-width="5" stroke-linecap="round" opacity=".55"/><circle cx="116" cy="40" r="10" fill="#2ED16B" opacity=".7"/>`;
  const lamp = night ? `<g transform="translate(250 54)"><path d="M0 0l-20 -34" stroke="#2E3446" stroke-width="5" stroke-linecap="round"/><path d="M-34 -40l26 -14l8 14z" fill="#2E3446"/><circle cx="-14" cy="-36" r="30" fill="url(#roLamp)"/><rect x="-14" y="74" width="28" height="6" rx="3" fill="#2E3446"/><path d="M0 0v76" stroke="#2E3446" stroke-width="4"/></g>` : '';
  return `<svg viewBox="0 0 320 180" aria-hidden="true" class="ro-scene"><defs><linearGradient id="roSky-${kind}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient>
    <radialGradient id="roLamp"><stop offset="0" stop-color="#FFE9A0" stop-opacity=".95"/><stop offset="1" stop-color="#FFE9A0" stop-opacity="0"/></radialGradient><filter id="roGl" x="-2" y="-2" width="5" height="5"><feGaussianBlur stdDeviation="2"/></filter></defs>
    <rect width="320" height="180" fill="url(#roSky-${kind})"/>${night ? '' : board}${shelf}${lamp}${bench}
    <g class="ro-sc-car">${car(kind === 'sumo' ? 110 : 150, 104, 1.05)}${kind === 'sumo' ? car(214, 104, 1.05, '#2F6BFF', true) : ''}</g></svg>`;
}

/* ===================================================================================================================
   L'escenari a la sessió (pas «robo»): arena 3D + tauler de sensors + programa de blocs
   =================================================================================================================== */
// paletes de blocs habituals
const ROBO_PAL = {
  mov: ['go', 'turn', 'stop', 'wait'], mov2: ['go', 'turn', 'mot', 'stop', 'wait', 'rep'],
  dist: ['go', 'turn', 'run', 'stop', 'wait', 'waitu', 'rep', 'ever', 'if', 'else'], line: ['run', 'mot', 'stop', 'go', 'turn', 'wait', 'waitu', 'ever', 'if', 'else', 'while', 'until'],
  out: ['go', 'turn', 'run', 'mot', 'stop', 'wait', 'waitu', 'ever', 'if', 'else', 'light', 'note', 'icon', 'num'],
  vars: ['set', 'chg', 'go', 'turn', 'run', 'mot', 'stop', 'wait', 'waitu', 'rep', 'ever', 'if', 'else', 'while', 'num', 'light', 'note'],
  all: ['go', 'turn', 'run', 'mot', 'stop', 'wait', 'waitu', 'rep', 'ever', 'while', 'until', 'if', 'else', 'light', 'note', 'icon', 'num', 'set', 'chg']
};
let roboStage = null, ROBO3D = null, ROBO3D_P = null, ROBO_ID = 0;
const robo3dLoad = () => ROBO3D_P || (ROBO3D_P = import('./tech-robo3d.js').then(m => (ROBO3D = m.ok() ? m : null)).catch(() => (ROBO3D = null)));
const roboQ = id => document.getElementById(id);

function roboMake(st) {
  const A = roboArena(st.arena);
  if (st.goals) A.goals = st.goals;
  if (st.tmax) A.tmax = st.tmax;
  const X = roboStage = { st, A, mode: st.mode || 'edit', prog: roboClone(st.prog || []), pal: st.pal || ROBO_PAL.mov, conds: st.conds || ['dist'], vars: st.vars || ['vel', 'n'], max: st.max || 0,
    cur: null, sel: null, R: null, run: false, speed: 1, pen: !!(A.pen || st.pen), sens: st.sens !== false, view: 'over', tries: 0, solved: false, si: 0, lists: [], ids: {}, b3: null, frames: [], rep: null,
    pool: st.pool ? roboClone(st.pool) : null, pick: null, thr: [0, 0], onDone: null, onFail: null };
  X.cur = { l: X.prog, i: X.prog.length };
  X.S = roboState(A); X.S.pen = X.pen;
  return X;
}
/* ---------- HTML ---------- */
function roboIndex() {
  const X = roboStage; X.lists = []; X.ids = {};
  const walk = list => { X.lists.push(list); for (const b of list) { if (!b._id) Object.defineProperty(b, '_id', { value: ++ROBO_ID, writable: true, enumerable: false }); X.ids[b._id] = { b, list }; if (b.b) walk(b.b); if (b.e) walk(b.e); } };
  walk(X.prog); if (X.pool) walk(X.pool);
}
function roboBlock(b, ro) {
  const X = roboStage, cont = !!b.b, sel = X.sel === b;
  const click = X.mode === 'spot' ? `roboSpot(${b._id})` : X.mode === 'parsons' ? `roboPar(${b._id})` : ro ? '' : `roboSel(${b._id})`;
  return `<div class="tb c-${ROBO_CAT[b.k]}${sel ? ' sel' : ''}${cont ? ' cont' : ''}" id="rb${b._id}">
    <button class="tbh" ${click ? `onclick="${click}"` : 'tabindex="-1"'}><span class="tbi">${roboIco(b)}</span><span class="tbl">${roboLabel(b)}</span></button>
    ${cont ? `<div class="tbin">${roboList(b.b, ro)}</div>${b.k === 'if' && b.e ? `<div class="tbelse">${L('Si no', 'Si no')}</div><div class="tbin">${roboList(b.e, ro)}</div>` : ''}<div class="tbend"></div>` : ''}
  </div>${sel && !ro ? roboTools(b) : ''}`;
}
function roboSlot(l, i) {
  const X = roboStage, on = X.cur && X.cur.l === l && X.cur.i === i && X.mode === 'edit';
  return `<button class="tslot${on ? ' on' : ''}" onclick="roboCur(${X.lists.indexOf(l)},${i})" aria-label="${L('Posa els blocs aquí', 'Pon los bloques aquí')}">${on ? `<span>${L('els blocs nous van aquí', 'los bloques nuevos van aquí')}</span>` : ''}</button>`;
}
function roboList(list, ro) {
  const X = roboStage;
  if (ro || X.mode !== 'edit') return list.map(b => roboBlock(b, ro)).join('') || (X.mode === 'parsons' ? `<p class="tempty">${L('Toca els blocs de sota en ordre', 'Toca los bloques de abajo en orden')}</p>` : '');
  return list.map((b, i) => roboSlot(list, i) + roboBlock(b)).join('') + roboSlot(list, list.length);
}
// controls d'un número: − valor +
const roboNT = (f, v, lab, big) => `<span class="ro-nt"><small>${lab}</small><button onclick="roboNum('${f}',-1)" aria-label="${L('Menys', 'Menos')}">−</button><b>${v}</b><button onclick="roboNum('${f}',1)" aria-label="${L('Més', 'Más')}">+</button>${big ? `<button class="x" onclick="roboNum('${f}',${big})">+${big}</button>` : ''}</span>`;
function roboTools(b) {
  const X = roboStage, ix = X.ids[b._id], i = ix.list.indexOf(b), vv = v => typeof v === 'string' ? roboVarN(v) : roboFmt(v);
  const canVar = X.pal.includes('set');
  const varT = f => canVar ? `<button class="wide" onclick="roboVarT('${f}')">${typeof b[f] === 'string' ? L('Fes servir un número', 'Usa un número') : L('Fes servir una variable', 'Usa una variable')}</button>` : '';
  let t = '';
  switch (b.k) {
    case 'go': t = `<button class="wide" onclick="roboTog('d')">${b.d === 'b' ? L('↑ Endavant', '↑ Adelante') : L('↓ Enrere', '↓ Atrás')}</button>${roboNT('v', vv(b.v), L('velocitat', 'velocidad'))}${roboNT('t', roboFmt(b.t) + ' s', L('temps', 'tiempo'))}${varT('v')}`; break;
    case 'turn': t = `<button class="wide" onclick="roboTog('d')">${b.d === 'l' ? L('→ A la dreta', '→ A la derecha') : L("← A l'esquerra", '← A la izquierda')}</button>${roboNT('v', vv(b.v), L('velocitat', 'velocidad'))}${roboNT('t', roboFmt(b.t) + ' s', L('temps', 'tiempo'))}`; break;
    case 'run': t = `<button class="wide" onclick="roboTog('d')">${b.d === 'b' ? L('↑ Endavant', '↑ Adelante') : L('↓ Enrere', '↓ Atrás')}</button>${roboNT('v', vv(b.v), L('velocitat', 'velocidad'))}${varT('v')}`; break;
    case 'mot': t = `${roboNT('l', vv(b.l), L('esquerre', 'izquierdo'))}${roboNT('r', vv(b.r), L('dret', 'derecho'))}${canVar ? `<button class="wide" onclick="roboVarT('l');roboVarT('r')">${L('Variable ↔ número', 'Variable ↔ número')}</button>` : ''}`; break;
    case 'wait': t = roboNT('t', roboFmt(b.t) + ' s', L('temps', 'tiempo')); break;
    case 'rep': t = roboNT('n', b.n, L('vegades', 'veces')); break;
    case 'waitu': case 'while': case 'until': case 'if': t = roboCondTools(b.c) + (b.k === 'if' && X.pal.includes('else') ? `<button class="wide" onclick="roboElse()">${b.e ? L('Treu «si no»', 'Quita «si no»') : L('Afegeix «si no»', 'Añade «si no»')}</button>` : ''); break;
    case 'light': t = `<button class="wide" onclick="roboCyc('p',['all','L','R'])">${L('Quins llums', 'Qué luces')}</button><button class="wide" onclick="roboCyc('c',['r','g','u','y','p','c','w','off'])">${L('Color', 'Color')} <i class="tdot" style="background:${ROBO_COL[b.c] || '#333'}"></i></button>`; break;
    case 'note': t = `<button class="wide" onclick="roboCyc('n',Object.keys(ROBO_NOTES))">${L('Nota', 'Nota')}: ${b.n}</button><button class="wide" onclick="roboCyc('d',[1,2,.5])">${L('Durada', 'Duración')}</button>`; break;
    case 'set': t = `<button class="wide" onclick="roboCyc('v',roboStage.vars)">${L('Variable', 'Variable')}</button><button class="wide" onclick="roboCyc('src',['n','dist'${X.conds.includes('light') || X.conds.includes('lightc') ? ",'lightL','lightR'" : ''}])">${L('Valor', 'Valor')}</button>${(b.src || 'n') === 'n' ? roboNT('n', roboFmt(b.n || 0), L('número', 'número'), 50) : roboNT('o', roboFmt(b.o || 0), L('resta', 'resta')) + roboNT('m', roboFmt(b.m ?? 1), L('per', 'por'))}`; break;
    case 'chg': t = `<button class="wide" onclick="roboCyc('v',roboStage.vars)">${L('Variable', 'Variable')}</button>${roboNT('n', roboFmt(b.n ?? 1), L('suma', 'suma'))}`; break;
    case 'num': t = typeof b.v === 'string' ? `<button class="wide" onclick="roboCyc('v',roboStage.vars)">${roboVarN(b.v)}</button>` + varT('v') : roboNT('v', b.v, L('número', 'número')) + varT('v'); break;
    case 'icon': t = `<button class="wide" onclick="roboCyc('i',Object.keys(ROBO_ICONS))">${L('Canvia la icona', 'Cambia el icono')}</button>`; break;
  }
  return `<div class="tbtools ro-tools2"><button onclick="roboMove(-1)" ${i === 0 ? 'disabled' : ''} aria-label="${L('Puja', 'Sube')}">↑</button><button onclick="roboMove(1)" ${i === ix.list.length - 1 ? 'disabled' : ''} aria-label="${L('Baixa', 'Baja')}">↓</button>
    ${t}<button class="del" onclick="roboDel()">${L('Esborra', 'Borra')}</button></div>`;
}
function roboCondTools(c) {
  const X = roboStage;
  let t = X.conds.length > 1 ? `<button class="wide" onclick="roboCondS()">${L('Sensor', 'Sensor')}: ${{ dist: L('distància', 'distancia'), line: L('línia', 'línea'), light: L('llum', 'luz'), lightc: L('llum', 'luz'), var: L('variable', 'variable') }[c.s]}</button>` : '';
  if (c.s === 'dist') t += `<button onclick="roboCC('op')">${c.op}</button>${roboNT('c.n', c.n + ' cm', 'cm', 10)}`;
  if (c.s === 'line') t += `<button class="wide" onclick="roboCC('p')">${L('Sensor', 'Sensor')} ${c.p}</button><button class="wide" onclick="roboCC('b')">${(c.b ?? 1) ? L('negre', 'negro') : L('blanc', 'blanco')}</button>`;
  if (c.s === 'light') t += `<button class="wide" onclick="roboCC('p')">${c.p === 'R' ? L('dreta', 'derecha') : L('esquerra', 'izquierda')}</button><button onclick="roboCC('op')">${c.op}</button>${roboNT('c.n', c.n, L('llum', 'luz'), 50)}`;
  if (c.s === 'var') t += `<button class="wide" onclick="roboCC('v')">${roboVarN(c.v)}</button><button onclick="roboCC('op')">${c.op}</button>${roboNT('c.n', c.n, L('número', 'número'), 10)}`;
  return t;
}
function roboPalette() {
  const X = roboStage, used = roboCount(X.prog), full = X.max && used >= X.max;
  return `<div class="tpal">${X.pal.filter(k => k !== 'else').map(k => { const b = roboNew(k); if (ROBO_CK.includes(k)) b.c = roboCondDef(X.conds[0], b.k); return `<button class="tb c-${ROBO_CAT[k]} tpb" onclick="roboIns('${k}')" ${full ? 'disabled' : ''}><span class="tbi">${roboIco(b)}</span><span class="tbl">${roboLabel(b)}</span></button>`; }).join('')}</div>`;
}
const ROBO_CK = ['waitu', 'while', 'until', 'if'];
const roboCondDef = (s, k) => ({ dist: { s: 'dist', op: k === 'while' ? '>' : '<', n: 15 }, line: { s: 'line', p: 'M', b: 1 }, light: { s: 'light', p: 'L', op: '>', n: 100 }, lightc: { s: 'lightc' }, var: { s: 'var', v: 'n', op: '<', n: 3 } })[s] || { s: 'dist', op: '<', n: 15 };
// quins indicadors cal ensenyar al tauler
function roboDashKeys() {
  const X = roboStage, st = X.st, A = X.A, pal = X.pal, c = X.conds;
  if (st.dash) return st.dash;
  const k = ['mot'];
  if (c.includes('dist') || A.walls.length || A.posts.length || A.movers.length || A.box) k.unshift('dist');
  if (c.includes('line') || A.lines.length || A.ring) k.push('line');
  if (c.includes('light') || c.includes('lightc') || A.lamp || A.tunnels.length) k.push('light');
  if (pal.includes('light')) k.push('led');
  if (pal.includes('num') || pal.includes('icon')) k.push('mat');
  if (pal.includes('set') || pal.includes('chg')) k.push('var');
  if (k.length < 4) k.push('ang');
  return k;
}
function roboDashHTML() {
  const ks = roboDashKeys();
  const G = {
    dist: `<div class="ro-g ro-gd"><svg viewBox="0 0 100 58"><path d="M10 52a40 40 0 0 1 80 0" class="ro-gtr"/><path d="M10 52a40 40 0 0 1 80 0" class="ro-gfi" id="rgd" pathLength="100" stroke-dasharray="0 100"/><g id="rgn" transform="rotate(-90 50 52)"><path d="M50 52V18" class="ro-gnd"/></g><circle cx="50" cy="52" r="4" fill="#fff"/></svg><b id="rdv">–</b><small>${L('Distància', 'Distancia')}</small></div>`,
    line: `<div class="ro-g ro-gl"><div class="ro-ls">${['L', 'M', 'R'].map((p, i) => `<span id="rl${i}"><i></i>${p}</span>`).join('')}</div><small>${L('Línia', 'Línea')}</small></div>`,
    mot: `<div class="ro-g ro-gm"><div class="ro-bars">${['L', 'R'].map((p, i) => `<span class="ro-bar"><i id="rm${i}"></i><em id="rmv${i}">0</em></span>`).join('')}</div><small>${L('Motors', 'Motores')}</small></div>`,
    light: `<div class="ro-g ro-glt"><div class="ro-bars h">${['L', 'R'].map((p, i) => `<span class="ro-bar y"><i id="rt${i}"></i><em id="rtv${i}">0</em></span>`).join('')}</div><small>${L('Llum', 'Luz')}</small></div>`,
    led: `<div class="ro-g ro-gled"><div class="ro-leds"><i id="rh0"></i><i id="rh1"></i></div><small>${L('Llums', 'Luces')}</small></div>`,
    mat: `<div class="ro-g ro-gmat"><span id="rmat">${roboMatSVG('00000 00000 00000 00000 00000')}</span><small>${L('Pantalla', 'Pantalla')}</small></div>`,
    var: `<div class="ro-g ro-gvar"><div id="rvars" class="ro-vars"></div><small>${L('Variables', 'Variables')}</small></div>`,
    ang: `<div class="ro-g ro-gang"><svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="26" class="ro-gtr2"/>${[0, 90, 180, 270].map(a => `<path d="M30 6v6" transform="rotate(${a} 30 30)" stroke="#9FB4F2" stroke-width="3" stroke-linecap="round"/>`).join('')}<g id="rang"><path d="M30 12l6 20h-12z" fill="#FF5A4F"/><path d="M30 48l6 -16h-12z" fill="#C9D6FB"/></g></svg><b id="rangv">0°</b><small>${L('Gir', 'Giro')}</small></div>`
  };
  return `<div class="ro-dash" id="rdash">${ks.map(k => G[k] || '').join('')}</div>`;
}
function roboGoalsHTML() {
  const X = roboStage, gs = X.A.goals.filter(g => g.k !== 'uses' || true);
  if (!gs.length) return '';
  return `<div class="ro-goals"><b>${L('Missió', 'Misión')}</b><ul>${gs.map((g, i) => `<li id="rg${i}"><i></i>${roboGoalTxt(X.A, g)}</li>`).join('')}</ul>${X.A.starts.length > 1 ? `<p class="ro-var2">${L(`Ha de funcionar des de ${X.A.starts.length} sortides diferents.`, `Tiene que funcionar desde ${X.A.starts.length} salidas diferentes.`)}</p>` : ''}</div>`;
}
function roboHTML(extra = '') {
  const X = roboStage, A = X.A; roboIndex();
  const used = roboCount(X.prog), ro = X.mode === 'view' || X.mode === 'spot' || X.mode === 'predict';
  const ar = Math.max(1.05, Math.min(1.9, (A.w + 24) / (A.h + 34)));
  const view = `<div class="ro-view${A.dark ? ' dark' : ''}" id="r3d" style="aspect-ratio:${ar.toFixed(3)}"><canvas class="ro-2d" id="r2d"></canvas>
      <div class="ro-hud"><span class="ro-chip"><svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 9v4l2.5 1.5M9 2h6" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg><b id="rtime">0,0</b> s</span><span class="ro-chip ro-try" id="rtry" hidden></span></div>
      <div class="ro-fab"><button onclick="roboCam()" id="rcam" title="${L('Càmera', 'Cámara')}" aria-label="${L('Canvia la càmera', 'Cambia la cámara')}"><svg viewBox="0 0 24 24"><path d="M4 7h3l2-2h6l2 2h3v12H4z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.6" fill="none" stroke="currentColor" stroke-width="2.2"/></svg></button>
        <button onclick="roboSensT()" id="rsen" class="${X.sens ? 'on' : ''}" title="${L('Mostra els sensors', 'Muestra los sensores')}" aria-label="${L('Mostra els sensors', 'Muestra los sensores')}"><svg viewBox="0 0 24 24"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="3.2" fill="currentColor"/></svg></button>
        <button onclick="roboPenT()" id="rpen" class="${X.pen ? 'on' : ''}" title="${L('Rastre (llapis)', 'Rastro (lápiz)')}" aria-label="${L('Rastre', 'Rastro')}"><svg viewBox="0 0 24 24"><path d="M15 4l5 5L9 20H4v-5z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M3 22c3-1 5 1 8 0" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg></button></div>
      <div class="ro-ban" id="rban"></div></div>`;
  const runbar = X.mode === 'remote' ? '' : `<div class="trun"><button class="btn big trgo" onclick="roboGo()" id="rgo">${X.run ? L('Atura', 'Para') : `<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>${L('Executa', 'Ejecuta')}`}</button>
      ${X.mode === 'edit' || X.mode === 'parsons' ? `<button class="btn ghost" onclick="roboStep()" title="${L('Executa fins al bloc següent', 'Ejecuta hasta el bloque siguiente')}">${L('Pas a pas', 'Paso a paso')}</button>` : ''}
      <button class="btn ghost ico" onclick="roboReset()" aria-label="${L('Torna el robot a la sortida', 'Devuelve el robot a la salida')}"><svg viewBox="0 0 24 24"><path d="M12 5V2L7 6l5 4V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z" fill="currentColor"/></svg></button>
      <button class="btn ghost ico ro-spd" onclick="roboSpeed()" id="rspd" aria-label="${L('Velocitat de la simulació', 'Velocidad de la simulación')}">×${X.speed}</button></div>
      <div class="ro-rep" id="rrep" hidden><button onclick="roboRepPlay()" id="rrpb" aria-label="${L('Repeteix', 'Repite')}"><svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg></button><span>${L('Repetició', 'Repetición')}</span><input type="range" id="rrng" min="0" max="1" value="1" oninput="roboRepAt(+this.value)"><b id="rrt">0,0 s</b></div>`;
  const world = `<div class="tworld ro-world" id="rworld">${view}${roboDashHTML()}<p class="tsay" id="tsay" aria-live="polite"></p>${runbar}</div>`;
  let code;
  if (X.mode === 'remote') code = roboRemoteHTML();
  else {
    const clr = X.mode === 'edit' && used ? `<button class="tclr" onclick="roboClear()" aria-label="${L('Buida el programa', 'Vacía el programa')}"><svg viewBox="0 0 24 24"><path d="M6 7h12l-1 14H7zM9 3h6l1 2h4v2H4V5h4z" fill="currentColor"/></svg></button>` : '';
    const mk = X.mode === 'edit' || X.mode === 'view' ? `<button class="ro-mk" onclick="roboExport()" title="MakeCode"><svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>MakeCode</button>` : '';
    code = `${roboGoalsHTML()}${extra}<div class="tphead"><b>${X.mode === 'parsons' ? L('El teu programa', 'Tu programa') : L('Programa', 'Programa')}</b><span class="tphr">${mk}${X.max ? `<span class="tcount ${used >= X.max ? 'full' : ''}">${used}/${X.max} ${L('blocs', 'bloques')}</span>` : `<span class="tcount">${used} ${used === 1 ? L('bloc', 'bloque') : L('blocs', 'bloques')}</span>`}${clr}</span></div>
      <div class="tprog ro-prog" id="tprog">${roboList(X.prog, ro)}</div>${X.mode === 'edit' ? roboPalette() : ''}
      ${X.mode === 'parsons' ? `<div class="tpool"><small>${L('Blocs disponibles', 'Bloques disponibles')}</small><div>${X.pool.map(b => roboBlock(b)).join('') || `<p class="tempty">${L('Ja els has posat tots', 'Ya los has puesto todos')}</p>`}</div></div>` : ''}`;
  }
  return `<div class="tstage ro-stage m-${X.mode}">${world}<div class="tcode ro-code">${code}</div></div>`;
}
function roboRemoteHTML() {
  const pre = [['↑', 150, 150, L('Endavant', 'Adelante')], ['↓', -150, -150, L('Enrere', 'Atrás')], ['⟲', -100, 100, L('Gira esq.', 'Gira izq.')], ['⟳', 100, -100, L('Gira dreta', 'Gira der.')], ['↰', 60, 160, L('Corba', 'Curva')], ['■', 0, 0, L('Para', 'Para')]];
  return `${roboGoalsHTML()}<div class="ro-remote"><p class="ro-rh">${L('Arrossega les dues palanques: cada una és un motor. Prova què passa quan van iguals, diferents o al revés.', 'Arrastra las dos palancas: cada una es un motor. Prueba qué pasa cuando van iguales, diferentes o al revés.')}</p>
    <div class="ro-thr">${[0, 1].map(i => `<div class="ro-th"><small>${i ? L('Motor dret', 'Motor derecho') : L('Motor esquerre', 'Motor izquierdo')}</small><div class="ro-tt" id="rth${i}" data-i="${i}"><i class="ro-t0"></i><span class="ro-kn" id="rkn${i}"><b id="rtv${i}x">0</b></span></div></div>`).join('')}</div>
    <div class="ro-pre">${pre.map(([s, l, r, t]) => `<button onclick="roboThr(${l},${r})"><b>${s}</b><small>${t}</small></button>`).join('')}</div></div>`;
}
/* ---------- Muntar l'escenari ---------- */
function roboMount(el, extra = '') {
  const X = roboStage;
  el.innerHTML = (el === $('#tsb') ? roboQHTML(X.st) : '') + roboHTML(extra);
  el.classList.add('wide');
  X.el = el.querySelector('.ro-stage');
  X.floor = roboFloorCanvas(X.A, { marks: X.mode === 'predict' && !ROBO3D });
  roboDraw();
  robo3dLoad().then(M => {
    const box = roboQ('r3d'); if (!M || roboStage !== X || !box || box.querySelector('.ro-c3')) return;
    try { X.b3 = M.create(box, X.A, X.S, { floor: roboFloorCanvas(X.A), icons: ROBO_ICONS, shot: !!window.__shot, sens: X.sens, marks: X.mode === 'predict' }); box.classList.add('on'); X.b3.update(X.S); } catch (e) { X.b3 = null; console.warn(e); }
  });
  if (X.mode === 'remote') roboRemoteWire();
  addEventListener('resize', roboDraw, { passive: true });
  roboDashUp(X.S);
}
function roboQHTML(st) {
  return st.q ? `<div class="tsq2 ro-q"><span class="tsqc">${st.who === 'numi' ? charSVG('numi', 'idle') : bitChar('idle')}</span><div>${st.extra ? `<span class="ro-xtra">${L('Repte extra', 'Reto extra')}</span>` : ''}${st.lvl ? `<span class="ro-lvl">${'★'.repeat(st.lvl)}${'☆'.repeat(Math.max(0, 3 - st.lvl))}</span>` : ''}<p>${tval(st.q)}</p>${st.crit ? `<ul class="tcrit">${st.crit.map(c => `<li>${tval(c)}</li>`).join('')}</ul>` : ''}</div></div>` : '';
}
// només la part del programa (sense tocar el món 3D)
function roboDrawCode() {
  const X = roboStage; if (!X || !X.el) return;
  const sc = roboQ('tprog'), top = sc ? sc.scrollTop : 0, code = X.el.querySelector('.ro-code');
  const d = document.createElement('div'); d.innerHTML = roboHTML(X.extra || ''); code.innerHTML = d.querySelector('.ro-code').innerHTML;
  const sc2 = roboQ('tprog'); if (sc2) sc2.scrollTop = top;
}
function roboDraw() { const X = roboStage; if (!X || X.b3) return; const cv = roboQ('r2d'); if (cv) roboDraw2D(cv, X.A, X.S, { sens: X.sens }); }
function roboSay(t, cls = '') { const e = roboQ('tsay'); if (e) { e.className = 'tsay ' + cls; e.innerHTML = t; } }
function roboBanner(ok, t) { const b = roboQ('rban'); if (!b) return; b.className = 'ro-ban show ' + (ok ? 'ok' : 'ko'); b.innerHTML = `<span>${ok ? '✓' : '!'}</span>${t}`; clearTimeout(b._t); b._t = setTimeout(() => b.classList.remove('show'), 2600); }

/* ---------- Tauler de sensors ---------- */
function roboDashUp(S) {
  const X = roboStage; if (!X) return;
  const A = X.A, set = (id, v) => { const e = roboQ(id); if (e && e.textContent !== String(v)) e.textContent = v; };
  if (roboQ('rdv')) { const d = Math.round(roboDist(A, S, false)), f = Math.min(1, d / 100); set('rdv', d >= 300 ? '>300 cm' : d + ' cm'); const fi = roboQ('rgd'); fi.setAttribute('stroke-dasharray', `${(f * 100).toFixed(1)} 100`); fi.classList.toggle('near', d < 15); roboQ('rgn').setAttribute('transform', `rotate(${(-90 + f * 180).toFixed(1)} 50 52)`); }
  for (let i = 0; i < 3; i++) { const e = roboQ('rl' + i); if (e) e.classList.toggle('blk', !!roboLineS(A, S, i)); }
  for (let i = 0; i < 2; i++) { const e = roboQ('rm' + i); if (e) { const v = i ? S.mr : S.ml; e.style.height = Math.abs(v) / 255 * 50 + '%'; e.style.bottom = v >= 0 ? '50%' : 50 - Math.abs(v) / 255 * 50 + '%'; e.classList.toggle('neg', v < 0); set('rmv' + i, v); } }
  for (let i = 0; i < 2; i++) { const e = roboQ('rt' + i); if (e) { const v = roboLight(A, S, i ? 'R' : 'L', false); e.style.height = v / 255 * 100 + '%'; set('rtv' + i, v); } }
  for (let i = 0; i < 2; i++) { const e = roboQ('rh' + i); if (e) { const c = i ? S.lights.R : S.lights.L; e.style.background = c ? ROBO_COL[c] : ''; e.classList.toggle('on', !!c); e.style.color = c ? ROBO_COL[c] : ''; } }
  const m = roboQ('rmat'); if (m) { const key = S.mat ? S.mat.k + S.mat.v : ''; if (m.dataset.k !== key) { m.dataset.k = key; m.innerHTML = roboMatSVG(!S.mat ? '00000 00000 00000 00000 00000' : S.mat.k === 'i' ? ROBO_ICONS[S.mat.v] : roboNumPat(S.mat.v)); } }
  const vv = roboQ('rvars'); if (vv) { const h = X.vars.map(v => `<span><small>${roboVarN(v)}</small><b>${roboFmt(S.vars[v] || 0)}</b></span>`).join(''); if (vv.innerHTML !== h) vv.innerHTML = h; }
  const an = roboQ('rang'); if (an) { const a = Math.round((S.th - roboRad(A.starts[X.si] ? A.starts[X.si][2] : 0)) * 180 / Math.PI); an.setAttribute('transform', `rotate(${a} 30 30)`); set('rangv', a + '°'); }
  set('rtime', roboFmt(Math.floor(S.t * 10) / 10));
}
// un número d'una xifra a la pantalla (si en té més, l'última, com a pista: al 3D llisca)
function roboNumPat(v) { const s = String(v), d = ROBO_DIG[+s[s.length - 1]] || ROBO_DIG[0]; return d.split(' ').map(r => '0' + r + '0').join(' '); }

/* ---------- Editor ---------- */
function roboIns(k) {
  const X = roboStage; if (X.run) roboStop();
  if (X.max && roboCount(X.prog) >= X.max) return toast(L(`Només pots fer servir ${X.max} blocs.`, `Solo puedes usar ${X.max} bloques.`));
  const b = roboNew(k); if (ROBO_CK.includes(k)) b.c = roboCondDef(X.conds[0], k); if (k === 'set') b.v = X.vars[0]; if (k === 'chg') b.v = X.vars[X.vars.length > 1 ? 1 : 0];
  const { l, i } = X.cur; l.splice(i, 0, b);
  X.cur = b.b ? { l: b.b, i: 0 } : { l, i: i + 1 }; X.sel = b.b ? null : b;
  SFX.tap && SFX.tap(); roboFresh(); roboDrawCode();
}
function roboCur(li, i) { const X = roboStage; if (X.run) roboStop(); X.cur = { l: X.lists[li], i }; X.sel = null; roboDrawCode(); }
function roboSel(id) { const X = roboStage; if (X.run) roboStop(); const ix = X.ids[id]; if (!ix) return; X.sel = X.sel === ix.b ? null : ix.b; X.cur = { l: ix.list, i: ix.list.indexOf(ix.b) + 1 }; roboDrawCode(); }
function roboMove(d) { const X = roboStage, b = X.sel, l = X.ids[b._id].list, i = l.indexOf(b), j = i + d; if (j < 0 || j >= l.length) return; l.splice(i, 1); l.splice(j, 0, b); X.cur = { l, i: j + 1 }; roboFresh(); roboDrawCode(); }
function roboDel() { const X = roboStage, b = X.sel, l = X.ids[b._id].list, i = l.indexOf(b); l.splice(i, 1); X.sel = null; X.cur = { l, i }; roboFresh(); roboDrawCode(); }
function roboClear() { const X = roboStage; X.prog.splice(0); X.cur = { l: X.prog, i: 0 }; X.sel = null; roboFresh(); roboDrawCode(); }
const ROBO_STEP = { v: [10, 0, 255], t: [.1, .1, 20], n: [1, 1, 20], l: [10, -255, 255], r: [10, -255, 255], 'c.n': [1, 0, 300], o: [1, 0, 200], m: [1, -20, 20] };
function roboNum(f, d) {
  const X = roboStage, b = X.sel; if (!b) return;
  let [st, lo, hi] = ROBO_STEP[f] || [1, -999, 999];
  if (b.k === 'chg' && f === 'n') [lo, hi] = [-50, 50];
  if (b.k === 'set' && f === 'n') { st = 10; [lo, hi] = [-255, 255]; }
  if (b.k === 'num' && f === 'v') [lo, hi] = [0, 99];
  if (f === 'c.n' && b.c.s === 'light') st = 10;
  if (f === 't' && ((b.t ?? 1) < 1 || ((b.t ?? 1) === 1 && d < 0))) st = .05;
  if (f === 'm' && Math.abs(b.m ?? 1) < 2 && d !== 0) st = d > 0 ? ((b.m ?? 1) < 1 ? .5 : 1) : (b.m ?? 1) <= 1 ? .5 : 1;
  const obj = f === 'c.n' ? b.c : b, key = f === 'c.n' ? 'n' : f, cur = obj[key] ?? (f === 'm' ? 1 : 0);
  if (typeof cur === 'string') return;
  obj[key] = Math.round(roboClamp(cur + d * (Math.abs(d) > 1 ? 1 : st), lo, hi) * 100) / 100;
  roboFresh(); roboDrawCode();
}
function roboVarT(f) { const X = roboStage, b = X.sel; b[f] = typeof b[f] === 'string' ? (f === 't' ? 1 : 100) : X.vars[0]; roboFresh(); roboDrawCode(); }
function roboTog(f) { const b = roboStage.sel; b[f] = { go: { f: 'b', b: 'f' }, run: { f: 'b', b: 'f' }, turn: { r: 'l', l: 'r' } }[b.k][b[f]] || b[f]; roboFresh(); roboDrawCode(); }
function roboCyc(f, list) { const b = roboStage.sel; b[f] = list[(list.indexOf(b[f]) + 1) % list.length]; if (b.k === 'set' && f === 'src' && b.src !== 'n') { b.o = b.o || 0; b.m = b.m ?? 1; } if (b.k === 'note' && f === 'n') roboTone(ROBO_NOTES[b.n], .25); roboFresh(); roboDrawCode(); }
function roboCondS() { const X = roboStage, b = X.sel, i = X.conds.indexOf(b.c.s); b.c = roboCondDef(X.conds[(i + 1) % X.conds.length], b.k); roboFresh(); roboDrawCode(); }
function roboCC(f) { const X = roboStage, c = X.sel.c;
  if (f === 'op') c.op = c.op === '<' ? '>' : c.s === 'var' && c.op === '>' ? '=' : '<';
  if (f === 'p') c.p = c.s === 'light' ? (c.p === 'L' ? 'R' : 'L') : ['L', 'M', 'R', 'LR', 'all', 'any'][(['L', 'M', 'R', 'LR', 'all', 'any'].indexOf(c.p) + 1) % 6];
  if (f === 'b') c.b = (c.b ?? 1) ? 0 : 1;
  if (f === 'v') c.v = X.vars[(X.vars.indexOf(c.v) + 1) % X.vars.length];
  roboFresh(); roboDrawCode(); }
function roboElse() { const b = roboStage.sel; b.e = b.e ? null : []; roboFresh(); roboDrawCode(); }
function roboPar(id) { const X = roboStage; if (X.run) roboStop(); const ix = X.ids[id]; if (!ix) return; if (X.prog.includes(ix.b)) { X.prog.splice(X.prog.indexOf(ix.b), 1); X.pool.push(ix.b); } else if (X.pool.includes(ix.b)) { X.pool.splice(X.pool.indexOf(ix.b), 1); X.prog.push(ix.b); } SFX.tap && SFX.tap(); roboFresh(); roboDrawCode(); }
function roboSpot(id) { const X = roboStage; if (X.onSpot) X.onSpot(id, X.ids[id] && X.ids[id].b); }
// qualsevol canvi: el robot torna a la sortida
function roboFresh() { const X = roboStage; X.R = null; X.rep = null; X.si = 0; X.S = roboState(X.A); X.S.pen = X.pen; if (X.b3) X.b3.reset(X.A, X.S); roboDraw(); roboDashUp(X.S); const r = roboQ('rrep'); if (r) r.hidden = true; roboGoalMarks(null); }

/* ---------- Execució ---------- */
function roboGo() {
  const X = roboStage; if (!X) return;
  if (X.run) return roboStop();
  if (!X.prog.length) return roboSay(tx(ROBO_WHY.empty.join('|')));
  const miss = X.A.goals.find(g => g.k === 'uses' && !roboHas(X.prog, g.b)); if (miss) return roboSay(L(`Aquest repte demana fer servir el bloc «${roboLabel(roboNew(miss.b), true)}».`, `Este reto pide usar el bloque «${roboLabel(roboNew(miss.b), true)}».`), 'bad');
  X.si = 0; X.tries++; X.sel = null; roboDrawCode(); roboStart();
}
function roboStart(stepMode) {
  const X = roboStage;
  X.R = roboRunner(X.A, X.prog, { start: X.A.starts[X.si] }); X.S = X.R.S; X.S.pen = X.pen; X.frames = []; X.acc = 0; X.lt = 0; X.stepMode = !!stepMode; X.stepFrom = null;
  if (X.b3) X.b3.reset(X.A, X.S);
  const t = roboQ('rtry'); if (t) { t.hidden = X.A.starts.length < 2; t.textContent = L(`Sortida ${X.si + 1}/${X.A.starts.length}`, `Salida ${X.si + 1}/${X.A.starts.length}`); }
  const r = roboQ('rrep'); if (r) r.hidden = true;
  roboSay(''); roboGoalMarks(null); document.querySelectorAll('.ro-prog .tb.err').forEach(e => e.classList.remove('err'));
  X.run = true; roboRunBtn(); requestAnimationFrame(roboLoop);
}
function roboRunBtn() { const X = roboStage, b = roboQ('rgo'); if (b) b.innerHTML = X.run && !X.paused ? `<svg viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/></svg>${L('Atura', 'Para')}` : `<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>${L('Executa', 'Ejecuta')}`; }
function roboStop() { const X = roboStage; X.run = false; X.paused = false; roboRunBtn(); roboMark(null); roboRepShowBar(); }
function roboLoop(ts) {
  const X = roboStage; if (!X || !X.run || X.paused || !X.el || !X.el.isConnected) return;
  const dt = X.lt ? Math.min(.05, (ts - X.lt) / 1000) : 0; X.lt = ts; X.acc += dt * X.speed;
  let n = 0, res = null;
  while (X.acc >= ROBO_K.DT && n++ < 60) {
    X.acc -= ROBO_K.DT;
    const prevB = X.R.cur;
    res = roboTick(X.R); roboRec(X);
    if (X.R.S.notes.length && X.R.S.notes.length !== X.nNotes) { X.nNotes = X.R.S.notes.length; const nt = X.R.S.notes[X.nNotes - 1]; roboTone(ROBO_NOTES[nt.n] || 262, .3); }
    if (X.R.S.hit && !X.hitSnd) roboTone(110, .18, 'square'); X.hitSnd = X.R.S.hit;
    if (res) break;
    if (X.stepMode && X.R.cur !== prevB && prevB) { X.paused = true; break; }
  }
  roboMark(X.R.cur);
  if (X.b3) X.b3.update(X.S); else roboDraw();
  if (!X.dashT || ts - X.dashT > 60) { X.dashT = ts; roboDashUp(X.S); }
  if (res) return roboEnd(res);
  if (X.paused) { roboRunBtn(); roboSay(L('Pausa: el bloc marcat és el següent. Toca «Pas a pas» per continuar o «Executa» per seguir.', 'Pausa: el bloque marcado es el siguiente. Toca «Paso a paso» para continuar o «Ejecuta» para seguir.')); return; }
  requestAnimationFrame(roboLoop);
}
function roboStep() {
  const X = roboStage; if (!X.prog.length) return roboSay(tx(ROBO_WHY.empty.join('|')));
  if (X.run && X.paused) { X.paused = false; X.stepMode = true; X.lt = 0; roboRunBtn(); requestAnimationFrame(roboLoop); return; }
  if (X.run) { X.stepMode = true; return; }
  X.si = 0; X.tries++; roboStart(true);
}
function roboMark(b) { document.querySelectorAll('.ro-prog .tb.now').forEach(e => e.classList.remove('now')); if (b && b._id) { const e = roboQ('rb' + b._id); if (e) { e.classList.add('now'); const p = roboQ('tprog'); if (p && p.scrollHeight > p.clientHeight) { const r = e.getBoundingClientRect(), pr = p.getBoundingClientRect(); if (r.top < pr.top || r.bottom > pr.bottom) p.scrollTop += r.top - pr.top - 30; } } } }
function roboGoalMarks(R) { const X = roboStage; X.A.goals.forEach((g, i) => { const e = roboQ('rg' + i); if (!e) return; e.className = !R ? '' : R.res && R.res.ok ? 'ok' : roboGoalOk(R, R.goals[i]) && !(R.res && !R.res.ok && roboGoalFail(R, R.goals[i])) ? 'ok' : 'ko'; }); }
function roboGoalFail(R, g) { const w = R.res && R.res.why; return ({ bump: 'notouch', offline: 'line', outring: 'inring', time: 'time', rulelight: 'rule', rulelight2: 'rule', rulenote: 'rule', rulenever: 'rule' })[w] === g.k; }
function roboEnd(res) {
  const X = roboStage; X.run = false; X.paused = false; roboRunBtn(); roboMark(null); roboDashUp(X.S); roboGoalMarks(X.R);
  if (res.ok && X.si + 1 < X.A.starts.length) {
    X.si++; roboBanner(true, L('Bé! Ara, des d’una altra sortida…', '¡Bien! Ahora, desde otra salida…'));
    setTimeout(() => { if (roboStage === X && X.el.isConnected) roboStart(); }, 1100); return;
  }
  roboRepShowBar();
  if (res.ok) {
    X.solved = true; SFX.win && SFX.win(); X.b3 && X.b3.react('yay'); typeof confetti === 'function' && confetti(80);
    const msg = X.st.yes ? tval(X.st.yes) : L('Missió complerta!', '¡Misión cumplida!');
    roboBanner(true, msg); roboSay(msg + (X.mode === 'edit' && X.prog.length ? ` <button class="ro-lnk" onclick="roboExport()">${L('Mira-ho en codi MakeCode', 'Míralo en código MakeCode')}</button>` : ''), 'ok');
    if (X.onDone) X.onDone(); return;
  }
  SFX.ko && SFX.ko(); X.b3 && X.b3.react(res.why === 'bump' ? 'hit' : 'sad');
  const why = tx((ROBO_WHY[res.why] || ROBO_WHY.long).join('|'));
  if (res.why === 'bump' && X.R.lastB && X.R.lastB._id) { const e = roboQ('rb' + X.R.lastB._id); if (e) e.classList.add('err'); }
  roboBanner(false, why); roboSay(`${why} ${X.A.starts.length > 1 && X.si ? L(`(sortida ${X.si + 1})`, `(salida ${X.si + 1})`) : ''} ${L('Canvia el programa i torna-ho a provar.', 'Cambia el programa y vuelve a probar.')}`, 'bad');
  if (X.onFail) X.onFail(res.why);
}
function roboReset() { const X = roboStage; if (X.run) roboStop(); roboFresh(); roboSay(''); document.querySelectorAll('.ro-prog .tb.err,.ro-prog .tb.now').forEach(e => e.classList.remove('err', 'now')); }
function roboSpeed() { const X = roboStage; X.speed = X.speed === 1 ? 2 : X.speed === 2 ? 4 : 1; const b = roboQ('rspd'); if (b) b.textContent = '×' + X.speed; }
function roboCam() { const X = roboStage; if (X.b3) { X.view = X.b3.view(); const b = roboQ('rcam'); b && b.classList.toggle('on', X.view === 'follow'); } }
function roboSensT() { const X = roboStage; X.sens = !X.sens; X.b3 && X.b3.sens(X.sens); roboQ('rsen').classList.toggle('on', X.sens); roboDraw(); }
function roboPenT() { const X = roboStage; X.pen = !X.pen; X.S.pen = X.pen; roboQ('rpen').classList.toggle('on', X.pen); if (X.b3) X.b3.update(X.S); roboDraw(); }

/* ---------- Repetició (gravació de l'última execució) ---------- */
function roboRec(X) { const S = X.R.S; X.frames.push({ x: S.x, y: S.y, th: S.th, wl: S.wl, wr: S.wr, vl: S.vl, vr: S.vr, L: S.lights.L, R: S.lights.R, mat: S.mat, ls: S.viz.ls.slice(), us: S.viz.us && { ...S.viz.us }, t: S.t, tn: S.trail.length, box: S.box && { ...S.box }, mv: S.movers.map(m => ({ x: m.x, y: m.y, th: m.th, v: m.v })), ml: S.ml, mr: S.mr, vars: { ...S.vars } }); }
function roboRepShowBar() { const X = roboStage, r = roboQ('rrep'); if (!r || !X.frames.length) return; r.hidden = false; const g = roboQ('rrng'); g.max = X.frames.length - 1; g.value = X.frames.length - 1; roboQ('rrt').textContent = roboFmt(X.frames[X.frames.length - 1].t) + ' s'; }
function roboRepState(i) {
  const X = roboStage, f = X.frames[i], S0 = X.R.S;
  return { x: f.x, y: f.y, th: f.th, wl: f.wl, wr: f.wr, vl: f.vl, vr: f.vr, lights: { L: f.L, R: f.R }, mat: f.mat, viz: { ls: f.ls, us: f.us && { ...f.us, t: f.t } }, t: f.t, pen: X.pen, trail: S0.trail.slice(0, f.tn), ev: [], box: f.box, movers: f.mv, ml: f.ml, mr: f.mr, vars: f.vars, notes: [] };
}
function roboRepAt(i) { const X = roboStage; if (!X.frames.length || X.run) return; const S = roboRepState(i); if (X.b3) X.b3.update(S); else { const cv = roboQ('r2d'); cv && roboDraw2D(cv, X.A, S, { sens: X.sens }); } roboDashUp(S); roboQ('rrt').textContent = roboFmt(S.t) + ' s'; }
function roboRepPlay() {
  const X = roboStage; if (X.run || !X.frames.length) return;
  if (X.rep) { cancelAnimationFrame(X.rep); X.rep = null; return; }
  const g = roboQ('rrng'); let i = +g.value >= X.frames.length - 1 ? 0 : +g.value, t0 = 0;
  const go = ts => { if (!X.el.isConnected) return; if (!t0) t0 = ts - i * 20; i = Math.min(X.frames.length - 1, Math.floor((ts - t0) / 20 * X.speed)); g.value = i; roboRepAt(i); if (i < X.frames.length - 1) X.rep = requestAnimationFrame(go); else X.rep = null; };
  X.rep = requestAnimationFrame(go);
}

/* ---------- Comandament (mode «remote»): dues palanques, una per motor ---------- */
function roboRemoteWire() {
  const X = roboStage;
  [0, 1].forEach(i => { const tr = roboQ('rth' + i); if (!tr) return;
    const set = e => { const r = tr.getBoundingClientRect(), y = roboClamp((e.clientY - r.top) / r.height, 0, 1); let v = Math.round((.5 - y) * 2 * 255 / 10) * 10; if (Math.abs(v) < 12) v = 0; X.thr[i] = v; roboThrUp(); };
    tr.onpointerdown = e => { tr.setPointerCapture(e.pointerId); set(e); tr.onpointermove = set; };
    tr.onpointerup = tr.onpointercancel = () => { tr.onpointermove = null; }; });
  X.R = roboRunner(X.A, [], {}); X.S = X.R.S; X.S.pen = X.pen; X.run = true; X.lt = 0; X.acc = 0; roboThrUp();
  requestAnimationFrame(roboRemoteLoop);
}
function roboThr(l, r) { const X = roboStage; X.thr = [l, r]; roboThrUp(); }
function roboThrUp() { const X = roboStage; [0, 1].forEach(i => { const k = roboQ('rkn' + i); if (k) { k.style.top = (50 - X.thr[i] / 255 * 50) + '%'; roboQ('rtv' + i + 'x').textContent = X.thr[i]; k.classList.toggle('neg', X.thr[i] < 0); } }); }
function roboRemoteLoop(ts) {
  const X = roboStage; if (!X || X.mode !== 'remote' || !X.el || !X.el.isConnected) return;
  const dt = X.lt ? Math.min(.05, (ts - X.lt) / 1000) : 0; X.lt = ts; X.acc += dt;
  const R = X.R, S = R.S;
  while (X.acc >= ROBO_K.DT && !R.res) {
    X.acc -= ROBO_K.DT; S.ml = X.thr[0]; S.mr = X.thr[1]; roboPhys(X.A, S);
    R.still = roboStill(S) ? R.still + ROBO_K.DT : 0;
    if (S.hit && !X.hitSnd) roboTone(110, .18, 'square'); X.hitSnd = S.hit;
    const f = roboGoalLive(R);
    if (f) { R.goals.forEach(g => { g.st = 0; g.i = 0; g.on = 0; }); roboBanner(false, tx((ROBO_WHY[f] || ROBO_WHY.long).join('|'))); X.thr = [0, 0]; roboThrUp(); const s0 = roboState(X.A); Object.assign(S, s0); S.pen = X.pen; if (X.b3) X.b3.reset(X.A, S); break; }
    if (R.goals.length && R.goals.some(g => !ROBO_CONSTR.includes(g.k)) && R.goals.every(g => roboGoalOk(R, g))) { R.res = { ok: true }; X.thr = [0, 0]; roboThrUp(); X.solved = true; SFX.win && SFX.win(); X.b3 && X.b3.react('yay'); roboBanner(true, X.st.yes ? tval(X.st.yes) : L('Ho has aconseguit!', '¡Lo has conseguido!')); roboSay(X.st.yes ? tval(X.st.yes) : L('Ho has aconseguit!', '¡Lo has conseguido!'), 'ok'); roboGoalMarks(R); X.onDone && X.onDone(); }
  }
  if (X.b3) X.b3.update(S); else roboDraw();
  if (!X.dashT || ts - X.dashT > 60) { X.dashT = ts; roboDashUp(S); }
  requestAnimationFrame(roboRemoteLoop);
}

/* ---------- So ---------- */
let ROBO_AC = null;
function roboTone(f, d = .3, type = 'triangle') {
  if (typeof P !== 'undefined' && P && P.sound === false) return;
  try { const ctx = ROBO_AC = ROBO_AC || new (window.AudioContext || window.webkitAudioContext)(); if (ctx.state === 'suspended') ctx.resume();
    const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.setValueAtTime(f, t); o.connect(g); g.connect(ctx.destination);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(type === 'square' ? .05 : .12, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + d); o.start(t); o.stop(t + d + .05); } catch (e) { }
}

/* ---------- Exportar a MakeCode ---------- */
function roboExport() {
  const X = roboStage; if (!X || !X.prog.length) return roboSay(tx(ROBO_WHY.empty.join('|')));
  const code = roboMakeCode(X.prog);
  modal(`<div class="sheet card ro-mksheet"><h3>${L('El teu programa per al robot de veritat', 'Tu programa para el robot de verdad')}</h3>
    <ol class="ro-mksteps"><li>${L('Obre <b>makecode.microbit.org</b> i crea un <b>projecte nou</b>.', 'Abre <b>makecode.microbit.org</b> y crea un <b>proyecto nuevo</b>.')}</li><li>${L('A <b>Extensions</b>, busca <b>maqueen</b> i afegeix la del Maqueen.', 'En <b>Extensiones</b>, busca <b>maqueen</b> y añade la del Maqueen.')}</li>
    <li>${L('Passa a <b>JavaScript</b> (a dalt), esborra el que hi hagi i posa-hi el codi copiat (Ctrl+V).', 'Pasa a <b>JavaScript</b> (arriba), borra lo que haya y pon el código copiado (Ctrl+V).')}</li><li>${L('Torna a <b>Blocs</b> per veure-ho, connecta el micro:bit amb el cable USB i toca <b>Descarrega</b>.', 'Vuelve a <b>Bloques</b> para verlo, conecta el micro:bit con el cable USB y toca <b>Descargar</b>.')}</li></ol>
    <pre class="ro-code" id="rmk">${esc(code)}</pre><p class="mut ro-mknote">${L('Al robot de veritat les distàncies i els girs poden canviar una mica: prova-ho i ajusta els temps i les velocitats.', 'En el robot de verdad las distancias y los giros pueden cambiar un poco: pruébalo y ajusta los tiempos y las velocidades.')}</p>
    <button class="btn big" onclick="roboCopy()">${L('Copia per a MakeCode', 'Copia para MakeCode')}</button><button class="btn ghost big" onclick="closeModal()">${L('Tanca', 'Cierra')}</button></div>`, true);
}
function roboCopy() {
  const t = roboQ('rmk') ? roboQ('rmk').textContent : '';
  const done = () => toast(L('Copiat! Ara posa-ho a MakeCode amb Ctrl+V.', '¡Copiado! Ahora ponlo en MakeCode con Ctrl+V.'));
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, () => roboCopyOld(t, done)); else roboCopyOld(t, done);
}
function roboCopyOld(t, done) { const a = document.createElement('textarea'); a.value = t; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); done(); } catch (e) { } a.remove(); }

/* ---------- El pas «robo» de la sessió ----------
   { k:'robo', mode:'edit'|'remote'|'predict'|'spot'|'parsons'|'view'|'explore', arena, q, pal, conds, vars, prog, sol, hint, goals,
     marks:{A:[x,y]…}, a:'B' (predict), pool (parsons), save:true + name (crea: es desa al portafoli), extra:true (repte opcional), lvl:1-3, dash:[…] } */
if (typeof TSTEP !== 'undefined') TSTEP.robo = function (st) {
  const X = roboMake(st), skip = st.extra ? `<button class="btn ghost" onclick="tNext()">${L('Salta', 'Salta')}</button>` : '';
  if (st.mode === 'predict') { X.A.marks = st.marks || X.A.marks; X.extra = `<div class="tpick ro-pick">${Object.keys(X.A.marks).sort().map(k => `<button class="topt sm" data-m="${k}">${k}</button>`).join('')}</div>`; }
  roboMount($('#tsb'), X.extra || '');
  const cont = () => tFoot(L('Continua', 'Continúa'), tNext, true, st.save ? '' : skip);
  if (st.mode === 'explore') { tFoot(L('Continua', 'Continúa'), tNext, true); return; }
  if (st.mode === 'remote') { X.onDone = () => setTimeout(cont, 600); tFoot(L('Continua', 'Continúa'), tNext, false, skip); return; }
  if (st.mode === 'predict') {
    let pick = null;
    const wire = () => document.querySelectorAll('.ro-pick .topt').forEach(b => b.onclick = () => { if (TSS.ready) return; pick = b.dataset.m; document.querySelectorAll('.ro-pick .topt').forEach(x => x.classList.toggle('on', x === b)); X.b3 && X.b3.marks(true, pick); SFX.tap && SFX.tap(); tFoot(L('Comprova-ho executant el programa', 'Compruébalo ejecutando el programa'), check); });
    wire(); const g0 = roboQ('rgo'); if (g0) g0.disabled = true;
    const check = () => { if (!pick) return; TSS.ready = true; document.querySelectorAll('.ro-pick .topt').forEach(b => b.disabled = true); X.b3 && X.b3.marks(false);
      X.onDone = X.onFail = null; X.A.goals = []; X.tries++; roboStart();
      const w = setInterval(() => { if (X.run) return; clearInterval(w); const ok = pick === st.a; X.b3 && X.b3.marks(true, st.a);
        document.querySelectorAll('.ro-pick .topt').forEach(b => b.classList.add(b.dataset.m === st.a ? 'ok' : b.dataset.m === pick ? 'ko' : 'x'));
        roboSay(ok ? L(`Exacte! Acaba a la <b>${st.a}</b>.`, `¡Exacto! Termina en la <b>${st.a}</b>.`) + (st.ex ? ' ' + tval(st.ex) : '') : L(`Acaba a la <b>${st.a}</b>. `, `Termina en la <b>${st.a}</b>. `) + (st.ex ? tval(st.ex) : ''), ok ? 'ok' : 'bad');
        ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko(); tContinue(); }, 150); };
    tFoot(L('Tria una lletra', 'Elige una letra'), check, false); return;
  }
  if (st.mode === 'spot') {
    X.onSpot = (id, b) => { if (TSS.ready) return; TSS.ready = true; const ok = !!(b && b.x), e = roboQ('rb' + id); e && e.classList.add(ok ? 'good' : 'err');
      if (!ok) { const g = Object.values(X.ids).find(v => v.b.x); if (g) roboQ('rb' + g.b._id).classList.add('good'); }
      roboSay(ok ? (st.yes ? tval(st.yes) : L('Molt bé!', '¡Muy bien!')) : (st.ex ? tval(st.ex) : L('No és aquest: és el marcat en verd.', 'No es este: es el marcado en verde.')), ok ? 'ok' : 'bad');
      ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko(); tContinue(); };
    tFoot(L('Toca un bloc del programa', 'Toca un bloque del programa'), () => { }, false); return;
  }
  if (st.mode === 'view') { X.onDone = () => tContinue(); X.onFail = () => tContinue(); tFoot(L('Continua', 'Continúa'), tNext, false); return; }
  X.onDone = () => {
    if (st.check) { const bad = st.check(X.prog); if (bad) { X.solved = false; roboSay(tval(bad), 'bad'); return; } }
    if (st.save) tFoot(L('Desa-ho i continua', 'Guárdalo y continúa'), () => { roboSaveProj(st); tNext(); }, true, `<button class="btn ghost" onclick="roboReset()">${L('El milloro', 'Lo mejoro')}</button>`);
    else cont();
  };
  X.onFail = () => { if (X.tries >= 2) roboHint(st); };
  tFoot(L('Continua', 'Continúa'), tNext, false, skip);
};
function roboHint(st) {
  if (roboQ('thint') || !(st.hint || st.sol)) return;
  const f = roboQ('tsf'), b = document.createElement('button'); if (!f) return;
  b.className = 'btn ghost'; b.id = 'thint'; b.textContent = L('Una pista', 'Una pista');
  b.onclick = () => {
    const X = roboStage;
    if (st.hint && !b.dataset.k) { b.dataset.k = 1; roboSay(`💡 ${tval(st.hint)}`); b.textContent = st.sol ? L('Mostra una solució', 'Muestra una solución') : ''; if (!st.sol) b.remove(); return; }
    if (st.sol) { X.prog.splice(0, X.prog.length, ...roboClone(st.sol)); if (X.pool) X.pool.splice(0); X.cur = { l: X.prog, i: X.prog.length }; X.sel = null; roboFresh(); roboDrawCode(); roboSay(L('Aquí tens una solució. Executa-la i mira què fa cada bloc.', 'Aquí tienes una solución. Ejecútala y mira qué hace cada bloque.')); b.remove(); }
  };
  f.insertBefore(b, f.firstChild);
}

/* ---------- Projectes al portafoli ---------- */
function roboSaveProj(st) {
  const t = TS_(), X = roboStage;
  t.port.push({ id: 'pj' + Date.now().toString(36), sid: roboTSSid(), kind: 'robo', t: st.name || (TSS && TSS.s.t), arena: typeof st.arena === 'string' ? st.arena : roboClone(st.arena), goals: st.goals || null, prog: roboClone(X.prog), d: today() });
  if (t.port.length > 60) t.port.shift();
  save(); toast(L('Projecte desat a «Projectes»!', '¡Proyecto guardado en «Proyectos»!'));
}
const roboTSSid = () => typeof TSS !== 'undefined' && TSS ? TSS.id : '';
function roboThumb(p) {
  try { const A = roboArena(p.arena), c = document.createElement('canvas'); c.width = 320; c.height = 220; c.style.width = '320px'; c.style.height = '220px';
    const S = roboSim(A, p.prog, {}).S; S.pen = true;
    document.body.appendChild(c); roboDraw2D(c, A, S, {}); const u = c.toDataURL('image/png'); c.remove(); return `<img src="${u}" alt="">`; } catch (e) { return ''; }
}
// el portafoli de tech.js només sap dibuixar mons d'en Bit: aquí s'afegeixen els projectes de robòtica (kind:'robo')
if (typeof techProjectes === 'function') {
  const tp0 = techProjectes, po0 = tPortOpen;
  techProjectes = function () {
    const t = TS_(); if (!t.port.some(p => p.kind === 'robo')) return tp0();
    const all = t.port.slice(); t.port = all.filter(p => p.kind !== 'robo'); tp0(); t.port = all;
    const robos = all.filter(p => p.kind === 'robo').reverse(), box = document.querySelector('.tports') || (() => { const d = document.createElement('div'); d.className = 'tports'; const e = document.querySelector('.tempty2'); if (e) e.replaceWith(d); else document.querySelector('.tmain').appendChild(d); return d; })();
    box.insertAdjacentHTML('afterbegin', robos.map(p => `<button class="tport ro-port" onclick="tPortOpen('${p.id}')"><span class="tpimg">${roboThumb(p)}</span><b>${tx(p.t)}</b><small>${typeof dayShort === 'function' ? dayShort(p.d) : p.d} · ${roboCount(p.prog)} ${L('blocs', 'bloques')}</small></button>`).join(''));
  };
  tPortOpen = function (id) {
    const p = TS_().port.find(x => x.id === id); if (!p || p.kind !== 'robo') return po0(id);
    VIEW = 'tport';
    app.innerHTML = `<div class="tsess"><div class="tstop"><button class="xbtn" onclick="go('projectes')" aria-label="${L('Tanca', 'Cierra')}">✕</button><b class="tsph">${tx(p.t)}</b><span></span></div>
      <div class="tsbody wide" id="tsbp"></div><div class="tsfoot"><button class="link" onclick="tPortDel('${p.id}')">${L('Esborra el projecte', 'Borra el proyecto')}</button></div></div>`;
    const X = roboMake({ arena: p.arena, goals: p.goals || undefined, prog: p.prog, mode: 'edit', pal: ROBO_PAL.all, conds: ['dist', 'line', 'light', 'lightc', 'var'] }); void X;
    roboMount(document.getElementById('tsbp'));
  };
}

/* ---------- Demostracions en directe a les targetes de teoria i a les presentacions ---------- */
const ROBO_DEMO = {};   // clau → { arena, prog, speed? }  (es defineixen a tech-c2.js)
function roboDemoHTML(k) { return `<div class="ro-demo" data-k="${k}"><div class="ro-dv"><canvas class="ro-2d"></canvas></div><div class="ro-dp"></div></div>`; }
function roboDemoMount(el, spec, o = {}) {
  const A = roboArena(spec.arena), prog = typeof spec.prog === 'string' ? roboP(spec.prog) : spec.prog, me = { A, alive: true };
  const view = el.querySelector('.ro-dv'), chips = el.querySelector('.ro-dp');
  const flat = []; const walk = (l, d) => l.forEach(b => { flat.push([b, d]); if (b.b) walk(b.b, d + 1); if (b.e) walk(b.e, d + 1); });
  walk(prog, 0);
  if (chips) chips.innerHTML = flat.map(([b, d], i) => `<span class="tdb c-${ROBO_CAT[b.k]}" data-i="${i}" style="margin-left:${d * 14}px"><span class="tbi">${roboIco(b)}</span><span>${roboLabel(b)}</span></span>`).join('');
  let R = roboRunner(A, prog, {}), b3 = null, pause = 0, lt = 0, acc = 0;
  view.style.aspectRatio = Math.max(1.1, Math.min(1.9, (A.w + 24) / (A.h + 34))).toFixed(3);
  const cv = view.querySelector('canvas');
  robo3dLoad().then(M => { if (!M || !me.alive || !el.isConnected) return; try { b3 = M.create(view, A, R.S, { floor: roboFloorCanvas(A), icons: ROBO_ICONS, sens: spec.sens !== false }); view.classList.add('on'); } catch (e) { } });
  const loop = ts => {
    if (!el.isConnected) { me.alive = false; return; }
    const dt = lt ? Math.min(.05, (ts - lt) / 1000) : 0; lt = ts;
    if (pause > 0) { pause -= dt; if (pause <= 0) { R = roboRunner(A, prog, {}); R.S.pen = !!spec.pen; b3 && b3.reset(A, R.S); } }
    else { acc += dt * (spec.speed || 1); let n = 0; while (acc >= ROBO_K.DT && n++ < 40) { acc -= ROBO_K.DT; if (roboTick(R) || R.S.t > (spec.t || 12)) { pause = 1.6; if (b3 && R.res && R.res.ok) b3.react('yay'); break; } } }
    R.S.pen = !!spec.pen;
    const i = flat.findIndex(([b]) => b === R.cur);
    if (chips) chips.querySelectorAll('.tdb').forEach((c, k) => { c.classList.toggle('now', k === i); });
    if (b3) b3.update(R.S); else roboDraw2D(cv, A, R.S, { sens: true });
    if (me.alive) requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
  me.restart = () => { R = roboRunner(A, prog, {}); acc = 0; pause = 0; b3 && b3.reset(A, R.S); };
  return me;
}
// les targetes de teoria es pinten amb innerHTML: quan apareix una demostració, es posa en marxa
if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined') {
  new MutationObserver(() => document.querySelectorAll('.ro-demo:not(.on)').forEach(el => { el.classList.add('on'); const sp = ROBO_DEMO[el.dataset.k]; if (sp) roboDemoMount(el, sp); })).observe(document.documentElement, { childList: true, subtree: true });
}
// per a present.js: una diapositiva amb una arena en directe (s.robo = {arena, prog})
function roboPresent(el, spec) { el.innerHTML = roboDemoHTML('_p'); return roboDemoMount(el.firstChild, spec); }

/* ---------- Animacions de teoria (TANI_ROBO) ----------
   Mateixes regles que TANI (tech-learn.js): SVG de 320 d'ample, classes .ta + ta-pop/ta-in/ta-fade/ta-draw amb --t,
   tot en bucle i amb l'estat final visible si l'aparell demana menys moviment. */
const roboA = (t, c = 'ta-pop') => `class="ta ${c}" style="--t:${t}s"`;
const roboSvg = (h, body, cls = '') => `<svg class="tani ${cls}" viewBox="0 0 320 ${h}" aria-hidden="true"><defs>
  <linearGradient id="roCh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF7A6E"/><stop offset="1" stop-color="#E2463B"/></linearGradient>
  <linearGradient id="roMt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F4F6FA"/><stop offset="1" stop-color="#AEB6C6"/></linearGradient>
  <radialGradient id="roGw"><stop offset="0" stop-color="#FFE68A" stop-opacity=".95"/><stop offset="1" stop-color="#FFE68A" stop-opacity="0"/></radialGradient>
  <radialGradient id="roIr"><stop offset="0" stop-color="#FF4D4D" stop-opacity=".8"/><stop offset="1" stop-color="#FF4D4D" stop-opacity="0"/></radialGradient>
  <filter id="roSh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#0B1838" flood-opacity=".25"/></filter></defs>${body}</svg>`;
// el robot vist de dalt (morro cap a la dreta); lc: color dels llums
function roboCarSVG(x, y, a = 0, s = 1, o = {}) {
  const lc = o.lc ? ROBO_COL[o.lc] : null, wc = o.spin ? 'ro-wheelf' : '';
  return `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})" ${o.cls ? `class="${o.cls}"` : ''}>
    ${lc ? `<circle cx="34" cy="-15" r="16" fill="${lc}" opacity=".35"/><circle cx="34" cy="15" r="16" fill="${lc}" opacity=".35"/>` : ''}
    <rect x="-22" y="-23" width="22" height="9" rx="3.5" fill="#22252E"/><rect x="-22" y="14" width="22" height="9" rx="3.5" fill="#22252E"/>
    ${o.wheelsAnim ? `<path d="M-19 -18.5h16M-19 18.5h16" stroke="#FFC531" stroke-width="2" stroke-dasharray="3 3" class="ro-dashw"/>` : ''}
    <rect x="-18" y="-17" width="46" height="34" rx="11" fill="url(#roCh)" filter="url(#roSh)"/><rect x="-14" y="-13" width="37" height="26" rx="8" fill="#FBFBFD"/>
    <rect x="-17" y="-11" width="8" height="22" rx="2" fill="#1D2333"/>${[0, 1, 2, 3, 4].map(i => `<rect x="-15.5" y="${-9 + i * 4}" width="5" height="2.4" rx=".8" fill="${o.mat && o.mat[i] ? '#FF4D4D' : '#3A2F38'}"/>`).join('')}
    <rect x="24" y="-12" width="3" height="24" rx="1" fill="#2453C9"/><circle cx="29" cy="-6.5" r="4.6" fill="url(#roMt)" stroke="#8D96A8"/><circle cx="29" cy="6.5" r="4.6" fill="url(#roMt)" stroke="#8D96A8"/>
    <circle cx="29.6" cy="-6.5" r="2" fill="#15171E"/><circle cx="29.6" cy="6.5" r="2" fill="#15171E"/>
    <circle cx="26" cy="-14" r="2.6" fill="${lc || '#E3E6EE'}"/><circle cx="26" cy="14" r="2.6" fill="${lc || '#E3E6EE'}"/>${o.extra || ''}</g>`;
}
// el robot vist de costat (morro cap a la dreta)
function roboSideSVG(x, y, s = 1, o = {}) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="6" cy="1" rx="42" ry="5" fill="#0B1838" opacity=".14"/>
    <rect x="-30" y="-24" width="62" height="13" rx="6.5" fill="url(#roCh)"/><rect x="-26" y="-28" width="52" height="5" rx="2.5" fill="#FBFBFD"/>
    <g transform="rotate(-24 -20 -28)"><rect x="-24" y="-60" width="6" height="32" rx="2" fill="#1D2333"/>${[0, 1, 2, 3, 4].map(i => `<rect x="-22.6" y="${-56 + i * 5.6}" width="3.2" height="3.2" rx=".8" fill="${o.mat && o.mat[i] ? '#FF4D4D' : '#3A2F38'}"/>`).join('')}</g>
    <rect x="28" y="-42" width="4" height="20" rx="1.5" fill="#2453C9"/><rect x="31" y="-40" width="9" height="7" rx="2" fill="url(#roMt)"/><rect x="31" y="-31" width="9" height="7" rx="2" fill="url(#roMt)"/>
    <g class="${o.spin ? 'ro-wheel' : ''}"><circle cx="-4" cy="-11" r="11" fill="#22252E"/><circle cx="-4" cy="-11" r="6" fill="#FFC531"/><path d="M-4 -17v12M-10 -11h12" stroke="#22252E" stroke-width="2.4"/></g>
    <circle cx="26" cy="-3" r="3" fill="url(#roMt)"/><rect x="18" y="-12" width="8" height="4" rx="1" fill="#15171E"/>${o.ir ? `<path d="M22 -8l-3 8M22 -8l3 8" stroke="#FF4D4D" stroke-width="1.6" stroke-dasharray="2 2"/>` : ''}
    ${o.lc ? `<circle cx="33" cy="-15" r="3.2" fill="${ROBO_COL[o.lc]}"/><circle cx="44" cy="-15" r="11" fill="${ROBO_COL[o.lc]}" opacity=".3"/>` : `<circle cx="33" cy="-15" r="3" fill="#E3E6EE"/>`}</g>`;
}
const roboTxt = (x, y, t, cls = '', ex = '') => `<text x="${x}" y="${y}" text-anchor="middle" class="tat ${cls}" ${ex}>${t}</text>`;
const roboPill = (x, y, w, t, col, at, ex = '') => `<g ${roboA(at, 'ta-in')}><rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="13" fill="${col}"/>${roboTxt(x, y + 5, t, 'w s', ex)}</g>`;
const TANI_ROBO = {
  // sentir → pensar → actuar (el cicle de qualsevol robot)
  rSense() {
    const node = (x, y, col, ico, t, at) => `<g ${roboA(at)}><circle cx="${x}" cy="${y}" r="34" fill="${col}" filter="url(#roSh)"/>${ico}${roboTxt(x, y + 52, t, 'b')}</g>`;
    const eye = `<g transform="translate(60 78)"><ellipse rx="18" ry="11" fill="#fff"/><circle r="7" fill="#14204A"/><circle cx="2.5" cy="-2.5" r="2.2" fill="#fff"/></g>`;
    const brain = `<g transform="translate(160 78)"><rect x="-18" y="-18" width="36" height="36" rx="6" fill="#1D2333"/>${[0, 1, 2].map(i => [0, 1, 2].map(j => `<rect x="${-12 + i * 9}" y="${-12 + j * 9}" width="5" height="5" rx="1" fill="${(i + j) % 2 ? '#FF4D4D' : '#3A2F38'}" class="${(i + j) % 2 ? 'ro-blink' : ''}"/>`).join('')).join('')}</g>`;
    const wheel = `<g transform="translate(260 78)"><g class="ro-wheel"><circle r="17" fill="#22252E"/><circle r="9" fill="#FFC531"/><path d="M0 -9v18M-9 0h18" stroke="#22252E" stroke-width="3"/></g></g>`;
    return roboSvg(200, `${node(60, 78, '#22D3EE', eye, L('Sentir', 'Sentir'), .2)}${node(160, 78, '#8B5CF6', brain, L('Pensar', 'Pensar'), 1)}${node(260, 78, '#EF5B4F', wheel, L('Actuar', 'Actuar'), 1.8)}
      <g ${roboA(.7, 'ta-fade')}><path d="M98 78h22" stroke="#9FB4F2" stroke-width="5" stroke-linecap="round"/><path d="M116 70l8 8-8 8" fill="none" stroke="#9FB4F2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${roboA(1.5, 'ta-fade')}><path d="M198 78h22" stroke="#9FB4F2" stroke-width="5" stroke-linecap="round"/><path d="M216 70l8 8-8 8" fill="none" stroke="#9FB4F2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${roboA(2.4, 'ta-fade')}><path d="M260 150q0 34 -100 34t-100 -34" fill="none" stroke="#9FB4F2" stroke-width="4" stroke-dasharray="6 6" class="ta-dash"/><path d="M52 154l8 -8 8 8" fill="none" stroke="#9FB4F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>${roboTxt(160, 176, L('i torna a començar', 'y vuelve a empezar'), 's')}</g>`);
  },
  // les parts del robot de l'aula
  rParts() {
    const tag = (x, y, lx, ly, t, col, at) => `<g ${roboA(at, 'ta-in')}><path d="M${x} ${y}L${lx} ${ly}" stroke="${col}" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="4" fill="${col}"/><rect x="${lx - (lx > 160 ? 0 : 104)}" y="${ly - 12}" width="104" height="24" rx="12" fill="${col}"/>${roboTxt(lx + (lx > 160 ? 52 : -52), ly + 5, t, 'w s')}</g>`;
    return roboSvg(214, `${roboCarSVG(150, 108, 0, 2.3)}
      ${tag(214, 93, 228, 28, L('Ultrasons', 'Ultrasonidos'), '#22D3EE', .3)}${tag(216, 140, 228, 190, L('Llums RGB', 'Luces RGB'), '#E5489A', .9)}
      ${tag(113, 108, 100, 30, 'micro:bit', '#8B5CF6', 1.5)}${tag(118, 155, 100, 190, L('Motors i rodes', 'Motores y ruedas'), '#EF5B4F', 2.1)}
      <g ${roboA(2.7, 'ta-fade')}><path d="M220 128h30" stroke="#17171F" stroke-width="2" stroke-dasharray="2 2"/>${roboTxt(286, 132, L('línia (a sota)', 'línea (debajo)'), 's')}</g>`);
  },
  // el micro:bit: el cervell, la pantalla i els botons
  rMicrobit() {
    const heart = '01010 11111 11111 01110 00100'.split(' ');
    return roboSvg(206, `<g ${roboA(.2)}><rect x="70" y="18" width="180" height="150" rx="16" fill="#1D2333" filter="url(#roSh)"/><rect x="70" y="150" width="180" height="18" fill="#C9A24B"/>${[...Array(11).keys()].map(i => `<rect x="${78 + i * 15.5}" y="152" width="9" height="14" rx="2" fill="#E8C66A"/>`).join('')}
      <circle cx="96" cy="80" r="11" fill="#2A2C36" stroke="#3E4352" stroke-width="3"/>${roboTxt(96, 112, 'A', 'w s')}<circle cx="224" cy="80" r="11" fill="#2A2C36" stroke="#3E4352" stroke-width="3"/>${roboTxt(224, 112, 'B', 'w s')}
      ${heart.map((r, y) => [...r].map((c, x) => `<rect x="${128 + x * 13}" y="${44 + y * 13}" width="8" height="8" rx="2" fill="${c === '1' ? '#FF3B30' : '#3A2F38'}" ${c === '1' ? `class="ta ta-fade" style="--t:${(.5 + y * .15).toFixed(2)}s"` : ''}/>`).join('')).join('')}</g>
      ${roboPill(50, 190, 92, L('25 LEDs', '25 LEDs'), '#EF5B4F', 1.4)}${roboPill(160, 190, 104, L('2 botons', '2 botones'), '#2F5BEA', 1.9)}${roboPill(272, 190, 92, L('el cervell', 'el cerebro'), '#8B5CF6', 2.4)}`);
  },
  // dues rodes, dos motors: iguals → recte; diferents → corba; al revés → gira sobre si mateix
  rDiff() {
    const lane = (y, a, label, path, at) => `<g ${roboA(at, 'ta-in')}><rect x="8" y="${y - 30}" width="304" height="62" rx="14" fill="#F5F8FF" stroke="#DCE4FA" stroke-width="2"/>
      <path d="${path}" fill="none" stroke="#C9D6FB" stroke-width="3" stroke-dasharray="5 5"/>${roboTxt(70, y + 5, label, 's')}</g>`;
    return roboSvg(214, `${lane(36, 0, L('100 · 100 → recte', '100 · 100 → recto'), 'M150 36H300', .1)}${lane(106, 0, L('60 · 140 → corba', '60 · 140 → curva'), 'M150 116Q250 116 280 80', .9)}${lane(176, 0, L('−100 · 100 → gira', '−100 · 100 → gira'), 'M200 176m-22 0a22 22 0 1 0 44 0a22 22 0 1 0 -44 0', 1.7)}
      <g class="ta ro-move ro-a1" style="--t:.3s">${roboCarSVG(150, 36, 0, .7)}</g><g class="ta ro-move ro-a2" style="--t:1.1s">${roboCarSVG(150, 116, 0, .7)}</g><g class="ro-spin" style="transform-origin:200px 176px;transform-box:view-box">${roboCarSVG(200, 176, 0, .7)}</g>
      <style>.tani .ro-a1{animation-name:roa1}.tani .ro-a2{animation-name:roa2}@keyframes roa1{0%,10%{transform:none}70%,100%{transform:translateX(120px)}}@keyframes roa2{0%,10%{transform:none}70%,100%{transform:translate(110px,-26px) rotate(-30deg)}}</style>`);
  },
  // la velocitat: un número de 0 a 255
  rSpeed() {
    const row = (y, v, at) => `<g ${roboA(at, 'ta-in')}><text x="16" y="${y + 6}" class="tat b">${v}</text><rect x="62" y="${y - 9}" width="160" height="18" rx="9" fill="#E8EEFF"/><rect x="62" y="${y - 9}" width="${160 * v / 255}" height="18" rx="9" fill="${v < 20 ? '#B7C1DA' : '#2FBF71'}"/>
      <g transform="translate(262 ${y})"><g style="animation-duration:${v < 20 ? 0 : (60 / v).toFixed(2)}s" class="${v < 20 ? '' : 'ro-wheel'}"><circle r="16" fill="#22252E"/><circle r="8" fill="#FFC531"/><path d="M0 -8v16M-8 0h16" stroke="#22252E" stroke-width="3"/></g></g>${v < 20 ? `<text x="296" y="${y + 5}" class="tat s">${L('quiet', 'quieto')}</text>` : ''}</g>`;
    return roboSvg(214, `${row(30, 10, .2)}${row(78, 60, .7)}${row(126, 150, 1.2)}${row(174, 255, 1.7)}<text x="142" y="208" text-anchor="middle" class="tat s" ${roboA(2.3, 'ta-fade')}>${L('0 = parat · 255 = màxim', '0 = parado · 255 = máximo')}</text>`);
  },
  // velocitat × temps = distància
  rVxt() {
    const ticks = [...Array(11).keys()].map(i => `<path d="M${30 + i * 26} 150v${i % 5 ? 8 : 14}" stroke="#14204A" stroke-width="2"/>${i % 5 === 0 ? `<text x="${30 + i * 26}" y="180" text-anchor="middle" class="tat s">${i * 10}</text>` : ''}`).join('');
    return roboSvg(214, `<rect x="20" y="140" width="282" height="24" rx="6" fill="#FFE38A"/>${ticks}<text x="306" y="180" class="tat s">cm</text>
      <g class="ta ro-move ro-v1" style="--t:.3s">${roboSideSVG(42, 132, .8, { spin: true })}</g>
      <g ${roboA(.2, 'ta-in')}><rect x="40" y="16" width="240" height="44" rx="14" fill="#1B2B6B"/>${roboTxt(160, 45, L('100 durant 2 s → 20 cm', '100 durante 2 s → 20 cm'), 'w b')}</g>
      <g ${roboA(2.6, 'ta-pop')}><path d="M42 90h52" stroke="#2FBF71" stroke-width="5" stroke-linecap="round"/><path d="M88 82l8 8-8 8" fill="none" stroke="#2FBF71" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>${roboTxt(68, 80, '20 cm', 'b')}</g>
      <style>.tani .ro-v1{animation-name:rov1}@keyframes rov1{0%,8%{transform:none}50%,100%{transform:translateX(52px)}}</style>`);
  },
  // girar sobre si mateix: un quart de volta = mig segon a 100
  rTurn() {
    const marks = [0, 90, 180, 270].map(a => `<path d="M160 104L${160 + Math.cos(roboRad(a - 90)) * 80} ${104 + Math.sin(roboRad(a - 90)) * 80}" stroke="#DCE4FA" stroke-width="2" stroke-dasharray="4 4"/>`).join('');
    return roboSvg(214, `${marks}<circle cx="160" cy="104" r="62" fill="none" stroke="#E8EEFF" stroke-width="16"/><path d="M160 42a62 62 0 0 1 62 62" fill="none" stroke="#2FBF71" stroke-width="16" stroke-linecap="round" class="ta ta-draw" pathLength="1" style="--t:.4s"/>
      <g class="ro-q4" style="transform-origin:160px 104px;transform-box:view-box">${roboCarSVG(160, 104, -90, .9)}</g>
      ${roboPill(270, 40, 84, '90°', '#2FBF71', 1.2)}${roboPill(64, 190, 110, L('esquerra −100', 'izquierda −100'), '#FF7A1A', 1.6)}${roboPill(256, 190, 100, L('dreta +100', 'derecha +100'), '#2F5BEA', 1.9)}${roboTxt(160, 196, '0,5 s', 'b', roboA(2.2, 'ta-fade'))}
      <style>.tani .ro-q4{animation:roq4 5.5s ease-in-out infinite}@keyframes roq4{0%,8%{transform:none}38%,100%{transform:rotate(90deg)}}</style>`);
  },
  // girar: sobre si mateix o sobre una roda
  rPivot() {
    return roboSvg(200, `<g ${roboA(.2, 'ta-in')}><rect x="8" y="8" width="148" height="184" rx="16" fill="#F5F8FF" stroke="#DCE4FA" stroke-width="2"/>${roboTxt(82, 32, L('Sobre si mateix', 'Sobre sí mismo'), 'b')}<circle cx="82" cy="110" r="4" fill="#EF5B4F"/>
      <g class="ro-spin" style="transform-origin:82px 110px;transform-box:view-box;animation-duration:3s">${roboCarSVG(82, 110, -90, .8)}</g>${roboTxt(82, 180, '+100 · −100', 's')}</g>
      <g ${roboA(.9, 'ta-in')}><rect x="164" y="8" width="148" height="184" rx="16" fill="#F5F8FF" stroke="#DCE4FA" stroke-width="2"/>${roboTxt(238, 32, L('Sobre una roda', 'Sobre una rueda'), 'b')}<circle cx="223" cy="110" r="4" fill="#EF5B4F"/>
      <g class="ro-spin" style="transform-origin:223px 110px;transform-box:view-box;animation-duration:6s">${roboCarSVG(238, 110, -90, .8)}</g>${roboTxt(238, 180, '100 · 0', 's')}</g>`);
  },
  // polígons: el robot gira l'angle de fora
  rPoly() {
    const shp = (cx, n, col, at, lab) => { const r = 36, pts = [...Array(n).keys()].map(i => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + r * Math.cos(a), 92 + r * Math.sin(a)]; });
      return `<g ${roboA(at, 'ta-in')}><path d="M${pts.map(p => p.map(v => v.toFixed(1)).join(' ')).join('L')}Z" fill="${col}22" stroke="${col}" stroke-width="5" stroke-linejoin="round" class="ro-path" pathLength="1"/>${roboTxt(cx, 158, lab, 'b')}${roboTxt(cx, 180, L(`${n} girs de ${360 / n}°`, `${n} giros de ${360 / n}°`), 's')}</g>`; };
    return roboSvg(200, `${shp(56, 3, '#EF5B4F', .2, L('Triangle', 'Triángulo'))}${shp(160, 4, '#2F5BEA', .9, L('Quadrat', 'Cuadrado'))}${shp(264, 6, '#2FBF71', 1.6, L('Hexàgon', 'Hexágono'))}
      <g ${roboA(2.4, 'ta-fade')}><rect x="70" y="4" width="180" height="26" rx="13" fill="#1B2B6B"/>${roboTxt(160, 22, L('360° ÷ costats', '360° ÷ lados'), 'w s')}</g>`);
  },
  // corbes i cercles: rodes a velocitats diferents
  rArc() {
    return roboSvg(206, `<circle cx="160" cy="104" r="70" fill="none" stroke="#E8EEFF" stroke-width="24"/><circle cx="160" cy="104" r="70" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-dasharray="1" pathLength="1" class="ro-path"/>
      <g class="ro-spin" style="transform-origin:160px 104px;transform-box:view-box;animation-duration:5.5s">${roboCarSVG(160, 34, 0, .75)}</g>
      ${roboPill(160, 104, 132, L('esquerre 150 · dret 75', 'izquierdo 150 · derecho 75'), '#1B2B6B', .4)}
      <g ${roboA(1.4, 'ta-fade')}>${roboTxt(52, 192, L('roda de fora: més ràpida', 'rueda de fuera: más rápida'), 's')}</g><g ${roboA(2, 'ta-fade')}>${roboTxt(262, 192, L('més diferència: cercle més petit', 'más diferencia: círculo más pequeño'), 's')}</g>`);
  },
  // l'eco dels ultrasons (com un ratpenat)
  rEcho() {
    const arcs = (x, cls, dir) => [0, 1, 2].map(i => `<path d="M${x} 72q${dir * 14} 30 0 60" transform="translate(${dir * i * 18} 0)" fill="none" stroke="${cls === 'ro-wave' ? '#22D3EE' : '#FFC531'}" stroke-width="4" stroke-linecap="round" class="${cls}" style="--t:${i * .25}s;transform-origin:${x}px 102px"/>`).join('');
    return roboSvg(214, `${roboSideSVG(56, 140, 1.15)}<rect x="262" y="34" width="34" height="128" rx="8" fill="#B79CFF" filter="url(#roSh)"/>
      ${arcs(110, 'ro-wave', 1)}${arcs(244, 'ro-echo', -1)}
      <g ${roboA(.6, 'ta-in')}><path d="M106 182H258" stroke="#14204A" stroke-width="2.5"/><path d="M106 176v12M258 176v12" stroke="#14204A" stroke-width="2.5"/>${roboTxt(182, 204, L('distància = temps de l’eco', 'distancia = tiempo del eco'), 's')}</g>
      ${roboPill(108, 26, 124, L('xiulet anada', 'pitido ida'), '#16B8D8', .2)}${roboPill(222, 26, 112, L('eco tornada', 'eco vuelta'), '#E8A400', 1)}`);
  },
  // llindar: si la distància és menor que 15 cm, para
  rThresh() {
    return roboSvg(214, `<rect x="0" y="150" width="320" height="10" rx="5" fill="#E3E9FA"/><rect x="276" y="40" width="30" height="112" rx="6" fill="#7AA7FF" filter="url(#roSh)"/>
      <path d="M206 40v112" stroke="#EF5B4F" stroke-width="3" stroke-dasharray="6 5"/>${roboTxt(242, 34, '15 cm', 'b')}
      <g class="ta ro-move ro-t1" style="--t:.2s">${roboSideSVG(40, 150, 1)}</g>
      <g ${roboA(.2, 'ta-in')}><rect x="14" y="10" width="160" height="62" rx="14" fill="#1B2B6B"/>${roboTxt(94, 34, L('distància &lt; 15?', '¿distancia &lt; 15?'), 'w s')}</g>
      <g ${roboA(2.6, 'ta-pop')}><rect x="40" y="46" width="108" height="22" rx="11" fill="#EF5B4F"/>${roboTxt(94, 62, L('SÍ → para', 'SÍ → para'), 'w s')}</g>
      <style>.tani .ro-t1{animation-name:rot1}@keyframes rot1{0%,6%{transform:none}46%,100%{transform:translateX(124px)}}</style>`);
  },
  // decidir: si… si no…
  rIfElse() {
    return roboSvg(214, `<g ${roboA(.2)}><path d="M160 14l56 36-56 36-56-36z" fill="#F2B21B"/>${roboTxt(160, 55, L('obstacle?', '¿obstáculo?'), 'b')}</g>
      <g ${roboA(.8, 'ta-fade')}><path d="M112 66L64 118M208 66l48 52" stroke="#9FB4F2" stroke-width="5" stroke-linecap="round"/>${roboTxt(70, 86, L('sí', 'sí'), 'b')}${roboTxt(252, 86, 'no', 'b')}</g>
      <g ${roboA(1.3, 'ta-in')}><rect x="10" y="122" width="132" height="76" rx="16" fill="#FFF1E4" stroke="#FFB35C" stroke-width="2"/>${roboCarSVG(52, 160, -60, .6)}<path d="M84 148q14 -16 30 -6" fill="none" stroke="#FF7A1A" stroke-width="4" stroke-linecap="round"/>${roboTxt(102, 186, L('gira', 'gira'), 'b')}</g>
      <g ${roboA(1.8, 'ta-in')}><rect x="178" y="122" width="132" height="76" rx="16" fill="#E7F7EE" stroke="#8FD6AE" stroke-width="2"/>${roboCarSVG(214, 160, 0, .6)}<path d="M244 160h40" stroke="#2FBF71" stroke-width="4" stroke-linecap="round"/><path d="M278 153l8 7-8 7" fill="none" stroke="#2FBF71" stroke-width="4" stroke-linecap="round"/>${roboTxt(270, 188, L('endavant', 'adelante'), 's')}</g>`);
  },
  // el sensor de línia: el blanc torna la llum, el negre se la queda
  rIr() {
    return roboSvg(214, `<rect x="10" y="150" width="140" height="40" rx="6" fill="#FFFFFF" stroke="#DCE4FA" stroke-width="2"/><rect x="170" y="150" width="140" height="40" rx="6" fill="#17171F"/>
      ${[80, 240].map((x, k) => `<g><rect x="${x - 18}" y="40" width="36" height="20" rx="5" fill="#1D2333"/><circle cx="${x - 8}" cy="60" r="5" fill="#FF4D4D"/><circle cx="${x + 8}" cy="60" r="5" fill="#2A2C36"/>
        <path d="M${x - 8} 66L${x - 8} 148" stroke="#FF4D4D" stroke-width="4" stroke-dasharray="6 6" class="ta-dash"/>${k ? '' : `<path d="M${x + 8} 148L${x + 8} 66" stroke="#FF4D4D" stroke-width="4" stroke-dasharray="6 6" class="ta-dash"/>`}</g>`).join('')}
      ${roboPill(80, 116, 120, L('torna → 0', 'vuelve → 0'), '#2F5BEA', .6)}${roboPill(240, 116, 132, L('no torna → 1', 'no vuelve → 1'), '#EF5B4F', 1.4)}
      ${roboTxt(80, 30, L('blanc', 'blanco'), 'b')}${roboTxt(240, 30, L('negre', 'negro'), 'b')}${roboTxt(160, 208, L('llum infraroja (no la veiem)', 'luz infrarroja (no la vemos)'), 's', roboA(2, 'ta-fade'))}`);
  },
  // seguir la vora: un sol sensor, zig-zag
  rZig() {
    return roboSvg(206, `<path d="M10 104H310" stroke="#17171F" stroke-width="26"/><path d="M14 104Q44 80 74 104T134 104T194 104T254 104T314 104" fill="none" stroke="#2FBF71" stroke-width="4" stroke-dasharray="1" pathLength="1" class="ro-path"/>
      ${roboPill(86, 30, 150, L('veu negre → dreta', 've negro → derecha'), '#1B2B6B', .4)}${roboPill(236, 30, 150, L('veu blanc → esquerra', 've blanco → izquierda'), '#2F5BEA', 1.2)}
      <g class="ro-zig">${roboCarSVG(0, 0, 0, .55)}</g><style>.tani .ro-zig{offset-path:path('M14 104Q44 80 74 104T134 104T194 104T254 104T314 104');animation:rozig 5.5s linear infinite}@keyframes rozig{0%{offset-distance:0%}100%{offset-distance:100%}}</style>
      ${roboTxt(160, 170, L('el robot segueix la vora de la línia', 'el robot sigue el borde de la línea'), 's', roboA(2, 'ta-fade'))}`);
  },
  // tres sensors: què veu cadascun
  rThree() {
    const row = (y, st, t, at) => `<g ${roboA(at, 'ta-in')}>${['L', 'M', 'R'].map((p, i) => `<rect x="${24 + i * 34}" y="${y - 14}" width="28" height="28" rx="7" fill="${st[i] ? '#17171F' : '#fff'}" stroke="#C9D6FB" stroke-width="2"/>${roboTxt(38 + i * 34, y + 5, p, st[i] ? 'w s' : 's')}`).join('')}<path d="M134 ${y}h22" stroke="#9FB4F2" stroke-width="4" stroke-linecap="round"/>${roboTxt(232, y + 5, t, 'b')}</g>`;
    return roboSvg(214, `${row(30, [0, 1, 0], L('endavant', 'adelante'), .2)}${row(78, [1, 0, 0], L("corregeix a l'esquerra", 'corrige a la izquierda'), .8)}${row(126, [0, 0, 1], L('corregeix a la dreta', 'corrige a la derecha'), 1.4)}${row(174, [1, 1, 1], L('cruïlla!', '¡cruce!'), 2)}`);
  },
  // una cruïlla: els sensors de les vores veuen negre alhora
  rCross() {
    return roboSvg(214, `<path d="M20 104H300M160 10V200" stroke="#17171F" stroke-width="24"/><g class="ta ro-move ro-c1" style="--t:.2s">${roboCarSVG(36, 104, 0, .8, { extra: '<circle cx="11" cy="-12" r="3" fill="#FF3B30" class="ro-blink"/><circle cx="11" cy="12" r="3" fill="#FF3B30" class="ro-blink"/>' })}</g>
      ${roboPill(250, 40, 120, L('L i R: negre', 'L y R: negro'), '#EF5B4F', 2.4)}${roboPill(250, 172, 120, L('comptador +1', 'contador +1'), '#8B5CF6', 2.9)}
      <style>.tani .ro-c1{animation-name:roc1}@keyframes roc1{0%,6%{transform:none}40%,100%{transform:translateX(96px)}}</style>`);
  },
  // sensors de llum: el robot va cap on hi ha més llum
  rLight() {
    return roboSvg(214, `<rect width="320" height="214" rx="18" fill="#141D45"/><circle cx="252" cy="58" r="64" fill="url(#roGw)" class="ro-pulse"/><circle cx="252" cy="58" r="14" fill="#FFF4C8"/>
      <g class="ta ro-move ro-l1" style="--t:.2s">${roboCarSVG(70, 150, -25, .9, { lc: 'w' })}</g>
      ${roboPill(92, 30, 150, L('esquerra 40 · dreta 120', 'izquierda 40 · derecha 120'), '#2F5BEA', .4)}${roboTxt(110, 200, L('més llum a la dreta → gira a la dreta', 'más luz a la derecha → gira a la derecha'), 'w s', roboA(1.6, 'ta-fade'))}
      <style>.tani .ro-l1{animation-name:rol1}@keyframes rol1{0%,6%{transform:none}60%,100%{transform:translate(120px,-62px) rotate(-10deg)}}</style>`);
  },
  // els llums RGB: vermell, verd i blau barrejats
  rRgb() {
    return roboSvg(210, `<rect width="320" height="210" rx="18" fill="#141D45"/><g><circle cx="128" cy="86" r="52" fill="#FF2D2D" style="mix-blend-mode:screen" ${roboA(.2)}/><circle cx="192" cy="86" r="52" fill="#2DFF5A" style="mix-blend-mode:screen" ${roboA(.7)}/><circle cx="160" cy="138" r="52" fill="#2D6BFF" style="mix-blend-mode:screen" ${roboA(1.2)}/></g>
      ${roboPill(54, 30, 84, L('vermell', 'rojo'), '#E2463B', .3)}${roboPill(266, 30, 84, L('verd', 'verde'), '#1FA463', .8)}${roboPill(160, 196, 84, L('blau', 'azul'), '#2D6BFF', 1.3)}${roboTxt(160, 112, L('blanc', 'blanco'), 'b', roboA(1.8, 'ta-fade'))}`);
  },
  // el brunzidor: cada nota és una vibració més ràpida o més lenta
  rNotes() {
    const ks = Object.entries(ROBO_NOTES);
    return roboSvg(206, `${ks.map(([n, f], i) => `<g ${roboA(.2 + i * .25, 'ta-in')}><rect x="${14 + i * 37}" y="${150 - (f - 230) * .38}" width="30" height="${(f - 230) * .38 + 30}" rx="8" fill="${['#EF5A5A', '#F08A24', '#F2B21B', '#3CC47C', '#14A3B8', '#2F5BEA', '#8B5CF6', '#E5489A'][i]}"/>${roboTxt(29 + i * 37, 198, n, 's')}</g>`).join('')}
      <g ${roboA(2.4, 'ta-fade')}>${roboTxt(160, 22, L('més vibracions per segon → més aguda', 'más vibraciones por segundo → más aguda'), 's')}</g>`);
  },
  // una variable: una capsa amb nom que guarda un número
  rVar() {
    return roboSvg(214, `<g ${roboA(.2)}><path d="M90 90h140v90a10 10 0 0 1 -10 10H100a10 10 0 0 1 -10 -10z" fill="#B79CFF"/><path d="M80 70h160l-10 22H90z" fill="#8B5CF6"/>${roboTxt(160, 86, L('velocitat', 'velocidad'), 'w b')}</g>
      <g class="ro-vv"><text x="160" y="152" text-anchor="middle" class="tat" style="font-size:44px;font-weight:900;fill:#fff">100</text></g>
      ${roboPill(60, 30, 104, L('Posa a 100', 'Pon a 100'), '#8B5CF6', .5)}${roboPill(260, 30, 104, L('Suma 50', 'Suma 50'), '#6436D0', 1.8)}
      <g ${roboA(2, 'ta-pop')}><text x="268" y="150" class="tat" style="font-size:22px;font-weight:900;fill:#6436D0">→ 150</text></g>`);
  },
  // control proporcional: com més lluny, més de pressa
  rProp() {
    return roboSvg(214, `<path d="M40 180H300M40 180V20" stroke="#14204A" stroke-width="3"/>${roboTxt(170, 206, L('distància (cm)', 'distancia (cm)'), 's')}<text x="22" y="100" class="tat s" transform="rotate(-90 22 100)" text-anchor="middle">${L('velocitat', 'velocidad')}</text>
      <path d="M40 180L80 180L280 30" fill="none" stroke="#2F5BEA" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" class="ta ta-draw" pathLength="1" style="--t:.3s"/>
      <circle r="8" fill="#EF5B4F" class="ro-pp"/><style>.tani .ro-pp{offset-path:path('M280 30L80 180L40 180');animation:ropp 5.5s ease-in-out infinite}@keyframes ropp{0%,20%{offset-distance:0%}80%,100%{offset-distance:84%}}</style>
      ${roboPill(80, 196 - 34, 70, '10 cm', '#EF5B4F', 1.5)}${roboPill(214, 40, 168, L('(distància − 10) × 4', '(distancia − 10) × 4'), '#1B2B6B', 2.1)}`);
  },
  // segueix el líder: manté la distància
  rFollow() {
    return roboSvg(190, `<rect x="0" y="120" width="320" height="10" rx="5" fill="#E3E9FA"/><g class="ro-fl">${roboSideSVG(220, 120, .9)}</g><g class="ro-fl2">${roboSideSVG(110, 120, .9, { spin: true })}</g>
      <path d="M150 70h50" stroke="#22D3EE" stroke-width="4" stroke-dasharray="5 4" class="ta-dash"/>${roboPill(175, 40, 90, '20 cm', '#16B8D8', .3)}
      <style>.tani .ro-fl,.tani .ro-fl2{animation:rofl 5s ease-in-out infinite}.tani .ro-fl2{animation-delay:.35s}@keyframes rofl{0%,100%{transform:translateX(-50px)}50%{transform:translateX(30px)}}</style>
      ${roboTxt(160, 166, L('si s’allunya, accelera · si s’acosta, frena', 'si se aleja, acelera · si se acerca, frena'), 's', roboA(1.2, 'ta-fade'))}`);
  },
  // l'aspiradora: rebotar en angles diferents cobreix més terra
  rVacuum() {
    return roboSvg(214, `<rect x="20" y="14" width="280" height="186" rx="14" fill="#F7F5EF" stroke="#B9C4E6" stroke-width="4"/>
      <path d="M50 170L150 30L290 110L200 190L30 90L130 24L270 180" fill="none" stroke="#2FBF71" stroke-width="12" stroke-linejoin="round" opacity=".35" class="ro-path" pathLength="1"/>
      <path d="M50 170L150 30L290 110L200 190L30 90L130 24L270 180" fill="none" stroke="#2FBF71" stroke-width="3" stroke-linejoin="round" class="ro-path" pathLength="1"/>
      ${roboPill(160, 110, 170, L('xoca? recula i gira', '¿choca? retrocede y gira'), '#1B2B6B', 1.2)}`);
  },
  // sumo: troba la caixa i empeny-la; si veus la vora negra, recula
  rSumo() {
    return roboSvg(214, `<circle cx="160" cy="107" r="96" fill="#fff" stroke="#17171F" stroke-width="12"/><g class="ro-sm">${roboCarSVG(110, 107, 0, .9)}</g><g class="ro-sb"><rect x="172" y="88" width="38" height="38" rx="5" fill="#D6A15E" stroke="#7A4A1E" stroke-width="3"/></g>
      ${roboPill(160, 24, 150, L('veu la caixa? endavant!', '¿ve la caja? ¡adelante!'), '#EF5B4F', .4)}${roboPill(160, 190, 140, L('vora negra? enrere', '¿borde negro? atrás'), '#1B2B6B', 1.4)}
      <style>.tani .ro-sm,.tani .ro-sb{animation:rosm 5.5s ease-in-out infinite}@keyframes rosm{0%,20%{transform:none}60%,100%{transform:translateX(60px)}}</style>`);
  },
  // simulador i robot de veritat
  rReal() {
    return roboSvg(214, `<g ${roboA(.2, 'ta-in')}><rect x="10" y="20" width="136" height="100" rx="12" fill="#1B2B6B"/><rect x="18" y="28" width="120" height="76" rx="6" fill="#E4ECFF"/>${roboCarSVG(64, 66, 0, .7)}<path d="M84 66h40" stroke="#2FBF71" stroke-width="3" stroke-dasharray="4 3"/><rect x="58" y="120" width="40" height="8" fill="#1B2B6B"/>${roboTxt(78, 150, L('simulador', 'simulador'), 'b')}</g>
      <g ${roboA(1, 'ta-fade')}><path d="M150 70h22" stroke="#9FB4F2" stroke-width="5" stroke-linecap="round"/><path d="M168 62l8 8-8 8" fill="none" stroke="#9FB4F2" stroke-width="5" stroke-linecap="round"/>${roboTxt(164, 50, 'USB', 's')}</g>
      <g ${roboA(1.4, 'ta-in')}>${roboSideSVG(244, 116, 1.15)}${roboTxt(246, 150, L('robot de veritat', 'robot de verdad'), 'b')}</g>
      ${roboPill(160, 190, 236, L('prova, mesura i ajusta', 'prueba, mide y ajusta'), '#EF5B4F', 2.2)}`);
  },
  // per sempre: el bucle que no s'acaba
  rForever() {
    return roboSvg(200, `<path d="M90 100a40 40 0 1 1 70 -26a40 40 0 1 0 70 26" fill="none" stroke="#1FA463" stroke-width="12" stroke-linecap="round" opacity=".25"/><path d="M90 100a40 40 0 1 1 70 -26a40 40 0 1 0 70 26a40 40 0 1 1 -70 26a40 40 0 1 0 -70 -26" fill="none" stroke="#1FA463" stroke-width="5" stroke-linecap="round" stroke-dasharray="20 300" class="ro-inf"/>
      <style>.tani .ro-inf{animation:roinf 3s linear infinite}@keyframes roinf{to{stroke-dashoffset:-320}}</style>${roboPill(160, 176, 230, L('llegeix sensors → decideix → mou', 'lee sensores → decide → mueve'), '#1B2B6B', .4)}`);
  },
  // planificar una missió
  rPlan() {
    const it = [L('Objectiu: què ha de fer?', 'Objetivo: ¿qué tiene que hacer?'), L('Sensors que farà servir', 'Sensores que usará'), L('Programa per trossos', 'Programa por trozos'), L('Provar, mesurar, millorar', 'Probar, medir, mejorar')];
    return roboSvg(214, `<rect x="40" y="8" width="240" height="198" rx="18" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/>${it.map((t, i) => `<g transform="translate(62 ${40 + i * 42})"><rect width="24" height="24" rx="6" fill="#fff" stroke="#C9B48A" stroke-width="2"/><path ${roboA(.5 + i * .7, 'ta-draw')} pathLength="1" d="M5 12l5 5l9 -11" stroke="#3CC47C" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="36" y="18" class="tat s">${t}</text></g>`).join('')}`);
  },
  // la pantalla 5×5: una icona o un número
  rMatrix() {
    const pats = [ROBO_ICONS.heart, ROBO_ICONS.happy, roboNumPat(3)];
    return roboSvg(200, `${pats.map((p, k) => `<g ${roboA(.2 + k * .8, 'ta-pop')} transform="translate(${30 + k * 96} 30)"><rect width="80" height="80" rx="12" fill="#1D2333"/>${p.split(' ').map((r, y) => [...r].map((c, x) => `<rect x="${8 + x * 13.5}" y="${8 + y * 13.5}" width="10" height="10" rx="2.5" fill="${c === '1' ? '#FF3B30' : '#3A2F38'}"/>`).join('')).join('')}</g>`).join('')}
      ${roboTxt(70, 140, L('icona', 'icono'), 'b')}${roboTxt(166, 140, L('icona', 'icono'), 'b')}${roboTxt(262, 140, L('número', 'número'), 'b')}${roboTxt(160, 180, L('la pantalla diu què pensa el robot', 'la pantalla dice qué piensa el robot'), 's', roboA(2.4, 'ta-fade'))}`);
  }
};

/* ---------- El kit de l'aula: pas «robokit» (activitat amb el robot de veritat, per parelles) ----------
   { k:'robokit', ph:'mans', title, t, roles:[[nom, feina]…], mat:[…], steps:[…], measure:[{q, u}], tip, art? }
   Les mesures que apunten es desen a la sessió (P.tech.s[id].kit) perquè les puguin comparar amb el simulador. */
function roboKitArt(kind = 'kit') {
  const sheet = kind === 'track' ? `<rect x="150" y="94" width="150" height="70" rx="6" fill="#fff" stroke="#DCE4FA" stroke-width="2" transform="skewX(-18)"/><path d="M146 140q40 -36 90 -12t70 -10" fill="none" stroke="#17171F" stroke-width="7" stroke-linecap="round" transform="skewX(-18)"/>` : '';
  const tape = kind === 'measure' ? `<rect x="168" y="138" width="140" height="16" rx="3" fill="#FFE38A"/>${[...Array(15).keys()].map(i => `<path d="M${172 + i * 9} 138v${i % 5 ? 5 : 9}" stroke="#5A4500" stroke-width="1.5"/>`).join('')}` : '';
  return `<svg viewBox="0 0 320 170" class="ro-kitart" aria-hidden="true"><defs><linearGradient id="roCh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF7A6E"/><stop offset="1" stop-color="#E2463B"/></linearGradient>
    <linearGradient id="roMt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F4F6FA"/><stop offset="1" stop-color="#AEB6C6"/></linearGradient></defs>
    <rect width="320" height="170" rx="20" fill="#FFF3E2"/><rect y="118" width="320" height="52" fill="#E9C99A"/><rect y="118" width="320" height="5" fill="#D6AE78"/>${sheet}${tape}
    <g transform="translate(26 30)"><rect width="74" height="56" rx="8" fill="#1D2333"/>${'01010 11111 11111 01110 00100'.split(' ').map((r, y) => [...r].map((c, x) => `<rect x="${22 + x * 6.4}" y="${10 + y * 6.4}" width="4.4" height="4.4" rx="1" fill="${c === '1' ? '#FF3B30' : '#3A2F38'}"/>`).join('')).join('')}<circle cx="10" cy="28" r="5" fill="#2A2C36"/><circle cx="64" cy="28" r="5" fill="#2A2C36"/><rect y="48" width="74" height="8" fill="#C9A24B"/></g>
    <g transform="translate(18 104)"><rect width="26" height="40" rx="5" fill="#2F5BEA"/><rect x="8" y="-4" width="10" height="5" rx="2" fill="#2F5BEA"/><rect x="34" width="26" height="40" rx="5" fill="#2F5BEA"/><rect x="42" y="-4" width="10" height="5" rx="2" fill="#2F5BEA"/></g>
    <path d="M100 56q24 0 30 30t40 26" fill="none" stroke="#3E4352" stroke-width="4" stroke-linecap="round"/>
    ${roboSideSVG(200, 128, 1.45, { lc: 'c', mat: [1, 0, 1, 0, 1] })}</svg>`;
}
if (typeof TSTEP !== 'undefined') TSTEP.robokit = function (st) {
  const rec = TS_().s[TSS.id] = TS_().s[TSS.id] || {}, kit = rec.kit = rec.kit || {};
  $('#tsb').innerHTML = `<div class="tcol ro-kit"><div class="ro-kith">${roboKitArt(st.art)}<div class="ro-kitt"><small>${L('Amb el robot de veritat · per parelles', 'Con el robot de verdad · por parejas')}</small><h2>${tval(st.title)}</h2></div></div>
    <p class="ro-kitp">${tval(st.t)}</p>
    ${st.mat ? `<div class="ro-kitm"><b>${L('Necessiteu', 'Necesitáis')}</b><div>${st.mat.map(m => `<span>${tval(m)}</span>`).join('')}</div></div>` : ''}
    ${st.roles ? `<div class="ro-roles">${st.roles.map(([n, d], i) => `<div class="ro-role r${i}"><b>${tval(n)}</b><span>${tval(d)}</span></div>`).join('')}</div>` : ''}
    <ol class="ro-ksteps">${st.steps.map(x => `<li>${tval(x)}</li>`).join('')}</ol>
    ${st.measure ? `<div class="ro-meas"><b>${L('Apunteu-ho', 'Apuntadlo')}</b>${st.measure.map((m, i) => `<label><span>${tval(m.q)}</span><input inputmode="decimal" data-i="${i}" value="${esc(kit[i] ?? '')}" placeholder="…"><em>${tval(m.u || '')}</em></label>`).join('')}</div>` : ''}
    ${st.tip ? `<p class="ttip ro-ktip">${tval(st.tip)}</p>` : ''}</div>`;
  document.querySelectorAll('.ro-meas input').forEach(inp => inp.oninput = () => { kit[inp.dataset.i] = inp.value.slice(0, 12); save(); });
  tFoot(L('Ho hem fet!', '¡Lo hemos hecho!'), () => { addXPsafe(6); tNext(); }, true, `<button class="btn ghost" onclick="tNext()">${L('Ara no', 'Ahora no')}</button>`);
};

/* ---------- Arenes de base (les dels reptes són a tech-c2.js) ---------- */
const ROBO_AR = {
  lab: { w: 200, h: 130, start: [30, 65, 0] }
};
// les animacions s'afegeixen a TANI (tech-learn.js) si ja hi és
if (typeof TANI !== 'undefined') Object.assign(TANI, TANI_ROBO);
