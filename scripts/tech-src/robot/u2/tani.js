/* Tech Robot · unitat 2 «Repeteix!» · animacions de teoria (TANI) */
Object.assign(TANI, {
  // repeticions de cada dia: aplaudir, pujar escales, la tornada d'una cançó
  u2life() {
    const card = (x, i, art, lab, n) => `<g ${tA(.2 + i * .5, 'ta-in')}><rect x="${x}" y="12" width="96" height="156" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
      ${art}<text x="${x + 48}" y="152" text-anchor="middle" class="tat s">${lab}</text>
      <g transform="translate(${x + 78} 14)"><rect x="-22" y="-12" width="44" height="26" rx="13" fill="#1FA463" stroke="#fff" stroke-width="2.5"/><text y="6" text-anchor="middle" class="tat w s">×${n}</text></g></g>`;
    // mans que aplaudeixen
    const hand = s => `<g><animateTransform attributeName="transform" type="translate" values="0 0;${-s * 9} 0;0 0" dur=".7s" repeatCount="indefinite"/><g transform="translate(${s * 18} 0) rotate(${s * 12})"><rect x="-11" y="-24" width="22" height="40" rx="11" fill="#FFD9B8" stroke="#C98A5E" stroke-width="2.4"/><rect x="${s > 0 ? 6 : -14}" y="-12" width="8" height="18" rx="4" fill="#FFD9B8" stroke="#C98A5E" stroke-width="2.2"/></g></g>`;
    const clap = `<g transform="translate(56 82)">${hand(-1)}${hand(1)}<g fill="#F2B21B"><path d="M0 -40v-10M-14 -36l-6 -8M14 -36l6 -8"><animate attributeName="opacity" values="0;1;0" dur=".7s" repeatCount="indefinite"/></path></g><path d="M0 -40v-10M-14 -36l-6 -8M14 -36l6 -8" stroke="#F2B21B" stroke-width="4" stroke-linecap="round"><animate attributeName="opacity" values="1;0;1" dur=".7s" repeatCount="indefinite"/></path></g>`;
    // escala amb una pilota que puja graó a graó
    const st = [0, 1, 2, 3].map(k => `<rect x="${126 + k * 16}" y="${110 - k * 16}" width="${64 - k * 16}" height="16" rx="3" fill="url(#bwWood)" stroke="#8A5A33" stroke-width="1.8"/>`).join('');
    const stairs = `${st}<g><animateMotion dur="2.6s" repeatCount="indefinite" path="M134 100 L134 84 L150 84 L150 68 L166 68 L166 52 L182 52 L182 36 L182 36" keyPoints="0;1;1" keyTimes="0;.8;1" calcMode="linear"/><circle r="8" fill="#3D7BF4" stroke="#20306A" stroke-width="2.2"/><circle cx="-2.5" cy="-2.5" r="2.4" fill="#fff" opacity=".8"/></g>`;
    // notes de la tornada que salten
    const note = (x, y, d, c) => `<g transform="translate(${x} ${y})"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 -10;0 0" dur="1.2s" begin="${d}s" repeatCount="indefinite"/><path d="M6 -26v26" stroke="${c}" stroke-width="3.4"/><ellipse cx="0" cy="0" rx="7.5" ry="5.6" fill="${c}" transform="rotate(-20)"/><path d="M6 -26q10 4 9 14" stroke="${c}" stroke-width="3.4" fill="none" stroke-linecap="round"/></g></g>`;
    const song = `${note(238, 92, 0, '#14A3B8')}${note(262, 76, .4, '#E5489A')}${note(286, 92, .8, '#8B5CF6')}<path d="M232 112q32 14 64 0" stroke="#C9D6FB" stroke-width="3" fill="none" stroke-dasharray="5 6" class="ta-dash"/>`;
    return tSvg(214, `${card(8, 0, clap, L('Aplaudir', 'Aplaudir'), 3)}${card(112, 1, stairs, L('Escales', 'Escaleras'), 4)}${card(216, 2, song, L('Cançó', 'Canción'), 2)}
      <text x="160" y="200" text-anchor="middle" class="tat b" ${tA(1.9, 'ta-fade')}>${L('Repetim coses cada dia!', '¡Repetimos cosas cada día!')}</text>`);
  },
  // molts blocs iguals (cansa) contra un sol bucle
  u2tired() {
    const ico = (k, x, y, s) => `<g transform="translate(${x} ${y})" color="#fff"><svg width="${s}" height="${s}" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g>`;
    const blk = (x, y, w, i) => `<g ${tA(.2 + i * .22, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="19" rx="6" fill="#3D7BF4"/>${ico('fwd', x + 4, y + 2, 15)}<text x="${x + 24}" y="${y + 14.5}" class="tat w s">${L('Endavant', 'Adelante')}</text></g>`;
    const left = Array.from({ length: 7 }, (_, i) => blk(12, 34 + i * 21, 100, i)).join('');
    return tSvg(214, `<text x="62" y="22" text-anchor="middle" class="tat s" style="fill:#56628A">${L('Sense bucle', 'Sin bucle')}</text><text x="232" y="22" text-anchor="middle" class="tat s">${L('Amb bucle', 'Con bucle')}</text>
      ${left}
      <g ${tA(1.9, 'ta-pop')}><rect x="18" y="186" width="88" height="24" rx="12" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><text x="62" y="203" text-anchor="middle" class="tat s" style="fill:#C0392B">7 ${L('blocs', 'bloques')}</text></g>
      <g ${tA(2.3, 'ta-in')}><path d="M118 112h16" stroke="#1FA463" stroke-width="5" stroke-linecap="round"/><path d="M131 102l10 10-10 10" fill="none" stroke="#1FA463" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(2.6, 'ta-pop')}><rect x="148" y="70" width="168" height="30" rx="9" fill="#1FA463"/>${ico('rep', 153, 76, 18)}<text x="175" y="90" class="tat w s" style="font-size:12.5px">${L('Repeteix', 'Repite')} <tspan font-weight="900">7</tspan> ${L('vegades', 'veces')}</text>
        <rect x="148" y="96" width="16" height="44" fill="#1FA463"/><rect x="148" y="128" width="86" height="14" rx="6" fill="#1FA463"/>
        <rect x="166" y="102" width="118" height="22" rx="6" fill="#3D7BF4"/>${ico('fwd', 170, 105, 16)}<text x="191" y="118" class="tat w s">${L('Endavant', 'Adelante')}</text></g>
      <g ${tA(3.2, 'ta-pop')}><rect x="188" y="186" width="88" height="24" rx="12" fill="#E7F7EE" stroke="#1FA463" stroke-width="2"/><text x="232" y="203" text-anchor="middle" class="tat s" style="fill:#147A47">2 ${L('blocs', 'bloques')} ✓</text></g>`);
  },
  // un bucle per dins: fa el bloc, torna a dalt i compta una volta més
  u2loop() {
    const ico = (k, x, y, s) => `<g transform="translate(${x} ${y})" color="#fff"><svg width="${s}" height="${s}" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g>`;
    const T = [.145, .364, .582], kt = (a, b) => `0;${a};${b};1`;
    const num = (n, a, b) => `<text x="0" y="10" text-anchor="middle" font-size="28" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#147A47" opacity="0">${n}<animate attributeName="opacity" values="0;1;0;0" keyTimes="${kt(a, b)}" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></text>`;
    const X = i => 74 + i * 44;
    const tiles = [0, 1, 2, 3].map(i => `<rect x="${X(i)}" y="128" width="38" height="38" rx="10" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.6"/>`).join('');
    const tick = [1, 2, 3].map(i => `<g opacity="0"><animate attributeName="opacity" values="0;1;0" keyTimes="0;${(T[i - 1] + .09).toFixed(3)};.97" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/><circle cx="${X(i) + 19}" cy="184" r="10" fill="#1FA463"/><text x="${X(i) + 19}" y="189" text-anchor="middle" class="tat w s">${i}</text></g>`).join('');
    const flash = `<rect x="50" y="56" width="132" height="26" rx="7" fill="#fff" opacity="0"><animate attributeName="opacity" values="0;.6;0;.6;0;.6;0;0" keyTimes="0;.145;.2;.364;.42;.582;.64;1" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></rect>`;
    return tSvg(214, `<g ${tA(.1, 'ta-fade')}><rect x="32" y="12" width="182" height="30" rx="9" fill="#1FA463"/>${ico('rep', 38, 18, 18)}<text x="62" y="32" class="tat w s">${L('Repeteix', 'Repite')} <tspan font-weight="900">3</tspan> ${L('vegades', 'veces')}</text>
        <rect x="32" y="38" width="16" height="58" fill="#1FA463"/><rect x="32" y="88" width="100" height="14" rx="6" fill="#1FA463"/>
        <rect x="50" y="56" width="132" height="26" rx="7" fill="#3D7BF4"/>${ico('fwd', 55, 60, 18)}<text x="78" y="74" class="tat w s">${L('Endavant', 'Adelante')}</text>${flash}</g>
      <path d="M24 94 C8 94 8 28 24 28" fill="none" stroke="#1FA463" stroke-width="4" stroke-dasharray="6 6" class="ta-dash"/><path d="M18 22l8 6l-8 6" fill="none" stroke="#1FA463" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <g transform="translate(270 54)"><circle r="28" fill="#fff" stroke="#1FA463" stroke-width="3.5" filter="url(#bwSh)"/>${num(1, T[0], T[1])}${num(2, T[1], T[2])}${num(3, T[2], .945)}</g>
      <text x="270" y="104" text-anchor="middle" class="tat s">${L('volta', 'vuelta')}</text>
      ${tiles}${tick}
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;44 0;44 0;88 0;88 0;132 0;132 0;0 0" keyTimes="0;.145;.236;.364;.455;.582;.673;.97;1" dur="5.5s" repeatCount="indefinite"/>${tBitMini(X(0) + 19, 160, 1, .6)}</g>
      <text x="288" y="152" text-anchor="middle" class="tat s" style="fill:#147A47" opacity="0">${L('Fi!', '¡Fin!')}<animate attributeName="opacity" values="0;1;0" keyTimes="0;.72;.97" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></text>
      <text x="160" y="210" text-anchor="middle" class="tat s" style="fill:#56628A">${L('Fa el bloc de dins i torna a començar', 'Hace el bloque de dentro y vuelve a empezar')}</text>`);
  },
  // un patró: el mateix tros, una vegada i una altra
  u2pattern() {
    const sh = (k, cx, cy, s = 1) => k === 0 ? `<circle cx="${cx}" cy="${cy}" r="${12 * s}" fill="#EF5A5A" stroke="#A9302A" stroke-width="2.4"/>`
      : k === 1 ? `<rect x="${cx - 11 * s}" y="${cy - 11 * s}" width="${22 * s}" height="${22 * s}" rx="${4 * s}" fill="#FFC531" stroke="#B98A00" stroke-width="2.4"/>`
        : `<path d="M${cx} ${cy - 13 * s}L${cx + 13 * s} ${cy + 10 * s}H${cx - 13 * s}Z" fill="#3D8BFF" stroke="#1F5CB8" stroke-width="2.4" stroke-linejoin="round"/>`;
    const row = Array.from({ length: 9 }, (_, i) => `<g ${tA(.2 + i * .18, 'ta-pop')}>${sh(i % 3, 26 + i * 33.5, 48)}</g>`).join('');
    const br = [0, 1, 2].map(g => { const x0 = 12 + g * 100.5, x1 = x0 + 94; return `<g ${tA(2 + g * .35, 'ta-fade')}><path d="M${x0} 72v8h${x1 - x0}v-8" fill="none" stroke="#1FA463" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${(x0 + x1) / 2}" cy="96" r="12" fill="#1FA463"/><text x="${(x0 + x1) / 2}" y="101" text-anchor="middle" class="tat w s">${g + 1}</text></g>`; }).join('');
    const ico = `<g transform="translate(58 138)" color="#fff"><svg width="18" height="18" viewBox="0 0 24 24">${BIT_ICO.rep.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g>`;
    return tSvg(214, `${row}${br}
      <g ${tA(3.3, 'ta-pop')}><rect x="52" y="132" width="216" height="30" rx="9" fill="#1FA463"/>${ico}<text x="82" y="152" class="tat w s">${L('Repeteix', 'Repite')} <tspan font-weight="900">3</tspan> ${L('vegades', 'veces')}</text>
        <rect x="52" y="158" width="16" height="40" fill="#1FA463"/><rect x="52" y="190" width="110" height="14" rx="6" fill="#1FA463"/>
        <rect x="72" y="164" width="120" height="26" rx="7" fill="#fff" stroke="#A8E0C0" stroke-width="2"/>${sh(0, 98, 177, .75)}${sh(1, 132, 177, .75)}${sh(2, 166, 177, .75)}</g>
      <text x="284" y="186" text-anchor="middle" class="tat b" style="fill:#147A47" ${tA(3.8, 'ta-fade')}>${L('patró!', '¡patrón!')}</text>`);
  },
  // l'escala: el programa llarg té el mateix tros 3 vegades
  u2stairs() {
    const ico = (k, x, y, s, c = '#fff') => `<g transform="translate(${x} ${y})" color="${c}"><svg width="${s}" height="${s}" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g>`;
    const cells = [[0, 4], [1, 4], [1, 3], [2, 3], [2, 2], [3, 2], [3, 1]], C = 30, X0 = 10, Y0 = 34;
    const cx = c => X0 + c * C + C / 2, cy = r => Y0 + r * C + C / 2;
    const tiles = cells.map(([c, r], i) => `<rect x="${X0 + c * C + 1.5}" y="${Y0 + r * C + 1.5}" width="${C - 3}" height="${C - 3}" rx="7" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.5"/>${i ? `<rect x="${X0 + c * C + 4}" y="${Y0 + r * C + 4}" width="${C - 8}" height="${C - 8}" rx="5" fill="#1FA463" fill-opacity=".3" ${tA(.6 + Math.floor((i - 1) / 2) * .6, 'ta-fade')}/>` : ''}`).join('');
    const path = cells.map(([c, r], i) => `${i ? 'L' : 'M'}${cx(c)} ${cy(r) + 10}`).join(' ');
    const seq = ['fwd', 'left', 'fwd', 'right'];
    const rows = [0, 1, 2].map(r => `<g ${tA(.6 + r * .6, 'ta-in')}>${seq.map((k, j) => `<rect x="${150 + j * 31}" y="${30 + r * 38}" width="27" height="27" rx="7" fill="#3D7BF4"/>${ico(k, 154 + j * 31, 34 + r * 38, 19)}`).join('')}
      <circle cx="292" cy="${43.5 + r * 38}" r="12" fill="#1FA463"/><text x="292" y="${48.5 + r * 38}" text-anchor="middle" class="tat w s">${r + 1}</text></g>`).join('');
    return tSvg(214, `${tiles}<g><animateMotion dur="5.5s" repeatCount="indefinite" path="${path}" keyPoints="0;0;1;1" keyTimes="0;.1;.75;1" calcMode="linear"/>${tBitMini(0, 0, 1, .42)}</g>
      <path d="M140 34v104" stroke="#DCE4FA" stroke-width="2"/>${rows}
      <g ${tA(2.6, 'ta-pop')}><rect x="146" y="150" width="170" height="28" rx="9" fill="#1FA463"/>${ico('rep', 151, 155, 18)}<text x="172" y="169" class="tat w s" style="font-size:12.5px">${L('Repeteix', 'Repite')} <tspan font-weight="900">3</tspan> ${L('vegades', 'veces')}</text>
        <rect x="146" y="174" width="12" height="30" fill="#1FA463"/><rect x="146" y="198" width="70" height="10" rx="5" fill="#1FA463"/>
        ${seq.map((k, j) => `<rect x="${166 + j * 25}" y="${178 + 0}" width="22" height="20" rx="5" fill="#3D7BF4"/>${ico(k, 169 + j * 25, 180, 16)}`).join('')}</g>`);
  },
  // el llapis: pinta cada casella on entra en Bit (la de sortida, no)
  u2pen() {
    const X = i => 11 + i * 50, arr = [.145, .273, .4, .527, .655];
    const tiles = [0, 1, 2, 3, 4, 5].map(i => `<rect x="${X(i)}" y="84" width="44" height="44" rx="11" fill="url(#bwSand)" stroke="${i ? '#E2BE76' : '#20306A'}" stroke-width="${i ? 1.6 : 2.4}" ${i ? '' : 'stroke-dasharray="6 5"'}/>`).join('');
    const paint = [1, 2, 3, 4, 5].map(i => `<rect x="${X(i) + 5}" y="89" width="34" height="34" rx="8" fill="#8B5CF6" opacity="0"><animate attributeName="opacity" values="0;.92;0" keyTimes="0;${arr[i - 1]};.945" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></rect>`).join('');
    const pencil = `<g transform="translate(-15 -4) rotate(-38)"><rect x="-3.5" y="-34" width="7" height="27" rx="1.5" fill="#FFC531" stroke="#B98A00" stroke-width="1.6"/><rect x="-3.5" y="-38" width="7" height="6" rx="1.5" fill="#F48FB1" stroke="#B98A00" stroke-width="1.4"/><path d="M-3.5 -7L0 2L3.5 -7Z" fill="#F6DCA8" stroke="#B98A00" stroke-width="1.4" stroke-linejoin="round"/><circle cy="0" r="1.6" fill="#8B5CF6"/></g>`;
    return tSvg(214, `<g ${tA(.1, 'ta-fade')}><rect x="104" y="12" width="112" height="28" rx="14" fill="#F3EEFF" stroke="#8B5CF6" stroke-width="2"/><text x="160" y="31" text-anchor="middle" class="tat s" style="fill:#5B35B5">✏️ ${L('Llapis posat', 'Lápiz puesto')}</text></g>
      ${tiles}${paint}
      <text x="${X(0) + 22}" y="148" text-anchor="middle" class="tat s">${L('sortida', 'salida')}</text>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;50 0;50 0;100 0;100 0;150 0;150 0;200 0;200 0;250 0;250 0;0 0" keyTimes="0;.073;.145;.2;.273;.327;.4;.455;.527;.582;.655;.945;1" dur="5.5s" repeatCount="indefinite"/>
        <g transform="translate(${X(0) + 22} 122)">${pencil}${bitBot(1)}</g></g>
      <text x="160" y="180" text-anchor="middle" class="tat b" ${tA(1.2, 'ta-fade')}>${L('Pinta les caselles on entra', 'Pinta las casillas donde entra')}</text>
      <text x="160" y="204" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(3.8, 'ta-fade')}>${L('La casella de sortida no es pinta', 'La casilla de salida no se pinta')}</text>`, '');
  },
  // compte: «Pinta» no mou en Bit (cal alternar Endavant i Pinta)
  u2paint() {
    const X = i => 64 + i * 50, cols = ['#EF5A5A', '#FFC531', '#3CC47C', '#3D8BFF'];
    const band = (y, ok, title) => `<rect x="8" y="${y}" width="304" height="94" rx="16" fill="#fff" stroke="${ok ? '#A8E0C0' : '#F4B7B7'}" stroke-width="2" filter="url(#bwSh)"/>
      <circle cx="34" cy="${y + 52}" r="15" fill="${ok ? '#3CC47C' : '#EF5A5A'}"/>${ok ? `<path d="M27 ${y + 52}l5 5l9 -10" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : `<path d="M28 ${y + 46}l12 12M40 ${y + 46}l-12 12" stroke="#fff" stroke-width="3.6" stroke-linecap="round"/>`}
      <text x="64" y="${y + 22}" class="tat s">${title}</text>
      ${[0, 1, 2, 3, 4].map(i => `<rect x="${X(i)}" y="${y + 34}" width="42" height="42" rx="10" fill="url(#bwSand)" stroke="${i ? '#E2BE76' : '#20306A'}" stroke-width="${i ? 1.5 : 2.2}" ${!i && ok ? 'stroke-dasharray="6 5"' : ''}/>`).join('')}`;
    // a dalt: en Bit es queda quiet i la mateixa casella canvia de color
    const top = `<rect x="${X(0) + 5}" y="47" width="32" height="32" rx="8" fill="#EF5A5A" opacity="0"><animate attributeName="opacity" values="0;.92;.92" keyTimes="0;.15;1" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/><animate attributeName="fill" values="#EF5A5A;#FFC531;#3CC47C;#3CC47C" keyTimes="0;.33;.52;1" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></rect>
      ${tBitMini(X(0) + 21, 80, 1, .5)}<text x="304" y="28" text-anchor="end" class="tat s" style="fill:#C0392B" ${tA(2.6, 'ta-fade')}>${L('No es mou!', '¡No se mueve!')}</text>`;
    // a sota: Endavant, Pinta… cada casella d'un color
    const arr = [.18, .36, .54, .72];
    const bot = [1, 2, 3, 4].map(i => `<rect x="${X(i) + 5}" y="153" width="32" height="32" rx="8" fill="${cols[i - 1]}" opacity="0"><animate attributeName="opacity" values="0;.92;0" keyTimes="0;${arr[i - 1]};.96" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></rect>`).join('')
      + `<g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;50 0;50 0;100 0;100 0;150 0;150 0;200 0;200 0;0 0" keyTimes="0;.1;.16;.28;.34;.46;.52;.64;.7;.96;1" dur="5.5s" repeatCount="indefinite"/>${tBitMini(X(0) + 21, 186, 1, .5)}</g>`;
    return tSvg(214, `${band(6, false, L('Pinta, Pinta, Pinta', 'Pinta, Pinta, Pinta'))}${top}${band(112, true, L('Endavant, Pinta, Endavant…', 'Adelante, Pinta, Adelante…'))}${bot}`);
  },
  // un mosaic es fa rajola a rajola i es descompon en files (A, B, A, B)
  u2rows() {
    const P = ['ryry', 'uuuu', 'ryry', 'uuuu'], S = 26, G = 3, X0 = 16, Y0 = 26;
    let k = 0; const tiles = [];
    P.forEach((row, r) => { const order = r % 2 ? [3, 2, 1, 0] : [0, 1, 2, 3]; order.forEach(c => { tiles.push(`<rect x="${X0 + c * (S + G)}" y="${Y0 + r * (S + G)}" width="${S}" height="${S}" rx="6" fill="${BIT_COL[row[c]]}" stroke="#fff" stroke-width="1.5" ${tA(.2 + k * .1, 'ta-pop')}/>`); k++; }); });
    const lab = r => r % 2 ? 'B' : 'A', lc = r => r % 2 ? '#3D8BFF' : '#E5489A';
    const right = P.map((row, r) => `<g ${tA(2.2 + r * .3, 'ta-in')}><rect x="160" y="${18 + r * 36}" width="156" height="30" rx="9" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${[...row].map((ch, c) => `<rect x="${174 + c * 24}" y="${23 + r * 36}" width="20" height="20" rx="5" fill="${BIT_COL[ch]}"/>`).join('')}
      <circle cx="292" cy="${33 + r * 36}" r="11" fill="${lc(r)}"/><text x="292" y="${38 + r * 36}" text-anchor="middle" class="tat w s">${lab(r)}</text></g>`).join('');
    const ico = `<g transform="translate(168 172)" color="#fff"><svg width="18" height="18" viewBox="0 0 24 24">${BIT_ICO.rep.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g>`;
    return tSvg(214, `<rect x="${X0 - 6}" y="${Y0 - 6}" width="${4 * (S + G) + 9}" height="${4 * (S + G) + 9}" rx="10" fill="#E8EEFF"/>${tiles.join('')}
      <text x="${X0 + 56}" y="166" text-anchor="middle" class="tat b">${L('Fila a fila', 'Fila a fila')}</text>
      <g ${tA(2, 'ta-in')}><path d="M140 82h14" stroke="#1FA463" stroke-width="4" stroke-linecap="round"/><path d="M151 75l7 7-7 7" fill="none" stroke="#1FA463" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
      ${right}
      <g ${tA(3.6, 'ta-pop')}><rect x="160" y="166" width="156" height="30" rx="10" fill="#1FA463"/>${ico}<text x="192" y="186" class="tat w s" style="font-size:12.5px">A + B, ${L('2 vegades', '2 veces')}</text></g>`);
  }
});
