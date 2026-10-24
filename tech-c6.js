/* Numi Tech · Tech 3D · Nivell 1 · sessions de les unitats. Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */
(function () {
const COURSE_UNITS = {};

/* ── unitat 1 ── */
/* Tech 3D · Nivell 1 · unitat 1 «L'espai 3D» (m1-1 … m1-4)
   Contingut propi de Numi. Fil narratiu: el Taller de Bit, amb la Nuvi, la impressora 3D. m1-1: mirar i girar la vista;
   m1-2: les vistes (alçat, planta i perfil); m1-3: coordenades x, y, z; m1-4: projecte, la primera escultura.
   Models: peces { id, t, s: [x, y, z] (mm), p: centre, r: graus, c: color, hole }, placa de 200 × 200 mm centrada a l'origen. */
Object.assign(TBADGE, {
  m12vistes: { id: 'm12vistes', ico: '👁️', n: 'Ull de dissenyador/a|Ojo de diseñador/a', d: 'Llegeixes les vistes de davant, de dalt i del costat d\'un objecte.|Lees las vistas de delante, de arriba y del lado de un objeto.' },
  m14escultura: { id: 'm14escultura', ico: '🗿', n: 'Escultor/a 3D|Escultor/a 3D', d: 'Has dissenyat la teva primera escultura 3D, ben recolzada i bonica de totes les vistes.|Has diseñado tu primera escultura 3D, bien apoyada y bonita desde todas las vistas.' }
});
COURSE_UNITS[1] = (() => {
  const P = (id, t, s, p, c, o = {}) => ({ id, t, s, p, r: o.r || [0, 0, 0], c, ...o });
  // la casa de la Nuvi (amb una estrella amagada al darrere)
  const CASA = [P('base', 'box', [40, 30, 24], [0, 0, 12], '#F5893A'), P('teulada', 'pyr', [46, 36, 18], [0, 0, 33], '#E8453C'), P('porta', 'box', [10, 2, 14], [0, -15.5, 7], '#A0683A'), P('xemeneia', 'cyl', [7, 7, 14], [12, 6, 38], '#9AA3B5')];
  const AMAGADA = [...CASA, P('estrella', 'star', [16, 16, 4], [0, 28, 9], '#F7C531', { r: [90, 0, 0] })];
  const TORRE = [P('t1', 'box', [30, 30, 10], [0, 0, 5], '#3D7BF4'), P('t2', 'cyl', [20, 20, 16], [0, 0, 18], '#2FB36D'), P('t3', 'box', [16, 16, 10], [0, 0, 31], '#F7C531'), P('t4', 'cone', [18, 18, 14], [0, 0, 43], '#E8453C')];
  const TRES = [P('caixa', 'box', [24, 24, 14], [-30, 10, 7], '#3D7BF4'), P('cilindre', 'cyl', [16, 16, 36], [0, -10, 18], '#2FB36D'), P('con', 'cone', [20, 20, 24], [30, 10, 12], '#EC5FA8')];
  const ROBOT = [P('cos', 'box', [26, 16, 26], [0, 0, 21], '#7C5CFF'), P('cap', 'box', [18, 14, 14], [0, 0, 41], '#5BC0EB'), P('ull1', 'sph', [5, 5, 5], [-4, -7, 43], '#2A2F3A'), P('ull2', 'sph', [5, 5, 5], [4, -7, 43], '#2A2F3A'),
    P('roda1', 'cyl', [12, 12, 6], [-16, 0, 6], '#2A2F3A', { r: [0, 90, 0] }), P('roda2', 'cyl', [12, 12, 6], [16, 0, 6], '#2A2F3A', { r: [0, 90, 0] }), P('antena', 'cyl', [2, 2, 8], [0, 0, 52], '#9AA3B5'), P('bola', 'sph', [5, 5, 5], [0, 0, 57], '#E8453C')];
  const EIXOS = [P('c0', 'box', [10, 10, 10], [0, 0, 5], '#9AA3B5'), P('cx', 'box', [10, 10, 10], [40, 0, 5], '#E5484D'), P('cy', 'box', [10, 10, 10], [0, 40, 5], '#22A06B'), P('cz', 'box', [10, 10, 10], [0, 0, 45], '#2F5BEA')];
  const PUNTS = [P('p1', 'cyl', [14, 14, 14], [-20, 20, 7], '#E8453C'), P('p2', 'cyl', [14, 14, 14], [20, 20, 7], '#3D7BF4'), P('p3', 'cyl', [14, 14, 14], [-20, -20, 7], '#2FB36D'), P('p4', 'cyl', [14, 14, 14], [20, -20, 7], '#F7C531')];
  const cub = (x, y, z = 0, id = 'a1', c = '#7C5CFF') => P(id, 'box', [20, 20, 20], [x, y, z + 10], c);
  // m1-2: l'estació de joguina d'en Pau, el fuster (la porta només es veu de davant; la torre rodona, a la dreta)
  const ESTACIO = [P('base', 'box', [50, 24, 18], [0, 0, 9], '#7C5CFF'), P('porta', 'box', [10, 2, 12], [-12, -12.5, 6], '#3A2A6B'), P('torre', 'cyl', [14, 14, 22], [14, 0, 29], '#2FB36D'), P('teula', 'cone', [18, 18, 12], [14, 0, 46], '#EC5FA8')];
  // un cub i un cilindre bessons: de davant són iguals
  const BESSONS = [P('cub', 'box', [20, 20, 30], [-20, 0, 15], '#3D7BF4'), P('rodo', 'cyl', [20, 20, 30], [20, 0, 15], '#3D7BF4')];
  // tres models que només es distingeixen bé de dalt
  const VA = [P('a', 'box', [30, 30, 10], [0, 0, 5], '#F5893A'), P('b', 'cyl', [16, 16, 20], [0, 0, 20], '#2FB36D')];
  const VB = [P('a', 'box', [30, 30, 10], [0, 0, 5], '#F5893A'), P('b', 'box', [16, 16, 20], [0, 0, 20], '#2FB36D')];
  const VC = [P('a', 'cyl', [30, 30, 10], [0, 0, 5], '#F5893A'), P('b', 'box', [16, 16, 20], [0, 0, 20], '#2FB36D')];
  // tres cilindres en fila cap al fons (de davant només se'n veu un) i una caixa
  const FILA = [P('c1', 'cyl', [16, 16, 24], [-10, -22, 12], '#E8453C'), P('c2', 'cyl', [16, 16, 24], [-10, 0, 12], '#F7C531'), P('c3', 'cyl', [16, 16, 24], [-10, 22, 12], '#3D7BF4'), P('cx', 'box', [16, 16, 16], [20, -22, 8], '#2FB36D')];
  const PLACA3 = { box: P('a1', 'box', [20, 20, 20], [-40, 30, 10], '#F5893A'), cyl: P('a2', 'cyl', [20, 20, 20], [40, 30, 10], '#2FB36D'), cone: P('a3', 'cone', [20, 20, 24], [0, -30, 12], '#EC5FA8') };
  // m1-4: escultures d'exemple
  const ESCULT = [P('peu', 'cyl', [44, 44, 8], [0, 0, 4], '#9AA3B5'), P('columna', 'box', [14, 14, 30], [0, 0, 23], '#7C5CFF'), P('bola', 'sph', [26, 26, 26], [0, 0, 49], '#F7C531'), P('estrella', 'star', [20, 20, 5], [0, 0, 63], '#EC5FA8', { r: [90, 0, 0] })];
  const CONTRAST = [P('base', 'box', [56, 30, 8], [0, 0, 4], '#1B2B6B'), P('con', 'cone', [22, 22, 44], [-14, 0, 30], '#F5893A'), P('bola', 'sph', [24, 24, 24], [14, 0, 19], '#5BC0EB'), P('anell', 'torus', [30, 30, 6], [14, 0, 11], '#EC5FA8')];
  const FLOTA = [P('peu', 'cyl', [40, 40, 8], [0, 0, 4], '#9AA3B5'), P('columna', 'cyl', [14, 14, 30], [0, 0, 23], '#3D7BF4'), P('bola', 'sph', [22, 22, 22], [0, 0, 53], '#F5893A')];
  const ARC = [P('pota1', 'cyl', [20, 20, 20], [-20, 0, 10], '#2FB36D'), P('pota2', 'cyl', [20, 20, 20], [20, 0, 10], '#2FB36D'), P('biga', 'box', [60, 20, 10], [0, 0, 25], '#F7C531')];
  const TOTEM = [cub(0, 0, 0, 'a1', '#3D7BF4'), P('a2', 'cyl', [20, 20, 20], [0, 0, 30], '#F7C531'), P('a3', 'pyr', [20, 20, 20], [0, 0, 50], '#E8453C')];
  return {
  t: "L'espai 3D|El espacio 3D", d: 'Mirar en tres dimensions|Mirar en tres dimensiones', color: '#7C5CFF',
  s: [
    { id: 'm1-1', t: 'Benvinguts al taller 3D|Bienvenidos al taller 3D', min: 40,
      learn: ["Un objecte 3D té tres mides: amplada, fondària i alçada.|Un objeto 3D tiene tres medidas: anchura, fondo y altura.",
        "Al taller, les peces es posen sobre la placa d'impressió, que té una quadrícula de quadrets de 10 mm.|En el taller, las piezas se ponen sobre la placa de impresión, que tiene una cuadrícula de cuadritos de 10 mm.",
        "Per veure un model per tots els costats, gires la vista: un dit gira, dos dits apropen o allunyen.|Para ver un modelo por todos los lados, giras la vista: un dedo gira, dos dedos acercan o alejan."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Quina d'aquestes coses té <b>amplada, fondària i alçada</b> (la pots agafar i girar)?|¿Cuál de estas cosas tiene <b>anchura, fondo y altura</b> (la puedes coger y girar)?",
          opts: ['Una capsa de sabates|Una caja de zapatos', 'Una ratlla dibuixada en un paper|Una raya dibujada en un papel', "L'ombra d'un arbre a terra|La sombra de un árbol en el suelo"], a: 0,
          ex: "La capsa ocupa espai en tres direccions: de costat a costat, de davant a darrere i de baix a dalt. Una ratlla o una ombra són planes.|La caja ocupa espacio en tres direcciones: de lado a lado, de delante a detrás y de abajo arriba. Una raya o una sombra son planas." },
        { k: 'quiz', ph: 'recorda', q: "Vols veure el <b>darrere</b> d'una joguina que és a la taula. Què fas?|Quieres ver la <b>parte de atrás</b> de un juguete que está en la mesa. ¿Qué haces?",
          opts: ['La giro o camino al seu voltant|Lo giro o camino a su alrededor', 'Tanco un ull|Cierro un ojo', "M'hi apropo sense moure'm del lloc|Me acerco sin moverme del sitio"], a: 0,
          ex: 'Per veure una cosa per tots els costats l\'has de girar o canviar de lloc. Al taller 3D farem el mateix amb la càmera.|Para ver una cosa por todos los lados tienes que girarla o cambiar de sitio. En el taller 3D haremos lo mismo con la cámara.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'El Taller de Bit|El Taller de Bit',
          t: "Benvinguts al meu <b>taller de fabricació digital</b>! Aquesta és la <b>Nuvi</b>, la nostra impressora 3D: construeix objectes de veritat capa a capa. Però abans d'imprimir res, hem d'aprendre a <b>mirar en 3D</b>: com és un objecte per davant, per darrere i per dalt. Som-hi!|¡Bienvenidos a mi <b>taller de fabricación digital</b>! Esta es <b>Nuvi</b>, nuestra impresora 3D: construye objetos de verdad capa a capa. Pero antes de imprimir nada, tenemos que aprender a <b>mirar en 3D</b>: cómo es un objeto por delante, por detrás y por arriba. ¡Vamos!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Un objecte 3D|Un objeto 3D', t: 'Tres mides: amplada, fondària i alçada|Tres medidas: anchura, fondo y altura', media: { k: 'model', model: { parts: [P('m', 'box', [40, 30, 20], [0, 0, 10], '#7C5CFF')] } },
            x: "Tot el que pots agafar té <b>tres mides</b>: l'<b>amplada</b> (d'esquerra a dreta), la <b>fondària</b> (de davant a darrere) i l'<b>alçada</b> (de baix a dalt). Al taller les mesurem en <b>mil·límetres</b> (mm): 10 mm és 1 cm.|Todo lo que puedes coger tiene <b>tres medidas</b>: la <b>anchura</b> (de izquierda a derecha), el <b>fondo</b> (de delante a detrás) y la <b>altura</b> (de abajo arriba). En el taller las medimos en <b>milímetros</b> (mm): 10 mm es 1 cm.",
            tip: 'Aquesta caixa fa 40 mm d\'amplada, 30 mm de fondària i 20 mm d\'alçada.|Esta caja mide 40 mm de anchura, 30 mm de fondo y 20 mm de altura.' },
          { k: 'La placa|La placa', t: "La placa d'impressió|La placa de impresión", media: { k: 'model', model: { parts: [P('a', 'box', [10, 10, 10], [0, 0, 5], '#2FB36D'), P('b', 'box', [20, 10, 10], [30, 20, 5], '#3D7BF4')] }, view: 'top' },
            x: "Les peces es posen sobre la <b>placa</b>, com a la impressora. La placa té una <b>quadrícula</b>: cada quadret fa <b>10 mm</b> de costat. Així pots comptar quadrets per saber quant mesura una peça.|Las piezas se ponen sobre la <b>placa</b>, como en la impresora. La placa tiene una <b>cuadrícula</b>: cada cuadrito mide <b>10 mm</b> de lado. Así puedes contar cuadritos para saber cuánto mide una pieza.",
            tip: 'El cub verd ocupa 1 quadret; la peça blava, 2 quadrets de llarg.|El cubo verde ocupa 1 cuadrito; la pieza azul, 2 cuadritos de largo.' },
          { k: 'Girar la vista|Girar la vista', t: 'Mira el model per tots els costats|Mira el modelo por todos los lados', media: { k: 'model', model: { parts: CASA } },
            x: "Arrossega amb <b>un dit</b> (o amb el ratolí) per <b>girar la càmera</b> al voltant del model. Amb <b>dos dits</b> (o la roda del ratolí) t'hi apropes o t'allunyes. El model no es mou: ets tu qui hi camina al voltant.|Arrastra con <b>un dedo</b> (o con el ratón) para <b>girar la cámara</b> alrededor del modelo. Con <b>dos dedos</b> (o la rueda del ratón) te acercas o te alejas. El modelo no se mueve: eres tú quien camina a su alrededor.",
            tip: 'Prova-ho ara: gira la casa i busca la porta.|Pruébalo ahora: gira la casa y busca la puerta.' },
          { k: 'Les vistes|Las vistas', t: 'Perspectiva, davant, dalt i costat|Perspectiva, delante, arriba y lado', anim: 'm3views',
            x: "El <b>cub de vistes</b>, a dalt a l'esquerra, et porta de cop a una <b>vista</b>: toca la cara <b>Davant</b>, <b>Dalt</b> o <b>Dreta</b> (el <b>costat</b>). El botó de sota el cub torna a la <b>perspectiva</b>, on es veuen tres cares. Si et perds, el botó de centrar et torna a portar al model.|El <b>cubo de vistas</b>, arriba a la izquierda, te lleva de golpe a una <b>vista</b>: toca la cara <b>Delante</b>, <b>Arriba</b> o <b>Derecha</b> (el <b>lado</b>). El botón de debajo del cubo vuelve a la <b>perspectiva</b>, donde se ven tres caras. Si te pierdes, el botón de centrar te vuelve a llevar al modelo." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '📏', title: 'Mesura una capsa|Mide una caja', t: 'Amb un regle i una capsa (de sabates, de llapis o de cereals):|Con una regla y una caja (de zapatos, de lápices o de cereales):',
          steps: ["Posa la capsa a la taula i digues quina és l'amplada, la fondària i l'alçada.|Pon la caja en la mesa y di cuál es la anchura, el fondo y la altura.", 'Mesura cada mida amb el regle i apunta-la en mil·límetres (1 cm = 10 mm).|Mide cada medida con la regla y apúntala en milímetros (1 cm = 10 mm).', 'Gira la capsa i torna a mesurar: les mides canvien de nom però no de valor?|Gira la caja y vuelve a medir: ¿las medidas cambian de nombre pero no de valor?'],
          tip: "Si gires la capsa, el que abans era l'alçada pot passar a ser l'amplada.|Si giras la caja, lo que antes era la altura puede pasar a ser la anchura." },
        { k: 'm3look', ph: 'prova', q: "A la casa de la Nuvi hi ha una <b>estrella amagada</b>. <b>Gira la vista</b> per trobar-la i toca-la.|En la casa de Nuvi hay una <b>estrella escondida</b>. <b>Gira la vista</b> para encontrarla y tócala.",
          model: { parts: AMAGADA }, pick: 'estrella', yes: "L'has trobada! Era al darrere de la casa.|¡La has encontrado! Estaba detrás de la casa.", ex: 'Des de davant la tapava la casa: per això cal girar la vista.|Desde delante la tapaba la casa: por eso hay que girar la vista.' },
        { k: 'm3look', ph: 'prova', q: "Quantes <b>peces</b> té aquesta torre? Gira-la si cal.|¿Cuántas <b>piezas</b> tiene esta torre? Gírala si hace falta.", model: { parts: TORRE },
          opts: ['3|3', '4|4', '5|5'], a: 1, ex: 'Té 4 peces: una caixa a baix, un cilindre, una caixa petita i un con a dalt de tot.|Tiene 4 piezas: una caja abajo, un cilindro, una caja pequeña y un cono arriba del todo.' },
        { k: 'm3look', ph: 'investiga', q: 'Toca la peça <b>més alta</b> (la que arriba més amunt).|Toca la pieza <b>más alta</b> (la que llega más arriba).', model: { parts: TRES }, pick: 'cilindre', no: "Aquesta no arriba tan amunt. Mira'ls des del costat per comparar-les.|Esta no llega tan arriba. Míralas desde el lado para compararlas.",
          ex: 'El cilindre fa 36 mm d\'alçada; el con, 24 mm, i la caixa, 14 mm. Des del costat es veu molt bé.|El cilindro mide 36 mm de altura; el cono, 24 mm, y la caja, 14 mm. Desde el lado se ve muy bien.' },
        { k: 'move', ph: 'pausa', title: 'Fes-te 3D!|¡Hazte 3D!', secs: 30, t: "Estira't ben amunt (<b>alçada</b>), obre els braços (<b>amplada</b>) i fes un pas endavant i un enrere (<b>fondària</b>). Ara gira sobre tu mateix com la càmera del taller!|Estírate bien arriba (<b>altura</b>), abre los brazos (<b>anchura</b>) y da un paso adelante y uno atrás (<b>fondo</b>). ¡Ahora gira sobre ti mismo como la cámara del taller!" },
        { k: 'm3look', ph: 'repte', q: "Aquest robot té un <b>botó vermell</b> amagat. Gira la vista i troba'l.|Este robot tiene un <b>botón rojo</b> escondido. Gira la vista y encuéntralo.", model: { parts: ROBOT }, pick: 'bola', view: 'front', yes: 'Molt bé! És la bola de dalt de l\'antena.|¡Muy bien! Es la bola de arriba de la antena.', ex: 'Des de davant quedava tapada pel cap. Des de dalt o des del costat ja es veu.|Desde delante quedaba tapada por la cabeza. Desde arriba o desde el lado ya se ve.' },
        { k: 'm3look', ph: 'repte', q: 'Des d\'on mirem aquest model?|¿Desde dónde miramos este modelo?', model: { parts: TORRE }, view: 'top', lock: true,
          opts: ['Des de dalt|Desde arriba', 'Des de davant|Desde delante', 'Des del costat|Desde el lado'], a: 0, ex: 'Des de dalt, totes les peces semblen planes: veiem la caixa quadrada, el cercle del cilindre i la punta del con al mig.|Desde arriba, todas las piezas parecen planas: vemos la caja cuadrada, el círculo del cilindro y la punta del cono en el medio.' },
        { k: 'm3look', ph: 'repte', extra: true, q: 'Quantes peces té el robot? Gira\'l per comptar les que no es veuen.|¿Cuántas piezas tiene el robot? Gíralo para contar las que no se ven.', model: { parts: ROBOT },
          opts: ['6|6', '7|7', '8|8'], a: 2, ex: 'Té 8 peces: cos, cap, dos ulls, dues rodes, antena i bola.|Tiene 8 piezas: cuerpo, cabeza, dos ojos, dos ruedas, antena y bola.' },
        { k: 'm3free', ph: 'crea', q: "<b>La teva primera peça.</b> Toca formes de la paleta per posar-les a la placa i mira-les de tots els costats. Quan t'agradi, desa-ho.|<b>Tu primera pieza.</b> Toca formas de la paleta para ponerlas en la placa y míralas desde todos los lados. Cuando te guste, guárdalo.",
          name: 'La meva primera peça|Mi primera pieza', palette: ['box', 'cyl', 'sph', 'cone', 'pyr', 'star', 'heart'],
          crit: ['Hi ha almenys 2 formes a la placa|Hay al menos 2 formas en la placa', "L'has mirat des de davant, de dalt i del costat|Lo has mirado desde delante, desde arriba y desde el lado"],
          checks: [{ k: 'count', min: 2 }, { k: 'onplate' }], sol: { parts: [P('a1', 'box', [20, 20, 20], [0, 0, 10], '#7C5CFF'), P('a2', 'sph', [20, 20, 20], [30, 0, 10], '#FF8A3D')] } },
        { k: 'quiz', ph: 'tanca', q: 'Quines són les tres mides d\'un objecte 3D?|¿Cuáles son las tres medidas de un objeto 3D?', opts: ['Amplada, fondària i alçada|Anchura, fondo y altura', 'Color, forma i pes|Color, forma y peso', 'Davant, darrere i dalt|Delante, detrás y arriba'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Al taller, com veus el darrere d\'un model?|En el taller, ¿cómo ves la parte de atrás de un modelo?', opts: ['Arrossego amb el dit per girar la vista|Arrastro con el dedo para girar la vista', 'Esborro el model i el torno a fer|Borro el modelo y lo vuelvo a hacer', 'No es pot veure|No se puede ver'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    { id: 'm1-2', t: 'Davant, dalt i costat|Delante, arriba y lado', min: 45, badge: 'm12vistes',
      learn: ["Una vista és el que veus des d'un lloc: davant (alçat), dalt (planta) i costat (perfil).|Una vista es lo que ves desde un sitio: delante (alzado), arriba (planta) y lado (perfil).",
        "Cada vista només mostra dues de les tres mides: per conèixer bé un objecte en calen almenys dues.|Cada vista solo muestra dos de las tres medidas: para conocer bien un objeto hacen falta al menos dos.",
        "La vista de dalt ajuda a col·locar peces a la placa; la de davant i la del costat, a comparar alçades.|La vista de arriba ayuda a colocar piezas en la placa; la de delante y la del lado, a comparar alturas."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Quina mida d'un objecte va <b>de davant a darrere</b>?|¿Qué medida de un objeto va <b>de delante a detrás</b>?",
          opts: ['La fondària|El fondo', "L'amplada|La anchura", "L'alçada|La altura"], a: 0,
          ex: "L'amplada va d'esquerra a dreta, la fondària de davant a darrere i l'alçada de baix a dalt.|La anchura va de izquierda a derecha, el fondo de delante a detrás y la altura de abajo arriba." },
        { k: 'm3look', ph: 'recorda', q: 'Estem mirant la casa de la Nuvi <b>per darrere</b>. Gira la vista i toca la <b>porta</b>.|Estamos mirando la casa de Nuvi <b>por detrás</b>. Gira la vista y toca la <b>puerta</b>.',
          model: { parts: CASA }, view: 'back', pick: 'porta', yes: 'Aquí és!|¡Aquí está!', no: 'Aquesta no és la porta. Arrossega per girar la casa fins a veure-la de cara.|Esta no es la puerta. Arrastra para girar la casa hasta verla de cara.',
          ex: 'La porta és al davant: des del darrere la tapava la casa.|La puerta está delante: desde detrás la tapaba la casa.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'Un encàrrec dibuixat|Un encargo dibujado',
          t: "Ha arribat un sobre per a la Nuvi! És d'en <b>Pau, el fuster del barri</b>: vol una <b>estació de tren</b> per a l'aparador de la seva botiga de joguines. Però no ens envia cap foto, sinó <b>tres dibuixos</b>: un de <b>davant</b>, un de <b>dalt</b> i un del <b>costat</b>. Així treballen els enginyers i els arquitectes! Avui aprendrem a llegir-los.|¡Ha llegado un sobre para Nuvi! Es de <b>Pau, el carpintero del barrio</b>: quiere una <b>estación de tren</b> para el escaparate de su tienda de juguetes. Pero no nos envía ninguna foto, sino <b>tres dibujos</b>: uno de <b>delante</b>, uno de <b>arriba</b> y uno del <b>lado</b>. ¡Así trabajan los ingenieros y los arquitectos! Hoy aprenderemos a leerlos." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Les vistes|Las vistas', t: 'Mirar des de tres llocs|Mirar desde tres sitios', anim: 'm12cams',
            x: "Una <b>vista</b> és com una foto feta des d'un lloc fix. Els dissenyadors en fan servir tres: des de <b>davant</b> (en diuen <b>alçat</b>), des de <b>dalt</b> (la <b>planta</b>) i des del <b>costat</b> (el <b>perfil</b>). Cada vista és un dibuix pla de l'objecte.|Una <b>vista</b> es como una foto hecha desde un sitio fijo. Los diseñadores usan tres: desde <b>delante</b> (lo llaman <b>alzado</b>), desde <b>arriba</b> (la <b>planta</b>) y desde el <b>lado</b> (el <b>perfil</b>). Cada vista es un dibujo plano del objeto.",
            tip: 'Al taller, cada cara del cub de vistes et porta a una vista.|En el taller, cada cara del cubo de vistas te lleva a una vista.' },
          { k: 'Alçat|Alzado', t: 'La vista de davant|La vista de delante', media: { k: 'model', model: { parts: ESTACIO }, view: 'front', spin: false },
            x: "Mires l'objecte <b>de cara</b>, amb els ulls a la seva altura. Hi veus l'<b>amplada</b> i l'<b>alçada</b>, i també la porta de l'estació. Però no saps si és prima o gruixuda: la <b>fondària</b> no es veu.|Miras el objeto <b>de cara</b>, con los ojos a su altura. Ves la <b>anchura</b> y la <b>altura</b>, y también la puerta de la estación. Pero no sabes si es delgada o gruesa: el <b>fondo</b> no se ve.",
            tip: 'Gira-la amb el dit. Al taller, la cara Davant del cub de vistes hi torna.|Gírala con el dedo. En el taller, la cara Delante del cubo de vistas vuelve aquí.' },
          { k: 'Planta|Planta', t: 'La vista de dalt|La vista de arriba', media: { k: 'model', model: { parts: ESTACIO }, view: 'top', spin: false },
            x: "Mires l'objecte <b>des de dalt</b>, com un ocell. Hi veus l'<b>amplada</b> i la <b>fondària</b>, però no l'alçada: la torre rodona de l'estació es veu com un <b>cercle</b>.|Miras el objeto <b>desde arriba</b>, como un pájaro. Ves la <b>anchura</b> y el <b>fondo</b>, pero no la altura: la torre redonda de la estación se ve como un <b>círculo</b>.",
            tip: "Els plànols d'una casa o d'una escola són vistes de dalt.|Los planos de una casa o de una escuela son vistas de arriba." },
          { k: 'Perfil|Perfil', t: 'La vista del costat|La vista del lado', media: { k: 'model', model: { parts: ESTACIO }, view: 'right', spin: false },
            x: "Mires l'objecte <b>des del costat</b>. Hi veus la <b>fondària</b> i l'<b>alçada</b>. La porta no hi surt, perquè és al davant, i l'estació sembla més estreta.|Miras el objeto <b>desde el lado</b>. Ves el <b>fondo</b> y la <b>altura</b>. La puerta no sale, porque está delante, y la estación parece más estrecha.",
            tip: "La vista del costat et diu si un objecte és gruixut o prim.|La vista del lado te dice si un objeto es grueso o delgado." },
          { k: 'Dues mides|Dos medidas', t: 'Cada vista amaga una mida|Cada vista esconde una medida', anim: 'm12dims',
            x: "Una vista és plana: només hi caben <b>dues</b> de les tres mides. De davant: amplada i alçada. De dalt: amplada i fondària. Del costat: fondària i alçada. Per saber-les totes tres, en necessites almenys <b>dues</b>.|Una vista es plana: solo caben <b>dos</b> de las tres medidas. De delante: anchura y altura. De arriba: anchura y fondo. Del lado: fondo y altura. Para saber las tres, necesitas al menos <b>dos</b>." },
          { k: 'Compte!|¡Cuidado!', t: 'Una sola vista pot enganyar|Una sola vista puede engañar', anim: 'm12trick',
            x: "Un cub i un cilindre de la mateixa mida, vistos <b>de davant</b>, són dos quadrats iguals. Només <b>des de dalt</b> descobreixes que un dels dos és rodó. Per això els plànols sempre porten més d'una vista.|Un cubo y un cilindro del mismo tamaño, vistos <b>de delante</b>, son dos cuadrados iguales. Solo <b>desde arriba</b> descubres que uno de los dos es redondo. Por eso los planos siempre llevan más de una vista.",
            bad: 'Amb una sola vista ja sé com és un objecte.|Con una sola vista ya sé cómo es un objeto.', good: 'Miro un objecte almenys des de dues vistes abans de decidir com és.|Miro un objeto al menos desde dos vistas antes de decidir cómo es.' }
        ] },
        { k: 'unplug', ph: 'mans', ico: '📷', title: 'Fotògrafs de blocs|Fotógrafos de bloques', t: 'Per parelles, amb 6 blocs de construcció (o cubs encaixables), un llibre dret i la fitxa de les tres vistes:|Por parejas, con 6 bloques de construcción (o cubos encajables), un libro de pie y la ficha de las tres vistas:',
          steps: ["Una persona construeix una figura petita amagada darrere del llibre.|Una persona construye una figura pequeña escondida detrás del libro.",
            "En dibuixa la vista de davant, la de dalt i la del costat a la quadrícula: cada bloc, un quadret.|Dibuja la vista de delante, la de arriba y la del lado en la cuadrícula: cada bloque, un cuadrito.",
            "L'altra persona construeix la figura només mirant els dibuixos. Traieu el llibre: és igual?|La otra persona construye la figura solo mirando los dibujos. Quitad el libro: ¿es igual?",
            'Canvieu els papers. Quina vista us ha ajudat més?|Cambiad los papeles. ¿Qué vista os ha ayudado más?'],
          tip: 'Si teniu una tauleta, feu tres fotos de debò: ajupits davant de la figura, des de dalt i des del costat.|Si tenéis una tableta, haced tres fotos de verdad: agachados delante de la figura, desde arriba y desde el lado.' },
        { k: 'm3look', ph: 'prova', q: "Aquesta és l'estació d'en Pau. <b>Quina vista</b> és?|Esta es la estación de Pau. ¿<b>Qué vista</b> es?", model: { parts: ESTACIO }, view: 'right', lock: true,
          opts: ['Costat (perfil)|Lado (perfil)', 'Davant (alçat)|Delante (alzado)', 'Dalt (planta)|Arriba (planta)'], a: 0,
          ex: "No es veu la porta i l'estació sembla estreta: la mirem pel costat. La torre queda al mig perquè, des del costat, no es veu que és a la dreta.|No se ve la puerta y la estación parece estrecha: la miramos por el lado. La torre queda en el medio porque, desde el lado, no se ve que está a la derecha." },
        { k: 'm3look', ph: 'prova', q: 'Toca la cara <b>Dalt</b> del cub de vistes. Quina forma té la torre vista des de dalt?|Toca la cara <b>Arriba</b> del cubo de vistas. ¿Qué forma tiene la torre vista desde arriba?', model: { parts: ESTACIO },
          opts: ['Un cercle|Un círculo', 'Un quadrat|Un cuadrado', 'Un triangle|Un triángulo'], a: 0,
          ex: "Des de dalt, el cilindre i el con es veuen com cercles: no se'n veu l'alçada.|Desde arriba, el cilindro y el cono se ven como círculos: no se ve su altura." },
        { k: 'm3look', ph: 'investiga', q: 'Des de davant, aquestes dues peces semblen <b>iguals</b>. Gira la vista i toca la que és <b>rodona</b>.|Desde delante, estas dos piezas parecen <b>iguales</b>. Gira la vista y toca la que es <b>redonda</b>.',
          model: { parts: BESSONS }, view: 'front', pick: 'rodo', yes: "Ben trobat! És un cilindre.|¡Bien encontrado! Es un cilindro.", no: "Aquesta és el cub. Mira-les des de dalt: la rodona fa un cercle.|Esta es el cubo. Míralas desde arriba: la redonda hace un círculo.",
          ex: 'De davant, el cub i el cilindre fan el mateix quadrat. De dalt, un és un quadrat i l\'altre un cercle.|De delante, el cubo y el cilindro hacen el mismo cuadrado. De arriba, uno es un cuadrado y el otro un círculo.' },
        { k: 'move', ph: 'pausa', title: 'La càmera humana|La cámara humana', secs: 30,
          t: "Ajup-te fins que els ulls quedin a l'altura de la taula: <b>vista de davant</b>! Puja de puntetes i mira avall: <b>vista de dalt</b>! Fes dos passos de costat: <b>vista del costat</b>! Ara més de pressa: davant, dalt, costat!|Agáchate hasta que los ojos queden a la altura de la mesa: ¡<b>vista de delante</b>! Sube de puntillas y mira hacia abajo: ¡<b>vista de arriba</b>! Da dos pasos de lado: ¡<b>vista del lado</b>! Ahora más rápido: ¡delante, arriba, lado!" },
        { k: 'm3look', ph: 'repte', q: "Quina d'aquestes imatges és la vista de <b>dalt</b> de l'estació?|¿Cuál de estas imágenes es la vista de <b>arriba</b> de la estación?", model: { parts: ESTACIO },
          opts: [{ model: { parts: ESTACIO }, view: 'top' }, { model: { parts: ESTACIO }, view: 'front' }, { model: { parts: ESTACIO }, view: 'right' }], a: 0,
          ex: "Des de dalt es veu el rectangle de l'estació i el cercle de la torre, sense cap alçada.|Desde arriba se ve el rectángulo de la estación y el círculo de la torre, sin ninguna altura." },
        { k: 'm3look', ph: 'repte', q: "En Pau ens envia aquesta <b>vista de dalt</b>. De quin model és?|Pau nos envía esta <b>vista de arriba</b>. ¿De qué modelo es?", model: { parts: VA }, view: 'top', lock: true,
          opts: [{ model: { parts: VA } }, { model: { parts: VB } }, { model: { parts: VC } }], a: 0,
          ex: "De dalt es veu un quadrat amb un cercle al mig: la base és una caixa i la peça de sobre, un cilindre.|De arriba se ve un cuadrado con un círculo en el medio: la base es una caja y la pieza de encima, un cilindro." },
        { k: 'm3build', ph: 'repte', q: "Posa la xemeneia (el cilindre) a sobre del seu <b>fantasma</b>. Truc: posa la <b>vista de dalt</b> i arrossega-la.|Pon la chimenea (el cilindro) encima de su <b>fantasma</b>. Truco: pon la <b>vista de arriba</b> y arrástrala.",
          start: { parts: [P('a1', 'cyl', [20, 20, 20], [0, 0, 10], '#2FB36D')] }, palette: ['cyl'], snap: 10, target: { parts: [P('g', 'cyl', [20, 20, 20], [40, 30, 10], '#2FB36D')] },
          checks: [{ k: 'match', target: { parts: [P('g', 'cyl', [20, 20, 20], [40, 30, 10], '#2FB36D')] }, th: 0.9, t: 'El cilindre és dins del fantasma|El cilindro está dentro del fantasma' }, { k: 'onplate' }],
          hint: "A la vista de dalt, el fantasma és un cercle transparent: arrossega el cilindre fins que hi quedi a sobre, exacte.|En la vista de arriba, el fantasma es un círculo transparente: arrastra el cilindro hasta que quede encima, exacto.",
          sol: { parts: [P('a1', 'cyl', [20, 20, 20], [40, 30, 10], '#2FB36D')] } },
        { k: 'm3build', ph: 'repte', q: "L'aparador d'en Pau: posa <b>cada peça</b> a sobre del seu fantasma. Des de dalt ho veuràs millor.|El escaparate de Pau: pon <b>cada pieza</b> encima de su fantasma. Desde arriba lo verás mejor.",
          start: { parts: [P('a1', 'box', [20, 20, 20], [0, 0, 10], '#F5893A'), P('a2', 'cyl', [20, 20, 20], [30, 0, 10], '#2FB36D'), P('a3', 'cone', [20, 20, 24], [-30, 0, 12], '#EC5FA8')] }, palette: ['box', 'cyl', 'cone'], snap: 10,
          target: { parts: [PLACA3.box, PLACA3.cyl, PLACA3.cone] }, checks: [{ k: 'match', target: { parts: [PLACA3.box, PLACA3.cyl, PLACA3.cone] }, th: 0.88, t: 'Les tres peces són als seus fantasmes|Las tres piezas están en sus fantasmas' }, { k: 'onplate' }],
          hint: "De dalt, el quadrat és la caixa, el cercle gran és el cilindre i el cercle amb punta és el con. Arrossega-les una a una.|De arriba, el cuadrado es la caja, el círculo grande es el cilindro y el círculo con punta es el cono. Arrástralas una a una.",
          sol: { parts: [PLACA3.box, PLACA3.cyl, PLACA3.cone] } },
        { k: 'm3look', ph: 'repte', extra: true, q: "Quantes peces té aquest model? Des de davant no les veus totes: mira'l també des de dalt.|¿Cuántas piezas tiene este modelo? Desde delante no las ves todas: míralo también desde arriba.", model: { parts: FILA }, view: 'front',
          opts: ['2|2', '3|3', '4|4'], a: 2, ex: "Hi ha 4 peces: tres cilindres en fila cap al fons (de davant només es veu el vermell) i una caixa verda.|Hay 4 piezas: tres cilindros en fila hacia el fondo (de delante solo se ve el rojo) y una caja verde." },
        { k: 'm3free', ph: 'crea', q: "<b>Una figura per a en Pau.</b> Fes una figura amb almenys <b>3 peces</b> que es vegi diferent de davant, de dalt i del costat. Mira-la amb el cub de vistes (Davant, Dalt i Dreta) i tria la teva vista preferida.|<b>Una figura para Pau.</b> Haz una figura con al menos <b>3 piezas</b> que se vea distinta de delante, de arriba y del lado. Mírala con el cubo de vistas (Delante, Arriba y Derecha) y elige tu vista preferida.",
          name: 'La figura de les tres vistes|La figura de las tres vistas', palette: ['box', 'cyl', 'sph', 'cone', 'pyr', 'star', 'heart'],
          crit: ['Almenys 3 peces|Al menos 3 piezas', 'Totes toquen la placa|Todas tocan la placa', 'De dalt i de davant es veu diferent|De arriba y de delante se ve distinta', 'Has triat la teva vista preferida|Has elegido tu vista preferida'],
          checks: [{ k: 'count', min: 3 }, { k: 'onplate' }], sol: { parts: [P('a1', 'box', [30, 20, 20], [0, 0, 10], '#7C5CFF'), P('a2', 'cyl', [20, 20, 30], [35, 0, 15], '#2FB36D'), P('a3', 'cone', [20, 20, 24], [-35, 0, 12], '#EC5FA8')] } },
        { k: 'quiz', ph: 'tanca', q: 'La vista <b>de dalt</b> també es diu…|La vista <b>de arriba</b> también se llama…', opts: ['Planta|Planta', 'Alçat|Alzado', 'Perfil|Perfil'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Quina vista <b>no</b> et diu l'alçada d'un objecte?|¿Qué vista <b>no</b> te dice la altura de un objeto?", opts: ['La de dalt (planta)|La de arriba (planta)', 'La de davant (alçat)|La de delante (alzado)', 'La del costat (perfil)|La del lado (perfil)'], a: 0,
          ex: 'Des de dalt, una peça alta i una de baixa poden fer el mateix dibuix.|Desde arriba, una pieza alta y una baja pueden hacer el mismo dibujo.' },
        { k: 'feel', ph: 'tanca' }
      ] },
    { id: 'm1-3', t: 'Els eixos x, y, z|Los ejes x, y, z', min: 40,
      learn: ["Les coordenades x, y, z diuen on és una peça: x d'esquerra a dreta, y de davant a darrere i z cap amunt.|Las coordenadas x, y, z dicen dónde está una pieza: x de izquierda a derecha, y de delante a detrás y z hacia arriba.",
        "L'origen (0, 0, 0) és el centre de la placa; els números negatius van a l'altre costat.|El origen (0, 0, 0) es el centro de la placa; los números negativos van al otro lado.",
        "Una peça amb z = 0 toca la placa; si no, flota i la impressora no la podria fer.|Una pieza con z = 0 toca la placa; si no, flota y la impresora no podría hacerla."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Amb quina vista veus un model <b>des de dalt</b>, com si fossis un ocell?|¿Con qué vista ves un modelo <b>desde arriba</b>, como si fueras un pájaro?', opts: ['La vista de dalt (planta)|La vista de arriba (planta)', 'La vista de davant (alçat)|La vista de delante (alzado)', 'La vista del costat (perfil)|La vista del lado (perfil)'], a: 0 },
        { k: 'm3look', ph: 'recorda', q: 'Quina vista és aquesta?|¿Qué vista es esta?', model: { parts: CASA }, view: 'front', lock: true, opts: ['Davant (alçat)|Delante (alzado)', 'Dalt (planta)|Arriba (planta)', 'Perspectiva|Perspectiva'], a: 0,
          ex: 'Veiem la porta de cara i la teulada com un triangle: és la vista de davant.|Vemos la puerta de cara y el tejado como un triángulo: es la vista de delante.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'Números per a la Nuvi|Números para Nuvi',
          t: "Tenim un encàrrec de la biblioteca: una figura amb peces col·locades <b>exactament</b> al seu lloc. Però a la Nuvi no li podem dir «una mica més a la dreta»: només entén <b>números</b>. Avui aprendrem les <b>coordenades x, y, z</b>!|Tenemos un encargo de la biblioteca: una figura con piezas colocadas <b>exactamente</b> en su sitio. Pero a Nuvi no le podemos decir «un poco más a la derecha»: solo entiende <b>números</b>. ¡Hoy aprenderemos las <b>coordenadas x, y, z</b>!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Els eixos|Los ejes', t: 'Tres direccions amb nom: x, y, z|Tres direcciones con nombre: x, y, z', anim: 'm3axes',
            x: "L'eix <b style=\"color:#E5484D\">x</b> (vermell) va d'esquerra a dreta, l'eix <b style=\"color:#22A06B\">y</b> (verd) va de davant cap a darrere i l'eix <b style=\"color:#2F5BEA\">z</b> (blau) va cap amunt. Les línies de colors de la placa són els eixos x i y.|El eje <b style=\"color:#E5484D\">x</b> (rojo) va de izquierda a derecha, el eje <b style=\"color:#22A06B\">y</b> (verde) va de delante hacia detrás y el eje <b style=\"color:#2F5BEA\">z</b> (azul) va hacia arriba. Las líneas de colores de la placa son los ejes x e y." },
          { k: "L'origen|El origen", t: 'El punt (0, 0, 0)|El punto (0, 0, 0)', media: { k: 'model', model: { parts: EIXOS } },
            x: "On es creuen les línies de la placa hi ha l'<b>origen</b>: x = 0, y = 0, z = 0. El cub gris hi és a sobre. El vermell és a <b>x = 40</b>, el verd a <b>y = 40</b> i el blau és 40 mm <b>amunt</b> (z = 40).|Donde se cruzan las líneas de la placa está el <b>origen</b>: x = 0, y = 0, z = 0. El cubo gris está encima. El rojo está en <b>x = 40</b>, el verde en <b>y = 40</b> y el azul está 40 mm <b>arriba</b> (z = 40).",
            tip: 'Gira la vista per veure que el blau no toca la placa.|Gira la vista para ver que el azul no toca la placa.' },
          { k: 'Números negatius|Números negativos', t: "A l'altre costat de l'origen|Al otro lado del origen", media: { k: 'model', model: { parts: PUNTS }, view: 'top' },
            x: "Si una peça és a l'<b>esquerra</b> de l'origen, la seva x és <b>negativa</b> (x = −20). Si és <b>davant</b>, la y és negativa. El cilindre verd és a x = −20, y = −20; el groc, a x = 20, y = −20.|Si una pieza está a la <b>izquierda</b> del origen, su x es <b>negativa</b> (x = −20). Si está <b>delante</b>, la y es negativa. El cilindro verde está en x = −20, y = −20; el amarillo, en x = 20, y = −20." },
          { k: 'La posició|La posición', t: 'On és una peça: x, y del centre i z de la base|Dónde está una pieza: x, y del centro y z de la base', media: { k: 'model', model: { parts: [cub(30, 10, 0, 'q', '#7C5CFF')] } },
            x: "A la pestanya <b>Posició</b> hi ha tres números: <b>x</b> i <b>y</b> són on és el <b>centre</b> de la peça a la placa, i <b>z</b> és a quina alçada queda la seva <b>base</b>. Amb z = 0, la peça toca la placa.|En la pestaña <b>Posición</b> hay tres números: <b>x</b> e <b>y</b> son dónde está el <b>centro</b> de la pieza en la placa, y <b>z</b> es a qué altura queda su <b>base</b>. Con z = 0, la pieza toca la placa.",
            tip: 'Aquest cub és a x = 30, y = 10, z = 0.|Este cubo está en x = 30, y = 10, z = 0.' }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🧭', title: 'La placa humana|La placa humana', t: "A terra de l'aula, amb cinta adhesiva, hi ha dues línies que es creuen (x i y). Per parelles:|En el suelo del aula, con cinta adhesiva, hay dos líneas que se cruzan (x e y). Por parejas:",
          steps: ["Una persona diu unes coordenades (per exemple, x = 2 passes, y = −1 passa).|Una persona dice unas coordenadas (por ejemplo, x = 2 pasos, y = −1 paso).", "L'altra surt de l'origen i hi va, primer en x i després en y.|La otra sale del origen y va hasta allí, primero en x y después en y.", "Per a la z, aixeca els braços: z = 0 a terra, z = 1 a la cintura, z = 2 al cap!|Para la z, levanta los brazos: z = 0 en el suelo, z = 1 en la cintura, ¡z = 2 en la cabeza!"],
          tip: "Si us poseu tots mirant cap al mateix costat, «endavant» és la y positiva per a tothom.|Si os ponéis todos mirando hacia el mismo lado, «adelante» es la y positiva para todos." },
        { k: 'm3look', ph: 'prova', q: 'El cub és a sobre de la línia vermella (y = 0). Quina és la seva <b>x</b>?|El cubo está encima de la línea roja (y = 0). ¿Cuál es su <b>x</b>?', model: { parts: [cub(30, 0, 0, 'q', '#7C5CFF')] }, view: 'top',
          opts: ['x = 30|x = 30', 'x = −30|x = −30', 'x = 0|x = 0'], a: 0, ex: "És a la dreta de l'origen, a 3 quadrets: x = 30 mm.|Está a la derecha del origen, a 3 cuadritos: x = 30 mm." },
        { k: 'm3look', ph: 'investiga', q: 'Toca el cilindre que és a <b>x = −20, y = 20</b>.|Toca el cilindro que está en <b>x = −20, y = 20</b>.', model: { parts: PUNTS }, view: 'top', pick: 'p1',
          no: 'Aquest no. Recorda: x negativa és a l\'esquerra i y positiva és cap al fons.|Este no. Recuerda: x negativa es a la izquierda e y positiva es hacia el fondo.', ex: "x = −20 és a l'esquerra de l'origen i y = 20 és cap al fons.|x = −20 es a la izquierda del origen e y = 20 es hacia el fondo." },
        { k: 'move', ph: 'pausa', title: 'Eixos amb el cos|Ejes con el cuerpo', secs: 30, t: 'Braç dret a la dreta: <b>x positiva</b>! Braç esquerre: <b>x negativa</b>! Un pas endavant: <b>y</b>! Salta: <b>z</b>! Ara al revés, cada cop més de pressa.|Brazo derecho a la derecha: ¡<b>x positiva</b>! Brazo izquierdo: ¡<b>x negativa</b>! Un paso adelante: ¡<b>y</b>! Salta: ¡<b>z</b>! Ahora al revés, cada vez más rápido.' },
        { k: 'm3build', ph: 'repte', q: "Mou el cub fins al <b>fantasma</b>: a <b>x = 30</b>, y = 0. Pots arrossegar-lo o escriure els números a <b>Posició</b>.|Mueve el cubo hasta el <b>fantasma</b>: a <b>x = 30</b>, y = 0. Puedes arrastrarlo o escribir los números en <b>Posición</b>.",
          start: { parts: [cub(0, 0)] }, palette: ['box'], target: { parts: [cub(30, 0)] }, checks: [{ k: 'match', target: { parts: [cub(30, 0)] }, th: 0.92, t: 'El cub és dins del fantasma|El cubo está dentro del fantasma' }, { k: 'onplate' }],
          hint: 'Toca el cub, obre la pestanya Posició i posa 30 a la x.|Toca el cubo, abre la pestaña Posición y pon 30 en la x.', sol: { parts: [cub(30, 0)] } },
        { k: 'm3build', ph: 'repte', q: 'Ara al fantasma de <b>x = −20, y = 30</b>. Compte amb el signe menys!|Ahora al fantasma de <b>x = −20, y = 30</b>. ¡Cuidado con el signo menos!',
          start: { parts: [cub(0, 0)] }, palette: ['box'], target: { parts: [cub(-20, 30)] }, checks: [{ k: 'match', target: { parts: [cub(-20, 30)] }, th: 0.92, t: 'El cub és dins del fantasma|El cubo está dentro del fantasma' }, { k: 'onplate' }],
          hint: "x = −20 és a l'esquerra i y = 30 és cap al fons. Pots escriure −20 al camp de la x.|x = −20 es a la izquierda e y = 30 es hacia el fondo. Puedes escribir −20 en el campo de la x.", sol: { parts: [cub(-20, 30)] } },
        { k: 'm3build', ph: 'repte', q: "Fes una torre: posa el cub lila <b>a sobre</b> del blau. Quina ha de ser la seva <b>z</b>?|Haz una torre: pon el cubo lila <b>encima</b> del azul. ¿Cuál tiene que ser su <b>z</b>?",
          start: { parts: [cub(0, 0, 0, 'base', '#3D7BF4'), cub(40, 0, 0, 'a1')] }, palette: ['box'], target: { parts: [cub(0, 0, 0, 'g1'), cub(0, 0, 20, 'g2')] },
          checks: [{ k: 'match', target: { parts: [cub(0, 0, 0, 'g1'), cub(0, 0, 20, 'g2')] }, th: 0.92, t: 'La torre és com el fantasma|La torre es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'El cub blau fa 20 mm d\'alt: el lila ha de començar a z = 20 i estar a x = 0.|El cubo azul mide 20 mm de alto: el lila tiene que empezar en z = 20 y estar en x = 0.', sol: { parts: [cub(0, 0, 0, 'base', '#3D7BF4'), cub(0, 0, 20, 'a1')] } },
        { k: 'm3fix', ph: 'repte', q: "Ui! Aquest pont <b>flota</b> i la Nuvi no el podria imprimir. <b>Arregla'l</b> perquè toqui la placa.|¡Uy! Este puente <b>flota</b> y Nuvi no podría imprimirlo. <b>Arréglalo</b> para que toque la placa.",
          start: { parts: [P('a1', 'box', [60, 20, 10], [0, 0, 20], '#2FB36D')] }, fix: ['a1'], palette: ['box'], checks: [{ k: 'onplate' }, { k: 'part', t: 'box', s: [60, 20, 10], txt: 'El pont fa 60 × 20 × 10 mm|El puente mide 60 × 20 × 10 mm' }],
          hint: 'A la pestanya Posició, posa la z a 0.|En la pestaña Posición, pon la z en 0.', sol: { parts: [P('a1', 'box', [60, 20, 10], [0, 0, 5], '#2FB36D')] } },
        { k: 'm3fix', ph: 'repte', extra: true, q: "Ara una peça s'ha <b>enfonsat</b> a la placa (la seva z és negativa). Arregla la torre perquè cada peça estigui a sobre de l'altra.|Ahora una pieza se ha <b>hundido</b> en la placa (su z es negativa). Arregla la torre para que cada pieza esté encima de la otra.",
          start: { parts: [P('b1', 'cyl', [30, 30, 10], [0, 0, -2], '#3D7BF4'), P('b2', 'cyl', [20, 20, 10], [0, 0, 13], '#F7C531')] }, fix: ['b1'], palette: ['cyl'],
          checks: [{ k: 'onplate' }, { k: 'one' }, { k: 'size', ax: 'z', v: 20 }], hint: 'Primer posa la base a z = 0. Després posa el cilindre groc a z = 10, just a sobre.|Primero pon la base en z = 0. Después pon el cilindro amarillo en z = 10, justo encima.',
          sol: { parts: [P('b1', 'cyl', [30, 30, 10], [0, 0, 5], '#3D7BF4'), P('b2', 'cyl', [20, 20, 10], [0, 0, 15], '#F7C531')] } },
        { k: 'm3free', ph: 'crea', q: "<b>L'encàrrec de la biblioteca.</b> Fes una figura amb una peça a <b>x = −30</b>, una a <b>x = 30</b> i una al mig, <b>més alta</b> que les altres. Tria les formes i els colors que vulguis.|<b>El encargo de la biblioteca.</b> Haz una figura con una pieza en <b>x = −30</b>, una en <b>x = 30</b> y una en el medio, <b>más alta</b> que las otras. Elige las formas y los colores que quieras.",
          name: 'La figura de la biblioteca|La figura de la biblioteca', crit: ['Una peça a x = −30 i una a x = 30|Una pieza en x = −30 y una en x = 30', 'Una peça al mig més alta|Una pieza en el medio más alta', 'Totes toquen la placa|Todas tocan la placa'],
          checks: [{ k: 'part', at: [-30, null, null], tol: 1.5, t: 'Hi ha una peça a x = −30|Hay una pieza en x = −30' }, { k: 'part', at: [30, null, null], tol: 1.5, t: 'Hi ha una peça a x = 30|Hay una pieza en x = 30' }, { k: 'count', min: 3 }, { k: 'onplate' }],
          sol: { parts: [P('a1', 'cyl', [16, 16, 20], [-30, 0, 10], '#3D7BF4'), P('a2', 'cone', [20, 20, 40], [0, 0, 20], '#EC5FA8'), P('a3', 'cyl', [16, 16, 20], [30, 0, 10], '#3D7BF4')] } },
        { k: 'quiz', ph: 'tanca', q: 'Quin eix va <b>cap amunt</b>?|¿Qué eje va <b>hacia arriba</b>?', opts: ["L'eix z|El eje z", "L'eix x|El eje x", "L'eix y|El eje y"], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Una peça a <b>x = 0, y = 0</b> és…|Una pieza en <b>x = 0, y = 0</b> está…', opts: ['Al centre de la placa|En el centro de la placa', "A la cantonada de l'esquerra|En la esquina de la izquierda", 'Fora de la placa|Fuera de la placa'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    { id: 'm1-4', t: 'Projecte: la meva primera escultura|Proyecto: mi primera escultura', min: 45, proj: true, badge: 'm14escultura',
      learn: ["Una escultura es mira de tots els costats: la dissenyo pensant com es veurà de davant, de dalt i del costat.|Una escultura se mira por todos los lados: la diseño pensando cómo se verá de delante, de arriba y del lado.",
        "Per dissenyar segueixo un procés: idea, esbós, model i revisió (i, si cal, la millora).|Para diseñar sigo un proceso: idea, boceto, modelo y revisión (y, si hace falta, la mejora).",
        "Per poder-la imprimir, cada peça ha de tocar la placa o una altra peça: res no pot flotar.|Para poder imprimirla, cada pieza tiene que tocar la placa u otra pieza: nada puede flotar."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Una peça té <b>z = 0</b> a la pestanya Posició. Què vol dir?|Una pieza tiene <b>z = 0</b> en la pestaña Posición. ¿Qué quiere decir?',
          opts: ['Que toca la placa|Que toca la placa', 'Que flota per sobre de la placa|Que flota por encima de la placa', 'Que és al centre de la placa|Que está en el centro de la placa'], a: 0,
          ex: "La z diu a quina alçada és la base de la peça: z = 0 vol dir a la placa. El centre de la placa és x = 0, y = 0.|La z dice a qué altura está la base de la pieza: z = 0 quiere decir en la placa. El centro de la placa es x = 0, y = 0." },
        { k: 'm3look', ph: 'recorda', q: 'Des d\'on mirem aquesta escultura?|¿Desde dónde miramos esta escultura?', model: { parts: ESCULT }, view: 'front', lock: true,
          opts: ['Des de davant|Desde delante', 'Des de dalt|Desde arriba', 'Des del costat|Desde el lado'], a: 0,
          ex: "L'estrella es veu sencera, de cara: és la vista de davant. Des del costat seria una ratlla prima i des de dalt veuríem cercles.|La estrella se ve entera, de cara: es la vista de delante. Desde el lado sería una raya fina y desde arriba veríamos círculos." },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: "L'exposició del taller|La exposición del taller",
          t: "Grans notícies: la biblioteca del barri ens deixa el seu aparador per fer una <b>exposició d'escultures</b>! Cada escultor/a del taller en dissenyarà una de petita, amb <b>3, 4 o 5 formes</b>. Ha de tocar bé la placa i ha de ser bonica <b>de totes les vistes</b>, perquè la gent la mirarà passant pel davant i pel costat. La Nuvi ja s'escalfa per imprimir-les!|¡Grandes noticias: la biblioteca del barrio nos deja su escaparate para hacer una <b>exposición de esculturas</b>! Cada escultor/a del taller diseñará una pequeña, con <b>3, 4 o 5 formas</b>. Tiene que tocar bien la placa y tiene que ser bonita <b>desde todas las vistas</b>, porque la gente la mirará pasando por delante y por el lado. ¡Nuvi ya se calienta para imprimirlas!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Escultura|Escultura', t: 'Una forma per mirar de tots els costats|Una forma para mirar por todos los lados', media: { k: 'model', model: { parts: ESCULT } },
            x: "Un dibuix es mira de cara, però una <b>escultura</b> es mira caminant-hi al voltant. Per això l'escultor/a pensa com es veurà des de <b>davant</b>, des de <b>dalt</b> i des del <b>costat</b>. Aquesta en té 4 formes: un peu, una columna, una bola i una estrella.|Un dibujo se mira de cara, pero una <b>escultura</b> se mira caminando a su alrededor. Por eso el escultor/a piensa cómo se verá desde <b>delante</b>, desde <b>arriba</b> y desde el <b>lado</b>. Esta tiene 4 formas: un pie, una columna, una bola y una estrella.",
            tip: "Gira-la i busca la vista on l'estrella gairebé desapareix.|Gírala y busca la vista donde la estrella casi desaparece." },
          { k: 'Equilibri|Equilibrio', t: 'Gran a baix, petit a dalt|Grande abajo, pequeño arriba', anim: 'm14balance',
            x: "Una escultura amb una <b>base ampla</b> s'aguanta dreta i, a la impressora, s'enganxa millor a la placa. Si poses una peça molt grossa a sobre d'una de molt petita, trontolla i es pot trencar.|Una escultura con una <b>base ancha</b> se aguanta de pie y, en la impresora, se pega mejor a la placa. Si pones una pieza muy grande encima de una muy pequeña, se tambalea y se puede romper.",
            tip: "Pensa en un arbre: el tronc és fort a baix i les branques s'aprimen a dalt.|Piensa en un árbol: el tronco es fuerte abajo y las ramas se hacen más finas arriba." },
          { k: 'Contrast|Contraste', t: 'Formes i colors que fan parella|Formas y colores que hacen pareja', media: { k: 'model', model: { parts: CONTRAST } },
            x: "Una escultura queda més viva si combines formes <b>rodones</b> (esfera, cilindre, anell) amb formes <b>punxegudes</b> (con, piràmide, estrella), peces <b>altes</b> amb peces <b>baixes</b>, i dos o tres colors que facin bona parella.|Una escultura queda más viva si combinas formas <b>redondas</b> (esfera, cilindro, anillo) con formas <b>puntiagudas</b> (cono, pirámide, estrella), piezas <b>altas</b> con piezas <b>bajas</b>, y dos o tres colores que hagan buena pareja." },
          { k: 'El procés|El proceso', t: 'Idea, esbós, model i revisió|Idea, boceto, modelo y revisión', anim: 'm14steps',
            x: "Els dissenyadors no posen peces a l'atzar. Primer tenen una <b>idea</b>, en fan un <b>esbós</b> en paper, després construeixen el <b>model</b> a l'ordinador i, al final, el <b>revisen</b> de totes les vistes. Si alguna cosa no els agrada, tornen enrere i el milloren.|Los diseñadores no ponen piezas al azar. Primero tienen una <b>idea</b>, hacen un <b>boceto</b> en papel, después construyen el <b>modelo</b> en el ordenador y, al final, lo <b>revisan</b> desde todas las vistas. Si algo no les gusta, vuelven atrás y lo mejoran." },
          { k: 'Per imprimir|Para imprimir', t: 'Cada peça ha de tocar alguna cosa|Cada pieza tiene que tocar algo', media: { k: 'model', model: { parts: TOTEM } },
            x: "La Nuvi construeix de baix a dalt, capa a capa. Cada peça ha de tocar la <b>placa</b> o una <b>altra peça</b>. Si una peça <b>flota</b>, encara que sigui un mil·límetre, la Nuvi no la pot fer: deixaria el plàstic a l'aire. En aquest tòtem, cada peça comença just on acaba la de sota.|Nuvi construye de abajo arriba, capa a capa. Cada pieza tiene que tocar la <b>placa</b> u <b>otra pieza</b>. Si una pieza <b>flota</b>, aunque sea un milímetro, Nuvi no puede hacerla: dejaría el plástico en el aire. En este tótem, cada pieza empieza justo donde acaba la de debajo.",
            bad: 'Si de davant sembla que toca, ja està bé.|Si de delante parece que toca, ya está bien.', good: 'La giro i la miro de prop: cada peça toca la de sota.|La giro y la miro de cerca: cada pieza toca la de debajo.' }
        ] },
        { k: 'seq', ph: 'mans', q: "Posa en ordre com treballa un escultor/a 3D.|Pon en orden cómo trabaja un escultor/a 3D.",
          items: ["Tinc una idea per a l'escultura|Tengo una idea para la escultura", 'En dibuixo un esbós en paper|Dibujo un boceto en papel', 'La construeixo al taller 3D|La construyo en el taller 3D', 'La reviso des de totes les vistes|La reviso desde todas las vistas', 'La Nuvi la imprimeix|Nuvi la imprime'],
          ex: "Primer pensar i dibuixar; després construir i revisar. Imprimir és l'últim pas: abans cal estar segurs que tot està bé.|Primero pensar y dibujar; después construir y revisar. Imprimir es el último paso: antes hay que estar seguros de que todo está bien." },
        { k: 'unplug', ph: 'mans', ico: '✏️', title: "L'esbós de l'escultura|El boceto de la escultura", t: "Amb la fitxa «Esbós de l'escultura», abans de tocar l'ordinador:|Con la ficha «Boceto de la escultura», antes de tocar el ordenador:",
          steps: ['Pensa una idea: un animal, un monument, una forma inventada…|Piensa una idea: un animal, un monumento, una forma inventada…', 'Dibuixa-la des de davant a la quadrícula (cada quadret són 10 mm).|Dibújala desde delante en la cuadrícula (cada cuadrito son 10 mm).',
            'Escriu la llista de formes: quina forma, de quin color i on va.|Escribe la lista de formas: qué forma, de qué color y dónde va.', "Ensenya l'esbós a un company: entén què és? T'ajuda a millorar-lo?|Enseña el boceto a un compañero: ¿entiende qué es? ¿Te ayuda a mejorarlo?"],
          tip: "Un esbós no ha de ser bonic: ha de servir per pensar.|Un boceto no tiene que ser bonito: tiene que servir para pensar." },
        { k: 'm3look', ph: 'prova', q: "Aquesta escultura té una peça que <b>flota</b>. Gira la vista i toca-la.|Esta escultura tiene una pieza que <b>flota</b>. Gira la vista y tócala.", model: { parts: FLOTA }, pick: 'bola',
          no: "Aquesta toca alguna cosa. Mira l'escultura des de davant: on hi ha un forat d'aire?|Esta toca algo. Mira la escultura desde delante: ¿dónde hay un hueco de aire?", yes: "L'has trobada!|¡La has encontrado!",
          ex: 'Entre la bola i la columna hi ha 4 mm d\'aire: la Nuvi no la podria imprimir.|Entre la bola y la columna hay 4 mm de aire: Nuvi no podría imprimirla.' },
        { k: 'm3fix', ph: 'investiga', q: "Arregla l'escultura: baixa la bola fins que <b>toqui</b> la columna (la columna acaba a 38 mm).|Arregla la escultura: baja la bola hasta que <b>toque</b> la columna (la columna acaba a 38 mm).",
          start: { parts: FLOTA }, fix: ['bola'], palette: ['sph'],
          checks: [{ k: 'onplate' }, { k: 'one' }, { k: 'part', t: 'sph', base: 37, tol: 1.5, txt: 'La bola reposa a sobre de la columna|La bola descansa encima de la columna' }],
          hint: "Toca la bola i, a Posició, posa z = 37: així entra un mil·límetre dins de la columna i queda ben enganxada.|Toca la bola y, en Posición, pon z = 37: así entra un milímetro dentro de la columna y queda bien pegada.",
          sol: { parts: [FLOTA[0], FLOTA[1], P('bola', 'sph', [22, 22, 22], [0, 0, 48], '#F5893A')] } },
        { k: 'move', ph: 'pausa', title: 'Escultures vives|Esculturas vivas', secs: 35,
          t: "Fes una escultura amb el cos i congela't 5 segons: primer una de <b>base ampla</b> (cames obertes, braços amunt), després una de <b>punxeguda</b> (mans juntes ben amunt) i després una de <b>rodona</b> (fes-te una bola). Quina era més estable?|Haz una escultura con el cuerpo y congélate 5 segundos: primero una de <b>base ancha</b> (piernas abiertas, brazos arriba), después una <b>puntiaguda</b> (manos juntas bien arriba) y después una <b>redonda</b> (hazte una bola). ¿Cuál era más estable?" },
        { k: 'm3build', ph: 'repte', q: 'Comencem un tòtem: posa el <b>con</b> a sobre del cub. Ha d\'anar a <b>x = 0, y = 0, z = 20</b>.|Empezamos un tótem: pon el <b>cono</b> encima del cubo. Tiene que ir en <b>x = 0, y = 0, z = 20</b>.',
          start: { parts: [cub(0, 0, 0, 'a1', '#3D7BF4'), P('a2', 'cone', [20, 20, 24], [40, 0, 12], '#E8453C')] }, palette: ['cone'],
          target: { parts: [cub(0, 0, 0, 'g1'), P('g2', 'cone', [20, 20, 24], [0, 0, 32])] },
          checks: [{ k: 'match', target: { parts: [cub(0, 0, 0, 'g1'), P('g2', 'cone', [20, 20, 24], [0, 0, 32])] }, th: 0.9, t: 'El tòtem és com el fantasma|El tótem es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Toca el con i, a Posició, escriu x = 0 i z = 20 (el cub fa 20 mm d\'alt).|Toca el cono y, en Posición, escribe x = 0 y z = 20 (el cubo mide 20 mm de alto).',
          sol: { parts: [cub(0, 0, 0, 'a1', '#3D7BF4'), P('a2', 'cone', [20, 20, 24], [0, 0, 32], '#E8453C')] } },
        { k: 'm3build', ph: 'repte', q: "Un tòtem de <b>tres pisos</b>: el cilindre a sobre del cub (z = 20) i la piràmide a sobre del cilindre (z = 40).|Un tótem de <b>tres pisos</b>: el cilindro encima del cubo (z = 20) y la pirámide encima del cilindro (z = 40).",
          start: { parts: [cub(0, 0, 0, 'a1', '#3D7BF4'), P('a2', 'cyl', [20, 20, 20], [-40, 0, 10], '#F7C531'), P('a3', 'pyr', [20, 20, 20], [40, 0, 10], '#E8453C')] }, palette: ['cyl', 'pyr'], target: { parts: TOTEM },
          checks: [{ k: 'match', target: { parts: TOTEM }, th: 0.9, t: 'El tòtem és com el fantasma|El tótem es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Cilindre: x = 0, z = 20. Piràmide: x = 0, z = 40. Cada peça comença on acaba la de sota.|Cilindro: x = 0, z = 20. Pirámide: x = 0, z = 40. Cada pieza empieza donde acaba la de debajo.", sol: { parts: TOTEM } },
        { k: 'm3build', ph: 'repte', q: "Una escultura amb <b>forat</b>: un arc. Posa les columnes a <b>x = −20</b> i <b>x = 20</b>, i la biga a sobre (<b>z = 20</b>).|Una escultura con <b>hueco</b>: un arco. Pon las columnas en <b>x = −20</b> y <b>x = 20</b>, y la viga encima (<b>z = 20</b>).",
          start: { parts: [P('a1', 'cyl', [20, 20, 20], [-50, 0, 10], '#2FB36D'), P('a2', 'cyl', [20, 20, 20], [50, 0, 10], '#2FB36D'), P('a3', 'box', [60, 20, 10], [0, -40, 5], '#F7C531')] }, palette: ['cyl', 'box'], target: { parts: ARC },
          checks: [{ k: 'match', target: { parts: ARC }, th: 0.88, t: "L'arc és com el fantasma|El arco es como el fantasma" }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Columnes: x = −20 i x = 20, amb y = 0. Biga: x = 0, y = 0, z = 20.|Columnas: x = −20 y x = 20, con y = 0. Viga: x = 0, y = 0, z = 20.',
          sol: { parts: [P('a1', 'cyl', [20, 20, 20], [-20, 0, 10], '#2FB36D'), P('a2', 'cyl', [20, 20, 20], [20, 0, 10], '#2FB36D'), P('a3', 'box', [60, 20, 10], [0, 0, 25], '#F7C531')] } },
        { k: 'm3look', ph: 'repte', extra: true, q: "En quina vista es veu millor el <b>forat</b> de l'arc?|¿En qué vista se ve mejor el <b>hueco</b> del arco?", model: { parts: ARC },
          opts: [{ model: { parts: ARC }, view: 'front' }, { model: { parts: ARC }, view: 'top' }, { model: { parts: ARC }, view: 'right' }], a: 0,
          ex: "De davant es veu el forat entre les columnes. De dalt la biga el tapa i del costat les columnes es veuen una darrere l'altra.|De delante se ve el hueco entre las columnas. De arriba la viga lo tapa y del lado las columnas se ven una detrás de la otra." },
        { k: 'm3free', ph: 'crea', q: "<b>La teva escultura per a l'exposició.</b> Fes-la amb <b>3, 4 o 5 formes</b>, ben recolzada i bonica de totes les vistes. Fes servir el teu esbós!|<b>Tu escultura para la exposición.</b> Hazla con <b>3, 4 o 5 formas</b>, bien apoyada y bonita desde todas las vistas. ¡Usa tu boceto!",
          name: 'La meva primera escultura|Mi primera escultura', palette: ['box', 'cyl', 'sph', 'cone', 'pyr', 'wedge', 'torus', 'star', 'heart'],
          crit: ['Entre 3 i 5 formes|Entre 3 y 5 formas', 'Toca la placa i cap peça no flota|Toca la placa y ninguna pieza flota', 'Almenys 2 colors|Al menos 2 colores', 'Bonica de totes les vistes: tria la teva preferida|Bonita desde todas las vistas: elige tu preferida'],
          checks: [{ k: 'count', min: 3, max: 5, txt: 'Té entre 3 i 5 formes|Tiene entre 3 y 5 formas' }, { k: 'onplate' }, { k: 'one' }, { k: 'colors', min: 2 }], sol: { parts: ESCULT } },
        { k: 'review', ph: 'crea', q: "Ara fes de crític/a d'art: revisa la teva escultura.|Ahora haz de crítico/a de arte: revisa tu escultura.",
          items: [{ q: "L'has mirada des de davant, de dalt i del costat?|¿La has mirado desde delante, desde arriba y desde el lado?", opts: ['Sí, des de les tres|Sí, desde las tres', "Només des d'una o dues|Solo desde una o dos"] },
            { q: 'Quina és la teva vista preferida?|¿Cuál es tu vista preferida?', opts: ['Davant|Delante', 'Dalt|Arriba', 'Costat|Lado', 'Perspectiva|Perspectiva'] },
            { q: 'Què hi canviaries si la tornessis a fer?|¿Qué cambiarías si la volvieras a hacer?', opts: ['Les formes|Las formas', 'Els colors|Los colores', 'Les mides|Los tamaños', "Res, m'agrada així|Nada, me gusta así"] }] },
        { k: 'quiz', ph: 'tanca', q: 'Per què una escultura per imprimir no pot tenir peces que floten?|¿Por qué una escultura para imprimir no puede tener piezas que flotan?',
          opts: ["Perquè la impressora construeix de baix a dalt i no pot deixar plàstic a l'aire|Porque la impresora construye de abajo arriba y no puede dejar plástico en el aire", 'Perquè no es veurien bé a la foto|Porque no se verían bien en la foto', 'Perquè gasten massa colors|Porque gastan demasiados colores'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Quin és el <b>primer pas</b> per dissenyar una escultura?|¿Cuál es el <b>primer paso</b> para diseñar una escultura?',
          opts: ['Pensar una idea i fer-ne un esbós|Pensar una idea y hacer un boceto', 'Imprimir-la directament|Imprimirla directamente', 'Triar el color de la placa|Elegir el color de la placa'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] };
})();

/* ── unitat 2 ── */
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

/* ── unitat 3 ── */
/* Tech 3D · Nivell 1 · unitat 3 «Moure, girar i escalar» (m3-1 … m3-4)
   Contingut propi de Numi. Fil narratiu: el Taller de Bit i la Nuvi (la impressora 3D) reben l'encàrrec de l'escola del
   barri: un robot de peces per a la Setmana de la Robòtica. m3-1 moure amb precisió (dit, números i quadrícula magnètica),
   m3-2 girar (15°, 45°, 90°; en z i tombant en x/y), m3-3 escalar (una mida, proporcional, doble i meitat, figures 2:1) i
   m3-4 el projecte: el robot de peces a partir d'una fitxa tècnica.
   Models: peces { id, t, s: [x, y, z] (mm), p: centre, r: graus, c: color }, placa de 200 × 200 mm centrada a l'origen. */
Object.assign(TBADGE, {
  m31_prec: { id: 'm31_prec', ico: '🎯', n: 'Mà de precisió|Mano de precisión', d: 'Col·loques les peces al mil·límetre, amb el dit i amb números.|Colocas las piezas al milímetro, con el dedo y con números.' },
  m32_gir: { id: 'm32_gir', ico: '🔄', n: 'Mestre/a del gir|Maestro/a del giro', d: 'Gires peces 15°, 45° i 90°, en planta i tombant-les de costat.|Giras piezas 15°, 45° y 90°, en planta y tumbándolas de lado.' },
  m33_esc: { id: 'm33_esc', ico: '🔍', n: "Lupa d'escala|Lupa de escala", d: 'Fas peces i figures al doble i a la meitat sense deformar-les.|Haces piezas y figuras al doble y a la mitad sin deformarlas.' },
  m34_rob: { id: 'm34_rob', ico: '🤖', n: 'Constructor/a de robots|Constructor/a de robots', d: 'Projecte acabat: un robot de peces fet amb una fitxa tècnica, amb peces mogudes, girades i escalades.|Proyecto terminado: un robot de piezas hecho con una ficha técnica, con piezas movidas, giradas y escaladas.' }
});
COURSE_UNITS[3] = (() => {
  const P = (id, t, s, p, c, o = {}) => ({ id, t, s, p, r: o.r || [0, 0, 0], c, ...o });
  // B: la z que es dona és la de la BASE (com a la pestanya Posició) i h és l'alçada real de la peça (girada o no)
  const B = (id, t, s, x, y, z0, c, o = {}) => P(id, t, s, [x, y, z0 + (o.h ?? s[2]) / 2], c, o);
  const cub = (x, y, z0 = 0, id = 'a1', c = '#7C5CFF', m = 20) => B(id, 'box', [m, m, m], x, y, z0, c);
  // ---- m3-1 · moure amb precisió ----
  const PUNTS = [B('a', 'cyl', [12, 12, 12], 35, 15, 0, '#E8453C'), B('b', 'cyl', [12, 12, 12], 15, 35, 0, '#3D7BF4'), B('c', 'cyl', [12, 12, 12], -35, 15, 0, '#2FB36D'), B('d', 'cyl', [12, 12, 12], 35, -15, 0, '#F7C531'), B('e', 'cyl', [12, 12, 12], -15, -35, 0, '#EC5FA8')];
  const TRES0 = [B('a1', 'cyl', [16, 16, 16], -45, 25, 0, '#3D7BF4'), B('a2', 'box', [16, 16, 16], -20, 0, 0, '#FF8A3D'), B('a3', 'cone', [16, 16, 20], 5, -25, 0, '#2FB36D')];
  const TRES1 = [B('a1', 'cyl', [16, 16, 16], -20, 25, 0, '#3D7BF4'), B('a2', 'box', [16, 16, 16], 5, 0, 0, '#FF8A3D'), B('a3', 'cone', [16, 16, 20], 30, -25, 0, '#2FB36D')];
  const CAP = B('cap', 'box', [30, 20, 20], 0, 0, 0, '#5BC0EB'), BOCA = B('boca', 'box', [14, 2, 3], 0, -10, 5, '#2A2F3A');
  const CARA0 = [CAP, BOCA, B('u1', 'sph', [6, 6, 6], -30, -30, 0, '#2A2F3A'), B('u2', 'sph', [6, 6, 6], 30, -30, 0, '#2A2F3A')];
  const CARA1 = [CAP, BOCA, B('u1', 'sph', [6, 6, 6], -8, -10, 10, '#2A2F3A'), B('u2', 'sph', [6, 6, 6], 8, -10, 10, '#2A2F3A')];
  const CAPSA = B('capsa', 'box', [40, 30, 16], 0, 0, 0, '#F5893A');
  const TAPA0 = [CAPSA, B('tapa', 'box', [42, 32, 4], 3, -2, 16, '#E8453C')], TAPA1 = [CAPSA, B('tapa', 'box', [42, 32, 4], 0, 0, 16, '#E8453C')];
  const TORRE0 = [B('t1', 'cyl', [30, 30, 12], -40, 20, 0, '#3D7BF4'), B('t2', 'cyl', [20, 20, 8], 0, 35, 0, '#2FB36D'), B('t3', 'cyl', [10, 10, 5], 35, 25, 0, '#F7C531')];
  const TORRE1 = [B('t1', 'cyl', [30, 30, 12], 0, 0, 0, '#3D7BF4'), B('t2', 'cyl', [20, 20, 8], 0, 0, 12, '#2FB36D'), B('t3', 'cyl', [10, 10, 5], 0, 0, 20, '#F7C531')];
  // ---- m3-2 · girar ----
  const bar = (id, x, y, rz, c, l = 50) => B(id, 'box', [l, 10, 10], x, y, 0, c, { r: [0, 0, rz] });
  const BARRES = [bar('b0', -35, 25, 0, '#3D7BF4', 36), bar('b30', 35, 25, 30, '#2FB36D', 36), bar('b45', -35, -25, 45, '#F7C531', 36), bar('b90', 35, -25, 90, '#EC5FA8', 36)];
  const PLAT = B('plat', 'box', [30, 30, 20], 25, 0, 0, '#9AA3B5');
  const RAMPA0 = [PLAT, B('rampa', 'wedge', [30, 30, 20], -40, 0, 0, '#F5893A')], RAMPA1 = [PLAT, B('rampa', 'wedge', [30, 30, 20], -5, 0, 0, '#F5893A', { r: [0, 0, 180] })];
  const CARRO = B('carro', 'box', [30, 30, 10], 0, 0, 8, '#E8453C');
  const roda = (id, x, y, c = '#2A2F3A', rot = true) => rot ? B(id, 'cyl', [16, 16, 6], x, y, 0, c, { r: [0, 90, 0], h: 16 }) : B(id, 'cyl', [16, 16, 6], x, y, 0, c);
  const CARRO0 = [CARRO, roda('w1', -40, 35, '#2A2F3A', false), roda('w2', 40, 35, '#2A2F3A', false)], CARRO1 = [CARRO, roda('w1', -18, 0), roda('w2', 18, 0)];
  const ESF = B('esfera', 'cyl', [60, 60, 4], 0, 0, 0, '#F3F3EE'), MIN = B('minuts', 'box', [4, 24, 2], 0, 12, 4, '#2A2F3A'), PUNT = B('eix', 'cyl', [6, 6, 3], 0, 0, 4, '#E8453C');
  const MARQ = [B('m12', 'box', [4, 6, 2], 0, 25, 4, '#3D7BF4'), B('m3', 'box', [6, 4, 2], 25, 0, 4, '#3D7BF4'), B('m6', 'box', [4, 6, 2], 0, -25, 4, '#3D7BF4'), B('m9', 'box', [6, 4, 2], -25, 0, 4, '#3D7BF4')];
  const RELL0 = [ESF, ...MARQ, MIN, PUNT, B('hores', 'box', [4, 16, 2], 50, 30, 0, '#E8453C')], RELL1 = [ESF, ...MARQ, MIN, PUNT, B('hores', 'box', [4, 16, 2], 8, 0, 4, '#E8453C', { r: [0, 0, 90] })];
  const CILS = [B('dret', 'cyl', [14, 14, 36], -30, 0, 0, '#3D7BF4'), B('x90', 'cyl', [14, 14, 36], 0, 0, 0, '#2FB36D', { r: [90, 0, 0], h: 14 }), B('y90', 'cyl', [14, 14, 36], 32, 0, 0, '#FF8A3D', { r: [0, 90, 0], h: 14 })];
  // ---- m3-3 · escalar ----
  const ARBRE = (x, k = 1, id = 'p') => [B(id + 't', 'cyl', [6 * k, 6 * k, 10 * k], x, 0, 0, '#A0683A'), B(id + 'c', 'cone', [16 * k, 16 * k, 16 * k], x, 0, 10 * k, '#2FB36D')];
  const NINOT_MAL = [B('n1', 'sph', [40, 40, 40], 0, 0, 0, '#F3F3EE'), B('n2', 'sph', [28, 28, 28], 0, 0, 20, '#F3F3EE'), B('nas', 'cone', [6, 6, 10], 0, -14, 31, '#F5893A', { r: [90, 0, 0], h: 6 })];
  const CASA = B('casa', 'box', [40, 30, 30], 0, 0, 0, '#F5893A'), TEU = B('teulada', 'pyr', [46, 36, 16], 0, 0, 30, '#E8453C');
  const PORTA0 = [CASA, TEU, B('porta', 'box', [24, 2, 30], 0, -15.5, 0, '#A0683A')], PORTA1 = [CASA, TEU, B('porta', 'box', [12, 2, 15], 0, -15.5, 0, '#A0683A')];
  // ---- m3-4 · el robot de peces (la fitxa tècnica) ----
  const RODES = [roda('r1', -16, 0), roda('r2', 16, 0)], COS = B('cos', 'box', [26, 18, 24], 0, 0, 4, '#7C5CFF');
  const brac = (id, x, rot = true) => rot ? B(id, 'box', [6, 6, 20], x, 0, 20, '#FF8A3D', { r: [0, 90, 0], h: 6 }) : B(id, 'box', [6, 6, 20], x, 0, 0, '#FF8A3D');
  const CAPR = B('cap', 'box', [20, 16, 14], 0, 0, 28, '#5BC0EB'), ULLS = [B('u1', 'sph', [6, 6, 6], -5, -8, 32, '#2A2F3A'), B('u2', 'sph', [6, 6, 6], 5, -8, 32, '#2A2F3A')];
  const ANT = [B('antena', 'cyl', [2, 2, 8], 0, 0, 42, '#9AA3B5'), B('bola', 'sph', [6, 6, 6], 0, 0, 50, '#E8453C')];
  const ROBOT = [...RODES, COS, brac('b1', -23), brac('b2', 23), CAPR, ...ULLS, ...ANT];
  const RB1 = [...RODES, COS], RB2 = [...RB1, CAPR, ...ULLS], RB3 = [...RB2, brac('b1', -23), brac('b2', 23)];
  const RODES_DRETES = [B('r1', 'cyl', [16, 16, 6], -16, 0, 0, '#2A2F3A'), B('r2', 'cyl', [16, 16, 6], 16, 0, 0, '#2A2F3A')];
  const CILS3 = [B('c1', 'cyl', [12, 12, 30], -30, 0, 0, '#3D7BF4'), B('c2', 'cyl', [12, 12, 30], 0, 0, 0, '#2FB36D', { r: [0, 90, 0], h: 12 }), B('c3', 'cyl', [12, 12, 30], 30, 0, 0, '#FF8A3D', { r: [90, 0, 0], h: 12 })];
  return {
  t: 'Moure, girar i escalar|Mover, girar y escalar', d: 'Mesures en mil·límetres|Medidas en milímetros', color: '#3D7BF4',
  s: [
    /* ---------- Sessió 1 · Moure amb precisió ---------- */
    { id: 'm3-1', t: 'Moure amb precisió|Mover con precisión', min: 45, badge: 'm31_prec',
      learn: ["Una peça es mou arrossegant-la amb el dit o escrivint la posició exacta, en mil·límetres, a la pestanya Posició.|Una pieza se mueve arrastrándola con el dedo o escribiendo la posición exacta, en milímetros, en la pestaña Posición.",
        "La quadrícula magnètica fa saltar la peça de 10, 5 o 1 mm: 10 mm per anar de pressa i 1 mm per afinar.|La cuadrícula magnética hace saltar la pieza de 10, 5 o 1 mm: 10 mm para ir deprisa y 1 mm para afinar.",
        "Moure és sumar o restar: una peça a x = 10 que es mou 25 mm a la dreta queda a x = 35.|Mover es sumar o restar: una pieza en x = 10 que se mueve 25 mm a la derecha queda en x = 35."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Un cub de <b>20 mm</b> és a sobre d'un altre cub de 20 mm. A quina <b>z</b> comença el de dalt?|Un cubo de <b>20 mm</b> está encima de otro cubo de 20 mm. ¿En qué <b>z</b> empieza el de arriba?",
          opts: ['z = 20|z = 20', 'z = 10|z = 10', 'z = 40|z = 40'], a: 0,
          ex: "El de sota va de z = 0 a z = 20: el de dalt comença just on s'acaba, a z = 20.|El de debajo va de z = 0 a z = 20: el de arriba empieza justo donde acaba, en z = 20." },
        { k: 'm3look', ph: 'recorda', q: 'Mirem des de dalt. Quines són les coordenades <b>x</b> i <b>y</b> del cub?|Miramos desde arriba. ¿Cuáles son las coordenadas <b>x</b> e <b>y</b> del cubo?', model: { parts: [cub(30, -20, 0, 'q')] }, view: 'top', lock: true,
          opts: ['x = 30, y = −20|x = 30, y = −20', 'x = −20, y = 30|x = −20, y = 30', 'x = 30, y = 20|x = 30, y = 20'], a: 0,
          ex: "És 3 quadrets a la dreta de l'origen (x = 30) i 2 quadrets cap a davant, a baix de la imatge (y = −20).|Está 3 cuadritos a la derecha del origen (x = 30) y 2 cuadritos hacia delante, abajo en la imagen (y = −20)." },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: "L'encàrrec de l'escola|El encargo de la escuela",
          t: "Ha arribat un encàrrec de l'<b>escola del barri</b>: per a la Setmana de la Robòtica volen un <b>robot de peces</b> a l'entrada, i ens han enviat una fitxa amb totes les mides en <b>mil·límetres</b>. La Nuvi imprimeix exactament el que dibuixem: si una peça queda 2 mm torta, el robot sortirà tort. Abans de construir-lo, avui aprendrem a <b>moure amb precisió</b>!|Ha llegado un encargo de la <b>escuela del barrio</b>: para la Semana de la Robótica quieren un <b>robot de piezas</b> en la entrada, y nos han enviado una ficha con todas las medidas en <b>milímetros</b>. Nuvi imprime exactamente lo que dibujamos: si una pieza queda 2 mm torcida, el robot saldrá torcido. Antes de construirlo, ¡hoy aprenderemos a <b>mover con precisión</b>!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Dues maneres|Dos maneras', t: 'Amb el dit o amb números|Con el dedo o con números', media: { k: 'model', model: { parts: [cub(-30, 10, 0, 'q', '#7C5CFF')] }, target: { parts: [cub(25, -15, 0, 'g')] } },
            x: "<b>Arrossegar</b> la peça amb el dit (o el ratolí) és ràpid: la portes a prop d'on vols. Per deixar-la <b>exacta</b>, toca-la i escriu els números a la pestanya <b>Posició</b>: x, y i z, en mil·límetres. Els bons dissenyadors fan les dues coses: primer arrosseguen i després afinen amb números.|<b>Arrastrar</b> la pieza con el dedo (o el ratón) es rápido: la llevas cerca de donde quieres. Para dejarla <b>exacta</b>, tócala y escribe los números en la pestaña <b>Posición</b>: x, y y z, en milímetros. Los buenos diseñadores hacen las dos cosas: primero arrastran y después afinan con números.",
            tip: 'El cub transparent és el <b>fantasma</b>: marca on ha d\'anar la peça.|El cubo transparente es el <b>fantasma</b>: marca dónde tiene que ir la pieza.' },
          { k: 'La quadrícula magnètica|La cuadrícula magnética', t: 'Salts de 10, 5 o 1 mm|Saltos de 10, 5 o 1 mm', anim: 'm31snap',
            x: "Quan arrossegues, la peça no es mou de qualsevol manera: <b>salta</b> de punt en punt de la quadrícula, com si fos un imant. El botó <b>⊞ mm</b> de sota la vista canvia el salt: <b>10 mm</b> per anar de pressa, <b>5 mm</b> per als punts del mig i <b>1 mm</b> per afinar. Si el fantasma és a 37 mm, només hi arribaràs amb el salt d'1 mm!|Cuando arrastras, la pieza no se mueve de cualquier manera: <b>salta</b> de punto en punto de la cuadrícula, como si fuera un imán. El botón <b>⊞ mm</b> de debajo de la vista cambia el salto: <b>10 mm</b> para ir deprisa, <b>5 mm</b> para los puntos del medio y <b>1 mm</b> para afinar. Si el fantasma está a 37 mm, ¡solo llegarás con el salto de 1 mm!",
            tip: 'Els botons − i + dels camps numèrics també fan servir aquest salt.|Los botones − y + de los campos numéricos también usan este salto.' },
          { k: 'Moure és sumar|Mover es sumar', t: 'De x = 10 a x = 35: +25 mm|De x = 10 a x = 35: +25 mm', anim: 'm31mou',
            x: "Moure una peça és <b>sumar o restar</b> a la seva posició. Si és a x = 10 i la vols <b>25 mm a la dreta</b>, fas 10 + 25 = <b>35</b>. Cap a l'esquerra, restes: 10 − 25 = <b>−15</b>. Amb la y passa el mateix (endavant i enrere) i amb la z (amunt i avall).|Mover una pieza es <b>sumar o restar</b> a su posición. Si está en x = 10 y la quieres <b>25 mm a la derecha</b>, haces 10 + 25 = <b>35</b>. Hacia la izquierda, restas: 10 − 25 = <b>−15</b>. Con la y pasa lo mismo (adelante y atrás) y con la z (arriba y abajo).",
            bad: 'Per moure-la 25 mm, escric 25 a la x.|Para moverla 25 mm, escribo 25 en la x.', good: 'Per moure-la 25 mm, sumo 25 a la x que ja tenia.|Para moverla 25 mm, sumo 25 a la x que ya tenía.' },
          { k: 'Per què tanta precisió?|¿Por qué tanta precisión?', t: 'La Nuvi fa exactament el que dibuixes|Nuvi hace exactamente lo que dibujas', media: { k: 'model', model: { parts: TAPA0 } },
            x: "Si la tapa d'una capsa queda <b>3 mm</b> desplaçada, sobresurt per un costat i no tanca bé. La impressora no ho arregla: fabrica el model tal com és. Per això, al taller, les peces importants es col·loquen <b>al mil·límetre</b>.|Si la tapa de una caja queda <b>3 mm</b> desplazada, sobresale por un lado y no cierra bien. La impresora no lo arregla: fabrica el modelo tal como es. Por eso, en el taller, las piezas importantes se colocan <b>al milímetro</b>.",
            tip: 'Gira la vista: la tapa sobresurt per la dreta i pel davant.|Gira la vista: la tapa sobresale por la derecha y por delante.' },
          { k: 'Amb el teclat|Con el teclado', t: 'Les fletxes mouen de mil·límetre en mil·límetre|Las flechas mueven de milímetro en milímetro', media: { k: 'model', model: { parts: PUNTS }, view: 'top' },
            x: "A l'ordinador, toca una peça i fes servir les <b>fletxes</b>: ← i → la mouen en <b>x</b>, ↑ i ↓ la mouen en <b>y</b>, i Re Pàg / Av Pàg, en <b>z</b>. Cada toc és <b>1 mm</b>; si mantens premuda la tecla de majúscules (⇧), són <b>10 mm</b>.|En el ordenador, toca una pieza y usa las <b>flechas</b>: ← y → la mueven en <b>x</b>, ↑ y ↓ la mueven en <b>y</b>, y Re Pág / Av Pág, en <b>z</b>. Cada toque es <b>1 mm</b>; si mantienes pulsada la tecla de mayúsculas (⇧), son <b>10 mm</b>.",
            tip: "Aquests cilindres són a mig quadret: el vermell és a x = 35, y = 15.|Estos cilindros están a medio cuadrito: el rojo está en x = 35, y = 15." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '📐', title: 'El dictat de moviments|El dictado de movimientos', t: 'Per parelles, amb la placa de paper (la fitxa), un regle i una goma d\'esborrar que fa de peça:|Por parejas, con la placa de papel (la ficha), una regla y una goma de borrar que hace de pieza:',
          steps: ["Poseu la goma a l'origen (0, 0), al centre de la placa.|Poned la goma en el origen (0, 0), en el centro de la placa.",
            "Una persona dicta tres moviments: «+30 en x», «−20 en y», «+15 en x». L'altra mou la goma amb el regle, sense dir res.|Una persona dicta tres movimientos: «+30 en x», «−20 en y», «+15 en x». La otra mueve la goma con la regla, sin decir nada.",
            'Abans de mesurar, calculeu on hauria de ser: sumeu i resteu els moviments de cada eix.|Antes de medir, calculad dónde debería estar: sumad y restad los movimientos de cada eje.',
            'Comproveu-ho amb el regle. Si coincideix, canvieu els papers!|Comprobadlo con la regla. Si coincide, ¡cambiad los papeles!'],
          tip: 'Recordeu: x positiva cap a la dreta i y positiva cap al fons. 30 + 15 = 45: la goma ha d\'acabar a (45, −20).|Recordad: x positiva hacia la derecha e y positiva hacia el fondo. 30 + 15 = 45: la goma tiene que acabar en (45, −20).' },
        { k: 'm3look', ph: 'prova', q: 'Toca el cilindre que és a <b>x = 35, y = 15</b>.|Toca el cilindro que está en <b>x = 35, y = 15</b>.', model: { parts: PUNTS }, view: 'top', pick: 'a',
          no: "Aquest no. Compta quadrets: x = 35 és 3 quadrets i mig a la dreta, i y = 15 és quadret i mig cap al fons.|Este no. Cuenta cuadritos: x = 35 es 3 cuadritos y medio a la derecha, e y = 15 es cuadrito y medio hacia el fondo.",
          ex: 'Cada quadret fa 10 mm: 35 mm són 3 quadrets i mig.|Cada cuadrito mide 10 mm: 35 mm son 3 cuadritos y medio.' },
        { k: 'm3look', ph: 'investiga', q: 'El cub és a <b>x = 10</b>. Si el mous <b>25 mm a l\'esquerra</b>, a quina x quedarà?|El cubo está en <b>x = 10</b>. Si lo mueves <b>25 mm a la izquierda</b>, ¿en qué x quedará?', model: { parts: [cub(10, 0, 0, 'q', '#2FB36D')] }, view: 'top', lock: true,
          opts: ['x = −15|x = −15', 'x = 35|x = 35', 'x = −25|x = −25'], a: 0,
          ex: "A l'esquerra es resta: 10 − 25 = −15. Passa per l'origen i queda 15 mm a l'altre costat.|A la izquierda se resta: 10 − 25 = −15. Pasa por el origen y queda 15 mm al otro lado." },
        { k: 'move', ph: 'pausa', title: 'Peça de precisió|Pieza de precisión', secs: 30, t: "Imagina que ets una peça a la placa: un salt gran a la dreta (<b>+10 mm</b>), un passet petit a l'esquerra (<b>−1 mm</b>), un salt cap endavant (<b>+10 en y</b>) i amunt (<b>+z</b>)! Ara al revés, cada cop més de pressa.|Imagina que eres una pieza en la placa: un salto grande a la derecha (<b>+10 mm</b>), un pasito pequeño a la izquierda (<b>−1 mm</b>), un salto hacia delante (<b>+10 en y</b>) ¡y arriba (<b>+z</b>)! Ahora al revés, cada vez más deprisa." },
        { k: 'm3build', ph: 'repte', q: 'Porta el cub al fantasma, a <b>x = 35, y = −15</b>. Amb el salt de 5 mm hi arribaràs arrossegant.|Lleva el cubo al fantasma, a <b>x = 35, y = −15</b>. Con el salto de 5 mm llegarás arrastrando.',
          start: { parts: [cub(0, 0)] }, palette: ['box'], snap: 5, target: { parts: [cub(35, -15)] },
          checks: [{ k: 'match', target: { parts: [cub(35, -15)] }, th: 0.95, t: 'El cub és dins del fantasma|El cubo está dentro del fantasma' }, { k: 'onplate' }],
          hint: 'Toca el cub i, a la pestanya Posició, escriu 35 a la x i −15 a la y.|Toca el cubo y, en la pestaña Posición, escribe 35 en la x y −15 en la y.', sol: { parts: [cub(35, -15)] } },
        { k: 'm3build', ph: 'repte', q: 'Mou cada peça <b>exactament 25 mm a la dreta</b>. Calcula la x nova de cada una (x + 25).|Mueve cada pieza <b>exactamente 25 mm a la derecha</b>. Calcula la x nueva de cada una (x + 25).',
          start: { parts: TRES0 }, palette: ['box', 'cyl', 'cone'], target: { parts: TRES1 },
          checks: [{ k: 'match', target: { parts: TRES1 }, th: 0.93, t: 'Les tres peces són als fantasmes|Las tres piezas están en los fantasmas' }, { k: 'part', t: 'cone', at: [30, -25, null], tol: 0.6, txt: 'El con és a x = 30|El cono está en x = 30' }, { k: 'onplate' }],
          hint: 'El cilindre és a x = −45: −45 + 25 = −20. La caixa: −20 + 25 = 5. El con: 5 + 25 = 30. La y no canvia.|El cilindro está en x = −45: −45 + 25 = −20. La caja: −20 + 25 = 5. El cono: 5 + 25 = 30. La y no cambia.', sol: { parts: TRES1 } },
        { k: 'm3build', ph: 'repte', q: 'Posa els ulls al robot: a <b>x = −8</b> i <b>x = 8</b>, a la cara del davant (<b>y = −10</b>) i amb la base a <b>z = 10</b>.|Pon los ojos al robot: en <b>x = −8</b> y <b>x = 8</b>, en la cara de delante (<b>y = −10</b>) y con la base en <b>z = 10</b>.',
          start: { parts: CARA0 }, palette: ['sph'], target: { parts: CARA1 },
          checks: [{ k: 'part', t: 'sph', at: [-8, -10, 13], tol: 0.6, txt: "L'ull esquerre és a (−8, −10, 10)|El ojo izquierdo está en (−8, −10, 10)" }, { k: 'part', t: 'sph', at: [8, -10, 13], tol: 0.6, txt: "L'ull dret és a (8, −10, 10)|El ojo derecho está en (8, −10, 10)" }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca un ull i, a Posició, escriu x = −8, y = −10 i z = 10. Després, l'altre amb x = 8.|Toca un ojo y, en Posición, escribe x = −8, y = −10 y z = 10. Después, el otro con x = 8.", sol: { parts: CARA1 },
          done: 'Ara el robot et mira! Els ulls sobresurten la meitat per davant de la cara.|¡Ahora el robot te mira! Los ojos sobresalen la mitad por delante de la cara.' },
        { k: 'm3fix', ph: 'repte', q: '<b>La tapa no tapa:</b> està desplaçada i sobresurt. Centra-la a sobre de la capsa.|<b>La tapa no tapa:</b> está desplazada y sobresale. Céntrala encima de la caja.',
          start: { parts: TAPA0 }, fix: ['tapa'], palette: ['box'],
          checks: [{ k: 'part', t: 'box', s: [42, 32, 4], at: [0, 0, null], tol: 0.5, txt: 'La tapa és centrada a (0, 0)|La tapa está centrada en (0, 0)' }, { k: 'size', ax: 'x', v: 42, tol: 0.5, t: 'Amplada total: 42 mm (no sobresurt)|Anchura total: 42 mm (no sobresale)' }, { k: 'size', ax: 'y', v: 32, tol: 0.5, t: 'Fondària total: 32 mm|Fondo total: 32 mm' }, { k: 'one' }],
          hint: 'La tapa és a x = 3, y = −2. Per centrar-la, posa x = 0 i y = 0 a Posició. La z no la toquis.|La tapa está en x = 3, y = −2. Para centrarla, pon x = 0 e y = 0 en Posición. La z no la toques.', sol: { parts: TAPA1 } },
        { k: 'm3build', ph: 'repte', extra: true, q: '<b>Torre de precisió:</b> apila els tres cilindres al centre. A quina z comença cada un?|<b>Torre de precisión:</b> apila los tres cilindros en el centro. ¿En qué z empieza cada uno?',
          start: { parts: TORRE0 }, palette: ['cyl'], target: { parts: TORRE1 },
          checks: [{ k: 'match', target: { parts: TORRE1 }, th: 0.93, t: 'La torre és com el fantasma|La torre es como el fantasma' }, { k: 'size', ax: 'z', v: 25, tol: 0.5, t: 'Alçada total: 25 mm|Altura total: 25 mm' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Tots a x = 0, y = 0. El gran fa 12 mm: el mitjà comença a z = 12. El mitjà fa 8 mm: el petit comença a 12 + 8 = 20.|Todos en x = 0, y = 0. El grande mide 12 mm: el mediano empieza en z = 12. El mediano mide 8 mm: el pequeño empieza en 12 + 8 = 20.", sol: { parts: TORRE1 } },
        { k: 'm3free', ph: 'crea', q: "<b>La teva inicial.</b> Construeix la primera lletra del teu nom amb peces, col·locades amb números. Les peces s'han de tocar, sense espais.|<b>Tu inicial.</b> Construye la primera letra de tu nombre con piezas, colocadas con números. Las piezas se tienen que tocar, sin espacios.",
          name: 'La meva inicial|Mi inicial', palette: ['box', 'cyl', 'sph', 'wedge'],
          crit: ['La lletra té almenys 3 peces|La letra tiene al menos 3 piezas', 'Les peces es toquen: no hi ha espais ni trossos solts|Las piezas se tocan: no hay espacios ni trozos sueltos', 'Has fet servir la pestanya Posició per afinar|Has usado la pestaña Posición para afinar'],
          checks: [{ k: 'count', min: 3 }, { k: 'one' }, { k: 'onplate' }],
          sol: { parts: [B('a1', 'box', [10, 50, 8], -15, 0, 0, '#7C5CFF'), B('a2', 'box', [30, 10, 8], 0, 20, 0, '#7C5CFF'), B('a3', 'box', [24, 10, 8], -3, 0, 0, '#FF8A3D'), B('a4', 'box', [30, 10, 8], 0, -20, 0, '#7C5CFF')] } },
        { k: 'quiz', ph: 'tanca', q: 'Una peça és a <b>x = 15</b> i la mous <b>20 mm a l\'esquerra</b>. On queda?|Una pieza está en <b>x = 15</b> y la mueves <b>20 mm a la izquierda</b>. ¿Dónde queda?', opts: ['x = −5|x = −5', 'x = 35|x = 35', 'x = −20|x = −20'], a: 0,
          ex: "A l'esquerra es resta: 15 − 20 = −5.|A la izquierda se resta: 15 − 20 = −5." },
        { k: 'quiz', ph: 'tanca', q: 'Quin salt de la quadrícula fas servir per <b>afinar</b> fins al mil·límetre?|¿Qué salto de la cuadrícula usas para <b>afinar</b> hasta el milímetro?', opts: ['1 mm|1 mm', '10 mm|10 mm', '5 mm|5 mm'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 2 · Girar ---------- */
    { id: 'm3-2', t: 'Girar|Girar', min: 45, badge: 'm32_gir',
      learn: ['Girar fa voltar una peça al voltant del seu centre; a la pestanya Gir, cada toc de + o − la gira 15°.|Girar hace dar vueltas a una pieza alrededor de su centro; en la pestaña Giro, cada toque de + o − la gira 15°.',
        "90° és un quart de volta, 180° mitja volta i 45° la meitat de 90°; un angle negatiu gira cap a l'altre costat.|90° es un cuarto de vuelta, 180° media vuelta y 45° la mitad de 90°; un ángulo negativo gira hacia el otro lado.",
        'Girar en z fa voltar la peça com una baldufa; girar en x o en y la tomba de costat, com un tronc ajagut.|Girar en z hace girar la pieza como una peonza; girar en x o en y la tumba de lado, como un tronco tumbado.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Una peça és a <b>x = 20</b> i la vols <b>35 mm a l\'esquerra</b>. Quina x hi escrius?|Una pieza está en <b>x = 20</b> y la quieres <b>35 mm a la izquierda</b>. ¿Qué x escribes?', opts: ['x = −15|x = −15', 'x = 55|x = 55', 'x = −35|x = −35'], a: 0,
          ex: "A l'esquerra es resta: 20 − 35 = −15.|A la izquierda se resta: 20 − 35 = −15." },
        { k: 'quiz', ph: 'recorda', q: "En un rellotge, quant gira l'agulla dels minuts en un <b>quart d'hora</b>?|En un reloj, ¿cuánto gira la aguja de los minutos en un <b>cuarto de hora</b>?", opts: ['Un quart de volta|Un cuarto de vuelta', 'Mitja volta|Media vuelta', 'Una volta sencera|Una vuelta entera'], a: 0,
          ex: "En 15 minuts va de les 12 a les 3: un quart de volta. Avui l'anomenarem <b>90°</b>.|En 15 minutos va de las 12 a las 3: un cuarto de vuelta. Hoy lo llamaremos <b>90°</b>." },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'Braços i rodes|Brazos y ruedas',
          t: "La fitxa del robot diu: <b>braços estirats</b> i <b>rodes de costat</b>. Però totes les peces surten de la paleta dretes i rectes! La Nuvi diu que, així, el robot sembla un pal d'escombra. Avui aprendrem a <b>girar</b> peces: 15°, 45°, 90°… i a tombar-les de costat.|La ficha del robot dice: <b>brazos estirados</b> y <b>ruedas de lado</b>. ¡Pero todas las piezas salen de la paleta derechas y rectas! Nuvi dice que, así, el robot parece un palo de escoba. Hoy aprenderemos a <b>girar</b> piezas: 15°, 45°, 90°… y a tumbarlas de lado." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Girar|Girar', t: 'Una volta al voltant del centre|Una vuelta alrededor del centro', anim: 'm32gir',
            x: "Quan gires una peça, <b>volta al voltant del seu centre</b>, com una porta giratòria: les dues puntes es mouen alhora. A la pestanya <b>Gir</b>, cada toc de <b>+</b> o <b>−</b> la gira <b>15°</b>. També pots escriure l'angle directament: 45, 90…|Cuando giras una pieza, <b>da vueltas alrededor de su centro</b>, como una puerta giratoria: las dos puntas se mueven a la vez. En la pestaña <b>Giro</b>, cada toque de <b>+</b> o <b>−</b> la gira <b>15°</b>. También puedes escribir el ángulo directamente: 45, 90…",
            tip: 'Des de dalt (vista de planta), el gir en z es veu molt clar.|Desde arriba (vista de planta), el giro en z se ve muy claro.' },
          { k: 'Els angles|Los ángulos', t: '15°, 45°, 90° i 180°|15°, 45°, 90° y 180°', anim: 'm32ang',
            x: "Una volta sencera són <b>360°</b>. <b>90°</b> és un quart de volta (com la cantonada d'un full), <b>180°</b> és mitja volta i <b>45°</b> és la meitat de 90°. Amb tocs de 15°: 3 tocs fan 45° i 6 tocs fan 90°.|Una vuelta entera son <b>360°</b>. <b>90°</b> es un cuarto de vuelta (como la esquina de una hoja), <b>180°</b> es media vuelta y <b>45°</b> es la mitad de 90°. Con toques de 15°: 3 toques hacen 45° y 6 toques hacen 90°." },
          { k: 'Positiu o negatiu|Positivo o negativo', t: 'Cap a quin costat gira?|¿Hacia qué lado gira?', media: { k: 'model', model: { parts: [B('p', 'box', [44, 8, 8], -28, 0, 0, '#3D7BF4', { r: [0, 0, 30] }), B('n', 'box', [44, 8, 8], 28, 0, 0, '#FF8A3D', { r: [0, 0, -30] })] }, view: 'top' },
            x: "Mirant des de dalt, un angle <b>positiu</b> (+30°) gira la peça <b>al revés de les agulles del rellotge</b>, i un angle <b>negatiu</b> (−30°) la gira cap a l'altre costat. La barra blava està girada +30° i la taronja, −30°: són com un mirall l'una de l'altra.|Mirando desde arriba, un ángulo <b>positivo</b> (+30°) gira la pieza <b>al revés de las agujas del reloj</b>, y un ángulo <b>negativo</b> (−30°) la gira hacia el otro lado. La barra azul está girada +30° y la naranja, −30°: son como un espejo la una de la otra.",
            tip: "Si s'ha girat cap al costat que no volies, canvia el signe del número.|Si se ha girado hacia el lado que no querías, cambia el signo del número." },
          { k: 'Tombar|Tumbar', t: 'Girar en x i en y|Girar en x y en y', anim: 'm32eix',
            x: "Girar en <b style=\"color:#2F5BEA\">z</b> fa voltar la peça sense aixecar-la, com una baldufa. Girar en <b style=\"color:#E5484D\">x</b> o en <b style=\"color:#22A06B\">y</b> la <b>tomba</b>: una peça dreta passa a estar ajaguda. Amb 90° en y, queda estirada al llarg de l'eix x; amb 90° en x, al llarg de l'eix y.|Girar en <b style=\"color:#2F5BEA\">z</b> hace girar la pieza sin levantarla, como una peonza. Girar en <b style=\"color:#E5484D\">x</b> o en <b style=\"color:#22A06B\">y</b> la <b>tumba</b>: una pieza de pie pasa a estar tumbada. Con 90° en y, queda estirada a lo largo del eje x; con 90° en x, a lo largo del eje y.",
            tip: 'Quan la tombes, la peça continua tocant la placa: el taller manté la base a terra.|Cuando la tumbas, la pieza sigue tocando la placa: el taller mantiene la base en el suelo.' },
          { k: 'Compte!|¡Cuidado!', t: 'Formes que semblen no girar|Formas que parecen no girar', media: { k: 'model', model: { parts: CILS } },
            x: "Un <b>cilindre dret</b> o una esfera són iguals per tots els costats: si els gires en z, no notes cap canvi. Per tombar el cilindre cal girar-lo en <b>x</b> o en <b>y</b>: el blau és dret, el verd està girat 90° en x i el taronja, 90° en y.|Un <b>cilindro de pie</b> o una esfera son iguales por todos los lados: si los giras en z, no notas ningún cambio. Para tumbar el cilindro hay que girarlo en <b>x</b> o en <b>y</b>: el azul está de pie, el verde está girado 90° en x y el naranja, 90° en y.",
            bad: "He girat el cilindre 90° en z i no ha canviat: el gir no funciona.|He girado el cilindro 90° en z y no ha cambiado: el giro no funciona.", good: 'Un cilindre dret és igual per tots els costats: per tombar-lo, el giro en x o en y.|Un cilindro de pie es igual por todos los lados: para tumbarlo, lo giro en x o en y.' }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🕐', title: 'El rellotge de paper|El reloj de papel', t: "Amb el cercle d'angles de la fitxa, una tira de paper i la punta d'un llapis:|Con el círculo de ángulos de la ficha, una tira de papel y la punta de un lápiz:",
          steps: ['Posa la tira sobre la línia de 0° i clava-la pel mig amb la punta del llapis.|Pon la tira sobre la línea de 0° y clávala por el medio con la punta del lápiz.',
            'Gira-la 15°, després 45° i després 90°. On apunta cada vegada?|Gírala 15°, después 45° y después 90°. ¿Hacia dónde apunta cada vez?',
            "Ara gira-la −45°: cap a quin costat va?|Ahora gírala −45°: ¿hacia qué lado va?",
            "En parella: un diu un angle i l'altre el fa amb la tira. Canvieu cada 3 angles.|En pareja: uno dice un ángulo y el otro lo hace con la tira. Cambiad cada 3 ángulos."],
          tip: 'La tira gira pel mig, com les peces del taller: les dues puntes es mouen alhora.|La tira gira por el medio, como las piezas del taller: las dos puntas se mueven a la vez.' },
        { k: 'm3look', ph: 'prova', q: 'Toca la barra que està girada <b>45°</b>.|Toca la barra que está girada <b>45°</b>.', model: { parts: BARRES }, view: 'top', pick: 'b45',
          no: 'Aquesta no. 45° és la meitat d\'un quart de volta: la barra queda just en diagonal, entre la línia vermella i la verda.|Esta no. 45° es la mitad de un cuarto de vuelta: la barra queda justo en diagonal, entre la línea roja y la verde.',
          ex: "La blava no està girada (0°), la verda està a 30°, la groga a 45° (diagonal perfecta) i la rosa a 90°.|La azul no está girada (0°), la verde está a 30°, la amarilla a 45° (diagonal perfecta) y la rosa a 90°." },
        { k: 'm3look', ph: 'investiga', q: "Aquesta falca fa una rampa que <b>baixa cap a la dreta</b>. Quant l'has de girar en z perquè baixi cap a l'<b>esquerra</b>?|Esta cuña hace una rampa que <b>baja hacia la derecha</b>. ¿Cuánto tienes que girarla en z para que baje hacia la <b>izquierda</b>?",
          model: { parts: [B('f', 'wedge', [40, 24, 20], 0, 0, 0, '#F5893A')] }, opts: ['180°|180°', '90°|90°', '45°|45°'], a: 0,
          ex: "Amb mitja volta (180°), la part alta passa a l'altre costat. Amb 90°, la rampa baixaria cap al fons o cap a davant.|Con media vuelta (180°), la parte alta pasa al otro lado. Con 90°, la rampa bajaría hacia el fondo o hacia delante." },
        { k: 'move', ph: 'pausa', title: 'Gira com una peça|Gira como una pieza', secs: 30, t: "Posa't dret: gira <b>90°</b> (un quart de volta) a l'esquerra, 90° més i <b>180°</b> per tornar a mirar endavant. Ara fes-ho a salts de <b>45°</b>: quants salts calen per fer una volta sencera?|Ponte de pie: gira <b>90°</b> (un cuarto de vuelta) a la izquierda, 90° más y <b>180°</b> para volver a mirar adelante. Ahora hazlo a saltos de <b>45°</b>: ¿cuántos saltos hacen falta para dar una vuelta entera?" },
        { k: 'm3build', ph: 'repte', q: '<b>La creu.</b> Gira la barra lila <b>90°</b> i posa-la al centre, creuada amb la blava.|<b>La cruz.</b> Gira la barra lila <b>90°</b> y ponla en el centro, cruzada con la azul.',
          start: { parts: [bar('b1', 0, 0, 0, '#3D7BF4'), bar('b2', 0, 35, 0, '#7C5CFF')] }, palette: ['box'], target: { parts: [bar('g1', 0, 0, 0, '#3D7BF4'), bar('g2', 0, 0, 90, '#7C5CFF')] },
          checks: [{ k: 'match', target: { parts: [bar('g1', 0, 0, 0, '#3D7BF4'), bar('g2', 0, 0, 90, '#7C5CFF')] }, th: 0.92, t: 'La creu és com el fantasma|La cruz es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Toca la barra lila. A Gir, posa 90 a la z (o fes 6 tocs de +). Després, a Posició, x = 0 i y = 0.|Toca la barra lila. En Giro, pon 90 en la z (o haz 6 toques de +). Después, en Posición, x = 0 e y = 0.', sol: { parts: [bar('b1', 0, 0, 0, '#3D7BF4'), bar('b2', 0, 0, 90, '#7C5CFF')] } },
        { k: 'm3build', ph: 'repte', q: '<b>Una X.</b> Ara les barres s\'han de creuar en diagonal: una a <b>45°</b> i l\'altra a <b>−45°</b>.|<b>Una X.</b> Ahora las barras se tienen que cruzar en diagonal: una a <b>45°</b> y la otra a <b>−45°</b>.',
          start: { parts: [bar('b1', 0, 25, 0, '#F7C531'), bar('b2', 0, -25, 0, '#EC5FA8')] }, palette: ['box'], target: { parts: [bar('g1', 0, 0, 45), bar('g2', 0, 0, -45)] },
          checks: [{ k: 'match', target: { parts: [bar('g1', 0, 0, 45), bar('g2', 0, 0, -45)] }, th: 0.9, t: 'La X és com el fantasma|La X es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Una barra: z = 45 a Gir (3 tocs de +). L\'altra: z = −45 (3 tocs de −). Totes dues a x = 0, y = 0.|Una barra: z = 45 en Giro (3 toques de +). La otra: z = −45 (3 toques de −). Las dos en x = 0, y = 0.', sol: { parts: [bar('b1', 0, 0, 45, '#F7C531'), bar('b2', 0, 0, -45, '#EC5FA8')] } },
        { k: 'm3build', ph: 'repte', q: "<b>La rampa.</b> La rampa ha de <b>pujar</b> fins a la plataforma grisa. Gira la falca i enganxa-la a la plataforma.|<b>La rampa.</b> La rampa tiene que <b>subir</b> hasta la plataforma gris. Gira la cuña y pégala a la plataforma.",
          start: { parts: RAMPA0 }, palette: ['wedge'], target: { parts: RAMPA1 },
          checks: [{ k: 'match', target: { parts: RAMPA1 }, th: 0.92, t: 'La rampa és com el fantasma|La rampa es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Gira la falca 180° en z (mitja volta): la part alta quedarà cap a la plataforma. Després, x = −5 i y = 0.|Gira la cuña 180° en z (media vuelta): la parte alta quedará hacia la plataforma. Después, x = −5 e y = 0.', sol: { parts: RAMPA1 } },
        { k: 'm3build', ph: 'repte', q: "<b>Les rodes.</b> Tomba els dos cilindres <b>90° en y</b> i posa'ls als costats del carro, a x = −18 i x = 18.|<b>Las ruedas.</b> Tumba los dos cilindros <b>90° en y</b> y ponlos a los lados del carro, en x = −18 y x = 18.",
          start: { parts: CARRO0 }, palette: ['cyl'], target: { parts: CARRO1 },
          checks: [{ k: 'part', t: 'cyl', s: [6, 16, 16], tol: 0.8, txt: 'Hi ha una roda tombada de costat|Hay una rueda tumbada de lado' }, { k: 'match', target: { parts: CARRO1 }, th: 0.92, t: 'El carro és com el fantasma|El carro es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Toca un cilindre. A Gir, posa 90 a la y: queda ajagut. Després, a Posició, x = 18, y = 0 i z = 0. L\'altre, igual però a x = −18.|Toca un cilindro. En Giro, pon 90 en la y: queda tumbado. Después, en Posición, x = 18, y = 0 y z = 0. El otro, igual pero en x = −18.', sol: { parts: CARRO1 } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>El rellotge de la plaça.</b> Gira l'agulla vermella perquè marqui <b>les 3</b> i posa-la a sobre de la cara del rellotge.|<b>El reloj de la plaza.</b> Gira la aguja roja para que marque <b>las 3</b> y ponla encima de la cara del reloj.",
          start: { parts: RELL0 }, palette: ['box'], view: 'top', target: { parts: RELL1 },
          checks: [{ k: 'part', t: 'box', s: [16, 4, 2], at: [8, 0, 5], tol: 0.6, txt: "L'agulla de les hores apunta a les 3|La aguja de las horas apunta a las 3" }, { k: 'match', target: { parts: RELL1 }, th: 0.97, t: 'El rellotge és com el fantasma|El reloj es como el fantasma' }, { k: 'one' }],
          hint: "Gira l'agulla 90° en z. Després, a Posició: x = 8, y = 0 i z = 4 (just a sobre de la cara).|Gira la aguja 90° en z. Después, en Posición: x = 8, y = 0 y z = 4 (justo encima de la cara).", sol: { parts: RELL1 } },
        { k: 'm3free', ph: 'crea', q: '<b>La rosa dels vents.</b> Fes una estrella amb almenys <b>3 barres</b> creuades al mateix centre, cada una girada un angle diferent (0°, 45°, 90°…).|<b>La rosa de los vientos.</b> Haz una estrella con al menos <b>3 barras</b> cruzadas en el mismo centro, cada una girada un ángulo distinto (0°, 45°, 90°…).',
          name: 'La meva rosa dels vents|Mi rosa de los vientos', palette: ['box', 'cyl', 'sph', 'cone', 'pyr', 'star'],
          crit: ['Almenys 3 barres que es creuen al mateix centre|Al menos 3 barras que se cruzan en el mismo centro', 'Cada barra té un gir diferent|Cada barra tiene un giro distinto', 'Tot és una sola peça i toca la placa|Todo es una sola pieza y toca la placa'],
          checks: [{ k: 'count', t: 'box', min: 3, txt: 'Almenys 3 barres (caixes)|Al menos 3 barras (cajas)' }, { k: 'one' }, { k: 'onplate' }],
          sol: { parts: [bar('a1', 0, 0, 0, '#E8453C', 70), bar('a2', 0, 0, 90, '#E8453C', 70), bar('a3', 0, 0, 45, '#3D7BF4', 46), bar('a4', 0, 0, -45, '#3D7BF4', 46), B('a5', 'cyl', [14, 14, 14], 0, 0, 0, '#F7C531')] } },
        { k: 'quiz', ph: 'tanca', q: 'Quants tocs de 15° calen per girar una peça <b>90°</b>?|¿Cuántos toques de 15° hacen falta para girar una pieza <b>90°</b>?', opts: ['6|6', '9|9', '4|4'], a: 0, ex: '6 × 15° = 90°.|6 × 15° = 90°.' },
        { k: 'quiz', ph: 'tanca', q: 'Vols posar un cilindre dret <b>ajagut</b>, com un tronc. Què fas?|Quieres poner un cilindro de pie <b>tumbado</b>, como un tronco. ¿Qué haces?', opts: ['El giro 90° en x o en y|Lo giro 90° en x o en y', 'El giro 90° en z|Lo giro 90° en z', "Li canvio l'alçada|Le cambio la altura"], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 3 · Més gran, més petit ---------- */
    { id: 'm3-3', t: 'Més gran, més petit|Más grande, más pequeño', min: 45, badge: 'm33_esc',
      learn: ["Escalar és canviar les mides d'una peça: si en canvies una, s'estira; si les canvies totes alhora (Proporcional), creix sense deformar-se.|Escalar es cambiar las medidas de una pieza: si cambias una, se estira; si las cambias todas a la vez (Proporcional), crece sin deformarse.",
        'El doble (2:1) vol dir multiplicar cada mida per 2, i la meitat (1:2), dividir-la entre 2.|El doble (2:1) quiere decir multiplicar cada medida por 2, y la mitad (1:2), dividirla entre 2.',
        "Quan escales una figura de diverses peces, també es multipliquen les alçades i les distàncies on va cada peça.|Cuando escalas una figura de varias piezas, también se multiplican las alturas y las distancias donde va cada pieza."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Una barra està girada <b>45°</b>. Quants graus més l\'has de girar perquè quedi a <b>90°</b>?|Una barra está girada <b>45°</b>. ¿Cuántos grados más tienes que girarla para que quede a <b>90°</b>?', opts: ['45°|45°', '90°|90°', '135°|135°'], a: 0, ex: '45° + 45° = 90°.|45° + 45° = 90°.' },
        { k: 'quiz', ph: 'recorda', q: 'Quin és <b>el doble</b> de 15 mm? I <b>la meitat</b> de 40 mm?|¿Cuál es <b>el doble</b> de 15 mm? ¿Y <b>la mitad</b> de 40 mm?', opts: ['30 mm i 20 mm|30 mm y 20 mm', '17 mm i 38 mm|17 mm y 38 mm', '30 mm i 80 mm|30 mm y 80 mm'], a: 0,
          ex: 'El doble és multiplicar per 2 (15 × 2 = 30) i la meitat és dividir entre 2 (40 ÷ 2 = 20).|El doble es multiplicar por 2 (15 × 2 = 30) y la mitad es dividir entre 2 (40 ÷ 2 = 20).' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'Al doble i a la meitat|Al doble y a la mitad',
          t: "L'escola ha vist el primer esbós del robot i li agrada molt! Però ara demanen dues coses: un robot <b>el doble de gran</b> per a l'entrada i robotets de <b>la meitat</b> per a cada classe. La Nuvi avisa: «Si m'envieu les peces deformades, us faré robots aixafats!» Avui aprendrem a <b>escalar</b> sense deformar.|¡La escuela ha visto el primer boceto del robot y le gusta mucho! Pero ahora piden dos cosas: un robot <b>el doble de grande</b> para la entrada y robotitos de <b>la mitad</b> para cada clase. Nuvi avisa: «¡Si me enviáis las piezas deformadas, os haré robots aplastados!» Hoy aprenderemos a <b>escalar</b> sin deformar." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Una sola mida|Una sola medida', t: 'Estirar una peça|Estirar una pieza', media: { k: 'model', model: { parts: [B('a', 'box', [20, 20, 20], -40, 0, 0, '#7C5CFF'), B('b', 'box', [50, 20, 20], 0, 0, 0, '#3D7BF4'), B('c', 'box', [20, 20, 40], 40, 0, 0, '#2FB36D')] } },
            x: "A la pestanya <b>Mida</b> hi ha tres números: l'amplada (<b style=\"color:#E5484D\">x</b>), la fondària (<b style=\"color:#22A06B\">y</b>) i l'alçada (<b style=\"color:#2F5BEA\">z</b>). Si en canvies <b>només una</b>, la peça s'estira en aquella direcció: el cub lila de 20 mm amb x = 50 es converteix en la barra blava, i amb z = 40, en la torre verda.|En la pestaña <b>Medida</b> hay tres números: la anchura (<b style=\"color:#E5484D\">x</b>), el fondo (<b style=\"color:#22A06B\">y</b>) y la altura (<b style=\"color:#2F5BEA\">z</b>). Si cambias <b>solo una</b>, la pieza se estira en esa dirección: el cubo lila de 20 mm con x = 50 se convierte en la barra azul, y con z = 40, en la torre verde.",
            tip: "Quan canvies l'alçada, la base no es mou: la peça creix cap amunt.|Cuando cambias la altura, la base no se mueve: la pieza crece hacia arriba." },
          { k: 'Proporcional|Proporcional', t: 'El cadenat: totes les mides alhora|El candado: todas las medidas a la vez', anim: 'm33esc',
            x: "Si actives <b>Proporcional</b> (el cadenat), quan canvies una mida <b>les altres canvien igual</b>. La peça es fa més gran o més petita però <b>no es deforma</b>: un cub continua sent un cub, i una esfera, una esfera.|Si activas <b>Proporcional</b> (el candado), cuando cambias una medida <b>las otras cambian igual</b>. La pieza se hace más grande o más pequeña pero <b>no se deforma</b>: un cubo sigue siendo un cubo, y una esfera, una esfera.",
            bad: "Per fer el cub el doble, només li canvio l'alçada a 40.|Para hacer el cubo el doble, solo le cambio la altura a 40.", good: 'Per fer-lo el doble, multiplico per 2 totes les mides: 40 × 40 × 40.|Para hacerlo el doble, multiplico por 2 todas las medidas: 40 × 40 × 40.' },
          { k: 'Doble i meitat|Doble y mitad', t: '2:1 i 1:2|2:1 y 1:2', media: { k: 'model', model: { parts: [B('a', 'box', [10, 10, 10], -35, 0, 0, '#F7C531'), B('b', 'box', [20, 20, 20], -10, 0, 0, '#FF8A3D'), B('c', 'box', [40, 40, 40], 30, 0, 0, '#E8453C')] } },
            x: "<b>El doble</b> s'escriu <b>2:1</b>: cada mida es multiplica per 2 (20 mm → 40 mm). <b>La meitat</b> s'escriu <b>1:2</b>: cada mida es divideix entre 2 (20 mm → 10 mm). Aquí tens el cub taronja de 20 mm, la seva meitat (groc) i el seu doble (vermell).|<b>El doble</b> se escribe <b>2:1</b>: cada medida se multiplica por 2 (20 mm → 40 mm). <b>La mitad</b> se escribe <b>1:2</b>: cada medida se divide entre 2 (20 mm → 10 mm). Aquí tienes el cubo naranja de 20 mm, su mitad (amarillo) y su doble (rojo).",
            tip: "Les maquetes de trens o d'edificis també tenen escala: 1:100 vol dir que tot és 100 vegades més petit que de veritat.|Las maquetas de trenes o de edificios también tienen escala: 1:100 quiere decir que todo es 100 veces más pequeño que de verdad." },
          { k: '⭐ Saber més|⭐ Saber más', t: 'El doble ocupa 8 vegades més|El doble ocupa 8 veces más', anim: 'm33dob',
            x: "<b>Només si tens curiositat:</b> si fas un cub el doble d'ample, de fons i d'alt, a dins hi caben <b>8 cubs petits</b> (2 × 2 × 2). Per això una peça al doble gasta 8 vegades més plàstic i la Nuvi tarda molt més a imprimir-la!|<b>Solo si tienes curiosidad:</b> si haces un cubo el doble de ancho, de fondo y de alto, dentro caben <b>8 cubos pequeños</b> (2 × 2 × 2). ¡Por eso una pieza al doble gasta 8 veces más plástico y Nuvi tarda mucho más en imprimirla!" },
          { k: 'Figures de diverses peces|Figuras de varias piezas', t: 'També es dobla on comença cada peça|También se dobla dónde empieza cada pieza', media: { k: 'model', model: { parts: [...ARBRE(-30, 1, 'p'), ...ARBRE(15, 2, 'g')] } },
            x: "Un arbre té un tronc i una copa. Per fer-lo al <b>doble</b>, dobles les mides de cada peça… i també <b>l'alçada on comença la copa</b>: abans començava a z = 10 i ara comença a z = 20. Si no, la copa quedaria enfonsada dins del tronc.|Un árbol tiene un tronco y una copa. Para hacerlo al <b>doble</b>, doblas las medidas de cada pieza… y también <b>la altura donde empieza la copa</b>: antes empezaba en z = 10 y ahora empieza en z = 20. Si no, la copa quedaría hundida dentro del tronco.",
            tip: 'Gira la vista i compara-les: tenen exactament la mateixa forma.|Gira la vista y compáralos: tienen exactamente la misma forma.' }
        ] },
        { k: 'unplug', ph: 'mans', ico: '✏️', title: 'Dibuixa al doble|Dibuja al doble', t: 'Amb la fitxa de les dues quadrícules i un llapis:|Con la ficha de las dos cuadrículas y un lápiz:',
          steps: ['A la quadrícula petita hi ha un robot dibuixat. Compta quants quadrets fa cada part.|En la cuadrícula pequeña hay un robot dibujado. Cuenta cuántos cuadritos mide cada parte.',
            'A la quadrícula gran, dibuixa\'l al doble: cada quadret es converteix en 2 quadrets.|En la cuadrícula grande, dibújalo al doble: cada cuadrito se convierte en 2 cuadritos.',
            'Compara: té la mateixa forma? A quin quadret comença el cap, ara?|Compara: ¿tiene la misma forma? ¿En qué cuadrito empieza la cabeza, ahora?',
            'Repte: dibuixa\'l a la meitat (cada 2 quadrets, 1).|Reto: dibújalo a la mitad (cada 2 cuadritos, 1).'],
          tip: "Si una part et queda més ampla o més estreta del compte, el robot es deforma: compta-ho bé abans de dibuixar.|Si una parte te queda más ancha o más estrecha de la cuenta, el robot se deforma: cuéntalo bien antes de dibujar." },
        { k: 'm3look', ph: 'prova', q: 'Toca la caixa que és <b>el doble</b> de la groga en <b>totes</b> les mides.|Toca la caja que es <b>el doble</b> de la amarilla en <b>todas</b> las medidas.',
          model: { parts: [B('petita', 'box', [20, 10, 10], -45, 0, 0, '#F7C531'), B('x2', 'box', [40, 10, 10], -10, 25, 0, '#3D7BF4'), B('doble', 'box', [40, 20, 20], 30, 0, 0, '#2FB36D'), B('mig', 'box', [30, 15, 15], -5, -25, 0, '#EC5FA8')] }, pick: 'doble',
          no: "Aquesta no. Mira-la de costat: el doble ha de ser 2 vegades més ample, 2 vegades més fondo i 2 vegades més alt.|Esta no. Mírala de lado: el doble tiene que ser 2 veces más ancho, 2 veces más hondo y 2 veces más alto.",
          ex: "La groga fa 20 × 10 × 10 mm; la verda, 40 × 20 × 20 mm: totes les mides × 2. La blava només s'ha estirat en x.|La amarilla mide 20 × 10 × 10 mm; la verde, 40 × 20 × 20 mm: todas las medidas × 2. La azul solo se ha estirado en x." },
        { k: 'm3look', ph: 'investiga', q: "Aquest ninot de neu s'ha fet al doble, però alguna cosa no va bé. Què ha passat?|Este muñeco de nieve se ha hecho al doble, pero algo no va bien. ¿Qué ha pasado?", model: { parts: NINOT_MAL }, view: 'front',
          opts: ["El cap està enfonsat: no s'ha doblat l'alçada on comença|La cabeza está hundida: no se ha doblado la altura donde empieza", 'El cap és massa petit|La cabeza es demasiado pequeña', 'El cos no toca la placa|El cuerpo no toca la placa'], a: 0,
          ex: "El cos ara fa 40 mm, però el cap continua començant a z = 20, com al ninot petit. Al doble, hauria de començar a z = 40.|El cuerpo ahora mide 40 mm, pero la cabeza sigue empezando en z = 20, como en el muñeco pequeño. Al doble, tendría que empezar en z = 40." },
        { k: 'move', ph: 'pausa', title: 'Gegant i formiga|Gigante y hormiga', secs: 30, t: "Fes-te <b>el doble</b> de gran: estira't amunt i obre els braços! Ara <b>la meitat</b>: ajup-te ben petit. Alterna: gegant, formiga, gegant… cada cop més de pressa.|Hazte <b>el doble</b> de grande: ¡estírate hacia arriba y abre los brazos! Ahora <b>la mitad</b>: agáchate muy pequeño. Alterna: gigante, hormiga, gigante… cada vez más deprisa." },
        { k: 'm3build', ph: 'repte', q: '<b>El tauler de la taula.</b> Estira el cub perquè faci <b>60 mm</b> d\'amplada, 20 de fondària i <b>6 d\'alçada</b>.|<b>El tablero de la mesa.</b> Estira el cubo para que mida <b>60 mm</b> de anchura, 20 de fondo y <b>6 de altura</b>.',
          start: { parts: [cub(0, 0, 0, 'a1', '#A0683A')] }, palette: ['box'], target: { parts: [B('g', 'box', [60, 20, 6], 0, 0, 0, '#A0683A')] },
          checks: [{ k: 'part', t: 'box', s: [60, 20, 6], tol: 0.5, txt: 'La peça fa 60 × 20 × 6 mm|La pieza mide 60 × 20 × 6 mm' }, { k: 'match', target: { parts: [B('g', 'box', [60, 20, 6], 0, 0, 0, '#A0683A')] }, th: 0.92, t: 'És al lloc del fantasma|Está en el lugar del fantasma' }, { k: 'onplate' }],
          hint: 'Sense el cadenat: a Mida, escriu 60 a la x i 6 a la z. La y ja fa 20.|Sin el candado: en Medida, escribe 60 en la x y 6 en la z. La y ya mide 20.', sol: { parts: [B('a1', 'box', [60, 20, 6], 0, 0, 0, '#A0683A')] } },
        { k: 'm3build', ph: 'repte', q: '<b>El cub gegant.</b> Fes el cub <b>el doble de gran</b> sense deformar-lo.|<b>El cubo gigante.</b> Haz el cubo <b>el doble de grande</b> sin deformarlo.',
          start: { parts: [cub(0, 0, 0, 'a1', '#E8453C')] }, palette: ['box'], target: { parts: [cub(0, 0, 0, 'g', '#E8453C', 40)] },
          checks: [{ k: 'part', t: 'box', s: [40, 40, 40], tol: 0.5, txt: 'El cub fa 40 × 40 × 40 mm|El cubo mide 40 × 40 × 40 mm' }, { k: 'match', target: { parts: [cub(0, 0, 0, 'g', '#E8453C', 40)] }, th: 0.95, t: 'És al lloc del fantasma|Está en el lugar del fantasma' }, { k: 'onplate' }],
          hint: 'Activa Proporcional (el cadenat) i escriu 40 a qualsevol mida: totes canviaran alhora.|Activa Proporcional (el candado) y escribe 40 en cualquier medida: todas cambiarán a la vez.', sol: { parts: [cub(0, 0, 0, 'a1', '#E8453C', 40)] } },
        { k: 'm3build', ph: 'repte', q: '<b>La bola a la meitat.</b> Fes la bola <b>la meitat</b> de gran i posa-la a dalt de la columna.|<b>La bola a la mitad.</b> Haz la bola <b>la mitad</b> de grande y ponla arriba de la columna.',
          start: { parts: [B('col', 'cyl', [16, 16, 30], 20, 0, 0, '#9AA3B5'), B('a1', 'sph', [40, 40, 40], -35, 0, 0, '#2FB36D')] }, palette: ['sph'],
          target: { parts: [B('col', 'cyl', [16, 16, 30], 20, 0, 0, '#9AA3B5'), B('g', 'sph', [20, 20, 20], 20, 0, 30, '#2FB36D')] },
          checks: [{ k: 'part', t: 'sph', s: [20, 20, 20], tol: 0.5, txt: 'La bola fa 20 mm (la meitat de 40)|La bola mide 20 mm (la mitad de 40)' }, { k: 'match', target: { parts: [B('col', 'cyl', [16, 16, 30], 20, 0, 0, '#9AA3B5'), B('g', 'sph', [20, 20, 20], 20, 0, 30, '#2FB36D')] }, th: 0.92, t: 'La bola és a dalt de la columna|La bola está arriba de la columna' }, { k: 'one' }],
          hint: 'Amb Proporcional, escriu 20 a la mida. Després, a Posició: x = 20, y = 0 i z = 30, on s\'acaba la columna.|Con Proporcional, escribe 20 en la medida. Después, en Posición: x = 20, y = 0 y z = 30, donde acaba la columna.',
          sol: { parts: [B('col', 'cyl', [16, 16, 30], 20, 0, 0, '#9AA3B5'), B('a1', 'sph', [20, 20, 20], 20, 0, 30, '#2FB36D')] } },
        { k: 'm3build', ph: 'repte', q: "<b>L'arbre al doble.</b> Al fantasma de la dreta, fes l'arbre petit a escala <b>2:1</b>. Compte amb on comença la copa!|<b>El árbol al doble.</b> En el fantasma de la derecha, haz el árbol pequeño a escala <b>2:1</b>. ¡Cuidado con dónde empieza la copa!",
          start: { parts: ARBRE(-35, 1, 'p') }, palette: ['cyl', 'cone'], target: { parts: [...ARBRE(-35, 1, 'p'), ...ARBRE(20, 2, 'g')] },
          checks: [{ k: 'part', t: 'cyl', s: [12, 12, 20], at: [20, 0, 10], tol: 0.6, txt: 'Tronc de 12 × 12 × 20 mm a x = 20|Tronco de 12 × 12 × 20 mm en x = 20' }, { k: 'part', t: 'cone', s: [32, 32, 32], at: [20, 0, 36], tol: 0.6, txt: 'Copa de 32 mm que comença a z = 20|Copa de 32 mm que empieza en z = 20' }, { k: 'match', target: { parts: [...ARBRE(-35, 1, 'p'), ...ARBRE(20, 2, 'g')] }, th: 0.9, t: 'Els dos arbres són com els fantasmes|Los dos árboles son como los fantasmas' }, { k: 'onplate' }],
          hint: 'Tronc: 6 × 6 × 10 → 12 × 12 × 20, a x = 20. Copa: 16 → 32 en totes les mides, a x = 20 i amb la base a z = 20 (on s\'acaba el tronc).|Tronco: 6 × 6 × 10 → 12 × 12 × 20, en x = 20. Copa: 16 → 32 en todas las medidas, en x = 20 y con la base en z = 20 (donde acaba el tronco).',
          sol: { parts: [...ARBRE(-35, 1, 'p'), ...ARBRE(20, 2, 'g')] } },
        { k: 'm3fix', ph: 'repte', extra: true, q: "<b>La porta gegant.</b> La porta ha de fer <b>la meitat</b> d'alt que la casa (15 mm) i 12 mm d'ample. Arregla-la!|<b>La puerta gigante.</b> La puerta tiene que medir <b>la mitad</b> de alto que la casa (15 mm) y 12 mm de ancho. ¡Arréglala!",
          start: { parts: PORTA0 }, fix: ['porta'], palette: ['box'],
          checks: [{ k: 'part', t: 'box', s: [12, 2, 15], tol: 0.5, txt: 'La porta fa 12 × 2 × 15 mm|La puerta mide 12 × 2 × 15 mm' }, { k: 'match', target: { parts: PORTA1 }, th: 0.95, t: 'La porta és a terra, al mig de la façana|La puerta está en el suelo, en el medio de la fachada' }, { k: 'one' }],
          hint: 'Sense el cadenat: a Mida, x = 12 i z = 15. La base no es mou, així que continuarà tocant a terra.|Sin el candado: en Medida, x = 12 y z = 15. La base no se mueve, así que seguirá tocando el suelo.', sol: { parts: PORTA1 } },
        { k: 'm3free', ph: 'crea', q: "<b>Robot i robot gegant.</b> Fes un robot senzill (cos i cap, com a mínim) i, al costat, el mateix robot <b>al doble</b>: totes les mides i alçades × 2.|<b>Robot y robot gigante.</b> Haz un robot sencillo (cuerpo y cabeza, como mínimo) y, al lado, el mismo robot <b>al doble</b>: todas las medidas y alturas × 2.",
          name: 'Robot i robot gegant|Robot y robot gigante', palette: ['box', 'cyl', 'sph', 'cone', 'pyr'],
          crit: ['Un robot petit amb almenys cos i cap|Un robot pequeño con al menos cuerpo y cabeza', 'Al costat, el mateix robot al doble (mides i alçades × 2)|Al lado, el mismo robot al doble (medidas y alturas × 2)', 'Tots dos toquen la placa i no tenen peces soltes|Los dos tocan la placa y no tienen piezas sueltas'],
          checks: [{ k: 'count', min: 4 }, { k: 'onplate' }],
          sol: { parts: [B('a1', 'box', [16, 10, 16], -30, 0, 0, '#7C5CFF'), B('a2', 'box', [12, 10, 10], -30, 0, 16, '#5BC0EB'), B('a3', 'box', [32, 20, 32], 20, 0, 0, '#7C5CFF'), B('a4', 'box', [24, 20, 20], 20, 0, 32, '#5BC0EB')] } },
        { k: 'quiz', ph: 'tanca', q: 'Una caixa fa <b>10 × 20 × 30 mm</b>. Com és <b>al doble</b>?|Una caja mide <b>10 × 20 × 30 mm</b>. ¿Cómo es <b>al doble</b>?', opts: ['20 × 40 × 60 mm|20 × 40 × 60 mm', '20 × 20 × 30 mm|20 × 20 × 30 mm', '12 × 22 × 32 mm|12 × 22 × 32 mm'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Per a què serveix el botó <b>Proporcional</b>?|¿Para qué sirve el botón <b>Proporcional</b>?', opts: ['Perquè totes les mides canviïn alhora i la peça no es deformi|Para que todas las medidas cambien a la vez y la pieza no se deforme', 'Per girar la peça|Para girar la pieza', 'Per portar-la al centre|Para llevarla al centro'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 4 · Projecte: el robot de peces ---------- */
    { id: 'm3-4', t: 'Projecte: el robot de peces|Proyecto: el robot de piezas', min: 45, proj: true, badge: 'm34_rob',
      learn: ['Una fitxa tècnica diu les mides, la posició i el gir de cada peça: seguir-la fa que el model surti com s\'havia pensat.|Una ficha técnica dice las medidas, la posición y el giro de cada pieza: seguirla hace que el modelo salga como se había pensado.',
        "Un model gran es construeix per parts i de baix a dalt: cada peça comença on s'acaba la de sota.|Un modelo grande se construye por partes y de abajo arriba: cada pieza empieza donde acaba la de debajo.",
        'Moure, girar i escalar es combinen: les rodes i els braços es tomben 90° i el cap es fa a la mida justa.|Mover, girar y escalar se combinan: las ruedas y los brazos se tumban 90° y la cabeza se hace a la medida justa.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Fas un cub de 20 mm <b>al doble</b> amb Proporcional. Quines mides té ara?|Haces un cubo de 20 mm <b>al doble</b> con Proporcional. ¿Qué medidas tiene ahora?', opts: ['40 × 40 × 40 mm|40 × 40 × 40 mm', '40 × 20 × 20 mm|40 × 20 × 20 mm', '22 × 22 × 22 mm|22 × 22 × 22 mm'], a: 0 },
        { k: 'm3look', ph: 'recorda', q: 'Toca el cilindre girat <b>90° en y</b>. Pista: queda ajagut al llarg de la línia vermella (l\'eix x).|Toca el cilindro girado <b>90° en y</b>. Pista: queda tumbado a lo largo de la línea roja (el eje x).', model: { parts: CILS3 }, pick: 'c2',
          no: 'Aquest no. El girat en y queda estirat d\'esquerra a dreta, com la línia vermella.|Este no. El girado en y queda estirado de izquierda a derecha, como la línea roja.', ex: 'El blau és dret, el verd està girat 90° en y (al llarg de x) i el taronja, 90° en x (al llarg de y).|El azul está de pie, el verde está girado 90° en y (a lo largo de x) y el naranja, 90° en x (a lo largo de y).' },
        { k: 'story', ph: 'missio', who: 'both', scene: 'fab', title: 'La fitxa del robot|La ficha del robot',
          t: "Avui és el gran dia! A la taula del taller hi ha la <b>fitxa tècnica</b> del robot que ens ha encarregat l'escola: quines peces té, quines mides fan i on va cada una. La Nuvi ja s'ha escalfat i espera el model. Farem servir tot el que hem après: <b>moure, girar i escalar</b>. Som-hi!|¡Hoy es el gran día! En la mesa del taller está la <b>ficha técnica</b> del robot que nos ha encargado la escuela: qué piezas tiene, qué medidas tienen y dónde va cada una. Nuvi ya se ha calentado y espera el modelo. Usaremos todo lo que hemos aprendido: <b>mover, girar y escalar</b>. ¡Vamos!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'La fitxa tècnica|La ficha técnica', t: 'Mides, posició i gir de cada peça|Medidas, posición y giro de cada pieza', anim: 'm34fit',
            x: "Una <b>fitxa tècnica</b> és com una recepta: diu quines peces hi ha, quines <b>mides</b> fan (en mm), on van (<b>posició</b>, amb la z de la base) i si estan <b>girades</b>. Els enginyers la fan servir perquè qualsevol persona pugui construir exactament el mateix objecte.|Una <b>ficha técnica</b> es como una receta: dice qué piezas hay, qué <b>medidas</b> tienen (en mm), dónde van (<b>posición</b>, con la z de la base) y si están <b>giradas</b>. Los ingenieros la usan para que cualquier persona pueda construir exactamente el mismo objeto." },
          { k: 'El robot|El robot', t: 'El robot de l\'escola, peça a peça|El robot de la escuela, pieza a pieza', media: { k: 'model', model: { parts: ROBOT } },
            x: "Aquest és el robot que farem: dues <b>rodes</b> tombades, un <b>cos</b>, dos <b>braços</b> estirats, un <b>cap</b> amb dos ulls i una <b>antena</b> amb una bola. En total, 10 peces. Gira'l per veure'l de tots els costats.|Este es el robot que haremos: dos <b>ruedas</b> tumbadas, un <b>cuerpo</b>, dos <b>brazos</b> estirados, una <b>cabeza</b> con dos ojos y una <b>antena</b> con una bola. En total, 10 piezas. Gíralo para verlo desde todos los lados.",
            tip: 'Les rodes i els braços són peces dretes girades 90° en y.|Las ruedas y los brazos son piezas de pie giradas 90° en y.' },
          { k: 'Pla de treball|Plan de trabajo', t: 'Per parts i de baix a dalt|Por partes y de abajo arriba', anim: 'm34pla',
            x: "Un model gran es fa <b>per parts</b> i <b>de baix a dalt</b>: primer les rodes (toquen la placa), després el cos, el cap a sobre, els braços als costats i, al final, els detalls. Així sempre saps a quina alçada va la peça següent.|Un modelo grande se hace <b>por partes</b> y <b>de abajo arriba</b>: primero las ruedas (tocan la placa), después el cuerpo, la cabeza encima, los brazos a los lados y, al final, los detalles. Así siempre sabes a qué altura va la pieza siguiente." },
          { k: 'Les alçades|Las alturas', t: "Cada peça comença on s'acaba la de sota|Cada pieza empieza donde acaba la de debajo", media: { k: 'model', model: { parts: ROBOT }, view: 'front' },
            x: "El cos comença a <b>z = 4</b> (queda 4 mm per sobre del terra, entre les rodes) i fa 24 mm d'alt: s'acaba a 4 + 24 = <b>28</b>. Per tant, el cap comença a <b>z = 28</b>, fa 14 mm i s'acaba a 42, on comença l'antena. <b>Sumar alçades</b> és la clau perquè res floti ni s'enfonsi.|El cuerpo empieza en <b>z = 4</b> (queda 4 mm por encima del suelo, entre las ruedas) y mide 24 mm de alto: acaba en 4 + 24 = <b>28</b>. Por tanto, la cabeza empieza en <b>z = 28</b>, mide 14 mm y acaba en 42, donde empieza la antena. <b>Sumar alturas</b> es la clave para que nada flote ni se hunda." },
          { k: 'Revisa|Revisa', t: 'Comprova cada part abans de seguir|Comprueba cada parte antes de seguir', media: { k: 'model', model: { parts: ROBOT }, view: 'right' },
            x: "Quan acabis una part, compara-la amb la fitxa: mides, posició i gir. Les <b>comprovacions</b> de sota la vista es posen en verd quan una part està bé. Mira el robot des de davant i des del costat: si alguna peça flota o s'enfonsa, es veu de seguida.|Cuando acabes una parte, compárala con la ficha: medidas, posición y giro. Las <b>comprobaciones</b> de debajo de la vista se ponen en verde cuando una parte está bien. Mira el robot desde delante y desde el lado: si alguna pieza flota o se hunde, se ve enseguida.",
            bad: 'Faig totes les peces de cop i al final miro si encaixen.|Hago todas las piezas de golpe y al final miro si encajan.', good: 'Faig una part, la comprovo i després passo a la següent.|Hago una parte, la compruebo y después paso a la siguiente.' }
        ] },
        { k: 'unplug', ph: 'mans', ico: '📝', title: 'Llegeix la fitxa|Lee la ficha', t: 'Amb la fitxa tècnica del robot (imprimible) i un llapis:|Con la ficha técnica del robot (imprimible) y un lápiz:',
          steps: ['Llegeix la taula de peces i encercla les que estan girades.|Lee la tabla de piezas y rodea las que están giradas.',
            'Calcula on comença cada peça (z): suma les alçades de baix a dalt i escriu-ho a la columna buida.|Calcula dónde empieza cada pieza (z): suma las alturas de abajo arriba y escríbelo en la columna vacía.',
            'Dibuixa el robot vist de davant a la quadrícula, amb les mides.|Dibuja el robot visto de delante en la cuadrícula, con las medidas.',
            'Compara amb el company: us surten les mateixes alçades?|Compara con el compañero: ¿os salen las mismas alturas?'],
          tip: "Si una alçada no us quadra, mireu quina peça hi ha a sota i on s'acaba.|Si una altura no os cuadra, mirad qué pieza hay debajo y dónde acaba." },
        { k: 'm3look', ph: 'prova', q: 'El cos comença a <b>z = 4</b> i fa <b>24 mm</b> d\'alt. A quina z ha de començar el cap?|El cuerpo empieza en <b>z = 4</b> y mide <b>24 mm</b> de alto. ¿En qué z tiene que empezar la cabeza?', model: { parts: RB1 }, view: 'front',
          opts: ['z = 28|z = 28', 'z = 24|z = 24', 'z = 4|z = 4'], a: 0, ex: '4 + 24 = 28: el cap comença just on s\'acaba el cos.|4 + 24 = 28: la cabeza empieza justo donde acaba el cuerpo.' },
        { k: 'm3fix', ph: 'investiga', q: "Ui! Al robot li han quedat les <b>rodes dretes</b>. Arregla-les perquè quedin de costat (90° en y).|¡Uy! Al robot se le han quedado las <b>ruedas de pie</b>. Arréglalas para que queden de lado (90° en y).",
          start: { parts: [...RODES_DRETES, COS] }, fix: ['r1', 'r2'], palette: ['cyl'],
          checks: [{ k: 'part', t: 'cyl', s: [6, 16, 16], at: [-16, 0, 8], tol: 0.6, txt: 'Roda esquerra tombada a x = −16|Rueda izquierda tumbada en x = −16' }, { k: 'part', t: 'cyl', s: [6, 16, 16], at: [16, 0, 8], tol: 0.6, txt: 'Roda dreta tombada a x = 16|Rueda derecha tumbada en x = 16' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Toca una roda i, a Gir, posa 90 a la y. Mira a Posició que continuï a x = −16 (o 16), y = 0, z = 0.|Toca una rueda y, en Giro, pon 90 en la y. Mira en Posición que siga en x = −16 (o 16), y = 0, z = 0.', sol: { parts: RB1 } },
        { k: 'move', ph: 'pausa', title: 'El ball del robot|El baile del robot', secs: 30, t: "Mou-te com un robot: braços estirats a <b>90°</b>, gira el cap <b>45°</b> a la dreta i a l'esquerra, fes voltar les mans com si fossin rodes… i atura't en sec!|Muévete como un robot: brazos estirados a <b>90°</b>, gira la cabeza <b>45°</b> a la derecha y a la izquierda, haz girar las manos como si fueran ruedas… ¡y párate en seco!" },
        { k: 'm3build', ph: 'repte', q: '<b>Pas 1: el cap.</b> Fes el cap de <b>20 × 16 × 14 mm</b> i posa\'l a sobre del cos (base a z = 28).|<b>Paso 1: la cabeza.</b> Haz la cabeza de <b>20 × 16 × 14 mm</b> y ponla encima del cuerpo (base en z = 28).',
          start: { parts: [...RB1, B('cap', 'box', [20, 20, 20], -45, 30, 0, '#5BC0EB')] }, palette: ['box'], target: { parts: [...RB1, CAPR] },
          checks: [{ k: 'part', t: 'box', s: [20, 16, 14], at: [0, 0, 35], tol: 0.6, txt: 'Cap de 20 × 16 × 14 mm a sobre del cos|Cabeza de 20 × 16 × 14 mm encima del cuerpo' }, { k: 'match', target: { parts: [...RB1, CAPR] }, th: 0.94, t: 'El robot és com el fantasma|El robot es como el fantasma' }, { k: 'one' }],
          hint: 'A Mida: x = 20, y = 16 i z = 14 (sense el cadenat). A Posició: x = 0, y = 0 i z = 28.|En Medida: x = 20, y = 16 y z = 14 (sin el candado). En Posición: x = 0, y = 0 y z = 28.', sol: { parts: [...RB1, CAPR] } },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 2: els ulls.</b> Fes les boles de <b>6 mm</b> i posa-les a la cara: x = −5 i x = 5, y = −8, base a z = 32.|<b>Paso 2: los ojos.</b> Haz las bolas de <b>6 mm</b> y ponlas en la cara: x = −5 y x = 5, y = −8, base en z = 32.",
          start: { parts: [...RB1, CAPR, B('u1', 'sph', [20, 20, 20], -45, -30, 0, '#2A2F3A'), B('u2', 'sph', [20, 20, 20], 45, -30, 0, '#2A2F3A')] }, palette: ['sph'], target: { parts: RB2 },
          checks: [{ k: 'part', t: 'sph', s: [6, 6, 6], at: [-5, -8, 35], tol: 0.6, txt: 'Ull a (−5, −8, 32)|Ojo en (−5, −8, 32)' }, { k: 'part', t: 'sph', s: [6, 6, 6], at: [5, -8, 35], tol: 0.6, txt: 'Ull a (5, −8, 32)|Ojo en (5, −8, 32)' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'Amb Proporcional, escriu 6 a la mida de cada bola. Després, a Posició: x = −5 (o 5), y = −8 i z = 32.|Con Proporcional, escribe 6 en la medida de cada bola. Después, en Posición: x = −5 (o 5), y = −8 y z = 32.', sol: { parts: RB2 } },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 3: els braços.</b> Tomba cada braç <b>90° en y</b> i enganxa'l a un costat del cos: x = −23 i x = 23, base a z = 20.|<b>Paso 3: los brazos.</b> Tumba cada brazo <b>90° en y</b> y pégalo a un lado del cuerpo: x = −23 y x = 23, base en z = 20.",
          start: { parts: [...RB2, brac('b1', -45, false), brac('b2', 45, false)] }, palette: ['box'], target: { parts: RB3 },
          checks: [{ k: 'part', t: 'box', s: [20, 6, 6], at: [-23, 0, 23], tol: 0.6, txt: 'Braç esquerre estirat a x = −23|Brazo izquierdo estirado en x = −23' }, { k: 'part', t: 'box', s: [20, 6, 6], at: [23, 0, 23], tol: 0.6, txt: 'Braç dret estirat a x = 23|Brazo derecho estirado en x = 23' }, { k: 'sym', ax: 'x', th: 0.95 }, { k: 'one' }],
          hint: 'Toca un braç: a Gir, y = 90. A Posició: x = −23, y = 0 i z = 20. L\'altre, igual però a x = 23.|Toca un brazo: en Giro, y = 90. En Posición: x = −23, y = 0 y z = 20. El otro, igual pero en x = 23.', sol: { parts: RB3 } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>Pas 4: l'antena.</b> Un cilindre de <b>2 × 2 × 8 mm</b> a sobre del cap i una bola de <b>6 mm</b> a la punta.|<b>Paso 4: la antena.</b> Un cilindro de <b>2 × 2 × 8 mm</b> encima de la cabeza y una bola de <b>6 mm</b> en la punta.",
          start: { parts: [...RB3, B('antena', 'cyl', [20, 20, 20], -45, 35, 0, '#9AA3B5'), B('bola', 'sph', [20, 20, 20], 45, 35, 0, '#E8453C')] }, palette: ['cyl', 'sph'], target: { parts: ROBOT },
          checks: [{ k: 'part', t: 'cyl', s: [2, 2, 8], at: [0, 0, 46], tol: 0.6, txt: 'Antena de 2 × 2 × 8 mm a sobre del cap|Antena de 2 × 2 × 8 mm encima de la cabeza' }, { k: 'part', t: 'sph', s: [6, 6, 6], at: [0, 0, 53], tol: 0.6, txt: 'Bola de 6 mm a la punta (z = 50)|Bola de 6 mm en la punta (z = 50)' }, { k: 'one' }, { k: 'onplate' }],
          hint: 'El cap s\'acaba a z = 42: l\'antena comença a z = 42 i s\'acaba a 50. La bola comença a z = 50. Totes dues a x = 0, y = 0.|La cabeza acaba en z = 42: la antena empieza en z = 42 y acaba en 50. La bola empieza en z = 50. Las dos en x = 0, y = 0.', sol: { parts: ROBOT } },
        { k: 'm3free', ph: 'crea', q: "<b>El teu robot.</b> Ara el robot és teu: canvia'n els colors, gira un braç 45° per saludar, afegeix-hi un accessori (un barret, una motxilla…). Que continuï d'una sola peça i sobre la placa.|<b>Tu robot.</b> Ahora el robot es tuyo: cambia sus colores, gira un brazo 45° para saludar, añádele un accesorio (un sombrero, una mochila…). Que siga siendo una sola pieza y sobre la placa.",
          name: 'El meu robot de peces|Mi robot de piezas', start: { parts: ROBOT }, palette: ['box', 'cyl', 'sph', 'cone', 'pyr', 'wedge', 'torus', 'star', 'heart'],
          crit: ['Té totes les peces de la fitxa: rodes, cos, braços, cap, ulls i antena|Tiene todas las piezas de la ficha: ruedas, cuerpo, brazos, cabeza, ojos y antena', "Hi has afegit almenys un detall teu (un accessori, un braç girat…)|Le has añadido al menos un detalle tuyo (un accesorio, un brazo girado…)", 'És una sola peça i toca la placa|Es una sola pieza y toca la placa'],
          checks: [{ k: 'count', min: 11, txt: 'Almenys 11 peces (les 10 de la fitxa i una de teva)|Al menos 11 piezas (las 10 de la ficha y una tuya)' }, { k: 'colors', min: 3 }, { k: 'one' }, { k: 'onplate' }],
          sol: { parts: [...ROBOT, B('motxilla', 'box', [16, 6, 16], 0, 12, 8, '#2FB36D')] } },
        { k: 'quiz', ph: 'tanca', q: 'Quin és el millor ordre per construir un model gran?|¿Cuál es el mejor orden para construir un modelo grande?', opts: ['De baix a dalt, part per part|De abajo arriba, parte por parte', 'Primer els detalls petits|Primero los detalles pequeños', 'Totes les peces alhora i després moure-les|Todas las piezas a la vez y después moverlas'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'A la fitxa, una roda diu «gir: 0°, 90°, 0°». Què vol dir?|En la ficha, una rueda dice «giro: 0°, 90°, 0°». ¿Qué quiere decir?', opts: ['Que està girada 90° en y|Que está girada 90° en y', 'Que està girada 90° en x|Que está girada 90° en x', 'Que no està girada|Que no está girada'], a: 0,
          ex: "Els tres números van en ordre: x, y, z. El 90 és al mig: gir en y.|Los tres números van en orden: x, y, z. El 90 está en el medio: giro en y." },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] };
})();

/* ── unitat 4 ── */
/* Tech 3D · Nivell 1 · unitat 4 «Construir» (m4-1 … m4-4)
   Contingut propi de Numi (format: scripts/TECH-3D.md). Fil narratiu: el Taller de Bit i la Nuvi, la impressora 3D, fan les
   peces de la maqueta del «Barri del Futur» que la Mireia, l'arquitecta del barri, prepara per a l'exposició del centre cívic:
   el pont i els mobles (m4-1, alinear i recolzar), la tanca, el porxo i els fanals (m4-2, duplicar amb un pas), la papallona,
   la cara del robot-guia i el bus elèctric (m4-3, simetria amb l'eina Mirall) i la casa del futur (m4-4, projecte).
   Eines de l'editor (tech-model.js): Alinea (una peça: al centre de la placa, a terra o a sobre de la de sota; diverses: vores i
   centre en x, y i z, respecte de la caixa de tota la selecció), Duplica (la còpia surt al costat, a 5 mm; cada
   Duplica repeteix el salt sencer de la primera còpia des de l'original), Agrupa i Mirall (reflecteix la selecció al voltant del
   seu propi centre, en x o en y, o en fa una còpia emmirallada a l'altre costat de x = 0 o de y = 0).
   Models: peces { id, t, s: [x, y, z] (mm), p: CENTRE, r: graus, c: color, g: grup }, placa de 200 × 200 mm centrada a l'origen. */
Object.assign(TBADGE, {
  m41_ali: { id: 'm41_ali', ico: '📐', n: 'Alineador/a|Alineador/a', d: "Alinees peces a les vores i al centre, i les recolzes l'una sobre l'altra sense que res floti.|Alineas piezas a los bordes y al centro, y las apoyas una sobre otra sin que nada flote." },
  m42_rep: { id: 'm42_rep', ico: '🔁', n: 'Mestre/a dels patrons|Maestro/a de los patrones', d: 'Dupliques peces i grups i els repeteixes amb un pas exacte: tanques, files i graelles.|Duplicas piezas y grupos y los repites con un paso exacto: vallas, filas y cuadrículas.' },
  m43_mir: { id: 'm43_mir', ico: '🦋', n: 'Mirall màgic|Espejo mágico', d: "Fas la meitat d'una figura i la completes amb el mirall: papallones, cares i vehicles simètrics.|Haces la mitad de una figura y la completas con el espejo: mariposas, caras y vehículos simétricos." },
  m44_casa: { id: 'm44_casa', ico: '🏡', n: 'Arquitecte/a del futur|Arquitecto/a del futuro', d: 'Projecte acabat: la casa del futur, amb parts alineades, peces repetides i una façana simètrica.|Proyecto terminado: la casa del futuro, con partes alineadas, piezas repetidas y una fachada simétrica.' }
});
COURSE_UNITS[4] = (() => {
  const P = (id, t, s, p, c, o = {}) => ({ id, t, s, p, r: o.r || [0, 0, 0], c, ...o });
  // B: la z que es dona és la de la BASE (com a la pestanya Posició) i h és l'alçada real de la peça (girada o no)
  const B = (id, t, s, x, y, z0, c, o = {}) => P(id, t, s, [x, y, z0 + (o.h ?? s[2]) / 2], c, o);
  const sense = (L, ...ids) => L.filter(p => !ids.includes(p.id));
  // ---------- m4-1 · alinear i recolzar ----------
  const RIU = B('riu', 'box', [40, 70, 1], 0, 0, 0, '#5BC0EB');
  const PILARS = [B('p1', 'box', [12, 20, 30], -25, 0, 0, '#9AA3B5'), B('p2', 'box', [12, 20, 30], 25, 0, 0, '#9AA3B5')];
  const TAULER = (x = 0, y = 0, z0 = 30) => B('tauler', 'box', [70, 20, 6], x, y, z0, '#A0683A');
  const PONT = [RIU, ...PILARS, TAULER()], PONT0 = [RIU, ...PILARS, TAULER(-20, -50, 0)], PONT_FLOTA = [RIU, ...PILARS, TAULER(0, 0, 33)];
  const BAR = (id, y) => B(id, 'box', [70, 2, 6], 0, y, 36, '#F7C531');
  const BARANES0 = [...PONT, BAR('b1', -3), BAR('b2', 3)], BARANES1 = [...PONT, BAR('b1', -9), BAR('b2', 9)];
  const TAP = B('tap', 'box', [50, 30, 4], 0, 0, 20, '#14A3B8');
  const pota = (id, x, y) => B(id, 'box', [4, 4, 20], x, y, 0, '#F3F3EE');
  const TAULA0 = [TAP, pota('l1', -8, -4), pota('l2', 8, -4), pota('l3', -8, 4), pota('l4', 8, 4)];
  const TAULA1 = [TAP, pota('l1', -23, -13), pota('l2', 23, -13), pota('l3', -23, 13), pota('l4', 23, 13)];
  const FONT_BASE = B('bassa', 'cyl', [56, 56, 6], 0, 0, 0, '#9AA3B5');
  const font = (c, b, k) => [FONT_BASE, B('col', 'cyl', [12, 12, 22], c[0], c[1], 6, '#F3F3EE'), B('bol', 'cyl', [34, 34, 5], b[0], b[1], 28, '#5BC0EB'), B('bola', 'sph', [10, 10, 10], k[0], k[1], 32, '#3D7BF4')];
  const FONT0 = font([5, -4], [-6, 3], [3, 6]), FONT1 = font([0, 0], [0, 0], [0, 0]);
  const ESC1 = [B('s1', 'box', [40, 30, 8], 0, 0, 0, '#F5893A'), B('s2', 'box', [40, 20, 8], 0, 5, 8, '#F7C531'), B('s3', 'box', [40, 10, 8], 0, 10, 16, '#2FB36D')];
  const ESC0 = [ESC1[0], B('s2', 'box', [40, 20, 8], -60, 30, 0, '#F7C531'), B('s3', 'box', [40, 10, 8], 55, -35, 0, '#2FB36D')];
  const BARRES = [B('a', 'box', [40, 8, 8], -10, 24, 0, '#3D7BF4'), B('b', 'box', [60, 8, 8], 0, 8, 0, '#2FB36D'), B('fora', 'box', [30, 8, 8], -9, -8, 0, '#EC5FA8'), B('d', 'box', [24, 8, 8], -18, -24, 0, '#F7C531')];
  const BANC = [B('a1', 'box', [50, 16, 4], 0, 0, 12, '#A0683A'), B('a2', 'box', [4, 16, 12], -21, 0, 0, '#9AA3B5'), B('a3', 'box', [4, 16, 12], 21, 0, 0, '#9AA3B5'), B('a4', 'box', [50, 3, 12], 0, 6.5, 16, '#A0683A')];
  // ---------- m4-2 · duplicar i repetir ----------
  const GRAO = B('base', 'box', [86, 22, 4], 0, 0, 0, '#F3F3EE');
  const colu = (id, x) => B(id, 'cyl', [15, 15, 40], x, 0, 4, '#5BC0EB');
  const FILA0 = [GRAO, colu('c1', -30)], FILA1 = [GRAO, colu('c1', -30), colu('c2', -10), colu('c3', 10), colu('c4', 30)];
  const TRAV = [B('t1', 'box', [90, 2, 4], 0, 0, 6, '#F5893A'), B('t2', 'box', [90, 2, 4], 0, 0, 16, '#F5893A')];
  const pal = (id, x) => B(id, 'box', [6, 6, 24], x, 0, 0, '#A0683A');
  const TANCA0 = [...TRAV, pal('p1', -40)], TANCA1 = [...TRAV, pal('p1', -40), pal('p2', -20), pal('p3', 0), pal('p4', 20), pal('p5', 40)];
  const VORERA = B('vorera', 'box', [110, 16, 3], 0, 0, 0, '#9AA3B5');
  const fanal = (x, k) => [B('f' + k, 'cyl', [4, 4, 36], x, 0, 3, '#1B2B6B'), B('l' + k, 'sph', [10, 10, 10], x, 0, 37, '#F7C531')];
  const FANALS0 = [VORERA, ...fanal(-40, 1)], FANALS1 = [VORERA, ...fanal(-40, 1), ...fanal(0, 2), ...fanal(40, 3)];
  const BASEP = B('base', 'box', [100, 24, 4], 0, 0, 0, '#F3F3EE'), SOSTRE = B('sostre', 'box', [100, 24, 4], 0, 0, 34, '#2FB36D');
  const colp = (id, x) => B(id, 'cyl', [8, 8, 30], x, 0, 4, '#5BC0EB');
  const PORXO0 = [BASEP, colp('c1', -40), colp('c2', -24), colp('c3', 0), colp('c4', 27), colp('c5', 40), SOSTRE];
  const PORXO1 = [BASEP, colp('c1', -40), colp('c2', -20), colp('c3', 0), colp('c4', 20), colp('c5', 40), SOSTRE];
  const MARC = B('marc', 'box', [86, 46, 3], 0, 0, 0, '#F3F3EE');
  const cel = (id, x, y) => B(id, 'box', [18, 18, 2], x, y, 3, '#1B2B6B');
  const FILAC = (y, k) => [-30, -10, 10, 30].map((x, i) => cel(`c${k}${i + 1}`, x, y));
  const PANELL0 = [MARC, ...FILAC(-10, 1)], PANELL1 = [MARC, ...FILAC(-10, 1), ...FILAC(10, 2)];
  const PAS = [-45, -15, 15, 45].map((x, i) => B('c' + (i + 1), 'cyl', [10, 10, 24], x, 0, 0, '#5BC0EB'));
  const PALS = [-40, -20, 0, 25, 40].map((x, i) => B('p' + (i + 1), 'box', [6, 6, 24], x, 0, 0, '#A0683A'));
  const TORRE = [B('b1', 'box', [40, 30, 10], 0, 0, 0, '#3D7BF4'), B('b2', 'box', [30, 24, 10], 0, 0, 10, '#2FB36D'), B('b3', 'box', [20, 18, 10], 7, 0, 20, '#F7C531'), B('b4', 'box', [12, 12, 10], 0, 0, 30, '#EC5FA8')];
  // ---------- m4-3 · simetria: el mirall (s = −1 meitat esquerra, s = 1 meitat dreta) ----------
  const COS_P = [B('cos', 'cyl', [8, 40, 5], 0, 0, 0, '#1B2B6B'), B('cap', 'cyl', [10, 10, 5], 0, 22, 0, '#1B2B6B')];
  const ALES = s => { const k = s < 0 ? 'e' : 'd';
    return [B('s' + k, 'cyl', [34, 20, 3], 17 * s, 9, 0, '#EC5FA8', { r: [0, 0, 25 * s] }), B('i' + k, 'cyl', [24, 16, 3], 12 * s, -10, 0, '#F7C531', { r: [0, 0, -30 * s] }),
      B('t' + k, 'box', [2, 12, 2], 4 * s, 27, 0, '#1B2B6B', { r: [0, 0, -25 * s] }), B('q' + k, 'cyl', [7, 7, 1], 19 * s, 11, 3, '#F3F3EE')]; };
  const PAPA = [...COS_P, ...ALES(-1), ...ALES(1)], PAPA0 = sense(PAPA, 'id');
  // l'error típic: la meitat esquerra copiada a la dreta sense Mirall (traslladada 34 mm)
  const PAPA_MAL = [...COS_P, ...ALES(-1), ...ALES(-1).map(p => ({ ...p, id: p.id + 'c', p: [p.p[0] + 34, p.p[1], p.p[2]] }))];
  const lent = (id, x) => B(id, 'cyl', [20, 15, 3], x, 0, 0, '#5BC0EB');
  const MUNT = [B('pont', 'box', [10, 3, 3], 0, 2, 0, '#1B2B6B'), B('pe', 'box', [3, 30, 3], -22, 15, 0, '#1B2B6B'), B('pd', 'box', [3, 30, 3], 22, 15, 0, '#1B2B6B')];
  const ULL0 = [lent('v1', -13), lent('v2', 18), ...MUNT], ULL1 = [lent('v1', -13), lent('v2', 13), ...MUNT];
  const CAP = [B('cap', 'box', [50, 12, 40], 0, 0, 0, '#5BC0EB'), B('boca', 'box', [22, 3, 4], 0, -6.5, 8, '#1B2B6B'), B('ant', 'cyl', [3, 3, 8], 0, 0, 40, '#9AA3B5'), B('bola', 'sph', [7, 7, 7], 0, 0, 47, '#E8453C')];
  const CARA = (s, g) => { const k = s < 0 ? 'e' : 'd', o = g ? { g } : {};
    return [B('al' + k, 'wedge', [10, 12, 20], 29 * s, 0, 14, '#F7C531', { r: [0, 0, s < 0 ? 180 : 0], ...o }), B('ul' + k, 'cyl', [14, 14, 3], 11 * s, -6.5, 18, '#F3F3EE', { r: [90, 0, 0], h: 14, ...o }),
      B('ni' + k, 'sph', [5, 5, 5], 11 * s, -8, 22.5, '#1B2B6B', o), B('ce' + k, 'box', [12, 3, 3], 11 * s, -6.5, 33, '#1B2B6B', { r: [0, 15 * s, 0], ...o })]; };
  const ROBOT0 = [...CAP, ...CARA(-1, 'ge')], ROBOT1 = [...CAP, ...CARA(-1, 'ge'), ...CARA(1, 'gd')];
  const BUS = [B('cos', 'box', [64, 26, 20], 0, 0, 6, '#F3F3EE'), B('vidre', 'box', [2, 20, 9], 32, 0, 14, '#1B2B6B'), B('sol', 'box', [44, 20, 2], 0, 0, 26, '#1B2B6B'), B('franja', 'box', [65, 27, 3], 0, 0, 8, '#2FB36D')];
  const COSTAT = (s, g) => { const k = s < 0 ? 'e' : 'd', o = g ? { g } : {};
    return [B('r1' + k, 'cyl', [14, 14, 5], -20, 14 * s, 0, '#2A2F3A', { r: [90, 0, 0], h: 14, ...o }), B('r2' + k, 'cyl', [14, 14, 5], 20, 14 * s, 0, '#2A2F3A', { r: [90, 0, 0], h: 14, ...o }),
      B('w1' + k, 'box', [16, 2, 7], -12, 13 * s, 15, '#5BC0EB', o), B('w2' + k, 'box', [16, 2, 7], 12, 13 * s, 15, '#5BC0EB', o)]; };
  const BUS0 = [...BUS, ...COSTAT(-1, 'ge')], BUS1 = [...BUS, ...COSTAT(-1, 'ge'), ...COSTAT(1, 'gd')];
  const petal = (id, sx, sy) => B(id, 'cyl', [26, 12, 4], 11 * sx, 11 * sy, 0, '#EC5FA8', { r: [0, 0, 45 * sx * sy] });
  const FLOR0 = [B('cen', 'cyl', [14, 14, 6], 0, 0, 0, '#F7C531'), petal('f1', -1, -1)], FLOR1 = [...FLOR0, petal('f2', 1, -1), petal('f3', -1, 1), petal('f4', 1, 1)];
  const FIGS = [P('cor', 'heart', [24, 24, 4], [-48, 0, 2], '#E8453C'), P('l1', 'box', [5, 22, 4], [-22, 0, 2], '#3D7BF4'), P('l2', 'box', [14, 5, 4], [-17.5, -8.5, 2], '#3D7BF4'),
    P('t1', 'box', [20, 5, 4], [14, 8.5, 2], '#2FB36D'), P('t2', 'box', [5, 22, 4], [14, 0, 2], '#2FB36D'), P('est', 'star', [26, 26, 4], [46, 0, 2], '#F7C531', { n: 5 })];
  const EIX = [B('a', 'sph', [12, 12, 12], -15, 0, 0, '#3D7BF4'), B('b', 'sph', [12, 12, 12], 15, 0, 0, '#2FB36D'), B('eix', 'box', [1, 60, 1], 0, 0, 0, '#9AA3B5')];
  // ---------- m4-4 · la casa del futur ----------
  const JARDI = B('jardi', 'box', [110, 84, 4], 0, -10, 0, '#2FB36D');
  const COS_C = (x = 0, y = 0, z0 = 4) => B('casa', 'box', [50, 30, 30], x, y, z0, '#F3F3EE');
  const AIGUA = (s, z0 = 34, g) => B(s < 0 ? 't1' : 't2', 'wedge', [26, 34, 15], 13 * s, 0, z0, '#E8453C', { r: [0, 0, s < 0 ? 180 : 0], ...(g ? { g } : {}) });
  const PORTA = B('porta', 'box', [12, 2, 18], 0, -15, 4, '#A0683A');
  const FIN = (id, x) => B(id, 'box', [10, 2, 10], x, -15, 16, '#5BC0EB');
  const CAMI = B('cami', 'box', [12, 37, 1], 0, -33.5, 4, '#F7C531');
  const arbre = (k, x) => [B('tr' + k, 'cyl', [4, 4, 8], x, -36, 4, '#A0683A', { g: 'ar' + k }), B('co' + k, 'cone', [14, 14, 18], x, -36, 12, '#1E8E52', { g: 'ar' + k })];
  const CASA1 = [JARDI, COS_C()], CASA0 = [JARDI, COS_C(-70, 62, 0)];
  const TEU1 = [...CASA1, AIGUA(1), AIGUA(-1)], TEU0 = [...CASA1, AIGUA(1)];
  const FIN1 = [...TEU1, PORTA, FIN('f1', -15), FIN('f2', 15)], FIN0 = [...TEU1, PORTA, FIN('f1', -15)];
  const ARB1 = [...FIN1, CAMI, ...arbre(1, -40), ...arbre(2, -24), ...arbre(3, 24), ...arbre(4, 40)], ARB0 = [...FIN1, CAMI, ...arbre(1, -40)];
  const FLOTA = [JARDI, COS_C(), AIGUA(1, 42, 'teu'), AIGUA(-1, 42, 'teu')], FLOTA1 = [JARDI, COS_C(), AIGUA(1, 34, 'teu'), AIGUA(-1, 34, 'teu')];
  const fanalC = (k, x) => [B('fp' + k, 'cyl', [3, 3, 20], x, -46, 4, '#1B2B6B'), B('fl' + k, 'sph', [7, 7, 7], x, -46, 23, '#F7C531')];
  const CASA_MEVA = [...ARB1, B('xemeneia', 'box', [8, 8, 12], 0, 6, 44, '#9AA3B5'), ...fanalC(1, -48), ...fanalC(2, 48)];
  const fpis = (id, x, z0) => B(id, 'box', [10, 2, 8], x, -10, z0, '#5BC0EB');
  const PISOS = [B('bloc', 'box', [60, 20, 50], 0, 0, 0, '#F3F3EE'), fpis('w1', -15, 8), fpis('w2', 15, 8), fpis('w3', -15, 22), fpis('trenca', 21, 22), fpis('w5', -15, 36), fpis('w6', 15, 36), B('pb', 'box', [12, 2, 14], 0, -10, 0, '#A0683A')];
  return {
  t: 'Construir|Construir', d: 'Alinear, duplicar i mirall|Alinear, duplicar y espejo', color: '#2FB36D',
  s: [
    /* ---------- Sessió 1 · Alinear ---------- */
    { id: 'm4-1', t: 'Alinear|Alinear', min: 45, badge: 'm41_ali',
      learn: ["Alinear és posar peces en línia: amb la mateixa vora (esquerra, dreta, davant, darrere) o amb el mateix centre.|Alinear es poner piezas en línea: con el mismo borde (izquierdo, derecho, delante, detrás) o con el mismo centro.",
        "L'eina Alinea porta una peça al centre de la placa, a terra o a sobre de la de sota; amb diverses peces, les alinea entre elles.|La herramienta Alinea lleva una pieza al centro de la placa, al suelo o encima de la de debajo; con varias piezas, las alinea entre ellas.",
        "Una peça recolzada comença just on s'acaba la de sota: si el pilar fa 30 mm, la base del tauler és a z = 30.|Una pieza apoyada empieza justo donde acaba la de debajo: si el pilar mide 30 mm, la base del tablero está en z = 30."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Un pilar de <b>30 mm</b> d'alt és a terra. A quina <b>z</b> comença la peça que hi poses a sobre?|Un pilar de <b>30 mm</b> de alto está en el suelo. ¿En qué <b>z</b> empieza la pieza que pones encima?",
          opts: ['z = 30|z = 30', 'z = 15|z = 15', 'z = 0|z = 0'], a: 0,
          ex: "El pilar va de z = 0 a z = 30: la peça de dalt comença just on s'acaba, a z = 30.|El pilar va de z = 0 a z = 30: la pieza de arriba empieza justo donde acaba, en z = 30." },
        { k: 'm3look', ph: 'recorda', q: 'Aquesta barra de <b>40 mm</b> va de x = −10 a x = 30. On és el seu <b>centre</b>?|Esta barra de <b>40 mm</b> va de x = −10 a x = 30. ¿Dónde está su <b>centro</b>?', model: { parts: [B('q', 'box', [40, 10, 10], 10, 0, 0, '#7C5CFF')] }, view: 'top', lock: true,
          opts: ['x = 10|x = 10', 'x = 20|x = 20', 'x = 0|x = 0'], a: 0,
          ex: 'El centre és al mig: (−10 + 30) ÷ 2 = 10. També: −10 + 20 (la meitat de 40) = 10.|El centro está en el medio: (−10 + 30) ÷ 2 = 10. También: −10 + 20 (la mitad de 40) = 10.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'La maqueta del Barri del Futur|La maqueta del Barrio del Futuro',
          t: "La <b>Mireia</b>, l'arquitecta del barri, prepara una <b>maqueta del Barri del Futur</b> per a l'exposició del centre cívic, i ens ha encarregat les peces: un pont, mobles, tanques… i, al final, <b>la casa del futur</b>! En una maqueta tot ha d'encaixar: el pont <b>recolzat</b> als pilars i les potes de la taula a les cantonades. Avui aprendrem a <b>alinear</b>.|<b>Mireia</b>, la arquitecta del barrio, prepara una <b>maqueta del Barrio del Futuro</b> para la exposición del centro cívico, y nos ha encargado las piezas: un puente, muebles, vallas… y, al final, ¡<b>la casa del futuro</b>! En una maqueta todo tiene que encajar: el puente <b>apoyado</b> en los pilares y las patas de la mesa en las esquinas. Hoy aprenderemos a <b>alinear</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Alinear|Alinear', t: 'Peces en línia|Piezas en línea', anim: 'm41ali',
            x: "<b>Alinear</b> és posar diverses peces en línia: totes amb la <b>vora esquerra</b> al mateix lloc, totes amb el <b>centre</b> al mateix lloc o totes amb la <b>vora dreta</b> al mateix lloc. Així la maqueta queda endreçada i les peces encaixen.|<b>Alinear</b> es poner varias piezas en línea: todas con el <b>borde izquierdo</b> en el mismo sitio, todas con el <b>centro</b> en el mismo sitio o todas con el <b>borde derecho</b> en el mismo sitio. Así la maqueta queda ordenada y las piezas encajan.",
            tip: 'Passa el mateix en y (davant i darrere) i en z (a baix i a dalt).|Pasa lo mismo en y (delante y detrás) y en z (abajo y arriba).' },
          { k: 'Recolzar|Apoyar', t: "Comença on s'acaba la de sota|Empieza donde acaba la de debajo", anim: 'm41sobre',
            x: "Per <b>recolzar</b> una peça sobre una altra, la seva base (la z de Posició) ha de ser l'alçada on s'acaba la de sota. Si els pilars fan 30 mm, el tauler del pont comença a <b>z = 30</b>. A z = 33 <b>flotaria</b>; a z = 27, s'enfonsaria.|Para <b>apoyar</b> una pieza sobre otra, su base (la z de Posición) tiene que ser la altura donde acaba la de debajo. Si los pilares miden 30 mm, el tablero del puente empieza en <b>z = 30</b>. En z = 33 <b>flotaría</b>; en z = 27, se hundiría.",
            bad: 'Poso el tauler a ull i queda 1 mm per sobre: sembla que toca.|Pongo el tablero a ojo y queda 1 mm por encima: parece que toca.', good: 'Faig servir Alinea o escric z = 30: queda recolzat exacte.|Uso Alinea o escribo z = 30: queda apoyado exacto.' },
          { k: "L'eina Alinea|La herramienta Alinea", t: 'Amb una sola peça|Con una sola pieza', media: { k: 'model', model: { parts: PONT } },
            x: "Toca una peça i després <b>Alinea</b>. Hi ha tres opcions: <b>Al centre de la placa</b> (x = 0, y = 0), <b>A terra</b> (z = 0) i <b>A sobre de la peça de sota</b>: la puja o la baixa fins que toca la peça que té a sota. Ho calcula sola!|Toca una pieza y después <b>Alinea</b>. Hay tres opciones: <b>Al centro de la placa</b> (x = 0, y = 0), <b>Al suelo</b> (z = 0) y <b>Encima de la pieza de debajo</b>: la sube o la baja hasta que toca la pieza que tiene debajo. ¡Lo calcula sola!",
            tip: "Les eines (Alinea, Duplica, Mirall…) són a la barra de dalt de la vista: s'activen quan tries una peça.|Las herramientas (Alinea, Duplica, Espejo…) están en la barra de arriba de la vista: se activan cuando eliges una pieza." },
          { k: 'Diverses peces|Varias piezas', t: 'Vores i centre|Bordes y centro', anim: 'm41vores',
            x: "Toca una peça, després <b>Més peces</b> i toca'n una altra. Ara <b>Alinea</b> les posa en línia: esquerra, centre o dreta (x); davant, centre o darrere (y); a baix, centre o a dalt (z). Amb dos tocs, una pota queda just a la cantonada del tauler.|Toca una pieza, después <b>Más piezas</b> y toca otra. Ahora <b>Alinea</b> las pone en línea: izquierda, centro o derecha (x); delante, centro o detrás (y); abajo, centro o arriba (z). Con dos toques, una pata queda justo en la esquina del tablero.",
            tip: "Per triar-les totes de cop, toca Totes, a la barra de dalt.|Para elegirlas todas de golpe, toca Todas, en la barra de arriba." },
          { k: 'Compte!|¡Cuidado!', t: 'La peça que sobresurt mana|La pieza que sobresale manda', media: { k: 'model', model: { parts: TAULA1 } },
            x: "Amb diverses peces, totes s'alineen amb la vora de <b>tota la selecció</b>. Si una pota és lluny, fora del tauler, és el tauler el que s'hi mou! Per això, primer posa la pota a sota del tauler i després l'alinees.|Con varias piezas, todas se alinean con el borde de <b>toda la selección</b>. Si una pata está lejos, fuera del tablero, ¡es el tablero el que se mueve! Por eso, primero pon la pata debajo del tablero y después la alineas.",
            bad: 'Alineo una pota que és lluny i el tauler se me\'n va.|Alineo una pata que está lejos y el tablero se me va.', good: "Poso la pota a sota del tauler i després l'alineo a la vora.|Pongo la pata debajo del tablero y después la alineo al borde." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '📏', title: 'Alinea a la taula|Alinea en la mesa', t: "Per parelles, amb un regle i quatre objectes de mides diferents (una goma, un llapis, una maquineta i una capsa):|Por parejas, con una regla y cuatro objetos de tamaños distintos (una goma, un lápiz, un sacapuntas y una caja):",
          steps: ["Escampeu els objectes. Poseu el regle dret a la taula: és la línia d'alinear.|Esparcid los objetos. Poned la regla recta en la mesa: es la línea de alinear.",
            "Una persona diu «a l'esquerra!» i l'altra posa tots els objectes amb la vora tocant el regle.|Una persona dice «¡a la izquierda!» y la otra pone todos los objetos con el borde tocando la regla.",
            "Ara «al centre!»: el mig de cada objecte ha de quedar sobre la línia. És més difícil a ull?|Ahora «¡al centro!»: el medio de cada objeto tiene que quedar sobre la línea. ¿Es más difícil a ojo?",
            "Feu un pont: dues piles de llibres iguals i el regle a sobre. Està recolzat a tots dos costats?|Haced un puente: dos pilas de libros iguales y la regla encima. ¿Está apoyado en los dos lados?"],
          tip: "Per trobar el centre d'un objecte, mesura'l i divideix entre 2.|Para encontrar el centro de un objeto, mídelo y divide entre 2." },
        { k: 'm3look', ph: 'prova', q: "Tres barres estan <b>alineades a l'esquerra</b>. Toca la que <b>no</b> ho està.|Tres barras están <b>alineadas a la izquierda</b>. Toca la que <b>no</b> lo está.", model: { parts: BARRES }, view: 'top', pick: 'fora',
          no: "Aquesta sí que hi està: la seva vora esquerra és a la mateixa línia que les altres.|Esta sí lo está: su borde izquierdo está en la misma línea que las otras.",
          ex: "Tres barres comencen a x = −30. La rosa comença a x = −24: per alinear-la, Alinea → Esquerra.|Tres barras empiezan en x = −30. La rosa empieza en x = −24: para alinearla, Alinea → Izquierda." },
        { k: 'm3look', ph: 'investiga', q: "Els pilars fan <b>30 mm</b> i el tauler comença a <b>z = 33</b>. Què li passa al pont? Mira'l de davant.|Los pilares miden <b>30 mm</b> y el tablero empieza en <b>z = 33</b>. ¿Qué le pasa al puente? Míralo de frente.", model: { parts: PONT_FLOTA }, view: 'front',
          opts: ['Flota: hi ha 3 mm d\'aire sota el tauler|Flota: hay 3 mm de aire bajo el tablero', 'Està ben recolzat|Está bien apoyado', "S'enfonsa 3 mm dins dels pilars|Se hunde 3 mm dentro de los pilares"], a: 0,
          ex: "Els pilars s'acaben a z = 30. Amb el tauler a z = 33 queden 3 mm d'aire: la Nuvi l'hauria d'imprimir a l'aire! Amb z = 30, quedaria recolzat.|Los pilares acaban en z = 30. Con el tablero en z = 33 quedan 3 mm de aire: ¡Nuvi lo tendría que imprimir en el aire! Con z = 30, quedaría apoyado." },
        { k: 'move', ph: 'pausa', title: 'Peça alineada|Pieza alineada', secs: 30, t: "Fes de peça de la maqueta: toca la paret amb l'espatlla (<b>alineat a l'esquerra</b>), camina fins al mig de la classe (<b>al centre</b>) i ajup-te fins a terra (<b>z = 0</b>). Ara posa una mà just a sobre de l'altra: <b>recolzada</b>!|Haz de pieza de la maqueta: toca la pared con el hombro (<b>alineado a la izquierda</b>), camina hasta el medio de la clase (<b>al centro</b>) y agáchate hasta el suelo (<b>z = 0</b>). Ahora pon una mano justo encima de la otra: ¡<b>apoyada</b>!" },
        { k: 'm3build', ph: 'repte', q: "<b>El pont del riu.</b> Porta el tauler al centre i <b>recolza'l</b> a sobre dels pilars, sense que floti.|<b>El puente del río.</b> Lleva el tablero al centro y <b>apóyalo</b> encima de los pilares, sin que flote.",
          start: { parts: PONT0 }, palette: ['box'], target: { parts: PONT },
          checks: [{ k: 'part', t: 'box', s: [70, 20, 6], at: [0, 0, 33], tol: 0.6, txt: 'El tauler és centrat i comença a z = 30|El tablero está centrado y empieza en z = 30' }, { k: 'match', target: { parts: PONT }, th: 0.95, t: 'El pont és com el fantasma|El puente es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca el tauler i Alinea → Al centre de la placa. Després, Alinea → A sobre de la peça de sota.|Toca el tablero y Alinea → Al centro de la placa. Después, Alinea → Encima de la pieza de debajo.", sol: { parts: PONT },
          done: "El pont aguanta! El tauler comença just on s'acaben els pilars.|¡El puente aguanta! El tablero empieza justo donde acaban los pilares." },
        { k: 'm3build', ph: 'repte', q: "<b>Les baranes.</b> Alinea cada barana groga amb una <b>vora</b> del tauler: una al <b>davant</b> i l'altra al <b>darrere</b>.|<b>Las barandillas.</b> Alinea cada barandilla amarilla con un <b>borde</b> del tablero: una <b>delante</b> y la otra <b>detrás</b>.",
          start: { parts: BARANES0 }, palette: ['box'], target: { parts: BARANES1 },
          checks: [{ k: 'part', t: 'box', s: [70, 2, 6], at: [0, -9, 39], tol: 0.6, txt: 'Una barana a la vora del davant|Una barandilla en el borde de delante' }, { k: 'part', t: 'box', s: [70, 2, 6], at: [0, 9, 39], tol: 0.6, txt: 'Una barana a la vora del darrere|Una barandilla en el borde de detrás' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca una barana, Més peces i toca el tauler. Alinea → Y → Davant. Amb l'altra barana i el tauler, Y → Darrere.|Toca una barandilla, Más piezas y toca el tablero. Alinea → Y → Delante. Con la otra barandilla y el tablero, Y → Detrás.", sol: { parts: BARANES1 } },
        { k: 'm3build', ph: 'repte', q: "<b>La tauleta de la plaça.</b> Porta cada pota a una <b>cantonada</b> del tauler: alinea-la a dues vores alhora.|<b>La mesita de la plaza.</b> Lleva cada pata a una <b>esquina</b> del tablero: alinéala con dos bordes a la vez.",
          start: { parts: TAULA0 }, palette: ['box'], target: { parts: TAULA1 },
          checks: [{ k: 'part', t: 'box', s: [4, 4, 20], at: [-23, -13, 10], tol: 0.6, txt: "Una pota a la cantonada esquerra del davant|Una pata en la esquina izquierda de delante" }, { k: 'match', target: { parts: TAULA1 }, th: 0.95, t: 'Les 4 potes són a les cantonades|Las 4 patas están en las esquinas' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca una pota, Més peces i toca el tauler. Alinea → X Esquerra i Y Davant. Les altres: Dreta i Davant, Esquerra i Darrere, Dreta i Darrere.|Toca una pata, Más piezas y toca el tablero. Alinea → X Izquierda e Y Delante. Las otras: Derecha y Delante, Izquierda y Detrás, Derecha y Detrás.", sol: { parts: TAULA1 } },
        { k: 'm3fix', ph: 'repte', q: "<b>La font torta.</b> Els pisos de la font de la plaça no estan centrats. <b>Centra'ls tots</b> sobre la bassa.|<b>La fuente torcida.</b> Los pisos de la fuente de la plaza no están centrados. <b>Céntralos todos</b> sobre la balsa.",
          start: { parts: FONT0 }, fix: ['bassa', 'col', 'bol', 'bola'], palette: ['cyl', 'sph'],
          checks: [{ k: 'sym', ax: 'x', th: 0.97, t: "És simètrica d'esquerra a dreta|Es simétrica de izquierda a derecha" }, { k: 'sym', ax: 'y', th: 0.97, t: 'És simètrica de davant a darrere|Es simétrica de delante a detrás' }, { k: 'match', target: { parts: FONT1 }, th: 0.95, t: 'Tots els pisos són centrats|Todos los pisos están centrados' }, { k: 'one' }],
          hint: "Ja estan totes seleccionades: Alinea → X Centre i després Alinea → Y Centre.|Ya están todas seleccionadas: Alinea → X Centro y después Alinea → Y Centro.", sol: { parts: FONT1 } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>L'escala del mirador.</b> Apila els tres graons i alinea'ls tots a la vora del <b>darrere</b>.|<b>La escalera del mirador.</b> Apila los tres peldaños y alinéalos todos en el borde de <b>detrás</b>.",
          start: { parts: ESC0 }, palette: ['box'], target: { parts: ESC1 },
          checks: [{ k: 'match', target: { parts: ESC1 }, th: 0.95, t: "L'escala és com el fantasma|La escalera es como el fantasma" }, { k: 'size', ax: 'z', v: 24, tol: 0.5, t: 'Alçada total: 24 mm (3 graons)|Altura total: 24 mm (3 peldaños)' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Cada graó: Alinea → Al centre de la placa i Alinea → A sobre de la peça de sota. Al final, Totes → Alinea → Y → Darrere.|Cada peldaño: Alinea → Al centro de la placa y Alinea → Encima de la pieza de debajo. Al final, Todas → Alinea → Y → Detrás.", sol: { parts: ESC1 } },
        { k: 'm3free', ph: 'crea', q: "<b>Un moble per a la maqueta.</b> Una taula, un banc o una prestatgeria amb les potes <b>alineades</b> i el tauler <b>recolzat</b>.|<b>Un mueble para la maqueta.</b> Una mesa, un banco o una estantería con las patas <b>alineadas</b> y el tablero <b>apoyado</b>.",
          name: 'El meu moble|Mi mueble', palette: ['box', 'cyl', 'sph', 'wedge', 'hex', 'pyr'],
          crit: ['Les potes o els suports estan alineats a les vores|Las patas o los soportes están alineados a los bordes', "El tauler està recolzat: ni flota ni s'enfonsa|El tablero está apoyado: ni flota ni se hunde", 'És una sola peça i toca la placa|Es una sola pieza y toca la placa'],
          checks: [{ k: 'count', min: 3, txt: 'Almenys 3 peces|Al menos 3 piezas' }, { k: 'one' }, { k: 'onplate' }], sol: { parts: BANC } },
        { k: 'quiz', ph: 'tanca', q: "Vols una pota a la cantonada <b>dreta del darrere</b> d'un tauler. Quines opcions d'Alinea tries?|Quieres una pata en la esquina <b>derecha de detrás</b> de un tablero. ¿Qué opciones de Alinea eliges?",
          opts: ['X Dreta i Y Darrere|X Derecha e Y Detrás', 'X Esquerra i Y Davant|X Izquierda e Y Delante', 'X Centre i Y Centre|X Centro e Y Centro'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Què fa <b>Alinea → A sobre de la peça de sota</b>?|¿Qué hace <b>Alinea → Encima de la pieza de debajo</b>?',
          opts: ["Puja o baixa la peça fins que toca la de sota|Sube o baja la pieza hasta que toca la de debajo", 'Porta la peça al centre de la placa|Lleva la pieza al centro de la placa', 'Fa la peça més alta|Hace la pieza más alta'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 2 · Duplicar i repetir ---------- */
    { id: 'm4-2', t: 'Duplicar i repetir|Duplicar y repetir', min: 45, badge: 'm42_rep',
      learn: ['Duplica fa una còpia exacta de les peces seleccionades (forma, mida, color i gir) i la posa al costat, a 5 mm.|Duplica hace una copia exacta de las piezas seleccionadas (forma, medida, color y giro) y la pone al lado, a 5 mm.',
        "El pas és la distància de centre a centre entre dues peces repetides: cada posició és l'anterior més el pas.|El paso es la distancia de centro a centro entre dos piezas repetidas: cada posición es la anterior más el paso.",
        'Un patró és una peça o un grup que es repeteix sempre igual i amb el mateix pas: tanques, columnes, rajoles.|Un patrón es una pieza o un grupo que se repite siempre igual y con el mismo paso: vallas, columnas, baldosas.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Vols centrar dues peces l'una sobre l'altra. Quines opcions d'<b>Alinea</b> fas servir?|Quieres centrar dos piezas una sobre otra. ¿Qué opciones de <b>Alinea</b> usas?",
          opts: ['X Centre i Y Centre|X Centro e Y Centro', 'X Esquerra i Y Davant|X Izquierda e Y Delante', 'Z A baix|Z Abajo'], a: 0,
          ex: 'Centrar vol dir que els centres tenen la mateixa x i la mateixa y.|Centrar quiere decir que los centros tienen la misma x y la misma y.' },
        { k: 'm3look', ph: 'recorda', q: 'Mira la torre de davant. Toca la peça que <b>no està centrada</b> amb les altres.|Mira la torre de frente. Toca la pieza que <b>no está centrada</b> con las otras.', model: { parts: TORRE }, view: 'front', pick: 'b3',
          no: "Aquesta està ben centrada. Busca la que sobresurt més per un costat que per l'altre.|Esta está bien centrada. Busca la que sobresale más por un lado que por el otro.",
          ex: 'Les altres tenen el centre a x = 0. La groga és a x = 7: Alinea → X Centre la tornaria al lloc.|Las otras tienen el centro en x = 0. La amarilla está en x = 7: Alinea → X Centro la devolvería a su sitio.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'El parc del barri|El parque del barrio',
          t: "La Mireia ens ha enviat el plànol del <b>parc</b>: necessita una <b>tanca</b> de fusta, un <b>porxo</b> amb columnes i <b>fanals</b> al llarg del passeig. Quantes peces iguals! Fer-les d'una en una seria pesadíssim… La Nuvi diu que els dissenyadors tenen un truc per a les peces que es repeteixen: <b>Duplica</b>!|Mireia nos ha enviado el plano del <b>parque</b>: necesita una <b>valla</b> de madera, un <b>porche</b> con columnas y <b>farolas</b> a lo largo del paseo. ¡Cuántas piezas iguales! Hacerlas de una en una sería pesadísimo… Nuvi dice que los diseñadores tienen un truco para las piezas que se repiten: ¡<b>Duplica</b>!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Duplica|Duplica', t: 'Una còpia exacta|Una copia exacta', anim: 'm42dup',
            x: "Toca una peça i després <b>Duplica</b> (a l'ordinador, també Ctrl + D): surt una <b>còpia exacta</b>, amb la mateixa forma, mida, color i gir, just al costat i amb <b>5 mm</b> d'espai. La còpia queda seleccionada, a punt per moure-la.|Toca una pieza y después <b>Duplica</b> (en el ordenador, también Ctrl + D): sale una <b>copia exacta</b>, con la misma forma, medida, color y giro, justo al lado y con <b>5 mm</b> de espacio. La copia queda seleccionada, lista para moverla.",
            tip: 'És molt més ràpid que afegir una peça nova i tornar-ne a escriure les mides.|Es mucho más rápido que añadir una pieza nueva y volver a escribir sus medidas.' },
          { k: 'Una fila|Una fila', t: 'Duplica, duplica, duplica|Duplica, duplica, duplica', media: { k: 'model', model: { parts: FILA1 } },
            x: "Si tornes a tocar <b>Duplica</b> sense moure la còpia, la següent surt a la <b>mateixa distància</b>. Tres tocs i tens una fila de 4 columnes ben repartides! Columnes de 15 mm i 5 mm d'espai: una cada 20 mm.|Si vuelves a tocar <b>Duplica</b> sin mover la copia, la siguiente sale a la <b>misma distancia</b>. ¡Tres toques y tienes una fila de 4 columnas bien repartidas! Columnas de 15 mm y 5 mm de espacio: una cada 20 mm.",
            tip: "Vols una altra distància? Posa la primera còpia on vulguis i torna a tocar Duplica: la següent fa el mateix salt.|¿Quieres otra distancia? Pon la primera copia donde quieras y vuelve a tocar Duplica: la siguiente da el mismo salto." },
          { k: 'El pas|El paso', t: 'De centre a centre|De centro a centro', anim: 'm42pas',
            x: "En una tanca, la distància d'un pal al següent, de centre a centre, és el <b>pas</b>. Si el primer pal és a x = −40 i el pas és <b>20 mm</b>, els altres van a −20, 0, 20 i 40: cada vegada <b>sumes 20</b>.|En una valla, la distancia de un palo al siguiente, de centro a centro, es el <b>paso</b>. Si el primer palo está en x = −40 y el paso es <b>20 mm</b>, los otros van en −20, 0, 20 y 40: cada vez <b>sumas 20</b>.",
            bad: 'Poso els pals a ull: uns queden més junts que altres.|Pongo los palos a ojo: unos quedan más juntos que otros.', good: 'Sumo sempre el mateix pas: −40, −20, 0, 20, 40.|Sumo siempre el mismo paso: −40, −20, 0, 20, 40.' },
          { k: 'Repetir és un patró|Repetir es un patrón', t: 'La mateixa peça amb el mateix pas|La misma pieza con el mismo paso', media: { k: 'model', model: { parts: TANCA1 } },
            x: "Un <b>patró</b> és una cosa que es repeteix sempre igual: els pals d'una tanca, les columnes d'un porxo, les rajoles del terra. Si descobreixes el patró (<b>quina peça</b> i <b>quin pas</b>), en pots fer tantes com vulguis!|Un <b>patrón</b> es algo que se repite siempre igual: los palos de una valla, las columnas de un porche, las baldosas del suelo. Si descubres el patrón (<b>qué pieza</b> y <b>qué paso</b>), ¡puedes hacer tantas como quieras!" },
          { k: 'Un mòdul|Un módulo', t: 'Duplicar diverses peces alhora|Duplicar varias piezas a la vez', media: { k: 'model', model: { parts: FANALS1 } },
            x: "Si selecciones diverses peces (amb <b>Més peces</b>) i toques <b>Duplica</b>, es copien totes juntes. Un fanal fet d'un pal i una bombeta es duplica d'un sol cop: aquest tros que es repeteix és un <b>mòdul</b>.|Si seleccionas varias piezas (con <b>Más piezas</b>) y tocas <b>Duplica</b>, se copian todas juntas. Una farola hecha de un palo y una bombilla se duplica de una sola vez: este trozo que se repite es un <b>módulo</b>.",
            tip: 'Si les agrupes (Agrupa), en tocar-ne una se seleccionen totes.|Si las agrupas (Agrupa), al tocar una se seleccionan todas.' }
        ] },
        { k: 'unplug', ph: 'mans', ico: '✏️', title: 'El patró de la tanca|El patrón de la valla', t: 'Amb un full, un regle i un llapis:|Con una hoja, una regla y un lápiz:',
          steps: ['Dibuixa una línia de 16 cm: és el terra de la tanca.|Dibuja una línea de 16 cm: es el suelo de la valla.',
            'Marca el primer pal a 1 cm. Amb un pas de 3 cm, marca els altres: 1, 4, 7…|Marca el primer palo a 1 cm. Con un paso de 3 cm, marca los otros: 1, 4, 7…',
            'Quants pals hi caben fins a 16 cm? Escriu la llista de posicions.|¿Cuántos palos caben hasta 16 cm? Escribe la lista de posiciones.',
            'Ara amb un pas de 2 cm: quants pals hi caben? Compara les dues tanques amb el company.|Ahora con un paso de 2 cm: ¿cuántos palos caben? Compara las dos vallas con el compañero.'],
          tip: "Cada posició és l'anterior més el pas: és el mateix que farem a la pestanya Posició.|Cada posición es la anterior más el paso: es lo mismo que haremos en la pestaña Posición." },
        { k: 'm3look', ph: 'prova', q: "Quin és el <b>pas</b> d'aquesta fila de columnes (de centre a centre)?|¿Cuál es el <b>paso</b> de esta fila de columnas (de centro a centro)?", model: { parts: PAS }, view: 'top', lock: true,
          opts: ['30 mm|30 mm', '15 mm|15 mm', '45 mm|45 mm'], a: 0,
          ex: 'Les columnes són a −45, −15, 15 i 45: de l\'una a la següent sempre hi ha 30 mm.|Las columnas están en −45, −15, 15 y 45: de una a la siguiente siempre hay 30 mm.' },
        { k: 'm3look', ph: 'investiga', q: 'En aquesta tanca hi ha un pal <b>fora del patró</b>. Toca\'l.|En esta valla hay un palo <b>fuera del patrón</b>. Tócalo.', model: { parts: PALS }, view: 'top', pick: 'p4',
          no: 'Aquest segueix el patró. Mira les distàncies: totes haurien de ser de 20 mm.|Este sigue el patrón. Mira las distancias: todas tendrían que ser de 20 mm.',
          ex: 'Els pals van de 20 en 20: −40, −20, 0, 20, 40. El quart és a x = 25: s\'ha desplaçat 5 mm.|Los palos van de 20 en 20: −40, −20, 0, 20, 40. El cuarto está en x = 25: se ha desplazado 5 mm.' },
        { k: 'move', ph: 'pausa', title: 'El patró del cos|El patrón del cuerpo', secs: 30, t: "Fes un patró amb el cos: <b>braços amunt</b>, <b>mans a les espatlles</b>, braços amunt, mans a les espatlles… Ara afegeix-hi un <b>salt</b>: amunt, espatlles, salt! Repeteix el patró quatre vegades sense equivocar-te.|Haz un patrón con el cuerpo: <b>brazos arriba</b>, <b>manos a los hombros</b>, brazos arriba, manos a los hombros… Ahora añádele un <b>salto</b>: ¡arriba, hombros, salto! Repite el patrón cuatro veces sin equivocarte." },
        { k: 'm3build', ph: 'repte', q: "<b>Les columnes del porxo.</b> Fes una fila de <b>4 columnes</b>: toca la columna i Duplica tres vegades, sense moure-la.|<b>Las columnas del porche.</b> Haz una fila de <b>4 columnas</b>: toca la columna y Duplica tres veces, sin moverla.",
          start: { parts: FILA0 }, palette: ['cyl'], target: { parts: FILA1 },
          checks: [{ k: 'count', t: 'cyl', min: 4, max: 4, txt: 'Exactament 4 columnes|Exactamente 4 columnas' }, { k: 'match', target: { parts: FILA1 }, th: 0.93, t: 'La fila és com el fantasma|La fila es como el fantasma' }, { k: 'one' }],
          hint: "Toca la columna i toca Duplica tres vegades seguides. Si en surt una de més, esborra-la o desfés.|Toca la columna y toca Duplica tres veces seguidas. Si sale una de más, bórrala o deshaz.", sol: { parts: FILA1 } },
        { k: 'm3build', ph: 'repte', q: "<b>La tanca del parc.</b> Els pals han d'anar <b>cada 20 mm</b>: a x = −40, −20, 0, 20 i 40. Duplica el pal, posa la còpia a x = −20 i torna a duplicar.|<b>La valla del parque.</b> Los palos tienen que ir <b>cada 20 mm</b>: en x = −40, −20, 0, 20 y 40. Duplica el palo, pon la copia en x = −20 y vuelve a duplicar.",
          start: { parts: TANCA0 }, palette: ['box'], target: { parts: TANCA1 },
          checks: [{ k: 'count', t: 'box', min: 7, max: 7, txt: '5 pals i 2 travessers|5 palos y 2 travesaños' }, { k: 'part', t: 'box', s: [6, 6, 24], at: [0, 0, 12], tol: 0.6, txt: 'Hi ha un pal al mig (x = 0)|Hay un palo en el medio (x = 0)' }, { k: 'match', target: { parts: TANCA1 }, th: 0.95, t: 'Els pals van cada 20 mm|Los palos van cada 20 mm' }, { k: 'one' }],
          hint: "Duplica el pal i, a Posició, escriu x = −20. Després toca Duplica tres vegades més: cada còpia suma 20 (0, 20 i 40).|Duplica el palo y, en Posición, escribe x = −20. Después toca Duplica tres veces más: cada copia suma 20 (0, 20 y 40).", sol: { parts: TANCA1 } },
        { k: 'm3build', ph: 'repte', q: "<b>Els fanals.</b> Tria el pal i la bombeta i duplica el fanal sencer: <b>3</b> fanals, a x = −40, 0 i 40.|<b>Las farolas.</b> Elige el palo y la bombilla y duplica la farola entera: <b>3</b> farolas, en x = −40, 0 y 40.",
          start: { parts: FANALS0 }, palette: ['cyl', 'sph'], target: { parts: FANALS1 },
          checks: [{ k: 'count', t: 'sph', min: 3, max: 3, txt: '3 bombetes|3 bombillas' }, { k: 'count', t: 'cyl', min: 3, max: 3, txt: '3 pals|3 palos' }, { k: 'match', target: { parts: FANALS1 }, th: 0.93, t: 'Els fanals són als fantasmes|Las farolas están en los fantasmas' }, { k: 'one' }],
          hint: "Toca el pal, Més peces i toca la bombeta. Duplica i escriu x = 0 a Posició. Torna a tocar Duplica: el tercer fanal surt sol a x = 40.|Toca el palo, Más piezas y toca la bombilla. Duplica y escribe x = 0 en Posición. Vuelve a tocar Duplica: la tercera farola sale sola en x = 40.", sol: { parts: FANALS1 } },
        { k: 'm3fix', ph: 'repte', q: "<b>El porxo desendreçat.</b> Dues columnes s'han mogut i el patró s'ha trencat. Torna-les al pas de <b>20 mm</b>.|<b>El porche desordenado.</b> Dos columnas se han movido y el patrón se ha roto. Devuélvelas al paso de <b>20 mm</b>.",
          start: { parts: PORXO0 }, fix: ['c2'], palette: ['cyl'],
          checks: [{ k: 'match', target: { parts: PORXO1 }, th: 0.97, t: 'Les columnes van cada 20 mm|Las columnas van cada 20 mm' }, { k: 'sym', ax: 'x', th: 0.98, t: "El porxo és igual a l'esquerra i a la dreta|El porche es igual a la izquierda y a la derecha" }, { k: 'one' }],
          hint: "Compta de 20 en 20: −40, −20, 0, 20, 40. La segona columna ha d'anar a x = −20 i la quarta, a x = 20.|Cuenta de 20 en 20: −40, −20, 0, 20, 40. La segunda columna tiene que ir en x = −20 y la cuarta, en x = 20.", sol: { parts: PORXO1 } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>El panell solar.</b> Ja hi ha una fila de 4 cel·les. Selecciona-les totes quatre, duplica-les i posa la fila nova a <b>y = 10</b>.|<b>El panel solar.</b> Ya hay una fila de 4 celdas. Selecciona las cuatro, duplícalas y pon la fila nueva en <b>y = 10</b>.",
          start: { parts: PANELL0 }, palette: ['box'], target: { parts: PANELL1 },
          checks: [{ k: 'count', t: 'box', min: 9, max: 9, txt: 'El marc i 8 cel·les|El marco y 8 celdas' }, { k: 'match', target: { parts: PANELL1 }, th: 0.95, t: 'El panell és com el fantasma|El panel es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca una cel·la, Més peces i toca les altres tres. Duplica i, a Posició, escriu x = 0 i y = 10.|Toca una celda, Más piezas y toca las otras tres. Duplica y, en Posición, escribe x = 0 e y = 10.", sol: { parts: PANELL1 } },
        { k: 'm3free', ph: 'crea', q: "<b>Un patró per al parc.</b> Una tanca, un porxo o una filera d'arbres, amb <b>Duplica</b> i sempre el mateix <b>pas</b>.|<b>Un patrón para el parque.</b> Una valla, un porche o una hilera de árboles, con <b>Duplica</b> y siempre el mismo <b>paso</b>.",
          name: 'El meu patró|Mi patrón', palette: ['box', 'cyl', 'sph', 'cone', 'hex', 'wedge', 'star'],
          crit: ['Hi ha almenys 4 peces iguals que es repeteixen|Hay al menos 4 piezas iguales que se repiten', 'Totes estan a la mateixa distància (el mateix pas)|Todas están a la misma distancia (el mismo paso)', 'És una sola peça i toca la placa|Es una sola pieza y toca la placa'],
          checks: [{ k: 'count', min: 5, txt: 'Almenys 5 peces|Al menos 5 piezas' }, { k: 'one' }, { k: 'onplate' }], sol: { parts: TANCA1 } },
        { k: 'quiz', ph: 'tanca', q: 'Un pal és a <b>x = −30</b> i el pas de la tanca és <b>15 mm</b>. On van els dos pals següents?|Un palo está en <b>x = −30</b> y el paso de la valla es <b>15 mm</b>. ¿Dónde van los dos palos siguientes?',
          opts: ['x = −15 i x = 0|x = −15 y x = 0', 'x = −15 i x = −30|x = −15 y x = −30', 'x = 15 i x = 30|x = 15 y x = 30'], a: 0, ex: '−30 + 15 = −15 i −15 + 15 = 0.|−30 + 15 = −15 y −15 + 15 = 0.' },
        { k: 'quiz', ph: 'tanca', q: 'Què fa <b>Duplica</b> si tens <b>3 peces</b> seleccionades?|¿Qué hace <b>Duplica</b> si tienes <b>3 piezas</b> seleccionadas?',
          opts: ['Copia les 3 peces juntes|Copia las 3 piezas juntas', 'Només copia la primera|Solo copia la primera', 'Esborra les 3 peces|Borra las 3 piezas'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 3 · Simetria: el mirall ---------- */
    { id: 'm4-3', t: 'Simetria: el mirall|Simetría: el espejo', min: 45, badge: 'm43_mir',
      learn: ["Una figura és simètrica si una línia, l'eix de simetria, la parteix en dues meitats iguals, com en un mirall.|Una figura es simétrica si una línea, el eje de simetría, la parte en dos mitades iguales, como en un espejo.",
        'Per fer una figura simètrica, fas una meitat, la dupliques, li apliques el Mirall i la poses a l\'altra banda de l\'eix.|Para hacer una figura simétrica, haces una mitad, la duplicas, le aplicas el Espejo y la pones al otro lado del eje.',
        "Al mirall, una peça a x = −15 passa a x = 15: la mateixa distància a l'eix, però a l'altre costat.|En el espejo, una pieza en x = −15 pasa a x = 15: la misma distancia al eje, pero al otro lado."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'El primer pal d\'una tanca és a <b>x = −20</b> i el pas és de <b>10 mm</b>. On és el <b>tercer</b> pal?|El primer palo de una valla está en <b>x = −20</b> y el paso es de <b>10 mm</b>. ¿Dónde está el <b>tercer</b> palo?',
          opts: ['x = 0|x = 0', 'x = −10|x = −10', 'x = 10|x = 10'], a: 0, ex: '−20, −10, 0: cada pal suma 10.|−20, −10, 0: cada palo suma 10.' },
        { k: 'quiz', ph: 'recorda', q: 'Tens una columna. Quantes vegades has de tocar <b>Duplica</b> per tenir-ne <b>4</b> en fila?|Tienes una columna. ¿Cuántas veces tienes que tocar <b>Duplica</b> para tener <b>4</b> en fila?',
          opts: ['3|3', '4|4', '5|5'], a: 0, ex: 'Ja en tens una: amb 3 còpies més, en tens 4.|Ya tienes una: con 3 copias más, tienes 4.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'Tot té dues meitats|Todo tiene dos mitades',
          t: "El parc del Barri del Futur tindrà un <b>jardí de papallones</b>, uns <b>robots-guia</b> i un <b>bus elèctric</b>. La Mireia ens ho ha encarregat tot! Fixa't en una papallona: l'ala esquerra és igual que la dreta, però <b>girada com en un mirall</b>. La Nuvi té un truc per estalviar feina: fer només <b>la meitat</b>… i emmirallar-la!|El parque del Barrio del Futuro tendrá un <b>jardín de mariposas</b>, unos <b>robots guía</b> y un <b>autobús eléctrico</b>. ¡Mireia nos lo ha encargado todo! Fíjate en una mariposa: el ala izquierda es igual que la derecha, pero <b>girada como en un espejo</b>. Nuvi tiene un truco para ahorrar trabajo: hacer solo <b>la mitad</b>… ¡y reflejarla!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Simetria|Simetría', t: 'Dues meitats iguals|Dos mitades iguales', anim: 'm43eix',
            x: "Una figura és <b>simètrica</b> quan una línia, l'<b>eix de simetria</b>, la parteix en dues meitats que són com un reflex en un mirall. Una papallona, una cara o la façana d'una casa en són exemples.|Una figura es <b>simétrica</b> cuando una línea, el <b>eje de simetría</b>, la parte en dos mitades que son como un reflejo en un espejo. Una mariposa, una cara o la fachada de una casa son ejemplos.",
            tip: 'Si dobleguessis la figura per l\'eix, les dues meitats quedarien una sobre l\'altra.|Si doblaras la figura por el eje, las dos mitades quedarían una sobre la otra.' },
          { k: "L'eina Mirall|La herramienta Espejo", t: 'Gira la peça com en un mirall|Gira la pieza como en un espejo', media: { k: 'model', model: { parts: [B('a', 'wedge', [30, 20, 18], -22, 0, 0, '#F5893A'), B('b', 'wedge', [30, 20, 18], 22, 0, 0, '#2FB36D', { r: [0, 0, 180] })] }, view: 'front' },
            x: "Selecciona una peça (o diverses) i toca <b>Mirall</b> → <b>Esquerra ↔ dreta (x)</b>: es reflecteix sense moure's de lloc. La falca taronja baixa cap a la dreta; la verda és el seu reflex i baixa cap a l'esquerra. També hi ha <b>Davant ↔ darrere (y)</b>.|Selecciona una pieza (o varias) y toca <b>Espejo</b> → <b>Izquierda ↔ derecha (x)</b>: se refleja sin moverse de sitio. La cuña naranja baja hacia la derecha; la verde es su reflejo y baja hacia la izquierda. También está <b>Delante ↔ detrás (y)</b>.",
            tip: 'Un cub o un cilindre dret no canvien al mirall: ja són simètrics.|Un cubo o un cilindro de pie no cambian en el espejo: ya son simétricos.' },
          { k: 'Meitat + mirall|Mitad + espejo', t: 'El truc dels dissenyadors|El truco de los diseñadores', anim: 'm43pas',
            x: "1) Fes la <b>meitat</b> esquerra. 2) Selecciona-la tota i toca <b>Duplica</b>. 3) Toca <b>Mirall → x</b>: la còpia es gira. 4) Mou la còpia a l'altra banda de l'eix. Has fet la meitat de la feina i tens la figura sencera!|1) Haz la <b>mitad</b> izquierda. 2) Selecciónala entera y toca <b>Duplica</b>. 3) Toca <b>Espejo → x</b>: la copia se gira. 4) Mueve la copia al otro lado del eje. ¡Has hecho la mitad del trabajo y tienes la figura entera!" },
          { k: 'Les coordenades|Las coordenadas', t: 'x passa a −x|x pasa a −x', media: { k: 'model', model: { parts: EIX }, view: 'top' },
            x: "Si l'eix és a <b>x = 0</b>, una peça a <b>x = −15</b> té el reflex a <b>x = 15</b>: la mateixa distància a l'eix, a l'altra banda. La y i la z no canvien. Només canvia el signe de la x! <b>Mirall → Còpia a l'altre costat (x)</b> fa la còpia emmirallada just allà.|Si el eje está en <b>x = 0</b>, una pieza en <b>x = −15</b> tiene el reflejo en <b>x = 15</b>: la misma distancia al eje, al otro lado. La y y la z no cambian. ¡Solo cambia el signo de la x! <b>Espejo → Copia al otro lado (x)</b> hace la copia reflejada justo allí.",
            bad: 'El reflex de x = −15 és x = −30.|El reflejo de x = −15 es x = −30.', good: 'El reflex de x = −15 és x = 15: només canvio el signe.|El reflejo de x = −15 es x = 15: solo cambio el signo.' },
          { k: 'Comprova-ho|Compruébalo', t: 'Mira-ho de dalt o de davant|Míralo desde arriba o de frente', media: { k: 'model', model: { parts: PAPA }, view: 'top' },
            x: "Per saber si un model és simètric, mira'l <b>des de dalt</b> o <b>des de davant</b>: les dues meitats han de ser iguals a banda i banda de l'eix. La comprovació «És simètric» es posa en verd quan ho és.|Para saber si un modelo es simétrico, míralo <b>desde arriba</b> o <b>de frente</b>: las dos mitades tienen que ser iguales a ambos lados del eje. La comprobación «Es simétrico» se pone en verde cuando lo es." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '✂️', title: 'La papallona de paper|La mariposa de papel', t: 'Amb un full, un llapis, unes tisores i retoladors:|Con una hoja, un lápiz, unas tijeras y rotuladores:',
          steps: ["Doblega el full per la meitat. El plec és l'<b>eix de simetria</b>.|Dobla la hoja por la mitad. El pliegue es el <b>eje de simetría</b>.",
            "Dibuixa mitja papallona tocant el plec: una ala de dalt, una de baix i mig cos.|Dibuja media mariposa tocando el pliegue: un ala de arriba, una de abajo y medio cuerpo.",
            'Retalla per la línia amb el full doblegat i obre\'l. Les dues meitats són iguals?|Recorta por la línea con la hoja doblada y ábrela. ¿Las dos mitades son iguales?',
            "Pinta-la: el que pintis a una ala, pinta-ho igual a l'altra, a la mateixa distància del plec.|Píntala: lo que pintes en un ala, píntalo igual en la otra, a la misma distancia del pliegue."],
          tip: "Posa un mirall dret sobre el plec: el reflex de mitja papallona és l'altra meitat!|Pon un espejo de pie sobre el pliegue: ¡el reflejo de media mariposa es la otra mitad!" },
        { k: 'm3look', ph: 'prova', q: "Toca la figura que <b>no</b> és simètrica d'esquerra a dreta.|Toca la figura que <b>no</b> es simétrica de izquierda a derecha.", model: { parts: FIGS }, view: 'top', pick: ['l1', 'l2'],
          no: "Aquesta sí que ho és: si la dobleguessis pel mig, les dues meitats coincidirien.|Esta sí lo es: si la doblaras por el medio, las dos mitades coincidirían.",
          ex: "El cor, la T i l'estrella tenen la meitat esquerra igual que la dreta. La L, no: el peu només va cap a un costat.|El corazón, la T y la estrella tienen la mitad izquierda igual que la derecha. La L, no: el pie solo va hacia un lado." },
        { k: 'm3look', ph: 'investiga', q: "Algú ha copiat les ales de l'esquerra a la dreta. Alguna cosa no va bé: què ha passat?|Alguien ha copiado las alas de la izquierda a la derecha. Algo no va bien: ¿qué ha pasado?", model: { parts: PAPA_MAL }, view: 'top',
          opts: ["Ha duplicat les ales però no ha fet servir Mirall: apunten cap al mateix costat|Ha duplicado las alas pero no ha usado el Espejo: apuntan hacia el mismo lado", 'Les ales de la dreta són més petites|Las alas de la derecha son más pequeñas', 'La papallona no toca la placa|La mariposa no toca la placa'], a: 0,
          ex: "Una còpia sense Mirall queda igual, no reflectida: l'antena queda a fora i les ales s'inclinen cap al mateix costat. Amb Mirall → x, la meitat dreta seria el reflex de l'esquerra.|Una copia sin Espejo queda igual, no reflejada: la antena queda fuera y las alas se inclinan hacia el mismo lado. Con Espejo → x, la mitad derecha sería el reflejo de la izquierda." },
        { k: 'move', ph: 'pausa', title: 'Cos simètric|Cuerpo simétrico', secs: 30, t: "Imagina un eix que et passa pel mig, del nas al melic. Aixeca els dos braços igual: <b>simètric</b>! Ara un braç amunt i l'altre al costat: no ho és. Fes tres postures simètriques i tres que no ho siguin.|Imagina un eje que te pasa por el medio, de la nariz al ombligo. Levanta los dos brazos igual: ¡<b>simétrico</b>! Ahora un brazo arriba y el otro al lado: no lo es. Haz tres posturas simétricas y tres que no lo sean." },
        { k: 'm3build', ph: 'repte', q: "<b>L'ala que falta.</b> Fes el reflex de l'ala groga amb <b>Mirall → Còpia a l'altre costat (x)</b>: anirà a <b>x = 12</b>.|<b>El ala que falta.</b> Haz el reflejo del ala amarilla con <b>Espejo → Copia al otro lado (x)</b>: irá a <b>x = 12</b>.",
          start: { parts: PAPA0 }, palette: ['cyl'], view: 'top', target: { parts: PAPA },
          checks: [{ k: 'sym', ax: 'x', th: 0.97, t: 'La papallona és simètrica|La mariposa es simétrica' }, { k: 'count', t: 'cyl', min: 8, max: 8, txt: 'Té 4 ales|Tiene 4 alas' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca l'ala groga i Mirall → Còpia a l'altre costat (x): surt girada a x = 12. També pots fer Duplica, Mirall → Esquerra ↔ dreta (x) i, a Posició, x = 12.|Toca el ala amarilla y Espejo → Copia al otro lado (x): sale girada en x = 12. También puedes hacer Duplica, Espejo → Izquierda ↔ derecha (x) y, en Posición, x = 12.", sol: { parts: PAPA },
          done: "Ara sí que vola! L'ala de la dreta és el reflex exacte de la de l'esquerra.|¡Ahora sí que vuela! El ala de la derecha es el reflejo exacto de la de la izquierda." },
        { k: 'm3fix', ph: 'repte', q: "<b>Les ulleres de la Nuvi.</b> La lent dreta no és al seu lloc. Si l'esquerra és a x = −13, on ha d'anar la dreta? Arregla-la.|<b>Las gafas de Nuvi.</b> La lente derecha no está en su sitio. Si la izquierda está en x = −13, ¿dónde tiene que ir la derecha? Arréglala.",
          start: { parts: ULL0 }, fix: ['v2'], palette: ['cyl'], view: 'top',
          checks: [{ k: 'sym', ax: 'x', th: 0.98, t: 'Les ulleres són simètriques|Las gafas son simétricas' }, { k: 'match', target: { parts: ULL1 }, th: 0.97, t: 'La lent és al lloc del reflex|La lente está en el sitio del reflejo' }, { k: 'one' }],
          hint: "El reflex de x = −13 és x = 13. La lent ja està seleccionada: a Posició, escriu x = 13.|El reflejo de x = −13 es x = 13. La lente ya está seleccionada: en Posición, escribe x = 13.", sol: { parts: ULL1 } },
        { k: 'm3build', ph: 'repte', q: "<b>La cara del robot-guia.</b> Les peces de l'esquerra estan <b>agrupades</b>. Fes el reflex del grup a l'altra banda: ha d'anar a <b>x = 19</b>.|<b>La cara del robot guía.</b> Las piezas de la izquierda están <b>agrupadas</b>. Haz el reflejo del grupo al otro lado: tiene que ir en <b>x = 19</b>.",
          start: { parts: ROBOT0 }, palette: ['box', 'cyl', 'sph', 'wedge'], view: 'front', target: { parts: ROBOT1 },
          checks: [{ k: 'sym', ax: 'x', th: 0.98, t: 'La cara és simètrica|La cara es simétrica' }, { k: 'count', t: 'wedge', min: 2, max: 2, txt: 'Té dues aletes|Tiene dos aletas' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca l'aleta groga (se selecciona tot el grup) i Mirall → Còpia a l'altre costat (x). O bé: Duplica, Mirall → Esquerra ↔ dreta (x) i, a Posició, x = 19.|Toca la aleta amarilla (se selecciona todo el grupo) y Espejo → Copia al otro lado (x). O bien: Duplica, Espejo → Izquierda ↔ derecha (x) y, en Posición, x = 19.", sol: { parts: ROBOT1 } },
        { k: 'm3build', ph: 'repte', q: "<b>El bus elèctric.</b> Passa el costat de les rodes a l'altre costat del bus amb un <b>mirall en y</b>: ha d'anar a <b>x = 0, y = 14</b>.|<b>El autobús eléctrico.</b> Pasa el lado de las ruedas al otro lado del autobús con un <b>espejo en y</b>: tiene que ir en <b>x = 0, y = 14</b>.",
          start: { parts: BUS0 }, palette: ['cyl', 'box'], target: { parts: BUS1 },
          checks: [{ k: 'sym', ax: 'y', th: 0.98, t: 'Els dos costats del bus són iguals (mirall en y)|Los dos lados del autobús son iguales (espejo en y)' }, { k: 'count', t: 'cyl', min: 4, max: 4, txt: 'Té 4 rodes|Tiene 4 ruedas' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca una roda (se selecciona tot el costat) i Mirall → Còpia a l'altre costat (y). O bé: Duplica, Mirall → Davant ↔ darrere (y) i, a Posició, x = 0 i y = 14.|Toca una rueda (se selecciona todo el lado) y Espejo → Copia al otro lado (y). O bien: Duplica, Espejo → Delante ↔ detrás (y) y, en Posición, x = 0 e y = 14.", sol: { parts: BUS1 } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>La flor de dos eixos.</b> Copia el pètal amb <b>Mirall → x</b> i, després, els dos pètals amb <b>Mirall → y</b>.|<b>La flor de dos ejes.</b> Copia el pétalo con <b>Espejo → x</b> y, después, los dos pétalos con <b>Espejo → y</b>.",
          start: { parts: FLOR0 }, palette: ['cyl'], view: 'top', target: { parts: FLOR1 },
          checks: [{ k: 'sym', ax: 'x', th: 0.97, t: "Simètrica d'esquerra a dreta|Simétrica de izquierda a derecha" }, { k: 'sym', ax: 'y', th: 0.97, t: 'Simètrica de davant a darrere|Simétrica de delante a detrás' }, { k: 'count', t: 'cyl', min: 5, max: 5, txt: 'El centre i 4 pètals|El centro y 4 pétalos' }, { k: 'one' }],
          hint: "Toca el pètal i Mirall → Còpia a l'altre costat (x). Després tria els dos pètals (Més peces) i Mirall → Còpia a l'altre costat (y). Amb Duplica i Mirall, les posicions són x = 11 i, després, x = 0, y = 11.|Toca el pétalo y Espejo → Copia al otro lado (x). Después elige los dos pétalos (Más piezas) y Espejo → Copia al otro lado (y). Con Duplica y Espejo, las posiciones son x = 11 y, después, x = 0, y = 11.", sol: { parts: FLOR1 } },
        { k: 'm3free', ph: 'crea', q: "<b>Una figura simètrica.</b> Un animal, una màscara o un vehicle: fes-ne la meitat i completa-la amb <b>Mirall</b>.|<b>Una figura simétrica.</b> Un animal, una máscara o un vehículo: haz la mitad y complétala con el <b>Espejo</b>.",
          name: 'La meva figura simètrica|Mi figura simétrica', palette: ['box', 'cyl', 'sph', 'cone', 'pyr', 'wedge', 'heart', 'star', 'hex'],
          crit: ['Té un eix de simetria: les dues meitats són iguals|Tiene un eje de simetría: las dos mitades son iguales', "Has fet una meitat i l'altra amb Mirall|Has hecho una mitad y la otra con el Espejo", 'És una sola peça i toca la placa|Es una sola pieza y toca la placa'],
          checks: [{ k: 'sym', ax: 'x', th: 0.95, t: "És simètrica d'esquerra a dreta|Es simétrica de izquierda a derecha" }, { k: 'count', min: 4, txt: 'Almenys 4 peces|Al menos 4 piezas' }, { k: 'one' }, { k: 'onplate' }], sol: { parts: PAPA } },
        { k: 'quiz', ph: 'tanca', q: "Una peça és a <b>x = −22</b>. Si l'eix de simetria és x = 0, on va el seu reflex?|Una pieza está en <b>x = −22</b>. Si el eje de simetría es x = 0, ¿dónde va su reflejo?",
          opts: ['x = 22|x = 22', 'x = −22|x = −22', 'x = 44|x = 44'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Un cotxe és llarg en x. Quin mirall fas servir per passar les rodes d\'un costat del cotxe a l\'altre?|Un coche es largo en x. ¿Qué espejo usas para pasar las ruedas de un lado del coche al otro?',
          opts: ['Davant ↔ darrere (y)|Delante ↔ detrás (y)', 'Esquerra ↔ dreta (x)|Izquierda ↔ derecha (x)', 'Cap: les rodes no es poden emmirallar|Ninguno: las ruedas no se pueden reflejar'], a: 0,
          ex: "Els costats d'un cotxe llarg en x són a −y i a +y: el mirall en y passa d'un a l'altre.|Los lados de un coche largo en x están en −y y en +y: el espejo en y pasa de uno a otro." },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 4 · Projecte: la casa del futur ---------- */
    { id: 'm4-4', t: 'Projecte: la casa del futur|Proyecto: la casa del futuro', min: 45, proj: true, badge: 'm44_casa',
      learn: ['Un projecte gran es fa per parts i de baix a dalt: base, cos de la casa, teulada i, al final, els detalls.|Un proyecto grande se hace por partes y de abajo arriba: base, cuerpo de la casa, tejado y, al final, los detalles.',
        'Les finestres i la porta són peces fines enganxades a la façana: encara sense forats.|Las ventanas y la puerta son piezas finas pegadas a la fachada: todavía sin agujeros.',
        "Alinear, duplicar i emmirallar estalvien feina: una teulada o una finestra ben fetes es copien i es reflecteixen a l'altra banda.|Alinear, duplicar y reflejar ahorran trabajo: un tejado o una ventana bien hechos se copian y se reflejan al otro lado."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Per posar la teulada <b>recolzada</b> a sobre de les parets, quina opció d'Alinea fas servir?|Para poner el tejado <b>apoyado</b> encima de las paredes, ¿qué opción de Alinea usas?",
          opts: ['A sobre de la peça de sota|Encima de la pieza de debajo', 'Al centre de la placa|Al centro de la placa', 'A terra (z = 0)|Al suelo (z = 0)'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: 'Tens una finestra a <b>x = −14</b>. On va la seva bessona perquè la façana sigui <b>simètrica</b>?|Tienes una ventana en <b>x = −14</b>. ¿Dónde va su gemela para que la fachada sea <b>simétrica</b>?',
          opts: ['x = 14|x = 14', 'x = −28|x = −28', 'x = 0|x = 0'], a: 0, ex: 'El reflex de x = −14 és x = 14: només canvia el signe.|El reflejo de x = −14 es x = 14: solo cambia el signo.' },
        { k: 'story', ph: 'missio', who: 'both', scene: 'fab', title: 'La casa del futur|La casa del futuro',
          t: "Avui és el gran dia! Falta la peça estrella de la maqueta: <b>la casa del futur</b>. La Mireia la vol amb <b>finestres</b> per aprofitar el sol, una <b>teulada a dues aigües</b> i un <b>jardí</b> amb arbres. I com que és la casa de l'exposició, la façana ha de ser <b>simètrica</b>. Farem servir tot el que hem après: alinear, duplicar i el mirall!|¡Hoy es el gran día! Falta la pieza estrella de la maqueta: <b>la casa del futuro</b>. Mireia la quiere con <b>ventanas</b> para aprovechar el sol, un <b>tejado a dos aguas</b> y un <b>jardín</b> con árboles. Y como es la casa de la exposición, la fachada tiene que ser <b>simétrica</b>. ¡Usaremos todo lo que hemos aprendido: alinear, duplicar y el espejo!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'La casa del futur|La casa del futuro', t: 'El model, peça a peça|El modelo, pieza a pieza', media: { k: 'model', model: { parts: ARB1 } },
            x: "Aquesta és la casa que farem: un <b>jardí</b> (la base), el <b>cos</b> de la casa, una <b>teulada</b> de dues falques, una <b>porta</b> al mig, dues <b>finestres</b>, un camí i quatre <b>arbres</b>. Gira-la per veure-la de tots els costats.|Esta es la casa que haremos: un <b>jardín</b> (la base), el <b>cuerpo</b> de la casa, un <b>tejado</b> de dos cuñas, una <b>puerta</b> en el medio, dos <b>ventanas</b>, un camino y cuatro <b>árboles</b>. Gírala para verla desde todos los lados." },
          { k: 'Finestres sense forats|Ventanas sin agujeros', t: 'Peces fines a la façana|Piezas finas en la fachada', anim: 'm44fin',
            x: "Una finestra d'aquesta casa és una <b>caixa fina</b> de 2 mm enganxada a la façana: la meitat queda dins la paret i l'altra meitat sobresurt, així queda ben unida. Els <b>forats</b> de veritat els aprendrem a la unitat següent!|Una ventana de esta casa es una <b>caja fina</b> de 2 mm pegada a la fachada: la mitad queda dentro de la pared y la otra mitad sobresale, así queda bien unida. ¡Los <b>agujeros</b> de verdad los aprenderemos en la unidad siguiente!",
            tip: 'La façana del davant és a y = −15: les finestres hi van amb el centre a y = −15.|La fachada de delante está en y = −15: las ventanas van con el centro en y = −15.' },
          { k: 'Pla de treball|Plan de trabajo', t: 'De baix a dalt i per parts|De abajo arriba y por partes', anim: 'm44pla',
            x: "Com amb el robot, la casa es fa per parts: 1) el <b>cos</b> recolzat al jardí, 2) la <b>teulada</b>, 3) la <b>porta i les finestres</b>, 4) els <b>arbres</b> i, al final, 5) els <b>detalls</b> teus. Comprova cada part abans de passar a la següent.|Como con el robot, la casa se hace por partes: 1) el <b>cuerpo</b> apoyado en el jardín, 2) el <b>tejado</b>, 3) la <b>puerta y las ventanas</b>, 4) los <b>árboles</b> y, al final, 5) los <b>detalles</b> tuyos. Comprueba cada parte antes de pasar a la siguiente." },
          { k: 'Les eines|Las herramientas', t: 'Alinea, Duplica i Mirall|Alinea, Duplica y Espejo', media: { k: 'model', model: { parts: FIN1 } },
            x: "<b>Alinea</b> per centrar la casa i recolzar-la; <b>Duplica</b> per fer arbres o finestres iguals; <b>Mirall</b> per fer la segona aigua de la teulada i passar les finestres a l'altra banda.|<b>Alinea</b> para centrar la casa y apoyarla; <b>Duplica</b> para hacer árboles o ventanas iguales; <b>Espejo</b> para hacer la segunda agua del tejado y pasar las ventanas al otro lado.",
            bad: 'Faig cada finestra des de zero i a ull.|Hago cada ventana desde cero y a ojo.', good: "Faig una finestra ben feta, la duplico i l'emmirallo.|Hago una ventana bien hecha, la duplico y la reflejo." },
          { k: 'Simètrica?|¿Simétrica?', t: "L'eix passa per la porta|El eje pasa por la puerta", media: { k: 'model', model: { parts: FIN1 }, view: 'front' },
            x: "Mira la casa de davant: l'<b>eix de simetria</b> passa pel mig de la porta (x = 0). Si a l'esquerra hi ha una finestra a x = −15, a la dreta n'hi ha d'haver una a <b>x = 15</b>. La teulada també té dues meitats iguals.|Mira la casa de frente: el <b>eje de simetría</b> pasa por el medio de la puerta (x = 0). Si a la izquierda hay una ventana en x = −15, a la derecha tiene que haber una en <b>x = 15</b>. El tejado también tiene dos mitades iguales." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🏠', title: 'El plànol de la façana|El plano de la fachada', t: 'En paper quadriculat (cada quadret, 5 mm), amb un regle i colors:|En papel cuadriculado (cada cuadrito, 5 mm), con una regla y colores:',
          steps: ["Dibuixa l'eix de simetria: una línia vertical al mig del full.|Dibuja el eje de simetría: una línea vertical en el medio de la hoja.",
            "Dibuixa la meitat esquerra de la façana: la paret, mitja teulada, mitja porta i una finestra.|Dibuja la mitad izquierda de la fachada: la pared, medio tejado, media puerta y una ventana.",
            "Passa-la a l'altra banda comptant quadrets: si la finestra és a 3 quadrets de l'eix, l'altra també.|Pásala al otro lado contando cuadritos: si la ventana está a 3 cuadritos del eje, la otra también.",
            "Afegeix-hi un detall teu (plaques solars, una xemeneia, un porxo) i escriu les mides en mm.|Añade un detalle tuyo (placas solares, una chimenea, un porche) y escribe las medidas en mm."],
          tip: "Aquest plànol et servirà de guia per personalitzar la casa al final de la sessió.|Este plano te servirá de guía para personalizar la casa al final de la sesión." },
        { k: 'm3look', ph: 'prova', q: 'La façana d\'aquest bloc de pisos hauria de ser simètrica. Toca la finestra que <b>trenca la simetria</b>.|La fachada de este bloque de pisos tendría que ser simétrica. Toca la ventana que <b>rompe la simetría</b>.', model: { parts: PISOS }, view: 'front', pick: 'trenca',
          no: "Aquesta té la seva bessona a l'altra banda, a la mateixa distància de l'eix.|Esta tiene su gemela al otro lado, a la misma distancia del eje.",
          ex: "Les finestres de l'esquerra són a x = −15. La del mig de la dreta és a x = 21: per ser simètrica, hauria d'anar a x = 15.|Las ventanas de la izquierda están en x = −15. La del medio de la derecha está en x = 21: para ser simétrica, tendría que ir en x = 15." },
        { k: 'm3fix', ph: 'investiga', q: "Ui! La <b>teulada flota</b> 8 mm per sobre de les parets. Recolza-la a sobre de la casa.|¡Uy! El <b>tejado flota</b> 8 mm por encima de las paredes. Apóyalo encima de la casa.",
          start: { parts: FLOTA }, fix: ['t1', 't2'], palette: ['wedge'],
          checks: [{ k: 'part', t: 'wedge', at: [13, 0, 41.5], tol: 0.6, txt: 'La teulada comença a z = 34, on acaben les parets|El tejado empieza en z = 34, donde acaban las paredes' }, { k: 'zmax', v: 49, t: "Fa com a molt 49 mm d'alçada|Mide como mucho 49 mm de alto" }, { k: 'one' }],
          hint: "La teulada és un grup i ja està seleccionada: Alinea → A sobre de la peça de sota.|El tejado es un grupo y ya está seleccionado: Alinea → Encima de la pieza de debajo.", sol: { parts: FLOTA1 } },
        { k: 'move', ph: 'pausa', title: 'La casa amb el cos|La casa con el cuerpo', secs: 30, t: "Per parelles, l'un davant de l'altre: feu una <b>teulada a dues aigües</b> ajuntant les mans a dalt. Ara una <b>finestra</b> amb les mans (un quadrat) i, alhora, el company fa la seva bessona, com en un <b>mirall</b>!|Por parejas, uno delante del otro: haced un <b>tejado a dos aguas</b> juntando las manos arriba. Ahora una <b>ventana</b> con las manos (un cuadrado) y, a la vez, el compañero hace su gemela, ¡como en un <b>espejo</b>!" },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 1: la casa al jardí.</b> Porta el cos de la casa al <b>centre de la placa</b> i recolza'l a sobre del jardí.|<b>Paso 1: la casa en el jardín.</b> Lleva el cuerpo de la casa al <b>centro de la placa</b> y apóyalo encima del jardín.",
          start: { parts: CASA0 }, palette: ['box'], target: { parts: CASA1 },
          checks: [{ k: 'part', t: 'box', s: [50, 30, 30], at: [0, 0, 19], tol: 0.6, txt: 'La casa és centrada i comença a z = 4|La casa está centrada y empieza en z = 4' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca la casa blanca. Alinea → Al centre de la placa i, després, Alinea → A sobre de la peça de sota.|Toca la casa blanca. Alinea → Al centro de la placa y, después, Alinea → Encima de la pieza de debajo.", sol: { parts: CASA1 } },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 2: la teulada a dues aigües.</b> Ja hi ha la falca de la dreta. Fes-ne el reflex a l'esquerra: ha d'anar a <b>x = −13</b>.|<b>Paso 2: el tejado a dos aguas.</b> Ya está la cuña de la derecha. Haz su reflejo a la izquierda: tiene que ir en <b>x = −13</b>.",
          start: { parts: TEU0 }, palette: ['wedge'], view: 'front', target: { parts: TEU1 },
          checks: [{ k: 'count', t: 'wedge', min: 2, max: 2, txt: 'La teulada té dues aigües (2 falques)|El tejado tiene dos aguas (2 cuñas)' }, { k: 'sym', ax: 'x', th: 0.98, t: 'La casa és simètrica|La casa es simétrica' }, { k: 'match', target: { parts: TEU1 }, th: 0.96, t: 'La teulada és com el fantasma|El tejado es como el fantasma' }, { k: 'one' }],
          hint: "Toca la falca vermella i Mirall → Còpia a l'altre costat (x): surt a x = −13 i a la mateixa z (34). O bé: Duplica, Mirall → Esquerra ↔ dreta (x) i, a Posició, x = −13.|Toca la cuña roja y Espejo → Copia al otro lado (x): sale en x = −13 y a la misma z (34). O bien: Duplica, Espejo → Izquierda ↔ derecha (x) y, en Posición, x = −13.", sol: { parts: TEU1 } },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 3: les finestres.</b> La porta és al mig i la finestra de l'esquerra ja hi és. Fes la seva bessona emmirallada a <b>x = 15</b>.|<b>Paso 3: las ventanas.</b> La puerta está en el medio y la ventana de la izquierda ya está. Haz su gemela reflejada en <b>x = 15</b>.",
          start: { parts: FIN0 }, palette: ['box'], view: 'front', target: { parts: FIN1 },
          checks: [{ k: 'part', t: 'box', s: [10, 2, 10], at: [15, -15, 21], tol: 0.8, txt: 'Hi ha una finestra a x = 15|Hay una ventana en x = 15' }, { k: 'sym', ax: 'x', th: 0.98, t: 'La façana és simètrica|La fachada es simétrica' }, { k: 'one' }],
          hint: "Toca la finestra blava i Mirall → Còpia a l'altre costat (x): la bessona surt a x = 15. O bé: Duplica, Mirall → x i, a Posició, x = 15 (la y i la z no canvien).|Toca la ventana azul y Espejo → Copia al otro lado (x): la gemela sale en x = 15. O bien: Duplica, Espejo → x y, en Posición, x = 15 (la y y la z no cambian).", sol: { parts: FIN1 } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>Pas 4: els arbres.</b> Fes dos arbres a l'esquerra, a <b>x = −40</b> i <b>x = −24</b>, i passa'ls a la dreta amb el mirall: <b>x = 24</b> i <b>x = 40</b>.|<b>Paso 4: los árboles.</b> Haz dos árboles a la izquierda, en <b>x = −40</b> y <b>x = −24</b>, y pásalos a la derecha con el espejo: <b>x = 24</b> y <b>x = 40</b>.",
          start: { parts: ARB0 }, palette: ['cyl', 'cone'], target: { parts: ARB1 },
          checks: [{ k: 'count', t: 'cone', min: 4, max: 4, txt: 'Hi ha 4 arbres|Hay 4 árboles' }, { k: 'part', t: 'cone', at: [24, -36, null], tol: 1, txt: 'Un arbre a x = 24|Un árbol en x = 24' }, { k: 'part', t: 'cone', at: [40, -36, null], tol: 1, txt: 'Un arbre a x = 40|Un árbol en x = 40' }, { k: 'sym', ax: 'x', th: 0.98, t: 'Tot és simètric|Todo es simétrico' }],
          hint: "L'arbre és un grup. Duplica'l i posa'l a x = −24. Tria els dos arbres (Més peces) i Mirall → Còpia a l'altre costat (x). O bé: Duplica, Mirall → x i posa'ls a x = 32 (el centre dels dos).|El árbol es un grupo. Duplícalo y ponlo en x = −24. Elige los dos árboles (Más piezas) y Espejo → Copia al otro lado (x). O bien: Duplica, Espejo → x y ponlos en x = 32 (el centro de los dos).", sol: { parts: ARB1 } },
        { k: 'm3free', ph: 'crea', q: "<b>La teva casa del futur.</b> Afegeix-hi detalls teus (plaques solars, xemeneia, fanals…) i colors. Que continuï sent <b>simètrica</b>!|<b>Tu casa del futuro.</b> Añádele detalles tuyos (placas solares, chimenea, farolas…) y colores. ¡Que siga siendo <b>simétrica</b>!",
          name: 'La meva casa del futur|Mi casa del futuro', start: { parts: ARB1 }, palette: ['box', 'cyl', 'sph', 'cone', 'pyr', 'wedge', 'hex', 'torus', 'star', 'heart'],
          crit: ['Té totes les parts: jardí, casa, teulada, porta i finestres|Tiene todas las partes: jardín, casa, tejado, puerta y ventanas', "La façana és simètrica: l'eix passa per la porta|La fachada es simétrica: el eje pasa por la puerta", 'Hi has afegit almenys 2 detalls teus amb Alinea, Duplica o Mirall|Le has añadido al menos 2 detalles tuyos con Alinea, Duplica o Espejo', 'És una sola peça i toca la placa|Es una sola pieza y toca la placa'],
          checks: [{ k: 'count', min: 18, txt: 'Almenys 2 peces noves teves|Al menos 2 piezas nuevas tuyas' }, { k: 'sym', ax: 'x', th: 0.9, t: "La casa és simètrica d'esquerra a dreta|La casa es simétrica de izquierda a derecha" }, { k: 'colors', min: 3 }, { k: 'one' }, { k: 'onplate' }],
          sol: { parts: CASA_MEVA } },
        { k: 'quiz', ph: 'tanca', q: 'Quin és el millor ordre per construir la casa?|¿Cuál es el mejor orden para construir la casa?',
          opts: ['Cos, teulada, porta i finestres, i detalls|Cuerpo, tejado, puerta y ventanas, y detalles', 'Detalls, teulada i, al final, el cos|Detalles, tejado y, al final, el cuerpo', 'Totes les peces alhora i després moure-les|Todas las piezas a la vez y después moverlas'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Per fer la segona aigua de la teulada, què fas amb la primera falca?|Para hacer la segunda agua del tejado, ¿qué haces con la primera cuña?",
          opts: ["La duplico, li aplico el Mirall i la poso a l'altra banda|La duplico, le aplico el Espejo y la pongo al otro lado", 'La duplico i ja està|La duplico y ya está', 'La faig el doble de gran|La hago el doble de grande'], a: 0,
          ex: "Sense el Mirall, la segona falca baixaria cap al mateix costat i la teulada quedaria torta.|Sin el Espejo, la segunda cuña bajaría hacia el mismo lado y el tejado quedaría torcido." },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] };
})();

/* ── unitat 5 ── */
/* Tech 3D · Nivell 1 · unitat 5 «Forats» (m5-1 … m5-4)
   Contingut propi de Numi (format: scripts/TECH-3D.md). Fil narratiu: el Taller de Bit i la Nuvi, la impressora 3D, amb
   encàrrecs del barri: botons per a la merceria i daus per a la classe de mates (m5-1), clauers per a la fira solidària
   (m5-2), gotets per a l'hort i la capsa dels tresors (m5-3) i el segell de la biblioteca (m5-4, projecte).
   Idea central: un forat és una forma que TREU plàstic (semàntica de Tinkercad: tots els forats es resten de les peces
   sòlides). Forat passant, gravat (clot poc profund) i buidat per dins; parets i fons de 2 mm; mirall per al segell. */
Object.assign(TBADGE, {
  m5segell: { id: 'm5segell', ico: '🔏', n: 'Mestre/a dels forats|Maestro/a de los agujeros', d: "Has restat formes per fer forats, gravats i recipients, i has dissenyat un segell amb mirall.|Has restado formas para hacer agujeros, grabados y recipientes, y has diseñado un sello con espejo." }
});
COURSE_UNITS[5] = (() => {
  const P = (id, t, s, p, c, o = {}) => ({ id, t, s, p, r: o.r || [0, 0, 0], c, ...o });
  const H = (id, t, s, p, o = {}) => P(id, t, s, p, '#9AA3B5', { hole: true, ...o });
  // ---------- m5-1: monedes, botons i daus ----------
  const COIN = P('a1', 'cyl', [30, 30, 3], [0, 0, 1.5], '#F7C531');
  const COIN_H = { parts: [COIN, H('f1', 'cyl', [8, 8, 20], [0, 0, 10])] };
  const COIN_DEMO = { parts: [COIN, H('f1', 'cyl', [8, 8, 10], [0, 0, 1.5])] };
  const BUT = P('a1', 'cyl', [30, 30, 4], [0, 0, 2], '#EC5FA8');
  const bh = (x, y, id) => H(id, 'cyl', [4, 4, 20], [x, y, 10]);
  const BUT4 = { parts: [BUT, bh(-5, 5, 'f1'), bh(5, 5, 'f2'), bh(-5, -5, 'f3'), bh(5, -5, 'f4')] };
  const DIE = P('a1', 'box', [20, 20, 20], [0, 0, 10], '#F3F3EE');
  const DIE_BUIT = { parts: [DIE, H('f1', 'box', [16, 16, 16], [0, 0, 10])] };
  const pip = (x, y, id) => H(id, 'sph', [6, 6, 6], [x, y, 20]);
  const DIE3 = { parts: [DIE, pip(0, 0, 'f1'), pip(-5, -5, 'f2'), pip(5, 5, 'f3')] };
  const TROBA = [P('t1', 'box', [60, 34, 6], [0, 0, 3], '#F5893A'), P('t2', 'star', [18, 18, 4], [-16, 0, 8], '#F7C531', { n: 5 }), P('t3', 'cyl', [10, 10, 16], [16, 6, 14], '#EC5FA8'), H('forat', 'cyl', [10, 10, 14], [2, -6, 3])];
  const CUBF = [P('c1', 'box', [30, 30, 30], [0, 0, 15], '#7C5CFF'), H('c2', 'cyl', [12, 12, 40], [0, 0, 15])];
  // ---------- m5-2: clauers ----------
  const PL = P('a1', 'box', [40, 24, 4], [0, 0, 2], '#3D7BF4');
  const RING = (x, y, d = 5) => H('f1', 'cyl', [d, d, 20], [x, y, 10]);
  const RK = P('a1', 'cyl', [36, 36, 4], [0, 0, 2], '#F7C531');
  const KH = { parts: [RK, RING(0, 13), H('c1', 'heart', [14, 14, 3], [0, -2, 4.5])] };
  const KT = { parts: [PL, RING(-14, 0), H('t1', 'box', [14, 4, 3], [5, 5, 4.5]), H('t2', 'box', [4, 10, 3], [5, -2, 4.5])] };
  const TRES = [P('k1', 'box', [30, 20, 4], [-40, 0, 2], '#3D7BF4'), H('h1', 'cyl', [5, 5, 10], [-50, 0, 2]), P('k2', 'box', [30, 20, 1], [0, 0, 0.5], '#F7C531'), H('h2', 'cyl', [5, 5, 10], [-10, 0, 2]), P('k3', 'box', [30, 20, 4], [40, 0, 2], '#EC5FA8'), H('h3', 'cyl', [5, 5, 10], [25.5, 0, 2])];
  const RELL = [P('a1', 'box', [40, 24, 4], [0, 0, 2], '#2FB36D'), RING(-14, 0), P('t1', 'box', [14, 4, 2], [5, 5, 5], '#F3F3EE'), P('t2', 'box', [4, 10, 2], [5, -2, 5], '#F3F3EE')];
  // ---------- m5-3: tasses, testets i capses ----------
  const CUP = P('a1', 'cyl', [40, 40, 50], [0, 0, 25], '#14A3B8');
  const cupH = (d, z0 = 2, h = 50) => H('f1', 'cyl', [d, d, h], [0, 0, z0 + h / 2]);
  const TASSA = { parts: [CUP, cupH(36)] };
  const NANSA = { parts: [CUP, cupH(36), P('n1', 'torus', [24, 24, 5], [24, 0, 26], '#14A3B8', { r: [90, 0, 0] })] };
  const TALL = { parts: [CUP, cupH(36), H('tall', 'box', [50, 26, 60], [0, -13, 25])] };
  const BX = P('a1', 'box', [60, 40, 30], [0, 0, 15], '#F5893A');
  const CAPSA = { parts: [BX, H('f1', 'box', [56, 36, 30], [0, 0, 17])] };
  const CAPSA2 = [P('a1', 'box', [60, 40, 30], [-35, 0, 15], '#F5893A'), H('f1', 'box', [56, 36, 30], [-35, 0, 17]), P('t1', 'box', [60, 40, 2], [35, 0, 1], '#FFB561')];
  const TAPA = { parts: [...CAPSA2, P('t2', 'box', [55, 35, 4], [35, 0, 4], '#FFB561')] };
  // ---------- m5-4: el segell ----------
  const Fn = (z = 6, c = '#F3F3EE') => [P('f1', 'box', [4, 24, 2], [-6, 0, z], c), P('f2', 'box', [16, 4, 2], [0, 10, z], c), P('f3', 'box', [12, 4, 2], [-2, 0, z], c)];
  const Fm = (z = 6, c = '#F3F3EE') => [P('f1', 'box', [4, 24, 2], [6, 0, z], c), P('f2', 'box', [16, 4, 2], [0, 10, z], c), P('f3', 'box', [12, 4, 2], [2, 0, z], c)];
  const PLACA = (z = 2.5) => P('pl', 'box', [40, 40, 5], [0, 0, z], '#3D7BF4');
  const MANEC = P('m1', 'cyl', [24, 24, 26], [0, 0, 13], '#A0683A');
  const SEG = { parts: [MANEC, PLACA(28.5), ...Fm(32)] };
  const SEG_H = { parts: [...SEG.parts, H('fp', 'cyl', [5, 5, 30], [0, 0, 8], { r: [90, 0, 0] })] };
  const Ln = [P('l1', 'box', [4, 20, 3], [-4, 0, 1.5], '#E8453C'), P('l2', 'box', [12, 4, 3], [0, -8, 1.5], '#E8453C')];
  const Lm = [P('l1', 'box', [4, 20, 3], [4, 0, 1.5], '#E8453C'), P('l2', 'box', [12, 4, 3], [0, -8, 1.5], '#E8453C')];
  const FORMES = [P('b0', 'box', [110, 40, 3], [0, 0, 1.5], '#DDE3F2'), P('cor', 'heart', [20, 20, 3], [-40, 0, 4.5], '#EC5FA8'), P('estrella', 'star', [22, 22, 3], [-13, 0, 4.5], '#F7C531', { n: 5 }),
    P('l1', 'box', [4, 20, 3], [11, 0, 4.5], '#3D7BF4'), P('l2', 'box', [12, 4, 3], [15, -8, 4.5], '#3D7BF4'),
    P('f1', 'box', [4, 20, 3], [33, 0, 4.5], '#2FB36D'), P('f2', 'box', [14, 4, 3], [38, 8, 4.5], '#2FB36D'), P('f3', 'box', [10, 4, 3], [36, 0, 4.5], '#2FB36D')];
  const PAPER = [P('p0', 'box', [50, 50, 1], [0, 0, 0.5], '#FFFFFF'), ...Fn(1.5, '#1B2B6B').map(p => ({ ...p, s: [p.s[0], p.s[1], 1] }))];
  const CARA = (F) => ({ parts: [PLACA(), ...F] });
  const Fv = (z = 6, c = '#F3F3EE') => [P('f1', 'box', [4, 24, 2], [-6, 0, z], c), P('f2', 'box', [16, 4, 2], [0, -10, z], c), P('f3', 'box', [12, 4, 2], [-2, 0, z], c)];

  return {
  t: 'Forats|Agujeros', d: 'Restar formes|Restar formas', color: '#14A3B8',
  s: [
    /* ---------- Sessió 1 · Formes buides ---------- */
    { id: 'm5-1', t: 'Formes buides|Formas huecas', min: 45,
      learn: ["Un forat és una forma que treu plàstic: on toca una peça sòlida, la buida.|Un agujero es una forma que quita plástico: donde toca una pieza sólida, la vacía.",
        "Perquè un forat travessi una peça ha de ser més alt que la peça; si queda tot a dins, la buida sense que es vegi per fora.|Para que un agujero atraviese una pieza tiene que ser más alto que la pieza; si queda todo dentro, la vacía sin que se vea por fuera.",
        "El botó Resultat ensenya l'objecte final tal com el faria la Nuvi, amb els forats ja fets.|El botón Resultado enseña el objeto final tal como lo haría Nuvi, con los agujeros ya hechos."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "A la unitat passada vas fer servir el botó <b>Duplica</b>. Què fa?|En la unidad pasada usaste el botón <b>Duplica</b>. ¿Qué hace?",
          opts: ['Fa una còpia igual de la peça seleccionada|Hace una copia igual de la pieza seleccionada', 'Esborra la peça|Borra la pieza', 'Canvia el color de la peça|Cambia el color de la pieza'], a: 0,
          ex: "La còpia té la mateixa forma, mida i color, i apareix una mica més enllà. Avui també duplicarem forats!|La copia tiene la misma forma, medida y color, y aparece un poco más allá. ¡Hoy también duplicaremos agujeros!" },
        { k: 'quiz', ph: 'recorda', q: "Vols que una peça <b>toqui la placa</b>. Quina z poses a <b>Posició</b>?|Quieres que una pieza <b>toque la placa</b>. ¿Qué z pones en <b>Posición</b>?",
          opts: ['z = 0|z = 0', 'z = 10|z = 10', 'z = −5|z = −5'], a: 0,
          ex: "A Posició, la z és l'alçada de la base: amb z = 0 la peça comença just a la placa.|En Posición, la z es la altura de la base: con z = 0 la pieza empieza justo en la placa." },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'Encàrrecs amb forats|Encargos con agujeros',
          t: "La <b>Remei</b>, de la merceria de la plaça, ens ha demanat <b>botons</b>, i la mestra de mates vol <b>daus</b> per fer experiments d'atzar. Tots dos encàrrecs tenen una cosa en comú: <b>forats</b>! Fins ara només sabíem <b>afegir</b> plàstic. Avui aprendrem a <b>treure'n</b>. La Nuvi ja té ganes de veure-ho!|<b>Remei</b>, de la mercería de la plaza, nos ha pedido <b>botones</b>, y la maestra de mates quiere <b>dados</b> para hacer experimentos de azar. Los dos encargos tienen algo en común: ¡<b>agujeros</b>! Hasta ahora solo sabíamos <b>añadir</b> plástico. Hoy aprenderemos a <b>quitarlo</b>. ¡Nuvi ya tiene ganas de verlo!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Sòlid i forat|Sólido y agujero', t: "Una forma que treu en lloc d'afegir|Una forma que quita en lugar de añadir", anim: 'm5forat',
            x: "Al taller, cada peça pot ser <b>sòlida</b> (afegeix plàstic) o un <b>forat</b> (en treu). Un forat és com una goma d'esborrar amb forma: allà on toca una peça sòlida, la buida. Als models, els forats es veuen <b>grisos i ratllats</b>.|En el taller, cada pieza puede ser <b>sólida</b> (añade plástico) o un <b>agujero</b> (lo quita). Un agujero es como una goma de borrar con forma: allí donde toca una pieza sólida, la vacía. En los modelos, los agujeros se ven <b>grises y rayados</b>.",
            tip: "Qualsevol forma pot ser un forat: selecciona-la i toca el botó <b>Forat</b>. Si el tornes a tocar, torna a ser sòlida.|Cualquier forma puede ser un agujero: selecciónala y toca el botón <b>Agujero</b>. Si lo vuelves a tocar, vuelve a ser sólida." },
          { k: 'Forat passant|Agujero pasante', t: 'De banda a banda|De lado a lado', media: { k: 'model', model: COIN_DEMO, mode: 'edit' },
            x: "Perquè un forat <b>travessi</b> la peça, ha de ser <b>més alt</b> que la peça i sobresortir per dalt i per baix. Aquesta moneda fa 3 mm de gruix i el forat, 10 mm: la travessa segur.|Para que un agujero <b>atraviese</b> la pieza, tiene que ser <b>más alto</b> que la pieza y sobresalir por arriba y por abajo. Esta moneda mide 3 mm de grosor y el agujero, 10 mm: la atraviesa seguro.",
            tip: "Fes els forats una mica més llargs del que cal: així no queda cap capa prima que el tapi.|Haz los agujeros un poco más largos de lo necesario: así no queda ninguna capa fina que lo tape." },
          { k: 'Resultat|Resultado', t: 'Com quedarà de veritat|Cómo quedará de verdad', media: { k: 'model', model: COIN_DEMO },
            x: "Amb el botó <b>Resultat</b> (l'ull) veus l'objecte final, tal com el faria la Nuvi: el forat ja no és una peça, només hi queda el <b>buit</b>. Torna a tocar-lo per tornar a editar les peces.|Con el botón <b>Resultado</b> (el ojo) ves el objeto final, tal como lo haría Nuvi: el agujero ya no es una pieza, solo queda el <b>hueco</b>. Vuelve a tocarlo para volver a editar las piezas." },
          { k: 'Tres maneres|Tres maneras', t: 'Travessar, fer un clot o buidar per dins|Atravesar, hacer un hoyo o vaciar por dentro', anim: 'm5tipus',
            x: "Un forat pot <b>travessar</b> la peça (com el d'un botó), entrar-hi només una mica i deixar un <b>clot</b> (com els punts d'un dau) o quedar tot <b>a dins</b>: la peça és buida però per fora no es nota, com un ou de xocolata.|Un agujero puede <b>atravesar</b> la pieza (como el de un botón), entrar solo un poco y dejar un <b>hoyo</b> (como los puntos de un dado) o quedar todo <b>dentro</b>: la pieza es hueca pero por fuera no se nota, como un huevo de chocolate." },
          { k: 'Mida i lloc|Medida y lugar', t: 'Un forat es mou i es mesura com una peça|Un agujero se mueve y se mide como una pieza', media: { k: 'model', model: BUT4, view: 'top' },
            x: "A <b>Mida</b> poses el diàmetre del forat i a <b>Posició</b>, on va el seu centre. Aquest botó té quatre forats de <b>4 mm</b> a x = ±5 i y = ±5.|En <b>Medida</b> pones el diámetro del agujero y en <b>Posición</b>, dónde va su centro. Este botón tiene cuatro agujeros de <b>4 mm</b> en x = ±5 e y = ±5.",
            tip: 'Si dupliques un forat, la còpia també és un forat.|Si duplicas un agujero, la copia también es un agujero.' }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🟡', title: 'Forats a la plastilina|Agujeros en la plastilina', t: "Amb plastilina, una palla (canyeta) i un tap d'ampolla:|Con plastilina, una pajita y un tapón de botella:",
          steps: ["Fes una moneda de plastilina d'uns 4 cm d'ample i mig centímetre de gruix.|Haz una moneda de plastilina de unos 4 cm de ancho y medio centímetro de grosor.",
            "Clava-hi la palla de dalt a baix i treu-la: has fet un forat <b>passant</b>. Hi veus a través?|Clava la pajita de arriba abajo y sácala: has hecho un agujero <b>pasante</b>. ¿Ves a través?",
            "Fes una altra moneda i prem-hi el tap sense arribar a baix: és un <b>clot</b>, no un forat passant.|Haz otra moneda y aprieta el tapón sin llegar abajo: es un <b>hoyo</b>, no un agujero pasante.",
            'Compara-les: quina serviria per cosir un botó?|Compáralas: ¿cuál serviría para coser un botón?'],
          tip: "La palla ha de ser més llarga que el gruix de la plastilina, com els forats del taller.|La pajita tiene que ser más larga que el grosor de la plastilina, como los agujeros del taller." },
        { k: 'm3look', ph: 'prova', q: "En aquest model hi ha peces sòlides i un <b>forat</b>. Toca el forat (és gris i ratllat).|En este modelo hay piezas sólidas y un <b>agujero</b>. Toca el agujero (es gris y rayado).",
          model: { parts: TROBA }, pick: 'forat', yes: "Aquest és el forat!|¡Este es el agujero!", no: "Aquesta peça és sòlida: té color i afegeix plàstic. Busca la grisa i ratllada.|Esta pieza es sólida: tiene color y añade plástico. Busca la gris y rayada.",
          ex: "Prova el botó Resultat: el forat desapareix i deixa un buit a la placa taronja.|Prueba el botón Resultado: el agujero desaparece y deja un hueco en la placa naranja." },
        { k: 'm3look', ph: 'investiga', q: "El cub té un <b>forat</b> que el travessa de dalt a baix. Com serà l'objecte que farà la Nuvi?|El cubo tiene un <b>agujero</b> que lo atraviesa de arriba abajo. ¿Cómo será el objeto que hará Nuvi?",
          model: { parts: CUBF }, opts: [{ model: { parts: CUBF } }, { model: { parts: [CUBF[0], P('c2', 'cyl', [12, 12, 40], [0, 0, 20], '#7C5CFF')] } }, { model: { parts: [P('c2', 'cyl', [12, 12, 30], [0, 0, 15], '#7C5CFF')] } }], a: 0,
          ex: "El forat treu el plàstic on toca el cub: queda un cub amb un túnel rodó. El tros de forat que sobresurt no fa res, perquè allà no hi ha plàstic per treure.|El agujero quita el plástico donde toca el cubo: queda un cubo con un túnel redondo. El trozo de agujero que sobresale no hace nada, porque allí no hay plástico que quitar." },
        { k: 'm3fix', ph: 'investiga', q: "Ui! Al botó de la Remei, el forat del mig s'ha tornat <b>sòlid</b> i ara és un pal que sobresurt. <b>Arregla'l</b>: converteix-lo en forat.|¡Uy! En el botón de Remei, el agujero del medio se ha vuelto <b>sólido</b> y ahora es un palo que sobresale. <b>Arréglalo</b>: conviértelo en agujero.",
          start: { parts: [BUT, P('f1', 'cyl', [8, 8, 10], [0, 0, 5], '#7C5CFF')] }, fix: ['f1'], palette: ['hcyl'],
          checks: [{ k: 'count', t: 'cyl', hole: true, min: 1, txt: 'La peça del mig és un forat|La pieza del medio es un agujero' }, { k: 'hole', t: 'El botó té un forat que el travessa|El botón tiene un agujero que lo atraviesa' }, { k: 'zmax', v: 4, t: 'Res no sobresurt del botó (4 mm)|Nada sobresale del botón (4 mm)' }],
          hint: "El pal ja està seleccionat: toca Forat, a la barra de dalt de la vista.|El palo ya está seleccionado: toca Agujero, en la barra de arriba de la vista.",
          sol: { parts: [BUT, H('f1', 'cyl', [8, 8, 10], [0, 0, 5])] } },
        { k: 'move', ph: 'pausa', title: 'Sòlid o forat?|¿Sólido o agujero?', secs: 30, t: "Quan diguin <b>«sòlid!»</b>, fes-te gran i ample com un bloc. Quan diguin <b>«forat!»</b>, fes un cercle amb els braços com si fossis un túnel. Cada cop més de pressa!|Cuando digan <b>«¡sólido!»</b>, hazte grande y ancho como un bloque. Cuando digan <b>«¡agujero!»</b>, haz un círculo con los brazos como si fueras un túnel. ¡Cada vez más rápido!" },
        { k: 'm3build', ph: 'repte', q: "Primer encàrrec: una <b>moneda amb un forat</b> al mig, com les d'abans. Afegeix un <b>forat rodó</b> de <b>8 mm</b> al centre (x = 0, y = 0) i mira-ho amb <b>Resultat</b>.|Primer encargo: una <b>moneda con un agujero</b> en el medio, como las de antes. Añade un <b>agujero redondo</b> de <b>8 mm</b> en el centro (x = 0, y = 0) y míralo con <b>Resultado</b>.",
          start: { parts: [COIN] }, palette: ['hcyl'], target: COIN_H,
          checks: [{ k: 'match', target: COIN_H, th: 0.97, t: 'La moneda és com el fantasma|La moneda es como el fantasma' }, { k: 'hole', t: 'El forat travessa la moneda|El agujero atraviesa la moneda' }, { k: 'onplate' }],
          hint: "Toca «Forat rodó» a la paleta. A Mida posa 8 a la x i a la y; a Posició, x = 0 i y = 0. L'alçada de 20 mm ja travessa la moneda.|Toca «Agujero red.» en la paleta. En Medida pon 8 en la x y en la y; en Posición, x = 0 e y = 0. La altura de 20 mm ya atraviesa la moneda.",
          sol: COIN_H },
        { k: 'm3build', ph: 'repte', q: "Ara un <b>botó de quatre forats</b>. El primer forat ja hi és. <b>Duplica'l</b> i porta les còpies a <b>(5, 5)</b>, <b>(−5, −5)</b> i <b>(5, −5)</b>.|Ahora un <b>botón de cuatro agujeros</b>. El primer agujero ya está. <b>Duplícalo</b> y lleva las copias a <b>(5, 5)</b>, <b>(−5, −5)</b> y <b>(5, −5)</b>.",
          start: { parts: [BUT, bh(-5, 5, 'f1')] }, palette: ['hcyl'], target: BUT4,
          checks: [{ k: 'count', t: 'cyl', hole: true, min: 4, txt: 'Té 4 forats|Tiene 4 agujeros' }, { k: 'match', target: BUT4, th: 0.975, t: 'Els forats són al lloc del fantasma|Los agujeros están en el lugar del fantasma' }],
          hint: "Toca el forat i després Duplica. A la còpia, posa x = 5 i y = 5 a Posició. Repeteix-ho per a (−5, −5) i (5, −5).|Toca el agujero y después Duplica. En la copia, pon x = 5 e y = 5 en Posición. Repítelo para (−5, −5) y (5, −5).",
          sol: BUT4 },
        { k: 'm3build', ph: 'repte', q: "La mestra vol daus <b>lleugers</b>. <b>Buida el dau per dins</b> amb un forat cúbic de <b>16 mm</b>, sense que es vegi per fora: totes les parets han de fer 2 mm.|La maestra quiere dados <b>ligeros</b>. <b>Vacía el dado por dentro</b> con un agujero cúbico de <b>16 mm</b>, sin que se vea por fuera: todas las paredes tienen que medir 2 mm.",
          start: { parts: [DIE] }, palette: ['hbox'],
          checks: [{ k: 'hole', t: 'El dau és buit per dins|El dado es hueco por dentro' }, { k: 'vol', max: 4.7, t: 'Gasta menys plàstic: com a molt 4,7 cm³|Gasta menos plástico: como mucho 4,7 cm³' },
            { k: 'wall', min: 1.8, t: 'Totes les parets fan 2 mm o més|Todas las paredes miden 2 mm o más' }, { k: 'match', target: DIE_BUIT, th: 0.95, t: 'Per fora és un cub sencer|Por fuera es un cubo entero' }],
          hint: "Afegeix un Forat (el cub gris), posa-li 16 × 16 × 16 mm i col·loca'l a x = 0, y = 0, z = 2. Per fora no canvia res: mira'l en mode d'edició.|Añade un Agujero (el cubo gris), ponle 16 × 16 × 16 mm y colócalo en x = 0, y = 0, z = 2. Por fuera no cambia nada: míralo en modo de edición.",
          sol: DIE_BUIT },
        { k: 'm3build', ph: 'repte', extra: true, q: "Els <b>punts</b> del dau: fes la cara del <b>3</b>. El punt del mig ja hi és (una esfera que és forat). Duplica'l i posa les còpies a <b>(−5, −5)</b> i <b>(5, 5)</b>.|Los <b>puntos</b> del dado: haz la cara del <b>3</b>. El punto del medio ya está (una esfera que es agujero). Duplícalo y pon las copias en <b>(−5, −5)</b> y <b>(5, 5)</b>.",
          start: { parts: [DIE, pip(0, 0, 'f1')] }, palette: ['sph'], target: DIE3,
          checks: [{ k: 'count', t: 'sph', hole: true, min: 3, txt: 'Hi ha 3 punts buidats|Hay 3 puntos vaciados' }, { k: 'part', t: 'sph', hole: true, at: [-5, -5, null], tol: 1.2, txt: 'Hi ha un punt a (−5, −5)|Hay un punto en (−5, −5)' }, { k: 'part', t: 'sph', hole: true, at: [5, 5, null], tol: 1.2, txt: 'Hi ha un punt a (5, 5)|Hay un punto en (5, 5)' }],
          hint: "Duplica el punt del mig. A la còpia canvia només la x i la y: la z ja és la bona.|Duplica el punto del medio. En la copia cambia solo la x y la y: la z ya es la buena.",
          sol: DIE3 },
        { k: 'm3free', ph: 'crea', q: "<b>El botó de la merceria.</b> Dissenya el teu botó per a la Remei: tria la forma (rodona, de cor, d'estrella…), el color i fes-hi almenys <b>2 forats</b> per cosir-lo. Quan les comprovacions estiguin verdes, desa'l.|<b>El botón de la mercería.</b> Diseña tu botón para Remei: elige la forma (redonda, de corazón, de estrella…), el color y hazle al menos <b>2 agujeros</b> para coserlo. Cuando las comprobaciones estén en verde, guárdalo.",
          name: 'El meu botó|Mi botón', palette: ['cyl', 'box', 'heart', 'star', 'hex', 'torus', 'hcyl', 'hbox'],
          crit: ['Té almenys 2 forats que el travessen|Tiene al menos 2 agujeros que lo atraviesan', 'Els forats no toquen la vora: hi queda plàstic al voltant|Los agujeros no tocan el borde: queda plástico alrededor', 'És una sola peça i toca la placa|Es una sola pieza y toca la placa'],
          checks: [{ k: 'count', hole: true, min: 2, txt: 'Té almenys 2 forats|Tiene al menos 2 agujeros' }, { k: 'hole', t: 'Els forats travessen el botó|Los agujeros atraviesan el botón' }, { k: 'one' }, { k: 'onplate' }],
          sol: { parts: [P('a1', 'heart', [34, 34, 4], [0, 0, 2], '#E8453C'), H('f1', 'cyl', [4, 4, 20], [-4, 2, 10]), H('f2', 'cyl', [4, 4, 20], [4, 2, 10])] } },
        { k: 'quiz', ph: 'tanca', q: "Què fa una peça que és un <b>forat</b>?|¿Qué hace una pieza que es un <b>agujero</b>?", opts: ['Treu plàstic de les peces sòlides que toca|Quita plástico de las piezas sólidas que toca', 'Afegeix plàstic de color gris|Añade plástico de color gris', 'Fa que la peça floti|Hace que la pieza flote'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Una moneda fa <b>3 mm</b> de gruix. Com ha de ser el forat perquè la travessi?|Una moneda mide <b>3 mm</b> de grosor. ¿Cómo tiene que ser el agujero para que la atraviese?", opts: ['Més alt que la moneda: que sobresurti per dalt i per baix|Más alto que la moneda: que sobresalga por arriba y por abajo', "D'1 mm d'alçada|De 1 mm de altura", 'Tan ample com la moneda|Tan ancho como la moneda'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 2 · Un clauer ---------- */
    { id: 'm5-2', t: 'Un clauer|Un llavero', min: 45,
      learn: ["Un clauer resistent fa 3-4 mm de gruix i té el forat de l'anella amb almenys 2-3 mm de plàstic al voltant.|Un llavero resistente mide 3-4 mm de grosor y tiene el agujero de la anilla con al menos 2-3 mm de plástico alrededor.",
        "Gravar és fer un forat poc profund (1 mm) a la cara de dalt: el dibuix queda enfonsat i a sota hi queda plàstic.|Grabar es hacer un agujero poco profundo (1 mm) en la cara de arriba: el dibujo queda hundido y debajo queda plástico.",
        "Les lletres es construeixen amb formes senzilles, com caixes, amb traços d'almenys 3 mm d'ample.|Las letras se construyen con formas sencillas, como cajas, con trazos de al menos 3 mm de ancho."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Vols un forat que <b>travessi</b> una peça de 4 mm. Quina alçada li dones?|Quieres un agujero que <b>atraviese</b> una pieza de 4 mm. ¿Qué altura le das?",
          opts: ['Més de 4 mm, que sobresurti per dalt i per baix|Más de 4 mm, que sobresalga por arriba y por abajo', 'Exactament 2 mm|Exactamente 2 mm', 'No importa: un forat sempre ho travessa tot|No importa: un agujero siempre lo atraviesa todo'], a: 0,
          ex: "Si el forat és més curt que la peça, només fa un clot.|Si el agujero es más corto que la pieza, solo hace un hoyo." },
        { k: 'quiz', ph: 'recorda', q: "Com veus l'objecte final, amb els forats ja fets?|¿Cómo ves el objeto final, con los agujeros ya hechos?",
          opts: ["Amb el botó Resultat (l'ull)|Con el botón Resultado (el ojo)", 'Esborrant els forats|Borrando los agujeros', 'Girant la vista des de dalt|Girando la vista desde arriba'], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'fab', title: 'La fira solidària|La feria solidaria',
          t: "L'escola organitza una <b>fira solidària</b> per comprar llibres per a la biblioteca i ens ha encarregat <b>clauers</b> amb inicials. Un bon clauer ha de ser <b>fort</b>, tenir un <b>forat per a l'anella</b> amb prou plàstic al voltant i un dibuix o una lletra <b>gravats</b>. La Nuvi ja ha preparat el filament de colors!|La escuela organiza una <b>feria solidaria</b> para comprar libros para la biblioteca y nos ha encargado <b>llaveros</b> con iniciales. Un buen llavero tiene que ser <b>fuerte</b>, tener un <b>agujero para la anilla</b> con suficiente plástico alrededor y un dibujo o una letra <b>grabados</b>. ¡Nuvi ya ha preparado el filamento de colores!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: "Les parts d'un clauer|Las partes de un llavero", t: 'Gruix, anella i dibuix|Grosor, anilla y dibujo', anim: 'm5clauer',
            x: "Un clauer té tres coses importants: el <b>gruix</b> (3-4 mm, perquè no es doblegui), el <b>forat de l'anella</b> (uns 5 mm) amb una <b>vora</b> d'almenys 2-3 mm, i el <b>dibuix</b> o la lletra.|Un llavero tiene tres cosas importantes: el <b>grosor</b> (3-4 mm, para que no se doble), el <b>agujero de la anilla</b> (unos 5 mm) con un <b>borde</b> de al menos 2-3 mm, y el <b>dibujo</b> o la letra.",
            tip: "Si el forat queda massa a la vora, el plàstic que el voreja és tan prim que es trenca i l'anella s'escapa.|Si el agujero queda demasiado en el borde, el plástico que lo rodea es tan fino que se rompe y la anilla se escapa." },
          { k: 'Gravar|Grabar', t: 'Un forat que no travessa|Un agujero que no atraviesa', media: { k: 'model', model: KH },
            x: "Per <b>gravar</b> un dibuix, converteixes la forma en forat i la col·loques perquè només entri <b>1 mm</b> per dalt. Si el clauer fa 4 mm, la base del cor va a <b>z = 3</b>: a sota queden 3 mm de plàstic.|Para <b>grabar</b> un dibujo, conviertes la forma en agujero y la colocas para que solo entre <b>1 mm</b> por arriba. Si el llavero mide 4 mm, la base del corazón va en <b>z = 3</b>: debajo quedan 3 mm de plástico.",
            tip: "Mira-ho des del costat: el forat ha de sobresortir per dalt i no arribar a baix.|Míralo desde el lado: el agujero tiene que sobresalir por arriba y no llegar abajo." },
          { k: 'Gravat o relleu|Grabado o relieve', t: 'Enfonsat o sobresortint|Hundido o sobresaliendo', anim: 'm5relleu',
            x: "El dibuix pot anar <b>gravat</b> (un forat poc profund: queda enfonsat) o en <b>relleu</b> (peces sòlides a sobre: sobresurt). Tots dos es noten amb el dit i es veuen encara millor si el dibuix és d'un altre color.|El dibujo puede ir <b>grabado</b> (un agujero poco profundo: queda hundido) o en <b>relieve</b> (piezas sólidas encima: sobresale). Los dos se notan con el dedo y se ven aún mejor si el dibujo es de otro color." },
          { k: 'Lletres amb formes|Letras con formas', t: 'Una T amb dues caixes|Una T con dos cajas', media: { k: 'model', model: KT, view: 'top' },
            x: "El taller no té lletres, però les pots construir amb <b>caixes</b>: una T són dues caixes, una L també, una E en són quatre. Fes els traços d'almenys <b>3 mm</b> d'ample: si són més prims, la Nuvi no els marca bé.|El taller no tiene letras, pero las puedes construir con <b>cajas</b>: una T son dos cajas, una L también, una E son cuatro. Haz los trazos de al menos <b>3 mm</b> de ancho: si son más finos, Nuvi no los marca bien.",
            tip: "Quan la lletra estigui feta, agrupa-la: així la mous tota alhora.|Cuando la letra esté hecha, agrúpala: así la mueves toda a la vez." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '✂️', title: 'El clauer en paper|El llavero en papel', t: 'En paper quadriculat (cada quadret, 5 mm) i amb un regle:|En papel cuadriculado (cada cuadrito, 5 mm) y con una regla:',
          steps: ["Dibuixa el contorn del clauer a mida real: per exemple, 8 × 5 quadrets (40 × 25 mm).|Dibuja el contorno del llavero a tamaño real: por ejemplo, 8 × 5 cuadritos (40 × 25 mm).",
            "Marca el forat de l'anella: un cercle d'un quadret, a un quadret de la vora.|Marca el agujero de la anilla: un círculo de un cuadrito, a un cuadrito del borde.",
            "Dissenya la teva inicial només amb rectangles d'almenys mig quadret d'ample.|Diseña tu inicial solo con rectángulos de al menos medio cuadrito de ancho.",
            "Pinta d'un color el que serà gravat i d'un altre el forat que travessa.|Pinta de un color lo que será grabado y de otro el agujero que atraviesa."],
          tip: "Retalla'l i comprova amb una anella o un clip si el forat té prou vora.|Recórtalo y comprueba con una anilla o un clip si el agujero tiene suficiente borde." },
        { k: 'm3look', ph: 'prova', q: "Quin d'aquests clauers aguantarà millor penjat a la motxilla? Gira'ls i mira'ls de prop.|¿Cuál de estos llaveros aguantará mejor colgado en la mochila? Gíralos y míralos de cerca.",
          model: { parts: TRES }, mode: 'result', opts: ['El blau|El azul', 'El groc|El amarillo', 'El rosa|El rosa'], keep: true, a: 0,
          ex: "El blau fa 4 mm de gruix i el forat té vora per tots costats. El groc només fa 1 mm i es doblegaria; al rosa, el forat ha trencat la vora i l'anella s'escaparia.|El azul mide 4 mm de grosor y el agujero tiene borde por todos los lados. El amarillo solo mide 1 mm y se doblaría; en el rosa, el agujero ha roto el borde y la anilla se escaparía." },
        { k: 'm3fix', ph: 'investiga', q: "Aquest forat de l'anella s'ha menjat la <b>vora</b> del clauer: l'anella s'escaparia! Mou el forat cap a dins, a <b>x = −14</b>.|Este agujero de la anilla se ha comido el <b>borde</b> del llavero: ¡la anilla se escaparía! Mueve el agujero hacia dentro, a <b>x = −14</b>.",
          start: { parts: [PL, H('f1', 'cyl', [6, 6, 20], [-18.5, 0, 10])] }, fix: ['f1'], palette: ['hcyl'],
          checks: [{ k: 'hole', t: "El forat de l'anella és tancat|El agujero de la anilla está cerrado" }, { k: 'part', t: 'cyl', hole: true, at: [-14, 0, null], tol: 1.5, txt: 'El forat és a x = −14: queda vora per tots costats|El agujero está en x = −14: queda borde por todos los lados' }],
          hint: "El forat ja està seleccionat: a Posició, posa x = −14 i y = 0.|El agujero ya está seleccionado: en Posición, pon x = −14 e y = 0.",
          sol: { parts: [PL, H('f1', 'cyl', [6, 6, 20], [-14, 0, 10])] } },
        { k: 'move', ph: 'pausa', title: 'Lletres amb el cos|Letras con el cuerpo', secs: 30, t: "Fes una <b>T</b> amb els braços oberts, una <b>L</b> amb un braç amunt i l'altre al costat, una <b>I</b> ben estirat… Quina lletra podeu fer entre dos?|Haz una <b>T</b> con los brazos abiertos, una <b>L</b> con un brazo arriba y el otro al lado, una <b>I</b> bien estirado… ¿Qué letra podéis hacer entre dos?" },
        { k: 'm3build', ph: 'repte', q: "Comencem un clauer: fes-li el <b>forat de l'anella</b>, de <b>5 mm</b>, a <b>x = −14, y = 0</b>.|Empezamos un llavero: hazle el <b>agujero de la anilla</b>, de <b>5 mm</b>, en <b>x = −14, y = 0</b>.",
          start: { parts: [PL] }, palette: ['hcyl'], target: { parts: [PL, RING(-14, 0)] },
          checks: [{ k: 'hole', t: 'El forat travessa el clauer|El agujero atraviesa el llavero' }, { k: 'part', t: 'cyl', hole: true, at: [-14, 0, null], tol: 1.5, txt: 'El forat és a x = −14, y = 0|El agujero está en x = −14, y = 0' }, { k: 'vol', min: 3.4, t: "El forat és petit (uns 5 mm, no 20)|El agujero es pequeño (unos 5 mm, no 20)" }],
          hint: "Afegeix un Forat rodó, posa-li 5 × 5 mm a Mida i col·loca'l a x = −14, y = 0.|Añade un Agujero redondo, ponle 5 × 5 mm en Medida y colócalo en x = −14, y = 0.",
          sol: { parts: [PL, RING(-14, 0)] } },
        { k: 'm3build', ph: 'repte', q: "Un clauer rodó amb un <b>cor gravat</b>. Afegeix un cor, converteix-lo en <b>forat</b>, fes-lo de <b>14 × 14 mm</b> i posa'l a (0, −2) perquè entri només <b>1 mm</b>.|Un llavero redondo con un <b>corazón grabado</b>. Añade un corazón, conviértelo en <b>agujero</b>, hazlo de <b>14 × 14 mm</b> y ponlo en (0, −2) para que entre solo <b>1 mm</b>.",
          start: { parts: [RK, RING(0, 13)] }, palette: ['heart'], target: KH,
          checks: [{ k: 'count', t: 'heart', hole: true, min: 1, txt: 'Hi ha un cor que és forat|Hay un corazón que es agujero' }, { k: 'match', target: KH, th: 0.983, t: 'El cor està gravat 1 mm, com al fantasma|El corazón está grabado 1 mm, como en el fantasma' }],
          hint: "Afegeix el cor i toca Forat. A Mida: 14 i 14. A Posició: x = 0, y = −2 i z = 3 (el clauer fa 4 mm: així només entra 1 mm).|Añade el corazón y toca Agujero. En Medida: 14 y 14. En Posición: x = 0, y = −2 y z = 3 (el llavero mide 4 mm: así solo entra 1 mm).",
          sol: KH },
        { k: 'm3build', ph: 'repte', q: "Ara una inicial: <b>grava una T</b> amb dues caixes que siguin forat. Barra: <b>14 × 4 mm</b> a (5, 5). Pal: <b>4 × 10 mm</b> a (5, −2). Totes dues amb <b>z = 3</b>.|Ahora una inicial: <b>graba una T</b> con dos cajas que sean agujero. Barra: <b>14 × 4 mm</b> en (5, 5). Palo: <b>4 × 10 mm</b> en (5, −2). Las dos con <b>z = 3</b>.",
          start: { parts: [PL, RING(-14, 0)] }, palette: ['hbox'], target: KT,
          checks: [{ k: 'count', t: 'box', hole: true, min: 2, txt: 'La T té dues caixes que són forat|La T tiene dos cajas que son agujero' }, { k: 'match', target: KT, th: 0.985, t: 'La T està gravada com al fantasma|La T está grabada como en el fantasma' }],
          hint: "Afegeix un Forat (cub) per a la barra i un altre per al pal. Recorda la z = 3 a totes dues: si no, travessarien el clauer.|Añade un Agujero (cubo) para la barra y otro para el palo. Recuerda la z = 3 en las dos: si no, atravesarían el llavero.",
          sol: KT },
        { k: 'm3fix', ph: 'repte', extra: true, q: "Aquest clauer és fi com un full: només fa <b>1,2 mm</b> i es doblegaria. Fes-lo de <b>4 mm</b> de gruix.|Este llavero es fino como una hoja: solo mide <b>1,2 mm</b> y se doblaría. Hazlo de <b>4 mm</b> de grosor.",
          start: { parts: [P('a1', 'box', [40, 24, 1.2], [0, 0, 0.6], '#2FB36D'), RING(-14, 0)] }, fix: ['a1'], palette: ['box'],
          checks: [{ k: 'size', ax: 'z', v: 4, tol: 0.3, t: 'Fa 4 mm de gruix|Mide 4 mm de grosor' }, { k: 'wall', min: 1.8, t: 'Res no és més prim de 2 mm|Nada es más fino de 2 mm' }],
          hint: "El clauer ja està seleccionat: a Mida, posa 4 a la z.|El llavero ya está seleccionado: en Medida, pon 4 en la z.",
          sol: { parts: [P('a1', 'box', [40, 24, 4], [0, 0, 2], '#2FB36D'), RING(-14, 0)] } },
        { k: 'm3free', ph: 'crea', q: "<b>El meu clauer per a la fira.</b> Tria la forma, fes-li el forat de l'anella amb vora i grava-hi (o posa-hi en relleu) la teva inicial o un dibuix. Quan tot estigui verd, desa'l.|<b>Mi llavero para la feria.</b> Elige la forma, hazle el agujero de la anilla con borde y graba (o pon en relieve) tu inicial o un dibujo. Cuando todo esté en verde, guárdalo.",
          name: 'El meu clauer|Mi llavero', palette: ['box', 'cyl', 'heart', 'star', 'hex', 'hcyl', 'hbox'],
          crit: ["Té el forat de l'anella amb 2-3 mm de vora|Tiene el agujero de la anilla con 2-3 mm de borde", 'Fa 3-4 mm de gruix|Mide 3-4 mm de grosor', 'Té una inicial o un dibuix gravat o en relleu|Tiene una inicial o un dibujo grabado o en relieve'],
          checks: [{ k: 'hole', t: "Té un forat per a l'anella|Tiene un agujero para la anilla" }, { k: 'zmax', v: 6, t: 'Fa com a molt 6 mm de gruix|Mide como mucho 6 mm de grosor' }, { k: 'wall', min: 1.8, t: 'Res no és més prim de 2 mm|Nada es más fino de 2 mm' }, { k: 'one' }, { k: 'onplate' }],
          sol: { parts: [P('a1', 'heart', [36, 36, 4], [0, 0, 2], '#EC5FA8'), H('f1', 'cyl', [5, 5, 20], [-7, 8, 10]), H('e1', 'star', [12, 12, 3], [3, -3, 4.5], { n: 5 })] } },
        { k: 'quiz', ph: 'tanca', q: "Un clauer fa <b>4 mm</b>. Vols gravar-hi una lletra d'<b>1 mm</b> de fondària. A quina z poses la base del forat?|Un llavero mide <b>4 mm</b>. Quieres grabar una letra de <b>1 mm</b> de profundidad. ¿En qué z pones la base del agujero?", opts: ['z = 3|z = 3', 'z = 0|z = 0', 'z = 4|z = 4'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Per què el forat de l'anella no pot tocar la vora?|¿Por qué el agujero de la anilla no puede tocar el borde?", opts: ['Perquè el plàstic del voltant seria massa prim i es trencaria|Porque el plástico de alrededor sería demasiado fino y se rompería', 'Perquè la Nuvi no sap fer forats rodons|Porque Nuvi no sabe hacer agujeros redondos', 'Perquè els forats sempre van al mig|Porque los agujeros siempre van en el medio'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 3 · Caixes i tasses ---------- */
    { id: 'm5-3', t: 'Caixes i tasses|Cajas y tazas', min: 45,
      learn: ["Una tassa és un cilindre amb un forat cilíndric més estret a dins: la paret fa la meitat de la diferència de diàmetres.|Una taza es un cilindro con un agujero cilíndrico más estrecho dentro: la pared mide la mitad de la diferencia de diámetros.",
        "Si el forat comença a z = 2, el recipient té un fons de 2 mm; si comença a z = 0, no en té.|Si el agujero empieza en z = 2, el recipiente tiene un fondo de 2 mm; si empieza en z = 0, no tiene.",
        "Perquè una tapa encaixi, la part que entra ha de ser una mica més petita que l'obertura: uns 0,5 mm de marge per costat.|Para que una tapa encaje, la parte que entra tiene que ser un poco más pequeña que la abertura: unos 0,5 mm de margen por lado."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Què passa si un forat queda <b>tot a dins</b> d'una peça?|¿Qué pasa si un agujero queda <b>todo dentro</b> de una pieza?",
          opts: ['La peça queda buida per dins, però per fora no es nota|La pieza queda hueca por dentro, pero por fuera no se nota', 'El forat sobresurt per fora|El agujero sobresale por fuera', 'La peça desapareix|La pieza desaparece'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: "Per gravar una lletra 1 mm en un clauer de 4 mm, on ha de començar el forat?|Para grabar una letra 1 mm en un llavero de 4 mm, ¿dónde tiene que empezar el agujero?",
          opts: ['A z = 3|En z = 3', 'A z = 0|En z = 0', 'A z = 1|En z = 1'], a: 0, ex: "4 − 1 = 3: el forat comença a 3 mm i treu el mil·límetre de dalt.|4 − 1 = 3: el agujero empieza a 3 mm y quita el milímetro de arriba." },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: "L'hort i la capsa dels tresors|El huerto y la caja de los tesoros",
          t: "L'<b>hort de l'escola</b> necessita <b>gotets</b> per fer germinar llavors, i la classe de 4t vol una <b>capsa amb tapa</b> per guardar-hi els seus tresors. Tots dos són <b>recipients</b>: peces buides amb parets i fons. El secret? Un forat gran que <b>no arriba a baix de tot</b>.|El <b>huerto de la escuela</b> necesita <b>vasitos</b> para hacer germinar semillas, y la clase de 4.º quiere una <b>caja con tapa</b> para guardar sus tesoros. Los dos son <b>recipientes</b>: piezas huecas con paredes y fondo. ¿El secreto? Un agujero grande que <b>no llega abajo del todo</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Una tassa|Una taza', t: 'Un cilindre menys un cilindre|Un cilindro menos un cilindro', media: { k: 'model', model: TASSA, mode: 'edit' },
            x: "Per fer una tassa poses un <b>cilindre sòlid</b> i, a dins, un <b>forat cilíndric</b> una mica més estret. El forat buida l'interior i només queden les <b>parets</b> i el <b>fons</b>.|Para hacer una taza pones un <b>cilindro sólido</b> y, dentro, un <b>agujero cilíndrico</b> un poco más estrecho. El agujero vacía el interior y solo quedan las <b>paredes</b> y el <b>fondo</b>.",
            tip: "Quan acabis, toca Resultat: és el moment màgic!|Cuando acabes, toca Resultado: ¡es el momento mágico!" },
          { k: 'La paret|La pared', t: 'Quant fa de gruix?|¿Cuánto mide de grosor?', anim: 'm5paret',
            x: "Si el cilindre fa <b>40 mm</b> de diàmetre i el forat <b>36 mm</b>, sobren 4 mm, que es reparteixen entre els dos costats: la paret fa <b>2 mm</b>. És a dir: (diàmetre de fora − diàmetre de dins) ÷ 2.|Si el cilindro mide <b>40 mm</b> de diámetro y el agujero <b>36 mm</b>, sobran 4 mm, que se reparten entre los dos lados: la pared mide <b>2 mm</b>. Es decir: (diámetro de fuera − diámetro de dentro) ÷ 2.",
            tip: "Al taller fem parets d'almenys 2 mm: més primes, es trenquen.|En el taller hacemos paredes de al menos 2 mm: más finas, se rompen." },
          { k: 'El fons|El fondo', t: 'Que no arribi a baix|Que no llegue abajo', media: { k: 'model', model: TALL },
            x: "Si el forat comença a <b>z = 0</b>, travessa el fons i la tassa queda sense cul! Si comença a <b>z = 2</b>, a sota hi queden 2 mm de plàstic: el <b>fons</b>. Aquí veus una tassa tallada per la meitat.|Si el agujero empieza en <b>z = 0</b>, atraviesa el fondo y ¡la taza queda sin culo! Si empieza en <b>z = 2</b>, debajo quedan 2 mm de plástico: el <b>fondo</b>. Aquí ves una taza cortada por la mitad.",
            tip: "Per tallar-la, hem fet servir un altre forat: una caixa que treu la meitat de davant.|Para cortarla, hemos usado otro agujero: una caja que quita la mitad de delante." },
          { k: 'Caixes|Cajas', t: 'El mateix truc amb caixes|El mismo truco con cajas', media: { k: 'model', model: CAPSA },
            x: "Amb una <b>caixa</b> és igual: una caixa de 60 × 40 mm i un forat de 56 × 36 mm deixen parets de <b>2 mm</b> pels quatre costats. El forat comença a z = 2 per fer el fons.|Con una <b>caja</b> es igual: una caja de 60 × 40 mm y un agujero de 56 × 36 mm dejan paredes de <b>2 mm</b> por los cuatro lados. El agujero empieza en z = 2 para hacer el fondo." },
          { k: 'La tapa|La tapa', t: 'Encaixar amb marge|Encajar con margen', anim: 'm5tapa',
            x: "Una tapa té una placa i un <b>tap</b> que entra a l'obertura. Si l'obertura fa 56 mm i el tap també, <b>no entrarà</b>: les peces impreses no surten exactes. Fem el tap <b>1 mm més petit</b>: 0,5 mm de marge per costat.|Una tapa tiene una placa y un <b>tapón</b> que entra en la abertura. Si la abertura mide 56 mm y el tapón también, <b>no entrará</b>: las piezas impresas no salen exactas. Hacemos el tapón <b>1 mm más pequeño</b>: 0,5 mm de margen por lado.",
            tip: "Aquest espai de més es diu marge o folgança.|Este espacio de más se llama margen u holgura." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '📏', title: 'Mesura una tassa de veritat|Mide una taza de verdad', t: 'Amb un got o una tassa (de plàstic o de ceràmica) i un regle:|Con un vaso o una taza (de plástico o de cerámica) y una regla:',
          steps: ['Mesura el diàmetre de fora, de vora a vora.|Mide el diámetro de fuera, de borde a borde.', 'Mesura el diàmetre de dins, a la boca.|Mide el diámetro de dentro, en la boca.',
            'Calcula el gruix de la paret: (fora − dins) ÷ 2.|Calcula el grosor de la pared: (fuera − dentro) ÷ 2.', 'Mira el fons: és més gruixut o més prim que la paret? Per què creus que és així?|Mira el fondo: ¿es más grueso o más fino que la pared? ¿Por qué crees que es así?'],
          tip: "Si el regle no hi arriba bé, posa la tassa de cap per avall sobre un paper i dibuixa'n el contorn.|Si la regla no llega bien, pon la taza boca abajo sobre un papel y dibuja su contorno." },
        { k: 'm3look', ph: 'prova', q: "Aquesta tassa fa <b>40 mm</b> de diàmetre per fora i el forat en fa <b>34</b>. Quin gruix té la paret?|Esta taza mide <b>40 mm</b> de diámetro por fuera y el agujero mide <b>34</b>. ¿Qué grosor tiene la pared?",
          model: { parts: [CUP, cupH(34)] }, view: 'top', opts: ['3 mm|3 mm', '6 mm|6 mm', '34 mm|34 mm'], a: 0,
          ex: "(40 − 34) ÷ 2 = 3 mm: la diferència es reparteix entre els dos costats.|(40 − 34) ÷ 2 = 3 mm: la diferencia se reparte entre los dos lados." },
        { k: 'm3fix', ph: 'investiga', q: "Aquesta tassa té el forat massa avall: <b>travessa el fons</b> i tot el que hi posis caurà! Arregla-la perquè tingui un fons de <b>2 mm</b>.|Esta taza tiene el agujero demasiado abajo: <b>atraviesa el fondo</b> ¡y todo lo que metas se caerá! Arréglala para que tenga un fondo de <b>2 mm</b>.",
          start: { parts: [CUP, H('f1', 'cyl', [36, 36, 54], [0, 0, 25])] }, fix: ['f1'], palette: ['hcyl'],
          checks: [{ k: 'flatbase', min: 1000, t: 'Té fons: la base és plena|Tiene fondo: la base está llena' }, { k: 'wall', min: 1.8, t: 'Parets i fons de 2 mm o més|Paredes y fondo de 2 mm o más' }, { k: 'hole', t: 'Continua buida per dins|Sigue hueca por dentro' }],
          hint: "El forat ja està seleccionat: a Posició, posa z = 2.|El agujero ya está seleccionado: en Posición, pon z = 2.",
          sol: { parts: [CUP, H('f1', 'cyl', [36, 36, 54], [0, 0, 29])] } },
        { k: 'move', ph: 'pausa', title: 'Mans de terrissaire|Manos de alfarero', secs: 30, t: "Fes veure que tens fang a les mans: fes una bola, aixafa-la, clava-hi els polzes i obre un gotet. Ara fes-lo girar com al torn… i ensenya'l als companys!|Haz como si tuvieras barro en las manos: haz una bola, aplástala, clava los pulgares y abre un vasito. Ahora hazlo girar como en el torno… ¡y enséñaselo a los compañeros!" },
        { k: 'm3build', ph: 'repte', q: "Fes una <b>tassa</b>: buida el cilindre amb un forat rodó de <b>36 mm</b> que comenci a <b>z = 2</b> i sigui més alt que la tassa.|Haz una <b>taza</b>: vacía el cilindro con un agujero redondo de <b>36 mm</b> que empiece en <b>z = 2</b> y sea más alto que la taza.",
          start: { parts: [CUP] }, palette: ['hcyl'], target: TASSA,
          checks: [{ k: 'match', target: TASSA, th: 0.8, t: 'Es veu com la tassa fantasma|Se ve como la taza fantasma' }, { k: 'flatbase', min: 1000, t: 'Té fons|Tiene fondo' }, { k: 'wall', min: 1.8, t: 'Parets i fons de 2 mm|Paredes y fondo de 2 mm' }, { k: 'vol', max: 17.5, t: 'Gasta poc plàstic: com a molt 17,5 cm³|Gasta poco plástico: como mucho 17,5 cm³' }],
          hint: "Forat rodó de 36 × 36 mm i, a la z de Mida, 50 o més. A Posició: x = 0, y = 0, z = 2.|Agujero redondo de 36 × 36 mm y, en la z de Medida, 50 o más. En Posición: x = 0, y = 0, z = 2.",
          sol: TASSA },
        { k: 'm3build', ph: 'repte', q: "Posa-li una <b>nansa</b>! Afegeix un <b>anell</b> de 24 mm i gruix 5, dret (gir de 90° en x), enganxat al costat de la tassa.|¡Ponle un <b>asa</b>! Añade un <b>anillo</b> de 24 mm y grosor 5, de pie (giro de 90° en x), pegado al lado de la taza.",
          start: { parts: TASSA.parts }, palette: ['torus'], target: NANSA,
          checks: [{ k: 'count', t: 'torus', min: 1, txt: 'Té una nansa (un anell)|Tiene un asa (un anillo)' }, { k: 'one', t: 'La nansa està enganxada a la tassa|El asa está pegada a la taza' }, { k: 'match', target: NANSA, th: 0.95, t: 'La nansa és al lloc del fantasma|El asa está en el lugar del fantasma' }],
          hint: "Anell: a Mida, 24, 24 i 5. A Gir, x = 90. A Posició: x = 24, y = 0, z = 14. El tros que entra a la tassa el treu el forat!|Anillo: en Medida, 24, 24 y 5. En Giro, x = 90. En Posición: x = 24, y = 0, z = 14. ¡El trozo que entra en la taza lo quita el agujero!",
          sol: NANSA },
        { k: 'm3build', ph: 'repte', q: "La <b>capsa dels tresors</b>: buida-la amb un forat (cub) de <b>56 × 36 mm</b> que comenci a <b>z = 2</b>. Així tindrà parets i fons de 2 mm.|La <b>caja de los tesoros</b>: vacíala con un agujero (cubo) de <b>56 × 36 mm</b> que empiece en <b>z = 2</b>. Así tendrá paredes y fondo de 2 mm.",
          start: { parts: [BX] }, palette: ['hbox'], target: CAPSA,
          checks: [{ k: 'match', target: CAPSA, th: 0.85, t: 'Es veu com la capsa fantasma|Se ve como la caja fantasma' }, { k: 'wall', min: 1.8, t: 'Parets i fons de 2 mm|Paredes y fondo de 2 mm' }, { k: 'flatbase', min: 2000, t: 'Té fons|Tiene fondo' }, { k: 'vol', max: 19, t: 'Gasta poc plàstic: com a molt 19 cm³|Gasta poco plástico: como mucho 19 cm³' }],
          hint: "Forat (cub) de 56 × 36 mm i 30 d'alçada (o més). A Posició: x = 0, y = 0, z = 2.|Agujero (cubo) de 56 × 36 mm y 30 de altura (o más). En Posición: x = 0, y = 0, z = 2.",
          sol: CAPSA },
        { k: 'm3build', ph: 'repte', q: "Ara la <b>tapa</b>. L'obertura de la capsa fa 56 × 36 mm. Posa a sobre de la placa de la tapa un <b>tap</b> de <b>55 × 35 × 4 mm</b>: entrarà amb 0,5 mm de marge per costat.|Ahora la <b>tapa</b>. La abertura de la caja mide 56 × 36 mm. Pon encima de la placa de la tapa un <b>tapón</b> de <b>55 × 35 × 4 mm</b>: entrará con 0,5 mm de margen por lado.",
          start: { parts: CAPSA2 }, palette: ['box'], target: TAPA,
          checks: [{ k: 'part', t: 'box', s: [55, 35, 4], at: [35, 0, null], base: 2, tol: 0.6, txt: 'El tap fa 55 × 35 × 4 mm i és a sobre de la tapa|El tapón mide 55 × 35 × 4 mm y está encima de la tapa' }, { k: 'match', target: TAPA, th: 0.95, t: 'Tot és com el fantasma|Todo es como el fantasma' }],
          hint: "Afegeix una caixa, posa-li 55 × 35 × 4 mm i col·loca-la a x = 35, y = 0, z = 2 (just a sobre de la placa de 2 mm).|Añade una caja, ponle 55 × 35 × 4 mm y colócala en x = 35, y = 0, z = 2 (justo encima de la placa de 2 mm).",
          sol: TAPA },
        { k: 'm3free', ph: 'crea', q: "<b>Un recipient a mida.</b> Pensa una cosa teva per guardar (clips, gomes, monedes, cromos…) i fes-li un recipient: gotet, capsa, amb nansa o amb tapa. Parets i fons de 2 mm!|<b>Un recipiente a medida.</b> Piensa en algo tuyo para guardar (clips, gomas, monedas, cromos…) y hazle un recipiente: vasito, caja, con asa o con tapa. ¡Paredes y fondo de 2 mm!",
          name: 'El meu recipient|Mi recipiente', palette: ['box', 'cyl', 'hex', 'torus', 'heart', 'star', 'hbox', 'hcyl'],
          crit: ["Està pensat per guardar una cosa concreta (l'has mesurada)|Está pensado para guardar algo concreto (lo has medido)", "Parets i fons d'almenys 2 mm|Paredes y fondo de al menos 2 mm", 'Té una base plana i és una sola peça|Tiene una base plana y es una sola pieza'],
          checks: [{ k: 'hole', t: 'És buit per dins|Es hueco por dentro' }, { k: 'flatbase', min: 300, t: 'Té fons i una base plana|Tiene fondo y una base plana' }, { k: 'wall', min: 1.8, t: 'Parets i fons de 2 mm o més|Paredes y fondo de 2 mm o más' }, { k: 'one' }, { k: 'onplate' }],
          sol: { parts: [P('a1', 'box', [50, 50, 30], [0, 0, 15], '#2FB36D'), H('f1', 'box', [46, 46, 30], [0, 0, 17])] } },
        { k: 'quiz', ph: 'tanca', q: "Un got fa <b>50 mm</b> per fora i <b>46 mm</b> per dins. Quin gruix té la paret?|Un vaso mide <b>50 mm</b> por fuera y <b>46 mm</b> por dentro. ¿Qué grosor tiene la pared?", opts: ['2 mm|2 mm', '4 mm|4 mm', '46 mm|46 mm'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "L'obertura d'una capsa fa <b>56 mm</b>. Quin tap hi encaixarà millor?|La abertura de una caja mide <b>56 mm</b>. ¿Qué tapón encajará mejor?", opts: ['Un tap de 55 mm|Un tapón de 55 mm', 'Un tap de 56 mm justos|Un tapón de 56 mm justos', 'Un tap de 58 mm|Un tapón de 58 mm'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 4 · Projecte: el segell ---------- */
    { id: 'm5-4', t: 'Projecte: el segell|Proyecto: el sello', min: 45, proj: true, badge: 'm5segell',
      learn: ["Un segell imprimeix el dibuix girat, com en un mirall: per això el dissenyem emmirallat amb l'eina Mirall.|Un sello imprime el dibujo girado, como en un espejo: por eso lo diseñamos reflejado con la herramienta Espejo.",
        "Les formes simètriques (un cor, una estrella, una T) es veuen igual al mirall; lletres com la L o la F, no.|Las formas simétricas (un corazón, una estrella, una T) se ven igual en el espejo; letras como la L o la F, no.",
        "El dibuix del segell pot anar en relleu (agafa la tinta) o gravat (queda en blanc), i el segell necessita un mànec.|El dibujo del sello puede ir en relieve (coge la tinta) o grabado (queda en blanco), y el sello necesita un mango."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Com fas que un dibuix quedi <b>gravat</b> sense travessar la peça?|¿Cómo haces que un dibujo quede <b>grabado</b> sin atravesar la pieza?",
          opts: ['El converteixo en forat i el deixo entrar només una mica per dalt|Lo convierto en agujero y lo dejo entrar solo un poco por arriba', 'El pinto de gris|Lo pinto de gris', 'El poso a sota de la placa|Lo pongo debajo de la placa'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: "Per què fem les parets i els fons d'almenys <b>2 mm</b>?|¿Por qué hacemos las paredes y los fondos de al menos <b>2 mm</b>?",
          opts: ['Perquè si són més prims es trenquen|Porque si son más finos se rompen', 'Perquè així pesen més|Porque así pesan más', 'Perquè la Nuvi només sap fer números parells|Porque Nuvi solo sabe hacer números pares'], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'fab', title: 'El segell de la biblioteca|El sello de la biblioteca',
          t: "La <b>biblioteca del barri</b> vol marcar els seus llibres amb un <b>segell</b>, i cadascú de vosaltres pot fer el seu <b>ex-libris</b>: un segell personal per als seus llibres. Però compte: un segell té un truc. El que hi ha al segell surt al paper <b>com en un mirall</b>! És el projecte de la unitat: hi farem servir tot el que sabem.|La <b>biblioteca del barrio</b> quiere marcar sus libros con un <b>sello</b>, y cada uno de vosotros puede hacer su <b>ex libris</b>: un sello personal para sus libros. Pero cuidado: un sello tiene un truco. ¡Lo que hay en el sello sale en el papel <b>como en un espejo</b>! Es el proyecto de la unidad: usaremos todo lo que sabemos." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El truc del segell|El truco del sello', t: 'Surt com en un mirall|Sale como en un espejo', anim: 'm5mirall',
            x: "Quan prems un segell sobre el paper, el dibuix es gira com en un <b>mirall</b>: el que al segell és a la dreta, al paper surt a l'esquerra. Per això, si vols que al paper surti una <b>F</b>, al segell hi has de posar una F <b>emmirallada</b>.|Cuando aprietas un sello sobre el papel, el dibujo se gira como en un <b>espejo</b>: lo que en el sello está a la derecha, en el papel sale a la izquierda. Por eso, si quieres que en el papel salga una <b>F</b>, en el sello tienes que poner una F <b>reflejada</b>." },
          { k: "L'eina Mirall|La herramienta Espejo", t: 'Gira la lletra en un toc|Gira la letra en un toque', media: { k: 'model', model: { parts: [...Ln.map(p => ({ ...p, p: [p.p[0] - 18, p.p[1], p.p[2]] })), ...Lm.map(p => ({ ...p, id: p.id + 'm', c: '#2FB36D', p: [p.p[0] + 18, p.p[1], p.p[2]] }))] }, view: 'top' },
            x: "Selecciona totes les peces de la lletra i toca <b>Mirall</b> → <b>x</b>: la lletra es gira d'esquerra a dreta sense canviar de lloc. A l'esquerra, una L normal; a la dreta, la mateixa L emmirallada.|Selecciona todas las piezas de la letra y toca <b>Espejo</b> → <b>x</b>: la letra se gira de izquierda a derecha sin cambiar de sitio. A la izquierda, una L normal; a la derecha, la misma L reflejada.",
            tip: "Selecciona només la lletra, no la placa: toca «Més peces» i ves tocant les peces.|Selecciona solo la letra, no la placa: toca «Más piezas» y ve tocando las piezas." },
          { k: 'Simètric o no?|¿Simétrico o no?', t: 'Algunes formes no canvien|Algunas formas no cambian', media: { k: 'model', model: { parts: FORMES }, view: 'top' },
            x: "Un cor i una estrella són <b>simètrics</b>: davant d'un mirall es veuen igual, i no cal girar-los. La <b>L</b> i la <b>F</b>, en canvi, sí que canvien. Passa el mateix amb la R, la J o els números 2, 3 i 7.|Un corazón y una estrella son <b>simétricos</b>: delante de un espejo se ven igual, y no hace falta girarlos. La <b>L</b> y la <b>F</b>, en cambio, sí que cambian. Pasa lo mismo con la R, la J o los números 2, 3 y 7." },
          { k: 'Relleu o gravat|Relieve o grabado', t: 'Dues maneres de fer el segell|Dos maneras de hacer el sello', anim: 'm5tinta',
            x: "En <b>relleu</b>, el dibuix sobresurt, agafa la tinta i surt pintat. <b>Gravat</b>, el dibuix és un forat: s'entinta la resta i el dibuix queda en blanc. Totes dues maneres funcionen!|En <b>relieve</b>, el dibujo sobresale, coge la tinta y sale pintado. <b>Grabado</b>, el dibujo es un agujero: se entinta el resto y el dibujo queda en blanco. ¡Las dos maneras funcionan!" },
          { k: 'Les parts|Las partes', t: 'Mànec, placa i dibuix|Mango, placa y dibujo', media: { k: 'model', model: SEG },
            x: "El nostre segell té tres parts: el <b>mànec</b> per agafar-lo, la <b>placa</b> i el <b>dibuix</b>. El dissenyem tal com el farà la Nuvi: el mànec a baix, tocant la placa d'impressió, i el dibuix a dalt, mirant amunt.|Nuestro sello tiene tres partes: el <b>mango</b> para cogerlo, la <b>placa</b> y el <b>dibujo</b>. Lo diseñamos tal como lo hará Nuvi: el mango abajo, tocando la placa de impresión, y el dibujo arriba, mirando hacia arriba.",
            tip: "La placa sobresurt del mànec: la Nuvi hi posarà suports a sota. Ho veurem a la unitat 6.|La placa sobresale del mango: Nuvi pondrá soportes debajo. Lo veremos en la unidad 6." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🪞', title: 'La lletra al revés|La letra al revés', t: 'Amb un full, un retolador gruixut i una finestra (o un mirall petit):|Con una hoja, un rotulador grueso y una ventana (o un espejo pequeño):',
          steps: ['Escriu la teva inicial ben gran amb el retolador.|Escribe tu inicial bien grande con el rotulador.', "Gira el full i posa'l contra el vidre de la finestra: veuràs la lletra al revés. Repassa-la per darrere.|Gira la hoja y ponla contra el cristal de la ventana: verás la letra al revés. Repásala por detrás.",
            "Aquesta lletra girada és la que anirà al segell. Comprova-ho posant el full davant d'un mirall.|Esta letra girada es la que irá en el sello. Compruébalo poniendo la hoja delante de un espejo.", 'Quines lletres del teu nom no canvien al mirall?|¿Qué letras de tu nombre no cambian en el espejo?'],
          tip: "Les lletres amb traços rectes (L, T, E, F, H) són les més fàcils de construir amb caixes.|Las letras con trazos rectos (L, T, E, F, H) son las más fáciles de construir con cajas." },
        { k: 'm3look', ph: 'prova', q: "Vols que al paper surti aquesta <b>F</b>. Quin segell has de fer? (els veus des de dalt, com la cara del segell)|Quieres que en el papel salga esta <b>F</b>. ¿Qué sello tienes que hacer? (los ves desde arriba, como la cara del sello)",
          model: { parts: PAPER }, view: 'top', opts: [{ model: CARA(Fm()), view: 'top' }, { model: CARA(Fn()), view: 'top' }, { model: CARA(Fv()), view: 'top' }], a: 0,
          ex: "Al segell, la F ha d'estar emmirallada (amb el pal a la dreta). Quan la premis, el mirall la tornarà a girar i al paper sortirà bé.|En el sello, la F tiene que estar reflejada (con el palo a la derecha). Cuando la aprietes, el espejo la volverá a girar y en el papel saldrá bien." },
        { k: 'm3look', ph: 'investiga', q: "Toca una forma que es vegi <b>igual al mirall</b>: no caldria girar-la per fer el segell.|Toca una forma que se vea <b>igual en el espejo</b>: no haría falta girarla para hacer el sello.",
          model: { parts: FORMES }, view: 'top', pick: ['cor', 'estrella'], yes: 'Exacte: és simètrica!|¡Exacto: es simétrica!', no: "Aquesta canvia al mirall: imagina-la girada d'esquerra a dreta.|Esta cambia en el espejo: imagínala girada de izquierda a derecha.",
          ex: "El cor i l'estrella tenen la meitat esquerra igual que la dreta. La L i la F, no.|El corazón y la estrella tienen la mitad izquierda igual que la derecha. La L y la F, no." },
        { k: 'move', ph: 'pausa', title: 'El mirall|El espejo', secs: 40, t: "Per parelles, l'un davant de l'altre: un fa moviments a poc a poc i l'altre els copia com si fos el seu <b>reflex</b>. Si un aixeca la mà dreta, el reflex aixeca… l'esquerra! Després canvieu.|Por parejas, uno delante del otro: uno hace movimientos despacio y el otro los copia como si fuera su <b>reflejo</b>. Si uno levanta la mano derecha, el reflejo levanta… ¡la izquierda! Después cambiad." },
        { k: 'm3build', ph: 'repte', q: "Aquesta <b>L</b> està escrita normal. Per al segell, <b>emmiralla-la</b>: selecciona les dues peces i fes servir el <b>Mirall</b> en x.|Esta <b>L</b> está escrita normal. Para el sello, <b>refléjala</b>: selecciona las dos piezas y usa el <b>Espejo</b> en x.",
          start: { parts: Ln }, palette: ['box'], target: { parts: Lm },
          checks: [{ k: 'match', target: { parts: Lm }, th: 0.9, t: 'La L està girada com el fantasma|La L está girada como el fantasma' }, { k: 'one' }],
          hint: "Toca un lloc buit, després «Totes» per seleccionar les dues peces, i ara Mirall → x.|Toca un sitio vacío, después «Todas» para seleccionar las dos piezas, y ahora Espejo → x.",
          sol: { parts: Lm } },
        { k: 'm3build', ph: 'repte', q: "Ara la <b>F</b> de la cara del segell. Emmiralla <b>només la F</b> (les seves 3 peces), no la placa blava.|Ahora la <b>F</b> de la cara del sello. Refleja <b>solo la F</b> (sus 3 piezas), no la placa azul.",
          start: { parts: [PLACA(), ...Fn()] }, palette: ['box'], target: CARA(Fm()),
          checks: [{ k: 'match', target: CARA(Fm()), th: 0.98, t: 'La F està emmirallada com el fantasma|La F está reflejada como el fantasma' }, { k: 'one' }],
          hint: "Toca una peça de la F, després «Més peces» i toca les altres dues. Ara Mirall → x.|Toca una pieza de la F, después «Más piezas» y toca las otras dos. Ahora Espejo → x.",
          sol: CARA(Fm()) },
        { k: 'm3build', ph: 'repte', q: "Posa-li el <b>mànec</b>. Puja la placa i la F fins a <b>z = 26</b> i, a sota, afegeix un cilindre de <b>24 × 24 × 26 mm</b>.|Ponle el <b>mango</b>. Sube la placa y la F hasta <b>z = 26</b> y, debajo, añade un cilindro de <b>24 × 24 × 26 mm</b>.",
          start: { parts: [PLACA(), ...Fm()] }, palette: ['cyl'], target: SEG,
          checks: [{ k: 'match', target: SEG, th: 0.9, t: 'El segell és com el fantasma|El sello es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Selecciona-ho tot («Totes») i, a Posició, posa z = 26. Després afegeix un cilindre de 24 × 24 × 26 mm a x = 0, y = 0, z = 0.|Selecciónalo todo («Todas») y, en Posición, pon z = 26. Después añade un cilindro de 24 × 24 × 26 mm en x = 0, y = 0, z = 0.",
          sol: SEG },
        { k: 'm3build', ph: 'repte', extra: true, q: "Un <b>forat per penjar-lo</b>: fes un forat rodó de 5 mm que travessi el mànec <b>ajagut</b>, a 8 mm d'alçada.|Un <b>agujero para colgarlo</b>: haz un agujero redondo de 5 mm que atraviese el mango <b>tumbado</b>, a 8 mm de altura.",
          start: { parts: SEG.parts }, palette: ['hcyl'], target: SEG_H,
          checks: [{ k: 'hole', t: 'Hi ha un forat que travessa el mànec|Hay un agujero que atraviesa el mango' }, { k: 'part', t: 'cyl', hole: true, s: [5, 30, 5], at: [0, 0, 8], tol: 1.5, txt: "El forat fa 5 mm, és ajagut i a 8 mm d'alçada|El agujero mide 5 mm, está tumbado y a 8 mm de altura" }],
          hint: "Forat rodó de 5 × 5 × 30 mm. A Gir, x = 90 (queda ajagut). A Posició: x = 0, y = 0, z = 5,5.|Agujero redondo de 5 × 5 × 30 mm. En Giro, x = 90 (queda tumbado). En Posición: x = 0, y = 0, z = 5,5.",
          sol: SEG_H },
        { k: 'm3free', ph: 'crea', q: "<b>El meu segell (ex-libris).</b> Dissenya el teu segell: mànec, placa i un dibuix o una inicial, en relleu o gravat. Recorda el mirall! Quan les comprovacions estiguin verdes, desa'l.|<b>Mi sello (ex libris).</b> Diseña tu sello: mango, placa y un dibujo o una inicial, en relieve o grabado. ¡Recuerda el espejo! Cuando las comprobaciones estén en verde, guárdalo.",
          name: 'El meu segell|Mi sello', palette: ['box', 'cyl', 'heart', 'star', 'hex', 'torus', 'hcyl', 'hbox'],
          crit: ['El dibuix o la lletra estan emmirallats (o són simètrics)|El dibujo o la letra están reflejados (o son simétricos)', 'Té mànec, placa i dibuix, en relleu o gravat|Tiene mango, placa y dibujo, en relieve o grabado', "Els traços fan almenys 3 mm d'ample|Los trazos miden al menos 3 mm de ancho", 'És una sola peça i toca la placa|Es una sola pieza y toca la placa'],
          checks: [{ k: 'count', min: 4, txt: 'Té almenys 4 peces: mànec, placa i dibuix|Tiene al menos 4 piezas: mango, placa y dibujo' }, { k: 'zmax', v: 60, t: "Fa com a molt 60 mm d'alçada|Mide como mucho 60 mm de altura" }, { k: 'one' }, { k: 'onplate' }],
          sol: SEG },
        { k: 'quiz', ph: 'tanca', q: "Vols un segell que escrigui una <b>R</b> al paper. Com ha de ser la R del segell?|Quieres un sello que escriba una <b>R</b> en el papel. ¿Cómo tiene que ser la R del sello?", opts: ["Emmirallada (girada d'esquerra a dreta)|Reflejada (girada de izquierda a derecha)", 'Igual que la vols veure|Igual que la quieres ver', 'De cap per avall|Boca abajo'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Quina d'aquestes formes <b>no</b> cal emmirallar per fer un segell?|¿Cuál de estas formas <b>no</b> hace falta reflejar para hacer un sello?", opts: ['Un cor|Un corazón', 'La lletra L|La letra L', 'El número 7|El número 7'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] };
})();

/* ── unitat 6 ── */
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

/* ── unitat 7 ── */
/* Tech 3D · Nivell 1 · unitat 7 «Dissenyar per a persones» (m7-1 … m7-4)
   Contingut propi de Numi. Fil narratiu: el Taller de Bit rep encàrrecs de persones concretes (l'àvia Rosa, en Pol, la Nur,
   la Nil, la mestra Txell i l'escola). Disseny centrat en les persones a nivell d'infant: entrevistar, necessitats,
   accessibilitat (m7-1), esbós i mesures amb marge (m7-2), provar, retroacció i menys plàstic (m7-3) i el projecte
   «un invent per a l'escola» amb especificacions pròpies (m7-4). A m7-3 la versió 2 continua des del porta-coses desat
   a m7-2 (portafoli), si n'hi ha. Models: peces { id, t, s: [x, y, z] mm, p: centre, r: graus, c, hole }, placa 200 × 200. */
Object.assign(TBADGE, {
  m7inventor: { id: 'm7inventor', ico: '🛠️', n: "Inventor/a de l'escola|Inventor/a de la escuela", d: "Has escrit les especificacions d'un invent per a l'escola i l'has modelat pensant en qui el farà servir.|Has escrito las especificaciones de un invento para la escuela y lo has modelado pensando en quién lo usará." }
});
COURSE_UNITS[7] = (() => {
  const P = (id, t, s, p, c, o = {}) => ({ id, t, s, p, r: o.r || [0, 0, 0], c, ...o });
  const H = (id, t, s, p, o = {}) => P(id, t, s, p, '#9AA3B5', { hole: true, ...o });
  const ts = () => { try { return typeof TS_ === 'function' ? TS_() : null; } catch (e) { return null; } };
  const cl = m => JSON.parse(JSON.stringify(m));
  // l'últim model desat al portafoli des d'alguna d'aquestes sessions (per continuar-lo a la versió següent)
  const lastOf = sids => { const t = ts(); if (!t || !Array.isArray(t.port)) return null; for (let i = t.port.length - 1; i >= 0; i--) { const p = t.port[i]; if (p && p.kind === 'model' && sids.includes(p.sid) && p.model && Array.isArray(p.model.parts) && p.model.parts.length) return p; } return null; };

  /* ---------- m7-1 · persones, necessitats i accessibilitat ---------- */
  const MANEC = d => [P('manec', 'cyl', [d, d, 80], [0, 0, 40], '#3D7BF4'), H('ranura', 'box', [3, 8, 50], [0, 0, 56])];
  const RINGS = (x, d) => [20, 40, 60].map((z, i) => P('anella' + (i + 1), 'torus', [d + 4, d + 4, 4], [x, 0, z], '#5B3FD6'));
  const ACCESS = [P('prim', 'cyl', [12, 12, 80], [-30, 0, 40], '#9AA3B5'), P('gruixut', 'cyl', [30, 30, 80], [16, 0, 40], '#7C5CFF'), ...RINGS(16, 30)];
  const knob = (x, i, top) => [P('porta' + i, 'box', [26, 6, 64], [x, 6, 32], '#F3F3EE'), P('eix' + i, 'cyl', [8, 8, 14], [x, -3, 40], '#9AA3B5', { r: [90, 0, 0] }), ...top];
  const KNOBS = [...knob(-55, 1, [P('pom', 'sph', [22, 22, 22], [-55, -18, 40], '#FF8A3D')]), ...knob(0, 2, [P('maneta', 'box', [46, 12, 10], [17, -14, 40], '#7C5CFF')]), ...knob(55, 3, [P('pomet', 'sph', [12, 12, 12], [55, -14, 40], '#2FB36D')])];
  const TOYB = [P('cos', 'box', [50, 26, 16], [0, 0, 14], '#3D7BF4'), P('cabina', 'box', [24, 22, 12], [-4, 0, 28], '#5BC0EB'),
    ...[[-15, -15], [15, -15], [-15, 15], [15, 15]].map(([x, y], i) => P('roda' + (i + 1), 'cyl', [14, 14, 6], [x, y, 7], '#2A2F3A', { r: [90, 0, 0] }))];
  const TOY = [...TOYB, P('punxa', 'cone', [8, 8, 18], [0, 0, 42], '#E8453C')];
  const TOYOK = [...TOYB, P('bola', 'sph', [12, 12, 12], [0, 0, 39], '#E8453C')];
  const GRIP = [P('prisma', 'hex', [24, 20.8, 40], [0, 0, 20], '#2FB36D'), H('forat', 'cyl', [8, 8, 44], [0, 0, 20])];
  const TAG = [P('placa', 'box', [40, 40, 3], [0, 0, 1.5], '#F7C531'), P('cor', 'heart', [24, 24, 3], [0, -3, 4.5], '#E8453C'), H('forat', 'cyl', [6, 6, 5], [0, 14, 1.5])];

  /* ---------- m7-2 · esbós, mesures i marge ---------- */
  const GOMA = [P('goma', 'box', [40, 20, 10], [0, 0, 5], '#F3F3EE'), P('funda', 'box', [22, 21, 11], [9, 0, 5.5], '#3D7BF4')];
  const PINZ = [P('base', 'box', [96, 32, 4], [0, 0, 2], '#A0683A'), P('tub1', 'tube', [26, 26, 50], [-32, 0, 29], '#3D7BF4', { w: 2 }), P('tub2', 'tube', [26, 26, 40], [0, 0, 24], '#EC5FA8', { w: 2 }), P('tub3', 'tube', [26, 26, 50], [32, 0, 29], '#2FB36D', { w: 2 })];
  const XS = [-22, 0, 22];
  const BLOC = d => [P('bloc', 'box', [70, 30, 40], [0, 0, 20], '#EC5FA8'), ...XS.map((x, i) => H('f' + (i + 1), 'cyl', [d, d, 32], [x, 0, 26]))];
  // el porta-retoladors amb tres retoladors posats (el porta-retoladors i els seus forats en un grup: els retoladors no es tallen)
  const MARK = [...BLOC(16).map(p => ({ ...p, g: 'pr' })), ...XS.flatMap((x, i) => [P('r' + (i + 1), 'cyl', [14, 14, 60], [x, 0, 40], '#F3F3EE'), P('t' + (i + 1), 'cyl', [15, 15, 20], [x, 0, 76], ['#E8453C', '#3D7BF4', '#2FB36D'][i])])];
  const STAND = y => [P('base', 'box', [80, 60, 6], [0, 0, 3], '#14A3B8'), P('topall', 'box', [80, 6, 12], [0, -27, 12], '#E8453C'), P('respatller', 'box', [80, 24, 30], [0, y, 21], '#3D7BF4')];

  /* ---------- m7-3 · provar, millorar i menys plàstic ---------- */
  const TALL = w => [P('peu', 'cyl', [w, w, 6], [0, 0, 3], '#F7C531'), P('tub', 'tube', [22, 22, 84], [0, 0, 48], '#5BC0EB', { w: 2 })];
  const CLIPS = (h, s) => [P('caixa', 'box', [50, 50, 40], [0, 0, 20], '#FF8A3D'), H('forat', 'box', [s, s, h], [0, 0, 41 - h / 2])];
  const SOLID = x => [P('massis', 'cyl', [50, 50, 80], [x, 0, 40], '#FF8A3D'), H('buit', 'cyl', [30, 30, 76], [x, 0, 43])];
  const TUBE = x => [P('tub', 'tube', [50, 50, 77], [x, 0, 41.5], '#2FB36D', { w: 2 }), P('fons', 'cyl', [50, 50, 3], [x, 0, 1.5], '#2FB36D')];
  const ECO = [...SOLID(-35).map(p => ({ ...p, id: p.id + 'A', g: 'a' })), ...TUBE(35)];

  /* ---------- m7-4 · invents per a l'escola ---------- */
  const HOOK = py => [P('esquena', 'box', [12, 90, 12], [-24, 0, 6], '#7C5CFF'), P('bras', 'box', [44, 12, 12], [-2, -39, 6], '#7C5CFF'), P('punta', 'box', [12, 30, 12], [14, py, 6], '#7C5CFF'),
    H('c1', 'cyl', [5, 5, 14], [-24, 32, 6]), H('c2', 'cyl', [5, 5, 14], [-24, 8, 6])];
  const BOOK = [P('base', 'box', [70, 80, 5], [0, 0, 2.5], '#FF8A3D'), P('paret', 'box', [70, 5, 80], [0, -37.5, 40], '#FF8A3D'),
    P('reforc1', 'wedge', [30, 6, 40], [-24, -20, 25], '#E8453C', { r: [0, 0, 90] }), P('reforc2', 'wedge', [30, 6, 40], [24, -20, 25], '#E8453C', { r: [0, 0, 90] })];
  const ORG = [P('caixa', 'box', [90, 60, 40], [0, 0, 20], '#14A3B8'), H('gran', 'box', [52, 54, 38], [-16, 0, 22]), H('petit1', 'box', [26, 25, 38], [27, -14.5, 22]), H('petit2', 'box', [26, 25, 38], [27, 14.5, 22])];
  // els tres invents junts (l'organitzador, girat 90° perquè hi càpiguen; cada invent en un grup perquè els forats no tallin els altres)
  const ORG2 = [P('caixa', 'box', [60, 90, 40], [0, 0, 20], '#14A3B8'), H('gran', 'box', [54, 52, 38], [0, -16, 22]), H('petit1', 'box', [25, 26, 38], [-14.5, 27, 22]), H('petit2', 'box', [25, 26, 38], [14.5, 27, 22])];
  const mv = (l, dx, dy, g, pre) => l.map(p => ({ ...p, id: pre + p.id, p: [p.p[0] + dx, p.p[1] + dy, p.p[2]], g }));
  const INVENTS = [...mv(HOOK(-19), -66, 0, 'h', 'pj'), ...mv(BOOK, -2, 0, 'b', 'al'), ...mv(ORG2, 64, 0, 'o', 'or')];

  return {
  t: 'Dissenyar per a persones|Diseñar para personas', d: 'Objectes útils|Objetos útiles', color: '#EC5FA8',
  s: [
    /* ============ Sessió 1 · Qui ho farà servir? ============ */
    { id: 'm7-1', t: 'Qui ho farà servir?|¿Quién lo usará?', min: 42,
      learn: ["Un bon disseny comença per la persona: primer l'escoltes amb una entrevista i després imagines l'objecte.|Un buen diseño empieza por la persona: primero la escuchas con una entrevista y después imaginas el objeto.",
        "Les necessitats són el que l'objecte ha de fer sí o sí; els desitjos, el que estaria bé que fes.|Las necesidades son lo que el objeto tiene que hacer sí o sí; los deseos, lo que estaría bien que hiciera.",
        "Un objecte accessible el pot fer servir tothom: mànecs gruixuts, formes que es noten tocant, colors que contrasten i cap punxa.|Un objeto accesible lo puede usar todo el mundo: mangos gruesos, formas que se notan al tocar, colores que contrastan y ninguna punta."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "A la unitat passada vas preparar models per a la Nuvi. Per què una paret de <b>0,5 mm</b> no és bona idea?|En la unidad pasada preparaste modelos para Nuvi. ¿Por qué una pared de <b>0,5 mm</b> no es buena idea?",
          opts: ["És tan prima que la impressora no la pot fer bé i es trencaria|Es tan fina que la impresora no la puede hacer bien y se rompería", 'Gasta massa plàstic|Gasta demasiado plástico', 'No es pot pintar de colors|No se puede pintar de colores'], a: 0,
          ex: "Les parets han de fer almenys 2 mm perquè la Nuvi hi pugui posar prou plàstic i la peça sigui forta.|Las paredes tienen que medir al menos 2 mm para que Nuvi pueda poner suficiente plástico y la pieza sea fuerte." },
        { k: 'quiz', ph: 'recorda', q: 'Quin fitxer necessita la Nuvi per imprimir el teu model?|¿Qué archivo necesita Nuvi para imprimir tu modelo?',
          opts: ['Un fitxer STL|Un archivo STL', 'Una foto del model|Una foto del modelo', 'Un document de text|Un documento de texto'], a: 0,
          ex: "L'STL descriu la superfície del model amb triangles i guarda les mides en mil·límetres.|El STL describe la superficie del modelo con triángulos y guarda las medidas en milímetros." },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'Encàrrecs amb nom i cognom|Encargos con nombre y apellido',
          t: "Han arribat cartes al taller! L'<b>àvia Rosa</b> té les mans rígides i li costa agafar la cullera. En <b>Pol</b> es cansa amb els llapis prims. La <b>Nur</b>, que hi veu molt poc, vol trobar el seu penjador de l'escola. A partir d'ara no dissenyarem per a «algú»: dissenyarem <b>per a persones de veritat</b>. I el primer pas no és modelar… és <b>escoltar</b>!|¡Han llegado cartas al taller! La <b>abuela Rosa</b> tiene las manos rígidas y le cuesta coger la cuchara. <b>Pol</b> se cansa con los lápices finos. <b>Nur</b>, que ve muy poco, quiere encontrar su percha de la escuela. A partir de ahora no diseñaremos para «alguien»: diseñaremos <b>para personas de verdad</b>. Y el primer paso no es modelar… ¡es <b>escuchar</b>!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Disseny per a persones|Diseño para personas', t: "Primer la persona, després l'objecte|Primero la persona, después el objeto", anim: 'm7pers',
            x: "Els bons dissenyadors no comencen pel que els agrada a ells: comencen per la <b>persona</b> que farà servir l'objecte. El camí té quatre passos que es repeteixen: <b>escoltar</b> (què li passa?), <b>imaginar</b> idees, <b>construir</b> un model i <b>provar-lo</b> amb ella. Si alguna cosa no va bé, tornem a escoltar.|Los buenos diseñadores no empiezan por lo que les gusta a ellos: empiezan por la <b>persona</b> que usará el objeto. El camino tiene cuatro pasos que se repiten: <b>escuchar</b> (¿qué le pasa?), <b>imaginar</b> ideas, <b>construir</b> un modelo y <b>probarlo</b> con ella. Si algo no va bien, volvemos a escuchar.",
            tip: "Això es diu <b>disseny centrat en les persones</b>.|Esto se llama <b>diseño centrado en las personas</b>." },
          { k: "L'entrevista|La entrevista", t: 'Preguntes que fan parlar|Preguntas que hacen hablar', anim: 'm7ask',
            x: "Per saber què necessita algú, li fem una <b>entrevista</b>. Les millors preguntes són <b>obertes</b>: no es contesten amb un sí o un no. «Com ho fas ara?», «Què és el que més et costa?», «On ho faràs servir?». Després cal <b>escoltar</b> sense interrompre i <b>apuntar</b> les respostes.|Para saber qué necesita alguien, le hacemos una <b>entrevista</b>. Las mejores preguntas son <b>abiertas</b>: no se contestan con un sí o un no. «¿Cómo lo haces ahora?», «¿Qué es lo que más te cuesta?», «¿Dónde lo usarás?». Después hay que <b>escuchar</b> sin interrumpir y <b>apuntar</b> las respuestas.",
            bad: "«Oi que t'agradaria una cullera blava?»|«¿A que te gustaría una cuchara azul?»", good: "«Explica'm com agafes la cullera ara.»|«Explícame cómo coges la cuchara ahora.»" },
          { k: 'Necessitats|Necesidades', t: 'El que cal i el que agradaria|Lo que hace falta y lo que gustaría', anim: 'm7need',
            x: "De l'entrevista en surten dues llistes. Les <b>necessitats</b> són el que l'objecte <b>ha de</b> fer sí o sí: «el mànec ha de ser gruixut perquè l'àvia el pugui agafar». Els <b>desitjos</b> són el que estaria bé: «m'agradaria que fos lila». Primer es resolen les necessitats; després, si es pot, els desitjos.|De la entrevista salen dos listas. Las <b>necesidades</b> son lo que el objeto <b>tiene que</b> hacer sí o sí: «el mango tiene que ser grueso para que la abuela lo pueda coger». Los <b>deseos</b> son lo que estaría bien: «me gustaría que fuera lila». Primero se resuelven las necesidades; después, si se puede, los deseos.",
            tip: "Una necessitat que no es compleix fa que l'objecte no serveixi. Un desig que no es compleix només fa que agradi una mica menys.|Una necesidad que no se cumple hace que el objeto no sirva. Un deseo que no se cumple solo hace que guste un poco menos." },
          { k: 'Accessibilitat|Accesibilidad', t: 'Objectes que tothom pot fer servir|Objetos que todo el mundo puede usar', media: { k: 'model', model: { parts: ACCESS } },
            x: "Un objecte és <b>accessible</b> quan el pot fer servir tothom, també qui té poca força, poca vista o és molt petit. Algunes idees: mànecs <b>gruixuts</b> i amb relleu per agafar-los bé, formes que es poden <b>reconèixer tocant</b>, colors que <b>contrasten</b> (groc i negre, blanc i vermell…) i <b>cap punxa</b> ni vora tallant.|Un objeto es <b>accesible</b> cuando lo puede usar todo el mundo, también quien tiene poca fuerza, poca vista o es muy pequeño. Algunas ideas: mangos <b>gruesos</b> y con relieve para cogerlos bien, formas que se pueden <b>reconocer al tocar</b>, colores que <b>contrastan</b> (amarillo y negro, blanco y rojo…) y <b>ninguna punta</b> ni borde cortante.",
            tip: "Tots dos mànecs són per a la mateixa cullera. Amb quin creus que l'àvia Rosa farà menys força?|Los dos mangos son para la misma cuchara. ¿Con cuál crees que la abuela Rosa hará menos fuerza?" }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🎤', title: "L'entrevista|La entrevista", t: "Per parelles: una persona fa l'entrevista i l'altra respon; després us canvieu. Qui respon pensa en algú que conegui (un avi, un germà petit, un veí) que tingui dificultats amb una cosa de cada dia.|Por parejas: una persona hace la entrevista y la otra responde; después os cambiáis. Quien responde piensa en alguien que conozca (un abuelo, un hermano pequeño, un vecino) que tenga dificultades con algo de cada día.",
          steps: ["Pregunta: «Quina cosa de cada dia li costa fer o li fa nosa?»|Pregunta: «¿Qué cosa de cada día le cuesta hacer o le molesta?»", "Pregunta: «Com ho fa ara? Ensenya-m'ho amb les mans.»|Pregunta: «¿Cómo lo hace ahora? Enséñamelo con las manos.»",
            "Pregunta: «On i quan ho fa servir?»|Pregunta: «¿Dónde y cuándo lo usa?»", "Apunta dues necessitats (ha de…) i un desig (m'agradaria…).|Apunta dos necesidades (tiene que…) y un deseo (me gustaría…)."],
          tip: "Una bona entrevistadora escolta més que no parla. Si no entens alguna cosa, pregunta: «Què vols dir?»|Una buena entrevistadora escucha más que habla. Si no entiendes algo, pregunta: «¿Qué quieres decir?»" },
        { k: 'm3look', ph: 'prova', q: "Tres poms per a la porta de l'àvia Rosa, que té les mans rígides. <b>Quin li costarà menys d'obrir?</b> Gira la vista per mirar-los bé.|Tres pomos para la puerta de la abuela Rosa, que tiene las manos rígidas. <b>¿Cuál le costará menos abrir?</b> Gira la vista para mirarlos bien.",
          model: { parts: KNOBS }, opts: ['La maneta llarga (al mig)|La manilla larga (en el medio)', "El pom rodó gran (a l'esquerra)|El pomo redondo grande (a la izquierda)", 'El pom petit (a la dreta)|El pomo pequeño (a la derecha)'], a: 0,
          ex: "Una maneta s'abaixa empenyent amb la mà oberta o fins i tot amb el colze: no cal tancar els dits ni girar el canell. Els poms rodons s'han d'agafar fort i girar.|Una manilla se baja empujando con la mano abierta o incluso con el codo: no hace falta cerrar los dedos ni girar la muñeca. Los pomos redondos hay que cogerlos fuerte y girarlos." },
        { k: 'm3look', ph: 'investiga', q: "La <b>Nil</b> té 3 anys i tot ho toca i s'ho posa a la boca. <b>Toca la peça d'aquesta joguina que li podria fer mal.</b>|<b>Nil</b> tiene 3 años y todo lo toca y se lo lleva a la boca. <b>Toca la pieza de este juguete que le podría hacer daño.</b>",
          model: { parts: TOY }, pick: 'punxa', yes: "Exacte: l'antena acaba en punxa.|Exacto: la antena acaba en punta.", no: "Aquesta peça és arrodonida. Busca'n una que acabi en punta.|Esta pieza es redondeada. Busca una que acabe en punta.",
          ex: "Per als infants petits, millor formes arrodonides i peces grans que no es puguin desenganxar.|Para los niños pequeños, mejor formas redondeadas y piezas grandes que no se puedan despegar." },
        { k: 'move', ph: 'pausa', title: 'Mans que treballen|Manos que trabajan', secs: 30, t: "Obre i tanca les mans cinc vegades, ben fort. Fes girar els canells. Ara imagina que tens les mans rígides com l'àvia Rosa: com obriries una porta? Fes veure que abaixes una maneta <b>amb el colze</b>!|Abre y cierra las manos cinco veces, bien fuerte. Haz girar las muñecas. Ahora imagina que tienes las manos rígidas como la abuela Rosa: ¿cómo abrirías una puerta? ¡Haz como si bajaras una manilla <b>con el codo</b>!" },
        { k: 'm3fix', ph: 'repte', q: "Primer encàrrec: el <b>mànec de la cullera</b> de l'àvia Rosa. Ara fa 12 mm de gruix i no el pot agafar. A l'entrevista va dir que el que millor agafa és un got petit: fes el mànec de <b>30 mm</b> de diàmetre (x i y) i deixa'l de 80 mm de llarg.|Primer encargo: el <b>mango de la cuchara</b> de la abuela Rosa. Ahora mide 12 mm de grosor y no lo puede coger. En la entrevista dijo que lo que mejor coge es un vaso pequeño: haz el mango de <b>30 mm</b> de diámetro (x e y) y déjalo de 80 mm de largo.",
          start: { parts: MANEC(12) }, fix: ['manec'], palette: ['cyl', 'hbox'],
          checks: [{ k: 'size', ax: 'x', v: 30, t: 'Fa 30 mm de gruix en x|Mide 30 mm de grosor en x' }, { k: 'size', ax: 'y', v: 30, t: 'Fa 30 mm de gruix en y|Mide 30 mm de grosor en y' }, { k: 'size', ax: 'z', v: 80, t: 'Continua fent 80 mm de llarg|Sigue midiendo 80 mm de largo' }, { k: 'hole', t: 'Conserva la ranura per a la cullera|Conserva la ranura para la cuchara' }],
          hint: "Toca el mànec i, a la pestanya Mida, escriu 30 a la X i 30 a la Y. No toquis la Z.|Toca el mango y, en la pestaña Medida, escribe 30 en la X y 30 en la Y. No toques la Z.", sol: { parts: MANEC(30) } },
        { k: 'm3build', ph: 'repte', q: "En <b>Pol</b> es cansa amb els llapis prims. Fes-li un <b>engruixidor</b>: un prisma hexagonal de <b>24 mm</b> d'ample i 40 mm d'alt amb un <b>forat rodó de 8 mm</b> que el travessi de dalt a baix, perquè hi passi el llapis. Segueix el fantasma.|<b>Pol</b> se cansa con los lápices finos. Hazle un <b>engrosador</b>: un prisma hexagonal de <b>24 mm</b> de ancho y 40 mm de alto con un <b>agujero redondo de 8 mm</b> que lo atraviese de arriba abajo, para que pase el lápiz. Sigue el fantasma.",
          palette: ['hex', 'hcyl'], target: { parts: GRIP },
          checks: [{ k: 'match', target: { parts: GRIP }, th: 0.85, t: "S'assembla al fantasma|Se parece al fantasma" }, { k: 'hole', t: 'El llapis hi pot passar (té un forat)|El lápiz puede pasar (tiene un agujero)' }, { k: 'onplate' }],
          hint: "Afegeix el prisma i, a Mida, posa 24 a la X, 20,8 a la Y i 40 a la Z. El forat rodó: 8 × 8 mm i més alt que el prisma (44 mm), al centre.|Añade el prisma y, en Medida, pon 24 en la X, 20,8 en la Y y 40 en la Z. El agujero redondo: 8 × 8 mm y más alto que el prisma (44 mm), en el centro.",
          sol: { parts: GRIP } },
        { k: 'm3build', ph: 'repte', q: "La <b>Nur</b> hi veu molt poc, però amb els dits ho nota tot. Fes-li una <b>etiqueta tàctil</b> per al penjador: a sobre de la placa groga, un <b>cor en relleu</b> de 3 mm i un <b>forat</b> per penjar-la. Groc i vermell: colors que contrasten!|<b>Nur</b> ve muy poco, pero con los dedos lo nota todo. Hazle una <b>etiqueta táctil</b> para la percha: encima de la placa amarilla, un <b>corazón en relieve</b> de 3 mm y un <b>agujero</b> para colgarla. Amarillo y rojo: ¡colores que contrastan!",
          start: { parts: [TAG[0]] }, palette: ['heart', 'star', 'hcyl'], target: { parts: TAG },
          checks: [{ k: 'match', target: { parts: TAG }, th: 0.9, t: "S'assembla al fantasma|Se parece al fantasma" }, { k: 'hole', t: 'Té un forat per penjar-la|Tiene un agujero para colgarla' }, { k: 'colors', min: 2, t: 'Dos colors que contrasten|Dos colores que contrastan' }, { k: 'one' }],
          hint: "El cor: 24 × 24 × 3 mm, a y = −3 i z = 3 (just a sobre de la placa). El forat rodó: 6 mm, a y = 14.|El corazón: 24 × 24 × 3 mm, en y = −3 y z = 3 (justo encima de la placa). El agujero redondo: 6 mm, en y = 14.",
          sol: { parts: TAG } },
        { k: 'm3fix', ph: 'repte', extra: true, q: "Ara arregla la joguina de la Nil: canvia la <b>punxa</b> de l'antena per una <b>bola</b> rodona que toqui la cabina.|Ahora arregla el juguete de Nil: cambia la <b>punta</b> de la antena por una <b>bola</b> redonda que toque la cabina.",
          start: { parts: TOY }, fix: ['punxa'], palette: ['sph'],
          checks: [{ k: 'count', t: 'cone', max: 0, txt: 'No queda cap punxa (cap con)|No queda ninguna punta (ningún cono)' }, { k: 'count', t: 'sph', min: 1, txt: 'Hi ha una bola a dalt|Hay una bola arriba' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Esborra el con (la paperera) i afegeix una esfera de 12 × 12 × 12 mm. A Posició: x = 0, y = 0, z = 33, perquè toqui la cabina.|Borra el cono (la papelera) y añade una esfera de 12 × 12 × 12 mm. En Posición: x = 0, y = 0, z = 33, para que toque la cabina.",
          sol: { parts: TOYOK } },
        { k: 'm3free', ph: 'crea', q: "<b>El teu primer encàrrec.</b> Pensa en la persona de la teva entrevista i dissenya-li un objecte senzill que l'ajudi: un mànec gruixut, una etiqueta tàctil, un agafador… Fes-lo a la mida de les seves mans.|<b>Tu primer encargo.</b> Piensa en la persona de tu entrevista y diséñale un objeto sencillo que la ayude: un mango grueso, una etiqueta táctil, un agarrador… Hazlo a la medida de sus manos.",
          name: 'El meu primer encàrrec|Mi primer encargo',
          crit: ['Saps per a qui és i quina necessitat resol|Sabes para quién es y qué necesidad resuelve', 'La mida està pensada per a les seves mans|El tamaño está pensado para sus manos', 'No té punxes ni vores tallants|No tiene puntas ni bordes cortantes'],
          checks: [{ k: 'onplate' }, { k: 'one' }], sol: { parts: [...MANEC(30), ...RINGS(0, 30)] } },
        { k: 'quiz', ph: 'tanca', q: 'Quina és una bona pregunta per a una entrevista?|¿Cuál es una buena pregunta para una entrevista?', opts: ["«Com ho fas ara, això?»|«¿Cómo lo haces ahora?»", "«Oi que t'agrada el meu invent?»|«¿A que te gusta mi invento?»", "«Vols que sigui blau, sí o no?»|«¿Quieres que sea azul, sí o no?»"], a: 0,
          ex: "És una pregunta oberta: fa que la persona expliqui com ho fa i on li costa.|Es una pregunta abierta: hace que la persona explique cómo lo hace y dónde le cuesta." },
        { k: 'quiz', ph: 'tanca', q: 'Un objecte és <b>accessible</b> quan…|Un objeto es <b>accesible</b> cuando…', opts: ['El pot fer servir tothom, també qui té poca força o poca vista|Lo puede usar todo el mundo, también quien tiene poca fuerza o poca vista', 'És molt car|Es muy caro', "Només el pot fer servir qui l'ha dissenyat|Solo lo puede usar quien lo ha diseñado"], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ============ Sessió 2 · Esbós i mesures ============ */
    { id: 'm7-2', t: 'Esbós i mesures|Boceto y medidas', min: 43,
      learn: ["Un esbós és un dibuix ràpid de davant i de dalt amb les cotes: les mides importants en mil·límetres.|Un boceto es un dibujo rápido de delante y de arriba con las cotas: las medidas importantes en milímetros.",
        "Per mesurar amb el regle, l'objecte toca el 0 i es mira de cara: cada ratlleta és 1 mm.|Para medir con la regla, el objeto toca el 0 y se mira de frente: cada rayita es 1 mm.",
        "Un forat ha de ser una mica més gran que el que hi entra: al taller deixem 2 mm de marge.|Un agujero tiene que ser un poco más grande que lo que entra: en el taller dejamos 2 mm de margen."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "La setmana passada vas fer una entrevista. Què és una <b>necessitat</b>?|La semana pasada hiciste una entrevista. ¿Qué es una <b>necesidad</b>?",
          opts: ["El que l'objecte ha de fer sí o sí|Lo que el objeto tiene que hacer sí o sí", 'El color preferit de la persona|El color preferido de la persona', 'Una cosa que estaria bé però no cal|Algo que estaría bien pero no hace falta'], a: 0,
          ex: "Les necessitats van primer; els desitjos (com el color preferit), si es pot.|Las necesidades van primero; los deseos (como el color preferido), si se puede." },
        { k: 'm3look', ph: 'recorda', q: "Tots dos mànecs són per a la mateixa cullera. <b>Quin agafarà millor algú amb poca força?</b>|Los dos mangos son para la misma cuchara. <b>¿Cuál cogerá mejor alguien con poca fuerza?</b>",
          model: { parts: ACCESS }, opts: ['El gruixut, amb anelles|El grueso, con anillos', 'El prim|El fino'], a: 0,
          ex: "El mànec gruixut s'agafa amb tota la mà i les anelles fan que no rellisqui.|El mango grueso se coge con toda la mano y los anillos hacen que no resbale." },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: "L'encàrrec de la Txell|El encargo de Txell",
          t: "La mestra de plàstica, la <b>Txell</b>, té un problema: els retoladors rodolen per les taules i acaben a terra. Ens demana un <b>porta-retoladors</b>. Ja ha mesurat un retolador: fa <b>14 mm</b> de gruix. Avui treballarem com els dissenyadors de veritat: primer un <b>esbós amb mides</b> en paper i després el model. Si les mides són bones, la Nuvi l'encertarà a la primera!|La maestra de plástica, <b>Txell</b>, tiene un problema: los rotuladores ruedan por las mesas y acaban en el suelo. Nos pide un <b>portarrotuladores</b>. Ya ha medido un rotulador: mide <b>14 mm</b> de grosor. Hoy trabajaremos como los diseñadores de verdad: primero un <b>boceto con medidas</b> en papel y después el modelo. ¡Si las medidas son buenas, Nuvi lo acertará a la primera!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: "L'esbós|El boceto", t: 'Un dibuix ràpid amb les mides|Un dibujo rápido con las medidas', anim: 'm7sketch',
            x: "Un <b>esbós</b> és un dibuix ràpid, en paper i a llapis, per pensar com serà l'objecte. No cal que sigui bonic: cal que s'entengui. Normalment es dibuixa <b>de davant</b> i <b>de dalt</b>, i s'hi escriuen les mides importants.|Un <b>boceto</b> es un dibujo rápido, en papel y a lápiz, para pensar cómo será el objeto. No hace falta que sea bonito: hace falta que se entienda. Normalmente se dibuja <b>de delante</b> y <b>de arriba</b>, y se escriben las medidas importantes.",
            tip: "Esborrar està permès: l'esbós serveix per equivocar-se sense gastar plàstic.|Borrar está permitido: el boceto sirve para equivocarse sin gastar plástico." },
          { k: 'Mesurar|Medir', t: 'El regle, en mil·límetres|La regla, en milímetros', anim: 'm7ruler',
            x: "Per mesurar, l'objecte ha de tocar el <b>0</b> del regle (no la vora!) i s'ha de mirar on acaba, de cara i no de costat. Cada ratlleta és <b>1 mm</b> i cada número és 1 cm, que són <b>10 mm</b>. El retolador arriba a l'1 i quatre ratlletes més: <b>14 mm</b>.|Para medir, el objeto tiene que tocar el <b>0</b> de la regla (¡no el borde!) y hay que mirar dónde acaba, de frente y no de lado. Cada rayita es <b>1 mm</b> y cada número es 1 cm, que son <b>10 mm</b>. El rotulador llega al 1 y cuatro rayitas más: <b>14 mm</b>." },
          { k: 'Les cotes|Las cotas', t: "Cada mida, un número de l'editor|Cada medida, un número del editor", media: { k: 'model', model: { parts: MARK } },
            x: "Les mides de l'esbós es diuen <b>cotes</b>: una fletxa amb un número. Al taller, cada cota es converteix en un número de la pestanya <b>Mida</b>: l'<b>amplada</b> va a la X, la <b>fondària</b> a la Y i l'<b>alçada</b> a la Z. Aquest és el porta-retoladors de l'esbós: 70 × 30 × 40 mm, amb tres forats.|Las medidas del boceto se llaman <b>cotas</b>: una flecha con un número. En el taller, cada cota se convierte en un número de la pestaña <b>Medida</b>: la <b>anchura</b> va a la X, el <b>fondo</b> a la Y y la <b>altura</b> a la Z. Este es el portarrotuladores del boceto: 70 × 30 × 40 mm, con tres agujeros.",
            tip: "Amb el botó del regle (a sota de la vista) veuràs les cotes de la peça que toquis.|Con el botón de la regla (debajo de la vista) verás las cotas de la pieza que toques." },
          { k: 'El marge|El margen', t: 'Una mica més gran perquè hi càpiga|Un poco más grande para que quepa', anim: 'm7marge',
            x: "Si fas un forat de 14 mm per a un retolador de 14 mm, <b>no hi entrarà</b>: els forats impresos sempre surten una mica més petits del que has dibuixat. Per això deixem <b>marge</b>: el forat ha de ser una mica més gran que l'objecte. Al taller farem servir <b>2 mm</b>: 14 + 2 = <b>16 mm</b>.|Si haces un agujero de 14 mm para un rotulador de 14 mm, <b>no entrará</b>: los agujeros impresos siempre salen un poco más pequeños de lo que has dibujado. Por eso dejamos <b>margen</b>: el agujero tiene que ser un poco más grande que el objeto. En el taller usaremos <b>2 mm</b>: 14 + 2 = <b>16 mm</b>.",
            bad: "Forat = mida de l'objecte|Agujero = medida del objeto", good: "Forat = mida de l'objecte + 2 mm|Agujero = medida del objeto + 2 mm" }
        ] },
        { k: 'unplug', ph: 'mans', ico: '📏', title: 'Mesura i esbossa|Mide y esboza', t: 'Amb un regle i la fitxa (o un full):|Con una regla y la ficha (o una hoja):',
          steps: ['Tria tres objectes petits: un llapis, una goma i un retolador.|Elige tres objetos pequeños: un lápiz, una goma y un rotulador.', 'Mesura el gruix i la llargada de cada un en mil·límetres i apunta-ho.|Mide el grosor y el largo de cada uno en milímetros y apúntalo.',
            "Dibuixa l'esbós d'un porta-coses per a aquests objectes, de davant i de dalt.|Dibuja el boceto de un portacosas para estos objetos, de delante y de arriba.", "Escriu les cotes: les mides de la peça i dels forats (amb 2 mm de marge!).|Escribe las cotas: las medidas de la pieza y de los agujeros (¡con 2 mm de margen!)."],
          tip: "Per mesurar el gruix d'un objecte rodó, posa'l dret sobre el regle i mira'l des de dalt.|Para medir el grosor de un objeto redondo, ponlo de pie sobre la regla y míralo desde arriba." },
        { k: 'm3look', ph: 'prova', q: "Aquesta goma és a la placa i la mirem des de dalt. Cada quadret fa 10 mm. <b>Quant fa d'amplada (x) i de fondària (y)?</b>|Esta goma está en la placa y la miramos desde arriba. Cada cuadrito mide 10 mm. <b>¿Cuánto mide de anchura (x) y de fondo (y)?</b>",
          model: { parts: GOMA }, view: 'top', lock: true, opts: ['40 × 20 mm|40 × 20 mm', '20 × 40 mm|20 × 40 mm', '4 × 2 mm|4 × 2 mm'], a: 0,
          ex: "D'esquerra a dreta ocupa 4 quadrets (40 mm) i de davant a darrere, 2 quadrets (20 mm). L'amplada sempre va primer.|De izquierda a derecha ocupa 4 cuadritos (40 mm) y de delante a detrás, 2 cuadritos (20 mm). La anchura siempre va primero." },
        { k: 'm3look', ph: 'investiga', q: "L'esbós del porta-pinzells diu que els tres tubs fan <b>50 mm</b> d'alt. Un està mal fet. <b>Toca el tub mal mesurat.</b> Mira'ls de davant per comparar-los.|El boceto del portapinceles dice que los tres tubos miden <b>50 mm</b> de alto. Uno está mal hecho. <b>Toca el tubo mal medido.</b> Míralos de delante para compararlos.",
          model: { parts: PINZ }, pick: 'tub2', no: "Aquest fa els 50 mm de l'esbós. Compara'ls des de davant.|Este mide los 50 mm del boceto. Compáralos desde delante.",
          ex: "El del mig només fa 40 mm: algú va escriure 40 en lloc de 50. Per això cal tornar a mirar l'esbós abans d'imprimir.|El del medio solo mide 40 mm: alguien escribió 40 en lugar de 50. Por eso hay que volver a mirar el boceto antes de imprimir." },
        { k: 'move', ph: 'pausa', title: 'El regle humà|La regla humana', secs: 30, t: "Fes amb els dits un espai d'<b>1 cm</b>… ara de <b>5 cm</b>… ara, amb les mans, de <b>30 cm</b>, com un regle llarg. Tanca els ulls i torna-ho a provar. Obre'ls: t'has acostat a la mida?|Haz con los dedos un espacio de <b>1 cm</b>… ahora de <b>5 cm</b>… ahora, con las manos, de <b>30 cm</b>, como una regla larga. Cierra los ojos y vuelve a probar. Ábrelos: ¿te has acercado a la medida?" },
        { k: 'm3build', ph: 'repte', q: "<b>Del paper a la pantalla.</b> L'esbós de la Txell diu: bloc de <b>70 mm</b> d'amplada, <b>30 mm</b> de fondària i <b>40 mm</b> d'alçada. Aquí no hi ha fantasma: canvia les mides del cub perquè siguin aquestes.|<b>Del papel a la pantalla.</b> El boceto de Txell dice: bloque de <b>70 mm</b> de anchura, <b>30 mm</b> de fondo y <b>40 mm</b> de altura. Aquí no hay fantasma: cambia las medidas del cubo para que sean estas.",
          start: { parts: [P('a1', 'box', [20, 20, 20], [0, 0, 10], '#EC5FA8')] }, palette: ['box'],
          checks: [{ k: 'size', ax: 'x', v: 70, t: 'Amplada (x): 70 mm|Anchura (x): 70 mm' }, { k: 'size', ax: 'y', v: 30, t: 'Fondària (y): 30 mm|Fondo (y): 30 mm' }, { k: 'size', ax: 'z', v: 40, t: 'Alçada (z): 40 mm|Altura (z): 40 mm' }, { k: 'onplate' }],
          hint: "Toca el cub i, a la pestanya Mida, escriu 70 a la X, 30 a la Y i 40 a la Z.|Toca el cubo y, en la pestaña Medida, escribe 70 en la X, 30 en la Y y 40 en la Z.", sol: { parts: [P('a1', 'box', [70, 30, 40], [0, 0, 20], '#EC5FA8')] } },
        { k: 'm3build', ph: 'repte', q: "<b>Forats amb marge.</b> El retolador fa 14 mm. Fes tres forats rodons de <b>16 mm</b> (14 + 2 de marge) i 32 mm d'alt, que comencin a <b>z = 10</b> (així queda fons per sota). Van a x = −22, x = 0 i x = 22.|<b>Agujeros con margen.</b> El rotulador mide 14 mm. Haz tres agujeros redondos de <b>16 mm</b> (14 + 2 de margen) y 32 mm de alto, que empiecen en <b>z = 10</b> (así queda fondo por debajo). Van en x = −22, x = 0 y x = 22.",
          start: { parts: [BLOC(16)[0]] }, palette: ['hcyl'], target: { parts: BLOC(16) },
          checks: [{ k: 'part', t: 'cyl', hole: true, s: [16, 16, 32], at: [-22, 0, null], txt: "Forat de 16 mm a x = −22|Agujero de 16 mm en x = −22" }, { k: 'part', t: 'cyl', hole: true, s: [16, 16, 32], at: [0, 0, null], txt: 'Forat de 16 mm a x = 0|Agujero de 16 mm en x = 0' },
            { k: 'part', t: 'cyl', hole: true, s: [16, 16, 32], at: [22, 0, null], txt: 'Forat de 16 mm a x = 22|Agujero de 16 mm en x = 22' }, { k: 'onplate' }],
          hint: "Afegeix un forat rodó i posa-li 16 × 16 × 32 mm. A Posició: x = −22, y = 0, z = 10. Duplica'l i posa la còpia a x = 0; torna a tocar Duplica i el tercer surt sol a x = 22.|Añade un agujero redondo y ponle 16 × 16 × 32 mm. En Posición: x = −22, y = 0, z = 10. Duplícalo y pon la copia en x = 0; vuelve a tocar Duplica y el tercero sale solo en x = 22.",
          sol: { parts: BLOC(16) } },
        { k: 'm3build', ph: 'repte', q: "La tauleta de la biblioteca fa 9 mm de gruix. Al suport, la <b>ranura</b> entre el topall vermell i el respatller blau ha de fer <b>12 mm</b> (9 + 3 de marge). Ara fa massa. <b>Mou el respatller</b> fins que la ranura faci 12 mm.|La tableta de la biblioteca mide 9 mm de grosor. En el soporte, la <b>ranura</b> entre el tope rojo y el respaldo azul tiene que medir <b>12 mm</b> (9 + 3 de margen). Ahora mide demasiado. <b>Mueve el respaldo</b> hasta que la ranura mida 12 mm.",
          start: { parts: STAND(20) }, palette: ['box'],
          checks: [{ k: 'part', t: 'box', s: [80, 24, 30], at: [0, 0, null], txt: 'Ranura de 12 mm entre el topall i el respatller|Ranura de 12 mm entre el tope y el respaldo' }, { k: 'one' }, { k: 'onplate' }],
          hint: "El topall acaba a y = −24. Si la ranura fa 12 mm, el respatller comença a y = −12. Com que fa 24 mm de fondària, el seu centre (la y de Posició) és a y = 0.|El tope acaba en y = −24. Si la ranura mide 12 mm, el respaldo empieza en y = −12. Como mide 24 mm de fondo, su centro (la y de Posición) está en y = 0.",
          sol: { parts: STAND(0) } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>⭐ El porta-gomes.</b> La goma fa 40 × 20 mm. Fes-li un forat (una caixa forat) de <b>42 × 22 mm</b>, amb 12 mm d'alt i començant a <b>z = 3</b>: així queda un fons de 3 mm i el forat sobresurt una mica per dalt.|<b>⭐ El portagomas.</b> La goma mide 40 × 20 mm. Hazle un agujero (una caja agujero) de <b>42 × 22 mm</b>, con 12 mm de alto y empezando en <b>z = 3</b>: así queda un fondo de 3 mm y el agujero sobresale un poco por arriba.",
          start: { parts: [P('caixa', 'box', [50, 30, 13], [0, 0, 6.5], '#2FB36D')] }, palette: ['hbox'],
          checks: [{ k: 'part', t: 'box', hole: true, s: [42, 22, 12], txt: 'Forat de 42 × 22 mm (la goma + el marge)|Agujero de 42 × 22 mm (la goma + el margen)' }, { k: 'hole' }, { k: 'flatbase', min: 1000, t: 'Té fons: la base continua plana|Tiene fondo: la base sigue plana' }],
          hint: "Afegeix una caixa forat i posa-li 42 × 22 × 12 mm. A Posició: x = 0, y = 0, z = 3.|Añade una caja agujero y ponle 42 × 22 × 12 mm. En Posición: x = 0, y = 0, z = 3.",
          sol: { parts: [P('caixa', 'box', [50, 30, 13], [0, 0, 6.5], '#2FB36D'), H('forat', 'box', [42, 22, 12], [0, 0, 9])] } },
        { k: 'm3free', ph: 'crea', q: "<b>El teu porta-coses a mida.</b> Tria un objecte que hagis mesurat (un llapis, una goma, unes tisores…) i dissenya-li un suport a partir del teu esbós. Els forats: la mida de l'objecte + 2 mm.|<b>Tu portacosas a medida.</b> Elige un objeto que hayas medido (un lápiz, una goma, unas tijeras…) y diséñale un soporte a partir de tu boceto. Los agujeros: la medida del objeto + 2 mm.",
          name: 'El meu porta-coses|Mi portacosas',
          crit: ["L'has dibuixat abans en un esbós amb les cotes|Lo has dibujado antes en un boceto con las cotas", "Els forats fan la mida de l'objecte + 2 mm|Los agujeros miden la medida del objeto + 2 mm", 'Té una base plana i no es tomba|Tiene una base plana y no se vuelca'],
          checks: [{ k: 'hole' }, { k: 'flatbase', min: 400, t: 'Té una base plana per recolzar-se|Tiene una base plana para apoyarse' }, { k: 'one' }, { k: 'onplate' }],
          sol: { parts: [P('a1', 'box', [60, 30, 30], [0, 0, 15], '#7C5CFF'), H('a2', 'cyl', [10, 10, 26], [-15, 0, 18]), H('a3', 'cyl', [16, 16, 26], [12, 0, 18])] } },
        { k: 'quiz', ph: 'tanca', q: 'Un llapis fa <b>8 mm</b> de gruix. De quina mida faràs el forat?|Un lápiz mide <b>8 mm</b> de grosor. ¿De qué medida harás el agujero?', opts: ['10 mm|10 mm', '8 mm|8 mm', '6 mm|6 mm'], a: 0,
          ex: '8 mm del llapis + 2 mm de marge = 10 mm.|8 mm del lápiz + 2 mm de margen = 10 mm.' },
        { k: 'quiz', ph: 'tanca', q: 'Què és una <b>cota</b>?|¿Qué es una <b>cota</b>?', opts: ["Una mida escrita a l'esbós, amb una fletxa i un número|Una medida escrita en el boceto, con una flecha y un número", 'Un color del taller|Un color del taller', 'Una peça forat|Una pieza agujero'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ============ Sessió 3 · Provar i millorar ============ */
    { id: 'm7-3', t: 'Provar i millorar|Probar y mejorar', min: 44,
      learn: ["Iterar és fer versions: es prova cada versió amb les persones i se'n fa una de millor.|Iterar es hacer versiones: se prueba cada versión con las personas y se hace una mejor.",
        "Una bona retroacció és amable i concreta: dues estrelles (el que funciona) i un desig (com millorar-ho).|Una buena retroalimentación es amable y concreta: dos estrellas (lo que funciona) y un deseo (cómo mejorarlo).",
        "Per gastar menys plàstic, buidem les peces deixant parets de 2-3 mm i les fem tan grans com calgui, ni més ni menys.|Para gastar menos plástico, vaciamos las piezas dejando paredes de 2-3 mm y las hacemos tan grandes como haga falta, ni más ni menos."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Un retolador fa 14 mm. De quina mida faràs el forat?|Un rotulador mide 14 mm. ¿De qué medida harás el agujero?', opts: ['16 mm|16 mm', '14 mm|14 mm', '12 mm|12 mm'], a: 0,
          ex: '14 mm + 2 mm de marge = 16 mm.|14 mm + 2 mm de margen = 16 mm.' },
        { k: 'quiz', ph: 'recorda', q: "On escrius les mides de l'esbós a l'editor?|¿Dónde escribes las medidas del boceto en el editor?", opts: ['A la pestanya Mida: amplada a la X, fondària a la Y i alçada a la Z|En la pestaña Medida: anchura en la X, fondo en la Y y altura en la Z', 'A la pestanya Color|En la pestaña Color', 'Enlloc: es fa a ull|En ningún sitio: se hace a ojo'], a: 0 },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'Tres notes a la bústia|Tres notas en el buzón',
          t: "La Nuvi va imprimir la <b>versió 1</b> del porta-retoladors (la que vam fer abans d'aprendre el marge) i la classe de la Txell l'ha provat tota la setmana. Ens han deixat tres notes: «Els retoladors hi entren massa justos», «El porta-raspalls del lavabo es tomba» i «Quina estona per imprimir-ho, i quant de plàstic!». No són males notícies: són <b>pistes</b>. Avui farem les <b>versions 2</b>!|Nuvi imprimió la <b>versión 1</b> del portarrotuladores (la que hicimos antes de aprender el margen) y la clase de Txell la ha probado toda la semana. Nos han dejado tres notas: «Los rotuladores entran demasiado justos», «El portacepillos del lavabo se vuelca» y «¡Cuánto rato para imprimirlo, y cuánto plástico!». No son malas noticias: son <b>pistas</b>. ¡Hoy haremos las <b>versiones 2</b>!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Iterar|Iterar', t: 'Versió 1, versió 2, versió 3…|Versión 1, versión 2, versión 3…', anim: 'm7iter',
            x: "Cap dissenyador l'encerta a la primera. Es fa una <b>versió</b>, es <b>prova</b> amb les persones que la faran servir, s'apunta què falla i es fa una versió millor. Repetir aquest cercle es diu <b>iterar</b>. A cada volta, l'objecte és una mica millor.|Ningún diseñador lo acierta a la primera. Se hace una <b>versión</b>, se <b>prueba</b> con las personas que la usarán, se apunta qué falla y se hace una versión mejor. Repetir este círculo se llama <b>iterar</b>. En cada vuelta, el objeto es un poco mejor.",
            tip: "Desa cada versió amb un número (v1, v2…): així les pots comparar.|Guarda cada versión con un número (v1, v2…): así las puedes comparar." },
          { k: 'La retroacció|La retroalimentación', t: 'Dir-ho perquè ajudi|Decirlo para que ayude', anim: 'm7feed',
            x: "Quan proves l'objecte d'un company/a, li dones <b>retroacció</b>: què funciona i què milloraries. Una bona retroacció és <b>amable</b>, <b>concreta</b> i diu <b>com</b> millorar. Una manera fàcil: <b>dues estrelles i un desig</b>, dues coses que funcionen i una proposta.|Cuando pruebas el objeto de un compañero/a, le das <b>retroalimentación</b>: qué funciona y qué mejorarías. Una buena retroalimentación es <b>amable</b>, <b>concreta</b> y dice <b>cómo</b> mejorar. Una manera fácil: <b>dos estrellas y un deseo</b>, dos cosas que funcionan y una propuesta.",
            bad: "«És lleig.»|«Es feo.»", good: "«La base és molt estable. Els forats són justos: fes-los 2 mm més grans.»|«La base es muy estable. Los agujeros son justos: hazlos 2 mm más grandes.»" },
          { k: 'Menys plàstic|Menos plástico', t: 'La mateixa feina amb menys material|El mismo trabajo con menos material', media: { k: 'model', model: { parts: ECO } },
            x: "Tot el que imprimim gasta <b>plàstic</b>, <b>temps</b> i <b>energia</b>. Un dissenyador responsable fa que l'objecte faci la seva feina amb el mínim de material: el <b>buida</b> per dins (deixant parets de 2-3 mm), el fa només <b>tan gran com cal</b> i no imprimeix proves que no calen.|Todo lo que imprimimos gasta <b>plástico</b>, <b>tiempo</b> y <b>energía</b>. Un diseñador responsable hace que el objeto haga su trabajo con el mínimo de material: lo <b>vacía</b> por dentro (dejando paredes de 2-3 mm), lo hace solo <b>tan grande como hace falta</b> y no imprime pruebas que no hacen falta.",
            tip: "Tots dos porta-llapis aguanten els mateixos llapis. El massís (esquerra) gasta uns 103 cm³ de plàstic; el tub amb fons (dreta), uns 29 cm³.|Los dos portalápices aguantan los mismos lápices. El macizo (izquierda) gasta unos 103 cm³ de plástico; el tubo con fondo (derecha), unos 29 cm³." },
          { k: 'Estable|Estable', t: 'Que no es tombi|Que no se vuelque', anim: 'm7stable',
            x: "Un objecte alt amb la base petita es tomba amb un copet. Si fas la <b>base més ampla</b> que la part de dalt, o el fas més baix, queda <b>estable</b>. Pensa com t'aguantes tu: amb els peus junts et desequilibres; amb els peus oberts, no.|Un objeto alto con la base pequeña se vuelca con un golpecito. Si haces la <b>base más ancha</b> que la parte de arriba, o lo haces más bajo, queda <b>estable</b>. Piensa cómo te aguantas tú: con los pies juntos te desequilibras; con los pies abiertos, no." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '⭐', title: 'Dues estrelles i un desig|Dos estrellas y un deseo', t: "Per parelles, intercanvieu l'esbós (o el porta-coses que vau desar la sessió passada) i feu-vos de provadors:|Por parejas, intercambiad el boceto (o el portacosas que guardasteis la sesión pasada) y haced de probadores:",
          steps: ["Mira'l bé i pensa per a qui és i què ha de fer.|Míralo bien y piensa para quién es y qué tiene que hacer.", 'Escriu dues estrelles: dues coses que funcionen bé.|Escribe dos estrellas: dos cosas que funcionan bien.',
            'Escriu un desig: una millora concreta, amb números si pots.|Escribe un deseo: una mejora concreta, con números si puedes.', 'Torneu-vos els papers i llegiu-los en silenci. Quina millora faràs?|Devolveos los papeles y leedlos en silencio. ¿Qué mejora harás?'],
          tip: "Parla del disseny, no de la persona: «el forat és petit», no «ho has fet malament».|Habla del diseño, no de la persona: «el agujero es pequeño», no «lo has hecho mal»." },
        { k: 'm3look', ph: 'prova', q: "Tots dos porta-llapis aguanten els mateixos llapis. <b>Quin gasta menys plàstic?</b>|Los dos portalápices aguantan los mismos lápices. <b>¿Cuál gasta menos plástico?</b>",
          model: { parts: ECO }, opts: [{ model: { parts: SOLID(0) }, t: 'El massís|El macizo' }, { model: { parts: TUBE(0) }, t: 'El tub amb fons|El tubo con fondo' }], a: 1,
          ex: "El tub té parets de 2 mm i un fons de 3 mm: gasta menys d'un terç del plàstic del massís i fa la mateixa feina.|El tubo tiene paredes de 2 mm y un fondo de 3 mm: gasta menos de un tercio del plástico del macizo y hace el mismo trabajo." },
        { k: 'm3look', ph: 'investiga', q: "El porta-raspalls del lavabo cau cada dos per tres. <b>Per què?</b> Mira'l de costat.|El portacepillos del lavabo se cae cada dos por tres. <b>¿Por qué?</b> Míralo de lado.",
          model: { parts: TALL(24) }, view: 'front', opts: ['La base és tan estreta com el tub, i el tub és molt alt|La base es tan estrecha como el tubo, y el tubo es muy alto', 'És massa baix|Es demasiado bajo', 'Té massa forats|Tiene demasiados agujeros'], a: 0,
          ex: "Un objecte alt amb una base petita es tomba de seguida. Amb una base més ampla, el problema s'acaba.|Un objeto alto con una base pequeña se vuelca enseguida. Con una base más ancha, el problema se acaba." },
        { k: 'move', ph: 'pausa', title: 'Estàtues estables|Estatuas estables', secs: 30, t: "Posa't dret amb els peus <b>junts</b> i tanca els ulls: notes com et balanceges? Ara obre els peus a l'amplada de les espatlles: molt més estable! Prova-ho també a peu coix… <b>Base ampla, estàtua estable!</b>|Ponte de pie con los pies <b>juntos</b> y cierra los ojos: ¿notas cómo te balanceas? Ahora abre los pies a la anchura de los hombros: ¡mucho más estable! Pruébalo también a la pata coja… <b>¡Base ancha, estatua estable!</b>" },
        { k: 'm3fix', ph: 'repte', q: "Primera nota: <b>els retoladors hi entren massa justos</b>. A la versió 1, els forats fan 14 mm. Fes la versió 2: els tres forats, de <b>16 mm</b>.|Primera nota: <b>los rotuladores entran demasiado justos</b>. En la versión 1, los agujeros miden 14 mm. Haz la versión 2: los tres agujeros, de <b>16 mm</b>.",
          start: { parts: BLOC(14) }, fix: ['f1'], palette: ['hcyl'],
          checks: [{ k: 'part', t: 'cyl', hole: true, s: [16, 16, 32], at: [-22, 0, null], txt: "Forat de l'esquerra: 16 mm|Agujero de la izquierda: 16 mm" }, { k: 'part', t: 'cyl', hole: true, s: [16, 16, 32], at: [0, 0, null], txt: 'Forat del mig: 16 mm|Agujero del medio: 16 mm' },
            { k: 'part', t: 'cyl', hole: true, s: [16, 16, 32], at: [22, 0, null], txt: 'Forat de la dreta: 16 mm|Agujero de la derecha: 16 mm' }, { k: 'onplate' }],
          hint: "Toca cada forat i, a Mida, canvia el 14 per 16 a la X i a la Y. No toquis la Z.|Toca cada agujero y, en Medida, cambia el 14 por 16 en la X y en la Y. No toques la Z.", sol: { parts: BLOC(16) } },
        { k: 'm3fix', ph: 'repte', q: "Segona nota: <b>el porta-raspalls es tomba</b>. El peu fa només 24 mm, igual que el tub. Fes-lo de <b>60 mm</b> de diàmetre perquè quedi estable.|Segunda nota: <b>el portacepillos se vuelca</b>. El pie mide solo 24 mm, igual que el tubo. Hazlo de <b>60 mm</b> de diámetro para que quede estable.",
          start: { parts: TALL(24) }, fix: ['peu'], palette: ['cyl'],
          checks: [{ k: 'flatbase', min: 2500, t: 'La base és prou ampla per no tombar-se (uns 60 mm)|La base es bastante ancha para no volcarse (unos 60 mm)' }, { k: 'size', ax: 'z', v: 90, t: "Continua fent 90 mm d'alt|Sigue midiendo 90 mm de alto" }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca el peu groc i, a Mida, escriu 60 a la X i 60 a la Y. L'alçada (6 mm) no cal canviar-la.|Toca el pie amarillo y, en Medida, escribe 60 en la X y 60 en la Y. La altura (6 mm) no hace falta cambiarla.", sol: { parts: TALL(60) } },
        { k: 'm3build', ph: 'repte', q: "Tercera nota: <b>massa plàstic!</b> La caixa de clips és gairebé massissa: només té un forat de 10 mm a dalt. Buida-la: fes el forat de <b>44 × 44 mm</b> i 38 mm d'alt, començant a <b>z = 3</b>. Quedaran parets i fons de 3 mm.|Tercera nota: <b>¡demasiado plástico!</b> La caja de clips es casi maciza: solo tiene un agujero de 10 mm arriba. Vacíala: haz el agujero de <b>44 × 44 mm</b> y 38 mm de alto, empezando en <b>z = 3</b>. Quedarán paredes y fondo de 3 mm.",
          start: { parts: CLIPS(11, 40) }, palette: ['hbox'],
          checks: [{ k: 'vol', max: 35, t: 'Gasta com a molt 35 cm³ de plàstic (ara en gasta uns 82)|Gasta como mucho 35 cm³ de plástico (ahora gasta unos 82)' }, { k: 'wall', min: 2 }, { k: 'hole', t: 'Continua sent una caixa buida per dins|Sigue siendo una caja hueca por dentro' }, { k: 'size', ax: 'z', v: 40, t: "Continua fent 40 mm d'alt|Sigue midiendo 40 mm de alto" }],
          hint: "Toca el forat. A Mida: 44 × 44 × 38 mm. A Posició: x = 0, y = 0, z = 3.|Toca el agujero. En Medida: 44 × 44 × 38 mm. En Posición: x = 0, y = 0, z = 3.", sol: { parts: CLIPS(38, 44) } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>⭐ El porta-llapis lleuger.</b> Aquest porta-llapis massís gasta uns 103 cm³. Fes la versió 2 amb un <b>tub</b> de 50 mm de diàmetre i un <b>fons</b> de 3 mm: menys de 40 cm³ i 80 mm d'alt.|<b>⭐ El portalápices ligero.</b> Este portalápices macizo gasta unos 103 cm³. Haz la versión 2 con un <b>tubo</b> de 50 mm de diámetro y un <b>fondo</b> de 3 mm: menos de 40 cm³ y 80 mm de alto.",
          start: { parts: SOLID(0) }, palette: ['tube', 'cyl'],
          checks: [{ k: 'vol', max: 40, t: 'Gasta menys de 40 cm³ de plàstic|Gasta menos de 40 cm³ de plástico' }, { k: 'count', t: 'tube', min: 1, txt: 'Fa servir un tub|Usa un tubo' }, { k: 'flatbase', min: 1500, t: 'Té un fons pla perquè no caiguin els llapis|Tiene un fondo plano para que no caigan los lápices' }, { k: 'size', ax: 'z', v: 80, t: "Fa 80 mm d'alt|Mide 80 mm de alto" }, { k: 'one' }],
          hint: "Esborra les dues peces. Afegeix un cilindre de 50 × 50 × 3 mm (el fons) i un tub de 50 × 50 × 77 mm, amb la z a 3, just a sobre del fons.|Borra las dos piezas. Añade un cilindro de 50 × 50 × 3 mm (el fondo) y un tubo de 50 × 50 × 77 mm, con la z en 3, justo encima del fondo.",
          sol: { parts: TUBE(0) } },
        { k: 'm3free', ph: 'crea', q: "<b>La versió 2.</b> Aquí tens el teu porta-coses de la sessió passada (o el de la Txell, si no en vas desar cap). Fes-hi <b>almenys una millora</b> de les que t'han proposat: més marge, una base més ampla, menys plàstic…|<b>La versión 2.</b> Aquí tienes tu portacosas de la sesión pasada (o el de Txell, si no guardaste ninguno). Hazle <b>al menos una mejora</b> de las que te han propuesto: más margen, una base más ancha, menos plástico…",
          name: 'El meu porta-coses (versió 2)|Mi portacosas (versión 2)', get start() { const l = lastOf(['m7-3', 'm7-2']); return l ? { parts: cl(l.model.parts) } : { parts: BLOC(14) }; },
          crit: ["Has fet almenys una millora de la retroacció|Has hecho al menos una mejora de la retroalimentación", 'Gasta menys plàstic o funciona millor que la versió 1|Gasta menos plástico o funciona mejor que la versión 1', 'Continua tocant la placa, amb base plana|Sigue tocando la placa, con base plana'],
          checks: [{ k: 'onplate' }, { k: 'flatbase', min: 400, t: 'Té una base plana per recolzar-se|Tiene una base plana para apoyarse' }, { k: 'one' }], sol: { parts: BLOC(16) } },
        { k: 'quiz', ph: 'tanca', q: 'Què vol dir <b>iterar</b>?|¿Qué quiere decir <b>iterar</b>?', opts: ['Millorar un disseny fent versions i provant-les|Mejorar un diseño haciendo versiones y probándolas', 'Fer-lo una sola vegada, perfecte|Hacerlo una sola vez, perfecto', "Copiar el disseny d'un altre|Copiar el diseño de otro"], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Com gastes menys plàstic sense que la peça es trenqui?|¿Cómo gastas menos plástico sin que la pieza se rompa?', opts: ['La buido per dins però deixo parets de 2-3 mm|La vacío por dentro pero dejo paredes de 2-3 mm', "Faig les parets d'1 mm|Hago las paredes de 1 mm", 'La faig el doble de gran|La hago el doble de grande'], a: 0,
          ex: "Buida, però amb parets prou gruixudes: si no, la Nuvi no les pot fer fortes.|Vacía, pero con paredes bastante gruesas: si no, Nuvi no las puede hacer fuertes." },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ============ Sessió 4 · Projecte: un invent per a l'escola ============ */
    { id: 'm7-4', t: "Projecte: un invent per a l'escola|Proyecto: un invento para la escuela", min: 45, proj: true, badge: 'm7inventor',
      learn: ["Les especificacions diuen què ha de complir el disseny: per a qui és, què fa, les mides i com s'imprimirà.|Las especificaciones dicen qué tiene que cumplir el diseño: para quién es, qué hace, las medidas y cómo se imprimirá.",
        "Cada especificació s'ha de poder comprovar, amb un regle o amb les comprovacions del taller.|Cada especificación se tiene que poder comprobar, con una regla o con las comprobaciones del taller.",
        "Pensar com es posarà l'objecte a la placa també és dissenyar: estirat, sense parts a l'aire, és més fort.|Pensar cómo se pondrá el objeto en la placa también es diseñar: tumbado, sin partes en el aire, es más fuerte."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Un company/a et diu: «La base és molt estable; els forats són justos, fes-los més grans». Quina mena de retroacció és?|Un compañero/a te dice: «La base es muy estable; los agujeros son justos, hazlos más grandes». ¿Qué tipo de retroalimentación es?",
          opts: ['Amable i concreta: diu què funciona i com millorar|Amable y concreta: dice qué funciona y cómo mejorar', 'No serveix: no és un elogi|No sirve: no es un elogio', 'És una crítica a la persona|Es una crítica a la persona'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: 'Un objecte alt es tomba. Quina millora el fa més estable?|Un objeto alto se vuelca. ¿Qué mejora lo hace más estable?', opts: ['Fer la base més ampla|Hacer la base más ancha', 'Fer-lo més alt|Hacerlo más alto', "Pintar-lo d'un altre color|Pintarlo de otro color"], a: 0 },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'poble', title: "El concurs d'invents|El concurso de inventos",
          t: "La directora de l'escola, la <b>Montse</b>, ha obert el <b>Concurs d'invents</b>! L'escola necessita objectes útils: un <b>penjador</b> per a les motxilles del passadís, un <b>aguantallibres</b> per a la biblioteca i un <b>organitzador</b> per a la taula de la mestra. Tu seràs l'inventor/a: triaràs què fer, n'escriuràs les <b>especificacions</b> i el modelaràs. La Nuvi ja s'escalfa per imprimir-los!|La directora de la escuela, <b>Montse</b>, ¡ha abierto el <b>Concurso de inventos</b>! La escuela necesita objetos útiles: un <b>colgador</b> para las mochilas del pasillo, un <b>sujetalibros</b> para la biblioteca y un <b>organizador</b> para la mesa de la maestra. Tú serás el inventor/a: elegirás qué hacer, escribirás sus <b>especificaciones</b> y lo modelarás. ¡Nuvi ya se calienta para imprimirlos!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Especificacions|Especificaciones', t: 'Què ha de complir el teu invent|Qué tiene que cumplir tu invento', anim: 'm7spec',
            x: "Les <b>especificacions</b> són la llista del que ha de complir el disseny, escrita <b>abans</b> de començar: <b>per a qui</b> és, <b>què ha de fer</b>, les <b>mides</b> (màximes o exactes) i què cal perquè es pugui <b>imprimir</b>. Cada especificació s'ha de poder comprovar: «aguanta una motxilla», «fa com a molt 100 mm», «parets de 3 mm».|Las <b>especificaciones</b> son la lista de lo que tiene que cumplir el diseño, escrita <b>antes</b> de empezar: <b>para quién</b> es, <b>qué tiene que hacer</b>, las <b>medidas</b> (máximas o exactas) y qué hace falta para que se pueda <b>imprimir</b>. Cada especificación se tiene que poder comprobar: «aguanta una mochila», «mide como mucho 100 mm», «paredes de 3 mm».",
            tip: "Les comprovacions de cada repte del taller són especificacions que l'app revisa sola.|Las comprobaciones de cada reto del taller son especificaciones que la app revisa sola." },
          { k: 'Tres invents|Tres inventos', t: 'Penjador, aguantallibres i organitzador|Colgador, sujetalibros y organizador', media: { k: 'model', model: { parts: INVENTS } },
            x: "El <b>penjador</b> (esquerra) es cargola a la paret pels dos forats i té un ganxo per a la nansa. L'<b>aguantallibres</b> (centre) és una L amb dos reforços triangulars perquè no es dobli. L'<b>organitzador</b> (dreta) és una caixa buidada amb compartiments de mides diferents.|El <b>colgador</b> (izquierda) se atornilla a la pared por los dos agujeros y tiene un gancho para el asa. El <b>sujetalibros</b> (centro) es una L con dos refuerzos triangulares para que no se doble. El <b>organizador</b> (derecha) es una caja vaciada con compartimentos de medidas distintas.",
            tip: "Gira la vista: cada invent està fet només amb caixes, falques i forats.|Gira la vista: cada invento está hecho solo con cajas, cuñas y agujeros." },
          { k: 'Pensat per imprimir|Pensado para imprimir', t: 'Com el posaràs a la placa?|¿Cómo lo pondrás en la placa?', media: { k: 'model', model: { parts: HOOK(-19) } },
            x: "El penjador es dissenya <b>estirat</b> a la placa, com una lletra J. Així no té cap part a l'aire (la Nuvi no necessita suports) i les capes van d'una punta a l'altra del ganxo: és molt més <b>fort</b> que si l'imprimissis dret. Pensar com es col·locarà a la placa forma part del disseny.|El colgador se diseña <b>tumbado</b> en la placa, como una letra J. Así no tiene ninguna parte en el aire (Nuvi no necesita soportes) y las capas van de una punta a la otra del gancho: es mucho más <b>fuerte</b> que si lo imprimieras de pie. Pensar cómo se colocará en la placa forma parte del diseño." },
          { k: 'El camí del disseny|El camino del diseño', t: "De l'entrevista a l'invent|De la entrevista al invento", anim: 'm7road',
            x: "Ja coneixes tot el camí: <b>escoltar</b> la persona, fer l'<b>esbós amb mides</b>, <b>modelar</b> al taller, <b>provar</b> i <b>millorar</b>. Avui el recorreràs sencer amb el teu invent.|Ya conoces todo el camino: <b>escuchar</b> a la persona, hacer el <b>boceto con medidas</b>, <b>modelar</b> en el taller, <b>probar</b> y <b>mejorar</b>. Hoy lo recorrerás entero con tu invento." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '📋', title: "La fitxa d'especificacions|La ficha de especificaciones", t: "Tria el teu invent (o un altre que necessiti l'escola) i omple la fitxa:|Elige tu invento (u otro que necesite la escuela) y rellena la ficha:",
          steps: ['Per a qui és? On es farà servir?|¿Para quién es? ¿Dónde se usará?', 'Què ha de fer? Escriu-ho amb verbs: aguantar, guardar, penjar…|¿Qué tiene que hacer? Escríbelo con verbos: aguantar, guardar, colgar…',
            'Quines mides ha de tenir? Mesura el que hi anirà (una nansa, un llibre, uns llapis).|¿Qué medidas tiene que tener? Mide lo que irá en él (un asa, un libro, unos lápices).', "Fes l'esbós de davant i de dalt amb les cotes.|Haz el boceto de delante y de arriba con las cotas."],
          tip: "Si pots, ensenya la fitxa a qui farà servir l'invent: és la millor manera de saber si està bé.|Si puedes, enseña la ficha a quien usará el invento: es la mejor manera de saber si está bien." },
        { k: 'm3look', ph: 'prova', q: "Mira els tres invents. <b>Quants compartiments té l'organitzador?</b> Des de dalt es veu molt bé.|Mira los tres inventos. <b>¿Cuántos compartimentos tiene el organizador?</b> Desde arriba se ve muy bien.",
          model: { parts: INVENTS }, opts: ['3|3', '2|2', '4|4'], a: 0,
          ex: "Té un compartiment gran i dos de petits: tres forats caixa dins d'una sola caixa.|Tiene un compartimento grande y dos pequeños: tres agujeros caja dentro de una sola caja." },
        { k: 'm3fix', ph: 'investiga', q: "Ui! A aquest penjador, la punta del ganxo no toca el braç: hi ha 2 mm d'aire i la Nuvi l'imprimiria en dues peces. <b>Arregla'l</b> perquè sigui una sola peça.|¡Uy! En este colgador, la punta del gancho no toca el brazo: hay 2 mm de aire y Nuvi lo imprimiría en dos piezas. <b>Arréglalo</b> para que sea una sola pieza.",
          start: { parts: HOOK(-16) }, fix: ['punta'], palette: ['box', 'hcyl'], checks: [{ k: 'one' }, { k: 'onplate' }],
          hint: "Toca la punta i baixa-la: a Posició, la seva y ha de ser −19 (així es fica 1 mm dins del braç).|Toca la punta y bájala: en Posición, su y tiene que ser −19 (así se mete 1 mm dentro del brazo).", sol: { parts: HOOK(-19) } },
        { k: 'move', ph: 'pausa', title: 'Invents amb el cos|Inventos con el cuerpo', secs: 30, t: "Fes de <b>penjador</b>: un braç enganxat al cos (la part que va a la paret) i l'altre doblegat endavant com un ganxo. Ara fes d'<b>aguantallibres</b>: una L amb el cos, ben ferma! I ara d'<b>organitzador</b>: obre els braços com si guardessis coses a cada costat.|Haz de <b>colgador</b>: un brazo pegado al cuerpo (la parte que va a la pared) y el otro doblado hacia delante como un gancho. Ahora haz de <b>sujetalibros</b>: ¡una L con el cuerpo, bien firme! Y ahora de <b>organizador</b>: abre los brazos como si guardaras cosas a cada lado." },
        { k: 'm3build', ph: 'repte', q: "<b>Invent 1: el penjador de motxilles.</b> Ja tens l'esquena (la part que va a la paret). Afegeix-hi el <b>braç</b> i la <b>punta</b> del ganxo i <b>dos forats</b> de 5 mm per als cargols. Tot estirat, com el fantasma.|<b>Invento 1: el colgador de mochilas.</b> Ya tienes la espalda (la parte que va a la pared). Añádele el <b>brazo</b> y la <b>punta</b> del gancho y <b>dos agujeros</b> de 5 mm para los tornillos. Todo tumbado, como el fantasma.",
          start: { parts: [HOOK(-19)[0]] }, palette: ['box', 'hcyl'], target: { parts: HOOK(-19) },
          checks: [{ k: 'match', target: { parts: HOOK(-19) }, th: 0.85, t: "S'assembla al fantasma|Se parece al fantasma" }, { k: 'count', t: 'cyl', hole: true, min: 2, txt: '2 forats per als cargols|2 agujeros para los tornillos' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Braç: caixa de 44 × 12 × 12 mm a x = −2, y = −39. Punta: 12 × 30 × 12 mm a x = 14, y = −19. Forats: 5 × 5 × 14 mm a x = −24, y = 32 i y = 8.|Brazo: caja de 44 × 12 × 12 mm en x = −2, y = −39. Punta: 12 × 30 × 12 mm en x = 14, y = −19. Agujeros: 5 × 5 × 14 mm en x = −24, y = 32 e y = 8.",
          sol: { parts: HOOK(-19) } },
        { k: 'm3build', ph: 'repte', q: "<b>Invent 2: l'aguantallibres.</b> Ja tens la base. Afegeix la <b>paret</b> de 5 mm de gruix i 80 mm d'alt i dos <b>reforços</b> triangulars (falques) que la subjectin per darrere. Segueix el fantasma.|<b>Invento 2: el sujetalibros.</b> Ya tienes la base. Añade la <b>pared</b> de 5 mm de grosor y 80 mm de alto y dos <b>refuerzos</b> triangulares (cuñas) que la sujeten por detrás. Sigue el fantasma.",
          start: { parts: [BOOK[0]] }, palette: ['box', 'wedge'], target: { parts: BOOK },
          checks: [{ k: 'match', target: { parts: BOOK }, th: 0.85, t: "S'assembla al fantasma|Se parece al fantasma" }, { k: 'size', ax: 'z', v: 80, t: "Fa 80 mm d'alt per aguantar els llibres|Mide 80 mm de alto para aguantar los libros" }, { k: 'flatbase', min: 3000, t: 'Té una base plana i ampla|Tiene una base plana y ancha' }, { k: 'one' }],
          hint: "Paret: 70 × 5 × 80 mm a y = −37,5. Cada falca: 30 × 6 × 40 mm, girada 90° en z, a y = −20 i z = 5; una a x = −24 i l'altra a x = 24.|Pared: 70 × 5 × 80 mm en y = −37,5. Cada cuña: 30 × 6 × 40 mm, girada 90° en z, en y = −20 y z = 5; una en x = −24 y la otra en x = 24.",
          sol: { parts: BOOK } },
        { k: 'm3build', ph: 'repte', q: "<b>Invent 3: l'organitzador de la mestra.</b> Buida la caixa amb <b>tres forats</b>: un compartiment gran per a les llibretes i dos de petits per als clips i les gomes. Deixa parets de 3 mm o més, com el fantasma.|<b>Invento 3: el organizador de la maestra.</b> Vacía la caja con <b>tres agujeros</b>: un compartimento grande para las libretas y dos pequeños para los clips y las gomas. Deja paredes de 3 mm o más, como el fantasma.",
          start: { parts: [ORG[0]] }, palette: ['hbox'], target: { parts: ORG },
          checks: [{ k: 'match', target: { parts: ORG }, th: 0.85, t: "S'assembla al fantasma|Se parece al fantasma" }, { k: 'count', t: 'box', hole: true, min: 3, txt: '3 compartiments (3 forats caixa)|3 compartimentos (3 agujeros caja)' }, { k: 'wall', min: 2 }, { k: 'flatbase', min: 3000, t: 'El fons és pla|El fondo es plano' }],
          hint: "Tots els forats tenen 38 mm d'alt i z = 3. Gran: 52 × 54 mm a x = −16. Petits: 26 × 25 mm a x = 27, un a y = −14,5 i l'altre a y = 14,5.|Todos los agujeros tienen 38 mm de alto y z = 3. Grande: 52 × 54 mm en x = −16. Pequeños: 26 × 25 mm en x = 27, uno en y = −14,5 y el otro en y = 14,5.",
          sol: { parts: ORG } },
        { k: 'm3free', ph: 'crea', q: "<b>El teu invent per a l'escola.</b> Fes l'invent de la teva fitxa d'especificacions: un dels tres o un de teu. Abans d'acabar, comprova cada especificació.|<b>Tu invento para la escuela.</b> Haz el invento de tu ficha de especificaciones: uno de los tres o uno tuyo. Antes de terminar, comprueba cada especificación.",
          name: "El meu invent per a l'escola|Mi invento para la escuela",
          crit: ['Compleix les especificacions de la teva fitxa|Cumple las especificaciones de tu ficha', 'Té la mida pensada per a qui el farà servir|Tiene el tamaño pensado para quien lo usará', "Està pensat per imprimir-se bé (estirat, sense parts a l'aire)|Está pensado para imprimirse bien (tumbado, sin partes en el aire)"],
          checks: [{ k: 'onplate' }, { k: 'one' }, { k: 'count', min: 2, txt: 'Té almenys 2 peces|Tiene al menos 2 piezas' }, { k: 'fit', box: [180, 180, 150], t: 'Cap a la placa de la Nuvi|Cabe en la placa de Nuvi' }],
          sol: { parts: HOOK(-19) } },
        { k: 'quiz', ph: 'tanca', q: 'Quina especificació es pot comprovar?|¿Qué especificación se puede comprobar?', opts: ["«Fa com a molt 100 mm d'alt»|«Mide como mucho 100 mm de alto»", '«Ha de ser bonic»|«Tiene que ser bonito»', "«Ha d'agradar a tothom»|«Tiene que gustar a todo el mundo»"], a: 0,
          ex: "Amb un regle (o amb les comprovacions del taller) se sap si fa 100 mm o no. «Bonic» depèn de qui ho mira.|Con una regla (o con las comprobaciones del taller) se sabe si mide 100 mm o no. «Bonito» depende de quien lo mira." },
        { k: 'quiz', ph: 'tanca', q: 'Per què el penjador es dissenya estirat a la placa?|¿Por qué el colgador se diseña tumbado en la placa?', opts: ['Perquè no necessita suports i queda més fort|Porque no necesita soportes y queda más fuerte', 'Perquè així és més bonic|Porque así es más bonito', 'Perquè la Nuvi només imprimeix coses planes|Porque Nuvi solo imprime cosas planas'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] };
})();

/* ── unitat 8 ── */
/* Tech 3D · Nivell 1 · unitat 8 «El meu disseny» (projecte final: m8-1 … m8-4)
   Contingut propi de Numi (format: scripts/TECH-3D.md). Fil narratiu: l'escola i el centre cívic organitzen la Fira d'Invents
   del barri i cada alumne/a hi porta el seu propi disseny, que la Nuvi (la impressora del Taller de Bit) imprimirà. Exemple
   que recorre tota la unitat: el test de l'hort que la Jana dissenya per als infants de P4 (cilindre buidat amb parets i fons
   de 3 mm, tres forats de drenatge, dues nanses de falca simètriques que s'imprimeixen sense suports i una etiqueta amb un cor).
   m8-1 la idea (encàrrec, requisits amb números i esbós), m8-2 modelar-lo amb les eines del curs (forats, Duplica, Mirall, Gir),
   m8-3 revisar-lo (les quatre proves de la Nuvi: onplate, one, wall, fit; revisió per parelles amb rúbrica) i m8-4 presentar-lo,
   exportar l'STL i el diploma del curs (pas «diploma» de tech.js). El disseny propi passa d'una sessió a l'altra: el pas
   m3free de cada sessió comença amb l'últim model desat al portafoli des de m8-* (si no n'hi ha, amb el de la Jana).
   Peculiaritats del motor que tenen en compte les pistes: Duplica després de moure una còpia només repeteix l'últim moviment
   (per això les pistes diuen la x de cada còpia), Mirall reflecteix la peça al seu lloc (després cal escriure-li la x), la
   simetria és estricta, «una sola peça» falla si dues peces només es toquen (per això sempre es fiquen 1-2 mm l'una dins
   l'altra), les puntes de con no les detecta «parets» (les puntes s'ensenyen com a seguretat) i les peces noves no surten a
   l'origen (les pistes donen x, y i z). Models: { id, t, s: [x, y, z] mm, p: CENTRE, r: graus, c, hole }, placa de 200 mm. */
Object.assign(TBADGE, {
  m8fira: { id: 'm8fira', ico: '🏅', n: 'Dissenyador/a 3D|Diseñador/a 3D', d: "Has dissenyat el teu propi objecte de la idea a l'STL (encàrrec, requisits, model, revisió) i l'has presentat a la Fira d'Invents.|Has diseñado tu propio objeto de la idea al STL (encargo, requisitos, modelo, revisión) y lo has presentado en la Feria de Inventos." }
});
COURSE_UNITS[8] = (() => {
  const P = (id, t, s, p, c, o = {}) => ({ id, t, s, p, r: o.r || [0, 0, 0], c, ...o });
  // B: la z que es dona és la de la BASE (com a la pestanya Posició); h és l'alçada real si la peça és girada
  const B = (id, t, s, x, y, z0, c, o = {}) => P(id, t, s, [x, y, z0 + (o.h ?? s[2]) / 2], c, o);
  const H = (id, t, s, p, o = {}) => P(id, t, s, p, '#9AA3B5', { hole: true, ...o });
  const HB = (id, t, s, x, y, z0, o = {}) => H(id, t, s, [x, y, z0 + s[2] / 2], o);
  const ts = () => { try { return typeof TS_ === 'function' ? TS_() : null; } catch (e) { return null; } };
  const cl = m => JSON.parse(JSON.stringify(m));
  // l'últim model desat al portafoli des d'alguna d'aquestes sessions (el disseny propi continua a la sessió següent)
  const lastOf = sids => { const t = ts(); if (!t || !Array.isArray(t.port)) return null; for (let i = t.port.length - 1; i >= 0; i--) { const p = t.port[i]; if (p && p.kind === 'model' && sids.includes(p.sid) && p.model && Array.isArray(p.model.parts) && p.model.parts.length) return p; } return null; };
  const mine = (sids, def) => { const l = lastOf(sids); return { parts: cl(l ? l.model.parts : def) }; };
  const OR = '#FF8A3D', GR = '#F7C531', VM = '#E8453C';

  /* ---------- el test de l'hort de la Jana (l'exemple de tota la unitat) ---------- */
  const COS = B('cos', 'cyl', [60, 60, 56], 0, 0, 0, OR);
  const BUIT = HB('buit', 'cyl', [54, 54, 56], 0, 0, 3);                                   // parets i fons de 3 mm
  const DR = [-12, 0, 12].map((x, i) => HB('d' + (i + 1), 'cyl', [6, 6, 6], x, 0, -1));      // drenatge: travessen el fons
  const DR5 = [...DR, HB('d4', 'cyl', [6, 6, 6], 0, -12, -1), HB('d5', 'cyl', [6, 6, 6], 0, 12, -1)];
  // nanses: falques cap per avall (per sota fan pendent i s'imprimeixen sense suports); l'esquerra és el reflex de la dreta
  const NANSA = (id, x, z0, r) => B(id, 'wedge', [10, 16, 12], x, 0, z0, OR, { r });
  const NR = NANSA('n1', 33, 38, [180, 0, 0]), NL = NANSA('n2', -33, 38, [0, 180, 0]);
  const ET = y => B('etiqueta', 'box', [24, 4, 16], 0, y, 18, GR);
  const COR = P('cor', 'heart', [14, 14, 4], [0, -33, 26], VM, { r: [90, 0, 0] });         // dret: es fica 1 mm a l'etiqueta
  const V1 = [COS, BUIT], V2 = [...V1, ...DR, NR, NL], JANA = [...V2, ET(-30), COR];
  // la primera idea: un rètol amb pal que fa el test massa alt
  const IDEA0 = [...V1, B('pal', 'cyl', [4, 4, 86], 16, 0, 3, '#A0683A'), B('retol', 'box', [30, 3, 18], 16, 0, 70, '#F3F3EE')];
  // prova de simetria: la nansa esquerra feta sense Mirall (el pendent queda a dalt)
  const V2_SENSE = [...V1, ...DR, NR, NANSA('n2', -33, 38, [180, 0, 0])];

  /* ---------- m8-3 · dissenys d'altres participants de la fira, per revisar ---------- */
  const BIEL = d => [B('got', 'cyl', [40, 40, 60], 0, 0, 0, '#5BC0EB'), HB('forat', 'cyl', [d, d, 60], 0, 0, 3)];
  const BIEL_TALL = [...BIEL(38), H('tall', 'box', [60, 30, 70], [0, -15, 30])];   // tallat pel mig: es veu el gruix de la paret
  const COTXE = dz => [B('xassis', 'box', [56, 24, 12], 0, 0, 6 + dz, VM), B('cabina', 'box', [26, 20, 12], -6, 0, 18 + dz, '#5BC0EB'),
    ...[[-18, -13], [18, -13], [-18, 13], [18, 13]].map(([x, y], i) => B('roda' + (i + 1), 'cyl', [14, 14, 6], x, y, dz, '#2A2F3A', { r: [90, 0, 0], h: 14 }))];
  const RODES = ['xassis', 'cabina', 'roda1', 'roda2', 'roda3', 'roda4'];
  const OCELL = y => [B('peu', 'cyl', [20, 20, 4], 0, 0, 0, '#3D7BF4'), B('cos', 'sph', [40, 30, 30], 0, 0, 0, '#3D7BF4'), B('cap', 'sph', [22, 22, 22], 22, 0, 20, '#3D7BF4'),
    B('bec', 'cone', [8, 8, 10], 36, 0, 26, GR, { r: [0, 90, 0], h: 8 }), B('ala', 'box', [16, 4, 14], 0, y, 10, '#5BC0EB')];
  const COET = top => [B('cos', 'cyl', [24, 24, 50], 0, 0, 0, '#F3F3EE'), ...[0, 120, 240].map((a, i) => B('aleta' + (i + 1), 'box', [14, 4, 16], 15 * Math.cos(a * Math.PI / 180), 15 * Math.sin(a * Math.PI / 180), 0, VM, { r: [0, 0, a] })), top];
  const PUNXA = B('punta', 'cone', [24, 24, 20], 0, 0, 50, VM), RODONA = B('punta', 'sph', [24, 24, 24], 0, 0, 38, VM);
  const NINOT = [B('peu', 'cyl', [30, 30, 4], 0, 0, 0, '#F3F3EE'), B('cos', 'sph', [34, 34, 34], 0, 0, 0, '#F3F3EE'), B('cap', 'sph', [24, 24, 24], 0, 0, 30, '#F3F3EE'),
    P('nas', 'cone', [5, 5, 8], [0, -14, 42], '#FF8A3D', { r: [90, 0, 0] }), B('barret', 'cyl', [16, 16, 12], 0, 0, 57, '#1B2B6B')];

  /* ---------- m8-4 · els reptes de la fira ---------- */
  const PT = slot => [B('bloc', 'box', [60, 24, 16], 0, 0, 0, '#14A3B8'), ...(slot ? [HB('ranura', 'box', [56, 3, 12], 0, 0, 5)] : [])];
  const TROF = [B('base', 'cyl', [44, 44, 6], 0, 0, 0, '#1B2B6B'), B('columna', 'cyl', [12, 12, 30], 0, 0, 6, GR), B('bola', 'sph', [26, 26, 26], 0, 0, 32, GR)];

  const PLACA = { k: 'fit', box: [180, 180, 150], t: 'Cap a la placa de la Nuvi|Cabe en la placa de Nuvi' };

  return {
  t: 'El meu disseny|Mi diseño', d: 'Projecte final|Proyecto final', color: '#7C5CFF',
  s: [
    /* ============ Sessió 1 · La idea ============ */
    { id: 'm8-1', t: 'La idea|La idea', min: 43,
      learn: ["L'encàrrec diu per a qui és el teu disseny, quin problema resol i on es farà servir.|El encargo dice para quién es tu diseño, qué problema resuelve y dónde se usará.",
        "Els requisits són el que el disseny ha de complir, amb números: mides, ús, material i com s'imprimirà.|Los requisitos son lo que el diseño tiene que cumplir, con números: medidas, uso, material y cómo se imprimirá.",
        "L'esbós de davant i de dalt, amb les cotes, és el plànol: cada cota es converteix en un número del taller.|El boceto de delante y de arriba, con las cotas, es el plano: cada cota se convierte en un número del taller."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Comença l'última unitat! A la unitat 7 vas aprendre que un bon disseny comença… per on?|¡Empieza la última unidad! En la unidad 7 aprendiste que un buen diseño empieza… ¿por dónde?",
          opts: ['Per la persona que el farà servir i el que necessita|Por la persona que lo usará y lo que necesita', 'Per triar el color més bonic|Por elegir el color más bonito', 'Per posar moltes formes a la placa|Por poner muchas formas en la placa'], a: 0,
          ex: "Primer pensem per a qui és i què necessita; després dibuixem i modelem.|Primero pensamos para quién es y qué necesita; después dibujamos y modelamos." },
        { k: 'm3look', ph: 'recorda', q: "La Jana ha dibuixat el seu test mirant-lo així. <b>Quina vista és?</b>|Jana ha dibujado su maceta mirándola así. <b>¿Qué vista es?</b>",
          model: { parts: JANA }, view: 'top', lock: true, opts: ['Dalt (planta)|Arriba (planta)', 'Davant (alçat)|Delante (alzado)', 'Costat (perfil)|Lado (perfil)'], a: 0,
          ex: "Des de dalt es veuen el cercle del test, les dues nanses i l'etiqueta, però no l'alçada.|Desde arriba se ven el círculo de la maceta, las dos asas y la etiqueta, pero no la altura." },
        { k: 'story', ph: 'missio', who: 'both', scene: 'poble', title: "La Fira d'Invents|La Feria de Inventos",
          t: "Grans notícies al Taller de Bit! L'escola i el centre cívic organitzen la <b>Fira d'Invents del barri</b>, i hi tindràs un estand. Hi portaràs <b>el teu propi disseny</b>: un objecte inventat per tu, modelat al taller i imprès per la Nuvi. Tenim quatre sessions: avui, <b>la idea</b>; després, modelar-lo, revisar-lo i presentar-lo. La Jana ja ha començat el seu: un <b>test per a l'hort</b> dels infants de P4.|¡Grandes noticias en el Taller de Bit! La escuela y el centro cívico organizan la <b>Feria de Inventos del barrio</b>, y tendrás un estand. Llevarás <b>tu propio diseño</b>: un objeto inventado por ti, modelado en el taller e impreso por Nuvi. Tenemos cuatro sesiones: hoy, <b>la idea</b>; después, modelarlo, revisarlo y presentarlo. Jana ya ha empezado el suyo: una <b>maceta para el huerto</b> de los niños de P4." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El projecte final|El proyecto final', t: 'Quatre sessions, un disseny teu|Cuatro sesiones, un diseño tuyo', anim: 'm8road',
            x: "Quatre parades, una per sessió: <b>la idea</b>, <b>modelar-lo</b>, <b>revisar-lo</b> perquè la Nuvi el pugui imprimir i <b>presentar-lo</b> a la fira. Cada sessió en desaràs una versió i la següent la continuaràs.|Cuatro paradas, una por sesión: <b>la idea</b>, <b>modelarlo</b>, <b>revisarlo</b> para que Nuvi lo pueda imprimir y <b>presentarlo</b> en la feria. Cada sesión guardarás una versión y la siguiente la continuarás.",
            tip: "Millor una idea senzilla i ben acabada que una de gegant a mig fer.|Mejor una idea sencilla y bien acabada que una gigante a medio hacer." },
          { k: "L'encàrrec|El encargo", t: 'Per a qui, quin problema i on|Para quién, qué problema y dónde', anim: 'm8brief',
            x: "Tot projecte comença amb un <b>encàrrec</b>: poques frases que diuen <b>per a qui</b> és, <b>quin problema</b> resol i <b>on</b> es farà servir. El de la Jana: «Un test per als infants de P4, perquè les plantes de l'hort tinguin on créixer a la finestra de la classe.»|Todo proyecto empieza con un <b>encargo</b>: pocas frases que dicen <b>para quién</b> es, <b>qué problema</b> resuelve y <b>dónde</b> se usará. El de Jana: «Una maceta para los niños de P4, para que las plantas del huerto tengan dónde crecer en la ventana de la clase.»",
            tip: "Pensa en algú que coneguis: la idea surt millor si saps per a qui és.|Piensa en alguien que conozcas: la idea sale mejor si sabes para quién es." },
          { k: 'Els requisits|Los requisitos', t: 'El que ha de complir, amb números|Lo que tiene que cumplir, con números', media: { k: 'model', model: { parts: JANA } },
            x: "Els <b>requisits</b> diuen el que el disseny <b>ha de</b> complir. Els de la Jana: com a molt <b>80 × 80 × 60 mm</b> (l'ampit de la finestra); <b>forats</b> perquè surti l'aigua i <b>nanses</b> per a mans petites; parets i fons de <b>3 mm</b>; <b>base plana</b> i una sola peça.|Los <b>requisitos</b> dicen lo que el diseño <b>tiene que</b> cumplir. Los de Jana: como mucho <b>80 × 80 × 60 mm</b> (el alféizar de la ventana); <b>agujeros</b> para que salga el agua y <b>asas</b> para manos pequeñas; paredes y fondo de <b>3 mm</b>; <b>base plana</b> y una sola pieza.",
            tip: "Un bon requisit es pot comprovar amb el regle o amb el taller.|Un buen requisito se puede comprobar con la regla o con el taller." },
          { k: "L'esbós|El boceto", t: 'De davant i de dalt, amb cotes|De delante y de arriba, con cotas', anim: 'm8esbos',
            x: "Abans de modelar, la Jana dibuixa el test <b>de davant</b> (es veuen l'alçada i el fons) i <b>de dalt</b> (es veuen el diàmetre i els forats), i hi escriu les <b>cotes</b> en mil·límetres. Al taller, cada cota serà un número: 60 a la X i a la Y, 56 a la Z…|Antes de modelar, Jana dibuja la maceta <b>de delante</b> (se ven la altura y el fondo) y <b>de arriba</b> (se ven el diámetro y los agujeros), y escribe las <b>cotas</b> en milímetros. En el taller, cada cota será un número: 60 en la X y en la Y, 56 en la Z…",
            tip: "Si no saps una mida, mesura l'objecte real amb el regle.|Si no sabes una medida, mide el objeto real con la regla." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '💡', title: 'La fitxa del meu projecte|La ficha de mi proyecto', t: 'Amb la fitxa (o un full) i un llapis, sense pantalla:|Con la ficha (o una hoja) y un lápiz, sin pantalla:',
          steps: ["Escriu tres idees d'objectes útils per a algú que coneguis. Encercla la que puguis fer en dues sessions.|Escribe tres ideas de objetos útiles para alguien que conozcas. Rodea la que puedas hacer en dos sesiones.",
            "Escriu l'encàrrec: per a qui és, quin problema resol i on es farà servir.|Escribe el encargo: para quién es, qué problema resuelve y dónde se usará.",
            "Escriu tres requisits amb números: les mides màximes, l'ús i com s'imprimirà.|Escribe tres requisitos con números: las medidas máximas, el uso y cómo se imprimirá.",
            "Dibuixa l'esbós de davant i de dalt i escriu-hi les cotes en mm.|Dibuja el boceto de delante y de arriba y escribe las cotas en mm."],
          tip: "Explica l'encàrrec al company/a del costat: si l'entén a la primera, està ben escrit.|Explica el encargo al compañero/a de al lado: si lo entiende a la primera, está bien escrito." },
        { k: 'm3look', ph: 'prova', q: "Requisit d'ús: «que surti l'aigua». <b>Quants forats</b> té el fons del test? Mira'l des de dalt.|Requisito de uso: «que salga el agua». <b>¿Cuántos agujeros</b> tiene el fondo de la maceta? Mírala desde arriba.",
          model: { parts: JANA }, mode: 'result', view: 'top', opts: ['3|3', '1|1', '5|5'], a: 0,
          ex: "Tres forats de 6 mm en fila: l'aigua que sobra surt i les arrels no es fan malbé.|Tres agujeros de 6 mm en fila: el agua que sobra sale y las raíces no se estropean." },
        { k: 'm3look', ph: 'investiga', q: "Requisit: <b>com a molt 60 mm d'alt</b>. A la primera idea de la Jana, <b>toca la peça que no el compleix.</b>|Requisito: <b>como mucho 60 mm de alto</b>. En la primera idea de Jana, <b>toca la pieza que no lo cumple.</b>",
          model: { parts: IDEA0 }, pick: ['pal', 'retol'], yes: "Exacte: amb el rètol, el test arriba a 89 mm d'alt i no cap a l'ampit.|Exacto: con el letrero, la maceta llega a 89 mm de alto y no cabe en el alféizar.",
          no: "Aquesta peça fa menys de 60 mm. Mira el test de davant: què sobresurt per dalt?|Esta pieza mide menos de 60 mm. Mira la maceta de delante: ¿qué sobresale por arriba?",
          ex: "Per això la Jana el va canviar per una etiqueta enganxada al costat del test.|Por eso Jana lo cambió por una etiqueta pegada al lado de la maceta." },
        { k: 'move', ph: 'pausa', title: "L'invent amb el cos|El invento con el cuerpo", secs: 30, t: "Dret/a! Fes la forma del teu invent amb el cos: és alt i prim, o baix i ample? Ara ensenya amb les mans quant mesurarà: 1 cm… 10 cm… 20 cm (la placa de la Nuvi!). Hi cap?|¡De pie! Haz la forma de tu invento con el cuerpo: ¿es alto y delgado, o bajo y ancho? Ahora enseña con las manos cuánto medirá: 1 cm… 10 cm… 20 cm (¡la placa de Nuvi!). ¿Cabe?" },
        { k: 'm3build', ph: 'repte', q: "<b>De l'esbós a la pantalla.</b> Posa al cilindre les mides de l'esbós: <b>60 mm</b> de diàmetre i <b>56 mm</b> d'alt.|<b>Del boceto a la pantalla.</b> Pon al cilindro las medidas del boceto: <b>60 mm</b> de diámetro y <b>56 mm</b> de alto.",
          start: { parts: [B('cos', 'cyl', [40, 40, 40], 0, 0, 0, OR)] }, palette: ['cyl'],
          checks: [{ k: 'size', ax: 'x', v: 60, t: 'Diàmetre de 60 mm en x|Diámetro de 60 mm en x' }, { k: 'size', ax: 'y', v: 60, t: 'Diàmetre de 60 mm en y|Diámetro de 60 mm en y' }, { k: 'size', ax: 'z', v: 56, t: "Alçada de 56 mm|Altura de 56 mm" }, { k: 'onplate' }],
          hint: "Toca el cilindre i, a la pestanya Mida, escriu 60 a la X, 60 a la Y i 56 a la Z.|Toca el cilindro y, en la pestaña Medida, escribe 60 en la X, 60 en la Y y 56 en la Z.",
          sol: { parts: [COS] } },
        { k: 'm3build', ph: 'repte', q: "<b>Parets i fons de 3 mm.</b> Buida el test: forat rodó de <b>54 × 54 × 56 mm</b> a <b>z = 3</b> (60 − 2 × 3 = 54).|<b>Paredes y fondo de 3 mm.</b> Vacía la maceta: agujero redondo de <b>54 × 54 × 56 mm</b> en <b>z = 3</b> (60 − 2 × 3 = 54).",
          start: { parts: [COS] }, palette: ['hcyl'], target: { parts: V1 },
          checks: [{ k: 'part', t: 'cyl', hole: true, s: [54, 54, 56], base: 3, tol: 0.6, txt: 'Forat de 54 mm que comença a z = 3|Agujero de 54 mm que empieza en z = 3' }, { k: 'flatbase', min: 2000, t: 'El fons de 3 mm és sencer|El fondo de 3 mm está entero' }, { k: 'wall', min: 2, t: 'Parets de 2 mm o més|Paredes de 2 mm o más' }],
          hint: "Afegeix un Forat rodó. A Mida: 54, 54 i 56. A Posició: x = 0, y = 0, z = 3.|Añade un Agujero redondo. En Medida: 54, 54 y 56. En Posición: x = 0, y = 0, z = 3.",
          sol: { parts: V1 } },
        { k: 'm3fix', ph: 'repte', q: "<b>Com a molt 80 × 80 × 60 mm i una sola peça.</b> L'etiqueta s'ha separat del test: <b>enganxa-la</b> a la paret.|<b>Como mucho 80 × 80 × 60 mm y una sola pieza.</b> La etiqueta se ha separado de la maceta: <b>pégala</b> a la pared.",
          start: { parts: [...V1, ET(-52)] }, fix: ['etiqueta'], palette: ['box'],
          checks: [{ k: 'fit', box: [80, 80, 60], t: 'Cap en 80 × 80 × 60 mm|Cabe en 80 × 80 × 60 mm' }, { k: 'one', t: "L'etiqueta està enganxada al test|La etiqueta está pegada a la maceta" }, { k: 'onplate' }],
          hint: "L'etiqueta ja està seleccionada. A Posició, escriu y = −30: així es fica 2 mm dins de la paret.|La etiqueta ya está seleccionada. En Posición, escribe y = −30: así se mete 2 mm dentro de la pared.",
          sol: { parts: [...V1, ET(-30)] } },
        { k: 'm3free', ph: 'crea', q: "<b>La versió 1 del teu disseny.</b> Posa a la placa les <b>formes principals</b> amb les mides del teu esbós.|<b>La versión 1 de tu diseño.</b> Pon en la placa las <b>formas principales</b> con las medidas de tu boceto.",
          name: 'El meu disseny (v1)|Mi diseño (v1)',
          crit: ["Té les mides principals de l'esbós|Tiene las medidas principales del boceto", 'Hi ha les formes grans (encara sense detalls)|Están las formas grandes (aún sin detalles)', 'Toca la placa i cap a la Nuvi|Toca la placa y cabe en Nuvi'],
          checks: [{ k: 'onplate' }, { k: 'count', min: 2, txt: 'Té almenys 2 peces|Tiene al menos 2 piezas' }, PLACA], sol: { parts: V1 } },
        { k: 'quiz', ph: 'tanca', q: "Què ha de dir l'<b>encàrrec</b> d'un projecte?|¿Qué tiene que decir el <b>encargo</b> de un proyecto?",
          opts: ['Per a qui és, quin problema resol i on es farà servir|Para quién es, qué problema resuelve y dónde se usará', 'Quins colors tindrà|Qué colores tendrá', 'Quantes peces farà servir|Cuántas piezas usará'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "La fitxa diu «ha de cabre a la placa de la Nuvi». Quina comprovació del taller ho revisa?|La ficha dice «tiene que caber en la placa de Nuvi». ¿Qué comprobación del taller lo revisa?",
          opts: ['«Cap dins de 180 × 180 × 150 mm»|«Cabe dentro de 180 × 180 × 150 mm»', '«Té almenys un forat»|«Tiene al menos un agujero»', '«És simètric»|«Es simétrico»'], a: 0,
          ex: "Cada requisit amb números es pot convertir en una comprovació.|Cada requisito con números se puede convertir en una comprobación." },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ============ Sessió 2 · Modelar-lo ============ */
    { id: 'm8-2', t: 'Modelar-lo|Modelarlo', min: 44,
      learn: ["Es modela per ordre: primer les formes grans, després els forats i al final els detalls.|Se modela por orden: primero las formas grandes, después los agujeros y al final los detalles.",
        "Les eines del taller donen precisió i estalvien feina: mides en mm, Duplica per repetir, Mirall per a les simetries i forats per restar.|Las herramientas del taller dan precisión y ahorran trabajo: medidas en mm, Duplica para repetir, Espejo para las simetrías y agujeros para restar.",
        "Cada sessió es desa una versió nova: la v2 continua la v1 i no cal començar de zero.|Cada sesión se guarda una versión nueva: la v2 continúa la v1 y no hace falta empezar de cero."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Vols un forat que travessi un fons de 3 mm. Com el poses?|Quieres un agujero que atraviese un fondo de 3 mm. ¿Cómo lo pones?",
          opts: ['Més alt que el fons i començant una mica per sota (z = −1)|Más alto que el fondo y empezando un poco por debajo (z = −1)', 'De 3 mm justos, a z = 3|De 3 mm justos, en z = 3', 'Al costat del fons, sense tocar-lo|Al lado del fondo, sin tocarlo'], a: 0,
          ex: "Si el forat sobresurt una mica per sota i per dalt, segur que travessa.|Si el agujero sobresale un poco por debajo y por arriba, seguro que atraviesa." },
        { k: 'quiz', ph: 'recorda', q: "Què fa l'eina <b>Mirall</b>?|¿Qué hace la herramienta <b>Espejo</b>?",
          opts: ["Dona la volta a la peça com en un mirall: el que mirava a la dreta mira a l'esquerra|Da la vuelta a la pieza como en un espejo: lo que miraba a la derecha mira a la izquierda", 'Fa la peça el doble de gran|Hace la pieza el doble de grande', 'Converteix la peça en un forat|Convierte la pieza en un agujero'], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'fab', title: "La caixa d'eines|La caja de herramientas",
          t: "La Nuvi està impacient: «Quan em portareu els dissenys?» Avui <b>modelarem el disseny complet</b>. Tens a punt totes les eines que has après durant el curs: mides en mil·límetres, girs, Alinea, Duplica, Mirall i forats. La Jana ho farà amb el seu test, pas a pas… i tu, amb el teu invent!|Nuvi está impaciente: «¿Cuándo me traeréis los diseños?» Hoy <b>modelaremos el diseño completo</b>. Tienes a punto todas las herramientas que has aprendido durante el curso: medidas en milímetros, giros, Alinea, Duplica, Espejo y agujeros. Jana lo hará con su maceta, paso a paso… ¡y tú, con tu invento!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Per ordre|Por orden', t: 'Primer el gran, després el petit|Primero lo grande, después lo pequeño', anim: 'm8ordre',
            x: "Un model es construeix com una casa: <b>1)</b> les <b>formes grans</b> amb les mides de l'esbós; <b>2)</b> els <b>forats</b> que buiden o travessen; <b>3)</b> els <b>detalls</b> (nanses, etiquetes, relleus); <b>4)</b> una <b>comprovació</b> amb les vistes i el regle. Si comences pels detalls, després no saps on posar-los.|Un modelo se construye como una casa: <b>1)</b> las <b>formas grandes</b> con las medidas del boceto; <b>2)</b> los <b>agujeros</b> que vacían o atraviesan; <b>3)</b> los <b>detalles</b> (asas, etiquetas, relieves); <b>4)</b> una <b>comprobación</b> con las vistas y la regla. Si empiezas por los detalles, después no sabes dónde ponerlos." },
          { k: "La caixa d'eines|La caja de herramientas", t: "Tot el que has après, a punt|Todo lo que has aprendido, a punto", anim: 'm8eines',
            x: "<b>Mida i Posició</b> (en mm) per ser exacte. <b>Gir</b> per posar dreta una peça. <b>Alinea</b> per centrar o recolzar. <b>Duplica</b> per repetir amb el mateix pas. <b>Mirall</b> per fer l'altra meitat d'una figura simètrica. I <b>Forat</b> per restar. Abans de fer res a ull, pregunta't: quina eina ho fa exacte?|<b>Medida y Posición</b> (en mm) para ser exacto. <b>Giro</b> para poner de pie una pieza. <b>Alinea</b> para centrar o apoyar. <b>Duplica</b> para repetir con el mismo paso. <b>Espejo</b> para hacer la otra mitad de una figura simétrica. Y <b>Agujero</b> para restar. Antes de hacer nada a ojo, pregúntate: ¿qué herramienta lo hace exacto?" },
          { k: 'Detalls útils|Detalles útiles', t: 'Cada detall respon un requisit|Cada detalle responde a un requisito', media: { k: 'model', model: { parts: JANA } },
            x: "Els <b>forats</b> deixen sortir l'aigua; les <b>nanses</b> són per agafar-lo amb les dues mans; l'<b>etiqueta</b> amb el cor diu de qui és. Les nanses són falques cap per avall: per sota fan pendent i s'imprimeixen sense suports.|Los <b>agujeros</b> dejan salir el agua; las <b>asas</b> son para cogerla con las dos manos; la <b>etiqueta</b> con el corazón dice de quién es. Las asas son cuñas boca abajo: por debajo hacen pendiente y se imprimen sin soportes.",
            tip: "Gira'l i mira'l per sota: veus el pendent de les nanses?|Gírala y mírala por debajo: ¿ves la pendiente de las asas?" },
          { k: 'Versions|Versiones', t: 'Desa i continua la sessió que ve|Guarda y continúa la sesión que viene', anim: 'm8versio',
            x: "Quan desis el projecte, el taller el guarda a «Projectes». A la sessió següent, el pas de crear <b>comença amb la teva última versió</b>: v1 → v2 → v3. Així no comences mai de zero, i sempre pots veure com ha millorat.|Cuando guardes el proyecto, el taller lo guarda en «Proyectos». En la sesión siguiente, el paso de crear <b>empieza con tu última versión</b>: v1 → v2 → v3. Así nunca empiezas de cero, y siempre puedes ver cómo ha mejorado.",
            tip: "Posa-li un nom que el diferenciï: «Test v2», «Penjador v2»…|Ponle un nombre que lo diferencie: «Maceta v2», «Colgador v2»…" }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🗒️', title: 'El pla de construcció|El plan de construcción', t: "Amb l'esbós de la sessió passada i un llapis:|Con el boceto de la sesión pasada y un lápiz:",
          steps: ["Numera les peces de l'esbós en l'ordre en què les faràs: les grans, els forats i els detalls.|Numera las piezas del boceto en el orden en que las harás: las grandes, los agujeros y los detalles.",
            'Al costat de cada peça, escriu-ne la forma i les mides (x, y, z) en mm.|Al lado de cada pieza, escribe su forma y sus medidas (x, y, z) en mm.',
            "Marca amb una estrella les peces que es repeteixen (Duplica) o que són simètriques (Mirall).|Marca con una estrella las piezas que se repiten (Duplica) o que son simétricas (Espejo).",
            "Explica el pla al company/a: entén en quin ordre ho faràs?|Explica el plan al compañero/a: ¿entiende en qué orden lo harás?"],
          tip: "Si dues peces s'han de tocar, fes que una es fiqui 1 o 2 mm dins de l'altra: així seran una sola peça.|Si dos piezas se tienen que tocar, haz que una se meta 1 o 2 mm dentro de la otra: así serán una sola pieza." },
        { k: 'm3look', ph: 'prova', q: "Les dues nanses són iguals però <b>miren cap a costats oposats</b>. Quina eina va fer servir la Jana per fer la segona?|Las dos asas son iguales pero <b>miran hacia lados opuestos</b>. ¿Qué herramienta usó Jana para hacer la segunda?",
          model: { parts: V2 }, view: 'front', opts: ['Duplica i Mirall|Duplica y Espejo', 'Escala amb Proporcional|Escala con Proporcional', 'Forat|Agujero'], a: 0,
          ex: "Duplica fa la còpia i Mirall li dona la volta, com en un mirall. Després només cal posar-la al seu lloc.|Duplica hace la copia y Espejo le da la vuelta, como en un espejo. Después solo hay que ponerla en su sitio." },
        { k: 'm3look', ph: 'investiga', q: "Una nansa <b>no</b> és el reflex de l'altra: té el pendent a dalt i la punta de sota a l'aire. <b>Toca-la.</b>|Un asa <b>no</b> es el reflejo de la otra: tiene la pendiente arriba y la punta de abajo en el aire. <b>Tócala.</b>",
          model: { parts: V2_SENSE }, view: 'front', pick: 'n2', yes: "Exacte: aquesta nansa no és el reflex de l'altra. La Nuvi començaria la seva punta de sota en l'aire.|Exacto: esta asa no es el reflejo de la otra. Nuvi empezaría su punta de abajo en el aire.",
          no: "Aquesta nansa té el pendent a sota, com ha de ser. Compara-les de davant.|Esta asa tiene la pendiente debajo, como tiene que ser. Compáralas de delante.",
          ex: "Amb Duplica i Mirall, la còpia hauria quedat com un reflex: amb el pendent a sota, com la dreta.|Con Duplica y Espejo, la copia habría quedado como un reflejo: con la pendiente debajo, como la derecha." },
        { k: 'move', ph: 'pausa', title: 'El mirall humà|El espejo humano', secs: 30, t: "Per parelles, l'un davant de l'altre. Un fa moviments lents amb els braços i l'altre els copia com si fos el seu reflex: si aixeques la mà dreta, el mirall aixeca l'esquerra! Després canvieu.|Por parejas, uno delante del otro. Uno hace movimientos lentos con los brazos y el otro los copia como si fuera su reflejo: si levantas la mano derecha, ¡el espejo levanta la izquierda! Después cambiad." },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 2: el drenatge.</b> Tres forats rodons de <b>6 × 6 × 6 mm</b> a <b>x = −12, 0 i 12</b>. Fes-ne un i <b>duplica'l</b>.|<b>Paso 2: el drenaje.</b> Tres agujeros redondos de <b>6 × 6 × 6 mm</b> en <b>x = −12, 0 y 12</b>. Haz uno y <b>duplícalo</b>.",
          start: { parts: V1 }, palette: ['hcyl'], target: { parts: [...V1, ...DR] },
          checks: [...[-12, 0, 12].map(x => ({ k: 'part', t: 'cyl', hole: true, s: [6, 6, 6], at: [x, 0, null], tol: 0.6, txt: `Forat de 6 mm a x = ${String(x).replace('-', '−')}|Agujero de 6 mm en x = ${String(x).replace('-', '−')}` })), { k: 'flatbase', min: 2000, t: 'El fons continua pla|El fondo sigue plano' }],
          hint: "Forat rodó: a Mida, 6, 6 i 6; a Posició, x = −12, y = 0, z = −1. Duplica'l i escriu x = 0. Torna a tocar Duplica: el tercer surt sol a x = 12.|Agujero redondo: en Medida, 6, 6 y 6; en Posición, x = −12, y = 0, z = −1. Duplícalo y escribe x = 0. Vuelve a tocar Duplica: el tercero sale solo en x = 12.",
          sol: { parts: [...V1, ...DR] } },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 3: les nanses.</b> La dreta ja hi és. Fes l'esquerra <b>igual però com en un mirall</b>, a x = −33: <b>Mirall → Còpia a l'altre costat (x)</b>.|<b>Paso 3: las asas.</b> La derecha ya está. Haz la izquierda <b>igual pero como en un espejo</b>, en x = −33: <b>Espejo → Copia al otro lado (x)</b>.",
          start: { parts: [...V1, ...DR, NR] }, palette: ['wedge'], target: { parts: V2 },
          checks: [{ k: 'sym', ax: 'x', th: 0.98, t: 'El test és simètric (mirall en x)|La maceta es simétrica (espejo en x)' }, { k: 'count', t: 'wedge', min: 2, max: 2, txt: 'Té dues nanses|Tiene dos asas' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca la nansa i Mirall → Còpia a l'altre costat (x): surt girada a x = −33. O bé: Duplica, Mirall → Esquerra ↔ dreta (x) i, a Posició, x = −33.|Toca el asa y Espejo → Copia al otro lado (x): sale girada en x = −33. O bien: Duplica, Espejo → Izquierda ↔ derecha (x) y, en Posición, x = −33.",
          sol: { parts: V2 } },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 4: el detall.</b> Posa un <b>cor</b> de 14 × 14 × 4 mm <b>dret</b> davant de l'etiqueta: gira'l 90° en x.|<b>Paso 4: el detalle.</b> Pon un <b>corazón</b> de 14 × 14 × 4 mm <b>de pie</b> delante de la etiqueta: gíralo 90° en x.",
          start: { parts: [...V2, ET(-30)] }, palette: ['heart'], target: { parts: JANA },
          checks: [{ k: 'part', t: 'heart', s: [14, 4, 14], at: [0, -33, null], tol: 1, txt: "El cor és dret, davant de l'etiqueta|El corazón está de pie, delante de la etiqueta" }, { k: 'one' }, { k: 'fit', box: [80, 80, 60], t: 'Continua cabent en 80 × 80 × 60 mm|Sigue cabiendo en 80 × 80 × 60 mm' }],
          hint: "Afegeix un cor. A Mida: 14, 14 i 4. A Gir: x = 90. A Posició: x = 0, y = −33, z = 19.|Añade un corazón. En Medida: 14, 14 y 4. En Giro: x = 90. En Posición: x = 0, y = −33, z = 19.",
          sol: { parts: JANA } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>⭐ Drenatge en creu.</b> Afegeix dos forats més de 6 mm a <b>y = −12</b> i a <b>y = 12</b> (amb x = 0): cinc forats en creu.|<b>⭐ Drenaje en cruz.</b> Añade dos agujeros más de 6 mm en <b>y = −12</b> y en <b>y = 12</b> (con x = 0): cinco agujeros en cruz.",
          start: { parts: JANA }, palette: ['hcyl'], target: { parts: [...JANA, ...DR5.slice(3)] },
          checks: [{ k: 'part', t: 'cyl', hole: true, s: [6, 6, 6], at: [0, -12, null], tol: 0.6, txt: 'Forat de 6 mm a y = −12|Agujero de 6 mm en y = −12' }, { k: 'part', t: 'cyl', hole: true, s: [6, 6, 6], at: [0, 12, null], tol: 0.6, txt: 'Forat de 6 mm a y = 12|Agujero de 6 mm en y = 12' }, { k: 'flatbase', min: 2000, t: 'El fons continua pla|El fondo sigue plano' }],
          hint: "Toca el forat del mig (x = 0) i Duplica. A Posició: x = 0, y = −12. Duplica'l una altra vegada i escriu x = 0, y = 12.|Toca el agujero del medio (x = 0) y Duplica. En Posición: x = 0, y = −12. Duplícalo otra vez y escribe x = 0, y = 12.",
          sol: { parts: [...JANA, ...DR5.slice(3)] } },
        { k: 'm3free', ph: 'crea', q: "<b>La versió 2.</b> Continua la teva v1 (o la de la Jana) seguint el pla: <b>forats, detalls i comprovació</b>.|<b>La versión 2.</b> Continúa tu v1 (o la de Jana) siguiendo el plan: <b>agujeros, detalles y comprobación</b>.",
          name: 'El meu disseny (v2)|Mi diseño (v2)', get start() { return mine(['m8-2', 'm8-1'], V1); },
          crit: ["Hi ha totes les parts del teu esbós|Están todas las partes de tu boceto", 'Has fet servir almenys dues eines: Duplica, Mirall, Alinea, Forat…|Has usado al menos dos herramientas: Duplica, Espejo, Alinea, Agujero…', 'Les mides són les de la teva fitxa|Las medidas son las de tu ficha'],
          checks: [{ k: 'onplate' }, { k: 'count', min: 3, txt: 'Té almenys 3 peces|Tiene al menos 3 piezas' }, PLACA], sol: { parts: V2 } },
        { k: 'quiz', ph: 'tanca', q: 'En quin ordre es modela?|¿En qué orden se modela?',
          opts: ['Formes grans → forats → detalls → comprovar|Formas grandes → agujeros → detalles → comprobar', 'Detalls → formes grans → forats|Detalles → formas grandes → agujeros', 'Tot alhora, a ull|Todo a la vez, a ojo'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Vols cinc forats iguals en fila, a 10 mm l'un de l'altre. Quina eina t'estalvia més feina?|Quieres cinco agujeros iguales en fila, a 10 mm uno de otro. ¿Qué herramienta te ahorra más trabajo?",
          opts: ['Duplica, i canviar la x de cada còpia|Duplica, y cambiar la x de cada copia', 'Mirall|Espejo', 'Escala|Escala'], a: 0,
          ex: "Duplica copia la mida i l'alçada: només cal escriure la x de cada còpia.|Duplica copia la medida y la altura: solo hay que escribir la x de cada copia." },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ============ Sessió 3 · Revisar-lo ============ */
    { id: 'm8-3', t: 'Revisar-lo|Revisarlo', min: 44,
      learn: ["Abans d'imprimir, la Nuvi revisa quatre proves: toca la placa, una sola peça, parets de 2 mm o més i cap a la placa.|Antes de imprimir, Nuvi revisa cuatro pruebas: toca la placa, una sola pieza, paredes de 2 mm o más y cabe en la placa.",
        "Si dues peces només es toquen, fica-les 1 o 2 mm l'una dins de l'altra; i les puntes, millor arrodonides.|Si dos piezas solo se tocan, mételas 1 o 2 mm una dentro de la otra; y las puntas, mejor redondeadas.",
        "Una bona revisió entre iguals segueix la rúbrica i dona dues estrelles i un desig concret.|Una buena revisión entre iguales sigue la rúbrica y da dos estrellas y un deseo concreto."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Una peça flota 2 mm per sobre de la placa. Què passarà quan la Nuvi l'imprimeixi?|Una pieza flota 2 mm por encima de la placa. ¿Qué pasará cuando Nuvi la imprima?",
          opts: ["El plàstic caurà a l'aire: així no es pot imprimir|El plástico caerá en el aire: así no se puede imprimir", 'Sortirà igual de bé|Saldrá igual de bien', 'La Nuvi la farà més petita|Nuvi la hará más pequeña'], a: 0,
          ex: "La primera capa s'ha d'enganxar a la placa: tot ha de començar a z = 0.|La primera capa se tiene que pegar a la placa: todo tiene que empezar en z = 0." },
        { k: 'quiz', ph: 'recorda', q: "«Dues estrelles i un desig»: què és el <b>desig</b>?|«Dos estrellas y un deseo»: ¿qué es el <b>deseo</b>?",
          opts: ['Una millora concreta, explicada amb amabilitat|Una mejora concreta, explicada con amabilidad', "Una cosa que no m'agrada gens|Algo que no me gusta nada", 'Un premi per al millor disseny|Un premio para el mejor diseño'], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'fab', title: 'La revisió de la Nuvi|La revisión de Nuvi',
          t: "La fira és a prop i la Nuvi s'ha posat les ulleres de revisora: «Abans d'imprimir res, cada disseny ha de passar les meves <b>quatre proves</b>!» Avui revisarem dissenys d'altres participants, farem una <b>revisió per parelles</b> i deixarem el nostre a punt: la <b>versió 3</b>.|La feria está cerca y Nuvi se ha puesto las gafas de revisora: «¡Antes de imprimir nada, cada diseño tiene que pasar mis <b>cuatro pruebas</b>!» Hoy revisaremos diseños de otros participantes, haremos una <b>revisión por parejas</b> y dejaremos el nuestro a punto: la <b>versión 3</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Les quatre proves|Las cuatro pruebas', t: 'La revisió de la Nuvi|La revisión de Nuvi', anim: 'm8proves',
            x: "<b>1) Toca la placa</b>: res no flota i hi ha base plana. <b>2) Una sola peça</b>: cap tros solt. <b>3) Parets de 2 mm o més</b>: res massa prim. <b>4) Cap a la placa</b>: com a molt 180 × 180 × 150 mm. Al taller, cada prova és una comprovació que es marca sola.|<b>1) Toca la placa</b>: nada flota y hay base plana. <b>2) Una sola pieza</b>: ningún trozo suelto. <b>3) Paredes de 2 mm o más</b>: nada demasiado fino. <b>4) Cabe en la placa</b>: como mucho 180 × 180 × 150 mm. En el taller, cada prueba es una comprobación que se marca sola.",
            tip: "Revisa també els requisits: la Nuvi no sap per a qui és el disseny!|Revisa también los requisitos: ¡Nuvi no sabe para quién es el diseño!" },
          { k: 'Tocar no és prou|Tocar no basta', t: "Fica-la 1 o 2 mm a dins|Métela 1 o 2 mm dentro", anim: 'm8toca',
            x: "Dues peces que només <b>es toquen</b> per una vora o per un punt poden sortir separades: la Nuvi les fa com dues peces i es desenganxen. Si en fiques una <b>1 o 2 mm dins</b> de l'altra, es fonen en una sola peça forta. Al taller, la comprovació «És una sola peça» t'avisa.|Dos piezas que solo <b>se tocan</b> por un borde o por un punto pueden salir separadas: Nuvi las hace como dos piezas y se despegan. Si metes una <b>1 o 2 mm dentro</b> de la otra, se funden en una sola pieza fuerte. En el taller, la comprobación «Es una sola pieza» te avisa." },
          { k: 'Parets primes|Paredes finas', t: "El que és massa prim es trenca|Lo que es demasiado fino se rompe", media: { k: 'model', model: { parts: [B('g1', 'cyl', [30, 30, 36], -24, 0, 0, '#5BC0EB'), HB('f1', 'cyl', [28, 28, 36], -24, 0, 2), B('g2', 'cyl', [30, 30, 36], 24, 0, 0, '#2FB36D'), HB('f2', 'cyl', [26, 26, 36], 24, 0, 2), H('tall', 'box', [100, 20, 50], [0, -10, 20])] }, view: 'front', spin: false },
            x: "Dos gots tallats pel mig. El blau té parets d'<b>1 mm</b>: només dues o tres línies del broquet, i es trenca amb un cop. El verd, de <b>2 mm</b>, és fort. I les <b>puntes</b> de cons i estrelles surten massa primes… i punxen!|Dos vasos cortados por la mitad. El azul tiene paredes de <b>1 mm</b>: solo dos o tres líneas de la boquilla, y se rompe con un golpe. El verde, de <b>2 mm</b>, es fuerte. Y las <b>puntas</b> de conos y estrellas salen demasiado finas… ¡y pinchan!",
            tip: "Per a una punta segura, posa-hi una esfera petita.|Para una punta segura, ponle una esfera pequeña." },
          { k: 'La revisió per parelles|La revisión por parejas', t: 'La rúbrica i dues estrelles|La rúbrica y dos estrellas', anim: 'm8rubrica',
            x: "Per revisar el disseny d'un company/a, fes servir la <b>rúbrica</b>: cada criteri (les quatre proves i l'encàrrec) està <b>aconseguit</b>, <b>a mig camí</b> o <b>encara no</b>. Després, <b>dues estrelles</b> i <b>un desig</b> concret.|Para revisar el diseño de un compañero/a, usa la <b>rúbrica</b>: cada criterio (las cuatro pruebas y el encargo) está <b>conseguido</b>, <b>a medio camino</b> o <b>todavía no</b>. Después, <b>dos estrellas</b> y <b>un deseo</b> concreto.",
            bad: "«No m'agrada.»|«No me gusta.»", good: "«Nanses còmodes. Desig: fica-les 2 mm més endins.»|«Asas cómodas. Deseo: mételas 2 mm más adentro.»" }
        ] },
        { k: 'quiz', ph: 'mans', q: "L'Aleix ha revisat el disseny de la Wei. <b>Quina nota l'ajudarà més?</b>|Aleix ha revisado el diseño de Wei. <b>¿Qué nota la ayudará más?</b>",
          opts: ["«Toca la placa i té una base ampla. Desig: la paret del got fa 1 mm; fes-la de 2.»|«Toca la placa y tiene una base ancha. Deseo: la pared del vaso mide 1 mm; hazla de 2.»", '«Està bé.»|«Está bien.»', '«El meu és millor.»|«El mío es mejor.»'], a: 0,
          ex: "És amable i concreta: diu què funciona i quin número cal canviar.|Es amable y concreta: dice qué funciona y qué número hay que cambiar." },
        { k: 'm3look', ph: 'prova', q: "El <b>porta-pinzells d'en Biel</b>, tallat pel mig. Quina prova de la Nuvi <b>no</b> passarà?|El <b>portapinceles de Biel</b>, cortado por la mitad. ¿Qué prueba de Nuvi <b>no</b> pasará?",
          model: { parts: BIEL_TALL }, mode: 'result', opts: ['Parets de 2 mm o més|Paredes de 2 mm o más', 'Toca la placa|Toca la placa', 'Cap a la placa|Cabe en la placa'], a: 0,
          ex: "La paret del got fa només 1 mm: (40 − 38) ÷ 2. Es trencaria amb un cop.|La pared del vaso mide solo 1 mm: (40 − 38) ÷ 2. Se rompería con un golpe." },
        { k: 'm3look', ph: 'investiga', q: "El <b>ninot de neu de la Carla</b> té una peça que no toca res: la Nuvi la imprimiria a l'aire. <b>Toca-la.</b>|El <b>muñeco de nieve de Carla</b> tiene una pieza que no toca nada: Nuvi la imprimiría en el aire. <b>Tócala.</b>",
          model: { parts: NINOT }, pick: 'barret', yes: "L'has trobada: el barret flota 3 mm per sobre del cap.|La has encontrado: el sombrero flota 3 mm por encima de la cabeza.",
          no: "Aquesta peça està enganxada. Mira el ninot de davant: on hi ha aire entre dues peces?|Esta pieza está pegada. Mira el muñeco de delante: ¿dónde hay aire entre dos piezas?",
          ex: "Si el baixa 4 mm, es ficarà 1 mm dins del cap i serà una sola peça.|Si lo baja 4 mm, se meterá 1 mm dentro de la cabeza y será una sola pieza." },
        { k: 'move', ph: 'pausa', title: 'Revisors/es de la Nuvi|Revisores/as de Nuvi', secs: 30, t: "Fes de Nuvi revisora! Posa't unes ulleres imaginàries i revisa't: toques a terra amb els dos peus (base plana)? Tens els braços enganxats al cos (una sola peça)? Ara estira't tant com puguis… caps a la placa? Ajup-te!|¡Haz de Nuvi revisora! Ponte unas gafas imaginarias y revísate: ¿tocas el suelo con los dos pies (base plana)? ¿Tienes los brazos pegados al cuerpo (una sola pieza)? Ahora estírate tanto como puedas… ¿cabes en la placa? ¡Agáchate!" },
        { k: 'm3fix', ph: 'repte', q: "<b>Revisió 1: el porta-pinzells d'en Biel.</b> La paret fa 1 mm. Fes el forat de <b>36 mm</b>: la paret farà (40 − 36) ÷ 2 = 2 mm.|<b>Revisión 1: el portapinceles de Biel.</b> La pared mide 1 mm. Haz el agujero de <b>36 mm</b>: la pared medirá (40 − 36) ÷ 2 = 2 mm.",
          start: { parts: BIEL(38) }, fix: ['forat'], palette: ['hcyl'],
          checks: [{ k: 'wall', min: 1.8, t: 'Parets de 2 mm o més|Paredes de 2 mm o más' }, { k: 'hole', t: 'Continua buit per dins|Sigue hueco por dentro' }, { k: 'flatbase', min: 1000, t: 'Té una base plana|Tiene una base plana' }, { k: 'one' }],
          hint: "El forat ja està seleccionat. A Mida, escriu 36 a la X i 36 a la Y.|El agujero ya está seleccionado. En Medida, escribe 36 en la X y 36 en la Y.",
          sol: { parts: BIEL(36) } },
        { k: 'm3fix', ph: 'repte', q: "<b>Revisió 2: el cotxet de l'Ona.</b> Tot el cotxe flota 3 mm. <b>Baixa'l</b> fins que les rodes toquin la placa.|<b>Revisión 2: el cochecito de Ona.</b> Todo el coche flota 3 mm. <b>Bájalo</b> hasta que las ruedas toquen la placa.",
          start: { parts: COTXE(3) }, fix: RODES, palette: ['box', 'cyl'],
          checks: [{ k: 'onplate', t: 'Les rodes toquen la placa|Las ruedas tocan la placa' }, { k: 'one' }],
          hint: "Totes les peces ja estan seleccionades: a Posició, escriu z = 0 i baixaran totes alhora.|Todas las piezas ya están seleccionadas: en Posición, escribe z = 0 y bajarán todas a la vez.",
          sol: { parts: COTXE(0) } },
        { k: 'm3fix', ph: 'repte', q: "<b>Revisió 3: l'ocell de la Pia.</b> L'ala no toca el cos: hi ha 2 mm d'aire. Porta-la a <b>y = −15</b> perquè es fiqui dins del cos.|<b>Revisión 3: el pájaro de Pia.</b> El ala no toca el cuerpo: hay 2 mm de aire. Llévala a <b>y = −15</b> para que se meta dentro del cuerpo.",
          start: { parts: OCELL(-19) }, fix: ['ala'], palette: ['box'],
          checks: [{ k: 'one', t: "És una sola peça: l'ala és enganxada|Es una sola pieza: el ala está pegada" }, { k: 'onplate' }],
          hint: "L'ala ja està seleccionada: a Posició, escriu y = −15.|El ala ya está seleccionada: en Posición, escribe y = −15.",
          sol: { parts: OCELL(-15) } },
        { k: 'm3fix', ph: 'repte', extra: true, q: "<b>⭐ Revisió 4: el coet de l'Arnau.</b> La punta de con punxa. Canvia-la per una punta rodona: una <b>esfera</b> de 24 mm a z = 38.|<b>⭐ Revisión 4: el cohete de Arnau.</b> La punta de cono pincha. Cámbiala por una punta redonda: una <b>esfera</b> de 24 mm en z = 38.",
          start: { parts: COET(PUNXA) }, fix: ['punta'], palette: ['sph'],
          checks: [{ k: 'count', t: 'cone', max: 0, txt: 'Cap punta de con|Ninguna punta de cono' }, { k: 'count', t: 'sph', min: 1, txt: 'Té una punta rodona|Tiene una punta redonda' }, { k: 'one' }, { k: 'onplate' }],
          hint: "El con ja està seleccionat: esborra'l. Afegeix una esfera: a Mida, 24, 24 i 24; a Posició, x = 0, y = 0, z = 38.|El cono ya está seleccionado: bórralo. Añade una esfera: en Medida, 24, 24 y 24; en Posición, x = 0, y = 0, z = 38.",
          sol: { parts: COET(RODONA) } },
        { k: 'unplug', ph: 'crea', ico: '🔍', title: 'La revisió per parelles|La revisión por parejas', t: "Al pas següent tindràs el teu disseny. Quan passi les quatre proves, deixa'l a la pantalla i, per parelles:|En el paso siguiente tendrás tu diseño. Cuando pase las cuatro pruebas, déjalo en la pantalla y, por parejas:",
          steps: ["Seu a l'ordinador del company/a. Mira el seu disseny de tots els costats i amb el regle, però no el toquis!|Siéntate en el ordenador del compañero/a. Mira su diseño desde todos los lados y con la regla, ¡pero no lo toques!",
            "Omple la rúbrica: les quatre proves de la Nuvi i si respon al seu encàrrec.|Rellena la rúbrica: las cuatro pruebas de Nuvi y si responde a su encargo.",
            'Escriu dues estrelles i un desig concret, amb números si pots.|Escribe dos estrellas y un deseo concreto, con números si puedes.',
            "Torna al teu lloc, llegeix què t'han escrit i decideix quina millora faràs.|Vuelve a tu sitio, lee qué te han escrito y decide qué mejora harás."],
          tip: "Parla del disseny, no de la persona: «la paret és prima», no «ho has fet malament».|Habla del diseño, no de la persona: «la pared es fina», no «lo has hecho mal»." },
        { k: 'm3free', ph: 'crea', q: "<b>La versió 3.</b> Fes que la teva v2 passi les <b>quatre proves</b>. Després de la revisió, aplica'n el desig i desa-la.|<b>La versión 3.</b> Haz que tu v2 pase las <b>cuatro pruebas</b>. Después de la revisión, aplica su deseo y guárdala.",
          name: 'El meu disseny (v3)|Mi diseño (v3)', get start() { return mine(['m8-3', 'm8-2', 'm8-1'], [...V2, ET(-40)]); },
          crit: ['Passa les quatre proves de la Nuvi|Pasa las cuatro pruebas de Nuvi', "Un company/a l'ha revisat amb la rúbrica|Un compañero/a lo ha revisado con la rúbrica", 'Hi has aplicat almenys un desig|Le has aplicado al menos un deseo'],
          checks: [{ k: 'onplate' }, { k: 'one' }, { k: 'wall', min: 1.8, t: 'Parets de 2 mm o més|Paredes de 2 mm o más' }, PLACA], sol: { parts: JANA } },
        { k: 'review', ph: 'crea', btn: 'Desa la revisió|Guarda la revisión', q: "<b>Què t'ha dit el teu revisor/a?</b> Apunta-ho: et servirà per presentar el disseny a la fira.|<b>¿Qué te ha dicho tu revisor/a?</b> Apúntalo: te servirá para presentar el diseño en la feria.",
          items: [
            { q: 'Quantes proves de la Nuvi passava el teu disseny abans de revisar-lo?|¿Cuántas pruebas de Nuvi pasaba tu diseño antes de revisarlo?', opts: ['Totes quatre|Las cuatro', 'Tres|Tres', 'Dues o menys|Dos o menos'] },
            { q: "Quina prova t'ha costat més?|¿Qué prueba te ha costado más?", opts: ['Toca la placa|Toca la placa', 'Una sola peça|Una sola pieza', 'Parets de 2 mm|Paredes de 2 mm', 'Cap a la placa|Cabe en la placa', 'Cap: totes a la primera|Ninguna: todas a la primera'] },
            { q: 'De què parlava el desig del teu revisor/a?|¿De qué hablaba el deseo de tu revisor/a?', opts: ['De les mides|De las medidas', 'De les proves de la Nuvi|De las pruebas de Nuvi', "De l'encàrrec: per a qui és|Del encargo: para quién es", "De l'aspecte: colors i detalls|Del aspecto: colores y detalles"] },
            { q: "L'has aplicat a la versió 3?|¿Lo has aplicado en la versión 3?", opts: ['Sí|Sí', 'Una part|Una parte', 'No: he decidit que no calia|No: he decidido que no hacía falta'] }] },
        { k: 'quiz', ph: 'tanca', q: "Dues peces només es toquen per una vora. Què fas perquè la Nuvi les imprimeixi com una sola peça?|Dos piezas solo se tocan por un borde. ¿Qué haces para que Nuvi las imprima como una sola pieza?",
          opts: ["Fico l'una 1 o 2 mm dins de l'altra|Meto una 1 o 2 mm dentro de la otra", 'Les pinto del mateix color|Las pinto del mismo color', 'Les separo una mica més|Las separo un poco más'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Quina d'aquestes <b>no</b> és una prova de la Nuvi?|¿Cuál de estas <b>no</b> es una prueba de Nuvi?",
          opts: ['Que sigui del color preferit|Que sea del color preferido', 'Que toqui la placa|Que toque la placa', 'Que les parets facin 2 mm o més|Que las paredes midan 2 mm o más'], a: 0,
          ex: "A la Nuvi el color no li importa: l'STL no en guarda cap.|A Nuvi el color no le importa: el STL no guarda ninguno." },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ============ Sessió 4 · Presentació i diploma ============ */
    { id: 'm8-4', t: 'Presentació i diploma|Presentación y diploma', min: 45, proj: true, badge: 'm8fira',
      learn: ["Per presentar un disseny, digues què és i per a qui, ensenya'l de la millor vista, explica les mides i què has millorat.|Para presentar un diseño, di qué es y para quién, enséñalo desde la mejor vista, explica las medidas y qué has mejorado.",
        "L'STL és el fitxer que va a la impressora: el botó STL el descarrega a mida real, en mil·límetres.|El STL es el archivo que va a la impresora: el botón STL lo descarga a tamaño real, en milímetros.",
        "Ja saps fer tot el camí del disseny 3D: idea, esbós, model, revisió, impressió i presentació.|Ya sabes hacer todo el camino del diseño 3D: idea, boceto, modelo, revisión, impresión y presentación."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'La setmana passada vas revisar el teu disseny. Quines són les quatre proves de la Nuvi?|La semana pasada revisaste tu diseño. ¿Cuáles son las cuatro pruebas de Nuvi?',
          opts: ['Toca la placa, una sola peça, parets de 2 mm i cap a la placa|Toca la placa, una sola pieza, paredes de 2 mm y cabe en la placa', 'Color, nom, mida i forats|Color, nombre, tamaño y agujeros', 'Que sigui gran, alt, ample i pesat|Que sea grande, alto, ancho y pesado'], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'poble', mood: 'dance', title: "S'obre la fira!|¡Se abre la feria!",
          t: "Banderoles, estands i famílies curioses: avui s'obre la <b>Fira d'Invents</b>! Han vingut l'àvia Rosa, en Pol, la Nur i la mestra Txell, i tothom vol saber com s'han fet els invents. Presentaràs el teu disseny, en descarregaràs l'<b>STL</b> perquè la Nuvi el pugui imprimir i, al final, en Bit té una sorpresa: el <b>diploma</b>!|Banderines, estands y familias curiosas: ¡hoy se abre la <b>Feria de Inventos</b>! Han venido la abuela Rosa, Pol, Nur y la maestra Txell, y todo el mundo quiere saber cómo se han hecho los inventos. Presentarás tu diseño, descargarás su <b>STL</b> para que Nuvi lo pueda imprimir y, al final, Bit tiene una sorpresa: ¡el <b>diploma</b>!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El viatge|El viaje', t: 'Vuit unitats, un dissenyador/a|Ocho unidades, un diseñador/a', anim: 'm8viatge',
            x: "Vas començar girant la vista per trobar peces amagades. Després van venir les <b>formes</b>, els <b>mil·límetres</b> i els girs, <b>alinear, duplicar i el mirall</b>, els <b>forats</b>, la <b>impressió 3D</b> i l'STL, i <b>dissenyar per a persones</b>. Ara tot això és dins d'un disseny teu, a punt per a la fira.|Empezaste girando la vista para encontrar piezas escondidas. Después llegaron las <b>formas</b>, los <b>milímetros</b> y los giros, <b>alinear, duplicar y el espejo</b>, los <b>agujeros</b>, la <b>impresión 3D</b> y el STL, y <b>diseñar para personas</b>. Ahora todo eso está dentro de un diseño tuyo, a punto para la feria." },
          { k: 'La fitxa del producte|La ficha del producto', t: 'El que el públic vol saber|Lo que el público quiere saber', media: { k: 'model', model: { parts: JANA } },
            x: "A l'estand, al costat del disseny, hi ha una <b>fitxa</b>: el <b>nom</b>, <b>per a qui</b> és, <b>què fa</b>, les <b>mides</b> (amplada × fondària × alçada) i el <b>material</b>. La de la Jana: «Test de l'hort. Per als infants de P4. Hi creixen plantes a la finestra. 76 × 65 × 56 mm. PLA.»|En el estand, al lado del diseño, hay una <b>ficha</b>: el <b>nombre</b>, <b>para quién</b> es, <b>qué hace</b>, las <b>medidas</b> (anchura × fondo × altura) y el <b>material</b>. La de Jana: «Maceta del huerto. Para los niños de P4. En ella crecen plantas en la ventana. 76 × 65 × 56 mm. PLA.»",
            tip: "Per saber les mides de tot el model, toca «Totes» i mira la pestanya Mida.|Para saber las medidas de todo el modelo, toca «Todas» y mira la pestaña Medida." },
          { k: 'Presentar|Presentar', t: 'Quatre parts, un minut|Cuatro partes, un minuto', anim: 'm8pitch',
            x: "<b>1)</b> Què és i <b>per a qui</b>. <b>2)</b> La <b>millor vista</b> i les mides. <b>3)</b> Com l'has fet: <b>formes i eines</b>. <b>4)</b> Què has <b>millorat</b> amb la revisió. Acaba preguntant: «Què hi afegiríeu?»|<b>1)</b> Qué es y <b>para quién</b>. <b>2)</b> La <b>mejor vista</b> y las medidas. <b>3)</b> Cómo lo has hecho: <b>formas y herramientas</b>. <b>4)</b> Qué has <b>mejorado</b> con la revisión. Acaba preguntando: «¿Qué le añadiríais?»",
            bad: "Llegir la fitxa d'esquena al públic.|Leer la ficha de espaldas al público.", good: 'Mirar el públic i girar el model mentre parles.|Mirar al público y girar el modelo mientras hablas.' },
          { k: 'De la pantalla a la Nuvi|De la pantalla a Nuvi', t: "L'STL, el fitxer per imprimir|El STL, el archivo para imprimir", anim: 'm8stl',
            x: "El botó <b>STL</b> descarrega el teu disseny com un fitxer de triangles, a mida real i en mil·límetres. Un programa laminador el talla en capes i la Nuvi l'imprimeix capa a capa. Els projectes desats també tenen el botó STL a «Projectes»: el pots portar a qualsevol impressora 3D.|El botón <b>STL</b> descarga tu diseño como un archivo de triángulos, a tamaño real y en milímetros. Un programa laminador lo corta en capas y Nuvi lo imprime capa a capa. Los proyectos guardados también tienen el botón STL en «Proyectos»: lo puedes llevar a cualquier impresora 3D." }
        ] },
        { k: 'seq', ph: 'mans', q: 'Prepara la presentació. <b>Ordena les parts</b>, de la primera a l\'última.|Prepara la presentación. <b>Ordena las partes</b>, de la primera a la última.',
          items: ['Dic què és i per a qui és|Digo qué es y para quién es', "L'ensenyo de la millor vista i en dic les mides|Lo enseño desde la mejor vista y digo sus medidas", "Explico com l'he fet: formes i eines|Explico cómo lo he hecho: formas y herramientas", 'Explico què he millorat gràcies a la revisió|Explico qué he mejorado gracias a la revisión', 'Pregunto al públic què hi afegiria|Pregunto al público qué le añadiría'],
          ex: "Primer, que el públic entengui què és i per a qui; al final, què has millorat i què en pensen.|Primero, que el público entienda qué es y para quién; al final, qué has mejorado y qué opinan." },
        { k: 'quiz', ph: 'prova', q: "<b>Repàs del curs.</b> Una caixa de 10 mm d'alt és a la placa. Vols posar-n'hi una altra just a sobre. Quina z (la base) li poses?|<b>Repaso del curso.</b> Una caja de 10 mm de alto está en la placa. Quieres poner otra justo encima. ¿Qué z (la base) le pones?",
          opts: ['z = 10|z = 10', 'z = 0|z = 0', 'z = 20|z = 20'], a: 0,
          ex: "La de sota va de 0 a 10 mm: la de dalt comença on acaba, a z = 10. També ho fa Alinea → A sobre de la peça de sota.|La de abajo va de 0 a 10 mm: la de arriba empieza donde acaba, en z = 10. También lo hace Alinea → Encima de la pieza de debajo." },
        { k: 'quiz', ph: 'prova', q: "<b>Repàs.</b> El test de la Jana fa 56 mm d'alt. Amb capes de 0,2 mm, quantes capes farà la Nuvi?|<b>Repaso.</b> La maceta de Jana mide 56 mm de alto. Con capas de 0,2 mm, ¿cuántas capas hará Nuvi?",
          opts: ['280|280', '56|56', '112|112'], a: 0, ex: 'Cada mil·límetre són 5 capes: 56 × 5 = 280.|Cada milímetro son 5 capas: 56 × 5 = 280.' },
        { k: 'm3look', ph: 'investiga', q: "<b>Repàs.</b> A la fira vols ensenyar l'<b>alçada</b> del test i <b>les dues nanses</b> alhora. <b>Quina vista tries?</b> Prova-les!|<b>Repaso.</b> En la feria quieres enseñar la <b>altura</b> de la maceta y <b>las dos asas</b> a la vez. <b>¿Qué vista eliges?</b> ¡Pruébalas!",
          model: { parts: JANA }, opts: ['Davant (alçat)|Delante (alzado)', 'Dalt (planta)|Arriba (planta)', 'Costat (perfil)|Lado (perfil)'], a: 0,
          ex: "De davant es veuen l'alçada i les dues nanses, una a cada costat. De dalt no es veu l'alçada, i de costat les nanses queden l'una darrere l'altra.|De delante se ven la altura y las dos asas, una a cada lado. Desde arriba no se ve la altura, y de lado las asas quedan una detrás de la otra." },
        { k: 'move', ph: 'pausa', title: "Assaig d'estand|Ensayo de estand", secs: 30, t: "Posa't dret/a com si fossis al teu estand. Saluda el públic imaginari, ensenya el teu invent amb les dues mans i fes-lo girar a poc a poc, com a la vista 3D. Ara digues-ne el nom fluixet… i fes una reverència!|Ponte de pie como si estuvieras en tu estand. Saluda al público imaginario, enseña tu invento con las dos manos y hazlo girar poco a poco, como en la vista 3D. Ahora di su nombre en voz baja… ¡y haz una reverencia!" },
        { k: 'm3build', ph: 'repte', q: "<b>El porta-targetes.</b> La targeta fa 54 × 1 mm: fes una ranura de <b>56 × 3 × 12 mm</b> a <b>z = 5</b> (2 mm de marge).|<b>El portatarjetas.</b> La tarjeta mide 54 × 1 mm: haz una ranura de <b>56 × 3 × 12 mm</b> en <b>z = 5</b> (2 mm de margen).",
          start: { parts: PT(0) }, palette: ['hbox'], target: { parts: PT(1) },
          checks: [{ k: 'part', t: 'box', hole: true, s: [56, 3, 12], at: [0, 0, null], base: 5, tol: 0.6, txt: 'Ranura de 56 × 3 mm al mig, a z = 5|Ranura de 56 × 3 mm en el medio, en z = 5' }, { k: 'flatbase', min: 1000, t: 'El fons continua sencer|El fondo sigue entero' }, { k: 'one', t: 'Continua sent una sola peça|Sigue siendo una sola pieza' }],
          hint: "Afegeix un Forat (caixa). A Mida: 56, 3 i 12. A Posició: x = 0, y = 0, z = 5.|Añade un Agujero (caja). En Medida: 56, 3 y 12. En Posición: x = 0, y = 0, z = 5.",
          sol: { parts: PT(1) } },
        { k: 'm3build', ph: 'repte', q: "<b>El trofeu.</b> Sobre la base, una <b>columna</b> de 12 × 12 × 30 mm i una <b>bola</b> de 26 mm a z = 32 (s'hi fica 4 mm).|<b>El trofeo.</b> Sobre la base, una <b>columna</b> de 12 × 12 × 30 mm y una <b>bola</b> de 26 mm en z = 32 (se mete 4 mm).",
          start: { parts: [TROF[0]] }, palette: ['cyl', 'sph'], target: { parts: TROF },
          checks: [{ k: 'match', target: { parts: TROF }, th: 0.9, t: "S'assembla al fantasma|Se parece al fantasma" }, { k: 'sym', ax: 'x', th: 0.98, t: 'És simètric|Es simétrico' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Columna: cilindre de 12 × 12 × 30 mm a x = 0, y = 0, z = 6. Bola: esfera de 26 × 26 × 26 mm a x = 0, y = 0, z = 32.|Columna: cilindro de 12 × 12 × 30 mm en x = 0, y = 0, z = 6. Bola: esfera de 26 × 26 × 26 mm en x = 0, y = 0, z = 32.",
          sol: { parts: TROF } },
        { k: 'unplug', ph: 'crea', ico: '🎤', title: 'Assaja la presentació|Ensaya la presentación', t: 'Amb el guió de la fitxa i un company/a, abans de presentar a la fira:|Con el guion de la ficha y un compañero/a, antes de presentar en la feria:',
          steps: ['Digues què és el teu invent i per a qui és.|Di qué es tu invento y para quién es.', "Ensenya'l de la millor vista i digues-ne les mides.|Enséñalo desde la mejor vista y di sus medidas.",
            "Explica com l'has fet i què has millorat amb la revisió.|Explica cómo lo has hecho y qué has mejorado con la revisión.", 'Qui escolta et regala una estrella i et fa una pregunta.|Quien escucha te regala una estrella y te hace una pregunta.'],
          tip: 'Un minut és prou: millor curt i clar que llarg i embolicat.|Un minuto es suficiente: mejor corto y claro que largo y enredado.' },
        { k: 'm3free', ph: 'crea', q: "<b>La versió final.</b> Últim retoc, descarrega l'<b>STL</b> i presenta'l amb les quatre parts. Després, desa'l.|<b>La versión final.</b> Último retoque, descarga el <b>STL</b> y preséntalo con las cuatro partes. Después, guárdalo.",
          name: 'El meu disseny final|Mi diseño final', get start() { return mine(['m8-4', 'm8-3', 'm8-2', 'm8-1'], JANA); },
          crit: ['Està llest per imprimir: passa les proves de la Nuvi|Está listo para imprimir: pasa las pruebas de Nuvi', "N'has descarregat l'STL|Has descargado su STL", 'Has explicat per a qui és, les mides i què has millorat|Has explicado para quién es, las medidas y qué has mejorado'],
          checks: [{ k: 'onplate' }, { k: 'one' }, PLACA], sol: { parts: JANA } },
        { k: 'diploma', ph: 'tanca', t: "ha completat el curs <b>Tech 3D · Nivell 1</b> i ha dissenyat el seu propi objecte per imprimir en 3D.|ha completado el curso <b>Tech 3D · Nivel 1</b> y ha diseñado su propio objeto para imprimir en 3D.",
          skills: [
            'Mirar en 3D i fer servir les vistes|Mirar en 3D y usar las vistas',
            'Construir amb caixes, cilindres, cons, esferes i falques|Construir con cajas, cilindros, conos, esferas y cuñas',
            'Moure, girar i escalar peces en mil·límetres|Mover, girar y escalar piezas en milímetros',
            'Alinear, duplicar i fer simetries amb el mirall|Alinear, duplicar y hacer simetrías con el espejo',
            'Fer forats, objectes buits i relleus|Hacer agujeros, objetos huecos y relieves',
            "Preparar models per imprimir i exportar l'STL|Preparar modelos para imprimir y exportar el STL",
            'Dissenyar per a persones: escoltar, esbossar i millorar|Diseñar para personas: escuchar, esbozar y mejorar',
            'Inventar, modelar, revisar i presentar un disseny propi|Inventar, modelar, revisar y presentar un diseño propio'] },
        { k: 'story', ph: 'tanca', who: 'bit', mood: 'win', t: "Enhorabona, dissenyador/a! Vas començar girant la vista i ara inventes objectes de veritat, amb mides, forats i un fitxer STL a punt per imprimir. Recorda el camí: <b>escolta, esbossa, modela, revisa i millora</b>. La Nuvi i jo t'esperem amb el teu proper invent!|¡Enhorabuena, diseñador/a! Empezaste girando la vista y ahora inventas objetos de verdad, con medidas, agujeros y un archivo STL a punto para imprimir. Recuerda el camino: <b>escucha, esboza, modela, revisa y mejora</b>. ¡Nuvi y yo te esperamos con tu próximo invento!" },
        { k: 'quiz', ph: 'tanca', q: "Últim repte del curs: a la fira algú et diu «La nansa es podria trencar». Què fas?|Último reto del curso: en la feria alguien te dice «El asa se podría romper». ¿Qué haces?",
          opts: ['Escolto, la miro amb el regle i, si cal, la faig més gruixuda en una versió nova|Escucho, la miro con la regla y, si hace falta, la hago más gruesa en una versión nueva', 'Res: ja està acabat|Nada: ya está acabado', "L'esborro i començo un altre invent|Lo borro y empiezo otro invento"], a: 0,
          ex: "Els dissenyadors mai no acaben del tot: cada opinió és una pista per a la versió següent. Enhorabona!|Los diseñadores nunca acaban del todo: cada opinión es una pista para la versión siguiente. ¡Enhorabuena!" },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] };
})();

const c = TECH.find(x => x.id === 'model'); delete c.soon;
for (const [n, u] of Object.entries(COURSE_UNITS)) c.units[n - 1] = u;
})();
