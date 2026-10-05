/* ===== Numi Tech · guia del professorat · Tech Creadors · unitat 3 «Interacció» =====
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1'].
   Diapositives «media»: l'escenari del curs en marxa (TMEDIA.stage) amb els guions al costat. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Quan toco el personatge… ---------- */
  'g3-1': {
    intro: "Comença la unitat de la interacció: fins ara els projectes es miraven; ara qui mira hi participa. Com que l'alumnat ja coneix els esdeveniments de Tech Robot (Al començar, botons A i B), la sessió no torna a explicar què és un esdeveniment: fa servir la capçalera «Quan toco aquest personatge» i passa de seguida al que és nou en aquest curs, la concurrència. Un mateix toc pot engegar diversos guions alhora, que funcionen en paral·lel; l'ordre en què passen les coses depèn del temps de cada bloc; si dos guions canvien la mateixa cosa al mateix moment, es veu l'últim; i un toc nou fa tornar a començar el guió. La classe comença amb una cronologia projectada, segueix amb «Dos guions, un sol actor» i acaba a l'ordinador despertant el bosc dels contes.|Empieza la unidad de la interacción: hasta ahora los proyectos se miraban; ahora quien mira participa. Como el alumnado ya conoce los eventos de Tech Robot (Al empezar, botones A y B), la sesión no vuelve a explicar qué es un evento: usa la cabecera «Al tocar este personaje» y pasa enseguida a lo que es nuevo en este curso, la concurrencia. Un mismo toque puede poner en marcha varios guiones a la vez, que funcionan en paralelo; el orden en que pasan las cosas depende del tiempo de cada bloque; si dos guiones cambian lo mismo en el mismo momento, se ve el último; y un toque nuevo hace volver a empezar el guion. La clase empieza con una cronología proyectada, sigue con «Dos guiones, un solo actor» y termina en el ordenador despertando el bosque de los cuentos.",
    claus: [
      "«Quan toco aquest personatge» fa els seus blocs a cada toc; si el toques abans que acabi, el guió torna a començar des de dalt.|«Al tocar este personaje» hace sus bloques con cada toque; si lo tocas antes de que acabe, el guion vuelve a empezar desde arriba.",
      "Un mateix esdeveniment pot engegar diversos guions (el + de la capçalera): funcionen en paral·lel, sense esperar-se.|Un mismo evento puede poner en marcha varios guiones (el + de la cabecera): funcionan en paralelo, sin esperarse.",
      "L'ordre del que es veu depèn del temps: per saber què passa primer, cal sumar les esperes de cada guió.|El orden de lo que se ve depende del tiempo: para saber qué pasa primero, hay que sumar las esperas de cada guion.",
      "Si dos guions canvien la mateixa cosa al mateix fotograma (dues frases, dues mides), es veu l'últim: cal ordenar-los amb una espera o, a la sessió 3, amb missatges.|Si dos guiones cambian lo mismo en el mismo fotograma (dos frases, dos tamaños), se ve el último: hay que ordenarlos con una espera o, en la sesión 3, con mensajes.",
      "Amb «Comença» proves tu; amb «Comprova», la prova toca sola i diu si funciona.|Con «Empieza» pruebas tú; con «Comprueba», la prueba toca sola y dice si funciona."
    ],
    prev: [
      "Els esdeveniments de Tech Robot («Al començar», botons A i B) o, si no l'han fet, la bandera verda de la unitat 1.|Los eventos de Tech Robot («Al empezar», botones A y B) o, si no lo han hecho, la bandera verde de la unidad 1.",
      "Diversos guions «Quan comença» que funcionen alhora (unitat 2, sessió 3).|Varios guiones «Al empezar» que funcionan a la vez (unidad 2, sesión 3).",
      "Sumar temps amb decimals (0,5 + 1 = 1,5 segons).|Sumar tiempos con decimales (0,5 + 1 = 1,5 segundos)."
    ],
    faq: [
      ["Toco el gat i no fa res. Per què?|Toco el gato y no hace nada. ¿Por qué?",
        "Has tocat «Comença»? Els tocs només funcionen amb el programa en marxa. I mira que els blocs siguin sota «Quan toco aquest personatge».|¿Has tocado «Empieza»? Los toques solo funcionan con el programa en marcha. Y mira que los bloques estén bajo «Al tocar este personaje»."],
      ["Com faig dos guions amb la mateixa capçalera?|¿Cómo hago dos guiones con la misma cabecera?",
        "Toca el + que hi ha a la dreta de la capçalera: surt un guió nou buit amb el mateix esdeveniment.|Toca el + que hay a la derecha de la cabecera: sale un guion nuevo vacío con el mismo evento."],
      ["Si els dos guions comencen alhora, quin es fa primer?|Si los dos guiones empiezan a la vez, ¿cuál se hace primero?",
        "Tots dos avancen al mateix temps, fotograma a fotograma. Dins d'un mateix fotograma, l'ordinador fa primer el de dalt; per això, si tots dos parlen alhora, es veu la frase del segon.|Los dos avanzan al mismo tiempo, fotograma a fotograma. Dentro de un mismo fotograma, el ordenador hace primero el de arriba; por eso, si los dos hablan a la vez, se ve la frase del segundo."],
      ["Si toco el personatge dues vegades molt de pressa, què passa?|Si toco el personaje dos veces muy deprisa, ¿qué pasa?",
        "El guió de toc s'atura on era i torna a començar des del principi.|El guion de toque se para donde estaba y vuelve a empezar desde el principio."],
      ["La roca no fa res quan la toco. Està espatllada?|La roca no hace nada cuando la toco. ¿Está estropeada?",
        "No: la roca no té cap guió. Un personatge sense guió no respon a cap esdeveniment.|No: la roca no tiene ningún guion. Un personaje sin guion no responde a ningún evento."],
      ["On es fa servir això de veritat?|¿Dónde se usa esto de verdad?",
        "Als videojocs i a les apps passa contínuament: tocar un botó fa sonar un so, canvia la pantalla i suma punts, tot alhora. Cada cosa és un guió diferent.|En los videojuegos y en las apps pasa continuamente: tocar un botón hace sonar un sonido, cambia la pantalla y suma puntos, todo a la vez. Cada cosa es un guion diferente."]
    ],
    tec: [
      ["A «Comprova» diu que no ha passat res.|En «Comprueba» dice que no ha pasado nada.",
        "La prova toca el personatge un moment concret: comproveu que els blocs són sota «Quan toco aquest personatge» del personatge correcte.|La prueba toca el personaje en un momento concreto: comprobad que los bloques están bajo «Al tocar este personaje» del personaje correcto."],
      ["En tocar el personatge, la pàgina es mou o fa zoom (mòbil).|Al tocar el personaje, la página se mueve o hace zoom (móvil).",
        "Que toqui amb un sol dit i sense arrossegar; si cal, que giri el mòbil en horitzontal.|Que toque con un solo dedo y sin arrastrar; si hace falta, que gire el móvil en horizontal."],
      ["El drac falla la prova 2.|El dragón falla la prueba 2.",
        "A la prova 2 ningú no el toca: el «canvia la mida» ha d'estar només al guió del toc, no al de «Quan comença».|En la prueba 2 nadie lo toca: el «cambia el tamaño» tiene que estar solo en el guion del toque, no en el de «Al empezar»."],
      ["La Tuga arriba a la bandera però el repte diu que falta alguna cosa.|Tuga llega a la bandera pero el reto dice que falta algo.",
        "El repte demana dos guions de toc: un per moure i un altre per al vestit. Amb el + de la capçalera se'n fa el segon.|El reto pide dos guiones de toque: uno para mover y otro para el disfraz. Con el + de la cabecera se hace el segundo."],
      ["Les targetes de l'activitat es barregen entre grups.|Las tarjetas de la actividad se mezclan entre grupos.",
        "Imprimiu cada paquet en un color de paper diferent o marqueu-les amb el número del grup.|Imprimid cada paquete en un color de papel diferente o marcadlas con el número del grupo."]
    ],
    seg: [
      "A «Dos guions, un sol actor», el copet és suau i a l'espatlla; qui no vulgui que el toquin pot fer servir un esdeveniment de so (un picament de mans).|En «Dos guiones, un solo actor», el toque es suave y en el hombro; quien no quiera que le toquen puede usar un evento de sonido (una palmada).",
      "Recordeu el temps de pantalla: a la pausa activa, que s'aixequin i es moguin.|Recordad el tiempo de pantalla: en la pausa activa, que se levanten y se muevan."
    ],
    extra: [
      "Fer que el drac tingui tres guions de toc amb esperes diferents (0, 0,5 i 1 s) i escriure abans la cronologia del que es veurà.|Hacer que el dragón tenga tres guiones de toque con esperas diferentes (0, 0,5 y 1 s) y escribir antes la cronología de lo que se verá.",
      "Fer un «instrument» al bosc: cada personatge fa un so i un moviment alhora quan el toques, amb dos guions.|Hacer un «instrumento» en el bosque: cada personaje hace un sonido y un movimiento a la vez cuando lo tocas, con dos guiones.",
      "Provar què passa si es toca el gat moltes vegades seguides i explicar-ho amb la regla «el guió torna a començar».|Probar qué pasa si se toca el gato muchas veces seguidas y explicarlo con la regla «el guion vuelve a empezar»."
    ],
    trans: [
      "Tecnologia: aparells i apps que fan diverses coses alhora quan toques un botó (so, llum, pantalla).|Tecnología: aparatos y apps que hacen varias cosas a la vez cuando tocas un botón (sonido, luz, pantalla).",
      "Matemàtiques: línies de temps i sumes de durades amb decimals (0,5 + 1 = 1,5 s); multiplicació (4 tocs × 40 passos).|Matemáticas: líneas de tiempo y sumas de duraciones con decimales (0,5 + 1 = 1,5 s); multiplicación (4 toques × 40 pasos).",
      "Sessió següent: un altre esdeveniment, les tecles, que poden fer reaccionar diversos personatges alhora.|Sesión siguiente: otro evento, las teclas, que pueden hacer reaccionar a varios personajes a la vez."
    ],
    obj: [
      "L'alumne/a programa un personatge perquè respongui quan algú el toca i explica què passa si el toquen abans que el guió acabi.|El alumno/a programa un personaje para que responda cuando alguien lo toca y explica qué pasa si lo tocan antes de que el guion acabe.",
      "L'alumne/a fa servir diversos guions amb el mateix esdeveniment i explica que funcionen en paral·lel.|El alumno/a usa varios guiones con el mismo evento y explica que funcionan en paralelo.",
      "L'alumne/a ordena en una línia de temps el que fan dos guions alhora, sumant les esperes.|El alumno/a ordena en una línea de tiempo lo que hacen dos guiones a la vez, sumando las esperas.",
      "L'alumne/a detecta un conflicte entre dos guions que canvien la mateixa cosa i el resol amb una espera.|El alumno/a detecta un conflicto entre dos guiones que cambian lo mismo y lo resuelve con una espera."
    ],
    comp: [
      "Competència digital (CD5): crear continguts digitals interactius amb programació per blocs|Competencia digital (CD5): crear contenidos digitales interactivos con programación por bloques",
      "Pensament computacional: esdeveniments, concurrència (guions en paral·lel), temps d'execució i conflictes entre guions|Pensamiento computacional: eventos, concurrencia (guiones en paralelo), tiempo de ejecución y conflictos entre guiones",
      "Matemàtiques: línies de temps i sumes amb decimals|Matemáticas: líneas de tiempo y sumas con decimales",
      "Comunicació oral: explicar causa, efecte i ordre temporal («primer…, al cap de mig segon…»)|Comunicación oral: explicar causa, efecto y orden temporal («primero…, al cabo de medio segundo…»)"
    ],
    vocab: [
      ["Esdeveniment|Evento", "Una cosa que passa mentre el programa funciona i que fa començar un guió (un toc, una tecla, la bandera).|Algo que pasa mientras el programa funciona y que hace empezar un guion (un toque, una tecla, la bandera)."],
      ["Capçalera|Cabecera", "El bloc de dalt d'un guió, que diu quin esdeveniment l'engega.|El bloque de arriba de un guion, que dice qué evento lo pone en marcha."],
      ["En paral·lel|En paralelo", "Dos o més guions que avancen al mateix temps, sense esperar-se.|Dos o más guiones que avanzan al mismo tiempo, sin esperarse."],
      ["Conflicte|Conflicto", "Quan dos guions canvien la mateixa cosa alhora i només es veu el que ho fa l'últim.|Cuando dos guiones cambian lo mismo a la vez y solo se ve el que lo hace el último."],
      ["Interactiu|Interactivo", "Que respon al que fa qui el fa servir: tocar, prémer, triar.|Que responde a lo que hace quien lo usa: tocar, pulsar, elegir."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Quan toco el personatge…»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Cuando toco el personaje…»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "1 paquet de targetes de guions retallades per grup de 4 (imprimible 1) i un cronòmetre o rellotge amb segons visible|1 paquete de tarjetas de guiones recortadas por grupo de 4 (imprimible 1) y un cronómetro o reloj con segundos visible"
      ],
      imprimir: [
        "1 paquet de targetes «Dos guions, un sol actor» per grup de 4 (imprimible 1)|1 paquete de tarjetas «Dos guiones, un solo actor» por grupo de 4 (imprimible 1)"
      ],
      prep: [
        "El dia abans (15 min): imprimir i retallar un paquet de targetes per grup de 4; si pot ser, cada paquet d'un color.|El día antes (15 min): imprimir y recortar un paquete de tarjetas por grupo de 4; si puede ser, cada paquete de un color.",
        "Provar les demostracions del drac i dels dos gats (diapositives 7, 8 i 9) i fixar-se en què passa a cada segon.|Probar las demostraciones del dragón y de los dos gatos (diapositivas 7, 8 y 9) y fijarse en qué pasa en cada segundo.",
        "Tenir preparada a la pissarra una línia de temps de 0 a 2 segons, marcada cada mig segon.|Tener preparada en la pizarra una línea de tiempo de 0 a 2 segundos, marcada cada medio segundo.",
        "Deixar els ordinadors engegats amb el perfil de cada alumne/a iniciat.|Dejar los ordenadores encendidos con el perfil de cada alumno/a iniciado."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: un toc, moltes coses|Bienvenida: un toque, muchas cosas", fase: 'inici',
        fa: "Recorda l'aquari de la unitat 2: era una animació i tenia diversos guions alhora. Pregunta quines apps o màquines fan diverses coses a la vegada quan toques un sol botó (un videojoc: so, punts i animació). Presenta la missió: el bosc dels contes, on els personatges dormen fins que algú els toca.|Recuerda el acuario de la unidad 2: era una animación y tenía varios guiones a la vez. Pregunta qué apps o máquinas hacen varias cosas a la vez cuando tocas un solo botón (un videojuego: sonido, puntos y animación). Presenta la misión: el bosque de los cuentos, donde los personajes duermen hasta que alguien los toca.",
        diu: ["A l'aquari, el peix nedava i movia la cua alhora. Com ho fèiem? (Dos guions.)|En el acuario, el pez nadaba y movía la cola a la vez. ¿Cómo lo hacíamos? (Dos guiones.)", "Quan toqueu un botó en un videojoc, quantes coses passen alhora?|Cuando tocáis un botón en un videojuego, ¿cuántas cosas pasan a la vez?", "Avui el públic tocarà els personatges… i cada toc en pot engegar més d'un guió.|Hoy el público tocará a los personajes… y cada toque puede poner en marcha más de un guion."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El toc i els guions en paral·lel|El toque y los guiones en paralelo", fase: 'teoria',
        fa: "Mostra la capçalera «Quan toco aquest personatge» amb l'animació i recorda els botons A i B de Tech Robot. Projecta el drac amb dos guions de toc i dibuixa a la pissarra la línia de temps (0: creix; 0,5: Grrr!; 1,5: encongeix i calla). Acaba amb els dos gats: per què el primer no diu mai «Miau!»?|Muestra la cabecera «Al tocar este personaje» con la animación y recuerda los botones A y B de Tech Robot. Proyecta el dragón con dos guiones de toque y dibuja en la pizarra la línea de tiempo (0: crece; 0,5: ¡Grrr!; 1,5: encoge y calla). Termina con los dos gatos: ¿por qué el primero no dice nunca «¡Miau!»?",
        diu: ["Els botons A i B d'en Bit eren esdeveniments. Aquí, cada personatge en té un: el toc.|Los botones A y B de Bit eran eventos. Aquí, cada personaje tiene uno: el toque.", "Quan toco el drac, quin guió comença primer? (Tots dos alhora.)|Cuando toco el dragón, ¿qué guion empieza primero? (Los dos a la vez.)", "Què es veu al segon 0,5? I a l'1,5?|¿Qué se ve en el segundo 0,5? ¿Y en el 1,5?", "El gat 1 diu dues frases al mateix temps: quina guanya? Com ho arreglaríeu?|El gato 1 dice dos frases al mismo tiempo: ¿cuál gana? ¿Cómo lo arreglaríais?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Dos guions, un sol actor|Dos guiones, un solo actor", fase: 'desconnectat',
        fa: "Grups de 4: un actor/actriu, un «usuari» que fa el copet i dos observadors amb rellotge. L'actor/actriu agafa dues targetes de guió amb el mateix esdeveniment. A cada copet, fa els dos guions alhora i els observadors anoten a la línia de temps què passa primer. Ronda 2: la parella de targetes del conflicte (dues frases al mateix moment) i el grup hi afegeix una espera. Ronda 3: l'usuari fa un segon copet abans d'hora i el grup comprova que el guió torna a començar.|Grupos de 4: un actor/actriz, un «usuario» que da el toque y dos observadores con reloj. El actor/actriz coge dos tarjetas de guion con el mismo evento. Con cada toque, hace los dos guiones a la vez y los observadores anotan en la línea de tiempo qué pasa primero. Ronda 2: la pareja de tarjetas del conflicto (dos frases en el mismo momento) y el grupo le añade una espera. Ronda 3: el usuario da un segundo toque antes de tiempo y el grupo comprueba que el guion vuelve a empezar.",
        diu: ["Feu els dos guions alhora, no un darrere l'altre!|¡Haced los dos guiones a la vez, no uno detrás del otro!", "Observadors: què ha passat al segon 1? I al 3?|Observadores: ¿qué ha pasado en el segundo 1? ¿Y en el 3?", "Amb les dues frases alhora, s'ha entès res? On posaríeu l'espera?|Con las dos frases a la vez, ¿se ha entendido algo? ¿Dónde pondríais la espera?", "Si el toco abans que acabi, per on torna a començar? (Des de dalt.)|Si lo toco antes de que acabe, ¿por dónde vuelve a empezar? (Desde arriba.)"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «Dos guions, un sol actor» poden tocar «Ho hem fet!» perquè ja l'han fet a classe. A la cronologia del drac, que ho resolguin amb la línia de temps de la pissarra. Al bosc adormit, demana que expliquin per què el drac creix i rugeix alhora i per què la roca no fa res.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «Dos guiones, un solo actor» pueden tocar «¡Lo hemos hecho!» porque ya lo han hecho en clase. En la cronología del dragón, que lo resuelvan con la línea de tiempo de la pizarra. En el bosque dormido, pide que expliquen por qué el dragón crece y ruge a la vez y por qué la roca no hace nada.",
        diu: ["Toca la pestanya del drac: quants guions de toc té?|Toca la pestaña del dragón: ¿cuántos guiones de toque tiene?", "Per què la roca no fa res quan la toques? (No té cap guió.)|¿Por qué la roca no hace nada cuando la tocas? (No tiene ningún guion.)", "El drac comença amb mida 100 i el toco 3 vegades: quina mida té? (130.)|El dragón empieza con tamaño 100 y lo toco 3 veces: ¿qué tamaño tiene? (130.)", "A l'«Investiga», quin «digues» tapa l'altre? Què li falta?|En el «Investiga», ¿qué «di» tapa al otro? ¿Qué le falta?"],
        slides: ['s12'], app: "Del recorda fins a «Investiga»: les preguntes, les dues històries, «Descobreix», la cronologia del drac, «Dos guions, un sol actor» (ja fet), el bosc adormit, la pregunta de la mida del drac i el gat que no diu «Miau!».|Del recuerda hasta «Investiga»: las preguntas, las dos historias, «Descubre», la cronología del dragón, «Dos guiones, un solo actor» (ya hecho), el bosque dormido, la pregunta del tamaño del dragón y el gato que no dice «¡Miau!».", org: "Individual|Individual" },
      { min: 10, t: "Reptes: personatges que responen|Retos: personajes que responden", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Recorda com funciona «Comença» (proves tu, tocant) i «Comprova» (la prova toca sola). Deixa'ls fer els quatre reptes. Al del drac, explica que hi ha dues proves: si ningú no el toca, no ha de créixer. Al de la Tuga, mostra on és el + de la capçalera.|Haced la pausa activa juntos. Recuerda cómo funciona «Empieza» (pruebas tú, tocando) y «Comprueba» (la prueba toca sola). Deja que hagan los cuatro retos. En el del dragón, explica que hay dos pruebas: si nadie lo toca, no tiene que crecer. En el de Tuga, enseña dónde está el + de la cabecera.",
        diu: ["Primer prova-ho tu amb «Comença» i el dit. Quan funcioni, «Comprova».|Primero pruébalo tú con «Empieza» y el dedo. Cuando funcione, «Comprueba».", "A la prova 2 ningú no toca el drac: per què es fa gran el teu?|En la prueba 2 nadie toca el dragón: ¿por qué se hace grande el tuyo?", "La Tuga: un guió per moure i un altre per al vestit. Es fan alhora o per torns? (Alhora.)|Tuga: un guion para mover y otro para el disfraz. ¿Se hacen a la vez o por turnos? (A la vez.)"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: el gat dormilega, l'ocell i la papallona, el drac que creix i la Tuga amb dos guions.|«Pausa activa» y los cuatro retos: el gato dormilón, el pájaro y la mariposa, el dragón que crece y Tuga con dos guiones.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el bosc que es desperta|Crea: el bosque que se despierta", fase: 'crea',
        fa: "Cada alumne/a programa almenys tres personatges que responguin de manera diferent; qui vulgui, que en faci algun amb dos guions en paral·lel. Quan el tinguin, el company/a toca els personatges sense mirar els guions i endevina quants guions té cadascun.|Cada alumno/a programa al menos tres personajes que respondan de manera diferente; quien quiera, que haga alguno con dos guiones en paralelo. Cuando lo tengan, el compañero/a toca los personajes sin mirar los guiones y adivina cuántos guiones tiene cada uno.",
        diu: ["Que cada personatge sorprengui d'una manera diferent!|¡Que cada personaje sorprenda de una manera diferente!", "Aquest personatge fa dues coses alhora: quants guions té?|Este personaje hace dos cosas a la vez: ¿cuántos guiones tiene?", "Hi ha cap conflicte? Dues frases que es trepitgen?|¿Hay algún conflicto? ¿Dos frases que se pisan?"],
        slides: ['s15'], app: "Pas «Crea»: El bosc que es desperta.|Paso «Crea»: El bosque que se despierta.", org: "Individual i per parelles|Individual y por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum (guió de toc, guions en paral·lel i conflictes). Deixa que facin les dues preguntes finals de l'app i com s'han sentit. A la porta, fes a cada alumne/a una pregunta del tiquet i anota qui encara pensa que els guions es fan per torns.|Repasa las tres ideas con el resumen (guion de toque, guiones en paralelo y conflictos). Deja que hagan las dos preguntas finales de la app y cómo se han sentido. En la puerta, haz a cada alumno/a una pregunta del ticket y anota quién todavía piensa que los guiones se hacen por turnos.",
        diu: ["Un toc, dos guions: es fan alhora o un darrere l'altre?|Un toque, dos guiones: ¿se hacen a la vez o uno detrás del otro?", "Dues frases al mateix moment: quina es veu? Com ho arregles?|Dos frases en el mismo momento: ¿cuál se ve? ¿Cómo lo arreglas?", "La setmana vinent: tecles que fan reaccionar molts personatges alhora!|La semana que viene: ¡teclas que hacen reaccionar a muchos personajes a la vez!"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Creu que els dos guions de toc es fan un darrere l'altre i calcula malament quan passa cada cosa.|Cree que los dos guiones de toque se hacen uno detrás del otro y calcula mal cuándo pasa cada cosa.",
        "Torna a la línia de temps: tots dos comencen al segon 0. Que sumi les esperes de cada guió per separat.|Vuelve a la línea de tiempo: los dos empiezan en el segundo 0. Que sume las esperas de cada guion por separado."],
      ["Posa dues frases en dos guions alhora i no entén per què se'n veu només una.|Pone dos frases en dos guiones a la vez y no entiende por qué solo se ve una.",
        "Recorda els dos gats: al mateix fotograma guanya l'últim. On posaria una espera perquè parlin per torns?|Recuerda los dos gatos: en el mismo fotograma gana el último. ¿Dónde pondría una espera para que hablen por turnos?"],
      ["Posa els blocs sota «Quan comença» i espera que el personatge respongui al toc.|Pone los bloques bajo «Al empezar» y espera que el personaje responda al toque.",
        "Pregunta: quan comença aquest guió? Que llegeixi la capçalera en veu alta i decideixi si és l'esdeveniment que vol.|Pregunta: ¿cuándo empieza este guion? Que lea la cabecera en voz alta y decida si es el evento que quiere."],
      ["Programa el personatge equivocat (per exemple, posa els blocs de l'ocell a la papallona).|Programa el personaje equivocado (por ejemplo, pone los bloques del pájaro en la mariposa).",
        "Que miri quina pestanya està marcada a dalt abans de posar blocs. Cada personatge té els seus guions.|Que mire qué pestaña está marcada arriba antes de poner bloques. Cada personaje tiene sus guiones."],
      ["Al repte del drac, el fa créixer també quan comença, i falla la prova 2.|En el reto del dragón, lo hace crecer también al empezar, y falla la prueba 2.",
        "Pregunta: a la prova 2 ningú no el toca. Quin guió s'executa? Què hi ha en aquell guió que no hi hauria de ser?|Pregunta: en la prueba 2 nadie lo toca. ¿Qué guion se ejecuta? ¿Qué hay en ese guion que no debería estar?"],
      ["Toca el personatge moltes vegades seguides i diu que «el guió no s'acaba mai».|Toca el personaje muchas veces seguidas y dice que «el guion no se acaba nunca».",
        "Explica la regla: cada toc fa tornar a començar el guió des de dalt. Que esperi que acabi abans de tornar a tocar.|Explica la regla: cada toque hace volver a empezar el guion desde arriba. Que espere a que acabe antes de volver a tocar."]
    ],
    diff: {
      mes: "Afegir a «El bosc que es desperta» un personatge amb tres guions de toc que facin coses en moments diferents (0, 0,5 i 1 s) i escriure'n abans la cronologia. O fer un conflicte a propòsit i arreglar-lo amb una espera.|Añadir a «El bosque que se despierta» un personaje con tres guiones de toque que hagan cosas en momentos diferentes (0, 0,5 y 1 s) y escribir antes su cronología. O hacer un conflicto a propósito y arreglarlo con una espera.",
      menys: "Treballar primer amb un sol guió de toc i un sol bloc («digues»). Per als guions en paral·lel, tenir les dues targetes de paper una al costat de l'altra i la línia de temps dibuixada.|Trabajar primero con un solo guion de toque y un solo bloque («di»). Para los guiones en paralelo, tener las dos tarjetas de papel una al lado de la otra y la línea de tiempo dibujada."
    },
    aval: {
      ticket: ["Un toc engega dos guions: A espera 1 s i diu «Hola!»; B diu «Bon dia!» de seguida. Què es veu primer?|Un toque pone en marcha dos guiones: A espera 1 s y dice «¡Hola!»; B dice «¡Buenos días!» enseguida. ¿Qué se ve primero?", "Dues frases al mateix moment: com fas que es llegeixin totes dues?|Dos frases en el mismo momento: ¿cómo haces que se lean las dos?"],
      rubric: [
        ["Guions de toc|Guiones de toque", "Posa els blocs a la capçalera i al personatge correctes i explica què passa amb un toc nou.|Pone los bloques en la cabecera y el personaje correctos y explica qué pasa con un toque nuevo.", "Necessita provar diverses vegades per trobar on van els blocs.|Necesita probar varias veces para encontrar dónde van los bloques."],
        ["Guions en paral·lel|Guiones en paralelo", "Fa servir dos guions amb el mateix esdeveniment i explica que funcionen alhora.|Usa dos guiones con el mismo evento y explica que funcionan a la vez.", "Fa els dos guions, però creu que es fan per torns.|Hace los dos guiones, pero cree que se hacen por turnos."],
        ["Temps i conflictes|Tiempo y conflictos", "Ordena el que passa sumant esperes i resol un conflicte amb una espera.|Ordena lo que pasa sumando esperas y resuelve un conflicto con una espera.", "Detecta que alguna cosa no es veu, però no sap per què.|Detecta que algo no se ve, pero no sabe por qué."],
        ["Provar i comprovar|Probar y comprobar",
          "Prova el guió tocant amb «Comença» i, quan funciona, el comprova amb «Comprova».|Prueba el guion tocando con «Empieza» y, cuando funciona, lo comprueba con «Comprueba».",
          "Toca «Comprova» sense haver provat o no sap què vol dir el missatge.|Toca «Comprueba» sin haber probado o no sabe qué quiere decir el mensaje."]
      ]
    },
    casa: "A casa podeu fer «Dos guions, un sol actor»: una persona té dues targetes que comencen amb el mateix copet a l'espatlla i les fa alhora; l'altra cronometra què passa primer i prova de tocar abans d'hora.|En casa podéis hacer «Dos guiones, un solo actor»: una persona tiene dos tarjetas que empiezan con el mismo toque en el hombro y las hace a la vez; la otra cronometra qué pasa primero y prueba a tocar antes de tiempo.",
    slides: [
      { id: 's1', k: 'portada', t: "Quan toco el personatge…|Cuando toco el personaje…", x: "Unitat 3 · Interacció. Avui un sol toc engegarà diversos guions alhora.|Unidad 3 · Interacción. Hoy un solo toque pondrá en marcha varios guiones a la vez.",
        nota: "Presenta la unitat: en quatre sessions passarem de mirar animacions a crear un conte interactiu.|Presenta la unidad: en cuatro sesiones pasaremos de mirar animaciones a crear un cuento interactivo." },
      { id: 's2', k: 'pregunta', t: "Un botó, quantes coses?|¿Un botón, cuántas cosas?", punts: ["En un videojoc: so, punts i animació|En un videojuego: sonido, puntos y animación", "En una app de música: so i dibuix que es mou|En una app de música: sonido y dibujo que se mueve", "En un ascensor: llum, so i porta|En un ascensor: luz, sonido y puerta"],
        nota: "Recull exemples. Fes notar que totes aquestes coses passen alhora després d'un sol esdeveniment.|Recoge ejemplos. Haz notar que todas estas cosas pasan a la vez después de un solo evento." },
      { id: 's3', k: 'repas', t: "Recordem: l'aquari|Recordemos: el acuario", punts: ["Diversos guions «Quan comença» alhora|Varios guiones «Al empezar» a la vez", "Cada guió, al seu ritme|Cada guion, a su ritmo", "Tot passava sol: era una animació|Todo pasaba solo: era una animación"],
        nota: "Connecta amb la unitat 2: avui els guions en paral·lel els engegarà qui mira.|Conecta con la unidad 2: hoy los guiones en paralelo los pondrá en marcha quien mira." },
      { id: 's4', k: 'anim', t: "Toca'l i respon|Tócalo y responde", anim: 'g3event', x: "Un toc → el guió «Quan toco aquest personatge» comença.|Un toque → el guion «Al tocar este personaje» empieza.",
        nota: "Recorda els botons A i B de Tech Robot: també eren esdeveniments. Aquí cada personatge té el seu.|Recuerda los botones A y B de Tech Robot: también eran eventos. Aquí cada personaje tiene el suyo." },
      { id: 's5', k: 'concepte', t: "Esdeveniments de l'escenari|Eventos del escenario", punts: ["Quan comença (la bandera verda)|Al empezar (la bandera verde)", "Quan toco aquest personatge|Al tocar este personaje", "Quan premo una tecla (la setmana que ve)|Al pulsar una tecla (la semana que viene)"], pic: 'img/ment/rfx.webp',
        nota: "Un minut: no cal tornar a explicar què és un esdeveniment, només quins n'hi ha a l'escenari.|Un minuto: no hace falta volver a explicar qué es un evento, solo cuáles hay en el escenario." },
      { id: 's6', k: 'media', t: "Un personatge, dos guions|Un personaje, dos guiones",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'drac', art: 'drac', x: 0, y: -40 }], input: [{ t: 2.5, click: 'drac' }], time: 6 }, prog: `@drac flag{ say:"Toca'm, si goses!|¡Tócame, si te atreves!",2 } click{ chsize:40 say:"Grrr!|¡Grrr!",2 chsize:-40 }` },
        nota: "Assenyala cada guió quan s'il·lumina. Pregunta quin esdeveniment espera cadascun.|Señala cada guion cuando se ilumina. Pregunta qué evento espera cada uno." },
      { id: 's7', k: 'media', t: "Un toc, dos guions alhora|Un toque, dos guiones a la vez", x: "A: creix, espera 1,5 s, encongeix. B: espera 0,5 s i rugeix.|A: crece, espera 1,5 s, encoge. B: espera 0,5 s y ruge.",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'drac', art: 'drac', x: 0, y: -40 }], input: [{ t: 1, click: 'drac' }, { t: 4, click: 'drac' }], time: 7 }, prog: `@drac click{ chsize:40 wait:1.5 chsize:-40 } click{ wait:0.5 say:"Grrr!|¡Grrr!",1 }` },
        nota: "Dibuixa la línia de temps a la pissarra: 0 creix · 0,5 Grrr! · 1,5 encongeix i la bafarada desapareix.|Dibuja la línea de tiempo en la pizarra: 0 crece · 0,5 ¡Grrr! · 1,5 encoge y el bocadillo desaparece." },
      { id: 's8', k: 'pregunta', t: "Prediu|Predice", x: "El drac creix 10 cada vegada que el toques. Comença amb mida 100. El toques 3 vegades: quina mida té?|El dragón crece 10 cada vez que lo tocas. Empieza con tamaño 100. Lo tocas 3 veces: ¿qué tamaño tiene?",
        nota: "Resposta: 130. Cada toc és un esdeveniment nou.|Respuesta: 130. Cada toque es un evento nuevo." },
      { id: 's9', k: 'media', t: "Qui parla l'últim, guanya|Quien habla el último, gana", x: "Gat 1: dues frases alhora. Gat 2: el segon guió espera 1 segon.|Gato 1: dos frases a la vez. Gato 2: el segundo guion espera 1 segundo.",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'gat', art: 'gat', x: -110, y: -50, size: 100, name: 'Gat 1|Gato 1' }, { id: 'gat2', art: 'gat', x: 110, y: -50, size: 100, name: 'Gat 2|Gato 2' }], input: [{ t: .8, click: 'gat' }, { t: .8, click: 'gat2' }], time: 5 },
          prog: `@gat click{ say:"Miau!|¡Miau!",1 } click{ say:"Bon dia!|¡Buenos días!",1 } @gat2 click{ say:"Miau!|¡Miau!",1 } click{ wait:1 say:"Bon dia!|¡Buenos días!",1 }` },
        nota: "Pregunta per què el gat 1 no diu mai «Miau!». És un conflicte: dues ordres sobre la mateixa bafarada al mateix fotograma.|Pregunta por qué el gato 1 no dice nunca «¡Miau!». Es un conflicto: dos órdenes sobre el mismo bocadillo en el mismo fotograma." },
      { id: 's10', k: 'activitat', t: "Dos guions, un sol actor|Dos guiones, un solo actor", timer: 12, punts: ["L'actor/actriu agafa dues targetes amb el mateix esdeveniment.|El actor/actriz coge dos tarjetas con el mismo evento.", "Copet a l'espatlla: fa els dos guions alhora.|Toque en el hombro: hace los dos guiones a la vez.", "Els observadors anoten què passa a cada segon.|Los observadores anotan qué pasa en cada segundo.", "Ronda 2: el conflicte. Ronda 3: un copet abans d'hora.|Ronda 2: el conflicto. Ronda 3: un toque antes de tiempo."],
        nota: "Copets suaus. Si algú fa els guions per torns, és un «bug»: el grup el troba.|Toques suaves. Si alguien hace los guiones por turnos, es un «bug»: el grupo lo encuentra." },
      { id: 's11', k: 'activitat', t: "La línia de temps|La línea de tiempo", punts: ["0 s: comencen tots dos guions.|0 s: empiezan los dos guiones.", "Suma les esperes de cada guió per separat.|Suma las esperas de cada guion por separado.", "Dues ordres alhora sobre la mateixa cosa: guanya l'última.|Dos órdenes a la vez sobre lo mismo: gana la última."],
        nota: "Deixa-la projectada durant l'activitat i fes servir el cronòmetre gran.|Déjala proyectada durante la actividad y usa el cronómetro grande." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre «Quan toco el personatge…».|Abre «Cuando toco el personaje…».", "Al bosc adormit, toca tots els personatges.|En el bosque dormido, toca todos los personajes.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Passeja i pregunta pel drac: té dos guions de toc, per això creix i rugeix alhora.|Pasea y pregunta por el dragón: tiene dos guiones de toque, por eso crece y ruge a la vez." },
      { id: 's13', k: 'concepte', t: "Comença o Comprova?|¿Empieza o Comprueba?", punts: ["«Comença»: proves tu, tocant amb el dit o el ratolí.|«Empieza»: pruebas tú, tocando con el dedo o el ratón.", "«Comprova»: la prova toca sola i diu si funciona.|«Comprueba»: la prueba toca sola y dice si funciona.", "Si hi ha «Prova 1» i «Prova 2», han de funcionar totes dues.|Si hay «Prueba 1» y «Prueba 2», tienen que funcionar las dos."], pic: 'img/ic/check.webp',
        nota: "Explica-ho abans dels reptes i ensenya on és el + de la capçalera per fer un segon guió.|Explícalo antes de los retos y enseña dónde está el + de la cabecera para hacer un segundo guion." },
      { id: 's14', k: 'repte', t: "Reptes|Retos", timer: 10, punts: ["1. El gat dormilega|1. El gato dormilón", "2. L'ocell i la papallona|2. El pájaro y la mariposa", "3. El drac que creix (dues proves)|3. El dragón que crece (dos pruebas)", "4. La Tuga, amb dos guions alhora|4. Tuga, con dos guiones a la vez"],
        nota: "Al 3, si falla la prova 2, pregunta què fa el drac quan ningú no el toca. Al 4, que expliquin per què els dos guions es fan alhora.|En el 3, si falla la prueba 2, pregunta qué hace el dragón cuando nadie lo toca. En el 4, que expliquen por qué los dos guiones se hacen a la vez." },
      { id: 's15', k: 'activitat', t: "Crea: el bosc que es desperta|Crea: el bosque que se despierta", timer: 5, x: "Almenys 3 personatges que responguin de manera diferent; algun, amb dos guions alhora. El company/a endevina quants guions té cadascun.|Al menos 3 personajes que respondan de manera diferente; alguno, con dos guiones a la vez. El compañero/a adivina cuántos guiones tiene cada uno.",
        nota: "Celebra les respostes originals i els personatges que fan dues coses alhora sense conflictes.|Celebra las respuestas originales y los personajes que hacen dos cosas a la vez sin conflictos." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Cada toc fa (o torna a començar) el guió de toc.|Cada toque hace (o vuelve a empezar) el guion de toque.", "Un esdeveniment pot engegar molts guions en paral·lel.|Un evento puede poner en marcha muchos guiones en paralelo.", "Dues ordres alhora sobre la mateixa cosa: guanya l'última.|Dos órdenes a la vez sobre lo mismo: gana la última."],
        nota: "Anuncia la setmana vinent: les tecles, que poden fer reaccionar molts personatges alhora.|Anuncia la semana que viene: las teclas, que pueden hacer reaccionar a muchos personajes a la vez." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["A espera 1 s i diu «Hola!»; B diu «Bon dia!» ja: què es veu primer?|A espera 1 s y dice «¡Hola!»; B dice «¡Buenos días!» ya: ¿qué se ve primero?", "Dues frases alhora: com fas que es llegeixin?|Dos frases a la vez: ¿cómo haces que se lean?"],
        nota: "Anota qui encara pensa que els guions es fan per torns.|Anota quién todavía piensa que los guiones se hacen por turnos." }
    ],
    print: [
      { id: 'p1', t: "Targetes: dos guions, un sol actor|Tarjetas: dos guiones, un solo actor", k: 'targetes',
        intro: "Un paquet per grup de 4. Cada parella de targetes té el mateix esdeveniment (el copet a l'espatlla) i es fa alhora. La parella del conflicte és per a la segona ronda.|Un paquete por grupo de 4. Cada pareja de tarjetas tiene el mismo evento (el toque en el hombro) y se hace a la vez. La pareja del conflicto es para la segunda ronda.",
        items: [
          { t: "Guió A · Quan em toquen → aixeco el braç, compto fins a 3, l'abaixo 🙋|Guion A · Cuando me tocan → levanto el brazo, cuento hasta 3, lo bajo 🙋", n: 2 },
          { t: "Guió B · Quan em toquen → compto fins a 1 i dic «Hola!» 👋|Guion B · Cuando me tocan → cuento hasta 1 y digo «¡Hola!» 👋", n: 2 },
          { t: "Guió A · Quan em toquen → giro el cap a banda i banda 3 vegades ↔️|Guion A · Cuando me tocan → giro la cabeza a un lado y al otro 3 veces ↔️", n: 1 },
          { t: "Guió B · Quan em toquen → compto fins a 2 i pico de mans 👏|Guion B · Cuando me tocan → cuento hasta 2 y doy una palmada 👏", n: 1 },
          { t: "Conflicte A · Quan em toquen → dic «Bon dia!» 🌞|Conflicto A · Cuando me tocan → digo «¡Buenos días!» 🌞", n: 1 },
          { t: "Conflicte B · Quan em toquen → dic «Bona nit!» 🌙|Conflicto B · Cuando me tocan → digo «¡Buenas noches!» 🌙", n: 1 },
          { t: "Espera ___ segons ⏱️ (per arreglar el conflicte)|Espera ___ segundos ⏱️ (para arreglar el conflicto)", n: 2 }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Les fletxes del teclat ---------- */
  'g3-2': {
    intro: "Un altre esdeveniment: prémer una tecla. L'alumnat programa els controls del cavaller amb les fletxes del teclat (al mòbil, els botons de sota l'escenari): cada fletxa té el seu guió amb «apunta en direcció» i «mou-te», i si es manté la tecla premuda el guió es repeteix sol, sense cap «per sempre». La idea nova de la sessió és que una tecla avisa tots els personatges: tots els que tenen un guió per a aquella tecla reaccionen alhora. Ho viuen amb «El regidor/a d'escena», un teatre on el regidor/a aixeca targetes de tecles i cada actor reacciona al seu senyal. Acaben programant els controls complets de la Flama.|Otro evento: pulsar una tecla. El alumnado programa los controles del caballero con las flechas del teclado (en el móvil, los botones de debajo del escenario): cada flecha tiene su guion con «apunta en dirección» y «muévete», y si se mantiene la tecla pulsada el guion se repite solo, sin ningún «por siempre». La idea nueva de la sesión es que una tecla avisa a todos los personajes: todos los que tienen un guion para esa tecla reaccionan a la vez. Lo viven con «El regidor/a de escena», un teatro donde el regidor/a levanta tarjetas de teclas y cada actor reacciona a su señal. Terminan programando los controles completos de Flama.",
    claus: [
      "Prémer una tecla és un esdeveniment que avisa tots els personatges: reaccionen alhora els que tenen un guió per a aquella tecla.|Pulsar una tecla es un evento que avisa a todos los personajes: reaccionan a la vez los que tienen un guion para esa tecla.",
      "«Apunta en direcció» fa mirar cap a un costat, miri on miri abans; «mou-te» avança cap on mira.|«Apunta en dirección» hace mirar hacia un lado, mire donde mire antes; «muévete» avanza hacia donde mira.",
      "Per moure's en quatre direccions calen quatre guions, un per fletxa.|Para moverse en cuatro direcciones hacen falta cuatro guiones, uno por flecha.",
      "Mantenir la tecla repeteix el guió: un «per sempre» dins del guió d'una tecla fa que el personatge no s'aturi mai.|Mantener la tecla repite el guion: un «por siempre» dentro del guion de una tecla hace que el personaje no se pare nunca."
    ],
    prev: [
      "Les direccions 0, 90, 180 i -90 (unitat 1, sessió 2).|Las direcciones 0, 90, 180 y -90 (unidad 1, sesión 2).",
      "Els guions de toc i els guions en paral·lel (sessió 1).|Los guiones de toque y los guiones en paralelo (sesión 1).",
      "El bucle «per sempre» i per què no s'acaba (unitat 2).|El bucle «por siempre» y por qué no se acaba (unidad 2)."
    ],
    faq: [
      ["Per què el cavaller va d'esquena quan vaig a l'esquerra?|¿Por qué el caballero va de espaldas cuando voy a la izquierda?",
        "Perquè fas servir «mou-te -10» sense girar-lo. Amb «apunta en direcció -90» i «mou-te 10», mira cap on va.|Porque usas «muévete -10» sin girarlo. Con «apunta en dirección -90» y «muévete 10», mira hacia donde va."],
      ["Les fletxes del teclat no fan res.|Las flechas del teclado no hacen nada.",
        "Primer toca «Comença» (o una fletxa en pantalla). Si encara no va, fes un clic a l'escenari perquè la pàgina rebi les tecles.|Primero toca «Empieza» (o una flecha en pantalla). Si aún no va, haz un clic en el escenario para que la página reciba las teclas."],
      ["Puc fer servir altres tecles?|¿Puedo usar otras teclas?",
        "En aquests reptes hi ha les fletxes i l'espai. L'espai és perfecte per a una sorpresa o un salt.|En estos retos están las flechas y el espacio. El espacio es perfecto para una sorpresa o un salto."],
      ["Si mantinc la fletxa, per què al principi fa una pausa?|Si mantengo la flecha, ¿por qué al principio hace una pausa?",
        "Com quan mantens una lletra al teclat: primer s'escriu una, s'espera un moment i després es repeteix de pressa.|Como cuando mantienes una letra en el teclado: primero se escribe una, se espera un momento y después se repite deprisa."],
      ["Per què l'ocell no arriba a l'estrella si poso «mou-te 20»?|¿Por qué el pájaro no llega a la estrella si pongo «muévete 20»?",
        "La prova prem les tecles un temps fix i amb 20 passos es passa o va a parar a un altre lloc. Fes servir «mou-te 10 passos», com diu el repte.|La prueba pulsa las teclas un tiempo fijo y con 20 pasos se pasa o va a parar a otro sitio. Usa «muévete 10 pasos», como dice el reto."],
      ["Si dos personatges tenen un guió per a l'espai, quin reacciona?|Si dos personajes tienen un guion para el espacio, ¿cuál reacciona?",
        "Tots dos, i alhora: la tecla avisa tots els personatges. Per això als videojocs un sol botó pot fer saltar el protagonista i sonar la música a la vegada.|Los dos, y a la vez: la tecla avisa a todos los personajes. Por eso en los videojuegos un solo botón puede hacer saltar al protagonista y sonar la música a la vez."]
    ],
    tec: [
      ["Al mòbil no hi ha teclat.|En el móvil no hay teclado.",
        "Sota l'escenari surten botons de fletxa i d'espai: funcionen igual que les tecles.|Debajo del escenario salen botones de flecha y de espacio: funcionan igual que las teclas."],
      ["En prémer les fletxes, la pàgina es desplaça amunt i avall.|Al pulsar las flechas, la página se desplaza arriba y abajo.",
        "Que faci un clic a l'escenari abans de fer servir les fletxes; si continua, que faci servir els botons de pantalla.|Que haga un clic en el escenario antes de usar las flechas; si continúa, que use los botones de pantalla."],
      ["Teclats sense fletxes o portàtils petits.|Teclados sin flechas o portátiles pequeños.",
        "Feu servir els botons de pantalla amb el ratolí: la prova «Comprova» prem les tecles sola igualment.|Usad los botones de pantalla con el ratón: la prueba «Comprueba» pulsa las teclas sola igualmente."],
      ["El cavaller surt de l'escenari i no es veu.|El caballero sale del escenario y no se ve.",
        "Toqueu la fletxa rodona per tornar-lo al lloc del principi i proveu de nou.|Tocad la flecha redonda para devolverlo al sitio del principio y probad de nuevo."],
      ["Els fulls de les parets no es veuen des de tot arreu.|Las hojas de las paredes no se ven desde todas partes.",
        "Escriviu els números ben grossos o poseu-los també a la pissarra amb una brúixola dibuixada.|Escribid los números bien grandes o ponedlos también en la pizarra con una brújula dibujada."]
    ],
    seg: [
      "A «El regidor/a d'escena», els actors fan passos curts i el regidor/a vigila que no xoquin amb taules ni persones.|En «El regidor/a de escena», los actores dan pasos cortos y el regidor/a vigila que no choquen con mesas ni personas.",
      "Posició davant el teclat: canells relaxats i esquena recta; descans a la pausa activa.|Posición delante del teclado: muñecas relajadas y espalda recta; descanso en la pausa activa."
    ],
    extra: [
      "Fer que el cavaller canviï de vestit a cada pas perquè sembli que camina.|Hacer que el caballero cambie de disfraz con cada paso para que parezca que camina.",
      "Afegir a l'espai un salt: canvia y en 40, espera i canvia y en -40 (ho veurem a la unitat 4).|Añadir al espacio un salto: cambia y en 40, espera y cambia y en -40 (lo veremos en la unidad 4).",
      "Afegir un segon personatge que també reaccioni a l'espai (per exemple, un ocell que vola) i comprovar que tots dos ho fan alhora.|Añadir un segundo personaje que también reaccione al espacio (por ejemplo, un pájaro que vuela) y comprobar que los dos lo hacen a la vez."
    ],
    trans: [
      "Matemàtiques: orientació en el pla i angles (quart de volta, mitja volta).|Matemáticas: orientación en el plano y ángulos (cuarto de vuelta, media vuelta).",
      "Teatre: el regidor/a i els senyals d'escena (llum, música, entrada d'actors).|Teatro: el regidor/a y las señales de escena (luz, música, entrada de actores).",
      "Sessió següent: els personatges s'avisaran amb missatges per parlar per torns.|Sesión siguiente: los personajes se avisarán con mensajes para hablar por turnos."
    ],
    obj: [
      "L'alumne/a programa un guió per a cada fletxa del teclat amb la capçalera «Quan premo la tecla».|El alumno/a programa un guion para cada flecha del teclado con la cabecera «Al pulsar la tecla».",
      "L'alumne/a fa servir «apunta en direcció» amb els valors 90, -90, 0 i 180 i explica cap on mira el personatge.|El alumno/a usa «apunta en dirección» con los valores 90, -90, 0 y 180 y explica hacia dónde mira el personaje.",
      "L'alumne/a explica per què no cal (ni convé) un «per sempre» dins del guió d'una tecla.|El alumno/a explica por qué no hace falta (ni conviene) un «por siempre» dentro del guion de una tecla.",
      "L'alumne/a explica que una tecla fa reaccionar alhora tots els personatges que tenen un guió per a aquella tecla, i troba i arregla un error de direcció en uns controls.|El alumno/a explica que una tecla hace reaccionar a la vez a todos los personajes que tienen un guion para esa tecla, y encuentra y arregla un error de dirección en unos controles."
    ],
    comp: [
      "Competència digital (CD5): programar el control d'un personatge amb el teclat|Competencia digital (CD5): programar el control de un personaje con el teclado",
      "Pensament computacional: esdeveniments de teclat, guions de diversos personatges que reaccionen alhora i depuració|Pensamiento computacional: eventos de teclado, guiones de varios personajes que reaccionan a la vez y depuración",
      "Matemàtiques (sentit espacial): direccions en graus, orientació absoluta (com una brúixola)|Matemáticas (sentido espacial): direcciones en grados, orientación absoluta (como una brújula)",
      "Expressió artística: coordinar una escena de teatre amb senyals|Expresión artística: coordinar una escena de teatro con señales"
    ],
    vocab: [
      ["Tecla|Tecla", "Un botó del teclat; prémer-la és un esdeveniment.|Un botón del teclado; pulsarla es un evento."],
      ["Direcció|Dirección", "Cap on mira el personatge: 90 dreta, -90 esquerra, 0 amunt, 180 avall.|Hacia dónde mira el personaje: 90 derecha, -90 izquierda, 0 arriba, 180 abajo."],
      ["Apuntar|Apuntar", "Fer que el personatge miri cap a una direcció, sense moure'l.|Hacer que el personaje mire hacia una dirección, sin moverlo."],
      ["Controls|Controles", "Els guions de les tecles que fan moure un personatge.|Los guiones de las teclas que hacen mover a un personaje."],
      ["Regidor/a|Regidor/a", "Al teatre, la persona que dona els senyals; a l'escenari, la tecla que avisa tots els personatges.|En el teatro, la persona que da las señales; en el escenario, la tecla que avisa a todos los personajes."],
      ["Mantenir premut|Mantener pulsado", "No deixar anar la tecla: el guió es repeteix sol.|No soltar la tecla: el guion se repite solo."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Les fletxes del teclat»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Las flechas del teclado»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "4 fulls DIN A4 amb els números 0, 90, 180 i -90 enganxats a les quatre parets de l'aula|4 hojas DIN A4 con los números 0, 90, 180 y -90 pegadas en las cuatro paredes del aula",
        "1 paquet de targetes de senyals per grup de 4 (imprimible 1) i un espai lliure d'uns 3 × 3 metres per grup|1 paquete de tarjetas de señales por grupo de 4 (imprimible 1) y un espacio libre de unos 3 × 3 metros por grupo"
      ],
      imprimir: [
        "1 paquet de targetes «El regidor/a d'escena» per grup de 4 (imprimible 1)|1 paquete de tarjetas «El regidor/a de escena» por grupo de 4 (imprimible 1)"
      ],
      prep: [
        "El dia abans (15 min): imprimir i retallar un paquet de targetes per grup de 4 i preparar els 4 fulls de les direccions.|El día antes (15 min): imprimir y recortar un paquete de tarjetas por grupo de 4 y preparar las 4 hojas de las direcciones.",
        "Abans de la classe (5 min): enganxar el 0 a la paret de la pissarra, el 90 a la dreta, el 180 al fons i el -90 a l'esquerra.|Antes de la clase (5 min): pegar el 0 en la pared de la pizarra, el 90 a la derecha, el 180 al fondo y el -90 a la izquierda.",
        "Provar les demos de les quatre fletxes, la del «per sempre» que no para i la de l'espai amb tres personatges.|Probar las demos de las cuatro flechas, la del «por siempre» que no para y la del espacio con tres personajes.",
        "Deixar els ordinadors engegats amb el perfil de cada alumne/a iniciat.|Dejar los ordenadores encendidos con el perfil de cada alumno/a iniciado."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: el cavaller i les fletxes|Bienvenida: el caballero y las flechas", fase: 'inici',
        fa: "Repassa la sessió anterior amb dues preguntes ràpides. Presenta la missió: el cavaller ha de travessar el bosc i el mourem amb les fletxes. Pregunta en quins videojocs una sola tecla fa passar diverses coses alhora.|Repasa la sesión anterior con dos preguntas rápidas. Presenta la misión: el caballero tiene que cruzar el bosque y lo moveremos con las flechas. Pregunta en qué videojuegos una sola tecla hace pasar varias cosas a la vez.",
        diu: ["La setmana passada, un toc podia engegar dos guions. Com s'hi feia? (Amb el + de la capçalera.)|La semana pasada, un toque podía poner en marcha dos guiones. ¿Cómo se hacía? (Con el + de la cabecera.)", "Avui l'esdeveniment serà prémer una tecla.|Hoy el evento será pulsar una tecla.", "En un videojoc, quan premeu el botó de saltar, què més passa a la vegada? (Un so, una animació…)|En un videojuego, cuando pulsáis el botón de saltar, ¿qué más pasa a la vez? (Un sonido, una animación…)"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Tecles i direccions|Teclas y direcciones", fase: 'teoria',
        fa: "Mostra l'animació de les tecles i, en un minut, recorda les direccions de la unitat 1 (tothom dret, es giren cap a la paret del número). Després, la demo de les quatre fletxes, la de l'error del «per sempre» i la de l'espai amb tres personatges que reaccionen alhora.|Muestra la animación de las teclas y, en un minuto, recuerda las direcciones de la unidad 1 (todos de pie, se giran hacia la pared del número). Después, la demo de las cuatro flechas, la del error del «por siempre» y la del espacio con tres personajes que reaccionan a la vez.",
        diu: ["90! -90! 0! 180! On mireu?|¡90! ¡-90! ¡0! ¡180! ¿Hacia dónde miráis?", "Si mires a la dreta i fas «mou-te», cap on vas?|Si miras a la derecha y haces «muévete», ¿hacia dónde vas?", "He premut la fletxa un moment. Per què el cavaller no para?|He pulsado la flecha un momento. ¿Por qué el caballero no para?", "He premut l'espai una vegada: quants personatges han reaccionat? (Tres, alhora.)|He pulsado el espacio una vez: ¿cuántos personajes han reaccionado? (Tres, a la vez.)"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El regidor/a d'escena|El regidor/a de escena", fase: 'desconnectat',
        fa: "Grups de 4: un regidor/a i tres actors. Cada actor tria dues targetes de guió de tecla (per exemple, «ESPAI → reverència» i «FLETXA DRETA → apunta a 90 i un pas») i les deixa davant seu. El regidor/a aixeca targetes de tecla: reaccionen alhora tots els actors que tenen aquella tecla. Si la manté aixecada, el guió es repeteix. Després, el grup prepara una escena de 20 segons només amb senyals. A l'última ronda, un actor fa servir la targeta de l'error («← apunta a 90»): què veu el públic?|Grupos de 4: un regidor/a y tres actores. Cada actor elige dos tarjetas de guion de tecla (por ejemplo, «ESPACIO → reverencia» y «FLECHA DERECHA → apunta a 90 y un paso») y las deja delante. El regidor/a levanta tarjetas de tecla: reaccionan a la vez todos los actores que tienen esa tecla. Si la mantiene levantada, el guion se repite. Después, el grupo prepara una escena de 20 segundos solo con señales. En la última ronda, un actor usa la tarjeta del error («← apunta a 90»): ¿qué ve el público?",
        diu: ["Només reacciona qui té un guió per a aquesta tecla, i tots alhora.|Solo reacciona quien tiene un guion para esta tecla, y todos a la vez.", "Fixeu-vos: 90 sempre és la mateixa paret, miris on miris.|Fijaos: 90 siempre es la misma pared, mires donde mires.", "Si el regidor/a aixeca una tecla que no té ningú, què passa? (Res.)|Si el regidor/a levanta una tecla que no tiene nadie, ¿qué pasa? (Nada.)", "Amb la targeta de l'error, cap on va l'actor quan es veu «esquerra»?|Con la tarjeta del error, ¿hacia dónde va el actor cuando se ve «izquierda»?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 13, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. A «El regidor/a d'escena» poden tocar «Ho hem fet!». A la prova dels controls, que facin servir el teclat i que mirin com es gira el cavaller amb la fletxa esquerra.|Avanzan hasta la pausa activa. En «El regidor/a de escena» pueden tocar «¡Lo hemos hecho!». En la prueba de los controles, que usen el teclado y que miren cómo se gira el caballero con la flecha izquierda.",
        diu: ["Mantén la fletxa premuda: què passa?|Mantén la flecha pulsada: ¿qué pasa?", "Què fa la tecla espai? Mira el seu guió.|¿Qué hace la tecla espacio? Mira su guion.", "Per què el cavaller va cap a la dreta encara que premis la fletxa esquerra a la pregunta? (Li falta l'«apunta».)|¿Por qué el caballero va hacia la derecha aunque pulses la flecha izquierda en la pregunta? (Le falta el «apunta».)", "A l'«Investiga», quin bloc no deixa que el cavaller s'aturi? (El «per sempre».)|En el «Investiga», ¿qué bloque no deja que el caballero se pare? (El «por siempre».)"],
        slides: ['s12'], app: "Del recorda fins a «Investiga»: preguntes, història, les cinc targetes de «Descobreix», ordenar el guió de l'esquerra, «El regidor/a d'escena» (ja fet), provar els controls, la pregunta del cavaller sense «apunta» i el «per sempre» que no para.|Del recuerda hasta «Investiga»: preguntas, historia, las cinco tarjetas de «Descubre», ordenar el guion de la izquierda, «El regidor/a de escena» (ya hecho), probar los controles, la pregunta del caballero sin «apunta» y el «por siempre» que no para.", org: "Individual|Individual" },
      { min: 12, t: "Reptes: els controls|Retos: los controles", fase: 'ordinador',
        fa: "Pausa activa junts. Recorda que els reptes es proven amb el teclat i es comproven amb «Comprova» (les tecles es premen soles). Remarca que al repte de l'ocell cal «mou-te 10 passos», perquè la prova prem les tecles un temps concret.|Pausa activa juntos. Recuerda que los retos se prueban con el teclado y se comprueban con «Comprueba» (las teclas se pulsan solas). Remarca que en el reto del pájaro hace falta «muévete 10 pasos», porque la prueba pulsa las teclas un tiempo concreto.",
        diu: ["Quan va a l'esquerra, el cavaller mira a l'esquerra? Si no, què falta?|Cuando va a la izquierda, ¿el caballero mira a la izquierda? Si no, ¿qué falta?", "Als controls espatllats, quin número està malament?|En los controles estropeados, ¿qué número está mal?", "Amunt és 0 i avall 180: quants guions tenen els controls de l'ocell? (Quatre.)|Arriba es 0 y abajo 180: ¿cuántos guiones tienen los controles del pájaro? (Cuatro.)"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: cap a la bandera, la poma i la cistella, l'ocell missatger i els controls espatllats.|«Pausa activa» y los cuatro retos: hacia la bandera, la manzana y la cesta, el pájaro mensajero y los controles estropeados.", org: "Tot el grup i individual|Todo el grupo e individual" },
      { min: 5, t: "Crea: els controls de la Flama|Crea: los controles de Flama", fase: 'crea',
        fa: "Cada alumne/a programa les quatre fletxes de la Flama i una sorpresa amb l'espai (parlar, canviar de vestit, fer un so). Quan el tinguin, intercanvien l'ordinador amb el company/a: l'altre prova els controls sense mirar els guions i diu si totes les fletxes van cap on toca. Qui acabi pot afegir un canvi de vestit a cada pas.|Cada alumno/a programa las cuatro flechas de Flama y una sorpresa con el espacio (hablar, cambiar de disfraz, hacer un sonido). Cuando lo tengan, intercambian el ordenador con el compañero/a: el otro prueba los controles sin mirar los guiones y dice si todas las flechas van hacia donde toca. Quien termine puede añadir un cambio de disfraz en cada paso.",
        diu: ["Quina sorpresa farà la teva Flama amb l'espai?|¿Qué sorpresa hará tu Flama con el espacio?", "Prova els controls del company/a: les quatre fletxes van cap on toca?|Prueba los controles del compañero/a: ¿las cuatro flechas van hacia donde toca?", "Què fa la sorpresa de l'espai? Endevina-ho abans de prémer-la.|¿Qué hace la sorpresa del espacio? Adivínalo antes de pulsarla."],
        slides: ['s15'], app: "Pas «Crea»: El meu personatge amb controls.|Paso «Crea»: Mi personaje con controles.", org: "Individual i parelles|Individual y parejas" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum (tecles que avisen tothom, apuntar i avançar, i mantenir la tecla). Deixa que facin les dues preguntes finals de l'app i com s'han sentit. A la porta, fes a cada alumne/a una pregunta del tiquet i anota qui confon 0 i 90.|Repasa las tres ideas de la sesión con el resumen (teclas que avisan a todos, apuntar y avanzar, y mantener la tecla). Deja que hagan las dos preguntas finales de la app y cómo se han sentido. En la puerta, haz a cada alumno/a una pregunta del ticket y anota quién confunde 0 y 90.",
        diu: ["Si tres personatges tenen un guió per a l'espai, quants reaccionen quan el prems? (Tots tres, alhora.)|Si tres personajes tienen un guion para el espacio, ¿cuántos reaccionan cuando lo pulsas? (Los tres, a la vez.)", "Per què no cal un «per sempre» dins el guió d'una tecla? (Mantenir la tecla ja el repeteix.)|¿Por qué no hace falta un «por siempre» dentro del guion de una tecla? (Mantener la tecla ya lo repite.)", "La setmana vinent els personatges parlaran per torns amb missatges.|La semana que viene los personajes hablarán por turnos con mensajes."],
        slides: ['s16', 's17'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
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
        "La prova prem cada tecla un temps fix: amb passos més petits no hi arriba. Que torni a «mou-te 10 passos».|La prueba pulsa cada tecla un tiempo fijo: con pasos más pequeños no llega. Que vuelva a «muévete 10 pasos»."],
      ["Als controls espatllats, canvia el guió de la fletxa dreta en lloc del de l'esquerra.|En los controles estropeados, cambia el guion de la flecha derecha en lugar del de la izquierda.",
        "Que llegeixi en veu alta la capçalera de cada guió: quin guió s'executa quan prems la fletxa esquerra?|Que lea en voz alta la cabecera de cada guion: ¿qué guion se ejecuta cuando pulsas la flecha izquierda?"]
    ],
    diff: {
      mes: "Afegir als controls de la Flama la tecla espai per fer un «salt»: apunta amunt, avança, espera i torna avall. O afegir un segon personatge que reaccioni a la mateixa tecla, alhora que la Flama.|Añadir a los controles de Flama la tecla espacio para hacer un «salto»: apunta arriba, avanza, espera y vuelve abajo. O añadir un segundo personaje que reaccione a la misma tecla, a la vez que Flama.",
      menys: "Començar només amb la fletxa dreta i tenir la brúixola de direccions impresa a la taula. Tenir a mà les targetes del regidor/a per «fer» cada guió amb el cos abans de programar-lo.|Empezar solo con la flecha derecha y tener la brújula de direcciones impresa en la mesa. Tener a mano las tarjetas del regidor/a para «hacer» cada guion con el cuerpo antes de programarlo."
    },
    aval: {
      ticket: ["El cavaller i el drac tenen un guió per a l'espai. Què passa quan el prems?|El caballero y el dragón tienen un guion para el espacio. ¿Qué pasa cuando lo pulsas?", "Per què no cal un «per sempre» al guió d'una fletxa?|¿Por qué no hace falta un «por siempre» en el guion de una flecha?"],
      rubric: [
        ["Direccions|Direcciones", "Fa servir 90, -90, 0 i 180 correctament sense ajuda.|Usa 90, -90, 0 y 180 correctamente sin ayuda.", "Necessita la brúixola per triar el número.|Necesita la brújula para elegir el número."],
        ["Guions de tecla|Guiones de tecla", "Fa un guió per tecla amb «apunta» i «mou-te».|Hace un guion por tecla con «apunta» y «muévete».", "Barreja tecles o fa servir «mou-te» negatiu.|Mezcla teclas o usa «muévete» negativo."],
        ["Una tecla, molts personatges|Una tecla, muchos personajes", "Explica que una tecla fa reaccionar alhora tots els personatges que en tenen un guió, i troba sol/a l'error dels controls espatllats.|Explica que una tecla hace reaccionar a la vez a todos los personajes que tienen un guion para ella, y encuentra solo/a el error de los controles estropeados.", "Creu que només reacciona un personatge o troba l'error amb una pregunta guia.|Cree que solo reacciona un personaje o encuentra el error con una pregunta guía."],
        ["Controls complets|Controles completos",
          "Programa les quatre fletxes i una sorpresa amb l'espai, i el company/a les pot fer servir sense ajuda.|Programa las cuatro flechas y una sorpresa con el espacio, y el compañero/a las puede usar sin ayuda.",
          "Programa algunes fletxes, però alguna va cap al costat equivocat o falta l'espai.|Programa algunas flechas, pero alguna va hacia el lado equivocado o falta el espacio."]
      ]
    },
    casa: "A casa, feu «El regidor/a d'escena» amb la família: cadascú escriu dos guions de tecla i una persona aixeca les targetes. Reaccionen tots alhora els que tenen aquella tecla!|En casa, haced «El regidor/a de escena» con la familia: cada uno escribe dos guiones de tecla y una persona levanta las tarjetas. ¡Reaccionan todos a la vez los que tienen esa tecla!",
    slides: [
      { id: 's1', k: 'portada', t: "Les fletxes del teclat|Las flechas del teclado", x: "El cavaller ha de travessar el bosc, i tu el mous amb les fletxes.|El caballero tiene que cruzar el bosque, y tú lo mueves con las flechas.", nota: "Presenta l'objectiu: un personatge que es mou amb les quatre fletxes i tecles que fan reaccionar molts personatges alhora.|Presenta el objetivo: un personaje que se mueve con las cuatro flechas y teclas que hacen reaccionar a muchos personajes a la vez." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["«Quan toco aquest personatge» respon a cada toc.|«Al tocar este personaje» responde a cada toque.", "Un esdeveniment pot engegar diversos guions alhora.|Un evento puede poner en marcha varios guiones a la vez."], nota: "Dues preguntes ràpides a l'atzar.|Dos preguntas rápidas al azar." },
      { id: 's3', k: 'pregunta', t: "Què es controla amb fletxes?|¿Qué se controla con flechas?", punts: ["Els personatges dels videojocs|Los personajes de los videojuegos", "El botó de saltar: salt, so i animació alhora|El botón de saltar: salto, sonido y animación a la vez", "El menú d'una app|El menú de una app"], nota: "Recull exemples: totes són tecles que fan començar alguna cosa, sovint més d'una a la vegada.|Recoge ejemplos: todas son teclas que hacen empezar algo, a menudo más de una a la vez." },
      { id: 's4', k: 'anim', t: "Cada tecla, un esdeveniment|Cada tecla, un evento", anim: 'g3keys', nota: "Fes notar que el guió canvia segons la fletxa que es prem.|Haz notar que el guion cambia según la flecha que se pulsa." },
      { id: 's5', k: 'anim', t: "Cap on mira?|¿Hacia dónde mira?", anim: 'g3dir', x: "90 dreta · -90 esquerra · 0 amunt · 180 avall|90 derecha · -90 izquierda · 0 arriba · 180 abajo", nota: "Tothom dret: digues números i que es girin cap a la paret.|Todos de pie: di números y que se giren hacia la pared." },
      { id: 's6', k: 'media', t: "Quatre fletxes, quatre guions|Cuatro flechas, cuatro guiones",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'cavaller', art: 'cavaller', x: -100, y: -60 }], keys: ['left', 'right', 'up', 'down'], input: [{ t: .5, key: 'right', dur: 1.2 }, { t: 2, key: 'up', dur: .8 }, { t: 3.2, key: 'left', dur: 1.2 }, { t: 4.8, key: 'down', dur: .8 }], time: 6.5 }, prog: `@cavaller key:right{ point:90 move:10 } key:left{ point:-90 move:10 } key:up{ point:0 move:10 } key:down{ point:180 move:10 }` },
        nota: "Abans de cada tram, que diguin quina fletxa s'està prement.|Antes de cada tramo, que digan qué flecha se está pulsando." },
      { id: 's7', k: 'pregunta', t: "Prediu|Predice", x: "El cavaller mira a la dreta. La fletxa esquerra només té «mou-te 10 passos». Cap on va?|El caballero mira a la derecha. La flecha izquierda solo tiene «muévete 10 pasos». ¿Hacia dónde va?", nota: "Resposta: a la dreta! «Mou-te» avança cap on mira.|Respuesta: ¡a la derecha! «Muévete» avanza hacia donde mira." },
      { id: 's8', k: 'media', t: "Compte: el «per sempre»|Cuidado: el «por siempre»",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'cavaller', art: 'cavaller', x: -170, y: -60 }], keys: ['right'], input: [{ t: .8, key: 'right', dur: .2 }], time: 4.5 }, prog: `@cavaller key:right{ point:90 forever{ move:4 } }` },
        nota: "Només s'ha premut un moment i no para mai. Dins el guió de la tecla no hi ha d'haver «per sempre».|Solo se ha pulsado un momento y no para nunca. Dentro del guion de la tecla no tiene que haber «por siempre»." },
      { id: 's9', k: 'media', t: "Una tecla, molts personatges|Una tecla, muchos personajes", x: "L'espai fa parlar el cavaller, créixer el drac i volar l'ocell, tot alhora.|El espacio hace hablar al caballero, crecer al dragón y volar al pájaro, todo a la vez.",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'cavaller', art: 'cavaller', x: -120, y: -60 }, { id: 'drac', art: 'drac', x: 110, y: -40 }, { id: 'ocell', art: 'ocell', x: 0, y: 100, size: 80 }], keys: ['space'], input: [{ t: .8, key: 'space', dur: .2 }, { t: 3.6, key: 'space', dur: .2 }], time: 6 },
          prog: `@cavaller key:space{ say:"En guàrdia!|¡En guardia!",1.5 } @drac key:space{ chsize:30 wait:1 chsize:-30 } @ocell key:space{ rep:6{ chy:6 next wait:0.05 } rep:6{ chy:-6 next wait:0.05 } }` },
        nota: "Abans de prémer, pregunta quants personatges reaccionaran. Després, que diguin on és el guió de cadascun (a la seva pestanya).|Antes de pulsar, pregunta cuántos personajes reaccionarán. Después, que digan dónde está el guion de cada uno (en su pestaña)." },
      { id: 's10', k: 'activitat', t: "El regidor/a d'escena|El regidor/a de escena", timer: 12, punts: ["Cada actor tria dues targetes de guió de tecla.|Cada actor elige dos tarjetas de guion de tecla.", "El regidor/a aixeca una tecla: reaccionen alhora tots els qui la tenen.|El regidor/a levanta una tecla: reaccionan a la vez todos los que la tienen.", "Targeta aixecada = el guió es repeteix.|Tarjeta levantada = el guion se repite.", "Prepareu una escena de 20 segons només amb senyals.|Preparad una escena de 20 segundos solo con señales."], nota: "Passos curts i a poc a poc. Si algú reacciona a una tecla que no és seva, és un «bug»: el grup el troba.|Pasos cortos y despacio. Si alguien reacciona a una tecla que no es suya, es un «bug»: el grupo lo encuentra." },
      { id: 's11', k: 'activitat', t: "La targeta de l'error|La tarjeta del error", punts: ["Un actor té «← apunta a 90».|Un actor tiene «← apunta a 90».", "Què veu el públic quan el regidor/a aixeca l'esquerra?|¿Qué ve el público cuando el regidor/a levanta la izquierda?", "Com l'arreglaríeu?|¿Cómo la arreglaríais?"], nota: "És el mateix error que el del repte dels controls espatllats.|Es el mismo error que el del reto de los controles estropeados." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre «Les fletxes del teclat».|Abre «Las flechas del teclado».", "Prova els controls amb el teclat.|Prueba los controles con el teclado.", "Para a la «Pausa activa».|Para en la «Pausa activa»."], nota: "Al mòbil o la tauleta hi ha botons de fletxa sota l'escenari.|En el móvil o la tableta hay botones de flecha debajo del escenario." },
      { id: 's13', k: 'concepte', t: "Provar i comprovar|Probar y comprobar", punts: ["«Comença»: mous tu el personatge amb el teclat.|«Empieza»: mueves tú el personaje con el teclado.", "«Comprova»: les tecles es premen soles.|«Comprueba»: las teclas se pulsan solas.", "Fes servir «mou-te 10 passos».|Usa «muévete 10 pasos»."], pic: 'img/ic/magnifier.webp', nota: "La prova prem cada tecla un temps fix: amb un altre número de passos pot no arribar.|La prueba pulsa cada tecla un tiempo fijo: con otro número de pasos puede no llegar." },
      { id: 's14', k: 'repte', t: "Reptes|Retos", timer: 12, punts: ["1. Cap a la bandera|1. Hacia la bandera", "2. La poma i la cistella|2. La manzana y la cesta", "3. L'ocell missatger (4 fletxes)|3. El pájaro mensajero (4 flechas)", "4. Els controls espatllats|4. Los controles estropeados"], nota: "Al 2, si falla, pregunta cap on mira el cavaller quan arriba a la cistella.|En el 2, si falla, pregunta hacia dónde mira el caballero cuando llega a la cesta." },
      { id: 's15', k: 'activitat', t: "Crea: els controls de la Flama|Crea: los controles de Flama", timer: 5, x: "Quatre fletxes i una sorpresa amb l'espai. Després, prova el del company/a.|Cuatro flechas y una sorpresa con el espacio. Después, prueba el del compañero/a.", nota: "Que diguin quina sorpresa han triat abans de mostrar-la.|Que digan qué sorpresa han elegido antes de mostrarla." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Una tecla avisa tots els personatges: reaccionen alhora els qui en tenen guió.|Una tecla avisa a todos los personajes: reaccionan a la vez los que tienen guion.", "«Apunta» fa mirar; «mou-te» fa avançar.|«Apunta» hace mirar; «muévete» hace avanzar.", "Mantenir la tecla repeteix el guió.|Mantener la tecla repite el guion."], nota: "Anuncia la setmana vinent: personatges que parlen entre ells.|Anuncia la semana que viene: personajes que hablan entre ellos." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Dos personatges amb guió per a l'espai: què passa quan el prems?|Dos personajes con guion para el espacio: ¿qué pasa cuando lo pulsas?", "Per què no cal «per sempre» a la fletxa?|¿Por qué no hace falta «por siempre» en la flecha?"], nota: "Anota qui encara confon 0 i 90.|Anota quién todavía confunde 0 y 90." }
    ],
    print: [
      { id: 'p1', t: "Targetes: el regidor/a d'escena|Tarjetas: el regidor/a de escena", k: 'targetes',
        intro: "Un paquet per grup de 4. Les targetes de TECLA són per al regidor/a; les de GUIÓ, per als actors (dues cadascun). Abans de començar, enganxeu els números 0, 90, 180 i -90 a les parets.|Un paquete por grupo de 4. Las tarjetas de TECLA son para el regidor/a; las de GUION, para los actores (dos cada uno). Antes de empezar, pegad los números 0, 90, 180 y -90 en las paredes.",
        items: [
          { t: "TECLA: → · ← · ↑ · ↓ · ESPAI · A (una per targeta) 🎬|TECLA: → · ← · ↑ · ↓ · ESPACIO · A (una por tarjeta) 🎬", n: 6 },
          { t: "GUIÓ · Quan sento → : apunta a 90 i fes un pas ➡️|GUION · Cuando oigo → : apunta a 90 y da un paso ➡️", n: 2 },
          { t: "GUIÓ · Quan sento ← : apunta a -90 i fes un pas ⬅️|GUION · Cuando oigo ← : apunta a -90 y da un paso ⬅️", n: 2 },
          { t: "GUIÓ · Quan sento ESPAI : fes una reverència 🙇|GUION · Cuando oigo ESPACIO : haz una reverencia 🙇", n: 2 },
          { t: "GUIÓ · Quan sento ESPAI : digues «En guàrdia!» ⚔️|GUION · Cuando oigo ESPACIO : di «¡En guardia!» ⚔️", n: 1 },
          { t: "GUIÓ · Quan sento A : pica de mans 3 vegades 👏|GUION · Cuando oigo A : da 3 palmadas 👏", n: 1 },
          { t: "GUIÓ amb error · Quan sento ← : apunta a 90 i fes un pas 🐞|GUION con error · Cuando oigo ← : apunta a 90 y da un paso 🐞", n: 1 }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Missatges entre personatges ---------- */
  'g3-3': {
    intro: "Els personatges aprenen a parlar per torns. L'alumnat descobreix el bloc «envia el missatge», que avisa tots els personatges alhora, i la capçalera «Quan rebo el missatge», que fa reaccionar només els que esperen aquell nom. En un diàleg, cada personatge diu la seva frase i, quan acaba, envia un missatge que passa el torn a l'altre. També veuen que un missatge pot fer reaccionar molts personatges alhora i fer aparèixer un personatge amagat. La classe comença fent parlar dos alumnes alhora, segueix amb el teatre dels missatges en grups i acaba amb una conversa programada.|Los personajes aprenden a hablar por turnos. El alumnado descubre el bloque «envía el mensaje», que avisa a todos los personajes a la vez, y la cabecera «Al recibir el mensaje», que hace reaccionar solo a los que esperan ese nombre. En un diálogo, cada personaje dice su frase y, cuando termina, envía un mensaje que pasa el turno al otro. También ven que un mensaje puede hacer reaccionar a muchos personajes a la vez y hacer aparecer a un personaje escondido. La clase empieza haciendo hablar a dos alumnos a la vez, sigue con el teatro de los mensajes en grupos y termina con una conversación programada.",
    claus: [
      "«Envia el missatge» el senten tots els personatges; reaccionen els que tenen «Quan rebo» amb aquell nom.|«Envía el mensaje» lo oyen todos los personajes; reaccionan los que tienen «Al recibir» con ese nombre.",
      "En un diàleg, l'«envia» va després del «digues» amb segons: així l'altre parla quan la frase s'ha acabat.|En un diálogo, el «envía» va después del «di» con segundos: así el otro habla cuando la frase se ha terminado.",
      "El nom del missatge que s'envia ha de ser exactament el que espera qui el rep.|El nombre del mensaje que se envía tiene que ser exactamente el que espera quien lo recibe.",
      "Un sol missatge pot fer reaccionar molts personatges alhora; «mostra't» fa aparèixer un personatge amagat.|Un solo mensaje puede hacer reaccionar a muchos personajes a la vez; «muéstrate» hace aparecer a un personaje escondido."
    ],
    prev: [
      "Dir frases amb segons perquè es llegeixin (unitat 1).|Decir frases con segundos para que se lean (unidad 1).",
      "Els esdeveniments i els guions de toc (sessió 1).|Los eventos y los guiones de toque (sesión 1).",
      "Amagar i mostrar personatges (unitat 1, sessió 3).|Esconder y mostrar personajes (unidad 1, sesión 3)."
    ],
    faq: [
      ["Puc enviar un missatge a un sol personatge?|¿Puedo enviar un mensaje a un solo personaje?",
        "Tots el senten, però només hi reacciona qui té «Quan rebo» amb aquell nom. Si només un el té, és com si l'enviessis a ell.|Todos lo oyen, pero solo reacciona quien tiene «Al recibir» con ese nombre. Si solo uno lo tiene, es como si se lo enviaras a él."],
      ["Per què parlen alhora si ja he posat el missatge?|¿Por qué hablan a la vez si ya he puesto el mensaje?",
        "Mira l'ordre: l'«envia» ha d'anar després del «digues», i el «digues» ha de tenir segons.|Mira el orden: el «envía» tiene que ir después del «di», y el «di» tiene que tener segundos."],
      ["Puc inventar el nom del missatge?|¿Puedo inventar el nombre del mensaje?",
        "En aquests reptes es tria d'una llista. Fes servir noms que s'entenguin, com el nom de qui ha de parlar.|En estos retos se elige de una lista. Usa nombres que se entiendan, como el nombre de quien tiene que hablar."],
      ["Què passa si envio un missatge que no espera ningú?|¿Qué pasa si envío un mensaje que no espera nadie?",
        "No passa res: el missatge s'envia, però cap personatge hi reacciona.|No pasa nada: el mensaje se envía, pero ningún personaje reacciona."],
      ["L'Estel és amagada: com la puc tocar?|Estel está escondida: ¿cómo la puedo tocar?",
        "No es pot tocar un personatge invisible. Fes-la aparèixer amb «mostra't» quan rebi un missatge.|No se puede tocar a un personaje invisible. Hazla aparecer con «muéstrate» cuando reciba un mensaje."],
      ["Els missatges són com els missatges del mòbil?|¿Los mensajes son como los mensajes del móvil?",
        "S'assemblen en el nom, però aquí són senyals entre personatges del mateix programa: no surten de l'escenari ni arriben a ningú de fora.|Se parecen en el nombre, pero aquí son señales entre personajes del mismo programa: no salen del escenario ni llegan a nadie de fuera."]
    ],
    tec: [
      ["No es veu el guió de l'altre personatge.|No se ve el guion del otro personaje.",
        "Que toqui la pestanya del personatge a la barra de dalt: cada un té els seus guions.|Que toque la pestaña del personaje en la barra de arriba: cada uno tiene sus guiones."],
      ["No sé com canviar el nom del missatge.|No sé cómo cambiar el nombre del mensaje.",
        "Toca el nom que hi ha dins del bloc «envia el missatge» i tria'n un altre de la llista.|Toca el nombre que hay dentro del bloque «envía el mensaje» y elige otro de la lista."],
      ["El diàleg s'acaba abans que es vegin totes les frases.|El diálogo se acaba antes de que se vean todas las frases.",
        "La prova dura uns segons: que faci frases de 2 segons i no gaires més de quatre o cinc torns.|La prueba dura unos segundos: que haga frases de 2 segundos y no muchos más de cuatro o cinco turnos."],
      ["Les bafarades es tapen entre elles.|Los bocadillos se tapan entre ellos.",
        "Els dos personatges parlen alhora: falta un missatge o l'«envia» va abans del «digues».|Los dos personajes hablan a la vez: falta un mensaje o el «envía» va antes del «di»."],
      ["Al teatre dels missatges, ningú no recorda qui havia de parlar.|En el teatro de los mensajes, nadie recuerda quién tenía que hablar.",
        "Que cada alumne/a tingui la targeta a la mà i digui el missatge ben fort; podeu escriure l'ordre a la pissarra.|Que cada alumno/a tenga la tarjeta en la mano y diga el mensaje bien fuerte; podéis escribir el orden en la pizarra."]
    ],
    seg: [
      "Al teatre dels missatges, es parla per torns i sense cridar; qui no vulgui llegir en veu alta pot fer de narrador/a amb un company/a.|En el teatro de los mensajes, se habla por turnos y sin gritar; quien no quiera leer en voz alta puede hacer de narrador/a con un compañero/a.",
      "Aprofiteu per recordar que als missatges reals (mòbil, xats) només s'escriu a persones conegudes i amb respecte; si algú explica una situació preocupant, escolteu-lo i aviseu la tutoria.|Aprovechad para recordar que en los mensajes reales (móvil, chats) solo se escribe a personas conocidas y con respeto; si alguien explica una situación preocupante, escuchadle y avisad a la tutoría."
    ],
    extra: [
      "Afegir un tercer personatge a la conversa (l'ocell) amb el seu propi missatge.|Añadir un tercer personaje a la conversación (el pájaro) con su propio mensaje.",
      "Fer que, en rebre «final», tots els personatges facin una reverència alhora amb un sol missatge.|Hacer que, al recibir «final», todos los personajes hagan una reverencia a la vez con un solo mensaje.",
      "Escriure el diàleg primer en paper, com un guió de teatre, i després programar-lo.|Escribir el diálogo primero en papel, como un guion de teatro, y después programarlo."
    ],
    trans: [
      "Llengua: el diàleg, els torns de paraula i el guió teatral.|Lengua: el diálogo, los turnos de palabra y el guion teatral.",
      "Tutoria: escoltar, esperar el torn i parlar amb respecte.|Tutoría: escuchar, esperar el turno y hablar con respeto.",
      "Sessió següent: el projecte del conte interactiu, amb escenes, missatges i finals per triar.|Sesión siguiente: el proyecto del cuento interactivo, con escenas, mensajes y finales para elegir."
    ],
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
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Missatges entre personatges»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Mensajes entre personajes»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "1 paquet de targetes del teatre dels missatges per grup de 4 (imprimible 1)|1 paquete de tarjetas del teatro de los mensajes por grupo de 4 (imprimible 1)"
      ],
      imprimir: [
        "1 paquet de targetes «El teatre dels missatges» per grup de 4 (imprimible 1)|1 paquete de tarjetas «El teatro de los mensajes» por grupo de 4 (imprimible 1)"
      ],
      prep: [
        "El dia abans (15 min): imprimir i retallar un paquet de targetes per grup de 4 i separar-ne la targeta de l'error per a la tercera ronda.|El día antes (15 min): imprimir y recortar un paquete de tarjetas por grupo de 4 y separar la tarjeta del error para la tercera ronda.",
        "Provar la demo de la conversa per torns i la de l'error del nom.|Probar la demo de la conversación por turnos y la del error del nombre.",
        "Escollir dos alumnes per a la benvinguda (parlar alhora) i avisar-los abans.|Elegir dos alumnos para la bienvenida (hablar a la vez) y avisarles antes.",
        "Deixar els ordinadors engegats amb el perfil de cada alumne/a iniciat.|Dejar los ordenadores encendidos con el perfil de cada alumno/a iniciado."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: parlen alhora!|Bienvenida: ¡hablan a la vez!", fase: 'inici',
        fa: "Repassa les direccions. Fes parlar dos alumnes alhora una frase cadascun: no s'entén res. Pregunta com se sap, en una obra de teatre, quan et toca parlar.|Repasa las direcciones. Haz hablar a dos alumnos a la vez una frase cada uno: no se entiende nada. Pregunta cómo se sabe, en una obra de teatro, cuándo te toca hablar.",
        diu: ["Al teatre, com sabeu quan us toca parlar?|En el teatro, ¿cómo sabéis cuándo os toca hablar?", "Avui els personatges aprendran a avisar-se.|Hoy los personajes aprenderán a avisarse.", "Si parlem tots alhora, s'entén res? (No.) Doncs als personatges els passa el mateix.|Si hablamos todos a la vez, ¿se entiende algo? (No.) Pues a los personajes les pasa lo mismo."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Enviar i rebre|Enviar y recibir", fase: 'teoria',
        fa: "Explica el missatge amb l'animació: dir un nom en veu alta que tothom sent. Mostra la conversa per torns i la demo. Després, un missatge per a molts (amb mostra't i amaga't) i l'error del nom que no coincideix.|Explica el mensaje con la animación: decir un nombre en voz alta que todos oyen. Muestra la conversación por turnos y la demo. Después, un mensaje para muchos (con muéstrate y escóndete) y el error del nombre que no coincide.",
        diu: ["Qui sent el missatge? I qui hi reacciona?|¿Quién oye el mensaje? ¿Y quién reacciona?", "Per què la Tuga no respon a la demo de l'error?|¿Por qué Tuga no responde en la demo del error?", "Si la Guida envia «hola» i la Tuga espera «tuga», qui respon? (Ningú.)|Si Guida envía «hola» y Tuga espera «tuga», ¿quién responde? (Nadie.)", "Un sol missatge pot despertar molts personatges? (Sí, tots els que l'esperen.)|¿Un solo mensaje puede despertar a muchos personajes? (Sí, todos los que lo esperan.)"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El teatre dels missatges|El teatro de los mensajes", fase: 'desconnectat',
        fa: "Grups de 4, cadascú amb les targetes d'un personatge. Cada targeta diu «Quan rebo X → dic … i envio Y». El narrador/a comença. Ningú no pot parlar si no ha rebut el seu missatge (dit en veu alta per qui l'envia). Representen l'escena dues vegades. A la tercera, canvia una targeta per la de l'error («envio hola» en lloc de «envio tuga»): l'escena s'encalla i el grup ha de trobar per què.|Grupos de 4, cada uno con las tarjetas de un personaje. Cada tarjeta dice «Cuando recibo X → digo … y envío Y». El narrador/a empieza. Nadie puede hablar si no ha recibido su mensaje (dicho en voz alta por quien lo envía). Representan la escena dos veces. En la tercera, cambia una tarjeta por la del error («envío hola» en lugar de «envío tuga»): la escena se atasca y el grupo tiene que encontrar por qué.",
        diu: ["Digueu el missatge ben fort: és el senyal de l'altre.|Decid el mensaje bien fuerte: es la señal del otro.", "Algú ha parlat sense rebre el seu missatge? Això és un bug!|¿Alguien ha hablado sin recibir su mensaje? ¡Eso es un bug!", "Per què s'ha encallat l'escena?|¿Por qué se ha atascado la escena?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. A l'assaig de la Guida i la Tuga, que obrin les pestanyes i expliquin a un company/a qui envia cada missatge.|Avanzan hasta la pausa activa. En el ensayo de Guida y Tuga, que abran las pestañas y expliquen a un compañero/a quién envía cada mensaje.",
        diu: ["Quin missatge fa que l'ocell es mogui?|¿Qué mensaje hace que el pájaro se mueva?", "Per què parlen alhora a l'«Investiga»?|¿Por qué hablan a la vez en el «Investiga»?", "Qui envia «bravo» i qui el rep? Mira les pestanyes.|¿Quién envía «bravo» y quién lo recibe? Mira las pestañas."],
        slides: ['s12'], app: "Del recorda fins a «Investiga»: preguntes, història, «Descobreix», ordenar la conversa, «La paraula secreta» (per a casa), l'assaig, la pregunta de qui reacciona i l'«envia» massa d'hora.|Del recuerda hasta «Investiga»: preguntas, historia, «Descubre», ordenar la conversación, «La palabra secreta» (para casa), el ensayo, la pregunta de quién reacciona y el «envía» demasiado pronto.", org: "Individual|Individual" },
      { min: 12, t: "Reptes: converses i sorpreses|Retos: conversaciones y sorpresas", fase: 'ordinador',
        fa: "Pausa activa junts. Després, els quatre reptes. Al de la conversa de tres torns, recomana fer primer la Guida i després la Tuga, i comprovar-ho a cada pas.|Pausa activa juntos. Después, los cuatro retos. En el de la conversación de tres turnos, recomienda hacer primero a Guida y después a Tuga, y comprobarlo en cada paso.",
        diu: ["Quin missatge espera la Tuga? Quin envia la Guida?|¿Qué mensaje espera Tuga? ¿Cuál envía Guida?", "L'Estel és amagada: quin bloc la fa aparèixer?|Estel está escondida: ¿qué bloque la hace aparecer?", "Programa primer la Guida, prova-ho i després la Tuga.|Programa primero a Guida, pruébalo y después a Tuga.", "Al repte que no respon, quin nom espera la Tuga? («tuga».)|En el reto que no responde, ¿qué nombre espera Tuga? («tuga».)"],
        slides: ['s13'], app: "«Pausa activa» i els reptes: la Tuga saluda, la conversa de tres torns, la sorpresa del regal i el missatge equivocat.|«Pausa activa» y los retos: Tuga saluda, la conversación de tres turnos, la sorpresa del regalo y el mensaje equivocado.", org: "Individual|Individual" },
      { min: 5, t: "Crea: l'assaig de la funció|Crea: el ensayo de la función", fase: 'crea',
        fa: "Cada alumne/a escriu una conversa de quatre frases o més entre la Guida i la Tuga, amb missatges per passar el torn. Per parelles, un llegeix en veu alta la conversa de l'altre mentre s'executa: si dues frases se superposen, busquen junts quin missatge falta o està mal posat.|Cada alumno/a escribe una conversación de cuatro frases o más entre Guida y Tuga, con mensajes para pasar el turno. Por parejas, uno lee en voz alta la conversación del otro mientras se ejecuta: si dos frases se superponen, buscan juntos qué mensaje falta o está mal puesto.",
        diu: ["Cada frase acaba amb un missatge que passa el torn.|Cada frase termina con un mensaje que pasa el turno.", "Llegeix la conversa del company/a en veu alta mentre s'executa: van per torns?|Lee la conversación del compañero/a en voz alta mientras se hace: ¿van por turnos?", "Quants missatges fas servir? En cal un a cada canvi de torn.|¿Cuántos mensajes usas? Hace falta uno en cada cambio de turno."],
        slides: ['s14'], app: "Pas «Crea»: L'assaig de la funció.|Paso «Crea»: El ensayo de la función.", org: "Individual i parelles|Individual y parejas" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament', fa: "Repassa les tres idees de la sessió amb el resum (enviar i rebre, torns i el mateix nom). Deixa que facin les dues preguntes finals de l'app i com s'han sentit. A la porta, fes a cada alumne/a una pregunta del tiquet i anota qui encara posa l'«envia» abans del «digues».|Repasa las tres ideas de la sesión con el resumen (enviar y recibir, turnos y el mismo nombre). Deja que hagan las dos preguntas finales de la app y cómo se han sentido. En la puerta, haz a cada alumno/a una pregunta del ticket y anota quién todavía pone el «envía» antes del «di».",
        diu: ["Qui sent un missatge quan l'envio?|¿Quién oye un mensaje cuando lo envío?", "On va l'«envia», abans o després del «digues»? (Després.)|¿Dónde va el «envía», antes o después del «di»? (Después.)", "La setmana vinent farem un conte on el lector tria el final!|¡La semana que viene haremos un cuento donde el lector elige el final!"], slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa l'«envia» abans del «digues» i els personatges parlen alhora.|Pone el «envía» antes del «di» y los personajes hablan a la vez.",
        "Que digui la conversa en veu alta: quan avisa la Guida la Tuga, abans o després de parlar?|Que diga la conversación en voz alta: ¿cuándo avisa Guida a Tuga, antes o después de hablar?"],
      ["Envia un missatge amb un nom diferent del que espera l'altre personatge.|Envía un mensaje con un nombre diferente del que espera el otro personaje.",
        "Que posi el dit al nom de l'«envia» i al de la capçalera «Quan rebo» de l'altre: són iguals?|Que ponga el dedo en el nombre del «envía» y en el de la cabecera «Al recibir» del otro: ¿son iguales?"],
      ["Fa servir «digues» sense segons i l'«envia» arriba immediatament.|Usa «di» sin segundos y el «envía» llega inmediatamente.",
        "Fes-li notar el «durant 2 s» del bloc «digues»: sense temps, la frase s'acaba de seguida.|Hazle notar el «durante 2 s» del bloque «di»: sin tiempo, la frase se acaba enseguida."],
      ["Programa l'Estel amb «Quan toco aquest personatge», però com que és amagada, ningú no la pot tocar.|Programa a Estel con «Al tocar este personaje», pero como está escondida, nadie la puede tocar.",
        "Pregunta: què ha de passar perquè aparegui? Quin esdeveniment és?|Pregunta: ¿qué tiene que pasar para que aparezca? ¿Qué evento es?"],
      ["Creu que el missatge només el sent el personatge del costat.|Cree que el mensaje solo lo oye el personaje de al lado.",
        "Torna a la demo d'«Un per a tots»: tots el senten, però només reaccionen els que tenen el guió.|Vuelve a la demo de «Uno para todos»: todos lo oyen, pero solo reaccionan los que tienen el guion."],
      ["A la sorpresa del regal, posa l'«amaga't» abans de l'«envia» i creu que el missatge ja no s'envia.|En la sorpresa del regalo, pone el «escóndete» antes del «envía» y cree que el mensaje ya no se envía.",
        "Pregunta: un personatge amagat pot enviar missatges? (Sí, però és més clar enviar-lo primer.) Que provi els dos ordres i compari.|Pregunta: ¿un personaje escondido puede enviar mensajes? (Sí, pero es más claro enviarlo primero.) Que pruebe los dos órdenes y compare."]
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
        ["Depuració de missatges|Depuración de mensajes", "Troba sol/a el nom equivocat i l'«envia» massa d'hora.|Encuentra solo/a el nombre equivocado y el «envía» demasiado pronto.", "Els troba amb preguntes guia.|Los encuentra con preguntas guía."],
        ["Un missatge per a molts|Un mensaje para muchos",
          "Fa que un sol missatge faci reaccionar diversos personatges (per exemple, l'Estel que apareix).|Hace que un solo mensaje haga reaccionar a varios personajes (por ejemplo, Estel que aparece).",
          "Fa servir missatges entre dos personatges, però encara no aprofita que els senten tots.|Usa mensajes entre dos personajes, pero aún no aprovecha que los oyen todos."]
      ]
    },
    casa: "A casa, feu «La paraula secreta»: cadascú tria una paraula i una acció, i una persona va «enviant» paraules. Proveu que dues persones tinguin la mateixa paraula.|En casa, haced «La palabra secreta»: cada uno elige una palabra y una acción, y una persona va «enviando» palabras. Probad que dos personas tengan la misma palabra.",
    slides: [
      { id: 's1', k: 'portada', t: "Missatges entre personatges|Mensajes entre personajes", x: "La Guida i la Tuga assagen la funció del bosc.|Guida y Tuga ensayan la función del bosque.", nota: "Objectiu: diàlegs per torns amb missatges.|Objetivo: diálogos por turnos con mensajes." },
      { id: 's2', k: 'repas', t: "Recordem les direccions|Recordemos las direcciones", punts: ["90 dreta, -90 esquerra|90 derecha, -90 izquierda", "0 amunt, 180 avall|0 arriba, 180 abajo"], nota: "Tothom dret, giravolt ràpid amb els números de les parets.|Todos de pie, giro rápido con los números de las paredes." },
      { id: 's3', k: 'pregunta', t: "Quan et toca parlar?|¿Cuándo te toca hablar?", punts: ["Al teatre|En el teatro", "En una conversa per telèfon|En una conversación por teléfono", "A classe|En clase"], nota: "Hi ha un senyal: l'altre acaba la frase, et mira, et diu el nom…|Hay una señal: el otro termina la frase, te mira, te dice el nombre…" },
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
    intro: "Sessió de projecte que tanca la unitat: cada alumne/a crea un conte interactiu amb inici, nus i final, en què qui el mira hi participa (toca un botó per continuar i tria el final). Hi fan servir tot el que han après: guions de toc, missatges per parlar per torns, «mostra't» i «amaga't», canvis de fons i el nou esdeveniment «Quan el fons canvia a…». El treball segueix els passos de sempre: pla en 4 vinyetes, programar escena a escena, provar i millorar. La classe acaba amb presentacions en què la classe fa de lector/a i tria el final.|Sesión de proyecto que cierra la unidad: cada alumno/a crea un cuento interactivo con inicio, nudo y final, en el que quien lo mira participa (toca un botón para continuar y elige el final). Usan todo lo que han aprendido: guiones de toque, mensajes para hablar por turnos, «muéstrate» y «escóndete», cambios de fondo y el nuevo evento «Al cambiar el fondo a…». El trabajo sigue los pasos de siempre: plan en 4 viñetas, programar escena a escena, probar y mejorar. La clase termina con presentaciones en las que la clase hace de lector/a y elige el final.",
    claus: [
      "Un conte interactiu té inici, nus i final, i qui el mira hi participa.|Un cuento interactivo tiene inicio, nudo y final, y quien lo mira participa.",
      "Canviar el fons és un esdeveniment: «Quan el fons canvia a…» fa reaccionar els personatges a l'escena nova.|Cambiar el fondo es un evento: «Al cambiar el fondo a…» hace reaccionar a los personajes en la escena nueva.",
      "Per triar el final, dos objectes envien missatges diferents i cada missatge fa començar un final.|Para elegir el final, dos objetos envían mensajes diferentes y cada mensaje hace empezar un final.",
      "El pla en vinyetes ajuda a programar escena a escena i a provar cada part.|El plan en viñetas ayuda a programar escena a escena y a probar cada parte."
    ],
    prev: [
      "Guions de toc (sessió 1) i missatges entre personatges (sessió 3).|Guiones de toque (sesión 1) y mensajes entre personajes (sesión 3).",
      "Canviar el fons i amagar i mostrar personatges (unitat 1, sessió 3).|Cambiar el fondo y esconder y mostrar personajes (unidad 1, sesión 3).",
      "L'estructura d'un conte: inici, nus i final (llengua).|La estructura de un cuento: inicio, nudo y final (lengua)."
    ],
    faq: [
      ["El drac no apareix mai. Què li passa?|El dragón no aparece nunca. ¿Qué le pasa?",
        "Comprova que el fons que posa el botó és el mateix que espera el drac («Quan el fons canvia a nit») i que el drac té «mostra't».|Comprueba que el fondo que pone el botón es el mismo que espera el dragón («Al cambiar el fondo a noche») y que el dragón tiene «muéstrate»."],
      ["Puc fer més de dos finals?|¿Puedo hacer más de dos finales?",
        "Sí: cada final necessita un objecte per tocar i un missatge propi. Primer fes que en funcionin dos.|Sí: cada final necesita un objeto para tocar y un mensaje propio. Primero haz que funcionen dos."],
      ["Com sap qui mira el conte què ha de tocar?|¿Cómo sabe quien mira el cuento qué tiene que tocar?",
        "Digues-li-ho amb una frase: «Toca el botó per continuar» o «Tria el cor o l'estrella».|Díselo con una frase: «Toca el botón para continuar» o «Elige el corazón o la estrella»."],
      ["Per què he de fer les vinyetes abans de programar?|¿Por qué tengo que hacer las viñetas antes de programar?",
        "Perquè així saps què passa a cada escena i quin esdeveniment la fa començar. Programar sense pla fa que t'encallis a mig conte.|Porque así sabes qué pasa en cada escena y qué evento la hace empezar. Programar sin plan hace que te atasques a mitad del cuento."],
      ["El meu conte és molt llarg i no l'acabo.|Mi cuento es muy largo y no lo acabo.",
        "Fes primer una versió curta que funcioni de principi a final (amb «Fi del conte!»). Després, si tens temps, l'allargues.|Haz primero una versión corta que funcione de principio a fin (con «¡Fin del cuento!»). Después, si tienes tiempo, la alargas."],
      ["El puc ensenyar a casa?|¿Lo puedo enseñar en casa?",
        "Sí: quan el desis, queda a «Projectes» i la família podrà triar el final des del mòbil.|Sí: cuando lo guardes, queda en «Proyectos» y la familia podrá elegir el final desde el móvil."]
    ],
    tec: [
      ["«Comprova» falla tot i que provant-lo funciona.|«Comprueba» falla aunque probándolo funciona.",
        "La prova toca el botó, el drac i el cavaller en moments concrets: que el conte hi reaccioni i que es digui alguna frase. Llegiu el missatge de l'app.|La prueba toca el botón, el dragón y el caballero en momentos concretos: que el cuento reaccione y que se diga alguna frase. Leed el mensaje de la app."],
      ["Un personatge amagat no es pot seleccionar per programar-lo.|Un personaje escondido no se puede seleccionar para programarlo.",
        "Sí que es pot: a la barra de dalt hi surten tots, també els amagats. Només no es veuen a l'escenari.|Sí se puede: en la barra de arriba salen todos, también los escondidos. Solo no se ven en el escenario."],
      ["Al projector, la classe no veu quin objecte toca el voluntari/ària.|En el proyector, la clase no ve qué objeto toca el voluntario/a.",
        "Que el voluntari/ària digui en veu alta què toca, o que la classe voti el final i el docent el toqui.|Que el voluntario/a diga en voz alta qué toca, o que la clase vote el final y el docente lo toque."],
      ["El conte es queda a mitges en desar-lo.|El cuento se queda a medias al guardarlo.",
        "Es desa quan l'app diu que funciona: si falta algun criteri, el missatge diu quin. Que el completi i torni a provar.|Se guarda cuando la app dice que funciona: si falta algún criterio, el mensaje dice cuál. Que lo complete y vuelva a probar."],
      ["La fitxa de vinyetes no hi cap tot.|En la ficha de viñetas no cabe todo.",
        "Que hi escriguin només paraules clau i fletxes; el detall va als guions.|Que escriban solo palabras clave y flechas; el detalle va en los guiones."]
    ],
    seg: [
      "Als contes, cap personatge real ni dades personals; si algú explica una història que reflecteix una situació real preocupant, parla-hi en privat i comenta-ho amb la tutoria.|En los cuentos, ningún personaje real ni datos personales; si alguien explica una historia que refleja una situación real preocupante, habla con él/ella en privado y coméntalo con la tutoría.",
      "A les presentacions, ningú no està obligat a sortir; els comentaris són amables i concrets.|En las presentaciones, nadie está obligado a salir; los comentarios son amables y concretos."
    ],
    extra: [
      "Afegir un tercer final amb un altre objecte i un altre missatge.|Añadir un tercer final con otro objeto y otro mensaje.",
      "Fer que el narrador canviï de vestit i de lloc a cada escena.|Hacer que el narrador cambie de disfraz y de sitio en cada escena.",
      "Escriure el conte en paper com a llibre (amb les vinyetes) i deixar-lo a la biblioteca de l'aula.|Escribir el cuento en papel como libro (con las viñetas) y dejarlo en la biblioteca del aula."
    ],
    trans: [
      "Llengua: l'estructura del conte (inici, nus i final) i la narració.|Lengua: la estructura del cuento (inicio, nudo y final) y la narración.",
      "Unitat 3 sencera: tocar (sessió 1), tecles (sessió 2) i missatges (sessió 3) en un sol projecte.|Unidad 3 entera: tocar (sesión 1), teclas (sesión 2) y mensajes (sesión 3) en un solo proyecto.",
      "Unitat 4: les coordenades x i y per moure els personatges exactament on vulguem.|Unidad 4: las coordenadas x e y para mover a los personajes exactamente donde queramos."
    ],
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
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el conte interactiu»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el cuento interactivo»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "1 fitxa «El meu conte en 4 vinyetes» per alumne/a (imprimible 1), llapis i colors (1 capsa per taula)|1 ficha «Mi cuento en 4 viñetas» por alumno/a (imprimible 1), lápices y colores (1 caja por mesa)"
      ],
      imprimir: [
        "1 fitxa «El meu conte en 4 vinyetes» per alumne/a i 2-3 de recanvi (imprimible 1)|1 ficha «Mi cuento en 4 viñetas» por alumno/a y 2-3 de recambio (imprimible 1)"
      ],
      prep: [
        "El dia abans (10 min): imprimir una fitxa de vinyetes per alumne/a i alguna de recanvi.|El día antes (10 min): imprimir una ficha de viñetas por alumno/a y alguna de recambio.",
        "Provar el conte d'exemple «El cavaller i el drac» amb els dos finals.|Probar el cuento de ejemplo «El caballero y el dragón» con los dos finales.",
        "Preparar l'ordinador del projector per a les presentacions i decidir l'ordre dels voluntaris.|Preparar el ordenador del proyector para las presentaciones y decidir el orden de los voluntarios.",
        "Deixar els ordinadors engegats amb el perfil de cada alumne/a iniciat.|Dejar los ordenadores encendidos con el perfil de cada alumno/a iniciado."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: el llibre sense final|Bienvenida: el libro sin final", fase: 'inici',
        fa: "Repassa missatges i mostra't/amaga't. Presenta el repte: un llibre on el lector/a tria el final. Pregunta si han llegit mai un llibre on es pot triar què passa.|Repasa mensajes y muéstrate/escóndete. Presenta el reto: un libro donde el lector/a elige el final. Pregunta si han leído alguna vez un libro donde se puede elegir qué pasa.",
        diu: ["Si poguéssiu triar el final d'un conte, quin canviaríeu?|Si pudierais elegir el final de un cuento, ¿cuál cambiaríais?", "Què hem après a la unitat? (Tocar, tecles i missatges.) Avui ho farem servir tot.|¿Qué hemos aprendido en la unidad? (Tocar, teclas y mensajes.) Hoy lo usaremos todo.", "Al final, la classe farà de lector i triarà el final dels vostres contes.|Al final, la clase hará de lector y elegirá el final de vuestros cuentos."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 7, t: "Com es fa un conte interactiu|Cómo se hace un cuento interactivo", fase: 'teoria',
        fa: "Explica inici, nus i final amb l'animació del conte. Mostra la demo de les escenes (el fons que canvia i el drac que hi reacciona) i la dels dos finals. Acaba amb el pla en vinyetes.|Explica inicio, nudo y final con la animación del cuento. Muestra la demo de las escenas (el fondo que cambia y el dragón que reacciona) y la de los dos finales. Termina con el plan en viñetas.",
        diu: ["Quin esdeveniment fa aparèixer el drac?|¿Qué evento hace aparecer al dragón?", "Si toquen l'estrella en lloc del cor, què canvia?|Si tocan la estrella en lugar del corazón, ¿qué cambia?", "Quins són els tres moments d'un conte? (Inici, nus i final.)|¿Cuáles son los tres momentos de un cuento? (Inicio, nudo y final.)"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El conte en 4 vinyetes|El cuento en 4 viñetas", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa de vinyetes: inici, nus, tria (les dues opcions) i final. Al costat de cada vinyeta, apunta l'esdeveniment o el missatge que la farà començar. Als 8 minuts, cada alumne/a explica el seu pla al company/a en un minut.|Cada alumno/a rellena la ficha de viñetas: inicio, nudo, elección (las dos opciones) y final. Al lado de cada viñeta, apunta el evento o el mensaje que la hará empezar. A los 8 minutos, cada alumno/a explica su plan al compañero/a en un minuto.",
        diu: ["No cal dibuixar bé: n'hi ha prou amb ninots i fletxes.|No hace falta dibujar bien: basta con muñecos y flechas.", "Què ha de tocar el lector/a? Apunta-ho!|¿Qué tiene que tocar el lector/a? ¡Apúntalo!", "Quin missatge envia cada objecte de la tria? Apunta-ho al costat.|¿Qué mensaje envía cada objeto de la elección? Apúntalo al lado."],
        slides: ['s8'], app: "Cap: activitat amb la fitxa de paper.|Ninguna: actividad con la ficha de papel.", org: "Individual i parelles|Individual y parejas" },
      { min: 10, t: "A l'ordinador: les escenes del conte|En el ordenador: las escenas del cuento", fase: 'ordinador',
        fa: "Fan la primera part de la sessió fins a la pausa activa: el conte d'exemple i les dues primeres escenes. Que provin els dos finals del conte d'exemple.|Hacen la primera parte de la sesión hasta la pausa activa: el cuento de ejemplo y las dos primeras escenas. Que prueben los dos finales del cuento de ejemplo.",
        diu: ["Has provat els dos finals?|¿Has probado los dos finales?", "Al botó, quin fons posa? I el drac, quin fons espera? Han de coincidir.|En el botón, ¿qué fondo pone? ¿Y el dragón, qué fondo espera? Tienen que coincidir.", "Toca el botó: el drac apareix? Si no, mira els dos guions.|Toca el botón: ¿el dragón aparece? Si no, mira los dos guiones."],
        slides: ['s9'], app: "Del recorda fins a la «Pausa activa»: preguntes, història, «Descobreix», ordenar els passos, «El conte en 4 vinyetes» (ja fet), el conte d'exemple, l'escena 1 (el botó) i l'escena 2 (el drac de nit).|Del recuerda hasta la «Pausa activa»: preguntas, historia, «Descubre», ordenar los pasos, «El cuento en 4 viñetas» (ya hecho), el cuento de ejemplo, la escena 1 (el botón) y la escena 2 (el dragón de noche).", org: "Individual|Individual" },
      { min: 18, t: "Crea: el meu conte interactiu|Crea: mi cuento interactivo", fase: 'crea',
        fa: "Després de la pausa activa, fan l'escena dels dos finals i l'investiga. Llavors construeixen el seu conte seguint la fitxa. Passeja amb els criteris a la vista. Als 12 minuts, avisa: tothom ha de tenir un final, encara que sigui senzill. Els últims minuts, el company/a prova el conte sense explicacions i diu una cosa que li agrada i una idea per millorar.|Después de la pausa activa, hacen la escena de los dos finales y el investiga. Entonces construyen su cuento siguiendo la ficha. Pasea con los criterios a la vista. A los 12 minutos, avisa: todos tienen que tener un final, aunque sea sencillo. Los últimos minutos, el compañero/a prueba el cuento sin explicaciones y dice una cosa que le gusta y una idea para mejorar.",
        diu: ["Mira la teva fitxa: quina vinyeta estàs programant?|Mira tu ficha: ¿qué viñeta estás programando?", "Primer que funcioni una versió curta; després, la fas més llarga.|Primero que funcione una versión corta; después, la haces más larga.", "El lector/a sap què ha de tocar? Digues-li-ho amb una frase.|¿El lector/a sabe qué tiene que tocar? Díselo con una frase."],
        slides: ['s10', 's11', 's12', 's13'], app: "«Pausa activa», l'escena 3 (tria el final), l'investiga del drac que no apareix, «El meu conte interactiu» i «Ensenya el teu conte».|«Pausa activa», la escena 3 (elige el final), el investiga del dragón que no aparece, «Mi cuento interactivo» y «Enseña tu cuento».", org: "Individual i parelles|Individual y parejas" },
      { min: 8, t: "Presentacions i tancament|Presentaciones y cierre", fase: 'tancament',
        fa: "4 o 5 voluntaris presenten el conte al projector: la classe fa de lector/a i tria el final en veu alta. Acaba amb el resum de la unitat, les preguntes finals i el tiquet.|4 o 5 voluntarios presentan el cuento en el proyector: la clase hace de lector/a y elige el final en voz alta. Termina con el resumen de la unidad, las preguntas finales y el ticket.",
        diu: ["Quin final voleu? Voteu amb la mà!|¿Qué final queréis? ¡Votad con la mano!", "Quina cosa del conte del company/a us ha agradat?|¿Qué cosa del cuento del compañero/a os ha gustado?", "Com ha sabut el lector què havia de tocar?|¿Cómo ha sabido el lector qué tenía que tocar?"],
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
        "Primer una versió de tres escenes que funcioni. Les idees de més, a la llista de millores.|Primero una versión de tres escenas que funcione. Las ideas de más, a la lista de mejoras."],
      ["Al repte dels dos finals, posa «amaga't» als dos guions del drac i falla la prova 1.|En el reto de los dos finales, pone «escóndete» en los dos guiones del dragón y falla la prueba 1.",
        "Pregunta: en el final de l'amistat, el drac se'n va? Que llegeixi cada guió i decideixi a quin final pertany cada bloc.|Pregunta: en el final de la amistad, ¿el dragón se va? Que lea cada guion y decida a qué final pertenece cada bloque."]
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
        ["Diàleg i missatges|Diálogo y mensajes", "Els personatges parlen per torns amb missatges, sense solapar-se.|Los personajes hablan por turnos con mensajes, sin solaparse.", "Hi ha frases, però se solapen o no fan servir missatges.|Hay frases, pero se solapan o no usan mensajes."],
        ["Provar i millorar|Probar y mejorar",
          "Prova el conte com a lector/a, el deixa provar a un company/a i fa almenys una millora.|Prueba el cuento como lector/a, deja que lo pruebe un compañero/a y hace al menos una mejora.",
          "Prova el conte, però no el deixa provar a ningú o no canvia res del que li diuen.|Prueba el cuento, pero no deja que lo pruebe nadie o no cambia nada de lo que le dicen."]
      ]
    },
    casa: "A casa, ensenyeu el conte a la família amb el mòbil i deixeu que triïn el final. Després, dibuixeu junts una vinyeta nova per a un tercer final.|En casa, enseñad el cuento a la familia con el móvil y dejad que elijan el final. Después, dibujad juntos una viñeta nueva para un tercer final.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: el conte interactiu|Proyecto: el cuento interactivo", x: "Una història amb escenes, diàlegs i un final que tria qui la mira.|Una historia con escenas, diálogos y un final que elige quien la mira.", nota: "Avui tothom acaba un conte: curt, però amb final.|Hoy todos terminan un cuento: corto, pero con final." },
      { id: 's2', k: 'repas', t: "Tot el que sabem fer|Todo lo que sabemos hacer", punts: ["Tocar un personatge|Tocar un personaje", "Les fletxes del teclat|Las flechas del teclado", "Enviar i rebre missatges|Enviar y recibir mensajes", "Mostrar i amagar|Mostrar y esconder"], nota: "Recorda que al conte poden fer servir tot això.|Recuerda que en el cuento pueden usar todo esto." },
      { id: 's3', k: 'pregunta', t: "El llibre sense final|El libro sin final", x: "Si poguéssiu triar el final d'un conte, quin canviaríeu?|Si pudierais elegir el final de un cuento, ¿cuál cambiaríais?", nota: "Recull idees: poden servir de punt de partida.|Recoge ideas: pueden servir de punto de partida." },
      { id: 's4', k: 'anim', t: "Inici, nus i final|Inicio, nudo y final", x: "I, al final, qui mira el conte tria com acaba.|Y, al final, quien mira el cuento elige cómo termina.", anim: 'g3tale', nota: "Connecta amb el que treballen a llengua: l'estructura del conte.|Conecta con lo que trabajan en lengua: la estructura del cuento." },
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
      { id: 's11', k: 'concepte', t: "Criteris del conte|Criterios del cuento", punts: ["Almenys 2 escenes|Al menos 2 escenas", "Un diàleg amb missatges|Un diálogo con mensajes", "El lector/a toca per continuar|El lector/a toca para continuar", "Té un final: «Fi del conte!»|Tiene un final: «¡Fin del cuento!»"], pic: 'img/ment/sin.webp', nota: "Deixa aquesta diapositiva projectada mentre treballen.|Deja esta diapositiva proyectada mientras trabajan." },
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
