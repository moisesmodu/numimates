/* Tech IA · unitat 2 · animacions de teoria (TANI). Dibuixos propis de Numi: dades i etiquetes, característiques,
   entrenament i prova, qui etiqueta, encert, matriu de confusió, falsos positius i negatius, quan l'encert enganya,
   dreceres i biaix, estereotips al text, com es redueix el biaix, el projecte, la fitxa del model i la privadesa.
   TANI.i22spam és estàtica: la fa servir una pregunta de l'app (art) i una diapositiva. */
{
  const F = (sz, c = '#14204A', w = 800) => `style="font:${w} ${sz}px Lexend,system-ui,sans-serif;fill:${c}"`;
  const box = (x, y, w, h, fill, stroke, r = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="2"` : ''}/>`;
  const arrow = (x1, y1, x2, y2, c = '#8B9BE0') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><path d="M${x2} ${y2} l-7 -4 m7 4 l-7 4" stroke="${c}" stroke-width="2.5" stroke-linecap="round" fill="none" transform="rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI).toFixed(0)} ${x2} ${y2})"/>`;
  const ok = (cx, cy, r = 10, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><path d="M${cx - r / 2} ${cy}l${r * .35} ${r * .35} ${r * .6} -${r * .65}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const ko = (cx, cy, r = 10) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#EF5A5A"/><path d="M${cx - r * .4} ${cy - r * .4}l${r * .8} ${r * .8}m0 -${r * .8}l-${r * .8} ${r * .8}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`;
  const hbar = (x, y, w, p, c, lbl, pc, t, h = 13) => `<g ${tA(t, 'ta-in')}><text x="${x - 8}" y="${y + h - 2}" text-anchor="end" ${F(12.5)}>${lbl}</text><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="#E8EEFF"/><rect x="${x}" y="${y}" width="${Math.max(4, w * p).toFixed(1)}" height="${h}" rx="${h / 2}" fill="${c}"/><text x="${x + w + 8}" y="${y + h - 2}" ${F(12)}>${pc}</text></g>`;
  const tile = (x, y, s, bg, emo, t, cls = 'ta-pop') => `<g ${tA(t, cls)}><rect x="${x}" y="${y}" width="${s}" height="${s}" rx="${s * .22}" fill="${bg}"/><text x="${x + s / 2}" y="${y + s * .68}" text-anchor="middle" font-size="${(s * .52).toFixed(0)}">${emo}</text></g>`;
  const person = (x, y, c, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="0" cy="-12" r="7" fill="${c}"/><path d="M-11 10 Q-11 -3 0 -3 Q11 -3 11 10 Z" fill="${c}"/></g>`;
  const grid4 = T => T.map(([e, a, b, c, bg], i) => { const x = 6 + (i % 2) * 156, y = 6 + Math.floor(i / 2) * 104; return `<g ${tA(.3 + i * .6, 'ta-pop')}>${box(x, y, 152, 98, bg, c + '55', 16)}<text x="${x + 30}" y="${y + 44}" text-anchor="middle" font-size="26">${e}</text>
    <text x="${x + 56}" y="${y + 42}" ${F(13)}>${a}</text><text x="${x + 56}" y="${y + 62}" ${F(13, c, 900)}>${b}</text>${ok(x + 134, y + 18, 9, c)}</g>`; }).join('');
  // matriu 2 × 2: [[encert, fn], [fp, encert]] amb rètols de fila i columna
  const matrix = (v, lab, anim) => {
    const A = (t, c = 'ta-pop') => anim ? tA(t, c) : '', X = [128, 222], Y = [70, 136], cell = (i, j) => { const d = i === j, bg = d ? '#DFF7E8' : i === 0 ? '#FFE1E1' : '#FFEBD6', fg = d ? '#15803D' : i === 0 ? '#B91C1C' : '#C2410C';
      return `<g ${A(.6 + (i * 2 + j) * .45)}>${box(X[j], Y[i], 88, 60, bg, '', 12)}<text x="${X[j] + 44}" y="${Y[i] + (lab ? 32 : 40)}" text-anchor="middle" ${F(22, fg, 900)}>${v[i][j]}</text>${lab ? `<text x="${X[j] + 44}" y="${Y[i] + 50}" text-anchor="middle" ${F(10.5, fg, 800)}>${d ? L('✓ encert', '✓ acierto') : i === 0 ? L('fals negatiu', 'falso negativo') : L('fals positiu', 'falso positivo')}</text>` : ''}</g>`; };
    return `<text x="172" y="22" text-anchor="middle" ${F(11, '#56628A', 700)}>${L('La IA diu →', 'La IA dice →')}</text>
      <g ${A(.2, 'ta-fade')}><text x="172" y="56" text-anchor="middle" ${F(12.5, '#B91C1C')}>🚫 spam</text><text x="266" y="56" text-anchor="middle" ${F(12.5, '#15803D')}>✉️ normal</text>
      <text x="118" y="106" text-anchor="end" ${F(12)}>${L('era spam', 'era spam')}</text><text x="118" y="172" text-anchor="end" ${F(12)}>${L('era normal', 'era normal')}</text></g>
      ${cell(0, 0)}${cell(0, 1)}${cell(1, 0)}${cell(1, 1)}`;
  };
  Object.assign(TANI, {
    // dada + etiqueta = exemple
    i21label() {
      const R = [['🍎', L('poma', 'manzana')], ['🍌', L('plàtan', 'plátano')], ['🍇', L('raïm', 'uva')]];
      return tSvg(214, `${R.map(([e, t], i) => `${tile(14, 10 + i * 68, 56, '#EEF2FF', e, .2 + i * .5)}<g ${tA(.5 + i * .5, 'ta-fade')}>${arrow(78, 38 + i * 68, 104, 38 + i * 68)}</g>
          <g ${tA(.7 + i * .5, 'ta-pop')}><path d="M110 ${24 + i * 68} h96 a8 8 0 0 1 8 8 v12 a8 8 0 0 1 -8 8 h-96 l-12 -14 z" fill="#8B5CF6"/><circle cx="114" cy="${38 + i * 68}" r="3.5" fill="#fff"/><text x="164" y="${43 + i * 68}" text-anchor="middle" ${F(13, '#fff')}>${t}</text></g>`).join('')}
        <g ${tA(2.3, 'ta-in')}>${box(226, 22, 90, 168, '#F3F0FF', '#D8CCFF', 16)}<text x="271" y="58" text-anchor="middle" ${F(13)}>${L('dada', 'dato')}</text><text x="271" y="84" text-anchor="middle" ${F(18, '#7C3AED', 900)}>+</text>
          <text x="271" y="108" text-anchor="middle" ${F(13)}>${L('etiqueta', 'etiqueta')}</text><text x="271" y="134" text-anchor="middle" ${F(18, '#7C3AED', 900)}>=</text><text x="271" y="160" text-anchor="middle" ${F(13, '#7C3AED', 900)}>${L('exemple', 'ejemplo')}</text></g>`);
    },
    // una foto es converteix en una quadrícula de 8 × 6 colors… i en números
    i21feat() {
      const P = ['wwwwwwww', 'wwwbwwww', 'wwrrrrww', 'wrrrrrrw', 'wwrrrrww', 'wwwrrwww'], C = { w: '#ECECE6', r: '#D9363E', b: '#7A4E2A' };
      const cells = P.flatMap((row, y) => [...row].map((k, x) => `<rect x="${14 + x * 17}" y="${34 + y * 17}" width="16" height="16" rx="3" fill="${C[k]}" ${tA(.1 + (y * 8 + x) * .025, 'ta-pop')}/>`)).join('');
      const vals = [.93, .93, .9, .62, .2, .8, .14, .16, .93, .55, .9, .3, .85, .12, .92, .7, .2, .88, .1, .93, .4, .91, .6, .93];
      return tSvg(214, `<text x="82" y="22" text-anchor="middle" ${F(12, '#56628A', 700)}>${L('la foto', 'la foto')}</text>${cells}<text x="82" y="152" text-anchor="middle" ${F(11.5, '#14204A', 800)}>8 × 6 ${L('colors', 'colores')}</text>
        <g ${tA(1.6, 'ta-fade')}>${arrow(156, 85, 182, 85, '#7C3AED')}</g>
        <g ${tA(1.9, 'ta-in')}><text x="252" y="22" text-anchor="middle" ${F(12, '#56628A', 700)}>${L('el que compara la IA', 'lo que compara la IA')}</text>${box(188, 34, 128, 100, '#0E1332', '', 12)}
          ${vals.map((v, i) => `<rect x="${196 + i * 4.8}" y="${126 - v * 82}" width="3.4" height="${(v * 82).toFixed(1)}" rx="1.5" fill="${['#F87171', '#4ADE80', '#60A5FA'][i % 3]}"/>`).join('')}</g>
        <text x="252" y="152" text-anchor="middle" ${F(11.5, '#14204A', 800)} ${tA(2.3, 'ta-fade')}>${L('molts números', 'muchos números')}</text>
        <g ${tA(2.8, 'ta-in')}>${box(14, 170, 302, 34, '#F3F0FF', '', 12)}<text x="165" y="192" text-anchor="middle" ${F(11.5, '#6D28D9', 800)}>✏️ ${L('dibuix: 16 × 16', 'dibujo: 16 × 16')}  ·  🎤 ${L('so: 16 bandes', 'sonido: 16 bandas')}</text></g>`);
    },
    // totes les dades → entrenament (80 %) i prova (20 %), que la IA no veu
    i21split() {
      const E = ['🍎', '🍌', '🍇', '🍎', '🍌', '🍇', '🍎', '🍌', '🍇', '🍎'];
      return tSvg(214, `<text x="160" y="18" text-anchor="middle" ${F(12, '#56628A', 700)}>${L('totes les dades', 'todos los datos')}</text>
        ${E.map((e, i) => tile(10 + i * 30.4, 26, 27, '#EEF2FF', e, .1 + i * .08)).join('')}
        <g ${tA(1, 'ta-fade')}>${arrow(120, 60, 110, 92, '#7C3AED')}${arrow(270, 60, 270, 92, '#F08A24')}</g>
        <g ${tA(1.3, 'ta-in')}>${box(8, 96, 214, 108, '#F3F0FF', '#D8CCFF', 16)}<text x="22" y="118" ${F(13, '#6D28D9', 900)}>🏋️ ${L('Entrenament', 'Entrenamiento')} · 80 %</text>
          ${E.slice(0, 8).map((e, i) => tile(20 + (i % 4) * 48, 128 + Math.floor(i / 4) * 36, 32, '#fff', e, 1.6 + i * .08)).join('')}</g>
        <g ${tA(2.2, 'ta-in')}>${box(230, 96, 84, 108, '#FFF4E8', '#FBD3A6', 16)}<text x="272" y="118" text-anchor="middle" ${F(13, '#C2410C', 900)}>🧪 ${L('Prova', 'Prueba')}</text><text x="272" y="134" text-anchor="middle" ${F(11, '#C2410C', 800)}>20 %</text>
          ${tile(240, 144, 30, '#fff', E[8], 2.5)}${tile(276, 144, 30, '#fff', E[9], 2.6)}<text x="272" y="196" text-anchor="middle" ${F(10, '#C2410C', 800)}>🙈 ${L('mai vistes', 'nunca vistas')}</text></g>`);
    },
    // tres persones etiqueten el mateix: no es posen d'acord sense un criteri
    i21who() {
      const P = [[50, '#8B5CF6', L('fruita', 'fruta'), '#3CC47C'], [160, '#22C3E6', L('verdura', 'verdura'), '#F08A24'], [270, '#F472B6', L('fruita', 'fruta'), '#3CC47C']];
      return tSvg(214, `${tile(132, 8, 56, '#FFF1F1', '🍅', .2)}
        ${P.map(([x, c, t, tc], i) => `<g ${tA(.6 + i * .4, 'ta-in')}>${person(x, 108, c, 1.5)}${box(x - 40, 122, 80, 26, tc, '', 13)}<text x="${x}" y="140" text-anchor="middle" ${F(12, '#fff')}>${t}</text></g>`).join('')}
        <text x="105" y="74" text-anchor="middle" ${F(22, '#F59E0B', 900)} ${tA(1.9, 'ta-wob')}>?</text><text x="215" y="74" text-anchor="middle" ${F(22, '#F59E0B', 900)} ${tA(2, 'ta-wob')}>?</text>
        <g ${tA(2.6, 'ta-pop')}>${box(30, 162, 260, 40, '#0E1332', '', 14)}<text x="160" y="187" text-anchor="middle" ${F(12.5, '#fff')}>📏 ${L('Criteri: té llavors → fruita', 'Criterio: tiene semillas → fruta')}</text></g>`);
    },
    // 10 proves: 8 encerts → 80 %
    i22acc() {
      const E = ['🍎', '🍌', '🍇', '🍎', '🍌', '🍇', '🍎', '🍌', '🍇', '🍎'], G = [1, 1, 0, 1, 1, 1, 1, 0, 1, 1];
      return tSvg(214, `${E.map((e, i) => { const x = 14 + (i % 5) * 60, y = 10 + Math.floor(i / 5) * 66; return `${tile(x, y, 50, '#EEF2FF', e, .1 + i * .1)}<g ${tA(.6 + i * .18, 'ta-pop')}>${G[i] ? ok(x + 46, y + 6, 10) : ko(x + 46, y + 6, 10)}</g>`; }).join('')}
        <g ${tA(2.6, 'ta-pop')}>${box(40, 148, 240, 54, '#7C3AED', '', 18)}<text x="160" y="182" text-anchor="middle" ${F(19, '#fff', 900)}>8 ÷ 10 = 80 %</text></g>`);
    },
    // la matriu de confusió, casella a casella
    i22cm() {
      return tSvg(214, `${matrix([[8, 2], [1, 9]], true, true)}<text x="160" y="206" text-anchor="middle" ${F(11, '#56628A', 700)} ${tA(2.8, 'ta-fade')}>${L('Files: el que era · columnes: el que diu la IA', 'Filas: lo que era · columnas: lo que dice la IA')}</text>`);
    },
    // la matriu del detector d'spam (estàtica, per a la pregunta)
    i22spam() {
      const X = [112, 214], Y = [64, 140], V = [[18, 2], [5, 75]], cell = (i, j) => { const d = i === j; return `${box(X[j], Y[i], 96, 68, d ? '#DFF7E8' : '#FFF1E6', '', 14)}<text x="${X[j] + 48}" y="${Y[i] + 46}" text-anchor="middle" ${F(32, d ? '#15803D' : '#C2410C', 900)}>${V[i][j]}</text>`; };
      return tSvg(214, `<text x="211" y="22" text-anchor="middle" ${F(16, '#56628A', 800)}>${L('la IA diu', 'la IA dice')} ↓</text><text x="160" y="54" text-anchor="middle" ${F(17, '#B91C1C', 900)}>spam</text><text x="262" y="54" text-anchor="middle" ${F(17, '#15803D', 900)}>normal</text>
        <text x="100" y="92" text-anchor="end" ${F(14, '#56628A', 700)}>${L('era', 'era')}</text><text x="100" y="114" text-anchor="end" ${F(18, '#B91C1C', 900)}>spam</text>
        <text x="100" y="168" text-anchor="end" ${F(14, '#56628A', 700)}>${L('era', 'era')}</text><text x="100" y="190" text-anchor="end" ${F(18, '#15803D', 900)}>normal</text>
        ${cell(0, 0)}${cell(0, 1)}${cell(1, 0)}${cell(1, 1)}`);
    },
    // l'alarma que sona per una torrada · el foc que no fa sonar l'alarma
    i22fpfn() {
      const P = (x, head, c, bg, a, b, txt, t) => `<g ${tA(t, 'ta-in')}>${box(x, 6, 150, 202, bg, c + '66', 16)}<text x="${x + 75}" y="30" text-anchor="middle" ${F(12.5, c, 900)}>${head}</text>
        <text x="${x + 48}" y="96" text-anchor="middle" font-size="40">${a}</text><text x="${x + 108}" y="96" text-anchor="middle" font-size="40">${b}</text></g>`;
      return tSvg(214, P(6, L('FALS POSITIU', 'FALSO POSITIVO'), '#C2410C', '#FFF4E8', '🍞', '🚨', '', .2) + P(164, L('FALS NEGATIU', 'FALSO NEGATIVO'), '#B91C1C', '#FFF1F1', '🔥', '🔕', '', 1.4)
        + `<text x="114" y="56" text-anchor="middle" ${F(12, '#C2410C', 900)} ${tA(.8, 'ta-wob')}>BIP!</text>
        <g ${tA(1, 'ta-fade')}><text x="81" y="140" text-anchor="middle" ${F(12.5)}>${L('Sona…', 'Suena…')}</text><text x="81" y="160" text-anchor="middle" ${F(12.5)}>${L('i no hi ha foc', 'y no hay fuego')}</text><text x="81" y="190" text-anchor="middle" ${F(11, '#C2410C', 800)}>${L('diu SÍ · era NO', 'dice SÍ · era NO')}</text></g>
        <g ${tA(2.2, 'ta-fade')}><text x="239" y="140" text-anchor="middle" ${F(12.5)}>${L('Hi ha foc…', 'Hay fuego…')}</text><text x="239" y="160" text-anchor="middle" ${F(12.5)}>${L('i no sona', 'y no suena')}</text><text x="239" y="190" text-anchor="middle" ${F(11, '#B91C1C', 800)}>${L('diu NO · era SÍ', 'dice NO · era SÍ')}</text></g>`);
    },
    // quin error fa més mal en cada cas
    i22cost() {
      const R = [['📱', L('Desbloqueig facial', 'Desbloqueo facial'), L('algú altre entra', 'entra otra persona'), L('fals positiu', 'falso positivo'), '#C2410C'], ['📧', L("Filtre d'spam", 'Filtro de spam'), L('perds un correu bo', 'pierdes un correo bueno'), L('fals positiu', 'falso positivo'), '#C2410C'], ['🩺', L('Prova mèdica', 'Prueba médica'), L('no veu una malaltia', 'no ve una enfermedad'), L('fals negatiu', 'falso negativo'), '#B91C1C']];
      return tSvg(214, `<text x="262" y="16" text-anchor="middle" ${F(10.5, '#56628A', 800)}>${L('el pitjor error', 'el peor error')}</text>${R.map(([e, a, b, w, c], i) => `<g ${tA(.3 + i * .8, 'ta-in')}>${box(6, 22 + i * 64, 308, 58, '#fff', '#DCE4FA')}<text x="30" y="${59 + i * 64}" text-anchor="middle" font-size="22">${e}</text>
          <text x="52" y="${45 + i * 64}" ${F(13)}>${a}</text><text x="52" y="${63 + i * 64}" ${F(10.5, '#56628A', 700)}>${b}</text></g>
        <g ${tA(.7 + i * .8, 'ta-pop')}>${box(216, 36 + i * 64, 92, 28, c, '', 14)}<text x="262" y="${55 + i * 64}" text-anchor="middle" ${F(10.5, '#fff')}>${w}</text></g>`).join('')}`);
    },
    // 100 compres, 5 fraus: una IA que diu sempre «normal» encerta el 95 % i no troba cap frau
    i22trap() {
      const bad = new Set([13, 37, 58, 71, 94]);
      const dots = Array.from({ length: 100 }, (_, i) => bad.has(i) ? '' : `<circle cx="${18 + (i % 10) * 13}" cy="${40 + Math.floor(i / 10) * 13}" r="4.6" fill="#B7C3E6"/>`).join('');
      return tSvg(214, `<text x="77" y="22" text-anchor="middle" ${F(12, '#56628A', 700)}>${L('100 compres', '100 compras')}</text><g ${tA(.1, 'ta-fade')}>${dots}</g>
        <g ${tA(.8, 'ta-pop')}>${[...bad].map(i => `<circle cx="${18 + (i % 10) * 13}" cy="${40 + Math.floor(i / 10) * 13}" r="5.4" fill="#EF4444"/>`).join('')}</g>
        <text x="77" y="184" text-anchor="middle" ${F(11, '#B91C1C', 800)} ${tA(.9, 'ta-fade')}>● 5 ${L('fraus', 'fraudes')}</text>
        <g ${tA(1.4, 'ta-in')}>${box(150, 22, 164, 44, '#0E1332', '', 14)}<text x="232" y="40" text-anchor="middle" ${F(11, '#C4B5FD', 700)}>${L('IA mandrosa', 'IA perezosa')}</text><text x="232" y="57" text-anchor="middle" ${F(12, '#fff')}>${L('sempre «normal»', 'siempre «normal»')}</text></g>
        <g ${tA(2.1, 'ta-pop')}>${box(150, 78, 164, 50, '#DFF7E8', '', 14)}<text x="232" y="98" text-anchor="middle" ${F(11, '#15803D', 800)}>${L('encert', 'acierto')}</text><text x="232" y="119" text-anchor="middle" ${F(20, '#15803D', 900)}>95 %</text></g>
        <g ${tA(2.8, 'ta-pop')}>${box(150, 140, 164, 50, '#FFE1E1', '', 14)}<text x="232" y="160" text-anchor="middle" ${F(11, '#B91C1C', 800)}>${L('fraus detectats', 'fraudes detectados')}</text><text x="232" y="181" text-anchor="middle" ${F(20, '#B91C1C', 900)}>0 / 5</text></g>`);
    },
    // la drecera del fons: pilotes a la gespa, tasses sobre fusta → una tassa a la gespa és «pilota»
    i23short() {
      const G = '#7CC456', W = '#9A6538';
      return tSvg(214, `<text x="160" y="16" text-anchor="middle" ${F(11.5, '#56628A', 700)}>${L('entrenament', 'entrenamiento')}</text>
        ${[0, 1, 2].map(i => tile(10 + i * 50, 24, 44, G, '⚽', .1 + i * .15)).join('')}${[0, 1, 2].map(i => tile(170 + i * 50, 24, 44, W, '☕', .5 + i * .15)).join('')}
        <g ${tA(1.3, 'ta-pop')}><circle cx="62" cy="46" r="34" fill="none" stroke="#F59E0B" stroke-width="4" stroke-dasharray="6 5"/><text x="62" y="98" text-anchor="middle" ${F(11.5, '#B45309', 800)}>🔍 ${L('la IA mira el fons', 'la IA mira el fondo')}</text></g>
        <text x="160" y="128" text-anchor="middle" ${F(11.5, '#56628A', 700)} ${tA(1.8, 'ta-fade')}>${L('prova', 'prueba')}</text>
        ${tile(60, 136, 60, G, '☕', 2)}<g ${tA(2.3, 'ta-fade')}>${arrow(128, 166, 160, 166, '#7C3AED')}</g>
        <g ${tA(2.6, 'ta-pop')}>${box(166, 146, 140, 40, '#FFE1E1', '', 14)}<text x="236" y="171" text-anchor="middle" ${F(13.5, '#B91C1C', 900)}>⚽ ${L('pilota?!', '¿pelota?!')}</text>${ko(300, 148, 10)}</g>`);
    },
    // qui surt poc a les dades, té més errors (exemple inventat, sense xifres)
    i23miss() {
      const R = [['#8B5CF6', 'A', .9, L('molts', 'muchos'), .12], ['#22C3E6', 'B', .35, L('pocs', 'pocos'), .45], ['#F08A24', 'C', .08, L('gairebé cap', 'casi ninguno'), .9]];
      return tSvg(214, `<text x="126" y="18" text-anchor="middle" ${F(11.5, '#56628A', 800)}>📦 ${L('exemples a les dades', 'ejemplos en los datos')}</text><text x="270" y="18" text-anchor="middle" ${F(11.5, '#B91C1C', 800)}>${L('errors', 'errores')}</text>
        ${R.map(([c, n, d, dl, e], i) => `<g ${tA(.3 + i * .7, 'ta-in')}>${person(24, 56 + i * 58, c, 1.2)}<text x="48" y="${58 + i * 58}" ${F(14, c, 900)}>${n}</text>
          <rect x="66" y="${44 + i * 58}" width="136" height="16" rx="8" fill="#E8EEFF"/><rect x="66" y="${44 + i * 58}" width="${(136 * d).toFixed(0)}" height="16" rx="8" fill="${c}"/><text x="68" y="${76 + i * 58}" ${F(10.5, '#56628A', 700)}>${dl}</text></g>
          <g ${tA(.7 + i * .7, 'ta-in')}><rect x="222" y="${44 + i * 58}" width="92" height="16" rx="8" fill="#FBE4E4"/><rect x="222" y="${44 + i * 58}" width="${(92 * e).toFixed(0)}" height="16" rx="8" fill="#EF4444"/></g>`).join('')}
        <text x="160" y="208" text-anchor="middle" ${F(10.5, '#56628A', 700)} ${tA(2.8, 'ta-fade')}>${L('(exemple inventat)', '(ejemplo inventado)')}</text>`);
    },
    // l'estereotip del text i el mateix model amb dades variades
    i23text() {
      const ctx = L('les noies són…', 'las chicas son…');
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 4, 312, 76, '#FFF4F4', '#F8C9C9')}<text x="16" y="24" ${F(11.5, '#B91C1C', 900)}>${L('DADES AMB ESTEREOTIPS', 'DATOS CON ESTEREOTIPOS')}</text><text x="16" y="44" ${F(12, '#56628A', 700)}>${ctx}</text></g>
        ${hbar(L(206, 210), 32, 64, .67, '#EF4444', L('maques', 'guapas'), '67 %', .6)}${hbar(L(206, 210), 52, 64, .33, '#C9D3F2', L('tranquil·les', 'tranquilas'), '33 %', .8)}
        <g ${tA(1.5, 'ta-in')}>${box(4, 90, 312, 120, '#EEFBF3', '#B9EBD2')}<text x="16" y="110" ${F(11.5, '#15803D', 900)}>${L('DADES VARIADES', 'DATOS VARIADOS')}</text><text x="16" y="130" ${F(12, '#56628A', 700)}>${ctx}</text></g>
        ${[[L('maques', 'guapas'), .25, '25 %'], [L('fortes', 'fuertes'), .13, '13 %'], [L('valentes', 'valientes'), .13, '13 %'], [L('científiques', 'científicas'), .13, '13 %']].map(([t, p, pc], i) => hbar(L(206, 210), 118 + i * 21, 64, p, i ? '#3CC47C' : '#F59E0B', t, pc, 2 + i * .25)).join('')}`);
    },
    // com es redueix el biaix
    i23fix() {
      return tSvg(214, grid4([['🌈', L('Dades', 'Datos'), L('variades', 'variados'), '#8B5CF6', '#F3F0FF'], ['⚖️', L('Classes', 'Clases'), L('equilibrades', 'equilibradas'), '#22C3E6', '#E9FAFD'], ['📊', L('Encert', 'Acierto'), L('per grups', 'por grupos'), '#F08A24', '#FFF4E8'], ['👥', L('Equip', 'Equipo'), L('divers', 'diverso'), '#3CC47C', '#EEFBF3']]));
    },
    // problema → classes → dades → prova → fitxa
    i24flow() {
      const S = [['💡', L('Problema', 'Problema')], ['🏷️', L('Classes', 'Clases')], ['📷', L('Dades', 'Datos')], ['🧪', L('Prova', 'Prueba')], ['🗂️', L('Fitxa', 'Ficha')]], C = ['#F59E0B', '#8B5CF6', '#22C3E6', '#F08A24', '#3CC47C'];
      return tSvg(214, `${S.map(([e, t], i) => `<g ${tA(.2 + i * .45, 'ta-pop')}><circle cx="${34 + i * 63}" cy="44" r="26" fill="${C[i]}" opacity=".18"/><circle cx="${34 + i * 63}" cy="44" r="26" fill="none" stroke="${C[i]}" stroke-width="3"/><text x="${34 + i * 63}" y="53" text-anchor="middle" font-size="23">${e}</text><text x="${34 + i * 63}" y="92" text-anchor="middle" ${F(11.5)}>${t}</text></g>${i < 4 ? `<g ${tA(.4 + i * .45, 'ta-fade')}>${arrow(62 + i * 63, 44, 69 + i * 63, 44, '#9AA6CC')}</g>` : ''}`).join('')}
        <g ${tA(2.6, 'ta-in')}>${box(6, 108, 308, 98, '#0E1332', '', 16)}<text x="20" y="130" ${F(11, '#C4B5FD', 800)}>${L('EXEMPLE: SEMÀFOR DEL SOROLL', 'EJEMPLO: SEMÁFORO DEL RUIDO')}</text>
          <text x="20" y="154" ${F(12, '#fff', 700)}>🤫 ${L('silenci', 'silencio')} · 🗣️ ${L('veu', 'voz')} · 📢 ${L('crits', 'gritos')}</text><text x="20" y="176" ${F(12, '#fff', 700)}>🎤 ${L('10 sons de cada classe', '10 sonidos de cada clase')}</text><text x="20" y="196" ${F(12, '#fff', 700)}>🧪 ${L('prova: 4 sons nous de cada', 'prueba: 4 sonidos nuevos de cada')}</text></g>`);
    },
    // la fitxa del model, camp a camp
    i24card() {
      const R = [['🎯', L('Per a què', 'Para qué'), L('avisar si hi ha massa soroll', 'avisar si hay mucho ruido')], ['📦', L('Dades', 'Datos'), L('30 sons de 6 persones', '30 sonidos de 6 personas')], ['🧪', L('Prova', 'Prueba'), L('83 % (10 de 12)', '83 % (10 de 12)')], ['⚠️', L('Límits', 'Límites'), L('es confon amb música', 'se confunde con música')], ['🚫', L('No és per a', 'No es para'), L('posar notes a ningú', 'poner notas a nadie')]];
      return tSvg(214, `${box(8, 4, 304, 206, '#fff', '#DCE4FA', 16)}${box(8, 4, 304, 34, '#7C3AED', '', 16)}<rect x="8" y="24" width="304" height="14" fill="#7C3AED"/><text x="22" y="27" ${F(12.5, '#fff', 900)}>🗂️ ${L('FITXA DEL MODEL', 'FICHA DEL MODELO')}</text><text x="298" y="27" text-anchor="end" ${F(10.5, '#E9D5FF', 700)}>${L('Semàfor v1', 'Semáforo v1')}</text>
        ${R.map(([e, k, v], i) => `<g ${tA(.4 + i * .5, 'ta-in')}><text x="22" y="${66 + i * 34}" font-size="15">${e}</text><text x="44" y="${66 + i * 34}" ${F(11.5, '#6D28D9', 900)}>${k}</text><text x="${L(124, 124)}" y="${66 + i * 34}" ${F(11, '#14204A', 700)}>${v}</text>${i < 4 ? `<line x1="22" y1="${76 + i * 34}" x2="298" y2="${76 + i * 34}" stroke="#EEF1FA" stroke-width="1.5"/>` : ''}</g>`).join('')}`);
    },
    // 3 proves meves (100 %?) contra 20 proves variades (80 %)
    i24test() {
      const G = [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 6, 118, 202, '#FFF4E8', '#FBD3A6', 16)}<text x="63" y="30" text-anchor="middle" ${F(11.5, '#C2410C', 900)}>${L('3 proves meves', '3 pruebas mías')}</text>
          ${[0, 1, 2].map(i => ok(33 + i * 30, 66, 11)).join('')}<text x="63" y="122" text-anchor="middle" ${F(22, '#C2410C', 900)}>100 %?</text><text x="63" y="164" text-anchor="middle" font-size="30">🤨</text></g>
        <g ${tA(1.2, 'ta-in')}>${box(130, 6, 186, 202, '#EEFBF3', '#B9EBD2', 16)}<text x="223" y="30" text-anchor="middle" ${F(11.5, '#15803D', 900)}>${L('20 proves variades', '20 pruebas variadas')}</text>
          <text x="223" y="48" text-anchor="middle" ${F(10, '#56628A', 700)}>${L('altres persones i llocs', 'otras personas y lugares')}</text></g>
        ${G.map((g, i) => `<g ${tA(1.5 + i * .06, 'ta-pop')}>${g ? ok(152 + (i % 5) * 36, 72 + Math.floor(i / 5) * 26, 9) : ko(152 + (i % 5) * 36, 72 + Math.floor(i / 5) * 26, 9)}</g>`).join('')}
        <g ${tA(2.9, 'ta-pop')}>${box(160, 172, 126, 28, '#15803D', '', 14)}<text x="223" y="191" text-anchor="middle" ${F(12.5, '#fff')}>80 % · ${L('fiable', 'fiable')} ✓</text></g>`);
    },
    // les imatges i el so no surten del dispositiu; al portafoli, només noms i números
    i24priv() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="12" width="150" height="120" rx="16" fill="#F3F0FF" stroke="#8B5CF6" stroke-width="2.5" stroke-dasharray="7 5"/><text x="85" y="34" text-anchor="middle" ${F(11.5, '#6D28D9', 900)}>🔒 ${L('el teu dispositiu', 'tu dispositivo')}</text>
          <text x="58" y="82" text-anchor="middle" font-size="30">📷</text><text x="112" y="82" text-anchor="middle" font-size="30">🎤</text><text x="85" y="116" text-anchor="middle" ${F(10.5, '#56628A', 700)}>${L('imatges i so, només aquí', 'imágenes y sonido, solo aquí')}</text></g>
        <g ${tA(1, 'ta-in')}><text x="246" y="52" text-anchor="middle" font-size="34">☁️</text>${ko(268, 30, 11)}<text x="246" y="80" text-anchor="middle" ${F(10.5, '#B91C1C', 800)}>${L('no surt enlloc', 'no sale a ningún sitio')}</text>${arrow(166, 50, 210, 46, '#EF9A9A')}</g>
        <g ${tA(1.8, 'ta-in')}><text x="208" y="122" font-size="22">📁</text><text x="236" y="114" ${F(10.5, '#15803D', 800)}>${L('al portafoli:', 'al portafolio:')}</text><text x="236" y="129" ${F(10, '#14204A', 700)}>${L('classes, nombre', 'clases, número')}</text><text x="236" y="142" ${F(10, '#14204A', 700)}>${L("d'exemples, encert", 'de ejemplos, acierto')}</text>${arrow(166, 112, 202, 116, '#86D3A5')}</g>
        <g ${tA(2.7, 'ta-pop')}>${box(10, 158, 300, 44, '#FFE1E1', '#F8B4B4', 14)}<text x="160" y="178" text-anchor="middle" ${F(11.5, '#B91C1C', 900)}>🚫 ${L("Endevinar emocions a l'escola", 'Adivinar emociones en la escuela')}</text><text x="160" y="195" text-anchor="middle" ${F(10, '#B91C1C', 700)}>${L("prohibit per la llei europea d'IA (2025)", 'prohibido por la ley europea de IA (2025)')}</text></g>`);
    }
  });
}
