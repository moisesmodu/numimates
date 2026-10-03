import { C, shadowEl } from '../base.mjs';
// Colors: quatre llaunes de pintura obertes (vermell, blau, verd, groc) amb regalims, una tapa i un pinzell
const f = n => +n.toFixed(1);
const mix = (h, t, a) => { const p = s => [1, 3, 5].map(i => parseInt(s.slice(i, i + 2), 16)), A = p(h), B = p(t); return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * a).toString(16).padStart(2, '0')).join(''); };
let uid = 0;
function tin(x, base, rx, h, col, drips) {
  const id = 'tin' + (uid++), ry = rx * .27, top = base - h, dark = mix(col, '#1D2B28', .3), light = mix(col, '#FFFFFF', .35);
  const body = `M${x - rx} ${top} L ${x - rx} ${base} A ${rx} ${ry} 0 0 0 ${x + rx} ${base} L ${x + rx} ${top}Z`;
  const arcY = (a, dy = 0) => [x + rx * Math.cos(a), top + ry * Math.sin(a) + dy];
  // regalims: [angle (0 = dreta, PI/2 = davant), llarg, ample]
  const dr = drips.map(([a, L, w]) => { const [dx, dy] = arcY(a); return `<path d="M${f(dx - w / 2)} ${f(dy - 4)} L ${f(dx - w / 2)} ${f(dy + L - w / 2)} a ${w / 2} ${w / 2} 0 0 0 ${w} 0 L ${f(dx + w / 2)} ${f(dy - 4)}Z" fill="${col}"/><ellipse cx="${f(dx)}" cy="${f(dy + 2)}" rx="${f(w * 1.05)}" ry="${f(w * .5)}" fill="${col}"/><circle cx="${f(dx)}" cy="${f(dy + L - w * .2)}" r="${f(w * .62)}" fill="${col}"/><path d="M${f(dx + w * .18)} ${f(dy + 4)} L ${f(dx + w * .18)} ${f(dy + L - w * .6)}" stroke="${light}" stroke-width="${f(w * .22)}" stroke-linecap="round" opacity=".8"/>`; }).join('');
  const a0 = Math.min(...drips.map(d => d[0])) - .25, a1 = Math.max(...drips.map(d => d[0])) + .25;
  const [sx, sy] = arcY(a0, 3), [ex, ey] = arcY(a1, 3);
  const overflow = `<path d="M${f(sx)} ${f(sy)} A ${rx} ${ry} 0 0 1 ${f(ex)} ${f(ey)}" stroke="${col}" stroke-width="11" fill="none" stroke-linecap="round"/>`;
  return `${shadowEl(x - rx * .35, base + ry * .4, rx * 1.25, ry * 1.1, .5)}
  <clipPath id="${id}"><path d="${body}"/></clipPath>
  <path d="${body}" fill="#C4CAC7"/>
  <g clip-path="url(#${id})">
    <rect x="${x - rx}" y="${top}" width="${rx * .55}" height="${h + ry + 4}" fill="#9AA29F"/>
    <rect x="${x - rx * .45}" y="${top}" width="${rx * .25}" height="${h + ry + 4}" fill="#B0B7B4"/>
    <rect x="${x + rx * .42}" y="${top}" width="${rx * .16}" height="${h + ry + 4}" fill="#EEF1EF"/>
    <rect x="${x + rx * .78}" y="${top}" width="${rx * .22}" height="${h + ry + 4}" fill="#AEB5B2"/>
    <path d="M${x - rx} ${top + 34} A ${rx} ${ry} 0 0 0 ${x + rx} ${top + 34}" stroke="#87908C" stroke-width="5" fill="none" opacity=".7"/>
    <path d="M${x - rx} ${base - 18} A ${rx} ${ry} 0 0 0 ${x + rx} ${base - 18}" stroke="#87908C" stroke-width="5" fill="none" opacity=".7"/>
    <rect x="${x - rx}" y="${base - 6}" width="${2 * rx}" height="${ry + 10}" fill="#8C9491" opacity=".5"/>
  </g>
  <path d="M${x - rx + 6} ${top + 40} C ${x - rx + 20} ${top + 120} ${x + rx - 20} ${top + 120} ${x + rx - 6} ${top + 40}" stroke="#5E6764" stroke-width="5" fill="none" stroke-linecap="round"/>
  <circle cx="${x - rx + 6}" cy="${top + 40}" r="8" fill="#7D8683"/><circle cx="${x + rx - 6}" cy="${top + 40}" r="8" fill="#9AA29F"/>
  <ellipse cx="${x}" cy="${top}" rx="${rx}" ry="${ry}" fill="#7D8683"/>
  <ellipse cx="${x}" cy="${top + 1}" rx="${rx - 7}" ry="${ry - 4}" fill="#DDE2DF"/>
  <ellipse cx="${x}" cy="${top + 3}" rx="${rx - 15}" ry="${ry - 8}" fill="${dark}"/>
  <ellipse cx="${x + 3}" cy="${top + 5}" rx="${rx - 18}" ry="${ry - 11}" fill="${col}"/>
  <path d="M${x + rx * .1} ${top - ry * .25} C ${x + rx * .45} ${top - ry * .35} ${x + rx * .62} ${top} ${x + rx * .4} ${top + ry * .25}" stroke="${light}" stroke-width="9" fill="none" stroke-linecap="round" opacity=".9"/>
  <ellipse cx="${x - rx * .3}" cy="${top + ry * .15}" rx="${rx * .16}" ry="${ry * .16}" fill="${light}" opacity=".6"/>
  ${dr}`;
}
export default () => {
  // tapa recolzada a la llauna vermella
  const lid = `<g transform="translate(626 560) rotate(-14)">${shadowEl(20, 80, 70, 16, .4)}<ellipse cx="0" cy="0" rx="40" ry="104" fill="#7D8683"/><ellipse cx="6" cy="0" rx="34" ry="96" fill="#C4CAC7"/><ellipse cx="9" cy="2" rx="26" ry="80" fill="${C.red}"/><path d="M14 -40 C 22 -20 22 20 16 40" stroke="${mix(C.red, '#FFFFFF', .35)}" stroke-width="6" fill="none" stroke-linecap="round"/></g>`;
  // taca de pintura a la taula
  const puddle = `<path d="M590 744 C 570 726 630 714 690 720 C 750 724 770 738 740 750 C 710 762 610 766 590 744Z" fill="${C.blue}"/><ellipse cx="785" cy="742" rx="14" ry="6" fill="${C.blue}"/><path d="M640 728 C 670 724 700 726 720 732" stroke="${mix(C.blue, '#FFFFFF', .35)}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
  // pinzell
  const brush = `<g transform="translate(610 728) rotate(-7)">${shadowEl(-40, 24, 240, 12, .45)}
    <path d="M-330 -12 C -330 -20 -320 -22 -300 -20 L -60 -12 L -60 12 L -300 20 C -320 22 -330 20 -330 12Z" fill="${C.wood}"/><path d="M-320 -14 L -60 -10 L -60 -3 L -320 -5Z" fill="#E2AE6E"/><circle cx="-308" cy="0" r="6" fill="${C.wood2}"/>
    <path d="M-62 -16 L 30 -22 L 30 22 L -62 16Z" fill="#B9C0BD"/><path d="M-62 -16 L 30 -22 L 30 -10 L -62 -6Z" fill="#E5E9E7"/><rect x="-10" y="-20" width="8" height="40" fill="#8E9693"/>
    <path d="M30 -22 C 70 -24 100 -14 118 -2 C 122 2 120 6 116 8 C 96 18 66 24 30 22Z" fill="${C.blue2}"/><path d="M30 -22 C 66 -22 96 -12 116 0 L 60 -2 L 30 -4Z" fill="${C.blue}"/></g>`;
  return `${tin(800, 640, 122, 215, C.red, [[1.2, 70, 20], [1.75, 120, 24]])}
  ${tin(1085, 622, 122, 245, C.blue, [[.7, 95, 22], [1.5, 55, 18]])}
  ${lid}
  ${tin(945, 742, 112, 172, C.gold, [[1.05, 110, 22], [1.9, 60, 18]])}
  ${tin(1215, 735, 108, 168, C.green, [[1.35, 85, 22], [.75, 45, 16]])}
  ${puddle}${brush}`;
};
