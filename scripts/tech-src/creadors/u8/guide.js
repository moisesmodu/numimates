/* Tech Creadors · unitat 8 «El meu videojoc» · guia del professorat (g8-1 … g8-4)
   Projecte final del curs: cada alumne/a pensa i planifica el seu videojoc en paper i en tria les peces (g8-1), el
   construeix peça a peça (g8-2), el fa provar a un company/a i el millora (g8-3) i el presenta a la Fira de Videojocs
   abans de rebre el diploma (g8-4). L'app desa cada versió al portafoli i la recupera a la sessió següent.
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
    /* ---------- Sessió 1 · La idea i el pla ---------- */
    'g8-1': {
      intro: "Primera sessió del projecte final del curs. Cada alumne/a pensa el seu propi videojoc: aprèn les quatre peces que el formen (protagonista, objectiu, obstacle i regles), que cada regla és un «si…» amb una variable i que un videojoc s'acaba guanyant o perdent. Fa el pla en paper, el prova amb un company/a com un videojoc de paper, practica a l'app les tres regles més habituals (recollir, perdre una vida, guanyar) i, al final, tria les seves peces i desa la versió 1. Aquesta versió és el punt de partida de les tres sessions següents: comprova que tothom la desa.|Primera sesión del proyecto final del curso. Cada alumno/a piensa su propio videojuego: aprende las cuatro piezas que lo forman (protagonista, objetivo, obstáculo y reglas), que cada regla es un «si…» con una variable y que un videojuego se acaba ganando o perdiendo. Hace el plan en papel, lo prueba con un compañero/a como un videojuego de papel, practica en la app las tres reglas más habituales (recoger, perder una vida, ganar) y, al final, elige sus piezas y guarda la versión 1. Esta versión es el punto de partida de las tres sesiones siguientes: comprueba que todo el mundo la guarda.",
      claus: [
        "Un videojoc té quatre peces: protagonista, objectiu, obstacle i regles.|Un videojuego tiene cuatro piezas: protagonista, objetivo, obstáculo y reglas.",
        "Una regla diu quan passa alguna cosa i què passa: «si… → …».|Una regla dice cuándo pasa algo y qué pasa: «si… → …».",
        "Un bon videojoc diu com guanyes i com perds, i «atura tot» l'acaba.|Un buen videojuego dice cómo ganas y cómo pierdes, y «para todo» lo termina.",
        "Primer el pla en paper; després una versió 1 petita que funcioni.|Primero el plan en papel; después una versión 1 pequeña que funcione."
      ],
      prev: [
        "Condicions «si…» i comparar variables (unitats 5 i 6).|Condiciones «si…» y comparar variables (unidades 5 y 6).",
        "Punts i vides amb variables, i l'espera després d'un xoc (unitat 6).|Puntos y vidas con variables, y la espera después de un choque (unidad 6).",
        "Moure amb les fletxes i l'atzar (unitats 3 i 7).|Mover con las flechas y el azar (unidades 3 y 7)."
      ],
      faq: [
        ["Puc fer qualsevol videojoc que vulgui?|¿Puedo hacer cualquier videojuego que quiera?", "Sí, sempre que tingui les quatre peces i el puguis fer amb els blocs que coneixes. Comença per una versió petita i després la fas créixer.|Sí, siempre que tenga las cuatro piezas y lo puedas hacer con los bloques que conoces. Empieza por una versión pequeña y después la haces crecer."],
        ["Puc canviar les peces que he triat?|¿Puedo cambiar las piezas que he elegido?", "Les peces de l'app es trien avui i les faràs servir les quatre setmanes. Si de debò vols canviar-les, parla-ho amb el professor/a abans de començar la versió 2.|Las piezas de la app se eligen hoy y las usarás las cuatro semanas. Si de verdad quieres cambiarlas, háblalo con el profesor/a antes de empezar la versión 2."],
        ["Per què els punts pugen sense parar?|¿Por qué los puntos suben sin parar?", "Perquè el premi no se'n va després de sumar: continua tocant el protagonista i suma a cada volta. Fes-lo anar a un lloc a l'atzar.|Porque el premio no se va después de sumar: sigue tocando al protagonista y suma en cada vuelta. Haz que vaya a un sitio al azar."],
        ["Com faig que es guanyi amb 5 punts?|¿Cómo hago que se gane con 5 puntos?", "Amb un «si» que compari: punts > 4, o punts ≥ 5. A dins, «digues Has guanyat!» i «atura tot».|Con un «si» que compare: puntos > 4, o puntos ≥ 5. Dentro, «di ¡Has ganado!» y «para todo»."],
        ["Què és una «versió 1»?|¿Qué es una «versión 1»?", "La primera versió petita que funciona: avui, el protagonista que es mou amb les fletxes i diu el nom del videojoc. Les peces arribaran a les versions següents.|La primera versión pequeña que funciona: hoy, el protagonista que se mueve con las flechas y dice el nombre del videojuego. Las piezas llegarán en las versiones siguientes."],
        ["No se m'acut cap idea.|No se me ocurre ninguna idea.", "Parteix d'un videojoc de la unitat (recollir i esquivar) i canvia'n els personatges, el lloc i una regla. Una bona idea pot ser petita!|Parte de un videojuego de la unidad (recoger y esquivar) y cambia sus personajes, el lugar y una regla. ¡Una buena idea puede ser pequeña!"]
      ],
      tec: [
        ["Les fletxes del teclat no mouen el protagonista.|Las flechas del teclado no mueven al protagonista.", "Cal tocar primer l'escenari perquè la pàgina «escolti» el teclat, o fer servir els botons de fletxes de sota l'escenari (també al mòbil).|Hay que tocar primero el escenario para que la página «escuche» el teclado, o usar los botones de flechas de debajo del escenario (también en el móvil)."],
        ["No s'ha desat el videojoc.|No se ha guardado el videojuego.", "Només es desa quan passa la comprovació i es toca «Desa-ho i continua». Si se surt abans, cal tornar a fer «Comprova».|Solo se guarda cuando pasa la comprobación y se toca «Guárdalo y continúa». Si se sale antes, hay que volver a hacer «Comprueba»."],
        ["Un alumne/a s'encalla en un repte.|Un alumno/a se atasca en un reto.", "Després de dos intents apareix «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver: el reto vuelve a empezar."],
        ["Les miniatures per triar les peces no surten.|Las miniaturas para elegir las piezas no salen.", "Torneu a carregar la pàgina i entreu de nou a la sessió: la tria es fa al pas «Ara, el teu videojoc!».|Volved a cargar la página y entrad de nuevo en la sesión: la elección se hace en el paso «¡Ahora, tu videojuego!»."],
        ["La graella del pla surt massa petita.|La cuadrícula del plan sale demasiado pequeña.", "Imprimiu-la al 100 % o en DIN A3; cada quadre equival a 60 punts de l'escenari.|Imprimidla al 100 % o en DIN A3; cada cuadro equivale a 60 puntos del escenario."]
      ],
      seg: [
        "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
        "Idees de videojoc: res de violència, por o burles cap a persones reals; els enemics són objectes o animals de l'escenari.|Ideas de videojuego: nada de violencia, miedo o burlas hacia personas reales; los enemigos son objetos o animales del escenario.",
        "Si algú parla d'un videojoc de casa que no és per a la seva edat, no el jutgis davant del grup; si et preocupa, parla-ho amb la família.|Si alguien habla de un videojuego de casa que no es para su edad, no lo juzgues delante del grupo; si te preocupa, háblalo con la familia."
      ],
      extra: [
        "Afegir al pla un segon nivell: què canvia quan arribes a 5 punts?|Añadir al plan un segundo nivel: ¿qué cambia cuando llegas a 5 puntos?",
        "Posar a la versió 1 la regla de recollir el premi (si toca → punts +1 i a l'atzar).|Poner en la versión 1 la regla de recoger el premio (si toca → puntos +1 y al azar).",
        "Dissenyar el cartell del videojoc per a la fira: títol, dibuix i una frase d'instruccions.|Diseñar el cartel del videojuego para la feria: título, dibujo y una frase de instrucciones."
      ],
      trans: [
        "Recull tot el curs: personatges, bucles, tecles, coordenades, condicions, variables, atzar i clons.|Recoge todo el curso: personajes, bucles, teclas, coordenadas, condiciones, variables, azar y clones.",
        "Sessió següent: construir el videojoc peça a peça a partir de la versió 1.|Sesión siguiente: construir el videojuego pieza a pieza a partir de la versión 1.",
        "Llengua i plàstica: escriure regles clares i dibuixar un esbós amb llegenda.|Lengua y plástica: escribir reglas claras y dibujar un boceto con leyenda."
      ],
      obj: [
        "L'alumne/a identifica les quatre peces d'un videojoc (protagonista, objectiu, obstacle i regles) en exemples i en el seu propi projecte.|El alumno/a identifica las cuatro piezas de un videojuego (protagonista, objetivo, obstáculo y reglas) en ejemplos y en su propio proyecto.",
        "L'alumne/a escriu les regles del seu videojoc amb la forma «si… → …» i les relaciona amb blocs de condició i de variables.|El alumno/a escribe las reglas de su videojuego con la forma «si… → …» y las relaciona con bloques de condición y de variables.",
        "L'alumne/a dibuixa en paper el pla del seu videojoc (escenari, personatges i regles) i el prova amb un company/a com a prototip de paper.|El alumno/a dibuja en papel el plan de su videojuego (escenario, personajes y reglas) y lo prueba con un compañero/a como prototipo de papel.",
        "L'alumne/a tria les peces a l'app i programa una primera versió on el protagonista es mou amb les fletxes.|El alumno/a elige las piezas en la app y programa una primera versión en la que el protagonista se mueve con las flechas."
      ],
      comp: [
        "Competència digital (CD5): planificar i començar a crear un producte digital propi (un videojoc senzill)|Competencia digital (CD5): planificar y empezar a crear un producto digital propio (un videojuego sencillo)",
        "Pensament computacional: descomposició d'un problema gran en peces i regles; condicions i variables|Pensamiento computacional: descomposición de un problema grande en piezas y reglas; condiciones y variables",
        "Educació artística: disseny d'un escenari i de personatges en un esbós|Educación artística: diseño de un escenario y de personajes en un boceto",
        "Comunicació oral: explicar unes regles de manera clara perquè un altre les pugui seguir|Comunicación oral: explicar unas reglas de manera clara para que otro las pueda seguir"
      ],
      vocab: [
        ["Videojoc|Videojuego", "Un programa amb un protagonista que controles, un objectiu, obstacles i regles.|Un programa con un protagonista que controlas, un objetivo, obstáculos y reglas."],
        ["Regla|Regla", "El que passa quan passa alguna cosa: «si toca la moneda → +1 punt».|Lo que pasa cuando pasa algo: «si toca la moneda → +1 punto»."],
        ["Esbós|Boceto", "Un dibuix ràpid per pensar una idea abans de construir-la.|Un dibujo rápido para pensar una idea antes de construirla."],
        ["Prototip|Prototipo", "Una primera versió senzilla (de paper o a la pantalla) per provar la idea.|Una primera versión sencilla (de papel o en la pantalla) para probar la idea."],
        ["Versió|Versión", "Cada pas del projecte: la versió 1 és petita i les següents hi afegeixen peces.|Cada paso del proyecto: la versión 1 es pequeña y las siguientes le añaden piezas."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «La idea i el pla»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «La idea y el plan»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Llapis de colors, tisores i una goma per parella|Lápices de colores, tijeras y una goma por pareja",
          "Una carpeta o funda per alumne/a per guardar el pla durant tota la unitat|Una carpeta o funda por alumno/a para guardar el plan durante toda la unidad"
        ],
        imprimir: ["El pla del meu videojoc (graella de l'escenari)|El plan de mi videojuego (cuadrícula del escenario)", "Targetes de regles|Tarjetas de reglas"],
        prep: [
          "Imprimir una graella del pla per alumne/a i un paquet de targetes de regles per parella.|Imprimir una cuadrícula del plan por alumno/a y un paquete de tarjetas de reglas por pareja.",
          "Provar la demo de la diapositiva 6 i el videojoc d'en Vuit (pas «Investiga») per saber què hi falta.|Probar la demo de la diapositiva 6 y el videojuego de Vuit (paso «Investiga») para saber qué le falta.",
          "Pensar un videojoc d'exemple propi per dibuixar-lo a la pissarra mentre expliques el pla.|Pensar un videojuego de ejemplo propio para dibujarlo en la pizarra mientras explicas el plan.",
          "Recordar que les peces que triïn a l'app (protagonista, premi, enemic i fons) es fan servir a les quatre sessions.|Recordar que las piezas que elijan en la app (protagonista, premio, enemigo y fondo) se usan en las cuatro sesiones."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: la Fira de Videojocs|Bienvenida: la Feria de Videojuegos", fase: 'inici',
          fa: "Anuncia el projecte final: en quatre setmanes cada alumne/a crearà i presentarà un videojoc propi a la Fira de Videojocs. Explica el calendari de la unitat i pregunta quins videojocs coneixen i què tenen en comú, sense jutjar-ne cap.|Anuncia el proyecto final: en cuatro semanas cada alumno/a creará y presentará un videojuego propio en la Feria de Videojuegos. Explica el calendario de la unidad y pregunta qué videojuegos conocen y qué tienen en común, sin juzgar ninguno.",
          diu: [
            "Aquest cop no farem els reptes d'un altre: inventareu el vostre videojoc!|Esta vez no haremos los retos de otro: ¡inventaréis vuestro videojuego!",
            "Penseu en un videojoc que conegueu: qui és el protagonista? (un personatge que controles) Què ha d'aconseguir?|Pensad en un videojuego que conozcáis: ¿quién es el protagonista? (un personaje que controlas) ¿Qué tiene que conseguir?",
            "Què el fa difícil? (enemics, temps, obstacles)|¿Qué lo hace difícil? (enemigos, tiempo, obstáculos)",
            "En quatre setmanes: idea, construcció, prova i estrena a la fira.|En cuatro semanas: idea, construcción, prueba y estreno en la feria."
          ],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Les peces i les regles d'un videojoc|Las piezas y las reglas de un videojuego", fase: 'teoria',
          fa: "Presenta les quatre peces amb l'animació i busqueu-les entre tots en la demo del gat i la moneda. Fes que diguin la regla de la demo amb la forma «si… → …» i escriu-la a la pissarra al costat dels blocs que la fan. Explica com s'acaba un videojoc (guanyar i perdre), com es fa el pla en paper i per què cal començar per una versió petita.|Presenta las cuatro piezas con la animación y buscadlas entre todos en la demo del gato y la moneda. Haz que digan la regla de la demo con la forma «si… → …» y escríbela en la pizarra al lado de los bloques que la hacen. Explica cómo se termina un videojuego (ganar y perder), cómo se hace el plan en papel y por qué hay que empezar por una versión pequeña.",
          diu: [
            "Quina és la regla d'aquest videojoc? Digueu-la començant per «si…». (si el gat toca la moneda, punts +1)|¿Cuál es la regla de este videojuego? Decidla empezando por «si…». (si el gato toca la moneda, puntos +1)",
            "On són les quatre peces a la demo? (gat, moneda, punts… i falta l'obstacle!)|¿Dónde están las cuatro piezas en la demo? (gato, moneda, puntos… ¡y falta el obstáculo!)",
            "Com sabem que hem guanyat? I que hem perdut? (punts = 10; vides = 0)|¿Cómo sabemos que hemos ganado? ¿Y que hemos perdido? (puntos = 10; vidas = 0)",
            "Primer una versió 1 que funcioni. Les idees grans, per a després!|Primero una versión 1 que funcione. ¡Las ideas grandes, para después!"
          ],
          slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Desconnectat: el videojoc de paper|Desconectado: el videojuego de papel", fase: 'desconnectat',
          fa: "Cada alumne/a dibuixa a la graella el pla del seu videojoc: l'escenari, on comença cada personatge i les regles (pot fer servir les targetes de regles o escriure'n de pròpies). Després, en parelles, el company/a «prova» el prototip de paper: mou el protagonista amb el dit mentre l'autor/a mou l'enemic i apunta punts i vides. Si una regla no s'entén, l'autor/a la reescriu.|Cada alumno/a dibuja en la cuadrícula el plan de su videojuego: el escenario, dónde empieza cada personaje y las reglas (puede usar las tarjetas de reglas o escribir unas propias). Después, por parejas, el compañero/a «prueba» el prototipo de papel: mueve el protagonista con el dedo mientras el autor/a mueve el enemigo y apunta puntos y vidas. Si una regla no se entiende, el autor/a la reescribe.",
          diu: [
            "Cada quadre de la graella fa 60 punts de l'escenari: on comença el vostre protagonista?|Cada cuadro de la cuadrícula mide 60 puntos del escenario: ¿dónde empieza vuestro protagonista?",
            "Cada regla, amb «si… → …». «Ha de ser divertit» és una regla? (no: no diu quan ni què passa)|Cada regla, con «si… → …». «Tiene que ser divertido», ¿es una regla? (no: no dice cuándo ni qué pasa)",
            "Si el company/a no entén una regla, no és culpa seva: l'heu d'escriure més clara.|Si el compañero/a no entiende una regla, no es culpa suya: la tenéis que escribir más clara.",
            "Hi ha una manera de guanyar i una de perdre?|¿Hay una manera de ganar y una de perder?"
          ],
          slides: ['s10', 's11'], app: "Cap: activitat sense pantalla. El pla es guarda a la carpeta per a les setmanes vinents.|Ninguna: actividad sin pantalla. El plan se guarda en la carpeta para las próximas semanas.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «Un videojoc de paper» poden tocar «Ho hem fet!», perquè ja l'han fet a classe. Al videojoc d'en Vuit, deixa que el provin una estona abans de respondre què hi falta. Fes la pausa activa tots junts.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «Un videojuego de papel» pueden tocar «¡Lo hemos hecho!», porque ya lo han hecho en clase. En el videojuego de Vuit, deja que lo prueben un rato antes de responder qué le falta. Haced la pausa activa todos juntos.",
          diu: [
            "Al videojoc d'en Numi i la roca, quin bloc fa que es pugui perdre? Busqueu el «si». (si vides < 1)|En el videojuego de Numi y la roca, ¿qué bloque hace que se pueda perder? Buscad el «si». (si vidas < 1)",
            "El videojoc d'en Vuit s'acaba algun dia? Què li posaríeu? (un enemic i un final)|¿El videojuego de Vuit se acaba algún día? ¿Qué le pondríais? (un enemigo y un final)",
            "Quina d'aquestes frases es pot programar? Per què?|¿Cuál de estas frases se puede programar? ¿Por qué?"
          ],
          slides: ['s12', 's13'], app: "Dels dos «Recorda» fins a la «Pausa activa»: les històries, les targetes de «Descobreix», la regla bona, ordenar els passos, el videojoc de paper (ja fet), el bloc per perdre, el videojoc d'en Vuit i què li falta.|De los dos «Recuerda» hasta la «Pausa activa»: las historias, las tarjetas de «Descubre», la regla buena, ordenar los pasos, el videojuego de papel (ya hecho), el bloque para perder, el videojuego de Vuit y qué le falta.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: les tres regles|Retos: las tres reglas", fase: 'ordinador',
          fa: "Els tres reptes són les regles que tindran gairebé tots els videojocs: recollir, perdre una vida i guanyar. Si veus que algú no posa «espera» després de perdre una vida, deixa que vegi com les vides baixen de cop i pregunta-li per què.|Los tres retos son las reglas que tendrán casi todos los videojuegos: recoger, perder una vida y ganar. Si ves que alguien no pone «espera» después de perder una vida, deja que vea cómo las vidas bajan de golpe y pregúntale por qué.",
          diu: [
            "Per què els punts pugen sense parar si l'estrella no se'n va? (es continuen tocant)|¿Por qué los puntos suben sin parar si la estrella no se va? (se siguen tocando)",
            "Quantes vegades es comprova un «si» que és dins d'un «per sempre»? (a cada volta)|¿Cuántas veces se comprueba un «si» que está dentro de un «por siempre»? (en cada vuelta)",
            "Per què la tortuga espera després de perdre una vida? (perquè un xoc no en tregui moltes)|¿Por qué la tortuga espera después de perder una vida? (para que un choque no le quite muchas)",
            "Punts > 4: amb quants punts guanyes? (5)|Puntos > 4: ¿con cuántos puntos ganas? (5)"
          ],
          slides: ['s14'], app: "Els tres reptes de «Reptes»: la regla de recollir, la de perdre una vida i la de guanyar.|Los tres retos de «Retos»: la regla de recoger, la de perder una vida y la de ganar.", org: "Individual|Individual" },
        { min: 6, t: "Crea: les peces i la versió 1|Crea: las piezas y la versión 1", fase: 'crea',
          fa: "Amb el pla de paper al costat, cada alumne/a tria a l'app el protagonista, el premi, l'enemic i el fons, i desa la tria. Després programa la versió 1: el protagonista es mou amb les fletxes i diu el nom del videojoc. Recorda'ls que l'han de desar: la setmana vinent continuaran des d'aquí.|Con el plan de papel al lado, cada alumno/a elige en la app el protagonista, el premio, el enemigo y el fondo, y guarda la elección. Después programa la versión 1: el protagonista se mueve con las flechas y dice el nombre del videojuego. Recuérdales que la tienen que guardar: la semana que viene continuarán desde aquí.",
          diu: [
            "Trieu les peces que heu dibuixat al pla.|Elegid las piezas que habéis dibujado en el plan.",
            "Amb quins guions es mou el protagonista? (quan premo la tecla…)|¿Con qué guiones se mueve el protagonista? (al pulsar la tecla…)",
            "Quan funcioni, toqueu Comprova i deseu-lo: és la versió 1!|Cuando funcione, tocad Comprueba y guardadlo: ¡es la versión 1!"
          ],
          slides: ['s15'], app: "Pas «Tria les peces del teu videojoc» i pas «Crea»: el meu videojoc, versió 1.|Paso «Elige las piezas de tu videojuego» y paso «Crea»: mi videojuego, versión 1.", org: "Individual|Individual" },
        { min: 2, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les idees de la sessió amb el resum i, a la porta, fes a cada alumne/a una pregunta del tiquet. Recull els plans de paper a les carpetes.|Repasa las ideas de la sesión con el resumen y, en la puerta, haz a cada alumno/a una pregunta del ticket. Recoge los planes de papel en las carpetas.",
          diu: [
            "Digueu-me una regla del vostre videojoc començant per «si…».|Decidme una regla de vuestro videojuego empezando por «si…».",
            "Quines són les quatre peces d'un videojoc? (protagonista, objectiu, obstacle i regles)|¿Cuáles son las cuatro piezas de un videojuego? (protagonista, objetivo, obstáculo y reglas)",
            "Teniu la versió 1 desada? La setmana vinent continuarem des d'aquí.|¿Tenéis la versión 1 guardada? La semana que viene seguiremos desde aquí."
          ],
          slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Vol fer un videojoc enorme (molts nivells, molts personatges) i no sap per on començar.|Quiere hacer un videojuego enorme (muchos niveles, muchos personajes) y no sabe por dónde empezar.",
          "Felicita'l per la idea i pregunta-li: quina és la part més petita que ja seria un videojoc? Que l'encercli al pla i que la resta la deixi per a «més endavant».|Felicítale por la idea y pregúntale: ¿cuál es la parte más pequeña que ya sería un videojuego? Que la rodee en el plan y que el resto lo deje para «más adelante»."],
        ["Escriu regles que no es poden programar («ha de ser divertit», «el gat és valent»).|Escribe reglas que no se pueden programar («tiene que ser divertido», «el gato es valiente»).",
          "Demana-li que comenci la regla per «si…» i acabi amb què passa: «si el gat toca… → …». Si no surt, no és una regla.|Pídele que empiece la regla por «si…» y acabe con qué pasa: «si el gato toca… → …». Si no sale, no es una regla."],
        ["Al repte de recollir, els punts pugen sense parar.|En el reto de recoger, los puntos suben sin parar.",
          "Pregunta: on és l'estrella després de sumar el punt? I l'ocell? Que miri que es continuen tocant i pensi com fer marxar l'estrella.|Pregunta: ¿dónde está la estrella después de sumar el punto? ¿Y el pájaro? Que mire que se siguen tocando y piense cómo hacer que la estrella se vaya."],
        ["Les vides baixen totes de cop (o queden en negatiu).|Las vidas bajan todas de golpe (o quedan en negativo).",
          "Que miri quant de temps es toquen la tortuga i la medusa. Cada volta del «per sempre» compta com un xoc: com pot fer que en compti només un?|Que mire cuánto tiempo se tocan la tortuga y la medusa. Cada vuelta del «por siempre» cuenta como un choque: ¿cómo puede hacer que cuente solo uno?"],
        ["A la versió 1 posa la regla de la fletxa al guió de la bandera i no respon a les tecles.|En la versión 1 pone la regla de la flecha en el guion de la bandera y no responde a las teclas.",
          "Recorda-li els guions «Quan premo la tecla…» de la unitat 3, o un «si tecla premuda» dins d'un «per sempre». Que en provi un i després copiï la idea per a les altres fletxes.|Recuérdale los guiones «Al pulsar la tecla…» de la unidad 3, o un «si tecla pulsada» dentro de un «por siempre». Que pruebe uno y después copie la idea para las otras flechas."],
        ["No desa la versió 1 i la setmana vinent no la troba.|No guarda la versión 1 y la semana que viene no la encuentra.", "Abans de tancar, passa per les taules: ha sortit «Projecte desat»? Si no, que torni a fer «Comprova» i «Desa-ho i continua».|Antes de cerrar, pasa por las mesas: ¿ha salido «Proyecto guardado»? Si no, que vuelva a hacer «Comprueba» y «Guárdalo y continúa»."]
      ],
      diff: {
        mes: "Afegir al pla un segon nivell (què canvia quan arribes a 5 punts?) i escriure'n les regles. A la versió 1, posar-hi ja la regla de recollir el premi.|Añadir al plan un segundo nivel (¿qué cambia cuando llegas a 5 puntos?) y escribir sus reglas. En la versión 1, poner ya la regla de recoger el premio.",
        menys: "Partir d'un dels videojocs de la sessió (recollir estrelles i esquivar una roca) i canviar-ne només els personatges i el fons. Fer servir les targetes de regles en lloc d'escriure-les.|Partir de uno de los videojuegos de la sesión (recoger estrellas y esquivar una roca) y cambiar solo los personajes y el fondo. Usar las tarjetas de reglas en lugar de escribirlas."
      },
      aval: {
        ticket: ["Digues les quatre peces d'un videojoc.|Di las cuatro piezas de un videojuego.",
          "Digues una regla del teu videojoc començant per «si…».|Di una regla de tu videojuego empezando por «si…»."],
        rubric: [
          ["Peces del videojoc|Piezas del videojuego", "El seu pla té protagonista, objectiu, obstacle i regles, i sap dir-los.|Su plan tiene protagonista, objetivo, obstáculo y reglas, y sabe decirlos.", "Al pla hi falta alguna peça (sovint l'obstacle o el final).|Al plan le falta alguna pieza (a menudo el obstáculo o el final)."],
          ["Regles|Reglas", "Escriu regles amb «si… → …» i les relaciona amb un bloc «si» i una variable.|Escribe reglas con «si… → …» y las relaciona con un bloque «si» y una variable.", "Descriu el videojoc, però encara no en separa les regles.|Describe el videojuego, pero todavía no separa sus reglas."],
          ["Versió 1|Versión 1", "El protagonista es mou amb les fletxes i el projecte queda desat.|El protagonista se mueve con las flechas y el proyecto queda guardado.", "Necessita ajuda per fer servir els guions de les tecles.|Necesita ayuda para usar los guiones de las teclas."],
          [
            "El videojoc de paper|El videojuego de papel",
            "Prova el pla amb un company/a i reescriu les regles que no s'entenen.|Prueba el plan con un compañero/a y reescribe las reglas que no se entienden.",
            "Fa el pla, però no el prova o no hi canvia res.|Hace el plan, pero no lo prueba o no cambia nada."
          ]
        ]
      },
      casa: "A casa, feu el videojoc de paper amb algú de la família (pas «Un videojoc de paper» de l'app): l'alumne/a explica les regles i l'altra persona el prova movent les peces. Si cal, milloreu el pla abans de la setmana vinent.|En casa, haced el videojuego de papel con alguien de la familia (paso «Un videojuego de papel» de la app): el alumno/a explica las reglas y la otra persona lo prueba moviendo las piezas. Si hace falta, mejorad el plan antes de la semana que viene.",
      slides: [
        { id: 's1', k: 'portada', t: 'La idea i el pla|La idea y el plan', x: "Comença el projecte final: el teu propi videojoc!|Empieza el proyecto final: ¡tu propio videojuego!",
          nota: "Explica que és l'última unitat del curs i que tot el que han après hi servirà.|Explica que es la última unidad del curso y que todo lo que han aprendido servirá." },
        { id: 's2', k: 'pregunta', t: 'Què té un videojoc?|¿Qué tiene un videojuego?', x: "Pensa en un videojoc que coneguis: qui és el protagonista i què ha d'aconseguir?|Piensa en un videojuego que conozcas: ¿quién es el protagonista y qué tiene que conseguir?",
          nota: "Recull respostes sense jutjar cap videojoc. Anota a la pissarra paraules com «personatge», «punts», «vides», «enemics».|Recoge respuestas sin juzgar ningún videojuego. Anota en la pizarra palabras como «personaje», «puntos», «vidas», «enemigos»." },
        { id: 's3', k: 'concepte', t: 'El pla de les quatre setmanes|El plan de las cuatro semanas', punts: ['1. La idea i el pla|1. La idea y el plan', '2. Construir-lo peça a peça|2. Construirlo pieza a pieza', '3. Provar-lo amb un company/a i millorar-lo|3. Probarlo con un compañero/a y mejorarlo', '4. Presentar-lo a la Fira de Videojocs|4. Presentarlo en la Feria de Videojuegos'],
          nota: "Deixa clar que l'app desa cada versió i que cada setmana continuaran des d'on ho van deixar.|Deja claro que la app guarda cada versión y que cada semana continuarán desde donde lo dejaron.", pic: "img/ic/calendar.webp" },
        { id: 's4', k: 'anim', t: "Les quatre peces d'un videojoc|Las cuatro piezas de un videojuego", anim: 'g8parts', x: 'Protagonista, objectiu, obstacle i regles.|Protagonista, objetivo, obstáculo y reglas.',
          nota: "Pregunta què passaria si en faltés una: sense obstacle, és massa fàcil; sense objectiu, no se sap què fer.|Pregunta qué pasaría si faltara una: sin obstáculo, es demasiado fácil; sin objetivo, no se sabe qué hacer." },
        { id: 's5', k: 'pregunta', t: 'Troba les peces|Encuentra las piezas', punts: ["Un peix que menja bombolles i esquiva crancs|Un pez que come burbujas y esquiva cangrejos", "Una nau que recull estrelles mentre cauen meteorits|Una nave que recoge estrellas mientras caen meteoritos", "Un gat que surt d'un laberint abans que s'acabi el temps|Un gato que sale de un laberinto antes de que se acabe el tiempo"],
          nota: "Per a cada idea, que diguin les quatre peces. A la tercera, l'obstacle és el temps (el cronòmetre).|Para cada idea, que digan las cuatro piezas. En la tercera, el obstáculo es el tiempo (el cronómetro)." },
        { id: 's6', k: 'media', t: 'Cada regla és un «si…»|Cada regla es un «si…»', x: "Si el gat toca la moneda → punts +1 i la moneda salta a l'atzar.|Si el gato toca la moneda → puntos +1 y la moneda salta al azar.", media: { k: 'stage', w: W_DEMO, prog: P_DEMO, varNames: { punts: 'punts|puntos' } },
          nota: "Escriu la regla a la pissarra amb paraules i, al costat, els blocs que la fan: «si toca», «suma a punts 1», «ves a un lloc a l'atzar».|Escribe la regla en la pizarra con palabras y, al lado, los bloques que la hacen: «si toca», «suma a puntos 1», «ve a un sitio al azar»." },
        { id: 's7', k: 'anim', t: "Com s'acaba?|¿Cómo se termina?", anim: 'g8win', x: 'Si punts = 10 → has guanyat. Si vides = 0 → has perdut.|Si puntos = 10 → has ganado. Si vidas = 0 → has perdido.',
          nota: "Comenta altres finals possibles: arribar a una bandera, aguantar fins que el cronòmetre arriba a 30.|Comenta otros finales posibles: llegar a una bandera, aguantar hasta que el cronómetro llega a 30." },
        { id: 's8', k: 'anim', t: 'Primer, en paper|Primero, en papel', anim: 'g8plan', x: "L'esbós i les regles amb paraules; després, els blocs.|El boceto y las reglas con palabras; después, los bloques.",
          nota: "Dibuixa a la pissarra el pla del teu videojoc d'exemple: escenari, personatges i tres regles.|Dibuja en la pizarra el plan de tu videojuego de ejemplo: escenario, personajes y tres reglas." },
        { id: 's9', k: 'anim', t: 'Comença petit|Empieza pequeño', anim: 'g8small', x: 'Versió 1, versió 2, versió 3: una peça cada vegada.|Versión 1, versión 2, versión 3: una pieza cada vez.',
          nota: "Insisteix: una versió petita que funciona és millor que una de gran que no funciona.|Insiste: una versión pequeña que funciona es mejor que una grande que no funciona." },
        { id: 's10', k: 'activitat', t: 'El videojoc de paper|El videojuego de papel', timer: 12, punts: ["Dibuixa l'escenari i on comença cada personatge.|Dibuja el escenario y dónde empieza cada personaje.", 'Escriu (o enganxa) les regles: recollir, perdre, guanyar.|Escribe (o pega) las reglas: recoger, perder, ganar.', "El company/a el prova: mou el protagonista amb el dit.|El compañero/a lo prueba: mueve el protagonista con el dedo.", "Tu mous l'enemic i apuntes punts i vides.|Tú mueves el enemigo y apuntas puntos y vidas."],
          nota: "Passa per les taules i pregunta a cada autor/a com es guanya i com es perd al seu videojoc.|Pasa por las mesas y pregunta a cada autor/a cómo se gana y cómo se pierde en su videojuego." },
        { id: 's11', k: 'activitat', t: 'Comprova el teu pla|Comprueba tu plan', punts: ['Hi ha protagonista, objectiu, obstacle i regles?|¿Hay protagonista, objetivo, obstáculo y reglas?', "Cada regla comença per «si…»?|¿Cada regla empieza por «si…»?", 'Hi ha una manera de guanyar i una de perdre?|¿Hay una manera de ganar y una de perder?', "Has encerclat la versió 1?|¿Has rodeado la versión 1?"],
          nota: "Deixa aquesta llista projectada mentre acaben. Els plans es guarden a la carpeta.|Deja esta lista proyectada mientras acaban. Los planes se guardan en la carpeta." },
        { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ['Obre la sessió «La idea i el pla».|Abre la sesión «La idea y el plan».', '«Un videojoc de paper»: ja l\'has fet, toca «Ho hem fet!».|«Un videojuego de papel»: ya lo has hecho, toca «¡Lo hemos hecho!».', "Prova el videojoc d'en Vuit abans de dir què hi falta.|Prueba el videojuego de Vuit antes de decir qué le falta.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
          nota: "Fes la pausa activa tots junts quan la majoria hi arribi.|Haced la pausa activa todos juntos cuando la mayoría llegue." },
        { id: 's13', k: 'pregunta', t: "Què li falta al videojoc d'en Vuit?|¿Qué le falta al videojuego de Vuit?", x: 'Els punts pugen i pugen… i no passa res més.|Los puntos suben y suben… y no pasa nada más.',
          nota: "Fes-los dir que hi falta un obstacle i un final. Pregunta quina regla hi posarien.|Haz que digan que le falta un obstáculo y un final. Pregunta qué regla le pondrían." },
        { id: 's14', k: 'repte', t: 'Les tres regles|Las tres reglas', timer: 10, punts: ['1. Recollir: si toca → punts +1 i a l\'atzar|1. Recoger: si toca → puntos +1 y al azar', '2. Perdre una vida: si toca → vides −1 i espera|2. Perder una vida: si toca → vidas −1 y espera', '3. Guanyar: si punts > 4 → «Has guanyat!» i atura tot|3. Ganar: si puntos > 4 → «¡Has ganado!» y para todo'],
          nota: "Són les tres regles que gairebé tots faran servir al seu videojoc: si les entenen ara, la setmana vinent aniran molt més de pressa.|Son las tres reglas que casi todos usarán en su videojuego: si las entienden ahora, la semana que viene irán mucho más deprisa." },
        { id: 's15', k: 'activitat', t: 'Tria les peces i fes la versió 1|Elige las piezas y haz la versión 1', timer: 6, punts: ['Tria protagonista, premi, enemic i fons, i desa-ho.|Elige protagonista, premio, enemigo y fondo, y guárdalo.', 'El protagonista es mou amb les fletxes.|El protagonista se mueve con las flechas.', 'En començar, diu el nom del videojoc.|Al empezar, dice el nombre del videojuego.', "Toca Comprova i desa'l!|¡Toca Comprueba y guárdalo!"],
          nota: "Comprova que tothom ha desat la versió 1: és el punt de partida de la sessió següent.|Comprueba que todo el mundo ha guardado la versión 1: es el punto de partida de la sesión siguiente." },
        { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ['Un videojoc té quatre peces.|Un videojuego tiene cuatro piezas.', 'Cada regla és un «si…» amb una variable.|Cada regla es un «si…» con una variable.', 'Primer el pla en paper i una versió petita.|Primero el plan en papel y una versión pequeña.'],
          nota: "Torna a la pregunta del principi: ara ja saben de quines peces està fet un videojoc.|Vuelve a la pregunta del principio: ahora ya saben de qué piezas está hecho un videojuego." },
        { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Les quatre peces d'un videojoc.|Las cuatro piezas de un videojuego.", 'Una regla del teu videojoc amb «si…».|Una regla de tu videojuego con «si…».'],
          nota: "Anota qui encara no té clar el seu objectiu o el seu obstacle: la setmana vinent comença per ells.|Anota quién aún no tiene claro su objetivo o su obstáculo: la semana que viene empieza por ellos." }
      ],
      print: [
        { id: 'p1', t: 'El pla del meu videojoc|El plan de mi videojuego', k: 'graella', w: 8, h: 6,
          legend: [['🦸', 'Protagonista|Protagonista'], ['⭐', 'El que recull|Lo que recoge'], ['☄️', "L'enemic o l'obstacle|El enemigo o el obstáculo"], ['🚩', 'Sortida o meta|Salida o meta'], ['➡️', 'Com es mou|Cómo se mueve']],
          intro: "La graella és l'escenari: cada quadre fa 60 punts. Dibuixa el fons i on comença cada personatge, i respon les preguntes.|La cuadrícula es el escenario: cada cuadro mide 60 puntos. Dibuja el fondo y dónde empieza cada personaje, y responde las preguntas.",
          items: [
            { q: "Com es diu el teu videojoc? Qui és el protagonista i què ha d'aconseguir?|¿Cómo se llama tu videojuego? ¿Quién es el protagonista y qué tiene que conseguir?" },
            { q: 'Escriu les regles amb «si… → …» (recollir, perdre, guanyar).|Escribe las reglas con «si… → …» (recoger, perder, ganar).', big: true },
            { q: 'Encercla què farà la versió 1 (la més petita que ja funciona).|Rodea qué hará la versión 1 (la más pequeña que ya funciona).' }
          ] },
        { id: 'p2', t: 'Targetes de regles|Tarjetas de reglas', k: 'targetes',
          intro: "Un paquet per parella. Retalleu-les i enganxeu al pla les que faci servir el vostre videojoc. Les buides són per inventar-ne de noves.|Un paquete por pareja. Recortadlas y pegad en el plan las que use vuestro videojuego. Las vacías son para inventar otras nuevas.",
          items: [
            { t: 'Si premo una fletxa → em moc ➡️|Si pulso una flecha → me muevo ➡️', n: 2 },
            { t: 'Si toco el premi → punts +1 ⭐|Si toco el premio → puntos +1 ⭐', n: 2 },
            { t: "Si toco l'enemic → vides −1 💔|Si toco al enemigo → vidas −1 💔", n: 2 },
            { t: 'Si punts = 10 → he guanyat 🏆|Si puntos = 10 → he ganado 🏆', n: 1 },
            { t: 'Si vides = 0 → he perdut 🛑|Si vidas = 0 → he perdido 🛑', n: 1 },
            { t: 'Si punts = 5 → nivell 2 🌙|Si puntos = 5 → nivel 2 🌙', n: 1 },
            { t: 'Si … → … ✏️|Si … → … ✏️', n: 3 }
          ] }
      ]
    },

    /* ---------- Sessió 2 · Construeix-lo peça a peça ---------- */
    'g8-2': {
      intro: "Segona sessió del projecte: la versió 1 es fa gran. L'alumnat aprèn tres idees per construir bé: cada personatge té els seus guions (i tots comencen alhora), el guió de la bandera ho posa tot a lloc abans del bucle (punts a 0, vides a 3, posició de sortida) i un videojoc es construeix peça a peça, provant cada peça. També veu peces que pot reutilitzar: un nivell 2, una velocitat que creix i una pluja de clons. La part central és el pas «Crea»: cadascú afegeix al seu videojoc les peces del pla fins que té variable, regla i dos personatges programats, i el desa com a versió 2.|Segunda sesión del proyecto: la versión 1 se hace grande. El alumnado aprende tres ideas para construir bien: cada personaje tiene sus guiones (y todos empiezan a la vez), el guion de la bandera lo pone todo en su sitio antes del bucle (puntos a 0, vidas a 3, posición de salida) y un videojuego se construye pieza a pieza, probando cada pieza. También ve piezas que puede reutilizar: un nivel 2, una velocidad que crece y una lluvia de clones. La parte central es el paso «Crea»: cada uno añade a su videojuego las piezas del plan hasta que tiene variable, regla y dos personajes programados, y lo guarda como versión 2.",
      claus: [
        "Cada personatge s'encarrega de les seves regles, i tots els guions funcionen alhora.|Cada personaje se encarga de sus reglas, y todos los guiones funcionan a la vez.",
        "En començar, tot a lloc: punts a 0, vides a 3, posició de sortida, i abans del bucle.|Al empezar, todo en su sitio: puntos a 0, vidas a 3, posición de salida, y antes del bucle.",
        "Una peça, la provo; una altra peça, la provo.|Una pieza, la pruebo; otra pieza, la pruebo.",
        "Un número (la velocitat) pot canviar la dificultat; els clons fan molts enemics amb un guió.|Un número (la velocidad) puede cambiar la dificultad; los clones hacen muchos enemigos con un guion."
      ],
      prev: [
        "El pla en paper i la versió 1 desada (sessió anterior).|El plan en papel y la versión 1 guardada (sesión anterior).",
        "Variables, condicions i «comparar números» (unitats 5 i 6).|Variables, condiciones y «comparar números» (unidades 5 y 6).",
        "Clons i velocitat que creix (unitat 7).|Clones y velocidad que crece (unidad 7)."
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
        "Ve de la sessió 1: la versió 1 i el pla en paper.|Viene de la sesión 1: la versión 1 y el plan en papel.",
        "Sessió següent: un company/a provarà el videojoc i el millorarem amb els seus comentaris.|Sesión siguiente: un compañero/a probará el videojuego y lo mejoraremos con sus comentarios.",
        "Tecnologia: construir un projecte per parts i provar cada part (com un enginyer/a).|Tecnología: construir un proyecto por partes y probar cada parte (como un ingeniero/a)."
      ],
      obj: [
        "L'alumne/a reparteix les regles del seu videojoc entre els personatges i programa cada personatge amb els seus guions.|El alumno/a reparte las reglas de su videojuego entre los personajes y programa cada personaje con sus guiones.",
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
          "El pla de paper de cada alumne/a (de la sessió anterior)|El plan de papel de cada alumno/a (de la sesión anterior)",
          "Una pissarra petita o un full per fer de «marcador» al videojoc humà|Una pizarra pequeña o una hoja para hacer de «marcador» en el videojuego humano"
        ],
        imprimir: ["Targetes del videojoc humà|Tarjetas del videojuego humano", "Fitxa: de la regla als blocs|Ficha: de la regla a los bloques"],
        prep: [
          "Imprimir i retallar un paquet de targetes de papers per grup de 4 i una fitxa per alumne/a.|Imprimir y recortar un paquete de tarjetas de papeles por grupo de 4 y una ficha por alumno/a.",
          "Tornar a cada alumne/a la carpeta amb el seu pla.|Devolver a cada alumno/a la carpeta con su plan.",
          "Comprovar a l'app que tothom té desada la versió 1 (a «Projectes»). Qui no la tingui començarà amb les peces de mostra.|Comprobar en la app que todo el mundo tiene guardada la versión 1 (en «Proyectos»). Quien no la tenga empezará con las piezas de muestra.",
          "Marcar a terra un rectangle petit (l'escenari) per al videojoc humà.|Marcar en el suelo un rectángulo pequeño (el escenario) para el videojuego humano."
        ]
      },
      plan: [
        { min: 5, t: "Repàs: les peces i el pla|Repaso: las piezas y el plan", fase: 'inici',
          fa: "Cada alumne/a obre la carpeta i llegeix el seu pla. Pregunta a dos o tres alumnes les quatre peces del seu videojoc i presenta el repte del dia: fer créixer la versió 1 peça a peça.|Cada alumno/a abre la carpeta y lee su plan. Pregunta a dos o tres alumnos las cuatro piezas de su videojuego y presenta el reto del día: hacer crecer la versión 1 pieza a pieza.",
          diu: [
            "Obriu el pla: quines són les quatre peces del vostre videojoc?|Abrid el plan: ¿cuáles son las cuatro piezas de vuestro videojuego?",
            "Quina és la peça següent del vostre pla, després que el protagonista es mogui? (el premi, l'enemic…)|¿Cuál es la pieza siguiente de vuestro plan, después de que el protagonista se mueva? (el premio, el enemigo…)",
            "Encercleu-la: és la primera que fareu avui.|Rodeadla: es la primera que haréis hoy."
          ],
          slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Guions, inicialitzar, nivells i clons|Guiones, inicializar, niveles y clones", fase: 'teoria',
          fa: "Mostra que cada personatge té els seus guions i que tots comencen alhora. Amb la demo del cotxe, explica per què el guió de la bandera ho posa tot a lloc abans del «per sempre». Ensenya com un nivell canvia el fons i un número (la velocitat) i com un sol meteorit amb clons fa una pluja sencera.|Muestra que cada personaje tiene sus guiones y que todos empiezan a la vez. Con la demo del coche, explica por qué el guion de la bandera lo pone todo en su sitio antes del «por siempre». Enseña cómo un nivel cambia el fondo y un número (la velocidad) y cómo un solo meteorito con clones hace una lluvia entera.",
          diu: [
            "Quan toco la bandera, quins guions comencen? (tots alhora)|Cuando toco la bandera, ¿qué guiones empiezan? (todos a la vez)",
            "Què passaria si no poséssim els punts a 0 en començar? (començarien amb els de la partida anterior)|¿Qué pasaría si no pusiéramos los puntos a 0 al empezar? (empezarían con los de la partida anterior)",
            "Quin número fa que el gat corri més al nivell 2? (la velocitat: de 3 a 8)|¿Qué número hace que el gato corra más en el nivel 2? (la velocidad: de 3 a 8)",
            "Quants meteorits hem dibuixat? (un) I quants en veiem? (molts: són clons)|¿Cuántos meteoritos hemos dibujado? (uno) ¿Y cuántos vemos? (muchos: son clones)"
          ],
          slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Desconnectat: el videojoc humà|Desconectado: el videojuego humano", fase: 'desconnectat',
          fa: "En grups de 4, cada alumne/a rep una targeta amb un paper (protagonista, moneda, enemic, marcador) i el seu guió. A la teva senyal («bandera verda!»), tots fan el seu guió alhora dins del rectangle de terra: el protagonista camina, l'enemic el segueix a poc a poc i el marcador apunta punts i vides. Primer ho feu sense la targeta d'inicialitzar (el marcador comença amb els números de l'anterior) i després amb ella. Comenteu què ha canviat. Al final, cadascú omple la fitxa de les regles.|En grupos de 4, cada alumno/a recibe una tarjeta con un papel (protagonista, moneda, enemigo, marcador) y su guion. A tu señal («¡bandera verde!»), todos hacen su guion a la vez dentro del rectángulo del suelo: el protagonista camina, el enemigo lo sigue despacio y el marcador apunta puntos y vidas. Primero lo hacéis sin la tarjeta de inicializar (el marcador empieza con los números del anterior) y después con ella. Comentad qué ha cambiado. Al final, cada uno rellena la ficha de las reglas.",
          diu: [
            "Tothom comença alhora quan dic «bandera verda»: com a l'escenari!|Todo el mundo empieza a la vez cuando digo «bandera verde»: ¡como en el escenario!",
            "Marcador, amb quants punts comences? Per què? (amb 0: és la inicialització)|Marcador, ¿con cuántos puntos empiezas? ¿Por qué? (con 0: es la inicialización)",
            "Què ha canviat quan hem fet servir la targeta d'inicialitzar? (cada partida comença igual)|¿Qué ha cambiado cuando hemos usado la tarjeta de inicializar? (cada partida empieza igual)",
            "L'enemic camina sempre a poc a poc: si anés corrent, seria just?|El enemigo camina siempre despacio: si fuera corriendo, ¿sería justo?"
          ],
          slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 amb papers|Grupos de 4 con papeles" },
        { min: 10, t: "A l'ordinador: descobreix i arregla|En el ordenador: descubre y arregla", fase: 'ordinador',
          fa: "Cada alumne/a fa els passos fins a la pausa activa. Al bug del marcador que sempre marca 0, deixa que el provin abans de tocar el bloc. Al meteorit que només cau una vegada, recorda'ls la condició «comparar números» de la unitat 5.|Cada alumno/a hace los pasos hasta la pausa activa. En el bug del marcador que siempre marca 0, deja que lo prueben antes de tocar el bloque. En el meteorito que solo cae una vez, recuérdales la condición «comparar números» de la unidad 5.",
          diu: [
            "Llegiu el «per sempre» en veu alta: què fa a cada volta? (torna els punts a 0)|Leed el «por siempre» en voz alta: ¿qué hace en cada vuelta? (vuelve los puntos a 0)",
            "On és el meteorit quan ja no el veiem? Quina y té? (sota de -170)|¿Dónde está el meteorito cuando ya no lo vemos? ¿Qué y tiene? (debajo de -170)",
            "Quins dos blocs el tornen a dalt en un lloc a l'atzar? (ves a un lloc a l'atzar i posa y a 170)|¿Qué dos bloques lo devuelven arriba en un sitio al azar? (ve a un sitio al azar y pon y a 170)"
          ],
          slides: ['s11'], app: "Dels «Recorda» fins a la «Pausa activa»: la història, les targetes de «Descobreix», ordenar el guió, on va «posa punts a 0», el marcador que sempre marca 0 i el meteorit que només cau una vegada.|De los «Recuerda» hasta la «Pausa activa»: la historia, las tarjetas de «Descubre», ordenar el guion, dónde va «pon puntos a 0», el marcador que siempre marca 0 y el meteorito que solo cae una vez.", org: "Individual|Individual" },
        { min: 8, t: "Reptes: tres peces noves|Retos: tres piezas nuevas", fase: 'ordinador',
          fa: "Feu la pausa activa i deixa'ls fer els tres reptes: el nivell 2, la velocitat que creix i la pluja d'estrelles. Explica que són peces que poden copiar després al seu videojoc si encaixen amb el seu pla.|Haced la pausa activa y deja que hagan los tres retos: el nivel 2, la velocidad que crece y la lluvia de estrellas. Explica que son piezas que pueden copiar después en su videojuego si encajan con su plan.",
          diu: [
            "Aquesta peça la necessita el vostre videojoc? Si sí, recordeu com l'heu feta.|¿Esta pieza la necesita vuestro videojuego? Si sí, recordad cómo la habéis hecho.",
            "Nivell 2: amb quina condició canvia el fons? (punts > 2)|Nivel 2: ¿con qué condición cambia el fondo? (puntos > 2)",
            "La velocitat creix: quan sumes 1? (quan el meteorit torna a dalt)|La velocidad crece: ¿cuándo sumas 1? (cuando el meteorito vuelve arriba)",
            "Pluja d'estrelles: on va «esborra aquest clon»? (quan arriba a baix)|Lluvia de estrellas: ¿dónde va «borra este clon»? (cuando llega abajo)"
          ],
          slides: ['s12', 's13'], app: "«Pausa activa» i els tres reptes: el nivell 2, cada cop més de pressa i la pluja d'estrelles.|«Pausa activa» y los tres retos: el nivel 2, cada vez más deprisa y la lluvia de estrellas.", org: "Individual|Individual" },
        { min: 15, t: "Crea: el meu videojoc, peça a peça|Crea: mi videojuego, pieza a pieza", fase: 'crea',
          fa: "És el moment central de la sessió. Cada alumne/a obre la seva versió 1 i hi afegeix les peces del pla en ordre, provant-les una a una amb Comença. Deixa projectada la llista de peces. Quan el videojoc tingui una variable, una regla amb «si» i almenys dos personatges programats, el poden comprovar i desar. Qui acabi pot afegir-hi extres (sons, nivells, clons).|Es el momento central de la sesión. Cada alumno/a abre su versión 1 y le añade las piezas del plan en orden, probándolas una a una con Empieza. Deja proyectada la lista de piezas. Cuando el videojuego tenga una variable, una regla con «si» y al menos dos personajes programados, lo pueden comprobar y guardar. Quien acabe puede añadir extras (sonidos, niveles, clones).",
          diu: [
            "Una peça, la provo. Una altra peça, la provo.|Una pieza, la pruebo. Otra pieza, la pruebo.",
            "Quin personatge ha de tenir aquesta regla?|¿Qué personaje tiene que tener esta regla?",
            "Ja es pot guanyar o perdre? Com?|¿Ya se puede ganar o perder? ¿Cómo?",
            "Abans de sortir, deseu-lo: la setmana vinent el provarà un company/a.|Antes de salir, guardadlo: la semana que viene lo probará un compañero/a."
          ],
          slides: ['s14', 's15'], app: "Pas «Ara, el teu videojoc!» i pas «Crea»: el meu videojoc, versió 2.|Paso «¡Ahora, tu videojuego!» y paso «Crea»: mi videojuego, versión 2.", org: "Individual|Individual" },
        { min: 2, t: "Tancament|Cierre", fase: 'tancament',
          fa: "Repassa les idees de la sessió i fes les preguntes del tiquet. Assegura't que tothom ha desat la versió 2.|Repasa las ideas de la sesión y haz las preguntas del ticket. Asegúrate de que todo el mundo ha guardado la versión 2.",
          diu: [
            "Quina peça us ha costat més? Com l'heu arreglada?|¿Qué pieza os ha costado más? ¿Cómo la habéis arreglado?",
            "Per què «posa punts a 0» va abans del «per sempre»? (perquè passi una sola vegada)|¿Por qué «pon puntos a 0» va antes del «por siempre»? (para que pase una sola vez)",
            "Teniu la versió 2 desada?|¿Tenéis la versión 2 guardada?"
          ],
          slides: ['s16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
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
        menys: "Fer només les dues primeres peces de la llista (el premi i l'enemic) i copiar els blocs dels reptes de la sessió anterior. Tenir la fitxa de les regles a la taula com a guia.|Hacer solo las dos primeras piezas de la lista (el premio y el enemigo) y copiar los bloques de los retos de la sesión anterior. Tener la ficha de las reglas en la mesa como guía."
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
      casa: "A casa, ensenyeu el videojoc a algú de la família (és a «Projectes») i expliqueu-li quin personatge té cada regla. Si voleu, apunteu al pla les idees per a la setmana vinent.|En casa, enseñad el videojuego a alguien de la familia (está en «Proyectos») y explicadle qué personaje tiene cada regla. Si queréis, apuntad en el plan las ideas para la semana que viene.",
      slides: [
        { id: 's1', k: 'portada', t: 'Construeix-lo peça a peça|Constrúyelo pieza a pieza', x: 'Avui la versió 1 es fa gran.|Hoy la versión 1 se hace grande.',
          nota: "Que tinguin el pla de paper a la vista durant tota la sessió.|Que tengan el plan de papel a la vista durante toda la sesión." },
        { id: 's2', k: 'repas', t: 'Recordem|Recordemos', punts: ["Les quatre peces: protagonista, objectiu, obstacle, regles.|Las cuatro piezas: protagonista, objetivo, obstáculo, reglas.", 'Les regles: «si… → …».|Las reglas: «si… → …».', 'Comença petit: versió 1.|Empieza pequeño: versión 1.'],
          nota: "Fes que un parell d'alumnes expliquin la regla principal del seu videojoc.|Haz que un par de alumnos expliquen la regla principal de su videojuego." },
        { id: 's3', k: 'pregunta', t: 'Quina és la peça següent?|¿Cuál es la pieza siguiente?', x: 'Mira el teu pla: què hi afegiràs primer?|Mira tu plan: ¿qué añadirás primero?',
          nota: "Que encerclin al pla la peça que faran primer avui.|Que rodeen en el plan la pieza que harán primero hoy." },
        { id: 's4', k: 'anim', t: 'Cada personatge, els seus guions|Cada personaje, sus guiones', anim: 'g8who', x: 'Tots els guions comencen alhora amb la bandera.|Todos los guiones empiezan a la vez con la bandera.',
          nota: "Pregunta qui ha de tenir la regla «si toca el protagonista, punts +1»: la moneda la pot tenir, perquè és ella qui sap quan la toquen.|Pregunta quién tiene que tener la regla «si toca al protagonista, puntos +1»: la moneda la puede tener, porque es ella quien sabe cuándo la tocan." },
        { id: 's5', k: 'media', t: 'Tot a lloc en començar|Todo en su sitio al empezar', x: 'Punts a 0, vides a 3, a la sortida i visible.|Puntos a 0, vidas a 3, en la salida y visible.', media: { k: 'stage', w: { bg: 'ciutat', vars: ['punts', 'vides'], time: 5, sprites: [{ id: 'cotxe', art: 'cotxe', x: 60, y: 40, size: 70 }, { id: 'moneda', art: 'moneda', x: 140, y: -120 }] }, prog: '@cotxe flag{ setv:punts,0 setv:vides,3 goto:-160,-120 show say:"Som-hi!|¡Vamos!",1 forever{ chx:4 if:touch:moneda{ chv:punts,1 } } } @moneda flag{ forever{ next wait:0.1 } }', varNames: { punts: 'punts|puntos', vides: 'vides|vidas' } },
          nota: "Fes notar que el cotxe no comença on està dibuixat: «ves a» el porta a la sortida cada vegada.|Haz notar que el coche no empieza donde está dibujado: «ve a» lo lleva a la salida cada vez." },
        { id: 's6', k: 'concepte', t: 'El guió de la bandera del protagonista|El guion de la bandera del protagonista', punts: ['1. Posa punts a 0 i vides a 3|1. Pon puntos a 0 y vidas a 3', '2. Ves a la sortida i digues el nom|2. Ve a la salida y di el nombre', '3. Per sempre: les regles|3. Por siempre: las reglas'],
          nota: "Primer el que passa una sola vegada; després, el bucle amb el que es comprova tota l'estona.|Primero lo que pasa una sola vez; después, el bucle con lo que se comprueba todo el rato.", pic: "img/ment/lli.webp" },
        { id: 's7', k: 'media', t: 'Un nivell nou|Un nivel nuevo', x: 'Si punts > 2 → fons de nit i velocitat 8.|Si puntos > 2 → fondo de noche y velocidad 8.', media: { k: 'stage', w: W_LVL, prog: P_LVL, varNames: { punts: 'punts|puntos', velocitat: 'velocitat|velocidad' } },
          nota: "Fixeu-vos en la variable velocitat: el gat es mou «velocitat» passos. Canviar un número canvia la dificultat.|Fijaos en la variable velocidad: el gato se mueve «velocidad» pasos. Cambiar un número cambia la dificultad." },
        { id: 's8', k: 'media', t: 'Una pluja amb clons|Una lluvia con clones', x: 'Un sol meteorit amagat crea clons que cauen.|Un solo meteorito escondido crea clones que caen.', media: { k: 'stage', w: W_RAIN, prog: P_RAIN },
          nota: "Recorda que cada clon s'esborra quan arriba a baix: si no, se n'acumulen molts.|Recuerda que cada clon se borra cuando llega abajo: si no, se acumulan muchos." },
        { id: 's9', k: 'activitat', t: 'El videojoc humà|El videojuego humano', timer: 10, punts: ['Grups de 4: protagonista, moneda, enemic i marcador.|Grupos de 4: protagonista, moneda, enemigo y marcador.', 'Llegiu el vostre guió.|Leed vuestro guion.', '«Bandera verda!»: tots alhora.|«¡Bandera verde!»: todos a la vez.', "Primer sense inicialitzar, després amb la targeta d'inicialitzar.|Primero sin inicializar, después con la tarjeta de inicializar."],
          nota: "L'enemic camina sempre a poc a poc i ningú no corre: és una simulació, no una cursa.|El enemigo camina siempre despacio y nadie corre: es una simulación, no una carrera." },
        { id: 's10', k: 'pregunta', t: 'Què ha canviat?|¿Qué ha cambiado?', x: 'Per què el marcador ha de començar a 0 cada vegada?|¿Por qué el marcador tiene que empezar a 0 cada vez?',
          nota: "Connecta-ho amb el guió de la bandera: inicialitzar és fer que cada vegada comenci igual. Després, que omplin la fitxa.|Conéctalo con el guion de la bandera: inicializar es hacer que cada vez empiece igual. Después, que rellenen la ficha." },
        { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ['Obre «Construeix-lo peça a peça».|Abre «Constrúyelo pieza a pieza».', "Troba el bloc que deixa el marcador a 0.|Encuentra el bloque que deja el marcador a 0.", 'Arregla el meteorit que només cau una vegada.|Arregla el meteorito que solo cae una vez.', 'Para a la «Pausa activa».|Para en la «Pausa activa».'],
          nota: "Al meteorit, recorda que y < −170 vol dir «ja ha sortit per baix».|En el meteorito, recuerda que y < −170 quiere decir «ya ha salido por abajo»." },
        { id: 's12', k: 'repte', t: 'Tres peces noves|Tres piezas nuevas', timer: 8, punts: ['1. El nivell 2: si punts > 2, canvia el fons|1. El nivel 2: si puntos > 2, cambia el fondo', '2. Cada cop més de pressa: velocitat +1|2. Cada vez más deprisa: velocidad +1', "3. Pluja d'estrelles amb clons|3. Lluvia de estrellas con clones"],
          nota: "No cal que totes les peces vagin al seu videojoc: que triïn les que encaixen amb el pla.|No hace falta que todas las piezas vayan a su videojuego: que elijan las que encajan con el plan." },
        { id: 's13', k: 'media', t: 'Cada cop més de pressa|Cada vez más deprisa', x: 'Cada vegada que el meteorit torna a dalt, velocitat +1.|Cada vez que el meteorito vuelve arriba, velocidad +1.', media: { k: 'stage', w: { bg: 'espai', vars: ['velocitat'], time: 7, sprites: [{ id: 'meteorit', art: 'meteorit', x: 0, y: 170 }] }, prog: '@meteorit flag{ setv:velocitat,5 goto:0,170 point:180 forever{ move:$velocitat if:y<-170{ gotorand sety:170 chv:velocitat,1 } } }', varNames: { velocitat: 'velocitat|velocidad' } },
          nota: "Mostra-la si molts s'encallen amb el segon repte; si no, fes-la servir per comentar la solució al final.|Muéstrala si muchos se atascan con el segundo reto; si no, úsala para comentar la solución al final." },
        { id: 's14', k: 'activitat', t: 'El meu videojoc, peça a peça|Mi videojuego, pieza a pieza', timer: 15, punts: ['1. El protagonista es mou (ja ho tens!)|1. El protagonista se mueve (¡ya lo tienes!)', '2. El premi: si el toques, punts +1|2. El premio: si lo tocas, puntos +1', "3. L'enemic: si et toca, vides −1|3. El enemigo: si te toca, vidas −1", '4. Com guanyes i com perds|4. Cómo ganas y cómo pierdes', '5. Extres: sons, nivells, clons…|5. Extras: sonidos, niveles, clones…'],
          nota: "Deixa aquesta llista projectada. Després de cada peça, que toquin Comença i ho provin.|Deja esta lista proyectada. Después de cada pieza, que toquen Empieza y lo prueben." },
        { id: 's15', k: 'concepte', t: 'Abans de desar|Antes de guardar', punts: ['Té una variable (punts o vides).|Tiene una variable (puntos o vidas).', 'Té una regla amb «si…».|Tiene una regla con «si…».', 'Hi ha almenys dos personatges programats.|Hay al menos dos personajes programados.', "Toca Comprova i desa'l.|Toca Comprueba y guárdalo."],
          nota: "L'app ho comprova sola i els avisa si falta alguna cosa. Assegura't que tothom desa abans de sortir.|La app lo comprueba sola y les avisa si falta algo. Asegúrate de que todo el mundo guarda antes de salir.", pic: "img/ic/check.webp" },
        { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ['Cada personatge té els seus guions.|Cada personaje tiene sus guiones.', 'En començar, tot a lloc.|Al empezar, todo en su sitio.', 'Una peça, la provo; una altra peça…|Una pieza, la pruebo; otra pieza…'],
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
            { q: 'Ara una regla del teu videojoc: qui la té i quins blocs farà servir?|Ahora una regla de tu videojuego: ¿quién la tiene y qué bloques usará?',
              sol: "Resposta oberta. Comproveu que la regla comença per «si…» i que el personatge que la té és el que «s'adona» del que passa.|Respuesta abierta. Comprobad que la regla empieza por «si…» y que el personaje que la tiene es el que «se da cuenta» de lo que pasa." }
          ] }
      ]
    },

    /* ---------- Sessió 3 · Provar-lo i millorar-lo ---------- */
    'g8-3': {
      intro: "Tercera sessió del projecte: la sala de proves. L'alumnat aprèn que una persona nova troba bugs (errors) que l'autor/a no veu, que la dificultat s'ajusta canviant un número (velocitat, vides, punts per guanyar) i que un bon comentari té dues parts: una cosa que m'ha agradat i una idea per millorar. Practica amb informes de provadors en paper i amb tres bugs típics a l'app (enemic massa ràpid, cotxe que surt de l'escenari, sense instruccions). Després, les parelles canvien d'ordinador, es proven els videojocs i cadascú fa la versió 3 amb els canvis que decideix.|Tercera sesión del proyecto: la sala de pruebas. El alumnado aprende que una persona nueva encuentra bugs (errores) que el autor/a no ve, que la dificultad se ajusta cambiando un número (velocidad, vidas, puntos para ganar) y que un buen comentario tiene dos partes: algo que me ha gustado y una idea para mejorar. Practica con informes de probadores en papel y con tres bugs típicos en la app (enemigo demasiado rápido, coche que sale del escenario, sin instrucciones). Después, las parejas cambian de ordenador, se prueban los videojuegos y cada uno hace la versión 3 con los cambios que decide.",
      claus: [
        "Una persona nova prova el videojoc diferent i troba bugs que l'autor/a no veu.|Una persona nueva prueba el videojuego distinto y encuentra bugs que el autor/a no ve.",
        "La dificultat s'ajusta canviant un número: velocitat, vides o punts per guanyar.|La dificultad se ajusta cambiando un número: velocidad, vidas o puntos para ganar.",
        "Un bon comentari: una cosa que m'ha agradat + una idea concreta per millorar.|Un buen comentario: algo que me ha gustado + una idea concreta para mejorar.",
        "L'autor/a escolta i decideix què canvia: primer els bugs, després la dificultat.|El autor/a escucha y decide qué cambia: primero los bugs, después la dificultad."
      ],
      prev: [
        "La versió 2 del videojoc desada (sessió anterior).|La versión 2 del videojuego guardada (sesión anterior).",
        "Comparar la posició x amb un número i «posa x a» (unitat 4 i 5).|Comparar la posición x con un número y «pon x a» (unidades 4 y 5).",
        "Enviar i rebre missatges (unitat 3).|Enviar y recibir mensajes (unidad 3)."
      ],
      faq: [
        ["Què és un bug?|¿Qué es un bug?", "Un error del programa: una cosa que passa i no volies, com un cotxe que surt de l'escenari i no torna. La paraula ve de l'anglès i vol dir «bestiola».|Un error del programa: algo que pasa y no querías, como un coche que sale del escenario y no vuelve. La palabra viene del inglés y quiere decir «bicho»."],
        ["He de fer tot el que em diu el provador/a?|¿Tengo que hacer todo lo que me dice el probador/a?", "No. Escolta-ho tot, dona les gràcies i decideix tu: primer arregla els bugs i després tria la idea que millor encaixi amb el teu videojoc.|No. Escúchalo todo, da las gracias y decide tú: primero arregla los bugs y después elige la idea que mejor encaje con tu videojuego."],
        ["Per què no puc ajudar el provador/a?|¿Por qué no puedo ayudar al probador/a?", "Perquè la gent que el provarà a la fira no et tindrà al costat. Si s'encalla, és una pista del que has de millorar: apunta-ho!|Porque la gente que lo probará en la feria no te tendrá al lado. Si se atasca, es una pista de lo que tienes que mejorar: ¡apúntalo!"],
        ["El provador/a diu que és massa difícil. Què canvio?|El probador/a dice que es demasiado difícil. ¿Qué cambio?", "Un sol número: l'enemic més lent, més vides al principi o menys punts per guanyar. Prova-ho tu després del canvi.|Un solo número: el enemigo más lento, más vidas al principio o menos puntos para ganar. Pruébalo tú después del cambio."],
        ["L'app diu que el videojoc és igual que abans.|La app dice que el videojuego es igual que antes.", "Per desar la versió 3 cal fer-hi almenys un canvi. Tria'n un del full del provador/a.|Para guardar la versión 3 hay que hacerle al menos un cambio. Elige uno de la hoja del probador/a."],
        ["Com sé quina x té la vora?|¿Cómo sé qué x tiene el borde?", "L'escenari va de x = -240 a x = 240. Per no sortir, posa el límit una mica abans: 200 i -200.|El escenario va de x = -240 a x = 240. Para no salir, pon el límite un poco antes: 200 y -200."]
      ],
      tec: [
        ["No es troba la versió anterior del videojoc.|No se encuentra la versión anterior del videojuego.", "Cada sessió obre l'última versió desada al portafoli (a «Projectes») amb el mateix perfil. Si no n'hi ha cap, l'app comença amb les peces de mostra: es pot tornar al pas «Tria les peces» de la sessió 1 i desar-les.|Cada sesión abre la última versión guardada en el portafolio (en «Proyectos») con el mismo perfil. Si no hay ninguna, la app empieza con las piezas de muestra: se puede volver al paso «Elige las piezas» de la sesión 1 y guardarlas."],
        ["No s'ha desat el videojoc.|No se ha guardado el videojuego.", "Només es desa quan passa la comprovació i es toca «Desa-ho i continua». Si se surt abans, cal tornar a fer «Comprova».|Solo se guarda cuando pasa la comprobación y se toca «Guárdalo y continúa». Si se sale antes, hay que volver a hacer «Comprueba»."],
        ["Les fletxes del teclat no mouen el protagonista.|Las flechas del teclado no mueven al protagonista.", "Cal tocar primer l'escenari perquè la pàgina «escolti» el teclat, o fer servir els botons de fletxes de sota l'escenari (també al mòbil).|Hay que tocar primero el escenario para que la página «escuche» el teclado, o usar los botones de flechas de debajo del escenario (también en el móvil)."],
        ["Al canvi de lloc, el provador/a veu el seu propi videojoc.|En el cambio de sitio, el probador/a ve su propio videojuego.", "Es prova a l'ordinador de l'autor/a, amb la sessió de l'autor/a oberta: canvieu de cadira, no de perfil.|Se prueba en el ordenador del autor/a, con la sesión del autor/a abierta: cambiad de silla, no de perfil."],
        ["Alguna parella no pot canviar de lloc (algú ha faltat).|Alguna pareja no puede cambiar de sitio (alguien ha faltado).", "Fes un trio o fes tu de provador/a. També pot provar-lo algú de casa (pas «Canvi de lloc!»).|Haced un trío o haz tú de probador/a. También puede probarlo alguien de casa (paso «¡Cambio de sitio!»)."]
      ],
      seg: [
        "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
        "Comentaris: es parla del videojoc, no de la persona; cap comentari de rialla o de burla. Si un alumne/a es posa trist/a, acompanya'l a trobar una cosa bona del seu treball.|Comentarios: se habla del videojuego, no de la persona; ningún comentario de risa o de burla. Si un alumno/a se pone triste, acompáñale a encontrar algo bueno de su trabajo.",
        "Canvi de lloc: es fa caminant, amb una senyal clara, i cadascú deixa la cadira neta per al company/a.|Cambio de sitio: se hace caminando, con una señal clara, y cada uno deja la silla limpia para el compañero/a."
      ],
      extra: [
        "Fer de provador/a d'un segon videojoc i deixar-hi un altre full.|Hacer de probador/a de un segundo videojuego y dejarle otra hoja.",
        "Afegir al propi videojoc una pantalla d'instruccions amb un missatge que el posa en marxa.|Añadir al propio videojuego una pantalla de instrucciones con un mensaje que lo pone en marcha.",
        "Fer una llista dels bugs trobats a la classe i classificar-los: falta un bloc o cal canviar un número?|Hacer una lista de los bugs encontrados en la clase y clasificarlos: ¿falta un bloque o hay que cambiar un número?"
      ],
      trans: [
        "Ve de la sessió 2: la versió 2 del videojoc.|Viene de la sesión 2: la versión 2 del videojuego.",
        "Sessió següent: últims retocs, títol i instruccions i l'estrena a la Fira de Videojocs.|Sesión siguiente: últimos retoques, título e instrucciones y el estreno en la Feria de Videojuegos.",
        "Educació en valors: donar i rebre crítiques amb respecte; llengua: escriure un informe breu i concret.|Educación en valores: dar y recibir críticas con respeto; lengua: escribir un informe breve y concreto."
      ],
      obj: [
        "L'alumne/a prova el videojoc d'un company/a sense ajuda i en detecta bugs i problemes de dificultat.|El alumno/a prueba el videojuego de un compañero/a sin ayuda y detecta bugs y problemas de dificultad.",
        "L'alumne/a dona un comentari amable i útil (una cosa que li ha agradat i una idea per millorar) i rep els comentaris sobre el seu.|El alumno/a da un comentario amable y útil (algo que le ha gustado y una idea para mejorar) y recibe los comentarios sobre el suyo.",
        "L'alumne/a ajusta la dificultat canviant números (velocitat, vides, punts per guanyar) i arregla bugs típics (sortir de l'escenari, falta d'instruccions).|El alumno/a ajusta la dificultad cambiando números (velocidad, vidas, puntos para ganar) y arregla bugs típicos (salir del escenario, falta de instrucciones).",
        "L'alumne/a decideix quins canvis fa al seu videojoc a partir dels comentaris i en desa una versió millorada.|El alumno/a decide qué cambios hace en su videojuego a partir de los comentarios y guarda una versión mejorada."
      ],
      comp: [
        "Competència digital (CD5): avaluar i millorar un producte digital a partir de proves amb usuaris|Competencia digital (CD5): evaluar y mejorar un producto digital a partir de pruebas con usuarios",
        "Pensament computacional: depuració, proves i ajust de paràmetres|Pensamiento computacional: depuración, pruebas y ajuste de parámetros",
        "Competència personal i social: donar i rebre comentaris amb respecte|Competencia personal y social: dar y recibir comentarios con respeto",
        "Comunicació oral i escrita: descriure un problema de manera concreta|Comunicación oral y escrita: describir un problema de manera concreta"
      ],
      vocab: [
        ["Provador/a|Probador/a", "La persona que prova un videojoc que no ha fet per trobar-hi bugs i idees.|La persona que prueba un videojuego que no ha hecho para encontrar bugs e ideas."],
        ["Bug|Bug", "Un error del programa: fa una cosa que no volíem.|Un error del programa: hace algo que no queríamos."],
        ["Dificultat|Dificultad", "Com costa aconseguir l'objectiu: massa fàcil, al punt o massa difícil.|Cuánto cuesta conseguir el objetivo: demasiado fácil, en su punto o demasiado difícil."],
        ["Comentari|Comentario", "El que diu el provador/a: una cosa que li ha agradat i una idea per millorar.|Lo que dice el probador/a: algo que le ha gustado y una idea para mejorar."],
        ["Ajustar|Ajustar", "Canviar un número (velocitat, vides…) per fer el videojoc més just.|Cambiar un número (velocidad, vidas…) para hacer el videojuego más justo."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Provar-lo i millorar-lo»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Probarlo y mejorarlo»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "El pla de paper de cada alumne/a|El plan de papel de cada alumno/a",
          "Llapis vermell i llapis verd per parella|Lápiz rojo y lápiz verde por pareja"
        ],
        imprimir: ["Fitxa: detectius de bugs|Ficha: detectives de bugs", "Full del provador/a|Hoja del probador/a"],
        prep: [
          "Fer les parelles de provadors abans de la classe (millor si no són els companys de taula habituals).|Hacer las parejas de probadores antes de la clase (mejor si no son los compañeros de mesa habituales).",
          "Imprimir una fitxa de detectius per parella i un full del provador/a per alumne/a.|Imprimir una ficha de detectives por pareja y una hoja del probador/a por alumno/a.",
          "Comprovar que tothom té desada la versió 2 del videojoc (a «Projectes»).|Comprobar que todo el mundo tiene guardada la versión 2 del videojuego (en «Proyectos»).",
          "Preparar una senyal clara per al canvi de lloc (per exemple, una campaneta o una música curta).|Preparar una señal clara para el cambio de sitio (por ejemplo, una campanita o una música corta)."
        ]
      },
      plan: [
        { min: 4, t: "Benvinguda: la sala de proves|Bienvenida: la sala de pruebas", fase: 'inici',
          fa: "Explica que abans de l'estrena tots els videojocs passen per la sala de proves i que avui seran provadors/es. Pregunta per què creuen que els creadors fan provar els seus videojocs a altres persones.|Explica que antes del estreno todos los videojuegos pasan por la sala de pruebas y que hoy serán probadores/as. Pregunta por qué creen que los creadores hacen probar sus videojuegos a otras personas.",
          diu: [
            "Qui coneix millor el vostre videojoc? (jo) I qui hi trobarà coses noves? (algú que no l'ha vist mai)|¿Quién conoce mejor vuestro videojuego? (yo) ¿Y quién le encontrará cosas nuevas? (alguien que no lo ha visto nunca)",
            "Per què els creadors fan provar els seus videojocs a altres persones?|¿Por qué los creadores hacen probar sus videojuegos a otras personas?",
            "Avui tots sereu autors/es i provadors/es.|Hoy todos seréis autores/as y probadores/as."
          ],
          slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 8, t: "Ulls nous, dificultat i comentaris|Ojos nuevos, dificultad y comentarios", fase: 'teoria',
          fa: "Amb la demo del cotxe, mostra un bug que l'autor/a no veu perquè sempre prova igual. Explica com s'ajusta la dificultat canviant un número i com es fa un bon comentari en dues parts. Ensenya el truc d'espiar una variable amb «digues».|Con la demo del coche, muestra un bug que el autor/a no ve porque siempre prueba igual. Explica cómo se ajusta la dificultad cambiando un número y cómo se hace un buen comentario en dos partes. Enseña el truco de espiar una variable con «di».",
          diu: [
            "El cotxe se'n va i no torna: és un bug o és el que volíem? (un bug)|El coche se va y no vuelve: ¿es un bug o es lo que queríamos? (un bug)",
            "Quins números podem canviar per fer-lo més fàcil? (velocitat, vides, punts per guanyar)|¿Qué números podemos cambiar para hacerlo más fácil? (velocidad, vidas, puntos para ganar)",
            "«És avorrit» ajuda l'autor/a? Com ho podríem dir perquè l'ajudi? («M'agrada… I si…?»)|«Es aburrido», ¿ayuda al autor/a? ¿Cómo lo podríamos decir para que le ayude? («Me gusta… ¿Y si…?»)",
            "Per què el gat diu els punts tota l'estona? (per veure la variable i trobar el bug)|¿Por qué el gato dice los puntos todo el rato? (para ver la variable y encontrar el bug)"
          ],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Desconnectat: detectius de bugs|Desconectado: detectives de bugs", fase: 'desconnectat',
          fa: "En parelles, llegiu els informes dels provadors de la fitxa. Per a cada un, la parella decideix si és un bug o un problema de dificultat, marca en vermell el bloc o el número culpable i escriu en verd l'arreglo. Comenteu-ne dos en veu alta.|Por parejas, leed los informes de los probadores de la ficha. Para cada uno, la pareja decide si es un bug o un problema de dificultad, marca en rojo el bloque o el número culpable y escribe en verde el arreglo. Comentad dos en voz alta.",
          diu: [
            "Què diu exactament el provador/a? On pot ser el problema?|¿Qué dice exactamente el probador/a? ¿Dónde puede estar el problema?",
            "És un bug o és la dificultat?|¿Es un bug o es la dificultad?",
            "Per arreglar-ho, cal un bloc nou o només canviar un número?|Para arreglarlo, ¿hace falta un bloque nuevo o solo cambiar un número?",
            "Quin informe us ha costat més? Per què?|¿Qué informe os ha costado más? ¿Por qué?"
          ],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles|Por parejas" },
        { min: 15, t: "A l'ordinador: proves i bugs|En el ordenador: pruebas y bugs", fase: 'ordinador',
          fa: "Cada alumne/a fa els passos fins als dos reptes de bugs, inclosa la pausa activa. A «Pluja de meteorits», deixa que el provin unes quantes vegades abans de respondre. Al cranc, insisteix que canviïn només un número.|Cada alumno/a hace los pasos hasta los dos retos de bugs, incluida la pausa activa. En «Lluvia de meteoritos», deja que lo prueben unas cuantas veces antes de responder. En el cangrejo, insiste en que cambien solo un número.",
          diu: [
            "Quin número fa que el cranc vagi tan de pressa? (el 9 del «mou-te»)|¿Qué número hace que el cangrejo vaya tan deprisa? (el 9 del «muévete»)",
            "Quina x té el cotxe quan arriba a la vora? I a l'altra vora? (uns 200 i -200)|¿Qué x tiene el coche cuando llega al borde? ¿Y en el otro borde? (unos 200 y -200)",
            "Quin bloc posa en marxa la pilota després de les instruccions? (envia el missatge som-hi)|¿Qué bloque pone en marcha la pelota después de las instrucciones? (envía el mensaje som-hi)"
          ],
          slides: ['s10', 's11'], app: "Dels «Recorda» fins als dos reptes: la història, «Descobreix», el millor comentari, el bon provador/a, «Pluja de meteorits», com fer-lo més just, el cranc massa ràpid, la pausa activa, el cotxe que surt de l'escenari i les instruccions.|De los «Recuerda» hasta los dos retos: la historia, «Descubre», el mejor comentario, el buen probador/a, «Lluvia de meteoritos», cómo hacerlo más justo, el cangrejo demasiado rápido, la pausa activa, el coche que sale del escenario y las instrucciones.", org: "Individual|Individual" },
        { min: 20, t: "Crea: canvi de lloc, valoració i millora|Crea: cambio de sitio, valoración y mejora", fase: 'crea',
          fa: "Quan tothom arribi al pas «Canvi de lloc!», fes la senyal: cada provador/a seu a l'ordinador del seu company/a. L'autor/a explica només les instruccions i calla. El provador/a prova el videojoc almenys tres vegades, omple la valoració de l'app i el full del provador/a, i explica de paraula una cosa que li ha agradat i una idea. Torneu al vostre lloc i cada autor/a fa la versió 3 amb els canvis que decideixi. Si un videojoc té un bug greu, ajuda l'autor/a a trobar-lo amb preguntes.|Cuando todo el mundo llegue al paso «¡Cambio de sitio!», haz la señal: cada probador/a se sienta en el ordenador de su compañero/a. El autor/a explica solo las instrucciones y calla. El probador/a prueba el videojuego al menos tres veces, rellena la valoración de la app y la hoja del probador/a, y explica de palabra algo que le ha gustado y una idea. Volved a vuestro sitio y cada autor/a hace la versión 3 con los cambios que decida. Si un videojuego tiene un bug grave, ayuda al autor/a a encontrarlo con preguntas.",
          diu: [
            "Autors/es: mireu i calleu. Apunteu què costa!|Autores/as: mirad y callad. ¡Apuntad qué cuesta!",
            "Provadors/es: proveu-lo almenys tres vegades abans d'opinar.|Probadores/as: probadlo al menos tres veces antes de opinar.",
            "Primer una cosa que us agradi, després una idea concreta.|Primero algo que os guste, después una idea concreta.",
            "No cal fer tot el que us diuen: vosaltres decidiu què el fa millor.|No hace falta hacer todo lo que os dicen: vosotros decidís qué lo hace mejor."
          ],
          slides: ['s12', 's13', 's14', 's15'], app: "«Canvi de lloc!», el videojoc del company/a (pas per al provador/a), la valoració, «Torneu al vostre lloc» i el pas «Crea»: el meu videojoc, versió 3.|«¡Cambio de sitio!», el videojuego del compañero/a (paso para el probador/a), la valoración, «Volved a vuestro sitio» y el paso «Crea»: mi videojuego, versión 3.", org: "Per parelles i després individual|Por parejas y después individual" },
        { min: 3, t: "Tancament|Cierre", fase: 'tancament',
          fa: "Pregunta quin canvi ha fet cadascú a partir dels comentaris i recull els fulls del provador/a a les carpetes.|Pregunta qué cambio ha hecho cada uno a partir de los comentarios y recoge las hojas del probador/a en las carpetas.",
          diu: [
            "Quin comentari us ha ajudat més? Per què?|¿Qué comentario os ha ayudado más? ¿Por qué?",
            "Quin canvi heu fet a la versió 3?|¿Qué cambio habéis hecho en la versión 3?",
            "La setmana vinent és l'estrena: què us falta per tenir-lo a punt?|La semana que viene es el estreno: ¿qué os falta para tenerlo a punto?"
          ],
          slides: ['s16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["L'autor/a explica com es fa o agafa el ratolí al provador/a.|El autor/a explica cómo se hace o le coge el ratón al probador/a.",
          "Recorda la regla: l'autor/a només explica les instruccions. Si el provador/a s'encalla, això és una informació valuosa: que l'apunti!|Recuerda la regla: el autor/a solo explica las instrucciones. Si el probador/a se atasca, eso es una información valiosa: ¡que la apunte!"],
        ["Fa comentaris vagues («està bé», «és avorrit»).|Hace comentarios vagos («está bien», «es aburrido»).",
          "Pregunta: què t'ha agradat exactament? En quin moment t'has avorrit? Què hi canviaries?|Pregunta: ¿qué te ha gustado exactamente? ¿En qué momento te has aburrido? ¿Qué cambiarías?"],
        ["Es pren malament un comentari i no vol canviar res.|Se toma mal un comentario y no quiere cambiar nada.",
          "Recorda-li que el comentari parla del videojoc, no d'ell o ella, i que decideix quins canvis fa. Que en triï un de petit per començar.|Recuérdale que el comentario habla del videojuego, no de él o ella, y que decide qué cambios hace. Que elija uno pequeño para empezar."],
        ["Per fer-lo més fàcil, treu l'enemic o el fa quiet.|Para hacerlo más fácil, quita el enemigo o lo deja quieto.",
          "Sense obstacle no és un videojoc. Que provi de canviar un número: més lent, més vides o menys punts per guanyar.|Sin obstáculo no es un videojuego. Que pruebe a cambiar un número: más lento, más vidas o menos puntos para ganar."],
        ["Al repte del cotxe, només arregla una vora.|En el reto del coche, solo arregla un borde.",
          "Que toqui Comprova i miri què passa quan el cotxe va cap a l'esquerra. Quin número té la x a l'altra vora?|Que toque Comprueba y mire qué pasa cuando el coche va hacia la izquierda. ¿Qué número tiene la x en el otro borde?"],
        ["Com a provador/a, només diu el que li agrada i no gosa dir cap idea.|Como probador/a, solo dice lo que le gusta y no se atreve a decir ninguna idea.", "Recorda-li que una idea és un regal per a l'autor/a. Pregunta-li: on t'has encallat? Què hauria fet que fos més divertit?|Recuérdale que una idea es un regalo para el autor/a. Pregúntale: ¿dónde te has atascado? ¿Qué lo habría hecho más divertido?"]
      ],
      diff: {
        mes: "Fer de provador/a d'un segon videojoc i deixar-hi un altre full. Afegir al propi videojoc una pantalla d'instruccions amb un missatge que el posa en marxa.|Hacer de probador/a de un segundo videojuego y dejarle otra hoja. Añadir al propio videojuego una pantalla de instrucciones con un mensaje que lo pone en marcha.",
        menys: "A la millora, triar un sol canvi del full del provador/a, preferiblement un número (velocitat o vides). Fer la fitxa de detectius amb el professor/a.|En la mejora, elegir un solo cambio de la hoja del probador/a, preferiblemente un número (velocidad o vidas). Hacer la ficha de detectives con el profesor/a."
      },
      aval: {
        ticket: ["Digues un comentari amable i útil sobre el videojoc que has provat.|Di un comentario amable y útil sobre el videojuego que has probado.",
          "Quin canvi has fet al teu videojoc i per què?|¿Qué cambio has hecho en tu videojuego y por qué?"],
        rubric: [
          ["Provar|Probar", "Prova el videojoc sense ajuda i descriu bugs o problemes concrets.|Prueba el videojuego sin ayuda y describe bugs o problemas concretos.", "Prova el videojoc però li costa dir què falla.|Prueba el videojuego pero le cuesta decir qué falla."],
          ["Comentaris|Comentarios", "Dona comentaris en dues parts, concrets i amables, i escolta els que rep.|Da comentarios en dos partes, concretos y amables, y escucha los que recibe.", "Els seus comentaris són vagues o només diu una part.|Sus comentarios son vagos o solo dice una parte."],
          ["Millorar|Mejorar", "Fa almenys un canvi justificat a partir dels comentaris i el videojoc continua funcionant.|Hace al menos un cambio justificado a partir de los comentarios y el videojuego sigue funcionando.", "Fa canvis sense relació amb els comentaris o necessita ajuda per fer-los.|Hace cambios sin relación con los comentarios o necesita ayuda para hacerlos."],
          [
            "Escoltar els comentaris|Escuchar los comentarios",
            "Escolta sense justificar-se, dona les gràcies i explica quin canvi farà.|Escucha sin justificarse, da las gracias y explica qué cambio hará.",
            "Discuteix els comentaris o no en fa servir cap.|Discute los comentarios o no usa ninguno."
          ]
        ]
      },
      casa: "A casa, demaneu a algú de la família que provi el videojoc sense explicar-li res més que les instruccions. Mireu on s'encalla i apunteu-ho al pla per als últims retocs de la setmana vinent.|En casa, pedid a alguien de la familia que pruebe el videojuego sin explicarle nada más que las instrucciones. Mirad dónde se atasca y apuntadlo en el plan para los últimos retoques de la semana que viene.",
      slides: [
        { id: 's1', k: 'portada', t: 'Provar-lo i millorar-lo|Probarlo y mejorarlo', x: 'Avui sereu provadors/es de videojocs.|Hoy seréis probadores/as de videojuegos.',
          nota: "Explica que avui el videojoc de cadascú el provarà un company/a i que després el milloraran.|Explica que hoy el videojuego de cada uno lo probará un compañero/a y que después lo mejorarán." },
        { id: 's2', k: 'pregunta', t: 'Per què ho ha de provar algú altre?|¿Por qué lo tiene que probar otra persona?', x: 'Tu ja saps com funciona el teu videojoc…|Tú ya sabes cómo funciona tu videojuego…',
          nota: "Recull respostes. La idea clau: l'autor/a sempre prova igual i no veu el que veu algú nou.|Recoge respuestas. La idea clave: el autor/a siempre prueba igual y no ve lo que ve alguien nuevo." },
        { id: 's3', k: 'media', t: 'Ulls nous troben bugs|Ojos nuevos encuentran bugs', x: "El cotxe se'n va de l'escenari i ja no torna.|El coche se va del escenario y ya no vuelve.", media: { k: 'stage', w: W_EDGE, prog: P_EDGE },
          nota: "Pregunta com ho arreglarien: un «si x > 200, posa x a 200». És un dels reptes d'avui.|Pregunta cómo lo arreglarían: un «si x > 200, pon x a 200». Es uno de los retos de hoy." },
        { id: 's4', k: 'anim', t: 'Ni massa fàcil ni massa difícil|Ni demasiado fácil ni demasiado difícil', anim: 'g8tune', x: 'Un sol número canvia la dificultat.|Un solo número cambia la dificultad.',
          nota: "Fes una llista a la pissarra dels números que es poden ajustar: velocitat, vides, punts per guanyar, espera entre clons.|Haz una lista en la pizarra de los números que se pueden ajustar: velocidad, vidas, puntos para ganar, espera entre clones." },
        { id: 's5', k: 'anim', t: 'Un comentari amable i útil|Un comentario amable y útil', anim: 'g8feedback', x: "M'ha agradat… + I si…?|Me ha gustado… + ¿Y si…?",
          nota: "Practica-ho: digues «És avorrit» i demana a la classe que ho converteixi en un comentari en dues parts.|Practícalo: di «Es aburrido» y pide a la clase que lo convierta en un comentario en dos partes." },
        { id: 's6', k: 'media', t: 'Espia una variable|Espía una variable', x: 'El gat diu els punts tota l\'estona.|El gato dice los puntos todo el rato.', media: { k: 'stage', w: W_DEMO, prog: '@gat flag{ setv:punts,0 forever{ pointto:moneda move:4 say:$punts } } @moneda flag{ forever{ if:touch:gat{ chv:punts,1 sound:moneda gotorand } } }', varNames: { punts: 'punts|puntos' } },
          nota: "És un truc de depuració: quan ja s'ha trobat el bug, es treu el bloc.|Es un truco de depuración: cuando ya se ha encontrado el bug, se quita el bloque." },
        { id: 's7', k: 'concepte', t: 'Les regles del provador/a|Las reglas del probador/a', punts: ["L'autor/a explica només les instruccions.|El autor/a explica solo las instrucciones.", 'El provador/a ho prova sol/a, almenys tres vegades.|El probador/a lo prueba solo/a, al menos tres veces.', "Després: una cosa que m'ha agradat i una idea.|Después: algo que me ha gustado y una idea.", "Parlem del videojoc, no de la persona.|Hablamos del videojuego, no de la persona."],
          nota: "Deixa clar el pacte abans de començar: tothom serà autor/a i provador/a.|Deja claro el pacto antes de empezar: todo el mundo será autor/a y probador/a.", pic: "img/ic/good.webp" },
        { id: 's8', k: 'activitat', t: 'Detectius de bugs|Detectives de bugs', timer: 10, punts: ["Llegiu l'informe del provador/a.|Leed el informe del probador/a.", 'És un bug o és la dificultat?|¿Es un bug o es la dificultad?', 'En vermell: el bloc o el número culpable.|En rojo: el bloque o el número culpable.', "En verd: l'arreglo.|En verde: el arreglo."],
          nota: "Si una parella acaba aviat, que inventi un informe nou per a la parella del costat.|Si una pareja acaba pronto, que invente un informe nuevo para la pareja de al lado." },
        { id: 's9', k: 'pregunta', t: 'Un bloc nou o un número?|¿Un bloque nuevo o un número?', x: 'Quins informes s\'arreglaven canviant només un número?|¿Qué informes se arreglaban cambiando solo un número?',
          nota: "Corregiu-ne dos en veu alta. Els de dificultat solen ser un número; els bugs, sovint un bloc que falta.|Corregid dos en voz alta. Los de dificultad suelen ser un número; los bugs, a menudo un bloque que falta." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ['Obre «Provar-lo i millorar-lo».|Abre «Probarlo y mejorarlo».', "Prova «Pluja de meteorits» i fes-lo més just.|Prueba «Lluvia de meteoritos» y hazlo más justo.", 'Arregla el cranc, el cotxe i les instruccions.|Arregla el cangrejo, el coche y las instrucciones.', "Para a «Canvi de lloc!».|Para en «¡Cambio de sitio!»."],
          nota: "Que ningú no passi del pas «Canvi de lloc!» fins que no facis la senyal.|Que nadie pase del paso «¡Cambio de sitio!» hasta que no hagas la señal." },
        { id: 's11', k: 'repte', t: 'Bugs dels provadors|Bugs de los probadores', punts: ['1. El cranc atrapa el gat de seguida: canvia un número.|1. El cangrejo atrapa al gato enseguida: cambia un número.', "2. El cotxe surt de l'escenari: dues regles amb x.|2. El coche sale del escenario: dos reglas con x.", '3. No sabia què havia de fer: instruccions i missatge.|3. No sabía qué tenía que hacer: instrucciones y mensaje.'],
          nota: "Són els tres bugs més habituals: segurament en trobaran algun al videojoc del company/a.|Son los tres bugs más habituales: seguramente encontrarán alguno en el videojuego del compañero/a." },
        { id: 's12', k: 'activitat', t: 'Canvi de lloc!|¡Cambio de sitio!', timer: 8, punts: ["Seu a l'ordinador del teu company/a.|Siéntate en el ordenador de tu compañero/a.", "Escolta les instruccions de l'autor/a.|Escucha las instrucciones del autor/a.", 'Prova el videojoc almenys tres vegades.|Prueba el videojuego al menos tres veces.', "Omple la valoració a l'app i el full del provador/a.|Rellena la valoración en la app y la hoja del probador/a."],
          nota: "Fes la senyal i controla el temps. Passa per les parelles i recorda als autors/es que només poden mirar.|Haz la señal y controla el tiempo. Pasa por las parejas y recuerda a los autores/as que solo pueden mirar." },
        { id: 's13', k: 'activitat', t: 'El comentari en veu alta|El comentario en voz alta', punts: ["Provador/a: «M'ha agradat…»|Probador/a: «Me ha gustado…»", 'Provador/a: «I si…?»|Probador/a: «¿Y si…?»', "Autor/a: «Gràcies!»|Autor/a: «¡Gracias!»"],
          nota: "Que el comentari es digui mirant-se a la cara. L'autor/a no s'ha de justificar: només escolta i dona les gràcies.|Que el comentario se diga mirándose a la cara. El autor/a no se tiene que justificar: solo escucha y da las gracias." },
        { id: 's14', k: 'concepte', t: 'Tu decideixes què canvies|Tú decides qué cambias', punts: ['Arregla primer els bugs.|Arregla primero los bugs.', 'Després, ajusta la dificultat amb un número.|Después, ajusta la dificultad con un número.', "Si tens temps, afegeix-hi una idea que t'agradi.|Si tienes tiempo, añade una idea que te guste."],
          nota: "No cal fer-ho tot: és millor un canvi ben fet que molts a mitges.|No hace falta hacerlo todo: es mejor un cambio bien hecho que muchos a medias.", pic: "img/ic/wrench.webp" },
        { id: 's15', k: 'activitat', t: 'La versió 3|La versión 3', timer: 10, punts: ['Torna al teu lloc.|Vuelve a tu sitio.', 'Llegeix el full del provador/a.|Lee la hoja del probador/a.', "Fes els canvis i prova'ls.|Haz los cambios y pruébalos.", "Comprova i desa la versió 3.|Comprueba y guarda la versión 3."],
          nota: "L'app avisa si el videojoc és igual que la versió anterior: cal fer-hi almenys un canvi.|La app avisa si el videojuego es igual que la versión anterior: hay que hacerle al menos un cambio." },
        { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ['Un comentari amable i útil que has fet.|Un comentario amable y útil que has hecho.', 'Un canvi que has fet al teu videojoc.|Un cambio que has hecho en tu videojuego.'],
          nota: "Recull els fulls del provador/a a la carpeta de cada autor/a: els faran servir per preparar la presentació.|Recoge las hojas del probador/a en la carpeta de cada autor/a: las usarán para preparar la presentación." }
      ],
      print: [
        { id: 'p1', t: 'Fitxa: detectius de bugs|Ficha: detectives de bugs', k: 'fitxa',
          intro: "Llegiu cada informe. Decidiu si és un bug o un problema de dificultat, marqueu en vermell què falla i escriviu en verd com ho arreglaríeu.|Leed cada informe. Decidid si es un bug o un problema de dificultad, marcad en rojo qué falla y escribid en verde cómo lo arreglaríais.",
          items: [
            { q: "«Els punts pugen sense parar quan toco la moneda.» Guió de la moneda: per sempre → si toca el protagonista → suma a punts 1.|«Los puntos suben sin parar cuando toco la moneda.» Guion de la moneda: por siempre → si toca al protagonista → suma a puntos 1.",
              sol: "Bug: la moneda no se'n va i es continuen tocant. Cal afegir «ves a un lloc a l'atzar» després de sumar el punt.|Bug: la moneda no se va y se siguen tocando. Hay que añadir «ve a un sitio al azar» después de sumar el punto." },
            { q: "«Perdo les tres vides de cop.» Guió: per sempre → si toca l'enemic → suma a vides −1.|«Pierdo las tres vidas de golpe.» Guion: por siempre → si toca al enemigo → suma a vidas −1.",
              sol: "Bug: mentre es toquen, cada volta resta una vida. Cal «espera 1 segons» o tornar a la sortida després de perdre la vida.|Bug: mientras se tocan, cada vuelta resta una vida. Hace falta «espera 1 segundos» o volver a la salida después de perder la vida." },
            { q: "«És impossible, el fantasma m'atrapa sempre.» Guió: per sempre → apunta cap al protagonista → mou-te 12 passos.|«Es imposible, el fantasma me atrapa siempre.» Guion: por siempre → apunta hacia el protagonista → muévete 12 pasos.",
              sol: "Dificultat: el número 12 és massa gran. Amb «mou-te 3» o «mou-te 4» hi ha temps de fugir.|Dificultad: el número 12 es demasiado grande. Con «muévete 3» o «muévete 4» hay tiempo de huir." },
            { q: "«Quan torno a començar, ja tinc 7 punts.» Guió de la bandera: per sempre → si tecla → mou-te.|«Cuando vuelvo a empezar, ya tengo 7 puntos.» Guion de la bandera: por siempre → si tecla → muévete.",
              sol: "Bug: falta inicialitzar. Cal «posa punts a 0» al principi del guió de la bandera, abans del «per sempre».|Bug: falta inicializar. Hace falta «pon puntos a 0» al principio del guion de la bandera, antes del «por siempre»." },
            { q: "«He guanyat en dos segons, és massa fàcil.» Regla: si punts > 1 → «Has guanyat!».|«He ganado en dos segundos, es demasiado fácil.» Regla: si puntos > 1 → «¡Has ganado!».",
              sol: "Dificultat: amb 2 punts ja es guanya. Cal un número més gran, per exemple «si punts > 9».|Dificultad: con 2 puntos ya se gana. Hace falta un número más grande, por ejemplo «si puntos > 9»." }
          ] },
        { id: 'p2', t: 'Full del provador/a|Hoja del probador/a', k: 'fitxa',
          intro: "Omple aquest full després de provar el videojoc del teu company/a. Després, dona'l a l'autor/a.|Rellena esta hoja después de probar el videojuego de tu compañero/a. Después, dáselo al autor/a.",
          items: [
            { q: "Nom del videojoc i de l'autor/a:|Nombre del videojuego y del autor/a:", sol: 'Resposta oberta.|Respuesta abierta.' },
            { q: 'Era clar què havia de fer? Encercla: sí · més o menys · no gaire|¿Estaba claro qué tenía que hacer? Rodea: sí · más o menos · no mucho', sol: 'Resposta oberta.|Respuesta abierta.' },
            { q: 'Com era de difícil? Encercla: massa fàcil · al punt · massa difícil|¿Cómo de difícil era? Rodea: demasiado fácil · en su punto · demasiado difícil', sol: 'Resposta oberta.|Respuesta abierta.' },
            { q: "Bugs que he trobat (què passava i quan):|Bugs que he encontrado (qué pasaba y cuándo):", sol: "Resposta oberta: ha de ser concreta («quan toco la vora, el gat desapareix»).|Respuesta abierta: tiene que ser concreta («cuando toco el borde, el gato desaparece»)." },
            { q: "Una cosa que m'ha agradat:|Algo que me ha gustado:", sol: "Resposta oberta: una cosa concreta (els sons, els clons, el nivell 2…).|Respuesta abierta: algo concreto (los sonidos, los clones, el nivel 2…)." },
            { q: "Una idea per millorar-lo:|Una idea para mejorarlo:", sol: "Resposta oberta: una proposta que l'autor/a pugui programar (canviar un número, afegir una regla…).|Respuesta abierta: una propuesta que el autor/a pueda programar (cambiar un número, añadir una regla…)." }
          ] }
      ]
    },

    /* ---------- Sessió 4 · Presentació i diploma ---------- */
    'g8-4': {
      intro: "Última sessió del curs: l'estrena a la Fira de Videojocs. L'alumnat repassa el camí del curs, posa títol i instruccions al seu videojoc i aprèn a presentar-lo amb tres preguntes: què he fet, com funciona (un guió i una regla) i què m'ha costat. Assaja en trios, fa uns reptes de repàs (missatges i animació) i, al gran moment, presenta el videojoc al projector perquè algú del públic el provi. Acaba amb els diplomes. Prioritza que tothom presenti, encara que sigui en grups petits, i celebra el procés més que el resultat.|Última sesión del curso: el estreno en la Feria de Videojuegos. El alumnado repasa el camino del curso, pone título e instrucciones a su videojuego y aprende a presentarlo con tres preguntas: qué he hecho, cómo funciona (un guion y una regla) y qué me ha costado. Ensaya en tríos, hace unos retos de repaso (mensajes y animación) y, en el gran momento, presenta el videojuego en el proyector para que alguien del público lo pruebe. Termina con los diplomas. Prioriza que todo el mundo presente, aunque sea en grupos pequeños, y celebra el proceso más que el resultado.",
      claus: [
        "Un videojoc necessita títol i instruccions: què has de fer i amb quines tecles.|Un videojuego necesita título e instrucciones: qué tienes que hacer y con qué teclas.",
        "Presentar és respondre: què he fet, com funciona i què m'ha costat.|Presentar es responder: qué he hecho, cómo funciona y qué me ha costado.",
        "Explicar una regla amb paraules mostra que entens el teu programa.|Explicar una regla con palabras muestra que entiendes tu programa.",
        "Crear és un cicle: pensar, planificar, programar, provar, millorar i presentar.|Crear es un ciclo: pensar, planificar, programar, probar, mejorar y presentar."
      ],
      prev: [
        "La versió 3 del videojoc, millorada amb els comentaris (sessió anterior).|La versión 3 del videojuego, mejorada con los comentarios (sesión anterior).",
        "Enviar i rebre missatges i animar amb vestits (unitats 2 i 3).|Enviar y recibir mensajes y animar con disfraces (unidades 2 y 3).",
        "El pla i el full del provador/a, a la carpeta.|El plan y la hoja del probador/a, en la carpeta."
      ],
      faq: [
        ["I si el meu videojoc falla durant la presentació?|¿Y si mi videojuego falla durante la presentación?", "No passa res: explica què hauria de passar i com ho arreglaràs. Saber explicar un bug també és saber programar.|No pasa nada: explica qué tendría que pasar y cómo lo arreglarás. Saber explicar un bug también es saber programar."],
        ["He de presentar davant de tothom?|¿Tengo que presentar delante de todo el mundo?", "Si et fa molta vergonya, pots fer-ho en un grup petit, amb el guió a la mà o amb un company/a que toqui les tecles.|Si te da mucha vergüenza, puedes hacerlo en un grupo pequeño, con el guion en la mano o con un compañero/a que toque las teclas."],
        ["Quant ha de durar la presentació?|¿Cuánto tiene que durar la presentación?", "Uns 2 minuts: les tres preguntes i que algú del públic el provi.|Unos 2 minutos: las tres preguntas y que alguien del público lo pruebe."],
        ["On és el meu videojoc i el meu diploma després del curs?|¿Dónde está mi videojuego y mi diploma después del curso?", "El videojoc queda a «Projectes» i el diploma, a l'app: els podràs obrir a casa i ensenyar-los a la família.|El videojuego queda en «Proyectos» y el diploma, en la app: los podrás abrir en casa y enseñarlos a la familia."],
        ["Puc continuar fent videojocs a casa?|¿Puedo seguir haciendo videojuegos en casa?", "Sí! Pots obrir el teu projecte i continuar-lo, o tornar a fer reptes del curs per practicar.|¡Sí! Puedes abrir tu proyecto y continuarlo, o volver a hacer retos del curso para practicar."],
        ["Les instruccions han de ser llargues?|¿Las instrucciones tienen que ser largas?", "No: una frase curta amb què has de fer i amb quines tecles. Si són llargues, ningú no les llegeix.|No: una frase corta con qué tienes que hacer y con qué teclas. Si son largas, nadie las lee."]
      ],
      tec: [
        ["No es troba la versió anterior del videojoc.|No se encuentra la versión anterior del videojuego.", "Cada sessió obre l'última versió desada al portafoli (a «Projectes») amb el mateix perfil. Si no n'hi ha cap, l'app comença amb les peces de mostra: es pot tornar al pas «Tria les peces» de la sessió 1 i desar-les.|Cada sesión abre la última versión guardada en el portafolio (en «Proyectos») con el mismo perfil. Si no hay ninguna, la app empieza con las piezas de muestra: se puede volver al paso «Elige las piezas» de la sesión 1 y guardarlas."],
        ["El projector no mostra bé l'escenari o les tecles de la pantalla.|El proyector no muestra bien el escenario o las teclas de la pantalla.", "Proveu-ho abans de classe. Si cal, feu la finestra més gran o presenteu des de l'ordinador de cada alumne/a en grups petits.|Probadlo antes de clase. Si hace falta, haced la ventana más grande o presentad desde el ordenador de cada alumno/a en grupos pequeños."],
        ["No hi ha temps perquè tothom presenti.|No hay tiempo para que todo el mundo presente.", "Feu les presentacions en grups de 5 o 6 amb un ordinador per grup, o acabeu-les a l'inici de la classe següent.|Haced las presentaciones en grupos de 5 o 6 con un ordenador por grupo, o terminadlas al inicio de la clase siguiente."],
        ["El diploma de l'app no surt.|El diploma de la app no sale.", "Surt al pas «Diploma» del final de la sessió. Si no hi arriben, el poden obrir a casa; el de paper el lliures tu.|Sale en el paso «Diploma» del final de la sesión. Si no llegan, lo pueden abrir en casa; el de papel lo entregas tú."],
        ["No s'ha desat el videojoc.|No se ha guardado el videojuego.", "Només es desa quan passa la comprovació i es toca «Desa-ho i continua». Si se surt abans, cal tornar a fer «Comprova».|Solo se guarda cuando pasa la comprobación y se toca «Guárdalo y continúa». Si se sale antes, hay que volver a hacer «Comprueba»."]
      ],
      seg: [
        "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
        "Fotos i vídeos de l'estrena: només amb el consentiment de les famílies i sense publicar cares ni noms de l'alumnat sense permís.|Fotos y vídeos del estreno: solo con el consentimiento de las familias y sin publicar caras ni nombres del alumnado sin permiso.",
        "Presentar fa nervis: ningú no ha de sortir obligat davant de tothom; ofereix alternatives (grup petit, en parella) i celebra cada intent.|Presentar da nervios: nadie tiene que salir obligado delante de todo el mundo; ofrece alternativas (grupo pequeño, en pareja) y celebra cada intento."
      ],
      extra: [
        "Afegir una pantalla de títol amb un fons diferent i un missatge que posa en marxa el videojoc.|Añadir una pantalla de título con un fondo diferente y un mensaje que pone en marcha el videojuego.",
        "Fer de presentador/a de la fira i preparar una pregunta per a cada company/a.|Hacer de presentador/a de la feria y preparar una pregunta para cada compañero/a.",
        "Escriure el «manual» del videojoc: títol, objectiu, tecles i com es guanya.|Escribir el «manual» del videojuego: título, objetivo, teclas y cómo se gana."
      ],
      trans: [
        "Tanca el curs Tech Creadors: totes les unitats en un videojoc propi.|Cierra el curso Tech Creadores: todas las unidades en un videojuego propio.",
        "Ve de la sessió 3: la versió millorada amb el provador/a.|Viene de la sesión 3: la versión mejorada con el probador/a.",
        "Llengua oral: fer una presentació breu i ordenada davant d'un públic i respondre preguntes.|Lengua oral: hacer una presentación breve y ordenada delante de un público y responder preguntas."
      ],
      obj: [
        "L'alumne/a presenta el seu videojoc explicant què ha fet, com funciona (un guió i una regla) i què li ha costat.|El alumno/a presenta su videojuego explicando qué ha hecho, cómo funciona (un guion y una regla) y qué le ha costado.",
        "L'alumne/a afegeix un títol i unes instruccions al començament del seu videojoc perquè qualsevol persona el pugui fer servir.|El alumno/a añade un título y unas instrucciones al principio de su videojuego para que cualquier persona lo pueda usar.",
        "L'alumne/a repassa els conceptes principals del curs (coordenades, animació, missatges, condicions, variables, atzar i clons).|El alumno/a repasa los conceptos principales del curso (coordenadas, animación, mensajes, condiciones, variables, azar y clones).",
        "L'alumne/a escolta les presentacions dels companys/es i hi fa preguntes o comentaris amables.|El alumno/a escucha las presentaciones de los compañeros/as y les hace preguntas o comentarios amables."
      ],
      comp: [
        "Competència digital (CD5): comunicar i compartir un producte digital propi|Competencia digital (CD5): comunicar y compartir un producto digital propio",
        "Comunicació oral: presentar un projecte de manera ordenada davant d'un públic|Comunicación oral: presentar un proyecto de manera ordenada delante de un público",
        "Pensament computacional: explicar amb paraules com funciona un programa|Pensamiento computacional: explicar con palabras cómo funciona un programa",
        "Competència personal i social: reconèixer el propi progrés i valorar la feina dels altres|Competencia personal y social: reconocer el propio progreso y valorar el trabajo de los demás"
      ],
      vocab: [
        ["Presentació|Presentación", "Explicar un projecte a un públic: què és, com funciona i què has après.|Explicar un proyecto a un público: qué es, cómo funciona y qué has aprendido."],
        ["Instruccions|Instrucciones", "Unes frases curtes que diuen què s'ha de fer i amb quines tecles.|Unas frases cortas que dicen qué hay que hacer y con qué teclas."],
        ["Estrena|Estreno", "La primera vegada que un projecte es mostra a tothom.|La primera vez que un proyecto se muestra a todo el mundo."],
        ["Creador/a|Creador/a", "Qui inventa, programa, prova i millora un projecte propi.|Quien inventa, programa, prueba y mejora un proyecto propio."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Presentació i diploma»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Presentación y diploma»",
          "Projector connectat a un ordinador on es puguin obrir els videojocs dels alumnes (o que cada alumne/a hi connecti el seu)|Proyector conectado a un ordenador donde se puedan abrir los videojuegos de los alumnos (o que cada alumno/a conecte el suyo)",
          "Les carpetes amb el pla i el full del provador/a|Las carpetas con el plan y la hoja del probador/a",
          "Els diplomes impresos i signats|Los diplomas impresos y firmados"
        ],
        imprimir: ["Guió de la meva presentació|Guion de mi presentación", "Diploma del curs|Diploma del curso"],
        prep: [
          "Imprimir un guió per alumne/a i un diploma per alumne/a; signar els diplomes abans de la classe.|Imprimir un guion por alumno/a y un diploma por alumno/a; firmar los diplomas antes de la clase.",
          "Fer l'ordre de les presentacions i calcular uns 2 minuts per alumne/a (si el grup és gran, feu-les en dos espais o en grups).|Hacer el orden de las presentaciones y calcular unos 2 minutos por alumno/a (si el grupo es grande, hacedlas en dos espacios o en grupos).",
          "Provar que el projector mostra bé l'escenari i les tecles de la pantalla.|Probar que el proyector muestra bien el escenario y las teclas de la pantalla.",
          "Si podeu, convidar les famílies o un altre grup a l'estrena.|Si podéis, invitar a las familias o a otro grupo al estreno."
        ]
      },
      plan: [
        { min: 4, t: "Benvinguda: el gran dia|Bienvenida: el gran día", fase: 'inici',
          fa: "Dona la benvinguda a l'estrena de la Fira de Videojocs i explica com anirà la classe: últims retocs, assaig, presentacions i diplomes. Repassa les normes del públic: escoltar, aplaudir i fer preguntes amables.|Da la bienvenida al estreno de la Feria de Videojuegos y explica cómo irá la clase: últimos retoques, ensayo, presentaciones y diplomas. Repasa las normas del público: escuchar, aplaudir y hacer preguntas amables.",
          diu: [
            "Avui sou creadors/es de videojocs i també públic: les dues coses són importants.|Hoy sois creadores/as de videojuegos y también público: las dos cosas son importantes.",
            "Què fa un bon públic? (escolta, aplaudeix i fa preguntes amables)|¿Qué hace un buen público? (escucha, aplaude y hace preguntas amables)",
            "Com anirà la classe? (assaig, retocs, estrena i diplomes)|¿Cómo irá la clase? (ensayo, retoques, estreno y diplomas)"
          ],
          slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 6, t: "El viatge i com presentar|El viaje y cómo presentar", fase: 'teoria',
          fa: "Recorda el camí del curs amb l'animació de les vuit illes. Explica les tres preguntes per presentar i mostra amb la demo per què un videojoc necessita títol i instruccions.|Recuerda el camino del curso con la animación de las ocho islas. Explica las tres preguntas para presentar y muestra con la demo por qué un videojuego necesita título e instrucciones.",
          diu: [
            "Quina unitat us ha agradat més? Què hi vau aprendre?|¿Qué unidad os ha gustado más? ¿Qué aprendisteis?",
            "Quines són les tres preguntes per presentar? (què he fet, com funciona, què m'ha costat)|¿Cuáles son las tres preguntas para presentar? (qué he hecho, cómo funciona, qué me ha costado)",
            "Si algú no ha vist mai el vostre videojoc, com sap què ha de fer? (amb un títol i unes instruccions)|Si alguien no ha visto nunca vuestro videojuego, ¿cómo sabe qué tiene que hacer? (con un título y unas instrucciones)",
            "A la demo, què posa el videojoc en marxa després de les instruccions? (un missatge)|En la demo, ¿qué pone el videojuego en marcha después de las instrucciones? (un mensaje)"
          ],
          slides: ['s3', 's4', 's5', 's6'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Desconnectat: assaig de presentació|Desconectado: ensayo de presentación", fase: 'desconnectat',
          fa: "Cada alumne/a omple el guió de la presentació (pot fer servir el pla i el full del provador/a). Després, en grups de 3, cadascú assaja la seva presentació: un fa de públic i fa una pregunta, i l'altre controla el temps (2 minuts). Roteu els papers.|Cada alumno/a rellena el guion de la presentación (puede usar el plan y la hoja del probador/a). Después, en grupos de 3, cada uno ensaya su presentación: uno hace de público y hace una pregunta, y el otro controla el tiempo (2 minutos). Rotad los papeles.",
          diu: [
            "No cal aprendre-ho de memòria: unes paraules al guió us ajudaran a recordar-ho.|No hace falta aprenderlo de memoria: unas palabras en el guion os ayudarán a recordarlo.",
            "Què us ha costat? Mireu el full del provador/a per recordar-ho.|¿Qué os ha costado? Mirad la hoja del probador/a para recordarlo.",
            "Públic: feu una pregunta sobre com està fet el videojoc.|Público: haced una pregunta sobre cómo está hecho el videojuego.",
            "Temps: 2 minuts. Avisa quan en quedi mig!|Tiempo: 2 minutos. ¡Avisa cuando quede medio!"
          ],
          slides: ['s7', 's8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després en grups de 3|Individual y después en grupos de 3" },
        { min: 10, t: "A l'ordinador: repàs i últims retocs|En el ordenador: repaso y últimos retoques", fase: 'ordinador',
          fa: "Cada alumne/a fa el repàs del curs, la pausa activa i els dos reptes de la fira, i arriba als últims retocs: posa un títol i unes instruccions al seu videojoc i el desa. Qui vagi de pressa pot afegir-hi un so o un final més bonic.|Cada alumno/a hace el repaso del curso, la pausa activa y los dos retos de la feria, y llega a los últimos retoques: pone un título y unas instrucciones a su videojuego y lo guarda. Quien vaya deprisa puede añadir un sonido o un final más bonito.",
          diu: [
            "Les instruccions han de ser curtes: què has de fer i amb quines tecles.|Las instrucciones tienen que ser cortas: qué tienes que hacer y con qué teclas.",
            "Quin guió fa el cotxe quan rep «som-hi»? (quan rebo el missatge som-hi)|¿Qué guion hace el coche cuando recibe «som-hi»? (al recibir el mensaje som-hi)",
            "Avui només retocs: res de canvis grans que puguin espatllar el videojoc.|Hoy solo retoques: nada de cambios grandes que puedan estropear el videojuego.",
            "Heu desat la versió final?|¿Habéis guardado la versión final?"
          ],
          slides: ['s9', 's10'], app: "Dels «Recorda» fins a «Últims retocs»: la història, «Descobreix», ordenar la presentació, el repàs del curs, la pausa activa, la cursa, la papallona i la versió final del videojoc.|De los «Recuerda» hasta «Últimos retoques»: la historia, «Descubre», ordenar la presentación, el repaso del curso, la pausa activa, la carrera, la mariposa y la versión final del videojuego.", org: "Individual|Individual" },
        { min: 22, t: "Crea: l'estrena|Crea: el estreno", fase: 'crea',
          fa: "Cada alumne/a obre el pas «És la teva estrena!» i, quan li toca, presenta el seu videojoc al projector: respon les tres preguntes, ensenya un guió i deixa que algú del públic el provi. Després de cada presentació, el públic aplaudeix i fa una pregunta o un comentari amable. Si el grup és gran, feu les presentacions en grups de 5 o 6 amb un ordinador cada grup.|Cada alumno/a abre el paso «¡Es tu estreno!» y, cuando le toca, presenta su videojuego en el proyector: responde las tres preguntas, enseña un guion y deja que alguien del público lo pruebe. Después de cada presentación, el público aplaude y hace una pregunta o un comentario amable. Si el grupo es grande, haced las presentaciones en grupos de 5 o 6 con un ordenador cada grupo.",
          diu: [
            "Què has fet? Com funciona? Què t'ha costat?|¿Qué has hecho? ¿Cómo funciona? ¿Qué te ha costado?",
            "Ensenya un guió i llegeix-ne una regla: «si… → …».|Enseña un guion y lee una regla: «si… → …».",
            "Qui del públic el vol provar?|¿Quién del público lo quiere probar?",
            "Una pregunta o un comentari amable per a l'autor/a!|¡Una pregunta o un comentario amable para el autor/a!"
          ],
          slides: ['s11', 's12', 's13'], app: "Pas «És la teva estrena!»: el videojoc de cadascú, a punt per presentar.|Paso «¡Es tu estreno!»: el videojuego de cada uno, a punto para presentar.", org: "Tot el grup (o grups de 5-6)|Todo el grupo (o grupos de 5-6)" },
        { min: 8, t: "Tancament: diplomes|Cierre: diplomas", fase: 'tancament',
          fa: "Cada alumne/a obre el diploma de l'app. Lliura els diplomes de paper un per un, dient a cada alumne/a una cosa concreta que ha fet bé durant el curs. Acabeu amb el resum, les preguntes finals de l'app i una foto de grup si les famílies hi estan d'acord.|Cada alumno/a abre el diploma de la app. Entrega los diplomas de papel uno por uno, diciendo a cada alumno/a algo concreto que ha hecho bien durante el curso. Terminad con el resumen, las preguntas finales de la app y una foto de grupo si las familias están de acuerdo.",
          diu: [
            "Heu començat movent un personatge i acabeu creant videojocs. Enhorabona!|Habéis empezado moviendo un personaje y termináis creando videojuegos. ¡Enhorabuena!",
            "Què és el que més us ha agradat aprendre aquest curs?|¿Qué es lo que más os ha gustado aprender este curso?",
            "Quin projecte us agradaria fer ara, amb tot el que sabeu?|¿Qué proyecto os gustaría hacer ahora, con todo lo que sabéis?"
          ],
          slides: ['s14', 's15', 's16'], app: "Diploma, el missatge final d'en Bit, la pregunta final i com m'he sentit.|Diploma, el mensaje final de Bit, la pregunta final y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Es posa molt nerviós/a i no vol presentar.|Se pone muy nervioso/a y no quiere presentar.",
          "Ofereix-li presentar amb el guió a la mà, en un grup petit o amb un company/a al costat que toqui les tecles. L'important és que expliqui una regla.|Ofrécele presentar con el guion en la mano, en un grupo pequeño o con un compañero/a al lado que toque las teclas. Lo importante es que explique una regla."],
        ["Només ensenya el videojoc i no explica com està fet.|Solo enseña el videojuego y no explica cómo está hecho.",
          "Pregunta-li davant del públic: quin personatge té la regla de sumar punts? Que obri aquell guió i el llegeixi.|Pregúntale delante del público: ¿qué personaje tiene la regla de sumar puntos? Que abra ese guion y lo lea."],
        ["El videojoc falla durant la presentació.|El videojuego falla durante la presentación.",
          "Normalitza-ho: també passa als creadors professionals. Que expliqui què hauria de passar i com ho arreglarà; és una part molt bona de la presentació.|Normalízalo: también pasa a los creadores profesionales. Que explique qué tendría que pasar y cómo lo arreglará; es una parte muy buena de la presentación."],
        ["Posa unes instruccions molt llargues que no hi ha temps de llegir.|Pone unas instrucciones muy largas que no hay tiempo de leer.",
          "Que les escurci a una sola frase: què has de fer i amb quines tecles. Que les provi amb un company/a.|Que las acorte a una sola frase: qué tienes que hacer y con qué teclas. Que las pruebe con un compañero/a."],
        ["Vol fer canvis grans abans de presentar i el videojoc deixa de funcionar.|Quiere hacer cambios grandes antes de presentar y el videojuego deja de funcionar.", "Recorda-li que avui només són retocs. Si s'ha espatllat, pot tornar a obrir la versió desada i afegir només el títol i les instruccions.|Recuérdale que hoy solo son retoques. Si se ha estropeado, puede volver a abrir la versión guardada y añadir solo el título y las instrucciones."],
        ["Durant les presentacions, el públic es distreu o fa comentaris poc amables.|Durante las presentaciones, el público se distrae o hace comentarios poco amables.", "Projecta les normes del públic, dona a cada alumne/a una pregunta per fer i recorda que tothom presentarà i voldrà ser escoltat.|Proyecta las normas del público, da a cada alumno/a una pregunta para hacer y recuerda que todo el mundo presentará y querrá ser escuchado."]
      ],
      diff: {
        mes: "Afegir una pantalla de títol amb un fons diferent i un missatge que posa en marxa el videojoc. Durant les presentacions, fer de presentador/a de la fira i fer preguntes als companys.|Añadir una pantalla de título con un fondo diferente y un mensaje que pone en marcha el videojuego. Durante las presentaciones, hacer de presentador/a de la feria y hacer preguntas a los compañeros.",
        menys: "Presentar en un grup petit amb el guió a la mà i respondre només dues preguntes (què he fet i com funciona). A l'app, afegir només una frase d'instruccions.|Presentar en un grupo pequeño con el guion en la mano y responder solo dos preguntas (qué he hecho y cómo funciona). En la app, añadir solo una frase de instrucciones."
      },
      aval: {
        ticket: ["Digues una regla del teu videojoc i quin personatge la té.|Di una regla de tu videojuego y qué personaje la tiene.",
          "Què és el que més t'ha agradat aprendre aquest curs?|¿Qué es lo que más te ha gustado aprender este curso?"],
        rubric: [
          ["Presentació|Presentación", "Explica què ha fet, com funciona i què li ha costat, en ordre.|Explica qué ha hecho, cómo funciona y qué le ha costado, en orden.", "Ensenya el videojoc, però necessita preguntes per explicar-lo.|Enseña el videojuego, pero necesita preguntas para explicarlo."],
          ["Videojoc final|Videojuego final", "Té títol, instruccions, una manera de guanyar o perdre i funciona.|Tiene título, instrucciones, una manera de ganar o perder y funciona.", "Funciona, però hi falta el títol, les instruccions o el final.|Funciona, pero le falta el título, las instrucciones o el final."],
          ["Públic|Público", "Escolta, aplaudeix i fa preguntes o comentaris amables.|Escucha, aplaude y hace preguntas o comentarios amables.", "Escolta, però encara no participa amb preguntes.|Escucha, pero todavía no participa con preguntas."],
          [
            "El camí del curs|El camino del curso",
            "Explica què ha après al curs i com ho ha fet servir al seu videojoc.|Explica qué ha aprendido en el curso y cómo lo ha usado en su videojuego.",
            "Recorda alguns blocs, però no els relaciona amb el seu videojoc.|Recuerda algunos bloques, pero no los relaciona con su videojuego."
          ]
        ]
      },
      casa: "A casa, feu una «estrena familiar»: l'alumne/a presenta el seu videojoc (és a «Projectes») amb les tres preguntes i la família el prova. Podeu imprimir el diploma de l'app i penjar-lo!|En casa, haced un «estreno familiar»: el alumno/a presenta su videojuego (está en «Proyectos») con las tres preguntas y la familia lo prueba. ¡Podéis imprimir el diploma de la app y colgarlo!",
      slides: [
        { id: 's1', k: 'portada', t: 'Presentació i diploma|Presentación y diploma', x: "S'obre la Fira de Videojocs!|¡Se abre la Feria de Videojuegos!",
          nota: "Crea ambient de festa: és l'estrena dels seus videojocs i el final del curs.|Crea ambiente de fiesta: es el estreno de sus videojuegos y el final del curso." },
        { id: 's2', k: 'concepte', t: 'Com anirà avui|Cómo irá hoy', punts: ['Assaig de la presentació|Ensayo de la presentación', 'Últims retocs a l\'ordinador|Últimos retoques en el ordenador', "L'estrena: cada creador/a presenta el seu videojoc|El estreno: cada creador/a presenta su videojuego", 'Diplomes!|¡Diplomas!'],
          nota: "Explica també les normes del públic: escoltar, aplaudir i fer preguntes amables.|Explica también las normas del público: escuchar, aplaudir y hacer preguntas amables.", pic: "img/ic/party.webp" },
        { id: 's3', k: 'anim', t: 'El viatge del curs|El viaje del curso', anim: 'g8journey', x: 'Vuit unitats, de primers passos fins al teu videojoc.|Ocho unidades, de primeros pasos hasta tu videojuego.',
          nota: "Pregunta què recorden de cada illa: personatges, animació, tecles, coordenades, condicions, variables, atzar i clons.|Pregunta qué recuerdan de cada isla: personajes, animación, teclas, coordenadas, condiciones, variables, azar y clones." },
        { id: 's4', k: 'media', t: 'Tres preguntes per presentar|Tres preguntas para presentar', x: "Què he fet? Com funciona? Què m'ha costat?|¿Qué he hecho? ¿Cómo funciona? ¿Qué me ha costado?", media: { k: 'stage', w: W_DEMO, prog: P_DEMO, varNames: { punts: 'punts|puntos' } },
          nota: "Fes tu una presentació de mostra amb aquesta demo en un minut: el nom, la regla de la moneda i un bug que vas haver d'arreglar.|Haz tú una presentación de muestra con esta demo en un minuto: el nombre, la regla de la moneda y un bug que tuviste que arreglar." },
        { id: 's5', k: 'media', t: 'Títol i instruccions|Título e instrucciones', x: 'Primer el títol i què has de fer; després, en marxa!|Primero el título y qué tienes que hacer; después, ¡en marcha!', media: { k: 'stage', w: W_TITLE, prog: P_TITLE },
          nota: "Fes notar que, quan acaben les instruccions, un missatge posa el videojoc en marxa.|Haz notar que, cuando terminan las instrucciones, un mensaje pone el videojuego en marcha." },
        { id: 's6', k: 'anim', t: 'Ensenya com ho has fet|Enseña cómo lo has hecho', anim: 'g8who', x: 'Tria un personatge i explica una regla del seu guió.|Elige un personaje y explica una regla de su guion.',
          nota: "Insisteix que el públic vol saber com s'ha fet, no només veure'l.|Insiste en que el público quiere saber cómo se ha hecho, no solo verlo." },
        { id: 's7', k: 'activitat', t: 'Assaig en trios|Ensayo en tríos', timer: 10, punts: ['Omple el guió de la presentació.|Rellena el guion de la presentación.', 'Un presenta, un fa de públic, un controla el temps.|Uno presenta, uno hace de público, uno controla el tiempo.', '2 minuts per presentació.|2 minutos por presentación.', 'Canvieu els papers.|Cambiad los papeles.'],
          nota: "Passa pels grups i ajuda a qui no sàpiga què respondre a «què m'ha costat»: el full del provador/a hi pot ajudar.|Pasa por los grupos y ayuda a quien no sepa qué responder a «qué me ha costado»: la hoja del probador/a puede ayudar." },
        { id: 's8', k: 'concepte', t: 'Consells per presentar|Consejos para presentar', punts: ['Parla a poc a poc i mira el públic.|Habla despacio y mira al público.', "Si alguna cosa falla, explica què hauria de passar.|Si algo falla, explica qué tendría que pasar.", 'Respira fondo: tothom està de la teva part.|Respira hondo: todo el mundo está de tu parte.'],
          nota: "Deixa aquests consells projectats durant l'assaig.|Deja estos consejos proyectados durante el ensayo.", pic: "img/chars/numi-happy.webp" },
        { id: 's9', k: 'activitat', t: 'Últims retocs|Últimos retoques', timer: 10, punts: ['Obre «Presentació i diploma».|Abre «Presentación y diploma».', 'Fes el repàs del curs i els dos reptes de la fira.|Haz el repaso del curso y los dos retos de la feria.', 'Posa títol i instruccions al teu videojoc.|Pon título e instrucciones a tu videojuego.', 'Desa la versió final!|¡Guarda la versión final!'],
          nota: "Que ningú no comenci canvis grans: avui només retocs. El que no funcioni es pot explicar a la presentació.|Que nadie empiece cambios grandes: hoy solo retoques. Lo que no funcione se puede explicar en la presentación." },
        { id: 's10', k: 'repte', t: 'Els reptes de la fira|Los retos de la feria', punts: ['La cursa: el cotxe surt quan rep «som-hi».|La carrera: el coche sale cuando recibe «som-hi».', 'La papallona: rebota i bat les ales.|La mariposa: rebota y bate las alas.'],
          nota: "Són un repàs ràpid de missatges i d'animació. Si van justos de temps, que passin directament als últims retocs.|Son un repaso rápido de mensajes y de animación. Si van justos de tiempo, que pasen directamente a los últimos retoques." },
        { id: 's11', k: 'activitat', t: "L'estrena|El estreno", timer: 22, punts: ['1. Què he fet?|1. ¿Qué he hecho?', '2. Com funciona? (un guió i una regla)|2. ¿Cómo funciona? (un guion y una regla)', "3. Què m'ha costat?|3. ¿Qué me ha costado?", 'Algú del públic el prova!|¡Alguien del público lo prueba!'],
          nota: "Controla el temps (uns 2 minuts per alumne/a) i que cada presentació acabi amb un aplaudiment.|Controla el tiempo (unos 2 minutos por alumno/a) y que cada presentación termine con un aplauso." },
        { id: 's12', k: 'concepte', t: 'Les normes del públic|Las normas del público', punts: ['Escolto fins al final.|Escucho hasta el final.', 'Aplaudeixo cada presentació.|Aplaudo cada presentación.', 'Faig una pregunta o un comentari amable.|Hago una pregunta o un comentario amable.'],
          nota: "Pots projectar-la entre presentació i presentació.|Puedes proyectarla entre presentación y presentación.", pic: "img/ic/handshake.webp" },
        { id: 's13', k: 'pregunta', t: 'Preguntes per a l\'autor/a|Preguntas para el autor/a', punts: ['Quin personatge té aquesta regla?|¿Qué personaje tiene esta regla?', "Quin bug t'ha costat més d'arreglar?|¿Qué bug te ha costado más de arreglar?", 'Què hi afegiries si tinguessis més temps?|¿Qué añadirías si tuvieras más tiempo?'],
          nota: "Si el públic no s'anima, fes tu una d'aquestes preguntes.|Si el público no se anima, haz tú una de estas preguntas." },
        { id: 's14', k: 'resum', t: 'Ja ets creador/a!|¡Ya eres creador/a!', punts: ['Penses una idea i en fas un pla.|Piensas una idea y haces un plan.', 'La programes peça a peça.|La programas pieza a pieza.', 'La proves, la millores i la presentes.|La pruebas, la mejoras y la presentas.'],
          nota: "Remarca que aquest cicle serveix per a qualsevol projecte, no només per als videojocs.|Remarca que este ciclo sirve para cualquier proyecto, no solo para los videojuegos." },
        { id: 's15', k: 'activitat', t: 'Els diplomes|Los diplomas', punts: ["Obre el diploma de l'app.|Abre el diploma de la app.", 'Recull el diploma de paper.|Recoge el diploma de papel.', 'Un gran aplaudiment per a tothom!|¡Un gran aplauso para todo el mundo!'],
          nota: "En lliurar cada diploma, digues a l'alumne/a una cosa concreta que ha fet bé durant el curs.|Al entregar cada diploma, di al alumno/a algo concreto que ha hecho bien durante el curso." },
        { id: 's16', k: 'tiquet', t: "L'última pregunta|La última pregunta", punts: ['Una regla del teu videojoc i qui la té.|Una regla de tu videojuego y quién la tiene.', "El que més t'ha agradat aprendre.|Lo que más te ha gustado aprender."],
          nota: "Apunta les respostes: són una bona valoració del curs per a la propera edició.|Apunta las respuestas: son una buena valoración del curso para la próxima edición." }
      ],
      print: [
        { id: 'p1', t: 'Guió de la meva presentació|Guion de mi presentación', k: 'fitxa',
          intro: "Escriu unes paraules per a cada pregunta: t'ajudaran a recordar què vols dir. No cal escriure frases llargues.|Escribe unas palabras para cada pregunta: te ayudarán a recordar qué quieres decir. No hace falta escribir frases largas.",
          items: [
            { q: "Què he fet? (el nom del videojoc i de què va)|¿Qué he hecho? (el nombre del videojuego y de qué va)", sol: "Resposta oberta: el nom, el protagonista i l'objectiu.|Respuesta abierta: el nombre, el protagonista y el objetivo." },
            { q: "Com funciona? (un personatge, el seu guió i una regla)|¿Cómo funciona? (un personaje, su guion y una regla)", sol: "Resposta oberta: una regla amb «si… → …» i el personatge que la té.|Respuesta abierta: una regla con «si… → …» y el personaje que la tiene." },
            { q: "Què m'ha costat? (un bug, un canvi o un comentari que m'ha ajudat)|¿Qué me ha costado? (un bug, un cambio o un comentario que me ha ayudado)", sol: "Resposta oberta: valoreu que expliqui un error concret i com l'ha arreglat.|Respuesta abierta: valorad que explique un error concreto y cómo lo ha arreglado." },
            { q: "Què hi afegiria si tingués més temps?|¿Qué le añadiría si tuviera más tiempo?", sol: 'Resposta oberta.|Respuesta abierta.' }
          ] },
        { id: 'p2', t: 'Diploma del curs|Diploma del curso', k: 'diploma',
          intro: "ha completat el curs Tech Creadors de Numi Tech: ha inventat, programat, provat i presentat el seu propi videojoc.|ha completado el curso Tech Creadores de Numi Tech: ha inventado, programado, probado y presentado su propio videojuego.",
          items: [
            'Ha creat personatges, escenes i animacions amb blocs.|Ha creado personajes, escenas y animaciones con bloques.',
            'Ha programat tecles, missatges i coordenades.|Ha programado teclas, mensajes y coordenadas.',
            'Ha fet servir condicions, variables, atzar i clons.|Ha usado condiciones, variables, azar y clones.',
            'Ha provat, millorat i presentat un videojoc propi.|Ha probado, mejorado y presentado un videojuego propio.'
          ] }
      ]
    }
  };
})());
