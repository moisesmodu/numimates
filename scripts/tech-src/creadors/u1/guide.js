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
