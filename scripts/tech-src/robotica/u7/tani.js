/* Tech Robòtica · unitat 7 «Missions» · animacions de teoria (TANI)
   Dibuixos propis: el Maqueen Lite V5 vist des de dalt (cos fosc amb vora daurada, rodes negres, micro:bit amb LEDs
   vermells i ultrasons blaus amb dos «ulls» platejats). SVG + SMIL, en bucle. */
Object.assign(TANI, (() => {
  const D = 5.5; // durada del bucle (s), la mateixa que fan servir les classes ta-*
  const HEART = '01010 11111 11111 01110 00100', NONE = '00000 00000 00000 00000 00000';
  const leds = p => { const r = p.split(' '); let o = ''; for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) o += `<rect x="${(-8.6 + x * 3.8).toFixed(1)}" y="${(-12.6 + y * 3.8).toFixed(1)}" width="2.4" height="2.4" rx=".6" fill="${r[y][x] === '1' ? '#FF3B30' : '#3A2226'}"/>`; return o; };
  // el Maqueen mirant amunt; centre a l'origen. o.sens: sensors de línia (true = encesos, 'anim' = s'encenen amb o.sensAnim)
  const bot = (o = {}) => `<ellipse cx="2" cy="5" rx="27" ry="27" fill="#0B1838" opacity=".14"/>
    ${[-1, 1].map(k => `<g transform="translate(${k * 23} 2)"><rect x="-4.6" y="-14" width="9.2" height="28" rx="3.6" fill="#1B1D22"/>${[-9, -3, 3, 9].map(t => `<rect x="-4.6" y="${t - .7}" width="9.2" height="1.5" fill="#40444F"/>`).join('')}</g>`).join('')}
    <rect x="-19" y="-21" width="38" height="42" rx="8" fill="#152238" stroke="#F2B21B" stroke-width="1.8"/>
    ${[-1, 1].map(k => `<circle cx="${k * 13.5}" cy="-17.5" r="2.4" fill="${o.car || '#C7CBD6'}">${o.carAnim || ''}</circle>`).join('')}
    <rect x="-14" y="-31.5" width="28" height="10" rx="2.6" fill="#1F5FBF"/>
    ${[-1, 1].map(k => `<circle cx="${k * 7}" cy="-26.5" r="4.6" fill="#D7DCE6" stroke="#9AA3B5" stroke-width=".8"/><circle cx="${k * 7}" cy="-26.5" r="2.3" fill="#5A6070"/>`).join('')}
    <rect x="-12.5" y="-15" width="25" height="22" rx="2" fill="#121212"/><rect x="-12.5" y="5.6" width="25" height="2.2" fill="#C9A24A"/>${leds(o.leds || HEART)}
    ${o.sens ? [-6, 0, 6].map(x => `<circle cx="${x}" cy="-20.5" r="2.6" fill="${o.sens === true ? '#2EE6F0' : '#5A6070'}" stroke="#fff" stroke-width=".8">${o.sensAnim || ''}</circle>`).join('') : ''}`;
  const SM = (attr, values, keyTimes, extra = '') => `<animate attributeName="${attr}" values="${values}" keyTimes="${keyTimes}" dur="${D}s" repeatCount="indefinite" ${extra}/>`;
  const TR = (type, values, keyTimes, extra = '') => `<animateTransform attributeName="transform" type="${type}" values="${values}" keyTimes="${keyTimes}" dur="${D}s" repeatCount="indefinite" ${extra}/>`;
  const ok = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1FA463"/><path d="M${x - r * .45} ${y}l${r * .32} ${r * .34}l${r * .55} -${r * .62}" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const ko = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#EF5A5A"/><path d="M${x - r * .38} ${y - r * .38}l${r * .76} ${r * .76}M${x + r * .38} ${y - r * .38}l-${r * .76} ${r * .76}" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
  const pill = (x, y, w, txt, col, cls = 'tat w s') => `<rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="13" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="${cls}">${txt}</text>`;
  const ball = (r = 7) => `<circle r="${r}" fill="#F08A24" stroke="#B25A0A" stroke-width="1.4"/><circle cx="${-r * .35}" cy="${-r * .35}" r="${r * .3}" fill="#FFC06B"/>`;
  // camí que es dibuixa a poc a poc (fins al 85 % del bucle) i el robot que el segueix
  const trace = (d, col, w, s) => `<path d="${d}" pathLength="100" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="100 100" opacity=".55">${SM('stroke-dashoffset', '100;0;0', '0;.85;1')}</path>
    <g><animateMotion path="${d}" dur="${D}s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.85;1" calcMode="linear" rotate="auto"/><g transform="rotate(90) scale(${s})">${bot()}</g></g>`;

  return {
    // dues estratègies d'aspirador: rebotar (a l'atzar) i zig-zag (amb ordre)
    k7cover() {
      const room = (x, t) => `<rect x="${x}" y="34" width="140" height="106" rx="6" fill="#F8F7F2" stroke="#B98552" stroke-width="5"/><text x="${x + 70}" y="22" text-anchor="middle" class="tat b">${t}</text>`;
      const rb = 'M26 124L138 70L104 46L24 96L66 128L138 104L118 46L40 52L30 118';
      let zz = 'M184 46'; for (let i = 0; i < 6; i++) { const y = 46 + i * 17.5; zz += `L${i % 2 ? 184 : 296} ${y}` + (i < 5 ? `L${i % 2 ? 184 : 296} ${y + 17.5}` : ''); }
      return tSvg(214, `${room(10, L('Rebotar', 'Rebotar'))}${room(170, L('Zig-zag', 'Zigzag'))}
        ${trace(rb, '#2F7BFF', 13, .36)}${trace(zz, '#1FA463', 13, .36)}
        <g ${tA(3.9, 'ta-in')}>${pill(80, 166, 132, L("a l'atzar", 'al azar'), '#2F7BFF')}<text x="80" y="200" text-anchor="middle" class="tat s">${L('repeteix llocs', 'repite sitios')}</text></g>
        <g ${tA(4.3, 'ta-in')}>${pill(240, 166, 132, L('amb ordre', 'con orden'), '#1FA463')}<text x="240" y="200" text-anchor="middle" class="tat s">${L('fila per fila', 'fila por fila')}</text></g>`);
    },
    // el terra en quadrets de 5 × 5 cm: queden nets quan el centre del robot hi passa
    k7grid() {
      const X0 = 50, Y0 = 18, C = 22, NX = 10, NY = 5, T = 4.4;
      const pts = [[0, 0], [9, 0], [9, 1], [0, 1], [0, 2], [4, 2]].map(([c, r]) => [X0 + C / 2 + c * C, Y0 + C / 2 + r * C]);
      const seg = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1])), tot = seg.reduce((a, b) => a + b, 0);
      // moment en què el robot passa pel centre de cada quadret
      const when = {}; let acc = 0;
      pts.slice(1).forEach((p, i) => { const a = pts[i], n = Math.round(seg[i] / C); for (let k = 0; k <= n; k++) { const x = a[0] + (p[0] - a[0]) * k / n, y = a[1] + (p[1] - a[1]) * k / n, key = Math.round((x - X0 - C / 2) / C) + ',' + Math.round((y - Y0 - C / 2) / C); if (!(key in when)) when[key] = (acc + seg[i] * k / n) / tot * T / D; } acc += seg[i]; });
      let cells = '';
      for (let r = 0; r < NY; r++) for (let c = 0; c < NX; c++) { const k = when[c + ',' + r];
        cells += `<rect x="${X0 + c * C + 1}" y="${Y0 + r * C + 1}" width="${C - 2}" height="${C - 2}" rx="3" fill="#1FA463" fill-opacity="0">${k !== undefined ? SM('fill-opacity', '0;0;.55;.55', `0;${k.toFixed(3)};${(k + .01).toFixed(3)};1`) : ''}</rect>`; }
      const d = 'M' + pts.map(p => p.join(' ')).join('L');
      return tSvg(222, `<rect x="${X0 - 4}" y="${Y0 - 4}" width="${NX * C + 8}" height="${NY * C + 8}" rx="6" fill="#F8F7F2" stroke="#B98552" stroke-width="5"/>
        ${Array.from({ length: NX - 1 }, (_, i) => `<path d="M${X0 + (i + 1) * C} ${Y0}V${Y0 + NY * C}" stroke="#C9D3EA" stroke-width="1"/>`).join('')}${Array.from({ length: NY - 1 }, (_, i) => `<path d="M${X0} ${Y0 + (i + 1) * C}H${X0 + NX * C}" stroke="#C9D3EA" stroke-width="1"/>`).join('')}
        ${cells}
        <g><animateMotion path="${d}" dur="${D}s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;${(T / D).toFixed(3)};1" calcMode="linear" rotate="auto"/><g transform="rotate(90) scale(.42)">${bot()}</g><circle r="2.6" fill="#FFC531" stroke="#fff" stroke-width="1"/></g>
        <g transform="translate(${X0 + C * 7} ${Y0 + NY * C + 22})"><rect x="0" y="-10" width="${C - 2}" height="${C - 2}" rx="3" fill="#F8F7F2" stroke="#9AA3B5"/><text x="${C + 4}" y="6" class="tat s">5 × 5 cm</text></g>
        <g ${tA(.2, 'ta-fade')}><circle cx="${X0 + 6}" cy="${Y0 + NY * C + 23}" r="4" fill="#FFC531" stroke="#B4501A"/><text x="${X0 + 16}" y="${Y0 + NY * C + 28}" class="tat s">${L('centre del robot', 'centro del robot')}</text></g>
        <g ${tA(T, 'ta-pop')}>${pill(160, 196, 282, L('25 de 50 quadrets nets = 50 %', '25 de 50 cuadraditos limpios = 50 %'), '#1FA463', 'tat w')}</g>`);
    },
    // el dohyo: blanc → 0, vora negra i buit → 1; a la vora, el robot recula i gira
    k7ring() {
      const kt = '0;.36;.46;.62;.78;1';
      return tSvg(226, `<rect x="0" y="0" width="320" height="226" rx="14" fill="#2B3142"/>
        <circle cx="112" cy="113" r="100" fill="#F4F2EA"/><circle cx="112" cy="113" r="95" fill="none" stroke="#121418" stroke-width="10"/>
        <path d="M100 103v20M124 103v20" stroke="#C9C3B3" stroke-width="2.4"/>
        <g>${TR('translate', '112 160;112 43;112 43;112 80;112 80;112 160', kt)}
          <g>${TR('rotate', '0;0;0;0;140;360', kt)}<g transform="scale(.78)">${bot({ sens: 'anim', sensAnim: SM('fill', '#5A6070;#5A6070;#2EE6F0;#5A6070;#5A6070;#5A6070', kt, 'calcMode="discrete"') })}</g></g></g>
        <g opacity="0">${SM('opacity', '0;0;1;1;0;0', '0;.35;.36;.6;.61;1')}${pill(112, 196, 150, L('L = 1 → enrere!', 'L = 1 → ¡atrás!'), '#EF5A5A', 'tat w')}</g>
        <g transform="translate(222 40)">
          <rect x="0" y="0" width="26" height="26" rx="5" fill="#F4F2EA" stroke="#9AA3B5"/><text x="34" y="13" class="tat s" style="fill:#fff">${L('blanc', 'blanco')}</text><text x="34" y="29" class="tat b" style="fill:#1FA463">0</text>
          <rect x="0" y="54" width="26" height="26" rx="5" fill="#121418" stroke="#9AA3B5"/><text x="34" y="67" class="tat s" style="fill:#fff">${L('vora', 'borde')}</text><text x="34" y="83" class="tat b" style="fill:#FFC531">1</text>
          <rect x="0" y="108" width="26" height="26" rx="5" fill="#2B3142" stroke="#9AA3B5" stroke-dasharray="3 3"/><text x="34" y="121" class="tat s" style="fill:#fff">${L('buit', 'vacío')}</text><text x="34" y="137" class="tat b" style="fill:#FFC531">1</text>
        </g>
`);
    },
    // sumo: gira per buscar, el veu, ataca i el treu fora del dohyo
    k7sumo() {
      const C = [108, 113], R = 90, a = 54.5, ux = Math.sin(a * Math.PI / 180), uy = -Math.cos(a * Math.PI / 180);
      const P = d => `${(C[0] + ux * d).toFixed(1)} ${(C[1] + uy * d).toFixed(1)}`;
      const kt = '0;.4;.47;.6;.66;.76;1', kb = '0;.6;.66;1';
      return tSvg(226, `<rect x="0" y="0" width="320" height="226" rx="14" fill="#2B3142"/>
        <circle cx="${C[0]}" cy="${C[1]}" r="${R + 5}" fill="#F4F2EA"/><circle cx="${C[0]}" cy="${C[1]}" r="${R}" fill="none" stroke="#121418" stroke-width="10"/>
        <g>${TR('translate', `${P(80)};${P(80)};${P(108)};${P(108)}`, kb)}<rect x="-11" y="-11" width="22" height="22" rx="3" fill="#D29A5A" stroke="#8A5A2E" stroke-width="2"/><path d="M-5 -2h10M-5 4h10" stroke="#8A5A2E" stroke-width="1.6"/></g>
        <g>${TR('translate', `${C.join(' ')};${C.join(' ')};${C.join(' ')};${P(48)};${P(74)};${P(62)};${P(62)}`, kt)}
          <g>${TR('rotate', `0;${a};${a};${a};${a};${a};${a}`, kt)}
            <path d="M-6 -30L-16 -86L16 -86L6 -30Z" fill="#2EE6F0" opacity=".28">${SM('fill', '#2EE6F0;#2EE6F0;#FF9F0A;#FF9F0A;#2EE6F0;#2EE6F0', '0;.4;.41;.7;.71;1', 'calcMode="discrete"')}</path>
            <g transform="scale(.66)">${bot({ car: '#C7CBD6', carAnim: SM('fill', '#C7CBD6;#C7CBD6;#FF3B30;#FF3B30;#C7CBD6', '0;.46;.47;.76;1', 'calcMode="discrete"') })}</g></g></g>
        <g transform="translate(236 34)">
          <g opacity=".35">${SM('opacity', '1;1;.35;.35', '0;.4;.41;1', 'calcMode="discrete"')}${pill(32, 0, 92, L('busca', 'busca'), '#2F7BFF')}</g>
          <g opacity=".35" transform="translate(0 40)">${SM('opacity', '.35;.35;1;1;.35;.35', '0;.46;.47;.76;.77;1', 'calcMode="discrete"')}${pill(32, 0, 92, L('ataca!', '¡ataca!'), '#EF5A5A')}</g>
          <g opacity=".35" transform="translate(0 80)">${SM('opacity', '.35;.35;1;1', '0;.66;.67;1', 'calcMode="discrete"')}${pill(32, 0, 92, L('vora: enrere', 'borde: atrás'), '#F2B21B', 'tat s')}</g>
        </g>
        <g opacity="0">${SM('opacity', '0;0;1;1', '0;.66;.67;1', 'calcMode="discrete"')}${pill(268, 196, 92, L('FORA!', '¡FUERA!'), '#1FA463', 'tat w')}</g>`);
    },
    // empènyer de cara (la balisa va recta) o de costat (rellisca i s'escapa)
    k7push() {
      const lane = (y, t, good) => {
        const kt = '0;.2;.85;1';
        const ballMove = good ? TR('translate', `86 ${y};86 ${y};246 ${y};246 ${y}`, kt) : TR('translate', `86 ${y - 9};86 ${y - 9};176 ${y - 24};176 ${y - 24}`, kt);
        return `<rect x="10" y="${y - 32}" width="300" height="64" rx="10" fill="#F8F7F2" stroke="#DCE4FA" stroke-width="2"/>
          <rect x="226" y="${y - 24}" width="60" height="48" rx="6" fill="#3D8BFF" fill-opacity=".3" stroke="#3D8BFF" stroke-dasharray="4 3"/><text x="256" y="${y + 21}" text-anchor="middle" class="tat s" style="fill:#1F4FA8">BASE</text>
          <g>${ballMove}${ball(8)}</g>
          <g>${TR('translate', `50 ${y};56 ${y};210 ${y};210 ${y}`, kt)}<g transform="rotate(90) scale(.62)">${bot()}</g></g>
          <text x="20" y="${y - 38}" class="tat b">${t}</text>${good ? ok(296, y - 38, 10) : ko(296, y - 38, 10)}`; };
      return tSvg(226, `${lane(64, L('De cara', 'De cara'), true)}${lane(178, L('De costat', 'De lado'), false)}`);
    },
    // una missió llarga, per fases: busca → empeny → deixa → avisa
    k7plan() {
      const X = [42, 122, 202, 280], Y = 80, t0 = [0, 1.3, 2.6, 3.9];
      const icon = [
        `<circle r="7" fill="#2F7BFF"/>${[0, 1, 2].map(k => `<path d="M${-12 - k * 5} ${-8 - k * 4}q${12 + k * 5} -${9 + k * 3} ${24 + k * 10} 0" fill="none" stroke="#2F7BFF" stroke-width="2.6" stroke-linecap="round" opacity=".7"/>`).join('')}`,
        `<g transform="translate(-6 4)"><rect x="-12" y="-8" width="16" height="16" rx="3" fill="#152238" stroke="#F2B21B" stroke-width="1.6"/><circle cx="12" cy="0" r="6" fill="#F08A24"/></g><path d="M-2 -14h14l-4 -4M12 -14l-4 4" stroke="#1FA463" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
        `<rect x="-11" y="-11" width="22" height="22" rx="4" fill="#EF5A5A"/><rect x="-5" y="-5" width="10" height="10" rx="1" fill="#fff"/>`,
        `<circle cx="-7" cy="-4" r="6" fill="#2BD45A"/><circle cx="7" cy="-4" r="6" fill="#2BD45A"/><path d="M-8 9l4 4l10 -10" stroke="#1FA463" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`];
      const lab = [L('busca', 'busca'), L('empeny', 'empuja'), L('deixa', 'deja'), L('avisa', 'avisa')];
      const code = [[L('fins que', 'hasta que'), 'dist < 25'], [L('fins que', 'hasta que'), L('gris > 200', 'gris > 200')], [L('atura', 'para'), L('motors', 'motores')], [L('llums', 'luces'), L('verds', 'verdes')]];
      return tSvg(226, `${X.slice(1).map((x, i) => `<path d="M${X[i] + 31} ${Y}H${x - 33}" stroke="#7F95E8" stroke-width="3.4" stroke-linecap="round"/><path d="M${x - 39} ${Y - 6}l6 6l-6 6" fill="none" stroke="#7F95E8" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>`).join('')}
        ${X.map((x, i) => `<g ${tA(t0[i] * .5, 'ta-pop')}><g transform="translate(${x} ${Y})"><circle r="29" fill="#fff" stroke="#C9D6FB" stroke-width="3" filter="url(#bwSh)"/>${icon[i]}
          <circle r="34" fill="none" stroke="#FFC531" stroke-width="5" opacity="0">${SM('opacity', '0;0;1;1;0;0', `0;${(t0[i] / D).toFixed(3)};${(t0[i] / D + .005).toFixed(3)};${((t0[i] + 1.3) / D).toFixed(3)};${((t0[i] + 1.3) / D + .005).toFixed(3)};1`)}</circle></g>
          <circle cx="${x - 22}" cy="${Y - 22}" r="10" fill="#2F5BEA"/><text x="${x - 22}" y="${Y - 17}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="${x}" y="${Y + 50}" text-anchor="middle" class="tat b">${lab[i]}</text></g>`).join('')}
        ${X.map((x, i) => `<g ${tA(.6 + i * .5, 'ta-in')}><rect x="${x - 37}" y="160" width="74" height="46" rx="8" fill="#EEF2FF" stroke="#C9D6FB"/><text x="${x}" y="179" text-anchor="middle" class="tat s">${code[i][0]}</text><text x="${x}" y="197" text-anchor="middle" class="tat s">${code[i][1]}</text></g>`).join('')}`);
    },
    // la contrarellotge al circuit del port: més velocitat, menys temps… fins que es perd la línia
    k7trial() {
      const B = [[L('a 150', 'a 150'), 24, '#2F7BFF', 0], [L('a 200', 'a 200'), 17, '#1FA463', .5], [L('a 255', 'a 255'), null, '#EF5A5A', 1]];
      const y0 = 180, k = 4.8;
      return tSvg(226, `<path d="M40 ${y0}H232M40 ${y0}V34" stroke="#9AA3B5" stroke-width="2"/>
        ${[10, 20].map(v => `<path d="M40 ${y0 - v * k}H232" stroke="#DCE4FA" stroke-width="1.4" stroke-dasharray="4 4"/><text x="34" y="${y0 - v * k + 5}" text-anchor="end" class="tat s">${v}</text>`).join('')}
        <text x="44" y="20" class="tat s">${L('segons per volta', 'segundos por vuelta')}</text>
        ${B.map(([t, v, col, d], i) => { const x = 66 + i * 58; return `<g ${tA(.3 + d * 2, 'ta-in')}>${v ? `<rect x="${x}" y="${y0 - v * k}" width="40" height="${v * k}" rx="5" fill="${col}"/><text x="${x + 20}" y="${y0 - v * k - 8}" text-anchor="middle" class="tat b">${v} s</text>` : `${ko(x + 20, y0 - 50, 15)}<text x="${x + 20}" y="${y0 - 76}" text-anchor="middle" class="tat s" style="fill:#C62828">${L('es perd', 'se pierde')}</text>`}
          <text x="${x + 20}" y="${y0 + 22}" text-anchor="middle" class="tat s">${t}</text></g>`; }).join('')}
        <g transform="translate(276 70)"><circle r="30" fill="#fff" stroke="#14204A" stroke-width="4"/><rect x="-6" y="-42" width="12" height="9" rx="2" fill="#14204A"/>
          ${[0, 90, 180, 270].map(a => `<path d="M0 -24V-19" stroke="#9AA3B5" stroke-width="3" transform="rotate(${a})"/>`).join('')}
          <path d="M0 0V-21" stroke="#EF5A5A" stroke-width="3.4" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2.75s" repeatCount="indefinite"/></path><circle r="3.4" fill="#14204A"/></g>
        <g ${tA(2.8, 'ta-pop')}><text x="276" y="132" text-anchor="middle" class="tat b">${L('la millor:', 'la mejor:')}</text><text x="276" y="152" text-anchor="middle" class="tat s">${L('ràpida i', 'rápida y')}</text><text x="276" y="170" text-anchor="middle" class="tat s">${L('sempre bé', 'siempre bien')}</text></g>`);
    }
  };
})());
