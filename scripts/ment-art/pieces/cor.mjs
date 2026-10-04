import { C } from '../base.mjs';
// Corones: tauler 6×6 dividit en 6 regions de colors apagats amb vores gruixudes, 3 corones daurades i algunes «×»; una corona gran a la taula
let GROUND = [];
const shadowEl = (cx, cy, rx, ry = 22, op = .35) => (GROUND.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${C.ink2}" opacity="${op}" filter="url(#corS)"/>`), '');
const REG = ['AABBBB', 'AACBBD', 'ACCCDD', 'EECFFD', 'EECFFD', 'EEFFFD'];
const COL = { A: '#A9D6C6', B: '#F1D48F', C: '#EAA991', D: '#C6B5DE', E: '#A9C4E2', F: '#EADDC3' };
const QUEENS = ['0,1', '2,5', '4,2'];
const CROSSES = ['0,0', '1,2', '3,4', '5,1', '1,4', '3,1'];
// corona centrada a (0,0), ~104 d'ample
export const crown = () => `
  <path d="M-46 30 L-54 -22 L-24 2 L0 -38 L24 2 L54 -22 L46 30Z" fill="${C.gold}"/>
  <path d="M-46 30 L-54 -22 L-24 2 L-14 -14 L-20 30Z" fill="${C.gold2}" opacity=".55"/>
  <path d="M30 -2 L50 -16 L44 24" stroke="#FFF3CF" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>
  <rect x="-48" y="18" width="96" height="20" rx="5" fill="${C.gold2}"/>
  <rect x="-48" y="18" width="96" height="6" rx="3" fill="${C.gold}" opacity=".7"/>
  <circle cx="-22" cy="28" r="4.5" fill="${C.coral}"/><circle cx="0" cy="28" r="5" fill="${C.em}"/><circle cx="22" cy="28" r="4.5" fill="${C.coral}"/>
  <circle cx="-54" cy="-24" r="8" fill="${C.gold}"/><circle cx="0" cy="-40" r="9" fill="${C.gold}"/><circle cx="54" cy="-24" r="8" fill="${C.gold}"/>
  <circle cx="2" cy="-43" r="3" fill="#FFF3CF"/><circle cx="56" cy="-27" r="2.6" fill="#FFF3CF"/>`;
const render = () => {
  const cell = 82, gs = cell * 6, pad = 26, bw = gs + 2 * pad, bh = bw;
  const bx = 960 - bw / 2 - 30, by = 712 - bh, rot = -2;
  const gx = bx + pad, gy = by + pad;
  const at = (r, c) => (r < 0 || c < 0 || r > 5 || c > 5) ? null : REG[r][c];
  let fills = '', thin = '', thick = '', items = '';
  for (let r = 0; r < 6; r++) for (let c = 0; c < 6; c++) {
    const id = REG[r][c], x = gx + c * cell, y = gy + r * cell;
    fills += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${COL[id]}"/>`;
    if (at(r, c + 1) === id) thin += `M${x + cell} ${y} V${y + cell} `; else if (c < 5) thick += `M${x + cell} ${y} V${y + cell} `;
    if (at(r + 1, c) === id) thin += `M${x} ${y + cell} H${x + cell} `; else if (r < 5) thick += `M${x} ${y + cell} H${x + cell} `;
    const k = `${r},${c}`, cx = x + cell / 2, cy = y + cell / 2;
    if (QUEENS.includes(k)) items += `<g transform="translate(${cx + 1} ${cy + 6}) scale(.62)"><g transform="translate(-6 8)" opacity=".22"><path d="M-46 30 L-54 -22 L-24 2 L0 -38 L24 2 L54 -22 L46 30Z" fill="${C.ink2}"/></g>${crown()}</g>`;
    if (CROSSES.includes(k)) items += `<path d="M${cx - 10} ${cy - 10} L${cx + 10} ${cy + 10} M${cx + 10} ${cy - 10} L${cx - 10} ${cy + 10}" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" opacity=".5"/>`;
  }
  const board = `<g transform="rotate(${rot} ${bx + bw / 2} ${by + bh})">
    <rect x="${bx + 12}" y="${by + 12}" width="${bw}" height="${bh}" rx="22" fill="${C.ink2}"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="22" fill="${C.ink}"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="22" fill="none" stroke="#fff" stroke-width="2" opacity=".14"/>
    <path d="M${bx + 40} ${by + 9} q 200 5 ${bw - 80} -2" stroke="#3E7A6E" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>
    <clipPath id="corG"><rect x="${gx}" y="${gy}" width="${gs}" height="${gs}" rx="8"/></clipPath>
    <g clip-path="url(#corG)">${fills}
      <path d="M${gx} ${gy} L${gx + gs * .55} ${gy} L${gx} ${gy + gs * .55}Z" fill="#fff" opacity=".08"/>
      <path d="${thin}" stroke="${C.ink}" stroke-width="1.6" opacity=".28"/>
      <path d="${thick}" stroke="${C.ink}" stroke-width="6" stroke-linecap="round"/></g>
    <rect x="${gx}" y="${gy}" width="${gs}" height="${gs}" rx="8" fill="none" stroke="${C.ink}" stroke-width="6"/>
    ${items}
  </g>`;
  // corona gran dreta a la taula
  const big = `${shadowEl(1325, 736, 100, 14, .6)}<path d="M1330 734 L1180 780 L1120 780 L1250 730Z" fill="${C.ink2}" opacity=".3" filter="url(#corB)"/>
    <g transform="translate(1340 688) scale(1.4)">${crown()}</g>`;
  GROUND.push(`<filter id="corS" x="-60%" y="-400%" width="220%" height="900%"><feGaussianBlur stdDeviation="12"/></filter>
  <filter id="corB" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
  <path d="M${bx + bw} ${by + bh - 8} L${bx + 10} ${by + bh - 8} L${bx - 260} ${by + bh + 64} L${bx + bw - 260} ${by + bh + 64}Z" fill="${C.ink2}" opacity=".34" filter="url(#corB)"/>
  <path d="M${bx - 6} ${by + 30} L${bx + bw - 30} ${by + 20} L${bx + bw - 60} ${by + bh - 160} L${bx - 50} ${by + bh - 150}Z" fill="${C.ink2}" opacity=".16" filter="url(#corB)" transform="translate(-34 26)"/>
  ${shadowEl(bx + bw / 2 - 10, by + bh + 6, bw / 2 + 10, 14, .55)}`);
  return `${board}${big}`;
};
const build = () => { GROUND = []; const objs = render(); return { objs, ground: GROUND.join('') }; };
export const opts = { extra: build().ground };
export default () => build().objs;
