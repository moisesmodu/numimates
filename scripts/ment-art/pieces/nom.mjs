import { C } from '../base.mjs';
// Qui viu on?: un plànol de paper plegat en acordió sobre la taula, amb carrers, un riu i un parc; tres xinxetes de colors i una caseta de fusta al costat d'una
export const opts = { floor: .54 };
const V = { cx: 960, yh: -460, yf: 792, D: 2300 };
const P = (X, Z, Y = 0) => { const k = 1 / (1 + Z / V.D); return [V.cx + X * k, V.yh + (V.yf - V.yh) * k - Y * k]; };
const K = Z => 1 / (1 + Z / V.D);
const pts = a => a.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
const poly = (a, fill, ex = '') => `<polygon points="${pts(a)}" fill="${fill}" ${ex}/>`;
const aff3 = (o, u, v) => { const p0 = P(o[0], o[1], o[2]), pu = P(o[0] + u[0], o[1] + u[1], o[2] + u[2]), pv = P(o[0] + v[0], o[1] + v[1], o[2] + v[2]);
  return `matrix(${(pu[0] - p0[0]).toFixed(4)} ${(pu[1] - p0[1]).toFixed(4)} ${(pv[0] - p0[0]).toFixed(4)} ${(pv[1] - p0[1]).toFixed(4)} ${p0[0].toFixed(1)} ${p0[1].toFixed(1)})`; };
const hull = ps => { const q = [...ps].sort((a, b) => a[0] - b[0] || a[1] - b[1]); const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]); const lo = [], up = []; for (const p of q) { while (lo.length > 1 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); } for (const p of q.reverse()) { while (up.length > 1 && cr(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); } return lo.slice(0, -1).concat(up.slice(0, -1)); };

const MW = 900, MH = 600, NP = 4, FH = 26; // mida del plànol, plecs i alçada de les carenes
const A = -0.07, O = [-MW / 2 + 30, 690]; // gir i cantonada del fons a l'esquerra
const ex = [Math.cos(A), Math.sin(A)], ez = [Math.sin(A), -Math.cos(A)];
const hgt = u => { const w = MW / NP, i = Math.min(NP - 1, Math.floor(u / w)), t = (u - i * w) / w; const a = i % 2 ? FH : 0, b = i % 2 ? 0 : FH; return a + (b - a) * t; };
const L3 = (u, v) => [O[0] + u * ex[0] + v * ez[0], O[1] + u * ex[1] + v * ez[1], hgt(u)];
const S = (u, v) => P(...L3(u, v));

