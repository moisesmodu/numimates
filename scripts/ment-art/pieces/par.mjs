import { C } from '../base.mjs';
// Parelles: cartes de memòria cap per avall sobre la taula, en graella; dues girades amb la mateixa fulla
export const opts = { floor: .5 };
const V = { cx: 975, yh: -420, yf: 784, D: 2350 };
const P = (X, Z, Y = 0) => { const k = 1 / (1 + Z / V.D); return [V.cx + X * k, V.yh + (V.yf - V.yh) * k - Y * k]; };
// matriu afí local (x a la dreta, y cap a l'espectador) per a un objecte pla centrat a (X,Z) i girat «a» radiants
const aff = (X, Z, a = 0, Y = 0) => {
  const c = Math.cos(a), s = Math.sin(a), o = P(X, Z, Y), u = P(X + c, Z + s, Y), v = P(X + s, Z - c, Y);
  return `matrix(${(u[0] - o[0]).toFixed(4)} ${(u[1] - o[1]).toFixed(4)} ${(v[0] - o[0]).toFixed(4)} ${(v[1] - o[1]).toFixed(4)} ${o[0].toFixed(1)} ${o[1].toFixed(1)})`;
};
const aff3 = (o, u, v) => { const p0 = P(o[0], o[1], o[2]), pu = P(o[0] + u[0], o[1] + u[1], o[2] + u[2]), pv = P(o[0] + v[0], o[1] + v[1], o[2] + v[2]);
  return `matrix(${(pu[0] - p0[0]).toFixed(4)} ${(pu[1] - p0[1]).toFixed(4)} ${(pv[0] - p0[0]).toFixed(4)} ${(pv[1] - p0[1]).toFixed(4)} ${p0[0].toFixed(1)} ${p0[1].toFixed(1)})`; };
const pts = a => a.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
const W = 182, H = 246, RX = 16;
const back = () => `<rect x="${-W / 2}" y="${-H / 2}" width="${W}" height="${H}" rx="${RX}" fill="${C.coral}"/>
  <rect x="${-W / 2 + 12}" y="${-H / 2 + 12}" width="${W - 24}" height="${H - 24}" rx="${RX - 7}" fill="url(#par-lat)"/>
  <rect x="${-W / 2 + 12}" y="${-H / 2 + 12}" width="${W - 24}" height="${H - 24}" rx="${RX - 7}" fill="none" stroke="${C.cream}" stroke-width="4"/>
  <circle r="36" fill="${C.coral}" stroke="${C.cream}" stroke-width="4"/><path d="M0 -21 L 15 0 L 0 21 L -15 0Z" fill="${C.gold}"/>`;
const leaf = () => `<g transform="rotate(-38) scale(1.05)"><path d="M0 70 C -52 30 -50 -40 0 -86 C 50 -40 52 30 0 70Z" fill="${C.em}"/><path d="M0 70 C 50 30 52 -40 0 -86 Z" fill="${C.em2}"/>
  <path d="M0 86 L 0 -70" stroke="${C.cream}" stroke-width="5" stroke-linecap="round"/><path d="M0 30 L -26 6 M0 -6 L -28 -32 M0 30 L 26 6 M0 -6 L 28 -32" stroke="${C.cream}" stroke-width="3.5" stroke-linecap="round" opacity=".85"/></g>`;
const face = () => `<rect x="${-W / 2}" y="${-H / 2}" width="${W}" height="${H}" rx="${RX}" fill="${C.white}"/>
  <rect x="${-W / 2 + 12}" y="${-H / 2 + 12}" width="${W - 24}" height="${H - 24}" rx="${RX - 7}" fill="none" stroke="${C.gold}" stroke-width="3"/>${leaf()}`;
export default () => {
  const cols = 4, rows = 3, gx = 40, gz = 40;
  const jit = [[2, -3, .03], [-3, 4, -.04], [4, 0, .02], [-2, -4, -.02], [3, 3, -.03], [0, -2, .05], [-4, 2, .01], [2, 5, -.05], [-3, -3, .03], [5, 2, -.02], [-1, 4, .04], [2, -2, -.03]];
  const up = { '1,0': 1, '0,2': 1 }, lift = '';
  let shadows = '', cards = '';
  for (let r = rows - 1; r >= 0; r--) for (let c = 0; c < cols; c++) { // r = 0 fila del davant; dibuixem del fons cap endavant
    const [jx, jz, ja] = jit[r * cols + c];
    const X = (c - (cols - 1) / 2) * (W + gx) + jx, Z = 70 + r * (H + gz) + jz, a = ja;
    const isUp = up[r + ',' + c];
    if (lift === r + ',' + c) {
      const t = 52 * Math.PI / 180, ct = Math.cos(t), st = Math.sin(t), zb = Z + H / 2, x0 = X - W / 2;
      const c3 = [[0, 0], [W, 0], [W, H], [0, H]].map(([lx, ly]) => [x0 + lx, zb - ly * ct, ly * st]);
      const sh = c3.map(([x, z, y]) => P(x - y * 1.0, z - y * .45));
      shadows += `<polygon points="${pts(sh)}" fill="${C.ink2}" opacity=".45" filter="url(#par-b)"/>`;
      cards += `<g transform="${aff3([x0 + 3, zb, 0], [1, 0, 0], [0, -ct, st])}"><rect x="0" y="0" width="${W}" height="${H}" rx="${RX}" fill="#B9AE95"/></g>
        <g transform="${aff3([x0, zb + 4, 3], [1, 0, 0], [0, -ct, st])}"><g transform="translate(${W / 2} ${H / 2})">${face()}</g></g>`;
      continue;
    }
    shadows += `<g transform="${aff(X - 14, Z - 10, a)}"><rect x="${-W / 2}" y="${-H / 2}" width="${W}" height="${H}" rx="${RX}" fill="${C.ink2}" opacity=".45" filter="url(#par-b)"/></g>`;
    cards += `<g transform="${aff(X, Z, a, 0)}"><rect x="${-W / 2}" y="${-H / 2}" width="${W}" height="${H}" rx="${RX}" fill="${isUp ? '#CFC4AA' : C.coral2}"/></g>
      <g transform="${aff(X, Z, a, 6)}">${isUp ? face() : back()}</g>`;
  }
  return `<defs><filter id="par-b" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
    <pattern id="par-lat" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="26" height="26" fill="#D96F55"/><path d="M0 0 H26 M0 0 V26" stroke="${C.cream}" stroke-width="2" opacity=".45"/></pattern></defs>
  ${shadows}${cards}`;
};
