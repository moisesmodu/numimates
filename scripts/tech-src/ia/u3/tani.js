/* Tech IA · unitat 3 · animacions de teoria (TANI). Dibuixos propis de Numi: del mini model al xatbot, l'ajust com a
   assistent, la finestra de context, les eines, les fitxes; per què al·lucina, fonts inventades, lectura lateral i
   senyals d'alerta; les peces d'un bon prompt, vague o precís, exemples, iterar i què no s'hi posa; i la IA com a
   tutora (copiadora o tutora, recordar per aprendre, la rutina, les normes, l'edat i la privadesa); i el taller i3-5 amb el xat
   de veritat (prompt pobre o bo, la pregunta trampa i el xat com a tutor). */
{
  const F = (sz, c = '#14204A', w = 800) => `style="font:${w} ${sz}px Lexend,system-ui,sans-serif;fill:${c}"`;
  const M = (sz, c = '#14204A') => `style="font:700 ${sz}px ui-monospace,Menlo,monospace;fill:${c}"`;
  const box = (x, y, w, h, fill, stroke, r = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="2"` : ''}/>`;
  const arrow = (x1, y1, x2, y2, c = '#8B9BE0') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><path d="M${x2} ${y2} l-7 -4 m7 4 l-7 4" stroke="${c}" stroke-width="2.5" stroke-linecap="round" fill="none" transform="rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI).toFixed(0)} ${x2} ${y2})"/>`;
  const ok = (cx, cy, r = 10, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><path d="M${cx - r / 2} ${cy}l${(r * .35).toFixed(1)} ${(r * .35).toFixed(1)} ${(r * .6).toFixed(1)} -${(r * .65).toFixed(1)}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const ko = (cx, cy, r = 10) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#EF5A5A"/><path d="M${cx - r * .4} ${cy - r * .4}l${r * .8} ${r * .8}m0 -${r * .8}l-${r * .8} ${r * .8}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`;
  const CT = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" text-anchor="middle" ${F(sz, c, w)}>${t}</text>`;
  // graella 2 × 3 de targetes petites: [emoji, línia 1, línia 2, color, fons]
  const grid6 = (T, t0 = .2) => T.map(([e, a, b, c, bg], i) => { const x = 6 + (i % 2) * 156, y = 6 + Math.floor(i / 2) * 70;
    return `<g ${tA(t0 + i * .35, 'ta-pop')}>${box(x, y, 152, 62, bg, c + '66', 14)}<text x="${x + 26}" y="${y + 40}" text-anchor="middle" font-size="22">${e}</text><text x="${x + 50}" y="${y + 27}" ${F(12)}>${a}</text><text x="${x + 50}" y="${y + 46}" ${F(12, c, 900)}>${b}</text></g>`; }).join('');
  Object.assign(TANI, {
    // del mini model de la unitat 1 a un model gran: la mateixa tasca, moltíssima més escala
    i31scale() {
      const col = [[178, [44, 68, 92, 116, 140]], [232, [36, 58, 80, 102, 124, 146]], [286, [44, 68, 92, 116, 140]]];
      const lines = []; for (let c = 0; c < 2; c++) for (const y1 of col[c][1]) for (const y2 of col[c + 1][1]) lines.push(`<line x1="${col[c][0]}" y1="${y1}" x2="${col[c + 1][0]}" y2="${y2}" stroke="#6C7BD6" stroke-width="1" opacity=".45"/>`);
      const NC = ['#8B5CF6', '#22C3E6', '#F472B6'];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 34, 112, 132, '#F3F0FF', '#D8CCFF')}${CT(62, 58, L('EL TEU MODEL', 'TU MODELO'), 11, '#6D28D9', 900)}<text x="62" y="104" text-anchor="middle" font-size="32">📄</text>${CT(62, 132, L('compta parelles', 'cuenta parejas'), 11.5)}${CT(62, 150, L('de poques frases', 'de pocas frases'), 10.5, '#56628A', 700)}</g>
        <g ${tA(.8, 'ta-fade')}>${arrow(122, 100, 144, 100, '#7C3AED')}</g>
        <g ${tA(1, 'ta-in')}>${box(150, 6, 164, 172, '#0E1332', '', 16)}${CT(232, 26, L('UN MODEL GRAN', 'UN MODELO GRANDE'), 11, '#fff', 900)}</g>
        <g ${tA(1.4, 'ta-fade')}>${lines.join('')}</g>
        ${col.map(([x, ys], c) => `<g ${tA(1.3 + c * .35, 'ta-pop')}>${ys.map(y => `<circle cx="${x}" cy="${y}" r="6" fill="${NC[c]}"/>`).join('')}</g>`).join('')}
        <g ${tA(2.2, 'ta-fade')}>${CT(232, 168, L('xarxa neuronal enorme', 'red neuronal enorme'), 10.5, '#C4B5FD', 700)}</g>
        <g ${tA(2.6, 'ta-pop')}>${box(6, 186, 308, 24, '#7C3AED', '', 12)}${CT(160, 203, L('Mateixa tasca: predir la fitxa següent', 'Misma tarea: predecir la ficha siguiente'), 11.5, '#fff')}</g>`);
    },
    // un model base només continua el text; ajustat amb exemples i valoracions, respon com un assistent
    i31tune() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 4, 312, 96, '#FFF4F4', '#F8C9C9')}<text x="16" y="22" ${F(10.5, '#B91C1C', 900)}>${L('MODEL BASE', 'MODELO BASE')}</text>
          ${box(16, 30, 226, 24, '#fff', '#DCE4FA', 12)}<text x="26" y="46" ${F(11)}>${L('Quina és la capital de França?', '¿Cuál es la capital de Francia?')}</text></g>
        <g ${tA(.8, 'ta-fade')}><text x="16" y="76" ${M(12, '#B91C1C')}>${L("Quina és la d'Itàlia? I la…", '¿Y la de Italia? ¿Y la…')}</text><text x="16" y="93" ${F(10.5, '#56628A', 700)}>${L('només continua el text', 'solo continúa el texto')}</text></g>
        <g ${tA(1.3, 'ta-pop')}>${ko(294, 70)}</g>
        <g ${tA(1.7, 'ta-pop')}>${box(8, 106, 148, 24, '#F3F0FF', '#D8CCFF', 12)}${CT(82, 122, L('✍️ exemples de respostes', '✍️ ejemplos de respuestas'), 10.5, '#6D28D9')}</g>
        <g ${tA(1.9, 'ta-pop')}>${box(164, 106, 148, 24, '#FFF4E8', '#F8D2A8', 12)}${CT(238, 122, L('👍 valoracions', '👍 valoraciones'), 10.5, '#B45309')}</g>
        <g ${tA(2.4, 'ta-in')}>${box(4, 136, 312, 74, '#EEFBF3', '#B9EBD2')}<text x="16" y="154" ${F(10.5, '#15803D', 900)}>${L("DESPRÉS DE L'AJUST", 'DESPUÉS DEL AJUSTE')}</text>
          <text x="16" y="180" ${M(12.5, '#15803D')}>${L('París. Vols saber res més?', 'París. ¿Quieres saber algo más?')}</text><text x="16" y="199" ${F(10.5, '#56628A', 700)}>${L('respon com un assistent', 'responde como un asistente')}</text></g>
        <g ${tA(3, 'ta-pop')}>${ok(294, 174)}</g>`);
    },
    // la finestra de context: les instruccions de l'app i els últims missatges; el principi ja no hi cap
    i31ctx() {
      const R = [[0, 'sys'], [1, 'me'], [2, 'them'], [3, 'me'], [4, 'them'], [5, 'me'], [6, 'them']];
      const bar = ([i, w]) => { const y = 6 + i * 25, out = i === 1 || i === 2, x = w === 'me' ? 96 : 14, wd = w === 'sys' ? 158 : w === 'me' ? 110 : 132, c = w === 'sys' ? '#7C3AED' : w === 'me' ? '#8B5CF6' : '#22C3E6';
        return `<g ${tA(.2 + i * .18, 'ta-in')} opacity="${out ? .35 : 1}"><rect x="${x}" y="${y}" width="${wd}" height="19" rx="9.5" fill="${c}"/>${w === 'sys' ? `<text x="${x + 10}" y="${y + 14}" ${F(10.5, '#fff')}>📌 ${L("instruccions de l'app", 'instrucciones de la app')}</text>` : ''}</g>`; };
      return tSvg(214, `${R.map(bar).join('')}
        <g ${tA(1.7, 'ta-pop')}><rect x="8" y="78" width="212" height="100" rx="14" fill="none" stroke="#14A3B8" stroke-width="3" stroke-dasharray="7 5"/></g>
        <g ${tA(2.1, 'ta-fade')}><text x="230" y="122" ${F(12, '#0E7490', 900)}>👀 ${L('el que', 'lo que')}</text><text x="230" y="140" ${F(12, '#0E7490', 900)}>${L('veu ara', 've ahora')}</text>
          <text x="230" y="49" ${F(10.5, '#9AA6CC', 800)}>💨 ${L('ja no', 'ya no')}</text><text x="230" y="64" ${F(10.5, '#9AA6CC', 800)}>${L('hi cap', 'cabe')}</text><text x="178" y="18" ${F(10, '#7C3AED', 800)}>${L('sempre hi és', 'siempre está')}</text></g>
        <g ${tA(2.7, 'ta-pop')}>${box(40, 186, 240, 24, '#0E1332', '', 12)}${CT(160, 203, L('🆕 Xat nou → comença de zero', '🆕 Chat nuevo → empieza de cero'), 11.5, '#fff')}</g>`);
    },
    // sense eines s'ho inventa; amb una eina (cercador), l'app hi posa la dada i la font al context
    i31tools() {
      const q = `${L('Quin temps farà demà?', '¿Qué tiempo hará mañana?')}`;
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 4, 312, 96, '#FFF4F4', '#F8C9C9')}<text x="306" y="22" text-anchor="end" ${F(10, '#B91C1C', 900)}>${L('SENSE EINES', 'SIN HERRAMIENTAS')}</text>
          ${box(10, 40, 178, 26, '#fff', '#DCE4FA', 13)}${CT(99, 57, q, 11)}</g>
        <g ${tA(.7, 'ta-fade')}>${arrow(192, 53, 206, 53, '#B91C1C')}</g>
        <g ${tA(.9, 'ta-pop')}><circle cx="228" cy="53" r="20" fill="#7C3AED"/><text x="228" y="61" text-anchor="middle" font-size="19">🧠</text></g>
        <g ${tA(1.4, 'ta-pop')}><text x="280" y="62" text-anchor="middle" font-size="24">🤷</text>${CT(278, 88, L("s'ho inventa", 'se lo inventa'), 10.5, '#B91C1C', 800)}</g>
        <g ${tA(1.9, 'ta-in')}>${box(4, 108, 312, 102, '#EEFBF3', '#B9EBD2')}<text x="14" y="205" ${F(9.5, '#15803D', 900)}>${L('AMB UNA EINA', 'CON UNA HERRAMIENTA')}</text>
          ${box(10, 116, 178, 26, '#fff', '#DCE4FA', 13)}${CT(99, 133, q, 11)}</g>
        <g ${tA(2.3, 'ta-pop')}><circle cx="46" cy="178" r="20" fill="#7C3AED"/><text x="46" y="186" text-anchor="middle" font-size="19">🧠</text></g>
        <g ${tA(2.6, 'ta-fade')}>${arrow(70, 178, 126, 178, '#15803D')}<text x="98" y="168" text-anchor="middle" font-size="15">🔍</text></g>
        <g ${tA(2.9, 'ta-in')}>${box(132, 154, 176, 46, '#fff', '#A7E3C2', 12)}<text x="144" y="174" ${F(11.5)}>☀️ ${L('previsió + font', 'previsión + fuente')}</text><text x="144" y="191" ${F(10, '#56628A', 700)}>${L('la llegeix i et respon', 'la lee y te responde')}</text></g>
        <g ${tA(3.3, 'ta-pop')}>${ok(298, 156, 9)}</g>`);
    },
    // el text es parteix en fitxes i cada fitxa és un número (números d'exemple)
    i31tok() {
      const T = L(['incre', 'ïble', 'ment', ' ràpid', '!'], ['¡', 'incre', 'íble', 'mente', ' rápido', '!']), N = L(['4821', '377', '902', '15530', '0'], ['11', '4821', '9306', '2184', '33071', '0']);
      const C = ['#8B5CF6', '#22C3E6', '#F08A24', '#3CC47C', '#E5489A', '#3B82F6'], W = T.map(t => t.length * 8 + 12), tot = W.reduce((a, b) => a + b, 0) + (T.length - 1) * 6;
      let x = (320 - tot) / 2; const chips = T.map((t, i) => { const s = `<g ${tA(.9 + i * .3, 'ta-pop')}><rect x="${x}" y="70" width="${W[i]}" height="30" rx="9" fill="${C[i]}"/><text x="${x + W[i] / 2}" y="90" text-anchor="middle" ${M(13, '#fff')}>${t.replace(' ', '·')}</text><text x="${x + W[i] / 2}" y="118" text-anchor="middle" ${M(10.5, '#56628A')}>${N[i]}</text></g>`; x += W[i] + 6; return s; }).join('');
      return tSvg(196, `<g ${tA(.2, 'ta-in')}>${box(4, 6, 312, 40, '#0E1332', '', 14)}${CT(160, 32, L('increïblement ràpid!', '¡increíblemente rápido!'), 14.5, '#fff', 900)}</g>
        <g ${tA(.6, 'ta-fade')}>${arrow(160, 50, 160, 64, '#7C3AED')}</g>${chips}
        <g ${tA(2.8, 'ta-fade')}>${CT(160, 150, L('El model no veu lletres: veu fitxes,', 'El modelo no ve letras: ve fichas,'), 12)}${CT(160, 168, L('i cada fitxa és un número', 'y cada ficha es un número'), 12)}${CT(160, 188, L("(fitxes i números d'exemple)", '(fichas y números de ejemplo)'), 10, '#9AA6CC', 700)}</g>`);
    },

    // per què al·lucina: tria el probable, barreja trossos i omple els buits
    i32why() {
      const S = [['🎲', L('Tria el probable, no el comprovat', 'Elige lo probable, no lo comprobado'), L('no consulta cap font', 'no consulta ninguna fuente'), '#8B5CF6'],
        ['🧩', L('Barreja trossos de textos', 'Mezcla trozos de textos'), L('i surt una frase nova… i falsa', 'y sale una frase nueva… y falsa'), '#22C3E6'],
        ['🕳️', L('Omple els buits', 'Rellena los huecos'), L('en lloc de dir «no ho sé»', 'en lugar de decir «no lo sé»'), '#F08A24']];
      return tSvg(214, S.map(([e, t, k, c], i) => `<g ${tA(.3 + i * .8, 'ta-in')}>${box(6, 8 + i * 68, 308, 60, '#fff', '#DCE4FA')}<circle cx="34" cy="${38 + i * 68}" r="19" fill="${c}" opacity=".18"/><text x="34" y="${46 + i * 68}" text-anchor="middle" font-size="20">${e}</text>
          <text x="62" y="${34 + i * 68}" ${F(12.5)}>${t}</text><text x="62" y="${53 + i * 68}" ${F(11, c, 800)}>${k}</text></g>`).join(''));
    },
    // una font inventada: el llibre no surt enlloc i l'enllaç no existeix
    i32src() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 6, 312, 62, '#0E1332', '', 14)}<text x="16" y="24" ${F(10.5, '#9AA6CC', 700)}>📚 ${L('font que dona la IA:', 'fuente que da la IA:')}</text>
          <text x="16" y="43" ${M(11.5, '#fff')}>Vila, J. (2018).</text><text x="16" y="60" ${M(11.5, '#C4B5FD')}>${L('«Les abelles secretes». Ed. Rusc', '«Las abejas secretas». Ed. Panal')}</text></g>
        <g ${tA(.9, 'ta-in')}>${box(4, 80, 204, 30, '#fff', '#DCE4FA', 15)}<text x="16" y="100" ${F(11)}>🔎 ${L('«Les abelles secretes» Vila', '«Las abejas secretas» Vila')}</text></g>
        <g ${tA(1.4, 'ta-pop')}>${box(214, 80, 102, 30, '#FFE4E4', '#F8B4B4', 15)}${CT(265, 100, L('0 resultats', '0 resultados'), 11.5, '#B91C1C')}</g>
        <g ${tA(1.9, 'ta-in')}>${box(4, 122, 204, 30, '#fff', '#DCE4FA', 15)}<text x="16" y="142" ${M(10.5, '#1D4ED8')}>🔗 ${L('abelles.exemple/estudi', 'abejas.ejemplo/estudio')}</text></g>
        <g ${tA(2.4, 'ta-pop')}>${box(214, 122, 102, 30, '#FFE4E4', '#F8B4B4', 15)}${CT(265, 142, L('no existeix', 'no existe'), 11.5, '#B91C1C')}</g>
        <g ${tA(3, 'ta-pop')}>${box(24, 170, 272, 34, '#7C3AED', '', 17)}${CT(160, 192, L('Les fonts també es poden inventar', 'Las fuentes también se pueden inventar'), 12, '#fff')}</g>`);
    },
    // lectura lateral: una afirmació es comprova obrint fonts fiables i independents
    i32lateral() {
      const T = [['📘', L('Enciclopèdia', 'Enciclopedia'), ''], ['🏛️', L('Museu de', 'Museo de'), L('ciències', 'ciencias')], ['📚', L('Llibre de', 'Libro de'), L('text', 'texto')]];
      return tSvg(214, `<g ${tA(.2, 'ta-pop')}>${box(62, 6, 196, 40, '#FFF7E6', '#F6D28B', 14)}${CT(160, 31, L('«Les abelles tenen 5 ulls»', '«Las abejas tienen 5 ojos»'), 12.5, '#92400E')}</g>
        ${T.map(([e, a, b], i) => { const x = 8 + i * 104; return `<g ${tA(.7 + i * .3, 'ta-fade')}>${arrow(160, 50, x + 48, 80, '#C9A55A')}</g><g ${tA(.9 + i * .4, 'ta-in')}>${box(x, 84, 96, 72, '#fff', '#DCE4FA', 12)}<rect x="${x}" y="84" width="96" height="14" rx="7" fill="#E8EEFF"/><circle cx="${x + 10}" cy="91" r="3" fill="#9AA6CC"/><circle cx="${x + 20}" cy="91" r="3" fill="#9AA6CC"/>
          <text x="${x + 48}" y="122" text-anchor="middle" font-size="20">${e}</text>${CT(x + 48, 140, a, 10.5)}${b ? CT(x + 48, 152, b, 10.5) : ''}</g><g ${tA(1.8 + i * .3, 'ta-pop')}>${ok(x + 86, 88, 9)}</g>`; }).join('')}
        <g ${tA(2.9, 'ta-in')}>${box(6, 168, 308, 38, '#EEFBF3', '#B9EBD2', 14)}${CT(160, 192, L('2 fonts fiables i independents ✓', '2 fuentes fiables e independientes ✓'), 12, '#15803D')}</g>`);
    },
    // senyals d'alerta: on és més fàcil que hi hagi una al·lucinació
    i32flags() {
      return tSvg(214, grid6([['🔢', L('Xifres molt', 'Cifras muy'), L('exactes', 'exactas'), '#EF4444', '#FFF1F1'], ['💬', L('Cites', 'Citas'), L('literals', 'literales'), '#F08A24', '#FFF4E8'],
        ['📅', L('Dates i', 'Fechas y'), L('noms', 'nombres'), '#8B5CF6', '#F3F0FF'], ['🔗', L('Enllaços', 'Enlaces'), L('i llibres', 'y libros'), '#3B82F6', '#EEF4FF'],
        ['🆕', L('Temes molt', 'Temas muy'), L('recents', 'recientes'), '#14A3B8', '#E9FAFD'], ['📍', L('Coses molt', 'Cosas muy'), L('locals', 'locales'), '#E5489A', '#FDEEF6']]) +
        [0, 1, 2, 3, 4, 5].map(i => `<text x="${146 + (i % 2) * 156}" y="${24 + Math.floor(i / 2) * 70}" text-anchor="end" font-size="13" ${tA(1.9 + i * .15, 'ta-pop')}>🚩</text>`).join(''));
    },

    // les sis peces d'un bon prompt
    i33anat() {
      const P = [[L('CONTEXT', 'CONTEXTO'), L("estic a 2n d'ESO…", 'estoy en 2.º de ESO…'), '#8B5CF6', '#F3F0FF'], [L('TASCA', 'TAREA'), L("explica'm…", 'explícame…'), '#14A3B8', '#E9FAFD'],
        [L('FORMAT', 'FORMATO'), L('en 5 punts curts', 'en 5 puntos cortos'), '#F08A24', '#FFF4E8'], [L('EXEMPLE', 'EJEMPLO'), L('com aquest: …', 'como este: …'), '#3CC47C', '#EEFBF3'],
        [L('LÍMITS', 'LÍMITES'), L('sense…, només…', 'sin…, solo…'), '#E5489A', '#FDEEF6'], [L('COMPROVAR', 'COMPROBAR'), L('si dubtes, digues-ho', 'si dudas, dilo'), '#3B82F6', '#EEF4FF']];
      return tSvg(214, P.map(([k, x, c, bg], i) => { const X = 6 + (i % 2) * 156, Y = 6 + Math.floor(i / 2) * 70;
        return `<g ${tA(.2 + i * .4, 'ta-pop')}>${box(X, Y, 152, 62, bg, c + '66')}<circle cx="${X + 18}" cy="${Y + 20}" r="10" fill="${c}"/><text x="${X + 18}" y="${Y + 24}" text-anchor="middle" ${F(11, '#fff', 900)}>${i + 1}</text>
          <text x="${X + 34}" y="${Y + 25}" ${F(11.5, c, 900)}>${k}</text><text x="${X + 12}" y="${Y + 48}" ${F(10.5, '#14204A', 700)}>${x}</text></g>`; }).join(''));
    },
    // un prompt vague fa una resposta genèrica; un de precís, una de clara i útil
    i33compare() {
      const grey = [96, 120, 84, 130, 110, 124, 90, 116].map((w, i) => `<rect x="14" y="${90 + i * 10}" width="${w}" height="5" rx="2.5" fill="#E3B4B4"/>`).join('');
      const pts = [['#8B5CF6', 84], ['#14A3B8', 100], ['#F08A24', 76]].map(([c, w], i) => `<circle cx="180" cy="${101 + i * 22}" r="5" fill="${c}"/><rect x="192" y="${98 + i * 22}" width="${w}" height="6" rx="3" fill="#9ED9B8"/>`).join('');
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 4, 152, 206, '#FFF4F4', '#F8C9C9')}${CT(80, 23, L('PROMPT VAGUE', 'PROMPT VAGO'), 11, '#B91C1C', 900)}${box(14, 32, 132, 30, '#fff', '#DCE4FA', 12)}<text x="80" y="52" text-anchor="middle" ${M(12)}>${L('volcans', 'volcanes')}</text></g>
        <g ${tA(.7, 'ta-fade')}>${arrow(80, 66, 80, 80, '#C98A8A')}${grey}</g>
        <g ${tA(1.3, 'ta-pop')}>${ko(80, 182)}${CT(80, 204, L('llarg i genèric', 'largo y genérico'), 10.5, '#B91C1C', 800)}</g>
        <g ${tA(1.6, 'ta-in')}>${box(164, 4, 152, 206, '#EEFBF3', '#B9EBD2')}${CT(240, 23, L('PROMPT PRECÍS', 'PROMPT PRECISO'), 11, '#15803D', 900)}${box(172, 32, 136, 46, '#fff', '#DCE4FA', 12)}
          ${CT(240, 51, L("2n d'ESO: explica'm", '2.º ESO: explícame'), 10)}${CT(240, 67, L('els volcans en 3 punts', 'los volcanes en 3 puntos'), 10)}</g>
        <g ${tA(2.1, 'ta-fade')}>${arrow(240, 80, 240, 90, '#7FC79E')}${pts}<text x="176" y="170" ${F(11, '#15803D')}>❓ ${L('+ 1 pregunta de repàs', '+ 1 pregunta de repaso')}</text></g>
        <g ${tA(2.7, 'ta-pop')}>${ok(240, 186)}${CT(240, 207, L('clar i útil', 'claro y útil'), 10.5, '#15803D', 800)}</g>`);
    },
    // un exemple al prompt: el model n'imita el patró
    i33few() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 6, 312, 56, '#F3F0FF', '#D8CCFF')}<text x="16" y="24" ${F(10.5, '#6D28D9', 900)}>${L('EL TEU EXEMPLE', 'TU EJEMPLO')}</text>
          <text x="16" y="48" ${M(12)}><tspan fill="#7C3AED">${L('Volcà', 'Volcán')}</tspan>: <tspan fill="#0E7490">${L('muntanya que treu lava', 'montaña que echa lava')}</tspan></text><text x="${L(254, 246)}" y="48" font-size="13">🌋</text></g>
        <g ${tA(1, 'ta-in')}>${box(4, 74, 312, 86, '#0E1332', '', 14)}<text x="16" y="92" ${F(10.5, '#9AA6CC', 700)}>${L('el model segueix el patró:', 'el modelo sigue el patrón:')}</text></g>
        <g ${tA(1.6, 'ta-fade')}><text x="16" y="118" ${M(12, '#fff')}><tspan fill="#C4B5FD">${L('Terratrèmol', 'Terremoto')}</tspan>: <tspan fill="#67E8F9">${L('la terra tremola', 'la tierra tiembla')}</tspan></text><text x="${L(254, 246)}" y="118" font-size="13">🌍</text></g>
        <g ${tA(2.2, 'ta-fade')}><text x="16" y="144" ${M(12, '#fff')}><tspan fill="#C4B5FD">Tsunami</tspan>: <tspan fill="#67E8F9">${L('onada gegant', 'ola gigante')}</tspan></text><text x="${L(184, 170)}" y="144" font-size="13">🌊</text></g>
        <g ${tA(2.8, 'ta-pop')}>${box(14, 170, 80, 22, '#7C3AED', '', 11)}${CT(54, 185, L('nom', 'nombre'), 11, '#fff')}${box(102, 170, 132, 22, '#0E7490', '', 11)}${CT(168, 185, L('definició curta', 'definición corta'), 11, '#fff')}${box(242, 170, 64, 22, '#F08A24', '', 11)}${CT(274, 185, 'emoji', 11, '#fff')}</g>
        <g ${tA(3.2, 'ta-fade')}>${CT(160, 209, L('Un exemple val més que mil instruccions', 'Un ejemplo vale más que mil instrucciones'), 11, '#7C3AED', 800)}</g>`);
    },
    // iterar: cada versió afegeix el que faltava i la resposta millora
    i33iter() {
      const V = [['v1', L('resumeix la Revolució Industrial', 'resume la Revolución Industrial'), 2, '#EF5A5A'], ['v2', L("+ per a 3r d'ESO, en 5 punts", '+ para 3.º de ESO, en 5 puntos'), 4, '#F2B21B'], ['v3', L('+ sense inventar; si dubtes, digues-ho', '+ sin inventar; si dudas, dilo'), 6, '#3CC47C']];
      return tSvg(214, V.map(([v, t, s, c], i) => { const y = 6 + i * 70; return `<g ${tA(.3 + i * .9, 'ta-in')}>${box(4, y, 312, 62, '#fff', '#DCE4FA')}<circle cx="28" cy="${y + 31}" r="16" fill="${c}"/><text x="28" y="${y + 36}" text-anchor="middle" ${F(12, '#fff', 900)}>${v}</text>
          <text x="52" y="${y + 25}" ${M(10.5)}>${t}</text><rect x="52" y="${y + 38}" width="200" height="9" rx="4.5" fill="#E8EEFF"/><rect x="52" y="${y + 38}" width="${(200 * s / 6).toFixed(0)}" height="9" rx="4.5" fill="${c}"/><text x="262" y="${y + 47}" ${F(11.5)}>${s}/6</text></g>`; }).join('') +
        `<g ${tA(2.9, 'ta-pop')}>${ok(298, 186)}</g>`);
    },
    // què no hi posis mai · com demanar per aprendre
    i33safe() {
      const A = [L('nom i cognoms', 'nombre y apellidos'), L('adreça i telèfon', 'dirección y teléfono'), L('contrasenyes', 'contraseñas'), L("fotos d'altres", 'fotos de otros')];
      const B = [L("explica'm…", 'explícame…'), L("pregunta'm…", 'pregúntame…'), L("dona'm una pista", 'dame una pista'), L('revisa el meu text', 'revisa mi texto')];
      const col = (x, head, rows, good, fill, stroke, t0) => `<g ${tA(t0, 'ta-in')}>${box(x, 6, 152, 202, fill, stroke, 16)}${CT(x + 76, 34, head, 12.5)}</g>
        ${rows.map((t, i) => `<g ${tA(t0 + .4 + i * .4, 'ta-in')}>${good ? ok(x + 20, 68 + i * 38) : ko(x + 20, 68 + i * 38)}<text x="${x + 36}" y="${73 + i * 38}" ${F(11, '#14204A', 700)}>${t}</text></g>`).join('')}`;
      return tSvg(214, col(4, L('🔒 Mai no hi posis', '🔒 Nunca pongas'), A, false, '#FFF4F4', '#F8C9C9', .1) + col(164, L('🎓 Per aprendre', '🎓 Para aprender'), B, true, '#EEFBF3', '#B9EBD2', 1.6));
    },

    // dos camins: la IA copiadora (entregues, però no aprens) o la IA tutora (practiques i ho saps fer)
    i34two() {
      const A = [L("«fes-m'ho tu»", '«házmelo tú»'), L('entregues ràpid', 'entregas rápido'), L('no ho has après', 'no lo has aprendido')], B = [L("«ajuda'm a entendre»", '«ayúdame a entender»'), L('practiques i penses', 'practicas y piensas'), L('ho saps fer', 'sabes hacerlo')];
      const col = (x, head, rows, c, fill, stroke, emo, t0) => `<g ${tA(t0, 'ta-in')}>${box(x, 52, 150, 158, fill, stroke, 16)}${CT(x + 75, 72, head, 11.5, c, 900)}</g>
        ${rows.map((t, i) => `<g ${tA(t0 + .35 + i * .35, 'ta-fade')}>${CT(x + 75, 98 + i * 24, t, 11)}</g>`).join('')}
        <g ${tA(t0 + 1.4, 'ta-pop')}><text x="${x + 75}" y="188" text-anchor="middle" font-size="22">${emo}</text>${CT(x + 75, 204, L("a l'examen…", 'en el examen…'), 10, '#56628A', 700)}</g>`;
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${box(96, 4, 128, 30, '#0E1332', '', 15)}${CT(160, 24, L('📚 Tinc deures', '📚 Tengo deberes'), 12, '#fff')}</g>
        <g ${tA(.3, 'ta-fade')}>${arrow(130, 36, 90, 50, '#C98A8A')}${arrow(190, 36, 230, 50, '#7FC79E')}</g>` +
        col(4, L('📋 COPIADORA', '📋 COPIADORA'), A, '#B91C1C', '#FFF4F4', '#F8C9C9', '😰', .5) + col(166, L('🧑‍🏫 TUTORA', '🧑‍🏫 TUTORA'), B, '#15803D', '#EEFBF3', '#B9EBD2', '😎', 1.5));
    },
    // recordar sense mirar costa més… i per això queda: rellegir o fer-se preguntes
    i34brain() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 6, 312, 96, '#F5F8FF', '#DCE4FA')}<text x="30" y="58" text-anchor="middle" font-size="26">📖</text>
          <text x="56" y="44" ${F(13)}>${L('Rellegir els apunts', 'Releer los apuntes')}</text><text x="56" y="64" ${F(10.5, '#56628A', 700)}>${L('sembla fàcil', 'parece fácil')}</text></g>
        <g ${tA(.9, 'ta-fade')}><path d="M190 56 C206 50 214 66 230 58" stroke="#C9D3F2" stroke-width="2" fill="none" stroke-dasharray="3 5"/></g>
        <g ${tA(1.3, 'ta-pop')}><text x="272" y="62" text-anchor="middle" font-size="26">😕</text>${CT(272, 88, L('al cap de dies…', 'a los días…'), 10, '#56628A', 700)}</g>
        <g ${tA(1.8, 'ta-in')}>${box(4, 112, 312, 96, '#F3F0FF', '#D8CCFF')}<text x="30" y="166" text-anchor="middle" font-size="26">❓</text>
          <text x="56" y="150" ${F(13)}>${L("Fer-se preguntes", 'Hacerse preguntas')}</text><text x="56" y="170" ${F(10.5, '#6D28D9', 700)}>${L('costa més… i queda', 'cuesta más… y queda')}</text></g>
        <g ${tA(2.5, 'ta-fade')}><path d="M190 162 C206 154 214 172 230 164" stroke="#7C3AED" stroke-width="6" fill="none" stroke-linecap="round"/></g>
        <g ${tA(2.9, 'ta-pop')}><text x="272" y="168" text-anchor="middle" font-size="26">😃</text>${CT(272, 194, L('ho recordes', 'lo recuerdas'), 10, '#6D28D9', 800)}</g>`);
    },
    // la rutina d'estudi amb IA: un cicle de cinc passos
    i34loop() {
      const N = [['✍️', L('Prova-ho tu', 'Inténtalo'), '#8B5CF6'], ['💡', L('Demana pista', 'Pide pista'), '#F08A24'], ['❓', L('Respon', 'Responde'), '#14A3B8'], ['🔎', L('Comprova', 'Comprueba'), '#3CC47C'], ['🗣️', L('Explica-ho', 'Explícalo'), '#E5489A']];
      return tSvg(214, `<ellipse cx="160" cy="98" rx="112" ry="70" fill="none" stroke="#C4B5FD" stroke-width="3" stroke-dasharray="8 8" class="ta-dash"/>
        <g ${tA(.2, 'ta-pop')}><text x="160" y="112" text-anchor="middle" font-size="28">🧠</text></g>
        ${N.map(([e, t, c], i) => { const a = (-90 + i * 72) * Math.PI / 180, x = 160 + 112 * Math.cos(a), y = 98 + 70 * Math.sin(a);
          return `<g ${tA(.4 + i * .45, 'ta-pop')}><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="20" fill="${c}"/><text x="${x.toFixed(1)}" y="${(y + 7).toFixed(1)}" text-anchor="middle" font-size="17">${e}</text>
            <text x="${x.toFixed(1)}" y="${(y + 36).toFixed(1)}" text-anchor="middle" ${F(11, c, 900)}>${i + 1}. ${t}</text></g>`; }).join('')}`);
    },
    // les normes: segueix les del centre, declara-ho i la feina final és teva
    i34rules() {
      const R = [[1, L('Segueix les normes del centre', 'Sigue las normas del centro')], [1, L('Declara quan fas servir IA', 'Declara cuándo usas IA')], [1, L('La feina final és teva', 'El trabajo final es tuyo')], [0, L('Text de la IA com si fos teu', 'Texto de la IA como si fuera tuyo')]];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(28, 4, 264, 206, '#fff', '#DCE4FA', 16)}${CT(160, 30, L('📜 Normes de la classe', '📜 Normas de la clase'), 13.5)}</g>
        ${R.map(([g, t], i) => `<g ${tA(.5 + i * .4, 'ta-in')}>${g ? ok(52, 54 + i * 26, 9) : ko(52, 54 + i * 26, 9)}<text x="68" y="${59 + i * 26}" ${F(11, '#14204A', 700)}>${t}</text></g>`).join('')}
        <g ${tA(2.4, 'ta-pop')}>${box(44, 160, 232, 42, '#F3F0FF', '#D8CCFF', 10)}<text x="56" y="178" ${F(10.5, '#6D28D9', 800)}>🏷️ ${L('Nota: he fet servir IA per', 'Nota: he usado IA para')}</text><text x="56" y="194" ${F(10.5, '#6D28D9', 800)}>${L('fer-me preguntes de repàs.', 'hacerme preguntas de repaso.')}</text></g>`);
    },
    // abans de fer servir una app d'IA real: edat, permís, privadesa i normes
    i34age() {
      const T = [['🎂', L('Edat', 'Edad'), L('mínima', 'mínima'), '#8B5CF6', '#F3F0FF'], ['👪', L('Permís', 'Permiso'), L('de la família', 'de la familia'), '#14A3B8', '#E9FAFD'], ['🔒', L('Cap dada', 'Ningún dato'), L('personal', 'personal'), '#3CC47C', '#EEFBF3'], ['🏫', L('Normes', 'Normas'), L('del centre', 'del centro'), '#F08A24', '#FFF4E8']];
      return tSvg(214, T.map(([e, a, b, c, bg], i) => { const x = 6 + (i % 2) * 156, y = 6 + Math.floor(i / 2) * 104; return `<g ${tA(.3 + i * .6, 'ta-pop')}>${box(x, y, 152, 98, bg, c + '55', 16)}<text x="${x + 28}" y="${y + 58}" text-anchor="middle" font-size="26">${e}</text>
          <text x="${x + 52}" y="${y + 46}" ${F(12.5)}>${a}</text><text x="${x + 52}" y="${y + 66}" ${F(12, c, 900)}>${b}</text>${ok(x + 136, y + 16, 9, c)}</g>`; }).join(''));
    },

    // taller i3-5: el mateix encàrrec amb un prompt pobre i amb un de bo (les sis peces de la rúbrica) al xat de veritat
    i35pair() {
      const C = ['#8B5CF6', '#14A3B8', '#F08A24', '#3CC47C', '#E5489A', '#3B82F6'];
      const dots = (cx, on, t0) => C.map((c, i) => `<circle cx="${cx - 47.5 + i * 19}" cy="92" r="6.5" fill="${on ? c : '#E3E8F7'}" ${tA(t0 + i * .12, 'ta-pop')}/>`).join('');
      const grey = [112, 96, 120, 88, 116, 104].map((w, i) => `<rect x="16" y="${122 + i * 9}" width="${w}" height="5" rx="2.5" fill="#E3B4B4"/>`).join('');
      const pts = [96, 110, 86, 102].map((w, i) => `<circle cx="180" cy="${126 + i * 12}" r="4" fill="${C[i]}"/><rect x="190" y="${123 + i * 12}" width="${w}" height="6" rx="3" fill="#9ED9B8"/>`).join('');
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(4, 4, 152, 206, '#FFF4F4', '#F8C9C9')}${CT(80, 22, L('PROMPT POBRE', 'PROMPT POBRE'), 11, '#B91C1C', 900)}${box(14, 30, 132, 46, '#fff', '#DCE4FA', 12)}${CT(80, 58, L('«volcans»', '«volcanes»'), 13, '#14204A', 800)}</g>
        ${dots(80, false, .4)}<text x="80" y="113" text-anchor="middle" ${F(10.5, '#B91C1C', 800)} ${tA(.9, 'ta-fade')}>${L('peces: 0 de 6', 'piezas: 0 de 6')}</text>
        <g ${tA(1.1, 'ta-fade')}>${grey}</g>
        <g ${tA(1.4, 'ta-pop')}>${ko(26, 191, 9)}<text x="42" y="188" ${F(11, '#B91C1C', 900)}>${L('llarg i genèric', 'largo y genérico')}</text><text x="42" y="203" ${F(10.5, '#56628A', 800)}>⭐ 3/10</text></g>
        <g ${tA(1.7, 'ta-in')}>${box(164, 4, 152, 206, '#EEFBF3', '#B9EBD2')}${CT(240, 22, L('PROMPT BO', 'PROMPT BUENO'), 11, '#15803D', 900)}${box(170, 30, 140, 46, '#fff', '#DCE4FA', 12)}
          <text x="178" y="45" ${M(9)}>${L("2n d'ESO. Explica'm", '2.º ESO. Explícame')}</text><text x="178" y="58" ${M(9)}>${L('com es forma un volcà,', 'cómo se forma un volcán,')}</text><text x="178" y="71" ${M(9)}>${L('4 punts, 1 exemple…', '4 puntos, 1 ejemplo…')}</text></g>
        ${dots(240, true, 2)}<text x="240" y="113" text-anchor="middle" ${F(10.5, '#15803D', 800)} ${tA(2.7, 'ta-fade')}>${L('peces: 6 de 6', 'piezas: 6 de 6')}</text>
        <g ${tA(2.9, 'ta-fade')}>${pts}</g>
        <g ${tA(3.2, 'ta-pop')}>${ok(186, 191, 9)}<text x="202" y="188" ${F(11, '#15803D', 900)}>${L('curt i clar', 'corto y claro')}</text><text x="202" y="203" ${F(10.5, '#56628A', 800)}>⭐ 8/10</text></g>`);
    },
    // taller i3-5: la pregunta trampa: una festa que no existeix → o diu que no ho sap (bé) o s'inventa detalls (al·lucinació)
    i35trap() {
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(4, 4, 312, 50, '#0E1332', '', 14)}<text x="16" y="22" ${F(10, '#9AA6CC', 700)}>🧪 ${L('pregunta sobre una cosa que NO existeix:', 'pregunta sobre algo que NO existe:')}</text>
          <text x="16" y="42" ${M(10.5, '#fff')}>${L('«Festa del Paraigua Volador de Vilanúvol»', '«Fiesta del Paraguas Volador de Villanube»')}</text></g>
        <g ${tA(.7, 'ta-fade')}>${arrow(120, 58, 86, 76, '#86D3A5')}${arrow(200, 58, 234, 76, '#EF9A9A')}</g>
        <g ${tA(1, 'ta-in')}>${box(4, 80, 152, 94, '#EEFBF3', '#B9EBD2')}${ok(22, 98, 9)}<text x="38" y="102" ${F(11, '#15803D', 900)}>${L('Diu «no ho sé»', 'Dice «no lo sé»')}</text>
          <text x="14" y="126" ${M(10)}>${L('«No he trobat cap', '«No he encontrado')}</text><text x="14" y="141" ${M(10)}>${L('informació sobre', 'información sobre')}</text><text x="14" y="156" ${M(10)}>${L('aquesta festa.»', 'esta fiesta.»')}</text></g>
        <g ${tA(1.8, 'ta-in')}>${box(164, 80, 152, 94, '#FFF1F1', '#F8B4B4')}<text x="174" y="103" font-size="13">🚩</text><text x="192" y="102" ${F(11, '#B91C1C', 900)}>${L("S'inventa dades", 'Se inventa datos')}</text>
          <text x="174" y="126" ${M(10)}>${L('«Va començar el 1887', '«Empezó en 1887')}</text><text x="174" y="141" ${M(10)}>${L('i cada maig…»', 'y cada mayo…»')}</text></g>
        <g ${tA(2.5, 'ta-wob')}><rect x="202" y="148" width="76" height="20" rx="5" fill="#fff" stroke="#EF4444" stroke-width="2.5" transform="rotate(-6 240 158)"/><text x="240" y="163" text-anchor="middle" ${F(11, '#EF4444', 900)} transform="rotate(-6 240 158)">${L('INVENTAT', 'INVENTADO')}</text></g>
        <g ${tA(3.1, 'ta-pop')}>${box(20, 182, 280, 28, '#7C3AED', '', 14)}${CT(160, 201, L('Si no existeix, cada detall és inventat', 'Si no existe, cada detalle es inventado'), 11, '#fff')}</g>`);
    },
    // taller i3-5: el xat com a tutor: pregunta i pista; l'alumne/a resol i ho comprova
    i35tutor() {
      const B = [['me', L('Fes de tutor: no em donis la solució', 'Haz de tutor: no me des la solución')], ['ai', L('Si en Pau en té x, quants en té la Laia?', 'Si Pau tiene x, ¿cuántos tiene Laia?')], ['me', '3x'],
        ['ai', L('Molt bé! I entre tots dos, quants?', '¡Muy bien! ¿Y entre los dos, cuántos?')], ['me', 'x + 3x = 48 → x = 12'], ['ok', L('Comprova-ho: 12 + 36 = 48 ✓', 'Compruébalo: 12 + 36 = 48 ✓')]];
      return tSvg(214, B.map(([w, t], i) => { const y = 4 + i * 30, me = w === 'me', wd = Math.min(282, Math.round(t.length * 6 + 26)), x = me ? 316 - wd : 30;
        return `<g ${tA(.2 + i * .5, 'ta-in')}>${me ? '' : `<text x="15" y="${y + 18}" text-anchor="middle" font-size="15">${w === 'ok' ? '✅' : '🧑‍🏫'}</text>`}${box(x, y, wd, 24, me ? '#7C3AED' : w === 'ok' ? '#DFF7E8' : '#fff', me ? '' : w === 'ok' ? '#86D9A9' : '#DCE4FA', 12)}<text x="${x + 13}" y="${y + 16}" ${F(10.5, me ? '#fff' : w === 'ok' ? '#15803D' : '#14204A', 800)}>${t}</text></g>`; }).join('') +
        `<g ${tA(3.4, 'ta-pop')}>${CT(160, 206, L('Pistes i preguntes: qui pensa ets tu', 'Pistas y preguntas: quien piensa eres tú'), 11, '#7C3AED', 900)}</g>`);
    }
  });
}
