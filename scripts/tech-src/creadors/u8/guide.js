/* Tech Creadors · unitat 8 «L'estudi de videojocs» · guia del professorat (g8-1 … g8-4)
   Projecte final del curs: la classe treballa com un estudi. Cada alumne/a escriu el document de disseny i en tria les
   peces (g8-1), el construeix per peces i nivells (g8-2), el prova amb dades i n'ajusta la dificultat (g8-3) i el publica
   amb títol, instruccions i crèdits a la Fira de Videojocs (g8-4). L'app desa cada versió al portafoli i la recupera.
   Mateix esquema que TGUIDE['r1-1']; les demos de l'escenari són diapositives «media» ({ k: 'stage', w, prog }). */
Object.assign(TGUIDE, (() => {
  const W_DEMO = { bg: 'parc', sprites: [{ id: 'gat', art: 'gat', rot: 'lr', x: -150, y: -60 }, { id: 'moneda', art: 'moneda', x: 120, y: 60 }], vars: ['punts'], time: 9 };
  const P_DEMO = '@gat flag{ setv:punts,0 forever{ pointto:moneda move:4 } } @moneda flag{ forever{ next wait:0.1 if:touch:gat{ chv:punts,1 sound:moneda gotorand } } }';
  const W_RAIN = { bg: 'espai', time: 6, sprites: [{ id: 'meteorit', art: 'meteorit', x: 0, y: 170, size: 70 }] };
  const P_RAIN = '@meteorit flag{ hide forever{ clone wait:0.6 } } clone{ gotorand sety:170 show forever{ chy:-5 if:y<-170{ delclone } } }';
  const W_LVL = { bg: 'bosc', bgs: ['bosc', 'nit'], vars: ['punts', 'velocitat'], time: 9, sprites: [{ id: 'gat', art: 'gat', rot: 'lr', x: -150, y: -80 }, { id: 'poma', art: 'poma', x: 120, y: 60 }] };
  const P_LVL = '@gat flag{ bg:bosc setv:punts,0 setv:velocitat,3 forever{ pointto:poma move:$velocitat if:$punts>2{ bg:nit setv:velocitat,8 } } } @poma flag{ forever{ if:touch:gat{ chv:punts,1 sound:moneda gotorand } } }';
  const W_TITLE = { bg: 'espai', time: 6, sprites: [{ id: 'nau', art: 'nau', rot: 'none', x: 0, y: -120, size: 70 }, { id: 'estrella', art: 'estrella', x: 0, y: 60, size: 140 }] };
  const P_TITLE = '@estrella flag{ size:140 show say:"La pluja de meteorits|La lluvia de meteoritos",2 say:"Esquiva\'ls amb les fletxes!|¡Esquívalos con las flechas!",2 hide send:fi } @nau msg:fi{ forever{ chx:4 bounce } }';
  const W_EDGE = { bg: 'ciutat', time: 5, sprites: [{ id: 'cotxe', art: 'cotxe', x: -160, y: -130, size: 70 }] };
  const P_EDGE = '@cotxe flag{ setx:-160 sety:-130 say:"Vaig cap a la dreta…|Voy hacia la derecha…",1 forever{ chx:6 } }';
  return {
    /* ---------- Sessió 1 · El document de disseny ---------- */
    'g8-1': {
      intro: "Primera sessió del projecte final: la classe es converteix en un estudi de videojocs que publicarà un videojoc per persona a la Fira de Videojocs. Avui toca la primera fase de qualsevol estudi, el document de disseny: les quatre peces (protagonista, objectiu, obstacle i regles), les regles escrites com a «quan… → quina variable canvia», el final com a comparació (punts = 10, vides = 0) i, si es vol, un nivell 2 que canvia un número. L'alumnat el prova amb un prototip de paper, practica a l'app tres files típiques (recollir, perdre una vida, guanyar) i, al final, tria les peces i desa la versió 1, el punt de partida de les tres sessions següents. Temps: uns 15 minuts sense l'app (benvinguda i teoria a la pantalla gran) i 45 seguint els passos de l'app, des de l'activitat sense pantalla fins al tancament: és el temps que hi indica la sessió.|Primera sesión del proyecto final: la clase se convierte en un estudio de videojuegos que publicará un videojuego por persona en la Feria de Videojuegos. Hoy toca la primera fase de cualquier estudio, el documento de diseño: las cuatro piezas (protagonista, objetivo, obstáculo y reglas), las reglas escritas como «cuando… → qué variable cambia», el final como comparación (puntos = 10, vidas = 0) y, si se quiere, un nivel 2 que cambia un número. El alumnado lo prueba con un prototipo de papel, practica en la app tres filas típicas (recoger, perder una vida, ganar) y, al final, elige las piezas y guarda la versión 1, el punto de partida de las tres sesiones siguientes. Tiempo: unos 15 minutos sin la app (bienvenida y teoría en la pantalla grande) y 45 siguiendo los pasos de la app, desde la actividad sin pantalla hasta el cierre: es el tiempo que indica la sesión.",
      claus: [
        "Un estudi comença pel document de disseny: peces, regles, final i nivells.|Un estudio empieza por el documento de diseño: piezas, reglas, final y niveles.",
        "Cada regla té dues parts: quan passa i quina variable canvia («toco el premi → punts +1»).|Cada regla tiene dos partes: cuándo pasa y qué variable cambia («toco el premio → puntos +1»).",
        "El final és una comparació (punts = 10, vides = 0) i «atura tot» acaba la partida.|El final es una comparación (puntos = 10, vidas = 0) y «para todo» acaba la partida.",
        "Un nivell nou és una regla més: quan arribes a un valor, canvia un número (velocitat, fons…).|Un nivel nuevo es una regla más: cuando llegas a un valor, cambia un número (velocidad, fondo…).",
        "Primer una versió 1 petita que funcioni; les files del document arribaran d'una en una.|Primero una versión 1 pequeña que funcione; las filas del documento llegarán de una en una."
      ],
      prev: [
        "Condicions «si…» i comparar variables, també amb «repeteix fins que» (unitats 5 i 7).|Condiciones «si…» y comparar variables, también con «repite hasta que» (unidades 5 y 7).",
        "Punts i vides amb variables, valors negatius i l'espera després d'un xoc (unitat 6).|Puntos y vidas con variables, valores negativos y la espera después de un choque (unidad 6).",
        "Moure amb les fletxes, l'atzar i els clons (unitats 3 i 7).|Mover con las flechas, el azar y los clones (unidades 3 y 7)."
      ],
      faq: [
        ["Puc fer qualsevol videojoc que vulgui?|¿Puedo hacer cualquier videojuego que quiera?", "Sí, sempre que el document tingui les quatre peces i un final, i que el puguis fer amb els blocs que coneixes. Comença per una versió petita i després la fas créixer.|Sí, siempre que el documento tenga las cuatro piezas y un final, y que lo puedas hacer con los bloques que conoces. Empieza por una versión pequeña y después la haces crecer."],
        ["Puc canviar les peces que he triat?|¿Puedo cambiar las piezas que he elegido?", "Les peces de l'app es trien avui i es fan servir les quatre setmanes. Si de debò les vols canviar, parla-ho amb el professor/a abans de començar la versió 2.|Las piezas de la app se eligen hoy y se usan las cuatro semanas. Si de verdad las quieres cambiar, háblalo con el profesor/a antes de empezar la versión 2."],
        ["Per què els punts pugen sense parar?|¿Por qué los puntos suben sin parar?", "Perquè el premi no se'n va després de sumar: continua tocant el protagonista i suma a cada volta. Fes-lo anar a un lloc a l'atzar.|Porque el premio no se va después de sumar: sigue tocando al protagonista y suma en cada vuelta. Haz que vaya a un sitio al azar."],
        ["Com faig que es guanyi amb 5 punts?|¿Cómo hago que se gane con 5 puntos?", "Amb un «si» que compari: punts > 4, o punts ≥ 5. A dins, «digues Has guanyat!» i «atura tot».|Con un «si» que compare: puntos > 4, o puntos ≥ 5. Dentro, «di ¡Has ganado!» y «para todo»."],
        ["Què vol dir «nivell 2» al document?|¿Qué quiere decir «nivel 2» en el documento?", "Una fila més: quan es compleix una condició (per exemple, punts > 4), canvien uns quants números o el fons. No cal fer un escenari nou.|Una fila más: cuando se cumple una condición (por ejemplo, puntos > 4), cambian unos cuantos números o el fondo. No hace falta hacer un escenario nuevo."],
        ["No se m'acut cap idea.|No se me ocurre ninguna idea.", "Parteix d'un dels videojocs de la sessió (recollir i esquivar) i canvia'n els personatges, el lloc i una fila del document. Una bona idea pot ser petita!|Parte de uno de los videojuegos de la sesión (recoger y esquivar) y cambia sus personajes, el lugar y una fila del documento. ¡Una buena idea puede ser pequeña!"]
      ],
      tec: [
        ["Les fletxes del teclat no mouen el protagonista.|Las flechas del teclado no mueven al protagonista.", "Cal tocar primer l'escenari perquè la pàgina «escolti» el teclat, o fer servir els botons de fletxes de sota l'escenari (també al mòbil).|Hay que tocar primero el escenario para que la página «escuche» el teclado, o usar los botones de flechas de debajo del escenario (también en el móvil)."],
        ["No s'ha desat el videojoc.|No se ha guardado el videojuego.", "Només es desa quan passa la comprovació i es toca «Desa-ho i continua». Si se surt abans, cal tornar a fer «Comprova».|Solo se guarda cuando pasa la comprobación y se toca «Guárdalo y continúa». Si se sale antes, hay que volver a hacer «Comprueba»."],
        ["Un alumne/a s'encalla en un repte.|Un alumno/a se atasca en un reto.", "Després de dos intents apareix «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver: el reto vuelve a empezar."],
        ["Les miniatures per triar les peces no surten.|Las miniaturas para elegir las piezas no salen.", "Torneu a carregar la pàgina i entreu de nou a la sessió: la tria es fa al pas «El teu document de disseny, a l'app».|Volved a cargar la página y entrad de nuevo en la sesión: la elección se hace en el paso «Tu documento de diseño, en la app»."],
        ["La graella de l'esbós surt massa petita.|La cuadrícula del boceto sale demasiado pequeña.", "Imprimiu-la al 100 % o en DIN A3; cada quadre equival a 60 punts de l'escenari.|Imprimidla al 100 % o en DIN A3; cada cuadro equivale a 60 puntos del escenario."]
      ],
      seg: [
        "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
        "Idees de videojoc: res de violència, por o burles cap a persones reals; els enemics són objectes o animals de l'escenari.|Ideas de videojuego: nada de violencia, miedo o burlas hacia personas reales; los enemigos son objetos o animales del escenario.",
        "Si algú parla d'un videojoc de casa que no és per a la seva edat, no el jutgis davant del grup; si et preocupa, parla-ho amb la família.|Si alguien habla de un videojuego de casa que no es para su edad, no lo juzgues delante del grupo; si te preocupa, háblalo con la familia."
      ],
      extra: [
        "Afegir al document un nivell 2 complet: amb quina condició s'hi arriba i quins dos números canvien.|Añadir al documento un nivel 2 completo: con qué condición se llega y qué dos números cambian.",
        "Posar a la versió 1 la fila «toco el premi → punts +1» (i el premi, a l'atzar).|Poner en la versión 1 la fila «toco el premio → puntos +1» (y el premio, al azar).",
        "Fer el prototip de paper amb dues propostes de final (punts = 5 i punts = 10) i comparar quant duren les partides.|Hacer el prototipo de papel con dos propuestas de final (puntos = 5 y puntos = 10) y comparar cuánto duran las partidas."
      ],
      trans: [
        "Recull tot el curs: actors, bucles, tecles, coordenades, condicions, variables, atzar i clons.|Recoge todo el curso: actores, bucles, teclas, coordenadas, condiciones, variables, azar y clones.",
        "Sessió següent: construir el videojoc per peces, fila per fila del document, a partir de la versió 1.|Sesión siguiente: construir el videojuego por piezas, fila por fila del documento, a partir de la versión 1.",
        "Llengua i matemàtiques: escriure regles precises i fer servir comparacions i mesures de temps.|Lengua y matemáticas: escribir reglas precisas y usar comparaciones y medidas de tiempo."
      ],
      obj: [
        "L'alumne/a escriu un document de disseny amb les quatre peces, el final i, si vol, un nivell 2.|El alumno/a escribe un documento de diseño con las cuatro piezas, el final y, si quiere, un nivel 2.",
        "L'alumne/a escriu cada regla com «quan… → quina variable canvia» i la relaciona amb un bloc «si» i un bloc de variable.|El alumno/a escribe cada regla como «cuando… → qué variable cambia» y la relaciona con un bloque «si» y un bloque de variable.",
        "L'alumne/a expressa el final com una comparació (punts = 10, vides < 1) i el programa amb «atura tot».|El alumno/a expresa el final como una comparación (puntos = 10, vidas < 1) y lo programa con «para todo».",
        "L'alumne/a prova el document amb un prototip de paper, en mesura la durada de les partides i programa la versió 1.|El alumno/a prueba el documento con un prototipo de papel, mide la duración de las partidas y programa la versión 1."
      ],
      comp: [
        "Competència digital (CD5): dissenyar i començar a crear un producte digital propi (un videojoc senzill)|Competencia digital (CD5): diseñar y empezar a crear un producto digital propio (un videojuego sencillo)",
        "Pensament computacional: descomposició en regles, variables i condicions; abstracció en un document de disseny|Pensamiento computacional: descomposición en reglas, variables y condiciones; abstracción en un documento de diseño",
        "Matemàtiques: comparacions (=, <, >) i mesura del temps de les partides|Matemáticas: comparaciones (=, <, >) y medida del tiempo de las partidas",
        "Comunicació escrita i oral: escriure regles precises perquè un altre les pugui seguir|Comunicación escrita y oral: escribir reglas precisas para que otro las pueda seguir"
      ],
      vocab: [
        ["Document de disseny|Documento de diseño", "La pàgina que descriu un videojoc abans de programar-lo: peces, regles, final i nivells.|La página que describe un videojuego antes de programarlo: piezas, reglas, final y niveles."],
        ["Regla|Regla", "Una fila del document: quan passa una cosa i quina variable canvia («toco el premi → punts +1»).|Una fila del documento: cuándo pasa algo y qué variable cambia («toco el premio → puntos +1»)."],
        ["Nivell|Nivel", "Una part del videojoc amb uns altres números (més velocitat, un altre fons…).|Una parte del videojuego con otros números (más velocidad, otro fondo…)."],
        ["Prototip|Prototipo", "Una primera versió senzilla (de paper o a la pantalla) per provar la idea.|Una primera versión sencilla (de papel o en la pantalla) para probar la idea."],
        ["Versió|Versión", "Cada estat desat del projecte: la versió 1 és petita i les següents hi afegeixen files del document.|Cada estado guardado del proyecto: la versión 1 es pequeña y las siguientes le añaden filas del documento."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «El document de disseny»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «El documento de diseño»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Llapis de colors, tisores i un rellotge o cronòmetre per parella|Lápices de colores, tijeras y un reloj o cronómetro por pareja",
          "Una carpeta o funda per alumne/a per guardar el document durant tota la unitat|Una carpeta o funda por alumno/a para guardar el documento durante toda la unidad"
        ],
        imprimir: ["Document de disseny (1): l'esbós|Documento de diseño (1): el boceto", "Document de disseny (2): regles, final i nivells|Documento de diseño (2): reglas, final y niveles"],
        prep: [
          "Imprimir les dues pàgines del document de disseny per alumne/a.|Imprimir las dos páginas del documento de diseño por alumno/a.",
          "Provar la demo de la diapositiva 6 i el prototip d'en Vuit (pas «Investiga») per saber quines files hi falten.|Probar la demo de la diapositiva 6 y el prototipo de Vuit (paso «Investiga») para saber qué filas le faltan.",
          "Omplir abans un document d'exemple propi per copiar-lo a la pissarra mentre expliques la taula de regles.|Rellenar antes un documento de ejemplo propio para copiarlo en la pizarra mientras explicas la tabla de reglas.",
          "Recordar que les peces que triïn a l'app (protagonista, premi, enemic i fons) es fan servir a les quatre sessions.|Recordar que las piezas que elijan en la app (protagonista, premio, enemigo y fondo) se usan en las cuatro sesiones."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: l'estudi de videojocs|Bienvenida: el estudio de videojuegos", fase: 'inici',
          fa: "Anuncia el projecte final: durant quatre setmanes, la classe serà un estudi de videojocs i cada alumne/a publicarà un videojoc propi a la Fira de Videojocs. Explica les quatre fases (disseny, construcció, proves amb dades, publicació) i pregunta com creuen que treballa un equip que fa videojocs de veritat.|Anuncia el proyecto final: durante cuatro semanas, la clase será un estudio de videojuegos y cada alumno/a publicará un videojuego propio en la Feria de Videojuegos. Explica las cuatro fases (diseño, construcción, pruebas con datos, publicación) y pregunta cómo creen que trabaja un equipo que hace videojuegos de verdad.",
          diu: [
            "Un videojoc de botiga el fa un equip durant mesos. Què creieu que fan abans de programar?|Un videojuego de tienda lo hace un equipo durante meses. ¿Qué creéis que hacen antes de programar?",
            "Penseu en un videojoc que conegueu: quin és el protagonista? Què ha d'aconseguir? Què el fa difícil?|Pensad en un videojuego que conozcáis: ¿cuál es el protagonista? ¿Qué tiene que conseguir? ¿Qué lo hace difícil?",
            "En quatre setmanes: document de disseny, construcció, proves amb dades i publicació.|En cuatro semanas: documento de diseño, construcción, pruebas con datos y publicación."
          ],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Les peces, les regles i el document|Las piezas, las reglas y el documento", fase: 'teoria',
          fa: "Presenta les quatre peces amb l'animació i busqueu-les en tres idees de videojoc. Amb la demo del gat i la moneda, fes que diguin la regla com «quan… → què canvia» i escriu-la a la pissarra, en una taula de dues columnes. Afegiu-hi entre tots el final (dues comparacions) i un nivell 2. Acaba amb l'animació del document i la de la versió 1.|Presenta las cuatro piezas con la animación y buscadlas en tres ideas de videojuego. Con la demo del gato y la moneda, haz que digan la regla como «cuando… → qué cambia» y escríbela en la pizarra, en una tabla de dos columnas. Añadid entre todos el final (dos comparaciones) y un nivel 2. Acaba con la animación del documento y la de la versión 1.",
          diu: [
            "Quina és la regla de la demo? Quan passa i quina variable canvia? (quan el gat toca la moneda → punts +1)|¿Cuál es la regla de la demo? ¿Cuándo pasa y qué variable cambia? (cuando el gato toca la moneda → puntos +1)",
            "Com sabrem que hem guanyat? Escriviu-ho com una comparació. (punts = 10)|¿Cómo sabremos que hemos ganado? Escribidlo como una comparación. (puntos = 10)",
            "Què podria canviar al nivell 2? Quin número? (la velocitat, de 3 a 6)|¿Qué podría cambiar en el nivel 2? ¿Qué número? (la velocidad, de 3 a 6)",
            "«Ha de ser emocionant» és una fila del document? (no: és un desig; cal convertir-lo en números)|«Tiene que ser emocionante», ¿es una fila del documento? (no: es un deseo; hay que convertirlo en números)"
          ],
          slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Desconnectat: document i prototip de paper|Desconectado: documento y prototipo de papel", fase: 'desconnectat',
          fa: "Durant 7 minuts, cada alumne/a omple les dues pàgines del document: l'esbós a la graella i la taula de regles, el final i el nivell 2. Després, en parelles, proven el document del company/a com a prototip de paper: un fa de pilot/a (mou el protagonista amb el dit) i l'altre fa d'ordinador (aplica les regles al peu de la lletra i porta el marcador). Fan tres partides curtes i n'apunten la durada. Si l'ordinador/a no sap què fer en algun moment, falta una fila.|Durante 7 minutos, cada alumno/a rellena las dos páginas del documento: el boceto en la cuadrícula y la tabla de reglas, el final y el nivel 2. Después, por parejas, prueban el documento del compañero/a como prototipo de papel: uno hace de piloto/a (mueve el protagonista con el dedo) y el otro hace de ordenador (aplica las reglas al pie de la letra y lleva el marcador). Hacen tres partidas cortas y apuntan su duración. Si el ordenador/a no sabe qué hacer en algún momento, falta una fila.",
          diu: [
            "Cada fila, amb les dues columnes: quan passa i quina variable canvia.|Cada fila, con las dos columnas: cuándo pasa y qué variable cambia.",
            "Ordinador/a: només podeu canviar el marcador si hi ha una fila que ho digui!|Ordenador/a: ¡solo podéis cambiar el marcador si hay una fila que lo diga!",
            "Quant han durat les partides? Si duren 2 segons o no s'acaben mai, quin número canviaríeu?|¿Cuánto han durado las partidas? Si duran 2 segundos o no se acaban nunca, ¿qué número cambiaríais?",
            "Heu trobat una situació sense regla? Escriviu la fila que falta.|¿Habéis encontrado una situación sin regla? Escribid la fila que falta."
          ],
          slides: ['s10', 's11'], app: "Cap: activitat sense pantalla. El document es guarda a la carpeta per a les setmanes vinents.|Ninguna: actividad sin pantalla. El documento se guarda en la carpeta para las próximas semanas.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «Prototip de paper» poden tocar «Ho hem fet!», perquè ja l'han fet a classe. Al prototip d'en Vuit, deixa que el provin una estona abans de respondre quines files hi falten. Fes la pausa activa tots junts.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «Prototipo de papel» pueden tocar «¡Lo hemos hecho!», porque ya lo han hecho en clase. En el prototipo de Vuit, deja que lo prueben un rato antes de responder qué filas le faltan. Haced la pausa activa todos juntos.",
          diu: [
            "A «La roca rodolant», quina regla compara una variable per acabar la partida? (si vides < 1)|En «La roca rodante», ¿qué regla compara una variable para acabar la partida? (si vidas < 1)",
            "El prototip d'en Vuit s'acaba algun dia? Quines files li posaríeu? (un enemic amb vides −1 i un final)|¿El prototipo de Vuit se acaba algún día? ¿Qué filas le pondríais? (un enemigo con vidas −1 y un final)",
            "Quina fila del document es pot programar? Per què les altres no?|¿Qué fila del documento se puede programar? ¿Por qué las otras no?"
          ],
          slides: ['s12', 's13'], app: "Dels dos «Recorda» fins a la «Pausa activa»: les dues històries, les cinc targetes de «Descobreix», la fila programable, ordenar les fases, el prototip de paper (ja fet), la regla que acaba la partida, el prototip d'en Vuit i les files que hi falten.|De los dos «Recuerda» hasta la «Pausa activa»: las dos historias, las cinco tarjetas de «Descubre», la fila programable, ordenar las fases, el prototipo de papel (ya hecho), la regla que acaba la partida, el prototipo de Vuit y las filas que le faltan.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: tres files del document|Retos: tres filas del documento", fase: 'ordinador',
          fa: "Els tres reptes són les files que tindran gairebé tots els documents: recollir, perdre una vida i guanyar. Si algú no posa «espera» després de perdre una vida, deixa que vegi com les vides baixen de cop i pregunta-li per què.|Los tres retos son las filas que tendrán casi todos los documentos: recoger, perder una vida y ganar. Si alguien no pone «espera» después de perder una vida, deja que vea cómo las vidas bajan de golpe y pregúntale por qué.",
          diu: [
            "Per què els punts pugen sense parar si l'estrella no se'n va? (es continuen tocant)|¿Por qué los puntos suben sin parar si la estrella no se va? (se siguen tocando)",
            "Quantes vegades es comprova un «si» que és dins d'un «per sempre»? (a cada volta)|¿Cuántas veces se comprueba un «si» que está dentro de un «por siempre»? (en cada vuelta)",
            "Per què la tortuga espera després de perdre una vida? (perquè un xoc no en tregui moltes)|¿Por qué la tortuga espera después de perder una vida? (para que un choque no le quite muchas)",
            "Punts > 4: amb quants punts guanyes? (5)|Puntos > 4: ¿con cuántos puntos ganas? (5)"
          ],
          slides: ['s14'], app: "Els tres reptes de «Reptes»: toco el premi → punts +1, m'atrapa l'enemic → vides −1, i punts = 5 → Has guanyat!|Los tres retos de «Retos»: toco el premio → puntos +1, me atrapa el enemigo → vidas −1, y puntos = 5 → ¡Has ganado!", org: "Individual|Individual" },
        { min: 8, t: "Crea: les peces i la versió 1|Crea: las piezas y la versión 1", fase: 'crea',
          fa: "Amb el document al costat, cada alumne/a tria a l'app el protagonista, el premi, l'enemic i el fons, i desa la tria. Després programa la versió 1: el protagonista es mou amb les fletxes i diu el títol del videojoc. Recorda'ls que l'han de desar: la setmana vinent continuaran des d'aquí.|Con el documento al lado, cada alumno/a elige en la app el protagonista, el premio, el enemigo y el fondo, y guarda la elección. Después programa la versión 1: el protagonista se mueve con las flechas y dice el título del videojuego. Recuérdales que la tienen que guardar: la semana que viene continuarán desde aquí.",
          diu: [
            "Trieu les peces que heu escrit al document.|Elegid las piezas que habéis escrito en el documento.",
            "Amb quins guions es mou el protagonista? (quan premo la tecla…)|¿Con qué guiones se mueve el protagonista? (al pulsar la tecla…)",
            "Quan funcioni, toqueu Comprova i deseu-la: és la versió 1!|Cuando funcione, tocad Comprueba y guardadla: ¡es la versión 1!"
          ],
          slides: ['s15'], app: "Pas per triar les peces del document i pas «Crea»: el meu videojoc, versió 1.|Paso para elegir las piezas del documento y paso «Crea»: mi videojuego, versión 1.", org: "Individual|Individual" },
        { min: 2, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les idees de la sessió amb el resum i, a la porta, fes a cada alumne/a una pregunta del tiquet. Recull els documents a les carpetes.|Repasa las ideas de la sesión con el resumen y, en la puerta, haz a cada alumno/a una pregunta del ticket. Recoge los documentos en las carpetas.",
          diu: [
            "Digueu-me una fila del vostre document: quan passa i quina variable canvia.|Decidme una fila de vuestro documento: cuándo pasa y qué variable cambia.",
            "Com s'acaba el vostre videojoc? Digueu-ho amb una comparació.|¿Cómo se acaba vuestro videojuego? Decidlo con una comparación.",
            "Teniu la versió 1 desada? La setmana vinent continuarem des d'aquí.|¿Tenéis la versión 1 guardada? La semana que viene seguiremos desde aquí."
          ],
          slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Vol fer un videojoc enorme (molts nivells, molts personatges) i no sap per on començar.|Quiere hacer un videojuego enorme (muchos niveles, muchos personajes) y no sabe por dónde empezar.",
          "Felicita'l per la idea i pregunta-li: quines són les tres files mínimes perquè ja sigui un videojoc? Que les marqui al document i deixi la resta per a «més endavant».|Felicítale por la idea y pregúntale: ¿cuáles son las tres filas mínimas para que ya sea un videojuego? Que las marque en el documento y deje el resto para «más adelante»."],
        ["Escriu files que no es poden programar («ha de ser divertit», «el gat és valent»).|Escribe filas que no se pueden programar («tiene que ser divertido», «el gato es valiente»).",
          "Demana-li que ompli les dues columnes: quan passa i quina variable canvia. Si no hi ha cap variable que canviï, no és una regla: és un desig.|Pídele que rellene las dos columnas: cuándo pasa y qué variable cambia. Si no hay ninguna variable que cambie, no es una regla: es un deseo."],
        ["Escriu el final sense número («quan en tingui molts, guanyo»).|Escribe el final sin número («cuando tenga muchos, gano»).",
          "Pregunta: quants són «molts»? L'ordinador necessita una comparació exacta. Que triï un número i el provi al prototip de paper.|Pregunta: ¿cuántos son «muchos»? El ordenador necesita una comparación exacta. Que elija un número y lo pruebe en el prototipo de papel."],
        ["Al repte de recollir, els punts pugen sense parar.|En el reto de recoger, los puntos suben sin parar.",
          "Pregunta: on és l'estrella després de sumar el punt? I l'ocell? Que miri que es continuen tocant i pensi com fer marxar l'estrella.|Pregunta: ¿dónde está la estrella después de sumar el punto? ¿Y el pájaro? Que mire que se siguen tocando y piense cómo hacer que la estrella se vaya."],
        ["Les vides baixen totes de cop (o queden en negatiu).|Las vidas bajan todas de golpe (o quedan en negativo).",
          "Que miri quant de temps es toquen la tortuga i la medusa. Cada volta del «per sempre» compta com un xoc: com pot fer que en compti només un?|Que mire cuánto tiempo se tocan la tortuga y la medusa. Cada vuelta del «por siempre» cuenta como un choque: ¿cómo puede hacer que cuente solo uno?"],
        ["No desa la versió 1 i la setmana vinent no la troba.|No guarda la versión 1 y la semana que viene no la encuentra.", "Abans de tancar, passa per les taules: ha sortit «Projecte desat»? Si no, que torni a fer «Comprova» i «Desa-ho i continua».|Antes de cerrar, pasa por las mesas: ¿ha salido «Proyecto guardado»? Si no, que vuelva a hacer «Comprueba» y «Guárdalo y continúa»."]
      ],
      diff: {
        mes: "Escriure un nivell 2 complet (condició i dos números que canvien) i una regla amb temps («si temps = 0 → Has perdut!»). A la versió 1, posar-hi ja la fila de recollir el premi.|Escribir un nivel 2 completo (condición y dos números que cambian) y una regla con tiempo («si tiempo = 0 → ¡Has perdido!»). En la versión 1, poner ya la fila de recoger el premio.",
        menys: "Partir del document d'un dels videojocs de la sessió (recollir estrelles i esquivar una roca) i canviar-ne només els personatges i el fons. Omplir només les tres files bàsiques: recollir, perdre una vida i guanyar.|Partir del documento de uno de los videojuegos de la sesión (recoger estrellas y esquivar una roca) y cambiar solo los personajes y el fondo. Rellenar solo las tres filas básicas: recoger, perder una vida y ganar."
      },
      aval: {
        ticket: ["Digues una fila del teu document: quan passa i quina variable canvia.|Di una fila de tu documento: cuándo pasa y qué variable cambia.",
          "Com s'acaba el teu videojoc? Digues-ho amb una comparació.|¿Cómo se acaba tu videojuego? Dilo con una comparación."],
        rubric: [
          ["Document de disseny|Documento de diseño", "Té les quatre peces, el final amb números i, sovint, un nivell 2.|Tiene las cuatro piezas, el final con números y, a menudo, un nivel 2.", "Hi falta alguna peça (sovint l'obstacle o el final).|Le falta alguna pieza (a menudo el obstáculo o el final)."],
          ["Regles i variables|Reglas y variables", "Cada fila diu quan passa i quina variable canvia, i la relaciona amb blocs.|Cada fila dice cuándo pasa y qué variable cambia, y la relaciona con bloques.", "Descriu el videojoc, però encara no en separa les regles ni les variables.|Describe el videojuego, pero todavía no separa sus reglas ni sus variables."],
          ["Versió 1|Versión 1", "El protagonista es mou amb les fletxes, diu el títol i el projecte queda desat.|El protagonista se mueve con las flechas, dice el título y el proyecto queda guardado.", "Necessita ajuda per fer servir els guions de les tecles.|Necesita ayuda para usar los guiones de las teclas."],
          [
            "Prototip de paper|Prototipo de papel",
            "Prova el document, en mesura les partides i hi afegeix les files que faltaven.|Prueba el documento, mide las partidas y le añade las filas que faltaban.",
            "Fa el document, però no el prova o no hi canvia res.|Hace el documento, pero no lo prueba o no cambia nada."
          ]
        ]
      },
      casa: "A casa, feu el prototip de paper amb algú de la família (pas «Prototip de paper» de l'app): l'alumne/a fa d'ordinador i aplica les regles del document, i l'altra persona fa de pilot/a. Apunteu quant duren tres partides i, si cal, ajusteu un número del document abans de la setmana vinent.|En casa, haced el prototipo de papel con alguien de la familia (paso «Prototipo de papel» de la app): el alumno/a hace de ordenador y aplica las reglas del documento, y la otra persona hace de piloto/a. Apuntad cuánto duran tres partidas y, si hace falta, ajustad un número del documento antes de la semana que viene.",
      slides: [
        { id: 's1', k: 'portada', t: 'El document de disseny|El documento de diseño', x: "Unitat 8 · L'estudi de videojocs. Comença el projecte final!|Unidad 8 · El estudio de videojuegos. ¡Empieza el proyecto final!",
          nota: "Explica que és l'última unitat del curs: la classe serà un estudi i cada alumne/a publicarà un videojoc propi.|Explica que es la última unidad del curso: la clase será un estudio y cada alumno/a publicará un videojuego propio." },
        { id: 's2', k: 'pregunta', t: 'Com es fa un videojoc de veritat?|¿Cómo se hace un videojuego de verdad?', x: "Un equip el fa durant mesos. Què fan primer: programar, dibuixar o escriure?|Un equipo lo hace durante meses. ¿Qué hacen primero: programar, dibujar o escribir?",
          nota: "Recull respostes i porta-les cap a la idea de document de disseny: abans de programar, s'escriu què farà el videojoc.|Recoge respuestas y llévalas hacia la idea de documento de diseño: antes de programar, se escribe qué hará el videojuego." },
        { id: 's3', k: 'concepte', t: "Les quatre fases de l'estudi|Las cuatro fases del estudio", punts: ['1. Document de disseny i versió 1|1. Documento de diseño y versión 1', '2. Construcció per peces i nivells|2. Construcción por piezas y niveles', '3. Proves amb dades i ajust|3. Pruebas con datos y ajuste', '4. Publicació i estrena a la Fira|4. Publicación y estreno en la Feria'],
          nota: "Deixa clar que l'app desa cada versió i que cada setmana continuaran des d'on ho van deixar.|Deja claro que la app guarda cada versión y que cada semana continuarán desde donde lo dejaron.", pic: "img/ic/calendar.webp" },
        { id: 's4', k: 'anim', t: "Les quatre peces d'un videojoc|Las cuatro piezas de un videojuego", anim: 'g8parts', x: 'Protagonista, objectiu, obstacle i regles.|Protagonista, objetivo, obstáculo y reglas.',
          nota: "Pregunta què passaria si en faltés una: sense obstacle, és massa fàcil; sense objectiu, no se sap què fer.|Pregunta qué pasaría si faltara una: sin obstáculo, es demasiado fácil; sin objetivo, no se sabe qué hacer." },
        { id: 's5', k: 'pregunta', t: 'Troba les peces|Encuentra las piezas', punts: ["Un peix que menja bombolles i esquiva crancs|Un pez que come burbujas y esquiva cangrejos", "Una nau que recull estrelles mentre cauen meteorits|Una nave que recoge estrellas mientras caen meteoritos", "Un gat que surt d'un laberint abans que s'acabi el temps|Un gato que sale de un laberinto antes de que se acabe el tiempo"],
          nota: "Per a cada idea, que diguin les quatre peces. A la tercera, l'obstacle és el temps: una variable que baixa.|Para cada idea, que digan las cuatro piezas. En la tercera, el obstáculo es el tiempo: una variable que baja." },
        { id: 's6', k: 'media', t: 'Cada regla canvia una variable|Cada regla cambia una variable', x: "Quan el gat toca la moneda → punts +1 i la moneda salta a l'atzar.|Cuando el gato toca la moneda → puntos +1 y la moneda salta al azar.", media: { k: 'stage', w: W_DEMO, prog: P_DEMO, varNames: { punts: 'punts|puntos' } },
          nota: "Dibuixa a la pissarra una taula de dues columnes («Quan…» i «Què canvia») i escriu-hi la primera fila.|Dibuja en la pizarra una tabla de dos columnas («Cuando…» y «Qué cambia») y escribe la primera fila." },
        { id: 's7', k: 'anim', t: 'Guanyar i perdre són comparacions|Ganar y perder son comparaciones', anim: 'g8win', x: 'Si punts = 10 → has guanyat. Si vides = 0 → has perdut.|Si puntos = 10 → has ganado. Si vidas = 0 → has perdido.',
          nota: "Afegiu les dues files a la taula de la pissarra. Pregunta per altres finals: arribar a una bandera, aguantar fins que el temps arriba a 0.|Añadid las dos filas a la tabla de la pizarra. Pregunta por otros finales: llegar a una bandera, aguantar hasta que el tiempo llega a 0." },
        { id: 's8', k: 'anim', t: 'El document de disseny|El documento de diseño', anim: 'g8doc', x: 'Quan… → què canvia. També el final i el nivell 2.|Cuando… → qué cambia. También el final y el nivel 2.',
          nota: "Completa a la pissarra el teu document d'exemple i fes notar la fila del nivell 2: és una condició que canvia un número.|Completa en la pizarra tu documento de ejemplo y haz notar la fila del nivel 2: es una condición que cambia un número." },
        { id: 's9', k: 'anim', t: 'Primer, una versió 1|Primero, una versión 1', anim: 'g8small', x: 'Una fila cada vegada, i provar-la abans de seguir.|Una fila cada vez, y probarla antes de seguir.',
          nota: "Insisteix: una versió petita que funciona és millor que una de gran que no funciona.|Insiste: una versión pequeña que funciona es mejor que una grande que no funciona." },
        { id: 's10', k: 'activitat', t: 'Document i prototip de paper|Documento y prototipo de papel', timer: 12, punts: ["7 min: l'esbós i la taula de regles, el final i el nivell 2.|7 min: el boceto y la tabla de reglas, el final y el nivel 2.", "En parella: un fa de pilot/a i l'altre, d'ordinador.|En pareja: uno hace de piloto/a y el otro, de ordenador.", "L'ordinador/a només canvia el marcador si una fila ho diu.|El ordenador/a solo cambia el marcador si una fila lo dice.", "Tres partides: apunteu quant dura cadascuna.|Tres partidas: apuntad cuánto dura cada una."],
          nota: "Passa per les taules i pregunta: quina fila heu hagut d'afegir? Quant duren les partides?|Pasa por las mesas y pregunta: ¿qué fila habéis tenido que añadir? ¿Cuánto duran las partidas?" },
        { id: 's11', k: 'activitat', t: 'Revisa el document|Revisa el documento', punts: ['Hi ha protagonista, objectiu, obstacle i regles?|¿Hay protagonista, objetivo, obstáculo y reglas?', "Cada fila diu quan passa i quina variable canvia?|¿Cada fila dice cuándo pasa y qué variable cambia?", 'El final és una comparació amb número?|¿El final es una comparación con número?', "Has marcat què farà la versió 1?|¿Has marcado qué hará la versión 1?"],
          nota: "Deixa aquesta llista projectada mentre acaben. Els documents es guarden a la carpeta.|Deja esta lista proyectada mientras acaban. Los documentos se guardan en la carpeta." },
        { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ['Obre la sessió «El document de disseny».|Abre la sesión «El documento de diseño».', '«Prototip de paper»: ja l\'has fet, toca «Ho hem fet!».|«Prototipo de papel»: ya lo has hecho, toca «¡Lo hemos hecho!».', "Prova el prototip d'en Vuit abans de dir què hi falta.|Prueba el prototipo de Vuit antes de decir qué le falta.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
          nota: "Fes la pausa activa tots junts quan la majoria hi arribi.|Haced la pausa activa todos juntos cuando la mayoría llegue." },
        { id: 's13', k: 'pregunta', t: "Quines files li falten al document d'en Vuit?|¿Qué filas le faltan al documento de Vuit?", x: 'Els punts pugen i pugen… i la partida no s\'acaba mai.|Los puntos suben y suben… y la partida no se acaba nunca.',
          nota: "Fes-los dir que hi falten l'obstacle i el final, i que les escriguin com a files: «m'atrapa l'enemic → vides −1», «punts = 10 → Has guanyat!».|Haz que digan que le faltan el obstáculo y el final, y que los escriban como filas: «me atrapa el enemigo → vidas −1», «puntos = 10 → ¡Has ganado!»." },
        { id: 's14', k: 'repte', t: 'Tres files del document|Tres filas del documento', timer: 10, punts: ["1. Toco el premi → punts +1 (i el premi, a l'atzar)|1. Toco el premio → puntos +1 (y el premio, al azar)", "2. M'atrapa l'enemic → vides −1 (i una espera)|2. Me atrapa el enemigo → vidas −1 (y una espera)", '3. Punts > 4 → «Has guanyat!» i atura tot|3. Puntos > 4 → «¡Has ganado!» y para todo'],
          nota: "Són les tres files que gairebé tots faran servir: si les entenen ara, la setmana vinent aniran molt més de pressa.|Son las tres filas que casi todos usarán: si las entienden ahora, la semana que viene irán mucho más deprisa." },
        { id: 's15', k: 'activitat', t: 'Tria les peces i fes la versió 1|Elige las piezas y haz la versión 1', timer: 6, punts: ['Tria protagonista, premi, enemic i fons, i desa-ho.|Elige protagonista, premio, enemigo y fondo, y guárdalo.', 'El protagonista es mou amb les fletxes.|El protagonista se mueve con las flechas.', 'En començar, diu el títol del videojoc.|Al empezar, dice el título del videojuego.', "Toca Comprova i desa-la!|¡Toca Comprueba y guárdala!"],
          nota: "Comprova que tothom ha desat la versió 1: és el punt de partida de la sessió següent.|Comprueba que todo el mundo ha guardado la versión 1: es el punto de partida de la sesión siguiente." },
        { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ['Un estudi comença pel document de disseny.|Un estudio empieza por el documento de diseño.', 'Cada regla diu quan passa i quina variable canvia.|Cada regla dice cuándo pasa y qué variable cambia.', 'El final és una comparació; el nivell 2, un número que canvia.|El final es una comparación; el nivel 2, un número que cambia.'],
          nota: "Torna a la pregunta del principi: ara ja saben què fa un estudi abans de programar.|Vuelve a la pregunta del principio: ahora ya saben qué hace un estudio antes de programar." },
        { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Una fila del teu document: quan passa i què canvia.|Una fila de tu documento: cuándo pasa y qué cambia.", 'El final del teu videojoc, amb una comparació.|El final de tu videojuego, con una comparación.'],
          nota: "Anota qui encara no té clar l'objectiu, l'obstacle o el final: la setmana vinent comença per ells.|Anota quién aún no tiene claro el objetivo, el obstáculo o el final: la semana que viene empieza por ellos." }
      ],
      print: [
        { id: 'p1', t: "Document de disseny (1): l'esbós|Documento de diseño (1): el boceto", k: 'graella', w: 8, h: 6,
          legend: [['🦸', 'Protagonista|Protagonista'], ['⭐', 'El que recull|Lo que recoge'], ['☄️', "L'enemic o l'obstacle|El enemigo o el obstáculo"], ['🚩', 'Sortida o meta|Salida o meta'], ['➡️', 'Com es mou|Cómo se mueve']],
          intro: "La graella és l'escenari: cada quadre fa 60 punts. Dibuixa el fons i on comença cada personatge.|La cuadrícula es el escenario: cada cuadro mide 60 puntos. Dibuja el fondo y dónde empieza cada personaje.",
          items: [
            { q: "Títol del videojoc i una frase que expliqui de què va.|Título del videojuego y una frase que explique de qué va." },
            { q: "Protagonista: ___ · Objectiu: ___ · Obstacle: ___|Protagonista: ___ · Objetivo: ___ · Obstáculo: ___" },
            { q: "Prototip de paper · durada de les tres partides: ___ s, ___ s, ___ s|Prototipo de papel · duración de las tres partidas: ___ s, ___ s, ___ s" }
          ] },
        { id: 'p2', t: 'Document de disseny (2): regles, final i nivells|Documento de diseño (2): reglas, final y niveles', k: 'fitxa',
          intro: "Escriu cada regla en dues parts: quan passa → quina variable canvia (i com). Després, el final i el nivell 2.|Escribe cada regla en dos partes: cuándo pasa → qué variable cambia (y cómo). Después, el final y el nivel 2.",
          items: [
            { q: "Regles: quan… → què canvia (una per línia: moure, premi, enemic…)|Reglas: cuando… → qué cambia (una por línea: mover, premio, enemigo…)", big: true, sol: "Exemple: fletxa → canvia x · toco el premi → punts +1 · m'atrapa l'enemic → vides −1.|Ejemplo: flecha → cambia x · toco el premio → puntos +1 · me atrapa el enemigo → vidas −1." },
            { q: "Guanyo si ___ (comparació) · Perdo si ___ (comparació)|Gano si ___ (comparación) · Pierdo si ___ (comparación)", sol: "Exemple: punts = 10 · vides < 1.|Ejemplo: puntos = 10 · vidas < 1." },
            { q: "Nivell 2: hi arribo quan ___ i canvia ___ (de ___ a ___).|Nivel 2: llego cuando ___ y cambia ___ (de ___ a ___).", sol: "Exemple: quan punts > 4, la velocitat passa de 3 a 6 i el fons es fa de nit.|Ejemplo: cuando puntos > 4, la velocidad pasa de 3 a 6 y el fondo se hace de noche." },
            { q: "Versió 1: què farà? (la més petita que ja funciona)|Versión 1: ¿qué hará? (la más pequeña que ya funciona)", sol: "El protagonista es mou amb les fletxes i diu el títol.|El protagonista se mueve con las flechas y dice el título." }
          ] }
      ]
    },

    /* ---------- Sessió 2 · Construeix-lo peça a peça ---------- */
    'g8-2': {
      intro: "Segona sessió del projecte: l'estudi es converteix en un taller i la versió 1 es fa gran, fila per fila del document de disseny. L'alumnat aprèn a convertir cada fila en blocs i tres idees per construir bé: cada personatge té els seus guions (i tots comencen alhora), el guió de la bandera ho posa tot a lloc abans del bucle (punts a 0, vides a 3, posició de sortida) i un videojoc es construeix peça a peça, provant cada peça. També veu peces que pot reutilitzar: un nivell 2, una velocitat que creix i una pluja de clons. La part central és el pas «Crea»: cadascú afegeix al seu videojoc les files del document fins que té variable, regla i dos personatges programats, i el desa com a versió 2. Temps: uns 15 minuts sense l'app (benvinguda i teoria a la pantalla gran) i 45 seguint els passos de l'app, des de l'activitat sense pantalla fins al tancament: és el temps que hi indica la sessió.|Segunda sesión del proyecto: el estudio se convierte en un taller y la versión 1 se hace grande, fila por fila del documento de diseño. El alumnado aprende a convertir cada fila en bloques y tres ideas para construir bien: cada personaje tiene sus guiones (y todos empiezan a la vez), el guion de la bandera lo pone todo en su sitio antes del bucle (puntos a 0, vidas a 3, posición de salida) y un videojuego se construye pieza a pieza, probando cada pieza. También ve piezas que puede reutilizar: un nivel 2, una velocidad que crece y una lluvia de clones. La parte central es el paso «Crea»: cada uno añade a su videojuego las filas del documento hasta que tiene variable, regla y dos personajes programados, y lo guarda como versión 2. Tiempo: unos 15 minutos sin la app (bienvenida y teoría en la pantalla grande) y 45 siguiendo los pasos de la app, desde la actividad sin pantalla hasta el cierre: es el tiempo que indica la sesión.",
      claus: [
        "Cada personatge s'encarrega de les seves regles, i tots els guions funcionen alhora.|Cada personaje se encarga de sus reglas, y todos los guiones funcionan a la vez.",
        "En començar, tot a lloc: punts a 0, vides a 3, posició de sortida, i abans del bucle.|Al empezar, todo en su sitio: puntos a 0, vidas a 3, posición de salida, y antes del bucle.",
        "Cada fila del document es converteix en uns quants blocs: una fila, la provo; una altra fila, la provo.|Cada fila del documento se convierte en unos cuantos bloques: una fila, la pruebo; otra fila, la pruebo.",
        "Un nivell és una fila més: un número (la velocitat) canvia la dificultat; els clons fan molts enemics amb un guió.|Un nivel es una fila más: un número (la velocidad) cambia la dificultad; los clones hacen muchos enemigos con un guion."
      ],
      prev: [
        "El document de disseny i la versió 1 desada (sessió anterior).|El documento de diseño y la versión 1 guardada (sesión anterior).",
        "Variables, condicions i «comparar números» (unitats 5 i 6).|Variables, condiciones y «comparar números» (unidades 5 y 6).",
        "Clons, «repeteix fins que» i velocitat que creix (unitat 7).|Clones, «repite hasta que» y velocidad que crece (unidad 7)."
      ],
      faq: [
        ["On poso la regla de sumar punts: al protagonista o al premi?|¿Dónde pongo la regla de sumar puntos: en el protagonista o en el premio?", "Pot anar a qualsevol dels dos, però sol ser més clar al premi: és ell qui sap quan el toquen i qui ha de saltar a un altre lloc.|Puede ir en cualquiera de los dos, pero suele ser más claro en el premio: es él quien sabe cuándo lo tocan y quien tiene que saltar a otro sitio."],
        ["Els punts no pugen mai. Què passa?|Los puntos no suben nunca. ¿Qué pasa?", "Mira si «posa punts a 0» és dins del «per sempre»: llavors els torna a 0 a cada volta. Ha d'anar abans del bucle.|Mira si «pon puntos a 0» está dentro del «por siempre»: entonces los vuelve a 0 en cada vuelta. Tiene que ir antes del bucle."],
        ["Puc copiar les peces dels reptes al meu videojoc?|¿Puedo copiar las piezas de los retos en mi videojuego?", "Sí! Els reptes d'avui són peces per reutilitzar. Torna-les a fer al teu videojoc, adaptades als teus personatges.|¡Sí! Los retos de hoy son piezas para reutilizar. Vuelve a hacerlas en tu videojuego, adaptadas a tus personajes."],
        ["L'enemic m'atrapa de seguida.|El enemigo me atrapa enseguida.", "Fes-lo més lent (un número més petit a «mou-te») o fes-lo començar més lluny. La setmana vinent ajustarem la dificultat amb el provador/a.|Hazlo más lento (un número más pequeño en «muévete») o haz que empiece más lejos. La semana que viene ajustaremos la dificultad con el probador/a."],
        ["Per què l'app em diu que encara falta alguna cosa?|¿Por qué la app me dice que todavía falta algo?", "Per desar la versió 2 cal una variable, una regla amb «si…» i almenys dos personatges programats. El missatge et diu què falta.|Para guardar la versión 2 hace falta una variable, una regla con «si…» y al menos dos personajes programados. El mensaje te dice qué falta."],
        ["El videojoc va cada vegada més lent.|El videojuego va cada vez más lento.", "Segurament els clons no s'esborren. Afegeix «esborra aquest clon» quan surten de l'escenari (si y < -170).|Seguramente los clones no se borran. Añade «borra este clon» cuando salen del escenario (si y < -170)."]
      ],
      tec: [
        ["No es troba la versió anterior del videojoc.|No se encuentra la versión anterior del videojuego.", "Cada sessió obre l'última versió desada al portafoli (a «Projectes») amb el mateix perfil. Si no n'hi ha cap, l'app comença amb les peces de mostra: es pot tornar al pas «Tria les peces» de la sessió 1 i desar-les.|Cada sesión abre la última versión guardada en el portafolio (en «Proyectos») con el mismo perfil. Si no hay ninguna, la app empieza con las piezas de muestra: se puede volver al paso «Elige las piezas» de la sesión 1 y guardarlas."],
        ["No s'ha desat el videojoc.|No se ha guardado el videojuego.", "Només es desa quan passa la comprovació i es toca «Desa-ho i continua». Si se surt abans, cal tornar a fer «Comprova».|Solo se guarda cuando pasa la comprobación y se toca «Guárdalo y continúa». Si se sale antes, hay que volver a hacer «Comprueba»."],
        ["Les fletxes del teclat no mouen el protagonista.|Las flechas del teclado no mueven al protagonista.", "Cal tocar primer l'escenari perquè la pàgina «escolti» el teclat, o fer servir els botons de fletxes de sota l'escenari (també al mòbil).|Hay que tocar primero el escenario para que la página «escuche» el teclado, o usar los botones de flechas de debajo del escenario (también en el móvil)."],
        ["Un alumne/a s'encalla en un repte.|Un alumno/a se atasca en un reto.", "Després de dos intents apareix «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver: el reto vuelve a empezar."],
        ["Un guió molt llarg no hi cap a la pantalla.|Un guion muy largo no cabe en la pantalla.", "La zona de guions es pot desplaçar avall. També ajuda repartir les regles entre els personatges.|La zona de guiones se puede desplazar hacia abajo. También ayuda repartir las reglas entre los personajes."]
      ],
      seg: ["Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.", "Videojoc humà: es camina a poc a poc dins del rectangle, sense empentes; l'enemic «atrapa» tocant l'espatlla suaument.|Videojuego humano: se camina despacio dentro del rectángulo, sin empujones; el enemigo «atrapa» tocando el hombro suavemente."],
      extra: [
        "Afegir un nivell 2 amb un altre fons i un enemic més ràpid.|Añadir un nivel 2 con otro fondo y un enemigo más rápido.",
        "Fer una pluja de premis amb clons que caiguin a l'atzar.|Hacer una lluvia de premios con clones que caigan al azar.",
        "Acabar el videojoc quan el cronòmetre arriba a 30 (si cronòmetre > 30 → «S'ha acabat el temps!»).|Terminar el videojuego cuando el cronómetro llega a 30 (si cronómetro > 30 → «¡Se acabó el tiempo!»)."
      ],
      trans: [
        "Ve de la sessió 1: la versió 1 i el document de disseny.|Viene de la sesión 1: la versión 1 y el documento de diseño.",
        "Sessió següent: la sala de proves, amb dades de cada partida per ajustar la dificultat.|Sesión siguiente: la sala de pruebas, con datos de cada partida para ajustar la dificultad.",
        "Tecnologia: construir un projecte per parts i provar cada part (com un enginyer/a).|Tecnología: construir un proyecto por partes y probar cada parte (como un ingeniero/a)."
      ],
      obj: [
        "L'alumne/a converteix les files del document en guions i les reparteix entre els personatges i programa cada personatge amb els seus guions.|El alumno/a convierte las filas del documento en guiones y las reparte entre los personajes y programa cada personaje con sus guiones.",
        "L'alumne/a inicialitza el videojoc al guió de la bandera (variables, posicions i visibilitat) i explica per què cal fer-ho abans del bucle.|El alumno/a inicializa el videojuego en el guion de la bandera (variables, posiciones y visibilidad) y explica por qué hay que hacerlo antes del bucle.",
        "L'alumne/a fa servir variables, condicions, nivells i clons com a peces del seu videojoc.|El alumno/a usa variables, condiciones, niveles y clones como piezas de su videojuego.",
        "L'alumne/a construeix el videojoc de manera incremental, provant cada peça abans d'afegir-ne una altra.|El alumno/a construye el videojuego de manera incremental, probando cada pieza antes de añadir otra."
      ],
      comp: [
        "Competència digital (CD5): crear un producte digital propi combinant diversos elements de programació|Competencia digital (CD5): crear un producto digital propio combinando varios elementos de programación",
        "Pensament computacional: descomposició, inicialització de variables, bucles amb condicions i clons|Pensamiento computacional: descomposición, inicialización de variables, bucles con condiciones y clones",
        "Matemàtiques: variables que augmenten i disminueixen, comparacions (més gran que, més petit que) i coordenades|Matemáticas: variables que aumentan y disminuyen, comparaciones (mayor que, menor que) y coordenadas",
        "Aprendre a aprendre: treballar per passos i comprovar cada pas abans de seguir|Aprender a aprender: trabajar por pasos y comprobar cada paso antes de seguir"
      ],
      vocab: [
        ["Inicialitzar|Inicializar", "Posar-ho tot a lloc en començar: variables, posicions, vestits.|Ponerlo todo en su sitio al empezar: variables, posiciones, disfraces."],
        ["Guió|Guion", "Una pila de blocs que comença amb una capçalera, com «Quan comença».|Una pila de bloques que empieza con una cabecera, como «Al empezar»."],
        ["Nivell|Nivel", "Una part del videojoc més difícil que l'anterior: canvia el fons, la velocitat…|Una parte del videojuego más difícil que la anterior: cambia el fondo, la velocidad…"],
        ["Clon|Clon", "Una còpia d'un personatge que fa el guió «Quan començo com a clon».|Una copia de un personaje que hace el guion «Al empezar como clon»."],
        ["Incremental|Incremental", "Construir a poc a poc: una peça, la proves, una altra peça…|Construir poco a poco: una pieza, la pruebas, otra pieza…"]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Construeix-lo peça a peça»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Constrúyelo pieza a pieza»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "El document de disseny de cada alumne/a (de la sessió anterior)|El documento de diseño de cada alumno/a (de la sesión anterior)",
          "Una pissarra petita o un full per fer de «marcador» al videojoc humà|Una pizarra pequeña o una hoja para hacer de «marcador» en el videojuego humano"
        ],
        imprimir: ["Targetes del videojoc humà|Tarjetas del videojuego humano", "Fitxa: de la regla als blocs|Ficha: de la regla a los bloques"],
        prep: [
          "Imprimir i retallar un paquet de targetes de papers per grup de 4 i una fitxa per alumne/a.|Imprimir y recortar un paquete de tarjetas de papeles por grupo de 4 y una ficha por alumno/a.",
          "Tornar a cada alumne/a la carpeta amb el seu document de disseny.|Devolver a cada alumno/a la carpeta con su documento de diseño.",
          "Comprovar a l'app que tothom té desada la versió 1 (a «Projectes»). Qui no la tingui començarà amb les peces de mostra.|Comprobar en la app que todo el mundo tiene guardada la versión 1 (en «Proyectos»). Quien no la tenga empezará con las piezas de muestra.",
          "Marcar a terra un rectangle petit (l'escenari) per al videojoc humà.|Marcar en el suelo un rectángulo pequeño (el escenario) para el videojuego humano."
        ]
      },
      plan: [
        { min: 5, t: "Repàs: el document de disseny|Repaso: el documento de diseño", fase: 'inici',
          fa: "Cada alumne/a obre la carpeta i rellegeix el seu document. Pregunta a dos o tres alumnes una fila de regles i el final del seu videojoc, i presenta la feina del dia al taller: fer créixer la versió 1 fila per fila.|Cada alumno/a abre la carpeta y relee su documento. Pregunta a dos o tres alumnos una fila de reglas y el final de su videojuego, y presenta el trabajo del día en el taller: hacer crecer la versión 1 fila por fila.",
          diu: [
            "Llegiu una fila del vostre document: quan passa i quina variable canvia?|Leed una fila de vuestro documento: ¿cuándo pasa y qué variable cambia?",
            "Quina és la fila següent, després que el protagonista es mogui? (el premi, l'enemic…)|¿Cuál es la fila siguiente, después de que el protagonista se mueva? (el premio, el enemigo…)",
            "Marqueu-la: és la primera que convertireu en blocs avui.|Marcadla: es la primera que convertiréis en bloques hoy."
          ],
          slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Guions, inicialitzar, nivells i clons|Guiones, inicializar, niveles y clones", fase: 'teoria',
          fa: "Amb l'animació del paper als blocs, converteix en blocs una fila del teu document d'exemple. Després, mostra que cada personatge té els seus guions i que tots comencen alhora. Amb la demo del cotxe, explica per què el guió de la bandera ho posa tot a lloc abans del «per sempre». Ensenya com un nivell canvia el fons i un número (la velocitat) i com un sol meteorit amb clons fa una pluja sencera.|Con la animación del papel a los bloques, convierte en bloques una fila de tu documento de ejemplo. Después, muestra que cada personaje tiene sus guiones y que todos empiezan a la vez. Con la demo del coche, explica por qué el guion de la bandera lo pone todo en su sitio antes del «por siempre». Enseña cómo un nivel cambia el fondo y un número (la velocidad) y cómo un solo meteorito con clones hace una lluvia entera.",
          diu: [
            "«Toco el premi → punts +1»: quins blocs són? (si toca → suma a punts 1)|«Toco el premio → puntos +1»: ¿qué bloques son? (si toca → suma a puntos 1)",
            "Quan toco la bandera, quins guions comencen? (tots alhora)|Cuando toco la bandera, ¿qué guiones empiezan? (todos a la vez)",
            "Què passaria si no poséssim els punts a 0 en començar? (començarien amb els de la partida anterior)|¿Qué pasaría si no pusiéramos los puntos a 0 al empezar? (empezarían con los de la partida anterior)",
            "Quin número fa que el gat corri més al nivell 2? (la velocitat: de 3 a 8)|¿Qué número hace que el gato corra más en el nivel 2? (la velocidad: de 3 a 8)",
            "Quants meteorits hem dibuixat? (un) I quants en veiem? (molts: són clons)|¿Cuántos meteoritos hemos dibujado? (uno) ¿Y cuántos vemos? (muchos: son clones)"
          ],
          slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Desconnectat: el videojoc humà|Desconectado: el videojuego humano", fase: 'desconnectat',
          fa: "En grups de 4, cada alumne/a rep una targeta amb un paper (protagonista, moneda, enemic, marcador) i el seu guió. A la teva senyal («bandera verda!»), tots fan el seu guió alhora dins del rectangle de terra: el protagonista camina, l'enemic el segueix a poc a poc i el marcador apunta punts i vides. Primer ho feu sense la targeta d'inicialitzar (el marcador comença amb els números de l'anterior) i després amb ella. Comenteu què ha canviat. Al final, cadascú omple la fitxa de les regles.|En grupos de 4, cada alumno/a recibe una tarjeta con un papel (protagonista, moneda, enemigo, marcador) y su guion. A tu señal («¡bandera verde!»), todos hacen su guion a la vez dentro del rectángulo del suelo: el protagonista camina, el enemigo lo sigue despacio y el marcador apunta puntos y vidas. Primero lo hacéis sin la tarjeta de inicializar (el marcador empieza con los números del anterior) y después con ella. Comentad qué ha cambiado. Al final, cada uno rellena la ficha de las reglas.",
          diu: [
            "Tothom comença alhora quan dic «bandera verda»: com a l'escenari!|Todo el mundo empieza a la vez cuando digo «bandera verde»: ¡como en el escenario!",
            "Marcador, amb quants punts comences? Per què? (amb 0: és la inicialització)|Marcador, ¿con cuántos puntos empiezas? ¿Por qué? (con 0: es la inicialización)",
            "Què ha canviat quan hem fet servir la targeta d'inicialitzar? (cada partida comença igual)|¿Qué ha cambiado cuando hemos usado la tarjeta de inicializar? (cada partida empieza igual)",
            "L'enemic camina sempre a poc a poc: si anés corrent, seria just?|El enemigo camina siempre despacio: si fuera corriendo, ¿sería justo?"
          ],
          slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 amb papers|Grupos de 4 con papeles" },
        { min: 10, t: "A l'ordinador: descobreix i arregla|En el ordenador: descubre y arregla", fase: 'ordinador',
          fa: "Cada alumne/a fa els passos fins a la pausa activa. Al bug del marcador que sempre marca 0, deixa que el provin abans de tocar el bloc. Al meteorit que només cau una vegada, recorda'ls la condició «comparar números» de la unitat 5.|Cada alumno/a hace los pasos hasta la pausa activa. En el bug del marcador que siempre marca 0, deja que lo prueben antes de tocar el bloque. En el meteorito que solo cae una vez, recuérdales la condición «comparar números» de la unidad 5.",
          diu: [
            "Llegiu el «per sempre» en veu alta: què fa a cada volta? (torna els punts a 0)|Leed el «por siempre» en voz alta: ¿qué hace en cada vuelta? (vuelve los puntos a 0)",
            "On és el meteorit quan ja no el veiem? Quina y té? (sota de -170)|¿Dónde está el meteorito cuando ya no lo vemos? ¿Qué y tiene? (debajo de -170)",
            "Quins dos blocs el tornen a dalt en un lloc a l'atzar? (ves a un lloc a l'atzar i posa y a 170)|¿Qué dos bloques lo devuelven arriba en un sitio al azar? (ve a un sitio al azar y pon y a 170)"
          ],
          slides: ['s12'], app: "Dels «Recorda» fins a la «Pausa activa»: la història, les cinc targetes de «Descobreix», ordenar el guió, on va «posa punts a 0», el marcador que sempre marca 0 i el meteorit que només cau una vegada.|De los «Recuerda» hasta la «Pausa activa»: la historia, las cinco tarjetas de «Descubre», ordenar el guion, dónde va «pon puntos a 0», el marcador que siempre marca 0 y el meteorito que solo cae una vez.", org: "Individual|Individual" },
        { min: 8, t: "Reptes: tres peces noves|Retos: tres piezas nuevas", fase: 'ordinador',
          fa: "Feu la pausa activa i deixa'ls fer els tres reptes: el nivell 2, la velocitat que creix i la pluja d'estrelles. Explica que són peces que poden copiar després al seu videojoc si encaixen amb el seu document.|Haced la pausa activa y deja que hagan los tres retos: el nivel 2, la velocidad que crece y la lluvia de estrellas. Explica que son piezas que pueden copiar después en su videojuego si encajan con su documento.",
          diu: [
            "Aquesta peça la necessita el vostre videojoc? Si sí, recordeu com l'heu feta.|¿Esta pieza la necesita vuestro videojuego? Si sí, recordad cómo la habéis hecho.",
            "Nivell 2: amb quina condició canvia el fons? (punts > 2)|Nivel 2: ¿con qué condición cambia el fondo? (puntos > 2)",
            "La velocitat creix: quan sumes 1? (quan el meteorit torna a dalt)|La velocidad crece: ¿cuándo sumas 1? (cuando el meteorito vuelve arriba)",
            "Pluja d'estrelles: on va «esborra aquest clon»? (quan arriba a baix)|Lluvia de estrellas: ¿dónde va «borra este clon»? (cuando llega abajo)"
          ],
          slides: ['s13', 's14'], app: "«Pausa activa» i els tres reptes: el nivell 2, cada cop més de pressa i la pluja d'estrelles.|«Pausa activa» y los tres retos: el nivel 2, cada vez más deprisa y la lluvia de estrellas.", org: "Individual|Individual" },
        { min: 15, t: "Crea: el meu videojoc, peça a peça|Crea: mi videojuego, pieza a pieza", fase: 'crea',
          fa: "És el moment central de la sessió. Cada alumne/a obre la seva versió 1 i hi afegeix les files del document en ordre, provant-les una a una amb Comença. Deixa projectada la llista de files. Quan el videojoc tingui una variable, una regla amb «si» i almenys dos personatges programats, el poden comprovar i desar. Qui acabi pot afegir-hi extres (sons, nivells, clons).|Es el momento central de la sesión. Cada alumno/a abre su versión 1 y le añade las filas del documento en orden, probándolas una a una con Empieza. Deja proyectada la lista de filas. Cuando el videojuego tenga una variable, una regla con «si» y al menos dos personajes programados, lo pueden comprobar y guardar. Quien acabe puede añadir extras (sonidos, niveles, clones).",
          diu: [
            "Una fila, la provo. Una altra fila, la provo. I la marco al document!|Una fila, la pruebo. Otra fila, la pruebo. ¡Y la marco en el documento!",
            "Quin personatge ha de tenir aquesta regla?|¿Qué personaje tiene que tener esta regla?",
            "Ja es pot guanyar o perdre? Com?|¿Ya se puede ganar o perder? ¿Cómo?",
            "Abans de sortir, deseu-lo: la setmana vinent passarà per la sala de proves.|Antes de salir, guardadlo: la semana que viene pasará por la sala de pruebas."
          ],
          slides: ['s15', 's16'], app: "Pas «Ara, el teu videojoc!» i pas «Crea»: el meu videojoc, versió 2.|Paso «¡Ahora, tu videojuego!» y paso «Crea»: mi videojuego, versión 2.", org: "Individual|Individual" },
        { min: 2, t: "Tancament|Cierre", fase: 'tancament',
          fa: "Repassa les idees de la sessió i fes les preguntes del tiquet. Assegura't que tothom ha desat la versió 2.|Repasa las ideas de la sesión y haz las preguntas del ticket. Asegúrate de que todo el mundo ha guardado la versión 2.",
          diu: [
            "Quina peça us ha costat més? Com l'heu arreglada?|¿Qué pieza os ha costado más? ¿Cómo la habéis arreglado?",
            "Per què «posa punts a 0» va abans del «per sempre»? (perquè passi una sola vegada)|¿Por qué «pon puntos a 0» va antes del «por siempre»? (para que pase una sola vez)",
            "Teniu la versió 2 desada?|¿Tenéis la versión 2 guardada?"
          ],
          slides: ['s17'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Posa «posa punts a 0» (o «posa vides a 3») dins del «per sempre» i els números no canvien mai.|Pone «pon puntos a 0» (o «pon vidas a 3») dentro del «por siempre» y los números no cambian nunca.",
          "Que llegeixi el bucle en veu alta i compti què passa a la segona volta. On hauria d'anar el bloc perquè passi una sola vegada?|Que lea el bucle en voz alta y cuente qué pasa en la segunda vuelta. ¿Dónde debería ir el bloque para que pase una sola vez?"],
        ["Ho posa tot al protagonista, amb un guió llarguíssim que costa de llegir.|Lo pone todo en el protagonista, con un guion larguísimo que cuesta de leer.",
          "Pregunta-li de qui és cada regla: qui sap quan l'han tocat, la moneda o el protagonista? Que en passi una al personatge que toca.|Pregúntale de quién es cada regla: ¿quién sabe cuándo lo han tocado, la moneda o el protagonista? Que pase una al personaje que toca."],
        ["Afegeix moltes peces de cop i, quan falla, no sap quina és la culpable.|Añade muchas piezas de golpe y, cuando falla, no sabe cuál es la culpable.", "Que esborri l'última peça i provi si tot torna a funcionar. Després, que la torni a posar a poc a poc, provant després de cada bloc.|Que borre la última pieza y pruebe si todo vuelve a funcionar. Después, que la vuelva a poner poco a poco, probando después de cada bloque."],
        ["Els clons s'acumulen a baix de l'escenari i el videojoc va cada vegada més lent.|Los clones se acumulan abajo del escenario y el videojuego va cada vez más lento.",
          "Pregunta: què fa un clon quan arriba a baix? Recorda-li «esborra aquest clon» dins d'un «si y < −170».|Pregunta: ¿qué hace un clon cuando llega abajo? Recuérdale «borra este clon» dentro de un «si y < −170»."],
        ["L'enemic atrapa el protagonista abans que es pugui moure.|El enemigo atrapa al protagonista antes de que se pueda mover.",
          "Que provi números més petits a «mou-te» de l'enemic o que el faci començar més lluny. La setmana vinent treballarem la dificultat.|Que pruebe números más pequeños en «muévete» del enemigo o que lo haga empezar más lejos. La semana que viene trabajaremos la dificultad."],
        ["El premi no torna a aparèixer després d'agafar-lo perquè fa «amaga't» i no «ves a un lloc a l'atzar».|El premio no vuelve a aparecer después de cogerlo porque hace «escóndete» y no «ve a un sitio al azar».", "Pregunta: vols un sol premi o que n'aparegui un altre? Si vols que torni, què el pot portar a un lloc nou?|Pregunta: ¿quieres un solo premio o que aparezca otro? Si quieres que vuelva, ¿qué lo puede llevar a un sitio nuevo?"]
      ],
      diff: {
        mes: "Afegir un nivell 2 amb un altre fons i un enemic més ràpid, o una pluja de premis amb clons. Fer servir el cronòmetre per acabar el videojoc al cap de 30 segons.|Añadir un nivel 2 con otro fondo y un enemigo más rápido, o una lluvia de premios con clones. Usar el cronómetro para terminar el videojuego al cabo de 30 segundos.",
        menys: "Fer només les dues primeres peces de la llista (el premi i l'enemic) i copiar els blocs dels reptes de la sessió anterior. Tenir la fitxa de les regles a la taula com a guia. Ruta 4t: començar amb «Posa una base» (moviment, premi i enemic ja fets) i la paleta de blocs bàsics, i afegir només els punts i com es guanya.|Hacer solo las dos primeras piezas de la lista (el premio y el enemigo) y copiar los bloques de los retos de la sesión anterior. Tener la ficha de las reglas en la mesa como guía. Ruta 4.º: empezar con «Pon una base» (movimiento, premio y enemigo ya hechos) y la paleta de bloques básicos, y añadir solo los puntos y cómo se gana."
      },
      aval: {
        ticket: ["Per què «posa punts a 0» va abans del «per sempre»?|¿Por qué «pon puntos a 0» va antes del «por siempre»?",
          "Quina peça has afegit avui al teu videojoc i com l'has provada?|¿Qué pieza has añadido hoy a tu videojuego y cómo la has probado?"],
        rubric: [
          ["Inicialitzar|Inicializar", "El guió de la bandera posa variables i posicions a lloc abans del bucle.|El guion de la bandera pone variables y posiciones en su sitio antes del bucle.", "Oblida inicialitzar alguna variable o la posa dins del bucle.|Olvida inicializar alguna variable o la pone dentro del bucle."],
          ["Regles al seu lloc|Reglas en su sitio", "Reparteix les regles entre els personatges i fa servir variables i condicions.|Reparte las reglas entre los personajes y usa variables y condiciones.", "Ho posa tot en un sol personatge o necessita ajuda amb les condicions.|Lo pone todo en un solo personaje o necesita ayuda con las condiciones."],
          ["Construir peça a peça|Construir pieza a pieza", "Prova cada peça abans d'afegir-ne una altra i troba on falla.|Prueba cada pieza antes de añadir otra y encuentra dónde falla.", "Afegeix moltes peces de cop i li costa trobar l'error.|Añade muchas piezas de golpe y le cuesta encontrar el error."],
          [
            "Versió 2 desada|Versión 2 guardada",
            "El videojoc té variable, regla i dos personatges programats, i el desa.|El videojuego tiene variable, regla y dos personajes programados, y lo guarda.",
            "Al videojoc encara li falta alguna d'aquestes peces o no l'ha desat.|Al videojuego todavía le falta alguna de estas piezas o no lo ha guardado."
          ]
        ]
      },
      casa: "A casa, ensenyeu el videojoc a algú de la família (és a «Projectes») i expliqueu-li quin personatge té cada regla. Si voleu, apunteu al document les idees per a la setmana vinent.|En casa, enseñad el videojuego a alguien de la familia (está en «Proyectos») y explicadle qué personaje tiene cada regla. Si queréis, apuntad en el documento las ideas para la semana que viene.",
      slides: [
        { id: 's1', k: 'portada', t: 'Construeix-lo peça a peça|Constrúyelo pieza a pieza', x: 'Avui la versió 1 es fa gran.|Hoy la versión 1 se hace grande.',
          nota: "Que tinguin el document de disseny a la vista durant tota la sessió.|Que tengan el documento de diseño a la vista durante toda la sesión." },
        { id: 's2', k: 'repas', t: 'Recordem|Recordemos', punts: ["Les quatre peces: protagonista, objectiu, obstacle, regles.|Las cuatro piezas: protagonista, objetivo, obstáculo, reglas.", 'Cada fila: quan passa → quina variable canvia.|Cada fila: cuándo pasa → qué variable cambia.', 'El final, amb una comparació; la versió 1, petita.|El final, con una comparación; la versión 1, pequeña.'],
          nota: "Fes que un parell d'alumnes expliquin la regla principal del seu videojoc.|Haz que un par de alumnos expliquen la regla principal de su videojuego." },
        { id: 's3', k: 'pregunta', t: 'Quina és la fila següent?|¿Cuál es la fila siguiente?', x: 'Mira el teu document: quina fila convertiràs primer en blocs?|Mira tu documento: ¿qué fila convertirás primero en bloques?',
          nota: "Que marquin al document la fila que faran primer avui.|Que marquen en el documento la fila que harán primero hoy." },
        { id: 's4', k: 'anim', t: 'Del paper als blocs|Del papel a los bloques', anim: 'g8plan', x: 'Cada fila del document es converteix en uns quants blocs.|Cada fila del documento se convierte en unos cuantos bloques.',
          nota: "Fes-ho en directe amb una fila del teu document d'exemple: llegeix-la, digues quins blocs calen i quin personatge els té.|Hazlo en directo con una fila de tu documento de ejemplo: léela, di qué bloques hacen falta y qué personaje los tiene." },
        { id: 's5', k: 'anim', t: 'Cada personatge, els seus guions|Cada personaje, sus guiones', anim: 'g8who', x: 'Tots els guions comencen alhora amb la bandera.|Todos los guiones empiezan a la vez con la bandera.',
          nota: "Pregunta qui ha de tenir la regla «si toca el protagonista, punts +1»: la moneda la pot tenir, perquè és ella qui sap quan la toquen.|Pregunta quién tiene que tener la regla «si toca al protagonista, puntos +1»: la moneda la puede tener, porque es ella quien sabe cuándo la tocan." },
        { id: 's6', k: 'media', t: 'Tot a lloc en començar|Todo en su sitio al empezar', x: 'Punts a 0, vides a 3, a la sortida i visible.|Puntos a 0, vidas a 3, en la salida y visible.', media: { k: 'stage', w: { bg: 'ciutat', vars: ['punts', 'vides'], time: 5, sprites: [{ id: 'cotxe', art: 'cotxe', x: 60, y: 40, size: 70 }, { id: 'moneda', art: 'moneda', x: 140, y: -120 }] }, prog: '@cotxe flag{ setv:punts,0 setv:vides,3 goto:-160,-120 show say:"Som-hi!|¡Vamos!",1 forever{ chx:4 if:touch:moneda{ chv:punts,1 } } } @moneda flag{ forever{ next wait:0.1 } }', varNames: { punts: 'punts|puntos', vides: 'vides|vidas' } },
          nota: "Fes notar que el cotxe no comença on està dibuixat: «ves a» el porta a la sortida cada vegada.|Haz notar que el coche no empieza donde está dibujado: «ve a» lo lleva a la salida cada vez." },
        { id: 's7', k: 'concepte', t: 'El guió de la bandera del protagonista|El guion de la bandera del protagonista', punts: ['1. Posa punts a 0 i vides a 3|1. Pon puntos a 0 y vidas a 3', '2. Ves a la sortida i digues el nom|2. Ve a la salida y di el nombre', '3. Per sempre: les regles|3. Por siempre: las reglas'],
          nota: "Primer el que passa una sola vegada; després, el bucle amb el que es comprova tota l'estona.|Primero lo que pasa una sola vez; después, el bucle con lo que se comprueba todo el rato.", pic: "img/ment/lli.webp" },
        { id: 's8', k: 'media', t: 'Un nivell nou|Un nivel nuevo', x: 'Si punts > 2 → fons de nit i velocitat 8.|Si puntos > 2 → fondo de noche y velocidad 8.', media: { k: 'stage', w: W_LVL, prog: P_LVL, varNames: { punts: 'punts|puntos', velocitat: 'velocitat|velocidad' } },
          nota: "Fixeu-vos en la variable velocitat: el gat es mou «velocitat» passos. Canviar un número canvia la dificultat.|Fijaos en la variable velocidad: el gato se mueve «velocidad» pasos. Cambiar un número cambia la dificultad." },
        { id: 's9', k: 'media', t: 'Una pluja amb clons|Una lluvia con clones', x: 'Un sol meteorit amagat crea clons que cauen.|Un solo meteorito escondido crea clones que caen.', media: { k: 'stage', w: W_RAIN, prog: P_RAIN },
          nota: "Recorda que cada clon s'esborra quan arriba a baix: si no, se n'acumulen molts.|Recuerda que cada clon se borra cuando llega abajo: si no, se acumulan muchos." },
        { id: 's10', k: 'activitat', t: 'El videojoc humà|El videojuego humano', timer: 10, punts: ['Grups de 4: protagonista, moneda, enemic i marcador.|Grupos de 4: protagonista, moneda, enemigo y marcador.', 'Llegiu el vostre guió.|Leed vuestro guion.', '«Bandera verda!»: tots alhora.|«¡Bandera verde!»: todos a la vez.', "Primer sense inicialitzar, després amb la targeta d'inicialitzar.|Primero sin inicializar, después con la tarjeta de inicializar."],
          nota: "L'enemic camina sempre a poc a poc i ningú no corre: és una simulació, no una cursa.|El enemigo camina siempre despacio y nadie corre: es una simulación, no una carrera." },
        { id: 's11', k: 'pregunta', t: 'Què ha canviat?|¿Qué ha cambiado?', x: 'Per què el marcador ha de començar a 0 cada vegada?|¿Por qué el marcador tiene que empezar a 0 cada vez?',
          nota: "Connecta-ho amb el guió de la bandera: inicialitzar és fer que cada vegada comenci igual. Després, que omplin la fitxa.|Conéctalo con el guion de la bandera: inicializar es hacer que cada vez empiece igual. Después, que rellenen la ficha." },
        { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ['Obre «Construeix-lo peça a peça».|Abre «Constrúyelo pieza a pieza».', "Troba el bloc que deixa el marcador a 0.|Encuentra el bloque que deja el marcador a 0.", 'Arregla el meteorit que només cau una vegada.|Arregla el meteorito que solo cae una vez.', 'Para a la «Pausa activa».|Para en la «Pausa activa».'],
          nota: "Al meteorit, recorda que y < −170 vol dir «ja ha sortit per baix».|En el meteorito, recuerda que y < −170 quiere decir «ya ha salido por abajo»." },
        { id: 's13', k: 'repte', t: 'Tres peces noves|Tres piezas nuevas', timer: 8, punts: ['1. El nivell 2: si punts > 2, canvia el fons|1. El nivel 2: si puntos > 2, cambia el fondo', '2. Cada cop més de pressa: velocitat +1|2. Cada vez más deprisa: velocidad +1', "3. Pluja d'estrelles amb clons|3. Lluvia de estrellas con clones"],
          nota: "No cal que totes les peces vagin al seu videojoc: que triïn les que encaixen amb el document.|No hace falta que todas las piezas vayan a su videojuego: que elijan las que encajan con el documento." },
        { id: 's14', k: 'media', t: 'Cada cop més de pressa|Cada vez más deprisa', x: 'Cada vegada que el meteorit torna a dalt, velocitat +1.|Cada vez que el meteorito vuelve arriba, velocidad +1.', media: { k: 'stage', w: { bg: 'espai', vars: ['velocitat'], time: 7, sprites: [{ id: 'meteorit', art: 'meteorit', x: 0, y: 170 }] }, prog: '@meteorit flag{ setv:velocitat,5 goto:0,170 point:180 forever{ move:$velocitat if:y<-170{ gotorand sety:170 chv:velocitat,1 } } }', varNames: { velocitat: 'velocitat|velocidad' } },
          nota: "Mostra-la si molts s'encallen amb el segon repte; si no, fes-la servir per comentar la solució al final.|Muéstrala si muchos se atascan con el segundo reto; si no, úsala para comentar la solución al final." },
        { id: 's15', k: 'activitat', t: 'El meu videojoc, peça a peça|Mi videojuego, pieza a pieza', timer: 15, punts: ['1. El protagonista es mou (ja ho tens!)|1. El protagonista se mueve (¡ya lo tienes!)', '2. Toco el premi → punts +1|2. Toco el premio → puntos +1', "3. M'atrapa l'enemic → vides −1|3. Me atrapa el enemigo → vidas −1", '4. Com guanyo i com perdo|4. Cómo gano y cómo pierdo', '5. Nivell 2: què canvia|5. Nivel 2: qué cambia'],
          nota: "Deixa aquesta llista projectada. Després de cada peça, que toquin Comença i ho provin.|Deja esta lista proyectada. Después de cada pieza, que toquen Empieza y lo prueben." },
        { id: 's16', k: 'concepte', t: 'Abans de desar|Antes de guardar', punts: ['Té una variable (punts o vides).|Tiene una variable (puntos o vidas).', 'Té una regla amb «si…».|Tiene una regla con «si…».', 'Hi ha almenys dos personatges programats.|Hay al menos dos personajes programados.', "Toca Comprova i desa'l.|Toca Comprueba y guárdalo."],
          nota: "L'app ho comprova sola i els avisa si falta alguna cosa. Assegura't que tothom desa abans de sortir.|La app lo comprueba sola y les avisa si falta algo. Asegúrate de que todo el mundo guarda antes de salir.", pic: "img/ic/check.webp" },
        { id: 's17', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ['Cada personatge té els seus guions.|Cada personaje tiene sus guiones.', 'En començar, tot a lloc.|Al empezar, todo en su sitio.', 'Una peça, la provo; una altra peça…|Una pieza, la pruebo; otra pieza…'],
          nota: "Fes les preguntes del tiquet i anota qui no ha pogut desar la versió 2.|Haz las preguntas del ticket y anota quién no ha podido guardar la versión 2." }
      ],
      print: [
        { id: 'p1', t: 'Targetes del videojoc humà|Tarjetas del videojuego humano', k: 'targetes',
          intro: "Un paquet per grup de 4. Cada alumne/a agafa un paper i fa només el que diu la seva targeta quan el professor/a diu «bandera verda!».|Un paquete por grupo de 4. Cada alumno/a coge un papel y hace solo lo que dice su tarjeta cuando el profesor/a dice «¡bandera verde!».",
          items: [
            { t: 'Protagonista: camina pel rectangle i intenta tocar la moneda 🦸|Protagonista: camina por el rectángulo e intenta tocar la moneda 🦸', n: 1 },
            { t: "Moneda: si et toquen, digues «+1!» i ves a un altre lloc ⭐|Moneda: si te tocan, di «¡+1!» y ve a otro sitio ⭐", n: 1 },
            { t: "Enemic: camina a poc a poc cap al protagonista. Si el toques, digues «−1!» 👾|Enemigo: camina despacio hacia el protagonista. Si lo tocas, di «¡−1!» 👾", n: 1 },
            { t: 'Marcador: apunta els punts i les vides. Si vides = 0, crida «fi!» 📋|Marcador: apunta los puntos y las vidas. Si vidas = 0, grita «¡fin!» 📋', n: 1 },
            { t: 'Inicialitzar: punts a 0, vides a 3, tothom al seu lloc de sortida 🏁|Inicializar: puntos a 0, vidas a 3, todo el mundo en su sitio de salida 🏁', n: 1 }
          ] },
        { id: 'p2', t: 'Fitxa: de la regla als blocs|Ficha: de la regla a los bloques', k: 'fitxa',
          intro: "Per a cada regla, escriu quin personatge la té i quins blocs farà servir.|Para cada regla, escribe qué personaje la tiene y qué bloques usará.",
          items: [
            { q: "«Quan el protagonista toca la moneda, suma 1 punt i la moneda canvia de lloc.» Qui té la regla? Quins blocs?|«Cuando el protagonista toca la moneda, suma 1 punto y la moneda cambia de sitio.» ¿Quién tiene la regla? ¿Qué bloques?",
              sol: "La moneda: per sempre → si toca el protagonista → suma a punts 1 i ves a un lloc a l'atzar.|La moneda: por siempre → si toca al protagonista → suma a puntos 1 y ve a un sitio al azar." },
            { q: "«En començar, el protagonista té 3 vides i 0 punts.» On van aquests blocs?|«Al empezar, el protagonista tiene 3 vidas y 0 puntos.» ¿Dónde van estos bloques?",
              sol: "Al guió «Quan comença», abans del «per sempre»: posa vides a 3 i posa punts a 0.|En el guion «Al empezar», antes del «por siempre»: pon vidas a 3 y pon puntos a 0." },
            { q: "«Quan arribes a 5 punts, el fons es fa de nit.» Quins blocs?|«Cuando llegas a 5 puntos, el fondo se hace de noche.» ¿Qué bloques?",
              sol: "Dins del «per sempre»: si punts > 4 → canvia el fons a nit.|Dentro del «por siempre»: si puntos > 4 → cambia el fondo a noche." },
            { q: "«Cau un meteorit nou cada segon.» Quins blocs i quins guions?|«Cae un meteorito nuevo cada segundo.» ¿Qué bloques y qué guiones?",
              sol: "Al guió de la bandera: amaga't i per sempre (crea un clon de mi, espera 1). Al guió del clon: ves a l'atzar, posa y a 170, mostra't i cau; si y < −170, esborra aquest clon.|En el guion de la bandera: escóndete y por siempre (crea un clon de mí, espera 1). En el guion del clon: ve al azar, pon y a 170, muéstrate y cae; si y < −170, borra este clon." },
            { q: 'Ara una fila del teu document: qui la té i quins blocs farà servir?|Ahora una fila de tu documento: ¿quién la tiene y qué bloques usará?',
              sol: "Resposta oberta. Comproveu que la fila diu quan passa i quina variable canvia, i que la té el personatge que «s'adona» del que passa.|Respuesta abierta. Comprobad que la fila dice cuándo pasa y qué variable cambia, y que la tiene el personaje que «se da cuenta» de lo que pasa." }
          ] }
      ]
    },

    /* ---------- Sessió 3 · Proves amb dades ---------- */
    'g8-3': {
      intro: "Tercera sessió del projecte: la sala de proves. Abans de publicar, l'estudi prova cada videojoc amb una persona que no l'ha fet i en recull dades: quant dura cada partida, quants punts s'hi fan i quantes vides queden. L'alumnat aprèn a llegir aquestes dades (partides de 3 segons vol dir massa difícil; guanyar sempre en 5, massa fàcil), a ajustar un sol número cada vegada i a tornar a mesurar, i a escriure un informe de prova concret. Ho practica amb taules de dades en paper i amb tres casos a l'app (enemic massa ràpid, cotxe que surt de l'escenari, sense instruccions). Després, les parelles intercanvien ordinadors, fan tres partides del videojoc del company/a, n'omplen l'informe i cadascú desa la versió 3 amb l'ajust que indiquen les dades. Temps: uns 15 minuts sense l'app (benvinguda i teoria a la pantalla gran) i 45 seguint els passos de l'app, des de l'activitat sense pantalla fins al tancament: és el temps que hi indica la sessió.|Tercera sesión del proyecto: la sala de pruebas. Antes de publicar, el estudio prueba cada videojuego con una persona que no lo ha hecho y recoge datos: cuánto dura cada partida, cuántos puntos se hacen y cuántas vidas quedan. El alumnado aprende a leer estos datos (partidas de 3 segundos quiere decir demasiado difícil; ganar siempre en 5, demasiado fácil), a ajustar un solo número cada vez y a volver a medir, y a escribir un informe de prueba concreto. Lo practica con tablas de datos en papel y con tres casos en la app (enemigo demasiado rápido, coche que sale del escenario, sin instrucciones). Después, las parejas intercambian ordenadores, hacen tres partidas del videojuego del compañero/a, rellenan el informe y cada uno guarda la versión 3 con el ajuste que indican los datos. Tiempo: unos 15 minutos sin la app (bienvenida y teoría en la pantalla grande) y 45 siguiendo los pasos de la app, desde la actividad sin pantalla hasta el cierre: es el tiempo que indica la sesión.",
      claus: [
        "Una persona nova prova el videojoc diferent i troba bugs que l'autor/a no veu.|Una persona nueva prueba el videojuego distinto y encuentra bugs que el autor/a no ve.",
        "A cada partida s'apunten tres dades: quant dura, quants punts i quantes vides queden.|En cada partida se apuntan tres datos: cuánto dura, cuántos puntos y cuántas vidas quedan.",
        "Les dades diuen quin número cal ajustar: velocitat, vides o punts per guanyar.|Los datos dicen qué número hay que ajustar: velocidad, vidas o puntos para ganar.",
        "Un sol canvi cada vegada, i a tornar a mesurar: així saps quin canvi ha funcionat.|Un solo cambio cada vez, y a volver a medir: así sabes qué cambio ha funcionado.",
        "Un informe de prova: què ha passat (amb dades), què funciona i quin canvi proposo.|Un informe de prueba: qué ha pasado (con datos), qué funciona y qué cambio propongo."
      ],
      prev: [
        "La versió 2 del videojoc desada i el document de disseny (sessions anteriors).|La versión 2 del videojuego guardada y el documento de diseño (sesiones anteriores).",
        "Comparar la posició x amb un número i «posa x a» (unitats 4 i 5).|Comparar la posición x con un número y «pon x a» (unidades 4 y 5).",
        "Enviar i rebre missatges (unitat 3) i comptar el temps amb una variable (unitat 6).|Enviar y recibir mensajes (unidad 3) y contar el tiempo con una variable (unidad 6)."
      ],
      faq: [
        ["Què és un bug?|¿Qué es un bug?", "Un error del programa: una cosa que passa i no volies, com un cotxe que surt de l'escenari i no torna. La paraula ve de l'anglès i vol dir «bestiola».|Un error del programa: algo que pasa y no querías, como un coche que sale del escenario y no vuelve. La palabra viene del inglés y quiere decir «bicho»."],
        ["Com mesuro quant dura una partida?|¿Cómo mido cuánto dura una partida?", "Amb un rellotge o comptant segons en veu baixa des que toques la bandera fins que surt «Has guanyat!» o «Has perdut!». Si el videojoc té una variable temps, també es pot llegir al marcador.|Con un reloj o contando segundos en voz baja desde que tocas la bandera hasta que sale «¡Has ganado!» o «¡Has perdido!». Si el videojuego tiene una variable tiempo, también se puede leer en el marcador."],
        ["Quant ha de durar una partida «al punt»?|¿Cuánto tiene que durar una partida «en su punto»?", "No hi ha un número màgic, però si totes duren menys de 10 segons, gairebé segur que és massa difícil; si ningú no perd mai, massa fàcil. Les dades de tres partides ja donen una pista.|No hay un número mágico, pero si todas duran menos de 10 segundos, casi seguro que es demasiado difícil; si nadie pierde nunca, demasiado fácil. Los datos de tres partidas ya dan una pista."],
        ["He de fer tot el que diu l'informe?|¿Tengo que hacer todo lo que dice el informe?", "No. Arregla primer els bugs i, després, fes el canvi de dificultat que indiquin les dades. Les idees de gust (colors, sons) les decideixes tu.|No. Arregla primero los bugs y, después, haz el cambio de dificultad que indiquen los datos. Las ideas de gusto (colores, sonidos) las decides tú."],
        ["Per què no puc ajudar el provador/a?|¿Por qué no puedo ayudar al probador/a?", "Perquè la gent que el farà servir a la fira no et tindrà al costat. Si s'encalla, és una dada valuosa: apunta-la!|Porque la gente que lo usará en la feria no te tendrá al lado. Si se atasca, es un dato valioso: ¡apúntalo!"],
        ["L'app diu que el videojoc és igual que abans.|La app dice que el videojuego es igual que antes.", "Per desar la versió 3 cal fer-hi almenys un canvi. Tria el que indiquen les dades de l'informe.|Para guardar la versión 3 hay que hacerle al menos un cambio. Elige el que indican los datos del informe."]
      ],
      tec: [
        ["No es troba la versió anterior del videojoc.|No se encuentra la versión anterior del videojuego.", "Cada sessió obre l'última versió desada al portafoli (a «Projectes») amb el mateix perfil. Si no n'hi ha cap, l'app comença amb les peces de mostra: es pot tornar al pas de triar les peces de la sessió 1 i desar-les.|Cada sesión abre la última versión guardada en el portafolio (en «Proyectos») con el mismo perfil. Si no hay ninguna, la app empieza con las piezas de muestra: se puede volver al paso de elegir las piezas de la sesión 1 y guardarlas."],
        ["No s'ha desat el videojoc.|No se ha guardado el videojuego.", "Només es desa quan passa la comprovació i es toca «Desa-ho i continua». Si se surt abans, cal tornar a fer «Comprova».|Solo se guarda cuando pasa la comprobación y se toca «Guárdalo y continúa». Si se sale antes, hay que volver a hacer «Comprueba»."],
        ["Les fletxes del teclat no mouen el protagonista.|Las flechas del teclado no mueven al protagonista.", "Cal tocar primer l'escenari perquè la pàgina «escolti» el teclat, o fer servir els botons de fletxes de sota l'escenari (també al mòbil).|Hay que tocar primero el escenario para que la página «escuche» el teclado, o usar los botones de flechas de debajo del escenario (también en el móvil)."],
        ["A l'intercanvi, el provador/a veu el seu propi videojoc.|En el intercambio, el probador/a ve su propio videojuego.", "Es prova a l'ordinador de l'autor/a, amb la sessió de l'autor/a oberta: canvieu de cadira, no de perfil.|Se prueba en el ordenador del autor/a, con la sesión del autor/a abierta: cambiad de silla, no de perfil."],
        ["Alguna parella no pot fer l'intercanvi (algú ha faltat).|Alguna pareja no puede hacer el intercambio (alguien ha faltado).", "Fes un trio o fes tu de provador/a. També pot provar-lo algú de casa (pas «Ara, la prova de veritat»).|Haced un trío o haz tú de probador/a. También puede probarlo alguien de casa (paso «Ahora, la prueba de verdad»)."]
      ],
      seg: [
        "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
        "Informes: es parla del videojoc, no de la persona; cap comentari de rialla o de burla. Les dades no jutgen ningú: només diuen quin número cal tocar.|Informes: se habla del videojuego, no de la persona; ningún comentario de risa o de burla. Los datos no juzgan a nadie: solo dicen qué número hay que tocar.",
        "Intercanvi: es fa caminant, amb una senyal clara, i cadascú deixa la cadira neta per al company/a.|Intercambio: se hace caminando, con una señal clara, y cada uno deja la silla limpia para el compañero/a."
      ],
      extra: [
        "Fer de provador/a d'un segon videojoc i comparar les dades dels dos: quin és més difícil? Per què?|Hacer de probador/a de un segundo videojuego y comparar los datos de los dos: ¿cuál es más difícil? ¿Por qué?",
        "Afegir al propi videojoc una variable temps que compti els segons de cada partida, perquè el provador/a no hagi de comptar.|Añadir al propio videojuego una variable tiempo que cuente los segundos de cada partida, para que el probador/a no tenga que contar.",
        "Després de l'ajust, fer tres partides més i comparar les dues taules: abans i després.|Después del ajuste, hacer tres partidas más y comparar las dos tablas: antes y después."
      ],
      trans: [
        "Ve de la sessió 2: la versió 2 del videojoc, construïda fila per fila.|Viene de la sesión 2: la versión 2 del videojuego, construida fila por fila.",
        "Sessió següent: la publicació (títol, instruccions i crèdits) i l'estrena a la Fira de Videojocs.|Sesión siguiente: la publicación (título, instrucciones y créditos) y el estreno en la Feria de Videojuegos.",
        "Matemàtiques: recollir dades en una taula, comparar-les i treure'n conclusions; valors: donar i rebre crítiques amb respecte.|Matemáticas: recoger datos en una tabla, compararlos y sacar conclusiones; valores: dar y recibir críticas con respeto."
      ],
      obj: [
        "L'alumne/a prova el videojoc d'un company/a sense ajuda i en recull dades de tres partides (temps, punts i vides).|El alumno/a prueba el videojuego de un compañero/a sin ayuda y recoge datos de tres partidas (tiempo, puntos y vidas).",
        "L'alumne/a interpreta les dades per decidir si el videojoc és massa fàcil, massa difícil o al punt, i quin número cal ajustar.|El alumno/a interpreta los datos para decidir si el videojuego es demasiado fácil, demasiado difícil o en su punto, y qué número hay que ajustar.",
        "L'alumne/a escriu un informe de prova concret i respectuós (dades, què funciona i un canvi).|El alumno/a escribe un informe de prueba concreto y respetuoso (datos, qué funciona y un cambio).",
        "L'alumne/a arregla bugs típics, ajusta un sol número cada vegada, ho torna a provar i desa una versió millorada.|El alumno/a arregla bugs típicos, ajusta un solo número cada vez, lo vuelve a probar y guarda una versión mejorada."
      ],
      comp: [
        "Competència digital (CD5): avaluar i millorar un producte digital a partir de proves amb usuaris|Competencia digital (CD5): evaluar y mejorar un producto digital a partir de pruebas con usuarios",
        "Pensament computacional: depuració, proves i ajust de paràmetres d'un en un|Pensamiento computacional: depuración, pruebas y ajuste de parámetros de uno en uno",
        "Matemàtiques (estadística): recollida de dades, taules i interpretació|Matemáticas (estadística): recogida de datos, tablas e interpretación",
        "Competència personal i social: donar i rebre informes amb respecte|Competencia personal y social: dar y recibir informes con respeto"
      ],
      vocab: [
        ["Provador/a|Probador/a", "La persona que fa partides d'un videojoc que no ha fet i n'apunta les dades.|La persona que hace partidas de un videojuego que no ha hecho y apunta los datos."],
        ["Bug|Bug", "Un error del programa: fa una cosa que no volíem.|Un error del programa: hace algo que no queríamos."],
        ["Dades|Datos", "Els números que s'apunten a cada partida: temps, punts i vides.|Los números que se apuntan en cada partida: tiempo, puntos y vidas."],
        ["Ajustar|Ajustar", "Canviar un sol número (velocitat, vides…) per fer el videojoc més just, i tornar-ho a mesurar.|Cambiar un solo número (velocidad, vidas…) para hacer el videojuego más justo, y volver a medirlo."],
        ["Informe de prova|Informe de prueba", "El que escriu el provador/a: què ha passat amb dades, què funciona i quin canvi proposa.|Lo que escribe el probador/a: qué ha pasado con datos, qué funciona y qué cambio propone."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Proves amb dades»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Pruebas con datos»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "El document de disseny de cada alumne/a|El documento de diseño de cada alumno/a",
          "Un rellotge o cronòmetre per parella (el de la classe també serveix)|Un reloj o cronómetro por pareja (el de la clase también sirve)"
        ],
        imprimir: ["Fitxa: llegeix les dades|Ficha: lee los datos", "Informe de prova|Informe de prueba"],
        prep: [
          "Fer les parelles de provadors abans de la classe (millor si no són els companys de taula habituals).|Hacer las parejas de probadores antes de la clase (mejor si no son los compañeros de mesa habituales).",
          "Imprimir una fitxa de dades per parella i un informe de prova per alumne/a.|Imprimir una ficha de datos por pareja y un informe de prueba por alumno/a.",
          "Comprovar que tothom té desada la versió 2 del videojoc (a «Projectes»).|Comprobar que todo el mundo tiene guardada la versión 2 del videojuego (en «Proyectos»).",
          "Preparar una senyal clara per a l'intercanvi d'ordinadors (per exemple, una campaneta o una música curta).|Preparar una señal clara para el intercambio de ordenadores (por ejemplo, una campanita o una música corta)."
        ]
      },
      plan: [
        { min: 4, t: "Benvinguda: la sala de proves|Bienvenida: la sala de pruebas", fase: 'inici',
          fa: "Explica que abans de publicar, tots els videojocs de l'estudi passen per la sala de proves i que avui faran de provadors/es amb dades. Contrasta dues respostes: «em sembla difícil» i «les tres partides han durat 3 segons». Quina ajuda més l'autor/a?|Explica que antes de publicar, todos los videojuegos del estudio pasan por la sala de pruebas y que hoy harán de probadores/as con datos. Contrasta dos respuestas: «me parece difícil» y «las tres partidas han durado 3 segundos». ¿Cuál ayuda más al autor/a?",
          diu: [
            "Qui coneix millor el vostre videojoc? (jo) I qui hi trobarà coses noves? (algú que no l'ha vist mai)|¿Quién conoce mejor vuestro videojuego? (yo) ¿Y quién le encontrará cosas nuevas? (alguien que no lo ha visto nunca)",
            "«Em sembla difícil» o «ha durat 3 segons»: amb quina sabeu quin número cal canviar?|«Me parece difícil» o «ha durado 3 segundos»: ¿con cuál sabéis qué número hay que cambiar?",
            "Avui tots sereu autors/es i provadors/es.|Hoy todos seréis autores/as y probadores/as."
          ],
          slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 11, t: "Ulls nous, dades i informe|Ojos nuevos, datos e informe", fase: 'teoria',
          fa: "Amb la demo del cotxe, mostra un bug que l'autor/a no veu perquè sempre prova igual. Amb la taula de dades, llegiu juntos tres partides i decidiu què indiquen. Explica la regla d'or (un sol canvi cada vegada i tornar a mesurar), com és un informe útil i el truc d'espiar una variable amb «digues».|Con la demo del coche, muestra un bug que el autor/a no ve porque siempre prueba igual. Con la tabla de datos, leed juntos tres partidas y decidid qué indican. Explica la regla de oro (un solo cambio cada vez y volver a medir), cómo es un informe útil y el truco de espiar una variable con «di».",
          diu: [
            "El cotxe se'n va i no torna: és un bug o és el que volíem? (un bug)|El coche se va y no vuelve: ¿es un bug o es lo que queríamos? (un bug)",
            "Partides de 3, 4 i 2 segons i 0 punts: massa fàcil o massa difícil? Quin número tocaríeu?|Partidas de 3, 4 y 2 segundos y 0 puntos: ¿demasiado fácil o demasiado difícil? ¿Qué número tocaríais?",
            "Si canvio la velocitat i les vides alhora i millora, quin canvi ha funcionat? (no ho sé: per això, d'un en un)|Si cambio la velocidad y las vidas a la vez y mejora, ¿qué cambio ha funcionado? (no lo sé: por eso, de uno en uno)",
            "«És avorrit» ajuda l'autor/a? Com ho diríeu amb dades?|«Es aburrido», ¿ayuda al autor/a? ¿Cómo lo diríais con datos?"
          ],
          slides: ['s3', 's4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Desconnectat: la taula de proves|Desconectado: la tabla de pruebas", fase: 'desconnectat',
          fa: "En parelles, amb la fitxa, llegiu les taules de proves de quatre videojocs inventats. Per a cada un, la parella decideix si és massa fàcil, massa difícil, al punt o si té un bug, tria un sol número per canviar (o el bloc que falta) i prediu com canviaran les dades. Comenteu-ne dos en veu alta.|Por parejas, con la ficha, leed las tablas de pruebas de cuatro videojuegos inventados. Para cada uno, la pareja decide si es demasiado fácil, demasiado difícil, en su punto o si tiene un bug, elige un solo número para cambiar (o el bloque que falta) y predice cómo cambiarán los datos. Comentad dos en voz alta.",
          diu: [
            "Mireu la columna del temps: què diu de la dificultat?|Mirad la columna del tiempo: ¿qué dice de la dificultad?",
            "És un problema de dificultat o un bug? Com ho sabeu?|¿Es un problema de dificultad o un bug? ¿Cómo lo sabéis?",
            "Quin número canviaríeu i cap a on: més gran o més petit?|¿Qué número cambiaríais y hacia dónde: más grande o más pequeño?",
            "Després del canvi, com seran les dades noves? (partides més llargues, més punts…)|Después del cambio, ¿cómo serán los datos nuevos? (partidas más largas, más puntos…)"
          ],
          slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles|Por parejas" },
        { min: 15, t: "A l'ordinador: proves i ajustos|En el ordenador: pruebas y ajustes", fase: 'ordinador',
          fa: "Cada alumne/a fa els passos fins als dos reptes de bugs, inclosa la pausa activa. A «Pluja de meteorits», que facin tres partides i en comptin els segons abans de respondre. Al cranc, insisteix que canviïn només un número i que ho tornin a provar.|Cada alumno/a hace los pasos hasta los dos retos de bugs, incluida la pausa activa. En «Lluvia de meteoritos», que hagan tres partidas y cuenten los segundos antes de responder. En el cangrejo, insiste en que cambien solo un número y que lo vuelvan a probar.",
          diu: [
            "Quant han durat les vostres partides a «Pluja de meteorits»? Què indiquen?|¿Cuánto han durado vuestras partidas en «Lluvia de meteoritos»? ¿Qué indican?",
            "Quin número fa que el cranc vagi tan de pressa? (el 9 del «mou-te»)|¿Qué número hace que el cangrejo vaya tan deprisa? (el 9 del «muévete»)",
            "Quina x té el cotxe quan arriba a la vora? I a l'altra? (uns 200 i -200)|¿Qué x tiene el coche cuando llega al borde? ¿Y en el otro? (unos 200 y -200)"
          ],
          slides: ['s11', 's12'], app: "Dels «Recorda» fins als dos reptes: la història, les cinc targetes de «Descobreix», l'informe que ajuda més, ordenar la sessió de proves, «Pluja de meteorits», què diuen les dades, el cranc massa ràpid, la pausa activa, el cotxe que surt de l'escenari i les instruccions.|De los «Recuerda» hasta los dos retos: la historia, las cinco tarjetas de «Descubre», el informe que ayuda más, ordenar la sesión de pruebas, «Lluvia de meteoritos», qué dicen los datos, el cangrejo demasiado rápido, la pausa activa, el coche que sale del escenario y las instrucciones.", org: "Individual|Individual" },
        { min: 17, t: "Crea: la prova de veritat i la versió 3|Crea: la prueba de verdad y la versión 3", fase: 'crea',
          fa: "Quan tothom arribi al pas «Ara, la prova de veritat», fes la senyal: les parelles intercanvien ordinadors. L'autor/a llegeix només les instruccions i calla. El provador/a fa tres partides, apunta a l'informe de paper el temps, els punts i les vides de cadascuna, i després omple l'informe de l'app. Abans de tornar, li dona el paper a l'autor/a i li explica en una frase quin número canviaria. Cada autor/a fa la versió 3: primer els bugs, després un sol número, i ho torna a provar.|Cuando todo el mundo llegue al paso «Ahora, la prueba de verdad», haz la señal: las parejas intercambian ordenadores. El autor/a lee solo las instrucciones y calla. El probador/a hace tres partidas, apunta en el informe de papel el tiempo, los puntos y las vidas de cada una, y después rellena el informe de la app. Antes de volver, le da el papel al autor/a y le explica en una frase qué número cambiaría. Cada autor/a hace la versión 3: primero los bugs, después un solo número, y lo vuelve a probar.",
          diu: [
            "Autors/es: llegiu les instruccions i calleu. Apunteu on s'encalla!|Autores/as: leed las instrucciones y callad. ¡Apuntad dónde se atasca!",
            "Provadors/es: tres partides, i de cada una, temps, punts i vides.|Probadores/as: tres partidas, y de cada una, tiempo, puntos y vidas.",
            "Quin número canviaries, segons les dades? Per què?|¿Qué número cambiarías, según los datos? ¿Por qué?",
            "Un sol canvi i torneu a mesurar: les partides duren ara el que volíeu?|Un solo cambio y volved a medir: ¿las partidas duran ahora lo que queríais?"
          ],
          slides: ['s13', 's14', 's15', 's16'], app: "«Ara, la prova de veritat», el videojoc del company/a (pas per al provador/a), l'informe de prova, «L'informe, en mà» i el pas «Crea»: el meu videojoc, versió 3.|«Ahora, la prueba de verdad», el videojuego del compañero/a (paso para el probador/a), el informe de prueba, «El informe, en mano» y el paso «Crea»: mi videojuego, versión 3.", org: "Per parelles i després individual|Por parejas y después individual" },
        { min: 3, t: "Tancament|Cierre", fase: 'tancament',
          fa: "Pregunta quin número ha canviat cadascú i què han dit les dades noves, i recull els informes de paper a les carpetes.|Pregunta qué número ha cambiado cada uno y qué han dicho los datos nuevos, y recoge los informes de papel en las carpetas.",
          diu: [
            "Quines dades us ha donat el provador/a? Què indicaven?|¿Qué datos os ha dado el probador/a? ¿Qué indicaban?",
            "Quin número heu canviat? Com han quedat les partides després?|¿Qué número habéis cambiado? ¿Cómo han quedado las partidas después?",
            "La setmana vinent publiquem: què us falta (títol, instruccions, crèdits)?|La semana que viene publicamos: ¿qué os falta (título, instrucciones, créditos)?"
          ],
          slides: ['s17'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["L'autor/a explica com es fa o agafa el ratolí al provador/a.|El autor/a explica cómo se hace o le coge el ratón al probador/a.",
          "Recorda la regla: l'autor/a només llegeix les instruccions. Si el provador/a s'encalla, és una dada valuosa: que l'apunti!|Recuerda la regla: el autor/a solo lee las instrucciones. Si el probador/a se atasca, es un dato valioso: ¡que lo apunte!"],
        ["L'informe només diu impressions («està bé», «és difícil»), sense dades.|El informe solo dice impresiones («está bien», «es difícil»), sin datos.",
          "Pregunta: quant ha durat cada partida? Quants punts has fet? Amb aquests números, què proposaries canviar?|Pregunta: ¿cuánto ha durado cada partida? ¿Cuántos puntos has hecho? Con estos números, ¿qué propondrías cambiar?"],
        ["Canvia tres números alhora i després no sap quin ha funcionat.|Cambia tres números a la vez y después no sabe cuál ha funcionado.",
          "Que torni a l'estat anterior en dos dels tres números i en provi només un. Després, que torni a mesurar i compari les dades.|Que vuelva al estado anterior en dos de los tres números y pruebe solo uno. Después, que vuelva a medir y compare los datos."],
        ["Per fer-lo més fàcil, treu l'enemic o el deixa quiet.|Para hacerlo más fácil, quita el enemigo o lo deja quieto.",
          "Sense obstacle no és un videojoc. Que provi de canviar un número: més lent, més vides o menys punts per guanyar.|Sin obstáculo no es un videojuego. Que pruebe a cambiar un número: más lento, más vidas o menos puntos para ganar."],
        ["Al repte del cotxe, només arregla una vora.|En el reto del coche, solo arregla un borde.",
          "Que toqui Comprova i miri què passa quan el cotxe va cap a l'esquerra. Quin número té la x a l'altra vora?|Que toque Comprueba y mire qué pasa cuando el coche va hacia la izquierda. ¿Qué número tiene la x en el otro borde?"],
        ["Es pren malament l'informe i no vol canviar res.|Se toma mal el informe y no quiere cambiar nada.", "Recorda-li que les dades parlen del videojoc, no d'ell o ella, i que decideix quin canvi fa. Que en triï un de petit, un sol número.|Recuérdale que los datos hablan del videojuego, no de él o ella, y que decide qué cambio hace. Que elija uno pequeño, un solo número."]
      ],
      diff: {
        mes: "Fer de provador/a d'un segon videojoc i comparar les dues taules. Afegir al propi videojoc una variable temps que compti els segons de cada partida i, després de l'ajust, fer tres partides més per comparar abans i després.|Hacer de probador/a de un segundo videojuego y comparar las dos tablas. Añadir al propio videojuego una variable tiempo que cuente los segundos de cada partida y, después del ajuste, hacer tres partidas más para comparar antes y después.",
        menys: "A la millora, fer un sol canvi: el número que l'informe indica, preferiblement la velocitat de l'enemic o les vides. A la fitxa de dades, fer els dos primers casos amb el professor/a. Ruta 4t: treballar amb la paleta de blocs bàsics (15 blocs) i fer un sol canvi de número.|En la mejora, hacer un solo cambio: el número que el informe indica, preferiblemente la velocidad del enemigo o las vidas. En la ficha de datos, hacer los dos primeros casos con el profesor/a. Ruta 4.º: trabajar con la paleta de bloques básicos (15 bloques) y hacer un solo cambio de número."
      },
      aval: {
        ticket: ["Digues les dades d'una partida que has provat i què indicaven.|Di los datos de una partida que has probado y qué indicaban.",
          "Quin número has canviat al teu videojoc i per què?|¿Qué número has cambiado en tu videojuego y por qué?"],
        rubric: [
          ["Provar amb dades|Probar con datos", "Fa tres partides sense ajuda i n'apunta temps, punts i vides.|Hace tres partidas sin ayuda y apunta tiempo, puntos y vidas.", "Prova el videojoc, però no n'apunta les dades o en falten.|Prueba el videojuego, pero no apunta los datos o faltan."],
          ["Interpretar|Interpretar", "Relaciona les dades amb la dificultat i tria el número que cal ajustar.|Relaciona los datos con la dificultad y elige el número que hay que ajustar.", "Té les dades, però no en treu cap conclusió.|Tiene los datos, pero no saca ninguna conclusión."],
          ["Ajustar i tornar a mesurar|Ajustar y volver a medir", "Fa un sol canvi justificat, ho torna a provar i el videojoc continua funcionant.|Hace un solo cambio justificado, lo vuelve a probar y el videojuego sigue funcionando.", "Fa diversos canvis alhora o no ho torna a provar.|Hace varios cambios a la vez o no lo vuelve a probar."],
          [
            "Informe respectuós|Informe respetuoso",
            "L'informe té dades, una cosa que funciona i una proposta concreta; rep el del company/a sense justificar-se.|El informe tiene datos, algo que funciona y una propuesta concreta; recibe el del compañero/a sin justificarse.",
            "L'informe és vague o discuteix el que rep.|El informe es vago o discute lo que recibe."
          ]
        ]
      },
      casa: "A casa, demaneu a algú de la família que faci tres partides del videojoc sense explicar-li res més que les instruccions. Apunteu quant dura cada partida i quants punts fa, i porteu les dades a la sessió de publicació.|En casa, pedid a alguien de la familia que haga tres partidas del videojuego sin explicarle nada más que las instrucciones. Apuntad cuánto dura cada partida y cuántos puntos hace, y traed los datos a la sesión de publicación.",
      slides: [
        { id: 's1', k: 'portada', t: 'Proves amb dades|Pruebas con datos', x: 'Avui sereu provadors/es de videojocs, amb rellotge i taula.|Hoy seréis probadores/as de videojuegos, con reloj y tabla.',
          nota: "Explica que el videojoc de cadascú el provarà un company/a, que en recollirà dades, i que després s'ajustarà.|Explica que el videojuego de cada uno lo probará un compañero/a, que recogerá datos, y que después se ajustará." },
        { id: 's2', k: 'pregunta', t: 'Com saps si és massa difícil?|¿Cómo sabes si es demasiado difícil?', x: "«Em sembla difícil» o «les tres partides han durat 3 segons»: quina resposta ajuda més?|«Me parece difícil» o «las tres partidas han durado 3 segundos»: ¿qué respuesta ayuda más?",
          nota: "Recull respostes. La idea clau: una impressió no diu quin número canviar; una dada, sí.|Recoge respuestas. La idea clave: una impresión no dice qué número cambiar; un dato, sí." },
        { id: 's3', k: 'media', t: 'Ulls nous troben bugs|Ojos nuevos encuentran bugs', x: "El cotxe se'n va de l'escenari i ja no torna.|El coche se va del escenario y ya no vuelve.", media: { k: 'stage', w: W_EDGE, prog: P_EDGE },
          nota: "Pregunta com ho arreglarien: un «si x > 200, posa x a 200». És un dels reptes d'avui.|Pregunta cómo lo arreglarían: un «si x > 200, pon x a 200». Es uno de los retos de hoy." },
        { id: 's4', k: 'anim', t: 'Mesura cada partida|Mide cada partida', anim: 'g8data', x: 'Temps, punts i vides de cada partida.|Tiempo, puntos y vidas de cada partida.',
          nota: "Llegiu la taula en veu alta. Pregunta què passaria amb «mou-te 4»: les partides durarien més.|Leed la tabla en voz alta. Pregunta qué pasaría con «muévete 4»: las partidas durarían más." },
        { id: 's5', k: 'anim', t: 'Un número cada vegada|Un número cada vez', anim: 'g8tune', x: 'Canvia un sol número i torna a mesurar.|Cambia un solo número y vuelve a medir.',
          nota: "Fes una llista a la pissarra dels números que es poden ajustar: velocitat, vides, punts per guanyar, espera entre clons.|Haz una lista en la pizarra de los números que se pueden ajustar: velocidad, vidas, puntos para ganar, espera entre clones." },
        { id: 's6', k: 'anim', t: "L'informe de prova|El informe de prueba", anim: 'g8feedback', x: 'Dades + què funciona + un canvi concret.|Datos + qué funciona + un cambio concreto.',
          nota: "Practica-ho: digues «És avorrit» i demana a la classe que ho converteixi en un informe amb dades.|Practícalo: di «Es aburrido» y pide a la clase que lo convierta en un informe con datos." },
        { id: 's7', k: 'media', t: 'Espia una variable|Espía una variable', x: 'El gat diu els punts tota l\'estona.|El gato dice los puntos todo el rato.', media: { k: 'stage', w: W_DEMO, prog: '@gat flag{ setv:punts,0 forever{ pointto:moneda move:4 say:$punts } } @moneda flag{ forever{ if:touch:gat{ chv:punts,1 sound:moneda gotorand } } }', varNames: { punts: 'punts|puntos' } },
          nota: "És un aparell de mesura dins del programa: quan ja s'ha trobat el bug, es treu el bloc.|Es un aparato de medida dentro del programa: cuando ya se ha encontrado el bug, se quita el bloque." },
        { id: 's8', k: 'concepte', t: 'Les regles de la sala de proves|Las reglas de la sala de pruebas', punts: ["L'autor/a llegeix només les instruccions.|El autor/a lee solo las instrucciones.", 'El provador/a fa tres partides sol/a.|El probador/a hace tres partidas solo/a.', "De cada partida: temps, punts i vides.|De cada partida: tiempo, puntos y vidas.", "Informe: dades, què funciona i un canvi.|Informe: datos, qué funciona y un cambio."],
          nota: "Deixa clar el pacte abans de començar: tothom serà autor/a i provador/a, i es parla del videojoc, no de la persona.|Deja claro el pacto antes de empezar: todo el mundo será autor/a y probador/a, y se habla del videojuego, no de la persona.", pic: "img/ic/good.webp" },
        { id: 's9', k: 'activitat', t: 'La taula de proves|La tabla de pruebas', timer: 10, punts: ["Llegiu la taula de cada videojoc.|Leed la tabla de cada videojuego.", 'Massa fàcil, massa difícil, al punt o bug?|¿Demasiado fácil, demasiado difícil, en su punto o bug?', 'Un sol número per canviar (o el bloc que falta).|Un solo número para cambiar (o el bloque que falta).', 'Com seran les dades noves?|¿Cómo serán los datos nuevos?'],
          nota: "Si una parella acaba aviat, que inventi una taula de proves per a la parella del costat.|Si una pareja acaba pronto, que invente una tabla de pruebas para la pareja de al lado." },
        { id: 's10', k: 'pregunta', t: 'Quin número canviaries?|¿Qué número cambiarías?', x: 'Quins casos s\'arreglaven amb un número i quins necessitaven un bloc?|¿Qué casos se arreglaban con un número y cuáles necesitaban un bloque?',
          nota: "Corregiu-ne dos en veu alta. Els de dificultat solen ser un número; els bugs, sovint un bloc que falta.|Corregid dos en voz alta. Los de dificultad suelen ser un número; los bugs, a menudo un bloque que falta." },
        { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ['Obre «Proves amb dades».|Abre «Pruebas con datos».', "Fes tres partides de «Pluja de meteorits» i compta'n els segons.|Haz tres partidas de «Lluvia de meteoritos» y cuenta sus segundos.", 'Arregla el cranc, el cotxe i les instruccions.|Arregla el cangrejo, el coche y las instrucciones.', "Para a «Ara, la prova de veritat».|Para en «Ahora, la prueba de verdad»."],
          nota: "Que ningú no passi del pas «Ara, la prova de veritat» fins que no facis la senyal.|Que nadie pase del paso «Ahora, la prueba de verdad» hasta que no hagas la señal." },
        { id: 's12', k: 'repte', t: 'Tres informes, tres arreglos|Tres informes, tres arreglos', punts: ['1. El cranc atrapa el gat en 2 segons: ajusta la velocitat.|1. El cangrejo atrapa al gato en 2 segundos: ajusta la velocidad.', "2. El cotxe surt de l'escenari: dues regles amb x.|2. El coche sale del escenario: dos reglas con x.", '3. No sabia què havia de fer: instruccions i missatge.|3. No sabía qué tenía que hacer: instrucciones y mensaje.'],
          nota: "Són els tres casos més habituals: segurament en trobaran algun al videojoc del company/a.|Son los tres casos más habituales: seguramente encontrarán alguno en el videojuego del compañero/a." },
        { id: 's13', k: 'activitat', t: 'La prova de veritat|La prueba de verdad', timer: 8, punts: ["Intercanvieu els ordinadors.|Intercambiad los ordenadores.", "L'autor/a llegeix les instruccions i calla.|El autor/a lee las instrucciones y calla.", 'Tres partides: temps, punts i vides al paper.|Tres partidas: tiempo, puntos y vidas en el papel.', "Omple l'informe de l'app.|Rellena el informe de la app."],
          nota: "Fes la senyal i controla el temps. Passa per les parelles i recorda als autors/es que només poden mirar i apuntar.|Haz la señal y controla el tiempo. Pasa por las parejas y recuerda a los autores/as que solo pueden mirar y apuntar." },
        { id: 's14', k: 'activitat', t: "L'informe, en mà|El informe, en mano", punts: ["Provador/a: «Les partides han durat…»|Probador/a: «Las partidas han durado…»", "Provador/a: «Funciona… Canviaria…»|Probador/a: «Funciona… Cambiaría…»", "Autor/a: «Gràcies!»|Autor/a: «¡Gracias!»"],
          nota: "Que l'informe es doni mirant-se a la cara. L'autor/a no s'ha de justificar: escolta, agafa el paper i dona les gràcies.|Que el informe se dé mirándose a la cara. El autor/a no se tiene que justificar: escucha, coge el papel y da las gracias." },
        { id: 's15', k: 'concepte', t: 'Un canvi cada vegada|Un cambio cada vez', punts: ['Primer, arregla els bugs.|Primero, arregla los bugs.', 'Després, canvia el número que indiquen les dades.|Después, cambia el número que indican los datos.', 'Torna a fer una partida: ha millorat?|Vuelve a hacer una partida: ¿ha mejorado?'],
          nota: "No cal fer-ho tot: un canvi ben mesurat val més que molts a cegues.|No hace falta hacerlo todo: un cambio bien medido vale más que muchos a ciegas.", pic: "img/ic/wrench.webp" },
        { id: 's16', k: 'activitat', t: 'La versió 3|La versión 3', timer: 10, punts: ['Torna al teu lloc.|Vuelve a tu sitio.', "Llegeix l'informe i les dades.|Lee el informe y los datos.", "Fes el canvi i torna-ho a provar.|Haz el cambio y vuelve a probarlo.", "Comprova i desa la versió 3.|Comprueba y guarda la versión 3."],
          nota: "L'app avisa si el videojoc és igual que la versió anterior: cal fer-hi almenys un canvi.|La app avisa si el videojuego es igual que la versión anterior: hay que hacerle al menos un cambio." },
        { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Les dades d'una partida i què indicaven.|Los datos de una partida y qué indicaban.", 'El número que has canviat i per què.|El número que has cambiado y por qué.'],
          nota: "Recull els informes a la carpeta de cada autor/a: els faran servir a l'estrena per explicar el canvi.|Recoge los informes en la carpeta de cada autor/a: los usarán en el estreno para explicar el cambio." }
      ],
      print: [
        { id: 'p1', t: 'Fitxa: llegeix les dades|Ficha: lee los datos', k: 'fitxa',
          intro: "Cada videojoc té la taula de tres partides i el número important del seu guió. Decidiu què passa i quin canvi faríeu (un de sol).|Cada videojuego tiene la tabla de tres partidas y el número importante de su guion. Decidid qué pasa y qué cambio haríais (uno solo).",
          items: [
            { q: "«El peix i el cranc» · partides: 3 s, 2 s, 4 s · punts: 0, 1, 0 · el cranc fa «mou-te 10».|«El pez y el cangrejo» · partidas: 3 s, 2 s, 4 s · puntos: 0, 1, 0 · el cangrejo hace «muévete 10».",
              sol: "Massa difícil: el cranc és massa ràpid. Canviar «mou-te 10» per «mou-te 4»; les partides duraran més i hi haurà més punts.|Demasiado difícil: el cangrejo es demasiado rápido. Cambiar «muévete 10» por «muévete 4»; las partidas durarán más y habrá más puntos." },
            { q: "«Estrelles al cel» · partides: 5 s, 4 s, 6 s · totes guanyades · regla: si punts > 1 → «Has guanyat!».|«Estrellas en el cielo» · partidas: 5 s, 4 s, 6 s · todas ganadas · regla: si puntos > 1 → «¡Has ganado!».",
              sol: "Massa fàcil: amb 2 punts ja es guanya. Canviar a «si punts > 9»; les partides duraran més.|Demasiado fácil: con 2 puntos ya se gana. Cambiar a «si puntos > 9»; las partidas durarán más." },
            { q: "«La nau valenta» · partides: 40 s, 35 s, 50 s · de vegades guanya i de vegades perd.|«La nave valiente» · partidas: 40 s, 35 s, 50 s · a veces gana y a veces pierde.",
              sol: "Al punt: no cal tocar cap número. Si de cas, millorar les instruccions o el final.|En su punto: no hace falta tocar ningún número. Si acaso, mejorar las instrucciones o el final." },
            { q: "«La poma golafre» · partida 1: 3 vides → 0 vides en 1 segon, d'un sol xoc · guió: per sempre → si toca l'enemic → vides −1.|«La manzana glotona» · partida 1: 3 vidas → 0 vidas en 1 segundo, de un solo choque · guion: por siempre → si toca al enemigo → vidas −1.",
              sol: "Bug, no dificultat: mentre es toquen, cada volta resta una vida. Cal afegir «espera 1 segons» (o tornar a la sortida) després de restar la vida.|Bug, no dificultad: mientras se tocan, cada vuelta resta una vida. Hay que añadir «espera 1 segundos» (o volver a la salida) después de restar la vida." }
          ] },
        { id: 'p2', t: 'Informe de prova|Informe de prueba', k: 'fitxa',
          intro: "Omple aquest full mentre fas les partides del videojoc del teu company/a. Després, dona'l a l'autor/a.|Rellena esta hoja mientras haces las partidas del videojuego de tu compañero/a. Después, dáselo al autor/a.",
          items: [
            { q: "Videojoc i autor/a:|Videojuego y autor/a:", sol: 'Resposta oberta.|Respuesta abierta.' },
            { q: "Partida 1 · temps: ___ s · punts: ___ · vides al final: ___ · com acaba: ___|Partida 1 · tiempo: ___ s · puntos: ___ · vidas al final: ___ · cómo acaba: ___", sol: 'Resposta oberta: números de veritat.|Respuesta abierta: números de verdad.' },
            { q: "Partida 2 · temps: ___ s · punts: ___ · vides al final: ___ · com acaba: ___|Partida 2 · tiempo: ___ s · puntos: ___ · vidas al final: ___ · cómo acaba: ___", sol: 'Resposta oberta.|Respuesta abierta.' },
            { q: "Partida 3 · temps: ___ s · punts: ___ · vides al final: ___ · com acaba: ___|Partida 3 · tiempo: ___ s · puntos: ___ · vidas al final: ___ · cómo acaba: ___", sol: 'Resposta oberta.|Respuesta abierta.' },
            { q: "Bugs que he trobat (què passava i quan):|Bugs que he encontrado (qué pasaba y cuándo):", sol: "Resposta oberta: ha de ser concreta («quan toco la vora, el gat desapareix»).|Respuesta abierta: tiene que ser concreta («cuando toco el borde, el gato desaparece»)." },
            { q: "Què funciona bé · i el número que canviaria (i cap a on):|Qué funciona bien · y el número que cambiaría (y hacia dónde):", sol: "Resposta oberta: una cosa concreta que funciona i un sol número, justificat amb les dades.|Respuesta abierta: algo concreto que funciona y un solo número, justificado con los datos." }
          ] }
      ]
    },

    /* ---------- Sessió 4 · Publicació i estrena ---------- */
    'g8-4': {
      intro: "Última sessió del curs: l'estudi publica els seus videojocs a la Fira de Videojocs. Publicar vol dir deixar-lo a punt per a algú que no et coneix: una pantalla de títol amb instruccions (controls i objectiu), una fitxa de publicació (títol, de què va, com es guanya i es perd, crèdits i versió) i una estrena on l'autor/a explica una fila del document de disseny i un canvi que va fer gràcies a les dades de les proves. L'alumnat omple la fitxa en paper, fa uns reptes de repàs (missatges i animació), desa la versió per publicar i l'estrena al projector perquè algú del públic en faci una partida. Acaba amb els diplomes. Prioritza que tothom publiqui i estreni, encara que sigui en grups petits, i celebra el procés tant com el resultat. Temps: uns 15 minuts sense l'app (benvinguda i teoria a la pantalla gran) i 45 seguint els passos de l'app, des de l'activitat sense pantalla fins al tancament: és el temps que hi indica la sessió.|Última sesión del curso: el estudio publica sus videojuegos en la Feria de Videojuegos. Publicar quiere decir dejarlo a punto para alguien que no te conoce: una pantalla de título con instrucciones (controles y objetivo), una ficha de publicación (título, de qué va, cómo se gana y se pierde, créditos y versión) y un estreno donde el autor/a explica una fila del documento de diseño y un cambio que hizo gracias a los datos de las pruebas. El alumnado rellena la ficha en papel, hace unos retos de repaso (mensajes y animación), guarda la versión para publicar y la estrena en el proyector para que alguien del público haga una partida. Termina con los diplomas. Prioriza que todo el mundo publique y estrene, aunque sea en grupos pequeños, y celebra el proceso tanto como el resultado. Tiempo: unos 15 minutos sin la app (bienvenida y teoría en la pantalla grande) y 45 siguiendo los pasos de la app, desde la actividad sin pantalla hasta el cierre: es el tiempo que indica la sesión.",
      claus: [
        "Publicar és deixar el videojoc a punt per a algú que no et coneix.|Publicar es dejar el videojuego a punto para alguien que no te conoce.",
        "La pantalla de títol diu el nom i les instruccions (controls i objectiu) i un missatge posa la partida en marxa.|La pantalla de título dice el nombre y las instrucciones (controles y objetivo) y un mensaje pone la partida en marcha.",
        "La fitxa de publicació: títol, de què va, controls, com es guanya i es perd, crèdits i versió.|La ficha de publicación: título, de qué va, controles, cómo se gana y se pierde, créditos y versión.",
        "A l'estrena s'explica una fila del document i un canvi fet amb les dades de les proves.|En el estreno se explica una fila del documento y un cambio hecho con los datos de las pruebas.",
        "Després de publicar, els bugs s'arreglen amb versions noves (1.1, 1.2…).|Después de publicar, los bugs se arreglan con versiones nuevas (1.1, 1.2…)."
      ],
      prev: [
        "La versió 3 del videojoc, ajustada amb les dades de les proves (sessió anterior).|La versión 3 del videojuego, ajustada con los datos de las pruebas (sesión anterior).",
        "Enviar i rebre missatges i animar amb vestits (unitats 2 i 3).|Enviar y recibir mensajes y animar con disfraces (unidades 2 y 3).",
        "El document de disseny i l'informe de prova, a la carpeta.|El documento de diseño y el informe de prueba, en la carpeta."
      ],
      faq: [
        ["I si el meu videojoc falla durant l'estrena?|¿Y si mi videojuego falla durante el estreno?", "No passa res: explica què hauria de passar i com ho arreglaràs a la versió següent. Els estudis també publiquen versions noves quan troben un bug.|No pasa nada: explica qué tendría que pasar y cómo lo arreglarás en la versión siguiente. Los estudios también publican versiones nuevas cuando encuentran un bug."],
        ["He d'estrenar davant de tothom?|¿Tengo que estrenar delante de todo el mundo?", "Si et fa molta vergonya, pots fer-ho en un grup petit, amb la fitxa a la mà o amb un company/a que toqui les tecles.|Si te da mucha vergüenza, puedes hacerlo en un grupo pequeño, con la ficha en la mano o con un compañero/a que toque las teclas."],
        ["Quant ha de durar l'estrena?|¿Cuánto tiene que durar el estreno?", "Uns 2 minuts: llegir la fitxa, explicar una fila i el canvi de les dades, i que algú del públic en faci una partida.|Unos 2 minutos: leer la ficha, explicar una fila y el cambio de los datos, y que alguien del público haga una partida."],
        ["Què són els crèdits?|¿Qué son los créditos?", "La llista de qui ha fet el videojoc i qui hi ha ajudat: l'autor/a i el provador/a de la sessió 3. Es poden posar a la fitxa i, si es vol, dir-los al final amb «digues».|La lista de quién ha hecho el videojuego y quién ha ayudado: el autor/a y el probador/a de la sesión 3. Se pueden poner en la ficha y, si se quiere, decirlos al final con «di»."],
        ["On és el meu videojoc i el meu diploma després del curs?|¿Dónde está mi videojuego y mi diploma después del curso?", "El videojoc queda a «Projectes» i el diploma, a l'app: els podràs obrir a casa i ensenyar-los a la família.|El videojuego queda en «Proyectos» y el diploma, en la app: los podrás abrir en casa y enseñarlos a la familia."],
        ["Les instruccions han de ser llargues?|¿Las instrucciones tienen que ser largas?", "No: una frase curta amb què has de fer i amb quines tecles. Si són llargues, ningú no les llegeix.|No: una frase corta con qué tienes que hacer y con qué teclas. Si son largas, nadie las lee."]
      ],
      tec: [
        ["No es troba la versió anterior del videojoc.|No se encuentra la versión anterior del videojuego.", "Cada sessió obre l'última versió desada al portafoli (a «Projectes») amb el mateix perfil. Si no n'hi ha cap, l'app comença amb les peces de mostra: es pot tornar al pas de triar les peces de la sessió 1 i desar-les.|Cada sesión abre la última versión guardada en el portafolio (en «Proyectos») con el mismo perfil. Si no hay ninguna, la app empieza con las piezas de muestra: se puede volver al paso de elegir las piezas de la sesión 1 y guardarlas."],
        ["El projector no mostra bé l'escenari o les tecles de la pantalla.|El proyector no muestra bien el escenario o las teclas de la pantalla.", "Proveu-ho abans de classe. Si cal, feu la finestra més gran o estreneu des de l'ordinador de cada alumne/a en grups petits.|Probadlo antes de clase. Si hace falta, haced la ventana más grande o estrenad desde el ordenador de cada alumno/a en grupos pequeños."],
        ["No hi ha temps perquè tothom estreni.|No hay tiempo para que todo el mundo estrene.", "Feu les estrenes en grups de 5 o 6 amb un ordinador per grup, o acabeu-les a l'inici de la classe següent.|Haced los estrenos en grupos de 5 o 6 con un ordenador por grupo, o terminadlos al inicio de la clase siguiente."],
        ["El diploma de l'app no surt.|El diploma de la app no sale.", "Surt al pas «Diploma» del final de la sessió. Si no hi arriben, el poden obrir a casa; el de paper el lliures tu.|Sale en el paso «Diploma» del final de la sesión. Si no llegan, lo pueden abrir en casa; el de papel lo entregas tú."],
        ["No s'ha desat el videojoc.|No se ha guardado el videojuego.", "Només es desa quan passa la comprovació i es toca «Desa-ho i continua». Si se surt abans, cal tornar a fer «Comprova».|Solo se guarda cuando pasa la comprobación y se toca «Guárdalo y continúa». Si se sale antes, hay que volver a hacer «Comprueba»."]
      ],
      seg: [
        "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
        "Fotos i vídeos de l'estrena: només amb el consentiment de les famílies i sense publicar cares ni noms de l'alumnat sense permís.|Fotos y vídeos del estreno: solo con el consentimiento de las familias y sin publicar caras ni nombres del alumnado sin permiso.",
        "Estrenar fa nervis: ningú no ha de sortir obligat davant de tothom; ofereix alternatives (grup petit, en parella) i celebra cada intent.|Estrenar da nervios: nadie tiene que salir obligado delante de todo el mundo; ofrece alternativas (grupo pequeño, en pareja) y celebra cada intento."
      ],
      extra: [
        "Afegir una pantalla de títol amb un fons diferent i un missatge que posa la partida en marxa.|Añadir una pantalla de título con un fondo diferente y un mensaje que pone la partida en marcha.",
        "Fer els crèdits al final de la partida: «Fet per… · Provat per…» amb «digues».|Hacer los créditos al final de la partida: «Hecho por… · Probado por…» con «di».",
        "Muntar el «catàleg de la fira»: les fitxes de publicació de tota la classe penjades a la paret.|Montar el «catálogo de la feria»: las fichas de publicación de toda la clase colgadas en la pared."
      ],
      trans: [
        "Tanca el curs Tech Creadors: totes les unitats en un videojoc propi, publicat.|Cierra el curso Tech Creadores: todas las unidades en un videojuego propio, publicado.",
        "Ve de la sessió 3: la versió ajustada amb les dades de les proves.|Viene de la sesión 3: la versión ajustada con los datos de las pruebas.",
        "Llengua: escriure un text breu i funcional (la fitxa) i fer una presentació oral ordenada.|Lengua: escribir un texto breve y funcional (la ficha) y hacer una presentación oral ordenada."
      ],
      obj: [
        "L'alumne/a afegeix una pantalla de títol amb instruccions perquè qualsevol persona pugui fer servir el seu videojoc.|El alumno/a añade una pantalla de título con instrucciones para que cualquier persona pueda usar su videojuego.",
        "L'alumne/a escriu la fitxa de publicació del seu videojoc (títol, descripció, controls, final, crèdits i versió).|El alumno/a escribe la ficha de publicación de su videojuego (título, descripción, controles, final, créditos y versión).",
        "L'alumne/a estrena el videojoc explicant una fila del document amb el seu guió i un canvi fet a partir de les dades.|El alumno/a estrena el videojuego explicando una fila del documento con su guion y un cambio hecho a partir de los datos.",
        "L'alumne/a repassa els conceptes principals del curs i escolta les estrenes dels companys/es amb preguntes respectuoses.|El alumno/a repasa los conceptos principales del curso y escucha los estrenos de los compañeros/as con preguntas respetuosas."
      ],
      comp: [
        "Competència digital (CD5): publicar i compartir un producte digital propi amb la informació necessària per fer-lo servir|Competencia digital (CD5): publicar y compartir un producto digital propio con la información necesaria para usarlo",
        "Comunicació escrita i oral: una fitxa funcional i una presentació breu davant d'un públic|Comunicación escrita y oral: una ficha funcional y una presentación breve delante de un público",
        "Pensament computacional: explicar amb paraules com funciona un programa i justificar canvis amb dades|Pensamiento computacional: explicar con palabras cómo funciona un programa y justificar cambios con datos",
        "Competència personal i social: reconèixer el propi progrés, reconèixer qui ha ajudat (crèdits) i valorar la feina dels altres|Competencia personal y social: reconocer el propio progreso, reconocer a quién ha ayudado (créditos) y valorar el trabajo de los demás"
      ],
      vocab: [
        ["Publicar|Publicar", "Deixar un projecte a punt perquè el faci servir qualsevol persona, amb instruccions.|Dejar un proyecto a punto para que lo use cualquier persona, con instrucciones."],
        ["Pantalla de títol|Pantalla de título", "El que es veu en començar: el nom del videojoc i què has de fer.|Lo que se ve al empezar: el nombre del videojuego y qué tienes que hacer."],
        ["Fitxa de publicació|Ficha de publicación", "El resum del videojoc per a qui no el coneix: títol, controls, com es guanya, crèdits i versió.|El resumen del videojuego para quien no lo conoce: título, controles, cómo se gana, créditos y versión."],
        ["Crèdits|Créditos", "Qui ha fet el projecte i qui hi ha ajudat (per exemple, el provador/a).|Quién ha hecho el proyecto y quién ha ayudado (por ejemplo, el probador/a)."],
        ["Estrena|Estreno", "La primera vegada que un projecte es mostra a tothom.|La primera vez que un proyecto se muestra a todo el mundo."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Publicació i estrena»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Publicación y estreno»",
          "Projector connectat a un ordinador on es puguin obrir els videojocs dels alumnes (o que cada alumne/a hi connecti el seu)|Proyector conectado a un ordenador donde se puedan abrir los videojuegos de los alumnos (o que cada alumno/a conecte el suyo)",
          "Les carpetes amb el document de disseny i l'informe de prova|Las carpetas con el documento de diseño y el informe de prueba",
          "Els diplomes impresos i signats|Los diplomas impresos y firmados"
        ],
        imprimir: ["Fitxa de publicació|Ficha de publicación", "Diploma del curs|Diploma del curso"],
        prep: [
          "Imprimir una fitxa de publicació i un diploma per alumne/a; signar els diplomes abans de la classe.|Imprimir una ficha de publicación y un diploma por alumno/a; firmar los diplomas antes de la clase.",
          "Fer l'ordre de les estrenes i calcular uns 2 minuts per alumne/a (si el grup és gran, feu-les en dos espais o en grups).|Hacer el orden de los estrenos y calcular unos 2 minutos por alumno/a (si el grupo es grande, hacedlos en dos espacios o en grupos).",
          "Provar que el projector mostra bé l'escenari i les tecles de la pantalla.|Probar que el proyector muestra bien el escenario y las teclas de la pantalla.",
          "Si podeu, convidar les famílies o un altre grup a l'estrena.|Si podéis, invitar a las familias o a otro grupo al estreno."
        ]
      },
      plan: [
        { min: 4, t: "Benvinguda: s'obre la Fira|Bienvenida: se abre la Feria", fase: 'inici',
          fa: "Dona la benvinguda a la Fira de Videojocs i explica com anirà la classe: fitxa de publicació, últims retocs, estrenes i diplomes. Pregunta què necessita una persona que obre un videojoc per primera vegada.|Da la bienvenida a la Feria de Videojuegos y explica cómo irá la clase: ficha de publicación, últimos retoques, estrenos y diplomas. Pregunta qué necesita una persona que abre un videojuego por primera vez.",
          diu: [
            "Avui l'estudi publica: els vostres videojocs els faran servir persones que no us coneixen.|Hoy el estudio publica: vuestros videojuegos los usarán personas que no os conocen.",
            "Si obriu un videojoc nou, què voleu saber primer? (de què va, amb quines tecles, com es guanya)|Si abrís un videojuego nuevo, ¿qué queréis saber primero? (de qué va, con qué teclas, cómo se gana)",
            "Com anirà la classe? (fitxa, retocs, estrenes i diplomes)|¿Cómo irá la clase? (ficha, retoques, estrenos y diplomas)"
          ],
          slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 11, t: "El viatge, la pantalla de títol i la fitxa|El viaje, la pantalla de título y la ficha", fase: 'teoria',
          fa: "Recorda el camí del curs amb l'animació de les vuit illes. Amb la demo, mostra una pantalla de títol que acaba amb un missatge que posa la partida en marxa. Presenta la fitxa de publicació i explica què s'espera a l'estrena: una fila del document amb el seu guió i un canvi fet gràcies a les dades.|Recuerda el camino del curso con la animación de las ocho islas. Con la demo, muestra una pantalla de título que acaba con un mensaje que pone la partida en marcha. Presenta la ficha de publicación y explica qué se espera en el estreno: una fila del documento con su guion y un cambio hecho gracias a los datos.",
          diu: [
            "Quina unitat us ha servit més per al vostre videojoc? Per què?|¿Qué unidad os ha servido más para vuestro videojuego? ¿Por qué?",
            "A la demo, què posa la partida en marxa després de les instruccions? (un missatge)|En la demo, ¿qué pone la partida en marcha después de las instrucciones? (un mensaje)",
            "Qui ha de sortir als crèdits del vostre videojoc? (l'autor/a i el provador/a)|¿Quién tiene que salir en los créditos de vuestro videojuego? (el autor/a y el probador/a)",
            "Quin canvi vau fer gràcies a les dades? Què deien abans i després?|¿Qué cambio hicisteis gracias a los datos? ¿Qué decían antes y después?"
          ],
          slides: ['s3', 's4', 's5', 's6'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Desconnectat: la fitxa de publicació|Desconectado: la ficha de publicación", fase: 'desconnectat',
          fa: "Cada alumne/a omple la fitxa de publicació del seu videojoc amb el document de disseny i l'informe de prova al costat. Després, en parelles, cadascú assaja l'estrena en un minut: llegeix la fitxa, ensenya en paper una fila del document i explica el canvi que va fer amb les dades. El company/a comprova que s'entén i fa una pregunta.|Cada alumno/a rellena la ficha de publicación de su videojuego con el documento de diseño y el informe de prueba al lado. Después, por parejas, cada uno ensaya el estreno en un minuto: lee la ficha, enseña en papel una fila del documento y explica el cambio que hizo con los datos. El compañero/a comprueba que se entiende y hace una pregunta.",
          diu: [
            "La descripció, en una sola frase: qui és el protagonista i què ha de fer?|La descripción, en una sola frase: ¿quién es el protagonista y qué tiene que hacer?",
            "Com es guanya i com es perd? Amb números!|¿Cómo se gana y cómo se pierde? ¡Con números!",
            "Quina versió és la vostra i què va canviar des de la 1?|¿Qué versión es la vuestra y qué cambió desde la 1?",
            "Company/a: has entès com es fa servir sense veure'l?|Compañero/a: ¿has entendido cómo se usa sin verlo?"
          ],
          slides: ['s7', 's8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 10, t: "A l'ordinador: repàs i versió per publicar|En el ordenador: repaso y versión para publicar", fase: 'ordinador',
          fa: "Cada alumne/a fa el repàs del curs, la pausa activa i els dos reptes de la fira, i arriba a la versió per publicar: hi posa la pantalla de títol (títol i instruccions amb «digues») i, si vol, els crèdits, i la desa. Avui només retocs: res de canvis grans.|Cada alumno/a hace el repaso del curso, la pausa activa y los dos retos de la feria, y llega a la versión para publicar: le pone la pantalla de título (título e instrucciones con «di») y, si quiere, los créditos, y la guarda. Hoy solo retoques: nada de cambios grandes.",
          diu: [
            "Les instruccions han de ser curtes: què has de fer i amb quines tecles.|Las instrucciones tienen que ser cortas: qué tienes que hacer y con qué teclas.",
            "Quin guió fa el cotxe quan rep «som-hi»? (quan rebo el missatge som-hi)|¿Qué guion hace el coche cuando recibe «som-hi»? (al recibir el mensaje som-hi)",
            "Avui només retocs: res que pugui espatllar el videojoc el dia de l'estrena.|Hoy solo retoques: nada que pueda estropear el videojuego el día del estreno.",
            "Heu desat la versió per publicar?|¿Habéis guardado la versión para publicar?"
          ],
          slides: ['s9', 's10'], app: "Dels «Recorda» fins a la versió per publicar: la història, les quatre targetes de «Descobreix», ordenar la publicació, el repàs del curs, la pausa activa, la cursa, la papallona i la versió per publicar.|De los «Recuerda» hasta la versión para publicar: la historia, las cuatro tarjetas de «Descubre», ordenar la publicación, el repaso del curso, la pausa activa, la carrera, la mariposa y la versión para publicar.", org: "Individual|Individual" },
        { min: 17, t: "Crea: l'estrena|Crea: el estreno", fase: 'crea',
          fa: "Cada alumne/a obre el pas de l'estrena i, quan li toca, publica el videojoc al projector: llegeix la fitxa, ensenya una fila del document i el guió que la fa, explica el canvi que va fer amb les dades i deixa que algú del públic en faci una partida. Després de cada estrena, el públic aplaudeix i fa una pregunta. Si el grup és gran, feu les estrenes en grups de 5 o 6 amb un ordinador per grup.|Cada alumno/a abre el paso del estreno y, cuando le toca, publica el videojuego en el proyector: lee la ficha, enseña una fila del documento y el guion que la hace, explica el cambio que hizo con los datos y deja que alguien del público haga una partida. Después de cada estreno, el público aplaude y hace una pregunta. Si el grupo es grande, haced los estrenos en grupos de 5 o 6 con un ordenador por grupo.",
          diu: [
            "Com es diu, de què va i amb quines tecles es fa servir?|¿Cómo se llama, de qué va y con qué teclas se usa?",
            "Ensenya una fila del document i el guió que la fa.|Enseña una fila del documento y el guion que la hace.",
            "Què deien les dades abans del canvi? I després?|¿Qué decían los datos antes del cambio? ¿Y después?",
            "Qui del públic en vol fer una partida?|¿Quién del público quiere hacer una partida?"
          ],
          slides: ['s11', 's12', 's13'], app: "Pas «L'estrena!»: el videojoc de cadascú, a punt per publicar.|Paso «¡El estreno!»: el videojuego de cada uno, a punto para publicar.", org: "Tot el grup (o grups de 5-6)|Todo el grupo (o grupos de 5-6)" },
        { min: 8, t: "Tancament: diplomes|Cierre: diplomas", fase: 'tancament',
          fa: "Cada alumne/a obre el diploma de l'app. Lliura els diplomes de paper un per un, dient a cada alumne/a una cosa concreta que ha fet bé durant el curs. Acabeu amb el resum, el missatge final d'en Numi, la pregunta final de l'app i una foto de grup si les famílies hi estan d'acord.|Cada alumno/a abre el diploma de la app. Entrega los diplomas de papel uno por uno, diciendo a cada alumno/a algo concreto que ha hecho bien durante el curso. Terminad con el resumen, el mensaje final de Numi, la pregunta final de la app y una foto de grupo si las familias están de acuerdo.",
          diu: [
            "Vau començar posant actors a l'escenari i acabeu publicant videojocs. Enhorabona!|Empezasteis poniendo actores en el escenario y termináis publicando videojuegos. ¡Enhorabuena!",
            "Quina fase de l'estudi us ha agradat més: dissenyar, construir, provar o publicar?|¿Qué fase del estudio os ha gustado más: diseñar, construir, probar o publicar?",
            "Quin projecte faríeu ara amb aquest mètode?|¿Qué proyecto haríais ahora con este método?"
          ],
          slides: ['s14', 's15', 's16'], app: "Diploma, el missatge final d'en Numi, la pregunta final i com m'he sentit.|Diploma, el mensaje final de Numi, la pregunta final y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Es posa molt nerviós/a i no vol estrenar.|Se pone muy nervioso/a y no quiere estrenar.",
          "Ofereix-li fer-ho amb la fitxa a la mà, en un grup petit o amb un company/a al costat que toqui les tecles. L'important és que expliqui una fila del document.|Ofrécele hacerlo con la ficha en la mano, en un grupo pequeño o con un compañero/a al lado que toque las teclas. Lo importante es que explique una fila del documento."],
        ["Només ensenya el videojoc i no explica com està fet.|Solo enseña el videojuego y no explica cómo está hecho.",
          "Pregunta-li davant del públic: quina fila del document fa aquest guió? Que obri el guió i el llegeixi en veu alta.|Pregúntale delante del público: ¿qué fila del documento hace este guion? Que abra el guion y lo lea en voz alta."],
        ["No sap explicar quin canvi va fer amb les dades.|No sabe explicar qué cambio hizo con los datos.",
          "Que tregui l'informe de prova de la carpeta: quant duraven les partides? Quin número va tocar? Amb aquestes dues respostes ja té l'explicació.|Que saque el informe de prueba de la carpeta: ¿cuánto duraban las partidas? ¿Qué número tocó? Con estas dos respuestas ya tiene la explicación."],
        ["El videojoc falla durant l'estrena.|El videojuego falla durante el estreno.",
          "Normalitza-ho: també passa als estudis de veritat. Que expliqui què hauria de passar i què canviarà a la versió següent; és una part molt bona de l'estrena.|Normalízalo: también pasa en los estudios de verdad. Que explique qué tendría que pasar y qué cambiará en la versión siguiente; es una parte muy buena del estreno."],
        ["Posa unes instruccions molt llargues que no hi ha temps de llegir.|Pone unas instrucciones muy largas que no hay tiempo de leer.",
          "Que les escurci a una sola frase: què has de fer i amb quines tecles. Que les provi amb un company/a que no hagi vist el videojoc.|Que las acorte a una sola frase: qué tienes que hacer y con qué teclas. Que las pruebe con un compañero/a que no haya visto el videojuego."],
        ["Vol fer canvis grans abans d'estrenar i el videojoc deixa de funcionar.|Quiere hacer cambios grandes antes de estrenar y el videojuego deja de funcionar.", "Recorda-li que avui només són retocs. Si s'ha espatllat, pot tornar a obrir la versió desada i afegir només la pantalla de títol.|Recuérdale que hoy solo son retoques. Si se ha estropeado, puede volver a abrir la versión guardada y añadir solo la pantalla de título."]
      ],
      diff: {
        mes: "Afegir una pantalla de títol amb un fons diferent i un missatge que posa la partida en marxa, i els crèdits al final. Durant les estrenes, fer de presentador/a de la fira i preparar una pregunta per a cada company/a.|Añadir una pantalla de título con un fondo diferente y un mensaje que pone la partida en marcha, y los créditos al final. Durante los estrenos, hacer de presentador/a de la feria y preparar una pregunta para cada compañero/a.",
        menys: "Omplir només el títol, els controls i com es guanya a la fitxa, i estrenar en un grup petit amb la fitxa a la mà. A l'app, afegir només una frase d'instruccions. Ruta 4t: si el videojoc no s'ha desat, «Posa una base» el torna gairebé sencer; afegir-hi el títol i com es guanya i es perd.|Rellenar solo el título, los controles y cómo se gana en la ficha, y estrenar en un grupo pequeño con la ficha en la mano. En la app, añadir solo una frase de instrucciones. Ruta 4.º: si el videojuego no se ha guardado, «Pon una base» lo devuelve casi entero; añadirle el título y cómo se gana y se pierde."
      },
      aval: {
        ticket: ["Digues una fila del teu document i quin guió la fa.|Di una fila de tu documento y qué guion la hace.",
          "Quin canvi vas fer gràcies a les dades?|¿Qué cambio hiciste gracias a los datos?"],
        rubric: [
          ["Publicació|Publicación", "El videojoc té pantalla de títol amb instruccions i la fitxa està completa (amb crèdits i versió).|El videojuego tiene pantalla de título con instrucciones y la ficha está completa (con créditos y versión).", "Hi falten les instruccions o part de la fitxa.|Faltan las instrucciones o parte de la ficha."],
          ["Estrena|Estreno", "Explica una fila del document amb el seu guió i el canvi fet amb les dades, en ordre.|Explica una fila del documento con su guion y el cambio hecho con los datos, en orden.", "Ensenya el videojoc, però necessita preguntes per explicar-lo.|Enseña el videojuego, pero necesita preguntas para explicarlo."],
          ["Videojoc final|Videojuego final", "Té una manera de guanyar i de perdre i funciona de principi a final.|Tiene una manera de ganar y de perder y funciona de principio a final.", "Funciona, però hi falta el final o té un bug que espatlla la partida.|Funciona, pero le falta el final o tiene un bug que estropea la partida."],
          [
            "Públic|Público",
            "Escolta les estrenes i fa preguntes sobre el document o les dades.|Escucha los estrenos y hace preguntas sobre el documento o los datos.",
            "Escolta, però encara no participa amb preguntes.|Escucha, pero todavía no participa con preguntas."
          ]
        ]
      },
      casa: "A casa, feu una «estrena familiar»: l'alumne/a llegeix la fitxa de publicació, obre el videojoc (és a «Projectes») i la família en fa una partida. Podeu imprimir el diploma de l'app i penjar-lo al costat de la fitxa!|En casa, haced un «estreno familiar»: el alumno/a lee la ficha de publicación, abre el videojuego (está en «Proyectos») y la familia hace una partida. ¡Podéis imprimir el diploma de la app y colgarlo al lado de la ficha!",
      slides: [
        { id: 's1', k: 'portada', t: 'Publicació i estrena|Publicación y estreno', x: "S'obre la Fira de Videojocs: l'estudi publica!|Se abre la Feria de Videojuegos: ¡el estudio publica!",
          nota: "Crea ambient de festa: és la publicació dels seus videojocs i el final del curs.|Crea ambiente de fiesta: es la publicación de sus videojuegos y el final del curso." },
        { id: 's2', k: 'concepte', t: 'Com anirà avui|Cómo irá hoy', punts: ['La fitxa de publicació|La ficha de publicación', "La versió per publicar, a l'ordinador|La versión para publicar, en el ordenador", "L'estrena: cada creador/a publica el seu videojoc|El estreno: cada creador/a publica su videojuego", 'Diplomes!|¡Diplomas!'],
          nota: "Explica també què fa el públic a la fira: escoltar, celebrar cada estrena i preguntar.|Explica también qué hace el público en la feria: escuchar, celebrar cada estreno y preguntar.", pic: "img/ic/party.webp" },
        { id: 's3', k: 'anim', t: 'El viatge del curs|El viaje del curso', anim: 'g8journey', x: "Vuit unitats, del primer actor a l'escenari fins al teu videojoc.|Ocho unidades, del primer actor en el escenario hasta tu videojuego.",
          nota: "Pregunta què han fet servir de cada illa al seu videojoc: tecles, coordenades, condicions, variables, atzar, clons…|Pregunta qué han usado de cada isla en su videojuego: teclas, coordenadas, condiciones, variables, azar, clones…" },
        { id: 's4', k: 'media', t: 'La pantalla de títol|La pantalla de título', x: 'El títol i què has de fer; després, un missatge posa la partida en marxa.|El título y qué tienes que hacer; después, un mensaje pone la partida en marcha.', media: { k: 'stage', w: W_TITLE, prog: P_TITLE },
          nota: "Fes notar que, quan acaben les instruccions, el missatge «fi» posa la nau en marxa.|Haz notar que, cuando terminan las instrucciones, el mensaje «fi» pone la nave en marcha." },
        { id: 's5', k: 'anim', t: 'La fitxa de publicació|La ficha de publicación', anim: 'g8pub', x: 'Títol, de què va, controls, com es guanya, crèdits i versió.|Título, de qué va, controles, cómo se gana, créditos y versión.',
          nota: "Pregunta per què la fitxa diu «v1.1»: vol dir que ja porta una millora des de la primera versió.|Pregunta por qué la ficha dice «v1.1»: quiere decir que ya lleva una mejora desde la primera versión." },
        { id: 's6', k: 'anim', t: "Explica com l'has fet|Explica cómo lo has hecho", anim: 'g8who', x: 'Una fila del document, el seu guió i un canvi fet amb les dades.|Una fila del documento, su guion y un cambio hecho con los datos.',
          nota: "Fes tu una estrena de mostra en un minut: «Toco el premi → punts +1» amb el guió de la moneda, i «les partides duraven 3 segons; amb el cranc a 4, ara en duren 20».|Haz tú un estreno de muestra en un minuto: «Toco el premio → puntos +1» con el guion de la moneda, y «las partidas duraban 3 segundos; con el cangrejo a 4, ahora duran 20»." },
        { id: 's7', k: 'activitat', t: 'La fitxa de publicació|La ficha de publicación', timer: 10, punts: ['Omple la fitxa amb el document i l\'informe al costat.|Rellena la ficha con el documento y el informe al lado.', 'En parella: assaja l\'estrena en un minut.|En pareja: ensaya el estreno en un minuto.', 'El company/a comprova que s\'entén i pregunta.|El compañero/a comprueba que se entiende y pregunta.', 'Canvieu els papers.|Cambiad los papeles.'],
          nota: "Passa per les parelles i ajuda qui no recordi el canvi de les dades: l'informe de prova és a la carpeta.|Pasa por las parejas y ayuda a quien no recuerde el cambio de los datos: el informe de prueba está en la carpeta." },
        { id: 's8', k: 'concepte', t: "L'estrena en un minut|El estreno en un minuto", punts: ['1. Llegeixo la fitxa: títol, de què va, controls.|1. Leo la ficha: título, de qué va, controles.', '2. Ensenyo una fila del document i el seu guió.|2. Enseño una fila del documento y su guion.', '3. Explico el canvi que vaig fer amb les dades.|3. Explico el cambio que hice con los datos.', "4. Algú del públic en fa una partida.|4. Alguien del público hace una partida."],
          nota: "Deixa aquesta estructura projectada durant l'assaig i durant les estrenes.|Deja esta estructura proyectada durante el ensayo y durante los estrenos.", pic: "img/chars/numi-happy.webp" },
        { id: 's9', k: 'activitat', t: 'La versió per publicar|La versión para publicar', timer: 10, punts: ['Obre «Publicació i estrena».|Abre «Publicación y estreno».', 'Fes el repàs del curs i els dos reptes de la fira.|Haz el repaso del curso y los dos retos de la feria.', 'Posa-hi la pantalla de títol (i, si vols, els crèdits).|Ponle la pantalla de título (y, si quieres, los créditos).', 'Desa la versió per publicar!|¡Guarda la versión para publicar!'],
          nota: "Que ningú no comenci canvis grans: avui només retocs. El que no funcioni es pot explicar a l'estrena com a «versió següent».|Que nadie empiece cambios grandes: hoy solo retoques. Lo que no funcione se puede explicar en el estreno como «versión siguiente»." },
        { id: 's10', k: 'repte', t: 'Els reptes de la fira|Los retos de la feria', punts: ['La cursa: el cotxe surt quan rep «som-hi».|La carrera: el coche sale cuando recibe «som-hi».', 'La papallona: rebota i bat les ales.|La mariposa: rebota y bate las alas.'],
          nota: "Són un repàs ràpid de missatges i d'animació. Si van justos de temps, que passin directament a la versió per publicar.|Son un repaso rápido de mensajes y de animación. Si van justos de tiempo, que pasen directamente a la versión para publicar." },
        { id: 's11', k: 'activitat', t: "L'estrena|El estreno", timer: 22, punts: ['1. La fitxa: títol, de què va, controls.|1. La ficha: título, de qué va, controles.', '2. Una fila del document i el seu guió.|2. Una fila del documento y su guion.', '3. El canvi fet amb les dades.|3. El cambio hecho con los datos.', 'Algú del públic en fa una partida!|¡Alguien del público hace una partida!'],
          nota: "Controla el temps (uns 2 minuts per alumne/a) i que cada estrena acabi amb un aplaudiment.|Controla el tiempo (unos 2 minutos por alumno/a) y que cada estreno termine con un aplauso." },
        { id: 's12', k: 'concepte', t: 'El públic de la fira|El público de la feria', punts: ['Escolto sense interrompre.|Escucho sin interrumpir.', 'Celebro cada estrena.|Celebro cada estreno.', 'Pregunto pel document o per les dades.|Pregunto por el documento o por los datos.'],
          nota: "Pots projectar-la entre estrena i estrena.|Puedes proyectarla entre estreno y estreno.", pic: "img/ic/handshake.webp" },
        { id: 's13', k: 'pregunta', t: "Preguntes per a l'autor/a|Preguntas para el autor/a", punts: ['Quina fila del document et va costar més de programar?|¿Qué fila del documento te costó más de programar?', 'Què deien les dades abans i després del teu ajust?|¿Qué decían los datos antes y después de tu ajuste?', 'Què posaries a la versió 1.2?|¿Qué pondrías en la versión 1.2?'],
          nota: "Si el públic no s'anima, fes tu una d'aquestes preguntes.|Si el público no se anima, haz tú una de estas preguntas." },
        { id: 's14', k: 'resum', t: 'Ja treballes com un estudi|Ya trabajas como un estudio', punts: ['Dissenyes: el document de disseny.|Diseñas: el documento de diseño.', 'Construeixes per peces i nivells.|Construyes por piezas y niveles.', 'Proves amb dades, ajustes i publiques.|Pruebas con datos, ajustas y publicas.'],
          nota: "Remarca que aquest mètode serveix per a qualsevol projecte, no només per als videojocs.|Remarca que este método sirve para cualquier proyecto, no solo para los videojuegos." },
        { id: 's15', k: 'activitat', t: 'Els diplomes|Los diplomas', punts: ["Obre el diploma de l'app.|Abre el diploma de la app.", 'Recull el diploma de paper.|Recoge el diploma de papel.', 'Un gran aplaudiment per a tot l\'estudi!|¡Un gran aplauso para todo el estudio!'],
          nota: "En lliurar cada diploma, digues a l'alumne/a una cosa concreta que ha fet bé durant el curs.|Al entregar cada diploma, di al alumno/a algo concreto que ha hecho bien durante el curso." },
        { id: 's16', k: 'tiquet', t: "L'última pregunta|La última pregunta", punts: ['Una fila del teu document i el guió que la fa.|Una fila de tu documento y el guion que la hace.', 'El canvi que vas fer gràcies a les dades.|El cambio que hiciste gracias a los datos.'],
          nota: "Apunta les respostes: són una bona valoració del projecte per a la propera edició.|Apunta las respuestas: son una buena valoración del proyecto para la próxima edición." }
      ],
      print: [
        { id: 'p1', t: 'Fitxa de publicació|Ficha de publicación', k: 'fitxa',
          intro: "La fitxa que acompanya el teu videojoc a la fira. Escriu poc i clar: la llegirà algú que no el coneix.|La ficha que acompaña tu videojuego en la feria. Escribe poco y claro: la leerá alguien que no lo conoce.",
          items: [
            { q: "Títol i una frase que expliqui de què va:|Título y una frase que explique de qué va:", sol: "Resposta oberta: el protagonista i l'objectiu en una sola frase.|Respuesta abierta: el protagonista y el objetivo en una sola frase." },
            { q: "Controls (quines tecles fan què):|Controles (qué teclas hacen qué):", sol: "Resposta oberta: per exemple, «← → per moure la nau».|Respuesta abierta: por ejemplo, «← → para mover la nave»." },
            { q: "Com es guanya i com es perd (amb números):|Cómo se gana y cómo se pierde (con números):", sol: "Resposta oberta: per exemple, «guanyes amb 10 estrelles; perds amb 0 vides».|Respuesta abierta: por ejemplo, «ganas con 10 estrellas; pierdes con 0 vidas»." },
            { q: "Crèdits · fet per: ___ · provat per: ___|Créditos · hecho por: ___ · probado por: ___", sol: "L'autor/a i el provador/a de la sessió 3.|El autor/a y el probador/a de la sesión 3." },
            { q: "Versió: ___ · Què ha canviat des de la versió 1 (i què deien les dades)?|Versión: ___ · ¿Qué ha cambiado desde la versión 1 (y qué decían los datos)?", sol: "Resposta oberta: valoreu que relacioni un canvi amb una dada concreta.|Respuesta abierta: valorad que relacione un cambio con un dato concreto." }
          ] },
        { id: 'p2', t: 'Diploma del curs|Diploma del curso', k: 'diploma',
          intro: "ha completat el curs Tech Creadors de Numi Tech: ha dissenyat, construït, provat amb dades i publicat el seu propi videojoc.|ha completado el curso Tech Creadores de Numi Tech: ha diseñado, construido, probado con datos y publicado su propio videojuego.",
          items: [
            'Ha creat personatges, escenes i animacions amb blocs.|Ha creado personajes, escenas y animaciones con bloques.',
            'Ha programat tecles, missatges i coordenades.|Ha programado teclas, mensajes y coordenadas.',
            'Ha fet servir condicions, variables, atzar i clons.|Ha usado condiciones, variables, azar y clones.',
            'Ha provat amb dades, ajustat i publicat un videojoc propi.|Ha probado con datos, ajustado y publicado un videojuego propio.'
          ] }
      ]
    }
  };
})());
