/* Tech IA · unitat 7 · animacions de teoria (TANI). Dibuixos propis de Numi: una feina és un paquet de tasques, exposat no
   vol dir substituït, feines que canvien i que neixen, habilitats que compten i titulars sense bombo (i7-1); el viatge d'una
   pregunta fins al centre de dades, entrenar i fer servir, l'aigua de refrigeració, les dades de l'AIE i la IA que ajuda el
   planeta (i7-2); dades i perfils, l'empremta d'una cara, verificar o identificar, la piràmide de riscos de la llei europea
   d'IA i els drets (i7-3); i l'assemblea: la moció, l'argument, les trampes, els rols i el posicionament (i7-4). */
{
  const F = (sz, c = '#14204A', w = 800) => `style="font:${w} ${sz}px Lexend,system-ui,sans-serif;fill:${c}"`;
  const box = (x, y, w, h, fill, stroke, r = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="2"` : ''}/>`;
  const arrow = (x1, y1, x2, y2, c = '#8B9BE0') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><path d="M${x2} ${y2} l-7 -4 m7 4 l-7 4" stroke="${c}" stroke-width="2.5" stroke-linecap="round" fill="none" transform="rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI).toFixed(0)} ${x2} ${y2})"/>`;
  const ok = (cx, cy, r = 10, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><path d="M${cx - r / 2} ${cy}l${(r * .35).toFixed(1)} ${(r * .35).toFixed(1)} ${(r * .6).toFixed(1)} -${(r * .65).toFixed(1)}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const ko = (cx, cy, r = 10) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#EF5A5A"/><path d="M${cx - r * .4} ${cy - r * .4}l${r * .8} ${r * .8}m0 -${r * .8}l-${r * .8} ${r * .8}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`;
  const CT = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" text-anchor="middle" ${F(sz, c, w)}>${t}</text>`;
  const TX = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" ${F(sz, c, w)}>${t}</text>`;
  const E = (x, y, e, sz = 18) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${sz}">${e}</text>`;
  // una pastilla amb text (etiqueta de color)
  const pill = (x, y, w, t, c, t0, cls = 'ta-pop', sz = 10.5) => `<g ${tA(t0, cls)}>${box(x, y, w, 24, c + '1F', c + '99', 12)}${CT(x + w / 2, y + 16, t, sz, c, 900)}</g>`;

  Object.assign(TANI, {
    /* ---------- i7-1 · La IA i la feina ---------- */
    // una feina (periodista) es desmunta en tasques: unes les fa la IA, d'altres hi ajuda, d'altres són humanes
    i71tasks() {
      const T = [[L('Buscar dades', 'Buscar datos'), 0], [L('Primer esborrany', 'Primer borrador'), 0], [L('Entrevistar', 'Entrevistar'), 2], [L('Comprovar fonts', 'Comprobar fuentes'), 1], [L('Decidir què es publica', 'Decidir qué se publica'), 2]];
      const C = [['#7C3AED', '🤖'], ['#D97706', '🤝'], ['#0E9F6E', '🧑']];
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${box(8, 8, 104, 198, '#14204A', '', 16)}${E(60, 62, '📰', 34)}${CT(60, 96, L('PERIODISTA', 'PERIODISTA'), 11, '#FDE68A', 900)}${CT(60, 114, L('una feina =', 'un trabajo ='), 10, '#C4B5FD', 700)}${CT(60, 128, L('5 tasques', '5 tareas'), 10, '#C4B5FD', 700)}</g>
        ${T.map(([t, c], i) => `<g ${tA(.5 + i * .35, 'ta-in')}>${arrow(114, 106, 128, 28 + i * 39, '#B4BEE8')}${box(130, 12 + i * 39, 182, 32, C[c][0] + '14', C[c][0] + '88', 10)}${E(148, 34 + i * 39, C[c][1], 15)}${TX(164, 33 + i * 39, t, 10.5, '#14204A', 800)}</g>`).join('')}`);
    },
    // de 100 feines: unes 25 amb tasques exposades, i poques (≈3) amb gairebé totes les tasques exposades
    i71expo() {
      const dots = Array.from({ length: 100 }, (_, i) => { const x = 22 + (i % 20) * 14, y = 22 + Math.floor(i / 20) * 14, c = i < 3 ? '#DC2626' : i < 25 ? '#F59E0B' : '#CBD5E1'; return `<circle cx="${x}" cy="${y}" r="5" fill="${c}"/>`; }).join('');
      return tSvg(214, `<g ${tA(.1, 'ta-fade')}>${box(8, 8, 304, 82, '#F8FAFF', '#DCE4FA', 14)}${dots}</g>
        <g ${tA(.8, 'ta-in')}>${box(8, 100, 304, 32, '#FFFBEB', '#FDE68A', 10)}<circle cx="26" cy="116" r="6" fill="#F59E0B"/>${TX(40, 120, L('≈ 1 de cada 4: tasques exposades', '≈ 1 de cada 4: tareas expuestas'), 11, '#92400E', 900)}</g>
        <g ${tA(1.5, 'ta-in')}>${box(8, 138, 304, 32, '#FFF4F4', '#F8C9C9', 10)}<circle cx="26" cy="154" r="6" fill="#DC2626"/>${TX(40, 158, L('≈ 3 %: gairebé totes les tasques', '≈ 3 %: casi todas las tareas'), 11, '#B91C1C', 900)}</g>
        <g ${tA(2.2, 'ta-pop')}>${box(40, 178, 240, 30, '#0E9F6E', '', 12)}${CT(160, 198, L('➜ el més probable: es transformen', '➜ lo más probable: se transforman'), 11, '#fff', 900)}</g>`);
    },
    // feines que canvien, que s'encongeixen i que neixen (amb dos exemples del passat)
    i71new() {
      const R = [['🔄', L('Canvien', 'Cambian'), L('comptable + full de càlcul', 'contable + hoja de cálculo'), '#2563EB'], ['📉', L("S'encongeixen", 'Se encogen'), L('tasques repetitives de text', 'tareas repetitivas de texto'), '#D97706'], ['🌱', L('Neixen', 'Nacen'), L('avaluar models, revisar riscos', 'evaluar modelos, revisar riesgos'), '#0E9F6E']];
      return tSvg(214, `${R.map(([e, t, x, c], i) => `<g ${tA(.2 + i * .6, 'ta-in')}>${box(8, 10 + i * 66, 304, 58, c + '12', c + '77', 14)}${E(36, 46 + i * 66, e, 24)}${TX(62, 34 + i * 66, t, 13, c, 900)}${TX(62, 54 + i * 66, x, 10.5, '#14204A', 700)}</g>`).join('')}`);
    },
    // les habilitats que compten: una constel·lació al voltant de la persona
    i71skills() {
      const S = [['🔎', L('Comprovar', 'Comprobar'), 70, 30], ['💬', L('Comunicar', 'Comunicar'), 250, 30], ['🎨', L('Crear', 'Crear'), 38, 100], ['🤝', L('Cuidar', 'Cuidar'), 282, 100], ['🧩', L('Entendre', 'Entender'), 82, 164], ['📚', L('Aprendre', 'Aprender'), 238, 164]];
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}><circle cx="160" cy="100" r="38" fill="#14204A"/>${E(160, 100, '🧑', 26)}${CT(160, 122, L('tu', 'tú'), 11, '#FDE68A', 900)}</g>
        ${S.map(([e, t, x, y], i) => `<g ${tA(.5 + i * .3, 'ta-fade')}><line x1="160" y1="100" x2="${x}" y2="${y}" stroke="#D8CCFF" stroke-width="2" stroke-dasharray="4 4"/></g><g ${tA(.6 + i * .3, 'ta-pop')}><circle cx="${x}" cy="${y}" r="22" fill="#F3F0FF" stroke="#A78BFA" stroke-width="2"/>${E(x, y + 2, e, 16)}${CT(x, y + 36, t, 10.5, '#6D28D9', 900)}</g>`).join('')}`);
    },
    // dos titulars extrems i les quatre preguntes que els posen a prova
    i71hype() {
      const Q = [L('Qui ho diu?', '¿Quién lo dice?'), L('Amb quines dades?', '¿Con qué datos?'), L('Tasques o feines?', '¿Tareas o trabajos?'), L('En quant de temps?', '¿En cuánto tiempo?')];
      return tSvg(214, `<g ${tA(.1, 'ta-wob')}>${box(8, 8, 148, 52, '#FFF4F4', '#F8C9C9', 12)}${CT(82, 30, L('😱 «Ens prendrà', '😱 «Nos quitará'), 10.5, '#B91C1C', 900)}${CT(82, 47, L('totes les feines!»', 'todos los trabajos!»'), 10.5, '#B91C1C', 900)}</g>
        <g ${tA(.4, 'ta-wob')}>${box(164, 8, 148, 52, '#EEF3FF', '#C7D2FE', 12)}${CT(238, 30, L('😎 «No canviarà', '😎 «No cambiará'), 10.5, '#1D4ED8', 900)}${CT(238, 47, L('res de res!»', 'nada de nada!»'), 10.5, '#1D4ED8', 900)}</g>
        <g ${tA(.9, 'ta-pop')}>${E(160, 88, '🔍', 22)}</g>
        ${Q.map((q, i) => `<g ${tA(1.2 + i * .35, 'ta-in')}>${box(8 + (i % 2) * 156, 102 + Math.floor(i / 2) * 54, 148, 44, '#fff', '#DCE4FA', 12)}<circle cx="${30 + (i % 2) * 156}" cy="${124 + Math.floor(i / 2) * 54}" r="10" fill="#7C3AED"/>${CT(30 + (i % 2) * 156, 128 + Math.floor(i / 2) * 54, i + 1, 11, '#fff', 900)}${TX(46 + (i % 2) * 156, 128 + Math.floor(i / 2) * 54, q, 10.5, '#14204A', 800)}</g>`).join('')}`);
    },

    /* ---------- i7-2 · Energia, aigua i planeta ---------- */
    // la pregunta viatja del mòbil al centre de dades i torna
    i72trip() {
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${box(14, 64, 52, 90, '#14204A', '', 12)}${box(20, 74, 40, 64, '#EEF3FF', '', 6)}${E(40, 112, '💬', 18)}${CT(40, 172, L('el teu mòbil', 'tu móvil'), 10, '#56628A', 800)}</g>
        <g ${tA(.5, 'ta-fade')}><path d="M70 96 C120 60 180 60 222 92" stroke="#7C3AED" stroke-width="3" fill="none" stroke-dasharray="6 6" class="ta-dash"/>${CT(146, 62, L('pregunta ➜', 'pregunta ➜'), 10, '#7C3AED', 900)}</g>
        <g ${tA(1.6, 'ta-fade')}><path d="M222 128 C180 162 120 162 70 126" stroke="#0E9F6E" stroke-width="3" fill="none" stroke-dasharray="6 6" class="ta-dash"/>${CT(146, 172, L('⬅ resposta', '⬅ respuesta'), 10, '#0E9F6E', 900)}</g>
        <g ${tA(.9, 'ta-pop')}>${box(226, 48, 86, 118, '#1E293B', '', 10)}${[0, 1, 2, 3].map(i => `${box(234, 58 + i * 26, 70, 18, '#334155', '', 4)}<circle cx="244" cy="${67 + i * 26}" r="3" fill="#3CC47C"/><circle cx="254" cy="${67 + i * 26}" r="3" fill="#FBBF24"/>`).join('')}${CT(269, 182, L('centre de dades', 'centro de datos'), 10, '#56628A', 800)}</g>
        <g ${tA(1.2, 'ta-pop')}>${E(292, 40, '⚡', 20)}</g><g ${tA(1.4, 'ta-pop')}>${E(240, 40, '💧', 18)}</g>
        <g ${tA(2.2, 'ta-in')}>${box(70, 192, 180, 20, '#FFFBEB', '', 8)}${CT(160, 206, L('el «núvol» és un edifici', 'la «nube» es un edificio'), 10, '#92400E', 900)}</g>`);
    },
    // entrenar (una vegada, molt) i fer servir (poc cada vegada, però milions de vegades)
    i72train() {
      const bat = (x, y, n, c) => Array.from({ length: n }, (_, i) => `<rect x="${x + i * 12}" y="${y}" width="9" height="16" rx="2" fill="${c}"/>`).join('');
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(8, 8, 304, 92, '#F3F0FF', '#D8CCFF', 14)}${TX(22, 30, L('🏋️ ENTRENAR', '🏋️ ENTRENAR'), 12, '#6D28D9', 900)}${TX(22, 48, L('milers de xips durant setmanes', 'miles de chips durante semanas'), 10.5, '#14204A', 700)}${bat(22, 62, 20, '#7C3AED')}${TX(22, 94, L('poques vegades, però molt', 'pocas veces, pero mucho'), 9.5, '#56628A', 700)}</g>
        <g ${tA(1, 'ta-in')}>${box(8, 108, 304, 98, '#EEFBF3', '#B9EBD2', 14)}${TX(22, 130, L('💬 FER-LO SERVIR', '💬 USARLO'), 12, '#0E9F6E', 900)}${TX(22, 148, L('cada pregunta, cada imatge…', 'cada pregunta, cada imagen…'), 10.5, '#14204A', 700)}${bat(22, 158, 1, '#0E9F6E')}${TX(40, 171, '×', 12, '#0E9F6E', 900)}</g>
        <g ${tA(1.6, 'ta-pop')}>${TX(54, 172, L('milions de vegades al dia', 'millones de veces al día'), 11, '#0E9F6E', 900)}</g>
        <g ${tA(2.2, 'ta-pop')}>${box(178, 182, 128, 20, '#FFF4F4', '', 8)}${CT(242, 196, L('🖼️ 🎬 gasten més', '🖼️ 🎬 gastan más'), 10, '#B91C1C', 900)}</g>`);
    },
    // els xips s'escalfen, l'aigua refreda i una part s'evapora
    i72water() {
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${box(14, 70, 110, 100, '#1E293B', '', 12)}${[0, 1, 2].map(i => `${box(24, 82 + i * 28, 90, 20, '#334155', '', 4)}`).join('')}${CT(69, 186, L('xips calents 🔥', 'chips calientes 🔥'), 10.5, '#B91C1C', 900)}</g>
        <g ${tA(.6, 'ta-fade')}><path d="M126 100 H170" stroke="#EF5A5A" stroke-width="5" stroke-linecap="round"/><path d="M170 146 H126" stroke="#38BDF8" stroke-width="5" stroke-linecap="round"/>${CT(148, 92, L('calenta', 'caliente'), 9, '#B91C1C', 800)}${CT(148, 162, L('freda', 'fría'), 9, '#0369A1', 800)}</g>
        <g ${tA(1, 'ta-pop')}><path d="M180 176 L196 76 H276 L292 176 Z" fill="#E0F2FE" stroke="#7DD3FC" stroke-width="2"/>${CT(236, 132, L('torre de', 'torre de'), 10, '#0369A1', 900)}${CT(236, 146, L('refrigeració', 'refrigeración'), 10, '#0369A1', 900)}</g>
        <g class="ta-steam">${[206, 236, 266].map((x, i) => `<g ${tA(1.4 + i * .2, 'ta-fade')}><path d="M${x} 70 q-8 -12 0 -24 q8 -12 0 -24" stroke="#94A3B8" stroke-width="3" fill="none" stroke-linecap="round"/></g>`).join('')}</g>
        <g ${tA(2, 'ta-pop')}>${box(168, 4, 146, 22, '#F1F5F9', '', 8)}${CT(241, 19, L('💨 una part s\'evapora', '💨 una parte se evapora'), 10, '#475569', 900)}</g>
        <g ${tA(2.4, 'ta-in')}>${box(14, 8, 140, 50, '#FFFBEB', '#FDE68A', 12)}${CT(84, 28, L('quanta aigua?', '¿cuánta agua?'), 11, '#92400E', 900)}${CT(84, 46, L('depèn del lloc i la tecnologia', 'depende del lugar y la tecnología'), 8.5, '#92400E', 700)}</g>`);
    },
    // les dades de l'AIE: 2024 ≈ 1,5 % de l'electricitat mundial; el 2030, més del doble
    i72chart() {
      return tSvg(214, `<g ${tA(.1, 'ta-fade')}><line x1="40" y1="170" x2="300" y2="170" stroke="#CBD5E1" stroke-width="2"/>${TX(8, 20, L("Electricitat dels centres de dades", 'Electricidad de los centros de datos'), 11, '#14204A', 900)}</g>
        <g ${tA(.5, 'ta-raise')}><rect x="80" y="110" width="60" height="60" rx="6" fill="#A78BFA"/></g>
        <g ${tA(.9, 'ta-pop')}>${CT(110, 102, '≈ 1,5 %', 13, '#6D28D9', 900)}${CT(110, 188, '2024', 11, '#14204A', 900)}${CT(110, 202, L('del món', 'del mundo'), 9, '#56628A', 700)}</g>
        <g ${tA(1.5, 'ta-raise')}><rect x="200" y="40" width="60" height="130" rx="6" fill="#7C3AED"/></g>
        <g ${tA(1.9, 'ta-pop')}>${CT(230, 34, L('× 2 o més', '× 2 o más'), 13, '#6D28D9', 900)}${CT(230, 188, L('2030 (previsió)', '2030 (previsión)'), 11, '#14204A', 900)}</g>
        <g ${tA(2.4, 'ta-in')}>${box(8, 40, 150, 40, '#F8FAFF', '#DCE4FA', 10)}${TX(16, 56, L("Font: Agència Int.", 'Fuente: Agencia Int.'), 9.5, '#56628A', 800)}${TX(16, 71, L("de l'Energia (2025)", 'de la Energía (2025)'), 9.5, '#56628A', 800)}</g>`);
    },
    // usos de la IA que ajuden el planeta
    i72help() {
      const H = [['🌦️', L('Predir el temps', 'Predecir el tiempo'), L('i les onades de calor', 'y las olas de calor')], ['⚡', L('Xarxa elèctrica', 'Red eléctrica'), L('més sol i vent', 'más sol y viento')], ['🛰️', L('Satèl·lits', 'Satélites'), L('boscos i fuites', 'bosques y fugas')], ['🏫', L('Edificis', 'Edificios'), L('menys calefacció', 'menos calefacción')]];
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}><circle cx="160" cy="107" r="34" fill="#0E9F6E"/>${E(160, 116, '🌍', 30)}</g>
        ${H.map(([e, t, x], i) => { const X = i % 2 ? 176 : 8, Y = i < 2 ? 8 : 148; return `<g ${tA(.5 + i * .4, 'ta-in')}>${box(X, Y, 136, 58, '#EEFBF3', '#B9EBD2', 12)}${E(X + 22, Y + 36, e, 20)}${TX(X + 40, Y + 26, t, 10.5, '#0E7A55', 900)}${TX(X + 40, Y + 42, x, 9.5, '#14204A', 700)}</g>`; }).join('')}
        <g ${tA(2.4, 'ta-fade')}>${CT(80, 116, L('IA ➜', 'IA ➜'), 12, '#0E9F6E', 900)}${CT(240, 116, L('➜ menys CO₂', '➜ menos CO₂'), 11, '#0E9F6E', 900)}</g>`);
    },

    /* ---------- i7-3 · Privadesa, vigilància i drets ---------- */
    // el que fas a internet es converteix en dades… i les dades, en un perfil
    i73data() {
      const D = [['📸', L('fotos', 'fotos')], ['🔍', L('cerques', 'búsquedas')], ['📍', L('on vas', 'adónde vas')], ['🎙️', L('veu', 'voz')], ['❤️', L('m\'agrada', 'me gusta')]];
      return tSvg(214, `${D.map(([e, t], i) => `<g ${tA(.1 + i * .25, 'ta-in')}>${box(8, 8 + i * 40, 92, 32, '#fff', '#DCE4FA', 10)}${E(26, 30 + i * 40, e, 15)}${TX(42, 29 + i * 40, t, 10.5, '#14204A', 800)}</g><g ${tA(.3 + i * .25, 'ta-fade')}>${arrow(104, 24 + i * 40, 138, 104, '#C4B5FD')}</g>`).join('')}
        <g ${tA(1.5, 'ta-pop')}><circle cx="166" cy="106" r="26" fill="#7C3AED"/>${E(166, 114, '🧠', 22)}</g>
        <g ${tA(2, 'ta-in')}>${arrow(194, 106, 210, 106, '#7C3AED')}${box(214, 40, 98, 132, '#F3F0FF', '#D8CCFF', 12)}${CT(263, 60, L('PERFIL', 'PERFIL'), 11, '#6D28D9', 900)}${TX(224, 82, L('• li agrada…', '• le gusta…'), 10, '#14204A', 700)}${TX(224, 102, L('• comprarà…', '• comprará…'), 10, '#14204A', 700)}${TX(224, 122, L('• se sent…', '• se siente…'), 10, '#14204A', 700)}${TX(224, 142, L('• viu a…', '• vive en…'), 10, '#14204A', 700)}</g>
        <g ${tA(2.6, 'ta-pop')}>${box(124, 184, 188, 24, '#FFFBEB', '#FDE68A', 10)}${CT(218, 200, L('dona només les dades que calen', 'da solo los datos necesarios'), 9.5, '#92400E', 900)}</g>`);
    },
    // una cara es converteix en una llista de números i es compara amb una base de dades
    i73face() {
      const P = [[52, 66], [88, 66], [70, 90], [56, 112], [84, 112], [70, 44], [44, 92], [96, 92]];
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}><ellipse cx="70" cy="90" rx="44" ry="56" fill="#FDE2C6" stroke="#E7B98F" stroke-width="2"/><circle cx="54" cy="78" r="4" fill="#14204A"/><circle cx="86" cy="78" r="4" fill="#14204A"/><path d="M58 116 Q70 124 82 116" stroke="#14204A" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
        <g ${tA(.7, 'ta-fade')}>${P.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="#7C3AED"/>`).join('')}<path d="${P.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ')}" stroke="#A78BFA" stroke-width="1.2" fill="none"/></g>
        <g ${tA(1.2, 'ta-in')}>${arrow(120, 90, 142, 90, '#7C3AED')}${box(146, 66, 72, 48, '#14204A', '', 10)}<text x="182" y="86" text-anchor="middle" style="font:700 9.5px ui-monospace,Menlo,monospace;fill:#C4B5FD">0,12 0,87</text><text x="182" y="102" text-anchor="middle" style="font:700 9.5px ui-monospace,Menlo,monospace;fill:#C4B5FD">0,45 0,31…</text></g>
        <g ${tA(1.8, 'ta-in')}>${arrow(220, 90, 236, 90, '#7C3AED')}${[0, 1, 2].map(i => `${box(240, 34 + i * 40, 72, 34, i === 1 ? '#EEFBF3' : '#fff', i === 1 ? '#3CC47C' : '#DCE4FA', 8)}${E(258, 57 + i * 40, ['🙂', '😀', '🙃'][i], 15)}${TX(272, 56 + i * 40, ['41 %', '93 %', '28 %'][i], 10.5, i === 1 ? '#15803D' : '#56628A', 900)}`).join('')}</g>
        <g ${tA(2.5, 'ta-pop')}>${box(8, 164, 304, 42, '#FFF4F4', '#F8C9C9', 12)}${CT(160, 182, L('⚠️ pot equivocar-se, i més amb els grups', '⚠️ puede equivocarse, y más con los grupos'), 10, '#B91C1C', 900)}${CT(160, 198, L('que hi havia poc a les dades', 'que había poco en los datos'), 10, '#B91C1C', 900)}</g>`);
    },
    // verificar (1 a 1, ho tries tu) o identificar (1 entre milers, sense saber-ho)
    i73surv() {
      const crowd = Array.from({ length: 15 }, (_, i) => E(190 + (i % 5) * 26, 112 + Math.floor(i / 5) * 26, ['🙂', '😐', '🙂', '😮', '🙂'][i % 5], 15)).join('');
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(8, 8, 140, 198, '#EEFBF3', '#B9EBD2', 14)}${CT(78, 30, L('DESBLOQUEJAR', 'DESBLOQUEAR'), 10.5, '#0E7A55', 900)}${box(52, 46, 52, 88, '#14204A', '', 10)}${E(78, 98, '🙂', 26)}${CT(78, 156, L('1 a 1: només tu', '1 a 1: solo tú'), 10.5, '#14204A', 800)}${CT(78, 174, L('i ho has triat tu', 'y lo has elegido tú'), 10, '#56628A', 700)}${ok(78, 192, 9)}</g>
        <g ${tA(1, 'ta-in')}>${box(156, 8, 156, 198, '#FFF4F4', '#F8C9C9', 14)}${CT(234, 30, L('IDENTIFICAR', 'IDENTIFICAR'), 10.5, '#B91C1C', 900)}${E(234, 64, '📹', 24)}${crowd}</g>
        <g ${tA(1.6, 'ta-fade')}>${[0, 1, 2, 3, 4].map(i => `<path d="M234 72 L${190 + i * 26} 100" stroke="#EF5A5A" stroke-width="1.2" stroke-dasharray="3 3"/>`).join('')}</g>
        <g ${tA(2.2, 'ta-pop')}>${CT(234, 186, L('1 entre milers,', '1 entre miles,'), 10.5, '#14204A', 800)}${CT(234, 200, L('sense que ho sàpiguen', 'sin que lo sepan'), 10, '#B91C1C', 800)}</g>`);
    },
    // la piràmide de la llei europea d'IA, pis a pis
    i73pyr() {
      const Lv = [[L('PROHIBIT', 'PROHIBIDO'), L('puntuació social, emocions a l\'escola', 'puntuación social, emociones en la escuela'), '#DC2626', '⛔'], [L('ALT RISC', 'ALTO RIESGO'), L('educació, feina, crèdit, salut', 'educación, trabajo, crédito, salud'), '#EA580C', '⚠️'], [L('TRANSPARÈNCIA', 'TRANSPARENCIA'), L('xatbots i deepfakes: avisar', 'chatbots y deepfakes: avisar'), '#2563EB', '🏷️'], [L('MÍNIM', 'MÍNIMO'), L('filtre de brossa, corrector', 'filtro de basura, corrector'), '#16A34A', '🟢']];
      return tSvg(214, `${Lv.map(([t, x, c, e], i) => { const w = 172 + i * 44, X = 160 - w / 2, Y = 8 + i * 51; return `<g ${tA(2.2 - i * .55, 'ta-in')}>${box(X, Y, w, 45, c + '22', c, 8)}${CT(160, Y + 19, `${e} ${t}`, 11, c, 900)}${CT(160, Y + 35, x, i === 0 ? 8.5 : 9, '#14204A', 700)}</g>`; }).join('')}`);
    },
    // els drets sobre les dades: saber, corregir, esborrar, una persona revisa, queixar-se
    i73rights() {
      const R = [['👁️', L('Saber quines dades teves tenen', 'Saber qué datos tuyos tienen'), '#2563EB'], ['✏️', L('Corregir-les', 'Corregirlos'), '#7C3AED'], ['🗑️', L('Esborrar-les', 'Borrarlos'), '#DC2626'], ['🧑‍⚖️', L('Que una persona revisi una decisió', 'Que una persona revise una decisión'), '#D97706'], ['📣', L("Queixar-te a l'autoritat de dades", 'Quejarte a la autoridad de datos'), '#0E9F6E']];
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${box(8, 8, 50, 198, '#14204A', '', 14)}${E(33, 112, '🛡️', 26)}</g>
        ${R.map(([e, t, c], i) => `<g ${tA(.4 + i * .35, 'ta-in')}>${box(66, 8 + i * 40, 246, 34, c + '12', c + '77', 10)}${E(86, 31 + i * 40, e, 15)}${TX(104, 30 + i * 40, t, 10.5, '#14204A', 800)}</g>`).join('')}`);
    },

    /* ---------- i7-4 · L'assemblea «Hauríem de…?» ---------- */
    // d'una pregunta vaga a una bona moció
    i74motion() {
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(8, 10, 304, 50, '#FFF4F4', '#F8C9C9', 14)}${ko(32, 35, 10)}${TX(50, 32, L('«La IA és bona?»', '«¿La IA es buena?»'), 12, '#B91C1C', 900)}${TX(50, 50, L('massa general', 'demasiado general'), 10, '#56628A', 700)}</g>
        <g ${tA(.9, 'ta-pop')}>${E(160, 84, '⬇️', 18)}</g>
        <g ${tA(1.3, 'ta-in')}>${box(8, 100, 304, 64, '#EEFBF3', '#3CC47C', 14)}${ok(32, 132, 10)}${TX(50, 122, L('«Hauríem de permetre la IA', '«¿Deberíamos permitir la IA'), 12, '#0E7A55', 900)}${TX(50, 141, L('per fer els deures?»', 'para hacer los deberes?»'), 12, '#0E7A55', 900)}${TX(50, 157, L('sí o no · una acció · concreta', 'sí o no · una acción · concreta'), 9.5, '#14204A', 700)}</g>
        ${pill(8, 176, 96, L('📹 càmeres', '📹 cámaras'), '#7C3AED', 2)}${pill(112, 176, 96, L('📝 exàmens', '📝 exámenes'), '#2563EB', 2.3)}${pill(216, 176, 96, L('📚 biblioteca', '📚 biblioteca'), '#D97706', 2.6)}`);
    },
    // afirmació + prova (amb font) + per tant
    i74arg() {
      const P = [[L('AFIRMACIÓ', 'AFIRMACIÓN'), L('«La IA pot ajudar a estudiar»', '«La IA puede ayudar a estudiar»'), '#7C3AED', '💬'], [L('PROVA + FONT', 'PRUEBA + FUENTE'), L('un exemple, una dada, una llei', 'un ejemplo, un dato, una ley'), '#2563EB', '📊'], [L('PER TANT', 'POR LO TANTO'), L('«…la permetríem com a tutora»', '«…la permitiríamos como tutora»'), '#0E9F6E', '➡️']];
      return tSvg(214, `${P.map(([t, x, c, e], i) => `<g ${tA(.2 + i * .6, 'ta-in')}>${box(8, 8 + i * 68, 304, 56, c + '14', c + '88', 14)}${E(34, 44 + i * 68, e, 20)}${TX(58, 30 + i * 68, t, 11, c, 900)}${TX(58, 50 + i * 68, x, 10.5, '#14204A', 700)}</g>${i < 2 ? `<g ${tA(.5 + i * .6, 'ta-fade')}>${CT(160, 72 + i * 68, '＋', 12, '#94A3B8', 900)}</g>` : ''}`).join('')}`);
    },
    // quatre trampes dels debats
    i74fall() {
      const T = [['👤', L('Atac a la persona', 'Ataque a la persona'), L('«tu què en saps»', '«tú qué sabrás»')], ['🛝', L('Pendent relliscós', 'Pendiente resbaladiza'), L('«i després… i després…»', '«y luego… y luego…»')], ['🌓', L('Tot o res', 'Todo o nada'), L('«o prohibir o el caos»', '«o prohibir o el caos»')], ['🐑', L('Tothom ho fa', 'Todo el mundo lo hace'), L('«si ho fan tots…»', '«si lo hacen todos…»')]];
      return tSvg(214, `${T.map(([e, t, x], i) => { const X = i % 2 ? 164 : 8, Y = i < 2 ? 8 : 112; return `<g ${tA(.2 + i * .45, 'ta-wob')}>${box(X, Y, 148, 94, '#FFF7ED', '#FDBA74', 14)}${E(X + 74, Y + 32, e, 22)}${CT(X + 74, Y + 58, t, 10.5, '#9A3412', 900)}${CT(X + 74, Y + 78, x, 9.5, '#14204A', 700)}</g>`; }).join('')}`);
    },
    // els rols de l'assemblea al voltant de la taula
    i74roles() {
      const R = [[60, 52, '👍', L('A favor', 'A favor'), '#0E9F6E'], [260, 52, '👎', L('En contra', 'En contra'), '#DC2626'], [160, 30, '⏱️', L('Moderador/a', 'Moderador/a'), '#7C3AED'], [56, 160, '🔍', L('Verificador/a', 'Verificador/a'), '#2563EB'], [264, 160, '📝', L('Relator/a', 'Relator/a'), '#D97706'], [160, 182, '🗳️', L('Jurat', 'Jurado'), '#475569']];
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}><ellipse cx="160" cy="108" rx="70" ry="34" fill="#F3F0FF" stroke="#D8CCFF" stroke-width="2"/>${CT(160, 104, L('MOCIÓ', 'MOCIÓN'), 11, '#6D28D9', 900)}${CT(160, 120, L('Hauríem de…?', '¿Deberíamos…?'), 10, '#14204A', 700)}</g>
        ${R.map(([x, y, e, t, c], i) => `<g ${tA(.5 + i * .3, 'ta-pop')}><circle cx="${x}" cy="${y}" r="19" fill="${c}22" stroke="${c}" stroke-width="2"/>${E(x, y + 6, e, 16)}${CT(x, y + 34, t, 10, c, 900)}</g>`).join('')}`);
    },
    // el posicionament: quatre preguntes que fan una bona norma
    i74paper() {
      const Q = [['✅', L('Què es permet', 'Qué se permite')], ['📋', L('Amb quines condicions', 'Con qué condiciones')], ['🙋', L('Qui en respon', 'Quién responde')], ['📅', L('Quan es revisarà', 'Cuándo se revisará')]];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}><path d="M60 8 H240 L262 30 V206 H60 Z" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><path d="M240 8 V30 H262" fill="#F1F5F9" stroke="#DCE4FA" stroke-width="2"/>${CT(160, 32, L('📜 POSICIONAMENT', '📜 POSICIONAMIENTO'), 11, '#6D28D9', 900)}</g>
        ${Q.map(([e, t], i) => `<g ${tA(.6 + i * .45, 'ta-in')}>${E(84, 66 + i * 36, e, 15)}${TX(102, 65 + i * 36, t, 11, '#14204A', 800)}<path d="M102 ${73 + i * 36} H244" stroke="#E2E8F0" stroke-width="2" stroke-dasharray="3 4"/></g>`).join('')}
        <g ${tA(2.6, 'ta-pop')}><circle cx="276" cy="186" r="22" fill="#A23BEA"/>${E(276, 193, '🏛️', 18)}</g>`);
    }
  });
}
