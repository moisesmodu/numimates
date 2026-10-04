import { C } from '../base.mjs';
// Quatre grups: safata amb 16 fitxes arrodonides (barres grises en lloc de paraules), la fila de dalt ja resolta en daurat i dues fitxes seleccionades i aixecades; una fitxa solta a la taula
let GROUND = [];
const shadowEl = (cx, cy, rx, ry = 22, op = .35) => (GROUND.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${C.ink2}" opacity="${op}" filter="url(#grpS)"/>`), '');
let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const SEL = new Set(['2,1', '3,2']);
const tile = (x, y, w, h, sel) => {
  const bar = 72 + Math.round(rnd() * 30);
  if (sel) return `<rect x="${x - 9}" y="${y + 14}" width="${w}" height="${h}" rx="16" fill="#0B231F" opacity=".45"/>
    <rect x="${x - 4}" y="${y + 6}" width="${w}" height="${h}" rx="16" fill="${C.em2}"/>
    <rect x="${x}" y="${y - 4}" width="${w}" height="${h}" rx="16" fill="${C.em}"/>
    <path d="M${x + 24} ${y + 4} H ${x + w - 18} Q ${x + w - 8} ${y + 4} ${x + w - 8} ${y + 14} V ${y + 28}" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".45"/>
    <rect x="${x + (w - bar) / 2}" y="${y + h / 2 - 9}" width="${bar}" height="9" rx="4.5" fill="${C.white}" opacity=".95"/>`;
  return `<rect x="${x - 5}" y="${y + 6}" width="${w}" height="${h}" rx="16" fill="#CDBE9C"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="#F4EDDC"/>
    <path d="M${x + 24} ${y + 7} H ${x + w - 18} Q ${x + w - 8} ${y + 7} ${x + w - 8} ${y + 17} V ${y + 30}" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>
    <rect x="${x + (w - bar) / 2}" y="${y + h / 2 - 5}" width="${bar}" height="9" rx="4.5" fill="#9AA5A0"/>`;
};
const render = () => {
  seed = 11;
  const W = 132, H = 92, gap = 16, iw = 4 * W + 5 * gap, ih = 4 * H + 5 * gap, pad = 22;
  const bw = iw + 2 * pad, bh = ih + 2 * pad, bx = 960 - bw / 2 - 20, by = 714 - bh, rot = -2;
  const gx = bx + pad, gy = by + pad;
  let tiles = '';
  // fila resolta (daurada)
  const sx = gx + gap, sy = gy + gap, sw = 4 * W + 3 * gap;
  tiles += `<rect x="${sx - 5}" y="${sy + 6}" width="${sw}" height="${H}" rx="16" fill="${C.gold2}"/>
    <rect x="${sx}" y="${sy}" width="${sw}" height="${H}" rx="16" fill="${C.gold}"/>
    <path d="M${sx + 30} ${sy + 7} H ${sx + sw - 18} Q ${sx + sw - 8} ${sy + 7} ${sx + sw - 8} ${sy + 17} V ${sy + 32}" stroke="#FFF3CF" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/>
    <rect x="${sx + sw / 2 - 80}" y="${sy + 26}" width="160" height="14" rx="7" fill="${C.ink}" opacity=".75"/>
    <rect x="${sx + sw / 2 - 150}" y="${sy + 54}" width="300" height="10" rx="5" fill="${C.ink}" opacity=".35"/>`;
  const sel = [];
  for (let r = 1; r < 4; r++) for (let c = 0; c < 4; c++) {
    const x = gx + gap + c * (W + gap), y = gy + gap + r * (H + gap);
    if (SEL.has(`${r},${c}`)) sel.push([x, y]); else tiles += tile(x, y, W, H, false);
  }
  tiles += sel.map(([x, y]) => tile(x, y, W, H, true)).join('');
  const tray = `<g transform="rotate(${rot} ${bx + bw / 2} ${by + bh})">
    <rect x="${bx + 12}" y="${by + 12}" width="${bw}" height="${bh}" rx="26" fill="${C.wood2}"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="26" fill="${C.wood}"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="26" fill="none" stroke="#fff" stroke-width="2" opacity=".22"/>
    <path d="M${bx + 40} ${by + 9} q 240 6 ${bw - 80} -2" stroke="#E2AE6E" stroke-width="5" fill="none" stroke-linecap="round" opacity=".85"/>
    <rect x="${gx}" y="${gy}" width="${iw}" height="${ih}" rx="14" fill="${C.ink}"/>
    <rect x="${gx}" y="${gy}" width="${iw}" height="14" rx="7" fill="#0B231F" opacity=".5"/>
    ${tiles}
  </g>`;
  // fitxa solta, plana a la taula
  const lx = 1340, ly = 732;
  const loose = `${shadowEl(lx - 16, ly + 20, 86, 16, .5)}<g transform="translate(${lx} ${ly})">
    <g transform="translate(-3 10) scale(1 .52) rotate(-12)"><rect x="-66" y="-46" width="132" height="92" rx="16" fill="#CDBE9C"/></g>
    <g transform="scale(1 .52) rotate(-12)"><rect x="-66" y="-46" width="132" height="92" rx="16" fill="#F4EDDC"/><rect x="-44" y="-5" width="88" height="9" rx="4.5" fill="#9AA5A0"/></g></g>`;
  GROUND.push(`<filter id="grpS" x="-60%" y="-400%" width="220%" height="900%"><feGaussianBlur stdDeviation="12"/></filter>
  <filter id="grpB" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
  <path d="M${bx + bw} ${by + bh - 8} L${bx + 10} ${by + bh - 8} L${bx - 260} ${by + bh + 64} L${bx + bw - 260} ${by + bh + 64}Z" fill="${C.ink2}" opacity=".34" filter="url(#grpB)"/>
  <path d="M${bx - 6} ${by + 30} L${bx + bw - 30} ${by + 20} L${bx + bw - 60} ${by + bh - 160} L${bx - 50} ${by + bh - 150}Z" fill="${C.ink2}" opacity=".16" filter="url(#grpB)" transform="translate(-34 26)"/>
  ${shadowEl(bx + bw / 2 - 10, by + bh + 6, bw / 2 + 10, 14, .55)}`);
  return `${tray}${loose}`;
};
const build = () => { GROUND = []; const objs = render(); return { objs, ground: GROUND.join('') }; };
export const opts = { extra: build().ground };
export default () => build().objs;
