import { C, shadowEl } from '../base.mjs';
// L'intrús: una capsa d'ous de cartró amb dotze ous crema iguals i un d'or
const P0 = '#B4BCAC', P1 = '#C8CFBF', P2 = '#98A190', P3 = '#7F8977';

function egg(cx, cy, rx, ry, gold = false) {
  const base = gold ? '#EDC25E' : '#F8F1E3', sh = gold ? '#C38A24' : '#E2D5BC', hi = gold ? '#FFF1C4' : '#FFFFFF';
  const d = `M${cx} ${cy - ry} C ${cx + rx * .78} ${cy - ry} ${cx + rx} ${cy - ry * .1} ${cx + rx} ${cy + ry * .28} C ${cx + rx} ${cy + ry * .78} ${cx + rx * .55} ${cy + ry} ${cx} ${cy + ry} C ${cx - rx * .55} ${cy + ry} ${cx - rx} ${cy + ry * .78} ${cx - rx} ${cy + ry * .28} C ${cx - rx} ${cy - ry * .1} ${cx - rx * .78} ${cy - ry} ${cx} ${cy - ry}Z`;
  return `<path d="${d}" fill="${base}"/>
    <path d="M${cx - rx} ${cy + ry * .28} C ${cx - rx} ${cy + ry * .78} ${cx - rx * .55} ${cy + ry} ${cx} ${cy + ry} C ${cx - rx * .2} ${cy + ry * .7} ${cx - rx * .55} ${cy + ry * .1} ${cx - rx * .5} ${cy - ry * .7} C ${cx - rx * .8} ${cy - ry * .5} ${cx - rx} ${cy - ry * .1} ${cx - rx} ${cy + ry * .28}Z" fill="${sh}" opacity="${gold ? .9 : .75}"/>
    <ellipse cx="${cx + rx * .34}" cy="${cy - ry * .45}" rx="${rx * .2}" ry="${ry * .26}" fill="${hi}" opacity="${gold ? .95 : .7}" transform="rotate(25 ${cx + rx * .34} ${cy - ry * .45})"/>`;
}
const spark = (x, y, r) => `<path d="M${x} ${y - r} Q${x + r * .18} ${y - r * .18} ${x + r} ${y} Q${x + r * .18} ${y + r * .18} ${x} ${y + r} Q${x - r * .18} ${y + r * .18} ${x - r} ${y} Q${x - r * .18} ${y - r * .18} ${x} ${y - r}Z" fill="#FFF6D6"/>`;

