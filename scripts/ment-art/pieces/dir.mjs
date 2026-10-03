import { C } from '../base.mjs';
// Direccions: una brúixola de llautó damunt d'un plànol de carrers en quadrícula (illes xamfranades), amb un recorregut puntejat
export const opts = { floor: .54 };
const V = { cx: 960, yh: -460, yf: 800, D: 2300 };
const P = (X, Z, Y = 0) => { const k = 1 / (1 + Z / V.D); return [V.cx + X * k, V.yh + (V.yf - V.yh) * k - Y * k]; };
const pts = a => a.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
const poly = (a, fill, ex = '') => `<polygon points="${pts(a)}" fill="${fill}" ${ex}/>`;
const hull = ps => { const q = [...ps].sort((a, b) => a[0] - b[0] || a[1] - b[1]); const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]); const lo = [], up = []; for (const p of q) { while (lo.length > 1 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); } for (const p of q.reverse()) { while (up.length > 1 && cr(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); } return lo.slice(0, -1).concat(up.slice(0, -1)); };

const MW = 1020, MH = 640, A = 0.05, O = [-MW / 2 - 10, 700];
const ex = [Math.cos(A), Math.sin(A)], ez = [Math.sin(A), -Math.cos(A)];
const L3 = (u, v, y = 0) => [O[0] + u * ex[0] + v * ez[0], O[1] + u * ex[1] + v * ez[1], y];
const S = (u, v, y = 0) => P(...L3(u, v, y));
const affAt = (u, v, y = 0) => { const p0 = S(u, v, y), pu = S(u + 1, v, y), pv = S(u, v + 1, y); const a = pu[0] - p0[0], b = pu[1] - p0[1], c = pv[0] - p0[0], d = pv[1] - p0[1];
  return `matrix(${a.toFixed(5)} ${b.toFixed(5)} ${c.toFixed(5)} ${d.toFixed(5)} ${(p0[0] - a * u - c * v).toFixed(2)} ${(p0[1] - b * u - d * v).toFixed(2)})`; };
const grow = (q, px = 1.2) => { const m = q.reduce((s, p) => [s[0] + p[0] / q.length, s[1] + p[1] / q.length], [0, 0]); return q.map(([x, y]) => { const dx = x - m[0], dy = y - m[1], l = Math.hypot(dx, dy) || 1; return [x + dx / l * px, y + dy / l * px]; }); };

const mapContent = () => {
  const B = 96, G = 26, ch = 18; let s = `<rect width="${MW}" height="${MH}" fill="#E9DFC9"/>`; // carrers = fons; illes xamfranades a sobre
  for (let i = -1; i < 10; i++) for (let j = -1; j < 6; j++) {
    const x = 14 + i * (B + G), y = 16 + j * (B + G), park = (i === 6 && j === 3) || (i === 7 && j === 3);
    const col = park ? '#B7D3A8' : (i * 5 + j * 3) % 7 === 0 ? '#D9C7A3' : '#F6EFDF';
    s += `<path d="M${x + ch} ${y} H ${x + B - ch} L ${x + B} ${y + ch} V ${y + B - ch} L ${x + B - ch} ${y + B} H ${x + ch} L ${x} ${y + B - ch} V ${y + ch}Z" fill="${col}"/>`;
    if (park) s += [[30, 30], [62, 44], [40, 70], [74, 74]].map(([a, b]) => `<circle cx="${x + a}" cy="${y + b}" r="12" fill="#95BF88"/>`).join('');
  }
  s += `<path d="M-20 ${MH + 40} L ${MW + 20} -60" stroke="#E9DFC9" stroke-width="40"/><path d="M-20 ${MH + 40} L ${MW + 20} -60" stroke="#F2D489" stroke-width="22"/>`;
  s += `<path d="M-20 ${MH * .5 - 6} H ${MW + 20}" stroke="#A9CDE2" stroke-width="0"/>`;
  // recorregut puntejat amb girs (com al joc)
  const r = [[123, 660], [123, 491], [245, 491], [245, 247], [367, 247], [367, 125]];
  s += `<path d="M${r.map(p => p.join(' ')).join(' L ')}" stroke="${C.coral}" stroke-width="9" fill="none" stroke-dasharray="2 18" stroke-linecap="round" stroke-linejoin="round"/>`;
  const e = r[r.length - 1];
  s += `<circle cx="${r[0][0]}" cy="${r[0][1] - 60}" r="13" fill="${C.coral}"/><circle cx="${e[0]}" cy="${e[1]}" r="20" fill="${C.coral}"/><circle cx="${e[0]}" cy="${e[1]}" r="8" fill="${C.white}"/>`;
  return s;
};

