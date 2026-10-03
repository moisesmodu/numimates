import { C, shadowEl } from '../base.mjs';
// Uneix els punts: un full sobre una carpeta de pinça recolzada a la paret, amb punts units per una línia de llapis de color, i el llapis a la taula
const B0 = '#B57D46', B1 = '#CC955B', B2 = '#8E5D2E';

export default () => {
  // carpeta lleugerament inclinada enrere (trapezi)
  const bl = [700, 668], br = [1230, 668], tl = [728, 92], tr = [1202, 92];
  const board = `M${tl[0] + 18} ${tl[1]} H${tr[0] - 18} Q${tr[0]} ${tr[1]} ${tr[0] + 1} ${tr[1] + 18} L${br[0]} ${br[1] - 18} Q${br[0]} ${br[1]} ${br[0] - 18} ${br[1]} H${bl[0] + 18} Q${bl[0]} ${bl[1]} ${bl[0]} ${bl[1] - 18} L${tl[0] - 1} ${tl[1] + 18} Q${tl[0]} ${tl[1]} ${tl[0] + 18} ${tl[1]}Z`;
  // full
  const pl = 760, pr = 1170, pt = 150, pb = 640, sk = 18; // sk: estrenyiment a dalt
  const paper = `M${pl + sk} ${pt} H${pr - sk} L${pr} ${pb} H${pl}Z`;
  const pts = [[846, 566], [944, 440], [866, 300], [1010, 226], [1106, 360], [1030, 500], [1112, 588], [920, 590], [1104, 210]];
  const done = 5; // punts ja units
  const path = pts.slice(0, done).map((p, i) => (i ? 'L' : 'M') + p.join(' ')).join(' ');
  const dots = pts.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="17" fill="${C.white}" stroke="${C.ink}" stroke-width="5"/>${i < done ? `<circle cx="${x}" cy="${y}" r="7" fill="${C.coral}"/>` : ''}`).join('');
  // llapis de color (coral) a la taula
  const pen = `<g transform="translate(560 722) rotate(-14)">
      ${shadowEl(170, 26, 250, 14, .55)}
      <rect x="0" y="-17" width="330" height="34" rx="4" fill="${C.coral}"/>
      <rect x="0" y="-17" width="330" height="11" fill="#EE9A80"/>
      <rect x="0" y="6" width="330" height="11" fill="${C.coral2}"/>
      <path d="M330 -17 L410 0 L330 17Z" fill="#E9C99A"/><path d="M330 6 L410 0 L330 17Z" fill="#CFA874"/>
      <path d="M386 -5 L414 0 L386 5Z" fill="${C.coral2}"/>
      <ellipse cx="0" cy="0" rx="6" ry="17" fill="#E9C99A"/><circle cx="0" cy="0" r="6" fill="${C.coral2}"/>
      <rect x="40" y="-17" width="4" height="34" fill="${C.coral2}" opacity=".5"/><rect x="52" y="-17" width="4" height="34" fill="${C.coral2}" opacity=".5"/>
    </g>`;
  return `
  ${shadowEl(910, 676, 330, 22, .6)}
  <path d="${board}" fill="${C.ink2}" opacity=".22" filter="url(#soft)" transform="translate(-40 24)"/>
  <!-- gruix de la carpeta -->
  <path d="${board}" fill="${B2}" transform="translate(-8 8)"/>
  <path d="${board}" fill="${B0}"/>
  <path d="M${tr[0] - 120} ${tr[1]} H${tr[0] - 18} Q${tr[0]} ${tr[1]} ${tr[0] + 1} ${tr[1] + 18} L${br[0]} ${br[1] - 18} Q${br[0]} ${br[1]} ${br[0] - 18} ${br[1]} H${br[0] - 70}Z" fill="${B1}" opacity=".8"/>
  <!-- fulls -->
  <path d="${paper}" fill="#E9E1CF" transform="translate(-10 10) rotate(-1.5 965 400)"/>
  <path d="${paper}" fill="${C.white}"/>
  <path d="M${pl + sk} ${pt} H${pl + 70} L${pl + 54} ${pb} H${pl}Z" fill="#EFE8D8" opacity=".7"/>
  <!-- línia de llapis -->
  <path d="${path}" fill="none" stroke="${C.coral}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="${path}" fill="none" stroke="${C.coral2}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".45" transform="translate(2 2)"/>
  <path d="M${pts[done - 1].join(' ')} L ${(pts[done - 1][0] + pts[done][0]) / 2 + 20} ${(pts[done - 1][1] + pts[done][1]) / 2}" fill="none" stroke="${C.coral}" stroke-width="7" stroke-linecap="round"/>
  ${dots}
  <!-- pinça metàl·lica -->
  <path d="M880 66 H1050 L1066 128 H864Z" fill="${C.gold2}"/>
  <path d="M884 66 H1050 L1060 108 H876Z" fill="${C.gold}"/>
  <path d="M900 74 H1040" stroke="#F6E2A8" stroke-width="6" stroke-linecap="round"/>
  <path d="M920 66 C 920 20 1010 20 1010 66" stroke="${C.gold2}" stroke-width="14" fill="none"/>
  <path d="M924 62 C 926 30 1004 30 1006 62" stroke="#F0D48A" stroke-width="5" fill="none" opacity=".8"/>
  <circle cx="886" cy="112" r="7" fill="${C.gold2}"/><circle cx="1044" cy="112" r="7" fill="${C.gold2}"/>
  ${pen}`;
};
