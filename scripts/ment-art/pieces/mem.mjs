import { C } from '../base.mjs';
// Seqüències (blocs de Corsi): un tauler de fusta amb 3×3 rajoles de ceràmica en perspectiva; dues s'encenen en daurat
export const opts = { floor: .5 };
// ── càmera senzilla: pla de la taula (X a la dreta, Z cap al fons, Y amunt) ──
const V = { cx: 990, yh: -420, yf: 800, D: 2200 };
const P = (X, Z, Y = 0) => { const k = 1 / (1 + Z / V.D); return [V.cx + X * k, V.yh + (V.yf - V.yh) * k - Y * k]; };
const pts = a => a.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
const poly = (a, fill, ex = '') => `<polygon points="${pts(a)}" fill="${fill}" ${ex}/>`;
const hull = ps => { const s = [...ps].sort((a, b) => a[0] - b[0] || a[1] - b[1]); const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]); const lo = [], up = []; for (const p of s) { while (lo.length > 1 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); } for (const p of s.reverse()) { while (up.length > 1 && cr(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); } return lo.slice(0, -1).concat(up.slice(0, -1)); };
const rot = (cx, cz, a) => ([x, z]) => { const c = Math.cos(a), s = Math.sin(a), dx = x - cx, dz = z - cz; return [cx + dx * c - dz * s, cz + dx * s + dz * c]; };
const L = [0.82, 0.57];
// caixa vertical: cares laterals visibles + tapa; tons = [tapa, clara, mitja, fosca]
const box = (cs, y0, y1, [top, li, mid, dk]) => {
  const m = cs.reduce((s, p) => [s[0] + p[0] / cs.length, s[1] + p[1] / cs.length], [0, 0]); let out = '';
  cs.forEach((a, i) => { const b = cs[(i + 1) % cs.length], ex = b[0] - a[0], ez = b[1] - a[1]; let n = [ez, -ex]; const mx = (a[0] + b[0]) / 2 - m[0], mz = (a[1] + b[1]) / 2 - m[1]; if (n[0] * mx + n[1] * mz < 0) n = [-n[0], -n[1]]; const ln = Math.hypot(...n); n = [n[0] / ln, n[1] / ln];
    const tc = [0 - (a[0] + b[0]) / 2, -V.D - (a[1] + b[1]) / 2]; if (n[0] * tc[0] + n[1] * tc[1] <= 0) return; const d = n[0] * L[0] + n[1] * L[1];
    out += poly([P(a[0], a[1], y1), P(b[0], b[1], y1), P(b[0], b[1], y0), P(a[0], a[1], y0)], d > .35 ? li : d > -.45 ? mid : dk); });
  return out + poly(cs.map(p => P(p[0], p[1], y1)), top);
};
const shadow = (cs, h, op = .38, blur = 'mem-b2') => { const off = cs.map(([x, z]) => [x - h * .9, z - h * .55]); return poly(hull([...cs, ...off].map(p => P(p[0], p[1]))), C.ink2, `opacity="${op}" filter="url(#${blur})"`); };