const compass = () => {
  const cu = 720, cv = 345, R = 255, H = 46; // centre en coordenades del plànol
  const at = y => `transform="${affAt(cu, cv, y)}"`;
  const g = (y, inner) => `<g ${at(y)}><g transform="translate(${cu} ${cv})">${inner}</g></g>`;
  let s = '';
  // ombra
  s += `<g transform="${affAt(cu, cv)}"><ellipse cx="${cu - 70}" cy="${cv + 38}" rx="${R + 20}" ry="${R + 10}" fill="${C.ink2}" opacity=".5" filter="url(#dir-b18)"/><circle cx="${cu - 14}" cy="${cv + 8}" r="${R + 4}" fill="${C.ink2}" opacity=".45" filter="url(#dir-b6)"/><ellipse cx="${cu - 330}" cy="${cv - R - 30}" rx="${R * .95}" ry="${R * .55}" fill="${C.ink2}" opacity=".32" filter="url(#dir-b18)"/></g>`;
  // tapa oberta (frontissa al nord), gairebé vertical i una mica tirada enrere: per dins, llautó i mirall
  const lid = (off, inner) => { const t = 30 * Math.PI / 180, hu = cu, hv = cv - R - 6 - off * Math.cos(t), hy = H - 4 - off * Math.sin(t);
    const p0 = S(hu, hv, hy), pu = S(hu + 1, hv, hy), pw = S(hu, hv - Math.sin(t), hy + Math.cos(t));
    const a = pu[0] - p0[0], b = pu[1] - p0[1], c = -(pw[0] - p0[0]), d = -(pw[1] - p0[1]);
    return `<g transform="matrix(${a.toFixed(5)} ${b.toFixed(5)} ${c.toFixed(5)} ${d.toFixed(5)} ${p0[0].toFixed(2)} ${p0[1].toFixed(2)})">${inner}</g>`; };
  for (let i = 8; i >= 1; i--) s += lid(i * 4, `<circle cx="0" cy="${-R - 4}" r="${R}" fill="#A87824"/>`);
  s += lid(0, `<circle cx="0" cy="${-R - 4}" r="${R}" fill="${C.gold}"/><circle cx="0" cy="${-R - 4}" r="${R - 8}" fill="none" stroke="#F6DC95" stroke-width="4" opacity=".7"/>
    <circle cx="0" cy="${-R - 4}" r="${R - 26}" fill="${C.gold2}"/><circle cx="0" cy="${-R - 4}" r="${R - 34}" fill="url(#dir-mir)"/>
    ${[60, 100, 140, 180].map(r => `<circle cx="0" cy="${-R - 4}" r="${r}" fill="none" stroke="${C.gold2}" stroke-width="2" opacity=".55"/>`).join('')}
    <g transform="translate(0 ${-R - 4})">${[...Array(16).keys()].map(i => `<g transform="rotate(${i * 22.5})"><path d="M0 0 L 0 ${i % 2 ? -110 : -170} L ${i % 2 ? 8 : 14} ${i % 2 ? -14 : -20}Z" fill="${C.gold2}" opacity="${i % 2 ? .35 : .55}"/></g>`).join('')}<circle r="16" fill="${C.gold2}" opacity=".6"/></g>
    <path d="M${-(R - 60) * .8} ${-R - 4 - (R - 60) * .6} A ${R - 60} ${R - 60} 0 0 1 ${(R - 60) * .3} ${-R - 4 - (R - 60) * .95}" stroke="#fff" stroke-width="16" fill="none" opacity=".3" stroke-linecap="round"/>
    <rect x="-70" y="-14" width="140" height="18" rx="6" fill="${C.gold2}"/><rect x="-70" y="-14" width="140" height="6" rx="3" fill="${C.gold}"/>`);
  // cos cilíndric
  for (let i = 0; i <= 12; i++) s += g(H * i / 12, `<circle r="${R}" fill="${i < 12 ? '#A87824' : C.gold2}"/>`);
  s += g(H * .45, `<path d="M${-R} 0 A ${R} ${R} 0 0 0 ${R} 0" stroke="#D9A94A" stroke-width="5" fill="none" opacity=".7"/>`);
  // cara superior
  const ticks = [...Array(72).keys()].map(i => { const a = i * 5 * Math.PI / 180, big = i % 9 === 0, r1 = R - 66 + (big ? 0 : 10); return `<line x1="${(r1 * Math.sin(a)).toFixed(1)}" y1="${(-r1 * Math.cos(a)).toFixed(1)}" x2="${((R - 52) * Math.sin(a)).toFixed(1)}" y2="${(-(R - 52) * Math.cos(a)).toFixed(1)}" stroke="${C.ink}" stroke-width="${big ? 4 : 2}"/>`; }).join('');
  const star = (n, len, w, c1, c2, rot0 = 0) => [...Array(n).keys()].map(i => { const a = rot0 + i * 360 / n; return `<g transform="rotate(${a})"><path d="M0 0 L 0 ${-len} L ${w} ${-w * 1.2}Z" fill="${c1}"/><path d="M0 0 L 0 ${-len} L ${-w} ${-w * 1.2}Z" fill="${c2}"/></g>`; }).join('');
  const lt = (t, a) => { const r = R - 96, x = r * Math.sin(a * Math.PI / 180), y = -r * Math.cos(a * Math.PI / 180); return `<text x="${x.toFixed(1)}" y="${(y + 13).toFixed(1)}" text-anchor="middle" font-size="40" font-family="'Bodoni 72', Didot, Georgia, serif" font-weight="700" fill="${t === 'N' ? C.coral2 : C.ink}">${t}</text>`; };
  s += g(H, `<circle r="${R}" fill="${C.gold}"/><circle r="${R - 6}" fill="none" stroke="#F6DC95" stroke-width="4" opacity=".8"/><circle r="${R - 22}" fill="${C.gold2}"/>
    <circle r="${R - 30}" fill="${C.cream}"/>${ticks}
    ${star(4, R - 120, 34, C.ink, C.em2)}${star(4, R - 150, 22, C.em, '#8FC7B8', 45)}
    <circle r="${R - 128}" fill="none" stroke="${C.ink}" stroke-width="2" opacity=".35"/>
    ${lt('N', 0)}${lt('E', 90)}${lt('S', 180)}${lt('O', 270)}
    <g transform="rotate(-24)"><path d="M0 ${-R + 70} L 22 0 L -22 0Z" fill="${C.coral}"/><path d="M0 ${-R + 70} L 22 0 L 0 0Z" fill="${C.coral2}"/><path d="M0 ${R - 70} L 22 0 L -22 0Z" fill="#B9C2BF"/><path d="M0 ${R - 70} L -22 0 L 0 0Z" fill="#8E9996"/></g>
    <circle r="20" fill="${C.gold2}"/><circle r="12" fill="${C.gold}"/><circle cx="-4" cy="-4" r="4" fill="#fff" opacity=".7"/>`);
  // frontissa
  { const h = S(cu, cv - R - 4, H + 2), k = 1 / (1 + L3(cu, cv - R)[1] / V.D); s += `<rect x="${h[0] - 52 * k}" y="${h[1] - 14 * k}" width="${104 * k}" height="${24 * k}" rx="${10 * k}" fill="${C.gold2}"/><rect x="${h[0] - 52 * k}" y="${h[1] - 14 * k}" width="${104 * k}" height="${9 * k}" rx="${4 * k}" fill="#F3D88E"/><line x1="${h[0] - 18 * k}" y1="${h[1] - 14 * k}" x2="${h[0] - 18 * k}" y2="${h[1] + 10 * k}" stroke="#A87824" stroke-width="2"/><line x1="${h[0] + 18 * k}" y1="${h[1] - 14 * k}" x2="${h[0] + 18 * k}" y2="${h[1] + 10 * k}" stroke="#A87824" stroke-width="2"/>`; }
  // vidre: reflex
  s += g(H + 2, `<path d="M${-(R - 50) * .82} ${-(R - 50) * .57} A ${R - 50} ${R - 50} 0 0 1 ${(R - 50) * .5} ${-(R - 50) * .87}" stroke="#fff" stroke-width="22" fill="none" opacity=".35" stroke-linecap="round"/><path d="M${(R - 50) * .75} ${-(R - 50) * .3} A ${R - 50} ${R - 50} 0 0 1 ${(R - 50) * .8} ${(R - 50) * .1}" stroke="#fff" stroke-width="10" fill="none" opacity=".3" stroke-linecap="round"/>`);
  return s;
};

