/* Tech Web · unitat 5 «Caixes» · animacions de teoria (tot és una caixa, les quatre capes, el quadre a la paret,
   padding i margin, l'ordre del rellotge, les cantonades rodones, les ombres i l'amplada total) */
Object.assign(TANI, {
  // tot és una caixa: amb «raigs X» es veuen les caixes de cada element de la pàgina
  w5box() {
    const tag = (x, y, t, c, d) => `<g ${tA(d)}><rect x="${x}" y="${y}" width="${t.length * 9 + 14}" height="20" rx="6" fill="${c}"/><text x="${x + 7}" y="${y + 15}" class="tat w s" style="font-family:ui-monospace,Menlo,Consolas,monospace">${t}</text></g>`;
    const box = (x, y, w, h, c, d) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2.5" stroke-dasharray="6 4" ${tA(d, 'ta-in')}/>`;
    return tSvg(214, `<rect x="16" y="6" width="288" height="180" rx="14" fill="#fff" stroke="#C9D6FB" stroke-width="2"/>
      <path d="M16 20 Q16 6 30 6 H290 Q304 6 304 20 V28 H16Z" fill="#E3E8F6"/><circle cx="30" cy="17" r="4" fill="#EF5A5A"/><circle cx="43" cy="17" r="4" fill="#FFC531"/><circle cx="56" cy="17" r="4" fill="#3CC47C"/>
      <rect x="70" y="11" width="150" height="12" rx="6" fill="#fff"/>
      <rect x="34" y="40" width="150" height="16" rx="5" fill="#14204A"/>
      <rect x="34" y="72" width="226" height="7" rx="3.5" fill="#9AA6C6"/><rect x="34" y="84" width="170" height="7" rx="3.5" fill="#9AA6C6"/>
      <g><rect x="34" y="106" width="96" height="58" rx="6" fill="#9FDBFF"/><path d="M34 158 L66 124 L86 144 L100 132 L130 160 V164 H34Z" fill="#7CC456"/><circle cx="114" cy="120" r="8" fill="#FFD54A"/></g>
      <rect x="34" y="172" width="120" height="7" rx="3.5" fill="#9AA6C6"/>
      ${box(26, 34, 270, 28, '#2F5BEA', .4)}${tag(250, 38, 'h1', '#2F5BEA', .6)}
      ${box(26, 66, 270, 31, '#E5489A', 1.1)}${tag(258, 71, 'p', '#E5489A', 1.3)}
      ${box(28, 101, 108, 68, '#F08A24', 1.8)}${tag(142, 106, 'img', '#F08A24', 2)}
      ${box(26, 168, 270, 15, '#8B5CF6', 2.5)}
      <text x="160" y="207" text-anchor="middle" class="tat b" ${tA(3, 'ta-fade')}>${L('Cada element és una caixa!', '¡Cada elemento es una caja!')}</text>`);
  },
  // les quatre capes d'una caixa, de dins cap a fora: contingut, padding, border i margin
  w5layers() {
    return tSvg(214, `<g ${tA(2.3, 'ta-in')}><rect x="14" y="8" width="292" height="172" rx="12" fill="#FFF4E6" stroke="#F08A24" stroke-width="2.5" stroke-dasharray="7 5"/>
        <text x="160" y="26" text-anchor="middle" class="tat s" style="fill:#B4501A">margin</text></g>
      <g ${tA(1.6, 'ta-in')}><rect x="38" y="32" width="244" height="124" rx="10" fill="#14204A"/>
        <text x="160" y="47" text-anchor="middle" class="tat w s">border</text></g>
      <g ${tA(.9, 'ta-in')}><rect x="54" y="50" width="212" height="90" rx="4" fill="#C9F0D8"/>
        <text x="160" y="67" text-anchor="middle" class="tat s" style="fill:#147A47">padding</text></g>
      <g ${tA(.2, 'ta-pop')}><rect x="78" y="74" width="164" height="50" rx="4" fill="#9FD0FF" stroke="#2F5BEA" stroke-width="2"/>
        <text x="160" y="104" text-anchor="middle" class="tat b">${L('contingut', 'contenido')}</text></g>
      <text x="160" y="204" text-anchor="middle" class="tat s" ${tA(3, 'ta-fade')}>${L('De dins cap a fora', 'De dentro hacia fuera')}</text>`);
  },
  // com un quadre penjat a la paret: la pintura, el paspartú, el marc i l'espai de la paret
  w5frame() {
    const row = (y, c, b, s, d, extra = '') => `<g ${tA(d, 'ta-in')}><rect x="178" y="${y - 20}" width="138" height="40" rx="10" fill="#fff" stroke="${c}" stroke-width="2"/><rect x="186" y="${y - 8}" width="16" height="16" rx="4" fill="${c}" ${extra}/><text x="210" y="${y - 2}" class="tat b" style="font-size:14px">${b}</text><text x="210" y="${y + 13}" class="tat s" style="font-size:13px">${s}</text></g>`;
    return tSvg(214, `<rect x="0" y="0" width="172" height="214" rx="16" fill="#F6EAD7"/>
      <rect x="8" y="14" width="156" height="186" rx="6" fill="none" stroke="#F08A24" stroke-width="2.5" stroke-dasharray="7 5" ${tA(3, 'ta-fade')}/>
      <rect x="24" y="30" width="124" height="154" rx="4" fill="#9A6538" stroke="#6B3F20" stroke-width="2" ${tA(2.2, 'ta-in')}/>
      <rect x="36" y="42" width="100" height="130" fill="#FFFDF6" ${tA(1.4, 'ta-in')}/>
      <g ${tA(.4, 'ta-pop')} transform="translate(-4 0)"><rect x="56" y="58" width="70" height="98" fill="#9FDBFF"/><path d="M56 156 V128 L76 108 L92 124 L104 114 L126 136 V156Z" fill="#7CC456"/><circle cx="108" cy="78" r="9" fill="#FFD54A"/></g>
      ${row(32, '#2F5BEA', L('contingut', 'contenido'), L('la pintura', 'la pintura'), .6)}
      ${row(82, '#C9B48A', 'padding', L('el paspartú', 'el paspartú'), 1.6)}
      ${row(132, '#9A6538', 'border', L('el marc', 'el marco'), 2.4)}
      ${row(182, '#F08A24', 'margin', L('aire a la paret', 'aire en la pared'), 3.2)}`);
  },
  // padding (espai de dins: la caixa creix i el color de fons hi arriba) i margin (espai de fora: separa les caixes)
  w5pad() {
    const D = 'dur="5.5s" repeatCount="indefinite"', K = 'keyTimes="0;.12;.45;.9;1"';
    const lines = (x, y) => `<rect x="${x}" y="${y}" width="64" height="7" rx="3.5" fill="#6B5A1E"/><rect x="${x}" y="${y + 14}" width="48" height="7" rx="3.5" fill="#6B5A1E"/><rect x="${x}" y="${y + 28}" width="58" height="7" rx="3.5" fill="#6B5A1E"/>`;
    return tSvg(220, `<rect x="6" y="6" width="150" height="208" rx="16" fill="#EEF7F1"/><rect x="164" y="6" width="150" height="208" rx="16" fill="#FFF4E6"/>
      <text x="81" y="30" text-anchor="middle" class="tat b" style="font-family:ui-monospace,Menlo,Consolas,monospace">padding</text>
      <text x="239" y="30" text-anchor="middle" class="tat b" style="font-family:ui-monospace,Menlo,Consolas,monospace">margin</text>
      <rect x="44" y="84" width="74" height="54" rx="6" fill="#FFE36E" stroke="#C9A21B" stroke-width="2">
        <animate attributeName="x" values="44;44;20;20;44" ${K} ${D}/><animate attributeName="y" values="84;84;60;60;84" ${K} ${D}/>
        <animate attributeName="width" values="74;74;122;122;74" ${K} ${D}/><animate attributeName="height" values="54;54;102;102;54" ${K} ${D}/></rect>
      ${lines(49, 90)}
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.48;.88;.92" ${D}/>
        <path d="M81 64 V82 M81 156 V140 M24 111 H42 M138 111 H120" stroke="#1FA463" stroke-width="3.5" stroke-linecap="round"/></g>
      <text x="81" y="186" text-anchor="middle" class="tat s">${L('espai de dins', 'espacio de dentro')}</text>
      <text x="81" y="204" text-anchor="middle" class="tat s" style="fill:#147A47">${L('amb el color de fons', 'con el color de fondo')}</text>
      <rect x="186" y="42" width="106" height="50" rx="6" fill="#9FD0FF" stroke="#2F5BEA" stroke-width="2"/><text x="239" y="72" text-anchor="middle" class="tat s">${L('caixa 1', 'caja 1')}</text>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 28;0 28;0 0" ${K} ${D}/>
        <rect x="186" y="92" width="106" height="50" rx="6" fill="#FFB8D2" stroke="#E5489A" stroke-width="2"/><text x="239" y="122" text-anchor="middle" class="tat s">${L('caixa 2', 'caja 2')}</text></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.48;.88;.92" ${D}/>
        <path d="M239 96 V118" stroke="#F08A24" stroke-width="3.5" stroke-linecap="round"/><path d="M233 100 l6 -6 l6 6 M233 114 l6 6 l6 -6" fill="none" stroke="#F08A24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
      <text x="239" y="186" text-anchor="middle" class="tat s">${L('espai de fora', 'espacio de fuera')}</text>
      <text x="239" y="204" text-anchor="middle" class="tat s" style="fill:#B4501A">${L('transparent', 'transparente')}</text>`);
  },
  // quatre valors, en l'ordre de les agulles del rellotge: dalt, dreta, baix i esquerra
  w5clock() {
    const D = 'dur="5.5s" repeatCount="indefinite"', mono = 'style="font-family:ui-monospace,Menlo,Consolas,monospace"';
    const C = ['#2F5BEA', '#E5489A', '#1FA463', '#F08A24'], T = [.01, .25, .5, .75];
    // tot amb SMIL (el mateix rellotge): l'agulla, el costat i el valor s'encenen alhora
    const on = i => `opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;${T[i]};${T[i] + .02};.95;1" ${D}/`;
    const side = ['M82 72 H162', 'M162 72 V152', 'M162 152 H82', 'M82 152 V72'];
    const lab = [[122, 58, L('1 dalt', '1 arriba'), 0], [176, 112, L('2 dreta', '2 derecha'), 90], [122, 176, L('3 baix', '3 abajo'), 0], [68, 112, L('4 esquerra', '4 izquierda'), -90]];
    return tSvg(214, `<rect x="82" y="72" width="80" height="80" rx="4" fill="#EEF2FD" stroke="#C9D6FB" stroke-width="2"/>
      ${side.map((p, i) => `<path d="${p}" stroke="${C[i]}" stroke-width="7" stroke-linecap="round" ${on(i)}></path>`).join('')}
      ${lab.map(([x, y, t, r], i) => `<g transform="rotate(${r} ${x} ${y})" ${on(i)}><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat s" style="fill:${C[i]};font-weight:900">${t}</text></g>`).join('')}
      <g><animateTransform attributeName="transform" type="rotate" values="0 122 112;90 122 112;180 122 112;270 122 112" keyTimes="0;.25;.5;.75" calcMode="discrete" ${D}/>
        <path d="M122 112 V84" stroke="#14204A" stroke-width="5" stroke-linecap="round"/><path d="M114 92 L122 82 L130 92" fill="none" stroke="#14204A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <circle cx="122" cy="112" r="6" fill="#14204A"/>
      <rect x="226" y="20" width="90" height="160" rx="14" fill="#14204A"/>
      <text x="236" y="46" class="tat w" ${mono}>margin:</text>
      ${['10px', '20px', '30px', '40px'].map((v, i) => `<g ${on(i)}><circle cx="244" cy="${72 + i * 28}" r="9" fill="${C[i]}"/><text x="244" y="${77 + i * 28}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="258" y="${77 + i * 28}" class="tat w" ${mono}>${v}</text></g>`).join('')}
      <text x="160" y="207" text-anchor="middle" class="tat s">${L('Com les agulles del rellotge', 'Como las agujas del reloj')}</text>`);
  },
  // border-radius: de cantonades rectes a cantonades rodones i, amb 50 %, una caixa rodona
  w5radius() {
    const D = 'dur="5.5s" repeatCount="indefinite"', mono = 'style="font-family:ui-monospace,Menlo,Consolas,monospace"';
    const KT = 'keyTimes="0;.06;.3;.36;.6;.66;.94;1"';
    const st = (v, t, a) => `<g opacity="${a[0]}"><animate attributeName="opacity" values="${a.join(';')}" keyTimes="0;.3;.33;.63;.66;.97;1" ${D}/><text x="236" y="112" text-anchor="middle" class="tat b" style="font-size:26px;font-family:ui-monospace,Menlo,Consolas,monospace;fill:#E5489A">${v}</text><text x="236" y="146" text-anchor="middle" class="tat s">${t}</text></g>`;
    return tSvg(200, `<rect x="30" y="34" width="132" height="132" rx="0" fill="#FFC531" stroke="#B9860F" stroke-width="3">
        <animate attributeName="rx" values="0;0;0;22;22;66;66;0" ${KT} ${D}/></rect>
      <circle cx="96" cy="100" r="22" fill="#fff" opacity=".55"/><path d="M84 100 l8 8 l16 -18" fill="none" stroke="#B9860F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>
      <rect x="176" y="44" width="122" height="126" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
      <text x="236" y="72" text-anchor="middle" class="tat s" ${mono}>border-radius:</text>
      ${st('0', L('cantonades rectes', 'esquinas rectas'), [1, 1, 0, 0, 0, 0, 1])}
      ${st('20px', L('arrodonides', 'redondeadas'), [0, 0, 1, 1, 0, 0, 0])}
      ${st('50%', L('rodona!', '¡redonda!'), [0, 0, 0, 0, 1, 1, 0])}
      <text x="160" y="192" text-anchor="middle" class="tat s">${L('Com més gran, més rodona', 'Cuanto más grande, más redonda')}</text>`);
  },
  // box-shadow: l'ombra es mou a la dreta i avall i es difumina
  w5shadow() {
    const D = 'dur="5.5s" repeatCount="indefinite"', mono = 'style="font-family:ui-monospace,Menlo,Consolas,monospace"', K = 'keyTimes="0;.1;.5;.9;1"';
    const rows = [['6px', L('→ a la dreta', '→ a la derecha')], ['8px', L('↓ avall', '↓ abajo')], ['12px', L('difuminat', 'difuminado')], ['gray', L('el color', 'el color')]];
    return tSvg(214, `<defs><filter id="w5blur" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="0"><animate attributeName="stdDeviation" values="0;0;6;6;0" ${K} ${D}/></feGaussianBlur></filter></defs>
      <rect x="6" y="6" width="176" height="202" rx="16" fill="#EEF2FD"/>
      <g transform="translate(26 30)"><circle r="12" fill="#FFD54A"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<path d="M0 -17 V-22" stroke="#F5A623" stroke-width="3" stroke-linecap="round" transform="rotate(${i * 45})"/>`).join('')}</g>
      <rect x="44" y="60" width="104" height="100" rx="14" fill="#14204A" opacity=".35" filter="url(#w5blur)">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 0;9 12;9 12;0 0" ${K} ${D}/></rect>
      <rect x="44" y="60" width="104" height="100" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
      <rect x="58" y="74" width="76" height="36" rx="8" fill="#9FDBFF"/><rect x="58" y="120" width="60" height="8" rx="4" fill="#14204A"/><rect x="58" y="134" width="44" height="7" rx="3.5" fill="#9AA6C6"/>
      <rect x="190" y="6" width="124" height="202" rx="16" fill="#14204A"/>
      <text x="202" y="32" class="tat w s" ${mono}>box-shadow:</text>
      ${rows.map(([v, t], i) => `<g ${tA(.5 + i * .7)}><text x="202" y="${66 + i * 40}" class="tat" style="fill:#7DE3A6;font-family:ui-monospace,Menlo,Consolas,monospace">${v}</text><text x="202" y="${84 + i * 40}" class="tat w s">${t}</text></g>`).join('')}`);
  },
  // l'amplada total: width + padding + border (a cada costat)
  w5total() {
    const seg = [[25, 10, '#14204A', '8'], [35, 25, '#C9F0D8', '20'], [60, 200, '#9FD0FF', '160'], [260, 25, '#C9F0D8', '20'], [285, 10, '#14204A', '8']];
    return tSvg(196, `<text x="160" y="22" text-anchor="middle" class="tat b">${L('Quant ocupa de debò?', '¿Cuánto ocupa de verdad?')}</text>
      ${seg.map(([x, w, c], i) => `<rect x="${x}" y="36" width="${w}" height="74" fill="${c}" ${tA(.2 + Math.abs(2 - i) * .4, 'ta-in')}/>`).join('')}
      <text x="160" y="78" text-anchor="middle" class="tat" style="font-family:ui-monospace,Menlo,Consolas,monospace">width: 160px</text>
      ${seg.map(([x, w, c, n], i) => `<g ${tA(1.4 + i * .25)}><path d="M${x + 1} 120 V126 H${x + w - 1} V120" fill="none" stroke="#5A6BA0" stroke-width="2"/><text x="${x + w / 2}" y="142" text-anchor="middle" class="tat s">${n}</text></g>`).join('')}
      <g ${tA(2.9, 'ta-in')}><path d="M25 152 V158 H295 V152" fill="none" stroke="#E5489A" stroke-width="3"/>
        <text x="160" y="184" text-anchor="middle" class="tat b" style="fill:#C2306A">8 + 20 + 160 + 20 + 8 = 216px</text></g>`);
  }
});
