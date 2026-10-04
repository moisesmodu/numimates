/* Tech Creadors · unitat 8 «El meu videojoc» · animacions de teoria (TANI g8…)
   Dibuixos propis: fan servir els personatges de l'escenari (STG_ART) dins d'SVG en bucle de 5,5 s. */
Object.assign(TANI, (() => {
  // un personatge de l'escenari, centrat a (x, y), dins d'un quadre de mida w
  const spr = (art, x, y, w, c = 0) => { const a = typeof STG_ART !== 'undefined' && STG_ART[art]; if (!a) return ''; return a.svg(c).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `); };
  const mov = (vals, dur, extra = '') => `<animateTransform attributeName="transform" type="translate" values="${vals}" dur="${dur}s" repeatCount="indefinite" ${extra}/>`;
  const blk = (x, y, w, col, txt, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="22" rx="7" fill="${col}"/><text x="${x + 8}" y="${y + 15.5}" class="tat w s" style="font-size:13px">${txt}</text></g>`;
  const heart = (x, y, s = 1, col = '#E5304F') => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 9C-14 0 -10 -11 0 -5C10 -11 14 0 0 9Z" fill="${col}" stroke="#9B1B33" stroke-width="1.6"/>`;
  return {
    // les quatre peces d'un videojoc: protagonista, objectiu, obstacle i regles
    g8parts() {
      const lab = [[L('Protagonista', 'Protagonista'), '#3D7BF4'], [L('Objectiu', 'Objetivo'), '#F2A516'], [L('Obstacle', 'Obstáculo'), '#EF5A5A'], [L('Regles', 'Reglas'), '#1FA463']];
      const chips = lab.map(([t, c], i) => `<g ${tA(.3 + i * .7, 'ta-in')}><rect x="186" y="${16 + i * 40}" width="128" height="32" rx="10" fill="#fff" stroke="${c}" stroke-width="2.4" filter="url(#bwSh)"/><circle cx="202" cy="${32 + i * 40}" r="10" fill="${c}"/><text x="202" y="${37 + i * 40}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="217" y="${37 + i * 40}" class="tat s" style="font-size:13px">${t}</text></g>`).join('');
      const ring = (x, y, r, c, t) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="3" stroke-dasharray="5 4" ${tA(t, 'ta-pop')}/>`;
      return tSvg(214, `<defs><linearGradient id="g8pSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A2F7A"/><stop offset="1" stop-color="#5B4BB8"/></linearGradient></defs>
        <rect x="6" y="10" width="172" height="146" rx="16" fill="#20306A" filter="url(#bwSh)"/><rect x="15" y="20" width="154" height="112" rx="9" fill="url(#g8pSky)"/>
        ${[[34, 34], [150, 30], [120, 64], [44, 76], [160, 100], [88, 40]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#fff" opacity=".8"/>`).join('')}
        <rect x="70" y="138" width="52" height="8" rx="4" fill="#3A4A8A"/>
        <g>${mov('0 0;56 0;0 0', 3.2)}${spr('gat', 46, 112, 34)}${ring(46, 112, 22, '#3D7BF4', .5)}</g>
        <g>${mov('0 0;0 -6;0 0', 1.2)}${spr('moneda', 150, 44, 22)}${ring(150, 44, 16, '#F2A516', 1.2)}</g>
        <g>${mov('0 -20;0 60', 1.8)}${spr('meteorit', 110, 40, 24)}${ring(110, 40, 18, '#EF5A5A', 1.9)}</g>
        <g ${tA(2.6, 'ta-pop')}><rect x="24" y="24" width="96" height="22" rx="7" fill="#1FA463"/><text x="31" y="39.5" class="tat w s" style="font-size:13px">${L('si toca → +1', 'si toca → +1')}</text></g>
        ${chips}
        <text x="160" y="184" text-anchor="middle" class="tat b" ${tA(3.4, 'ta-fade')}>${L('4 peces = un videojoc!', '¡4 piezas = un videojuego!')}</text>
        <text x="160" y="205" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(3.8, 'ta-fade')}>${L('Si en falta una, no funciona.', 'Si falta una, no funciona.')}</text>`);
    },
    // guanyar i perdre: dues condicions amb variables
    g8win() {
      // un número que canvia (0 → 3 → 6…) durant la primera meitat del bucle i després es queda quiet
      const step = (vals, x, y, col) => vals.map((v, i) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="26" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="${col}" opacity="0">${v}<animate attributeName="opacity" values="${vals.map((_, j) => j === i ? 1 : 0).join(';')};${i === vals.length - 1 ? 1 : 0}" keyTimes="${vals.map((_, j) => (j * .6 / vals.length).toFixed(3)).join(';')};1" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></text>`).join('');
      const trophy = `<g transform="translate(70 150)"><path d="M-16 -30h32v10a16 16 0 0 1-32 0z" fill="#FFC531" stroke="#B46A00" stroke-width="2.4"/><path d="M-16 -26h-8a8 8 0 0 0 10 12M16 -26h8a8 8 0 0 1-10 12" fill="none" stroke="#B46A00" stroke-width="2.4"/><rect x="-4" y="-6" width="8" height="10" fill="#E8A317"/><rect x="-13" y="4" width="26" height="7" rx="2" fill="#B46A00"/></g>`;
      return tSvg(214, `<rect x="8" y="10" width="146" height="62" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="22" y="34" class="tat s">${L('punts', 'puntos')}</text>${step(['0', '3', '6', '9', '10'], 116, 54, '#1FA463')}${spr('moneda', 44, 52, 22)}
        <rect x="166" y="10" width="146" height="62" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="180" y="34" class="tat s">${L('vides', 'vidas')}</text>${step(['3', '2', '1', '0'], 276, 54, '#E5304F')}
        ${[0, 1, 2].map(i => `<g opacity="1">${heart(194 + i * 20, 52, 1)}<animate attributeName="opacity" values="1;1;0;0" keyTimes="0;${(.15 + (2 - i) * .15).toFixed(2)};${(.16 + (2 - i) * .15).toFixed(2)};1" dur="5.5s" repeatCount="indefinite"/></g>`).join('')}
        <g ${tA(1.2, 'ta-in')}><rect x="10" y="84" width="142" height="30" rx="9" fill="#F2A516"/><text x="20" y="104" class="tat w s">${L('si punts = 10', 'si puntos = 10')}</text></g>
        <g ${tA(1.6, 'ta-in')}><rect x="168" y="84" width="142" height="30" rx="9" fill="#F2A516"/><text x="178" y="104" class="tat w s">${L('si vides = 0', 'si vidas = 0')}</text></g>
        <g ${tA(3.4, 'ta-pop')}>${trophy}<text x="70" y="182" text-anchor="middle" class="tat b" style="fill:#147A47">${L('Has guanyat!', '¡Has ganado!')}</text></g>
        <g ${tA(3.9, 'ta-pop')}><g transform="translate(250 136)">${heart(0, 0, 2.2, '#B9C1D6')}<path d="M-2 -10l6 8-5 6 4 8" fill="none" stroke="#fff" stroke-width="3"/></g><text x="250" y="182" text-anchor="middle" class="tat b" style="fill:#C0392B">${L('Has perdut!', '¡Has perdido!')}</text></g>
        <text x="160" y="206" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(4.3, 'ta-fade')}>${L('… i el programa s\'atura.', '… y el programa se para.')}</text>`);
    },
    // primer en paper: l'esbós i la llista de guions, després els blocs
    g8plan() {
      const grid = Array.from({ length: 7 }, (_, i) => `<path d="M${30 + i * 16} 34v84" stroke="#DCE4FA" stroke-width="1"/>`).join('') + Array.from({ length: 6 }, (_, i) => `<path d="M24 ${40 + i * 16}h112" stroke="#DCE4FA" stroke-width="1"/>`).join('');
      return tSvg(214, `<g transform="rotate(-3 80 90)"><rect x="16" y="22" width="128" height="150" rx="6" fill="#FFFDF5" stroke="#E2D6B4" stroke-width="2" filter="url(#bwSh)"/>${grid}
          <path d="M40 100c10-8 20-8 30 0" fill="none" stroke="#3D7BF4" stroke-width="3" stroke-linecap="round" pathLength="1" ${tA(.3, 'ta-draw')}/><circle cx="44" cy="92" r="8" fill="none" stroke="#3D7BF4" stroke-width="3" ${tA(.5, 'ta-pop')}/>
          <path d="M112 50l4 9 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="none" stroke="#F2A516" stroke-width="2.6" stroke-linejoin="round" pathLength="1" ${tA(.9, 'ta-draw')}/>
          <path d="M98 108l14-14M98 94l14 14" stroke="#EF5A5A" stroke-width="3" stroke-linecap="round" ${tA(1.3, 'ta-pop')}/>
          <path d="M44 82 Q80 40 110 58" fill="none" stroke="#56628A" stroke-width="2" stroke-dasharray="4 4" ${tA(1.6, 'ta-fade')}/>
          <text x="26" y="138" class="tat s" ${tA(1.9, 'ta-fade')}>${L('1. Fletxes: moure', '1. Flechas: mover')}</text><text x="26" y="156" class="tat s" ${tA(2.2, 'ta-fade')}>${L('2. Estrella: +1', '2. Estrella: +1')}</text></g>
        <g><animateMotion dur="5.5s" repeatCount="indefinite" path="M40 100 Q70 70 112 58 L104 100 L60 150" keyPoints="0;1;1" keyTimes="0;.45;1" calcMode="linear"/><g transform="rotate(35)"><rect x="-3" y="-30" width="7" height="28" rx="2" fill="#F2A516" stroke="#B46A00" stroke-width="1.4"/><path d="M-3 -2l3.5 8 3.5-8z" fill="#FFE2B0" stroke="#B46A00" stroke-width="1.2"/></g></g>
        <g ${tA(2.6, 'ta-in')}><path d="M152 96h18" stroke="#1FA463" stroke-width="5" stroke-linecap="round"/><path d="M166 86l10 10-10 10" fill="none" stroke="#1FA463" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.9, 'ta-in')}><rect x="182" y="26" width="134" height="140" rx="12" fill="#20306A" filter="url(#bwSh)"/><rect x="188" y="34" width="122" height="124" rx="6" fill="#F3F6FF"/></g>
        ${blk(192, 44, 114, '#F2A516', L('quan comença', 'al empezar'), 3.1)}${blk(200, 70, 104, '#1FA463', L('per sempre', 'por siempre'), 3.4)}${blk(208, 96, 96, '#3D7BF4', L('si tecla →', 'si tecla →'), 3.7)}${blk(208, 122, 96, '#8B5CF6', L('punts +1', 'puntos +1'), 4)}
        <text x="80" y="200" text-anchor="middle" class="tat s" ${tA(1, 'ta-fade')}>${L('Esbós en paper', 'Boceto en papel')}</text><text x="248" y="200" text-anchor="middle" class="tat s" ${tA(3.1, 'ta-fade')}>${L('Guions', 'Guiones')}</text>`);
    },
    // comença petit: versió 1, 2 i 3, una peça cada vegada
    g8small() {
      const lv = [[L('1. El protagonista es mou', '1. El protagonista se mueve'), '#3D7BF4', 'gat'], [L('2. + estrelles i punts', '2. + estrellas y puntos'), '#F2A516', 'estrella'], [L('3. + enemic i vides', '3. + enemigo y vidas'), '#EF5A5A', 'meteorit']];
      const rows = lv.map(([t, c, a], i) => { const y = 150 - i * 52, t0 = .4 + i * 1.3; return `<g ${tA(t0, 'ta-in')}><rect x="14" y="${y}" width="292" height="42" rx="12" fill="#fff" stroke="${c}" stroke-width="2.6" filter="url(#bwSh)"/>${spr(a, 40, y + 21, 30)}<text x="62" y="${y + 26}" class="tat s">${t}</text></g>
          <g ${tA(t0 + .7, 'ta-pop')}><circle cx="286" cy="${y + 21}" r="11" fill="#1FA463"/><path d="M280 ${y + 21}l4 4 8-8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>`; }).join('');
      return tSvg(214, `${rows}<text x="160" y="24" text-anchor="middle" class="tat b" ${tA(4.4, 'ta-fade')}>${L('Primer que funcioni; després, més!', '¡Primero que funcione; después, más!')}</text>
        <text x="160" y="208" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(.2, 'ta-fade')}>${L('Prova cada versió abans de seguir.', 'Prueba cada versión antes de seguir.')}</text>`);
    },
    // cada personatge té els seus guions, i tots comencen alhora amb la bandera
    g8who() {
      const col = [['gat', L('Protagonista', 'Protagonista'), [['#3D7BF4', L('si tecla →', 'si tecla →')], ['#EF5A5A', L('vides −1', 'vidas −1')]]],
        ['moneda', L('Moneda', 'Moneda'), [['#8B5CF6', L('punts +1', 'puntos +1')], ['#3D7BF4', L('a l\'atzar', 'al azar')]]],
        ['meteorit', L('Meteorit', 'Meteorito'), [['#3D7BF4', L('cau', 'cae')], ['#F2A516', L('torna amunt', 'sube otra vez')]]]];
      const cards = col.map(([a, n, bs], i) => { const x = 6 + i * 104, t0 = .8 + i * .5; return `<g ${tA(t0, 'ta-in')}><rect x="${x}" y="50" width="100" height="140" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${spr(a, x + 50, 82, 40)}<text x="${x + 50}" y="122" text-anchor="middle" class="tat s">${n}</text>
          ${bs.map(([c, t], j) => `<rect x="${x + 5}" y="${134 + j * 26}" width="90" height="22" rx="6" fill="${c}"/><text x="${x + 50}" y="${149 + j * 26}" text-anchor="middle" class="tat w s" style="font-size:13px">${t}</text>`).join('')}</g>
          <path d="M160 34 L${x + 50} 50" stroke="#1FA463" stroke-width="2.4" stroke-dasharray="4 4" ${tA(2.6, 'ta-fade')}/>`; }).join('');
      return tSvg(214, `${cards}<g ${tA(.2, 'ta-pop')}><rect x="104" y="6" width="112" height="30" rx="10" fill="#1FA463"/><path d="M118 28V12" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><path d="M119 13c4-2 7 2 13 0v8c-6 2-9-2-13 0z" fill="#fff"/><text x="140" y="26" class="tat w s">${L('Comença!', '¡Empieza!')}</text></g>
        <circle cx="160" cy="21" r="20" fill="none" stroke="#1FA463" stroke-width="2"><animate attributeName="r" values="18;34" dur="1.4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;0" dur="1.4s" repeatCount="indefinite"/></circle>
        <text x="160" y="208" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(3, 'ta-fade')}>${L('Tots els guions funcionen alhora.', 'Todos los guiones funcionan a la vez.')}</text>`);
    },
    // ajustar la dificultat canviant un número
    g8tune() {
      const face = (x, y, c, m) => `<circle cx="${x}" cy="${y}" r="18" fill="${c}" stroke="#20306A" stroke-width="2"/><circle cx="${x - 6}" cy="${y - 4}" r="2.4" fill="#20306A"/><circle cx="${x + 6}" cy="${y - 4}" r="2.4" fill="#20306A"/><path d="${m}" fill="none" stroke="#20306A" stroke-width="2.4" stroke-linecap="round"/>`;
      const zones = [[L('Massa fàcil', 'Demasiado fácil'), '#9FD8FF', 'M-7 6h14', '2'], [L('Al punt', 'En su punto'), '#8EE07A', 'M-8 4q8 8 16 0', '5'], [L('Massa difícil', 'Demasiado difícil'), '#FF9DA0', 'M-8 9q8 -8 16 0', '9']];
      const kt = '0;.3;.31;.6;.61;1';
      const show = i => { const v = [0, 0, 0, 0, 0, 0]; v[i * 2] = 1; v[i * 2 + 1] = 1; return v.join(';'); };
      return tSvg(214, `<rect x="16" y="24" width="288" height="16" rx="8" fill="#E8EDFB"/><rect x="16" y="24" width="96" height="16" rx="8" fill="#9FD8FF"/><rect x="112" y="24" width="96" height="16" fill="#8EE07A"/><rect x="208" y="24" width="96" height="16" rx="8" fill="#FF9DA0"/>
        ${zones.map(([t, c, m], i) => `<g transform="translate(${64 + i * 96} 76)">${face(0, 0, c, m.replace(/^M/, `M`))}</g><text x="${64 + i * 96}" y="114" text-anchor="middle" class="tat s">${t}</text>`).join('')}
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;96 0;96 0;192 0;192 0" keyTimes="${kt}" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/><circle cx="64" cy="32" r="13" fill="#fff" stroke="#20306A" stroke-width="3"/></g>
        <rect x="56" y="138" width="208" height="40" rx="11" fill="#3D7BF4" filter="url(#bwSh)"/><text x="72" y="164" class="tat w">${L('mou-te', 'muévete')}</text>
        <rect x="140" y="144" width="40" height="28" rx="8" fill="#fff"/>${zones.map(([, , , n], i) => `<text x="160" y="165" text-anchor="middle" class="tat b" opacity="0">${n}<animate attributeName="opacity" values="${show(i)}" keyTimes="${kt}" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></text>`).join('')}<text x="190" y="164" class="tat w s">${L('passos', 'pasos')}</text>
        <text x="160" y="204" text-anchor="middle" class="tat s" style="fill:#56628A">${L('Un sol número canvia la dificultat.', 'Un solo número cambia la dificultad.')}</text>`);
    },
    // un bon comentari: una cosa que m'ha agradat + una idea per millorar
    g8feedback() {
      const bub = (x, y, w, c, s, t1, t2, t0) => `<g ${tA(t0, 'ta-in')}><path d="M${x} ${y}h${w}a12 12 0 0 1 12 12v34a12 12 0 0 1-12 12H${x + 34}l-12 12v-12H${x}a12 12 0 0 1-12-12V${y + 12}a12 12 0 0 1 12-12z" fill="${c}" stroke="${s}" stroke-width="2.4"/><text x="${x + 2}" y="${y + 24}" class="tat s">${t1}</text><text x="${x + 2}" y="${y + 46}" class="tat s" style="fill:#56628A;font-size:13px">${t2}</text></g>`;
      return tSvg(214, `${bub(18, 12, 200, '#E7F7EE', '#1FA463', L('M\'ha agradat…', 'Me ha gustado…'), L('…la pluja d\'estrelles', '…la lluvia de estrellas'), .3)}
        <g ${tA(.6, 'ta-pop')}>${heart(296, 30, 1.4)}</g>
        ${bub(96, 96, 200, '#FFF6D6', '#F2A516', L('I si…?', '¿Y si…?'), L('…l\'enemic anés més lent?', '…el enemigo fuera más lento?'), 1.4)}
        <g ${tA(1.4, 'ta-pop')}><g transform="translate(52 128)"><circle r="14" fill="#FFE27A" stroke="#B46A00" stroke-width="2.2"/><rect x="-6" y="12" width="12" height="8" rx="2" fill="#B9C1D6"/><path d="M-4 -2l4 5 4-5" fill="none" stroke="#B46A00" stroke-width="2"/></g></g>
        <g ${tA(2.8, 'ta-in')}><rect x="20" y="182" width="124" height="26" rx="9" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><text x="30" y="200" class="tat s" style="fill:#C0392B">${L('«És avorrit.»', '«Es aburrido.»')}</text><path d="M24 195h116" stroke="#EF5A5A" stroke-width="3" ${tA(3.4, 'ta-pop')}/></g>
        <text x="236" y="200" text-anchor="middle" class="tat s" style="fill:#147A47" ${tA(3.8, 'ta-fade')}>${L('Amable i útil!', '¡Amable y útil!')}</text>`);
    },
    // el viatge del curs: vuit illes, de primers passos fins al videojoc
    g8journey() {
      const P = [[34, 170], [94, 140], [50, 98], [118, 70], [190, 92], [244, 132], [290, 96], [250, 40]];
      const ico = [['numi', L('Personatges', 'Personajes')], ['papallona', L('Animació', 'Animación')], ['boto', L('Tecles', 'Teclas')], ['fletxa', L('x i y', 'x e y')], ['bandera', L('Si…', 'Si…')], ['moneda', L('Punts', 'Puntos')], ['meteorit', L('Atzar', 'Azar')], ['estrella', L('Videojoc', 'Videojuego')]];
      const road = P.reduce((d, [x, y], i) => d + (i ? ` L${x} ${y}` : `M${x} ${y}`), '');
      const isle = ([x, y], i) => `<g ${tA(.2 + i * .45, 'ta-pop')}><ellipse cx="${x}" cy="${y + 10}" rx="24" ry="9" fill="#5FA841" stroke="#3E7F2A" stroke-width="2"/>${ico[i][0] === 'numi' ? tBitMini(x, y + 8, 2, .28) : spr(ico[i][0], x, y - 4, 28)}<circle cx="${x + 19}" cy="${y - 12}" r="8" fill="#F08A24"/><text x="${x + 19}" y="${y - 7.5}" text-anchor="middle" font-size="11" font-weight="900" fill="#fff" font-family="Lexend,system-ui,sans-serif">${i + 1}</text></g>`;
      return tSvg(214, `<rect width="320" height="214" rx="16" fill="#D9F2FF"/><path d="${road}" fill="none" stroke="#FBE7B7" stroke-width="7" stroke-linecap="round" stroke-dasharray="9 8"/>
        ${P.map(isle).join('')}
        <text x="160" y="206" text-anchor="middle" class="tat s" ${tA(3.8, 'ta-fade')}>${L('8 unitats… i ara, el teu videojoc!', '8 unidades… ¡y ahora, tu videojuego!')}</text>
        <g><animateMotion dur="5.5s" repeatCount="indefinite" path="${road}" keyPoints="0;1;1" keyTimes="0;.8;1" calcMode="linear"/>${tBitMini(0, 0, 2, .34)}</g>`);
    }
  };
})());
