/* Tech 3D · Nivell 1 · unitat 6 «Del model a l'objecte» (m6-1 … m6-4)
   Contingut propi de Numi (format: scripts/TECH-3D.md). És la unitat de la Nuvi, la impressora 3D del Taller de Bit (té ulls
   al capçal). Encàrrecs: medalles de record per a la classe de 4t de l'Escola del Turó (m6-1, capes, filament i temps), peces
   noves per al club d'escacs del barri (m6-2, base plana, res a l'aire, parets de 2 mm i voladissos), el paquet de fitxers STL
   per a l'Escola del Pont (m6-3, triangles, mida real i escala) i porta-llapis per a les taules de 6 de la classe de 3r (m6-4).
   Dades d'impressió (FDM, per a 9-12 anys): filament de PLA d'1,75 mm, broquet d'uns 0,4 mm a uns 200 °C, capes d'uns 0,2 mm
   (5 capes per mil·límetre), voladissos fins a uns 45° sense suports; l'STL només guarda la superfície amb triangles (sense
   colors ni unitats: s'entén que són mm). El motor no té cap comprovació de voladissos: s'ensenyen amb m3look i targetes.
   Models: peces { id, t, s: [x, y, z] (mm), p: CENTRE, r: graus, c, hole, g }, placa de 200 × 200 mm centrada a l'origen. */
