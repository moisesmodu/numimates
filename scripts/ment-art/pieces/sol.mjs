import { C } from '../base.mjs';
// Sol i lluna: tauler de fusta 6×6 amb sols daurats i llunes, caselles buides i marques «=» i «×» entre caselles; dues fitxes soltes a la taula
let GROUND = [];
const shadowEl = (cx, cy, rx, ry = 22, op = .35) => (GROUND.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${C.ink2}" opacity="${op}" filter="url(#solS)"/>`), '');
const G = ['SSMMSM', 'MMSSMS', 'SMSMMS', 'MSMSSM', 'SMMSMS', 'MSSMSM'];
const EMPTY = new Set(['0,2', '0,5', '1,0', '1,3', '2,1', '2,4', '3,3', '3,5', '4,0', '4,2', '5,1', '5,4']);
const MARKS = [[0, 4, 0, 5], [2, 0, 2, 1], [3, 3, 4, 3], [4, 1, 4, 2], [1, 2, 1, 3], [5, 3, 5, 4], [0, 2, 1, 2]];
// sol: disc + 8 raigs
export const sun = (R = 27) => {
  let rays = '';
  for (let i = 0; i < 8; i++) rays += `<path d="M-6 ${-R - 3} L0 ${-R - 11} L6 ${-R - 3}Z" transform="rotate(${i * 45 + 22.5})" fill="${C.gold2}" stroke="${C.gold2}" stroke-width="4" stroke-linejoin="round"/>`;
  return `${rays}<circle r="${R}" fill="${C.gold2}"/><circle cx="2" cy="-2" r="${R - 3}" fill="${C.gold}"/>
    <ellipse cx="${R * .36}" cy="${-R * .42}" rx="${R * .26}" ry="${R * .14}" transform="rotate(-35 ${R * .36} ${-R * .42})" fill="#FFF3CF" opacity=".85"/>`;
};
const moon = (col = C.ink) => `<rect x="-40" y="-40" width="80" height="80" fill="${col}" mask="url(#solMoon)"/>
    <rect x="-40" y="-40" width="80" height="80" fill="${C.em2}" mask="url(#solMoonL)" opacity=".9"/>`;
const render = () => {
  const cell = 80, gs = cell * 6, pad = 30, bw = gs + 2 * pad, bh = bw;
  const bx = 960 - bw / 2 - 20, by = 712 - bh, rot = -2;
  const gx = bx + pad, gy = by + pad, gap = 7;
  let cells = '', tokens = '', marks = '';
  for (let r = 0; r < 6; r++) for (let c = 0; c < 6; c++) {
    const x = gx + c * cell + gap / 2, y = gy + r * cell + gap / 2, w = cell - gap;
    cells += `<rect x="${x}" y="${y}" width="${w}" height="${w}" rx="10" fill="#F5ECDA"/>
      <path d="M${x + 4} ${y + 5} H ${x + w - 5} V ${y + w - 4}" stroke="#C9B48E" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>`;
    if (EMPTY.has(`${r},${c}`)) continue;
    const cx = x + w / 2, cy = y + w / 2;
    tokens += `<g transform="translate(${cx} ${cy})">${G[r][c] === 'S' ? sun(19) : `<g transform="scale(.86)">${moon()}</g>`}</g>`;
  }
  for (const [r1, c1, r2, c2] of MARKS) {
    const eq = G[r1][c1] === G[r2][c2];
    const mx = gx + (c1 + c2 + 1) * cell / 2, my = gy + (r1 + r2 + 1) * cell / 2;
    const sym = eq ? `<path d="M-6 -3.5 H6 M-6 3.5 H6" stroke="${C.ink}" stroke-width="3.2" stroke-linecap="round"/>`
      : `<path d="M-5 -5 L5 5 M5 -5 L-5 5" stroke="${C.coral2}" stroke-width="3.2" stroke-linecap="round"/>`;
    marks += `<g transform="translate(${mx} ${my})"><circle r="14" fill="#9E6A35" opacity=".35" transform="translate(-2 3)"/><circle r="13" fill="${C.white}"/>${sym}</g>`;
  }
  const board = `<g transform="rotate(${rot} ${bx + bw / 2} ${by + bh})">
    <rect x="${bx + 12}" y="${by + 12}" width="${bw}" height="${bh}" rx="26" fill="${C.wood2}"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="26" fill="#DDA868"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="26" fill="none" stroke="#fff" stroke-width="2" opacity=".25"/>
    <path d="M${bx + 14} ${by + 90} q 10 200 -2 420 M${bx + bw - 14} ${by + 60} q -8 220 4 430" stroke="${C.wood2}" stroke-width="3" fill="none" opacity=".35"/>
    <path d="M${bx + 40} ${by + 10} q 200 6 ${bw - 80} -2" stroke="#F0C68E" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>
    ${cells}${tokens}${marks}
  </g>`;
  // fitxes soltes: discs de ceràmica crema amb el sol / la lluna, plans a la taula
  const chip = (x, y, icon) => `${shadowEl(x - 16, y + 20, 70, 16, .5)}<g transform="translate(${x} ${y})">
    <ellipse cx="-3" cy="10" rx="56" ry="27" fill="#BFB297"/><rect x="-59" y="0" width="112" height="10" fill="#BFB297"/>
    <ellipse cx="0" cy="0" rx="56" ry="27" fill="${C.white}"/><ellipse cx="0" cy="0" rx="46" ry="21" fill="none" stroke="#E2D8C2" stroke-width="3"/>
    <g transform="scale(1 .5)">${icon}</g></g>`;
  const loose = chip(1290, 716, sun(22)) + chip(1412, 740, `<g transform="scale(.95)">${moon()}</g>`);
  GROUND.push(`<filter id="solS" x="-60%" y="-400%" width="220%" height="900%"><feGaussianBlur stdDeviation="12"/></filter>
  <filter id="solB" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
  <mask id="solMoon" maskUnits="userSpaceOnUse" x="-40" y="-40" width="80" height="80"><circle r="26" fill="#fff"/><circle cx="11" cy="-9" r="22" fill="#000"/></mask>
  <mask id="solMoonL" maskUnits="userSpaceOnUse" x="-40" y="-40" width="80" height="80"><circle r="26" fill="#fff"/><circle cx="4" cy="-4" r="25" fill="#000"/><circle cx="11" cy="-9" r="22" fill="#000"/></mask>
  <path d="M${bx + bw} ${by + bh - 8} L${bx + 10} ${by + bh - 8} L${bx - 260} ${by + bh + 64} L${bx + bw - 260} ${by + bh + 64}Z" fill="${C.ink2}" opacity=".34" filter="url(#solB)"/>
  <path d="M${bx - 6} ${by + 30} L${bx + bw - 30} ${by + 20} L${bx + bw - 60} ${by + bh - 160} L${bx - 50} ${by + bh - 150}Z" fill="${C.ink2}" opacity=".16" filter="url(#solB)" transform="translate(-34 26)"/>
  ${shadowEl(bx + bw / 2 - 10, by + bh + 6, bw / 2 + 10, 14, .55)}`);
  return `${board}${loose}`;
};
const build = () => { GROUND = []; const objs = render(); return { objs, ground: GROUND.join('') }; };
export const opts = { extra: build().ground };
export default () => build().objs;
