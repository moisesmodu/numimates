/* Tech Creadors · unitat 4 «Coordenades» · guia del professorat (sessions g4-1 … g4-4)
   Classe de 60 minuts: presentació projectada, una activitat sense pantalla amb el seu imprimible i l'app a l'ordinador. */
Object.assign(TGUIDE, (() => {
  // demos de l'escenari per a les diapositives (els mateixos mons que a l'app)
  const NUMI_M = { id: 'numi', art: 'numi', x: -175, y: 100, size: 50 }, FLAG = { id: 'bandera', art: 'bandera', x: 172, y: -112, size: 60 };
  const star = (id, x, y, n) => ({ id, art: 'estrella', x, y, size: 80, name: `Estrella ${n}|Estrella ${n}` });
  const D_X = { k: 'stage', w: { bg: 'espai', sprites: [{ id: 'numi', art: 'numi', x: 0, y: 0, size: 80 }] }, prog: '@numi flag{ goto:-150,0 say:"x = -150|x = -150",1.4 goto:0,0 say:"x = 0|x = 0",1.4 goto:150,0 say:"x = 150|x = 150",1.4 }', time: 5 };
  const D_Y = { k: 'stage', w: { bg: 'espai', sprites: [{ id: 'numi', art: 'numi', x: 0, y: 0, size: 80 }] }, prog: '@numi flag{ goto:0,110 say:"y = 110|y = 110",1.4 goto:0,0 say:"y = 0|y = 0",1.4 goto:0,-110 say:"y = -110|y = -110",1.4 }', time: 5 };
  const D_GOTO = { k: 'stage', w: { bg: 'espai', sprites: [{ id: 'numi', art: 'numi', x: 0, y: 0, size: 70 }, star('e1', 150, 100, 1), star('e2', -150, -90, 2)] }, prog: '@numi flag{ wait:0.6 goto:150,100 say:"x: 150, y: 100|x: 150, y: 100",1.6 goto:-150,-90 say:"x: -150, y: -90|x: -150, y: -90",1.6 goto:0,0 }', time: 5 };
  const D_ROUTE = { k: 'stage', w: { bg: 'cel', sprites: [{ id: 'globus', art: 'globus', x: -180, y: -120 }, star('e1', -60, 60, 1), star('e2', 80, -40, 2), { id: 'bandera', art: 'bandera', x: 180, y: 110, size: 70 }] }, prog: '@globus flag{ goto:-180,-120 wait:0.5 glide:2,-60,60 glide:1.5,80,-40 glide:2,180,110 }', time: 7 };
  const D_SETCH = { k: 'stage', w: { bg: 'cel', sprites: [{ id: 'globus', art: 'globus', x: -180, y: 70, name: 'Globus: posa x|Globo: pon x' }, { id: 'ocell', art: 'ocell', x: -180, y: -80, name: 'Ocell: canvia x|Pájaro: cambia x' }] }, prog: '@globus flag{ rep:6{ setx:-120 wait:0.5 } } @ocell flag{ rep:6{ chx:60 wait:0.5 } }', time: 5 };
  const D_KEYS = { k: 'stage', w: { bg: 'cel', sprites: [{ id: 'globus', art: 'globus', x: 0, y: 0 }], keys: ['left', 'right', 'up', 'down'], input: [{ t: .5, key: 'right', dur: 1.2 }, { t: 2, key: 'up', dur: 1 }, { t: 3.3, key: 'left', dur: 2 }, { t: 5.6, key: 'down', dur: 1.2 }] }, prog: '@globus key:right{ chx:10 } key:left{ chx:-10 } key:up{ chy:10 } key:down{ chy:-10 }', time: 7.5 };
  const D_ARROW = { k: 'stage', w: { bg: 'platja', sprites: [{ id: 'fletxa', art: 'fletxa', x: 0, y: 0 }] }, prog: '@fletxa flag{ goto:0,0 point:90 wait:0.6 move:90 wait:0.6 point:0 wait:0.6 move:90 wait:0.6 point:-90 wait:0.6 move:180 wait:0.6 point:180 wait:0.6 move:90 wait:0.6 point:90 wait:0.6 move:90 }', time: 7 };
  const D_BALL = { k: 'stage', w: { bg: 'platja', sprites: [{ id: 'pilota', art: 'pilota', x: 0, y: 0 }] }, prog: '@pilota flag{ point:45 forever{ move:6 bounce } }', time: 8 };
  const D_CHASE = { k: 'stage', w: { bg: 'platja', sprites: [{ id: 'cranc', art: 'cranc', x: -170, y: -120 }, { id: 'peix', art: 'peix', x: 150, y: 90, dir: -60 }] }, prog: '@cranc flag{ forever{ pointto:peix move:3 } } @peix flag{ forever{ move:2 bounce } }', time: 8 };
  const D_PLAN = { k: 'stage', w: { bg: 'laberint', sprites: [NUMI_M, FLAG] }, prog: '@numi flag{ goto:-175,100 wait:0.6 glide:1,-175,-100 glide:1,-60,-100 glide:1,-60,100 glide:1,25,100 glide:1,25,-100 glide:1,170,-100 say:"Sortida!|¡Salida!",1.5 }', time: 9 };
  const D_WALL = { k: 'stage', w: { bg: 'laberint', sprites: [NUMI_M], keys: ['left', 'right', 'up', 'down'], input: [{ t: .5, key: 'right', dur: 1 }, { t: 2, key: 'down', dur: 2.2 }, { t: 4.6, key: 'right', dur: 1.6 }] }, prog: '@numi flag{ goto:-175,100 forever{ waitu:color:blue goto:-175,100 } } key:right{ chx:10 } key:down{ chy:-10 }', time: 7 };
  const D_NOLOOP = { k: 'stage', w: { bg: 'laberint', sprites: [NUMI_M], keys: ['left', 'right', 'up', 'down'], input: [{ t: .5, key: 'right', dur: 1 }, { t: 2.3, key: 'right', dur: 2.4 }] }, prog: '@numi flag{ goto:-175,100 waitu:color:blue goto:-175,100 } key:right{ chx:10 }', time: 6 };
  return {
    /* ---------- Sessió 1 · x i y: l'escenari és un mapa ---------- */
    'g4-1': {
    intro: "Comença la unitat de les coordenades: l'escenari es converteix en un mapa en què cada lloc té dos números, la x (esquerra o dreta) i la y (avall o amunt), amb el (0, 0) al centre. L'alumnat aprèn a llegir i a dir coordenades sempre en el mateix ordre (primer la x i després la y) i a portar un personatge a un punt amb «ves a x: y:», «posa x a» i «posa y a». És la base de tota la unitat i connecta directament amb els eixos de coordenades de matemàtiques. La classe comença amb la Nit de les Estrelles, segueix amb la graella del cel amagat per parelles i acaba portant en Numi d'estrella en estrella.|Empieza la unidad de las coordenadas: el escenario se convierte en un mapa en el que cada sitio tiene dos números, la x (izquierda o derecha) y la y (abajo o arriba), con el (0, 0) en el centro. El alumnado aprende a leer y decir coordenadas siempre en el mismo orden (primero la x y después la y) y a llevar un personaje a un punto con «ve a x: y:», «pon x a» y «pon y a». Es la base de toda la unidad y conecta directamente con los ejes de coordenadas de matemáticas. La clase empieza con la Noche de las Estrellas, sigue con la cuadrícula del cielo escondido por parejas y termina llevando a Numi de estrella en estrella.",
    claus: [
      "Cada punt de l'escenari té dues coordenades: la x (esquerra-dreta) i la y (avall-amunt).|Cada punto del escenario tiene dos coordenadas: la x (izquierda-derecha) y la y (abajo-arriba).",
      "El (0, 0) és al centre; cap a la dreta i amunt els números són positius, i cap a l'esquerra i avall, negatius.|El (0, 0) está en el centro; hacia la derecha y arriba los números son positivos, y hacia la izquierda y abajo, negativos.",
      "Les coordenades es diuen sempre en el mateix ordre: primer la x i després la y.|Las coordenadas se dicen siempre en el mismo orden: primero la x y después la y.",
      "«Ves a» porta el personatge d'un salt a un punt; «posa x a» i «posa y a» en canvien només un dels dos números.|«Ve a» lleva al personaje de un salto a un punto; «pon x a» y «pon y a» cambian solo uno de los dos números."
    ],
    prev: [
      "Saber que el centre de l'escenari és el (0, 0) i que la dreta és x positiva (unitat 1, sessió 1).|Saber que el centro del escenario es el (0, 0) y que la derecha es x positiva (unidad 1, sesión 1).",
      "Fer servir «espera» perquè es vegi cada pas (unitat 2).|Usar «espera» para que se vea cada paso (unidad 2).",
      "Conèixer els nombres negatius en una recta o un termòmetre (matemàtiques).|Conocer los números negativos en una recta o un termómetro (matemáticas)."
    ],
    faq: [
      ["Per què el (0, 0) és al mig i no a la cantonada com al full?|¿Por qué el (0, 0) está en el medio y no en la esquina como en la hoja?",
        "A l'escenari, el (0, 0) és al centre perquè així es pot anar cap a tots els costats. Per això hi ha números positius i negatius.|En el escenario, el (0, 0) está en el centro para poder ir hacia todos los lados. Por eso hay números positivos y negativos."],
      ["Fins a quin número arriba la x?|¿Hasta qué número llega la x?",
        "De -240 (vora esquerra) a 240 (vora dreta). La y va de -180 (a baix) a 180 (a dalt).|De -240 (borde izquierdo) a 240 (borde derecho). La y va de -180 (abajo) a 180 (arriba)."],
      ["I si poso un número més gran que 240?|¿Y si pongo un número mayor que 240?",
        "El personatge se'n va fora de l'escenari i no el veus. Torna'l amb un «ves a» amb números més petits.|El personaje se va fuera del escenario y no lo ves. Devuélvelo con un «ve a» con números más pequeños."],
      ["Com sé on és una estrella?|¿Cómo sé dónde está una estrella?",
        "Mira si és a la dreta o a l'esquerra del centre (la x) i si és a dalt o a baix (la y). Prova un número i ajusta'l: més a la dreta, més amunt…|Mira si está a la derecha o a la izquierda del centro (la x) y si está arriba o abajo (la y). Prueba un número y ajústalo: más a la derecha, más arriba…"],
      ["Per què en Numi no passa per les estrelles si poso molts «ves a»?|¿Por qué Numi no pasa por las estrellas si pongo muchos «ve a»?",
        "Sí que hi passa, però tan de pressa que no es veu. Posa una «espera» després de cada «ves a».|Sí que pasa, pero tan deprisa que no se ve. Pon una «espera» después de cada «ve a»."],
      ["On es fan servir les coordenades a la vida real?|¿Dónde se usan las coordenadas en la vida real?",
        "Als mapes, als plànols, als seients del cinema (fila i seient) o als jocs de taula amb graella, com els vaixells.|En los mapas, en los planos, en los asientos del cine (fila y asiento) o en los juegos de mesa con cuadrícula, como los barcos."]
    ],
    tec: [
      ["L'alumne/a no troba on escriure la y al bloc «ves a».|El alumno/a no encuentra dónde escribir la y en el bloque «ve a».",
        "El bloc té dos números: el primer és la x i el segon, la y. Cal tocar cadascun per canviar-lo.|El bloque tiene dos números: el primero es la x y el segundo, la y. Hay que tocar cada uno para cambiarlo."],
      ["El signe menys no surt al teclat del mòbil.|El signo menos no sale en el teclado del móvil.",
        "Al teclat numèric, el «-» sol ser a la tecla de símbols; a l'ordinador, la tecla «-». Si no surt, que facin servir un altre dispositiu.|En el teclado numérico, el «-» suele estar en la tecla de símbolos; en el ordenador, la tecla «-». Si no sale, que usen otro dispositivo."],
      ["El repte diu que en Numi no és a l'estrella, però sembla que sí.|El reto dice que Numi no está en la estrella, pero parece que sí.",
        "La zona és petita (uns 15 punts al voltant): que miri les coordenades exactes de l'enunciat.|La zona es pequeña (unos 15 puntos alrededor): que mire las coordenadas exactas del enunciado."],
      ["La creu de cinta a terra es desenganxa.|La cruz de cinta en el suelo se despega.",
        "Feu servir cinta de pintor ampla i marqueu el (0, 0) amb un full; si no hi ha espai, dibuixeu els eixos a la pissarra.|Usad cinta de pintor ancha y marcad el (0, 0) con una hoja; si no hay espacio, dibujad los ejes en la pizarra."],
      ["La graella impresa surt petita.|La cuadrícula impresa sale pequeña.",
        "Imprimiu-la en DIN A4 sense reduir; per a la demostració, projecteu-la o dibuixeu-la a la pissarra.|Imprimidla en DIN A4 sin reducir; para la demostración, proyectadla o dibujadla en la pizarra."]
    ],
    seg: [
      "A la demostració amb la creu a terra i a la pausa activa, espai lliure i moviments al lloc, sense córrer.|En la demostración con la cruz en el suelo y en la pausa activa, espacio libre y movimientos en el sitio, sin correr.",
      "Davant la pantalla: descans de la vista a la pausa activa (mirar lluny uns segons).|Delante de la pantalla: descanso de la vista en la pausa activa (mirar lejos unos segundos)."
    ],
    extra: [
      "Dibuixar una constel·lació pròpia a la graella i programar-la a l'escenari amb «ves a» i esperes.|Dibujar una constelación propia en la cuadrícula y programarla en el escenario con «ve a» y esperas.",
      "Fer que en Numi digui les coordenades de cada estrella quan hi arriba (per exemple, «Soc a 150, 100!»).|Hacer que Numi diga las coordenadas de cada estrella cuando llega (por ejemplo, «¡Estoy en 150, 100!»).",
      "Endevinar les coordenades de les quatre cantonades de l'escenari i comprovar-ho amb «ves a».|Adivinar las coordenadas de las cuatro esquinas del escenario y comprobarlo con «ve a»."
    ],
    trans: [
      "Matemàtiques: els eixos de coordenades, els nombres negatius i la representació de punts en el pla.|Matemáticas: los ejes de coordenadas, los números negativos y la representación de puntos en el plano.",
      "Ciències socials: mapes, plànols i quadrícules per situar llocs.|Ciencias sociales: mapas, planos y cuadrículas para situar lugares.",
      "Sessió següent: els personatges lliscaran a poc a poc i es mouran amb «canvia x» i «canvia y».|Sesión siguiente: los personajes se deslizarán poco a poco y se moverán con «cambia x» y «cambia y»."
    ],
      obj: [
        "L'alumne/a situa punts a l'escenari amb la x i la y i sap que el (0, 0) és al centre.|El alumno/a sitúa puntos en el escenario con la x y la y y sabe que el (0, 0) está en el centro.",
        "L'alumne/a distingeix la x (esquerra-dreta) de la y (avall-amunt) i interpreta els nombres negatius.|El alumno/a distingue la x (izquierda-derecha) de la y (abajo-arriba) e interpreta los números negativos.",
        "L'alumne/a fa servir «ves a x: y:», «posa x a» i «posa y a» per portar un personatge a un punt concret.|El alumno/a usa «ve a x: y:», «pon x a» y «pon y a» para llevar a un personaje a un punto concreto.",
        "L'alumne/a programa un recorregut per diversos punts en ordre, amb esperes, i corregeix coordenades mal escrites.|El alumno/a programa un recorrido por varios puntos en orden, con esperas, y corrige coordenadas mal escritas."
      ],
      comp: [
        "Competència digital (CD5): crear continguts digitals programant amb blocs|Competencia digital (CD5): crear contenidos digitales programando con bloques",
        "Matemàtiques (sentit espacial i numèric): sistema de coordenades i nombres negatius|Matemáticas (sentido espacial y numérico): sistema de coordenadas y números negativos",
        "Pensament computacional: seqüència d'instruccions i depuració|Pensamiento computacional: secuencia de instrucciones y depuración",
        "Comunicació oral: donar i interpretar indicacions de posició precises|Comunicación oral: dar e interpretar indicaciones de posición precisas"
      ],
      vocab: [
        ["Coordenades|Coordenadas", "Els dos números que diuen on és un punt: primer la x i després la y.|Los dos números que dicen dónde está un punto: primero la x y después la y."],
        ["x|x", "El número que diu si un punt és a l'esquerra (negatiu) o a la dreta (positiu).|El número que dice si un punto está a la izquierda (negativo) o a la derecha (positivo)."],
        ["y|y", "El número que diu si un punt és avall (negatiu) o amunt (positiu).|El número que dice si un punto está abajo (negativo) o arriba (positivo)."],
        ["El centre (0, 0)|El centro (0, 0)", "El punt del mig de l'escenari, d'on comencem a comptar.|El punto del medio del escenario, desde donde empezamos a contar."],
        ["Nombre negatiu|Número negativo", "Un número més petit que zero, amb el signe menys davant: -100.|Un número más pequeño que cero, con el signo menos delante: -100."]
      ],
      mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «x i y: l'escenari és un mapa»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «x e y: el escenario es un mapa»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "1 còpia de «El cel amagat» per alumne/a (imprimible 1) i 1 llapis de color|1 copia de «El cielo escondido» por alumno/a (imprimible 1) y 1 lápiz de color",
        "Opcional: 1 rotllo de cinta de pintor per marcar a terra una creu gran (els dos eixos) per a la demostració|Opcional: 1 rollo de cinta de pintor para marcar en el suelo una cruz grande (los dos ejes) para la demostración"
      ],
      imprimir: [
        "1 «El cel amagat» (graella de coordenades) per alumne/a (imprimible 1)|1 «El cielo escondido» (cuadrícula de coordenadas) por alumno/a (imprimible 1)",
        "Unes 6 fitxes «On és cada estrella?» per a qui acabi abans o per a casa (imprimible 2)|Unas 6 fichas «¿Dónde está cada estrella?» para quien termine antes o para casa (imprimible 2)"
      ],
      prep: [
        "El dia abans (10 min): imprimir «El cel amagat» (una per alumne/a) i unes quantes fitxes «On és cada estrella?».|El día antes (10 min): imprimir «El cielo escondido» (una por alumno/a) y unas cuantas fichas «¿Dónde está cada estrella?».",
        "Abans de la classe (5 min), si hi ha espai: marcar a terra una creu de cinta, una ratlla de 3 m (x) i una de 2 m (y), amb el (0, 0) al mig.|Antes de la clase (5 min), si hay espacio: marcar en el suelo una cruz de cinta, una raya de 3 m (x) y una de 2 m (y), con el (0, 0) en el medio.",
        "Mirar abans les demostracions de les diapositives 5, 6 i 12 per saber on va en Numi.|Mirar antes las demostraciones de las diapositivas 5, 6 y 12 para saber adónde va Numi.",
        "Deixar els ordinadors engegats amb Numi Tech obert i el perfil de cada alumne/a iniciat.|Dejar los ordenadores encendidos con Numi Tech abierto y el perfil de cada alumno/a iniciado."
      ]
    },
      plan: [
        { min: 5, t: "Benvinguda: la Nit de les Estrelles|Bienvenida: la Noche de las Estrellas", fase: 'inici',
          fa: "Presenta la missió: en Numi ha d'anar just on és cada estrella del cel. Pregunta com diríeu a algú on és una cosa sense assenyalar-la i recull respostes («a dalt a la dreta», «al costat de…»). Fes veure que són indicacions poc exactes: avui aprendrem a dir-ho amb dos números.|Presenta la misión: Numi tiene que ir justo donde está cada estrella del cielo. Pregunta cómo diríais a alguien dónde está una cosa sin señalarla y recoge respuestas («arriba a la derecha», «al lado de…»). Haz ver que son indicaciones poco exactas: hoy aprenderemos a decirlo con dos números.",
          diu: ["Com li diríeu a un amic on és la vostra cadira, sense assenyalar?|¿Cómo le diríais a un amigo dónde está vuestra silla, sin señalar?",
            "«A dalt a la dreta» és una pista, però no és exacte. Un ordinador necessita números.|«Arriba a la derecha» es una pista, pero no es exacto. Un ordenador necesita números.",
            "Al cinema, «fila 5, seient 8» és un sol lloc. Avui farem el mateix amb l'escenari.|En el cine, «fila 5, asiento 8» es un solo sitio. Hoy haremos lo mismo con el escenario."],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades o abaixades.|Todavía no: pantallas apagadas o bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "L'escenari és un mapa|El escenario es un mapa", fase: 'teoria',
          fa: "Explica l'escenari com un mapa amb el (0, 0) al centre. Amb les demostracions, fes que comprovin com canvia la x quan en Numi va a la dreta o a l'esquerra, i la y quan puja o baixa. Si tens la creu a terra, un voluntari/a es posa al (0, 0) i fa passos: la classe diu si la x o la y creix o es fa negativa. Acaba amb la pregunta dels punts A, B i C i el «compte!» de l'ordre.|Explica el escenario como un mapa con el (0, 0) en el centro. Con las demostraciones, haz que comprueben cómo cambia la x cuando Numi va a la derecha o a la izquierda, y la y cuando sube o baja. Si tienes la cruz en el suelo, un voluntario/a se pone en el (0, 0) y da pasos: la clase dice si la x o la y crece o se hace negativa. Termina con la pregunta de los puntos A, B y C y el «¡cuidado!» del orden.",
          diu: ["On és el (0, 0)? Exacte: al centre, no a la cantonada.|¿Dónde está el (0, 0)? Exacto: en el centro, no en la esquina.",
            "Si vaig cap a l'esquerra, la x es fa negativa, com la temperatura sota zero.|Si voy hacia la izquierda, la x se hace negativa, como la temperatura bajo cero.",
            "Primer el passadís (la x) i després l'ascensor (la y).|Primero el pasillo (la x) y después el ascensor (la y).",
            "On anirà en Numi amb x: -150, y: 100? Assenyaleu-ho abans de veure-ho.|¿Adónde irá Numi con x: -150, y: 100? Señaladlo antes de verlo."],
          slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "El cel amagat|El cielo escondido", fase: 'desconnectat',
          fa: "Per parelles, cada alumne/a té la seva graella. Primer repassen els eixos i numeren les ratlles (de -4 a 4 la x i de -3 a 3 la y). Després cadascú amaga 3 estrelles en creus de ratlles, sense ensenyar-les. Per torns, diuen unes coordenades; el company/a respon «estrella!» o dona una pista («més a la dreta», «més avall»). Qui troba les 3 estrelles de l'altre/a primer, explica com ho ha pensat.|Por parejas, cada alumno/a tiene su cuadrícula. Primero repasan los ejes y numeran las rayas (de -4 a 4 la x y de -3 a 3 la y). Después cada uno esconde 3 estrellas en cruces de rayas, sin enseñarlas. Por turnos, dicen unas coordenadas; el compañero/a responde «¡estrella!» o da una pista («más a la derecha», «más abajo»). Quien encuentra las 3 estrellas del otro/a primero, explica cómo lo ha pensado.",
          diu: ["Digueu sempre primer la x i després la y. Si no, el company/a buscarà en un altre lloc!|Decid siempre primero la x y después la y. Si no, ¡el compañero/a buscará en otro sitio!",
            "Les estrelles van on es creuen dues ratlles, no dins els quadrets.|Las estrellas van donde se cruzan dos rayas, no dentro de los cuadritos.",
            "Una pista bona diu la direcció: més amunt, més a l'esquerra…|Una buena pista dice la dirección: más arriba, más a la izquierda…"],
          slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles|Por parejas" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Passeja per l'aula i, a les preguntes de triar, demana que diguin en veu alta si la x i la y són positives o negatives abans de respondre. A «El tresor amagat» (activitat de casa), que toquin «Ho hem fet!», perquè ja l'hem fet a classe amb la graella.|Cada alumno/a avanza a su ritmo hasta la pausa activa. Pasea por el aula y, en las preguntas de elegir, pide que digan en voz alta si la x y la y son positivas o negativas antes de responder. En «El tesoro escondido» (actividad de casa), que toquen «¡Lo hemos hecho!», porque ya lo hemos hecho en clase con la cuadrícula.",
          diu: ["Abans de triar: la x és positiva o negativa? I la y?|Antes de elegir: ¿la x es positiva o negativa? ¿Y la y?",
            "A la demostració on en Numi diu on és, endevineu-ho abans que ho digui.|En la demostración donde Numi dice dónde está, adivinadlo antes de que lo diga.",
            "«Posa y a» canvia només la y. Què passa amb la x?|«Pon y a» cambia solo la y. ¿Qué pasa con la x?"],
          slides: ['s11'], app: "De «Recorda» fins a la «Pausa activa»: la pregunta de les fletxes, les dues històries, les targetes de «Descobreix», el (0, 0), els punts A-B-C, «El tresor amagat» (ja fet), en Numi que diu on és, el bloc que el porta a la dreta i la pregunta de «posa y a».|De «Recuerda» hasta la «Pausa activa»: la pregunta de las flechas, las dos historias, las tarjetas de «Descubre», el (0, 0), los puntos A-B-C, «El tesoro escondido» (ya hecho), Numi que dice dónde está, el bloque que lo lleva a la derecha y la pregunta de «pon y a».", org: "Individual|Individual" },
        { min: 10, t: "Reptes: anar a les estrelles|Retos: ir a las estrellas", fase: 'ordinador',
          fa: "Fes la pausa activa tots junts. Després mostra la demostració de «ves a» i resol amb la classe el primer repte en veu alta. Deixa'ls fer els altres quatre. Al de la constel·lació, si en Numi no passa per les estrelles, pregunta què li falta entre salt i salt (les esperes).|Haced la pausa activa todos juntos. Después muestra la demostración de «ve a» y resuelve con la clase el primer reto en voz alta. Deja que hagan los otros cuatro. En el de la constelación, si Numi no pasa por las estrellas, pregunta qué le falta entre salto y salto (las esperas).",
          diu: ["L'estrella és a dalt a la dreta: la x serà positiva o negativa?|La estrella está arriba a la derecha: ¿la x será positiva o negativa?",
            "En Numi salta tan de pressa que no el veiem. Com el fem esperar a cada estrella?|Numi salta tan rápido que no lo vemos. ¿Cómo lo hacemos esperar en cada estrella?",
            "Al repte de l'error, llegiu els dos números en veu alta: quin és la x?|En el reto del error, leed los dos números en voz alta: ¿cuál es la x?"],
          slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes: l'estrella, posa x i posa y, la constel·lació del Gat i l'error de l'ordre.|«Pausa activa» y los cuatro retos: la estrella, pon x y pon y, la constelación del Gato y el error del orden.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: el meu cel d'estrelles|Crea: mi cielo de estrellas", fase: 'crea',
          fa: "Cada alumne/a programa el viatge d'en Numi per les 4 estrelles, en l'ordre que vulgui. Abans de posar blocs, que escriguin (o diguin) les coordenades de cada estrella. Qui acabi, que ensenyi el programa al company/a i li faci endevinar on anirà en Numi primer.|Cada alumno/a programa el viaje de Numi por las 4 estrellas, en el orden que quiera. Antes de poner bloques, que escriban (o digan) las coordenadas de cada estrella. Quien termine, que enseñe el programa al compañero/a y le haga adivinar adónde irá Numi primero.",
          diu: ["Primer les coordenades, després els blocs.|Primero las coordenadas, después los bloques.",
            "No hi ha un sol ordre bo: el teu viatge pot ser diferent del del company/a.|No hay un solo orden bueno: tu viaje puede ser diferente del del compañero/a.", "Quines coordenades té l'estrella de baix a l'esquerra? (Totes dues negatives.)|¿Qué coordenadas tiene la estrella de abajo a la izquierda? (Las dos negativas.)"],
          slides: ['s14'], app: "Pas «Crea»: El meu cel d'estrelles.|Paso «Crea»: Mi cielo de estrellas.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres idees amb el resum (el mapa, la x i la y, i «ves a») fent que la classe assenyali on seria cada punt. Deixa que responguin les preguntes finals de l'app i com s'han sentit. A la porta, fes a cada alumne/a una de les preguntes del tiquet i anota qui encara diu la y abans de la x.|Repasa las tres ideas con el resumen (el mapa, la x y la y, y «ve a») haciendo que la clase señale dónde estaría cada punto. Deja que respondan las preguntas finales de la app y cómo se han sentido. En la puerta, haz a cada alumno/a una de las preguntas del ticket y anota quién todavía dice la y antes de la x.",
          diu: ["Qui em diu on és el (0, 0)?|¿Quién me dice dónde está el (0, 0)?",
            "Si una estrella és a baix a l'esquerra, com són la x i la y?|Si una estrella está abajo a la izquierda, ¿cómo son la x y la y?", "La setmana vinent els personatges volaran a poc a poc, com globus.|La semana que viene los personajes volarán poco a poco, como globos."],
          slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Escriu els números a l'inrevés: posa la y primer i la x després.|Escribe los números al revés: pone la y primero y la x después.",
          "Recorda-li la frase «primer el passadís, després l'ascensor». Que llegeixi el bloc en veu alta: «x… y…» i assenyali amb el dit cap on va cada número.|Recuérdale la frase «primero el pasillo, después el ascensor». Que lea el bloque en voz alta: «x… y…» y señale con el dedo hacia dónde va cada número."],
        ["Creu que el (0, 0) és a la cantonada, com quan dibuixa en un full.|Cree que el (0, 0) está en la esquina, como cuando dibuja en una hoja.",
          "Que provi «ves a x: 0 y: 0» i miri on va en Numi. Després, que compti a partir del centre.|Que pruebe «ve a x: 0 y: 0» y mire adónde va Numi. Después, que cuente a partir del centro."],
        ["Pensa que -100 és més a la dreta que 50 perquè «100 és més gran».|Piensa que -100 está más a la derecha que 50 porque «100 es más grande».",
          "Fes servir el termòmetre o la recta numèrica: el signe menys vol dir «a l'altre costat del zero». Que ho comprovi amb la demostració de la x.|Usa el termómetro o la recta numérica: el signo menos quiere decir «al otro lado del cero». Que lo compruebe con la demostración de la x."],
        ["Posa diversos «ves a» seguits i diu que en Numi no passa per les estrelles.|Pone varios «ve a» seguidos y dice que Numi no pasa por las estrellas.",
          "Pregunta: quant temps es queda en Numi a cada estrella? Que afegeixi un «espera 1 segon» entre salt i salt i ho torni a provar.|Pregunta: ¿cuánto tiempo se queda Numi en cada estrella? Que añada un «espera 1 segundo» entre salto y salto y lo vuelva a probar."],
        ["Prova números a l'atzar fins que encerta.|Prueba números al azar hasta que acierta.",
          "Que estimi abans: l'estrella és a la dreta o a l'esquerra? Llavors la x serà positiva o negativa? I aproximadament, a mig camí de la vora?|Que estime antes: ¿la estrella está a la derecha o a la izquierda? Entonces ¿la x será positiva o negativa? ¿Y aproximadamente, a medio camino del borde?"],
      ["Fa servir «posa x a» quan el repte demana canviar l'alçada.|Usa «pon x a» cuando el reto pide cambiar la altura.",
        "Pregunta: en Numi ha d'anar cap als costats o amunt i avall? Quina lletra diu amunt i avall? (La y.)|Pregunta: ¿Numi tiene que ir hacia los lados o arriba y abajo? ¿Qué letra dice arriba y abajo? (La y.)"]
      ],
      diff: {
        mes: "Fer la fitxa «On és cada estrella?» i, a l'app, repetir el projecte fent que en Numi digui les coordenades de cada estrella quan hi arriba. Després, inventar una constel·lació i dictar-ne les coordenades al company/a perquè la dibuixi.|Hacer la ficha «¿Dónde está cada estrella?» y, en la app, repetir el proyecto haciendo que Numi diga las coordenadas de cada estrella cuando llega. Después, inventar una constelación y dictar sus coordenadas al compañero/a para que la dibuje.",
        menys: "Tenir a la taula la graella del cel amagat amb els eixos marcats en colors (x vermella, y verda) i, abans de cada repte, posar-hi el dit: «a la dreta 3, amunt 2». Començar pels reptes on les coordenades ja surten a l'enunciat.|Tener en la mesa la cuadrícula del cielo escondido con los ejes marcados en colores (x roja, y verde) y, antes de cada reto, poner el dedo: «a la derecha 3, arriba 2». Empezar por los retos donde las coordenadas ya salen en el enunciado."
      },
      aval: {
        ticket: ["On és el punt (0, 0) de l'escenari?|¿Dónde está el punto (0, 0) del escenario?",
          "Si en Numi és a baix a l'esquerra, la x i la y són positives o negatives?|Si Numi está abajo a la izquierda, ¿la x y la y son positivas o negativas?"],
        rubric: [
          ["Situar punts|Situar puntos", "Diu on és un punt a partir de la x i la y, també amb nombres negatius.|Dice dónde está un punto a partir de la x y la y, también con números negativos.", "Situa bé els punts positius, però dubta amb els negatius.|Sitúa bien los puntos positivos, pero duda con los negativos."],
          ["L'ordre x, y|El orden x, y", "Escriu sempre primer la x i després la y, i detecta l'error quan estan girades.|Escribe siempre primero la x y después la y, y detecta el error cuando están giradas.", "De vegades gira els dos números.|A veces gira los dos números."],
          ["Programar un recorregut|Programar un recorrido", "Visita diversos punts en ordre amb «ves a» i esperes, pensant les coordenades abans.|Visita varios puntos en orden con «ve a» y esperas, pensando las coordenadas antes.", "Arriba a un punt, però per fer un recorregut prova números a l'atzar.|Llega a un punto, pero para hacer un recorrido prueba números al azar."],
        ["Explicar el signe|Explicar el signo",
          "Explica per què un punt a l'esquerra té la x negativa i un de baix, la y negativa.|Explica por qué un punto a la izquierda tiene la x negativa y uno de abajo, la y negativa.",
          "Situa bé els punts positius, però s'equivoca amb els negatius.|Sitúa bien los puntos positivos, pero se equivoca con los negativos."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «El tresor amagat»: dibuixeu una creu en un full, amagueu un tresor en un punt i busqueu-lo dient coordenades.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «El tesoro escondido»: dibujad una cruz en una hoja, esconded un tesoro en un punto y buscadlo diciendo coordenadas.",
      slides: [
        { id: 's1', k: 'portada', t: "x i y: l'escenari és un mapa|x e y: el escenario es un mapa", x: "Avui aprendrem a dir exactament on és cada cosa amb dos números.|Hoy aprenderemos a decir exactamente dónde está cada cosa con dos números.",
          nota: "Presenta l'objectiu: al final de la classe, tothom portarà en Numi a qualsevol estrella del cel.|Presenta el objetivo: al final de la clase, todos llevarán a Numi a cualquier estrella del cielo." },
        { id: 's2', k: 'pregunta', t: 'On és la teva cadira?|¿Dónde está tu silla?', x: "Explica-li a un amic on seus, sense assenyalar.|Explícale a un amigo dónde te sientas, sin señalar.",
          nota: "Recull respostes i fes notar les que són poc exactes («per allà»). Torna-hi quan expliquis les coordenades.|Recoge respuestas y haz notar las que son poco exactas («por allí»). Vuelve a ello cuando expliques las coordenadas." },
        { id: 's3', k: 'concepte', t: 'La Nit de les Estrelles|La Noche de las Estrellas', punts: ["En Bit ha fet un mapa del cel.|Bit ha hecho un mapa del cielo.", "En Numi ha d'anar just on és cada estrella.|Numi tiene que ir justo donde está cada estrella.", "Per dir on és cada lloc farem servir dos números: la x i la y.|Para decir dónde está cada sitio usaremos dos números: la x y la y."], pic: 'img/tech/scenes/lab.webp',
          nota: "Explica que l'ordinador no entén «una mica més amunt»: necessita números exactes.|Explica que el ordenador no entiende «un poco más arriba»: necesita números exactos." },
        { id: 's4', k: 'anim', t: "L'escenari és un mapa|El escenario es un mapa", anim: 'g4grid', x: "480 punts d'ample, 360 d'alt i el (0, 0) al centre.|480 puntos de ancho, 360 de alto y el (0, 0) en el centro.",
          nota: "Fes notar les dues ratlles: la vermella és la de la x i la verda, la de la y. La línia discontínua mostra com es llegeixen els dos números.|Haz notar las dos rayas: la roja es la de la x y la verde, la de la y. La línea discontinua muestra cómo se leen los dos números." },
        { id: 's5', k: 'media', t: "La x: esquerra o dreta|La x: izquierda o derecha", x: "Mireu què diu en Numi a cada lloc.|Mirad qué dice Numi en cada sitio.", media: D_X,
          nota: "Abans de cada salt, pregunta: ara la x serà positiva, negativa o zero?|Antes de cada salto, pregunta: ¿ahora la x será positiva, negativa o cero?" },
        { id: 's6', k: 'media', t: 'La y: amunt o avall|La y: arriba o abajo', x: "Amunt, positiva. Avall, negativa.|Arriba, positiva. Abajo, negativa.", media: D_Y,
          nota: "Compara-ho amb un termòmetre: per sota del zero, els números porten el signe menys.|Compáralo con un termómetro: por debajo del cero, los números llevan el signo menos." },
        { id: 's7', k: 'anim', t: 'On anirà en Numi?|¿Adónde irá Numi?', anim: 'g4pts', x: "Amb «ves a x: -150 y: 100», a quin punt anirà: A, B o C?|Con «ve a x: -150 y: 100», ¿a qué punto irá: A, B o C?",
          nota: "Que tothom assenyali abans de respondre. Resposta: B (x negativa, a l'esquerra; y positiva, amunt).|Que todos señalen antes de responder. Respuesta: B (x negativa, a la izquierda; y positiva, arriba)." },
        { id: 's8', k: 'anim', t: 'Compte! Primer la x|¡Cuidado! Primero la x', anim: 'g4xy', x: "(100, 50) i (50, 100) són llocs diferents.|(100, 50) y (50, 100) son sitios diferentes.",
          nota: "Fes servir la frase «primer el passadís (x), després l'ascensor (y)». Escriu tots dos punts a la pissarra i que dos voluntaris els marquin.|Usa la frase «primero el pasillo (x), después el ascensor (y)». Escribe los dos puntos en la pizarra y que dos voluntarios los marquen." },
        { id: 's9', k: 'activitat', t: 'El cel amagat|El cielo escondido', timer: 12, punts: ["Repasseu els eixos i numereu les ratlles.|Repasad los ejes y numerad las rayas.", "Amagueu 3 estrelles en creus de ratlles, sense ensenyar-les.|Esconded 3 estrellas en cruces de rayas, sin enseñarlas.", "Per torns, digueu unes coordenades: (x, y).|Por turnos, decid unas coordenadas: (x, y).", "El company/a respon «estrella!» o dona una pista.|El compañero/a responde «¡estrella!» o da una pista."],
          nota: "Passeja per les taules i comprova que diuen primer la x. Si una parella acaba aviat, que amaguin 5 estrelles.|Pasea por las mesas y comprueba que dicen primero la x. Si una pareja termina pronto, que escondan 5 estrellas." },
        { id: 's10', k: 'activitat', t: 'Les pistes que valen|Las pistas que valen', punts: ["«Més a la dreta» o «més a l'esquerra»: canvia la x.|«Más a la derecha» o «más a la izquierda»: cambia la x.", "«Més amunt» o «més avall»: canvia la y.|«Más arriba» o «más abajo»: cambia la y.", "Les estrelles van on es creuen dues ratlles.|Las estrellas van donde se cruzan dos rayas."],
          nota: "Deixa aquesta diapositiva projectada durant l'activitat perquè la consultin.|Deja esta diapositiva proyectada durante la actividad para que la consulten." },
        { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «x i y: l'escenari és un mapa».|Abre la sesión «x e y: el escenario es un mapa».", "Fes la missió, «Descobreix» i les preguntes.|Haz la misión, «Descubre» y las preguntas.", "A «El tresor amagat», toca «Ho hem fet!».|En «El tesoro escondido», toca «¡Lo hemos hecho!».", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
          nota: "A les preguntes, demana que justifiquin la resposta amb «la x és… i la y és…».|En las preguntas, pide que justifiquen la respuesta con «la x es… y la y es…»." },
        { id: 's12', k: 'media', t: '«Ves a x: … y: …»|«Ve a x: … y: …»', x: "Un sol bloc i en Numi salta al punt exacte.|Un solo bloque y Numi salta al punto exacto.", media: D_GOTO,
          nota: "Abans de cada salt, que la classe digui en veu alta les coordenades de l'estrella. Fes notar que el salt és instantani.|Antes de cada salto, que la clase diga en voz alta las coordenadas de la estrella. Haz notar que el salto es instantáneo." },
        { id: 's13', k: 'repte', t: 'Reptes: a les estrelles!|Retos: ¡a las estrellas!', timer: 10, punts: ["1. L'estrella de dalt a la dreta|1. La estrella de arriba a la derecha", "2. Posa x i posa y|2. Pon x y pon y", "3. La constel·lació del Gat (amb esperes)|3. La constelación del Gato (con esperas)", "4. L'error de l'ordre|4. El error del orden"],
          nota: "Si algú s'encalla, pregunta: l'estrella és a la dreta o a l'esquerra del centre? Amunt o avall?|Si alguien se atasca, pregunta: ¿la estrella está a la derecha o a la izquierda del centro? ¿Arriba o abajo?" },
        { id: 's14', k: 'activitat', t: "Crea: el meu cel d'estrelles|Crea: mi cielo de estrellas", timer: 5, x: "En Numi visita les 4 estrelles en l'ordre que triïs i diu alguna cosa en acabar.|Numi visita las 4 estrellas en el orden que elijas y dice algo al terminar.",
          nota: "Celebra que hi hagi viatges diferents. Si queda temps, que un alumne/a dicti el seu ordre i la classe digui les coordenades.|Celebra que haya viajes diferentes. Si queda tiempo, que un alumno/a dicte su orden y la clase diga las coordenadas." },
        { id: 's15', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["L'escenari és un mapa amb el (0, 0) al centre.|El escenario es un mapa con el (0, 0) en el centro.", "La x diu esquerra o dreta; la y, avall o amunt.|La x dice izquierda o derecha; la y, abajo o arriba.", "«Ves a x: y:» porta el personatge d'un salt a un punt.|«Ve a x: y:» lleva al personaje de un salto a un punto."],
          nota: "Torna a la pregunta del principi: ara sabeu dir on és la cadira amb dos números?|Vuelve a la pregunta del principio: ¿ahora sabéis decir dónde está la silla con dos números?" },
        { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["On és el punt (0, 0)?|¿Dónde está el punto (0, 0)?", "A baix a l'esquerra, la x i la y són positives o negatives?|Abajo a la izquierda, ¿la x y la y son positivas o negativas?"],
          nota: "Anota qui encara confon el signe dels números: la sessió vinent hi tornarem amb «canvia x en -10».|Anota quién todavía confunde el signo de los números: la próxima sesión volveremos con «cambia x en -10»." }
      ],
      print: [
        { id: 'p1', t: 'El cel amagat|El cielo escondido', k: 'graella', w: 8, h: 6,
          intro: "Per parelles. 1) Repassa amb vermell la ratlla del mig de través (és la x) i amb verd la del mig de dalt a baix (és la y). 2) Numera les ratlles: la x de -4 a 4 i la y de -3 a 3; on es creuen, el (0, 0). 3) Dibuixa 3 estrelles on es creuen dues ratlles, sense que el company/a ho vegi. 4) Per torns, dieu unes coordenades: el company/a respon «estrella!» o dona una pista.|Por parejas. 1) Repasa con rojo la raya del medio horizontal (es la x) y con verde la del medio vertical (es la y). 2) Numera las rayas: la x de -4 a 4 y la y de -3 a 3; donde se cruzan, el (0, 0). 3) Dibuja 3 estrellas donde se cruzan dos rayas, sin que el compañero/a lo vea. 4) Por turnos, decid unas coordenadas: el compañero/a responde «¡estrella!» o da una pista.",
          legend: [['⭐', 'Estrella amagada|Estrella escondida'], ['✖', 'Coordenada provada sense estrella|Coordenada probada sin estrella'], ['➡', "x: cap a la dreta, positiva|x: hacia la derecha, positiva"], ['⬆', 'y: cap amunt, positiva|y: hacia arriba, positiva']],
          items: [{ q: 'Les meves estrelles són a: (___, ___) · (___, ___) · (___, ___)|Mis estrellas están en: (___, ___) · (___, ___) · (___, ___)' },
            { q: "He trobat les estrelles del company/a a: (___, ___) · (___, ___) · (___, ___)|He encontrado las estrellas del compañero/a en: (___, ___) · (___, ___) · (___, ___)" }] },
        { id: 'p2', t: 'On és cada estrella?|¿Dónde está cada estrella?', k: 'fitxa',
          intro: "Recorda: l'escenari fa de -240 a 240 de través (x) i de -180 a 180 de dalt a baix (y). El (0, 0) és al centre.|Recuerda: el escenario va de -240 a 240 de lado (x) y de -180 a 180 de arriba abajo (y). El (0, 0) está en el centro.",
          items: [
            { q: "On és el punt (0, 0) de l'escenari?|¿Dónde está el punto (0, 0) del escenario?", sol: "Al centre de l'escenari.|En el centro del escenario." },
            { q: "En Numi és a x: -150, y: 100. És a la dreta o a l'esquerra? A dalt o a baix?|Numi está en x: -150, y: 100. ¿Está a la derecha o a la izquierda? ¿Arriba o abajo?", sol: "A l'esquerra (x negativa) i a dalt (y positiva).|A la izquierda (x negativa) y arriba (y positiva)." },
            { q: "Quin bloc porta en Numi a baix a la dreta: «ves a x: 200 y: -150» o «ves a x: -200 y: 150»?|¿Qué bloque lleva a Numi abajo a la derecha: «ve a x: 200 y: -150» o «ve a x: -200 y: 150»?", sol: "«Ves a x: 200 y: -150»: x positiva (dreta) i y negativa (baix).|«Ve a x: 200 y: -150»: x positiva (derecha) e y negativa (abajo)." },
            { q: "En Numi és a (100, 50) i fa «posa x a -100». On és ara?|Numi está en (100, 50) y hace «pon x a -100». ¿Dónde está ahora?", sol: "A (-100, 50): només ha canviat la x.|En (-100, 50): solo ha cambiado la x." },
            { q: "Escriu les coordenades de tres llocs: el centre, un punt a dalt a l'esquerra i un punt a baix a la dreta.|Escribe las coordenadas de tres sitios: el centro, un punto arriba a la izquierda y un punto abajo a la derecha.", sol: "(0, 0); per exemple (-150, 100); per exemple (150, -100). Val qualsevol punt amb els signes bons.|(0, 0); por ejemplo (-150, 100); por ejemplo (150, -100). Vale cualquier punto con los signos correctos." }
          ] }
      ]
    },
    /* ---------- Sessió 2 · Lliscar i canviar x i y ---------- */
    'g4-2': {
    intro: "Els globus no salten: volen a poc a poc. En aquesta sessió l'alumnat compara «ves a», que porta el personatge d'un salt, amb «llisca», que hi va a poc a poc en els segons que diguis, i construeix camins tram a tram. Després descobreix «canvia x» i «canvia y», que sumen (o resten) a la posició on ja és el personatge, a diferència de «posa x», que el porta sempre al mateix lloc. Ho combinen amb els guions de tecla per pilotar el globus amb les fletxes. La classe comença amb la cursa de globus, segueix amb la cursa de paper en grups de 3 i acaba dissenyant un recorregut propi.|Los globos no saltan: vuelan poco a poco. En esta sesión el alumnado compara «ve a», que lleva al personaje de un salto, con «desliza», que va poco a poco en los segundos que digas, y construye caminos tramo a tramo. Después descubre «cambia x» y «cambia y», que suman (o restan) a la posición donde ya está el personaje, a diferencia de «pon x», que lo lleva siempre al mismo sitio. Lo combinan con los guiones de tecla para pilotar el globo con las flechas. La clase empieza con la carrera de globos, sigue con la carrera de papel en grupos de 3 y termina diseñando un recorrido propio.",
    claus: [
      "«Llisca en 2 s fins a x: y:» va a poc a poc fins al punt; «ves a» hi salta de cop.|«Desliza en 2 s hasta x: y:» va poco a poco hasta el punto; «ve a» salta de golpe.",
      "Un camí es fa amb un «llisca» per a cada tram, un darrere l'altre.|Un camino se hace con un «desliza» para cada tramo, uno detrás de otro.",
      "«Canvia x en 10» suma 10 a la x on ja és el personatge; amb -10 va cap a l'esquerra.|«Cambia x en 10» suma 10 a la x donde ya está el personaje; con -10 va hacia la izquierda.",
      "«Posa x a» dins un bucle el deixa sempre al mateix lloc; «canvia x» el fa avançar a cada volta.|«Pon x a» dentro de un bucle lo deja siempre en el mismo sitio; «cambia x» lo hace avanzar en cada vuelta."
    ],
    prev: [
      "Llegir i dir coordenades en l'ordre x, y (sessió 1).|Leer y decir coordenadas en el orden x, y (sesión 1).",
      "Guions de tecla amb les fletxes (unitat 3, sessió 2).|Guiones de tecla con las flechas (unidad 3, sesión 2).",
      "Bucles «repeteix» (unitat 2) i sumes i restes amb nombres negatius senzills (matemàtiques).|Bucles «repite» (unidad 2) y sumas y restas con números negativos sencillos (matemáticas)."
    ],
    faq: [
      ["Quin número és el dels segons al bloc «llisca»?|¿Qué número es el de los segundos en el bloque «desliza»?",
        "El primer: «llisca en 2 s». Després van la x i la y del punt on ha d'arribar.|El primero: «desliza en 2 s». Después van la x y la y del punto adonde tiene que llegar."],
      ["Per què el globus no es mou si poso «posa x a 10» dins un bucle?|¿Por qué el globo no se mueve si pongo «pon x a 10» dentro de un bucle?",
        "Perquè «posa x a 10» el porta sempre al 10: la primera volta s'hi mou i les altres ja hi és. Per avançar, «canvia x en 10».|Porque «pon x a 10» lo lleva siempre al 10: en la primera vuelta se mueve y en las demás ya está allí. Para avanzar, «cambia x en 10»."],
      ["Com faig que el globus vagi en diagonal?|¿Cómo hago que el globo vaya en diagonal?",
        "Amb «llisca» cap a un punt que tingui la x i la y diferents de les d'ara: hi va en línia recta.|Con «desliza» hacia un punto que tenga la x y la y diferentes de las de ahora: va en línea recta."],
      ["Per què el globus de les fletxes surt de l'escenari?|¿Por qué el globo de las flechas sale del escenario?",
        "Perquè si mantens la fletxa, el guió es repeteix i la x o la y continuen creixent. Deixa anar la fletxa abans d'arribar a la vora.|Porque si mantienes la flecha, el guion se repite y la x o la y siguen creciendo. Suelta la flecha antes de llegar al borde."],
      ["Puc fer que el globus vagi més ràpid en un tram?|¿Puedo hacer que el globo vaya más rápido en un tramo?",
        "Sí: posa menys segons en aquell «llisca». Amb 1 segon va ràpid; amb 4, molt a poc a poc.|Sí: pon menos segundos en ese «desliza». Con 1 segundo va rápido; con 4, muy despacio."],
      ["«Canvia x en -20» vol dir anar a -20?|¿«Cambia x en -20» quiere decir ir a -20?",
        "No: vol dir restar 20 a la x que ja té. Si era a 50, passa a 30.|No: quiere decir restar 20 a la x que ya tiene. Si estaba en 50, pasa a 30."]
    ],
    tec: [
      ["«Comprova» falla al repte de les fletxes.|«Comprueba» falla en el reto de las flechas.",
        "La prova prem cada fletxa un temps fix: que comprovi que cada guió mou 10 punts cap al seu costat (esquerra i avall, amb -10).|La prueba pulsa cada flecha un tiempo fijo: que compruebe que cada guion mueve 10 puntos hacia su lado (izquierda y abajo, con -10)."],
      ["Al repte dels 2 blocs no deixa afegir-ne més.|En el reto de los 2 bloques no deja añadir más.",
        "El comptador limita a 2 blocs: un «repeteix» amb un «canvia y» a dins. Que esborri els que sobren.|El contador limita a 2 bloques: un «repite» con un «cambia y» dentro. Que borre los que sobran."],
      ["El globus llisca massa ràpid per veure'l.|El globo se desliza demasiado rápido para verlo.",
        "Que posi més segons al «llisca» (3 o 4) per veure millor el camí.|Que ponga más segundos en el «desliza» (3 o 4) para ver mejor el camino."],
      ["Les cartes de la cursa es perden o es barregen.|Las cartas de la carrera se pierden o se mezclan.",
        "Feu un paquet per grup en un sobre amb el número del grup; plastificades, serveixen per a la sessió 4.|Haced un paquete por grupo en un sobre con el número del grupo; plastificadas, sirven para la sesión 4."],
      ["La moneda de la cursa de paper rodola de la graella.|La moneda de la carrera de papel rueda de la cuadrícula.",
        "Feu servir una goma, un tap o una fitxa plana en lloc de la moneda.|Usad una goma, un tapón o una ficha plana en lugar de la moneda."]
    ],
    seg: [
      "A la pausa activa, els «saltets» són petits i al lloc, amb espai entre alumnes.|En la pausa activa, los «saltitos» son pequeños y en el sitio, con espacio entre alumnos.",
      "A la cursa de paper, els papers roten perquè tothom faci de pilot/a, navegant i jutge/ssa; cap paper és més important que un altre.|En la carrera de papel, los papeles rotan para que todos hagan de piloto, navegante y juez/a; ningún papel es más importante que otro."
    ],
    extra: [
      "Fer que el globus llisqui fent un quadrat perfecte i torni al punt d'inici.|Hacer que el globo se deslice haciendo un cuadrado perfecto y vuelva al punto de inicio.",
      "Fer dos globus que facin la cursa alhora, cadascun amb segons diferents, i predir qui arribarà primer.|Hacer dos globos que hagan la carrera a la vez, cada uno con segundos diferentes, y predecir quién llegará primero.",
      "Calcular quants segons dura tota la cursa sumant els segons de cada «llisca».|Calcular cuántos segundos dura toda la carrera sumando los segundos de cada «desliza»."
    ],
    trans: [
      "Matemàtiques: sumes i restes amb nombres negatius i multiplicació (10 vegades 5 = 50).|Matemáticas: sumas y restas con números negativos y multiplicación (10 veces 5 = 50).",
      "Ciències: el temps i la velocitat (més segons per al mateix camí, més lent).|Ciencias: el tiempo y la velocidad (más segundos para el mismo camino, más lento).",
      "Sessió següent: la direcció, rebotar a les vores i perseguir personatges.|Sesión siguiente: la dirección, rebotar en los bordes y perseguir personajes."
    ],
      obj: [
        "L'alumne/a distingeix «ves a» (un salt) de «llisca» (un moviment suau que dura uns segons).|El alumno/a distingue «ve a» (un salto) de «desliza» (un movimiento suave que dura unos segundos).",
        "L'alumne/a programa un recorregut de diversos trams amb «llisca».|El alumno/a programa un recorrido de varios tramos con «desliza».",
        "L'alumne/a fa servir «canvia x / y» amb números positius i negatius i calcula on acabarà el personatge.|El alumno/a usa «cambia x / y» con números positivos y negativos y calcula dónde terminará el personaje.",
        "L'alumne/a controla un personatge amb les quatre fletxes i explica la diferència entre «posa x» i «canvia x».|El alumno/a controla un personaje con las cuatro flechas y explica la diferencia entre «pon x» y «cambia x»."
      ],
      comp: [
        "Competència digital (CD5): crear animacions i programes interactius amb blocs|Competencia digital (CD5): crear animaciones y programas interactivos con bloques",
        "Matemàtiques: suma i resta amb nombres negatius i multiplicació com a suma repetida|Matemáticas: suma y resta con números negativos y multiplicación como suma repetida",
        "Pensament computacional: posició fixa i moviment relatiu, esdeveniments i bucles|Pensamiento computacional: posición fija y movimiento relativo, eventos y bucles",
        "Treball en equip: predir, comprovar i explicar els moviments en grup|Trabajo en equipo: predecir, comprobar y explicar los movimientos en grupo"
      ],
      vocab: [
        ["Lliscar|Deslizar", "Anar d'un punt a un altre a poc a poc, en un temps que tries.|Ir de un punto a otro poco a poco, en un tiempo que eliges."],
        ["Tram|Tramo", "Cada tros recte d'un camí, entre dos punts.|Cada trozo recto de un camino, entre dos puntos."],
        ["Canviar x / y|Cambiar x / y", "Sumar (o restar, si és negatiu) a la x o a la y que ja té el personatge.|Sumar (o restar, si es negativo) a la x o a la y que ya tiene el personaje."],
        ["Posar x / y|Poner x / y", "Portar el personatge a una x o una y concreta, sigui on sigui.|Llevar al personaje a una x o una y concreta, esté donde esté."],
        ["Esdeveniment|Evento", "Una cosa que passa (prémer una fletxa) i que fa començar un guió.|Algo que pasa (pulsar una flecha) y que hace empezar un guion."]
      ],
      mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Lliscar i canviar x i y»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Deslizar y cambiar x e y»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per grup de 3: 1 paquet de cartes de la cursa (imprimible 1), 1 pista de la cursa (imprimible 2) i 1 fitxa plana o moneda (el globus)|Por grupo de 3: 1 paquete de cartas de la carrera (imprimible 1), 1 pista de la carrera (imprimible 2) y 1 ficha plana o moneda (el globo)"
      ],
      imprimir: [
        "1 paquet de cartes de la cursa de globus per grup de 3 (imprimible 1)|1 paquete de cartas de la carrera de globos por grupo de 3 (imprimible 1)",
        "1 pista de la cursa (graella) per grup de 3 (imprimible 2)|1 pista de la carrera (cuadrícula) por grupo de 3 (imprimible 2)"
      ],
      prep: [
        "El dia abans (15 min): imprimir i retallar un paquet de cartes per grup; si es plastifiquen, serveixen per a la sessió 4.|El día antes (15 min): imprimir y recortar un paquete de cartas por grupo; si se plastifican, sirven para la sesión 4.",
        "El dia abans (5 min): imprimir una pista per grup i marcar-hi la sortida a (-3, -2) i la meta a (3, 2).|El día antes (5 min): imprimir una pista por grupo y marcar la salida en (-3, -2) y la meta en (3, 2).",
        "Mirar abans les demostracions de les diapositives 4, 7 i 11.|Mirar antes las demostraciones de las diapositivas 4, 7 y 11.",
        "Deixar els ordinadors engegats amb Numi Tech obert i el perfil de cada alumne/a iniciat.|Dejar los ordenadores encendidos con Numi Tech abierto y el perfil de cada alumno/a iniciado."
      ]
    },
      plan: [
        { min: 5, t: "Benvinguda: la cursa de globus|Bienvenida: la carrera de globos", fase: 'inici',
          fa: "Recorda la sessió anterior amb la pregunta de repàs: un voluntari/a assenyala on és (0, 120). Presenta la missió: els globus no salten, volen a poc a poc. Pregunta com s'hauria de veure un globus que va d'un núvol a l'altre.|Recuerda la sesión anterior con la pregunta de repaso: un voluntario/a señala dónde está (0, 120). Presenta la misión: los globos no saltan, vuelan poco a poco. Pregunta cómo se debería ver un globo que va de una nube a otra.",
          diu: ["On és el punt x: 0, y: 120? I el (-150, -100)?|¿Dónde está el punto x: 0, y: 120? ¿Y el (-150, -100)?",
            "Un globus que desapareix i apareix a l'altra banda… us sembla real?|Un globo que desaparece y aparece al otro lado… ¿os parece real?", "Avui el bloc nou té un número més: els segons. Per a què creieu que serveix?|Hoy el bloque nuevo tiene un número más: los segundos. ¿Para qué creéis que sirve?"],
          slides: ['s1', 's2'], app: "Encara no: pantalles apagades o abaixades.|Todavía no: pantallas apagadas o bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Lliscar i canviar|Deslizar y cambiar", fase: 'teoria',
          fa: "Compara «ves a» i «llisca» amb l'animació i mostra el camí del globus tram a tram. Explica «canvia x en 10» com «un pas més des d'on ets» i fes la pregunta de l'ocell a x: 50 entre tots, amb la recta a la pissarra. Acaba amb la demostració de «posa x» contra «canvia x».|Compara «ve a» y «desliza» con la animación y muestra el camino del globo tramo a tramo. Explica «cambia x en 10» como «un paso más desde donde estás» y haz la pregunta del pájaro en x: 50 entre todos, con la recta en la pizarra. Termina con la demostración de «pon x» contra «cambia x».",
          diu: ["«Ves a» és un salt de màgia; «llisca» és un vol. Quin bloc fa servir els segons?|«Ve a» es un salto de magia; «desliza» es un vuelo. ¿Qué bloque usa los segundos?",
            "Canvia x en 10: no vol dir «ves al 10», vol dir «10 més del que tenies».|Cambia x en 10: no quiere decir «ve al 10», quiere decir «10 más de lo que tenías».",
            "Per què el globus de dalt no avança, si repeteix el bloc 6 vegades?|¿Por qué el globo de arriba no avanza, si repite el bloque 6 veces?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "La cursa de globus de paper|La carrera de globos de papel", fase: 'desconnectat',
          fa: "Grups de 3 amb tres papers que roten a cada torn: pilot/a (agafa una carta), navegant (diu on acabarà el globus abans de moure'l) i jutge/ssa (comprova la posició). El globus surt de (-3, -2) i ha d'arribar a la meta (3, 2). Si una carta el faria sortir de la pista, no es mou. La carta «Ves a x: 0 y: 0» el torna al centre, sigui on sigui: fes notar la diferència amb les cartes «canvia».|Grupos de 3 con tres papeles que rotan en cada turno: piloto (coge una carta), navegante (dice dónde terminará el globo antes de moverlo) y juez/a (comprueba la posición). El globo sale de (-3, -2) y tiene que llegar a la meta (3, 2). Si una carta lo haría salir de la pista, no se mueve. La carta «Ve a x: 0 y: 0» lo devuelve al centro, esté donde esté: haz notar la diferencia con las cartas «cambia».",
          diu: ["Abans de moure el globus, el navegant diu les coordenades on acabarà.|Antes de mover el globo, el navegante dice las coordenadas donde terminará.",
            "La carta «canvia x en -1» el porta un pas cap a on?|La carta «cambia x en -1» lo lleva un paso ¿hacia dónde?",
            "Quina carta fa el mateix sigui on sigui el globus?|¿Qué carta hace lo mismo esté donde esté el globo?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. A les preguntes de càlcul, demana que facin la suma en veu alta abans de triar. A «El globus de paper» (activitat de casa), que toquin «Ho hem fet!»: és com la cursa que acabem de fer.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En las preguntas de cálculo, pide que hagan la suma en voz alta antes de elegir. En «El globo de papel» (actividad de casa), que toquen «¡Lo hemos hecho!»: es como la carrera que acabamos de hacer.",
          diu: ["50 menys 20… quant fa? I el signe, què vol dir?|50 menos 20… ¿cuánto da? Y el signo, ¿qué quiere decir?",
            "10 vegades 5: és una multiplicació amagada dins un bucle!|10 veces 5: ¡es una multiplicación escondida dentro de un bucle!", "Al globus de les banderes, quants punts puja amb 12 vegades 20? (240.)|En el globo de las banderas, ¿cuántos puntos sube con 12 veces 20? (240.)"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa»: el punt (0, 120), la història, les targetes de «Descobreix», la diferència entre «ves a» i «llisca», «El globus de paper» (ja fet), les dues preguntes de càlcul i el bloc que fa pujar el globus.|De «Recuerda» hasta la «Pausa activa»: el punto (0, 120), la historia, las tarjetas de «Descubre», la diferencia entre «ve a» y «desliza», «El globo de papel» (ya hecho), las dos preguntas de cálculo y el bloque que hace subir el globo.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: pilots de globus|Retos: pilotos de globos", fase: 'ordinador',
          fa: "Fes la pausa activa tots junts. Després mostra la demostració de les fletxes i explica el botó «Comprova»: les fletxes es premen soles per comprovar el programa. Deixa'ls fer els cinc reptes. Al de l'ocell que no es mou, recorda la demostració de «posa x» i «canvia x».|Haced la pausa activa todos juntos. Después muestra la demostración de las flechas y explica el botón «Comprueba»: las flechas se pulsan solas para comprobar el programa. Deja que hagan los cinco retos. En el del pájaro que no se mueve, recuerda la demostración de «pon x» y «cambia x».",
          diu: ["Primer proveu-ho vosaltres amb les fletxes; quan funcioni, toqueu «Comprova».|Primero probadlo vosotros con las flechas; cuando funcione, tocad «Comprueba».",
            "Per anar a l'esquerra, el número ha de ser positiu o negatiu?|Para ir a la izquierda, ¿el número tiene que ser positivo o negativo?",
            "Quantes vegades s'ha de sumar 10 per arribar a 150?|¿Cuántas veces hay que sumar 10 para llegar a 150?"],
          slides: ['s11', 's12'], app: "«Pausa activa» i els cinc reptes: lliscar fins a la bandera, el camí dels núvols, les quatre fletxes, el globus que s'enlaira i l'ocell que no es mou.|«Pausa activa» y los cinco retos: deslizarse hasta la bandera, el camino de las nubes, las cuatro flechas, el globo que despega y el pájaro que no se mueve.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: la cursa de globus|Crea: la carrera de globos", fase: 'crea',
          fa: "Cada alumne/a dissenya el recorregut del seu globus per les tres estrelles fins a la bandera. Anima'ls a provar segons diferents: un tram ràpid, un de lent. Qui acabi, que ensenyi la cursa al company/a i compareu quin globus arriba primer.|Cada alumno/a diseña el recorrido de su globo por las tres estrellas hasta la bandera. Anímalos a probar segundos diferentes: un tramo rápido, uno lento. Quien termine, que enseñe la carrera al compañero/a y comparad qué globo llega primero.",
          diu: ["Quin tram vols que sigui el més ràpid? Quants segons hi poses?|¿Qué tramo quieres que sea el más rápido? ¿Cuántos segundos le pones?",
            "Si sumeu tots els segons, sabreu quant tarda la cursa.|Si sumáis todos los segundos, sabréis cuánto tarda la carrera.", "Primer pensa l'ordre de les estrelles: quin camí és més curt?|Primero piensa el orden de las estrellas: ¿qué camino es más corto?"],
          slides: ['s13'], app: "Pas «Crea»: La cursa de globus.|Paso «Crea»: La carrera de globos.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres idees amb el resum (llisca, canvia x i y i les fletxes). Deixa que responguin les preguntes finals de l'app i com s'han sentit. A la porta, fes a cada alumne/a una pregunta del tiquet i anota qui encara confon «posa x» i «canvia x».|Repasa las tres ideas con el resumen (desliza, cambia x e y y las flechas). Deja que respondan las preguntas finales de la app y cómo se han sentido. En la puerta, haz a cada alumno/a una pregunta del ticket y anota quién todavía confunde «pon x» y «cambia x».",
          diu: ["Quin bloc farieu servir perquè un personatge vagi a poc a poc?|¿Qué bloque usaríais para que un personaje vaya poco a poco?",
            "Si soc a x: 20 i faig canvia x en -30, on soc?|Si estoy en x: 20 y hago cambia x en -30, ¿dónde estoy?", "«Posa x» o «canvia x»: quin fa avançar dins un bucle? («Canvia x».)|«Pon x» o «cambia x»: ¿cuál hace avanzar dentro de un bucle? («Cambia x».)"],
          slides: ['s14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Fa servir «posa x a 10» dins un bucle i no entén per què el personatge no avança.|Usa «pon x a 10» dentro de un bucle y no entiende por qué el personaje no avanza.",
          "Que digui en veu alta on és el personatge després de cada volta. Quan vegi que sempre és 10, pregunta-li quin bloc suma a la x que ja té.|Que diga en voz alta dónde está el personaje después de cada vuelta. Cuando vea que siempre es 10, pregúntale qué bloque suma a la x que ya tiene."],
        ["A la fletxa esquerra hi posa «canvia x en 10» (sense el signe menys).|En la flecha izquierda pone «cambia x en 10» (sin el signo menos).",
          "Que premi la fletxa i observi cap on va. Pregunta: cap a l'esquerra, la x creix o es fa més petita?|Que pulse la flecha y observe hacia dónde va. Pregunta: hacia la izquierda, ¿la x crece o se hace más pequeña?"],
        ["Confon l'ordre dels números de «llisca» i posa la x on van els segons.|Confunde el orden de los números de «desliza» y pone la x donde van los segundos.",
          "Que llegeixi el bloc sencer en veu alta: «llisca en … segons fins a x … y …». Quin número és un temps?|Que lea el bloque entero en voz alta: «desliza en … segundos hasta x … y …». ¿Qué número es un tiempo?"],
        ["Fa un camí d'un sol tram i el globus no toca les estrelles.|Hace un camino de un solo tramo y el globo no toca las estrellas.",
          "Que dibuixi el camí amb el dit a la pantalla, parant a cada estrella: cada parada és un bloc «llisca».|Que dibuje el camino con el dedo en la pantalla, parando en cada estrella: cada parada es un bloque «desliza»."],
        ["Al repte de les fletxes toca «Comença» i espera que es moguin soles.|En el reto de las flechas toca «Empieza» y espera que se muevan solas.",
          "Explica que amb «Comença» les fletxes les prem ell/a. Quan funcioni, «Comprova» les premerà soles.|Explica que con «Empieza» las flechas las pulsa él/ella. Cuando funcione, «Comprueba» las pulsará solas."],
      ["Al repte dels 2 blocs, posa «repeteix 150 vegades» amb «canvia y en 10» i el globus surt per dalt.|En el reto de los 2 bloques, pone «repite 150 veces» con «cambia y en 10» y el globo sale por arriba.",
        "Pregunta: si a cada volta puja 10, quantes voltes calen per pujar 150? Que ho calculi abans de provar (15).|Pregunta: si en cada vuelta sube 10, ¿cuántas vueltas hacen falta para subir 150? Que lo calcule antes de probar (15)."]
      ],
      diff: {
        mes: "Repetir la cursa fent que el globus faci un zig-zag amb un bucle (canvia x i canvia y alternats) i que digui els segons totals de la cursa. A la cursa de paper, inventar cartes noves (canvia x en +3, ves a…).|Repetir la carrera haciendo que el globo haga un zigzag con un bucle (cambia x y cambia y alternados) y que diga los segundos totales de la carrera. En la carrera de papel, inventar cartas nuevas (cambia x en +3, ve a…).",
        menys: "Tenir la recta numèrica de -5 a 5 a la taula per fer les sumes amb el dit. Al repte de les fletxes, programar primer només la dreta i l'esquerra i provar-les abans de fer amunt i avall.|Tener la recta numérica de -5 a 5 en la mesa para hacer las sumas con el dedo. En el reto de las flechas, programar primero solo la derecha y la izquierda y probarlas antes de hacer arriba y abajo."
      },
      aval: {
        ticket: ["Quina diferència hi ha entre «ves a» i «llisca»?|¿Qué diferencia hay entre «ve a» y «desliza»?",
          "Un personatge és a x: 20 i fa «canvia x en -30». On és ara?|Un personaje está en x: 20 y hace «cambia x en -30». ¿Dónde está ahora?"],
        rubric: [
          ["Ves a i llisca|Ve a y desliza", "Tria «llisca» quan vol un moviment suau i en controla els segons.|Elige «desliza» cuando quiere un movimiento suave y controla los segundos.", "Fa servir «llisca», però confon on van els segons i les coordenades.|Usa «desliza», pero confunde dónde van los segundos y las coordenadas."],
          ["Canviar x i y|Cambiar x e y", "Calcula on acabarà el personatge, també amb números negatius.|Calcula dónde terminará el personaje, también con números negativos.", "Fa servir «canvia» però s'equivoca amb els signes.|Usa «cambia» pero se equivoca con los signos."],
          ["Les fletxes|Las flechas", "Programa les quatre fletxes amb el signe bo i les prova abans de comprovar.|Programa las cuatro flechas con el signo correcto y las prueba antes de comprobar.", "Programa algunes fletxes; les altres necessiten ajuda.|Programa algunas flechas; las otras necesitan ayuda."],
        ["Calcular la posició|Calcular la posición",
          "Calcula on acabarà el personatge després de diversos «canvia x» o «canvia y», també amb negatius.|Calcula dónde terminará el personaje después de varios «cambia x» o «cambia y», también con negativos.",
          "Necessita provar-ho a l'app per saber on acabarà el personatge.|Necesita probarlo en la app para saber dónde terminará el personaje."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «El globus de paper»: amb una moneda i el full de la creu, una persona diu «canvia x en 2», «canvia y en -1»… i l'altra mou la moneda i endevina on acabarà.|En casa, con el móvil, podéis repetir la sesión y hacer «El globo de papel»: con una moneda y la hoja de la cruz, una persona dice «cambia x en 2», «cambia y en -1»… y la otra mueve la moneda y adivina dónde terminará.",
      slides: [
        { id: 's1', k: 'portada', t: 'Lliscar i canviar x i y|Deslizar y cambiar x e y', x: "Avui els personatges no salten: volen a poc a poc i els mourem amb les fletxes.|Hoy los personajes no saltan: vuelan poco a poco y los moveremos con las flechas.",
          nota: "Presenta l'objectiu: al final, cada alumne/a haurà dissenyat la seva cursa de globus.|Presenta el objetivo: al final, cada alumno/a habrá diseñado su carrera de globos." },
        { id: 's2', k: 'repas', t: 'Recordes les coordenades?|¿Recuerdas las coordenadas?', anim: 'g4grid', x: "On és el (0, 120)? I el (-150, -100)?|¿Dónde está el (0, 120)? ¿Y el (-150, -100)?",
          nota: "Dos voluntaris assenyalen els punts a la pantalla. Recorda: primer la x, després la y.|Dos voluntarios señalan los puntos en la pantalla. Recuerda: primero la x, después la y." },
        { id: 's3', k: 'anim', t: '«Ves a» salta, «llisca» vola|«Ve a» salta, «desliza» vuela', anim: 'g4goto', x: "«Llisca» fa servir segons: com més segons, més a poc a poc.|«Desliza» usa segundos: cuantos más segundos, más despacio.",
          nota: "Pregunta quin dels dos faríeu servir per a un globus i quin per a un truc de màgia.|Pregunta cuál de los dos usaríais para un globo y cuál para un truco de magia." },
        { id: 's4', k: 'media', t: 'Un camí, tram a tram|Un camino, tramo a tramo', x: "Tres trams, tres blocs «llisca».|Tres tramos, tres bloques «desliza».", media: D_ROUTE,
          nota: "Fes notar que cada bloc espera que el globus arribi abans de començar el següent.|Haz notar que cada bloque espera a que el globo llegue antes de empezar el siguiente." },
        { id: 's5', k: 'anim', t: '«Canvia x en 10»|«Cambia x en 10»', anim: 'g4chx', x: "Suma 10 a la x que ja tenia. Amb -10, resta.|Suma 10 a la x que ya tenía. Con -10, resta.",
          nota: "Dibuixa una recta a la pissarra i fes saltar un imant: 0, 10, 20, 30… i després -10.|Dibuja una recta en la pizarra y haz saltar un imán: 0, 10, 20, 30… y después -10." },
        { id: 's6', k: 'pregunta', t: "On és l'ocell?|¿Dónde está el pájaro?", x: "Un ocell és a x: 50 i fa «canvia x en -20». On és ara?|Un pájaro está en x: 50 y hace «cambia x en -20». ¿Dónde está ahora?",
          nota: "Resposta: x: 30. Fes-ho amb la recta: des del 50, dos salts de 10 cap a l'esquerra.|Respuesta: x: 30. Hazlo con la recta: desde el 50, dos saltos de 10 hacia la izquierda." },
        { id: 's7', k: 'media', t: '«Posa x» o «canvia x»?|¿«Pon x» o «cambia x»?', x: "Tots dos repeteixen el bloc 6 vegades. Per què només avança l'ocell?|Los dos repiten el bloque 6 veces. ¿Por qué solo avanza el pájaro?", media: D_SETCH,
          nota: "El globus va sempre a x = -120 (lloc fix); l'ocell suma 60 cada vegada. Dins un bucle, per avançar cal «canvia».|El globo va siempre a x = -120 (sitio fijo); el pájaro suma 60 cada vez. Dentro de un bucle, para avanzar hace falta «cambia»." },
        { id: 's8', k: 'activitat', t: 'La cursa de globus de paper|La carrera de globos de papel', timer: 12, punts: ["El globus surt de (-3, -2). La meta és a (3, 2).|El globo sale de (-3, -2). La meta está en (3, 2).", "Pilot/a: agafa una carta.|Piloto: coge una carta.", "Navegant: diu on acabarà el globus.|Navegante: dice dónde terminará el globo.", "Jutge/ssa: comprova-ho. Després, canvieu els papers.|Juez/a: lo comprueba. Después, cambiad los papeles."],
          nota: "Si una carta faria sortir el globus de la pista, aquell torn no es mou. La carta «Ves a x: 0 y: 0» el porta al centre, sigui on sigui.|Si una carta haría salir el globo de la pista, ese turno no se mueve. La carta «Ve a x: 0 y: 0» lo lleva al centro, esté donde esté." },
        { id: 's9', k: 'activitat', t: 'Pensa abans de moure|Piensa antes de mover', punts: ["Canvia x en +1: un pas a la dreta.|Cambia x en +1: un paso a la derecha.", "Canvia x en -1: un pas a l'esquerra.|Cambia x en -1: un paso a la izquierda.", "Canvia y en +1: amunt. Canvia y en -1: avall.|Cambia y en +1: arriba. Cambia y en -1: abajo."],
          nota: "Deixa-la projectada durant l'activitat. Pregunta a cada grup quina carta els ha ajudat més.|Déjala proyectada durante la actividad. Pregunta a cada grupo qué carta les ha ayudado más." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Lliscar i canviar x i y».|Abre la sesión «Deslizar y cambiar x e y».", "Fes la missió, «Descobreix» i les preguntes.|Haz la misión, «Descubre» y las preguntas.", "A «El globus de paper», toca «Ho hem fet!».|En «El globo de papel», toca «¡Lo hemos hecho!».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
          nota: "A les preguntes de càlcul, que facin la suma en veu alta o amb el dit a la recta.|En las preguntas de cálculo, que hagan la suma en voz alta o con el dedo en la recta." },
        { id: 's11', k: 'media', t: 'Les fletxes i les coordenades|Las flechas y las coordenadas', x: "Cada fletxa té el seu guió amb un «canvia».|Cada flecha tiene su guion con un «cambia».", media: D_KEYS,
          nota: "Pregunta quina fletxa porta el número negatiu a la x i quina a la y. Explica el botó «Comprova».|Pregunta qué flecha lleva el número negativo en la x y cuál en la y. Explica el botón «Comprueba»." },
        { id: 's12', k: 'repte', t: 'Reptes: pilots de globus|Retos: pilotos de globos', timer: 10, punts: ["1-2. Llisca: la bandera i el camí dels núvols|1-2. Desliza: la bandera y el camino de las nubes", "3. Les quatre fletxes|3. Las cuatro flechas", "4. El globus s'enlaira (2 blocs)|4. El globo despega (2 bloques)", "5. L'ocell que no es mou|5. El pájaro que no se mueve"],
          nota: "Al repte 4, si algú s'encalla, pregunta quantes vegades cal sumar 10 per fer 150.|En el reto 4, si alguien se atasca, pregunta cuántas veces hay que sumar 10 para hacer 150." },
        { id: 's13', k: 'activitat', t: 'Crea: la cursa de globus|Crea: la carrera de globos', timer: 5, x: "Passa per les 3 estrelles amb «llisca» i acaba a la bandera. Tu tries els segons!|Pasa por las 3 estrellas con «desliza» y termina en la bandera. ¡Tú eliges los segundos!",
          nota: "Si queda temps, compareu dues curses: quina tarda més? Sumeu els segons de cada una.|Si queda tiempo, comparad dos carreras: ¿cuál tarda más? Sumad los segundos de cada una." },
        { id: 's14', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["«Llisca» va a poc a poc fins a un punt, en els segons que diguis.|«Desliza» va poco a poco hasta un punto, en los segundos que digas.", "«Canvia x en 10» suma a la x on ja és; amb -10, va a l'esquerra.|«Cambia x en 10» suma a la x donde ya está; con -10, va a la izquierda.", "Amb les fletxes i «canvia», mous el personatge per tot l'escenari.|Con las flechas y «cambia», mueves al personaje por todo el escenario."],
          nota: "Pregunta qui ha fet servir números negatius avui i per a què.|Pregunta quién ha usado números negativos hoy y para qué." },
        { id: 's15', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Quina diferència hi ha entre «ves a» i «llisca»?|¿Qué diferencia hay entre «ve a» y «desliza»?", "Si soc a x: 20 i faig «canvia x en -30», on soc?|Si estoy en x: 20 y hago «cambia x en -30», ¿dónde estoy?"],
          nota: "Resposta de la segona: x: -10. Anota qui encara dubta amb els negatius.|Respuesta de la segunda: x: -10. Anota quién todavía duda con los negativos." }
      ],
      print: [
        { id: 'p1', t: 'Cartes de la cursa de globus|Cartas de la carrera de globos', k: 'targetes',
          intro: "Un paquet per grup de 3. Barregeu les cartes i poseu-les cap per avall. Per torns, el pilot/a n'agafa una, el navegant diu on acabarà el globus i el jutge/ssa ho comprova.|Un paquete por grupo de 3. Barajad las cartas y ponedlas boca abajo. Por turnos, el piloto coge una, el navegante dice dónde terminará el globo y el juez/a lo comprueba.",
          items: [
            { t: 'Canvia x en +1 ➡️|Cambia x en +1 ➡️', n: 5 },
            { t: 'Canvia x en +2 ⏩|Cambia x en +2 ⏩', n: 3 },
            { t: 'Canvia x en -1 ⬅️|Cambia x en -1 ⬅️', n: 3 },
            { t: 'Canvia y en +1 ⬆️|Cambia y en +1 ⬆️', n: 5 },
            { t: 'Canvia y en +2 ⏫|Cambia y en +2 ⏫', n: 3 },
            { t: 'Canvia y en -1 ⬇️|Cambia y en -1 ⬇️', n: 3 },
            { t: 'Ves a x: 0 y: 0 🎯|Ve a x: 0 y: 0 🎯', n: 2 }
          ] },
        { id: 'p2', t: 'La pista de la cursa|La pista de la carrera', k: 'graella', w: 8, h: 6,
          intro: "Repasseu els eixos (la x de -4 a 4 i la y de -3 a 3). Marqueu la sortida a (-3, -2) i la meta a (3, 2). El globus es mou per les creus de les ratlles. Apunteu a sota cada posició on passa.|Repasad los ejes (la x de -4 a 4 y la y de -3 a 3). Marcad la salida en (-3, -2) y la meta en (3, 2). El globo se mueve por los cruces de las rayas. Apuntad debajo cada posición por donde pasa.",
          legend: [['🎈', 'Sortida (-3, -2)|Salida (-3, -2)'], ['🚩', 'Meta (3, 2)|Meta (3, 2)'], ['➡', 'x: cap a la dreta, positiva|x: hacia la derecha, positiva'], ['⬆', 'y: cap amunt, positiva|y: hacia arriba, positiva']],
          items: [{ q: 'Posicions del nostre globus: (-3, -2) → (___, ___) → (___, ___) → (___, ___) → …|Posiciones de nuestro globo: (-3, -2) → (___, ___) → (___, ___) → (___, ___) → …', big: true },
            { q: 'Quina carta ens ha ajudat més a arribar a la meta? Per què?|¿Qué carta nos ha ayudado más a llegar a la meta? ¿Por qué?' }] }
      ]
    },
    /* ---------- Sessió 3 · Rebotar a les vores ---------- */
    'g4-3': {
    intro: "A la festa de la platja, a més de saber on és cada personatge, cal saber cap on mira. L'alumnat repassa la direcció en graus (90 dreta, 0 amunt, -90 esquerra, 180 avall), fa rebotar una pilota a les vores amb «si toques la vora, rebota» dins un «per sempre» i descobreix que una direcció entremig (com 45) la fa anar en diagonal. També aprèn «apunta cap a», que fa mirar un personatge cap a un altre: dins un bucle, el cranc persegueix el peix vagi on vagi. La classe comença amb la brúixola humana i el billar de paper i acaba amb la festa de la platja programada.|En la fiesta de la playa, además de saber dónde está cada personaje, hay que saber hacia dónde mira. El alumnado repasa la dirección en grados (90 derecha, 0 arriba, -90 izquierda, 180 abajo), hace rebotar una pelota en los bordes con «si tocas el borde, rebota» dentro de un «por siempre» y descubre que una dirección intermedia (como 45) la hace ir en diagonal. También aprende «apunta hacia», que hace mirar a un personaje hacia otro: dentro de un bucle, el cangrejo persigue al pez vaya donde vaya. La clase empieza con la brújula humana y el billar de papel y termina con la fiesta de la playa programada.",
    claus: [
      "La direcció diu cap on mira el personatge; «mou-te» sempre avança cap allà.|La dirección dice hacia dónde mira el personaje; «muévete» siempre avanza hacia allí.",
      "«Si toques la vora, rebota» va dins el «per sempre», després de «mou-te», perquè es comprovi a cada pas.|«Si tocas el borde, rebota» va dentro del «por siempre», después de «muévete», para que se compruebe en cada paso.",
      "Una direcció entre 0 i 90 (com 45) fa anar el personatge en diagonal i rebotar per totes les vores.|Una dirección entre 0 y 90 (como 45) hace ir al personaje en diagonal y rebotar por todos los bordes.",
      "«Apunta cap a» gira el personatge cap a un altre; dins un bucle amb «mou-te», el persegueix.|«Apunta hacia» gira al personaje hacia otro; dentro de un bucle con «muévete», lo persigue."
    ],
    prev: [
      "Direccions i «apunta en direcció» (unitat 1, sessió 2, i unitat 3, sessió 2).|Direcciones y «apunta en dirección» (unidad 1, sesión 2, y unidad 3, sesión 2).",
      "El bucle «per sempre» i «rebota» (unitat 2, sessió 2).|El bucle «por siempre» y «rebota» (unidad 2, sesión 2).",
      "Coordenades x i y (sessions 1 i 2).|Coordenadas x e y (sesiones 1 y 2)."
    ],
    faq: [
      ["Per què 0 és amunt i no a la dreta?|¿Por qué 0 es arriba y no a la derecha?",
        "És com una brúixola: el 0 és el nord, a dalt. Girant cap a la dreta es compta 90, 180…|Es como una brújula: el 0 es el norte, arriba. Girando hacia la derecha se cuenta 90, 180…"],
      ["Quina direcció faig servir per anar en diagonal?|¿Qué dirección uso para ir en diagonal?",
        "Una entre 0 i 90, com 45 (amunt a la dreta). També funcionen 135, -45 o -135 per a les altres diagonals.|Una entre 0 y 90, como 45 (arriba a la derecha). También funcionan 135, -45 o -135 para las otras diagonales."],
      ["Per què la pilota no gira el dibuix quan rebota?|¿Por qué la pelota no gira el dibujo cuando rebota?",
        "Alguns objectes no giren el dibuix, però la direcció sí que canvia: ho veus perquè canvia de camí.|Algunos objetos no giran el dibujo, pero la dirección sí cambia: lo ves porque cambia de camino."],
      ["El cranc no atrapa mai el peix. Què passa?|El cangrejo no atrapa nunca al pez. ¿Qué pasa?",
        "Mira que «apunta cap al peix» sigui dins el «per sempre» i que el cranc vagi una mica més de pressa que el peix.|Mira que «apunta hacia el pez» esté dentro del «por siempre» y que el cangrejo vaya un poco más deprisa que el pez."],
      ["Per què el repte del cranc té tres proves?|¿Por qué el reto del cangrejo tiene tres pruebas?",
        "Perquè el peix comença en llocs diferents: així es comprova que el cranc el persegueix de veritat i no va a un punt fix.|Porque el pez empieza en sitios diferentes: así se comprueba que el cangrejo lo persigue de verdad y no va a un punto fijo."],
      ["Si toca una cantonada, cap on rebota?|Si toca una esquina, ¿hacia dónde rebota?",
        "Rebota de les dues vores alhora i torna enrere per la mateixa diagonal.|Rebota de los dos bordes a la vez y vuelve atrás por la misma diagonal."]
    ],
    tec: [
      ["La pilota es queda enganxada a la vora.|La pelota se queda pegada al borde.",
        "Comproveu que el «rebota» és dins el bucle i que el «mou-te» no és massa gran (6 a 8 va bé).|Comprobad que el «rebota» está dentro del bucle y que el «muévete» no es demasiado grande (6 a 8 va bien)."],
      ["El repte del cranc tarda molt a acabar.|El reto del cangrejo tarda mucho en acabar.",
        "Són tres proves seguides: deixeu-les acabar totes. Si el cranc és lent, que li posi «mou-te 4».|Son tres pruebas seguidas: dejad que terminen todas. Si el cangrejo es lento, que le ponga «muévete 4»."],
      ["No es troba «apunta cap a» a la paleta.|No se encuentra «apunta hacia» en la paleta.",
        "És un bloc de moviment (blau). Un cop posat, toqueu el nom per triar a qui apunta.|Es un bloque de movimiento (azul). Una vez puesto, tocad el nombre para elegir hacia quién apunta."],
      ["Els fulls de les direccions no coincideixen amb la pissarra.|Las hojas de las direcciones no coinciden con la pizarra.",
        "Poseu sempre el 0 a la paret de la pissarra, el 90 a la dreta, el 180 al fons i el -90 a l'esquerra.|Poned siempre el 0 en la pared de la pizarra, el 90 a la derecha, el 180 al fondo y el -90 a la izquierda."],
      ["El billar de paper queda desordenat.|El billar de papel queda desordenado.",
        "Que facin servir el regle i marquin cada rebot amb un punt abans de continuar la línia.|Que usen la regla y marquen cada rebote con un punto antes de continuar la línea."]
    ],
    seg: [
      "A la brúixola humana i a la pausa activa, es camina a poc a poc i s'atura abans de la paret: no es rebota de veritat!|En la brújula humana y en la pausa activa, se camina despacio y se para antes de la pared: ¡no se rebota de verdad!",
      "Compte amb els regles al billar de paper: s'utilitzen a la taula, no per assenyalar companys.|Cuidado con las reglas en el billar de papel: se usan en la mesa, no para señalar a compañeros."
    ],
    extra: [
      "Fer que la pilota canviï de mida o digui «Boing!» quan toca la vora (amb un «digues» dins el bucle).|Hacer que la pelota cambie de tamaño o diga «¡Boing!» cuando toca el borde (con un «di» dentro del bucle).",
      "Fer dos crancs que persegueixen el peix a velocitats diferents i veure qui l'atrapa primer.|Hacer dos cangrejos que persiguen al pez a velocidades diferentes y ver quién lo atrapa primero.",
      "Dibuixar al billar de paper el camí d'una pilota en direcció 30 i comparar-lo amb el de 45.|Dibujar en el billar de papel el camino de una pelota en dirección 30 y compararlo con el de 45."
    ],
    trans: [
      "Matemàtiques: angles (graus), diagonals i simetria del rebot (com un mirall).|Matemáticas: ángulos (grados), diagonales y simetría del rebote (como un espejo).",
      "Educació física: el rebot d'una pilota contra la paret i l'orientació amb el cos.|Educación física: el rebote de una pelota contra la pared y la orientación con el cuerpo.",
      "Sessió següent: el projecte del laberint, amb les fletxes, les coordenades i una regla de paret.|Sesión siguiente: el proyecto del laberinto, con las flechas, las coordenadas y una regla de pared."
    ],
      obj: [
        "L'alumne/a interpreta la direcció en graus (0 amunt, 90 dreta, 180 avall, -90 esquerra) i la tria amb «apunta en direcció».|El alumno/a interpreta la dirección en grados (0 arriba, 90 derecha, 180 abajo, -90 izquierda) y la elige con «apunta en dirección».",
        "L'alumne/a fa rebotar un personatge posant «si toques la vora, rebota» dins un «per sempre», després de moure's.|El alumno/a hace rebotar a un personaje poniendo «si tocas el borde, rebota» dentro de un «por siempre», después de moverse.",
        "L'alumne/a fa que un personatge en persegueixi un altre amb «apunta cap a».|El alumno/a hace que un personaje persiga a otro con «apunta hacia».",
        "L'alumne/a combina moviment, rebot i canvi de vestit en una escena animada.|El alumno/a combina movimiento, rebote y cambio de disfraz en una escena animada."
      ],
      comp: [
        "Competència digital (CD5): crear animacions amb blocs i depurar-les|Competencia digital (CD5): crear animaciones con bloques y depurarlas",
        "Matemàtiques (mesura i geometria): angles, girs i direccions en graus|Matemáticas (medida y geometría): ángulos, giros y direcciones en grados",
        "Pensament computacional: bucles infinits i on va cada bloc dins un bucle|Pensamiento computacional: bucles infinitos y dónde va cada bloque dentro de un bucle",
        "Educació física i expressió corporal: orientació a l'espai|Educación física y expresión corporal: orientación en el espacio"
      ],
      vocab: [
        ["Direcció|Dirección", "Cap on mira un personatge, en graus: 0 amunt, 90 dreta, 180 avall, -90 esquerra.|Hacia dónde mira un personaje, en grados: 0 arriba, 90 derecha, 180 abajo, -90 izquierda."],
        ["Grau|Grado", "La unitat per mesurar girs: una volta sencera són 360 graus.|La unidad para medir giros: una vuelta entera son 360 grados."],
        ["Vora|Borde", "El límit de l'escenari: dalt, baix, a la dreta i a l'esquerra.|El límite del escenario: arriba, abajo, a la derecha y a la izquierda."],
        ["Rebotar|Rebotar", "Canviar de direcció en tocar una vora per continuar dins l'escenari.|Cambiar de dirección al tocar un borde para seguir dentro del escenario."],
        ["Perseguir|Perseguir", "Apuntar cap a un altre personatge i avançar, una vegada i una altra.|Apuntar hacia otro personaje y avanzar, una y otra vez."]
      ],
      mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Rebotar a les vores»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Rebotar en los bordes»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "4 fulls DIN A4 amb 0, 90, 180 i -90 per enganxar a les parets i un espai lliure per a la brúixola humana|4 hojas DIN A4 con 0, 90, 180 y -90 para pegar en las paredes y un espacio libre para la brújula humana",
        "Per alumne/a: 1 «El billar de paper» (imprimible 2), 1 regle i 1 llapis de color|Por alumno/a: 1 «El billar de papel» (imprimible 2), 1 regla y 1 lápiz de color"
      ],
      imprimir: [
        "1 paquet de cartes de direcció per al docent (imprimible 1)|1 paquete de cartas de dirección para el docente (imprimible 1)",
        "1 «El billar de paper» per alumne/a (imprimible 2)|1 «El billar de papel» por alumno/a (imprimible 2)"
      ],
      prep: [
        "El dia abans (10 min): imprimir el paquet de cartes de direcció i un «El billar de paper» per alumne/a.|El día antes (10 min): imprimir el paquete de cartas de dirección y un «El billar de papel» por alumno/a.",
        "Abans de la classe (5 min): enganxar els fulls de 0, 90, 180 i -90 a les quatre parets (el 0 a la paret de la pissarra).|Antes de la clase (5 min): pegar las hojas de 0, 90, 180 y -90 en las cuatro paredes (el 0 en la pared de la pizarra).",
        "Mirar abans les demostracions de les diapositives 4, 5 i 7.|Mirar antes las demostraciones de las diapositivas 4, 5 y 7.",
        "Deixar els ordinadors engegats amb Numi Tech obert i el perfil de cada alumne/a iniciat.|Dejar los ordenadores encendidos con Numi Tech abierto y el perfil de cada alumno/a iniciado."
      ]
    },
      plan: [
        { min: 5, t: "Benvinguda: festa a la platja|Bienvenida: fiesta en la playa", fase: 'inici',
          fa: "Fes la pregunta de repàs sobre «canvia x». Presenta la festa de la platja: una pilota que rebota, un peix que neda i un cranc que el persegueix. Pregunta què necessitem saber d'un personatge, a més d'on és, per fer-lo moure.|Haz la pregunta de repaso sobre «cambia x». Presenta la fiesta de la playa: una pelota que rebota, un pez que nada y un cangrejo que lo persigue. Pregunta qué necesitamos saber de un personaje, además de dónde está, para hacerlo mover.",
          diu: ["Quin bloc mou 10 cap a la dreta, sigui on sigui el personatge?|¿Qué bloque mueve 10 hacia la derecha, esté donde esté el personaje?",
            "Sabem on és en Numi. Però cap on mira?|Sabemos dónde está Numi. Pero ¿hacia dónde mira?", "Una pilota contra la paret: cap on surt després de tocar-la?|Una pelota contra la pared: ¿hacia dónde sale después de tocarla?"],
          slides: ['s1', 's2'], app: "Encara no: pantalles apagades o abaixades.|Todavía no: pantallas apagadas o bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "La direcció i el rebot|La dirección y el rebote", fase: 'teoria',
          fa: "Explica la direcció en graus amb l'animació de la brúixola i la fletxa que dibuixa un rectangle. Mostra la pilota que rebota i, amb el «compte!», on va el bloc del rebot. Acaba amb el cranc que persegueix el peix: pregunta per què ha de tornar a apuntar a cada pas.|Explica la dirección en grados con la animación de la brújula y la flecha que dibuja un rectángulo. Muestra la pelota que rebota y, con el «¡cuidado!», dónde va el bloque del rebote. Termina con el cangrejo que persigue al pez: pregunta por qué tiene que volver a apuntar en cada paso.",
          diu: ["Si mires la pissarra, mires al 0. On és el 90? I el 180?|Si miras la pizarra, miras al 0. ¿Dónde está el 90? ¿Y el 180?",
            "La pilota ha de mirar la vora a cada pas. On ha d'anar el bloc, doncs?|La pelota tiene que mirar el borde en cada paso. ¿Dónde tiene que ir el bloque, entonces?",
            "El peix es mou. Si el cranc només l'apunta una vegada, què passarà?|El pez se mueve. Si el cangrejo solo lo apunta una vez, ¿qué pasará?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "La brúixola humana i el billar de paper|La brújula humana y el billar de papel", fase: 'desconnectat',
          fa: "Primera part (5 min): tothom dret al seu lloc. Treu cartes de direcció i digues «apunta en direcció…»: tothom gira cap al full de la paret que toca. Afegeix «mou-te 2 passos» i «rebota!» (mitja volta). Segona part (7 min): cada alumne/a, amb el regle, dibuixa a «El billar de paper» el camí de la pilota que surt en diagonal i rebota a les vores, i compara el dibuix amb el company/a.|Primera parte (5 min): todos de pie en su sitio. Saca cartas de dirección y di «apunta en dirección…»: todos giran hacia la hoja de la pared que toca. Añade «muévete 2 pasos» y «¡rebota!» (media vuelta). Segunda parte (7 min): cada alumno/a, con la regla, dibuja en «El billar de papel» el camino de la pelota que sale en diagonal y rebota en los bordes, y compara el dibujo con el compañero/a.",
          diu: ["Apunta en direcció 90! I ara -90! I ara 180!|¡Apunta en dirección 90! ¡Y ahora -90! ¡Y ahora 180!",
            "En diagonal, la pilota avança un quadret a la dreta i un amunt cada vegada.|En diagonal, la pelota avanza un cuadrito a la derecha y uno arriba cada vez.",
            "Quan toca una vora, rebota com un mirall: si pujava, ara baixa.|Cuando toca un borde, rebota como un espejo: si subía, ahora baja."],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. A la pregunta de la pilota que mira a la dreta, demana que la facin amb el dit a l'aire abans de triar. A «La brúixola humana» (activitat de casa), que toquin «Ho hem fet!».|Cada alumno/a avanza a su ritmo hasta la pausa activa. En la pregunta de la pelota que mira a la derecha, pide que la hagan con el dedo en el aire antes de elegir. En «La brújula humana» (actividad de casa), que toquen «¡Lo hemos hecho!».",
          diu: ["Fes amb el dit el camí de la pilota: on toca la vora?|Haz con el dedo el camino de la pelota: ¿dónde toca el borde?",
            "Al programa del cranc, quin bloc el fa girar cap al peix?|En el programa del cangrejo, ¿qué bloque lo hace girar hacia el pez?", "Si la pilota va en direcció 45, cap on va? (Amunt a la dreta, en diagonal.)|Si la pelota va en dirección 45, ¿hacia dónde va? (Arriba a la derecha, en diagonal.)"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa»: la pregunta de «canvia x», la història, les targetes de «Descobreix», la direcció 180, «La brúixola humana» (ja fet), la pilota que mira a la dreta i el bloc que fa mirar el cranc cap al peix.|De «Recuerda» hasta la «Pausa activa»: la pregunta de «cambia x», la historia, las tarjetas de «Descubre», la dirección 180, «La brújula humana» (ya hecho), la pelota que mira a la derecha y el bloque que hace mirar al cangrejo hacia el pez.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: pilotes, peixos i crancs|Retos: pelotas, peces y cangrejos", fase: 'ordinador',
          fa: "Fes la pausa activa tots junts. Després fes que la classe predigui què farà la pilota de la diapositiva i deixa'ls fer els cinc reptes. Al del cranc, explica que hi ha tres proves amb el peix en llocs diferents: per això no serveix anar a un punt fix.|Haced la pausa activa todos juntos. Después haz que la clase prediga qué hará la pelota de la diapositiva y deja que hagan los cinco retos. En el del cangrejo, explica que hay tres pruebas con el pez en sitios diferentes: por eso no sirve ir a un punto fijo.",
          diu: ["La pilota s'escapa: el bloc del rebot és dins o fora del bucle?|La pelota se escapa: ¿el bloque del rebote está dentro o fuera del bucle?",
            "Quina direcció hi ha entre 0 i 90? Proveu-ne una!|¿Qué dirección hay entre 0 y 90? ¡Probad una!",
            "Per què el cranc ha de tornar a apuntar el peix a cada pas?|¿Por qué el cangrejo tiene que volver a apuntar al pez en cada paso?"],
          slides: ['s11', 's12'], app: "«Pausa activa» i els cinc reptes: la pilota que va i torna, la pilota que s'escapa, la diagonal, el cranc que persegueix el peix i el peix que mou la cua.|«Pausa activa» y los cinco retos: la pelota que va y vuelve, la pelota que se escapa, la diagonal, el cangrejo que persigue al pez y el pez que mueve la cola.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: la festa de la platja|Crea: la fiesta de la playa", fase: 'crea',
          fa: "Cada alumne/a programa dos personatges: la pilota que rebota en diagonal i el cranc que la persegueix. Recorda que es tria el personatge a dalt de l'editor. Qui acabi, que hi afegeixi el seu toc i l'ensenyi al company/a.|Cada alumno/a programa dos personajes: la pelota que rebota en diagonal y el cangrejo que la persigue. Recuerda que se elige el personaje arriba del editor. Quien termine, que añada su toque y lo enseñe al compañero/a.",
          diu: ["Tens dos personatges per programar: mira la pestanya de cadascun.|Tienes dos personajes para programar: mira la pestaña de cada uno.",
            "Què passa si el cranc és més ràpid que la pilota? I si és més lent?|¿Qué pasa si el cangrejo es más rápido que la pelota? ¿Y si es más lento?", "El teu toc: què pot dir el cranc quan atrapa la pilota?|Tu toque: ¿qué puede decir el cangrejo cuando atrapa la pelota?"],
          slides: ['s13'], app: "Pas «Crea»: La festa de la platja.|Paso «Crea»: La fiesta de la playa.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres idees amb el resum (direcció, rebot i perseguir) i fes una última ronda de brúixola amb tota la classe. Deixa que responguin les preguntes finals de l'app i com s'han sentit. A la porta, fes a cada alumne/a una pregunta del tiquet i anuncia el projecte del laberint.|Repasa las tres ideas con el resumen (dirección, rebote y perseguir) y haz una última ronda de brújula con toda la clase. Deja que respondan las preguntas finales de la app y cómo se han sentido. En la puerta, haz a cada alumno/a una pregunta del ticket y anuncia el proyecto del laberinto.",
          diu: ["Quina direcció és avall?|¿Qué dirección es abajo?",
            "On va el bloc del rebot perquè funcioni sempre?|¿Dónde va el bloque del rebote para que funcione siempre?", "Quin bloc fa que el cranc miri cap al peix? («Apunta cap a».)|¿Qué bloque hace que el cangrejo mire hacia el pez? («Apunta hacia».)", "La setmana vinent: el nostre primer videojoc, un laberint!|La semana que viene: ¡nuestro primer videojuego, un laberinto!"],
          slides: ['s14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Posa «si toques la vora, rebota» abans del «per sempre» i la pilota s'escapa.|Pone «si tocas el borde, rebota» antes del «por siempre» y la pelota se escapa.",
          "Pregunta: quantes vegades mira la pilota si toca la vora? Que segueixi el programa amb el dit i vegi que aquell bloc només es fa una vegada.|Pregunta: ¿cuántas veces mira la pelota si toca el borde? Que siga el programa con el dedo y vea que ese bloque solo se hace una vez."],
        ["Confon 0 amb «dreta» perquè pensa que és el punt de partida.|Confunde 0 con «derecha» porque piensa que es el punto de partida.",
          "Que es posi dret mirant la pissarra (el 0) i giri cap al 90. Després, que ho comprovi amb «apunta en direcció 0» a l'app.|Que se ponga de pie mirando la pizarra (el 0) y gire hacia el 90. Después, que lo compruebe con «apunta en dirección 0» en la app."],
        ["Al cranc, posa «apunta cap al peix» fora del bucle i el cranc va recte i no l'atrapa.|En el cangrejo, pone «apunta hacia el pez» fuera del bucle y el cangrejo va recto y no lo atrapa.",
          "Que miri on va el peix mentre el cranc avança. Pregunta: el cranc sap que el peix s'ha mogut? Què ha de fer a cada pas?|Que mire adónde va el pez mientras el cangrejo avanza. Pregunta: ¿el cangrejo sabe que el pez se ha movido? ¿Qué tiene que hacer en cada paso?"],
        ["Per fer la diagonal, prova direccions molt grans (300, 1000).|Para hacer la diagonal, prueba direcciones muy grandes (300, 1000).",
          "Recorda la brúixola: entre amunt (0) i la dreta (90) hi ha la diagonal. Quin número hi ha entre 0 i 90?|Recuerda la brújula: entre arriba (0) y la derecha (90) está la diagonal. ¿Qué número hay entre 0 y 90?"],
        ["Al projecte programa només un personatge i no troba on es programa l'altre.|En el proyecto programa solo un personaje y no encuentra dónde se programa el otro.",
          "Ensenya-li les pestanyes de dalt de l'editor: cada personatge té els seus guions.|Enséñale las pestañas de arriba del editor: cada personaje tiene sus guiones."],
      ["Al peix que mou la cua, posa l'espera dins el bucle i el peix va massa lent per arribar a les vores.|En el pez que mueve la cola, pone la espera dentro del bucle y el pez va demasiado lento para llegar a los bordes.",
        "Pregunta: el repte demana esperar? Que provi sense espera, o amb una de molt curta, i miri quant avança.|Pregunta: ¿el reto pide esperar? Que pruebe sin espera, o con una muy corta, y mire cuánto avanza."]
      ],
      diff: {
        mes: "Afegir a la festa un tercer moviment: un ocell que rebota amunt i avall canviant de vestit. Al billar de paper, provar una direcció diferent (per exemple, sortir de dalt a l'esquerra) i predir en quina cantonada acabarà.|Añadir a la fiesta un tercer movimiento: un pájaro que rebota arriba y abajo cambiando de disfraz. En el billar de papel, probar una dirección diferente (por ejemplo, salir de arriba a la izquierda) y predecir en qué esquina terminará.",
        menys: "Tenir a la taula una carta amb la brúixola (0, 90, 180, -90) i començar pel repte de la pilota que va i torna. Al billar de paper, dibuixar només els dos primers rebots amb l'ajuda del regle.|Tener en la mesa una carta con la brújula (0, 90, 180, -90) y empezar por el reto de la pelota que va y vuelve. En el billar de papel, dibujar solo los dos primeros rebotes con la ayuda de la regla."
      },
      aval: {
        ticket: ["Quina direcció fa mirar un personatge avall? I a l'esquerra?|¿Qué dirección hace mirar a un personaje abajo? ¿Y a la izquierda?",
          "On ha d'anar «si toques la vora, rebota» perquè la pilota reboti sempre?|¿Dónde tiene que ir «si tocas el borde, rebota» para que la pelota rebote siempre?"],
        rubric: [
          ["La direcció|La dirección", "Fa servir 0, 90, 180 i -90 sense dubtar i tria una diagonal entre dues direccions.|Usa 0, 90, 180 y -90 sin dudar y elige una diagonal entre dos direcciones.", "Sap 90 i -90, però dubta amb 0 i 180.|Sabe 90 y -90, pero duda con 0 y 180."],
          ["El rebot|El rebote", "Col·loca el rebot dins el bucle, després de moure's, i explica per què.|Coloca el rebote dentro del bucle, después de moverse, y explica por qué.", "Fa rebotar la pilota després de diverses proves, sense saber explicar-ho.|Hace rebotar la pelota después de varias pruebas, sin saber explicarlo."],
          ["Perseguir|Perseguir", "Programa una persecució que funciona en totes les proves.|Programa una persecución que funciona en todas las pruebas.", "La persecució funciona en una prova, però no en totes.|La persecución funciona en una prueba, pero no en todas."],
        ["Diagonal|Diagonal",
          "Tria una direcció entre 0 i 90 perquè la pilota toqui les quatre vores i explica per què.|Elige una dirección entre 0 y 90 para que la pelota toque los cuatro bordes y explica por qué.",
          "Troba la diagonal provant números a l'atzar, sense saber explicar-ho.|Encuentra la diagonal probando números al azar, sin saber explicarlo."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «La brúixola humana»: decidiu quina paret és el 0 i doneu-vos ordres de direcció i de passos per torns.|En casa, con el móvil, podéis repetir la sesión y hacer «La brújula humana»: decidid qué pared es el 0 y daos órdenes de dirección y de pasos por turnos.",
      slides: [
        { id: 's1', k: 'portada', t: 'Rebotar a les vores|Rebotar en los bordes', x: "Avui farem rebotar pilotes, nedar peixos i perseguir crancs.|Hoy haremos rebotar pelotas, nadar peces y perseguir cangrejos.",
          nota: "Presenta l'objectiu: al final, cada alumne/a haurà programat una escena amb dos personatges que es mouen sols.|Presenta el objetivo: al final, cada alumno/a habrá programado una escena con dos personajes que se mueven solos." },
        { id: 's2', k: 'pregunta', t: 'Cap on mira?|¿Hacia dónde mira?', x: "Sabem on és en Numi gràcies a la x i la y. Però com sabem cap on mira?|Sabemos dónde está Numi gracias a la x y la y. Pero ¿cómo sabemos hacia dónde mira?",
          nota: "Recull idees («amb fletxes», «amb punts cardinals»…). Explica que farem servir números: els graus.|Recoge ideas («con flechas», «con puntos cardinales»…). Explica que usaremos números: los grados." },
        { id: 's3', k: 'anim', t: 'La direcció en graus|La dirección en grados', anim: 'g4dir', x: "0 amunt, 90 dreta, 180 avall, -90 esquerra.|0 arriba, 90 derecha, 180 abajo, -90 izquierda.",
          nota: "Assenyala els fulls de les parets: la pissarra és el 0. Tothom assenyala el 90, després el 180 i el -90.|Señala las hojas de las paredes: la pizarra es el 0. Todos señalan el 90, después el 180 y el -90." },
        { id: 's4', k: 'media', t: '«Apunta en direcció»|«Apunta en dirección»', x: "La fletxa apunta, avança, torna a apuntar… i dibuixa un rectangle.|La flecha apunta, avanza, vuelve a apuntar… y dibuja un rectángulo.", media: D_ARROW,
          nota: "Abans de cada gir, pregunta quin número de direcció vindrà ara.|Antes de cada giro, pregunta qué número de dirección vendrá ahora." },
        { id: 's5', k: 'media', t: 'Si toques la vora, rebota|Si tocas el borde, rebota', x: "La pilota surt en direcció 45 i rebota per sempre.|La pelota sale en dirección 45 y rebota por siempre.", media: D_BALL,
          nota: "Fes notar que, en tocar la vora, la pilota canvia la direcció com un mirall: si pujava, ara baixa.|Haz notar que, al tocar el borde, la pelota cambia la dirección como un espejo: si subía, ahora baja." },
        { id: 's6', k: 'anim', t: 'Compte! El rebot, dins el bucle|¡Cuidado! El rebote, dentro del bucle', anim: 'g4bounce', x: "Per sempre: mou-te, si toques la vora, rebota.|Por siempre: muévete, si tocas el borde, rebota.",
          nota: "Escriu a la pissarra les dues versions (rebot fora i dins del bucle) i pregunta quina funciona i per què.|Escribe en la pizarra las dos versiones (rebote fuera y dentro del bucle) y pregunta cuál funciona y por qué." },
        { id: 's7', k: 'media', t: 'El cranc persegueix el peix|El cangrejo persigue al pez', x: "Per sempre: apunta cap al peix, mou-te 3 passos.|Por siempre: apunta hacia el pez, muévete 3 pasos.", media: D_CHASE,
          nota: "Pregunta què passaria si el cranc apuntés el peix només una vegada, al principi.|Pregunta qué pasaría si el cangrejo apuntara al pez solo una vez, al principio." },
        { id: 's8', k: 'activitat', t: 'La brúixola humana|La brújula humana', timer: 5, punts: ["Tothom dret al seu lloc.|Todos de pie en su sitio.", "«Apunta en direcció…»: gira cap al full de la paret.|«Apunta en dirección…»: gira hacia la hoja de la pared.", "«Mou-te 2 passos» i «Rebota!»: mitja volta.|«Muévete 2 pasos» y «¡Rebota!»: media vuelta."],
          nota: "Treu les cartes de direcció a l'atzar. Comença lent i accelera. Fes alguna diagonal (45) per preparar el billar.|Saca las cartas de dirección al azar. Empieza despacio y acelera. Haz alguna diagonal (45) para preparar el billar." },
        { id: 's9', k: 'activitat', t: 'El billar de paper|El billar de papel', timer: 7, punts: ["La pilota surt de baix a l'esquerra en diagonal.|La pelota sale de abajo a la izquierda en diagonal.", "Cada pas: un quadret a la dreta i un amunt.|Cada paso: un cuadrito a la derecha y uno arriba.", "En tocar una vora, rebota com un mirall.|Al tocar un borde, rebota como un espejo.", "On acaba? Compareu-ho amb el company/a.|¿Dónde termina? Comparadlo con el compañero/a."],
          nota: "Fes el primer rebot a la pissarra amb tothom. Si tots dos dibuixos no coincideixen, que busquin on comença la diferència.|Haz el primer rebote en la pizarra con todos. Si los dos dibujos no coinciden, que busquen dónde empieza la diferencia." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Rebotar a les vores».|Abre la sesión «Rebotar en los bordes».", "Fes la missió, «Descobreix» i les preguntes.|Haz la misión, «Descubre» y las preguntas.", "A «La brúixola humana», toca «Ho hem fet!».|En «La brújula humana», toca «¡Lo hemos hecho!».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
          nota: "A la pregunta de la pilota, que facin el camí amb el dit abans de triar.|En la pregunta de la pelota, que hagan el camino con el dedo antes de elegir." },
        { id: 's11', k: 'pregunta', t: 'Què farà la pilota?|¿Qué hará la pelota?', x: "La pilota mira a la dreta (90) i fa: per sempre, mou-te 5 passos, si toques la vora, rebota.|La pelota mira a la derecha (90) y hace: por siempre, muévete 5 pasos, si tocas el borde, rebota.",
          nota: "Resposta: va i torna de dreta a esquerra. Pregunta què hauríem de canviar perquè anés amunt i avall (apuntar a 0).|Respuesta: va y vuelve de derecha a izquierda. Pregunta qué tendríamos que cambiar para que fuera arriba y abajo (apuntar a 0)." },
        { id: 's12', k: 'repte', t: 'Reptes de la platja|Retos de la playa', timer: 10, punts: ["1-2. La pilota que va i torna i la que s'escapa|1-2. La pelota que va y vuelve y la que se escapa", "3. Les quatre vores (diagonal)|3. Los cuatro bordes (diagonal)", "4. El cranc i el peix (3 proves)|4. El cangrejo y el pez (3 pruebas)", "5. El peix que mou la cua|5. El pez que mueve la cola"],
          nota: "Al repte 4, recorda que es comprova tres vegades amb el peix en llocs diferents.|En el reto 4, recuerda que se comprueba tres veces con el pez en sitios diferentes." },
        { id: 's13', k: 'activitat', t: 'Crea: la festa de la platja|Crea: la fiesta de la playa', timer: 5, x: "La pilota rebota en diagonal i el cranc la persegueix. Després, hi afegeixes el teu toc.|La pelota rebota en diagonal y el cangrejo la persigue. Después, añades tu toque.",
          nota: "Recorda les pestanyes dels personatges a dalt de l'editor.|Recuerda las pestañas de los personajes arriba del editor." },
        { id: 's14', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["La direcció diu cap on mira: 0, 90, 180 i -90.|La dirección dice hacia dónde mira: 0, 90, 180 y -90.", "El rebot va dins el «per sempre», després de moure's.|El rebote va dentro del «por siempre», después de moverse.", "«Apunta cap a» dins un bucle fa perseguir un personatge.|«Apunta hacia» dentro de un bucle hace perseguir a un personaje."],
          nota: "Pregunta qui ha aconseguit la diagonal i quin número ha fet servir: hi ha moltes respostes bones.|Pregunta quién ha conseguido la diagonal y qué número ha usado: hay muchas respuestas buenas." },
        { id: 's15', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Quina direcció és avall? I a l'esquerra?|¿Qué dirección es abajo? ¿Y a la izquierda?", "On va el bloc del rebot?|¿Dónde va el bloque del rebote?"],
          nota: "La setmana vinent, al laberint, tornarem a fer servir els bucles per vigilar les parets.|La semana que viene, en el laberinto, volveremos a usar los bucles para vigilar las paredes." }
      ],
      print: [
        { id: 'p1', t: 'Cartes de direcció|Cartas de dirección', k: 'targetes',
          intro: "Per al professor/a (o per a cada grup a casa): barregeu-les i traieu-ne una cada vegada per a la brúixola humana.|Para el profesor/a (o para cada grupo en casa): barajadlas y sacad una cada vez para la brújula humana.",
          items: [
            { t: 'Apunta en direcció 0 ⬆️|Apunta en dirección 0 ⬆️', n: 2 },
            { t: 'Apunta en direcció 90 ➡️|Apunta en dirección 90 ➡️', n: 2 },
            { t: 'Apunta en direcció 180 ⬇️|Apunta en dirección 180 ⬇️', n: 2 },
            { t: 'Apunta en direcció -90 ⬅️|Apunta en dirección -90 ⬅️', n: 2 },
            { t: 'Apunta en direcció 45 ↗️|Apunta en dirección 45 ↗️', n: 1 },
            { t: 'Mou-te 2 passos 👣|Muévete 2 pasos 👣', n: 2 },
            { t: 'Si toques la vora, rebota 🔄|Si tocas el borde, rebota 🔄', n: 1 }
          ] },
        { id: 'p2', t: 'El billar de paper|El billar de papel', k: 'graella', w: 8, h: 6,
          intro: "La graella és l'escenari i les vores són les parets del billar. La pilota surt de la cantonada de baix a l'esquerra en direcció 45: a cada pas avança un quadret a la dreta i un amunt. Dibuixa el seu camí amb el regle. Quan toqui una vora, rebota com un mirall i continua.|La cuadrícula es el escenario y los bordes son las paredes del billar. La pelota sale de la esquina de abajo a la izquierda en dirección 45: en cada paso avanza un cuadrito a la derecha y uno arriba. Dibuja su camino con la regla. Cuando toque un borde, rebota como un espejo y sigue.",
          legend: [['⚽', 'On surt la pilota|Donde sale la pelota'], ['↗', 'Direcció 45: dreta i amunt|Dirección 45: derecha y arriba'], ['🔄', 'Rebot en una vora|Rebote en un borde']],
          items: [{ q: 'A quina vora toca primer la pilota? I després?|¿En qué borde toca primero la pelota? ¿Y después?' },
            { q: "Quantes vegades rebota abans d'arribar a una cantonada?|¿Cuántas veces rebota antes de llegar a una esquina?" }] }
      ]
    },
    /* ---------- Sessió 4 · Projecte: el laberint ---------- */
    'g4-4': {
    intro: "Sessió de projecte que tanca la primera meitat del curs: l'alumnat crea el seu primer videojoc, el laberint del far. Hi combina el que ha après: les fletxes amb «canvia x» i «canvia y», les coordenades de l'inici i de la sortida i una regla nova, «espera fins que toca el color blau» dins un «per sempre», que torna en Numi a l'inici quan toca una paret. Treballen com un equip de videojocs: pla en paper, programar el moviment, afegir les regles, provar i demanar a algú que el provi. La classe comença amb què té un videojoc, segueix amb el disseny d'un laberint en paper per parelles i acaba amb el videojoc programat i provat per un company/a.|Sesión de proyecto que cierra la primera mitad del curso: el alumnado crea su primer videojuego, el laberinto del faro. Combina lo que ha aprendido: las flechas con «cambia x» y «cambia y», las coordenadas del inicio y de la salida y una regla nueva, «espera hasta que toca el color azul» dentro de un «por siempre», que devuelve a Numi al inicio cuando toca una pared. Trabajan como un equipo de videojuegos: plan en papel, programar el movimiento, añadir las reglas, probar y pedir a alguien que lo pruebe. La clase empieza con qué tiene un videojuego, sigue con el diseño de un laberinto en papel por parejas y termina con el videojuego programado y probado por un compañero/a.",
    claus: [
      "Un videojoc té un personatge, uns controls, unes regles i un objectiu.|Un videojuego tiene un personaje, unos controles, unas reglas y un objetivo.",
      "Les fletxes mouen en Numi amb «canvia x» i «canvia y» (esquerra i avall, amb números negatius).|Las flechas mueven a Numi con «cambia x» y «cambia y» (izquierda y abajo, con números negativos).",
      "«Espera fins que toca el color blau» s'atura fins que en Numi toca una paret; després, «ves a» el torna a l'inici.|«Espera hasta que toca el color azul» se para hasta que Numi toca una pared; después, «ve a» lo devuelve al inicio.",
      "La regla va dins un «per sempre» perquè vigili tota l'estona, no només la primera vegada.|La regla va dentro de un «por siempre» para que vigile todo el rato, no solo la primera vez."
    ],
    prev: [
      "Coordenades i «ves a» (sessió 1) i «canvia x / canvia y» amb les fletxes (sessió 2).|Coordenadas y «ve a» (sesión 1) y «cambia x / cambia y» con las flechas (sesión 2).",
      "Guions de tecla i «Comprova» (unitat 3).|Guiones de tecla y «Comprueba» (unidad 3).",
      "El bucle «per sempre» (unitat 2).|El bucle «por siempre» (unidad 2)."
    ],
    faq: [
      ["Per què en Numi torna a l'inici si encara no ha tocat la paret?|¿Por qué Numi vuelve al inicio si aún no ha tocado la pared?",
        "En Numi té una mida: si una part del dibuix toca el blau, compta com a paret. Fes-lo petit (mida 50) i ves amb compte als passadissos.|Numi tiene un tamaño: si una parte del dibujo toca el azul, cuenta como pared. Hazlo pequeño (tamaño 50) y ve con cuidado por los pasillos."],
      ["Què passa si toco el vermell?|¿Qué pasa si toco el rojo?",
        "De moment, res: és una trampa sense regla. Si vols, afegeix-hi una segona regla amb el color vermell.|De momento, nada: es una trampa sin regla. Si quieres, añade una segunda regla con el color rojo."],
      ["Com sé que he arribat a la sortida?|¿Cómo sé que he llegado a la salida?",
        "Quan en Numi toca la bandera de la sortida verda, la bandera diu «Has sortit del laberint!».|Cuando Numi toca la bandera de la salida verde, la bandera dice «¡Has salido del laberinto!»."],
      ["Per què «Comprova» porta en Numi contra la paret?|¿Por qué «Comprueba» lleva a Numi contra la pared?",
        "Per comprovar la regla: si toca la paret, ha de tornar a l'inici. Després la fletxa avall comprova que es mou bé.|Para comprobar la regla: si toca la pared, tiene que volver al inicio. Después la flecha abajo comprueba que se mueve bien."],
      ["Puc fer el meu propi laberint a l'app?|¿Puedo hacer mi propio laberinto en la app?",
        "A l'app el laberint ja està dibuixat, però el teu laberint de paper et serveix de pla per a altres projectes més endavant.|En la app el laberinto ya está dibujado, pero tu laberinto de papel te sirve de plan para otros proyectos más adelante."],
      ["Ja és un videojoc de veritat?|¿Ya es un videojuego de verdad?",
        "Sí: té personatge, controls, una regla i un objectiu. Més endavant hi afegirem punts, vides i nivells.|Sí: tiene personaje, controles, una regla y un objetivo. Más adelante añadiremos puntos, vidas y niveles."]
    ],
    tec: [
      ["Les fletxes del teclat fan baixar la pàgina en lloc de moure en Numi.|Las flechas del teclado hacen bajar la página en lugar de mover a Numi.",
        "Que faci un clic a l'escenari abans de provar-lo, o que faci servir els botons de pantalla.|Que haga un clic en el escenario antes de probarlo; o que use los botones de pantalla."],
      ["En Numi travessa les parets.|Numi atraviesa las paredes.",
        "Falta el «ves a x: -175 y: 100» després de l'«espera fins que», o la regla no és dins el «per sempre».|Falta el «ve a x: -175 y: 100» después del «espera hasta que», o la regla no está dentro del «por siempre»."],
      ["En començar, en Numi ja surt dins una paret.|Al empezar, Numi ya sale dentro de una pared.",
        "El «ves a» de la regla té coordenades equivocades: l'inici és (-175, 100).|El «ve a» de la regla tiene coordenadas equivocadas: el inicio es (-175, 100)."],
      ["«Comprova» falla i no se sap per què.|«Comprueba» falla y no se sabe por qué.",
        "Llegiu el missatge: si diu que en Numi no ha arribat a la zona, revisa la fletxa dreta i la regla; si diu que no acaba a baix, la fletxa avall.|Leed el mensaje: si dice que Numi no ha llegado a la zona, revisa la flecha derecha y la regla; si dice que no acaba abajo, la flecha abajo."],
      ["Al canvi d'ordinador, algú toca el projecte de l'altre.|En el cambio de ordenador, alguien toca el proyecto del otro.",
        "Abans de canviar, que tothom desi el projecte; qui prova només fa servir les fletxes i no canvia blocs.|Antes de cambiar, que todos guarden el proyecto; quien prueba solo usa las flechas y no cambia bloques."]
    ],
    seg: [
      "Als comentaris de «Prova i millora», primer dues coses bones i després una idea, sempre sobre el videojoc i no sobre la persona.|En los comentarios de «Prueba y mejora», primero dos cosas buenas y después una idea, siempre sobre el videojuego y no sobre la persona.",
      "Si un laberint frustra algú, recordeu que equivocar-se i tornar a l'inici és part del videojoc; feu una pausa si cal.|Si un laberinto frustra a alguien, recordad que equivocarse y volver al inicio es parte del videojuego; haced una pausa si hace falta.",
      "Temps de pantalla: el videojoc es prova a classe uns minuts; a casa, ensenyar-lo a la família una estona.|Tiempo de pantalla: el videojuego se prueba en clase unos minutos; en casa, enseñarlo a la familia un rato."
    ],
    extra: [
      "Afegir una segona regla per a la trampa vermella (per exemple, que en Numi digui «Ai!» i torni a l'inici).|Añadir una segunda regla para la trampa roja (por ejemplo, que Numi diga «¡Ay!» y vuelva al inicio).",
      "Fer que en Numi canviï de vestit quan toca una paret i torni al vestit normal en començar de nou.|Hacer que Numi cambie de disfraz cuando toca una pared y vuelva al disfraz normal al empezar de nuevo.",
      "Escriure les instruccions del videojoc en tres frases perquè un company/a el pugui provar sense ajuda.|Escribir las instrucciones del videojuego en tres frases para que un compañero/a lo pueda probar sin ayuda."
    ],
    trans: [
      "Unitats 1-4: personatges, animació, interacció i coordenades s'ajunten en el primer videojoc.|Unidades 1-4: personajes, animación, interacción y coordenadas se juntan en el primer videojuego.",
      "Matemàtiques: coordenades, recorreguts en una graella i nombres negatius.|Matemáticas: coordenadas, recorridos en una cuadrícula y números negativos.",
      "Unitat 5: el bloc «si» per prendre decisions (si toca la paret… si no…).|Unidad 5: el bloque «si» para tomar decisiones (si toca la pared… si no…)."
    ],
      obj: [
        "L'alumne/a planifica un videojoc senzill: personatge, controls, regles i objectiu.|El alumno/a planifica un videojuego sencillo: personaje, controles, reglas y objetivo.",
        "L'alumne/a programa les quatre fletxes amb «canvia x» i «canvia y» i fa servir les coordenades per situar l'inici i la sortida.|El alumno/a programa las cuatro flechas con «cambia x» y «cambia y» y usa las coordenadas para situar el inicio y la salida.",
        "L'alumne/a programa una regla amb «espera fins que toca el color» dins un «per sempre» i explica per què cal el bucle.|El alumno/a programa una regla con «espera hasta que toca el color» dentro de un «por siempre» y explica por qué hace falta el bucle.",
        "L'alumne/a prova el videojoc d'un company/a i li dona comentaris amables i útils.|El alumno/a prueba el videojuego de un compañero/a y le da comentarios amables y útiles."
      ],
      comp: [
        "Competència digital (CD5): dissenyar i crear un videojoc senzill amb blocs|Competencia digital (CD5): diseñar y crear un videojuego sencillo con bloques",
        "Pensament computacional: esdeveniments, sensors de color, bucles i proves|Pensamiento computacional: eventos, sensores de color, bucles y pruebas",
        "Matemàtiques (sentit espacial): coordenades i recorreguts en un pla|Matemáticas (sentido espacial): coordenadas y recorridos en un plano",
        "Competència personal i social: donar i rebre comentaris per millorar|Competencia personal y social: dar y recibir comentarios para mejorar"
      ],
      vocab: [
        ["Videojoc|Videojuego", "Un programa interactiu amb un personatge, uns controls, unes regles i un objectiu.|Un programa interactivo con un personaje, unos controles, unas reglas y un objetivo."],
        ["Regla|Regla", "El que passa al videojoc quan es compleix una condició (tocar la paret → tornar a l'inici).|Lo que pasa en el videojuego cuando se cumple una condición (tocar la pared → volver al inicio)."],
        ["Tocar un color|Tocar un color", "Quan el personatge és a sobre d'una zona d'aquest color del fons.|Cuando el personaje está encima de una zona de ese color del fondo."],
        ["Esperar fins que|Esperar hasta que", "Aturar el guió fins que passa una cosa; llavors continua.|Parar el guion hasta que pasa algo; entonces sigue."],
        ["Provar|Probar", "Fer servir el programa per trobar errors i idees per millorar-lo.|Usar el programa para encontrar errores e ideas para mejorarlo."]
      ],
      mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el laberint»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el laberinto»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per parella: 1 «Dissenya el teu laberint» (imprimible 1), llapis de colors (blau, verd i vermell) i 1 llapis normal|Por pareja: 1 «Diseña tu laberinto» (imprimible 1), lápices de colores (azul, verde y rojo) y 1 lápiz normal",
        "1 fitxa «Prova i millora» per alumne/a (imprimible 2)|1 ficha «Prueba y mejora» por alumno/a (imprimible 2)"
      ],
      imprimir: [
        "1 «Dissenya el teu laberint» (graella) per parella (imprimible 1)|1 «Diseña tu laberinto» (cuadrícula) por pareja (imprimible 1)",
        "1 fitxa «Prova i millora» per alumne/a (imprimible 2)|1 ficha «Prueba y mejora» por alumno/a (imprimible 2)"
      ],
      prep: [
        "El dia abans (10 min): imprimir «Dissenya el teu laberint» (una per parella) i «Prova i millora» (una per alumne/a).|El día antes (10 min): imprimir «Diseña tu laberinto» (una por pareja) y «Prueba y mejora» (una por alumno/a).",
        "Si es van plastificar, tenir a mà les cartes de la cursa de la sessió 2: serveixen per moure's pel laberint de paper.|Si se plastificaron, tener a mano las cartas de la carrera de la sesión 2: sirven para moverse por el laberinto de papel.",
        "Provar abans el repte de les fletxes amb el botó «Comprova» per saber què veuran.|Probar antes el reto de las flechas con el botón «Comprueba» para saber qué verán.",
        "Deixar els ordinadors engegats amb Numi Tech obert i el perfil de cada alumne/a iniciat.|Dejar los ordenadores encendidos con Numi Tech abierto y el perfil de cada alumno/a iniciado."
      ]
    },
      plan: [
        { min: 5, t: "Benvinguda: el laberint del far|Bienvenida: el laberinto del faro", fase: 'inici',
          fa: "Presenta el projecte: avui creareu el vostre primer videojoc. Pregunta què té qualsevol videojoc que coneguin (un personatge, uns controls, unes regles, un objectiu) i apunta-ho a la pissarra en quatre columnes. Ho farem servir per planificar el laberint.|Presenta el proyecto: hoy crearéis vuestro primer videojuego. Pregunta qué tiene cualquier videojuego que conozcan (un personaje, unos controles, unas reglas, un objetivo) y apúntalo en la pizarra en cuatro columnas. Lo usaremos para planificar el laberinto.",
          diu: ["Què té un videojoc? Qui es mou, amb què el movem, què no podem fer i què hem d'aconseguir?|¿Qué tiene un videojuego? ¿Quién se mueve, con qué lo movemos, qué no podemos hacer y qué tenemos que conseguir?",
            "Avui no farem servir el videojoc d'algú altre: el crearem nosaltres.|Hoy no usaremos el videojuego de otra persona: lo crearemos nosotros.", "Quin és l'objectiu del nostre laberint? (Arribar a la sortida verda.)|¿Cuál es el objetivo de nuestro laberinto? (Llegar a la salida verde.)"],
          slides: ['s1', 's2'], app: "Encara no: pantalles apagades o abaixades.|Todavía no: pantallas apagadas o bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 8, t: "El pla i les regles|El plan y las reglas", fase: 'teoria',
          fa: "Mostra el mapa del laberint amb les coordenades de l'inici i la sortida. Explica la regla de la paret amb l'animació i la demostració: en Numi nota el color blau i torna a l'inici. Acaba amb el «compte!»: sense «per sempre», la regla només funciona una vegada.|Muestra el mapa del laberinto con las coordenadas del inicio y la salida. Explica la regla de la pared con la animación y la demostración: Numi nota el color azul y vuelve al inicio. Termina con el «¡cuidado!»: sin «por siempre», la regla solo funciona una vez.",
          diu: ["On comença en Numi? Quines coordenades té la sortida?|¿Dónde empieza Numi? ¿Qué coordenadas tiene la salida?",
            "La regla diu: espera fins que toquis el blau i, llavors, torna a l'inici.|La regla dice: espera hasta que toques el azul y, entonces, vuelve al inicio.",
            "Per què la segona vegada en Numi travessa la paret?|¿Por qué la segunda vez Numi atraviesa la pared?"],
          slides: ['s3', 's4', 's5', 's6'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Dissenya el teu laberint|Diseña tu laberinto", fase: 'desconnectat',
          fa: "Per parelles, dibuixen un laberint a la graella: parets en blau, sortida en verd, una trampa en vermell i l'inici. Escriuen les coordenades de l'inici i de la sortida. Després, un fa de Numi amb la punta del llapis i l'altre li dona ordres («canvia x en 1», «canvia y en -1»…); si toca una paret, torna a l'inici. Al final canvien els papers.|Por parejas, dibujan un laberinto en la cuadrícula: paredes en azul, salida en verde, una trampa en rojo y el inicio. Escriben las coordenadas del inicio y de la salida. Después, uno hace de Numi con la punta del lápiz y el otro le da órdenes («cambia x en 1», «cambia y en -1»…); si toca una pared, vuelve al inicio. Al final cambian los papeles.",
          diu: ["Les parets han de deixar passadissos: si no hi ha camí, ningú no podrà sortir!|Las paredes tienen que dejar pasillos: si no hay camino, ¡nadie podrá salir!",
            "Escriviu les coordenades de l'inici: les necessitareu per programar la regla.|Escribid las coordenadas del inicio: las necesitaréis para programar la regla.",
            "Qui dona les ordres no pot tocar el full: només pot parlar.|Quien da las órdenes no puede tocar la hoja: solo puede hablar."],
          slides: ['s7', 's8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles|Por parejas" },
        { min: 20, t: "A l'ordinador: del pla als blocs|En el ordenador: del plan a los bloques", fase: 'ordinador',
          fa: "Cada alumne/a avança des de «Recorda» fins als reptes. Al camí automàtic, recorda'ls que mirin el mapa i pensin cada revolt com un punt. Fes la pausa activa a mitja estona. Als reptes de les fletxes i de la regla, explica el botó «Comprova»: la fletxa dreta el porta contra la paret i ha de tornar a l'inici.|Cada alumno/a avanza desde «Recuerda» hasta los retos. En el camino automático, recuérdales que miren el mapa y piensen cada curva como un punto. Haced la pausa activa a mitad. En los retos de las flechas y de la regla, explica el botón «Comprueba»: la flecha derecha lo lleva contra la pared y tiene que volver al inicio.",
          diu: ["Cada revolt del laberint és un punt: quines coordenades té?|Cada curva del laberinto es un punto: ¿qué coordenadas tiene?",
            "Primer proveu les fletxes vosaltres; després, «Comprova».|Primero probad las flechas vosotros; después, «Comprueba».",
            "En Numi travessa la paret? Mira què hi ha després de l'«espera fins que».|¿Numi atraviesa la pared? Mira qué hay después del «espera hasta que»."],
          slides: ['s9', 's10'], app: "De «Recorda» fins a la pregunta de les 3 fletxes avall: el bloc «llisca», la història, les targetes de «Descobreix», ordenar els passos d'un videojoc, la sortida al mapa, el camí automàtic, el bloc que vigila la paret, la pregunta del «per sempre», la pausa activa, els reptes de les fletxes i de la regla i la pregunta de les coordenades.|De «Recuerda» hasta la pregunta de las 3 flechas abajo: el bloque «desliza», la historia, las tarjetas de «Descubre», ordenar los pasos de un videojuego, la salida en el mapa, el camino automático, el bloque que vigila la pared, la pregunta del «por siempre», la pausa activa, los retos de las flechas y de la regla y la pregunta de las coordenadas.", org: "Individual|Individual" },
        { min: 12, t: "Crea: el meu laberint i el provem|Crea: mi laberinto y lo probamos", fase: 'crea',
          fa: "Cada alumne/a completa el videojoc del laberint, hi afegeix el seu toc i el desa. Després, canvien d'ordinador amb el company/a: proven el laberint de l'altre/a i omplen «Prova i millora» amb dues coses que els han agradat i una idea per millorar. Torneu al vostre ordinador i, si hi ha temps, apliqueu la idea.|Cada alumno/a completa el videojuego del laberinto, añade su toque y lo guarda. Después, cambian de ordenador con el compañero/a: prueban el laberinto del otro/a y rellenan «Prueba y mejora» con dos cosas que les han gustado y una idea para mejorar. Volved a vuestro ordenador y, si hay tiempo, aplicad la idea.",
          diu: ["Primer dues coses bones i després una idea per millorar: dues estrelles i un desig.|Primero dos cosas buenas y después una idea para mejorar: dos estrellas y un deseo.",
            "Quan proveu el videojoc d'algú, proveu també de fer-lo fallar: així l'ajudeu a millorar-lo.|Cuando probéis el videojuego de alguien, intentad también hacerlo fallar: así le ayudáis a mejorarlo.",
            "Escolteu el comentari sense discutir: després decidiu si el feu servir.|Escuchad el comentario sin discutir: después decidid si lo usáis."],
          slides: ['s11', 's12'], app: "Pas «Crea»: El meu laberint, i la història de provar-lo amb un company/a.|Paso «Crea»: Mi laberinto, y la historia de probarlo con un compañero/a.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 5, t: "Tancament: què hem creat?|Cierre: ¿qué hemos creado?", fase: 'tancament',
          fa: "Repassa el que heu fet a la unitat amb el resum. Deixa que responguin les preguntes finals de l'app. Fes el tiquet de sortida i explica què vindrà a la unitat següent: el bloc «si» per prendre decisions.|Repasa lo que habéis hecho en la unidad con el resumen. Deja que respondan las preguntas finales de la app. Haz el ticket de salida y explica qué vendrá en la unidad siguiente: el bloque «si» para tomar decisiones.",
          diu: ["Què heu après en aquesta unitat que heu fet servir al laberint?|¿Qué habéis aprendido en esta unidad que habéis usado en el laberinto?",
            "Quin comentari del company/a us ha ajudat més?|¿Qué comentario del compañero/a os ha ayudado más?", "La setmana vinent: el bloc «si», per prendre decisions!|La semana que viene: ¡el bloque «si», para tomar decisiones!"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Posa la regla de la paret sense «per sempre» i només funciona la primera vegada.|Pone la regla de la pared sin «por siempre» y solo funciona la primera vez.",
          "Que provi de tocar la paret dues vegades i miri què passa. Pregunta: quantes vegades es fa aquest bloc? Recorda la demostració del «compte!».|Que pruebe a tocar la pared dos veces y mire qué pasa. Pregunta: ¿cuántas veces se hace este bloque? Recuerda la demostración del «¡cuidado!»."],
        ["Al «ves a» de la regla hi posa unes coordenades diferents de l'inici i en Numi apareix dins una paret.|En el «ve a» de la regla pone unas coordenadas diferentes del inicio y Numi aparece dentro de una pared.",
          "Que busqui al mapa on comença en Numi i compari els números amb els del bloc: primer la x, després la y.|Que busque en el mapa dónde empieza Numi y compare los números con los del bloque: primero la x, después la y."],
        ["Fa en Numi molt gran i toca les parets a cada moment.|Hace a Numi muy grande y toca las paredes a cada momento.",
          "Pregunta: hi cap en Numi pel passadís? Que provi una mida més petita (50) i ho compari.|Pregunta: ¿cabe Numi por el pasillo? Que pruebe un tamaño más pequeño (50) y lo compare."],
        ["Les fletxes amunt i avall mouen en Numi de costat (posa «canvia x» en lloc de «canvia y»).|Las flechas arriba y abajo mueven a Numi de lado (pone «cambia x» en lugar de «cambia y»).",
          "Que premi cada fletxa i digui en veu alta cap on va. Quina coordenada ha de canviar per pujar?|Que pulse cada flecha y diga en voz alta hacia dónde va. ¿Qué coordenada tiene que cambiar para subir?"],
        ["Quan rep un comentari de millora, s'enfada o vol esborrar-ho tot.|Cuando recibe un comentario de mejora, se enfada o quiere borrarlo todo.",
          "Recorda que tots els videojocs es proven i es milloren moltes vegades. Que triï un sol canvi petit i el provi.|Recuerda que todos los videojuegos se prueban y se mejoran muchas veces. Que elija un solo cambio pequeño y lo pruebe."],
      ["Al camí automàtic, llisca en diagonal d'un revolt a l'altre i en Numi trepitja una paret.|En el camino automático, se desliza en diagonal de una curva a otra y Numi pisa una pared.",
        "Que segueixi el camí amb el dit al mapa: als passadissos, cada tram canvia només la x o només la y.|Que siga el camino con el dedo en el mapa: en los pasillos, cada tramo cambia solo la x o solo la y."]
      ],
      diff: {
        mes: "Fer el laberint més difícil: canviar la mida d'en Numi, fer les fletxes més ràpides (canvia en 15) o afegir que en Numi digui una frase quan torna a l'inici. Al laberint de paper, afegir-hi una segona trampa i una regla nova.|Hacer el laberinto más difícil: cambiar el tamaño de Numi, hacer las flechas más rápidas (cambia en 15) o añadir que Numi diga una frase cuando vuelve al inicio. En el laberinto de papel, añadir una segunda trampa y una regla nueva.",
        menys: "Fer primer el repte de les fletxes amb només la dreta i l'avall i provar-les. Tenir a la taula un paper amb les coordenades de l'inici (-175, 100) per copiar-les al bloc «ves a».|Hacer primero el reto de las flechas con solo la derecha y abajo y probarlas. Tener en la mesa un papel con las coordenadas del inicio (-175, 100) para copiarlas en el bloque «ve a»."
      },
      aval: {
        ticket: ["Quines regles té el teu laberint?|¿Qué reglas tiene tu laberinto?",
          "Per què la regla de la paret va dins un «per sempre»?|¿Por qué la regla de la pared va dentro de un «por siempre»?"],
        rubric: [
          ["Planificació|Planificación", "Dibuixa un laberint amb camí, situa l'inici i la sortida amb coordenades i explica les regles.|Dibuja un laberinto con camino, sitúa el inicio y la salida con coordenadas y explica las reglas.", "Dibuixa el laberint, però li costa escriure les coordenades o explicar les regles.|Dibuja el laberinto, pero le cuesta escribir las coordenadas o explicar las reglas."],
          ["Programació del videojoc|Programación del videojuego", "Les quatre fletxes i la regla de la paret funcionen; sap explicar per què cal el «per sempre».|Las cuatro flechas y la regla de la pared funcionan; sabe explicar por qué hace falta el «por siempre».", "Les fletxes funcionen, però la regla de la paret necessita ajuda.|Las flechas funcionan, pero la regla de la pared necesita ayuda."],
          ["Provar i comentar|Probar y comentar", "Prova el videojoc del company/a i dona comentaris concrets, amables i útils.|Prueba el videojuego del compañero/a y da comentarios concretos, amables y útiles.", "Dona comentaris generals («m'agrada») sense idees concretes.|Da comentarios generales («me gusta») sin ideas concretas."],
        ["La regla de la paret|La regla de la pared",
          "Programa la regla amb «per sempre», «espera fins que toca el blau» i «ves a» l'inici, i explica què fa cada bloc.|Programa la regla con «por siempre», «espera hasta que toca el azul» y «ve a» el inicio, y explica qué hace cada bloque.",
          "Completa la regla amb la pista, però no sap explicar per què va dins el «per sempre».|Completa la regla con la pista, pero no sabe explicar por qué va dentro del «por siempre»."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu obrir el laberint als «Projectes» i ensenyar-lo a la família: que provin d'arribar a la sortida i que us diguin què hi afegirien.|En casa, con el móvil, podéis abrir el laberinto en «Proyectos» y enseñarlo a la familia: que intenten llegar a la salida y que os digan qué añadirían.",
      slides: [
        { id: 's1', k: 'portada', t: 'Projecte: el laberint|Proyecto: el laberinto', x: "Avui crearem el nostre primer videojoc: un laberint amb fletxes i regles.|Hoy crearemos nuestro primer videojuego: un laberinto con flechas y reglas.",
          nota: "Explica que és el projecte de la unitat: farà servir les coordenades, les fletxes i els bucles de les sessions anteriors.|Explica que es el proyecto de la unidad: usará las coordenadas, las flechas y los bucles de las sesiones anteriores." },
        { id: 's2', k: 'pregunta', t: 'Què té un videojoc?|¿Qué tiene un videojuego?', punts: ["Qui es mou? (el personatge)|¿Quién se mueve? (el personaje)", "Amb què el movem? (els controls)|¿Con qué lo movemos? (los controles)", "Què no podem fer? (les regles)|¿Qué no podemos hacer? (las reglas)", "Què hem d'aconseguir? (l'objectiu)|¿Qué tenemos que conseguir? (el objetivo)"],
          nota: "Apunta les respostes en quatre columnes a la pissarra i omple-les després amb el laberint: Numi, les fletxes, la paret, la sortida.|Apunta las respuestas en cuatro columnas en la pizarra y rellénalas después con el laberinto: Numi, las flechas, la pared, la salida." },
        { id: 's3', k: 'media', t: 'El mapa del laberint|El mapa del laberinto', x: "Inici: (-175, 100). Sortida: cap a (170, -115).|Inicio: (-175, 100). Salida: hacia (170, -115).", media: D_PLAN,
          nota: "Que la classe digui les coordenades de cada revolt mentre en Numi llisca. Les necessitaran al camí automàtic.|Que la clase diga las coordenadas de cada curva mientras Numi se desliza. Las necesitarán en el camino automático." },
        { id: 's4', k: 'anim', t: 'Les regles del laberint|Las reglas del laberinto', anim: 'g4color', x: "Si toca el blau, torna a l'inici. Si arriba al verd, ha sortit!|Si toca el azul, vuelve al inicio. Si llega al verde, ¡ha salido!",
          nota: "Relaciona-ho amb la columna «regles» de la pissarra.|Relaciónalo con la columna «reglas» de la pizarra." },
        { id: 's5', k: 'media', t: 'La regla de la paret|La regla de la pared', x: "Per sempre: espera fins que toca el blau, ves a l'inici.|Por siempre: espera hasta que toca el azul, ve al inicio.", media: D_WALL,
          nota: "Fes notar que en Numi torna a l'inici les dues vegades que toca una paret.|Haz notar que Numi vuelve al inicio las dos veces que toca una pared." },
        { id: 's6', k: 'media', t: 'Compte! Sense «per sempre»|¡Cuidado! Sin «por siempre»', x: "La primera vegada torna a l'inici… i la segona, travessa la paret!|La primera vez vuelve al inicio… ¡y la segunda, atraviesa la pared!", media: D_NOLOOP,
          nota: "Pregunta per què passa. Resposta: la regla es fa una sola vegada; dins un per sempre, vigila tota l'estona.|Pregunta por qué pasa. Respuesta: la regla se hace una sola vez; dentro de un por siempre, vigila todo el rato." },
        { id: 's7', k: 'activitat', t: 'Dissenya el teu laberint|Diseña tu laberinto', timer: 10, punts: ["Parets en blau, sortida en verd, una trampa en vermell.|Paredes en azul, salida en verde, una trampa en rojo.", "Escriviu les coordenades de l'inici i de la sortida.|Escribid las coordenadas del inicio y de la salida.", "Un fa de Numi amb el llapis; l'altre dona ordres.|Uno hace de Numi con el lápiz; el otro da órdenes.", "Si toca una paret, torna a l'inici!|Si toca una pared, ¡vuelve al inicio!"],
          nota: "Comprova que els laberints tenen camí. Si teniu les cartes de la cursa, es poden fer servir per donar les ordres.|Comprueba que los laberintos tienen camino. Si tenéis las cartas de la carrera, se pueden usar para dar las órdenes." },
        { id: 's8', k: 'activitat', t: 'Les regles del meu laberint|Las reglas de mi laberinto', punts: ["Les fletxes mouen el personatge.|Las flechas mueven al personaje.", "Tocar el blau: tornar a l'inici.|Tocar el azul: volver al inicio.", "Arribar al verd: has sortit!|Llegar al verde: ¡has salido!", "La trampa vermella: inventeu-vos què passa!|La trampa roja: ¡inventad qué pasa!"],
          nota: "Deixa-la projectada. La trampa vermella és per a les idees: a la unitat següent aprendran a programar-ne més d'una.|Déjala proyectada. La trampa roja es para las ideas: en la unidad siguiente aprenderán a programar más de una." },
        { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 20, punts: ["Obre la sessió «Projecte: el laberint».|Abre la sesión «Proyecto: el laberinto».", "Fes el camí automàtic amb «llisca».|Haz el camino automático con «desliza».", "Programa les fletxes i la regla de la paret.|Programa las flechas y la regla de la pared.", "Para quan arribis al pas «Crea».|Para cuando llegues al paso «Crea»."],
          nota: "Fes la pausa activa tots junts quan la majoria hi arribi.|Haced la pausa activa todos juntos cuando la mayoría llegue." },
        { id: 's10', k: 'repte', t: 'Reptes del laberint|Retos del laberinto', punts: ["1. El camí automàtic (llisca)|1. El camino automático (desliza)", "2. Les quatre fletxes|2. Las cuatro flechas", "3. La regla de la paret|3. La regla de la pared", "Per comprovar: toca «Comprova»|Para comprobar: toca «Comprueba»"],
          nota: "Explica que «Comprova» prem la fletxa dreta fins a la paret i després la d'avall: en Numi ha de tornar a l'inici i baixar.|Explica que «Comprueba» pulsa la flecha derecha hasta la pared y después la de abajo: Numi tiene que volver al inicio y bajar." },
        { id: 's11', k: 'activitat', t: 'Crea: el meu laberint|Crea: mi laberinto', timer: 7, x: "Fletxes, regla de la paret i el teu toc. Desa'l quan arribis a la sortida!|Flechas, regla de la pared y tu toque. ¡Guárdalo cuando llegues a la salida!",
          nota: "Recorda que el projecte es desa als «Projectes» i es pot obrir a casa.|Recuerda que el proyecto se guarda en «Proyectos» y se puede abrir en casa." },
        { id: 's12', k: 'activitat', t: 'Prova i millora|Prueba y mejora', timer: 5, punts: ["Canvia d'ordinador amb el company/a.|Cambia de ordenador con el compañero/a.", "Prova el seu laberint: arribes a la sortida?|Prueba su laberinto: ¿llegas a la salida?", "Dues estrelles: dues coses que t'agraden.|Dos estrellas: dos cosas que te gustan.", "Un desig: una idea per millorar-lo.|Un deseo: una idea para mejorarlo."],
          nota: "Modela un comentari concret a la pissarra: «M'agrada la frase del començament; afegiria una paret més».|Modela un comentario concreto en la pizarra: «Me gusta la frase del principio; añadiría una pared más»." },
        { id: 's13', k: 'resum', t: 'Què hem après a la unitat|Qué hemos aprendido en la unidad', punts: ["La x i la y diuen on és cada cosa.|La x y la y dicen dónde está cada cosa.", "«Llisca», «canvia x / y», la direcció i el rebot mouen els personatges.|«Desliza», «cambia x / y», la dirección y el rebote mueven a los personajes.", "Una regla dins un «per sempre» vigila tota l'estona.|Una regla dentro de un «por siempre» vigila todo el rato."],
          nota: "Fes que diversos alumnes expliquin quina part del laberint ha estat la més difícil i com l'han resolt.|Haz que varios alumnos expliquen qué parte del laberinto ha sido la más difícil y cómo la han resuelto." },
        { id: 's14', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Quines regles té el teu laberint?|¿Qué reglas tiene tu laberinto?", "Per què la regla va dins un «per sempre»?|¿Por qué la regla va dentro de un «por siempre»?"],
          nota: "Fes una pregunta a cada alumne/a a la porta i anota qui necessita repassar els bucles.|Haz una pregunta a cada alumno/a en la puerta y anota quién necesita repasar los bucles." },
        { id: 's15', k: 'pregunta', t: 'I la trampa vermella?|¿Y la trampa roja?', x: "Com faríem que en Numi digui «Ui!» si toca el vermell i torni a l'inici si toca el blau?|¿Cómo haríamos que Numi diga «¡Uy!» si toca el rojo y vuelva al inicio si toca el azul?",
          nota: "Deixa la pregunta oberta: a la unitat següent aprendran el bloc «si», que decideix què fer segons el que passa.|Deja la pregunta abierta: en la unidad siguiente aprenderán el bloque «si», que decide qué hacer según lo que pasa." }
      ],
      print: [
        { id: 'p1', t: 'Dissenya el teu laberint|Diseña tu laberinto', k: 'graella', w: 8, h: 6,
          intro: "Per parelles. Repasseu els eixos (la x de -4 a 4 i la y de -3 a 3). Pinteu les parets de blau, deixant passadissos; la sortida de verd i una trampa de vermell. Marqueu l'inici. Després, un fa de Numi amb la punta del llapis i l'altre li dona ordres: si toca el blau, torna a l'inici.|Por parejas. Repasad los ejes (la x de -4 a 4 y la y de -3 a 3). Pintad las paredes de azul, dejando pasillos; la salida de verde y una trampa de rojo. Marcad el inicio. Después, uno hace de Numi con la punta del lápiz y el otro le da órdenes: si toca el azul, vuelve al inicio.",
          legend: [['🤖', "L'inici d'en Numi|El inicio de Numi"], ['🟦', 'Paret (torna a l\'inici)|Pared (vuelve al inicio)'], ['🟩', 'Sortida|Salida'], ['🟥', 'Trampa (inventeu què passa)|Trampa (inventad qué pasa)']],
          items: [{ q: "Coordenades de l'inici: (___, ___) · Coordenades de la sortida: (___, ___)|Coordenadas del inicio: (___, ___) · Coordenadas de la salida: (___, ___)" },
            { q: 'Les regles del nostre videojoc són…|Las reglas de nuestro videojuego son…', big: true }] },
        { id: 'p2', t: 'Prova i millora|Prueba y mejora', k: 'fitxa',
          intro: "Prova el laberint del teu company/a i omple la fitxa. Primer dues estrelles (el que t'agrada) i després un desig (una idea per millorar).|Prueba el laberinto de tu compañero/a y rellena la ficha. Primero dos estrellas (lo que te gusta) y después un deseo (una idea para mejorar).",
          items: [
            { q: "⭐ Una cosa que m'ha agradat del laberint:|⭐ Una cosa que me ha gustado del laberinto:", sol: "Resposta oberta: valoreu que sigui concreta (una frase, un vestit, el camí…).|Respuesta abierta: valorad que sea concreta (una frase, un disfraz, el camino…)." },
            { q: "⭐ Una altra cosa que m'ha agradat:|⭐ Otra cosa que me ha gustado:", sol: "Resposta oberta.|Respuesta abierta." },
            { q: "He arribat a la sortida? Ha estat fàcil, normal o difícil?|¿He llegado a la salida? ¿Ha sido fácil, normal o difícil?", sol: "Resposta oberta: ajuda a decidir si cal canviar la mida o la velocitat.|Respuesta abierta: ayuda a decidir si hay que cambiar el tamaño o la velocidad." },
            { q: "💡 Un desig: què hi afegiries o canviaries?|💡 Un deseo: ¿qué añadirías o cambiarías?", sol: "Resposta oberta: una idea que el company/a pugui provar (una frase, una mida, una regla nova…).|Respuesta abierta: una idea que el compañero/a pueda probar (una frase, un tamaño, una regla nueva…)." }
          ] }
      ]
    }
  };
})());
