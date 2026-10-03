// Il·lustracions dels jocs de Numi Ment (16:9, 1600×900). Estil editorial pla amb gra:
// paret crema, taula/terra verd, finestra amb fulles a la dreta, llum de costat i ombres llargues.
// Paleta: verd nit #1D4740 · maragda #2FA58E · daurat #E9C46F · crema #F6F1E4 · corall #E07A5F.
export const C = { ink: '#1D4740', ink2: '#163A34', em: '#2FA58E', em2: '#24806E', gold: '#E9C46F', gold2: '#C9932F', cream: '#F6F1E4', wall: '#F1E8D8', wall2: '#E6DAC5', coral: '#E07A5F', coral2: '#B85A43', wood: '#C98C4F', wood2: '#9E6A35', blue: '#4A7FC1', blue2: '#2F5E9C', purple: '#8A66B8', purple2: '#5F428A', red: '#D8574A', red2: '#A63D33', green: '#5FAE5A', green2: '#3E7F3B', white: '#FFFDF7', shadow: 'rgba(16,40,35,.28)' };
export function scene(objects, { floor = 0.64, window = true, extra = '' } = {}) {
  const fy = 900 * floor;
  const leaves = [[1440, 120, 30], [1500, 210, -20], [1400, 260, 50], [1530, 330, 10], [1460, 400, -40], [1550, 470, 25]].map(([x, y, r]) =>
    `<path d="M0 0 C 30 -40 90 -40 120 0 C 90 40 30 40 0 0Z" transform="translate(${x} ${y}) rotate(${r}) scale(.75)" fill="${C.em2}" opacity=".55"/>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900">
<defs>
  <filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .09 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>
  <filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="14"/></filter>
  <linearGradient id="wallg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${C.wall}"/><stop offset="1" stop-color="${C.wall2}"/></linearGradient>
  <linearGradient id="floorg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.em2}"/><stop offset="1" stop-color="${C.ink}"/></linearGradient>
  <radialGradient id="pool" cx="0.6" cy="0.42" r="0.5"><stop offset="0" stop-color="#FFF8E8" stop-opacity=".85"/><stop offset=".55" stop-color="#FFF8E8" stop-opacity=".25"/><stop offset="1" stop-color="#FFF8E8" stop-opacity="0"/></radialGradient>
  <radialGradient id="floorpool" cx="0.6" cy="0.15" r="0.55"><stop offset="0" stop-color="#5FD0B5" stop-opacity=".38"/><stop offset="1" stop-color="#5FD0B5" stop-opacity="0"/></radialGradient>
  <linearGradient id="floordark" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B231F" stop-opacity="0"/><stop offset="1" stop-color="#0B231F" stop-opacity=".55"/></linearGradient>
  <radialGradient id="vign" cx="0.58" cy="0.45" r="0.8"><stop offset=".55" stop-color="#0B231F" stop-opacity="0"/><stop offset="1" stop-color="#0B231F" stop-opacity=".38"/></radialGradient>
  <linearGradient id="walltop" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9C8A6E" stop-opacity=".28"/><stop offset=".4" stop-color="#9C8A6E" stop-opacity="0"/></linearGradient>
  <filter id="lift" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="-46" dy="26" stdDeviation="24" flood-color="#0B231F" flood-opacity=".34"/><feDropShadow dx="-4" dy="4" stdDeviation="3" flood-color="#0B231F" flood-opacity=".25"/></filter>
  <filter id="tow" filterUnits="userSpaceOnUse" x="0" y="0" width="1600" height="900"><feFlood flood-color="#fff"/><feComposite in2="SourceAlpha" operator="in"/></filter>
  <mask id="objm" maskUnits="userSpaceOnUse" x="0" y="0" width="1600" height="900"><g filter="url(#tow)"><use href="#objs"/></g></mask>
  <linearGradient id="shade" gradientUnits="userSpaceOnUse" x1="1250" y1="150" x2="700" y2="760"><stop offset="0" stop-color="#FFF6E0" stop-opacity=".30"/><stop offset=".42" stop-color="#FFF6E0" stop-opacity="0"/><stop offset=".55" stop-color="#0B231F" stop-opacity="0"/><stop offset="1" stop-color="#0B231F" stop-opacity=".45"/></linearGradient>
  <filter id="far" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="2.4"/></filter>
  <linearGradient id="lightg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".0"/><stop offset=".5" stop-color="#fff" stop-opacity=".18"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
</defs>
<rect width="1600" height="900" fill="url(#wallg)"/>
<rect width="1600" height="${fy}" fill="url(#pool)"/><rect width="1600" height="${fy}" fill="url(#walltop)"/>
<path d="M0 ${fy - 120} L 1600 ${fy - 340} L 1600 ${fy - 250} L 0 ${fy - 30}Z" fill="url(#lightg)"/>
${window ? `<g filter="url(#far)"><rect x="1330" y="0" width="270" height="${fy - 40}" fill="${C.em}" opacity=".22"/><rect x="1330" y="0" width="22" height="${fy - 40}" fill="${C.em2}"/><rect x="1330" y="${fy * .42}" width="270" height="16" fill="${C.em2}"/>${leaves}</g><rect x="1320" y="0" width="14" height="${fy - 40}" fill="#0B231F" opacity=".12"/>` : ''}
<path d="M0 ${fy} L 1600 ${fy - 40} L 1600 900 L 0 900Z" fill="url(#floorg)"/>
<path d="M0 ${fy} L 1600 ${fy - 40} L 1600 900 L 0 900Z" fill="url(#floorpool)"/>
<path d="M0 ${fy} L 1600 ${fy - 40} L 1600 900 L 0 900Z" fill="url(#floordark)"/>
<path d="M0 ${fy} L 1600 ${fy - 40}" stroke="#7FE0C8" stroke-width="3" opacity=".55"/>
<path d="M0 ${fy - 2} L 1600 ${fy - 42} L 1600 ${fy - 30} L 0 ${fy + 10}Z" fill="#0B231F" opacity=".18"/>
${extra}
<defs><g id="objs">${objects}</g></defs><g filter="url(#lift)"><use href="#objs"/></g>
<rect width="1600" height="900" fill="url(#shade)" mask="url(#objm)"/>
<rect width="1600" height="900" fill="url(#vign)"/>
<rect width="1600" height="900" filter="url(#grain)" opacity=".9"/>
</svg>`;
}
// ombra suau sota un objecte
export const shadowEl = (cx, cy, rx, ry = 22, op = .35) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${C.ink2}" opacity="${op}" filter="url(#soft)"/>`;
