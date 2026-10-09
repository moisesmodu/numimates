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
          hint: "El pal ja està seleccionat: a dalt de l'inspector, toca el botó Forat.|El palo ya está seleccionado: arriba del inspector, toca el botón Agujero.",
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
            tip: "Selecciona només la lletra, no la placa: toca «Selecciona'n més» i ves tocant les peces.|Selecciona solo la letra, no la placa: toca «Selecciona más» y ve tocando las piezas." },
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
          hint: "Toca una peça de la F, després «Selecciona'n més» i toca les altres dues. Ara Mirall → x.|Toca una pieza de la F, después «Selecciona más» y toca las otras dos. Ahora Espejo → x.",
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
