import { C } from '../base.mjs';
// Llista de la compra: una llibreta d'espiral amb la llista escrita a mà (gargots, cap paraula), un llapis i una bossa de paper amb una barra de pa
export const opts = { floor: .54 };
const V = { cx: 960, yh: -460, yf: 790, D: 2300 };
const P = (X, Z, Y = 0) => { const k = 1 / (1 + Z / V.D); return [V.cx + X * k, V.yh + (V.yf - V.yh) * k - Y * k]; };
const pts = a => a.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
const poly = (a, fill, ex = '') => `<polygon points="${pts(a)}" fill="${fill}" ${ex}/>`;
const aff = (X, Z, a = 0, Y = 0) => { const c = Math.cos(a), s = Math.sin(a), o = P(X, Z, Y), u = P(X + c, Z + s, Y), v = P(X + s, Z - c, Y);
  return `matrix(${(u[0] - o[0]).toFixed(4)} ${(u[1] - o[1]).toFixed(4)} ${(v[0] - o[0]).toFixed(4)} ${(v[1] - o[1]).toFixed(4)} ${o[0].toFixed(1)} ${o[1].toFixed(1)})`; };
const rot = (cx, cz, a) => ([x, z]) => { const c = Math.cos(a), s = Math.sin(a), dx = x - cx, dz = z - cz; return [cx + dx * c - dz * s, cz + dx * s + dz * c]; };
// pseudoatzar determinista
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
// gargot en lletra lligada: trocoide amb bucles i espais entre «paraules»
const scrawl = (x, y, len, h = 15) => { let d = `M${x} ${y}`, t = 0, X = x; const words = []; let w = 0;
  while (X < x + len) { const tall = rnd() < .18, r = h * (tall ? 1.2 : .55 + rnd() * .45), loop = tall || rnd() < .3; for (let i = 1; i <= 6; i++) { const tt = t + i / 6 * Math.PI * 2; const px = X + i / 6 * 22 - (loop ? r * .55 : r * .25) * Math.sin(tt); const py = y - r * (1 - Math.cos(tt)) * .5; d += ` L${px.toFixed(1)} ${py.toFixed(1)}`; } X += 22; w++;
    if (w > 2 + rnd() * 4 && X < x + len - 40) { X += 18; d += ` M${X.toFixed(1)} ${y}`; w = 0; } }
  return d; };
