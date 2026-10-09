/* Tech 3D · Nivell 1 · unitat 2 «Formes bàsiques» (m2-1 … m2-4)
   Contingut propi de Numi. Fil narratiu: el Taller de Bit i la Nuvi reben l'encàrrec de l'escola del barri, que fa una
   maqueta gegant d'un poble de conte: cases i maons (caixes), arbres, torres i un llapis gegant (cilindres i cons), un ninot
   de neu i teulades (esferes, piràmides i falques) i, com a projecte, el castell.
   Models: peces { id, t, s: [x, y, z] (mm), p: centre, r: graus, c: color }; amb on(…) es col·loquen per la base (z0), com a la
   pestanya Posició de l'editor. */
Object.assign(TBADGE, {
  m21caixes: { id: 'm21caixes', ico: '📦', n: 'Mestre/a de les caixes|Maestro/a de las cajas', d: 'Fas caixes i cubs de les mides exactes i saps apilar-los.|Haces cajas y cubos de las medidas exactas y sabes apilarlos.' },
  m22rodones: { id: 'm22rodones', ico: '🌲', n: 'Formes rodones|Formas redondas', d: 'Domines el diàmetre i l\'alçada de cilindres i cons.|Dominas el diámetro y la altura de cilindros y conos.' },
  m23ninot: { id: 'm23ninot', ico: '⛄', n: 'Constructor/a de ninots|Constructor/a de muñecos', d: 'Fas esferes, ous, piràmides i falques, i saps enganxar bé les boles.|Haces esferas, huevos, pirámides y cuñas, y sabes pegar bien las bolas.' },
  m24castell: { id: 'm24castell', ico: '🏰', n: 'Arquitecte/a del castell|Arquitecto/a del castillo', d: 'Has planificat i construït un castell simètric i d\'una sola peça.|Has planificado y construido un castillo simétrico y de una sola pieza.' }
});
COURSE_UNITS[2] = (() => {
  const P = (id, t, s, p, c, o = {}) => ({ id, t, s, p, r: o.r || [0, 0, 0], c, ...o });
  const on = (id, t, s, x, y, z0, c, o) => P(id, t, s, [x, y, z0 + s[2] / 2], c, o);
  const M = parts => ({ parts });
  // m2-1: caixes i cubs
  const CAIXA = [on('c', 'box', [50, 30, 20], 0, 0, 0, '#F5893A')];
  const TRES = [on('llarg', 'box', [44, 30, 30], -50, 0, 0, '#3D7BF4'), on('baix', 'box', [30, 30, 18], 0, 0, 0, '#F7C531'), on('cub', 'box', [30, 30, 30], 48, 0, 0, '#EC5FA8')];
  const CIUTAT = [on('t1', 'box', [24, 24, 56], -38, 14, 0, '#3D7BF4'), on('t2', 'box', [36, 28, 26], -4, 16, 0, '#F5893A'), on('t3', 'box', [22, 22, 22], 30, 18, 0, '#2FB36D'), on('t4', 'box', [20, 20, 40], 30, -16, 0, '#7C5CFF'),
    on('t5', 'box', [60, 14, 6], -16, -18, 0, '#9AA3B5'), on('t6', 'box', [12, 12, 12], -4, 16, 26, '#E8453C')];
  const POS3 = [on('a', 'box', [20, 20, 20], -30, 20, 0, '#3D7BF4'), on('b', 'box', [20, 20, 20], 0, -20, 0, '#F7C531'), on('c', 'box', [20, 20, 20], 30, 30, 0, '#EC5FA8')];
  const MAO = [on('g', 'box', [60, 20, 10], 0, 0, 0, '#E8453C')];
  const DAU = [on('g', 'box', [40, 40, 40], 0, 0, 0, '#F3F3EE')];
  const TORRE3 = [on('p1', 'box', [40, 40, 10], 0, 0, 0, '#3D7BF4'), on('p2', 'box', [30, 30, 10], 0, 0, 10, '#2FB36D'), on('p3', 'box', [20, 20, 10], 0, 0, 20, '#F7C531')];
  const ESCALA = [on('g1', 'box', [20, 20, 10], -20, 0, 0, '#F5893A'), on('g2', 'box', [20, 20, 20], 0, 0, 0, '#F7C531'), on('g3', 'box', [20, 20, 30], 20, 0, 0, '#2FB36D')];
  const BANC = [on('l1', 'box', [8, 20, 20], -24, 0, 0, '#A0683A'), on('l2', 'box', [8, 20, 20], 24, 0, 0, '#A0683A'), on('s', 'box', [60, 20, 6], 0, 0, 20, '#F5893A')];
  const EDIFICI = [on('a1', 'box', [50, 40, 30], 0, 0, 0, '#3D7BF4'), on('a2', 'box', [20, 20, 20], -10, 0, 30, '#F7C531'), on('a3', 'box', [8, 8, 16], 15, 10, 30, '#E8453C')];
  // m2-2: cilindres i cons
  const CIL = [on('c', 'cyl', [30, 30, 40], 0, 0, 0, '#2FB36D')];
  const OVAL = [on('r', 'cyl', [30, 30, 12], -30, 0, 0, '#3D7BF4'), on('o', 'cyl', [44, 22, 12], 30, 0, 0, '#F5893A')];
  const CONS = [on('con', 'cone', [30, 30, 36], -25, 0, 0, '#E8453C'), on('tronc', 'cone', [30, 30, 24], 25, 0, 0, '#F7C531', { top: 0.55 })];
  const DIAM = [on('d', 'cyl', [40, 40, 16], 0, 0, 0, '#5BC0EB')];
  const TRIA = [on('cil', 'cyl', [24, 24, 30], -40, 0, 0, '#3D7BF4'), on('con', 'cone', [28, 28, 34], 0, 0, 0, '#E8453C'), on('tronc', 'cone', [30, 30, 22], 40, 0, 0, '#F7C531', { top: 0.5 })];
  const MONEDA = [on('g', 'cyl', [50, 50, 5], 0, 0, 0, '#F7C531')];
  const LLAPIS = [on('cos', 'cyl', [16, 16, 60], 0, 0, 0, '#F7C531'), on('punta', 'cone', [16, 16, 16], 0, 0, 60, '#F5C59A')];
  const ARBRE = [on('tronc', 'cyl', [10, 10, 20], 0, 0, 0, '#A0683A'), on('copa', 'cone', [40, 40, 40], 0, 0, 20, '#2FB36D')];
  const TORRE = [on('torre', 'cyl', [30, 30, 50], 0, 0, 0, '#9AA3B5'), on('teulada', 'cone', [36, 36, 24], 0, 0, 50, '#E8453C')];
  const AVET = [on('tr', 'cyl', [10, 10, 12], 0, 0, 0, '#A0683A'), on('c1', 'cone', [44, 44, 26], 0, 0, 10, '#2FB36D'), on('c2', 'cone', [34, 34, 22], 0, 0, 26, '#22A06B'), on('c3', 'cone', [24, 24, 20], 0, 0, 40, '#2FB36D')];
  const COET = [on('cos', 'cyl', [20, 20, 50], 0, 0, 0, '#F3F3EE'), on('punta', 'cone', [20, 20, 20], 0, 0, 50, '#E8453C'), on('ala1', 'cyl', [8, 8, 16], 13, 0, 0, '#3D7BF4'), on('ala2', 'cyl', [8, 8, 16], -13, 0, 0, '#3D7BF4')];
  // m2-3: esferes, piràmides i falques
  const ESF = [on('e', 'sph', [34, 34, 34], 0, 0, 0, '#5BC0EB')];
  const ELIPS = [on('ou', 'sph', [24, 24, 34], -42, 0, 0, '#F7C531'), on('llentia', 'sph', [40, 40, 14], 0, 0, 0, '#2FB36D'), on('rugbi', 'sph', [44, 24, 24], 46, 0, 0, '#F5893A')];
  const FALCA = [on('f', 'wedge', [50, 30, 24], 0, 0, 0, '#F5893A')];
  const OU3 = [on('bola', 'sph', [30, 30, 30], -40, 0, 0, '#5BC0EB'), on('ou', 'sph', [24, 24, 36], 0, 0, 0, '#F7C531'), on('cil', 'cyl', [26, 26, 30], 40, 0, 0, '#2FB36D')];
  const PIR = [on('p', 'pyr', [40, 40, 30], 0, 0, 0, '#E8453C')];
  const NINOT2 = [on('cos', 'sph', [40, 40, 40], 0, 0, 0, '#F3F3EE'), on('cap', 'sph', [26, 26, 26], 0, 0, 44, '#F3F3EE')];
  const OU = [on('g', 'sph', [24, 24, 34], 0, 0, 0, '#F7C531')];
  const CASA = [on('casa', 'box', [40, 40, 30], 0, 0, 0, '#F5893A'), on('teulada', 'pyr', [44, 44, 20], 0, 0, 30, '#E8453C')];
  const NINOT = [on('cos', 'sph', [40, 40, 40], 0, 0, 0, '#F3F3EE'), on('mig', 'sph', [30, 30, 30], 0, 0, 34, '#F3F3EE'), on('cap', 'sph', [20, 20, 20], 0, 0, 60, '#F3F3EE')];
  const RAMPA = [on('caixa', 'box', [20, 20, 20], -30, 0, 0, '#3D7BF4'), on('rampa', 'wedge', [40, 20, 20], 0, 0, 0, '#F5893A')];
  const BOLET = [on('peu', 'cyl', [12, 12, 24], 0, 0, 0, '#F3F3EE'), on('barret', 'sph', [44, 44, 20], 0, 0, 18, '#E8453C')];
  const PERSONATGE = [on('cos', 'sph', [30, 30, 36], 0, 0, 0, '#5BC0EB'), on('cap', 'sph', [22, 22, 22], 0, 0, 32, '#5BC0EB'), on('barret', 'pyr', [18, 18, 14], 0, 0, 52, '#7C5CFF'), on('nas', 'sph', [6, 6, 6], 0, -11, 40, '#F5893A')];
  // m2-4: el castell (simètric respecte de x = 0)
  const MUR = on('mur', 'box', [80, 12, 30], 0, 0, 0, '#C9B79C');
  const T1 = on('t1', 'cyl', [24, 24, 50], -40, 0, 0, '#9AA3B5'), T2 = on('t2', 'cyl', [24, 24, 50], 40, 0, 0, '#9AA3B5');
  const S1 = on('s1', 'cone', [30, 30, 20], -40, 0, 50, '#E8453C'), S2 = on('s2', 'cone', [30, 30, 20], 40, 0, 50, '#E8453C');
  const PORTA = on('porta', 'box', [16, 4, 22], 0, -7, 0, '#7A4A1E');
  const MERLETS = [-20, 0, 20].map((x, i) => on('m' + (i + 1), 'box', [8, 12, 8], x, 0, 30, '#C9B79C'));
  const CASTELL = [MUR, T1, T2, S1, S2, PORTA, ...MERLETS];
  const ASIM = [MUR, T1, on('t2', 'cyl', [24, 24, 64], 40, 0, 0, '#9AA3B5'), S1, on('s2', 'cone', [30, 30, 20], 40, 0, 64, '#E8453C'), PORTA];
  const TORRE2 = [on('t', 'cyl', [30, 30, 50], 0, 0, 0, '#9AA3B5'), on('s', 'cone', [36, 36, 24], 0, 0, 50, '#E8453C')];
  return {
  t: 'Formes bàsiques|Formas básicas', d: 'Cubs, cilindres i esferes|Cubos, cilindros y esferas', color: '#F5893A',
  s: [
    /* ---------- Sessió 1 · El cub i la caixa ---------- */
    { id: 'm2-1', t: 'El cub i la caixa|El cubo y la caja', min: 45, badge: 'm21caixes',
      learn: ['Una caixa té tres mides (x, y, z) que canvio amb números a la pestanya Mida.|Una caja tiene tres medidas (x, y, z) que cambio con números en la pestaña Medida.',
        'Un cub és una caixa amb les tres mides iguals: té 6 cares, 12 arestes i 8 vèrtexs.|Un cubo es una caja con las tres medidas iguales: tiene 6 caras, 12 aristas y 8 vértices.',
        "Per apilar, la z de la caixa de dalt és l'alçada de la de sota (o la suma de totes les de sota).|Para apilar, la z de la caja de arriba es la altura de la de debajo (o la suma de todas las de debajo)."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'A la pestanya Posició, una peça té <b>z = 20</b>. Què vol dir?|En la pestaña Posición, una pieza tiene <b>z = 20</b>. ¿Qué quiere decir?',
          opts: ['Que la seva base és 20 mm per sobre de la placa|Que su base está 20 mm por encima de la placa', "Que és 20 mm a la dreta de l'origen|Que está 20 mm a la derecha del origen", "Que fa 20 mm d'alçada|Que mide 20 mm de altura"], a: 0,
          ex: "La z de Posició és l'alçada de la base. La x diu si és a la dreta o a l'esquerra, i la mida va a la pestanya Mida.|La z de Posición es la altura de la base. La x dice si está a la derecha o a la izquierda, y la medida va en la pestaña Medida." },
        { k: 'm3look', ph: 'recorda', q: 'Toca el cub que és a <b>x = 30</b>.|Toca el cubo que está en <b>x = 30</b>.', model: M(POS3), view: 'top', pick: 'c',
          no: "Aquest no. La x positiva és a la dreta de l'origen: compta 3 quadrets.|Este no. La x positiva está a la derecha del origen: cuenta 3 cuadritos.", ex: "És 3 quadrets a la dreta de l'origen (i 3 cap al fons: y = 30).|Está 3 cuadritos a la derecha del origen (y 3 hacia el fondo: y = 30)." },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: "La maqueta de l'escola|La maqueta de la escuela",
          t: "Nou encàrrec al taller! L'<b>escola del barri</b> prepara una maqueta gegant d'un <b>poble de conte</b>, amb cases, arbres, un ninot de neu… i un <b>castell</b>! Ens demanen les peces i la Nuvi ja està preparada. Per fer-les, cal conèixer bé les <b>formes bàsiques</b>. Avui comencem per la més útil de totes: la <b>caixa</b>.|¡Nuevo encargo en el taller! La <b>escuela del barrio</b> prepara una maqueta gigante de un <b>pueblo de cuento</b>, con casas, árboles, un muñeco de nieve… ¡y un <b>castillo</b>! Nos piden las piezas y Nuvi ya está preparada. Para hacerlas, hay que conocer bien las <b>formas básicas</b>. Hoy empezamos por la más útil de todas: la <b>caja</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'La caixa|La caja', t: 'Tres mides que tu tries|Tres medidas que tú eliges', media: { k: 'model', model: M(CAIXA) },
            x: "La <b>caixa</b> (a matemàtiques, <b>prisma rectangular</b>) té 6 cares rectangulars. Al taller la descrius amb tres números: la <b>x</b> és l'amplada, la <b>y</b> és la fondària i la <b>z</b> és l'alçada. Aquesta fa 50 × 30 × 20 mm.|La <b>caja</b> (en matemáticas, <b>prisma rectangular</b>) tiene 6 caras rectangulares. En el taller la describes con tres números: la <b>x</b> es la anchura, la <b>y</b> es el fondo y la <b>z</b> es la altura. Esta mide 50 × 30 × 20 mm.",
            tip: 'Una capsa de sabates, un maó o un llibre són caixes.|Una caja de zapatos, un ladrillo o un libro son cajas.' },
          { k: 'El cub|El cubo', t: 'Una caixa amb les tres mides iguals|Una caja con las tres medidas iguales', anim: 'm21cube',
            x: "Si les tres mides són <b>iguals</b>, la caixa és un <b>cub</b>: les 6 cares són quadrats idèntics. Té <b>6 cares</b>, <b>12 arestes</b> (les vores) i <b>8 vèrtexs</b> (les puntes), com un dau.|Si las tres medidas son <b>iguales</b>, la caja es un <b>cubo</b>: las 6 caras son cuadrados idénticos. Tiene <b>6 caras</b>, <b>12 aristas</b> (los bordes) y <b>8 vértices</b> (las puntas), como un dado.",
            tip: 'Tots els cubs són caixes, però no totes les caixes són cubs.|Todos los cubos son cajas, pero no todas las cajas son cubos.' },
          { k: 'Mida|Medida', t: 'La pestanya Mida|La pestaña Medida', anim: 'm21resize',
            x: "Toca la peça i obre la pestanya <b>Mida</b>: hi ha la x, la y i la z en mil·límetres. Escriu el número o fes servir − i +. Si actives <b>Proporcional</b>, les tres mides canvien alhora i un cub continua sent un cub. La base no es mou: la peça continua tocant la placa.|Toca la pieza y abre la pestaña <b>Medida</b>: están la x, la y y la z en milímetros. Escribe el número o usa − y +. Si activas <b>Proporcional</b>, las tres medidas cambian a la vez y un cubo sigue siendo un cubo. La base no se mueve: la pieza sigue tocando la placa." },
          { k: 'Apilar|Apilar', t: "Una caixa a sobre d'una altra|Una caja encima de otra", anim: 'm21stack',
            x: "Per posar una caixa a sobre d'una altra, la seva <b>z</b> (a Posició) ha de ser l'<b>alçada</b> de la de sota. Amb tres pisos, sumes: si el primer fa 10 mm i el segon 15 mm, el tercer comença a <b>z = 10 + 15 = 25</b>.|Para poner una caja encima de otra, su <b>z</b> (en Posición) tiene que ser la <b>altura</b> de la de debajo. Con tres pisos, sumas: si el primero mide 10 mm y el segundo 15 mm, el tercero empieza en <b>z = 10 + 15 = 25</b>." },
          { k: 'Al món|En el mundo', t: 'Una ciutat de caixes|Una ciudad de cajas', media: { k: 'model', model: M(CIUTAT) },
            x: 'Mira al teu voltant: edificis, armaris, neveres, televisors… moltes coses són caixes de mides diferents. Amb caixes altes i primes, baixes i amples, ja pots fer una ciutat sencera!|Mira a tu alrededor: edificios, armarios, neveras, televisores… muchas cosas son cajas de tamaños distintos. Con cajas altas y delgadas, bajas y anchas, ¡ya puedes hacer una ciudad entera!' }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🧊', title: 'Cubs de cubets|Cubos de cubitos', t: 'En petits grups, amb cubs encaixables (o daus), un regle i la fitxa:|En pequeños grupos, con cubos encajables (o dados), una regla y la ficha:',
          steps: ["Construïu una caixa de 3 cubets de llarg, 2 d'ample i 1 d'alt. Quants cubets hi heu fet servir?|Construid una caja de 3 cubitos de largo, 2 de ancho y 1 de alto. ¿Cuántos cubitos habéis usado?",
            'Ara un cub de 2 × 2 × 2. Quants cubets necessita? I un de 3 × 3 × 3?|Ahora un cubo de 2 × 2 × 2. ¿Cuántos cubitos necesita? ¿Y uno de 3 × 3 × 3?',
            "Feu una torre de tres pisos i mesureu l'alçada de cada pis. Sumeu-les: dona l'alçada de tota la torre?|Haced una torre de tres pisos y medid la altura de cada piso. Sumadlas: ¿da la altura de toda la torre?"],
          tip: 'Un cub de 2 × 2 × 2 té 8 cubets i un de 3 × 3 × 3 en té 27: el volum creix molt de pressa!|Un cubo de 2 × 2 × 2 tiene 8 cubitos y uno de 3 × 3 × 3 tiene 27: ¡el volumen crece muy deprisa!' },
        { k: 'm3look', ph: 'prova', q: 'Només una d\'aquestes caixes és un <b>cub</b>. Toca-la. Pots fer servir el regle de les mesures.|Solo una de estas cajas es un <b>cubo</b>. Tócala. Puedes usar la regla de las medidas.', model: M(TRES), pick: 'cub',
          no: 'Aquesta no té les tres mides iguals. Mira-la de davant i de dalt: el cub és un quadrat des de totes les vistes.|Esta no tiene las tres medidas iguales. Mírala de delante y de arriba: el cubo es un cuadrado desde todas las vistas.',
          ex: 'El cub fa 30 × 30 × 30 mm. La blava és més ampla (44 mm) i la groga, més baixa (18 mm).|El cubo mide 30 × 30 × 30 mm. La azul es más ancha (44 mm) y la amarilla, más baja (18 mm).' },
        { k: 'm3look', ph: 'prova', q: 'Quines <b>mides</b> té aquesta caixa? Compta quadrets (cada un fa 10 mm) i gira-la per veure l\'alçada.|¿Qué <b>medidas</b> tiene esta caja? Cuenta cuadritos (cada uno mide 10 mm) y gírala para ver la altura.', model: M([on('m', 'box', [40, 20, 10], 0, 0, 0, '#2FB36D')]), view: 'top',
          opts: ['x = 40, y = 20, z = 10|x = 40, y = 20, z = 10', 'x = 20, y = 40, z = 10|x = 20, y = 40, z = 10', 'x = 40, y = 20, z = 20|x = 40, y = 20, z = 20'], a: 0,
          ex: "D'esquerra a dreta fa 4 quadrets (x = 40), cap al fons en fa 2 (y = 20) i, de davant, es veu que és baixeta: z = 10.|De izquierda a derecha mide 4 cuadritos (x = 40), hacia el fondo mide 2 (y = 20) y, de delante, se ve que es bajita: z = 10." },
        { k: 'm3fix', ph: 'investiga', q: 'Aquest dau havia de ser un <b>cub de 30 mm</b>, però ha sortit aixafat. Arregla\'l.|Este dado tenía que ser un <b>cubo de 30 mm</b>, pero ha salido aplastado. Arréglalo.',
          start: M([on('a1', 'box', [30, 30, 18], 0, 0, 0, '#7C5CFF')]), fix: ['a1'], palette: ['box'],
          checks: [{ k: 'part', t: 'box', s: [30, 30, 30], txt: 'Les tres mides fan 30 mm|Las tres medidas miden 30 mm' }, { k: 'onplate' }],
          hint: "Toca el dau i, a Mida, canvia la z a 30. La base es queda a la placa.|Toca el dado y, en Medida, cambia la z a 30. La base se queda en la placa.", sol: M([on('a1', 'box', [30, 30, 30], 0, 0, 0, '#7C5CFF')]) },
        { k: 'move', ph: 'pausa', title: 'Caixes i cubs|Cajas y cubos', secs: 30,
          t: 'Fes-te una <b>caixa llarga</b>: estira els braços ben amples. Ara una <b>caixa alta</b>: braços amunt i peus junts. I ara un <b>cub</b>: ajup-te i abraça\'t els genolls! Tres vegades, cada cop més de pressa.|Hazte una <b>caja larga</b>: estira los brazos bien anchos. Ahora una <b>caja alta</b>: brazos arriba y pies juntos. Y ahora un <b>cubo</b>: ¡agáchate y abrázate las rodillas! Tres veces, cada vez más rápido.' },
        { k: 'm3build', ph: 'repte', q: 'La maqueta necessita <b>maons</b>. Fes una caixa de <b>60 × 20 × 10 mm</b>.|La maqueta necesita <b>ladrillos</b>. Haz una caja de <b>60 × 20 × 10 mm</b>.',
          start: M([on('a1', 'box', [20, 20, 20], 0, 0, 0, '#E8453C')]), palette: ['box'], target: M(MAO),
          checks: [{ k: 'part', t: 'box', s: [60, 20, 10], txt: 'La caixa fa 60 × 20 × 10 mm|La caja mide 60 × 20 × 10 mm' }, { k: 'match', target: M(MAO), th: 0.9, t: 'Ocupa el lloc del fantasma|Ocupa el sitio del fantasma' }, { k: 'onplate' }],
          hint: 'Toca la caixa, obre Mida i escriu 60 a la x, 20 a la y i 10 a la z.|Toca la caja, abre Medida y escribe 60 en la x, 20 en la y y 10 en la z.', sol: M([on('a1', 'box', [60, 20, 10], 0, 0, 0, '#E8453C')]) },
        { k: 'm3build', ph: 'repte', q: 'Un <b>dau gegant</b>: un cub de <b>40 mm</b>. Truc: activa <b>Proporcional</b> i canvia només una mida.|Un <b>dado gigante</b>: un cubo de <b>40 mm</b>. Truco: activa <b>Proporcional</b> y cambia solo una medida.',
          start: M([on('a1', 'box', [20, 20, 20], 0, 0, 0, '#F3F3EE')]), palette: ['box'], target: M(DAU),
          checks: [{ k: 'part', t: 'box', s: [40, 40, 40], txt: 'Les tres mides fan 40 mm|Las tres medidas miden 40 mm' }, { k: 'onplate' }],
          hint: 'A Mida, toca el botó Proporcional i escriu 40 a la x: la y i la z canvien soles.|En Medida, toca el botón Proporcional y escribe 40 en la x: la y y la z cambian solas.', sol: M([on('a1', 'box', [40, 40, 40], 0, 0, 0, '#F3F3EE')]) },
        { k: 'm3build', ph: 'repte', q: 'La <b>torre de 3 pisos</b> de la plaça: caixes de 40 × 40, 30 × 30 i 20 × 20 mm, totes de 10 mm d\'alt.|La <b>torre de 3 pisos</b> de la plaza: cajas de 40 × 40, 30 × 30 y 20 × 20 mm, todas de 10 mm de alto.',
          start: M([TORRE3[0]]), palette: ['box'], target: M(TORRE3),
          checks: [{ k: 'match', target: M(TORRE3), th: 0.88, t: 'La torre és com el fantasma|La torre es como el fantasma' }, { k: 'count', t: 'box', min: 3, txt: 'Almenys 3 caixes|Al menos 3 cajas' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Segon pis: 30 × 30 × 10 a z = 10. Tercer pis: 20 × 20 × 10 a z = 20. Tots a x = 0 i y = 0.|Segundo piso: 30 × 30 × 10 en z = 10. Tercer piso: 20 × 20 × 10 en z = 20. Todos en x = 0 e y = 0.', sol: M(TORRE3) },
        { k: 'm3build', ph: 'repte', q: "Una <b>escala de 3 graons</b> per a la plaça: cada graó és 10 mm més alt que l'anterior.|Una <b>escalera de 3 peldaños</b> para la plaza: cada peldaño es 10 mm más alto que el anterior.",
          start: M([ESCALA[0]]), palette: ['box'], target: M(ESCALA),
          checks: [{ k: 'match', target: M(ESCALA), th: 0.88, t: "L'escala és com el fantasma|La escalera es como el fantasma" }, { k: 'one' }, { k: 'onplate' }, { k: 'size', ax: 'x', v: 60, t: 'Fa 60 mm de llarg|Mide 60 mm de largo' }],
          hint: "Graons de 20 × 20 mm d'amplada i fondària, amb alçades 10, 20 i 30 mm, a x = −20, x = 0 i x = 20. Tots a z = 0.|Peldaños de 20 × 20 mm de anchura y fondo, con alturas 10, 20 y 30 mm, en x = −20, x = 0 y x = 20. Todos en z = 0.", sol: M(ESCALA) },
        { k: 'm3build', ph: 'repte', extra: true, q: 'Repte extra: un <b>banc</b> per a la plaça, amb dues potes i un seient a sobre.|Reto extra: un <b>banco</b> para la plaza, con dos patas y un asiento encima.',
          palette: ['box'], target: M(BANC),
          checks: [{ k: 'match', target: M(BANC), th: 0.85, t: 'El banc és com el fantasma|El banco es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Potes: 8 × 20 × 20 mm a x = −24 i x = 24. Seient: 60 × 20 × 6 mm a x = 0 i z = 20.|Patas: 8 × 20 × 20 mm en x = −24 y x = 24. Asiento: 60 × 20 × 6 mm en x = 0 y z = 20.', sol: M(BANC) },
        { k: 'm3free', ph: 'crea', q: '<b>Un edifici per a la maqueta.</b> Fes una casa, una escola o un gratacel amb <b>caixes</b>: almenys 3, i que una sigui un cub.|<b>Un edificio para la maqueta.</b> Haz una casa, una escuela o un rascacielos con <b>cajas</b>: al menos 3, y que una sea un cubo.',
          name: 'El meu edifici de caixes|Mi edificio de cajas', palette: ['box'],
          crit: ['Almenys 3 caixes|Al menos 3 cajas', 'Una de les caixes és un cub|Una de las cajas es un cubo', 'Les caixes estan ben apilades: res no flota|Las cajas están bien apiladas: nada flota', 'Toca la placa|Toca la placa'],
          checks: [{ k: 'count', t: 'box', min: 3, txt: 'Almenys 3 caixes|Al menos 3 cajas' }, { k: 'one' }, { k: 'onplate' }], sol: M(EDIFICI) },
        { k: 'quiz', ph: 'tanca', q: 'Una caixa de <b>30 × 30 × 30 mm</b> és…|Una caja de <b>30 × 30 × 30 mm</b> es…', opts: ['Un cub|Un cubo', 'Una caixa que no és un cub|Una caja que no es un cubo', 'Un cilindre|Un cilindro'], a: 0,
          ex: 'Té les tres mides iguals: és un cub.|Tiene las tres medidas iguales: es un cubo.' },
        { k: 'quiz', ph: 'tanca', q: "Poses una caixa de 15 mm d'alt a sobre d'una de <b>10 mm</b>. A quina <b>z</b> comença la de dalt?|Pones una caja de 15 mm de alto encima de una de <b>10 mm</b>. ¿En qué <b>z</b> empieza la de arriba?", opts: ['z = 10|z = 10', 'z = 15|z = 15', 'z = 25|z = 25'], a: 0,
          ex: 'La de dalt comença on acaba la de sota: a 10 mm. Tota la torre fa 25 mm.|La de arriba empieza donde acaba la de debajo: a 10 mm. Toda la torre mide 25 mm.' },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 2 · Cilindres i cons ---------- */
    { id: 'm2-2', t: 'Cilindres i cons|Cilindros y conos', min: 45, badge: 'm22rodones',
      learn: ["El cilindre té dues bases rodones: les seves mides són el diàmetre (x i y) i l'alçada (z).|El cilindro tiene dos bases redondas: sus medidas son el diámetro (x e y) y la altura (z).",
        'El diàmetre va de vora a vora passant pel centre; el radi és la meitat. Si x i y són iguals, la base és rodona.|El diámetro va de borde a borde pasando por el centro; el radio es la mitad. Si x e y son iguales, la base es redonda.',
        'El con acaba en punta; si en tallem la punta, tenim un tronc de con.|El cono acaba en punta; si le cortamos la punta, tenemos un tronco de cono.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Un <b>cub</b> és una caixa que…|Un <b>cubo</b> es una caja que…', opts: ['Té les tres mides iguals|Tiene las tres medidas iguales', 'Té 4 cares|Tiene 4 caras', 'És més alta que ampla|Es más alta que ancha'], a: 0,
          ex: 'Un cub té x = y = z, i 6 cares quadrades.|Un cubo tiene x = y = z, y 6 caras cuadradas.' },
        { k: 'm3look', ph: 'recorda', q: 'Aquesta és la torre de 3 pisos. A quina <b>z</b> comença el pis de dalt de tot?|Esta es la torre de 3 pisos. ¿En qué <b>z</b> empieza el piso de arriba del todo?', model: M(TORRE3), view: 'front', lock: true,
          opts: ['z = 20|z = 20', 'z = 10|z = 10', 'z = 30|z = 30'], a: 0, ex: 'Cada pis fa 10 mm: el de dalt comença a 10 + 10 = 20 mm.|Cada piso mide 10 mm: el de arriba empieza en 10 + 10 = 20 mm.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'Torres, arbres i un llapis|Torres, árboles y un lápiz',
          t: "A l'escola els han encantat les cases de caixes! Ara la maqueta necessita <b>arbres</b>, una <b>torre</b> per al castell i el <b>llapis gegant</b> que hi ha a l'entrada de l'escola. Totes aquestes coses tenen un secret en comú: són <b>rodones</b>. Avui coneixerem el <b>cilindre</b> i el <b>con</b>.|¡En la escuela les han encantado las casas de cajas! Ahora la maqueta necesita <b>árboles</b>, una <b>torre</b> para el castillo y el <b>lápiz gigante</b> que hay en la entrada de la escuela. Todas estas cosas tienen un secreto en común: son <b>redondas</b>. Hoy conoceremos el <b>cilindro</b> y el <b>cono</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El cilindre|El cilindro', t: 'Dues bases rodones i una alçada|Dos bases redondas y una altura', media: { k: 'model', model: M(CIL) },
            x: "El <b>cilindre</b> té dues bases que són <b>cercles</b> iguals i una cara corbada que les uneix. Al taller té dues mides importants: el <b>diàmetre</b> de la base (x i y) i l'<b>alçada</b> (z).|El <b>cilindro</b> tiene dos bases que son <b>círculos</b> iguales y una cara curvada que las une. En el taller tiene dos medidas importantes: el <b>diámetro</b> de la base (x e y) y la <b>altura</b> (z).",
            tip: 'Una llauna, una pila o un got de vidre són cilindres.|Una lata, una pila o un vaso de cristal son cilindros.' },
          { k: 'El diàmetre|El diámetro', t: 'De vora a vora passant pel centre|De borde a borde pasando por el centro', anim: 'm22diam',
            x: "El <b>diàmetre</b> és la línia més llarga que hi cap dins d'un cercle: va d'una vora a l'altra <b>passant pel centre</b>. La meitat del diàmetre és el <b>radi</b>. Un cilindre de 30 mm de diàmetre ocupa 3 quadrets de la placa.|El <b>diámetro</b> es la línea más larga que cabe dentro de un círculo: va de un borde al otro <b>pasando por el centro</b>. La mitad del diámetro es el <b>radio</b>. Un cilindro de 30 mm de diámetro ocupa 3 cuadritos de la placa." },
          { k: 'Rodó o ovalat|Redondo u ovalado', t: 'Si x i y són iguals, és rodó|Si x e y son iguales, es redondo', media: { k: 'model', model: M(OVAL), view: 'top', spin: false },
            x: "Si la <b>x</b> i la <b>y</b> són iguals, la base és un cercle perfecte, com el cilindre blau. Si són diferents, el cercle s'estira i es fa una <b>el·lipse</b> (un oval), com el taronja.|Si la <b>x</b> y la <b>y</b> son iguales, la base es un círculo perfecto, como el cilindro azul. Si son distintas, el círculo se estira y se hace una <b>elipse</b> (un óvalo), como el naranja.",
            tip: 'Per fer-lo rodó, escriu el mateix número a la x i a la y, o fes servir Proporcional.|Para hacerlo redondo, escribe el mismo número en la x y en la y, o usa Proporcional.' },
          { k: 'El con|El cono', t: 'Una base rodona que acaba en punta|Una base redonda que acaba en punta', media: { k: 'model', model: M(CONS) },
            x: "El <b>con</b> té una base rodona i es va estrenyent fins a una <b>punta</b> (el vèrtex). Les seves mides són com les del cilindre: diàmetre de la base (x i y) i alçada (z). Si li tallem la punta, tenim un <b>tronc de con</b>, com el groc.|El <b>cono</b> tiene una base redonda y se va estrechando hasta una <b>punta</b> (el vértice). Sus medidas son como las del cilindro: diámetro de la base (x e y) y altura (z). Si le cortamos la punta, tenemos un <b>tronco de cono</b>, como el amarillo.",
            tip: 'Un barret de festa és un con; un got de paper o una galleda, un tronc de con.|Un gorro de fiesta es un cono; un vaso de papel o un cubo de playa, un tronco de cono.' },
          { k: 'Família rodona|Familia redonda', t: 'Del cilindre al con|Del cilindro al cono', anim: 'm22cone',
            x: "Si a un cilindre li fas cada cop més petita la base de dalt, obtens un <b>tronc de con</b>; i quan la base de dalt desapareix del tot, un <b>con</b>. Vistos des de dalt, tots tres són cercles!|Si a un cilindro le haces cada vez más pequeña la base de arriba, obtienes un <b>tronco de cono</b>; y cuando la base de arriba desaparece del todo, un <b>cono</b>. Vistos desde arriba, ¡los tres son círculos!" }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🔍', title: 'Caçadors de formes rodones|Cazadores de formas redondas', t: 'Per parelles, amb un regle i la fitxa «Caça de cilindres i cons»:|Por parejas, con una regla y la ficha «Caza de cilindros y conos»:',
          steps: ["Busqueu a l'aula 3 cilindres i 1 con o tronc de con (llapis, retoladors, gots, la cola de barra…).|Buscad en el aula 3 cilindros y 1 cono o tronco de cono (lápices, rotuladores, vasos, la barra de pegamento…).",
            'Mesureu el diàmetre de cada un: poseu el regle per sobre de la base, passant pel centre.|Medid el diámetro de cada uno: poned la regla por encima de la base, pasando por el centro.',
            "Mesureu l'alçada i apunteu-ho tot a la fitxa en mil·límetres.|Medid la altura y apuntadlo todo en la ficha en milímetros.", 'Quin és el més gruixut? I el més alt?|¿Cuál es el más grueso? ¿Y el más alto?'],
          tip: 'Truc per trobar el diàmetre: mou el regle fins que la mida sigui la més gran possible.|Truco para encontrar el diámetro: mueve la regla hasta que la medida sea la más grande posible.' },
        { k: 'm3look', ph: 'prova', q: 'Quin és el <b>diàmetre</b> d\'aquest cilindre? Compta els quadrets (cada un fa 10 mm).|¿Cuál es el <b>diámetro</b> de este cilindro? Cuenta los cuadritos (cada uno mide 10 mm).', model: M(DIAM), view: 'top',
          opts: ['40 mm|40 mm', '20 mm|20 mm', '80 mm|80 mm'], a: 0, ex: 'Va de vora a vora passant pel centre: 4 quadrets, 40 mm. El radi en seria la meitat: 20 mm.|Va de borde a borde pasando por el centro: 4 cuadritos, 40 mm. El radio sería la mitad: 20 mm.' },
        { k: 'm3look', ph: 'prova', q: 'Toca el <b>tronc de con</b> (un con amb la punta tallada).|Toca el <b>tronco de cono</b> (un cono con la punta cortada).', model: M(TRIA), pick: 'tronc',
          no: 'Aquest no. Fixa\'t en la part de dalt: acaba en punta, és plana i igual que la base, o és plana però més petita?|Este no. Fíjate en la parte de arriba: ¿acaba en punta, es plana e igual que la base, o es plana pero más pequeña?',
          ex: 'El tronc de con té dues bases rodones de mida diferent: la de dalt és més petita.|El tronco de cono tiene dos bases redondas de tamaño distinto: la de arriba es más pequeña.' },
        { k: 'm3fix', ph: 'investiga', q: "Aquesta columna havia de ser <b>rodona</b>, però ha sortit ovalada. Arregla-la: <b>20 mm</b> de diàmetre i 50 mm d'alt.|Esta columna tenía que ser <b>redonda</b>, pero ha salido ovalada. Arréglala: <b>20 mm</b> de diámetro y 50 mm de alto.",
          start: M([on('a1', 'cyl', [34, 20, 50], 0, 0, 0, '#9AA3B5')]), fix: ['a1'], palette: ['cyl'],
          checks: [{ k: 'part', t: 'cyl', s: [20, 20, 50], txt: 'La columna és rodona: 20 × 20 × 50 mm|La columna es redonda: 20 × 20 × 50 mm' }, { k: 'onplate' }],
          hint: 'A Mida, la x és 34 i la y és 20: posa 20 a la x i quedarà rodona.|En Medida, la x es 34 y la y es 20: pon 20 en la x y quedará redonda.', sol: M([on('a1', 'cyl', [20, 20, 50], 0, 0, 0, '#9AA3B5')]) },
        { k: 'move', ph: 'pausa', title: 'Formes rodones amb el cos|Formas redondas con el cuerpo', secs: 30,
          t: 'Fes de <b>cilindre</b>: braços enganxats al cos, ben recte, i gira a poc a poc. Ara de <b>con</b>: cames obertes (la base) i mans juntes ben amunt (la punta). I ara de <b>tronc de con</b>: abaixa les mans fins al cap i aplana-les!|Haz de <b>cilindro</b>: brazos pegados al cuerpo, bien recto, y gira poco a poco. Ahora de <b>cono</b>: piernas abiertas (la base) y manos juntas bien arriba (la punta). Y ahora de <b>tronco de cono</b>: ¡baja las manos hasta la cabeza y aplánalas!' },
        { k: 'm3build', ph: 'repte', q: 'Una <b>moneda gegant</b> per a la plaça: un cilindre de <b>50 mm</b> de diàmetre i <b>5 mm</b> de gruix.|Una <b>moneda gigante</b> para la plaza: un cilindro de <b>50 mm</b> de diámetro y <b>5 mm</b> de grosor.',
          start: M([on('a1', 'cyl', [20, 20, 20], 0, 0, 0, '#F7C531')]), palette: ['cyl'], target: M(MONEDA),
          checks: [{ k: 'part', t: 'cyl', s: [50, 50, 5], txt: 'El cilindre fa 50 × 50 × 5 mm|El cilindro mide 50 × 50 × 5 mm' }, { k: 'match', target: M(MONEDA), th: 0.9, t: 'Ocupa el lloc del fantasma|Ocupa el sitio del fantasma' }, { k: 'onplate' }],
          hint: 'A Mida: x = 50, y = 50 i z = 5. Un cilindre baixet també és un cilindre!|En Medida: x = 50, y = 50 y z = 5. ¡Un cilindro bajito también es un cilindro!', sol: M([on('a1', 'cyl', [50, 50, 5], 0, 0, 0, '#F7C531')]) },
        { k: 'm3build', ph: 'repte', q: "El <b>llapis gegant</b> de l'escola: posa-li la punta, un con de <b>16 × 16 × 16 mm</b> a <b>z = 60</b>.|El <b>lápiz gigante</b> de la escuela: ponle la punta, un cono de <b>16 × 16 × 16 mm</b> en <b>z = 60</b>.",
          start: M([LLAPIS[0]]), palette: ['cone'], target: M(LLAPIS),
          checks: [{ k: 'match', target: M(LLAPIS), th: 0.9, t: 'El llapis és com el fantasma|El lápiz es como el fantasma' }, { k: 'count', t: 'cone', min: 1, txt: 'Hi ha un con|Hay un cono' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Afegeix un con, posa-li 16 a les tres mides i, a Posició, x = 0, y = 0 i z = 60.|Añade un cono, ponle 16 en las tres medidas y, en Posición, x = 0, y = 0 y z = 60.', sol: M(LLAPIS) },
        { k: 'm3build', ph: 'repte', q: "Un <b>arbre</b>: un tronc (cilindre de 10 × 10 × 20 mm) i una copa (con de 40 × 40 × 40 mm) a sobre.|Un <b>árbol</b>: un tronco (cilindro de 10 × 10 × 20 mm) y una copa (cono de 40 × 40 × 40 mm) encima.",
          palette: ['cyl', 'cone'], target: M(ARBRE),
          checks: [{ k: 'match', target: M(ARBRE), th: 0.88, t: "L'arbre és com el fantasma|El árbol es como el fantasma" }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Tronc: cilindre de 10 × 10 × 20 a z = 0. Copa: con de 40 × 40 × 40 a z = 20. Tots dos a x = 0 i y = 0.|Tronco: cilindro de 10 × 10 × 20 en z = 0. Copa: cono de 40 × 40 × 40 en z = 20. Los dos en x = 0 e y = 0.', sol: M(ARBRE) },
        { k: 'm3build', ph: 'repte', q: "Una <b>torre</b> per al castell: un cilindre de 30 mm de diàmetre i 50 mm d'alt, amb una teulada en forma de con (36 × 36 × 24 mm).|Una <b>torre</b> para el castillo: un cilindro de 30 mm de diámetro y 50 mm de alto, con un tejado en forma de cono (36 × 36 × 24 mm).",
          start: M([on('a1', 'cyl', [20, 20, 20], 0, 0, 0, '#9AA3B5')]), palette: ['cyl', 'cone'], target: M(TORRE),
          checks: [{ k: 'match', target: M(TORRE), th: 0.88, t: 'La torre és com el fantasma|La torre es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Canvia el cilindre a 30 × 30 × 50. Després afegeix un con de 36 × 36 × 24 a z = 50.|Cambia el cilindro a 30 × 30 × 50. Después añade un cono de 36 × 36 × 24 en z = 50.',
          sol: M([on('a1', 'cyl', [30, 30, 50], 0, 0, 0, '#9AA3B5'), TORRE[1]]) },
        { k: 'm3build', ph: 'repte', extra: true, q: 'Repte extra: un <b>avet</b> amb tres cons, cada un més petit que el de sota.|Reto extra: un <b>abeto</b> con tres conos, cada uno más pequeño que el de debajo.',
          palette: ['cyl', 'cone'], target: M(AVET),
          checks: [{ k: 'match', target: M(AVET), th: 0.82, t: "L'avet és com el fantasma|El abeto es como el fantasma" }, { k: 'count', t: 'cone', min: 3, txt: 'Almenys 3 cons|Al menos 3 conos' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Tronc: 10 × 10 × 12. Cons: 44 × 44 × 26 a z = 10; 34 × 34 × 22 a z = 26; 24 × 24 × 20 a z = 40.|Tronco: 10 × 10 × 12. Conos: 44 × 44 × 26 en z = 10; 34 × 34 × 22 en z = 26; 24 × 24 × 20 en z = 40.', sol: M(AVET) },
        { k: 'm3free', ph: 'crea', q: '<b>El coet de la plaça.</b> Dissenya un coet (o una altra cosa) amb <b>cilindres i cons</b>: almenys un de cada, tot connectat.|<b>El cohete de la plaza.</b> Diseña un cohete (u otra cosa) con <b>cilindros y conos</b>: al menos uno de cada, todo conectado.',
          name: 'El meu coet|Mi cohete', palette: ['cyl', 'cone', 'box', 'sph'],
          crit: ['Almenys un cilindre i un con|Al menos un cilindro y un cono', 'Tot connectat: és una sola peça|Todo conectado: es una sola pieza', 'Toca la placa|Toca la placa', "Has triat el diàmetre i l'alçada amb números|Has elegido el diámetro y la altura con números"],
          checks: [{ k: 'count', t: 'cyl', min: 1, txt: 'Almenys 1 cilindre|Al menos 1 cilindro' }, { k: 'count', t: 'cone', min: 1, txt: 'Almenys 1 con|Al menos 1 cono' }, { k: 'one' }, { k: 'onplate' }], sol: M(COET) },
        { k: 'quiz', ph: 'tanca', q: "El <b>diàmetre</b> d'un cercle va…|El <b>diámetro</b> de un círculo va…", opts: ["D'una vora a l'altra passant pel centre|De un borde al otro pasando por el centro", 'Del centre a la vora|Del centro al borde', 'Al voltant del cercle|Alrededor del círculo'], a: 0,
          ex: 'Del centre a la vora és el radi, la meitat del diàmetre.|Del centro al borde es el radio, la mitad del diámetro.' },
        { k: 'quiz', ph: 'tanca', q: 'Un got de paper té forma de…|Un vaso de papel tiene forma de…', opts: ['Tronc de con|Tronco de cono', 'Con|Cono', 'Esfera|Esfera'], a: 0,
          ex: 'Té dues bases rodones de mida diferent: és un tronc de con (cap per avall).|Tiene dos bases redondas de tamaño distinto: es un tronco de cono (boca abajo).' },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 3 · Esferes i piràmides ---------- */
    { id: 'm2-3', t: 'Esferes i piràmides|Esferas y pirámides', min: 45, badge: 'm23ninot',
      learn: ["L'esfera té les tres mides iguals; si no ho són, és un el·lipsoide (un ou, una llentia).|La esfera tiene las tres medidas iguales; si no lo son, es un elipsoide (un huevo, una lenteja).",
        'La piràmide té una base i 4 cares triangulars; la falca és una caixa tallada en diagonal.|La pirámide tiene una base y 4 caras triangulares; la cuña es una caja cortada en diagonal.',
        'Per apilar boles, la de dalt ha d\'entrar una mica dins la de sota: així queden enganxades.|Para apilar bolas, la de arriba tiene que entrar un poco dentro de la de debajo: así quedan pegadas.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Quines mides d\'un cilindre han de ser iguals perquè la base sigui <b>rodona</b>?|¿Qué medidas de un cilindro tienen que ser iguales para que la base sea <b>redonda</b>?', opts: ['La x i la y|La x y la y', 'La y i la z|La y y la z', 'La x i la z|La x y la z'], a: 0,
          ex: 'La x i la y són el diàmetre de la base: si són iguals, és un cercle. La z és l\'alçada.|La x y la y son el diámetro de la base: si son iguales, es un círculo. La z es la altura.' },
        { k: 'm3look', ph: 'recorda', q: 'Mirem un cilindre, un con i un tronc de con <b>des de dalt</b>. Com es veuen?|Miramos un cilindro, un cono y un tronco de cono <b>desde arriba</b>. ¿Cómo se ven?', model: M(TRIA), view: 'top', lock: true,
          opts: ['Tots tres com cercles|Los tres como círculos', 'Com tres triangles|Como tres triángulos', 'Com tres quadrats|Como tres cuadrados'], a: 0, ex: 'Totes tres formes tenen la base rodona: des de dalt, cercles.|Las tres formas tienen la base redonda: desde arriba, círculos.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: "L'hivern arriba a la maqueta|El invierno llega a la maqueta",
          t: "A la maqueta de l'escola hi ha arribat l'hivern! Volen un <b>ninot de neu</b> a la plaça i <b>teulades</b> per a les cases. Per fer-ho, coneixerem tres formes noves: l'<b>esfera</b>, la <b>piràmide</b> i la <b>falca</b>. I la Nuvi us explicarà un secret per enganxar bé les boles!|¡A la maqueta de la escuela ha llegado el invierno! Quieren un <b>muñeco de nieve</b> en la plaza y <b>tejados</b> para las casas. Para hacerlo, conoceremos tres formas nuevas: la <b>esfera</b>, la <b>pirámide</b> y la <b>cuña</b>. ¡Y Nuvi os explicará un secreto para pegar bien las bolas!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: "L'esfera|La esfera", t: 'Rodona per tots els costats|Redonda por todos los lados', anim: 'm23sph',
            x: "Tots els punts de la superfície d'una <b>esfera</b> són a la mateixa distància del centre: el <b>radi</b>. Per això es veu igual des de totes les vistes: sempre un cercle. Al taller només li cal una mida, el <b>diàmetre</b>, que és la x, la y i la z.|Todos los puntos de la superficie de una <b>esfera</b> están a la misma distancia del centro: el <b>radio</b>. Por eso se ve igual desde todas las vistas: siempre un círculo. En el taller solo necesita una medida, el <b>diámetro</b>, que es la x, la y y la z.",
            tip: 'Una pilota, una bola de neu o una perla són esferes.|Una pelota, una bola de nieve o una perla son esferas.' },
          { k: "L'el·lipsoide|El elipsoide", t: 'Una esfera estirada o aixafada|Una esfera estirada o aplastada', media: { k: 'model', model: M(ELIPS) },
            x: "Si les tres mides de l'esfera <b>no</b> són iguals, tens un <b>el·lipsoide</b>: un <b>ou</b> (més alt que ample), una <b>llentia</b> (aixafada) o una pilota de <b>rugbi</b> (allargada).|Si las tres medidas de la esfera <b>no</b> son iguales, tienes un <b>elipsoide</b>: un <b>huevo</b> (más alto que ancho), una <b>lenteja</b> (aplastada) o una pelota de <b>rugby</b> (alargada)." },
          { k: 'La piràmide|La pirámide', t: 'Una base i cares triangulars|Una base y caras triangulares', anim: 'm23pyr',
            x: "La <b>piràmide</b> té una base (al taller, quadrada o rectangular) i <b>4 cares triangulars</b> que s'ajunten a dalt, al <b>vèrtex</b>. Comptant la base, té 5 cares. És la teulada perfecta per a una casa!|La <b>pirámide</b> tiene una base (en el taller, cuadrada o rectangular) y <b>4 caras triangulares</b> que se juntan arriba, en el <b>vértice</b>. Contando la base, tiene 5 caras. ¡Es el tejado perfecto para una casa!",
            tip: "Les piràmides d'Egipte tenen la base quadrada, com les del taller.|Las pirámides de Egipto tienen la base cuadrada, como las del taller." },
          { k: 'La falca|La cuña', t: 'Una caixa tallada en diagonal|Una caja cortada en diagonal', media: { k: 'model', model: M(FALCA) },
            x: "La <b>falca</b> és com una caixa tallada en diagonal: per un costat és alta i per l'altre baixa fins a zero. Al taller, la part alta queda a l'<b>esquerra</b>. Serveix per fer rampes, tobogans i teulades inclinades.|La <b>cuña</b> es como una caja cortada en diagonal: por un lado es alta y por el otro baja hasta cero. En el taller, la parte alta queda a la <b>izquierda</b>. Sirve para hacer rampas, toboganes y tejados inclinados." },
          { k: 'Compte!|¡Cuidado!', t: 'Les boles es toquen molt poc|Las bolas se tocan muy poco', anim: 'm23overlap',
            x: "Una esfera sobre una superfície plana només la toca en <b>un punt</b>. Per apilar boles, com en un ninot de neu, fes que la de dalt <b>entri uns mil·límetres</b> dins la de sota: quedaran ben enganxades i la Nuvi les imprimirà com una sola peça.|Una esfera sobre una superficie plana solo la toca en <b>un punto</b>. Para apilar bolas, como en un muñeco de nieve, haz que la de arriba <b>entre unos milímetros</b> dentro de la de debajo: quedarán bien pegadas y Nuvi las imprimirá como una sola pieza.",
            bad: 'Poso la bola de dalt just on acaba la de sota.|Pongo la bola de arriba justo donde acaba la de debajo.', good: 'Baixo una mica la bola de dalt perquè entri dins la de sota.|Bajo un poco la bola de arriba para que entre dentro de la de debajo.' }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🟠', title: 'Formes de plastilina|Formas de plastilina', t: 'Cada alumne/a, amb un tros de plastilina i un regle:|Cada alumno/a, con un trozo de plastilina y una regla:',
          steps: ['Fes una <b>esfera</b> fent rodolar la plastilina entre les mans.|Haz una <b>esfera</b> haciendo rodar la plastilina entre las manos.', "Aixafa-la una mica: ara és un <b>el·lipsoide</b> (una llentia). Estira-la: un ou!|Aplástala un poco: ahora es un <b>elipsoide</b> (una lenteja). Estírala: ¡un huevo!",
            "Fes un cub i talla'l en diagonal amb el regle: tens dues <b>falques</b>.|Haz un cubo y córtalo en diagonal con la regla: tienes dos <b>cuñas</b>.", 'Fes una <b>piràmide</b> pessigant quatre cares fins que facin punta. Quantes cares té?|Haz una <b>pirámide</b> pellizcando cuatro caras hasta que hagan punta. ¿Cuántas caras tiene?'],
          tip: 'La falca té 5 cares: 2 triangles i 3 rectangles. La piràmide també en té 5: 4 triangles i la base.|La cuña tiene 5 caras: 2 triángulos y 3 rectángulos. La pirámide también tiene 5: 4 triángulos y la base.' },
        { k: 'm3look', ph: 'prova', q: "Toca l'<b>el·lipsoide</b> (la forma d'ou).|Toca el <b>elipsoide</b> (la forma de huevo).", model: M(OU3), pick: 'ou',
          no: "Aquesta no. Mira-les des de davant: l'ou és rodó però més alt que ample.|Esta no. Míralas desde delante: el huevo es redondo pero más alto que ancho.", ex: "L'ou fa 24 × 24 × 36 mm: la z és més gran que la x i la y.|El huevo mide 24 × 24 × 36 mm: la z es mayor que la x y la y." },
        { k: 'm3look', ph: 'prova', q: 'Quantes <b>cares</b> té aquesta piràmide, comptant la base? Gira-la si cal.|¿Cuántas <b>caras</b> tiene esta pirámide, contando la base? Gírala si hace falta.', model: M(PIR),
          opts: ['5|5', '4|4', '6|6'], a: 0, ex: 'Té 4 triangles que fan punta i 1 base quadrada: 5 cares.|Tiene 4 triángulos que hacen punta y 1 base cuadrada: 5 caras.' },
        { k: 'm3fix', ph: 'investiga', q: "Aquest ninot de neu <b>s'ha desenganxat</b>: el cap flota. Baixa'l fins que entri una mica dins del cos.|Este muñeco de nieve <b>se ha despegado</b>: la cabeza flota. Bájala hasta que entre un poco dentro del cuerpo.",
          start: M(NINOT2), fix: ['cap'], palette: ['sph'],
          checks: [{ k: 'one' }, { k: 'onplate' }, { k: 'size', ax: 'z', v: 60, tol: 4, t: "El ninot fa uns 60 mm d'alt|El muñeco mide unos 60 mm de alto" }],
          hint: 'El cos fa 40 mm. A Posició, posa la z del cap a 34: entrarà 6 mm dins del cos.|El cuerpo mide 40 mm. En Posición, pon la z de la cabeza en 34: entrará 6 mm dentro del cuerpo.', sol: M([NINOT2[0], on('cap', 'sph', [26, 26, 26], 0, 0, 34, '#F3F3EE')]) },
        { k: 'move', ph: 'pausa', title: 'Bola, ou i piràmide|Bola, huevo y pirámide', secs: 30,
          t: "Fes-te una <b>bola</b>: ajup-te i abraça't els genolls. Ara un <b>ou</b>: dret, amb els braços per sobre del cap fent un oval. Ara una <b>piràmide</b>: cames obertes i mans juntes ben amunt. I una <b>rampa</b>: inclina't cap a un costat!|Hazte una <b>bola</b>: agáchate y abrázate las rodillas. Ahora un <b>huevo</b>: de pie, con los brazos por encima de la cabeza haciendo un óvalo. Ahora una <b>pirámide</b>: piernas abiertas y manos juntas bien arriba. ¡Y una <b>rampa</b>: inclínate hacia un lado!" },
        { k: 'm3build', ph: 'repte', q: "Un <b>ou</b> per a la cistella de la maqueta: un el·lipsoide de <b>24 × 24 × 34 mm</b>.|Un <b>huevo</b> para la cesta de la maqueta: un elipsoide de <b>24 × 24 × 34 mm</b>.",
          start: M([on('a1', 'sph', [20, 20, 20], 0, 0, 0, '#F7C531')]), palette: ['sph'], target: M(OU),
          checks: [{ k: 'part', t: 'sph', s: [24, 24, 34], txt: "L'ou fa 24 × 24 × 34 mm|El huevo mide 24 × 24 × 34 mm" }, { k: 'match', target: M(OU), th: 0.9, t: 'Ocupa el lloc del fantasma|Ocupa el sitio del fantasma' }, { k: 'onplate' }],
          hint: "Toca l'esfera i, a Mida, posa x = 24, y = 24 i z = 34. Amb Proporcional desactivat!|Toca la esfera y, en Medida, pon x = 24, y = 24 y z = 34. ¡Con Proporcional desactivado!", sol: M([on('a1', 'sph', [24, 24, 34], 0, 0, 0, '#F7C531')]) },
        { k: 'm3build', ph: 'repte', q: 'Una <b>casa amb teulada</b>: posa una piràmide de <b>44 × 44 × 20 mm</b> a sobre de la casa.|Una <b>casa con tejado</b>: pon una pirámide de <b>44 × 44 × 20 mm</b> encima de la casa.',
          start: M([CASA[0]]), palette: ['pyr', 'box'], target: M(CASA),
          checks: [{ k: 'match', target: M(CASA), th: 0.9, t: 'La casa és com el fantasma|La casa es como el fantasma' }, { k: 'count', t: 'pyr', min: 1, txt: 'Hi ha una piràmide|Hay una pirámide' }, { k: 'one' }, { k: 'onplate' }],
          hint: "La casa fa 30 mm d'alt. Afegeix una piràmide de 44 × 44 × 20 i, a Posició, posa x = 0, y = 0 i z = 30.|La casa mide 30 mm de alto. Añade una pirámide de 44 × 44 × 20 y, en Posición, pon x = 0, y = 0 y z = 30.", sol: M(CASA) },
        { k: 'm3build', ph: 'repte', q: 'El <b>ninot de neu</b> de la plaça: tres boles de 40, 30 i 20 mm, ben enganxades.|El <b>muñeco de nieve</b> de la plaza: tres bolas de 40, 30 y 20 mm, bien pegadas.',
          start: M([NINOT[0]]), palette: ['sph'], target: M(NINOT),
          checks: [{ k: 'match', target: M(NINOT), th: 0.85, t: 'El ninot és com el fantasma|El muñeco es como el fantasma' }, { k: 'count', t: 'sph', min: 3, txt: 'Almenys 3 boles|Al menos 3 bolas' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Bola del mig: 30 × 30 × 30 a z = 34. Cap: 20 × 20 × 20 a z = 60. Així cada bola entra una mica dins la de sota.|Bola del medio: 30 × 30 × 30 en z = 34. Cabeza: 20 × 20 × 20 en z = 60. Así cada bola entra un poco dentro de la de debajo.', sol: M(NINOT) },
        { k: 'm3build', ph: 'repte', q: 'Una <b>rampa</b> per pujar a la caixa: una falca de <b>40 × 20 × 20 mm</b> enganxada a la caixa.|Una <b>rampa</b> para subir a la caja: una cuña de <b>40 × 20 × 20 mm</b> pegada a la caja.',
          start: M([RAMPA[0]]), palette: ['wedge'], target: M(RAMPA),
          checks: [{ k: 'match', target: M(RAMPA), th: 0.9, t: 'La rampa és com el fantasma|La rampa es como el fantasma' }, { k: 'count', t: 'wedge', min: 1, txt: 'Hi ha una falca|Hay una cuña' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Afegeix una falca i posa-li 40 × 20 × 20. A Posició, x = 0 i y = 0: la part alta (la de l\'esquerra) tocarà la caixa.|Añade una cuña y ponle 40 × 20 × 20. En Posición, x = 0 e y = 0: la parte alta (la de la izquierda) tocará la caja.', sol: M(RAMPA) },
        { k: 'm3build', ph: 'repte', extra: true, q: 'Repte extra: un <b>bolet</b>. El peu és un cilindre i el barret, un el·lipsoide aixafat.|Reto extra: una <b>seta</b>. El pie es un cilindro y el sombrero, un elipsoide aplastado.',
          palette: ['cyl', 'sph'], target: M(BOLET),
          checks: [{ k: 'match', target: M(BOLET), th: 0.85, t: 'El bolet és com el fantasma|La seta es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Peu: cilindre de 12 × 12 × 24. Barret: esfera de 44 × 44 × 20 a z = 18, perquè entri dins del peu.|Pie: cilindro de 12 × 12 × 24. Sombrero: esfera de 44 × 44 × 20 en z = 18, para que entre dentro del pie.', sol: M(BOLET) },
        { k: 'm3free', ph: 'crea', q: '<b>Un personatge per a la plaça.</b> Inventa un ninot, un animal o un monstre amable amb <b>esferes</b> i alguna <b>piràmide</b> o <b>falca</b>.|<b>Un personaje para la plaza.</b> Inventa un muñeco, un animal o un monstruo amable con <b>esferas</b> y alguna <b>pirámide</b> o <b>cuña</b>.',
          name: 'El meu personatge|Mi personaje', palette: ['sph', 'pyr', 'wedge', 'cyl', 'cone', 'box'],
          crit: ['Almenys 4 peces|Al menos 4 piezas', 'Hi ha almenys una esfera o un el·lipsoide|Hay al menos una esfera o un elipsoide', "Les boles entren una mica l'una dins de l'altra|Las bolas entran un poco una dentro de la otra", 'Tot connectat i tocant la placa|Todo conectado y tocando la placa'],
          checks: [{ k: 'count', min: 4, txt: 'Almenys 4 peces|Al menos 4 piezas' }, { k: 'count', t: 'sph', min: 1, txt: 'Almenys 1 esfera|Al menos 1 esfera' }, { k: 'one' }, { k: 'onplate' }], sol: M(PERSONATGE) },
        { k: 'quiz', ph: 'tanca', q: 'Quina forma es veu <b>igual</b> des de totes les vistes?|¿Qué forma se ve <b>igual</b> desde todas las vistas?', opts: ["L'esfera|La esfera", 'La piràmide|La pirámide', 'La falca|La cuña'], a: 0,
          ex: "L'esfera és un cercle des de davant, des de dalt i des del costat.|La esfera es un círculo desde delante, desde arriba y desde el lado." },
        { k: 'quiz', ph: 'tanca', q: 'Per apilar dues boles ben enganxades…|Para apilar dos bolas bien pegadas…', opts: ['La de dalt ha d\'entrar una mica dins la de sota|La de arriba tiene que entrar un poco dentro de la de debajo', "S'han de tocar només en un punt|Se tienen que tocar solo en un punto", "Hi ha d'haver una mica d'aire entre elles|Tiene que haber un poco de aire entre ellas"], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 4 · Projecte: el castell ---------- */
    { id: 'm2-4', t: 'Projecte: el castell|Proyecto: el castillo', min: 45, proj: true, badge: 'm24castell',
      learn: ['Abans de modelar un projecte, faig un esbós i una llista de peces amb les mides.|Antes de modelar un proyecto, hago un boceto y una lista de piezas con las medidas.',
        'Un model és simètric si les dues meitats són com en un mirall: si una torre és a x = −40, la bessona va a x = 40.|Un modelo es simétrico si las dos mitades son como en un espejo: si una torre está en x = −40, la gemela va en x = 40.',
        "Les peces s'han de tocar o encavalcar perquè la Nuvi imprimeixi una sola peça.|Las piezas tienen que tocarse o solaparse para que Nuvi imprima una sola pieza."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Per fer una <b>torre amb teulada</b>, quines formes fas servir?|Para hacer una <b>torre con tejado</b>, ¿qué formas usas?', opts: ['Un cilindre i un con a sobre|Un cilindro y un cono encima', 'Dues esferes|Dos esferas', 'Una falca i una caixa|Una cuña y una caja'], a: 0,
          ex: 'El cilindre és la torre i el con, la teulada punxeguda.|El cilindro es la torre y el cono, el tejado puntiagudo.' },
        { k: 'm3look', ph: 'recorda', q: "Aquesta torre fa 50 mm d'alt. A quina <b>z</b> comença la teulada?|Esta torre mide 50 mm de alto. ¿En qué <b>z</b> empieza el tejado?", model: M(TORRE2), view: 'front', lock: true,
          opts: ['z = 50|z = 50', 'z = 25|z = 25', 'z = 74|z = 74'], a: 0, ex: 'La teulada comença just on acaba la torre: a 50 mm. Arriba fins a 74 mm.|El tejado empieza justo donde acaba la torre: a 50 mm. Llega hasta 74 mm.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'El castell de la maqueta|El castillo de la maqueta',
          t: "Ha arribat el moment més esperat: l'escola ens encarrega el <b>castell</b> de la maqueta! Ens posen unes condicions: <b>dues torres</b> amb teulada, una <b>muralla</b>, una <b>porta</b>… i ha de ser <b>simètric</b>, com els castells dels contes. Primer el planificarem i després cada arquitecte/a del taller dissenyarà el seu. La Nuvi imprimirà el que més s'ajusti a les condicions!|Ha llegado el momento más esperado: ¡la escuela nos encarga el <b>castillo</b> de la maqueta! Nos ponen unas condiciones: <b>dos torres</b> con tejado, una <b>muralla</b>, una <b>puerta</b>… y tiene que ser <b>simétrico</b>, como los castillos de los cuentos. Primero lo planificaremos y después cada arquitecto/a del taller diseñará el suyo. ¡Nuvi imprimirá el que mejor se ajuste a las condiciones!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Planificar|Planificar', t: "Primer l'esbós, després el model|Primero el boceto, después el modelo", anim: 'm24plan',
            x: "Els arquitectes no comencen a construir a l'atzar: primer fan un <b>esbós</b> (des de dalt i des de davant) i una <b>llista de peces</b> amb les mides. Així saben quantes peces necessiten i on va cadascuna.|Los arquitectos no empiezan a construir al azar: primero hacen un <b>boceto</b> (desde arriba y desde delante) y una <b>lista de piezas</b> con las medidas. Así saben cuántas piezas necesitan y dónde va cada una." },
          { k: 'Les parts|Las partes', t: 'Torres, muralla, porta i merlets|Torres, muralla, puerta y almenas', media: { k: 'model', model: M(CASTELL) },
            x: "<b>Torre</b> = cilindre + con a sobre. <b>Muralla</b> = caixa llarga i estreta. <b>Porta</b> = caixa fosca enganxada al davant de la muralla. <b>Merlets</b> = cubs petits a dalt de la muralla. Totes són formes que ja coneixes!|<b>Torre</b> = cilindro + cono encima. <b>Muralla</b> = caja larga y estrecha. <b>Puerta</b> = caja oscura pegada delante de la muralla. <b>Almenas</b> = cubos pequeños encima de la muralla. ¡Todas son formas que ya conoces!" },
          { k: 'Simetria|Simetría', t: 'Les dues meitats, com en un mirall|Las dos mitades, como en un espejo', anim: 'm24sym',
            x: "Un castell és <b>simètric</b> si, posant un mirall al mig, la meitat esquerra és el reflex de la dreta. Al taller és fàcil: si una torre és a <b>x = −40</b>, la seva bessona va a <b>x = 40</b>, amb les mateixes mides i la mateixa alçada.|Un castillo es <b>simétrico</b> si, poniendo un espejo en el medio, la mitad izquierda es el reflejo de la derecha. En el taller es fácil: si una torre está en <b>x = −40</b>, su gemela va en <b>x = 40</b>, con las mismas medidas y la misma altura.",
            tip: 'Les peces del mig, com la porta, van a x = 0.|Las piezas del medio, como la puerta, van en x = 0.' },
          { k: 'Tot connectat|Todo conectado', t: 'Una sola peça per a la Nuvi|Una sola pieza para Nuvi', media: { k: 'model', model: M(CASTELL), view: 'top', spin: false },
            x: "Cada torre ha de tocar la muralla o entrar-hi una mica, i cada teulada ha de reposar sobre la seva torre. Des de dalt es veu molt bé: els cercles de les torres tapen els extrems de la muralla.|Cada torre tiene que tocar la muralla o entrar un poco, y cada tejado tiene que descansar sobre su torre. Desde arriba se ve muy bien: los círculos de las torres tapan los extremos de la muralla.",
            bad: 'Poso les torres a prop de la muralla, més o menys.|Pongo las torres cerca de la muralla, más o menos.', good: 'Poso el centre de cada torre just a l\'extrem de la muralla: s\'hi encavalca.|Pongo el centro de cada torre justo en el extremo de la muralla: se solapa.' }
        ] },
        { k: 'seq', ph: 'mans', q: 'En quin ordre construiries el castell? Primer el que aguanta, després el que va a sobre.|¿En qué orden construirías el castillo? Primero lo que aguanta, después lo que va encima.',
          items: ['La muralla, a z = 0|La muralla, en z = 0', 'Les dues torres, a x = −40 i x = 40|Las dos torres, en x = −40 y x = 40', 'Les teulades, a sobre de cada torre|Los tejados, encima de cada torre', 'La porta i els merlets|La puerta y las almenas', 'Revisar: simètric, connectat i tocant la placa|Revisar: simétrico, conectado y tocando la placa'],
          ex: 'Es construeix de baix a dalt, com la Nuvi; i al final, sempre es revisa.|Se construye de abajo arriba, como Nuvi; y al final, siempre se revisa.' },
        { k: 'unplug', ph: 'mans', ico: '🏰', title: "L'esbós del castell|El boceto del castillo", t: 'Amb la fitxa quadriculada «Esbós del castell» (cada quadret, 10 mm):|Con la ficha cuadriculada «Boceto del castillo» (cada cuadrito, 10 mm):',
          steps: ['Dibuixa el castell vist des de dalt: muralla, torres i porta.|Dibuja el castillo visto desde arriba: muralla, torres y puerta.', "Dibuixa'l des de davant: quina alçada té cada torre?|Dibújalo desde delante: ¿qué altura tiene cada torre?",
            'Escriu la llista de peces: forma, mides i posició.|Escribe la lista de piezas: forma, medidas y posición.', 'Comprova la simetria: doblega el full pel mig. Coincideixen les dues meitats?|Comprueba la simetría: dobla la hoja por la mitad. ¿Coinciden las dos mitades?'],
          tip: "Si una torre és 4 quadrets a l'esquerra del mig, la bessona ha d'anar 4 quadrets a la dreta.|Si una torre está 4 cuadritos a la izquierda del medio, la gemela tiene que ir 4 cuadritos a la derecha." },
        { k: 'm3look', ph: 'prova', q: 'Aquest castell <b>no és simètric</b>. Toca la peça que ho espatlla.|Este castillo <b>no es simétrico</b>. Toca la pieza que lo estropea.', model: M(ASIM), view: 'front', pick: ['t2', 's2'],
          yes: 'Exacte!|¡Exacto!', no: "Aquesta té una bessona igual a l'altre costat. Compara les dues torres des de davant.|Esta tiene una gemela igual al otro lado. Compara las dos torres desde delante.",
          ex: "La torre de la dreta fa 64 mm d'alt i la de l'esquerra, 50 mm: les meitats no són iguals.|La torre de la derecha mide 64 mm de alto y la de la izquierda, 50 mm: las mitades no son iguales." },
        { k: 'm3fix', ph: 'investiga', q: "La torre de la dreta <b>s'ha separat</b> de la muralla. Arregla-la perquè el castell sigui simètric i d'una sola peça.|La torre de la derecha <b>se ha separado</b> de la muralla. Arréglala para que el castillo sea simétrico y de una sola pieza.",
          start: M([MUR, T1, on('t2', 'cyl', [24, 24, 50], 62, 0, 0, '#9AA3B5')]), fix: ['t2'], palette: ['cyl'],
          checks: [{ k: 'one' }, { k: 'sym', ax: 'x' }, { k: 'onplate' }],
          hint: "La torre de l'esquerra és a x = −40: posa la de la dreta a x = 40.|La torre de la izquierda está en x = −40: pon la de la derecha en x = 40.", sol: M([MUR, T1, T2]) },
        { k: 'move', ph: 'pausa', title: 'Castell de mirall|Castillo de espejo', secs: 40,
          t: "Per parelles, l'un davant de l'altre: un fa de castell (braços en creu, un puny amunt…) i l'altre és el <b>mirall</b> i el copia. Si aixeques la mà dreta, el mirall aixeca l'esquerra! Canvieu cada 10 segons.|Por parejas, uno delante del otro: uno hace de castillo (brazos en cruz, un puño arriba…) y el otro es el <b>espejo</b> y lo copia. Si levantas la mano derecha, ¡el espejo levanta la izquierda! Cambiad cada 10 segundos." },
        { k: 'm3build', ph: 'repte', q: 'Comencem per la <b>muralla</b>: una caixa de <b>80 × 12 × 30 mm</b> al mig de la placa.|Empezamos por la <b>muralla</b>: una caja de <b>80 × 12 × 30 mm</b> en el centro de la placa.',
          start: M([on('a1', 'box', [20, 20, 20], 0, 0, 0, '#C9B79C')]), palette: ['box'], target: M([MUR]),
          checks: [{ k: 'part', t: 'box', s: [80, 12, 30], txt: 'La muralla fa 80 × 12 × 30 mm|La muralla mide 80 × 12 × 30 mm' }, { k: 'match', target: M([MUR]), th: 0.9, t: 'Ocupa el lloc del fantasma|Ocupa el sitio del fantasma' }, { k: 'onplate' }],
          hint: 'A Mida: x = 80, y = 12 i z = 30. A Posició: x = 0 i y = 0.|En Medida: x = 80, y = 12 y z = 30. En Posición: x = 0 e y = 0.', sol: M([on('a1', 'box', [80, 12, 30], 0, 0, 0, '#C9B79C')]) },
        { k: 'm3build', ph: 'repte', q: "Les <b>dues torres</b>: cilindres de 24 mm de diàmetre i 50 mm d'alt, a <b>x = −40</b> i <b>x = 40</b>.|Las <b>dos torres</b>: cilindros de 24 mm de diámetro y 50 mm de alto, en <b>x = −40</b> y <b>x = 40</b>.",
          start: M([MUR]), palette: ['cyl'], target: M([MUR, T1, T2]),
          checks: [{ k: 'match', target: M([MUR, T1, T2]), th: 0.88, t: 'És com el fantasma|Es como el fantasma' }, { k: 'count', t: 'cyl', min: 2, txt: 'Almenys 2 torres (cilindres)|Al menos 2 torres (cilindros)' }, { k: 'sym', ax: 'x' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Afegeix un cilindre de 24 × 24 × 50 i posa\'l a x = −40. Duplica\'l (o afegeix-ne un altre) i posa\'l a x = 40.|Añade un cilindro de 24 × 24 × 50 y ponlo en x = −40. Duplícalo (o añade otro) y ponlo en x = 40.', sol: M([MUR, T1, T2]) },
        { k: 'm3build', ph: 'repte', q: 'Les <b>teulades</b>: un con de <b>30 × 30 × 20 mm</b> a sobre de cada torre.|Los <b>tejados</b>: un cono de <b>30 × 30 × 20 mm</b> encima de cada torre.',
          start: M([MUR, T1, T2]), palette: ['cone'], target: M([MUR, T1, T2, S1, S2]),
          checks: [{ k: 'match', target: M([MUR, T1, T2, S1, S2]), th: 0.9, t: 'És com el fantasma|Es como el fantasma' }, { k: 'count', t: 'cone', min: 2, txt: 'Almenys 2 teulades (cons)|Al menos 2 tejados (conos)' }, { k: 'sym', ax: 'x' }, { k: 'one' }],
          hint: 'Les torres fan 50 mm: cada con va a z = 50, un a x = −40 i l\'altre a x = 40.|Las torres miden 50 mm: cada cono va en z = 50, uno en x = −40 y el otro en x = 40.', sol: M([MUR, T1, T2, S1, S2]) },
        { k: 'm3build', ph: 'repte', extra: true, q: 'Repte extra: la <b>porta</b>, una caixa de 16 × 4 × 22 mm enganxada al davant de la muralla (y = −7).|Reto extra: la <b>puerta</b>, una caja de 16 × 4 × 22 mm pegada delante de la muralla (y = −7).',
          start: M([MUR, T1, T2, S1, S2]), palette: ['box'], target: M([MUR, T1, T2, S1, S2, PORTA]),
          checks: [{ k: 'part', t: 'box', s: [16, 4, 22], at: [0, -7, null], tol: 1.5, txt: 'La porta és al mig, al davant de la muralla|La puerta está en el medio, delante de la muralla' }, { k: 'sym', ax: 'x' }, { k: 'one' }],
          hint: 'Afegeix una caixa de 16 × 4 × 22. A Posició: x = 0, y = −7 i z = 0. Així entra 1 mm dins de la muralla.|Añade una caja de 16 × 4 × 22. En Posición: x = 0, y = −7 y z = 0. Así entra 1 mm dentro de la muralla.', sol: M([MUR, T1, T2, S1, S2, PORTA]) },
        { k: 'm3free', ph: 'crea', q: "<b>El teu castell per a la maqueta.</b> Dissenya'l com vulguis, però ha de complir les condicions de l'escola. Fes servir el teu esbós!|<b>Tu castillo para la maqueta.</b> Diséñalo como quieras, pero tiene que cumplir las condiciones de la escuela. ¡Usa tu boceto!",
          name: 'El meu castell|Mi castillo', palette: ['box', 'cyl', 'cone', 'pyr', 'sph', 'wedge'],
          crit: ['Almenys 2 torres amb teulada (cilindre + con)|Al menos 2 torres con tejado (cilindro + cono)', 'Una muralla i una porta|Una muralla y una puerta', 'És simètric (mirall en x)|Es simétrico (espejo en x)', 'Tot connectat i tocant la placa|Todo conectado y tocando la placa'],
          checks: [{ k: 'count', t: 'cyl', min: 2, txt: 'Almenys 2 torres (cilindres)|Al menos 2 torres (cilindros)' }, { k: 'count', t: 'cone', min: 2, txt: 'Almenys 2 teulades (cons)|Al menos 2 tejados (conos)' }, { k: 'count', t: 'box', min: 2, txt: 'Muralla i porta (almenys 2 caixes)|Muralla y puerta (al menos 2 cajas)' },
            { k: 'sym', ax: 'x' }, { k: 'one' }, { k: 'onplate' }], sol: M(CASTELL) },
        { k: 'review', ph: 'crea', q: 'Revisa el teu castell com un arquitecte/a.|Revisa tu castillo como un arquitecto/a.',
          items: [{ q: 'Has seguit el teu esbós?|¿Has seguido tu boceto?', opts: ['Sí, gairebé igual|Sí, casi igual', 'He canviat algunes coses|He cambiado algunas cosas', 'He fet un castell diferent|He hecho un castillo distinto'] },
            { q: "Què t'ha costat més?|¿Qué te ha costado más?", opts: ['La simetria|La simetría', 'Apilar les teulades|Apilar los tejados', 'Connectar les torres|Conectar las torres', 'Res, ha anat bé|Nada, ha ido bien'] },
            { q: 'Què hi afegiries la propera vegada?|¿Qué añadirías la próxima vez?', opts: ['Més torres|Más torres', 'Merlets|Almenas', 'Un pont|Un puente', 'Una bandera|Una bandera'] }] },
        { k: 'quiz', ph: 'tanca', q: 'Una torre és a <b>x = −40</b>. On va la bessona perquè el castell sigui simètric?|Una torre está en <b>x = −40</b>. ¿Dónde va la gemela para que el castillo sea simétrico?', opts: ['x = 40|x = 40', 'x = −40|x = −40', 'x = 0|x = 0'], a: 0,
          ex: 'A la mateixa distància del mig, però a l\'altre costat: el número oposat.|A la misma distancia del medio, pero al otro lado: el número opuesto.' },
        { k: 'quiz', ph: 'tanca', q: 'Per què les torres han de tocar la muralla?|¿Por qué las torres tienen que tocar la muralla?', opts: ['Perquè la Nuvi imprimeixi el castell d\'una sola peça|Para que Nuvi imprima el castillo de una sola pieza', 'Perquè semblin més altes|Para que parezcan más altas', 'No cal que la toquin|No hace falta que la toquen'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] };
})();
