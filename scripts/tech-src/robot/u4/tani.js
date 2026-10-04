/* Tech Robot · unitat 4 «En Bit veu el món» · animacions de teoria (sensors i condicions) */
Object.assign(TANI, {
  // què és un sensor: els ulls, la porta automàtica i el sensor d'aparcament
  u4sensor() {
    const D = 'dur="4s" repeatCount="indefinite"';
    const card = (x, t, lab, art) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="12" width="96" height="156" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${art}<text x="${x + 48}" y="156" text-anchor="middle" class="tat s">${lab}</text></g>`;
    const eye = `<g transform="translate(58 78)"><ellipse rx="32" ry="20" fill="#fff" stroke="#14204A" stroke-width="3"/>
      <g><animateTransform attributeName="transform" type="translate" values="-8 0;8 0;8 0;-8 0;-8 0" keyTimes="0;.3;.5;.8;1" ${D}/><circle r="12" fill="#3D7BF4"/><circle r="5.5" fill="#14204A"/><circle cx="-3" cy="-4" r="2.4" fill="#fff"/></g>
      <ellipse rx="33" ry="0" cy="-1" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2"><animate attributeName="ry" values="0;0;21;0;0" keyTimes="0;.62;.66;.7;1" ${D}/></ellipse>
      <path d="M-30 -26q30 -14 60 0" stroke="#14204A" stroke-width="3" fill="none" stroke-linecap="round"/></g>`;
    const door = `<defs><clipPath id="u4door"><rect x="122" y="40" width="68" height="84"/></clipPath></defs>
      <rect x="118" y="36" width="76" height="92" rx="6" fill="#E8EEFF" stroke="#9FB2E6" stroke-width="3"/>
      <circle cx="156" cy="30" r="5" fill="#EF5A5A"><animate attributeName="fill" values="#EF5A5A;#EF5A5A;#3CC47C;#3CC47C;#EF5A5A" keyTimes="0;.28;.3;.8;1" ${D}/></circle>
      <g transform="translate(156 112)"><g><animateTransform attributeName="transform" type="translate" values="34 0;0 0;0 0;0 -20;0 -20;34 0" keyTimes="0;.3;.5;.65;.99;1" ${D}/>
        <animate attributeName="opacity" values="1;1;1;0;0;1" keyTimes="0;.3;.5;.65;.99;1" ${D}/>
        <circle cy="-36" r="8" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2"/><rect x="-9" y="-27" width="18" height="24" rx="7" fill="#F08A24"/><path d="M-5 -4v8M5 -4v8" stroke="#34405E" stroke-width="4" stroke-linecap="round"/></g></g>
      <g clip-path="url(#u4door)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;-30 0;-30 0;0 0" keyTimes="0;.32;.45;.82;1" ${D}/><rect x="122" y="40" width="34" height="84" fill="#BFE6FF" fill-opacity=".85" stroke="#7FB3D9" stroke-width="2"/></g>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;30 0;30 0;0 0" keyTimes="0;.32;.45;.82;1" ${D}/><rect x="156" y="40" width="34" height="84" fill="#BFE6FF" fill-opacity=".85" stroke="#7FB3D9" stroke-width="2"/></g></g>`;
    const car = `<rect x="276" y="44" width="12" height="84" rx="3" fill="#C9443A"/><path d="M276 64h12M276 86h12M276 108h12" stroke="#F6B7AE" stroke-width="2"/>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;26 0;26 0;0 0" keyTimes="0;.55;.85;1" ${D}/>
        <path d="M222 112v-16q0 -6 6 -6h8l8 -10h14q5 0 7 5l4 11v16z" fill="#3D7BF4" stroke="#1D4FB8" stroke-width="2.5" stroke-linejoin="round"/><circle cx="232" cy="114" r="6" fill="#2A3557"/><circle cx="256" cy="114" r="6" fill="#2A3557"/></g>
      ${[0, 1, 2].map(i => `<path d="M${262 + i * 4} ${76 - i * 4}q8 ${12 + i * 4} 0 ${24 + i * 8}" stroke="#F2B21B" stroke-width="3" fill="none" stroke-linecap="round" opacity="0"><animate attributeName="opacity" values="0;0;1;0;1;0;0" keyTimes="0;${(.3 + i * .08).toFixed(2)};${(.4 + i * .08).toFixed(2)};.62;.7;.84;1" ${D}/><animateTransform attributeName="transform" type="translate" values="0 0;26 0;26 0;0 0" keyTimes="0;.55;.85;1" ${D}/></path>`).join('')}
      <text x="254" y="64" text-anchor="middle" class="tat s" opacity="0">bip!<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.45;.5;.8;1" ${D}/></text>`;
    return tSvg(214, `${card(10, .2, L('ulls', 'ojos'), eye)}${card(112, .6, L('porta', 'puerta'), door)}${card(214, 1, L('aparcament', 'aparcamiento'), car)}
      <text x="160" y="200" text-anchor="middle" class="tat b" ${tA(1.6, 'ta-fade')}>${L('Un sensor nota el món', 'Un sensor nota el mundo')}</text>`);
  },
  // el sensor d'en Bit mira la casella del davant: lliure o obstacle
  u4beam() {
    const D = 'dur="5.5s" repeatCount="indefinite"', half = (a, b) => `values="${a};${a};${b};${b};${a}" keyTimes="0;.47;.5;.97;1" calcMode="discrete"`;
    const tile = x => `<rect x="${x}" y="74" width="104" height="92" rx="16" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="2"/>`;
    return tSvg(214, `${tile(30)}${tile(186)}
      <path d="M104 116 L198 92 L198 150 Z" fill="#3CC47C" opacity=".32"><animate attributeName="fill" ${half('#3CC47C', '#EF5A5A')} ${D}/></path>
      <path d="M104 116 L198 92 M104 116 L198 150" stroke="#3CC47C" stroke-width="2.5" stroke-dasharray="5 5" class="ta-dash"><animate attributeName="stroke" ${half('#3CC47C', '#EF5A5A')} ${D}/></path>
      ${tBitMini(80, 156, 1, 1.25)}
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.48;.52;.95;1" ${D}/><g transform="translate(238 152) scale(1.35)"><ellipse cx="2" cy="0" rx="22" ry="6" fill="#0B2A12" opacity=".25"/><path d="M-21 -2Q-24 -24 -6 -31Q12 -36 20 -18Q25 -4 16 -1L-14 0Q-20 0 -21 -2Z" fill="url(#bwRock)" stroke="#5E667A" stroke-width="2"/></g></g>
      <g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.46;.48;.98;1" ${D}/><rect x="182" y="16" width="112" height="38" rx="19" fill="#3CC47C"/><path d="M232 54l6 8l6 -8z" fill="#3CC47C"/><text x="238" y="41" text-anchor="middle" class="tat w b">${L('Lliure!', '¡Libre!')}</text></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.49;.51;.97;1" ${D}/><rect x="172" y="16" width="132" height="38" rx="19" fill="#EF5A5A"/><path d="M232 54l6 8l6 -8z" fill="#EF5A5A"/><text x="238" y="41" text-anchor="middle" class="tat w b">${L('Obstacle!', '¡Obstáculo!')}</text></g>
      <text x="160" y="200" text-anchor="middle" class="tat s">${L('Només mira la casella del davant', 'Solo mira la casilla de delante')}</text>`);
  },
  // el bloc «Si…»: una pregunta; si la resposta és sí fa els blocs de dins, si és no se'ls salta
  u4if() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const yes = 'M100 58 L182 58 L182 88 L250 88 L250 130 L250 168 L166 168', no = 'M100 58 L100 168 L100 168';
    return tSvg(222, `<path d="M40 58 L100 20 L160 58 L100 96 Z" fill="#F2B21B" stroke="#C98A0B" stroke-width="2.5" stroke-linejoin="round" ${tA(.2)}/>
      <text x="100" y="64" text-anchor="middle" class="tat b" ${tA(.2)}>${L('Obstacle?', '¿Obstáculo?')}</text>
      <g ${tA(.7, 'ta-fade')}><path d="M160 58H180V70" stroke="#1FA463" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M174 66l6 8l6 -8" fill="none" stroke="#1FA463" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><text x="172" y="48" text-anchor="middle" class="tat s">${L('sí', 'sí')}</text></g>
      <g ${tA(.9)}><rect x="186" y="70" width="128" height="38" rx="11" fill="#3D7BF4"/><text x="250" y="95" text-anchor="middle" class="tat w s">${L('Gira a la dreta', 'Gira a la derecha')}</text></g>
      <g ${tA(1.2, 'ta-fade')}><path d="M250 108V168H170" stroke="#9FB2E6" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M176 162l-8 6l8 6" fill="none" stroke="#9FB2E6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(1.4, 'ta-fade')}><path d="M100 96V144" stroke="#EF5A5A" stroke-width="4" stroke-linecap="round"/><path d="M94 138l6 8l6 -8" fill="none" stroke="#EF5A5A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><text x="84" y="126" text-anchor="middle" class="tat s">no</text></g>
      <g ${tA(1.6)}><rect x="40" y="150" width="124" height="38" rx="11" fill="#3D7BF4"/><text x="102" y="175" text-anchor="middle" class="tat w s">${L('Endavant', 'Adelante')}</text></g>
      <circle r="8" fill="#fff" stroke="#14204A" stroke-width="3" opacity="0"><animateMotion path="${yes}" keyPoints="0;0;1;1" keyTimes="0;.32;.5;1" calcMode="linear" ${D}/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.3;.32;.5;.52;1" ${D}/></circle>
      <circle r="8" fill="#fff" stroke="#14204A" stroke-width="3" opacity="0"><animateMotion path="${no}" keyPoints="0;0;1;1" keyTimes="0;.62;.8;1" calcMode="linear" ${D}/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.6;.62;.8;.82;1" ${D}/></circle>
      <text x="160" y="212" text-anchor="middle" class="tat s" opacity="0">${L('Hi ha una roca: sí → gira i avança', 'Hay una roca: sí → gira y avanza')}<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.3;.33;.55;.58;1" ${D}/></text>
      <text x="160" y="212" text-anchor="middle" class="tat s" opacity="0">${L('No hi ha res: no → només avança', 'No hay nada: no → solo avanza')}<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.6;.63;.88;.92;1" ${D}/></text>`);
  },
  // el sensor de color mira el terra on és en Bit
  u4color() {
    const D = 'dur="6s" repeatCount="indefinite"', cs = ['r', 'g', 'y', 'u'], xs = [52, 124, 196, 268];
    const names = [L('vermell!', '¡rojo!'), L('verd!', '¡verde!'), L('groc!', '¡amarillo!'), L('blau!', '¡azul!')], ink = ['#C9302A', '#1E8A4E', '#B07A00', '#1F5FD0'];
    const kt = '0;.2;.25;.45;.5;.7;.75;1';
    const shown = i => { const v = [0, 0, 0, 0, 0, 0, 0, 0]; const on = [[0, 1], [2, 3], [4, 5], [6, 7]][i]; on.forEach(k => v[k] = 1); return v.join(';'); };
    return tSvg(214, `<text x="160" y="28" text-anchor="middle" class="tat b">${L('Mira el terra que trepitja', 'Mira el suelo que pisa')}</text>
      ${cs.map((c, i) => `<rect x="${xs[i] - 32}" y="112" width="64" height="62" rx="14" fill="${BIT_COL[c]}" stroke="#14204A" stroke-opacity=".15" stroke-width="2"/><rect x="${xs[i] - 24}" y="118" width="48" height="9" rx="4.5" fill="#fff" opacity=".35"/>
        <rect x="${xs[i] - 36}" y="108" width="72" height="70" rx="17" fill="none" stroke="#14204A" stroke-width="3" opacity="0"><animate attributeName="opacity" values="${shown(i)}" keyTimes="${kt}" calcMode="discrete" ${D}/></rect>`).join('')}
      <g><animateTransform attributeName="transform" type="translate" values="${xs.map(x => `${x} 0;${x} 0`).join(';')}" keyTimes="${kt}" ${D}/>
        <path d="M-10 150 L10 150 L18 166 L-18 166 Z" fill="#fff" opacity=".55"/>${tBitMini(0, 156, 1, .95)}
        ${names.map((n, i) => `<g opacity="0"><animate attributeName="opacity" values="${shown(i)}" keyTimes="${kt}" calcMode="discrete" ${D}/><rect x="-52" y="40" width="104" height="34" rx="17" fill="#fff" stroke="${ink[i]}" stroke-width="3"/><text y="63" text-anchor="middle" class="tat b" fill="${ink[i]}" style="fill:${ink[i]}">${n}</text></g>`).join('')}</g>
      <text x="160" y="204" text-anchor="middle" class="tat s">${L('sensor de color', 'sensor de color')}</text>`);
  },
  // si… si no…: si plou, paraigua; si no, gorra (diagrama de decisió)
  u4else() {
    const D = 'dur="6s" repeatCount="indefinite"', A = 'keyTimes="0;.04;.46;.5;1"', B = 'keyTimes="0;.5;.54;.96;1"';
    const umb = `<path d="M24 150Q60 106 96 150Q87 143 78 150Q69 143 60 150Q51 143 42 150Q33 143 24 150Z" fill="#E5489A" stroke="#A3236A" stroke-width="2.5" stroke-linejoin="round"/><path d="M60 150V174q0 8 -8 8" stroke="#14204A" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
    const cap = `<path d="M236 160Q236 128 262 128Q288 128 288 160Z" fill="#3D7BF4" stroke="#1D4FB8" stroke-width="2.5"/><path d="M284 158h18q6 0 6 5h-28z" fill="#1D4FB8"/><circle cx="262" cy="127" r="4" fill="#1D4FB8"/>`;
    const card = (x, art, lab, k) => `<g><rect x="${x}" y="110" width="100" height="84" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g opacity=".25"><animate attributeName="opacity" values=".25;1;1;.25;.25" ${k} ${D}/>${art}</g><text x="${x + 50}" y="212" text-anchor="middle" class="tat s">${lab}</text></g>`;
    return tSvg(222, `<path d="M106 50L160 14L214 50L160 86Z" fill="#F2B21B" stroke="#C98A0B" stroke-width="2.5" stroke-linejoin="round"/><text x="160" y="56" text-anchor="middle" class="tat b">${L('Plou?', '¿Llueve?')}</text>
      <path d="M106 50H60V104" stroke="#C9D6FB" stroke-width="4" fill="none" stroke-linecap="round"><animate attributeName="stroke" values="#C9D6FB;#1FA463;#1FA463;#C9D6FB;#C9D6FB" ${A} ${D}/></path>
      <path d="M214 50H260V104" stroke="#C9D6FB" stroke-width="4" fill="none" stroke-linecap="round"><animate attributeName="stroke" values="#C9D6FB;#C9D6FB;#EF5A5A;#EF5A5A;#C9D6FB" ${B} ${D}/></path>
      <text x="80" y="40" text-anchor="middle" class="tat s">${L('sí', 'sí')}</text><text x="240" y="40" text-anchor="middle" class="tat s">${L('si no', 'si no')}</text>
      ${card(10, umb, L('paraigua', 'paraguas'), A)}${card(210, cap, L('gorra', 'gorra'), B)}
      <g opacity="0"><animate attributeName="opacity" values="0;1;1;0;0" ${A} ${D}/><g transform="translate(160 132)"><ellipse rx="26" ry="13" fill="#B9C4DA"/><ellipse cx="-14" cy="-6" rx="13" ry="11" fill="#B9C4DA"/><ellipse cx="10" cy="-10" rx="15" ry="13" fill="#B9C4DA"/>
        ${[-14, 0, 14].map((x, i) => `<path d="M${x} 18v8" stroke="#3D8BFF" stroke-width="3.5" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" values="0 -4;0 14" dur="${(.8 + i * .15).toFixed(2)}s" repeatCount="indefinite"/></path>`).join('')}</g></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" ${B} ${D}/><g transform="translate(160 138)"><g><animateTransform attributeName="transform" type="rotate" values="0;45" dur="2s" repeatCount="indefinite"/>${[...Array(8).keys()].map(i => `<rect x="-2" y="-30" width="4" height="9" rx="2" fill="#FFC531" transform="rotate(${i * 45})"/>`).join('')}</g><circle r="16" fill="#FFD54A" stroke="#F5A623" stroke-width="2"/></g></g>`);
  },
  // les condicions dels costats: l'esquerra i la dreta són les d'en Bit
  u4sides() {
    const D = 'dur="6s" repeatCount="indefinite"', A = 'values="1;1;0;0;1" keyTimes="0;.48;.5;.98;1" calcMode="discrete"', B = 'values="0;0;1;1;0" keyTimes="0;.48;.5;.98;1" calcMode="discrete"';
    const tile = (x, y) => `<rect x="${x}" y="${y}" width="68" height="64" rx="14" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="2"/>`;
    const pill = (x, t, col) => `<rect x="${x - 50}" y="54" width="100" height="30" rx="15" fill="${col}"/><text x="${x}" y="74" text-anchor="middle" class="tat w s">${t}</text>`;
    const beam = `<path d="M128 132H88M192 132H232" stroke="#F2B21B" stroke-width="3.5" stroke-dasharray="6 6" class="ta-dash"/><path d="M94 126l-8 6l8 6M226 126l8 6l-8 6" fill="none" stroke="#F2B21B" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`;
    return tSvg(214, `<text x="160" y="26" text-anchor="middle" class="tat b">${L("L'esquerra i la dreta d'en Bit", 'La izquierda y la derecha de Bit')}</text>
      ${tile(126, 100)}${tile(54, 100)}${tile(198, 100)}${beam}
      <g><animate attributeName="opacity" ${A} ${D}/>${tBitMini(160, 156, 0, 1.05)}${pill(88, L('esquerra', 'izquierda'), '#8B5CF6')}${pill(232, L('dreta', 'derecha'), '#F08A24')}
        <path d="M160 92v-12" stroke="#14204A" stroke-width="3" stroke-linecap="round"/><path d="M154 86l6 -8l6 8" fill="none" stroke="#14204A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="160" y="198" text-anchor="middle" class="tat s">${L('En Bit mira amunt', 'Bit mira arriba')}</text></g>
      <g opacity="0"><animate attributeName="opacity" ${B} ${D}/>${tBitMini(160, 156, 2, 1.05)}${pill(88, L('dreta', 'derecha'), '#F08A24')}${pill(232, L('esquerra', 'izquierda'), '#8B5CF6')}
        <path d="M160 168v12" stroke="#14204A" stroke-width="3" stroke-linecap="round"/><path d="M154 174l6 8l6 -8" fill="none" stroke="#14204A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="160" y="198" text-anchor="middle" class="tat s">${L('En Bit mira avall: tot canvia!', 'Bit mira abajo: ¡todo cambia!')}</text></g>`);
  },
  // estratègia del laberint: la mà dreta sempre a la paret
  u4maze() {
    const M = ['>##.#', '..#.#', '#.#.#', '#.#.#', '####F'], c = 32, ox = 14, oy = 20, P = (x, y) => `${ox + x * c + c / 2} ${oy + y * c + c / 2}`;
    const route = `M${P(0, 0)} L${P(2, 0)} L${P(2, 4)} L${P(0, 4)} L${P(0, 2)} L${P(0, 4)} L${P(4, 4)}`;
    const cells = M.map((r, y) => [...r].map((ch, x) => { const X = ox + x * c, Y = oy + y * c;
      return ch === '.' ? `<rect x="${X + 1}" y="${Y + 1}" width="${c - 2}" height="${c - 2}" rx="8" fill="url(#bwLeaf)"/><circle cx="${X + 11}" cy="${Y + 10}" r="4" fill="#C9F2A6" opacity=".5"/>` : `<rect x="${X + 1}" y="${Y + 1}" width="${c - 2}" height="${c - 2}" rx="8" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.2"/>`; }).join('')).join('');
    const D = 'dur="7s" repeatCount="indefinite"';
    return tSvg(214, `<rect x="${ox - 6}" y="${oy - 6}" width="${5 * c + 12}" height="${5 * c + 12}" rx="14" fill="#3E8E3A"/>${cells}
      <g transform="translate(${P(4, 4)})"><path d="M-6 10V-12" stroke="#7A4A1E" stroke-width="3" stroke-linecap="round"/><path d="M-5 -12h16l-5 6l5 6h-16z" fill="#EF5A5A"/></g>
      <path d="${route}" fill="none" stroke="#3D7BF4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1" pathLength="1" stroke-dashoffset="1" opacity=".55"><animate attributeName="stroke-dashoffset" values="1;0;0" keyTimes="0;.85;1" ${D}/></path>
      <g><animateMotion path="${route}" rotate="auto" keyPoints="0;1;1" keyTimes="0;.85;1" calcMode="linear" ${D}/><circle r="10" fill="#fff" stroke="#14204A" stroke-width="3"/><path d="M-3 -5l7 5l-7 5" fill="none" stroke="#3D7BF4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cy="13" r="5" fill="#FFB3C7" stroke="#C2577A" stroke-width="2"/></g>
      <g ${tA(.4, 'ta-in')}><rect x="194" y="40" width="118" height="132" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <g transform="translate(253 82)"><path d="M-14 14v-22q0 -5 5 -5t5 5v-8q0 -5 5 -5t5 5v6q0 -5 5 -5t5 5v8q0 -5 4 -5t4 5v18q0 12 -14 12h-6q-12 0 -18 -14l-6 -10q-2 -5 3 -6q4 -1 7 4z" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2.4" stroke-linejoin="round"/></g>
        <text x="253" y="130" text-anchor="middle" class="tat b">${L('Mà dreta', 'Mano derecha')}</text><text x="253" y="152" text-anchor="middle" class="tat s">${L('a la paret!', '¡en la pared!')}</text></g>`);
  },
  // el mateix programa a totes les illes
  u4isles() {
    const isl = (x, i, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="84" width="92" height="104" rx="16" fill="#E3F4FF" stroke="#BFE0F7" stroke-width="2"/>
      <text x="${x + 46}" y="106" text-anchor="middle" class="tat s">${L('Illa', 'Isla')} ${i + 1}</text>
      <path d="M${x + 12} 152q34 -30 68 0l-6 14q-28 8 -56 0z" fill="#9A6538"/><path d="M${x + 12} 152q34 -30 68 0q-34 10 -68 0z" fill="#7CC456"/>
      ${tBitMini(x + 46, 150, 2, .5)}</g><g ${tA(t + .9)}><circle cx="${x + 82}" cy="90" r="14" fill="#3CC47C" stroke="#fff" stroke-width="3"/><path d="M${x + 75} 90l5 5l9 -10" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
    return tSvg(214, `<g ${tA(.1)}><rect x="66" y="8" width="188" height="44" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
      <rect x="78" y="20" width="20" height="20" rx="5" fill="#1FA463"/><rect x="102" y="20" width="20" height="20" rx="5" fill="#F2B21B"/><rect x="126" y="20" width="20" height="20" rx="5" fill="#3D7BF4"/><text x="200" y="36" text-anchor="middle" class="tat s">${L('un programa', 'un programa')}</text></g>
      ${[58, 160, 262].map((x, i) => `<path d="M160 54L${x} 80" stroke="#C9D6FB" stroke-width="3" ${tA(.5 + i * .9, 'ta-fade')}/>`).join('')}
      ${isl(12, 0, .5)}${isl(114, 1, 1.4)}${isl(216, 2, 2.3)}
      <text x="160" y="206" text-anchor="middle" class="tat s" ${tA(3.6, 'ta-fade')}>${L('El mateix programa, a totes les illes', 'El mismo programa, en todas las islas')}</text>`);
  }
});
