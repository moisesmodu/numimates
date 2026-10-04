/* Tech Robòtica · unitat 8 «El meu robot» · guia del professor (k8-1 … k8-4)
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. Fase «robot»: activitat amb el
   Maqueen Lite V5 de veritat (grups de 3-4 per kit). */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Dissenya la missió ---------- */
  'k8-1': {
    obj: [
      "L'alumne/a explica què fa bona una missió de robot: objectiu clar, obstacles, un sensor necessari i comprovacions.|El alumno/a explica qué hace buena una misión de robot: objetivo claro, obstáculos, un sensor necesario y comprobaciones.",
      "L'alumne/a dibuixa la seva pista a escala en una quadrícula de 12 × 8 caselles de 10 cm.|El alumno/a dibuja su pista a escala en una cuadrícula de 12 × 8 casillas de 10 cm.",
      "L'alumne/a passa el disseny a l'editor de missions, tria les comprovacions i el desa amb nom.|El alumno/a pasa el diseño al editor de misiones, elige las comprobaciones y lo guarda con nombre.",
      "L'alumne/a repassa les eines del curs (temps, ultrasons, línia, empènyer) amb quatre missions curtes i prova el sensor d'ultrasons al robot real.|El alumno/a repasa las herramientas del curso (tiempo, ultrasonidos, línea, empujar) con cuatro misiones cortas y prueba el sensor de ultrasonidos en el robot real."
    ],
    comp: [
      "Competència digital (CD5): dissenyar i programar una solució tecnològica pròpia|Competencia digital (CD5): diseñar y programar una solución tecnológica propia",
      "Competència STEM (STEM3): plantejar un projecte amb requisits i criteris d'èxit|Competencia STEM (STEM3): plantear un proyecto con requisitos y criterios de éxito",
      "Matemàtiques: escala, quadrícules i mesura en centímetres|Matemáticas: escala, cuadrículas y medida en centímetros",
      "Competència personal i d'aprendre a aprendre: prendre decisions creatives i justificar-les|Competencia personal y de aprender a aprender: tomar decisiones creativas y justificarlas"
    ],
    vocab: [
      ["Missió|Misión", "El que ha d'aconseguir el robot, amb unes condicions que es poden comprovar.|Lo que tiene que conseguir el robot, con unas condiciones que se pueden comprobar."],
      ["Requisit|Requisito", "Una condició que ha de complir el projecte (p. ex. «sense xocar»).|Una condición que tiene que cumplir el proyecto (p. ej. «sin chocar»)."],
      ["Comprovació|Comprobación", "La regla amb què l'app decideix si la missió s'ha complert.|La regla con la que la app decide si la misión se ha cumplido."],
      ["Esbós|Boceto", "Dibuix ràpid per pensar una idea abans de construir-la.|Dibujo rápido para pensar una idea antes de construirla."],
      ["Escala|Escala", "Relació entre el dibuix i la realitat: aquí, 1 casella = 10 cm.|Relación entre el dibujo y la realidad: aquí, 1 casilla = 10 cm."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Dissenya la missió»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Diseña la misión»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit per grup de 3-4: Maqueen Lite V5 amb micro:bit V2, cable USB i piles carregades|Un kit por grupo de 3-4: Maqueen Lite V5 con micro:bit V2, cable USB y pilas cargadas",
        "Cinta de pintor, un metre i una caixa de sabates per grup; llapis de colors|Cinta de pintor, un metro y una caja de zapatos por grupo; lápices de colores"
      ],
      imprimir: ["Full de disseny de la missió (un per alumne/a)|Hoja de diseño de la misión (una por alumno/a)", "Codi: la vitrina de veritat|Código: la vitrina de verdad"],
      prep: [
        "Provar l'editor de missions (pas «Crea») per poder-lo ensenyar al projector.|Probar el editor de misiones (paso «Crea») para poder enseñarlo en el proyector.",
        "Descarregar el codi de l'imprimible a un kit i comprovar que el robot s'atura davant la caixa.|Descargar el código del imprimible en un kit y comprobar que el robot se para delante de la caja.",
        "Marcar a terra, per a cada grup, una línia de sortida i tres marques a 40, 60 i 80 cm on posaran la caixa.|Marcar en el suelo, para cada grupo, una línea de salida y tres marcas a 40, 60 y 80 cm donde pondrán la caja.",
        "Imprimir un full de disseny per alumne/a i uns quants de recanvi.|Imprimir una hoja de diseño por alumno/a y algunas de recambio."
      ]
    },
    plan: [
      { min: 4, t: "Benvinguda a la Mostra de Robots|Bienvenida a la Muestra de Robots", fase: 'inici',
        fa: "Explica el projecte final: durant quatre sessions, cada alumne/a inventarà una missió, la programarà, la passarà al Maqueen i la presentarà a la Mostra de Robots. Fes la pregunta de la diapositiva 2 i apunta a la pissarra les idees de missió que surtin.|Explica el proyecto final: durante cuatro sesiones, cada alumno/a inventará una misión, la programará, la pasará al Maqueen y la presentará en la Muestra de Robots. Haz la pregunta de la diapositiva 2 y apunta en la pizarra las ideas de misión que salgan.",
        diu: ["Aquest cop no us dono jo la missió: la inventeu vosaltres.|Esta vez no os doy yo la misión: la inventáis vosotros.", "Quina missió us agradaria veure fer a un robot?|¿Qué misión os gustaría ver hacer a un robot?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Què fa bona una missió?|¿Qué hace buena una misión?", fase: 'teoria',
        fa: "Presenta les quatre parts d'una bona missió amb l'animació. Executa les tres demos: la llauna que es rescata (comprovacions), la vitrina (sensor) i la meta massa a prop (massa fàcil). Abans de cada demo, demana què passarà. Acaba ensenyant l'esbós a escala i les eines de l'editor.|Presenta las cuatro partes de una buena misión con la animación. Ejecuta las tres demos: la lata que se rescata (comprobaciones), la vitrina (sensor) y la meta demasiado cerca (demasiado fácil). Antes de cada demo, pide qué pasará. Termina enseñando el boceto a escala y las herramientas del editor.",
        diu: ["Com sabrà l'app que la llauna ha arribat a la meta?|¿Cómo sabrá la app que la lata ha llegado a la meta?", "Aquesta missió necessita algun sensor? I si movem la caixa?|¿Esta misión necesita algún sensor? ¿Y si movemos la caja?", "Si una casella fa 10 cm, quant fa la pista de 12 caselles?|Si una casilla mide 10 cm, ¿cuánto mide la pista de 12 casillas?"],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "L'estudi de disseny|El estudio de diseño", fase: 'desconnectat',
        fa: "Cada alumne/a dibuixa la seva missió al full de disseny: robot (amb una fletxa cap on mira), caixes, cinta, llaunes, meta i focus. A sota, apunta l'objectiu, el sensor que caldrà i les comprovacions. Als 6 minuts, intercanvien el full amb el company/a: l'altre/a «fa de robot» amb el dit i diu si la missió es pot fer i si és massa fàcil. Tornen el full amb un consell.|Cada alumno/a dibuja su misión en la hoja de diseño: robot (con una flecha hacia donde mira), cajas, cinta, latas, meta y foco. Debajo, apunta el objetivo, el sensor que hará falta y las comprobaciones. A los 6 minutos, intercambian la hoja con el compañero/a: el otro/a «hace de robot» con el dedo y dice si la misión se puede hacer y si es demasiado fácil. Devuelven la hoja con un consejo.",
        diu: ["Cada casella són 10 cm: el robot n'ocupa gairebé una sencera.|Cada casilla son 10 cm: el robot ocupa casi una entera.", "Quin sensor farà servir el robot a la teva missió?|¿Qué sensor usará el robot en tu misión?", "Hi ha prou espai entre les caixes perquè hi passi el robot?|¿Hay espacio suficiente entre las cajas para que pase el robot?"],
        slides: ['s9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 8, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança fins a la pausa activa. Al pas «La pista del menjador», que toquin «Ho hem fet!»: és l'activitat per a casa. A «On acabarà?», que expliquin la lletra comptant caselles.|Cada alumno/a abre la sesión y avanza hasta la pausa activa. En el paso «La pista del comedor», que toquen «¡Lo hemos hecho!»: es la actividad para casa. En «¿Dónde terminará?», que expliquen la letra contando casillas.",
        diu: ["Compta caselles: 3 caselles són 30 cm.|Cuenta casillas: 3 casillas son 30 cm.", "Quines comprovacions triaria la Rita?|¿Qué comprobaciones elegiría Rita?"],
        slides: ['s10'], app: "De «La missió» fins a «Prova»: les històries, les cinc targetes, la missió ben pensada, ordenar el disseny, la pista del menjador, les comprovacions de la Rita i «On acabarà?».|De «La misión» hasta «Prueba»: las historias, las cinco tarjetas, la misión bien pensada, ordenar el diseño, la pista del comedor, las comprobaciones de Rita y «¿Dónde terminará?».", org: "Individual|Individual" },
      { min: 8, t: "Escalfem motors: quatre missions|Calentamos motores: cuatro misiones", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Després, les quatre missions de prova: motors i temps, ultrasons (3 pistes), línia i empènyer la llauna. Si algú s'encalla més de 3 minuts en una, que passi a la següent: són per recordar, no per examinar.|Haced la pausa activa juntos. Después, las cuatro misiones de prueba: motores y tiempo, ultrasonidos (3 pistas), línea y empujar la lata. Si alguien se atasca más de 3 minutos en una, que pase a la siguiente: son para recordar, no para examinar.",
        diu: ["Quina eina del curs fa servir aquesta missió?|¿Qué herramienta del curso usa esta misión?", "Per què el programa de la vitrina ha de funcionar a les tres pistes?|¿Por qué el programa de la vitrina tiene que funcionar en las tres pistas?"],
        slides: ['s11'], app: "«Pausa activa» i les quatre missions d'escalfament.|«Pausa activa» y las cuatro misiones de calentamiento.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 10, t: "La vitrina de veritat|La vitrina de verdad", fase: 'robot',
        fa: "Grups de 3-4 per kit amb papers: programador/a, pilot, mesurador/a i secretari/ària. A MakeCode (nou projecte → Extensions → «maqueen» → JavaScript), enganxen el codi de l'imprimible i el descarreguen. Posen la caixa de sabates a la marca de 40 cm, robot darrere la línia de sortida, cable fora i a terra. Mesuren a quants cm de la caixa s'atura. Repeteixen amb la caixa a 60 i a 80 cm: el mateix programa ha de funcionar a les tres, com al simulador.|Grupos de 3-4 por kit con papeles: programador/a, piloto, medidor/a y secretario/a. En MakeCode (nuevo proyecto → Extensiones → «maqueen» → JavaScript), pegan el código del imprimible y lo descargan. Ponen la caja de zapatos en la marca de 40 cm, robot detrás de la línea de salida, cable fuera y en el suelo. Miden a cuántos cm de la caja se para. Repiten con la caja a 60 y a 80 cm: el mismo programa tiene que funcionar en las tres, como en el simulador.",
        diu: ["Cable fora i robot a terra abans d'encendre'l.|Cable fuera y robot en el suelo antes de encenderlo.", "S'atura a la mateixa distància de la caixa encara que la mogueu? Per què?|¿Se para a la misma distancia de la caja aunque la mováis? ¿Por qué?", "Aquest sensor us servirà per a la vostra missió?|¿Este sensor os servirá para vuestra misión?"],
        slides: ['s12', 's13'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers|Grupos de 3-4 por kit con papeles" },
      { min: 9, t: "Crea: la teva missió a l'editor|Crea: tu misión en el editor", fase: 'crea',
        fa: "De tornada a l'ordinador, cada alumne/a passa el full de disseny a l'editor: primer la meta i el robot, després les caixes i la cinta, i al final les comprovacions i el nom. Ensenya al projector com es fa la cinta (tocar caselles en ordre) i com es gira el robot (tocar-lo dues vegades). Quan les tres comprovacions de sota estiguin en verd, que la desin.|De vuelta al ordenador, cada alumno/a pasa la hoja de diseño al editor: primero la meta y el robot, después las cajas y la cinta, y al final las comprobaciones y el nombre. Enseña en el proyector cómo se hace la cinta (tocar casillas en orden) y cómo se gira el robot (tocarlo dos veces). Cuando las tres comprobaciones de abajo estén en verde, que la guarden.",
        diu: ["La teva missió necessita un sensor? Quin?|¿Tu misión necesita un sensor? ¿Cuál?", "Les comprovacions diuen exactament el que vols que faci el robot?|¿Las comprobaciones dicen exactamente lo que quieres que haga el robot?"],
        slides: ['s14'], app: "Pas «Crea»: l'editor de missions (es desa per a les sessions següents).|Paso «Crea»: el editor de misiones (se guarda para las sesiones siguientes).", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum i deixa que responguin les preguntes finals de l'app. Recull els fulls de disseny per tornar-los la sessió que ve. A la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas con el resumen y deja que respondan las preguntas finales de la app. Recoge las hojas de diseño para devolverlas la próxima sesión. En la puerta, haz a cada alumno/a una pregunta del ticket.",
        diu: ["Qui em diu una missió massa fàcil? I una d'impossible?|¿Quién me dice una misión demasiado fácil? ¿Y una imposible?", "Quin sensor farà servir el teu robot?|¿Qué sensor usará tu robot?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Dissenya una missió impossible (meta tancada entre caixes) o massa fàcil (meta al davant).|Diseña una misión imposible (meta encerrada entre cajas) o demasiado fácil (meta delante).",
        "Que el company/a faci de robot amb el dit al full. Pregunta: per on passaria? Quant temps duraria la missió?|Que el compañero/a haga de robot con el dedo en la hoja. Pregunta: ¿por dónde pasaría? ¿Cuánto duraría la misión?"],
      ["Posa caixes en caselles enganxades i no deixa espai perquè hi passi el robot.|Pone cajas en casillas pegadas y no deja espacio para que pase el robot.",
        "Recorda que el robot fa gairebé 9 cm: necessita un passadís d'almenys una casella lliure, millor dues.|Recuerda que el robot mide casi 9 cm: necesita un pasillo de al menos una casilla libre, mejor dos."],
      ["Tria comprovacions que no lliguen amb la missió (p. ex. «seguir la cinta» sense cap cinta).|Elige comprobaciones que no encajan con la misión (p. ej. «seguir la cinta» sin ninguna cinta).",
        "Que llegeixi en veu alta l'objectiu del full i després les comprovacions: diuen el mateix?|Que lea en voz alta el objetivo de la hoja y después las comprobaciones: ¿dicen lo mismo?"],
      ["Dibuixa la cinta amb molts revolts de 90° seguits.|Dibuja la cinta con muchas curvas de 90° seguidas.",
        "No és un error, però avisa que les cantonades de 90° són difícils de seguir: la sessió que ve aprendrem a girar-hi sobre si mateix. Proposa alguna diagonal.|No es un error, pero avisa de que las esquinas de 90° son difíciles de seguir: la próxima sesión aprenderemos a girar sobre sí mismo. Propón alguna diagonal."],
      ["Al robot real, el robot s'atura una mica més a prop o més lluny que al simulador.|En el robot real, el robot se para un poco más cerca o más lejos que en el simulador.",
        "És normal: el sensor i el terra no són perfectes. Que apuntin la diferència: la sessió 3 la farem servir per calibrar.|Es normal: el sensor y el suelo no son perfectos. Que apunten la diferencia: en la sesión 3 la usaremos para calibrar."]
    ],
    diff: {
      mes: "Afegir a la missió una segona dificultat (una llauna i una cinta, o un focus de llum) i escriure al full el pla del programa per trams.|Añadir a la misión una segunda dificultad (una lata y una cinta, o un foco de luz) y escribir en la hoja el plan del programa por tramos.",
      menys: "Partir d'una de les quatre missions d'escalfament i canviar-ne només una cosa (moure la meta o afegir una caixa). Dibuixar només la meta, el robot i un obstacle.|Partir de una de las cuatro misiones de calentamiento y cambiar solo una cosa (mover la meta o añadir una caja). Dibujar solo la meta, el robot y un obstáculo."
    },
    aval: {
      ticket: ["Digues les quatre parts d'una bona missió.|Di las cuatro partes de una buena misión.", "Quin sensor farà servir el teu robot i per a què?|¿Qué sensor usará tu robot y para qué?"],
      rubric: [
        ["Disseny de la missió|Diseño de la misión", "La missió té objectiu, obstacles, un sensor necessari i solució.|La misión tiene objetivo, obstáculos, un sensor necesario y solución.", "La missió és massa fàcil, impossible o no necessita cap sensor.|La misión es demasiado fácil, imposible o no necesita ningún sensor."],
        ["Esbós a escala|Boceto a escala", "Dibuixa la pista a la quadrícula amb mides coherents (passadissos d'almenys 10 cm).|Dibuja la pista en la cuadrícula con medidas coherentes (pasillos de al menos 10 cm).", "Dibuixa la idea, però sense tenir en compte la mida del robot.|Dibuja la idea, pero sin tener en cuenta el tamaño del robot."],
        ["Comprovacions|Comprobaciones", "Tria les comprovacions que corresponen exactament a l'objectiu.|Elige las comprobaciones que corresponden exactamente al objetivo.", "Tria comprovacions a l'atzar o que no lliguen amb la missió.|Elige comprobaciones al azar o que no encajan con la misión."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «La pista del menjador»: una missió amb sortida, meta, un obstacle i un camí de cordill, i algú que fa de robot amb els ulls tancats. Apunteu quines idees voleu afegir a la vostra missió.|En casa, con el móvil, podéis repetir la sesión y hacer «La pista del comedor»: una misión con salida, meta, un obstáculo y un camino de cordel, y alguien que hace de robot con los ojos cerrados. Apuntad qué ideas queréis añadir a vuestra misión.",
    slides: [
      { id: 's1', k: 'portada', t: "Dissenya la missió|Diseña la misión", x: "Comença el projecte final: la teva missió per a la Mostra de Robots.|Empieza el proyecto final: tu misión para la Muestra de Robots.",
        nota: "Explica el calendari: avui dissenyar, la setmana que ve programar i provar, després passar-ho al robot real i, a l'última, presentar-ho.|Explica el calendario: hoy diseñar, la semana que viene programar y probar, después pasarlo al robot real y, en la última, presentarlo." },
      { id: 's2', k: 'pregunta', t: "Quina missió t'agradaria veure?|¿Qué misión te gustaría ver?", punts: ["Un robot que rescata una llauna|Un robot que rescata una lata", "Un robot que segueix un circuit|Un robot que sigue un circuito", "Un robot que esquiva caixes fins a la meta|Un robot que esquiva cajas hasta la meta", "La teva idea…|Tu idea…"],
        nota: "Apunta les idees a la pissarra. No les jutgis encara: després de la teoria, revisarem quines tenen les quatre parts d'una bona missió.|Apunta las ideas en la pizarra. No las juzgues todavía: después de la teoría, revisaremos cuáles tienen las cuatro partes de una buena misión." },
      { id: 's3', k: 'anim', t: "Una bona missió|Una buena misión", anim: 'k8good', x: "Objectiu clar, obstacles, un sensor que calgui i una manera de comprovar-la.|Objetivo claro, obstáculos, un sensor que haga falta y una manera de comprobarla.",
        nota: "Torna a les idees de la pissarra i comproveu-les amb aquestes quatre parts. Quina en té més? A quina li falta un sensor?|Vuelve a las ideas de la pizarra y comprobadlas con estas cuatro partes. ¿Cuál tiene más? ¿A cuál le falta un sensor?" },
      { id: 's4', k: 'robo', t: "Com es comprova?|¿Cómo se comprueba?", x: "La missió: portar la llauna a la meta sense xocar.|La misión: llevar la lata a la meta sin chocar.",
        robo: { w: { w: 120, h: 80, bot: [15, 45, 90], walls: [[50.5, .5, 9, 9], [50.5, 10.5, 9, 9], [50.5, 60.5, 9, 9], [50.5, 70.5, 9, 9]], objs: [{ x: 45, y: 45, r: 3, kind: 'can' }], zones: [{ id: 'meta', r: [90, 30, 20, 20], col: 'green', label: 'META|META' }] }, prog: 'start{ run:all,fwd,150 wait:5000 stop:all }' },
        tip: "Abans d'executar: la llauna arribarà a la meta?|Antes de ejecutar: ¿la lata llegará a la meta?",
        nota: "Explica que l'editor té cinc comprovacions: meta i aturar-s'hi, sense xocar, llauna a la meta, menys de 20 segons i seguir la cinta. L'app les revisa totes cada vegada.|Explica que el editor tiene cinco comprobaciones: meta y pararse, sin chocar, lata a la meta, menos de 20 segundos y seguir la cinta. La app las revisa todas cada vez." },
      { id: 's5', k: 'robo', t: "Missions que necessiten sentir|Misiones que necesitan sentir", x: "El robot para sol a 10 cm de la vitrina, sigui on sigui.|El robot para solo a 10 cm de la vitrina, esté donde esté.",
        robo: { w: { w: 120, h: 60, bot: [15, 30, 90], walls: [[80.5, 10.5, 9, 39]] }, prog: 'forever{ if:dist<10{ stop:all car:all,red } else{ run:all,fwd,150 car:all,green } }' },
        nota: "Pregunta: si movem la vitrina 20 cm, aquest programa continuarà funcionant? I un programa de «endavant 4 segons»? Les missions amb sensor són més interessants i més fiables.|Pregunta: si movemos la vitrina 20 cm, ¿este programa seguirá funcionando? ¿Y un programa de «adelante 4 segundos»? Las misiones con sensor son más interesantes y más fiables." },
      { id: 's6', k: 'robo', t: "Massa fàcil!|¡Demasiado fácil!", x: "La meta és tan a prop que la missió dura un segon.|La meta está tan cerca que la misión dura un segundo.",
        robo: { w: { w: 120, h: 60, bot: [15, 30, 90], zones: [{ id: 'meta', r: [24, 20, 20, 20], col: 'green', label: 'META|META' }] }, prog: 'start{ run:all,fwd,150 wait:700 stop:all }' },
        nota: "Demana com la farien més interessant sense fer-la impossible: allunyar la meta, posar-hi una caixa pel mig, una cinta amb revolts…|Pide cómo la harían más interesante sin hacerla imposible: alejar la meta, poner una caja en medio, una cinta con curvas…" },
      { id: 's7', k: 'anim', t: "Primer, en paper|Primero, en papel", anim: 'k8sketch', x: "Quadrícula de 12 × 8 caselles: cada casella fa 10 × 10 cm.|Cuadrícula de 12 × 8 casillas: cada casilla mide 10 × 10 cm.",
        nota: "Remarca que l'esbós és a escala: tot el que dibuixin es podrà construir a terra amb cinta. El robot ocupa gairebé una casella.|Remarca que el boceto está a escala: todo lo que dibujen se podrá construir en el suelo con cinta. El robot ocupa casi una casilla." },
      { id: 's8', k: 'concepte', t: "Les eines de l'editor|Las herramientas del editor", pic: 'img/ic/wrench.webp', punts: ["🧱 Paret i 🥫 llauna: toca una casella per posar-la o treure-la.|🧱 Pared y 🥫 lata: toca una casilla para ponerla o quitarla.", "〰️ Cinta negra: toca les caselles en ordre.|〰️ Cinta negra: toca las casillas en orden.", "🏁 Meta (2 × 2 caselles) i 🤖 robot (toca'l dues vegades per girar-lo).|🏁 Meta (2 × 2 casillas) y 🤖 robot (tócalo dos veces para girarlo).", "La missió: tria les comprovacions i posa-li nom.|La misión: elige las comprobaciones y ponle nombre."],
        nota: "Si pots, obre el pas «Crea» al projector i fes una missió d'exemple en 1 minut. No la desis: és només per ensenyar les eines.|Si puedes, abre el paso «Crea» en el proyector y haz una misión de ejemplo en 1 minuto. No la guardes: es solo para enseñar las herramientas." },
      { id: 's9', k: 'activitat', t: "L'estudi de disseny|El estudio de diseño", timer: 10, punts: ["Dibuixa la teva missió al full de disseny.|Dibuja tu misión en la hoja de diseño.", "Apunta l'objectiu, el sensor i les comprovacions.|Apunta el objetivo, el sensor y las comprobaciones.", "Intercanvia el full: el company/a fa de robot amb el dit.|Intercambia la hoja: el compañero/a hace de robot con el dedo.", "Torna-li el full amb un consell.|Devuélvele la hoja con un consejo."],
        nota: "Passa per les taules i pregunta per l'espai: hi cap el robot entre aquestes dues caixes? Els que acabin aviat poden dibuixar una segona versió més difícil.|Pasa por las mesas y pregunta por el espacio: ¿cabe el robot entre estas dos cajas? Los que terminen pronto pueden dibujar una segunda versión más difícil." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 8, punts: ["Obre la sessió «Dissenya la missió».|Abre la sesión «Diseña la misión».", "Mira les demos de «Descobreix».|Mira las demos de «Descubre».", "A «On acabarà?», compta caselles.|En «¿Dónde terminará?», cuenta casillas.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas «La pista del menjador», que toquin «Ho hem fet!»: és per fer a casa.|En el paso «La pista del comedor», que toquen «¡Lo hemos hecho!»: es para hacer en casa." },
      { id: 's11', k: 'repte', t: "Escalfem motors|Calentamos motores", timer: 8, punts: ["1. Motors i temps|1. Motores y tiempo", "2. Ultrasons: la vitrina (3 pistes)|2. Ultrasonidos: la vitrina (3 pistas)", "3. Línia: segueix la cinta|3. Línea: sigue la cinta", "4. Empènyer: rescata la llauna|4. Empujar: rescata la lata"],
        nota: "Són missions fetes amb el mateix editor que faran servir: fes-los-ho notar (parets de casella en casella, meta de 2 × 2). Cada una recorda una eina del curs.|Son misiones hechas con el mismo editor que usarán: házselo notar (paredes de casilla en casilla, meta de 2 × 2). Cada una recuerda una herramienta del curso." },
      { id: 's12', k: 'activitat', t: "La vitrina de veritat|La vitrina de verdad", timer: 10, punts: ["MakeCode → Extensions → «maqueen» → JavaScript.|MakeCode → Extensiones → «maqueen» → JavaScript.", "Enganxa el codi i descarrega'l.|Pega el código y descárgalo.", "Caixa a 40 cm: on s'atura? I a 60? I a 80?|Caja a 40 cm: ¿dónde se para? ¿Y a 60? ¿Y a 80?", "Apunteu la distància a la caixa cada vegada.|Apuntad la distancia a la caja cada vez."],
        nota: "El codi és a l'imprimible «Codi: la vitrina de veritat». La caixa ha de ser prou alta i ampla perquè els ultrasons la vegin (una caixa de sabates va bé). Si el robot no s'atura, comproveu que la caixa estigui recta davant del sensor.|El código está en el imprimible «Código: la vitrina de verdad». La caja tiene que ser lo bastante alta y ancha para que los ultrasonidos la vean (una caja de zapatos va bien). Si el robot no se para, comprobad que la caja esté recta delante del sensor." },
      { id: 's13', k: 'concepte', t: "Seguretat amb el robot|Seguridad con el robot", pic: 'img/ic/shield.webp', punts: ["El robot sempre a terra (o en una taula amb vora).|El robot siempre en el suelo (o en una mesa con borde).", "Desconnecta el cable USB abans d'encendre'l.|Desconecta el cable USB antes de encenderlo.", "Apaga'l per agafar-lo; mans lluny de les rodes.|Apágalo para cogerlo; manos lejos de las ruedas.", "Només el pilot l'encén i l'apaga.|Solo el piloto lo enciende y lo apaga."],
        nota: "Deixa aquesta diapositiva projectada mentre treballen amb els robots.|Deja esta diapositiva proyectada mientras trabajan con los robots." },
      { id: 's14', k: 'activitat', t: "Crea: la teva missió a l'editor|Crea: tu misión en el editor", timer: 9, punts: ["Primer la meta i el robot.|Primero la meta y el robot.", "Després caixes, cinta i llaunes.|Después cajas, cinta y latas.", "Tria les comprovacions i posa-li nom.|Elige las comprobaciones y ponle nombre.", "Desa la missió.|Guarda la misión."],
        nota: "La missió queda desada al perfil de cada alumne/a i la faran servir les tres sessions següents. Si algú no l'acaba, la podrà acabar al començament de la sessió que ve.|La misión queda guardada en el perfil de cada alumno/a y la usarán las tres sesiones siguientes. Si alguien no la termina, podrá terminarla al principio de la próxima sesión." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Una bona missió: objectiu, obstacles, sensor i comprovacions.|Una buena misión: objetivo, obstáculos, sensor y comprobaciones.", "Ni massa fàcil ni impossible.|Ni demasiado fácil ni imposible.", "Primer en paper, a escala: 1 casella = 10 cm.|Primero en papel, a escala: 1 casilla = 10 cm."],
        nota: "Pregunta qui ha canviat alguna cosa del seu disseny gràcies al consell del company/a.|Pregunta quién ha cambiado algo de su diseño gracias al consejo del compañero/a." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Les quatre parts d'una bona missió.|Las cuatro partes de una buena misión.", "Quin sensor farà servir el teu robot?|¿Qué sensor usará tu robot?"],
        nota: "Anota qui encara no té clar quin sensor necessitarà: és el primer que revisarem la setmana que ve.|Anota quién todavía no tiene claro qué sensor necesitará: es lo primero que revisaremos la semana que viene." }
    ],
    print: [
      { id: 'p1', t: "Full de disseny de la missió|Hoja de diseño de la misión", k: 'graella', w: 12, h: 8,
        intro: "Cada casella fa 10 × 10 cm: la pista sencera fa 120 × 80 cm. Dibuixa-hi el robot (amb una fletxa cap on mira), les caixes, la cinta, les llaunes i la meta (2 × 2 caselles).|Cada casilla mide 10 × 10 cm: la pista entera mide 120 × 80 cm. Dibuja el robot (con una flecha hacia donde mira), las cajas, la cinta, las latas y la meta (2 × 2 casillas).",
        legend: [['🤖', 'El robot (i una fletxa)|El robot (y una flecha)'], ['🧱', 'Caixa o paret|Caja o pared'], ['〰️', 'Cinta negra|Cinta negra'], ['🏁', 'Meta (2 × 2)|Meta (2 × 2)'], ['🥫', 'Llauna|Lata'], ['💡', 'Focus de llum|Foco de luz']],
        items: [
          { q: "Nom de la missió i objectiu: què ha d'aconseguir el robot?|Nombre de la misión y objetivo: ¿qué tiene que conseguir el robot?" },
          { q: "Quin sensor farà servir el robot? Per a què?|¿Qué sensor usará el robot? ¿Para qué?" },
          { q: "Comprovacions: ☐ meta i aturar-s'hi ☐ sense xocar ☐ llauna a la meta ☐ menys de 20 s ☐ seguir la cinta|Comprobaciones: ☐ meta y pararse ☐ sin chocar ☐ lata a la meta ☐ menos de 20 s ☐ seguir la cinta", big: false },
          { q: "Consell del company/a provador:|Consejo del compañero/a probador:" }
        ] },
      { id: 'p2', t: "Codi: la vitrina de veritat|Código: la vitrina de verdad", k: 'codi',
        intro: "A makecode.microbit.org: nou projecte → Extensions → busca «maqueen» → JavaScript → enganxa el codi → Descarrega. Cable fora i robot a terra! Proveu la caixa a 40, 60 i 80 cm.|En makecode.microbit.org: nuevo proyecto → Extensiones → busca «maqueen» → JavaScript → pega el código → Descarga. ¡Cable fuera y robot en el suelo! Probad la caja a 40, 60 y 80 cm.",
        items: [
          { t: "Para davant la vitrina amb llums de colors|Para delante de la vitrina con luces de colores", prog: 'forever{ if:dist<10{ stop:all car:all,red } else{ run:all,fwd,150 car:all,green } }' }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Programa i prova ---------- */
  'k8-2': {
    obj: [
      "L'alumne/a fa servir el cicle planifica → programa → prova → millora per construir la seva missió en versions.|El alumno/a usa el ciclo planifica → programa → prueba → mejora para construir su misión en versiones.",
      "L'alumne/a divideix una missió llarga en trams i els programa i prova d'un en un.|El alumno/a divide una misión larga en tramos y los programa y prueba de uno en uno.",
      "L'alumne/a depura amb llums del cotxe i amb el número de la distància a la pantalla.|El alumno/a depura con luces del coche y con el número de la distancia en la pantalla.",
      "L'alumne/a comprova al robot real els valors del sensor d'ultrasons i el compara amb el metre.|El alumno/a comprueba en el robot real los valores del sensor de ultrasonidos y los compara con el metro."
    ],
    comp: [
      "Competència digital (CD5): depurar i millorar un programa propi|Competencia digital (CD5): depurar y mejorar un programa propio",
      "Competència STEM (STEM2): provar una hipòtesi canviant una sola variable cada vegada|Competencia STEM (STEM2): probar una hipótesis cambiando una sola variable cada vez",
      "Matemàtiques: mesura i comparació de distàncies|Matemáticas: medida y comparación de distancias",
      "Competència personal i d'aprendre a aprendre: perseverar davant l'error|Competencia personal y de aprender a aprender: perseverar ante el error"
    ],
    vocab: [
      ["Cicle de disseny|Ciclo de diseño", "Planificar, programar, provar i millorar, una vegada i una altra.|Planificar, programar, probar y mejorar, una y otra vez."],
      ["Versió|Versión", "Cada volta del cicle: v1, v2, v3…|Cada vuelta del ciclo: v1, v2, v3…"],
      ["Tram|Tramo", "Un tros de la missió que es pot programar i provar sol.|Un trozo de la misión que se puede programar y probar solo."],
      ["Depurar|Depurar", "Buscar i arreglar els errors (bugs) d'un programa.|Buscar y arreglar los errores (bugs) de un programa."],
      ["Llums de depuració|Luces de depuración", "Llums que s'encenen en una part del programa per saber què fa el robot.|Luces que se encienden en una parte del programa para saber qué hace el robot."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Programa i prova»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Programa y prueba»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit per grup de 3-4: Maqueen Lite V5 amb micro:bit V2, cable USB i piles carregades|Un kit por grupo de 3-4: Maqueen Lite V5 con micro:bit V2, cable USB y pilas cargadas",
        "Un metre i una caixa de sabates per grup; els fulls de disseny de la sessió anterior|Un metro y una caja de zapatos por grupo; las hojas de diseño de la sesión anterior"
      ],
      imprimir: ["Fitxa: depuradors de paper (una per parella)|Ficha: depuradores de papel (una por pareja)", "Codi: llums i números al robot real|Código: luces y números en el robot real"],
      prep: [
        "Tornar els fulls de disseny a cada alumne/a.|Devolver las hojas de diseño a cada alumno/a.",
        "Descarregar els dos programes de l'imprimible a un kit i comprovar que la pantalla mostra la distància.|Descargar los dos programas del imprimible en un kit y comprobar que la pantalla muestra la distancia.",
        "Imprimir una fitxa de depuradors per parella.|Imprimir una ficha de depuradores por pareja.",
        "Pensar dues o tres missions dels alumnes que puguin servir d'exemple al projector.|Pensar dos o tres misiones de los alumnos que puedan servir de ejemplo en el proyector."
      ]
    },
    plan: [
      { min: 4, t: "Recordem i el banc de proves|Recordamos y el banco de pruebas", fase: 'inici',
        fa: "Repassa què té una bona missió i presenta el repte d'avui: que la missió de cada alumne/a funcioni de veritat. Explica que els equips d'enginyeria proven cada robot moltes vegades.|Repasa qué tiene una buena misión y presenta el reto de hoy: que la misión de cada alumno/a funcione de verdad. Explica que los equipos de ingeniería prueban cada robot muchas veces.",
        diu: ["Qui recorda les quatre parts d'una bona missió?|¿Quién recuerda las cuatro partes de una buena misión?", "Creieu que el programa us funcionarà a la primera?|¿Creéis que el programa os funcionará a la primera?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Cicle, trams i depuració|Ciclo, tramos y depuración", fase: 'teoria',
        fa: "Explica el cicle amb l'animació. Executa la demo dels trams i fes notar que primer va el seguidor i després la parada. Ensenya els llums de depuració i les cantonades de 90° (pregunta abans per què el robot hi gira sobre si mateix). Acaba amb la demo que xoca: una prova no és prou.|Explica el ciclo con la animación. Ejecuta la demo de los tramos y haz notar que primero va el seguidor y después la parada. Enseña las luces de depuración y las esquinas de 90° (pregunta antes por qué el robot gira sobre sí mismo). Termina con la demo que choca: una prueba no es suficiente.",
        diu: ["Quins trams té aquesta missió?|¿Qué tramos tiene esta misión?", "Si els llums es posen vermells però el robot no para, on és el bug?|Si las luces se ponen rojas pero el robot no para, ¿dónde está el bug?", "Per què aquest programa funcionava ahir i avui xoca?|¿Por qué este programa funcionaba ayer y hoy choca?"],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Depuradors de paper|Depuradores de papel", fase: 'desconnectat',
        fa: "Per parelles amb la fitxa. Cada exercici té una pista dibuixada i un programa amb un bug. Un fa de robot (mou el dit per la pista llegint el programa) i l'altre fa de depurador/a: on falla?, quin bloc cal canviar? Canvien els papers a cada exercici. A l'últim exercici, cadascú escriu els trams de la seva pròpia missió.|Por parejas con la ficha. Cada ejercicio tiene una pista dibujada y un programa con un bug. Uno hace de robot (mueve el dedo por la pista leyendo el programa) y el otro hace de depurador/a: ¿dónde falla?, ¿qué bloque hay que cambiar? Cambian los papeles en cada ejercicio. En el último ejercicio, cada uno escribe los tramos de su propia misión.",
        diu: ["Llegiu el programa bloc a bloc, sense saltar-vos-en cap.|Leed el programa bloque a bloque, sin saltaros ninguno.", "No us dic on és el bug: busqueu el moment en què el robot fa una cosa diferent de la que volíeu.|No os digo dónde está el bug: buscad el momento en el que el robot hace algo diferente de lo que queríais."],
        slides: ['s9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles|Por parejas" },
      { min: 12, t: "A l'ordinador: la versió 1|En el ordenador: la versión 1", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió, mira les targetes i arriba al seu editor: revisa la missió, la desa i la programa (versió 1) amb el pla de trams de la fitxa. Després, les preguntes i el bloc equivocat. Si algú no té missió, la dissenya ara (l'editor ho permet al pas anterior).|Cada alumno/a abre la sesión, mira las tarjetas y llega a su editor: revisa la misión, la guarda y la programa (versión 1) con el plan de tramos de la ficha. Después, las preguntas y el bloque equivocado. Si alguien no tiene misión, la diseña ahora (el editor lo permite en el paso anterior).",
        diu: ["Comença pel primer tram i prova'l abans d'afegir-ne un altre.|Empieza por el primer tramo y pruébalo antes de añadir otro.", "Què et diuen els llums? Quina branca del «si» s'està fent?|¿Qué te dicen las luces? ¿Qué rama del «si» se está haciendo?"],
        slides: ['s10'], app: "De «La missió» fins a «Investiga»: targetes, revisa la missió, versió 1, preguntes i el bloc equivocat.|De «La misión» hasta «Investiga»: tarjetas, revisa la misión, versión 1, preguntas y el bloque equivocado.", org: "Individual|Individual" },
      { min: 8, t: "Reptes del banc de proves|Retos del banco de pruebas", fase: 'ordinador',
        fa: "Pausa activa junts. Després, tres reptes: arreglar el seguidor de les cantonades de 90°, els llums de depuració (3 pistes) i la missió a trams (3 pistes). Recorda que el repte de les cantonades els anirà bé per a la seva pròpia cinta.|Pausa activa juntos. Después, tres retos: arreglar el seguidor de las esquinas de 90°, las luces de depuración (3 pistas) y la misión por tramos (3 pistas). Recuerda que el reto de las esquinas les irá bien para su propia cinta.",
        diu: ["Quina roda és la de dins del revolt?|¿Qué rueda es la de dentro de la curva?", "El vostre programa funciona a les tres pistes o només a una?|¿Vuestro programa funciona en las tres pistas o solo en una?"],
        slides: ['s11'], app: "«Pausa activa», les cantonades de 90°, els llums de depuració i la missió a trams.|«Pausa activa», las esquinas de 90°, las luces de depuración y la misión por tramos.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 10, t: "Llums i números al robot real|Luces y números en el robot real", fase: 'robot',
        fa: "Grups de 3-4 per kit. Primer descarreguen el programa «Mostra la distància» de l'imprimible: el pilot aguanta el robot a terra (motors aturats) i el mesurador/a posa la caixa a 10, 20 i 30 cm amb el metre. Apunten el número de la pantalla al costat de la mesura del metre: coincideixen? Després, el programa dels llums de depuració: verd mentre avança, vermell quan para davant la caixa.|Grupos de 3-4 por kit. Primero descargan el programa «Muestra la distancia» del imprimible: el piloto aguanta el robot en el suelo (motores parados) y el medidor/a pone la caja a 10, 20 y 30 cm con el metro. Apuntan el número de la pantalla al lado de la medida del metro: ¿coinciden? Después, el programa de las luces de depuración: verde mientras avanza, rojo cuando para delante de la caja.",
        diu: ["La pantalla diu el mateix que el metre? Per quants centímetres es diferencia?|¿La pantalla dice lo mismo que el metro? ¿Por cuántos centímetros se diferencia?", "Si poseu la caixa de biaix, què passa amb el número?|Si ponéis la caja de lado, ¿qué pasa con el número?"],
        slides: ['s12', 's13'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers|Grupos de 3-4 por kit con papeles" },
      { min: 5, t: "Crea: la versió 2|Crea: la versión 2", fase: 'crea',
        fa: "De tornada a l'ordinador, cada alumne/a millora la missió (versió 2) i la torna a programar. Qui no acabi, ho farà a l'inici de la sessió que ve.|De vuelta al ordenador, cada alumno/a mejora la misión (versión 2) y la vuelve a programar. Quien no termine, lo hará al principio de la próxima sesión.",
        diu: ["Quina millora has fet? Continua tenint solució?|¿Qué mejora has hecho? ¿Sigue teniendo solución?"],
        slides: ['s14'], app: "Pas «Crea»: millora la missió i la versió 2 del programa.|Paso «Crea»: mejora la misión y la versión 2 del programa.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum i les preguntes finals de l'app. A la porta, una pregunta del tiquet a cada alumne/a.|Repasa las tres ideas con el resumen y las preguntas finales de la app. En la puerta, una pregunta del ticket a cada alumno/a.",
        diu: ["Qui ha trobat un bug avui? Com l'heu trobat?|¿Quién ha encontrado un bug hoy? ¿Cómo lo habéis encontrado?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Programa tota la missió de cop i, quan falla, no sap on és l'error.|Programa toda la misión de golpe y, cuando falla, no sabe dónde está el error.",
        "Que esborri (o tregui) tot menys el primer tram i el provi sol. Quan funcioni, que n'afegeixi un altre.|Que borre (o saque) todo menos el primer tramo y lo pruebe solo. Cuando funcione, que añada otro."],
      ["Canvia molts números alhora i no sap quin canvi ha servit.|Cambia muchos números a la vez y no sabe qué cambio ha servido.",
        "Proposa la regla de l'enginyer/a: un sol canvi per prova. Que apunti a la fitxa què ha canviat i què ha passat.|Propón la regla del ingeniero/a: un solo cambio por prueba. Que apunte en la ficha qué ha cambiado y qué ha pasado."],
      ["El robot es surt de la cinta a les cantonades de 90°.|El robot se sale de la cinta en las esquinas de 90°.",
        "Pregunta quina roda és la de dins del revolt i què passaria si anés enrere. Que miri el repte de les cantonades.|Pregunta qué rueda es la de dentro de la curva y qué pasaría si fuera hacia atrás. Que mire el reto de las esquinas."],
      ["Posa la condició al revés (distància &gt; 10 en lloc de &lt; 10) i el robot no arrenca.|Pone la condición al revés (distancia &gt; 10 en lugar de &lt; 10) y el robot no arranca.",
        "Que hi posi llums de depuració: quina branca s'està fent quan el robot és lluny? Llegiu la condició en veu alta.|Que ponga luces de depuración: ¿qué rama se está haciendo cuando el robot está lejos? Leed la condición en voz alta."],
      ["Treu els obstacles de la missió perquè no se'n surt.|Quita los obstáculos de la misión porque no se sale.",
        "Valora l'esforç i proposa que primer facin funcionar la missió simplificada i després hi tornin a posar un obstacle (versió 3).|Valora el esfuerzo y propón que primero hagan funcionar la misión simplificada y después vuelvan a poner un obstáculo (versión 3)."]
    ],
    diff: {
      mes: "Fer servir una variable per a la velocitat i canviar-la en un sol lloc. Provar el programa a la missió d'un company/a: funciona també allà?|Usar una variable para la velocidad y cambiarla en un solo sitio. Probar el programa en la misión de un compañero/a: ¿funciona también allí?",
      menys: "Programar només el primer tram de la missió amb ajuda dels reptes de la sessió (copiar el seguidor o la parada i adaptar-los). Fer servir la pista del pas a pas: llums de colors a cada branca.|Programar solo el primer tramo de la misión con ayuda de los retos de la sesión (copiar el seguidor o la parada y adaptarlos). Usar la pista del paso a paso: luces de colores en cada rama."
    },
    aval: {
      ticket: ["Quins són els quatre passos del cicle de l'enginyer/a?|¿Cuáles son los cuatro pasos del ciclo del ingeniero/a?", "Com t'ajuden els llums de depuració a trobar un bug?|¿Cómo te ayudan las luces de depuración a encontrar un bug?"],
      rubric: [
        ["Programació a trams|Programación por tramos", "Divideix la missió en trams i els prova d'un en un.|Divide la misión en tramos y los prueba de uno en uno.", "Ho programa tot de cop i li costa saber on falla.|Lo programa todo de golpe y le cuesta saber dónde falla."],
        ["Depuració|Depuración", "Fa servir llums o números per entendre què fa el robot i canvia una sola cosa cada vegada.|Usa luces o números para entender qué hace el robot y cambia una sola cosa cada vez.", "Canvia blocs a l'atzar fins que funciona.|Cambia bloques al azar hasta que funciona."],
        ["Millora|Mejora", "Fa una versió 2 de la missió i del programa, i el prova en situacions diferents.|Hace una versión 2 de la misión y del programa, y lo prueba en situaciones diferentes.", "Deixa la primera versió que funciona una vegada.|Deja la primera versión que funciona una vez."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir els reptes de la sessió i continuar la versió 2 de la vostra missió. Expliqueu a algú de casa el cicle de l'enginyer/a amb un exemple de la vida diària: una recepta que surt millor cada vegada, un avió de paper…|En casa, con el móvil, podéis repetir los retos de la sesión y continuar la versión 2 de vuestra misión. Explicad a alguien de casa el ciclo del ingeniero/a con un ejemplo de la vida diaria: una receta que sale mejor cada vez, un avión de papel…",
    slides: [
      { id: 's1', k: 'portada', t: "Programa i prova|Programa y prueba", x: "Avui la teva missió cobra vida al banc de proves.|Hoy tu misión cobra vida en el banco de pruebas.",
        nota: "Recorda que els errors són part de la feina: avui comptarem bugs trobats, no programes perfectes.|Recuerda que los errores son parte del trabajo: hoy contaremos bugs encontrados, no programas perfectos." },
      { id: 's2', k: 'repas', t: "Què té una bona missió?|¿Qué tiene una buena misión?", punts: ["Un objectiu clar|Un objetivo claro", "Obstacles que fan pensar|Obstáculos que hacen pensar", "Un sensor necessari|Un sensor necesario", "Comprovacions|Comprobaciones"],
        nota: "Demana a dos o tres alumnes que expliquin la seva missió en una frase.|Pide a dos o tres alumnos que expliquen su misión en una frase." },
      { id: 's3', k: 'anim', t: "El cicle de l'enginyer/a|El ciclo del ingeniero/a", anim: 'k8cycle', x: "Planifica, programa, prova i millora… i torna-hi.|Planifica, programa, prueba y mejora… y otra vez.",
        nota: "Posa exemples fora de la robòtica: un avió de paper, una recepta. A cada volta surt una versió millor.|Pon ejemplos fuera de la robótica: un avión de papel, una receta. En cada vuelta sale una versión mejor." },
      { id: 's4', k: 'robo', t: "Dos trams|Dos tramos", x: "Tram 1: seguir la cinta. Tram 2: parar davant la caixa.|Tramo 1: seguir la cinta. Tramo 2: parar delante de la caja.",
        robo: { w: { w: 120, h: 80, bot: [15, 65, 90], lines: [{ p: [[15, 65], [45, 65], [55, 55], [55, 35], [65, 25], [115, 25]] }], walls: [[90.5, 20.5, 9, 9]] }, prog: 'forever{ if:dist<10{ stop:all } else{ if:L=1&&R=0{ run:L,fwd,40 run:R,fwd,140 } else{ if:R=1&&L=0{ run:L,fwd,140 run:R,fwd,40 } else{ run:all,fwd,120 } } } }' },
        nota: "Assenyala on és cada tram dins del programa: la parada és el «si» de fora; el seguidor, dins del «si no».|Señala dónde está cada tramo dentro del programa: la parada es el «si» de fuera; el seguidor, dentro del «si no»." },
      { id: 's5', k: 'anim', t: "Llums que expliquen|Luces que explican", anim: 'k8debug', x: "La pantalla mostra la distància i els llums diuen quina branca s'està fent.|La pantalla muestra la distancia y las luces dicen qué rama se está haciendo.",
        nota: "Explica que un llum en cada branca del «si» és com preguntar al robot «què estàs pensant?».|Explica que una luz en cada rama del «si» es como preguntar al robot «¿qué estás pensando?»." },
      { id: 's6', k: 'robo', t: "Llums de depuració|Luces de depuración", x: "Verd: endavant. Vermell: atura't.|Verde: adelante. Rojo: párate.",
        robo: { w: { w: 120, h: 60, bot: [15, 30, 90], walls: [[90.5, 10.5, 9, 39]] }, prog: 'forever{ if:dist<10{ stop:all car:all,red } else{ run:all,fwd,150 car:all,green } }' },
        nota: "Pregunta: si els llums es posessin vermells però el robot continués, on seria el bug? (Als motors, no a la condició.) És el pas «Investiga» de l'app.|Pregunta: si las luces se pusieran rojas pero el robot siguiera, ¿dónde estaría el bug? (En los motores, no en la condición.) Es el paso «Investiga» de la app." },
      { id: 's7', k: 'robo', t: "Cantonades de 90°|Esquinas de 90°", x: "A la cantonada, la roda de dins va enrere: el robot gira sobre si mateix.|En la esquina, la rueda de dentro va hacia atrás: el robot gira sobre sí mismo.",
        robo: { w: { w: 120, h: 80, bot: [15, 65, 90], lines: [{ p: [[15, 65], [55, 65], [55, 25], [105, 25], [105, 65]] }] }, prog: 'forever{ if:L=1&&R=0{ run:L,back,100 run:R,fwd,140 } else{ if:R=1&&L=0{ run:L,fwd,140 run:R,back,100 } else{ run:all,fwd,120 } } }' },
        tip: "Abans d'executar: se sortirà al primer revolt?|Antes de ejecutar: ¿se saldrá en la primera curva?",
        nota: "L'editor fa la cinta de casella en casella, amb cantonades de 90°. Amb el seguidor en arc de la unitat 4, el robot se'n surt; amb la roda de dins enrere, no.|El editor hace la cinta de casilla en casilla, con esquinas de 90°. Con el seguidor en arco de la unidad 4, el robot se sale; con la rueda de dentro hacia atrás, no." },
      { id: 's8', k: 'robo', t: "Una prova no és prou|Una prueba no es suficiente", x: "Algú ha mogut la caixa: el programa de temps fixos hi xoca.|Alguien ha movido la caja: el programa de tiempos fijos choca.",
        robo: { w: { w: 120, h: 60, bot: [15, 30, 90], walls: [[60.5, 10.5, 9, 39]], time: 6 }, prog: 'start{ run:all,fwd,150 wait:4000 stop:all }' },
        nota: "Lliga-ho amb les pistes alternatives dels reptes: el mateix programa ha de funcionar en situacions diferents.|Relaciónalo con las pistas alternativas de los retos: el mismo programa tiene que funcionar en situaciones diferentes." },
      { id: 's9', k: 'activitat', t: "Depuradors de paper|Depuradores de papel", timer: 10, punts: ["Un fa de robot amb el dit; l'altre, de depurador/a.|Uno hace de robot con el dedo; el otro, de depurador/a.", "On falla? Quin bloc cal canviar?|¿Dónde falla? ¿Qué bloque hay que cambiar?", "Canvieu els papers a cada exercici.|Cambiad los papeles en cada ejercicio.", "Al final: escriu els trams de la teva missió.|Al final: escribe los tramos de tu misión."],
        nota: "Les solucions són al solucionari de la fitxa. No les donis: pregunta què fa el robot just abans de fallar.|Las soluciones están en el solucionario de la ficha. No las des: pregunta qué hace el robot justo antes de fallar." },
      { id: 's10', k: 'activitat', t: "La versió 1 de la teva missió|La versión 1 de tu misión", timer: 12, punts: ["Revisa la missió i desa-la.|Revisa la misión y guárdala.", "Programa el primer tram i prova'l.|Programa el primer tramo y pruébalo.", "Afegeix els altres trams d'un en un.|Añade los otros tramos de uno en uno.", "Llums de depuració si alguna cosa falla.|Luces de depuración si algo falla."],
        nota: "Passa per les taules amb la pregunta clau: en quin tram ets? Funciona el tram anterior?|Pasa por las mesas con la pregunta clave: ¿en qué tramo estás? ¿Funciona el tramo anterior?" },
      { id: 's11', k: 'repte', t: "Reptes del banc de proves|Retos del banco de pruebas", timer: 8, punts: ["1. Les cantonades de 90°|1. Las esquinas de 90°", "2. Llums de depuració (3 pistes)|2. Luces de depuración (3 pistas)", "3. A trams (3 pistes)|3. Por tramos (3 pistas)"],
        nota: "Qui acabi pot aplicar el seguidor de cantonades a la seva pròpia missió.|Quien termine puede aplicar el seguidor de esquinas a su propia misión." },
      { id: 's12', k: 'activitat', t: "Llums i números al robot real|Luces y números en el robot real", timer: 10, punts: ["Programa 1: la pantalla mostra la distància.|Programa 1: la pantalla muestra la distancia.", "Caixa a 10, 20 i 30 cm: què diu la pantalla?|Caja a 10, 20 y 30 cm: ¿qué dice la pantalla?", "Programa 2: verd endavant, vermell atura't.|Programa 2: verde adelante, rojo párate.", "Apunteu les diferències amb el metre.|Apuntad las diferencias con el metro."],
        nota: "Els dos programes són a l'imprimible «Codi: llums i números al robot real». Amb el programa 1 el robot no es mou: el pilot el pot aguantar a terra. Els números de més d'una xifra passen per la pantalla, com al simulador.|Los dos programas están en el imprimible «Código: luces y números en el robot real». Con el programa 1 el robot no se mueve: el piloto lo puede aguantar en el suelo. Los números de más de una cifra pasan por la pantalla, como en el simulador." },
      { id: 's13', k: 'concepte', t: "Depurar al robot real|Depurar en el robot real", pic: 'img/ic/magnifier.webp', punts: ["Mostra la distància a la pantalla per saber què veu.|Muestra la distancia en la pantalla para saber qué ve.", "Un color de llum per a cada branca del «si».|Un color de luz para cada rama del «si».", "Un sol canvi per prova, i apunta'l.|Un solo cambio por prueba, y apúntalo.", "Cable fora i robot a terra a cada prova.|Cable fuera y robot en el suelo en cada prueba."],
        nota: "Remarca que aquestes tècniques serveixen exactament igual al simulador i al robot real.|Remarca que estas técnicas sirven exactamente igual en el simulador y en el robot real." },
      { id: 's14', k: 'activitat', t: "Crea: la versió 2|Crea: la versión 2", timer: 5, punts: ["Millora la missió: un revolt, una caixa, una llauna…|Mejora la misión: una curva, una caja, una lata…", "Programa la versió 2.|Programa la versión 2.", "Comprova que continua tenint solució.|Comprueba que sigue teniendo solución."],
        nota: "Si no hi ha temps per acabar-la, la versió 2 es pot fer a l'inici de la sessió que ve o a casa.|Si no hay tiempo para terminarla, la versión 2 se puede hacer al principio de la próxima sesión o en casa." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Planifica, programa, prova i millora.|Planifica, programa, prueba y mejora.", "Les missions llargues, a trams.|Las misiones largas, por tramos.", "Els llums i la pantalla ajuden a depurar.|Las luces y la pantalla ayudan a depurar."],
        nota: "Pregunta quants bugs ha trobat cada alumne/a avui i celebra els que més n'han trobat.|Pregunta cuántos bugs ha encontrado cada alumno/a hoy y celebra a los que más han encontrado." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Els quatre passos del cicle de l'enginyer/a.|Los cuatro pasos del ciclo del ingeniero/a.", "Com t'ajuden els llums de depuració?|¿Cómo te ayudan las luces de depuración?"],
        nota: "Anota qui encara no té la versió 1 funcionant: comença per ells la sessió que ve.|Anota quién todavía no tiene la versión 1 funcionando: empieza por ellos la próxima sesión." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: depuradors de paper|Ficha: depuradores de papel", k: 'fitxa',
        intro: "Un/a de vosaltres fa de robot i mou el dit per la pista llegint el programa. L'altre/a fa de depurador/a. Cada quadre de la pista fa 10 cm.|Uno/a de vosotros hace de robot y mueve el dedo por la pista leyendo el programa. El otro/a hace de depurador/a. Cada cuadro de la pista mide 10 cm.",
        items: [
          { q: "Aquest robot hauria de parar davant la caixa, però hi xoca. Quin bloc està malament?|Este robot debería pararse delante de la caja, pero choca. ¿Qué bloque está mal?", w: { w: 120, h: 60, bot: [15, 30, 90], walls: [[80.5, 10.5, 9, 39]] }, rprog: 'forever{ if:dist>10{ stop:all } else{ run:all,fwd,150 } }',
            sol: "La condició està al revés: ha de ser «distància &lt; 10». Ara el robot s'atura quan és lluny i avança quan és a prop.|La condición está al revés: tiene que ser «distancia &lt; 10». Ahora el robot se para cuando está lejos y avanza cuando está cerca." },
          { q: "Hauria d'arribar a la meta, girar a l'esquerra i entrar a la zona de dalt. Gira cap a l'altre costat. Per què?|Debería llegar a la meta, girar a la izquierda y entrar en la zona de arriba. Gira hacia el otro lado. ¿Por qué?", w: { w: 120, h: 80, bot: [15, 65, 90], zones: [{ id: 'm', r: [50, 0, 20, 20], col: 'green', label: 'META|META' }] }, rprog: 'start{ run:all,fwd,150 wait:2800 stop:all run:L,fwd,100 run:R,back,100 wait:590 stop:all run:all,fwd,150 wait:3300 stop:all }',
            sol: "Per girar a l'esquerra, el motor esquerre ha d'anar enrere i el dret endavant. Estan canviats.|Para girar a la izquierda, el motor izquierdo tiene que ir hacia atrás y el derecho hacia delante. Están cambiados." },
          { q: "Els llums es posen vermells davant la caixa, però el robot no para del tot i gira. Quin bloc cal canviar?|Las luces se ponen rojas delante de la caja, pero el robot no para del todo y gira. ¿Qué bloque hay que cambiar?", rprog: 'forever{ if:dist<10{ car:all,red stop:L } else{ car:all,green run:all,fwd,150 } }',
            sol: "«Atura el motor esquerre» només para una roda. Ha de ser «atura els dos».|«Para el motor izquierdo» solo para una rueda. Tiene que ser «para los dos»." },
          { q: "La teva missió: escriu-ne els trams en ordre (Tram 1…, Tram 2…, Tram 3…) i quin sensor fa servir cada un.|Tu misión: escribe sus tramos en orden (Tramo 1…, Tramo 2…, Tramo 3…) y qué sensor usa cada uno.", big: true,
            sol: "Resposta oberta. Exemple: tram 1, seguir la cinta (sensors de línia); tram 2, parar davant la caixa (ultrasons).|Respuesta abierta. Ejemplo: tramo 1, seguir la cinta (sensores de línea); tramo 2, parar delante de la caja (ultrasonidos)." }
        ] },
      { id: 'p2', t: "Codi: llums i números al robot real|Código: luces y números en el robot real", k: 'codi',
        intro: "A makecode.microbit.org: nou projecte → Extensions → «maqueen» → JavaScript → enganxa el codi → Descarrega. Amb el primer programa el robot no es mou: aguanteu-lo a terra i moveu la caixa.|En makecode.microbit.org: nuevo proyecto → Extensiones → «maqueen» → JavaScript → pega el código → Descarga. Con el primer programa el robot no se mueve: aguantadlo en el suelo y moved la caja.",
        items: [
          { t: "1. Mostra la distància|1. Muestra la distancia", prog: 'forever{ num:dist }' },
          { t: "2. Llums de depuració|2. Luces de depuración", prog: 'forever{ if:dist<10{ stop:all car:all,red } else{ run:all,fwd,150 car:all,green } }' }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Del simulador al robot de veritat ---------- */
  'k8-3': {
    obj: [
      "L'alumne/a passa un programa del simulador a MakeCode amb el botó &lt;/&gt; i el descarrega a la micro:bit del Maqueen.|El alumno/a pasa un programa del simulador a MakeCode con el botón &lt;/&gt; y lo descarga en la micro:bit del Maqueen.",
      "L'alumne/a relaciona els blocs amb les línies de JavaScript de l'extensió «Maqueen».|El alumno/a relaciona los bloques con las líneas de JavaScript de la extensión «Maqueen».",
      "L'alumne/a calibra la velocitat i el gir del seu robot: mesura, calcula i ajusta.|El alumno/a calibra la velocidad y el giro de su robot: mide, calcula y ajusta.",
      "L'alumne/a explica per què els programes amb sensors són més fiables al món real que els de temps fixos.|El alumno/a explica por qué los programas con sensores son más fiables en el mundo real que los de tiempos fijos."
    ],
    comp: [
      "Competència digital (CD5): transferir un programa entre entorns i llenguatges|Competencia digital (CD5): transferir un programa entre entornos y lenguajes",
      "Competència STEM (STEM2): mesurar, calcular i ajustar un sistema real (calibratge)|Competencia STEM (STEM2): medir, calcular y ajustar un sistema real (calibración)",
      "Matemàtiques: velocitat = distància ÷ temps; proporcionalitat|Matemáticas: velocidad = distancia ÷ tiempo; proporcionalidad",
      "Ciències i tecnologia: diferències entre un model (simulador) i la realitat|Ciencias y tecnología: diferencias entre un modelo (simulador) y la realidad"
    ],
    vocab: [
      ["MakeCode|MakeCode", "L'editor de programes de la micro:bit, amb blocs i JavaScript.|El editor de programas de la micro:bit, con bloques y JavaScript."],
      ["JavaScript|JavaScript", "Un llenguatge de programació escrit amb text; fa el mateix que els blocs.|Un lenguaje de programación escrito con texto; hace lo mismo que los bloques."],
      ["Fitxer .hex|Archivo .hex", "El programa preparat per a la micro:bit; es copia a la unitat MICROBIT.|El programa preparado para la micro:bit; se copia en la unidad MICROBIT."],
      ["Calibrar|Calibrar", "Mesurar el que fa el robot de veritat i ajustar els números del programa.|Medir lo que hace el robot de verdad y ajustar los números del programa."],
      ["Simulador|Simulador", "Un model a l'ordinador que es comporta com el robot real.|Un modelo en el ordenador que se comporta como el robot real."],
      ["Fiable|Fiable", "Que funciona bé moltes vegades i en situacions diferents.|Que funciona bien muchas veces y en situaciones diferentes."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Del simulador al robot de veritat» i MakeCode en una altra pestanya|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Del simulador al robot de verdad» y MakeCode en otra pestaña",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit per grup de 3-4: Maqueen Lite V5 amb micro:bit V2, cable USB i piles carregades|Un kit por grupo de 3-4: Maqueen Lite V5 con micro:bit V2, cable USB y pilas cargadas",
        "Per grup: cinta aïllant negra de 2 cm, cinta de pintor, un metre, un cronòmetre (o el del mòbil del professor/a) i una caixa de sabates|Por grupo: cinta aislante negra de 2 cm, cinta de pintor, un metro, un cronómetro (o el del móvil del profesor/a) y una caja de zapatos"
      ],
      imprimir: ["Pista: la pista de l'aula (una per grup)|Pista: la pista del aula (una por grupo)", "Codi: calibra el teu Maqueen|Código: calibra tu Maqueen"],
      prep: [
        "Reservar a terra, per a cada grup, un espai d'uns 130 × 90 cm llis (no catifa) per construir la pista.|Reservar en el suelo, para cada grupo, un espacio de unos 130 × 90 cm liso (no alfombra) para construir la pista.",
        "Provar abans de classe el camí complet: botó &lt;/&gt; → MakeCode → Descarrega → micro:bit, en un dels ordinadors de l'aula.|Probar antes de clase el camino completo: botón &lt;/&gt; → MakeCode → Descarga → micro:bit, en uno de los ordenadores del aula.",
        "Comprovar les piles: per a la calibració, que totes estiguin carregades de manera semblant.|Comprobar las pilas: para la calibración, que todas estén cargadas de manera parecida.",
        "Imprimir la pista i el codi per grup.|Imprimir la pista y el código por grupo."
      ]
    },
    plan: [
      { min: 4, t: "Els robots de veritat|Los robots de verdad", fase: 'inici',
        fa: "Mostra els kits i planteja la pregunta de la diapositiva 2. Recull hipòtesis i apunta-les a la pissarra: les revisareu al final de l'activitat amb el robot.|Muestra los kits y plantea la pregunta de la diapositiva 2. Recoge hipótesis y apúntalas en la pizarra: las revisaréis al final de la actividad con el robot.",
        diu: ["El robot de veritat farà exactament el mateix que el del simulador?|¿El robot de verdad hará exactamente lo mismo que el del simulador?", "Què pot ser diferent al món real?|¿Qué puede ser diferente en el mundo real?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "De la pantalla al robot|De la pantalla al robot", fase: 'teoria',
        fa: "Ensenya el camí del programa amb l'animació i, si pots, fes-lo en directe: un repte qualsevol → &lt;/&gt; → MakeCode → «Blocs». Compara una línia de JavaScript amb el seu bloc. Explica les diferències del món real, el calibratge amb números (52 cm en 4 s) i acaba amb la demo del robot que para a la cinta.|Enseña el camino del programa con la animación y, si puedes, hazlo en directo: un reto cualquiera → &lt;/&gt; → MakeCode → «Bloques». Compara una línea de JavaScript con su bloque. Explica las diferencias del mundo real, la calibración con números (52 cm en 4 s) y termina con la demo del robot que para en la cinta.",
        diu: ["Quin bloc és <code>motorStop</code>?|¿Qué bloque es <code>motorStop</code>?", "Si el robot fa 52 cm en 4 segons, quants en fa en un segon?|Si el robot hace 52 cm en 4 segundos, ¿cuántos hace en un segundo?", "Aquest robot sap quants segons ha d'anar?|¿Este robot sabe cuántos segundos tiene que ir?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Construïm la pista de l'aula|Construimos la pista del aula", fase: 'desconnectat',
        fa: "Grups de 3-4 amb l'imprimible de la pista. Dibuix a escala: cada quadre són 10 cm. Marquen els quatre cantons del tapet (120 × 80 cm) amb cinta de pintor i, mesurant amb el metre, enganxen la cinta negra seguint el dibuix (els revolts, amb trossos curts). Posen la caixa al lloc marcat i la sortida. Un/a membre del grup revisa les mides abans de donar-la per bona.|Grupos de 3-4 con el imprimible de la pista. Dibujo a escala: cada cuadro son 10 cm. Marcan las cuatro esquinas del tapete (120 × 80 cm) con cinta de pintor y, midiendo con el metro, pegan la cinta negra siguiendo el dibujo (las curvas, con trozos cortos). Ponen la caja en el sitio marcado y la salida. Un/a miembro del grupo revisa las medidas antes de darla por buena.",
        diu: ["Si al dibuix són 6 quadres, quants centímetres són a terra?|Si en el dibujo son 6 cuadros, ¿cuántos centímetros son en el suelo?", "Els revolts suaus són més fàcils de seguir que les cantonades: feu-los amb trossos curts.|Las curvas suaves son más fáciles de seguir que las esquinas: hacedlas con trozos cortos."],
        slides: ['s8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3-4 per kit|Grupos de 3-4 por kit" },
      { min: 10, t: "A l'ordinador: MakeCode i calibrar|En el ordenador: MakeCode y calibrar", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança fins a la pausa activa: targetes, llegir JavaScript, ordenar els passos, el càlcul del calibratge, «On acabarà?», calibrar el gir i el bloc que depèn de les piles. Al pas «Calibra les teves passes», que toquin «Ho hem fet!»: és per a casa.|Cada alumno/a abre la sesión y avanza hasta la pausa activa: tarjetas, leer JavaScript, ordenar los pasos, el cálculo de la calibración, «¿Dónde terminará?», calibrar el giro y el bloque que depende de las pilas. En el paso «Calibra tus pasos», que toquen «¡Lo hemos hecho!»: es para casa.",
        diu: ["Toca el botó &lt;/&gt; de qualsevol repte: reconeixes els blocs?|Toca el botón &lt;/&gt; de cualquier reto: ¿reconoces los bloques?", "Si el gir es queda curt, l'espera ha de ser més llarga o més curta?|Si el giro se queda corto, ¿la espera tiene que ser más larga o más corta?"],
        slides: ['s9'], app: "De «La missió» fins a «Investiga».|De «La misión» hasta «Investiga».", org: "Individual|Individual" },
      { min: 14, t: "Calibra el teu Maqueen|Calibra tu Maqueen", fase: 'robot',
        fa: "Grups de 3-4 a la seva pista, amb papers (programador/a, pilot, mesurador/a, secretari/ària). <b>1)</b> Descarreguen «Endavant 4 segons»: mesuren la distància i calculen els cm per segon del seu robot. <b>2)</b> Descarreguen el gir de 590 ms damunt d'una creu de cinta: gira massa o massa poc? Ajusten l'espera de 20 en 20 ms fins que quedi a 90°. <b>3)</b> Descarreguen «La pista de l'aula» (seguir la cinta i parar a la caixa) i el proven dues vegades, amb la caixa a les dues posicions. Apunten tots els números a l'imprimible.|Grupos de 3-4 en su pista, con papeles (programador/a, piloto, medidor/a, secretario/a). <b>1)</b> Descargan «Adelante 4 segundos»: miden la distancia y calculan los cm por segundo de su robot. <b>2)</b> Descargan el giro de 590 ms encima de una cruz de cinta: ¿gira demasiado o demasiado poco? Ajustan la espera de 20 en 20 ms hasta que quede a 90°. <b>3)</b> Descargan «La pista del aula» (seguir la cinta y parar en la caja) y lo prueban dos veces, con la caja en las dos posiciones. Apuntan todos los números en el imprimible.",
        diu: ["Quants cm per segon fa el vostre robot? I el del grup del costat?|¿Cuántos cm por segundo hace vuestro robot? ¿Y el del grupo de al lado?", "Per què el programa de la cinta no s'ha hagut de calibrar?|¿Por qué el programa de la cinta no se ha tenido que calibrar?", "Torneu a les hipòtesis de la pissarra: qui tenia raó?|Volved a las hipótesis de la pizarra: ¿quién tenía razón?"],
        slides: ['s10', 's11', 's12'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers|Grupos de 3-4 por kit con papeles" },
      { min: 7, t: "Reptes a prova de piles|Retos a prueba de pilas", fase: 'ordinador',
        fa: "Pausa activa junts i, a l'ordinador, els dos reptes: parar a la cinta a les 3 pistes i la pista de l'aula al simulador. Fes-los notar que és el mateix programa que acaben de provar al robot.|Pausa activa juntos y, en el ordenador, los dos retos: parar en la cinta en las 3 pistas y la pista del aula en el simulador. Hazles notar que es el mismo programa que acaban de probar en el robot.",
        diu: ["Per què «repeteix fins que» funciona a les tres pistes i «espera» no?|¿Por qué «repite hasta que» funciona en las tres pistas y «espera» no?"],
        slides: ['s13'], app: "«Pausa activa» i els reptes «A prova de piles» i «La pista de l'aula».|«Pausa activa» y los retos «A prueba de pilas» y «La pista del aula».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 4, t: "Crea: la versió per al robot real|Crea: la versión para el robot real", fase: 'crea',
        fa: "Cada alumne/a adapta la seva missió perquè es pugui construir a l'aula i en comença la versió per al robot real, amb almenys un sensor. Si no hi ha temps, la poden acabar a casa: la sessió que ve la portaran preparada.|Cada alumno/a adapta su misión para que se pueda construir en el aula y empieza la versión para el robot real, con al menos un sensor. Si no hay tiempo, la pueden terminar en casa: la próxima sesión la traerán preparada.",
        diu: ["Quina espera del teu programa podries canviar per un sensor?|¿Qué espera de tu programa podrías cambiar por un sensor?"],
        slides: ['s14'], app: "Pas «Crea»: adapta la missió i la versió per al robot real.|Paso «Crea»: adapta la misión y la versión para el robot real.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees i les preguntes finals de l'app. Recolliu els kits i deixeu enganxades les pistes si és possible: les farem servir a la Mostra.|Repasa las tres ideas y las preguntas finales de la app. Recoged los kits y dejad pegadas las pistas si es posible: las usaremos en la Muestra.",
        diu: ["Qui em diu els tres passos del calibratge?|¿Quién me dice los tres pasos de la calibración?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["MakeCode no reconeix les ordres (surten en vermell) en enganxar el codi.|MakeCode no reconoce las órdenes (salen en rojo) al pegar el código.",
        "Falta afegir l'extensió «maqueen» (Extensions → busca «maqueen»). Després, torneu a enganxar el codi.|Falta añadir la extensión «maqueen» (Extensiones → busca «maqueen»). Después, volved a pegar el código."],
      ["El robot no fa res després de descarregar.|El robot no hace nada después de descargar.",
        "Comproveu que l'interruptor del Maqueen està encès, les piles carregades i que el fitxer .hex s'ha copiat a la unitat MICROBIT (el llum de la micro:bit parpelleja mentre es copia).|Comprobad que el interruptor del Maqueen está encendido, las pilas cargadas y que el archivo .hex se ha copiado en la unidad MICROBIT (la luz de la micro:bit parpadea mientras se copia)."],
      ["Divideix al revés per calcular la velocitat (4 ÷ 52).|Divide al revés para calcular la velocidad (4 ÷ 52).",
        "Pregunta: quants centímetres fa en un segon? Si en 4 segons en fa 52, en un segon en farà menys de 52, però molts més que 1.|Pregunta: ¿cuántos centímetros hace en un segundo? Si en 4 segundos hace 52, en un segundo hará menos de 52, pero muchos más que 1."],
      ["El robot real es desvia cap a un costat quan va recte.|El robot real se desvía hacia un lado cuando va recto.",
        "És normal: els dos motors no són idèntics. Que provin de baixar una mica la velocitat de la roda que va més ràpida (p. ex. 150 i 142) o, millor, que facin servir la cinta.|Es normal: los dos motores no son idénticos. Que prueben a bajar un poco la velocidad de la rueda que va más rápida (p. ej. 150 y 142) o, mejor, que usen la cinta."],
      ["Pensa que si el robot real no fa el mateix que el simulador és que s'ha equivocat.|Piensa que si el robot real no hace lo mismo que el simulador es que se ha equivocado.",
        "Explica que el simulador és un model: s'hi assembla molt, però el món real té piles, terra i motors diferents. Calibrar és la feina normal dels enginyers.|Explica que el simulador es un modelo: se parece mucho, pero el mundo real tiene pilas, suelo y motores diferentes. Calibrar es el trabajo normal de los ingenieros."]
    ],
    diff: {
      mes: "Calibrar també la velocitat 100 i comparar: és la meitat de ràpid que a 200? Fer una taula velocitat → cm/s i dibuixar-ne la gràfica. Provar la seva pròpia missió al robot real.|Calibrar también la velocidad 100 y comparar: ¿es la mitad de rápido que a 200? Hacer una tabla velocidad → cm/s y dibujar su gráfica. Probar su propia misión en el robot real.",
      menys: "Fer només el primer pas del calibratge (endavant 4 segons i mesurar) amb la calculadora. Al simulador, fer el repte «A prova de piles» amb la pista de «repeteix fins que».|Hacer solo el primer paso de la calibración (adelante 4 segundos y medir) con la calculadora. En el simulador, hacer el reto «A prueba de pilas» con la pista de «repite hasta que»."
    },
    aval: {
      ticket: ["Explica com es passa un programa del simulador al Maqueen.|Explica cómo se pasa un programa del simulador al Maqueen.", "Per què un programa amb sensors és més fiable al robot real?|¿Por qué un programa con sensores es más fiable en el robot real?"],
      rubric: [
        ["Del simulador a MakeCode|Del simulador a MakeCode", "Passa el programa amb &lt;/&gt;, afegeix l'extensió i el descarrega sense ajuda.|Pasa el programa con &lt;/&gt;, añade la extensión y lo descarga sin ayuda.", "Ho fa seguint els passos amb ajuda del grup o del professor/a.|Lo hace siguiendo los pasos con ayuda del grupo o del profesor/a."],
        ["Calibratge|Calibración", "Mesura, calcula la velocitat (cm/s) i ajusta l'espera o el gir amb sentit.|Mide, calcula la velocidad (cm/s) y ajusta la espera o el giro con sentido.", "Mesura, però canvia els números a l'atzar.|Mide, pero cambia los números al azar."],
        ["Programes fiables|Programas fiables", "Canvia esperes llargues per sensors i explica per què.|Cambia esperas largas por sensores y explica por qué.", "Fa servir sobretot temps fixos.|Usa sobre todo tiempos fijos."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «Calibra les teves passes»: mesureu 10 passes, calculeu quant fa una passa i feu servir el número per arribar a un objecte. Acabeu, si cal, la versió per al robot real de la vostra missió.|En casa, con el móvil, podéis repetir la sesión y hacer «Calibra tus pasos»: medid 10 pasos, calculad cuánto mide un paso y usad el número para llegar a un objeto. Terminad, si hace falta, la versión para el robot real de vuestra misión.",
    slides: [
      { id: 's1', k: 'portada', t: "Del simulador al robot de veritat|Del simulador al robot de verdad", x: "Avui el teu programa surt de la pantalla i fa moure un robot de veritat.|Hoy tu programa sale de la pantalla y hace mover un robot de verdad.",
        nota: "Ensenya un Maqueen a la mà mentre presentes la sessió.|Enseña un Maqueen en la mano mientras presentas la sesión." },
      { id: 's2', k: 'pregunta', t: "Farà el mateix?|¿Hará lo mismo?", punts: ["El simulador diu: 62 cm en 4 segons.|El simulador dice: 62 cm en 4 segundos.", "El robot de veritat en farà 62? Més? Menys?|¿El robot de verdad hará 62? ¿Más? ¿Menos?", "Què hi pot influir?|¿Qué puede influir?"],
        nota: "Apunta les hipòtesis (piles, terra, rodes…) a la pissarra i torna-hi al final de l'activitat amb el robot.|Apunta las hipótesis (pilas, suelo, ruedas…) en la pizarra y vuelve a ellas al final de la actividad con el robot." },
      { id: 's3', k: 'anim', t: "El camí del programa|El camino del programa", anim: 'k8export', x: "&lt;/&gt; → MakeCode (extensió «maqueen») → Descarrega → micro:bit.|&lt;/&gt; → MakeCode (extensión «maqueen») → Descarga → micro:bit.",
        nota: "Si pots, fes-ho en directe al projector amb un repte de la sessió anterior i ensenya que, en tornar a «Blocs», MakeCode mostra els mateixos blocs.|Si puedes, hazlo en directo en el proyector con un reto de la sesión anterior y enseña que, al volver a «Bloques», MakeCode muestra los mismos bloques." },
      { id: 's4', k: 'concepte', t: "Blocs i JavaScript|Bloques y JavaScript", pic: 'img/ic/robot.webp', x: "Cada bloc té la seva línia de JavaScript.|Cada bloque tiene su línea de JavaScript.",
        code: "basic.forever(function () {\n    if (Maqueen_V5.Ultrasonic() < 10) {\n        Maqueen_V5.motorStop(Maqueen_V5.Motors.All)\n    } else {\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 150)\n    }\n})",
        nota: "Llegiu el codi en veu alta línia a línia i que la classe digui el bloc: «per sempre» → basic.forever; «si distància < 10» → if (Maqueen_V5.Ultrasonic() < 10); «atura els dos» → motorStop(…All); «motor els dos endavant a 150» → motorRun(…All, …CW, 150). CW vol dir endavant (a MakeCode en anglès, «Forward»); CCW, enrere.|Leed el código en voz alta línea a línea y que la clase diga el bloque: «para siempre» → basic.forever; «si distancia < 10» → if (Maqueen_V5.Ultrasonic() < 10); «para los dos» → motorStop(…All); «motor los dos adelante a 150» → motorRun(…All, …CW, 150). CW quiere decir adelante (en MakeCode en castellano, «Sentido horario»); CCW, atrás." },
      { id: 's5', k: 'anim', t: "El món real no és perfecte|El mundo real no es perfecto", anim: 'k8drift', x: "Piles, terra i motors canvien una mica el que fa el robot.|Pilas, suelo y motores cambian un poco lo que hace el robot.",
        nota: "Compara-ho amb la vida diària: una bicicleta amb les rodes desinflades va més lenta encara que pedalis igual.|Compáralo con la vida diaria: una bicicleta con las ruedas desinfladas va más lenta aunque pedalees igual." },
      { id: 's6', k: 'anim', t: "Calibrar|Calibrar", anim: 'k8calib', x: "Mesura → calcula → ajusta.|Mide → calcula → ajusta.",
        nota: "Fes el càlcul a la pissarra pas a pas: velocitat = distància ÷ temps; temps = distància ÷ velocitat.|Haz el cálculo en la pizarra paso a paso: velocidad = distancia ÷ tiempo; tiempo = distancia ÷ velocidad." },
      { id: 's7', k: 'robo', t: "Temps o sensor?|¿Tiempo o sensor?", x: "Aquest robot avança fins que el sensor del mig troba la cinta.|Este robot avanza hasta que el sensor del medio encuentra la cinta.",
        robo: { w: { w: 120, h: 60, bot: [15, 30, 90], lines: [{ p: [[80, 8], [80, 52]] }], zones: [{ id: 'm', r: [62, 15, 24, 30], col: 'yellow', label: 'META|META' }] }, prog: 'forever{ if:M=1{ stop:all car:all,green } else{ run:all,fwd,120 } }' },
        nota: "Pregunta: si les piles estiguessin gastades, aquest robot s'aturaria igualment a la cinta? I un robot amb «espera 5000 ms»?|Pregunta: si las pilas estuvieran gastadas, ¿este robot se pararía igualmente en la cinta? ¿Y un robot con «espera 5000 ms»?" },
      { id: 's8', k: 'activitat', t: "Construïm la pista de l'aula|Construimos la pista del aula", timer: 10, punts: ["Marqueu el tapet: 120 × 80 cm.|Marcad el tapete: 120 × 80 cm.", "Cinta negra seguint el dibuix (1 quadre = 10 cm).|Cinta negra siguiendo el dibujo (1 cuadro = 10 cm).", "Revolts suaus, amb trossos curts.|Curvas suaves, con trozos cortos.", "Caixa i sortida al seu lloc.|Caja y salida en su sitio."],
        nota: "La cinta ha de ser ben enganxada i sense arrugues: els sensors de línia són a pocs mil·límetres del terra.|La cinta tiene que estar bien pegada y sin arrugas: los sensores de línea están a pocos milímetros del suelo." },
      { id: 's9', k: 'activitat', t: "A l'ordinador: MakeCode i calibrar|En el ordenador: MakeCode y calibrar", timer: 10, punts: ["Llegeix el JavaScript i ordena els passos.|Lee el JavaScript y ordena los pasos.", "Calcula l'espera per a 78 cm.|Calcula la espera para 78 cm.", "Calibra el gir al simulador.|Calibra el giro en el simulador.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas «Calibra les teves passes», que toquin «Ho hem fet!»: és per a casa.|En el paso «Calibra tus pasos», que toquen «¡Lo hemos hecho!»: es para casa." },
      { id: 's10', k: 'activitat', t: "Calibra el teu Maqueen|Calibra tu Maqueen", timer: 14, punts: ["1. Endavant 4 segons: mesureu i calculeu els cm/s.|1. Adelante 4 segundos: medid y calculad los cm/s.", "2. Gir de 590 ms: ajusteu-lo fins a 90°.|2. Giro de 590 ms: ajustadlo hasta 90°.", "3. La pista de l'aula: segueix la cinta i para a la caixa.|3. La pista del aula: sigue la cinta y para en la caja.", "Apunteu tots els números.|Apuntad todos los números."],
        nota: "Els tres programes són a l'imprimible «Codi: calibra el teu Maqueen». Feu una taula a la pissarra amb els cm/s de cada grup: veureu que cada robot és una mica diferent. Al simulador, a 150, fa uns 15,6 cm/s (uns 62 cm en 4 s).|Los tres programas están en el imprimible «Código: calibra tu Maqueen». Haced una tabla en la pizarra con los cm/s de cada grupo: veréis que cada robot es un poco diferente. En el simulador, a 150, hace unos 15,6 cm/s (unos 62 cm en 4 s)." },
      { id: 's11', k: 'concepte', t: "Full de calibratge|Hoja de calibración", pic: 'img/ment/cal.webp', punts: ["Velocitat = distància ÷ temps (cm/s)|Velocidad = distancia ÷ tiempo (cm/s)", "Temps = distància ÷ velocitat (s × 1000 = ms)|Tiempo = distancia ÷ velocidad (s × 1000 = ms)", "Gir: si gira massa, menys ms; si gira poc, més ms.|Giro: si gira demasiado, menos ms; si gira poco, más ms."],
        nota: "Deixa-la projectada durant l'activitat perquè la puguin consultar.|Déjala proyectada durante la actividad para que la puedan consultar." },
      { id: 's12', k: 'concepte', t: "Seguretat amb el robot|Seguridad con el robot", pic: 'img/ic/shield.webp', punts: ["El robot sempre a terra (o en una taula amb vora).|El robot siempre en el suelo (o en una mesa con borde).", "Desconnecta el cable USB abans d'encendre'l.|Desconecta el cable USB antes de encenderlo.", "Apaga'l per agafar-lo; mans lluny de les rodes.|Apágalo para cogerlo; manos lejos de las ruedas.", "Només el pilot l'encén i l'apaga.|Solo el piloto lo enciende y lo apaga."],
        nota: "Recorda que la micro:bit i el robot es poden fer malbé si cauen d'una taula sense vora.|Recuerda que la micro:bit y el robot se pueden estropear si caen de una mesa sin borde." },
      { id: 's13', k: 'repte', t: "Reptes a prova de piles|Retos a prueba de pilas", timer: 7, punts: ["1. Para a la cinta (3 pistes)|1. Para en la cinta (3 pistas)", "2. La pista de l'aula (2 posicions de la caixa)|2. La pista del aula (2 posiciones de la caja)"],
        nota: "Fes-los notar que el repte 2 és la pista que tenen enganxada a terra.|Hazles notar que el reto 2 es la pista que tienen pegada en el suelo." },
      { id: 's14', k: 'activitat', t: "Crea: la versió per al robot real|Crea: la versión para el robot real", timer: 4, punts: ["Adapta la missió perquè es pugui construir.|Adapta la misión para que se pueda construir.", "Canvia les esperes llargues per sensors.|Cambia las esperas largas por sensores.", "Toca &lt;/&gt; i copia el codi.|Toca &lt;/&gt; y copia el código."],
        nota: "L'app no deixa desar la versió real si el programa no fa servir cap sensor: explica-ho abans perquè no es frustrin.|La app no deja guardar la versión real si el programa no usa ningún sensor: explícalo antes para que no se frustren." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["&lt;/&gt; → MakeCode → micro:bit.|&lt;/&gt; → MakeCode → micro:bit.", "El món real canvia una mica el que fa el robot.|El mundo real cambia un poco lo que hace el robot.", "Calibrar: mesura, calcula, ajusta. I millor amb sensors!|Calibrar: mide, calcula, ajusta. ¡Y mejor con sensores!"],
        nota: "Torna a les hipòtesis de la diapositiva 2: quines s'han confirmat?|Vuelve a las hipótesis de la diapositiva 2: ¿cuáles se han confirmado?" },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Com es passa un programa al Maqueen?|¿Cómo se pasa un programa al Maqueen?", "Per què els sensors fan el programa més fiable?|¿Por qué los sensores hacen el programa más fiable?"],
        nota: "Anota quins grups no han pogut acabar el calibratge: a l'inici de la sessió que ve poden fer-lo mentre els altres preparen la presentació.|Anota qué grupos no han podido terminar la calibración: al principio de la próxima sesión pueden hacerla mientras los demás preparan la presentación." }
    ],
    print: [
      { id: 'p1', t: "Pista: la pista de l'aula|Pista: la pista del aula", k: 'pista',
        intro: "Construïu la pista a terra a mida real (120 × 80 cm). La cinta negra comença a la sortida, puja en diagonal i va fins a la caixa. La caixa pot anar a 100 cm o a 90 cm de l'esquerra.|Construid la pista en el suelo a tamaño real (120 × 80 cm). La cinta negra empieza en la salida, sube en diagonal y va hasta la caja. La caja puede ir a 100 cm o a 90 cm de la izquierda.",
        w: { w: 120, h: 80, bot: [15, 60, 90], lines: [{ p: [[15, 60], [50, 60], [60, 50], [60, 30], [70, 20], [115, 20]] }], walls: [[100.5, 10.5, 9, 9]] },
        items: [
          { q: "1. Endavant 4 segons a velocitat 150: el nostre robot fa ______ cm → ______ cm/s (al simulador, uns 15,6)|1. Adelante 4 segundos a velocidad 150: nuestro robot hace ______ cm → ______ cm/s (en el simulador, unos 15,6)" },
          { q: "2. Gir de 90° a velocitat 100: amb 590 ms gira ______°. L'espera que funciona: ______ ms|2. Giro de 90° a velocidad 100: con 590 ms gira ______°. La espera que funciona: ______ ms" },
          { q: "3. La pista de l'aula: s'atura a ______ cm de la caixa (posició 1) i a ______ cm (posició 2). Ha calgut calibrar res? Per què?|3. La pista del aula: se para a ______ cm de la caja (posición 1) y a ______ cm (posición 2). ¿Ha hecho falta calibrar algo? ¿Por qué?" }
        ] },
      { id: 'p2', t: "Codi: calibra el teu Maqueen|Código: calibra tu Maqueen", k: 'codi',
        intro: "A makecode.microbit.org: nou projecte → Extensions → «maqueen» → JavaScript → enganxa el codi → Descarrega. Cable fora i robot a terra!|En makecode.microbit.org: nuevo proyecto → Extensiones → «maqueen» → JavaScript → pega el código → Descarga. ¡Cable fuera y robot en el suelo!",
        items: [
          { t: "1. Endavant 4 segons (mesureu la distància)|1. Adelante 4 segundos (medid la distancia)", prog: 'start{ run:all,fwd,150 wait:4000 stop:all }' },
          { t: "2. Gir de 90° a la dreta (ajusteu l'espera)|2. Giro de 90° a la derecha (ajustad la espera)", prog: 'start{ run:L,fwd,100 run:R,back,100 wait:590 stop:all }' },
          { t: "3. La pista de l'aula|3. La pista del aula", prog: 'forever{ if:dist<10{ stop:all icon:happy } else{ if:L=1&&R=0{ run:L,fwd,40 run:R,fwd,140 } else{ if:R=1&&L=0{ run:L,fwd,140 run:R,fwd,40 } else{ run:all,fwd,120 } } } }' }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Presentació i diploma ---------- */
  'k8-4': {
    obj: [
      "L'alumne/a presenta la seva missió amb quatre parts: la missió, com funciona, un problema resolt i la demostració.|El alumno/a presenta su misión con cuatro partes: la misión, cómo funciona, un problema resuelto y la demostración.",
      "L'alumne/a explica el funcionament del seu robot amb el cicle sent, pensa i actua.|El alumno/a explica el funcionamiento de su robot con el ciclo siente, piensa y actúa.",
      "L'alumne/a prova la missió d'un company/a i li fa un comentari amable i útil.|El alumno/a prueba la misión de un compañero/a y le hace un comentario amable y útil.",
      "L'alumne/a demostra la seva missió (o la del grup) amb el Maqueen de veritat a la Mostra de Robots.|El alumno/a demuestra su misión (o la del grupo) con el Maqueen de verdad en la Muestra de Robots."
    ],
    comp: [
      "Competència en comunicació lingüística: exposar oralment un projecte tècnic|Competencia en comunicación lingüística: exponer oralmente un proyecto técnico",
      "Competència digital (CD5): demostrar i explicar una solució tecnològica pròpia|Competencia digital (CD5): demostrar y explicar una solución tecnológica propia",
      "Competència ciutadana: donar i rebre comentaris amb respecte|Competencia ciudadana: dar y recibir comentarios con respeto",
      "Competència personal i d'aprendre a aprendre: reflexionar sobre el propi aprenentatge|Competencia personal y de aprender a aprender: reflexionar sobre el propio aprendizaje"
    ],
    vocab: [
      ["Presentació|Presentación", "Explicar un projecte al públic de manera clara i ordenada.|Explicar un proyecto al público de manera clara y ordenada."],
      ["Demostració (demo)|Demostración (demo)", "Ensenyar en directe que el projecte funciona.|Enseñar en directo que el proyecto funciona."],
      ["Provador/a|Probador/a", "Qui prova el projecte d'un altre per ajudar-lo a millorar.|Quien prueba el proyecto de otro para ayudarlo a mejorar."],
      ["Comentari constructiu|Comentario constructivo", "Una cosa que agrada i una idea per millorar, dita amb respecte.|Algo que gusta y una idea para mejorar, dicha con respeto."],
      ["Enginyer/a|Ingeniero/a", "Persona que dissenya, construeix i prova solucions tècniques.|Persona que diseña, construye y prueba soluciones técnicas."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Presentació i diploma»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Presentación y diploma»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit per grup de 3-4 i les pistes de cinta de la sessió anterior (o espai i cinta per fer-ne)|Un kit por grupo de 3-4 y las pistas de cinta de la sesión anterior (o espacio y cinta para hacerlas)",
        "Els diplomes impresos i signats; si és possible, famílies o un altre grup convidats|Los diplomas impresos y firmados; si es posible, familias u otro grupo invitados"
      ],
      imprimir: ["Fitxa: el guió de la presentació (una per alumne/a)|Ficha: el guion de la presentación (una por alumno/a)", "Diploma del curs (un per alumne/a)|Diploma del curso (uno por alumno/a)"],
      prep: [
        "Imprimir i signar els diplomes, amb el nom de cada alumne/a escrit a mà.|Imprimir y firmar los diplomas, con el nombre de cada alumno/a escrito a mano.",
        "Organitzar l'aula en estacions: una per kit, amb la pista a terra i un ordinador a prop.|Organizar el aula en estaciones: una por kit, con la pista en el suelo y un ordenador cerca.",
        "Fer les parelles de provadors (alumnes de grups diferents).|Hacer las parejas de probadores (alumnos de grupos diferentes).",
        "Carregar totes les piles.|Cargar todas las pilas."
      ]
    },
    plan: [
      { min: 5, t: "El gran dia de la Mostra|El gran día de la Muestra", fase: 'inici',
        fa: "Dona la benvinguda a la Mostra de Robots i repassa el viatge del curs amb la diapositiva 2: una unitat per línia, i que la classe digui una cosa que recordi de cada una. Explica l'ordre de la sessió: guió, provadors, Mostra i diplomes.|Da la bienvenida a la Muestra de Robots y repasa el viaje del curso con la diapositiva 2: una unidad por línea, y que la clase diga algo que recuerde de cada una. Explica el orden de la sesión: guion, probadores, Muestra y diplomas.",
        diu: ["Quina és la missió que més us va agradar del curs?|¿Cuál es la misión que más os gustó del curso?", "Avui no cal que tot surti perfecte: expliqueu com ho heu pensat.|Hoy no hace falta que todo salga perfecto: explicad cómo lo habéis pensado."],
        slides: ['s1', 's2'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 6, t: "Com es presenta un projecte|Cómo se presenta un proyecto", fase: 'teoria',
        fa: "Explica les quatre parts de la presentació amb l'animació. Executa la demo i fes-ne tu una explicació model amb «sent, pensa i actua». Acaba amb els comentaris que ajuden: posa un exemple bo i un de dolent, i que la classe els distingeixi.|Explica las cuatro partes de la presentación con la animación. Ejecuta la demo y haz tú una explicación modelo con «siente, piensa y actúa». Termina con los comentarios que ayudan: pon un ejemplo bueno y uno malo, y que la clase los distinga.",
        diu: ["Què sent aquest robot? Què pensa? Com actua?|¿Qué siente este robot? ¿Qué piensa? ¿Cómo actúa?", "Aquest comentari ajuda? Per què?|¿Este comentario ayuda? ¿Por qué?"],
        slides: ['s3', 's4', 's5'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El guió i l'assaig|El guion y el ensayo", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa del guió: una frase per a cada part. Després, per parelles, assagen: un presenta en dos minuts (cronometrats) i l'altre escolta i diu una cosa que li ha agradat i una idea per millorar. Canvien.|Cada alumno/a rellena la ficha del guion: una frase para cada parte. Después, por parejas, ensayan: uno presenta en dos minutos (cronometrados) y el otro escucha y dice algo que le ha gustado y una idea para mejorar. Cambian.",
        diu: ["Una frase per part: no cal escriure-ho tot.|Una frase por parte: no hace falta escribirlo todo.", "Quin problema vas tenir? Com el vas resoldre?|¿Qué problema tuviste? ¿Cómo lo resolviste?"],
        slides: ['s6'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 8, t: "A l'ordinador: assaig general i retocs|En el ordenador: ensayo general y retoques", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió: targetes, ordenar la presentació, el comentari que ajuda, el repte de l'assaig general (projecta'l si vols com a exemple de demostració) i els últims retocs de la missió. S'aturen al pas «Canvi de lloc!».|Cada alumno/a abre la sesión: tarjetas, ordenar la presentación, el comentario que ayuda, el reto del ensayo general (proyéctalo si quieres como ejemplo de demostración) y los últimos retoques de la misión. Se paran en el paso «¡Cambio de sitio!».",
        diu: ["Para al pas «Canvi de lloc!» i espera el senyal.|Para en el paso «¡Cambio de sitio!» y espera la señal."],
        slides: ['s7', 's12'], app: "De «La missió» fins a «Últims retocs».|De «La misión» hasta «Últimos retoques».", org: "Individual|Individual" },
      { min: 12, t: "Canvi de lloc: els provadors|Cambio de sitio: los probadores", fase: 'crea',
        fa: "A la teva senyal, les parelles de provadors canvien d'ordinador. El provador/a programa la missió del company/a (l'autor/a mira, però no toca) i, en acabar, respon la valoració. Torna al seu lloc i explica de paraula el comentari. L'autor/a aplica el que vulgui a la missió.|A tu señal, las parejas de probadores cambian de ordenador. El probador/a programa la misión del compañero/a (el autor/a mira, pero no toca) y, al terminar, responde la valoración. Vuelve a su sitio y explica de palabra el comentario. El autor/a aplica lo que quiera a la misión.",
        diu: ["Autors i autores: mans a la butxaca!|Autores y autoras: ¡manos en el bolsillo!", "Primer una cosa que t'ha agradat; després, una idea.|Primero algo que te ha gustado; después, una idea."],
        slides: ['s8', 's9'], app: "Del «Canvi de lloc!» fins a «Aplica un comentari»: la missió del company/a, la valoració, tornar al lloc, la pausa i millorar la pròpia missió.|Del «¡Cambio de sitio!» hasta «Aplica un comentario»: la misión del compañero/a, la valoración, volver al sitio, la pausa y mejorar la propia misión.", org: "Per parelles de grups diferents|Por parejas de grupos diferentes" },
      { min: 13, t: "La Mostra de Robots|La Muestra de Robots", fase: 'robot',
        fa: "Mostra en estacions. Cada grup tria una de les seves missions (o la pista de l'aula, si no hi ha temps de construir-ne una de nova), la descarrega al Maqueen i la deixa a punt a la pista de terra. Meitat dels grups presenten (2 minuts per alumne/a, amb el robot de veritat i l'app a l'ordinador amb el pas «Presenta») i l'altra meitat visita i fa preguntes; als 6 minuts, canvien. Si hi ha famílies o un altre grup, ells són el públic.|Muestra en estaciones. Cada grupo elige una de sus misiones (o la pista del aula, si no hay tiempo de construir una nueva), la descarga en el Maqueen y la deja lista en la pista del suelo. La mitad de los grupos presentan (2 minutos por alumno/a, con el robot de verdad y la app en el ordenador con el paso «Presenta») y la otra mitad visita y hace preguntas; a los 6 minutos, cambian. Si hay familias u otro grupo, ellos son el público.",
        diu: ["Expliqueu les quatre parts abans de la demo.|Explicad las cuatro partes antes de la demo.", "Visitants: feu una pregunta a cada estació.|Visitantes: haced una pregunta en cada estación.", "Si el robot falla, expliqueu què creieu que ha passat: això també és ser enginyer/a!|Si el robot falla, explicad qué creéis que ha pasado: ¡eso también es ser ingeniero/a!"],
        slides: ['s10', 's11'], app: "Pas «Presenta la teva missió» a l'ordinador de l'estació, al costat del robot de veritat.|Paso «Presenta tu misión» en el ordenador de la estación, al lado del robot de verdad.", org: "Grups de 3-4 per kit en estacions|Grupos de 3-4 por kit en estaciones" },
      { min: 6, t: "Diplomes i comiat|Diplomas y despedida", fase: 'tancament',
        fa: "Torneu als ordinadors: cadascú obre el seu diploma a l'app. Repassa el resum, fes el tiquet en veu alta i lliura el diploma imprès a cada alumne/a dient-ne el nom i una cosa que ha fet bé durant el curs. Acaba amb un aplaudiment per a tots els enginyers i enginyeres.|Volved a los ordenadores: cada uno abre su diploma en la app. Repasa el resumen, haz el ticket en voz alta y entrega el diploma impreso a cada alumno/a diciendo su nombre y algo que ha hecho bien durante el curso. Termina con un aplauso para todos los ingenieros e ingenieras.",
        diu: ["Què és el que més us ha agradat aprendre?|¿Qué es lo que más os ha gustado aprender?", "Quin robot us agradaria programar d'aquí a uns anys?|¿Qué robot os gustaría programar dentro de unos años?"],
        slides: ['s13', 's14', 's15'], app: "El diploma, la història final, l'última pregunta i com m'he sentit.|El diploma, la historia final, la última pregunta y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Durant la presentació, només llegeix el programa bloc a bloc.|Durante la presentación, solo lee el programa bloque a bloque.",
        "Proposa la frase «El meu robot sent…, pensa… i actua…»: el públic entén millor el que fa que no pas cada bloc.|Propón la frase «Mi robot siente…, piensa… y actúa…»: el público entiende mejor lo que hace que cada bloque."],
      ["Com a provador/a, diu només «està bé» o fa un comentari que fa mal.|Como probador/a, dice solo «está bien» o hace un comentario que hace daño.",
        "Recorda la fórmula: «M'agrada… i potser podries…». Que posi un exemple concret de la missió.|Recuerda la fórmula: «Me gusta… y quizá podrías…». Que ponga un ejemplo concreto de la misión."],
      ["L'autor/a no deixa que el provador/a s'equivoqui i li diu la solució.|El autor/a no deja que el probador/a se equivoque y le dice la solución.",
        "Explica que els errors del provador/a són informació valuosa: on s'encalla, allà la missió és difícil o poc clara.|Explica que los errores del probador/a son información valiosa: donde se atasca, ahí la misión es difícil o poco clara."],
      ["El robot de veritat falla durant la demo i l'alumne/a es bloqueja.|El robot de verdad falla durante la demo y el alumno/a se bloquea.",
        "Valora que expliqui per què creu que ha fallat (piles, cinta, calibratge) i que ho torni a provar: és part de la presentació d'un enginyer/a.|Valora que explique por qué cree que ha fallado (pilas, cinta, calibración) y que lo vuelva a probar: es parte de la presentación de un ingeniero/a."],
      ["Té vergonya de parlar davant del grup.|Le da vergüenza hablar delante del grupo.",
        "Que presenti en parella amb un company/a del grup (un explica i l'altre fa la demo) o només a la seva estació, davant de pocs visitants.|Que presente en pareja con un compañero/a del grupo (uno explica y el otro hace la demo) o solo en su estación, delante de pocos visitantes."]
    ],
    diff: {
      mes: "Afegir a la presentació la comparació entre el simulador i el robot real (què va caldre calibrar) i ensenyar el codi JavaScript de la missió. Respondre preguntes del públic.|Añadir a la presentación la comparación entre el simulador y el robot real (qué hizo falta calibrar) y enseñar el código JavaScript de la misión. Responder preguntas del público.",
      menys: "Presentar només dues parts (la missió i la demo) amb el guió a la mà. Fer la demo amb la pista de l'aula, ja provada a la sessió anterior.|Presentar solo dos partes (la misión y la demo) con el guion en la mano. Hacer la demo con la pista del aula, ya probada en la sesión anterior."
    },
    aval: {
      ticket: ["Quines són les quatre parts d'una bona presentació?|¿Cuáles son las cuatro partes de una buena presentación?", "Quina és la cosa més important que has après en aquest curs?|¿Cuál es la cosa más importante que has aprendido en este curso?"],
      rubric: [
        ["Presentació|Presentación", "Explica la missió, com funciona, un problema resolt i fa la demo.|Explica la misión, cómo funciona, un problema resuelto y hace la demo.", "Fa la demo, però li costa explicar com funciona el robot.|Hace la demo, pero le cuesta explicar cómo funciona el robot."],
        ["Comentaris|Comentarios", "Fa comentaris amables i concrets i aplica algun comentari rebut.|Hace comentarios amables y concretos y aplica algún comentario recibido.", "Fa comentaris generals («està bé») o no en té en compte cap.|Hace comentarios generales («está bien») o no tiene en cuenta ninguno."],
        ["Projecte final|Proyecto final", "La missió funciona al simulador i al robot real, amb almenys un sensor.|La misión funciona en el simulador y en el robot real, con al menos un sensor.", "La missió funciona al simulador, però no s'ha pogut provar o ajustar al robot real.|La misión funciona en el simulador, pero no se ha podido probar o ajustar en el robot real."]
      ]
    },
    casa: "A casa, ensenyeu el diploma i expliqueu a la família la vostra missió amb el mòbil: com és la pista, què ha de fer el robot i com ho fa (sent, pensa i actua). Busqueu tres robots de la vida real i digueu quins sensors deuen fer servir.|En casa, enseñad el diploma y explicad a la familia vuestra misión con el móvil: cómo es la pista, qué tiene que hacer el robot y cómo lo hace (siente, piensa y actúa). Buscad tres robots de la vida real y decid qué sensores deben usar.",
    slides: [
      { id: 's1', k: 'portada', t: "La Mostra de Robots|La Muestra de Robots", x: "Presentació i diploma: el gran dia dels enginyers i enginyeres.|Presentación y diploma: el gran día de los ingenieros e ingenieras.",
        nota: "Si hi ha públic convidat, presenta'ls el projecte: cada alumne/a ha inventat i programat una missió per a un robot de veritat.|Si hay público invitado, preséntales el proyecto: cada alumno/a ha inventado y programado una misión para un robot de verdad." },
      { id: 's2', k: 'repas', t: "El viatge del curs|El viaje del curso", punts: ["1-2. Robots, motors, distàncies i girs|1-2. Robots, motores, distancias y giros", "3-4. Ultrasons i sensors de línia|3-4. Ultrasonidos y sensores de línea", "5-6. Llum, so, botons, variables i control intel·ligent|5-6. Luz, sonido, botones, variables y control inteligente", "7-8. Missions i el meu robot|7-8. Misiones y mi robot"],
        nota: "Per a cada línia, que algú digui una cosa que recordi o una missió que li va agradar.|Para cada línea, que alguien diga algo que recuerde o una misión que le gustó." },
      { id: 's3', k: 'anim', t: "Quatre parts i una demo|Cuatro partes y una demo", anim: 'k8pitch', x: "La missió, com funciona, un problema resolt i la demostració.|La misión, cómo funciona, un problema resuelto y la demostración.",
        nota: "Remarca la tercera part: explicar un problema i com es va resoldre és el que més interessa al públic.|Remarca la tercera parte: explicar un problema y cómo se resolvió es lo que más interesa al público." },
      { id: 's4', k: 'robo', t: "Sent, pensa i actua|Siente, piensa y actúa", x: "Explica'm aquest robot en tres frases.|Explícame este robot en tres frases.",
        robo: { w: { w: 120, h: 80, bot: [15, 60, 90], lines: [{ p: [[15, 60], [50, 60], [60, 50], [60, 30], [70, 20], [115, 20]] }], walls: [[100.5, 10.5, 9, 9]] }, prog: 'start{ icon:heart } forever{ if:dist<10{ stop:all car:all,green } else{ if:L=1&&R=0{ run:L,fwd,40 run:R,fwd,140 } else{ if:R=1&&L=0{ run:L,fwd,140 run:R,fwd,40 } else{ run:all,fwd,120 } } } }' },
        nota: "Fes tu l'explicació model: «Sent la cinta amb els sensors de línia i la caixa amb els ultrasons; pensa: si la caixa és a menys de 10 cm, para; actua: mou les rodes i encén els llums verds».|Haz tú la explicación modelo: «Siente la cinta con los sensores de línea y la caja con los ultrasonidos; piensa: si la caja está a menos de 10 cm, para; actúa: mueve las ruedas y enciende las luces verdes»." },
      { id: 's5', k: 'concepte', t: "Comentaris que ajuden|Comentarios que ayudan", pic: 'img/ic/good.webp', punts: ["Una cosa que t'ha agradat.|Algo que te ha gustado.", "Una idea per millorar.|Una idea para mejorar.", "Concret i amable: «M'agrada… i potser podries…».|Concreto y amable: «Me gusta… y quizá podrías…»."],
        nota: "Digues dos comentaris en veu alta («Està bé» i «M'agraden els llums; potser la meta podria ser més lluny») i que la classe voti quin ajuda més.|Di dos comentarios en voz alta («Está bien» y «Me gustan las luces; quizá la meta podría estar más lejos») y que la clase vote cuál ayuda más." },
      { id: 's6', k: 'activitat', t: "El guió i l'assaig|El guion y el ensayo", timer: 10, punts: ["Omple el guió: una frase per part.|Rellena el guion: una frase por parte.", "Per parelles: presenta en 2 minuts.|Por parejas: presenta en 2 minutos.", "El company/a: una cosa que agrada i una idea.|El compañero/a: algo que gusta y una idea.", "Canvieu.|Cambiad."],
        nota: "Cronometra els dos minuts en veu alta per a tota la classe: així tothom canvia alhora.|Cronometra los dos minutos en voz alta para toda la clase: así todo el mundo cambia a la vez." },
      { id: 's7', k: 'activitat', t: "Assaig general i retocs|Ensayo general y retoques", timer: 8, punts: ["Mira les targetes de «Descobreix».|Mira las tarjetas de «Descubre».", "Fes el repte de l'assaig general.|Haz el reto del ensayo general.", "Últims retocs de la teva missió.|Últimos retoques de tu misión.", "Para a «Canvi de lloc!».|Para en «¡Cambio de sitio!»."],
        nota: "Comprova que tothom té una missió desada abans del canvi de lloc: qui no en tingui, que en desi una de senzilla als últims retocs.|Comprueba que todos tienen una misión guardada antes del cambio de sitio: quien no tenga, que guarde una sencilla en los últimos retoques." },
      { id: 's8', k: 'activitat', t: "Canvi de lloc: els provadors|Cambio de sitio: los probadores", timer: 12, punts: ["Canvieu d'ordinador amb la vostra parella.|Cambiad de ordenador con vuestra pareja.", "Provador/a: programa la missió del company/a.|Probador/a: programa la misión del compañero/a.", "Respon la valoració i torna al teu lloc.|Responde la valoración y vuelve a tu sitio.", "Autor/a: aplica el comentari que t'agradi.|Autor/a: aplica el comentario que te guste."],
        nota: "Fes les parelles amb alumnes de grups de kit diferents: així veuen missions noves.|Haz las parejas con alumnos de grupos de kit diferentes: así ven misiones nuevas." },
      { id: 's9', k: 'concepte', t: "Les normes del provador/a|Las normas del probador/a", pic: 'img/ic/detective.webp', punts: ["L'autor/a mira, però no toca ni dona la solució.|El autor/a mira, pero no toca ni da la solución.", "Si t'encalles, digues on i per què.|Si te atascas, di dónde y por qué.", "La valoració, sincera i amable.|La valoración, sincera y amable."],
        nota: "Deixa-la projectada durant el canvi de lloc.|Déjala proyectada durante el cambio de sitio." },
      { id: 's10', k: 'activitat', t: "La Mostra de Robots|La Muestra de Robots", timer: 13, punts: ["Cada grup, a la seva estació amb el robot i la pista.|Cada grupo, en su estación con el robot y la pista.", "Meitat presenten, meitat visiten; als 6 minuts, canvi.|Mitad presentan, mitad visitan; a los 6 minutos, cambio.", "2 minuts per alumne/a: quatre parts i la demo.|2 minutos por alumno/a: cuatro partes y la demo.", "Visitants: una pregunta a cada estació.|Visitantes: una pregunta en cada estación."],
        nota: "Si una missió no es pot construir a temps, el grup pot fer la demo a la pista de l'aula i ensenyar la seva missió al simulador.|Si una misión no se puede construir a tiempo, el grupo puede hacer la demo en la pista del aula y enseñar su misión en el simulador." },
      { id: 's11', k: 'concepte', t: "Muntatge i seguretat|Montaje y seguridad", pic: 'img/ic/wrench.webp', punts: ["Pista a terra, ben enganxada, lluny del pas.|Pista en el suelo, bien pegada, lejos del paso.", "Programa descarregat i cable fora.|Programa descargado y cable fuera.", "Només el pilot encén i apaga el robot.|Solo el piloto enciende y apaga el robot.", "Piles de recanvi a la taula del professor/a.|Pilas de recambio en la mesa del profesor/a."],
        nota: "Prepara una estació de reserva amb la pista de l'aula i un robot carregat per si en falla algun.|Prepara una estación de reserva con la pista del aula y un robot cargado por si falla alguno." },
      { id: 's12', k: 'robo', t: "L'assaig general|El ensayo general", x: "Benvinguda amb un cor i tres notes; després, la cinta i la caixa.|Bienvenida con un corazón y tres notas; después, la cinta y la caja.",
        robo: { w: { w: 120, h: 80, bot: [15, 60, 90], lines: [{ p: [[15, 60], [50, 60], [60, 50], [60, 30], [70, 20], [115, 20]] }], walls: [[100.5, 10.5, 9, 9]] }, prog: 'start{ icon:heart note:C4,1/2 note:E4,1/2 note:G4,1/2 } forever{ if:dist<10{ stop:all car:all,green } else{ if:L=1&&R=0{ run:L,fwd,40 run:R,fwd,140 } else{ if:R=1&&L=0{ run:L,fwd,140 run:R,fwd,40 } else{ run:all,fwd,120 } } } }' },
        nota: "És la solució del repte «L'assaig general»: ensenya-la a qui s'hi encalli, o projecta-la com a exemple de demo amb inici sonor.|Es la solución del reto «El ensayo general»: enséñala a quien se atasque, o proyéctala como ejemplo de demo con inicio sonoro." },
      { id: 's13', k: 'resum', t: "Què hem après en aquest curs|Qué hemos aprendido en este curso", punts: ["Un robot sent, pensa i actua.|Un robot siente, piensa y actúa.", "Planifica, programa, prova i millora.|Planifica, programa, prueba y mejora.", "Del simulador al robot real: calibrar i fer servir sensors.|Del simulador al robot real: calibrar y usar sensores."],
        nota: "Felicita el grup per tot el camí: de no saber què era un robot a inventar-ne missions pròpies.|Felicita al grupo por todo el camino: de no saber qué era un robot a inventar misiones propias." },
      { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Les quatre parts d'una presentació.|Las cuatro partes de una presentación.", "La cosa més important que has après.|La cosa más importante que has aprendido."],
        nota: "Fes-lo en rotllana i en veu alta: és l'últim dia i val la pena escoltar-se.|Hazlo en corro y en voz alta: es el último día y vale la pena escucharse." },
      { id: 's15', k: 'activitat', t: "Els diplomes|Los diplomas", timer: 3, punts: ["Obre el teu diploma a l'app.|Abre tu diploma en la app.", "Rep el diploma imprès.|Recibe el diploma impreso.", "Un aplaudiment per a tots els enginyers i enginyeres!|¡Un aplauso para todos los ingenieros e ingenieras!"],
        nota: "Lliura cada diploma dient el nom de l'alumne/a i una cosa concreta que ha fet bé durant el curs.|Entrega cada diploma diciendo el nombre del alumno/a y algo concreto que ha hecho bien durante el curso." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: el guió de la presentació|Ficha: el guion de la presentación", k: 'fitxa',
        intro: "Escriu una o dues frases per a cada part. Tens 2 minuts per presentar: no cal llegir-ho, només és per recordar-ho.|Escribe una o dos frases para cada parte. Tienes 2 minutos para presentar: no hace falta leerlo, solo es para recordarlo.",
        items: [
          { q: "1. La missió: «La meva missió es diu… i el robot ha de…»|1. La misión: «Mi misión se llama… y el robot tiene que…»", sol: "Diu el nom i l'objectiu de la missió.|Dice el nombre y el objetivo de la misión." },
          { q: "2. Com funciona: «El meu robot sent… amb…, pensa… i actua…»|2. Cómo funciona: «Mi robot siente… con…, piensa… y actúa…»", sol: "Nomena el sensor, la decisió del programa i el que fan els motors o els llums.|Nombra el sensor, la decisión del programa y lo que hacen los motores o las luces." },
          { q: "3. Un problema: «Al principi… i ho vaig arreglar…»|3. Un problema: «Al principio… y lo arreglé…»", sol: "Explica un error real i com el va resoldre (depurar, calibrar, canviar un tram…).|Explica un error real y cómo lo resolvió (depurar, calibrar, cambiar un tramo…)." },
          { q: "4. La demo: què ha de mirar el públic?|4. La demo: ¿qué tiene que mirar el público?", sol: "Avisa el públic del moment important (on para, què s'encén…) abans d'engegar el robot.|Avisa al público del momento importante (dónde para, qué se enciende…) antes de encender el robot." },
          { q: "Comentari del meu company/a: una cosa que li ha agradat i una idea.|Comentario de mi compañero/a: algo que le ha gustado y una idea.", sol: "Resposta oberta.|Respuesta abierta." }
        ] },
      { id: 'p2', t: "Diploma del curs|Diploma del curso", k: 'diploma',
        intro: "ha completat el curs Tech Robòtica de Numi Tech: ha dissenyat, programat, calibrat i presentat la seva pròpia missió amb el robot Maqueen.|ha completado el curso Tech Robótica de Numi Tech: ha diseñado, programado, calibrado y presentado su propia misión con el robot Maqueen.",
        items: [
          "Ha programat motors, distàncies i girs amb precisió.|Ha programado motores, distancias y giros con precisión.",
          "Ha fet servir sensors d'ultrasons, de línia i de llum.|Ha usado sensores de ultrasonidos, de línea y de luz.",
          "Ha programat decisions, variables i control intel·ligent.|Ha programado decisiones, variables y control inteligente.",
          "Ha resolt missions de rescat, sumo, neteja i velocitat.|Ha resuelto misiones de rescate, sumo, limpieza y velocidad.",
          "Ha passat els seus programes al robot de veritat i els ha calibrat.|Ha pasado sus programas al robot de verdad y los ha calibrado."
        ] }
    ]
  }
});
