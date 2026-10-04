Object.assign(TANI, {
  // una variable és una capsa amb nom que recorda un número (i el número canvia: 0, 1, 2, 3)
  u6box() {
    const sw = (items, ts) => items.map((h, i) => { const a = (ts[i] / 5.5).toFixed(3), b = ((ts[i + 1] ?? 5.5) / 5.5).toFixed(3);
      return `<g visibility="${i ? 'hidden' : 'visible'}"><animate attributeName="visibility" dur="5.5s" repeatCount="indefinite" calcMode="discrete" keyTimes="${i ? `0;${a};${b}` : `0;${b}`}" values="${i ? 'hidden;visible;hidden' : 'visible;hidden'}"/>${h}</g>`; }).join('');
    const ts = [0, 1.3, 2.4, 3.5];
    const plus = (x, y, t) => `<g ${tA(t)}><circle cx="${x}" cy="${y}" r="15" fill="#E0533F" stroke="#fff" stroke-width="2.5" filter="url(#bwSh)"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w s">+1</text></g>`;
    return tSvg(214, `
      <ellipse cx="98" cy="184" rx="78" ry="8" fill="#0B2A12" opacity=".1"/>
      <path d="M30 78h136v104h-136z" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="3" stroke-linejoin="round"/>
      <path d="M30 78l-14 -22h136l14 22z" fill="#EDBB7A" stroke="#7A4A1E" stroke-width="3" stroke-linejoin="round"/>
      <path d="M166 78l14 -22v104l-14 22z" fill="#A86A33" stroke="#7A4A1E" stroke-width="3" stroke-linejoin="round"/>
      <rect x="58" y="90" width="80" height="62" rx="14" fill="#fff" stroke="#E0533F" stroke-width="4"/>
      ${sw([0, 1, 2, 3].map(n => `<text x="98" y="139" text-anchor="middle" font-size="46" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#E0533F">${n}</text>`), ts)}
      <rect x="44" y="158" width="108" height="20" rx="10" fill="#E0533F"/><text x="98" y="173" text-anchor="middle" class="tat w s">${L('comptador', 'contador')}</text>
      ${plus(36, 40, 1.3)}${plus(98, 30, 2.4)}${plus(160, 40, 3.5)}
      <g ${tA(.5, 'ta-in')}><rect x="200" y="20" width="110" height="78" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <rect x="212" y="30" width="86" height="38" rx="8" fill="#14204A"/>
        ${sw(['2', '3'].map(n => `<text x="236" y="58" text-anchor="middle" font-size="24" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#FFC531">${n}</text>`), [0, 2.4])}
        <text x="255" y="57" text-anchor="middle" font-size="20" font-weight="900" fill="#FFC531">:</text><text x="274" y="58" text-anchor="middle" font-size="24" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#FFC531">1</text>
        <text x="255" y="88" text-anchor="middle" class="tat s">${L('marcador', 'marcador')}</text></g>
      <g ${tA(1, 'ta-in')}><rect x="200" y="110" width="110" height="78" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <g transform="translate(222 124)"><path d="M6 0c6 0 8 8 7 15s-4 12 -8 12s-6 -4 -6 -11s1 -16 7 -16z" fill="#3D7BF4"/><path d="M20 12c5 0 7 7 6 13s-4 10 -7 10s-5 -4 -5 -10s1 -13 6 -13z" fill="#3D7BF4" opacity=".7"/></g>
        ${sw(['348', '349', '350', '351'].map(n => `<text x="278" y="152" text-anchor="middle" font-size="20" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#3D7BF4">${n}</text>`), ts)}
        <text x="255" y="178" text-anchor="middle" class="tat s">${L('passes', 'pasos')}</text></g>
      <text x="160" y="208" text-anchor="middle" class="tat s" ${tA(.2, 'ta-fade')}>${L('un nom a fora, un número a dins', 'un nombre fuera, un número dentro')}</text>`);
  },
  // els tres blocs de la variable: suma, resta i posa
  u6ops() {
    const sw = (items, ts) => items.map((h, i) => { const a = (ts[i] / 5.5).toFixed(3), b = ((ts[i + 1] ?? 5.5) / 5.5).toFixed(3);
      return `<g visibility="${i ? 'hidden' : 'visible'}"><animate attributeName="visibility" dur="5.5s" repeatCount="indefinite" calcMode="discrete" keyTimes="${i ? `0;${a};${b}` : `0;${b}`}" values="${i ? 'hidden;visible;hidden' : 'visible;hidden'}"/>${h}</g>`; }).join('');
    const tile = (x, y, n, col = '#E0533F') => `<rect x="${x}" y="${y}" width="46" height="46" rx="12" fill="#fff" stroke="${col}" stroke-width="3.5"/><text x="${x + 23}" y="${y + 33}" text-anchor="middle" font-size="26" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="${col}">${n}</text>`;
    const rows = [[L('Suma 2', 'Suma 2'), 3, 5, 'M8 0h10M13 -5v10'], [L('Resta 1', 'Resta 1'), 5, 4, 'M8 0h10'], [L('Posa a 0', 'Pon a 0'), 4, 0, 'M8 -3h10M8 3h10']];
    return tSvg(214, rows.map(([t, a, b, ico], i) => { const y = 10 + i * 68, t0 = .3 + i * 1.4;
      return `<g ${tA(t0, 'ta-in')}><rect x="8" y="${y}" width="304" height="58" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <rect x="18" y="${y + 11}" width="120" height="36" rx="11" fill="#E0533F"/><g transform="translate(22 ${y + 29})"><rect x="2" y="-11" width="22" height="22" rx="6" fill="#fff" opacity=".25"/><path d="${ico}" transform="translate(-0 0)" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>
        <text x="${52}" y="${y + 34}" class="tat w">${t}</text>
        ${tile(162, y + 6, a, '#9AA6C8')}
        <path d="M216 ${y + 29}h26" stroke="#E0533F" stroke-width="4" stroke-linecap="round"/><path d="M236 ${y + 21}l9 8l-9 8" fill="none" stroke="#E0533F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(t0 + .7)}>${tile(256, y + 6, b)}</g>`; }).join(''));
  },
  // compte! sumar no és posar: de 4, «Suma 1» fa 5, però «Posa a 1» fa 1
  u6setadd() {
    const sw = (items, ts) => items.map((h, i) => { const a = (ts[i] / 5.5).toFixed(3), b = ((ts[i + 1] ?? 5.5) / 5.5).toFixed(3);
      return `<g visibility="${i ? 'hidden' : 'visible'}"><animate attributeName="visibility" dur="5.5s" repeatCount="indefinite" calcMode="discrete" keyTimes="${i ? `0;${a};${b}` : `0;${b}`}" values="${i ? 'hidden;visible;hidden' : 'visible;hidden'}"/>${h}</g>`; }).join('');
    const big = (x, n, col) => `<text x="${x}" y="128" text-anchor="middle" font-size="50" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="${col}">${n}</text>`;
    const col = (x, bg, line, title, after, t, erase) => `<g ${tA(.2 + (x > 100 ? .5 : 0), 'ta-in')}><rect x="${x}" y="10" width="146" height="164" rx="18" fill="${bg}" stroke="${line}" stroke-width="2"/>
        <rect x="${x + 14}" y="22" width="118" height="32" rx="10" fill="#E0533F"/><text x="${x + 73}" y="43" text-anchor="middle" class="tat w s">${title}</text>
        <rect x="${x + 33}" y="70" width="80" height="76" rx="16" fill="#fff" stroke="#E0533F" stroke-width="4"/></g>
      ${erase ? sw([big(x + 73, 4, '#9AA6C8'), big(x + 73, 4, '#9AA6C8') + `<path d="M${x + 42} 112l60 -22M${x + 42} 92l60 22" stroke="#EF5A5A" stroke-width="6" stroke-linecap="round"/>`, big(x + 73, after, '#E0533F')], [0, t - 1, t])
        : sw([big(x + 73, 4, '#9AA6C8'), big(x + 73, after, '#E0533F')], [0, t]) + `<g ${tA(t - .6)}><circle cx="${x + 122}" cy="74" r="15" fill="#3CC47C" stroke="#fff" stroke-width="2.5"/><text x="${x + 122}" y="79" text-anchor="middle" class="tat w s">+1</text></g>`}`;
    return tSvg(214, `${col(10, '#E7F7EE', '#A8E0C0', L('Suma 1', 'Suma 1'), 5, 2.2, false)}${col(164, '#FDEBEB', '#F4B7B7', L('Posa a 1', 'Pon a 1'), 1, 3.4, true)}
      <text x="83" y="166" text-anchor="middle" class="tat s" ${tA(2.4, 'ta-fade')}>4 + 1 = 5</text><text x="237" y="166" text-anchor="middle" class="tat s" ${tA(3.6, 'ta-fade')}>${L("el 4 s'esborra", 'el 4 se borra')}</text>
      <text x="160" y="204" text-anchor="middle" class="tat b" ${tA(4, 'ta-fade')}>${L('Posar esborra el que hi havia!', '¡Poner borra lo que había!')}</text>`);
  },
  // compte! «Suma 1» dins del «Si» (compta estrelles) o a fora (compta passes)
  u6inside() {
    const fs = 'style="font-size:12.5px"';
    const blk = (x, y, w, h, col, txt, dark) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" fill="${col}"/><text x="${x + 9}" y="${y + h / 2 + 4.5}" class="tat s${dark ? '' : ' w'}" ${fs}>${txt}</text>`;
    const prog = (x, inside, ok, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="8" width="148" height="114" rx="12" fill="#1FA463"/><text x="${x + 10}" y="25" class="tat w s" ${fs}>${L('Repeteix 6', 'Repite 6')}</text>
      <rect x="${x + 7}" y="32" width="134" height="83" rx="9" fill="#fff" opacity=".93"/>
      ${blk(x + 12, 37, 88, 22, '#3D7BF4', L('Endavant', 'Adelante'))}
      ${inside ? `<rect x="${x + 12}" y="63" width="124" height="47" rx="7" fill="#F2B21B"/><text x="${x + 20}" y="79" class="tat s" ${fs}>${L('Si hi ha estrella', 'Si hay estrella')}</text><rect x="${x + 22}" y="85" width="110" height="21" rx="6" fill="#FFF3C4"/>${blk(x + 25, 86, 70, 19, '#E0533F', L('Suma 1', 'Suma 1'))}`
        : `${blk(x + 12, 63, 124, 22, '#F2B21B', L('Si hi ha estrella', 'Si hay estrella'), true)}${blk(x + 12, 89, 70, 22, '#E0533F', L('Suma 1', 'Suma 1'))}`}
      <circle cx="${x + 138}" cy="16" r="12" fill="${ok ? '#3CC47C' : '#EF5A5A'}" stroke="#fff" stroke-width="2.5"/>${ok ? `<path d="M${x + 132} 16l4 4l7 -8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : `<path d="M${x + 133} 11l10 10M${x + 143} 11l-10 10" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`}</g>`;
    const strip = (x, all, t) => [0, 1, 2, 3, 4, 5].map(i => { const star = [0, 2, 3].includes(i), cx = x + 14 + i * 24;
      return `<rect x="${cx - 11}" y="142" width="22" height="22" rx="5" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.2"/>${star ? `<path transform="translate(${cx} 153) scale(.55)" d="M0 -16L4.8 -6L16 -4.8L7.6 2.8L10 14L0 8.4L-10 14L-7.6 2.8L-16 -4.8L-4.8 -6Z" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2"/>` : ''}
        ${all || star ? `<g ${tA(t + i * .35)}><rect x="${cx - 10}" y="125" width="20" height="13" rx="6.5" fill="#E0533F"/><text x="${cx}" y="135.5" text-anchor="middle" class="tat w" style="font-size:10px">+1</text></g>` : ''}`; }).join('');
    const res = (x, txt, ok, t) => `<g ${tA(t)}><rect x="${x + 14}" y="172" width="120" height="32" rx="12" fill="#fff" stroke="${ok ? '#3CC47C' : '#EF5A5A'}" stroke-width="3"/><text x="${x + 74}" y="193" text-anchor="middle" class="tat s">${txt}</text></g>`;
    return tSvg(210, `${prog(6, false, false, .2)}${prog(166, true, true, .5)}${strip(6, true, 1.2)}${strip(166, false, 1.2)}
      ${res(6, L('compta 6 passes', 'cuenta 6 pasos'), false, 3.4)}${res(166, L('compta 3 estrelles', 'cuenta 3 estrellas'), true, 3.7)}`);
  },
  // un número fix només serveix per a una illa; el «Si» compta a totes
  u6islands() {
    const star = (cx, cy, s = .6) => `<path transform="translate(${cx} ${cy}) scale(${s})" d="M0 -16L4.8 -6L16 -4.8L7.6 2.8L10 14L0 8.4L-10 14L-7.6 2.8L-16 -4.8L-4.8 -6Z" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2"/>`;
    const isle = (y, stars, lab, t) => `<g ${tA(t, 'ta-in')}><rect x="6" y="${y}" width="156" height="50" rx="14" fill="#4FB4E8"/><rect x="12" y="${y + 6}" width="144" height="38" rx="10" fill="url(#bwGrass)"/>
      ${[0, 1, 2, 3, 4].map(i => `<rect x="${17 + i * 27}" y="${y + 11}" width="24" height="28" rx="6" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.2"/>${stars.includes(i) ? star(29 + i * 27, y + 25) : ''}`).join('')}
      <rect x="10" y="${y - 12}" width="54" height="20" rx="10" fill="#14204A"/><text x="37" y="${y + 3}" text-anchor="middle" class="tat w s" style="font-size:12px">${lab}</text></g>`;
    const res = (x, y, n, ok, t) => `<g ${tA(t)}><rect x="${x}" y="${y + 6}" width="66" height="38" rx="12" fill="#fff" stroke="${ok ? '#3CC47C' : '#EF5A5A'}" stroke-width="3"/><text x="${x + 22}" y="${y + 32}" text-anchor="middle" font-size="20" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#14204A">${n}</text>
      <circle cx="${x + 49}" cy="${y + 25}" r="10" fill="${ok ? '#3CC47C' : '#EF5A5A'}"/>${ok ? `<path d="M${x + 44} ${y + 25}l3.5 3.5l6 -7" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : `<path d="M${x + 45} ${y + 21}l8 8M${x + 53} ${y + 21}l-8 8" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`}</g>`;
    return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="170" y="6" width="66" height="34" rx="10" fill="#E0533F"/><text x="203" y="28" text-anchor="middle" class="tat w s">${L('Suma 3', 'Suma 3')}</text>
        <rect x="244" y="6" width="70" height="34" rx="10" fill="#F2B21B"/><text x="252" y="28" class="tat s" style="font-size:12.5px">${L('Si', 'Si')}</text>${star(276, 22, .55)}<text x="288" y="28" class="tat s" style="font-size:12.5px">+1</text></g>
      ${isle(64, [0, 2, 3], L('Illa 1', 'Isla 1'), .4)}${res(170, 60, 3, true, 1.2)}${res(246, 60, 3, true, 1.6)}
      ${isle(140, [2], L('Illa 2', 'Isla 2'), 2.2)}${res(170, 136, 3, false, 3)}${res(246, 136, 1, true, 3.4)}
      <text x="160" y="208" text-anchor="middle" class="tat s" ${tA(4, 'ta-fade')}>${L('El «Si» compta; el número fix, no', 'El «Si» cuenta; el número fijo, no')}</text>`);
  },
  // punts que valen diferent: estrella +2, caixa +5
  u6points() {
    const sw = (items, ts) => items.map((h, i) => { const a = (ts[i] / 5.5).toFixed(3), b = ((ts[i + 1] ?? 5.5) / 5.5).toFixed(3);
      return `<g visibility="${i ? 'hidden' : 'visible'}"><animate attributeName="visibility" dur="5.5s" repeatCount="indefinite" calcMode="discrete" keyTimes="${i ? `0;${a};${b}` : `0;${b}`}" values="${i ? 'hidden;visible;hidden' : 'visible;hidden'}"/>${h}</g>`; }).join('');
    const star = (cx, cy, s = .8) => `<path transform="translate(${cx} ${cy}) scale(${s})" d="M0 -16L4.8 -6L16 -4.8L7.6 2.8L10 14L0 8.4L-10 14L-7.6 2.8L-16 -4.8L-4.8 -6Z" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2"/>`;
    const box = (cx, by, s = 1) => `<g transform="translate(${cx} ${by}) scale(${s})"><path d="M-13 -22h26v22h-26z" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2"/><path d="M-13 -22l4 -5h26l-4 5z" fill="#EDBB7A" stroke="#7A4A1E" stroke-width="2"/><path d="M0 -22V0M-13 -11H13" stroke="#F6DCA8" stroke-width="3"/></g>`;
    const cx = i => 40 + i * 60, X = [0, 1, 2, 3, 4].map(cx);
    const pop = (i, t, txt, col) => `<g ${tA(t)}><rect x="${cx(i) - 22}" y="96" width="44" height="26" rx="13" fill="${col}" stroke="#fff" stroke-width="2.5" filter="url(#bwSh)"/><text x="${cx(i)}" y="114" text-anchor="middle" class="tat w s">${txt}</text></g>`;
    const kt = '0;0.12;0.18;0.30;0.36;0.48;0.54;0.66;1';
    const vals = [X[0], X[0], X[1], X[1], X[2], X[2], X[3], X[3], X[3]].map(x => `${x} 182`).join(';');
    return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="10" y="8" width="132" height="76" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="76" y="30" text-anchor="middle" class="tat s">${L('marcador', 'marcador')}</text>
        ${sw([0, 2, 7, 9].map(n => `<text x="76" y="72" text-anchor="middle" font-size="36" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#E0533F">${n}</text>`), [0, .99, 1.98, 2.97])}</g>
      <g ${tA(.4, 'ta-in')}><rect x="156" y="8" width="156" height="76" rx="16" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/>${star(180, 32, .7)}<text x="198" y="38" class="tat s">= 2 ${L('punts', 'puntos')}</text>${box(180, 72, .8)}<text x="198" y="68" class="tat s">= 5 ${L('punts', 'puntos')}</text></g>
      <rect x="8" y="150" width="304" height="46" rx="14" fill="url(#bwGrass)"/>${X.map(x => `<rect x="${x - 26}" y="154" width="52" height="38" rx="9" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.5"/>`).join('')}
      ${star(X[1], 172)}${box(X[2], 188)}${star(X[3], 172)}
      ${pop(1, .99, '+2', '#E0533F')}${pop(2, 1.98, '+5', '#E0533F')}${pop(3, 2.97, '+2', '#E0533F')}
      <g><animateTransform attributeName="transform" type="translate" dur="5.5s" repeatCount="indefinite" keyTimes="${kt}" values="${vals}"/>${tBitMini(0, 0, 1, .62)}</g>`);
  },
  // compte! «el comptador valgui 3» vol dir exactament 3: saltant de 2 en 2, no hi arriba mai
  u6jump() {
    const x = i => 26 + i * 30;
    const line = (y, step, t0, lab) => { const hops = []; for (let v = 0; v + step <= 6; v += step) hops.push(v);
      return `<g ${tA(t0, 'ta-in')}><rect x="10" y="${y - 70}" width="96" height="28" rx="9" fill="#E0533F"/><text x="58" y="${y - 51}" text-anchor="middle" class="tat w s">${lab}</text>
        <path d="M${x(0) - 8} ${y}H${x(8) + 6}" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round"/>
        ${[...Array(9).keys()].map(i => `${i === 3 ? `<circle cx="${x(i)}" cy="${y}" r="13" fill="#FFF3C4" stroke="#F2B21B" stroke-width="3"/>` : `<path d="M${x(i)} ${y - 6}v12" stroke="#9AA6C8" stroke-width="2.5"/>`}<text x="${x(i)}" y="${y + 28}" text-anchor="middle" class="tat s">${i}</text>`).join('')}</g>
        ${hops.slice(0, 3).map((v, k) => { const a = (t0 + .6 + k * .55) / 5.5, b = a + .07;
          return `<path pathLength="1" stroke-dasharray="1 1" stroke-dashoffset="1" d="M${x(v)} ${y - 4}Q${(x(v) + x(v + step)) / 2} ${y - 30 - step * 8} ${x(v + step)} ${y - 4}" fill="none" stroke="#E0533F" stroke-width="3.5" stroke-linecap="round"><animate attributeName="stroke-dashoffset" dur="5.5s" repeatCount="indefinite" keyTimes="0;${a.toFixed(3)};${b.toFixed(3)};.96;1" values="1;1;0;0;1"/></path>
            <circle cx="${x(v + step)}" cy="${y}" r="5" fill="#E0533F" visibility="hidden"><animate attributeName="visibility" dur="5.5s" repeatCount="indefinite" calcMode="discrete" keyTimes="0;${b.toFixed(3)};.96" values="hidden;visible;hidden"/></circle>`; }).join('')}`; };
    const bulb = (cx, cy, on, t) => `<g transform="translate(${cx} ${cy})"><path d="M0 -20a14 14 0 0 0 -8 25.5V12h16V5.5A14 14 0 0 0 0 -20z" fill="#E3E8F4" stroke="#9AA6C8" stroke-width="2.5"/><rect x="-7" y="14" width="14" height="5" rx="2" fill="#9AA6C8"/>
      ${on ? `<g ${tA(t)}><path d="M0 -20a14 14 0 0 0 -8 25.5V12h16V5.5A14 14 0 0 0 0 -20z" fill="#3CC47C" stroke="#1FA463" stroke-width="2.5"/><circle r="26" cy="-4" fill="#3CC47C" opacity=".18"/></g>` : `<g ${tA(t)}><circle cx="15" cy="-16" r="9" fill="#EF5A5A"/><path d="M11 -20l8 8M19 -20l-8 8" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></g>`}</g>`;
    return tSvg(214, `${line(84, 1, .2, L('Suma 1', 'Suma 1'))}${bulb(294, 64, true, 2.1)}<text x="196" y="26" class="tat s" ${tA(2.2, 'ta-fade')}>${L('val 3: llum!', 'vale 3: ¡luz!')}</text>
      ${line(186, 2, 2.6, L('Suma 2', 'Suma 2'))}${bulb(294, 166, false, 4.4)}<text x="164" y="128" class="tat s" ${tA(4.4, 'ta-fade')}>${L('es salta el 3!', '¡se salta el 3!')}</text>`);
  },
  // projecte: quatre preguntes abans de programar amb una variable
  u6plan() {
    const it = [[L('Què vull comptar?', '¿Qué quiero contar?'), L('fruites', 'frutas')], [L('Amb què comença?', '¿Con qué empieza?'), '0'], [L('Quan suma? Quant?', '¿Cuándo suma? ¿Cuánto?'), '+1 · +5'], [L('Quant val al final?', '¿Cuánto vale al final?'), '14']];
    return tSvg(214, `<rect x="14" y="10" width="292" height="198" rx="18" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/><rect x="132" y="2" width="56" height="18" rx="6" fill="#C98A4B"/>
      ${it.map(([q, a], i) => { const y = 34 + i * 44, t = .4 + i * .95;
        return `<g ${tA(t, 'ta-in')}><circle cx="40" cy="${y + 13}" r="12" fill="#E0533F"/><text x="40" y="${y + 18}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="60" y="${y + 18}" class="tat s">${q}</text></g>
          <g ${tA(t + .5)}><rect x="222" y="${y}" width="74" height="27" rx="13.5" fill="#fff" stroke="#E0533F" stroke-width="2.5"/><text x="259" y="${y + 19}" text-anchor="middle" class="tat s" style="fill:#E0533F">${a}</text></g>`; }).join('')}`);
  }
});
