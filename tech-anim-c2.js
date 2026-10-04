/* Numi Tech · Tech Robòtica · animacions de teoria (TANI). Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */

/* ── unitat 1 ── */
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
      const V = [[0, 0, '0'], [30, 0, '0'], [60, 3.9, '3,9'], [100, 9.1, '9'], [150, 15.6, '15,6'], [255, 29.2, '29']], base = 176, k = 4.05, x0 = 62, dx = 46;
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
        ${step(16, 1, '#EF5A5A', '590 ms', '→ 80°', .5)}${step(78, 2, '#F08A24', L('ajusta', 'ajusta'), '660 ms', 2)}${step(140, 3, '#1FA463', L('torna-hi', 'otra vez'), '→ 90° ✓', 3.4)}`);
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
        <g ${tA(.2, 'ta-in')}>${pill(73, 160, 108, L('1. Programa', '1. Programa'), '#2F5BEA')}</g>
        <g ${tA(1.2, 'ta-in')}>${pill(166, 190, 64, '2. USB', '#3D4658')}</g>
        <g ${tA(3.2, 'ta-in')}>${pill(262, 22, 92, L('3. Prova!', '3. ¡Prueba!'), '#1FA463')}</g>`);
    }
  };
})());

/* ── unitat 2 ── */
/* Tech Robòtica · unitat 2 «Moviment precís» · animacions de teoria (TANI) */
Object.assign(TANI, (() => {
  // el Maqueen Lite V5 vist des de dalt, mirant amunt: rodes negres, cos fosc amb vora daurada, micro:bit amb LEDs i ultrasons blaus
  const FACE = '00000 01010 00000 10001 01110';
  const mq = (x, y, a = 0, s = 1) => `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})">
    <rect x="-28" y="-14" width="9" height="27" rx="3.5" fill="#17181C"/><rect x="19" y="-14" width="9" height="27" rx="3.5" fill="#17181C"/>
    <path d="M-28 -8h9M-28 -2h9M-28 4h9M-28 10h9M19 -8h9M19 -2h9M19 4h9M19 10h9" stroke="#3B3D46" stroke-width="1.4"/>
    <rect x="-20" y="-22" width="40" height="44" rx="10" fill="#262B3B" stroke="#D9A93A" stroke-width="2.4"/>
    <rect x="-16" y="-34" width="32" height="12" rx="3.5" fill="#2F7BFF" stroke="#1C4FB8" stroke-width="1.4"/>
    <circle cx="-8" cy="-28" r="4.6" fill="#D9DDE5" stroke="#8A93A6" stroke-width="1.3"/><circle cx="8" cy="-28" r="4.6" fill="#D9DDE5" stroke="#8A93A6" stroke-width="1.3"/>
    <circle cx="-8" cy="-28" r="2" fill="#5B6476"/><circle cx="8" cy="-28" r="2" fill="#5B6476"/>
    <rect x="-13" y="-13" width="26" height="24" rx="3" fill="#0F1013" stroke="#3B3E48" stroke-width="1"/>
    ${FACE.split(' ').map((r, j) => [...r].map((c, i) => `<circle cx="${-8 + i * 4}" cy="${-9 + j * 4}" r="1.3" fill="${c === '1' ? '#FF3B30' : '#3A1F24'}"/>`).join('')).join('')}</g>`;
  const LOOP = 'dur="5.5s" repeatCount="indefinite"';
  // un traç que es dibuixa entre els instants a i b del bucle de 5,5 s (en fracció) i es queda dibuixat
  const drw = (tag, attrs, a, b) => `<${tag} ${attrs} pathLength="1" stroke-dasharray="1 1"><animate attributeName="stroke-dashoffset" values="1;1;0;0" keyTimes="0;${a};${b};1" ${LOOP}/></${tag}>`;
  // una «pastilla» de text amb fons
  const pill = (x, y, w, txt, col, t, cls = 'ta-pop') => `<g ${tA(t, cls)}><rect x="${x - w / 2}" y="${y - 17}" width="${w}" height="26" rx="13" fill="${col}"/><text x="${x}" y="${y + 1}" text-anchor="middle" class="tat w s">${txt}</text></g>`;
  return {
    // distància = velocitat × temps: el robot avança per un regle i el rellotge compta els segons
    k2dvt() {
      const x0 = 34, k = 6.4;   // píxels per cm al regle
      const ticks = [0, 5, 10, 15, 20, 25, 30, 35, 40].map(c => `<path d="M${x0 + c * k} 150v${c % 10 ? 7 : 12}" stroke="#56628A" stroke-width="2"/>${c % 10 ? '' : `<text x="${x0 + c * k}" y="178" text-anchor="middle" class="tat s">${c}</text>`}`).join('');
      const d = 31 * k;
      const clock = v => `<text x="64" y="86" text-anchor="middle" class="tat b" opacity="0">${v} s<animate attributeName="opacity" values="${v === 0 ? '1;1;0;0;0;0;1' : v === 1 ? '0;0;1;1;0;0;0' : '0;0;0;0;1;1;0'}" keyTimes="0;.42;.425;.74;.745;.98;1" ${LOOP}/></text>`;
      return tSvg(214, `<rect x="12" y="8" width="296" height="44" rx="14" fill="#F1ECFF" stroke="#C9B8FA" stroke-width="2"/>
        <text x="82" y="37" text-anchor="middle" class="tat b" ${tA(.3)}>15,6 cm/s</text><text x="168" y="37" text-anchor="middle" class="tat b" ${tA(1.6)}>× 2 s</text><text x="250" y="37" text-anchor="middle" class="tat b" style="fill:#6D3FD8" ${tA(4.2)}>= 31 cm</text>
        <circle cx="64" cy="80" r="21" fill="#fff" stroke="#8B5CF6" stroke-width="3"/><path d="M58 57h12" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round"/>${[0, 1, 2].map(clock).join('')}
        <text x="98" y="86" class="tat s" ${tA(.3, 'ta-fade')}>${L('velocitat 150 durant 2000 ms', 'velocidad 150 durante 2000 ms')}</text>
        <rect x="16" y="112" width="290" height="38" rx="8" fill="#F8F7F2" stroke="#E4E1D6" stroke-width="1.5"/>
        <rect x="${x0}" y="129" height="4" rx="2" fill="#2F5BEA"><animate attributeName="width" values="0;0;${d};${d}" keyTimes="0;.1;.75;1" ${LOOP}/></rect>
        <path d="M${x0} 150H${x0 + 40 * k}" stroke="#56628A" stroke-width="2"/>${ticks}<text x="${x0 + 40 * k + 9}" y="155" class="tat s">cm</text>
        <g ${tA(2.4)}><path d="M${x0 + 15.6 * k} 112v-8" stroke="#F08A24" stroke-width="3"/><text x="${x0 + 15.6 * k}" y="102" text-anchor="middle" class="tat s" style="fill:#C2610F">1 s</text></g>
        <g ${tA(4.2)}><path d="M${x0 + d} 112v-8" stroke="#F08A24" stroke-width="3"/><text x="${x0 + d}" y="102" text-anchor="middle" class="tat s" style="fill:#C2610F">2 s</text></g>
        <g><animateMotion values="${x0},131;${x0},131;${x0 + d},131;${x0 + d},131" keyTimes="0;.1;.75;1" calcMode="linear" ${LOOP}/>${mq(0, 0, 90, .42)}</g>
        <text x="160" y="208" text-anchor="middle" class="tat s" ${tA(4.4, 'ta-fade')}>${L('Doble de temps → doble de distància', 'Doble de tiempo → doble de distancia')}</text>`);
    },
    // la gràfica velocitat-temps: un rectangle (amb la inèrcia a les vores) i l'àrea és la distància
    k2graf() {
      const X = s => 56 + s * 82, Y = v => 172 - v * 6;   // 0-3 s · 0-20 cm/s
      const curve = `M${X(0)} ${Y(0)} C${X(.03)} ${Y(9)} ${X(.06)} ${Y(15)} ${X(.12)} ${Y(15.6)} L${X(2)} ${Y(15.6)} C${X(2.04)} ${Y(9)} ${X(2.08)} ${Y(1)} ${X(2.14)} ${Y(0)}`;
      return tSvg(214, `<text x="160" y="22" text-anchor="middle" class="tat s">${L('Velocitat 150 durant 2 segons', 'Velocidad 150 durante 2 segundos')}</text>
        <path d="M${X(0)} ${Y(0)}H${X(3.1)}M${X(0)} ${Y(0)}V${Y(21)}" stroke="#20306A" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M${X(3.1) - 8} ${Y(0) - 5}l8 5l-8 5M${X(0) - 5} ${Y(21) + 8}l5 -8l5 8" fill="none" stroke="#20306A" stroke-width="2.5" stroke-linejoin="round"/>
        ${[0, 1, 2, 3].map(s => `<path d="M${X(s)} ${Y(0)}v6" stroke="#20306A" stroke-width="2"/><text x="${X(s)}" y="${Y(0) + 22}" text-anchor="middle" class="tat s">${s}</text>`).join('')}
        <text x="${X(3.1) + 4}" y="${Y(0) - 8}" class="tat s">s</text>
        ${[0, 10, 20].map(v => `<path d="M${X(0) - 6} ${Y(v)}h6" stroke="#20306A" stroke-width="2"/><text x="${X(0) - 10}" y="${Y(v) + 5}" text-anchor="end" class="tat s">${v}</text>`).join('')}
        <text x="${X(0) + 10}" y="${Y(21) + 2}" class="tat s">cm/s</text>
        <path d="${curve} Z" fill="#8B5CF6" fill-opacity=".22" ${tA(2.2, 'ta-fade')}/>
        ${drw('path', `d="${curve}" fill="none" stroke="#6D3FD8" stroke-width="4.5" stroke-linejoin="round"`, .05, .35)}
        <path d="M${X(2.35)} ${Y(15.6)}h-10" stroke="#6D3FD8" stroke-width="2" stroke-dasharray="3 3"/><text x="${X(2.42)}" y="${Y(15.6) + 5}" class="tat s" style="fill:#6D3FD8">15,6</text>
        <g ${tA(1.3)}><path d="M${X(.78)} ${Y(18.2)}Q${X(.3)} ${Y(19.5)} ${X(.12) + 3} ${Y(15.6) - 3}" fill="none" stroke="#F08A24" stroke-width="2.5" stroke-linecap="round"/><circle cx="${X(.12) + 2}" cy="${Y(15.6) - 2}" r="3.5" fill="#F08A24"/><text x="${X(.82)}" y="${Y(18) + 4}" class="tat s" style="fill:#C2610F">${L('inèrcia: ~0,1 s', 'inercia: ~0,1 s')}</text></g>
        <g ${tA(2.6)}><text x="${X(1.07)}" y="${Y(8.6)}" text-anchor="middle" class="tat s" style="fill:#4A2A9E">${L('àrea = distància', 'área = distancia')}</text><text x="${X(1.07)}" y="${Y(5.6)}" text-anchor="middle" class="tat b" style="fill:#4A2A9E">15,6 × 2 ≈ 31 cm</text></g>`);
    },
    // calibrar: el robot de veritat fa una mica menys; es mesura, es calcula i s'ajusta el temps
    k2cal() {
      const lane = (y, lab, cm, col, t) => `<text x="14" y="${y + 6}" class="tat s">${lab}</text>
        <rect x="104" y="${y - 14}" width="206" height="28" rx="8" fill="#F8F7F2" stroke="#E4E1D6" stroke-width="1.5"/>
        <g><animateMotion values="118,${y};118,${y};${118 + cm * 5.6},${y};${118 + cm * 5.6},${y}" keyTimes="0;${t};${t + .3};1" calcMode="linear" dur="5.5s" repeatCount="indefinite"/>${mq(0, 0, 90, .36)}</g>
        <path d="M118 ${y + 20}h${cm * 5.6}" stroke="${col}" stroke-width="3" ${tA(1.9 + t * 4, 'ta-fade')}/><text x="${118 + cm * 5.6}" y="${y + 36}" text-anchor="middle" class="tat s" style="fill:${col}" ${tA(1.9 + t * 4, 'ta-fade')}>${cm} cm</text>`;
      return tSvg(214, `${lane(30, L('Simulador', 'Simulador'), 31, '#2F5BEA', .05)}${lane(88, L('Robot real', 'Robot real'), 28, '#E2574C', .1)}
        <g ${tA(3)}><rect x="14" y="140" width="292" height="30" rx="10" fill="#FDEBEB"/><text x="160" y="161" text-anchor="middle" class="tat">${L('Mesura: 28 cm ÷ 2 s = 14 cm/s', 'Mide: 28 cm ÷ 2 s = 14 cm/s')}</text></g>
        <g ${tA(3.8)}><rect x="14" y="178" width="292" height="30" rx="10" fill="#E7F7EE"/><text x="160" y="199" text-anchor="middle" class="tat">${L('Ajusta: 31 ÷ 14 ≈ 2,2 s → 2200 ms', 'Ajusta: 31 ÷ 14 ≈ 2,2 s → 2200 ms')}</text></g>`);
    },
    // girar un angle: a velocitat 100, un motor endavant i l'altre enrere, 90° en 590 ms
    k2ang() {
      const cx = 96, cy = 110, R = 72;
      const pt = (a, r) => [cx + Math.sin(a * Math.PI / 180) * r, cy - Math.cos(a * Math.PI / 180) * r];
      const ticks = [0, 30, 60, 90, 120, 150, 180].map(a => { const [x1, y1] = pt(a, R - 6), [x2, y2] = pt(a, R + 4), [lx, ly] = pt(a, R + 22); return `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="#56628A" stroke-width="2"/><text x="${lx}" y="${ly + 5}" text-anchor="middle" class="tat s">${a}°</text>`; }).join('');
      const wheel = (x, up) => `<g><path d="M${x} ${up ? 12 : -12}V${up ? -14 : 14}" stroke="${up ? '#2BD45A' : '#FF8A3D'}" stroke-width="4" stroke-linecap="round"/><path d="M${x - 5} ${up ? -8 : 8}l5 ${up ? -7 : 7}l5 ${up ? 7 : -7}" fill="none" stroke="${up ? '#2BD45A' : '#FF8A3D'}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>`;
      const rows = [['30°', '197 ms'], ['60°', '393 ms'], ['90°', '590 ms'], ['120°', '787 ms']];
      return tSvg(214, `<path d="M${cx} ${cy - R}A${R} ${R} 0 1 1 ${cx} ${cy + R}" fill="none" stroke="#DCE4FA" stroke-width="10"/>${ticks}
        <path d="M${cx} ${cy - R}A${R} ${R} 0 0 1 ${cx + R} ${cy}" pathLength="1" fill="none" stroke="#8B5CF6" stroke-width="10" stroke-dasharray="1 1"><animate attributeName="stroke-dashoffset" values="1;1;0;0" keyTimes="0;.15;.5;1" dur="5.5s" repeatCount="indefinite"/></path>
        <g><animateTransform attributeName="transform" type="rotate" values="0 ${cx} ${cy};0 ${cx} ${cy};90 ${cx} ${cy};90 ${cx} ${cy}" keyTimes="0;.15;.5;1" dur="5.5s" repeatCount="indefinite"/>
          <g transform="translate(${cx} ${cy}) scale(.8)">${mq(0, 0, 0, 1)}<g transform="translate(-24 0)">${wheel(0, true)}</g><g transform="translate(24 0)">${wheel(0, false)}</g></g></g>
        <text x="252" y="24" text-anchor="middle" class="tat s">${L('a velocitat 100', 'a velocidad 100')}</text>
        ${rows.map(([a, ms], i) => `<g ${tA(.5 + i * .5, 'ta-in')}><rect x="196" y="${36 + i * 36}" width="114" height="30" rx="10" fill="#fff" stroke="${i === 2 ? '#8B5CF6' : '#DCE4FA'}" stroke-width="2.5"/><text x="210" y="${57 + i * 36}" class="tat b">${a}</text><text x="300" y="${57 + i * 36}" text-anchor="end" class="tat s">${ms}</text></g>`).join('')}
        <text x="252" y="196" text-anchor="middle" class="tat s" ${tA(2.6, 'ta-fade')}>${L('≈ 6,5 ms per grau', '≈ 6,5 ms por grado')}</text>`);
    },
    // la regla dels 360°: triangle, quadrat i hexàgon, cada gir és 360° ÷ costats
    k2poly() {
      const shapes = [[3, 120, 64], [4, 90, 50], [6, 60, 32]];
      const card = ([n, ang, s], i) => {
        const cx = 56 + i * 104, cy = 82, Rr = s / (2 * Math.sin(Math.PI / n));
        // vèrtexs: el primer costat és horitzontal a baix, el robot gira a l'esquerra (com als reptes)
        const v = Array.from({ length: n }, (_, k) => { const a = Math.PI / 2 + Math.PI / n + k * 2 * Math.PI / n; return [cx + Rr * Math.cos(a), cy + Rr * Math.sin(a)]; }).reverse();
        const d = 'M' + v.map(p => p.map(c => c.toFixed(1)).join(' ')).join('L') + 'Z';
        // gir exterior al segon vèrtex: prolongació del costat i arc
        const [a1, b1] = v[0], [a2, b2] = v[1], [a3, b3] = v[2], ux = (a2 - a1) / s, uy = (b2 - b1) / s, wx = (a3 - a2) / s, wy = (b3 - b2) / s, r = 13;
        const ext = `<path d="M${a2} ${b2}l${ux * 24} ${uy * 24}" stroke="#F08A24" stroke-width="2.5" stroke-dasharray="4 3"/><path d="M${a2 + ux * r} ${b2 + uy * r}A${r} ${r} 0 0 0 ${a2 + wx * r} ${b2 + wy * r}" fill="none" stroke="#F08A24" stroke-width="3"/>`;
        const lab = [a2 + (ux + wx) * 20 + 8, b2 + (uy + wy) * 20 + 2];
        return `<g ${tA(.2 + i * .4, 'ta-in')}><rect x="${cx - 50}" y="10" width="100" height="166" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/></g>
          ${drw('path', `d="${d}" fill="#F1ECFF" stroke="#6D3FD8" stroke-width="3.5" stroke-linejoin="round"`, .1 + i * .08, .25 + i * .08)}
          <g ${tA(1.8 + i * .4)}>${ext}<text x="${lab[0]}" y="${lab[1]}" text-anchor="middle" class="tat s" style="fill:#C2610F">${ang}°</text></g>
          <g><animateMotion path="${d}" rotate="auto" dur="${2.2 + i * .6}s" repeatCount="indefinite"/>${mq(0, 0, 90, .2)}</g>
          <text x="${cx}" y="146" text-anchor="middle" class="tat b" ${tA(2.4 + i * .4, 'ta-fade')}>${n} × ${ang}°</text><text x="${cx}" y="166" text-anchor="middle" class="tat s" ${tA(2.8 + i * .4, 'ta-fade')}>= 360°</text>`;
      };
      return tSvg(214, `${shapes.map(card).join('')}<g ${tA(4)}><rect x="40" y="184" width="240" height="26" rx="13" fill="#6D3FD8"/><text x="160" y="202" text-anchor="middle" class="tat w s">${L('cada gir = 360° ÷ costats', 'cada giro = 360° ÷ lados')}</text></g>`);
    },
    // dues rodes a velocitats diferents: la de fora fa més camí i el robot gira cap a la lenta
    k2arc() {
      const arc = r => `M${190 - r} 204A${r} ${r} 0 0 1 190 ${204 - r}`;
      return tSvg(214, `<path d="${arc(120)}" fill="none" stroke="#DCE4FA" stroke-width="22" stroke-linecap="round"/>
        ${drw('path', `d="${arc(136)}" fill="none" stroke="#F08A24" stroke-width="4.5" stroke-linecap="round"`, .08, .6)}
        ${drw('path', `d="${arc(104)}" fill="none" stroke="#2F7BFF" stroke-width="4.5" stroke-linecap="round"`, .08, .6)}
        <g><animateMotion path="${arc(120)}" rotate="auto" keyPoints="0;0;1;1" keyTimes="0;.08;.6;1" calcMode="linear" dur="5.5s" repeatCount="indefinite"/>${mq(0, 0, 90, .5)}</g>
        <g ${tA(1)}><rect x="200" y="10" width="114" height="44" rx="10" fill="#FFF1E3" stroke="#F08A24" stroke-width="2"/><text x="257" y="28" text-anchor="middle" class="tat s" style="fill:#B4501A">${L('esquerra 150:', 'izquierda 150:')}</text><text x="257" y="46" text-anchor="middle" class="tat s" style="fill:#B4501A">${L('més camí', 'más camino')}</text></g>
        <g ${tA(1.5)}><rect x="200" y="122" width="114" height="44" rx="10" fill="#E8F0FF" stroke="#2F7BFF" stroke-width="2"/><text x="257" y="140" text-anchor="middle" class="tat s" style="fill:#1C4FB8">${L('dreta 100:', 'derecha 100:')}</text><text x="257" y="158" text-anchor="middle" class="tat s" style="fill:#1C4FB8">${L('menys camí', 'menos camino')}</text></g>
        <g ${tA(3.4)}><rect x="200" y="174" width="114" height="34" rx="12" fill="#6D3FD8"/><text x="257" y="196" text-anchor="middle" class="tat w s">${L('gira a la dreta', 'gira a la derecha')}</text></g>`);
    },
    // la mida del cercle: com més semblants són les velocitats, més gran és el cercle
    k2rad() {
      const P = [40, 104], c = [['200 · 100', 8, '#EF5A5A'], ['150 · 100', 13, '#F08A24'], ['200 · 150', 19.5, '#1FA463'], ['120 · 100', 27, '#2F7BFF']];
      return tSvg(214, `${c.map(([lab, r, col], i) => { const R = r * 3; return `${drw('circle', `cx="${P[0] + R}" cy="${P[1]}" r="${R}" fill="none" stroke="${col}" stroke-width="3.5" transform="rotate(180 ${P[0] + R} ${P[1]})"`, .05 + i * .1, .15 + i * .1)}
          <g ${tA(.6 + i * .6, 'ta-in')}><circle cx="226" cy="${30 + i * 42}" r="7" fill="${col}"/><text x="240" y="${30 + i * 42 + 5}" class="tat b">${lab}</text><text x="240" y="${30 + i * 42 + 23}" class="tat s">Ø ${String(r * 2).replace('.', ',')} cm</text></g>`; }).join('')}
        <g transform="translate(${P[0]} ${P[1]})">${mq(0, 0, 0, .34)}</g>
        <text x="160" y="206" text-anchor="middle" class="tat s" ${tA(3, 'ta-fade')}>${L('Velocitats més semblants → cercle més gran', 'Velocidades más parecidas → círculo más grande')}</text>`);
    },
    // descompondre un dibuix: la casa d'un sol traç es converteix en una taula de trams i girs
    k2art() {
      const v = [[30, 182], [30, 112], [65, 51.4], [100, 112], [100, 182], [30, 182]];
      const d = 'M' + v.map(p => p.join(' ')).join('L');
      const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      const off = [[-14, 0], [-12, -6], [12, -6], [14, 0], [0, 14]];
      const nums = v.slice(0, 5).map((p, i) => { const [mx, my] = mid(p, v[i + 1]); return `<g ${tA(.9 + i * .45)}><circle cx="${mx + off[i][0]}" cy="${my + off[i][1]}" r="10" fill="#6D3FD8"/><text x="${mx + off[i][0]}" y="${my + off[i][1] + 5}" text-anchor="middle" class="tat w s">${i + 1}</text></g>`; }).join('');
      const rows = [[1, L('tram 31 cm', 'tramo 31 cm'), '2000'], [0, L('gir 30°', 'giro 30°'), '197'], [2, L('tram 31 cm', 'tramo 31 cm'), '2000'], [0, L('gir 120°', 'giro 120°'), '787'], [3, L('tram 31 cm', 'tramo 31 cm'), '2000'], [-1, '…', '']];
      const badge = (n, x, y) => n > 0 ? `<circle cx="${x}" cy="${y}" r="9" fill="#6D3FD8"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w s">${n}</text>` : n === 0 ? `<circle cx="${x}" cy="${y}" r="9" fill="#F08A24"/><path d="M${x - 3.5} ${y + 2.5}A4.5 4.5 0 1 1 ${x + 3} ${y + 3.2}" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><path d="M${x + 4.5} ${y + .2}l-1.4 3.4l-3.4 -1" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>` : '';
      return tSvg(214, `<rect x="8" y="30" width="116" height="176" rx="14" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/>
        ${drw('path', `d="${d}" fill="none" stroke="#2F5BEA" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"`, .05, .5)}${nums}
        <text x="66" y="22" text-anchor="middle" class="tat s">${L('el dibuix', 'el dibujo')}</text><text x="210" y="22" text-anchor="middle" class="tat s">${L('el pla', 'el plan')}</text><text x="304" y="22" text-anchor="end" class="tat s" style="fill:#56628A">ms</text>
        ${rows.map(([n, a, b], i) => `<g ${tA(1.2 + i * .45, 'ta-in')}><rect x="134" y="${32 + i * 29}" width="178" height="24" rx="8" fill="${i % 2 ? '#FFF1E3' : '#F1ECFF'}"/>${badge(n, 148, 44 + i * 29)}<text x="${n < 0 ? 146 : 164}" y="${49 + i * 29}" class="tat s">${a}</text><text x="304" y="${49 + i * 29}" text-anchor="end" class="tat s" style="fill:#56628A">${b}</text></g>`).join('')}`);
    }
  };
})());

/* ── unitat 3 ── */
/* Tech Robòtica · unitat 3 «Sensor de distància» · animacions de teoria (TANI)
   Dibuixos propis del Maqueen Lite V5: cos fosc amb vora daurada, rodes negres, micro:bit amb LEDs vermells i el sensor
   d'ultrasons blau amb dos «ulls» platejats. Tot en SVG + SMIL (en bucle). */
{
  // el Maqueen vist des de dalt, mirant amunt (a = 90 → mira a la dreta, com a l'arena)
  const k3Top = (x, y, a = 90, s = 1, extra = '') => `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})" ${extra}>
    <ellipse cx="2" cy="4" rx="25" ry="26" fill="#0B1430" opacity=".18"/>
    <rect x="-28" y="-6" width="8" height="24" rx="3" fill="#1B1D22"/><rect x="20" y="-6" width="8" height="24" rx="3" fill="#1B1D22"/>
    ${[0, 1, 2, 3].map(i => `<rect x="-28" y="${-3 + i * 6}" width="8" height="1.6" fill="#3A3E48"/><rect x="20" y="${-3 + i * 6}" width="8" height="1.6" fill="#3A3E48"/>`).join('')}
    <path d="M-18 23h36q4 0 4 -4v-29q0 -12 -12 -12h-20q-12 0 -12 12v29q0 4 4 4z" fill="#152238" stroke="#F2B21B" stroke-width="2.2"/>
    <rect x="-14" y="-31" width="28" height="9" rx="2.5" fill="#1F5FBF"/>
    <circle cx="-7" cy="-26.5" r="4.4" fill="#D7DCE6"/><circle cx="-7" cy="-26.5" r="2.2" fill="#5A6070"/><circle cx="7" cy="-26.5" r="4.4" fill="#D7DCE6"/><circle cx="7" cy="-26.5" r="2.2" fill="#5A6070"/>
    <rect x="-14" y="-12" width="28" height="23" rx="3" fill="#121212"/><rect x="-14" y="8" width="28" height="3" fill="#C9A24A"/>
    ${[0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4].map(c => `<rect x="${-8.6 + c * 3.6}" y="${-9.4 + r * 3.4}" width="1.8" height="1.8" fill="${'0101011111111110111000100'[r * 5 + c] === '1' ? '#FF3B30' : '#3A2226'}"/>`).join('')).join('')}
  </g>`;
  // el Maqueen vist de costat, mirant a la dreta (x, y = punt de terra sota el centre)
  const k3Side = (x, y, s = 1, extra = '') => `<g transform="translate(${x} ${y}) scale(${s})" ${extra}>
    <ellipse cx="0" cy="1" rx="36" ry="4.5" fill="#0B1430" opacity=".2"/>
    <rect x="-29" y="-66" width="8" height="42" rx="2.5" fill="#121212"/>${[0, 1, 2, 3, 4].map(i => `<rect x="-31.5" y="${-62 + i * 7}" width="3" height="3.4" rx="1" fill="#FF3B30"/>`).join('')}
    <rect x="-34" y="-32" width="66" height="15" rx="6" fill="#152238" stroke="#F2B21B" stroke-width="2.4"/><path d="M-28 -25H24" stroke="#2E4166" stroke-width="2"/>
    <rect x="14" y="-56" width="6" height="26" rx="2" fill="#1F5FBF"/>
    <rect x="19" y="-54" width="12" height="9" rx="2.5" fill="#D7DCE6" stroke="#8C93A3" stroke-width="1.2"/><rect x="19" y="-42" width="12" height="9" rx="2.5" fill="#D7DCE6" stroke="#8C93A3" stroke-width="1.2"/>
    <circle cx="-13" cy="-14" r="14" fill="#1B1D22"/><circle cx="-13" cy="-14" r="10.5" fill="none" stroke="#3A3E48" stroke-width="2" stroke-dasharray="3 3"/><circle cx="-13" cy="-14" r="5" fill="#8A90A0"/>
    <circle cx="20" cy="-6" r="6" fill="#2A2E36"/><circle cx="18.5" cy="-7.5" r="2" fill="#6B7180"/>
  </g>`;
  // una caixa de fusta del moll (vista de costat)
  const k3Crate = (x, y, w, h) => `<g><rect x="${x + 3}" y="${y + 3}" width="${w}" height="${h}" rx="3" fill="#0B1430" opacity=".14"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="url(#bwWood)" stroke="#8A5A2E" stroke-width="2.5"/>
    <path d="M${x + 4} ${y + 4}L${x + w - 4} ${y + h - 4}M${x + w - 4} ${y + 4}L${x + 4} ${y + h - 4}" stroke="#8A5A2E" stroke-width="2.5" opacity=".7"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="none" stroke="#8A5A2E" stroke-width="2.5"/></g>`;
  // caixa vista des de dalt
  const k3Box = (x, y, w, h) => `<g><rect x="${x + 2}" y="${y + 3}" width="${w}" height="${h}" rx="3" fill="#0B1430" opacity=".16"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#D9A262" stroke="#8A5A2E" stroke-width="2.2"/><path d="M${x + 4} ${y + h / 2}H${x + w - 4}M${x + w / 2} ${y + 4}V${y + h - 4}" stroke="#A8743E" stroke-width="2"/></g>`;
  // números de la matriu (un darrere l'altre, de manera discreta)
  const k3Seq = (x, y, vals, D, cls = 'tat b', fill = '#FF3B30') => vals.map((v, i) => { const n = vals.length, k = i / n, k2 = (i + 1) / n;
    return `<text x="${x}" y="${y}" text-anchor="middle" class="${cls}" fill="${fill}" style="fill:${fill}" opacity="${i ? 0 : 1}"><animate attributeName="opacity" values="${i ? '0;1;0;0' : '1;0;0;1'}" keyTimes="${i ? `0;${k.toFixed(3)};${k2.toFixed(3)};1` : `0;${k2.toFixed(3)};.999;1`}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>${v}</text>`; }).join('');

  Object.assign(TANI, {
    // l'eco: el sensor xiula (ultrasons), el so rebota a la caixa i torna; el temps que tarda diu la distància
    k3echo() {
      const D = 'dur="4.4s" repeatCount="indefinite"';
      const arc = (dir, i) => { const b = dir > 0 ? .04 + i * .07 : .42 + i * .07, e = b + .34;
        return `<path d="M0 -22q${dir * 10} 22 0 44" fill="none" stroke="${dir > 0 ? '#2EA8F0' : '#F08A24'}" stroke-width="4" stroke-linecap="round" opacity="0">
          <animateTransform attributeName="transform" type="translate" values="${dir > 0 ? '98 120;98 120;232 120;232 120' : '232 120;232 120;98 120;98 120'}" keyTimes="0;${b.toFixed(2)};${e.toFixed(2)};1" ${D}/>
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${b.toFixed(2)};${(b + .02).toFixed(2)};${(e - .03).toFixed(2)};${e.toFixed(2)};1" ${D}/></path>`; };
      return tSvg(214, `<rect x="0" y="168" width="320" height="46" fill="#C9D6F2"/><rect x="0" y="168" width="320" height="5" fill="#9FB2E6"/>
        ${k3Side(60, 170, 1.15)}${k3Crate(238, 76, 62, 92)}
        ${[0, 1, 2].map(i => arc(1, i)).join('')}${[0, 1, 2].map(i => arc(-1, i)).join('')}
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.04;.08;.36;.4" ${D}/><rect x="96" y="22" width="112" height="30" rx="15" fill="#2EA8F0"/><text x="152" y="42" text-anchor="middle" class="tat w s">${L('1. Xiulet!', '1. ¡Silbido!')}</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.38;.42;.6;.64" ${D}/><rect x="196" y="22" width="116" height="30" rx="15" fill="#8A5A2E"/><text x="254" y="42" text-anchor="middle" class="tat w s">${L('2. Rebota', '2. Rebota')}</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.6;.64;.8;.84" ${D}/><rect x="92" y="22" width="132" height="30" rx="15" fill="#F08A24"/><text x="158" y="42" text-anchor="middle" class="tat w s">${L("3. Torna l'eco", '3. Vuelve el eco')}</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.8;.84;.97;1" ${D}/><rect x="96" y="18" width="128" height="38" rx="12" fill="#14204A"/><text x="160" y="43" text-anchor="middle" class="tat b" style="fill:#FF5A50">40 cm</text></g>
        <path d="M98 150H236" stroke="#14204A" stroke-width="2" stroke-dasharray="5 5" opacity=".35"/>
        <text x="160" y="196" text-anchor="middle" class="tat s">${L("Envia un so i escolta quan torna l'eco", 'Envía un sonido y escucha cuándo vuelve el eco')}</text>`);
    },
    // del temps de l'eco als centímetres: el so fa uns 34 cm cada mil·lèsima de segon, i va i torna
    k3math() {
      const card = (y, n, t, d, c) => `<g ${tA(d, 'ta-in')}><rect x="14" y="${y}" width="292" height="30" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="34" cy="${y + 15}" r="11" fill="${c}"/><text x="34" y="${y + 20}" text-anchor="middle" class="tat w s">${n}</text><text x="54" y="${y + 20}" class="tat s">${t}</text></g>`;
      return tSvg(214, `<rect x="10" y="10" width="300" height="78" rx="16" fill="#EEF4FF" stroke="#C9D6F2" stroke-width="2"/>
        ${k3Side(44, 70, .62)}${k3Crate(266, 24, 34, 46)}
        <path d="M72 38H258" stroke="#2EA8F0" stroke-width="4" stroke-linecap="round" pathLength="1" ${tA(.2, 'ta-draw')}/><path d="M250 31l9 7l-9 7" fill="none" stroke="#2EA8F0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" ${tA(.6, 'ta-fade')}/>
        <path d="M258 58H72" stroke="#F08A24" stroke-width="4" stroke-linecap="round" pathLength="1" ${tA(.9, 'ta-draw')}/><path d="M80 51l-9 7l9 7" fill="none" stroke="#F08A24" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" ${tA(1.3, 'ta-fade')}/>
        <text x="165" y="30" text-anchor="middle" class="tat s" ${tA(.4, 'ta-fade')}>${L('anada', 'ida')}</text><text x="165" y="80" text-anchor="middle" class="tat s" ${tA(1.1, 'ta-fade')}>${L('tornada', 'vuelta')}</text>
        ${card(98, 1, L("L'eco torna al cap de 2 ms", 'El eco vuelve a los 2 ms'), 1.6, '#2EA8F0')}
        ${card(134, 2, L('El so fa 34 cm cada ms: 68 cm', 'El sonido hace 34 cm cada ms: 68 cm'), 2.2, '#8B5CF6')}
        ${card(170, 3, L('Va i torna: 68 ÷ 2 = 34 cm', 'Va y vuelve: 68 ÷ 2 = 34 cm'), 2.8, '#F08A24')}`);
    },
    // el con del sensor és estret (uns ±8°): veu el que té just al davant; si no rep cap eco, diu 500
    k3cone() {
      const D = 'dur="5.5s" repeatCount="indefinite"';
      const rot = `<animateTransform attributeName="transform" type="rotate" values="0 70 120;0 70 120;-34 70 120;-34 70 120;30 70 120;30 70 120;0 70 120" keyTimes="0;.18;.3;.5;.62;.86;1" ${D}/>`;
      const show = (a, b) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${a};${(a + .02).toFixed(2)};${b};${(b + .02).toFixed(2)};1" ${D}/>`;
      return tSvg(214, `<rect x="6" y="8" width="308" height="184" rx="18" fill="#F7F5EE" stroke="#E4DCC6" stroke-width="2"/>
        ${[1, 2, 3, 4, 5, 6, 7].map(i => `<path d="M${6 + i * 38.5} 8V192" stroke="#14204A" opacity=".05"/>`).join('')}
        ${k3Box(236, 96, 44, 48)}${k3Box(196, 22, 30, 30)}
        <g>${rot}<path d="M92 120L292 92L292 148Z" fill="#2EE6F0" opacity=".28"/><path d="M92 120H292" stroke="#0EA0AA" stroke-width="2" stroke-dasharray="4 4"/>${k3Top(70, 120, 90, .9)}</g>
        <g opacity="1"><animate attributeName="opacity" values="1;1;0;0;0;0;1" keyTimes="0;.18;.2;.5;.62;.86;.88" calcMode="discrete" ${D}/><rect x="140" y="160" width="94" height="28" rx="14" fill="#3CC47C"/><text x="187" y="179" text-anchor="middle" class="tat w s">${L('veu: 45 cm', 've: 45 cm')}</text></g>
        <g opacity="0">${show(.3, .5)}<rect x="140" y="160" width="94" height="28" rx="14" fill="#3CC47C"/><text x="187" y="179" text-anchor="middle" class="tat w s">${L('veu: 40 cm', 've: 40 cm')}</text></g>
        <g opacity="0">${show(.62, .86)}<rect x="122" y="160" width="130" height="28" rx="14" fill="#14204A"/><text x="187" y="179" text-anchor="middle" class="tat w s">500 = ${L('no veu res', 'no ve nada')}</text></g>
        <text x="20" y="34" class="tat s">${L('Mira just al davant', 'Mira justo delante')}</text><text x="20" y="52" class="tat s" style="fill:#5A6480">${L('de 2 a 400 cm', 'de 2 a 400 cm')}</text>`);
    },
    // «en iniciar» mesura una sola vegada; «per sempre» torna a mesurar sense parar
    k3loop() {
      const D = 4.8, DD = `dur="${D}s" repeatCount="indefinite"`;
      const lane = (x0, lab, col, hat, live) => `<g>
        <rect x="${x0}" y="10" width="150" height="194" rx="16" fill="${live ? '#EAF8F0' : '#FDF1E7'}" stroke="${live ? '#A8E0C0' : '#F4CDA8'}" stroke-width="2"/>
        <rect x="${x0 + 12}" y="20" width="126" height="30" rx="10" fill="${col}"/>${hat}<text x="${x0 + 44}" y="40" class="tat w s">${lab}</text>
        <rect x="${x0 + 8}" y="54" width="134" height="26" rx="8" fill="#7A5AF0"/><text x="${x0 + 75}" y="72" text-anchor="middle" class="tat w s" style="font-size:11.5px">${L('mostra la distància', 'muestra la distancia')}</text>
        <rect x="${x0 + 47}" y="88" width="56" height="44" rx="8" fill="#121212"/>
        ${live ? k3Seq(x0 + 75, 118, ['60', '48', '36', '24', '12'], D) : `<text x="${x0 + 75}" y="118" text-anchor="middle" class="tat b" style="fill:#FF3B30">60</text>`}
        <rect x="${x0 + 10}" y="166" width="130" height="6" rx="3" fill="#C9D6F2"/>${k3Box(x0 + 120, 140, 20, 30)}
        <g><animateTransform attributeName="transform" type="translate" values="0 0;60 0;60 0" keyTimes="0;.9;1" ${DD}/>${k3Top(x0 + 40, 154, 90, .42)}</g>
        <text x="${x0 + 75}" y="194" text-anchor="middle" class="tat s">${live ? L('sempre al dia!', '¡siempre al día!') : L('es queda en 60', 'se queda en 60')}</text></g>`;
      const play = x => `<path d="M${x} 28l11 7l-11 7z" fill="#fff"/>`, loop = x => `<path d="M${x + 12} 30a7 7 0 1 0 2 8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M${x + 15} 26v6h-6" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
      return tSvg(214, `${lane(6, L('en iniciar', 'al iniciar'), '#F08A24', play(20), false)}${lane(164, L('per sempre', 'para siempre'), '#1FA463', loop(170), true)}`);
    },
    // el bloc «si… si no» dins de «per sempre»: a cada volta, una pregunta; si la resposta és sí, s'atura; si és no, avança
    k3if() {
      const D = 'dur="5.5s" repeatCount="indefinite"';
      const near = (a, b) => `values="${a};${a};${b};${b}" keyTimes="0;.62;.64;1" calcMode="discrete"`;
      return tSvg(222, `<rect x="6" y="6" width="308" height="132" rx="16" fill="#EEF4FF" stroke="#C9D6F2" stroke-width="2"/>
        <rect x="16" y="14" width="96" height="24" rx="8" fill="#1FA463"/><text x="64" y="31" text-anchor="middle" class="tat w s">${L('per sempre', 'para siempre')}</text>
        <path d="M74 62L130 36L186 62L130 88Z" fill="#F2B21B" stroke="#C98A0B" stroke-width="2.5" stroke-linejoin="round"/>
        <text x="130" y="67" text-anchor="middle" class="tat s">${L('dist. < 15?', 'dist. < 15?')}</text>
        <path d="M186 62H206" stroke="#1FA463" stroke-width="4" stroke-linecap="round"/><text x="196" y="54" text-anchor="middle" class="tat s">${L('sí', 'sí')}</text>
        <rect x="206" y="46" width="98" height="32" rx="10" fill="#EF5A5A"><animate attributeName="opacity" ${near('.35', '1')} ${D}/></rect><text x="255" y="67" text-anchor="middle" class="tat w s">${L('atura', 'para')}</text>
        <path d="M130 88V100" stroke="#EF5A5A" stroke-width="4" stroke-linecap="round"/><text x="146" y="99" class="tat s">no</text>
        <rect x="78" y="100" width="104" height="30" rx="10" fill="#3D7BF4"><animate attributeName="opacity" ${near('1', '.35')} ${D}/></rect><text x="130" y="120" text-anchor="middle" class="tat w s">${L('endavant', 'adelante')}</text>
        <path d="M60 115H40V48H70" fill="none" stroke="#1FA463" stroke-width="3" stroke-dasharray="5 4" class="ta-dash"/>
        <circle r="7" fill="#fff" stroke="#14204A" stroke-width="3"><animateMotion path="M40 100V50H74L130 62V112H40Z" dur="1.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.62;.63;1" ${D}/></circle>
        <circle r="7" fill="#fff" stroke="#14204A" stroke-width="3" opacity="0"><animateMotion path="M40 100V50H74L130 62H255" dur="1.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.62;.63;1" ${D}/></circle>
        <rect x="6" y="146" width="308" height="70" rx="16" fill="#F7F5EE" stroke="#E4DCC6" stroke-width="2"/>${k3Box(272, 152, 30, 58)}
        <path d="M244 150V214" stroke="#EF5A5A" stroke-width="2.5" stroke-dasharray="4 4"/><text x="236" y="210" text-anchor="end" class="tat s" style="fill:#C0392B">15 cm</text>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;178 0;184 0;184 0" keyTimes="0;.62;.66;1" ${D}/>${k3Top(44, 181, 90, .62)}</g>`);
    },
    // la frenada: el robot no s'atura en sec (inèrcia) i, com més de pressa va, més s'acosta abans d'aturar-se
    k3brake() {
      const D = 'dur="5s" repeatCount="indefinite"';
      const row = (y, v, x1, c, lab) => `<rect x="8" y="${y}" width="304" height="66" rx="14" fill="#F7F5EE" stroke="#E4DCC6" stroke-width="2"/>${k3Box(278, y + 8, 26, 50)}
        <path d="M232 ${y + 4}V${y + 62}" stroke="#EF5A5A" stroke-width="2.5" stroke-dasharray="4 4"/>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;${x1 - c} 0;${x1} 0;${x1} 0" keyTimes="0;${v};${(v + .08).toFixed(2)};1" ${D}/>${k3Top(30, y + 33, 90, .6)}</g>
        <text x="16" y="${y + 18}" class="tat s">${lab}</text>`;
      return tSvg(214, `${row(8, .74, 190, 4, L('a poc a poc', 'despacio'))}${row(80, .4, 212, 22, L('molt de pressa', 'muy deprisa'))}
        <text x="160" y="170" text-anchor="middle" class="tat s">${L('Els dos veuen la caixa a la línia vermella…', 'Los dos ven la caja en la línea roja…')}</text>
        <text x="160" y="196" text-anchor="middle" class="tat b" ${tA(2.4, 'ta-fade')}>${L('…però el ràpid frena més tard!', '…¡pero el rápido frena más tarde!')}</text>`);
    },
    // esquivar: si veu una caixa a prop, gira, s'aparta i torna a la direcció d'abans
    k3dodge() {
      const D = 'dur="6s" repeatCount="indefinite"', path = 'M40 70H118Q132 70 132 84V128Q132 142 146 142H282';
      return tSvg(214, `<rect x="6" y="8" width="308" height="190" rx="18" fill="#F7F5EE" stroke="#E4DCC6" stroke-width="2"/>
        ${[1, 2, 3, 4, 5, 6, 7].map(i => `<path d="M${6 + i * 38.5} 8V198" stroke="#14204A" opacity=".05"/>`).join('')}
        ${k3Box(150, 44, 46, 52)}<rect x="270" y="30" width="38" height="146" rx="8" fill="#3CC47C" opacity=".35" stroke="#1FA463" stroke-width="2" stroke-dasharray="5 4"/>
        <text x="289" y="108" text-anchor="middle" class="tat s" style="font-size:11px">${L('META', 'META')}</text>
        <path d="${path}" fill="none" stroke="#2F5BEA" stroke-width="2.5" stroke-dasharray="3 5" opacity=".5"/>
        <g><animateMotion path="${path}" rotate="auto" keyPoints="0;0;1;1" keyTimes="0;.05;.9;1" calcMode="linear" ${D}/>
          <path d="M18 0L70 -8L70 8Z" fill="#2EE6F0" opacity="0"><animate attributeName="opacity" values="0;0;.45;.45;0;0" keyTimes="0;.12;.14;.2;.22;1" ${D}/></path>${k3Top(0, 0, 90, .6)}</g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.13;.15;.3;.32;1" ${D}/><rect x="40" y="18" width="104" height="28" rx="14" fill="#EF5A5A"/><text x="92" y="37" text-anchor="middle" class="tat w s">${L('Caixa a prop!', '¡Caja cerca!')}</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.3;.32;.62;.64" ${D}/><rect x="20" y="164" width="134" height="28" rx="14" fill="#3D7BF4"/><text x="87" y="183" text-anchor="middle" class="tat w s">${L("gira i aparta't", 'gira y apártate')}</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.64;.66;.95;1" ${D}/><rect x="160" y="164" width="104" height="28" rx="14" fill="#1FA463"/><text x="212" y="183" text-anchor="middle" class="tat w s">${L('i continua', 'y sigue')}</text></g>`);
    },
    // aparcar: lluny, de pressa; a prop, a poc a poc; molt a prop, s'atura (com el sensor d'aparcament d'un cotxe)
    k3park() {
      const D = 'dur="5.5s" repeatCount="indefinite"';
      const beep = (x, y, a, b) => `<g opacity="0"><animate attributeName="opacity" values="0;0;1;0;1;0;1;0;0" keyTimes="0;${a};${(a + (b - a) * .15).toFixed(3)};${(a + (b - a) * .3).toFixed(3)};${(a + (b - a) * .45).toFixed(3)};${(a + (b - a) * .6).toFixed(3)};${(a + (b - a) * .75).toFixed(3)};${b};1" ${D}/><path d="M${x} ${y}q6 8 0 16M${x + 7} ${y - 5}q9 13 0 26" fill="none" stroke="#F2B21B" stroke-width="3" stroke-linecap="round"/></g>`;
      return tSvg(214, `<rect x="6" y="8" width="308" height="122" rx="16" fill="#E9EDF5" stroke="#C9D2E4" stroke-width="2"/>
        <rect x="20" y="42" width="150" height="56" fill="#3CC47C" opacity=".22"/><rect x="170" y="42" width="84" height="56" fill="#FFC531" opacity=".32"/><rect x="254" y="42" width="30" height="56" fill="#EF5A5A" opacity=".3"/>
        <path d="M20 40H290M20 100H290" stroke="#fff" stroke-width="4"/>${k3Box(288, 34, 20, 72)}
        <text x="95" y="30" text-anchor="middle" class="tat s" style="fill:#1A7F4B">${L('lluny', 'lejos')}</text><text x="212" y="30" text-anchor="middle" class="tat s" style="fill:#9A6B00">${L('a prop', 'cerca')}</text><text x="270" y="122" text-anchor="middle" class="tat s" style="fill:#C0392B">${L('stop!', '¡stop!')}</text>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;140 0;222 0;222 0" keyTimes="0;.3;.78;1" ${D}/>${k3Top(40, 70, 90, .7)}</g>
        ${beep(240, 50, .32, .78)}
        ${tCard(14, 140, 140, 32, 1, L('lluny: 200', 'lejos: 200'), .2, '#1FA463')}${tCard(166, 140, 140, 32, 2, L('a prop: 70', 'cerca: 70'), 1.6, '#E0A000')}
        ${tCard(60, 178, 200, 32, 3, L('molt a prop: atura', 'muy cerca: para'), 3.6, '#EF5A5A')}`);
    }
  });
}

/* ── unitat 4 ── */
/* Tech Robòtica · unitat 4 «Seguir la línia»: animacions de teoria (TANI), pròpies de Numi */
Object.assign(TANI, (() => {
  const HEART = (typeof RICONS !== 'undefined' ? RICONS.heart : '01010 11111 11111 01110 00100').replace(/ /g, '');
  // el Maqueen vist des de dalt, mirant amunt (cos de 40 × 44 a escala 1); on: quins sensors de línia veuen negre [L, M, R]
  const bot = (on = [0, 0, 0], extra = '', noDots) => `<g ${extra}>
    <ellipse cx="2" cy="4" rx="24" ry="25" fill="#0B1838" opacity=".16"/>
    <rect x="-27" y="-6" width="8" height="22" rx="3" fill="#1B1D22"/><rect x="19" y="-6" width="8" height="22" rx="3" fill="#1B1D22"/>
    <path d="M-27 -1h8M-27 5h8M-27 11h8M19 -1h8M19 5h8M19 11h8" stroke="#3A3E48" stroke-width="1.4"/>
    <path d="M-17 22h34q3 0 3 -3v-30q0 -9 -9 -9h-22q-9 0 -9 9v30q0 3 3 3z" fill="#152238" stroke="#F2B21B" stroke-width="2"/>
    <rect x="-12" y="-28" width="24" height="9" rx="2.5" fill="#1F5FBF"/><circle cx="-6" cy="-23.5" r="3.6" fill="#D7DCE6"/><circle cx="6" cy="-23.5" r="3.6" fill="#D7DCE6"/><circle cx="-6" cy="-23.5" r="1.8" fill="#5A6070"/><circle cx="6" cy="-23.5" r="1.8" fill="#5A6070"/>
    <rect x="-13" y="-10" width="26" height="21" rx="2.5" fill="#121212"/><rect x="-13" y="9" width="26" height="2.4" fill="#C9A24A"/>
    ${[0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4].map(c => `<rect x="${-7.6 + c * 3.2}" y="${-7.6 + r * 3.2}" width="1.9" height="1.9" fill="${HEART[r * 5 + c] === '1' ? '#FF3B30' : '#3A2226'}"/>`).join('')).join('')}
    ${noDots ? '' : [-1, 0, 1].map((s, i) => `<circle cx="${s * 7}" cy="-16" r="2.8" fill="${on[i] ? '#2EE6F0' : '#EEF2FA'}" stroke="#0B1838" stroke-width="1"/>`).join('')}</g>`;
  // el Maqueen de perfil (mirant a la dreta), amb el sensor de línia a sota del davant
  const side = (extra = '') => `<g ${extra}><rect x="-34" y="-16" width="62" height="8" rx="3" fill="#152238" stroke="#F2B21B" stroke-width="1.6"/>
    <rect x="-20" y="-34" width="5" height="18" rx="1.5" fill="#121212"/><rect x="-20" y="-34" width="5" height="3" fill="#C9A24A"/>
    <rect x="18" y="-26" width="10" height="10" rx="2" fill="#1F5FBF"/><rect x="28" y="-25" width="5" height="3.6" rx="1" fill="#D7DCE6"/><rect x="28" y="-20" width="5" height="3.6" rx="1" fill="#D7DCE6"/>
    <circle cx="-12" cy="-4" r="11" fill="#1B1D22"/><circle cx="-12" cy="-4" r="4" fill="#5A6070"/><rect x="16" y="-8" width="10" height="5" rx="1.5" fill="#2A2A2A"/><circle cx="23" cy="-3" r="1.6" fill="#FF6B6B"/></g>`;
  const pill = (x, y, w, txt, col, t) => `<g ${tA(t)}><rect x="${x - w / 2}" y="${y - 15}" width="${w}" height="30" rx="15" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w b">${txt}</text></g>`;
  return {
    // el sensor de línia: llum infraroja que rebota molt al blanc i gairebé gens al negre
    k4ir() {
      const panel = (x, black) => `<rect x="${x}" y="10" width="146" height="196" rx="18" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
        <rect x="${x + 10}" y="128" width="126" height="22" rx="4" fill="${black ? '#15171C' : '#FBFAF4'}" stroke="${black ? '#15171C' : '#D9D5C6'}" stroke-width="2"/>
        <text x="${x + 73}" y="${black ? 143 : 143}" text-anchor="middle" class="tat s ${black ? 'w' : ''}">${black ? L('NEGRE', 'NEGRO') : L('BLANC', 'BLANCO')}</text>
        <rect x="${x + 46}" y="34" width="54" height="26" rx="6" fill="#152238" stroke="#F2B21B" stroke-width="2"/>
        <circle cx="${x + 61}" cy="60" r="5" fill="#FF6B6B"/><circle cx="${x + 85}" cy="60" r="5" fill="#2A2A2A" stroke="#9AA3B8" stroke-width="1.5"/>
        <path d="M${x + 61} 66L${x + 71} 126" stroke="#FF5A5A" stroke-width="4" stroke-dasharray="6 5" stroke-linecap="round"><animate attributeName="stroke-dashoffset" values="22;0" dur=".8s" repeatCount="indefinite"/></path>
        <path d="M${x + 75} 126L${x + 85} 66" stroke="#FF5A5A" stroke-width="${black ? 1.5 : 6}" opacity="${black ? .3 : 1}" stroke-dasharray="6 5" stroke-linecap="round"><animate attributeName="stroke-dashoffset" values="22;0" dur=".8s" repeatCount="indefinite"/></path>`;
      return tSvg(214, `${panel(8, false)}${panel(166, true)}
        <text x="81" y="28" text-anchor="middle" class="tat s">${L('emissor', 'emisor')} · ${L('receptor', 'receptor')}</text><text x="239" y="28" text-anchor="middle" class="tat s">${L('emissor', 'emisor')} · ${L('receptor', 'receptor')}</text>
        <text x="81" y="174" text-anchor="middle" class="tat s" ${tA(.8, 'ta-fade')}>${L('torna molta llum', 'vuelve mucha luz')}</text>
        <text x="239" y="174" text-anchor="middle" class="tat s" ${tA(1.6, 'ta-fade')}>${L('torna poca llum', 'vuelve poca luz')}</text>
        ${pill(81, 192, 70, '0', '#3D8BFF', 1.2)}${pill(239, 192, 70, '1', '#14204A', 2)}`);
    },
    // els tres sensors L, M i R: la cinta passa per sota de l'un o de l'altre
    k4lmr() {
      const kt = '0;.30;.36;.63;.69;.97;1', pos = '173.3 0;173.3 0;160 0;160 0;146.7 0;146.7 0;173.3 0';
      const dot = (i, vals) => `<circle cx="${(i - 1) * 13.3}" cy="-30.4" r="5" stroke="#0B1838" stroke-width="1.4"><animate attributeName="fill" values="${vals}" keyTimes="0;.33;.66" dur="6s" calcMode="discrete" repeatCount="indefinite"/></circle>`;
      const ph = (i, txt) => `<g opacity="0"><animate attributeName="opacity" values="${['1;0;0', '0;1;0', '0;0;1'][i]}" keyTimes="0;.33;.66" dur="6s" calcMode="discrete" repeatCount="indefinite"/>${txt}</g>`;
      const row = v => ['L', 'M', 'R'].map((k, i) => `<g transform="translate(${100 + i * 60} 170)"><rect x="-24" y="-22" width="48" height="40" rx="10" fill="${v[i] ? '#14204A' : '#fff'}" stroke="#14204A" stroke-width="2"/><text y="-4" text-anchor="middle" class="tat s ${v[i] ? 'w' : ''}">${k}</text><text y="13" text-anchor="middle" class="tat b ${v[i] ? 'w' : ''}">${v[i]}</text></g>`).join('');
      return tSvg(214, `<rect x="0" y="0" width="320" height="144" rx="16" fill="#FBFAF4"/><rect x="150" y="0" width="20" height="144" fill="#15171C"/>
        <g transform="translate(0 92)"><g><animateTransform attributeName="transform" type="translate" values="${pos}" keyTimes="${kt}" dur="6s" repeatCount="indefinite"/>
          <g transform="scale(1.9)">${bot([0, 0, 0], '', true)}</g>${dot(0, '#2EE6F0;#EEF2FA;#EEF2FA')}${dot(1, '#EEF2FA;#2EE6F0;#EEF2FA')}${dot(2, '#EEF2FA;#EEF2FA;#2EE6F0')}</g></g>
        ${ph(0, row([1, 0, 0]))}${ph(1, row([0, 1, 0]))}${ph(2, row([0, 0, 1]))}
        <text x="160" y="211" text-anchor="middle" class="tat s">${L('1 = negre · 0 = blanc', '1 = negro · 0 = blanco')}</text>`);
    },
    // el valor analògic (ADC) de 0 a 1023: blanc, color i negre
    k4adc() {
      const bars = [[L('blanc', 'blanco'), 90, '#FBFAF4', '#D9D5C6'], [L('color', 'color'), 360, '#3D8BFF', '#2F6FD6'], [L('negre', 'negro'), 900, '#15171C', '#15171C']];
      const Y0 = 168, k = 140 / 1023;
      return tSvg(214, `<path d="M58 ${Y0}h250" stroke="#9AA3B8" stroke-width="2"/><path d="M58 ${Y0}V20" stroke="#9AA3B8" stroke-width="2"/>
        <text x="50" y="${Y0 + 5}" text-anchor="end" class="tat s">0</text><text x="50" y="${Y0 - 1023 * k + 5}" text-anchor="end" class="tat s">1023</text>
        ${bars.map(([n, v, c, s], i) => { const x = 86 + i * 76, h = v * k; return `<rect x="${x}" y="${Y0 - h}" width="48" height="${h}" rx="6" fill="${c}" stroke="${s}" stroke-width="2"><animate attributeName="height" values="0;${h};${h}" keyTimes="0;.25;1" dur="5.5s" begin="${i * .5}s" repeatCount="indefinite"/><animate attributeName="y" values="${Y0};${Y0 - h};${Y0 - h}" keyTimes="0;.25;1" dur="5.5s" begin="${i * .5}s" repeatCount="indefinite"/></rect>
          <text x="${x + 24}" y="${Y0 - h - 8}" text-anchor="middle" class="tat b" ${tA(1 + i * .5, 'ta-fade')}>≈${v}</text><text x="${x + 24}" y="${Y0 + 22}" text-anchor="middle" class="tat s">${n}</text>`; }).join('')}
        <g ${tA(2.8, 'ta-fade')}><path d="M60 ${Y0 - 600 * k}h246" stroke="#EF5A5A" stroke-width="2.5" stroke-dasharray="7 6"/><text x="64" y="${Y0 - 600 * k - 8}" class="tat s">${L('per sobre: negre (1)', 'por encima: negro (1)')}</text></g>`);
    },
    // fora de la taula no torna cap llum: el sensor llegeix 1, com si fos negre
    k4air() {
      return tSvg(214, `<rect x="0" y="0" width="320" height="214" rx="16" fill="#EEF3FF"/><rect x="10" y="132" width="196" height="16" rx="3" fill="#C98A4B"/><rect x="18" y="148" width="12" height="62" fill="#A86E35"/><rect x="186" y="148" width="12" height="62" fill="#A86E35"/>
        <g><animateTransform attributeName="transform" type="translate" values="50 123;190 123;190 123" keyTimes="0;.45;1" dur="5.5s" repeatCount="indefinite"/><g transform="scale(1.3)">${side()}</g>
          <path d="M30 3V34" stroke="#FF5A5A" stroke-width="3" stroke-dasharray="5 4"><animate attributeName="stroke-dashoffset" values="18;0" dur=".7s" repeatCount="indefinite"/></path></g>
        <g ${tA(2.6)}><circle cx="238" cy="84" r="16" fill="#EF5A5A"/><text x="238" y="90" text-anchor="middle" class="tat w b">!</text></g>
        <g ${tA(2.9, 'ta-in')}><rect x="214" y="150" width="96" height="52" rx="14" fill="#14204A"/><text x="262" y="172" text-anchor="middle" class="tat w s">${L('aire', 'aire')}</text><text x="262" y="193" text-anchor="middle" class="tat w b">M = 1</text></g>
        <text x="160" y="40" text-anchor="middle" class="tat b">${L('No hi ha terra: no torna llum', 'No hay suelo: no vuelve luz')}</text>`);
    },
    // seguir la vora amb un sensor: negre → gira a la dreta, blanc → gira a l'esquerra
    k4edge() {
      const tape = 'M14 152 C 60 150, 90 70, 170 70 S 280 120, 306 76';
      const wig = 'M10 160 L30 150 L50 158 L70 140 L88 136 L104 112 L120 106 L138 88 L156 86 L176 76 L196 80 L214 84 L232 94 L250 92 L268 86 L284 76 L300 76';
      return tSvg(214, `<rect x="0" y="0" width="320" height="214" rx="16" fill="#FBFAF4"/><path d="${tape}" fill="none" stroke="#15171C" stroke-width="22" stroke-linecap="round"/>
        <path d="${wig}" fill="none" stroke="#2F7BFF" stroke-width="2.5" stroke-dasharray="4 5" opacity=".75"/>
        <g><animateMotion dur="5.5s" repeatCount="indefinite" rotate="auto" path="${wig}"/><g transform="rotate(90) scale(.85)">${bot([0, 1, 0])}</g></g>
        <g ${tA(.6, 'ta-in')}><rect x="14" y="14" width="150" height="46" rx="12" fill="#14204A"/><text x="89" y="33" text-anchor="middle" class="tat w s">${L('M veu negre', 'M ve negro')}</text><text x="89" y="51" text-anchor="middle" class="tat w s">→ ${L('gira a la dreta', 'gira a la derecha')}</text></g>
        <g ${tA(1.4, 'ta-in')}><rect x="156" y="150" width="154" height="46" rx="12" fill="#fff" stroke="#14204A" stroke-width="2"/><text x="233" y="169" text-anchor="middle" class="tat s">${L('M veu blanc', 'M ve blanco')}</text><text x="233" y="187" text-anchor="middle" class="tat s">→ ${L("gira a l'esquerra", 'gira a la izquierda')}</text></g>`);
    },
    // dos sensors amb la línia al mig: recte, a l'esquerra o a la dreta
    k4two() {
      const P = [[0, 0, L('recte', 'recto'), 'M0 0V-26M-7 -19L0 -26L7 -19'], [1, 0, L('esquerra', 'izquierda'), 'M4 0Q2 -20 -14 -24M-12 -16L-14 -24L-6 -27'], [0, 1, L('dreta', 'derecha'), 'M-4 0Q-2 -20 14 -24M12 -16L14 -24L6 -27']];
      return tSvg(214, P.map(([l, r, n, arr], i) => { const x = 8 + i * 104, cx = x + 50, tx0 = cx + (l ? -26 : r ? 26 : 0);
        return `<g ${tA(.3 + i * .9, 'ta-in')}><rect x="${x}" y="8" width="100" height="198" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
          <rect x="${x + 6}" y="16" width="88" height="112" rx="10" fill="#FBFAF4"/><rect x="${tx0 - 17}" y="16" width="34" height="112" fill="#15171C"/>
          <rect x="${cx - 42}" y="58" width="84" height="70" rx="12" fill="#152238" stroke="#F2B21B" stroke-width="2.5" opacity=".92"/>
          ${[[-26, l, 'L'], [0, 0, 'M'], [26, r, 'R']].map(([d, on, k]) => `<circle cx="${cx + d}" cy="74" r="8" fill="${on ? '#2EE6F0' : k === 'M' ? '#5A6478' : '#EEF2FA'}" stroke="#0B1838" stroke-width="1.6"/><text x="${cx + d}" y="104" text-anchor="middle" class="tat s w">${k}</text>`).join('')}
          <text x="${cx}" y="150" text-anchor="middle" class="tat b">L ${l} · R ${r}</text>
          <g transform="translate(${cx} 196)"><path d="${arr}" fill="none" stroke="${i ? '#F08A24' : '#3CC47C'}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
          <text x="${cx}" y="168" text-anchor="middle" class="tat s">${n}</text></g>`; }).join(''));
    },
    // tres sensors: què vol dir cada combinació
    k4cross() {
      const R = [[[0, 1, 0], L('recte', 'recto'), '#3CC47C'], [[1, 0, 0], L("gira a l'esquerra", 'gira a la izquierda'), '#F08A24'], [[0, 0, 1], L('gira a la dreta', 'gira a la derecha'), '#F08A24'], [[1, 1, 1], L('cruïlla o estació!', '¡cruce o estación!'), '#EF5A5A'], [[0, 0, 0], L('perdut: no canviïs res', 'perdido: no cambies nada'), '#8B5CF6']];
      return tSvg(214, R.map(([v, t, c], i) => `<g ${tA(.3 + i * .55, 'ta-in')}><rect x="10" y="${6 + i * 41}" width="300" height="35" rx="12" fill="#fff" stroke="${c}" stroke-width="2.5"/>
        ${v.map((b, j) => `<circle cx="${34 + j * 22}" cy="${23.5 + i * 41}" r="8" fill="${b ? '#15171C' : '#fff'}" stroke="#15171C" stroke-width="2"/>`).join('')}
        <text x="112" y="${29 + i * 41}" class="tat s">${t}</text></g>`).join('')
        );
    },
    // el pla d'un projecte: entendre, dibuixar, programar a trossos, provar i millorar
    k4plan() {
      const st = [L('Entén la missió', 'Entiende la misión'), L('Dibuixa la pista', 'Dibuja la pista'), L('Programa a trossos', 'Programa a trozos'), L('Prova a totes les pistes', 'Prueba en todas las pistas'), L('Millora i torna a provar', 'Mejora y vuelve a probar')];
      return tSvg(220, `${st.map((s, i) => tCard(14, 6 + i * 42, 236, 34, i + 1, s, .3 + i * .55, ['#2F5BEA', '#2F5BEA', '#F08A24', '#3CC47C', '#8B5CF6'][i])).join('')}
        <g ${tA(3.2, 'ta-fade')}><path d="M256 197 C 300 197, 300 98, 256 98" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-dasharray="7 6"/><path d="M262 90l-8 8l9 6" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g transform="translate(290 34) scale(.7)"><g ${tA(.2)}>${bot([0, 1, 0])}</g></g>`);
    }
  };
})());

/* ── unitat 5 ── */
/* Tech Robòtica · unitat 5 «Llum, so i LED» · animacions de teoria (TANI)
   Dibuixos propis: el Maqueen Lite V5 vist des de dalt (cos fosc amb vora daurada, rodes negres, micro:bit amb LEDs
   vermells, ultrasons blaus amb dos «ulls» platejats i els dos sensors de llum a les cantonades del davant), focus,
   gràfiques de llum i de temps. SVG + SMIL, en bucle. */
{
  // el Maqueen des de dalt, mirant amunt; mx = icona de la matriu (25 xifres 0/1); eyes = sensors de llum destacats
  const k5Top = (x, y, a = 0, s = 1, o = {}) => { const mx = o.mx || '0101011111111110111000100';
    return `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})" ${o.extra || ''}>
    <ellipse cx="2" cy="5" rx="25" ry="26" fill="#0B1430" opacity=".18"/>
    ${o.under ? `<circle cx="0" cy="2" r="34" fill="${o.under}" opacity=".35"/>` : ''}
    <rect x="-28" y="-6" width="8" height="24" rx="3" fill="#1B1D22"/><rect x="20" y="-6" width="8" height="24" rx="3" fill="#1B1D22"/>
    ${[0, 1, 2, 3].map(i => `<rect x="-28" y="${-3 + i * 6}" width="8" height="1.6" fill="#3A3E48"/><rect x="20" y="${-3 + i * 6}" width="8" height="1.6" fill="#3A3E48"/>`).join('')}
    <path d="M-18 23h36q4 0 4 -4v-29q0 -12 -12 -12h-20q-12 0 -12 12v29q0 4 4 4z" fill="#152238" stroke="#F2B21B" stroke-width="2.2"/>
    <rect x="-14" y="-31" width="28" height="9" rx="2.5" fill="#1F5FBF"/>
    <circle cx="-7" cy="-26.5" r="4.4" fill="#D7DCE6"/><circle cx="-7" cy="-26.5" r="2.2" fill="#5A6070"/><circle cx="7" cy="-26.5" r="4.4" fill="#D7DCE6"/><circle cx="7" cy="-26.5" r="2.2" fill="#5A6070"/>
    <rect x="-14" y="-12" width="28" height="23" rx="3" fill="#121212"/><rect x="-14" y="8" width="28" height="3" fill="#C9A24A"/>
    ${[0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4].map(c => `<rect x="${-8.6 + c * 3.6}" y="${-9.4 + r * 3.4}" width="1.8" height="1.8" fill="${mx[r * 5 + c] === '1' ? '#FF3B30' : '#3A2226'}"/>`).join('')).join('')}
    <circle cx="-16" cy="-19" r="${o.eyes ? 3.6 : 2.4}" fill="${o.eyes ? '#FFE27A' : '#9AA3B8'}" stroke="#6B5200" stroke-width="${o.eyes ? 1.2 : .6}"/>
    <circle cx="16" cy="-19" r="${o.eyes ? 3.6 : 2.4}" fill="${o.eyes ? '#FFE27A' : '#9AA3B8'}" stroke="#6B5200" stroke-width="${o.eyes ? 1.2 : .6}"/>
    ${o.car ? `<circle cx="-12" cy="-22" r="7" fill="${o.car}" opacity=".55"/><circle cx="12" cy="-22" r="7" fill="${o.car}" opacity=".55"/>` : ''}
    ${o.inner || ''}
  </g>`; };
  // un focus de llum amb el halo (de dalt)
  const k5Lamp = (x, y, r = 34, extra = '') => `<g transform="translate(${x} ${y})" ${extra}><circle r="${r}" fill="url(#k5halo)"/><circle r="9" fill="#FFD54A" stroke="#8A6A00" stroke-width="2"/><circle r="4" fill="#FFF6C8"/></g>`;
  const k5Defs = `<defs><radialGradient id="k5halo"><stop offset="0" stop-color="#FFE680" stop-opacity=".95"/><stop offset=".45" stop-color="#FFE680" stop-opacity=".45"/><stop offset="1" stop-color="#FFE680" stop-opacity="0"/></radialGradient>
    <linearGradient id="k5sky" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFE9A8"/><stop offset=".3" stop-color="#BFE3FF"/><stop offset=".55" stop-color="#2A3466"/><stop offset=".85" stop-color="#151B3D"/><stop offset="1" stop-color="#FFD9A8"/></linearGradient></defs>`;
  // estats discrets: l'element i de n es veu durant el seu tram (dur D)
  const k5On = (i, n, D) => { const a = i / n, b = (i + 1) / n;
    return i === 0 ? `<animate attributeName="opacity" values="1;0;0;1" keyTimes="0;${b.toFixed(3)};.999;1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>`
      : `<animate attributeName="opacity" values="0;1;0;0" keyTimes="0;${a.toFixed(3)};${b.toFixed(3)};1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>`; };
  const k5Seq = (x, y, vals, D, cls = 'tat b', fill = '#14204A', anchor = 'middle') => vals.map((v, i) => `<text x="${x}" y="${y}" text-anchor="${anchor}" class="${cls}" style="fill:${fill}" opacity="${i ? 0 : 1}">${k5On(i, vals.length, D)}${v}</text>`).join('');
  const k5Bubble = (x, y, w, lab, vals, D, col) => `<g><rect x="${x - w / 2}" y="${y - 17}" width="${w}" height="34" rx="10" fill="#fff" stroke="${col}" stroke-width="2.5"/><text x="${x}" y="${y - 3}" text-anchor="middle" class="tat s" style="fill:${col}">${lab}</text>${k5Seq(x, y + 13, vals, D, 'tat b', '#14204A')}</g>`;

  Object.assign(TANI, {
    // els dos sensors de llum: el focus passa d'un costat a l'altre i els números canvien
    k5eyes() {
      const D = 6;
      return tSvg(214, `${k5Defs}<rect x="0" y="0" width="320" height="214" rx="16" fill="#1A2147"/>
        ${[30, 80, 260, 290, 150].map((x, i) => `<circle cx="${x}" cy="${12 + (i * 7) % 20}" r="1.4" fill="#fff" opacity=".6"/>`).join('')}
        <g>${k5Lamp(0, 0, 40)}<animateTransform attributeName="transform" type="translate" values="70 46;70 46;160 40;160 40;250 46;250 46;160 40;160 40;70 46" keyTimes="0;.2;.25;.45;.5;.7;.75;.95;1" dur="${D}s" repeatCount="indefinite"/></g>
        ${k5Top(160, 150, 0, 1.45, { eyes: true })}
        <path d="M137 122l-26 -26" stroke="#FFE27A" stroke-width="2" stroke-dasharray="4 4" class="ta-dash"/><path d="M183 122l26 -26" stroke="#FFE27A" stroke-width="2" stroke-dasharray="4 4" class="ta-dash"/>
        ${k5Bubble(60, 150, 108, L('llum esquerra', 'luz izquierda'), ['620', '410', '180', '410'], D, '#E0A400')}
        ${k5Bubble(260, 150, 108, L('llum dreta', 'luz derecha'), ['180', '410', '620', '410'], D, '#E0A400')}
        <text x="160" y="206" text-anchor="middle" class="tat s" style="fill:#FFE9A8">${L('de 0 (fosc) a 1023 (molta llum)', 'de 0 (oscuro) a 1023 (mucha luz)')}</text>`);
    },
    // quanta llum: tres situacions i la barra de 0 a 1023
    k5meter() {
      const bar = (x, v, col, t, lab, ico) => { const h = Math.round(v / 1023 * 120); return `<g ${tA(t, 'ta-in')}>
        <rect x="${x - 24}" y="44" width="48" height="122" rx="9" fill="#EEF2FB" stroke="#D3DCF2" stroke-width="2"/>
        <rect x="${x - 21}" y="${165 - h}" width="42" height="${h}" rx="6" fill="${col}"><animate attributeName="height" values="0;${h};${h}" keyTimes="0;.18;1" dur="5.5s" begin="${t}s" repeatCount="indefinite"/><animate attributeName="y" values="165;${165 - h};${165 - h}" keyTimes="0;.18;1" dur="5.5s" begin="${t}s" repeatCount="indefinite"/></rect>
        <text x="${x}" y="${Math.min(160, 160 - h) - 6 < 50 ? 64 : 158 - h}" text-anchor="middle" class="tat b">${v}</text>
        <text x="${x}" y="30" text-anchor="middle" font-size="22">${ico}</text>
        <text x="${x}" y="188" text-anchor="middle" class="tat s">${lab}</text></g>`; };
      return tSvg(214, `${bar(64, 25, '#3B4A8C', .2, L('a les fosques', 'a oscuras'), '🌙')}${bar(160, 260, '#5FA8FF', 1.2, L("aula de dia", 'aula de día'), '☀️')}${bar(256, 900, '#FFC531', 2.2, L('focus a prop', 'foco cerca'), '🔦')}
        <text x="160" y="208" text-anchor="middle" class="tat s" style="fill:#5A6890" ${tA(3.2, 'ta-fade')}>${L('com més a prop i més de cara, més llum', 'cuanto más cerca y más de cara, más luz')}</text>`);
    },
    // comparar els dos sensors: el focus és a l'esquerra, el robot gira cap allà
    k5two() {
      const D = 5.5;
      return tSvg(214, `${k5Defs}<rect x="0" y="0" width="320" height="214" rx="16" fill="#1A2147"/>
        ${k5Lamp(70, 52, 52)}
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;-18 -22;-34 -50;-34 -50" keyTimes="0;.2;.55;.85;1" dur="${D}s" repeatCount="indefinite"/>
          <g transform="translate(170 152)"><g><animateTransform attributeName="transform" type="rotate" values="0;0;-28;-38;-38" keyTimes="0;.2;.55;.85;1" dur="${D}s" repeatCount="indefinite"/>${k5Top(0, 0, 0, 1.2, { eyes: true })}</g></g></g>
        <g transform="translate(250 50)"><rect x="-58" y="-26" width="116" height="74" rx="12" fill="#fff"/>
          <text x="0" y="-6" text-anchor="middle" class="tat s">${L('esquerra', 'izquierda')} <tspan style="fill:#D08A00;font-weight:900">610</tspan></text>
          <text x="0" y="14" text-anchor="middle" class="tat s">${L('dreta', 'derecha')} <tspan style="fill:#5A6890;font-weight:900">210</tspan></text>
          <text x="0" y="36" text-anchor="middle" class="tat b" style="fill:#2F5BEA">E &gt; D → ↰</text></g>
        <text x="236" y="200" text-anchor="middle" class="tat s" style="fill:#FFE9A8" ${tA(1.4, 'ta-fade')}>${L("gira cap a l'esquerra", 'gira hacia la izquierda')}</text>`);
    },
    // quatre maneres d'avisar: llums del cotxe, so, matriu i llums de sota
    k5alarm() {
      const D = 1.2, blink = (a, b) => `<animate attributeName="fill" values="${a};${b};${a}" keyTimes="0;.5;1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>`;
      const wave = i => `<path d="M0 -14q9 14 0 28" fill="none" stroke="#2F5BEA" stroke-width="3.5" stroke-linecap="round" opacity="0"><animateTransform attributeName="transform" type="translate" values="0 0;34 0" dur="1.5s" begin="${i * .5}s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="${i * .5}s" repeatCount="indefinite"/></path>`;
      return tSvg(214, `<rect x="0" y="0" width="320" height="214" rx="16" fill="#F3F6FF"/>
        <circle cx="160" cy="108" r="50" fill="#FF3B30" opacity=".18"><animate attributeName="fill" values="#FF3B30;#2F7BFF;#FF3B30" keyTimes="0;.5;1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></circle>
        ${k5Top(160, 112, 0, 1.35, { mx: '0101000000001000101000100', inner: `<circle cx="-12" cy="-22" r="6" fill="#FF3B30" opacity=".85">${blink('#FF3B30', '#2F7BFF')}</circle><circle cx="12" cy="-22" r="6" fill="#2F7BFF" opacity=".85">${blink('#2F7BFF', '#FF3B30')}</circle>` })}
        <g transform="translate(206 108)">${[0, 1, 2].map(wave).join('')}</g>
        ${tCard(4, 8, 154, 34, '', L('🚨 llums del cotxe', '🚨 luces del coche'), .2, '#EF5A5A')}${tCard(162, 8, 154, 34, '', L('🔊 brunzidor', '🔊 zumbador'), .9)}
        ${tCard(4, 172, 154, 34, '', L('😮 matriu de LEDs', '😮 matriz de LEDs'), 1.6)}${tCard(162, 172, 154, 34, '', L('💡 llums de sota', '💡 luces de abajo'), 2.3)}`);
    },
    // les notes tarden: una línia de temps amb notes de durades diferents i un capçal que avança
    k5beat() {
      const x0 = 22, px = 104; // 104 px = 1 s
      const blk = (s, d, lab, col, row) => `<g><rect x="${x0 + s * px}" y="${row}" width="${d * px - 4}" height="34" rx="9" fill="${col}"/><text x="${x0 + s * px + (d * px - 4) / 2}" y="${row + 22}" text-anchor="middle" class="tat s w">${lab}</text></g>`;
      return tSvg(214, `<rect x="0" y="0" width="320" height="214" rx="16" fill="#F3F6FF"/>
        <text x="160" y="28" text-anchor="middle" class="tat b">${L('1 temps = 0,5 s', '1 tiempo = 0,5 s')}</text>
        ${blk(0, .5, L('do · 1', 'do · 1'), '#8B5CF6', 48)}${blk(.5, .25, '½', '#2F7BFF', 48)}${blk(.75, 1, L('sol · 2 temps', 'sol · 2 tiempos'), '#3CC47C', 48)}${blk(1.75, .75, L('mi · 1½', 'mi · 1½'), '#F08A24', 48)}
        ${blk(0, .4, '😊', '#EF5A5A', 96)}${blk(.4, .4, '♥', '#EF5A5A', 96)}<text x="${x0 + .8 * px + 8}" y="118" class="tat s">${L('← cada icona, 0,4 s', '← cada icono, 0,4 s')}</text>
        <path d="M${x0} 150H${x0 + 2.6 * px}" stroke="#14204A" stroke-width="2.5"/>${[0, 1, 2].map(s => `<path d="M${x0 + s * px} 144v12" stroke="#14204A" stroke-width="2.5"/><text x="${x0 + s * px}" y="174" text-anchor="middle" class="tat s">${s} s</text>`).join('')}
        <g><path d="M0 40V156" stroke="#FF3B30" stroke-width="3"/><circle cy="40" r="5" fill="#FF3B30"/><animateTransform attributeName="transform" type="translate" values="${x0} 0;${x0 + 2.5 * px} 0;${x0 + 2.5 * px} 0" keyTimes="0;.85;1" dur="5.5s" repeatCount="indefinite"/></g>
        <text x="160" y="202" text-anchor="middle" class="tat s" style="fill:#5A6890">${L("el bloc següent espera que s'acabi", 'el bloque siguiente espera a que termine')}</text>`);
    },
    // el fanal: la llum d'un dia sencer, el llindar 100 i el fanal que s'encén quan la corba hi passa per sota
    k5lamp() {
      const D = 6, W = 220, X = 20, path = `M${X} 120 C ${X + 30} 40, ${X + 70} 40, ${X + 95} 110 S ${X + 140} 176, ${X + 180} 176 S ${X + 205} 120, ${X + W} 70`;
      return tSvg(214, `${k5Defs}<rect x="0" y="0" width="320" height="214" rx="16" fill="#F3F6FF"/>
        <rect x="${X}" y="24" width="${W}" height="164" rx="8" fill="url(#k5sky)" opacity=".55"/>
        <path d="M${X} 150H${X + W}" stroke="#EF5A5A" stroke-width="2.5" stroke-dasharray="7 5"/><text x="${X + 6}" y="144" class="tat s" style="fill:#C62828">${L('llindar 100', 'umbral 100')}</text>
        <path d="${path}" fill="none" stroke="#14204A" stroke-width="4" stroke-linecap="round"/>
        <text x="${X + 50}" y="40" text-anchor="middle" font-size="18">☀️</text><text x="${X + 160}" y="58" text-anchor="middle" font-size="18">🌙</text>
        <circle r="7" fill="#FF3B30" stroke="#fff" stroke-width="2.5"><animateMotion path="${path}" dur="${D}s" repeatCount="indefinite"/></circle>
        <text x="${X + W / 2}" y="206" text-anchor="middle" class="tat s">${L('llum del sensor durant un dia', 'luz del sensor durante un día')}</text>
        <g transform="translate(282 30)"><rect x="-4" y="40" width="8" height="112" rx="3" fill="#3A4256"/><path d="M-26 40h52l-8 -22h-36z" fill="#3A4256"/>
          <ellipse cx="0" cy="48" rx="24" ry="10" fill="#9AA3B8" opacity=".5"><animate attributeName="fill" values="#9AA3B8;#9AA3B8;#FFE27A;#FFE27A;#9AA3B8" keyTimes="0;.47;.48;.88;1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".5;.5;1;1;.5" keyTimes="0;.47;.48;.88;1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></ellipse>
          <path d="M-30 58L-40 150H40L30 58z" fill="#FFE27A" opacity="0"><animate attributeName="opacity" values="0;0;.45;.45;0" keyTimes="0;.47;.48;.88;1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></path>
          ${[[L('apagat', 'apagada'), '1;0;0;1', '0;.48;.999;1'], [L('encès', 'encendida'), '0;1;0;0', '0;.48;.88;1'], [L('apagat', 'apagada'), '0;1;0;0', '0;.88;.999;1']].map(([v, vs, kt], i) => `<text y="174" text-anchor="middle" class="tat s" opacity="${i ? 0 : 1}"><animate attributeName="opacity" values="${vs}" keyTimes="${kt}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>${v}</text>`).join('')}</g>`);
    },
    // la taula del projecte: funció · sensor · condició · què fa
    k5plan() {
      const cols = [L('funció', 'función'), L('sensor', 'sensor'), L('condició', 'condición'), L('fa', 'hace')], cx = [55, 130, 206, 281];
      const rows = [[L('llum de nit', 'luz de noche'), '☀', L('llum &lt; 100', 'luz &lt; 100'), '💡'], [L('timbre', 'timbre'), 'A', L('prémer A', 'pulsar A'), '🔔'], [L('alarma', 'alarma'), '📏', 'dist &lt; 25', '🚨']];
      return tSvg(214, `<rect x="0" y="0" width="320" height="214" rx="16" fill="#F3F6FF"/><rect x="10" y="12" width="300" height="190" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
        <rect x="10" y="12" width="300" height="38" rx="14" fill="#2F5BEA"/>${cols.map((c, i) => `<text x="${cx[i]}" y="37" text-anchor="middle" class="tat s w">${c}</text>`).join('')}
        ${[100, 160, 252].map(x => `<path d="M${x} 50V202" stroke="#DCE4FA" stroke-width="2"/>`).join('')}
        ${rows.map((r, j) => `<g ${tA(.5 + j * 1.1, 'ta-in')}>${j ? `<path d="M10 ${50 + j * 50}H310" stroke="#DCE4FA" stroke-width="2"/>` : ''}${r.map((c, i) => `<text x="${cx[i]}" y="${82 + j * 50}" text-anchor="middle" class="${i === 0 ? 'tat s' : i === 2 ? 'tat s' : 'tat b'}" ${i === 1 && c === 'A' ? 'style="fill:#2F5BEA"' : ''}>${c}</text>`).join('')}</g>`).join('')}`);
    },
    // «i»: l'alarma només sona si és de nit I hi ha algú a prop (quatre casos, un darrere l'altre)
    k5and() {
      const D = 8, n = 4, cases = [[0, 0], [1, 0], [0, 1], [1, 1]];
      const lamp = (x, lab, k) => `<g transform="translate(${x} 70)"><rect x="-56" y="-44" width="112" height="96" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
        <text x="0" y="-20" text-anchor="middle" class="tat s">${lab}</text>
        ${cases.map((c, i) => `<g opacity="${i ? 0 : 1}">${k5On(i, n, D)}<circle cy="14" r="18" fill="${c[k] ? '#3CC47C' : '#C9D1E6'}"/><text y="20" text-anchor="middle" class="tat b w">${c[k] ? L('SÍ', 'SÍ') : 'NO'}</text></g>`).join('')}</g>`;
      return tSvg(214, `<rect x="0" y="0" width="320" height="214" rx="16" fill="#F3F6FF"/>
        ${lamp(66, L('és de nit?', '¿es de noche?'), 0)}${lamp(254, L('algú a prop?', '¿alguien cerca?'), 1)}
        <circle cx="160" cy="84" r="22" fill="#2F5BEA"/><text x="160" y="90" text-anchor="middle" class="tat b w">${L('i', 'y')}</text>
        <path d="M122 84h16M182 84h16" stroke="#2F5BEA" stroke-width="4"/><path d="M160 106v22" stroke="#2F5BEA" stroke-width="4"/>
        ${cases.map((c, i) => { const on = c[0] && c[1]; return `<g opacity="${i ? 0 : 1}">${k5On(i, n, D)}<rect x="90" y="132" width="140" height="44" rx="14" fill="${on ? '#FF3B30' : '#E6EAF5'}"/><text x="160" y="160" text-anchor="middle" class="tat b" style="fill:${on ? '#fff' : '#7A86A8'}">${on ? L('🚨 ALARMA!', '🚨 ¡ALARMA!') : L('tot tranquil', 'todo tranquilo')}</text></g>`; }).join('')}
        <text x="160" y="202" text-anchor="middle" class="tat s" style="fill:#5A6890">${L('només si les dues són certes', 'solo si las dos son ciertas')}</text>`);
    }
  });
}

/* ── unitat 6 ── */
/* Tech Robòtica · unitat 6 «Control intel·ligent» · animacions de teoria (TANI)
   Dibuixos propis: el Maqueen Lite V5 vist des de dalt (cos fosc amb vora daurada, rodes negres, micro:bit amb LEDs
   vermells, ultrasons blau amb dos «ulls» platejats), ones d'ultrasons, cinta negra i gràfiques senzilles. SVG + SMIL. */
Object.assign(TANI, (() => {
  const D = 5.5; // durada del cicle (com les classes ta-*)
  const SM = (attr, values, extra = '') => `<animate attributeName="${attr}" values="${values}" dur="${D}s" repeatCount="indefinite" ${extra}/>`;
  // passos discrets: visible només durant [a, b) del cicle (fraccions 0-1)
  const showIn = (a, b) => a <= 0 ? SM('opacity', b >= 1 ? '1' : '1;0', b >= 1 ? '' : `keyTimes="0;${b}" calcMode="discrete"`) : SM('opacity', b >= 1 ? '0;1' : '0;1;0', b >= 1 ? `keyTimes="0;${a}" calcMode="discrete"` : `keyTimes="0;${a};${b}" calcMode="discrete"`);
  const ICON = { none: '00000 00000 00000 00000 00000', heart: '01010 11111 11111 01110 00100', happy: '00000 01010 00000 10001 01110', arrow: '00100 01110 10101 00100 00100' };
  const leds = p => { const r = (ICON[p] || p).split(' '); let o = ''; for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) o += `<rect x="${(-8.4 + x * 3.6).toFixed(1)}" y="${(-11.6 + y * 3.6).toFixed(1)}" width="2.2" height="2.2" rx=".5" fill="${r[y][x] === '1' ? '#FF3B30' : '#3A2226'}"/>`; return o; };
  // el Maqueen des de dalt, mirant amunt a a = 0 (a = 90 → mira a la dreta)
  const bot = (x, y, a = 90, s = 1, o = {}) => `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})">
    ${o.under ? `<ellipse cx="0" cy="2" rx="36" ry="38" fill="${o.under}" opacity=".35">${o.underAnim || ''}</ellipse>` : ''}
    <ellipse cx="2" cy="5" rx="26" ry="27" fill="#0B1430" opacity=".16"/>
    ${[-1, 1].map(k => `<g transform="translate(${k * 23} 3)"><rect x="-4.5" y="-13" width="9" height="26" rx="3.4" fill="#1B1D22"/>${[-8, -3, 2, 7].map(t => `<rect x="-4.5" y="${t}" width="9" height="1.5" fill="#40444F"/>`).join('')}</g>`).join('')}
    <rect x="-18.5" y="-20" width="37" height="41" rx="8" fill="${o.other ? '#5B6478' : '#152238'}" stroke="${o.other ? '#3B4255' : '#F2B21B'}" stroke-width="1.9"/>
    ${[-1, 1].map(k => `<circle cx="${k * 13}" cy="-16.5" r="2.4" fill="${o.car || '#C7CBD6'}">${o.carAnim || ''}</circle>`).join('')}
    <rect x="-13.5" y="-30" width="27" height="9.5" rx="2.6" fill="#1F5FBF"/>
    ${[-1, 1].map(k => `<circle cx="${k * 6.8}" cy="-25.3" r="4.4" fill="#D7DCE6" stroke="#9AA3B5" stroke-width=".8"/><circle cx="${k * 6.8}" cy="-25.3" r="2.1" fill="#5A6070"/>`).join('')}
    <rect x="-12" y="-14" width="24" height="21" rx="2" fill="#121212"/><rect x="-12" y="5.4" width="24" height="2.2" fill="#C9A24A"/>${leds(o.leds || (o.other ? 'arrow' : 'none'))}
    ${o.extra || ''}</g>`;
  // caixa de fusta vista des de dalt (el mur o el carregador)
  const crate = (x, y, w, h) => `<g><rect x="${x + 2}" y="${y + 3}" width="${w}" height="${h}" rx="3" fill="#0B1430" opacity=".15"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#D9A262" stroke="#8A5A2E" stroke-width="2.2"/><path d="M${x + 4} ${y + 4}L${x + w - 4} ${y + h - 4}M${x + w - 4} ${y + 4}L${x + 4} ${y + h - 4}" stroke="#A8743E" stroke-width="2"/></g>`;
  // ones d'ultrasons que surten cap a la dreta des de (x, y)
  // ones d'ultrasons dins del robot (surten cap endavant, és a dir, amunt en el sistema del robot)
  const waves = (n = 3, col = '#14A3B8') => [...Array(n)].map((_, k) => `<path d="M${-8 - k * 3} ${-33 - k * 7}q${8 + k * 3} -${6 + k * 2} ${16 + k * 6} 0" fill="none" stroke="${col}" stroke-width="2.8" stroke-linecap="round" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="1.1s" begin="${k * .25}s" repeatCount="indefinite"/></path>`).join('');
  const pill = (x, y, w, txt, col, cls = 'tat w s') => `<rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="13" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="${cls}">${txt}</text>`;
  const ok = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1FA463"/><path d="M${x - r * .45} ${y}l${r * .32} ${r * .34}l${r * .55} -${r * .62}" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const ko = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#EF5A5A"/><path d="M${x - r * .38} ${y - r * .38}l${r * .76} ${r * .76}M${x + r * .38} ${y - r * .38}l-${r * .76} ${r * .76}" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
  const floor = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#F8F7F2" stroke="#E2DDCC" stroke-width="2"/>`;
  // un bloc de programa (fitxa de color)
  const chip = (x, y, w, txt, col = '#E2574C', extra = '') => `<g><rect x="${x}" y="${y}" width="${w}" height="28" rx="8" fill="${col}"/>${extra}<text x="${x + 10}" y="${y + 19}" class="tat w s">${txt}</text></g>`;

  return {
    // una variable és una capsa amb nom: posa 40 i, a cada volta, canvia en 30 → el robot va cada cop més de pressa
    k6var() {
      const vals = [40, 70, 100, 130];
      const num = vals.map((v, i) => `<text x="80" y="84" text-anchor="middle" style="font:900 34px Lexend,system-ui,sans-serif;fill:#14204A" opacity="${i ? 0 : 1}">${v}${showIn(i / 4, (i + 1) / 4)}</text>`).join('');
      const bar = SM('width', vals.map(v => (v / 255 * 118).toFixed(1)).join(';'), 'keyTimes="0;.25;.5;.75" calcMode="discrete"');
      const plus = [1, 2, 3].map(i => `<text x="138" y="84" class="tat b" style="fill:#1FA463" opacity="0">+30${SM('opacity', '0;0;1;0;0', `keyTimes="0;${(i / 4 - .01).toFixed(2)};${(i / 4).toFixed(2)};${(i / 4 + .14).toFixed(2)};1"`)}</text>`).join('');
      return tSvg(214, `
        <g ${tA(.1, 'ta-in')}>
          <path d="M28 50l14 -14h76l14 14z" fill="#E7B877" stroke="#9A6A36" stroke-width="2.2" stroke-linejoin="round"/>
          <rect x="28" y="50" width="104" height="58" rx="6" fill="#F2C98B" stroke="#9A6A36" stroke-width="2.2"/>
          <rect x="44" y="96" width="72" height="22" rx="6" fill="#fff" stroke="#9A6A36" stroke-width="1.8"/>
          <text x="80" y="112" text-anchor="middle" class="tat s">${L('velocitat', 'velocidad')}</text>
          ${num}
        </g>${plus}
        <g ${tA(.5, 'ta-in')}>
          <text x="172" y="44" class="tat s">${L('motors', 'motores')}</text>
          <rect x="172" y="54" width="118" height="20" rx="10" fill="#E6ECFB"/>
          <rect x="172" y="54" width="18" height="20" rx="10" fill="#0FA3A3">${bar}</rect>
          <path d="M172 88h118" stroke="#C9D3EE" stroke-width="2"/><text x="172" y="104" class="tat s" style="fill:#5A6890">0</text><text x="290" y="104" text-anchor="end" class="tat s" style="fill:#5A6890">255</text>
        </g>
        ${chip(8, 132, 172, L('posa velocitat a 40', 'pon velocidad a 40'), '#E2574C')}
        <g>${chip(186, 132, 126, L('canvia en 30', 'cambia en 30'), '#E2574C', `<rect x="184" y="130" width="130" height="32" rx="10" fill="none" stroke="#FFC531" stroke-width="3" opacity="0">${SM('opacity', '0;0;1;0;1;0;1;0', 'keyTimes="0;.24;.27;.36;.52;.6;.77;.86"')}</rect>`)}</g>
        ${floor(10, 170, 300, 38)}
        ${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${48 + i * 44}" cy="189" r="2" fill="#2F5BEA" opacity=".35"/>`).join('')}
        <g>${bot(0, 0, 90, .55)}<animateMotion dur="${D}s" repeatCount="indefinite" path="M40 189H292" keyPoints="0;.06;.24;.52;1;1" keyTimes="0;.25;.5;.75;.97;1" calcMode="linear"/></g>`);
    },
    // un comptador: cada línia negra suma 1, una sola vegada
    k6count() {
      const lines = [96, 168, 240], x0 = 28, x1 = 298, front = 15, tHit = lx => (lx - front - x0) / (x1 - x0);
      const cnt = [0, 1, 2, 3].map(i => { const a = i ? tHit(lines[i - 1]) : 0, b = i < 3 ? tHit(lines[i]) : 1; return `<text x="251" y="72" text-anchor="middle" style="font:900 40px Lexend,system-ui,sans-serif;fill:#14204A" opacity="${i ? 0 : 1}">${i}${showIn(a, b)}</text>`; }).join('');
      const pops = lines.map(lx => { const a = tHit(lx); return `<text x="${lx}" y="122" text-anchor="middle" class="tat b" style="fill:#1FA463" opacity="0">+1${SM('opacity', '0;0;1;0;0', `keyTimes="0;${a.toFixed(3)};${(a + .02).toFixed(3)};${(a + .16).toFixed(3)};1"`)}</text>`; }).join('');
      return tSvg(214, `
        <g ${tA(.1, 'ta-in')}><rect x="192" y="14" width="118" height="74" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
          <text x="251" y="34" text-anchor="middle" class="tat s">${L('comptador', 'contador')}</text>${cnt}</g>
        <g ${tA(.3, 'ta-in')}>${chip(8, 18, 176, L('posa comptador a 0', 'pon contador a 0'), '#E2574C')}${chip(8, 56, 176, L('canvia en 1', 'cambia en 1'), '#E2574C')}</g>
        ${floor(10, 128, 300, 72)}
        ${lines.map(lx => `<rect x="${lx - 4}" y="132" width="8" height="64" fill="#121418"/>`).join('')}
        ${pops}
        <g>${bot(0, 0, 90, .62)}<animateMotion dur="${D}s" repeatCount="indefinite" path="M${x0} 164H${x1}"/></g>
        <text x="160" y="212" text-anchor="middle" class="tat s" ${tA(.6, 'ta-fade')}>${L('cada línia, +1 (només una vegada)', 'cada línea, +1 (solo una vez)')}</text>`);
    },
    // control proporcional: com més a prop del mur, més a poc a poc (velocitat = error × k)
    k6prop() {
      const sp = 'keyTimes="0;.78;1" keyPoints="0;1;1" calcMode="spline" keySplines=".15 .75 .35 1;0 0 1 1"';
      return tSvg(214, `
        ${floor(10, 10, 300, 66)}${crate(270, 16, 30, 54)}
        <g>${bot(0, 0, 90, .62, { extra: waves(2) })}<animateMotion dur="${D}s" repeatCount="indefinite" path="M40 43H232" ${sp}/></g>
        <text x="18" y="96" class="tat s">${L('velocitat', 'velocidad')}</text>
        <rect x="104" y="83" width="200" height="18" rx="9" fill="#E6ECFB"/>
        <rect x="104" y="83" width="200" height="18" rx="9" fill="#0FA3A3"><animate attributeName="width" values="200;0;0" dur="${D}s" repeatCount="indefinite" keyTimes="0;.78;1" calcMode="spline" keySplines=".15 .75 .35 1;0 0 1 1"/></rect>
        <g ${tA(.4, 'ta-in')}>
          <path d="M40 200V114M40 200H300" stroke="#5A6890" stroke-width="2.4" stroke-linecap="round"/>
          <text x="46" y="122" class="tat s" style="fill:#5A6890">${L('velocitat', 'velocidad')}</text>
          <text x="300" y="194" text-anchor="end" class="tat s" style="fill:#5A6890">${L('distància', 'distancia')} →</text>
          <path d="M70 200L290 126" stroke="#E2574C" stroke-width="4" stroke-linecap="round" pathLength="1" ${tA(.6, 'ta-draw')}/>
          <text x="62" y="214" class="tat s" style="fill:#E2574C">10 cm</text>
          <circle r="7" fill="#FFC531" stroke="#14204A" stroke-width="2"><animateMotion dur="${D}s" repeatCount="indefinite" path="M290 126L70 200" ${sp}/></circle>
        </g>
        <text x="304" y="116" text-anchor="end" class="tat b" ${tA(1.2, 'ta-fade')}>${L('lluny: de pressa', 'lejos: deprisa')}</text>
        <text x="96" y="146" class="tat b" ${tA(2.4, 'ta-fade')}>${L('a prop: suau', 'cerca: suave')}</text>`);
    },
    // el guany k: petit (frena massa aviat i para lluny) o gran (arriba ràpid i a prop)
    k6gain() {
      const lane = (y, k, endX, ease, good, t) => `
        ${floor(10, y, 300, 62)}${crate(272, y + 6, 28, 50)}
        <text x="22" y="${y + 22}" class="tat b">k = ${k}</text>
        <g>${bot(0, 0, 90, .5)}<animateMotion dur="${D}s" repeatCount="indefinite" path="M42 ${y + 40}H${endX}" keyTimes="0;.8;1" keyPoints="0;1;1" calcMode="spline" keySplines="${ease};0 0 1 1"/></g>
        <g ${tA(t, 'ta-pop')}>${good ? ok(88, y + 18, 10) : ko(88, y + 18, 10)}<text x="104" y="${y + 23}" class="tat s">${good ? L('arriba ràpid i a prop', 'llega rápido y cerca') : L('lent i para lluny', 'lento y para lejos')}</text></g>`;
      return tSvg(214, `${lane(14, 2, 190, '.05 .55 .2 1', false, 4.2)}${lane(98, 10, 246, '.35 0 .25 1', true, 3.6)}
        <text x="160" y="204" text-anchor="middle" class="tat s" ${tA(.4, 'ta-fade')}>${L('velocitat = error × k', 'velocidad = error × k')}</text>`);
    },
    // la zona morta: per sota de ~30 el motor no es mou, i el robot s'atura abans d'hora
    k6dead() {
      const X = d => 40 + (d - 10) * 5.4, Y = v => 190 - v * .95;   // d de 10 a 60 cm; v fins a 120
      const pts = []; for (let d = 60; d >= 10; d -= 1) pts.push(`${X(d).toFixed(1)} ${Y((d - 10) * 2).toFixed(1)}`);
      return tSvg(214, `
        <rect x="40" y="${Y(30)}" width="272" height="${190 - Y(30)}" fill="#EF5A5A" opacity=".14"/>
        <path d="M40 ${Y(30)}H312" stroke="#EF5A5A" stroke-width="2.4" stroke-dasharray="7 5"/>
        <text x="306" y="${Y(30) + 22}" text-anchor="end" class="tat s" style="fill:#C0392B">${L('zona morta: < 30', 'zona muerta: < 30')}</text>
        <path d="M40 196V70M34 190H312" stroke="#5A6890" stroke-width="2.4" stroke-linecap="round"/>
        <text x="46" y="80" class="tat s" style="fill:#5A6890">${L('velocitat', 'velocidad')}</text>
        <text x="312" y="208" text-anchor="end" class="tat s" style="fill:#5A6890">← ${L('el robot s\'acosta', 'el robot se acerca')}</text>
        <path d="M${pts.join('L')}" fill="none" stroke="#0FA3A3" stroke-width="4" stroke-linecap="round" pathLength="1" ${tA(.3, 'ta-draw')}/>
        <circle r="7" fill="#FFC531" stroke="#14204A" stroke-width="2"><animateMotion dur="${D}s" repeatCount="indefinite" path="M${X(60)} ${Y(100)}L${X(25)} ${Y(30)}" keyTimes="0;.7;1" keyPoints="0;1;1" calcMode="linear"/></circle>
        <g ${tA(3.9, 'ta-pop')}><circle cx="${X(25)}" cy="${Y(30)}" r="13" fill="none" stroke="#C0392B" stroke-width="3"/>
          ${pill(204, 68, 150, L('s\'atura a 25 cm!', '¡se para a 25 cm!'), '#C0392B')}</g>
        <path d="M${X(25) + 6} ${Y(30) - 12}L${X(25) + 40} 81" stroke="#C0392B" stroke-width="2.4" ${tA(3.9, 'ta-fade')}/>
        <text x="22" y="30" class="tat b" ${tA(.2, 'ta-in')}>${L('velocitat = error × 2', 'velocidad = error × 2')}</text>`);
    },
    // segueix el líder: el seguidor mira el líder amb l'ultrasò, accelera, frena al semàfor i encén els llums de fre
    k6lead() {
      const kt = 'keyTimes="0;.42;.62;1"';
      const brake = `<animate attributeName="fill" values="#2BD45A;#FF3B30;#2BD45A" dur="${D}s" repeatCount="indefinite" keyTimes="0;.4;.64" calcMode="discrete"/>`;
      return tSvg(214, `
        <rect x="0" y="70" width="320" height="86" fill="#3B4255"/><path d="M0 113H320" stroke="#F8F7F2" stroke-width="3" stroke-dasharray="18 14"/>
        <g ${tA(.1, 'ta-in')}><g transform="translate(270 40)"><rect x="-2" y="0" width="4" height="34" fill="#5A6070"/><rect x="-11" y="-28" width="22" height="34" rx="6" fill="#1B1D22"/>
          <circle cy="-18" r="6" fill="#FF3B30" opacity=".25">${SM('opacity', '.25;1;.25', 'keyTimes="0;.36;.62" calcMode="discrete"')}</circle><circle cy="-4" r="6" fill="#2BD45A">${SM('opacity', '1;.25;1', 'keyTimes="0;.36;.62" calcMode="discrete"')}</circle></g></g>
        <g><g>${bot(0, 0, 90, .62, { other: true })}</g><animateMotion dur="${D}s" repeatCount="indefinite" path="M120 113H250" keyPoints="0;.62;.62;1" ${kt} calcMode="linear"/></g>
        <g><g>${bot(0, 0, 90, .62, { under: '#2BD45A', underAnim: brake, extra: waves(2) })}</g><animateMotion dur="${D}s" repeatCount="indefinite" path="M40 113H170" keyPoints="0;.5;.72;1" ${kt} calcMode="spline" keySplines=".3 .1 .7 1;.2 .6 .4 1;.3 0 .7 1"/></g>
        <g ${tA(.4, 'ta-fade')}><text x="14" y="34" class="tat b">${L('líder', 'líder')}: <tspan style="fill:#5B6478">${L('gris', 'gris')}</tspan></text>
          <text x="14" y="56" class="tat s">${L('seguidor/a: el nostre robot', 'seguidor/a: nuestro robot')}</text></g>
        <g ${tA(2.3, 'ta-pop')}>${pill(118, 178, 196, L('frena: llums vermells', 'frena: luces rojas'), '#C0392B')}</g>
        <text x="160" y="208" text-anchor="middle" class="tat s" ${tA(.8, 'ta-fade')}>${L('velocitat = (distància − 10) × k', 'velocidad = (distancia − 10) × k')}</text>`);
    },
    // el cotxe autònom: tres sensors (línia, ultrasò, llum), un programa, motors i llums; i es fa de nit
    k6car() {
      const night = `<rect x="0" y="0" width="320" height="214" fill="#0A1028" opacity="0" pointer-events="none">${SM('opacity', '0;0;.55;.55;0', 'keyTimes="0;.55;.62;.92;1"')}</rect>`;
      const head = SM('fill', '#C7CBD6;#FFFFFF;#C7CBD6', 'keyTimes="0;.6;.92" calcMode="discrete"');
      const beam = `<path d="M-12 -30L-34 -120H34L12 -30Z" fill="#FFF6C8" opacity="0">${SM('opacity', '0;0;.85;.85;0', 'keyTimes="0;.6;.62;.92;1"')}</path>`;
      const tag = (x, y, w, t1, col, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="26" rx="9" fill="#fff" stroke="${col}" stroke-width="2.4"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" class="tat s">${t1}</text></g>`;
      return tSvg(214, `
        <rect x="0" y="0" width="320" height="214" fill="#EEF3E6"/>
        <path d="M-10 150C70 150 90 92 170 92S260 40 330 40" fill="none" stroke="#3B4255" stroke-width="44" stroke-linecap="round"/>
        <path d="M-10 150C70 150 90 92 170 92S260 40 330 40" fill="none" stroke="#121418" stroke-width="5"/>
        ${night}
        <g>${bot(170, 92, 66, .95, { car: '#C7CBD6', carAnim: head, extra: beam + waves(3) })}</g>
        ${tag(184, 128, 130, L('ultrasò: distància', 'ultrasonido: distancia'), '#14A3B8', .3)}
        ${tag(14, 34, 138, L('línia L·R: carretera', 'línea L·R: carretera'), '#14204A', 1)}
        ${tag(14, 172, 126, L('llum: és de nit?', 'luz: ¿es de noche?'), '#F2B21B', 1.7)}
        ${tag(170, 172, 144, L('fars i llums de fre', 'faros y luces de freno'), '#E2574C', 2.4)}
        <g ${tA(3.4, 'ta-pop')}>${pill(236, 18, 132, L('es fa de nit!', '¡se hace de noche!'), '#2F3A8F')}</g>`);
    }
  };
})());

/* ── unitat 7 ── */
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
          <g opacity=".35">${SM('opacity', '1;1;.35;.35', '0;.4;.41;1', 'calcMode="discrete"')}${pill(32, 0, 92, L('1 busca', '1 busca'), '#2F7BFF')}</g>
          <g opacity=".35" transform="translate(0 40)">${SM('opacity', '.35;.35;1;1;.35;.35', '0;.46;.47;.76;.77;1', 'calcMode="discrete"')}${pill(32, 0, 92, L('2 ataca', '2 ataca'), '#EF5A5A')}</g>
          <g opacity=".35" transform="translate(0 80)">${SM('opacity', '.35;.35;1;1', '0;.66;.67;1', 'calcMode="discrete"')}${pill(32, 0, 92, L('3 vora?', '3 ¿borde?'), '#F2B21B', 'tat s')}</g>
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
      const code = [[L('fins que', 'hasta que'), 'dist < 25'], [L('fins que', 'hasta que'), 'ADC > 200'], [L('atura', 'para'), L('motors', 'motores')], [L('llums', 'luces'), L('verds', 'verdes')]];
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

/* ── unitat 8 ── */
/* Tech Robòtica · unitat 8 «El meu robot» · animacions de teoria (TANI) */
Object.assign(TANI, (() => {
  // ---------- peces comunes ----------
  const SM = (attr, values, dur, extra = '') => `<animate attributeName="${attr}" values="${values}" dur="${dur}s" repeatCount="indefinite" ${extra}/>`;
  const PAT = { none: '00000 00000 00000 00000 00000', heart: '01010 11111 11111 01110 00100', happy: '00000 01010 00000 10001 01110', arrow: '00100 01110 10101 00100 00100', yes: '00000 00001 00010 10100 01000' };
  const leds = p => { const r = (PAT[p] || p).split(' '); let o = ''; for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) o += `<rect x="${(-8.4 + x * 3.7).toFixed(1)}" y="${(-12 + y * 3.7).toFixed(1)}" width="2.3" height="2.3" rx=".6" fill="${r[y][x] === '1' ? '#FF3B30' : '#3A2226'}"/>`; return o; };
  // el Maqueen Lite V5 vist des de dalt (el davant mira amunt); o.car = color dels llums, o.mx = HTML de la matriu, o.under = color de sota
  const bot = (x, y, a = 0, s = 1, o = {}) => `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})">
    ${o.under ? `<circle r="30" fill="${o.under}" opacity=".28"/>` : ''}<ellipse cx="2" cy="5" rx="26" ry="27" fill="#0B1838" opacity=".14"/>
    ${[-1, 1].map(k => `<g transform="translate(${k * 22.5} 2)"><rect x="-4.4" y="-13.5" width="8.8" height="27" rx="3.4" fill="#1B1D22"/>${[-8, -2.5, 3, 8.5].map(t => `<rect x="-4.4" y="${t - .7}" width="8.8" height="1.4" fill="#41454F"/>`).join('')}</g>`).join('')}
    <rect x="-18.5" y="-20" width="37" height="41" rx="8" fill="#152238" stroke="#F2B21B" stroke-width="1.8"/>
    ${[-1, 1].map(k => `<circle cx="${k * 13}" cy="-16.8" r="2.4" fill="${o.car || '#C7CBD6'}"/>${o.car ? `<circle cx="${k * 13}" cy="-19" r="6" fill="${o.car}" opacity=".35"/>` : ''}`).join('')}
    <rect x="-13.5" y="-31" width="27" height="10" rx="2.6" fill="#1F5FBF"/>
    ${[-1, 1].map(k => `<circle cx="${k * 6.8}" cy="-26" r="4.4" fill="#D7DCE6" stroke="#9AA3B5" stroke-width=".8"/><circle cx="${k * 6.8}" cy="-26" r="2.1" fill="#5A6070"/>`).join('')}
    <rect x="-12" y="-14.5" width="24" height="21.5" rx="2" fill="#121212"/><rect x="-12" y="5.4" width="24" height="2" fill="#C9A24A"/>
    ${o.mx != null ? o.mx : leds(o.leds || 'none')}<circle cx="-10.2" cy="-3.6" r="1.4" fill="#2E2E2E"/><circle cx="10.2" cy="-3.6" r="1.4" fill="#2E2E2E"/>${o.extra || ''}</g>`;
  const pill = (x, y, w, txt, col, cls = 'tat w s') => `<rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="13" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="${cls}">${txt}</text>`;
  const ok = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1FA463"/><path d="M${x - r * .45} ${y}l${r * .32} ${r * .34}l${r * .55} -${r * .62}" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const ko = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#EF5A5A"/><path d="M${x - r * .38} ${y - r * .38}l${r * .76} ${r * .76}M${x + r * .38} ${y - r * .38}l-${r * .76} ${r * .76}" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
  // tapet blanc amb quadrícula (cada quadre, 10 cm)
  const mat = (x, y, w, h, g = 14) => { let l = ''; for (let i = x + g; i < x + w - 1; i += g) l += `M${i} ${y}V${y + h}`; for (let j = y + g; j < y + h - 1; j += g) l += `M${x} ${j}H${x + w}`;
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="#F8F7F2" stroke="#B98552" stroke-width="3"/><path d="${l}" stroke="#2F4FA0" stroke-opacity=".1" stroke-width="1"/>`; };
  const crate = (x, y, w, h) => `<rect x="${x + 1.5}" y="${y + 2.5}" width="${w}" height="${h}" rx="2" fill="#141428" opacity=".16"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#D9A465" stroke="#8A5A2E" stroke-width="1.4"/><path d="M${x + 3} ${y + 3}L${x + w - 3} ${y + h - 3}M${x + w - 3} ${y + 3}L${x + 3} ${y + h - 3}" stroke="#A8743E" stroke-width="1.4"/>`;
  const meta = (x, y, w, h, txt = L('META', 'META')) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="#3CC47C" fill-opacity=".3" stroke="#1FA463" stroke-width="1.6" stroke-dasharray="4 3"/><text x="${x + w / 2}" y="${y + h / 2 + 4}" text-anchor="middle" class="tat s" style="font-size:11px;fill:#14613A">${txt}</text>`;
  const can = (x, y, r = 5) => `<circle cx="${x + .8}" cy="${y + 1.2}" r="${r}" fill="#000" opacity=".18"/><circle cx="${x}" cy="${y}" r="${r}" fill="#E0463C"/><circle cx="${x}" cy="${y}" r="${r * .66}" fill="none" stroke="#F4D5D2" stroke-width="1.2"/>`;
  // una ona d'ultrasons que surt del davant del robot
  const waves = (x, y, a, n = 3, dur = 1.2) => `<g transform="translate(${x} ${y}) rotate(${a})">${Array.from({ length: n }, (_, k) => `<path d="M-9 0Q0 -6 9 0" fill="none" stroke="#14A3B8" stroke-width="2.4" stroke-linecap="round" opacity="0"><animateTransform attributeName="transform" type="translate" values="0 0;0 -26" dur="${dur}s" begin="${(k * dur / n).toFixed(2)}s" repeatCount="indefinite"/>${SM('opacity', '0;1;0', dur, `begin="${(k * dur / n).toFixed(2)}s"`)}</path>`).join('')}</g>`;
  // blocs de colors (com els del programa)
  const blk = (x, y, w, col, txt, cls = 'tat w s', fs = 11.5) => `<rect x="${x}" y="${y}" width="${w}" height="18" rx="5" fill="${col}"/><text x="${x + 7}" y="${y + 13}" class="${cls}" style="font-size:${fs}px">${txt}</text>`;

  return {
    // una bona missió: objectiu clar, obstacles, un sensor que calgui i una comprovació
    k8good() {
      const path = 'M34 132H96Q110 132 110 118V74Q110 62 122 62H146';
      return tSvg(214, `${mat(10, 12, 170, 160)}
        <path d="M34 132H96Q110 132 110 118V74Q110 62 122 62H160" fill="none" stroke="#121418" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>
        ${meta(130, 30, 44, 44)}${crate(52, 30, 30, 30)}${crate(132, 112, 30, 26)}${can(64, 92)}
        <g><animateMotion dur="5.5s" repeatCount="indefinite" rotate="auto" keyTimes="0;.1;.8;1" keyPoints="0;0;1;1" calcMode="linear" path="${path}"/>
          <g transform="rotate(90)">${bot(0, 0, 0, .42, { car: '#2BD45A' })}${waves(0, -15, 0, 2, 1.1)}</g></g>
        ${[[L('🎯 Objectiu clar', '🎯 Objetivo claro'), .4], [L('🧱 Obstacles', '🧱 Obstáculos'), 1.1], [L('📡 Cal un sensor', '📡 Hace falta un sensor'), 1.8], [L('✅ Es comprova', '✅ Se comprueba'), 2.5]].map(([t, d], i) =>
          `<g ${tA(d, 'ta-in')}><rect x="188" y="${14 + i * 40}" width="126" height="32" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="196" y="${35 + i * 40}" class="tat s" style="font-size:${LANG === 'es' && i === 2 ? 10.6 : 12.5}px">${t}</text></g>`).join('')}
        <g ${tA(3.4, 'ta-pop')}>${pill(160, 196, 250, L('Ni massa fàcil ni impossible', 'Ni demasiado fácil ni imposible'), '#2F5BEA')}</g>`);
    },
    // del paper a la pantalla: l'esbós en una quadrícula de 10 cm i la mateixa pista a l'editor
    k8sketch() {
      const G = 15, X0 = 22, Y0 = 46, gx = (i, j) => [X0 + i * G, Y0 + j * G];
      let grid = ''; for (let i = 0; i <= 8; i++) grid += `M${X0 + i * G} ${Y0}V${Y0 + 6 * G}`; for (let j = 0; j <= 6; j++) grid += `M${X0} ${Y0 + j * G}H${X0 + 8 * G}`;
      const pencil = `<g stroke="#4A4A5A" stroke-width="1.8" fill="none" stroke-linecap="round">
        <path d="M${gx(4, 1)[0] + 2} ${gx(4, 1)[1] + 2}h11v26h-11z M${gx(4, 1)[0] + 2} ${gx(4, 1)[1] + 2}l11 26" pathLength="1" ${tA(.5, 'ta-draw')}/>
        <path d="M${gx(0, 4)[0] + 7} ${gx(0, 4)[1] + 7}H${gx(3, 4)[0] + 7}V${gx(3, 1)[1] + 7}" pathLength="1" stroke-width="3" ${tA(1, 'ta-draw')}/>
        <path d="M${gx(6, 3)[0] + 2} ${gx(6, 3)[1] + 2}h26v26h-26z" pathLength="1" stroke="#1FA463" ${tA(1.5, 'ta-draw')}/>
        <path d="M${gx(0, 4)[0] + 3} ${gx(0, 4)[1] + 8}l8 -4l-8 -4" pathLength="1" stroke="#2F5BEA" stroke-width="2.4" ${tA(1.9, 'ta-draw')}/></g>`;
      // la mateixa pista, a la pantalla
      const S = 11, sx = 188, sy = 50, sc = (i, j) => [sx + i * S, sy + j * S];
      let sg = ''; for (let i = 0; i <= 8; i++) sg += `M${sx + i * S} ${sy}V${sy + 6 * S}`; for (let j = 0; j <= 6; j++) sg += `M${sx} ${sy + j * S}H${sx + 8 * S}`;
      return tSvg(214, `<g transform="rotate(-3 92 100)"><rect x="12" y="32" width="160" height="124" rx="4" fill="#FFFDF4" stroke="#E2D8B8" stroke-width="1.5" filter="url(#bwSh)"/>
          <path d="${grid}" stroke="#9FB2D8" stroke-width=".9"/>${pencil}</g>
        <text x="92" y="22" text-anchor="middle" class="tat s">${L('1. En paper', '1. En papel')}</text>
        <path d="M172 104h12" stroke="#7F95E8" stroke-width="4" stroke-linecap="round"/><path d="M180 96l8 8l-8 8" fill="none" stroke="#7F95E8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <g ${tA(2.4, 'ta-in')}><rect x="180" y="38" width="106" height="90" rx="8" fill="#20306A"/><rect x="186" y="44" width="94" height="78" rx="4" fill="#F8F7F2"/>
          <path d="${sg}" stroke="#2F4FA0" stroke-opacity=".14" stroke-width=".8"/>
          <rect x="${sc(4, 1)[0] + .5}" y="${sc(4, 1)[1] + .5}" width="${S - 1}" height="${2 * S - 1}" fill="#D9A465" stroke="#8A5A2E" stroke-width=".8"/>
          <path d="M${sc(0, 4)[0] + 5} ${sc(0, 4)[1] + 5.5}H${sc(3, 4)[0] + 5.5}V${sc(3, 1)[1] + 5}" fill="none" stroke="#121418" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="${sc(6, 3)[0]}" y="${sc(6, 3)[1]}" width="${2 * S}" height="${2 * S}" rx="3" fill="#3CC47C" fill-opacity=".45" stroke="#1FA463" stroke-dasharray="3 2"/>
          ${bot(sc(0, 4)[0] + 5.5, sc(0, 4)[1] + 5.5, 90, .2)}
          <path d="M174 132h124l-8 8H182z" fill="#9AA3B5"/></g>
        <text x="236" y="22" text-anchor="middle" class="tat s">${L('2. A la pantalla', '2. En la pantalla')}</text>
        <g ${tA(3.2, 'ta-pop')}>${pill(160, 186, 214, L('1 casella = 10 × 10 cm', '1 casilla = 10 × 10 cm'), '#F08A24')}</g>`);
    },
    // el cicle de l'enginyer/a: planifica → programa → prova → millora (i torna-hi)
    k8cycle() {
      const C = [112, 120], R = 60, P = a => [C[0] + R * Math.cos(a * Math.PI / 180), C[1] + R * Math.sin(a * Math.PI / 180)];
      const st = [[-90, '📝', L('Planifica', 'Planifica'), '#2F5BEA'], [0, '🧩', L('Programa', 'Programa'), '#8B5CF6'], [90, '▶️', L('Prova', 'Prueba'), '#1FA463'], [180, '🔧', L('Millora', 'Mejora'), '#F08A24']];
      const nodes = st.map(([a, ic, t, col], i) => { const [x, y] = P(a); return `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})"><circle r="24" fill="#fff" stroke="${col}" stroke-width="4" filter="url(#bwSh)"/><text y="7" text-anchor="middle" style="font-size:19px">${ic}</text>
        <circle r="30" fill="none" stroke="#FFC531" stroke-width="5" opacity="0">${SM('opacity', '0;1;0;0', 5.5, `keyTimes="0;.06;.25;1" begin="${(i * 1.375).toFixed(3)}s"`)}</circle>
        <text y="${a === 90 ? 44 : a === -90 ? -32 : 44}" text-anchor="middle" class="tat s" style="fill:${col}">${t}</text></g>`; }).join('');
      const arc = (a0, a1) => { const [x0, y0] = P(a0 + 24), [x1, y1] = P(a1 - 24); return `<path d="M${x0.toFixed(1)} ${y0.toFixed(1)}A${R} ${R} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}" fill="none" stroke="#B8C6F2" stroke-width="4" stroke-linecap="round"/>`; };
      const dot = `<circle r="6" fill="#FFC531" stroke="#B57A00" stroke-width="1.5"><animateMotion dur="5.5s" repeatCount="indefinite" path="M${C[0]} ${C[1] - R}A${R} ${R} 0 1 1 ${C[0] - .01} ${C[1] - R}"/></circle>`;
      const ver = ['v1', 'v2', 'v3'].map((v, i) => `<text x="${C[0]}" y="${C[1] + 8}" text-anchor="middle" class="tat b" style="font-size:24px;fill:#20306A" opacity="0">${v}${SM('opacity', i === 0 ? '1;1;0;0;1' : i === 1 ? '0;0;1;0;0' : '0;0;0;1;0', 16.5, i === 0 ? 'keyTimes="0;.32;.34;.98;1"' : i === 1 ? 'keyTimes="0;.32;.34;.66;1"' : 'keyTimes="0;.32;.66;.68;1"')}</text>`).join('');
      return tSvg(232, `${arc(-90, 0)}${arc(0, 90)}${arc(90, 180)}${arc(180, 270)}${dot}${nodes}${ver}
        <g ${tA(.6, 'ta-in')}><rect x="222" y="56" width="92" height="124" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
          <text x="268" y="82" text-anchor="middle" class="tat s">${L('A cada', 'En cada')}</text><text x="268" y="100" text-anchor="middle" class="tat s">${L('volta,', 'vuelta,')}</text>
          <text x="268" y="124" text-anchor="middle" class="tat s">${L('el robot', 'el robot')}</text><text x="268" y="142" text-anchor="middle" class="tat s">${L('va una', 'va un')}</text><text x="268" y="162" text-anchor="middle" class="tat b" style="fill:#1FA463;font-size:14px">${L('mica millor', 'poco mejor')}</text></g>`);
    },
    // depurar: els llums i la pantalla expliquen què «pensa» el robot
    k8debug() {
      // el robot avança fins a 10 cm de la caixa i s'atura; la matriu mostra la distància i els llums canvien de color
      const kt = 'keyTimes="0;.12;.62;1"';
      const nums = [['40', '0;1;0;0;0;0;0'], ['28', '0;0;1;0;0;0;0'], ['17', '0;0;0;1;0;0;0'], ['9', '0;0;0;0;1;1;0']].map(([n, v]) => `<text x="0" y="-1" transform="rotate(-90 0 -4)" text-anchor="middle" style="font:900 13px Lexend,system-ui;fill:#FF3B30" opacity="0">${n}${SM('opacity', v, 5.5, 'keyTimes="0;.12;.3;.46;.62;.95;1" calcMode="discrete"')}</text>`).join('');
      const car = col => `<g>${[-1, 1].map(k => `<circle cx="${k * 13}" cy="-16.8" r="2.6" fill="${col}"/><circle cx="${k * 13}" cy="-19.5" r="6.5" fill="${col}" opacity=".4"/>`).join('')}</g>`;
      return tSvg(214, `<rect x="10" y="20" width="300" height="104" rx="12" fill="#F8F7F2" stroke="#B98552" stroke-width="3"/>
        ${crate(256, 36, 28, 72)}
        <g><animateTransform attributeName="transform" type="translate" values="40 72;40 72;206 72;206 72" ${kt} dur="5.5s" repeatCount="indefinite"/>
          <g transform="rotate(90)">${bot(0, 0, 0, .9, { mx: `<rect x="-12" y="-14.5" width="24" height="21.5" rx="2" fill="#121212"/>${nums}`, extra: `<g>${car('#2BD45A')}${SM('opacity', '1;1;1;0;0', 5.5, 'keyTimes="0;.12;.6;.62;1" calcMode="discrete"')}</g><g opacity="0">${car('#FF3B30')}${SM('opacity', '0;0;1;1', 5.5, 'keyTimes="0;.6;.62;1" calcMode="discrete"')}</g>` })}</g>
          <g transform="translate(32 0)">${waves(0, 0, 90, 3, 1)}</g></g>
        <g ${tA(.3, 'ta-in')}>${blk(14, 138, 190, '#1FA463', L('per sempre', 'para siempre'))}
          ${blk(26, 160, 178, '#F08A24', L('si distància &lt; 10:', 'si distancia &lt; 10:'))}
          ${blk(38, 182, 166, '#C43BFF', L('llums vermells i atura', 'luces rojas y para'), 'tat w s', 11)}</g>
        <g ${tA(1.4, 'ta-in')}><rect x="212" y="138" width="102" height="62" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
          <text x="263" y="160" text-anchor="middle" class="tat s" style="font-size:12px">${L('Els llums', 'Las luces')}</text><text x="263" y="176" text-anchor="middle" class="tat s" style="font-size:12px">${L('diuen què', 'dicen qué')}</text><text x="263" y="192" text-anchor="middle" class="tat s" style="font-size:12px">${L('pensa!', '¡piensa!')}</text></g>`);
    },
    // del simulador al robot: el botó </> dona el codi, MakeCode el converteix en un fitxer .hex i el cable el porta a la micro:bit
    k8export() {
      const cable = 'M226 116C240 116 244 150 262 150';
      const file = `<g opacity="0">${SM('opacity', '0;0;1;1;0;0', 5.5, 'keyTimes="0;.5;.53;.7;.73;1"')}<rect x="-10" y="-12" width="20" height="24" rx="3" fill="#FFC531" stroke="#B57A00" stroke-width="1.5"/><text y="4" text-anchor="middle" style="font:900 7px Lexend,system-ui;fill:#6B4A00">.hex</text>
        <animateMotion dur="5.5s" repeatCount="indefinite" keyTimes="0;.5;.7;1" keyPoints="0;0;1;1" calcMode="linear" path="${cable}"/></g>`;
      return tSvg(214, `
        <g ${tA(.1, 'ta-in')}><rect x="8" y="34" width="96" height="104" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
          ${blk(16, 46, 78, '#1FA463', L('en iniciar', 'al iniciar'), 'tat w s', 10.5)}${blk(22, 68, 72, '#2F5BEA', 'motor 150', 'tat w s', 10.5)}${blk(22, 90, 72, '#F08A24', L('espera', 'espera'), 'tat w s', 10.5)}
          <rect x="62" y="112" width="34" height="20" rx="7" fill="#20306A"/><path d="M73 117l-5 5l5 5M85 117l5 5l-5 5" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="79" cy="122" r="15" fill="none" stroke="#FFC531" stroke-width="3" opacity="0">${SM('opacity', '0;0;1;0;0', 5.5, 'keyTimes="0;.12;.18;.26;1"')}</circle></g>
        <text x="56" y="22" text-anchor="middle" class="tat s">${L('1. Simulador', '1. Simulador')}</text>
        <path d="M106 86h10" stroke="#7F95E8" stroke-width="3.5" stroke-linecap="round"/><path d="M113 80l6 6l-6 6" fill="none" stroke="#7F95E8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <g ${tA(1.2, 'ta-in')}><rect x="122" y="34" width="104" height="104" rx="12" fill="#1B2240" filter="url(#bwSh)"/>
          ${['motorRun(…', 'pause(3000)', 'motorStop(…'].map((t, i) => `<text x="130" y="${58 + i * 18}" style="font:700 10.5px ui-monospace,Menlo,monospace;fill:${['#7FE0A6', '#FFD27A', '#9FC0FF'][i]}">${t}</text>`).join('')}
          <rect x="138" y="110" width="72" height="20" rx="7" fill="#7B4DE0"/><text x="174" y="124" text-anchor="middle" class="tat w s" style="font-size:10.5px">${L('Descarrega', 'Descarga')}</text></g>
        <text x="174" y="22" text-anchor="middle" class="tat s">2. MakeCode</text>
        <path d="${cable}" fill="none" stroke="#3D4658" stroke-width="4.4" stroke-linecap="round"/>${file}
        <g>${bot(282, 150, 0, .95, { mx: `<g opacity="0">${SM('opacity', '0;0;1;1;0', 5.5, 'keyTimes="0;.72;.75;.97;1"')}${leds('happy')}</g><g>${SM('opacity', '1;1;0;0;1', 5.5, 'keyTimes="0;.72;.75;.97;1"')}${leds('none')}</g>` })}</g>
        <text x="282" y="22" text-anchor="middle" class="tat s">${L('3. Robot', '3. Robot')}</text>
        <g ${tA(3.6, 'ta-pop')}>${pill(118, 182, 196, L('El mateix programa!', '¡El mismo programa!'), '#1FA463')}</g>`);
    },
    // el món real no és perfecte: amb un temps fix el robot s'atura abans; amb un sensor, encerta
    k8drift() {
      const lane = (y, lbl, col) => `<rect x="96" y="${y - 22}" width="214" height="44" rx="10" fill="#F8F7F2" stroke="#E2D8B8" stroke-width="1.5"/><path d="M276 ${y - 18}V${y + 18}" stroke="#121418" stroke-width="5" stroke-linecap="round"/>
        <text x="88" y="${y + 5}" text-anchor="end" class="tat s" style="fill:${col}">${lbl}</text>`;
      const run = (y, x1, t, extra = '') => `<g><animateTransform attributeName="transform" type="translate" values="118 ${y};118 ${y};${x1} ${y};${x1} ${y}" keyTimes="0;${t};.62;1" dur="5.5s" repeatCount="indefinite"/><g transform="rotate(90)">${bot(0, 0, 0, .55, extra)}</g></g>`;
      return tSvg(214, `${lane(34, L('Simulador', 'Simulador'), '#2F5BEA')}${lane(98, L('Real: temps', 'Real: tiempo'), '#C0392B')}${lane(162, L('Real: sensor', 'Real: sensor'), '#1FA463')}
        ${run(34, 260, .1)}${run(98, 228, .1)}${run(162, 260, .1, { car: '#2BD45A' })}
        <g opacity="0">${SM('opacity', '0;0;1;1', 5.5, 'keyTimes="0;.64;.66;1"')}${ok(298, 34, 10)}${ko(298, 98, 10)}${ok(298, 162, 10)}
          <path d="M246 124H274" stroke="#C0392B" stroke-width="2" stroke-dasharray="3 2"/><text x="260" y="137" text-anchor="middle" class="tat s" style="font-size:11px;fill:#C0392B">−8 cm</text></g>
        <g ${tA(.4, 'ta-in')}><text x="104" y="74" class="tat s" style="font-size:11.5px;fill:#7A6A4A">🔋 ${L('piles gastades', 'pilas gastadas')} · ${L('terra', 'suelo')} · ${L('motors', 'motores')}</text></g>
        <g ${tA(2, 'ta-in')}><text x="160" y="204" text-anchor="middle" class="tat s" style="font-size:12px;fill:#147A47">${L('Amb un sensor, sempre s\'atura a la cinta', 'Con un sensor, siempre se para en la cinta')}</text></g>`);
    },
    // calibrar: mesura, calcula i ajusta
    k8calib() {
      let ticks = ''; for (let i = 0; i <= 10; i++) ticks += `<path d="M${30 + i * 24} 92v${i % 5 ? 6 : 11}" stroke="#7A5B12" stroke-width="1.6"/>${i % 5 ? '' : `<text x="${30 + i * 24}" y="114" text-anchor="middle" style="font:800 10px Lexend,system-ui;fill:#7A5B12">${i * 10}</text>`}`;
      const sw = `<g transform="translate(286 42)"><circle r="20" fill="#fff" stroke="#20306A" stroke-width="3"/><rect x="-4" y="-27" width="8" height="6" rx="2" fill="#20306A"/>
        <path d="M0 0V-14" stroke="#EF5A5A" stroke-width="3" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="0;0;288;288" keyTimes="0;.08;.5;1" dur="5.5s" repeatCount="indefinite"/></path><circle r="2.6" fill="#20306A"/></g>`;
      return tSvg(214, `<rect x="18" y="86" width="264" height="34" rx="5" fill="#FFD866" stroke="#C9A227" stroke-width="1.5"/>${ticks}
        <g><animateTransform attributeName="transform" type="translate" values="30 62;30 62;155 62;155 62" keyTimes="0;.08;.5;1" dur="5.5s" repeatCount="indefinite"/><g transform="rotate(90)">${bot(0, 0, 0, .6)}</g></g>
        ${sw}<g opacity="0">${SM('opacity', '0;0;1;1', 5.5, 'keyTimes="0;.5;.52;1"')}<text x="286" y="80" text-anchor="middle" class="tat b" style="font-size:13px">4 s</text></g>
        ${[[130, 1, L('52 cm en 4 s → <tspan font-weight="900">13 cm/s</tspan>', '52 cm en 4 s → <tspan font-weight="900">13 cm/s</tspan>'), '#2F5BEA', 2.6, 236], [168, 2, L('78 cm ÷ 13 = <tspan font-weight="900">6 s</tspan>', '78 cm ÷ 13 = <tspan font-weight="900">6 s</tspan>'), '#1FA463', 3.4, 196]].map(([y, n, t, col, d, w]) => `<g ${tA(d, 'ta-in')}><rect x="10" y="${y}" width="${w}" height="32" rx="11" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="28" cy="${y + 16}" r="11" fill="${col}"/><text x="28" y="${y + 21}" text-anchor="middle" class="tat w s">${n}</text><text x="46" y="${y + 21}" class="tat s" style="font-size:13px">${t}</text></g>`).join('')}
        <g ${tA(4.1, 'ta-pop')}>${pill(262, 184, 100, '6000 ms', '#F08A24')}</g>
        <text x="16" y="28" class="tat s" style="font-size:12.5px">${L('Mesura → calcula → ajusta', 'Mide → calcula → ajusta')}</text>`);
    },
    // presentar la missió com un enginyer/a: quatre parts i la demostració
    k8pitch() {
      const parts = [[L('La missió', 'La misión'), '🎯', '#2F5BEA'], [L('Com funciona', 'Cómo funciona'), '📡', '#8B5CF6'], [L('Un problema', 'Un problema'), '🔧', '#F08A24'], [L('La demo!', '¡La demo!'), '🤖', '#1FA463']];
      const cards = parts.map(([t, ic, col], i) => `<g ${tA(.3 + i * .8, 'ta-in')}><rect x="180" y="${12 + i * 44}" width="136" height="36" rx="10" fill="#fff" stroke="${col}" stroke-width="2.5" filter="url(#bwSh)"/>
        <circle cx="196" cy="${30 + i * 44}" r="10" fill="${col}"/><text x="196" y="${35 + i * 44}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="211" y="${34.5 + i * 44}" class="tat s" style="font-size:11.5px">${ic} ${t}</text></g>`).join('');
      const heads = [30, 62, 94, 126, 158].map((x, i) => `<g transform="translate(${x} ${188 + (i % 2) * 4})"><circle r="11" fill="${['#F2B880', '#C98A5B', '#F6D2B0', '#8D5A3B', '#E8B48A'][i]}"/><path d="M-14 22a14 12 0 0 1 28 0z" fill="${['#2F5BEA', '#EF5A5A', '#1FA463', '#F08A24', '#8B5CF6'][i]}"/></g>`).join('');
      return tSvg(214, `<rect x="12" y="14" width="160" height="104" rx="8" fill="#20306A"/><rect x="18" y="20" width="148" height="92" rx="4" fill="#F8F7F2"/>
        <path d="M30 96H90Q104 96 104 82V44" fill="none" stroke="#121418" stroke-width="4" stroke-linecap="round"/>${meta(116, 30, 36, 34)}
        <g><animateMotion dur="5.5s" repeatCount="indefinite" rotate="auto" keyTimes="0;.2;.8;1" keyPoints="0;0;1;1" calcMode="linear" path="M30 96H90Q104 96 104 82V48"/><g transform="rotate(90)">${bot(0, 0, 0, .3, { car: '#2BD45A' })}</g></g>
        <path d="M92 118v30M62 160l30-12 30 12" stroke="#4A5578" stroke-width="3" fill="none" stroke-linecap="round"/>
        ${heads}${cards}
        <g opacity="0">${SM('opacity', '0;0;1;1;0', 5.5, 'keyTimes="0;.7;.74;.95;1"')}<text x="150" y="160" style="font-size:20px">👏</text></g>`);
    }
  };
})());