export default () => {
  const TU = 12, TV = 8; let defs = `<g id="dir-map">${mapContent()}</g>`, tiles = '', n = 0;
  for (let i = 0; i < TU; i++) for (let j = 0; j < TV; j++) {
    const u0 = i * MW / TU, u1 = u0 + MW / TU, v0 = j * MH / TV, v1 = v0 + MH / TV, q = [S(u0, v0), S(u1, v0), S(u1, v1), S(u0, v1)];
    defs += `<clipPath id="dir-t${n}"><polygon points="${pts(grow(q))}"/></clipPath>`;
    tiles += `<g clip-path="url(#dir-t${n})"><use href="#dir-map" transform="${affAt((u0 + u1) / 2, (v0 + v1) / 2)}"/></g>`; n++;
  }
  const out = [S(0, 0), S(MW, 0), S(MW, MH), S(0, MH)];
  const shadowQ = hull([...out, ...[[0, 0], [MW, 0], [MW, MH], [0, MH]].map(([u, v]) => { const [X, Z] = L3(u, v); return P(X - 40, Z - 22); })]);
  const fold = `<path d="M${S(MW / 2, 0).join(' ')} L ${S(MW / 2, MH).join(' ')}" stroke="#fff" stroke-width="3" opacity=".7"/><path d="M${S(MW / 2 + 3, 0).join(' ')} L ${S(MW / 2 + 3, MH).join(' ')}" stroke="${C.ink2}" stroke-width="2" opacity=".12"/>
    <path d="M${S(0, MH / 2).join(' ')} L ${S(MW, MH / 2).join(' ')}" stroke="#fff" stroke-width="3" opacity=".6"/>`;
  return `<defs><linearGradient id="dir-mir" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F3D88E"/><stop offset=".6" stop-color="#E2B95C"/><stop offset="1" stop-color="#C9932F"/></linearGradient><filter id="dir-b18" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="18"/></filter><filter id="dir-b6" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6"/></filter></defs><defs>${defs}</defs>
  ${poly(shadowQ, C.ink2, 'opacity=".45" filter="url(#dir-b18)"')}
  ${poly([S(0, MH), S(MW, MH), S(MW, MH, -4), S(0, MH, -4)], '#CFC2A6')}
  ${tiles}${poly([S(MW / 2, 0), S(MW, 0), S(MW, MH), S(MW / 2, MH)], '#fff', 'opacity=".08"')}${fold}
  ${compass()}`;
};