Object.assign(TBADGE, {
  m6llapis: { id: 'm6llapis', ico: '✏️', n: 'Mestre/a de la impressió|Maestro/a de la impresión', d: "Has preparat models perquè la Nuvi els imprimeixi bé (capes, base plana, parets de 2 mm, mida real i STL) i has dissenyat un porta-llapis per a sis llapis.|Has preparado modelos para que Nuvi los imprima bien (capas, base plana, paredes de 2 mm, tamaño real y STL) y has diseñado un portalápices para seis lápices." }
});
COURSE_UNITS[6] = (() => {
  const P = (id, t, s, p, c, o = {}) => ({ id, t, s, p, r: o.r || [0, 0, 0], c, ...o });
  // B: la z que es dona és la de la BASE (com a la pestanya Posició); h és l'alçada real si la peça és girada
  const B = (id, t, s, x, y, z0, c, o = {}) => P(id, t, s, [x, y, z0 + (o.h ?? s[2]) / 2], c, o);
  const H = (id, t, s, p, o = {}) => P(id, t, s, p, '#9AA3B5', { hole: true, ...o });
  const HB = (id, t, s, x, y, z0, o = {}) => H(id, t, s, [x, y, z0 + s[2] / 2], o);
  // ---------- m6-1 · capes, filament i temps ----------
  const FITXA = h => B('a1', 'cyl', [30, 30, h], 0, 0, 0, '#F7C531');
  const TORRE = [B('p1', 'box', [30, 30, 10], 0, 0, 0, '#3D7BF4'), B('p2', 'box', [22, 22, 10], 0, 0, 10, '#2FB36D'), B('p3', 'box', [14, 14, 10], 0, 0, 20, '#F7C531')];
  // una torre de 20 mm feta de franges de 2 mm: cada franja són 10 capes de 0,2 mm
  const FRANGES = Array.from({ length: 10 }, (_, i) => B('c' + i, 'box', [24, 24, 2], 0, 0, 2 * i, i % 2 ? '#B9A7FF' : '#7C5CFF'));
  const REGLE_D = B('a1', 'box', [20, 3, 100], 0, 0, 0, '#EC5FA8');
  const REGLE_E = B('a1', 'box', [20, 100, 3], 0, 0, 0, '#EC5FA8');
  const REGLES = [B('r1', 'box', [20, 3, 100], -30, 0, 0, '#EC5FA8'), B('r2', 'box', [20, 100, 3], 25, 0, 0, '#2FB36D')];
  const MED_B = B('a1', 'cyl', [40, 40, 3], 0, 0, 0, '#F5893A');
  const MED = [MED_B, B('e1', 'star', [24, 24, 1], 0, 0, 3, '#F7C531', { n: 5 })];
  const ROBOT = [B('c1', 'box', [8, 10, 14], -7, 0, 0, '#3D7BF4'), B('c2', 'box', [8, 10, 14], 7, 0, 0, '#3D7BF4'), B('cos', 'box', [26, 14, 18], 0, 0, 14, '#7C5CFF'),
    B('cap', 'box', [18, 14, 12], 0, 0, 32, '#5BC0EB'), B('ant', 'cyl', [3, 3, 8], 0, 0, 44, '#9AA3B5'), B('bola', 'sph', [6, 6, 6], 0, 0, 51, '#E8453C')];
  // ---------- m6-2 · base plana, res a l'aire, parets i voladissos (peces d'escacs) ----------
  const BL = '#F3F3EE', NE = '#1B2B6B', OR = '#F7C531';
  const PEO = (c = BL) => [B('base', 'cyl', [22, 22, 4], 0, 0, 0, c), B('cos', 'cone', [16, 16, 20], 0, 0, 4, c), B('cap', 'sph', [12, 12, 12], 0, 0, 18, c)];
  const PEO_COL = [B('base', 'cyl', [22, 22, 4], 0, 0, 0, '#E8453C'), B('cos', 'cone', [16, 16, 20], 0, 0, 4, '#F7C531'), B('cap', 'sph', [12, 12, 12], 0, 0, 18, '#3D7BF4')];
  const PEO_GRIS = PEO('#C9CFDD');
  const PEO_SOLT = [B('base', 'cyl', [22, 22, 4], 0, 0, 0, '#E8453C'), B('cos', 'cone', [16, 16, 20], 26, 0, 0, '#F7C531'), B('cap', 'sph', [12, 12, 12], -24, 0, 0, '#3D7BF4')];
  const REINA = z => [B('base', 'cyl', [24, 24, 4], 0, 0, 0, NE), B('cos', 'cone', [18, 18, 24], 0, 0, 4, NE, { top: 0.8 }), B('coll', 'cyl', [14, 14, 3], 0, 0, 28, NE), B('corona', 'tube', [14, 14, 6], 0, 0, z, OR, { w: 2 })];
  const BOLA = z => B('bola', 'sph', [24, 24, 24], 0, 0, z, BL);
  const PEANYA = B('base', 'cyl', [22, 22, 4], 0, 0, 0, BL);
  const TORRE_E = d => [B('base', 'cyl', [24, 24, 4], 0, 0, 0, NE), B('cos', 'cyl', [20, 20, 26], 0, 0, 4, NE), HB('buit', 'cyl', [d, d, 30], 0, 0, 6)];
  const ALFIL = rx => B('a1', 'cone', [20, 20, 26], 0, 0, 0, BL, { r: [rx, 0, 0] });
  const BOLET = [B('peu', 'cyl', [10, 10, 16], 0, 0, 0, BL), B('barret', 'cyl', [34, 34, 8], 0, 0, 16, '#E8453C')];
  // ---------- m6-3 · STL, mida real i escala ----------
  const XAPA = d => B('a1', 'cyl', [d, d, d / 8], 0, 0, 0, '#2FB36D');
  const ESTEL = k => B('a1', 'star', [60 * k, 60 * k, 3 * k], 0, 0, 0, '#F7C531', { n: 5 });
  const MED50 = [B('a1', 'cyl', [50, 50, 3], 0, 0, 0, '#F5893A'), HB('f1', 'cyl', [5, 5, 20], 0, 19, 0)];
  const PEO2 = [B('base', 'cyl', [44, 44, 8], 0, 0, 0, NE), B('cos', 'cone', [32, 32, 40], 0, 0, 8, NE), B('cap', 'sph', [24, 24, 24], 0, 0, 36, NE)];
  const PEO1N = PEO(NE);
  const CAIXA = B('a1', 'box', [40, 30, 20], 0, 0, 0, '#7C5CFF');
  // ---------- m6-4 · el porta-llapis ----------
  const BLK = B('bloc', 'box', [40, 28, 40], 0, 0, 0, '#3D7BF4');
  const POS6 = [[-12, -6], [0, -6], [12, -6], [-12, 6], [0, 6], [12, 6]];
  const hp = (id, x, y, z0 = 2, h = 40) => HB(id, 'cyl', [9, 9, h], x, y, z0);
  const SIX = (z0 = 2, h = 40) => POS6.map(([x, y], i) => hp('f' + (i + 1), x, y, z0, h));
  const PORTA = [BLK, ...SIX()];
  const SAFATA = [B('saf', 'box', [40, 14, 12], 0, -21, 0, '#3D7BF4'), HB('fg', 'box', [36, 10, 12], 0, -21, 2)];
  const TALL = [...PORTA, H('tall', 'box', [50, 14, 50], [0, -13, 24])];
  const LLAPIS_C = ['#E8453C', '#F7C531', '#2FB36D', '#3D7BF4', '#EC5FA8', '#FF8A3D'];
  const llapis = (k, x, y, z0, c) => [B('l' + k, 'hex', [8, 6.93, 62], x, y, z0, c), B('p' + k, 'cone', [7, 7, 9], x, y, z0 + 62, '#E8C39E')];
  const AMB_LLAPIS = [...PORTA.map(p => ({ ...p, g: 'gb' })), ...POS6.flatMap(([x, y], i) => llapis(i + 1, x, y, 2, LLAPIS_C[i]))];
  const PROVA9 = [B('b', 'box', [24, 24, 16], -16, 0, 0, '#3D7BF4'), HB('f', 'cyl', [9, 9, 20], -16, 0, 2), ...llapis(1, 18, 0, 0, '#F7C531')];
  // tres forats tallats pel mig (es veu el tall de davant): el del mig no té fons
  const TRES = [B('bloc', 'box', [40, 16, 30], 0, 0, 0, '#2FB36D'), hp('f1', -12, 0, 2, 30), hp('f2', 0, 0, 0, 32), hp('f3', 12, 0, 2, 30), H('tall', 'box', [50, 10, 40], [0, -5, 18])];

  return {
  t: "Del model a l'objecte|Del modelo al objeto", d: 'Imprimir en 3D|Imprimir en 3D', color: '#F5893A',
  s: [
    /* ---------- Sessió 1 · Com treballa una impressora 3D ---------- */
    { id: 'm6-1', t: 'Com treballa una impressora 3D|Cómo trabaja una impresora 3D', min: 45,
      learn: ["La Nuvi fon un fil de plàstic (el filament) al broquet, a uns 200 °C, i el posa en línies fines, capa a capa, de baix a dalt.|Nuvi funde un hilo de plástico (el filamento) en la boquilla, a unos 200 °C, y lo pone en líneas finas, capa a capa, de abajo arriba.",
        "Amb capes de 0,2 mm, cada mil·límetre d'alçada són 5 capes: una peça de 20 mm en té 100.|Con capas de 0,2 mm, cada milímetro de altura son 5 capas: una pieza de 20 mm tiene 100.",
        "Com més capes i més grans, més temps. Posar la peça estirada a la placa li treu capes i la fa més estable.|Cuantas más capas y más grandes, más tiempo. Poner la pieza tumbada en la placa le quita capas y la hace más estable."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "A la unitat passada vas fer una tassa de <b>40 mm</b> per fora amb un forat de <b>36 mm</b>. Quin gruix tenia la paret?|En la unidad pasada hiciste una taza de <b>40 mm</b> por fuera con un agujero de <b>36 mm</b>. ¿Qué grosor tenía la pared?",
          opts: ['2 mm|2 mm', '4 mm|4 mm', '36 mm|36 mm'], a: 0,
          ex: "(40 − 36) ÷ 2 = 2 mm. Avui veurem per què la Nuvi necessita parets així.|(40 − 36) ÷ 2 = 2 mm. Hoy veremos por qué Nuvi necesita paredes así." },
        { k: 'quiz', ph: 'recorda', q: "Per fer una tassa amb un <b>fons de 2 mm</b>, a quina z comença el forat?|Para hacer una taza con un <b>fondo de 2 mm</b>, ¿en qué z empieza el agujero?",
          opts: ['z = 2|z = 2', 'z = 0|z = 0', 'z = 50|z = 50'], a: 0,
          ex: "Si comença a z = 2, a sota hi queden 2 mm de plàstic: el fons.|Si empieza en z = 2, debajo quedan 2 mm de plástico: el fondo." },
        { k: 'story', ph: 'missio', who: 'both', scene: 'fab', title: 'El dia de la Nuvi|El día de Nuvi',
          t: "Avui és el gran dia de la <b>Nuvi</b>! La classe de 4t de l'<b>Escola del Turó</b> ve al taller a veure com treballa una impressora 3D, i la mestra <b>Aina</b> ens ha demanat una <b>medalla de record</b> per a cada alumne. Abans de dissenyar-la, hem d'entendre com pensa la Nuvi: no fa l'objecte de cop, sinó <b>capa a capa</b>, de baix a dalt.|¡Hoy es el gran día de <b>Nuvi</b>! La clase de 4.º de la <b>Escuela del Turó</b> viene al taller a ver cómo trabaja una impresora 3D, y la maestra <b>Aina</b> nos ha pedido una <b>medalla de recuerdo</b> para cada alumno. Antes de diseñarla, tenemos que entender cómo piensa Nuvi: no hace el objeto de golpe, sino <b>capa a capa</b>, de abajo arriba." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'La Nuvi per dins|Nuvi por dentro', t: 'Del fil de plàstic a una línia fina|Del hilo de plástico a una línea fina', anim: 'm6broquet',
            x: "La Nuvi fa servir <b>filament</b>: un fil de plàstic (sovint <b>PLA</b>, fet a partir de plantes com el blat de moro) enrotllat en una bobina. Un motor l'empeny fins al <b>broquet</b>, a uns <b>200 °C</b>, que el fon. En surt una línia d'uns <b>0,4 mm</b> que s'endureix de seguida.|Nuvi usa <b>filamento</b>: un hilo de plástico (a menudo <b>PLA</b>, hecho a partir de plantas como el maíz) enrollado en una bobina. Un motor lo empuja hasta la <b>boquilla</b>, a unos <b>200 °C</b>, que lo funde. Sale una línea de unos <b>0,4 mm</b> que se endurece enseguida.",
            tip: "Compte: el broquet i la placa cremen!|¡Cuidado: la boquilla y la placa queman!" },
          { k: 'Capa a capa|Capa a capa', t: 'De baix a dalt|De abajo arriba', anim: 'm6capes',
            x: "El capçal es mou en <b>x</b> i <b>y</b> i dibuixa la primera <b>capa</b> sobre la placa. Després puja una mica, uns <b>0,2 mm</b> en <b>z</b>, i dibuixa la capa següent a sobre. Capa a capa, de baix a dalt, l'objecte va creixent.|El cabezal se mueve en <b>x</b> e <b>y</b> y dibuja la primera <b>capa</b> sobre la placa. Después sube un poco, unos <b>0,2 mm</b> en <b>z</b>, y dibuja la capa siguiente encima. Capa a capa, de abajo arriba, el objeto va creciendo.",
            tip: "Per això cada capa necessita alguna cosa a sota que l'aguanti.|Por eso cada capa necesita algo debajo que la aguante." },
          { k: 'Quantes capes?|¿Cuántas capas?', t: 'Cada mil·límetre, 5 capes|Cada milímetro, 5 capas', media: { k: 'model', model: { parts: FRANGES } },
            x: "Si cada capa fa 0,2 mm, en un mil·límetre n'hi caben <b>5</b>. Aquesta torre fa <b>20 mm</b>: 20 × 5 = <b>100 capes</b>. Cada franja de color del dibuix són 10 capes de veritat.|Si cada capa mide 0,2 mm, en un milímetro caben <b>5</b>. Esta torre mide <b>20 mm</b>: 20 × 5 = <b>100 capas</b>. Cada franja de color del dibujo son 10 capas de verdad.",
            tip: 'Truc: alçada en mm × 5 = nombre de capes.|Truco: altura en mm × 5 = número de capas.' },
          { k: 'Quant tardarà?|¿Cuánto tardará?', t: 'Més capes, més temps|Más capas, más tiempo', anim: 'm6temps',
            x: "Cada capa tarda una estona, i com més gran, més. Un clauer es fa en menys d'una hora; un porta-llapis, en unes quantes hores. Capes <b>gruixudes</b> (0,3 mm): més de pressa, però es noten les ratlles. Capes <b>fines</b> (0,1 mm): més llis, però més lent.|Cada capa tarda un rato, y cuanto más grande, más. Un llavero se hace en menos de una hora; un portalápices, en unas cuantas horas. Capas <b>gruesas</b> (0,3 mm): más rápido, pero se notan las rayas. Capas <b>finas</b> (0,1 mm): más liso, pero más lento.",
            tip: "Per dins no ho omple tot: hi fa una quadrícula.|Por dentro no lo rellena todo: hace una cuadrícula." },
          { k: 'Dret o estirat?|¿De pie o tumbado?', t: 'La mateixa peça, menys capes|La misma pieza, menos capas', media: { k: 'model', model: { parts: REGLES } },
            x: "Un regle de 100 mm <b>dret</b> té 500 capes i és alt i prim: es podria tombar mentre s'imprimeix. <b>Estirat</b> en té només 15 i tota la cara recolza a la placa. Pensar com posem la peça a la placa també és dissenyar!|Una regla de 100 mm <b>de pie</b> tiene 500 capas y es alta y delgada: se podría caer mientras se imprime. <b>Tumbada</b> solo tiene 15 y toda la cara se apoya en la placa. ¡Pensar cómo ponemos la pieza en la placa también es diseñar!" }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🟣', title: 'Imprimeix amb plastilina|Imprime con plastilina', t: 'Fes de Nuvi! Amb plastilina, una cartolina (la placa) i un regle:|¡Haz de Nuvi! Con plastilina, una cartulina (la placa) y una regla:',
          steps: ["Fes un «filament»: un xurro de plastilina tan prim com puguis.|Haz un «filamento»: un churro de plastilina tan fino como puedas.",
            "Capa 1: posa el xurro en forma de cercle sobre la cartolina.|Capa 1: pon el churro en forma de círculo sobre la cartulina.",
            "Posa la capa 2 just a sobre de la primera, i així fins a 6 capes: tens un gotet!|Pon la capa 2 justo encima de la primera, y así hasta 6 capas: ¡tienes un vasito!",
            "Mesura l'alçada i divideix-la entre 6: quant fa cada capa? La Nuvi les fa de 0,2 mm!|Mide la altura y divídela entre 6: ¿cuánto mide cada capa? ¡Nuvi las hace de 0,2 mm!"],
          tip: "Prova de posar una capa una mica cap enfora: aguanta? I si la treus molt?|Prueba a poner una capa un poco hacia fuera: ¿aguanta? ¿Y si la sacas mucho?" },
        { k: 'm3look', ph: 'prova', q: "Aquesta torre fa <b>30 mm</b> d'alçada. Quantes capes de 0,2 mm farà la Nuvi?|Esta torre mide <b>30 mm</b> de altura. ¿Cuántas capas de 0,2 mm hará Nuvi?",
          model: { parts: TORRE }, opts: ['150 capes|150 capas', '30 capes|30 capas', '6 capes|6 capas'], a: 0,
          ex: "30 × 5 = 150: cada mil·límetre són 5 capes de 0,2 mm.|30 × 5 = 150: cada milímetro son 5 capas de 0,2 mm." },
        { k: 'm3look', ph: 'investiga', q: "La Nuvi imprimeix de baix a dalt. Toca la peça que començarà a fer <b>l'última</b>.|Nuvi imprime de abajo arriba. Toca la pieza que empezará a hacer <b>la última</b>.",
          model: { parts: ROBOT }, pick: 'bola', yes: "Exacte: la bola comença més amunt que totes les altres!|¡Exacto: la bola empieza más arriba que todas las demás!", no: "Aquesta comença més avall: la Nuvi hi arribarà abans. Busca la que comença més amunt.|Esta empieza más abajo: Nuvi llegará antes. Busca la que empieza más arriba.",
          ex: "Primer fa les cames, després el cos, el cap, l'antena i, al final, la bola.|Primero hace las piernas, después el cuerpo, la cabeza, la antena y, al final, la bola." },
        { k: 'move', ph: 'pausa', title: 'Fes de capçal|Haz de cabezal', secs: 30, t: "Ajup-te ben avall: ets a la capa 1. Dibuixa un cercle a l'aire amb el dit i puja una mica. Una altra capa, una mica més amunt… Quan siguis ben dret, hauràs imprès tot l'objecte!|Agáchate bien abajo: estás en la capa 1. Dibuja un círculo en el aire con el dedo y sube un poco. Otra capa, un poco más arriba… ¡Cuando estés bien de pie, habrás impreso todo el objeto!" },
        { k: 'm3fix', ph: 'repte', q: "La mestra vol fitxes primes, de <b>10 capes</b>. Aquesta en té 30! Fes-la de 10 capes: quants mil·límetres són?|La maestra quiere fichas finas, de <b>10 capas</b>. ¡Esta tiene 30! Hazla de 10 capas: ¿cuántos milímetros son?",
          start: { parts: [FITXA(6)] }, fix: ['a1'], palette: ['cyl'],
          checks: [{ k: 'size', ax: 'z', v: 2, tol: 0.1, t: "Té 10 capes: 2 mm d'alçada|Tiene 10 capas: 2 mm de altura" }, { k: 'flatbase', min: 500, t: 'Tota la base toca la placa|Toda la base toca la placa' }],
          hint: "10 capes × 0,2 mm = 2 mm. La fitxa ja està seleccionada: a Mida, posa 2 a la z.|10 capas × 0,2 mm = 2 mm. La ficha ya está seleccionada: en Medida, pon 2 en la z.",
          sol: { parts: [FITXA(2)] } },
        { k: 'm3build', ph: 'repte', q: "Una torre de tres pisos de <b>50 capes</b> cadascun. Posa-hi a sobre una caixa de <b>22 × 22</b> i una de <b>14 × 14</b>.|Una torre de tres pisos de <b>50 capas</b> cada uno. Ponle encima una caja de <b>22 × 22</b> y una de <b>14 × 14</b>.",
          start: { parts: [TORRE[0]] }, palette: ['box'], target: { parts: TORRE },
          checks: [{ k: 'size', ax: 'z', v: 30, tol: 0.2, t: 'Té 150 capes: 30 mm en total|Tiene 150 capas: 30 mm en total' }, { k: 'match', target: { parts: TORRE }, th: 0.9, t: 'Els pisos són com el fantasma|Los pisos son como el fantasma' }, { k: 'one' }],
          hint: "50 capes = 10 mm. Caixa de 22 × 22 × 10 mm a z = 10 i caixa de 14 × 14 × 10 mm a z = 20, totes dues a x = 0, y = 0.|50 capas = 10 mm. Caja de 22 × 22 × 10 mm en z = 10 y caja de 14 × 14 × 10 mm en z = 20, las dos en x = 0, y = 0.",
          sol: { parts: TORRE } },
        { k: 'm3fix', ph: 'repte', q: "Dret, aquest <b>regle</b> de 100 mm té 500 capes i es pot tombar. <b>Estira'l</b>: que en tingui només 15 (3 mm).|De pie, esta <b>regla</b> de 100 mm tiene 500 capas y se puede caer. <b>Túmbala</b>: que tenga solo 15 (3 mm).",
          start: { parts: [REGLE_D] }, fix: ['a1'], palette: ['box'],
          checks: [{ k: 'zmax', v: 3, t: "Té 15 capes: 3 mm d'alçada|Tiene 15 capas: 3 mm de altura" }, { k: 'flatbase', min: 1500, t: 'Tota la cara llarga recolza a la placa|Toda la cara larga se apoya en la placa' }],
          hint: "El regle ja està seleccionat: a Gir, posa x = 90. S'estirarà cap enrere.|La regla ya está seleccionada: en Giro, pon x = 90. Se tumbará hacia atrás.",
          sol: { parts: [REGLE_E] } },
        { k: 'm3build', ph: 'repte', extra: true, q: "Una medalla de <b>20 capes</b>. La base en té 15 (3 mm). Posa-hi a sobre una <b>estrella</b> de 24 mm amb les <b>5 capes</b> que falten.|Una medalla de <b>20 capas</b>. La base tiene 15 (3 mm). Ponle encima una <b>estrella</b> de 24 mm con las <b>5 capas</b> que faltan.",
          start: { parts: [MED_B] }, palette: ['star'], target: { parts: MED },
          checks: [{ k: 'count', t: 'star', min: 1, txt: 'Hi ha una estrella|Hay una estrella' }, { k: 'size', ax: 'z', v: 4, tol: 0.1, t: 'Té 20 capes: 4 mm en total|Tiene 20 capas: 4 mm en total' }, { k: 'match', target: { parts: MED }, th: 0.97, t: "L'estrella és com el fantasma|La estrella es como el fantasma" }, { k: 'one' }],
          hint: "5 capes = 1 mm. Estrella: a Mida, 24, 24 i 1. A Posició, x = 0, y = 0, z = 3 (just a sobre de la base).|5 capas = 1 mm. Estrella: en Medida, 24, 24 y 1. En Posición, x = 0, y = 0, z = 3 (justo encima de la base).",
          sol: { parts: MED } },
        { k: 'm3free', ph: 'crea', q: "<b>La medalla del Taller.</b> La teva medalla de record: un dibuix en relleu o gravat i com a molt <b>20 capes</b>.|<b>La medalla del Taller.</b> Tu medalla de recuerdo: un dibujo en relieve o grabado y como mucho <b>20 capas</b>.",
          name: 'La meva medalla|Mi medalla', palette: ['cyl', 'box', 'star', 'heart', 'hex', 'torus', 'hcyl', 'hbox'],
          crit: ['Fa com a molt 20 capes (4 mm)|Tiene como mucho 20 capas (4 mm)', "Té una base plana: la primera capa s'enganxa bé a la placa|Tiene una base plana: la primera capa se pega bien a la placa", 'Té un dibuix en relleu o gravat|Tiene un dibujo en relieve o grabado'],
          checks: [{ k: 'zmax', v: 4, t: 'Com a molt 20 capes (4 mm)|Como mucho 20 capas (4 mm)' }, { k: 'flatbase', min: 300, t: 'Té una base plana|Tiene una base plana' }, { k: 'one' }, { k: 'onplate' }],
          sol: { parts: MED } },
        { k: 'quiz', ph: 'tanca', q: "Una peça fa <b>10 mm</b> d'alçada i les capes fan 0,2 mm. Quantes capes té?|Una pieza mide <b>10 mm</b> de altura y las capas miden 0,2 mm. ¿Cuántas capas tiene?", opts: ['50|50', '10|10', '2|2'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Què fa la Nuvi quan acaba una capa?|¿Qué hace Nuvi cuando acaba una capa?", opts: ['Puja una mica i fa la capa següent a sobre|Sube un poco y hace la capa siguiente encima', 'Torna a començar des de la placa|Vuelve a empezar desde la placa', 'Fa la capa de dalt de tot|Hace la capa de arriba del todo'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 2 · Gruix i base plana ---------- */
    { id: 'm6-2', t: 'Gruix i base plana|Grosor y base plana', min: 45,
      learn: ["Una peça s'imprimeix bé si té una base plana a la placa i totes les parts s'aguanten sobre alguna cosa: res no pot flotar.|Una pieza se imprime bien si tiene una base plana en la placa y todas las partes se aguantan sobre algo: nada puede flotar.",
        "Les parets han de fer almenys 2 mm: el broquet fa línies d'uns 0,4 mm i una paret més prima seria fràgil.|Las paredes tienen que medir al menos 2 mm: la boquilla hace líneas de unos 0,4 mm y una pared más fina sería frágil.",
        "Una paret pot sortir cap enfora fins a uns 45°; si surt més, la impressora necessita suports que després es treuen.|Una pared puede salir hacia fuera hasta unos 45°; si sale más, la impresora necesita soportes que después se quitan."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Una medalla fa <b>4 mm</b> de gruix. Quantes capes de 0,2 mm té?|Una medalla mide <b>4 mm</b> de grosor. ¿Cuántas capas de 0,2 mm tiene?",
          opts: ['20|20', '4|4', '40|40'], a: 0, ex: '4 × 5 = 20 capes.|4 × 5 = 20 capas.' },
        { k: 'quiz', ph: 'recorda', q: "Per on comença a imprimir la Nuvi?|¿Por dónde empieza a imprimir Nuvi?",
          opts: ['Per la capa de baix, a tocar de la placa|Por la capa de abajo, pegada a la placa', 'Per la part més alta|Por la parte más alta', 'Per la peça més gran|Por la pieza más grande'], a: 0,
          ex: "Cada capa s'aguanta sobre la de sota: per això tot comença a la placa.|Cada capa se aguanta sobre la de debajo: por eso todo empieza en la placa." },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: "El club d'escacs|El club de ajedrez",
          t: "En <b>Ferran</b>, del <b>club d'escacs</b> del barri, té un problema: s'han perdut peces i els nens i nenes del club n'han dissenyat de noves perquè les faci la Nuvi. Però la Nuvi ha mirat els models i ha arrufat les celles: una peça <b>rodola</b>, una corona <b>flota</b> i una torre té les parets tan <b>primes</b> com un full. Avui aprendrem a revisar un model abans d'imprimir-lo!|<b>Ferran</b>, del <b>club de ajedrez</b> del barrio, tiene un problema: se han perdido piezas y los niños y niñas del club han diseñado otras nuevas para que las haga Nuvi. Pero Nuvi ha mirado los modelos y ha fruncido el ceño: una pieza <b>rueda</b>, una corona <b>flota</b> y una torre tiene las paredes tan <b>finas</b> como una hoja. ¡Hoy aprenderemos a revisar un modelo antes de imprimirlo!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Base plana|Base plana', t: "La primera capa s'ha d'enganxar|La primera capa se tiene que pegar", anim: 'm6base',
            x: "Tot comença amb la primera capa, que s'ha d'<b>enganxar</b> bé a la placa. Una <b>base plana</b> i ampla s'hi aguanta ferma; una bola només la toca en un puntet i es mouria.|Todo empieza con la primera capa, que se tiene que <b>pegar</b> bien a la placa. Una <b>base plana</b> y ancha se aguanta firme; una bola solo la toca en un puntito y se movería.",
            tip: "Si una peça és rodona per sota, posa-li una peanya o gira-la perquè recolzi una cara plana.|Si una pieza es redonda por debajo, ponle una peana o gírala para que apoye una cara plana." },
          { k: "Res a l'aire|Nada en el aire", t: 'Cada capa necessita una capa a sota|Cada capa necesita una capa debajo', anim: 'm6flota',
            x: "La Nuvi no pot posar plàstic a l'aire: cauria i faria un embolic de fils, com un plat d'espaguetis. Totes les parts han de tocar la placa o una altra part. Una corona que flota 3 mm per sobre del cap no es pot imprimir.|Nuvi no puede poner plástico en el aire: caería y haría un lío de hilos, como un plato de espaguetis. Todas las partes tienen que tocar la placa u otra parte. Una corona que flota 3 mm por encima de la cabeza no se puede imprimir.",
            tip: "La comprovació «És una sola peça» avisa si hi ha trossos solts.|La comprobación «Es una sola pieza» avisa si hay trozos sueltos." },
          { k: 'Parets prou gruixudes|Paredes bastante gruesas', t: 'Almenys 2 mm|Al menos 2 mm', anim: 'm6paret',
            x: "El broquet fa línies d'uns <b>0,4 mm</b>. Una paret de <b>0,5 mm</b> és una sola línia: és fràgil. Una de <b>2 mm</b> són unes 5 línies juntes: és forta. Al taller, cap paret no fa menys de 2 mm.|La boquilla hace líneas de unos <b>0,4 mm</b>. Una pared de <b>0,5 mm</b> es una sola línea: es frágil. Una de <b>2 mm</b> son unas 5 líneas juntas: es fuerte. En el taller, ninguna pared mide menos de 2 mm.",
            tip: "Les puntes molt fines (d'un con o d'una estrella) també són primes.|Las puntas muy finas (de un cono o de una estrella) también son finas." },
          { k: 'Voladissos|Voladizos', t: 'Fins a 45°, sense ajuda|Hasta 45°, sin ayuda', anim: 'm6volad',
            x: "Cada capa pot sortir <b>una mica</b> més enfora que la de sota, perquè s'hi recolza en part: fins a uns <b>45°</b> va bé. Si surt més, com el barret d'un bolet, calen <b>suports</b>: columnes de plàstic que després es treuen.|Cada capa puede salir <b>un poco</b> más hacia fuera que la de debajo, porque se apoya en parte en ella: hasta unos <b>45°</b> va bien. Si sale más, como el sombrero de una seta, hacen falta <b>soportes</b>: columnas de plástico que después se quitan.",
            tip: "El taller no comprova els voladissos: mira el model de costat.|El taller no comprueba los voladizos: mira el modelo de lado." },
          { k: 'La revisió|La revisión', t: "Quatre preguntes abans d'imprimir|Cuatro preguntas antes de imprimir", media: { k: 'model', model: { parts: PEO() } },
            x: "1) Toca la placa amb una base plana? 2) És una sola peça? 3) Cap paret fa menys de 2 mm? 4) Hi ha voladissos de més de 45°? Les tres primeres te les marca el taller; la quarta, mira-la tu de costat. Aquest peó les passa totes!|1) ¿Toca la placa con una base plana? 2) ¿Es una sola pieza? 3) ¿Alguna pared mide menos de 2 mm? 4) ¿Hay voladizos de más de 45°? Las tres primeras te las marca el taller; la cuarta, mírala tú de lado. ¡Este peón las pasa todas!" }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🪙', title: "L'escala de monedes|La escalera de monedas", t: 'Amb 10 monedes iguals, una pilota petita i un got de plàstic:|Con 10 monedas iguales, una pelota pequeña y un vaso de plástico:',
          steps: ["Posa la pilota i el got a sobre de la taula i toca'ls una mica. Quin es queda quiet? Per què?|Pon la pelota y el vaso encima de la mesa y tócalos un poco. ¿Cuál se queda quieto? ¿Por qué?",
            "Apila les monedes fent una escala: cada una sobresurt una mica més que la de sota.|Apila las monedas haciendo una escalera: cada una sobresale un poco más que la de debajo.",
            "Prova salts petits i salts grans. Amb quins salts la torre cau abans?|Prueba saltos pequeños y saltos grandes. ¿Con qué saltos la torre se cae antes?",
            "Ara fes salts tan llargs com el gruix d'una moneda: l'escala puja a 45°.|Ahora haz saltos tan largos como el grosor de una moneda: la escalera sube a 45°."],
          tip: "Les capes de la Nuvi són com les monedes: cada una s'ha de recolzar en part sobre la de sota.|Las capas de Nuvi son como las monedas: cada una se tiene que apoyar en parte sobre la de debajo." },
        { k: 'm3look', ph: 'prova', q: "Quina d'aquestes peces s'enganxarà millor a la placa?|¿Cuál de estas piezas se pegará mejor a la placa?",
          model: { parts: [B('a', 'cyl', [22, 22, 26], -40, 0, 0, BL), B('b', 'sph', [24, 24, 24], 0, 0, 0, BL), B('c', 'cone', [20, 20, 26], 40, 0, 0, BL, { r: [180, 0, 0] })] },
          opts: [{ model: { parts: [B('a', 'cyl', [22, 22, 26], 0, 0, 0, BL)] } }, { model: { parts: [BOLA(0)] } }, { model: { parts: [ALFIL(180)] } }], a: 0,
          ex: "Només el cilindre recolza tota la base a la placa.|Solo el cilindro apoya toda la base en la placa." },
        { k: 'm3look', ph: 'investiga', q: "Quin d'aquests models necessitarà <b>suports</b> per imprimir-se?|¿Cuál de estos modelos necesitará <b>soportes</b> para imprimirse?",
          model: { parts: BOLET }, opts: [{ model: { parts: BOLET } }, { model: { parts: [B('a', 'pyr', [30, 30, 30], 0, 0, 0, '#2FB36D')] } }, { model: { parts: [B('a', 'cone', [30, 30, 30], 0, 0, 0, '#3D7BF4', { top: 0.3 })] } }], a: 0,
          ex: "El barret surt en horitzontal: no es pot fer a l'aire.|El sombrero sale en horizontal: no se puede hacer en el aire." },
        { k: 'move', ph: 'pausa', title: "Peus d'impressora|Pies de impresora", secs: 30, t: "Posa't dret amb els peus junts i després amb un sol peu: costa aguantar-se! Ara obre bé les cames: base ampla, molt més estable. Per acabar, inclina't endavant a poc a poc… fins on arribes sense caure?|Ponte de pie con los pies juntos y después con un solo pie: ¡cuesta aguantarse! Ahora abre bien las piernas: base ancha, mucho más estable. Para acabar, inclínate hacia delante poco a poco… ¿hasta dónde llegas sin caerte?" },
        { k: 'm3fix', ph: 'repte', q: "La <b>corona de la reina</b> flota 3 mm per sobre del coll: la Nuvi l'imprimiria a l'aire! <b>Baixa-la</b> fins al coll.|La <b>corona de la reina</b> flota 3 mm por encima del cuello: ¡Nuvi la imprimiría en el aire! <b>Bájala</b> hasta el cuello.",
          start: { parts: REINA(34) }, fix: ['corona'], palette: ['tube'],
          checks: [{ k: 'one', t: 'Tot està enganxat: res no flota|Todo está pegado: nada flota' }, { k: 'zmax', v: 37, t: 'La corona recolza al coll (37 mm en total)|La corona se apoya en el cuello (37 mm en total)' }, { k: 'onplate' }],
          hint: "La corona ja està seleccionada. El coll s'acaba a 31 mm: a Posició, posa z = 31.|La corona ya está seleccionada. El cuello acaba a 31 mm: en Posición, pon z = 31.",
          sol: { parts: REINA(31) } },
        { k: 'm3fix', ph: 'repte', q: "Aquest <b>peó de bola</b> rodolaria: només toca la placa en un punt. Posa-li una <b>peanya</b>, un cilindre pla a sota.|Este <b>peón de bola</b> rodaría: solo toca la placa en un punto. Ponle una <b>peana</b>, un cilindro plano debajo.",
          start: { parts: [BOLA(0)] }, fix: ['bola'], palette: ['cyl'],
          checks: [{ k: 'flatbase', min: 250, t: 'Té una base plana i ampla|Tiene una base plana y ancha' }, { k: 'one', t: 'La bola i la peanya estan enganxades|La bola y la peana están pegadas' }, { k: 'onplate' }],
          hint: "Primer puja la bola: a Posició, z = 3. Després afegeix un cilindre de 22 × 22 × 4 mm a x = 0, y = 0, z = 0.|Primero sube la bola: en Posición, z = 3. Después añade un cilindro de 22 × 22 × 4 mm en x = 0, y = 0, z = 0.",
          sol: { parts: [BOLA(3), PEANYA] } },
        { k: 'm3fix', ph: 'repte', q: "Les parets d'aquesta <b>torre</b> buida fan <b>0,5 mm</b>: es trencarien! Fes el forat de <b>16 mm</b> perquè en facin 2.|Las paredes de esta <b>torre</b> hueca miden <b>0,5 mm</b>: ¡se romperían! Haz el agujero de <b>16 mm</b> para que midan 2.",
          start: { parts: TORRE_E(19) }, fix: ['buit'], palette: ['hcyl'],
          checks: [{ k: 'wall', min: 1.8, t: 'Cap paret fa menys de 2 mm|Ninguna pared mide menos de 2 mm' }, { k: 'hole', t: 'Continua buida per dins|Sigue hueca por dentro' }, { k: 'one' }],
          hint: "El forat ja està seleccionat: a Mida, posa 16 a la x i 16 a la y. Les parets faran (20 − 16) ÷ 2 = 2 mm.|El agujero ya está seleccionado: en Medida, pon 16 en la x y 16 en la y. Las paredes medirán (20 − 16) ÷ 2 = 2 mm.",
          sol: { parts: TORRE_E(16) } },
        { k: 'm3build', ph: 'repte', q: "Ara un <b>peó</b> que passi la revisió: posa sobre la peanya un <b>con</b> de 16 × 16 × 20 mm i una <b>esfera</b> de 12 mm.|Ahora un <b>peón</b> que pase la revisión: pon sobre la peana un <b>cono</b> de 16 × 16 × 20 mm y una <b>esfera</b> de 12 mm.",
          start: { parts: [PEANYA] }, palette: ['cone', 'sph'], target: { parts: PEO() },
          checks: [{ k: 'match', target: { parts: PEO() }, th: 0.9, t: "S'assembla al peó fantasma|Se parece al peón fantasma" }, { k: 'one' }, { k: 'flatbase', min: 250, t: 'Té una base plana|Tiene una base plana' }, { k: 'wall', min: 1.8, t: 'Cap part fa menys de 2 mm|Ninguna parte mide menos de 2 mm' }],
          hint: "Con: a Mida, 16, 16 i 20; a Posició, x = 0, y = 0, z = 4. Esfera: a Mida, 12, 12 i 12; a Posició, x = 0, y = 0, z = 18 (així tapa la punta del con).|Cono: en Medida, 16, 16 y 20; en Posición, x = 0, y = 0, z = 4. Esfera: en Medida, 12, 12 y 12; en Posición, x = 0, y = 0, z = 18 (así tapa la punta del cono).",
          sol: { parts: PEO() } },
        { k: 'm3fix', ph: 'repte', extra: true, q: "El con de l'<b>alfil</b> és cap per avall: tot és un voladís i toca la placa en un punt. <b>Gira'l</b> perquè recolzi la base!|El cono del <b>alfil</b> está boca abajo: todo es un voladizo y toca la placa en un punto. ¡<b>Gíralo</b> para que apoye la base!",
          start: { parts: [ALFIL(180)] }, fix: ['a1'], palette: ['cone'],
          checks: [{ k: 'flatbase', min: 250, t: 'Recolza la base plana a la placa|Apoya la base plana en la placa' }, { k: 'onplate' }],
          hint: "El con ja està seleccionat: a Gir, posa x = 0 i la punta quedarà amunt.|El cono ya está seleccionado: en Giro, pon x = 0 y la punta quedará arriba.",
          sol: { parts: [ALFIL(0)] } },
        { k: 'm3free', ph: 'crea', q: "<b>La meva peça d'escacs.</b> Una peça nova per al club (o inventada!) que passi la revisió de la Nuvi.|<b>Mi pieza de ajedrez.</b> Una pieza nueva para el club (¡o inventada!) que pase la revisión de Nuvi.",
          name: "La meva peça d'escacs|Mi pieza de ajedrez", palette: ['cyl', 'cone', 'sph', 'box', 'hex', 'torus', 'pyr', 'star', 'hcyl'],
          crit: ['Té una base plana i ampla|Tiene una base plana y ancha', "Totes les parts s'aguanten: res a l'aire ni voladissos de més de 45°|Todas las partes se aguantan: nada en el aire ni voladizos de más de 45°", 'Cap paret ni part fa menys de 2 mm|Ninguna pared ni parte mide menos de 2 mm'],
          checks: [{ k: 'flatbase', min: 200, t: 'Té una base plana|Tiene una base plana' }, { k: 'one' }, { k: 'onplate' }, { k: 'wall', min: 1.8, t: 'Cap paret fa menys de 2 mm|Ninguna pared mide menos de 2 mm' }, { k: 'count', min: 3, txt: 'Té almenys 3 peces|Tiene al menos 3 piezas' }],
          sol: { parts: PEO(NE) } },
        { k: 'quiz', ph: 'tanca', q: "Per què una bola sola no és una bona base per imprimir?|¿Por qué una bola sola no es una buena base para imprimir?", opts: ["Perquè només toca la placa en un punt i la primera capa no s'enganxa bé|Porque solo toca la placa en un punto y la primera capa no se pega bien", 'Perquè les boles no es poden imprimir|Porque las bolas no se pueden imprimir', 'Perquè gasta massa plàstic|Porque gasta demasiado plástico'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Fins a quin angle pot sortir cap enfora una paret sense suports?|¿Hasta qué ángulo puede salir hacia fuera una pared sin soportes?", opts: ['Fins a uns 45°|Hasta unos 45°', 'Fins a 90°: pot sortir en horitzontal|Hasta 90°: puede salir en horizontal', 'Cap: ha de ser sempre recta|Ninguno: tiene que ser siempre recta'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 3 · Exportar el fitxer STL ---------- */
    { id: 'm6-3', t: 'Exportar el fitxer STL|Exportar el archivo STL', min: 45,
      learn: ["Un fitxer STL descriu la superfície del model amb triangles: un cub en té 12 i les corbes en necessiten molts.|Un archivo STL describe la superficie del modelo con triángulos: un cubo tiene 12 y las curvas necesitan muchos.",
        "L'STL només guarda la forma: no té colors ni unitats, i els programes d'impressió entenen que els números són mil·límetres.|El STL solo guarda la forma: no tiene colores ni unidades, y los programas de impresión entienden que los números son milímetros.",
        "Escalar és multiplicar totes les mides pel mateix número: amb Proporcional, la peça canvia de mida sense deformar-se.|Escalar es multiplicar todas las medidas por el mismo número: con Proporcional, la pieza cambia de tamaño sin deformarse."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Una corona flota 3 mm per sobre del cap d'una peça. Què passarà quan la Nuvi la imprimeixi?|Una corona flota 3 mm por encima de la cabeza de una pieza. ¿Qué pasará cuando Nuvi la imprima?",
          opts: ["El plàstic caurà: no es pot imprimir a l'aire|El plástico caerá: no se puede imprimir en el aire", 'Sortirà igual, enganxada sola|Saldrá igual, pegada sola', 'La Nuvi la farà més gran|Nuvi la hará más grande'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: "Quin gruix mínim de paret fem servir al taller?|¿Qué grosor mínimo de pared usamos en el taller?",
          opts: ['2 mm|2 mm', '0,4 mm|0,4 mm', '10 mm|10 mm'], a: 0, ex: "0,4 mm és una sola línia del broquet: massa fràgil. 2 mm són unes 5 línies.|0,4 mm es una sola línea de la boquilla: demasiado frágil. 2 mm son unas 5 líneas." },
        { k: 'story', ph: 'missio', who: 'both', scene: 'fab', title: "Un paquet per a l'Escola del Pont|Un paquete para la Escuela del Puente",
          t: "La <b>Lídia</b>, mestra de l'<b>Escola del Pont</b>, d'un poble del costat, ha vist les nostres peces d'escacs i en vol per a la seva escola. Ells també tenen una impressora 3D! No els podem portar la Nuvi… però els podem enviar el disseny en un fitxer <b>STL</b>. Avui descobrirem què hi ha dins d'un STL i com ens assegurem que surt a la <b>mida real</b>.|<b>Lídia</b>, maestra de la <b>Escuela del Puente</b>, de un pueblo de al lado, ha visto nuestras piezas de ajedrez y quiere para su escuela. ¡Ellos también tienen una impresora 3D! No les podemos llevar a Nuvi… pero les podemos enviar el diseño en un archivo <b>STL</b>. Hoy descubriremos qué hay dentro de un STL y cómo nos aseguramos de que sale a <b>tamaño real</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Què és un STL?|¿Qué es un STL?', t: 'La forma, feta de triangles|La forma, hecha de triángulos', anim: 'm6stl',
            x: "Un fitxer <b>STL</b> descriu la <b>superfície</b> del model amb molts <b>triangles</b> enganxats, com un mosaic. Cada cara plana es parteix en triangles: un cub en té <b>12</b>, 2 a cada una de les 6 cares. Gairebé tots els programes d'impressió 3D saben obrir-lo.|Un archivo <b>STL</b> describe la <b>superficie</b> del modelo con muchos <b>triángulos</b> pegados, como un mosaico. Cada cara plana se parte en triángulos: un cubo tiene <b>12</b>, 2 en cada una de las 6 caras. Casi todos los programas de impresión 3D saben abrirlo." },
          { k: 'Corbes amb triangles|Curvas con triángulos', t: 'Com més triangles, més rodó|Cuantos más triángulos, más redondo', anim: 'm6corba',
            x: "Una corba no es pot fer amb triangles plans… si no és amb <b>molts</b> de petits! Un cilindre es converteix en un prisma de moltes cares. Com més triangles, més rodó queda, però el fitxer ocupa més.|Una curva no se puede hacer con triángulos planos… ¡si no es con <b>muchos</b> pequeños! Un cilindro se convierte en un prisma de muchas caras. Cuantos más triángulos, más redondo queda, pero el archivo ocupa más." },
          { k: 'Només la forma|Solo la forma', t: 'Ni colors ni unitats|Ni colores ni unidades', media: { k: 'model', model: { parts: PEO_COL } },
            x: "L'STL només guarda la <b>forma</b>. No sap de quin <b>color</b> és cada peça: sortirà del color del filament que posis a la impressora. Tampoc no diu en quines <b>unitats</b> està: els programes d'impressió entenen que els números són <b>mil·límetres</b>.|El STL solo guarda la <b>forma</b>. No sabe de qué <b>color</b> es cada pieza: saldrá del color del filamento que pongas en la impresora. Tampoco dice en qué <b>unidades</b> está: los programas de impresión entienden que los números son <b>milímetros</b>.",
            tip: "Per això al taller dissenyem sempre a mida real, en mm.|Por eso en el taller diseñamos siempre a tamaño real, en mm." },
          { k: 'Mida real i escala|Tamaño real y escala', t: 'Tot es multiplica pel mateix número|Todo se multiplica por el mismo número', anim: 'm6escala',
            x: "Si algú dissenya pensant en <b>centímetres</b>, la peça sortirà <b>10 vegades</b> més petita! Per canviar la mida sense deformar-la, l'<b>escalem</b>: totes les mides es multipliquen pel mateix número. Al taller, el botó <b>Proporcional</b> ho fa per tu.|Si alguien diseña pensando en <b>centímetros</b>, ¡la pieza saldrá <b>10 veces</b> más pequeña! Para cambiar el tamaño sin deformarla, la <b>escalamos</b>: todas las medidas se multiplican por el mismo número. En el taller, el botón <b>Proporcional</b> lo hace por ti.",
            tip: "Compte: el doble de llarg, d'ample i d'alt gasta 8 vegades més plàstic (2 × 2 × 2).|Cuidado: el doble de largo, de ancho y de alto gasta 8 veces más plástico (2 × 2 × 2)." },
          { k: "Del fitxer a l'objecte|Del archivo al objeto", t: 'El camí del disseny|El camino del diseño', anim: 'm6cami',
            x: "1) Dissenyes el model al taller. 2) El botó <b>STL</b> en descarrega el fitxer. 3) Un programa <b>laminador</b> el talla en capes i calcula per on ha de passar el broquet. 4) La impressora fa l'objecte capa a capa.|1) Diseñas el modelo en el taller. 2) El botón <b>STL</b> descarga el archivo. 3) Un programa <b>laminador</b> lo corta en capas y calcula por dónde tiene que pasar la boquilla. 4) La impresora hace el objeto capa a capa.",
            tip: "Els projectes desats també tenen el botó STL, a «Projectes».|Los proyectos guardados también tienen el botón STL, en «Proyectos»." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🔺', title: 'El cub de 12 triangles|El cubo de 12 triángulos', t: 'Amb paper quadriculat, tisores, cola i un retolador:|Con papel cuadriculado, tijeras, pegamento y un rotulador:',
          steps: ["Dibuixa el desenvolupament d'un cub: 6 quadrats iguals en forma de creu. Retalla'l.|Dibuja el desarrollo de un cubo: 6 cuadrados iguales en forma de cruz. Recórtalo.",
            'A cada quadrat, traça-hi una diagonal. Quants triangles hi ha en total?|En cada cuadrado, traza una diagonal. ¿Cuántos triángulos hay en total?',
            "Plega'l i enganxa'l: és com l'STL d'un cub!|Dóblalo y pégalo: ¡es como el STL de un cubo!",
            'Dibuixa un cercle fet amb 6 triangles (com una pizza) i un altre amb 12. Quin sembla més rodó?|Dibuja un círculo hecho con 6 triángulos (como una pizza) y otro con 12. ¿Cuál parece más redondo?'],
          tip: "Un STL de veritat pot tenir milers de triangles: com més corbes, més en necessita.|Un STL de verdad puede tener miles de triángulos: cuantas más curvas, más necesita." },
        { k: 'm3look', ph: 'prova', q: "Quants <b>triangles</b> necessita l'STL d'aquesta caixa?|¿Cuántos <b>triángulos</b> necesita el STL de esta caja?",
          model: { parts: [CAIXA] }, opts: ['12|12', '6|6', '8|8'], a: 0,
          ex: "Té 6 cares rectangulars i cada una es parteix en 2 triangles: 6 × 2 = 12.|Tiene 6 caras rectangulares y cada una se parte en 2 triángulos: 6 × 2 = 12." },
        { k: 'm3look', ph: 'investiga', q: "Aquest peó té <b>tres colors</b>. Com quedarà dins del fitxer STL?|Este peón tiene <b>tres colores</b>. ¿Cómo quedará dentro del archivo STL?",
          model: { parts: PEO_COL }, opts: [{ model: { parts: PEO_GRIS } }, { model: { parts: PEO_COL } }, { model: { parts: PEO_SOLT } }], a: 0,
          ex: "L'STL només guarda la forma: el color serà el del filament.|El STL solo guarda la forma: el color será el del filamento." },
        { k: 'move', ph: 'pausa', title: 'A escala!|¡A escala!', secs: 30, t: "Quan diguin «mida real», posa't dret. «Escala 1:2», fes-te petit, ajupit. «Escala 2:1», fes-te gran: de puntetes i amb els braços amunt! I si diuen «en centímetres»… fes-te petit com una formiga!|Cuando digan «tamaño real», ponte de pie. «Escala 1:2», hazte pequeño, agachado. «Escala 2:1», hazte grande: ¡de puntillas y con los brazos arriba! Y si dicen «en centímetros»… ¡hazte pequeño como una hormiga!" },
        { k: 'm3fix', ph: 'repte', q: "Aquesta <b>xapa</b> es va fer pensant en centímetres: fa 4 mm i n'hauria de fer <b>40</b>. Fes-la <b>10 vegades</b> més gran!|Esta <b>chapa</b> se hizo pensando en centímetros: mide 4 mm y tendría que medir <b>40</b>. ¡Hazla <b>10 veces</b> más grande!",
          start: { parts: [XAPA(4)] }, fix: ['a1'], palette: ['cyl'],
          checks: [{ k: 'size', ax: 'x', v: 40, tol: 0.5, t: "Fa 40 mm (4 cm) d'amplada|Mide 40 mm (4 cm) de ancho" }, { k: 'size', ax: 'z', v: 5, tol: 0.2, t: 'Fa 5 mm de gruix: també ha crescut|Mide 5 mm de grosor: también ha crecido' }, { k: 'onplate' }],
          hint: "La xapa ja està seleccionada. Toca Proporcional i escriu 40 a la x: totes les mides es multipliquen per 10.|La chapa ya está seleccionada. Toca Proporcional y escribe 40 en la x: todas las medidas se multiplican por 10.",
          sol: { parts: [XAPA(40)] } },
        { k: 'm3fix', ph: 'repte', q: "Aquesta <b>estrella</b> de 300 mm no cap a la placa de la Nuvi (200 mm)! Fes-la a escala <b>1:5</b>: 60 mm.|¡Esta <b>estrella</b> de 300 mm no cabe en la placa de Nuvi (200 mm)! Hazla a escala <b>1:5</b>: 60 mm.",
          start: { parts: [ESTEL(5)] }, fix: ['a1'], palette: ['star'],
          checks: [{ k: 'fit', box: [180, 180, 150], t: 'Cap a la placa, amb marge a les vores|Cabe en la placa, con margen en los bordes' }, { k: 'size', ax: 'x', v: 60, tol: 0.5, t: "Fa 60 mm d'amplada|Mide 60 mm de ancho" }, { k: 'size', ax: 'z', v: 3, tol: 0.2, t: 'Fa 3 mm de gruix: no s\'ha deformat|Mide 3 mm de grosor: no se ha deformado' }],
          hint: "300 ÷ 5 = 60. Amb Proporcional activat, escriu 60 a la x de Mida.|300 ÷ 5 = 60. Con Proporcional activado, escribe 60 en la x de Medida.",
          sol: { parts: [ESTEL(1)] } },
        { k: 'm3build', ph: 'repte', stl: true, q: "Una medalla a mida real: <b>50 mm</b> de diàmetre, <b>3 mm</b> de gruix i un forat de <b>5 mm</b> a (0, 19). Prova el botó STL!|Medalla a tamaño real: <b>50 mm</b> de diámetro, <b>3 mm</b> de grosor y agujero de <b>5 mm</b> en (0, 19). ¡Prueba el STL!",
          palette: ['cyl', 'hcyl'],
          checks: [{ k: 'size', ax: 'x', v: 50, tol: 0.3, t: 'Fa 50 mm de diàmetre|Mide 50 mm de diámetro' }, { k: 'size', ax: 'z', v: 3, tol: 0.1, t: 'Fa 3 mm de gruix|Mide 3 mm de grosor' }, { k: 'hole', t: 'Té un forat que la travessa|Tiene un agujero que la atraviesa' },
            { k: 'part', t: 'cyl', hole: true, at: [0, 19, null], tol: 1.2, txt: 'El forat de la cinta és a (0, 19)|El agujero de la cinta está en (0, 19)' }, { k: 'wall', min: 1.8, t: 'Queda prou vora al voltant del forat|Queda bastante borde alrededor del agujero' }],
          hint: "Afegeix un cilindre de 50 × 50 × 3 mm. Després, un Forat rodó de 5 × 5 mm a x = 0, y = 19: amb 20 mm d'alçada ja la travessa.|Añade un cilindro de 50 × 50 × 3 mm. Después, un Agujero redondo de 5 × 5 mm en x = 0, y = 19: con 20 mm de altura ya la atraviesa.",
          sol: { parts: MED50 } },
        { k: 'm3build', ph: 'repte', extra: true, q: "Un <b>peó gegant</b> a escala <b>2:1</b>: totes les mides es dupliquen… i les alçades on comença cada peça, també!|Un <b>peón gigante</b> a escala <b>2:1</b>: todas las medidas se duplican… ¡y las alturas donde empieza cada pieza, también!",
          start: { parts: PEO1N }, palette: ['cyl', 'cone', 'sph'], target: { parts: PEO2 },
          checks: [{ k: 'size', ax: 'z', v: 60, tol: 0.3, t: "Fa 60 mm d'alçada: el doble de 30|Mide 60 mm de altura: el doble de 30" }, { k: 'match', target: { parts: PEO2 }, th: 0.9, t: 'És com el peó fantasma|Es como el peón fantasma' }, { k: 'one' }],
          hint: "Peça a peça, amb Proporcional: peanya 22 → 44, con 16 → 32, cap 12 → 24. Després, a Posició: el con a z = 8 i el cap a z = 36.|Pieza a pieza, con Proporcional: peana 22 → 44, cono 16 → 32, cabeza 12 → 24. Después, en Posición: el cono en z = 8 y la cabeza en z = 36.",
          sol: { parts: PEO2 } },
        { k: 'm3free', ph: 'crea', q: "<b>El regal per a l'Escola del Pont.</b> Una xapa de com a molt 50 × 50 × 5 mm. Descarrega'n l'<b>STL</b>!|<b>El regalo para la Escuela del Puente.</b> Una chapa de como mucho 50 × 50 × 5 mm. ¡Descarga su <b>STL</b>!",
          name: "El regal per al Pont|El regalo para el Puente", palette: ['cyl', 'box', 'star', 'heart', 'hex', 'torus', 'hcyl', 'hbox'],
          crit: ['Té la mida real que demanen: com a molt 50 × 50 × 5 mm|Tiene el tamaño real que piden: como mucho 50 × 50 × 5 mm', 'Està llest per imprimir: base plana, una sola peça i parets de 2 mm|Está listo para imprimir: base plana, una sola pieza y paredes de 2 mm', "N'has descarregat el fitxer STL|Has descargado su archivo STL"],
          checks: [{ k: 'fit', box: [50, 50, 5], t: 'Cap en 50 × 50 × 5 mm|Cabe en 50 × 50 × 5 mm' }, { k: 'flatbase', min: 300, t: 'Té una base plana|Tiene una base plana' }, { k: 'one' }, { k: 'onplate' }, { k: 'wall', min: 1.8, t: 'Cap paret fa menys de 2 mm|Ninguna pared mide menos de 2 mm' }],
          sol: { parts: MED50 } },
        { k: 'quiz', ph: 'tanca', q: "Què guarda un fitxer STL?|¿Qué guarda un archivo STL?", opts: ['La forma del model, feta de triangles|La forma del modelo, hecha de triángulos', 'La forma i el color de cada peça|La forma y el color de cada pieza', 'Una foto del model|Una foto del modelo'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Un model fa <b>4 mm</b>, però n'havia de fer <b>40</b>. Què fas?|Un modelo mide <b>4 mm</b>, pero tenía que medir <b>40</b>. ¿Qué haces?", opts: ["L'escalo 10 vegades, amb totes les mides proporcionals|Lo escalo 10 veces, con todas las medidas proporcionales", "Només canvio l'amplada a 40 mm|Solo cambio el ancho a 40 mm", "Res: la impressora ja ho arreglarà|Nada: la impresora ya lo arreglará"], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 4 · Projecte: el porta-llapis ---------- */
    { id: 'm6-4', t: 'Projecte: el porta-llapis|Proyecto: el portalápices', min: 45, proj: true, badge: 'm6llapis',
      learn: ["Per dissenyar un objecte útil, primer mesurem l'objecte real: un llapis fa uns 8 mm de punta a punta, i el forat en fa 9 per tenir marge.|Para diseñar un objeto útil, primero medimos el objeto real: un lápiz mide unos 8 mm de punta a punta, y el agujero mide 9 para tener margen.",
        "Entre dos forats, la paret fa la distància entre els centres menys el diàmetre: 12 − 9 = 3 mm.|Entre dos agujeros, la pared mide la distancia entre los centros menos el diámetro: 12 − 9 = 3 mm.",
        "Un porta-llapis llest per imprimir té fons i parets de 2 mm o més, una base plana, és una sola peça i se'n pot descarregar l'STL.|Un portalápices listo para imprimir tiene fondo y paredes de 2 mm o más, una base plana, es una sola pieza y se puede descargar su STL."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Els números d'un fitxer STL no diuen la unitat. Quina unitat entenen les impressores?|Los números de un archivo STL no dicen la unidad. ¿Qué unidad entienden las impresoras?",
          opts: ['Mil·límetres|Milímetros', 'Centímetres|Centímetros', 'Metres|Metros'], a: 0, ex: "Per això dissenyem a mida real, en mm.|Por eso diseñamos a tamaño real, en mm." },
        { k: 'quiz', ph: 'recorda', q: "Què revises abans d'imprimir un model?|¿Qué revisas antes de imprimir un modelo?",
          opts: ['Base plana, una sola peça, parets de 2 mm i voladissos|Base plana, una sola pieza, paredes de 2 mm y voladizos', 'Només el color|Solo el color', "Que sigui tan gran com la placa|Que sea tan grande como la placa"], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'fab', title: 'Sis llapis per taula|Seis lápices por mesa',
          t: "L'<b>Aina</b>, la mestra de l'Escola del Turó, ens torna a escriure: la classe de 3r seu en <b>taules de 6</b> i els llapis sempre rodolen per terra. Vol un <b>porta-llapis</b> per a cada taula, on hi càpiguen <b>6 llapis</b>. És el projecte de la unitat i la gran impressió de la Nuvi: farem servir mides reals, forats, parets de 2 mm i l'STL!|<b>Aina</b>, la maestra de la Escuela del Turó, nos vuelve a escribir: la clase de 3.º se sienta en <b>mesas de 6</b> y los lápices siempre ruedan por el suelo. Quiere un <b>portalápices</b> para cada mesa, donde quepan <b>6 lápices</b>. Es el proyecto de la unidad y la gran impresión de Nuvi: ¡usaremos medidas reales, agujeros, paredes de 2 mm y el STL!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Mesura el llapis|Mide el lápiz', t: 'Mides reals, en mil·límetres|Medidas reales, en milímetros', anim: 'm6llapis',
            x: "Un llapis normal té sis cares: fa uns <b>7 mm</b> de cara a cara i uns <b>8 mm</b> de punta a punta (d'una cantonada a l'altra). Nou, fa uns 18 cm de llarg. Perquè entri i surti fàcilment, el forat ha de ser una mica més gran: <b>9 mm</b>.|Un lápiz normal tiene seis caras: mide unos <b>7 mm</b> de cara a cara y unos <b>8 mm</b> de punta a punta (de una esquina a la otra). Nuevo, mide unos 18 cm de largo. Para que entre y salga fácilmente, el agujero tiene que ser un poco más grande: <b>9 mm</b>.",
            tip: "Mesura sempre els teus llapis: els de colors gruixuts poden fer 10 mm o més.|Mide siempre tus lápices: los de colores gruesos pueden medir 10 mm o más." },
          { k: 'Fons i parets|Fondo y paredes', t: '2 mm, com a mínim|2 mm, como mínimo', media: { k: 'model', model: { parts: TALL }, view: 'front', spin: false },
            x: "Aquí el veus tallat pel mig. Els forats comencen a <b>z = 2</b> per deixar un <b>fons</b> de 2 mm, i entre forat i forat queda una <b>paret</b> de 3 mm. Si els forats comencessin a z = 0, en aixecar el porta-llapis els llapis caurien per sota!|Aquí lo ves cortado por la mitad. Los agujeros empiezan en <b>z = 2</b> para dejar un <b>fondo</b> de 2 mm, y entre agujero y agujero queda una <b>pared</b> de 3 mm. Si los agujeros empezaran en z = 0, ¡al levantar el portalápices los lápices caerían por debajo!" },
          { k: 'Sis llapis|Seis lápices', t: 'Com els repartim?|¿Cómo los repartimos?', anim: 'm6sis',
            x: "Podem fer <b>sis forats</b> en dues files de tres, a 12 mm de centre a centre: 12 − 9 = <b>3 mm</b> de paret. O un sol forat gran, com un <b>got</b>: si fa tres llapis d'ample, n'hi caben 6 al voltant d'un del mig!|Podemos hacer <b>seis agujeros</b> en dos filas de tres, a 12 mm de centro a centro: 12 − 9 = <b>3 mm</b> de pared. O un solo agujero grande, como un <b>vaso</b>: si mide tres lápices de ancho, ¡caben 6 alrededor de uno del medio!" },
          { k: 'La prova dels llapis|La prueba de los lápices', t: 'Tot a punt per imprimir|Todo listo para imprimir', media: { k: 'model', model: { parts: AMB_LLAPIS } },
            x: "Imagina-hi els llapis: hi caben els 6 i queden drets? Després, la revisió de sempre: base plana, una sola peça, fons i parets de 2 mm i que càpiga a la placa. Aquest porta-llapis fa 40 mm d'alt: 200 capes, unes quantes hores de Nuvi!|Imagina los lápices dentro: ¿caben los 6 y quedan de pie? Después, la revisión de siempre: base plana, una sola pieza, fondo y paredes de 2 mm y que quepa en la placa. Este portalápices mide 40 mm de alto: ¡200 capas, unas cuantas horas de Nuvi!" }
        ] },
        { k: 'unplug', ph: 'mans', ico: '✏️', title: 'Mesura el teu llapis|Mide tu lápiz', t: 'Amb un llapis, un regle i paper quadriculat (cada quadret, 5 mm):|Con un lápiz, una regla y papel cuadriculado (cada cuadrito, 5 mm):',
          steps: ["Mesura el llapis de cara a cara i de punta a punta (cantonades). Apunta-ho en mm.|Mide el lápiz de cara a cara y de punta a punta (esquinas). Apúntalo en mm.",
            "Mesura'n la llargada. Quina alçada creus que ha de tenir el porta-llapis perquè no es tombi?|Mide su largo. ¿Qué altura crees que tiene que tener el portalápices para que no se vuelque?",
            'Dibuixa el porta-llapis vist des de dalt, a mida real: 6 cercles de 9 mm amb 3 mm de paret entre ells.|Dibuja el portalápices visto desde arriba, a tamaño real: 6 círculos de 9 mm con 3 mm de pared entre ellos.',
            "Compara'l amb el d'un company: heu repartit els llapis igual?|Compáralo con el de un compañero: ¿habéis repartido los lápices igual?"],
          tip: "Per dibuixar els cercles, obre el compàs 4,5 mm (el radi).|Para dibujar los círculos, abre el compás 4,5 mm (el radio)." },
        { k: 'm3look', ph: 'prova', q: "Aquest llapis fa <b>8 mm</b> de punta a punta. Quin forat li faries?|Este lápiz mide <b>8 mm</b> de punta a punta. ¿Qué agujero le harías?",
          model: { parts: PROVA9 }, opts: ['9 mm|9 mm', '8 mm|8 mm', '7 mm|7 mm'], a: 0,
          ex: "Amb 9 mm queda mig mil·límetre de marge a cada costat: el llapis entra i surt sense encallar-se. De 8 aniria massa just, i de 7 no hi entraria.|Con 9 mm queda medio milímetro de margen a cada lado: el lápiz entra y sale sin atascarse. De 8 iría demasiado justo, y de 7 no entraría." },
        { k: 'm3look', ph: 'investiga', q: "Aquest porta-llapis està <b>tallat pel mig</b>. Quin forat <b>no té fons</b>? El llapis cauria per sota.|Este portalápices está <b>cortado por la mitad</b>. ¿Qué agujero <b>no tiene fondo</b>? El lápiz caería por debajo.",
          model: { parts: TRES }, mode: 'result', view: 'front', opts: ['El del mig|El del medio', "El de l'esquerra|El de la izquierda", 'El de la dreta|El de la derecha'], a: 0,
          ex: "El del mig arriba fins a baix de tot: comença a z = 0. Els altres deixen 2 mm de fons.|El del medio llega hasta abajo del todo: empieza en z = 0. Los otros dejan 2 mm de fondo." },
        { k: 'move', ph: 'pausa', title: 'Llapis drets!|¡Lápices de pie!', secs: 30, t: "Tota la classe fa de llapis. Quan diguin «forat de 9!», quedeu-vos ben drets i quiets. «Forat de 20!», tentinegeu d'un costat a l'altre. «Forat de 7!», no podeu entrar: braços creuats!|Toda la clase hace de lápices. Cuando digan «¡agujero de 9!», quedaos bien de pie y quietos. «¡Agujero de 20!», tambaleaos de un lado a otro. «¡Agujero de 7!», no podéis entrar: ¡brazos cruzados!" },
        { k: 'm3build', ph: 'repte', q: "El bloc ja hi és. Fes-hi el primer <b>forat</b>: de <b>9 mm</b>, a (−12, −6), des de <b>z = 2</b> fins a dalt.|El bloque ya está. Hazle el primer <b>agujero</b>: de <b>9 mm</b>, en (−12, −6), desde <b>z = 2</b> hasta arriba.",
          start: { parts: [BLK] }, palette: ['hcyl'], target: { parts: [BLK, hp('f1', -12, -6)] },
          checks: [{ k: 'part', t: 'cyl', hole: true, at: [-12, -6, null], base: 2, tol: 0.6, txt: 'El forat és a (−12, −6) i comença a z = 2|El agujero está en (−12, −6) y empieza en z = 2' }, { k: 'match', target: { parts: [BLK, hp('f1', -12, -6)] }, th: 0.99, t: 'Fa 9 mm i arriba fins a dalt, com el fantasma|Mide 9 mm y llega hasta arriba, como el fantasma' }, { k: 'flatbase', min: 1000, t: 'El fons queda sencer|El fondo queda entero' }],
          hint: "Afegeix un Forat rodó. A Mida: 9, 9 i 40. A Posició: x = −12, y = −6, z = 2.|Añade un Agujero redondo. En Medida: 9, 9 y 40. En Posición: x = −12, y = −6, z = 2.",
          sol: { parts: [BLK, hp('f1', -12, -6)] } },
        { k: 'm3build', ph: 'repte', q: "Ara els <b>sis forats</b>, en dues files de tres a 12 mm l'un de l'altre. <b>Duplica</b> el primer i segueix el fantasma.|Ahora los <b>seis agujeros</b>, en dos filas de tres a 12 mm uno de otro. <b>Duplica</b> el primero y sigue el fantasma.",
          start: { parts: [BLK, hp('f1', -12, -6)] }, palette: ['hcyl'], target: { parts: PORTA },
          checks: [{ k: 'count', t: 'cyl', hole: true, min: 6, txt: 'Hi ha 6 forats: un per llapis|Hay 6 agujeros: uno por lápiz' }, { k: 'match', target: { parts: PORTA }, th: 0.985, t: 'Els forats són al lloc del fantasma|Los agujeros están en el lugar del fantasma' }, { k: 'wall', min: 1.8, t: 'Entre forat i forat queden parets de 2 mm o més|Entre agujero y agujero quedan paredes de 2 mm o más' }],
          hint: "Duplica el forat i, a Posició, escriu x = 0. Torna a tocar Duplica: el tercer surt sol a x = 12. Ara selecciona els tres forats (Més peces), Duplica i escriu x = 0 i y = 6.|Duplica el agujero y, en Posición, escribe x = 0. Vuelve a tocar Duplica: el tercero sale solo en x = 12. Ahora selecciona los tres agujeros (Más piezas), Duplica y escribe x = 0 e y = 6.",
          sol: { parts: PORTA } },
        { k: 'm3fix', ph: 'repte', q: "Ui! Aquests forats comencen a <b>z = 0</b>: no hi ha fons i, en aixecar-lo, els llapis caurien. Fes-hi un <b>fons de 2 mm</b>.|¡Uy! Estos agujeros empiezan en <b>z = 0</b>: sin fondo, los lápices caerían. Hazle un <b>fondo de 2 mm</b>.",
          start: { parts: [BLK, ...SIX(0, 42)] }, fix: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'], palette: ['hcyl'],
          checks: [{ k: 'flatbase', min: 1100, t: 'Tots els forats tenen fons: la base és sencera|Todos los agujeros tienen fondo: la base está entera' }, { k: 'count', t: 'cyl', hole: true, min: 6, txt: 'Continua tenint 6 forats|Sigue teniendo 6 agujeros' }, { k: 'wall', min: 1.8, t: 'Fons i parets de 2 mm o més|Fondo y paredes de 2 mm o más' }],
          hint: "Els sis forats ja estan seleccionats: a Posició, posa z = 2 i pujaran tots alhora.|Los seis agujeros ya están seleccionados: en Posición, pon z = 2 y subirán todos a la vez.",
          sol: { parts: [BLK, ...SIX(2, 42)] } },
        { k: 'm3build', ph: 'repte', extra: true, q: "Un lloc per a la <b>goma</b>: afegeix al davant una <b>safata</b> de 40 × 14 × 12 mm, buidada i amb un fons de 2 mm.|Un sitio para la <b>goma</b>: añade delante una <b>bandeja</b> de 40 × 14 × 12 mm, vaciada y con un fondo de 2 mm.",
          start: { parts: PORTA }, palette: ['box', 'hbox'], target: { parts: [...PORTA, ...SAFATA] },
          checks: [{ k: 'count', hole: true, min: 7, txt: 'Hi ha un forat més, per a la goma|Hay un agujero más, para la goma' }, { k: 'one', t: 'La safata està enganxada al porta-llapis|La bandeja está pegada al portalápices' }, { k: 'flatbase', min: 1600, t: 'La safata també té fons|La bandeja también tiene fondo' }, { k: 'wall', min: 1.8, t: 'Fons i parets de 2 mm o més|Fondo y paredes de 2 mm o más' }, { k: 'match', target: { parts: [...PORTA, ...SAFATA] }, th: 0.97, t: 'La safata és com el fantasma|La bandeja es como el fantasma' }],
          hint: "Caixa de 40 × 14 × 12 mm a x = 0, y = −21, z = 0. Després, un Forat (cub) de 36 × 10 × 12 mm a x = 0, y = −21, z = 2.|Caja de 40 × 14 × 12 mm en x = 0, y = −21, z = 0. Después, un Agujero (cubo) de 36 × 10 × 12 mm en x = 0, y = −21, z = 2.",
          sol: { parts: [...PORTA, ...SAFATA] } },
        { k: 'm3free', ph: 'crea', q: "<b>El porta-llapis de la taula.</b> Dissenya'l per a <b>6 llapis</b>, i que passi la revisió de la Nuvi.|<b>El portalápices de la mesa.</b> Diséñalo para <b>6 lápices</b>, y que pase la revisión de Nuvi.",
          name: 'El meu porta-llapis|Mi portalápices', palette: ['box', 'cyl', 'hex', 'star', 'heart', 'torus', 'hbox', 'hcyl'],
          crit: ['Hi caben 6 llapis: forats de 9 mm o més|Caben 6 lápices: agujeros de 9 mm o más', "Fons i parets d'almenys 2 mm|Fondo y paredes de al menos 2 mm", 'Base plana, una sola peça i prou alt perquè els llapis no es tombin|Base plana, una sola pieza y bastante alto para que los lápices no se vuelquen'],
          checks: [{ k: 'hole', t: 'Té forats per als llapis|Tiene agujeros para los lápices' }, { k: 'wall', min: 1.8, t: 'Fons i parets de 2 mm o més|Fondo y paredes de 2 mm o más' }, { k: 'flatbase', min: 300, t: 'Té una base plana|Tiene una base plana' }, { k: 'one' }, { k: 'onplate' },
            { k: 'size', ax: 'z', v: 60, tol: 30, t: "Fa entre 30 i 90 mm d'alçada|Mide entre 30 y 90 mm de altura" }],
          sol: { parts: PORTA } },
        { k: 'quiz', ph: 'tanca', q: "Per què el forat del llapis fa 9 mm si el llapis en fa 8?|¿Por qué el agujero del lápiz mide 9 mm si el lápiz mide 8?", opts: ["Perquè entri i surti sense encallar-se: cal una mica de marge|Para que entre y salga sin atascarse: hace falta un poco de margen", 'Perquè la Nuvi no sap fer forats de 8 mm|Porque Nuvi no sabe hacer agujeros de 8 mm', 'Perquè així gasta més plàstic|Porque así gasta más plástico'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Dos forats de <b>9 mm</b> estan a <b>12 mm</b> de centre a centre. Quant fa la paret del mig?|Dos agujeros de <b>9 mm</b> están a <b>12 mm</b> de centro a centro. ¿Cuánto mide la pared del medio?", opts: ['3 mm|3 mm', '12 mm|12 mm', '21 mm|21 mm'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] };
})();