export default () => {
  const bx0 = 640, bx1 = 1330, fx0 = 600, fx1 = 1370, by = 452, fy = 586, base = 672;
  const n = 6;
  // tapa oberta, recolzada cap enrere
  const lid = `
    <path d="M${bx0 + 10} ${by} L${bx0 + 40} ${by - 250} Q${bx0 + 44} ${by - 268} ${bx0 + 62} ${by - 268} H${bx1 - 62} Q${bx1 - 44} ${by - 268} ${bx1 - 40} ${by - 250} L${bx1 - 10} ${by}Z" fill="${P2}"/>
    <path d="M${bx0 + 34} ${by - 6} L${bx0 + 58} ${by - 238} H${bx1 - 58} L${bx1 - 34} ${by - 6}Z" fill="${P0}"/>
    <path d="M${bx0 + 420} ${by - 238} H${bx1 - 58} L${bx1 - 34} ${by - 6} H${bx0 + 470}Z" fill="${P1}" opacity=".6"/>
    ${[...Array(n).keys()].map(i => { const x = bx0 + 112 + i * ((bx1 - bx0 - 224) / (n - 1)); return `<ellipse cx="${x}" cy="${by - 172}" rx="40" ry="34" fill="${P2}" opacity=".55"/><ellipse cx="${x + 4}" cy="${by - 176}" rx="34" ry="28" fill="${P1}" opacity=".8"/><ellipse cx="${x}" cy="${by - 74}" rx="42" ry="38" fill="${P2}" opacity=".55"/><ellipse cx="${x + 4}" cy="${by - 78}" rx="36" ry="32" fill="${P1}" opacity=".8"/>`; }).join('')}`;
  // safata (cara de dalt)
  const tray = `<path d="M${bx0} ${by} H${bx1} L${fx1} ${fy} H${fx0}Z" fill="${P2}"/>`;
  const backX = i => bx0 + 62 + i * ((bx1 - bx0 - 124) / (n - 1));
  const frontX = i => fx0 + 70 + i * ((fx1 - fx0 - 140) / (n - 1));
  const cupBack = i => `<ellipse cx="${backX(i)}" cy="${by + 42}" rx="52" ry="20" fill="${P3}"/>`;
  const backEggs = [...Array(n).keys()].map(i => cupBack(i) + egg(backX(i), by - 6, 44, 56)).join('');
  // vora entre files
  const ridge = `<path d="M${bx0 - 16} ${by + 52} H${bx1 + 16} L${bx1 + 20} ${by + 70} H${bx0 - 20}Z" fill="${P0}"/><path d="M${bx0 - 16} ${by + 52} H${bx1 + 16}" stroke="${P1}" stroke-width="5"/>`;
  const frontEggs = [...Array(n).keys()].map(i => `<ellipse cx="${frontX(i)}" cy="${fy - 4}" rx="58" ry="22" fill="${P3}"/>` + egg(frontX(i), fy - 60, 50, 64, i === 3)).join('');
  // cara frontal amb bonys de les cassoletes
  const cupW = (fx1 - fx0) / n;
  const front = [...Array(n).keys()].map(i => {
    const x = fx0 + i * cupW, cx = x + cupW / 2;
    return `<path d="M${x + 4} ${fy - 8} H${x + cupW - 4} C ${x + cupW - 2} ${fy + 40} ${x + cupW - 14} ${base - 6} ${cx + 10} ${base} H${cx - 10} C ${x + 14} ${base - 6} ${x + 2} ${fy + 40} ${x + 4} ${fy - 8}Z" fill="${P0}"/>
      <path d="M${cx + 8} ${fy - 8} H${x + cupW - 4} C ${x + cupW - 2} ${fy + 40} ${x + cupW - 14} ${base - 6} ${cx + 10} ${base}Z" fill="${P1}" opacity=".85"/>
      <path d="M${x + 4} ${fy - 8} C ${x + 2} ${fy + 40} ${x + 14} ${base - 6} ${cx - 10} ${base} C ${x + 26} ${base - 30} ${x + 16} ${fy + 30} ${x + 18} ${fy - 8}Z" fill="${P2}" opacity=".7"/>`;
  }).join('');
  const rim = `<path d="M${fx0 - 8} ${fy - 18} H${fx1 + 8} V${fy + 4} H${fx0 - 8}Z" fill="${P0}"/><path d="M${fx0 - 8} ${fy - 18} H${fx1 + 8}" stroke="${P1}" stroke-width="6" stroke-linecap="round"/>`;
  const gx = frontX(3), gy = fy - 60;
  return `<defs><radialGradient id="iglow"><stop offset="0" stop-color="#FFE39A" stop-opacity=".9"/><stop offset=".45" stop-color="#FFE39A" stop-opacity=".35"/><stop offset="1" stop-color="#FFE9A8" stop-opacity="0"/></radialGradient></defs>
  ${shadowEl(930, base + 6, 470, 30, .6)}
  ${shadowEl(820, base - 10, 380, 20, .45)}
  ${lid}${tray}${backEggs}${ridge}
  <ellipse cx="${gx}" cy="${gy}" rx="105" ry="96" fill="url(#iglow)" opacity=".7"/>
  ${frontEggs}${front}<rect x="${fx0}" y="${fy + 2}" width="${fx1 - fx0}" height="12" fill="${P3}" opacity=".45"/>${rim}
  ${spark(gx + 70, gy - 70, 16)}${spark(gx - 62, gy - 40, 10)}${spark(gx + 52, gy + 6, 8)}`;
};