export default () => {
  const R = rot(0, 395, -0.11);
  const sq = (x0, z0, x1, z1) => [[x0, z0], [x1, z0], [x1, z1], [x0, z1]].map(R);
  const T = 204, G = 30, M = 38, W = 3 * T + 2 * G + 2 * M; // 726
  const bx0 = -W / 2, bz0 = 395 - W / 2;
  const board = sq(bx0, bz0, bx0 + W, bz0 + W);
  const BH = 30, TH = 24;
  const lit = { '1,2': 2, '2,0': 1 }; // fila,col: 2 = brillant, 1 = la d'abans (més tènue)
  let tiles = '', glows = '';
  const order = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) order.push([r, c]);
  // del fons cap endavant (r = 0 és la fila del fons)
  order.sort((a, b) => a[0] - b[0]);
  for (const [r, c] of order) {
    const x0 = bx0 + M + c * (T + G), z1 = bz0 + W - M - r * (T + G), z0 = z1 - T;
    const cs = sq(x0, z0, x0 + T, z1), st = lit[r + ',' + c];
    const inner = sq(x0 + 22, z0 + 22, x0 + T - 22, z1 - 22).map(p => P(p[0], p[1], BH + TH));
    const ctr = P(...R([x0 + T / 2, z0 + T / 2]), BH + TH);
    tiles += poly(hull([...cs, ...cs.map(([x, z]) => [x - 26, z - 16])]).map(p => P(p[0], p[1], BH)), '#5a3a17', 'opacity=".45" filter="url(#mem-b4)"');
    if (st === 2) {
      tiles += box(cs, BH, BH + TH, ['#F2C455', '#F7D883', '#D49A2E', '#A97722']) + poly(inner, 'url(#mem-hot)');
      glows += `<ellipse cx="${ctr[0]}" cy="${ctr[1] - 10}" rx="210" ry="120" fill="#FFD772" opacity=".55" filter="url(#mem-b30)" style="mix-blend-mode:screen"/>`;
    } else if (st === 1) {
      tiles += box(cs, BH, BH + TH, ['#C7A458', '#D8B86C', '#A6853F', '#80652E']) + poly(inner, 'url(#mem-dim)');
      glows += `<ellipse cx="${ctr[0]}" cy="${ctr[1] - 6}" rx="150" ry="80" fill="#F0CB6A" opacity=".22" filter="url(#mem-b30)" style="mix-blend-mode:screen"/>`;
    } else {
      tiles += box(cs, BH, BH + TH, ['#24564D', '#2F6A5F', '#1B443D', '#12332E']) + poly(inner, '#2A6056') + poly(sq(x0 + 22, z0 + T - 50, x0 + T - 22, z1 - 22).map(p => P(p[0], p[1], BH + TH)), '#3A7A6D', 'opacity=".5"');
    }
  }
  // tauler: llosa de fusta amb bisell i veta suau
  const inset = sq(bx0 + 14, bz0 + 14, bx0 + W - 14, bz0 + W - 14).map(p => P(p[0], p[1], BH));
  const grain = [...Array(9).keys()].map(i => { const z = bz0 + 40 + i * 80; const a = P(...R([bx0 + 30, z + (i % 2 ? 8 : -6)]), BH), b = P(...R([bx0 + W / 2, z + 14]), BH), c = P(...R([bx0 + W - 30, z - 4]), BH); return `<path d="M${a[0]} ${a[1]} Q ${b[0]} ${b[1]} ${c[0]} ${c[1]}" stroke="${C.wood2}" stroke-width="2" fill="none" opacity=".18"/>`; }).join('');
  // llapis i un dau? no: només una petita targeta de puntuació i un rellotge de sorra
  const hg = (() => { const x = 1450, y = 610; return `<ellipse cx="${x - 40}" cy="${y + 8}" rx="80" ry="16" fill="${C.ink2}" opacity=".35" filter="url(#mem-b8)"/>
    <rect x="${x - 46}" y="${y - 12}" width="92" height="18" rx="5" fill="${C.wood2}"/><rect x="${x - 46}" y="${y - 12}" width="92" height="7" rx="3" fill="${C.wood}"/>
    <rect x="${x - 46}" y="${y - 182}" width="92" height="18" rx="5" fill="${C.wood2}"/><rect x="${x - 46}" y="${y - 182}" width="92" height="7" rx="3" fill="${C.wood}"/>
    <rect x="${x - 38}" y="${y - 164}" width="8" height="152" fill="${C.wood2}"/><rect x="${x + 30}" y="${y - 164}" width="8" height="152" fill="${C.wood}"/>
    <path d="M${x - 26} ${y - 164} h52 c0 40 -20 52 -22 66 c2 14 22 26 22 66 h-52 c0 -40 20 -52 22 -66 c-2 -14 -22 -26 -22 -66z" fill="#FFFFFF" opacity=".55"/>
    <path d="M${x - 24} ${y - 12} c4 -26 18 -30 24 -44 c6 14 20 18 24 44z" fill="${C.gold}"/><path d="M${x - 14} ${y - 150} h28 c-4 14 -10 22 -14 30 c-4 -8 -10 -16 -14 -30z" fill="${C.gold}"/><line x1="${x}" y1="${y - 98}" x2="${x}" y2="${y - 56}" stroke="${C.gold2}" stroke-width="2"/>
    <path d="M${x - 18} ${y - 158} c-2 30 0 50 8 62" stroke="#fff" stroke-width="5" fill="none" opacity=".7" stroke-linecap="round"/>`; })();
  return `<defs><radialGradient id="mem-hot" cx=".55" cy=".4" r=".7"><stop offset="0" stop-color="#FFF4C9"/><stop offset=".55" stop-color="#F9D777"/><stop offset="1" stop-color="#EDB944"/></radialGradient><radialGradient id="mem-dim" cx=".55" cy=".4" r=".7"><stop offset="0" stop-color="#E6CB86"/><stop offset="1" stop-color="#C4A25A"/></radialGradient><filter id="mem-b2" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="16"/></filter><filter id="mem-b4" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="4"/></filter><filter id="mem-b8" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8"/></filter><filter id="mem-b12" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="12"/></filter><filter id="mem-b30" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="30"/></filter></defs>
  ${shadow(board, 120, .42)}${poly(board.map(p => P(p[0], p[1])), C.ink2, 'opacity=".45" filter="url(#mem-b8)"')}
  ${box(board, 0, BH, ['#DDB680', '#E8C898', C.wood, C.wood2])}${poly(inset, '#CFA46C', 'opacity=".6"')}${grain}
  ${tiles}${glows}${hg}`;
};
