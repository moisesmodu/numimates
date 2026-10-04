/* ---------- Unitat 4 · Sessió 1 · Si hi ha una paret… ---------- */
Object.assign(TGUIDE, {
  'r4-1': {
    obj: [
      "L'alumne/a explica què és un sensor i en dona exemples de la vida diària (els ulls, una porta automàtica, el sensor d'aparcament).|El alumno/a explica qué es un sensor y da ejemplos de la vida diaria (los ojos, una puerta automática, el sensor de aparcamiento).",
      "L'alumne/a explica que el bloc «Si» només fa els blocs de dins quan la condició és certa.|El alumno/a explica que el bloque «Si» solo hace los bloques de dentro cuando la condición es cierta.",
      "L'alumne/a fa servir les condicions «hi ha un obstacle davant» i «el camí és lliure» dins d'un «Repeteix».|El alumno/a usa las condiciones «hay un obstáculo delante» y «el camino está libre» dentro de un «Repite».",
      "L'alumne/a escriu un sol programa que funciona en diverses illes on l'obstacle canvia de lloc.|El alumno/a escribe un solo programa que funciona en varias islas donde el obstáculo cambia de sitio."
    ],
    comp: [
      "Competència digital (CD5): programar per blocs un robot que reacciona al que nota del seu entorn|Competencia digital (CD5): programar por bloques un robot que reacciona a lo que nota de su entorno",
      "Pensament computacional: condicions, sensors i programes que prenen decisions|Pensamiento computacional: condiciones, sensores y programas que toman decisiones",
      "Coneixement del medi: els sentits i els aparells que perceben l'entorn|Conocimiento del medio: los sentidos y los aparatos que perciben el entorno",
      "Matemàtiques: raonament lògic (cert o fals) i orientació en una quadrícula|Matemáticas: razonamiento lógico (cierto o falso) y orientación en una cuadrícula"
    ],
    vocab: [
      ["Sensor|Sensor", "Una peça que nota alguna cosa del món (un obstacle, un color, la llum) i ho diu a la màquina.|Una pieza que nota algo del mundo (un obstáculo, un color, la luz) y se lo dice a la máquina."],
      ["Condició|Condición", "Una pregunta que només pot tenir dues respostes: sí (certa) o no (falsa).|Una pregunta que solo puede tener dos respuestas: sí (cierta) o no (falsa)."],
      ["Si…|Si…", "El bloc que fa els blocs de dins només quan la condició és certa.|El bloque que hace los bloques de dentro solo cuando la condición es cierta."],
      ["Obstacle|Obstáculo", "Una cosa que no deixa passar en Bit: una roca, un arbre, l'aigua o la vora de l'illa.|Algo que no deja pasar a Bit: una roca, un árbol, el agua o el borde de la isla."],
      ["Camí lliure|Camino libre", "Quan a la casella del davant no hi ha cap obstacle i en Bit hi pot passar.|Cuando en la casilla de delante no hay ningún obstáculo y Bit puede pasar."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Si hi ha una paret…»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Si hay una pared…»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra de 5 × 5 caselles de la unitat 1 (o la versió en A3 per a la taula)|La cuadrícula del suelo de 5 × 5 casillas de la unidad 1 (o la versión en A3 para la mesa)",
        "Tres o quatre coixins o motxilles que facin de roca i una bandera de paper|Tres o cuatro cojines o mochilas que hagan de roca y una bandera de papel"
      ],
      imprimir: ["Targetes del sensor|Tarjetas del sensor", "Quadrícula del terra: el vent mou les roques|Cuadrícula del suelo: el viento mueve las rocas"],
      prep: [
        "Tornar a marcar la quadrícula del terra amb cinta si s'ha fet malbé i deixar els coixins al costat.|Volver a marcar la cuadrícula del suelo con cinta si se ha estropeado y dejar los cojines al lado.",
        "Imprimir i retallar un paquet de targetes del sensor per grup de 3 i una fitxa de missions per grup.|Imprimir y recortar un paquete de tarjetas del sensor por grupo de 3 y una ficha de misiones por grupo.",
        "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada.",
        "Provar abans les demostracions de les diapositives 9 i 13 per saber on acaba en Bit.|Probar antes las demostraciones de las diapositivas 9 y 13 para saber dónde termina Bit."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i la boira de l'illa|Recordamos y la niebla de la isla", fase: 'inici',
        fa: "Fes les dues preguntes de repàs: què fa un «Repeteix» i quan s'executen els blocs de «Quan premo A». Remarca la idea de «només quan passa una cosa». Explica la història: el vent ha mogut les roques i els programes d'ahir ja no serveixen.|Haz las dos preguntas de repaso: qué hace un «Repite» y cuándo se ejecutan los bloques de «Al pulsar A». Remarca la idea de «solo cuando pasa algo». Explica la historia: el viento ha movido las rocas y los programas de ayer ya no sirven.",
        diu: ["Què fa el bloc «Quan premo A»? Quan es fan els blocs de dins?|¿Qué hace el bloque «Al pulsar A»? ¿Cuándo se hacen los bloques de dentro?",
          "Si les roques canvien de lloc cada nit, el programa d'ahir funcionarà avui?|Si las rocas cambian de sitio cada noche, ¿el programa de ayer funcionará hoy?",
          "Què necessitaria en Bit per no xocar encara que no sapiguem on són les roques?|¿Qué necesitaría Bit para no chocar aunque no sepamos dónde están las rocas?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades o abaixades.|Todavía no: pantallas apagadas o bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és un sensor? El bloc «Si»|¿Qué es un sensor? El bloque «Si»", fase: 'teoria',
        fa: "Explica què és un sensor amb l'animació i demana exemples de casa i del carrer. Mostra que el sensor d'en Bit només mira la casella del davant. Presenta el bloc «Si» com una pregunta amb resposta sí o no. Abans de cada demostració, la classe prediu què farà en Bit.|Explica qué es un sensor con la animación y pide ejemplos de casa y de la calle. Muestra que el sensor de Bit solo mira la casilla de delante. Presenta el bloque «Si» como una pregunta con respuesta sí o no. Antes de cada demostración, la clase predice qué hará Bit.",
        diu: ["Quins sensors teniu vosaltres? Amb què noteu si una cosa és calenta?|¿Qué sensores tenéis vosotros? ¿Con qué notáis si algo está caliente?",
          "El sensor d'en Bit veu tot el camí o només la casella del davant?|¿El sensor de Bit ve todo el camino o solo la casilla de delante?",
          "«Si fa fred, em poso la jaqueta.» I si no fa fred, què passa amb la jaqueta?|«Si hace frío, me pongo la chaqueta.» Y si no hace frío, ¿qué pasa con la chaqueta?",
          "Abans d'executar-lo: on creieu que acabarà en Bit, a la A, a la B o a la C?|Antes de ejecutarlo: ¿dónde creéis que terminará Bit, en la A, en la B o en la C?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El robot, el sensor i el vent|El robot, el sensor y el viento", fase: 'desconnectat',
        fa: "Grups de 3: robot, sensor i vent. El vent col·loca els coixins (les roques) a la quadrícula segons una missió de la fitxa. El robot segueix sempre el mateix programa de targetes: «Repeteix 6 vegades: si hi ha un obstacle davant, gira a la dreta; Endavant». Abans de cada pas, el sensor mira la casella del davant i aixeca la targeta «Obstacle!» o «Lliure!». Després de cada missió, els papers roten.|Grupos de 3: robot, sensor y viento. El viento coloca los cojines (las rocas) en la cuadrícula según una misión de la ficha. El robot sigue siempre el mismo programa de tarjetas: «Repite 6 veces: si hay un obstáculo delante, gira a la derecha; Adelante». Antes de cada paso, el sensor mira la casilla de delante y levanta la tarjeta «¡Obstáculo!» o «¡Libre!». Después de cada misión, los papeles rotan.",
        diu: ["El programa no canvia mai: només canvien les roques. Arribarà igualment a la bandera?|El programa no cambia nunca: solo cambian las rocas. ¿Llegará igualmente a la bandera?",
          "Sensor: mira només la casella del davant, no tota la quadrícula.|Sensor: mira solo la casilla de delante, no toda la cuadrícula.",
          "Quantes vegades heu girat en aquesta missió? Per què?|¿Cuántas veces habéis girado en esta misión? ¿Por qué?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «El robot i el seu sensor», que toquin «Ho hem fet!», perquè ja l'hem fet a classe. A «On acabarà?», demana que diguin en veu alta què respondrà el sensor a cada pas.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «El robot y su sensor», que toquen «¡Lo hemos hecho!», porque ya lo hemos hecho en clase. En «¿Dónde terminará?», pide que digan en voz alta qué responderá el sensor en cada paso.",
        diu: ["A cada pas, pregunta't: què diu ara el sensor, obstacle o lliure?|En cada paso, pregúntate: ¿qué dice ahora el sensor, obstáculo o libre?",
          "Has trobat el bloc equivocat? Executa-ho per comprovar-ho.|¿Has encontrado el bloque equivocado? Ejecútalo para comprobarlo."],
        slides: ['s12'], app: "Les preguntes de «Recorda», les dues històries, les targetes de «Descobreix», la pregunta de la porta automàtica, «El robot i el seu sensor» (ja fet), què dirà el sensor, «On acabarà?» i l'«Investiga» del gir equivocat.|Las preguntas de «Recuerda», las dos historias, las tarjetas de «Descubre», la pregunta de la puerta automática, «El robot y su sensor» (ya hecho), qué dirá el sensor, «¿Dónde terminará?» y el «Investiga» del giro equivocado.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: el vent mou les roques|Retos: el viento mueve las rocas", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després projecta la demostració del «Si» fora del bucle: la classe prediu si en Bit arribarà i per què xoca. Deixa'ls fer els quatre reptes. Recorda'ls que el programa s'executa a totes les illes, l'una darrere l'altra.|Haced la pausa activa todos juntos. Después proyecta la demostración del «Si» fuera del bucle: la clase predice si Bit llegará y por qué choca. Deja que hagan los cuatro retos. Recuérdales que el programa se ejecuta en todas las islas, una detrás de otra.",
        diu: ["Quantes vegades mira el sensor en aquest programa? I quantes en necessita?|¿Cuántas veces mira el sensor en este programa? ¿Y cuántas necesita?",
          "Funciona a l'illa 1 però no a la 2? Què és diferent a la 2?|¿Funciona en la isla 1 pero no en la 2? ¿Qué es diferente en la 2?",
          "Si ajudes algú, fes-li preguntes: no li diguis la solució.|Si ayudas a alguien, hazle preguntas: no le digas la solución."],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: el camí que s'amaga, el revolt que canvia de lloc, el programa que mira una sola vegada i els dos revolts amb 4 blocs.|«Pausa activa» y los cuatro retos: el camino que se esconde, la curva que cambia de sitio, el programa que mira una sola vez y las dos curvas con 4 bloques.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la ronda de l'estany|Crea: la ronda del estanque", fase: 'crea',
        fa: "Cada alumne/a fa el projecte de la ronda: un programa per a dues illes que recull les estrelles. Quan el tinguin, per parelles s'expliquen on ha decidit girar en Bit i per què.|Cada alumno/a hace el proyecto de la ronda: un programa para dos islas que recoge las estrellas. Cuando lo tengan, por parejas se explican dónde ha decidido girar Bit y por qué.",
        diu: ["On gira en Bit a la primera illa? I a la segona? Qui ho decideix?|¿Dónde gira Bit en la primera isla? ¿Y en la segunda? ¿Quién lo decide?",
          "Has desat el projecte? Ensenya'l al company/a.|¿Has guardado el proyecto? Enséñaselo al compañero/a."],
        slides: ['s15'], app: "Pas «Crea»: La ronda de l'estany.|Paso «Crea»: La ronda del estanque.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una de les preguntes del tiquet.|Repasa las tres ideas de la sesión con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una de las preguntas del ticket.",
        diu: ["Digueu-me un sensor que hàgiu vist avui de camí a l'escola.|Decidme un sensor que hayáis visto hoy de camino al cole.",
          "Quan fa en Bit els blocs de dins d'un «Si»?|¿Cuándo hace Bit los bloques de dentro de un «Si»?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el «Si» fora del «Repeteix» i espera que en Bit miri a cada pas.|Pone el «Si» fuera del «Repite» y espera que Bit mire en cada paso.",
        "Demana-li que faci «Pas a pas» i compti quantes vegades s'il·lumina el «Si». Quantes vegades ha mirat el sensor? Quantes en calien?|Pídele que haga «Paso a paso» y cuente cuántas veces se ilumina el «Si». ¿Cuántas veces ha mirado el sensor? ¿Cuántas hacían falta?"],
      ["Creu que el sensor veu tot el camí, no només la casella del davant.|Cree que el sensor ve todo el camino, no solo la casilla de delante.",
        "Fes-li fer de robot amb els braços estirats com una llanterna curta: només arriben a la casella del davant. Què veu ara el sensor?|Haz que haga de robot con los brazos estirados como una linterna corta: solo llegan a la casilla de delante. ¿Qué ve ahora el sensor?"],
      ["Posa l'Endavant dins del «Si» i en Bit només avança quan té un obstacle.|Pone el Adelante dentro del «Si» y Bit solo avanza cuando tiene un obstáculo.",
        "Llegiu el programa en veu alta: «si hi ha un obstacle davant, endavant». Té sentit? Què ha de fer en Bit quan té un obstacle?|Leed el programa en voz alta: «si hay un obstáculo delante, adelante». ¿Tiene sentido? ¿Qué tiene que hacer Bit cuando tiene un obstáculo?"],
      ["Posa un número petit al «Repeteix» i en Bit s'atura abans de la bandera.|Pone un número pequeño en el «Repite» y Bit se para antes de la bandera.",
        "Pregunta: quants passos ha de fer en Bit? A cada volta del bucle, quants passos fa? Que ajusti el número ell/a mateix/a.|Pregunta: ¿cuántos pasos tiene que dar Bit? En cada vuelta del bucle, ¿cuántos pasos da? Que ajuste el número él/ella mismo/a."],
      ["Fa un programa sense «Si» que només funciona a la primera illa.|Hace un programa sin «Si» que solo funciona en la primera isla.",
        "Toca la pestanya de l'illa 2 i pregunta: què ha canviat? Qui pot notar on és la roca? Així descobreix per què cal el sensor.|Toca la pestaña de la isla 2 y pregunta: ¿qué ha cambiado? ¿Quién puede notar dónde está la roca? Así descubre por qué hace falta el sensor."]
    ],
    diff: {
      mes: "Fer el repte dels dos revolts amb menys passos del bucle i explicar per què no funciona. Després, inventar una missió nova per a la quadrícula del terra on el mateix programa també funcioni, i que la provi un altre grup.|Hacer el reto de las dos curvas con menos vueltas del bucle y explicar por qué no funciona. Después, inventar una misión nueva para la cuadrícula del suelo donde el mismo programa también funcione, y que la pruebe otro grupo.",
      menys: "Tenir la targeta «Si hi ha un obstacle davant» a la taula i fer cada repte primer amb el dit a la pantalla: a cada casella, dir en veu alta què respon el sensor. Començar pel repte del camí que s'amaga, que només necessita un bloc dins del «Si».|Tener la tarjeta «Si hay un obstáculo delante» en la mesa y hacer cada reto primero con el dedo en la pantalla: en cada casilla, decir en voz alta qué responde el sensor. Empezar por el reto del camino que se esconde, que solo necesita un bloque dentro del «Si»."
    },
    aval: {
      ticket: ["Digues un sensor de la vida diària i què nota.|Di un sensor de la vida diaria y qué nota.",
        "Quan fa en Bit els blocs de dins d'un «Si»?|¿Cuándo hace Bit los bloques de dentro de un «Si»?"],
      rubric: [
        ["Concepte de sensor|Concepto de sensor", "Explica què fa un sensor i en dona un exemple propi.|Explica qué hace un sensor y da un ejemplo propio.", "Reconeix un sensor en un exemple, però encara no explica què fa.|Reconoce un sensor en un ejemplo, pero todavía no explica qué hace."],
        ["El bloc «Si»|El bloque «Si»", "Prediu correctament si en Bit farà els blocs de dins segons la condició.|Predice correctamente si Bit hará los bloques de dentro según la condición.", "Confon quan es fan els blocs de dins o creu que es fan sempre.|Confunde cuándo se hacen los bloques de dentro o cree que se hacen siempre."],
        ["Un programa, moltes illes|Un programa, muchas islas", "Resol els reptes amb el «Si» dins del «Repeteix» i el programa funciona a totes les illes.|Resuelve los retos con el «Si» dentro del «Repite» y el programa funciona en todas las islas.", "Resol una illa, però li costa fer un programa que funcioni a totes.|Resuelve una isla, pero le cuesta hacer un programa que funcione en todas."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer l'activitat «El robot i el seu sensor» amb uns coixins a terra. Podeu buscar junts els sensors que hi ha a casa i al carrer: llums que s'encenen soles, portes automàtiques, l'aixeta que raja quan hi poses les mans…|En casa, con el móvil, podéis repetir la sesión y hacer la actividad «El robot y su sensor» con unos cojines en el suelo. Podéis buscar juntos los sensores que hay en casa y en la calle: luces que se encienden solas, puertas automáticas, el grifo que sale cuando pones las manos…",
    slides: [
      { id: 's1', k: 'portada', t: "Si hi ha una paret…|Si hay una pared…", x: "Avui en Bit rep un sensor i aprèn a decidir què fa segons el que nota.|Hoy Bit recibe un sensor y aprende a decidir qué hace según lo que nota.",
        nota: "Presenta l'objectiu: al final de la classe, tothom farà un programa que funcioni en illes diferents.|Presenta el objetivo: al final de la clase, todos harán un programa que funcione en islas diferentes." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", punts: ["Què fa el bloc «Repeteix 4 vegades»?|¿Qué hace el bloque «Repite 4 veces»?", "Quan es fan els blocs de «Quan premo A»?|¿Cuándo se hacen los bloques de «Al pulsar A»?"],
        nota: "Respostes: repeteix 4 vegades els blocs de dins; només quan algú prem el botó A. Remarca «només quan»: avui hi tornarem.|Respuestas: repite 4 veces los bloques de dentro; solo cuando alguien pulsa el botón A. Remarca «solo cuando»: hoy volveremos a ello." },
      { id: 's3', k: 'concepte', t: "La boira i el vent|La niebla y el viento", punts: ["Cada matí, la boira tapa l'illa.|Cada mañana, la niebla tapa la isla.", "El vent ha mogut les roques de lloc.|El viento ha movido las rocas de sitio.", "El programa d'ahir faria xocar en Bit.|El programa de ayer haría chocar a Bit."],
        nota: "Pregunta què necessitaria en Bit per no xocar. Recull idees: ulls, mirar abans d'avançar… Són sensors!|Pregunta qué necesitaría Bit para no chocar. Recoge ideas: ojos, mirar antes de avanzar… ¡Son sensores!" },
      { id: 's4', k: 'anim', t: "Què és un sensor?|¿Qué es un sensor?", anim: 'u4sensor', x: "Una peça que nota alguna cosa del món i ho diu a la màquina.|Una pieza que nota algo del mundo y se lo dice a la máquina.",
        nota: "Comenta els tres exemples: els ulls noten la llum, la porta nota que algú s'acosta i el cotxe nota que la paret és a prop.|Comenta los tres ejemplos: los ojos notan la luz, la puerta nota que alguien se acerca y el coche nota que la pared está cerca." },
      { id: 's5', k: 'pregunta', t: "Sensors de cada dia|Sensores de cada día", punts: ["La porta que s'obre sola|La puerta que se abre sola", "El llum de l'escala que s'encén quan passes|La luz de la escalera que se enciende cuando pasas", "L'aixeta que raja quan hi poses les mans|El grifo que sale cuando pones las manos"],
        nota: "Demana més exemples. Per a cada un, pregunteu: què nota el sensor? Què fa la màquina quan ho nota?|Pide más ejemplos. Para cada uno, preguntad: ¿qué nota el sensor? ¿Qué hace la máquina cuando lo nota?" },
      { id: 's6', k: 'anim', t: "El sensor d'en Bit|El sensor de Bit", anim: 'u4beam', x: "Mira només la casella del davant: obstacle o lliure.|Mira solo la casilla de delante: obstáculo o libre.",
        nota: "Remarca que l'obstacle pot ser una roca, un arbre, l'aigua o la vora de l'illa.|Remarca que el obstáculo puede ser una roca, un árbol, el agua o el borde de la isla." },
      { id: 's7', k: 'anim', t: "El bloc «Si…»|El bloque «Si…»", anim: 'u4if', x: "Si la condició és certa, fa els blocs de dins. Si no, se'ls salta.|Si la condición es cierta, hace los bloques de dentro. Si no, se los salta.",
        nota: "Feu-ho amb el cos: si porteu alguna cosa vermella, aixequeu la mà. Qui no en porta, no fa res.|Hacedlo con el cuerpo: si lleváis algo rojo, levantad la mano. Quien no lleva, no hace nada." },
      { id: 's8', k: 'demo', t: "Avança només si pots|Avanza solo si puedes", x: "Repeteix 6 vegades: si el camí és lliure, endavant. Xocarà amb l'arbre del final?|Repite 6 veces: si el camino está libre, adelante. ¿Chocará con el árbol del final?",
        demo: { w: { map: ['......', '>###F.', '......'] }, prog: '6{ if:free{ f } }' }, blocks: ['Repeteix 6 vegades|Repite 6 veces', 'Si el camí és lliure|Si el camino está libre', 'Endavant|Adelante'],
        nota: "Resposta: no xoca. Quan té l'arbre davant, el sensor diu que no i les últimes voltes en Bit no es mou.|Respuesta: no choca. Cuando tiene el árbol delante, el sensor dice que no y en las últimas vueltas Bit no se mueve." },
      { id: 's9', k: 'demo', t: "Pensa abans d'executar|Piensa antes de ejecutar", x: "Repeteix 4 vegades: si hi ha un obstacle davant, gira a la dreta; Endavant. On acabarà: A, B o C?|Repite 4 veces: si hay un obstáculo delante, gira a la derecha; Adelante. ¿Dónde terminará: A, B o C?",
        demo: { w: { map: ['>##RA', '..#..', 'C.B..'] }, prog: '4{ if:wall{ r } f }' },
        nota: "Que tothom assenyali amb el dit abans d'executar. Resposta: B. Qui ha dit A ha oblidat la roca; qui ha dit C ha girat cap a l'altre costat.|Que todos señalen con el dedo antes de ejecutar. Respuesta: B. Quien ha dicho A ha olvidado la roca; quien ha dicho C ha girado hacia el otro lado." },
      { id: 's10', k: 'activitat', t: "El robot, el sensor i el vent|El robot, el sensor y el viento", timer: 12, punts: ["Vent: col·loca les roques segons la missió.|Viento: coloca las rocas según la misión.", "Sensor: abans de cada pas, aixeca «Obstacle!» o «Lliure!».|Sensor: antes de cada paso, levanta «¡Obstáculo!» o «¡Libre!».", "Robot: segueix sempre el mateix programa.|Robot: sigue siempre el mismo programa.", "Després de cada missió, canvieu els papers.|Después de cada misión, cambiad los papeles."],
        nota: "El programa de targetes és sempre el mateix: Repeteix 6 vegades: si hi ha un obstacle davant, gira a la dreta; Endavant. Només canvien les roques.|El programa de tarjetas es siempre el mismo: Repite 6 veces: si hay un obstáculo delante, gira a la derecha; Adelante. Solo cambian las rocas." },
      { id: 's11', k: 'concepte', t: "Les regles del sensor|Las reglas del sensor", punts: ["El sensor només mira la casella del davant.|El sensor solo mira la casilla de delante.", "La vora de la quadrícula també és un obstacle.|El borde de la cuadrícula también es un obstáculo.", "El robot no pot canviar el programa: només el segueix.|El robot no puede cambiar el programa: solo lo sigue."],
        nota: "Deixa aquesta diapositiva projectada mentre treballen a la quadrícula.|Deja esta diapositiva proyectada mientras trabajan en la cuadrícula." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Si hi ha una paret…».|Abre la sesión «Si hay una pared…».", "A «Descobreix», mira bé les demostracions.|En «Descubre», mira bien las demostraciones.", "A «On acabarà?», digues què respon el sensor a cada pas.|En «¿Dónde terminará?», di qué responde el sensor en cada paso.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Al pas «El robot i el seu sensor», que toquin «Ho hem fet!»: ja l'hem fet a la quadrícula.|En el paso «El robot y su sensor», que toquen «¡Lo hemos hecho!»: ya lo hemos hecho en la cuadrícula." },
      { id: 's13', k: 'demo', t: "I si el «Si» és fora del bucle?|¿Y si el «Si» está fuera del bucle?", x: "Si hi ha un obstacle davant, gira a la dreta. Després: Repeteix 5 vegades: Endavant. Arribarà a la bandera?|Si hay un obstáculo delante, gira a la derecha. Después: Repite 5 veces: Adelante. ¿Llegará a la bandera?",
        demo: { w: { map: ['>###', '...#', '...F'] }, prog: 'if:wall{ r } 5{ f }' },
        nota: "Resposta: no, surt del mapa. El sensor només mira una vegada, al principi, quan encara no hi ha cap obstacle. Pregunta com ho arreglarien: el «Si» ha d'anar dins del bucle.|Respuesta: no, se sale del mapa. El sensor solo mira una vez, al principio, cuando todavía no hay ningún obstáculo. Pregunta cómo lo arreglarían: el «Si» tiene que ir dentro del bucle." },
      { id: 's14', k: 'repte', t: "Reptes: el vent mou les roques|Retos: el viento mueve las rocas", timer: 10, punts: ["1. El camí que s'amaga|1. El camino que se esconde", "2. El revolt que canvia de lloc|2. La curva que cambia de sitio", "3. El programa que mira una sola vegada|3. El programa que mira una sola vez", "4. Dos revolts amb només 4 blocs|4. Dos curvas con solo 4 bloques"],
        nota: "Si algú s'encalla, pregunta: què ha de passar a cada pas? Primer mirar, després avançar.|Si alguien se atasca, pregunta: ¿qué tiene que pasar en cada paso? Primero mirar, después avanzar." },
      { id: 's15', k: 'activitat', t: "Crea: la ronda de l'estany|Crea: la ronda del estanque", timer: 5, x: "Un programa per a dues illes: fa la volta a l'estany, recull les estrelles i acaba a la bandera.|Un programa para dos islas: da la vuelta al estanque, recoge las estrellas y termina en la bandera.",
        nota: "Pista per a qui s'encalla: en totes dues illes en Bit fa 11 passos, i gira quan té un obstacle davant.|Pista para quien se atasca: en las dos islas Bit da 11 pasos, y gira cuando tiene un obstáculo delante." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un sensor nota com és el món.|Un sensor nota cómo es el mundo.", "El «Si» fa els blocs de dins només quan la condició és certa.|El «Si» hace los bloques de dentro solo cuando la condición es cierta.", "Amb el «Si» dins del «Repeteix», un programa serveix per a moltes illes.|Con el «Si» dentro del «Repite», un programa sirve para muchas islas."],
        nota: "Torna a la pregunta del principi: ara en Bit ja no xoca encara que el vent mogui les roques.|Vuelve a la pregunta del principio: ahora Bit ya no choca aunque el viento mueva las rocas." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Digues un sensor de la vida diària i què nota.|Di un sensor de la vida diaria y qué nota.", "Quan fa en Bit els blocs de dins d'un «Si»?|¿Cuándo hace Bit los bloques de dentro de un «Si»?"],
        nota: "Fes una pregunta a cada alumne/a a la porta i anota qui necessita més suport la setmana vinent.|Haz una pregunta a cada alumno/a en la puerta y anota quién necesita más apoyo la semana que viene." }
    ],
    print: [
      { id: 'p1', t: "Targetes del sensor|Tarjetas del sensor", k: 'targetes',
        intro: "Un paquet per grup de 3. Les targetes d'ordres de la unitat 1 també serveixen. El sensor fa servir les targetes «Obstacle!» i «Lliure!»; les roques marquen la quadrícula.|Un paquete por grupo de 3. Las tarjetas de órdenes de la unidad 1 también sirven. El sensor usa las tarjetas «¡Obstáculo!» y «¡Libre!»; las rocas marcan la cuadrícula.",
        items: [
          { t: "Si hi ha un obstacle davant ❓|Si hay un obstáculo delante ❓", n: 1 },
          { t: "Obstacle! 🛑|¡Obstáculo! 🛑", n: 1 },
          { t: "Lliure! ✅|¡Libre! ✅", n: 1 },
          { t: "Repeteix 6 vegades 🔁|Repite 6 veces 🔁", n: 1 },
          { t: "Gira a la dreta ↷|Gira a la derecha ↷", n: 1 },
          { t: "Endavant ⬆|Adelante ⬆", n: 1 },
          { t: "Roca 🪨|Roca 🪨", n: 3 }
        ] },
      { id: 'p2', t: "Quadrícula del terra: el vent mou les roques|Cuadrícula del suelo: el viento mueve las rocas", k: 'quadricula',
        intro: "A les tres missions, el robot segueix el mateix programa: Repeteix 6 vegades: si hi ha un obstacle davant, gira a la dreta; Endavant. El vent col·loca les roques i la bandera; la resta de la quadrícula és lliure.|En las tres misiones, el robot sigue el mismo programa: Repite 6 veces: si hay un obstáculo delante, gira a la derecha; Adelante. El viento coloca las rocas y la bandera; el resto de la cuadrícula está libre.",
        items: [
          { t: "Missió 1: sense roques|Misión 1: sin rocas", w: 5, h: 5, cells: ['..F..', '.....', '.....', '.....', '^....'],
            instructions: "En Bit comença a baix a l'esquerra, mirant amunt. Quin obstacle el fa girar aquí?|Bit empieza abajo a la izquierda, mirando arriba. ¿Qué obstáculo lo hace girar aquí?", sol: '6{ if:wall{ r } f }' },
          { t: "Missió 2: la roca baixa|Misión 2: la roca baja", w: 5, h: 5, cells: ['.....', 'R....', '....F', '.....', '^....'],
            instructions: "El vent ha posat una roca al camí. Arribarà el robot a la bandera amb el mateix programa?|El viento ha puesto una roca en el camino. ¿Llegará el robot a la bandera con el mismo programa?", sol: '6{ if:wall{ r } f }' },
          { t: "Missió 3: la roca de dalt|Misión 3: la roca de arriba", w: 5, h: 5, cells: ['R....', '...F.', '.....', '.....', '^....'],
            instructions: "Ara la roca és més amunt. On girarà el robot? Comproveu-ho.|Ahora la roca está más arriba. ¿Dónde girará el robot? Comprobadlo.", sol: '6{ if:wall{ r } f }' }
        ] }
    ]
  },

  /* ---------- Unitat 4 · Sessió 2 · Els colors del terra ---------- */
  'r4-2': {
    obj: [
      "L'alumne/a explica que el sensor de color d'en Bit mira la casella on és i en diu el color.|El alumno/a explica que el sensor de color de Bit mira la casilla donde está y dice su color.",
      "L'alumne/a formula regles del tipus «si el terra és vermell, gira a la dreta» i les segueix amb el cos.|El alumno/a formula reglas del tipo «si el suelo es rojo, gira a la derecha» y las sigue con el cuerpo.",
      "L'alumne/a programa un «Repeteix» amb un «Si» per a cada color i el fa funcionar en diverses illes.|El alumno/a programa un «Repite» con un «Si» para cada color y lo hace funcionar en varias islas.",
      "L'alumne/a fa que en Bit actuï segons el color: girar, tocar una nota o encendre un llum.|El alumno/a hace que Bit actúe según el color: girar, tocar una nota o encender una luz."
    ],
    comp: [
      "Competència digital (CD5): programar per blocs un robot que llegeix senyals de colors|Competencia digital (CD5): programar por bloques un robot que lee señales de colores",
      "Pensament computacional: condicions, regles i diverses condicions dins d'un bucle|Pensamiento computacional: condiciones, reglas y varias condiciones dentro de un bucle",
      "Educació artística (música): associar colors i notes per crear una melodia|Educación artística (música): asociar colores y notas para crear una melodía",
      "Matemàtiques (sentit espacial): girs a la dreta i a l'esquerra des del punt de vista del robot|Matemáticas (sentido espacial): giros a la derecha y a la izquierda desde el punto de vista del robot"
    ],
    vocab: [
      ["Sensor de color|Sensor de color", "Un sensor que mira una superfície i diu de quin color és.|Un sensor que mira una superficie y dice de qué color es."],
      ["Regla|Regla", "Una frase que diu què cal fer en un cas: «si el terra és vermell, gira a la dreta».|Una frase que dice qué hay que hacer en un caso: «si el suelo es rojo, gira a la derecha»."],
      ["Rajola|Baldosa", "Una casella de color que fa de senyal per a en Bit.|Una casilla de color que hace de señal para Bit."],
      ["Senyal|Señal", "Una marca que dona informació: un semàfor, una fletxa, una rajola de color.|Una marca que da información: un semáforo, una flecha, una baldosa de color."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Els colors del terra»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Los colores del suelo»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra i fulls de colors (vermell i blau, i algun de groc) de mida DIN A4|La cuadrícula del suelo y hojas de colores (rojo y azul, y alguna amarilla) de tamaño DIN A4",
        "Un instrument senzill o l'app per fer sonar dues notes (opcional)|Un instrumento sencillo o la app para hacer sonar dos notas (opcional)"
      ],
      imprimir: ["Targetes de les regles de colors|Tarjetas de las reglas de colores", "Quadrícula del terra: el jardí de les rajoles|Cuadrícula del suelo: el jardín de las baldosas"],
      prep: [
        "Preparar uns quants fulls vermells i blaus per cada grup (o pintar-los) i, si es pot, plastificar-los.|Preparar unas cuantas hojas rojas y azules por grupo (o pintarlas) y, si se puede, plastificarlas.",
        "Imprimir les targetes de les regles i una fitxa de missions per grup.|Imprimir las tarjetas de las reglas y una ficha de misiones por grupo.",
        "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada.",
        "Comprovar que els ordinadors tenen el so activat per al repte del pont musical (o auriculars).|Comprobar que los ordenadores tienen el sonido activado para el reto del puente musical (o auriculares)."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i el jardí de les rajoles|Recordamos y el jardín de las baldosas", fase: 'inici',
        fa: "Fes la pregunta de repàs sobre el sensor d'obstacles. Explica la missió: per a la festa major, el poble ha fet un jardí amb rajoles de colors que guien els carretons. Pregunta com podria saber en Bit de quin color és el terra.|Haz la pregunta de repaso sobre el sensor de obstáculos. Explica la misión: para la fiesta mayor, el pueblo ha hecho un jardín con baldosas de colores que guían las carretillas. Pregunta cómo podría saber Bit de qué color es el suelo.",
        diu: ["Què fa en Bit amb el «Si hi ha un obstacle davant» quan no té cap obstacle?|¿Qué hace Bit con el «Si hay un obstáculo delante» cuando no tiene ningún obstáculo?",
          "Quins senyals de colors coneixeu? Què volen dir?|¿Qué señales de colores conocéis? ¿Qué quieren decir?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El sensor de color i les regles|El sensor de color y las reglas", fase: 'teoria',
        fa: "Mostra l'animació del sensor de color i remarca que mira la casella on és en Bit, no la del davant. Explica què és una regla amb el semàfor. Projecta les demostracions: una regla, dues regles i el terra musical. A cada una, la classe diu la regla en veu alta abans d'executar.|Muestra la animación del sensor de color y remarca que mira la casilla donde está Bit, no la de delante. Explica qué es una regla con el semáforo. Proyecta las demostraciones: una regla, dos reglas y el suelo musical. En cada una, la clase dice la regla en voz alta antes de ejecutar.",
        diu: ["El sensor de color mira la casella del davant o la que trepitja?|¿El sensor de color mira la casilla de delante o la que pisa?",
          "Digueu la regla d'aquesta demostració amb una frase que comenci per «si».|Decid la regla de esta demostración con una frase que empiece por «si».",
          "Per què cal un «Si» per a cada color?|¿Por qué hace falta un «Si» para cada color?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El terra de colors|El suelo de colores", fase: 'desconnectat',
        fa: "Grups de 3: robot, dissenyador/a i revisor/a. El dissenyador/a posa els fulls de colors a la quadrícula segons una missió de la fitxa. El robot camina pas a pas seguint les regles de les targetes (vermell, gira a la dreta; blau, gira a l'esquerra) sense saber el camí. El revisor/a comprova que cada gir correspon a la regla. A la tercera missió, inventen una regla nova per al groc.|Grupos de 3: robot, diseñador/a y revisor/a. El diseñador/a pone las hojas de colores en la cuadrícula según una misión de la ficha. El robot camina paso a paso siguiendo las reglas de las tarjetas (rojo, gira a la derecha; azul, gira a la izquierda) sin saber el camino. El revisor/a comprueba que cada giro corresponde a la regla. En la tercera misión, inventan una regla nueva para el amarillo.",
        diu: ["Robot: no miris el camí, mira només el terra que trepitges.|Robot: no mires el camino, mira solo el suelo que pisas.",
          "On ha d'anar la rajola vermella perquè el robot giri al lloc bo?|¿Dónde tiene que ir la baldosa roja para que el robot gire en el sitio bueno?",
          "Quina regla nova heu inventat per al groc?|¿Qué regla nueva habéis inventado para el amarillo?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. A la pregunta de la rajola blava, deixa'ls girar el cap o el cos: és el truc de la unitat 1. Al pas «El terra de colors», que toquin «Ho hem fet!».|Cada alumno/a avanza hasta la pausa activa. En la pregunta de la baldosa azul, déjales girar la cabeza o el cuerpo: es el truco de la unidad 1. En el paso «El suelo de colores», que toquen «¡Lo hemos hecho!».",
        diu: ["En Bit mira avall: on és la seva esquerra? Posa't al seu lloc.|Bit mira abajo: ¿dónde está su izquierda? Ponte en su lugar.",
          "A «On acabarà?», segueix el camí amb el dit i digues la regla a cada rajola.|En «¿Dónde terminará?», sigue el camino con el dedo y di la regla en cada baldosa."],
        slides: ['s12'], app: "La pregunta de «Recorda», les dues històries, les targetes de «Descobreix», la rajola blava, «El terra de colors» (ja fet), «On acabarà?» i l'«Investiga» de la regla equivocada.|La pregunta de «Recuerda», las dos historias, las tarjetas de «Descubre», la baldosa azul, «El suelo de colores» (ya hecho), «¿Dónde terminará?» y el «Investiga» de la regla equivocada.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: el jardí i el pont musical|Retos: el jardín y el puente musical", fase: 'ordinador',
        fa: "Feu la pausa activa del semàfor de colors. Després projecta la demostració de la predicció: la classe diu on acabarà en Bit. Deixa'ls fer els quatre reptes; al pont musical, que escoltin si la melodia sona igual que la del model.|Haced la pausa activa del semáforo de colores. Después proyecta la demostración de la predicción: la clase dice dónde terminará Bit. Deja que hagan los cuatro retos; en el puente musical, que escuchen si la melodía suena igual que la del modelo.",
        diu: ["Quants «Si» necessites si hi ha dos colors?|¿Cuántos «Si» necesitas si hay dos colores?",
          "Al pont musical, la nota sona abans o després d'arribar a la rajola?|En el puente musical, ¿la nota suena antes o después de llegar a la baldosa?",
          "Al repte de la regla que falta: què fa en Bit quan trepitja blau? I què hauria de fer?|En el reto de la regla que falta: ¿qué hace Bit cuando pisa azul? ¿Y qué debería hacer?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: la rajola vermella, les escales de dos colors, el pont musical i la regla que falta.|«Pausa activa» y los cuatro retos: la baldosa roja, las escaleras de dos colores, el puente musical y la regla que falta.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: els fanals de la festa|Crea: los farolillos de la fiesta", fase: 'crea',
        fa: "Cada alumne/a fa el projecte dels fanals: tres regles en un sol programa. Quan acabin, per parelles comproven que el llum groc s'encén a cada rajola groga de les dues illes.|Cada alumno/a hace el proyecto de los farolillos: tres reglas en un solo programa. Cuando terminen, por parejas comprueban que la luz amarilla se enciende en cada baldosa amarilla de las dos islas.",
        diu: ["Quantes regles té el teu programa? Digues-les.|¿Cuántas reglas tiene tu programa? Dilas.",
          "Per què el groc encén un llum però no fa girar?|¿Por qué el amarillo enciende una luz pero no hace girar?"],
        slides: ['s15'], app: "Pas «Crea»: Els fanals de la festa.|Paso «Crea»: Los farolillos de la fiesta.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les idees de la sessió amb el resum, deixa que responguin les preguntes finals i fes el tiquet a la porta.|Repasa las ideas de la sesión con el resumen, deja que respondan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Quina casella mira el sensor de color?|¿Qué casilla mira el sensor de color?",
          "Digueu-me una regla amb colors que fem servir cada dia.|Decidme una regla con colores que usamos cada día."],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Creu que el sensor de color mira la casella del davant i posa la rajola abans del revolt.|Cree que el sensor de color mira la casilla de delante y pone la baldosa antes de la curva.",
        "Que executi pas a pas i aturi en Bit quan gira: on és en aquell moment? A sobre de la rajola o davant?|Que ejecute paso a paso y pare a Bit cuando gira: ¿dónde está en ese momento? ¿Encima de la baldosa o delante?"],
      ["Fa servir un sol «Si» i espera que serveixi per als dos colors.|Usa un solo «Si» y espera que sirva para los dos colores.",
        "Pregunta: aquest «Si» què pregunta? I qui pregunta pel blau? Que digui les dues regles en veu alta abans de posar blocs.|Pregunta: ¿este «Si» qué pregunta? ¿Y quién pregunta por el azul? Que diga las dos reglas en voz alta antes de poner bloques."],
      ["S'equivoca de gir quan en Bit baixa (mirant avall).|Se equivoca de giro cuando Bit baja (mirando abajo).",
        "Recorda el truc de la unitat 1: posar-se al lloc d'en Bit, girant el cap o el cos.|Recuerda el truco de la unidad 1: ponerse en el lugar de Bit, girando la cabeza o el cuerpo."],
      ["Al pont musical posa les notes fora del «Repeteix», en ordre fix.|En el puente musical pone las notas fuera del «Repite», en orden fijo.",
        "Fes-li provar l'illa 2: sona igual? Què canvia entre els ponts? Qui pot saber quin color hi ha a cada pas?|Haz que pruebe la isla 2: ¿suena igual? ¿Qué cambia entre los puentes? ¿Quién puede saber qué color hay en cada paso?"],
      ["No troba com canviar la condició o la nota d'un bloc.|No encuentra cómo cambiar la condición o la nota de un bloque.",
        "Que toqui el bloc: a sota surten els botons «Canvia la condició» i «Canvia la nota».|Que toque el bloque: debajo salen los botones «Cambia la condición» y «Cambia la nota»."]
    ],
    diff: {
      mes: "Inventar un jardí nou a la graella de paper amb tres colors i les seves regles, i escriure el programa que el resol. Al pont musical, provar d'afegir-hi una tercera nota amb el groc.|Inventar un jardín nuevo en la cuadrícula de papel con tres colores y sus reglas, y escribir el programa que lo resuelve. En el puente musical, probar de añadir una tercera nota con el amarillo.",
      menys: "Tenir les targetes de les regles a la taula i, abans de cada repte, assenyalar amb el dit les rajoles i dir què passarà a cada una. Començar per la regla del vermell sola i afegir el blau quan funcioni.|Tener las tarjetas de las reglas en la mesa y, antes de cada reto, señalar con el dedo las baldosas y decir qué pasará en cada una. Empezar por la regla del rojo sola y añadir el azul cuando funcione."
    },
    aval: {
      ticket: ["Quina casella mira el sensor de color d'en Bit?|¿Qué casilla mira el sensor de color de Bit?",
        "Digues una regla amb la paraula «si» i un color.|Di una regla con la palabra «si» y un color."],
      rubric: [
        ["Sensor de color|Sensor de color", "Sap que mira la casella on és en Bit i hi col·loca bé les rajoles.|Sabe que mira la casilla donde está Bit y coloca bien las baldosas.", "De vegades pensa que mira la casella del davant.|A veces piensa que mira la casilla de delante."],
        ["Regles|Reglas", "Formula regles amb «si» i les tradueix a blocs, un «Si» per a cada color.|Formula reglas con «si» y las traduce a bloques, un «Si» para cada color.", "Segueix les regles amb el cos, però li costa passar-les a blocs.|Sigue las reglas con el cuerpo, pero le cuesta pasarlas a bloques."],
        ["Actuar segons el color|Actuar según el color", "Fa girar, sonar o encendre llums segons el color i funciona a totes les illes.|Hace girar, sonar o encender luces según el color y funciona en todas las islas.", "Ho aconsegueix a una illa o amb ajuda.|Lo consigue en una isla o con ayuda."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «El terra de colors» amb papers o tovallons de colors. Al carrer, podeu buscar regles amb colors: semàfors, contenidors de reciclatge, senyals…|En casa, con el móvil, podéis repetir la sesión y hacer juntos «El suelo de colores» con papeles o servilletas de colores. En la calle, podéis buscar reglas con colores: semáforos, contenedores de reciclaje, señales…",
    slides: [
      { id: 's1', k: 'portada', t: "Els colors del terra|Los colores del suelo", x: "Avui en Bit estrena un sensor de color i segueix regles.|Hoy Bit estrena un sensor de color y sigue reglas.",
        nota: "Presenta l'objectiu: al final, en Bit girarà, cantarà i encendrà llums segons el color del terra.|Presenta el objetivo: al final, Bit girará, cantará y encenderá luces según el color del suelo." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Repeteix 5 vegades: si hi ha un obstacle davant, gira a la dreta; Endavant. Què fa en Bit quan no té cap obstacle?|Repite 5 veces: si hay un obstáculo delante, gira a la derecha; Adelante. ¿Qué hace Bit cuando no tiene ningún obstáculo?",
        nota: "Resposta: només avança. Els blocs de dins del «Si» se salten quan la condició és falsa.|Respuesta: solo avanza. Los bloques de dentro del «Si» se saltan cuando la condición es falsa." },
      { id: 's3', k: 'concepte', t: "El jardí de les rajoles|El jardín de las baldosas", punts: ["El poble prepara la festa major.|El pueblo prepara la fiesta mayor.", "Les rajoles de colors guien els carretons.|Las baldosas de colores guían las carretillas.", "Cada color vol dir una cosa.|Cada color quiere decir una cosa."],
        nota: "Pregunta com podria saber en Bit el color del terra. Ens cal un sensor nou!|Pregunta cómo podría saber Bit el color del suelo. ¡Nos hace falta un sensor nuevo!" },
      { id: 's4', k: 'anim', t: "Un sensor que veu colors|Un sensor que ve colores", anim: 'u4color', x: "Mira el terra que trepitja en Bit i en diu el color.|Mira el suelo que pisa Bit y dice su color.",
        nota: "Remarca la diferència: el sensor d'obstacles mira davant; el de color mira a sota.|Remarca la diferencia: el sensor de obstáculos mira delante; el de color mira debajo." },
      { id: 's5', k: 'pregunta', t: "Regles amb colors|Reglas con colores", punts: ["Semàfor vermell: para.|Semáforo rojo: para.", "Contenidor groc: envasos.|Contenedor amarillo: envases.", "Fletxa verda: pots passar.|Flecha verde: puedes pasar."],
        nota: "Per a cada exemple, que la classe el digui amb «si»: si el semàfor és vermell, paro.|Para cada ejemplo, que la clase lo diga con «si»: si el semáforo está rojo, paro." },
      { id: 's6', k: 'demo', t: "Si el terra és vermell, gira|Si el suelo es rojo, gira", x: "Repeteix 5 vegades: si el terra és vermell, gira a la dreta; Endavant. On girarà?|Repite 5 veces: si el suelo es rojo, gira a la derecha; Adelante. ¿Dónde girará?",
        demo: { w: { map: ['>..r.', '.....', '...F.'] }, prog: '5{ if:floor:r{ r } f }' },
        nota: "Fes notar que gira quan és a sobre de la rajola, per això la rajola és just al revolt.|Haz notar que gira cuando está encima de la baldosa, por eso la baldosa está justo en la curva." },
      { id: 's7', k: 'concepte', t: "Què és una regla?|¿Qué es una regla?", punts: ["Diu què cal fer en un cas.|Dice qué hay que hacer en un caso.", "Comença amb «si»: si el terra és vermell…|Empieza con «si»: si el suelo es rojo…", "Cada regla és un bloc «Si».|Cada regla es un bloque «Si»."], blocks: ['Si el terra és vermell|Si el suelo es rojo', 'Gira a la dreta|Gira a la derecha'],
        nota: "Escriu a la pissarra les regles del jardí: vermell, gira a la dreta; blau, gira a l'esquerra.|Escribe en la pizarra las reglas del jardín: rojo, gira a la derecha; azul, gira a la izquierda." },
      { id: 's8', k: 'demo', t: "Dues regles: escales|Dos reglas: escaleras", x: "Si el terra és vermell, gira a la dreta. Si és blau, gira a l'esquerra. Després, endavant.|Si el suelo es rojo, gira a la derecha. Si es azul, gira a la izquierda. Después, adelante.",
        demo: { w: { map: ['>.r...', '......', '..u.F.', '......'] }, prog: '6{ if:floor:r{ r } if:floor:u{ l } f }' },
        nota: "Abans d'executar, que la classe assenyali on girarà cap a cada costat.|Antes de ejecutar, que la clase señale dónde girará hacia cada lado." },
      { id: 's9', k: 'demo', t: "El terra musical|El suelo musical", x: "Vermell toca do; blau toca sol. Quina melodia sonarà?|Rojo toca do; azul toca sol. ¿Qué melodía sonará?",
        demo: { w: { map: ['......', '>rurF.', '......'], melody: ['do', 'sol', 'do'] }, prog: '4{ f if:floor:r{ note:do } if:floor:u{ note:sol } }' },
        nota: "Que la classe canti la melodia abans d'executar: do, sol, do. Les regles no només serveixen per girar.|Que la clase cante la melodía antes de ejecutar: do, sol, do. Las reglas no solo sirven para girar." },
      { id: 's10', k: 'activitat', t: "El terra de colors|El suelo de colores", timer: 12, punts: ["Dissenyador/a: posa els colors segons la missió.|Diseñador/a: pone los colores según la misión.", "Robot: camina pas a pas i segueix les regles.|Robot: camina paso a paso y sigue las reglas.", "Revisor/a: comprova cada gir.|Revisor/a: comprueba cada giro.", "Canvieu els papers a cada missió.|Cambiad los papeles en cada misión."],
        nota: "El robot comença a dalt a l'esquerra, mirant cap a la dreta, i fa 6 passos. Les regles són a les targetes.|El robot empieza arriba a la izquierda, mirando hacia la derecha, y da 6 pasos. Las reglas están en las tarjetas." },
      { id: 's11', k: 'concepte', t: "Les regles del jardí|Las reglas del jardín", punts: ["Vermell: gira a la dreta.|Rojo: gira a la derecha.", "Blau: gira a l'esquerra.|Azul: gira a la izquierda.", "Groc: inventeu-vos-la!|Amarillo: ¡inventadla!"],
        nota: "Deixa-la projectada durant l'activitat. Recorda que la dreta i l'esquerra són les del robot.|Déjala proyectada durante la actividad. Recuerda que la derecha y la izquierda son las del robot." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Els colors del terra».|Abre la sesión «Los colores del suelo».", "A cada rajola, digues la regla.|En cada baldosa, di la regla.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Al pas «El terra de colors», que toquin «Ho hem fet!».|En el paso «El suelo de colores», que toquen «¡Lo hemos hecho!»." },
      { id: 's13', k: 'demo', t: "On acabarà?|¿Dónde terminará?", x: "Si el terra és vermell, gira a la dreta; si és blau, gira a l'esquerra; Endavant. A, B o C?|Si el suelo es rojo, gira a la derecha; si es azul, gira a la izquierda; Adelante. ¿A, B o C?",
        demo: { w: { map: ['..r.A', '>.u.B', '.....', '..C..'] }, prog: '5{ if:floor:r{ r } if:floor:u{ l } f }' },
        nota: "Resposta: A. A la rajola blava puja i a la vermella torna a anar cap a la dreta. Qui ha dit C ha girat cap a l'altre costat.|Respuesta: A. En la baldosa azul sube y en la roja vuelve a ir hacia la derecha. Quien ha dicho C ha girado hacia el otro lado." },
      { id: 's14', k: 'repte', t: "Reptes del jardí|Retos del jardín", timer: 10, punts: ["1. La rajola vermella|1. La baldosa roja", "2. Escales de dos colors|2. Escaleras de dos colores", "3. El pont musical|3. El puente musical", "4. La regla que falta|4. La regla que falta"],
        nota: "Si algú s'encalla, pregunta: quantes regles hi ha en aquest repte? Tens un «Si» per a cada una?|Si alguien se atasca, pregunta: ¿cuántas reglas hay en este reto? ¿Tienes un «Si» para cada una?" },
      { id: 's15', k: 'activitat', t: "Crea: els fanals de la festa|Crea: los farolillos de la fiesta", timer: 5, x: "Vermell, dreta; blau, esquerra; groc, encén el llum groc. Un programa per a dues illes.|Rojo, derecha; azul, izquierda; amarillo, enciende la luz amarilla. Un programa para dos islas.",
        nota: "Qui acabi pot explicar al company/a cada regla del seu programa.|Quien termine puede explicar al compañero/a cada regla de su programa." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["El sensor de color mira la casella on és en Bit.|El sensor de color mira la casilla donde está Bit.", "Una regla diu què fer en un cas.|Una regla dice qué hacer en un caso.", "Cada color necessita el seu «Si».|Cada color necesita su «Si»."],
        nota: "Avança que a la sessió següent en Bit aprendrà a triar entre dues coses: si… si no…|Avanza que en la sesión siguiente Bit aprenderá a elegir entre dos cosas: si… si no…" },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quina casella mira el sensor de color?|¿Qué casilla mira el sensor de color?", "Digues una regla amb «si» i un color.|Di una regla con «si» y un color."],
        nota: "Respostes: la casella on és en Bit; per exemple, si el terra és blau, gira a l'esquerra.|Respuestas: la casilla donde está Bit; por ejemplo, si el suelo es azul, gira a la izquierda." }
    ],
    print: [
      { id: 'p1', t: "Targetes de les regles de colors|Tarjetas de las reglas de colores", k: 'targetes',
        intro: "Un paquet per grup. Les targetes de regla es deixen a la vista del robot; les rajoles es poden fer amb fulls de colors.|Un paquete por grupo. Las tarjetas de regla se dejan a la vista del robot; las baldosas se pueden hacer con hojas de colores.",
        items: [
          { t: "Si el terra és vermell, gira a la dreta 🟥|Si el suelo es rojo, gira a la derecha 🟥", n: 1 },
          { t: "Si el terra és blau, gira a l'esquerra 🟦|Si el suelo es azul, gira a la izquierda 🟦", n: 1 },
          { t: "Si el terra és groc… (inventa-la) 🟨|Si el suelo es amarillo… (invéntala) 🟨", n: 1 },
          { t: "Rajola vermella 🟥|Baldosa roja 🟥", n: 3 },
          { t: "Rajola blava 🟦|Baldosa azul 🟦", n: 3 },
          { t: "Rajola groga 🟨|Baldosa amarilla 🟨", n: 2 }
        ] },
      { id: 'p2', t: "Quadrícula del terra: el jardí de les rajoles|Cuadrícula del suelo: el jardín de las baldosas", k: 'quadricula',
        intro: "Quadrícula de 6 × 4. El robot comença a dalt a l'esquerra mirant cap a la dreta i sempre segueix el mateix programa: Repeteix 6 vegades: si el terra és vermell, gira a la dreta; si és blau, gira a l'esquerra; Endavant.|Cuadrícula de 6 × 4. El robot empieza arriba a la izquierda mirando hacia la derecha y siempre sigue el mismo programa: Repite 6 veces: si el suelo es rojo, gira a la derecha; si es azul, gira a la izquierda; Adelante.",
        items: [
          { t: "Missió 1: l'escala|Misión 1: la escalera", w: 6, h: 4, cells: ['>.r...', '......', '..u.F.', '......'],
            instructions: "Poseu una rajola vermella i una de blava on indica el mapa. On arribarà el robot?|Poned una baldosa roja y una azul donde indica el mapa. ¿Adónde llegará el robot?", sol: '6{ if:floor:r{ r } if:floor:u{ l } f }' },
          { t: "Missió 2: l'escala llarga|Misión 2: la escalera larga", w: 6, h: 4, cells: ['>r....', '.u.r..', '......', '...F..'],
            instructions: "Ara hi ha tres rajoles. El robot no ha de saber el camí: només les regles!|Ahora hay tres baldosas. ¡El robot no tiene que saber el camino: solo las reglas!", sol: '6{ if:floor:r{ r } if:floor:u{ l } f }' },
          { t: "Missió 3: el graó curt|Misión 3: el escalón corto", w: 6, h: 4, cells: ['>...r.', '....uF', '......', '......'],
            instructions: "Abans de caminar, digueu on creieu que acabarà. Després, inventeu una regla per al groc i afegiu-ne una rajola.|Antes de caminar, decid dónde creéis que terminará. Después, inventad una regla para el amarillo y añadid una baldosa.", sol: '6{ if:floor:r{ r } if:floor:u{ l } f }' }
        ] }
    ]
  },

  /* ---------- Unitat 4 · Sessió 3 · Si… i si no… ---------- */
  'r4-3': {
    obj: [
      "L'alumne/a explica que el bloc «Si… si no…» té dues branques i que en Bit en fa només una.|El alumno/a explica que el bloque «Si… si no…» tiene dos ramas y que Bit hace solo una.",
      "L'alumne/a dibuixa i llegeix diagrames de decisió amb exemples de la vida diària.|El alumno/a dibuja y lee diagramas de decisión con ejemplos de la vida diaria.",
      "L'alumne/a fa servir les condicions «hi ha camí a l'esquerra» i «hi ha camí a la dreta» des del punt de vista d'en Bit.|El alumno/a usa las condiciones «hay camino a la izquierda» y «hay camino a la derecha» desde el punto de vista de Bit.",
      "L'alumne/a programa decisions dins d'un «Repeteix», també una decisió dins d'una altra.|El alumno/a programa decisiones dentro de un «Repite», también una decisión dentro de otra."
    ],
    comp: [
      "Competència digital (CD5): programar decisions amb dues alternatives|Competencia digital (CD5): programar decisiones con dos alternativas",
      "Pensament computacional: estructures condicionals (si… si no…) i condicions niades|Pensamiento computacional: estructuras condicionales (si… si no…) y condiciones anidadas",
      "Matemàtiques: lògica (cert o fals), diagrames i orientació relativa|Matemáticas: lógica (cierto o falso), diagramas y orientación relativa",
      "Autonomia personal: prendre decisions segons la situació|Autonomía personal: tomar decisiones según la situación"
    ],
    vocab: [
      ["Si… si no…|Si… si no…", "El bloc que fa una cosa si la condició és certa i una altra si no ho és.|El bloque que hace una cosa si la condición es cierta y otra si no lo es."],
      ["Branca|Rama", "Cadascun dels dos camins d'una decisió: la del «si» i la del «si no».|Cada uno de los dos caminos de una decisión: la del «si» y la del «si no»."],
      ["Diagrama de decisió|Diagrama de decisión", "Un dibuix amb una pregunta i fletxes per a cada resposta.|Un dibujo con una pregunta y flechas para cada respuesta."],
      ["Cruïlla|Cruce", "Un lloc on el camí es divideix i cal triar per on anar.|Un sitio donde el camino se divide y hay que elegir por dónde ir."],
      ["Camí a l'esquerra / a la dreta|Camino a la izquierda / a la derecha", "Les condicions que miren els costats d'en Bit, segons cap on mira ell.|Las condiciones que miran los lados de Bit, según hacia dónde mira él."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Si… i si no…»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Si… y si no…»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra, uns quants coixins i dos cons o ampolles per marcar la cruïlla|La cuadrícula del suelo, unos cuantos cojines y dos conos o botellas para marcar el cruce",
        "Fulls grans i retoladors per als diagrames de decisió|Hojas grandes y rotuladores para los diagramas de decisión"
      ],
      imprimir: ["Targetes del diagrama de decisió|Tarjetas del diagrama de decisión", "Fitxa: decisions a la cruïlla|Ficha: decisiones en el cruce"],
      prep: [
        "Imprimir i retallar un paquet de targetes del diagrama per grup de 3 i una fitxa per parella.|Imprimir y recortar un paquete de tarjetas del diagrama por grupo de 3 y una ficha por pareja.",
        "Marcar a la quadrícula del terra una cruïlla en forma de T amb cinta d'un altre color.|Marcar en la cuadrícula del suelo un cruce en forma de T con cinta de otro color.",
        "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada.",
        "Provar la demostració de la decisió dins d'una altra (diapositiva 9) per poder-la explicar a poc a poc.|Probar la demostración de la decisión dentro de otra (diapositiva 9) para poder explicarla poco a poco."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i les cruïlles del bosc|Recordamos y los cruces del bosque", fase: 'inici',
        fa: "Fes la pregunta de repàs sobre els dos sensors d'en Bit. Explica la història: al bosc del far hi ha cruïlles i en Bit ha de triar per on va. Pregunta quines decisions han pres avui abans de venir a classe.|Haz la pregunta de repaso sobre los dos sensores de Bit. Explica la historia: en el bosque del faro hay cruces y Bit tiene que elegir por dónde va. Pregunta qué decisiones han tomado hoy antes de venir a clase.",
        diu: ["Quin sensor mira davant i quin mira el terra?|¿Qué sensor mira delante y cuál mira el suelo?",
          "Quina decisió heu pres avui al matí? Què hauríeu fet si hagués plogut?|¿Qué decisión habéis tomado hoy por la mañana? ¿Qué habríais hecho si hubiera llovido?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Si… si no… i els costats d'en Bit|Si… si no… y los lados de Bit", fase: 'teoria',
        fa: "Explica el diagrama del paraigua i la gorra: sempre es fa una sola branca. Mostra que l'esquerra i la dreta de les condicions són les d'en Bit. Projecta les tres demostracions: la cruïlla, el bucle amb «si no» i la decisió dins d'una altra. A l'última, ves pas a pas i fes que la classe respongui cada pregunta.|Explica el diagrama del paraguas y la gorra: siempre se hace una sola rama. Muestra que la izquierda y la derecha de las condiciones son las de Bit. Proyecta las tres demostraciones: el cruce, el bucle con «si no» y la decisión dentro de otra. En la última, ve paso a paso y haz que la clase responda cada pregunta.",
        diu: ["Si plou, paraigua; si no, gorra. Pots agafar totes dues coses?|Si llueve, paraguas; si no, gorra. ¿Puedes coger las dos cosas?",
          "En Bit mira avall: la seva esquerra és a l'esquerra o a la dreta de la pantalla?|Bit mira abajo: ¿su izquierda está a la izquierda o a la derecha de la pantalla?",
          "El camí és lliure? No. Hi ha camí a l'esquerra? Llavors, què fa?|¿El camino está libre? No. ¿Hay camino a la izquierda? Entonces, ¿qué hace?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Diagrames de decisió i la cruïlla|Diagramas de decisión y el cruce", fase: 'desconnectat',
        fa: "Primera part (6 min): en grups de 3, munten amb les targetes un diagrama de decisió de la vida diària i en inventen un altre al full gran. Segona part (6 min): a la cruïlla del terra, el robot arriba fins a la T i el sensor diu si hi ha camí a l'esquerra; el robot fa la branca que toca. El professor/a canvia els cons de costat per fer «illes» diferents.|Primera parte (6 min): en grupos de 3, montan con las tarjetas un diagrama de decisión de la vida diaria e inventan otro en la hoja grande. Segunda parte (6 min): en el cruce del suelo, el robot llega hasta la T y el sensor dice si hay camino a la izquierda; el robot hace la rama que toca. El profesor/a cambia los conos de lado para hacer «islas» diferentes.",
        diu: ["On va la pregunta en el diagrama? I les respostes?|¿Dónde va la pregunta en el diagrama? ¿Y las respuestas?",
          "Sensor: hi ha camí a l'esquerra del robot? Mira cap on mira ell.|Sensor: ¿hay camino a la izquierda del robot? Mira hacia donde mira él.",
          "He canviat el con de costat. El programa ha de canviar?|He cambiado el cono de lado. ¿El programa tiene que cambiar?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3|Grupos de 3" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. Al pas «El meu diagrama de decisió», que toquin «Ho hem fet!» (ja l'han fet a classe). A «On acabarà?», que expliquin quina branca fa en Bit i per què.|Cada alumno/a avanza hasta la pausa activa. En el paso «Mi diagrama de decisión», que toquen «¡Lo hemos hecho!» (ya lo han hecho en clase). En «¿Dónde terminará?», que expliquen qué rama hace Bit y por qué.",
        diu: ["La condició és certa o falsa? Llavors, quina branca fa?|¿La condición es cierta o falsa? Entonces, ¿qué rama hace?",
          "A l'«Investiga», què fa en Bit quan el camí no és lliure? I què hauria de fer?|En el «Investiga», ¿qué hace Bit cuando el camino no está libre? ¿Y qué debería hacer?"],
        slides: ['s12'], app: "La pregunta de «Recorda», les dues històries, les targetes de «Descobreix», el paraigua i la gorra, «El meu diagrama de decisió» (ja fet), «On acabarà?» i l'«Investiga» de la branca equivocada.|La pregunta de «Recuerda», las dos historias, las tarjetas de «Descubre», el paraguas y la gorra, «Mi diagrama de decisión» (ya hecho), «¿Dónde terminará?» y el «Investiga» de la rama equivocada.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: les cruïlles del bosc|Retos: los cruces del bosque", fase: 'ordinador',
        fa: "Feu la pausa activa dels animals. Projecta la predicció de la cruïlla amb la roca i després deixa'ls fer els reptes. Ensenya com s'afegeix el «si no» (tocar el «Si» i triar «Afegeix si no») i com es posa un bloc dins de la branca.|Haced la pausa activa de los animales. Proyecta la predicción del cruce con la roca y después deja que hagan los retos. Enseña cómo se añade el «si no» (tocar el «Si» y elegir «Añade si no») y cómo se pone un bloque dentro de la rama.",
        diu: ["Quantes voltes fa el bucle? Compta els passos i els girs.|¿Cuántas vueltas hace el bucle? Cuenta los pasos y los giros.",
          "Al repte de les branques al revés: què ha de fer en Bit si el camí és lliure?|En el reto de las ramas al revés: ¿qué tiene que hacer Bit si el camino está libre?",
          "On has posat el segon «Si»? A dins de quina branca?|¿Dónde has puesto el segundo «Si»? ¿Dentro de qué rama?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: la cruïlla, avança o gira, les branques al revés i la decisió dins d'una altra.|«Pausa activa» y los cuatro retos: el cruce, avanza o gira, las ramas al revés y la decisión dentro de otra.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la ruta del bosc|Crea: la ruta del bosque", fase: 'crea',
        fa: "Cada alumne/a fa el seu programa per a les dues illes del bosc, amb les condicions que triï. Per parelles, s'expliquen el diagrama de decisió del seu programa.|Cada alumno/a hace su programa para las dos islas del bosque, con las condiciones que elija. Por parejas, se explican el diagrama de decisión de su programa.",
        diu: ["Quina pregunta fa primer el teu programa? I després?|¿Qué pregunta hace primero tu programa? ¿Y después?",
          "El programa del company/a fa servir les mateixes condicions que el teu?|¿El programa del compañero/a usa las mismas condiciones que el tuyo?"],
        slides: ['s15'], app: "Pas «Crea»: La ruta del bosc.|Paso «Crea»: La ruta del bosque.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les idees amb el resum, deixa que responguin les preguntes finals i fes el tiquet a la porta.|Repasa las ideas con el resumen, deja que respondan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Quantes branques fa en Bit en un «Si… si no…»?|¿Cuántas ramas hace Bit en un «Si… si no…»?",
          "Digueu-me una decisió de cada dia amb «si» i «si no».|Decidme una decisión de cada día con «si» y «si no»."],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Pensa que en Bit fa les dues branques, l'una darrere l'altra.|Piensa que Bit hace las dos ramas, una detrás de otra.",
        "Torna al diagrama del paraigua: pots sortir de casa amb el paraigua i la gorra perquè plou i no plou alhora? Que ho comprovi amb «Pas a pas».|Vuelve al diagrama del paraguas: ¿puedes salir de casa con el paraguas y la gorra porque llueve y no llueve a la vez? Que lo compruebe con «Paso a paso»."],
      ["Confon l'esquerra d'en Bit amb l'esquerra de la pantalla.|Confunde la izquierda de Bit con la izquierda de la pantalla.",
        "Que es posi dret, miri cap on mira en Bit i aixequi la mà esquerra. Cap on assenyala ara?|Que se ponga de pie, mire hacia donde mira Bit y levante la mano izquierda. ¿Hacia dónde señala ahora?"],
      ["No sap com posar blocs dins de la branca «si no».|No sabe cómo poner bloques dentro de la rama «si no».",
        "Ensenya-li que, en tocar l'espai buit de dins de la branca, s'hi marca on aniran els blocs nous.|Enséñale que, al tocar el espacio vacío de dentro de la rama, se marca ahí dónde irán los bloques nuevos."],
      ["Posa un número de voltes que no arriba o que se'n passa.|Pone un número de vueltas que no llega o que se pasa.",
        "Recorda-li que a cada volta en Bit fa una sola cosa (avança o gira). Que compti els passos i els girs amb el dit sobre el mapa.|Recuérdale que en cada vuelta Bit hace una sola cosa (avanza o gira). Que cuente los pasos y los giros con el dedo sobre el mapa."],
      ["Posa el segon «Si» fora del primer, i no fa el que vol.|Pone el segundo «Si» fuera del primero, y no hace lo que quiere.",
        "Feu el diagrama de decisió al paper: la segona pregunta surt de la fletxa «si no» de la primera. On l'has de posar, doncs?|Haced el diagrama de decisión en papel: la segunda pregunta sale de la flecha «si no» de la primera. ¿Dónde la tienes que poner, entonces?"]
    ],
    diff: {
      mes: "Escriure el programa de la decisió dins d'una altra preguntant primer pel camí de la dreta. Funciona igual? Després, dibuixar un diagrama de decisió amb tres preguntes (per exemple, per triar què esmorzar) i que un company/a el segueixi.|Escribir el programa de la decisión dentro de otra preguntando primero por el camino de la derecha. ¿Funciona igual? Después, dibujar un diagrama de decisión con tres preguntas (por ejemplo, para elegir qué desayunar) y que un compañero/a lo siga.",
      menys: "Fer primer el diagrama de decisió de cada repte en paper (pregunta i dues fletxes) i després passar-lo a blocs. Començar per la cruïlla, que només té una decisió, i tenir la targeta «Si… si no…» a la taula.|Hacer primero el diagrama de decisión de cada reto en papel (pregunta y dos flechas) y después pasarlo a bloques. Empezar por el cruce, que solo tiene una decisión, y tener la tarjeta «Si… si no…» en la mesa."
    },
    aval: {
      ticket: ["Quantes branques fa en Bit cada vegada en un «Si… si no…»?|¿Cuántas ramas hace Bit cada vez en un «Si… si no…»?",
        "Digues una decisió de cada dia amb «si» i «si no».|Di una decisión de cada día con «si» y «si no»."],
      rubric: [
        ["Si… si no…|Si… si no…", "Explica que es fa una sola branca i prediu quina segons la condició.|Explica que se hace una sola rama y predice cuál según la condición.", "Encara pensa de vegades que es fan les dues branques.|Todavía piensa a veces que se hacen las dos ramas."],
        ["Diagrames de decisió|Diagramas de decisión", "Dibuixa un diagrama amb pregunta i dues respostes i el llegeix bé.|Dibuja un diagrama con pregunta y dos respuestas y lo lee bien.", "Llegeix diagrames fets, però li costa dibuixar-ne un de propi.|Lee diagramas hechos, pero le cuesta dibujar uno propio."],
        ["Decisions al programa|Decisiones en el programa", "Fa servir «Si… si no…» dins d'un «Repeteix» i resol la decisió dins d'una altra.|Usa «Si… si no…» dentro de un «Repite» y resuelve la decisión dentro de otra.", "Resol la cruïlla, però li costa posar decisions dins d'un bucle.|Resuelve el cruce, pero le cuesta poner decisiones dentro de un bucle."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «El meu diagrama de decisió». Podeu penjar a la nevera un diagrama de la família: si és dissabte…, si no…|En casa, con el móvil, podéis repetir la sesión y hacer juntos «Mi diagrama de decisión». Podéis colgar en la nevera un diagrama de la familia: si es sábado…, si no…",
    slides: [
      { id: 's1', k: 'portada', t: "Si… i si no…|Si… y si no…", x: "Avui en Bit aprèn a triar entre dues coses.|Hoy Bit aprende a elegir entre dos cosas.",
        nota: "Presenta l'objectiu: al final, en Bit prendrà decisions a cada cruïlla del bosc.|Presenta el objetivo: al final, Bit tomará decisiones en cada cruce del bosque." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", punts: ["Quin sensor mira la casella del davant?|¿Qué sensor mira la casilla de delante?", "Quin sensor mira el terra?|¿Qué sensor mira el suelo?"],
        nota: "Respostes: el sensor d'obstacles; el sensor de color.|Respuestas: el sensor de obstáculos; el sensor de color." },
      { id: 's3', k: 'concepte', t: "Les cruïlles del bosc|Los cruces del bosque", punts: ["Darrere del far hi ha un bosc de camins.|Detrás del faro hay un bosque de caminos.", "A cada cruïlla cal triar: per aquí o per allà?|En cada cruce hay que elegir: ¿por aquí o por allá?", "Fins ara, si la condició no es complia, en Bit no feia res.|Hasta ahora, si la condición no se cumplía, Bit no hacía nada."],
        nota: "Pregunta: i si volem que faci una altra cosa quan la condició no es compleix?|Pregunta: ¿y si queremos que haga otra cosa cuando la condición no se cumple?" },
      { id: 's4', k: 'anim', t: "Si plou… i si no?|Si llueve… ¿y si no?", anim: 'u4else', x: "Sempre es fa una de les dues branques, mai totes dues.|Siempre se hace una de las dos ramas, nunca las dos.",
        nota: "Explica que això és un diagrama de decisió: la pregunta al rombe i una fletxa per a cada resposta.|Explica que esto es un diagrama de decisión: la pregunta en el rombo y una flecha para cada respuesta." },
      { id: 's5', k: 'pregunta', t: "Decisions de cada dia|Decisiones de cada día", punts: ["Si fa fred, jaqueta; si no, samarreta.|Si hace frío, chaqueta; si no, camiseta.", "Si tinc set, aigua; si no…|Si tengo sed, agua; si no…", "Si és dissabte…; si no…|Si es sábado…; si no…"],
        nota: "Que la classe completi les branques del «si no». Fes notar que sempre hi ha una pregunta amb resposta sí o no.|Que la clase complete las ramas del «si no». Haz notar que siempre hay una pregunta con respuesta sí o no." },
      { id: 's6', k: 'anim', t: "L'esquerra i la dreta d'en Bit|La izquierda y la derecha de Bit", anim: 'u4sides', x: "Les condicions miren els costats d'en Bit, segons cap on mira ell.|Las condiciones miran los lados de Bit, según hacia dónde mira él.",
        nota: "Feu-ho drets: tothom mira cap a la pissarra i aixeca la mà esquerra; ara tothom es gira cap a la porta del fons i la torna a aixecar.|Hacedlo de pie: todos miran hacia la pizarra y levantan la mano izquierda; ahora todos se giran hacia la puerta del fondo y la vuelven a levantar." },
      { id: 's7', k: 'demo', t: "La cruïlla|El cruce", x: "3 passos; si hi ha camí a l'esquerra, gira a l'esquerra; si no, gira a la dreta; 2 passos.|3 pasos; si hay camino a la izquierda, gira a la izquierda; si no, gira a la derecha; 2 pasos.",
        demo: { w: { map: ['F##..', '..#..', '..#..', '..^..'] }, prog: '3{ f } if:freeL{ l } else{ r } 2{ f }' }, blocks: ['Si hi ha camí a l\'esquerra|Si hay camino a la izquierda', 'Si no|Si no'],
        nota: "Pregunta: si el camí anés cap a la dreta, caldria canviar el programa? No: faria la branca del «si no».|Pregunta: si el camino fuera hacia la derecha, ¿habría que cambiar el programa? No: haría la rama del «si no»." },
      { id: 's8', k: 'demo', t: "Avança o gira|Avanza o gira", x: "Repeteix 10 vegades: si el camí és lliure, endavant; si no, gira a la dreta.|Repite 10 veces: si el camino está libre, adelante; si no, gira a la derecha.",
        demo: { w: { map: ['#####', '#...F', '#....', '^....'] }, prog: '10{ if:free{ f } else{ r } }' },
        nota: "Compteu junts: 8 passos i 2 girs fan 10 voltes. A cada volta, en Bit fa una sola cosa.|Contad juntos: 8 pasos y 2 giros hacen 10 vueltas. En cada vuelta, Bit hace una sola cosa." },
      { id: 's9', k: 'demo', t: "Una decisió dins d'una altra|Una decisión dentro de otra", x: "El camí és lliure? Si no: hi ha camí a l'esquerra? Si no: gira a la dreta.|¿El camino está libre? Si no: ¿hay camino a la izquierda? Si no: gira a la derecha.",
        demo: { w: { map: ['..##F', '..#..', '###..', '#....', '^....'] }, prog: '11{ if:free{ f } else{ if:freeL{ l } else{ r } } }' },
        nota: "Dibuixa el diagrama a la pissarra: la segona pregunta surt de la fletxa «si no» de la primera. Atura la demostració a cada revolt.|Dibuja el diagrama en la pizarra: la segunda pregunta sale de la flecha «si no» de la primera. Para la demostración en cada curva." },
      { id: 's10', k: 'activitat', t: "Diagrames de decisió|Diagramas de decisión", timer: 6, punts: ["Munteu el diagrama del paraigua amb les targetes.|Montad el diagrama del paraguas con las tarjetas.", "Inventeu-ne un altre al full gran.|Inventad otro en la hoja grande.", "Una pregunta, dues fletxes: sí i si no.|Una pregunta, dos flechas: sí y si no."],
        nota: "Passa pels grups i demana que llegeixin el diagrama en veu alta començant per la pregunta.|Pasa por los grupos y pide que lean el diagrama en voz alta empezando por la pregunta." },
      { id: 's11', k: 'activitat', t: "El robot de la cruïlla|El robot del cruce", timer: 6, punts: ["El robot camina fins a la T.|El robot camina hasta la T.", "Sensor: hi ha camí a l'esquerra del robot?|Sensor: ¿hay camino a la izquierda del robot?", "Sí: gira a l'esquerra. Si no: gira a la dreta.|Sí: gira a la izquierda. Si no: gira a la derecha.", "El professor/a canvia el con de costat.|El profesor/a cambia el cono de lado."],
        nota: "El con tanca un dels dos costats de la T. El programa del robot no canvia mai.|El cono cierra uno de los dos lados de la T. El programa del robot no cambia nunca." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Si… i si no…».|Abre la sesión «Si… y si no…».", "A «On acabarà?», digues quina branca fa en Bit.|En «¿Dónde terminará?», di qué rama hace Bit.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Al pas «El meu diagrama de decisió», que toquin «Ho hem fet!».|En el paso «Mi diagrama de decisión», que toquen «¡Lo hemos hecho!»." },
      { id: 's13', k: 'demo', t: "Quina branca farà?|¿Qué rama hará?", x: "Endavant; si hi ha camí a l'esquerra, gira a l'esquerra; si no, gira a la dreta; Endavant ×2. A, B o C?|Adelante; si hay camino a la izquierda, gira a la izquierda; si no, gira a la derecha; Adelante ×2. ¿A, B o C?",
        demo: { w: { map: ['..B..', 'AR##C', '..^..'] }, prog: 'f if:freeL{ l } else{ r } f f' },
        nota: "Resposta: C. A l'esquerra hi ha una roca: la condició és falsa i fa la branca del «si no».|Respuesta: C. A la izquierda hay una roca: la condición es falsa y hace la rama del «si no»." },
      { id: 's14', k: 'repte', t: "Reptes del bosc|Retos del bosque", timer: 10, punts: ["1. La cruïlla|1. El cruce", "2. Avança o gira|2. Avanza o gira", "3. Les branques al revés|3. Las ramas al revés", "4. Una decisió dins d'una altra|4. Una decisión dentro de otra"],
        nota: "Recorda com s'afegeix el «si no»: toca el «Si» i tria «Afegeix si no».|Recuerda cómo se añade el «si no»: toca el «Si» y elige «Añade si no»." },
      { id: 's15', k: 'activitat', t: "Crea: la ruta del bosc|Crea: la ruta del bosque", timer: 5, x: "Un programa per a dues illes que faci servir «Si… si no…». Tu tries les condicions!|Un programa para dos islas que use «Si… si no…». ¡Tú eliges las condiciones!",
        nota: "Hi ha més d'una solució: celebra que hi hagi programes diferents que funcionen.|Hay más de una solución: celebra que haya programas diferentes que funcionan." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["«Si… si no…» té dues branques i se'n fa una.|«Si… si no…» tiene dos ramas y se hace una.", "En Bit pot mirar els seus costats.|Bit puede mirar sus lados.", "Un diagrama de decisió dibuixa les preguntes i les respostes.|Un diagrama de decisión dibuja las preguntas y las respuestas."],
        nota: "Avança el projecte de la setmana vinent: els laberints de la festa.|Avanza el proyecto de la semana que viene: los laberintos de la fiesta." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quantes branques fa en Bit en un «Si… si no…»?|¿Cuántas ramas hace Bit en un «Si… si no…»?", "Digues una decisió amb «si» i «si no».|Di una decisión con «si» y «si no»."],
        nota: "Respostes: una sola; per exemple, si fa sol, gorra; si no, paraigua.|Respuestas: una sola; por ejemplo, si hace sol, gorra; si no, paraguas." }
    ],
    print: [
      { id: 'p1', t: "Targetes del diagrama de decisió|Tarjetas del diagrama de decisión", k: 'targetes',
        intro: "Un paquet per grup de 3. Les preguntes van al centre i les respostes, al final de cada fletxa. Les targetes en blanc són per inventar-ne.|Un paquete por grupo de 3. Las preguntas van en el centro y las respuestas, al final de cada flecha. Las tarjetas en blanco son para inventar.",
        items: [
          { t: "Plou? ❓|¿Llueve? ❓", n: 1 },
          { t: "Fa fred? ❓|¿Hace frío? ❓", n: 1 },
          { t: "Sí ✅|Sí ✅", n: 2 },
          { t: "Si no ❌|Si no ❌", n: 2 },
          { t: "Paraigua ☂️|Paraguas ☂️", n: 1 },
          { t: "Gorra 🧢|Gorra 🧢", n: 1 },
          { t: "Jaqueta 🧥|Chaqueta 🧥", n: 1 },
          { t: "Samarreta 👕|Camiseta 👕", n: 1 },
          { t: "Inventa-la ✏️|Invéntala ✏️", n: 2 }
        ] },
      { id: 'p2', t: "Fitxa: decisions a la cruïlla|Ficha: decisiones en el cruce", k: 'fitxa',
        intro: "Per parelles. Abans de respondre, poseu-vos al lloc d'en Bit: l'esquerra i la dreta són les seves.|Por parejas. Antes de responder, poneos en el lugar de Bit: la izquierda y la derecha son las suyas.",
        items: [
          { q: "Completa el diagrama: «Tinc gana?» Si és que sí… Si no…|Completa el diagrama: «¿Tengo hambre?» Si es que sí… Si no…",
            sol: "Resposta oberta. Per exemple: sí, menjo una fruita; si no, continuo llegint. Comproveu que hi ha una pregunta i una acció a cada branca.|Respuesta abierta. Por ejemplo: sí, como una fruta; si no, sigo leyendo. Comprobad que hay una pregunta y una acción en cada rama." },
          { q: "Programa: 3 passos; si hi ha camí a l'esquerra, gira a l'esquerra; si no, gira a la dreta; 2 passos. On acabarà en Bit?|Programa: 3 pasos; si hay camino a la izquierda, gira a la izquierda; si no, gira a la derecha; 2 pasos. ¿Dónde terminará Bit?",
            w: { map: ['A##..', '..#..', '..#.B', '..^..'] }, prog: '3{ f } if:freeL{ l } else{ r } 2{ f }', a: 'A',
            sol: "A la A: a la cruïlla hi ha camí a l'esquerra d'en Bit, i fa la primera branca.|En la A: en el cruce hay camino a la izquierda de Bit, y hace la primera rama." },
          { q: "Programa: 2 passos; si hi ha camí a la dreta, gira a la dreta; si no, gira a l'esquerra; 2 passos. On acabarà en Bit? Hi ha camí als dos costats!|Programa: 2 pasos; si hay camino a la derecha, gira a la derecha; si no, gira a la izquierda; 2 pasos. ¿Dónde terminará Bit? ¡Hay camino a los dos lados!",
            w: { map: ['..B..', 'A###C', '..#..', '..^..'] }, prog: '2{ f } if:freeR{ r } else{ l } 2{ f }', a: 'C',
            sol: "A la C: la condició pregunta per la dreta i hi ha camí, així que gira a la dreta encara que a l'esquerra també n'hi hagi.|En la C: la condición pregunta por la derecha y hay camino, así que gira a la derecha aunque a la izquierda también lo haya." },
          { q: "Escriu un programa per a aquesta cruïlla que funcioni també si el camí anés cap a l'altre costat.|Escribe un programa para este cruce que funcione también si el camino fuera hacia el otro lado.",
            w: { map: ['..##F', '..#..', '..#..', '..^..'] }, solProg: '3{ f } if:freeL{ l } else{ r } 2{ f }',
            sol: "Una solució: Repeteix 3 vegades: Endavant; si hi ha camí a l'esquerra, gira a l'esquerra; si no, gira a la dreta; Repeteix 2 vegades: Endavant.|Una solución: Repite 3 veces: Adelante; si hay camino a la izquierda, gira a la izquierda; si no, gira a la derecha; Repite 2 veces: Adelante." }
        ] }
    ]
  },

  /* ---------- Unitat 4 · Sessió 4 · Projecte: el laberint ---------- */
  'r4-4': {
    obj: [
      "L'alumne/a explica l'estratègia de seguir la paret de la dreta amb les seves paraules.|El alumno/a explica la estrategia de seguir la pared de la derecha con sus palabras.",
      "L'alumne/a passa una estratègia dita amb paraules a un programa amb «Repeteix» i «Si… si no…».|El alumno/a pasa una estrategia dicha con palabras a un programa con «Repite» y «Si… si no…».",
      "L'alumne/a prova el programa a totes les illes i en depura els errors fins que funciona a totes.|El alumno/a prueba el programa en todas las islas y depura sus errores hasta que funciona en todas.",
      "L'alumne/a presenta el seu projecte i explica quina estratègia ha fet servir i quin bug ha arreglat.|El alumno/a presenta su proyecto y explica qué estrategia ha usado y qué bug ha arreglado."
    ],
    comp: [
      "Competència digital (CD5): crear un programa que resol problemes diferents amb la mateixa estratègia|Competencia digital (CD5): crear un programa que resuelve problemas diferentes con la misma estrategia",
      "Pensament computacional: algorismes amb condicions, generalització i depuració|Pensamiento computacional: algoritmos con condiciones, generalización y depuración",
      "Matemàtiques: resolució de problemes, estratègies i orientació en un laberint|Matemáticas: resolución de problemas, estrategias y orientación en un laberinto",
      "Comunicació oral: presentar un projecte i explicar com s'ha fet|Comunicación oral: presentar un proyecto y explicar cómo se ha hecho"
    ],
    vocab: [
      ["Estratègia|Estrategia", "Una manera de pensar que serveix per resoldre molts problemes semblants.|Una manera de pensar que sirve para resolver muchos problemas parecidos."],
      ["Laberint|Laberinto", "Un lloc ple de passadissos on cal trobar el camí fins a la sortida.|Un sitio lleno de pasillos donde hay que encontrar el camino hasta la salida."],
      ["Seguir la paret|Seguir la pared", "Caminar sempre tocant la mateixa paret amb la mà.|Caminar siempre tocando la misma pared con la mano."],
      ["Provar|Probar", "Executar el programa a totes les illes per veure si funciona.|Ejecutar el programa en todas las islas para ver si funciona."],
      ["Projecte|Proyecto", "Un repte més gran on fem servir tot el que hem après a la unitat.|Un reto más grande donde usamos todo lo que hemos aprendido en la unidad."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el laberint»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el laberinto»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra, cinta de pintor d'un altre color i uns quants coixins o caixes per fer les parets|La cuadrícula del suelo, cinta de pintor de otro color y unos cuantos cojines o cajas para hacer las paredes",
        "Les insígnies o un reconeixement senzill per al final de la unitat|Las insignias o un reconocimiento sencillo para el final de la unidad"
      ],
      imprimir: ["Quadrícula del terra: els laberints de la festa|Cuadrícula del suelo: los laberintos de la fiesta", "Full del projecte del laberint|Hoja del proyecto del laberinto"],
      prep: [
        "Muntar a la quadrícula del terra el laberint de la missió 1 amb coixins o caixes com a parets.|Montar en la cuadrícula del suelo el laberinto de la misión 1 con cojines o cajas como paredes.",
        "Imprimir la fitxa de missions per grup i un full del projecte per alumne/a.|Imprimir la ficha de misiones por grupo y una hoja del proyecto por alumno/a.",
        "Decidir com es presentaran els projectes: 3 o 4 voluntaris al projector o una volta per l'aula.|Decidir cómo se presentarán los proyectos: 3 o 4 voluntarios en el proyector o una vuelta por el aula.",
        "Provar abans la demostració de la mà dreta (diapositiva 5) i la predicció de la diapositiva 12.|Probar antes la demostración de la mano derecha (diapositiva 5) y la predicción de la diapositiva 12."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i la festa del laberint|Recordamos y la fiesta del laberinto", fase: 'inici',
        fa: "Fes la pregunta de repàs del «si no». Explica la missió: a la festa major hi ha laberints diferents a cada illa i en Bit vol un sol programa per a tots. Pregunta si algú ha estat mai en un laberint i com en va sortir.|Haz la pregunta de repaso del «si no». Explica la misión: en la fiesta mayor hay laberintos diferentes en cada isla y Bit quiere un solo programa para todos. Pregunta si alguien ha estado alguna vez en un laberinto y cómo salió.",
        diu: ["Si el camí no és lliure, què fa en Bit amb «si no, gira a la dreta»?|Si el camino no está libre, ¿qué hace Bit con «si no, gira a la derecha»?",
          "Heu estat mai en un laberint? Com vau trobar la sortida?|¿Habéis estado alguna vez en un laberinto? ¿Cómo encontrasteis la salida?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "L'estratègia de la mà dreta|La estrategia de la mano derecha", fase: 'teoria',
        fa: "Explica què és una estratègia i mostra l'animació de la mà dreta a la paret. Projecta la demostració en blocs i atura-la a cada cruïlla perquè la classe digui què farà en Bit. Repassa el pla de treball i remarca que el programa s'ha de provar a totes les illes.|Explica qué es una estrategia y muestra la animación de la mano derecha en la pared. Proyecta la demostración en bloques y párala en cada cruce para que la clase diga qué hará Bit. Repasa el plan de trabajo y remarca que el programa se tiene que probar en todas las islas.",
        diu: ["Si poses la mà dreta a la paret i no la treus mai, on arribes?|Si pones la mano derecha en la pared y no la quitas nunca, ¿adónde llegas?",
          "Aquí hi ha camí a la dreta: què fa en Bit?|Aquí hay camino a la derecha: ¿qué hace Bit?",
          "Per què no n'hi ha prou de provar-lo en una illa?|¿Por qué no basta con probarlo en una isla?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El laberint al terra|El laberinto en el suelo", fase: 'desconnectat',
        fa: "Grups de 3: robot, sensor i comptador/a. El robot recorre el laberint de la quadrícula amb la mà dreta tocant sempre una paret (coixins o caixes). El sensor diu, abans de cada pas, si hi ha camí a la dreta i si el camí del davant és lliure; el comptador/a compta les voltes de l'estratègia. Després de cada missió de la fitxa, canvien el laberint i els papers.|Grupos de 3: robot, sensor y contador/a. El robot recorre el laberinto de la cuadrícula con la mano derecha tocando siempre una pared (cojines o cajas). El sensor dice, antes de cada paso, si hay camino a la derecha y si el camino de delante está libre; el contador/a cuenta las vueltas de la estrategia. Después de cada misión de la ficha, cambian el laberinto y los papeles.",
        diu: ["Robot: la mà dreta no pot deixar mai la paret.|Robot: la mano derecha no puede dejar nunca la pared.",
          "Sensor: primer mira la dreta, després el davant.|Sensor: primero mira la derecha, después delante.",
          "Heu canviat el laberint. L'estratègia ha canviat?|Habéis cambiado el laberinto. ¿La estrategia ha cambiado?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 10, t: "A l'ordinador: els primers laberints|En el ordenador: los primeros laberintos", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins al laberint 2. Projecta la predicció de la diapositiva 12 quan la majoria hi arribi. Al laberint 1, fes notar que el programa ja té la primera part i només cal afegir-hi la segona.|Cada alumno/a hace la sesión hasta el laberinto 2. Proyecta la predicción de la diapositiva 12 cuando la mayoría llegue. En el laberinto 1, haz notar que el programa ya tiene la primera parte y solo hay que añadir la segunda.",
        diu: ["Digues l'estratègia amb paraules abans de posar blocs.|Di la estrategia con palabras antes de poner bloques.",
          "Al laberint 2, on es queda encallat en Bit? Què li falta?|En el laberinto 2, ¿dónde se queda atascado Bit? ¿Qué le falta?"],
        slides: ['s11', 's12'], app: "La pregunta de «Recorda», les dues històries, les targetes de «Descobreix», ordenar l'estratègia, «El laberint de cadires» (ja fet), ordenar els blocs de la cruïlla, «On acabarà?», la pregunta de la dreta, la «Pausa activa» i els laberints 1 i 2.|La pregunta de «Recuerda», las dos historias, las tarjetas de «Descubre», ordenar la estrategia, «El laberinto de sillas» (ya hecho), ordenar los bloques del cruce, «¿Dónde terminará?», la pregunta de la derecha, la «Pausa activa» y los laberintos 1 y 2.", org: "Individual|Individual" },
      { min: 17, t: "Projecte: el laberint de la festa|Proyecto: el laberinto de la fiesta", fase: 'crea',
        fa: "Abans de programar, cada alumne/a omple les preguntes 1 i 2 del full del projecte: quina estratègia farà servir i com la dirà en blocs. Després programa, prova a les 3 illes i millora. Qui acabi, pot provar una altra estratègia (per exemple, la mà esquerra) i comparar.|Antes de programar, cada alumno/a rellena las preguntas 1 y 2 de la hoja del proyecto: qué estrategia usará y cómo la dirá en bloques. Después programa, prueba en las 3 islas y mejora. Quien termine, puede probar otra estrategia (por ejemplo, la mano izquierda) y comparar.",
        diu: ["Quina és la teva estratègia? Digues-la en tres frases.|¿Cuál es tu estrategia? Dila en tres frases.",
          "Funciona a la illa 1 però no a la 3? Mira la 3 pas a pas: on falla?|¿Funciona en la isla 1 pero no en la 3? Mira la 3 paso a paso: ¿dónde falla?",
          "Has desat el projecte? Apunta al full el bug que has arreglat.|¿Has guardado el proyecto? Apunta en la hoja el bug que has arreglado."],
        slides: ['s13', 's14'], app: "La història «El projecte final» i el projecte de «Crea»: El laberint de la festa.|La historia «El proyecto final» y el proyecto de «Crea»: El laberinto de la fiesta.", org: "Individual|Individual" },
      { min: 5, t: "Presentem els projectes|Presentamos los proyectos", fase: 'tancament',
        fa: "Tres o quatre voluntaris projecten el seu laberint. Abans d'executar, expliquen l'estratègia i la classe prediu per on anirà en Bit a la primera cruïlla. Després, expliquen un bug que hagin trobat.|Tres o cuatro voluntarios proyectan su laberinto. Antes de ejecutar, explican la estrategia y la clase predice por dónde irá Bit en el primer cruce. Después, explican un bug que hayan encontrado.",
        diu: ["Quina estratègia has fet servir?|¿Qué estrategia has usado?",
          "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?",
          "Què t'ha agradat del projecte del company/a?|¿Qué te ha gustado del proyecto del compañero/a?"],
        slides: ['s15'], app: "El projecte desat a «Crea», projectat des de l'ordinador de cada voluntari/ària.|El proyecto guardado en «Crea», proyectado desde el ordenador de cada voluntario/a.", org: "Tot el grup|Todo el grupo" },
      { min: 3, t: "Tancament de la unitat|Cierre de la unidad", fase: 'tancament',
        fa: "Repassa les idees de la unitat amb el resum i deixa que responguin les preguntes finals. Fes el tiquet de sortida i reconeix la feina de tothom amb la insígnia del laberint. Avança que més endavant aprendran un bucle que no cal comptar: «Repeteix fins que…».|Repasa las ideas de la unidad con el resumen y deja que respondan las preguntas finales. Haz el ticket de salida y reconoce el trabajo de todos con la insignia del laberinto. Avanza que más adelante aprenderán un bucle que no hay que contar: «Repite hasta que…».",
        diu: ["Què és una estratègia?|¿Qué es una estrategia?",
          "Quin sensor d'en Bit us ha agradat més? Per què?|¿Qué sensor de Bit os ha gustado más? ¿Por qué?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Comença a posar blocs sense haver pensat l'estratègia i es perd.|Empieza a poner bloques sin haber pensado la estrategia y se pierde.",
        "Atura'l amb amabilitat i demana-li que digui l'estratègia en veu alta o que l'escrigui al full. Després, que la passi a blocs frase a frase.|Páralo con amabilidad y pídele que diga la estrategia en voz alta o que la escriba en la hoja. Después, que la pase a bloques frase a frase."],
      ["Posa el segon «Si» dins del primer i en Bit només avança després de girar.|Pone el segundo «Si» dentro del primero y Bit solo avanza después de girar.",
        "Llegiu junts el programa: primer pregunta per la dreta i, passi el que passi, després pregunta pel davant. Els dos «Si» van un darrere l'altre.|Leed juntos el programa: primero pregunta por la derecha y, pase lo que pase, después pregunta por delante. Los dos «Si» van uno detrás de otro."],
      ["El programa funciona a una illa i no ho comprova a les altres.|El programa funciona en una isla y no lo comprueba en las otras.",
        "Recorda-li que el projecte només està acabat quan les tres pestanyes tenen el senyal de fet. Quina illa falla? Que la miri pas a pas.|Recuérdale que el proyecto solo está terminado cuando las tres pestañas tienen la señal de hecho. ¿Qué isla falla? Que la mire paso a paso."],
      ["Canvia el número del «Repeteix» a l'atzar fins que funciona.|Cambia el número del «Repite» al azar hasta que funciona.",
        "Recorda-li la pista de l'enunciat i pregunta: amb menys voltes, on es queda en Bit? Avança que a la unitat 7 aprendrà un bucle que no cal comptar.|Recuérdale la pista del enunciado y pregunta: con menos vueltas, ¿dónde se queda Bit? Avanza que en la unidad 7 aprenderá un bucle que no hay que contar."],
      ["Es confon entre la dreta d'en Bit i la de la pantalla dins del laberint.|Se confunde entre la derecha de Bit y la de la pantalla dentro del laberinto.",
        "Que segueixi en Bit amb el dit i giri el cap com ell. Recorda el truc de la unitat 1: posar-se al seu lloc.|Que siga a Bit con el dedo y gire la cabeza como él. Recuerda el truco de la unidad 1: ponerse en su lugar."]
    ],
    diff: {
      mes: "Escriure l'estratègia de la mà esquerra i comprovar si també resol els tres laberints amb el mateix nombre de voltes. Després, dibuixar un laberint nou a la graella del full perquè el resolgui un company/a a la quadrícula del terra.|Escribir la estrategia de la mano izquierda y comprobar si también resuelve los tres laberintos con el mismo número de vueltas. Después, dibujar un laberinto nuevo en la cuadrícula de la hoja para que lo resuelva un compañero/a en la cuadrícula del suelo.",
      menys: "Tenir l'estratègia escrita en tres frases damunt la taula i passar-la a blocs una frase cada vegada. Al projecte, començar per una sola illa, comprovar-la pas a pas i després provar les altres.|Tener la estrategia escrita en tres frases encima de la mesa y pasarla a bloques una frase cada vez. En el proyecto, empezar por una sola isla, comprobarla paso a paso y después probar las otras."
    },
    aval: {
      ticket: ["Què és una estratègia? Posa'n un exemple.|¿Qué es una estrategia? Pon un ejemplo.",
        "Explica l'estratègia de la mà dreta amb les teves paraules.|Explica la estrategia de la mano derecha con tus palabras."],
      rubric: [
        ["Estratègia|Estrategia", "Explica l'estratègia de seguir la paret i per què serveix per a laberints diferents.|Explica la estrategia de seguir la pared y por qué sirve para laberintos diferentes.", "Segueix l'estratègia amb el cos, però li costa explicar-la.|Sigue la estrategia con el cuerpo, pero le cuesta explicarla."],
        ["De les paraules als blocs|De las palabras a los bloques", "Passa l'estratègia a blocs amb «Repeteix» i «Si… si no…» sense ajuda.|Pasa la estrategia a bloques con «Repite» y «Si… si no…» sin ayuda.", "Hi arriba amb el programa començat o amb ajuda.|Llega con el programa empezado o con ayuda."],
        ["Projecte final|Proyecto final", "El programa funciona als 3 laberints i explica un bug que ha arreglat.|El programa funciona en los 3 laberintos y explica un bug que ha arreglado.", "Funciona a un o dos laberints, o a tots tres amb ajuda.|Funciona en uno o dos laberintos, o en los tres con ayuda."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla us pot ensenyar el projecte «El laberint de la festa» i explicar-vos l'estratègia de la mà dreta. Podeu fer junts «El laberint de cadires» al menjador.|En casa, con el móvil, vuestro hijo o hija os puede enseñar el proyecto «El laberinto de la fiesta» y explicaros la estrategia de la mano derecha. Podéis hacer juntos «El laberinto de sillas» en el comedor.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: el laberint|Proyecto: el laberinto", x: "Avui farem el projecte final de la unitat: una estratègia per sortir de qualsevol laberint de la festa.|Hoy haremos el proyecto final de la unidad: una estrategia para salir de cualquier laberinto de la fiesta.",
        nota: "Explica que avui faran servir tot el que han après: sensors, «Si» i «Si… si no…».|Explica que hoy usarán todo lo que han aprendido: sensores, «Si» y «Si… si no…»." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Si el camí és lliure, Endavant; si no, Gira a la dreta. En Bit té una roca davant. Què fa?|Si el camino está libre, Adelante; si no, Gira a la derecha. Bit tiene una roca delante. ¿Qué hace?",
        nota: "Resposta: gira a la dreta. Fa la branca del «si no» i només aquesta.|Respuesta: gira a la derecha. Hace la rama del «si no» y solo esa." },
      { id: 's3', k: 'concepte', t: "La festa del laberint|La fiesta del laberinto", punts: ["Cada illa té un laberint diferent.|Cada isla tiene un laberinto diferente.", "En Bit vol un sol programa per a tots.|Bit quiere un solo programa para todos.", "Necessita una estratègia.|Necesita una estrategia."],
        nota: "Pregunta si coneixen algun truc per sortir d'un laberint. Recull idees sense corregir.|Pregunta si conocen algún truco para salir de un laberinto. Recoge ideas sin corregir." },
      { id: 's4', k: 'anim', t: "Segueix la paret|Sigue la pared", anim: 'u4maze', x: "Mà dreta a la paret i no la treguis mai: passaràs per tots els passadissos.|Mano derecha en la pared y no la quites nunca: pasarás por todos los pasillos.",
        nota: "Fes notar que en Bit entra al passadís sense sortida, hi fa la volta i en surt: la paret el guia.|Haz notar que Bit entra en el pasillo sin salida, da la vuelta y sale: la pared lo guía." },
      { id: 's5', k: 'demo', t: "La mà dreta d'en Bit|La mano derecha de Bit", x: "Si hi ha camí a la dreta, gira a la dreta. Després: si el camí és lliure, endavant; si no, gira a l'esquerra.|Si hay camino a la derecha, gira a la derecha. Después: si el camino está libre, adelante; si no, gira a la izquierda.",
        demo: { w: { map: ['>.###', '#...#', '###.#', '..#.#', 'F####'] }, prog: '9{ if:freeR{ r } if:free{ f } else{ l } }' }, blocks: ['Si hi ha camí a la dreta|Si hay camino a la derecha', 'Si el camí és lliure|Si el camino está libre', 'Si no|Si no'],
        nota: "Atura la demostració a cada cruïlla i pregunta: hi ha camí a la dreta d'en Bit? I davant?|Para la demostración en cada cruce y pregunta: ¿hay camino a la derecha de Bit? ¿Y delante?" },
      { id: 's6', k: 'anim', t: "Primer l'estratègia, després els blocs|Primero la estrategia, después los bloques", anim: 'plan', punts: ["Què ha de fer en Bit?|¿Qué tiene que hacer Bit?", "Digues l'estratègia amb paraules.|Di la estrategia con palabras.", "Passa-la a blocs.|Pásala a bloques.", "Prova-la i millora-la.|Pruébala y mejórala."],
        nota: "Recorda el projecte del repartidor: primer el pla, després els blocs.|Recuerda el proyecto del repartidor: primero el plan, después los bloques." },
      { id: 's7', k: 'anim', t: "Prova-ho a totes les illes|Pruébalo en todas las islas", anim: 'u4isles', x: "Un programa està acabat quan funciona a totes les illes.|Un programa está terminado cuando funciona en todas las islas.",
        nota: "Explica que l'app ho prova sola a cada illa, l'una darrere l'altra, i marca les que funcionen.|Explica que la app lo prueba sola en cada isla, una detrás de otra, y marca las que funcionan." },
      { id: 's8', k: 'concepte', t: "L'estratègia en tres frases|La estrategia en tres frases", punts: ["1. Si hi ha camí a la dreta, giro a la dreta.|1. Si hay camino a la derecha, giro a la derecha.", "2. Si el camí del davant és lliure, avanço.|2. Si el camino de delante está libre, avanzo.", "3. Si no, giro a l'esquerra.|3. Si no, giro a la izquierda."],
        nota: "Que la classe la repeteixi en veu alta. Les frases 2 i 3 són un sol bloc «Si… si no…».|Que la clase la repita en voz alta. Las frases 2 y 3 son un solo bloque «Si… si no…»." },
      { id: 's9', k: 'activitat', t: "El laberint al terra|El laberinto en el suelo", timer: 12, punts: ["Robot: mà dreta sempre a la paret.|Robot: mano derecha siempre en la pared.", "Sensor: digues si hi ha camí a la dreta i davant.|Sensor: di si hay camino a la derecha y delante.", "Comptador/a: compta les voltes de l'estratègia.|Contador/a: cuenta las vueltas de la estrategia.", "A cada missió, canvieu el laberint i els papers.|En cada misión, cambiad el laberinto y los papeles."],
        nota: "Els laberints són els de la fitxa, muntats amb coixins o caixes. El robot camina a poc a poc.|Los laberintos son los de la ficha, montados con cojines o cajas. El robot camina despacio." },
      { id: 's10', k: 'concepte', t: "Les regles del laberint|Las reglas del laberinto", punts: ["Les parets no es poden travessar.|Las paredes no se pueden atravesar.", "Primer es mira la dreta, després el davant.|Primero se mira la derecha, después delante.", "L'estratègia no canvia, encara que canviï el laberint.|La estrategia no cambia, aunque cambie el laberinto."],
        nota: "Deixa-la projectada durant l'activitat del terra.|Déjala proyectada durante la actividad del suelo." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre la sessió «Projecte: el laberint».|Abre la sesión «Proyecto: el laberinto».", "Digues l'estratègia abans de cada repte.|Di la estrategia antes de cada reto.", "Para quan arribis al projecte final.|Para cuando llegues al proyecto final."],
        nota: "Al pas «El laberint de cadires», que toquin «Ho hem fet!».|En el paso «El laberinto de sillas», que toquen «¡Lo hemos hecho!»." },
      { id: 's12', k: 'demo', t: "On acabarà?|¿Dónde terminará?", x: "Repeteix 5 vegades l'estratègia de la mà dreta. A, B o C?|Repite 5 veces la estrategia de la mano derecha. ¿A, B o C?",
        demo: { w: { map: ['>##B', '.#..', 'A##C'] }, prog: '5{ if:freeR{ r } if:free{ f } else{ l } }' },
        nota: "Resposta: A. A la primera cruïlla hi ha camí a la dreta i baixa; a la segona torna a triar la dreta.|Respuesta: A. En el primer cruce hay camino a la derecha y baja; en el segundo vuelve a elegir la derecha." },
      { id: 's13', k: 'concepte', t: "El pla del projecte|El plan del proyecto", punts: ["Mira els 3 laberints.|Mira los 3 laberintos.", "Escriu l'estratègia al full.|Escribe la estrategia en la hoja.", "Passa-la a blocs i prova-la.|Pásala a bloques y pruébala.", "Si falla, pas a pas i arregla el bug.|Si falla, paso a paso y arregla el bug."],
        nota: "No deixis començar a programar fins que cada alumne/a tingui l'estratègia escrita o dita.|No dejes empezar a programar hasta que cada alumno/a tenga la estrategia escrita o dicha." },
      { id: 's14', k: 'activitat', t: "Projecte: el laberint de la festa|Proyecto: el laberinto de la fiesta", timer: 15, x: "Un sol programa per als 3 laberints. Planifica, programa, prova i millora.|Un solo programa para los 3 laberintos. Planifica, programa, prueba y mejora.",
        nota: "Qui acabi pot provar l'estratègia de la mà esquerra i comparar-la, o ajudar un company/a amb preguntes.|Quien termine puede probar la estrategia de la mano izquierda y compararla, o ayudar a un compañero/a con preguntas." },
      { id: 's15', k: 'activitat', t: "Presentem els projectes|Presentamos los proyectos", timer: 5, punts: ["Quina estratègia has fet servir?|¿Qué estrategia has usado?", "Per on anirà en Bit a la primera cruïlla?|¿Por dónde irá Bit en el primer cruce?", "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?"],
        nota: "Abans d'executar cada projecte, que la classe predigui per on anirà en Bit.|Antes de ejecutar cada proyecto, que la clase prediga por dónde irá Bit." },
      { id: 's16', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["Un sensor nota com és el món.|Un sensor nota cómo es el mundo.", "«Si…» fa una cosa només quan la condició és certa.|«Si…» hace una cosa solo cuando la condición es cierta.", "«Si… si no…» tria entre dues coses.|«Si… si no…» elige entre dos cosas.", "Una estratègia serveix per a molts problemes.|Una estrategia sirve para muchos problemas."],
        nota: "Felicita la classe pel projecte. Avança que a la unitat següent aprendran a posar nom a grups de blocs: les funcions.|Felicita a la clase por el proyecto. Avanza que en la unidad siguiente aprenderán a poner nombre a grupos de bloques: las funciones." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què és una estratègia?|¿Qué es una estrategia?", "Explica l'estratègia de la mà dreta.|Explica la estrategia de la mano derecha."],
        nota: "Respostes: una manera de pensar que serveix per a molts problemes semblants; si hi ha camí a la dreta, giro a la dreta; si el davant és lliure, avanço; si no, giro a l'esquerra.|Respuestas: una manera de pensar que sirve para muchos problemas parecidos; si hay camino a la derecha, giro a la derecha; si delante está libre, avanzo; si no, giro a la izquierda." }
    ],
    print: [
      { id: 'p1', t: "Quadrícula del terra: els laberints de la festa|Cuadrícula del suelo: los laberintos de la fiesta", k: 'quadricula',
        intro: "Quadrícula de 5 × 5. Les roques són les parets del laberint (coixins, caixes o cadires). El robot comença a dalt a l'esquerra mirant cap a la dreta i segueix l'estratègia de la mà dreta 10 vegades.|Cuadrícula de 5 × 5. Las rocas son las paredes del laberinto (cojines, cajas o sillas). El robot empieza arriba a la izquierda mirando hacia la derecha y sigue la estrategia de la mano derecha 10 veces.",
        items: [
          { t: "Missió 1: el laberint del centre|Misión 1: el laberinto del centro", w: 5, h: 5, cells: ['>R...', '.RRR.', '.RF..', '.R.R.', '...R.'],
            instructions: "La bandera és al mig. Comproveu que la mà dreta no deixa mai la paret.|La bandera está en el medio. Comprobad que la mano derecha no deja nunca la pared.", sol: '10{ if:freeR{ r } if:free{ f } else{ l } }' },
          { t: "Missió 2: el laberint de baix|Misión 2: el laberinto de abajo", w: 5, h: 5, cells: ['>....', 'RRRR.', '...R.', '.R.R.', '.RF..'],
            instructions: "Abans de començar, digueu per on creieu que anirà el robot.|Antes de empezar, decid por dónde creéis que irá el robot.", sol: '10{ if:freeR{ r } if:free{ f } else{ l } }' },
          { t: "Missió 3: el laberint de la cantonada|Misión 3: el laberinto de la esquina", w: 5, h: 5, cells: ['>R..F', '.R.R.', '...R.', 'RRRR.', '.....'],
            instructions: "Ara la bandera és a dalt a la dreta. L'estratègia continua funcionant?|Ahora la bandera está arriba a la derecha. ¿La estrategia sigue funcionando?", sol: '10{ if:freeR{ r } if:free{ f } else{ l } }' }
        ] },
      { id: 'p2', t: "Full del projecte del laberint|Hoja del proyecto del laberinto", k: 'fitxa',
        intro: "Omple les preguntes 1 i 2 abans de programar, i la 3 i la 4 quan acabis.|Rellena las preguntas 1 y 2 antes de programar, y la 3 y la 4 cuando termines.",
        items: [
          { q: "1. Quina estratègia faràs servir? Escriu-la amb tres frases.|1. ¿Qué estrategia usarás? Escríbela con tres frases.",
            sol: "Per exemple: si hi ha camí a la dreta, giro a la dreta; si el camí del davant és lliure, avanço; si no, giro a l'esquerra.|Por ejemplo: si hay camino a la derecha, giro a la derecha; si el camino de delante está libre, avanzo; si no, giro a la izquierda." },
          { q: "2. Dibuixa els blocs del teu programa.|2. Dibuja los bloques de tu programa.",
            w: { map: ['>.###', '#...#', '#.F##', '#.#.#', '###.#'] }, solProg: '10{ if:freeR{ r } if:free{ f } else{ l } }',
            sol: "Una solució: Repeteix 10 vegades: si hi ha camí a la dreta, gira a la dreta; si el camí és lliure, Endavant; si no, gira a l'esquerra.|Una solución: Repite 10 veces: si hay camino a la derecha, gira a la derecha; si el camino está libre, Adelante; si no, gira a la izquierda." },
          { q: "3. A quina illa ha fallat primer el teu programa? Quin bug hi havia i com l'has arreglat?|3. ¿En qué isla ha fallado primero tu programa? ¿Qué bug había y cómo lo has arreglado?",
            sol: "Resposta oberta. Valoreu que expliqui on fallava i quin bloc ha canviat.|Respuesta abierta. Valorad que explique dónde fallaba y qué bloque ha cambiado." },
          { q: "4. Dibuixa un laberint nou de 5 × 5 on també funcioni la teva estratègia.|4. Dibuja un laberinto nuevo de 5 × 5 donde también funcione tu estrategia.",
            sol: "Resposta oberta. Proveu-lo a la quadrícula del terra amb un company/a.|Respuesta abierta. Probadlo en la cuadrícula del suelo con un compañero/a." }
        ] }
    ]
  }
});