const content = () => {
  const road = (d, w = 20, col = C.white) => `<path d="${d}" stroke="#D8C8A8" stroke-width="${w + 7}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="${col}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  let blocks = '';
  for (let i = 0; i < 9; i++) for (let j = 0; j < 6; j++) { const x = 24 + i * 100, y = 24 + j * 98; blocks += `<rect x="${x}" y="${y}" width="76" height="74" rx="8" fill="${(i * 7 + j * 3) % 5 === 0 ? '#DDCBA8' : '#EADDC2'}"/>`; }
  return `<rect width="${MW}" height="${MH}" fill="#F6EFDF"/>${blocks}
  <path d="M-20 300 C 140 250 220 330 330 300 C 430 270 470 160 560 140 C 650 120 760 190 920 150" stroke="#9CC5DE" stroke-width="54" fill="none"/><path d="M-20 300 C 140 250 220 330 330 300 C 430 270 470 160 560 140 C 650 120 760 190 920 150" stroke="#C3DCEA" stroke-width="18" fill="none" opacity=".7"/>
  <path d="M600 330 C 680 300 800 320 830 380 C 860 450 790 520 700 510 C 620 500 560 450 570 400 C 575 360 580 340 600 330Z" fill="#B5D3A6"/>
  ${[[640, 380], [700, 360], [760, 400], [680, 450], [740, 470], [790, 440], [630, 440]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="15" fill="#97C08C"/><circle cx="${x + 4}" cy="${y - 4}" r="7" fill="#B6D6A9"/>`).join('')}
  ${road('M-20 120 L 920 96')}${road('M-20 520 L 920 506')}${road('M220 -20 L 250 620')}${road('M520 -20 L 470 620')}${road('M-20 420 C 200 400 360 430 470 400')}
  ${road('M60 -20 C 120 180 300 220 380 330 C 450 430 600 560 760 620', 26, '#F2D489')}
  ${road('M780 -20 L 760 280', 16)}<path d="M290 470 L 330 466" stroke="#fff" stroke-width="0"/>
  <path d="M220 300 L 250 304" stroke="#C9B48E" stroke-width="5" opacity=".0"/>
  <path d="M385 112 L 395 70 L 415 112Z" fill="#fff" opacity="0"/>`;
};

const pin = (u, v, col, col2) => {
  const [X, Z, Y] = L3(u, v), k = K(Z), b = P(X, Z, Y), hl = 112 * k, r = 31 * k;
  const sh = P(X - 70, Z - 30, Y);
  return `<line x1="${b[0]}" y1="${b[1]}" x2="${sh[0]}" y2="${sh[1]}" stroke="${C.ink2}" stroke-width="${5 * k}" opacity=".35" stroke-linecap="round"/>
  <ellipse cx="${sh[0] - 4}" cy="${sh[1] + 2}" rx="${r * 1.2}" ry="${r * .55}" fill="${C.ink2}" opacity=".35" filter="url(#nom-b4)"/>
  <ellipse cx="${b[0]}" cy="${b[1]}" rx="${7 * k}" ry="${3 * k}" fill="${C.ink2}" opacity=".5"/>
  <line x1="${b[0]}" y1="${b[1]}" x2="${b[0] + 6 * k}" y2="${b[1] - hl}" stroke="#A7B2AF" stroke-width="${5 * k}" stroke-linecap="round"/>
  <line x1="${b[0] + 1.5 * k}" y1="${b[1] - 4}" x2="${b[0] + 7 * k}" y2="${b[1] - hl}" stroke="#E5EBE9" stroke-width="${1.6 * k}"/>
  <ellipse cx="${b[0] + 6 * k}" cy="${b[1] - hl + 6 * k}" rx="${r * .75}" ry="${r * .32}" fill="${col2}"/>
  <circle cx="${b[0] + 6 * k}" cy="${b[1] - hl - r * .55}" r="${r}" fill="${col}"/>
  <path d="M${b[0] + 6 * k - r} ${b[1] - hl - r * .55} a ${r} ${r} 0 0 0 ${r * 1.7} ${r * .55} a ${r * 1.1} ${r * 1.1} 0 0 1 ${-r * 1.7} ${-r * .55}z" fill="${col2}" opacity=".6"/>
  <circle cx="${b[0] + 6 * k + r * .32}" cy="${b[1] - hl - r * .95}" r="${r * .3}" fill="#fff" opacity=".55"/>`;
};

const house = (u, v) => { // caseta de fusta amb el frontó cap a l'espectador
  const [X, Z, Y] = L3(u, v), w = 64, d = 70, h = 50, rh = 40, o = 6;
  const cs = [[X - w / 2, Z - d / 2], [X + w / 2, Z - d / 2], [X + w / 2, Z + d / 2], [X - w / 2, Z + d / 2]];
  const p = (i, y) => P(cs[i][0], cs[i][1], Y + y);
  const rF = P(X, Z - d / 2 - o, Y + h + rh), rB = P(X, Z + d / 2 + o, Y + h + rh);
  const eF = [P(X - w / 2 - o, Z - d / 2 - o, Y + h - 6), P(X + w / 2 + o, Z - d / 2 - o, Y + h - 6)], eB = [P(X - w / 2 - o, Z + d / 2 + o, Y + h - 6), P(X + w / 2 + o, Z + d / 2 + o, Y + h - 6)];
  const sh = hull([...cs, ...cs.map(([x, z]) => [x - 90, z - 40])].map(q => P(q[0], q[1], Y)));
  const door = [P(X - 9, Z - d / 2, Y), P(X + 9, Z - d / 2, Y), P(X + 9, Z - d / 2, Y + 28), P(X - 9, Z - d / 2, Y + 28)];
  const win = [P(X + w / 2, Z - 12, Y + 18), P(X + w / 2, Z + 12, Y + 18), P(X + w / 2, Z + 12, Y + 36), P(X + w / 2, Z - 12, Y + 36)];
  return `${poly(sh, C.ink2, 'opacity=".38" filter="url(#nom-b4)"')}
  ${poly([p(1, 0), p(2, 0), p(2, h), p(1, h)], '#E8BC85')}${poly(win, C.ink, 'opacity=".55"')}
  ${poly([p(0, 0), p(1, 0), p(1, h), P(X, Z - d / 2, Y + h + rh - 4), p(0, h)], '#CF9757')}${poly(door, C.wood2)}
  ${poly([eF[0], rF, rB, eB[0]], C.coral2)}${poly([rF, eF[1], eB[1], rB], C.coral)}
  <path d="M${rF[0]} ${rF[1]} L ${rB[0]} ${rB[1]}" stroke="#F2A994" stroke-width="3" stroke-linecap="round"/>`;
};
const affAt = (u, v) => { // afí local exacta al punt (u,v) del plànol (derivades numèriques)
  const e = 1, p0 = S(u, v), pu = S(u + e, v), pv = S(u, v + e);
  const a = (pu[0] - p0[0]) / e, b = (pu[1] - p0[1]) / e, c = (pv[0] - p0[0]) / e, d = (pv[1] - p0[1]) / e;
  return `matrix(${a.toFixed(5)} ${b.toFixed(5)} ${c.toFixed(5)} ${d.toFixed(5)} ${(p0[0] - a * u - c * v).toFixed(2)} ${(p0[1] - b * u - d * v).toFixed(2)})`; };
const grow = (q, px = 1.2) => { const m = q.reduce((s, p) => [s[0] + p[0] / q.length, s[1] + p[1] / q.length], [0, 0]); return q.map(([x, y]) => { const dx = x - m[0], dy = y - m[1], l = Math.hypot(dx, dy) || 1; return [x + dx / l * px, y + dy / l * px]; }); };
export default () => {
  const w = MW / NP, TU = 4, TV = 8; let panels = '', defs = `<g id="nom-map">${content()}</g>`;
  let n = 0;
  for (let i = 0; i < NP; i++) {
    for (let tu = 0; tu < TU; tu++) for (let tv = 0; tv < TV; tv++) {
      const u0 = i * w + tu * w / TU, u1 = u0 + w / TU, v0 = tv * MH / TV, v1 = v0 + MH / TV;
      const q = [S(u0, v0), S(u1, v0), S(u1, v1), S(u0, v1)];
      defs += `<clipPath id="nom-t${n}"><polygon points="${pts(grow(q))}"/></clipPath>`;
      panels += `<g clip-path="url(#nom-t${n})"><use href="#nom-map" transform="${affAt((u0 + u1) / 2, (v0 + v1) / 2)}"/></g>`;
      n++;
    }
    const q = [S(i * w, 0), S((i + 1) * w, 0), S((i + 1) * w, MH), S(i * w, MH)];
    panels += poly(q, i % 2 ? '#fff' : C.ink2, `opacity="${i % 2 ? .16 : .07}"`);
    if (i % 2 === 0 && i < NP - 1) panels += `<path d="M${S((i + 1) * w, 0).join(' ')} L ${S((i + 1) * w, MH).join(' ')}" stroke="#fff" stroke-width="3" opacity=".8"/>`;
  }
  // plec horitzontal suau al mig
  panels += `<path d="M${[0, 1, 2, 3, 4].map(i => S(i * w, MH * .5).map(n => n.toFixed(1)).join(' ')).join(' L ')}" stroke="${C.ink2}" stroke-width="2" opacity=".12" fill="none"/>`;
  const out = [S(0, 0), S(MW, 0), S(MW, MH), S(0, MH)];
  const shadowQ = hull([...out, ...[[0, 0], [MW, 0], [MW, MH], [0, MH]].map(([u, v]) => { const [X, Z] = L3(u, v); return P(X - 40, Z - 22); })]);
  return `<defs><filter id="nom-b16" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="16"/></filter><filter id="nom-b4" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4"/></filter></defs><defs>${defs}</defs>
  ${poly(shadowQ, C.ink2, 'opacity=".45" filter="url(#nom-b16)"')}
  ${panels}
  ${pin(345, 210, C.red, C.red2)}${pin(640, 300, C.blue, C.blue2)}${house(305, 468)}${pin(150, 480, C.gold, C.gold2)}`;
};
