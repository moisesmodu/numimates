import { C, shadowEl } from '../base.mjs';
// Sèries: blocs de fusta en escala creixent (1, 2, 3, 4) amb un forat i el bloc que falta, suspès
const f = n => +n.toFixed(1);
export default () => {
  const S = 128, DX = 46, DY = -32, yb = 706, x0 = 610, G = 16;
  const woods = [[C.wood, C.wood2, '#E2B57F'], ['#D49A5C', '#A8723C', '#EBC08D'], ['#BF8247', '#93622F', '#DDAE76']];
  const accent = [C.em, C.em2, '#5CC3AC'];
  const cube = (x, y, [c1, c2, c3]) => `
    <path d="M${x} ${y} l${DX} ${DY} h${S} l${-DX} ${-DY}z" fill="${c3}"/>
    <path d="M${x + S} ${y} l${DX} ${DY} v${S} l${-DX} ${-DY}z" fill="${c2}"/>
    <rect x="${x}" y="${y}" width="${S}" height="${S}" fill="${c1}"/>
    <path d="M${x + 18} ${y + 30} q ${S * .4} -8 ${S - 36} 4 M${x + 14} ${y + S * .55} q ${S * .5} 10 ${S - 30} -2 M${x + 30} ${y + S - 24} q ${S * .3} -6 ${S - 56} 2" stroke="${c2}" stroke-width="2.5" fill="none" opacity=".35"/>
    <path d="M${x} ${y} h${S}" stroke="#fff" stroke-width="3" opacity=".45"/>
    <path d="M${x + S} ${y} l${DX} ${DY}" stroke="#fff" stroke-width="2" opacity=".35"/>
    <path d="M${x} ${y + S} h${S}" stroke="${c2}" stroke-width="4" opacity=".5"/>
    <rect x="${x + 1.5}" y="${y + 1.5}" width="${S - 3}" height="${S - 3}" fill="none" stroke="${C.ink2}" stroke-width="3" opacity=".22"/>`;
  let blocks = '', gap = '';
  for (let c = 0; c < 4; c++) {
    const h = c + 1, x = x0 + c * (S + G);
    for (let k = 0; k < h; k++) {
      const y = yb - (k + 1) * S;
      if (c === 3 && k === 3) {
        // forat: contorn discontinu i ombra del bloc suspès
        gap = `<path d="M${x} ${y} h${S} v${S} h${-S}z M${x} ${y} l${DX} ${DY} h${S} l${-DX} ${-DY} M${x + S} ${y} l${DX} ${DY} v${S}" fill="none" stroke="${C.ink}" stroke-width="3" stroke-dasharray="10 9" opacity=".35"/>
        <ellipse cx="${x + S / 2 + DX / 2 - 6}" cy="${y + S + DY / 2}" rx="${S / 2 - 6}" ry="12" fill="${C.ink2}" opacity=".35" filter="url(#serB2)"/>`;
        continue;
      }
      blocks += cube(x, y, woods[(c + k) % 3]);
    }
  }
  const hx = x0 + 3 * (S + G) + 30, hy = yb - 4 * S - 74;
  const hover = `<g transform="rotate(5 ${hx + S / 2} ${hy + S / 2})">${cube(hx, hy, accent)}</g>`;
  return `<filter id="serB" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
  <filter id="serB2" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6"/></filter>
  <path d="M${x0 + 4 * S + 3 * G} ${yb - 6} L${x0 + 4 * S + 3 * G} ${yb - 3 * S} L${x0 - 120} ${yb + 40} L${x0} ${yb + 60} L${x0 + 2 * S} ${yb + 40}Z" fill="${C.ink2}" opacity=".3" filter="url(#serB)"/>
  ${shadowEl(x0 + 2 * S + 30, yb + 4, 2 * S + 60, 14, .55)}
  ${blocks}${gap}${hover}`;
};
