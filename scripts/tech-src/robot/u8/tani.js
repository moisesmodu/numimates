/* Tech Robot · unitat 8 «El meu projecte» · animacions de teoria (TANI) */
Object.assign(TANI, {
  // la caixa d'eines del curs: totes les eines que s'han après, una per unitat
  u8tools() {
    const ico = (k, x, y, c) => k === 'ev' ? `<rect x="${x}" y="${y}" width="20" height="20" rx="6" fill="#fff"/><text x="${x + 10}" y="${y + 15}" text-anchor="middle" font-size="14" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="${c}">A</text>`
      : `<g transform="translate(${x} ${y})" color="${k === 'if' ? '#3A2600' : '#fff'}"><svg width="20" height="20" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g>`;
    const it = [['fwd', L('Ordres', 'Órdenes'), '#3D7BF4'], ['rep', L('Bucles', 'Bucles'), '#1FA463'], ['light', L('Llums i notes', 'Luces y notas'), '#E5489A'], ['ev', L('Botons', 'Botones'), '#F08A24'],
      ['if', L('Si… si no…', 'Si… si no…'), '#F2B21B'], ['call', L('Funcions', 'Funciones'), '#8B5CF6'], ['add', L('Variables', 'Variables'), '#E0533F'], ['until', L('Fins que…', 'Hasta que…'), '#14A3B8']];
    const chip = ([k, t, c], i) => { const x = i % 2 ? 164 : 8, y = 10 + Math.floor(i / 2) * 40;
      return `<g ${tA(.5 + i * .32)}><rect x="${x}" y="${y}" width="148" height="32" rx="10" fill="${c}" filter="url(#bwSh)"/><rect x="${x + 5}" y="${y + 5}" width="22" height="22" rx="6" fill="#fff" fill-opacity=".22"/>${ico(k, x + 6, y + 6, c)}
        <text x="${x + 34}" y="${y + 21}" class="tat s${k === 'if' ? '' : ' w'}">${t}</text></g>`; };
    return tSvg(222, `<g ${tA(.1, 'ta-in')}><path d="M56 180h208l-9 -11h-190z" fill="#EDBB7A" stroke="#7A4A1E" stroke-width="2.5" stroke-linejoin="round"/>
        <rect x="62" y="180" width="196" height="36" rx="8" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2.5"/><path d="M62 190h196" stroke="#7A4A1E" stroke-width="2" opacity=".35"/>
        <rect x="66" y="184" width="10" height="10" rx="2" fill="#C9CED9"/><rect x="244" y="184" width="10" height="10" rx="2" fill="#C9CED9"/>
        <text x="160" y="207" text-anchor="middle" class="tat w s">${L("La teva caixa d'eines", 'Tu caja de herramientas')}</text></g>
      ${it.map(chip).join('')}
      <g ${tA(3.3)}>${tBitMini(290, 216, 2, .5)}</g>`);
  },
  // un bon repte: objectiu, obstacles, al punt i amb solució (es marca a la llista i al mapa)
  u8good() {
    const C = 34, X0 = 10, Y0 = 36, cx = x => X0 + x * C + C / 2, cy = y => Y0 + y * C + C / 2;
    const sand = (x, y) => `<rect x="${X0 + x * C + 2}" y="${Y0 + y * C + 2}" width="${C - 4}" height="${C - 4}" rx="8" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.2"/>`;
    const pond = (x, y) => `<rect x="${X0 + x * C + 2}" y="${Y0 + y * C + 2}" width="${C - 4}" height="${C - 4}" rx="9" fill="url(#bwPond)"/><path d="M${X0 + x * C + 8} ${Y0 + y * C + 17}q4 -3 8 0t8 0" stroke="#BDEBFF" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    const rock = (x, y) => `<g transform="translate(${cx(x)} ${cy(y) + 12}) scale(.62)"><path d="M-21 -2Q-24 -24 -6 -31Q12 -36 20 -18Q25 -4 16 -1L-14 0Q-20 0 -21 -2Z" fill="url(#bwRock)" stroke="#5E667A" stroke-width="2.4"/></g>`;
    const ring = (x, y, c, t) => `<circle ${tA(t)} cx="${cx(x)}" cy="${cy(y)}" r="16" fill="none" stroke="${c}" stroke-width="3" stroke-dasharray="5 4"/>`;
    const items = [[L('Un objectiu', 'Un objetivo'), '#EF5A5A'], [L('Obstacles', 'Obstáculos'), '#737B90'], [L('Al punt', 'En su punto'), '#F2B21B'], [L('Té solució', 'Tiene solución'), '#3CC47C']];
    return tSvg(200, `<rect x="6" y="32" width="144" height="144" rx="14" fill="url(#bwGrass)" stroke="#6DB64A" stroke-width="2"/>
      ${[[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 0]].map(([x, y]) => sand(x, y)).join('')}${pond(3, 1)}${pond(3, 2)}${rock(1, 0)}${rock(0, 3)}${rock(3, 3)}
      <g transform="translate(${cx(2)} ${cy(1)}) scale(.75)"><path d="M0 -16L4.8 -6L16 -4.8L7.6 2.8L10 14L0 8.4L-10 14L-7.6 2.8L-16 -4.8L-4.8 -6Z" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2" stroke-linejoin="round"/></g>
      <g transform="translate(${cx(3) - 4} ${cy(0) + 13})"><rect x="0" y="-28" width="3" height="28" rx="1.5" fill="#5B4636"/><path d="M3 -27q8 -3 16 2q-6 4 1 9q-9 -2 -17 1z" fill="#EF5A5A" stroke="#A9302A" stroke-width="1.4" stroke-linejoin="round"/></g>
      ${tBitMini(cx(0), cy(2) + 14, 1, .42)}
      ${ring(3, 0, '#EF5A5A', .5)}${ring(2, 1, '#EF5A5A', .6)}${ring(1, 0, '#737B90', 1.4)}${ring(3, 1, '#737B90', 1.5)}${ring(3, 2, '#737B90', 1.6)}${ring(0, 2, '#F2B21B', 2.3)}
      <path ${tA(3.2, 'ta-draw')} pathLength="1" d="M${cx(0)} ${cy(2)}H${cx(2)}V${cy(0)}H${cx(3) - 8}" fill="none" stroke="#1FA463" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>
      <text x="160" y="22" class="tat b">${L('Un bon repte té…', 'Un buen reto tiene…')}</text>
      ${items.map(([t, c], i) => { const y = 36 + i * 40, tt = .5 + i * .9;
        return `<g ${tA(tt, 'ta-in')}><rect x="160" y="${y}" width="154" height="32" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="178" cy="${y + 16}" r="11" fill="${c}"/>
          <text x="196" y="${y + 21}" class="tat s">${t}</text></g><path ${tA(tt + .35, 'ta-draw')} pathLength="1" d="M172.5 ${y + 16}l4 4l7 -8" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`; }).join('')}`);
  },
  // massa fàcil, al punt o impossible: l'agulla del mesurador es mou i s'atura al mig
  u8level() {
    const cx = 160, cy = 126, R = 88, P = a => `${(cx + R * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(cy - R * Math.sin(a * Math.PI / 180)).toFixed(1)}`;
    const arc = (a0, a1, c) => `<path d="M${P(a0)} A${R} ${R} 0 0 1 ${P(a1)}" fill="none" stroke="${c}" stroke-width="26"/>`;
    const S = 17, cell = (x, y, k) => `<rect x="${x}" y="${y}" width="${S - 2}" height="${S - 2}" rx="4" fill="${k === 'w' ? '#3FA6E6' : 'url(#bwSand)'}" stroke="${k === 'w' ? '#2A86CF' : '#E2BE76'}" stroke-width="1"/>`;
    const flag = (x, y) => `<g transform="translate(${x} ${y})"><rect x="0" y="-14" width="2" height="14" fill="#5B4636"/><path d="M2 -14l9 3l-9 4z" fill="#EF5A5A"/></g>`;
    const rock = (x, y) => `<g transform="translate(${x} ${y}) scale(.36)"><path d="M-21 -2Q-24 -24 -6 -31Q12 -36 20 -18Q25 -4 16 -1L-14 0Q-20 0 -21 -2Z" fill="url(#bwRock)" stroke="#5E667A" stroke-width="3"/></g>`;
    const card = (x, body) => `<rect x="${x}" y="158" width="94" height="44" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${body}`;
    return tSvg(208, `${arc(180, 122, '#9DB8FF')}${arc(122, 58, '#3CC47C')}${arc(58, 0, '#EF5A5A')}
      <path d="M${P(180)} A${R} ${R} 0 0 1 ${P(0)}" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="2 10" opacity=".7"/>
      <text x="160" y="22" text-anchor="middle" class="tat b">${L('Al punt!', '¡En su punto!')}</text>
      <text x="60" y="150" text-anchor="middle" class="tat s">${L('Massa fàcil', 'Demasiado fácil')}</text><text x="262" y="150" text-anchor="middle" class="tat s">${L('Impossible', 'Imposible')}</text>
      <g><animateTransform attributeName="transform" type="rotate" values="-74 ${cx} ${cy};72 ${cx} ${cy};-34 ${cx} ${cy};12 ${cx} ${cy};0 ${cx} ${cy};0 ${cx} ${cy}" keyTimes="0;.2;.38;.5;.58;1" dur="5.5s" repeatCount="indefinite"/>
        <path d="M${cx - 5} ${cy} L${cx} ${cy - 70} L${cx + 5} ${cy} Z" fill="#20306A"/></g><circle cx="${cx}" cy="${cy}" r="11" fill="#20306A"/><circle cx="${cx}" cy="${cy}" r="4" fill="#FFC531"/>
      ${card(14, `${cell(32, 172)}${cell(49, 172)}${tBitMini(39.5, 186, 1, .24)}${flag(53, 185)}`)}
      ${card(113, `${cell(122, 165)}${cell(139, 165)}${cell(156, 165)}${cell(156, 182)}${cell(173, 182)}${rock(147, 197)}${tBitMini(129.5, 179, 1, .22)}${flag(177, 196)}`)}
      ${card(212, `${cell(233, 162, 'w')}${cell(250, 162, 'w')}${cell(267, 162, 'w')}${cell(250, 180)}${rock(241, 195)}${rock(276, 195)}${flag(254, 194)}`)}
      <rect ${tA(3.2)} x="111" y="156" width="98" height="48" rx="12" fill="none" stroke="#3CC47C" stroke-width="4"/>
      <g ${tA(3.4)}><circle cx="207" cy="158" r="11" fill="#3CC47C"/><path d="M202 158l3.5 3.5l6 -7" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
  },
  // primer l'esbós en paper (es dibuixa el camí amb el llapis) i després a la pantalla
  u8paper() {
    const pc = (x, y) => [37 + 26 * x, 53 + 26 * y], sc = (x, y) => [215 + 22 * x, 53 + 22 * y];
    const grid = [0, 1, 2, 3, 4].map(i => `<path d="M${24 + i * 26} 40V144M24 ${40 + i * 26}H128" stroke="#B9C2DA" stroke-width="1.5"/>`).join('');
    const wave = (x, y) => { const [a, b] = pc(x, y); return `<path d="M${a - 9} ${b - 3}q3 -3 6 0t6 0t6 0M${a - 9} ${b + 4}q3 -3 6 0t6 0t6 0" stroke="#3D8BFF" stroke-width="1.8" fill="none" stroke-linecap="round"/>`; };
    const rk = (x, y) => { const [a, b] = pc(x, y); return `<path d="M${a - 8} ${b + 4}q-2 -11 8 -12q10 1 8 12z" fill="none" stroke="#5A6178" stroke-width="2" stroke-linejoin="round"/>`; };
    const screen = { '0,0': 'w', '2,0': 's', '3,0': 'f', '1,1': 'r', '2,1': 's', '2,2': 's', '3,2': 'r', '0,3': 's', '1,3': 's', '2,3': 's', '3,3': 'w' };
    const scell = (x, y) => { const k = screen[x + ',' + y], [a, b] = sc(x, y);
      if (k === 'w') return `<rect x="${a - 10}" y="${b - 10}" width="20" height="20" rx="5" fill="url(#bwPond)"/>`;
      if (k === 's' || k === 'f') return `<rect x="${a - 10}" y="${b - 10}" width="20" height="20" rx="5" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1"/>${k === 'f' ? `<rect x="${a - 4}" y="${b - 9}" width="2" height="16" fill="#5B4636"/><path d="M${a - 2} ${b - 9}l9 3l-9 4z" fill="#EF5A5A"/>` : ''}`;
      if (k === 'r') return `<g transform="translate(${a} ${b + 8}) scale(.42)"><path d="M-21 -2Q-24 -24 -6 -31Q12 -36 20 -18Q25 -4 16 -1L-14 0Q-20 0 -21 -2Z" fill="url(#bwRock)" stroke="#5E667A" stroke-width="3"/></g>`;
      return ''; };
    const [bx, by] = pc(0, 3), [fx, fy] = pc(3, 0);
    return tSvg(206, `<g transform="rotate(-4 76 98)"><g ${tA(.1, 'ta-in')}><rect x="12" y="24" width="128" height="148" rx="6" fill="#FFFDF5" stroke="#E6DCC0" stroke-width="2" filter="url(#bwSh)"/>${grid}
        ${wave(0, 0)}${wave(3, 3)}${rk(1, 1)}${rk(3, 2)}<path d="M${fx - 3} ${fy + 8}V${fy - 9}l10 4l-10 4" stroke="#EF5A5A" stroke-width="2.2" fill="none" stroke-linejoin="round"/>
        <path d="M${bx - 8} ${by - 7}L${bx + 8} ${by}L${bx - 8} ${by + 7}Z" fill="none" stroke="#20306A" stroke-width="2.4" stroke-linejoin="round"/>
        <text x="76" y="162" text-anchor="middle" class="tat s">${L('el meu esbós', 'mi boceto')}</text></g>
        <path ${tA(.8, 'ta-draw')} pathLength="1" d="M${bx + 9} ${by}H${pc(2, 3)[0]}V${fy}H${fx - 8}" stroke="#3D7BF4" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <g ${tA(1.5, 'ta-in')}><g transform="translate(${fx - 4} ${fy + 2}) rotate(-35)"><rect x="0" y="-4" width="34" height="8" rx="2" fill="#FFC531" stroke="#B9850E" stroke-width="1.4"/><rect x="34" y="-4" width="7" height="8" rx="2" fill="#FF8FB1"/><path d="M0 -4L-8 0L0 4Z" fill="#F5D7A1" stroke="#B9850E" stroke-width="1.2"/><path d="M-8 0l3 -1.4v2.8z" fill="#20306A"/></g></g></g>
      <g ${tA(2, 'ta-in')}><path d="M150 100h22" stroke="#20306A" stroke-width="5" stroke-linecap="round"/><path d="M168 91l10 9l-10 9" fill="none" stroke="#20306A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(2.5)}><rect x="186" y="30" width="126" height="112" rx="12" fill="#20306A" filter="url(#bwSh)"/><rect x="194" y="38" width="110" height="96" rx="6" fill="url(#bwGrass)"/>
        ${[0, 1, 2, 3].flatMap(y => [0, 1, 2, 3].map(x => scell(x, y))).join('')}${tBitMini(sc(0, 3)[0], sc(0, 3)[1] + 9, 1, .3)}
        <rect x="241" y="142" width="16" height="12" fill="#2B3F86"/><rect x="222" y="153" width="54" height="7" rx="3.5" fill="#20306A"/></g>
      <g ${tA(3.3)}><circle cx="306" cy="34" r="13" fill="#3CC47C" stroke="#fff" stroke-width="2.5"/><path d="M300 34l4 4l7 -8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      <text x="76" y="194" text-anchor="middle" class="tat s" ${tA(.4, 'ta-fade')}>1. ${L('En paper', 'En papel')}</text><text x="249" y="184" text-anchor="middle" class="tat s" ${tA(2.7, 'ta-fade')}>2. ${L('A la pantalla', 'En la pantalla')}</text>`);
  },
  // el cicle del programador/a: dissenya → programa → prova → millora → i torna-hi (en Bit fa la volta)
  u8cycle() {
    const cx = 160, cy = 110, R = 80;
    const st = [[L('Dissenya', 'Diseña'), '#20306A', cx, cy - R], [L('Programa', 'Programa'), '#3D7BF4', cx + R, cy], [L('Prova', 'Prueba'), '#1FA463', cx, cy + R], [L('Millora', 'Mejora'), '#F08A24', cx - R, cy]];
    const arrow = a => { const r = a * Math.PI / 180; return `<path d="M-6 -6L6 0L-6 6Z" fill="#9FB2E6" transform="translate(${(cx + R * Math.sin(r)).toFixed(1)} ${(cy - R * Math.cos(r)).toFixed(1)}) rotate(${a})"/>`; };
    return tSvg(220, `<circle class="ta-dash" cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#C9D6FB" stroke-width="4" stroke-dasharray="6 6"/>${[45, 135, 225, 315].map(arrow).join('')}
      <g><animateTransform attributeName="transform" type="rotate" from="0 ${cx} ${cy}" to="360 ${cx} ${cy}" dur="5.5s" repeatCount="indefinite"/>
        <path d="M${cx - 14} ${cy - 6}a15 15 0 0 1 25 -6" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round"/><path d="M${cx + 13} ${cy - 18}l-1 8l-8 -2" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M${cx + 14} ${cy + 6}a15 15 0 0 1 -25 6" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round"/><path d="M${cx - 13} ${cy + 18}l1 -8l8 2" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g><animateMotion dur="5.5s" repeatCount="indefinite" path="M${cx} ${cy - R} A${R} ${R} 0 0 1 ${cx} ${cy + R} A${R} ${R} 0 0 1 ${cx} ${cy - R}"/>${tBitMini(0, 10, 2, .45)}</g>
      ${st.map(([t, c, x, y], i) => `<g ${tA(.2 + i * .7)}><rect x="${x - 58}" y="${y - 17}" width="116" height="34" rx="17" fill="#fff" stroke="${c}" stroke-width="3" filter="url(#bwSh)"/><circle cx="${x - 40}" cy="${y}" r="12" fill="${c}"/>
        <text x="${x - 40}" y="${y + 5}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="${x - 22}" y="${y + 5}" class="tat s">${t}</text></g>`).join('')}`);
  },
  // un programa llarg que es repeteix es converteix en un bucle curt
  u8shrink() {
    const chip = (k, x, y, t, cls = 'ta-in') => `<g ${tA(t, cls)}><rect x="${x}" y="${y}" width="30" height="30" rx="8" fill="#3D7BF4"/><g transform="translate(${x + 5} ${y + 5})" color="#fff"><svg width="20" height="20" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g></g>`;
    const rep = BIT_ICO.rep.replace(/^<svg[^>]*>|<\/svg>$/g, '');
    return tSvg(214, `<text x="14" y="22" class="tat s">${L('Sense bucle', 'Sin bucle')}</text>
      ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => chip(i % 2 ? 'right' : 'fwd', 14 + i * 37, 30, .2 + i * .15)).join('')}
      ${[0, 1, 2, 3].map(i => `<path ${tA(1.7, 'ta-fade')} d="M${16 + i * 74} 66v6h63v-6" fill="none" stroke="#1FA463" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`).join('')}
      <text x="306" y="92" text-anchor="end" class="tat s" ${tA(1.5, 'ta-fade')}>8 ${L('blocs', 'bloques')}</text>
      <g ${tA(2.2, 'ta-in')}><path d="M160 84v22" stroke="#1FA463" stroke-width="5" stroke-linecap="round"/><path d="M151 100l9 10l9 -10" fill="none" stroke="#1FA463" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(2.6)}><rect x="40" y="120" width="200" height="34" rx="10" fill="#1FA463" filter="url(#bwSh)"/><g transform="translate(47 127)" color="#fff"><svg width="20" height="20" viewBox="0 0 24 24">${rep}</svg></g>
        <text x="74" y="142" class="tat w s">${L('Repeteix 4 vegades', 'Repite 4 veces')}</text><rect x="40" y="148" width="16" height="48" fill="#1FA463"/><rect x="40" y="192" width="120" height="14" rx="7" fill="#1FA463"/></g>
      ${chip('fwd', 64, 157, 2.9, 'ta-pop')}${chip('right', 100, 157, 3.1, 'ta-pop')}
      <g ${tA(3.5)}><path d="M262 150L266.8 160L278 161.2L269.6 168.8L272 180L262 174.4L252 180L254.4 168.8L246 161.2L257.2 160Z" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2" stroke-linejoin="round"/>
        <text x="262" y="200" text-anchor="middle" class="tat b">3 ${L('blocs', 'bloques')}</text></g>`);
  },
  // comentaris: un que no ajuda i un d'amable i útil (què t'agrada + com millorar-lo)
  u8feedback() {
    const kid = (x, y, col, happy) => `<g transform="translate(${x} ${y})"><path d="M-17 22q0 -18 17 -18q17 0 17 18z" fill="${col}"/><circle cy="-8" r="15" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2"/>
      <path d="M-15 -11q15 -22 30 0q-4 -12 -15 -12q-11 0 -15 12z" fill="#6B3F20"/><circle cx="-5" cy="-7" r="2" fill="#2B1A38"/><circle cx="5" cy="-7" r="2" fill="#2B1A38"/>
      ${happy ? '<path d="M-6 0q6 6 12 0" stroke="#2B1A38" stroke-width="2.2" fill="none" stroke-linecap="round"/>' : '<path d="M-5 2h10" stroke="#2B1A38" stroke-width="2.2" stroke-linecap="round"/>'}</g>`;
    return tSvg(206, `<g ${tA(.3, 'ta-in')}>${kid(32, 34, '#2F5BEA', false)}<path d="M64 30l-10 6l10 2z" fill="#FDEBEB" stroke="#F4B7B7" stroke-width="2" stroke-linejoin="round"/>
        <rect x="62" y="12" width="200" height="40" rx="16" fill="#FDEBEB" stroke="#F4B7B7" stroke-width="2"/><text x="80" y="37" class="tat s">${L('Això està malament.', 'Esto está mal.')}</text></g>
      <g ${tA(1, 'ta-wob')}><circle cx="286" cy="32" r="15" fill="#EF5A5A"/><path d="M280 26l12 12M292 26l-12 12" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/></g>
      <g ${tA(1.7, 'ta-in')}>${kid(32, 112, '#F08A24', true)}<path d="M64 108l-10 6l10 2z" fill="#E7F7EE" stroke="#A8E0C0" stroke-width="2" stroke-linejoin="round"/>
        <rect x="62" y="74" width="250" height="70" rx="18" fill="#E7F7EE" stroke="#A8E0C0" stroke-width="2"/></g>
      <text x="80" y="102" class="tat s" ${tA(2.1, 'ta-fade')}>${L("M'agrada molt el revolt!", '¡Me gusta mucho la curva!')}</text>
      <text x="80" y="126" class="tat s" ${tA(2.6, 'ta-fade')}>${L('I si hi poses una estrella?', '¿Y si pones una estrella?')}</text>
      <g ${tA(3.1)}><circle cx="300" cy="76" r="14" fill="#3CC47C" stroke="#fff" stroke-width="2.5"/><path d="M294 76l4 4l7 -8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(3.6)}><rect x="8" y="160" width="134" height="32" rx="16" fill="#3CC47C" filter="url(#bwSh)"/><text x="75" y="181" text-anchor="middle" class="tat w s">1 · ${L("Què t'agrada", 'Qué te gusta')}</text></g>
      <g ${tA(4)}><rect x="150" y="160" width="162" height="32" rx="16" fill="#3D7BF4" filter="url(#bwSh)"/><text x="231" y="181" text-anchor="middle" class="tat w s">2 · ${L('Com millorar-lo', 'Cómo mejorarlo')}</text></g>`);
  },
  // el viatge del curs: vuit illes, una per unitat, i en Bit les recorre fins al diploma
  u8journey() {
    const U = [[L('Ordres', 'Órdenes'), '#2F6BFF'], [L('Bucles', 'Bucles'), '#20A464'], [L('Llums', 'Luces'), '#E5489A'], [L('Sensors', 'Sensores'), '#E8A317'], [L('Funcions', 'Funciones'), '#8B5CF6'], [L('Variables', 'Variables'), '#14A3B8'], [L('Fins que', 'Hasta que'), '#F08A24'], [L('Projecte', 'Proyecto'), '#20306A']];
    const pos = [[44, 58], [120, 58], [196, 58], [272, 58], [272, 146], [196, 146], [120, 146], [44, 146]], when = [.1, .56, 1.12, 1.68, 2.72, 3.28, 3.84, 4.4];
    const road = 'M44 58H272C318 58 318 146 272 146H44';
    const isle = ([t, c], i) => { const [x, y] = pos[i];
      return `<ellipse cx="${x}" cy="${y + 7}" rx="31" ry="11" fill="#9A6538"/><ellipse cx="${x}" cy="${y}" rx="31" ry="12" fill="url(#bwGrass)" stroke="#6DB64A" stroke-width="2"/><g transform="translate(${x - 19} ${y + 2})"><path d="M-1.5 0V-8h3V0z" fill="#8A5A33"/><circle cx="-4" cy="-11" r="5.5" fill="url(#bwLeaf)"/><circle cx="4" cy="-12" r="5.5" fill="url(#bwLeaf)"/><circle cy="-17" r="6.5" fill="url(#bwLeaf2)"/></g>
        <rect x="${x - 36}" y="${y + 20}" width="72" height="21" rx="10.5" fill="#fff" fill-opacity=".95"/><text x="${x}" y="${y + 35}" text-anchor="middle" class="tat s">${t}</text>
        <g ${tA(when[i])}><circle cx="${x + 24}" cy="${y - 12}" r="11" fill="${c}" stroke="#fff" stroke-width="2.5"/><text x="${x + 24}" y="${y - 7}" text-anchor="middle" class="tat w s">${i + 1}</text></g>`; };
    return tSvg(200, `<rect x="0" y="0" width="320" height="200" rx="20" fill="url(#bwSea)"/>
      ${[30, 104, 182].map((y, i) => `<path d="M${-10 + i * 24} ${y} ${Array.from({ length: 12 }, () => 'q7 -5 14 0t14 0').join(' ')}" fill="none" stroke="#C9F1FF" stroke-width="2" stroke-linecap="round" opacity=".5"/>`).join('')}
      <path d="${road}" fill="none" stroke="#FBE7B7" stroke-width="6" stroke-linecap="round" stroke-dasharray="9 8" class="ta-dash"/>
      ${U.map(isle).join('')}
      <g ${tA(4.5)}><g transform="translate(84 112) scale(1.15)"><rect x="-16" y="-12" width="32" height="22" rx="4" fill="#FFF8E6" stroke="#C98A4B" stroke-width="2"/><path d="M-10 -4h20M-10 2h14" stroke="#C9B48A" stroke-width="2" stroke-linecap="round"/><circle cx="11" cy="8" r="6" fill="#EF5A5A"/><path d="M8 13l-2 7l5 -3l5 3l-2 -7" fill="#EF5A5A"/></g></g>
      <g><animateMotion dur="5.5s" repeatCount="indefinite" path="${road}" keyPoints="0;1;1" keyTimes="0;.8;1" calcMode="linear"/>${tBitMini(0, 2, 2, .38)}</g>`);
  }
});
