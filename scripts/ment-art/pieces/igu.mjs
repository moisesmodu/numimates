import { C, shadowEl } from '../base.mjs';
// Iguals o diferents: dues etiquetes de maleta penjades d'un penjador de paret, cadascuna amb un codi de formes
const TW = '#B98A55', TW2 = '#8E6435';

function shape(k, x, y, col) {
  const s = 26;
  switch (k) {
    case 'tri': return `<path d="M${x} ${y - s} L${x + s * 1.05} ${y + s * .8} H${x - s * 1.05}Z" fill="${col}" stroke="${col}" stroke-width="5" stroke-linejoin="round"/>`;
    case 'dot': return `<circle cx="${x}" cy="${y}" r="${s}" fill="${col}"/>`;
    case 'ring': return `<circle cx="${x}" cy="${y}" r="${s - 5}" fill="none" stroke="${col}" stroke-width="10"/>`;
    case 'sq': return `<rect x="${x - s + 2}" y="${y - s + 2}" width="${2 * s - 4}" height="${2 * s - 4}" rx="4" fill="${col}"/>`;
    case 'dia': return `<path d="M${x} ${y - s - 4} L${x + s + 4} ${y} L${x} ${y + s + 4} L${x - s - 4} ${y}Z" fill="${col}" stroke="${col}" stroke-width="4" stroke-linejoin="round"/>`;
    case 'bar': return `<rect x="${x - s}" y="${y - 9}" width="${2 * s}" height="18" rx="9" fill="${col}"/>`;
  }
}

// etiqueta: penja del punt (px,py); el forat queda a (0,0) en coordenades locals
function tag(px, py, rot, base, shade, light, strip, code) {
  const w = 280, h = 330, top = -40; // cos de l'etiqueta: x -w/2..w/2, y top..top+h
  const body = `M${-w / 2 + 60} ${top} H${w / 2 - 60} L${w / 2} ${top + 60} V${top + h - 18} a18 18 0 0 1 -18 18 H${-w / 2 + 18} a18 18 0 0 1 -18 -18 V${top + 60}Z`;
  const hy = 0, len = 128; // longitud del cordill
  const cells = code.map(([k, col], i) => shape(k, (i % 3 - 1) * 82, 140 + Math.floor(i / 3) * 84, col)).join('');
  return `<g transform="translate(${px} ${py}) rotate(${rot}) translate(0 ${len})">
    <path d="${body}" fill="${C.ink2}" opacity=".28" filter="url(#soft)" transform="translate(-30 26)"/>
    <path d="${body}" fill="${shade}" transform="translate(-7 6)"/>
    <path d="${body}" fill="${base}"/>
    <path d="M${w / 2 - 60} ${top} L${w / 2} ${top + 60} V${top + h - 18} a18 18 0 0 1 -18 18 H${w / 2 - 70}Z" fill="${light}" opacity=".55"/>
    <path d="M${-w / 2} ${top + 74} H${w / 2} V${top + 100} H${-w / 2}Z" fill="${strip}"/>
    <path d="M${-w / 2 + 22} ${top + 312} H${w / 2 - 22}" stroke="${shade}" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round"/>
    ${cells}
    <!-- ullet -->
    <circle cx="0" cy="${hy}" r="21" fill="${C.gold2}"/><circle cx="2" cy="${hy - 2}" r="18" fill="${C.gold}"/><circle cx="0" cy="${hy}" r="10" fill="#7C6A50"/><circle cx="-1" cy="${hy + 1}" r="10" fill="${C.wall2}"/>
    <!-- cordill: doble cap amunt fins al penjador, nus a l'ullet -->
    <path d="M-6 ${hy - 4} C -16 ${hy - 50} -10 ${-len + 40} -2 ${-len + 6}" stroke="${TW2}" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M6 ${hy - 4} C 18 ${hy - 50} 10 ${-len + 40} 2 ${-len + 6}" stroke="${TW}" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M-14 ${hy - 18} q14 -10 28 0 q-14 12 -28 0z" fill="${TW}"/><path d="M-4 ${hy - 14} q-14 22 -26 34 M4 ${hy - 14} q12 26 6 42" stroke="${TW}" stroke-width="6" fill="none" stroke-linecap="round"/>
  </g>`;
}

export default () => {
  const ry = 62, r0 = 600, r1 = 1310, pegL = 805, pegR = 1135;
  const left = [['tri', C.coral], ['dot', C.ink], ['sq', C.em2], ['dia', C.gold2], ['ring', C.ink], ['bar', C.coral]];
  const right = [['tri', C.coral], ['dot', C.ink], ['sq', C.em2], ['dia', C.gold2], ['sq', C.ink], ['bar', C.coral]];
  const peg = x => `<ellipse cx="${x - 20}" cy="${ry + 34}" rx="26" ry="14" fill="${C.ink2}" opacity=".25" filter="url(#soft)"/>
    <rect x="${x - 10}" y="${ry + 4}" width="20" height="30" fill="${C.wood2}"/>
    <circle cx="${x}" cy="${ry + 34}" r="20" fill="${C.wood2}"/><circle cx="${x + 3}" cy="${ry + 31}" r="16" fill="${C.wood}"/><circle cx="${x + 8}" cy="${ry + 26}" r="5" fill="#E3B27A"/>`;
  return `
  <!-- penjador de paret -->
  <rect x="${r0 - 18}" y="${ry - 16}" width="${r1 - r0}" height="40" rx="10" fill="${C.ink2}" opacity=".22" filter="url(#soft)"/>
  <rect x="${r0}" y="${ry - 26}" width="${r1 - r0}" height="40" rx="10" fill="${C.wood2}"/>
  <rect x="${r0}" y="${ry - 26}" width="${r1 - r0}" height="26" rx="10" fill="${C.wood}"/>
  <rect x="${r0 + 300}" y="${ry - 26}" width="${r1 - r0 - 300}" height="10" rx="5" fill="#E3B27A" opacity=".7"/>
  <circle cx="${r0 + 26}" cy="${ry - 6}" r="5" fill="${C.gold2}"/><circle cx="${r1 - 26}" cy="${ry - 6}" r="5" fill="${C.gold2}"/>
  ${tag(pegL, ry + 34, 5, '#DDB47C', '#B98C52', '#EBCB98', C.coral, left)}
  ${tag(pegR, ry + 34, -4, '#F4E9D0', '#CDBB98', '#FFFBEF', C.em, right)}
  ${peg(pegL)}${peg(pegR)}
  <!-- cabdell de cordill a la taula -->
  ${shadowEl(1225, 662, 80, 14, .5)}
  <circle cx="1240" cy="622" r="42" fill="${TW2}"/><circle cx="1246" cy="616" r="36" fill="${TW}"/>
  ${[-20, -6, 8, 22].map(d => `<path d="M${1210 + d} 590 q 26 30 4 68" stroke="${TW2}" stroke-width="3" fill="none" opacity=".6"/>`).join('')}
  <path d="M1262 590 q -30 22 -18 64" stroke="#D9AE77" stroke-width="3" fill="none" opacity=".8"/>
  <path d="M1200 640 C 1150 670 1080 650 1040 676 C 1010 696 1060 712 1110 702" stroke="${TW}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
};
