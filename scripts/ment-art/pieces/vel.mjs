import { C, shadowEl } from '../base.mjs';
// Mirada ràpida: uns prismàtics antics de pell i llautó a la taula, i una estrella daurada a la paret
const L1 = '#7A4A26', L2 = '#5A3518', L3 = '#9A6436', BR = '#F3D99A';

// estrella facetada (cada punta: meitat clara, meitat fosca)
function star(cx, cy, R, r) {
  let s = '';
  for (let i = 0; i < 5; i++) {
    const a = (-90 + i * 72) * Math.PI / 180, aL = a - 36 * Math.PI / 180, aR = a + 36 * Math.PI / 180;
    const P = [cx + R * Math.cos(a), cy + R * Math.sin(a)], QL = [cx + r * Math.cos(aL), cy + r * Math.sin(aL)], QR = [cx + r * Math.cos(aR), cy + r * Math.sin(aR)];
    s += `<path d="M${cx} ${cy} L${QL} L${P}Z" fill="${i === 0 || i === 1 ? C.gold : C.gold2}"/>`;
    s += `<path d="M${cx} ${cy} L${P} L${QR}Z" fill="${i === 0 || i === 1 ? '#F2D58C' : '#D9A845'}"/>`;
  }
  return s;
}

function lens(cx, cy) {
  return `
  <circle cx="${cx}" cy="${cy}" r="128" fill="${C.gold2}"/>
  <path d="M${cx + 128 * Math.cos(-2.4)} ${cy + 128 * Math.sin(-2.4)} A128 128 0 0 1 ${cx + 128 * Math.cos(0.75)} ${cy + 128 * Math.sin(0.75)} L${cx} ${cy}Z" fill="${C.gold}"/>
  <circle cx="${cx}" cy="${cy}" r="112" fill="#1A1F1C"/>
  <circle cx="${cx}" cy="${cy}" r="98" fill="url(#vglass)"/>
  <circle cx="${cx}" cy="${cy}" r="98" fill="none" stroke="#3B4A45" stroke-width="3"/>
  <circle cx="${cx}" cy="${cy}" r="62" fill="none" stroke="${C.em}" stroke-width="2" opacity=".35"/>
  <path d="M${cx - 30} ${cy - 84} A 88 88 0 0 1 ${cx + 82} ${cy - 22}" stroke="#fff" stroke-width="13" fill="none" opacity=".55" stroke-linecap="round"/>
  <path d="M${cx - 62} ${cy + 40} A 76 76 0 0 0 ${cx - 6} ${cy + 74}" stroke="${C.purple}" stroke-width="8" fill="none" opacity=".45" stroke-linecap="round"/>
  <circle cx="${cx + 38}" cy="${cy - 40}" r="9" fill="#fff" opacity=".85"/>
  <circle cx="${cx + 128 * Math.cos(-0.9)}" cy="${cy + 128 * Math.sin(-0.9)}" r="0"/>`;
}

function half(cx, cy, dir) {
  // dir = -1 esquerra, +1 dreta. Carcassa dels prismes (darrere), tub de l'objectiu (davant)
  const hx = cx - dir * 34; // carcassa desplaçada cap al centre
  return `
  <rect x="${hx - 112}" y="${cy - 250}" width="224" height="250" rx="56" fill="${L1}"/>
  <path d="M${hx + 40} ${cy - 250} h16 a56 56 0 0 1 56 56 v194 h-72z" fill="${L3}"/>
  <path d="M${hx - 112} ${cy - 194} a56 56 0 0 1 40 -54 v248 h-40z" fill="${L2}"/>
  <rect x="${hx - 112}" y="${cy - 262}" width="224" height="40" rx="20" fill="${C.gold2}"/>
  <rect x="${hx - 60}" y="${cy - 262}" width="172" height="40" rx="20" fill="${C.gold}"/>
  <rect x="${hx - 112}" y="${cy - 170}" width="224" height="200" fill="url(#vleather)" opacity=".22"/>
  <!-- cos del tub vist una mica des de dalt -->
  <path d="M${cx - 136} ${cy - 40} A136 136 0 0 1 ${cx + 136} ${cy - 40} V${cy} H${cx - 136}Z" fill="${L3}"/>
  <circle cx="${cx}" cy="${cy}" r="140" fill="${L1}"/>
  <path d="M${cx} ${cy - 140} A140 140 0 0 1 ${cx + 140} ${cy} L${cx} ${cy}Z" fill="${L3}"/>
  <path d="M${cx - 140} ${cy} A140 140 0 0 0 ${cx} ${cy + 140} L${cx} ${cy}Z" fill="${L2}"/>
  <circle cx="${cx}" cy="${cy}" r="140" fill="url(#vleather)" opacity=".22"/>
  <circle cx="${cx}" cy="${cy}" r="139" fill="none" stroke="${L2}" stroke-width="3" opacity=".7"/>
  ${lens(cx, cy)}`;
}

