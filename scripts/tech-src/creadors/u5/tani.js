/* Tech Creadors · unitat 5 «Condicions» · animacions de teoria (si toca…, si no, colors que avisen, i / o / no) */
Object.assign(TANI, {
  // una condició és una pregunta de sí o no: «Toca la cistella?» canvia de NO a SÍ quan la poma hi arriba
  g5cond() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const art = (k, x, y, w) => typeof STG_ART !== 'undefined' ? STG_ART[k].svg(0).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `) : '';
    return tSvg(200, `<rect x="8" y="8" width="128" height="184" rx="18" fill="#E9F8E4" stroke="#BFE6B0" stroke-width="2"/>
      <path d="M8 160 Q72 148 136 160 V174 Q136 192 118 192 H26 Q8 192 8 174Z" fill="#8FD36C"/>
      <g transform="translate(40 34)"><rect x="-4" y="6" width="8" height="26" fill="#8A5A33"/><circle r="20" fill="#4FAE45"/><circle cx="-12" cy="8" r="12" fill="#62C152"/><circle cx="7" cy="-4" r="5" fill="#EF5A5A"/></g>
      ${art('cistella', 80, 156, 82)}
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 98;0 98;0 0" keyTimes="0;.12;.52;.96;1" ${D}/>${art('poma', 80, 44, 38)}</g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.52;.56;.7;1" ${D}/>${[[-26, -10], [24, -14], [-18, -30], [20, -32]].map(([dx, dy]) => `<path d="M${80 + dx} ${132 + dy} l4 -6 l4 6 l-4 6z" fill="#FFC531"/>`).join('')}</g>
      <g ${tA(.2, 'ta-in')}><rect x="150" y="16" width="160" height="72" rx="16" fill="#FFF7E0" stroke="#F2B21B" stroke-width="3"/>
        <text x="230" y="46" text-anchor="middle" class="tat b">${L('Toca la', '¿Toca la')}</text><text x="230" y="72" text-anchor="middle" class="tat b">${L('cistella?', 'cesta?')}</text></g>
      <path d="M230 92 V106" stroke="#F2B21B" stroke-width="4" stroke-linecap="round" ${tA(.5, 'ta-fade')}/>
      <g opacity="1"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.53;.55;.97;1" ${D}/><rect x="176" y="110" width="108" height="46" rx="23" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="3"/>
        <path d="M200 124 l16 16 M216 124 l-16 16" stroke="#EF5A5A" stroke-width="4" stroke-linecap="round"/><text x="250" y="141" text-anchor="middle" class="tat b" style="fill:#C0392B">NO</text></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.53;.55;.97;1" ${D}/><rect x="176" y="110" width="108" height="46" rx="23" fill="#E7F7EE" stroke="#1FA463" stroke-width="3"/>
        <path d="M198 133 l7 7 l13 -15" fill="none" stroke="#1FA463" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><text x="250" y="141" text-anchor="middle" class="tat b" style="fill:#147A47">${L('SÍ', 'SÍ')}</text></g>
      <text x="230" y="184" text-anchor="middle" class="tat s" ${tA(.8, 'ta-fade')}>${L('Només sí o no!', '¡Solo sí o no!')}</text>`);
  },
  // el bloc «si»: si la resposta és no, se salta els blocs de dins; si és sí, els fa
  g5if() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const no = 'M22 37 L22 185', yes = 'M22 37 L62 37 L62 77 L62 113 L22 150 L22 185';
    const lit = (y, from, to) => `<rect x="60" y="${y}" width="170" height="30" rx="9" fill="none" stroke="#fff" stroke-width="4" opacity="0"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;${from};${(from + to) / 2};${to};1" ${D}/></rect>`;
    return tSvg(232, `<g ${tA(.1, 'ta-in')}>
        <path d="M40 20 H280 Q288 20 288 28 V46 Q288 54 280 54 H58 V136 H280 Q288 136 288 144 V150 Q288 158 280 158 H48 Q40 158 40 150 V28 Q40 20 48 20Z" fill="#F2B21B"/>
        <text x="54" y="43" class="tat b" style="fill:#3A2600">${L('si toca la cistella', 'si toca la cesta')}</text>
        <rect x="60" y="62" width="170" height="30" rx="9" fill="#E5489A"/><text x="74" y="83" class="tat w s">${L("amaga't", 'escóndete')}</text>
        <rect x="60" y="98" width="170" height="30" rx="9" fill="#14A3B8"/><text x="74" y="119" class="tat w s">${L('fes el so pop', 'haz el sonido pop')}</text>
        <rect x="40" y="168" width="200" height="30" rx="9" fill="#3D7BF4"/><text x="54" y="189" class="tat w s">${L('canvia y en -5', 'cambia y en -5')}</text></g>
      ${lit(62, .55, .66)}${lit(98, .64, .75)}
      <circle r="9" fill="#fff" stroke="#14204A" stroke-width="3" opacity="0"><animateMotion path="${no}" keyPoints="0;0;1;1" keyTimes="0;.1;.36;1" calcMode="linear" ${D}/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.08;.1;.36;.38;1" ${D}/></circle>
      <circle r="9" fill="#fff" stroke="#14204A" stroke-width="3" opacity="0"><animateMotion path="${yes}" keyPoints="0;0;1;1" keyTimes="0;.5;.88;1" calcMode="linear" ${D}/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.48;.5;.88;.9;1" ${D}/></circle>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.08;.1;.4;.42;1" ${D}/><circle cx="300" cy="37" r="14" fill="#EF5A5A"/><path d="M294 31 l12 12 M306 31 l-12 12" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>
        <text x="160" y="222" text-anchor="middle" class="tat s">${L('No: se salta els blocs de dins', 'No: se salta los bloques de dentro')}</text></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.48;.5;.92;.94;1" ${D}/><circle cx="300" cy="37" r="14" fill="#1FA463"/><path d="M293 37 l5 5 l9 -10" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="160" y="222" text-anchor="middle" class="tat s">${L('Sí: fa els blocs de dins', 'Sí: hace los bloques de dentro')}</text></g>`);
  },
  // el «si» dins del «per sempre» pregunta tota l'estona; fora del bucle només pregunta una vegada
  g5loop() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const art = (k, x, y, w) => typeof STG_ART !== 'undefined' ? STG_ART[k].svg(0).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `) : '';
    const blk = (x, y, w, txt, col) => `<rect x="${x}" y="${y}" width="${w}" height="24" rx="7" fill="${col}"/><text x="${x + 8}" y="${y + 17}" class="tat w s" style="font-size:13px">${txt}</text>`;
    const si = (x, y, w) => `<rect x="${x}" y="${y}" width="${w}" height="24" rx="7" fill="#F2B21B"/><text x="${x + 8}" y="${y + 17}" class="tat s" style="font-size:13px;fill:#3A2600">${L('si toca', 'si toca')}</text>${art('cistella', x + 84, y + 12, 30)}`;
    const loop = (x, y, h) => `<path d="M${x + 6} ${y} H${x + 126} Q${x + 132} ${y} ${x + 132} ${y + 6} V${y + 24} H${x + 12} V${y + h} H${x + 132} V${y + h + 4} Q${x + 132} ${y + h + 10} ${x + 126} ${y + h + 10} H${x + 6} Q${x} ${y + h + 10} ${x} ${y + h + 4} V${y + 6} Q${x} ${y} ${x + 6} ${y}Z" fill="#1FA463"/><text x="${x + 8}" y="${y + 17}" class="tat w s" style="font-size:13px">${L('per sempre', 'por siempre')}</text>`;
    const ask = (cx, vals, keys) => `<g opacity="0"><animate attributeName="opacity" values="${vals}" keyTimes="${keys}" calcMode="discrete" ${D}/><rect x="${cx - 32}" y="130" width="64" height="24" rx="12" fill="#FFF7E0" stroke="#F2B21B" stroke-width="2"/><text x="${cx}" y="147" text-anchor="middle" class="tat s" style="font-size:13px">${L('Toco?', '¿Toco?')}</text></g>`;
    return tSvg(232, `<rect x="6" y="6" width="150" height="220" rx="14" fill="#FFF5F5" stroke="#F5C2C2" stroke-width="2"/><rect x="164" y="6" width="150" height="220" rx="14" fill="#F0FBF4" stroke="#B8E6C9" stroke-width="2"/>
      <text x="81" y="26" text-anchor="middle" class="tat b" style="fill:#C0392B">✗ ${L('Fora', 'Fuera')}</text><text x="239" y="26" text-anchor="middle" class="tat b" style="fill:#147A47">✓ ${L('Dins', 'Dentro')}</text>
      <g ${tA(.2, 'ta-in')}>${si(14, 36, 132)}${loop(14, 66, 52)}${blk(26, 92, 112, L('baixa', 'baja'), '#3D7BF4')}</g>
      <g ${tA(.4, 'ta-in')}>${loop(172, 36, 78)}${blk(184, 62, 112, L('baixa', 'baja'), '#3D7BF4')}${si(184, 88, 112)}</g>
      ${ask(81, '1;0;0', '0;.1;1')}${ask(239, '1;0;1;0;1;0;1;0;1;0;1;0', '0;.08;.16;.25;.33;.41;.5;.58;.66;.75;.83;.91')}
      <defs><clipPath id="g5lpL"><rect x="6" y="156" width="150" height="70"/></clipPath><clipPath id="g5lpR"><rect x="164" y="156" width="150" height="70"/></clipPath></defs>
      ${art('cistella', 81, 206, 56)}${art('cistella', 239, 206, 56)}
      <g clip-path="url(#g5lpL)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 80;0 80" keyTimes="0;.75;1" ${D}/>${art('poma', 81, 168, 26)}</g></g>
      <g clip-path="url(#g5lpR)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 26;0 26" keyTimes="0;.3;1" ${D}/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.3;.32;1" ${D}/>${art('poma', 239, 168, 26)}</g></g>
      <text x="239" y="176" text-anchor="middle" class="tat b" style="fill:#147A47" opacity="0">${L('Atrapada!', '¡Atrapada!')}<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.31;.34;.95;1" ${D}/></text>`);
  },
  // «si … si no»: sempre fa una de les dues parts (si plou, paraigua; si no, gorra)
  g5else() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const on = (a, b) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${a};${a + .02};${b};${b + .02};1" ${D}/>`;
    const glow = (a, b) => `<animate attributeName="stroke-width" values="2;2;5;5;2;2" keyTimes="0;${a};${a + .02};${b};${b + .02};1" ${D}/>`;
    return tSvg(222, `<g opacity="0">${on(.04, .46)}<g transform="translate(160 36)"><ellipse rx="34" ry="14" fill="#B9C3D9"/><ellipse cx="-16" cy="-8" rx="18" ry="13" fill="#C9D2E6"/><ellipse cx="12" cy="-11" rx="20" ry="15" fill="#C9D2E6"/>
        ${[-20, -4, 12, 26].map((x, k) => `<path d="M${x} ${16 + (k % 2) * 4} l-4 10" stroke="#3D7BF4" stroke-width="3" stroke-linecap="round"/>`).join('')}</g></g>
      <g opacity="0">${on(.52, .96)}<g transform="translate(160 36)">${[...Array(8).keys()].map(i => `<rect x="-2" y="-30" width="4" height="9" rx="2" fill="#FFC531" transform="rotate(${i * 45})"/>`).join('')}<circle r="17" fill="#FFD54A" stroke="#F5A623" stroke-width="2"/></g></g>
      <g ${tA(.1, 'ta-in')}><path d="M160 66 L206 92 L160 118 L114 92Z" fill="#F2B21B" stroke="#C98A0B" stroke-width="2.5" stroke-linejoin="round"/><text x="160" y="98" text-anchor="middle" class="tat b" style="fill:#3A2600">${L('Plou?', '¿Llueve?')}</text></g>
      <path d="M114 92 H70 V130" fill="none" stroke="#1FA463" stroke-width="4" stroke-linecap="round" ${tA(.3, 'ta-fade')}/><path d="M206 92 H250 V130" fill="none" stroke="#EF5A5A" stroke-width="4" stroke-linecap="round" ${tA(.3, 'ta-fade')}/>
      <text x="92" y="84" text-anchor="middle" class="tat s" style="fill:#147A47" ${tA(.4, 'ta-fade')}>${L('sí', 'sí')}</text><text x="228" y="84" text-anchor="middle" class="tat s" style="fill:#C0392B" ${tA(.4, 'ta-fade')}>no</text>
      <g ${tA(.5, 'ta-in')}><rect x="12" y="132" width="116" height="62" rx="14" fill="#fff" stroke="#1FA463" stroke-width="2">${glow(.04, .46)}</rect>
        <g transform="translate(38 166) scale(.85)"><path d="M-20 0 Q-20 -22 0 -22 Q20 -22 20 0 Q14 -6 7 0 Q0 -6 -7 0 Q-14 -6 -20 0Z" fill="#E5489A" stroke="#A3205E" stroke-width="2"/><path d="M0 -1 V14 Q0 19 -5 19" fill="none" stroke="#56628A" stroke-width="3" stroke-linecap="round"/></g>
        <text x="92" y="169" text-anchor="middle" class="tat s">${L('paraigua', 'paraguas')}</text></g>
      <g ${tA(.7, 'ta-in')}><rect x="192" y="132" width="116" height="62" rx="14" fill="#fff" stroke="#EF5A5A" stroke-width="2">${glow(.52, .96)}</rect>
        <g transform="translate(226 170)"><path d="M-18 0 Q-18 -20 0 -20 Q18 -20 18 0Z" fill="#3D7BF4" stroke="#1C3FB8" stroke-width="2"/><path d="M8 0 H28 Q30 4 26 6 H-18Z" fill="#3D7BF4" stroke="#1C3FB8" stroke-width="2" stroke-linejoin="round"/></g>
        <text x="282" y="169" text-anchor="middle" class="tat s">${L('gorra', 'gorra')}</text></g>
      <text x="160" y="214" text-anchor="middle" class="tat s" ${tA(.9, 'ta-fade')}>${L('Sempre fa una de les dues, mai totes dues', 'Siempre hace una de las dos, nunca las dos')}</text>`);
  },
  // colors que avisen: el cranc puja per la sorra (groc) i, quan toca el blau del mar, torna enrere
  g5color() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const art = (k, x, y, w) => typeof STG_ART !== 'undefined' ? STG_ART[k].svg(0).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `) : '';
    return tSvg(212, `<defs><clipPath id="g5clB"><rect x="8" y="8" width="196" height="196" rx="16"/></clipPath></defs>
      <g clip-path="url(#g5clB)"><rect x="8" y="8" width="196" height="196" fill="#BDE8FF"/><circle cx="46" cy="40" r="18" fill="#FFD54A"/>
        <rect x="8" y="74" width="196" height="50" fill="#3D7BF4"/><path d="M8 80 q12 -6 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" fill="none" stroke="#fff" stroke-width="2.5" opacity=".6"/>
        <rect x="8" y="124" width="196" height="80" fill="#FFC531"/><rect x="8" y="124" width="196" height="80" fill="#FBE7B7" opacity=".55"/></g>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -44;0 -44;0 0;0 0" keyTimes="0;.35;.5;.8;1" ${D}/>
        ${art('cranc', 106, 176, 58)}
        <circle cx="106" cy="176" r="30" fill="none" stroke="#EF5A5A" stroke-width="3.5" stroke-dasharray="6 5" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.33;.35;.5;.52;1" ${D}/></circle>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.34;.36;.62;.64;1" ${D}/><rect x="126" y="124" width="72" height="28" rx="14" fill="#fff" stroke="#EF5A5A" stroke-width="2"/><text x="162" y="143" text-anchor="middle" class="tat s" style="fill:#C0392B">${L('Aigua!', '¡Agua!')}</text></g></g>
      <g ${tA(.3, 'ta-in')}><rect x="212" y="40" width="102" height="62" rx="14" fill="#fff" stroke="#3D7BF4" stroke-width="2.5"/><rect x="222" y="50" width="20" height="20" rx="5" fill="#3D7BF4"/><text x="250" y="66" class="tat s">${L('blau', 'azul')}</text><text x="222" y="92" class="tat s" style="fill:#C0392B">${L('compte!', '¡cuidado!')}</text></g>
      <g ${tA(.6, 'ta-in')}><rect x="212" y="114" width="102" height="62" rx="14" fill="#fff" stroke="#E2A400" stroke-width="2.5"/><rect x="222" y="124" width="20" height="20" rx="5" fill="#FFC531"/><text x="250" y="140" class="tat s">${L('groc', 'amarillo')}</text><text x="222" y="166" class="tat s" style="fill:#147A47">${L('camina', 'camina')}</text></g>
      <text x="263" y="198" text-anchor="middle" class="tat s" ${tA(.9, 'ta-fade')}>${L('El fons avisa', 'El fondo avisa')}</text>`);
  },
  // l'arbre de decisions del salt: «toca el verd?» → no: cau · sí: «fletxa amunt?» → sí: salta · no: camina
  g5tree() {
    const D = 'dur="6s" repeatCount="indefinite"';
    const q = (cx, cy, w, txt) => `<rect x="${cx - w / 2}" y="${cy - 20}" width="${w}" height="40" rx="14" fill="#FFF7E0" stroke="#F2B21B" stroke-width="3"/><text x="${cx}" y="${cy + 6}" text-anchor="middle" class="tat b">${txt}</text>`;
    const leaf = (cx, cy, w, txt, col, bg) => `<rect x="${cx - w / 2}" y="${cy - 17}" width="${w}" height="34" rx="17" fill="${bg}" stroke="${col}" stroke-width="3"/><text x="${cx}" y="${cy + 5}" text-anchor="middle" class="tat s" style="fill:${col}">${txt}</text>`;
    const tag = (x, y, txt, col) => `<rect x="${x - 17}" y="${y - 11}" width="34" height="22" rx="11" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w s" style="font-size:12px">${txt}</text>`;
    const line = d => `<path d="${d}" fill="none" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round"/>`;
    const tok = (path, kt, okt) => `<circle r="8" fill="#FFC531" stroke="#14204A" stroke-width="2.5" opacity="0"><animateMotion path="${path}" keyPoints="0;0;1;1" keyTimes="${kt}" calcMode="linear" ${D}/><animate attributeName="opacity" values="0;1;0;0" keyTimes="${okt}" calcMode="discrete" ${D}/></circle>`;
    return tSvg(222, `${line('M130 50 L70 84')}${line('M190 50 L230 80')}${line('M200 120 L172 154')}${line('M262 120 L276 154')}
      <g ${tA(.2, 'ta-in')}>${q(160, 30, 168, L('Toca el verd?', '¿Toca el verde?'))}</g>
      <g ${tA(.7, 'ta-pop')}>${tag(92, 64, 'no', '#EF5A5A')}${tag(218, 62, L('sí', 'sí'), '#1FA463')}</g>
      <g ${tA(1, 'ta-in')}>${leaf(66, 102, 104, L('cau ↓', 'cae ↓'), '#C0392B', '#FDEBEB')}</g>
      <g ${tA(1.3, 'ta-in')}>${q(232, 100, 160, L('Fletxa amunt?', '¿Flecha arriba?'))}</g>
      <g ${tA(1.8, 'ta-pop')}>${tag(176, 136, L('sí', 'sí'), '#1FA463')}${tag(282, 136, 'no', '#EF5A5A')}</g>
      <g ${tA(2.1, 'ta-in')}>${leaf(168, 172, 96, L('salta ↑', 'salta ↑'), '#147A47', '#E7F7EE')}${leaf(272, 172, 92, L('camina →', 'camina →'), '#1F5FBF', '#E8F0FF')}</g>
      ${tok('M160 50 L232 80 L232 120 L272 154', '0;.08;.38;1', '0;.08;.5;1')}${tok('M160 50 L66 84', '0;.56;.76;1', '0;.56;.95;1')}
      <text x="160" y="214" text-anchor="middle" class="tat b" ${tA(2.6, 'ta-fade')}>${L("Un «si» dins d'un altre «si»", 'Un «si» dentro de otro «si»')}</text>`);
  },
  // «i» i «o»: el regal s'obre només si hi són tots dos (i); l'estrella s'encén si n'hi ha algun (o)
  g5andor() {
    const D = 'dur="6s" repeatCount="indefinite"';
    const ph = (v) => `<animate attributeName="opacity" values="${v}" keyTimes="0;.25;.5;.75" calcMode="discrete" ${D}/>`;
    const who = (k, x, y, v) => { const a = typeof STG_ART !== 'undefined' ? STG_ART[k].svg(0).replace('<svg ', `<svg x="${x - 22}" y="${y - 24}" width="44" height="48" `) : ''; return `<circle cx="${x}" cy="${y}" r="22" fill="none" stroke="#C3CDE6" stroke-width="2.5" stroke-dasharray="5 5"/><g opacity="0">${ph(v)}${a}</g>`; };
    const row = (y, lab, col, res, txt) => `<rect x="6" y="${y}" width="308" height="96" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
      <circle cx="34" cy="${y + 38}" r="20" fill="${col}"/><text x="34" y="${y + 45}" text-anchor="middle" class="tat w b" style="font-size:19px">${lab}</text>
      ${who('numi', 92, y + 38, '0;1;0;1')}<text x="124" y="${y + 45}" text-anchor="middle" class="tat b">+</text>${who('bit', 156, y + 38, '0;0;1;1')}<text x="198" y="${y + 45}" text-anchor="middle" class="tat b">→</text>
      ${res}<text x="160" y="${y + 86}" text-anchor="middle" class="tat s">${txt}</text>`;
    const gift = y => `<g transform="translate(252 ${y + 40})"><rect x="-22" y="-10" width="44" height="30" rx="5" fill="#3D8BFF" stroke="#1C3FB8" stroke-width="2.4"/><path d="M0 -10 V20" stroke="#FFC531" stroke-width="6"/>
        <g>${`<animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 0;0 -16" keyTimes="0;.25;.5;.75" calcMode="discrete" ${D}/>`}<rect x="-25" y="-20" width="50" height="12" rx="4" fill="#5BA0FF" stroke="#1C3FB8" stroke-width="2.4"/></g>
        <g opacity="0">${ph('0;0;0;1')}<path d="M0 -26 l5 10 l11 1 l-8 7 l3 11 l-11 -6 l-11 6 l3 -11 l-8 -7 l11 -1z" fill="#FFC531" stroke="#C9780E" stroke-width="2" transform="translate(0 -10)"/></g></g>`;
    const lamp = y => `<g transform="translate(252 ${y + 38})"><path d="M0 -24 l7 14 l16 2 l-12 11 l3 16 l-14 -8 l-14 8 l3 -16 l-12 -11 l16 -2z" fill="#E6EAF4" stroke="#B9C3D9" stroke-width="2.4"/>
        <g opacity="0">${ph('0;1;1;1')}<circle r="30" fill="#FFF3A1" opacity=".6"/><path d="M0 -24 l7 14 l16 2 l-12 11 l3 16 l-14 -8 l-14 8 l3 -16 l-12 -11 l16 -2z" fill="#FFC531" stroke="#C9780E" stroke-width="2.4"/></g></g>`;
    return tSvg(212, `${row(6, L('i', 'y'), '#E0533F', gift(6), L("Calen els dos per obrir el regal", 'Hacen falta los dos para abrir el regalo'))}
      ${row(110, 'o', '#8B5CF6', lamp(110), L("N'hi ha prou amb un per encendre-la", 'Basta con uno para encenderla'))}`);
  },
  // «no» gira la resposta: si NO toca la roca, en Bit camina; quan la toca, s'atura
  g5not() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const art = (k, x, y, w) => typeof STG_ART !== 'undefined' ? STG_ART[k].svg(0).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `) : '';
    const sw = (a, b) => `<animate attributeName="opacity" values="${a}" keyTimes="0;.5;.95" calcMode="discrete" ${D}/>`;
    const pill = (x, y, ok, op) => `<g opacity="${op[0]}">${sw(op, 0)}<rect x="${x}" y="${y}" width="58" height="30" rx="15" fill="${ok ? '#E7F7EE' : '#FDEBEB'}" stroke="${ok ? '#1FA463' : '#EF5A5A'}" stroke-width="2.5"/><text x="${x + 29}" y="${y + 21}" text-anchor="middle" class="tat b" style="fill:${ok ? '#147A47' : '#C0392B'}">${ok ? L('sí', 'sí') : 'no'}</text></g>`;
    return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="8" y="12" width="104" height="54" rx="12" fill="#FFF7E0" stroke="#F2B21B" stroke-width="2.5"/><text x="60" y="35" text-anchor="middle" class="tat s">${L('Toca la', '¿Toca la')}</text><text x="60" y="55" text-anchor="middle" class="tat s">${L('roca?', 'roca?')}</text></g>
      ${pill(31, 74, false, '1;0;1')}${pill(31, 74, true, '0;1;0')}
      <path d="M118 39 H140" stroke="#9FB2E6" stroke-width="4" stroke-linecap="round"/><path d="M134 33 l7 6 l-7 6" fill="none" stroke="#9FB2E6" stroke-width="4" stroke-linecap="round"/>
      <g ${tA(.3, 'ta-pop')}><rect x="146" y="18" width="62" height="42" rx="12" fill="#E0533F"/><text x="177" y="45" text-anchor="middle" class="tat w b">${L('no', 'no')}</text>
        <path d="M160 70 q17 14 34 0" fill="none" stroke="#E0533F" stroke-width="3" stroke-linecap="round"/><path d="M188 64 l6 6 l-8 3" fill="none" stroke="#E0533F" stroke-width="3" stroke-linecap="round"/></g>
      <path d="M214 39 H236" stroke="#9FB2E6" stroke-width="4" stroke-linecap="round"/><path d="M230 33 l7 6 l-7 6" fill="none" stroke="#9FB2E6" stroke-width="4" stroke-linecap="round"/>
      <g><rect x="242" y="18" width="72" height="42" rx="12" fill="#3D7BF4"><animate attributeName="fill" values="#3D7BF4;#B9C3D9;#3D7BF4" keyTimes="0;.5;.95" calcMode="discrete" ${D}/></rect><text x="278" y="45" text-anchor="middle" class="tat w s">${L('camina', 'camina')}</text></g>
      ${pill(249, 74, true, '1;0;1')}${pill(249, 74, false, '0;1;0')}
      <rect x="8" y="120" width="306" height="74" rx="14" fill="#E9F8E4"/><rect x="8" y="170" width="306" height="24" rx="0" fill="#8FD36C"/>
      ${art('roca', 250, 152, 56)}
      <g><animateTransform attributeName="transform" type="translate" values="0 0;150 0;150 0;0 0" keyTimes="0;.5;.95;1" ${D}/>${typeof STG_ART !== 'undefined' ? STG_ART.bit.svg(0).replace('<svg ', '<svg x="36" y="118" width="46" height="56" ') : ''}</g>
      <text x="160" y="210" text-anchor="middle" class="tat s">${L('«no» canvia el sí per no i el no per sí', '«no» cambia el sí por no y el no por sí')}</text>`);
  },
  // el pla del videojoc en paper: el dibuix i les regles (cada regla és un «si»)
  g5plan() {
    const art = (k, x, y, w) => typeof STG_ART !== 'undefined' ? STG_ART[k].svg(0).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `) : '';
    const rule = (y, t, txt) => `<g ${tA(t, 'ta-in')}><circle cx="140" cy="${y - 5}" r="9" fill="#1FA463"/><path d="M135 ${y - 5} l3 3 l6 -7" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="155" y="${y}" class="tat s" style="font-size:13px">${txt}</text></g>`;
    return tSvg(224, `<rect x="8" y="8" width="304" height="208" rx="10" fill="#FFFDF5" stroke="#E2D6B5" stroke-width="2"/>${[40, 70, 100, 130, 160, 190].map(y => `<path d="M128 ${y + 6} H302" stroke="#EDE4CC" stroke-width="1.5"/>`).join('')}
      <text x="160" y="32" text-anchor="middle" class="tat b" ${tA(.1, 'ta-fade')}>${L('Pla: Atrapa la fruita', 'Plan: Atrapa la fruta')}</text>
      <rect x="16" y="44" width="102" height="160" rx="8" fill="#fff" stroke="#9FB2E6" stroke-width="2" stroke-dasharray="6 4"/>
      <g ${tA(.4)}>${art('poma', 42, 70, 28)}</g><g ${tA(.7)}>${art('platan', 92, 94, 30)}</g><g ${tA(1)}>${art('roca', 58, 128, 28)}</g><g ${tA(1.3)}>${art('cistella', 67, 182, 52)}</g>
      <path d="M38 184 h-14 m0 0 l6 -5 m-6 5 l6 5 M96 184 h14 m0 0 l-6 -5 m6 5 l-6 5" stroke="#3D7BF4" stroke-width="3" stroke-linecap="round" ${tA(1.5, 'ta-fade')}/>
      ${rule(66, 1.8, L('← →: mou la cistella', '← →: mueve la cesta'))}${rule(96, 2.4, L("si l'atrapa: pop!", 'si la atrapa: ¡pop!'))}
      ${rule(126, 3, L('si toca terra: a dalt', 'si toca suelo: arriba'))}${rule(156, 3.6, L('si toca la roca: fi', 'si toca la roca: fin'))}
      <text x="216" y="196" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(4.2, 'ta-fade')}>${L('Cada regla és un «si»', 'Cada regla es un «si»')}</text>`);
  }
});
