import { C, shadowEl } from '../base.mjs';
// Refranys: un llibre antic de pell, tancat, amb cantoneres daurades, i una ploma dins d'un tinter
const L1 = '#A34C38', L2 = '#843A2B', L3 = '#6B2D21', LH = '#C06A50';
export default () => {
  const x0 = 460, y0 = 650, w = 600, dx = 86, dy = 136, t = 100; // cantonada davant-esquerra, ample, profunditat, gruix
  const FL = [x0, y0], FR = [x0 + w, y0], BR = [x0 + w + dx, y0 - dy], BL = [x0 + dx, y0 - dy];
  const pt = p => p.join(' ');
  // coordenades locals de la tapa: (u,v) amb u en [0,w], v en [0,dy]
  const M = `matrix(1 0 ${dx / dy} -1 ${x0} ${y0})`;
  const shadow = `<path d="M${x0 + 20} ${y0 + t} L ${x0 - 300} ${y0 + t + 60} L ${x0 + w - 200} ${y0 + t + 70} L ${x0 + w + 40} ${y0 + t}Z" fill="${C.ink2}" opacity=".35" filter="url(#soft)"/>${shadowEl(x0 + w / 2 - 20, y0 + t + 6, w / 2 + 40, 22, .55)}`;
  // cara dreta: cobertes + bloc de pàgines
  const right = `<path d="M${pt(FR)} L ${pt(BR)} L ${BR[0]} ${BR[1] + t} L ${FR[0]} ${FR[1] + t}Z" fill="${L2}"/>
    <path d="M${FR[0] - 2} ${FR[1] + 12} L ${BR[0] - 8} ${BR[1] + 16} L ${BR[0] - 8} ${BR[1] + t - 12} L ${FR[0] - 2} ${FR[1] + t - 12}Z" fill="#F1E6CC"/>
    ${[...Array(12).keys()].map(i => { const yy = 18 + i * 6.2; return `<path d="M${FR[0] - 2} ${FR[1] + yy} L ${BR[0] - 8} ${BR[1] + yy + 2}" stroke="#D6C8A8" stroke-width="1.6"/>`; }).join('')}
    <path d="M${FR[0] - 2} ${FR[1] + 12} L ${BR[0] - 8} ${BR[1] + 16}" stroke="#FFF8E6" stroke-width="3"/>`;
  // cara del davant: llom amb nervis
  const bands = [90, 210, 330, 450].map(u => `<rect x="${x0 + u - 13}" y="${y0 - 2}" width="26" height="${t + 4}" rx="11" fill="${L3}"/><rect x="${x0 + u - 4}" y="${y0 + 2}" width="9" height="${t - 4}" rx="4" fill="${LH}" opacity=".7"/>
    <path d="M${x0 + u - 22} ${y0 + 6} V ${y0 + t - 6} M${x0 + u + 22} ${y0 + 6} V ${y0 + t - 6}" stroke="${C.gold}" stroke-width="2.5"/>`).join('');
  const front = `<rect x="${x0}" y="${y0}" width="${w}" height="${t}" rx="10" fill="${L2}"/>
    <rect x="${x0}" y="${y0 + 10}" width="${w}" height="22" fill="${LH}" opacity=".35"/>
    <rect x="${x0}" y="${y0 + t - 22}" width="${w}" height="22" rx="10" fill="${L3}" opacity=".6"/>
    ${bands}
    ${[150, 270, 390, 520].map(u => `<path d="M${x0 + u - 16} ${y0 + t / 2} l 16 -12 l 16 12 l -16 12z" fill="none" stroke="${C.gold}" stroke-width="2.5"/>`).join('')}`;
  // tapa superior en coordenades locals
  const corner = (u, v, su, sv) => `<path d="M${u} ${v} L ${u + su * 84} ${v} L ${u} ${v + sv * 54}Z" fill="${C.gold2}"/><path d="M${u + su * 6} ${v + sv * 5} L ${u + su * 66} ${v + sv * 5} L ${u + su * 6} ${v + sv * 40}Z" fill="${C.gold}"/><circle cx="${u + su * 20}" cy="${v + sv * 14}" r="4" fill="${C.gold2}"/>`;
  const top = `<path d="M${pt(FL)} L ${pt(FR)} L ${pt(BR)} L ${pt(BL)}Z" fill="${L1}"/>
    <g transform="${M}">
      <path d="M${w * .45} 0 L ${w} 0 L ${w} ${dy} L ${w * .7} ${dy}Z" fill="${LH}" opacity=".22"/>
      <rect x="34" y="16" width="${w - 68}" height="${dy - 32}" rx="4" fill="none" stroke="${C.gold}" stroke-width="3.5"/>
      <rect x="48" y="25" width="${w - 96}" height="${dy - 50}" rx="3" fill="none" stroke="${C.gold2}" stroke-width="2"/>
      <path d="M${w / 2} ${dy / 2 - 34} L ${w / 2 + 70} ${dy / 2} L ${w / 2} ${dy / 2 + 34} L ${w / 2 - 70} ${dy / 2}Z" fill="${L2}" stroke="${C.gold}" stroke-width="4"/>
      <path d="M${w / 2} ${dy / 2 - 18} L ${w / 2 + 36} ${dy / 2} L ${w / 2} ${dy / 2 + 18} L ${w / 2 - 36} ${dy / 2}Z" fill="${C.gold}"/>
      <circle cx="${w / 2 - 110}" cy="${dy / 2}" r="7" fill="${C.gold}"/><circle cx="${w / 2 + 110}" cy="${dy / 2}" r="7" fill="${C.gold}"/>
      ${corner(0, 0, 1, 1)}${corner(w, 0, -1, 1)}${corner(0, dy, 1, -1)}${corner(w, dy, -1, -1)}
    </g>
    <path d="M${FL[0] + 10} ${FL[1]} L ${FR[0] - 10} ${FR[1]}" stroke="${LH}" stroke-width="4" stroke-linecap="round" opacity=".8"/>`;
  // cantoneres que baixen per la cara del davant i la dreta
  const frontCorners = `<path d="M${x0} ${y0} L ${x0 + 60} ${y0} L ${x0 + 60} ${y0 + 22} L ${x0 + 8} ${y0 + 22} Q ${x0} ${y0 + 22} ${x0} ${y0 + 14}Z" fill="${C.gold2}"/>
    <path d="M${x0 + w - 60} ${y0} L ${x0 + w} ${y0} L ${x0 + w} ${y0 + 22} L ${x0 + w - 60} ${y0 + 22}Z" fill="${C.gold}"/><path d="M${x0 + w} ${y0} L ${x0 + w + 16} ${y0 - 25} L ${x0 + w + 16} ${y0 - 3} L ${x0 + w} ${y0 + 22}Z" fill="${C.gold2}"/>`;
  // cinta de punt de llibre que surt de les pàgines
  const ribbon = `<path d="M${FR[0] + 30} ${FR[1] - 30} C ${FR[0] + 40} ${FR[1] + 20} ${FR[0] + 30} ${FR[1] + 70} ${FR[0] + 60} ${FR[1] + 112} L ${FR[0] + 44} ${FR[1] + 108} L ${FR[0] + 38} ${FR[1] + 126} C ${FR[0] + 14} ${FR[1] + 80} ${FR[0] + 20} ${FR[1] + 20} ${FR[0] + 14} ${FR[1] - 26}Z" fill="${C.coral}"/>`;
  // tinter i ploma
  const ix = 1230, iy = 700;
  const inkwell = `${shadowEl(ix - 40, iy + 4, 120, 16, .55)}
    <path d="M${ix - 82} ${iy - 6} C ${ix - 84} ${iy - 70} ${ix - 70} ${iy - 104} ${ix - 30} ${iy - 112} L ${ix + 30} ${iy - 112} C ${ix + 70} ${iy - 104} ${ix + 84} ${iy - 70} ${ix + 82} ${iy - 6} C ${ix + 82} ${iy + 6} ${ix + 70} ${iy + 10} ${ix + 60} ${iy + 10} L ${ix - 60} ${iy + 10} C ${ix - 70} ${iy + 10} ${ix - 82} ${iy + 6} ${ix - 82} ${iy - 6}Z" fill="#26343F"/>
    <path d="M${ix - 82} ${iy - 6} C ${ix - 84} ${iy - 70} ${ix - 70} ${iy - 104} ${ix - 30} ${iy - 112} L ${ix - 10} ${iy - 112} C ${ix - 46} ${iy - 96} ${ix - 54} ${iy - 60} ${ix - 50} ${iy + 10} L ${ix - 60} ${iy + 10} C ${ix - 70} ${iy + 10} ${ix - 82} ${iy + 6} ${ix - 82} ${iy - 6}Z" fill="#18222A"/>
    <path d="M${ix + 50} ${iy - 90} C ${ix + 66} ${iy - 70} ${ix + 70} ${iy - 40} ${ix + 66} ${iy - 14}" stroke="#9FB4BE" stroke-width="9" fill="none" stroke-linecap="round" opacity=".75"/>
    <path d="M${ix + 36} ${iy - 100} q 10 4 16 12" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>
    <rect x="${ix - 40}" y="${iy - 136}" width="80" height="30" rx="6" fill="${C.gold2}"/><rect x="${ix - 40}" y="${iy - 136}" width="80" height="12" rx="6" fill="${C.gold}"/>
    <ellipse cx="${ix}" cy="${iy - 136}" rx="40" ry="10" fill="${C.gold2}"/><ellipse cx="${ix}" cy="${iy - 136}" rx="28" ry="6" fill="#121A20"/>`;
  const vane = `M0 -110 C -40 -150 -82 -260 -70 -400 C -62 -470 -30 -520 0 -548 C 22 -500 40 -430 40 -330 C 40 -230 24 -160 0 -110Z`;
  const quill = `<g transform="translate(${ix - 4} ${iy - 138}) rotate(-21)">
    <path d="${vane}" fill="#8E6C4B"/>
    <path d="M0 -110 C 22 -160 40 -230 40 -330 C 40 -430 22 -500 0 -548 C 4 -440 4 -260 0 -110Z" fill="#C49C70"/><path d="M-30 -470 C -10 -500 0 -530 0 -548 C 14 -520 26 -490 30 -460 C 10 -470 -10 -472 -30 -470Z" fill="#5E4530"/><path d="M-60 -300 C -40 -310 -20 -312 0 -308 M-66 -350 C -44 -360 -20 -362 0 -356 M2 -280 C 14 -284 26 -290 38 -300" stroke="#6E5238" stroke-width="7" fill="none" opacity=".55"/>
    <path d="M-70 -400 l 22 6 M-64 -330 l 26 2 M-74 -360 l 18 8 M38 -300 l -16 2 M30 -420 l -14 6 M-56 -240 l 24 -2" stroke="${C.wall}" stroke-width="4" stroke-linecap="round"/>
    <path d="M0 -40 C 1 -200 2 -400 0 -548" stroke="#F1E6CC" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M-3 -110 L 3 -110 L 3 0 L -3 0Z" fill="#E7D9BA"/></g>
    <ellipse cx="${ix}" cy="${iy - 134}" rx="40" ry="8" fill="none" stroke="${C.gold}" stroke-width="3" stroke-dasharray="0 62 70 200"/>`;
  return `${shadow}${right}${front}${top}${frontCorners}${ribbon}${inkwell}${quill}`;
};
