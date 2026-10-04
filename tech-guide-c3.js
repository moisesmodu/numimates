/* Numi Tech · Tech Creadors · guies del professor. Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */

/* ── unitat 1 ── */
/* Tech Creadors · unitat 1 «Primers passos a l'escenari» · guia del professor (g1-1 … g1-4)
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. Les demostracions de les
   diapositives (k: 'media') fan servir el motor de l'escenari (tech-stage.js): fons, personatges i guions SQ. */
Object.assign(TGUIDE, (() => {
  const T = (sprites, o = {}) => ({ bg: 'escenari', sprites, ...o });
  return {
  /* ---------- Sessió 1 · El meu primer personatge ---------- */
  'g1-1': {
    obj: [
      "L'alumne/a identifica l'escenari, els personatges i el guió d'un projecte de blocs.|El alumno/a identifica el escenario, los personajes y el guion de un proyecto de bloques.",
      "L'alumne/a explica que la bandera verda fa començar el guió «Quan comença» i que els blocs es fan de dalt a baix.|El alumno/a explica que la bandera verde hace empezar el guion «Al empezar» y que los bloques se hacen de arriba abajo.",
      "L'alumne/a fa avançar i retrocedir un personatge amb «mou-te» i números positius i negatius.|El alumno/a hace avanzar y retroceder a un personaje con «muévete» y números positivos y negativos.",
      "L'alumne/a programa un personatge que es mou fins a una marca i diu una frase al públic.|El alumno/a programa a un personaje que se mueve hasta una marca y dice una frase al público."
    ],
    comp: [
      "Competència digital (CD5): crear un programa senzill amb blocs per animar un personatge|Competencia digital (CD5): crear un programa sencillo con bloques para animar a un personaje",
      "Pensament computacional: seqüència d'instruccions, esdeveniment d'inici i execució de dalt a baix|Pensamiento computacional: secuencia de instrucciones, evento de inicio y ejecución de arriba abajo",
      "Matemàtiques: nombres positius i negatius en una recta i estimació de distàncies|Matemáticas: números positivos y negativos en una recta y estimación de distancias",
      "Comunicació oral i expressió artística: donar instruccions clares i representar un paper|Comunicación oral y expresión artística: dar instrucciones claras y representar un papel"
    ],
    vocab: [
      ["Escenari|Escenario", "El rectangle on passa tot i on es mouen els personatges.|El rectángulo donde pasa todo y donde se mueven los personajes."],
      ["Personatge|Personaje", "Un actor de l'escenari: té un dibuix i els seus propis blocs.|Un actor del escenario: tiene un dibujo y sus propios bloques."],
      ["Guió|Guion", "Els blocs d'un personatge, sota una capçalera com «Quan comença».|Los bloques de un personaje, bajo una cabecera como «Al empezar»."],
      ["Bandera verda|Bandera verde", "El botó que fa començar els guions «Quan comença».|El botón que hace empezar los guiones «Al empezar»."],
      ["Passos|Pasos", "Els punts que avança un personatge; l'escenari en fa 480 d'ample.|Los puntos que avanza un personaje; el escenario mide 480 de ancho."],
      ["Número negatiu|Número negativo", "Un número amb un «-» davant: amb «mou-te», fa anar enrere.|Un número con un «-» delante: con «muévete», hace ir hacia atrás."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «El meu primer personatge»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Mi primer personaje»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Cinta de pintor per marcar al terra un «escenari» de 3 × 2 metres amb una creu al centre (el 0, 0)|Cinta de pintor para marcar en el suelo un «escenario» de 3 × 2 metros con una cruz en el centro (el 0, 0)",
        "Un full verd (la bandera) i 3 estrelles de paper (les marques dels actors)|Una hoja verde (la bandera) y 3 estrellas de papel (las marcas de los actores)"
      ],
      imprimir: ["Targetes de blocs: el guió de l'actor|Tarjetas de bloques: el guion del actor"],
      prep: [
        "Marcar l'escenari de terra amb cinta i una creu al centre; posar les estrelles a diferents distàncies.|Marcar el escenario del suelo con cinta y una cruz en el centro; poner las estrellas a diferentes distancias.",
        "Imprimir i retallar un paquet de targetes per grup de 3 (si es plastifiquen, serveixen per a tota la unitat).|Imprimir y recortar un paquete de tarjetas por grupo de 3 (si se plastifican, sirven para toda la unidad).",
        "Provar abans les demostracions de les diapositives 6 i 8 per saber què fa cada personatge.|Probar antes las demostraciones de las diapositivas 6 y 8 para saber qué hace cada personaje.",
        "Deixar els ordinadors amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores con Numi Tech abierto y la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda al Teatre de l'illa|Bienvenida al Teatro de la isla", fase: 'inici',
        fa: "Presenta el curs: durant l'any crearan animacions, històries i, al final, el seu propi videojoc. Pregunta qui ha vist mai dibuixos animats o un videojoc i com creuen que els personatges saben què han de fer. Recull respostes sense corregir.|Presenta el curso: durante el año crearán animaciones, historias y, al final, su propio videojuego. Pregunta quién ha visto alguna vez dibujos animados o un videojuego y cómo creen que los personajes saben qué tienen que hacer. Recoge respuestas sin corregir.",
        diu: ["Com sap un personatge de dibuixos què ha de fer?|¿Cómo sabe un personaje de dibujos qué tiene que hacer?",
          "Avui sereu directors i directores de teatre: els vostres actors seran a l'ordinador.|Hoy seréis directores y directoras de teatro: vuestros actores estarán en el ordenador."],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Escenari, personatges i guió|Escenario, personajes y guion", fase: 'teoria',
        fa: "Explica l'escenari i els personatges amb la demostració del teatre. Mostra que cada personatge té el seu guió i que la bandera verda el fa començar. Presenta «mou-te» amb la recta de números: fes que tothom digui on acabarà en Numi abans de tocar la bandera. Acaba amb el centre (0, 0) i la idea que la dreta és x positiva.|Explica el escenario y los personajes con la demostración del teatro. Muestra que cada personaje tiene su guion y que la bandera verde lo hace empezar. Presenta «muévete» con la recta de números: haz que todos digan dónde terminará Numi antes de tocar la bandera. Termina con el centro (0, 0) y la idea de que la derecha es x positiva.",
        diu: ["Qui fa els blocs: tots alhora o un darrere l'altre?|¿Quién hace los bloques: todos a la vez o uno detrás de otro?",
          "Si poso -100, cap on anirà? Assenyaleu-ho amb el braç.|Si pongo -100, ¿hacia dónde irá? Señaladlo con el brazo.",
          "Abans de tocar la bandera: on creieu que acabarà?|Antes de tocar la bandera: ¿dónde creéis que terminará?"],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Director/a i actor/actriu a l'escenari de terra|Director/a y actor/actriz en el escenario del suelo", fase: 'desconnectat',
        fa: "Grups de 3: director/a, actor/actriu i revisor/a. El director/a posa targetes en fila sota la targeta «Quan comença»; quan aixeca el full verd, l'actor/actriu les fa a l'escenari de terra (cada pas és una passa) i el revisor/a comprova cada targeta. L'objectiu és arribar a una estrella i dir-hi una frase. Després de cada guió, els papers roten.|Grupos de 3: director/a, actor/actriz y revisor/a. El director/a pone tarjetas en fila bajo la tarjeta «Al empezar»; cuando levanta la hoja verde, el actor/actriz las hace en el escenario del suelo (cada paso es una zancada) y el revisor/a comprueba cada tarjeta. El objetivo es llegar a una estrella y decir allí una frase. Después de cada guion, los papeles rotan.",
        diu: ["L'actor/actriu només fa el que diu la targeta, encara que vegi que no arriba.|El actor/actriz solo hace lo que dice la tarjeta, aunque vea que no llega.",
          "Els passos negatius es fan enrere sense girar-se.|Los pasos negativos se hacen hacia atrás sin girarse.",
          "No heu arribat a l'estrella? Quina targeta canviaríeu?|¿No habéis llegado a la estrella? ¿Qué tarjeta cambiaríais?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «Director/a i actor/actriu», que toquin «Ho hem fet!», perquè ja l'han fet a classe. Passeja i, a l'assaig de tres actors, demana que expliquin què fa cada personatge abans de mirar-ne els blocs.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «Director/a y actor/actriz», que toquen «¡Lo hemos hecho!», porque ya lo han hecho en clase. Pasea y, en el ensayo de tres actores, pide que expliquen qué hace cada personaje antes de mirar sus bloques.",
        diu: ["Toca un personatge de la llista: quin guió té?|Toca un personaje de la lista: ¿qué guion tiene?",
          "On acabarà la Tuga amb -100? Pensa-ho abans de triar.|¿Dónde terminará Tuga con -100? Piénsalo antes de elegir."],
        slides: ['s11'], app: "De «La missió» fins a «Investiga»: les històries, les 5 targetes de teoria, la bandera verda, ordenar els passos, «Director/a i actor/actriu» (ja fet), l'assaig, la pregunta de la Tuga i la Guida que va enrere.|De «La misión» hasta «Investiga»: las historias, las 5 tarjetas de teoría, la bandera verde, ordenar los pasos, «Director/a y actor/actriz» (ya hecho), el ensayo, la pregunta de Tuga y Guida que va hacia atrás.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: les marques dels actors|Retos: las marcas de los actores", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després resol amb la classe el primer repte (en Numi fins a la marca) provant números en veu alta i deixa'ls fer la resta. Remarca que provar un número, mirar i ajustar-lo és una manera de treballar molt bona.|Haced la pausa activa todos juntos. Después resuelve con la clase el primer reto (Numi hasta la marca) probando números en voz alta y deja que hagan el resto. Remarca que probar un número, mirar y ajustarlo es una manera de trabajar muy buena.",
        diu: ["Massa curt o massa llarg? Quin número provaries ara?|¿Demasiado corto o demasiado largo? ¿Qué número probarías ahora?",
          "Per què la Guida necessita una frase amb segons quan arriba al regal?|¿Por qué Guida necesita una frase con segundos cuando llega al regalo?"],
        slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes: en Numi a la marca, en Vuit enrere, la Flama que saluda i la Guida que va i torna.|«Pausa activa» y los cuatro retos: Numi a la marca, Vuit hacia atrás, Flama que saluda y Guida que va y vuelve.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el meu primer personatge|Crea: mi primer personaje", fase: 'crea',
        fa: "Cada alumne/a programa l'entrada del Cavaller com vulgui (moure's i dir alguna cosa) i el desa. Qui acabi ensenya el seu al company/a i li demana que endevini què farà abans de tocar la bandera.|Cada alumno/a programa la entrada del Caballero como quiera (moverse y decir algo) y lo guarda. Quien termine enseña el suyo al compañero/a y le pide que adivine qué hará antes de tocar la bandera.",
        diu: ["No hi ha una sola resposta bona: cada cavaller pot entrar diferent.|No hay una sola respuesta buena: cada caballero puede entrar diferente."],
        slides: ['s14'], app: "Pas «Crea»: El meu primer personatge.|Paso «Crea»: Mi primer personaje.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals de l'app i fes a cada alumne/a una pregunta del tiquet a la porta.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales de la app y haz a cada alumno/a una pregunta del ticket en la puerta.",
        diu: ["Què fa la bandera verda?|¿Qué hace la bandera verde?", "Com faig que un personatge vagi enrere?|¿Cómo hago que un personaje vaya hacia atrás?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa números molt petits (mou-te 10) i creu que el personatge no es mou.|Pone números muy pequeños (muévete 10) y cree que el personaje no se mueve.",
        "Pregunta quants passos fa d'ample l'escenari (480) i on és la marca: a la meitat? A un quart? Que estimi abans de provar.|Pregunta cuántos pasos mide de ancho el escenario (480) y dónde está la marca: ¿en la mitad? ¿En un cuarto? Que estime antes de probar."],
      ["Per anar a l'esquerra busca un bloc «esquerra» o vol girar el personatge.|Para ir a la izquierda busca un bloque «izquierda» o quiere girar al personaje.",
        "Recorda l'activitat de terra: com anàveu enrere sense girar-vos? Quin signe porta aquell número?|Recuerda la actividad del suelo: ¿cómo ibais hacia atrás sin giraros? ¿Qué signo lleva ese número?"],
      ["Posa els blocs fora del guió (no queden sota «Quan comença») i no passa res.|Pone los bloques fuera del guion (no quedan bajo «Al empezar») y no pasa nada.",
        "Que miri on diu «els blocs nous van aquí» i comprovi que els blocs pengen de la capçalera verda.|Que mire dónde dice «los bloques nuevos van aquí» y compruebe que los bloques cuelgan de la cabecera verde."],
      ["Al repte del regal, la Guida va i torna tan de pressa que no es veu que hi ha arribat.|En el reto del regalo, Guida va y vuelve tan deprisa que no se ve que ha llegado.",
        "Pregunta: com podríem fer que s'hi quedi una estona? Quin bloc fa que el temps passi? (el «digues» amb segons).|Pregunta: ¿cómo podríamos hacer que se quede un rato? ¿Qué bloque hace que pase el tiempo? (el «di» con segundos)."],
      ["Esborra tot el guió quan no arriba a la marca.|Borra todo el guion cuando no llega a la marca.",
        "Que miri si s'ha quedat curt o s'ha passat i canviï només el número.|Que mire si se ha quedado corto o se ha pasado y cambie solo el número."]
    ],
    diff: {
      mes: "Fer que el Cavaller vagi a la dreta, torni a l'esquerra i torni al mig, dient una frase a cada lloc, i que acabi exactament on ha començat (la suma dels números ha de donar 0).|Hacer que el Caballero vaya a la derecha, vuelva a la izquierda y vuelva al centro, diciendo una frase en cada sitio, y que termine exactamente donde ha empezado (la suma de los números tiene que dar 0).",
      menys: "Tenir les targetes de paper al costat de l'ordinador i, abans de posar blocs, posar la targeta. Començar pel repte d'en Numi i provar números de 50 en 50.|Tener las tarjetas de papel al lado del ordenador y, antes de poner bloques, poner la tarjeta. Empezar por el reto de Numi y probar números de 50 en 50."
    },
    aval: {
      ticket: ["Què fa la bandera verda en un guió «Quan comença»?|¿Qué hace la bandera verde en un guion «Al empezar»?",
        "Quin número posaries a «mou-te» per anar 50 passos enrere?|¿Qué número pondrías en «muévete» para ir 50 pasos hacia atrás?"],
      rubric: [
        ["Escenari i guió|Escenario y guion", "Explica que cada personatge té el seu guió i que es fa de dalt a baix quan es toca la bandera.|Explica que cada personaje tiene su guion y que se hace de arriba abajo cuando se toca la bandera.", "Toca la bandera i mira el resultat, però encara no relaciona els blocs amb el que passa.|Toca la bandera y mira el resultado, pero aún no relaciona los bloques con lo que pasa."],
        ["Endavant i enrere|Adelante y atrás", "Fa servir números positius i negatius per anar on vol i estima la distància.|Usa números positivos y negativos para ir donde quiere y estima la distancia.", "Necessita provar molts números o ajuda per anar enrere.|Necesita probar muchos números o ayuda para ir hacia atrás."],
        ["Primer personatge|Primer personaje", "El seu personatge es mou i diu una frase que es pot llegir.|Su personaje se mueve y dice una frase que se puede leer.", "Fa moure o fa parlar el personatge, però no totes dues coses.|Hace mover o hace hablar al personaje, pero no las dos cosas."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «Director/a i actor/actriu»: una persona escriu tres ordres en un paper i l'altra les fa quan veu la «bandera verda».|En casa, con el móvil, podéis repetir la sesión y hacer juntos «Director/a y actor/actriz»: una persona escribe tres órdenes en un papel y la otra las hace cuando ve la «bandera verde».",
    slides: [
      { id: 's1', k: 'portada', t: "El meu primer personatge|Mi primer personaje", x: "Al Teatre de l'illa, els actors són personatges de l'ordinador… i tu en seràs el director/a.|En el Teatro de la isla, los actores son personajes del ordenador… y tú serás su director/a.",
        nota: "Presenta el curs i l'objectiu d'avui: al final, cada alumne/a tindrà un personatge que es mou i parla.|Presenta el curso y el objetivo de hoy: al final, cada alumno/a tendrá un personaje que se mueve y habla." },
      { id: 's2', k: 'pregunta', t: "Com sap un personatge què ha de fer?|¿Cómo sabe un personaje qué tiene que hacer?", punts: ["Als dibuixos animats|En los dibujos animados", "Als videojocs|En los videojuegos", "Al teatre|En el teatro"],
        nota: "Recull idees sense corregir. Hi tornareu al final: el personatge segueix un guió que algú ha programat.|Recoge ideas sin corregir. Volveréis a ello al final: el personaje sigue un guion que alguien ha programado." },
      { id: 's3', k: 'media', t: "L'escenari i els personatges|El escenario y los personajes", x: "Cada personatge fa el que diuen els seus blocs.|Cada personaje hace lo que dicen sus bloques.",
        media: { k: 'stage', w: T([{ id: 'vuit', art: 'vuit', x: -160, y: -95 }, { id: 'numi', art: 'numi', x: -20, y: -95, costume: 1 }, { id: 'guida', art: 'guida', x: 130, y: -95 }]), prog: '@guida flag{ point:-90 } @vuit flag{ think:"Quins nervis!|¡Qué nervios!",3 } @numi flag{ move:20 say:"Benvinguts!|¡Bienvenidos!",3 }', time: 4 },
        nota: "Assenyala l'escenari (el rectangle), els tres personatges i el guió de cadascun.|Señala el escenario (el rectángulo), los tres personajes y el guion de cada uno." },
      { id: 's4', k: 'anim', t: "La bandera verda|La bandera verde", anim: 'g1flag', x: "Quan comença: els blocs es fan un a un, de dalt a baix.|Al empezar: los bloques se hacen uno a uno, de arriba abajo.",
        nota: "Compara-ho amb el teló que s'aixeca: és el senyal que tothom comenci.|Compáralo con el telón que se levanta: es la señal de que todos empiecen." },
      { id: 's5', k: 'anim', t: "Mou-te: endavant i enrere|Muévete: adelante y atrás", anim: 'g1move', x: "Positiu: endavant. Negatiu: enrere.|Positivo: adelante. Negativo: atrás.",
        nota: "Fes que la classe assenyali cap on anirà la Tuga abans que es mogui.|Haz que la clase señale hacia dónde irá Tuga antes de que se mueva." },
      { id: 's6', k: 'media', t: "Prediu: on acabarà?|Predice: ¿dónde terminará?", x: "En Numi fa mou-te 150 passos i després digues. On creieu que acabarà?|Numi hace muévete 150 pasos y después di. ¿Dónde creéis que terminará?",
        media: { k: 'stage', w: T([{ id: 'numi', art: 'numi', x: -150, y: -95, costume: 1 }]), prog: '@numi flag{ say:"Vinc!|¡Voy!",1 move:150 say:"Bon dia, públic!|¡Buenos días, público!",3 }', time: 5 },
        nota: "Abans que es mogui, que tothom assenyali amb el dit. Acaba al centre: de -150 a 0.|Antes de que se mueva, que todos señalen con el dedo. Termina en el centro: de -150 a 0." },
      { id: 's7', k: 'anim', t: "El centre és el (0, 0)|El centro es el (0, 0)", anim: 'g1stage', x: "La dreta és x positiva; l'esquerra, x negativa.|La derecha es x positiva; la izquierda, x negativa.",
        nota: "No cal aprofundir: les coordenades es treballen a la unitat 4. Que retinguin on és el centre.|No hace falta profundizar: las coordenadas se trabajan en la unidad 4. Que retengan dónde está el centro." },
      { id: 's8', k: 'media', t: "Endavant i enrere|Adelante y atrás", x: "La Guida avança, en Vuit retrocedeix i la Tuga parla.|Guida avanza, Vuit retrocede y Tuga habla.",
        media: { k: 'stage', w: T([{ id: 'guida', art: 'guida', x: -170, y: -95 }, { id: 'tuga', art: 'tuga', x: 0, y: -95 }, { id: 'vuit', art: 'vuit', x: 170, y: -95 }]), prog: '@guida flag{ move:100 say:"Ja hi soc!|¡Ya estoy!",2 } @tuga flag{ say:"Bon dia a tothom!|¡Buenos días a todos!",3 } @vuit flag{ move:-90 say:"Jo vaig enrere!|¡Yo voy hacia atrás!",2 }', time: 4 },
        nota: "Pregunta quin número té el «mou-te» d'en Vuit perquè vagi cap a l'esquerra.|Pregunta qué número tiene el «muévete» de Vuit para que vaya hacia la izquierda." },
      { id: 's9', k: 'activitat', t: "Director/a i actor/actriu|Director/a y actor/actriz", timer: 12, punts: ["Director/a: posa les targetes sota «Quan comença».|Director/a: pone las tarjetas bajo «Al empezar».", "Bandera verda: l'actor/actriu fa les targetes, de dalt a baix.|Bandera verde: el actor/actriz hace las tarjetas, de arriba abajo.", "Revisor/a: comprova cada targeta.|Revisor/a: comprueba cada tarjeta.", "Arribeu a una estrella i digueu-hi una frase. Després, canvieu els papers.|Llegad a una estrella y decid allí una frase. Después, cambiad los papeles."],
        nota: "Cada «pas» és una passa normal. Els negatius, enrere i sense girar-se. Ningú no corre.|Cada «paso» es una zancada normal. Los negativos, hacia atrás y sin girarse. Nadie corre." },
      { id: 's10', k: 'activitat', t: "Les regles de l'actor|Las reglas del actor", punts: ["Una targeta = una acció.|Una tarjeta = una acción.", "L'actor/actriu no fa res que no digui una targeta.|El actor/actriz no hace nada que no diga una tarjeta.", "Si no arriba, canviem una targeta i tornem-hi.|Si no llega, cambiamos una tarjeta y volvemos a probar."],
        blocks: [{ t: "Quan comença|Al empezar", c: 'loop' }, { t: "mou-te 3 passos|muévete 3 pasos", c: 'mov' }, { t: "digues «Bon dia!»|di «¡Buenos días!»", c: 'art' }],
        nota: "Deixa-la projectada mentre treballen a terra.|Déjala proyectada mientras trabajan en el suelo." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre «El meu primer personatge».|Abre «Mi primer personaje».", "Fes la missió i les targetes de «Descobreix».|Haz la misión y las tarjetas de «Descubre».", "A «Director/a i actor/actriu», toca «Ho hem fet!».|En «Director/a y actor/actriz», toca «¡Lo hemos hecho!».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "A l'assaig de tres actors, demana que expliquin què farà cada personatge abans de tocar la bandera.|En el ensayo de tres actores, pide que expliquen qué hará cada personaje antes de tocar la bandera." },
      { id: 's12', k: 'media', t: "Fem el primer repte junts|Hagamos el primer reto juntos", x: "Quants passos calen perquè en Numi arribi a l'estrella?|¿Cuántos pasos hacen falta para que Numi llegue a la estrella?",
        media: { k: 'stage', w: T([{ id: 'numi', art: 'numi', x: -160, y: -95 }, { id: 'marca', art: 'estrella', x: 60, y: -150, size: 60 }]), prog: '@numi flag{ say:"Hi arribaré?|¿Llegaré?",2 move:220 say:"Sí!|¡Sí!",2 }', time: 5 },
        nota: "Deixa que proposin números (100? 300?) i comenta si es quedaria curt o llarg. La solució és al voltant de 220.|Deja que propongan números (¿100? ¿300?) y comenta si se quedaría corto o largo. La solución está alrededor de 220." },
      { id: 's13', k: 'repte', t: "Reptes: les marques dels actors|Retos: las marcas de los actores", timer: 10, punts: ["1. En Numi a la seva marca|1. Numi en su marca", "2. En Vuit va enrere|2. Vuit va hacia atrás", "3. La Flama saluda el públic|3. Flama saluda al público", "4. La Guida va al regal i torna|4. Guida va al regalo y vuelve"],
        nota: "Qui acabi ajuda un company/a fent preguntes, sense tocar-li el ratolí.|Quien termine ayuda a un compañero/a haciendo preguntas, sin tocarle el ratón." },
      { id: 's14', k: 'activitat', t: "Crea: el meu primer personatge|Crea: mi primer personaje", timer: 5, x: "El Cavaller surt a escena: que es mogui i digui alguna cosa al públic.|El Caballero sale a escena: que se mueva y diga algo al público.",
        nota: "Celebra que cada cavaller entri d'una manera diferent.|Celebra que cada caballero entre de una manera diferente." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Escenari, personatges i guions.|Escenario, personajes y guiones.", "La bandera verda fa començar el guió; els blocs van de dalt a baix.|La bandera verde hace empezar el guion; los bloques van de arriba abajo.", "Mou-te: positiu endavant, negatiu enrere.|Muévete: positivo adelante, negativo atrás."],
        nota: "Torna a la pregunta del principi: el personatge segueix el guió que hem programat.|Vuelve a la pregunta del principio: el personaje sigue el guion que hemos programado." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què fa la bandera verda?|¿Qué hace la bandera verde?", "Quin número poso per anar 50 passos enrere?|¿Qué número pongo para ir 50 pasos hacia atrás?"],
        nota: "Anota qui encara dubta amb els números negatius: ho repassareu a la sessió 2.|Anota quién aún duda con los números negativos: lo repasaréis en la sesión 2." }
    ],
    print: [
      { id: 'p1', t: "Targetes de blocs: el guió de l'actor|Tarjetas de bloques: el guion del actor", k: 'targetes',
        intro: "Un paquet per grup de 3. Retalleu-les; les targetes en blanc són per inventar frases o números.|Un paquete por grupo de 3. Recortadlas; las tarjetas en blanco son para inventar frases o números.",
        items: [
          { t: "Quan comença 🚩|Al empezar 🚩", n: 2 },
          { t: "Mou-te 1 pas ➡️|Muévete 1 paso ➡️", n: 3 },
          { t: "Mou-te 2 passos ➡️|Muévete 2 pasos ➡️", n: 2 },
          { t: "Mou-te 3 passos ➡️|Muévete 3 pasos ➡️", n: 2 },
          { t: "Mou-te -1 pas ⬅️|Muévete -1 paso ⬅️", n: 2 },
          { t: "Mou-te -2 passos ⬅️|Muévete -2 pasos ⬅️", n: 2 },
          { t: "Digues «Bon dia!» 👋|Di «¡Buenos días!» 👋", n: 2 },
          { t: "Digues «…» 👋|Di «…» 👋", n: 3 }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Moure i parlar ---------- */
  'g1-2': {
    obj: [
      "L'alumne/a relaciona les direccions 0, 90, 180 i -90 amb amunt, dreta, avall i esquerra.|El alumno/a relaciona las direcciones 0, 90, 180 y -90 con arriba, derecha, abajo e izquierda.",
      "L'alumne/a explica que girar canvia cap on mira el personatge però no el mou, i combina girs i «mou-te» per fer un camí.|El alumno/a explica que girar cambia hacia dónde mira el personaje pero no lo mueve, y combina giros y «muévete» para hacer un camino.",
      "L'alumne/a distingeix «digues» de «pensa» i fa servir els segons perquè les frases es llegeixin una darrere l'altra.|El alumno/a distingue «di» de «piensa» y usa los segundos para que las frases se lean una detrás de otra.",
      "L'alumne/a programa un petit paper amb moviment, gir i dues frases.|El alumno/a programa un pequeño papel con movimiento, giro y dos frases."
    ],
    comp: [
      "Competència digital (CD5): combinar blocs de moviment i de diàleg en un programa|Competencia digital (CD5): combinar bloques de movimiento y de diálogo en un programa",
      "Pensament computacional: seqüència, estat (la direcció) i temps d'execució|Pensamiento computacional: secuencia, estado (la dirección) y tiempo de ejecución",
      "Matemàtiques: angles (quart de volta = 90 graus) i orientació en el pla|Matemáticas: ángulos (cuarto de vuelta = 90 grados) y orientación en el plano",
      "Llengua: diàleg, torns de paraula i diferència entre dir i pensar|Lengua: diálogo, turnos de palabra y diferencia entre decir y pensar"
    ],
    vocab: [
      ["Direcció|Dirección", "El número que diu cap on mira un personatge: 90 dreta, 180 avall, -90 esquerra, 0 amunt.|El número que dice hacia dónde mira un personaje: 90 derecha, 180 abajo, -90 izquierda, 0 arriba."],
      ["Grau|Grado", "La mida d'un gir: una volta sencera són 360 graus; un quart de volta, 90.|La medida de un giro: una vuelta entera son 360 grados; un cuarto de vuelta, 90."],
      ["Girar|Girar", "Canviar cap on mira el personatge sense moure'l de lloc.|Cambiar hacia dónde mira el personaje sin moverlo de sitio."],
      ["Bafarada|Bocadillo", "El globus amb el que diu un personatge (bloc «digues»).|El globo con lo que dice un personaje (bloque «di»)."],
      ["Núvol de pensament|Nube de pensamiento", "El globus amb el que pensa però no diu (bloc «pensa»).|El globo con lo que piensa pero no dice (bloque «piensa»)."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Moure i parlar»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Mover y hablar»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Quatre fulls grans amb els números 0, 90, 180 i -90 per enganxar a les quatre parets de l'aula|Cuatro hojas grandes con los números 0, 90, 180 y -90 para pegar en las cuatro paredes del aula",
        "L'escenari de terra de la sessió anterior (si encara hi és)|El escenario del suelo de la sesión anterior (si todavía está)"
      ],
      imprimir: ["Targetes de la brúixola i del diàleg|Tarjetas de la brújula y del diálogo"],
      prep: [
        "Enganxar el 0 a la paret de la pissarra, el 90 a la dreta, el 180 al fons i el -90 a l'esquerra.|Pegar el 0 en la pared de la pizarra, el 90 a la derecha, el 180 al fondo y el -90 a la izquierda.",
        "Imprimir i retallar un paquet de targetes per grup de 3.|Imprimir y recortar un paquete de tarjetas por grupo de 3.",
        "Provar les demostracions de les diapositives 5 i 7.|Probar las demostraciones de las diapositivas 5 y 7.",
        "Deixar els ordinadors amb la sessió iniciada.|Dejar los ordenadores con la sesión iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i l'assaig general|Recordamos y el ensayo general", fase: 'inici',
        fa: "Repassa «mou-te» amb un número negatiu fent que dos alumnes ho representin. Explica que avui és l'assaig: els actors han d'aprendre a girar i a dir el seu paper.|Repasa «muévete» con un número negativo haciendo que dos alumnos lo representen. Explica que hoy es el ensayo: los actores tienen que aprender a girar y a decir su papel.",
        diu: ["Què fa mou-te -100 passos?|¿Qué hace muévete -100 pasos?", "I si l'actor ha de pujar, com ho fem?|¿Y si el actor tiene que subir, cómo lo hacemos?"],
        slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Direcció, girs i frases|Dirección, giros y frases", fase: 'teoria',
        fa: "Presenta la brúixola de les direccions amb els fulls de les parets: tothom es gira cap al 90, cap al 180… Mostra que girar no mou (el cotxe gira i després avança). Explica «digues» i «pensa» i la importància dels segons amb la demostració de la Tuga: compareu-la amb un guió sense segons.|Presenta la brújula de las direcciones con las hojas de las paredes: todos se giran hacia el 90, hacia el 180… Muestra que girar no mueve (el coche gira y después avanza). Explica «di» y «piensa» y la importancia de los segundos con la demostración de Tuga: comparadla con un guion sin segundos.",
        diu: ["Tothom dret: mireu cap al 90. Ara gireu 90 graus. On mireu?|Todos de pie: mirad hacia el 90. Ahora girad 90 grados. ¿Dónde miráis?",
          "El cotxe ha girat: s'ha mogut de lloc?|El coche ha girado: ¿se ha movido de sitio?",
          "Si no poso segons, quina frase es veurà?|Si no pongo segundos, ¿qué frase se verá?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup, drets|Todo el grupo, de pie" },
      { min: 12, t: "La brúixola del teatre|La brújula del teatro", fase: 'desconnectat',
        fa: "Grups de 3 amb les targetes: el director/a fa un guió per portar l'actor/actriu de la creu del centre fins a un objecte de l'aula, amb girs, passos i una frase (comptant els segons en veu alta). El revisor/a comprova cada targeta. Després de cada guió, roten. Repte final: un diàleg de dues frases entre dos actors, cadascun amb el seu guió.|Grupos de 3 con las tarjetas: el director/a hace un guion para llevar al actor/actriz desde la cruz del centro hasta un objeto del aula, con giros, pasos y una frase (contando los segundos en voz alta). El revisor/a comprueba cada tarjeta. Después de cada guion, rotan. Reto final: un diálogo de dos frases entre dos actores, cada uno con su guion.",
        diu: ["Girar és un quart de volta, sense caminar.|Girar es un cuarto de vuelta, sin caminar.", "Compteu els segons de la frase abans de la targeta següent.|Contad los segundos de la frase antes de la tarjeta siguiente.", "Cap a quin número de la paret mira ara l'actor?|¿Hacia qué número de la pared mira ahora el actor?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. A la pregunta del cotxe, que facin el gir amb el cos abans de triar. A l'assaig d'en Vuit i la Guida, que diguin qui parla primer i per què.|Avanzan hasta la pausa activa. En la pregunta del coche, que hagan el giro con el cuerpo antes de elegir. En el ensayo de Vuit y Guida, que digan quién habla primero y por qué.",
        diu: ["Fes el gir amb la mà: cap on mira ara el cotxe?|Haz el giro con la mano: ¿hacia dónde mira ahora el coche?", "Per què la Guida pensa mentre en Vuit parla?|¿Por qué Guida piensa mientras Vuit habla?"],
        slides: ['s10'], app: "De «Recorda» fins a «Investiga»: la pregunta de mou-te, l'assaig, les 4 targetes de teoria, el gir del cotxe, ordenar el guió de la Flama, «La brúixola del teatre» (ja fet), el diàleg i el cotxe que baixa.|De «Recuerda» hasta «Investiga»: la pregunta de muévete, el ensayo, las 4 tarjetas de teoría, el giro del coche, ordenar el guion de Flama, «La brújula del teatro» (ya hecho), el diálogo y el coche que baja.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: girar i parlar|Retos: girar y hablar", fase: 'ordinador',
        fa: "Pausa activa tots junts. Resol amb la classe el camí del cotxe en forma de L (diapositiva 11) i deixa'ls fer els reptes.|Pausa activa todos juntos. Resuelve con la clase el camino del coche en forma de L (diapositiva 11) y deja que hagan los retos.",
        diu: ["Primer recte, després gir, després recte. Quants passos a cada tros?|Primero recto, después giro, después recto. ¿Cuántos pasos en cada trozo?", "En Vuit ha de tornar mirant a l'esquerra: quin bloc el fa mirar-hi?|Vuit tiene que volver mirando a la izquierda: ¿qué bloque lo hace mirar allí?"],
        slides: ['s11', 's12'], app: "«Pausa activa» i els quatre reptes: el cotxe amunt, el cotxe en L, el paper de la Flama i en Vuit que entra i surt.|«Pausa activa» y los cuatro retos: el coche arriba, el coche en L, el papel de Flama y Vuit que entra y sale.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: l'assaig del Cavaller|Crea: el ensayo del Caballero", fase: 'crea',
        fa: "Cada alumne/a programa un paper per al Cavaller amb moviment, gir i dues frases. En parelles, un llegeix el guió en veu alta i l'altre el representa.|Cada alumno/a programa un papel para el Caballero con movimiento, giro y dos frases. Por parejas, uno lee el guion en voz alta y el otro lo representa.",
        diu: ["Es poden llegir les dues frases?|¿Se pueden leer las dos frases?"],
        slides: ['s13'], app: "Pas «Crea»: L'assaig del Cavaller.|Paso «Crea»: El ensayo del Caballero.", org: "Individual i per parelles|Individual y por parejas" },
      { min: 3, t: "Tancament i tiquet|Cierre y ticket", fase: 'tancament',
        fa: "Resum, preguntes finals de l'app i tiquet a la porta.|Resumen, preguntas finales de la app y ticket en la puerta.",
        diu: ["Quina direcció és mirar a l'esquerra?|¿Qué dirección es mirar a la izquierda?", "Per què posem segons a les frases?|¿Por qué ponemos segundos en las frases?"],
        slides: ['s14', 's15'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Creu que «gira 90 graus» ja fa pujar o baixar el personatge.|Cree que «gira 90 grados» ya hace subir o bajar al personaje.",
        "Que es posi dret, giri sense caminar i miri on té els peus. Després, que provi el gir sol a l'app.|Que se ponga de pie, gire sin caminar y mire dónde tiene los pies. Después, que pruebe el giro solo en la app."],
      ["Confon el gir a la dreta i a l'esquerra (90 i -90).|Confunde el giro a la derecha y a la izquierda (90 y -90).",
        "Que s'imagini que és el personatge i giri el cos cap a la dreta: els números creixen com les agulles del rellotge.|Que se imagine que es el personaje y gire el cuerpo hacia la derecha: los números crecen como las agujas del reloj."],
      ["Fa servir «mou-te» negatiu en lloc de girar quan el repte demana que miri cap a l'esquerra.|Usa «muévete» negativo en lugar de girar cuando el reto pide que mire hacia la izquierda.",
        "Pregunta: el personatge va de cara o d'esquena? Mira la cara del personatge a l'escenari.|Pregunta: ¿el personaje va de cara o de espaldas? Mira la cara del personaje en el escenario."],
      ["Posa dues frases sense segons i només se'n veu una.|Pone dos frases sin segundos y solo se ve una.",
        "Que llegeixi el guió en veu alta comptant els segons: quan desapareix la primera frase?|Que lea el guion en voz alta contando los segundos: ¿cuándo desaparece la primera frase?"],
      ["Gira el cotxe però no l'avança i no arriba a la bandera.|Gira el coche pero no lo avanza y no llega a la bandera.",
        "Recorda la idea clau: després d'un gir, gairebé sempre cal un «mou-te».|Recuerda la idea clave: después de un giro, casi siempre hace falta un «muévete»."]
    ],
    diff: {
      mes: "Fer que el cotxe faci la volta a un quadrat (4 trossos rectes i 4 girs) i torni al lloc on ha començat, dient una frase a cada cantonada.|Hacer que el coche dé la vuelta a un cuadrado (4 tramos rectos y 4 giros) y vuelva al sitio donde ha empezado, diciendo una frase en cada esquina.",
      menys: "Fer servir «apunta en direcció» en lloc de «gira», amb els fulls de les parets a la vista. Fer primer el repte del cotxe que només puja.|Usar «apunta en dirección» en lugar de «gira», con las hojas de las paredes a la vista. Hacer primero el reto del coche que solo sube."
    },
    aval: {
      ticket: ["Un personatge mira a la dreta i gira 90 graus: cap on mira?|Un personaje mira a la derecha y gira 90 grados: ¿hacia dónde mira?",
        "Quina diferència hi ha entre «digues» i «pensa»?|¿Qué diferencia hay entre «di» y «piensa»?"],
      rubric: [
        ["Direccions|Direcciones", "Relaciona les quatre direccions amb els seus números sense ajuda.|Relaciona las cuatro direcciones con sus números sin ayuda.", "Necessita els fulls de la paret o provar per saber-les.|Necesita las hojas de la pared o probar para saberlas."],
        ["Girar i avançar|Girar y avanzar", "Combina girs i «mou-te» per fer un camí en forma de L.|Combina giros y «muévete» para hacer un camino en forma de L.", "Gira bé, però de vegades oblida el «mou-te» o el sentit del gir.|Gira bien, pero a veces olvida el «muévete» o el sentido del giro."],
        ["Diàleg amb temps|Diálogo con tiempo", "Les seves frases es llegeixen una darrere l'altra i distingeix dir i pensar.|Sus frases se leen una detrás de otra y distingue decir y pensar.", "Escriu frases però encara no controla els segons.|Escribe frases pero aún no controla los segundos."]
      ]
    },
    casa: "A casa podeu fer «La brúixola del teatre»: trieu la paret 0 i doneu-vos ordres de girar, avançar i dir frases comptant els segons.|En casa podéis hacer «La brújula del teatro»: elegid la pared 0 y daos órdenes de girar, avanzar y decir frases contando los segundos.",
    slides: [
      { id: 's1', k: 'portada', t: "Moure i parlar|Mover y hablar", x: "L'assaig general: girar cap on toca i dir el paper, frase a frase.|El ensayo general: girar hacia donde toca y decir el papel, frase a frase.",
        nota: "Explica que avui els personatges aprendran a girar i a parlar per torns.|Explica que hoy los personajes aprenderán a girar y a hablar por turnos." },
      { id: 's2', k: 'repas', t: "Recordem|Recordamos", punts: ["Què fa la bandera verda?|¿Qué hace la bandera verde?", "Què fa «mou-te -100 passos»?|¿Qué hace «muévete -100 pasos»?"], blocks: [{ t: "mou-te -100 passos|muévete -100 pasos", c: 'mov' }],
        nota: "Que dos alumnes ho representin davant de la classe.|Que dos alumnos lo representen delante de la clase." },
      { id: 's3', k: 'anim', t: "Cap on mira?|¿Hacia dónde mira?", anim: 'g1dir', x: "0 amunt · 90 dreta · 180 avall · -90 esquerra|0 arriba · 90 derecha · 180 abajo · -90 izquierda",
        nota: "Tothom dret: mireu el full del 90, ara el del 180… Feu-ho cada vegada més de pressa.|Todos de pie: mirad la hoja del 90, ahora la del 180… Hacedlo cada vez más deprisa." },
      { id: 's4', k: 'concepte', t: "Girar no mou|Girar no mueve", punts: ["Gira 90 graus: quart de volta a la dreta.|Gira 90 grados: cuarto de vuelta a la derecha.", "Gira -90 graus: quart de volta a l'esquerra.|Gira -90 grados: cuarto de vuelta a la izquierda.", "Després de girar, cal un «mou-te».|Después de girar, hace falta un «muévete»."], anim: 'g1dir',
        nota: "Gireu tots sense caminar i comproveu que els peus no s'han mogut de lloc.|Girad todos sin caminar y comprobad que los pies no se han movido de sitio." },
      { id: 's5', k: 'media', t: "El cotxe gira i avança|El coche gira y avanza", x: "Primer recte, després gira, després avall.|Primero recto, después gira, después abajo.",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'cotxe', art: 'cotxe', x: -150, y: 70 }] }, prog: '@cotxe flag{ say:"Recte!|¡Recto!",1 move:140 say:"Giro!|¡Giro!",1 turn:90 say:"Ara miro avall.|Ahora miro abajo.",2 move:110 say:"Arribat!|¡Llegué!",2 }', time: 7 },
        nota: "Atura-la (o mira-la dues vegades) just després del gir: el cotxe encara és al mateix lloc.|Párala (o mírala dos veces) justo después del giro: el coche aún está en el mismo sitio." },
      { id: 's6', k: 'anim', t: "Digues i pensa|Di y piensa", anim: 'g1say', x: "Bafarada: el que diu. Núvol: el que pensa.|Bocadillo: lo que dice. Nube: lo que piensa.",
        nota: "Demana un exemple: què diria i què pensaria un actor nerviós abans de sortir?|Pide un ejemplo: ¿qué diría y qué pensaría un actor nervioso antes de salir?" },
      { id: 's7', k: 'media', t: "Una frase darrere l'altra|Una frase detrás de otra", x: "Amb segons, cada frase es queda a la pantalla i després ve la següent.|Con segundos, cada frase se queda en la pantalla y después viene la siguiente.",
        media: { k: 'stage', w: T([{ id: 'tuga', art: 'tuga', x: 0, y: -95 }]), prog: '@tuga flag{ say:"Hola!|¡Hola!",2 say:"Soc la Tuga.|Soy Tuga.",2 think:"Ho he dit bé?|¿Lo he dicho bien?",2 }', time: 7 },
        nota: "Pregunta què passaria si la primera frase no tingués segons (desapareixeria de seguida).|Pregunta qué pasaría si la primera frase no tuviera segundos (desaparecería enseguida)." },
      { id: 's8', k: 'activitat', t: "La brúixola del teatre|La brújula del teatro", timer: 12, punts: ["L'actor/actriu comença a la creu, mirant el 90.|El actor/actriz empieza en la cruz, mirando el 90.", "El director/a fa un guió amb girs, passos i una frase fins a un objecte.|El director/a hace un guion con giros, pasos y una frase hasta un objeto.", "El revisor/a comprova cada targeta.|El revisor/a comprueba cada tarjeta.", "Final: un diàleg de dues frases entre dos actors.|Final: un diálogo de dos frases entre dos actores."],
        nota: "Recorda que els segons de les frases es compten en veu alta abans de la targeta següent.|Recuerda que los segundos de las frases se cuentan en voz alta antes de la tarjeta siguiente." },
      { id: 's9', k: 'activitat', t: "Les targetes de l'assaig|Las tarjetas del ensayo", blocks: [{ t: "gira 90 graus ↻|gira 90 grados ↻", c: 'mov' }, { t: "gira -90 graus ↺|gira -90 grados ↺", c: 'mov' }, { t: "apunta en direcció 0|apunta en dirección 0", c: 'mov' }, { t: "digues … durant 2 s|di … durante 2 s", c: 'art' }, { t: "pensa … durant 2 s|piensa … durante 2 s", c: 'art' }],
        nota: "Deixa-la projectada perquè recordin què fa cada targeta.|Déjala proyectada para que recuerden qué hace cada tarjeta." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre «Moure i parlar».|Abre «Mover y hablar».", "Fes el gir amb la mà abans de respondre.|Haz el giro con la mano antes de responder.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "A l'assaig de dos actors, demana que expliquin el torn de paraula.|En el ensayo de dos actores, pide que expliquen el turno de palabra." },
      { id: 's11', k: 'media', t: "El camí en forma de L|El camino en forma de L", x: "Quants passos fins a sota la bandera? Quin gir? Quants passos amunt?|¿Cuántos pasos hasta debajo de la bandera? ¿Qué giro? ¿Cuántos pasos arriba?",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'cotxe', art: 'cotxe', x: -180, y: -120 }, { id: 'bandera', art: 'bandera', x: 130, y: 120, size: 70 }] }, prog: '@cotxe flag{ say:"Primer tros!|¡Primer trozo!",1 move:310 say:"Giro!|¡Giro!",1 turn:-90 move:220 say:"Ja hi soc!|¡Ya estoy!",2 }', time: 6 },
        nota: "Escriu a la pissarra els tres trossos que proposen abans de mostrar la demostració.|Escribe en la pizarra los tres trozos que proponen antes de mostrar la demostración." },
      { id: 's12', k: 'repte', t: "Reptes: girar i parlar|Retos: girar y hablar", timer: 10, punts: ["1. El cotxe puja a la bandera|1. El coche sube a la bandera", "2. El cotxe en forma de L|2. El coche en forma de L", "3. La Flama diu i pensa|3. Flama dice y piensa", "4. En Vuit entra, saluda i surt|4. Vuit entra, saluda y sale"],
        nota: "Si algú s'encalla, pregunta: cap on mira ara? Cap on ha de mirar?|Si alguien se atasca, pregunta: ¿hacia dónde mira ahora? ¿Hacia dónde tiene que mirar?" },
      { id: 's13', k: 'activitat', t: "Crea: l'assaig del Cavaller|Crea: el ensayo del Caballero", timer: 5, x: "Moviment, un gir i dues frases que es puguin llegir.|Movimiento, un giro y dos frases que se puedan leer.",
        nota: "En parelles, un llegeix el guió i l'altre el representa.|Por parejas, uno lee el guion y el otro lo representa." },
      { id: 's14', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["La direcció diu cap on mira.|La dirección dice hacia dónde mira.", "Girar no mou: després cal «mou-te».|Girar no mueve: después hace falta «muévete».", "Amb segons, les frases van una darrere l'altra.|Con segundos, las frases van una detrás de otra."],
        nota: "Feu una última ronda de brúixola amb tota la classe.|Haced una última ronda de brújula con toda la clase." },
      { id: 's15', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Mira a la dreta i gira 90 graus: cap on mira?|Mira a la derecha y gira 90 grados: ¿hacia dónde mira?", "Diferència entre «digues» i «pensa».|Diferencia entre «di» y «piensa»."],
        nota: "Anota qui confon 90 i -90 per repassar-ho la setmana vinent.|Anota quién confunde 90 y -90 para repasarlo la semana que viene." }
    ],
    print: [
      { id: 'p1', t: "Targetes de la brúixola i del diàleg|Tarjetas de la brújula y del diálogo", k: 'targetes',
        intro: "Un paquet per grup de 3, per afegir a les targetes de la sessió 1. Els quatre números grans són per a les parets.|Un paquete por grupo de 3, para añadir a las tarjetas de la sesión 1. Los cuatro números grandes son para las paredes.",
        items: [
          { t: "Gira 90 graus ↻|Gira 90 grados ↻", n: 3 },
          { t: "Gira -90 graus ↺|Gira -90 grados ↺", n: 3 },
          { t: "Apunta en direcció 0 ⬆️|Apunta en dirección 0 ⬆️", n: 1 },
          { t: "Apunta en direcció 90 ➡️|Apunta en dirección 90 ➡️", n: 1 },
          { t: "Apunta en direcció 180 ⬇️|Apunta en dirección 180 ⬇️", n: 1 },
          { t: "Apunta en direcció -90 ⬅️|Apunta en dirección -90 ⬅️", n: 1 },
          { t: "Digues «…» durant 2 s 👋|Di «…» durante 2 s 👋", n: 3 },
          { t: "Pensa «…» durant 2 s 🧠|Piensa «…» durante 2 s 🧠", n: 2 }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Fons i escenes ---------- */
  'g1-3': {
    obj: [
      "L'alumne/a canvia el fons de l'escenari amb «canvia el fons a» i amb «fons següent».|El alumno/a cambia el fondo del escenario con «cambia el fondo a» y con «fondo siguiente».",
      "L'alumne/a explica que «fons següent» segueix l'ordre de la llista i torna al primer després de l'últim.|El alumno/a explica que «fondo siguiente» sigue el orden de la lista y vuelve al primero después del último.",
      "L'alumne/a fa sortir un personatge de l'escena amb «amaga't» i el fa tornar amb «mostra't».|El alumno/a hace salir a un personaje de la escena con «escóndete» y lo hace volver con «muéstrate».",
      "L'alumne/a planifica una història en escenes (guió gràfic) i la programa amb almenys dos fons.|El alumno/a planifica una historia en escenas (guion gráfico) y la programa con al menos dos fondos."
    ],
    comp: [
      "Competència digital (CD5): crear una història digital amb diverses escenes|Competencia digital (CD5): crear una historia digital con varias escenas",
      "Pensament computacional: descomposició d'una història en escenes i ordre de les instruccions|Pensamiento computacional: descomposición de una historia en escenas y orden de las instrucciones",
      "Llengua: estructura d'un relat (inici, desenvolupament i final) i narració oral|Lengua: estructura de un relato (inicio, desarrollo y final) y narración oral",
      "Educació artística: el guió gràfic i la composició d'una escena|Educación artística: el guion gráfico y la composición de una escena"
    ],
    vocab: [
      ["Fons|Fondo", "El dibuix de darrere de tot de l'escenari, com el decorat del teatre.|El dibujo de detrás de todo del escenario, como el decorado del teatro."],
      ["Fons següent|Fondo siguiente", "El fons que ve després a la llista; després de l'últim torna el primer.|El fondo que viene después en la lista; después del último vuelve el primero."],
      ["Escena|Escena", "Un tros de la història en un lloc: fons, personatges i el que fan i diuen.|Un trozo de la historia en un lugar: fondo, personajes y lo que hacen y dicen."],
      ["Guió gràfic|Guion gráfico", "La història dibuixada en vinyetes abans de programar-la.|La historia dibujada en viñetas antes de programarla."],
      ["Amagar-se|Esconderse", "Desaparèixer de l'escenari sense deixar d'existir.|Desaparecer del escenario sin dejar de existir."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Fons i escenes»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Fondos y escenas»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis de colors i la fitxa del guió gràfic (una per alumne/a)|Lápices de colores y la ficha del guion gráfico (una por alumno/a)",
        "Opcional: tres llençols o cartolines de colors per fer de «decorats» a la pausa activa|Opcional: tres sábanas o cartulinas de colores para hacer de «decorados» en la pausa activa"
      ],
      imprimir: ["Fitxa: el meu guió gràfic|Ficha: mi guion gráfico"],
      prep: [
        "Imprimir una fitxa del guió gràfic per alumne/a.|Imprimir una ficha del guion gráfico por alumno/a.",
        "Provar les demostracions de les diapositives 4, 5 i 7.|Probar las demostraciones de las diapositivas 4, 5 y 7.",
        "Tenir preparat un exemple propi de guió gràfic de 3 vinyetes per ensenyar.|Tener preparado un ejemplo propio de guion gráfico de 3 viñetas para enseñar.",
        "Deixar els ordinadors amb la sessió iniciada.|Dejar los ordenadores con la sesión iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i el taller de decorats|Recordamos y el taller de decorados", fase: 'inici',
        fa: "Fes una ronda ràpida de brúixola. Després pregunta com canvia de lloc una obra de teatre (es canvia el decorat) i presenta el repte del dia: històries que viatgen.|Haz una ronda rápida de brújula. Después pregunta cómo cambia de sitio una obra de teatro (se cambia el decorado) y presenta el reto del día: historias que viajan.",
        diu: ["Mira a la dreta i gira -90 graus: on mires?|Mira a la derecha y gira -90 grados: ¿dónde miras?", "Com sabem, al teatre, que l'obra ara passa en un bosc?|¿Cómo sabemos, en el teatro, que la obra ahora pasa en un bosque?"],
        slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Fons, fons següent i amagar-se|Fondos, fondo siguiente y esconderse", fase: 'teoria',
        fa: "Mostra el canvi de fons i fes notar que el personatge es queda on és. Explica «fons següent» amb la demostració i pregunta què passa després de l'últim. Presenta «amaga't» i «mostra't». Acaba amb la idea d'escena i ensenya el teu guió gràfic de 3 vinyetes.|Muestra el cambio de fondo y haz notar que el personaje se queda donde está. Explica «fondo siguiente» con la demostración y pregunta qué pasa después del último. Presenta «escóndete» y «muéstrate». Termina con la idea de escena y enseña tu guion gráfico de 3 viñetas.",
        diu: ["Quan canvia el fons, en Numi s'ha mogut?|Cuando cambia el fondo, ¿Numi se ha movido?", "Després de l'espai, quin fons vindrà?|Después del espacio, ¿qué fondo vendrá?", "Quines tres coses té cada escena?|¿Qué tres cosas tiene cada escena?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El guió gràfic|El guion gráfico", fase: 'desconnectat',
        fa: "Cada alumne/a dibuixa a la fitxa una història de 3 escenes: a cada vinyeta, el fons, el personatge i què diu, i a sota, els blocs que caldrien. Després, en parelles, s'expliquen la història l'un a l'altre. Aquest guió el podran fer servir al pas «Crea».|Cada alumno/a dibuja en la ficha una historia de 3 escenas: en cada viñeta, el fondo, el personaje y qué dice, y debajo, los bloques que harían falta. Después, por parejas, se explican la historia el uno al otro. Este guion lo podrán usar en el paso «Crea».",
        diu: ["No cal dibuixar bé: n'hi ha prou amb ninots i paraules.|No hace falta dibujar bien: basta con monigotes y palabras.", "Quin bloc farà que passem de la vinyeta 1 a la 2?|¿Qué bloque hará que pasemos de la viñeta 1 a la 2?"],
        slides: ['s8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. Al pas «El guió gràfic», que toquin «Ho hem fet!». Al viatge de la Tuga, que comptin els fons en veu baixa.|Avanzan hasta la pausa activa. En el paso «El guion gráfico», que toquen «¡Lo hemos hecho!». En el viaje de Tuga, que cuenten los fondos en voz baja.",
        diu: ["Quants fons has comptat? Quins blocs els canvien?|¿Cuántos fondos has contado? ¿Qué bloques los cambian?", "On acaba la història d'en Numi i per què?|¿Dónde termina la historia de Numi y por qué?"],
        slides: ['s9'], app: "De «Recorda» fins a «Investiga»: la pregunta del gir, els decorats, les 5 targetes, «fons següent», ordenar el guió de la Guida, «El guió gràfic» (ja fet), el viatge de la Tuga, quin fons es veu al final i la platja que surt fosca.|De «Recuerda» hasta «Investiga»: la pregunta del giro, los decorados, las 5 tarjetas, «fondo siguiente», ordenar el guion de Guida, «El guion gráfico» (ya hecho), el viaje de Tuga, qué fondo se ve al final y la playa que sale oscura.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: canvis de decorat|Retos: cambios de decorado", fase: 'ordinador',
        fa: "Feu la pausa activa dels decorats. Després mostra el repte de les escenes en mal ordre (diapositiva 10) i deixa'ls fer els quatre reptes.|Haced la pausa activa de los decorados. Después muestra el reto de las escenas en mal orden (diapositiva 10) y deja que hagan los cuatro retos.",
        diu: ["Quants «fons següent» calen del bosc a l'espai?|¿Cuántos «fondo siguiente» hacen falta del bosque al espacio?", "Quins dos blocs estan intercanviats?|¿Qué dos bloques están intercambiados?"],
        slides: ['s10', 's11'], app: "«Pausa activa» i els quatre reptes: la platja, el viatge amb fons següent, el comiat de l'Estel i les escenes en mal ordre.|«Pausa activa» y los cuatro retos: la playa, el viaje con fondo siguiente, la despedida de Estel y las escenas en mal orden.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la meva escena|Crea: mi escena", fase: 'crea',
        fa: "Cada alumne/a programa la història del seu guió gràfic (o una de nova) amb la Flama: almenys dos fons i una frase a cada escena.|Cada alumno/a programa la historia de su guion gráfico (o una nueva) con Flama: al menos dos fondos y una frase en cada escena.",
        diu: ["Mira la teva fitxa: quin és el primer fons?|Mira tu ficha: ¿cuál es el primer fondo?"],
        slides: ['s12'], app: "Pas «Crea»: La meva escena.|Paso «Crea»: Mi escena.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet|Cierre y ticket", fase: 'tancament',
        fa: "Resum, preguntes finals de l'app i tiquet a la porta.|Resumen, preguntas finales de la app y ticket en la puerta.",
        diu: ["Què passa amb els personatges quan canvia el fons?|¿Qué pasa con los personajes cuando cambia el fondo?", "Quin bloc fa sortir un personatge de l'escena?|¿Qué bloque hace salir a un personaje de la escena?"],
        slides: ['s13', 's14'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el canvi de fons després de totes les frases i la història sembla que passi tota al primer lloc.|Pone el cambio de fondo después de todas las frases y la historia parece que pase toda en el primer sitio.",
        "Que segueixi el guió gràfic: cada vinyeta comença amb el seu fons i després ve la frase.|Que siga el guion gráfico: cada viñeta empieza con su fondo y después viene la frase."],
      ["No entén per què «fons següent» torna al bosc.|No entiende por qué «fondo siguiente» vuelve al bosque.",
        "Que digui la llista en veu alta i compti amb els dits: després de l'últim, es torna a començar, com els dies de la setmana.|Que diga la lista en voz alta y cuente con los dedos: después del último, se vuelve a empezar, como los días de la semana."],
      ["Amaga el personatge abans que digui la frase de comiat i no es veu.|Esconde al personaje antes de que diga la frase de despedida y no se ve.",
        "Pregunta: el públic pot llegir una frase d'un personatge invisible? Quin bloc ha d'anar primer?|Pregunta: ¿el público puede leer una frase de un personaje invisible? ¿Qué bloque tiene que ir primero?"],
      ["Creu que el personatge amagat s'ha esborrat i el vol tornar a crear.|Cree que el personaje escondido se ha borrado y lo quiere volver a crear.",
        "Que toqui la bandera una altra vegada: tot torna a començar i el personatge torna a ser-hi.|Que toque la bandera otra vez: todo vuelve a empezar y el personaje vuelve a estar."],
      ["A les escenes en mal ordre, esborra tot el guió.|En las escenas en mal orden, borra todo el guion.",
        "Que llegeixi el guió en veu alta i trobi on diu «nit» i on diu «bosc»: només cal canviar aquests dos blocs.|Que lea el guion en voz alta y encuentre dónde dice «noche» y dónde dice «bosque»: solo hay que cambiar esos dos bloques."]
    ],
    diff: {
      mes: "Fer una història de 4 escenes en què el personatge s'amaga en una escena i torna a sortir (mostra't) en la següent, amb un pensament i una frase a cada escena.|Hacer una historia de 4 escenas en la que el personaje se esconde en una escena y vuelve a salir (muéstrate) en la siguiente, con un pensamiento y una frase en cada escena.",
      menys: "Fer una història de només 2 escenes seguint la fitxa pas a pas: fons 1, frase, fons 2, frase. Fer servir «canvia el fons a» en lloc de «fons següent».|Hacer una historia de solo 2 escenas siguiendo la ficha paso a paso: fondo 1, frase, fondo 2, frase. Usar «cambia el fondo a» en lugar de «fondo siguiente»."
    },
    aval: {
      ticket: ["Els fons són bosc, platja i espai. Ara és l'espai: què fa «fons següent»?|Los fondos son bosque, playa y espacio. Ahora es el espacio: ¿qué hace «fondo siguiente»?",
        "Digues les tres coses que té una escena.|Di las tres cosas que tiene una escena."],
      rubric: [
        ["Canviar el fons|Cambiar el fondo", "Fa servir «canvia el fons a» i «fons següent» i preveu quin fons es veurà.|Usa «cambia el fondo a» y «fondo siguiente» y prevé qué fondo se verá.", "Canvia el fons però li costa preveure l'ordre de «fons següent».|Cambia el fondo pero le cuesta prever el orden de «fondo siguiente»."],
        ["Escenes|Escenas", "Planifica 3 escenes al guió gràfic amb fons, personatge i frase.|Planifica 3 escenas en el guion gráfico con fondo, personaje y frase.", "Dibuixa les escenes però sense relacionar-les amb els blocs.|Dibuja las escenas pero sin relacionarlas con los bloques."],
        ["Història programada|Historia programada", "La seva història té almenys dos fons i una frase a cada escena, en l'ordre bo.|Su historia tiene al menos dos fondos y una frase en cada escena, en el orden correcto.", "Té dos fons, però les frases no coincideixen amb l'escena.|Tiene dos fondos, pero las frases no coinciden con la escena."]
      ]
    },
    casa: "A casa, inventeu junts una història de 3 escenes i expliqueu-la com si fos una obra de teatre, canviant de lloc de la casa a cada escena (la cuina és la platja, el passadís és el bosc…).|En casa, inventad juntos una historia de 3 escenas y explicadla como si fuera una obra de teatro, cambiando de sitio de la casa en cada escena (la cocina es la playa, el pasillo es el bosque…).",
    slides: [
      { id: 's1', k: 'portada', t: "Fons i escenes|Fondos y escenas", x: "Al taller del teatre pintem decorats: avui les històries viatgen.|En el taller del teatro pintamos decorados: hoy las historias viajan.",
        nota: "Explica que avui faran històries amb diversos llocs.|Explica que hoy harán historias con varios lugares." },
      { id: 's2', k: 'pregunta', t: "Com canvia de lloc una obra de teatre?|¿Cómo cambia de sitio una obra de teatro?", punts: ["Canvia el decorat|Cambia el decorado", "Els actors surten i entren|Los actores salen y entran", "Canvia la llum|Cambia la luz"],
        nota: "Relaciona les respostes amb els blocs d'avui: fons, amaga't i mostra't.|Relaciona las respuestas con los bloques de hoy: fondo, escóndete y muéstrate." },
      { id: 's3', k: 'anim', t: "El fons de l'escenari|El fondo del escenario", anim: 'g1bg', x: "El fons canvia; els personatges es queden on són.|El fondo cambia; los personajes se quedan donde están.",
        nota: "Fes notar que en Numi no es mou mentre canvien els fons.|Haz notar que Numi no se mueve mientras cambian los fondos." },
      { id: 's4', k: 'media', t: "Canvia el fons a…|Cambia el fondo a…", x: "Entre frase i frase, la història canvia de lloc.|Entre frase y frase, la historia cambia de sitio.",
        media: { k: 'stage', w: { bg: 'bosc', bgs: ['bosc', 'platja', 'espai'], sprites: [{ id: 'numi', art: 'numi', x: 0, y: -60, costume: 1 }] }, prog: `@numi flag{ say:"Som al bosc.|Estamos en el bosque.",2 bg:platja say:"Ara, a la platja!|¡Ahora, a la playa!",2 bg:espai say:"I ara, a l'espai!|¡Y ahora, al espacio!",2 }`, time: 7 },
        nota: "Pregunta quants blocs de fons hi ha al guió (dos).|Pregunta cuántos bloques de fondo hay en el guion (dos)." },
      { id: 's5', k: 'media', t: "Fons següent|Fondo siguiente", x: "Un darrere l'altre… i després de l'últim, el primer.|Uno detrás de otro… y después del último, el primero.",
        media: { k: 'stage', w: { bg: 'bosc', bgs: ['bosc', 'platja', 'espai'], sprites: [{ id: 'guida', art: 'guida', x: 0, y: -60 }] }, prog: '@guida flag{ say:"1|1",1 nextbg say:"2|2",1 nextbg say:"3|3",1 nextbg say:"I tornem al primer!|¡Y volvemos al primero!",2 }', time: 6 },
        nota: "Abans del tercer canvi, pregunta quin fons vindrà.|Antes del tercer cambio, pregunta qué fondo vendrá." },
      { id: 's6', k: 'concepte', t: "Amaga't i mostra't|Escóndete y muéstrate", punts: ["Amaga't: el personatge surt de l'escena.|Escóndete: el personaje sale de la escena.", "Mostra't: torna a sortir.|Muéstrate: vuelve a salir.", "Amb la bandera, tot torna a començar.|Con la bandera, todo vuelve a empezar."], blocks: [{ t: "amaga't|escóndete", c: 'art' }, { t: "mostra't|muéstrate", c: 'art' }],
        nota: "Demana: primer la frase de comiat i després amaga't, o al revés? Per què?|Pide: ¿primero la frase de despedida y después escóndete, o al revés? ¿Por qué?" },
      { id: 's7', k: 'anim', t: "Una història feta d'escenes|Una historia hecha de escenas", anim: 'g1scene', x: "Escena = fons + personatges + el que fan i diuen.|Escena = fondo + personajes + lo que hacen y dicen.",
        nota: "Ensenya el teu guió gràfic d'exemple de 3 vinyetes.|Enseña tu guion gráfico de ejemplo de 3 viñetas." },
      { id: 's8', k: 'activitat', t: "El meu guió gràfic|Mi guion gráfico", timer: 12, punts: ["Dibuixa 3 escenes a la fitxa.|Dibuja 3 escenas en la ficha.", "A cada una: fons, personatge i què diu.|En cada una: fondo, personaje y qué dice.", "A sota, els blocs que caldrien.|Debajo, los bloques que harían falta.", "Explica la història al company/a.|Explica la historia al compañero/a."],
        nota: "Recorda que no es valora el dibuix: valen ninots i paraules.|Recuerda que no se valora el dibujo: valen monigotes y palabras." },
      { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre «Fons i escenes».|Abre «Fondos y escenas».", "A «El guió gràfic», toca «Ho hem fet!».|En «El guion gráfico», toca «¡Lo hemos hecho!».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al viatge de la Tuga, que comptin els fons.|En el viaje de Tuga, que cuenten los fondos." },
      { id: 's10', k: 'media', t: "Escenes en mal ordre|Escenas en mal orden", x: "Havia de començar al bosc i acabar de nit. Què falla?|Tenía que empezar en el bosque y terminar de noche. ¿Qué falla?",
        media: { k: 'stage', w: T([{ id: 'guida', art: 'guida', x: 0, y: -80 }], { bgs: ['escenari', 'bosc', 'nit'] }), prog: '@guida flag{ say:"Comença la funció!|¡Empieza la función!",2 bg:nit say:"Bon dia, bosc!|¡Buenos días, bosque!",2 bg:bosc say:"Bona nit a tothom!|¡Buenas noches a todos!",2 }', time: 7 },
        nota: "Que trobin els dos blocs de fons intercanviats sense resoldre-ho del tot: ho faran a l'app.|Que encuentren los dos bloques de fondo intercambiados sin resolverlo del todo: lo harán en la app." },
      { id: 's11', k: 'repte', t: "Reptes: canvis de decorat|Retos: cambios de decorado", timer: 10, punts: ["1. Anem a la platja|1. Vamos a la playa", "2. El viatge amb fons següent|2. El viaje con fondo siguiente", "3. El comiat de l'Estel|3. La despedida de Estel", "4. Les escenes en mal ordre|4. Las escenas en mal orden"],
        nota: "Si algú s'encalla, que llegeixi el guió en veu alta, escena a escena.|Si alguien se atasca, que lea el guion en voz alta, escena a escena." },
      { id: 's12', k: 'activitat', t: "Crea: la meva escena|Crea: mi escena", timer: 5, x: "Programa el teu guió gràfic: almenys dos fons i una frase a cada escena.|Programa tu guion gráfico: al menos dos fondos y una frase en cada escena.",
        nota: "Qui acabi pot afegir una escena on el personatge s'amagui.|Quien termine puede añadir una escena donde el personaje se esconda." },
      { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["El fons és el decorat i es pot canviar.|El fondo es el decorado y se puede cambiar.", "Fons següent segueix la llista i torna al primer.|Fondo siguiente sigue la lista y vuelve al primero.", "Amaga't fa sortir de l'escena.|Escóndete hace salir de la escena."],
        nota: "Pregunta qui ha fet una història de més de dues escenes.|Pregunta quién ha hecho una historia de más de dos escenas." },
      { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Ara és l'espai (l'últim): què fa «fons següent»?|Ahora es el espacio (el último): ¿qué hace «fondo siguiente»?", "Les tres coses d'una escena.|Las tres cosas de una escena."],
        nota: "Recull les fitxes del guió gràfic: les podeu fer servir com a idea per al projecte.|Recoge las fichas del guion gráfico: las podéis usar como idea para el proyecto." }
    ],
    print: [
      { id: 'p1', t: "El meu guió gràfic|Mi guion gráfico", k: 'fitxa',
        intro: "Dibuixa una història de 3 escenes. A cada escena: el fons, el personatge i el que diu. A sota, escriu els blocs.|Dibuja una historia de 3 escenas. En cada escena: el fondo, el personaje y lo que dice. Debajo, escribe los bloques.",
        items: [
          { q: "Escena 1: on passa (fons)? Qui hi surt? Què diu?|Escena 1: ¿dónde pasa (fondo)? ¿Quién sale? ¿Qué dice?", big: true, sol: "Resposta oberta: un fons, un personatge i una frase.|Respuesta abierta: un fondo, un personaje y una frase." },
          { q: "Escena 2: on passa ara? Què diu o pensa el personatge?|Escena 2: ¿dónde pasa ahora? ¿Qué dice o piensa el personaje?", big: true, sol: "Resposta oberta: un fons diferent del de l'escena 1.|Respuesta abierta: un fondo diferente del de la escena 1." },
          { q: "Escena 3: com s'acaba la història? El personatge s'amaga?|Escena 3: ¿cómo termina la historia? ¿El personaje se esconde?", big: true, sol: "Resposta oberta: pot acabar amb «amaga't».|Respuesta abierta: puede terminar con «escóndete»." },
          { q: "Escriu els blocs de la història, en ordre (canvia el fons a…, digues…, amaga't…).|Escribe los bloques de la historia, en orden (cambia el fondo a…, di…, escóndete…).", sol: "Exemple: canvia el fons a bosc · digues «Hola!» 2 s · canvia el fons a platja · digues «Quina calor!» 2 s · amaga't.|Ejemplo: cambia el fondo a bosque · di «¡Hola!» 2 s · cambia el fondo a playa · di «¡Qué calor!» 2 s · escóndete." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: presenta't ---------- */
  'g1-4': {
    obj: [
      "L'alumne/a planifica una presentació personal (nom, què li agrada i lloc preferit) abans de programar.|El alumno/a planifica una presentación personal (nombre, qué le gusta y sitio favorito) antes de programar.",
      "L'alumne/a construeix un programa a trossos i el prova després de cada tros.|El alumno/a construye un programa a trozos y lo prueba después de cada trozo.",
      "L'alumne/a combina moure, girar, dir, canviar el fons i amagar-se en un sol projecte.|El alumno/a combina mover, girar, decir, cambiar el fondo y esconderse en un solo proyecto.",
      "L'alumne/a distingeix les dades que es poden compartir (nom de pila, gustos) de les privades (adreça, telèfon).|El alumno/a distingue los datos que se pueden compartir (nombre de pila, gustos) de los privados (dirección, teléfono)."
    ],
    comp: [
      "Competència digital (CD5 i CD4): crear un projecte digital propi i protegir les dades personals|Competencia digital (CD5 y CD4): crear un proyecto digital propio y proteger los datos personales",
      "Pensament computacional: planificar, descompondre en trossos, provar i depurar|Pensamiento computacional: planificar, descomponer en trozos, probar y depurar",
      "Competència personal i social: parlar de si mateix/a i donar i rebre comentaris amables|Competencia personal y social: hablar de sí mismo/a y dar y recibir comentarios amables",
      "Comunicació oral: presentar un treball davant del grup|Comunicación oral: presentar un trabajo delante del grupo"
    ],
    vocab: [
      ["Projecte|Proyecto", "Un treball més gran que es planifica, es fa, es prova i es millora.|Un trabajo más grande que se planifica, se hace, se prueba y se mejora."],
      ["Pla|Plan", "El que decidim abans de programar: què passarà i en quin ordre.|Lo que decidimos antes de programar: qué pasará y en qué orden."],
      ["Provar|Probar", "Executar el programa i mirar-lo com si fóssim el públic.|Ejecutar el programa y mirarlo como si fuéramos el público."],
      ["Millorar|Mejorar", "Canviar el que no funciona o no s'entén bé.|Cambiar lo que no funciona o no se entiende bien."],
      ["Dada privada|Dato privado", "Una informació que no es comparteix: adreça, telèfon, contrasenyes…|Una información que no se comparte: dirección, teléfono, contraseñas…"]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: presenta't»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: preséntate»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La fitxa «El meu pla» (una per alumne/a) i llapis|La ficha «Mi plan» (una por alumno/a) y lápices",
        "Opcional: una «estora vermella» (cinta al terra) per a l'estrena final|Opcional: una «alfombra roja» (cinta en el suelo) para el estreno final"
      ],
      imprimir: ["Fitxa: el meu pla|Ficha: mi plan", "Targetes: dues estrelles i un desig|Tarjetas: dos estrellas y un deseo"],
      prep: [
        "Imprimir una fitxa del pla per alumne/a i les targetes de comentaris (una per alumne/a).|Imprimir una ficha del plan por alumno/a y las tarjetas de comentarios (una por alumno/a).",
        "Provar la presentació de la Tuga (diapositiva 4) i la de la diapositiva 9.|Probar la presentación de Tuga (diapositiva 4) y la de la diapositiva 9.",
        "Pensar com s'ensenyaran els projectes al final (tots a la pantalla gran o passejant per les taules).|Pensar cómo se enseñarán los proyectos al final (todos en la pantalla grande o paseando por las mesas).",
        "Deixar els ordinadors amb la sessió iniciada.|Dejar los ordenadores con la sesión iniciada."
      ]
    },
    plan: [
      { min: 4, t: "La gran estrena|El gran estreno", fase: 'inici',
        fa: "Explica que avui és l'estrena: cada alumne/a farà un personatge que es presenta parlant d'ell/a. Presenta els quatre passos d'un projecte: pla, programar, provar i millorar.|Explica que hoy es el estreno: cada alumno/a hará un personaje que se presenta hablando de él/ella. Presenta los cuatro pasos de un proyecto: plan, programar, probar y mejorar.",
        diu: ["Si un personatge parlés de tu, què diria?|Si un personaje hablara de ti, ¿qué diría?", "Avui no improvisarem: primer farem el pla.|Hoy no improvisaremos: primero haremos el plan."],
        slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Un exemple i les dades privades|Un ejemplo y los datos privados", fase: 'teoria',
        fa: "Mostra la presentació de la Tuga i descomponeu-la en trossos a la pissarra. Parla de les dades privades: el nom de pila i els gustos es poden dir; l'adreça, el telèfon o l'escola, no. Ensenya un error habitual (una frase sense segons) i com es detecta provant.|Muestra la presentación de Tuga y descomponedla en trozos en la pizarra. Habla de los datos privados: el nombre de pila y los gustos se pueden decir; la dirección, el teléfono o el colegio, no. Enseña un error habitual (una frase sin segundos) y cómo se detecta probando.",
        diu: ["Quins trossos té la presentació de la Tuga?|¿Qué trozos tiene la presentación de Tuga?", "Per què no posem l'adreça en un projecte que veuran altres persones?|¿Por qué no ponemos la dirección en un proyecto que verán otras personas?"],
        slides: ['s3', 's4', 's5', 's6'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El meu pla|Mi plan", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa «El meu pla»: nom de pila, què li agrada, lloc preferit (un dels fons de l'app), quin personatge triarà i com entrarà i sortirà. En parelles, es llegeixen el pla en veu alta i comproven que no hi ha cap dada privada.|Cada alumno/a rellena la ficha «Mi plan»: nombre de pila, qué le gusta, sitio favorito (uno de los fondos de la app), qué personaje elegirá y cómo entrará y saldrá. Por parejas, se leen el plan en voz alta y comprueban que no hay ningún dato privado.",
        diu: ["El teu lloc preferit no hi és? Tria el fons que s'hi assembli més.|¿Tu sitio favorito no está? Elige el fondo que se le parezca más.", "Revisa el pla del company/a: hi ha alguna dada privada?|Revisa el plan del compañero/a: ¿hay algún dato privado?"],
        slides: ['s7'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 10, t: "A l'ordinador: investiga i els tres trossos|En el ordenador: investiga y los tres trozos", fase: 'ordinador',
        fa: "Avancen per l'app: la pregunta de les dades privades, en Vuit que no es llegeix, la pausa activa i els tres reptes que construeixen la presentació de la Guida a trossos. Remarca que després de cada tros es prova.|Avanzan por la app: la pregunta de los datos privados, Vuit que no se lee, la pausa activa y los tres retos que construyen la presentación de Guida a trozos. Remarca que después de cada trozo se prueba.",
        diu: ["Has provat el tros abans d'afegir-ne un altre?|¿Has probado el trozo antes de añadir otro?", "Quin bloc falta perquè la Guida se'n vagi mirant la porta?|¿Qué bloque falta para que Guida se vaya mirando la puerta?"],
        slides: ['s8', 's9', 's10'], app: "De «Recorda» fins als tres reptes de la Guida: «El meu pla» (ja fet), la pregunta de les dades privades, en Vuit, la pausa activa i els trossos 1, 2 i 3.|De «Recuerda» hasta los tres retos de Guida: «Mi plan» (ya hecho), la pregunta de los datos privados, Vuit, la pausa activa y los trozos 1, 2 y 3.", org: "Individual|Individual" },
      { min: 15, t: "Crea: presenta't!|Crea: ¡preséntate!", fase: 'crea',
        fa: "Cada alumne/a tria un personatge i programa la seva presentació seguint el pla. Passeja i pregunta en quin tros són. Quan la tinguin, la desen. Qui acabi abans fa de «provador/a» d'un company/a.|Cada alumno/a elige un personaje y programa su presentación siguiendo el plan. Pasea y pregunta en qué trozo están. Cuando la tengan, la guardan. Quien termine antes hace de «probador/a» de un compañero/a.",
        diu: ["Mira el pla: quin és el tros següent?|Mira el plan: ¿cuál es el trozo siguiente?", "Prova-ho com si fossis el públic: es llegeix tot?|Pruébalo como si fueras el público: ¿se lee todo?"],
        slides: ['s11', 's12'], app: "Pas «Crea»: Presenta't (i el missatge per ensenyar-ho a un company/a).|Paso «Crea»: Preséntate (y el mensaje para enseñarlo a un compañero/a).", org: "Individual|Individual" },
      { min: 10, t: "L'estrena: dues estrelles i un desig|El estreno: dos estrellas y un deseo", fase: 'tancament',
        fa: "Feu l'estrena: alguns voluntaris mostren la presentació a la pantalla gran (o es passeja per les taules). Cada alumne/a omple una targeta per a un company/a: dues coses que li han agradat i una millora. Acaba amb les preguntes finals de l'app, el tiquet i un aplaudiment per a tots els creadors.|Haced el estreno: algunos voluntarios muestran la presentación en la pantalla grande (o se pasea por las mesas). Cada alumno/a rellena una tarjeta para un compañero/a: dos cosas que le han gustado y una mejora. Termina con las preguntas finales de la app, el ticket y un aplauso para todos los creadores.",
        diu: ["Comentaris amables: primer el que t'agrada, després la millora.|Comentarios amables: primero lo que te gusta, después la mejora.", "Quins passos hem seguit per fer el projecte?|¿Qué pasos hemos seguido para hacer el proyecto?"],
        slides: ['s13', 's14', 's15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup i per parelles|Todo el grupo y por parejas" },
      { min: 3, t: "Comiat de la unitat|Despedida de la unidad", fase: 'tancament',
        fa: "Repassa què han après a la unitat (personatges, moure, girar, parlar, fons) i anuncia la unitat 2: personatges que es mouen sols amb vestits i bucles.|Repasa qué han aprendido en la unidad (personajes, mover, girar, hablar, fondos) y anuncia la unidad 2: personajes que se mueven solos con disfraces y bucles.",
        diu: ["La setmana vinent: animacions que no s'aturen mai!|La semana que viene: ¡animaciones que no se paran nunca!"],
        slides: ['s17'], app: "Cap.|Ninguna.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Vol posar el nom i els cognoms, o el nom de l'escola, a la presentació.|Quiere poner el nombre y los apellidos, o el nombre del colegio, en la presentación.",
        "Recorda la diferència entre dada pública i privada i pregunta: ho diries a algú que no coneixes pel carrer?|Recuerda la diferencia entre dato público y privado y pregunta: ¿se lo dirías a alguien que no conoces por la calle?"],
      ["Programa tota la presentació de cop sense provar-la i, quan falla, no sap on.|Programa toda la presentación de golpe sin probarla y, cuando falla, no sabe dónde.",
        "Que torni al pla i provi tros a tros: fins a quin tros funciona?|Que vuelva al plan y pruebe trozo a trozo: ¿hasta qué trozo funciona?"],
      ["Programa un personatge però mira l'escenari esperant que en faci un altre.|Programa un personaje pero mira el escenario esperando que haga otro.",
        "Que miri a la llista de dalt quin personatge té seleccionat: els blocs són del personatge triat.|Que mire en la lista de arriba qué personaje tiene seleccionado: los bloques son del personaje elegido."],
      ["Canvia el fons al principi i la resta de frases ja passen al lloc preferit.|Cambia el fondo al principio y el resto de frases ya pasan en el sitio favorito.",
        "Pregunta: en quin moment de la presentació parles del lloc preferit? Que hi posi el canvi de fons just abans.|Pregunta: ¿en qué momento de la presentación hablas del sitio favorito? Que ponga el cambio de fondo justo antes."],
      ["S'encalla buscant la frase perfecta i no avança.|Se atasca buscando la frase perfecta y no avanza.",
        "Que faci servir una frase de les que ofereix l'app i la millori al final, si té temps.|Que use una frase de las que ofrece la app y la mejore al final, si tiene tiempo."]
    ],
    diff: {
      mes: "Afegir una segona escena: el personatge s'amaga, canvia el fons a un altre lloc que li agradi, torna a sortir (mostra't) i explica per què li agrada. O fer que dos personatges es presentin l'un a l'altre per torns.|Añadir una segunda escena: el personaje se esconde, cambia el fondo a otro sitio que le guste, vuelve a salir (muéstrate) y explica por qué le gusta. O hacer que dos personajes se presenten el uno al otro por turnos.",
      menys: "Fer la presentació mínima: entrar, tres frases i un canvi de fons, copiant l'estructura dels trossos de la Guida. Fer servir les frases que ofereix l'app i completar-les en veu alta.|Hacer la presentación mínima: entrar, tres frases y un cambio de fondo, copiando la estructura de los trozos de Guida. Usar las frases que ofrece la app y completarlas en voz alta."
    },
    aval: {
      ticket: ["Quins són els quatre passos d'un projecte?|¿Cuáles son los cuatro pasos de un proyecto?",
        "Digues una dada que es pot posar en una presentació i una que no.|Di un dato que se puede poner en una presentación y uno que no."],
      rubric: [
        ["Pla|Plan", "Omple el pla complet i el segueix en programar.|Rellena el plan completo y lo sigue al programar.", "Fa el pla però programa sense mirar-lo.|Hace el plan pero programa sin mirarlo."],
        ["Projecte programat|Proyecto programado", "La presentació té nom, gustos, lloc preferit (fons) i moviment, i es llegeix bé.|La presentación tiene nombre, gustos, sitio favorito (fondo) y movimiento, y se lee bien.", "Té algunes parts, però falta el fons o alguna frase no es llegeix.|Tiene algunas partes, pero falta el fondo o alguna frase no se lee."],
        ["Dades i comentaris|Datos y comentarios", "No posa dades privades i dona comentaris amables i útils.|No pone datos privados y da comentarios amables y útiles.", "Necessita que li recordin què és privat o dona comentaris poc concrets.|Necesita que le recuerden qué es privado o da comentarios poco concretos."]
      ]
    },
    casa: "A casa, ensenyeu la presentació a la família des del mòbil (és a «Projectes»). Demaneu-los dues coses que els hagin agradat i una idea per millorar-la.|En casa, enseñad la presentación a la familia desde el móvil (está en «Proyectos»). Pedidles dos cosas que les hayan gustado y una idea para mejorarla.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: presenta't|Proyecto: preséntate", x: "L'estrena del Teatre de l'illa: un personatge que parla de tu.|El estreno del Teatro de la isla: un personaje que habla de ti.",
        nota: "Crea expectació: al final hi haurà una estrena amb aplaudiments.|Crea expectación: al final habrá un estreno con aplausos." },
      { id: 's2', k: 'concepte', t: "Els passos d'un projecte|Los pasos de un proyecto", punts: ["1. Pensar el pla|1. Pensar el plan", "2. Programar-lo a trossos|2. Programarlo a trozos", "3. Provar-lo|3. Probarlo", "4. Millorar-lo|4. Mejorarlo"],
        nota: "Deixa-ho escrit a la pissarra: hi tornareu al final.|Déjalo escrito en la pizarra: volveréis a ello al final." },
      { id: 's3', k: 'repas', t: "Què sabem fer?|¿Qué sabemos hacer?", blocks: [{ t: "mou-te|muévete", c: 'mov' }, { t: "gira / apunta|gira / apunta", c: 'mov' }, { t: "digues / pensa|di / piensa", c: 'art' }, { t: "canvia el fons|cambia el fondo", c: 'art' }, { t: "amaga't|escóndete", c: 'art' }],
        nota: "Que diguin per a què serveix cada bloc en una presentació.|Que digan para qué sirve cada bloque en una presentación." },
      { id: 's4', k: 'media', t: "La presentació de la Tuga|La presentación de Tuga", x: "Entra, diu el nom i què li agrada, canvia el fons i se'n va.|Entra, dice su nombre y qué le gusta, cambia el fondo y se va.",
        media: { k: 'stage', w: T([{ id: 'tuga', art: 'tuga', x: -170, y: -95 }], { bgs: ['escenari', 'platja'] }), prog: `@tuga flag{ move:170 say:"Hola! Em dic Tuga.|¡Hola! Me llamo Tuga.",2 say:"M'agrada nedar a poc a poc.|Me gusta nadar despacito.",2 bg:platja say:"El meu lloc preferit és la platja!|¡Mi sitio favorito es la playa!",2 point:-90 move:170 hide }`, time: 9 },
        nota: "Escriu a la pissarra els trossos que identifiquen: entrada, nom, gustos, lloc, comiat.|Escribe en la pizarra los trozos que identifican: entrada, nombre, gustos, sitio, despedida." },
      { id: 's5', k: 'anim', t: "Primer, el pla|Primero, el plan", anim: 'g1plan', x: "El meu nom, què m'agrada i el meu lloc preferit. Mai l'adreça ni el telèfon.|Mi nombre, lo que me gusta y mi sitio favorito. Nunca la dirección ni el teléfono.",
        nota: "Pregunta per què no posem dades privades en un projecte que veuran altres persones.|Pregunta por qué no ponemos datos privados en un proyecto que verán otras personas." },
      { id: 's6', k: 'media', t: "Prova-ho com si fossis el públic|Pruébalo como si fueras el público", x: "Es llegeixen totes les frases?|¿Se leen todas las frases?",
        media: { k: 'stage', w: T([{ id: 'guida', art: 'guida', x: 0, y: -95 }]), prog: '@guida flag{ say:"Hola!|¡Hola!" say:"Em dic Guida.|Me llamo Guida.",2 say:"M\'agrada córrer.|Me gusta correr.",2 }', time: 5 },
        nota: "El primer «Hola!» no té segons i no es veu. Pregunta com ho arreglarien.|El primer «¡Hola!» no tiene segundos y no se ve. Pregunta cómo lo arreglarían." },
      { id: 's7', k: 'activitat', t: "El meu pla|Mi plan", timer: 10, punts: ["Nom de pila i què t'agrada fer.|Nombre de pila y qué te gusta hacer.", "El teu lloc preferit: quin fons?|Tu sitio favorito: ¿qué fondo?", "Quin personatge i com entra i surt.|Qué personaje y cómo entra y sale.", "Revisa el pla del company/a: res de dades privades!|Revisa el plan del compañero/a: ¡nada de datos privados!"],
        nota: "Passeja i comprova que ningú escriu adreces, telèfons ni cognoms.|Pasea y comprueba que nadie escribe direcciones, teléfonos ni apellidos." },
      { id: 's8', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre «Projecte: presenta't».|Abre «Proyecto: preséntate».", "A «El meu pla», toca «Ho hem fet!».|En «Mi plan», toca «¡Lo hemos hecho!».", "Fes els tres trossos de la Guida i prova cada tros.|Haz los tres trozos de Guida y prueba cada trozo."],
        nota: "Remarca que cada repte continua el guió de l'anterior: així es construeix a trossos.|Remarca que cada reto continúa el guion del anterior: así se construye a trozos." },
      { id: 's9', k: 'media', t: "Tros a tros|Trozo a trozo", x: "La presentació de la Guida, acabada.|La presentación de Guida, terminada.",
        media: { k: 'stage', w: T([{ id: 'guida', art: 'guida', x: -180, y: -95 }], { bgs: ['escenari', 'bosc'] }), prog: `@guida flag{ move:180 say:"Hola! Em dic Guida.|¡Hola! Me llamo Guida.",2 say:"M'agrada córrer pel bosc.|Me gusta correr por el bosque.",2 bg:bosc point:-90 move:150 hide }`, time: 7 },
        nota: "Assenyala on acaba cada tros (entrada i nom · gustos i fons · comiat).|Señala dónde termina cada trozo (entrada y nombre · gustos y fondo · despedida)." },
      { id: 's10', k: 'repte', t: "Els tres trossos|Los tres trozos", timer: 10, punts: ["1. Entra i diu el nom|1. Entra y dice el nombre", "2. Què li agrada i el fons|2. Qué le gusta y el fondo", "3. Es gira, se'n va i s'amaga|3. Se gira, se va y se esconde"],
        nota: "Si algú s'encalla, que digui en veu alta quin tros li falta.|Si alguien se atasca, que diga en voz alta qué trozo le falta." },
      { id: 's11', k: 'activitat', t: "Crea: presenta't!|Crea: ¡preséntate!", timer: 15, punts: ["Tria el teu personatge a la llista.|Elige tu personaje en la lista.", "Segueix el pla, tros a tros.|Sigue el plan, trozo a trozo.", "Prova-ho després de cada tros.|Pruébalo después de cada trozo.", "Quan funcioni, desa-ho.|Cuando funcione, guárdalo."],
        nota: "Passeja i pregunta: en quin tros del pla ets? Què provaràs ara?|Pasea y pregunta: ¿en qué trozo del plan estás? ¿Qué probarás ahora?" },
      { id: 's12', k: 'concepte', t: "Els criteris del projecte|Los criterios del proyecto", punts: ["Diu el teu nom (només el de pila).|Dice tu nombre (solo el de pila).", "Diu què t'agrada fer.|Dice lo que te gusta hacer.", "Canvia el fons al teu lloc preferit.|Cambia el fondo a tu sitio favorito.", "Es mou o gira almenys una vegada.|Se mueve o gira al menos una vez."],
        nota: "Deixa-la projectada durant el «Crea» com a llista de comprovació.|Déjala proyectada durante el «Crea» como lista de comprobación." },
      { id: 's13', k: 'activitat', t: "L'estrena|El estreno", timer: 6, x: "Voluntaris a la pantalla gran. El públic aplaudeix al final!|Voluntarios en la pantalla grande. ¡El público aplaude al final!",
        nota: "Ningú no està obligat a sortir: també es pot passejar per les taules.|Nadie está obligado a salir: también se puede pasear por las mesas." },
      { id: 's14', k: 'activitat', t: "Dues estrelles i un desig|Dos estrellas y un deseo", punts: ["⭐ Una cosa que m'ha agradat…|⭐ Una cosa que me ha gustado…", "⭐ Una altra cosa que m'ha agradat…|⭐ Otra cosa que me ha gustado…", "💡 Una idea per millorar-ho…|💡 Una idea para mejorarlo…"],
        nota: "Modela un exemple de comentari amable i concret abans que escriguin.|Modela un ejemplo de comentario amable y concreto antes de que escriban." },
      { id: 's15', k: 'resum', t: "Què hem après en aquest projecte|Qué hemos aprendido en este proyecto", punts: ["Pla → programar → provar → millorar.|Plan → programar → probar → mejorar.", "Es construeix a trossos i es prova cada tros.|Se construye a trozos y se prueba cada trozo.", "Les dades privades no es comparteixen.|Los datos privados no se comparten."],
        nota: "Torna als quatre passos de la pissarra i marqueu-los com a fets.|Vuelve a los cuatro pasos de la pizarra y marcadlos como hechos." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Els quatre passos d'un projecte.|Los cuatro pasos de un proyecto.", "Una dada que es pot dir i una que no.|Un dato que se puede decir y uno que no."],
        nota: "Anota qui ha acabat el projecte i qui l'haurà d'acabar a casa.|Anota quién ha terminado el proyecto y quién tendrá que terminarlo en casa." },
      { id: 's17', k: 'resum', t: "Unitat 1 acabada!|¡Unidad 1 terminada!", punts: ["Personatges i escenari|Personajes y escenario", "Moure, girar i parlar|Mover, girar y hablar", "Fons i escenes|Fondos y escenas", "Pròxima unitat: animació!|Próxima unidad: ¡animación!"],
        nota: "Felicita el grup i anuncia que a la unitat 2 els personatges es mouran sols, amb vestits i bucles.|Felicita al grupo y anuncia que en la unidad 2 los personajes se moverán solos, con disfraces y bucles." }
    ],
    print: [
      { id: 'p1', t: "El meu pla|Mi plan", k: 'fitxa',
        intro: "Omple el pla abans de programar. Recorda: només el nom de pila, res d'adreces, telèfons ni escola.|Rellena el plan antes de programar. Recuerda: solo el nombre de pila, nada de direcciones, teléfonos ni colegio.",
        items: [
          { q: "Com em dic? (només el nom de pila)|¿Cómo me llamo? (solo el nombre de pila)", sol: "Resposta oberta: el nom de pila.|Respuesta abierta: el nombre de pila." },
          { q: "Què m'agrada fer?|¿Qué me gusta hacer?", sol: "Resposta oberta: una afició o activitat.|Respuesta abierta: una afición o actividad." },
          { q: "El meu lloc preferit (bosc, platja, espai, ciutat, parc o nit):|Mi sitio favorito (bosque, playa, espacio, ciudad, parque o noche):", sol: "Un dels fons de l'app.|Uno de los fondos de la app." },
          { q: "Quin personatge triaré? Com entrarà i com se n'anirà?|¿Qué personaje elegiré? ¿Cómo entrará y cómo se irá?", big: true, sol: "Exemple: la Flama entra amb «mou-te 100», es gira amb «apunta en direcció -90» i s'amaga.|Ejemplo: Flama entra con «muévete 100», se gira con «apunta en dirección -90» y se esconde." },
          { q: "Revisió del company/a: hi ha alguna dada privada? Sí / No|Revisión del compañero/a: ¿hay algún dato privado? Sí / No", sol: "Ha de ser «No».|Tiene que ser «No»." }
        ] },
      { id: 'p2', t: "Dues estrelles i un desig|Dos estrellas y un deseo", k: 'targetes',
        intro: "Una targeta per alumne/a: escriu dues coses que t'han agradat de la presentació del company/a i una idea per millorar-la.|Una tarjeta por alumno/a: escribe dos cosas que te han gustado de la presentación del compañero/a y una idea para mejorarla.",
        items: [
          { t: "M'ha agradat… ⭐|Me ha gustado… ⭐", n: 6 },
          { t: "També m'ha agradat… ⭐|También me ha gustado… ⭐", n: 3 },
          { t: "Una idea per millorar… 💡|Una idea para mejorar… 💡", n: 3 }
        ] }
    ]
  }
  };
})());

/* ── unitat 2 ── */
/* ===== Numi Tech · guia del professorat · Tech Creadors · unitat 2 «Animació» (g2-1 … g2-4) =====
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1'].
   Les diapositives «media» mostren l'escenari de Creadors en marxa (TMEDIA.stage: { k: 'stage', w, prog, time }). */
Object.assign(TGUIDE, {

  /* ---------- Sessió 1 · Dibuixos que es mouen ---------- */
  'g2-1': {
    obj: [
      "L'alumne/a explica que una animació és una sèrie de dibuixos que canvien de pressa.|El alumno/a explica que una animación es una serie de dibujos que cambian deprisa.",
      "L'alumne/a fa servir «vestit següent» i «posa el vestit» per canviar el dibuix d'un personatge.|El alumno/a usa «disfraz siguiente» y «pon el disfraz» para cambiar el dibujo de un personaje.",
      "L'alumne/a posa esperes entre els canvis de vestit i explica per què calen.|El alumno/a pone esperas entre los cambios de disfraz y explica por qué hacen falta.",
      "L'alumne/a crea una petita animació amb un personatge que parla i canvia de cara.|El alumno/a crea una pequeña animación con un personaje que habla y cambia de cara."
    ],
    comp: [
      "Competència digital (CD5): crear continguts digitals senzills amb programació per blocs|Competencia digital (CD5): crear contenidos digitales sencillos con programación por bloques",
      "Pensament computacional: seqüència d'instruccions, estats d'un objecte (vestits) i temps|Pensamiento computacional: secuencia de instrucciones, estados de un objeto (disfraces) y tiempo",
      "Educació artística: el moviment a la imatge, el llibret animat i el cinema d'animació|Educación artística: el movimiento en la imagen, la libreta animada y el cine de animación",
      "Matemàtiques: mesura del temps en segons i nombres decimals senzills (0,5 segons)|Matemáticas: medida del tiempo en segundos y números decimales sencillos (0,5 segundos)"
    ],
    vocab: [
      ["Animació|Animación", "Dibuixos que es mostren un darrere l'altre tan de pressa que sembla que es mouen.|Dibujos que se muestran uno tras otro tan deprisa que parece que se mueven."],
      ["Vestit (disfressa)|Disfraz", "Un dels dibuixos d'un personatge. Cada vestit té un número.|Uno de los dibujos de un personaje. Cada disfraz tiene un número."],
      ["Vestit següent|Disfraz siguiente", "El bloc que canvia el dibuix pel que ve després; de l'últim torna al primer.|El bloque que cambia el dibujo por el que viene después; del último vuelve al primero."],
      ["Posa el vestit…|Pon el disfraz…", "El bloc que tria un vestit concret pel seu número.|El bloque que elige un disfraz concreto por su número."],
      ["Espera|Espera", "El bloc que atura el guió uns segons abans de continuar.|El bloque que para el guion unos segundos antes de continuar."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Dibuixos que es mouen»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Dibujos que se mueven»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un rellotge o cronòmetre visible per a tota la classe (pot ser el del projector)|Un reloj o cronómetro visible para toda la clase (puede ser el del proyector)",
        "Opcional: un llibret animat de paper fet per tu, per ensenyar-lo al principi|Opcional: una libreta animada de papel hecha por ti, para enseñarla al principio"
      ],
      imprimir: ["Cartes de l'animació humana|Cartas de la animación humana", "Fitxa: vestits i esperes|Ficha: disfraces y esperas"],
      prep: [
        "Imprimir i retallar un paquet de cartes per grup de 4. Si es plastifiquen, serveixen també per a la sessió 2.|Imprimir y recortar un paquete de cartas por grupo de 4. Si se plastifican, sirven también para la sesión 2.",
        "Fer un llibret animat de 8 pàgines (una pilota que bota) per ensenyar-lo a la pregunta inicial.|Hacer una libreta animada de 8 páginas (una pelota que bota) para enseñarla en la pregunta inicial.",
        "Provar abans les demostracions de les diapositives 7, 8 i 13 per saber què es veurà.|Probar antes las demostraciones de las diapositivas 7, 8 y 13 para saber qué se verá.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: dibuixos quiets|Bienvenida: dibujos quietos", fase: 'inici',
        fa: "Presenta la missió de la unitat: l'aquari del moll necessita una pantalla amb animals que es moguin. Ensenya el llibret animat: primer passa les pàgines a poc a poc i després de pressa. Pregunta què ha canviat i recull respostes sense corregir-les.|Presenta la misión de la unidad: el acuario del muelle necesita una pantalla con animales que se muevan. Enseña la libreta animada: primero pasa las páginas despacio y después deprisa. Pregunta qué ha cambiado y recoge respuestas sin corregirlas.",
        diu: ["Aquests dibuixos estan quiets. Com podem fer que es moguin?|Estos dibujos están quietos. ¿Cómo podemos hacer que se muevan?",
          "Mireu el llibret a poc a poc… i ara de pressa. Què veieu ara?|Mirad la libreta despacio… y ahora deprisa. ¿Qué veis ahora?",
          "Avui aprendrem el secret dels dibuixos animats.|Hoy aprenderemos el secreto de los dibujos animados."],
        slides: ['s1', 's2', 's3', 's4'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Vestits i esperes|Disfraces y esperas", fase: 'teoria',
        fa: "Explica amb l'animació del llibret que un dibuix animat són molts dibuixos que canvien de pressa. Presenta els vestits d'un personatge i els blocs «vestit següent» i «posa el vestit». Amb la demo de la mascota, demana que diguin el número de vestit abans que canviï. Acaba amb la diapositiva «Compte!»: sense espera no es veu res.|Explica con la animación de la libreta que un dibujo animado son muchos dibujos que cambian deprisa. Presenta los disfraces de un personaje y los bloques «disfraz siguiente» y «pon el disfraz». Con la demo de la mascota, pide que digan el número de disfraz antes de que cambie. Termina con la diapositiva «¡Cuidado!»: sin espera no se ve nada.",
        diu: ["Quants vestits té el peix? I la mascota?|¿Cuántos disfraces tiene el pez? ¿Y la mascota?",
          "Si el peix porta l'últim vestit i fa «vestit següent», quin vestit es posa?|Si el pez lleva el último disfraz y hace «disfraz siguiente», ¿qué disfraz se pone?",
          "Per què creieu que cal l'espera? Què passaria sense?|¿Por qué creéis que hace falta la espera? ¿Qué pasaría sin ella?"],
        slides: ['s5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "L'animació humana|La animación humana", fase: 'desconnectat',
        fa: "Fes grups de 4 amb quatre papers: actor/actriu (el personatge), programador/a, director/a i revisor/a. L'actor/actriu té les 4 cartes de vestit (poses). El programador/a fa un guió amb les cartes de blocs; el director/a el llegeix en veu alta i compta els segons de cada espera; el revisor/a comprova que la pose és la que toca. Primer, un guió amb esperes. Després, el mateix guió sense cap espera: el director/a ha de llegir-lo tan de pressa com pugui. Roten els papers a cada guió.|Haz grupos de 4 con cuatro papeles: actor/actriz (el personaje), programador/a, director/a y revisor/a. El actor/actriz tiene las 4 cartas de disfraz (poses). El programador/a hace un guion con las cartas de bloques; el director/a lo lee en voz alta y cuenta los segundos de cada espera; el revisor/a comprueba que la pose es la que toca. Primero, un guion con esperas. Después, el mismo guion sin ninguna espera: el director/a tiene que leerlo tan deprisa como pueda. Rotan los papeles en cada guion.",
        diu: ["L'actor/actriu només canvia de pose quan el guió ho diu.|El actor/actriz solo cambia de pose cuando el guion lo dice.",
          "Sense esperes, us ha donat temps de veure cada pose?|Sin esperas, ¿os ha dado tiempo de ver cada pose?",
          "«Vestit següent» després del vestit 4: quin toca?|«Disfraz siguiente» después del disfraz 4: ¿cuál toca?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 amb papers que roten|Grupos de 4 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança al seu ritme fins a la pausa activa. Al pas «El llibret animat», que toquin «Ho hem fet!» si el fan a casa o el deixin per a casa. Passeja i fixa't en la pregunta del gat: si algú respon «vestit 3», demana-li quants vestits té el gat. A «Investiga», que llegeixin els números de cada «posa el vestit» en veu baixa.|Cada alumno/a abre la sesión y avanza a su ritmo hasta la pausa activa. En el paso «La libreta animada», que toquen «¡Lo hemos hecho!» si lo hacen en casa o lo dejen para casa. Pasea y fíjate en la pregunta del gato: si alguien responde «disfraz 3», pregúntale cuántos disfraces tiene el gato. En «Investiga», que lean los números de cada «pon el disfraz» en voz baja.",
        diu: ["Compta amb el dit: 1, 2, 1, 2… On t'atures?|Cuenta con el dedo: 1, 2, 1, 2… ¿Dónde te paras?",
          "Llegeix els vestits del peix en veu baixa: quin és el que no canvia res?|Lee los disfraces del pez en voz baja: ¿cuál es el que no cambia nada?"],
        slides: ['s12'], app: "Recorda, les dues històries de l'aquari, les cinc targetes de «Descobreix», ordenar els blocs de la mascota, «El llibret animat», la pregunta del gat i «Investiga» (el vestit que no canvia).|Recuerda, las dos historias del acuario, las cinco tarjetas de «Descubre», ordenar los bloques de la mascota, «La libreta animada», la pregunta del gato e «Investiga» (el disfraz que no cambia).", org: "Individual|Individual" },
      { min: 10, t: "Reptes: el peix, la mascota, la papallona i el cotxe|Retos: el pez, la mascota, la mariposa y el coche", fase: 'ordinador',
        fa: "Fes la pausa activa tots junts. Després programa amb la classe el peix de la diapositiva 13, demanant un bloc a cada alumne/a. Deixa'ls fer els quatre reptes. Al repte de la papallona, no diguis on és l'error: pregunta quin número té cada «posa el vestit».|Haced la pausa activa todos juntos. Después programa con la clase el pez de la diapositiva 13, pidiendo un bloque a cada alumno/a. Déjalos hacer los cuatro retos. En el reto de la mariposa, no digas dónde está el error: pregunta qué número tiene cada «pon el disfraz».",
        diu: ["Quin bloc va primer? I després, què cal perquè es vegi?|¿Qué bloque va primero? ¿Y después, qué hace falta para que se vea?",
          "Si sempre poses el vestit 1, el dibuix canvia?|Si siempre pones el disfraz 1, ¿el dibujo cambia?",
          "Al cotxe, quants blocs t'han calgut? La setmana vinent en farem servir molts menys!|En el coche, ¿cuántos bloques te han hecho falta? ¡La semana que viene usaremos muchos menos!"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre «Reptes»: el peix que mou la cua, la mascota que té son, la papallona que no es mou i el cotxe que arrenca.|«Pausa activa» y los cuatro «Retos»: el pez que mueve la cola, la mascota que tiene sueño, la mariposa que no se mueve y el coche que arranca.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la meva primera animació|Crea: mi primera animación", fase: 'crea',
        fa: "Cada alumne/a fa la seva animació d'en Numi al teatre. Quan la tinguin, en parelles s'ensenyen l'animació i el company/a ha d'endevinar quin vestit vindrà després abans de veure'l.|Cada alumno/a hace su animación de Numi en el teatro. Cuando la tengan, por parejas se enseñan la animación y el compañero/a tiene que adivinar qué disfraz vendrá después antes de verlo.",
        diu: ["Inventa una petita història: què diu en Numi i quina cara fa?|Inventa una pequeña historia: ¿qué dice Numi y qué cara pone?",
          "Endevina quin vestit ve ara!|¡Adivina qué disfraz viene ahora!"],
        slides: ['s15'], app: "Pas «Crea»: La meva primera animació (es desa al portafoli).|Paso «Crea»: Mi primera animación (se guarda en el portafolio).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una de les preguntes del tiquet.|Repasa las tres ideas de la sesión con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una de las preguntas del ticket.",
        diu: ["Qui em diu el secret dels dibuixos animats?|¿Quién me dice el secreto de los dibujos animados?",
          "Per què posem una espera entre dos vestits?|¿Por qué ponemos una espera entre dos disfraces?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa tots els «vestit següent» seguits i diu que «no fa res».|Pone todos los «disfraz siguiente» seguidos y dice que «no hace nada».",
        "Pregunta-li quant de temps creu que dura cada vestit a la pantalla. Que pensi què li va faltar al director/a de l'animació humana quan llegia molt de pressa.|Pregúntale cuánto tiempo cree que dura cada disfraz en la pantalla. Que piense qué le faltó al director/a de la animación humana cuando leía muy deprisa."],
      ["Repeteix «posa el vestit 1» i espera que el personatge canviï.|Repite «pon el disfraz 1» y espera que el personaje cambie.",
        "Demana-li que llegeixi en veu alta el número de cada bloc. Si el personatge ja porta el vestit 1, què canvia?|Pídele que lea en voz alta el número de cada bloque. Si el personaje ya lleva el disfraz 1, ¿qué cambia?"],
      ["Creu que després de l'últim vestit hi ha un vestit «nou» (el 3 d'un personatge que en té 2).|Cree que después del último disfraz hay un disfraz «nuevo» (el 3 de un personaje que tiene 2).",
        "Fes que compti amb els dits els vestits del personatge i que torni al primer dit quan s'acabin, com en un cercle.|Haz que cuente con los dedos los disfraces del personaje y que vuelva al primer dedo cuando se acaben, como en un círculo."],
      ["Posa esperes molt llargues (5 o 10 segons) i la prova s'acaba abans que es vegi l'animació.|Pone esperas muy largas (5 o 10 segundos) y la prueba se acaba antes de que se vea la animación.",
        "Pregunta-li quant dura la prova i quantes esperes té. Que provi amb 0,5 segons i compari.|Pregúntale cuánto dura la prueba y cuántas esperas tiene. Que pruebe con 0,5 segundos y compare."],
      ["Programa el personatge que no toca o no troba on van els blocs nous.|Programa el personaje que no toca o no encuentra dónde van los bloques nuevos.",
        "Mostra-li la franja «els blocs nous van aquí»: és on s'enganxarà el bloc que toqui a la paleta.|Muéstrale la franja «los bloques nuevos van aquí»: es donde se enganchará el bloque que toque en la paleta."]
    ],
    diff: {
      mes: "Fer una animació d'en Numi amb els 4 vestits i esperes de llargades diferents per explicar una petita història (content, pensant, trist, content). Després, provar quina és l'espera més curta amb què encara es veu cada vestit.|Hacer una animación de Numi con los 4 disfraces y esperas de duraciones diferentes para contar una pequeña historia (contento, pensando, triste, contento). Después, probar cuál es la espera más corta con la que todavía se ve cada disfraz.",
      menys: "Tenir a la taula les cartes de l'animació humana i muntar primer el guió amb cartes; després copiar-lo a l'app bloc a bloc. Començar pel repte del peix, amb parelles «vestit següent + espera».|Tener en la mesa las cartas de la animación humana y montar primero el guion con cartas; después copiarlo en la app bloque a bloque. Empezar por el reto del pez, con parejas «disfraz siguiente + espera»."
    },
    aval: {
      ticket: ["Explica amb les teves paraules què és un dibuix animat.|Explica con tus palabras qué es un dibujo animado.",
        "Què passa si poses tres «vestit següent» seguits, sense esperes?|¿Qué pasa si pones tres «disfraz siguiente» seguidos, sin esperas?"],
      rubric: [
        ["Concepte d'animació|Concepto de animación", "Explica que són dibuixos que canvien de pressa i en dona un exemple (llibret, dibuixos animats).|Explica que son dibujos que cambian deprisa y da un ejemplo (libreta, dibujos animados).", "Sap que els dibuixos «es mouen», però encara no explica per què.|Sabe que los dibujos «se mueven», pero todavía no explica por qué."],
        ["Vestits|Disfraces", "Fa servir «vestit següent» i «posa el vestit» i preveu quin vestit vindrà després.|Usa «disfraz siguiente» y «pon el disfraz» y prevé qué disfraz vendrá después.", "Canvia vestits, però de vegades repeteix el mateix número o s'oblida que es torna al primer.|Cambia disfraces, pero a veces repite el mismo número o se olvida de que se vuelve al primero."],
        ["Temps i espera|Tiempo y espera", "Posa esperes entre els canvis i en tria la durada perquè l'animació es vegi bé.|Pone esperas entre los cambios y elige su duración para que la animación se vea bien.", "Necessita l'ajuda de la pista per recordar l'espera.|Necesita la ayuda de la pista para recordar la espera."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «El llibret animat»: una pilota que bota en 8 papers petits. Passeu les pàgines a poc a poc i després de pressa, i compteu quants «vestits» té la vostra animació.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «La libreta animada»: una pelota que bota en 8 papeles pequeños. Pasad las páginas despacio y después deprisa, y contad cuántos «disfraces» tiene vuestra animación.",
    slides: [
      { id: 's1', k: 'portada', t: 'Dibuixos que es mouen|Dibujos que se mueven', x: "Avui descobrirem el secret dels dibuixos animats per fer la pantalla de l'aquari.|Hoy descubriremos el secreto de los dibujos animados para hacer la pantalla del acuario.",
        nota: "Presenta l'objectiu: al final de la classe, tothom haurà fet la seva primera animació.|Presenta el objetivo: al final de la clase, todos habrán hecho su primera animación." },
      { id: 's2', k: 'pregunta', t: 'Com es mou un dibuix?|¿Cómo se mueve un dibujo?', x: "Un dibuix en un paper no es mou. Com ho fan, doncs, els dibuixos animats?|Un dibujo en un papel no se mueve. ¿Cómo lo hacen, entonces, los dibujos animados?",
        nota: "Ensenya el llibret animat a poc a poc i de pressa. Recull hipòtesis sense corregir-les: hi tornarem a la diapositiva 5.|Enseña la libreta animada despacio y deprisa. Recoge hipótesis sin corregirlas: volveremos a ello en la diapositiva 5." },
      { id: 's3', k: 'repas', t: "Recordem l'escenari|Recordemos el escenario", punts: ["El (0, 0) és al centre de l'escenari.|El (0, 0) está en el centro del escenario.", "«Quan comença» posa en marxa el guió amb la bandera verda.|«Al empezar» pone en marcha el guion con la bandera verde.", "«Digues» fa parlar un personatge.|«Di» hace hablar a un personaje."],
        nota: "Fes les preguntes en veu alta i demana que responguin amb el dit: on és el centre a la pissarra?|Haz las preguntas en voz alta y pide que respondan con el dedo: ¿dónde está el centro en la pizarra?" },
      { id: 's4', k: 'concepte', t: "La missió: l'aquari del moll|La misión: el acuario del muelle", punts: ["Al moll obriran un aquari nou.|En el muelle abrirán un acuario nuevo.", "La Marina, la guarda, vol una pantalla amb animals que es moguin.|Marina, la guardiana, quiere una pantalla con animales que se muevan.", "Durant 4 sessions la farem entre tots.|Durante 4 sesiones la haremos entre todos."],
        nota: "Explica que aquesta és la història de tota la unitat i que a la sessió 4 cadascú farà el seu aquari.|Explica que esta es la historia de toda la unidad y que en la sesión 4 cada uno hará su acuario." },
      { id: 's5', k: 'anim', t: "El secret: molts dibuixos ràpids|El secreto: muchos dibujos rápidos", anim: 'g2flip', x: "Dibuixos gairebé iguals, un darrere l'altre, molt de pressa.|Dibujos casi iguales, uno tras otro, muy deprisa.",
        nota: "Torna a les hipòtesis de la diapositiva 2. Comenta que el cinema mostra 24 imatges cada segon.|Vuelve a las hipótesis de la diapositiva 2. Comenta que el cine muestra 24 imágenes cada segundo." },
      { id: 's6', k: 'anim', t: 'Els vestits d’un personatge|Los disfraces de un personaje', anim: 'g2cost', x: "Cada dibuix és un vestit. «Vestit següent» passa al que ve després; de l'últim torna al primer.|Cada dibujo es un disfraz. «Disfraz siguiente» pasa al que viene después; del último vuelve al primero.",
        nota: "Fes notar la fletxa que torna enrere: els vestits fan un cercle.|Haz notar la flecha que vuelve atrás: los disfraces hacen un círculo." },
      { id: 's7', k: 'media', t: '«Posa el vestit…» tria un número|«Pon el disfraz…» elige un número', x: 'La mascota: 1 contenta, 2 té gana, 3 dorm.|La mascota: 1 contenta, 2 tiene hambre, 3 duerme.',
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'mascota', art: 'mascota', x: 0, y: -20, size: 140, rot: 'none' }] }, prog: '@mascota flag{ costume:1 say:"Bon dia!|¡Buenos días!",1.5 costume:2 say:"Tinc gana…|Tengo hambre…",1.5 costume:3 say:"Zzz…|Zzz…",1.5 }', time: 6 },
        nota: "Abans de cada canvi, demana a la classe quin número de vestit vindrà.|Antes de cada cambio, pide a la clase qué número de disfraz vendrá." },
      { id: 's8', k: 'media', t: 'El bloc «espera»|El bloque «espera»', x: "La medusa canvia de vestit cada segon.|La medusa cambia de disfraz cada segundo.",
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'medusa', art: 'medusa', x: 0, y: 0, size: 160, rot: 'none' }] }, prog: '@medusa flag{ next wait:1 next wait:1 next wait:1 next wait:1 next }', time: 5 },
        nota: "Compteu en veu alta els segons junts: «un… canvi!». Pregunta què passaria amb una espera de 0,2 segons.|Contad en voz alta los segundos juntos: «uno… ¡cambio!». Pregunta qué pasaría con una espera de 0,2 segundos." },
      { id: 's9', k: 'anim', t: 'Compte! Sense espera no es veu|¡Cuidado! Sin espera no se ve', anim: 'g2wait', x: "L'ordinador va tan de pressa que els canvis sense espera no es veuen.|El ordenador va tan deprisa que los cambios sin espera no se ven.",
        nota: "Aquest és l'error més freqüent de la sessió: recorda'l quan vegis algú que diu que el seu programa «no fa res».|Este es el error más frecuente de la sesión: recuérdalo cuando veas a alguien que dice que su programa «no hace nada»." },
      { id: 's10', k: 'activitat', t: "L'animació humana|La animación humana", timer: 12, punts: ["Actor/actriu: fa la pose de cada vestit.|Actor/actriz: hace la pose de cada disfraz.", "Programador/a: munta el guió amb les cartes.|Programador/a: monta el guion con las cartas.", "Director/a: llegeix el guió i compta els segons.|Director/a: lee el guion y cuenta los segundos.", "Revisor/a: comprova cada pose.|Revisor/a: comprueba cada pose."],
        nota: "Feu primer un guió amb esperes i després el mateix sense esperes, llegit molt de pressa. Pregunta què s'ha vist.|Haced primero un guion con esperas y después el mismo sin esperas, leído muy deprisa. Pregunta qué se ha visto." },
      { id: 's11', k: 'activitat', t: 'Les poses (vestits)|Las poses (disfraces)', punts: ["Vestit 1: braços avall.|Disfraz 1: brazos abajo.", "Vestit 2: braços amunt.|Disfraz 2: brazos arriba.", "Vestit 3: mà al cap, pensant.|Disfraz 3: mano en la cabeza, pensando.", "Vestit 4: ajupit, dormint.|Disfraz 4: agachado, durmiendo."],
        nota: "Deixa aquesta diapositiva projectada durant l'activitat perquè tothom recordi les poses.|Deja esta diapositiva proyectada durante la actividad para que todos recuerden las poses." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Dibuixos que es mouen».|Abre la sesión «Dibujos que se mueven».", "Fes «Descobreix» i «Mans a l'obra».|Haz «Descubre» y «Manos a la obra».", "A «Investiga», llegeix els números dels vestits.|En «Investiga», lee los números de los disfraces.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Si el llibret animat no es pot fer a classe, que el deixin per a casa.|Si la libreta animada no se puede hacer en clase, que la dejen para casa." },
      { id: 's13', k: 'media', t: 'Programem junts: el peix|Programemos juntos: el pez', x: "Vestit següent, espera, vestit següent, espera… Quants en calen perquè canviï 4 vegades?|Disfraz siguiente, espera, disfraz siguiente, espera… ¿Cuántos hacen falta para que cambie 4 veces?",
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: 0, y: 10, size: 150, rot: 'lr' }] }, prog: '@peix flag{ next wait:0.5 next wait:0.5 next wait:0.5 next }', time: 3 },
        nota: "Escriu a la pissarra els blocs que proposa la classe i comprova-ho amb la demo. Fes notar com es repeteix la parella: és la porta de la sessió 2.|Escribe en la pizarra los bloques que propone la clase y compruébalo con la demo. Haz notar cómo se repite la pareja: es la puerta de la sesión 2." },
      { id: 's14', k: 'repte', t: 'Reptes: animem!|Retos: ¡animemos!', timer: 10, punts: ["1. El peix mou la cua|1. El pez mueve la cola", "2. La mascota té son|2. La mascota tiene sueño", "3. La papallona que no es mou: troba l'error|3. La mariposa que no se mueve: encuentra el error", "4. El cotxe arrenca|4. El coche arranca"],
        nota: "Al repte 3, pregunta quin número té cada «posa el vestit». Al 4, fes que comptin quants blocs han necessitat.|En el reto 3, pregunta qué número tiene cada «pon el disfraz». En el 4, haz que cuenten cuántos bloques han necesitado." },
      { id: 's15', k: 'activitat', t: 'Crea: la meva primera animació|Crea: mi primera animación', timer: 5, x: "En Numi al teatre: que parli, que canviï de cara i que es vegi cada canvi.|Numi en el teatro: que hable, que cambie de cara y que se vea cada cambio.",
        nota: "Celebra que cada animació expliqui una història diferent. L'app no deixa desar-la si no hi ha cap espera.|Celebra que cada animación cuente una historia diferente. La app no deja guardarla si no hay ninguna espera." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Una animació són dibuixos que canvien de pressa.|Una animación son dibujos que cambian deprisa.", "Els vestits són els dibuixos d'un personatge.|Los disfraces son los dibujos de un personaje.", "L'espera dona temps a veure cada dibuix.|La espera da tiempo a ver cada dibujo."],
        nota: "Torna a la pregunta del principi: com es mou un dibuix? Ara ho saben explicar.|Vuelve a la pregunta del principio: ¿cómo se mueve un dibujo? Ahora lo saben explicar." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Què és un dibuix animat?|¿Qué es un dibujo animado?", "Què passa sense esperes entre els vestits?|¿Qué pasa sin esperas entre los disfraces?"],
        nota: "Fes una pregunta a cada alumne/a a la porta i anota qui necessita més suport la setmana vinent.|Haz una pregunta a cada alumno/a en la puerta y anota quién necesita más apoyo la semana que viene." }
    ],
    print: [
      { id: 'p1', t: "Cartes de l'animació humana|Cartas de la animación humana", k: 'targetes',
        intro: "Un paquet per grup de 4. Retalleu-les. Les cartes de vestit són per a l'actor/actriu; la resta, per al programador/a.|Un paquete por grupo de 4. Recortadlas. Las cartas de disfraz son para el actor/actriz; el resto, para el programador/a.",
        items: [
          { t: 'Quan comença 🚩|Al empezar 🚩', n: 2 },
          { t: 'Vestit següent 👕|Disfraz siguiente 👕', n: 6 },
          { t: 'Posa el vestit 1 1️⃣|Pon el disfraz 1 1️⃣', n: 2 },
          { t: 'Posa el vestit 2 2️⃣|Pon el disfraz 2 2️⃣', n: 2 },
          { t: 'Posa el vestit 3 3️⃣|Pon el disfraz 3 3️⃣', n: 1 },
          { t: 'Espera 1 segon ⏱️|Espera 1 segundo ⏱️', n: 6 },
          { t: 'Espera 3 segons ⏳|Espera 3 segundos ⏳', n: 2 },
          { t: 'Digues «Hola!» 💬|Di «¡Hola!» 💬', n: 2 },
          { t: 'Vestit 1: braços avall 🧍|Disfraz 1: brazos abajo 🧍', n: 1 },
          { t: 'Vestit 2: braços amunt 🙌|Disfraz 2: brazos arriba 🙌', n: 1 },
          { t: 'Vestit 3: mà al cap 🤔|Disfraz 3: mano en la cabeza 🤔', n: 1 },
          { t: 'Vestit 4: ajupit, dorm 😴|Disfraz 4: agachado, duerme 😴', n: 1 }
        ] },
      { id: 'p2', t: 'Fitxa: vestits i esperes|Ficha: disfraces y esperas', k: 'fitxa',
        intro: "Per als qui acabin abans o per fer a casa. Respon sense ordinador i després comprova-ho a l'app.|Para quien termine antes o para hacer en casa. Responde sin ordenador y después compruébalo en la app.",
        items: [
          { q: "El peix té 2 vestits i porta el vestit 1. Fa 4 vegades «vestit següent». Quin vestit porta al final?|El pez tiene 2 disfraces y lleva el disfraz 1. Hace 4 veces «disfraz siguiente». ¿Qué disfraz lleva al final?", sol: "El vestit 1: 1 → 2 → 1 → 2 → 1.|El disfraz 1: 1 → 2 → 1 → 2 → 1." },
          { q: "La mascota té 4 vestits i porta el 4. Fa «vestit següent». Quin vestit es posa?|La mascota tiene 4 disfraces y lleva el 4. Hace «disfraz siguiente». ¿Qué disfraz se pone?", sol: "El vestit 1: després de l'últim, torna al primer.|El disfraz 1: después del último, vuelve al primero." },
          { q: "Escriu un programa perquè la papallona bati les ales 3 vegades i es vegi cada canvi.|Escribe un programa para que la mariposa bata las alas 3 veces y se vea cada cambio.", sol: "Vestit següent, espera 0,5 segons, vestit següent, espera 0,5 segons, vestit següent.|Disfraz siguiente, espera 0,5 segundos, disfraz siguiente, espera 0,5 segundos, disfraz siguiente." },
          { q: "Aquest programa no es veu: «vestit següent, vestit següent, vestit següent». Per què? Com l'arreglaries?|Este programa no se ve: «disfraz siguiente, disfraz siguiente, disfraz siguiente». ¿Por qué? ¿Cómo lo arreglarías?", sol: "No té esperes i els canvis són massa ràpids. Cal posar una espera entre canvi i canvi.|No tiene esperas y los cambios son demasiado rápidos. Hay que poner una espera entre cambio y cambio." },
          { q: "Una espera de 0,5 segons, quantes vegades cap en 2 segons?|Una espera de 0,5 segundos, ¿cuántas veces cabe en 2 segundos?", sol: '4 vegades (0,5 + 0,5 + 0,5 + 0,5 = 2).|4 veces (0,5 + 0,5 + 0,5 + 0,5 = 2).' }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Bucles per sempre ---------- */
  'g2-2': {
    obj: [
      "L'alumne/a troba el patró que es repeteix en un programa i el posa dins d'un bucle «repeteix».|El alumno/a encuentra el patrón que se repite en un programa y lo pone dentro de un bucle «repite».",
      "L'alumne/a distingeix «repeteix N vegades» de «per sempre» i tria el que convé.|El alumno/a distingue «repite N veces» de «por siempre» y elige el que conviene.",
      "L'alumne/a fa servir «si toques la vora, rebota» dins d'un bucle perquè un personatge no surti de l'escenari.|El alumno/a usa «si tocas el borde, rebota» dentro de un bucle para que un personaje no salga del escenario.",
      "L'alumne/a explica per què els blocs de sota d'un «per sempre» no s'executen mai.|El alumno/a explica por qué los bloques de debajo de un «por siempre» no se ejecutan nunca."
    ],
    comp: [
      "Competència digital (CD5): programar animacions amb bucles|Competencia digital (CD5): programar animaciones con bucles",
      "Pensament computacional: patrons, repetició (bucles finits i infinits) i depuració|Pensamiento computacional: patrones, repetición (bucles finitos e infinitos) y depuración",
      "Matemàtiques: patrons, multiplicació com a suma repetida (4 vegades 10 passos)|Matemáticas: patrones, multiplicación como suma repetida (4 veces 10 pasos)",
      "Educació física: seqüències de moviment i ritme|Educación física: secuencias de movimiento y ritmo"
    ],
    vocab: [
      ["Patró|Patrón", "Un tros que es repeteix sempre igual.|Un trozo que se repite siempre igual."],
      ["Bucle|Bucle", "Un bloc que repeteix els blocs que té a dins.|Un bloque que repite los bloques que tiene dentro."],
      ["Repeteix N vegades|Repite N veces", "Bucle que fa les voltes que diu el número i després s'acaba.|Bucle que da las vueltas que dice el número y después se acaba."],
      ["Per sempre|Por siempre", "Bucle que no s'acaba mai, fins que aturem el programa.|Bucle que no se acaba nunca, hasta que paramos el programa."],
      ["Rebotar|Rebotar", "Donar la volta quan el personatge toca la vora de l'escenari.|Dar la vuelta cuando el personaje toca el borde del escenario."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Bucles per sempre»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Bucles para siempre»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un espai lliure a l'aula (o al pati) per a l'activitat del ball en bucle|Un espacio libre en el aula (o en el patio) para la actividad del baile en bucle",
        "Un objecte que faci de «botó d'aturar» (una cartolina vermella)|Un objeto que haga de «botón de parar» (una cartulina roja)"
      ],
      imprimir: ["Cartes del ball en bucle|Cartas del baile en bucle", "Fitxa: troba el patró|Ficha: encuentra el patrón"],
      prep: [
        "Imprimir i retallar un paquet de cartes del ball per grup de 4.|Imprimir y recortar un paquete de cartas del baile por grupo de 4.",
        "Apartar taules o cadires per deixar un passadís on es pugui caminar d'una paret a l'altra (per rebotar).|Apartar mesas o sillas para dejar un pasillo donde se pueda caminar de una pared a la otra (para rebotar).",
        "Provar les demostracions de les diapositives 5, 6, 8 i 13.|Probar las demostraciones de las diapositivas 5, 6, 8 y 13.",
        "Tenir a mà el programa llarg del cotxe de la sessió 1 per comparar-lo amb un bucle.|Tener a mano el programa largo del coche de la sesión 1 para compararlo con un bucle."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: mil blocs?|Bienvenida: ¿mil bloques?", fase: 'inici',
        fa: "Repassa la sessió 1 amb dues preguntes ràpides. Explica el nou encàrrec de la Marina: la pantalla ha d'estar encesa tot el dia. Pregunta quants blocs caldrien per fer que el peix mogui la cua una hora.|Repasa la sesión 1 con dos preguntas rápidas. Explica el nuevo encargo de Marina: la pantalla tiene que estar encendida todo el día. Pregunta cuántos bloques harían falta para que el pez mueva la cola una hora.",
        diu: ["Recordeu el cotxe? Quants blocs us van caldre?|¿Recordáis el coche? ¿Cuántos bloques os hicieron falta?",
          "I si el peix ha de moure la cua tot el dia?|¿Y si el pez tiene que mover la cola todo el día?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Patrons i bucles|Patrones y bucles", fase: 'teoria',
        fa: "Mostra el patró que es repeteix i com entra dins d'un «repeteix». Compara «repeteix» i «per sempre» amb les dues demos. Explica «rebota» amb l'animació: fes que un alumne/a camini fins a la paret i doni la volta. Acaba amb «Compte!»: després de «per sempre», res.|Muestra el patrón que se repite y cómo entra dentro de un «repite». Compara «repite» y «por siempre» con las dos demos. Explica «rebota» con la animación: haz que un alumno/a camine hasta la pared y dé la vuelta. Termina con «¡Cuidado!»: después de «por siempre», nada.",
        diu: ["Quin és el tros que es repeteix? Quantes vegades surt?|¿Cuál es el trozo que se repite? ¿Cuántas veces sale?",
          "Quan s'acaba «repeteix 8 vegades»? I «per sempre»?|¿Cuándo se acaba «repite 8 veces»? ¿Y «por siempre»?",
          "Si l'ocell ha de dir «Adéu» després d'un «per sempre», el dirà algun dia?|Si el pájaro tiene que decir «Adiós» después de un «por siempre», ¿lo dirá algún día?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El ball en bucle|El baile en bucle", fase: 'desconnectat',
        fa: "En grups de 4, cada grup inventa un patró de ball de 2 o 3 moviments amb les cartes i l'embolcalla amb una carta «Repeteix N vegades». Un grup el balla i la resta compta les voltes. Després canvien la carta per «Per sempre»: ballen fins que mostres la cartolina vermella d'aturar. Per acabar, un alumne/a fa «per sempre: un pas endavant, si toques la paret, rebota» pel passadís.|En grupos de 4, cada grupo inventa un patrón de baile de 2 o 3 movimientos con las cartas y lo envuelve con una carta «Repite N veces». Un grupo lo baila y el resto cuenta las vueltas. Después cambian la carta por «Por siempre»: bailan hasta que enseñas la cartulina roja de parar. Para terminar, un alumno/a hace «por siempre: un paso adelante, si tocas la pared, rebota» por el pasillo.",
        diu: ["Quin és el vostre patró? Quantes vegades el repetireu?|¿Cuál es vuestro patrón? ¿Cuántas veces lo repetiréis?",
          "Amb «per sempre», quan s'acaba el ball?|Con «por siempre», ¿cuándo se acaba el baile?",
          "Què faria el robot del passadís sense la carta «rebota»?|¿Qué haría el robot del pasillo sin la carta «rebota»?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 i després tot el grup|Grupos de 4 y después todo el grupo" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. A «Caçadors de bucles», que toquin «Ho farem a casa». Al pas del peix que neda, deixa'ls mirar una bona estona i pregunta què fa a la vora. A «Investiga», fixa't en qui toca el bucle en comptes del bloc de sota.|Cada alumno/a avanza hasta la pausa activa. En «Cazadores de bucles», que toquen «Lo haremos en casa». En el paso del pez que nada, déjalos mirar un buen rato y pregunta qué hace en el borde. En «Investiga», fíjate en quién toca el bucle en lugar del bloque de debajo.",
        diu: ["Quants passos fa en total? Suma les voltes.|¿Cuántos pasos da en total? Suma las vueltas.",
          "Aquest bloc, està a dins o a fora del bucle?|Este bloque, ¿está dentro o fuera del bucle?"],
        slides: ['s12'], app: "Recorda, les dues històries, les cinc targetes de «Descobreix», la pregunta del patró del gat, «Caçadors de bucles» (per a casa), la pregunta dels 40 passos, el peix que neda per sempre i «Investiga» (l'ocell que no diu adéu).|Recuerda, las dos historias, las cinco tarjetas de «Descubre», la pregunta del patrón del gato, «Cazadores de bucles» (para casa), la pregunta de los 40 pasos, el pez que nada por siempre e «Investiga» (el pájaro que no dice adiós).", org: "Individual|Individual" },
      { min: 10, t: "Reptes amb bucles|Retos con bucles", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Programa amb la classe el cranc de la diapositiva 13 i deixa'ls fer els reptes. Al de la medusa només hi ha 3 blocs: si algú s'encalla, recorda-li que els blocs van a dins del bucle. A l'ocell que se'n va, pregunta on és el bloc «rebota».|Haced la pausa activa juntos. Programa con la clase el cangrejo de la diapositiva 13 y deja que hagan los retos. En el de la medusa solo hay 3 bloques: si alguien se atasca, recuérdale que los bloques van dentro del bucle. En el pájaro que se va, pregunta dónde está el bloque «rebota».",
        diu: ["Toca l'espai buit de dins del bucle abans de triar el bloc.|Toca el espacio vacío de dentro del bucle antes de elegir el bloque.",
          "On és el «rebota»? Es fa a cada volta?|¿Dónde está el «rebota»? ¿Se hace en cada vuelta?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre «Reptes»: la medusa amb 3 blocs, el peix que neda sense sortir, el cranc que camina i l'ocell que se'n va.|«Pausa activa» y los cuatro «Retos»: la medusa con 3 bloques, el pez que nada sin salir, el cangrejo que camina y el pájaro que se va.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la pantalla que no para|Crea: la pantalla que no para", fase: 'crea',
        fa: "Cada alumne/a programa en Vuit, el pop, perquè nedi per sempre, reboti i canviï de cara. Que triïn ells els números de velocitat i d'espera. En parelles, comparen: quin pop va més de pressa i per què?|Cada alumno/a programa a Vuit, el pulpo, para que nade por siempre, rebote y cambie de cara. Que elijan ellos los números de velocidad y de espera. Por parejas, comparan: ¿qué pulpo va más deprisa y por qué?",
        diu: ["Quins números has triat? Què passa si els canvies?|¿Qué números has elegido? ¿Qué pasa si los cambias?",
          "El teu pop surt mai de l'escenari?|¿Tu pulpo sale alguna vez del escenario?"],
        slides: ['s15'], app: "Pas «Crea»: La pantalla que no para (es desa al portafoli).|Paso «Crea»: La pantalla que no para (se guarda en el portafolio).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Quina diferència hi ha entre «repeteix» i «per sempre»?|¿Qué diferencia hay entre «repite» y «por siempre»?",
          "On va el bloc «rebota»?|¿Dónde va el bloque «rebota»?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el bucle però deixa els blocs a sota, a fora del bucle.|Pone el bucle pero deja los bloques debajo, fuera del bucle.",
        "Demana-li que segueixi amb el dit la boca verda del bucle: quins blocs hi ha a dins? Recorda-li que primer cal tocar l'espai buit de dins.|Pídele que siga con el dedo la boca verde del bucle: ¿qué bloques hay dentro? Recuérdale que primero hay que tocar el espacio vacío de dentro."],
      ["Posa «rebota» abans o després del bucle i el personatge surt igualment.|Pone «rebota» antes o después del bucle y el personaje sale igualmente.",
        "Pregunta: quantes vegades es fa aquest bloc? Que recordi el robot del passadís: havia de mirar la paret a cada pas.|Pregunta: ¿cuántas veces se hace este bloque? Que recuerde el robot del pasillo: tenía que mirar la pared en cada paso."],
      ["Escriu blocs a sota d'un «per sempre» i no entén per què no es fan.|Escribe bloques debajo de un «por siempre» y no entiende por qué no se hacen.",
        "Pregunta-li quan s'acaba el «per sempre». Si no s'acaba mai, quan arribarà el programa al bloc de sota?|Pregúntale cuándo se acaba el «por siempre». Si no se acaba nunca, ¿cuándo llegará el programa al bloque de debajo?"],
      ["Fa servir «repeteix» amb un número petit per a una cosa que ha de durar sempre.|Usa «repite» con un número pequeño para algo que tiene que durar siempre.",
        "Que miri l'animació fins al final: què passa quan s'acaben les voltes? Quin bucle no s'acaba?|Que mire la animación hasta el final: ¿qué pasa cuando se acaban las vueltas? ¿Qué bucle no se acaba?"],
      ["Treu l'espera del bucle de vestits i diu que l'animació «s'ha espatllat».|Quita la espera del bucle de disfraces y dice que la animación «se ha estropeado».",
        "Recorda-li la diapositiva «Compte!» de la sessió 1: sense espera, els canvis no es veuen, tampoc dins d'un bucle.|Recuérdale la diapositiva «¡Cuidado!» de la sesión 1: sin espera, los cambios no se ven, tampoco dentro de un bucle."]
    ],
    diff: {
      mes: "Fer que el cranc camini i, cada vegada que reboti, digui «Uf!» (pista: posar el «digues» a dins del bucle i mirar quan es diu). Després, buscar l'espera més curta amb què encara es veuen les potes.|Hacer que el cangrejo camine y, cada vez que rebote, diga «¡Uf!» (pista: poner el «di» dentro del bucle y mirar cuándo se dice). Después, buscar la espera más corta con la que todavía se ven las patas.",
      menys: "Fer els reptes amb les cartes del ball a la taula: primer construir el bucle amb cartes i després copiar-lo. Començar pel repte de la medusa, que té només 3 blocs, i recordar el truc de tocar l'espai buit de dins del bucle.|Hacer los retos con las cartas del baile en la mesa: primero construir el bucle con cartas y después copiarlo. Empezar por el reto de la medusa, que tiene solo 3 bloques, y recordar el truco de tocar el espacio vacío de dentro del bucle."
    },
    aval: {
      ticket: ["Digues una cosa de la vida que es repeteixi per sempre i una que es repeteixi un nombre de vegades.|Di una cosa de la vida que se repita por siempre y una que se repita un número de veces.",
        "On s'ha de posar «si toques la vora, rebota»? Per què?|¿Dónde hay que poner «si tocas el borde, rebota»? ¿Por qué?"],
      rubric: [
        ["Patrons i bucles|Patrones y bucles", "Troba el patró i el posa dins d'un bucle amb el número correcte.|Encuentra el patrón y lo pone dentro de un bucle con el número correcto.", "Fa servir el bucle quan se li indica, però li costa trobar el patró sol/a.|Usa el bucle cuando se le indica, pero le cuesta encontrar el patrón solo/a."],
        ["Repeteix o per sempre|Repite o por siempre", "Tria el bucle adequat i explica que els blocs de sota d'un «per sempre» no es fan.|Elige el bucle adecuado y explica que los bloques de debajo de un «por siempre» no se hacen.", "Confon tots dos bucles o espera que es faci un bloc de sota d'un «per sempre».|Confunde los dos bucles o espera que se haga un bloque de debajo de un «por siempre»."],
        ["Rebotar|Rebotar", "Posa «rebota» dins del bucle i el personatge no surt mai.|Pone «rebota» dentro del bucle y el personaje no sale nunca.", "Posa «rebota», però de vegades fora del bucle.|Pone «rebota», pero a veces fuera del bucle."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «Caçadors de bucles»: busqueu coses que es repeteixen un nombre de vegades i coses que es repeteixen per sempre, i apunteu-les en dues columnes.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «Cazadores de bucles»: buscad cosas que se repiten un número de veces y cosas que se repiten por siempre, y apuntadlas en dos columnas.",
    slides: [
      { id: 's1', k: 'portada', t: 'Bucles per sempre|Bucles para siempre', x: "La pantalla de l'aquari ha d'estar encesa tot el dia.|La pantalla del acuario tiene que estar encendida todo el día.",
        nota: "Presenta l'objectiu: fer animacions que no s'acabin i personatges que no surtin de l'escenari.|Presenta el objetivo: hacer animaciones que no se acaben y personajes que no salgan del escenario." },
      { id: 's2', k: 'repas', t: 'Recordem: vestits i esperes|Recordemos: disfraces y esperas', punts: ["«Vestit següent» passa al dibuix següent.|«Disfraz siguiente» pasa al dibujo siguiente.", "De l'últim vestit es torna al primer.|Del último disfraz se vuelve al primero.", "L'espera fa que es vegi cada canvi.|La espera hace que se vea cada cambio."],
        nota: "Fes les preguntes a l'atzar i demana que responguin aixecant 1 o 2 dits (el número de vestit).|Haz las preguntas al azar y pide que respondan levantando 1 o 2 dedos (el número de disfraz)." },
      { id: 's3', k: 'pregunta', t: 'Quants blocs caldrien?|¿Cuántos bloques harían falta?', x: "Si el peix ha de moure la cua tot el dia, quants «vestit següent» i «espera» hem de posar?|Si el pez tiene que mover la cola todo el día, ¿cuántos «disfraz siguiente» y «espera» tenemos que poner?",
        nota: "Deixa que facin càlculs (milers!) i que diguin que és impossible: és el moment de presentar el bucle.|Deja que hagan cálculos (¡miles!) y que digan que es imposible: es el momento de presentar el bucle." },
      { id: 's4', k: 'anim', t: 'El tros que es repeteix|El trozo que se repite', anim: 'g2loop', x: 'Un patró que surt 3 vegades cap dins d’un bucle.|Un patrón que sale 3 veces cabe dentro de un bucle.',
        nota: "Demana que comptin els blocs abans (6) i després (3). Fes notar que el bucle també és un bloc.|Pide que cuenten los bloques antes (6) y después (3). Haz notar que el bucle también es un bloque." },
      { id: 's5', k: 'media', t: '«Repeteix 8 vegades»|«Repite 8 veces»', x: 'La medusa mou els tentacles 8 vegades i para.|La medusa mueve los tentáculos 8 veces y para.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'medusa', art: 'medusa', x: 0, y: 0, size: 160, rot: 'none' }] }, prog: '@medusa flag{ rep:8{ next wait:0.3 } }', time: 4 },
        nota: "Compteu les voltes junts en veu alta: s'atura al 8.|Contad las vueltas juntos en voz alta: se para en el 8." },
      { id: 's6', k: 'media', t: '«Per sempre»|«Por siempre»', x: "L'ocell bat les ales i no para mai.|El pájaro bate las alas y no para nunca.",
        media: { k: 'stage', w: { bg: 'cel', sprites: [{ id: 'ocell', art: 'ocell', x: 0, y: 20, size: 160, rot: 'lr' }] }, prog: '@ocell flag{ forever{ next wait:0.25 } }', time: 6 },
        nota: "Pregunta quan s'acabarà. Resposta: quan toquem el botó d'aturar.|Pregunta cuándo se acabará. Respuesta: cuando toquemos el botón de parar." },
      { id: 's7', k: 'anim', t: '«Si toques la vora, rebota»|«Si tocas el borde, rebota»', anim: 'g2bounce', x: 'Arriba a la vora i dona la volta: la direcció passa de 90 a -90.|Llega al borde y da la vuelta: la dirección pasa de 90 a -90.',
        nota: "Fes que un alumne/a camini fins a la paret i doni la volta: és exactament el que fa el bloc.|Haz que un alumno/a camine hasta la pared y dé la vuelta: es exactamente lo que hace el bloque." },
      { id: 's8', k: 'media', t: 'Nedar per sempre|Nadar por siempre', x: 'Per sempre { mou-te 5 passos, rebota }.|Por siempre { muévete 5 pasos, rebota }.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -60, y: 20, size: 120, rot: 'lr' }] }, prog: '@peix flag{ forever{ move:5 bounce } }', time: 8 },
        nota: "Pregunta què passaria sense «rebota». Si cal, explica que el peix continuaria fora de la pantalla, on no el veuríem.|Pregunta qué pasaría sin «rebota». Si hace falta, explica que el pez seguiría fuera de la pantalla, donde no lo veríamos." },
      { id: 's9', k: 'anim', t: 'Compte! Després de «per sempre», res|¡Cuidado! Después de «por siempre», nada', anim: 'g2never', x: "El programa no arriba mai als blocs de sota.|El programa no llega nunca a los bloques de debajo.",
        nota: "Relaciona-ho amb la vida: si camines per sempre, mai no arribes a seure.|Relaciónalo con la vida: si caminas por siempre, nunca llegas a sentarte." },
      { id: 's10', k: 'activitat', t: 'El ball en bucle|El baile en bucle', timer: 12, punts: ["Inventeu un patró de 2 o 3 moviments.|Inventad un patrón de 2 o 3 movimientos.", "Emboliqueu-lo amb «Repeteix N vegades».|Envolvedlo con «Repite N veces».", "Ara amb «Per sempre»: fins a la cartolina vermella.|Ahora con «Por siempre»: hasta la cartulina roja.", "Al passadís: un pas i, si toques la paret, rebota.|En el pasillo: un paso y, si tocas la pared, rebota."],
        nota: "Que el grup que mira compti les voltes en veu alta. Al passadís, el «robot» camina a poc a poc.|Que el grupo que mira cuente las vueltas en voz alta. En el pasillo, el «robot» camina despacio." },
      { id: 's11', k: 'activitat', t: 'Regles del ball|Reglas del baile', punts: ["Un bucle té els moviments a dins.|Un bucle tiene los movimientos dentro.", "«Repeteix» compta; «per sempre» no.|«Repite» cuenta; «por siempre» no.", "Només s'atura amb la cartolina vermella.|Solo se para con la cartulina roja."],
        nota: "Deixa-la projectada durant l'activitat.|Déjala proyectada durante la actividad." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Bucles per sempre».|Abre la sesión «Bucles para siempre».", "Fes «Descobreix» i «Mans a l'obra».|Haz «Descubre» y «Manos a la obra».", "Mira el peix que neda: què fa a la vora?|Mira el pez que nada: ¿qué hace en el borde?", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "«Caçadors de bucles» és per fer a casa.|«Cazadores de bucles» es para hacer en casa." },
      { id: 's13', k: 'media', t: 'Programem junts: el cranc|Programemos juntos: el cangrejo', x: 'Per sempre: mou-te, vestit següent, espera i rebota.|Por siempre: muévete, disfraz siguiente, espera y rebota.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'cranc', art: 'cranc', x: 0, y: -130, size: 110, rot: 'lr' }] }, prog: '@cranc flag{ forever{ move:10 next wait:0.1 bounce } }', time: 8 },
        nota: "Demana l'ordre dels blocs a la classe. Prova a canviar el número de l'espera i mireu com canvia el pas.|Pide el orden de los bloques a la clase. Prueba a cambiar el número de la espera y mirad cómo cambia el paso." },
      { id: 's14', k: 'repte', t: 'Reptes amb bucles|Retos con bucles', timer: 10, punts: ["1. La medusa amb 3 blocs|1. La medusa con 3 bloques", "2. El peix que neda sense sortir|2. El pez que nada sin salir", "3. El cranc que camina|3. El cangrejo que camina", "4. L'ocell que se'n va: troba l'error|4. El pájaro que se va: encuentra el error"],
        nota: "Al repte 4, pregunta on és el bloc «rebota» i quantes vegades es fa.|En el reto 4, pregunta dónde está el bloque «rebota» y cuántas veces se hace." },
      { id: 's15', k: 'activitat', t: 'Crea: la pantalla que no para|Crea: la pantalla que no para', timer: 5, x: 'En Vuit neda per sempre, rebota i canvia de cara. Tria tu els números!|Vuit nada por siempre, rebota y cambia de cara. ¡Elige tú los números!',
        nota: "L'app demana que hi hagi un «per sempre». Proposa als ràpids que provin el gir per fer-lo nedar en diagonal.|La app pide que haya un «por siempre». Propón a los rápidos que prueben el giro para hacerlo nadar en diagonal." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Un bucle repeteix els blocs de dins.|Un bucle repite los bloques de dentro.", "«Per sempre» no s'acaba: res del que hi ha a sota es fa.|«Por siempre» no se acaba: nada de lo que hay debajo se hace.", "«Rebota», dins del bucle, no deixa sortir el personatge.|«Rebota», dentro del bucle, no deja salir al personaje."],
        nota: "Torna a la pregunta dels mil blocs: ara n'hi ha prou amb 3!|Vuelve a la pregunta de los mil bloques: ¡ahora basta con 3!" },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Una cosa que es repeteix per sempre i una que es repeteix N vegades.|Una cosa que se repite por siempre y una que se repite N veces.", "On va el «rebota» i per què?|¿Dónde va el «rebota» y por qué?"],
        nota: "Anota qui encara posa blocs fora del bucle: hi tornarem a la sessió 3.|Anota quién todavía pone bloques fuera del bucle: volveremos a ello en la sesión 3." }
    ],
    print: [
      { id: 'p1', t: 'Cartes del ball en bucle|Cartas del baile en bucle', k: 'targetes',
        intro: "Un paquet per grup de 4. Les cartes de bucle embolcallen les de moviment.|Un paquete por grupo de 4. Las cartas de bucle envuelven las de movimiento.",
        items: [
          { t: 'Quan comença 🚩|Al empezar 🚩', n: 1 },
          { t: 'Repeteix 2 vegades 🔁|Repite 2 veces 🔁', n: 1 },
          { t: 'Repeteix 3 vegades 🔁|Repite 3 veces 🔁', n: 1 },
          { t: 'Repeteix 4 vegades 🔁|Repite 4 veces 🔁', n: 1 },
          { t: 'Per sempre ♾️|Por siempre ♾️', n: 1 },
          { t: 'Aplaudeix 👏|Aplaude 👏', n: 2 },
          { t: 'Salta 🦘|Salta 🦘', n: 2 },
          { t: 'Gira mitja volta 🔄|Gira media vuelta 🔄', n: 2 },
          { t: 'Un pas endavant 👣|Un paso adelante 👣', n: 2 },
          { t: "Toca't el cap 🙆|Tócate la cabeza 🙆", n: 2 },
          { t: 'Si toques la paret, rebota 🧱|Si tocas la pared, rebota 🧱', n: 1 },
          { t: 'Atura ✋|Para ✋', n: 1 }
        ] },
      { id: 'p2', t: 'Fitxa: troba el patró|Ficha: encuentra el patrón', k: 'fitxa',
        intro: "Encercla el tros que es repeteix i escriu el programa amb un bucle.|Rodea el trozo que se repite y escribe el programa con un bucle.",
        items: [
          { q: "Mou-te 10, gira 90, mou-te 10, gira 90, mou-te 10, gira 90, mou-te 10, gira 90.|Muévete 10, gira 90, muévete 10, gira 90, muévete 10, gira 90, muévete 10, gira 90.", sol: "Repeteix 4 vegades { mou-te 10, gira 90 }.|Repite 4 veces { muévete 10, gira 90 }." },
          { q: "Vestit següent, espera 0,5, vestit següent, espera 0,5, vestit següent, espera 0,5.|Disfraz siguiente, espera 0,5, disfraz siguiente, espera 0,5, disfraz siguiente, espera 0,5.", sol: "Repeteix 3 vegades { vestit següent, espera 0,5 }.|Repite 3 veces { disfraz siguiente, espera 0,5 }." },
          { q: "Repeteix 5 vegades { mou-te 20 passos }. Quants passos fa en total?|Repite 5 veces { muévete 20 pasos }. ¿Cuántos pasos da en total?", sol: '100 passos (5 × 20).|100 pasos (5 × 20).' },
          { q: "Per sempre { mou-te 5 } i, a sota, «digues Adéu». Dirà «Adéu» algun dia? Per què?|Por siempre { muévete 5 } y, debajo, «di Adiós». ¿Dirá «Adiós» algún día? ¿Por qué?", sol: "No: «per sempre» no s'acaba i el programa no arriba mai al bloc de sota.|No: «por siempre» no se acaba y el programa no llega nunca al bloque de debajo." },
          { q: "Vols que un peix nedi tota l'estona sense sortir. Escriu-ne el guió.|Quieres que un pez nade todo el rato sin salir. Escribe su guion.", sol: "Per sempre { mou-te 5 passos, si toques la vora, rebota }.|Por siempre { muévete 5 pasos, si tocas el borde, rebota }." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Molts personatges alhora ---------- */
  'g2-3': {
    obj: [
      "L'alumne/a programa diversos personatges triant-los a la barra de dalt de l'editor.|El alumno/a programa varios personajes eligiéndolos en la barra de arriba del editor.",
      "L'alumne/a explica que tots els guions «quan comença» es posen en marxa alhora.|El alumno/a explica que todos los guiones «al empezar» se ponen en marcha a la vez.",
      "L'alumne/a fa servir dos guions en un mateix personatge per fer dues coses a ritmes diferents.|El alumno/a usa dos guiones en un mismo personaje para hacer dos cosas a ritmos diferentes.",
      "L'alumne/a canvia els números de «mou-te» i «espera» per donar una velocitat i un ritme propis a cada personatge.|El alumno/a cambia los números de «muévete» y «espera» para dar una velocidad y un ritmo propios a cada personaje."
    ],
    comp: [
      "Competència digital (CD5): crear escenes animades amb diversos objectes programats|Competencia digital (CD5): crear escenas animadas con varios objetos programados",
      "Pensament computacional: paral·lelisme (programes que funcionen alhora) i esdeveniments|Pensamiento computacional: paralelismo (programas que funcionan a la vez) y eventos",
      "Matemàtiques: comparar velocitats i durades (passos més llargs, esperes més curtes)|Matemáticas: comparar velocidades y duraciones (pasos más largos, esperas más cortas)",
      "Treball cooperatiu: coordinar-se en grup perquè cadascú faci la seva part alhora|Trabajo cooperativo: coordinarse en grupo para que cada uno haga su parte a la vez"
    ],
    vocab: [
      ["Guió|Guion", "Una capçalera (com «quan comença») amb els blocs que té a sota.|Una cabecera (como «al empezar») con los bloques que tiene debajo."],
      ["Alhora|A la vez", "Al mateix moment: tots els guions «quan comença» arrenquen junts.|En el mismo momento: todos los guiones «al empezar» arrancan juntos."],
      ["Velocitat|Velocidad", "Com de pressa es mou un personatge: depèn del número de «mou-te».|Lo deprisa que se mueve un personaje: depende del número de «muévete»."],
      ["Ritme|Ritmo", "Com de pressa canvia de vestit: depèn del número d'«espera».|Lo deprisa que cambia de disfraz: depende del número de «espera»."],
      ["Personatge|Personaje", "Cada dibuix de l'escenari que té els seus propis guions.|Cada dibujo del escenario que tiene sus propios guiones."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Molts personatges alhora»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Muchos personajes a la vez»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un espai lliure per a l'aquari humà (el centre de l'aula o el pati)|Un espacio libre para el acuario humano (el centro del aula o el patio)",
        "Una cartolina verda (bandera) i una de vermella (atura)|Una cartulina verde (bandera) y una roja (para)"
      ],
      imprimir: ["Cartes de l'aquari humà|Cartas del acuario humano", "Fitxa: qui va més de pressa?|Ficha: ¿quién va más deprisa?"],
      prep: [
        "Imprimir i retallar un paquet de cartes de personatge per grup de 5.|Imprimir y recortar un paquete de cartas de personaje por grupo de 5.",
        "Marcar al terra (o amb cadires) els límits de l'«aquari» on es mouran els alumnes.|Marcar en el suelo (o con sillas) los límites del «acuario» donde se moverán los alumnos.",
        "Provar les demostracions de les diapositives 5, 6, 8 i 13.|Probar las demostraciones de las diapositivas 5, 6, 8 y 13.",
        "Recordar com es canvia de personatge a l'editor (la barra de dalt) per ensenyar-ho al projector.|Recordar cómo se cambia de personaje en el editor (la barra de arriba) para enseñarlo en el proyector."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: el tanc gran|Bienvenida: el tanque grande", fase: 'inici',
        fa: "Repassa la sessió 2 i presenta el repte: al tanc gran hi ha molts animals i s'han de moure tots alhora. Pregunta com creuen que ho fa l'ordinador per moure'n molts a la vegada.|Repasa la sesión 2 y presenta el reto: en el tanque grande hay muchos animales y se tienen que mover todos a la vez. Pregunta cómo creen que lo hace el ordenador para mover muchos a la vez.",
        diu: ["Una orquestra té molts músics. Com sap cadascú què ha de tocar?|Una orquesta tiene muchos músicos. ¿Cómo sabe cada uno qué tiene que tocar?",
          "I com saben quan han de començar?|¿Y cómo saben cuándo tienen que empezar?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Cada personatge, els seus guions|Cada personaje, sus guiones", fase: 'teoria',
        fa: "Ensenya al projector la barra de personatges de l'editor i com cadascú té els seus guions. Mostra la cursa del peix i la tortuga: surten alhora, però amb velocitats diferents. Presenta els dos guions en un sol personatge i les dues meduses amb ritmes diferents. Acaba amb «Compte!»: una espera llarga dins del bucle que mou fa anar a salts.|Enseña en el proyector la barra de personajes del editor y cómo cada uno tiene sus guiones. Muestra la carrera del pez y la tortuga: salen a la vez, pero con velocidades diferentes. Presenta los dos guiones en un solo personaje y las dos medusas con ritmos diferentes. Termina con «¡Cuidado!»: una espera larga dentro del bucle que mueve hace ir a saltos.",
        diu: ["Qui arribarà primer, el peix o la tortuga? Per què?|¿Quién llegará primero, el pez o la tortuga? ¿Por qué?",
          "Quina medusa té l'espera més curta?|¿Qué medusa tiene la espera más corta?",
          "Com podem fer que el peix nedi llis i mogui la cua a poc a poc?|¿Cómo podemos hacer que el pez nade suave y mueva la cola despacio?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "L'aquari humà|El acuario humano", fase: 'desconnectat',
        fa: "Grups de 5. Cada alumne/a rep una carta de personatge amb el seu guió (peix, cranc, medusa, alga, tortuga). Quan aixeques la cartolina verda, tothom comença el seu guió alhora; amb la vermella, tothom s'atura. Segona ronda: canvia els números (la tortuga encara més lenta, el peix més ràpid). Tercera ronda: qui vulgui prova la carta «dos guions» (camina i, alhora, aplaudeix a poc a poc). La resta del grup observa i comenta.|Grupos de 5. Cada alumno/a recibe una carta de personaje con su guion (pez, cangrejo, medusa, alga, tortuga). Cuando levantas la cartulina verde, todos empiezan su guion a la vez; con la roja, todos se paran. Segunda ronda: cambia los números (la tortuga aún más lenta, el pez más rápido). Tercera ronda: quien quiera prueba la carta «dos guiones» (camina y, a la vez, aplaude despacio). El resto del grupo observa y comenta.",
        diu: ["Algú ha esperat que un altre acabés per començar?|¿Alguien ha esperado a que otro terminara para empezar?",
          "Amb dos guions alhora: és difícil fer dues coses a ritmes diferents?|Con dos guiones a la vez: ¿es difícil hacer dos cosas a ritmos diferentes?",
          "Si el peix fa 3 passos i la tortuga 1, qui arriba primer a la paret?|Si el pez da 3 pasos y la tortuga 1, ¿quién llega primero a la pared?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 5|Grupos de 5" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. Al tanc del pas «Prediu i prova», insisteix que toquin cada animal a la barra de dalt per veure'n els guions: la pregunta següent ho necessita. A «Investiga», que comparin els dos guions del peix.|Cada alumno/a avanza hasta la pausa activa. En el tanque del paso «Predice y prueba», insiste en que toquen cada animal en la barra de arriba para ver sus guiones: la pregunta siguiente lo necesita. En «Investiga», que comparen los dos guiones del pez.",
        diu: ["Toca el cranc a dalt: quins blocs té?|Toca el cangrejo arriba: ¿qué bloques tiene?",
          "Quin dels dos guions del peix fa moure la cua?|¿Cuál de los dos guiones del pez hace mover la cola?"],
        slides: ['s12'], app: "Recorda, les dues històries, les cinc targetes de «Descobreix», «L'orquestra de casa» (per a casa), la pregunta dels 3 guions, el tanc amb tres animals, la pregunta de qui va més de pressa i «Investiga» (la cua lenta).|Recuerda, las dos historias, las cinco tarjetas de «Descubre», «La orquesta de casa» (para casa), la pregunta de los 3 guiones, el tanque con tres animales, la pregunta de quién va más deprisa e «Investiga» (la cola lenta).", org: "Individual|Individual" },
      { min: 10, t: "Reptes: tots alhora|Retos: todos a la vez", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Programa amb la classe el peix de dos guions de la diapositiva 13, ensenyant on es toca per afegir blocs al segon guió. Deixa'ls fer els reptes. A la cursa, pregunta quins números han provat abans de donar cap pista.|Haced la pausa activa juntos. Programa con la clase el pez de dos guiones de la diapositiva 13, enseñando dónde se toca para añadir bloques al segundo guion. Déjalos hacer los retos. En la carrera, pregunta qué números han probado antes de dar ninguna pista.",
        diu: ["Has triat el personatge que toca, a dalt?|¿Has elegido el personaje que toca, arriba?",
          "Què passa si poses el mateix número al peix i a la tortuga?|¿Qué pasa si pones el mismo número al pez y a la tortuga?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre «Reptes»: el peix i el cranc alhora, la medusa de dos guions, la cursa de l'aquari i el peix petit que no es mou.|«Pausa activa» y los cuatro «Retos»: el pez y el cangrejo a la vez, la medusa de dos guiones, la carrera del acuario y el pez pequeño que no se mueve.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el fons marí|Crea: el fondo marino", fase: 'crea',
        fa: "Cada alumne/a programa el seu tanc amb el peix, el cranc i la medusa. Quan acabin, en parelles miren el tanc del company/a i endevinen quin animal té el «mou-te» més gran.|Cada alumno/a programa su tanque con el pez, el cangrejo y la medusa. Cuando terminen, por parejas miran el tanque del compañero/a y adivinan qué animal tiene el «muévete» más grande.",
        diu: ["Quin caràcter té cada animal? Ràpid, tranquil, nerviós?|¿Qué carácter tiene cada animal? ¿Rápido, tranquilo, nervioso?",
          "Endevina: quin animal té el número més gran?|Adivina: ¿qué animal tiene el número más grande?"],
        slides: ['s15'], app: "Pas «Crea»: El fons marí (es desa al portafoli).|Paso «Crea»: El fondo marino (se guarda en el portafolio).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Quan comencen els guions dels personatges?|¿Cuándo empiezan los guiones de los personajes?",
          "Per a què serveixen dos guions en un personatge?|¿Para qué sirven dos guiones en un personaje?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Programa tots els blocs al primer personatge perquè no ha canviat de personatge a la barra de dalt.|Programa todos los bloques en el primer personaje porque no ha cambiado de personaje en la barra de arriba.",
        "Pregunta-li de qui són els guions que veu ara. Que toqui el nom del personatge a dalt abans d'afegir cap bloc.|Pregúntale de quién son los guiones que ve ahora. Que toque el nombre del personaje arriba antes de añadir ningún bloque."],
      ["Creu que els personatges es mouen per ordre: primer el que ha programat primer.|Cree que los personajes se mueven por orden: primero el que ha programado primero.",
        "Recorda-li l'aquari humà: amb la cartolina verda, tothom va començar alhora. Que miri la demo de la cursa.|Recuérdale el acuario humano: con la cartulina verde, todos empezaron a la vez. Que mire la demo de la carrera."],
      ["Ho posa tot en un sol bucle amb una espera llarga i el personatge va a salts.|Lo pone todo en un solo bucle con una espera larga y el personaje va a saltos.",
        "Pregunta-li què fa el personatge mentre espera. Suggereix-li fer servir el segon guió per als vestits.|Pregúntale qué hace el personaje mientras espera. Sugiérele usar el segundo guion para los disfraces."],
      ["No troba com afegir blocs al segon guió.|No encuentra cómo añadir bloques al segundo guion.",
        "Que toqui l'espai buit «els blocs nous van aquí» del segon guió: el bloc nou s'hi enganxarà.|Que toque el espacio vacío «los bloques nuevos van aquí» del segundo guion: el bloque nuevo se enganchará ahí."],
      ["A la cursa posa números molt grans i el peix surt de l'escenari.|En la carrera pone números muy grandes y el pez sale del escenario.",
        "Pregunta quants passos fa el peix en 4 segons si en fa 30 per segon. Que provi amb números petits i compari.|Pregunta cuántos pasos da el pez en 4 segundos si da 30 por segundo. Que pruebe con números pequeños y compare."]
    ],
    diff: {
      mes: "Afegir en Vuit o una segona medusa al fons marí i donar a cada animal un caràcter diferent (ràpid, tranquil, nerviós) només amb els números de «mou-te» i «espera». Després, explicar a un company/a quin número fa cada caràcter.|Añadir a Vuit o una segunda medusa al fondo marino y dar a cada animal un carácter diferente (rápido, tranquilo, nervioso) solo con los números de «muévete» y «espera». Después, explicar a un compañero/a qué número hace cada carácter.",
      menys: "Treballar amb les cartes de l'aquari humà a la taula: una carta per personatge, i copiar cada carta al personatge que toca. Començar pel repte del peix i el cranc, programant-los d'un en un i provant cada vegada.|Trabajar con las cartas del acuario humano en la mesa: una carta por personaje, y copiar cada carta al personaje que toca. Empezar por el reto del pez y el cangrejo, programándolos de uno en uno y probando cada vez."
    },
    aval: {
      ticket: ["Quan toques la bandera verda, en quin ordre comencen els guions dels personatges?|Cuando tocas la bandera verde, ¿en qué orden empiezan los guiones de los personajes?",
        "Com faries que un peix nedés llis i mogués la cua a poc a poc?|¿Cómo harías que un pez nadara suave y moviera la cola despacio?"],
      rubric: [
        ["Diversos personatges|Varios personajes", "Tria el personatge a la barra de dalt i programa cadascun amb el seu guió.|Elige el personaje en la barra de arriba y programa cada uno con su guion.", "Programa més d'un personatge amb ajuda o barreja els guions.|Programa más de un personaje con ayuda o mezcla los guiones."],
        ["Alhora|A la vez", "Explica que tots els guions «quan comença» arrenquen alhora.|Explica que todos los guiones «al empezar» arrancan a la vez.", "Encara pensa que els guions van per ordre.|Todavía piensa que los guiones van por orden."],
        ["Velocitat i ritme|Velocidad y ritmo", "Canvia els números de «mou-te» i «espera» per obtenir el que vol i fa servir dos guions quan cal.|Cambia los números de «muévete» y «espera» para conseguir lo que quiere y usa dos guiones cuando hace falta.", "Canvia els números a l'atzar fins que funciona.|Cambia los números al azar hasta que funciona."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «L'orquestra de casa»: cadascú té el seu guió (aplaudir, tocar la taula, xiuxiuejar) i tots comenceu alhora. Proveu de canviar els ritmes!|En casa, con el móvil, podéis repetir la sesión y hacer «La orquesta de casa»: cada uno tiene su guion (aplaudir, tocar la mesa, susurrar) y todos empezáis a la vez. ¡Probad a cambiar los ritmos!",
    slides: [
      { id: 's1', k: 'portada', t: 'Molts personatges alhora|Muchos personajes a la vez', x: "Al tanc gran de l'aquari, tots els animals es mouen a la vegada.|En el tanque grande del acuario, todos los animales se mueven a la vez.",
        nota: "Presenta l'objectiu: programar molts personatges i fer que funcionin junts.|Presenta el objetivo: programar muchos personajes y hacer que funcionen juntos." },
      { id: 's2', k: 'repas', t: 'Recordem: bucles|Recordemos: bucles', punts: ["«Repeteix N vegades» compta les voltes.|«Repite N veces» cuenta las vueltas.", "«Per sempre» no s'acaba mai.|«Por siempre» no se acaba nunca.", "«Rebota» va a dins del bucle.|«Rebota» va dentro del bucle."],
        nota: "Fes les dues preguntes de «Recorda» en veu alta abans d'obrir l'app.|Haz las dos preguntas de «Recuerda» en voz alta antes de abrir la app." },
      { id: 's3', k: 'pregunta', t: "Com ho fa una orquestra?|¿Cómo lo hace una orquesta?", x: "Molts músics, cadascun amb la seva partitura, i tots comencen alhora.|Muchos músicos, cada uno con su partitura, y todos empiezan a la vez.",
        nota: "Fes la comparació: músic = personatge, partitura = guió, director/a = bandera verda.|Haz la comparación: músico = personaje, partitura = guion, director/a = bandera verde." },
      { id: 's4', k: 'concepte', t: 'Cada personatge, els seus guions|Cada personaje, sus guiones', punts: ["A dalt de l'editor tries el personatge.|Arriba del editor eliges el personaje.", "Cada personatge té els seus propis guions.|Cada personaje tiene sus propios guiones.", "Programar el peix no canvia res del cranc.|Programar el pez no cambia nada del cangrejo."],
        nota: "Ensenya-ho en directe a l'editor, amb un repte obert al projector.|Enséñalo en directo en el editor, con un reto abierto en el proyector." },
      { id: 's5', k: 'media', t: 'Tres animals, tres guions|Tres animales, tres guiones', x: 'El peix neda, el cranc camina i la medusa mou els tentacles.|El pez nada, el cangrejo camina y la medusa mueve los tentáculos.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -80, y: 60, rot: 'lr' }, { id: 'cranc', art: 'cranc', x: 60, y: -130, rot: 'lr' }, { id: 'medusa', art: 'medusa', x: 150, y: 40, rot: 'none' }] }, prog: '@peix flag{ forever{ move:4 bounce } } @cranc flag{ forever{ move:2 bounce } } @medusa flag{ forever{ next wait:0.4 } }', time: 8 },
        nota: "Llegiu junts els tres guions de sota la demo: de qui és cadascun?|Leed juntos los tres guiones de debajo de la demo: ¿de quién es cada uno?" },
      { id: 's6', k: 'media', t: 'La cursa: tots surten alhora|La carrera: todos salen a la vez', x: 'El peix fa passos de 5 i la tortuga, de 2.|El pez da pasos de 5 y la tortuga, de 2.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -190, y: 50, rot: 'lr' }, { id: 'tuga', art: 'tuga', x: -190, y: -80, size: 90, rot: 'lr' }] }, prog: '@peix flag{ rep:70{ move:5 } } @tuga flag{ rep:70{ move:2 } }', time: 4 },
        nota: "Abans de començar, que votin qui guanyarà. Després, pregunta quin número caldria per a una tortuga encara més lenta.|Antes de empezar, que voten quién ganará. Después, pregunta qué número haría falta para una tortuga aún más lenta." },
      { id: 's7', k: 'anim', t: 'Dos guions en un personatge|Dos guiones en un personaje', anim: 'g2para', x: 'Un guió mou el peix i l’altre li canvia la cua, tots dos alhora.|Un guion mueve el pez y el otro le cambia la cola, los dos a la vez.',
        nota: "Fes notar que els dos marcadors grocs avancen a la vegada: els dos guions funcionen alhora.|Haz notar que los dos marcadores amarillos avanzan a la vez: los dos guiones funcionan a la vez." },
      { id: 's8', k: 'media', t: 'El ritme de cada animal|El ritmo de cada animal', x: "Espera de 0,15 segons a l'esquerra i de 0,8 a la dreta.|Espera de 0,15 segundos a la izquierda y de 0,8 a la derecha.",
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'medusa', art: 'medusa', x: -110, y: 10, size: 130, rot: 'none' }, { id: 'medusa2', art: 'medusa', x: 110, y: 10, size: 130, rot: 'none', name: 'Medusa 2|Medusa 2' }] }, prog: '@medusa flag{ forever{ next wait:0.15 } } @medusa2 flag{ forever{ next wait:0.8 } }', time: 6 },
        nota: "Pregunta quina medusa sembla nerviosa i quina tranquil·la, i quin número ho decideix.|Pregunta qué medusa parece nerviosa y cuál tranquila, y qué número lo decide." },
      { id: 's9', k: 'media', t: 'Compte! Una espera que fa anar a salts|¡Cuidado! Una espera que hace ir a saltos', x: "Tot en un bucle amb espera de 0,6: el peix avança a salts.|Todo en un bucle con espera de 0,6: el pez avanza a saltos.",
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -60, y: 20, size: 110, rot: 'lr' }] }, prog: '@peix flag{ forever{ move:30 next wait:0.6 bounce } }', time: 6 },
        nota: "Compara-ho amb la diapositiva 7: amb dos guions, el peix neda llis.|Compáralo con la diapositiva 7: con dos guiones, el pez nada suave." },
      { id: 's10', k: 'activitat', t: "L'aquari humà|El acuario humano", timer: 12, punts: ["Cadascú té la carta del seu animal.|Cada uno tiene la carta de su animal.", "Cartolina verda: tothom comença alhora.|Cartulina verde: todos empiezan a la vez.", "Cartolina vermella: tothom s'atura.|Cartulina roja: todos se paran.", "Ronda 3: qui s'atreveix amb dos guions?|Ronda 3: ¿quién se atreve con dos guiones?"],
        nota: "Vigila que es moguin a poc a poc i dins dels límits de l'aquari. Rebotar vol dir donar la volta abans de la paret.|Vigila que se muevan despacio y dentro de los límites del acuario. Rebotar quiere decir dar la vuelta antes de la pared." },
      { id: 's11', k: 'activitat', t: 'Els guions dels animals|Los guiones de los animales', punts: ["Peix: per sempre, 3 passos i, a la paret, rebota.|Pez: por siempre, 3 pasos y, en la pared, rebota.", "Cranc: per sempre, un pas de costat.|Cangrejo: por siempre, un paso de lado.", "Medusa: per sempre, ajup-te i aixeca't.|Medusa: por siempre, agáchate y levántate.", "Tortuga: per sempre, un pas molt lent.|Tortuga: por siempre, un paso muy lento."],
        nota: "Deixa-la projectada perquè tothom recordi el guió del seu animal.|Déjala proyectada para que todos recuerden el guion de su animal." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Molts personatges alhora».|Abre la sesión «Muchos personajes a la vez».", "Al tanc, toca cada animal a dalt per veure'n els guions.|En el tanque, toca cada animal arriba para ver sus guiones.", "A «Investiga», compara els dos guions del peix.|En «Investiga», compara los dos guiones del pez.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "«L'orquestra de casa» és per fer a casa.|«La orquesta de casa» es para hacer en casa." },
      { id: 's13', k: 'media', t: 'Programem junts: el peix de dos guions|Programemos juntos: el pez de dos guiones', x: 'Guió 1: per sempre { mou-te 4, rebota }. Guió 2: per sempre { vestit següent, espera 0,3 }.|Guion 1: por siempre { muévete 4, rebota }. Guion 2: por siempre { disfraz siguiente, espera 0,3 }.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -60, y: 40, size: 110, rot: 'lr' }] }, prog: '@peix flag{ forever{ move:4 bounce } } flag{ forever{ next wait:0.3 } }', time: 8 },
        nota: "Ensenya al projector on es toca per afegir blocs al segon guió.|Enseña en el proyector dónde se toca para añadir bloques al segundo guion." },
      { id: 's14', k: 'repte', t: 'Reptes: tots alhora|Retos: todos a la vez', timer: 10, punts: ["1. El peix i el cranc alhora|1. El pez y el cangrejo a la vez", "2. La medusa de dos guions|2. La medusa de dos guiones", "3. La cursa de l'aquari|3. La carrera del acuario", "4. El peix petit que no es mou: troba l'error|4. El pez pequeño que no se mueve: encuentra el error"],
        nota: "Al repte 4, que comparin el guió del peix petit amb el del gran bloc a bloc.|En el reto 4, que comparen el guion del pez pequeño con el del grande bloque a bloque." },
      { id: 's15', k: 'activitat', t: 'Crea: el fons marí|Crea: el fondo marino', timer: 5, x: 'El peix, el cranc i la medusa, cadascun al seu ritme.|El pez, el cangrejo y la medusa, cada uno a su ritmo.',
        nota: "L'app demana que el peix i el cranc es moguin, que ningú surti i que algú canviï de vestit.|La app pide que el pez y el cangrejo se muevan, que nadie salga y que alguien cambie de disfraz." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Cada personatge té els seus guions.|Cada personaje tiene sus guiones.", "Tots els guions «quan comença» arrenquen alhora.|Todos los guiones «al empezar» arrancan a la vez.", "Dos guions = dues coses alhora, a ritmes diferents.|Dos guiones = dos cosas a la vez, a ritmos diferentes."],
        nota: "Torna a la pregunta de l'orquestra: ara saben qui és el director/a (la bandera verda).|Vuelve a la pregunta de la orquesta: ahora saben quién es el director/a (la bandera verde)." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["En quin ordre comencen els guions?|¿En qué orden empiezan los guiones?", "Com faries un peix que neda llis i mou la cua a poc a poc?|¿Cómo harías un pez que nada suave y mueve la cola despacio?"],
        nota: "La setmana vinent és el projecte: recorda'ls que pensin quins animals voldran posar al seu aquari.|La semana que viene es el proyecto: recuérdales que piensen qué animales querrán poner en su acuario." }
    ],
    print: [
      { id: 'p1', t: "Cartes de l'aquari humà|Cartas del acuario humano", k: 'targetes',
        intro: "Un paquet per grup de 5. Cada alumne/a agafa una carta d'animal; les cartes de ronda són per al professor/a.|Un paquete por grupo de 5. Cada alumno/a coge una carta de animal; las cartas de ronda son para el profesor/a.",
        items: [
          { t: 'Peix: per sempre, 3 passos i rebota 🐟|Pez: por siempre, 3 pasos y rebota 🐟', n: 1 },
          { t: 'Cranc: per sempre, un pas de costat 🦀|Cangrejo: por siempre, un paso de lado 🦀', n: 1 },
          { t: "Medusa: per sempre, ajup-te i aixeca't 🎐|Medusa: por siempre, agáchate y levántate 🎐", n: 1 },
          { t: "Alga: per sempre, braços d'un costat a l'altre 🌿|Alga: por siempre, brazos de un lado al otro 🌿", n: 1 },
          { t: 'Tortuga: per sempre, un pas molt lent 🐢|Tortuga: por siempre, un paso muy lento 🐢', n: 1 },
          { t: 'Dos guions: camina i aplaudeix a poc a poc 👏|Dos guiones: camina y aplaude despacio 👏', n: 2 },
          { t: 'Més ràpid: passos més llargs ⏩|Más rápido: pasos más largos ⏩', n: 1 },
          { t: 'Més lent: espera més llarga ⏪|Más lento: espera más larga ⏪', n: 1 }
        ] },
      { id: 'p2', t: 'Fitxa: qui va més de pressa?|Ficha: ¿quién va más deprisa?', k: 'fitxa',
        intro: "Llegeix els guions i respon. Pots comprovar-ho després a l'app.|Lee los guiones y responde. Puedes comprobarlo después en la app.",
        items: [
          { q: "Peix: per sempre { mou-te 6 }. Cranc: per sempre { mou-te 2 }. Qui va més de pressa?|Pez: por siempre { muévete 6 }. Cangrejo: por siempre { muévete 2 }. ¿Quién va más deprisa?", sol: "El peix: fa passos de 6 i el cranc, de 2.|El pez: da pasos de 6 y el cangrejo, de 2." },
          { q: "Medusa A: per sempre { vestit següent, espera 0,2 }. Medusa B: per sempre { vestit següent, espera 1 }. Quina mou més de pressa els tentacles?|Medusa A: por siempre { disfraz siguiente, espera 0,2 }. Medusa B: por siempre { disfraz siguiente, espera 1 }. ¿Cuál mueve más deprisa los tentáculos?", sol: "La medusa A: com més curta l'espera, més ràpid el canvi.|La medusa A: cuanto más corta la espera, más rápido el cambio." },
          { q: "Hi ha 4 personatges amb un guió «quan comença» cadascun. Quin comença primer?|Hay 4 personajes con un guion «al empezar» cada uno. ¿Cuál empieza primero?", sol: "Cap: comencen tots alhora quan toques la bandera verda.|Ninguno: empiezan todos a la vez cuando tocas la bandera verde." },
          { q: "Escriu els dos guions d'un peix que neda llis i mou la cua cada mig segon.|Escribe los dos guiones de un pez que nada suave y mueve la cola cada medio segundo.", sol: "Guió 1: per sempre { mou-te 4, rebota }. Guió 2: per sempre { vestit següent, espera 0,5 }.|Guion 1: por siempre { muévete 4, rebota }. Guion 2: por siempre { disfraz siguiente, espera 0,5 }." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: l'aquari ---------- */
  'g2-4': {
    obj: [
      "L'alumne/a planifica en paper una escena animada amb diversos personatges abans de programar-la.|El alumno/a planifica en papel una escena animada con varios personajes antes de programarla.",
      "L'alumne/a construeix el projecte a trossos, personatge a personatge, i prova cada tros.|El alumno/a construye el proyecto a trozos, personaje a personaje, y prueba cada trozo.",
      "L'alumne/a combina vestits, esperes, bucles, rebots i diversos guions en un sol projecte.|El alumno/a combina disfraces, esperas, bucles, rebotes y varios guiones en un solo proyecto.",
      "L'alumne/a presenta el seu aquari i dona i rep comentaris amables i útils.|El alumno/a presenta su acuario y da y recibe comentarios amables y útiles."
    ],
    comp: [
      "Competència digital (CD5): dissenyar i crear un projecte digital propi|Competencia digital (CD5): diseñar y crear un proyecto digital propio",
      "Pensament computacional: descomposició, planificació i depuració d'un projecte|Pensamiento computacional: descomposición, planificación y depuración de un proyecto",
      "Comunicació oral: presentar el projecte i fer comentaris constructius|Comunicación oral: presentar el proyecto y hacer comentarios constructivos",
      "Ciències de la natura: els animals marins i com es mouen|Ciencias de la naturaleza: los animales marinos y cómo se mueven"
    ],
    vocab: [
      ["Projecte|Proyecto", "Una creació gran que es fa en diversos passos: idea, pla, construcció i proves.|Una creación grande que se hace en varios pasos: idea, plan, construcción y pruebas."],
      ["Pla|Plan", "El dibuix o la llista que diu què farà cada part abans de programar-la.|El dibujo o la lista que dice qué hará cada parte antes de programarla."],
      ["Tros|Trozo", "Una part petita del projecte que es pot programar i provar sola.|Una parte pequeña del proyecto que se puede programar y probar sola."],
      ["Provar|Probar", "Fer funcionar el programa per veure si fa el que volem.|Hacer funcionar el programa para ver si hace lo que queremos."],
      ["Millorar|Mejorar", "Canviar el programa després de provar-lo perquè funcioni millor.|Cambiar el programa después de probarlo para que funcione mejor."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: l'aquari»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el acuario»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis i colors per al pla|Lápices y colores para el plan",
        "Opcional: una pantalla gran o el projector per mostrar alguns aquaris al final|Opcional: una pantalla grande o el proyector para mostrar algunos acuarios al final"
      ],
      imprimir: ["Fitxa: el pla del meu aquari|Ficha: el plan de mi acuario", "Targetes de comentaris per a la galeria|Tarjetas de comentarios para la galería"],
      prep: [
        "Imprimir una fitxa del pla per alumne/a i un paquet de targetes de comentaris per parella.|Imprimir una ficha del plan por alumno/a y un paquete de tarjetas de comentarios por pareja.",
        "Provar l'aquari de mostra de la diapositiva 6 per poder-ne explicar cada tros.|Probar el acuario de muestra de la diapositiva 6 para poder explicar cada trozo.",
        "Preparar l'ordre de la galeria final: parelles que es miren el projecte o 3-4 aquaris al projector.|Preparar el orden de la galería final: parejas que se miran el proyecto o 3-4 acuarios en el proyector.",
        "Revisar al portafoli les creacions de les sessions anteriors per recordar què ha après cadascú.|Revisar en el portafolio las creaciones de las sesiones anteriores para recordar qué ha aprendido cada uno."
      ]
    },
    plan: [
      { min: 5, t: "La gran inauguració|La gran inauguración", fase: 'inici',
        fa: "Explica que avui cadascú farà el seu aquari per a la pantalla de la Marina. Repassa amb les preguntes de «Recorda» els tres grans aprenentatges de la unitat: vestits, bucles i molts personatges alhora.|Explica que hoy cada uno hará su acuario para la pantalla de Marina. Repasa con las preguntas de «Recuerda» los tres grandes aprendizajes de la unidad: disfraces, bucles y muchos personajes a la vez.",
        diu: ["Quines eines tenim ja per fer un aquari viu?|¿Qué herramientas tenemos ya para hacer un acuario vivo?",
          "Avui sereu els programadors i les programadores de l'aquari.|Hoy seréis los programadores y las programadoras del acuario."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 5, t: "Com es fa un projecte|Cómo se hace un proyecto", fase: 'teoria',
        fa: "Presenta els cinc passos del projecte i l'aquari de mostra, tros a tros. Acaba amb «Compte!»: provar cada tros abans de passar al següent.|Presenta los cinco pasos del proyecto y el acuario de muestra, trozo a trozo. Termina con «¡Cuidado!»: probar cada trozo antes de pasar al siguiente.",
        diu: ["Quin és el primer tros que programaríeu de l'aquari de mostra?|¿Cuál es el primer trozo que programaríais del acuario de muestra?",
          "Per què és millor provar cada animal de seguida?|¿Por qué es mejor probar cada animal enseguida?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El pla del meu aquari|El plan de mi acuario", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa del pla: dibuixa el tanc, tria com a mínim 3 animals i escriu què farà cadascun (moure's, canviar de vestit, parlar, per sempre o unes quantes vegades) i l'ordre en què els programarà. Als darrers 3 minuts, en parelles, s'expliquen el pla i el company/a fa una pregunta.|Cada alumno/a rellena la ficha del plan: dibuja el tanque, elige como mínimo 3 animales y escribe qué hará cada uno (moverse, cambiar de disfraz, hablar, por siempre o unas cuantas veces) y el orden en que los programará. En los últimos 3 minutos, por parejas, se explican el plan y el compañero/a hace una pregunta.",
        diu: ["Què farà cada animal? Escriu-ho al costat del dibuix.|¿Qué hará cada animal? Escríbelo al lado del dibujo.",
          "Quin animal programaràs primer? Per què?|¿Qué animal programarás primero? ¿Por qué?",
          "Fes una pregunta al pla del teu company/a.|Haz una pregunta al plan de tu compañero/a."],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla (el pas «El pla del meu aquari» de l'app ja està fet).|Ninguna: actividad sin pantalla (el paso «El plan de mi acuario» de la app ya está hecho).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 10, t: "A l'ordinador: els trossos|En el ordenador: los trozos", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i fa de «Recorda» fins als tres reptes dels trossos (l'alga, el peix de dos guions i el cranc que saluda). Aquests reptes són l'entrenament del projecte: si algú va molt de pressa, que passi directament al seu aquari.|Cada alumno/a abre la sesión y hace de «Recuerda» hasta los tres retos de los trozos (el alga, el pez de dos guiones y el cangrejo que saluda). Estos retos son el entrenamiento del proyecto: si alguien va muy deprisa, que pase directamente a su acuario.",
        diu: ["La benvinguda, va abans o a dins del bucle?|La bienvenida, ¿va antes o dentro del bucle?",
          "A «Investiga», quin bucle s'acaba massa aviat?|En «Investiga», ¿qué bucle se acaba demasiado pronto?"],
        slides: ['s10', 's11'], app: "Recorda, històries, «Descobreix», ordenar els passos del projecte, el pla (ja fet), l'aquari de mostra, «Investiga» (la medusa que s'atura), la pausa activa i els tres reptes: l'alga, el peix i el cranc.|Recuerda, historias, «Descubre», ordenar los pasos del proyecto, el plan (ya hecho), el acuario de muestra, «Investiga» (la medusa que se para), la pausa activa y los tres retos: el alga, el pez y el cangrejo.", org: "Individual|Individual" },
      { min: 20, t: "Crea: el meu aquari|Crea: mi acuario", fase: 'crea',
        fa: "Cada alumne/a construeix el seu aquari seguint el pla, animal a animal. Passeja i pregunta en quin tros són i si l'han provat. Quan un animal funcioni, que marquin una creu al pla. Qui acabi pot afegir detalls: un animal que pensa, un ritme diferent per a cada animal…|Cada alumno/a construye su acuario siguiendo el plan, animal a animal. Pasea y pregunta en qué trozo están y si lo han probado. Cuando un animal funcione, que marquen una cruz en el plan. Quien termine puede añadir detalles: un animal que piensa, un ritmo diferente para cada animal…",
        diu: ["En quin tros ets? L'has provat ja?|¿En qué trozo estás? ¿Ya lo has probado?",
          "Marca al pla els animals que ja funcionen.|Marca en el plan los animales que ya funcionan.",
          "Què podries millorar ara que funciona?|¿Qué podrías mejorar ahora que funciona?"],
        slides: ['s12', 's13'], app: "Pas «Crea»: El meu aquari (es desa al portafoli).|Paso «Crea»: Mi acuario (se guarda en el portafolio).", org: "Individual|Individual" },
      { min: 10, t: "Galeria i tancament|Galería y cierre", fase: 'tancament',
        fa: "Feu una galeria: en parelles, cadascú ensenya el seu aquari i el company/a li dona dues targetes de comentaris (una cosa que li agrada i una idea). Si hi ha temps, mostra 3 o 4 aquaris al projector. Acaba amb el resum, les preguntes finals de l'app i el tiquet.|Haced una galería: por parejas, cada uno enseña su acuario y el compañero/a le da dos tarjetas de comentarios (una cosa que le gusta y una idea). Si hay tiempo, muestra 3 o 4 acuarios en el proyector. Termina con el resumen, las preguntas finales de la app y el ticket.",
        diu: ["Digues una cosa que t'agradi de l'aquari del teu company/a.|Di una cosa que te guste del acuario de tu compañero/a.",
          "Quina idea li donaries per millorar-lo?|¿Qué idea le darías para mejorarlo?",
          "Què ha estat el més difícil del projecte? Com ho has resolt?|¿Qué ha sido lo más difícil del proyecto? ¿Cómo lo has resuelto?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Per parelles i després tot el grup|Por parejas y después todo el grupo" }
    ],
    errors: [
      ["Vol programar-ho tot de cop i, quan falla, no sap on és l'error.|Quiere programarlo todo de golpe y, cuando falla, no sabe dónde está el error.",
        "Torna al pla: quin animal funciona ja? Que provi els animals d'un en un, tocant només un personatge cada vegada.|Vuelve al plan: ¿qué animal funciona ya? Que pruebe los animales de uno en uno, tocando solo un personaje cada vez."],
      ["Fa un pla massa gran (deu animals) i no l'acaba.|Hace un plan demasiado grande (diez animales) y no lo acaba.",
        "Que triï els 3 animals més importants i deixi la resta per a «si em sobra temps». Un projecte acabat és millor que un de gegant a mitges.|Que elija los 3 animales más importantes y deje el resto para «si me sobra tiempo». Un proyecto acabado es mejor que uno gigante a medias."],
      ["Posa la benvinguda a dins del «per sempre» i el cranc no para de parlar (o no camina).|Pone la bienvenida dentro del «por siempre» y el cangrejo no para de hablar (o no camina).",
        "Pregunta quantes vegades ha de dir la benvinguda. Si és una sola, on ha d'anar: abans o a dins del bucle?|Pregunta cuántas veces tiene que decir la bienvenida. Si es una sola, ¿dónde tiene que ir: antes o dentro del bucle?"],
      ["Fa servir «repeteix» amb pocs números i l'aquari s'atura al cap d'una estona.|Usa «repite» con números pequeños y el acuario se para al cabo de un rato.",
        "Recorda-li l'encàrrec: la pantalla està encesa tot el dia. Quin bucle no s'acaba?|Recuérdale el encargo: la pantalla está encendida todo el día. ¿Qué bucle no se acaba?"],
      ["Els comentaris de la galeria són «està bé» o «és lleig».|Los comentarios de la galería son «está bien» o «es feo».",
        "Fes servir les targetes de comentaris: «M'agrada… perquè…» i «Podries provar…». Modela'n un tu primer.|Usa las tarjetas de comentarios: «Me gusta… porque…» y «Podrías probar…». Modela uno tú primero."]
    ],
    diff: {
      mes: "Afegir a l'aquari un animal amb dos guions i ritmes molt diferents, o fer que en Vuit pensi coses amb «pensa» mentre neda. Després, escriure al pla quins canvis han fet respecte del pla inicial.|Añadir al acuario un animal con dos guiones y ritmos muy diferentes, o hacer que Vuit piense cosas con «piensa» mientras nada. Después, escribir en el plan qué cambios han hecho respecto al plan inicial.",
      menys: "Fer un pla de només 3 animals i començar pels que s'assemblen als reptes de l'app (l'alga, el peix, el cranc). Tenir al costat el resum de blocs de la diapositiva 13 per copiar-lo.|Hacer un plan de solo 3 animales y empezar por los que se parecen a los retos de la app (el alga, el pez, el cangrejo). Tener al lado el resumen de bloques de la diapositiva 13 para copiarlo."
    },
    aval: {
      ticket: ["Explica com has construït el teu aquari: quin animal vas fer primer i per què.|Explica cómo has construido tu acuario: qué animal hiciste primero y por qué.",
        "Digues un error que has trobat i com l'has arreglat.|Di un error que has encontrado y cómo lo has arreglado."],
      rubric: [
        ["Pla i construcció a trossos|Plan y construcción a trozos", "Fa un pla clar i el segueix, programant i provant un animal darrere l'altre.|Hace un plan claro y lo sigue, programando y probando un animal tras otro.", "Fa el pla, però programa sense provar fins al final.|Hace el plan, pero programa sin probar hasta el final."],
        ["Blocs de la unitat|Bloques de la unidad", "Combina vestits, esperes, «per sempre», «rebota» i diversos guions sense ajuda.|Combina disfraces, esperas, «por siempre», «rebota» y varios guiones sin ayuda.", "Fa servir alguns dels blocs, però necessita ajuda per combinar-los.|Usa algunos de los bloques, pero necesita ayuda para combinarlos."],
        ["Presentació i comentaris|Presentación y comentarios", "Explica el seu aquari i fa comentaris amables i concrets al company/a.|Explica su acuario y hace comentarios amables y concretos al compañero/a.", "Ensenya l'aquari, però li costa explicar-lo o fer comentaris concrets.|Enseña el acuario, pero le cuesta explicarlo o hacer comentarios concretos."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu obrir el portafoli i ensenyar l'aquari a la família. Expliqueu-los com heu fet moure cada animal i demaneu-los una idea per millorar-lo.|En casa, con el móvil, podéis abrir el portafolio y enseñar el acuario a la familia. Explicadles cómo habéis hecho mover a cada animal y pedidles una idea para mejorarlo.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: l'aquari|Proyecto: el acuario", x: "Dissabte s'inaugura l'aquari del moll i la pantalla gegant necessita el teu aquari animat.|El sábado se inaugura el acuario del muelle y la pantalla gigante necesita tu acuario animado.",
        nota: "Explica que avui no hi ha un sol camí bo: cada aquari serà diferent.|Explica que hoy no hay un solo camino bueno: cada acuario será diferente." },
      { id: 's2', k: 'repas', t: 'Les eines de la unitat|Las herramientas de la unidad', punts: ["Vestits i esperes: dibuixos que es mouen.|Disfraces y esperas: dibujos que se mueven.", "Bucles: «repeteix» i «per sempre».|Bucles: «repite» y «por siempre».", "«Rebota» i molts personatges alhora.|«Rebota» y muchos personajes a la vez."],
        nota: "Demana un exemple de cada eina fet a les sessions anteriors.|Pide un ejemplo de cada herramienta hecho en las sesiones anteriores." },
      { id: 's3', k: 'pregunta', t: 'Com serà el teu aquari?|¿Cómo será tu acuario?', x: 'Quins animals hi posaràs? Què farà cadascun?|¿Qué animales pondrás? ¿Qué hará cada uno?',
        nota: "Recull idees en veu alta. No cal decidir-ho ara: ho faran al pla.|Recoge ideas en voz alta. No hace falta decidirlo ahora: lo harán en el plan." },
      { id: 's4', k: 'anim', t: 'Com es fa un projecte|Cómo se hace un proyecto', anim: 'g2plan', x: 'Idea, pla, construir a trossos, provar i millorar.|Idea, plan, construir a trozos, probar y mejorar.',
        nota: "Fes notar la fletxa entre «Prova-ho» i «Millora-ho»: es fa moltes vegades.|Haz notar la flecha entre «Pruébalo» y «Mejóralo»: se hace muchas veces." },
      { id: 's5', k: 'concepte', t: 'Construir a trossos|Construir a trozos', punts: ["Un tros = un animal.|Un trozo = un animal.", "Programa'l i prova'l amb la bandera.|Prográmalo y pruébalo con la bandera.", "Quan funciona, passa al següent.|Cuando funciona, pasa al siguiente."],
        nota: "Compara-ho amb construir una casa: primer els fonaments, després les parets.|Compáralo con construir una casa: primero los cimientos, después las paredes." },
      { id: 's6', k: 'media', t: "L'aquari de mostra|El acuario de muestra", x: "L'alga, el peix (dos guions), la medusa i el cranc que saluda.|El alga, el pez (dos guiones), la medusa y el cangrejo que saluda.",
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'alga', art: 'alga', x: -170, y: -110, size: 120, rot: 'none' }, { id: 'peix', art: 'peix', x: -60, y: 70, rot: 'lr' }, { id: 'medusa', art: 'medusa', x: 130, y: 40, rot: 'none', dir: 0 }, { id: 'cranc', art: 'cranc', x: 40, y: -135, size: 80, rot: 'lr' }] },
          prog: '@alga flag{ forever{ next wait:0.6 } } @peix flag{ forever{ move:4 bounce } } flag{ forever{ next wait:0.3 } } @medusa flag{ forever{ move:1 bounce } } flag{ forever{ next wait:0.5 } } @cranc flag{ say:"Benvinguts!|¡Bienvenidos!",2 forever{ move:2 next wait:0.2 bounce } }', time: 10 },
        nota: "Per a cada animal, demana quins blocs creuen que té. Llegiu-los a sota de la demo per comprovar-ho.|Para cada animal, pide qué bloques creen que tiene. Leedlos debajo de la demo para comprobarlo." },
      { id: 's7', k: 'media', t: 'Compte! Prova cada tros|¡Cuidado! Prueba cada trozo', x: "Al peix de dalt li falta «rebota» i se'n va.|Al pez de arriba le falta «rebota» y se va.",
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -150, y: 40, rot: 'lr' }, { id: 'peix2', art: 'peix', x: -150, y: -60, rot: 'lr', name: 'Peix 2|Pez 2' }] }, prog: '@peix flag{ forever{ move:5 } } @peix2 flag{ forever{ move:5 bounce } }', time: 5 },
        nota: "Si s'hagués programat tot de cop, aquest error es trobaria molt més tard. Provar sovint estalvia temps.|Si se hubiera programado todo de golpe, este error se encontraría mucho más tarde. Probar a menudo ahorra tiempo." },
      { id: 's8', k: 'activitat', t: 'El pla del meu aquari|El plan de mi acuario', timer: 10, punts: ["Dibuixa el tanc i com a mínim 3 animals.|Dibuja el tanque y como mínimo 3 animales.", "Escriu què farà cada animal.|Escribe qué hará cada animal.", "Marca: per sempre? Vestits? Parla?|Marca: ¿por siempre? ¿Disfraces? ¿Habla?", "Numera l'ordre en què els programaràs.|Numera el orden en que los programarás."],
        nota: "Recorda que el dibuix no ha de ser perfecte: el que importa és què farà cada animal.|Recuerda que el dibujo no tiene que ser perfecto: lo que importa es qué hará cada animal." },
      { id: 's9', k: 'activitat', t: "Explica el pla al company/a|Explica el plan al compañero/a", punts: ["Explica què farà cada animal.|Explica qué hará cada animal.", "El company/a fa una pregunta.|El compañero/a hace una pregunta.", "Si cal, millora el pla.|Si hace falta, mejora el plan."],
        nota: "Dona 3 minuts per parella. Les preguntes ajuden a detectar animals sense bucle o sense rebot.|Da 3 minutos por pareja. Las preguntas ayudan a detectar animales sin bucle o sin rebote." },
      { id: 's10', k: 'activitat', t: "A l'ordinador: els trossos|En el ordenador: los trozos", timer: 10, punts: ["Obre la sessió «Projecte: l'aquari».|Abre la sesión «Proyecto: el acuario».", "Fes els tres reptes: l'alga, el peix i el cranc.|Haz los tres retos: el alga, el pez y el cangrejo.", "Són l'entrenament del teu aquari.|Son el entrenamiento de tu acuario."],
        nota: "Al pas del pla de l'app, que toquin «Ho hem fet!»: el pla ja és a la fitxa.|En el paso del plan de la app, que toquen «¡Lo hemos hecho!»: el plan ya está en la ficha." },
      { id: 's11', k: 'repte', t: 'Els tres trossos|Los tres trozos', punts: ["1. L'alga es gronxa per sempre|1. El alga se balancea por siempre", "2. El peix de dos guions|2. El pez de dos guiones", "3. El cranc saluda i camina|3. El cangrejo saluda y camina"],
        nota: "Al tros 3, pregunta si la benvinguda va abans o a dins del bucle.|En el trozo 3, pregunta si la bienvenida va antes o dentro del bucle." },
      { id: 's12', k: 'activitat', t: 'Crea: el meu aquari|Crea: mi acuario', timer: 20, punts: ["Segueix el teu pla, animal a animal.|Sigue tu plan, animal a animal.", "Prova cada animal amb la bandera.|Prueba cada animal con la bandera.", "Marca al pla els que ja funcionen.|Marca en el plan los que ya funcionan.", "Quan acabis, millora'l!|Cuando termines, ¡mejóralo!"],
        nota: "L'app demana com a mínim 3 animals programats, un «per sempre», algun canvi de vestit, una benvinguda i que el peix no surti.|La app pide como mínimo 3 animales programados, un «por siempre», algún cambio de disfraz, una bienvenida y que el pez no salga." },
      { id: 's13', k: 'concepte', t: 'Els blocs que ja coneixes|Los bloques que ya conoces', punts: ["Animar: per sempre { vestit següent, espera }.|Animar: por siempre { disfraz siguiente, espera }.", "Nedar: per sempre { mou-te, rebota }.|Nadar: por siempre { muévete, rebota }.", "Saludar: digues, abans del bucle.|Saludar: di, antes del bucle.", "Dues coses alhora: dos guions.|Dos cosas a la vez: dos guiones."],
        nota: "Deixa-la projectada durant el «Crea» com a xuleta per a qui la necessiti.|Déjala proyectada durante el «Crea» como chuleta para quien la necesite." },
      { id: 's14', k: 'activitat', t: "La galeria de l'aquari|La galería del acuario", punts: ["Ensenya el teu aquari al company/a.|Enseña tu acuario al compañero/a.", "Rep una targeta «M'agrada…».|Recibe una tarjeta «Me gusta…».", "Rep una targeta «Podries provar…».|Recibe una tarjeta «Podrías probar…»."],
        nota: "Modela tu un comentari amable i concret abans de començar.|Modela tú un comentario amable y concreto antes de empezar." },
      { id: 's15', k: 'resum', t: 'Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad', punts: ["Animar amb vestits i esperes.|Animar con disfraces y esperas.", "Repetir amb «repeteix» i «per sempre».|Repetir con «repite» y «por siempre».", "Molts personatges i guions alhora.|Muchos personajes y guiones a la vez.", "Fer un projecte a trossos i provar-lo.|Hacer un proyecto a trozos y probarlo."],
        nota: "Felicita la classe: ja tenen un aquari animat cadascú. A la unitat 3, els personatges respondran quan els toquem.|Felicita a la clase: ya tienen un acuario animado cada uno. En la unidad 3, los personajes responderán cuando los toquemos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Com has construït el teu aquari?|¿Cómo has construido tu acuario?", "Quin error has trobat i com l'has arreglat?|¿Qué error has encontrado y cómo lo has arreglado?"],
        nota: "Guarda les fitxes del pla: són una bona evidència del procés per a l'avaluació.|Guarda las fichas del plan: son una buena evidencia del proceso para la evaluación." }
    ],
    print: [
      { id: 'p1', t: 'Fitxa: el pla del meu aquari|Ficha: el plan de mi acuario', k: 'fitxa',
        intro: "Omple el pla abans de programar. Al dors, dibuixa el tanc amb els animals.|Rellena el plan antes de programar. En el dorso, dibuja el tanque con los animales.",
        items: [
          { q: "Quins animals hi haurà al teu aquari? (com a mínim 3)|¿Qué animales habrá en tu acuario? (como mínimo 3)", sol: "Resposta oberta. Comproveu que n'hi hagi com a mínim 3.|Respuesta abierta. Comprobad que haya como mínimo 3." },
          { q: "Què farà cada animal? (nedar, caminar, gronxar-se, parlar…)|¿Qué hará cada animal? (nadar, caminar, balancearse, hablar…)", sol: "Resposta oberta. Cada animal hauria de tenir almenys una acció clara.|Respuesta abierta. Cada animal debería tener al menos una acción clara." },
          { q: "Quins animals faran servir «per sempre»? Quins canviaran de vestit?|¿Qué animales usarán «por siempre»? ¿Cuáles cambiarán de disfraz?", sol: "Com a mínim un «per sempre» i un animal que canviï de vestit.|Como mínimo un «por siempre» y un animal que cambie de disfraz." },
          { q: "Quin animal dirà la benvinguda? Què dirà?|¿Qué animal dirá la bienvenida? ¿Qué dirá?", sol: "Resposta oberta. La benvinguda va abans del bucle.|Respuesta abierta. La bienvenida va antes del bucle." },
          { q: "En quin ordre programaràs els animals? Numera'ls. Marca'ls amb una creu quan funcionin.|¿En qué orden programarás los animales? Numéralos. Márcalos con una cruz cuando funcionen.", sol: "Recomanació: començar pel més senzill (l'alga).|Recomendación: empezar por el más sencillo (el alga)." }
        ] },
      { id: 'p2', t: 'Targetes de comentaris per a la galeria|Tarjetas de comentarios para la galería', k: 'targetes',
        intro: "Un paquet per parella. Cada alumne/a dona dues targetes al company/a i les completa en veu alta.|Un paquete por pareja. Cada alumno/a da dos tarjetas al compañero/a y las completa en voz alta.",
        items: [
          { t: "M'agrada… perquè… ⭐|Me gusta… porque… ⭐", n: 4 },
          { t: 'Podries provar… 💡|Podrías probar… 💡', n: 4 },
          { t: 'Com has fet que…? ❓|¿Cómo has hecho que…? ❓', n: 2 },
          { t: 'El meu animal preferit és… 🐠|Mi animal preferido es… 🐠', n: 2 }
        ] }
    ]
  }
});

/* ── unitat 3 ── */
/* ===== Numi Tech · guia del professorat · Tech Creadors · unitat 3 «Interacció» =====
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1'].
   Diapositives «media»: l'escenari del curs en marxa (TMEDIA.stage) amb els guions al costat. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Quan toco el personatge… ---------- */
  'g3-1': {
    obj: [
      "L'alumne/a explica què és un esdeveniment i en dona exemples de la vida diària i de l'escenari.|El alumno/a explica qué es un evento y da ejemplos de la vida diaria y del escenario.",
      "L'alumne/a programa un personatge perquè respongui quan algú el toca, amb la capçalera «Quan toco aquest personatge».|El alumno/a programa un personaje para que responda cuando alguien lo toca, con la cabecera «Al tocar este personaje».",
      "L'alumne/a fa servir dos guions en un mateix personatge («Quan comença» i «Quan toco aquest personatge») i diu què fa cadascun.|El alumno/a usa dos guiones en un mismo personaje («Al empezar» y «Al tocar este personaje») y dice qué hace cada uno.",
      "L'alumne/a crea una escena on almenys tres personatges reaccionen de manera diferent quan els toquen.|El alumno/a crea una escena donde al menos tres personajes reaccionan de manera diferente cuando los tocan."
    ],
    comp: [
      "Competència digital (CD5): crear continguts digitals interactius amb programació per blocs|Competencia digital (CD5): crear contenidos digitales interactivos con programación por bloques",
      "Pensament computacional: esdeveniments, guions que esperen i programes que responen a l'usuari|Pensamiento computacional: eventos, guiones que esperan y programas que responden al usuario",
      "Matemàtiques: càlcul mental amb sumes repetides (la mida que creix a cada toc)|Matemáticas: cálculo mental con sumas repetidas (el tamaño que crece en cada toque)",
      "Comunicació oral: descriure causa i efecte («quan passa això, el personatge fa allò»)|Comunicación oral: describir causa y efecto («cuando pasa esto, el personaje hace aquello»)"
    ],
    vocab: [
      ["Esdeveniment|Evento", "Una cosa que passa mentre el programa funciona i que fa començar un guió.|Algo que pasa mientras el programa funciona y que hace empezar un guion."],
      ["Capçalera|Cabecera", "El bloc de dalt d'un guió, que diu quin esdeveniment l'engega.|El bloque de arriba de un guion, que dice qué evento lo pone en marcha."],
      ["Guió|Guion", "Una capçalera i els blocs que té a sota.|Una cabecera y los bloques que tiene debajo."],
      ["Interactiu|Interactivo", "Que respon al que fa qui el fa servir: tocar, prémer, triar.|Que responde a lo que hace quien lo usa: tocar, pulsar, elegir."],
      ["Animació|Animación", "Un programa que es mira: passa igual encara que no toquis res.|Un programa que se mira: pasa igual aunque no toques nada."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Quan toco el personatge…»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Cuando toco el personaje…»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Les targetes de guions retallades (un paquet d'11 targetes per grup de 4)|Las tarjetas de guiones recortadas (un paquete de 11 tarjetas por grupo de 4)"],
      imprimir: ["Targetes: personatges amb timbre|Tarjetas: personajes con timbre"],
      prep: ["Imprimir i retallar les targetes. Cada grup de 4 en necessita un paquet; si es plastifiquen, serveixen per a altres cursos.|Imprimir y recortar las tarjetas. Cada grupo de 4 necesita un paquete; si se plastifican, sirven para otros cursos.",
        "Provar la diapositiva del drac (s9) per veure quan es toca sol a la demo.|Probar la diapositiva del dragón (s9) para ver cuándo se toca solo en la demo.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."]
    },
    plan: [
      { min: 5, t: "Benvinguda: animació o interacció?|Bienvenida: ¿animación o interacción?", fase: 'inici',
        fa: "Recorda l'aquari de la unitat 2: era una animació, es mirava. Pregunta quines coses de casa responen quan les toques (el timbre, l'interruptor, la pantalla del mòbil). Presenta la missió: el bosc dels contes, on els personatges dormen fins que algú els toca.|Recuerda el acuario de la unidad 2: era una animación, se miraba. Pregunta qué cosas de casa responden cuando las tocas (el timbre, el interruptor, la pantalla del móvil). Presenta la misión: el bosque de los cuentos, donde los personajes duermen hasta que alguien los toca.",
        diu: ["L'aquari el miràvem. I si els peixos responguessin quan els toqueu?|El acuario lo mirábamos. ¿Y si los peces respondieran cuando los tocáis?", "Quines coses de casa fan alguna cosa només quan les toqueu?|¿Qué cosas de casa hacen algo solo cuando las tocáis?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és un esdeveniment?|¿Qué es un evento?", fase: 'teoria',
        fa: "Explica l'esdeveniment amb el timbre i l'animació del gat. Mostra la capçalera «Quan toco aquest personatge» i la demo del gat: abans que el toquin a la demo, que la classe digui «ara!». Després, la demo del drac amb dos guions i la diapositiva de l'error típic (els blocs sota «Quan comença»).|Explica el evento con el timbre y la animación del gato. Muestra la cabecera «Al tocar este personaje» y la demo del gato: antes de que lo toquen en la demo, que la clase diga «¡ahora!». Después, la demo del dragón con dos guiones y la diapositiva del error típico (los bloques bajo «Al empezar»).",
        diu: ["El timbre no sona fins que algú el prem. El gat tampoc no mioula fins que algú el toca.|El timbre no suena hasta que alguien lo pulsa. El gato tampoco maúlla hasta que alguien lo toca.", "Quants guions té el drac? Quin esdeveniment espera cadascun?|¿Cuántos guiones tiene el dragón? ¿Qué evento espera cada uno?", "Si poso el «Miau» sota «Quan comença», quan mioularà?|Si pongo el «Miau» bajo «Al empezar», ¿cuándo maullará?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Personatges amb timbre|Personajes con timbre", fase: 'desconnectat',
        fa: "Grups de 4. Reparteix les targetes: cada alumne/a en tria dues i les enganxa (o les deixa) davant seu. Tots fan veure que dormen. Per torns, un alumne/a fa d'«usuari» i prova esdeveniments: toca una espatlla, pica de mans, diu «bandera verda»… Els personatges només es mouen si l'esdeveniment és a una de les seves targetes. A la segona ronda, dona a un grup la targeta de l'error: «Quan comença → dic Miau» i pregunta què passa.|Grupos de 4. Reparte las tarjetas: cada alumno/a elige dos y las pone delante. Todos hacen ver que duermen. Por turnos, un alumno/a hace de «usuario» y prueba eventos: toca un hombro, da una palmada, dice «bandera verde»… Los personajes solo se mueven si el evento está en una de sus tarjetas. En la segunda ronda, da a un grupo la tarjeta del error: «Al empezar → digo Miau» y pregunta qué pasa.",
        diu: ["Només us podeu despertar amb l'esdeveniment de la vostra targeta.|Solo os podéis despertar con el evento de vuestra tarjeta.", "Hi ha hagut un esdeveniment que no ha despertat ningú? Per què?|¿Ha habido algún evento que no ha despertado a nadie? ¿Por qué?", "Qui té «Quan comença»? Llavors, què fa quan dic «bandera verda»?|¿Quién tiene «Al empezar»? Entonces, ¿qué hace cuando digo «bandera verde»?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «Personatges amb timbre» poden tocar «Ho hem fet!» perquè ja l'han fet a classe. Al bosc adormit, demana que expliquin què fa cada personatge i per què la roca no fa res (no té cap guió).|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «Personajes con timbre» pueden tocar «¡Lo hemos hecho!» porque ya lo han hecho en clase. En el bosque dormido, pide que expliquen qué hace cada personaje y por qué la roca no hace nada (no tiene ningún guion).",
        diu: ["Per què la roca no fa res quan la toques?|¿Por qué la roca no hace nada cuando la tocas?", "Toca la pestanya del drac: quin guió té?|Toca la pestaña del dragón: ¿qué guion tiene?"],
        slides: ['s12'], app: "Del recorda fins a «Investiga»: les preguntes, les dues històries, «Descobreix», ordenar què passa, «Personatges amb timbre» (ja fet), el bosc adormit, la pregunta de la mida del drac i el gat que mioula sol.|Del recuerda hasta «Investiga»: las preguntas, las dos historias, «Descubre», ordenar qué pasa, «Personajes con timbre» (ya hecho), el bosque dormido, la pregunta del tamaño del dragón y el gato que maúlla solo.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: personatges que responen|Retos: personajes que responden", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Recorda com funciona «Comença» (proves tu, tocant) i «Comprova» (la prova toca sola). Deixa'ls fer els quatre reptes. Al del drac, explica que hi ha dues proves: si ningú no el toca, no ha de créixer.|Haced la pausa activa juntos. Recuerda cómo funciona «Empieza» (pruebas tú, tocando) y «Comprueba» (la prueba toca sola). Deja que hagan los cuatro retos. En el del dragón, explica que hay dos pruebas: si nadie lo toca, no tiene que crecer.",
        diu: ["Primer prova-ho tu amb «Comença» i el dit. Quan funcioni, «Comprova».|Primero pruébalo tú con «Empieza» y el dedo. Cuando funcione, «Comprueba».", "A la prova 2 ningú no toca el drac: per què es fa gran el teu?|En la prueba 2 nadie toca el dragón: ¿por qué se hace grande el tuyo?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: el gat dormilega, l'ocell i la papallona, el drac que creix i la Tuga.|«Pausa activa» y los cuatro retos: el gato dormilón, el pájaro y la mariposa, el dragón que crece y Tuga.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el bosc que es desperta|Crea: el bosque que se despierta", fase: 'crea',
        fa: "Cada alumne/a programa almenys tres personatges que responguin de manera diferent. Quan el tinguin, el company/a toca els personatges sense mirar els guions i endevina què hi ha programat.|Cada alumno/a programa al menos tres personajes que respondan de manera diferente. Cuando lo tengan, el compañero/a toca los personajes sin mirar los guiones y adivina qué hay programado.",
        diu: ["Que cada personatge sorprengui d'una manera diferent!|¡Que cada personaje sorprenda de una manera diferente!", "Endevina els blocs del company/a només mirant què fa.|Adivina los bloques del compañero/a solo mirando qué hace."],
        slides: ['s15'], app: "Pas «Crea»: El bosc que es desperta.|Paso «Crea»: El bosque que se despierta.", org: "Individual i per parelles|Individual y por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Digueu-me un esdeveniment de l'escenari i un de la vida real.|Decidme un evento del escenario y uno de la vida real."],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa els blocs sota «Quan comença» i espera que el personatge respongui al toc.|Pone los bloques bajo «Al empezar» y espera que el personaje responda al toque.",
        "Pregunta: quan comença aquest guió? Que llegeixi la capçalera en veu alta i decideixi si és l'esdeveniment que vol.|Pregunta: ¿cuándo empieza este guion? Que lea la cabecera en voz alta y decida si es el evento que quiere."],
      ["Programa el personatge equivocat (per exemple, posa els blocs de l'ocell a la papallona).|Programa el personaje equivocado (por ejemplo, pone los bloques del pájaro en la mariposa).",
        "Que miri quina pestanya està marcada a dalt abans de posar blocs. Cada personatge té els seus guions.|Que mire qué pestaña está marcada arriba antes de poner bloques. Cada personaje tiene sus guiones."],
      ["Toca «Comprova» sense haver provat res i no entén què ha fallat.|Toca «Comprueba» sin haber probado nada y no entiende qué ha fallado.",
        "Primer «Comença» i tocar el personatge amb el dit. Si fa el que vol, llavors «Comprova».|Primero «Empieza» y tocar el personaje con el dedo. Si hace lo que quiere, entonces «Comprueba»."],
      ["Al repte del drac, el fa créixer també quan comença, i falla la prova 2.|En el reto del dragón, lo hace crecer también al empezar, y falla la prueba 2.",
        "Pregunta: a la prova 2 ningú no el toca. Quin guió s'executa? Què hi ha en aquell guió que no hi hauria de ser?|Pregunta: en la prueba 2 nadie lo toca. ¿Qué guion se ejecuta? ¿Qué hay en ese guion que no debería estar?"],
      ["A la Tuga posa «mou-te 10» i no arriba a la bandera.|En Tuga pone «muévete 10» y no llega a la bandera.",
        "Que llegeixi l'enunciat: quants passos a cada toc? Quantes vegades la tocaran? Que ho calculi abans de provar.|Que lea el enunciado: ¿cuántos pasos en cada toque? ¿Cuántas veces la tocarán? Que lo calcule antes de probar."]
    ],
    diff: {
      mes: "Afegir a «El bosc que es desperta» un personatge que reaccioni de dues maneres: una quan comença (s'estira) i una altra quan el toquen. O fer que un personatge s'amagui quan el toquen, com si s'espantés.|Añadir a «El bosque que se despierta» un personaje que reaccione de dos maneras: una al empezar (se estira) y otra cuando lo tocan. O hacer que un personaje se esconda cuando lo tocan, como si se asustara.",
      menys: "Treballar amb un sol personatge i un sol bloc al principi («digues»). Tenir a la taula la targeta «Quan em toquen → …» com a recordatori que els blocs van sota aquesta capçalera.|Trabajar con un solo personaje y un solo bloque al principio («di»). Tener en la mesa la tarjeta «Cuando me tocan → …» como recordatorio de que los bloques van bajo esa cabecera."
    },
    aval: {
      ticket: ["Digues un esdeveniment de l'escenari i què fa començar.|Di un evento del escenario y qué hace empezar.", "On poses els blocs perquè un personatge parli quan el toques?|¿Dónde pones los bloques para que un personaje hable cuando lo tocas?"],
      rubric: [
        ["Concepte d'esdeveniment|Concepto de evento", "Explica que un esdeveniment fa començar un guió i en dona exemples propis.|Explica que un evento hace empezar un guion y da ejemplos propios.", "Reconeix el toc com a esdeveniment, però no el relaciona amb la capçalera.|Reconoce el toque como evento, pero no lo relaciona con la cabecera."],
        ["Guions de toc|Guiones de toque", "Posa els blocs a la capçalera correcta i el personatge correcte sense ajuda.|Pone los bloques en la cabecera correcta y el personaje correcto sin ayuda.", "Necessita provar diverses vegades per trobar on van els blocs.|Necesita probar varias veces para encontrar dónde van los bloques."],
        ["Escena interactiva|Escena interactiva", "Tres o més personatges responen de maneres diferents.|Tres o más personajes responden de maneras diferentes.", "Un o dos personatges responen, o tots fan el mateix.|Uno o dos personajes responden, o todos hacen lo mismo."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer l'activitat «Personatges amb timbre»: cadascú escriu dos guions («Quan em toquen l'espatlla → …») i l'altra persona prova els esdeveniments.|En casa, con el móvil, podéis repetir la sesión y hacer la actividad «Personajes con timbre»: cada uno escribe dos guiones («Cuando me tocan el hombro → …») y la otra persona prueba los eventos.",
    slides: [
      { id: 's1', k: 'portada', t: "Quan toco el personatge…|Cuando toco el personaje…", x: "Unitat 3 · Interacció. Avui els personatges del bosc dels contes es despertaran quan els toquis.|Unidad 3 · Interacción. Hoy los personajes del bosque de los cuentos se despertarán cuando los toques.",
        nota: "Presenta la unitat: en quatre sessions passarem de mirar animacions a crear un conte interactiu.|Presenta la unidad: en cuatro sesiones pasaremos de mirar animaciones a crear un cuento interactivo." },
      { id: 's2', k: 'pregunta', t: "Què respon quan el toques?|¿Qué responde cuando lo tocas?", punts: ["El timbre de casa|El timbre de casa", "L'interruptor del llum|El interruptor de la luz", "La pantalla del mòbil|La pantalla del móvil"],
        nota: "Recull més exemples. Fes notar que tots esperen que passi alguna cosa i, llavors, responen.|Recoge más ejemplos. Haz notar que todos esperan que pase algo y, entonces, responden." },
      { id: 's3', k: 'repas', t: "Recordem: l'aquari|Recordemos: el acuario", punts: ["Vestits i «vestit següent» per animar|Disfraces y «disfraz siguiente» para animar", "«Per sempre» i «repeteix»|«Por siempre» y «repite»", "Tot passava sol: era una animació|Todo pasaba solo: era una animación"],
        nota: "Connecta amb la unitat 2: avui hi afegim qui mira l'escenari.|Conecta con la unidad 2: hoy añadimos a quien mira el escenario." },
      { id: 's4', k: 'anim', t: "Un esdeveniment|Un evento", anim: 'g3event', x: "Passa alguna cosa (un toc) i el programa respon (el guió comença).|Pasa algo (un toque) y el programa responde (el guion empieza).",
        nota: "Compara-ho amb el timbre: no sona fins que algú el prem.|Compáralo con el timbre: no suena hasta que alguien lo pulsa." },
      { id: 's5', k: 'concepte', t: "Esdeveniments de l'escenari|Eventos del escenario", punts: ["Quan comença (la bandera verda)|Al empezar (la bandera verde)", "Quan toco aquest personatge|Al tocar este personaje", "Quan premo una tecla (la setmana que ve)|Al pulsar una tecla (la semana que viene)"],
        nota: "La bandera verda ja la coneixen: també és un esdeveniment.|La bandera verde ya la conocen: también es un evento." },
      { id: 's6', k: 'media', t: "El gat que mioula|El gato que maúlla", x: "A la demo, algú toca el gat dues vegades.|En la demo, alguien toca el gato dos veces.",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'gat', art: 'gat', x: 0, y: -50, size: 120 }], input: [{ t: 1, click: 'gat' }, { t: 3.5, click: 'gat' }], time: 6 }, prog: `@gat click{ next say:"Miau!|¡Miau!",1 next }` },
        nota: "Que la classe digui «ara!» quan creguin que el tocaran. Remarca que a cada toc el guió torna a començar.|Que la clase diga «¡ahora!» cuando crean que lo tocarán. Remarca que en cada toque el guion vuelve a empezar." },
      { id: 's7', k: 'pregunta', t: "Prediu|Predice", x: "El drac creix 10 cada vegada que el toques. Comença amb mida 100. El toques 3 vegades: quina mida té?|El dragón crece 10 cada vez que lo tocas. Empieza con tamaño 100. Lo tocas 3 veces: ¿qué tamaño tiene?",
        nota: "Resposta: 130. Cada toc és un esdeveniment nou.|Respuesta: 130. Cada toque es un evento nuevo." },
      { id: 's8', k: 'media', t: "Un personatge, dos guions|Un personaje, dos guiones",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'drac', art: 'drac', x: 0, y: -40 }], input: [{ t: 2.5, click: 'drac' }], time: 6 }, prog: `@drac flag{ say:"Toca'm, si goses!|¡Tócame, si te atreves!",2 } click{ chsize:40 say:"Grrr!|¡Grrr!",2 chsize:-40 }` },
        nota: "Assenyala cada guió quan s'il·lumina. Pregunta quin esdeveniment espera cadascun.|Señala cada guion cuando se ilumina. Pregunta qué evento espera cada uno." },
      { id: 's9', k: 'concepte', t: "Compte!|¡Cuidado!", punts: ["Sota «Quan comença»: passa sol, en començar.|Bajo «Al empezar»: pasa solo, al empezar.", "Sota «Quan toco aquest personatge»: passa quan el toquen.|Bajo «Al tocar este personaje»: pasa cuando lo tocan.", "Abans de posar blocs, mira a quina capçalera vas.|Antes de poner bloques, mira en qué cabecera estás."],
        nota: "Aquest és l'error més freqüent de la sessió: torna-hi quan el vegis a les pantalles.|Este es el error más frecuente de la sesión: vuelve a ello cuando lo veas en las pantallas." },
      { id: 's10', k: 'activitat', t: "Personatges amb timbre|Personajes con timbre", timer: 12, punts: ["Tria dues targetes: són els teus guions.|Elige dos tarjetas: son tus guiones.", "Fes veure que dorms.|Haz ver que duermes.", "Només et mous si passa l'esdeveniment de la teva targeta.|Solo te mueves si pasa el evento de tu tarjeta.", "L'usuari prova esdeveniments, per torns.|El usuario prueba eventos, por turnos."],
        nota: "Tocar l'espatlla amb suavitat. Si algú es mou sense esdeveniment, és un «bug»: el grup el troba.|Tocar el hombro con suavidad. Si alguien se mueve sin evento, es un «bug»: el grupo lo encuentra." },
      { id: 's11', k: 'activitat', t: "Segona ronda: l'error|Segunda ronda: el error", punts: ["Una targeta diu «Quan comença → dic Miau».|Una tarjeta dice «Al empezar → digo Miau».", "Què passa quan dic «bandera verda»?|¿Qué pasa cuando digo «bandera verde»?", "I si et toquen? Respons?|¿Y si te tocan? ¿Respondes?"],
        nota: "Que descobreixin que el personatge mioula en començar i no quan el toquen: és el mateix error que a l'escenari.|Que descubran que el personaje maúlla al empezar y no cuando lo tocan: es el mismo error que en el escenario." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre «Quan toco el personatge…».|Abre «Cuando toco el personaje…».", "Al bosc adormit, toca tots els personatges.|En el bosque dormido, toca todos los personajes.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Passeja i pregunta per la roca: no té cap guió, per això no fa res.|Pasea y pregunta por la roca: no tiene ningún guion, por eso no hace nada." },
      { id: 's13', k: 'concepte', t: "Comença o Comprova?|¿Empieza o Comprueba?", punts: ["«Comença»: proves tu, tocant amb el dit o el ratolí.|«Empieza»: pruebas tú, tocando con el dedo o el ratón.", "«Comprova»: la prova toca sola i diu si funciona.|«Comprueba»: la prueba toca sola y dice si funciona.", "Si hi ha «Prova 1» i «Prova 2», han de funcionar totes dues.|Si hay «Prueba 1» y «Prueba 2», tienen que funcionar las dos."],
        nota: "Explica-ho abans dels reptes: estalvia moltes preguntes.|Explícalo antes de los retos: ahorra muchas preguntas." },
      { id: 's14', k: 'repte', t: "Reptes|Retos", timer: 10, punts: ["1. El gat dormilega|1. El gato dormilón", "2. L'ocell i la papallona|2. El pájaro y la mariposa", "3. El drac que creix (dues proves)|3. El dragón que crece (dos pruebas)", "4. La Tuga, a tocs|4. Tuga, a toques"],
        nota: "Al 3, si falla la prova 2, pregunta què fa el drac quan ningú no el toca.|En el 3, si falla la prueba 2, pregunta qué hace el dragón cuando nadie lo toca." },
      { id: 's15', k: 'activitat', t: "Crea: el bosc que es desperta|Crea: el bosque que se despierta", timer: 5, x: "Almenys 3 personatges que responguin de manera diferent. Després, el company/a endevina què fa cadascun.|Al menos 3 personajes que respondan de manera diferente. Después, el compañero/a adivina qué hace cada uno.",
        nota: "Celebra les respostes originals: un personatge que s'amaga, un que creix, un que vola…|Celebra las respuestas originales: un personaje que se esconde, uno que crece, uno que vuela…" },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un esdeveniment fa començar un guió.|Un evento hace empezar un guion.", "«Quan toco aquest personatge» respon a cada toc.|«Al tocar este personaje» responde a cada toque.", "Un personatge pot tenir molts guions.|Un personaje puede tener muchos guiones."],
        nota: "Anuncia la setmana vinent: les fletxes del teclat.|Anuncia la semana que viene: las flechas del teclado." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Un esdeveniment de l'escenari i què fa començar.|Un evento del escenario y qué hace empezar.", "On van els blocs perquè un personatge parli quan el toques?|¿Dónde van los bloques para que un personaje hable cuando lo tocas?"],
        nota: "Anota qui encara confon les dues capçaleres.|Anota quién todavía confunde las dos cabeceras." }
    ],
    print: [
      { id: 'p1', t: "Targetes: personatges amb timbre|Tarjetas: personajes con timbre", k: 'targetes',
        intro: "Un paquet per grup de 4. Cada targeta és un guió: l'esdeveniment i el que fa el personatge. La targeta de l'error és per a la segona ronda.|Un paquete por grupo de 4. Cada tarjeta es un guion: el evento y lo que hace el personaje. La tarjeta del error es para la segunda ronda.",
        items: [
          { t: "Quan em toquen l'espatlla → em desperto i dic «Bon dia!» 👆|Cuando me tocan el hombro → me despierto y digo «¡Buenos días!» 👆", n: 2 },
          { t: "Quan sento un picament de mans → faig un salt 👏|Cuando oigo una palmada → doy un salto 👏", n: 2 },
          { t: "Quan sento «bandera verda» → m'estiro 🚩|Cuando oigo «bandera verde» → me estiro 🚩", n: 2 },
          { t: "Quan em toquen el cap → faig «miau» 🐱|Cuando me tocan la cabeza → hago «miau» 🐱", n: 2 },
          { t: "Quan sento el meu nom → saludo amb la mà 👋|Cuando oigo mi nombre → saludo con la mano 👋", n: 2 },
          { t: "Error: Quan comença → dic «Miau» (encara que no em toquin) 🐞|Error: Al empezar → digo «Miau» (aunque no me toquen) 🐞", n: 1 }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Les fletxes del teclat ---------- */
  'g3-2': {
    obj: [
      "L'alumne/a programa un guió per a cada fletxa del teclat amb la capçalera «Quan premo la tecla».|El alumno/a programa un guion para cada flecha del teclado con la cabecera «Al pulsar la tecla».",
      "L'alumne/a fa servir «apunta en direcció» amb els valors 90, -90, 0 i 180 i explica cap on mira el personatge.|El alumno/a usa «apunta en dirección» con los valores 90, -90, 0 y 180 y explica hacia dónde mira el personaje.",
      "L'alumne/a explica per què no cal (ni convé) un «per sempre» dins del guió d'una tecla.|El alumno/a explica por qué no hace falta (ni conviene) un «por siempre» dentro del guion de una tecla.",
      "L'alumne/a troba i arregla un error de direcció en un comandament.|El alumno/a encuentra y arregla un error de dirección en un mando."
    ],
    comp: [
      "Competència digital (CD5): programar el control d'un personatge amb el teclat|Competencia digital (CD5): programar el control de un personaje con el teclado",
      "Pensament computacional: esdeveniments de teclat, un guió per esdeveniment i depuració|Pensamiento computacional: eventos de teclado, un guion por evento y depuración",
      "Matemàtiques (sentit espacial): direccions en graus, orientació absoluta (com una brúixola)|Matemáticas (sentido espacial): direcciones en grados, orientación absoluta (como una brújula)",
      "Educació física: lateralitat i orientació a l'espai|Educación física: lateralidad y orientación en el espacio"
    ],
    vocab: [
      ["Tecla|Tecla", "Un botó del teclat; prémer-la és un esdeveniment.|Un botón del teclado; pulsarla es un evento."],
      ["Direcció|Dirección", "Cap on mira el personatge: 90 dreta, -90 esquerra, 0 amunt, 180 avall.|Hacia dónde mira el personaje: 90 derecha, -90 izquierda, 0 arriba, 180 abajo."],
      ["Apuntar|Apuntar", "Fer que el personatge miri cap a una direcció, sense moure'l.|Hacer que el personaje mire hacia una dirección, sin moverlo."],
      ["Comandament|Mando", "Els guions de les tecles que fan moure un personatge.|Los guiones de las teclas que hacen mover a un personaje."],
      ["Mantenir premut|Mantener pulsado", "No deixar anar la tecla: el guió es repeteix sol.|No soltar la tecla: el guion se repite solo."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb la sessió «Les fletxes del teclat»|Un ordenador por alumno/a con la sesión «Las flechas del teclado»", "Projector i la presentació de la sessió|Proyector y la presentación de la sesión",
        "Quatre fulls grans amb els números 0, 90, 180 i -90 enganxats a les quatre parets de l'aula|Cuatro hojas grandes con los números 0, 90, 180 y -90 pegadas en las cuatro paredes del aula"],
      imprimir: ["Targetes: el comandament humà|Tarjetas: el mando humano"],
      prep: ["Enganxar els números de direcció a les parets: 90 a la dreta de la pissarra, -90 a l'esquerra, 0 a la pissarra i 180 al fons.|Pegar los números de dirección en las paredes: 90 a la derecha de la pizarra, -90 a la izquierda, 0 en la pizarra y 180 al fondo.",
        "Imprimir i retallar un paquet de targetes per parella.|Imprimir y recortar un paquete de tarjetas por pareja.",
        "Comprovar que els teclats tenen les fletxes i que el so de l'app està baix.|Comprobar que los teclados tienen las flechas y que el sonido de la app está bajo."]
    },
    plan: [
      { min: 5, t: "Benvinguda: el cavaller i el comandament|Bienvenida: el caballero y el mando", fase: 'inici',
        fa: "Repassa la sessió anterior amb dues preguntes ràpides. Presenta la missió: el cavaller ha de travessar el bosc i el comandament són les fletxes. Pregunta quins aparells es controlen amb fletxes o botons.|Repasa la sesión anterior con dos preguntas rápidas. Presenta la misión: el caballero tiene que cruzar el bosque y el mando son las flechas. Pregunta qué aparatos se controlan con flechas o botones.",
        diu: ["La setmana passada, quin esdeveniment despertava el gat?|La semana pasada, ¿qué evento despertaba al gato?", "Avui l'esdeveniment serà prémer una tecla.|Hoy el evento será pulsar una tecla."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Tecles i direccions|Teclas y direcciones", fase: 'teoria',
        fa: "Mostra l'animació de les tecles i la de les direccions. Tothom dret: quan dius un número, es giren cap a la paret que el porta. Després, la demo de les quatre fletxes i la de l'error del «per sempre».|Muestra la animación de las teclas y la de las direcciones. Todos de pie: cuando dices un número, se giran hacia la pared que lo lleva. Después, la demo de las cuatro flechas y la del error del «por siempre».",
        diu: ["90! -90! 0! 180! On mireu?|¡90! ¡-90! ¡0! ¡180! ¿Hacia dónde miráis?", "Si mires a la dreta i fas «mou-te», cap on vas?|Si miras a la derecha y haces «muévete», ¿hacia dónde vas?", "He premut la fletxa un moment. Per què el cavaller no para?|He pulsado la flecha un momento. ¿Por qué el caballero no para?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El comandament humà|El mando humano", fase: 'desconnectat',
        fa: "Per parelles: un és el comandament, amb les targetes de fletxa; l'altre, el personatge. El comandament ensenya una targeta i el personatge primer es gira cap a la paret del número i després fa un pas. Han d'arribar a un objecte de l'aula. Després de dues missions, canvien. A la tercera, el comandament fa servir la targeta de l'error («← apunta a 90»): què passa?|Por parejas: uno es el mando, con las tarjetas de flecha; el otro, el personaje. El mando enseña una tarjeta y el personaje primero se gira hacia la pared del número y después da un paso. Tienen que llegar a un objeto del aula. Después de dos misiones, cambian. En la tercera, el mando usa la tarjeta del error («← apunta a 90»): ¿qué pasa?",
        diu: ["Primer gira't cap al número i després fes el pas.|Primero gírate hacia el número y después da el paso.", "Fixeu-vos: 90 sempre és la mateixa paret, miris on miris.|Fijaos: 90 siempre es la misma pared, mires donde mires.", "Amb la targeta de l'error, cap on vas quan el comandament diu «esquerra»?|Con la tarjeta del error, ¿hacia dónde vas cuando el mando dice «izquierda»?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 13, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. Al «Comandament humà» poden tocar «Ho hem fet!». A la prova del comandament, que facin servir el teclat i que mirin com es gira el cavaller amb la fletxa esquerra.|Avanzan hasta la pausa activa. En el «Mando humano» pueden tocar «¡Lo hemos hecho!». En la prueba del mando, que usen el teclado y que miren cómo se gira el caballero con la flecha izquierda.",
        diu: ["Mantén la fletxa premuda: què passa?|Mantén la flecha pulsada: ¿qué pasa?", "Què fa la tecla espai? Mira el seu guió.|¿Qué hace la tecla espacio? Mira su guion."],
        slides: ['s11'], app: "Del recorda fins a «Investiga»: preguntes, història, «Descobreix», ordenar el guió de l'esquerra, «El comandament humà» (ja fet), provar el comandament, la pregunta del cavaller sense «apunta» i el «per sempre» que no para.|Del recuerda hasta «Investiga»: preguntas, historia, «Descubre», ordenar el guion de la izquierda, «El mando humano» (ya hecho), probar el mando, la pregunta del caballero sin «apunta» y el «por siempre» que no para.", org: "Individual|Individual" },
      { min: 12, t: "Reptes: el comandament|Retos: el mando", fase: 'ordinador',
        fa: "Pausa activa junts. Recorda que els reptes es proven amb el teclat i es comproven amb «Comprova» (les tecles es premen soles). Remarca que al repte de l'ocell cal «mou-te 10 passos», perquè la prova prem les tecles un temps concret.|Pausa activa juntos. Recuerda que los retos se prueban con el teclado y se comprueban con «Comprueba» (las teclas se pulsan solas). Remarca que en el reto del pájaro hace falta «muévete 10 pasos», porque la prueba pulsa las teclas un tiempo concreto.",
        diu: ["Quan va a l'esquerra, el cavaller mira a l'esquerra? Si no, què falta?|Cuando va a la izquierda, ¿el caballero mira a la izquierda? Si no, ¿qué falta?", "Al comandament espatllat, quin número està malament?|En el mando estropeado, ¿qué número está mal?"],
        slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes: cap a la bandera, la poma i la cistella, l'ocell missatger i el comandament espatllat.|«Pausa activa» y los cuatro retos: hacia la bandera, la manzana y la cesta, el pájaro mensajero y el mando estropeado.", org: "Tot el grup i individual|Todo el grupo e individual" },
      { min: 5, t: "Crea: el comandament de la Flama|Crea: el mando de Flama", fase: 'crea',
        fa: "Programen les quatre fletxes i una sorpresa amb l'espai. Després, intercanvien l'ordinador amb el company/a i proven el comandament de l'altre.|Programan las cuatro flechas y una sorpresa con el espacio. Después, intercambian el ordenador con el compañero/a y prueban el mando del otro.",
        diu: ["Quina sorpresa farà la teva Flama amb l'espai?|¿Qué sorpresa hará tu Flama con el espacio?"],
        slides: ['s14'], app: "Pas «Crea»: El meu personatge amb comandament.|Paso «Crea»: Mi personaje con mando.", org: "Individual i parelles|Individual y parejas" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Resum, preguntes finals i tiquet a la porta.|Resumen, preguntas finales y ticket en la puerta.",
        diu: ["Quants guions calen per a les quatre fletxes?|¿Cuántos guiones hacen falta para las cuatro flechas?"],
        slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir «mou-te -10» per anar a l'esquerra i el personatge camina d'esquena.|Usa «muévete -10» para ir a la izquierda y el personaje camina de espaldas.",
        "Funciona a mitges: pregunta cap on mira. Que provi «apunta en direcció -90» i compari com es veu.|Funciona a medias: pregunta hacia dónde mira. Que pruebe «apunta en dirección -90» y compare cómo se ve."],
      ["Posa un «per sempre» dins del guió de la tecla i el personatge no s'atura.|Pone un «por siempre» dentro del guion de la tecla y el personaje no se para.",
        "Que mantingui la fletxa premuda sense el «per sempre»: el guió ja es repeteix sol mentre la prem.|Que mantenga la flecha pulsada sin el «por siempre»: el guion ya se repite solo mientras la pulsa."],
      ["Confon 0 i 90 (creu que 0 és la dreta).|Confunde 0 y 90 (cree que 0 es la derecha).",
        "Que miri les parets de l'aula o l'animació de la brúixola: 0 és amunt, com les 12 del rellotge.|Que mire las paredes del aula o la animación de la brújula: 0 es arriba, como las 12 del reloj."],
      ["Programa totes les tecles sota la mateixa capçalera.|Programa todas las teclas bajo la misma cabecera.",
        "Cada fletxa té el seu guió: que llegeixi la capçalera de cada guió en veu alta.|Cada flecha tiene su guion: que lea la cabecera de cada guion en voz alta."],
      ["Canvia el número de «mou-te» i després falla «Comprova» a l'ocell.|Cambia el número de «muévete» y después falla «Comprueba» en el pájaro.",
        "La prova prem cada tecla un temps fix: amb passos més petits no hi arriba. Que torni a «mou-te 10 passos».|La prueba pulsa cada tecla un tiempo fijo: con pasos más pequeños no llega. Que vuelva a «muévete 10 pasos»."]
    ],
    diff: {
      mes: "Afegir al comandament de la Flama la tecla espai per fer un «salt»: apunta amunt, avança, espera i torna avall. O canviar de vestit a cada pas perquè sembli que camina.|Añadir al mando de Flama la tecla espacio para hacer un «salto»: apunta arriba, avanza, espera y vuelve abajo. O cambiar de disfraz en cada paso para que parezca que camina.",
      menys: "Començar només amb la fletxa dreta i tenir la brúixola de direccions impresa a la taula. Fer el comandament humà abans de cada repte.|Empezar solo con la flecha derecha y tener la brújula de direcciones impresa en la mesa. Hacer el mando humano antes de cada reto."
    },
    aval: {
      ticket: ["Quin número fa mirar un personatge a l'esquerra? I amunt?|¿Qué número hace mirar a un personaje a la izquierda? ¿Y arriba?", "Per què no cal un «per sempre» al guió d'una fletxa?|¿Por qué no hace falta un «por siempre» en el guion de una flecha?"],
      rubric: [
        ["Direccions|Direcciones", "Fa servir 90, -90, 0 i 180 correctament sense ajuda.|Usa 90, -90, 0 y 180 correctamente sin ayuda.", "Necessita la brúixola per triar el número.|Necesita la brújula para elegir el número."],
        ["Guions de tecla|Guiones de tecla", "Fa un guió per tecla amb «apunta» i «mou-te».|Hace un guion por tecla con «apunta» y «muévete».", "Barreja tecles o fa servir «mou-te» negatiu.|Mezcla teclas o usa «muévete» negativo."],
        ["Depuració|Depuración", "Troba sol/a l'error del comandament espatllat.|Encuentra solo/a el error del mando estropeado.", "El troba amb una pregunta guia.|Lo encuentra con una pregunta guía."]
      ]
    },
    casa: "A casa, feu «El comandament humà»: trieu quina paret és cada direcció i porteu el personatge fins a la cuina només amb fletxes.|En casa, haced «El mando humano»: elegid qué pared es cada dirección y llevad al personaje hasta la cocina solo con flechas.",
    slides: [
      { id: 's1', k: 'portada', t: "Les fletxes del teclat|Las flechas del teclado", x: "El cavaller ha de travessar el bosc i el comandament el tens tu.|El caballero tiene que cruzar el bosque y el mando lo tienes tú.", nota: "Presenta l'objectiu: un personatge que es mou amb les quatre fletxes.|Presenta el objetivo: un personaje que se mueve con las cuatro flechas." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["Un esdeveniment fa començar un guió.|Un evento hace empezar un guion.", "«Quan toco aquest personatge» respon a cada toc.|«Al tocar este personaje» responde a cada toque."], nota: "Dues preguntes ràpides a l'atzar.|Dos preguntas rápidas al azar." },
      { id: 's3', k: 'pregunta', t: "Què es controla amb fletxes?|¿Qué se controla con flechas?", punts: ["Un cotxe teledirigit|Un coche teledirigido", "Els personatges dels videojocs|Los personajes de los videojuegos", "El menú de la tele|El menú de la tele"], nota: "Recull exemples: totes són tecles que fan començar alguna cosa.|Recoge ejemplos: todas son teclas que hacen empezar algo." },
      { id: 's4', k: 'anim', t: "Cada tecla, un esdeveniment|Cada tecla, un evento", anim: 'g3keys', nota: "Fes notar que el guió canvia segons la fletxa que es prem.|Haz notar que el guion cambia según la flecha que se pulsa." },
      { id: 's5', k: 'anim', t: "Cap on mira?|¿Hacia dónde mira?", anim: 'g3dir', x: "90 dreta · -90 esquerra · 0 amunt · 180 avall|90 derecha · -90 izquierda · 0 arriba · 180 abajo", nota: "Tothom dret: digues números i que es girin cap a la paret.|Todos de pie: di números y que se giren hacia la pared." },
      { id: 's6', k: 'media', t: "Quatre fletxes, quatre guions|Cuatro flechas, cuatro guiones",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'cavaller', art: 'cavaller', x: -100, y: -60 }], keys: ['left', 'right', 'up', 'down'], input: [{ t: .5, key: 'right', dur: 1.2 }, { t: 2, key: 'up', dur: .8 }, { t: 3.2, key: 'left', dur: 1.2 }, { t: 4.8, key: 'down', dur: .8 }], time: 6.5 }, prog: `@cavaller key:right{ point:90 move:10 } key:left{ point:-90 move:10 } key:up{ point:0 move:10 } key:down{ point:180 move:10 }` },
        nota: "Abans de cada tram, que diguin quina fletxa s'està prement.|Antes de cada tramo, que digan qué flecha se está pulsando." },
      { id: 's7', k: 'pregunta', t: "Prediu|Predice", x: "El cavaller mira a la dreta. La fletxa esquerra només té «mou-te 10 passos». Cap on va?|El caballero mira a la derecha. La flecha izquierda solo tiene «muévete 10 pasos». ¿Hacia dónde va?", nota: "Resposta: a la dreta! «Mou-te» avança cap on mira.|Respuesta: ¡a la derecha! «Muévete» avanza hacia donde mira." },
      { id: 's8', k: 'media', t: "Compte: el «per sempre»|Cuidado: el «por siempre»",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'cavaller', art: 'cavaller', x: -170, y: -60 }], keys: ['right'], input: [{ t: .8, key: 'right', dur: .2 }], time: 4.5 }, prog: `@cavaller key:right{ point:90 forever{ move:4 } }` },
        nota: "Només s'ha premut un moment i no para mai. Dins el guió de la tecla no hi ha d'haver «per sempre».|Solo se ha pulsado un momento y no para nunca. Dentro del guion de la tecla no tiene que haber «por siempre»." },
      { id: 's9', k: 'activitat', t: "El comandament humà|El mando humano", timer: 12, punts: ["Comandament: ensenya una targeta de fletxa.|Mando: enseña una tarjeta de flecha.", "Personatge: gira't cap a la paret del número.|Personaje: gírate hacia la pared del número.", "Després, fes un pas.|Después, da un paso.", "Arribeu a l'objecte i canvieu els papers.|Llegad al objeto y cambiad los papeles."], nota: "Passos curts i a poc a poc. Vigila que primer es girin i després avancin.|Pasos cortos y despacio. Vigila que primero se giren y después avancen." },
      { id: 's10', k: 'activitat', t: "La targeta de l'error|La tarjeta del error", punts: ["La targeta diu «← apunta a 90».|La tarjeta dice «← apunta a 90».", "Què passa quan el comandament prem l'esquerra?|¿Qué pasa cuando el mando pulsa la izquierda?", "Com l'arreglaríeu?|¿Cómo la arreglaríais?"], nota: "És el mateix error que el del repte del comandament espatllat.|Es el mismo error que el del reto del mando estropeado." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre «Les fletxes del teclat».|Abre «Las flechas del teclado».", "Prova el comandament amb el teclat.|Prueba el mando con el teclado.", "Para a la «Pausa activa».|Para en la «Pausa activa»."], nota: "Al mòbil o la tauleta hi ha botons de fletxa sota l'escenari.|En el móvil o la tableta hay botones de flecha debajo del escenario." },
      { id: 's12', k: 'concepte', t: "Provar i comprovar|Probar y comprobar", punts: ["«Comença»: mous tu el personatge amb el teclat.|«Empieza»: mueves tú el personaje con el teclado.", "«Comprova»: les tecles es premen soles.|«Comprueba»: las teclas se pulsan solas.", "Fes servir «mou-te 10 passos».|Usa «muévete 10 pasos»."], nota: "La prova prem cada tecla un temps fix: amb un altre número de passos pot no arribar.|La prueba pulsa cada tecla un tiempo fijo: con otro número de pasos puede no llegar." },
      { id: 's13', k: 'repte', t: "Reptes|Retos", timer: 12, punts: ["1. Cap a la bandera|1. Hacia la bandera", "2. La poma i la cistella|2. La manzana y la cesta", "3. L'ocell missatger (4 fletxes)|3. El pájaro mensajero (4 flechas)", "4. El comandament espatllat|4. El mando estropeado"], nota: "Al 2, si falla, pregunta cap on mira el cavaller quan arriba a la cistella.|En el 2, si falla, pregunta hacia dónde mira el caballero cuando llega a la cesta." },
      { id: 's14', k: 'activitat', t: "Crea: el comandament de la Flama|Crea: el mando de Flama", timer: 5, x: "Quatre fletxes i una sorpresa amb l'espai. Després, prova el del company/a.|Cuatro flechas y una sorpresa con el espacio. Después, prueba el del compañero/a.", nota: "Que diguin quina sorpresa han triat abans de mostrar-la.|Que digan qué sorpresa han elegido antes de mostrarla." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Cada tecla pot tenir el seu guió.|Cada tecla puede tener su guion.", "«Apunta» fa mirar; «mou-te» fa avançar.|«Apunta» hace mirar; «muévete» hace avanzar.", "Mantenir la tecla repeteix el guió.|Mantener la tecla repite el guion."], nota: "Anuncia la setmana vinent: personatges que parlen entre ells.|Anuncia la semana que viene: personajes que hablan entre ellos." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quin número és l'esquerra? I amunt?|¿Qué número es la izquierda? ¿Y arriba?", "Per què no cal «per sempre» a la fletxa?|¿Por qué no hace falta «por siempre» en la flecha?"], nota: "Anota qui encara confon 0 i 90.|Anota quién todavía confunde 0 y 90." }
    ],
    print: [
      { id: 'p1', t: "Targetes: el comandament humà|Tarjetas: el mando humano", k: 'targetes',
        intro: "Un paquet per parella. Abans de començar, enganxeu els números 0, 90, 180 i -90 a les parets.|Un paquete por pareja. Antes de empezar, pegad los números 0, 90, 180 y -90 en las paredes.",
        items: [
          { t: "→ Fletxa dreta: apunta a 90 i fes un pas ➡️|→ Flecha derecha: apunta a 90 y da un paso ➡️", n: 3 },
          { t: "← Fletxa esquerra: apunta a -90 i fes un pas ⬅️|← Flecha izquierda: apunta a -90 y da un paso ⬅️", n: 3 },
          { t: "↑ Fletxa amunt: apunta a 0 i fes un pas ⬆️|↑ Flecha arriba: apunta a 0 y da un paso ⬆️", n: 3 },
          { t: "↓ Fletxa avall: apunta a 180 i fes un pas ⬇️|↓ Flecha abajo: apunta a 180 y da un paso ⬇️", n: 3 },
          { t: "Espai: saluda i digues «Endavant!» 👋|Espacio: saluda y di «¡Adelante!» 👋", n: 1 },
          { t: "Error: ← Fletxa esquerra: apunta a 90 i fes un pas 🐞|Error: ← Flecha izquierda: apunta a 90 y da un paso 🐞", n: 1 }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Missatges entre personatges ---------- */
  'g3-3': {
    obj: [
      "L'alumne/a explica què fan «envia el missatge» i «Quan rebo el missatge» i que tots els personatges senten el missatge.|El alumno/a explica qué hacen «envía el mensaje» y «Al recibir el mensaje» y que todos los personajes oyen el mensaje.",
      "L'alumne/a programa un diàleg per torns: cada personatge parla i després envia un missatge.|El alumno/a programa un diálogo por turnos: cada personaje habla y después envía un mensaje.",
      "L'alumne/a fa que diversos personatges reaccionin a un sol missatge i que un personatge amagat aparegui.|El alumno/a hace que varios personajes reaccionen a un solo mensaje y que un personaje escondido aparezca.",
      "L'alumne/a detecta errors de missatges: un nom que no coincideix o un missatge enviat massa d'hora.|El alumno/a detecta errores de mensajes: un nombre que no coincide o un mensaje enviado demasiado pronto."
    ],
    comp: [
      "Competència digital (CD5): programar la comunicació entre objectes d'un programa|Competencia digital (CD5): programar la comunicación entre objetos de un programa",
      "Pensament computacional: missatges, sincronització i paral·lelisme|Pensamiento computacional: mensajes, sincronización y paralelismo",
      "Llengua: escriure diàlegs breus amb torns de paraula|Lengua: escribir diálogos breves con turnos de palabra",
      "Educació artística (teatre): assajar una escena amb entrades i rèpliques|Educación artística (teatro): ensayar una escena con entradas y réplicas"
    ],
    vocab: [
      ["Missatge|Mensaje", "Un avís amb nom que un personatge envia i que senten tots.|Un aviso con nombre que un personaje envía y que oyen todos."],
      ["Enviar|Enviar", "Fer sonar el missatge perquè els altres el rebin.|Hacer sonar el mensaje para que los demás lo reciban."],
      ["Rebre|Recibir", "Sentir el missatge; si tens un guió amb aquell nom, comença.|Oír el mensaje; si tienes un guion con ese nombre, empieza."],
      ["Diàleg|Diálogo", "Una conversa on cada personatge parla quan li toca.|Una conversación donde cada personaje habla cuando le toca."],
      ["Torn|Turno", "El moment en què li toca parlar a un personatge.|El momento en que le toca hablar a un personaje."],
      ["Mostrar i amagar|Mostrar y esconder", "Fer aparèixer o desaparèixer un personatge de l'escenari.|Hacer aparecer o desaparecer a un personaje del escenario."]
    ],
    mat: {
      aula: ["Ordinadors amb la sessió «Missatges entre personatges»|Ordenadores con la sesión «Mensajes entre personajes»", "Projector i la presentació|Proyector y la presentación", "Les targetes del teatre dels missatges (un paquet per grup de 4)|Las tarjetas del teatro de los mensajes (un paquete por grupo de 4)"],
      imprimir: ["Targetes: el teatre dels missatges|Tarjetas: el teatro de los mensajes"],
      prep: ["Retallar les targetes i separar-les per personatges (Narrador/a, Guida, Tuga, Ocell).|Recortar las tarjetas y separarlas por personajes (Narrador/a, Guida, Tuga, Pájaro).",
        "Preparar un espai lliure davant la pissarra per fer de teatre.|Preparar un espacio libre delante de la pizarra para hacer de teatro.",
        "Provar la demo de la conversa (s6) per saber quan s'il·lumina cada guió.|Probar la demo de la conversación (s6) para saber cuándo se ilumina cada guion."]
    },
    plan: [
      { min: 5, t: "Benvinguda: parlen alhora!|Bienvenida: ¡hablan a la vez!", fase: 'inici',
        fa: "Repassa les direccions. Fes parlar dos alumnes alhora una frase cadascun: no s'entén res. Pregunta com se sap, en una obra de teatre, quan et toca parlar.|Repasa las direcciones. Haz hablar a dos alumnos a la vez una frase cada uno: no se entiende nada. Pregunta cómo se sabe, en una obra de teatro, cuándo te toca hablar.",
        diu: ["Al teatre, com sabeu quan us toca parlar?|En el teatro, ¿cómo sabéis cuándo os toca hablar?", "Avui els personatges aprendran a avisar-se.|Hoy los personajes aprenderán a avisarse."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Enviar i rebre|Enviar y recibir", fase: 'teoria',
        fa: "Explica el missatge amb l'animació: dir un nom en veu alta que tothom sent. Mostra la conversa per torns i la demo. Després, un missatge per a molts (amb mostra't i amaga't) i l'error del nom que no coincideix.|Explica el mensaje con la animación: decir un nombre en voz alta que todos oyen. Muestra la conversación por turnos y la demo. Después, un mensaje para muchos (con muéstrate y escóndete) y el error del nombre que no coincide.",
        diu: ["Qui sent el missatge? I qui hi reacciona?|¿Quién oye el mensaje? ¿Y quién reacciona?", "Per què la Tuga no respon a la demo de l'error?|¿Por qué Tuga no responde en la demo del error?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El teatre dels missatges|El teatro de los mensajes", fase: 'desconnectat',
        fa: "Grups de 4, cadascú amb les targetes d'un personatge. Cada targeta diu «Quan rebo X → dic … i envio Y». El narrador/a comença. Ningú no pot parlar si no ha rebut el seu missatge (dit en veu alta per qui l'envia). Representen l'escena dues vegades. A la tercera, canvia una targeta per la de l'error («envio hola» en lloc de «envio tuga»): l'escena s'encalla i el grup ha de trobar per què.|Grupos de 4, cada uno con las tarjetas de un personaje. Cada tarjeta dice «Cuando recibo X → digo … y envío Y». El narrador/a empieza. Nadie puede hablar si no ha recibido su mensaje (dicho en voz alta por quien lo envía). Representan la escena dos veces. En la tercera, cambia una tarjeta por la del error («envío hola» en lugar de «envío tuga»): la escena se atasca y el grupo tiene que encontrar por qué.",
        diu: ["Digueu el missatge ben fort: és el senyal de l'altre.|Decid el mensaje bien fuerte: es la señal del otro.", "Algú ha parlat sense rebre el seu missatge? Això és un bug!|¿Alguien ha hablado sin recibir su mensaje? ¡Eso es un bug!", "Per què s'ha encallat l'escena?|¿Por qué se ha atascado la escena?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. A l'assaig de la Guida i la Tuga, que obrin les pestanyes i expliquin a un company/a qui envia cada missatge.|Avanzan hasta la pausa activa. En el ensayo de Guida y Tuga, que abran las pestañas y expliquen a un compañero/a quién envía cada mensaje.",
        diu: ["Quin missatge fa que l'ocell es mogui?|¿Qué mensaje hace que el pájaro se mueva?", "Per què parlen alhora a l'«Investiga»?|¿Por qué hablan a la vez en el «Investiga»?"],
        slides: ['s12'], app: "Del recorda fins a «Investiga»: preguntes, història, «Descobreix», ordenar la conversa, «La paraula secreta» (per a casa), l'assaig, la pregunta de qui reacciona i l'«envia» massa d'hora.|Del recuerda hasta «Investiga»: preguntas, historia, «Descubre», ordenar la conversación, «La palabra secreta» (para casa), el ensayo, la pregunta de quién reacciona y el «envía» demasiado pronto.", org: "Individual|Individual" },
      { min: 12, t: "Reptes: converses i sorpreses|Retos: conversaciones y sorpresas", fase: 'ordinador',
        fa: "Pausa activa junts. Després, els quatre reptes. Al de la conversa de tres torns, recomana fer primer la Guida i després la Tuga, i comprovar-ho a cada pas.|Pausa activa juntos. Después, los cuatro retos. En el de la conversación de tres turnos, recomienda hacer primero a Guida y después a Tuga, y comprobarlo en cada paso.",
        diu: ["Quin missatge espera la Tuga? Quin envia la Guida?|¿Qué mensaje espera Tuga? ¿Cuál envía Guida?", "L'Estel és amagada: quin bloc la fa aparèixer?|Estel está escondida: ¿qué bloque la hace aparecer?"],
        slides: ['s13'], app: "«Pausa activa» i els reptes: la Tuga saluda, la conversa de tres torns, la sorpresa del regal i el missatge equivocat.|«Pausa activa» y los retos: Tuga saluda, la conversación de tres turnos, la sorpresa del regalo y el mensaje equivocado.", org: "Individual|Individual" },
      { min: 5, t: "Crea: l'assaig de la funció|Crea: el ensayo de la función", fase: 'crea',
        fa: "Escriuen una conversa de quatre frases o més. Per parelles, un llegeix en veu alta la conversa de l'altre mentre s'executa.|Escriben una conversación de cuatro frases o más. Por parejas, uno lee en voz alta la conversación del otro mientras se ejecuta.",
        diu: ["Cada frase acaba amb un missatge que passa el torn.|Cada frase termina con un mensaje que pasa el turno."],
        slides: ['s14'], app: "Pas «Crea»: L'assaig de la funció.|Paso «Crea»: El ensayo de la función.", org: "Individual i parelles|Individual y parejas" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament', fa: "Resum, preguntes finals i tiquet.|Resumen, preguntas finales y ticket.",
        diu: ["Qui sent un missatge quan l'envio?|¿Quién oye un mensaje cuando lo envío?"], slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa l'«envia» abans del «digues» i els personatges parlen alhora.|Pone el «envía» antes del «di» y los personajes hablan a la vez.",
        "Que digui la conversa en veu alta: quan avisa la Guida la Tuga, abans o després de parlar?|Que diga la conversación en voz alta: ¿cuándo avisa Guida a Tuga, antes o después de hablar?"],
      ["Envia un missatge amb un nom diferent del que espera l'altre personatge.|Envía un mensaje con un nombre diferente del que espera el otro personaje.",
        "Que posi el dit al nom de l'«envia» i al de la capçalera «Quan rebo» de l'altre: són iguals?|Que ponga el dedo en el nombre del «envía» y en el de la cabecera «Al recibir» del otro: ¿son iguales?"],
      ["Fa servir «digues» sense segons i l'«envia» arriba immediatament.|Usa «di» sin segundos y el «envía» llega inmediatamente.",
        "Fes-li notar el «durant 2 s» del bloc «digues»: sense temps, la frase s'acaba de seguida.|Hazle notar el «durante 2 s» del bloque «di»: sin tiempo, la frase se acaba enseguida."],
      ["Programa la Estel amb «Quan toco aquest personatge», però com que és amagada, ningú no la pot tocar.|Programa a Estel con «Al tocar este personaje», pero como está escondida, nadie la puede tocar.",
        "Pregunta: què ha de passar perquè aparegui? Quin esdeveniment és?|Pregunta: ¿qué tiene que pasar para que aparezca? ¿Qué evento es?"],
      ["Creu que el missatge només el sent el personatge del costat.|Cree que el mensaje solo lo oye el personaje de al lado.",
        "Torna a la demo d'«Un per a tots»: tots el senten, però només reaccionen els que tenen el guió.|Vuelve a la demo de «Uno para todos»: todos lo oyen, pero solo reaccionan los que tienen el guion."]
    ],
    diff: {
      mes: "Afegir un tercer personatge a l'assaig (l'ocell) que parli quan rep un missatge, i acabar amb un missatge «final» perquè tots facin la reverència alhora.|Añadir un tercer personaje al ensayo (el pájaro) que hable cuando recibe un mensaje, y terminar con un mensaje «final» para que todos hagan la reverencia a la vez.",
      menys: "Fer primer la conversa amb les targetes de paper damunt la taula i després copiar-la a blocs. Començar amb només dues frases.|Hacer primero la conversación con las tarjetas de papel sobre la mesa y después copiarla a bloques. Empezar con solo dos frases."
    },
    aval: {
      ticket: ["Què fa el bloc «envia el missatge»? Qui el sent?|¿Qué hace el bloque «envía el mensaje»? ¿Quién lo oye?", "On poses l'«envia» en una frase del diàleg, abans o després del «digues»?|¿Dónde pones el «envía» en una frase del diálogo, antes o después del «di»?"],
      rubric: [
        ["Enviar i rebre|Enviar y recibir", "Fa coincidir els noms dels missatges i explica qui reacciona.|Hace coincidir los nombres de los mensajes y explica quién reacciona.", "Necessita ajuda per relacionar l'«envia» amb el «Quan rebo».|Necesita ayuda para relacionar el «envía» con el «Al recibir»."],
        ["Diàleg per torns|Diálogo por turnos", "Fa una conversa de 4 frases o més sense que se solapin.|Hace una conversación de 4 frases o más sin que se solapen.", "La conversa funciona amb 2 frases o se solapa.|La conversación funciona con 2 frases o se solapa."],
        ["Depuració de missatges|Depuración de mensajes", "Troba sol/a el nom equivocat i l'«envia» massa d'hora.|Encuentra solo/a el nombre equivocado y el «envía» demasiado pronto.", "Els troba amb preguntes guia.|Los encuentra con preguntas guía."]
      ]
    },
    casa: "A casa, feu «La paraula secreta»: cadascú tria una paraula i una acció, i una persona va «enviant» paraules. Proveu que dues persones tinguin la mateixa paraula.|En casa, haced «La palabra secreta»: cada uno elige una palabra y una acción, y una persona va «enviando» palabras. Probad que dos personas tengan la misma palabra.",
    slides: [
      { id: 's1', k: 'portada', t: "Missatges entre personatges|Mensajes entre personajes", x: "La Guida i la Tuga assagen la funció del bosc.|Guida y Tuga ensayan la función del bosque.", nota: "Objectiu: diàlegs per torns amb missatges.|Objetivo: diálogos por turnos con mensajes." },
      { id: 's2', k: 'repas', t: "Recordem les direccions|Recordemos las direcciones", punts: ["90 dreta, -90 esquerra|90 derecha, -90 izquierda", "0 amunt, 180 avall|0 arriba, 180 abajo"], nota: "Tothom dret, giravolt ràpid amb els números de les parets.|Todos de pie, giro rápido con los números de las paredes." },
      { id: 's3', k: 'pregunta', t: "Com se sap quan et toca parlar?|¿Cómo se sabe cuándo te toca hablar?", punts: ["Al teatre|En el teatro", "En una conversa per telèfon|En una conversación por teléfono", "A classe|En clase"], nota: "Hi ha un senyal: l'altre acaba la frase, et mira, et diu el nom…|Hay una señal: el otro termina la frase, te mira, te dice el nombre…" },
      { id: 's4', k: 'anim', t: "Enviar i rebre|Enviar y recibir", anim: 'g3msg', nota: "El sobre és el missatge: el sent tothom, però només respon qui té el guió amb aquell nom.|El sobre es el mensaje: lo oye todo el mundo, pero solo responde quien tiene el guion con ese nombre." },
      { id: 's5', k: 'anim', t: "Parlar per torns|Hablar por turnos", anim: 'g3dialog', nota: "Cada frase acaba amb un missatge que passa el torn.|Cada frase termina con un mensaje que pasa el turno." },
      { id: 's6', k: 'media', t: "Una conversa amb missatges|Una conversación con mensajes",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'guida', art: 'guida', x: -120, y: -60 }, { id: 'tuga', art: 'tuga', x: 120, y: -65 }], time: 8 }, prog: `@guida flag{ say:"Hola, Tuga!|¡Hola, Tuga!",2 send:tuga } msg:guida{ say:"Som-hi!|¡Vamos!",2 } @tuga msg:tuga{ say:"Hola, Guida! Assagem?|¡Hola, Guida! ¿Ensayamos?",2 send:guida }` },
        nota: "Para la demo a cada frase i pregunta: qui parlarà ara? Per què?|Para la demo en cada frase y pregunta: ¿quién hablará ahora? ¿Por qué?" },
      { id: 's7', k: 'anim', t: "Un missatge, molts personatges|Un mensaje, muchos personajes", anim: 'g3many', x: "«Mostra't» fa aparèixer; «amaga't» fa desaparèixer.|«Muéstrate» hace aparecer; «escóndete» hace desaparecer.", nota: "Com el timbre del pati: el senten tots i cadascú fa el que li toca.|Como el timbre del patio: lo oyen todos y cada uno hace lo que le toca." },
      { id: 's8', k: 'media', t: "Compte: el nom!|Cuidado: ¡el nombre!",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'guida', art: 'guida', x: -120, y: -60 }, { id: 'tuga', art: 'tuga', x: 120, y: -65 }], time: 5 }, prog: `@guida flag{ say:"Hola, Tuga!|¡Hola, Tuga!",2 send:hola } @tuga msg:tuga{ say:"Hola, Guida!|¡Hola, Guida!",2 }` },
        nota: "La Tuga no respon: espera «tuga» i li envien «hola».|Tuga no responde: espera «tuga» y le envían «hola»." },
      { id: 's9', k: 'pregunta', t: "Prediu|Predice", x: "La Guida envia «sorpresa». La Tuga té «Quan rebo hola» i l'ocell, «Quan rebo sorpresa». Qui reacciona?|Guida envía «sorpresa». Tuga tiene «Al recibir hola» y el pájaro, «Al recibir sorpresa». ¿Quién reacciona?", nota: "Només l'ocell. Tots dos el senten, però només un té el guió.|Solo el pájaro. Los dos lo oyen, pero solo uno tiene el guion." },
      { id: 's10', k: 'activitat', t: "El teatre dels missatges|El teatro de los mensajes", timer: 12, punts: ["Cadascú, les targetes del seu personatge.|Cada uno, las tarjetas de su personaje.", "Només parles quan reps el teu missatge.|Solo hablas cuando recibes tu mensaje.", "Digues el missatge ben fort quan l'envies.|Di el mensaje bien fuerte cuando lo envíes.", "Feu l'escena dues vegades.|Haced la escena dos veces."], nota: "Si algú parla abans d'hora, para l'escena i pregunta quin missatge ha rebut.|Si alguien habla antes de tiempo, para la escena y pregunta qué mensaje ha recibido." },
      { id: 's11', k: 'activitat', t: "La targeta de l'error|La tarjeta del error", punts: ["Canvieu una targeta per la de l'error.|Cambiad una tarjeta por la del error.", "On s'encalla l'escena?|¿Dónde se atasca la escena?", "Com l'arreglaríeu?|¿Cómo la arreglaríais?"], nota: "L'error és el mateix que el del repte «El missatge equivocat».|El error es el mismo que el del reto «El mensaje equivocado»." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre «Missatges entre personatges».|Abre «Mensajes entre personajes».", "A l'assaig, obre les pestanyes de cada personatge.|En el ensayo, abre las pestañas de cada personaje.", "Para a la «Pausa activa».|Para en la «Pausa activa»."], nota: "«La paraula secreta» és per fer a casa: poden tocar «Ara no».|«La palabra secreta» es para hacer en casa: pueden tocar «Ahora no»." },
      { id: 's13', k: 'repte', t: "Reptes|Retos", timer: 12, punts: ["1. La Tuga saluda|1. Tuga saluda", "2. La conversa de tres torns|2. La conversación de tres turnos", "3. La sorpresa del regal|3. La sorpresa del regalo", "4. El missatge equivocat|4. El mensaje equivocado"], nota: "Al 2, que comprovin cada torn abans de fer el següent.|En el 2, que comprueben cada turno antes de hacer el siguiente." },
      { id: 's14', k: 'activitat', t: "Crea: l'assaig de la funció|Crea: el ensayo de la función", timer: 5, x: "Una conversa de 4 frases o més, per torns, al teatre del bosc.|Una conversación de 4 frases o más, por turnos, en el teatro del bosque.", nota: "El company/a llegeix les frases en veu alta mentre s'executa.|El compañero/a lee las frases en voz alta mientras se ejecuta." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un missatge el senten tots.|Un mensaje lo oyen todos.", "Reacciona qui té «Quan rebo» amb aquell nom.|Reacciona quien tiene «Al recibir» con ese nombre.", "Parla i, després, passa el torn.|Habla y, después, pasa el turno."], nota: "Anuncia el projecte: el conte interactiu. Que pensin una idea per a la setmana vinent.|Anuncia el proyecto: el cuento interactivo. Que piensen una idea para la semana que viene." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Qui sent un missatge?|¿Quién oye un mensaje?", "L'«envia», abans o després del «digues»?|¿El «envía», antes o después del «di»?"], nota: "Anota qui encara posa l'«envia» al principi.|Anota quién todavía pone el «envía» al principio." }
    ],
    print: [
      { id: 'p1', t: "Targetes: el teatre dels missatges|Tarjetas: el teatro de los mensajes", k: 'targetes',
        intro: "Un paquet per grup de 4. Cada alumne/a agafa les targetes del seu personatge. La targeta de l'error és per a la tercera vegada.|Un paquete por grupo de 4. Cada alumno/a coge las tarjetas de su personaje. La tarjeta del error es para la tercera vez.",
        items: [
          { t: "Narrador/a · Quan comença → dic «Al bosc, la Guida i la Tuga assagen» i envio «guida» 📖|Narrador/a · Al empezar → digo «En el bosque, Guida y Tuga ensayan» y envío «guida» 📖", n: 1 },
          { t: "Guida · Quan rebo «guida» → dic «Hola, Tuga! Assagem?» i envio «tuga» 🦊|Guida · Cuando recibo «guida» → digo «¡Hola, Tuga! ¿Ensayamos?» y envío «tuga» 🦊", n: 1 },
          { t: "Tuga · Quan rebo «tuga» → dic «Sí, però per torns!» i envio «ocell» 🐢|Tuga · Cuando recibo «tuga» → digo «¡Sí, pero por turnos!» y envío «pájaro» 🐢", n: 1 },
          { t: "Ocell · Quan rebo «ocell» → dic «Piu! Bravo!» i envio «final» 🐦|Pájaro · Cuando recibo «pájaro» → digo «¡Pío! ¡Bravo!» y envío «final» 🐦", n: 1 },
          { t: "Tothom · Quan rebo «final» → faig una reverència 🙇|Todos · Cuando recibo «final» → hago una reverencia 🙇", n: 4 },
          { t: "Error · Guida: Quan rebo «guida» → dic «Hola, Tuga!» i envio «hola» 🐞|Error · Guida: Cuando recibo «guida» → digo «¡Hola, Tuga!» y envío «hola» 🐞", n: 1 }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: el conte interactiu ---------- */
  'g3-4': {
    obj: [
      "L'alumne/a planifica un conte interactiu en quatre vinyetes (inici, nus, tria i final).|El alumno/a planifica un cuento interactivo en cuatro viñetas (inicio, nudo, elección y final).",
      "L'alumne/a canvia d'escena amb «canvia el fons» i fa reaccionar personatges amb «Quan el fons canvia a…».|El alumno/a cambia de escena con «cambia el fondo» y hace reaccionar a personajes con «Al cambiar el fondo a…».",
      "L'alumne/a programa dos finals que depenen del que toca el lector/a, amb missatges diferents.|El alumno/a programa dos finales que dependen de lo que toca el lector/a, con mensajes diferentes.",
      "L'alumne/a presenta el seu conte, el fa provar a un company/a i el millora amb els seus comentaris.|El alumno/a presenta su cuento, lo hace probar a un compañero/a y lo mejora con sus comentarios."
    ],
    comp: [
      "Competència digital (CD5): crear un producte digital interactiu complet|Competencia digital (CD5): crear un producto digital interactivo completo",
      "Pensament computacional: descomposició, esdeveniments, missatges i proves|Pensamiento computacional: descomposición, eventos, mensajes y pruebas",
      "Llengua: estructura del conte (inici, nus i final) i escriptura creativa|Lengua: estructura del cuento (inicio, nudo y final) y escritura creativa",
      "Competència personal i social: donar i rebre comentaris amables i útils|Competencia personal y social: dar y recibir comentarios amables y útiles"
    ],
    vocab: [
      ["Conte interactiu|Cuento interactivo", "Una història on qui la mira toca o tria i canvia el que passa.|Una historia donde quien la mira toca o elige y cambia lo que pasa."],
      ["Escena|Escena", "Una part del conte amb el seu fons i els seus personatges.|Una parte del cuento con su fondo y sus personajes."],
      ["Vinyeta|Viñeta", "Cada dibuix del pla del conte.|Cada dibujo del plan del cuento."],
      ["Final alternatiu|Final alternativo", "Una altra manera d'acabar la història, segons el que es tria.|Otra manera de terminar la historia, según lo que se elige."],
      ["Lector/a|Lector/a", "La persona que mira el conte i hi participa.|La persona que mira el cuento y participa."]
    ],
    mat: {
      aula: ["Ordinadors amb la sessió «Projecte: el conte interactiu»|Ordenadores con la sesión «Proyecto: el cuento interactivo»", "Projector i la presentació|Proyector y la presentación", "Llapis i colors|Lápices y colores"],
      imprimir: ["Fitxa: el meu conte en 4 vinyetes|Ficha: mi cuento en 4 viñetas"],
      prep: ["Imprimir una fitxa de vinyetes per alumne/a (i alguna de més per als que vulguin tornar a començar).|Imprimir una ficha de viñetas por alumno/a (y alguna de más para los que quieran volver a empezar).",
        "Provar el conte d'exemple (s7) amb els dos finals.|Probar el cuento de ejemplo (s7) con los dos finales.",
        "Preparar l'ordre de les presentacions: 4 o 5 voluntaris i la resta per parelles.|Preparar el orden de las presentaciones: 4 o 5 voluntarios y el resto por parejas."]
    },
    plan: [
      { min: 5, t: "Benvinguda: el llibre sense final|Bienvenida: el libro sin final", fase: 'inici',
        fa: "Repassa missatges i mostra't/amaga't. Presenta el repte: un llibre on el lector/a tria el final. Pregunta si han llegit mai un llibre on es pot triar què passa.|Repasa mensajes y muéstrate/escóndete. Presenta el reto: un libro donde el lector/a elige el final. Pregunta si han leído alguna vez un libro donde se puede elegir qué pasa.",
        diu: ["Si poguéssiu triar el final d'un conte, quin canviaríeu?|Si pudierais elegir el final de un cuento, ¿cuál cambiaríais?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 7, t: "Com es fa un conte interactiu|Cómo se hace un cuento interactivo", fase: 'teoria',
        fa: "Explica inici, nus i final amb l'animació del conte. Mostra la demo de les escenes (el fons que canvia i el drac que hi reacciona) i la dels dos finals. Acaba amb el pla en vinyetes.|Explica inicio, nudo y final con la animación del cuento. Muestra la demo de las escenas (el fondo que cambia y el dragón que reacciona) y la de los dos finales. Termina con el plan en viñetas.",
        diu: ["Quin esdeveniment fa aparèixer el drac?|¿Qué evento hace aparecer al dragón?", "Si toquen l'estrella en lloc del cor, què canvia?|Si tocan la estrella en lugar del corazón, ¿qué cambia?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El conte en 4 vinyetes|El cuento en 4 viñetas", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa de vinyetes: inici, nus, tria (les dues opcions) i final. Al costat de cada vinyeta, apunta l'esdeveniment o el missatge que la farà començar. Als 8 minuts, cada alumne/a explica el seu pla al company/a en un minut.|Cada alumno/a rellena la ficha de viñetas: inicio, nudo, elección (las dos opciones) y final. Al lado de cada viñeta, apunta el evento o el mensaje que la hará empezar. A los 8 minutos, cada alumno/a explica su plan al compañero/a en un minuto.",
        diu: ["No cal dibuixar bé: n'hi ha prou amb ninots i fletxes.|No hace falta dibujar bien: basta con muñecos y flechas.", "Què ha de tocar el lector/a? Apunta-ho!|¿Qué tiene que tocar el lector/a? ¡Apúntalo!"],
        slides: ['s8'], app: "Cap: activitat amb la fitxa de paper.|Ninguna: actividad con la ficha de papel.", org: "Individual i parelles|Individual y parejas" },
      { min: 10, t: "A l'ordinador: les escenes del conte|En el ordenador: las escenas del cuento", fase: 'ordinador',
        fa: "Fan la primera part de la sessió fins a la pausa activa: el conte d'exemple i les dues primeres escenes. Que provin els dos finals del conte d'exemple.|Hacen la primera parte de la sesión hasta la pausa activa: el cuento de ejemplo y las dos primeras escenas. Que prueben los dos finales del cuento de ejemplo.",
        diu: ["Has provat els dos finals?|¿Has probado los dos finales?"],
        slides: ['s9'], app: "Del recorda fins a la «Pausa activa»: preguntes, història, «Descobreix», ordenar els passos, «El conte en 4 vinyetes» (ja fet), el conte d'exemple, l'escena 1 (el botó) i l'escena 2 (el drac de nit).|Del recuerda hasta la «Pausa activa»: preguntas, historia, «Descubre», ordenar los pasos, «El cuento en 4 viñetas» (ya hecho), el cuento de ejemplo, la escena 1 (el botón) y la escena 2 (el dragón de noche).", org: "Individual|Individual" },
      { min: 18, t: "Crea: el meu conte interactiu|Crea: mi cuento interactivo", fase: 'crea',
        fa: "Després de la pausa activa, fan l'escena dels dos finals i l'investiga. Llavors construeixen el seu conte seguint la fitxa. Passeja amb els criteris a la vista. Als 12 minuts, avisa: tothom ha de tenir un final, encara que sigui senzill. Els últims minuts, el company/a prova el conte sense explicacions i diu una cosa que li agrada i una idea per millorar.|Después de la pausa activa, hacen la escena de los dos finales y el investiga. Entonces construyen su cuento siguiendo la ficha. Pasea con los criterios a la vista. A los 12 minutos, avisa: todos tienen que tener un final, aunque sea sencillo. Los últimos minutos, el compañero/a prueba el cuento sin explicaciones y dice una cosa que le gusta y una idea para mejorar.",
        diu: ["Mira la teva fitxa: quina vinyeta estàs programant?|Mira tu ficha: ¿qué viñeta estás programando?", "Primer que funcioni una versió curta; després, la fas més llarga.|Primero que funcione una versión corta; después, la haces más larga.", "El lector/a sap què ha de tocar? Digues-li-ho amb una frase.|¿El lector/a sabe qué tiene que tocar? Díselo con una frase."],
        slides: ['s10', 's11', 's12', 's13'], app: "«Pausa activa», l'escena 3 (tria el final), l'investiga del drac que no apareix, «El meu conte interactiu» i «Ensenya el teu conte».|«Pausa activa», la escena 3 (elige el final), el investiga del dragón que no aparece, «Mi cuento interactivo» y «Enseña tu cuento».", org: "Individual i parelles|Individual y parejas" },
      { min: 8, t: "Presentacions i tancament|Presentaciones y cierre", fase: 'tancament',
        fa: "4 o 5 voluntaris presenten el conte al projector: la classe fa de lector/a i tria el final en veu alta. Acaba amb el resum de la unitat, les preguntes finals i el tiquet.|4 o 5 voluntarios presentan el cuento en el proyector: la clase hace de lector/a y elige el final en voz alta. Termina con el resumen de la unidad, las preguntas finales y el ticket.",
        diu: ["Quin final voleu? Voteu amb la mà!|¿Qué final queréis? ¡Votad con la mano!", "Quina cosa del conte del company/a us ha agradat?|¿Qué cosa del cuento del compañero/a os ha gustado?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: preguntes i com m'he sentit.|«Cierre»: preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Comença a programar sense pla i s'encalla a mig conte.|Empieza a programar sin plan y se atasca a mitad del cuento.",
        "Torna a la fitxa: quina vinyeta funciona ja? Quina ve ara? Programa-les d'una en una.|Vuelve a la ficha: ¿qué viñeta funciona ya? ¿Cuál viene ahora? Prográmalas de una en una."],
      ["El botó canvia el fons a un lloc i el personatge espera un altre fons.|El botón cambia el fondo a un sitio y el personaje espera otro fondo.",
        "Que compari el fons del bloc «canvia el fons» amb el de la capçalera «Quan el fons canvia a…».|Que compare el fondo del bloque «cambia el fondo» con el de la cabecera «Al cambiar el fondo a…»."],
      ["El drac és amagat i no apareix mai.|El dragón está escondido y no aparece nunca.",
        "Pregunta: quin bloc el fa aparèixer i quin esdeveniment l'ha de fer començar?|Pregunta: ¿qué bloque lo hace aparecer y qué evento lo tiene que hacer empezar?"],
      ["Els dos finals passen alhora o sempre el mateix.|Los dos finales pasan a la vez o siempre el mismo.",
        "Que miri que cada objecte envia un missatge diferent i que cada final és sota el seu «Quan rebo».|Que mire que cada objeto envía un mensaje diferente y que cada final está bajo su «Al recibir»."],
      ["Vol fer un conte molt llarg i no l'acaba.|Quiere hacer un cuento muy largo y no lo termina.",
        "Primer una versió de tres escenes que funcioni. Les idees de més, a la llista de millores.|Primero una versión de tres escenas que funcione. Las ideas de más, a la lista de mejoras."]
    ],
    diff: {
      mes: "Afegir un tercer camí, una escena amb el cavaller mogut amb les fletxes o un efecte de so a cada escena. Escriure el títol del conte amb el narrador al principi.|Añadir un tercer camino, una escena con el caballero movido con las flechas o un efecto de sonido en cada escena. Escribir el título del cuento con el narrador al principio.",
      menys: "Partir del conte d'exemple i canviar-ne les frases i un dels finals. Fer només tres vinyetes: inici, nus i un final.|Partir del cuento de ejemplo y cambiar sus frases y uno de los finales. Hacer solo tres viñetas: inicio, nudo y un final."
    },
    aval: {
      ticket: ["Quin esdeveniment fa reaccionar un personatge quan canvia l'escena?|¿Qué evento hace reaccionar a un personaje cuando cambia la escena?", "Com has fet que el lector/a triï el final?|¿Cómo has hecho que el lector/a elija el final?"],
      rubric: [
        ["Pla i estructura|Plan y estructura", "El conte té inici, nus i final i segueix la fitxa de vinyetes.|El cuento tiene inicio, nudo y final y sigue la ficha de viñetas.", "Hi ha escenes, però falta el final o no segueix el pla.|Hay escenas, pero falta el final o no sigue el plan."],
        ["Interacció|Interacción", "El lector/a toca per continuar i tria entre dos finals.|El lector/a toca para continuar y elige entre dos finales.", "El lector/a toca un sol cop o no té cap tria.|El lector/a toca una sola vez o no tiene ninguna elección."],
        ["Diàleg i missatges|Diálogo y mensajes", "Els personatges parlen per torns amb missatges, sense solapar-se.|Los personajes hablan por turnos con mensajes, sin solaparse.", "Hi ha frases, però se solapen o no fan servir missatges.|Hay frases, pero se solapan o no usan mensajes."]
      ]
    },
    casa: "A casa, ensenyeu el conte a la família amb el mòbil i deixeu que triïn el final. Després, dibuixeu junts una vinyeta nova per a un tercer final.|En casa, enseñad el cuento a la familia con el móvil y dejad que elijan el final. Después, dibujad juntos una viñeta nueva para un tercer final.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: el conte interactiu|Proyecto: el cuento interactivo", x: "Una història amb escenes, diàlegs i un final que tria qui la mira.|Una historia con escenas, diálogos y un final que elige quien la mira.", nota: "Avui tothom acaba un conte: curt, però amb final.|Hoy todos terminan un cuento: corto, pero con final." },
      { id: 's2', k: 'repas', t: "Tot el que sabem fer|Todo lo que sabemos hacer", punts: ["Tocar un personatge|Tocar un personaje", "Les fletxes del teclat|Las flechas del teclado", "Enviar i rebre missatges|Enviar y recibir mensajes", "Mostrar i amagar|Mostrar y esconder"], nota: "Recorda que al conte poden fer servir tot això.|Recuerda que en el cuento pueden usar todo esto." },
      { id: 's3', k: 'pregunta', t: "El llibre sense final|El libro sin final", x: "Si poguéssiu triar el final d'un conte, quin canviaríeu?|Si pudierais elegir el final de un cuento, ¿cuál cambiaríais?", nota: "Recull idees: poden servir de punt de partida.|Recoge ideas: pueden servir de punto de partida." },
      { id: 's4', k: 'anim', t: "Inici, nus i final… i tu tries|Inicio, nudo y final… y tú eliges", anim: 'g3tale', nota: "Connecta amb el que treballen a llengua: l'estructura del conte.|Conecta con lo que trabajan en lengua: la estructura del cuento." },
      { id: 's5', k: 'media', t: "Escenes: el fons canvia|Escenas: el fondo cambia",
        media: { k: 'stage', w: { bg: 'bosc', bgs: ['bosc', 'nit'], sprites: [{ id: 'boto', art: 'boto', x: 150, y: -130, size: 70 }, { id: 'drac', art: 'drac', x: 0, y: -40, hidden: true }], input: [{ t: 1.5, click: 'boto' }], time: 6 }, prog: `@boto click{ bg:nit hide } @drac bg:nit{ show say:"Qui m'ha despertat?|¿Quién me ha despertado?",2 }` },
        nota: "El canvi de fons també és un esdeveniment: el drac l'espera per aparèixer.|El cambio de fondo también es un evento: el dragón lo espera para aparecer." },
      { id: 's6', k: 'media', t: "Dos finals|Dos finales",
        media: { k: 'stage', w: { bg: 'nit', bgs: ['nit', 'parc', 'cel'], sprites: [{ id: 'drac', art: 'drac', x: 0, y: -40 }, { id: 'cor', art: 'cor', x: -70, y: 95 }, { id: 'estrella', art: 'estrella', x: 70, y: 95 }], input: [{ t: 1.5, click: 'cor' }], time: 6 }, prog: `@cor click{ send:hola } @estrella click{ send:sorpresa } @drac msg:hola{ next say:"Amics per sempre!|¡Amigos para siempre!",2 bg:parc } msg:sorpresa{ say:"Me l'emporto al cel!|¡Me la llevo al cielo!",2 bg:cel hide }` },
        nota: "A la demo toquen el cor. Pregunta què passaria amb l'estrella i mira-ho als guions.|En la demo tocan el corazón. Pregunta qué pasaría con la estrella y míralo en los guiones." },
      { id: 's7', k: 'anim', t: "Primer, el pla|Primero, el plan", anim: 'g3plan', nota: "Els programadors i els il·lustradors fan esbossos abans de començar.|Los programadores y los ilustradores hacen bocetos antes de empezar." },
      { id: 's8', k: 'activitat', t: "El conte en 4 vinyetes|El cuento en 4 viñetas", timer: 12, punts: ["1. Inici: on i qui?|1. Inicio: ¿dónde y quién?", "2. Nus: què passa?|2. Nudo: ¿qué pasa?", "3. Tria: què toca el lector/a?|3. Elige: ¿qué toca el lector/a?", "4. Final: com acaba?|4. Final: ¿cómo termina?"], nota: "Als 8 minuts, cada alumne/a explica el pla al company/a.|A los 8 minutos, cada alumno/a explica el plan al compañero/a." },
      { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Prova el conte d'exemple amb els dos finals.|Prueba el cuento de ejemplo con los dos finales.", "Escena 1: el botó.|Escena 1: el botón.", "Escena 2: el drac de nit.|Escena 2: el dragón de noche."], nota: "Para a la pausa activa: la farem junts.|Para en la pausa activa: la haremos juntos." },
      { id: 's10', k: 'repte', t: "Escena 3: tria el final|Escena 3: elige el final", timer: 5, punts: ["El cor envia «hola».|El corazón envía «hola».", "L'estrella envia «sorpresa».|La estrella envía «sorpresa».", "Cada final, al seu «Quan rebo».|Cada final, en su «Al recibir»."], nota: "Hi ha dues proves: una toca el cor i l'altra l'estrella.|Hay dos pruebas: una toca el corazón y la otra la estrella." },
      { id: 's11', k: 'concepte', t: "Criteris del conte|Criterios del cuento", punts: ["Almenys 2 escenes|Al menos 2 escenas", "Un diàleg amb missatges|Un diálogo con mensajes", "El lector/a toca per continuar|El lector/a toca para continuar", "Té un final: «Fi del conte!»|Tiene un final: «¡Fin del cuento!»"], nota: "Deixa aquesta diapositiva projectada mentre treballen.|Deja esta diapositiva proyectada mientras trabajan." },
      { id: 's12', k: 'activitat', t: "Construeix el teu conte|Construye tu cuento", timer: 13, punts: ["Segueix la fitxa, vinyeta a vinyeta.|Sigue la ficha, viñeta a viñeta.", "Prova cada escena abans de fer la següent.|Prueba cada escena antes de hacer la siguiente.", "Primer curt i que funcioni; després, més llarg.|Primero corto y que funcione; después, más largo."], nota: "Als 12 minuts, avisa que tothom ha de tenir un final.|A los 12 minutos, avisa de que todos tienen que tener un final." },
      { id: 's13', k: 'activitat', t: "Prova-ho amb un company/a|Pruébalo con un compañero/a", punts: ["No li expliquis res: mira què toca.|No le expliques nada: mira qué toca.", "Una cosa que t'agrada.|Una cosa que te gusta.", "Una idea per millorar.|Una idea para mejorar."], nota: "Modela un comentari amable i concret abans de començar.|Modela un comentario amable y concreto antes de empezar." },
      { id: 's14', k: 'activitat', t: "Presentacions|Presentaciones", timer: 5, punts: ["Títol del conte|Título del cuento", "La classe tria el final|La clase elige el final", "Què n'estàs més content/a?|¿De qué estás más contento/a?"], nota: "Un minut per conte. La classe vota el final amb la mà.|Un minuto por cuento. La clase vota el final con la mano." },
      { id: 's15', k: 'resum', t: "La unitat 3 en tres idees|La unidad 3 en tres ideas", punts: ["Els esdeveniments fan començar guions: tocar, tecles, missatges, fons.|Los eventos hacen empezar guiones: tocar, teclas, mensajes, fondos.", "Els missatges fan parlar per torns.|Los mensajes hacen hablar por turnos.", "Un programa interactiu respon a qui el fa servir.|Un programa interactivo responde a quien lo usa."], nota: "Anuncia la unitat 4: coordenades i el laberint.|Anuncia la unidad 4: coordenadas y el laberinto." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quin esdeveniment fa reaccionar quan canvia l'escena?|¿Qué evento hace reaccionar cuando cambia la escena?", "Com has fet que el lector/a triï?|¿Cómo has hecho que el lector/a elija?"], nota: "Recull les fitxes de vinyetes per valorar el pla amb la rúbrica.|Recoge las fichas de viñetas para valorar el plan con la rúbrica." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: el meu conte en 4 vinyetes|Ficha: mi cuento en 4 viñetas", k: 'fitxa',
        intro: "Dibuixa cada vinyeta al requadre i apunta, al costat, l'esdeveniment o el missatge que la fa començar.|Dibuja cada viñeta en el recuadro y apunta, al lado, el evento o el mensaje que la hace empezar.",
        items: [
          { q: "Vinyeta 1 · Inici: on passa el conte i qui hi ha? Com comença? (esdeveniment: «Quan comença»)|Viñeta 1 · Inicio: ¿dónde pasa el cuento y quién hay? ¿Cómo empieza? (evento: «Al empezar»)", big: true, sol: "Exemple: al bosc de dia; el narrador presenta el cavaller.|Ejemplo: en el bosque de día; el narrador presenta al caballero." },
          { q: "Vinyeta 2 · Nus: què passa? Qui parla i què diu? Quin missatge passa el torn?|Viñeta 2 · Nudo: ¿qué pasa? ¿Quién habla y qué dice? ¿Qué mensaje pasa el turno?", big: true, sol: "Exemple: es fa de nit i apareix el drac (Quan el fons canvia a nit).|Ejemplo: se hace de noche y aparece el dragón (Al cambiar el fondo a noche)." },
          { q: "Vinyeta 3 · Tria: què pot tocar el lector/a? Dibuixa les dues opcions i el missatge de cadascuna.|Viñeta 3 · Elige: ¿qué puede tocar el lector/a? Dibuja las dos opciones y el mensaje de cada una.", big: true, sol: "Exemple: el cor envia «hola» i l'estrella envia «sorpresa».|Ejemplo: el corazón envía «hola» y la estrella envía «sorpresa»." },
          { q: "Vinyeta 4 · Final: com acaba cada opció? Recorda escriure «Fi del conte!».|Viñeta 4 · Final: ¿cómo termina cada opción? Recuerda escribir «¡Fin del cuento!».", big: true, sol: "Exemple: amb «hola» es fan amics al parc; amb «sorpresa» el drac vola cap al cel.|Ejemplo: con «hola» se hacen amigos en el parque; con «sorpresa» el dragón vuela hacia el cielo." }
        ] }
    ]
  }
});

/* ── unitat 4 ── */
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
          "Una còpia de «El cel amagat» per alumne/a i un llapis de color|Una copia de «El cielo escondido» por alumno/a y un lápiz de color",
          "Opcional: cinta de pintor per marcar a terra una creu gran (els dos eixos) per a la demostració|Opcional: cinta de pintor para marcar en el suelo una cruz grande (los dos ejes) para la demostración"
        ],
        imprimir: ["El cel amagat (graella de coordenades)|El cielo escondido (cuadrícula de coordenadas)", "Fitxa: on és cada estrella?|Ficha: ¿dónde está cada estrella?"],
        prep: [
          "Imprimir «El cel amagat» (una per alumne/a) i, per als que acabin aviat, la fitxa «On és cada estrella?».|Imprimir «El cielo escondido» (una por alumno/a) y, para los que terminen pronto, la ficha «¿Dónde está cada estrella?».",
          "Si hi ha espai, marcar a terra una creu de cinta: una ratlla de 3 m (x) i una de 2 m (y), amb el (0, 0) al mig.|Si hay espacio, marcar en el suelo una cruz de cinta: una raya de 3 m (x) y una de 2 m (y), con el (0, 0) en el medio.",
          "Mirar abans les demostracions de les diapositives 5, 6 i 12 per saber on va en Numi.|Mirar antes las demostraciones de las diapositivas 5, 6 y 12 para saber adónde va Numi.",
          "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada."
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
            "No hi ha un sol ordre bo: el teu viatge pot ser diferent del del company/a.|No hay un solo orden bueno: tu viaje puede ser diferente del del compañero/a."],
          slides: ['s14'], app: "Pas «Crea»: El meu cel d'estrelles.|Paso «Crea»: Mi cielo de estrellas.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una de les preguntes del tiquet.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una de las preguntas del ticket.",
          diu: ["Qui em diu on és el (0, 0)?|¿Quién me dice dónde está el (0, 0)?",
            "Si una estrella és a baix a l'esquerra, com són la x i la y?|Si una estrella está abajo a la izquierda, ¿cómo son la x y la y?"],
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
          "Que estimi abans: l'estrella és a la dreta o a l'esquerra? Llavors la x serà positiva o negativa? I aproximadament, a mig camí de la vora?|Que estime antes: ¿la estrella está a la derecha o a la izquierda? Entonces ¿la x será positiva o negativa? ¿Y aproximadamente, a medio camino del borde?"]
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
          ["Programar un recorregut|Programar un recorrido", "Visita diversos punts en ordre amb «ves a» i esperes, pensant les coordenades abans.|Visita varios puntos en orden con «ve a» y esperas, pensando las coordenadas antes.", "Arriba a un punt, però per fer un recorregut prova números a l'atzar.|Llega a un punto, pero para hacer un recorrido prueba números al azar."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «El tresor amagat»: dibuixeu una creu en un full, amagueu un tresor en un punt i busqueu-lo dient coordenades.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «El tesoro escondido»: dibujad una cruz en una hoja, esconded un tesoro en un punto y buscadlo diciendo coordenadas.",
      slides: [
        { id: 's1', k: 'portada', t: "x i y: l'escenari és un mapa|x e y: el escenario es un mapa", x: "Avui aprendrem a dir exactament on és cada cosa amb dos números.|Hoy aprenderemos a decir exactamente dónde está cada cosa con dos números.",
          nota: "Presenta l'objectiu: al final de la classe, tothom portarà en Numi a qualsevol estrella del cel.|Presenta el objetivo: al final de la clase, todos llevarán a Numi a cualquier estrella del cielo." },
        { id: 's2', k: 'pregunta', t: 'On és la teva cadira?|¿Dónde está tu silla?', x: "Explica-li a un amic on seus, sense assenyalar.|Explícale a un amigo dónde te sientas, sin señalar.",
          nota: "Recull respostes i fes notar les que són poc exactes («per allà»). Torna-hi quan expliquis les coordenades.|Recoge respuestas y haz notar las que son poco exactas («por allí»). Vuelve a ello cuando expliques las coordenadas." },
        { id: 's3', k: 'concepte', t: 'La Nit de les Estrelles|La Noche de las Estrellas', punts: ["En Bit ha fet un mapa del cel.|Bit ha hecho un mapa del cielo.", "En Numi ha d'anar just on és cada estrella.|Numi tiene que ir justo donde está cada estrella.", "Per dir on és cada lloc farem servir dos números: la x i la y.|Para decir dónde está cada sitio usaremos dos números: la x y la y."],
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
          "Per grup de 3: un paquet de cartes de la cursa, la pista de la cursa impresa i una fitxa o moneda (el globus)|Por grupo de 3: un paquete de cartas de la carrera, la pista de la carrera impresa y una ficha o moneda (el globo)"
        ],
        imprimir: ["Cartes de la cursa de globus|Cartas de la carrera de globos", "La pista de la cursa (graella)|La pista de la carrera (cuadrícula)"],
        prep: [
          "Imprimir i retallar un paquet de cartes per grup; si es plastifiquen, serveixen per a la sessió 4.|Imprimir y recortar un paquete de cartas por grupo; si se plastifican, sirven para la sesión 4.",
          "Imprimir una pista de la cursa per grup i marcar-hi la sortida a (-3, -2) i la meta a (3, 2).|Imprimir una pista de la carrera por grupo y marcar la salida en (-3, -2) y la meta en (3, 2).",
          "Mirar abans les demostracions de les diapositives 4, 7 i 11.|Mirar antes las demostraciones de las diapositivas 4, 7 y 11.",
          "Deixar els ordinadors engegats amb Numi Tech obert i la sessió iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: la cursa de globus|Bienvenida: la carrera de globos", fase: 'inici',
          fa: "Recorda la sessió anterior amb la pregunta de repàs: un voluntari/a assenyala on és (0, 120). Presenta la missió: els globus no salten, volen a poc a poc. Pregunta com s'hauria de veure un globus que va d'un núvol a l'altre.|Recuerda la sesión anterior con la pregunta de repaso: un voluntario/a señala dónde está (0, 120). Presenta la misión: los globos no saltan, vuelan poco a poco. Pregunta cómo se debería ver un globo que va de una nube a otra.",
          diu: ["On és el punt x: 0, y: 120? I el (-150, -100)?|¿Dónde está el punto x: 0, y: 120? ¿Y el (-150, -100)?",
            "Un globus que desapareix i apareix a l'altra banda… us sembla real?|Un globo que desaparece y aparece al otro lado… ¿os parece real?"],
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
            "10 vegades 5: és una multiplicació amagada dins un bucle!|10 veces 5: ¡es una multiplicación escondida dentro de un bucle!"],
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
            "Si sumeu tots els segons, sabreu quant tarda la cursa.|Si sumáis todos los segundos, sabréis cuánto tarda la carrera."],
          slides: ['s13'], app: "Pas «Crea»: La cursa de globus.|Paso «Crea»: La carrera de globos.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
          diu: ["Quin bloc farieu servir perquè un personatge vagi a poc a poc?|¿Qué bloque usaríais para que un personaje vaya poco a poco?",
            "Si sóc a x: 20 i faig canvia x en -30, on sóc?|Si estoy en x: 20 y hago cambia x en -30, ¿dónde estoy?"],
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
          "Explica que amb «Comença» les fletxes les prem ell/a. Quan funcioni, «Comprova» les premerà soles.|Explica que con «Empieza» las flechas las pulsa él/ella. Cuando funcione, «Comprueba» las pulsará solas."]
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
          ["Les fletxes|Las flechas", "Programa les quatre fletxes amb el signe bo i les prova abans de comprovar.|Programa las cuatro flechas con el signo correcto y las prueba antes de comprobar.", "Programa algunes fletxes; les altres necessiten ajuda.|Programa algunas flechas; las otras necesitan ayuda."]
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
        { id: 's12', k: 'repte', t: 'Reptes: pilots de globus|Retos: pilotos de globos', timer: 10, punts: ["1. Llisca fins a la bandera|1. Deslízate hasta la bandera", "2. El camí dels núvols|2. El camino de las nubes", "3. Les quatre fletxes|3. Las cuatro flechas", "4. El globus s'enlaira (2 blocs)|4. El globo despega (2 bloques)", "5. L'ocell que no es mou|5. El pájaro que no se mueve"],
          nota: "Al repte 4, si algú s'encalla, pregunta quantes vegades cal sumar 10 per fer 150.|En el reto 4, si alguien se atasca, pregunta cuántas veces hay que sumar 10 para hacer 150." },
        { id: 's13', k: 'activitat', t: 'Crea: la cursa de globus|Crea: la carrera de globos', timer: 5, x: "Passa per les 3 estrelles amb «llisca» i acaba a la bandera. Tu tries els segons!|Pasa por las 3 estrellas con «desliza» y termina en la bandera. ¡Tú eliges los segundos!",
          nota: "Si queda temps, compareu dues curses: quina tarda més? Sumeu els segons de cada una.|Si queda tiempo, comparad dos carreras: ¿cuál tarda más? Sumad los segundos de cada una." },
        { id: 's14', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["«Llisca» va a poc a poc fins a un punt, en els segons que diguis.|«Desliza» va poco a poco hasta un punto, en los segundos que digas.", "«Canvia x en 10» suma a la x on ja és; amb -10, va a l'esquerra.|«Cambia x en 10» suma a la x donde ya está; con -10, va a la izquierda.", "Amb les fletxes i «canvia», mous el personatge per tot l'escenari.|Con las flechas y «cambia», mueves al personaje por todo el escenario."],
          nota: "Pregunta qui ha fet servir números negatius avui i per a què.|Pregunta quién ha usado números negativos hoy y para qué." },
        { id: 's15', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Quina diferència hi ha entre «ves a» i «llisca»?|¿Qué diferencia hay entre «ve a» y «desliza»?", "Si sóc a x: 20 i faig «canvia x en -30», on sóc?|Si estoy en x: 20 y hago «cambia x en -30», ¿dónde estoy?"],
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
          "Un espai lliure a l'aula per a la brúixola humana i quatre fulls grans amb 0, 90, 180 i -90 per enganxar a les parets|Un espacio libre en el aula para la brújula humana y cuatro hojas grandes con 0, 90, 180 y -90 para pegar en las paredes",
          "Per alumne/a: «El billar de paper», un regle i un llapis de color|Por alumno/a: «El billar de papel», una regla y un lápiz de color"
        ],
        imprimir: ["Cartes de direcció|Cartas de dirección", "El billar de paper (graella)|El billar de papel (cuadrícula)"],
        prep: [
          "Enganxar els fulls de 0, 90, 180 i -90 a les quatre parets de l'aula (el 0 a la paret de la pissarra).|Pegar las hojas de 0, 90, 180 y -90 en las cuatro paredes del aula (el 0 en la pared de la pizarra).",
          "Imprimir un paquet de cartes de direcció per al professor/a i «El billar de paper» per a cada alumne/a.|Imprimir un paquete de cartas de dirección para el profesor/a y «El billar de papel» para cada alumno/a.",
          "Mirar abans les demostracions de les diapositives 4, 5 i 7.|Mirar antes las demostraciones de las diapositivas 4, 5 y 7.",
          "Deixar els ordinadors engegats amb Numi Tech obert i la sessió iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: festa a la platja|Bienvenida: fiesta en la playa", fase: 'inici',
          fa: "Fes la pregunta de repàs sobre «canvia x». Presenta la festa de la platja: una pilota que rebota, un peix que neda i un cranc que el persegueix. Pregunta què necessitem saber d'un personatge, a més d'on és, per fer-lo moure.|Haz la pregunta de repaso sobre «cambia x». Presenta la fiesta de la playa: una pelota que rebota, un pez que nada y un cangrejo que lo persigue. Pregunta qué necesitamos saber de un personaje, además de dónde está, para hacerlo mover.",
          diu: ["Quin bloc mou 10 cap a la dreta, sigui on sigui el personatge?|¿Qué bloque mueve 10 hacia la derecha, esté donde esté el personaje?",
            "Sabem on és en Numi. Però cap on mira?|Sabemos dónde está Numi. Pero ¿hacia dónde mira?"],
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
            "Al programa del cranc, quin bloc el fa girar cap al peix?|En el programa del cangrejo, ¿qué bloque lo hace girar hacia el pez?"],
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
            "Què passa si el cranc és més ràpid que la pilota? I si és més lent?|¿Qué pasa si el cangrejo es más rápido que la pelota? ¿Y si es más lento?"],
          slides: ['s13'], app: "Pas «Crea»: La festa de la platja.|Paso «Crea»: La fiesta de la playa.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
          diu: ["Quina direcció és avall?|¿Qué dirección es abajo?",
            "On va el bloc del rebot perquè funcioni sempre?|¿Dónde va el bloque del rebote para que funcione siempre?"],
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
          "Ensenya-li les pestanyes de dalt de l'editor: cada personatge té els seus guions.|Enséñale las pestañas de arriba del editor: cada personaje tiene sus guiones."]
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
          ["Perseguir|Perseguir", "Programa una persecució que funciona en totes les proves.|Programa una persecución que funciona en todas las pruebas.", "La persecució funciona en una prova, però no en totes.|La persecución funciona en una prueba, pero no en todas."]
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
        { id: 's6', k: 'anim', t: 'Compte! El rebot va dins el bucle|¡Cuidado! El rebote va dentro del bucle', anim: 'g4bounce', x: "Per sempre: mou-te, si toques la vora, rebota.|Por siempre: muévete, si tocas el borde, rebota.",
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
        { id: 's12', k: 'repte', t: 'Reptes de la platja|Retos de la playa', timer: 10, punts: ["1. La pilota que va i torna|1. La pelota que va y vuelve", "2. La pilota que s'escapa|2. La pelota que se escapa", "3. Les quatre vores (diagonal)|3. Los cuatro bordes (diagonal)", "4. El cranc i el peix (3 proves)|4. El cangrejo y el pez (3 pruebas)", "5. El peix que mou la cua|5. El pez que mueve la cola"],
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
          "Per parella: «Dissenya el teu laberint», llapis de colors (blau, verd i vermell) i un llapis normal|Por pareja: «Diseña tu laberinto», lápices de colores (azul, verde y rojo) y un lápiz normal",
          "Una còpia de «Prova i millora» per alumne/a|Una copia de «Prueba y mejora» por alumno/a"
        ],
        imprimir: ["Dissenya el teu laberint (graella)|Diseña tu laberinto (cuadrícula)", "Prova i millora (fitxa de comentaris)|Prueba y mejora (ficha de comentarios)"],
        prep: [
          "Imprimir «Dissenya el teu laberint» (una per parella) i «Prova i millora» (una per alumne/a).|Imprimir «Diseña tu laberinto» (una por pareja) y «Prueba y mejora» (una por alumno/a).",
          "Si es van plastificar, tenir a mà les cartes de la cursa de la sessió 2: serveixen per moure's pel laberint de paper.|Si se plastificaron, tener a mano las cartas de la carrera de la sesión 2: sirven para moverse por el laberinto de papel.",
          "Provar abans el repte de les fletxes amb el botó «Comprova» per saber què veuran.|Probar antes el reto de las flechas con el botón «Comprueba» para saber qué verán.",
          "Deixar els ordinadors engegats amb Numi Tech obert i la sessió iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: el laberint del far|Bienvenida: el laberinto del faro", fase: 'inici',
          fa: "Presenta el projecte: avui creareu el vostre primer videojoc. Pregunta què té qualsevol videojoc que coneguin (un personatge, uns controls, unes regles, un objectiu) i apunta-ho a la pissarra en quatre columnes. Ho farem servir per planificar el laberint.|Presenta el proyecto: hoy crearéis vuestro primer videojuego. Pregunta qué tiene cualquier videojuego que conozcan (un personaje, unos controles, unas reglas, un objetivo) y apúntalo en la pizarra en cuatro columnas. Lo usaremos para planificar el laberinto.",
          diu: ["Què té un videojoc? Qui es mou, amb què el movem, què no podem fer i què hem d'aconseguir?|¿Qué tiene un videojuego? ¿Quién se mueve, con qué lo movemos, qué no podemos hacer y qué tenemos que conseguir?",
            "Avui no farem servir el videojoc d'algú altre: el crearem nosaltres.|Hoy no usaremos el videojuego de otra persona: lo crearemos nosotros."],
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
            "Quin comentari del company/a us ha ajudat més?|¿Qué comentario del compañero/a os ha ayudado más?"],
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
          "Recorda que tots els videojocs es proven i es milloren moltes vegades. Que triï un sol canvi petit i el provi.|Recuerda que todos los videojuegos se prueban y se mejoran muchas veces. Que elija un solo cambio pequeño y lo pruebe."]
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
          ["Provar i comentar|Probar y comentar", "Prova el videojoc del company/a i dona comentaris concrets, amables i útils.|Prueba el videojuego del compañero/a y da comentarios concretos, amables y útiles.", "Dona comentaris generals («m'agrada») sense idees concretes.|Da comentarios generales («me gusta») sin ideas concretas."]
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

/* ── unitat 5 ── */
/* Tech Creadors · unitat 5 «Condicions» · guia del professorat (g5-1 … g5-4). Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Si toca… ---------- */
  'g5-1': {
    obj: [
      "L'alumne/a explica què és una condició: una pregunta que només es pot respondre amb sí o no.|El alumno/a explica qué es una condición: una pregunta que solo se puede responder con sí o no.",
      "L'alumne/a explica que el bloc «si» fa els blocs de dins només quan la resposta és sí.|El alumno/a explica que el bloque «si» hace los bloques de dentro solo cuando la respuesta es sí.",
      "L'alumne/a fa servir la condició «toca…» (un personatge o la vora) per fer que un personatge reaccioni a un xoc.|El alumno/a usa la condición «toca…» (un personaje o el borde) para que un personaje reaccione a un choque.",
      "L'alumne/a col·loca el «si» dins del «per sempre» i sap explicar per què fora del bucle no funciona.|El alumno/a coloca el «si» dentro del «por siempre» y sabe explicar por qué fuera del bucle no funciona."
    ],
    comp: [
      "Competència digital (CD5): crear animacions interactives amb programació per blocs|Competencia digital (CD5): crear animaciones interactivas con programación por bloques",
      "Pensament computacional: condicions, decisions i bucles que vigilen|Pensamiento computacional: condiciones, decisiones y bucles que vigilan",
      "Comunicació oral: formular regles «si…, llavors…» clares|Comunicación oral: formular reglas «si…, entonces…» claras",
      "Coneixement del medi: màquines de casa que decideixen soles|Conocimiento del medio: máquinas de casa que deciden solas"
    ],
    vocab: [
      ["Condició|Condición", "Una pregunta que només es respon amb sí o no.|Una pregunta que solo se responde con sí o no."],
      ["Si…|Si…", "El bloc que fa els blocs de dins només quan la condició és certa.|El bloque que hace los bloques de dentro solo cuando la condición es cierta."],
      ["Toca…|Toca…", "La condició que pregunta si el personatge xoca amb un altre, amb la vora o amb el ratolí.|La condición que pregunta si el personaje choca con otro, con el borde o con el ratón."],
      ["Vora|Borde", "El límit de l'escenari.|El límite del escenario."],
      ["Per sempre|Por siempre", "Bucle que no s'acaba mai: amb un «si» a dins, el personatge vigila tota l'estona.|Bucle que no se acaba nunca: con un «si» dentro, el personaje vigila todo el rato."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Si toca…»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Si toca…»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Targetes «Si… llavors…» retallades (un paquet per grup de 4)|Tarjetas «Si… entonces…» recortadas (un paquete por grupo de 4)",
        "Una bossa o capsa opaca per a les targetes de condició|Una bolsa o caja opaca para las tarjetas de condición"
      ],
      imprimir: ["Targetes «Si… llavors…»|Tarjetas «Si… entonces…»"],
      prep: [
        "Imprimir i retallar les targetes. Separar-les en dos munts: condicions i accions.|Imprimir y recortar las tarjetas. Separarlas en dos montones: condiciones y acciones.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada.",
        "Provar abans la demo de la diapositiva 7 (el gat i la roca) per saber què passarà.|Probar antes la demo de la diapositiva 7 (el gato y la roca) para saber qué pasará.",
        "Fer el repte «Arregla l'error» per veure com s'esborra un bloc i com es torna a posar dins del bucle.|Hacer el reto «Arregla el error» para ver cómo se borra un bloque y cómo se vuelve a poner dentro del bucle."
      ]
    },
    plan: [
      { min: 5, t: "Inici: la Festa de la Fruita|Inicio: la Fiesta de la Fruta", fase: 'inici',
        fa: "Presenta la missió de la unitat: un videojoc per a la Festa de la Fruita. Fes les preguntes de repàs sobre coordenades i tecles i recull respostes. Planteja el problema: com sap la cistella que una poma l'ha tocada?|Presenta la misión de la unidad: un videojuego para la Fiesta de la Fruta. Haz las preguntas de repaso sobre coordenadas y teclas y recoge respuestas. Plantea el problema: ¿cómo sabe la cesta que una manzana la ha tocado?",
        diu: ["Quin bloc fa baixar la poma?|¿Qué bloque hace bajar la manzana?", "Com pot saber un personatge que ha xocat amb un altre?|¿Cómo puede saber un personaje que ha chocado con otro?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Condicions i el bloc «si»|Condiciones y el bloque «si»", fase: 'teoria',
        fa: "Explica què és una condició amb exemples de la vida diària i demana'n més. Mostra l'animació del bloc «si»: amb el no se salta els blocs; amb el sí, els fa. Projecta la demo del gat i la roca i, abans, demana què creuen que passarà. Acaba amb l'error típic: el «si» fora del bucle.|Explica qué es una condición con ejemplos de la vida diaria y pide más. Muestra la animación del bloque «si»: con el no se salta los bloques; con el sí, los hace. Proyecta la demo del gato y la roca y, antes, pregunta qué creen que pasará. Termina con el error típico: el «si» fuera del bucle.",
        diu: ["Feu-me una pregunta que es pugui respondre només amb sí o no.|Hacedme una pregunta que se pueda responder solo con sí o no.", "Què fa el «si» quan la resposta és no?|¿Qué hace el «si» cuando la respuesta es no?", "Si el «si» és fora del bucle, quantes vegades pregunta?|Si el «si» está fuera del bucle, ¿cuántas veces pregunta?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Desconnectat: «Si… llavors…»|Desconectado: «Si… entonces…»", fase: 'desconnectat',
        fa: "Grups de 4. Una persona treu una targeta de condició i una d'acció i les llegeix com una regla: «Si portes sabatilles, fes un salt». Qui compleix la condició fa l'acció; qui no, es queda quiet. Després de tres rondes, cada grup inventa dues regles noves i les proposa a la classe. Remarca: si la resposta és no, no es fa res.|Grupos de 4. Una persona saca una tarjeta de condición y una de acción y las lee como una regla: «Si llevas zapatillas, da un salto». Quien cumple la condición hace la acción; quien no, se queda quieto. Después de tres rondas, cada grupo inventa dos reglas nuevas y las propone a la clase. Remarca: si la respuesta es no, no se hace nada.",
        diu: ["Primer la pregunta: et passa a tu? Sí o no?|Primero la pregunta: ¿te pasa a ti? ¿Sí o no?", "Si la resposta és no, què fas? Res! Com el bloc «si».|Si la respuesta es no, ¿qué haces? ¡Nada! Como el bloque «si»."],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 13, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la missió, les targetes, l'ordenació de la poma i la predicció del cranc. Al pas «Caçadors de condicions», que toquin «Ara no»: és per fer a casa. Abans de tocar «Comença» al cranc, demana que diguin en veu alta què passarà.|Cada alumno/a hace la misión, las tarjetas, la ordenación de la manzana y la predicción del cangrejo. En el paso «Cazadores de condiciones», que toquen «Ahora no»: es para hacer en casa. Antes de tocar «Empieza» en el cangrejo, pide que digan en voz alta qué pasará.",
        diu: ["Llegeix el programa abans d'executar-lo: què creus que farà?|Lee el programa antes de ejecutarlo: ¿qué crees que hará?", "Quin bloc fa la pregunta?|¿Qué bloque hace la pregunta?"],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: històries, targetes, ordenar, la predicció i l'escenari del cranc i tocar el bloc que pregunta.|De «La misión» hasta «Investiga»: historias, tarjetas, ordenar, la predicción y el escenario del cangrejo y tocar el bloque que pregunta.", org: "Individual|Individual" },
      { min: 13, t: "Pausa i reptes|Pausa y retos", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Després programa amb la classe el primer repte (la poma que s'amaga) a la pantalla gran i deixa'ls fer la resta. Recorda que hi ha dues proves: el programa ha de funcionar a totes dues. Qui acabi ajuda amb preguntes.|Haced la pausa activa juntos. Después programa con la clase el primer reto (la manzana que se esconde) en la pantalla grande y déjales hacer el resto. Recuerda que hay dos pruebas: el programa tiene que funcionar en las dos. Quien termine ayuda con preguntas.",
        diu: ["On va el «si»: dins o fora del «per sempre»?|¿Dónde va el «si»: dentro o fuera del «por siempre»?", "Per què a la prova 2 la poma no s'ha d'amagar?|¿Por qué en la prueba 2 la manzana no se tiene que esconder?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: atrapa la poma, l'ocell i la vora, la poma que torna i arregla l'error.|«Pausa activa» y los cuatro retos: atrapa la manzana, el pájaro y el borde, la manzana que vuelve y arregla el error.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la meva primera condició|Crea: mi primera condición", fase: 'crea',
        fa: "Cada alumne/a decideix com reacciona en Numi quan toca el regal. En parelles, s'ensenyen el programa i l'altre/a endevina la reacció abans d'executar-lo.|Cada alumno/a decide cómo reacciona Numi cuando toca el regalo. Por parejas, se enseñan el programa y el otro/a adivina la reacción antes de ejecutarlo.",
        diu: ["Quina reacció has triat? Ningú no l'ha de fer igual.|¿Qué reacción has elegido? Nadie la tiene que hacer igual."],
        slides: ['s15'], app: "Pas «Crea»: La meva primera condició.|Paso «Crea»: Mi primera condición.", org: "Individual i en parelles|Individual y por parejas" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals i el «com m'he sentit», i fes el tiquet de sortida a la porta.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales y el «cómo me he sentido», y haz el ticket de salida en la puerta.",
        diu: ["Digues una condició que hagis fet servir avui.|Di una condición que hayas usado hoy."],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el «si» abans del «per sempre» i no entén per què no passa res.|Pone el «si» antes del «por siempre» y no entiende por qué no pasa nada.", "Pregunta: quan pregunta la poma si toca la cistella? Que segueixi el programa amb el dit, bloc a bloc, i vegi que el «si» només es fa una vegada.|Pregunta: ¿cuándo pregunta la manzana si toca la cesta? Que siga el programa con el dedo, bloque a bloque, y vea que el «si» solo se hace una vez."],
      ["Posa els blocs de la reacció a sota del «si» i no a dins.|Pone los bloques de la reacción debajo del «si» y no dentro.", "Fes-li notar el forat del bloc «si»: el que hi ha dins només passa amb el sí. Que toqui el forat abans d'afegir el bloc.|Hazle notar el hueco del bloque «si»: lo que hay dentro solo pasa con el sí. Que toque el hueco antes de añadir el bloque."],
      ["No sap canviar «toca la cistella» per «toca la vora».|No sabe cambiar «toca la cesta» por «toca el borde».", "Recorda-li que les paraules en negreta dels blocs es poden tocar. Què passa si toques «la cistella»?|Recuérdale que las palabras en negrita de los bloques se pueden tocar. ¿Qué pasa si tocas «la cesta»?"],
      ["Funciona a la prova 1 però no a la 2 i pensa que l'app s'equivoca.|Funciona en la prueba 1 pero no en la 2 y piensa que la app se equivoca.", "Que miri on és la cistella a la prova 2. El programa ha de decidir sol, sense saber on és: per això cal la pregunta.|Que mire dónde está la cesta en la prueba 2. El programa tiene que decidir solo, sin saber dónde está: por eso hace falta la pregunta."],
      ["Per arreglar l'error, prova de moure el «si» amb les fletxes i no entra al bucle.|Para arreglar el error, intenta mover el «si» con las flechas y no entra en el bucle.", "Les fletxes mouen dins la mateixa llista. Que l'esborri, toqui el forat de dins del «per sempre» i el torni a posar.|Las flechas mueven dentro de la misma lista. Que lo borre, toque el hueco de dentro del «por siempre» y lo vuelva a poner."]
    ],
    diff: {
      mes: "Afegir a la poma una tercera regla: si toca el ratolí (o el dit), fa un so. Inventar una reacció diferent per a cada prova del repte de l'ocell.|Añadir a la manzana una tercera regla: si toca el ratón (o el dedo), hace un sonido. Inventar una reacción diferente para cada prueba del reto del pájaro.",
      menys: "Fer els reptes amb la targeta «Si… llavors…» al costat: primer llegir la regla en veu alta i després buscar els blocs. Començar pel primer repte, que ja té el bucle fet.|Hacer los retos con la tarjeta «Si… entonces…» al lado: primero leer la regla en voz alta y después buscar los bloques. Empezar por el primer reto, que ya tiene el bucle hecho."
    },
    aval: {
      ticket: ["Digues una condició de la vida diària i què passa si la resposta és sí.|Di una condición de la vida diaria y qué pasa si la respuesta es sí.", "On has de posar el «si toca…» perquè el personatge vigili sempre?|¿Dónde tienes que poner el «si toca…» para que el personaje vigile siempre?"],
      rubric: [
        ["Concepte de condició|Concepto de condición", "Explica que és una pregunta de sí o no i en dona exemples propis.|Explica que es una pregunta de sí o no y da ejemplos propios.", "Reconeix condicions en exemples, però no les explica.|Reconoce condiciones en ejemplos, pero no las explica."],
        ["Bloc «si»|Bloque «si»", "Posa la reacció dins del «si» i explica què passa amb el no.|Pone la reacción dentro del «si» y explica qué pasa con el no.", "Fa servir el «si», però de vegades posa la reacció a fora.|Usa el «si», pero a veces pone la reacción fuera."],
        ["El «si» dins del bucle|El «si» dentro del bucle", "Arregla el programa de l'error i explica per què el «si» va dins del «per sempre».|Arregla el programa del error y explica por qué el «si» va dentro del «por siempre».", "Necessita ajuda per veure que fora del bucle només pregunta una vegada.|Necesita ayuda para ver que fuera del bucle solo pregunta una vez."]
      ]
    },
    casa: "A casa, feu junts «Caçadors de condicions»: busqueu tres màquines que decideixen soles (la nevera, la rentadora, el llum de l'escala…) i escriviu-ne la regla «Si…, llavors…».|En casa, haced juntos «Cazadores de condiciones»: buscad tres máquinas que deciden solas (la nevera, la lavadora, la luz de la escalera…) y escribid su regla «Si…, entonces…».",
    slides: [
      { id: 's1', k: 'portada', t: "Si toca…|Si toca…", x: "Unitat 5: Condicions. Avui els personatges aprendran a fer preguntes.|Unidad 5: Condiciones. Hoy los personajes aprenderán a hacer preguntas.",
        nota: "Explica que aquesta unitat acabarà amb un videojoc propi: Atrapa la fruita.|Explica que esta unidad terminará con un videojuego propio: Atrapa la fruta." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["Quin bloc fa baixar la poma? (canvia y en -5)|¿Qué bloque hace bajar la manzana? (cambia y en -5)", "Quan es fan els blocs de «Quan premo la tecla espai»?|¿Cuándo se hacen los bloques de «Al pulsar la tecla espacio»?"],
        nota: "Dues preguntes ràpides a mà alçada. Si dubten amb la y, dibuixa l'eix a la pissarra.|Dos preguntas rápidas a mano alzada. Si dudan con la y, dibuja el eje en la pizarra." },
      { id: 's3', k: 'pregunta', t: "Com sap la cistella que l'ha tocat una poma?|¿Cómo sabe la cesta que la ha tocado una manzana?", x: "Pensa-hi un moment abans de respondre.|Piénsalo un momento antes de responder.",
        nota: "Recull idees sense corregir. Busca la paraula «preguntar»: el personatge s'ha de preguntar si toca la poma.|Recoge ideas sin corregir. Busca la palabra «preguntar»: el personaje tiene que preguntarse si toca la manzana." },
      { id: 's4', k: 'anim', t: "Una condició és una pregunta de sí o no|Una condición es una pregunta de sí o no", anim: 'g5cond', x: "«Toca la cistella?» Només hi ha dues respostes.|«¿Toca la cesta?» Solo hay dos respuestas.",
        nota: "Demana preguntes de sí o no i d'altres que no ho són («De quin color és?») per veure la diferència.|Pide preguntas de sí o no y otras que no lo son («¿De qué color es?») para ver la diferencia." },
      { id: 's5', k: 'concepte', t: "Condicions de cada dia|Condiciones de cada día", punts: ["Si plou, agafo el paraigua.|Si llueve, cojo el paraguas.", "Si el semàfor és verd, passo.|Si el semáforo está verde, paso.", "Si obro la nevera, s'encén el llum.|Si abro la nevera, se enciende la luz."],
        nota: "Per a cada frase, que identifiquin la pregunta de sí o no i el que passa amb el sí.|Para cada frase, que identifiquen la pregunta de sí o no y lo que pasa con el sí." },
      { id: 's6', k: 'anim', t: "El bloc «si»|El bloque «si»", anim: 'g5if', x: "Amb el sí, fa els blocs de dins. Amb el no, se'ls salta.|Con el sí, hace los bloques de dentro. Con el no, se los salta.",
        nota: "Assenyala el forat del bloc: és on van els blocs que només passen amb el sí.|Señala el hueco del bloque: es donde van los bloques que solo pasan con el sí." },
      { id: 's7', k: 'media', t: "El gat i la roca|El gato y la roca", x: "Què creieu que farà el gat quan toqui la roca?|¿Qué creéis que hará el gato cuando toque la roca?",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'gat', art: 'gat', x: -150, y: -110, dir: 90 }, { id: 'roca', art: 'roca', x: 120, y: -110 }] }, prog: '@gat flag{ forever{ move:4 bounce if:touch:roca{ say:"Ai, una roca!|¡Ay, una roca!",1 turn:180 } } }', time: 7 },
        nota: "Primer, que llegeixin els blocs i facin una predicció. Després, deixa-la funcionar dues vegades.|Primero, que lean los bloques y hagan una predicción. Después, déjala funcionar dos veces." },
      { id: 's8', k: 'anim', t: "Dins o fora del bucle?|¿Dentro o fuera del bucle?", anim: 'g5loop', x: "Dins del «per sempre», pregunta a cada volta.|Dentro del «por siempre», pregunta en cada vuelta.",
        nota: "Aquest és l'error més freqüent de la sessió. Fes-los dir en veu alta: «el si va dins del per sempre».|Este es el error más frecuente de la sesión. Hazles decir en voz alta: «el si va dentro del por siempre»." },
      { id: 's9', k: 'media', t: "«Si toques la vora, rebota»|«Si tocas el borde, rebota»", x: "El bloc que ja coneixíeu té una condició amagada.|El bloque que ya conocíais tiene una condición escondida.",
        media: { k: 'stage', w: { bg: 'cel', sprites: [{ id: 'pilota', art: 'pilota', x: -100, y: 20, dir: 90 }] }, prog: '@pilota flag{ forever{ move:7 if:touch:edge{ turn:180 sound:boing } } }', time: 6 },
        nota: "Pregunta quina és la condició i què fa amb el sí. Ara poden fer reaccions pròpies a la vora.|Pregunta cuál es la condición y qué hace con el sí. Ahora pueden hacer reacciones propias en el borde." },
      { id: 's10', k: 'activitat', t: "Si… llavors…|Si… entonces…", timer: 11, punts: ["Treu una condició i una acció.|Saca una condición y una acción.", "Llegiu la regla en veu alta.|Leed la regla en voz alta.", "Qui compleix la condició fa l'acció; qui no, quiet/a.|Quien cumple la condición hace la acción; quien no, quieto/a.", "Al final, inventeu dues regles noves.|Al final, inventad dos reglas nuevas."],
        nota: "Comença tu amb una ronda de mostra davant de tothom.|Empieza tú con una ronda de muestra delante de todos." },
      { id: 's11', k: 'activitat', t: "Com el bloc «si»|Como el bloque «si»", punts: ["Primer, la pregunta.|Primero, la pregunta.", "Sí: faig l'acció.|Sí: hago la acción.", "No: no faig res i espero la següent.|No: no hago nada y espero la siguiente."],
        nota: "Deixa-la projectada mentre fan l'activitat.|Déjala proyectada mientras hacen la actividad." },
      { id: 's12', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 13, punts: ["Obre la sessió «Si toca…».|Abre la sesión «Si toca…».", "«Caçadors de condicions»: toca «Ara no» (és per a casa).|«Cazadores de condiciones»: toca «Ahora no» (es para casa).", "Abans d'executar el cranc, digues què farà.|Antes de ejecutar el cangrejo, di qué hará.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Passeja i fes preguntes de predicció.|Pasea y haz preguntas de predicción." },
      { id: 's13', k: 'repte', t: "Reptes|Retos", timer: 12, punts: ["1. Atrapa la poma|1. Atrapa la manzana", "2. L'ocell i la vora|2. El pájaro y el borde", "3. La poma que torna|3. La manzana que vuelve", "4. Arregla l'error|4. Arregla el error"],
        nota: "Fes el primer junts a la pantalla gran.|Haced el primero juntos en la pantalla grande." },
      { id: 's14', k: 'concepte', t: "Dues proves, un programa|Dos pruebas, un programa", punts: ["A cada prova, la cistella és en un lloc diferent.|En cada prueba, la cesta está en un sitio diferente.", "El programa no sap on és: ho ha de preguntar.|El programa no sabe dónde está: lo tiene que preguntar.", "Per això cal el «si».|Por eso hace falta el «si»."],
        nota: "Explica-ho quan algú digui que «a la prova 1 ja funcionava».|Explícalo cuando alguien diga que «en la prueba 1 ya funcionaba»." },
      { id: 's15', k: 'activitat', t: "Crea: la meva primera condició|Crea: mi primera condición", timer: 5, x: "En Numi toca el regal. Com reacciona? Tu decideixes!|Numi toca el regalo. ¿Cómo reacciona? ¡Tú decides!",
        nota: "Valora les idees diferents: un so, un canvi de vestit, una frase graciosa.|Valora las ideas diferentes: un sonido, un cambio de disfraz, una frase graciosa." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Una condició és una pregunta de sí o no.|Una condición es una pregunta de sí o no.", "El «si» fa els blocs de dins només amb el sí.|El «si» hace los bloques de dentro solo con el sí.", "El «si» va dins del «per sempre» per vigilar sempre.|El «si» va dentro del «por siempre» para vigilar siempre."],
        nota: "Torna a la pregunta del principi: ara ja saben com ho sap la cistella.|Vuelve a la pregunta del principio: ahora ya saben cómo lo sabe la cesta." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Una condició de la vida diària.|Una condición de la vida diaria.", "On va el «si toca…»?|¿Dónde va el «si toca…»?"],
        nota: "Una pregunta per alumne/a a la porta.|Una pregunta por alumno/a en la puerta." }
    ],
    print: [
      { id: 'p1', t: "Targetes «Si… llavors…»|Tarjetas «Si… entonces…»", k: 'targetes',
        intro: "Un paquet per grup de 4. Les condicions van en una bossa i les accions en una altra. Es treu una de cada i es llegeix la regla.|Un paquete por grupo de 4. Las condiciones van en una bolsa y las acciones en otra. Se saca una de cada y se lee la regla.",
        items: [
          { t: "Si portes sabatilles… 👟|Si llevas zapatillas… 👟", n: 1 }, { t: "Si tens un germà o germana… 👫|Si tienes un hermano o hermana… 👫", n: 1 },
          { t: "Si t'agraden les pomes… 🍎|Si te gustan las manzanas… 🍎", n: 1 }, { t: "Si portes alguna cosa blava… 🔵|Si llevas algo azul… 🔵", n: 1 },
          { t: "Si has esmorzat fruita… 🍌|Si has desayunado fruta… 🍌", n: 1 }, { t: "Si tens una mascota… 🐱|Si tienes una mascota… 🐱", n: 1 },
          { t: "…fes un salt 🦘|…da un salto 🦘", n: 1 }, { t: "…toca't el nas 👃|…tócate la nariz 👃", n: 1 },
          { t: "…aixeca els braços 🙌|…levanta los brazos 🙌", n: 1 }, { t: "…fes una volta 🔄|…da una vuelta 🔄", n: 1 },
          { t: "…pica de mans tres vegades 👏|…da tres palmadas 👏", n: 1 }, { t: "…ajup-te 🧎|…agáchate 🧎", n: 1 }
        ] }
    ]
  },
  /* ---------- Sessió 2 · Colors que avisen ---------- */
  'g5-2': {
    obj: [
      "L'alumne/a fa servir la condició «toca el color» per fer que un personatge reaccioni a una zona del fons.|El alumno/a usa la condición «toca el color» para que un personaje reaccione a una zona del fondo.",
      "L'alumne/a explica que el «si… si no» sempre fa una de les dues parts, mai totes dues.|El alumno/a explica que el «si… si no» siempre hace una de las dos partes, nunca las dos.",
      "L'alumne/a programa un personatge que cau si no toca l'herba i camina si la toca.|El alumno/a programa un personaje que cae si no toca la hierba y camina si la toca.",
      "L'alumne/a dona un significat a cada color d'un laberint i el programa amb un «si» per color.|El alumno/a da un significado a cada color de un laberinto y lo programa con un «si» por color."
    ],
    comp: [
      "Competència digital (CD5): programar decisions en animacions i videojocs propis|Competencia digital (CD5): programar decisiones en animaciones y videojuegos propios",
      "Pensament computacional: condicions amb dues sortides («si… si no»)|Pensamiento computacional: condiciones con dos salidas («si… si no»)",
      "Educació viària i ciutadania: els colors del semàfor com a codi compartit|Educación vial y ciudadanía: los colores del semáforo como código compartido",
      "Educació artística: el color com a senyal|Educación artística: el color como señal"
    ],
    vocab: [
      ["Toca el color|Toca el color", "Condició que pregunta si el personatge trepitja un color del fons.|Condición que pregunta si el personaje pisa un color del fondo."],
      ["Si… si no|Si… si no", "Bloc amb dues parts: una per al sí i una altra per al no.|Bloque con dos partes: una para el sí y otra para el no."],
      ["Senyal|Señal", "Un color, un so o un dibuix que avisa d'alguna cosa.|Un color, un sonido o un dibujo que avisa de algo."],
      ["Gravetat|Gravedad", "Quan un personatge cau fins que toca el terra.|Cuando un personaje cae hasta que toca el suelo."],
      ["Atura tot|Para todo", "Bloc que acaba el programa: tots els personatges s'aturen.|Bloque que acaba el programa: todos los personajes se paran."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb la sessió «Colors que avisen»|Un ordenador por alumno/a con la sesión «Colores que avisan»",
        "Projector i la presentació de la sessió|Proyector y la presentación de la sesión",
        "La graella «El camí dels colors» (una per parella) i llapis de colors blau, verd i vermell|La cuadrícula «El camino de los colores» (una por pareja) y lápices de colores azul, verde y rojo",
        "Una fitxa o goma petita per parella que farà de personatge|Una ficha o goma pequeña por pareja que hará de personaje"
      ],
      imprimir: ["El camí dels colors|El camino de los colores"],
      prep: [
        "Imprimir una graella per parella.|Imprimir una cuadrícula por pareja.",
        "Provar el repte del laberint amb les fletxes i amb «Comprova» per saber com funciona.|Probar el reto del laberinto con las flechas y con «Comprueba» para saber cómo funciona.",
        "Recordar com s'afegeix el «si no»: tocar el bloc «si» i el botó «Afegeix «si no»».|Recordar cómo se añade el «si no»: tocar el bloque «si» y el botón «Añade «si no»».",
        "Deixar els ordinadors amb la sessió iniciada.|Dejar los ordenadores con la sesión iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Inici: colors que avisen|Inicio: colores que avisan", fase: 'inici',
        fa: "Repassa el «si» dins del «per sempre». Pregunta on veuen colors que avisen: el semàfor, les sortides d'emergència, el gas de la cuina… Presenta en Pinces, el cranc que no sap nedar.|Repasa el «si» dentro del «por siempre». Pregunta dónde ven colores que avisan: el semáforo, las salidas de emergencia, el fuego de la cocina… Presenta a Pinzas, el cangrejo que no sabe nadar.",
        diu: ["On heu vist colors que volen dir alguna cosa?|¿Dónde habéis visto colores que quieren decir algo?", "Què vol dir el verd d'una sortida d'emergència?|¿Qué quiere decir el verde de una salida de emergencia?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Toca el color i «si… si no»|Toca el color y «si… si no»", fase: 'teoria',
        fa: "Mostra l'animació del cranc i la demo de la platja. Explica el «si… si no» amb el paraigua i la gorra i fes que diguin quina part es fa en cada cas. Projecta la demo d'en Numi que cau i camina, i acaba amb el laberint: un «si» per a cada color.|Muestra la animación del cangrejo y la demo de la playa. Explica el «si… si no» con el paraguas y la gorra y haz que digan qué parte se hace en cada caso. Proyecta la demo de Numi que cae y camina, y termina con el laberinto: un «si» para cada color.",
        diu: ["Si no plou, què agafo?|Si no llueve, ¿qué cojo?", "Pot fer les dues parts alhora?|¿Puede hacer las dos partes a la vez?", "En Numi és a l'aire: quina part es fa?|Numi está en el aire: ¿qué parte se hace?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Desconnectat: el camí dels colors|Desconectado: el camino de los colores", fase: 'desconnectat',
        fa: "En parelles, pinten a la graella unes quantes caselles blaves (aigua), vermelles (trampa) i verdes (sortida) i marquen l'inici. Escriuen les regles amb «si… si no». Després intercanvien la graella amb una altra parella: un/a diu fletxes i l'altre/a mou la fitxa i aplica les regles en veu alta a cada casella.|Por parejas, pintan en la cuadrícula unas cuantas casillas azules (agua), rojas (trampa) y verdes (salida) y marcan el inicio. Escriben las reglas con «si… si no». Después intercambian la cuadrícula con otra pareja: uno/a dice flechas y el otro/a mueve la ficha y aplica las reglas en voz alta en cada casilla.",
        diu: ["A cada casella, pregunteu: de quin color és?|En cada casilla, preguntad: ¿de qué color es?", "Si no és de cap color, què fa la fitxa?|Si no es de ningún color, ¿qué hace la ficha?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 12, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Fan la missió, les targetes, la pregunta del semàfor, la predicció del cranc i el bloc del «si no». El pas «El semàfor de casa» és per fer a casa.|Hacen la misión, las tarjetas, la pregunta del semáforo, la predicción del cangrejo y el bloque del «si no». El paso «El semáforo de casa» es para hacer en casa.",
        diu: ["Quina part es fa ara, la de dalt o la del «si no»?|¿Qué parte se hace ahora, la de arriba o la del «si no»?"],
        slides: ['s11'], app: "De «La missió» fins a «Investiga».|De «La misión» hasta «Investiga».", org: "Individual|Individual" },
      { min: 14, t: "Pausa i reptes|Pausa y retos", fase: 'ordinador',
        fa: "Pausa activa del semàfor humà. Després, els quatre reptes. Al laberint, explica que primer es prova amb «Comença» i les fletxes, i després «Comprova» prem les tecles sola a les dues proves.|Pausa activa del semáforo humano. Después, los cuatro retos. En el laberinto, explica que primero se prueba con «Empieza» y las flechas, y después «Comprueba» pulsa las teclas sola en las dos pruebas.",
        diu: ["Com s'afegeix el «si no»?|¿Cómo se añade el «si no»?", "Al laberint, què ha de passar si toques la paret?|En el laberinto, ¿qué tiene que pasar si tocas la pared?"],
        slides: ['s12', 's13'], app: "«Pausa activa» i els reptes: el cranc, en Numi cau, les respostes canviades i el laberint.|«Pausa activa» y los retos: el cangrejo, Numi cae, las respuestas cambiadas y el laberinto.", org: "Individual|Individual" },
      { min: 5, t: "Crea: el meu avís de colors|Crea: mi aviso de colores", fase: 'crea',
        fa: "La Tuga passeja per la platja. Cadascú decideix què fa al mar i què fa a la sorra. Ensenyeu-ho al company/a.|Tuga pasea por la playa. Cada uno decide qué hace en el mar y qué hace en la arena. Enseñadlo al compañero/a.",
        diu: ["Què fa la Tuga al mar? I si no hi és?|¿Qué hace Tuga en el mar? ¿Y si no está?"],
        slides: ['s14'], app: "Pas «Crea»: El meu avís de colors.|Paso «Crea»: Mi aviso de colores.", org: "Individual|Individual" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Resum, preguntes finals i tiquet de sortida.|Resumen, preguntas finales y ticket de salida.",
        diu: ["Digues un «si… si no» de la vida diària.|Di un «si… si no» de la vida diaria."],
        slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa dos «si» (un per al sí i un altre igual per al no) i els dos fan el mateix.|Pone dos «si» (uno para el sí y otro igual para el no) y los dos hacen lo mismo.", "Pregunta: quina part es fa quan la resposta és no? Ensenya-li el botó «Afegeix «si no»».|Pregunta: ¿qué parte se hace cuando la respuesta es no? Enséñale el botón «Añade «si no»»."],
      ["En Numi s'enfonsa a l'herba perquè el bloc de caure és fora del «si no».|Numi se hunde en la hierba porque el bloque de caer está fuera del «si no».", "Que llegeixi en veu alta: «si toca el verd, camina; si no, cau». On és el bloc de caure?|Que lea en voz alta: «si toca el verde, camina; si no, cae». ¿Dónde está el bloque de caer?"],
      ["Al laberint, mou l'Estel amb les fletxes però no toca «Comprova».|En el laberinto, mueve a Estel con las flechas pero no toca «Comprueba».", "Recorda: amb «Comença» proves; amb «Comprova», l'app prem les tecles sola i mira si les regles funcionen.|Recuerda: con «Empieza» pruebas; con «Comprueba», la app pulsa las teclas sola y mira si las reglas funcionan."],
      ["Al laberint, posa «digues He sortit!» fora del «si toca el verd».|En el laberinto, pone «di ¡He salido!» fuera del «si toca el verde».", "Pregunta: quan ha de dir «He sortit»? Sempre, o només quan toca el verd?|Pregunta: ¿cuándo tiene que decir «He salido»? ¿Siempre, o solo cuando toca el verde?"],
      ["Confon el color de la condició (tria el groc en lloc del blau).|Confunde el color de la condición (elige el amarillo en lugar del azul).", "Que toqui el nom del color dins del bloc i triï el que correspon al mar. Quin color té el mar al fons?|Que toque el nombre del color dentro del bloque y elija el que corresponde al mar. ¿Qué color tiene el mar en el fondo?"]
    ],
    diff: {
      mes: "Al laberint, afegir una regla per al vermell (la trampa): si el toca, torna a l'inici i diu «Ai!». A la Tuga, afegir regles per a les fletxes perquè canviï de vestit quan neda.|En el laberinto, añadir una regla para el rojo (la trampa): si lo toca, vuelve al inicio y dice «¡Ay!». En Tuga, añadir reglas para las flechas para que cambie de disfraz cuando nada.",
      menys: "Fer primer els reptes del cranc i d'en Numi, que ja tenen la pregunta del color posada. Tenir la frase «si…, si no…» escrita en un paper al costat i assenyalar cada part.|Hacer primero los retos del cangrejo y de Numi, que ya tienen la pregunta del color puesta. Tener la frase «si…, si no…» escrita en un papel al lado y señalar cada parte."
    },
    aval: {
      ticket: ["Digues un «si… si no» de la vida diària.|Di un «si… si no» de la vida diaria.", "Quantes parts fa cada vegada un «si… si no»?|¿Cuántas partes hace cada vez un «si… si no»?"],
      rubric: [
        ["Condició de color|Condición de color", "Tria el color correcte i explica què avisa.|Elige el color correcto y explica qué avisa.", "Fa servir el color amb ajuda.|Usa el color con ayuda."],
        ["«Si… si no»|«Si… si no»", "Posa cada bloc a la part que toca i explica que només se'n fa una.|Pone cada bloque en la parte que toca y explica que solo se hace una.", "Afegeix el «si no», però confon les parts.|Añade el «si no», pero confunde las partes."],
        ["Regles del laberint|Reglas del laberinto", "Programa una regla per a cada color i la comprova a les dues proves.|Programa una regla para cada color y la comprueba en las dos pruebas.", "Programa una de les regles, però no l'altra.|Programa una de las reglas, pero no la otra."]
      ]
    },
    casa: "A casa, feu «El semàfor de casa» amb dos papers de colors: si és verd, camina; si no, atura't. Després inventeu un tercer color amb una regla nova.|En casa, haced «El semáforo de casa» con dos papeles de colores: si es verde, camina; si no, párate. Después inventad un tercer color con una regla nueva.",
    slides: [
      { id: 's1', k: 'portada', t: "Colors que avisen|Colores que avisan", x: "Avui el fons de l'escenari parlarà amb els personatges.|Hoy el fondo del escenario hablará con los personajes.",
        nota: "Presenta l'escena de la platja i en Pinces.|Presenta la escena de la playa y a Pinzas." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["On va el «si toca…»?|¿Dónde va el «si toca…»?", "Al laberint, què volia dir el blau?|En el laberinto, ¿qué quería decir el azul?"],
        nota: "Si no recorden el laberint, mostra'n el fons a la diapositiva 8.|Si no recuerdan el laberinto, muestra su fondo en la diapositiva 8." },
      { id: 's3', k: 'pregunta', t: "On hi ha colors que avisen?|¿Dónde hay colores que avisan?", x: "Pensa en el carrer, a l'escola i a casa.|Piensa en la calle, en la escuela y en casa.",
        nota: "Apunta les respostes a la pissarra: hi tornareu al final.|Apunta las respuestas en la pizarra: volveréis a ellas al final." },
      { id: 's4', k: 'anim', t: "El fons avisa|El fondo avisa", anim: 'g5color', x: "«Toca el color blau?» El cranc ho pregunta tota l'estona.|«¿Toca el color azul?» El cangrejo lo pregunta todo el rato.",
        nota: "Fes notar l'anell de punts: és com si el cranc notés el que trepitja.|Haz notar el anillo de puntos: es como si el cangrejo notara lo que pisa." },
      { id: 's5', k: 'media', t: "En Pinces no es mulla|Pinzas no se moja", x: "Puja, toca el blau i torna a la sorra.|Sube, toca el azul y vuelve a la arena.",
        media: { k: 'stage', w: { bg: 'platja', sprites: [{ id: 'cranc', art: 'cranc', x: -60, y: -150 }] }, prog: '@cranc flag{ forever{ chy:2 if:color:blue{ think:"Aigua!|¡Agua!",1 sety:-150 } } }', time: 7 },
        nota: "Pregunta què passaria sense el «si»: el cranc pujaria fins al cel.|Pregunta qué pasaría sin el «si»: el cangrejo subiría hasta el cielo." },
      { id: 's6', k: 'anim', t: "Si… si no|Si… si no", anim: 'g5else', x: "Una pregunta, dues respostes: sempre en fa una.|Una pregunta, dos respuestas: siempre hace una.",
        nota: "Fes-los dir en veu alta la regla del paraigua amb el «si no».|Hazles decir en voz alta la regla del paraguas con el «si no»." },
      { id: 's7', k: 'media', t: "Caure o caminar|Caer o caminar", x: "Si toca el verd, camina; si no, cau.|Si toca el verde, camina; si no, cae.",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'numi', art: 'numi', x: -170, y: 130, dir: 90, size: 80 }] }, prog: '@numi flag{ forever{ if:color:green{ move:3 } else{ chy:-5 } } }', time: 6 },
        nota: "Atura la demo quan en Numi és a l'aire i pregunta quina part es fa. Torna-la a engegar quan arriba a l'herba.|Para la demo cuando Numi está en el aire y pregunta qué parte se hace. Vuelve a ponerla en marcha cuando llega a la hierba." },
      { id: 's8', k: 'media', t: "Cada color, una regla|Cada color, una regla", x: "Blau: paret. Vermell: trampa. Verd: sortida.|Azul: pared. Rojo: trampa. Verde: salida.",
        media: { k: 'stage', w: { bg: 'laberint', sprites: [{ id: 'estel', art: 'estel', x: -175, y: 100, size: 60 }] }, prog: '@estel flag{ glide:1,-175,-80 glide:0.8,-75,-80 glide:1,-75,80 glide:0.8,25,80 glide:1,25,-80 glide:0.8,125,-80 } flag{ forever{ if:color:green{ say:"He sortit!|¡He salido!" stop:all } } }', time: 7 },
        nota: "Pregunta quina regla falta per a les parets i quina per a la trampa: les programaran al repte.|Pregunta qué regla falta para las paredes y cuál para la trampa: las programarán en el reto." },
      { id: 's9', k: 'activitat', t: "El camí dels colors|El camino de los colores", timer: 11, punts: ["Pinteu caselles blaves, vermelles i verdes.|Pintad casillas azules, rojas y verdes.", "Escriviu les regles amb «si… si no».|Escribid las reglas con «si… si no».", "Intercanvieu la graella amb una altra parella.|Intercambiad la cuadrícula con otra pareja.", "Un/a diu fletxes, l'altre/a mou i aplica les regles.|Uno/a dice flechas, el otro/a mueve y aplica las reglas."],
        nota: "Limita-ho a 3 o 4 caselles de cada color perquè hi hagi camí.|Limítalo a 3 o 4 casillas de cada color para que haya camino." },
      { id: 's10', k: 'activitat', t: "Exemple de regles|Ejemplo de reglas", punts: ["Si toca el blau, torna a l'inici.|Si toca el azul, vuelve al inicio.", "Si toca el verd, has sortit!|Si toca el verde, ¡has salido!", "Si no, continua.|Si no, continúa."],
        nota: "Deixa-la projectada com a model.|Déjala proyectada como modelo." },
      { id: 's11', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 12, punts: ["Obre «Colors que avisen».|Abre «Colores que avisan».", "«El semàfor de casa»: toca «Ara no».|«El semáforo de casa»: toca «Ahora no».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Comprova que tothom arriba a l'«Investiga».|Comprueba que todos llegan a «Investiga»." },
      { id: 's12', k: 'repte', t: "Reptes|Retos", timer: 14, punts: ["1. En Pinces no es mulla|1. Pinzas no se moja", "2. En Numi cau del cel|2. Numi cae del cielo", "3. Les respostes canviades|3. Las respuestas cambiadas", "4. El laberint|4. El laberinto"],
        nota: "Al laberint, ensenya com es prova amb les fletxes i després «Comprova».|En el laberinto, enseña cómo se prueba con las flechas y después «Comprueba»." },
      { id: 's13', k: 'concepte', t: "Afegir el «si no»|Añadir el «si no»", punts: ["Toca el bloc «si».|Toca el bloque «si».", "Toca «Afegeix «si no»».|Toca «Añade «si no»».", "Posa els blocs del no a la part de baix.|Pon los bloques del no en la parte de abajo."],
        nota: "Fes-ho una vegada a la pantalla gran.|Hazlo una vez en la pantalla grande." },
      { id: 's14', k: 'activitat', t: "Crea: el meu avís de colors|Crea: mi aviso de colores", timer: 5, x: "Què fa la Tuga al mar? I a la sorra?|¿Qué hace Tuga en el mar? ¿Y en la arena?",
        nota: "Valora que cada part faci una cosa diferent.|Valora que cada parte haga una cosa diferente." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["«Toca el color» pregunta pel fons.|«Toca el color» pregunta por el fondo.", "«Si… si no» té dues parts.|«Si… si no» tiene dos partes.", "Sempre en fa una, mai les dues.|Siempre hace una, nunca las dos."],
        nota: "Torna a la llista de colors que avisen de la pissarra.|Vuelve a la lista de colores que avisan de la pizarra." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Un «si… si no» de la vida diària.|Un «si… si no» de la vida diaria.", "Quantes parts fa cada vegada?|¿Cuántas partes hace cada vez?"],
        nota: "Anota qui confon les dues parts.|Anota quién confunde las dos partes." }
    ],
    print: [
      { id: 'p1', t: "El camí dels colors|El camino de los colores", k: 'graella', w: 6, h: 6,
        intro: "Pinteu 3 o 4 caselles de cada color i marqueu l'inici amb una estrella. Escriviu les regles i doneu la graella a una altra parella.|Pintad 3 o 4 casillas de cada color y marcad el inicio con una estrella. Escribid las reglas y dad la cuadrícula a otra pareja.",
        legend: [['🟦', "Blau: aigua o paret|Azul: agua o pared"], ['🟥', 'Vermell: trampa|Rojo: trampa'], ['🟩', 'Verd: sortida|Verde: salida'], ['⭐', 'Inici|Inicio']],
        items: [{ q: "Regla 1: Si toca el blau…|Regla 1: Si toca el azul…" }, { q: "Regla 2: Si toca el vermell…|Regla 2: Si toca el rojo…" }, { q: "Regla 3: Si toca el verd…, si no…|Regla 3: Si toca el verde…, si no…" }] }
    ]
  },
  /* ---------- Sessió 3 · I, o, no ---------- */
  'g5-3': {
    obj: [
      "L'alumne/a explica que amb «i» calen les dues condicions i amb «o» n'hi ha prou amb una.|El alumno/a explica que con «y» hacen falta las dos condiciones y con «o» basta con una.",
      "L'alumne/a explica que «no» gira la resposta d'una condició.|El alumno/a explica que «no» gira la respuesta de una condición.",
      "L'alumne/a fa servir «Afegeix «i / o»» per ajuntar dues condicions en un sol «si».|El alumno/a usa «Añade «y / o»» para juntar dos condiciones en un solo «si».",
      "L'alumne/a troba l'error d'un programa que fa servir «i» quan calia «o».|El alumno/a encuentra el error de un programa que usa «y» cuando hacía falta «o»."
    ],
    comp: [
      "Competència digital (CD5): programar regles combinades|Competencia digital (CD5): programar reglas combinadas",
      "Pensament computacional: lògica (i, o, no)|Pensamiento computacional: lógica (y, o, no)",
      "Llengua: el significat precís de «i», «o» i «no» en una frase|Lengua: el significado preciso de «y», «o» y «no» en una frase",
      "Matemàtiques: classificar objectes segons dues propietats|Matemáticas: clasificar objetos según dos propiedades"
    ],
    vocab: [
      ["I|Y", "Ajunta dues condicions: el sí només arriba si totes dues són sí.|Junta dos condiciones: el sí solo llega si las dos son sí."],
      ["O|O", "Ajunta dues condicions: n'hi ha prou que una sigui sí.|Junta dos condiciones: basta con que una sea sí."],
      ["No|No", "Gira la resposta d'una condició.|Gira la respuesta de una condición."],
      ["Lògica|Lógica", "Les regles per pensar amb sí i no.|Las reglas para pensar con sí y no."],
      ["Porta lògica|Puerta lógica", "Una peça (en paper o en un circuit) que decideix sí o no a partir d'altres respostes.|Una pieza (en papel o en un circuito) que decide sí o no a partir de otras respuestas."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb la sessió «I, o, no»|Un ordenador por alumno/a con la sesión «Y, o, no»",
        "Projector i la presentació de la sessió|Proyector y la presentación de la sesión",
        "Targetes de les portes lògiques retallades (un paquet per grup de 3)|Tarjetas de las puertas lógicas recortadas (un paquete por grupo de 3)"
      ],
      imprimir: ["Targetes de portes lògiques|Tarjetas de puertas lógicas"],
      prep: [
        "Imprimir i retallar un paquet de targetes per grup.|Imprimir y recortar un paquete de tarjetas por grupo.",
        "Provar el repte del gat (màxim 4 blocs) i com es canvia «i» per «o» tocant la paraula del mig.|Probar el reto del gato (máximo 4 bloques) y cómo se cambia «y» por «o» tocando la palabra del medio.",
        "Deixar els ordinadors amb la sessió iniciada.|Dejar los ordenadores con la sesión iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Inici: regles més llestes|Inicio: reglas más listas", fase: 'inici',
        fa: "Repassa el «si… si no». Llegeix dues regles de la fira, una amb «i» i una amb «o», i pregunta si volen dir el mateix.|Repasa el «si… si no». Lee dos reglas de la feria, una con «y» y una con «o», y pregunta si quieren decir lo mismo.",
        diu: ["«Entrada i barret» o «entrada o barret»: és el mateix?|«Entrada y sombrero» o «entrada o sombrero»: ¿es lo mismo?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "I, o, no|Y, o, no", fase: 'teoria',
        fa: "Mostra l'animació del regal i l'estrella: compara «i» i «o» fase a fase. Projecta les demos del regal i del gat. Explica el «no» amb l'animació i la demo d'en Bit que s'atura davant la roca.|Muestra la animación del regalo y la estrella: compara «y» y «o» fase a fase. Proyecta las demos del regalo y del gato. Explica el «no» con la animación y la demo de Bit que se para delante de la roca.",
        diu: ["Ara només hi ha en Bit: s'obre el regal? I s'encén l'estrella?|Ahora solo está Bit: ¿se abre el regalo? ¿Y se enciende la estrella?", "Què vol dir «si no toca la roca»?|¿Qué quiere decir «si no toca la roca»?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Desconnectat: portes lògiques humanes|Desconectado: puertas lógicas humanas", fase: 'desconnectat',
        fa: "Grups de 3: dos sensors i una porta. Cada sensor té una targeta de condició i respon ensenyant SÍ o NO. La porta té la targeta «I», «O» o «NO» i decideix si s'obre (braços amunt) o no. Roteu els papers i les targetes. Al final, cada grup inventa una regla de la classe amb «i» o «o».|Grupos de 3: dos sensores y una puerta. Cada sensor tiene una tarjeta de condición y responde enseñando SÍ o NO. La puerta tiene la tarjeta «Y», «O» o «NO» y decide si se abre (brazos arriba) o no. Rotad los papeles y las tarjetas. Al final, cada grupo inventa una regla de la clase con «y» u «o».",
        diu: ["Porta «I»: us cal que els dos sensors diguin sí.|Puerta «Y»: os hace falta que los dos sensores digan sí.", "Porta «NO»: feu el contrari del sensor!|Puerta «NO»: ¡haced lo contrario del sensor!"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3|Grupos de 3" },
      { min: 12, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Fan la missió, les targetes, les preguntes de la fira, l'error de la papallona i la predicció d'en Bit. «Endevina la meva regla» és per a casa.|Hacen la misión, las tarjetas, las preguntas de la feria, el error de la mariposa y la predicción de Bit. «Adivina mi regla» es para casa.",
        diu: ["Per què la papallona travessa la roca?|¿Por qué la mariposa atraviesa la roca?"],
        slides: ['s11'], app: "De «La missió» fins a la predicció d'en Bit.|De «La misión» hasta la predicción de Bit.", org: "Individual|Individual" },
      { min: 14, t: "Pausa i reptes|Pausa y retos", fase: 'ordinador',
        fa: "Pausa activa de les portes lògiques. Ensenya a la pantalla com s'afegeix «i / o» i com es canvia la paraula del mig. Després, els tres reptes.|Pausa activa de las puertas lógicas. Enseña en la pantalla cómo se añade «y / o» y cómo se cambia la palabra del medio. Después, los tres retos.",
        diu: ["Amb només 4 blocs, com pots vigilar la roca i la vora?|Con solo 4 bloques, ¿cómo puedes vigilar la roca y el borde?", "A les proves 2 i 3 del regal, per què no s'ha d'obrir?|En las pruebas 2 y 3 del regalo, ¿por qué no se tiene que abrir?"],
        slides: ['s12', 's13'], app: "«Pausa activa» i els reptes del gat, el regal i en Bit.|«Pausa activa» y los retos del gato, el regalo y Bit.", org: "Individual|Individual" },
      { min: 5, t: "Crea: la regla del tresor|Crea: la regla del tesoro", fase: 'crea',
        fa: "Cada alumne/a inventa una regla amb «i» o «o» per als tresors del parc. El company/a ha d'endevinar la regla mirant què passa.|Cada alumno/a inventa una regla con «y» u «o» para los tesoros del parque. El compañero/a tiene que adivinar la regla mirando qué pasa.",
        diu: ["La teva regla és amb «i» o amb «o»?|¿Tu regla es con «y» o con «o»?"],
        slides: ['s14'], app: "Pas «Crea»: La regla del tresor.|Paso «Crea»: La regla del tesoro.", org: "Individual i en parelles|Individual y por parejas" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Resum, preguntes finals i tiquet.|Resumen, preguntas finales y ticket.",
        diu: ["Digues una regla amb «o».|Di una regla con «o»."],
        slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir «i» quan calia «o» (el gat només gira si toca la roca i la vora alhora).|Usa «y» cuando hacía falta «o» (el gato solo gira si toca la roca y el borde a la vez).", "Pregunta: pot tocar la roca i la vora al mateix temps? Llavors, quina paraula cal?|Pregunta: ¿puede tocar la roca y el borde al mismo tiempo? Entonces, ¿qué palabra hace falta?"],
      ["No sap canviar la segona condició (es queda «la vora»).|No sabe cambiar la segunda condición (se queda «el borde»).", "Recorda que cada paraula en negreta es pot tocar: toca «la vora» i tria en Bit.|Recuerda que cada palabra en negrita se puede tocar: toca «el borde» y elige a Bit."],
      ["Al repte del gat fa dos «si» i supera el màxim de blocs.|En el reto del gato hace dos «si» y supera el máximo de bloques.", "Està bé pensar-ho així! Ara, com podries posar les dues preguntes dins d'un sol «si»?|¡Está bien pensarlo así! Ahora, ¿cómo podrías poner las dos preguntas dentro de un solo «si»?"],
      ["Creu que «no toca la roca» vol dir que en Bit no es mourà.|Cree que «no toca la roca» quiere decir que Bit no se moverá.", "Llegiu-ho junts com una frase: «Si no toques la roca, camina.» Al principi, la toca? Llavors camina.|Leedlo juntos como una frase: «Si no tocas la roca, camina.» Al principio, ¿la toca? Entonces camina."]
    ],
    diff: {
      mes: "Al repte del regal, afegir una tercera condició (que també hi hagi l'estrella) i explicar com quedaria la regla. Inventar una regla amb «no» per al tresor.|En el reto del regalo, añadir una tercera condición (que también esté la estrella) y explicar cómo quedaría la regla. Inventar una regla con «no» para el tesoro.",
      menys: "Fer primer les portes lògiques amb les targetes al costat de l'ordinador. Al repte del gat, començar amb dos «si» separats i després ajuntar-los.|Hacer primero las puertas lógicas con las tarjetas al lado del ordenador. En el reto del gato, empezar con dos «si» separados y después juntarlos."
    },
    aval: {
      ticket: ["Digues una regla amb «i» i una amb «o».|Di una regla con «y» y una con «o».", "Què fa el «no»?|¿Qué hace el «no»?"],
      rubric: [
        ["«I» i «o»|«Y» y «o»", "Tria bé entre «i» i «o» i ho justifica.|Elige bien entre «y» y «o» y lo justifica.", "Les confon de vegades.|Las confunde a veces."],
        ["«No»|«No»", "Prediu correctament què fa un programa amb «no».|Predice correctamente qué hace un programa con «no».", "Necessita llegir la frase en veu alta per entendre-ho.|Necesita leer la frase en voz alta para entenderlo."],
        ["Programar condicions dobles|Programar condiciones dobles", "Afegeix «i / o» i canvia les dues condicions sense ajuda.|Añade «y / o» y cambia las dos condiciones sin ayuda.", "Ho fa amb ajuda.|Lo hace con ayuda."]
      ]
    },
    casa: "A casa, feu «Endevina la meva regla» amb objectes: una persona pensa una regla amb «i», «o» o «no» i l'altra l'endevina ensenyant objectes.|En casa, haced «Adivina mi regla» con objetos: una persona piensa una regla con «y», «o» o «no» y la otra la adivina enseñando objetos.",
    slides: [
      { id: 's1', k: 'portada', t: "I, o, no|Y, o, no", x: "Tres paraules petites que canvien les regles.|Tres palabras pequeñas que cambian las reglas.",
        nota: "Escriu les tres paraules grosses a la pissarra.|Escribe las tres palabras grandes en la pizarra." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["«Si… si no»: quantes parts fa?|«Si… si no»: ¿cuántas partes hace?", "Quina condició fa servir el cranc per al mar?|¿Qué condición usa el cangrejo para el mar?"],
        nota: "Respostes ràpides.|Respuestas rápidas." },
      { id: 's3', k: 'pregunta', t: "És el mateix?|¿Es lo mismo?", punts: ["Pots entrar si portes entrada i barret.|Puedes entrar si llevas entrada y sombrero.", "Pots entrar si portes entrada o barret.|Puedes entrar si llevas entrada o sombrero."],
        nota: "Fes que alguns alumnes facin de visitants amb entrada o barret imaginaris.|Haz que algunos alumnos hagan de visitantes con entrada o sombrero imaginarios." },
      { id: 's4', k: 'anim', t: "«I» i «o»|«Y» y «o»", anim: 'g5andor', x: "Amb «i» calen els dos; amb «o», n'hi ha prou amb un.|Con «y» hacen falta los dos; con «o», basta con uno.",
        nota: "Atura't a cada fase: hi ha en Numi? Hi ha en Bit? S'obre? S'encén?|Detente en cada fase: ¿está Numi? ¿Está Bit? ¿Se abre? ¿Se enciende?" },
      { id: 's5', k: 'media', t: "El regal dels dos amics|El regalo de los dos amigos", x: "Quan s'obre el regal?|¿Cuándo se abre el regalo?",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'regal', art: 'regal', x: 0, y: -60 }, { id: 'numi', art: 'numi', x: -190, y: -60, size: 80 }, { id: 'bit', art: 'bit', x: 190, y: -60, size: 80, dir: -90 }] }, prog: '@numi flag{ glide:1.5,-32,-60 } @bit flag{ wait:1 glide:1.5,32,-60 } @regal flag{ forever{ if:touch:numi&&touch:bit{ sound:victoria hide } } }', time: 4 },
        nota: "Fes notar que quan arriba en Numi sol, no passa res.|Haz notar que cuando llega Numi solo, no pasa nada." },
      { id: 's6', k: 'media', t: "El gat: la roca o la vora|El gato: la roca o el borde", x: "Un sol «si» per a dues coses.|Un solo «si» para dos cosas.",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'gat', art: 'gat', x: -150, y: -110, dir: 90 }, { id: 'roca', art: 'roca', x: 90, y: -110 }] }, prog: '@gat flag{ forever{ move:5 if:touch:roca||touch:edge{ turn:180 } } }', time: 7 },
        nota: "Pregunta què passaria si hi digués «i».|Pregunta qué pasaría si dijera «y»." },
      { id: 's7', k: 'anim', t: "«No» gira la resposta|«No» gira la respuesta", anim: 'g5not', x: "El sí es torna no i el no, sí.|El sí se vuelve no y el no, sí.",
        nota: "Fes el gest de girar una targeta SÍ/NO.|Haz el gesto de girar una tarjeta SÍ/NO." },
      { id: 's8', k: 'media', t: "En Bit para a temps|Bit para a tiempo", x: "Si no toca la roca, camina; si no, ho diu.|Si no toca la roca, camina; si no, lo dice.",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'bit', art: 'bit', x: -180, y: -100, size: 90 }, { id: 'roca', art: 'roca', x: 80, y: -110 }] }, prog: '@bit flag{ forever{ if:!touch:roca{ move:3 } else{ say:"Una roca!|¡Una roca!" } } }', time: 6 },
        nota: "Explica que aquest bloc ja ve fet a l'app: el «no» no es pot posar des de la paleta.|Explica que este bloque ya viene hecho en la app: el «no» no se puede poner desde la paleta." },
      { id: 's9', k: 'activitat', t: "Portes lògiques humanes|Puertas lógicas humanas", timer: 11, punts: ["Dos sensors: responeu SÍ o NO.|Dos sensores: responded SÍ o NO.", "La porta mira la seva targeta: I, O o NO.|La puerta mira su tarjeta: Y, O o NO.", "S'obre? Braços amunt!|¿Se abre? ¡Brazos arriba!", "Roteu els papers.|Rotad los papeles."],
        nota: "Comença amb la porta «I», després «O» i al final «NO» (amb un sol sensor).|Empieza con la puerta «Y», después «O» y al final «NO» (con un solo sensor)." },
      { id: 's10', k: 'activitat', t: "Les tres portes|Las tres puertas", punts: ["I: s'obre si els dos diuen sí.|Y: se abre si los dos dicen sí.", "O: s'obre si algun diu sí.|O: se abre si alguno dice sí.", "NO: fa el contrari del sensor.|NO: hace lo contrario del sensor."],
        nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
      { id: 's11', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 12, punts: ["Obre «I, o, no».|Abre «Y, o, no».", "«Endevina la meva regla»: toca «Ara no».|«Adivina mi regla»: toca «Ahora no».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Passeja per l'error de la papallona: és el que més costa.|Pasea por el error de la mariposa: es el que más cuesta." },
      { id: 's12', k: 'repte', t: "Reptes|Retos", timer: 14, punts: ["1. El gat: roca o vora (4 blocs)|1. El gato: roca o borde (4 bloques)", "2. El regal: Numi i Bit|2. El regalo: Numi y Bit", "3. En Bit: si no toca la roca|3. Bit: si no toca la roca"],
        nota: "Ensenya una vegada el botó «Afegeix «i / o»».|Enseña una vez el botón «Añade «y / o»»." },
      { id: 's13', k: 'concepte', t: "Com s'afegeix «i / o»|Cómo se añade «y / o»", punts: ["Toca el bloc «si».|Toca el bloque «si».", "Toca «Afegeix «i / o»».|Toca «Añade «y / o»».", "Toca la paraula del mig per triar «i» o «o».|Toca la palabra del medio para elegir «y» u «o».", "Toca cada condició per canviar-la.|Toca cada condición para cambiarla."],
        nota: "Fes-ho a poc a poc a la pantalla gran.|Hazlo despacio en la pantalla grande." },
      { id: 's14', k: 'activitat', t: "Crea: la regla del tresor|Crea: la regla del tesoro", timer: 5, x: "Inventa una regla amb «i» o «o». El company/a l'endevina.|Inventa una regla con «y» u «o». El compañero/a la adivina.",
        nota: "Celebra les regles originals.|Celebra las reglas originales." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["«I»: calen les dues.|«Y»: hacen falta las dos.", "«O»: n'hi ha prou amb una.|«O»: basta con una.", "«No»: gira la resposta.|«No»: gira la respuesta."],
        nota: "Torna a les regles de la fira del principi.|Vuelve a las reglas de la feria del principio." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Una regla amb «i» i una amb «o».|Una regla con «y» y una con «o».", "Què fa el «no»?|¿Qué hace el «no»?"],
        nota: "Una pregunta per alumne/a.|Una pregunta por alumno/a." }
    ],
    print: [
      { id: 'p1', t: "Targetes de portes lògiques|Tarjetas de puertas lógicas", k: 'targetes',
        intro: "Un paquet per grup de 3. Els sensors reben una condició i les targetes SÍ i NO; la porta rep una targeta de porta.|Un paquete por grupo de 3. Los sensores reciben una condición y las tarjetas SÍ y NO; la puerta recibe una tarjeta de puerta.",
        items: [
          { t: "SÍ ✅|SÍ ✅", n: 2 }, { t: "NO ❌|NO ❌", n: 2 },
          { t: "Porta I 🚪|Puerta Y 🚪", n: 1 }, { t: "Porta O 🚪|Puerta O 🚪", n: 1 }, { t: "Porta NO 🔄|Puerta NO 🔄", n: 1 },
          { t: "Porto ulleres 👓|Llevo gafas 👓", n: 1 }, { t: "M'agrada el plàtan 🍌|Me gusta el plátano 🍌", n: 1 },
          { t: "Tinc els cabells llargs 💇|Tengo el pelo largo 💇", n: 1 }, { t: "He vingut caminant 🚶|He venido andando 🚶", n: 1 }
        ] }
    ]
  },
  /* ---------- Sessió 4 · Projecte: atrapa la fruita ---------- */
  'g5-4': {
    obj: [
      "L'alumne/a planifica un videojoc en paper: personatges, moviments i regles.|El alumno/a planifica un videojuego en papel: personajes, movimientos y reglas.",
      "L'alumne/a escriu cada regla del videojoc com un «si» i la programa al personatge que toca.|El alumno/a escribe cada regla del videojuego como un «si» y la programa en el personaje que corresponde.",
      "L'alumne/a construeix el videojoc a trossos i prova cada tros abans de continuar.|El alumno/a construye el videojuego a trozos y prueba cada trozo antes de seguir.",
      "L'alumne/a dona i rep comentaris amables per millorar el videojoc.|El alumno/a da y recibe comentarios amables para mejorar el videojuego."
    ],
    comp: [
      "Competència digital (CD5): dissenyar i programar un videojoc propi|Competencia digital (CD5): diseñar y programar un videojuego propio",
      "Pensament computacional: descomposició, condicions i depuració|Pensamiento computacional: descomposición, condiciones y depuración",
      "Competència personal i social: provar, rebre comentaris i millorar|Competencia personal y social: probar, recibir comentarios y mejorar",
      "Llengua: explicar les regles d'un videojoc amb claredat|Lengua: explicar las reglas de un videojuego con claridad"
    ],
    vocab: [
      ["Pla|Plan", "El dibuix i la llista de regles abans de programar.|El dibujo y la lista de reglas antes de programar."],
      ["Regla|Regla", "El que passa en un videojoc quan es compleix una condició.|Lo que pasa en un videojuego cuando se cumple una condición."],
      ["Tester|Tester", "La persona que prova un videojoc per trobar-hi errors i idees.|La persona que prueba un videojuego para encontrarle errores e ideas."],
      ["Depurar|Depurar", "Buscar i arreglar els errors d'un programa.|Buscar y arreglar los errores de un programa."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb la sessió «Projecte: atrapa la fruita»|Un ordenador por alumno/a con la sesión «Proyecto: atrapa la fruta»",
        "Projector i la presentació de la sessió|Proyector y la presentación de la sesión",
        "La fitxa «El pla del videojoc» (una per alumne/a) i llapis|La ficha «El plan del videojuego» (una por alumno/a) y lápices"
      ],
      imprimir: ["El pla del videojoc|El plan del videojuego"],
      prep: [
        "Imprimir una fitxa per alumne/a.|Imprimir una ficha por alumno/a.",
        "Provar el videojoc acabat (pas «Prova») amb les fletxes per ensenyar-lo al principi.|Probar el videojuego terminado (paso «Prueba») con las flechas para enseñarlo al principio.",
        "Fer el projecte final abans per veure com queda amb dues fruites.|Hacer el proyecto final antes para ver cómo queda con dos frutas.",
        "Deixar els ordinadors amb la sessió iniciada.|Dejar los ordenadores con la sesión iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Inici: el gran dia|Inicio: el gran día", fase: 'inici',
        fa: "Repassa «i», «o» i «no». Projecta el videojoc acabat i demana a un voluntari/a que el provi amb les fletxes. Pregunta quines regles hi veuen.|Repasa «y», «o» y «no». Proyecta el videojuego terminado y pide a un voluntario/a que lo pruebe con las flechas. Pregunta qué reglas ven.",
        diu: ["Quines regles té aquest videojoc? Digueu-les amb «si».|¿Qué reglas tiene este videojuego? Decidlas con «si»."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El pla i els guions|El plan y los guiones", fase: 'teoria',
        fa: "Mostra l'animació del pla: dibuix i regles. Explica que cada personatge té els seus guions i que tots funcionen alhora. Mostra la regla que ho acaba tot (la roca). Insisteix a construir i provar a trossos.|Muestra la animación del plan: dibujo y reglas. Explica que cada personaje tiene sus guiones y que todos funcionan a la vez. Muestra la regla que lo acaba todo (la roca). Insiste en construir y probar a trozos.",
        diu: ["Qui té la regla «si toca la cistella»: la cistella o la poma?|¿Quién tiene la regla «si toca la cesta»: la cesta o la manzana?", "Per què és millor provar cada tros?|¿Por qué es mejor probar cada trozo?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Desconnectat: el pla en paper|Desconectado: el plan en papel", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa del pla: dibuixa l'escenari, escriu com es mou la cistella i les regles de cada fruita, i hi afegeix una idea pròpia (una fruita nova, un so, una frase). En parelles, es llegeixen el pla i comproven que cada regla comença amb «si».|Cada alumno/a rellena la ficha del plan: dibuja el escenario, escribe cómo se mueve la cesta y las reglas de cada fruta, y añade una idea propia (una fruta nueva, un sonido, una frase). Por parejas, se leen el plan y comprueban que cada regla empieza con «si».",
        diu: ["Cada regla: si… llavors…|Cada regla: si… entonces…", "Quina millora teva hi afegiràs?|¿Qué mejora tuya añadirás?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i en parelles|Individual y por parejas" },
      { min: 8, t: "A l'ordinador: prova i investiga|En el ordenador: prueba e investiga", fase: 'ordinador',
        fa: "Fan la missió, les targetes, proven el videojoc acabat, ordenen el pla i troben l'error de la poma. «El tester de casa» és per a casa.|Hacen la misión, las tarjetas, prueban el videojuego terminado, ordenan el plan y encuentran el error de la manzana. «El tester de casa» es para casa.",
        diu: ["Per què la poma no torna a dalt?|¿Por qué la manzana no vuelve arriba?"],
        slides: ['s10'], app: "De «La missió» fins a «Investiga».|De «La misión» hasta «Investiga».", org: "Individual|Individual" },
      { min: 12, t: "Pausa i els tres trossos|Pausa y los tres trozos", fase: 'ordinador',
        fa: "Pausa activa de la cistella. Després, els tres trossos: la cistella amb les fletxes, la poma i la roca. Cada tros es comprova abans de passar al següent.|Pausa activa de la cesta. Después, los tres trozos: la cesta con las flechas, la manzana y la roca. Cada trozo se comprueba antes de pasar al siguiente.",
        diu: ["La cistella s'escapa per la vora? Quina regla falta?|¿La cesta se escapa por el borde? ¿Qué regla falta?"],
        slides: ['s11'], app: "«Pausa activa» i els trossos 1, 2 i 3.|«Pausa activa» y los trozos 1, 2 y 3.", org: "Individual|Individual" },
      { min: 13, t: "Crea i prova amb un company/a|Crea y prueba con un compañero/a", fase: 'crea',
        fa: "Cada alumne/a completa el videojoc sencer seguint el seu pla. Quan funcioni, un company/a fa de tester: el prova sense ajuda i diu una cosa que li agrada i una idea per millorar. L'autor/a en tria una i la programa. Es desa al portafoli.|Cada alumno/a completa el videojuego entero siguiendo su plan. Cuando funcione, un compañero/a hace de tester: lo prueba sin ayuda y dice una cosa que le gusta y una idea para mejorar. El autor/a elige una y la programa. Se guarda en el portafolio.",
        diu: ["Tester: primer una cosa bona, després una idea.|Tester: primero una cosa buena, después una idea.", "Autor/a: escolta i tria què millores.|Autor/a: escucha y elige qué mejoras."],
        slides: ['s12', 's13'], app: "Pas «Crea»: Atrapa la fruita (es desa als projectes).|Paso «Crea»: Atrapa la fruta (se guarda en los proyectos).", org: "Individual i en parelles|Individual y por parejas" },
      { min: 4, t: "Tancament i celebració|Cierre y celebración", fase: 'tancament',
        fa: "Dos o tres alumnes ensenyen el seu videojoc a la classe. Resum de la unitat, preguntes finals i tiquet.|Dos o tres alumnos enseñan su videojuego a la clase. Resumen de la unidad, preguntas finales y ticket.",
        diu: ["Quina regla del teu videojoc t'agrada més?|¿Qué regla de tu videojuego te gusta más?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa la regla «si toca la poma» a la cistella i espera que la poma torni a dalt.|Pone la regla «si toca la manzana» en la cesta y espera que la manzana vuelva arriba.", "Pregunta: qui ha de tornar a dalt? Doncs la regla va als guions de la poma.|Pregunta: ¿quién tiene que volver arriba? Pues la regla va en los guiones de la manzana."],
      ["La fruita torna a y = -150 (a baix) en lloc de y = 150.|La fruta vuelve a y = -150 (abajo) en lugar de y = 150.", "Recorda l'eix: la y gran és a dalt. On vols que torni la poma?|Recuerda el eje: la y grande está arriba. ¿Dónde quieres que vuelva la manzana?"],
      ["La cistella surt de l'escenari perquè no té la regla de la vora a les dues tecles.|La cesta sale del escenario porque no tiene la regla del borde en las dos teclas.", "Que provi primer la dreta i després l'esquerra. Per quin costat s'escapa?|Que pruebe primero la derecha y después la izquierda. ¿Por qué lado se escapa?"],
      ["Ho programa tot de cop i no sap on és l'error.|Lo programa todo de golpe y no sabe dónde está el error.", "Proposa-li treure (o deixar buit) un personatge i provar-ne només un. Funciona? Llavors afegeix el següent.|Proponle quitar (o dejar vacío) un personaje y probar solo uno. ¿Funciona? Entonces añade el siguiente."],
      ["Com a tester, només diu «està malament» o ho arregla ell/a.|Como tester, solo dice «está mal» o lo arregla él/ella.", "Recorda la regla del tester: una cosa bona, una idea, i les mans fora del ratolí.|Recuerda la regla del tester: una cosa buena, una idea, y las manos fuera del ratón."]
    ],
    diff: {
      mes: "Afegir la roca al videojoc final (si toca la cistella, atura-ho tot) i una tercera fruita més ràpida. Fer que la cistella canviï de mida quan atrapa una fruita.|Añadir la roca al videojuego final (si toca la cesta, páralo todo) y una tercera fruta más rápida. Hacer que la cesta cambie de tamaño cuando atrapa una fruta.",
      menys: "Seguir els trossos 1, 2 i 3 en ordre i, al projecte final, copiar les regles de la poma al plàtan. Tenir la fitxa del pla al costat de l'ordinador.|Seguir los trozos 1, 2 y 3 en orden y, en el proyecto final, copiar las reglas de la manzana al plátano. Tener la ficha del plan al lado del ordenador."
    },
    aval: {
      ticket: ["Digues una regla del teu videojoc amb «si».|Di una regla de tu videojuego con «si».", "Quina idea del teu tester has fet servir?|¿Qué idea de tu tester has usado?"],
      rubric: [
        ["Pla del videojoc|Plan del videojuego", "El pla té personatges, moviments i regles amb «si».|El plan tiene personajes, movimientos y reglas con «si».", "El pla té el dibuix, però les regles estan incompletes.|El plan tiene el dibujo, pero las reglas están incompletas."],
        ["Regles programades|Reglas programadas", "Les fruites cauen, tornen a dalt i reaccionen a la cistella.|Las frutas caen, vuelven arriba y reaccionan a la cesta.", "Hi ha una regla que falta o és al personatge equivocat.|Hay una regla que falta o está en el personaje equivocado."],
        ["Provar i millorar|Probar y mejorar", "Prova a trossos, escolta el tester i programa una millora.|Prueba a trozos, escucha al tester y programa una mejora.", "Prova al final i li costa triar una millora.|Prueba al final y le cuesta elegir una mejora."]
      ]
    },
    casa: "A casa, ensenyeu el videojoc a algú de la família: feu «El tester de casa», apunteu una millora i programeu-la el pròxim dia.|En casa, enseñad el videojuego a alguien de la familia: haced «El tester de casa», apuntad una mejora y programadla el próximo día.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: atrapa la fruita|Proyecto: atrapa la fruta", x: "Avui construïm el nostre videojoc per a la Festa de la Fruita.|Hoy construimos nuestro videojuego para la Fiesta de la Fruta.",
        nota: "Crea expectació: al final, cadascú en tindrà un de propi al portafoli.|Crea expectación: al final, cada uno tendrá uno propio en el portafolio." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["«I»: calen les dues.|«Y»: hacen falta las dos.", "«O»: n'hi ha prou amb una.|«O»: basta con una.", "«No»: gira la resposta.|«No»: gira la respuesta."],
        nota: "Pregunta un exemple de cada.|Pide un ejemplo de cada una." },
      { id: 's3', k: 'media', t: "El videojoc acabat|El videojuego terminado", x: "Quines regles hi veieu?|¿Qué reglas veis?",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'cistella', art: 'cistella', x: -120, y: -130 }, { id: 'poma', art: 'poma', x: -120, y: 150 }, { id: 'platan', art: 'platan', x: 100, y: 150 }] }, prog: '@cistella flag{ forever{ glide:1.2,-120,-130 wait:0.4 glide:1.2,100,-130 wait:0.4 } } @poma flag{ forever{ chy:-4 if:touch:cistella{ sound:pop sety:150 } if:touch:edge{ sety:150 } } } @platan flag{ forever{ chy:-3 if:touch:cistella{ sound:moneda sety:150 } if:touch:edge{ sety:150 } } }', time: 8 },
        nota: "Apunta a la pissarra les regles que diguin, començant per «si».|Apunta en la pizarra las reglas que digan, empezando por «si»." },
      { id: 's4', k: 'anim', t: "Primer, el pla|Primero, el plan", anim: 'g5plan', x: "Dibuix i regles. Cada regla és un «si».|Dibujo y reglas. Cada regla es un «si».",
        nota: "Compara-ho amb fer una maqueta: primer el plànol.|Compáralo con hacer una maqueta: primero el plano." },
      { id: 's5', k: 'concepte', t: "Cada personatge, els seus guions|Cada personaje, sus guiones", punts: ["Cistella: es mou amb les fletxes.|Cesta: se mueve con las flechas.", "Poma: cau, i si toca la cistella o la vora…|Manzana: cae, y si toca la cesta o el borde…", "Plàtan: el mateix, amb la seva velocitat.|Plátano: lo mismo, con su velocidad."],
        nota: "Remarca que la regla de la fruita va als guions de la fruita.|Remarca que la regla de la fruta va en los guiones de la fruta." },
      { id: 's6', k: 'media', t: "Una regla que ho acaba tot|Una regla que lo acaba todo", x: "Si la roca toca la cistella, atura-ho tot.|Si la roca toca la cesta, páralo todo.",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'cistella', art: 'cistella', x: 40, y: -130 }, { id: 'roca', art: 'roca', x: 40, y: 150, size: 80 }] }, prog: '@roca flag{ forever{ chy:-4 if:touch:cistella{ say:"Pam! S\'ha acabat!|¡Pam! ¡Se acabó!" stop:all } if:touch:edge{ sety:150 } } }', time: 5 },
        nota: "Pregunta quin bloc atura el programa.|Pregunta qué bloque para el programa." },
      { id: 's7', k: 'concepte', t: "Construir a trossos|Construir a trozos", punts: ["Programa un tros.|Programa un trozo.", "Prova'l.|Pruébalo.", "Arregla'l.|Arréglalo.", "Passa al següent.|Pasa al siguiente."],
        nota: "Ho fan així els equips que creen videojocs de veritat.|Lo hacen así los equipos que crean videojuegos de verdad." },
      { id: 's8', k: 'activitat', t: "El pla del videojoc|El plan del videojuego", timer: 10, punts: ["Dibuixa l'escenari.|Dibuja el escenario.", "Escriu com es mou la cistella.|Escribe cómo se mueve la cesta.", "Escriu les regles amb «si».|Escribe las reglas con «si».", "Afegeix una idea teva.|Añade una idea tuya."],
        nota: "Passeja i ajuda a escriure regles completes: si… llavors…|Pasea y ayuda a escribir reglas completas: si… entonces…" },
      { id: 's9', k: 'activitat', t: "Revisa el pla amb un company/a|Revisa el plan con un compañero/a", punts: ["Cada regla comença amb «si»?|¿Cada regla empieza con «si»?", "Saps a quin personatge va cada regla?|¿Sabes en qué personaje va cada regla?"],
        nota: "Dos minuts finals de l'activitat.|Dos minutos finales de la actividad." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 8, punts: ["Prova el videojoc acabat.|Prueba el videojuego terminado.", "Ordena el pla i troba l'error.|Ordena el plan y encuentra el error.", "«El tester de casa»: toca «Ara no».|«El tester de casa»: toca «Ahora no»."],
        nota: "No deixis que s'entretinguin massa al videojoc acabat: dos minuts.|No dejes que se entretengan demasiado en el videojuego terminado: dos minutos." },
      { id: 's11', k: 'repte', t: "Els tres trossos|Los tres trozos", timer: 12, punts: ["1. La cistella i les fletxes|1. La cesta y las flechas", "2. La poma|2. La manzana", "3. La roca|3. La roca"],
        nota: "Recorda: «Comença» per provar amb les fletxes, «Comprova» per comprovar-ho.|Recuerda: «Empieza» para probar con las flechas, «Comprueba» para comprobarlo." },
      { id: 's12', k: 'activitat', t: "Crea: el videojoc sencer|Crea: el videojuego entero", timer: 8, x: "Segueix el teu pla: regles de la poma, el plàtan i la teva millora.|Sigue tu plan: reglas de la manzana, el plátano y tu mejora.",
        nota: "Qui acabi aviat pot afegir la roca.|Quien termine pronto puede añadir la roca." },
      { id: 's13', k: 'activitat', t: "Fes de tester|Haz de tester", timer: 5, punts: ["Prova'l sense ajuda.|Pruébalo sin ayuda.", "Digues una cosa que t'agrada.|Di una cosa que te gusta.", "Digues una idea per millorar.|Di una idea para mejorar.", "Mans fora del ratolí!|¡Manos fuera del ratón!"],
        nota: "Modela-ho tu primer amb el videojoc d'un voluntari/a.|Modélalo tú primero con el videojuego de un voluntario/a." },
      { id: 's14', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["Condicions: «si toca…», «toca el color».|Condiciones: «si toca…», «toca el color».", "«Si… si no», «i», «o», «no».|«Si… si no», «y», «o», «no».", "Un videojoc és un munt de regles amb «si».|Un videojuego es un montón de reglas con «si»."],
        nota: "Felicita el grup: ja tenen un videojoc fet per ells.|Felicita al grupo: ya tienen un videojuego hecho por ellos." },
      { id: 's15', k: 'pregunta', t: "Què milloraries la pròxima vegada?|¿Qué mejorarías la próxima vez?", x: "A la unitat 6 hi afegirem punts, vides i un compte enrere.|En la unidad 6 añadiremos puntos, vidas y una cuenta atrás.",
        nota: "Recull idees: moltes es podran fer amb variables a la unitat següent.|Recoge ideas: muchas se podrán hacer con variables en la unidad siguiente." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Una regla del teu videojoc amb «si».|Una regla de tu videojuego con «si».", "Quina idea del tester has fet servir?|¿Qué idea del tester has usado?"],
        nota: "Anota qui no ha pogut acabar per donar-li temps la pròxima sessió.|Anota quién no ha podido terminar para darle tiempo la próxima sesión." }
    ],
    print: [
      { id: 'p1', t: "El pla del videojoc|El plan del videojuego", k: 'fitxa',
        intro: "Omple el pla abans de programar. Dibuixa l'escenari al revers del full.|Rellena el plan antes de programar. Dibuja el escenario en el reverso de la hoja.",
        items: [
          { q: "Com es mou la cistella? Quines tecles fa servir?|¿Cómo se mueve la cesta? ¿Qué teclas usa?", sol: "Amb les fletxes: dreta, canvia x en 20; esquerra, canvia x en -20. Si toca la vora, torna enrere.|Con las flechas: derecha, cambia x en 20; izquierda, cambia x en -20. Si toca el borde, vuelve atrás." },
          { q: "Què cau del cel i a quina velocitat?|¿Qué cae del cielo y a qué velocidad?", sol: "Per exemple, la poma (canvia y en -4) i el plàtan (canvia y en -5).|Por ejemplo, la manzana (cambia y en -4) y el plátano (cambia y en -5)." },
          { q: "Regla 1: Si la fruita toca la cistella…|Regla 1: Si la fruta toca la cesta…", sol: "…fa un so i torna a dalt (posa y a 150).|…hace un sonido y vuelve arriba (pon y a 150)." },
          { q: "Regla 2: Si la fruita toca la vora de baix…|Regla 2: Si la fruta toca el borde de abajo…", sol: "…torna a dalt (posa y a 150).|…vuelve arriba (pon y a 150)." },
          { q: "Regla 3 (opcional): Si la roca toca la cistella…|Regla 3 (opcional): Si la roca toca la cesta…", sol: "…diu «Pam!» i atura-ho tot.|…dice «¡Pam!» y lo para todo." },
          { q: "La meva millora: què hi afegiré?|Mi mejora: ¿qué añadiré?", sol: "Resposta oberta: una fruita nova, un so, una frase, un canvi de mida…|Respuesta abierta: una fruta nueva, un sonido, una frase, un cambio de tamaño…" }
        ] }
    ]
  }
});

/* ── unitat 6 ── */
/* ===== Numi Tech · guia del professorat · Tech Creadors · unitat 6 «Variables» (g6-1 … g6-4) =====
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. Les demos de l'escenari (k: 'media')
   fan servir el motor de Creadors (tech-stage.js). */
Object.assign(TGUIDE, (() => {
  const VN = { punts: 'punts|puntos', vides: 'vides|vidas', temps: 'temps|tiempo', segons: 'segons|segundos', gana: 'gana|hambre', alegria: 'alegria|alegría' };
  const clicks = (id, ts) => ts.map(t => ({ t, click: id }));
  const FI = 'Fi de la partida!|¡Fin de la partida!', TEMPS = "S'ha acabat el temps!|¡Se acabó el tiempo!";
  const METEOR = '@meteorit flag{ forever{ chy:-6 if:touch:edge{ sety:150 } } }';
  const W_NAU = { bg: 'espai', sprites: [{ id: 'nau', art: 'nau', x: 0, y: -120 }, { id: 'meteorit', art: 'meteorit', x: 0, y: 150 }], vars: ['vides'] };
  const GAT = '@gat flag{ forever{ move:6 bounce } }', POMA = '@poma flag{ setv:punts,0 forever{ chy:-8 if:touch:gat{ chv:punts,1 sound:moneda sety:150 } if:touch:edge{ sety:150 } } }';
  const GANA = '@mascota flag{ setv:gana,0 forever{ wait:1 chv:gana,1 } }';
  const PET = [{ id: 'mascota', art: 'mascota', x: 0, y: -30, size: 130 }, { id: 'poma', art: 'poma', x: -170, y: -120, size: 120 }, { id: 'pilota', art: 'pilota', x: 170, y: -120, size: 120 }];
  return {

  /* ---------- Sessió 1 · El marcador ---------- */
  'g6-1': {
    obj: [
      "L'alumne/a explica què és una variable (un nom i un número que pot canviar) i en dona un exemple d'un videojoc o de la vida diària.|El alumno/a explica qué es una variable (un nombre y un número que puede cambiar) y da un ejemplo de un videojuego o de la vida diaria.",
      "L'alumne/a distingeix «posa punts a…» (substitueix el número) de «suma a punts…» (n'hi afegeix o en treu).|El alumno/a distingue «pon puntos a…» (sustituye el número) de «suma a puntos…» (añade o quita).",
      "L'alumne/a programa un marcador que suma i resta punts quan es toca un personatge o quan dos personatges es toquen.|El alumno/a programa un marcador que suma y resta puntos al tocar un personaje o cuando dos personajes se tocan.",
      "L'alumne/a fa que un personatge digui el valor d'una variable en lloc d'un text fix.|El alumno/a hace que un personaje diga el valor de una variable en lugar de un texto fijo."
    ],
    comp: [
      "Competència digital (CD5): crear programes amb blocs que guarden i canvien dades|Competencia digital (CD5): crear programas con bloques que guardan y cambian datos",
      "Pensament computacional: variables, assignació i increment|Pensamiento computacional: variables, asignación e incremento",
      "Matemàtiques: càlcul mental amb sumes i restes, nombres negatius com a restes|Matemáticas: cálculo mental con sumas y restas, números negativos como restas",
      "Comunicació oral: predir i justificar el valor final d'una variable|Comunicación oral: predecir y justificar el valor final de una variable"
    ],
    vocab: [
      ["Variable|Variable", "Una capsa amb nom que guarda un número que pot canviar mentre el programa funciona.|Una caja con nombre que guarda un número que puede cambiar mientras el programa funciona."],
      ["Valor|Valor", "El número que hi ha dins de la variable en un moment donat.|El número que hay dentro de la variable en un momento dado."],
      ["Marcador|Marcador", "La variable que compta els punts i que es veu a l'escenari.|La variable que cuenta los puntos y que se ve en el escenario."],
      ["Posa (assignar)|Pon (asignar)", "Canviar el valor per un de nou; el d'abans s'esborra.|Cambiar el valor por uno nuevo; el de antes se borra."],
      ["Suma (incrementar)|Suma (incrementar)", "Afegir un número al valor; si és negatiu, en resta.|Añadir un número al valor; si es negativo, resta."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «El marcador»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «El marcador»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Una pissarreta o un full plastificat i un retolador per grup de 4 (serà la «variable»)|Una pizarrita o una hoja plastificada y un rotulador por grupo de 4 (será la «variable»)"
      ],
      imprimir: ["Targetes d'esdeveniments del marcador|Tarjetas de eventos del marcador", "Fitxa: quant val punts?|Ficha: ¿cuánto vale puntos?"],
      prep: [
        "Imprimir i retallar un paquet de targetes per grup de 4 i barrejar-les.|Imprimir y recortar un paquete de tarjetas por grupo de 4 y barajarlas.",
        "Escriure «punts» a dalt de cada pissarreta, amb un 0 a sota.|Escribir «puntos» arriba de cada pizarrita, con un 0 debajo.",
        "Provar abans el repte de la poma: és el primer on els punts es guanyen quan dos personatges es toquen.|Probar antes el reto de la manzana: es el primero en el que los puntos se ganan cuando dos personajes se tocan."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: la Fira de Tardor|Bienvenida: la Feria de Otoño", fase: 'inici',
        fa: "Presenta la unitat: la classe prepara la caseta de videojocs de la Fira de Tardor del poble. Pregunta com se sap qui ha guanyat en un videojoc i recull respostes. Repassa amb la poma de la unitat 5 què fa un «si toca» dins d'un «per sempre».|Presenta la unidad: la clase prepara la caseta de videojuegos de la Feria de Otoño del pueblo. Pregunta cómo se sabe quién ha ganado en un videojuego y recoge respuestas. Repasa con la manzana de la unidad 5 qué hace un «si toca» dentro de un «por siempre».",
        diu: ["Com sabeu, en un videojoc, qui ho ha fet millor?|¿Cómo sabéis, en un videojuego, quién lo ha hecho mejor?",
          "El programa ha de recordar un número que va canviant. Avui aprendrem com.|El programa tiene que recordar un número que va cambiando. Hoy aprenderemos cómo."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és una variable?|¿Qué es una variable?", fase: 'teoria',
        fa: "Explica la variable com una capsa amb etiqueta: el nom no canvia i el número sí. Demana exemples de la vida diària. Mostra «posa» i «suma» amb l'animació i, abans d'avançar cada bloc, fes que diguin el número nou. Passa les dues demos de l'escenari i acaba amb l'error típic: «posa punts a 1» en lloc de «suma».|Explica la variable como una caja con etiqueta: el nombre no cambia y el número sí. Pide ejemplos de la vida diaria. Muestra «pon» y «suma» con la animación y, antes de avanzar cada bloque, haz que digan el número nuevo. Pasa las dos demos del escenario y termina con el error típico: «pon puntos a 1» en lugar de «suma».",
        diu: ["Al marcador d'un partit, el nom «local» canvia? I el número?|En el marcador de un partido, ¿el nombre «local» cambia? ¿Y el número?",
          "Si ara val 3 i fem «suma a punts 5», quant valdrà?|Si ahora vale 3 y hacemos «suma a puntos 5», ¿cuánto valdrá?",
          "I si fem «posa punts a 5»?|¿Y si hacemos «pon puntos a 5»?",
          "Per què aquest marcador sempre diu 1?|¿Por qué este marcador siempre dice 1?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El marcador viu|El marcador vivo", fase: 'desconnectat',
        fa: "Grups de 4 amb papers: la «variable» (té la pissarreta), el programador/a (gira les targetes), el comprovador/a i el secretari/ària. Abans que la variable canviï el número, tot el grup diu quin serà. Després de 6 targetes, canvien els papers. Als últims 4 minuts, fan la fitxa «Quant val punts?» per parelles i en comproveu una a la pissarra.|Grupos de 4 con papeles: la «variable» (tiene la pizarrita), el programador/a (gira las tarjetas), el comprobador/a y el secretario/a. Antes de que la variable cambie el número, todo el grupo dice cuál será. Después de 6 tarjetas, cambian los papeles. En los últimos 4 minutos, hacen la ficha «¿Cuánto vale puntos?» por parejas y comprobáis una en la pizarra.",
        diu: ["La variable no pot canviar el nom de la pissarreta, només el número.|La variable no puede cambiar el nombre de la pizarrita, solo el número.",
          "Compte amb la targeta «posa»: què passa amb el número d'abans?|Cuidado con la tarjeta «pon»: ¿qué pasa con el número de antes?",
          "Abans de girar la targeta «digues punts», què dirà la variable?|Antes de girar la tarjeta «di puntos», ¿qué dirá la variable?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 amb papers que roten|Grupos de 4 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins al pas «Investiga». A «La capsa dels punts», que toquin «Ho hem fet!» si ja han fet el marcador viu. Fixa't en qui respon la pregunta de predir sense calcular: demana-li que ho faci en veu alta, bloc a bloc.|Cada alumno/a avanza a su ritmo hasta el paso «Investiga». En «La caja de los puntos», que toquen «¡Lo hemos hecho!» si ya han hecho el marcador vivo. Fíjate en quién responde la pregunta de predecir sin calcular: pídele que lo haga en voz alta, bloque a bloque.",
        diu: ["Digues el valor després de cada bloc, com hem fet amb la pissarreta.|Di el valor después de cada bloque, como hemos hecho con la pizarrita.",
          "Al pas Investiga: quin bloc posa sempre el mateix número?|En el paso Investiga: ¿qué bloque pone siempre el mismo número?"],
        slides: ['s12'], app: "De «La missió» a «Investiga»: la pregunta de la poma, les dues històries, les targetes de «Descobreix», «La capsa dels punts», ordenar la partida de la moneda, quant val punts, quin bloc diu el número i el marcador que sempre diu 1.|De «La misión» a «Investiga»: la pregunta de la manzana, las dos historias, las tarjetas de «Descubre», «La caja de los puntos», ordenar la partida de la moneda, cuánto vale puntos, qué bloque dice el número y el marcador que siempre dice 1.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: el primer marcador|Retos: el primer marcador", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després, els quatre reptes. Recorda'ls que els reptes amb tocs o tecles es proven lliurement amb «Comença» i es comproven amb «Comprova». Al repte de la poma, si algú fa molts punts de cop, pregunta-li quantes voltes del bucle passa la poma tocant el gat.|Haced la pausa activa todos juntos. Después, los cuatro retos. Recuérdales que los retos con toques o teclas se prueban libremente con «Empieza» y se comprueban con «Comprueba». En el reto de la manzana, si alguien hace muchos puntos de golpe, pregúntale cuántas vueltas del bucle pasa la manzana tocando al gato.",
        diu: ["Quan toques la moneda, quin guió s'executa?|Cuando tocas la moneda, ¿qué guion se ejecuta?",
          "Per què la poma ha de tornar a dalt després de sumar?|¿Por qué la manzana tiene que volver arriba después de sumar?",
          "Com fas que el meteorit resti en lloc de sumar?|¿Cómo haces que el meteorito reste en lugar de sumar?"],
        slides: ['s13'], app: "«Pausa activa» i els quatre reptes: la moneda de la sort, la poma i el gat, el comptador de salts, i l'estrella i el meteorit.|«Pausa activa» y los cuatro retos: la moneda de la suerte, la manzana y el gato, el contador de saltos, y la estrella y el meteorito.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la caseta dels globus|Crea: la caseta de los globos", fase: 'crea',
        fa: "Cada alumne/a fa la seva caseta amb els tres criteris. Qui acabi, la passa a un company/a perquè hi faci punts i comprovi que en Numi diu el número bo.|Cada alumno/a hace su caseta con los tres criterios. Quien termine, la pasa a un compañero/a para que haga puntos y compruebe que Numi dice el número correcto.",
        diu: ["On va el «posa punts a 0»? Per què?|¿Dónde va el «pon puntos a 0»? ¿Por qué?",
          "El teu company/a ha fet 4 punts. Què ha de dir en Numi?|Tu compañero/a ha hecho 4 puntos. ¿Qué tiene que decir Numi?"],
        slides: ['s14'], app: "Pas «Crea»: La caseta dels globus (es desa a «Projectes»).|Paso «Crea»: La caseta de los globos (se guarda en «Proyectos»).", org: "Individual i per parelles|Individual y por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
        diu: ["Qui em diu una variable que hi hagi a casa o a l'escola?|¿Quién me dice una variable que haya en casa o en el cole?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir «posa punts a 1» quan vol sumar, i el marcador sempre diu 1.|Usa «pon puntos a 1» cuando quiere sumar, y el marcador siempre dice 1.",
        "Que faci servir la pissarreta: «posa» vol dir esborrar i escriure. Què hi ha després del segon toc? I del tercer?|Que use la pizarrita: «pon» quiere decir borrar y escribir. ¿Qué hay después del segundo toque? ¿Y del tercero?"],
      ["Al «digues», escriu la paraula «punts» i el personatge diu «punts» en lloc del número.|En el «di», escribe la palabra «puntos» y el personaje dice «puntos» en lugar del número.",
        "Pregunta-li què vol que digui: la paraula o el número de la capsa? Que miri les opcions de sota quan toca el text.|Pregúntale qué quiere que diga: ¿la palabra o el número de la caja? Que mire las opciones de debajo al tocar el texto."],
      ["Al repte de la poma, suma molts punts de cop perquè no la torna a dalt.|En el reto de la manzana, suma muchos puntos de golpe porque no la devuelve arriba.",
        "Que miri la poma a poc a poc: quantes voltes del «per sempre» està tocant el gat? Què podria fer perquè només en toqui una?|Que mire la manzana despacio: ¿cuántas vueltas del «por siempre» está tocando al gato? ¿Qué podría hacer para que solo toque una?"],
      ["Per restar, busca un bloc «resta» que no existeix.|Para restar, busca un bloque «resta» que no existe.",
        "Recorda-li que 5 + (-1) és 4. Que toqui el número del bloc «suma» i hi escrigui un número negatiu.|Recuérdale que 5 + (-1) es 4. Que toque el número del bloque «suma» y escriba un número negativo."],
      ["Programa un personatge però el guió és en un altre (no ha triat el personatge a dalt).|Programa un personaje pero el guion está en otro (no ha elegido el personaje arriba).",
        "Pregunta-li de qui és el guió que vol fer. Que miri quina pestanya de personatge està marcada.|Pregúntale de quién es el guion que quiere hacer. Que mire qué pestaña de personaje está marcada."]
    ],
    diff: {
      mes: "Afegir a la caseta dels globus un segon personatge que resti 2 punts, i que en Numi digui «Rècord!» si es toca quan hi ha molts punts (amb un company/a, pensar com es podria fer). Inventar una targeta nova per al marcador viu.|Añadir a la caseta de los globos un segundo personaje que reste 2 puntos, y que Numi diga «¡Récord!» si se le toca cuando hay muchos puntos (con un compañero/a, pensar cómo se podría hacer). Inventar una tarjeta nueva para el marcador vivo.",
      menys: "Tenir la pissarreta al costat de l'ordinador i apuntar-hi el valor de punts cada vegada que toca la moneda. Començar pel repte de la moneda i deixar el de la poma per a la sessió següent.|Tener la pizarrita al lado del ordenador y apuntar el valor de puntos cada vez que toca la moneda. Empezar por el reto de la moneda y dejar el de la manzana para la sesión siguiente."
    },
    aval: {
      ticket: ["Digues una variable d'un videojoc o de la vida diària: quin nom té i quin número pot tenir?|Di una variable de un videojuego o de la vida diaria: ¿qué nombre tiene y qué número puede tener?",
        "Punts val 4. Què val després de «posa punts a 2»? I després de «suma a punts 2»?|Puntos vale 4. ¿Qué vale después de «pon puntos a 2»? ¿Y después de «suma a puntos 2»?"],
      rubric: [
        ["Concepte de variable|Concepto de variable", "Explica que té un nom fix i un número que canvia, i en dona un exemple propi.|Explica que tiene un nombre fijo y un número que cambia, y da un ejemplo propio.", "Reconeix el marcador com a variable però no ho explica amb les seves paraules.|Reconoce el marcador como variable pero no lo explica con sus palabras."],
        ["Posa i suma|Pon y suma", "Tria el bloc que toca i prediu bé el valor després de diversos blocs.|Elige el bloque correcto y predice bien el valor después de varios bloques.", "Confon «posa» i «suma» en algun cas.|Confunde «pon» y «suma» en algún caso."],
        ["Marcador al programa|Marcador en el programa", "Fa sumar i restar punts amb tocs i xocs i mostra el valor amb «digues».|Hace sumar y restar puntos con toques y choques y muestra el valor con «di».", "Suma punts amb tocs, però necessita ajuda per als xocs o per mostrar el valor.|Suma puntos con toques, pero necesita ayuda para los choques o para mostrar el valor."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «La capsa dels punts»: llanceu boles de paper a una paperera i porteu el marcador en un paper (suma 1, suma -1, posa a 0).|En casa, con el móvil, podéis repetir la sesión y hacer «La caja de los puntos»: lanzad bolas de papel a una papelera y llevad el marcador en un papel (suma 1, suma -1, pon a 0).",
    slides: [
      { id: 's1', k: 'portada', t: "El marcador|El marcador", x: "Unitat 6 · Variables. Preparem la caseta de videojocs de la Fira de Tardor!|Unidad 6 · Variables. ¡Preparamos la caseta de videojuegos de la Feria de Otoño!",
        nota: "Explica que en aquesta unitat tots els videojocs tindran punts, vides i temps, i que al final faran una mascota virtual.|Explica que en esta unidad todos los videojuegos tendrán puntos, vidas y tiempo, y que al final harán una mascota virtual." },
      { id: 's2', k: 'pregunta', t: "Qui ho ha fet millor?|¿Quién lo ha hecho mejor?", x: "Dues persones han provat el mateix videojoc. Com sabem qui ho ha fet millor?|Dos personas han probado el mismo videojuego. ¿Cómo sabemos quién lo ha hecho mejor?",
        nota: "Busca la resposta «amb els punts». Pregunta: on es guarden els punts mentre el videojoc funciona?|Busca la respuesta «con los puntos». Pregunta: ¿dónde se guardan los puntos mientras el videojuego funciona?" },
      { id: 's3', k: 'repas', t: "Recordes la poma?|¿Recuerdas la manzana?", punts: ["Per sempre: la poma baixa.|Por siempre: la manzana baja.", "Si toca la cistella: diu «Atrapada!» i torna a dalt.|Si toca la cesta: dice «¡Atrapada!» y vuelve arriba.", "Avui: a més de dir-ho, comptarem quantes n'atrapa.|Hoy: además de decirlo, contaremos cuántas atrapa."],
        nota: "Repàs de la unitat 5. Fes que diguin per què el «si» ha d'estar dins del «per sempre».|Repaso de la unidad 5. Haz que digan por qué el «si» tiene que estar dentro del «por siempre»." },
      { id: 's4', k: 'anim', t: "Una capsa amb nom|Una caja con nombre", anim: 'g6box', x: "Una variable té un nom que no canvia i un número que sí que canvia.|Una variable tiene un nombre que no cambia y un número que sí cambia.",
        nota: "Assenyala la capsa i el marcador de l'escenari: són la mateixa variable vista de dues maneres.|Señala la caja y el marcador del escenario: son la misma variable vista de dos maneras." },
      { id: 's5', k: 'concepte', t: "Variables a tot arreu|Variables por todas partes", punts: ["El marcador d'un partit: local 2, visitant 1.|El marcador de un partido: local 2, visitante 1.", "El comptador de passos d'un rellotge.|El contador de pasos de un reloj.", "Els cromos que portes a la col·lecció.|Los cromos que llevas en la colección."],
        nota: "Per a cada exemple, pregunta quin és el nom i quin és el número, i quan canvia.|Para cada ejemplo, pregunta cuál es el nombre y cuál es el número, y cuándo cambia." },
      { id: 's6', k: 'anim', t: "Posa i suma|Pon y suma", anim: 'g6setch', x: "«Posa» esborra i escriu un número nou; «suma» n'hi afegeix (o en treu, si és negatiu).|«Pon» borra y escribe un número nuevo; «suma» añade (o quita, si es negativo).",
        nota: "Para l'animació abans de cada bloc i demana el número nou. El darrer bloc és el més important: el 3 s'esborra.|Para la animación antes de cada bloque y pide el número nuevo. El último bloque es el más importante: el 3 se borra." },
      { id: 's7', k: 'media', t: "Cada toc, un punt|Cada toque, un punto", x: "Quan comença, punts a 0. Cada toc a la moneda: suma 1.|Al empezar, puntos a 0. Cada toque a la moneda: suma 1.",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'moneda', art: 'moneda', x: 0, y: -10, size: 160 }], vars: ['punts'], input: clicks('moneda', [1, 2, 3, 4]) }, prog: '@moneda flag{ setv:punts,0 forever{ next wait:0.12 } } click{ chv:punts,1 sound:moneda }', varNames: VN, time: 5.5 },
        nota: "A la demo, la moneda es toca sola. Fes notar el marcador de dalt a l'esquerra: s'actualitza sol.|En la demo, la moneda se toca sola. Haz notar el marcador de arriba a la izquierda: se actualiza solo." },
      { id: 's8', k: 'media', t: "Digues el número|Di el número", x: "Al «digues» es pot triar la variable: es diu el número que hi ha a dins.|En el «di» se puede elegir la variable: se dice el número que hay dentro.",
        media: { k: 'stage', w: { bg: 'nit', sprites: [{ id: 'estrella', art: 'estrella', x: 0, y: 0, size: 160 }], vars: ['punts'], input: clicks('estrella', [1, 2, 3]) }, prog: '@estrella click{ chv:punts,1 say:$punts,0.6 }', varNames: VN, time: 4.5 },
        nota: "Pregunta: què diria si haguéssim escrit la paraula «punts»?|Pregunta: ¿qué diría si hubiéramos escrito la palabra «puntos»?" },
      { id: 's9', k: 'anim', t: "Compte: «posa» no és «suma»|Cuidado: «pon» no es «suma»", anim: 'g6bug', x: "Amb «posa punts a 1», el marcador sempre diu 1.|Con «pon puntos a 1», el marcador siempre dice 1.",
        nota: "És l'error que més veureu avui. Deixa'l anomenat: «l'error del marcador encallat».|Es el error que más veréis hoy. Déjalo nombrado: «el error del marcador atascado»." },
      { id: 's10', k: 'activitat', t: "El marcador viu|El marcador vivo", timer: 12, punts: ["La variable té la pissarreta: «punts» i un 0.|La variable tiene la pizarrita: «puntos» y un 0.", "El programador/a gira una targeta i la llegeix.|El programador/a gira una tarjeta y la lee.", "Tothom diu el número nou abans que la variable l'escrigui.|Todos dicen el número nuevo antes de que la variable lo escriba.", "Cada 6 targetes, canvieu els papers.|Cada 6 tarjetas, cambiad los papeles."],
        nota: "Passeja pels grups i atura't a les targetes «posa»: és on es veu si han entès que el número d'abans s'esborra.|Pasea por los grupos y detente en las tarjetas «pon»: es donde se ve si han entendido que el número de antes se borra." },
      { id: 's11', k: 'pregunta', t: "Quant val punts?|¿Cuánto vale puntos?", x: "Posa punts a 0 · suma 2 · suma 2 · posa punts a 10 · suma -1. Quant val?|Pon puntos a 0 · suma 2 · suma 2 · pon puntos a 10 · suma -1. ¿Cuánto vale?",
        nota: "Resposta: 9. Feu-ho junts a la pissarra abans de la fitxa. Qui ha dit 13 s'ha oblidat que «posa» esborra.|Respuesta: 9. Hacedlo juntos en la pizarra antes de la ficha. Quien ha dicho 13 se ha olvidado de que «pon» borra." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «El marcador».|Abre la sesión «El marcador».", "Fes «La missió», «Descobreix» i «Mans a l'obra».|Haz «La misión», «Descubre» y «Manos a la obra».", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Al pas de predir, demana que diguin el valor després de cada bloc, com amb la pissarreta.|En el paso de predecir, pide que digan el valor después de cada bloque, como con la pizarrita." },
      { id: 's13', k: 'repte', t: "Reptes del marcador|Retos del marcador", timer: 10, punts: ["1. La moneda de la sort|1. La moneda de la suerte", "2. La poma i el gat|2. La manzana y el gato", "3. El comptador de salts|3. El contador de saltos", "4. L'estrella suma, el meteorit resta|4. La estrella suma, el meteorito resta"],
        nota: "Recorda: amb «Comença» proven ells; «Comprova» fa els tocs i les tecles sol i diu si el repte està superat.|Recuerda: con «Empieza» prueban ellos; «Comprueba» hace los toques y las teclas solo y dice si el reto está superado." },
      { id: 's14', k: 'activitat', t: "Crea: la caseta dels globus|Crea: la caseta de los globos", timer: 5, punts: ["Quan comença: punts a 0.|Al empezar: puntos a 0.", "Cada globus tocat: suma punts.|Cada globo tocado: suma puntos.", "En Numi diu quants punts portes.|Numi dice cuántos puntos llevas."],
        nota: "Celebra les casetes diferents: uns globus es mouen, altres creixen o fan sons. Els criteris són els mateixos.|Celebra las casetas diferentes: unos globos se mueven, otros crecen o hacen sonidos. Los criterios son los mismos." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Una variable és una capsa amb nom que guarda un número.|Una variable es una caja con nombre que guarda un número.", "«Posa» posa un número nou; «suma» n'hi afegeix o en treu.|«Pon» pone un número nuevo; «suma» añade o quita.", "«Digues» amb la variable mostra el número.|«Di» con la variable muestra el número."],
        nota: "Torna a la pregunta del principi: ara ja sabeu on es guarden els punts.|Vuelve a la pregunta del principio: ahora ya sabéis dónde se guardan los puntos." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Una variable: nom i número.|Una variable: nombre y número.", "Punts val 4: «posa a 2» o «suma 2»?|Puntos vale 4: ¿«pon a 2» o «suma 2»?"],
        nota: "Anota qui confon «posa» i «suma»: a la sessió 2 hi tornarem amb les vides.|Anota quién confunde «pon» y «suma»: en la sesión 2 volveremos a ello con las vidas." }
    ],
    print: [
      { id: 'p1', t: "Targetes del marcador viu|Tarjetas del marcador vivo", k: 'targetes',
        intro: "Un paquet per grup de 4. Retalleu-les, barregeu-les i deixeu-les de cara avall. La pissarreta de la variable comença amb «punts: 0».|Un paquete por grupo de 4. Recortadlas, barajadlas y dejadlas boca abajo. La pizarrita de la variable empieza con «puntos: 0».",
        items: [
          { t: "Toques la moneda 🪙: suma a punts 1|Tocas la moneda 🪙: suma a puntos 1", n: 6 },
          { t: "Atrapes una poma 🍎: suma a punts 2|Atrapas una manzana 🍎: suma a puntos 2", n: 3 },
          { t: "Toques el meteorit ☄️: suma a punts -1|Tocas el meteorito ☄️: suma a puntos -1", n: 3 },
          { t: "Estrella daurada ⭐: suma a punts 5|Estrella dorada ⭐: suma a puntos 5", n: 1 },
          { t: "Bandera verda 🏁: posa punts a 0|Bandera verde 🏁: pon puntos a 0", n: 1 },
          { t: "Sorpresa 🎁: posa punts a 10|Sorpresa 🎁: pon puntos a 10", n: 1 },
          { t: "En Numi parla 💬: digues punts|Numi habla 💬: di puntos", n: 2 }
        ] },
      { id: 'p2', t: "Fitxa: quant val punts?|Ficha: ¿cuánto vale puntos?", k: 'fitxa',
        intro: "Segueix els blocs d'un en un i apunta el valor de punts després de cada bloc.|Sigue los bloques de uno en uno y apunta el valor de puntos después de cada bloque.",
        items: [
          { q: "Posa punts a 0 · suma a punts 1 · suma a punts 1 · suma a punts 1|Pon puntos a 0 · suma a puntos 1 · suma a puntos 1 · suma a puntos 1", sol: "0, 1, 2, 3 → punts = 3|0, 1, 2, 3 → puntos = 3" },
          { q: "Posa punts a 5 · suma a punts -2 · suma a punts 4|Pon puntos a 5 · suma a puntos -2 · suma a puntos 4", sol: "5, 3, 7 → punts = 7|5, 3, 7 → puntos = 7" },
          { q: "Posa punts a 0 · suma a punts 3 · posa punts a 1 · suma a punts 1|Pon puntos a 0 · suma a puntos 3 · pon puntos a 1 · suma a puntos 1", sol: "0, 3, 1, 2 → punts = 2 (el «posa» esborra el 3)|0, 3, 1, 2 → puntos = 2 (el «pon» borra el 3)" },
          { q: "La moneda té «Quan toco: posa punts a 1». Toques la moneda 4 vegades. Què diu el marcador?|La moneda tiene «Al tocar: pon puntos a 1». Tocas la moneda 4 veces. ¿Qué dice el marcador?", sol: "1. Per arribar a 4 cal «suma a punts 1».|1. Para llegar a 4 hace falta «suma a puntos 1»." }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Vides i fi de partida ---------- */
  'g6-2': {
    obj: [
      "L'alumne/a programa una variable de vides que comença a 3 i baixa 1 a cada xoc, amb una espera perquè cada xoc compti una sola vegada.|El alumno/a programa una variable de vidas que empieza en 3 y baja 1 en cada choque, con una espera para que cada choque cuente una sola vez.",
      "L'alumne/a llegeix i fa servir condicions que comparen una variable amb un número (=, > i <).|El alumno/a lee y usa condiciones que comparan una variable con un número (=, > y <).",
      "L'alumne/a fa la fi de la partida: quan vides = 0, un missatge i «atura tot».|El alumno/a hace el fin de la partida: cuando vidas = 0, un mensaje y «para todo».",
      "L'alumne/a troba i arregla l'error de posar el valor inicial dins del bucle.|El alumno/a encuentra y arregla el error de poner el valor inicial dentro del bucle."
    ],
    comp: [
      "Competència digital (CD5): programar regles d'un videojoc amb variables i condicions|Competencia digital (CD5): programar reglas de un videojuego con variables y condiciones",
      "Pensament computacional: valor inicial, comparacions i condició d'aturada|Pensamiento computacional: valor inicial, comparaciones y condición de parada",
      "Matemàtiques: els signes =, > i <, i el seguiment d'una quantitat que puja i baixa|Matemáticas: los signos =, > y <, y el seguimiento de una cantidad que sube y baja",
      "Aprendre a aprendre: depurar un programa observant què passa a cada volta del bucle|Aprender a aprender: depurar un programa observando qué pasa en cada vuelta del bucle"
    ],
    vocab: [
      ["Vides|Vidas", "La variable que diu quantes oportunitats queden.|La variable que dice cuántas oportunidades quedan."],
      ["Valor inicial|Valor inicial", "El número amb què comença una variable (vides a 3).|El número con el que empieza una variable (vidas a 3)."],
      ["Comparar|Comparar", "Mirar si un número és igual, més gran o més petit que un altre.|Mirar si un número es igual, mayor o menor que otro."],
      ["Fi de la partida|Fin de la partida", "El moment en què el videojoc s'acaba perquè ja no queden vides.|El momento en que el videojuego se acaba porque ya no quedan vidas."],
      ["Atura tot|Para todo", "El bloc que para tots els guions de tots els personatges.|El bloque que para todos los guiones de todos los personajes."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Vides i fi de partida»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Vidas y fin de partida»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis i la fitxa «La taula de les vides» per parella|Lápiz y la ficha «La tabla de las vidas» por pareja"
      ],
      imprimir: ["Fitxa: la taula de les vides|Ficha: la tabla de las vidas"],
      prep: [
        "Imprimir una fitxa per parella.|Imprimir una ficha por pareja.",
        "Dibuixar a la pissarra una taula amb dues columnes: «què passa» i «vides».|Dibujar en la pizarra una tabla con dos columnas: «qué pasa» y «vidas».",
        "Provar abans el repte de l'error: cal esborrar «posa vides a 3» de dins del bucle i posar-ne un de nou abans.|Probar antes el reto del error: hay que borrar «pon vidas a 3» de dentro del bucle y poner uno nuevo antes."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: la nau que no es trenca mai|Bienvenida: la nave que no se rompe nunca", fase: 'inici',
        fa: "Repassa «posa» i «suma» amb una pregunta ràpida. Explica la missió: el videojoc de l'espai no té vides i la partida no s'acaba mai. Pregunta quines regles necessita.|Repasa «pon» y «suma» con una pregunta rápida. Explica la misión: el videojuego del espacio no tiene vidas y la partida no se acaba nunca. Pregunta qué reglas necesita.",
        diu: ["Quin bloc fa que el marcador baixi 1?|¿Qué bloque hace que el marcador baje 1?",
          "Si la nau no pot perdre mai, té gràcia el videojoc?|Si la nave no puede perder nunca, ¿tiene gracia el videojuego?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Vides, comparacions i fi de partida|Vidas, comparaciones y fin de partida", fase: 'teoria',
        fa: "Mostra l'animació dels cors i la demo de la nau. Pregunta per què la nau espera després del xoc. Presenta les comparacions amb exemples de la classe (quants sou? més de 20?) i el truc de la boca. Passa la demo de la fi de partida i acaba amb l'error de «posa vides a 3» dins del bucle.|Muestra la animación de los corazones y la demo de la nave. Pregunta por qué la nave espera después del choque. Presenta las comparaciones con ejemplos de la clase (¿cuántos sois? ¿más de 20?) y el truco de la boca. Pasa la demo del fin de partida y termina con el error de «pon vidas a 3» dentro del bucle.",
        diu: ["Mentre el meteorit travessa la nau, quantes vegades la toca?|Mientras el meteorito atraviesa la nave, ¿cuántas veces la toca?",
          "Som 22 a classe. «alumnes > 20» és sí o no?|Somos 22 en clase. «alumnos > 20» ¿es sí o no?",
          "Per què aquesta partida no s'acaba mai?|¿Por qué esta partida no se acaba nunca?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La taula de les vides|La tabla de las vidas", fase: 'desconnectat',
        fa: "Feu junts la primera partida de la fitxa a la pissarra: a cada fila, què passa i quantes vides queden. Després, per parelles, completen les altres partides, encerclen la fila on vides = 0 i responen les comparacions. Als últims minuts, cada parella inventa una partida curta perquè la resolgui la parella del costat.|Haced juntos la primera partida de la ficha en la pizarra: en cada fila, qué pasa y cuántas vidas quedan. Después, por parejas, completan las otras partidas, rodean la fila donde vidas = 0 y responden las comparaciones. En los últimos minutos, cada pareja inventa una partida corta para que la resuelva la pareja de al lado.",
        diu: ["Després d'aquest xoc, quantes vides queden?|Después de este choque, ¿cuántas vidas quedan?",
          "En quina fila s'acaba la partida? Per què les files de sota ja no compten?|¿En qué fila se acaba la partida? ¿Por qué las filas de debajo ya no cuentan?",
          "vides > 0: sí o no? Què vol dir?|vidas > 0: ¿sí o no? ¿Qué quiere decir?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles|Por parejas" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins al pas «Investiga». Al pas d'ordenar el guió, fixa't que posin «posa vides a 3» abans del «per sempre». A «Les tres vides», que toquin «Ho hem fet!» si ja han fet la taula.|Cada alumno/a avanza hasta el paso «Investiga». En el paso de ordenar el guion, fíjate en que pongan «pon vidas a 3» antes del «por siempre». En «Las tres vidas», que toquen «¡Lo hemos hecho!» si ya han hecho la tabla.",
        diu: ["Aquest bloc, es fa una vegada o a cada volta?|Este bloque, ¿se hace una vez o en cada vuelta?",
          "A Investiga: al començament, quant valen les vides? Què diu la condició?|En Investiga: al principio, ¿cuánto valen las vidas? ¿Qué dice la condición?"],
        slides: ['s12'], app: "De «La missió» a «Investiga»: les dues preguntes de repàs, la història, les targetes de «Descobreix», «Les tres vides», ordenar el guió de la nau, les dues preguntes de vides i la partida que s'acaba abans de començar.|De «La misión» a «Investiga»: las dos preguntas de repaso, la historia, las tarjetas de «Descubre», «Las tres vidas», ordenar el guion de la nave, las dos preguntas de vidas y la partida que se acaba antes de empezar.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: vides i fi de partida|Retos: vidas y fin de partida", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts i deixa'ls fer els quatre reptes. Explica que el primer repte té dues proves amb temps diferents: el programa ha de funcionar a les dues. Al de la fi de partida, el «si vides = 0» ja hi és: només n'han d'omplir l'interior.|Haced la pausa activa todos juntos y deja que hagan los cuatro retos. Explica que el primer reto tiene dos pruebas con tiempos diferentes: el programa tiene que funcionar en las dos. En el del fin de partida, el «si vidas = 0» ya está: solo tienen que rellenar su interior.",
        diu: ["Mira el marcador: quantes vides perd la nau en un sol xoc?|Mira el marcador: ¿cuántas vidas pierde la nave en un solo choque?",
          "Què passa amb el cor quan ja l'has agafat? Per què s'amaga?|¿Qué pasa con el corazón cuando ya lo has cogido? ¿Por qué se esconde?",
          "On és «posa vides a 3» al programa que no s'acaba mai?|¿Dónde está «pon vidas a 3» en el programa que no se acaba nunca?"],
        slides: ['s13'], app: "«Pausa activa» i els quatre reptes: tres vides, la fi de la partida, la vida extra i la partida que no s'acaba mai.|«Pausa activa» y los cuatro retos: tres vidas, el fin de la partida, la vida extra y la partida que no se acaba nunca.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el peix i les meduses|Crea: el pez y las medusas", fase: 'crea',
        fa: "Cada alumne/a construeix el videojoc amb les vides. Qui acabi, hi afegeix les fletxes ↑ i ↓ i el passa a un company/a perquè intenti esquivar les meduses.|Cada alumno/a construye el videojuego con las vidas. Quien termine, añade las flechas ↑ y ↓ y lo pasa a un compañero/a para que intente esquivar las medusas.",
        diu: ["Quins tres trossos té el guió del peix?|¿Qué tres trozos tiene el guion del pez?",
          "El teu company/a ha pogut esquivar la medusa? Quantes vides li han quedat?|¿Tu compañero/a ha podido esquivar la medusa? ¿Cuántas vidas le han quedado?"],
        slides: ['s14'], app: "Pas «Crea»: El peix i les meduses (es desa a «Projectes»).|Paso «Crea»: El pez y las medusas (se guarda en «Proyectos»).", org: "Individual i per parelles|Individual y por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa las tres ideas, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Per què la nau espera 1 segon després de cada xoc?|¿Por qué la nave espera 1 segundo después de cada choque?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["No posa cap espera després del xoc i la nau perd totes les vides de cop.|No pone ninguna espera después del choque y la nave pierde todas las vidas de golpe.",
        "Que miri el marcador mentre el meteorit travessa la nau: quantes vides perd? Quant de temps la toca? Què podria fer la nau mentrestant?|Que mire el marcador mientras el meteorito atraviesa la nave: ¿cuántas vidas pierde? ¿Cuánto tiempo la toca? ¿Qué podría hacer la nave mientras tanto?"],
      ["Posa «posa vides a 3» dins del «per sempre» i la partida no s'acaba mai.|Pone «pon vidas a 3» dentro del «por siempre» y la partida no se acaba nunca.",
        "Pregunta: aquest bloc, quantes vegades s'ha de fer? Que segueixi el bucle amb el dit i digui el valor de vides a cada volta.|Pregunta: este bloque, ¿cuántas veces se tiene que hacer? Que siga el bucle con el dedo y diga el valor de vidas en cada vuelta."],
      ["Confon els signes > i <.|Confunde los signos > y <.",
        "Recorda-li el truc: la boca oberta mira el número més gran. Que llegeixi la condició en veu alta amb números de veritat: 5 > 3?|Recuérdale el truco: la boca abierta mira al número más grande. Que lea la condición en voz alta con números de verdad: ¿5 > 3?"],
      ["Posa el «digues Fi de la partida!» fora del «si vides = 0», i ho diu de seguida.|Pone el «di ¡Fin de la partida!» fuera del «si vidas = 0», y lo dice enseguida.",
        "Pregunta-li quan ha de passar el missatge: sempre o només quan no queden vides? Que miri on és el bloc respecte del «si».|Pregúntale cuándo tiene que pasar el mensaje: ¿siempre o solo cuando no quedan vidas? Que mire dónde está el bloque respecto del «si»."],
      ["Al repte del cor, el cor dona vides sense parar.|En el reto del corazón, el corazón da vidas sin parar.",
        "Pregunta: després d'agafar-lo, el cor continua tocant la nau? Què podria fer perquè ja no la toqui?|Pregunta: después de cogerlo, ¿el corazón sigue tocando la nave? ¿Qué podría hacer para que ya no la toque?"]
    ],
    diff: {
      mes: "Al videojoc del peix, afegir un cor que doni una vida extra i fer que el peix canviï de vestit quan perd una vida. Inventar a la fitxa una partida on la nau agafi tants cors que no s'acabi mai, i explicar per què.|En el videojuego del pez, añadir un corazón que dé una vida extra y hacer que el pez cambie de disfraz cuando pierde una vida. Inventar en la ficha una partida en la que la nave coja tantos corazones que no se acabe nunca, y explicar por qué.",
      menys: "Fer la taula de les vides amb tres cors de paper damunt la taula, traient-ne un a cada xoc. A l'app, començar pel repte de les tres vides i deixar la fi de partida per quan el primer funcioni.|Hacer la tabla de las vidas con tres corazones de papel sobre la mesa, quitando uno en cada choque. En la app, empezar por el reto de las tres vidas y dejar el fin de partida para cuando el primero funcione."
    },
    aval: {
      ticket: ["La nau té 3 vides i xoca dues vegades. Quantes en queden? Què diu «vides = 0»?|La nave tiene 3 vidas y choca dos veces. ¿Cuántas quedan? ¿Qué dice «vidas = 0»?",
        "On va «posa vides a 3»: abans del bucle o a dins? Per què?|¿Dónde va «pon vidas a 3»: antes del bucle o dentro? ¿Por qué?"],
      rubric: [
        ["Vides que baixen|Vidas que bajan", "Fa que cada xoc resti una sola vida i explica per què cal l'espera.|Hace que cada choque reste una sola vida y explica por qué hace falta la espera.", "Resta vides, però de vegades en perd més d'una per xoc.|Resta vidas, pero a veces pierde más de una por choque."],
        ["Comparacions|Comparaciones", "Llegeix i respon bé condicions amb =, > i < amb números concrets.|Lee y responde bien condiciones con =, > y < con números concretos.", "Entén el = però confon encara > i <.|Entiende el = pero confunde todavía > y <."],
        ["Fi de la partida|Fin de la partida", "Programa la fi de la partida i posa el valor inicial fora del bucle.|Programa el fin de la partida y pone el valor inicial fuera del bucle.", "Programa la fi de la partida amb ajuda o amb el valor inicial dins del bucle.|Programa el fin de la partida con ayuda o con el valor inicial dentro del bucle."]
      ]
    },
    casa: "A casa podeu fer «Les tres vides»: una persona és la nau amb tres cors de paper i l'altra llança un mitjó enrotllat, a poc a poc. A cada xoc, un cor menys; a 0, «Fi de la partida!».|En casa podéis hacer «Las tres vidas»: una persona es la nave con tres corazones de papel y la otra lanza un calcetín enrollado, despacio. En cada choque, un corazón menos; en 0, «¡Fin de la partida!».",
    slides: [
      { id: 's1', k: 'portada', t: "Vides i fi de partida|Vidas y fin de partida", x: "Unitat 6 · Sessió 2. Avui la nau tindrà tres vides.|Unidad 6 · Sesión 2. Hoy la nave tendrá tres vidas.",
        nota: "Explica que avui els videojocs ja es podran perdre: és el que els dona emoció.|Explica que hoy los videojuegos ya se podrán perder: es lo que les da emoción." },
      { id: 's2', k: 'repas', t: "Recordes el marcador?|¿Recuerdas el marcador?", punts: ["«Posa punts a 0»: número nou.|«Pon puntos a 0»: número nuevo.", "«Suma a punts 1»: un més.|«Suma a puntos 1»: uno más.", "«Suma a punts -1»: un menys.|«Suma a puntos -1»: uno menos."],
        nota: "Pregunta quin dels tres blocs farem servir per a les vides i per què.|Pregunta cuál de los tres bloques usaremos para las vidas y por qué." },
      { id: 's3', k: 'pregunta', t: "Una nau que no es trenca mai|Una nave que no se rompe nunca", x: "La nau xoca i no passa res. Quines regles li falten al videojoc?|La nave choca y no pasa nada. ¿Qué reglas le faltan al videojuego?",
        nota: "Apunta les regles que diguin: tenir vides, perdre'n en xocar, acabar quan no en queden.|Apunta las reglas que digan: tener vidas, perderlas al chocar, terminar cuando no quedan." },
      { id: 's4', k: 'anim', t: "Tres vides|Tres vidas", anim: 'g6lives', x: "Vides a 3 al començament; a cada xoc, suma -1.|Vidas a 3 al principio; en cada choque, suma -1.",
        nota: "Fes que diguin el número del marcador a cada xoc abans que canviï.|Haz que digan el número del marcador en cada choque antes de que cambie." },
      { id: 's5', k: 'media', t: "Un xoc, una vida|Un choque, una vida", x: "Després de restar una vida, la nau espera 1 segon.|Después de restar una vida, la nave espera 1 segundo.",
        media: { k: 'stage', w: W_NAU, prog: `${METEOR} @nau flag{ setv:vides,3 forever{ if:touch:meteorit{ chv:vides,-1 sound:xoc wait:1 } } }`, varNames: VN, time: 6 },
        nota: "Pregunta què passaria sense l'espera. Si cal, compteu junts els fotogrames: el meteorit triga gairebé mig segon a travessar la nau.|Pregunta qué pasaría sin la espera. Si hace falta, contad juntos los fotogramas: el meteorito tarda casi medio segundo en atravesar la nave." },
      { id: 's6', k: 'anim', t: "Comparar|Comparar", anim: 'g6cmp', x: "vides = 0? La resposta és sí o no.|¿vidas = 0? La respuesta es sí o no.",
        nota: "Feu comparacions amb la classe: alumnes > 20? cadires = taules? Truc: la boca del > i del < mira el número més gran.|Haced comparaciones con la clase: ¿alumnos > 20? ¿sillas = mesas? Truco: la boca del > y del < mira al número más grande." },
      { id: 's7', k: 'concepte', t: "Tres maneres de comparar|Tres maneras de comparar", punts: ["vides = 0 → no queden vides|vidas = 0 → no quedan vidas", "punts > 9 → 10 o més punts|puntos > 9 → 10 o más puntos", "temps < 5 → queden menys de 5 segons|tiempo < 5 → quedan menos de 5 segundos"],
        nota: "Per a cada condició, digueu un valor que la faci certa i un que la faci falsa.|Para cada condición, decid un valor que la haga cierta y uno que la haga falsa." },
      { id: 's8', k: 'media', t: "Fi de la partida|Fin de la partida", x: "Si vides = 0: «Fi de la partida!» i atura tot.|Si vidas = 0: «¡Fin de la partida!» y para todo.",
        media: { k: 'stage', w: W_NAU, prog: `${METEOR} @nau flag{ setv:vides,3 forever{ if:touch:meteorit{ chv:vides,-1 sound:xoc wait:1 } if:$vides=0{ say:"${FI}" stop:all } } }`, varNames: VN, time: 9 },
        nota: "Fes notar que, quan la nau diu el missatge, el meteorit també s'atura: «atura tot» para els guions de tots els personatges.|Haz notar que, cuando la nave dice el mensaje, el meteorito también se para: «para todo» para los guiones de todos los personajes." },
      { id: 's9', k: 'media', t: "Compte: una partida que no s'acaba|Cuidado: una partida que no se acaba", x: "«Posa vides a 3» dins del bucle: a cada volta, tornen a 3.|«Pon vidas a 3» dentro del bucle: en cada vuelta, vuelven a 3.",
        media: { k: 'stage', w: W_NAU, prog: `${METEOR} @nau flag{ forever{ setv:vides,3 if:touch:meteorit{ chv:vides,-1 sound:xoc wait:1 } if:$vides=0{ say:"${FI}" stop:all } } }`, varNames: VN, time: 6 },
        nota: "Pregunta on hauria d'anar el bloc. És l'error del repte 4: deixa'l anomenat com «el valor que torna».|Pregunta dónde debería ir el bloque. Es el error del reto 4: déjalo nombrado como «el valor que vuelve»." },
      { id: 's10', k: 'activitat', t: "La taula de les vides|La tabla de las vidas", timer: 12, punts: ["Comenceu amb vides = 3.|Empezad con vidas = 3.", "A cada fila: què passa i quantes vides queden.|En cada fila: qué pasa y cuántas vidas quedan.", "Encercleu la fila on vides = 0: fi de la partida!|Rodead la fila donde vidas = 0: ¡fin de la partida!", "Inventeu una partida per a la parella del costat.|Inventad una partida para la pareja de al lado."],
        nota: "Fes la primera partida a la pissarra amb tothom. Les files de després de la fi de la partida ja no compten: és «atura tot».|Haz la primera partida en la pizarra con todos. Las filas de después del fin de la partida ya no cuentan: es «para todo»." },
      { id: 's11', k: 'pregunta', t: "Sí o no?|¿Sí o no?", punts: ["vides val 2: vides = 0?|vidas vale 2: ¿vidas = 0?", "vides val 2: vides > 0?|vidas vale 2: ¿vidas > 0?", "punts val 9: punts > 9?|puntos vale 9: ¿puntos > 9?"],
        nota: "Respostes: no, sí, no. L'última costa: 9 no és més gran que 9.|Respuestas: no, sí, no. La última cuesta: 9 no es mayor que 9." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Vides i fi de partida».|Abre la sesión «Vidas y fin de partida».", "Fes fins al pas «Investiga».|Haz hasta el paso «Investiga».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas d'ordenar el guió, mira qui posa «posa vides a 3» dins del bucle i pregunta-li quantes vegades es farà.|En el paso de ordenar el guion, mira quién pone «pon vidas a 3» dentro del bucle y pregúntale cuántas veces se hará." },
      { id: 's13', k: 'repte', t: "Reptes de vides|Retos de vidas", timer: 10, punts: ["1. Tres vides (dues proves)|1. Tres vidas (dos pruebas)", "2. La fi de la partida|2. El fin de la partida", "3. Una vida extra|3. Una vida extra", "4. La partida que no s'acaba mai|4. La partida que no se acaba nunca"],
        nota: "Al repte 4 no cal moure el bloc: es pot esborrar i posar-ne un de nou al lloc bo.|En el reto 4 no hace falta mover el bloque: se puede borrar y poner uno nuevo en el sitio correcto." },
      { id: 's14', k: 'activitat', t: "Crea: el peix i les meduses|Crea: el pez y las medusas", timer: 5, punts: ["Vides a 3, abans del bucle.|Vidas a 3, antes del bucle.", "Cada xoc: una vida menys i espera.|Cada choque: una vida menos y espera.", "Vides = 0: un missatge i atura tot.|Vidas = 0: un mensaje y para todo.", "Extra: fletxes ↑ i ↓.|Extra: flechas ↑ y ↓."],
        nota: "Qui afegeixi les fletxes descobrirà que el videojoc ja es pot guanyar esquivant. Que el provi un company/a.|Quien añada las flechas descubrirá que el videojuego ya se puede ganar esquivando. Que lo pruebe un compañero/a." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Vides a 3; cada xoc, -1 i esperar.|Vidas a 3; cada choque, -1 y esperar.", "Les condicions poden comparar: =, > i <.|Las condiciones pueden comparar: =, > y <.", "Vides = 0: fi de la partida i atura tot.|Vidas = 0: fin de la partida y para todo."],
        nota: "Pregunta quines regles de la llista del principi ja hem programat.|Pregunta qué reglas de la lista del principio ya hemos programado." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["3 vides i 2 xocs: quantes en queden?|3 vidas y 2 choques: ¿cuántas quedan?", "On va «posa vides a 3»?|¿Dónde va «pon vidas a 3»?"],
        nota: "Anota qui encara confon > i <: a la sessió 4 ho farem servir amb la mascota.|Anota quién aún confunde > y <: en la sesión 4 lo usaremos con la mascota." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: la taula de les vides|Ficha: la tabla de las vidas", k: 'fitxa',
        intro: "Cada partida comença amb vides = 3. Escriu les vides després de cada cosa que passa i encercla on s'acaba la partida. A sota, respon sí o no.|Cada partida empieza con vidas = 3. Escribe las vidas después de cada cosa que pasa y rodea dónde se acaba la partida. Debajo, responde sí o no.",
        items: [
          { q: "Partida 1: xoc ☄️ · xoc ☄️ · xoc ☄️|Partida 1: choque ☄️ · choque ☄️ · choque ☄️", sol: "2, 1, 0 → fi de la partida al tercer xoc|2, 1, 0 → fin de la partida en el tercer choque" },
          { q: "Partida 2: xoc ☄️ · cor ❤️ · xoc ☄️ · xoc ☄️ · cor ❤️|Partida 2: choque ☄️ · corazón ❤️ · choque ☄️ · choque ☄️ · corazón ❤️", sol: "2, 3, 2, 1, 2 → encara li queden 2 vides|2, 3, 2, 1, 2 → aún le quedan 2 vidas" },
          { q: "Partida 3: xoc ☄️ · xoc ☄️ · cor ❤️ · xoc ☄️ · xoc ☄️ · cor ❤️|Partida 3: choque ☄️ · choque ☄️ · corazón ❤️ · choque ☄️ · choque ☄️ · corazón ❤️", sol: "2, 1, 2, 1, 0 → fi de la partida; l'últim cor ja no compta|2, 1, 2, 1, 0 → fin de la partida; el último corazón ya no cuenta" },
          { q: "vides = 1. Sí o no?  vides = 0 · vides > 0 · vides < 3|vidas = 1. ¿Sí o no?  vidas = 0 · vidas > 0 · vidas < 3", sol: "no · sí · sí|no · sí · sí" },
          { q: "Inventa una partida de 5 coses perquè la resolgui la parella del costat.|Inventa una partida de 5 cosas para que la resuelva la pareja de al lado.", sol: "Resposta lliure. Comproveu-la junts fila a fila.|Respuesta libre. Comprobadla juntos fila a fila." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Compte enrere ---------- */
  'g6-3': {
    obj: [
      "L'alumne/a programa un compte enrere amb una variable que comença en un número i baixa 1 cada segon dins d'un bucle «repeteix».|El alumno/a programa una cuenta atrás con una variable que empieza en un número y baja 1 cada segundo dentro de un bucle «repite».",
      "L'alumne/a fa que el rellotge, amb el seu propi guió, funcioni alhora que la resta del videojoc i l'aturi quan arriba a 0.|El alumno/a hace que el reloj, con su propio guion, funcione a la vez que el resto del videojuego y lo pare cuando llega a 0.",
      "L'alumne/a fa servir el cronòmetre per mesurar quant triga una acció, posant-lo a zero en el moment just.|El alumno/a usa el cronómetro para medir cuánto tarda una acción, poniéndolo a cero en el momento justo.",
      "L'alumne/a relaciona el nombre de voltes del bucle amb el valor inicial del compte enrere.|El alumno/a relaciona el número de vueltas del bucle con el valor inicial de la cuenta atrás."
    ],
    comp: [
      "Competència digital (CD5): programar el temps en un videojoc amb variables i bucles|Competencia digital (CD5): programar el tiempo en un videojuego con variables y bucles",
      "Pensament computacional: comptadors que baixen, guions en paral·lel i mesura del temps|Pensamiento computacional: contadores que bajan, guiones en paralelo y medida del tiempo",
      "Matemàtiques (mesura): segons, decimals de segon i comptar enrere|Matemáticas (medida): segundos, décimas de segundo y contar hacia atrás",
      "Treball en equip: coordinar papers diferents que passen alhora|Trabajo en equipo: coordinar papeles diferentes que pasan a la vez"
    ],
    vocab: [
      ["Compte enrere|Cuenta atrás", "Una variable que comença en un número i baixa fins a 0.|Una variable que empieza en un número y baja hasta 0."],
      ["Cronòmetre|Cronómetro", "El rellotge de l'escenari que compta cap amunt, en segons.|El reloj del escenario que cuenta hacia arriba, en segundos."],
      ["Posar a zero|Poner a cero", "Fer que el cronòmetre torni a començar des de 0.|Hacer que el cronómetro vuelva a empezar desde 0."],
      ["Alhora (en paral·lel)|A la vez (en paralelo)", "Quan dos guions funcionen al mateix temps.|Cuando dos guiones funcionan al mismo tiempo."],
      ["Contrarellotge|Contrarreloj", "Un repte en què has de fer tant com puguis abans que s'acabi el temps.|Un reto en el que tienes que hacer tanto como puedas antes de que se acabe el tiempo."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Compte enrere»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Cuenta atrás»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per grup de 3: un got, 15 pinces o taps i les targetes de papers|Por grupo de 3: un vaso, 15 pinzas o tapones y las tarjetas de papeles",
        "Un rellotge amb segons visible (el del projector o un de paret)|Un reloj con segundos visible (el del proyector o uno de pared)"
      ],
      imprimir: ["Targetes: el rellotge, el recol·lector i el marcador|Tarjetas: el reloj, el recolector y el marcador"],
      prep: [
        "Preparar una bossa amb el got i les pinces per a cada grup.|Preparar una bolsa con el vaso y las pinzas para cada grupo.",
        "Imprimir i retallar un paquet de targetes per grup.|Imprimir y recortar un paquete de tarjetas por grupo.",
        "Provar abans el repte del cotxe: el cronòmetre s'ha de posar a zero just després del «3, 2, 1…».|Probar antes el reto del coche: el cronómetro se tiene que poner a cero justo después del «3, 2, 1…»."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: hi ha cua a la caseta!|Bienvenida: ¡hay cola en la caseta!", fase: 'inici',
        fa: "Repassa la fi de la partida i «atura tot». Explica la missió: cada persona tindrà 10 segons. Pregunta on han vist comptes enrere a la vida real.|Repasa el fin de la partida y «para todo». Explica la misión: cada persona tendrá 10 segundos. Pregunta dónde han visto cuentas atrás en la vida real.",
        diu: ["Què fa «atura tot»?|¿Qué hace «para todo»?",
          "On heu vist un compte enrere? Al microones, al semàfor, a cap d'any…|¿Dónde habéis visto una cuenta atrás? En el microondas, en el semáforo, en Nochevieja…"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Comptar enrere i cronometrar|Contar hacia atrás y cronometrar", fase: 'teoria',
        fa: "Mostra l'animació del compte enrere i la demo d'en Numi: abans de cada volta, que diguin el número que vindrà. Mostra els dos guions alhora (rellotge i poma). Presenta el cronòmetre: compta cap amunt i es posa a zero. Acaba amb la demo de l'error: el compte enrere sense espera.|Muestra la animación de la cuenta atrás y la demo de Numi: antes de cada vuelta, que digan el número que vendrá. Muestra los dos guiones a la vez (reloj y manzana). Presenta el cronómetro: cuenta hacia arriba y se pone a cero. Termina con la demo del error: la cuenta atrás sin espera.",
        diu: ["Si el temps comença a 5, quantes voltes calen per arribar a 0?|Si el tiempo empieza en 5, ¿cuántas vueltas hacen falta para llegar a 0?",
          "Mentre en Numi compta, el gat s'atura?|Mientras Numi cuenta, ¿el gato se para?",
          "Per què aquest compte enrere de 10 segons dura un instant?|¿Por qué esta cuenta atrás de 10 segundos dura un instante?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El rellotge i el recol·lector|El reloj y el recolector", fase: 'desconnectat',
        fa: "Grups de 3 amb les targetes de papers. Ronda 1 (compte enrere): el rellotge diu 10, 9, 8… picant a la taula cada segon; el recol·lector posa pinces al got d'una en una; a 0, el marcador compta els punts. Canvien els papers fins que tothom hagi fet de tot. Ronda 2 (cronòmetre): el rellotge compta cap amunt i el recol·lector posa 10 pinces tan de pressa com pugui; el marcador apunta quants segons ha trigat.|Grupos de 3 con las tarjetas de papeles. Ronda 1 (cuenta atrás): el reloj dice 10, 9, 8… picando en la mesa cada segundo; el recolector mete pinzas en el vaso de una en una; en 0, el marcador cuenta los puntos. Cambian los papeles hasta que todos hayan hecho de todo. Ronda 2 (cronómetro): el reloj cuenta hacia arriba y el recolector mete 10 pinzas tan rápido como pueda; el marcador apunta cuántos segundos ha tardado.",
        diu: ["El rellotge i el recol·lector treballen alhora, com dos guions.|El reloj y el recolector trabajan a la vez, como dos guiones.",
          "A la ronda 1 el temps és fix i compten els punts. I a la ronda 2?|En la ronda 1 el tiempo es fijo y cuentan los puntos. ¿Y en la ronda 2?",
          "Quan ha de dir «zero» el rellotge del cronòmetre?|¿Cuándo tiene que decir «cero» el reloj del cronómetro?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins al pas «Investiga». A «El repte dels 10 segons», que toquin «Ho hem fet!» si ja l'han fet en grup. Al pas d'ordenar el guió, fixa't en qui posa «posa temps a 10» dins del bucle.|Cada alumno/a avanza hasta el paso «Investiga». En «El reto de los 10 segundos», que toquen «¡Lo hemos hecho!» si ya lo han hecho en grupo. En el paso de ordenar el guion, fíjate en quién pone «pon tiempo a 10» dentro del bucle.",
        diu: ["Quant dura cada volta del bucle?|¿Cuánto dura cada vuelta del bucle?",
          "A Investiga: el temps puja o baixa? Quin número ho decideix?|En Investiga: ¿el tiempo sube o baja? ¿Qué número lo decide?"],
        slides: ['s12'], app: "De «La missió» a «Investiga»: les dues preguntes de repàs, les dues històries, les targetes de «Descobreix», «El repte dels 10 segons», ordenar el guió del rellotge, les dues preguntes de temps i el compte enrere que va cap amunt.|De «La misión» a «Investiga»: las dos preguntas de repaso, las dos historias, las tarjetas de «Descubre», «El reto de los 10 segundos», ordenar el guion del reloj, las dos preguntas de tiempo y la cuenta atrás que va hacia arriba.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: rellotges|Retos: relojes", fase: 'ordinador',
        fa: "Feu la pausa activa i deixa'ls fer els quatre reptes. Al primer hi ha un màxim de 6 blocs: si en necessiten més, és que no fan servir el bucle. Al del cotxe, la variable segons té decimals: és normal.|Haced la pausa activa y deja que hagan los cuatro retos. En el primero hay un máximo de 6 bloques: si necesitan más, es que no usan el bucle. En el del coche, la variable segundos tiene decimales: es normal.",
        diu: ["Quins blocs van dins del bucle i quins a fora?|¿Qué bloques van dentro del bucle y cuáles fuera?",
          "On poses «atura tot»: dins o fora del bucle? Per què?|¿Dónde pones «para todo»: dentro o fuera del bucle? ¿Por qué?",
          "Quan ha de començar a comptar el cronòmetre del cotxe?|¿Cuándo tiene que empezar a contar el cronómetro del coche?"],
        slides: ['s13'], app: "«Pausa activa» i els quatre reptes: 5, 4, 3, 2, 1, el rellotge del videojoc de la poma, el cronòmetre del cotxe i el rellotge que s'atura a 5.|«Pausa activa» y los cuatro retos: 5, 4, 3, 2, 1, el reloj del videojuego de la manzana, el cronómetro del coche y el reloj que se para en 5.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: contrarellotge al bosc|Crea: contrarreloj en el bosque", fase: 'crea',
        fa: "Cada alumne/a fa el seu contrarellotge: tria quant de temps dona i com vola la papallona. Després, el provi un company/a i el marcador diu quants punts ha fet.|Cada alumno/a hace su contrarreloj: elige cuánto tiempo da y cómo vuela la mariposa. Después, que lo pruebe un compañero/a y el marcador dice cuántos puntos ha hecho.",
        diu: ["Si dones 10 segons, quantes voltes ha de fer el bucle?|Si das 10 segundos, ¿cuántas vueltas tiene que dar el bucle?",
          "És massa fàcil o massa difícil? Què podries canviar?|¿Es demasiado fácil o demasiado difícil? ¿Qué podrías cambiar?"],
        slides: ['s14'], app: "Pas «Crea»: Contrarellotge al bosc (es desa a «Projectes»).|Paso «Crea»: Contrarreloj en el bosque (se guarda en «Proyectos»).", org: "Individual i per parelles|Individual y por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa las tres ideas, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Quina diferència hi ha entre un compte enrere i un cronòmetre?|¿Qué diferencia hay entre una cuenta atrás y un cronómetro?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Oblida «espera 1 segon» dins del bucle i el compte enrere s'acaba de seguida.|Olvida «espera 1 segundo» dentro del bucle y la cuenta atrás se acaba enseguida.",
        "Pregunta-li quant dura cada volta del bucle. Que compti en veu alta com ho faria un rellotge de veritat.|Pregúntale cuánto dura cada vuelta del bucle. Que cuente en voz alta como lo haría un reloj de verdad."],
      ["El número de voltes del bucle no coincideix amb el valor inicial (temps a 10 i repeteix 5).|El número de vueltas del bucle no coincide con el valor inicial (tiempo a 10 y repite 5).",
        "Que faci una taula: volta 1, temps 9; volta 2, temps 8… Quantes voltes calen per arribar a 0?|Que haga una tabla: vuelta 1, tiempo 9; vuelta 2, tiempo 8… ¿Cuántas vueltas hacen falta para llegar a 0?"],
      ["Posa «atura tot» dins del bucle i la partida s'acaba al primer segon.|Pone «para todo» dentro del bucle y la partida se acaba en el primer segundo.",
        "Pregunta: quan s'ha d'acabar la partida, a cada volta o quan el bucle ha acabat? Que segueixi el guió amb el dit.|Pregunta: ¿cuándo se tiene que acabar la partida, en cada vuelta o cuando el bucle ha terminado? Que siga el guion con el dedo."],
      ["Posa el cronòmetre a zero al començament del guió, abans del «3, 2, 1…», i el temps del cotxe surt massa llarg.|Pone el cronómetro a cero al principio del guion, antes del «3, 2, 1…», y el tiempo del coche sale demasiado largo.",
        "Pregunta-li quan surt el cotxe de veritat. Que recordi la ronda 2 de l'activitat: quan deia «zero» el rellotge?|Pregúntale cuándo sale el coche de verdad. Que recuerde la ronda 2 de la actividad: ¿cuándo decía «cero» el reloj?"],
      ["Escriu el compte enrere al guió de la papallona i aquesta deixa de volar.|Escribe la cuenta atrás en el guion de la mariposa y esta deja de volar.",
        "Pregunta: un guió pot fer dues coses alhora? Que posi el rellotge en un altre personatge, com en Numi.|Pregunta: ¿un guion puede hacer dos cosas a la vez? Que ponga el reloj en otro personaje, como Numi."]
    ],
    diff: {
      mes: "Al contrarellotge, fer que la papallona vagi més de pressa quan queda poc temps (pensar amb un company/a quina condició caldria) o que en Numi digui els darrers 3 segons en veu alta. Mesurar amb el cronòmetre quant triga el gat a creuar l'escenari a velocitats diferents.|En el contrarreloj, hacer que la mariposa vaya más deprisa cuando queda poco tiempo (pensar con un compañero/a qué condición haría falta) o que Numi diga los últimos 3 segundos en voz alta. Medir con el cronómetro cuánto tarda el gato en cruzar el escenario a velocidades diferentes.",
      menys: "Fer el compte enrere en paper abans de l'app: escriure 5, 4, 3, 2, 1 i ratllar un número cada vegada que el professor/a pica de mans. A l'app, fer primer el repte de 5, 4, 3, 2, 1 i, després, copiar el mateix guió a en Numi al repte de la poma.|Hacer la cuenta atrás en papel antes de la app: escribir 5, 4, 3, 2, 1 y tachar un número cada vez que el profesor/a da una palmada. En la app, hacer primero el reto de 5, 4, 3, 2, 1 y, después, copiar el mismo guion en Numi en el reto de la manzana."
    },
    aval: {
      ticket: ["Quins blocs van dins del bucle d'un compte enrere?|¿Qué bloques van dentro del bucle de una cuenta atrás?",
        "Vols saber quant tardes a fer 10 salts: compte enrere o cronòmetre? Quan el poses a zero?|Quieres saber cuánto tardas en dar 10 saltos: ¿cuenta atrás o cronómetro? ¿Cuándo lo pones a cero?"],
      rubric: [
        ["Compte enrere|Cuenta atrás", "Programa un compte enrere amb valor inicial, espera i -1, i el nombre de voltes correcte.|Programa una cuenta atrás con valor inicial, espera y -1, y el número de vueltas correcto.", "Programa el compte enrere però s'equivoca en l'espera o en el nombre de voltes.|Programa la cuenta atrás pero se equivoca en la espera o en el número de vueltas."],
        ["Guions alhora|Guiones a la vez", "Posa el rellotge en un guió propi i atura el videojoc quan arriba a 0.|Pone el reloj en un guion propio y para el videojuego cuando llega a 0.", "Fa el rellotge, però l'atura en un lloc equivocat o el posa al guió d'un altre personatge.|Hace el reloj, pero lo para en un sitio equivocado o lo pone en el guion de otro personaje."],
        ["Cronòmetre|Cronómetro", "Posa el cronòmetre a zero en el moment just i en guarda el valor en una variable.|Pone el cronómetro a cero en el momento justo y guarda su valor en una variable.", "Fa servir el cronòmetre, però no sap ben bé quan s'ha de posar a zero.|Usa el cronómetro, pero no sabe bien cuándo se tiene que poner a cero."]
      ]
    },
    casa: "A casa podeu fer «El repte dels 10 segons»: una persona compta enrere de 10 a 0 i l'altra posa objectes petits en un got. Després, amb el cronòmetre d'un mòbil, mireu quant trigueu a posar-ne 10.|En casa podéis hacer «El reto de los 10 segundos»: una persona cuenta hacia atrás de 10 a 0 y la otra mete objetos pequeños en un vaso. Después, con el cronómetro de un móvil, mirad cuánto tardáis en meter 10.",
    slides: [
      { id: 's1', k: 'portada', t: "Compte enrere|Cuenta atrás", x: "Unitat 6 · Sessió 3. Cada persona tindrà 10 segons!|Unidad 6 · Sesión 3. ¡Cada persona tendrá 10 segundos!",
        nota: "Explica que avui el temps serà una variable més, com els punts i les vides.|Explica que hoy el tiempo será una variable más, como los puntos y las vidas." },
      { id: 's2', k: 'repas', t: "Recordes la fi de la partida?|¿Recuerdas el fin de la partida?", punts: ["Si vides = 0: «Fi de la partida!».|Si vidas = 0: «¡Fin de la partida!».", "«Atura tot» para tots els guions.|«Para todo» para todos los guiones.", "«Posa vides a 3», abans del bucle.|«Pon vidas a 3», antes del bucle."],
        nota: "Pregunta: avui, què pot fer acabar una partida, a més de les vides? El temps!|Pregunta: hoy, ¿qué puede hacer terminar una partida, además de las vidas? ¡El tiempo!" },
      { id: 's3', k: 'pregunta', t: "On hi ha comptes enrere?|¿Dónde hay cuentas atrás?", x: "Digues un lloc on hagis vist un rellotge que compta enrere.|Di un sitio donde hayas visto un reloj que cuenta hacia atrás.",
        nota: "Exemples: microones, semàfor per a vianants, coets, final d'any. Pregunta què passa quan arriben a 0.|Ejemplos: microondas, semáforo para peatones, cohetes, fin de año. Pregunta qué pasa cuando llegan a 0." },
      { id: 's4', k: 'anim', t: "Un compte enrere|Una cuenta atrás", anim: 'g6count', x: "Temps a 5; repeteix 5 vegades: espera 1 segon i suma -1.|Tiempo a 5; repite 5 veces: espera 1 segundo y suma -1.",
        nota: "L'animació va més de pressa que un rellotge de veritat. Pregunta quant duraria de debò (5 segons).|La animación va más deprisa que un reloj de verdad. Pregunta cuánto duraría de verdad (5 segundos)." },
      { id: 's5', k: 'media', t: "5, 4, 3, 2, 1… Ja!|5, 4, 3, 2, 1… ¡Ya!", x: "Dins del bucle: digues, espera, resta.|Dentro del bucle: di, espera, resta.",
        media: { k: 'stage', w: { bg: 'escenari', sprites: [{ id: 'numi', art: 'numi', x: 0, y: -40, size: 130 }], vars: ['temps'] }, prog: '@numi flag{ setv:temps,5 rep:5{ say:$temps wait:1 chv:temps,-1 } say:"Ja!|¡Ya!",1.5 }', varNames: VN, time: 7 },
        nota: "Compteu en veu alta amb en Numi. Pregunta: què passaria si poséssim el «digues» després del «suma -1»?|Contad en voz alta con Numi. Pregunta: ¿qué pasaría si pusiéramos el «di» después del «suma -1»?" },
      { id: 's6', k: 'media', t: "Dos guions alhora|Dos guiones a la vez", x: "En Numi compta; el gat i la poma continuen. A 0: atura tot.|Numi cuenta; el gato y la manzana siguen. En 0: para todo.",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'gat', art: 'gat', x: -200, y: -120 }, { id: 'poma', art: 'poma', x: 0, y: 150 }, { id: 'numi', art: 'numi', x: 170, y: 40, size: 80 }], vars: ['punts', 'temps'] }, prog: `${GAT} ${POMA} @numi flag{ setv:temps,6 rep:6{ wait:1 chv:temps,-1 } say:"${TEMPS}" stop:all }`, varNames: VN, time: 8 },
        nota: "Fes notar els dos marcadors: punts puja quan el gat atrapa la poma i temps baixa sol. Són guions diferents que funcionen alhora.|Haz notar los dos marcadores: puntos sube cuando el gato atrapa la manzana y tiempo baja solo. Son guiones diferentes que funcionan a la vez." },
      { id: 's7', k: 'anim', t: "El cronòmetre|El cronómetro", anim: 'g6timer', x: "Compta cap amunt tot sol. «Posa el cronòmetre a zero» el fa començar de nou.|Cuenta hacia arriba solo. «Pon el cronómetro a cero» lo hace empezar de nuevo.",
        nota: "Pregunta quan s'ha de posar a zero per saber quant triga el cotxe: quan surt, no abans.|Pregunta cuándo se tiene que poner a cero para saber cuánto tarda el coche: cuando sale, no antes." },
      { id: 's8', k: 'concepte', t: "Enrere o endavant?|¿Hacia atrás o hacia delante?", punts: ["Compte enrere: de 10 a 0. Per posar un límit de temps.|Cuenta atrás: de 10 a 0. Para poner un límite de tiempo.", "Cronòmetre: de 0 cap amunt. Per saber quant has trigat.|Cronómetro: de 0 hacia arriba. Para saber cuánto has tardado.", "Tots dos compten segons.|Los dos cuentan segundos."],
        nota: "Demana un exemple de cada: el temps d'un examen (enrere) i una cursa (endavant).|Pide un ejemplo de cada: el tiempo de un examen (hacia atrás) y una carrera (hacia delante)." },
      { id: 's9', k: 'media', t: "Compte: falta l'espera|Cuidado: falta la espera", x: "Sense «espera 1 segon», el compte enrere de 10 segons s'acaba en un instant.|Sin «espera 1 segundo», la cuenta atrás de 10 segundos se acaba en un instante.",
        media: { k: 'stage', w: { bg: 'escenari', sprites: [{ id: 'numi', art: 'numi', x: 0, y: -40, size: 130 }], vars: ['temps'] }, prog: '@numi flag{ setv:temps,10 wait:1 rep:10{ chv:temps,-1 } say:"Ja?|¿Ya?",2 }', varNames: VN, time: 4 },
        nota: "Mireu el marcador: passa de 10 a 0 gairebé de cop. Pregunta quin bloc falta i on va.|Mirad el marcador: pasa de 10 a 0 casi de golpe. Pregunta qué bloque falta y dónde va." },
      { id: 's10', k: 'activitat', t: "El rellotge i el recol·lector|El reloj y el recolector", timer: 12, punts: ["Rellotge: 10, 9, 8… picant a la taula cada segon.|Reloj: 10, 9, 8… picando en la mesa cada segundo.", "Recol·lector: pinces al got, d'una en una.|Recolector: pinzas en el vaso, de una en una.", "Marcador: a 0, compta els punts.|Marcador: en 0, cuenta los puntos.", "Ronda 2: cronòmetre, quant trigues a posar-ne 10?|Ronda 2: cronómetro, ¿cuánto tardas en meter 10?"],
        nota: "Deixa el rellotge de segons projectat perquè el rellotge del grup no vagi massa de pressa.|Deja el reloj de segundos proyectado para que el reloj del grupo no vaya demasiado deprisa." },
      { id: 's11', k: 'pregunta', t: "Quant de temps?|¿Cuánto tiempo?", x: "Temps a 3; repeteix 3: espera 1 segon, suma -1; digues «Ja!». Quan diu «Ja!»?|Tiempo a 3; repite 3: espera 1 segundo, suma -1; di «¡Ya!». ¿Cuándo dice «¡Ya!»?",
        nota: "Resposta: als 3 segons. Si algú diu de seguida, pregunta-li què fa el bloc «espera».|Respuesta: a los 3 segundos. Si alguien dice enseguida, pregúntale qué hace el bloque «espera»." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Compte enrere».|Abre la sesión «Cuenta atrás».", "Fes fins al pas «Investiga».|Haz hasta el paso «Investiga».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "A «El repte dels 10 segons», que toquin «Ho hem fet!»: ja l'han fet en grup.|En «El reto de los 10 segundos», que toquen «¡Lo hemos hecho!»: ya lo han hecho en grupo." },
      { id: 's13', k: 'repte', t: "Reptes de rellotges|Retos de relojes", timer: 10, punts: ["1. 5, 4, 3, 2, 1… Ja! (màxim 6 blocs)|1. 5, 4, 3, 2, 1… ¡Ya! (máximo 6 bloques)", "2. El rellotge del videojoc de la poma|2. El reloj del videojuego de la manzana", "3. Quant triga el cotxe?|3. ¿Cuánto tarda el coche?", "4. El rellotge que s'atura a 5|4. El reloj que se para en 5"],
        nota: "Al repte 3, el cronòmetre es posa a zero just després del «3, 2, 1…» i abans de moure's.|En el reto 3, el cronómetro se pone a cero justo después del «3, 2, 1…» y antes de moverse." },
      { id: 's14', k: 'activitat', t: "Crea: contrarellotge al bosc|Crea: contrarreloj en el bosque", timer: 5, punts: ["La papallona vola; tocar-la suma punts.|La mariposa vuela; tocarla suma puntos.", "En Numi fa el compte enrere.|Numi hace la cuenta atrás.", "A 0: un missatge i atura tot.|En 0: un mensaje y para todo."],
        nota: "Que s'intercanviïn els videojocs: el company/a diu si el temps és massa curt o massa llarg.|Que se intercambien los videojuegos: el compañero/a dice si el tiempo es demasiado corto o demasiado largo." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Compte enrere: temps a 10 i, 10 vegades, espera 1 segon i suma -1.|Cuenta atrás: tiempo a 10 y, 10 veces, espera 1 segundo y suma -1.", "El rellotge té el seu guió i funciona alhora.|El reloj tiene su guion y funciona a la vez.", "El cronòmetre compta cap amunt; es posa a zero en sortir.|El cronómetro cuenta hacia arriba; se pone a cero al salir."],
        nota: "Pregunta: punts, vides i temps. Quina variable té gairebé cada videojoc que coneixeu?|Pregunta: puntos, vidas y tiempo. ¿Qué variable tiene casi cada videojuego que conocéis?" },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què va dins del bucle del compte enrere?|¿Qué va dentro del bucle de la cuenta atrás?", "10 salts: compte enrere o cronòmetre?|10 saltos: ¿cuenta atrás o cronómetro?"],
        nota: "La setmana vinent és el projecte de la mascota: avisa que pensin com seria la seva.|La semana que viene es el proyecto de la mascota: avisa que piensen cómo sería la suya." }
    ],
    print: [
      { id: 'p1', t: "Targetes: el rellotge, el recol·lector i el marcador|Tarjetas: el reloj, el recolector y el marcador", k: 'targetes',
        intro: "Un paquet per grup de 3. Cada targeta de paper té el seu «guió»: llegiu-lo abans de començar. Les tres targetes de paper funcionen alhora.|Un paquete por grupo de 3. Cada tarjeta de papel tiene su «guion»: leedlo antes de empezar. Las tres tarjetas de papel funcionan a la vez.",
        items: [
          { t: "⏳ Rellotge · posa temps a 10 · repeteix 10: espera 1 segon, temps -1 · a 0: «S'ha acabat el temps!»|⏳ Reloj · pon tiempo a 10 · repite 10: espera 1 segundo, tiempo -1 · en 0: «¡Se acabó el tiempo!»", n: 1 },
          { t: "🧺 Recol·lector · per sempre: agafa una pinça i posa-la al got|🧺 Recolector · por siempre: coge una pinza y métela en el vaso", n: 1 },
          { t: "🔢 Marcador · posa punts a 0 · quan s'acaba el temps: compta les pinces i digues punts|🔢 Marcador · pon puntos a 0 · cuando se acaba el tiempo: cuenta las pinzas y di puntos", n: 1 },
          { t: "⏱️ Ronda 2 · cronòmetre: posa a zero, compta 0, 1, 2… fins que hi ha 10 pinces al got|⏱️ Ronda 2 · cronómetro: pon a cero, cuenta 0, 1, 2… hasta que hay 10 pinzas en el vaso", n: 1 }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: la mascota virtual ---------- */
  'g6-4': {
    obj: [
      "L'alumne/a planifica en paper una mascota virtual: variables, què les fa pujar i baixar, i quan canvia de vestit.|El alumno/a planifica en papel una mascota virtual: variables, qué las hace subir y bajar, y cuándo cambia de disfraz.",
      "L'alumne/a programa una variable que puja sola amb el temps i botons que la fan baixar.|El alumno/a programa una variable que sube sola con el tiempo y botones que la hacen bajar.",
      "L'alumne/a fa que un personatge canviï de vestit segons el valor d'una variable amb «si… si no…» i una comparació.|El alumno/a hace que un personaje cambie de disfraz según el valor de una variable con «si… si no…» y una comparación.",
      "L'alumne/a construeix un projecte a trossos, el prova amb un company/a i el millora.|El alumno/a construye un proyecto a trozos, lo prueba con un compañero/a y lo mejora."
    ],
    comp: [
      "Competència digital (CD5): crear un projecte interactiu propi amb diverses variables|Competencia digital (CD5): crear un proyecto interactivo propio con varias variables",
      "Pensament computacional: descomposició, estat d'un personatge i condicions amb variables|Pensamiento computacional: descomposición, estado de un personaje y condiciones con variables",
      "Matemàtiques: comparar quantitats i preveure com canvien amb el temps|Matemáticas: comparar cantidades y prever cómo cambian con el tiempo",
      "Valors i ciutadania: tenir cura d'algú i donar comentaris amables i útils|Valores y ciudadanía: cuidar de alguien y dar comentarios amables y útiles"
    ],
    vocab: [
      ["Mascota virtual|Mascota virtual", "Un personatge de pantalla que cal cuidar: té variables que canvien.|Un personaje de pantalla que hay que cuidar: tiene variables que cambian."],
      ["Estat|Estado", "Com està un personatge ara mateix (amb gana, content, trist), segons les seves variables.|Cómo está un personaje ahora mismo (con hambre, contento, triste), según sus variables."],
      ["Botó|Botón", "Un personatge que, quan el toques, canvia una variable.|Un personaje que, cuando lo tocas, cambia una variable."],
      ["Descompondre|Descomponer", "Partir un projecte gran en trossos petits que es fan d'un en un.|Partir un proyecto grande en trozos pequeños que se hacen de uno en uno."],
      ["Provar i millorar|Probar y mejorar", "Fer que algú faci servir el projecte i canviar-lo segons el que passa.|Hacer que alguien use el proyecto y cambiarlo según lo que pasa."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la mascota virtual»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la mascota virtual»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis i colors, i la fitxa de disseny de la mascota per alumne/a|Lápiz y colores, y la ficha de diseño de la mascota por alumno/a"
      ],
      imprimir: ["Fitxa de disseny: la meva mascota virtual|Ficha de diseño: mi mascota virtual", "Targetes de prova per al company/a|Tarjetas de prueba para el compañero/a"],
      prep: [
        "Imprimir una fitxa de disseny per alumne/a i les targetes de prova (una per parella).|Imprimir una ficha de diseño por alumno/a y las tarjetas de prueba (una por pareja).",
        "Provar abans la mascota de la caseta (pas «Prova-la») per poder-la ensenyar projectada.|Probar antes la mascota de la caseta (paso «Pruébala») para poder enseñarla proyectada.",
        "Pensar parelles per a la prova final: millor amb algú que no seu al costat.|Pensar parejas para la prueba final: mejor con alguien que no se sienta al lado."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: el racó dels petits|Bienvenida: el rincón de los pequeños", fase: 'inici',
        fa: "Repassa les tres variables de la unitat (punts, vides, temps). Presenta el projecte: una mascota virtual per al racó dels petits de la fira. Pregunta què necessita una mascota de veritat i què podria canviar amb el temps.|Repasa las tres variables de la unidad (puntos, vidas, tiempo). Presenta el proyecto: una mascota virtual para el rincón de los pequeños de la feria. Pregunta qué necesita una mascota de verdad y qué podría cambiar con el tiempo.",
        diu: ["Quina variable puja sola cada segon, en el compte enrere al revés?|¿Qué variable sube sola cada segundo, en la cuenta atrás al revés?",
          "Si tens un gos, què li passa si no menja? I si no surt a passejar?|Si tienes un perro, ¿qué le pasa si no come? ¿Y si no sale a pasear?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Com funciona una mascota virtual|Cómo funciona una mascota virtual", fase: 'teoria',
        fa: "Mostra l'animació de la mascota i les demos tros a tros: la gana que puja sola i la poma que la fa baixar amb el canvi de cara. Llegiu junts la regla «si gana > 3… si no…» amb valors concrets. Acaba amb l'error de la gana negativa i la llista dels vestits.|Muestra la animación de la mascota y las demos trozo a trozo: el hambre que sube sola y la manzana que la hace bajar con el cambio de cara. Leed juntos la regla «si hambre > 3… si no…» con valores concretos. Termina con el error del hambre negativa y la lista de los disfraces.",
        diu: ["Si la gana val 2, quina cara posa? I si val 5?|Si el hambre vale 2, ¿qué cara pone? ¿Y si vale 5?",
          "Per què la gana puja tota sola?|¿Por qué el hambre sube sola?",
          "Té sentit una gana de -6? Com ho evitaríeu?|¿Tiene sentido un hambre de -6? ¿Cómo lo evitaríais?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El pla de la mascota|El plan de la mascota", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa de disseny: dibuix i nom, dues variables, què les fa pujar soles, quin botó les fa baixar i quina cara posa i quan (amb una comparació). Als últims 3 minuts, en parelles, s'expliquen el pla i el company/a fa una pregunta.|Cada alumno/a rellena la ficha de diseño: dibujo y nombre, dos variables, qué las hace subir solas, qué botón las hace bajar y qué cara pone y cuándo (con una comparación). En los últimos 3 minutos, por parejas, se explican el plan y el compañero/a hace una pregunta.",
        diu: ["La teva regla de la cara, té un número? Més gran o més petit que quant?|Tu regla de la cara, ¿tiene un número? ¿Mayor o menor que cuánto?",
          "Cada quant puja la gana? Massa de pressa i els petits no podran cuidar-la!|¿Cada cuánto sube el hambre? ¡Demasiado deprisa y los pequeños no podrán cuidarla!"],
        slides: ['s9'], app: "Cap: activitat amb la fitxa de disseny.|Ninguna: actividad con la ficha de diseño.", org: "Individual i per parelles|Individual y por parejas" },
      { min: 10, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a fa els passos fins a «Investiga». Al pas «El pla de la mascota», que toquin «Ho hem fet!»: ja tenen la fitxa. Al pas de provar la mascota de la caseta, que mirin com canvien les dues variables i la cara.|Cada alumno/a hace los pasos hasta «Investiga». En el paso «El plan de la mascota», que toquen «¡Lo hemos hecho!»: ya tienen la ficha. En el paso de probar la mascota de la caseta, que miren cómo cambian las dos variables y la cara.",
        diu: ["Quan es posa trista la mascota de la caseta? Quina variable ho decideix?|¿Cuándo se pone triste la mascota de la caseta? ¿Qué variable lo decide?",
          "A Investiga: la gana arriba mai a 50?|En Investiga: ¿el hambre llega alguna vez a 50?"],
        slides: ['s10'], app: "De «La missió» a «Investiga»: la pregunta de repàs, les dues històries, les targetes de «Descobreix», «El pla de la mascota», ordenar els trossos, provar la mascota de la caseta, la pregunta del vestit i la mascota que mai no té gana.|De «La misión» a «Investiga»: la pregunta de repaso, las dos historias, las tarjetas de «Descubre», «El plan de la mascota», ordenar los trozos, probar la mascota de la caseta, la pregunta del disfraz y la mascota que nunca tiene hambre.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: la mascota, tros a tros|Retos: la mascota, trozo a trozo", fase: 'ordinador',
        fa: "Feu la pausa activa i deixa'ls fer els quatre trossos. Insisteix que cada tros es prova abans de passar al següent. Qui acabi abans, comença el projecte.|Haced la pausa activa y deja que hagan los cuatro trozos. Insiste en que cada trozo se prueba antes de pasar al siguiente. Quien termine antes, empieza el proyecto.",
        diu: ["El tros 1 funciona? Com ho saps? Mira el marcador.|¿El trozo 1 funciona? ¿Cómo lo sabes? Mira el marcador.",
          "Al tros 3, quin vestit va al «si» i quin al «si no»?|En el trozo 3, ¿qué disfraz va en el «si» y cuál en el «si no»?"],
        slides: ['s11'], app: "«Pausa activa» i els quatre trossos: la gana puja sola, el menjar, la cara i l'alegria.|«Pausa activa» y los cuatro trozos: el hambre sube sola, la comida, la cara y la alegría.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 13, t: "Crea: la meva mascota virtual|Crea: mi mascota virtual", fase: 'crea',
        fa: "Cada alumne/a construeix la seva mascota a partir del pla (8 minuts). Després, prova per parelles amb les targetes de prova (5 minuts): el company/a la cuida durant un minut, respon les preguntes de la targeta i diu una cosa que li ha agradat i una idea per millorar-la. L'autor/a fa un canvi i la desa.|Cada alumno/a construye su mascota a partir del plan (8 minutos). Después, prueba por parejas con las tarjetas de prueba (5 minutos): el compañero/a la cuida durante un minuto, responde las preguntas de la tarjeta y dice una cosa que le ha gustado y una idea para mejorarla. El autor/a hace un cambio y la guarda.",
        diu: ["Segueix el teu pla: quin tros fas primer?|Sigue tu plan: ¿qué trozo haces primero?",
          "Quan proves la mascota d'un company/a: primer una cosa que t'agrada, després una idea.|Cuando pruebas la mascota de un compañero/a: primero una cosa que te gusta, después una idea.",
          "Quin canvi has fet després de la prova?|¿Qué cambio has hecho después de la prueba?"],
        slides: ['s12', 's13'], app: "Pas «Crea»: La meva mascota virtual (es desa a «Projectes»).|Paso «Crea»: Mi mascota virtual (se guarda en «Proyectos»).", org: "Individual i per parelles|Individual y por parejas" },
      { min: 4, t: "Tancament de la unitat|Cierre de la unidad", fase: 'tancament',
        fa: "Repassa la unitat: punts, vides, temps i mascota. Deixa que facin les preguntes finals. Felicita'ls per la insígnia i fes el tiquet a la porta.|Repasa la unidad: puntos, vidas, tiempo y mascota. Deja que hagan las preguntas finales. Felicítalos por la insignia y haz el ticket en la puerta.",
        diu: ["Quina variable faries servir per saber quant falta per acabar?|¿Qué variable usarías para saber cuánto falta para terminar?",
          "Quin canvi has fet a la mascota després de la prova del company/a?|¿Qué cambio has hecho a la mascota después de la prueba del compañero/a?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["La gana puja massa de pressa (centenars) perquè falta l'espera dins del «per sempre».|El hambre sube demasiado deprisa (cientos) porque falta la espera dentro del «por siempre».",
        "Pregunta: cada quant vols que pugi? Que miri el marcador: quant puja en un segon? Recorda el compte enrere sense espera.|Pregunta: ¿cada cuánto quieres que suba? Que mire el marcador: ¿cuánto sube en un segundo? Recuerda la cuenta atrás sin espera."],
      ["La mascota no canvia mai de cara perquè el número de la comparació és massa gran o massa petit.|La mascota no cambia nunca de cara porque el número de la comparación es demasiado grande o demasiado pequeño.",
        "Que miri fins on arriba la gana al marcador i llegeixi la condició amb aquest número: diu sí alguna vegada?|Que mire hasta dónde llega el hambre en el marcador y lea la condición con este número: ¿dice sí alguna vez?"],
      ["Posa els dos vestits iguals al «si» i al «si no».|Pone los dos disfraces iguales en el «si» y en el «si no».",
        "Pregunta: quina cara ha de fer quan té gana? I quan no? Que digui el número de cada vestit en veu alta abans de canviar-lo.|Pregunta: ¿qué cara tiene que hacer cuando tiene hambre? ¿Y cuando no? Que diga el número de cada disfraz en voz alta antes de cambiarlo."],
      ["Programa la poma dins del guió de la mascota en lloc de triar el personatge poma.|Programa la manzana dentro del guion de la mascota en lugar de elegir el personaje manzana.",
        "Pregunta-li qui toquen els petits per donar menjar. Que triï la poma a les pestanyes de dalt.|Pregúntale a quién tocan los pequeños para dar comida. Que elija la manzana en las pestañas de arriba."],
      ["Vol fer-ho tot de cop i, quan no funciona, no sap quin tros falla.|Quiere hacerlo todo de golpe y, cuando no funciona, no sabe qué trozo falla.",
        "Que torni al pla i provi un sol tros: la gana puja? Quan funcioni, el següent.|Que vuelva al plan y pruebe un solo trozo: ¿el hambre sube? Cuando funcione, el siguiente."]
    ],
    diff: {
      mes: "Afegir una tercera variable (son) amb un botó que posi el fons de nit i el vestit 3, o fer que la mascota digui «Tinc molta gana!» quan la gana passa de 8. Evitar la gana negativa amb un «si gana < 0: posa gana a 0».|Añadir una tercera variable (sueño) con un botón que ponga el fondo de noche y el disfraz 3, o hacer que la mascota diga «¡Tengo mucha hambre!» cuando el hambre pasa de 8. Evitar el hambre negativa con un «si hambre < 0: pon hambre a 0».",
      menys: "Fer només la gana i la poma, amb la cara del tros 3 com a extra. Fer servir la fitxa de disseny com a guia i marcar cada tros quan funcioni.|Hacer solo el hambre y la manzana, con la cara del trozo 3 como extra. Usar la ficha de diseño como guía y marcar cada trozo cuando funcione."
    },
    aval: {
      ticket: ["Explica com puja sola la gana de la teva mascota i què la fa baixar.|Explica cómo sube sola el hambre de tu mascota y qué la hace bajar.",
        "Quina regla decideix la cara de la teva mascota? Digues-la amb un número.|¿Qué regla decide la cara de tu mascota? Dila con un número."],
      rubric: [
        ["Pla i descomposició|Plan y descomposición", "Fa un pla complet i el construeix tros a tros, provant cada part.|Hace un plan completo y lo construye trozo a trozo, probando cada parte.", "Fa el pla, però construeix sense seguir-lo o sense provar cada part.|Hace el plan, pero construye sin seguirlo o sin probar cada parte."],
        ["Variables que canvien|Variables que cambian", "La gana puja sola amb espera i un botó la fa baixar; n'afegeix una altra.|El hambre sube sola con espera y un botón la hace bajar; añade otra.", "Fa pujar o baixar la gana, però necessita ajuda amb l'espera o amb el botó.|Hace subir o bajar el hambre, pero necesita ayuda con la espera o con el botón."],
        ["Cara segons la variable|Cara según la variable", "Fa servir «si… si no…» amb una comparació que funciona i ho explica.|Usa «si… si no…» con una comparación que funciona y lo explica.", "Posa els vestits, però la comparació no canvia mai o necessita ajuda per triar el número.|Pone los disfraces, pero la comparación no cambia nunca o necesita ayuda para elegir el número."]
      ]
    },
    casa: "A casa, ensenyeu la mascota virtual a la família (és a «Projectes») i deixeu-los que la cuidin. Pregunteu-los quina altra variable hi afegirien i apunteu la idea a la fitxa de disseny.|En casa, enseñad la mascota virtual a la familia (está en «Proyectos») y dejad que la cuiden. Preguntadles qué otra variable añadirían y apuntad la idea en la ficha de diseño.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: la mascota virtual|Proyecto: la mascota virtual", x: "Unitat 6 · Sessió 4. Una mascota feta de variables per al racó dels petits.|Unidad 6 · Sesión 4. Una mascota hecha de variables para el rincón de los pequeños.",
        nota: "Explica que avui és dia de projecte: primer el pla en paper, després els blocs, i al final la prova amb un company/a.|Explica que hoy es día de proyecto: primero el plan en papel, después los bloques, y al final la prueba con un compañero/a." },
      { id: 's2', k: 'repas', t: "Tres variables de videojoc|Tres variables de videojuego", punts: ["Punts: pugen quan aconsegueixes alguna cosa.|Puntos: suben cuando consigues algo.", "Vides: baixen a cada xoc; a 0, fi.|Vidas: bajan en cada choque; en 0, fin.", "Temps: baixa sol cada segon.|Tiempo: baja solo cada segundo."],
        nota: "Pregunta quina de les tres s'assembla més a la gana d'una mascota: puja o baixa sola amb el temps.|Pregunta cuál de las tres se parece más al hambre de una mascota: sube o baja sola con el tiempo." },
      { id: 's3', k: 'pregunta', t: "Què necessita una mascota?|¿Qué necesita una mascota?", x: "Si tinguessis una mascota de veritat, què hauries de fer per cuidar-la?|Si tuvieras una mascota de verdad, ¿qué tendrías que hacer para cuidarla?",
        nota: "Apunta les respostes: menjar, aigua, passejar, dormir… Cadascuna podria ser una variable de la mascota virtual.|Apunta las respuestas: comida, agua, pasear, dormir… Cada una podría ser una variable de la mascota virtual." },
      { id: 's4', k: 'anim', t: "Una mascota feta de variables|Una mascota hecha de variables", anim: 'g6pet', x: "La gana puja sola; la poma la fa baixar; la cara depèn del número.|El hambre sube sola; la manzana la hace bajar; la cara depende del número.",
        nota: "Identifiqueu els tres trossos de l'animació: seran els reptes d'avui.|Identificad los tres trozos de la animación: serán los retos de hoy." },
      { id: 's5', k: 'media', t: "Tros 1: la gana puja sola|Trozo 1: el hambre sube sola", x: "Per sempre: espera 1 segon, suma 1 a gana.|Por siempre: espera 1 segundo, suma 1 a hambre.",
        media: { k: 'stage', w: { bg: 'parc', sprites: PET, vars: ['gana'] }, prog: GANA, varNames: VN, time: 6 },
        nota: "Pregunta quant valdrà la gana al cap d'un minut (60). És massa? Què hi canviaríeu?|Pregunta cuánto valdrá el hambre al cabo de un minuto (60). ¿Es demasiado? ¿Qué cambiaríais?" },
      { id: 's6', k: 'media', t: "Trossos 2 i 3: la poma i la cara|Trozos 2 y 3: la manzana y la cara", x: "Si gana > 3: vestit 2; si no: vestit 1. La poma resta 3.|Si hambre > 3: disfraz 2; si no: disfraz 1. La manzana resta 3.",
        media: { k: 'stage', w: { bg: 'parc', sprites: PET, vars: ['gana'], input: [{ t: 5.5, click: 'poma' }] }, prog: `${GANA} flag{ forever{ if:$gana>3{ costume:2 } else{ costume:1 } } } @poma click{ chv:gana,-3 sound:pop }`, varNames: VN, time: 8 },
        nota: "Para la demo quan la gana val 4 i pregunta quina cara ha de fer. Després, què passa quan es toca la poma.|Para la demo cuando el hambre vale 4 y pregunta qué cara tiene que hacer. Después, qué pasa cuando se toca la manzana." },
      { id: 's7', k: 'concepte', t: "Els vestits de la mascota|Los disfraces de la mascota", punts: ["1: contenta|1: contenta", "2: té gana|2: tiene hambre", "3: dorm|3: duerme", "4: trista|4: triste"],
        nota: "Deixa aquesta diapositiva a la vista durant els reptes i el projecte: hauran de triar el número del vestit.|Deja esta diapositiva a la vista durante los retos y el proyecto: tendrán que elegir el número del disfraz." },
      { id: 's8', k: 'media', t: "Compte: una gana negativa|Cuidado: un hambre negativa", x: "Si es toca la poma moltes vegades, la gana baixa de 0.|Si se toca la manzana muchas veces, el hambre baja de 0.",
        media: { k: 'stage', w: { bg: 'parc', sprites: PET, vars: ['gana'], input: clicks('poma', [1.5, 2, 2.5, 3]) }, prog: `${GANA} @poma click{ chv:gana,-3 sound:pop }`, varNames: VN, time: 5 },
        nota: "Pregunta com ho arreglarien. Una idea: si gana < 0, posa gana a 0. És un repte extra per a qui vulgui.|Pregunta cómo lo arreglarían. Una idea: si hambre < 0, pon hambre a 0. Es un reto extra para quien quiera." },
      { id: 's9', k: 'activitat', t: "El pla de la mascota|El plan de la mascota", timer: 10, punts: ["Dibuix i nom.|Dibujo y nombre.", "Dues variables: què les fa pujar soles?|Dos variables: ¿qué las hace subir solas?", "Quin botó les fa baixar?|¿Qué botón las hace bajar?", "Quina cara posa i quan? Amb un número.|¿Qué cara pone y cuándo? Con un número."],
        nota: "Passeja i comprova que cada regla de cara tingui un número i un signe (>, < o =).|Pasea y comprueba que cada regla de cara tenga un número y un signo (>, < o =)." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre «Projecte: la mascota virtual».|Abre «Proyecto: la mascota virtual».", "Prova la mascota de la caseta.|Prueba la mascota de la caseta.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas del pla, que toquin «Ho hem fet!». Que tinguin la fitxa al costat de l'ordinador.|En el paso del plan, que toquen «¡Lo hemos hecho!». Que tengan la ficha al lado del ordenador." },
      { id: 's11', k: 'repte', t: "La mascota, tros a tros|La mascota, trozo a trozo", timer: 10, punts: ["1. La gana puja sola|1. El hambre sube sola", "2. El menjar: la poma resta 3|2. La comida: la manzana resta 3", "3. La cara: si gana > 3…|3. La cara: si hambre > 3…", "4. L'alegria amb la pilota|4. La alegría con la pelota"],
        nota: "Cada tros es prova abans de passar al següent. Si un no funciona, no avanceu: mireu el marcador.|Cada trozo se prueba antes de pasar al siguiente. Si uno no funciona, no avancéis: mirad el marcador." },
      { id: 's12', k: 'activitat', t: "Crea: la meva mascota virtual|Crea: mi mascota virtual", timer: 8, punts: ["La gana puja sola cada segon.|El hambre sube sola cada segundo.", "La poma fa baixar la gana.|La manzana hace bajar el hambre.", "Cara de gana quan gana > 5.|Cara de hambre cuando hambre > 5.", "Extra: alegria, pilota, altres vestits.|Extra: alegría, pelota, otros disfraces."],
        nota: "Recorda que el «si gana > 5… si no…» ja hi és; poden canviar el 5 si el seu pla diu un altre número.|Recuerda que el «si hambre > 5… si no…» ya está; pueden cambiar el 5 si su plan dice otro número." },
      { id: 's13', k: 'activitat', t: "Prova-la amb un company/a|Pruébala con un compañero/a", timer: 5, punts: ["Cuida la mascota del company/a durant un minut.|Cuida la mascota del compañero/a durante un minuto.", "Respon les preguntes de la targeta de prova.|Responde las preguntas de la tarjeta de prueba.", "Una cosa que t'agrada i una idea per millorar-la.|Una cosa que te gusta y una idea para mejorarla.", "L'autor/a fa un canvi i la desa.|El autor/a hace un cambio y la guarda."],
        nota: "Modela abans un comentari amable i útil: «M'agrada la cara trista; la gana puja massa de pressa, potser podries esperar 2 segons».|Modela antes un comentario amable y útil: «Me gusta la cara triste; el hambre sube demasiado deprisa, quizá podrías esperar 2 segundos»." },
      { id: 's14', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["Una variable guarda un número que canvia: punts, vides, temps, gana…|Una variable guarda un número que cambia: puntos, vidas, tiempo, hambre…", "«Posa» i «suma»; espera perquè pugi o baixi sola.|«Pon» y «suma»; espera para que suba o baje sola.", "Les comparacions (=, >, <) decideixen què passa.|Las comparaciones (=, >, <) deciden qué pasa."],
        nota: "Pregunta quina variable faran servir al seu videojoc de la unitat 8.|Pregunta qué variable usarán en su videojuego de la unidad 8." },
      { id: 's15', k: 'media', t: "La mascota de la caseta|La mascota de la caseta", x: "Gana, alegria i tres cares. Com la milloraríeu?|Hambre, alegría y tres caras. ¿Cómo la mejoraríais?",
        media: { k: 'stage', w: { bg: 'parc', sprites: PET, vars: ['gana', 'alegria'], input: [...clicks('poma', [4.5]), ...clicks('pilota', [2.2, 5])] }, prog: '@mascota flag{ setv:gana,0 forever{ wait:1 chv:gana,1 } } flag{ setv:alegria,5 forever{ wait:1.5 chv:alegria,-1 } } flag{ forever{ if:$gana>5{ costume:2 } else{ if:$alegria<3{ costume:4 } else{ costume:1 } } } } @poma click{ chv:gana,-3 sound:pop } @pilota click{ chv:alegria,2 sound:boing }', varNames: VN, time: 9 },
        nota: "Celebra els projectes: demana a dos o tres alumnes que expliquin una millora que han fet després de la prova.|Celebra los proyectos: pide a dos o tres alumnos que expliquen una mejora que han hecho después de la prueba." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Com puja sola la gana de la teva mascota?|¿Cómo sube sola el hambre de tu mascota?", "Quina regla decideix la cara? Amb un número.|¿Qué regla decide la cara? Con un número."],
        nota: "Felicita'ls per la insígnia «Cuidador/a de mascotes». Guarda les fitxes de disseny: són idees per al videojoc final.|Felicítalos por la insignia «Cuidador/a de mascotas». Guarda las fichas de diseño: son ideas para el videojuego final." }
    ],
    print: [
      { id: 'p1', t: "Fitxa de disseny: la meva mascota virtual|Ficha de diseño: mi mascota virtual", k: 'fitxa',
        intro: "Omple la fitxa abans de programar. Al costat de cada pregunta hi ha un exemple de resposta.|Rellena la ficha antes de programar. Al lado de cada pregunta hay un ejemplo de respuesta.",
        items: [
          { q: "Com es diu la teva mascota? Dibuixa-la.|¿Cómo se llama tu mascota? Dibújala.", sol: "Exemple: la Bruna, un drac verd petit.|Ejemplo: Bruna, un dragón verde pequeño." },
          { q: "Variable 1 i variable 2: com es diuen?|Variable 1 y variable 2: ¿cómo se llaman?", sol: "Exemple: gana i alegria.|Ejemplo: hambre y alegría." },
          { q: "Com puja cada variable tota sola? Cada quants segons?|¿Cómo sube cada variable ella sola? ¿Cada cuántos segundos?", sol: "Exemple: la gana puja 1 cada segon; l'alegria baixa 1 cada 2 segons.|Ejemplo: el hambre sube 1 cada segundo; la alegría baja 1 cada 2 segundos." },
          { q: "Quin botó fa canviar cada variable? Quant?|¿Qué botón hace cambiar cada variable? ¿Cuánto?", sol: "Exemple: la poma, gana -3; la pilota, alegria +2.|Ejemplo: la manzana, hambre -3; la pelota, alegría +2." },
          { q: "Quina cara posa i quan? Escriu la regla amb un número.|¿Qué cara pone y cuándo? Escribe la regla con un número.", sol: "Exemple: si gana > 5 → vestit 2 (té gana); si no → vestit 1 (contenta).|Ejemplo: si hambre > 5 → disfraz 2 (tiene hambre); si no → disfraz 1 (contenta)." }
        ] },
      { id: 'p2', t: "Targetes de prova per al company/a|Tarjetas de prueba para el compañero/a", k: 'targetes',
        intro: "Una targeta per parella. Qui prova la mascota respon les preguntes i ho explica a l'autor/a.|Una tarjeta por pareja. Quien prueba la mascota responde las preguntas y se lo explica al autor/a.",
        items: [
          { t: "🍎 Quan he tocat el menjar, la variable ha baixat? Quant?|🍎 Cuando he tocado la comida, ¿la variable ha bajado? ¿Cuánto?", n: 1 },
          { t: "😋 He vist la cara de gana? Quan ha sortit?|😋 ¿He visto la cara de hambre? ¿Cuándo ha salido?", n: 1 },
          { t: "⏱️ La gana puja massa de pressa, massa a poc a poc o bé?|⏱️ ¿El hambre sube demasiado deprisa, demasiado despacio o bien?", n: 1 },
          { t: "💚 Una cosa que m'agrada de la teva mascota…|💚 Una cosa que me gusta de tu mascota…", n: 1 },
          { t: "💡 Una idea per millorar-la…|💡 Una idea para mejorarla…", n: 1 }
        ] }
    ]
  }
  };
})());

/* ── unitat 7 ── */
/* Tech Creadors · unitat 7 «Atzar i dificultat» · guia del professorat (60 minuts per sessió)
   Material propi de Numi. Mateix esquema que TGUIDE['r1-1']: obj, comp, vocab, mat, plan (60 min), errors, diff, aval,
   casa, slides (amb demos de l'escenari: media { k: 'stage' }) i print. */
Object.assign(TGUIDE, (() => {
  const MET = (x = 0, y = 170) => ({ id: 'meteorit', art: 'meteorit', x, y, rot: 'none' });
  const NAU = (x = 0, y = -140) => ({ id: 'nau', art: 'nau', x, y, rot: 'none' });
  const EST = (x = 0, y = 0, more = {}) => ({ id: 'estrella', art: 'estrella', x, y, ...more });
  const VN = { numero: 'número|número', punts: 'punts|puntos', vides: 'vides|vidas', velocitat: 'velocitat|velocidad', caiguts: 'caiguts|caídos' };
  const FALL = n => `gotorand sety:170 until:y<-160{ move:${n} }`;
  const RAIN = (w, v) => `@meteorit flag{ hide point:180 forever{ clone wait:${w} } } clone{ gotorand sety:170 show until:y<-160{ move:${v} } delclone }`;
  const GAME = `@nau flag{ goto:0,-140 setv:vides,3 point:90 forever{ move:5 bounce if:$vides<1{ say:"Fi!|¡Fin!" stop:all } } } @meteorit flag{ hide setv:punts,0 setv:velocitat,4 point:180 forever{ clone wait:0.6 if:$velocitat<12{ chv:velocitat,1 } } } clone{ gotorand sety:170 show until:y<-160{ move:$velocitat if:touch:nau{ chv:vides,-1 sound:xoc delclone } } chv:punts,1 delclone }`;
  const GW = { bg: 'espai', sprites: [NAU(), MET()], vars: ['punts', 'vides', 'velocitat'] };

  /* ---------- Sessió 1 · Nombres a l'atzar ---------- */
  const G1 = {
    obj: [
      "L'alumne/a explica amb les seves paraules què vol dir que una cosa passi a l'atzar i en dona exemples de la vida diària.|El alumno/a explica con sus palabras qué quiere decir que algo pase al azar y da ejemplos de la vida diaria.",
      "L'alumne/a fa servir el valor «atzar 1-10» per guardar un número en una variable i decidir amb un «si… si no».|El alumno/a usa el valor «azar 1-10» para guardar un número en una variable y decidir con un «si… si no».",
      "L'alumne/a fa servir «ves a un lloc a l'atzar» i «posa y a 170» perquè un personatge surti per dalt en una x a l'atzar.|El alumno/a usa «ve a un sitio al azar» y «pon y a 170» para que un personaje salga por arriba en una x al azar.",
      "L'alumne/a sap que, si vol un valor nou a cada volta, el bloc amb l'atzar ha d'anar dins del bucle.|El alumno/a sabe que, si quiere un valor nuevo en cada vuelta, el bloque con el azar tiene que ir dentro del bucle."
    ],
    comp: [
      "Competència digital (CD5): crear animacions interactives amb programació per blocs|Competencia digital (CD5): crear animaciones interactivas con programación por bloques",
      "Pensament computacional: aleatorietat, variables i condicions|Pensamiento computacional: aleatoriedad, variables y condiciones",
      "Matemàtiques (estadística i probabilitat): experiments d'atzar, freqüències i coordenades|Matemáticas (estadística y probabilidad): experimentos de azar, frecuencias y coordenadas",
      "Treball en equip: repartir papers i registrar resultats|Trabajo en equipo: repartir papeles y registrar resultados"
    ],
    vocab: [
      ["Atzar|Azar", "Quan no es pot saber abans què passarà, com quan tires un dau.|Cuando no se puede saber antes qué pasará, como cuando tiras un dado."],
      ["Número a l'atzar|Número al azar", "Un número que tria l'ordinador sense que sapiguem quin serà (aquí, de l'1 al 10).|Un número que elige el ordenador sin que sepamos cuál será (aquí, del 1 al 10)."],
      ["Lloc a l'atzar|Sitio al azar", "Una x i una y que tria l'ordinador dins de l'escenari.|Una x y una y que elige el ordenador dentro del escenario."],
      ["Probabilitat|Probabilidad", "Com de fàcil és que passi una cosa: cara i creu tenen la mateixa.|Lo fácil que es que pase algo: cara y cruz tienen la misma."],
      ["Freqüència|Frecuencia", "Quantes vegades ha sortit un resultat quan ho has provat moltes vegades.|Cuántas veces ha salido un resultado cuando lo has probado muchas veces."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Nombres a l'atzar»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Números al azar»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un dau per grup de 3 o 4 (o papers numerats de l'1 al 6 dins una bossa)|Un dado por grupo de 3 o 4 (o papeles numerados del 1 al 6 dentro de una bolsa)",
        "Una fitxa o un botó per grup, que farà de nau|Una ficha o un botón por grupo, que hará de nave"
      ],
      imprimir: ["La pluja de meteorits amb daus (una graella per grup)|La lluvia de meteoritos con dados (una cuadrícula por grupo)", "Fitxa: l'atzar a l'escenari (una per alumne/a)|Ficha: el azar en el escenario (una por alumno/a)"],
      prep: [
        "Imprimir una graella per grup i una fitxa per alumne/a (la fitxa serveix per als qui acabin abans o per a casa).|Imprimir una cuadrícula por grupo y una ficha por alumno/a (la ficha sirve para quienes acaben antes o para casa).",
        "Preparar a la pissarra una taula gran amb sis columnes (1 a 6) per sumar els resultats de tots els grups.|Preparar en la pizarra una tabla grande con seis columnas (1 a 6) para sumar los resultados de todos los grupos.",
        "Provar abans les demos de les diapositives 7 i 8 (l'estrella i el meteorit) per saber com es veuen.|Probar antes las demos de las diapositivas 7 y 8 (la estrella y el meteorito) para saber cómo se ven.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: la Nit de les Estrelles|Bienvenida: la Noche de las Estrellas", fase: 'inici',
        fa: "Presenta la nova unitat: l'observatori de l'illa ens demana un videojoc per a la Nit de les Estrelles. Pregunta què passaria si els meteorits caiguessin sempre pel mateix lloc i recull respostes. Fes un repàs ràpid de variables i coordenades amb la diapositiva 3.|Presenta la nueva unidad: el observatorio de la isla nos pide un videojuego para la Noche de las Estrellas. Pregunta qué pasaría si los meteoritos cayeran siempre por el mismo sitio y recoge respuestas. Haz un repaso rápido de variables y coordenadas con la diapositiva 3.",
        diu: ["Si un videojoc fa sempre exactament el mateix, què passa a la tercera partida?|Si un videojuego hace siempre exactamente lo mismo, ¿qué pasa en la tercera partida?",
          "Qui recorda on és x = 200 a l'escenari?|¿Quién recuerda dónde está x = 200 en el escenario?",
          "Avui aprendrem a fer que l'ordinador ens sorprengui.|Hoy aprenderemos a hacer que el ordenador nos sorprenda."],
        slides: ['s1', 's2', 's3', 's4'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és l'atzar? Dos blocs nous|¿Qué es el azar? Dos bloques nuevos", fase: 'teoria',
        fa: "Tira un dau davant la classe i demana que endevinin el número abans: ningú no pot saber-ho. Explica el valor «atzar 1-10» amb l'animació i després «ves a un lloc a l'atzar» amb la demo de l'estrella. Amb la demo del meteorit, fes notar l'ordre: primer el lloc a l'atzar i després «posa y a 170». Acaba amb el «compte!»: l'atzar dins del bucle.|Tira un dado delante de la clase y pide que adivinen el número antes: nadie puede saberlo. Explica el valor «azar 1-10» con la animación y después «ve a un sitio al azar» con la demo de la estrella. Con la demo del meteorito, haz notar el orden: primero el sitio al azar y después «pon y a 170». Acaba con el «¡cuidado!»: el azar dentro del bucle.",
        diu: ["Qui sap quin número sortirà? Ningú! Això és l'atzar.|¿Quién sabe qué número saldrá? ¡Nadie! Eso es el azar.",
          "On sortirà l'estrella la propera vegada? Assenyaleu-ho… i mirem qui l'encerta.|¿Dónde saldrá la estrella la próxima vez? Señaladlo… y miremos quién lo acierta.",
          "Si «ves a un lloc a l'atzar» anés després de «posa y a 170», on podria sortir el meteorit?|Si «ve a un sitio al azar» fuera después de «pon y a 170», ¿dónde podría salir el meteorito?"],
        slides: ['s5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La pluja de meteorits amb daus|La lluvia de meteoritos con dados", fase: 'desconnectat',
        fa: "Grups de 3 o 4 amb un dau, una fitxa (la nau) i la graella. Papers: el llançador/a fa d'ordinador i tira el dau (el número és la columna on cau el meteorit), el pilot/a posa la nau en una columna abans de cada tirada i l'anotador/a marca una creu a la fila de la ronda. Si el meteorit cau a la columna de la nau, el pilot perd una vida. Després de 8 rondes, roten els papers. Al final, sumeu a la pissarra quantes vegades ha caigut a cada columna entre tots els grups.|Grupos de 3 o 4 con un dado, una ficha (la nave) y la cuadrícula. Papeles: el lanzador/a hace de ordenador y tira el dado (el número es la columna donde cae el meteorito), el piloto/a pone la nave en una columna antes de cada tirada y el anotador/a marca una cruz en la fila de la ronda. Si el meteorito cae en la columna de la nave, el piloto pierde una vida. Después de 8 rondas, rotan los papeles. Al final, sumad en la pizarra cuántas veces ha caído en cada columna entre todos los grupos.",
        diu: ["El pilot/a pot saber on caurà el proper meteorit? Per què?|¿El piloto/a puede saber dónde caerá el próximo meteorito? ¿Por qué?",
          "Ha caigut alguna vegada dues vegades seguides a la mateixa columna? Pot passar!|¿Ha caído alguna vez dos veces seguidas en la misma columna? ¡Puede pasar!",
          "Si sumem tots els grups, totes les columnes en tenen uns quants: cap columna no és més «afortunada».|Si sumamos todos los grupos, todas las columnas tienen unos cuantos: ninguna columna es más «afortunada»."],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4 amb papers que roten|Grupos de 3 o 4 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «El dau dels moviments», que toquin «Ara no» si no hi ha dau a l'aula: el faran a casa. A la cursa de naus, demana que expliquin amb paraules per què la nau de baix va a batzegades.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «El dado de los movimientos», que toquen «Ahora no» si no hay dado en el aula: lo harán en casa. En la carrera de naves, pide que expliquen con palabras por qué la nave de abajo va a trompicones.",
        diu: ["L'estrella torna mai al mateix lloc? Com ho sabries?|¿La estrella vuelve alguna vez al mismo sitio? ¿Cómo lo sabrías?",
          "Quin bloc fa que la nau de baix canviï de velocitat a cada pas?|¿Qué bloque hace que la nave de abajo cambie de velocidad a cada paso?",
          "Pot sortir un 12 amb «atzar 1-10»? I un 10?|¿Puede salir un 12 con «azar 1-10»? ¿Y un 10?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les dues preguntes de repàs, la missió, les cinc targetes de «Descobreix», la pregunta del dau, «El dau dels moviments», l'estrella que salta, la cursa de naus i la pregunta del número 12.|De «Recuerda» hasta «Investiga»: las dos preguntas de repaso, la misión, las cinco tarjetas de «Descubre», la pregunta del dado, «El dado de los movimientos», la estrella que salta, la carrera de naves y la pregunta del número 12.", org: "Individual|Individual" },
      { min: 10, t: "Pausa activa i reptes|Pausa activa y retos", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després, els quatre reptes: l'estrella que salta per les quatre parts del cel, el número de la sort d'en Numi, cara o creu i el meteorit que ha de caure per llocs diferents. Als reptes amb tocs, recorda que «Comença» és per provar lliurement i «Comprova» fa els tocs sols.|Haced la pausa activa todos juntos. Después, los cuatro retos: la estrella que salta por las cuatro partes del cielo, el número de la suerte de Numi, cara o cruz y el meteorito que tiene que caer por sitios diferentes. En los retos con toques, recuerda que «Empieza» es para probar libremente y «Comprueba» hace los toques solos.",
        diu: ["Al cara o creu, quins números fan dir «Cara!»? Compta'ls: n'hi ha tants com de «Creu!»?|En el cara o cruz, ¿qué números hacen decir «¡Cara!»? Cuéntalos: ¿hay tantos como de «¡Cruz!»?",
          "El meteorit cau sempre pel mig. Quin bloc li falta, i on va?|El meteorito cae siempre por el centro. ¿Qué bloque le falta, y dónde va?",
          "Si ajudes un company/a, fes-li preguntes: no li toquis el ratolí.|Si ayudas a un compañero/a, hazle preguntas: no le toques el ratón."],
        slides: ['s13'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Individual|Individual" },
      { min: 5, t: "Crea: la meva nit d'estrelles|Crea: mi noche de estrellas", fase: 'crea',
        fa: "Cada alumne/a crea la seva nit: almenys un personatge amb l'atzar dins d'un bucle. Quan la tinguin, la desen al portafoli i l'ensenyen al company/a del costat, que ha d'endevinar quin personatge fa servir l'atzar.|Cada alumno/a crea su noche: al menos un personaje con el azar dentro de un bucle. Cuando la tengan, la guardan en el portafolio y la enseñan al compañero/a de al lado, que tiene que adivinar qué personaje usa el azar.",
        diu: ["Quin dels teus personatges és el sorprenent? Per què?|¿Cuál de tus personajes es el sorprendente? ¿Por qué?",
          "Hi pots afegir un número a l'atzar, a més d'un lloc?|¿Puedes añadir un número al azar, además de un sitio?"],
        slides: ['s14'], app: "Pas «Crea»: La meva nit d'estrelles (es desa als projectes).|Paso «Crea»: Mi noche de estrellas (se guarda en los proyectos).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals i com s'han sentit, i fes a cada alumne/a una pregunta del tiquet a la porta.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales y cómo se han sentido, y haz a cada alumno/a una pregunta del ticket en la puerta.",
        diu: ["Digues una cosa de la vida que passi a l'atzar.|Di una cosa de la vida que pase al azar.",
          "On ha d'anar el bloc amb l'atzar perquè canviï a cada volta?|¿Dónde tiene que ir el bloque con el azar para que cambie en cada vuelta?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa «posa y a 170» abans de «ves a un lloc a l'atzar» i el meteorit surt pel mig de l'escenari.|Pone «pon y a 170» antes de «ve a un sitio al azar» y el meteorito sale por el centro del escenario.",
        "Pregunta-li què canvia «ves a un lloc a l'atzar»: només la x, o també la y? Que provi els dos ordres i compari on surt.|Pregúntale qué cambia «ve a un sitio al azar»: ¿solo la x, o también la y? Que pruebe los dos órdenes y compare dónde sale."],
      ["Tria el número a l'atzar una sola vegada, abans del bucle, i s'estranya que no canviï.|Elige el número al azar una sola vez, antes del bucle, y se extraña de que no cambie.",
        "Que segueixi el programa amb el dit: quantes vegades passa pel bloc de l'atzar? Torna a mirar l'animació del «compte!».|Que siga el programa con el dedo: ¿cuántas veces pasa por el bloque del azar? Vuelve a mirar la animación del «¡cuidado!»."],
      ["Al «digues», escriu la paraula «número» en lloc de triar la variable, i en Numi diu «número».|En el «di», escribe la palabra «número» en lugar de elegir la variable, y Numi dice «número».",
        "Fes-li notar que al tocar el text del «digues» hi ha un botó amb la variable: el text entre cometes es diu tal qual; la variable diu el que guarda.|Hazle notar que al tocar el texto del «di» hay un botón con la variable: el texto entre comillas se dice tal cual; la variable dice lo que guarda."],
      ["Al cara o creu, posa dos «si» separats i de vegades diu les dues coses o cap.|En el cara o cruz, pone dos «si» separados y a veces dice las dos cosas o ninguna.",
        "Pregunta: hi ha algun número que no sigui ni més gran que 5 ni el contrari? Ensenya-li el botó «Afegeix «si no»» del bloc «si».|Pregunta: ¿hay algún número que no sea ni mayor que 5 ni lo contrario? Enséñale el botón «Añade «si no»» del bloque «si»."],
      ["Creu que l'atzar «s'equivoca» quan surt el mateix número dues vegades seguides.|Cree que el azar «se equivoca» cuando sale el mismo número dos veces seguidas.",
        "Recorda la pluja de daus: també hi va haver repeticions. Amb l'atzar, repetir és normal; el que no es pot és endevinar-ho.|Recuerda la lluvia de dados: también hubo repeticiones. Con el azar, repetir es normal; lo que no se puede es adivinarlo."]
    ],
    diff: {
      mes: "Afegir a la nit d'estrelles un personatge que, en tocar-lo, posi un número a l'atzar i, si és més gran que 7, canviï el fons. Després, comptar en 20 tocs quantes vegades ha canviat i comparar-ho amb el company/a.|Añadir a la noche de estrellas un personaje que, al tocarlo, ponga un número al azar y, si es mayor que 7, cambie el fondo. Después, contar en 20 toques cuántas veces ha cambiado y compararlo con el compañero/a.",
      menys: "Fer primer els reptes amb el professor/a al costat dient en veu alta cada bloc. A l'activitat de daus, fer de llançador/a (només tirar i dir el número). Al meteorit, donar-li la pista de l'ordre: «primer el lloc, després la y».|Hacer primero los retos con el profesor/a al lado diciendo en voz alta cada bloque. En la actividad de dados, hacer de lanzador/a (solo tirar y decir el número). En el meteorito, darle la pista del orden: «primero el sitio, después la y»."
    },
    aval: {
      ticket: ["Digues una cosa de la vida que passi a l'atzar i una que no.|Di una cosa de la vida que pase al azar y una que no.",
        "Quins dos blocs fan que el meteorit surti per dalt, cada vegada en un lloc diferent?|¿Qué dos bloques hacen que el meteorito salga por arriba, cada vez en un sitio diferente?"],
      rubric: [
        ["Concepte d'atzar|Concepto de azar", "Explica que no es pot saber abans i dona exemples propis (dau, moneda…).|Explica que no se puede saber antes y da ejemplos propios (dado, moneda…).", "Reconeix l'atzar en un exemple, però encara no l'explica.|Reconoce el azar en un ejemplo, pero todavía no lo explica."],
        ["Número a l'atzar|Número al azar", "Guarda «atzar 1-10» en una variable, la diu i la fa servir en un «si… si no».|Guarda «azar 1-10» en una variable, la dice y la usa en un «si… si no».", "Posa l'atzar en un bloc, però no el guarda ni el fa servir per decidir.|Pone el azar en un bloque, pero no lo guarda ni lo usa para decidir."],
        ["Lloc a l'atzar|Sitio al azar", "Fa sortir el meteorit per dalt en una x a l'atzar, amb els blocs en l'ordre bo i dins el bucle.|Hace salir el meteorito por arriba en una x al azar, con los bloques en el orden correcto y dentro del bucle.", "Fa servir «ves a un lloc a l'atzar», però s'equivoca d'ordre o el posa fora del bucle.|Usa «ve a un sitio al azar», pero se equivoca de orden o lo pone fuera del bucle."]
      ]
    },
    casa: "A casa, amb un dau i algú de la família, feu «El dau dels moviments»: cada número és un moviment del cos. Abans de tirar, intenteu endevinar el número i apunteu quantes vegades l'encerteu.|En casa, con un dado y alguien de la familia, haced «El dado de los movimientos»: cada número es un movimiento del cuerpo. Antes de tirar, intentad adivinar el número y apuntad cuántas veces lo acertáis.",
    slides: [
      { id: 's1', k: 'portada', t: "Nombres a l'atzar|Números al azar", x: "Unitat 7 · Atzar i dificultat. Avui farem que l'ordinador ens sorprengui.|Unidad 7 · Azar y dificultad. Hoy haremos que el ordenador nos sorprenda.",
        nota: "Presenta l'objectiu: al final, cada alumne/a tindrà un cel on les coses no passen sempre igual.|Presenta el objetivo: al final, cada alumno/a tendrá un cielo donde las cosas no pasan siempre igual." },
      { id: 's2', k: 'pregunta', t: "I si passés sempre el mateix?|¿Y si pasara siempre lo mismo?", x: "Si els meteorits d'un videojoc cauen sempre pel mateix lloc, què passa a la tercera partida?|Si los meteoritos de un videojuego caen siempre por el mismo sitio, ¿qué pasa en la tercera partida?",
        nota: "Recull respostes: ja te l'aprens, és avorrit, és massa fàcil… Torna-hi al final de la teoria.|Recoge respuestas: ya te lo aprendes, es aburrido, es demasiado fácil… Vuelve a ello al final de la teoría." },
      { id: 's3', k: 'repas', t: "Recordem|Recordemos", punts: ["Les variables guarden números: punts, vides…|Las variables guardan números: puntos, vidas…", "«Suma a punts 1» afegeix; «posa punts a 0» canvia.|«Suma a puntos 1» añade; «pon puntos a 0» cambia.", "L'escenari: x de -240 a 240, y de -180 a 180.|El escenario: x de -240 a 240, y de -180 a 180."],
        nota: "Dues preguntes ràpides a mà alçada; avui farem servir variables i coordenades.|Dos preguntas rápidas a mano alzada; hoy usaremos variables y coordenadas." },
      { id: 's4', k: 'concepte', t: "La Nit de les Estrelles|La Noche de las Estrellas", punts: ["L'observatori de l'illa fa una festa per mirar el cel.|El observatorio de la isla hace una fiesta para mirar el cielo.", "Ens demanen un videojoc: esquivar meteorits amb una nau.|Nos piden un videojuego: esquivar meteoritos con una nave.", "Aquesta unitat el construirem peça a peça.|En esta unidad lo construiremos pieza a pieza."],
        nota: "Explica que en quatre sessions faran el videojoc «Esquiva els meteorits»: avui, la peça de l'atzar.|Explica que en cuatro sesiones harán el videojuego «Esquiva los meteoritos»: hoy, la pieza del azar." },
      { id: 's5', k: 'anim', t: "Què és l'atzar?|¿Qué es el azar?", anim: 'g7dau', x: "Una cosa és a l'atzar quan ningú no pot saber abans com acabarà.|Algo es al azar cuando nadie puede saber antes cómo acabará.",
        nota: "Tira un dau de veritat i fes que endevinin el número abans. Demana més exemples: el sorteig d'un equip, una carta…|Tira un dado de verdad y haz que adivinen el número antes. Pide más ejemplos: el sorteo de un equipo, una carta…" },
      { id: 's6', k: 'anim', t: "El valor «atzar 1-10»|El valor «azar 1-10»", anim: 'g7num', x: "Cada vegada que el programa arriba al bloc, tria un número nou de l'1 al 10.|Cada vez que el programa llega al bloque, elige un número nuevo del 1 al 10.",
        nota: "Remarca que l'1 i el 10 també poden sortir, i que el número es pot guardar en una variable.|Remarca que el 1 y el 10 también pueden salir, y que el número se puede guardar en una variable." },
      { id: 's7', k: 'media', t: "Ves a un lloc a l'atzar|Ve a un sitio al azar", x: "L'estrella salta a una x i una y que no sabem.|La estrella salta a una x y una y que no sabemos.",
        media: { k: 'stage', w: { bg: 'nit', sprites: [EST(0, 0)] }, prog: '@estrella flag{ forever{ gotorand wait:0.8 } }', time: 8 },
        nota: "Abans de cada salt, que tothom assenyali on creu que anirà. Qui l'encerta? Gairebé ningú: és atzar.|Antes de cada salto, que todos señalen dónde creen que irá. ¿Quién lo acierta? Casi nadie: es azar." },
      { id: 's8', k: 'media', t: "Per dalt, però a l'atzar|Por arriba, pero al azar", x: "Primer «ves a un lloc a l'atzar», després «posa y a 170» i avall!|Primero «ve a un sitio al azar», después «pon y a 170» ¡y abajo!",
        media: { k: 'stage', w: { bg: 'espai', sprites: [MET()] }, prog: `@meteorit flag{ point:180 forever{ ${FALL(8)} } }`, time: 9 },
        nota: "Pregunta què passaria si canviéssim l'ordre dels dos blocs. Resposta: la y també quedaria a l'atzar.|Pregunta qué pasaría si cambiáramos el orden de los dos bloques. Respuesta: la y también quedaría al azar." },
      { id: 's9', k: 'anim', t: "Compte: dins del bucle!|Cuidado: ¡dentro del bucle!", anim: 'g7once', x: "Si tries el número abans del bucle, ja no canvia. Si el vols nou cada vegada, va dins.|Si eliges el número antes del bucle, ya no cambia. Si lo quieres nuevo cada vez, va dentro.",
        nota: "Compara-ho amb tirar el dau una sola vegada al principi del dia i fer-lo servir tot el dia.|Compáralo con tirar el dado una sola vez al principio del día y usarlo todo el día." },
      { id: 's10', k: 'activitat', t: "La pluja de meteorits amb daus|La lluvia de meteoritos con dados", timer: 12, punts: ["Llançador/a: tira el dau (és la columna on cau el meteorit).|Lanzador/a: tira el dado (es la columna donde cae el meteorito).", "Pilot/a: posa la nau en una columna ABANS de tirar.|Piloto/a: pone la nave en una columna ANTES de tirar.", "Anotador/a: fa una creu a la columna que ha sortit.|Anotador/a: hace una cruz en la columna que ha salido.", "Si cau damunt la nau: una vida menys. Cada 8 rondes, canvieu.|Si cae encima de la nave: una vida menos. Cada 8 rondas, cambiad."],
        nota: "Passeja pels grups i pregunta als pilots com trien la columna. Al final, suma a la pissarra les creus de cada columna.|Pasea por los grupos y pregunta a los pilotos cómo eligen la columna. Al final, suma en la pizarra las cruces de cada columna." },
      { id: 's11', k: 'pregunta', t: "Què hem descobert?|¿Qué hemos descubierto?", punts: ["Algú ha pogut endevinar on cauria?|¿Alguien ha podido adivinar dónde caería?", "Hi ha hagut repeticions seguides?|¿Ha habido repeticiones seguidas?", "Sumant tots els grups, quina columna en té més? Per poc?|Sumando todos los grupos, ¿qué columna tiene más? ¿Por poco?"],
        nota: "Conclusió: no es pot endevinar cada tirada, però amb moltes tirades totes les columnes en tenen. Així funcionaran els meteorits.|Conclusión: no se puede adivinar cada tirada, pero con muchas tiradas todas las columnas tienen. Así funcionarán los meteoritos." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre «Nombres a l'atzar».|Abre «Números al azar».", "Fes «Recorda», la missió i «Descobreix».|Haz «Recuerda», la misión y «Descubre».", "Mira l'estrella i la cursa de naus.|Mira la estrella y la carrera de naves.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "«El dau dels moviments» es pot deixar per a casa amb «Ara no».|«El dado de los movimientos» se puede dejar para casa con «Ahora no»." },
      { id: 's13', k: 'repte', t: "Reptes de l'atzar|Retos del azar", timer: 10, punts: ["1. L'estrella que salta per tot el cel|1. La estrella que salta por todo el cielo", "2. El número de la sort d'en Numi|2. El número de la suerte de Numi", "3. Cara o creu|3. Cara o cruz", "4. Meteorits per l'esquerra i per la dreta|4. Meteoritos por la izquierda y por la derecha"],
        nota: "Als reptes de tocar, «Comprova» fa els tocs sols. Si algú s'encalla al cara o creu, pregunta quins números són més grans que 5.|En los retos de tocar, «Comprueba» hace los toques solos. Si alguien se atasca en el cara o cruz, pregunta qué números son mayores que 5." },
      { id: 's14', k: 'activitat', t: "Crea: la meva nit d'estrelles|Crea: mi noche de estrellas", timer: 5, x: "Almenys un personatge amb l'atzar dins d'un bucle. Després, el company/a endevina quin és.|Al menos un personaje con el azar dentro de un bucle. Después, el compañero/a adivina cuál es.",
        nota: "Celebra les idees diferents: estrelles que salten, naus amb velocitat a l'atzar, frases que canvien…|Celebra las ideas diferentes: estrellas que saltan, naves con velocidad al azar, frases que cambian…" },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["L'atzar: no se sap abans què sortirà.|El azar: no se sabe antes qué saldrá.", "«Atzar 1-10» tria un número cada vegada que s'hi arriba.|«Azar 1-10» elige un número cada vez que se llega a él.", "«Ves a un lloc a l'atzar» + «posa y a 170»: per dalt, a l'atzar.|«Ve a un sitio al azar» + «pon y a 170»: por arriba, al azar."],
        nota: "Torna a la pregunta del principi: ara ja sabem com fer que no passi sempre el mateix.|Vuelve a la pregunta del principio: ahora ya sabemos cómo hacer que no pase siempre lo mismo." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Una cosa que passa a l'atzar i una que no.|Una cosa que pasa al azar y una que no.", "Quins dos blocs fan sortir el meteorit per dalt a l'atzar?|¿Qué dos bloques hacen salir el meteorito por arriba al azar?"],
        nota: "Anota qui confon l'ordre dels blocs: ho repassareu al «Recorda» de la sessió següent.|Anota quién confunde el orden de los bloques: lo repasaréis en el «Recuerda» de la sesión siguiente." }
    ],
    print: [
      { id: 'p1', t: "La pluja de meteorits amb daus|La lluvia de meteoritos con dados", k: 'graella', w: 6, h: 8,
        intro: "Una graella per grup. Cada columna és un número del dau (1 a 6, d'esquerra a dreta) i cada fila, una ronda. Abans de tirar, el pilot/a dibuixa un cercle on posa la nau (fila de la ronda). Després, l'anotador/a fa una creu a la columna que ha sortit. Si la creu cau al cercle, una vida menys!|Una cuadrícula por grupo. Cada columna es un número del dado (1 a 6, de izquierda a derecha) y cada fila, una ronda. Antes de tirar, el piloto/a dibuja un círculo donde pone la nave (fila de la ronda). Después, el anotador/a hace una cruz en la columna que ha salido. Si la cruz cae en el círculo, ¡una vida menos!",
        legend: [['1-6', 'Columna = número del dau|Columna = número del dado'], ['○', 'On el pilot/a posa la nau|Donde el piloto/a pone la nave'], ['✕', 'On cau el meteorit|Donde cae el meteorito'], ['♥', 'Vides: comenceu amb 3|Vidas: empezad con 3']],
        items: [{ q: "Quantes vegades ha caigut el meteorit a cada columna? 1: ___ 2: ___ 3: ___ 4: ___ 5: ___ 6: ___|¿Cuántas veces ha caído el meteorito en cada columna? 1: ___ 2: ___ 3: ___ 4: ___ 5: ___ 6: ___" },
          { q: "Has pogut endevinar on cauria? Per què creus que passa això?|¿Has podido adivinar dónde caería? ¿Por qué crees que pasa esto?", big: true }] },
      { id: 'p2', t: "L'atzar a l'escenari|El azar en el escenario", k: 'fitxa',
        intro: "Respon pensant en els blocs de l'escenari. Pots dibuixar els blocs com a l'app.|Responde pensando en los bloques del escenario. Puedes dibujar los bloques como en la app.",
        items: [
          { q: "Quin bloc porta un personatge a un lloc de l'escenari que no sabem?|¿Qué bloque lleva a un personaje a un sitio del escenario que no sabemos?", sol: "«Ves a un lloc a l'atzar».|«Ve a un sitio al azar»." },
          { q: "Escriu, en ordre, els dos blocs perquè un meteorit surti per dalt en un lloc a l'atzar.|Escribe, en orden, los dos bloques para que un meteorito salga por arriba en un sitio al azar.", sol: "1. Ves a un lloc a l'atzar. 2. Posa y a 170.|1. Ve a un sitio al azar. 2. Pon y a 170." },
          { q: "Amb «atzar 1-10», pot sortir el 0? I l'11? I el 10?|Con «azar 1-10», ¿puede salir el 0? ¿Y el 11? ¿Y el 10?", sol: "El 0 i l'11, no. El 10, sí: surten de l'1 al 10.|El 0 y el 11, no. El 10, sí: salen del 1 al 10." },
          { q: "Cara o creu: si tirada > 5 la moneda diu «Cara!». Quins números fan dir «Cara!»? Quants en fan dir «Creu!»?|Cara o cruz: si tirada > 5 la moneda dice «¡Cara!». ¿Qué números hacen decir «¡Cara!»? ¿Cuántos hacen decir «¡Cruz!»?", sol: "6, 7, 8, 9 i 10 diuen «Cara!». També 5 números (1 a 5) diuen «Creu!».|6, 7, 8, 9 y 10 dicen «¡Cara!». También 5 números (1 a 5) dicen «¡Cruz!»." }
        ] }
    ]
  };

  /* ---------- Sessió 2 · Clons ---------- */
  const G2 = {
    obj: [
      "L'alumne/a explica què és un clon i per què és útil quan calen molts personatges iguals.|El alumno/a explica qué es un clon y por qué es útil cuando hacen falta muchos personajes iguales.",
      "L'alumne/a fa clons amb «crea un clon de mi» dins d'un bucle i programa el guió «quan començo com a clon».|El alumno/a hace clones con «crea un clon de mí» dentro de un bucle y programa el guion «al empezar como clon».",
      "L'alumne/a construeix una fàbrica de clons: l'original amagat, cada clon al seu lloc a l'atzar i «mostra't».|El alumno/a construye una fábrica de clones: el original escondido, cada clon en su sitio al azar y «muéstrate».",
      "L'alumne/a esborra els clons que ja han fet la feina perquè l'escenari no s'ompli.|El alumno/a borra los clones que ya han hecho su trabajo para que el escenario no se llene."
    ],
    comp: [
      "Competència digital (CD5): crear animacions amb molts elements a partir d'un sol personatge programat|Competencia digital (CD5): crear animaciones con muchos elementos a partir de un solo personaje programado",
      "Pensament computacional: abstracció (un model, moltes còpies) i instruccions que segueix cada còpia|Pensamiento computacional: abstracción (un modelo, muchas copias) e instrucciones que sigue cada copia",
      "Matemàtiques: comptar i estimar quantitats, coordenades|Matemáticas: contar y estimar cantidades, coordenadas",
      "Comunicació oral: seguir i donar instruccions precises en grup|Comunicación oral: seguir y dar instrucciones precisas en grupo"
    ],
    vocab: [
      ["Clon|Clon", "Una còpia d'un personatge que el mateix personatge crea mentre funciona el programa.|Una copia de un personaje que el mismo personaje crea mientras funciona el programa."],
      ["Original|Original", "El personatge que fa els clons. Pot estar amagat i fer de fàbrica.|El personaje que hace los clones. Puede estar escondido y hacer de fábrica."],
      ["Guió del clon|Guion del clon", "«Quan començo com a clon»: el que fa cada clon quan neix.|«Al empezar como clon»: lo que hace cada clon cuando nace."],
      ["Esborrar un clon|Borrar un clon", "Treure de l'escenari un clon que ja no serveix.|Quitar del escenario un clon que ya no sirve."],
      ["Fàbrica|Fábrica", "Un personatge amagat que només fa clons, un darrere l'altre.|Un personaje escondido que solo hace clones, uno detrás de otro."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Clons»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Clones»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un dau per a la fàbrica i sis papers grans numerats de l'1 al 6 enganxats al llarg d'una paret (els llocs del dau)|Un dado para la fábrica y seis papeles grandes numerados del 1 al 6 pegados a lo largo de una pared (los sitios del dado)",
        "Espai lliure davant de la pissarra, que farà de «terra» de l'escenari|Espacio libre delante de la pizarra, que hará de «suelo» del escenario"
      ],
      imprimir: ["Targetes del guió del clon (un paquet per a cada «clon» i una de fàbrica)|Tarjetas del guion del clon (un paquete para cada «clon» y una de fábrica)", "Fitxa: clons sobre paper (una per alumne/a)|Ficha: clones sobre papel (una por alumno/a)"],
      prep: [
        "Imprimir i retallar les targetes. Si es plastifiquen, serveixen per a altres anys.|Imprimir y recortar las tarjetas. Si se plastifican, sirven para otros años.",
        "Enganxar els sis papers numerats a la paret del fons, a l'alçada dels ulls.|Pegar los seis papeles numerados en la pared del fondo, a la altura de los ojos.",
        "Marcar amb cinta un rectangle petit davant la pissarra (hi caben 4 persones dretes): és l'escenari ple.|Marcar con cinta un rectángulo pequeño delante de la pizarra (caben 4 personas de pie): es el escenario lleno.",
        "Provar la demo de la pluja de meteorits (diapositiva 7) i la del «compte!» (diapositiva 9).|Probar la demo de la lluvia de meteoritos (diapositiva 7) y la del «¡cuidado!» (diapositiva 9)."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: una pluja de molts meteorits|Bienvenida: una lluvia de muchos meteoritos", fase: 'inici',
        fa: "Recorda el meteorit de la sessió anterior i explica el nou encàrrec: una pluja amb molts meteorits. Pregunta com ho farien i deixa que proposin copiar el personatge vint vegades. Fes el repàs del «Recorda» amb la diapositiva 3.|Recuerda el meteorito de la sesión anterior y explica el nuevo encargo: una lluvia con muchos meteoritos. Pregunta cómo lo harían y deja que propongan copiar el personaje veinte veces. Haz el repaso del «Recuerda» con la diapositiva 3.",
        diu: ["Si volem vint meteorits, cal programar-ne vint? Quanta feina!|Si queremos veinte meteoritos, ¿hay que programar veinte? ¡Cuánto trabajo!",
          "I si volguéssim canviar la velocitat de tots? Hauríem de canviar vint programes…|¿Y si quisiéramos cambiar la velocidad de todos? Tendríamos que cambiar veinte programas…",
          "Avui aprendrem un truc: un sol personatge que en fa molts.|Hoy aprenderemos un truco: un solo personaje que hace muchos."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és un clon?|¿Qué es un clon?", fase: 'teoria',
        fa: "Explica el clon amb un segell o amb una plantilla: el mateix dibuix, moltes vegades. Ensenya el guió «quan començo com a clon» amb la demo de les estrelles i la fàbrica amb la pluja de meteorits. Atura't al «compte!»: els clons neixen a sota de l'original i, si l'original està amagat, també neixen amagats. Acaba amb «esborra aquest clon».|Explica el clon con un sello o con una plantilla: el mismo dibujo, muchas veces. Enseña el guion «al empezar como clon» con la demo de las estrellas y la fábrica con la lluvia de meteoritos. Párate en el «¡cuidado!»: los clones nacen debajo del original y, si el original está escondido, también nacen escondidos. Acaba con «borra este clon».",
        diu: ["Quants personatges hi ha programats en aquesta pluja? Mireu els guions: només un!|¿Cuántos personajes hay programados en esta lluvia? Mirad los guiones: ¡solo uno!",
          "Per què la fàbrica s'amaga? I per què el clon fa «mostra't»?|¿Por qué la fábrica se esconde? ¿Y por qué el clon hace «muéstrate»?",
          "Què passaria si mai no esborréssim cap clon?|¿Qué pasaría si nunca borráramos ningún clon?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La fàbrica de clons humana|La fábrica de clones humana", fase: 'desconnectat',
        fa: "Tu fas de fàbrica (amagat/ada darrere la taula). Cada pocs segons dius «clon!» i dones una targeta de guió a un alumne/a: aquest clon tira el dau, va al paper del número, s'aixeca (es mostra), camina a poc a poc fins a la pissarra (baixa) i torna a seure (s'esborra). Primera ronda: sense «m'esborro»: els clons s'amunteguen al rectangle de cinta fins que no hi cap ningú més i la fàbrica ha de parar. Segona ronda: amb «m'esborro»: la pluja no s'acaba mai. Si tens temps, fes una ronda en què et «mostres» tu (la fàbrica visible) i comenteu-ho.|Tú haces de fábrica (escondido/a detrás de la mesa). Cada pocos segundos dices «¡clon!» y das una tarjeta de guion a un alumno/a: este clon tira el dado, va al papel del número, se levanta (se muestra), camina despacio hasta la pizarra (baja) y vuelve a sentarse (se borra). Primera ronda: sin «me borro»: los clones se amontonan en el rectángulo de cinta hasta que no cabe nadie más y la fábrica tiene que parar. Segunda ronda: con «me borro»: la lluvia no se acaba nunca. Si tienes tiempo, haz una ronda en la que te «muestras» tú (la fábrica visible) y comentadlo.",
        diu: ["Tots els clons tenen la mateixa targeta. Fan tots exactament el mateix?|Todos los clones tienen la misma tarjeta. ¿Hacen todos exactamente lo mismo?",
          "El dau fa que cada clon vagi a un lloc diferent: això és l'atzar que vam veure!|El dado hace que cada clon vaya a un sitio diferente: ¡eso es el azar que vimos!",
          "Per què s'ha aturat la pluja a la primera ronda?|¿Por qué se ha parado la lluvia en la primera ronda?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Tot el grup (la fàbrica és el professor/a)|Todo el grupo (la fábrica es el profesor/a)" },
      { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a fa des del «Recorda» fins a la pausa activa. A «Clons de paper», que toquin «Ho hem fet!» si ho han fet a classe; si no, el poden deixar per a casa. A l'ordenació del guió del clon, demana que expliquin per què «mostra't» va després de «posa y a 170».|Cada alumno/a hace desde el «Recuerda» hasta la pausa activa. En «Clones de papel», que toquen «¡Lo hemos hecho!» si lo han hecho en clase; si no, lo pueden dejar para casa. En la ordenación del guion del clon, pide que expliquen por qué «muéstrate» va después de «pon y a 170».",
        diu: ["Si el clon es mostrés abans de posar-se a dalt, què veuríem?|Si el clon se mostrara antes de ponerse arriba, ¿qué veríamos?",
          "Quin bloc fa néixer les estrelles noves? I quin les fa desaparèixer?|¿Qué bloque hace nacer las estrellas nuevas? ¿Y cuál las hace desaparecer?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, la missió, les cinc targetes de «Descobreix», ordenar el guió del clon, «Clons de paper», la pluja de meteorits, el bloc que fa néixer estrelles i la pregunta del «mostra't».|De «Recuerda» hasta «Investiga»: las preguntas de repaso, la misión, las cinco tarjetas de «Descubre», ordenar el guion del clon, «Clones de papel», la lluvia de meteoritos, el bloque que hace nacer estrellas y la pregunta del «muéstrate».", org: "Individual|Individual" },
      { min: 12, t: "Pausa activa i reptes de clons|Pausa activa y retos de clones", fase: 'ordinador',
        fa: "Pausa activa tots junts. Després, els quatre reptes: 8 clons d'estrella, el guió del clon de la pluja (amb el comptador de caiguts), la pluja que s'atura (falta esborrar els clons) i les estrelles per caçar amb el guió de tocar. Al tercer repte, fes que recordin la primera ronda de la fàbrica humana.|Pausa activa todos juntos. Después, los cuatro retos: 8 clones de estrella, el guion del clon de la lluvia (con el contador de caídos), la lluvia que se para (falta borrar los clones) y las estrellas para cazar con el guion de tocar. En el tercer reto, haz que recuerden la primera ronda de la fábrica humana.",
        diu: ["La pluja s'atura de cop: on s'han quedat tots els clons?|La lluvia se para de golpe: ¿dónde se han quedado todos los clones?",
          "Quan toques una estrella, qui fa el guió de tocar: l'original o el clon?|Cuando tocas una estrella, ¿quién hace el guion de tocar: el original o el clon?"],
        slides: ['s13'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Individual|Individual" },
      { min: 5, t: "Crea: la meva pluja de clons|Crea: mi lluvia de clones", fase: 'crea',
        fa: "Cada alumne/a inventa una pluja: bombolles que pugen, estrelles que s'encenen i s'apaguen, meteorits… Ha de tenir almenys 5 clons, un guió del clon i l'atzar. Quan la desen, s'ensenyen les pluges per parelles.|Cada alumno/a inventa una lluvia: burbujas que suben, estrellas que se encienden y se apagan, meteoritos… Tiene que tener al menos 5 clones, un guion del clon y el azar. Cuando la guarden, se enseñan las lluvias por parejas.",
        diu: ["La teva pluja va cap avall, cap amunt o de costat? Quin bloc ho decideix?|¿Tu lluvia va hacia abajo, hacia arriba o de lado? ¿Qué bloque lo decide?",
          "Els teus clons s'esborren quan ja no serveixen?|¿Tus clones se borran cuando ya no sirven?"],
        slides: ['s14'], app: "Pas «Crea»: La meva pluja de clons (es desa als projectes).|Paso «Crea»: Mi lluvia de clones (se guarda en los proyectos).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Quin guió fa cada clon quan neix?|¿Qué guion hace cada clon cuando nace?", "Per què esborrem els clons?|¿Por qué borramos los clones?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa 5 clons, no els mou i diu que «no surten».|Hace 5 clones, no los mueve y dice que «no salen».",
        "Pregunta-li on neix un clon. Que posi «ves a un lloc a l'atzar» al guió del clon i compti quantes estrelles veu ara.|Pregúntale dónde nace un clon. Que ponga «ve a un sitio al azar» en el guion del clon y cuente cuántas estrellas ve ahora."],
      ["L'original està amagat i el guió del clon no té «mostra't»: no es veu res.|El original está escondido y el guion del clon no tiene «muéstrate»: no se ve nada.",
        "Recorda la demo: el clon copia com és l'original, també si està amagat. Quin bloc el fa visible, i quan l'hauria de fer?|Recuerda la demo: el clon copia cómo es el original, también si está escondido. ¿Qué bloque lo hace visible, y cuándo lo tendría que hacer?"],
      ["Posa «esborra aquest clon» al principi del guió del clon i els meteorits desapareixen abans de caure.|Pone «borra este clon» al principio del guion del clon y los meteoritos desaparecen antes de caer.",
        "Que llegeixi el guió del clon en veu alta, de dalt a baix, com si fos un clon de la fàbrica humana. Quan es tornava a seure?|Que lea el guion del clon en voz alta, de arriba abajo, como si fuera un clon de la fábrica humana. ¿Cuándo se volvía a sentar?"],
      ["Posa els blocs de la caiguda al guió de la bandera verda en lloc del guió del clon: només es mou la fàbrica.|Pone los bloques de la caída en el guion de la bandera verde en lugar del guion del clon: solo se mueve la fábrica.",
        "Pregunta-li quin guió fa cada clon quan neix. Que arrossegui els blocs de la caiguda sota «quan començo com a clon».|Pregúntale qué guion hace cada clon cuando nace. Que lleve los bloques de la caída bajo «al empezar como clon»."],
      ["Posa «crea un clon de mi» dins del guió del clon i en surten massa de cop.|Pone «crea un clon de mí» dentro del guion del clon y salen demasiados de golpe.",
        "Explica que cada clon també faria clons, com si a la fàbrica humana cada clon cridés «clon!». Que deixi la creació de clons només a la bandera verda.|Explica que cada clon también haría clones, como si en la fábrica humana cada clon gritara «¡clon!». Que deje la creación de clones solo en la bandera verde."]
    ],
    diff: {
      mes: "Fer una pluja amb dos tipus de clons: estrelles que pugen i meteorits que baixen, i que cada estrella que toca un meteorit faci un so. Calcular quants clons hi ha alhora si la fàbrica en fa 2 per segon i cada un viu 3 segons.|Hacer una lluvia con dos tipos de clones: estrellas que suben y meteoritos que bajan, y que cada estrella que toque un meteorito haga un sonido. Calcular cuántos clones hay a la vez si la fábrica hace 2 por segundo y cada uno vive 3 segundos.",
      menys: "Tenir la targeta impresa del guió del clon al costat de l'ordinador i anar posant els blocs en el mateix ordre. Fer primer el repte de les 8 estrelles i el de la pluja que s'atura, que només demanen un canvi.|Tener la tarjeta impresa del guion del clon al lado del ordenador e ir poniendo los bloques en el mismo orden. Hacer primero el reto de las 8 estrellas y el de la lluvia que se para, que solo piden un cambio."
    },
    aval: {
      ticket: ["Què és un clon? Explica-ho amb un exemple.|¿Qué es un clon? Explícalo con un ejemplo.",
        "Per què la fàbrica s'amaga i el clon fa «mostra't»?|¿Por qué la fábrica se esconde y el clon hace «muéstrate»?"],
      rubric: [
        ["Concepte de clon|Concepto de clon", "Explica que és una còpia que fa el mateix personatge i que cada clon segueix el seu guió.|Explica que es una copia que hace el mismo personaje y que cada clon sigue su guion.", "Sap que és una còpia, però no distingeix el guió de l'original del del clon.|Sabe que es una copia, pero no distingue el guion del original del del clon."],
        ["La fàbrica|La fábrica", "Amaga l'original, fa clons en un bucle i cada clon es col·loca, es mostra i es mou.|Esconde el original, hace clones en un bucle y cada clon se coloca, se muestra y se mueve.", "Fa clons, però s'oblida de moure'ls o de mostrar-los.|Hace clones, pero se olvida de moverlos o de mostrarlos."],
        ["Esborrar clons|Borrar clones", "Esborra cada clon quan ha acabat i explica per què cal.|Borra cada clon cuando ha terminado y explica por qué hace falta.", "Esborra els clons només quan l'app li ho recorda.|Borra los clones solo cuando la app se lo recuerda."]
      ]
    },
    casa: "A casa, feu «Clons de paper»: ressegueix una tapa sis vegades, inventeu una regla per a tots els clons i tireu un dau per decidir què té de diferent cadascun.|En casa, haced «Clones de papel»: repasa una tapa seis veces, inventad una regla para todos los clones y tirad un dado para decidir qué tiene de diferente cada uno.",
    slides: [
      { id: 's1', k: 'portada', t: 'Clons|Clones', x: "Un sol personatge, molts meteorits: avui aprendrem a fer còpies que es mouen soles.|Un solo personaje, muchos meteoritos: hoy aprenderemos a hacer copias que se mueven solas.",
        nota: "Objectiu: al final, cada alumne/a tindrà la seva pluja de clons.|Objetivo: al final, cada alumno/a tendrá su lluvia de clones." },
      { id: 's2', k: 'pregunta', t: "Vint meteorits?|¿Veinte meteoritos?", x: "Per fer una pluja de vint meteorits, cal programar-ne vint?|Para hacer una lluvia de veinte meteoritos, ¿hay que programar veinte?",
        nota: "Deixa que proposin copiar personatges. Pregunta què passaria si després volguessin canviar alguna cosa a tots.|Deja que propongan copiar personajes. Pregunta qué pasaría si después quisieran cambiar algo a todos." },
      { id: 's3', k: 'repas', t: "Recordem l'atzar|Recordemos el azar", punts: ["«Ves a un lloc a l'atzar» i després «posa y a 170».|«Ve a un sitio al azar» y después «pon y a 170».", "«Atzar 1-10»: de l'1 al 10, mai el 0.|«Azar 1-10»: del 1 al 10, nunca el 0.", "L'atzar, dins del bucle per canviar a cada volta.|El azar, dentro del bucle para cambiar en cada vuelta."],
        nota: "Si a l'últim tiquet algú confonia l'ordre, demana-li que ho expliqui ara.|Si en el último ticket alguien confundía el orden, pídele que lo explique ahora." },
      { id: 's4', k: 'anim', t: "Què és un clon?|¿Qué es un clon?", anim: 'g7clon', x: "Una còpia del personatge: el mateix dibuix, al mateix lloc.|Una copia del personaje: el mismo dibujo, en el mismo sitio.",
        nota: "Ensenya un segell o una plantilla: un sol model, moltes còpies iguals.|Enseña un sello o una plantilla: un solo modelo, muchas copias iguales." },
      { id: 's5', k: 'media', t: "Quan començo com a clon|Al empezar como clon", x: "Cada clon fa aquest guió pel seu compte: aquí, va a un lloc a l'atzar.|Cada clon hace este guion por su cuenta: aquí, va a un sitio al azar.",
        media: { k: 'stage', w: { bg: 'nit', sprites: [EST(0, 0)] }, prog: '@estrella flag{ rep:6{ clone wait:0.4 } } clone{ gotorand }', time: 5 },
        nota: "Compta amb la classe les estrelles que apareixen: 6 clons i l'original, que es queda al mig.|Cuenta con la clase las estrellas que aparecen: 6 clones y el original, que se queda en el centro." },
      { id: 's6', k: 'concepte', t: "Dos guions per a un personatge|Dos guiones para un personaje", punts: ["Quan comença: el que fa l'original (per exemple, fer clons).|Al empezar: lo que hace el original (por ejemplo, hacer clones).", "Quan començo com a clon: el que fa cada clon quan neix.|Al empezar como clon: lo que hace cada clon cuando nace.", "Tots els clons fan el mateix guió, però cadascun pel seu compte.|Todos los clones hacen el mismo guion, pero cada uno por su cuenta."],
        nota: "Dibuixa a la pissarra els dos guions un al costat de l'altre i fes fletxes de qui fa cada un.|Dibuja en la pizarra los dos guiones uno al lado del otro y haz flechas de quién hace cada uno." },
      { id: 's7', k: 'media', t: "La fàbrica de meteorits|La fábrica de meteoritos", x: "L'original s'amaga i fa clons; cada clon es col·loca, es mostra, baixa i s'esborra.|El original se esconde y hace clones; cada clon se coloca, se muestra, baja y se borra.",
        media: { k: 'stage', w: { bg: 'espai', sprites: [MET()] }, prog: RAIN(0.4, 6), time: 10 },
        nota: "Remarca que només hi ha un personatge programat. Pregunta per què el clon fa «mostra't».|Remarca que solo hay un personaje programado. Pregunta por qué el clon hace «muéstrate»." },
      { id: 's8', k: 'anim', t: "La vida d'un clon|La vida de un clon", anim: 'g7vida', x: "Neix, es col·loca, es mostra, es mou… i s'esborra.|Nace, se coloca, se muestra, se mueve… y se borra.",
        nota: "Explica que l'escenari només aguanta 40 clons alhora: si no s'esborren, la fàbrica deixa de fer-ne.|Explica que el escenario solo aguanta 40 clones a la vez: si no se borran, la fábrica deja de hacer más." },
      { id: 's9', k: 'media', t: "Compte! On són els clons?|¡Cuidado! ¿Dónde están los clones?", x: "Si els clons no es mouen, queden tots a sota de l'original.|Si los clones no se mueven, quedan todos debajo del original.",
        media: { k: 'stage', w: { bg: 'nit', sprites: [EST(0, 0)] }, prog: '@estrella flag{ rep:5{ clone } think:"Som 6, però sembla que només hi sigui jo!|¡Somos 6, pero parece que solo esté yo!",3 }', time: 4 },
        nota: "Pregunta quants clons hi ha. Molts diran «cap». Mostra que n'hi ha cinc a sota i com es mourien.|Pregunta cuántos clones hay. Muchos dirán «ninguno». Muestra que hay cinco debajo y cómo se moverían." },
      { id: 's10', k: 'activitat', t: "La fàbrica de clons humana|La fábrica de clones humana", timer: 12, punts: ["La fàbrica diu «clon!» i dona una targeta.|La fábrica dice «¡clon!» y da una tarjeta.", "El clon tira el dau i va al paper del número.|El clon tira el dado y va al papel del número.", "S'aixeca (es mostra) i camina fins a la pissarra (baixa).|Se levanta (se muestra) y camina hasta la pizarra (baja).", "Ronda 2: torna a seure (s'esborra).|Ronda 2: vuelve a sentarse (se borra)."],
        nota: "A la primera ronda, sense esborrar, el rectangle s'omple i la fàbrica ha de parar: és el que passa a l'escenari.|En la primera ronda, sin borrar, el rectángulo se llena y la fábrica tiene que parar: es lo que pasa en el escenario." },
      { id: 's11', k: 'pregunta', t: "Què ha passat?|¿Qué ha pasado?", punts: ["Tots els clons tenien la mateixa targeta: han fet el mateix?|Todos los clones tenían la misma tarjeta: ¿han hecho lo mismo?", "Per què s'ha aturat la pluja a la primera ronda?|¿Por qué se ha parado la lluvia en la primera ronda?", "Què feia que cada clon anés a un lloc diferent?|¿Qué hacía que cada clon fuera a un sitio diferente?"],
        nota: "Conclusió: mateix guió + atzar = clons diferents; i esborrar-los fa que la pluja no s'acabi.|Conclusión: mismo guion + azar = clones diferentes; y borrarlos hace que la lluvia no se acabe." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre la sessió «Clons».|Abre la sesión «Clones».", "Fes «Recorda», la missió i «Descobreix».|Haz «Recuerda», la misión y «Descubre».", "Ordena el guió del clon.|Ordena el guion del clon.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "«Clons de paper» es pot deixar per a casa amb «Ara no».|«Clones de papel» se puede dejar para casa con «Ahora no»." },
      { id: 's13', k: 'repte', t: "Reptes de clons|Retos de clones", timer: 12, punts: ["1. Un cel ple d'estrelles (8 clons)|1. Un cielo lleno de estrellas (8 clones)", "2. El guió del clon de la pluja|2. El guion del clon de la lluvia", "3. La pluja que s'atura|3. La lluvia que se para", "4. Estrelles per caçar|4. Estrellas para cazar"],
        nota: "Al repte 3, recorda la fàbrica humana: on s'han quedat els clons? Al 4, el clon tocat és qui suma el punt.|En el reto 3, recuerda la fábrica humana: ¿dónde se han quedado los clones? En el 4, el clon tocado es quien suma el punto." },
      { id: 's14', k: 'activitat', t: "Crea: la meva pluja de clons|Crea: mi lluvia de clones", timer: 5, x: "Almenys 5 clons, un guió del clon i l'atzar. Bombolles, estrelles, meteorits…|Al menos 5 clones, un guion del clon y el azar. Burbujas, estrellas, meteoritos…",
        nota: "Si algú acaba aviat, que hi afegeixi un guió de tocar perquè els clons es puguin caçar.|Si alguien acaba pronto, que añada un guion de tocar para que los clones se puedan cazar." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un clon és una còpia que fa el mateix personatge.|Un clon es una copia que hace el mismo personaje.", "Cada clon fa «quan començo com a clon» pel seu compte.|Cada clon hace «al empezar como clon» por su cuenta.", "«Esborra aquest clon» perquè l'escenari no s'ompli.|«Borra este clon» para que el escenario no se llene."],
        nota: "Torna a la pregunta dels vint meteorits: ara, amb un sol personatge en tenim tants com vulguem.|Vuelve a la pregunta de los veinte meteoritos: ahora, con un solo personaje tenemos tantos como queramos." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què és un clon? Un exemple.|¿Qué es un clon? Un ejemplo.", "Per què la fàbrica s'amaga i el clon fa «mostra't»?|¿Por qué la fábrica se esconde y el clon hace «muéstrate»?"],
        nota: "Anota qui confon el guió de l'original amb el del clon: hi tornareu a la sessió següent.|Anota quién confunde el guion del original con el del clon: volveréis a ello en la sesión siguiente." }
    ],
    print: [
      { id: 'p1', t: "Targetes del guió del clon|Tarjetas del guion del clon", k: 'targetes',
        intro: "Un paquet de cinc targetes per a cada alumne/a que farà de clon (en calen uns 8) i una targeta de fàbrica per al professor/a. Retalleu-les; si les plastifiqueu, us serviran més anys.|Un paquete de cinco tarjetas para cada alumno/a que hará de clon (hacen falta unos 8) y una tarjeta de fábrica para el profesor/a. Recortadlas; si las plastificáis, os servirán más años.",
        items: [
          { t: "Fàbrica: estic amagada i dic «clon!» 🏭|Fábrica: estoy escondida y digo «¡clon!» 🏭", n: 1 },
          { t: "Quan començo com a clon… 🧬|Al empezar como clon… 🧬", n: 8 },
          { t: "Tiro el dau i vaig al paper del número 🎲|Tiro el dado y voy al papel del número 🎲", n: 8 },
          { t: "Em mostro: m'aixeco 🙋|Me muestro: me levanto 🙋", n: 8 },
          { t: "Baixo a poc a poc fins a la pissarra ⬇️|Bajo despacio hasta la pizarra ⬇️", n: 8 },
          { t: "M'esborro: torno a seure 🧽|Me borro: vuelvo a sentarme 🧽", n: 8 }
        ] },
      { id: 'p2', t: "Clons sobre paper|Clones sobre papel", k: 'fitxa',
        intro: "Pensa com l'escenari. Pots dibuixar els blocs.|Piensa como el escenario. Puedes dibujar los bloques.",
        items: [
          { q: "L'estrella fa «repeteix 4 vegades: crea un clon de mi». Quantes estrelles hi ha en total?|La estrella hace «repite 4 veces: crea un clon de mí». ¿Cuántas estrellas hay en total?", sol: "5: l'original i 4 clons.|5: el original y 4 clones." },
          { q: "Els 4 clons no tenen cap guió. On són?|Los 4 clones no tienen ningún guion. ¿Dónde están?", sol: "A sota de l'original, al mateix lloc: no es veuen.|Debajo del original, en el mismo sitio: no se ven." },
          { q: "Ordena el guió del clon de la pluja: mostra't · esborra aquest clon · ves a un lloc a l'atzar · baixa fins a baix · posa y a 170|Ordena el guion del clon de la lluvia: muéstrate · borra este clon · ve a un sitio al azar · baja hasta abajo · pon y a 170", sol: "Ves a un lloc a l'atzar · posa y a 170 · mostra't · baixa fins a baix · esborra aquest clon.|Ve a un sitio al azar · pon y a 170 · muéstrate · baja hasta abajo · borra este clon." },
          { q: "Una fàbrica fa 2 clons cada segon i cada clon s'esborra al cap de 3 segons. Quants clons hi ha alhora, més o menys?|Una fábrica hace 2 clones cada segundo y cada clon se borra al cabo de 3 segundos. ¿Cuántos clones hay a la vez, más o menos?", sol: "Uns 6 (2 per segon × 3 segons).|Unos 6 (2 por segundo × 3 segundos)." }
        ] }
    ]
  };

  /* ---------- Sessió 3 · Cada cop més difícil ---------- */
  const ACC = cap => `@meteorit flag{ setv:velocitat,3 point:180 forever{ ${FALL('$velocitat')} ${cap ? `if:$velocitat<${cap}{ chv:velocitat,2 }` : 'chv:velocitat,2'} } }`;
  const G3 = {
    obj: [
      "L'alumne/a explica per què un bon videojoc comença fàcil i es fa difícil a poc a poc.|El alumno/a explica por qué un buen videojuego empieza fácil y se hace difícil poco a poco.",
      "L'alumne/a fa moure un personatge amb la variable velocitat i la fa créixer amb «suma a velocitat».|El alumno/a hace mover un personaje con la variable velocidad y la hace crecer con «suma a velocidad».",
      "L'alumne/a posa un límit a la dificultat amb un «si» que compara la variable.|El alumno/a pone un límite a la dificultad con un «si» que compara la variable.",
      "L'alumne/a calcula el valor d'una variable que creix de 2 en 2 i s'atura en un límit.|El alumno/a calcula el valor de una variable que crece de 2 en 2 y se para en un límite."
    ],
    comp: [
      "Competència digital (CD5): dissenyar reptes digitals equilibrats|Competencia digital (CD5): diseñar retos digitales equilibrados",
      "Pensament computacional: variables que canvien, condicions i límits|Pensamiento computacional: variables que cambian, condiciones y límites",
      "Matemàtiques: sèries numèriques (sumar sempre el mateix) i comparació de nombres|Matemáticas: series numéricas (sumar siempre lo mismo) y comparación de números",
      "Educació física i treball en equip: ritme, coordinació i esforç a poc a poc|Educación física y trabajo en equipo: ritmo, coordinación y esfuerzo poco a poco"
    ],
    vocab: [
      ["Dificultat|Dificultad", "Com de difícil és un repte. Als bons videojocs, puja a poc a poc.|Lo difícil que es un reto. En los buenos videojuegos, sube poco a poco."],
      ["Velocitat|Velocidad", "Quants passos es mou un personatge a cada fotograma. Si és una variable, pot créixer.|Cuántos pasos se mueve un personaje en cada fotograma. Si es una variable, puede crecer."],
      ["Augmentar|Aumentar", "Fer créixer una variable, per exemple amb «suma a velocitat 2».|Hacer crecer una variable, por ejemplo con «suma a velocidad 2»."],
      ["Límit|Límite", "El valor més gran que deixem que tingui la variable.|El valor más grande que dejamos que tenga la variable."],
      ["Nivell|Nivel", "Una etapa del videojoc; a cada nivell, una mica més difícil.|Una etapa del videojuego; en cada nivel, un poco más difícil."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Cada cop més difícil»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Cada vez más difícil»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Una bola de paper (o una pilota tova) per grup de 4 i un cronòmetre (el del projector o un mòbil)|Una bola de papel (o una pelota blanda) por grupo de 4 y un cronómetro (el del proyector o un móvil)",
        "Pissarra amb dues caselles: VELOCITAT i LÍMIT|Pizarra con dos casillas: VELOCIDAD y LÍMITE"
      ],
      imprimir: ["Fitxa: la taula de la velocitat (una per grup i una per alumne/a per als exercicis)|Ficha: la tabla de la velocidad (una por grupo y una por alumno/a para los ejercicios)"],
      prep: [
        "Imprimir la fitxa. Fer bolles de paper fortes (amb cinta) si no hi ha pilotes toves.|Imprimir la ficha. Hacer bolas de papel fuertes (con cinta) si no hay pelotas blandas.",
        "Apartar una mica les taules perquè cada grup de 4 es pugui posar en rotllana.|Apartar un poco las mesas para que cada grupo de 4 se pueda poner en corro.",
        "Provar la demo del meteorit que s'accelera (diapositiva 7) i la del límit (diapositiva 9).|Probar la demo del meteorito que se acelera (diapositiva 7) y la del límite (diapositiva 9).",
        "Deixar la sessió iniciada a cada ordinador.|Dejar la sesión iniciada en cada ordenador."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: massa fàcil o massa difícil?|Bienvenida: ¿demasiado fácil o demasiado difícil?", fase: 'inici',
        fa: "Explica la història de l'Aina, que s'avorreix, i d'en Pol, que ho troba difícil. Pregunta quin videojoc o esport els va costar al principi i com van millorar. Repàs ràpid dels clons amb la diapositiva 3.|Explica la historia de Aina, que se aburre, y de Pol, que lo encuentra difícil. Pregunta qué videojuego o deporte les costó al principio y cómo mejoraron. Repaso rápido de los clones con la diapositiva 3.",
        diu: ["Us heu avorrit mai amb un repte massa fàcil? I us heu enfadat amb un de massa difícil?|¿Os habéis aburrido alguna vez con un reto demasiado fácil? ¿Y os habéis enfadado con uno demasiado difícil?",
          "Com podríem fer un sol videojoc que agradi a l'Aina i a en Pol?|¿Cómo podríamos hacer un solo videojuego que guste a Aina y a Pol?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "La dificultat que creix|La dificultad que crece", fase: 'teoria',
        fa: "Mostra la corba de la dificultat: començar fàcil i pujar a poc a poc. Explica la variable velocitat i com «mou-te velocitat passos» va més de pressa quan la variable creix. Amb la demo, fes que diguin el número de velocitat en veu alta a cada volta. Ensenya altres maneres (més petit, més clons, menys temps) i acaba amb el límit.|Muestra la curva de la dificultad: empezar fácil y subir poco a poco. Explica la variable velocidad y cómo «muévete velocidad pasos» va más deprisa cuando la variable crece. Con la demo, haz que digan el número de velocidad en voz alta en cada vuelta. Enseña otras maneras (más pequeño, más clones, menos tiempo) y acaba con el límite.",
        diu: ["Velocitat 3, 5, 7… quin número ve després? I després?|Velocidad 3, 5, 7… ¿qué número viene después? ¿Y después?",
          "Si el meteorit fa «mou-te 5 passos», anirà més de pressa quan la variable creixi?|Si el meteorito hace «muévete 5 pasos», ¿irá más deprisa cuando la variable crezca?",
          "Què passaria al cap de deu minuts si la velocitat no tingués límit?|¿Qué pasaría al cabo de diez minutos si la velocidad no tuviera límite?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La bola que s'accelera|La bola que se acelera", fase: 'desconnectat',
        fa: "Grups de 4 en rotllana amb una bola. A cada ronda de 10 segons, el grup ha de fer tantes passades com diu la VELOCITAT de la pissarra. Comenceu amb velocitat 3 i, després de cada ronda, sumeu 2 (com al programa). El LÍMIT és 11: quan hi arribeu, ja no puja. Cada grup apunta a la fitxa si ho ha aconseguit i si li ha semblat avorrit, just o massa difícil. Feu 6 rondes.|Grupos de 4 en corro con una bola. En cada ronda de 10 segundos, el grupo tiene que hacer tantos pases como dice la VELOCIDAD de la pizarra. Empezad con velocidad 3 y, después de cada ronda, sumad 2 (como en el programa). El LÍMITE es 11: cuando lleguéis, ya no sube. Cada grupo apunta en la ficha si lo ha conseguido y si le ha parecido aburrido, justo o demasiado difícil. Haced 6 rondas.",
        diu: ["Velocitat 3, sumem 2: quina velocitat toca ara?|Velocidad 3, sumamos 2: ¿qué velocidad toca ahora?",
          "A quina ronda us ha semblat més divertit? Per què?|¿En qué ronda os ha parecido más divertido? ¿Por qué?",
          "I si no hi hagués límit: amb velocitat 25, ho aconseguiríeu?|¿Y si no hubiera límite: con velocidad 25, lo conseguiríais?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. A la pregunta de les 4 voltes, demana que ho calculin amb els dits o a la fitxa. A l'escenari per mirar, que diguin quan deixa de créixer la velocitat i per què.|Cada alumno/a avanza hasta la pausa activa. En la pregunta de las 4 vueltas, pide que lo calculen con los dedos o en la ficha. En el escenario para mirar, que digan cuándo deja de crecer la velocidad y por qué.",
        diu: ["Quan s'atura de créixer la velocitat? Quin bloc ho fa?|¿Cuándo deja de crecer la velocidad? ¿Qué bloque lo hace?",
          "La variable creix, però el meteorit no s'accelera: què li falta al «mou-te»?|La variable crece, pero el meteorito no se acelera: ¿qué le falta al «muévete»?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, la missió, les cinc targetes de «Descobreix», la pregunta de les 4 voltes, «Cada cop més lluny», el meteorit que s'accelera, el bloc que fa créixer la velocitat i la pregunta del «mou-te 5 passos».|De «Recuerda» hasta «Investiga»: las preguntas de repaso, la misión, las cinco tarjetas de «Descubre», la pregunta de las 4 vueltas, «Cada vez más lejos», el meteorito que se acelera, el bloque que hace crecer la velocidad y la pregunta del «muévete 5 pasos».", org: "Individual|Individual" },
      { min: 12, t: "Pausa activa i reptes de dificultat|Pausa activa y retos de dificultad", fase: 'ordinador',
        fa: "Pausa activa tots junts. Després, els tres reptes: el meteorit que no s'accelerava (posar la variable al «mou-te»), el cometa sense límit (afegir el «si velocitat < 12») i l'estrella que s'encongeix quan la toques.|Pausa activa todos juntos. Después, los tres retos: el meteorito que no se aceleraba (poner la variable en el «muévete»), el cometa sin límite (añadir el «si velocidad < 12») y la estrella que se encoge cuando la tocas.",
        diu: ["Al cometa, on va el «si»: abans de tocar la vora o dins?|En el cometa, ¿dónde va el «si»: antes de tocar el borde o dentro?",
          "L'estrella que s'encongeix: després de 5 tocs, quina mida té?|La estrella que se encoge: después de 5 toques, ¿qué tamaño tiene?"],
        slides: ['s13'], app: "«Pausa activa» i els tres reptes de «Reptes».|«Pausa activa» y los tres retos de «Retos».", org: "Individual|Individual" },
      { min: 5, t: "Crea: el meu repte que s'accelera|Crea: mi reto que se acelera", fase: 'crea',
        fa: "Cada alumne/a fa el seu repte amb la variable velocitat, que creix i té un límit. Quan el desin, el prova el company/a i diu si el límit és massa baix, massa alt o just.|Cada alumno/a hace su reto con la variable velocidad, que crece y tiene un límite. Cuando lo guarden, lo prueba el compañero/a y dice si el límite es demasiado bajo, demasiado alto o justo.",
        diu: ["A quina velocitat comença el teu repte? I quin és el límit?|¿A qué velocidad empieza tu reto? ¿Y cuál es el límite?",
          "El company/a s'ha avorrit o s'ha enfadat? Què canviaries?|¿El compañero/a se ha aburrido o se ha enfadado? ¿Qué cambiarías?"],
        slides: ['s14'], app: "Pas «Crea»: El meu repte que s'accelera (es desa als projectes).|Paso «Crea»: Mi reto que se acelera (se guarda en los proyectos).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Què ha de passar perquè el meteorit vagi cada vegada més ràpid?|¿Qué tiene que pasar para que el meteorito vaya cada vez más rápido?", "Per què hi posem un límit?|¿Por qué le ponemos un límite?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Suma a la variable velocitat, però el «mou-te» continua amb un número fix i no s'accelera res.|Suma a la variable velocidad, pero el «muévete» sigue con un número fijo y no se acelera nada.",
        "Pregunta: el «mou-te» sap que la variable ha crescut? Que miri el número del bloc i el número de l'escenari: són el mateix?|Pregunta: ¿el «muévete» sabe que la variable ha crecido? Que mire el número del bloque y el número del escenario: ¿son el mismo?"],
      ["Posa «suma a velocitat» dins del bucle de la caiguda i la velocitat es dispara en pocs segons.|Pone «suma a velocidad» dentro del bucle de la caída y la velocidad se dispara en pocos segundos.",
        "Que miri el número de la velocitat mentre cau: puja un cop per caiguda o a cada pas? On ha d'anar perquè pugi només quan torna a dalt?|Que mire el número de la velocidad mientras cae: ¿sube una vez por caída o a cada paso? ¿Dónde tiene que ir para que suba solo cuando vuelve arriba?"],
      ["Al límit, posa «velocitat > 12» en lloc de «velocitat < 12» i la velocitat no puja mai.|En el límite, pone «velocidad > 12» en lugar de «velocidad < 12» y la velocidad no sube nunca.",
        "Que llegeixi la condició en veu alta amb el número d'ara: «si 4 és més gran que 12…». Es compleix? Quan volem sumar?|Que lea la condición en voz alta con el número de ahora: «si 4 es mayor que 12…». ¿Se cumple? ¿Cuándo queremos sumar?"],
      ["S'oblida de posar la velocitat a 3 al principi i, en tornar a començar, el meteorit ja va molt de pressa (o no es mou, perquè val 0).|Se olvida de poner la velocidad a 3 al principio y, al volver a empezar, el meteorito ya va muy deprisa (o no se mueve, porque vale 0).",
        "Pregunta quant val la variable just quan toques la bandera verda. Quin bloc li dona el valor de començar?|Pregunta cuánto vale la variable justo cuando tocas la bandera verde. ¿Qué bloque le da el valor de empezar?"],
      ["Creu que «més difícil» només vol dir «més ràpid».|Cree que «más difícil» solo quiere decir «más rápido».",
        "Recorda la demo de l'estrella que s'encongeix i pregunta per altres maneres: més clons, menys temps, menys vides…|Recuerda la demo de la estrella que se encoge y pregunta por otras maneras: más clones, menos tiempo, menos vidas…"]
    ],
    diff: {
      mes: "Afegir nivells: una variable «nivell» que puja cada vegada que la velocitat arriba a un múltiple de 4, i un personatge que diu el nivell. Calcular a la fitxa en quina volta s'arriba al límit si es comença a 2 i se suma 3.|Añadir niveles: una variable «nivel» que sube cada vez que la velocidad llega a un múltiplo de 4, y un personaje que dice el nivel. Calcular en la ficha en qué vuelta se llega al límite si se empieza en 2 y se suma 3.",
      menys: "Fer el primer repte amb el professor/a, tocant junts el número del «mou-te». Al cometa, oferir el «si» ja posat dins i demanar només que triï el número del límit. Fer servir la fitxa per escriure la sèrie 3, 5, 7…|Hacer el primer reto con el profesor/a, tocando juntos el número del «muévete». En el cometa, ofrecer el «si» ya puesto dentro y pedir solo que elija el número del límite. Usar la ficha para escribir la serie 3, 5, 7…"
    },
    aval: {
      ticket: ["Per què un videojoc ha de començar fàcil?|¿Por qué un videojuego tiene que empezar fácil?",
        "La velocitat comença a 4 i suma 2 a cada volta, amb límit 10. Quant val després de 5 voltes?|La velocidad empieza en 4 y suma 2 en cada vuelta, con límite 10. ¿Cuánto vale después de 5 vueltas?"],
      rubric: [
        ["Idea de dificultat|Idea de dificultad", "Explica per què cal començar fàcil i pujar a poc a poc, amb exemples.|Explica por qué hay que empezar fácil y subir poco a poco, con ejemplos.", "Diu que ha de ser difícil, però no veu per què ha de començar fàcil.|Dice que tiene que ser difícil, pero no ve por qué tiene que empezar fácil."],
        ["Velocitat variable|Velocidad variable", "Fa moure el personatge amb la variable i la fa créixer al lloc adequat del programa.|Hace mover el personaje con la variable y la hace crecer en el lugar adecuado del programa.", "Fa créixer la variable, però el moviment no la fa servir o creix massa de pressa.|Hace crecer la variable, pero el movimiento no la usa o crece demasiado deprisa."],
        ["Límit|Límite", "Posa un «si» amb la comparació correcta i explica què passa quan s'arriba al límit.|Pone un «si» con la comparación correcta y explica qué pasa cuando se llega al límite.", "Posa el «si», però s'equivoca amb el signo o el número.|Pone el «si», pero se equivoca con el signo o el número."]
      ]
    },
    casa: "A casa, feu «Cada cop més lluny» amb una bola de mitjons: un pas enrere a cada atrapada i un límit de 6 passos. Parleu de quin nivell era el més divertit.|En casa, haced «Cada vez más lejos» con una bola de calcetines: un paso atrás en cada atrapada y un límite de 6 pasos. Hablad de qué nivel era el más divertido.",
    slides: [
      { id: 's1', k: 'portada', t: "Cada cop més difícil|Cada vez más difícil", x: "Com fer un videojoc que no avorreixi ni faci enfadar.|Cómo hacer un videojuego que no aburra ni haga enfadar.",
        nota: "Objectiu: al final, el meteorit anirà cada vegada més ràpid, però amb un límit.|Objetivo: al final, el meteorito irá cada vez más rápido, pero con un límite." },
      { id: 's2', k: 'pregunta', t: "L'Aina i en Pol|Aina y Pol", x: "L'Aina diu «massa fàcil!» i en Pol, «massa difícil!». Com ho podem fer perquè els agradi als dos?|Aina dice «¡demasiado fácil!» y Pol, «¡demasiado difícil!». ¿Cómo lo podemos hacer para que les guste a los dos?",
        nota: "Busca la idea de començar fàcil i anar pujant. Si surt «triar el nivell», també és bona: anota-la.|Busca la idea de empezar fácil e ir subiendo. Si sale «elegir el nivel», también es buena: anótala." },
      { id: 's3', k: 'repas', t: "Recordem els clons|Recordemos los clones", punts: ["«Crea un clon de mi» fa una còpia.|«Crea un clon de mí» hace una copia.", "Cada clon fa «quan començo com a clon».|Cada clon hace «al empezar como clon».", "La fàbrica s'amaga; el clon es mostra i, al final, s'esborra.|La fábrica se esconde; el clon se muestra y, al final, se borra."],
        nota: "Pregunta on va «esborra aquest clon» i per què.|Pregunta dónde va «borra este clon» y por qué." },
      { id: 's4', k: 'anim', t: "Ni massa fàcil ni massa difícil|Ni demasiado fácil ni demasiado difícil", anim: 'g7corba', x: "La dificultat puja a poc a poc, dins la zona del repte just.|La dificultad sube poco a poco, dentro de la zona del reto justo.",
        nota: "Relaciona-ho amb aprendre a anar en bicicleta o a nedar: primer fàcil, després més.|Relaciónalo con aprender a ir en bicicleta o a nadar: primero fácil, después más." },
      { id: 's5', k: 'anim', t: "La velocitat és una variable|La velocidad es una variable", anim: 'g7vel', x: "«Mou-te velocitat passos»: quan la variable creix, va més de pressa.|«Muévete velocidad pasos»: cuando la variable crece, va más deprisa.",
        nota: "Remarca que el «mou-te» ha de tenir la variable, no un número.|Remarca que el «muévete» tiene que tener la variable, no un número." },
      { id: 's6', k: 'concepte', t: "Tres blocs per a la dificultat|Tres bloques para la dificultad", punts: ["Al principi: posa velocitat a 3.|Al principio: pon velocidad a 3.", "Per moure's: mou-te velocitat passos.|Para moverse: muévete velocidad pasos.", "A cada volta: suma a velocitat 2.|En cada vuelta: suma a velocidad 2."],
        nota: "Escriu els tres blocs a la pissarra i deixa'ls tota la sessió.|Escribe los tres bloques en la pizarra y déjalos toda la sesión." },
      { id: 's7', k: 'media', t: "Cada volta, una mica més|Cada vuelta, un poco más", x: "Mireu el número de velocitat: 3, 5, 7, 9…|Mirad el número de velocidad: 3, 5, 7, 9…",
        media: { k: 'stage', w: { bg: 'espai', sprites: [MET()], vars: ['velocitat'] }, prog: ACC(0), varNames: VN, time: 9 },
        nota: "Que diguin en veu alta el número de cada volta abans que surti.|Que digan en voz alta el número de cada vuelta antes de que salga." },
      { id: 's8', k: 'media', t: "Més petit també és més difícil|Más pequeño también es más difícil", x: "Altres maneres: més petit, més clons, menys temps.|Otras maneras: más pequeño, más clones, menos tiempo.",
        media: { k: 'stage', w: { bg: 'nit', sprites: [EST(0, 0, { size: 150 })] }, prog: '@estrella flag{ rep:11{ gotorand wait:0.6 chsize:-10 } }', time: 8 },
        nota: "Demana altres idees per fer més difícil un videojoc sense que sigui més ràpid.|Pide otras ideas para hacer más difícil un videojuego sin que sea más rápido." },
      { id: 's9', k: 'media', t: "Compte: posa-hi un límit!|Cuidado: ¡ponle un límite!", x: "Si velocitat < 14, suma-hi 2. Quan arriba a 14, ja no puja.|Si velocidad < 14, súmale 2. Cuando llega a 14, ya no sube.",
        media: { k: 'stage', w: { bg: 'espai', sprites: [MET(0, 0)], vars: ['velocitat'] }, prog: '@meteorit flag{ setv:velocitat,4 point:45 forever{ move:$velocitat if:touch:edge{ if:$velocitat<14{ chv:velocitat,2 } } bounce } }', varNames: VN, time: 10 },
        nota: "Pregunta què passaria sense el «si»: al cap d'una estona, impossible de seguir amb els ulls.|Pregunta qué pasaría sin el «si»: al cabo de un rato, imposible de seguir con los ojos." },
      { id: 's10', k: 'activitat', t: "La bola que s'accelera|La bola que se acelera", timer: 12, punts: ["En rotllana de 4, amb una bola.|En corro de 4, con una bola.", "En 10 segons, tantes passades com la VELOCITAT.|En 10 segundos, tantos pases como la VELOCIDAD.", "Després de cada ronda: velocitat + 2.|Después de cada ronda: velocidad + 2.", "LÍMIT 11: ja no puja més.|LÍMITE 11: ya no sube más."],
        nota: "Escriu la velocitat a la pissarra i actualitza-la entre rondes; fes que un alumne/a faci la suma.|Escribe la velocidad en la pizarra y actualízala entre rondas; haz que un alumno/a haga la suma." },
      { id: 's11', k: 'pregunta', t: "Com ha anat?|¿Cómo ha ido?", punts: ["A quina ronda era avorrit?|¿En qué ronda era aburrido?", "A quina era divertit de veritat?|¿En cuál era divertido de verdad?", "Què hauria passat sense límit?|¿Qué habría pasado sin límite?"],
        nota: "Connecta-ho amb el programa: la velocitat de la pissarra és la variable i el límit, el «si».|Conéctalo con el programa: la velocidad de la pizarra es la variable y el límite, el «si»." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre «Cada cop més difícil».|Abre «Cada vez más difícil».", "Fes «Recorda», la missió i «Descobreix».|Haz «Recuerda», la misión y «Descubre».", "Mira el meteorit i troba el bloc que l'accelera.|Mira el meteorito y encuentra el bloque que lo acelera.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "«Cada cop més lluny» es fa a casa: poden tocar «Ara no».|«Cada vez más lejos» se hace en casa: pueden tocar «Ahora no»." },
      { id: 's13', k: 'repte', t: "Reptes de dificultat|Retos de dificultad", timer: 12, punts: ["1. El meteorit que no s'accelerava|1. El meteorito que no se aceleraba", "2. El cometa sense límit|2. El cometa sin límite", "3. L'estrella que s'encongeix|3. La estrella que se encoge"],
        nota: "Al cometa, si algú s'encalla, que llegeixi la condició amb el número d'ara: «si 13 < 12…».|En el cometa, si alguien se atasca, que lea la condición con el número de ahora: «si 13 < 12…»." },
      { id: 's14', k: 'activitat', t: "Crea: el meu repte que s'accelera|Crea: mi reto que se acelera", timer: 5, x: "Velocitat variable, que creix i té un límit. Després, el company/a el prova.|Velocidad variable, que crece y tiene un límite. Después, el compañero/a lo prueba.",
        nota: "Si el company/a diu que és massa fàcil o massa difícil, que provin de canviar només el límit.|Si el compañero/a dice que es demasiado fácil o demasiado difícil, que prueben a cambiar solo el límite." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Començar fàcil i pujar a poc a poc.|Empezar fácil y subir poco a poco.", "«Mou-te velocitat passos» + «suma a velocitat».|«Muévete velocidad pasos» + «suma a velocidad».", "Un límit: «si velocitat < 12, suma-hi».|Un límite: «si velocidad < 12, súmale»."],
        nota: "Torna a l'Aina i en Pol: ara el videojoc els pot agradar a tots dos.|Vuelve a Aina y Pol: ahora el videojuego les puede gustar a los dos." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Per què ha de començar fàcil?|¿Por qué tiene que empezar fácil?", "Comença a 4, suma 2, límit 10: quant val després de 5 voltes?|Empieza en 4, suma 2, límite 10: ¿cuánto vale después de 5 vueltas?"],
        nota: "Resposta de la segona: 10 (4, 6, 8, 10 i ja no puja).|Respuesta de la segunda: 10 (4, 6, 8, 10 y ya no sube)." }
    ],
    print: [
      { id: 'p1', t: "La taula de la velocitat|La tabla de la velocidad", k: 'fitxa',
        intro: "Primera part, en grup, durant «La bola que s'accelera». Segona part, sol/a, com a exercici.|Primera parte, en grupo, durante «La bola que se acelera». Segunda parte, solo/a, como ejercicio.",
        items: [
          { q: "Ronda 1: velocitat ___ · Ho hem aconseguit? Sí / No · Avorrit / Just / Massa difícil — Ronda 2: velocitat ___ · Sí / No · Avorrit / Just / Massa difícil — Ronda 3: velocitat ___ · Sí / No · Avorrit / Just / Massa difícil|Ronda 1: velocidad ___ · ¿Lo hemos conseguido? Sí / No · Aburrido / Justo / Demasiado difícil — Ronda 2: velocidad ___ · Sí / No · Aburrido / Justo / Demasiado difícil — Ronda 3: velocidad ___ · Sí / No · Aburrido / Justo / Demasiado difícil" },
          { q: "Ronda 4: velocitat ___ · Sí / No · Avorrit / Just / Massa difícil — Ronda 5: velocitat ___ · Sí / No · Avorrit / Just / Massa difícil — Ronda 6: velocitat ___ · Sí / No · Avorrit / Just / Massa difícil|Ronda 4: velocidad ___ · Sí / No · Aburrido / Justo / Demasiado difícil — Ronda 5: velocidad ___ · Sí / No · Aburrido / Justo / Demasiado difícil — Ronda 6: velocidad ___ · Sí / No · Aburrido / Justo / Demasiado difícil", sol: "Velocitats: 3, 5, 7, 9, 11, 11 (el límit és 11).|Velocidades: 3, 5, 7, 9, 11, 11 (el límite es 11)." },
          { q: "Un meteorit comença a velocitat 2 i suma 2 a cada volta, sense límit. Escriu la velocitat de les 6 primeres voltes.|Un meteorito empieza a velocidad 2 y suma 2 en cada vuelta, sin límite. Escribe la velocidad de las 6 primeras vueltas.", sol: "2, 4, 6, 8, 10, 12.|2, 4, 6, 8, 10, 12." },
          { q: "Ara té el límit «si velocitat < 8, suma 2». Quina velocitat té a la volta 6?|Ahora tiene el límite «si velocidad < 8, suma 2». ¿Qué velocidad tiene en la vuelta 6?", sol: "8: 2, 4, 6, 8, 8, 8.|8: 2, 4, 6, 8, 8, 8." },
          { q: "Escriu dues maneres de fer més difícil un videojoc sense fer-lo més ràpid.|Escribe dos maneras de hacer más difícil un videojuego sin hacerlo más rápido.", sol: "Per exemple: objectius més petits, més clons, menys temps, menys vides.|Por ejemplo: objetivos más pequeños, más clones, menos tiempo, menos vidas." }
        ] }
    ]
  };

  /* ---------- Sessió 4 · Projecte: esquiva els meteorits ---------- */
  const G4 = {
    obj: [
      "L'alumne/a planifica un videojoc en peces (nau, fàbrica, xocs, punts, dificultat, fi) abans de programar-lo.|El alumno/a planifica un videojuego en piezas (nave, fábrica, choques, puntos, dificultad, fin) antes de programarlo.",
      "L'alumne/a programa i prova cada peça per separat abans de passar a la següent.|El alumno/a programa y prueba cada pieza por separado antes de pasar a la siguiente.",
      "L'alumne/a fa que un clon que toca la nau resti una vida i s'esborri, i acaba la partida quan no queden vides.|El alumno/a hace que un clon que toca la nave reste una vida y se borre, y acaba la partida cuando no quedan vidas.",
      "L'alumne/a prova el videojoc d'un company/a, li dona una valoració amable i útil i millora el seu amb la que rep.|El alumno/a prueba el videojuego de un compañero/a, le da una valoración amable y útil y mejora el suyo con la que recibe."
    ],
    comp: [
      "Competència digital (CD5): crear un videojoc propi complet amb programació per blocs|Competencia digital (CD5): crear un videojuego propio completo con programación por bloques",
      "Pensament computacional: descomposició, depuració i proves amb usuaris|Pensamiento computacional: descomposición, depuración y pruebas con usuarios",
      "Llengua: explicar un pla per escrit i oralment, donar i rebre opinions amb respecte|Lengua: explicar un plan por escrito y oralmente, dar y recibir opiniones con respeto",
      "Aprendre a aprendre: revisar la pròpia feina i millorar-la|Aprender a aprender: revisar el propio trabajo y mejorarlo"
    ],
    vocab: [
      ["Pla|Plan", "La llista de peces i regles del videojoc, escrita abans de programar.|La lista de piezas y reglas del videojuego, escrita antes de programar."],
      ["Peça|Pieza", "Un tros del videojoc que es pot programar i provar per separat.|Un trozo del videojuego que se puede programar y probar por separado."],
      ["Xoc|Choque", "Quan un clon de meteorit toca la nau.|Cuando un clon de meteorito toca la nave."],
      ["Fi de partida|Fin de partida", "Quan s'acaben les vides: es diu «Fi!» i s'atura tot.|Cuando se acaban las vidas: se dice «¡Fin!» y se para todo."],
      ["Provador/a|Probador/a", "La persona que prova un videojoc que no ha fet i diu què li ha semblat.|La persona que prueba un videojuego que no ha hecho y dice qué le ha parecido."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: esquiva els meteorits»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: esquiva los meteoritos»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis i colors per al pla en paper|Lápices y colores para el plan en papel",
        "Les targetes de preguntes del provador/a, una per parella|Las tarjetas de preguntas del probador/a, una por pareja"
      ],
      imprimir: ["Fitxa: el pla del meu videojoc (una per alumne/a)|Ficha: el plan de mi videojuego (una por alumno/a)", "Targetes del provador/a (una tira per parella)|Tarjetas del probador/a (una tira por pareja)"],
      prep: [
        "Imprimir la fitxa del pla i retallar les targetes del provador/a.|Imprimir la ficha del plan y recortar las tarjetas del probador/a.",
        "Decidir les parelles de prova creuada (millor que no siguin companys/es de taula).|Decidir las parejas de prueba cruzada (mejor que no sean compañeros/as de mesa).",
        "Provar el videojoc sencer de la diapositiva 6 i el pas «Crea» per saber quins blocs falten al programa de partida.|Probar el videojuego entero de la diapositiva 6 y el paso «Crea» para saber qué bloques faltan en el programa de partida.",
        "Preparar dos o tres ordinadors per ensenyar videojocs al final (o el projector connectat).|Preparar dos o tres ordenadores para enseñar videojuegos al final (o el proyector conectado)."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: demà és la Nit de les Estrelles|Bienvenida: mañana es la Noche de las Estrellas", fase: 'inici',
        fa: "Explica que avui acabaran el videojoc per a l'observatori. Fes el repàs de dificultat i clons amb la diapositiva 3 i ensenya el videojoc sencer en marxa perquè vegin on han d'arribar.|Explica que hoy acabarán el videojuego para el observatorio. Haz el repaso de dificultad y clones con la diapositiva 3 y enseña el videojuego entero en marcha para que vean adónde tienen que llegar.",
        diu: ["Quines peces del videojoc ja sabem fer? Quines ens falten?|¿Qué piezas del videojuego ya sabemos hacer? ¿Cuáles nos faltan?",
          "Avui ens ajudarem com un equip de programadors de videojocs: uns fan, uns altres proven.|Hoy nos ayudaremos como un equipo de programadores de videojuegos: unos hacen, otros prueban."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 7, t: "Les peces del videojoc|Las piezas del videojuego", fase: 'teoria',
        fa: "Presenta les sis peces amb l'animació i el videojoc sencer amb la demo. Atura't als xocs: el clon que toca la nau resta una vida i s'esborra. Explica la fi de partida i la idea de construir i provar tros a tros.|Presenta las seis piezas con la animación y el videojuego entero con la demo. Párate en los choques: el clon que toca la nave resta una vida y se borra. Explica el fin de partida y la idea de construir y probar trozo a trozo.",
        diu: ["Si el clon no s'esborra després de tocar la nau, quantes vides treu?|Si el clon no se borra después de tocar la nave, ¿cuántas vidas quita?",
          "Per què és millor provar cada peça abans de fer la següent?|¿Por qué es mejor probar cada pieza antes de hacer la siguiente?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El pla en paper|El plan en papel", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa del pla: dibuix de l'escenari, regles de punts i vides, velocitat inicial, quant puja i límit, i un toc personal (fons, so, frase final). Als 6 minuts, per parelles, cadascú explica el seu pla i el company/a fa una pregunta de les targetes del provador/a.|Cada alumno/a rellena la ficha del plan: dibujo del escenario, reglas de puntos y vidas, velocidad inicial, cuánto sube y límite, y un toque personal (fondo, sonido, frase final). A los 6 minutos, por parejas, cada uno explica su plan y el compañero/a hace una pregunta de las tarjetas del probador/a.",
        diu: ["Amb quantes vides comença el teu videojoc? Per què aquest número?|¿Con cuántas vidas empieza tu videojuego? ¿Por qué este número?",
          "Quin és el teu límit de velocitat? El provaràs i el podràs canviar.|¿Cuál es tu límite de velocidad? Lo probarás y lo podrás cambiar."],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 18, t: "A l'ordinador: peça a peça|En el ordenador: pieza a pieza", fase: 'ordinador',
        fa: "Cada alumne/a fa el «Recorda», la teoria i les tres peces: la nau amb les fletxes, la fàbrica de meteorits i els xocs amb vides. Fes la pausa activa tots junts quan la majoria hi arribi. Després, el bloc que acaba la partida i la pregunta del clon que no s'esborra. Passeja i pregunta a cada alumne/a quina peça està fent i si l'ha provada.|Cada alumno/a hace el «Recuerda», la teoría y las tres piezas: la nave con las flechas, la fábrica de meteoritos y los choques con vidas. Haced la pausa activa todos juntos cuando la mayoría llegue. Después, el bloque que acaba la partida y la pregunta del clon que no se borra. Pasea y pregunta a cada alumno/a qué pieza está haciendo y si la ha probado.",
        diu: ["Quina peça estàs fent? Ja l'has provada amb «Comença»?|¿Qué pieza estás haciendo? ¿Ya la has probado con «Empieza»?",
          "Als xocs: on va el «si toca la nau», dins o fora del bucle de baixar?|En los choques: ¿dónde va el «si toca la nave», dentro o fuera del bucle de bajar?",
          "Recorda: «Comença» per provar amb les fletxes, «Comprova» perquè les tecles es premin soles.|Recuerda: «Empieza» para probar con las flechas, «Comprueba» para que las teclas se pulsen solas."],
        slides: ['s10', 's11'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, la missió, les quatre targetes de «Descobreix», ordenar les peces, «El pla en paper» (ja fet: «Ho hem fet!»), les peces 1 a 3, la pausa activa, el bloc que acaba la partida i la pregunta del clon que no s'esborra.|De «Recuerda» hasta «Investiga»: las preguntas de repaso, la misión, las cuatro tarjetas de «Descubre», ordenar las piezas, «El plan en papel» (ya hecho: «¡Lo hemos hecho!»), las piezas 1 a 3, la pausa activa, el bloque que acaba la partida y la pregunta del clon que no se borra.", org: "Individual|Individual" },
      { min: 12, t: "Crea i prova creuada|Crea y prueba cruzada", fase: 'crea',
        fa: "Cada alumne/a completa el seu videojoc al pas «Crea»: velocitat variable, límit i fi de partida, i hi posa el seu toc personal. Quan l'app el dona per bo, el desa. Després, les parelles canvien d'ordinador: cadascú prova el videojoc de l'altre dues vegades, sense ajuda, i respon la valoració. Torneu al lloc i que cadascú faci un canvi a partir del que li han dit.|Cada alumno/a completa su videojuego en el paso «Crea»: velocidad variable, límite y fin de partida, y le pone su toque personal. Cuando la app lo da por bueno, lo guarda. Después, las parejas cambian de ordenador: cada uno prueba el videojuego del otro dos veces, sin ayuda, y responde la valoración. Volved al sitio y que cada uno haga un cambio a partir de lo que le han dicho.",
        diu: ["Quan provis el videojoc del company/a, l'autor/a mira i no diu res: és la prova de veritat.|Cuando pruebes el videojuego del compañero/a, el autor/a mira y no dice nada: es la prueba de verdad.",
          "Digues una cosa que t'ha agradat i una que milloraries.|Di una cosa que te ha gustado y una que mejorarías.",
          "Què canviaràs del teu videojoc amb el que t'han dit?|¿Qué cambiarás de tu videojuego con lo que te han dicho?"],
        slides: ['s12', 's13'], app: "Passos «Crea» (Esquiva els meteorits, es desa als projectes) i la valoració del videojoc del company/a.|Pasos «Crea» (Esquiva los meteoritos, se guarda en los proyectos) y la valoración del videojuego del compañero/a.", org: "Individual i després per parelles creuades|Individual y después por parejas cruzadas" },
      { min: 8, t: "Mostra, tancament i tiquet|Muestra, cierre y ticket", fase: 'tancament',
        fa: "Projecta dos o tres videojocs voluntaris: l'autor/a explica una peça i un canvi que ha fet després de la prova. Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Proyecta dos o tres videojuegos voluntarios: el autor/a explica una pieza y un cambio que ha hecho después de la prueba. Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Quin canvi has fet després que el provés el company/a?|¿Qué cambio has hecho después de que lo probara el compañero/a?",
          "Quina part de la unitat t'ha costat més: l'atzar, els clons o la dificultat?|¿Qué parte de la unidad te ha costado más: el azar, los clones o la dificultad?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Ho vol programar tot de cop i, quan no funciona, no sap on és l'error.|Lo quiere programar todo de golpe y, cuando no funciona, no sabe dónde está el error.",
        "Que torni a la fitxa del pla i marqui quines peces ja funcionen. Que provi les peces una a una (pot amagar les altres de moment).|Que vuelva a la ficha del plan y marque qué piezas ya funcionan. Que pruebe las piezas una a una (puede esconder las otras de momento)."],
      ["Quan un meteorit toca la nau, perd totes les vides de cop.|Cuando un meteorito toca la nave, pierde todas las vidas de golpe.",
        "Pregunta què fa el clon després de restar la vida. Continua baixant i tocant? Quin bloc el treu de seguida?|Pregunta qué hace el clon después de restar la vida. ¿Sigue bajando y tocando? ¿Qué bloque lo quita enseguida?"],
      ["La partida s'acaba només començar, perquè la nau mira les vides abans que ningú les posi a 3.|La partida se acaba nada más empezar, porque la nave mira las vidas antes de que nadie las ponga en 3.",
        "Que miri quin guió posa vides a 3 i quin comprova si vides < 1. Si els dos comencen alhora, el valor de començar ha d'anar abans del bucle que comprova, al mateix guió.|Que mire qué guion pone vidas en 3 y cuál comprueba si vidas < 1. Si los dos empiezan a la vez, el valor de empezar tiene que ir antes del bucle que comprueba, en el mismo guion."],
      ["La nau surt de l'escenari per un costat i es perd.|La nave sale del escenario por un lado y se pierde.",
        "Fes-li pensar a quina x és la vora (240). Pot afegir a cada fletxa un «si x > 220, posa x a 220» o tornar-la al mig amb la bandera verda.|Hazle pensar en qué x está el borde (240). Puede añadir en cada flecha un «si x > 220, pon x a 220» o devolverla al centro con la bandera verde."],
      ["Com a provador/a, diu només «m'agrada» o «és dolent».|Como probador/a, dice solo «me gusta» o «es malo».",
        "Dona-li les targetes del provador/a: què has fet primer? On t'has encallat? Què canviaries? Recorda que una opinió útil diu el perquè.|Dale las tarjetas del probador/a: ¿qué has hecho primero? ¿Dónde te has atascado? ¿Qué cambiarías? Recuerda que una opinión útil dice el porqué."]
    ],
    diff: {
      mes: "Afegir una segona fàbrica de clons: estrelles que cauen més a poc a poc i, si la nau les toca, sumen una vida (com a molt 5). O un missatge de «Nivell 2!» quan la velocitat arriba al límit. Després, demanar a dues persones que el provin i comparar-ne les respostes.|Añadir una segunda fábrica de clones: estrellas que caen más despacio y, si la nave las toca, suman una vida (como mucho 5). O un mensaje de «¡Nivel 2!» cuando la velocidad llega al límite. Después, pedir a dos personas que lo prueben y comparar sus respuestas.",
      menys: "Fer les peces amb la fitxa del pla al costat i marcar cada peça quan funcioni. Al pas «Crea», fer primer només la velocitat variable i la fi de partida, i deixar el límit per al final amb ajuda. A la prova creuada, fer de provador/a amb les targetes a la mà.|Hacer las piezas con la ficha del plan al lado y marcar cada pieza cuando funcione. En el paso «Crea», hacer primero solo la velocidad variable y el fin de partida, y dejar el límite para el final con ayuda. En la prueba cruzada, hacer de probador/a con las tarjetas en la mano."
    },
    aval: {
      ticket: ["Digues les peces del teu videojoc en ordre.|Di las piezas de tu videojuego en orden.",
        "Què has canviat després que el provés el company/a, i per què?|¿Qué has cambiado después de que lo probara el compañero/a, y por qué?"],
      rubric: [
        ["El videojoc funciona|El videojuego funciona", "Nau, meteorits a l'atzar, xocs amb vides, punts, velocitat amb límit i fi de partida funcionen junts.|Nave, meteoritos al azar, choques con vidas, puntos, velocidad con límite y fin de partida funcionan juntos.", "Funcionen la nau i els meteorits, però falta o falla alguna regla (vides, límit o fi).|Funcionan la nave y los meteoritos, pero falta o falla alguna regla (vidas, límite o fin)."],
        ["Construir tros a tros|Construir trozo a trozo", "Prova cada peça abans de la següent i troba ell/a mateix/a on és un error.|Prueba cada pieza antes de la siguiente y encuentra él/ella mismo/a dónde está un error.", "Programa diverses peces de cop i necessita ajuda per trobar on falla.|Programa varias piezas de golpe y necesita ayuda para encontrar dónde falla."],
        ["Provar i millorar|Probar y mejorar", "Dona una valoració amable i amb el perquè, i fa un canvi al seu videojoc a partir de la que rep.|Da una valoración amable y con el porqué, y hace un cambio en su videojuego a partir de la que recibe.", "Prova el videojoc del company/a, però la valoració és molt general o no canvia res del seu.|Prueba el videojuego del compañero/a, pero la valoración es muy general o no cambia nada del suyo."]
      ]
    },
    casa: "A casa, ensenyeu el videojoc a algú de la família (és als projectes de l'app). Mireu-lo provar sense ajudar-lo i pregunteu-li què ha estat massa fàcil o massa difícil. Si voleu, canvieu el límit de velocitat o les vides.|En casa, enseñad el videojuego a alguien de la familia (está en los proyectos de la app). Miradlo probar sin ayudarle y preguntadle qué ha sido demasiado fácil o demasiado difícil. Si queréis, cambiad el límite de velocidad o las vidas.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: esquiva els meteorits|Proyecto: esquiva los meteoritos", x: "Avui acabem el videojoc per a la Nit de les Estrelles.|Hoy acabamos el videojuego para la Noche de las Estrellas.",
        nota: "Objectiu: cada alumne/a desarà el seu videojoc i un company/a el provarà.|Objetivo: cada alumno/a guardará su videojuego y un compañero/a lo probará." },
      { id: 's2', k: 'pregunta', t: "Què ja sabem fer?|¿Qué ya sabemos hacer?", punts: ["Moure la nau amb les fletxes|Mover la nave con las flechas", "Clons a l'atzar|Clones al azar", "Punts i vides|Puntos y vidas", "Velocitat que creix|Velocidad que crece"],
        nota: "Que diguin en quina sessió van aprendre cada cosa (unitat 3, 6 i aquesta unitat).|Que digan en qué sesión aprendieron cada cosa (unidad 3, 6 y esta unidad)." },
      { id: 's3', k: 'repas', t: "Recordem|Recordemos", punts: ["Velocitat 4, suma 1, límit 12: després de 20 meteorits, 12.|Velocidad 4, suma 1, límite 12: después de 20 meteoritos, 12.", "La fàbrica s'amaga; el clon es mostra quan és al seu lloc.|La fábrica se esconde; el clon se muestra cuando está en su sitio.", "Al final, el clon s'esborra.|Al final, el clon se borra."],
        nota: "Dues preguntes ràpides a mà alçada abans de començar.|Dos preguntas rápidas a mano alzada antes de empezar." },
      { id: 's4', k: 'anim', t: "Les peces del videojoc|Las piezas del videojuego", anim: 'g7pla', x: "Fes una peça, prova-la… i la següent!|Haz una pieza, pruébala… ¡y la siguiente!",
        nota: "Escriu les sis peces a la pissarra; durant la sessió, demana a qui vagi acabant que les vagi marcant a la seva fitxa.|Escribe las seis piezas en la pizarra; durante la sesión, pide a quien vaya acabando que las vaya marcando en su ficha." },
      { id: 's5', k: 'concepte', t: "Les regles del videojoc|Las reglas del videojuego", punts: ["Fletxes: la nau es mou a l'esquerra i a la dreta.|Flechas: la nave se mueve a la izquierda y a la derecha.", "Meteorit esquivat (arriba a baix): +1 punt.|Meteorito esquivado (llega abajo): +1 punto.", "Meteorit que toca la nau: −1 vida.|Meteorito que toca la nave: −1 vida.", "Sense vides: «Fi!» i s'atura tot.|Sin vidas: «¡Fin!» y se para todo."],
        nota: "Deixa-la projectada mentre omplen el pla en paper.|Déjala proyectada mientras rellenan el plan en papel." },
      { id: 's6', k: 'media', t: "Així queda el videojoc|Así queda el videojuego", x: "Aquí la nau es mou sola; al vostre, amb les fletxes.|Aquí la nave se mueve sola; en el vuestro, con las flechas.",
        media: { k: 'stage', w: GW, prog: GAME, varNames: VN, time: 14 },
        nota: "Fes notar els números de punts, vides i velocitat. Pregunta quan creuen que s'acabarà.|Haz notar los números de puntos, vidas y velocidad. Pregunta cuándo creen que se acabará." },
      { id: 's7', k: 'concepte', t: "Compte amb els xocs!|¡Cuidado con los choques!", punts: ["El «si toca la nau» va dins del bucle de baixar.|El «si toca la nave» va dentro del bucle de bajar.", "Si la toca: vides −1, so i esborra aquest clon.|Si la toca: vidas −1, sonido y borra este clon.", "Si no s'esborra, treu una vida a cada pas!|Si no se borra, ¡quita una vida a cada paso!"],
        nota: "Simula-ho: camina tocant una cadira i resta una vida a cada pas en veu alta. Riuran, i no se n'oblidaran.|Simúlalo: camina tocando una silla y resta una vida a cada paso en voz alta. Se reirán, y no se les olvidará." },
      { id: 's8', k: 'activitat', t: "El pla en paper|El plan en papel", timer: 10, punts: ["Dibuixa l'escenari: la nau i per on cauen els meteorits.|Dibuja el escenario: la nave y por dónde caen los meteoritos.", "Regles: punts, vides i fi.|Reglas: puntos, vidas y fin.", "Dificultat: velocitat inicial, quant puja i límit.|Dificultad: velocidad inicial, cuánto sube y límite.", "El teu toc: fons, so, frase final…|Tu toque: fondo, sonido, frase final…"],
        nota: "Als 6 minuts, que expliquin el pla per parelles amb una pregunta de les targetes del provador/a.|A los 6 minutos, que expliquen el plan por parejas con una pregunta de las tarjetas del probador/a." },
      { id: 's9', k: 'pregunta', t: "Preguntes per al pla|Preguntas para el plan", punts: ["Amb quantes vides comença? Per què?|¿Con cuántas vidas empieza? ¿Por qué?", "Quin límit de velocitat posaràs?|¿Qué límite de velocidad pondrás?", "Què el farà diferent dels altres?|¿Qué lo hará diferente de los demás?"],
        nota: "No hi ha respostes bones o dolentes: les comprovaran quan el provin.|No hay respuestas buenas o malas: las comprobarán cuando lo prueben." },
      { id: 's10', k: 'activitat', t: "Peça a peça|Pieza a pieza", timer: 18, punts: ["Peça 1: la nau amb les fletxes.|Pieza 1: la nave con las flechas.", "Peça 2: la fàbrica de meteorits.|Pieza 2: la fábrica de meteoritos.", "Peça 3: els xocs i les vides.|Pieza 3: los choques y las vidas.", "Després: el bloc que acaba la partida.|Después: el bloque que acaba la partida."],
        nota: "A la pausa activa, feu-la tots junts. Passeja preguntant «quina peça fas i l'has provada?».|En la pausa activa, hacedla todos juntos. Pasea preguntando «¿qué pieza haces y la has probado?»." },
      { id: 's11', k: 'repte', t: "Prova cada peça|Prueba cada pieza", punts: ["«Comença»: prova-ho tu amb les fletxes.|«Empieza»: pruébalo tú con las flechas.", "«Comprova»: les tecles es premen soles.|«Comprueba»: las teclas se pulsan solas.", "Si falla, mira només la peça nova.|Si falla, mira solo la pieza nueva."],
        nota: "Si algú s'encalla als xocs, recorda-li la diapositiva 7.|Si alguien se atasca en los choques, recuérdale la diapositiva 7." },
      { id: 's12', k: 'activitat', t: "Crea: el teu videojoc|Crea: tu videojuego", timer: 6, punts: ["Els clons baixen amb la variable velocitat.|Los clones bajan con la variable velocidad.", "La velocitat creix amb un límit.|La velocidad crece con un límite.", "Sense vides: «Fi!» i atura tot.|Sin vidas: «¡Fin!» y para todo.", "Hi poses el teu toc i el desas.|Le pones tu toque y lo guardas."],
        nota: "L'app comprova que hi hagi la velocitat, el límit i la fi. La resta és lliure: anima'ls a personalitzar-lo.|La app comprueba que estén la velocidad, el límite y el fin. El resto es libre: anímalos a personalizarlo." },
      { id: 's13', k: 'activitat', t: "Prova creuada|Prueba cruzada", timer: 6, punts: ["Canvieu d'ordinador amb la vostra parella.|Cambiad de ordenador con vuestra pareja.", "Prova el videojoc dues vegades, sense ajuda.|Prueba el videojuego dos veces, sin ayuda.", "Respon la valoració amb sinceritat i amabilitat.|Responde la valoración con sinceridad y amabilidad.", "Torna al teu lloc i fes un canvi.|Vuelve a tu sitio y haz un cambio."],
        nota: "L'autor/a mira sense parlar: és la part més difícil i la més útil.|El autor/a mira sin hablar: es la parte más difícil y la más útil." },
      { id: 's14', k: 'media', t: "Mostra de videojocs|Muestra de videojuegos", x: "Dos o tres voluntaris ensenyen el seu videojoc i un canvi que hi han fet.|Dos o tres voluntarios enseñan su videojuego y un cambio que le han hecho.",
        media: { k: 'stage', w: GW, prog: GAME, varNames: VN, time: 14 },
        nota: "Si no hi ha voluntaris, deixa aquesta demo en marxa i comenteu-ne les peces entre tots.|Si no hay voluntarios, deja esta demo en marcha y comentad sus piezas entre todos." },
      { id: 's15', k: 'resum', t: "Què hem après a la unitat|Qué hemos aprendido en la unidad", punts: ["L'atzar fa que cada partida sigui diferent.|El azar hace que cada partida sea diferente.", "Els clons: un personatge, molts meteorits.|Los clones: un personaje, muchos meteoritos.", "La dificultat creix amb una variable i un límit.|La dificultad crece con una variable y un límite.", "Un videojoc es fa tros a tros i es prova amb altres.|Un videojuego se hace trozo a trozo y se prueba con otros."],
        nota: "Anuncia la unitat 8: cadascú inventarà el seu propi videojoc des de zero.|Anuncia la unidad 8: cada uno inventará su propio videojuego desde cero." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Les peces del teu videojoc, en ordre.|Las piezas de tu videojuego, en orden.", "Què has canviat després de la prova, i per què?|¿Qué has cambiado después de la prueba, y por qué?"],
        nota: "Guarda les fitxes del pla: seran un bon punt de partida per al projecte final.|Guarda las fichas del plan: serán un buen punto de partida para el proyecto final." }
    ],
    print: [
      { id: 'p1', t: "El pla del meu videojoc|El plan de mi videojuego", k: 'fitxa',
        intro: "Omple el pla abans de programar. Després, marca cada peça quan funcioni.|Rellena el plan antes de programar. Después, marca cada pieza cuando funcione.",
        items: [
          { q: "Dibuixa l'escenari: el fons, la nau i per on cauen els meteorits.|Dibuja el escenario: el fondo, la nave y por dónde caen los meteoritos." },
          { q: "Regles: guanyo un punt quan ________. Perdo una vida quan ________. Començo amb ___ vides. Quan no en queden, la nau diu «________».|Reglas: gano un punto cuando ________. Pierdo una vida cuando ________. Empiezo con ___ vidas. Cuando no quedan, la nave dice «________»." },
          { q: "Dificultat: la velocitat comença a ___, puja ___ a cada meteorit i el límit és ___.|Dificultad: la velocidad empieza en ___, sube ___ en cada meteorito y el límite es ___.", sol: "Per exemple: comença a 4, puja 1, límit 12.|Por ejemplo: empieza en 4, sube 1, límite 12." },
          { q: "El meu toc personal (fons, sons, colors, una frase…): ________|Mi toque personal (fondo, sonidos, colores, una frase…): ________" },
          { q: "Peces que funcionen: □ nau □ fàbrica □ xocs i vides □ punts □ velocitat amb límit □ fi de partida|Piezas que funcionan: □ nave □ fábrica □ choques y vidas □ puntos □ velocidad con límite □ fin de partida", sol: "Cada alumne/a marca les seves.|Cada alumno/a marca las suyas." }
        ] },
      { id: 'p2', t: "Targetes del provador/a|Tarjetas del probador/a", k: 'targetes',
        intro: "Una tira per parella. El provador/a les llegeix després de provar el videojoc; l'autor/a escolta sense discutir.|Una tira por pareja. El probador/a las lee después de probar el videojuego; el autor/a escucha sin discutir.",
        items: [
          { t: "Què has entès que havies de fer? 🎯|¿Qué has entendido que tenías que hacer? 🎯", n: 1 },
          { t: "On t'has encallat o t'has equivocat? 🤔|¿Dónde te has atascado o te has equivocado? 🤔", n: 1 },
          { t: "Era massa fàcil, massa difícil o just? ⚖️|¿Era demasiado fácil, demasiado difícil o justo? ⚖️", n: 1 },
          { t: "Què t'ha agradat més? ⭐|¿Qué te ha gustado más? ⭐", n: 1 },
          { t: "Què canviaries, i per què? 🔧|¿Qué cambiarías, y por qué? 🔧", n: 1 }
        ] }
    ]
  };

  return { 'g7-1': G1, 'g7-2': G2, 'g7-3': G3, 'g7-4': G4 };
})());

/* ── unitat 8 ── */
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
          diu: ["Aquest cop no farem els reptes d'un altre: inventareu el vostre videojoc!|Esta vez no haremos los retos de otro: ¡inventaréis vuestro videojuego!",
            "Penseu en un videojoc que conegueu: qui és el protagonista? Què ha d'aconseguir?|Pensad en un videojuego que conozcáis: ¿quién es el protagonista? ¿Qué tiene que conseguir?"],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Les peces i les regles d'un videojoc|Las piezas y las reglas de un videojuego", fase: 'teoria',
          fa: "Presenta les quatre peces amb l'animació i busqueu-les entre tots en la demo del gat i la moneda. Fes que diguin la regla de la demo amb la forma «si… → …» i escriu-la a la pissarra al costat dels blocs que la fan. Explica com s'acaba un videojoc (guanyar i perdre), com es fa el pla en paper i per què cal començar per una versió petita.|Presenta las cuatro piezas con la animación y buscadlas entre todos en la demo del gato y la moneda. Haz que digan la regla de la demo con la forma «si… → …» y escríbela en la pizarra al lado de los bloques que la hacen. Explica cómo se termina un videojuego (ganar y perder), cómo se hace el plan en papel y por qué hay que empezar por una versión pequeña.",
          diu: ["Quina és la regla d'aquest videojoc? Digueu-la començant per «si…».|¿Cuál es la regla de este videojuego? Decidla empezando por «si…».",
            "Com sabem que hem guanyat? I que hem perdut?|¿Cómo sabemos que hemos ganado? ¿Y que hemos perdido?",
            "Primer una versió 1 que funcioni. Les idees grans, per a després!|Primero una versión 1 que funcione. ¡Las ideas grandes, para después!"],
          slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Desconnectat: el videojoc de paper|Desconectado: el videojuego de papel", fase: 'desconnectat',
          fa: "Cada alumne/a dibuixa a la graella el pla del seu videojoc: l'escenari, on comença cada personatge i les regles (pot fer servir les targetes de regles o escriure'n de pròpies). Després, en parelles, el company/a «prova» el prototip de paper: mou el protagonista amb el dit mentre l'autor/a mou l'enemic i apunta punts i vides. Si una regla no s'entén, l'autor/a la reescriu.|Cada alumno/a dibuja en la cuadrícula el plan de su videojuego: el escenario, dónde empieza cada personaje y las reglas (puede usar las tarjetas de reglas o escribir unas propias). Después, por parejas, el compañero/a «prueba» el prototipo de papel: mueve el protagonista con el dedo mientras el autor/a mueve el enemigo y apunta puntos y vidas. Si una regla no se entiende, el autor/a la reescribe.",
          diu: ["Cada quadre de la graella fa 60 punts de l'escenari: on comença el vostre protagonista?|Cada cuadro de la cuadrícula mide 60 puntos del escenario: ¿dónde empieza vuestro protagonista?",
            "Si el company/a no entén una regla, no és culpa seva: l'heu d'escriure més clara.|Si el compañero/a no entiende una regla, no es culpa suya: la tenéis que escribir más clara.",
            "Hi ha una manera de guanyar i una de perdre?|¿Hay una manera de ganar y una de perder?"],
          slides: ['s10', 's11'], app: "Cap: activitat sense pantalla. El pla es guarda a la carpeta per a les setmanes vinents.|Ninguna: actividad sin pantalla. El plan se guarda en la carpeta para las próximas semanas.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «Un videojoc de paper» poden tocar «Ho hem fet!», perquè ja l'han fet a classe. Al videojoc d'en Vuit, deixa que el provin una estona abans de respondre què hi falta. Fes la pausa activa tots junts.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «Un videojuego de papel» pueden tocar «¡Lo hemos hecho!», porque ya lo han hecho en clase. En el videojuego de Vuit, deja que lo prueben un rato antes de responder qué le falta. Haced la pausa activa todos juntos.",
          diu: ["Al videojoc de la Numi, quin bloc fa que es pugui perdre? Busqueu el «si».|En el videojuego de Numi, ¿qué bloque hace que se pueda perder? Buscad el «si».",
            "El videojoc d'en Vuit s'acaba algun dia? Què li posaríeu?|¿El videojuego de Vuit se termina algún día? ¿Qué le pondríais?"],
          slides: ['s12', 's13'], app: "Dels dos «Recorda» fins a la «Pausa activa»: les històries, les targetes de «Descobreix», la regla bona, ordenar els passos, el videojoc de paper (ja fet), el bloc per perdre, el videojoc d'en Vuit i què li falta.|De los dos «Recuerda» hasta la «Pausa activa»: las historias, las tarjetas de «Descubre», la regla buena, ordenar los pasos, el videojuego de papel (ya hecho), el bloque para perder, el videojuego de Vuit y qué le falta.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: les tres regles|Retos: las tres reglas", fase: 'ordinador',
          fa: "Els tres reptes són les regles que tindran gairebé tots els videojocs: recollir, perdre una vida i guanyar. Si veus que algú no posa «espera» després de perdre una vida, deixa que vegi com les vides baixen de cop i pregunta-li per què.|Los tres retos son las reglas que tendrán casi todos los videojuegos: recoger, perder una vida y ganar. Si ves que alguien no pone «espera» después de perder una vida, deja que vea cómo las vidas bajan de golpe y pregúntale por qué.",
          diu: ["Per què els punts pugen sense parar si l'estrella no se'n va?|¿Por qué los puntos suben sin parar si la estrella no se va?",
            "Quantes vegades es comprova un «si» que és dins d'un «per sempre»?|¿Cuántas veces se comprueba un «si» que está dentro de un «por siempre»?"],
          slides: ['s14'], app: "Els tres reptes de «Reptes»: la regla de recollir, la de perdre una vida i la de guanyar.|Los tres retos de «Retos»: la regla de recoger, la de perder una vida y la de ganar.", org: "Individual|Individual" },
        { min: 6, t: "Crea: les peces i la versió 1|Crea: las piezas y la versión 1", fase: 'crea',
          fa: "Amb el pla de paper al costat, cada alumne/a tria a l'app el protagonista, el premi, l'enemic i el fons, i desa la tria. Després programa la versió 1: el protagonista es mou amb les fletxes i diu el nom del videojoc. Recorda'ls que l'han de desar: la setmana vinent continuaran des d'aquí.|Con el plan de papel al lado, cada alumno/a elige en la app el protagonista, el premio, el enemigo y el fondo, y guarda la elección. Después programa la versión 1: el protagonista se mueve con las flechas y dice el nombre del videojuego. Recuérdales que la tienen que guardar: la semana que viene continuarán desde aquí.",
          diu: ["Trieu les peces que heu dibuixat al pla.|Elegid las piezas que habéis dibujado en el plan.",
            "Quan funcioni, toqueu Comprova i desa-ho: és la versió 1!|Cuando funcione, tocad Comprueba y guardadlo: ¡es la versión 1!"],
          slides: ['s15'], app: "Pas «Tria les peces del teu videojoc» i pas «Crea»: el meu videojoc, versió 1.|Paso «Elige las piezas de tu videojuego» y paso «Crea»: mi videojuego, versión 1.", org: "Individual|Individual" },
        { min: 2, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les idees de la sessió amb el resum i, a la porta, fes a cada alumne/a una pregunta del tiquet. Recull els plans de paper a les carpetes.|Repasa las ideas de la sesión con el resumen y, en la puerta, haz a cada alumno/a una pregunta del ticket. Recoge los planes de papel en las carpetas.",
          diu: ["Digueu-me una regla del vostre videojoc començant per «si…».|Decidme una regla de vuestro videojuego empezando por «si…»."],
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
          "Recorda-li els guions «Quan premo la tecla…» de la unitat 3, o un «si tecla premuda» dins d'un «per sempre». Que en provi un i després copiï la idea per a les altres fletxes.|Recuérdale los guiones «Al pulsar la tecla…» de la unidad 3, o un «si tecla pulsada» dentro de un «por siempre». Que pruebe uno y después copie la idea para las otras flechas."]
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
          ["Versió 1|Versión 1", "El protagonista es mou amb les fletxes i el projecte queda desat.|El protagonista se mueve con las flechas y el proyecto queda guardado.", "Necessita ajuda per fer servir els guions de les tecles.|Necesita ayuda para usar los guiones de las teclas."]
        ]
      },
      casa: "A casa, feu el videojoc de paper amb algú de la família (pas «Un videojoc de paper» de l'app): l'alumne/a explica les regles i l'altra persona el prova movent les peces. Si cal, milloreu el pla abans de la setmana vinent.|En casa, haced el videojuego de papel con alguien de la familia (paso «Un videojuego de papel» de la app): el alumno/a explica las reglas y la otra persona lo prueba moviendo las piezas. Si hace falta, mejorad el plan antes de la semana que viene.",
      slides: [
        { id: 's1', k: 'portada', t: 'La idea i el pla|La idea y el plan', x: "Comença el projecte final: el teu propi videojoc!|Empieza el proyecto final: ¡tu propio videojuego!",
          nota: "Explica que és l'última unitat del curs i que tot el que han après hi servirà.|Explica que es la última unidad del curso y que todo lo que han aprendido servirá." },
        { id: 's2', k: 'pregunta', t: 'Què té un videojoc?|¿Qué tiene un videojuego?', x: "Pensa en un videojoc que coneguis: qui és el protagonista i què ha d'aconseguir?|Piensa en un videojuego que conozcas: ¿quién es el protagonista y qué tiene que conseguir?",
          nota: "Recull respostes sense jutjar cap videojoc. Anota a la pissarra paraules com «personatge», «punts», «vides», «enemics».|Recoge respuestas sin juzgar ningún videojuego. Anota en la pizarra palabras como «personaje», «puntos», «vidas», «enemigos»." },
        { id: 's3', k: 'concepte', t: 'El pla de les quatre setmanes|El plan de las cuatro semanas', punts: ['1. La idea i el pla|1. La idea y el plan', '2. Construir-lo peça a peça|2. Construirlo pieza a pieza', '3. Provar-lo amb un company/a i millorar-lo|3. Probarlo con un compañero/a y mejorarlo', '4. Presentar-lo a la Fira de Videojocs|4. Presentarlo en la Feria de Videojuegos'],
          nota: "Deixa clar que l'app desa cada versió i que cada setmana continuaran des d'on ho van deixar.|Deja claro que la app guarda cada versión y que cada semana continuarán desde donde lo dejaron." },
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
          diu: ["Quina és la peça següent del vostre pla, després que el protagonista es mogui?|¿Cuál es la pieza siguiente de vuestro plan, después de que el protagonista se mueva?"],
          slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Guions, inicialitzar, nivells i clons|Guiones, inicializar, niveles y clones", fase: 'teoria',
          fa: "Mostra que cada personatge té els seus guions i que tots comencen alhora. Amb la demo del cotxe, explica per què el guió de la bandera ho posa tot a lloc abans del «per sempre». Ensenya com un nivell canvia el fons i un número (la velocitat) i com un sol meteorit amb clons fa una pluja sencera.|Muestra que cada personaje tiene sus guiones y que todos empiezan a la vez. Con la demo del coche, explica por qué el guion de la bandera lo pone todo en su sitio antes del «por siempre». Enseña cómo un nivel cambia el fondo y un número (la velocidad) y cómo un solo meteorito con clones hace una lluvia entera.",
          diu: ["Què passaria si no poséssim els punts a 0 en començar?|¿Qué pasaría si no pusiéramos los puntos a 0 al empezar?",
            "Quin número fa que el gat corri més al nivell 2?|¿Qué número hace que el gato corra más en el nivel 2?",
            "Quants meteorits hem dibuixat? I quants en veiem?|¿Cuántos meteoritos hemos dibujado? ¿Y cuántos vemos?"],
          slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Desconnectat: el videojoc humà|Desconectado: el videojuego humano", fase: 'desconnectat',
          fa: "En grups de 4, cada alumne/a rep una targeta amb un paper (protagonista, moneda, enemic, marcador) i el seu guió. A la teva senyal («bandera verda!»), tots fan el seu guió alhora dins del rectangle de terra: el protagonista camina, l'enemic el segueix a poc a poc i el marcador apunta punts i vides. Primer ho feu sense la targeta d'inicialitzar (el marcador comença amb els números de l'anterior) i després amb ella. Comenteu què ha canviat. Al final, cadascú omple la fitxa de les regles.|En grupos de 4, cada alumno/a recibe una tarjeta con un papel (protagonista, moneda, enemigo, marcador) y su guion. A tu señal («¡bandera verde!»), todos hacen su guion a la vez dentro del rectángulo del suelo: el protagonista camina, el enemigo lo sigue despacio y el marcador apunta puntos y vidas. Primero lo hacéis sin la tarjeta de inicializar (el marcador empieza con los números del anterior) y después con ella. Comentad qué ha cambiado. Al final, cada uno rellena la ficha de las reglas.",
          diu: ["Tothom comença alhora quan dic «bandera verda»: com a l'escenari!|Todo el mundo empieza a la vez cuando digo «bandera verde»: ¡como en el escenario!",
            "Marcador, amb quants punts comences? Per què?|Marcador, ¿con cuántos puntos empiezas? ¿Por qué?",
            "L'enemic camina sempre a poc a poc: si anés corrent, seria just?|El enemigo camina siempre despacio: si fuera corriendo, ¿sería justo?"],
          slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 amb papers|Grupos de 4 con papeles" },
        { min: 10, t: "A l'ordinador: descobreix i arregla|En el ordenador: descubre y arregla", fase: 'ordinador',
          fa: "Cada alumne/a fa els passos fins a la pausa activa. Al bug del marcador que sempre marca 0, deixa que el provin abans de tocar el bloc. Al meteorit que només cau una vegada, recorda'ls la condició «comparar números» de la unitat 5.|Cada alumno/a hace los pasos hasta la pausa activa. En el bug del marcador que siempre marca 0, deja que lo prueben antes de tocar el bloque. En el meteorito que solo cae una vez, recuérdales la condición «comparar números» de la unidad 5.",
          diu: ["Llegiu el «per sempre» en veu alta: què fa a cada volta?|Leed el «por siempre» en voz alta: ¿qué hace en cada vuelta?",
            "On és el meteorit quan ja no el veiem? Quina y té?|¿Dónde está el meteorito cuando ya no lo vemos? ¿Qué y tiene?"],
          slides: ['s11'], app: "Dels «Recorda» fins a la «Pausa activa»: la història, les targetes de «Descobreix», ordenar el guió, on va «posa punts a 0», el marcador que sempre marca 0 i el meteorit que només cau una vegada.|De los «Recuerda» hasta la «Pausa activa»: la historia, las tarjetas de «Descubre», ordenar el guion, dónde va «pon puntos a 0», el marcador que siempre marca 0 y el meteorito que solo cae una vez.", org: "Individual|Individual" },
        { min: 8, t: "Reptes: tres peces noves|Retos: tres piezas nuevas", fase: 'ordinador',
          fa: "Feu la pausa activa i deixa'ls fer els tres reptes: el nivell 2, la velocitat que creix i la pluja d'estrelles. Explica que són peces que poden copiar després al seu videojoc si encaixen amb el seu pla.|Haced la pausa activa y deja que hagan los tres retos: el nivel 2, la velocidad que crece y la lluvia de estrellas. Explica que son piezas que pueden copiar después en su videojuego si encajan con su plan.",
          diu: ["Aquesta peça la necessita el vostre videojoc? Si sí, recordeu com l'heu feta.|¿Esta pieza la necesita vuestro videojuego? Si sí, recordad cómo la habéis hecho."],
          slides: ['s12', 's13'], app: "«Pausa activa» i els tres reptes: el nivell 2, cada cop més de pressa i la pluja d'estrelles.|«Pausa activa» y los tres retos: el nivel 2, cada vez más deprisa y la lluvia de estrellas.", org: "Individual|Individual" },
        { min: 15, t: "Crea: el meu videojoc, peça a peça|Crea: mi videojuego, pieza a pieza", fase: 'crea',
          fa: "És el moment central de la sessió. Cada alumne/a obre la seva versió 1 i hi afegeix les peces del pla en ordre, provant-les una a una amb Comença. Deixa projectada la llista de peces. Quan el videojoc tingui una variable, una regla amb «si» i almenys dos personatges programats, el poden comprovar i desar. Qui acabi pot afegir-hi extres (sons, nivells, clons).|Es el momento central de la sesión. Cada alumno/a abre su versión 1 y le añade las piezas del plan en orden, probándolas una a una con Empieza. Deja proyectada la lista de piezas. Cuando el videojuego tenga una variable, una regla con «si» y al menos dos personajes programados, lo pueden comprobar y guardar. Quien acabe puede añadir extras (sonidos, niveles, clones).",
          diu: ["Una peça, la provo. Una altra peça, la provo.|Una pieza, la pruebo. Otra pieza, la pruebo.",
            "Quin personatge ha de tenir aquesta regla?|¿Qué personaje tiene que tener esta regla?",
            "Abans de sortir, desa'l: la setmana vinent el provarà un company/a.|Antes de salir, guárdalo: la semana que viene lo probará un compañero/a."],
          slides: ['s14', 's15'], app: "Pas «Ara, el teu videojoc!» i pas «Crea»: el meu videojoc, versió 2.|Paso «¡Ahora, tu videojuego!» y paso «Crea»: mi videojuego, versión 2.", org: "Individual|Individual" },
        { min: 2, t: "Tancament|Cierre", fase: 'tancament',
          fa: "Repassa les idees de la sessió i fes les preguntes del tiquet. Assegura't que tothom ha desat la versió 2.|Repasa las ideas de la sesión y haz las preguntas del ticket. Asegúrate de que todo el mundo ha guardado la versión 2.",
          diu: ["Quina peça us ha costat més? Com l'heu arreglada?|¿Qué pieza os ha costado más? ¿Cómo la habéis arreglado?"],
          slides: ['s16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Posa «posa punts a 0» (o «posa vides a 3») dins del «per sempre» i els números no canvien mai.|Pone «pon puntos a 0» (o «pon vidas a 3») dentro del «por siempre» y los números no cambian nunca.",
          "Que llegeixi el bucle en veu alta i compti què passa a la segona volta. On hauria d'anar el bloc perquè passi una sola vegada?|Que lea el bucle en voz alta y cuente qué pasa en la segunda vuelta. ¿Dónde debería ir el bloque para que pase una sola vez?"],
        ["Ho posa tot al protagonista, amb un guió llarguíssim que costa de llegir.|Lo pone todo en el protagonista, con un guion larguísimo que cuesta de leer.",
          "Pregunta-li de qui és cada regla: qui sap quan l'han tocat, la moneda o el protagonista? Que en passi una al personatge que toca.|Pregúntale de quién es cada regla: ¿quién sabe cuándo lo han tocado, la moneda o el protagonista? Que pase una al personaje que toca."],
        ["Afegeix moltes peces de cop i, quan falla, no sap quina és la culpable.|Añade muchas piezas de golpe y, cuando falla, no sabe cuál es la culpable."
          , "Que tregui l'última peça (o la desconnecti) i provi si tot torna a funcionar. Després, que la torni a posar a poc a poc.|Que quite la última pieza (o la desconecte) y pruebe si todo vuelve a funcionar. Después, que la vuelva a poner poco a poco."],
        ["Els clons s'acumulen a baix de l'escenari i el videojoc va cada vegada més lent.|Los clones se acumulan abajo del escenario y el videojuego va cada vez más lento.",
          "Pregunta: què fa un clon quan arriba a baix? Recorda-li «esborra aquest clon» dins d'un «si y < −170».|Pregunta: ¿qué hace un clon cuando llega abajo? Recuérdale «borra este clon» dentro de un «si y < −170»."],
        ["L'enemic atrapa el protagonista abans que es pugui moure.|El enemigo atrapa al protagonista antes de que se pueda mover.",
          "Que provi números més petits a «mou-te» de l'enemic o que el faci començar més lluny. La setmana vinent treballarem la dificultat.|Que pruebe números más pequeños en «muévete» del enemigo o que lo haga empezar más lejos. La semana que viene trabajaremos la dificultad."]
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
          ["Construir peça a peça|Construir pieza a pieza", "Prova cada peça abans d'afegir-ne una altra i troba on falla.|Prueba cada pieza antes de añadir otra y encuentra dónde falla.", "Afegeix moltes peces de cop i li costa trobar l'error.|Añade muchas piezas de golpe y le cuesta encontrar el error."]
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
          nota: "Primer el que passa una sola vegada; després, el bucle amb el que es comprova tota l'estona.|Primero lo que pasa una sola vez; después, el bucle con lo que se comprueba todo el rato." },
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
          nota: "L'app ho comprova sola i els avisa si falta alguna cosa. Assegura't que tothom desa abans de sortir.|La app lo comprueba sola y les avisa si falta algo. Asegúrate de que todo el mundo guarda antes de salir." },
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
          diu: ["Qui coneix millor el vostre videojoc? I qui hi trobarà coses noves?|¿Quién conoce mejor vuestro videojuego? ¿Y quién encontrará cosas nuevas?"],
          slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 8, t: "Ulls nous, dificultat i comentaris|Ojos nuevos, dificultad y comentarios", fase: 'teoria',
          fa: "Amb la demo del cotxe, mostra un bug que l'autor/a no veu perquè sempre prova igual. Explica com s'ajusta la dificultat canviant un número i com es fa un bon comentari en dues parts. Ensenya el truc d'espiar una variable amb «digues».|Con la demo del coche, muestra un bug que el autor/a no ve porque siempre prueba igual. Explica cómo se ajusta la dificultad cambiando un número y cómo se hace un buen comentario en dos partes. Enseña el truco de espiar una variable con «di».",
          diu: ["El cotxe se'n va i no torna: és un bug o és el que volíem?|El coche se va y no vuelve: ¿es un bug o es lo que queríamos?",
            "«És avorrit» ajuda l'autor/a? Com ho podríem dir perquè l'ajudi?|«Es aburrido», ¿ayuda al autor/a? ¿Cómo lo podríamos decir para que le ayude?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Desconnectat: detectius de bugs|Desconectado: detectives de bugs", fase: 'desconnectat',
          fa: "En parelles, llegiu els informes dels provadors de la fitxa. Per a cada un, la parella decideix si és un bug o un problema de dificultat, marca en vermell el bloc o el número culpable i escriu en verd l'arreglo. Comenteu-ne dos en veu alta.|Por parejas, leed los informes de los probadores de la ficha. Para cada uno, la pareja decide si es un bug o un problema de dificultad, marca en rojo el bloque o el número culpable y escribe en verde el arreglo. Comentad dos en voz alta.",
          diu: ["Què diu exactament el provador/a? On pot ser el problema?|¿Qué dice exactamente el probador/a? ¿Dónde puede estar el problema?",
            "Per arreglar-ho, cal un bloc nou o només canviar un número?|Para arreglarlo, ¿hace falta un bloque nuevo o solo cambiar un número?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles|Por parejas" },
        { min: 15, t: "A l'ordinador: proves i bugs|En el ordenador: pruebas y bugs", fase: 'ordinador',
          fa: "Cada alumne/a fa els passos fins als dos reptes de bugs, inclosa la pausa activa. A «Pluja de meteorits», deixa que el provin unes quantes vegades abans de respondre. Al cranc, insisteix que canviïn només un número.|Cada alumno/a hace los pasos hasta los dos retos de bugs, incluida la pausa activa. En «Lluvia de meteoritos», deja que lo prueben unas cuantas veces antes de responder. En el cangrejo, insiste en que cambien solo un número.",
          diu: ["Quin número fa que el cranc vagi tan de pressa?|¿Qué número hace que el cangrejo vaya tan deprisa?",
            "Quina x té el cotxe quan arriba a la vora? I a l'altra vora?|¿Qué x tiene el coche cuando llega al borde? ¿Y en el otro borde?"],
          slides: ['s10', 's11'], app: "Dels «Recorda» fins als dos reptes: la història, «Descobreix», el millor comentari, el bon provador/a, «Pluja de meteorits», com fer-lo més just, el cranc massa ràpid, la pausa activa, el cotxe que surt de l'escenari i les instruccions.|De los «Recuerda» hasta los dos retos: la historia, «Descubre», el mejor comentario, el buen probador/a, «Lluvia de meteoritos», cómo hacerlo más justo, el cangrejo demasiado rápido, la pausa activa, el coche que sale del escenario y las instrucciones.", org: "Individual|Individual" },
        { min: 20, t: "Crea: canvi de lloc, valoració i millora|Crea: cambio de sitio, valoración y mejora", fase: 'crea',
          fa: "Quan tothom arribi al pas «Canvi de lloc!», fes la senyal: cada provador/a seu a l'ordinador del seu company/a. L'autor/a explica només les instruccions i calla. El provador/a prova el videojoc almenys tres vegades, omple la valoració de l'app i el full del provador/a, i explica de paraula una cosa que li ha agradat i una idea. Torneu al vostre lloc i cada autor/a fa la versió 3 amb els canvis que decideixi. Si un videojoc té un bug greu, ajuda l'autor/a a trobar-lo amb preguntes.|Cuando todo el mundo llegue al paso «¡Cambio de sitio!», haz la señal: cada probador/a se sienta en el ordenador de su compañero/a. El autor/a explica solo las instrucciones y calla. El probador/a prueba el videojuego al menos tres veces, rellena la valoración de la app y la hoja del probador/a, y explica de palabra algo que le ha gustado y una idea. Volved a vuestro sitio y cada autor/a hace la versión 3 con los cambios que decida. Si un videojuego tiene un bug grave, ayuda al autor/a a encontrarlo con preguntas.",
          diu: ["Autors/es: mireu i calleu. Apunteu què costa!|Autores/as: mirad y callad. ¡Apuntad qué cuesta!",
            "Provadors/es: primer una cosa que us agradi, després una idea.|Probadores/as: primero algo que os guste, después una idea.",
            "No cal fer tot el que us diuen: vosaltres decidiu què el fa millor.|No hace falta hacer todo lo que os dicen: vosotros decidís qué lo hace mejor."],
          slides: ['s12', 's13', 's14', 's15'], app: "«Canvi de lloc!», el videojoc del company/a (pas per al provador/a), la valoració, «Torneu al vostre lloc» i el pas «Crea»: el meu videojoc, versió 3.|«¡Cambio de sitio!», el videojuego del compañero/a (paso para el probador/a), la valoración, «Volved a vuestro sitio» y el paso «Crea»: mi videojuego, versión 3.", org: "Per parelles i després individual|Por parejas y después individual" },
        { min: 3, t: "Tancament|Cierre", fase: 'tancament',
          fa: "Pregunta quin canvi ha fet cadascú a partir dels comentaris i recull els fulls del provador/a a les carpetes.|Pregunta qué cambio ha hecho cada uno a partir de los comentarios y recoge las hojas del probador/a en las carpetas.",
          diu: ["Quin comentari us ha ajudat més? Per què?|¿Qué comentario os ha ayudado más? ¿Por qué?"],
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
          "Que toqui Comprova i miri què passa quan el cotxe va cap a l'esquerra. Quin número té la x a l'altra vora?|Que toque Comprueba y mire qué pasa cuando el coche va hacia la izquierda. ¿Qué número tiene la x en el otro borde?"]
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
          ["Millorar|Mejorar", "Fa almenys un canvi justificat a partir dels comentaris i el videojoc continua funcionant.|Hace al menos un cambio justificado a partir de los comentarios y el videojuego sigue funcionando.", "Fa canvis sense relació amb els comentaris o necessita ajuda per fer-los.|Hace cambios sin relación con los comentarios o necesita ayuda para hacerlos."]
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
          nota: "Deixa clar el pacte abans de començar: tothom serà autor/a i provador/a.|Deja claro el pacto antes de empezar: todo el mundo será autor/a y probador/a." },
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
          nota: "No cal fer-ho tot: és millor un canvi ben fet que molts a mitges.|No hace falta hacerlo todo: es mejor un cambio bien hecho que muchos a medias." },
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
          diu: ["Avui sou creadors/es de videojocs i també públic: les dues coses són importants.|Hoy sois creadores/as de videojuegos y también público: las dos cosas son importantes."],
          slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 6, t: "El viatge i com presentar|El viaje y cómo presentar", fase: 'teoria',
          fa: "Recorda el camí del curs amb l'animació de les vuit illes. Explica les tres preguntes per presentar i mostra amb la demo per què un videojoc necessita títol i instruccions.|Recuerda el camino del curso con la animación de las ocho islas. Explica las tres preguntas para presentar y muestra con la demo por qué un videojuego necesita título e instrucciones.",
          diu: ["Quina unitat us ha agradat més? Què hi vau aprendre?|¿Qué unidad os ha gustado más? ¿Qué aprendisteis?",
            "Si algú no ha vist mai el vostre videojoc, com sap què ha de fer?|Si alguien no ha visto nunca vuestro videojuego, ¿cómo sabe qué tiene que hacer?"],
          slides: ['s3', 's4', 's5', 's6'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Desconnectat: assaig de presentació|Desconectado: ensayo de presentación", fase: 'desconnectat',
          fa: "Cada alumne/a omple el guió de la presentació (pot fer servir el pla i el full del provador/a). Després, en grups de 3, cadascú assaja la seva presentació: un fa de públic i fa una pregunta, i l'altre controla el temps (2 minuts). Roteu els papers.|Cada alumno/a rellena el guion de la presentación (puede usar el plan y la hoja del probador/a). Después, en grupos de 3, cada uno ensaya su presentación: uno hace de público y hace una pregunta, y el otro controla el tiempo (2 minutos). Rotad los papeles.",
          diu: ["No cal aprendre-ho de memòria: unes paraules al guió us ajudaran a recordar-ho.|No hace falta aprenderlo de memoria: unas palabras en el guion os ayudarán a recordarlo.",
            "Públic: feu una pregunta sobre com està fet el videojoc.|Público: haced una pregunta sobre cómo está hecho el videojuego."],
          slides: ['s7', 's8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després en grups de 3|Individual y después en grupos de 3" },
        { min: 10, t: "A l'ordinador: repàs i últims retocs|En el ordenador: repaso y últimos retoques", fase: 'ordinador',
          fa: "Cada alumne/a fa el repàs del curs, la pausa activa i els dos reptes de la fira, i arriba als últims retocs: posa un títol i unes instruccions al seu videojoc i el desa. Qui vagi de pressa pot afegir-hi un so o un final més bonic.|Cada alumno/a hace el repaso del curso, la pausa activa y los dos retos de la feria, y llega a los últimos retoques: pone un título y unas instrucciones a su videojuego y lo guarda. Quien vaya deprisa puede añadir un sonido o un final más bonito.",
          diu: ["Les instruccions han de ser curtes: què has de fer i amb quines tecles.|Las instrucciones tienen que ser cortas: qué tienes que hacer y con qué teclas."],
          slides: ['s9', 's10'], app: "Dels «Recorda» fins a «Últims retocs»: la història, «Descobreix», ordenar la presentació, el repàs del curs, la pausa activa, la cursa, la papallona i la versió final del videojoc.|De los «Recuerda» hasta «Últimos retoques»: la historia, «Descubre», ordenar la presentación, el repaso del curso, la pausa activa, la carrera, la mariposa y la versión final del videojuego.", org: "Individual|Individual" },
        { min: 22, t: "Crea: l'estrena|Crea: el estreno", fase: 'crea',
          fa: "Cada alumne/a obre el pas «És la teva estrena!» i, quan li toca, presenta el seu videojoc al projector: respon les tres preguntes, ensenya un guió i deixa que algú del públic el provi. Després de cada presentació, el públic aplaudeix i fa una pregunta o un comentari amable. Si el grup és gran, feu les presentacions en grups de 5 o 6 amb un ordinador cada grup.|Cada alumno/a abre el paso «¡Es tu estreno!» y, cuando le toca, presenta su videojuego en el proyector: responde las tres preguntas, enseña un guion y deja que alguien del público lo pruebe. Después de cada presentación, el público aplaude y hace una pregunta o un comentario amable. Si el grupo es grande, haced las presentaciones en grupos de 5 o 6 con un ordenador cada grupo.",
          diu: ["Què has fet? Com funciona? Què t'ha costat?|¿Qué has hecho? ¿Cómo funciona? ¿Qué te ha costado?",
            "Qui del públic el vol provar?|¿Quién del público lo quiere probar?",
            "Una pregunta o un comentari amable per a l'autor/a!|¡Una pregunta o un comentario amable para el autor/a!"],
          slides: ['s11', 's12', 's13'], app: "Pas «És la teva estrena!»: el videojoc de cadascú, a punt per presentar.|Paso «¡Es tu estreno!»: el videojuego de cada uno, a punto para presentar.", org: "Tot el grup (o grups de 5-6)|Todo el grupo (o grupos de 5-6)" },
        { min: 8, t: "Tancament: diplomes|Cierre: diplomas", fase: 'tancament',
          fa: "Cada alumne/a obre el diploma de l'app. Lliura els diplomes de paper un per un, dient a cada alumne/a una cosa concreta que ha fet bé durant el curs. Acabeu amb el resum, les preguntes finals de l'app i una foto de grup si les famílies hi estan d'acord.|Cada alumno/a abre el diploma de la app. Entrega los diplomas de papel uno por uno, diciendo a cada alumno/a algo concreto que ha hecho bien durante el curso. Terminad con el resumen, las preguntas finales de la app y una foto de grupo si las familias están de acuerdo.",
          diu: ["Heu començat movent un personatge i acabeu creant videojocs. Enhorabona!|Habéis empezado moviendo un personaje y termináis creando videojuegos. ¡Enhorabuena!"],
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
          "Que les escurci a una sola frase: què has de fer i amb quines tecles. Que les provi amb un company/a.|Que las acorte a una sola frase: qué tienes que hacer y con qué teclas. Que las pruebe con un compañero/a."]
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
          ["Públic|Público", "Escolta, aplaudeix i fa preguntes o comentaris amables.|Escucha, aplaude y hace preguntas o comentarios amables.", "Escolta, però encara no participa amb preguntes.|Escucha, pero todavía no participa con preguntas."]
        ]
      },
      casa: "A casa, feu una «estrena familiar»: l'alumne/a presenta el seu videojoc (és a «Projectes») amb les tres preguntes i la família el prova. Podeu imprimir el diploma de l'app i penjar-lo!|En casa, haced un «estreno familiar»: el alumno/a presenta su videojuego (está en «Proyectos») con las tres preguntas y la familia lo prueba. ¡Podéis imprimir el diploma de la app y colgarlo!",
      slides: [
        { id: 's1', k: 'portada', t: 'Presentació i diploma|Presentación y diploma', x: "S'obre la Fira de Videojocs!|¡Se abre la Feria de Videojuegos!",
          nota: "Crea ambient de festa: és l'estrena dels seus videojocs i el final del curs.|Crea ambiente de fiesta: es el estreno de sus videojuegos y el final del curso." },
        { id: 's2', k: 'concepte', t: 'Com anirà avui|Cómo irá hoy', punts: ['Assaig de la presentació|Ensayo de la presentación', 'Últims retocs a l\'ordinador|Últimos retoques en el ordenador', "L'estrena: cada creador/a presenta el seu videojoc|El estreno: cada creador/a presenta su videojuego", 'Diplomes!|¡Diplomas!'],
          nota: "Explica també les normes del públic: escoltar, aplaudir i fer preguntes amables.|Explica también las normas del público: escuchar, aplaudir y hacer preguntas amables." },
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
          nota: "Deixa aquests consells projectats durant l'assaig.|Deja estos consejos proyectados durante el ensayo." },
        { id: 's9', k: 'activitat', t: 'Últims retocs|Últimos retoques', timer: 10, punts: ['Obre «Presentació i diploma».|Abre «Presentación y diploma».', 'Fes el repàs del curs i els dos reptes de la fira.|Haz el repaso del curso y los dos retos de la feria.', 'Posa títol i instruccions al teu videojoc.|Pon título e instrucciones a tu videojuego.', 'Desa la versió final!|¡Guarda la versión final!'],
          nota: "Que ningú no comenci canvis grans: avui només retocs. El que no funcioni es pot explicar a la presentació.|Que nadie empiece cambios grandes: hoy solo retoques. Lo que no funcione se puede explicar en la presentación." },
        { id: 's10', k: 'repte', t: 'Els reptes de la fira|Los retos de la feria', punts: ['La cursa: el cotxe surt quan rep «som-hi».|La carrera: el coche sale cuando recibe «som-hi».', 'La papallona: rebota i bat les ales.|La mariposa: rebota y bate las alas.'],
          nota: "Són un repàs ràpid de missatges i d'animació. Si van justos de temps, que passin directament als últims retocs.|Son un repaso rápido de mensajes y de animación. Si van justos de tiempo, que pasen directamente a los últimos retoques." },
        { id: 's11', k: 'activitat', t: "L'estrena|El estreno", timer: 22, punts: ['1. Què he fet?|1. ¿Qué he hecho?', '2. Com funciona? (un guió i una regla)|2. ¿Cómo funciona? (un guion y una regla)', "3. Què m'ha costat?|3. ¿Qué me ha costado?", 'Algú del públic el prova!|¡Alguien del público lo prueba!'],
          nota: "Controla el temps (uns 2 minuts per alumne/a) i que cada presentació acabi amb un aplaudiment.|Controla el tiempo (unos 2 minutos por alumno/a) y que cada presentación termine con un aplauso." },
        { id: 's12', k: 'concepte', t: 'Les normes del públic|Las normas del público', punts: ['Escolto fins al final.|Escucho hasta el final.', 'Aplaudeixo cada presentació.|Aplaudo cada presentación.', 'Faig una pregunta o un comentari amable.|Hago una pregunta o un comentario amable.'],
          nota: "Pots projectar-la entre presentació i presentació.|Puedes proyectarla entre presentación y presentación." },
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
