/* Tech Robòtica · unitat 1 «Què és un robot?» · animacions de teoria (TANI) */
Object.assign(TANI, (() => {
  // ---------- el Maqueen Lite vist des de dalt (el davant mira amunt; l'origen és el centre de les rodes) ----------
  const PAT = { none: '00000 00000 00000 00000 00000', heart: '01010 11111 11111 01110 00100', arrow: '00100 01110 10101 00100 00100', happy: '00000 01010 00000 10001 01110', yes: '00000 00001 00010 10100 01000' };
  const leds = (p, onCol = '#FF3B30', offCol = '#3A2226') => { const r = (PAT[p] || p).split(' '); let o = ''; for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) { const on = r[y][x] === '1'; if (on || offCol) o += `<rect x="${(-8.6 + x * 3.8).toFixed(1)}" y="${(-12.6 + y * 3.8).toFixed(1)}" width="2.4" height="2.4" rx=".6" fill="${on ? onCol : offCol}"/>`; } return o; };
  const bot = (x, y, a = 0, s = 1, o = {}) => `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})">
    <ellipse cx="2" cy="5" rx="27" ry="27" fill="#0B1838" opacity=".13"/>
    ${[-1, 1].map(k => `<g transform="translate(${k * 23} 2)"><rect x="-4.6" y="-14" width="9.2" height="28" rx="3.6" fill="#1B1D22"/>${[-9, -3, 3, 9].map(t => `<rect x="-4.6" y="${t - .7}" width="9.2" height="1.5" fill="#40444F"/>`).join('')}</g>`).join('')}
    <rect x="-19" y="-21" width="38" height="42" rx="8" fill="#152238" stroke="#F2B21B" stroke-width="1.8"/>
    ${[-1, 1].map(k => `<circle cx="${k * 13.5}" cy="-17.5" r="2.3" fill="${o.car || '#C7CBD6'}"/>`).join('')}
    <rect x="-14" y="-31.5" width="28" height="10" rx="2.6" fill="#1F5FBF"/>
    ${[-1, 1].map(k => `<circle cx="${k * 7}" cy="-26.5" r="4.6" fill="#D7DCE6" stroke="#9AA3B5" stroke-width=".8"/><circle cx="${k * 7}" cy="-26.5" r="2.3" fill="#5A6070"/>`).join('')}
    <rect x="-12.5" y="-15" width="25" height="22" rx="2" fill="#121212"/><rect x="-12.5" y="5.6" width="25" height="2.2" fill="#C9A24A"/>
    ${leds(o.leds || 'none')}<circle cx="-10.6" cy="-4" r="1.5" fill="#2E2E2E"/><circle cx="10.6" cy="-4" r="1.5" fill="#2E2E2E"/>
    ${o.extra || ''}</g>`;
  // fletxa al costat d'una roda: endavant (verda, amunt) o enrere (taronja, avall)
  const warr = (x, fwd) => `<g transform="translate(${x} 2)"><path d="${fwd ? 'M0 13V-9' : 'M0 -13V9'}" stroke="${fwd ? '#1FA463' : '#F08A24'}" stroke-width="4.2" stroke-linecap="round"/><path d="${fwd ? 'M-6.5 -4L0 -12.5L6.5 -4' : 'M-6.5 4L0 12.5L6.5 4'}" fill="none" stroke="${fwd ? '#1FA463' : '#F08A24'}" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const pill = (x, y, w, txt, col, cls = 'tat w s') => `<rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="13" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="${cls}">${txt}</text>`;
  const ok = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1FA463"/><path d="M${x - r * .45} ${y}l${r * .32} ${r * .34}l${r * .55} -${r * .62}" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const ko = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#EF5A5A"/><path d="M${x - r * .38} ${y - r * .38}l${r * .76} ${r * .76}M${x + r * .38} ${y - r * .38}l-${r * .76} ${r * .76}" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
  const SM = (attr, values, dur, extra = '') => `<animate attributeName="${attr}" values="${values}" dur="${dur}s" repeatCount="indefinite" ${extra}/>`;

  return {
    // un robot: sent (sensors) → pensa (programa) → actua (motors), una vegada i una altra
    k1cycle() {
      const C = [160, 112], R = 76, P = a => [C[0] + R * Math.cos(a * Math.PI / 180), C[1] + R * Math.sin(a * Math.PI / 180)];
      const [t1, t2, t3] = [P(-90), P(30), P(150)];
      const node = ([x, y], col, icon, begin) => `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})"><circle r="29" fill="#fff" stroke="${col}" stroke-width="4" filter="url(#bwSh)"/>${icon}
        <circle r="35" fill="none" stroke="#FFC531" stroke-width="5" opacity="0">${SM('opacity', '1;0;0', 4.5, `keyTimes="0;.28;1" begin="${begin}s"`)}</circle></g>`;
      const chev = a => { const [x, y] = P(a); return `<path d="M-5 -6.5L4 0L-5 6.5" fill="none" stroke="#7F95E8" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${a + 90})"/>`; };
      const sense = `<circle cx="-7" cy="4" r="6" fill="#D7DCE6" stroke="#5A6070" stroke-width="1.6"/><circle cx="7" cy="4" r="6" fill="#D7DCE6" stroke="#5A6070" stroke-width="1.6"/><circle cx="-7" cy="4" r="2.6" fill="#5A6070"/><circle cx="7" cy="4" r="2.6" fill="#5A6070"/>
        ${[0, 1, 2].map(k => `<path d="M${-9 - k * 4} ${-6 - k * 4}q${9 + k * 4} -${7 + k * 3} ${18 + k * 8} 0" fill="none" stroke="#14A3B8" stroke-width="2.6" stroke-linecap="round" opacity="0">${SM('opacity', '0;1;0', 1.5, `begin="${k * .3}s"`)}</path>`).join('')}`;
      const think = `<rect x="-15" y="-13" width="30" height="26" rx="3" fill="#121212"/><g transform="translate(0 2.4) scale(1.1)">${leds('heart', '#FF3B30', '#3A2226')}</g>
        <rect x="-15" y="-13" width="30" height="26" rx="3" fill="#121212" opacity="0">${SM('opacity', '0;0;.85;0', 1.6, 'keyTimes="0;.5;.75;1"')}</rect>`;
      const act = `<g>${`<animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2s" repeatCount="indefinite"/>`}<circle r="15" fill="#1B1D22"/><circle r="9" fill="#F08A24"/>${[0, 60, 120].map(a => `<rect x="-1.6" y="-14" width="3.2" height="28" rx="1.6" fill="#1B1D22" transform="rotate(${a})"/>`).join('')}<circle r="3.4" fill="#fff"/></g>`;
      return tSvg(228, `<circle cx="${C[0]}" cy="${C[1]}" r="${R}" fill="none" stroke="#C9D6FB" stroke-width="4" stroke-dasharray="8 8" class="ta-dash"/>${chev(-30)}${chev(90)}${chev(210)}
        ${bot(160, 116, 0, .82, { leds: 'happy' })}
        <circle r="6.5" fill="#FFC531" stroke="#fff" stroke-width="2.4"><animateMotion dur="4.5s" repeatCount="indefinite" path="M160 36 A76 76 0 1 1 160 188 A76 76 0 1 1 160 36"/></circle>
        ${node(t1, '#14A3B8', sense, 0)}${node(t2, '#8B5CF6', think, 1.5)}${node(t3, '#F08A24', act, 3)}
        <g ${tA(.2, 'ta-in')}><text x="196" y="30" class="tat b" style="fill:#0E7C8C">${L('1. SENT', '1. SIENTE')}</text><text x="196" y="48" class="tat s">${L('sensors', 'sensores')}</text></g>
        <g ${tA(1.6, 'ta-in')}><text x="${t2[0].toFixed(0)}" y="202" text-anchor="middle" class="tat b">${L('2. PENSA', '2. PIENSA')}</text><text x="${t2[0].toFixed(0)}" y="220" text-anchor="middle" class="tat s">${L('programa', 'programa')}</text></g>
        <g ${tA(3, 'ta-in')}><text x="${t3[0].toFixed(0)}" y="202" text-anchor="middle" class="tat b">${L('3. ACTUA', '3. ACTÚA')}</text><text x="${t3[0].toFixed(0)}" y="220" text-anchor="middle" class="tat s">${L('motors', 'motores')}</text></g>`);
    },
    // robots de cada dia: l'aspirador que esquiva la cadira, el braç de la fàbrica i el vehicle de Mart
    k1life() {
      const card = (x, i, bg, art, lab) => `<g ${tA(.2 + i * .5, 'ta-in')}><rect x="${x}" y="10" width="98" height="196" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <clipPath id="k1lc${i}"><rect x="${x + 6}" y="16" width="86" height="128" rx="11"/></clipPath><g clip-path="url(#k1lc${i})"><rect x="${x + 6}" y="16" width="86" height="128" fill="${bg}"/><g transform="translate(${x + 6} 16)">${art}</g></g>
        <text x="${x + 49}" y="168" text-anchor="middle" class="tat s">${lab}</text>
        <g transform="translate(${x + 49} 188)">${['#14A3B8', '#8B5CF6', '#F08A24'].map((c, k) => `<circle cx="${(k - 1) * 16}" r="5.5" fill="${c}"/>`).join('')}</g></g>`;
      // aspirador: avança cap a la pota, la nota, gira i se'n va
      const vac = `${[0, 1, 2, 3].map(k => `<rect x="0" y="${k * 32}" width="86" height="31" fill="${k % 2 ? '#E8C894' : '#EED3A5'}"/>`).join('')}<circle cx="43" cy="22" r="8" fill="#6B4A2E"/><circle cx="43" cy="22" r="4.5" fill="#8A6440"/>
        <text x="43" y="52" text-anchor="middle" class="tat b" style="fill:#EF5A5A" opacity="0">!${SM('opacity', '0;0;1;1;0;0', 4, 'keyTimes="0;.33;.36;.5;.53;1"')}</text>
        <g><animateMotion dur="4s" repeatCount="indefinite" rotate="auto" keyTimes="0;.35;.5;1" keyPoints="0;.42;.5;1" calcMode="linear" path="M43 120 L43 66 Q43 58 51 58 L100 58"/>
          <g transform="rotate(90)"><circle r="15" fill="#E7EAF2" stroke="#7B8496" stroke-width="2"/><path d="M-11 -9a14 14 0 0 1 22 0" stroke="#3D4658" stroke-width="3.4" fill="none"/><circle r="5" fill="#9AA3B5"/><circle cy="-11" r="1.8" fill="#14A3B8"/></g></g>`;
      // braç robot: la base, dues articulacions que giren i una caixa a la cinta
      const arm = `<rect x="0" y="104" width="86" height="24" fill="#B8C2D8"/><rect x="0" y="104" width="86" height="4" fill="#8E9AB4"/>
        <g><animateTransform attributeName="transform" type="translate" values="-20 0;70 0" dur="3s" repeatCount="indefinite"/><rect x="0" y="90" width="16" height="14" rx="2" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="1.6"/></g>
        <rect x="14" y="88" width="22" height="16" rx="3" fill="#3D4658"/>
        <g transform="translate(25 88)"><g><animateTransform attributeName="transform" type="rotate" values="-25;20;-25" dur="3s" repeatCount="indefinite"/>
          <rect x="-4" y="-48" width="8" height="50" rx="4" fill="#F08A24"/><circle r="6" fill="#1B2240"/>
          <g transform="translate(0 -46)"><g><animateTransform attributeName="transform" type="rotate" values="70;110;70" dur="3s" repeatCount="indefinite"/><rect x="-3.5" y="-38" width="7" height="40" rx="3.5" fill="#FFC531"/><circle r="5" fill="#1B2240"/>
            <g transform="translate(0 -38)"><path d="M-7 0v-8M7 0v-8M-7 0h14" stroke="#1B2240" stroke-width="3.2" stroke-linecap="round"/></g></g></g></g></g>`;
      // vehicle robot a Mart: terra vermell, sis rodes i la càmera
      const mars = `<rect x="0" y="0" width="86" height="128" fill="#2A1B3D"/>${[[12, 14], [60, 24], [36, 8], [76, 44], [20, 40]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="1.2" fill="#fff" opacity=".8"/>`).join('')}<circle cx="68" cy="30" r="7" fill="#F2B21B" opacity=".55"/>
        <path d="M0 96 Q20 86 40 94 T86 90 V128 H0Z" fill="#C2552E"/><path d="M0 108 Q30 100 56 108 T86 106 V128 H0Z" fill="#A3431F"/><circle cx="66" cy="112" r="4" fill="#7E3216"/>
        <g><animateTransform attributeName="transform" type="translate" values="-6 0;10 0;-6 0" dur="5.5s" repeatCount="indefinite"/>
          <rect x="18" y="70" width="44" height="14" rx="3" fill="#E6E8EE" stroke="#7B8496" stroke-width="1.6"/><rect x="24" y="64" width="22" height="7" rx="2" fill="#3D7BF4"/>
          <path d="M54 70V50" stroke="#7B8496" stroke-width="3"/><rect x="48" y="44" width="14" height="8" rx="2" fill="#3D4658"/><circle cx="58" cy="48" r="2" fill="#14A3B8"/>
          ${[24, 40, 56].map(cx => `<circle cx="${cx}" cy="90" r="6.5" fill="#1B1D22"/><circle cx="${cx}" cy="90" r="2.4" fill="#9AA3B5"/>`).join('')}<path d="M24 84L40 80L56 84" stroke="#7B8496" stroke-width="2" fill="none"/></g>`;
      return tSvg(214, `${card(6, 0, '#EED3A5', vac, L('Aspirador', 'Aspirador'))}${card(111, 1, '#E3EAF8', arm, L('Fàbrica', 'Fábrica'))}${card(216, 2, '#2A1B3D', mars, L('Mart', 'Marte'))}`);
    },
    // les parts del Maqueen Lite, una a una
    k1parts() {
      const cx = 98, cy = 120, s = 2.1, X = v => cx + v * s, Y = v => cy + v * s;
      const call = (t, ty, px, py, l1, l2) => `<g ${tA(t, 'ta-in')}><path d="M190 ${ty - 5}H${px + 16}L${px} ${py}" fill="none" stroke="#2F5BEA" stroke-width="2.4" stroke-dasharray="5 4"/><circle cx="${px}" cy="${py}" r="4.5" fill="#FFC531" stroke="#2F5BEA" stroke-width="2"/>
        <text x="196" y="${ty}" class="tat b">${l1}</text>${l2 ? `<text x="196" y="${ty + 17}" class="tat s">${l2}</text>` : ''}</g>`;
      const waves = [0, 1, 2].map(k => `<path d="M${X(-11 - k * 4)} ${Y(-34 - k * 5)}q${(11 + k * 4) * s} -${(6 + k * 2) * s} ${(22 + k * 8) * s} 0" fill="none" stroke="#14A3B8" stroke-width="2.6" stroke-linecap="round" opacity="0">${SM('opacity', '0;1;0', 1.5, `begin="${k * .3}s"`)}</path>`).join('');
      const blink = `<g opacity="0">${SM('opacity', '0;1;1;0', 2.2, 'keyTimes="0;.15;.7;1"')}${leds('heart')}</g><g>${SM('opacity', '.3;1;.3', 1.2)}${[-3, 0, 3].map(d => `<circle cx="${d}" cy="-18.4" r="1.1" fill="#2EE6F0"/>`).join('')}</g>`;
      return tSvg(222, `<g ${tA(.1, 'ta-fade')}>${pill(46, 24, 84, '8 × 8,5 cm', '#20306A')}</g>${waves}
        ${bot(cx, cy, 0, s, { extra: blink })}
        ${call(.4, 40, X(7), Y(-26.5), L('Ultrasons', 'Ultrasonidos'), L('dos «ulls»', 'dos «ojos»'))}
        ${call(1, 86, X(13.5), Y(-17.5), L('Llums', 'Luces'), '')}
        ${call(1.6, 118, X(10), Y(-4), 'micro:bit', L('el cervell', 'el cerebro'))}
        ${call(2.2, 164, X(25), Y(8), L('2 motors', '2 motores'), L('amb rodes', 'con ruedas'))}
        <g ${tA(2.8, 'ta-in')}><text x="${cx}" y="214" text-anchor="middle" class="tat s">${L('A sota: 3 sensors de línia', 'Debajo: 3 sensores de línea')}</text></g>`);
    },
    // la velocitat del bloc i els centímetres que fa cada segon (les dades del simulador i del Maqueen real)
    k1speed() {
      const V = [[0, 0, '0'], [30, 0, '0'], [60, 3.9, '≈4'], [100, 9.1, '≈9'], [150, 15.6, '≈15'], [255, 29.2, '≈30']], base = 176, k = 4.05, x0 = 62, dx = 46;
      const bars = V.map(([n, v, lab], i) => { const x = x0 + i * dx, h = Math.round(v * k), c = ['#C9D6FB', '#C9D6FB', '#9DB5F8', '#6E90F2', '#3D6BEB', '#2347C8'][i], b = (.4 + i * .3).toFixed(2);
        return `<rect x="${x - 15}" y="${base}" width="30" height="0" rx="5" fill="${c}">${SM('height', `0;${h};${h};0`, 5.5, `keyTimes="0;.14;.9;1" begin="${b}s"`)}${SM('y', `${base};${base - h};${base - h};${base}`, 5.5, `keyTimes="0;.14;.9;1" begin="${b}s"`)}</rect>
          <text x="${x}" y="${base - h - 7}" text-anchor="middle" class="tat ${i === 5 ? 'b' : 's'}" ${tA(+b + .7, 'ta-fade')}>${lab}</text>
          <text x="${x}" y="${base + 20}" text-anchor="middle" class="tat s">${n}</text>`; }).join('');
      return tSvg(222, `<text x="160" y="22" text-anchor="middle" class="tat s">${L('cm que avança cada segon', 'cm que avanza cada segundo')}</text>
        <g ${tA(.1, 'ta-fade')}><rect x="36" y="${base - 74}" width="98" height="74" rx="10" fill="#FDEBEB"/><text x="85" y="${base - 52}" text-anchor="middle" class="tat s" style="fill:#C0392B">${L('zona', 'zona')}</text><text x="85" y="${base - 35}" text-anchor="middle" class="tat s" style="fill:#C0392B">${L('morta', 'muerta')}</text></g>
        <path d="M30 ${base}H312" stroke="#20306A" stroke-width="2.6" stroke-linecap="round"/>${bars}
        <text x="160" y="217" text-anchor="middle" class="tat s">${L('velocitat del bloc (0-255)', 'velocidad del bloque (0-255)')}</text>`);
    },
    // la zona morta: a velocitat 20 el motor brunzeix però el robot no es mou; a 80 sí que avança
    k1dead() {
      const lane = (y, n, col) => `<rect x="10" y="${y - 32}" width="300" height="64" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>${pill(46, y, 58, n, col, 'tat w b')}
        ${[0, 1, 2, 3, 4, 5].map(k => `<path d="M${100 + k * 40} ${y + 26}v6" stroke="#B8C2D8" stroke-width="2"/>`).join('')}`;
      const shake = `<g><animateTransform attributeName="transform" type="translate" values="0 0;1.4 0;-1.4 0;0 0" dur=".18s" repeatCount="indefinite"/>${bot(112, 50, 90, .78)}</g>
        ${[0, 1].map(k => `<path d="M${98 + k * 30} ${k ? 74 : 26}l4 -4l4 4l4 -4l4 4" fill="none" stroke="#EF5A5A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0">${SM('opacity', '0;1;0', .5, `begin="${k * .25}s"`)}</path>`).join('')}`;
      const go = `<path d="M112 146H290" stroke="#1FA463" stroke-width="3" stroke-dasharray="3 6" opacity=".35"/><g><animateTransform attributeName="transform" type="translate" values="0 0;150 0;150 0" keyTimes="0;.8;1" dur="5.5s" repeatCount="indefinite"/>${bot(112, 146, 90, .78)}</g>`;
      return tSvg(214, `${lane(50, '20', '#EF5A5A')}${shake}<g ${tA(.6, 'ta-pop')}><text x="300" y="56" text-anchor="end" class="tat b" style="fill:#C0392B">${L('no es mou!', '¡no se mueve!')}</text></g>
        ${lane(146, '80', '#1FA463')}${go}<g ${tA(1.4, 'ta-fade')}><text x="300" y="104" text-anchor="end" class="tat s" style="fill:#178A52">${L('sí que avança', 'sí avanza')}</text></g>
        <text x="160" y="206" text-anchor="middle" class="tat s" ${tA(2.2, 'ta-fade')}>${L('Menys de 30: zona morta', 'Menos de 30: zona muerta')}</text>`);
    },
    // com gira un robot de dues rodes: igual → recte; esquerra endavant i dreta enrere → dreta; a l'inrevés → esquerra
    k1spin() {
      const panel = (x, i, l1, l2, lf, rf, anim) => { const cx = x + 50;
        return `<g ${tA(.2 + i * .6, 'ta-in')}><rect x="${x}" y="30" width="100" height="148" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
          ${i ? `<path d="M${cx + (i === 1 ? -34 : 34)} 64 A40 40 0 0 ${i === 1 ? 1 : 0} ${cx + (i === 1 ? 34 : -34)} 64" fill="none" stroke="#C9D6FB" stroke-width="3.4" stroke-dasharray="5 5" class="ta-dash"/>` : ''}
          <g transform="translate(${cx} 108)"><g>${anim}${bot(0, 0, 0, .78)}${warr(-32, lf)}${warr(32, rf)}</g></g>
          <text x="${cx}" y="196" text-anchor="middle" class="tat b">${l1}</text>${l2 ? `<text x="${cx}" y="213" text-anchor="middle" class="tat s">${l2}</text>` : ''}</g>`; };
      const straight = `<animateTransform attributeName="transform" type="translate" values="0 26;0 -26" dur="2.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="2.2s" repeatCount="indefinite"/>`;
      const rot = d => `<animateTransform attributeName="transform" type="rotate" from="0" to="${d}" dur="4s" repeatCount="indefinite"/>`;
      return tSvg(220, `<g ${tA(.1, 'ta-fade')}><g transform="translate(70 14) scale(.62)">${warr(0, true)}</g><text x="82" y="19" class="tat s">${L('endavant', 'adelante')}</text><g transform="translate(196 14) scale(.62)">${warr(0, false)}</g><text x="208" y="19" class="tat s">${L('enrere', 'atrás')}</text></g>
        ${panel(6, 0, L('Recte', 'Recto'), '', true, true, straight)}${panel(110, 1, L('Gira a', 'Gira a'), L('la dreta', 'la derecha'), true, false, rot(360))}${panel(214, 2, L('Gira a', 'Gira a'), L("l'esquerra", 'la izquierda'), false, true, rot(-360))}`);
    },
    // calibrar: prova el gir, mesura l'angle, ajusta l'espera i torna-hi
    k1calib() {
      const ox = 70, oy = 178, R = 100, pt = (a, r = R) => [ox + r * Math.sin(a * Math.PI / 180), oy - r * Math.cos(a * Math.PI / 180)];
      const ticks = Array.from({ length: 10 }, (_, k) => { const a = k * 10, [x1, y1] = pt(a, R - (k % 3 ? 8 : 14)), [x2, y2] = pt(a); return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="#20306A" stroke-width="${k % 3 ? 1.6 : 2.6}"/>`; }).join('');
      const labs = [0, 30, 60, 90].map(a => { const [x, y] = pt(a, R + 14); return `<text x="${x.toFixed(0)}" y="${(y + 5).toFixed(0)}" text-anchor="middle" class="tat s">${a}°</text>`; }).join('');
      const [m80x, m80y] = pt(80, R - 22), [m90x, m90y] = pt(90, R - 22);
      const step = (y, n, col, t1, t2, t) => `<g ${tA(t, 'ta-in')}><rect x="204" y="${y}" width="110" height="50" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="222" cy="${y + 25}" r="11" fill="${col}"/><text x="222" y="${y + 30}" text-anchor="middle" class="tat w s">${n}</text>
        <text x="239" y="${y + 21}" class="tat s">${t1}</text><text x="239" y="${y + 39}" class="tat b">${t2}</text></g>`;
      return tSvg(214, `<path d="M${ox} ${oy - R}A${R} ${R} 0 0 1 ${ox + R} ${oy}L${ox} ${oy}Z" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/>${ticks}${labs}
        <path d="M${ox} ${oy}L${ox + R - 4} ${oy}" stroke="#1FA463" stroke-width="3" stroke-dasharray="6 5"/>
        <g transform="translate(${ox} ${oy})"><g><animateTransform attributeName="transform" type="rotate" values="0;0;80;80;0;0;90;90;0" keyTimes="0;.09;.25;.4;.47;.55;.71;.95;1" dur="5.5s" repeatCount="indefinite"/>
          <path d="M0 0V-${R - 26}" stroke="#EF5A5A" stroke-width="3.4" stroke-linecap="round"/>${bot(0, 0, 0, .74)}</g></g>
        <g ${tA(1.3, 'ta-fade')}>${ko(m80x, m80y, 9)}</g><g ${tA(3.9, 'ta-pop')}>${ok(m90x + 2, m90y + 18, 10)}</g>
        ${step(16, 1, '#EF5A5A', '600 ms', '→ 80°', .5)}${step(78, 2, '#F08A24', L('ajusta', 'ajusta'), '660 ms', 2)}${step(140, 3, '#1FA463', L('torna-hi', 'otra vez'), '→ 90° ✓', 3.4)}`);
    },
    // del simulador al robot de veritat: MakeCode → cable USB → micro:bit → a la pista!
    k1usb() {
      const lap = `<rect x="14" y="40" width="118" height="80" rx="8" fill="#20306A"/><rect x="20" y="46" width="106" height="68" rx="4" fill="#F5F8FF"/>
        <rect x="28" y="54" width="54" height="11" rx="5" fill="#1FA463"/><rect x="34" y="69" width="76" height="10" rx="4" fill="#3D7BF4"/><rect x="34" y="83" width="58" height="10" rx="4" fill="#F2B21B"/><rect x="34" y="97" width="66" height="10" rx="4" fill="#3D7BF4"/>
        <path d="M4 122h138l-10 10H14z" fill="#9AA3B5"/><rect x="58" y="124" width="30" height="4" rx="2" fill="#7B8496"/>`;
      const cable = 'M142 92 C170 92 176 150 206 150 S226 128 226 114';
      return tSvg(214, `${lap}
        <path d="${cable}" fill="none" stroke="#3D4658" stroke-width="4.6" stroke-linecap="round">${SM('opacity', '1;1;0;0;1', 5.5, 'keyTimes="0;.5;.56;.96;1"')}</path>
        <g opacity="0">${SM('opacity', '0;1;1;0;0', 5.5, 'keyTimes="0;.06;.4;.44;1"')}<rect x="-11" y="-8" width="22" height="16" rx="4" fill="#FFC531" stroke="#B57A00" stroke-width="1.6"/><path d="M-5 -3l-3 3l3 3M5 -3l3 3l-3 3" stroke="#6B4A00" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <animateMotion dur="5.5s" repeatCount="indefinite" keyTimes="0;.06;.4;1" keyPoints="0;0;1;1" calcMode="linear" path="${cable}"/></g>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 -64;0 -64;0 0" keyTimes="0;.6;.84;.97;1" dur="5.5s" repeatCount="indefinite"/>
          ${bot(256, 150, 0, 1.05, { extra: `<g opacity="0">${SM('opacity', '0;0;1;1;0', 5.5, 'keyTimes="0;.42;.46;.97;1"')}${leds('arrow')}</g>` })}</g>
        <path d="M226 192H300" stroke="#121418" stroke-width="5" stroke-linecap="round" opacity=".85"/>
        <g ${tA(.2, 'ta-in')}>${pill(73, 160, 108, '1. MakeCode', '#2F5BEA')}</g>
        <g ${tA(1.2, 'ta-in')}>${pill(166, 190, 64, '2. USB', '#3D4658')}</g>
        <g ${tA(3.2, 'ta-in')}>${pill(262, 22, 92, L('3. Prova!', '3. ¡Prueba!'), '#1FA463')}</g>`);
    },
    // robots i persones: el robot fa la feina, la persona decideix (i en respon)
    k1ethic() {
      const person = (x, y) => `<g transform="translate(${x} ${y})"><circle cx="0" cy="-58" r="17" fill="#F2C9A0"/><path d="M-17 -64q2 -16 17 -16t17 16q-6 -8 -17 -8t-17 8z" fill="#5A3A22"/>
        <circle cx="-6" cy="-58" r="2" fill="#1B2240"/><circle cx="6" cy="-58" r="2" fill="#1B2240"/><path d="M-6 -50q6 5 12 0" stroke="#1B2240" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M-26 0v-18q0 -20 26 -20t26 20v18z" fill="#8B5CF6"/></g>`;
      const box = `<g><animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="1.6s" repeatCount="indefinite"/><rect x="58" y="44" width="44" height="30" rx="4" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="1.8"/><path d="M58 56h44" stroke="#7A4A1E" stroke-width="1.4"/></g>`;
      return tSvg(214, `<rect x="10" y="150" width="300" height="10" rx="5" fill="#DCE4FA"/>
        <g ${tA(.1, 'ta-in')}>${box}${bot(80, 112, 0, 1.05)}</g>
        <g ${tA(.6, 'ta-in')}>${person(236, 150)}</g>
        <g ${tA(1.4, 'ta-pop')}><path d="M190 30h92a12 12 0 0 1 12 12v22a12 12 0 0 1 -12 12h-40l-12 12v-12h-40a12 12 0 0 1 -12 -12v-22a12 12 0 0 1 12 -12z" fill="#fff" stroke="#8B5CF6" stroke-width="2.4"/>
          <text x="236" y="60" text-anchor="middle" class="tat b" style="fill:#5B32C8">${L('Per a què?', '¿Para qué?')}</text></g>
        <g ${tA(.4, 'ta-in')}>${pill(80, 186, 132, L('fa la feina', 'hace el trabajo'), '#2F5BEA')}</g>
        <g ${tA(1, 'ta-in')}>${pill(236, 186, 132, L('decideix', 'decide'), '#8B5CF6')}</g>`);
    },
    // les piles: 3 AA que es gasten i, gastades, al contenidor de piles (mai a la brossa)
    k1bat() {
      const cell = (x, i) => `<g transform="translate(${x} 58)"><rect x="0" y="0" width="34" height="96" rx="7" fill="#1B2240"/><rect x="11" y="-7" width="12" height="8" rx="2" fill="#9AA3B5"/>
        <rect x="5" y="6" width="24" height="84" rx="4" fill="#2A3558"/>
        <rect x="5" y="6" width="24" height="84" rx="4" fill="#1FA463"><animate attributeName="height" values="84;84;20;20;84" keyTimes="0;.15;.6;.95;1" dur="6s" repeatCount="indefinite"/><animate attributeName="y" values="6;6;70;70;6" keyTimes="0;.15;.6;.95;1" dur="6s" repeatCount="indefinite"/><animate attributeName="fill" values="#1FA463;#1FA463;#EF5A5A;#EF5A5A;#1FA463" keyTimes="0;.15;.6;.95;1" dur="6s" repeatCount="indefinite"/></rect>
        <text x="17" y="118" text-anchor="middle" class="tat s">AA</text></g>`;
      const bin = `<g transform="translate(236 70)"><rect x="-34" y="0" width="68" height="84" rx="8" fill="#F08A24"/><rect x="-40" y="-10" width="80" height="14" rx="5" fill="#C96A12"/><rect x="-16" y="-8" width="32" height="5" rx="2.5" fill="#1B2240"/>
        <g transform="translate(0 40)" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"><path d="M-14 8l8 -16h12"/><path d="M14 8h-16"/><path d="M6 -8l8 16"/></g>
        <text x="0" y="78" text-anchor="middle" class="tat b" style="fill:#fff">${L('PILES', 'PILAS')}</text></g>`;
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${cell(20, 0)}${cell(62, 1)}${cell(104, 2)}</g>
        <g ${tA(.5, 'ta-fade')}><text x="79" y="30" text-anchor="middle" class="tat b">3 × AA</text></g>
        <g ${tA(1.6, 'ta-in')}><path d="M150 106h40" stroke="#3D4658" stroke-width="4" stroke-linecap="round" stroke-dasharray="6 6" class="ta-dash"/><path d="M184 98l10 8l-10 8" fill="none" stroke="#3D4658" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2, 'ta-pop')}>${bin}</g>
        <g ${tA(2.6, 'ta-in')}>${pill(236, 196, 150, L('mai a la brossa', 'nunca a la basura'), '#1FA463')}</g>`);
    }
  };
})());
