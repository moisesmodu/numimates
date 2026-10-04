/* Tech Robot · unitat 7 «Fins que…» · animacions de teoria (TANI u7*)
   Totes duren 5,5 s i es repeteixen. Les entrades suaus fan servir les classes ta-* (CSS) i els moviments que han
   d'anar sincronitzats (en Bit que avança, la cullera, el plat que es buida…) fan servir SMIL amb dur="5.5s". */
Object.assign(TANI, {
  // a la vida diària: menjar FINS QUE el plat és buit (no comptes les cullerades: mires el plat)
  u7eat() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const show = (a, b = 5.3) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${k(a)};${k(a + .2)};${k(b)};${k(b + .15)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const hide = a => `<animate attributeName="opacity" values="1;1;0;0" keyTimes="0;${k(a)};${k(a + .15)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const bites = [1.0, 2.0, 3.0, 4.0];
    const pcs = [[58, 128], [78, 136], [96, 127], [76, 121]];
    const piece = ([x, y], i) => `<g>${hide(bites[i] + .1)}<circle cx="${x}" cy="${y}" r="9.5" fill="#F5C45E" stroke="#C98A12" stroke-width="2"/><circle cx="${x - 3}" cy="${y - 3}" r="2.6" fill="#FFF3C4"/></g>`;
    // la cullera baixa al plat i puja amb un tros, quatre vegades
    const sp = []; bites.forEach(b => sp.push([b - .35, 0, -34], [b - .05, 0, 0], [b + .3, 0, -34]));
    const all = [[0, 0, -34], ...sp, [D, 0, -34]];
    const spoonMv = `<animateTransform attributeName="transform" type="translate" values="${all.map(p => p[1] + ' ' + p[2]).join(';')}" keyTimes="${all.map(p => k(p[0])).join(';')}" dur="5.5s" repeatCount="indefinite"/>`;
    const pulse = bites.map(b => `${k(b - .1)};${k(b)};${k(b + .3)}`).join(';');
    return tSvg(214, `<text x="160" y="24" text-anchor="middle" class="tat b">${L('Menja fins que el plat sigui buit', 'Come hasta que el plato esté vacío')}</text>
      <g ${tA(.1, 'ta-in')}><ellipse cx="78" cy="150" rx="66" ry="12" fill="#0B2A12" opacity=".08"/><ellipse cx="78" cy="132" rx="62" ry="26" fill="#fff" stroke="#C9D6FB" stroke-width="3"/><ellipse cx="78" cy="130" rx="44" ry="15" fill="#EEF3FF"/></g>
      ${pcs.map(piece).join('')}
      <g>${spoonMv}<g transform="translate(92 112)"><path d="M8 -6 L44 -40" stroke="#9AA6C4" stroke-width="6" stroke-linecap="round"/><ellipse cx="0" cy="0" rx="15" ry="9" fill="#C9D3EA" stroke="#7D8AAD" stroke-width="2.5" transform="rotate(-40)"/></g></g>
      <g opacity="0">${show(4.35)}<circle cx="78" cy="130" r="18" fill="#3CC47C"/><path d="M70 130l6 6l10 -12" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(.3, 'ta-pop')}><rect x="150" y="44" width="164" height="104" rx="16" fill="#1FA463" filter="url(#bwSh)"/>
        <text x="164" y="68" class="tat w s">${L('Repeteix fins que', 'Repite hasta que')}</text><text x="164" y="88" class="tat w s">${L('el plat sigui buit', 'el plato esté vacío')}</text>
        <rect x="166" y="100" width="136" height="36" rx="10" fill="#fff"/><rect x="166" y="100" width="136" height="36" rx="10" fill="none" stroke="#F08A24" stroke-width="4" opacity="0"><animate attributeName="opacity" values="0;${bites.map(() => '0;1;0').join(';')};0" keyTimes="0;${pulse};1" dur="5.5s" repeatCount="indefinite"/></rect>
        <text x="234" y="123" text-anchor="middle" class="tat s">${L('una cullerada', 'una cucharada')}</text></g>
      <g ${tA(.6, 'ta-in')}><rect x="150" y="160" width="68" height="34" rx="17" fill="#F2B21B"/><text x="184" y="182" text-anchor="middle" class="tat s">${L('Buit?', '¿Vacío?')}</text></g>
      <g opacity="0">${show(.7, 4.15)}<rect x="222" y="160" width="94" height="34" rx="17" fill="#EF5A5A"/><text x="269" y="182" text-anchor="middle" class="tat w s">${L('No: una més', 'No: otra más')}</text></g>
      <g opacity="0">${show(4.3)}<rect x="222" y="160" width="94" height="34" rx="17" fill="#3CC47C"/><text x="269" y="182" text-anchor="middle" class="tat w s">${L('Sí: para!', '¡Sí: para!')}</text></g>`);
  },
  // com funciona per dins: ABANS de cada volta, en Bit pregunta si ja hi ha arribat
  u7check() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const pulses = (list, v1 = 1) => { const t = [0], v = [0]; list.forEach(([a, b]) => { t.push(a, a + .12, b, b + .12); v.push(0, v1, v1, 0); }); t.push(D); v.push(0); return `<animate attributeName="opacity" values="${v.join(';')}" keyTimes="${t.map(k).join(';')}" dur="5.5s" repeatCount="indefinite"/>`; };
    const steps = [1.0, 2.0, 3.0, 4.0], ask = [[.55, .95], [1.55, 1.95], [2.55, 2.95], [3.55, 3.95]];
    const tiles = [0, 1, 2, 3, 4].map(i => `<rect x="${18 + i * 58}" y="36" width="54" height="42" rx="10" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.5"/>`).join('');
    const pts = [[0, 0], ...steps.flatMap((s, i) => [[s, i * 58], [s + .35, (i + 1) * 58]]), [D, 232]];
    const botMv = `<animateTransform attributeName="transform" type="translate" values="${pts.map(p => p[1] + ' 0').join(';')}" keyTimes="${pts.map(p => k(p[0])).join(';')}" dur="5.5s" repeatCount="indefinite"/>`;
    const flag = `<g transform="translate(272 74)"><path d="M0 0V-38" stroke="#7A4A1E" stroke-width="3.5" stroke-linecap="round"/><path d="M0 -38l22 7l-22 8z" fill="#EF5A5A"/></g>`;
    return tSvg(220, `${tiles}${flag}
      <g>${botMv}${tBitMini(45, 74, 1, .62)}
        <g opacity="0">${pulses(ask)}<rect x="27" y="4" width="38" height="26" rx="13" fill="#F2B21B"/><text x="46" y="22" text-anchor="middle" class="tat s">${L('No', 'No')}</text></g>
        <g opacity="0">${pulses([[4.45, 5.3]])}<rect x="23" y="4" width="46" height="26" rx="13" fill="#3CC47C"/><text x="46" y="22" text-anchor="middle" class="tat w s">${L('Sí!', '¡Sí!')}</text></g></g>
      <g ${tA(.2, 'ta-in')}><rect x="48" y="104" width="150" height="38" rx="19" fill="#F2B21B" filter="url(#bwSh)"/><text x="123" y="128" text-anchor="middle" class="tat s">${L('Hi he arribat?', '¿He llegado?')}</text></g>
      <rect x="48" y="104" width="150" height="38" rx="19" fill="none" stroke="#14204A" stroke-width="3" opacity="0">${pulses([...ask, [4.45, 5.3]])}</rect>
      <g ${tA(.5, 'ta-in')}><path d="M198 123h28" stroke="#14204A" stroke-width="3"/><path d="M222 117l8 6l-8 6" fill="none" stroke="#14204A" stroke-width="3" stroke-linejoin="round"/><text x="212" y="113" text-anchor="middle" class="tat s">${L('no', 'no')}</text>
        <rect x="232" y="104" width="82" height="38" rx="12" fill="#3D7BF4" filter="url(#bwSh)"/><text x="273" y="128" text-anchor="middle" class="tat w s">${L('Endavant', 'Adelante')}</text>
        <path d="M273 142v20H123v-12" fill="none" stroke="#14204A" stroke-width="3" stroke-dasharray="6 5" class="ta-dash"/><path d="M117 154l6 -9l6 9" fill="none" stroke="#14204A" stroke-width="3" stroke-linejoin="round"/></g>
      <rect x="232" y="104" width="82" height="38" rx="12" fill="none" stroke="#F08A24" stroke-width="4" opacity="0">${pulses(steps.map(s => [s, s + .4]))}</rect>
      <g ${tA(.8, 'ta-in')}><path d="M48 123H22v58" fill="none" stroke="#14204A" stroke-width="3"/><path d="M16 175l6 8l6 -8" fill="none" stroke="#14204A" stroke-width="3" stroke-linejoin="round"/><text x="34" y="157" class="tat s">${L('sí', 'sí')}</text>
        <rect x="6" y="186" width="96" height="30" rx="15" fill="#EF5A5A"/><text x="54" y="206" text-anchor="middle" class="tat w s">${L('Para!', '¡Para!')}</text></g>
      <rect x="6" y="186" width="96" height="30" rx="15" fill="none" stroke="#14204A" stroke-width="3" opacity="0">${pulses([[4.5, 5.3]])}</rect>
      <text x="214" y="182" text-anchor="middle" class="tat s" style="font-size:12.5px" ${tA(1.1, 'ta-fade')}>${L('Pregunta abans de cada volta', 'Pregunta antes de cada vuelta')}</text>`);
  },
  // compte! un bucle que no s'acaba mai: dins només hi ha «Gira» i la bandera no s'acosta
  u7inf() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const win = (a, b) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${k(a)};${k(a + .05)};${k(b)};${k(b + .05)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const nums = [1, 2, 3, 4, 5, 6, 7].map((n, i) => `<text x="76" y="44" text-anchor="middle" class="tat b" opacity="0">${win(.3 + i * .55, .3 + (i + 1) * .55 - .05)}${n}</text>`).join('');
    return tSvg(212, `<rect x="22" y="70" width="108" height="100" rx="18" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="2"/>
      <g transform="translate(76 150) scale(1.1)"><g class="tv tv0">${bitBot(2)}</g><g class="tv tv1">${bitBot(1)}</g><g class="tv tv2">${bitBot(0)}</g><g class="tv tv3">${bitBot(3)}</g></g>
      <path d="M18 92 A66 40 0 0 0 18 150" fill="none" stroke="#E0533F" stroke-width="4" stroke-dasharray="6 6" class="ta-dash"/><path d="M12 144l6 10l8 -8" fill="none" stroke="#E0533F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="36" y="22" width="80" height="30" rx="15" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>${nums}
      <text x="76" y="45" text-anchor="middle" class="tat b" style="font-size:24px" opacity="0">${win(4.15, 5.35)}∞</text>
      <g ${tA(.2, 'ta-pop')}><rect x="150" y="16" width="164" height="92" rx="16" fill="#1FA463" filter="url(#bwSh)"/><text x="162" y="38" class="tat w s">${L('Repeteix fins que', 'Repite hasta que')}</text><text x="162" y="56" class="tat w s">${L('arribis a la bandera', 'llegues a la bandera')}</text>
        <rect x="164" y="66" width="136" height="32" rx="9" fill="#3D7BF4"/><text x="232" y="87" text-anchor="middle" class="tat w s">${L('Gira a la dreta', 'Gira a la derecha')}</text></g>
      <g ${tA(.9, 'ta-in')}><rect x="242" y="124" width="62" height="48" rx="12" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="2"/><path d="M262 164V132" stroke="#7A4A1E" stroke-width="3.5" stroke-linecap="round"/><path d="M262 132l20 6l-20 7z" fill="#EF5A5A"/>
        <path d="M136 148H236" stroke="#9AA6C4" stroke-width="3" stroke-dasharray="5 6"/><circle cx="188" cy="148" r="13" fill="#EF5A5A"/><path d="M182 142l12 12M194 142l-12 12" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/></g>
      <text x="160" y="200" text-anchor="middle" class="tat b" ${tA(1.6, 'ta-fade')}>${L('La condició no es compleix mai!', '¡La condición no se cumple nunca!')}</text>`, 'loop4');
  },
  // el mateix programa a tres illes amb camins de llargades diferents
  u7tide() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const show = a => `<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;${k(a)};${k(a + .2)};${k(5.25)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const rows = [[82, 3], [132, 6], [182, 4]], T = 34, X0 = 66, st = .55;
    const row = ([y, n], r) => {
      const tiles = [...Array(n + 1).keys()].map(i => `<rect x="${X0 + i * T}" y="${y - 18}" width="${T - 3}" height="34" rx="8" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.4"/>`).join('');
      const fx = X0 + n * T + 10;
      const pts = [[0, 0], ...[...Array(n).keys()].flatMap(i => [[.5 + i * st, i * T], [.5 + i * st + .38, (i + 1) * T]]), [D, n * T]];
      const mvb = `<animateTransform attributeName="transform" type="translate" values="${pts.map(p => p[1] + ' 0').join(';')}" keyTimes="${pts.map(p => k(p[0])).join(';')}" dur="5.5s" repeatCount="indefinite"/>`;
      const end = .5 + n * st;
      return `<text x="8" y="${y + 5}" class="tat s">${L('Illa', 'Isla')} ${r + 1}</text>${tiles}<g transform="translate(${fx} ${y + 12})"><path d="M0 0V-28" stroke="#7A4A1E" stroke-width="3" stroke-linecap="round"/><path d="M0 -28l16 5l-16 6z" fill="#EF5A5A"/></g>
        <g>${mvb}${tBitMini(X0 + 15, y + 14, 1, .4)}</g>
        <g opacity="0">${show(end)}<circle cx="${fx + 26}" cy="${y - 12}" r="11" fill="#3CC47C"/><path d="M${fx + 21} ${y - 12}l4 4l7 -8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
    };
    return tSvg(222, `<g ${tA(.1, 'ta-pop')}><rect x="16" y="6" width="288" height="40" rx="14" fill="#1FA463" filter="url(#bwSh)"/><text x="160" y="31" text-anchor="middle" class="tat w s">${L('Repeteix fins que arribis: Endavant', 'Repite hasta que llegues: Adelante')}</text></g>
      ${rows.map(row).join('')}
      <text x="160" y="216" text-anchor="middle" class="tat b" opacity="0">${show(4.1)}${L('Un sol programa per a les tres illes!', '¡Un solo programa para las tres islas!')}</text>`);
  },
  // quan va millor cada bucle: si saps el número, «Repeteix N vegades»; si no, «Repeteix fins que…»
  u7vs() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const show = a => `<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;${k(a)};${k(a + .2)};${k(5.25)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const stairs = [0, 1, 2, 3, 4].map(i => `<rect x="${22 + i * 24}" y="${180 - (i + 1) * 16}" width="24" height="${(i + 1) * 16}" fill="${i % 2 ? '#C98A4B' : '#B57536'}"/><text x="${34 + i * 24}" y="${174 - (i + 1) * 16}" text-anchor="middle" class="tat s" opacity="0">${show(.9 + i * .55)}${i + 1}</text>`).join('');
    const water = `<clipPath id="u7glass"><path d="M214 108h56l-7 76h-42z"/></clipPath><g clip-path="url(#u7glass)"><rect x="200" y="184" width="84" height="80" fill="#4FB4E8"><animate attributeName="y" values="184;184;122;122" keyTimes="0;${k(.9)};${k(3.6)};1" dur="5.5s" repeatCount="indefinite"/></rect></g>`;
    return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="8" y="8" width="148" height="198" rx="18" fill="#E7F7EE" stroke="#A8E0C0" stroke-width="2"/><text x="82" y="32" text-anchor="middle" class="tat s">${L('Saps el número?', '¿Sabes el número?')}</text>
        <rect x="14" y="42" width="136" height="34" rx="10" fill="#1FA463"/><text x="82" y="64" text-anchor="middle" class="tat w s" style="font-size:12.5px">${L('Repeteix 5 vegades', 'Repite 5 veces')}</text></g>
      ${stairs}<text x="82" y="198" text-anchor="middle" class="tat s" ${tA(.6, 'ta-fade')}>${L('5 graons', '5 peldaños')}</text>
      <g ${tA(.4, 'ta-in')}><rect x="164" y="8" width="148" height="198" rx="18" fill="#FFF3E6" stroke="#F7C99A" stroke-width="2"/><text x="238" y="32" text-anchor="middle" class="tat s">${L('No el saps?', '¿No lo sabes?')}</text>
        <rect x="170" y="42" width="136" height="34" rx="10" fill="#1FA463"/><text x="238" y="64" text-anchor="middle" class="tat w s" style="font-size:12.5px">${L('Repeteix fins que…', 'Repite hasta que…')}</text></g>
      ${water}<path d="M214 108h56l-7 76h-42z" fill="none" stroke="#7D8AAD" stroke-width="3" stroke-linejoin="round"/><path d="M206 122h72" stroke="#E0533F" stroke-width="2.5" stroke-dasharray="5 4"/>
      <g opacity="0">${show(3.7)}<rect x="262" y="88" width="44" height="26" rx="13" fill="#3CC47C"/><text x="284" y="106" text-anchor="middle" class="tat w s">${L('ple!', '¡lleno!')}</text></g>
      <text x="238" y="198" text-anchor="middle" class="tat s" ${tA(.8, 'ta-fade')}>${L('fins que sigui ple', 'hasta que esté lleno')}</text>`);
  },
  // compte! el gir va DESPRÉS del bucle, no a dins
  u7inside() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const show = a => `<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;${k(a)};${k(a + .2)};${k(5.25)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const topBit = `<rect x="-12" y="-12" width="24" height="24" rx="8" fill="#fff" stroke="#20306A" stroke-width="2.4"/><rect x="2" y="-8" width="8" height="16" rx="3" fill="#16235A"/><circle cx="7" cy="-3.5" r="1.8" fill="#7DF3FF"/><circle cx="7" cy="3.5" r="1.8" fill="#7DF3FF"/>`;
    const strip = x0 => [0, 1, 2, 3].map(i => `<rect x="${x0 + i * 28}" y="161" width="26" height="28" rx="7" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.3"/>`).join('') + `<circle cx="${x0 + 4 * 28 + 11}" cy="175" r="11" fill="url(#bwRock)" stroke="#737B90" stroke-width="1.5"/>`;
    const mvT = pts => `<animateTransform attributeName="transform" type="translate" values="${pts.map(p => p[1] + ' 0').join(';')}" keyTimes="${pts.map(p => k(p[0])).join(';')}" dur="5.5s" repeatCount="indefinite"/>`;
    const mvR = pts => `<animateTransform attributeName="transform" type="rotate" values="${pts.map(p => p[1]).join(';')}" keyTimes="${pts.map(p => k(p[0])).join(';')}" dur="5.5s" repeatCount="indefinite"/>`;
    const panel = (x, ok) => `<rect x="${x}" y="8" width="150" height="198" rx="18" fill="${ok ? '#E7F7EE' : '#FDEBEB'}" stroke="${ok ? '#A8E0C0' : '#F4B7B7'}" stroke-width="2"/>
      <circle cx="${x + 24}" cy="30" r="13" fill="${ok ? '#3CC47C' : '#EF5A5A'}"/>${ok ? `<path d="M${x + 18} 30l5 5l8 -9" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : `<path d="M${x + 19} 25l10 10M${x + 29} 25l-10 10" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>`}
      <text x="${x + 44}" y="35" class="tat s">${ok ? L('Gir després', 'Giro después') : L('Gir a dins', 'Giro dentro')}</text>
      <rect x="${x + 6}" y="48" width="138" height="${ok ? 66 : 96}" rx="11" fill="#1FA463"/><text x="${x + 14}" y="68" class="tat w s" style="font-size:12.5px">${L('Fins que obstacle', 'Hasta obstáculo')}</text>
      <rect x="${x + 22}" y="76" width="110" height="28" rx="8" fill="#3D7BF4"/><text x="${x + 77}" y="95" text-anchor="middle" class="tat w s">${L('Endavant', 'Adelante')}</text>
      ${ok ? `<rect x="${x + 10}" y="122" width="130" height="28" rx="8" fill="#3D7BF4"/><text x="${x + 75}" y="141" text-anchor="middle" class="tat w s">${L('Gira', 'Gira')}</text>`
        : `<rect x="${x + 22}" y="108" width="110" height="28" rx="8" fill="#3D7BF4"/><text x="${x + 77}" y="127" text-anchor="middle" class="tat w s">${L('Gira', 'Gira')}</text>`}`;
    return tSvg(214, `${panel(8, false)}${panel(162, true)}${strip(16)}${strip(170)}
      <g>${mvT([[0, 0], [.6, 0], [1.0, 28], [D, 28]])}<g transform="translate(29 175)"><g>${mvR([[0, 0], [1.2, 0], [1.5, 90], [D, 90]])}${topBit}</g></g></g>
      <g opacity="0">${show(1.8)}<circle cx="57" cy="148" r="13" fill="#EF5A5A"/><text x="57" y="154" text-anchor="middle" class="tat w b">?!</text></g>
      <g>${mvT([[0, 0], [.6, 0], [1.2, 28], [1.8, 56], [2.4, 84], [D, 84]])}<g transform="translate(183 175)"><g>${mvR([[0, 0], [2.7, 0], [3.0, 90], [D, 90]])}${topBit}</g></g></g>
      <g opacity="0">${show(3.2)}<circle cx="267" cy="148" r="12" fill="#3CC47C"/><path d="M261 148l5 5l7 -8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
  },
  // seguir un camí que gira: a cada volta en Bit DECIDEIX (si hi ha obstacle, gira; si no, avança)
  u7follow() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const pulses = list => { const t = [0], v = [0]; list.forEach(([a, b]) => { t.push(a, a + .08, b, b + .08); v.push(0, 1, 1, 0); }); t.push(D); v.push(0); return `<animate attributeName="opacity" values="${v.join(';')}" keyTimes="${t.map(k).join(';')}" dur="5.5s" repeatCount="indefinite"/>`; };
    const cells = [[30, 40], [60, 40], [90, 40], [120, 40], [150, 40], [150, 70], [150, 100], [150, 130], [150, 160], [120, 160], [90, 160], [60, 160], [60, 130], [60, 100]];
    const tiles = cells.map(([x, y]) => `<rect x="${x - 14}" y="${y - 14}" width="28" height="28" rx="7" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.2"/>`).join('');
    const trees = [[100, 100], [110, 128], [30, 120], [30, 180], [24, 70], [96, 76]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="10" fill="url(#bwLeaf)"/>`).join('');
    // camí: 120 + 120 + 90 + 60 = 390 (pauses als revolts, quan en Bit gira)
    const L1 = 120 / 390, L2 = 240 / 390, L3 = 330 / 390;
    const kt = [0, .3, 1.5, 1.8, 3.0, 3.3, 4.1, 4.4, 4.9, D], kp = [0, 0, L1, L1, L2, L2, L3, L3, 1, 1];
    const topBit = `<rect x="-11" y="-11" width="22" height="22" rx="7" fill="#fff" stroke="#20306A" stroke-width="2.4"/><rect x="2" y="-7" width="7" height="14" rx="3" fill="#16235A"/><circle cx="6.5" cy="-3" r="1.7" fill="#7DF3FF"/><circle cx="6.5" cy="3" r="1.7" fill="#7DF3FF"/>`;
    const move = [[.3, 1.5], [1.8, 3.0], [3.3, 4.1], [4.4, 4.9]], turn = [[1.5, 1.8], [3.0, 3.3], [4.1, 4.4]];
    return tSvg(220, `<rect x="6" y="16" width="174" height="188" rx="16" fill="url(#bwGrass)" opacity=".85"/>${tiles}${trees}
      <g transform="translate(60 100)"><path d="M0 8V-18" stroke="#7A4A1E" stroke-width="3" stroke-linecap="round"/><path d="M0 -18l15 5l-15 6z" fill="#EF5A5A"/></g>
      <g><animateMotion dur="5.5s" repeatCount="indefinite" rotate="auto" calcMode="linear" keyTimes="${kt.map(k).join(';')}" keyPoints="${kp.join(';')}" path="M30 40H150V160H60V100"/>${topBit}</g>
      <g ${tA(.2, 'ta-pop')}><rect x="186" y="16" width="130" height="188" rx="16" fill="#1FA463" filter="url(#bwSh)"/><text x="196" y="38" class="tat w s">${L('Fins que arribis:', 'Hasta que llegues:')}</text>
        <rect x="194" y="50" width="114" height="66" rx="10" fill="#F2B21B"/><text x="202" y="70" class="tat s">${L('Si obstacle:', 'Si obstáculo:')}</text><rect x="202" y="78" width="98" height="28" rx="8" fill="#3D7BF4"/><text x="251" y="97" text-anchor="middle" class="tat w s">${L('Gira', 'Gira')}</text>
        <rect x="194" y="124" width="114" height="66" rx="10" fill="#F2B21B"/><text x="202" y="144" class="tat s">${L('Si no:', 'Si no:')}</text><rect x="202" y="152" width="98" height="28" rx="8" fill="#3D7BF4"/><text x="251" y="171" text-anchor="middle" class="tat w s">${L('Endavant', 'Adelante')}</text></g>
      <rect x="198" y="74" width="106" height="36" rx="10" fill="none" stroke="#fff" stroke-width="4" opacity="0">${pulses(turn)}</rect>
      <rect x="198" y="148" width="106" height="36" rx="10" fill="none" stroke="#fff" stroke-width="4" opacity="0">${pulses(move)}</rect>
      <g opacity="0">${pulses([[4.95, 5.35]])}<circle cx="60" cy="72" r="13" fill="#3CC47C"/><path d="M54 72l5 5l8 -9" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
  },
  // el rescat a la cova: fins que trobi la caixa, l'agafa, mitja volta i fins a la sortida
  u7cave() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const win = (a, b) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${k(a)};${k(a + .15)};${k(b)};${k(b + .15)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const tiles = [0, 1, 2, 3, 4, 5, 6].map(i => `<rect x="${44 + i * 34}" y="150" width="32" height="34" rx="7" fill="url(#bwSand)" stroke="#C9A35E" stroke-width="1.2" opacity=".95"/>`).join('');
    const crys = [[96, 70, '#B79CFF'], [150, 52, '#7DF3FF'], [214, 66, '#FF8FB1'], [262, 96, '#7DF3FF'], [70, 112, '#FFD54A']].map(([x, y, c], i) => `<path d="M${x} ${y - 12}l6 10l-6 12l-6 -12z" fill="${c}"><animate attributeName="opacity" values=".35;1;.35" dur="${1.6 + i * .3}s" repeatCount="indefinite"/></path>`).join('');
    const mv = pts => `<animateTransform attributeName="transform" type="translate" values="${pts.map(p => p[1] + ' 0').join(';')}" keyTimes="${pts.map(p => k(p[0])).join(';')}" dur="5.5s" repeatCount="indefinite"/>`;
    return tSvg(220, `<path d="M4 214V120Q4 18 160 14Q316 18 316 120V214Z" fill="#6B5444"/><path d="M26 214V128Q30 42 160 38Q290 42 294 128V214Z" fill="#2E2430"/>${crys}${[[70, 64, 18], [118, 44, 22], [182, 42, 16], [236, 52, 24], [276, 84, 14]].map(([x, y, h]) => `<path d="M${x - 7} ${y - 4}L${x} ${y + h}L${x + 7} ${y - 4}Z" fill="#4A3A3E"/>`).join('')}
      <path d="M26 214V184H294V214Z" fill="#3A2E38"/>${tiles}
      <g ${tA(.1, 'ta-pop')}><g transform="translate(46 150)"><path d="M-2 0L14 -26L30 0Z" fill="#EF5A5A" stroke="#A9302A" stroke-width="2" stroke-linejoin="round"/><path d="M10 0L14 -10L18 0Z" fill="#7A2620"/></g></g>
      <g opacity="0">${win(.05, 2.4)}<g transform="translate(266 178)"><rect x="-11" y="-20" width="22" height="18" rx="3" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2"/><path d="M0 -20V-2M-11 -11H11" stroke="#F6DCA8" stroke-width="2.5"/></g></g>
      <g opacity="0">${win(4.65, 5.3)}<g transform="translate(60 178)"><rect x="-11" y="-20" width="22" height="18" rx="3" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2"/><path d="M0 -20V-2M-11 -11H11" stroke="#F6DCA8" stroke-width="2.5"/></g></g>
      <g opacity="0">${win(.05, 2.45)}<g>${mv([[0, 0], [.4, 0], [2.2, 170], [D, 170]])}${tBitMini(80, 180, 1, .55)}</g></g>
      <g opacity="0">${win(2.45, 4.6)}<g>${mv([[0, 170], [2.8, 170], [4.4, 0], [D, 0]])}<g transform="translate(80 180) scale(.55)">${bitBot(3, null, true)}</g></g></g>
      <g opacity="0">${win(4.6, 5.3)}${tBitMini(80, 180, 2, .55)}</g>
      <text x="160" y="208" text-anchor="middle" class="tat w s" opacity="0">${win(.2, 2.3)}${L('Fins que trobi la caixa…', 'Hasta que encuentre la caja…')}</text>
      <text x="160" y="208" text-anchor="middle" class="tat w s" opacity="0">${win(2.4, 2.85)}${L('Agafa-la i mitja volta', 'Cógela y media vuelta')}</text>
      <text x="160" y="208" text-anchor="middle" class="tat w s" opacity="0">${win(2.9, 4.5)}${L('Fins que hi hagi la paret…', 'Hasta que haya la pared…')}</text>
      <text x="160" y="208" text-anchor="middle" class="tat w s" opacity="0">${win(4.6, 5.3)}${L('Rescatada!', '¡Rescatada!')}</text>`);
  }
});