export default () => {
  const X0 = 985, cy = 548, xl = 800, xr = 1170;
  return `<defs>
    <radialGradient id="vglass" cx=".62" cy=".32" r=".9"><stop offset="0" stop-color="#3E8C86"/><stop offset=".45" stop-color="#1F4F4B"/><stop offset="1" stop-color="#0C211F"/></radialGradient>
    <pattern id="vleather" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="#2A1608"/><circle cx="6.5" cy="6.5" r="1.1" fill="#2A1608"/></pattern>
  </defs>
  <!-- estrella a la paret -->
  <g opacity=".25" filter="url(#soft)">${star(512, 222, 64, 27).replace(/fill="[^"]+"/g, `fill="${C.ink2}"`)}</g>
  ${star(530, 200, 64, 27)}
  <!-- ombra -->
  ${shadowEl(900, 694, 470, 40, .5)}
  ${shadowEl(xl - 10, 688, 150, 16, .55)}${shadowEl(xr - 10, 688, 150, 16, .55)}
  <!-- corretja de pell sobre la taula -->
  <path d="M${xl - 148} ${cy - 20} C ${xl - 200} ${cy + 40} ${xl - 220} ${cy + 120} ${xl - 290} ${cy + 160} C ${xl - 340} ${cy + 188} ${xl - 400} ${cy + 190} ${xl - 440} ${cy + 182}" stroke="${L2}" stroke-width="28" fill="none" stroke-linecap="round"/>
  <path d="M${xl - 148} ${cy - 20} C ${xl - 200} ${cy + 40} ${xl - 220} ${cy + 120} ${xl - 290} ${cy + 160} C ${xl - 340} ${cy + 188} ${xl - 400} ${cy + 190} ${xl - 440} ${cy + 182}" stroke="${L3}" stroke-width="6" fill="none" stroke-linecap="round" opacity=".6" transform="translate(2 -5)"/>
  <path d="M${xr + 148} ${cy - 20} C ${xr + 185} ${cy + 40} ${xr + 175} ${cy + 110} ${xr + 210} ${cy + 140} C ${xr + 240} ${cy + 165} ${xr + 290} ${cy + 168} ${xr + 330} ${cy + 160}" stroke="${L2}" stroke-width="28" fill="none" stroke-linecap="round"/>
  <path d="M${xr + 148} ${cy - 20} C ${xr + 185} ${cy + 40} ${xr + 175} ${cy + 110} ${xr + 210} ${cy + 140} C ${xr + 240} ${cy + 165} ${xr + 290} ${cy + 168} ${xr + 330} ${cy + 160}" stroke="${L3}" stroke-width="6" fill="none" stroke-linecap="round" opacity=".6" transform="translate(2 -5)"/>
  <!-- ullets (darrere) -->
  <rect x="${xl + 24}" y="${cy - 318}" width="104" height="70" rx="22" fill="#1A1F1C"/><rect x="${xl + 70}" y="${cy - 318}" width="58" height="70" rx="22" fill="#2F3A36"/>
  <rect x="${xr - 128}" y="${cy - 318}" width="104" height="70" rx="22" fill="#1A1F1C"/><rect x="${xr - 82}" y="${cy - 318}" width="58" height="70" rx="22" fill="#2F3A36"/>
  <!-- pont central i roda d'enfocament -->
  <rect x="${X0 - 44}" y="${cy - 300}" width="88" height="300" rx="30" fill="${C.gold2}"/>
  <rect x="${X0}" y="${cy - 300}" width="44" height="300" rx="22" fill="${C.gold}"/>
  <rect x="${X0 - 60}" y="${cy - 340}" width="120" height="56" rx="16" fill="#2B2420"/>
  ${[...Array(9).keys()].map(i => `<rect x="${X0 - 54 + i * 12.5}" y="${cy - 336}" width="5" height="48" rx="2" fill="${i > 4 ? '#5A4D44' : '#3B322C'}"/>`).join('')}
  <rect x="${X0 - 60}" y="${cy - 340}" width="120" height="10" rx="5" fill="${C.gold}"/>
  ${half(xl, cy, -1)}${half(xr, cy, 1)}
  <!-- frontisses entre els tubs -->
  <rect x="${X0 - 70}" y="${cy - 60}" width="140" height="44" rx="22" fill="${C.gold2}"/><rect x="${X0 - 20}" y="${cy - 60}" width="90" height="22" rx="11" fill="${C.gold}"/>
  <circle cx="${X0}" cy="${cy - 38}" r="12" fill="${BR}"/>
  <!-- anelles de la corretja -->
  <circle cx="${xl - 146}" cy="${cy - 34}" r="15" fill="none" stroke="${C.gold}" stroke-width="7"/>
  <circle cx="${xr + 146}" cy="${cy - 34}" r="15" fill="none" stroke="${C.gold}" stroke-width="7"/>`;
};
