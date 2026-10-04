/* Tech Robot · unitat 3 «Llums, sons i botons» · animacions de teoria (TANI) */
Object.assign(TANI, {
  // el bloc «Llum»: cada bloc encén un color, un darrere l'altre (el programa i en Bit, sincronitzats)
  u3light() {
    const C = { r: '#EF5A5A', y: '#FFC531', g: '#3CC47C', u: '#3D8BFF' }, ks = ['r', 'y', 'g', 'u'], D = 4.8;
    const ico = BIT_ICO.light.replace(/^<svg[^>]*>|<\/svg>$/g, '');
    const fillA = `<animate attributeName="fill" values="${ks.map(k => C[k]).join(';')}" keyTimes="0;.25;.5;.75" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>`;
    const chip = (k, i) => `<g transform="translate(176 ${26 + i * 44})"><rect width="132" height="34" rx="10" fill="#E5489A" filter="url(#bwSh)"/><g transform="translate(7 5)" color="#fff"><svg width="24" height="24" viewBox="0 0 24 24">${ico}</svg></g>
      <text x="38" y="23" class="tat w">${L('Llum', 'Luz')}</text><circle cx="110" cy="17" r="10" fill="${C[k]}" stroke="#fff" stroke-width="3"/></g>`;
    return tSvg(222, `<rect x="10" y="12" width="150" height="178" rx="20" fill="#FFF0F7" stroke="#F7C3DD" stroke-width="2"/>
      <circle cx="85" cy="70" r="46" opacity=".22">${fillA}</circle>
      <g transform="translate(85 180) scale(1.6)">${bitBot(2)}
        <circle cy="-65" r="10" opacity=".45">${fillA}<animate attributeName="r" values="8;12;8" dur="1.2s" repeatCount="indefinite"/></circle>
        <circle cy="-65" r="4.4" stroke="#20306A" stroke-width="2.2">${fillA}</circle><circle cy="-19" r="5" stroke="#20306A" stroke-width="2.2">${fillA}</circle></g>
      ${ks.map(chip).join('')}
      <g><rect x="172" y="22" width="140" height="42" rx="13" fill="none" stroke="#20306A" stroke-width="3.5"/><path d="M164 37l7 6l-7 6z" fill="#20306A"/>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 44;0 88;0 132" keyTimes="0;.25;.5;.75" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></g>
      <text x="160" y="212" text-anchor="middle" class="tat b">${L('1 bloc Llum = 1 color', '1 bloque Luz = 1 color')}</text>`);
  },
  // llums que donen missatges: el semàfor i el far del port
  u3traffic() {
    const D = 6, lamp = (cy, on, off, vals, kt) => `<circle cx="66" cy="${cy}" r="15" fill="${off}" stroke="#151B33" stroke-width="2"><animate attributeName="fill" values="${vals.map(v => v ? on : off).join(';')}" keyTimes="${kt}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></circle>`;
    const lab = (y, t, vals, kt, col) => `<g><rect x="96" y="${y - 15}" width="66" height="24" rx="12" fill="${col}"/><text x="129" y="${y + 2}" text-anchor="middle" class="tat w s">${t}</text><animate attributeName="opacity" values="${vals.map(v => v ? 1 : .18).join(';')}" keyTimes="${kt}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></g>`;
    const kt = '0;.45;.62', blink = { values: '1;.15;1;.15;.15', beam: '.55;.08;.55;.08;.08', kt: '0;.12;.24;.36;1' };
    const wave = y => `<path d="M176 ${y} ${Array.from({ length: 10 }, () => 'q7 -5 14 0').join(' ')}" fill="none" stroke="#C9F1FF" stroke-width="2.4" stroke-linecap="round" opacity=".8"/>`;
    return tSvg(222, `<rect x="62" y="134" width="8" height="58" rx="3" fill="#8C93A6"/><ellipse cx="66" cy="192" rx="26" ry="6" fill="#0B2A12" opacity=".12"/>
      <rect x="40" y="12" width="52" height="124" rx="16" fill="#2A3557" filter="url(#bwSh)"/>
      ${lamp(38, '#EF5A5A', '#5A2B33', [0, 0, 1], kt)}${lamp(74, '#FFC531', '#5A4A22', [0, 1, 0], kt)}${lamp(110, '#3CC47C', '#1F4A35', [1, 0, 0], kt)}
      ${lab(38, L('Para', 'Para'), [0, 0, 1], kt, '#EF5A5A')}${lab(74, L('Compte!', '¡Ojo!'), [0, 1, 0], kt, '#E09A00')}${lab(110, L('Passa', 'Pasa'), [1, 0, 0], kt, '#2FA866')}
      <text x="80" y="214" text-anchor="middle" class="tat s">${L('El semàfor', 'El semáforo')}</text>
      <rect x="170" y="150" width="146" height="50" rx="14" fill="#4FB4E8"/>${wave(166)}${wave(182)}
      <path d="M212 164q4 -22 34 -24q30 2 34 24z" fill="url(#bwRock)" stroke="#5E667A" stroke-width="2"/>
      <path d="M232 146l4 -86h20l4 86z" fill="#fff" stroke="#8E2A22" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M235.4 128h21.2l.9 18h-23zM237 94h18l.8 17h-19.6zM238.5 62h15l.7 15h-16.4z" fill="#EF5A5A"/>
      <rect x="230" y="54" width="32" height="7" rx="3" fill="#20306A"/>
      <g opacity=".15"><path d="M246 44L178 18L178 70Z M246 44L314 18L314 70Z" fill="#FFE680"/><animate attributeName="opacity" values="${blink.beam}" keyTimes="${blink.kt}" calcMode="discrete" dur="3s" repeatCount="indefinite"/></g>
      <rect x="236" y="34" width="20" height="20" rx="4" fill="#BDEBFF" stroke="#20306A" stroke-width="2"/>
      <circle cx="246" cy="44" r="7" fill="#FFD54A"><animate attributeName="opacity" values="${blink.values}" keyTimes="${blink.kt}" calcMode="discrete" dur="3s" repeatCount="indefinite"/></circle>
      <path d="M232 34L246 22L260 34Z" fill="#EF5A5A" stroke="#8E2A22" stroke-width="2" stroke-linejoin="round"/>
      <g transform="translate(296 176)"><path d="M-14 0h28l-5 8h-18z" fill="#B57536"/><path d="M0 0v-18l11 14z" fill="#fff" stroke="#8E6A3A" stroke-width="1.5"/></g>
      <text x="246" y="214" text-anchor="middle" class="tat s">${L('El far del port', 'El faro del puerto')}</text>`);
  },
  // un bucle amb dos llums que s'alternen: pampallugues
  u3blink() {
    const C = { y: '#FFC531', u: '#3D8BFF' }, D = 4.8, kt = '0;.125;.25;.375;.5;.625;.75';
    const icoL = BIT_ICO.light.replace(/^<svg[^>]*>|<\/svg>$/g, ''), icoR = BIT_ICO.rep.replace(/^<svg[^>]*>|<\/svg>$/g, '');
    const fillA = `<animate attributeName="fill" values="${[C.y, C.u, C.y, C.u, C.y, C.u, C.u].join(';')}" keyTimes="${kt}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>`;
    const chip = (k, y) => `<g transform="translate(30 ${y})"><rect width="136" height="30" rx="9" fill="#E5489A"/><g transform="translate(6 4)" color="#fff"><svg width="22" height="22" viewBox="0 0 24 24">${icoL}</svg></g><text x="34" y="20.5" class="tat w s">${L('Llum', 'Luz')}</text><circle cx="116" cy="15" r="9" fill="${C[k]}" stroke="#fff" stroke-width="3"/></g>`;
    const num = (n, a, b) => `<text x="234" y="54" text-anchor="middle" class="tat b" opacity="0">${n}<animate attributeName="opacity" values="${a ? '0;1;0' : '1;0'}" keyTimes="${a ? `0;${a};${b}` : `0;${b}`}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></text>`;
    const dots = ['y', 'u', 'y', 'u', 'y', 'u'].map((k, i) => `<circle cx="${26 + i * 27}" cy="186" r="10" fill="${C[k]}" stroke="#fff" stroke-width="2.5" filter="url(#bwSh)"${i ? ` opacity="0"><animate attributeName="opacity" values="0;1" keyTimes="0;${(i * .125).toFixed(3)}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></circle>` : '/>'}`).join('');
    return tSvg(222, `<path d="M12 40a12 12 0 0 1 12 -12h170a12 12 0 0 1 12 12v12a12 12 0 0 1 -12 12h-168v72h56a10 10 0 0 1 10 10v2a10 10 0 0 1 -10 10h-58a12 12 0 0 1 -12 -12z" fill="#1FA463" filter="url(#bwSh)"/>
      <g transform="translate(18 34)" color="#fff"><svg width="24" height="24" viewBox="0 0 24 24">${icoR}</svg></g><text x="48" y="52" class="tat w s">${L('Repeteix 3 vegades', 'Repite 3 veces')}</text>
      ${chip('y', 70)}${chip('u', 106)}
      <g><rect x="26" y="66" width="144" height="38" rx="12" fill="none" stroke="#20306A" stroke-width="3"/>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 36;0 0;0 36;0 0;0 36;0 0" keyTimes="${kt}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0" keyTimes="0;.75" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></g>
      <circle cx="234" cy="48" r="16" fill="#fff" stroke="#1FA463" stroke-width="3"/>${num(1, 0, .25)}${num(2, .25, .5)}${num(3, .5, 1)}
      ${dots}
      <circle cx="272" cy="96" r="40" opacity=".25">${fillA}</circle>
      <g transform="translate(272 184) scale(1.3)">${bitBot(2)}<circle cy="-65" r="11" opacity=".5">${fillA}</circle><circle cy="-65" r="4.4" stroke="#20306A" stroke-width="2.2">${fillA}</circle><circle cy="-19" r="5" stroke="#20306A" stroke-width="2.2">${fillA}</circle></g>
      <text x="160" y="214" text-anchor="middle" class="tat b">${L('Groc i blau, 3 vegades: parpelleja!', 'Amarillo y azul, 3 veces: ¡parpadea!')}</text>`);
  },
  // les set notes: un xilòfon que en Bit toca de la més greu a la més aguda
  u3notes() {
    const N = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'], col = ['#EF5A5A', '#F08A24', '#FFC531', '#3CC47C', '#14A3B8', '#3D7BF4', '#8B5CF6'], D = 5.6;
    const bx = i => 28 + i * 40, bh = i => 128 - i * 9, by = i => 104 - bh(i) / 2, th = i => .45 + i * .55;
    const kt = a => a.map(v => (v / D).toFixed(4)).join(';');
    const bars = N.map((n, i) => `<g><rect x="${bx(i)}" y="${by(i)}" width="34" height="${bh(i)}" rx="9" fill="${col[i]}" stroke="${exvMixT(col[i], -.28)}" stroke-width="2.5" filter="url(#bwSh)"/>
      <rect x="${bx(i) + 6}" y="${by(i) + 7}" width="7" height="${bh(i) - 14}" rx="3.5" fill="#fff" opacity=".3"/><circle cx="${bx(i) + 17}" cy="${by(i) + 10}" r="3" fill="#fff" opacity=".85"/><circle cx="${bx(i) + 17}" cy="${by(i) + bh(i) - 10}" r="3" fill="#fff" opacity=".85"/>
      <rect x="${bx(i)}" y="${by(i)}" width="34" height="${bh(i)}" rx="9" fill="#fff" opacity="0"><animate attributeName="opacity" values="0;0;.8;0;0" keyTimes="${kt([0, th(i) - .01, th(i), th(i) + .35, D])}" dur="${D}s" repeatCount="indefinite"/></rect>
      <text x="${bx(i) + 17}" y="188" text-anchor="middle" class="tat s">${n}</text>
      <g transform="translate(${bx(i) + 20} ${by(i) - 8})" opacity="0"><g fill="${exvMixT(col[i], -.2)}"><ellipse cx="-3" cy="0" rx="5.5" ry="4" transform="rotate(-20 -3 0)"/><rect x="1.6" y="-18" width="2.6" height="18"/><path d="M4.2 -18q7 2 6.5 10q-2 -4.5 -6.5 -4.5z"/></g>
        <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="${kt([0, th(i), th(i) + .05, th(i) + .9, D])}" dur="${D}s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="translate" values="${bx(i) + 20} ${by(i) - 8};${bx(i) + 20} ${by(i) - 8};${bx(i) + 26} ${by(i) - 30};${bx(i) + 26} ${by(i) - 30}" keyTimes="${kt([0, th(i), th(i) + .9, D])}" dur="${D}s" repeatCount="indefinite"/></g></g>`).join('');
    const pts = [[0, bx(0) + 17, 72]];
    N.forEach((_, i) => { pts.push([th(i) - .22, bx(i) + 17, 72]); pts.push([th(i), bx(i) + 17, 92]); });
    pts.push([th(6) + .4, bx(6) + 17, 72], [D - .3, bx(0) + 17, 72], [D, bx(0) + 17, 72]);
    return tSvg(220, `<path d="M18 54L302 80" stroke="#9A6538" stroke-width="10" stroke-linecap="round"/><path d="M18 156L302 130" stroke="#9A6538" stroke-width="10" stroke-linecap="round"/>
      ${bars}
      <g><g transform="rotate(25)"><rect x="-3" y="-54" width="6" height="54" rx="3" fill="#8A5A33"/><circle r="10" fill="#FFE3B0" stroke="#7A4A1E" stroke-width="2.5"/></g>
        <animateTransform attributeName="transform" type="translate" values="${pts.map(p => p[1] + ' ' + p[2]).join(';')}" keyTimes="${kt(pts.map(p => p[0]))}" dur="${D}s" repeatCount="indefinite"/></g>
      <text x="24" y="212" class="tat s">${L('més greu', 'más grave')}</text><path d="M112 207h96" stroke="#14204A" stroke-width="3" stroke-linecap="round"/><path d="M204 201l8 6l-8 6" fill="none" stroke="#14204A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text x="296" y="212" text-anchor="end" class="tat s">${L('més aguda', 'más aguda')}</text>`);
  },
  // l'ordre de les notes canvia la melodia: do-mi-sol puja, sol-mi-do baixa
  u3melody() {
    const C = { do: '#EF5A5A', mi: '#FFC531', sol: '#14A3B8' }, H = { do: 0, mi: 1, sol: 2 };
    const card = (x0, seq, t0, lab, up) => {
      const px = i => x0 + 30 + i * 44, py = n => 150 - H[n] * 38;
      const steps = seq.map((n, i) => `<rect x="${px(i) - 19}" y="${py(n) + 16}" width="38" height="${166 - py(n) - 16}" rx="7" fill="#F2DDA9" stroke="#E2BE76" stroke-width="2"/>`).join('');
      const notes = seq.map((n, i) => `<g ${tA(t0 + i * .6)}><path d="M${px(i) + 12} ${py(n)}v-30" stroke="#14204A" stroke-width="3" stroke-linecap="round"/><path d="M${px(i) + 12} ${py(n) - 30}q10 4 9 15" fill="none" stroke="#14204A" stroke-width="3" stroke-linecap="round"/><circle cx="${px(i)}" cy="${py(n)}" r="15" fill="${C[n]}" stroke="${exvMixT(C[n], -.3)}" stroke-width="2.5"/><text x="${px(i)}" y="${py(n) + 5}" text-anchor="middle" class="tat s ${n === 'mi' ? '' : 'w'}">${n}</text></g>`).join('');
            return `<g ${tA(t0 - .2, 'ta-in')}><rect x="${x0}" y="8" width="148" height="194" rx="18" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="${x0 + 74}" y="34" text-anchor="middle" class="tat b">${seq.join(' · ')}</text>${steps}</g>${notes}
        <g ${tA(t0 + 1.8, 'ta-fade')}><text x="${x0 + 64}" y="192" text-anchor="middle" class="tat b" style="fill:#C2307A">${lab}</text>
          <path d="${up ? `M${x0 + 102} 194l16 -16m-10 0h10v10` : `M${x0 + 102} 178l16 16m-10 0h10v-10`}" fill="none" stroke="#C2307A" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g>`;
    };
    return tSvg(212, card(8, ['do', 'mi', 'sol'], .4, L('puja!', '¡sube!'), true) + card(164, ['sol', 'mi', 'do'], 2.8, L('baixa!', '¡baja!'), false));
  },
  // un esdeveniment: passa una cosa i el programa reacciona
  u3event() {
    const D = 5.6, k = a => a.map(v => (v / D).toFixed(4)).join(';');
    const show = t => `<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="${k([0, t, t + .15, D - .35, D])}" dur="${D}s" repeatCount="indefinite"/>`;
    const press = t => `<animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 4;0 0;0 0" keyTimes="${k([0, t - .25, t, t + .3, D])}" dur="${D}s" repeatCount="indefinite"/>`;
    const row = (i, trig, ttxt, res, rtxt) => { const y = 46 + i * 58, t = .7 + i * 1.5;
      return `<g transform="translate(0 ${y})"><rect x="8" y="0" width="304" height="50" rx="15" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <g transform="translate(34 25)">${trig(t)}</g><text x="58" y="30" class="tat s">${ttxt}</text>
        <g opacity="0">${show(t)}<path d="M162 25h18" stroke="#E5489A" stroke-width="4" stroke-linecap="round"/><path d="M177 18l8 7l-8 7" fill="none" stroke="#E5489A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <g transform="translate(206 25)">${res}</g><text x="226" y="30" class="tat s">${rtxt}</text></g></g>`; };
    const bell = t => `<rect x="-14" y="-16" width="28" height="32" rx="7" fill="#E8EEFF" stroke="#9FB2E6" stroke-width="2"/><g>${press(t)}<circle r="8" fill="#F2B21B" stroke="#B57A00" stroke-width="2"/></g>`;
    const ring = `<path d="M-9 6q0 -16 9 -16q9 0 9 16z" fill="#FFC531" stroke="#B57A00" stroke-width="2" stroke-linejoin="round"/><circle cy="8" r="3" fill="#B57A00"/><path d="M-13 -8q-3 6 0 12M13 -8q3 6 0 12" fill="none" stroke="#E5489A" stroke-width="2.5" stroke-linecap="round"/>`;
    const sw = t => `<rect x="-11" y="-17" width="22" height="34" rx="6" fill="#fff" stroke="#9FB2E6" stroke-width="2.5"/><rect x="-5" y="-10" width="10" height="11" rx="3" fill="#20306A"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 9;0 9;0 0" keyTimes="${k([0, t - .05, t, D - .35, D])}" dur="${D}s" repeatCount="indefinite"/></rect>`;
    const bulb = `<circle cy="-3" r="16" fill="#FFE680" opacity=".55"/><path d="M0 -15a10 10 0 0 0 -6 18v4h12v-4a10 10 0 0 0 -6 -18z" fill="#FFD54A" stroke="#B57A00" stroke-width="2"/><rect x="-5" y="8" width="10" height="5" rx="2" fill="#8C93A6"/>`;
    const pole = t => `<rect x="-11" y="-16" width="22" height="32" rx="5" fill="#FFC531" stroke="#B57A00" stroke-width="2"/><g>${press(t)}<circle cy="2" r="6" fill="#20306A"/></g>`;
    const walk = `<rect x="-12" y="-17" width="24" height="34" rx="6" fill="#1B2440"/><g fill="#3CC47C" stroke="#3CC47C" stroke-width="3" stroke-linecap="round"><circle cy="-9" r="3.4" stroke="none"/><path d="M0 -4v8M0 4l-5 8M0 4l5 7M0 -3l-6 5M0 -3l6 4" fill="none"/></g>`;
    return tSvg(226, `<rect x="8" y="6" width="146" height="30" rx="15" fill="#1B2B6B"/><text x="81" y="26" text-anchor="middle" class="tat w s">${L('Quan passa…', 'Cuando pasa…')}</text>
      <rect x="166" y="6" width="146" height="30" rx="15" fill="#E5489A"/><text x="239" y="26" text-anchor="middle" class="tat w s">${L('…reacciona!', '…¡reacciona!')}</text>
      ${row(0, bell, L('El timbre', 'El timbre'), ring, L('Ding-dong!', '¡Din-don!'))}
      ${row(1, sw, L("L'interruptor", 'El interruptor'), bulb, L("S'encén!", '¡Se enciende!'))}
      ${row(2, pole, L('El polsador', 'El pulsador'), walk, L('Passa!', '¡Pasa!'))}`);
  },
  // els botons A i B: cada botó té els seus blocs; sense prémer, en Bit espera
  u3buttons() {
    const D = 6, k = a => a.map(v => (v / D).toFixed(4)).join(';'), tA1 = 1.1, tA2 = 2.5, tB = 3.9;
    const ico = n => BIT_ICO[n].replace(/^<svg[^>]*>|<\/svg>$/g, '');
    const card = (y, key, lab, kk, glow) => `<g transform="translate(6 ${y})"><rect width="170" height="70" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
      <rect width="170" height="70" rx="14" fill="none" stroke="#E5489A" stroke-width="4" opacity="0"><animate attributeName="opacity" values="${glow.v}" keyTimes="${glow.k}" dur="${D}s" repeatCount="indefinite"/></rect>
      <circle cx="22" cy="20" r="12" fill="#1B2440"/><text x="22" y="25" text-anchor="middle" class="tat w s">${key}</text><text x="42" y="25" class="tat s">${L('Quan premo', 'Al pulsar')} ${key}</text>
      <g transform="translate(10 36)"><rect width="150" height="26" rx="8" fill="#3D7BF4"/><g transform="translate(5 3)" color="#fff"><svg width="20" height="20" viewBox="0 0 24 24">${ico(kk)}</svg></g><text x="30" y="18" class="tat w s">${lab}</text></g></g>`;
    const glow = ts => ({ v: '0;' + ts.map(() => '0;1;0').join(';') + ';0', k: k([0, ...ts.flatMap(t => [t - .05, t, t + .7]), D]) });
    const tile = i => `<rect x="${186 + i * 44}" y="98" width="40" height="40" rx="10" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.5"/>`;
    const key = (x, key, ts) => `<g transform="translate(${x} 192)"><circle r="17" fill="#0A0C16" cy="3"/><g><circle r="17" fill="#2A2F45"/><text y="6" text-anchor="middle" class="tat w b">${key}</text><animateTransform attributeName="transform" type="translate" values="0 0;${ts.map(() => '0 0;0 3;0 0').join(';')};0 0" keyTimes="${k([0, ...ts.flatMap(t => [t - .1, t, t + .25]), D])}" dur="${D}s" repeatCount="indefinite"/></g></g>`;
    const bx = i => 206 + i * 44;
    return tSvg(226, `${card(16, 'A', L('Endavant', 'Adelante'), 'fwd', glow([tA1, tA2]))}${card(100, 'B', L('Gira a la dreta', 'Gira a la derecha'), 'right', glow([tB]))}
      <text x="250" y="34" text-anchor="middle" class="tat s">${L('En Bit espera…', 'Bit espera…')}</text><text x="250" y="54" text-anchor="middle" class="tat s">${L('…fins que prems!', '…¡hasta que pulsas!')}</text>
      ${[0, 1, 2].map(tile).join('')}
      <g><g opacity="1"><g transform="scale(.82)">${bitBot(1)}</g><animate attributeName="opacity" values="1;0;1" keyTimes="0;${(tB / D).toFixed(4)};1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></g>
        <g opacity="0"><g transform="scale(.82)">${bitBot(2)}</g><animate attributeName="opacity" values="0;1;0" keyTimes="0;${(tB / D).toFixed(4)};1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></g>
        <animateTransform attributeName="transform" type="translate" values="${bx(0)} 132;${bx(0)} 132;${bx(1)} 132;${bx(1)} 132;${bx(2)} 132;${bx(2)} 132;${bx(0)} 132" keyTimes="${k([0, tA1, tA1 + .5, tA2, tA2 + .5, D - .3, D])}" dur="${D}s" repeatCount="indefinite"/></g>
      <rect x="192" y="166" width="116" height="52" rx="22" fill="#D9DEEA"/>${key(224, 'A', [tA1, tA2])}${key(276, 'B', [tB])}`);
  },
  // la coreografia: un pas de ball (gir, llum i nota) que es repeteix
  u3dance() {
    const views = [[2, 'r'], [3, 'y'], [0, 'g'], [1, 'u']];
    const ico = n => BIT_ICO[n].replace(/^<svg[^>]*>|<\/svg>$/g, '');
    const chip = (y, kk, col, lab, extra) => `<g transform="translate(178 ${y})"><rect width="132" height="28" rx="8" fill="${col}"/><g transform="translate(5 4)" color="#fff"><svg width="20" height="20" viewBox="0 0 24 24">${ico(kk)}</svg></g><text x="30" y="19" class="tat w s">${lab}</text>${extra || ''}</g>`;
    const note = (x, d, c) => `<g opacity="0"><g fill="${c}"><ellipse cx="-3" cy="0" rx="5.5" ry="4" transform="rotate(-20 -3 0)"/><rect x="1.6" y="-17" width="2.6" height="17"/><path d="M4.2 -17q7 2 6.5 10q-2 -4.5 -6.5 -4.5z"/></g>
      <animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="${d}s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="${x} 92;${x + 8} 40" dur="2.4s" begin="${d}s" repeatCount="indefinite"/></g>`;
    const conf = (x, d, c) => `<rect width="7" height="7" rx="1.5" fill="${c}"><animateTransform attributeName="transform" type="translate" values="${x} -10;${x + 10} 200" dur="3.2s" begin="${d}s" repeatCount="indefinite"/></rect>`;
    return tSvg(226, `<rect x="6" y="6" width="160" height="214" rx="20" fill="#2B1F55"/>
      <path d="M22 6L52 196H106Z" fill="#FFE680" opacity=".16"><animate attributeName="opacity" values=".08;.24;.08" dur="2.4s" repeatCount="indefinite"/></path><path d="M150 6L66 196H120Z" fill="#FF9BC8" opacity=".16"><animate attributeName="opacity" values=".24;.08;.24" dur="2.4s" repeatCount="indefinite"/></path>
      ${conf(30, 0, '#FFC531')}${conf(70, 1.1, '#3CC47C')}${conf(120, .5, '#3D8BFF')}${conf(140, 2, '#EF5A5A')}${conf(96, 2.6, '#FF9BC8')}
      <ellipse cx="86" cy="196" rx="66" ry="14" fill="#E5489A"/><ellipse cx="86" cy="192" rx="66" ry="14" fill="#F77DB8"/>
      <g transform="translate(86 192) scale(1.45)">${views.map(([d, c], i) => `<g class="tv tv${i}">${bitBot(d, c)}</g>`).join('')}</g>
      ${note(118, 0, '#FFC531')}${note(44, 1.2, '#7DF3FF')}
      <path d="M172 18a10 10 0 0 1 10 -10h120a10 10 0 0 1 10 10v16a10 10 0 0 1 -10 10h-112v104h40a8 8 0 0 1 8 8a8 8 0 0 1 -8 8h-48a10 10 0 0 1 -10 -10z" fill="#1FA463" filter="url(#bwSh)"/>
      <g transform="translate(178 14)" color="#fff"><svg width="22" height="22" viewBox="0 0 24 24">${ico('rep')}</svg></g><text x="204" y="31" class="tat w s">${L('Repeteix', 'Repite')}</text><rect x="272" y="14" width="30" height="22" rx="7" fill="#fff"/><text x="287" y="30" text-anchor="middle" class="tat s">4</text>
      ${chip(52, 'right', '#3D7BF4', L('Gira', 'Gira'))}${chip(84, 'light', '#E5489A', L('Llum', 'Luz'), '<circle cx="114" cy="14" r="8" fill="#FFC531" stroke="#fff" stroke-width="2.5"/>')}${chip(116, 'note', '#14A3B8', L('Nota mi', 'Nota mi'))}
      <text x="242" y="194" text-anchor="middle" class="tat b">${L('Un pas de ball', 'Un paso de baile')}</text><text x="242" y="214" text-anchor="middle" class="tat s">${L('que es repeteix', 'que se repite')}</text>`, 'loop4');
  }
});