export default () => {
  // ── llibreta ──
  const NW = 500, NH = 640, nx = -190, nz = 330, na = -0.14;
  let lines = '', ink = '';
  for (let i = 0; i < 11; i++) lines += `<line x1="${-NW / 2 + 30}" y1="${-NH / 2 + 128 + i * 40}" x2="${NW / 2 - 26}" y2="${-NH / 2 + 128 + i * 40}" stroke="${C.blue}" stroke-width="1.6" opacity=".22"/>`;
  lines += `<line x1="${-NW / 2 + 72}" y1="${-NH / 2 + 70}" x2="${-NW / 2 + 72}" y2="${NH / 2 - 16}" stroke="${C.coral}" stroke-width="2" opacity=".45"/>`;
  ink += `<path d="${scrawl(-NW / 2 + 92, -NH / 2 + 100, 170, 17)}" stroke="${C.ink}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M${-NW / 2 + 90} ${-NH / 2 + 110} q 90 6 190 -2" stroke="${C.coral}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  const lens = [210, 150, 250, 180, 130, 230, 170];
  lens.forEach((L, i) => { const y = -NH / 2 + 166 + i * 40 + 40;
    ink += `<path d="${scrawl(-NW / 2 + 92, y, L)}" stroke="${C.ink}" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".88"/>`;
    ink += `<circle cx="${-NW / 2 + 52}" cy="${y - 7}" r="5" fill="${C.ink}" opacity=".75"/>`;
    if (i === 1 || i === 3) ink += `<path d="M${-NW / 2 + 86} ${y - 8} L ${-NW / 2 + 102 + L} ${y - 10}" stroke="${C.ink}" stroke-width="3" opacity=".8" stroke-linecap="round"/><path d="M${NW / 2 - 70} ${y - 10} l 10 12 l 22 -28" stroke="${C.em}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  });
  const rings = [...Array(9).keys()].map(i => { const x = -NW / 2 + 44 + i * 44; return `<circle cx="${x}" cy="${-NH / 2 + 24}" r="7" fill="${C.ink2}" opacity=".8"/><path d="M${x - 6} ${-NH / 2 + 26} C ${x - 10} ${-NH / 2 - 14}, ${x + 12} ${-NH / 2 - 14}, ${x + 8} ${-NH / 2 + 4}" stroke="#9AA6A2" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M${x - 5} ${-NH / 2 + 18} C ${x - 7} ${-NH / 2 - 8}, ${x + 6} ${-NH / 2 - 10}, ${x + 6} ${-NH / 2 - 2}" stroke="#E6ECEA" stroke-width="2.5" fill="none" stroke-linecap="round"/>`; }).join('');
  // llapis damunt la llibreta (coordenades locals de la llibreta)
  const pencil = `<g transform="translate(70 40) rotate(-58)">
    <rect x="-210" y="-13" width="380" height="26" rx="4" fill="${C.ink2}" opacity=".35" filter="url(#lli-b6)" transform="translate(-10 14)"/>
    <rect x="-200" y="-13" width="330" height="26" fill="${C.gold}"/><rect x="-200" y="-13" width="330" height="9" fill="#F3D58E"/><rect x="-200" y="4" width="330" height="9" fill="${C.gold2}"/>
    <rect x="-236" y="-13" width="38" height="26" rx="5" fill="${C.coral}"/><rect x="-206" y="-14" width="26" height="28" fill="#B9C2BF"/><rect x="-206" y="-14" width="26" height="8" fill="#DCE2E0"/><line x1="-198" y1="-14" x2="-198" y2="14" stroke="#8E9996" stroke-width="2"/><line x1="-190" y1="-14" x2="-190" y2="14" stroke="#8E9996" stroke-width="2"/>
    <path d="M130 -13 L 178 -3 L 178 3 L 130 13Z" fill="#E8C39A"/><path d="M130 4 L 178 3 L 130 13Z" fill="#CFA06C"/><path d="M166 -4 L 186 0 L 166 4Z" fill="${C.ink}"/></g>`;
  const notebook = `<g transform="${aff(nx - 26, nz - 16, na)}"><rect x="${-NW / 2}" y="${-NH / 2}" width="${NW}" height="${NH}" rx="12" fill="${C.ink2}" opacity=".45" filter="url(#lli-b18)"/></g>
    <g transform="${aff(nx, nz, na, 0)}"><rect x="${-NW / 2}" y="${-NH / 2}" width="${NW}" height="${NH}" rx="12" fill="${C.ink}"/></g>
    <g transform="${aff(nx, nz, na, 6)}"><rect x="${-NW / 2 + 2}" y="${-NH / 2}" width="${NW - 4}" height="${NH - 2}" rx="10" fill="#E3D9C4"/></g>
    <g transform="${aff(nx, nz, na, 12)}"><rect x="${-NW / 2}" y="${-NH / 2}" width="${NW}" height="${NH - 6}" rx="10" fill="${C.white}"/>${lines}${ink}${rings}${pencil}</g>`;
  // ── bossa de paper (caixa oberta) amb una barra de pa ──
  const bx = 330, bz = 330, R = rot(bx, bz, 0.30), bw = 280, bd = 160, bh = 360;
  const cs = [[bx - bw / 2, bz - bd / 2], [bx + bw / 2, bz - bd / 2], [bx + bw / 2, bz + bd / 2], [bx - bw / 2, bz + bd / 2]].map(R);
  const T = cs.map(p => P(p[0], p[1], bh)), B = cs.map(p => P(p[0], p[1], 0));
  const front = [T[0], T[1], B[1], B[0]], right = [T[1], T[2], B[2], B[1]], left = [T[3], T[0], B[0], B[3]];
  const rimH = 34; const Tr = cs.map(p => P(p[0], p[1], bh - rimH));
  const sh = cs.map(([x, z]) => [x - bh * .55, z - bh * .22]);
  const hull = ps => { const q = [...ps].sort((a, b) => a[0] - b[0] || a[1] - b[1]); const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]); const lo = [], up = []; for (const p of q) { while (lo.length > 1 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); } for (const p of q.reverse()) { while (up.length > 1 && cr(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); } return lo.slice(0, -1).concat(up.slice(0, -1)); };
  const shadowPoly = hull([...cs, ...sh].map(p => P(p[0], p[1])));
  // barra de pa: surt de dins la bossa cap amunt i a l'esquerra
  const b0 = P(...R([bx - 20, bz + 10]), bh - 120), b1 = P(...R([bx - 150, bz - 10]), bh + 250);
  const ang = Math.atan2(b1[1] - b0[1], b1[0] - b0[0]) * 180 / Math.PI, blen = Math.hypot(b1[0] - b0[0], b1[1] - b0[1]);
  const scores = [0.42, 0.58, 0.74, 0.88].map(t => `<path d="M${blen * t - 22} -22 q 22 6 40 22" stroke="#F3D3A0" stroke-width="9" fill="none" stroke-linecap="round"/>`).join('');
  const baguette = `<g transform="translate(${b0[0]} ${b0[1]}) rotate(${ang})"><rect x="-20" y="-40" width="${blen + 40}" height="80" rx="40" fill="${C.wood}"/><rect x="-20" y="-40" width="${blen + 40}" height="44" rx="22" fill="#DFA766"/><path d="M-10 26 h${blen + 10}" stroke="${C.wood2}" stroke-width="12" stroke-linecap="round" opacity=".55"/>${scores}</g>`;
  // segona barra, més curta, darrere
  const c0 = P(...R([bx + 40, bz + 30]), bh - 110), c1 = P(...R([bx + 5, bz + 20]), bh + 150);
  const ang2 = Math.atan2(c1[1] - c0[1], c1[0] - c0[0]) * 180 / Math.PI, blen2 = Math.hypot(c1[0] - c0[0], c1[1] - c0[1]);
  const leaves = `<g transform="translate(${c0[0]} ${c0[1]}) rotate(${ang2})">
    <path d="M0 0 C ${blen2 * .4} -30 ${blen2 * .8} -40 ${blen2 + 30} -10 C ${blen2 * .8} 20 ${blen2 * .4} 26 0 0Z" fill="${C.em2}"/>
    <path d="M0 6 C ${blen2 * .4} 40 ${blen2 * .9} 60 ${blen2 + 10} 50 C ${blen2 * .8} 30 ${blen2 * .4} 20 0 6Z" fill="${C.em}"/>
    <path d="M0 -4 C ${blen2 * .5} -60 ${blen2 * .8} -80 ${blen2 - 10} -70 C ${blen2 * .7} -40 ${blen2 * .4} -20 0 -4Z" fill="${C.green}"/></g>`;
  const zig = (a, b, col) => { const n = 18; let d = `M${a[0]} ${a[1]}`; for (let k = 1; k <= n; k++) { const t = k / n, x = a[0] + (b[0] - a[0]) * t, y = a[1] + (b[1] - a[1]) * t - (k % 2 ? 7 : 0); d += ` L${x.toFixed(1)} ${y.toFixed(1)}`; } return `<path d="${d} L ${b[0]} ${b[1] + 4} L ${a[0]} ${a[1] + 4}Z" fill="${col}"/><path d="${d}" stroke="#F6E2BF" stroke-width="2" fill="none"/>`; };
  // cares visibles (cap a la càmera), amb to segons la llum (de dalt a la dreta)
  const m = [bx, bz]; let sides = '';
  cs.forEach((a, i) => { const b = cs[(i + 1) % 4]; let n = [b[1] - a[1], -(b[0] - a[0])]; const mx = (a[0] + b[0]) / 2 - m[0], mz = (a[1] + b[1]) / 2 - m[1]; if (n[0] * mx + n[1] * mz < 0) n = [-n[0], -n[1]]; const ln = Math.hypot(...n); n = [n[0] / ln, n[1] / ln];
    if (n[0] * (0 - (a[0] + b[0]) / 2) + n[1] * (-V.D - (a[1] + b[1]) / 2) <= 0) return; const d = n[0] * .82 + n[1] * .57, j = (i + 1) % 4;
    const tone = d > .2 ? ['#E2B87E', '#EDCB95'] : d > -.5 ? ['#CF9F63', '#DDB073'] : ['#B5844C', '#C49460'];
    sides += poly([T[i], T[j], B[j], B[i]], tone[0]) + poly([T[i], T[j], Tr[j], Tr[i]], tone[1]) + zig(T[i], T[j], tone[1]); });
  const crease = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const bag = `${poly(shadowPoly, C.ink2, 'opacity=".62" filter="url(#lli-b18)"')}${poly(hull(cs.map(([x, z]) => [x - 22, z - 10]).concat(cs)).map(p => P(p[0], p[1])), C.ink2, 'opacity=".7" filter="url(#lli-b6)"')}
    ${poly([T[0], T[1], T[2], T[3]], '#8C6236')}${poly([T[2], T[3], Tr[3], Tr[2]], '#7A532C')}
    ${baguette}
    ${sides}
    <path d="M${crease(T[1], T[2], .5).join(' ')} L ${crease(B[1], B[2], .5).join(' ')}" stroke="#C99E66" stroke-width="3" opacity=".8"/>
    <path d="M${crease(Tr[0], Tr[1], .02).join(' ')} L ${crease(Tr[0], Tr[1], .98).join(' ')}" stroke="#B0834D" stroke-width="2" opacity=".6"/>
    ${poly([crease(B[0], T[0], .0), crease(B[1], T[1], .0), crease(B[1], T[1], .08), crease(B[0], T[0], .08)], '#B98950', 'opacity=".55"')}`;
  const oc = P(150, 30), orange = `<ellipse cx="${oc[0] - 40}" cy="${oc[1] + 4}" rx="70" ry="16" fill="${C.ink2}" opacity=".4" filter="url(#lli-b6)"/>
    <circle cx="${oc[0]}" cy="${oc[1] - 52}" r="56" fill="${C.coral}"/><path d="M${oc[0] - 56} ${oc[1] - 52} a56 56 0 0 0 100 34 a 62 62 0 0 1 -100 -34z" fill="${C.coral2}" opacity=".55"/>
    <ellipse cx="${oc[0] + 18}" cy="${oc[1] - 78}" rx="16" ry="10" fill="#fff" opacity=".35" transform="rotate(-30 ${oc[0] + 18} ${oc[1] - 78})"/>
    <path d="M${oc[0] + 2} ${oc[1] - 106} c 6 -14 26 -20 40 -14 c -10 12 -26 16 -40 14z" fill="${C.em2}"/><circle cx="${oc[0] + 2}" cy="${oc[1] - 106}" r="4" fill="${C.wood2}"/>`;
  return `<defs><filter id="lli-b6" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6"/></filter><filter id="lli-b18" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="18"/></filter></defs>
  ${notebook}${bag}${orange}`;
};
