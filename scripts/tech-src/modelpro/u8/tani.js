/* Tech 3D · Nivell 2 · unitat 8 «Producte final» · animacions de teoria (TANI). Dibuixos propis de Numi (SVG + CSS .ta + SMIL).
   Claus: p81road, p81board, p81meas, p81limits (p8-1) · p82struct, p82deps, p82export (p8-2) · p83test, p83range, p83review,
   p83iter (p8-3) · p84road, p84print, p84pitch (p8-4). L'objecte que hi surt és el comptador de pals i anelles de la mestra
   Sílvia (base de n × 34 mm, pals de 10 mm, anelles de 30 mm). Amb «reduir moviment», cada dibuix es veu acabat. */
Object.assign(TANI, (() => {
  // perspectiva isomètrica: (x, y, z) en mm → punt del dibuix (x cap a la dreta i avall, y cap a l'esquerra i avall, z amunt)
  const iso = (cx, cy, k) => (x, y, z) => [cx + (x - y) * 0.866 * k, cy + (x + y) * 0.5 * k - z * k];
  const f1 = v => v.toFixed(1);
  const pts = (f, l) => l.map(p => f(...p).map(f1).join(',')).join(' ');
  // una caixa: les cares visibles són la de +y (davant a l'esquerra), la de +x (davant a la dreta) i la de dalt
  const ibox = (f, x0, y0, z0, w, d, h, c) => { const x1 = x0 + w, y1 = y0 + d, z1 = z0 + h;
    return `<polygon points="${pts(f, [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]])}" fill="${c[1]}"/><polygon points="${pts(f, [[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]])}" fill="${c[2]}"/><polygon points="${pts(f, [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]])}" fill="${c[0]}"/>`; };
  // un cilindre dret (r en mm); hole: el forat de dalt (anella)
  const icyl = (f, k, x, y, z0, r, h, c, hole) => { const [bx, by] = f(x, y, z0), [, ty] = f(x, y, z0 + h), rx = r * k * 1.2247, ry = r * k * 0.7071;
    return `<path d="M${f1(bx - rx)} ${f1(ty)}V${f1(by)}A${f1(rx)} ${f1(ry)} 0 0 0 ${f1(bx + rx)} ${f1(by)}V${f1(ty)}Z" fill="${c[1]}"/><ellipse cx="${f1(bx)}" cy="${f1(ty)}" rx="${f1(rx)}" ry="${f1(ry)}" fill="${c[0]}"/>${hole ? `<ellipse cx="${f1(bx)}" cy="${f1(ty)}" rx="${f1(hole * k * 1.2247)}" ry="${f1(hole * k * 0.7071)}" fill="${c[2]}"/>` : ''}`; };
  const LILA = ['#B9A7FF', '#7C5CFF', '#5B3FD6'], GROC = ['#FFE69A', '#F7C531', '#C99A0E'];
  const RING = [['#FF9C94', '#E8453C', '#8E2019'], ['#FFC08F', '#FF8A3D', '#93460F'], ['#A6E8C2', '#2FB36D', '#145C34'], ['#A9C8FF', '#3D7BF4', '#173E8F'], ['#F7B2D6', '#EC5FA8', '#8A1F57']];
  // el comptador: n pals (el pal k fa 4 + 6k + 2 mm) i, si rings, les anelles posades (k al pal k)
  const toy = (cx, cy, k, n, rings) => { const f = iso(cx, cy, k), D = 34; const [sx, sy] = f(n * D / 2, 20, 0); let s = `<ellipse cx="${f1(sx)}" cy="${f1(sy + 3)}" rx="${f1((n * D / 2 + 8) * k)}" ry="${f1(26 * k * 0.62)}" transform="rotate(30 ${f1(sx)} ${f1(sy + 3)})" fill="#14204A" fill-opacity=".1"/>` + ibox(f, 0, 0, 0, n * D, 40, 4, LILA);
    for (let i = 1; i <= n; i++) { const x = i * D - D / 2, H = 6 + 6 * i; s += icyl(f, k, x, 20, 0, 5, H, GROC);
      if (rings) { for (let j = 1; j <= i; j++) s += icyl(f, k, x, 20, 4 + (j - 1) * 6, 15, 5.6, RING[(i - 1) % 5], 5.4); s += icyl(f, k, x, 20, 4 + i * 6, 5, 2, GROC); } }
    return s; };
  const BG = (h = 200, c = '#F1F2FB') => `<rect width="320" height="${h}" rx="20" fill="${c}"/>`;
  const card = (x, y, w, h, fill = '#fff', st = '#DCE4FA') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${st}" stroke-width="2" filter="url(#bwSh)"/>`;
  const pill = (x, y, w, txt, col, fs = 12) => `<rect x="${x - w / 2}" y="${y - 12}" width="${w}" height="24" rx="12" fill="${col}"/><text x="${x}" y="${y + 4.5}" text-anchor="middle" class="tat w s" style="font-size:${fs}px">${txt}</text>`;
  const T = (x, y, txt, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || 'middle'}" class="tat s" style="font-size:${o.fs || 12}px${o.fw ? `;font-weight:${o.fw}` : ''}"${o.fill ? ` fill="${o.fill}"` : ''}>${txt}</text>`;
  const MONO = 'font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-weight:700';
  const C = (x, y, txt, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || 'start'}" class="tat s" style="${MONO};font-size:${o.fs || 10.5}px" fill="${o.fill || '#14204A'}">${txt}</text>`;
  const ok = (x, y, r = 10) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1FA463"/><path d="M${f1(x - r * .45)} ${y}l${f1(r * .32)} ${f1(r * .34)}l${f1(r * .55)} -${f1(r * .62)}" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const ko = (x, y, r = 10) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#EF5A5A"/><path d="M${f1(x - r * .38)} ${f1(y - r * .38)}l${f1(r * .76)} ${f1(r * .76)}M${f1(x + r * .38)} ${f1(y - r * .38)}l-${f1(r * .76)} ${f1(r * .76)}" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`;
  const mid = (x, y, r = 10) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#F5A623"/><path d="M${f1(x - r * .45)} ${y}h${f1(r * .9)}" stroke="#fff" stroke-width="2.8" stroke-linecap="round"/>`;
  const star = (x, y, r, col = '#F7C531') => { let d = ''; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, q = i % 2 ? r * .45 : r; d += (i ? 'L' : 'M') + f1(x + q * Math.cos(a)) + ' ' + f1(y + q * Math.sin(a)); } return `<path d="${d}Z" fill="${col}" stroke="#C99A0E" stroke-width="1.2" stroke-linejoin="round"/>`; };
  const arrow = (d, col = '#9AA3B5', t = 0, w = 2.4) => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" pathLength="1" ${tA(t, 'ta-draw')}/>`;
  const head = (x, y, ang, col = '#9AA3B5', t = 0) => `<g ${tA(t, 'ta-fade')}><path d="M0 0l-7 -4.5v9z" fill="${col}" transform="translate(${x} ${y}) rotate(${ang})"/></g>`;
  // el capçal de la Nuvi amb ulls (la punta del broquet és a 0, 0)
  const nuvi = (x, y, k = 1) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-22" y="-52" width="44" height="34" rx="10" fill="#2A3557"/><ellipse cx="-9" cy="-36" rx="6" ry="6.5" fill="#fff"/><ellipse cx="9" cy="-36" rx="6" ry="6.5" fill="#fff"/><circle cx="-8.5" cy="-33.5" r="2.8" fill="#14204A"/><circle cx="9.5" cy="-33.5" r="2.8" fill="#14204A"/><rect x="-10" y="-18" width="20" height="9" rx="2" fill="#E8453C"/><path d="M-6 -9h12l-4 9h-4z" fill="#D9A514"/></g>`;
  const bunting = (x0, x1, y, n) => { let s = `<path d="M${x0} ${y}Q${(x0 + x1) / 2} ${y + 10} ${x1} ${y}" fill="none" stroke="#9AA3B5" stroke-width="1.5"/>`; const CO = ['#E8453C', '#F7C531', '#2FB36D', '#3D7BF4', '#EC5FA8', '#7C5CFF'];
    for (let i = 0; i < n; i++) { const t = (i + .5) / n, x = x0 + (x1 - x0) * t, yy = y + 10 * 4 * t * (1 - t) * .5; s += `<path d="M${f1(x - 6)} ${f1(yy)}h12l-6 11z" fill="${CO[i % CO.length]}"/>`; } return s; };
  // petites icones (centrades a 0, 0)
  const ICO = {
    doc: '<rect x="-8" y="-10" width="16" height="20" rx="2.5" fill="#fff"/><rect x="-4" y="-12.5" width="8" height="5" rx="2" fill="#FFE3A3"/><path d="M-4.5 -2h9M-4.5 2.5h9M-4.5 7h6" stroke="#F5A623" stroke-width="2" stroke-linecap="round"/>',
    code: `<text x="0" y="5" text-anchor="middle" class="tat w" style="${MONO};font-size:15px">{ }</text>`,
    test: '<path d="M-4 -10h8M-2.5 -10v7l-6 11h17l-6 -11v-7" fill="#fff" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/><path d="M-6.5 5h13" stroke="#14A3B8" stroke-width="3"/>',
    flag: '<path d="M-5 10V-10" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><path d="M-4 -10h12l-3 4.5l3 4.5h-12z" fill="#fff"/>',
    cube: '<path d="M0 -10l9 5v10l-9 5l-9 -5v-10z" fill="#fff"/><path d="M0 0v10M0 0l9 -5M0 0l-9 -5" stroke="#B9A7FF" stroke-width="1.6"/>',
    move: '<path d="M0 -10v20M-10 0h20" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><path d="M0 -11l-3.5 4h7zM0 11l-3.5 -4h7zM-11 0l4 -3.5v7zM11 0l-4 -3.5v7z" fill="#fff"/>',
    bool: '<circle cx="-3.5" cy="0" r="7" fill="none" stroke="#fff" stroke-width="2.2"/><circle cx="3.5" cy="0" r="7" fill="#fff" fill-opacity=".85"/>',
    vars: `<text x="0" y="5" text-anchor="middle" class="tat w" style="${MONO};font-size:13px">x=</text>`,
    loop: '<path d="M-8 2a8 8 0 0 1 13 -7M8 -2a8 8 0 0 1 -13 7" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><path d="M6 -10v6h-6M-6 10v-6h6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
    mod: '<rect x="-9" y="-9" width="8" height="8" rx="1.5" fill="#fff"/><rect x="1" y="1" width="8" height="8" rx="1.5" fill="#fff"/><rect x="1" y="-9" width="8" height="8" rx="1.5" fill="none" stroke="#fff" stroke-width="1.8"/><rect x="-9" y="1" width="8" height="8" rx="1.5" fill="none" stroke="#fff" stroke-width="1.8"/>',
    gear: (() => { let d = ''; for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; d += `M${f1(Math.cos(a) * 6)} ${f1(Math.sin(a) * 6)}L${f1(Math.cos(a) * 10.5)} ${f1(Math.sin(a) * 10.5)}`; } return `<path d="${d}" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle r="7" fill="#fff"/><circle r="2.8" fill="#14A3B8"/>`; })(),
    cup: '<path d="M-7 -9h14v5a7 7 0 0 1 -14 0z" fill="#fff"/><path d="M-7 -6h-3a3 3 0 0 0 3 5M7 -6h3a3 3 0 0 1 -3 5" fill="none" stroke="#fff" stroke-width="1.8"/><rect x="-1.5" y="2" width="3" height="5" fill="#fff"/><rect x="-6" y="7" width="12" height="3" rx="1" fill="#fff"/>'
  };
  return {
    /* ---------- p8-1 · el repte i les especificacions ---------- */
    // el projecte en quatre parades (una per sessió) i en Bit que hi va fins a la fira
    p81road() {
      const road = 'M58 150C96 150 100 92 132 92S178 150 206 150S242 92 270 92';
      const S = [[58, 150, '#F5A623', L('Especificacions', 'Especificaciones'), 'doc'], [132, 92, '#7C5CFF', L('Prototip', 'Prototipo'), 'code'], [206, 150, '#14A3B8', L('Proves', 'Pruebas'), 'test'], [270, 92, '#EC5FA8', L('Fira', 'Feria'), 'flag']];
      return tSvg(200, `${BG(200, '#EEF4FF')}${bunting(178, 314, 12, 8)}
        <path d="${road}" fill="none" stroke="#DCE4FA" stroke-width="16" stroke-linecap="round"/><path d="${road}" fill="none" stroke="#B9C6EE" stroke-width="2.5" stroke-dasharray="8 7" class="ta-dash"/>
        ${S.map(([x, y, c, t, k], i) => `<g ${tA(.2 + i * .6, 'ta-pop')}><circle cx="${x}" cy="${y}" r="18" fill="${c}" stroke="#fff" stroke-width="3" filter="url(#bwSh)"/><g transform="translate(${x} ${y})">${ICO[k]}</g>
          <circle cx="${x + 14}" cy="${y - 14}" r="8" fill="#14204A"/><text x="${x + 14}" y="${y - 10}" text-anchor="middle" class="tat w s" style="font-size:10.5px">${i + 1}</text>
          ${T(x, y + (y > 120 ? 36 : -28), t, { fs: 12 })}</g>`).join('')}
        <g><animateMotion dur="6.5s" repeatCount="indefinite" path="${road}" keyPoints="0;1;1" keyTimes="0;.85;1" calcMode="linear"/>${tBitMini(0, -8, 2, .32)}</g>
        <g ${tA(3, 'ta-in')}>${pill(84, 28, 150, L('Fira de producte', 'Feria de producto'), '#14204A')}</g>`);
    },
    // el tauler d'encàrrecs de la fira: quatre clients i el seu problema (el de la mestra Sílvia és la mostra de l'estudi)
    p81board() {
      const ic = {
        book: '<rect x="-9" y="-8" width="8" height="16" rx="1.5" fill="#fff"/><rect x="1" y="-8" width="8" height="16" rx="1.5" fill="#fff" fill-opacity=".85"/><path d="M0 -8v16" stroke="#3D7BF4" stroke-width="1.5"/>',
        key: '<circle cx="-4" cy="0" r="5" fill="none" stroke="#fff" stroke-width="2.6"/><path d="M1 0h9M6 0v4M9 0v3" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>',
        jar: '<rect x="-7" y="-4" width="14" height="13" rx="3" fill="#fff"/><rect x="-8" y="-9" width="16" height="5" rx="1.5" fill="#fff" fill-opacity=".85"/>',
        rings: '<path d="M0 -10v18" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><ellipse cx="0" cy="6" rx="8" ry="3" fill="#fff"/><ellipse cx="0" cy="1" rx="8" ry="3" fill="#fff" fill-opacity=".85"/><ellipse cx="0" cy="-4" rx="8" ry="3" fill="#fff" fill-opacity=".7"/>'
      };
      const N = [[26, 40, '#3D7BF4', 'book', L('Biblioteca', 'Biblioteca'), L('Suport per llegir', 'Soporte para leer'), L('amb la tauleta', 'con la tableta')],
        [164, 40, '#14A3B8', 'key', L('Consergeria', 'Conserjería'), L('Organitzador', 'Organizador'), L('de claus', 'de llaves')],
        [26, 116, '#2FB36D', 'jar', L('Casal de gent gran', 'Centro de mayores'), L('Obridor de pots', 'Abridor de botes'), L('fàcil d\'agafar', 'fácil de coger')],
        [164, 116, '#EC5FA8', 'rings', L('Mestra Sílvia, P5', 'Maestra Sílvia, P5'), L('Comptador de pals', 'Contador de palos'), L('i anelles', 'y anillas')]];
      return tSvg(200, `${BG(200)}<rect x="12" y="26" width="296" height="166" rx="12" fill="#B9773B"/><rect x="20" y="34" width="280" height="150" rx="7" fill="#E9C99C"/>
        ${[[60, 60], [250, 170], [150, 150], [280, 60], [40, 170]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#C49A66"/>`).join('')}
        ${N.map(([x, y, c, k, a, b, b2], i) => `<g ${tA(.3 + i * .55, 'ta-pop')}><rect x="${x}" y="${y}" width="130" height="64" rx="6" fill="${i === 3 ? '#FFF6D8' : '#FFFDF6'}" stroke="${i === 3 ? '#F5A623' : '#fff'}" stroke-width="2" filter="url(#bwSh)" transform="rotate(${[-2, 1.5, 1, -1.5][i]} ${x + 65} ${y + 32})"/>
          <circle cx="${x + 65}" cy="${y + 4}" r="4.5" fill="#E8453C" stroke="#fff" stroke-width="1.5"/><circle cx="${x + 22}" cy="${y + 35}" r="14" fill="${c}"/><g transform="translate(${x + 22} ${y + 35})">${ic[k]}</g>
          ${T(x + 41, y + 25, a, { a: 'start', fs: 10.5, fw: 900 })}${T(x + 41, y + 41, b, { a: 'start', fs: 10.5, fill: '#5A6378' })}${T(x + 41, y + 54, b2, { a: 'start', fs: 10.5, fill: '#5A6378' })}</g>`).join('')}
        <g ${tA(2.7, 'ta-pop')}>${star(288, 120, 11)}</g><g ${tA(3, 'ta-in')}>${pill(240, 192, 104, L("l'exemple", 'el ejemplo'), '#EC5FA8', 11)}</g>
        <g ${tA(0, 'ta-in')}>${pill(160, 24, 174, L("Tauler d'encàrrecs", 'Tablón de encargos'), '#14204A')}</g>`);
    },
    // un desig no es pot comprovar; un requisit amb números, sí
    p81meas() {
      const R = [[L("Fàcil d'agafar", 'Fácil de coger'), L('Anelles de 30 mm', 'Anillas de 30 mm')], [L('Que llisqui bé', 'Que deslice bien'), L('Forat: 10 + 2 × 0,4', 'Agujero: 10 + 2 × 0,4')], [L('Que no ocupi gaire', 'Que no ocupe mucho'), L('≤ 180 mm de llarg', '≤ 180 mm de largo')]];
      return tSvg(200, `${BG(200)}${T(76, 24, L('No es pot comprovar', 'No se puede comprobar'), { fs: 11.5, fill: '#8A93A8' })}${T(240, 24, L('Es pot comprovar', 'Se puede comprobar'), { fs: 11.5, fill: '#1F8A4C' })}
        ${R.map(([a, b], i) => { const y = 56 + i * 50; return `<g ${tA(.2 + i * .9, 'ta-in')}><rect x="10" y="${y - 17}" width="132" height="34" rx="17" fill="#E6E9F2"/>${T(76, y + 4, '«' + a + '»', { fs: 11.5, fill: '#5A6378' })}</g>
          <g ${tA(.5 + i * .9, 'ta-fade')}>${ko(138, y - 14, 7)}</g>${arrow(`M148 ${y}H166`, '#9AA3B5', .6 + i * .9)}${head(170, y, 0, '#9AA3B5', .8 + i * .9)}
          <g ${tA(.9 + i * .9, 'ta-pop')}><rect x="178" y="${y - 17}" width="132" height="34" rx="10" fill="#fff" stroke="#3D7BF4" stroke-width="2" filter="url(#bwSh)"/>${T(244, y + 4, b, { fs: 11.5, fw: 900, fill: '#173E8F' })}${ok(306, y - 15, 7)}</g>`; }).join('')}
        <g ${tA(3.4, 'ta-in')}><rect x="182" y="184" width="124" height="7" rx="2" fill="#F7C531"/>${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => `<path d="M${186 + i * 9.4} 184v${i % 5 ? 3 : 5}" stroke="#C99A0E" stroke-width="1"/>`).join('')}</g>`);
    },
    // les restriccions de la fabricació: la placa, sense suports, parets i capes
    p81limits() {
      const cell = (x, y, i, body, lab) => `<g ${tA(.2 + i * .7, 'ta-pop')}>${card(x, y, 146, 86)}${body}${T(x + 73, y + 78, lab, { fs: 11, fw: 900 })}</g>`;
      const plate = `<rect x="40" y="30" width="58" height="40" rx="3" fill="#E7EBF6" stroke="#B9C6EE" stroke-width="1.5"/><path d="M40 30h58M40 70h58" stroke="#B9C6EE" stroke-width=".6"/><rect x="48" y="44" width="40" height="12" rx="2" fill="#7C5CFF"/>${[0, 1, 2, 3].map(i => `<circle cx="${53 + i * 10}" cy="50" r="2.4" fill="#F7C531"/>`).join('')}
        ${T(122, 47, '180', { fs: 10, fill: '#5A6378' })}${T(122, 59, '× 180', { fs: 10, fill: '#5A6378' })}`;
      const supp = `<path d="M192 70V36h30v-6h-46v6h8v34z" fill="#9AA3B5"/><path d="M180 30l12 12M192 30l-12 12" stroke="#EF5A5A" stroke-width="2.6" stroke-linecap="round"/><path d="M246 70V54l-10 -16h8l8 12l8 -12h8l-10 16v16z" fill="#2FB36D"/>${ok(276, 36, 7)}`;
      const wall = `<rect x="34" y="122" width="76" height="16" rx="3" fill="#FF8A3D"/><rect x="34" y="122" width="76" height="16" rx="3" fill="none" stroke="#93460F" stroke-width="1"/><rect x="58" y="125" width="28" height="10" rx="2" fill="#FFF0E3"/><path d="M58 146h28" stroke="#14204A" stroke-width="1.4"/><path d="M58 143v6M86 143v6" stroke="#14204A" stroke-width="1.4"/>${T(118, 134, '≥ 1,2', { a: 'start', fs: 10.5, fill: '#5A6378' })}`;
      const layers = `${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${186 + i * 1.5}" y="${142 - i * 7}" width="${54 - i * 3}" height="6" rx="2.5" fill="${['#3D7BF4', '#4A86F6', '#5891F7', '#669CF8', '#74A7F9', '#82B2FA'][i]}"/>`).join('')}<circle cx="268" cy="124" r="14" fill="#fff" stroke="#14204A" stroke-width="2"/><path d="M268 115v9l6 4" stroke="#14204A" stroke-width="2" stroke-linecap="round" fill="none"/>${T(213, 116, '0,2 mm', { fs: 9.5, fill: '#5A6378' })}`;
      return tSvg(200, `${BG(200)}${cell(10, 10, 0, plate, L('Cap a la placa', 'Cabe en la placa'))}${cell(164, 10, 1, supp, L('Sense suports (45°)', 'Sin soportes (45°)'))}
        ${cell(10, 104, 2, wall, L('Parets de 1,2 mm o més', 'Paredes de 1,2 mm o más'))}${cell(164, 104, 3, layers, L('Temps i plàstic', 'Tiempo y plástico'))}`);
    },
    /* ---------- p8-2 · el prototip paramètric ---------- */
    // el programa en tres parts: especificacions, mòduls i muntatge
    p82struct() {
      const band = (y, h, col, n, title, lines, t) => `<g ${tA(t, 'ta-in')}><rect x="14" y="${y}" width="190" height="${h}" rx="8" fill="#fff" stroke="#DCE4FA" stroke-width="1.5"/><rect x="14" y="${y}" width="6" height="${h}" rx="3" fill="${col}"/>
        ${T(28, y + 15, `${n} · ${title}`, { a: 'start', fs: 11, fw: 900, fill: col })}${lines.map((l, i) => C(28, y + 30 + i * 13, l, { fs: 10 })).join('')}</g>`;
      const f = iso(270, 160, .3);
      return tSvg(200, `${BG(200)}<rect x="8" y="8" width="202" height="184" rx="12" fill="#E7EBF6"/>
        ${band(14, 56, '#C77A00', 1, L('Especificacions', 'Especificaciones'), ['n = 5   da = 30', 'dist = da + 4'], .2)}
        ${band(76, 56, '#5B3FD6', 2, L('Mòduls', 'Módulos'), [L('defineix pal(k) {…}', 'define palo(k) {…}'), L('defineix anella() {…}', 'define anilla() {…}')], 1.1)}
        ${band(138, 50, '#0E7C8C', 3, L('Muntatge', 'Montaje'), [L('repeteix i de 1 a (n)', 'repite i de 1 a (n)')], 2)}
        ${arrow('M212 42H232', '#C77A00', .6)}${arrow('M212 104H232', '#5B3FD6', 1.5)}${arrow('M212 163H226', '#0E7C8C', 2.4)}
        <g ${tA(.8, 'ta-pop')}>${[0, 1, 2].map(i => `<path d="M${244 + i * 18} 30v26" stroke="#C9CFE0" stroke-width="3" stroke-linecap="round"/><circle cx="${244 + i * 18}" cy="${[48, 36, 44][i]}" r="5.5" fill="#F5A623" stroke="#fff" stroke-width="2"/>`).join('')}</g>
        <g ${tA(1.7, 'ta-pop')}>${icyl(iso(242, 118, .9), .9, 0, 0, 0, 5, 30, GROC)}${C(242, 132, L('pal(k)', 'palo(k)'), { a: 'middle', fs: 9 })}${icyl(iso(292, 114, .9), .9, 0, 0, 0, 15, 6, RING[3], 5.4)}${C(292, 132, L('anella()', 'anilla()'), { a: 'middle', fs: 9 })}</g>
        <g ${tA(2.6, 'ta-pop')}>${toy(222, 150, .3, 3, false)}</g>`);
    },
    // les mides que depenen d'altres: si canvia da, canvien dist, la base i el lloc dels pals
    p82deps() {
      const node = (x, y, w, txt, col, t, cls = 'ta-pop') => `<g ${tA(t, cls)}><rect x="${x - w / 2}" y="${y - 14}" width="${w}" height="28" rx="9" fill="${col}" filter="url(#bwSh)"/><text x="${x}" y="${y + 4.5}" text-anchor="middle" class="tat w s" style="${MONO};font-size:11.5px">${txt}</text></g>`;
      const out = (x, y, w, a, b, t) => `<g ${tA(t, 'ta-in')}>${card(x - w / 2, y - 21, w, 42)}${T(x, y - 4, a, { fs: 11, fw: 900 })}${C(x, y + 12, b, { a: 'middle', fs: 10, fill: '#5B3FD6' })}</g>`;
      return tSvg(200, `${BG(200)}${node(40, 34, 56, 'n = 5', '#C77A00', .1)}${node(40, 92, 64, 'da = 30', '#E8453C', .1)}${node(40, 150, 56, 'dp = 10', '#C77A00', .1)}${node(40, 182, 64, 'tol = 0.4', '#C77A00', .1)}
        <g class="ta ta-pop" style="--t:.6s"><circle cx="40" cy="92" r="38" fill="#E8453C" fill-opacity=".12"/></g>
        ${node(146, 92, 96, 'dist = da + 4', '#7C5CFF', .9)}
        ${arrow('M72 92H96', '#E8453C', .8, 2.6)}${head(99, 92, 0, '#E8453C', 1)}
        ${arrow('M196 86C206 86 200 42 207 41', '#7C5CFF', 1.6, 2.6)}${head(211, 41, 0, '#7C5CFF', 1.8)}${arrow('M196 98C204 98 202 100 207 100', '#7C5CFF', 1.6, 2.6)}${head(211, 100, 0, '#7C5CFF', 1.8)}${arrow('M68 34H210', '#C77A00', 1.6, 2)}
        ${arrow('M72 150Q160 150 210 158', '#C77A00', 1.6, 2)}${arrow('M72 182Q160 182 210 166', '#C77A00', 1.6, 2)}
        ${out(262, 40, 100, L('Base', 'Base'), 'n * dist', 2)}${out(262, 100, 100, L('Lloc dels pals', 'Sitio de los palos'), 'i * dist - dist / 2', 2.4)}${out(262, 162, 100, L("Forat de l'anella", 'Agujero de la anilla'), 'dp + 2 * tol', 2.8)}`);
    },
    // del mateix programa surten el .scad (OpenSCAD) i l'STL (laminat i impressora)
    p82export() {
      const mesh = (x, y) => `<path d="M${x} ${y - 18}l18 30h-36z" fill="#A9C8FF" stroke="#3D7BF4" stroke-width="1.6" stroke-linejoin="round"/><path d="M${x} ${y - 18}l-8 30M${x} ${y - 18}l8 30M${x - 13} ${y + 4}h26" stroke="#3D7BF4" stroke-width="1.1"/>`;
      return tSvg(200, `${BG(200)}<g ${tA(.1, 'ta-pop')}>${card(10, 66, 78, 70, '#14204A', '#14204A')}<text x="49" y="104" text-anchor="middle" class="tat w" style="${MONO};font-size:22px">{ }</text>${T(49, 126, L('el programa', 'el programa'), { fs: 10.5, fill: '#fff' })}</g>
        ${arrow('M92 88Q110 52 128 50', '#7C5CFF', .7)}${head(130, 50, -5, '#7C5CFF', .9)}${arrow('M92 116Q110 150 128 150', '#3D7BF4', .7)}${head(130, 150, 5, '#3D7BF4', .9)}
        <g ${tA(1, 'ta-pop')}><path d="M138 30h30l8 8v32h-38z" fill="#fff" stroke="#7C5CFF" stroke-width="2" filter="url(#bwSh)"/><path d="M168 30v8h8" fill="none" stroke="#7C5CFF" stroke-width="2"/>${C(157, 60, '.scad', { a: 'middle', fs: 11, fill: '#5B3FD6' })}</g>
        ${arrow('M182 50H200', '#7C5CFF', 1.5)}${head(203, 50, 0, '#7C5CFF', 1.6)}
        <g ${tA(1.8, 'ta-in')}>${card(208, 28, 102, 44)}${T(259, 46, 'OpenSCAD', { fs: 12, fw: 900, fill: '#5B3FD6' })}${T(259, 62, L('continua el codi', 'sigue el código'), { fs: 10, fill: '#5A6378' })}</g>
        <g ${tA(1, 'ta-pop')}>${card(134, 124, 46, 50)}${mesh(157, 152)}</g>${T(157, 190, 'STL', { fs: 11, fw: 900, fill: '#173E8F' })}
        ${arrow('M184 150H198', '#3D7BF4', 1.5)}${head(201, 150, 0, '#3D7BF4', 1.6)}
        <g ${tA(2, 'ta-in')}>${[0, 1, 2, 3, 4].map(i => `<rect x="${208 + i}" y="${163 - i * 7}" width="${40 - i * 2}" height="5" rx="2" fill="${['#2FB36D', '#3CBF7A', '#4CCB88', '#5DD596', '#6FDDA4'][i]}"/>`).join('')}${T(228, 190, L('laminat', 'laminado'), { fs: 10.5, fill: '#5A6378' })}</g>
        ${arrow('M252 150H262', '#3D7BF4', 2.3)}
        <g ${tA(2.6, 'ta-pop')}>${nuvi(286, 166, .62)}<rect x="270" y="168" width="34" height="5" rx="2" fill="#7C5CFF"/></g>${T(287, 190, 'Nuvi', { fs: 10.5, fill: '#5A6378' })}`);
    },
    /* ---------- p8-3 · proves i iteració ---------- */
    // provar amb n = 3, 4, 5 i 6: la base creix 34 mm per pal i, amb 6, ja no cap a la placa (180 mm)
    p83test() {
      const k = .62, x0 = 64, lim = x0 + 180 * k;
      const row = (n, i) => { const y = 42 + i * 40, w = n * 34 * k, good = n * 34 <= 180;
        return `<g ${tA(.3 + i * .7, 'ta-in')}>${C(14, y + 5, `n = ${n}`, { fs: 12 })}<rect x="${x0}" y="${y - 8}" width="${f1(w)}" height="16" rx="4" fill="${good ? '#7C5CFF' : '#B9A7FF'}"/>${Array.from({ length: n }, (_, j) => `<circle cx="${f1(x0 + (j + .5) * 34 * k)}" cy="${y}" r="4" fill="#F7C531" stroke="#C99A0E" stroke-width="1"/>`).join('')}
          ${T(f1(x0 + w + 8), y + 4, `${n * 34}`, { a: 'start', fs: 10.5, fill: good ? '#5A6378' : '#C0332B' })}</g><g ${tA(.6 + i * .7, 'ta-pop')}>${good ? ok(304, y) : ko(304, y)}</g>`; };
      return tSvg(200, `${BG(200)}${T(160, 20, L('Funciona amb…? (mm de base)', '¿Funciona con…? (mm de base)'), { fs: 12, fw: 900 })}
        <path d="M${f1(lim)} 28V196" stroke="#E8453C" stroke-width="2" stroke-dasharray="5 4"/>${T(f1(lim - 4), 194, L('placa: 180', 'placa: 180'), { a: 'end', fs: 10, fill: '#C0332B' })}
        ${[3, 4, 5, 6].map(row).join('')}`);
    },
    // el rang: n de 1 a 5; i l'anella amb max(): si el pal és gruixut, l'anella creix
    p83range() {
      const x = n => 30 + (n - 1) * 42;
      const ring = (cx, R, r, col, lab, mark, t) => `<g ${tA(t, 'ta-pop')}><circle cx="${cx}" cy="146" r="${R}" fill="${col}"/><circle cx="${cx}" cy="146" r="${r}" fill="#F1F2FB"/><circle cx="${cx}" cy="146" r="${f1(r - 1.2)}" fill="#F7C531" fill-opacity=".85"/>${C(cx, 186, lab, { a: 'middle', fs: 10 })}${mark}</g>`;
      return tSvg(200, `${BG(200)}${T(14, 22, L('Rang de n', 'Rango de n'), { a: 'start', fs: 12, fw: 900 })}
        <g ${tA(.2, 'ta-fade')}><rect x="${x(1) - 10}" y="40" width="${x(5) - x(1) + 20}" height="22" rx="11" fill="#D7F3E3"/><rect x="${x(6) - 10}" y="40" width="${x(7) - x(6) + 20}" height="22" rx="11" fill="#FBDADA"/></g>
        <path d="M${x(1) - 14} 51H${x(7) + 14}" stroke="#14204A" stroke-width="2"/>${[1, 2, 3, 4, 5, 6, 7].map(n => `<circle cx="${x(n)}" cy="51" r="4.5" fill="${n <= 5 ? '#1FA463' : '#EF5A5A'}"/>${C(x(n), 78, String(n), { a: 'middle', fs: 11 })}`).join('')}
        <g ${tA(1, 'ta-in')}>${T((x(1) + x(5)) / 2, 34, L('provat: funciona', 'probado: funciona'), { fs: 10.5, fill: '#1F8A4C' })}${T((x(6) + x(7)) / 2, 34, L('no cap', 'no cabe'), { fs: 10.5, fill: '#C0332B' })}</g>
        <path d="M14 96H306" stroke="#DCE4FA" stroke-width="1.5"/>
        ${ring(62, 18, 6.5, '#2FB36D', 'dp = 10', ok(82, 128, 7), 1.6)}${ring(160, 18, 17.3, '#EF5A5A', 'dp = 28', ko(180, 128, 7), 2.3)}${ring(258, 22, 17.3, '#2FB36D', 'max(30, …)', ok(282, 126, 7), 3)}
        <g ${tA(2.6, 'ta-in')}>${T(160, 112, L('paret de 0,6 mm', 'pared de 0,6 mm'), { fs: 10, fill: '#C0332B' })}</g>`);
    },
    // la revisió per parelles: rúbrica, dues estrelles i un desig amb números
    p83review() {
      const R = [[L("Respon a l'encàrrec", 'Responde al encargo'), ok], [L('És paramètric', 'Es paramétrico'), mid], [L('Es pot imprimir', 'Se puede imprimir'), ok], [L("El codi s'entén", 'El código se entiende'), ok]];
      return tSvg(200, `${BG(200)}<g ${tA(.1, 'ta-in')}>${card(12, 12, 176, 176, '#FFFDF6', '#EADFC4')}${T(100, 34, L('Rúbrica', 'Rúbrica'), { fs: 13, fw: 900 })}</g>
        ${R.map(([t, m], i) => `<g ${tA(.4 + i * .45, 'ta-in')}>${T(26, 62 + i * 30, t, { a: 'start', fs: 11 })}${m(170, 58 + i * 30, 8)}<path d="M26 ${70 + i * 30}H180" stroke="#EFE6CF" stroke-width="1"/></g>`).join('')}
        <g ${tA(2.3, 'ta-pop')}>${star(222, 34, 15)}</g><g ${tA(2.6, 'ta-pop')}>${star(258, 34, 15)}</g>${T(240, 64, L('dues estrelles', 'dos estrellas'), { fs: 10.5, fill: '#5A6378' })}
        <g ${tA(3, 'ta-pop')}><path d="M198 86h110v62h-70l-12 14v-14h-28z" fill="#fff" stroke="#3D7BF4" stroke-width="2" filter="url(#bwSh)"/>${T(253, 104, L('Desig:', 'Deseo:'), { fs: 11, fw: 900, fill: '#173E8F' })}${T(253, 120, L('el forat, amb', 'el agujero, con'), { fs: 10.5 })}${C(253, 137, 'd + 2 * tol', { a: 'middle', fs: 10.5, fill: '#5B3FD6' })}</g>
        <g ${tA(3.4, 'ta-in')}>${T(253, 186, L('sense tocar el model', 'sin tocar el modelo'), { fs: 10, fill: '#5A6378' })}</g>`);
    },
    // iterar: v2 → proves → canvis → v3, amb el registre de canvis
    p83iter() {
      const nd = (x, y, txt, col, t) => `<g ${tA(t, 'ta-pop')}><circle cx="${x}" cy="${y}" r="27" fill="${col}" stroke="#fff" stroke-width="3" filter="url(#bwSh)"/>${T(x, y + 4, txt, { fs: txt.length > 5 ? 9.5 : 12, fw: 900, fill: '#fff' })}</g>`;
      return tSvg(200, `${BG(200)}<path d="M64 52Q100 22 136 52" fill="none" stroke="#B9C6EE" stroke-width="3" stroke-dasharray="7 6" class="ta-dash"/><path d="M146 80Q140 130 104 146" fill="none" stroke="#B9C6EE" stroke-width="3" stroke-dasharray="7 6" class="ta-dash"/><path d="M68 146Q36 124 44 82" fill="none" stroke="#B9C6EE" stroke-width="3" stroke-dasharray="7 6" class="ta-dash"/>
        ${nd(42, 62, 'v2', '#7C5CFF', .1)}${nd(150, 62, L('Proves', 'Pruebas'), '#14A3B8', .6)}${nd(88, 154, L('Canvis', 'Cambios'), '#F5A623', 1.1)}
        <g ${tA(1.7, 'ta-pop')}><circle cx="96" cy="98" r="20" fill="#2FB36D" stroke="#fff" stroke-width="3" filter="url(#bwSh)"/>${T(96, 103, 'v3', { fs: 13, fw: 900, fill: '#fff' })}</g>
        <g ${tA(2.1, 'ta-in')}>${card(184, 14, 126, 172, '#FFFDF6', '#EADFC4')}${T(247, 34, L('Registre de canvis', 'Registro de cambios'), { fs: 10.5, fw: 900 })}</g>
        <g ${tA(2.5, 'ta-in')}>${ko(198, 56, 6)}${T(209, 60, 'n = 3', { a: 'start', fs: 10.5 })}${T(196, 76, L('base massa llarga', 'base demasiado larga'), { a: 'start', fs: 9.5, fill: '#5A6378' })}${C(196, 92, 'n * dist', { fs: 10, fill: '#1F8A4C' })}${ok(298, 88, 6)}</g>
        <g ${tA(3.1, 'ta-in')}><path d="M194 104H300" stroke="#EFE6CF"/>${ko(198, 120, 6)}${T(209, 124, 'dp = 28', { a: 'start', fs: 10.5 })}${T(196, 140, L('paret massa prima', 'pared demasiado fina'), { a: 'start', fs: 9.5, fill: '#5A6378' })}${C(196, 156, 'max(30, …)', { fs: 10, fill: '#1F8A4C' })}${ok(298, 152, 6)}</g>`);
    },
    /* ---------- p8-4 · presentació i diploma ---------- */
    // les vuit unitats del Nivell 2, en un camí de serp fins al producte
    p84road() {
      const P = [[40, 52], [113, 52], [186, 52], [259, 52], [259, 136], [186, 136], [113, 136], [40, 136]];
      const lab = [L('Formes', 'Formas'), 'Transformar', L('Booleanes', 'Booleanas'), 'Variables', 'Bucles', L('Mòduls', 'Módulos'), L('Enginyeria', 'Ingeniería'), L('Producte', 'Producto')];
      const ico = ['cube', 'move', 'bool', 'vars', 'loop', 'mod', 'gear', 'cup'], col = ['#D63F8C', '#D63F8C', '#D63F8C', '#D63F8C', '#D63F8C', '#D63F8C', '#14A3B8', '#7C5CFF'];
      const road = 'M40 52H259C300 52 300 136 259 136H40';
      return tSvg(200, `${BG(200, '#EEF4FF')}<path d="${road}" fill="none" stroke="#DCE4FA" stroke-width="14" stroke-linecap="round"/><path d="${road}" fill="none" stroke="#B9C6EE" stroke-width="2.5" stroke-dasharray="8 7" class="ta-dash"/>
        ${P.map(([x, y], i) => `<g ${tA(.1 + i * .38, 'ta-pop')}><circle cx="${x}" cy="${y}" r="${i === 7 ? 19 : 16}" fill="${i === 7 ? '#F5A623' : col[i]}" stroke="#fff" stroke-width="3" filter="url(#bwSh)"/><g transform="translate(${x} ${y}) scale(${i === 7 ? 1 : .85})">${ICO[ico[i]]}</g>
          <circle cx="${x + 13}" cy="${y - 13}" r="7" fill="#14204A"/><text x="${x + 13}" y="${y - 9.5}" text-anchor="middle" class="tat w s" style="font-size:9.5px">${i + 1}</text>${T(x, y + 33, lab[i], { fs: 10.5, fw: i === 7 ? 900 : 700 })}</g>`).join('')}
        <g><animateMotion dur="7s" repeatCount="indefinite" path="${road}" keyPoints="0;1;1" keyTimes="0;.88;1" calcMode="linear"/>${tBitMini(0, -10, 2, .3)}</g>`);
    },
    // del codi a la peça: STL → Tinkercad o laminat → impressora, amb els paràmetres d'impressió
    p84print() {
      const chip = (x, y, w, txt, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="24" rx="12" fill="#fff" stroke="#A8E0C0" stroke-width="2"/>${T(x + w / 2, y + 16, txt, { fs: 10.5 })}</g>`;
      return tSvg(200, `${BG(200)}<g ${tA(.1, 'ta-pop')}>${card(12, 18, 64, 76)}<path d="M44 36l18 30h-36z" fill="#A9C8FF" stroke="#3D7BF4" stroke-width="1.6" stroke-linejoin="round"/><path d="M44 36l-8 30M44 36l8 30M31 58h26" stroke="#3D7BF4" stroke-width="1.1"/>${T(44, 86, 'STL', { fs: 11, fw: 900, fill: '#173E8F' })}</g>
        ${arrow('M80 56H92', '#9AA3B5', .5)}${head(95, 56, 0, '#9AA3B5', .7)}
        <g ${tA(.8, 'ta-pop')}>${card(100, 12, 124, 84)}<rect x="100" y="12" width="124" height="16" rx="8" fill="#E7EBF6"/>${[0, 1, 2].map(i => `<circle cx="${110 + i * 9}" cy="20" r="2.6" fill="${['#EF5A5A', '#F5A623', '#2FB36D'][i]}"/>`).join('')}
          ${T(162, 41, L('Tinkercad o laminat', 'Tinkercad o laminado'), { fs: 10, fw: 900 })}<g>${toy(143, 54, .42, 4, false)}</g>${[0, 1, 2, 3, 4].map(i => `<path d="M108 ${90 - i * 5}H216" stroke="#2FB36D" stroke-width="1" stroke-opacity=".5"/>`).join('')}</g>
        ${arrow('M228 56H240', '#9AA3B5', 1.4)}${head(243, 56, 0, '#9AA3B5', 1.6)}
        <g ${tA(1.7, 'ta-pop')}>${nuvi(278, 76, .7)}<rect x="252" y="78" width="54" height="7" rx="2" fill="#7C5CFF"/><rect x="248" y="85" width="62" height="5" rx="2" fill="#C9CFE0"/></g>
        ${chip(12, 136, 140, L('Capes de 0,2 mm', 'Capas de 0,2 mm'), 2.1)}${chip(168, 136, 140, L('Farciment del 15-20 %', 'Relleno del 15-20 %'), 2.4)}
        ${chip(12, 168, 140, L('Cara plana a la placa', 'Cara plana en la placa'), 2.7)}${chip(168, 168, 140, L('Sense suports', 'Sin soportes'), 3)}
        <g ${tA(3.4, 'ta-pop')}>${pill(160, 116, 180, L('primer, una peça de prova', 'primero, una pieza de prueba'), '#14A3B8', 10.5)}</g>`);
    },
    // presentar en cinc parts; la demostració paramètrica: el comptador passa de 3 a 5 pals
    p84pitch() {
      const S = [[L('Client', 'Cliente'), L('problema', 'problema'), '#3D7BF4'], [L('Producte', 'Producto'), L('mides', 'medidas'), '#7C5CFF'], [L('Demo', 'Demo'), 'n = 3 → 5', '#EC5FA8'], [L('Proves', 'Pruebas'), L('millores', 'mejoras'), '#14A3B8'], [L('Pregunta', 'Pregunta'), L('públic', 'público'), '#F5A623']];
      return tSvg(200, `<style>.p84a{animation:p84a 5s steps(1) infinite}.p84b{animation:p84b 5s steps(1) infinite}@keyframes p84a{0%,49%{visibility:visible}50%,100%{visibility:hidden}}@keyframes p84b{0%,49%{visibility:hidden}50%,100%{visibility:visible}}@media (prefers-reduced-motion:reduce){.tani .p84a{visibility:hidden}.tani .p84b{visibility:visible}}</style>${BG(200)}
        <path d="M30 34H290" stroke="#DCE4FA" stroke-width="4" stroke-linecap="round"/>
        ${S.map(([a, b, c], i) => { const x = 30 + i * 65; return `<g ${tA(.2 + i * .45, 'ta-pop')}><circle cx="${x}" cy="34" r="14" fill="${c}" stroke="#fff" stroke-width="3" filter="url(#bwSh)"/>${T(x, 39, String(i + 1), { fs: 12, fw: 900, fill: '#fff' })}${T(x, 64, a, { fs: 11, fw: 900 })}${T(x, 78, b, { fs: 9.5, fill: '#5A6378' })}</g>`; }).join('')}
        <g ${tA(2.4, 'ta-fade')}><rect x="40" y="92" width="240" height="100" rx="14" fill="#fff" stroke="#F7B2D6" stroke-width="2" filter="url(#bwSh)"/>
          <g class="p84a">${toy(144, 128, .6, 3, true)}${C(64, 116, 'n = 3', { fs: 12, fill: '#8A1F57' })}</g><g class="p84b">${toy(126, 122, .6, 5, true)}${C(64, 116, 'n = 5', { fs: 12, fill: '#8A1F57' })}</g></g>
        <g ${tA(2.8, 'ta-pop')}>${pill(266, 104, 54, '2 min', '#14204A', 11)}</g>`);
    }
  };
})());
