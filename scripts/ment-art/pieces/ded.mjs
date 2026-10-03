import { C, shadowEl } from '../base.mjs';
// Qui és el més gran?: tres espelmes d'aniversari d'alçades ben diferents, en platets; una d'encesa
const f = n => +n.toFixed(1);
export default () => {
  let n = 0;
  const candle = (cx, yb, h, w, [c1, c2], lit) => {
    const id = 'dedC' + (n++), x = cx - w / 2, top = yb - 34 - h;
    const stripes = [...Array(Math.ceil(h / 46) + 3).keys()].map(i => `<path d="M${x - 10} ${top + i * 46 - 30} l${w + 20} 34 v22 l${-w - 20} -34z" fill="${c1}"/>`).join('');
    const sau = `${shadowEl(cx - 14, yb + 2, 128, 14, .55)}
      <ellipse cx="${cx}" cy="${yb - 6}" rx="122" ry="27" fill="#D9CFB8"/>
      <path d="M${cx - 118} ${yb - 14} q 4 18 30 22 h176 q 26 -4 30 -22z" fill="#CFC3A8"/>
      <ellipse cx="${cx}" cy="${yb - 16}" rx="118" ry="24" fill="${C.white}"/>
      <ellipse cx="${cx}" cy="${yb - 16}" rx="118" ry="24" fill="none" stroke="${C.gold2}" stroke-width="4" opacity=".8"/>
      <ellipse cx="${cx}" cy="${yb - 14}" rx="76" ry="14" fill="#EDE5D3"/>
      <path d="M${cx + 40} ${yb - 32} q 50 2 70 12" stroke="#fff" stroke-width="5" opacity=".8" fill="none" stroke-linecap="round"/>`;
    const back = `<ellipse cx="${cx}" cy="${yb - 62}" rx="${w / 2 + 16}" ry="9" fill="${C.gold2}"/><ellipse cx="${cx}" cy="${yb - 61}" rx="${w / 2 + 8}" ry="6" fill="#8E6420"/>`;
    const body = back + `<clipPath id="${id}"><rect x="${x}" y="${top}" width="${w}" height="${h - 6}" rx="6"/></clipPath>
      <g clip-path="url(#${id})">
        <rect x="${x}" y="${top}" width="${w}" height="${h - 6}" fill="${C.cream}"/>
        ${stripes}
        <rect x="${x}" y="${top}" width="${w * .32}" height="${h - 6}" fill="${C.ink2}" opacity=".16"/>
        <rect x="${x + w * .66}" y="${top}" width="${w * .12}" height="${h - 6}" fill="#fff" opacity=".35"/>
      </g>
      <path d="M${x} ${top} h${w} v10 q -6 0 -8 10 v22 a6 6 0 0 1 -12 0 v-16 q -2 -10 -10 -10 q -6 0 -8 8 a5 5 0 0 1 -10 0 q -2 -12 -14 -12 h${-(w - 62)}z" fill="#FBF6EA"/>
      <ellipse cx="${cx}" cy="${top}" rx="${w / 2}" ry="9" fill="#FFFDF7"/><ellipse cx="${cx}" cy="${top + 1}" rx="${w / 2 - 10}" ry="5" fill="#EFE7D6"/>
      <path d="M${cx} ${top} v-26" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
      <path d="M${x - 16} ${yb - 62} a${w / 2 + 16} 9 0 0 0 ${w + 32} 0 v34 a${w / 2 + 16} 12 0 0 1 ${-w - 32} 0z" fill="${C.gold}"/>
      <path d="M${x - 16} ${yb - 62} q 8 8 ${(w + 32) * .3} 9 v41 q -16 -2 ${-(w + 32) * .3} -16z" fill="${C.gold2}" opacity=".65"/>
      <path d="M${x - 16} ${yb - 62} a${w / 2 + 16} 9 0 0 0 ${w + 32} 0" fill="none" stroke="#F3D58E" stroke-width="3"/>
      <rect x="${x + w * .72}" y="${yb - 54}" width="8" height="26" rx="4" fill="#fff" opacity=".45"/>`;
    const flame = lit ? `<radialGradient id="dedG" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="${C.gold}" stop-opacity=".75"/><stop offset=".45" stop-color="${C.gold}" stop-opacity=".22"/><stop offset="1" stop-color="${C.gold}" stop-opacity="0"/></radialGradient>
      <circle cx="${cx}" cy="${top - 70}" r="190" fill="url(#dedG)"/>
      <path d="M${cx} ${top - 128} c 26 34 40 62 32 86 c -6 18 -20 26 -32 26 c -12 0 -26 -8 -32 -26 c -8 -24 6 -52 32 -86z" fill="${C.gold}"/>
      <path d="M${cx} ${top - 92} c 14 20 20 36 16 50 c -3 10 -9 14 -16 14 c -7 0 -13 -4 -16 -14 c -4 -14 2 -30 16 -50z" fill="${C.coral}"/>
      <path d="M${cx} ${top - 60} c 6 10 8 18 6 24 c -1 4 -3 6 -6 6 c -3 0 -5 -2 -6 -6 c -2 -6 0 -14 6 -24z" fill="#FFFDF7"/>` : `<path d="M${cx} ${top - 30} c -10 -16 10 -24 0 -40 c -10 -16 8 -24 2 -36" stroke="#BDB6A6" stroke-width="5" fill="none" opacity=".0" stroke-linecap="round"/>`;
    return { sau, body, flame };
  };
  const a = candle(730, 694, 270, 80, [C.blue, C.blue2]);
  const b = candle(995, 662, 420, 86, [C.coral, C.coral2], true);
  const c = candle(1255, 712, 140, 78, [C.em, C.em2]);
  return `<filter id="dedB" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <path d="M975 640 L1030 646 L640 770 L600 745Z" fill="${C.ink2}" opacity=".3" filter="url(#dedB)"/>
  <path d="M712 676 L760 680 L500 752 L470 734Z" fill="${C.ink2}" opacity=".3" filter="url(#dedB)"/>
  <path d="M1236 694 L1284 698 L1130 748 L1100 736Z" fill="${C.ink2}" opacity=".3" filter="url(#dedB)"/>
  ${b.flame}${b.sau}${b.body}
  ${a.sau}${a.body}
  ${c.sau}${c.body}`;
};
