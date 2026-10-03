import { C, shadowEl } from '../base.mjs';
// Paraules: fitxes de fusta amb lletres sobre un faristol, una bossa de roba i fitxes escampades per la taula
const FACE = '#F3E2BC', FACE2 = '#E4CB98', EDGE = '#C9A56A', EDGE2 = '#A98450', INK = '#3B2A1A';
const FONT = `font-family="Georgia, 'Times New Roman', serif" font-weight="700"`;
// fitxa dreta (de cara)
const standTile = (x, y, L, w = 124, h = 130) => `
  <rect x="${x - 10}" y="${y + 4}" width="${w}" height="${h}" rx="12" fill="${EDGE2}"/>
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${FACE2}"/>
  <rect x="${x + 4}" y="${y}" width="${w - 4}" height="${h - 8}" rx="11" fill="${FACE}"/>
  <path d="M${x + 16} ${y + 7} H ${x + w - 12} Q ${x + w - 5} ${y + 7} ${x + w - 5} ${y + 16} V ${y + h - 30}" stroke="#FFF6DE" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>
  <path d="M${x + 18} ${y + h * .35} q ${w * .3} -8 ${w * .7} 4 M${x + 22} ${y + h * .72} q ${w * .3} -6 ${w * .6} 2" stroke="${FACE2}" stroke-width="2.5" fill="none" opacity=".7"/>
  <text x="${x + w / 2}" y="${y + h * .7}" text-anchor="middle" ${FONT} font-size="${h * .58}" fill="${INK}">${L}</text>`;
// fitxa plana a la taula (escorçada)
const flatTile = (x, y, r, L, s = 1) => `<g transform="translate(${x} ${y})">${shadowEl(-14 * s, 26 * s, 70 * s, 22 * s, .45)}
  <g transform="translate(0 ${16 * s}) scale(${s} ${s * .56}) rotate(${r})"><rect x="-56" y="-56" width="112" height="112" rx="12" fill="${EDGE2}"/></g>
  <g transform="translate(0 ${8 * s}) scale(${s} ${s * .56}) rotate(${r})"><rect x="-56" y="-56" width="112" height="112" rx="12" fill="${EDGE}"/></g>
  <g transform="scale(${s} ${s * .56}) rotate(${r})"><rect x="-56" y="-56" width="112" height="112" rx="12" fill="${FACE}"/><rect x="-56" y="-56" width="112" height="112" rx="12" fill="none" stroke="#FFF6DE" stroke-width="5" stroke-dasharray="0 120 200 200" opacity=".8"/>
  ${L ? `<text x="0" y="22" text-anchor="middle" ${FONT} font-size="66" fill="${INK}">${L}</text>` : ''}</g></g>`;
