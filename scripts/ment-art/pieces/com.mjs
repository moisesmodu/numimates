import { C, shadowEl } from '../base.mjs';
// La compra: cistell de vímet amb pa, ampolla de llet, taronges i un tiquet llarg que en surt
const f = n => +n.toFixed(1);
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

// cinta (tiquet) al llarg d'una corba de Bézier cúbica
function ribbon(P, w, N = 70) {
  const pts = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N, u = 1 - t;
    const x = u * u * u * P[0][0] + 3 * u * u * t * P[1][0] + 3 * u * t * t * P[2][0] + t * t * t * P[3][0];
    const y = u * u * u * P[0][1] + 3 * u * u * t * P[1][1] + 3 * u * t * t * P[2][1] + t * t * t * P[3][1];
    const dx = 3 * u * u * (P[1][0] - P[0][0]) + 6 * u * t * (P[2][0] - P[1][0]) + 3 * t * t * (P[3][0] - P[2][0]);
    const dy = 3 * u * u * (P[1][1] - P[0][1]) + 6 * u * t * (P[2][1] - P[1][1]) + 3 * t * t * (P[3][1] - P[2][1]);
    const l = Math.hypot(dx, dy); pts.push({ x, y, nx: -dy / l, ny: dx / l, tx: dx / l, ty: dy / l });
  }
  const L = pts.map(p => `${f(p.x + p.nx * w / 2)} ${f(p.y + p.ny * w / 2)}`), R = pts.map(p => `${f(p.x - p.nx * w / 2)} ${f(p.y - p.ny * w / 2)}`).reverse();
  return { pts, d: `M${L.join(' L')} L${R.join(' L')}Z` };
}

