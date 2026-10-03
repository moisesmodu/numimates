import { C, shadowEl } from '../base.mjs';
// Sinònims i contraris: un diccionari gruixut obert sobre un faristol, amb cinta de punt de llibre i unes ulleres
const f = n => +n.toFixed(1);
let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
export default () => {
  const gx = 950, W = 360, T = 262, B = 598;
  // vora d'una pàgina: u=0 a l'exterior, u=1 al plec
  const edge = (u, base) => base - 34 * Math.sin(Math.PI * u * .85) + 22 * u * u;
  const X = (side, u) => gx + side * (W - u * W);
  const pagePath = (side, dx = 0, dy = 0) => {
    let d = '';
    for (let i = 0; i <= 24; i++) { const u = i / 24; d += `${i ? 'L' : 'M'}${f(X(side, u) + dx * (1 - u * .92))} ${f(edge(u, T) + dy * (1 - u * .5))} `; }
    for (let i = 24; i >= 0; i--) { const u = i / 24; d += `L${f(X(side, u) + dx * (1 - u * .92))} ${f(edge(u, B) + dy)} `; }
    return d + 'Z';
  };
  const lineAt = (side, t, u0, u1) => { let d = ''; for (let i = 0; i <= 10; i++) { const u = u0 + (u1 - u0) * i / 10; const y = edge(u, T) + (B - T) * t; d += `${i ? 'L' : 'M'}${f(X(side, u))} ${f(y)} `; } return d; };
  // text fals en dues columnes per pàgina
  let text = '';
  for (const side of [-1, 1]) for (const [c0, c1] of [[.1, .47], [.53, .88]]) {
    for (let t = .1; t < .92; t += .062) {
      const r = rnd(), head = r < .32, end = c1 - (r > .85 ? (c1 - c0) * .45 : 0);
      if (head) {
        const hEnd = c0 + (c1 - c0) * (.22 + rnd() * .15);
        text += `<path d="${lineAt(side, t, c0, hEnd)}" stroke="#4E5A55" stroke-width="7" fill="none" stroke-linecap="round"/><path d="${lineAt(side, t, hEnd + .03, end)}" stroke="#B8B09F" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      } else text += `<path d="${lineAt(side, t, c0 + (r < .5 ? .04 : 0), end)}" stroke="#B8B09F" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    }
  }
  const pages = [-1, 1].map(side => `
    <path d="${pagePath(side, side * 30, 40)}" fill="${C.ink2}"/><path d="${pagePath(side, side * 26, 34)}" fill="${C.ink}"/>
    ${[8, 7, 6, 5, 4, 3, 2, 1].map(k => `<path d="${pagePath(side, side * k * 3, k * 3.6)}" fill="${k % 2 ? '#DCD0B6' : '#EEE6D3'}"/>`).join('')}
    <path d="${pagePath(side)}" fill="${side < 0 ? '#F3ECDC' : '#FBF6EA'}"/>`).join('');
  const gutter = [-1, 1].map(side => { let d = ''; for (let i = 0; i <= 8; i++) { const u = .82 + .18 * i / 8; d += `${i ? 'L' : 'M'}${f(X(side, u))} ${f(edge(u, T))} `; } for (let i = 8; i >= 0; i--) { const u = .82 + .18 * i / 8; d += `L${f(X(side, u))} ${f(edge(u, B))} `; } return `<path d="${d}Z" fill="#D9CDB4" opacity=".55"/>`; }).join('');
  const gTop = edge(1, T), gBot = edge(1, B);
  // cinta del punt de llibre
  const ribbon = `<path d="M${gx + 6} ${gTop + 4} C ${gx + 30} ${gTop + 120} ${gx + 18} ${gBot - 120} ${gx + 46} ${gBot - 10} L ${gx + 60} ${gBot + 60} C ${gx + 66} ${gBot + 80} ${gx + 62} ${gBot + 96} ${gx + 58} ${gBot + 112} L ${gx + 48} ${gBot + 98} L ${gx + 32} ${gBot + 114} C ${gx + 36} ${gBot + 90} ${gx + 36} ${gBot + 70} ${gx + 30} ${gBot + 50} L ${gx + 22} ${gBot - 10} C ${gx + 0} ${gBot - 120} ${gx + 10} ${gTop + 120} ${gx - 6} ${gTop + 4}Z" fill="${C.coral}"/>
    <path d="M${gx + 2} ${gTop + 8} C ${gx + 18} ${gTop + 120} ${gx + 10} ${gBot - 120} ${gx + 30} ${gBot - 10}" stroke="${C.coral2}" stroke-width="5" fill="none" opacity=".6"/>`;
  // faristol
  const sx0 = gx - W - 50, sx1 = gx + W + 50, ly = B + 42;
  const stand = `
    <path d="M${gx - 260} ${ly + 40} L ${gx - 290} ${ly + 92} L ${gx - 262} ${ly + 92} L ${gx - 228} ${ly + 40}Z" fill="${C.wood2}"/><path d="M${gx + 228} ${ly + 40} L ${gx + 262} ${ly + 92} L ${gx + 290} ${ly + 92} L ${gx + 260} ${ly + 40}Z" fill="${C.wood2}"/>
    <rect x="${gx - 330}" y="${ly + 86}" width="660" height="18" rx="8" fill="${C.wood2}"/><rect x="${gx - 330}" y="${ly + 86}" width="660" height="7" rx="3.5" fill="${C.wood}"/>
    <path d="M${sx0} ${ly - 8} L ${sx1} ${ly - 8} L ${sx1 + 6} ${ly + 6} L ${sx0 - 6} ${ly + 6}Z" fill="#E2AC6B"/>
    <rect x="${sx0 - 6}" y="${ly + 6}" width="${sx1 - sx0 + 12}" height="38" rx="6" fill="${C.wood}"/><rect x="${sx0 - 6}" y="${ly + 30}" width="${sx1 - sx0 + 12}" height="14" rx="6" fill="${C.wood2}"/>
    <path d="M${sx1 - 200} ${ly - 1} L ${sx1 - 10} ${ly - 1}" stroke="#F2C88E" stroke-width="4" stroke-linecap="round"/>`;
  // ulleres de lectura
  const glasses = `<g transform="translate(420 726) rotate(-8)">${shadowEl(-10, 24, 140, 14, .45)}
    <path d="M-114 -6 L 20 -44 M114 -6 L -10 -48" stroke="${C.gold2}" stroke-width="5" stroke-linecap="round" opacity=".85"/>
    <ellipse cx="-62" cy="0" rx="54" ry="34" fill="#fff" opacity=".22"/><ellipse cx="62" cy="0" rx="54" ry="34" fill="#fff" opacity=".22"/>
    <ellipse cx="-62" cy="0" rx="54" ry="34" fill="none" stroke="${C.gold2}" stroke-width="7"/><ellipse cx="62" cy="0" rx="54" ry="34" fill="none" stroke="${C.gold2}" stroke-width="7"/>
    <path d="M-8 -6 Q 0 -16 8 -6" stroke="${C.gold2}" stroke-width="7" fill="none"/>
    <path d="M-80 -16 Q -64 -24 -46 -20 M44 -16 Q 62 -24 80 -20" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/></g>`;
  return `${shadowEl(gx - 60, ly + 100, 420, 26, .55)}<path d="M${gx - 360} ${T + 40} L ${gx - 420} ${ly + 40} L ${gx + 200} ${ly + 40} Z" fill="${C.ink2}" opacity=".18" filter="url(#soft)"/>
  ${stand}${pages}${gutter}${text}${ribbon}
  <path d="M${gx} ${gTop} L ${gx} ${gBot}" stroke="#C9BCA0" stroke-width="3"/>
  ${glasses}`;
};
