/* Tech IA · unitat 4 · animacions de teoria (TANI). Dibuixos propis de Numi: parelles d'imatge i text, del soroll a la
   imatge (difusió), les peces d'un prompt d'imatge, estereotips, estils i artistes; tipus de deepfakes, veus clonades,
   verificar, etiquetes i marques, consentiment; drets d'autor, llicències Creative Commons, qui és l'autor, entrenar amb
   obres d'altres, la fitxa de transparència; i el projecte (guió, coherència del personatge, qui fa què, l'etiqueta). */
{
  const F = (sz, c = '#14204A', w = 800) => `style="font:${w} ${sz}px Lexend,system-ui,sans-serif;fill:${c}"`;
  const M = (sz, c = '#14204A') => `style="font:700 ${sz}px ui-monospace,Menlo,monospace;fill:${c}"`;
  const box = (x, y, w, h, fill, stroke, r = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="2"` : ''}/>`;
  const arrow = (x1, y1, x2, y2, c = '#8B9BE0') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><path d="M${x2} ${y2} l-7 -4 m7 4 l-7 4" stroke="${c}" stroke-width="2.5" stroke-linecap="round" fill="none" transform="rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI).toFixed(0)} ${x2} ${y2})"/>`;
  const ok = (cx, cy, r = 10, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><path d="M${cx - r / 2} ${cy}l${(r * .35).toFixed(1)} ${(r * .35).toFixed(1)} ${(r * .6).toFixed(1)} -${(r * .65).toFixed(1)}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const ko = (cx, cy, r = 10) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#EF5A5A"/><path d="M${cx - r * .4} ${cy - r * .4}l${r * .8} ${r * .8}m0 -${r * .8}l-${r * .8} ${r * .8}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`;
  const CT = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" text-anchor="middle" ${F(sz, c, w)}>${t}</text>`;
  const rng = s => () => { s = (s * 1103515245 + 12345) % 2147483648; return s / 2147483648; };
  // una persona petita (cap, cabells i cos), per a les animacions d'estereotips i del personatge
  const pers = (x, y, skin, hair, top, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-13 26 Q-13 6 0 6 Q13 6 13 26 Z" fill="${top}"/><circle cx="0" cy="-6" r="10" fill="${skin}"/><path d="M-10 -8 Q-9 -19 0 -18 Q10 -19 10 -8 Q6 -13 0 -13 Q-6 -13 -10 -8 Z" fill="${hair}"/></g>`;
  // la Kira, la protagonista inventada del còmic del projecte (cabells curts blaus i dessuadora groga)
  const kira = (x, y, hair = '#3B82F6', top = '#FACC15', s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-16 34 Q-16 8 0 8 Q16 8 16 34 Z" fill="${top}"/><path d="M-5 8 L0 15 L5 8" fill="none" stroke="#14204A" stroke-width="1.5" opacity=".35"/><circle cx="0" cy="-6" r="12" fill="#F2C9A0"/>
    <path d="M-13 -5 Q-14 -21 0 -21 Q14 -21 13 -5 Q11 -13 4 -14 Q-2 -9 -9 -12 Q-12 -9 -13 -5 Z" fill="${hair}"/><circle cx="-4" cy="-5" r="1.6" fill="#14204A"/><circle cx="4" cy="-5" r="1.6" fill="#14204A"/><path d="M-3 1 Q0 3 3 1" stroke="#14204A" stroke-width="1.4" fill="none" stroke-linecap="round"/></g>`;
  Object.assign(TANI, {
    // aprendre de parelles: moltes imatges amb la seva descripció
    i41pairs() {
      const R = [['🐱', L('«un gat dormint»', '«un gato durmiendo»'), '#F3F0FF'], ['🌅', L('«posta de sol al mar»', '«puesta de sol en el mar»'), '#FFF4E8'], ['🚲', L('«bicicleta vermella»', '«bicicleta roja»'), '#E9FAFD']];
      return tSvg(214, `${R.map(([e, t, bg], i) => { const y = 8 + i * 68; return `<g ${tA(.2 + i * .45, 'ta-pop')}>${box(8, y, 60, 60, bg, '#DCE4FA', 12)}<text x="38" y="${y + 41}" text-anchor="middle" font-size="28">${e}</text></g>
          <g ${tA(.5 + i * .45, 'ta-in')}>${box(78, y + 17, 150, 26, '#fff', '#DCE4FA', 13)}<text x="153" y="${y + 34}" text-anchor="middle" ${M(10.5)}>${t}</text></g><g ${tA(1.6, 'ta-fade')}>${arrow(232, y + 30, 248, 104 + (i - 1) * 10, '#C4B5FD')}</g>`; }).join('')}
        <g ${tA(2, 'ta-pop')}><circle cx="280" cy="104" r="30" fill="#7C3AED"/><text x="280" y="114" text-anchor="middle" font-size="27">🧠</text>${CT(280, 152, 'model', 11.5, '#56628A', 800)}</g>
        <g ${tA(2.6, 'ta-fade')}>${CT(280, 172, L('paraules', 'palabras'), 10, '#7C3AED', 800)}${CT(280, 186, '↔', 12, '#7C3AED', 900)}${CT(280, 200, L('imatges', 'imágenes'), 10, '#7C3AED', 800)}</g>`);
    },
    // difusió: del soroll a la imatge, pas a pas, guiat pel text del prompt
    i41noise() {
      const PAL = ['#8B5CF6', '#22C3E6', '#F08A24', '#3CC47C', '#E5489A', '#FDE68A', '#64748B', '#F1F5F9'], N = [110, 70, 28, 0], O = [0, .35, .72, 1], LB = [L('soroll', 'ruido'), L('formes', 'formas'), L('detalls', 'detalles'), L('imatge', 'imagen')];
      const frame = (k) => { const fx = 8 + k * 78, fy = 44, R = rng(17 + k * 31); let n = '';
        for (let i = 0; i < N[k]; i++) n += `<rect x="${(fx + Math.floor(R() * 17) * 4).toFixed(0)}" y="${(fy + Math.floor(R() * 17) * 4).toFixed(0)}" width="4" height="4" fill="${PAL[Math.floor(R() * PAL.length)]}"/>`;
        const img = `<g opacity="${O[k]}"><rect x="${fx}" y="${fy}" width="68" height="68" fill="#1E2A5A"/><circle cx="${fx + 52}" cy="${fy + 14}" r="7" fill="#FFF3B0"/><polygon points="${fx + 28},${fy + 22} ${fx + 2},${fy + 12} ${fx + 2},${fy + 30}" fill="#FDE68A" opacity=".55"/>
          <rect x="${fx}" y="${fy + 50}" width="68" height="18" fill="#2B4C9B"/><rect x="${fx + 22}" y="${fy + 24}" width="12" height="28" fill="#F1F5F9"/><rect x="${fx + 22}" y="${fy + 32}" width="12" height="5" fill="#EF4444"/><rect x="${fx + 22}" y="${fy + 43}" width="12" height="5" fill="#EF4444"/><rect x="${fx + 20}" y="${fy + 16}" width="16" height="9" rx="2" fill="#EF4444"/><circle cx="${fx + 28}" cy="${fy + 20}" r="3" fill="#FDE68A"/></g>`;
        return `<g ${tA(.5 + k * .55, 'ta-pop')}><rect x="${fx}" y="${fy}" width="68" height="68" rx="8" fill="${k === 0 ? '#9AA0B5' : '#5B6490'}"/>${img}${n}<rect x="${fx}" y="${fy}" width="68" height="68" rx="8" fill="none" stroke="#14204A" stroke-width="2"/>${CT(fx + 34, 128, LB[k], 10.5, k === 3 ? '#7C3AED' : '#56628A', 800)}</g>${k < 3 ? `<g ${tA(.8 + k * .55, 'ta-fade')}>${arrow(fx + 70, 78, fx + 76, 78, '#7C3AED')}</g>` : ''}`; };
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${box(50, 4, 220, 28, '#0E1332', '', 14)}${CT(160, 23, L('«un far de nit amb la lluna»', '«un faro de noche con la luna»'), 11, '#fff')}</g>
        ${[0, 1, 2, 3].map(frame).join('')}
        <g ${tA(2.9, 'ta-in')}>${box(6, 144, 308, 64, '#F3F0FF', '#D8CCFF', 14)}${CT(160, 170, L('A cada pas, el model treu una mica de soroll', 'En cada paso, el modelo quita un poco de ruido'), 11)}${CT(160, 190, L('guiat pel text del prompt (difusió)', 'guiado por el texto del prompt (difusión)'), 11, '#6D28D9')}</g>`);
    },
    // les peces d'un prompt d'imatge
    i41prompt() {
      const P = [[L('TEMA', 'TEMA'), L('un far', 'un faro'), '#8B5CF6', '#F3F0FF'], [L('ESCENA', 'ESCENA'), L('en una illa, de nit', 'en una isla, de noche'), '#14A3B8', '#E9FAFD'],
        [L('ESTIL', 'ESTILO'), L('il·lustració plana', 'ilustración plana'), '#F08A24', '#FFF4E8'], [L('LLUM', 'LUZ'), L('llum blava de lluna', 'luz azul de luna'), '#3B82F6', '#EEF4FF'],
        [L('ENQUADRAMENT', 'ENCUADRE'), L('vertical, des de lluny', 'vertical, desde lejos'), '#3CC47C', '#EEFBF3'], [L('SENSE', 'SIN'), L('text ni persones', 'texto ni personas'), '#E5489A', '#FDEEF6']];
      return tSvg(214, P.map(([k, x, c, bg], i) => { const X = 6 + (i % 2) * 156, Y = 6 + Math.floor(i / 2) * 70;
        return `<g ${tA(.2 + i * .4, 'ta-pop')}>${box(X, Y, 152, 62, bg, c + '66')}<circle cx="${X + 18}" cy="${Y + 20}" r="10" fill="${c}"/><text x="${X + 18}" y="${Y + 24}" text-anchor="middle" ${F(11, '#fff', 900)}>${i + 1}</text>
          <text x="${X + 34}" y="${Y + 25}" ${F(11, c, 900)}>${k}</text><text x="${X + 12}" y="${Y + 48}" ${F(10.5, '#14204A', 700)}>${x}</text></g>`; }).join(''));
    },
    // estereotips: les dades tenen biaixos i les imatges també; fer explícita la diversitat
    i41bias() {
      const S = ['#F2C9A0', '#C68B59', '#8D5524', '#E0AC69', '#F1C27D', '#5C3A21'], H = ['#4B3621', '#111827', '#B45309', '#9CA3AF', '#1F2937', '#7C2D12'];
      const row1 = [0, 1, 2, 3, 4, 5].map(i => pers(46 + i * 46, 74, i === 4 ? S[2] : S[0], i === 4 ? H[1] : H[0], '#F8FAFC', .95)).join('');
      const row2 = [0, 1, 2, 3, 4, 5].map(i => pers(46 + i * 46, 172, S[i], H[i], '#F8FAFC', .95)).join('');
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${box(56, 4, 208, 26, '#0E1332', '', 13)}${CT(160, 22, L('«una persona que fa ciència»', '«una persona que hace ciencia»'), 11, '#fff')}</g>
        <g ${tA(.6, 'ta-in')}>${row1}</g><g ${tA(1.2, 'ta-fade')}>${CT(160, 114, L('gairebé sempre surt el mateix tipus de persona', 'casi siempre sale el mismo tipo de persona'), 10.5, '#B91C1C', 800)}</g>
        <g ${tA(1.8, 'ta-pop')}>${box(36, 122, 248, 26, '#7C3AED', '', 13)}${CT(160, 140, L('«persones diverses fent ciència»', '«personas diversas haciendo ciencia»'), 11, '#fff')}</g>
        <g ${tA(2.4, 'ta-in')}>${row2}</g><g ${tA(3, 'ta-pop')}>${ok(300, 150, 9)}</g>`);
    },
    // estils i artistes: el model aprèn d'obres d'artistes; millor descriure la tècnica
    i41style() {
      const bird = (x, y, s, c = '#7C3AED') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 Q14 -16 30 -4 Q22 0 30 6 Q14 14 0 0 Z" fill="${c}"/><circle cx="24" cy="-3" r="2" fill="#fff"/><path d="M-4 -2 Q-14 -12 -18 2 Q-10 0 -4 4 Z" fill="#F472B6"/><path d="M6 -6 Q12 -22 22 -14" stroke="#F08A24" stroke-width="3" fill="none" stroke-linecap="round"/></g>`;
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 16, 118, 142, '#FFF9F0', '#F6D9B0', 14)}${bird(48, 74, 1.5)}${CT(65, 128, L("obra d'una artista", 'obra de una artista'), 10.5, '#92400E', 800)}${CT(65, 146, '✍️ Aina Riu', 10.5, '#92400E', 700)}</g>
        <g ${tA(.9, 'ta-fade')}>${arrow(128, 86, 168, 86, '#C4B5FD')}${CT(148, 76, '🤖', 14)}</g>
        <g ${tA(1.3, 'ta-pop')}>${box(174, 16, 140, 142, '#F3F0FF', '#D8CCFF', 14)}${[[198, 50], [262, 50], [198, 104], [262, 104]].map(([x, y], i) => bird(x - 14, y, .85, ['#7C3AED', '#8B5CF6', '#6D28D9', '#A78BFA'][i])).join('')}${CT(244, 146, L("«a l'estil d'Aina Riu»", '«al estilo de Aina Riu»'), 10, '#6D28D9', 800)}</g>
        <g ${tA(2, 'ta-pop')}><text x="65" y="186" text-anchor="middle" font-size="22">😟</text></g>
        <g ${tA(2.6, 'ta-in')}>${box(110, 170, 204, 38, '#EEFBF3', '#B9EBD2', 12)}${CT(212, 186, L('✓ Descriu la tècnica', '✓ Describe la técnica'), 11, '#15803D')}${CT(212, 201, L('(aquarel·la, línia clara…)', '(acuarela, línea clara…)'), 9.5, '#15803D', 700)}</g>`);
    },

    // tipus de deepfakes
    i42what() {
      const T = [['🔄', L('Canvi', 'Cambio'), L('de cara', 'de cara'), '#8B5CF6', '#F3F0FF'], ['👄', L('Llavis', 'Labios'), L('sincronitzats', 'sincronizados'), '#E5489A', '#FDEEF6'], ['🗣️', L('Veu', 'Voz'), L('clonada', 'clonada'), '#14A3B8', '#E9FAFD'], ['✨', L('Escena', 'Escena'), L('inventada', 'inventada'), '#F08A24', '#FFF4E8']];
      return tSvg(214, T.map(([e, a, b, c, bg], i) => { const x = 6 + (i % 2) * 156, y = 6 + Math.floor(i / 2) * 104; return `<g ${tA(.3 + i * .55, 'ta-pop')}>${box(x, y, 152, 98, bg, c + '55', 16)}<text x="${x + 28}" y="${y + 58}" text-anchor="middle" font-size="26">${e}</text>
          <text x="${x + 52}" y="${y + 46}" ${F(12.5)}>${a}</text><text x="${x + 52}" y="${y + 66}" ${F(11.5, c, 900)}>${b}</text></g>`; }).join(''));
    },
    // veus clonades: pocs segons de veu → una trucada urgent; la defensa: penjar i trucar, o la paraula clau
    i42voice() {
      const wave = [6, 14, 9, 18, 7, 15, 10, 4, 12, 16, 8].map((h, i) => `<rect x="${18 + i * 5}" y="${36 - h / 2}" width="3" height="${h}" rx="1.5" fill="#22C3E6"/>`).join('');
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 8, 74, 56, '#0E1332', '', 12)}${wave}${CT(43, 78, L('pocs segons', 'pocos segundos'), 9.5, '#56628A', 800)}${CT(43, 90, L('de veu', 'de voz'), 9.5, '#56628A', 800)}</g>
        <g ${tA(.7, 'ta-fade')}>${arrow(84, 36, 104, 36, '#EF5A5A')}</g><g ${tA(.9, 'ta-pop')}><circle cx="124" cy="36" r="18" fill="#7C3AED"/><text x="124" y="43" text-anchor="middle" font-size="17">🤖</text></g>
        <g ${tA(1.2, 'ta-fade')}>${arrow(144, 36, 160, 36, '#EF5A5A')}</g>
        <g ${tA(1.4, 'ta-in')}>${box(164, 6, 150, 62, '#FFF1F1', '#F8B4B4', 12)}<text x="174" y="26" ${F(11, '#B91C1C', 900)}>📞 ${L('«Avi, soc jo!', '«¡Abuelo, soy yo!')}</text><text x="174" y="43" ${F(10.5, '#14204A', 700)}>${L("Envia'm diners ara", 'Mándame dinero ya')}</text><text x="174" y="59" ${F(10.5, '#14204A', 700)}>${L('i no ho diguis a ningú»', 'y no se lo digas a nadie»')}</text></g>
        <g ${tA(2, 'ta-pop')}>${box(40, 96, 240, 26, '#EF5A5A', '', 13)}${CT(160, 113, L('pressa + secret + diners = 🚩', 'prisa + secreto + dinero = 🚩'), 11.5, '#fff')}</g>
        <g ${tA(2.5, 'ta-in')}>${box(6, 132, 150, 76, '#EEFBF3', '#B9EBD2', 14)}<text x="81" y="160" text-anchor="middle" font-size="20">📵</text>${CT(81, 180, L('Penja i truca al', 'Cuelga y llama al'), 10.5)}${CT(81, 196, L('número de sempre', 'número de siempre'), 10.5)}</g>
        <g ${tA(2.9, 'ta-in')}>${box(164, 132, 150, 76, '#EEFBF3', '#B9EBD2', 14)}<text x="239" y="160" text-anchor="middle" font-size="20">🔑</text>${CT(239, 180, L('Paraula clau', 'Palabra clave'), 10.5)}${CT(239, 196, L('de la família', 'de la familia'), 10.5)}</g>`);
    },
    // verificar un vídeo o un àudio: atura't, qui ho publica, altres fonts, l'original
    i42verify() {
      const S = [['✋', L("Atura't", 'Detente'), L('no ho comparteixis encara', 'no lo compartas todavía'), '#EF5A5A'], ['👤', L('Qui ho publica?', '¿Quién lo publica?'), L('compte nou? font oficial?', '¿cuenta nueva? ¿fuente oficial?'), '#8B5CF6'],
        ['🔎', L('Què diuen altres fonts?', '¿Qué dicen otras fuentes?'), L('mitjans fiables, web oficial', 'medios fiables, web oficial'), '#14A3B8'], ['🧭', L("Busca l'original", 'Busca el original'), L("cerca inversa d'imatges", 'búsqueda inversa de imágenes'), '#3CC47C']];
      return tSvg(214, S.map(([e, t, k, c], i) => `<g ${tA(.3 + i * .6, 'ta-in')}>${box(6, 4 + i * 52, 308, 46, '#fff', '#DCE4FA', 12)}<circle cx="30" cy="${27 + i * 52}" r="16" fill="${c}" opacity=".18"/><text x="30" y="${34 + i * 52}" text-anchor="middle" font-size="17">${e}</text>
          <text x="54" y="${23 + i * 52}" ${F(12.5)}>${i + 1}. ${t}</text><text x="54" y="${40 + i * 52}" ${F(10.5, c, 800)}>${k}</text></g>`).join(''));
    },
    // etiquetes i marques: visible, metadades i marca d'aigua invisible; sense etiqueta no vol dir real
    i42label() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 308, 92, '#0E1332', '', 14)}${pers(160, 58, '#C68B59', '#111827', '#3B82F6', 1.5)}<polygon points="40,40 40,64 60,52" fill="#fff" opacity=".85"/><rect x="20" y="86" width="280" height="4" rx="2" fill="#2E3A86"/><rect x="20" y="86" width="96" height="4" rx="2" fill="#EF5A5A"/></g>
        <g ${tA(.8, 'ta-pop')}>${box(214, 14, 92, 22, '#FDE68A', '', 11)}${CT(260, 29, L('✨ Fet amb IA', '✨ Hecho con IA'), 10, '#92400E', 900)}</g>
        ${[['🏷️', L('etiqueta', 'etiqueta'), L('visible', 'visible')], ['🧾', L('metadades', 'metadatos'), L('credencials', 'credenciales')], ['💧', L("marca d'aigua", 'marca de agua'), L('invisible', 'invisible')]].map(([e, a, b], i) => `<g ${tA(1.3 + i * .4, 'ta-pop')}>${box(6 + i * 104, 106, 100, 42, '#F3F0FF', '#D8CCFF', 12)}${CT(56 + i * 104, 124, `${e} ${a}`, 10.5)}${CT(56 + i * 104, 140, b, 9.5, '#6D28D9', 700)}</g>`).join('')}
        <g ${tA(2.7, 'ta-in')}>${box(6, 156, 308, 52, '#FFF7E6', '#F6D28B', 12)}${CT(160, 176, L('UE, des del 2-8-2026: cal etiquetar els deepfakes', 'UE, desde el 2-8-2026: hay que etiquetar los deepfakes'), 10.5, '#92400E')}${CT(160, 196, L('⚠️ Sense etiqueta ≠ real: les marques es treuen', '⚠️ Sin etiqueta ≠ real: las marcas se quitan'), 10.5, '#B91C1C')}</g>`);
    },
    // consentiment: mai deepfakes de persones reals; si et passa, què fer
    i42consent() {
      const R = [L('Sense permís, mai', 'Sin permiso, nunca'), L('Fa mal (i pot ser delicte)', 'Hace daño (y puede ser delito)'), L('Compartir-lo també fa mal', 'Compartirlo también hace daño')];
      const H = [['🧑‍🏫', L('adult de confiança', 'adulto de confianza')], ['📸', L('guarda proves', 'guarda pruebas')], ['🚩', L('denuncia-ho', 'denúncialo')], ['☎️', '017 · 116 111']];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(6, 6, 308, 112, '#FFF4F4', '#F8C9C9', 16)}<text x="22" y="32" ${F(13)}>🚫 ${L('Deepfakes de persones reals', 'Deepfakes de personas reales')}</text></g>
        ${R.map((t, i) => `<g ${tA(.5 + i * .4, 'ta-in')}>${ko(32, 56 + i * 22, 8)}<text x="48" y="${60 + i * 22}" ${F(11, '#14204A', 700)}>${t}</text></g>`).join('')}
        <g ${tA(1.9, 'ta-fade')}><text x="10" y="138" ${F(11.5, '#15803D', 900)}>${L('Si et passa a tu o a algú:', 'Si te pasa a ti o a alguien:')}</text></g>
        ${H.map(([e, t], i) => { const x = 6 + (i % 2) * 156, y = 146 + Math.floor(i / 2) * 32; return `<g ${tA(2.2 + i * .3, 'ta-pop')}>${box(x, y, 152, 28, '#EEFBF3', '#B9EBD2', 14)}${CT(x + 76, y + 19, `${e} ${t}`, 10.5, '#15803D')}</g>`; }).join('')}`);
    },

    // drets d'autor: neixen amb l'obra i l'autor/a decideix
    i43rights() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(8, 10, 132, 132, '#fff', '#DCE4FA', 14)}<rect x="20" y="22" width="108" height="84" rx="8" fill="#E0F2FE"/><circle cx="104" cy="42" r="10" fill="#FBBF24"/><path d="M20 106 L58 58 L80 84 L96 66 L128 106 Z" fill="#22C3E6"/><path d="M48 70 L58 58 L66 68" fill="#fff"/>${CT(74, 128, L('La meva il·lustració', 'Mi ilustración'), 10, '#56628A', 800)}</g>
        <g ${tA(.9, 'ta-pop')}><circle cx="132" cy="18" r="16" fill="#7C3AED"/><text x="132" y="25" text-anchor="middle" ${F(18, '#fff', 900)}>©</text></g>
        <g ${tA(1.2, 'ta-fade')}>${CT(74, 164, L("Neix amb l'obra:", 'Nace con la obra:'), 11.5)}${CT(74, 182, L('no cal registrar-la', 'no hace falta registrarla'), 10, '#56628A', 700)}</g>
        <g ${tA(1.5, 'ta-in')}><text x="156" y="30" ${F(12.5)}>${L("L'autor/a decideix si:", 'El autor/a decide si:')}</text></g>
        ${[['📄', L('es copia', 'se copia')], ['📤', L('es comparteix', 'se comparte')], ['✂️', L('es transforma', 'se transforma')]].map(([e, t], i) => `<g ${tA(1.8 + i * .35, 'ta-in')}>${box(156, 42 + i * 36, 158, 30, '#F3F0FF', '#D8CCFF', 12)}<text x="168" y="${62 + i * 36}" ${F(11.5)}>${e} ${t}</text></g>`).join('')}
        <g ${tA(3, 'ta-pop')}>${box(156, 156, 158, 46, '#7C3AED', '', 14)}${CT(235, 175, L('A la UE: tota la vida', 'En la UE: toda la vida'), 10.5, '#fff')}${CT(235, 192, L("de l'autor/a + 70 anys", 'del autor/a + 70 años'), 10.5, '#fff')}</g>`);
    },
    // les llicències Creative Commons: què vol dir cada peça
    i43cc() {
      const R = [['BY', L('Cita qui ho ha fet', 'Cita a quien lo ha hecho'), '#3B82F6'], ['SA', L('Comparteix amb la mateixa llicència', 'Comparte con la misma licencia'), '#14A3B8'], ['NC', L('Sense ús comercial', 'Sin uso comercial'), '#F08A24'], ['ND', L('Sense obres derivades', 'Sin obras derivadas'), '#E5489A'], ['0', L('CC0: domini públic, lliure', 'CC0: dominio público, libre'), '#3CC47C']];
      return tSvg(214, R.map(([b, t, c], i) => `<g ${tA(.3 + i * .45, 'ta-in')}>${box(6, 4 + i * 42, 308, 36, '#fff', '#DCE4FA', 12)}<circle cx="30" cy="${22 + i * 42}" r="14" fill="${c}"/><text x="30" y="${27 + i * 42}" text-anchor="middle" ${F(b.length > 1 ? 10.5 : 13, '#fff', 900)}>${b}</text>
          <text x="54" y="${27 + i * 42}" ${F(11.5)}>${t}</text></g>`).join(''));
    },
    // qui és l'autor d'una imatge generada: depèn de quanta feina creativa hi posa una persona
    i43who() {
      const S = [['🖱️', L('Només un prompt', 'Solo un prompt'), L("en molts llocs, sense drets d'autor", 'en muchos sitios, sin derechos de autor'), '#64748B'],
        ['✍️', L('Prompt + triar + retocar molt', 'Prompt + elegir + retocar mucho'), L('la teva part creativa pot comptar', 'tu parte creativa puede contar'), '#F08A24'],
        ['🎨', L('El teu dibuix + IA per al fons', 'Tu dibujo + IA para el fondo'), L('el dibuix és teu', 'el dibujo es tuyo'), '#3CC47C']];
      return tSvg(214, S.map(([e, t, k, c], i) => `<g ${tA(.3 + i * .8, 'ta-in')}>${box(6, 8 + i * 68, 308, 60, '#fff', '#DCE4FA')}<circle cx="34" cy="${38 + i * 68}" r="19" fill="${c}" opacity=".18"/><text x="34" y="${46 + i * 68}" text-anchor="middle" font-size="20">${e}</text>
          <text x="62" y="${34 + i * 68}" ${F(12.5)}>${t}</text><text x="62" y="${53 + i * 68}" ${F(11, c, 800)}>${k}</text></g>`).join(''));
    },
    // entrenar amb obres d'altres: moltes obres → model; artistes que diuen que no; judicis oberts
    i43train() {
      const C = ['#8B5CF6', '#22C3E6', '#F08A24', '#3CC47C', '#E5489A', '#FBBF24', '#3B82F6', '#14A3B8', '#F472B6'];
      return tSvg(214, `${C.map((c, i) => `<g ${tA(.1 + i * .12, 'ta-pop')}><rect x="${10 + (i % 3) * 34}" y="${14 + Math.floor(i / 3) * 34}" width="28" height="28" rx="6" fill="${c}" opacity=".85"/><circle cx="${24 + (i % 3) * 34}" cy="${28 + Math.floor(i / 3) * 34}" r="6" fill="#fff" opacity=".7"/></g>`).join('')}
        ${CT(58, 130, L("milions d'obres", 'millones de obras'), 10.5, '#56628A', 800)}
        <g ${tA(1.3, 'ta-fade')}>${arrow(112, 64, 140, 64, '#C4B5FD')}</g><g ${tA(1.5, 'ta-pop')}><circle cx="166" cy="64" r="24" fill="#7C3AED"/><text x="166" y="72" text-anchor="middle" font-size="22">🧠</text></g>
        <g ${tA(2, 'ta-in')}>${box(200, 10, 114, 74, '#FFF1F1', '#F8B4B4', 12)}${CT(257, 34, '🎨🚫🤖', 15)}${CT(257, 54, L('«No entreneu', '«No entrenéis'), 10, '#B91C1C', 800)}${CT(257, 70, L('amb la meva obra»', 'con mi obra»'), 10, '#B91C1C', 800)}</g>
        <g ${tA(2.5, 'ta-pop')}>${box(6, 146, 150, 58, '#F5F8FF', '#DCE4FA', 12)}${CT(81, 170, '⚖️', 16)}${CT(81, 192, L('judicis oberts', 'juicios abiertos'), 11)}</g>
        <g ${tA(2.9, 'ta-pop')}>${box(164, 146, 150, 58, '#EEFBF3', '#B9EBD2', 12)}${CT(239, 168, L('A la UE es pot', 'En la UE se puede'), 10.5, '#15803D')}${CT(239, 184, L('dir que no (opt-out)', 'decir que no (opt-out)'), 10.5, '#15803D')}${CT(239, 198, L('i cal un resum de dades', 'y hace falta un resumen'), 9, '#15803D', 700)}</g>`);
    },
    // la fitxa de transparència: què ha fet la IA i què has fet tu
    i43declare() {
      const R = [[L('Eina', 'Herramienta'), L("generador d'imatges", 'generador de imágenes')], [L('La IA ha fet', 'La IA ha hecho'), L('esborrany del fons', 'borrador del fondo')], [L('Jo he fet', 'Yo he hecho'), L('idea, dibuix i textos', 'idea, dibujo y textos')], [L('Fonts', 'Fuentes'), 'foto CC BY de M. Vila'], [L('Etiqueta', 'Etiqueta'), L('«Fet amb IA i retocat»', '«Hecho con IA y retocado»')]];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(14, 4, 292, 206, '#fff', '#DCE4FA', 16)}<rect x="14" y="4" width="292" height="30" rx="16" fill="#7C3AED"/><rect x="14" y="20" width="292" height="14" fill="#7C3AED"/>${CT(160, 25, L('🏷️ FITXA DE TRANSPARÈNCIA', '🏷️ FICHA DE TRANSPARENCIA'), 11.5, '#fff', 900)}</g>
        ${R.map(([k, v], i) => `<g ${tA(.5 + i * .4, 'ta-in')}><text x="28" y="${60 + i * 30}" ${F(10.5, '#6D28D9', 900)}>${k}</text><text x="${L(124, 134)}" y="${60 + i * 30}" ${F(11, '#14204A', 700)}>${v}</text><line x1="28" y1="${68 + i * 30}" x2="292" y2="${68 + i * 30}" stroke="#E8EEFF" stroke-width="1.5"/></g>`).join('')}
        <g ${tA(2.8, 'ta-wob')}>${ok(290, 19, 10)}</g>`);
    },

    // el projecte: del guió a les vinyetes
    i44board() {
      const P = [['📱', '❗', L('rep el vídeo', 'recibe el vídeo')], ['🤔', '', L('dubta', 'duda')], ['💻', '🔎', L('ho comprova', 'lo comprueba')], ['✋', '📢', L('avisa la classe', 'avisa a la clase')]];
      return tSvg(214, `${P.map(([a, b, t], i) => { const x = 6 + (i % 2) * 156, y = 4 + Math.floor(i / 2) * 82; return `<g ${tA(.3 + i * .5, 'ta-pop')}>${box(x, y, 152, 76, '#fff', '#14204A', 8)}<circle cx="${x + 14}" cy="${y + 14}" r="9" fill="#7C3AED"/><text x="${x + 14}" y="${y + 18}" text-anchor="middle" ${F(10, '#fff', 900)}>${i + 1}</text>
          ${kira(x + 46, y + 38, '#3B82F6', '#FACC15', .8)}<text x="${x + 96}" y="${y + 40}" text-anchor="middle" font-size="22">${a}</text>${b ? `<text x="${x + 128}" y="${y + 30}" text-anchor="middle" font-size="15">${b}</text>` : ''}<text x="${x + 106}" y="${y + 66}" text-anchor="middle" ${F(10, '#56628A', 800)}>${t}</text></g>`; }).join('')}
        <g ${tA(2.6, 'ta-in')}>${box(6, 172, 308, 34, '#F3F0FF', '#D8CCFF', 17)}${CT(160, 194, L('idea → guió → imatges → retoc → fitxa', 'idea → guion → imágenes → retoque → ficha'), 11.5, '#6D28D9')}</g>`);
    },
    // coherència: el mateix personatge a totes les vinyetes
    i44consist() {
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(4, 4, 312, 100, '#EEFBF3', '#B9EBD2', 14)}<text x="16" y="24" ${F(11, '#15803D', 900)}>✓ ${L('Mateixa descripció a cada prompt', 'Misma descripción en cada prompt')}</text></g>
        ${[0, 1, 2].map(i => `<g ${tA(.4 + i * .3, 'ta-pop')}>${kira(80 + i * 80, 58, '#3B82F6', '#FACC15', .95)}</g>`).join('')}
        <g ${tA(1.5, 'ta-in')}>${box(4, 112, 312, 98, '#FFF4F4', '#F8C9C9', 14)}<text x="16" y="132" ${F(11, '#B91C1C', 900)}>✗ ${L('Descripció diferent cada vegada', 'Descripción distinta cada vez')}</text></g>
        ${[['#3B82F6', '#FACC15'], ['#7C2D12', '#EF4444'], ['#111827', '#3CC47C']].map(([h, t], i) => `<g ${tA(1.8 + i * .3, 'ta-pop')}>${kira(80 + i * 80, 166, h, t, .95)}</g>`).join('')}
        <g ${tA(2.9, 'ta-pop')}>${ko(296, 128, 9)}${ok(296, 20, 9)}</g>`);
    },
    // qui fa què: l'equip decideix; la IA fa esborranys
    i44human() {
      const A = [L('la idea i la història', 'la idea y la historia'), L('els diàlegs', 'los diálogos'), L('triar i retocar', 'elegir y retocar'), L('revisar errors', 'revisar errores'), L('la fitxa', 'la ficha')], B = [L('esborranys', 'borradores'), L('variacions', 'variaciones'), L('fons i detalls', 'fondos y detalles')];
      const col = (x, head, rows, c, fill, stroke, t0) => `<g ${tA(t0, 'ta-in')}>${box(x, 6, 152, 202, fill, stroke, 16)}${CT(x + 76, 32, head, 13.5)}</g>
        ${rows.map((t, i) => `<g ${tA(t0 + .35 + i * .3, 'ta-in')}><circle cx="${x + 20}" cy="${58 + i * 30}" r="5" fill="${c}"/><text x="${x + 32}" y="${62 + i * 30}" ${F(11, '#14204A', 700)}>${t}</text></g>`).join('')}`;
      return tSvg(214, col(4, L('🧑 Nosaltres', '🧑 Nosotros'), A, '#7C3AED', '#F3F0FF', '#D8CCFF', .1) + col(164, L('🤖 La IA', '🤖 La IA'), B, '#14A3B8', '#E9FAFD', '#B5EBF5', 1.8) +
        `<g ${tA(3, 'ta-pop')}>${box(176, 164, 128, 34, '#7C3AED', '', 17)}${CT(240, 186, L('el projecte és vostre', 'el proyecto es vuestro'), 10, '#fff')}</g>`);
    },
    // el còmic acabat amb l'etiqueta visible i la fitxa
    i44card() {
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(8, 6, 180, 200, '#fff', '#14204A', 10)}${[0, 1, 2, 3].map(i => `<rect x="${16 + (i % 2) * 86}" y="${14 + Math.floor(i / 2) * 76}" width="78" height="70" rx="4" fill="${['#E0F2FE', '#FEF3C7', '#EDE9FE', '#DCFCE7'][i]}" stroke="#14204A" stroke-width="1.5"/>${kira(55 + (i % 2) * 86, 52 + Math.floor(i / 2) * 76, '#3B82F6', '#FACC15', .65)}`).join('')}</g>
        <g ${tA(1, 'ta-pop')}>${box(14, 170, 168, 30, '#FDE68A', '', 8)}${CT(98, 184, L('Imatges amb IA, editades', 'Imágenes con IA, editadas'), 9.5, '#92400E', 900)}${CT(98, 196, L("per l'equip · CC BY", 'por el equipo · CC BY'), 9, '#92400E', 800)}</g>
        <g ${tA(1.6, 'ta-in')}>${box(198, 30, 116, 150, '#F3F0FF', '#D8CCFF', 12)}${CT(256, 52, L('FITXA', 'FICHA'), 11, '#6D28D9', 900)}${[L('autoria', 'autoría'), L('eines', 'herramientas'), L('què ha fet la IA', 'qué ha hecho la IA'), L('què hem fet', 'qué hemos hecho'), L('llicència', 'licencia')].map((t, i) => `<g ${tA(1.9 + i * .25, 'ta-fade')}>${ok(214, 72 + i * 22, 6)}<text x="226" y="${76 + i * 22}" ${F(9.5, '#14204A', 700)}>${t}</text></g>`).join('')}</g>
        <g ${tA(3.2, 'ta-wob')}>${box(214, 184, 84, 24, '#3CC47C', '', 12)}${CT(256, 200, L('honest ✓', 'honesto ✓'), 11, '#fff')}</g>`);
    }
  });

  /* ---------- Taller i4-5 · imatges amb una IA de veritat i autoria ---------- */
  // la guineu lectora del cartell (inventada): o = { gl: ulleres, bk: llibre obert, c: color del pelatge }
  const fox = (x, y, s = 1, o = {}) => { const c = o.c || '#F08A24';
    return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M12 40 Q30 40 32 22 Q38 34 30 44 Q22 50 10 46 Z" fill="${c}"/><path d="M32 22 Q37 27 34 33 Q31 31 30 28 Z" fill="#FFF7ED"/>
      <path d="M-15 46 Q-17 20 0 18 Q17 20 15 46 Z" fill="${c}"/><path d="M-7 46 Q-7 28 0 26 Q7 28 7 46 Z" fill="#FFF7ED"/>
      <path d="M-18 -2 L-15 -24 L-4 -12 L4 -12 L15 -24 L18 -2 Q16 14 0 18 Q-16 14 -18 -2 Z" fill="${c}"/><path d="M-14 -20 L-12 -12 L-7 -14 Z M14 -20 L12 -12 L7 -14 Z" fill="#7C2D12"/>
      <path d="M-18 -2 Q-9 2 -4 10 Q0 13 4 10 Q9 2 18 -2 Q16 14 0 18 Q-16 14 -18 -2 Z" fill="#FFF7ED"/><circle cx="0" cy="11" r="2.6" fill="#14204A"/><circle cx="-6" cy="0" r="1.8" fill="#14204A"/><circle cx="6" cy="0" r="1.8" fill="#14204A"/>
      ${o.gl ? '<g fill="none" stroke="#14204A" stroke-width="1.6"><circle cx="-6" cy="0" r="5"/><circle cx="6" cy="0" r="5"/><path d="M-1 0 H1"/></g>' : ''}
      ${o.bk ? '<path d="M-21 28 L0 33 L21 28 L21 44 L0 49 L-21 44 Z" fill="#2563EB"/><path d="M-19 27 L0 31.5 L0 46 L-19 41.5 Z" fill="#fff"/><path d="M19 27 L0 31.5 L0 46 L19 41.5 Z" fill="#F1F5F9"/><path d="M-15 32 L-4 34.5 M-15 36 L-4 38.5 M15 32 L4 34.5 M15 36 L4 38.5" stroke="#CBD5E1" stroke-width="1.2"/>' : ''}</g>`; };
  // fons d'aquarel·la (taques suaus) dins d'un marc
  const wash = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#FFF7ED"/><ellipse cx="${x + w * .2}" cy="${y + h * .3}" rx="${w * .42}" ry="${h * .2}" fill="#FBCFE8" opacity=".55"/><ellipse cx="${x + w * .85}" cy="${y + h * .72}" rx="${w * .45}" ry="${h * .22}" fill="#BAE6FD" opacity=".55"/><ellipse cx="${x + w * .3}" cy="${y + h * .92}" rx="${w * .4}" ry="${h * .14}" fill="#BBF7D0" opacity=".6"/>`;
  Object.assign(TANI, {
    // les quatre parts del prompt (subjecte, estil, composició i llum) i com cada una canvia la imatge
    i45parts() {
      const P = [[L('SUBJECTE', 'SUJETO'), L('una guineu que llegeix', 'un zorro que lee'), '#8B5CF6', '#F3F0FF'], [L('ESTIL', 'ESTILO'), L('aquarel·la, colors suaus', 'acuarela, colores suaves'), '#F08A24', '#FFF4E8'],
        [L('COMPOSICIÓ', 'COMPOSICIÓN'), L('vertical, al centre', 'vertical, en el centro'), '#14A3B8', '#E9FAFD'], [L('LLUM', 'LUZ'), L('càlida, de posta de sol', 'cálida, de puesta de sol'), '#E5489A', '#FDEEF6']];
      return tSvg(214, `<defs><clipPath id="i45pc"><rect x="196" y="8" width="116" height="166" rx="10"/></clipPath><radialGradient id="i45pg" cx=".8" cy=".2" r=".9"><stop offset="0" stop-color="#FDBA74" stop-opacity=".9"/><stop offset="1" stop-color="#FDBA74" stop-opacity="0"/></radialGradient></defs>
        ${P.map(([k, x, c, bg], i) => `<g ${tA(.2 + i * .7, 'ta-in')}>${box(6, 6 + i * 45, 182, 40, bg, c + '66', 12)}<circle cx="24" cy="${26 + i * 45}" r="10" fill="${c}"/>${CT(24, 30 + i * 45, i + 1, 11, '#fff', 900)}<text x="42" y="${22 + i * 45}" ${F(10, c, 900)}>${k}</text><text x="42" y="${38 + i * 45}" ${F(10.5, '#14204A', 700)}>${x}</text></g>`).join('')}
        <g ${tA(.1, 'ta-fade')}>${box(194, 6, 120, 170, '#fff', '', 12)}</g>
        <g clip-path="url(#i45pc)"><g ${tA(.9, 'ta-fade')}>${wash(196, 8, 116, 166)}</g><g ${tA(2.3, 'ta-fade')}><rect x="196" y="8" width="116" height="166" fill="url(#i45pg)"/><circle cx="292" cy="30" r="11" fill="#FDE68A"/></g></g>
        <g ${tA(1.6, 'ta-fade')}><rect x="212" y="16" width="84" height="24" rx="6" fill="none" stroke="#14A3B8" stroke-width="2" stroke-dasharray="5 4"/>${CT(254, 32, L('títol', 'título'), 10, '#0E7490', 800)}</g>
        <g ${tA(.4, 'ta-pop')}>${fox(254, 96, 1.05, { gl: 1, bk: 1 })}</g>
        <g clip-path="url(#i45pc)"><g ${tA(2.3, 'ta-fade')}><rect x="196" y="8" width="116" height="166" fill="#F97316" opacity=".13"/></g></g>
        <rect x="194" y="6" width="120" height="170" rx="12" fill="none" stroke="#14204A" stroke-width="2"/>
        <g ${tA(3.1, 'ta-pop')}>${box(36, 186, 248, 24, '#14204A', '', 12)}${CT(160, 202, L('4 parts + «sense text ni persones»', '4 partes + «sin texto ni personas»'), 10.5, '#fff')}</g>`);
    },
    // tres versions del prompt: v1 genèrica → v2 amb estil i composició → v3 amb llum
    i45iter() {
      const W = 92, H = 120, Y = 26;
      const fr = (x, i) => { const bg = i ? wash(x, Y, W, H) : `<rect x="${x}" y="${Y}" width="${W}" height="${H}" fill="#E5E7EB"/><rect x="${x}" y="${Y + 88}" width="${W}" height="${H - 88}" fill="#CBD5E1"/>`;
        const glow = i === 2 ? `<rect x="${x}" y="${Y}" width="${W}" height="${H}" fill="url(#i45ig)"/><circle cx="${x + 76}" cy="${Y + 16}" r="8" fill="#FDE68A"/>` : '';
        const tit = i ? `<rect x="${x + 14}" y="${Y + 7}" width="${W - 28}" height="16" rx="5" fill="none" stroke="#14A3B8" stroke-width="1.6" stroke-dasharray="4 3"/>` : '';
        const f = i ? fox(x + W / 2, Y + 64, .76, { gl: 1, bk: 1 }) : fox(x + 30, Y + 80, .58, { c: '#C2410C' });
        return `<defs><clipPath id="i45i${i}"><rect x="${x}" y="${Y}" width="${W}" height="${H}" rx="8"/></clipPath></defs><g clip-path="url(#i45i${i})">${bg}${glow}${tit}${f}${i === 2 ? `<rect x="${x}" y="${Y}" width="${W}" height="${H}" fill="#F97316" opacity=".13"/>` : ''}</g><rect x="${x}" y="${Y}" width="${W}" height="${H}" rx="8" fill="none" stroke="#14204A" stroke-width="2"/>`; };
      const lab = [['v1', L('«una guineu', '«un zorro'), L('que llegeix»', 'que lee»')], ['v2', L('+ estil i', '+ estilo y'), L('composició', 'composición')], ['v3', L('+ llum i', '+ luz y'), L('límits', 'límites')]], C = ['#94A3B8', '#8B5CF6', '#F08A24'];
      return tSvg(214, `<defs><radialGradient id="i45ig" cx=".85" cy=".1" r=".95"><stop offset="0" stop-color="#FDBA74" stop-opacity=".9"/><stop offset="1" stop-color="#FDBA74" stop-opacity="0"/></radialGradient></defs>
        ${lab.map(([v, a, b], i) => { const x = 8 + i * 106; return `<g ${tA(.2 + i * .9, 'ta-pop')}><circle cx="${x + W / 2}" cy="13" r="11" fill="${C[i]}"/>${CT(x + W / 2, 17, v, 10.5, '#fff', 900)}${fr(x, i)}${CT(x + W / 2, 162, a, 10.5, '#14204A', 700)}${CT(x + W / 2, 177, b, 10.5, ['#56628A', '#6D28D9', '#C2410C'][i], 900)}</g>${i < 2 ? `<g ${tA(.6 + i * .9, 'ta-fade')}>${arrow(x + W + 2, 86, x + W + 12, 86, '#B4BEE8')}</g>` : ''}`; }).join('')}
        <g ${tA(3.1, 'ta-in')}>${box(30, 186, 260, 24, '#F3F0FF', '#D8CCFF', 12)}${CT(160, 202, L('poques peces cada vegada, i compara', 'pocas piezas cada vez, y compara'), 11, '#6D28D9')}</g>`);
    },
    // l'autoria declarada: el cartell amb l'etiqueta visible i la llista del que es declara (i mai persones reals)
    i45label() {
      const R = [[1, L('Etiqueta visible', 'Etiqueta visible')], [1, L('Eina: Canva', 'Herramienta: Canva')], [1, L('Prompt: el nostre', 'Prompt: el nuestro')], [1, L("Títol: de l'equip", 'Título: del equipo')], [1, L('Condicions mirades', 'Condiciones miradas')], [0, L('Persones reals', 'Personas reales')]];
      return tSvg(214, `<defs><clipPath id="i45lc"><rect x="8" y="6" width="140" height="202" rx="10"/></clipPath></defs>
        <g ${tA(.1, 'ta-in')}><g clip-path="url(#i45lc)">${wash(8, 6, 140, 202)}${fox(78, 104, 1.1, { gl: 1, bk: 1 })}</g><rect x="8" y="6" width="140" height="202" rx="10" fill="none" stroke="#14204A" stroke-width="2"/></g>
        <g ${tA(.6, 'ta-pop')}>${CT(78, 30, L('SETMANA DE', 'SEMANA DE'), 12, '#7C2D12', 900)}${CT(78, 46, L('LA LECTURA', 'LA LECTURA'), 12, '#7C2D12', 900)}</g>
        <g ${tA(1.1, 'ta-wob')}>${box(12, 176, 132, 24, '#FDE68A', '#F59E0B', 12)}${CT(78, 192, L('✦ Imatge generada amb IA', '✦ Imagen generada con IA'), 9.5, '#92400E', 900)}</g>
        <g ${tA(1.5, 'ta-in')}>${box(160, 6, 154, 202, '#fff', '#DCE4FA', 14)}<rect x="160" y="6" width="154" height="30" rx="14" fill="#7C3AED"/><rect x="160" y="22" width="154" height="14" fill="#7C3AED"/>${CT(237, 26, L('AUTORIA DECLARADA', 'AUTORÍA DECLARADA'), 10.5, '#fff', 900)}</g>
        ${R.map(([g, t], i) => `<g ${tA(1.8 + i * .3, 'ta-in')}>${g ? ok(178, 56 + i * 27, 8) : ko(178, 56 + i * 27, 8)}<text x="192" y="${60 + i * 27}" ${F(10.5, g ? '#14204A' : '#B91C1C', 800)}>${t}</text></g>`).join('')}`);
    }
  });
}