export default () => {
  const cx = 1010, rimY = 470, rx = 290, ry = 42, botY = 700, brx = 232;
  // ---- cos del cistell
  const body = `M${cx - rx} ${rimY} C ${cx - rx + 4} ${rimY + 120} ${cx - brx - 14} ${botY - 40} ${cx - brx} ${botY} A ${brx} 34 0 0 0 ${cx + brx} ${botY} C ${cx + brx + 14} ${botY - 40} ${cx + rx - 4} ${rimY + 120} ${cx + rx} ${rimY} A ${rx} ${ry} 0 0 1 ${cx - rx} ${rimY}Z`;
  // trenat: files corbes de peces arrodonides
  const sagY = (x, y0) => { const k = (x - cx) / (rx + 6); return y0 + 40 * Math.sqrt(Math.max(0, 1 - k * k)); };
  let weave = '', stakes = '';
  for (let r = 0; r < 12; r++) {
    const y0 = rimY + 14 + r * 22;
    let d = '', h = '';
    for (let x = cx - rx - 20; x <= cx + rx + 20; x += 10) { d += `${d ? 'L' : 'M'}${x} ${f(sagY(x, y0))} `; h += `${h ? 'L' : 'M'}${x} ${f(sagY(x, y0) - 5)} `; }
    weave += `<path d="${d}" stroke="${C.wood}" stroke-width="18" fill="none"/><path d="${h}" stroke="#E2B074" stroke-width="4" fill="none" opacity=".85"/>`;
    for (let x = cx - rx + (r % 2 ? 0 : 23); x <= cx + rx; x += 46) {
      const xx = cx + (x - cx) * (1 - r * .016), y = sagY(xx, y0);
      stakes += `<rect x="${f(xx - 8)}" y="${f(y - 12)}" width="16" height="24" rx="7" fill="#B27A40"/><rect x="${f(xx - 1)}" y="${f(y - 9)}" width="5" height="18" rx="2.5" fill="#D9A462"/>`;
    }
  }
  weave += stakes;
  // ombra del costat esquerre i base
  const shade = `<path d="M${cx - rx - 10} ${rimY - 10} C ${cx - rx + 10} ${rimY + 140} ${cx - brx - 10} ${botY - 30} ${cx - brx + 10} ${botY + 40} L ${cx - 120} ${botY + 60} C ${cx - 200} ${botY - 60} ${cx - 215} ${rimY + 120} ${cx - 200} ${rimY + 20}Z" fill="${C.ink2}" opacity=".28"/>
    <path d="M${cx - rx} ${botY - 30} Q ${cx} ${botY + 34} ${cx + rx} ${botY - 30} L ${cx + rx} ${botY + 60} L ${cx - rx} ${botY + 60}Z" fill="${C.ink2}" opacity=".22"/>
    <path d="M${cx - rx} ${rimY} A ${rx} ${ry} 0 0 0 ${cx + rx} ${rimY} L ${cx + rx} ${rimY + 70} Q ${cx} ${rimY + 120} ${cx - rx} ${rimY + 70}Z" fill="${C.ink2}" opacity=".12"/>`;
  // vora trenada (meitat davantera)
  let braid = '';
  for (let i = 0; i <= 34; i++) {
    const a = Math.PI * i / 34, x = cx + rx * Math.cos(a), y = rimY + ry * Math.sin(a);
    braid += `<ellipse cx="${f(x)}" cy="${f(y)}" rx="17" ry="11" transform="rotate(${f(-35 + (x - cx) / rx * 20)} ${f(x)} ${f(y)})" fill="${i % 2 ? '#DDA868' : C.wood}"/>`;
  }
  const rimFront = `<path d="M${cx + rx} ${rimY} A ${rx} ${ry} 0 0 1 ${cx - rx} ${rimY}" stroke="${C.wood2}" stroke-width="30" fill="none" stroke-linecap="round"/>${braid}`;
  const rimBack = `<path d="M${cx - rx} ${rimY} A ${rx} ${ry} 0 0 1 ${cx + rx} ${rimY}" stroke="${C.wood2}" stroke-width="24" fill="none"/><path d="M${cx - rx} ${rimY} A ${rx} ${ry} 0 0 1 ${cx + rx} ${rimY}" stroke="${C.wood}" stroke-width="14" fill="none" stroke-dasharray="16 10"/>`;
  const inside = `<ellipse cx="${cx}" cy="${rimY}" rx="${rx}" ry="${ry}" fill="#6E4A26"/>`;
  // nansa
  const handle = `<path d="M${cx - 230} ${rimY + 10} C ${cx - 220} ${150} ${cx + 220} ${150} ${cx + 230} ${rimY + 10}" stroke="${C.wood2}" stroke-width="30" fill="none"/>
    <path d="M${cx - 230} ${rimY + 10} C ${cx - 220} ${150} ${cx + 220} ${150} ${cx + 230} ${rimY + 10}" stroke="${C.wood}" stroke-width="22" fill="none" stroke-dasharray="15 7"/>
    <path d="M${cx - 150} ${300} C ${cx - 80} ${222} ${cx + 80} ${222} ${cx + 150} ${300}" stroke="#E7B677" stroke-width="5" fill="none" stroke-linecap="round" opacity=".7"/>`;
  // bossa de paper (dreta) amb verdures
  const bag = `<path d="M${cx + 60} 330 L ${cx + 270} 316 L ${cx + 262} ${rimY + 30} L ${cx + 70} ${rimY + 30}Z" fill="#D9B98A"/><path d="M${cx + 60} 330 L ${cx + 150} 324 L ${cx + 158} ${rimY + 30} L ${cx + 70} ${rimY + 30}Z" fill="#C7A270"/>
    <path d="M${cx + 60} 330 l 22 -14 l 18 16 l 22 -16 l 20 15 l 22 -15 l 20 14 l 22 -16 l 20 15 l 22 -14 l 22 16 l 20 -2Z" fill="#E6CDA3"/>`;
  const leaf = (x, y, r, s, col) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})"><path d="M0 0 C 20 -40 70 -60 120 -40 C 90 0 40 20 0 0Z" fill="${col}"/><path d="M0 0 C 40 -20 80 -36 118 -40" stroke="${C.ink}" stroke-width="3" fill="none" opacity=".35"/></g>`;
  const greens = [[cx + 120, 335, -78, 1.05, C.em2], [cx + 165, 335, -58, 1.12, C.em], [cx + 205, 335, -38, 1, C.em2], [cx + 230, 338, -18, .9, C.em], [cx + 105, 338, -100, .95, C.em], [cx + 245, 342, 2, .8, C.em2]].map(a => leaf(...a)).join('');
  // pa (baguet) inclinat
  const bread = `<g transform="translate(${cx - 145} 300) rotate(-62)">
    <rect x="-200" y="-56" width="400" height="112" rx="56" fill="#B47434"/><rect x="-196" y="-56" width="392" height="80" rx="40" fill="#D9A055"/>
    <rect x="-180" y="-44" width="300" height="20" rx="10" fill="#E8BE78" opacity=".8"/>
    ${[-130, -60, 10, 80, 150].map(x => `<path d="M${x - 24} 10 Q ${x} -18 ${x + 26} -34" stroke="#F1D49C" stroke-width="13" fill="none" stroke-linecap="round"/>`).join('')}</g>`;
  // ampolla de llet
  const bx = cx + 10;
  const bottle = `<path d="M${bx - 30} 205 L ${bx + 30} 205 L ${bx + 32} 260 C ${bx + 34} 300 ${bx + 86} 320 ${bx + 88} 370 L ${bx + 88} ${rimY + 40} L ${bx - 88} ${rimY + 40} L ${bx - 88} 370 C ${bx - 86} 320 ${bx - 34} 300 ${bx - 32} 260Z" fill="#F7F2E6"/>
    <path d="M${bx - 30} 205 L ${bx - 8} 205 L ${bx - 10} 262 C ${bx - 14} 302 ${bx - 50} 324 ${bx - 52} 372 L ${bx - 52} ${rimY + 40} L ${bx - 88} ${rimY + 40} L ${bx - 88} 370 C ${bx - 86} 320 ${bx - 34} 300 ${bx - 32} 260Z" fill="#E0D8C6"/>
    <path d="M${bx - 32} 236 L ${bx + 32} 236 L ${bx + 32} 260 C ${bx + 34} 296 ${bx + 70} 312 ${bx + 82} 340 L ${bx - 82} 340 C ${bx - 70} 312 ${bx - 34} 296 ${bx - 32} 260Z" fill="#E9EEEA" opacity=".9"/>
    <path d="M${bx + 52} 352 L ${bx + 52} ${rimY + 20}" stroke="#fff" stroke-width="14" stroke-linecap="round" opacity=".9"/><path d="M${bx + 18} 240 L ${bx + 18} 268" stroke="#fff" stroke-width="7" stroke-linecap="round"/>
    <rect x="${bx - 36}" y="178" width="72" height="34" rx="8" fill="${C.em2}"/><rect x="${bx - 36}" y="178" width="72" height="12" rx="6" fill="${C.em}"/><rect x="${bx - 38}" y="204" width="76" height="9" rx="4" fill="${C.ink}"/>`;
  // taronges
  let oid = 0;
  const orange = (x, y, r) => { const id = 'or' + (oid++); return `<clipPath id="${id}"><circle cx="${x}" cy="${y}" r="${r}"/></clipPath>
    <circle cx="${x}" cy="${y}" r="${r}" fill="#C9631F"/><circle cx="${x + r * .22}" cy="${y - r * .2}" r="${r * .9}" fill="#EA8A35" clip-path="url(#${id})"/>
    <ellipse cx="${x + r * .38}" cy="${y - r * .4}" rx="${r * .22}" ry="${r * .13}" transform="rotate(-35 ${x + r * .38} ${y - r * .4})" fill="#FFD9A8" opacity=".75"/>
    <circle cx="${x + r * .05}" cy="${y - r * .9}" r="4" fill="${C.ink}" opacity=".6"/>`; };
  const oLeaf = (x, y, r) => `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M0 0 C 14 -22 44 -26 62 -12 C 44 8 18 10 0 0Z" fill="${C.em2}"/><path d="M0 0 C 20 -10 40 -13 60 -12" stroke="${C.ink}" stroke-width="2.5" fill="none" opacity=".4"/></g>`;
  const oranges = `${orange(cx - 150, rimY - 22, 62)}${orange(cx + 160, rimY - 14, 58)}${orange(cx - 20, rimY - 6, 72)}${oLeaf(cx - 18, rimY - 76, -20)}${oLeaf(cx - 150, rimY - 82, 200)}${oLeaf(cx + 165, rimY - 70, -40)}`;
  // tiquet
  const rb = ribbon([[cx + 185, rimY - 34], [cx + 330, rimY + 50], [cx + 190, 735], [cx + 400, 742]], 96);
  let lines = '';
  rb.pts.forEach((p, i) => {
    if (i < 4 || i > 66 || i % 3) return;
    const P = t => `${f(p.x + p.nx * 96 * t)} ${f(p.y + p.ny * 96 * t)}`;
    if (i % 15 === 0) { lines += `<path d="M${P(-.34)} L ${P(.34)}" stroke="#B9BFBA" stroke-width="2" stroke-dasharray="5 5"/>`; return; }
    const len = .18 + rnd() * .3;
    lines += `<path d="M${P(-.34)} L ${P(-.34 + len)}" stroke="#A3ACA7" stroke-width="3.5" stroke-linecap="round"/><path d="M${P(.2)} L ${P(.34)}" stroke="#A3ACA7" stroke-width="3.5" stroke-linecap="round"/>`;
  });
  const end = rb.pts[rb.pts.length - 1];
  const receipt = `<path d="${rb.d}" fill="${C.ink2}" opacity=".3" transform="translate(-14 12)" filter="url(#soft)"/>
    <path d="${rb.d}" fill="#FBF7EE"/>${lines}
`;
  // monedes
  const coin = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="6" rx="34" ry="13" fill="${C.gold2}"/><ellipse cx="0" cy="0" rx="34" ry="13" fill="${C.gold}"/><ellipse cx="0" cy="0" rx="24" ry="8" fill="none" stroke="${C.gold2}" stroke-width="3"/></g>`;
  const cast = `<path d="M${cx - 220} ${botY + 10} L ${cx - 520} ${botY + 90} L ${cx - 120} ${botY + 100} L ${cx + 200} ${botY + 30}Z" fill="${C.ink2}" opacity=".35" filter="url(#soft)"/>`;
  return `${cast}${shadowEl(cx - 20, botY + 18, 300, 30, .5)}
  ${inside}${rimBack}${handle}${bag}${greens}${bread}${bottle}${oranges}
  <clipPath id="basketclip"><path d="${body}"/></clipPath>
  <path d="${body}" fill="#5E3B1C"/><g clip-path="url(#basketclip)">${weave}${shade}</g>
  ${rimFront}
  ${receipt}
  ${shadowEl(cx - 330, 748, 90, 14, .35)}${coin(cx - 380, 735)}${coin(cx - 300, 752, .95)}${coin(cx - 345, 718, .9)}`;
};
