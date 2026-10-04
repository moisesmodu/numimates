import { C } from '../base.mjs';
// Paraula amagada: tauler dret amb 6 files de 5 fitxes (3 de plenes en maragda / daurat / gris amb lletres sense sentit, 3 de buides); una tassa de te al costat
const FONT = `font-family="Montserrat, 'Helvetica Neue', Arial, sans-serif"`;
let GROUND = [];
const shadowEl = (cx, cy, rx, ry = 22, op = .35) => (GROUND.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${C.ink2}" opacity="${op}" filter="url(#wrdS)"/>`), '');
const ROWS = ['GROLT', 'BUNEP', 'DAMIX'];
const STATE = ['xxyxe', 'exxyx', 'eeyex'];
const FACE = { e: C.em, y: C.gold, x: '#94A09B' }, EDGE = { e: C.em2, y: C.gold2, x: '#6F7B77' };
const render = () => {
  const T = 80, gap = 11, iw = 5 * T + 6 * gap, ih = 6 * T + 7 * gap, pad = 26;
  const bw = iw + 2 * pad, bh = ih + 2 * pad, bx = 930 - bw / 2 - 30, by = 714 - bh, rot = -2;
  const gx = bx + pad, gy = by + pad;
  let tiles = '';
  for (let r = 0; r < 6; r++) for (let c = 0; c < 5; c++) {
    const x = gx + gap + c * (T + gap), y = gy + gap + r * (T + gap);
    if (r < 3) {
      const s = STATE[r][c];
      tiles += `<rect x="${x - 5}" y="${y + 6}" width="${T}" height="${T}" rx="10" fill="${EDGE[s]}"/>
        <rect x="${x}" y="${y}" width="${T}" height="${T}" rx="10" fill="${FACE[s]}"/>
        <path d="M${x + 22} ${y + 6} H ${x + T - 14} Q ${x + T - 6} ${y + 6} ${x + T - 6} ${y + 14} V ${y + 30}" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".45"/>
        <text x="${x + T / 2 + 1}" y="${y + T / 2 + 16}" text-anchor="middle" font-size="44" font-weight="700" fill="${C.white}" ${FONT}>${ROWS[r][c]}</text>`;
    } else {
      tiles += `<rect x="${x}" y="${y}" width="${T}" height="${T}" rx="10" fill="#EFE7D6"/>
        <rect x="${x + 2}" y="${y + 2}" width="${T - 4}" height="${T - 4}" rx="9" fill="none" stroke="#CFC2A6" stroke-width="3.5"/>
        <path d="M${x + 6} ${y + 6} H ${x + T - 6} V ${y + T - 6}" stroke="#D9CDB3" stroke-width="5" fill="none" opacity=".6"/>`;
    }
  }
  const board = `<g transform="rotate(${rot} ${bx + bw / 2} ${by + bh})">
    <rect x="${bx + 12}" y="${by + 12}" width="${bw}" height="${bh}" rx="24" fill="${C.wood2}"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="24" fill="${C.wood}"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="24" fill="none" stroke="#fff" stroke-width="2" opacity=".22"/>
    <path d="M${bx + 36} ${by + 9} q 160 5 ${bw - 72} -2" stroke="#E2AE6E" stroke-width="5" fill="none" stroke-linecap="round" opacity=".85"/>
    <rect x="${gx}" y="${gy}" width="${iw}" height="${ih}" rx="12" fill="${C.white}"/>
    <rect x="${gx}" y="${gy}" width="${iw}" height="10" rx="5" fill="#D9CFB8" opacity=".8"/>
    ${tiles}
  </g>`;
  // tassa de te amb bossa
  const cx = 1305, cb = 712;
  const cup = `${shadowEl(cx - 30, cb + 6, 120, 14, .55)}
    <ellipse cx="${cx}" cy="${cb}" rx="118" ry="24" fill="#D9CFB8"/><ellipse cx="${cx}" cy="${cb - 6}" rx="118" ry="22" fill="${C.white}"/><ellipse cx="${cx}" cy="${cb - 8}" rx="70" ry="12" fill="#E9E1CF"/>
    <path d="M${cx + 66} ${cb - 116} c 56 -4 60 70 -2 68" stroke="${C.coral}" stroke-width="20" fill="none"/><path d="M${cx + 66} ${cb - 116} c 56 -4 60 70 -2 68" stroke="${C.coral2}" stroke-width="6" fill="none" transform="translate(4 4)" opacity=".6"/>
    <path d="M${cx - 80} ${cb - 146} h160 l-10 110 a30 30 0 0 1 -30 26 h-80 a30 30 0 0 1 -30 -26z" fill="${C.coral}"/>
    <path d="M${cx - 80} ${cb - 146} h52 l6 136 h-18 a30 30 0 0 1 -30 -26z" fill="${C.coral2}" opacity=".7"/>
    <ellipse cx="${cx}" cy="${cb - 146}" rx="80" ry="15" fill="${C.coral2}"/><ellipse cx="${cx}" cy="${cb - 144}" rx="70" ry="11" fill="#B9762F"/><ellipse cx="${cx + 14}" cy="${cb - 146}" rx="30" ry="4" fill="#E0A458" opacity=".7"/>
    <path d="M${cx + 50} ${cb - 98} l-6 68" stroke="#fff" stroke-width="9" opacity=".5" stroke-linecap="round"/>
    <path d="M${cx - 40} ${cb - 148} C ${cx - 66} ${cb - 160} ${cx - 92} ${cb - 140} ${cx - 98} ${cb - 104}" stroke="${C.cream}" stroke-width="2.5" fill="none"/>
    <rect x="${cx - 118}" y="${cb - 108}" width="40" height="46" rx="4" fill="${C.gold}" transform="rotate(-6 ${cx - 98} ${cb - 86})"/><rect x="${cx - 118}" y="${cb - 108}" width="14" height="46" rx="4" fill="${C.gold2}" opacity=".6" transform="rotate(-6 ${cx - 98} ${cb - 86})"/>
    <path d="M${cx - 24} ${cb - 176} c -18 -26 18 -40 0 -70 M${cx + 18} ${cb - 172} c -18 -26 18 -40 0 -70" stroke="#fff" stroke-width="8" fill="none" opacity=".65" stroke-linecap="round"/>`;
  GROUND.push(`<filter id="wrdS" x="-60%" y="-400%" width="220%" height="900%"><feGaussianBlur stdDeviation="14"/></filter>
  <filter id="wrdB" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
  <path d="M${bx + bw} ${by + bh - 8} L${bx + 10} ${by + bh - 8} L${bx - 260} ${by + bh + 64} L${bx + bw - 260} ${by + bh + 64}Z" fill="${C.ink2}" opacity=".34" filter="url(#wrdB)"/>
  <path d="M${bx - 6} ${by + 30} L${bx + bw - 30} ${by + 20} L${bx + bw - 60} ${by + bh - 160} L${bx - 50} ${by + bh - 150}Z" fill="${C.ink2}" opacity=".16" filter="url(#wrdB)" transform="translate(-34 26)"/>
  ${shadowEl(bx + bw / 2 - 10, by + bh + 6, bw / 2 + 10, 14, .55)}`);
  return `${board}${cup}`;
};
const build = () => { GROUND = []; const objs = render(); return { objs, ground: GROUND.join('') }; };
export const opts = { extra: build().ground };
export default () => build().objs;
