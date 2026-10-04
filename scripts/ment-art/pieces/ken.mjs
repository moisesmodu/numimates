import { C } from '../base.mjs';
// Sumes i restes (KenKen): safata de fusta amb 16 rajoles de ceràmica agrupades en gàbies amb vores gruixudes i etiquetes (7+, 2−…); una rajola solta a la taula
const FONT = `font-family="Montserrat, 'Helvetica Neue', Arial, sans-serif"`;
let GROUND = [];
const shadowEl = (cx, cy, rx, ry = 22, op = .35) => (GROUND.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${C.ink2}" opacity="${op}" filter="url(#kenS)"/>`), '');
const SOL = ['1234', '3412', '2143', '4321'];
const CAGE = ['ABBC', 'ADCC', 'EDFF', 'EGGH'];
const LAB = { A: '2−', B: '5+', C: '7+', D: '3−', E: '6+', F: '1−', G: '5+', H: '1' };
const GLAZE = { A: 0, B: 1, C: 2, D: 3, E: 2, F: 0, G: 3, H: 1 };
const FACE = ['#F8F1DF', '#D3E9DF', '#F5E0AE', '#F3CFC1'], EDGE = ['#D6C8AA', '#9CC2B2', '#CFAE74', '#CC9C8A'];
const FILLED = { '0,0': 1, '2,2': 1, '3,1': 1 };
const tile = (x, y, T, g, label, digit) => `
  <rect x="${x - 7}" y="${y + 8}" width="${T}" height="${T}" rx="14" fill="${EDGE[g]}"/>
  <rect x="${x - 7}" y="${y + 8}" width="${T}" height="${T}" rx="14" fill="${C.ink2}" opacity=".18"/>
  <rect x="${x}" y="${y}" width="${T}" height="${T}" rx="14" fill="${FACE[g]}"/>
  <path d="M${x + 30} ${y + 7} H ${x + T - 16} Q ${x + T - 7} ${y + 7} ${x + T - 7} ${y + 16} V ${y + 44}" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".75"/>
  ${label ? `<text x="${x + 13}" y="${y + 31}" font-size="25" font-weight="700" fill="${C.ink}" ${FONT}>${label}</text>` : ''}
  ${digit ? `<text x="${x + T / 2 + 4}" y="${y + T / 2 + 26}" text-anchor="middle" font-size="68" font-weight="600" fill="${C.ink}" ${FONT}>${digit}</text>` : ''}`;
const render = () => {
  const T = 114, gap = 16, inner = 4 * T + 5 * gap, pad = 24;
  const bw = inner + 2 * pad, bh = bw, bx = 960 - bw / 2 - 10, by = 712 - bh, rot = -2;
  const gx = bx + pad, gy = by + pad;
  const at = (r, c) => (r < 0 || c < 0 || r > 3 || c > 3) ? null : CAGE[r][c];
  let tiles = '', walls = '';
  const seen = new Set();
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
    const id = CAGE[r][c], x = gx + gap + c * (T + gap), y = gy + gap + r * (T + gap);
    const first = !seen.has(id); seen.add(id);
    tiles += tile(x, y, T, GLAZE[id], first ? LAB[id] : '', FILLED[`${r},${c}`] ? SOL[r][c] : '');
    const h = gap / 2, x0 = x - h, x1 = x + T + h, y0 = y - h, y1 = y + T + h;
    if (at(r - 1, c) !== id) walls += `M${x0} ${y0} H${x1} `;
    if (at(r + 1, c) !== id) walls += `M${x0} ${y1} H${x1} `;
    if (at(r, c - 1) !== id) walls += `M${x0} ${y0} V${y1} `;
    if (at(r, c + 1) !== id) walls += `M${x1} ${y0} V${y1} `;
  }
  const tray = `<g transform="rotate(${rot} ${bx + bw / 2} ${by + bh})">
    <rect x="${bx + 12}" y="${by + 12}" width="${bw}" height="${bh}" rx="24" fill="${C.wood2}"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="24" fill="${C.wood}"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="24" fill="none" stroke="#fff" stroke-width="2" opacity=".22"/>
    <path d="M${bx + 40} ${by + 10} q 200 6 ${bw - 80} -2" stroke="#E2AE6E" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>
    <rect x="${gx}" y="${gy}" width="${inner}" height="${inner}" rx="12" fill="#B98A55"/>
    <rect x="${gx}" y="${gy}" width="${inner}" height="14" rx="7" fill="#8A5E30" opacity=".6"/>
    ${tiles}
    <path d="${walls}" stroke="${C.ink}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>`;
  // rajola solta, plana a la taula
  const s = 1.1, lx = 1345, ly = 722;
  const loose = `${shadowEl(lx - 18, ly + 24, 84, 18, .5)}<g transform="translate(${lx} ${ly})">
    <g transform="translate(0 ${18 * s}) scale(${s} ${s * .55}) rotate(-14)"><rect x="-57" y="-57" width="114" height="114" rx="14" fill="${EDGE[0]}"/><rect x="-57" y="-57" width="114" height="114" rx="14" fill="${C.ink2}" opacity=".25"/></g>
    <g transform="translate(0 ${9 * s}) scale(${s} ${s * .55}) rotate(-14)"><rect x="-57" y="-57" width="114" height="114" rx="14" fill="${EDGE[0]}"/></g>
    <g transform="scale(${s} ${s * .55}) rotate(-14)"><rect x="-57" y="-57" width="114" height="114" rx="14" fill="${FACE[0]}"/>
      <text x="0" y="24" text-anchor="middle" font-size="66" font-weight="600" fill="${C.ink}" ${FONT}>2</text></g></g>`;
  GROUND.push(`<filter id="kenS" x="-60%" y="-400%" width="220%" height="900%"><feGaussianBlur stdDeviation="14"/></filter>
  <filter id="kenB" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
  <path d="M${bx + bw} ${by + bh - 8} L${bx + 10} ${by + bh - 8} L${bx - 260} ${by + bh + 64} L${bx + bw - 260} ${by + bh + 64}Z" fill="${C.ink2}" opacity=".34" filter="url(#kenB)"/>
  <path d="M${bx - 6} ${by + 30} L${bx + bw - 30} ${by + 20} L${bx + bw - 60} ${by + bh - 160} L${bx - 50} ${by + bh - 150}Z" fill="${C.ink2}" opacity=".16" filter="url(#kenB)" transform="translate(-34 26)"/>
  ${shadowEl(bx + bw / 2 - 10, by + bh + 6, bw / 2 + 10, 14, .55)}`);
  return `${tray}${loose}`;
};
const build = () => { GROUND = []; const objs = render(); return { objs, ground: GROUND.join('') }; };
export const opts = { extra: build().ground };
export default () => build().objs;