export default () => {
  const x0 = 590, x1 = 1330, top = 604;
  // faristol
  const rack = `${shadowEl(930, 690, 420, 26, .55)}
    <path d="M${x0 + 56} ${top - 70} L ${x1 - 10} ${top - 82} L ${x1} ${top} L ${x0 + 50} ${top}Z" fill="${C.wood2}"/>
    ${['L', 'A', 'M', 'R', 'O'].map((L, i) => standTile(x0 + 60 + i * 136, top - 150 - i * 1.2, L)).join('')}
    <path d="M${x0 - 8} ${top - 18} L ${x1 + 8} ${top - 18} L ${x1 + 14} ${top} L ${x0 - 14} ${top}Z" fill="#E2AC6B"/>
    <path d="M${x0 - 14} ${top} L ${x1 + 14} ${top} L ${x1 + 4} ${top + 64} Q ${x1} ${top + 74} ${x1 - 10} ${top + 74} L ${x0 - 4} ${top + 74} Q ${x0 - 14} ${top + 74} ${x0 - 14} ${top + 64}Z" fill="${C.wood}"/>
    <path d="M${x0 - 14} ${top + 50} L ${x1 + 6} ${top + 50} L ${x1 + 4} ${top + 64} Q ${x1} ${top + 74} ${x1 - 10} ${top + 74} L ${x0 - 4} ${top + 74} Q ${x0 - 14} ${top + 74} ${x0 - 14} ${top + 64}Z" fill="${C.wood2}"/>
    <path d="M${x0 + 30} ${top + 18} Q ${x0 + 300} ${top + 10} ${x0 + 520} ${top + 22} T ${x1 - 30} ${top + 16}" stroke="${C.wood2}" stroke-width="3" fill="none" opacity=".45"/>
    <path d="M${x0 + 80} ${top + 34} Q ${x0 + 330} ${top + 28} ${x0 + 560} ${top + 38}" stroke="${C.wood2}" stroke-width="3" fill="none" opacity=".35"/>
    <path d="M${x1 - 120} ${top + 4} L ${x1 + 6} ${top + 4}" stroke="#F2C88E" stroke-width="5" stroke-linecap="round" opacity=".9"/>`;
  // bossa de roba
  const bx = 1250, by = 420;
  const bag = `${shadowEl(bx - 30, by + 150, 150, 24, .5)}
    <path d="M${bx - 60} ${by - 40} C ${bx - 150} ${by + 10} ${bx - 160} ${by + 150} ${bx - 90} ${by + 170} C ${bx - 30} ${by + 186} ${bx + 70} ${by + 186} ${bx + 120} ${by + 160} C ${bx + 180} ${by + 120} ${bx + 150} ${by + 10} ${bx + 70} ${by - 40}Z" fill="${C.coral}"/>
    <path d="M${bx - 60} ${by - 40} C ${bx - 150} ${by + 10} ${bx - 160} ${by + 150} ${bx - 90} ${by + 170} C ${bx - 60} ${by + 178} ${bx - 30} ${by + 182} ${bx} ${by + 183} C ${bx - 70} ${by + 140} ${bx - 70} ${by + 20} ${bx - 20} ${by - 40}Z" fill="${C.coral2}"/>
    <path d="M${bx + 40} ${by + 10} C ${bx + 90} ${by + 50} ${bx + 100} ${by + 110} ${bx + 80} ${by + 150}" stroke="#F0A288" stroke-width="10" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M${bx - 62} ${by - 42} C ${bx - 90} ${by - 70} ${bx - 96} ${by - 100} ${bx - 70} ${by - 104} C ${bx - 50} ${by - 108} ${bx - 40} ${by - 90} ${bx - 30} ${by - 108} C ${bx - 16} ${by - 128} ${bx + 14} ${by - 124} ${bx + 20} ${by - 104} C ${bx + 30} ${by - 118} ${bx + 60} ${by - 120} ${bx + 70} ${by - 100} C ${bx + 96} ${by - 104} ${bx + 104} ${by - 76} ${bx + 72} ${by - 40}Z" fill="${C.coral}"/>
    <path d="M${bx - 62} ${by - 42} C ${bx - 90} ${by - 70} ${bx - 96} ${by - 100} ${bx - 70} ${by - 104} C ${bx - 50} ${by - 108} ${bx - 40} ${by - 90} ${bx - 30} ${by - 108} C ${bx - 30} ${by - 80} ${bx - 20} ${by - 60} ${bx - 4} ${by - 40}Z" fill="${C.coral2}"/>
    <path d="M${bx + 20} ${by - 104} C ${bx + 22} ${by - 80} ${bx + 18} ${by - 60} ${bx + 14} ${by - 44}" stroke="${C.coral2}" stroke-width="5" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M${bx - 68} ${by - 46} Q ${bx + 4} ${by - 26} ${bx + 76} ${by - 46}" stroke="${C.gold2}" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M${bx - 68} ${by - 50} Q ${bx + 4} ${by - 30} ${bx + 76} ${by - 50}" stroke="${C.gold}" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M${bx + 40} ${by - 34} q 6 30 -6 54 M${bx + 40} ${by - 34} q 22 24 22 52" stroke="${C.gold2}" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="${bx + 34}" cy="${by + 22}" r="8" fill="${C.gold}"/><circle cx="${bx + 62}" cy="${by + 20}" r="8" fill="${C.gold}"/>`;
  const scattered = flatTile(420, 712, 18, 'E', 1) + flatTile(600, 755, -12, 'T', .95) + flatTile(1060, 752, 8, '', .9) + flatTile(1230, 745, -22, 'N', .95) + flatTile(1400, 722, 12, 'I', .85);
  return `<g transform="translate(900 680) scale(1.16) translate(-950 -680)">${bag}${rack}</g>${scattered}`;
};
