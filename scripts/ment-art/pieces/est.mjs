import { C, shadowEl } from '../base.mjs';
// A ull: un pot de vidre ple de caramels rodons i una petita balança de llautó
const f = n => +n.toFixed(1);
// pseudoaleatori determinista
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const PAL = [[C.coral, C.coral2], [C.gold, C.gold2], [C.em, C.em2], [C.red, C.red2], ['#FBF3E2', '#D9C6A3'], [C.coral, C.coral2], [C.gold, C.gold2], [C.em, C.em2], [C.blue, C.blue2]];
const sweet = (x, y, r, [c1, c2]) => `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="${c1}"/>
  <path d="M${f(x - r)} ${f(y)} a${r} ${r} 0 0 0 ${2 * r} 0 c -${f(r * .5)} ${f(r * .55)} -${f(r * 1.5)} ${f(r * .55)} -${2 * r} 0z" fill="${c2}" opacity=".9"/>
  <ellipse cx="${f(x + r * .35)}" cy="${f(y - r * .4)}" rx="${f(r * .3)}" ry="${f(r * .18)}" fill="#fff" opacity=".55" transform="rotate(-30 ${f(x + r * .35)} ${f(y - r * .4)})"/>`;
export default () => {
  seed = 7;
  // POT
  const x0 = 800, x1 = 1210, yb = 700, ys = 330, yn = 262, nk = 70, yl = 200;
  const cx = (x0 + x1) / 2;
  const jar = `M${x0 + 46} ${yb} q -46 0 -46 -46 V${ys} q 0 -50 ${nk} -58 V${yn} h${x1 - x0 - 2 * nk} V${ys - 58} q ${nk} 8 ${nk} 58 V${yb - 46} q 0 46 -46 46z`;
  const inner = `M${x0 + 56} ${yb - 14} q -40 0 -40 -40 V${ys + 6} q 0 -44 ${nk - 6} -52 V${yn + 4} h${x1 - x0 - 2 * (nk + 10)} V${ys - 46} q ${nk - 6} 8 ${nk - 6} 52 V${yb - 54} q 0 40 -40 40z`;
  let sweets = '';
  const r = 30, dy = r * 1.72;
  for (let row = 0, y = yb - 14 - r + 4; y > ys - 10; row++, y -= dy) {
    for (let x = x0 + 16 + (row % 2 ? r * 2 : r); x < x1 + r; x += r * 2.02) {
      const rr = r - 1 + rnd() * 3, jx = (rnd() - .5) * 8, jy = (rnd() - .5) * 8;
      sweets += sweet(x + jx, y + jy, f(rr), PAL[Math.floor(rnd() * PAL.length)]);
    }
  }
  const jarG = `<clipPath id="estIn"><path d="${inner}"/></clipPath>
  <path d="${jar}" fill="#DCE9E1" opacity=".55"/>
  <g clip-path="url(#estIn)">${sweets}
    <rect x="${x0}" y="${yn}" width="${x1 - x0}" height="${yb - yn}" fill="#E8F2EC" opacity=".12"/>
    <rect x="${x0 + 10}" y="${yn}" width="70" height="${yb - yn}" fill="${C.ink}" opacity=".16"/>
    <rect x="${x1 - 110}" y="${yn}" width="110" height="${yb - yn}" fill="#fff" opacity=".1"/>
  </g>
  <path d="${jar}" fill="none" stroke="#fff" stroke-width="5" opacity=".75"/>
  <path d="M${x0 + 4} ${yb - 60} V${ys + 10}" stroke="${C.ink}" stroke-width="6" opacity=".18" stroke-linecap="round"/>
  <rect x="${x1 - 64}" y="${ys + 20}" width="22" height="${yb - ys - 120}" rx="11" fill="#fff" opacity=".55"/>
  <rect x="${x1 - 34}" y="${ys + 40}" width="8" height="${yb - ys - 220}" rx="4" fill="#fff" opacity=".5"/>
  <path d="M${x1 - nk - 10} ${yn + 8} q ${nk - 10} 14 ${nk - 4} 60" stroke="#fff" stroke-width="8" fill="none" opacity=".55" stroke-linecap="round"/>
  <path d="M${x0 + 46} ${yb} h${x1 - x0 - 92} q 46 0 46 -18 h${-(x1 - x0)} q 0 18 46 18z" fill="#fff" opacity=".35"/>`;
  // tapa de llautó
  const lid = `<rect x="${x0 + nk - 12}" y="${yl + 30}" width="${x1 - x0 - 2 * nk + 24}" height="38" rx="8" fill="${C.gold2}"/>
  <rect x="${x0 + nk - 16}" y="${yl}" width="${x1 - x0 - 2 * nk + 32}" height="40" rx="10" fill="${C.gold}"/>
  ${[...Array(9).keys()].map(i => `<rect x="${x0 + nk + 2 + i * ((x1 - x0 - 2 * nk) / 8.4)}" y="${yl + 8}" width="5" height="26" rx="2.5" fill="${C.gold2}" opacity=".55"/>`).join('')}
  <rect x="${x1 - nk - 70}" y="${yl + 6}" width="60" height="8" rx="4" fill="#fff" opacity=".5"/>
  <rect x="${x0 + nk - 16}" y="${yl + 30}" width="${x1 - x0 - 2 * nk + 32}" height="10" rx="5" fill="${C.gold2}" opacity=".6"/>`;
  // BALANÇA
  const bx = 560, bt = 360, by = yb + 4, ang = -7, arm = 140, py = 165;
  const a = ang * Math.PI / 180, L = [bx - arm * Math.cos(a), bt - arm * Math.sin(a)], R = [bx + arm * Math.cos(a), bt + arm * Math.sin(a)];
  const pan = ([px, py0], content) => `<path d="M${f(px)} ${f(py0)} L${f(px - 78)} ${f(py0 + py)} M${f(px)} ${f(py0)} L${f(px + 78)} ${f(py0 + py)} M${f(px)} ${f(py0)} L${f(px + 14)} ${f(py0 + py - 4)}" stroke="${C.gold2}" stroke-width="2.5" opacity=".9"/>
    ${content}
    <path d="M${f(px - 92)} ${f(py0 + py)} h184 q -14 46 -92 46 q -78 0 -92 -46z" fill="${C.gold}"/>
    <path d="M${f(px - 92)} ${f(py0 + py)} h70 q -4 34 22 46 q -78 0 -92 -46z" fill="${C.gold2}" opacity=".55"/>
    <ellipse cx="${f(px)}" cy="${f(py0 + py)}" rx="92" ry="9" fill="${C.gold2}"/>
    <path d="M${f(px + 30)} ${f(py0 + py + 14)} q 40 0 52 -6" stroke="#fff" stroke-width="5" opacity=".5" fill="none" stroke-linecap="round"/>
    <circle cx="${f(px)}" cy="${f(py0)}" r="7" fill="${C.gold2}"/>`;
  const panL = pan(L, `${sweet(L[0] - 34, L[1] + py - 20, 22, PAL[0])}${sweet(L[0] + 12, L[1] + py - 20, 22, PAL[2])}${sweet(L[0] - 10, L[1] + py - 52, 22, PAL[1])}`);
  const wR = `<rect x="${f(R[0] - 30)}" y="${f(R[1] + py - 56)}" width="60" height="56" rx="8" fill="${C.gold}"/><rect x="${f(R[0] - 30)}" y="${f(R[1] + py - 56)}" width="20" height="56" rx="6" fill="${C.gold2}" opacity=".6"/><rect x="${f(R[0] - 10)}" y="${f(R[1] + py - 74)}" width="20" height="20" rx="6" fill="${C.gold2}"/><ellipse cx="${f(R[0])}" cy="${f(R[1] + py - 56)}" rx="30" ry="6" fill="#F3D58E"/>`;
  const panR = pan(R, wR);
  const scale = `
  ${shadowEl(bx - 10, by + 2, 120, 12, .55)}
  <path d="M${bx - 100} ${by} q 0 -26 30 -30 h140 q 30 4 30 30z" fill="${C.gold}"/>
  <path d="M${bx - 100} ${by} q 0 -26 30 -30 h50 q -18 10 -18 30z" fill="${C.gold2}" opacity=".6"/>
  <rect x="${bx - 100}" y="${by - 6}" width="200" height="10" rx="5" fill="${C.gold2}"/>
  <path d="M${bx - 30} ${by - 30} q 14 -10 16 -40 h28 q 2 30 16 40z" fill="${C.gold2}"/>
  <rect x="${bx - 9}" y="${bt}" width="18" height="${by - bt - 66}" fill="${C.gold}"/><rect x="${bx - 9}" y="${bt}" width="7" height="${by - bt - 66}" fill="${C.gold2}" opacity=".6"/>
  <path d="M${bx} ${bt + 10} l 0 70" stroke="${C.gold2}" stroke-width="4"/>
  <g transform="rotate(${ang} ${bx} ${bt})"><rect x="${bx - arm - 6}" y="${bt - 7}" width="${2 * arm + 12}" height="14" rx="7" fill="${C.gold}"/><rect x="${bx - arm - 6}" y="${bt - 7}" width="${2 * arm + 12}" height="5" rx="2.5" fill="#fff" opacity=".35"/>
    <path d="M${bx - 8} ${bt - 6} L${bx} ${bt - 64} L${bx + 8} ${bt - 6}z" fill="${C.gold2}"/></g>
  <circle cx="${bx}" cy="${bt}" r="16" fill="${C.gold2}"/><circle cx="${bx}" cy="${bt}" r="7" fill="${C.gold}"/>
  ${panL}${panR}`;
  return `<filter id="estB" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
  <path d="M${x1} ${yb - 10} L${x0 + 10} ${yb - 10} L${x0 - 230} ${yb + 66} L${x1 - 260} ${yb + 66}Z" fill="${C.ink2}" opacity=".32" filter="url(#estB)"/>
  ${shadowEl(cx - 20, yb + 4, (x1 - x0) / 2 + 10, 16, .55)}
  ${scale}
  ${jarG}${lid}`;
};
