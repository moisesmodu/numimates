/* Tech Robòtica · unitat 1 «Què és un robot?» · guia del professor (k1-1 … k1-4)
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. Fase «robot»: activitat amb el
   Maqueen Lite V5 de veritat (grups de 3-4 per kit). */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Robots al nostre voltant ---------- */
  'k1-1': {
    obj: [
      "L'alumne/a explica què és un robot amb el cicle sentir → pensar → actuar i en dona exemples de la vida diària.|El alumno/a explica qué es un robot con el ciclo sentir → pensar → actuar y da ejemplos de la vida diaria.",
      "L'alumne/a identifica les parts del Maqueen Lite (ultrasons, sensors de línia, micro:bit, motors i llums) i distingeix els sensors dels actuadors.|El alumno/a identifica las partes del Maqueen Lite (ultrasonidos, sensores de línea, micro:bit, motores y luces) y distingue los sensores de los actuadores.",
      "L'alumne/a escriu dins d'«en iniciar» un programa amb motor, espera i atura que porta el robot fins a una zona.|El alumno/a escribe dentro de «al iniciar» un programa con motor, espera y para que lleva el robot hasta una zona.",
      "L'alumne/a descarrega el seu primer programa al Maqueen de veritat i compara on s'atura amb el que fa el simulador.|El alumno/a descarga su primer programa en el Maqueen de verdad y compara dónde se para con lo que hace el simulador."
    ],
    comp: [
      "Competència digital (CD5): programar un robot per resoldre una tasca senzilla|Competencia digital (CD5): programar un robot para resolver una tarea sencilla",
      "Competència STEM (STEM2): observar, predir i comprovar el comportament d'una màquina|Competencia STEM (STEM2): observar, predecir y comprobar el comportamiento de una máquina",
      "Matemàtiques: magnituds i mesura (centímetres, segons i mil·lisegons)|Matemáticas: magnitudes y medida (centímetros, segundos y milisegundos)",
      "Ciències i tecnologia: màquines que perceben l'entorn i hi actuen|Ciencias y tecnología: máquinas que perciben el entorno y actúan sobre él"
    ],
    vocab: [
      ["Robot|Robot", "Màquina que sent amb sensors, decideix amb un programa i actua amb motors, llums o so.|Máquina que siente con sensores, decide con un programa y actúa con motores, luces o sonido."],
      ["Sensor|Sensor", "Part que recull informació de l'entorn (distància, llum, línia…).|Parte que recoge información del entorno (distancia, luz, línea…)."],
      ["Actuador|Actuador", "Part que fa alguna cosa: els motors, els llums, el brunzidor.|Parte que hace algo: los motores, las luces, el zumbador."],
      ["micro:bit|micro:bit", "L'ordinador petit que fa de cervell del Maqueen: hi guardem el programa.|El ordenador pequeño que hace de cerebro del Maqueen: allí guardamos el programa."],
      ["En iniciar|Al iniciar", "El guió que s'executa una vegada quan s'encén el robot, de dalt a baix.|El guion que se ejecuta una vez cuando se enciende el robot, de arriba abajo."],
      ["Mil·lisegon (ms)|Milisegundo (ms)", "La mil·lèsima part d'un segon: 1000 ms són 1 segon.|La milésima parte de un segundo: 1000 ms son 1 segundo."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Robots al nostre voltant»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Robots a nuestro alrededor»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit per grup de 3-4: Maqueen Lite V5 amb micro:bit V2, cable USB i piles carregades|Un kit por grupo de 3-4: Maqueen Lite V5 con micro:bit V2, cable USB y pilas cargadas",
        "Cinta de pintor, un metre o una cinta mètrica i una caixa de sabates per grup|Cinta de pintor, un metro o una cinta métrica y una caja de zapatos por grupo"
      ],
      imprimir: ["Targetes: el robot de tres persones|Tarjetas: el robot de tres personas", "Codi: el primer programa al Maqueen|Código: el primer programa en el Maqueen"],
      prep: [
        "Provar un kit abans de la classe: descarregar el codi de la diapositiva 13 i comprovar que el robot avança i s'atura.|Probar un kit antes de la clase: descargar el código de la diapositiva 13 y comprobar que el robot avanza y se para.",
        "Marcar a terra, per a cada grup, una línia de sortida i una zona de meta de 25 × 25 cm a uns 45 cm de distància, amb cinta de pintor.|Marcar en el suelo, para cada grupo, una línea de salida y una zona de meta de 25 × 25 cm a unos 45 cm de distancia, con cinta de pintor.",
        "Imprimir i retallar un paquet de targetes per grup de 3.|Imprimir y recortar un paquete de tarjetas por grupo de 3.",
        "Deixar els ordinadors amb Numi Tech obert i MakeCode (makecode.microbit.org) en una altra pestanya.|Dejar los ordenadores con Numi Tech abierto y MakeCode (makecode.microbit.org) en otra pestaña."
      ]
    },
    plan: [
      { min: 4, t: "Benvinguda al taller de robòtica|Bienvenida al taller de robótica", fase: 'inici',
        fa: "Presenta el curs i ensenya la caixa dels robots Maqueen, encara apagats. Projecta la llista de la diapositiva 2 i feu-ne una votació a mà alçada: és un robot o no? Recull les raons sense donar la resposta: hi tornareu d'aquí a uns minuts.|Presenta el curso y enseña la caja de los robots Maqueen, todavía apagados. Proyecta la lista de la diapositiva 2 y haced una votación a mano alzada: ¿es un robot o no? Recoge las razones sin dar la respuesta: volveréis a ello en unos minutos.",
        diu: ["Què fa que una màquina sigui un robot?|¿Qué hace que una máquina sea un robot?",
          "Una torradora és un robot? I un robot aspirador? Per què?|¿Una tostadora es un robot? ¿Y un robot aspirador? ¿Por qué?",
          "Avui farem que aquests robots facin el seu primer passeig.|Hoy haremos que estos robots den su primer paseo."],
        slides: ['s1', 's2'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Sentir, pensar i actuar|Sentir, pensar y actuar", fase: 'teoria',
        fa: "Explica el cicle amb l'animació i torneu a la llista de la diapositiva 2 amb un criteri clar: té sensors?, decideix amb un programa?, actua? Presenta les parts del Maqueen amb un robot de veritat a la mà al costat de l'animació. Executa la demo del robot que s'atura sol davant la caixa: és el cicle en directe. Acaba amb els tres blocs de moviment i, abans d'executar les dues últimes demos, demana a tothom on creu que s'aturarà el robot.|Explica el ciclo con la animación y volved a la lista de la diapositiva 2 con un criterio claro: ¿tiene sensores?, ¿decide con un programa?, ¿actúa? Presenta las partes del Maqueen con un robot de verdad en la mano al lado de la animación. Ejecuta la demo del robot que se para solo delante de la caja: es el ciclo en directo. Termina con los tres bloques de movimiento y, antes de ejecutar las dos últimas demos, pide a todos dónde creen que se parará el robot.",
        diu: ["Quins sensors té el robot aspirador? I quin és el seu actuador?|¿Qué sensores tiene el robot aspirador? ¿Y cuál es su actuador?",
          "Quina part del Maqueen fa de cervell?|¿Qué parte del Maqueen hace de cerebro?",
          "Abans d'executar-ho: el robot s'aturarà abans, dins o després de la meta?|Antes de ejecutarlo: ¿el robot se parará antes, dentro o después de la meta?",
          "Si el programa s'acaba sense «atura», qui diu als motors que parin?|Si el programa se termina sin «para», ¿quién les dice a los motores que paren?"],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 9, t: "El robot de tres persones|El robot de tres personas", fase: 'desconnectat',
        fa: "Grups de 3 amb les targetes de rol. <b>Sensors</b> mira i explica què veu, però no es mou ni dona ordres. <b>Cervell</b> escolta els sensors i mostra una targeta d'ordre. <b>Motors</b> té els ulls tancats i només fa el que diu la targeta, a poc a poc. La missió: arribar fins a la caixa de sabates i aturar-se a un pam sense tocar-la. Després de cada intent, els papers roten. Al final, pregunta quin paper era el més difícil.|Grupos de 3 con las tarjetas de rol. <b>Sensores</b> mira y explica lo que ve, pero no se mueve ni da órdenes. <b>Cerebro</b> escucha a los sensores y muestra una tarjeta de orden. <b>Motores</b> tiene los ojos cerrados y solo hace lo que dice la tarjeta, despacio. La misión: llegar hasta la caja de zapatos y pararse a un palmo sin tocarla. Después de cada intento, los papeles rotan. Al final, pregunta qué papel era el más difícil.",
        diu: ["Els motors no veuen res: només obeeixen el cervell.|Los motores no ven nada: solo obedecen al cerebro.",
          "Sensors, només podeu explicar què veieu: qui decideix és el cervell.|Sensores, solo podéis explicar lo que veis: quien decide es el cerebro.",
          "Si el robot ha tocat la caixa, quina part del robot ha fallat?|Si el robot ha tocado la caja, ¿qué parte del robot ha fallado?"],
        slides: ['s10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 11, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança fins a la pausa activa. Al pas «El robot de dues persones», que toquin «Ho hem fet!»: és el que acabem de fer. Al pas «On acabarà?», que triïn la lletra abans d'executar el programa i que diguin per què.|Cada alumno/a abre la sesión y avanza hasta la pausa activa. En el paso «El robot de dos personas», que toquen «¡Lo hemos hecho!»: es lo que acabamos de hacer. En el paso «¿Dónde terminará?», que elijan la letra antes de ejecutar el programa y que digan por qué.",
        diu: ["Les targetes de «Descobreix» tenen demos: mira-les executar-se un parell de vegades.|Las tarjetas de «Descubre» tienen demos: míralas ejecutarse un par de veces.",
          "Primer tria la lletra; després comprova-ho.|Primero elige la letra; después compruébalo."],
        slides: ['s11'], app: "De «La missió» fins a «Investiga»: les dues històries, les cinc targetes de «Descobreix», les preguntes del cervell i del sensor, ordenar el cicle de l'aspirador, «El robot de dues persones» (ja fet), la targeta dels tres blocs, «On acabarà?» i el bloc que cal canviar.|De «La misión» hasta «Investiga»: las dos historias, las cinco tarjetas de «Descubre», las preguntas del cerebro y del sensor, ordenar el ciclo del aspirador, «El robot de dos personas» (ya hecho), la tarjeta de los tres bloques, «¿Dónde terminará?» y el bloque que hay que cambiar.", org: "Individual|Individual" },
      { min: 8, t: "Reptes: el primer programa|Retos: el primer programa", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts, drets al costat de la taula. Després, deixa'ls fer els tres reptes. Al primer, insisteix que és normal no encertar l'espera a la primera: es prova, es mira i s'ajusta. Al segon, que llegeixin el programa en veu alta abans de tocar res.|Haced la pausa activa todos juntos, de pie al lado de la mesa. Después, deja que hagan los tres retos. En el primero, insiste en que es normal no acertar la espera a la primera: se prueba, se mira y se ajusta. En el segundo, que lean el programa en voz alta antes de tocar nada.",
        diu: ["S'ha quedat curt o s'ha passat? Per poc o per molt?|¿Se ha quedado corto o se ha pasado? ¿Por poco o por mucho?",
          "Llegeix el programa de dalt a baix: què li falta?|Lee el programa de arriba abajo: ¿qué le falta?",
          "Si en 4 segons fa uns 60 cm, quant temps li cal per fer-ne 100?|Si en 4 segundos hace unos 60 cm, ¿cuánto tiempo necesita para hacer 100?"],
        slides: ['s12'], app: "«Pausa activa» i els tres reptes: la primera meta, el robot que no s'atura i la meta llunyana.|«Pausa activa» y los tres retos: la primera meta, el robot que no se para y la meta lejana.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 12, t: "El primer programa al Maqueen de veritat|El primer programa en el Maqueen de verdad", fase: 'robot',
        fa: "Grups de 3-4 per kit, amb papers: programador/a (MakeCode), pilot (encén, apaga i agafa el robot), mesurador/a (metre) i secretari/ària (apunta). A MakeCode: nou projecte, «Extensions», busqueu «maqueen», passeu a JavaScript, enganxeu el codi de la diapositiva 13 (o de l'imprimible) i descarregueu-lo a la micro:bit. Desconnecteu el cable, poseu el robot a terra darrere la línia de sortida i encengueu-lo. Marqueu amb cinta on s'atura i mesureu-ho: al simulador, a 150 durant 3 segons, fa uns 46 cm. Si queda temps, canvieu l'espera perquè s'aturi dins la zona de meta.|Grupos de 3-4 por kit, con papeles: programador/a (MakeCode), piloto (enciende, apaga y coge el robot), medidor/a (metro) y secretario/a (apunta). En MakeCode: nuevo proyecto, «Extensiones», buscad «maqueen», pasad a JavaScript, pegad el código de la diapositiva 13 (o del imprimible) y descargadlo en la micro:bit. Desconectad el cable, poned el robot en el suelo detrás de la línea de salida y encendedlo. Marcad con cinta dónde se para y medidlo: en el simulador, a 150 durante 3 segundos, hace unos 46 cm. Si queda tiempo, cambiad la espera para que se pare dentro de la zona de meta.",
        diu: ["Cable fora i robot a terra abans d'encendre'l.|Cable fuera y robot en el suelo antes de encenderlo.",
          "On s'ha aturat el vostre? Més a prop o més lluny que al simulador?|¿Dónde se ha parado el vuestro? ¿Más cerca o más lejos que en el simulador?",
          "Si s'ha quedat curt, quin número canviaríeu? Cap a on?|Si se ha quedado corto, ¿qué número cambiaríais? ¿Hacia dónde?"],
        slides: ['s13', 's14'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers|Grupos de 3-4 por kit con papeles" },
      { min: 5, t: "Crea: el bus del taller|Crea: el autobús del taller", fase: 'crea',
        fa: "De tornada a l'ordinador, cada alumne/a fa el projecte del bus: una parada a la zona groga i el final a la verda. Quan funcioni, que el desin. Qui acabi pot ajudar un company/a amb preguntes, sense tocar-li el ratolí.|De vuelta al ordenador, cada alumno/a hace el proyecto del autobús: una parada en la zona amarilla y el final en la verde. Cuando funcione, que lo guarden. Quien termine puede ayudar a un compañero/a con preguntas, sin tocarle el ratón.",
        diu: ["Quants blocs «atura» necessita el bus?|¿Cuántos bloques «para» necesita el autobús?",
          "Hi ha moltes solucions bones: la teva pot ser diferent de la del company/a.|Hay muchas soluciones buenas: la tuya puede ser diferente de la del compañero/a."],
        slides: ['s15'], app: "Pas «Crea»: El bus del taller.|Paso «Crea»: El autobús del taller.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum i deixa que responguin les preguntes finals de l'app. A la porta, fes a cada alumne/a una de les preguntes del tiquet.|Repasa las tres ideas con el resumen y deja que respondan las preguntas finales de la app. En la puerta, haz a cada alumno/a una de las preguntas del ticket.",
        diu: ["Qui em diu un robot de cada dia i quin sensor té?|¿Quién me dice un robot de cada día y qué sensor tiene?",
          "Què fa el bloc «espera»? I què passa si falta «atura»?|¿Qué hace el bloque «espera»? ¿Y qué pasa si falta «para»?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Creu que «espera» para el robot.|Cree que «espera» para el robot.",
        "Que miri la demo sense «atura» i expliqui què passa quan s'acaba el programa. Pregunta: qui ha dit als motors que parin?|Que mire la demo sin «para» y explique qué pasa cuando se termina el programa. Pregunta: ¿quién les ha dicho a los motores que paren?"],
      ["Posa els blocs en un ordre estrany (l'«atura» abans de l'«espera») o fora d'«en iniciar».|Pone los bloques en un orden extraño (el «para» antes de la «espera») o fuera de «al iniciar».",
        "Llegiu el programa en veu alta de dalt a baix: «engega, espera, atura». Quin ordre té sentit?|Leed el programa en voz alta de arriba abajo: «enciende, espera, para». ¿Qué orden tiene sentido?"],
      ["Canvia l'espera a l'atzar i amb salts molt grans (de 1000 a 9000 ms).|Cambia la espera al azar y con saltos muy grandes (de 1000 a 9000 ms).",
        "Pregunta: s'ha quedat curt o s'ha passat, i per poc o per molt? Que canviï l'espera de 500 en 500 ms.|Pregunta: ¿se ha quedado corto o se ha pasado, y por poco o por mucho? Que cambie la espera de 500 en 500 ms."],
      ["Confon sensors i actuadors (diu que els motors són un sensor).|Confunde sensores y actuadores (dice que los motores son un sensor).",
        "Fes la pregunta clau: recull informació o fa alguna cosa? Els ultrasons «escolten»; els motors «fan».|Haz la pregunta clave: ¿recoge información o hace algo? Los ultrasonidos «escuchan»; los motores «hacen»."],
      ["Al robot de veritat no s'atura on deia el simulador i pensa que ho ha fet malament.|En el robot de verdad no se para donde decía el simulador y piensa que lo ha hecho mal.",
        "És normal: les piles i el terra canvien una mica la velocitat. Que mesuri la diferència i ajusti l'espera: és el que fan els enginyers.|Es normal: las pilas y el suelo cambian un poco la velocidad. Que mida la diferencia y ajuste la espera: es lo que hacen los ingenieros."]
    ],
    diff: {
      mes: "Fer el bus amb dues parades i una velocitat diferent a cada tram. Al robot de veritat, ajustar l'espera fins que s'aturi a menys de 5 cm d'una marca de cinta.|Hacer el autobús con dos paradas y una velocidad diferente en cada tramo. En el robot de verdad, ajustar la espera hasta que se pare a menos de 5 cm de una marca de cinta.",
      menys: "Començar pel repte de la primera meta dient el programa en veu alta («engega, espera, atura») amb les targetes d'ordre a la taula. Fer servir el pas «On acabarà?» per entendre què fa l'espera.|Empezar por el reto de la primera meta diciendo el programa en voz alta («enciende, espera, para») con las tarjetas de orden en la mesa. Usar el paso «¿Dónde terminará?» para entender qué hace la espera."
    },
    aval: {
      ticket: ["Digues les tres coses que fa un robot i un exemple de sensor.|Di las tres cosas que hace un robot y un ejemplo de sensor.",
        "Què passa si un programa no té el bloc «atura»?|¿Qué pasa si un programa no tiene el bloque «para»?"],
      rubric: [
        ["Concepte de robot|Concepto de robot", "Explica el cicle sentir, pensar i actuar i classifica aparells amb aquest criteri.|Explica el ciclo sentir, pensar y actuar y clasifica aparatos con este criterio.", "Reconeix robots coneguts, però encara no explica per què ho són.|Reconoce robots conocidos, pero todavía no explica por qué lo son."],
        ["Parts del Maqueen|Partes del Maqueen", "Identifica al robot de veritat els sensors, el cervell i els actuadors.|Identifica en el robot de verdad los sensores, el cerebro y los actuadores.", "Anomena algunes parts, però confon sensors i actuadors.|Nombra algunas partes, pero confunde sensores y actuadores."],
        ["Primer programa|Primer programa", "Programa motor, espera i atura en ordre i ajusta l'espera segons el resultat.|Programa motor, espera y para en orden y ajusta la espera según el resultado.", "Fa el programa amb ajuda o canvia l'espera a l'atzar.|Hace el programa con ayuda o cambia la espera al azar."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «El robot de dues persones»: una persona fa de motors (ulls tancats) i l'altra de sensors i cervell. Busqueu també tres màquines de casa o del carrer que tinguin sensors i digueu si són robots.|En casa, con el móvil, podéis repetir la sesión y hacer «El robot de dos personas»: una persona hace de motores (ojos cerrados) y la otra de sensores y cerebro. Buscad también tres máquinas de casa o de la calle que tengan sensores y decid si son robots.",
    slides: [
      { id: 's1', k: 'portada', t: "Robots al nostre voltant|Robots a nuestro alrededor", x: "Avui coneixerem el Maqueen i li farem fer el primer passeig.|Hoy conoceremos el Maqueen y le haremos dar su primer paseo.",
        nota: "Presenta l'objectiu: al final de la classe, cada grup haurà fet moure un robot de veritat amb el seu programa.|Presenta el objetivo: al final de la clase, cada grupo habrá hecho mover un robot de verdad con su programa." },
      { id: 's2', k: 'pregunta', t: "És un robot?|¿Es un robot?", punts: ["Un robot aspirador|Un robot aspirador", "Una bicicleta|Una bicicleta", "Un braç que munta cotxes a la fàbrica|Un brazo que monta coches en la fábrica", "Una torradora|Una tostadora", "Un vehicle que explora Mart|Un vehículo que explora Marte"],
        nota: "Voteu cada aparell a mà alçada i apunta els resultats. No donis la resposta: després de la diapositiva 3, torneu-hi amb el criteri «sent, pensa i actua».|Votad cada aparato a mano alzada y apunta los resultados. No des la respuesta: después de la diapositiva 3, volved con el criterio «siente, piensa y actúa»." },
      { id: 's3', k: 'anim', t: "Sent, pensa i actua|Siente, piensa y actúa", anim: 'k1cycle', x: "Un robot sent amb els sensors, pensa amb el programa i actua amb els motors, una vegada i una altra.|Un robot siente con los sensores, piensa con el programa y actúa con los motores, una y otra vez.",
        nota: "Torna a la llista: la bicicleta no sent ni decideix; la torradora només compta el temps. El robot aspirador i el vehicle de Mart fan les tres coses.|Vuelve a la lista: la bicicleta no siente ni decide; la tostadora solo cuenta el tiempo. El robot aspirador y el vehículo de Marte hacen las tres cosas." },
      { id: 's4', k: 'anim', t: "Robots de cada dia|Robots de cada día", anim: 'k1life', x: "Aspiradors, braços de fàbrica i vehicles que exploren altres planetes.|Aspiradores, brazos de fábrica y vehículos que exploran otros planetas.",
        nota: "Per a cada robot, demana quin sensor té i quin actuador. Deixa que en proposin d'altres que coneguin.|Para cada robot, pide qué sensor tiene y qué actuador. Deja que propongan otros que conozcan." },
      { id: 's5', k: 'anim', t: "Coneix el Maqueen Lite|Conoce el Maqueen Lite", anim: 'k1parts', x: "Ultrasons, llums, micro:bit, dos motors amb rodes i, a sota, tres sensors de línia.|Ultrasonidos, luces, micro:bit, dos motores con ruedas y, debajo, tres sensores de línea.",
        nota: "Ensenya un Maqueen de veritat al costat de la projecció i gira'l per mostrar els sensors de línia de sota. Pregunta quines parts són sensors i quines actuadors.|Enseña un Maqueen de verdad al lado de la proyección y gíralo para mostrar los sensores de línea de debajo. Pregunta qué partes son sensores y cuáles actuadores." },
      { id: 's6', k: 'robo', t: "Un robot que sent|Un robot que siente", x: "Aquest programa mira amb els ultrasons i para el robot davant la caixa.|Este programa mira con los ultrasonidos y para el robot delante de la caja.",
        robo: { w: { w: 120, h: 50, bot: [15, 25, 90], walls: [[96, 8, 8, 34]] }, prog: 'forever{ if:dist<12{ stop:all } else{ run:all,fwd,150 } }' }, tip: "Abans d'executar-lo: xocarà o s'aturarà?|Antes de ejecutarlo: ¿chocará o se parará?",
        nota: "És el cicle en directe: els ultrasons senten, el programa decideix i els motors actuen. No cal explicar els blocs «per sempre» i «si»: els aprendran a la unitat 3.|Es el ciclo en directo: los ultrasonidos sienten, el programa decide y los motores actúan. No hace falta explicar los bloques «para siempre» y «si»: los aprenderán en la unidad 3." },
      { id: 's7', k: 'concepte', t: "Tres blocs per començar|Tres bloques para empezar", punts: ["Motor: engega els motors a una velocitat.|Motor: enciende los motores a una velocidad.", "Espera: deixa passar el temps (el robot continua fent el que feia).|Espera: deja pasar el tiempo (el robot sigue haciendo lo que hacía).", "Atura: para els motors.|Para: detiene los motores."],
        blocks: ["en iniciar|al iniciar", "motor els dos endavant a velocitat 150|motor los dos adelante a velocidad 150", "espera 3000 ms|espera 3000 ms", "atura el motor els dos|para el motor los dos"],
        nota: "Remarca que tot va dins d'«en iniciar» i que el robot ho fa de dalt a baix, una sola vegada. Recorda que 1000 ms són 1 segon.|Remarca que todo va dentro de «al iniciar» y que el robot lo hace de arriba abajo, una sola vez. Recuerda que 1000 ms son 1 segundo." },
      { id: 's8', k: 'robo', t: "On s'aturarà?|¿Dónde se parará?", x: "Endavant a velocitat 150 durant 4 segons, i atura. Arribarà a la meta?|Adelante a velocidad 150 durante 4 segundos, y para. ¿Llegará a la meta?",
        robo: { w: { w: 120, h: 50, bot: [15, 25, 90], zones: [{ id: 'm', r: [66, 13, 24, 24], col: 'green', label: 'META|META' }] }, prog: 'start{ run:all,fwd,150 wait:4000 stop:all }' },
        nota: "Que tothom assenyali amb el dit on creu que s'aturarà abans d'executar. S'atura dins la meta: en 4 segons fa uns 62 cm.|Que todos señalen con el dedo dónde creen que se parará antes de ejecutar. Se para dentro de la meta: en 4 segundos hace unos 62 cm." },
      { id: 's9', k: 'robo', t: "Esperar no vol dir parar|Esperar no quiere decir parar", x: "Aquest programa no té cap «atura». Què passarà quan s'acabi?|Este programa no tiene ningún «para». ¿Qué pasará cuando se termine?",
        robo: { w: { w: 120, h: 50, bot: [15, 25, 90], walls: [[104, 8, 8, 34]], time: 7 }, prog: 'start{ run:all,fwd,150 wait:2000 }' },
        nota: "Molts diran que el robot s'atura sol al cap de 2 segons. Executa-ho: els motors continuen fins a la caixa. És l'error més habitual de la unitat.|Muchos dirán que el robot se para solo a los 2 segundos. Ejecútalo: los motores siguen hasta la caja. Es el error más habitual de la unidad." },
      { id: 's10', k: 'activitat', t: "El robot de tres persones|El robot de tres personas", timer: 9, punts: ["Sensors: mira i explica què veu.|Sensores: mira y explica lo que ve.", "Cervell: decideix i ensenya una targeta d'ordre.|Cerebro: decide y enseña una tarjeta de orden.", "Motors: ulls tancats, fa només el que diu la targeta.|Motores: ojos cerrados, hace solo lo que dice la tarjeta.", "Missió: aturar-se a un pam de la caixa. Després, canvieu els papers.|Misión: pararse a un palmo de la caja. Después, cambiad los papeles."],
        nota: "Els motors caminen a poc a poc amb les mans una mica endavant. Si toca la caixa no passa res: és un error del robot, i el revisarem.|Los motores caminan despacio con las manos un poco hacia delante. Si toca la caja no pasa nada: es un error del robot, y lo revisaremos." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 11, punts: ["Obre la sessió «Robots al nostre voltant».|Abre la sesión «Robots a nuestro alrededor».", "Mira les demos de «Descobreix».|Mira las demos de «Descubre».", "A «On acabarà?», tria abans d'executar.|En «¿Dónde terminará?», elige antes de ejecutar.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas «El robot de dues persones», que toquin «Ho hem fet!»: ja l'hem fet a classe.|En el paso «El robot de dos personas», que toquen «¡Lo hemos hecho!»: ya lo hemos hecho en clase." },
      { id: 's12', k: 'repte', t: "Reptes: el primer programa|Retos: el primer programa", timer: 8, punts: ["1. La primera meta|1. La primera meta", "2. El robot que no s'atura|2. El robot que no se para", "3. La meta llunyana|3. La meta lejana"],
        nota: "Si algú s'encalla, pregunta: s'ha quedat curt o s'ha passat? El número que cal canviar gairebé sempre és l'espera.|Si alguien se atasca, pregunta: ¿se ha quedado corto o se ha pasado? El número que hay que cambiar casi siempre es la espera." },
      { id: 's13', k: 'activitat', t: "Al Maqueen de veritat|Al Maqueen de verdad", timer: 12, punts: ["MakeCode: nou projecte → Extensions → «maqueen».|MakeCode: nuevo proyecto → Extensiones → «maqueen».", "JavaScript → enganxa el codi → Descarrega.|JavaScript → pega el código → Descarga.", "Cable fora, robot a terra i encén-lo.|Cable fuera, robot en el suelo y enciéndelo.", "Marca on s'atura i mesura-ho.|Marca dónde se para y mídelo."],
        code: "Maqueen_V5.I2CInit()\nMaqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 150)\nbasic.pause(3000)\nMaqueen_V5.motorStop(Maqueen_V5.Motors.All)",
        nota: "Al simulador, aquest programa fa uns 46 cm. Apunteu a la pissarra el resultat de cada grup: veureu que tots els robots no fan exactament el mateix.|En el simulador, este programa hace unos 46 cm. Apuntad en la pizarra el resultado de cada grupo: veréis que no todos los robots hacen exactamente lo mismo." },
      { id: 's14', k: 'concepte', t: "Seguretat amb el robot|Seguridad con el robot", punts: ["El robot sempre a terra (o en una taula amb vora).|El robot siempre en el suelo (o en una mesa con borde).", "Desconnecta el cable USB abans d'encendre'l.|Desconecta el cable USB antes de encenderlo.", "Apaga'l per agafar-lo; mans lluny de les rodes.|Apágalo para cogerlo; manos lejos de las ruedas.", "El pilot és l'únic que l'encén i l'apaga.|El piloto es el único que lo enciende y lo apaga."],
        nota: "Deixa aquesta diapositiva projectada durant tota l'activitat amb el robot. Si un robot cau d'una taula sense vora, es pot trencar la micro:bit.|Deja esta diapositiva proyectada durante toda la actividad con el robot. Si un robot cae de una mesa sin borde, se puede romper la micro:bit." },
      { id: 's15', k: 'activitat', t: "Crea: el bus del taller|Crea: el autobús del taller", timer: 5, x: "Una parada a la zona groga i el final a la verda. Tu tries les velocitats i els temps.|Una parada en la zona amarilla y el final en la verde. Tú eliges las velocidades y los tiempos.",
        nota: "Celebra que hi hagi programes diferents que funcionen: un problema pot tenir moltes solucions bones.|Celebra que haya programas diferentes que funcionan: un problema puede tener muchas soluciones buenas." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un robot sent, pensa i actua.|Un robot siente, piensa y actúa.", "El cervell del Maqueen és la micro:bit.|El cerebro del Maqueen es la micro:bit.", "Motor, espera i atura: sense «atura», no para.|Motor, espera y para: sin «para», no se detiene."],
        nota: "Torna a la votació del principi: algú canviaria el seu vot? Per què?|Vuelve a la votación del principio: ¿alguien cambiaría su voto? ¿Por qué?" },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Les tres coses que fa un robot i un sensor.|Las tres cosas que hace un robot y un sensor.", "Què passa si falta el bloc «atura»?|¿Qué pasa si falta el bloque «para»?"],
        nota: "Fes una pregunta a cada alumne/a a la porta i anota qui necessita més suport amb l'espera i l'atura.|Haz una pregunta a cada alumno/a en la puerta y anota quién necesita más apoyo con la espera y el para." }
    ],
    print: [
      { id: 'p1', t: "El robot de tres persones|El robot de tres personas", k: 'targetes',
        intro: "Un paquet per grup de 3. Les tres primeres són els rols; la resta, les ordres que mostra el cervell.|Un paquete por grupo de 3. Las tres primeras son los roles; el resto, las órdenes que muestra el cerebro.",
        items: [
          { t: "Sensors 👀|Sensores 👀", n: 1 },
          { t: "Cervell 🧠|Cerebro 🧠", n: 1 },
          { t: "Motors ⚙️|Motores ⚙️", n: 1 },
          { t: "Endavant ⬆|Adelante ⬆", n: 3 },
          { t: "Atura't ✋|Para ✋", n: 3 },
          { t: "Gira ↻|Gira ↻", n: 2 }
        ] },
      { id: 'p2', t: "El primer programa al Maqueen|El primer programa en el Maqueen", k: 'codi',
        intro: "A makecode.microbit.org: nou projecte → Extensions → busca «maqueen» → JavaScript → enganxa el codi → Descarrega. Després, cable fora i robot a terra!|En makecode.microbit.org: nuevo proyecto → Extensiones → busca «maqueen» → JavaScript → pega el código → Descarga. Después, ¡cable fuera y robot en el suelo!",
        items: [
          { t: "Endavant 3 segons i atura|Adelante 3 segundos y para", prog: 'start{ run:all,fwd,150 wait:3000 stop:all }' },
          { t: "Fins a la meta (ajusteu l'espera al vostre robot)|Hasta la meta (ajustad la espera a vuestro robot)", prog: 'start{ run:all,fwd,150 wait:4300 stop:all }' }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Motors i velocitat ---------- */
  'k1-2': {
    obj: [
      "L'alumne/a explica que la velocitat del motor va de 0 a 255 i relaciona un número més gran amb més centímetres cada segon.|El alumno/a explica que la velocidad del motor va de 0 a 255 y relaciona un número más grande con más centímetros cada segundo.",
      "L'alumne/a descobreix la zona morta (per sota de 30 el motor no es mou) al simulador i la busca al robot de veritat.|El alumno/a descubre la zona muerta (por debajo de 30 el motor no se mueve) en el simulador y la busca en el robot de verdad.",
      "L'alumne/a fa anar el robot endavant i enrere i canvia la velocitat enmig d'un camí.|El alumno/a hace ir el robot adelante y atrás y cambia la velocidad en medio de un camino.",
      "L'alumne/a mesura quant avança el Maqueen real en 2 segons a diferents velocitats i ho compara amb el simulador.|El alumno/a mide cuánto avanza el Maqueen real en 2 segundos a diferentes velocidades y lo compara con el simulador."
    ],
    comp: [
      "Competència digital (CD5): programar moviments canviant els valors dels blocs|Competencia digital (CD5): programar movimientos cambiando los valores de los bloques",
      "Competència STEM (STEM2): fer una prova justa, canviant una sola cosa cada vegada, i mesurar-ne el resultat|Competencia STEM (STEM2): hacer una prueba justa, cambiando una sola cosa cada vez, y medir su resultado",
      "Matemàtiques: mesura, taules de dades i comparació de números|Matemáticas: medida, tablas de datos y comparación de números",
      "Ciències: força, fregament i inèrcia en les màquines|Ciencias: fuerza, rozamiento e inercia en las máquinas"
    ],
    vocab: [
      ["Velocitat del motor|Velocidad del motor", "El número de 0 a 255 que diu com de pressa gira el motor.|El número de 0 a 255 que dice lo deprisa que gira el motor."],
      ["Zona morta|Zona muerta", "Les velocitats massa baixes (per sota de 30) amb què el motor no té prou força per moure el robot.|Las velocidades demasiado bajas (por debajo de 30) con las que el motor no tiene fuerza suficiente para mover el robot."],
      ["Fregament|Rozamiento", "La força que frena les rodes i els engranatges quan es mouen.|La fuerza que frena las ruedas y los engranajes cuando se mueven."],
      ["Inèrcia|Inercia", "Un objecte tarda una mica a arrencar i a parar: no canvia de velocitat de cop.|Un objeto tarda un poco en arrancar y en parar: no cambia de velocidad de golpe."],
      ["Prova justa|Prueba justa", "Una prova en què canviem una sola cosa i deixem igual tota la resta.|Una prueba en la que cambiamos una sola cosa y dejamos igual todo lo demás."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Motors i velocitat»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Motores y velocidad»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit Maqueen per grup de 3-4, amb cable USB i piles carregades|Un kit Maqueen por grupo de 3-4, con cable USB y pilas cargadas",
        "Una cinta mètrica i cinta de pintor per grup, i un cronòmetre (pot ser un mòbil)|Una cinta métrica y cinta de pintor por grupo, y un cronómetro (puede ser un móvil)"
      ],
      imprimir: ["Fitxa: el banc de proves|Ficha: el banco de pruebas", "Codi: zona morta i velocitat|Código: zona muerta y velocidad"],
      prep: [
        "Provar abans amb un kit a partir de quina velocitat es mou el vostre robot: així tindreu una referència (al simulador és 30; als robots reals canvia una mica).|Probar antes con un kit a partir de qué velocidad se mueve vuestro robot: así tendréis una referencia (en el simulador es 30; en los robots reales cambia un poco).",
        "Preparar un passadís lliure per al banc de proves humà, amb una línia de sortida de cinta.|Preparar un pasillo libre para el banco de pruebas humano, con una línea de salida de cinta.",
        "Marcar per a cada grup una línia de sortida a terra amb un metre enganxat al costat.|Marcar para cada grupo una línea de salida en el suelo con un metro pegado al lado.",
        "Imprimir una fitxa per grup i el codi per a cada kit.|Imprimir una ficha por grupo y el código para cada kit."
      ]
    },
    plan: [
      { min: 4, t: "Repàs i pregunta del dia|Repaso y pregunta del día", fase: 'inici',
        fa: "Recordeu la sessió anterior amb la diapositiva de repàs: què fa l'espera i què passa sense «atura». Després, llança la pregunta del dia: què vol dir exactament «velocitat 150»? Recull hipòtesis sense corregir-les.|Recordad la sesión anterior con la diapositiva de repaso: qué hace la espera y qué pasa sin «para». Después, lanza la pregunta del día: ¿qué quiere decir exactamente «velocidad 150»? Recoge hipótesis sin corregirlas.",
        diu: ["Qui recorda per què el robot xocava amb la caixa?|¿Quién recuerda por qué el robot chocaba con la caja?",
          "Velocitat 150: són quilòmetres per hora? Centímetres? Una altra cosa?|Velocidad 150: ¿son kilómetros por hora? ¿Centímetros? ¿Otra cosa?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 9, t: "La velocitat i la zona morta|La velocidad y la zona muerta", fase: 'teoria',
        fa: "Explica la gràfica de velocitats: el número no són centímetres, però com més gran, més centímetres cada segon. Presenta la zona morta i, si pots, fes sentir el brunzit d'un Maqueen real a velocitat 20 sense que es mogui. Executa les demos d'endavant i enrere i dels canvis de marxa, i acaba amb la predicció de la diapositiva 7.|Explica la gráfica de velocidades: el número no son centímetros, pero cuanto más grande, más centímetros cada segundo. Presenta la zona muerta y, si puedes, haz oír el zumbido de un Maqueen real a velocidad 20 sin que se mueva. Ejecuta las demos de adelante y atrás y de los cambios de marcha, y termina con la predicción de la diapositiva 7.",
        diu: ["A 255, quants centímetres fa cada segon? I a 100?|A 255, ¿cuántos centímetros hace cada segundo? ¿Y a 100?",
          "Sentiu el motor? Rep corrent, però no té prou força per moure el robot.|¿Oís el motor? Recibe corriente, pero no tiene fuerza suficiente para mover el robot.",
          "Si torna enrere el mateix temps, on acabarà?|Si vuelve atrás el mismo tiempo, ¿dónde terminará?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 9, t: "El banc de proves humà|El banco de pruebas humano", fase: 'desconnectat',
        fa: "Grups de 3 al passadís: robot, cronometrador/a i mesurador/a. El robot camina 5 segons a «velocitat» 60 (passos de formiga), 150 (caminar normal) i 255 (caminar molt de pressa, sense córrer), sempre des de la mateixa línia. El mesurador/a marca on arriba i ho apunten a la fitxa. Al final proven la velocitat 20: el robot no es mou. Pregunta què han canviat i què han deixat igual (el temps): és una prova justa.|Grupos de 3 en el pasillo: robot, cronometrador/a y medidor/a. El robot camina 5 segundos a «velocidad» 60 (pasos de hormiga), 150 (caminar normal) y 255 (caminar muy deprisa, sin correr), siempre desde la misma línea. El medidor/a marca dónde llega y lo apuntan en la ficha. Al final prueban la velocidad 20: el robot no se mueve. Pregunta qué han cambiado y qué han dejado igual (el tiempo): es una prueba justa.",
        diu: ["Sempre 5 segons: només canvia la velocitat.|Siempre 5 segundos: solo cambia la velocidad.",
          "Caminar de pressa, no córrer: un robot no fa salts!|Caminar deprisa, no correr: ¡un robot no da saltos!",
          "Amb més velocitat i el mateix temps, què passa amb la distància?|Con más velocidad y el mismo tiempo, ¿qué pasa con la distancia?"],
        slides: ['s8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 11, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. Al pas «El banc de proves humà», que toquin «Ho hem fet!». A les dues preguntes «On acabarà?», que pensin abans de triar.|Cada alumno/a avanza hasta la pausa activa. En el paso «El banco de pruebas humano», que toquen «¡Lo hemos hecho!». En las dos preguntas «¿Dónde terminará?», que piensen antes de elegir.",
        diu: ["Endavant 3 segons i enrere 1,5: quina part del camí desfà?|Adelante 3 segundos y atrás 1,5: ¿qué parte del camino deshace?",
          "Per què el programa de la Laia no es mou?|¿Por qué el programa de Laia no se mueve?"],
        slides: ['s9'], app: "De «Recorda» fins a «Investiga»: la pregunta de l'espera, la història del laboratori, les quatre targetes de «Descobreix», ordenar les velocitats, el banc de proves (ja fet), els dos «On acabarà?», la pregunta de la velocitat 20 i el bloc que falla.|De «Recuerda» hasta «Investiga»: la pregunta de la espera, la historia del laboratorio, las cuatro tarjetas de «Descubre», ordenar las velocidades, el banco de pruebas (ya hecho), los dos «¿Dónde terminará?», la pregunta de la velocidad 20 y el bloque que falla.", org: "Individual|Individual" },
      { min: 12, t: "La zona morta i la velocitat del nostre Maqueen|La zona muerta y la velocidad de nuestro Maqueen", fase: 'robot',
        fa: "Grups de 3-4 per kit, amb el codi imprès. Primer, la zona morta: descarreguen el programa a velocitat 30 i, si el robot no es mou, proven 35, 40, 45… fins que arrenca; apunten el número a la fitxa. Després, la velocitat: amb el robot a la línia de sortida i el metre al costat, proven 2 segons a 100, a 150 i a 255 i mesuren on s'atura. Comparen amb el simulador (uns 18, 31 i 58 cm). Recorda les normes: cable fora, robot a terra, el pilot l'encén i l'apaga.|Grupos de 3-4 por kit, con el código impreso. Primero, la zona muerta: descargan el programa a velocidad 30 y, si el robot no se mueve, prueban 35, 40, 45… hasta que arranca; apuntan el número en la ficha. Después, la velocidad: con el robot en la línea de salida y el metro al lado, prueban 2 segundos a 100, a 150 y a 255 y miden dónde se para. Comparan con el simulador (unos 18, 31 y 58 cm). Recuerda las normas: cable fuera, robot en el suelo, el piloto lo enciende y lo apaga.",
        diu: ["A partir de quin número es mou el vostre robot? És el mateix que el del grup del costat?|¿A partir de qué número se mueve vuestro robot? ¿Es el mismo que el del grupo de al lado?",
          "Canvieu només la velocitat: l'espera sempre de 2000 ms.|Cambiad solo la velocidad: la espera siempre de 2000 ms.",
          "El vostre robot va més ràpid o més lent que el del simulador?|¿Vuestro robot va más rápido o más lento que el del simulador?"],
        slides: ['s10', 's11'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers|Grupos de 3-4 por kit con papeles" },
      { min: 9, t: "Reptes: velocitat i direcció|Retos: velocidad y dirección", fase: 'ordinador',
        fa: "Feu la pausa activa i deixa'ls fer els quatre reptes. Al de la contrarellotge, pregunta quina és la velocitat màxima abans que la busquin. Al del cargol, és una petita investigació: que provin números i apuntin quin és el més petit que fa moure el robot.|Haced la pausa activa y deja que hagan los cuatro retos. En el de la contrarreloj, pregunta cuál es la velocidad máxima antes de que la busquen. En el del caracol, es una pequeña investigación: que prueben números y apunten cuál es el más pequeño que hace mover el robot.",
        diu: ["Al repte d'anar i tornar no cal girar: mira la direcció del bloc.|En el reto de ir y volver no hace falta girar: mira la dirección del bloque.",
          "Quin és el número més gran que pots posar a la velocitat?|¿Cuál es el número más grande que puedes poner en la velocidad?",
          "El cargol: quin és el número més petit que el fa moure? Coincideix amb el del vostre robot?|El caracol: ¿cuál es el número más pequeño que lo hace mover? ¿Coincide con el de vuestro robot?"],
        slides: ['s12'], app: "«Pausa activa» i els quatre reptes: massa lent, anar i tornar, la contrarellotge i el cargol.|«Pausa activa» y los cuatro retos: demasiado lento, ir y volver, la contrarreloj y el caracol.", org: "Individual|Individual" },
      { min: 4, t: "Crea: el carrer de l'escola|Crea: la calle del colegio", fase: 'crea',
        fa: "Cada alumne/a programa el carrer de l'escola: a poc a poc davant l'escola i de pressa després. Quan funcioni, que el desin. Comenta que és el que fan els cotxes de veritat a les zones escolars.|Cada alumno/a programa la calle del colegio: despacio delante del colegio y deprisa después. Cuando funcione, que lo guarden. Comenta que es lo que hacen los coches de verdad en las zonas escolares.",
        diu: ["Quants blocs de motor necessites? Per què?|¿Cuántos bloques de motor necesitas? ¿Por qué?",
          "On ha de començar el tram ràpid?|¿Dónde tiene que empezar el tramo rápido?"],
        slides: ['s13'], app: "Pas «Crea»: El carrer de l'escola.|Paso «Crea»: La calle del colegio.", org: "Individual|Individual" },
      { min: 2, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum i fes les preguntes del tiquet a la porta.|Repasa el resumen y haz las preguntas del ticket en la puerta.",
        diu: ["Velocitat 255: què vol dir? I velocitat 20?|Velocidad 255: ¿qué quiere decir? ¿Y velocidad 20?"],
        slides: ['s14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa velocitats més grans de 255 (300, 1000) pensant que anirà més ràpid.|Pone velocidades mayores de 255 (300, 1000) pensando que irá más rápido.",
        "El bloc no deixa passar de 255: és el màxim del motor. Pregunta: com faries que arribés més lluny sense passar de 255?|El bloque no deja pasar de 255: es el máximo del motor. Pregunta: ¿cómo harías que llegara más lejos sin pasar de 255?"],
      ["Creu que velocitat 20 és «molt lent» i espera que el robot es mogui.|Cree que velocidad 20 es «muy lento» y espera que el robot se mueva.",
        "Que ho provi al robot de veritat i escolti el brunzit: el motor rep corrent, però no té prou força. Que busqui el número mínim que el fa moure.|Que lo pruebe en el robot de verdad y escuche el zumbido: el motor recibe corriente, pero no tiene fuerza suficiente. Que busque el número mínimo que lo hace mover."],
      ["Al repte d'anar i tornar, intenta girar el robot en lloc de fer-lo anar enrere.|En el reto de ir y volver, intenta girar el robot en lugar de hacerlo ir hacia atrás.",
        "Recorda-li el camp de direcció del bloc del motor: endavant o enrere. En aquest repte no cal girar.|Recuérdale el campo de dirección del bloque del motor: adelante o atrás. En este reto no hace falta girar."],
      ["Canvia l'espera i la velocitat alhora i no sap quin canvi ha fet efecte.|Cambia la espera y la velocidad a la vez y no sabe qué cambio ha hecho efecto.",
        "Prova justa: una sola cosa cada vegada. Que apunti què ha canviat i què ha passat.|Prueba justa: una sola cosa cada vez. Que apunte qué ha cambiado y qué ha pasado."],
      ["Al robot de veritat, les distàncies no coincideixen amb les del simulador.|En el robot de verdad, las distancias no coinciden con las del simulador.",
        "És normal: depèn de les piles i del terra. Que apuntin la diferència: la farem servir per calibrar a la unitat 2.|Es normal: depende de las pilas y del suelo. Que apunten la diferencia: la usaremos para calibrar en la unidad 2."]
    ],
    diff: {
      mes: "Fer a la fitxa una gràfica amb les distàncies del robot real (la velocitat a baix i els centímetres a l'esquerra) i comparar-la amb la del simulador. Trobar la velocitat exacta en què arrenca el seu robot, de 2 en 2.|Hacer en la ficha una gráfica con las distancias del robot real (la velocidad abajo y los centímetros a la izquierda) y compararla con la del simulador. Encontrar la velocidad exacta en la que arranca su robot, de 2 en 2.",
      menys: "Treballar només dues velocitats (100 i 255) i fer el repte «Massa lent» dient el número en veu alta. Tenir a la vista la gràfica de velocitats de la diapositiva 3.|Trabajar solo dos velocidades (100 y 255) y hacer el reto «Demasiado lento» diciendo el número en voz alta. Tener a la vista la gráfica de velocidades de la diapositiva 3."
    },
    aval: {
      ticket: ["Què vol dir velocitat 255? I velocitat 20?|¿Qué quiere decir velocidad 255? ¿Y velocidad 20?",
        "Com fas que el robot torni enrere fins al lloc d'on ha sortit?|¿Cómo haces que el robot vuelva atrás hasta el sitio del que ha salido?"],
      rubric: [
        ["Velocitat de 0 a 255|Velocidad de 0 a 255", "Relaciona el número amb els centímetres per segon i tria la velocitat segons el repte.|Relaciona el número con los centímetros por segundo y elige la velocidad según el reto.", "Sap que més gran és més ràpid, però tria els números a l'atzar.|Sabe que más grande es más rápido, pero elige los números al azar."],
        ["Zona morta|Zona muerta", "Explica per què el robot no es mou per sota de 30 i ho comprova al robot de veritat.|Explica por qué el robot no se mueve por debajo de 30 y lo comprueba en el robot de verdad.", "Observa que no es mou, però encara no ho explica.|Observa que no se mueve, pero todavía no lo explica."],
        ["Mesurar i comparar|Medir y comparar", "Mesura amb el metre, fa una prova justa i compara les dades amb el simulador.|Mide con el metro, hace una prueba justa y compara los datos con el simulador.", "Mesura amb ajuda, però no compara els resultats.|Mide con ayuda, pero no compara los resultados."]
      ]
    },
    casa: "A casa, feu el banc de proves humà amb tres mitjons i el mòbil com a cronòmetre. Proveu també d'empènyer una capsa de llibres amb molt poca força: no es mou! S'assembla a la zona morta.|En casa, haced el banco de pruebas humano con tres calcetines y el móvil como cronómetro. Probad también a empujar una caja de libros con muy poca fuerza: ¡no se mueve! Se parece a la zona muerta.",
    slides: [
      { id: 's1', k: 'portada', t: "Motors i velocitat|Motores y velocidad", x: "Què vol dir «velocitat 150»? I per què, de vegades, el robot no es mou?|¿Qué quiere decir «velocidad 150»? ¿Y por qué, a veces, el robot no se mueve?",
        nota: "Presenta l'objectiu: avui mesurarem la velocitat dels robots de veritat.|Presenta el objetivo: hoy mediremos la velocidad de los robots de verdad." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", punts: ["Què fa el bloc «espera»?|¿Qué hace el bloque «espera»?", "Què passa si falta «atura»?|¿Qué pasa si falta «para»?", "On s'aturava el vostre robot de veritat?|¿Dónde se paraba vuestro robot de verdad?"],
        nota: "Recupera els resultats de la sessió anterior (els centímetres de cada grup) si els vau apuntar.|Recupera los resultados de la sesión anterior (los centímetros de cada grupo) si los apuntasteis." },
      { id: 's3', k: 'anim', t: "Un número de 0 a 255|Un número de 0 a 255", anim: 'k1speed', x: "A 255, uns 29 cm cada segon; a 150, uns 15; a 100, uns 9.|A 255, unos 29 cm cada segundo; a 150, unos 15; a 100, unos 9.",
        nota: "Si pregunten per què 255: la velocitat viatja fins al xip dels motors en un byte, 8 bits, que compten de 0 a 255.|Si preguntan por qué 255: la velocidad viaja hasta el chip de los motores en un byte, 8 bits, que cuentan de 0 a 255." },
      { id: 's4', k: 'anim', t: "La zona morta|La zona muerta", anim: 'k1dead', x: "Per sota de 30, el motor no té prou força per vèncer el fregament.|Por debajo de 30, el motor no tiene fuerza suficiente para vencer el rozamiento.",
        nota: "Si tens un Maqueen a mà, programa'l a velocitat 20: se sent el brunzit, però no es mou. És una bona manera de fer-ho creïble.|Si tienes un Maqueen a mano, prográmalo a velocidad 20: se oye el zumbido, pero no se mueve. Es una buena manera de hacerlo creíble." },
      { id: 's5', k: 'robo', t: "Endavant i enrere|Adelante y atrás", x: "3 segons endavant i 3 segons enrere a la mateixa velocitat.|3 segundos adelante y 3 segundos atrás a la misma velocidad.",
        robo: { w: { w: 120, h: 50, bot: [20, 25, 90], zones: [{ id: 'b', r: [8, 13, 24, 24], col: 'blue', label: 'BASE|BASE' }] }, prog: 'start{ run:all,fwd,150 wait:3000 stop:all wait:500 run:all,back,150 wait:3000 stop:all }' },
        nota: "Abans d'executar, pregunta on acabarà. Torna a la base: el camí d'anada i el de tornada són iguals.|Antes de ejecutar, pregunta dónde terminará. Vuelve a la base: el camino de ida y el de vuelta son iguales." },
      { id: 's6', k: 'robo', t: "Canvis de marxa|Cambios de marcha", x: "Velocitat 60 per la zona groga i, després, 255.|Velocidad 60 por la zona amarilla y, después, 255.",
        robo: { w: { w: 140, h: 50, bot: [15, 25, 90], zones: [{ id: 'e', r: [28, 9, 30, 32], col: 'yellow', label: 'LENT|LENTO' }] }, prog: 'start{ run:all,fwd,60 wait:3500 run:all,fwd,255 wait:2500 stop:all }' },
        nota: "Fixeu-vos que el robot no s'atura entre els dos blocs de motor: només accelera. També tarda una mica a frenar: és la inèrcia.|Fijaos en que el robot no se para entre los dos bloques de motor: solo acelera. También tarda un poco en frenar: es la inercia." },
      { id: 's7', k: 'robo', t: "Prediu: 2 segons a 255|Predice: 2 segundos a 255", x: "On s'aturarà: a la A, a la B o a la C?|¿Dónde se parará: en la A, en la B o en la C?",
        robo: { w: { w: 120, h: 60, bot: [15, 30, 90], marks: { A: [33, 30], B: [52, 30], C: [74, 30] } }, prog: 'start{ run:all,fwd,255 wait:2000 stop:all }' },
        nota: "Resposta: C, a uns 58 cm. Pregunta com ho han pensat: «29 cm cada segon, dos segons…».|Respuesta: C, a unos 58 cm. Pregunta cómo lo han pensado: «29 cm cada segundo, dos segundos…»." },
      { id: 's8', k: 'activitat', t: "El banc de proves humà|El banco de pruebas humano", timer: 9, punts: ["Robot, cronometrador/a i mesurador/a.|Robot, cronometrador/a y medidor/a.", "5 segons a velocitat 60, 150 i 255.|5 segundos a velocidad 60, 150 y 255.", "Sempre des de la mateixa línia.|Siempre desde la misma línea.", "Apunteu les distàncies a la fitxa.|Apuntad las distancias en la ficha."],
        nota: "Velocitat 255 vol dir caminar molt de pressa, mai córrer. Al final, proveu velocitat 20: el robot es queda quiet.|Velocidad 255 quiere decir caminar muy deprisa, nunca correr. Al final, probad velocidad 20: el robot se queda quieto." },
      { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 11, punts: ["Obre la sessió «Motors i velocitat».|Abre la sesión «Motores y velocidad».", "Mira les demos de «Descobreix».|Mira las demos de «Descubre».", "Pensa abans de triar a «On acabarà?».|Piensa antes de elegir en «¿Dónde terminará?».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas «El banc de proves humà», que toquin «Ho hem fet!».|En el paso «El banco de pruebas humano», que toquen «¡Lo hemos hecho!»." },
      { id: 's10', k: 'activitat', t: "La zona morta del nostre robot|La zona muerta de nuestro robot", timer: 12, punts: ["Velocitat 30 durant 2 segons: es mou?|Velocidad 30 durante 2 segundos: ¿se mueve?", "Si no, 35, 40, 45… fins que arrenqui.|Si no, 35, 40, 45… hasta que arranque.", "Després, 2 segons a 100, 150 i 255.|Después, 2 segundos a 100, 150 y 255.", "Mesureu i apunteu-ho a la fitxa.|Medid y apuntadlo en la ficha."],
        code: "Maqueen_V5.I2CInit()\nMaqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 30)\nbasic.pause(2000)\nMaqueen_V5.motorStop(Maqueen_V5.Motors.All)",
        nota: "Només cal canviar el número 30 del codi. Cable fora, robot a terra i el pilot l'encén. Si un robot arrenca amb 30, que provin 25 i 20.|Solo hay que cambiar el número 30 del código. Cable fuera, robot en el suelo y el piloto lo enciende. Si un robot arranca con 30, que prueben 25 y 20." },
      { id: 's11', k: 'concepte', t: "Simulador i robot de veritat|Simulador y robot de verdad", punts: ["2 segons a 100: uns 18 cm.|2 segundos a 100: unos 18 cm.", "2 segons a 150: uns 31 cm.|2 segundos a 150: unos 31 cm.", "2 segons a 255: uns 58 cm.|2 segundos a 255: unos 58 cm.", "Zona morta al simulador: per sota de 30.|Zona muerta en el simulador: por debajo de 30."],
        nota: "Són les dades del simulador. Apunteu al costat les del vostre robot: la diferència és normal i a la unitat 2 aprendrem a calibrar-la.|Son los datos del simulador. Apuntad al lado los de vuestro robot: la diferencia es normal y en la unidad 2 aprenderemos a calibrarla." },
      { id: 's12', k: 'repte', t: "Reptes: velocitat i direcció|Retos: velocidad y dirección", timer: 9, punts: ["1. Massa lent!|1. ¡Demasiado lento!", "2. Anar i tornar|2. Ir y volver", "3. Contrarellotge|3. Contrarreloj", "4. El repte del cargol|4. El reto del caracol"],
        nota: "Al repte del cargol, la resposta és la zona morta: per sota de 30 no es mou, i per sobre de 65 surt de la zona.|En el reto del caracol, la respuesta es la zona muerta: por debajo de 30 no se mueve, y por encima de 65 sale de la zona." },
      { id: 's13', k: 'activitat', t: "Crea: el carrer de l'escola|Crea: la calle del colegio", timer: 4, x: "A 100 o menys davant de l'escola i a 200 o més després, fins a la meta.|A 100 o menos delante del colegio y a 200 o más después, hasta la meta.",
        nota: "Hi ha moltes solucions: pot fer tot el tram lent a 60 o a 100, i el ràpid a 200 o a 255.|Hay muchas soluciones: puede hacer todo el tramo lento a 60 o a 100, y el rápido a 200 o a 255." },
      { id: 's14', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["La velocitat va de 0 a 255.|La velocidad va de 0 a 255.", "Per sota de 30, zona morta: no es mou.|Por debajo de 30, zona muerta: no se mueve.", "Endavant i enrere, i canvis de velocitat pel camí.|Adelante y atrás, y cambios de velocidad por el camino."],
        nota: "Recorda que la diferència entre el simulador i el robot real ens servirà a la unitat 2.|Recuerda que la diferencia entre el simulador y el robot real nos servirá en la unidad 2." },
      { id: 's15', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què vol dir velocitat 255? I 20?|¿Qué quiere decir velocidad 255? ¿Y 20?", "Com fas que el robot torni al lloc d'on ha sortit?|¿Cómo haces que el robot vuelva al sitio del que ha salido?"],
        nota: "Anota qui encara confon la velocitat amb la distància: ho treballarem a la unitat 2.|Anota quién todavía confunde la velocidad con la distancia: lo trabajaremos en la unidad 2." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: el banc de proves|Ficha: el banco de pruebas", k: 'fitxa',
        intro: "Apunteu els resultats del banc de proves humà (5 segons) i del Maqueen de veritat (2 segons).|Apuntad los resultados del banco de pruebas humano (5 segundos) y del Maqueen de verdad (2 segundos).",
        items: [
          { q: "Banc humà: on heu arribat en 5 segons a velocitat 60, 150 i 255? (passos o cm)|Banco humano: ¿dónde habéis llegado en 5 segundos a velocidad 60, 150 y 255? (pasos o cm)", sol: "Resposta lliure: a 60 la distància més curta i a 255 la més llarga.|Respuesta libre: a 60 la distancia más corta y a 255 la más larga." },
          { q: "Què passa amb la distància quan augmenta la velocitat i el temps no canvia?|¿Qué pasa con la distancia cuando aumenta la velocidad y el tiempo no cambia?", sol: "Amb més velocitat i el mateix temps, la distància és més gran.|Con más velocidad y el mismo tiempo, la distancia es mayor." },
          { q: "Maqueen: velocitat més petita amb què es mou el vostre robot: ______|Maqueen: velocidad más pequeña con la que se mueve vuestro robot: ______", sol: "Depèn del robot i de les piles. Al simulador, a partir de 30.|Depende del robot y de las pilas. En el simulador, a partir de 30." },
          { q: "Maqueen, 2 segons: a 100 ____ cm · a 150 ____ cm · a 255 ____ cm|Maqueen, 2 segundos: a 100 ____ cm · a 150 ____ cm · a 255 ____ cm", sol: "Al simulador, uns 18 cm, 31 cm i 58 cm. Al robot real, una mica diferent.|En el simulador, unos 18 cm, 31 cm y 58 cm. En el robot real, un poco diferente." }
        ] },
      { id: 'p2', t: "Codi: zona morta i velocitat|Código: zona muerta y velocidad", k: 'codi',
        intro: "A MakeCode, amb l'extensió «maqueen». Canvieu només el número de la velocitat i deixeu l'espera igual: és una prova justa.|En MakeCode, con la extensión «maqueen». Cambiad solo el número de la velocidad y dejad la espera igual: es una prueba justa.",
        items: [
          { t: "Zona morta: proveu velocitats baixes|Zona muerta: probad velocidades bajas", prog: 'start{ run:all,fwd,30 wait:2000 stop:all }' },
          { t: "Velocitat: 2 segons i mesureu|Velocidad: 2 segundos y medid", prog: 'start{ run:all,fwd,150 wait:2000 stop:all }' },
          { t: "Endavant i enrere|Adelante y atrás", prog: 'start{ run:all,fwd,150 wait:2000 stop:all wait:500 run:all,back,150 wait:2000 stop:all }' }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Girar sobre si mateix ---------- */
  'k1-3': {
    obj: [
      "L'alumne/a explica que un robot de dues rodes gira quan les rodes van a velocitats diferents, cap al costat de la roda més lenta.|El alumno/a explica que un robot de dos ruedas gira cuando las ruedas van a velocidades diferentes, hacia el lado de la rueda más lenta.",
      "L'alumne/a programa un gir sobre si mateix (una roda endavant i l'altra enrere) i un gir en arc (amb una sola roda).|El alumno/a programa un giro sobre sí mismo (una rueda adelante y la otra atrás) y un giro en arco (con una sola rueda).",
      "L'alumne/a calcula l'espera per a 90° i 180° a velocitat 100 i combina trams i girs en una ruta.|El alumno/a calcula la espera para 90° y 180° a velocidad 100 y combina tramos y giros en una ruta.",
      "L'alumne/a calibra el gir de 90° del Maqueen de veritat i apunta l'espera que funciona amb el seu robot.|El alumno/a calibra el giro de 90° del Maqueen de verdad y apunta la espera que funciona con su robot."
    ],
    comp: [
      "Competència digital (CD5): programar girs i rutes amb diversos motors|Competencia digital (CD5): programar giros y rutas con varios motores",
      "Competència STEM (STEM2): calibrar un sistema provant, mesurant i ajustant|Competencia STEM (STEM2): calibrar un sistema probando, midiendo y ajustando",
      "Matemàtiques: angles (90°, 180°, 360°), mesura amb el transportador i proporcionalitat|Matemáticas: ángulos (90°, 180°, 360°), medida con el transportador y proporcionalidad",
      "Comunicació oral: descriure un gir des del punt de vista del robot|Comunicación oral: describir un giro desde el punto de vista del robot"
    ],
    vocab: [
      ["Tracció diferencial|Tracción diferencial", "Manera de girar fent anar les rodes a velocitats diferents, sense volant.|Manera de girar haciendo ir las ruedas a velocidades diferentes, sin volante."],
      ["Gir sobre si mateix|Giro sobre sí mismo", "Una roda endavant i l'altra enrere: el robot gira sense moure's del lloc.|Una rueda adelante y la otra atrás: el robot gira sin moverse del sitio."],
      ["Gir en arc|Giro en arco", "Només gira una roda: el robot fa una corba al voltant de la roda aturada.|Solo gira una rueda: el robot hace una curva alrededor de la rueda parada."],
      ["Angle|Ángulo", "Quant gira el robot, en graus: un quart de volta són 90°.|Cuánto gira el robot, en grados: un cuarto de vuelta son 90°."],
      ["Calibrar|Calibrar", "Provar, mesurar i ajustar els números fins que el robot fa el que volem.|Probar, medir y ajustar los números hasta que el robot hace lo que queremos."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Girar sobre si mateix»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Girar sobre sí mismo»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit Maqueen per grup de 3-4, amb cable USB i piles carregades|Un kit Maqueen por grupo de 3-4, con cable USB y pilas cargadas",
        "Cinta aïllant negra o cinta de pintor i un transportador per grup|Cinta aislante negra o cinta de pintor y un transportador por grupo"
      ],
      imprimir: ["Targetes: fes de rodes|Tarjetas: haz de ruedas", "Pista: la creu de calibratge|Pista: la cruz de calibración"],
      prep: [
        "Enganxar a terra, per a cada grup, una creu de cinta (dues tires de 40 cm que es creuen a 90°), o imprimir la pista de calibratge en A3.|Pegar en el suelo, para cada grupo, una cruz de cinta (dos tiras de 40 cm que se cruzan a 90°), o imprimir la pista de calibración en A3.",
        "Provar abans amb un kit el gir de la diapositiva 10 (590 ms a velocitat 100) per saber quant gira el vostre robot.|Probar antes con un kit el giro de la diapositiva 10 (590 ms a velocidad 100) para saber cuánto gira vuestro robot.",
        "Imprimir i retallar un paquet de targetes de rodes per grup de 3.|Imprimir y recortar un paquete de tarjetas de ruedas por grupo de 3."
      ]
    },
    plan: [
      { min: 4, t: "Repàs i pregunta del dia|Repaso y pregunta del día", fase: 'inici',
        fa: "Repasseu la zona morta i les velocitats amb la diapositiva 2. Després pregunta com gira un cotxe (amb el volant) i com ho deu fer el Maqueen, que no en té. Recull idees.|Repasad la zona muerta y las velocidades con la diapositiva 2. Después pregunta cómo gira un coche (con el volante) y cómo debe de hacerlo el Maqueen, que no tiene. Recoge ideas.",
        diu: ["Per sota de quina velocitat el motor no es mou?|¿Por debajo de qué velocidad el motor no se mueve?",
          "El Maqueen no té volant. Com creieu que gira?|El Maqueen no tiene volante. ¿Cómo creéis que gira?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 9, t: "Com gira un robot sense volant|Cómo gira un robot sin volante", fase: 'teoria',
        fa: "Explica la tracció diferencial amb l'animació: les fletxes verdes són endavant i les taronges, enrere. Executa la demo dels quatre quarts de volta i la del gir en arc, i compara'n el temps. Presenta el calibratge amb l'animació del transportador. Acaba amb la predicció de la diapositiva 7: abans d'executar, tothom assenyala amb el braç cap on mirarà el robot.|Explica la tracción diferencial con la animación: las flechas verdes son adelante y las naranjas, atrás. Ejecuta la demo de los cuatro cuartos de vuelta y la del giro en arco, y compara su tiempo. Presenta la calibración con la animación del transportador. Termina con la predicción de la diapositiva 7: antes de ejecutar, todos señalan con el brazo hacia dónde mirará el robot.",
        diu: ["Si l'esquerra va endavant i la dreta enrere, cap on gira?|Si la izquierda va adelante y la derecha atrás, ¿hacia dónde gira?",
          "Quin gir és més ràpid: sobre si mateix o en arc?|¿Qué giro es más rápido: sobre sí mismo o en arco?",
          "El robot mira a la dreta de la pantalla i gira a la seva dreta. Cap on mirarà?|El robot mira a la derecha de la pantalla y gira a su derecha. ¿Hacia dónde mirará?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 9, t: "Fes de rodes|Haz de ruedas", fase: 'desconnectat',
        fa: "Grups de 3: dues persones són les rodes (una al costat de l'altra, agafades del braç) i la tercera és el cervell, que ensenya una targeta per a cada roda. Missions en ordre: anar recte, girar sobre el lloc a la dreta, girar sobre el lloc a l'esquerra i fer un arc al voltant de la roda aturada. Al final, damunt la creu de cinta, han de fer un quart de volta exacte. Roteu els papers.|Grupos de 3: dos personas son las ruedas (una al lado de la otra, cogidas del brazo) y la tercera es el cerebro, que enseña una tarjeta para cada rueda. Misiones en orden: ir recto, girar sobre el sitio a la derecha, girar sobre el sitio a la izquierda y hacer un arco alrededor de la rueda parada. Al final, sobre la cruz de cinta, tienen que dar un cuarto de vuelta exacto. Rotad los papeles.",
        diu: ["Passets petits i sense estirar: les rodes van al mateix ritme.|Pasitos pequeños y sin tirar: las ruedas van al mismo ritmo.",
          "Quin gir ocupa menys espai?|¿Qué giro ocupa menos espacio?",
          "Cervell, quines dues targetes ensenyes per girar a l'esquerra?|Cerebro, ¿qué dos tarjetas enseñas para girar a la izquierda?"],
        slides: ['s8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 11, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. Al pas «Fes de rodes», que toquin «Ho hem fet!». Als dos «On acabarà?», si algú dubta, que giri el cos com el robot de la pantalla.|Cada alumno/a avanza hasta la pausa activa. En el paso «Haz de ruedas», que toquen «¡Lo hemos hecho!». En los dos «¿Dónde terminará?», si alguien duda, que gire el cuerpo como el robot de la pantalla.",
        diu: ["Posa't al lloc del robot: cap on tens la mà dreta?|Ponte en el lugar del robot: ¿hacia dónde tienes la mano derecha?",
          "Si només va la roda dreta, al voltant de quina roda gira?|Si solo va la rueda derecha, ¿alrededor de qué rueda gira?"],
        slides: ['s9'], app: "De «Recorda» fins a «Investiga»: la zona morta, la història del port, les quatre targetes de «Descobreix», la pregunta del costat, «Fes de rodes» (ja fet), ordenar el calibratge, els dos «On acabarà?» i el gir que es passa.|De «Recuerda» hasta «Investiga»: la zona muerta, la historia del puerto, las cuatro tarjetas de «Descubre», la pregunta del lado, «Haz de ruedas» (ya hecho), ordenar la calibración, los dos «¿Dónde terminará?» y el giro que se pasa.", org: "Individual|Individual" },
      { min: 13, t: "Calibrem el gir del nostre Maqueen|Calibramos el giro de nuestro Maqueen", fase: 'robot',
        fa: "Grups de 3-4 per kit. Descarreguen el gir de 90° (590 ms a velocitat 100) i posen el robot amb el centre de les rodes damunt el creuament de la creu, mirant cap a una tira. Després del gir, el robot hauria de mirar l'altra tira: el mesurador/a ho comprova amb el transportador. Si s'ha passat, escurcen l'espera; si no hi arriba, l'allarguen (de 20 en 20 ms). Quan surti 90°, apunten l'espera a la fitxa de la pista: <b>la faran servir al projecte de la sessió 4</b>. Si queda temps, calibren el gir de 180°.|Grupos de 3-4 por kit. Descargan el giro de 90° (590 ms a velocidad 100) y ponen el robot con el centro de las ruedas sobre el cruce de la cruz, mirando hacia una tira. Después del giro, el robot debería mirar la otra tira: el medidor/a lo comprueba con el transportador. Si se ha pasado, acortan la espera; si no llega, la alargan (de 20 en 20 ms). Cuando salga 90°, apuntan la espera en la ficha de la pista: <b>la usarán en el proyecto de la sesión 4</b>. Si queda tiempo, calibran el giro de 180°.",
        diu: ["S'ha passat o s'ha quedat curt? Quants graus?|¿Se ha pasado o se ha quedado corto? ¿Cuántos grados?",
          "Canvieu només l'espera, de 20 en 20.|Cambiad solo la espera, de 20 en 20.",
          "Apunteu el número bo: és el del vostre robot!|Apuntad el número bueno: ¡es el de vuestro robot!"],
        slides: ['s10', 's11'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers|Grupos de 3-4 por kit con papeles" },
      { min: 9, t: "Reptes: girs i rutes|Retos: giros y rutas", fase: 'ordinador',
        fa: "Feu la pausa activa i deixa'ls fer els quatre reptes. Recomana fer-los a trossos: programar un tram, provar-lo, afegir el gir, provar-lo… Al passadís de caixes, que diguin el pla en veu alta abans de posar cap bloc.|Haced la pausa activa y deja que hagan los cuatro retos. Recomienda hacerlos a trozos: programar un tramo, probarlo, añadir el giro, probarlo… En el pasillo de cajas, que digan el plan en voz alta antes de poner ningún bloque.",
        diu: ["Mitja volta: quant ha de durar l'espera?|Media vuelta: ¿cuánto tiene que durar la espera?",
          "Prova cada tros abans d'afegir-ne un altre.|Prueba cada trozo antes de añadir otro."],
        slides: ['s12'], app: "«Pausa activa» i els quatre reptes: quart de volta, el moll B, mitja volta i el passadís de caixes.|«Pausa activa» y los cuatro retos: cuarto de vuelta, el muelle B, media vuelta y el pasillo de cajas.", org: "Individual|Individual" },
      { min: 3, t: "Crea: la ruta del port|Crea: la ruta del puerto", fase: 'crea',
        fa: "Cada alumne/a dissenya la seva ruta pels dos vaixells fins al garatge i la desa. Qui vulgui, que provi algun gir en arc.|Cada alumno/a diseña su ruta por los dos barcos hasta el garaje y la guarda. Quien quiera, que pruebe algún giro en arco.",
        diu: ["Quants girs necessita la teva ruta? Cap a quin costat?|¿Cuántos giros necesita tu ruta? ¿Hacia qué lado?"],
        slides: ['s13'], app: "Pas «Crea»: La ruta del port.|Paso «Crea»: La ruta del puerto.", org: "Individual|Individual" },
      { min: 2, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum i fes les preguntes del tiquet a la porta. Recull les fitxes amb l'espera calibrada de cada grup per a la propera sessió.|Repasa el resumen y haz las preguntas del ticket en la puerta. Recoge las fichas con la espera calibrada de cada grupo para la próxima sesión.",
        diu: ["Com han d'anar les rodes per girar a l'esquerra sobre si mateix?|¿Cómo tienen que ir las ruedas para girar a la izquierda sobre sí mismo?"],
        slides: ['s14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Confon la dreta del robot amb la dreta de la pantalla quan el robot no mira amunt.|Confunde la derecha del robot con la derecha de la pantalla cuando el robot no mira hacia arriba.",
        "Que es posi al lloc del robot (girant el cos o la pantalla) o que posi el Maqueen real a la taula mirant com el de la pantalla.|Que se ponga en el lugar del robot (girando el cuerpo o la pantalla) o que ponga el Maqueen real en la mesa mirando como el de la pantalla."],
      ["Per girar, posa els dos motors en la mateixa direcció i el robot continua recte.|Para girar, pone los dos motores en la misma dirección y el robot sigue recto.",
        "Pregunta: si les dues rodes fan el mateix, què fa el robot? Recorda les fletxes de l'animació: per girar sobre si mateix, una endavant i l'altra enrere.|Pregunta: si las dos ruedas hacen lo mismo, ¿qué hace el robot? Recuerda las flechas de la animación: para girar sobre sí mismo, una adelante y la otra atrás."],
      ["Gira a velocitat 150 amb l'espera de 590 ms i s'hi passa.|Gira a velocidad 150 con la espera de 590 ms y se pasa.",
        "Els 590 ms són per a velocitat 100. Si canvia la velocitat, canvia el temps del gir: que torni a 100 o que torni a calibrar.|Los 590 ms son para velocidad 100. Si cambia la velocidad, cambia el tiempo del giro: que vuelva a 100 o que vuelva a calibrar."],
      ["Quan un gir falla, esborra el programa sencer.|Cuando un giro falla, borra el programa entero.",
        "Que executi el programa i miri on es desvia per primera vegada: només cal canviar aquella espera.|Que ejecute el programa y mire dónde se desvía por primera vez: solo hay que cambiar esa espera."],
      ["Al robot real el gir surt de 70° o de 110° i creu que el robot està espatllat.|En el robot real el giro sale de 70° o de 110° y cree que el robot está estropeado.",
        "És normal: cada motor és una mica diferent. Calibreu-lo i apunteu l'espera bona per a la propera sessió.|Es normal: cada motor es un poco diferente. Calibradlo y apuntad la espera buena para la próxima sesión."]
    ],
    diff: {
      mes: "Calibrar també el gir de 180° i el gir en arc del seu robot. Al simulador, programar un quadrat (quatre trams i quatre girs) i comprovar si el robot torna exactament al punt de sortida.|Calibrar también el giro de 180° y el giro en arco de su robot. En el simulador, programar un cuadrado (cuatro tramos y cuatro giros) y comprobar si el robot vuelve exactamente al punto de salida.",
      menys: "Fer només girs de 90° a velocitat 100 amb 590 ms, i decidir només el costat amb les targetes de rodes a la taula: «l'esquerre enrere, gira a l'esquerra».|Hacer solo giros de 90° a velocidad 100 con 590 ms, y decidir solo el lado con las tarjetas de ruedas en la mesa: «el izquierdo atrás, gira a la izquierda»."
    },
    aval: {
      ticket: ["Com han d'anar les rodes per girar a la dreta sobre si mateix?|¿Cómo tienen que ir las ruedas para girar a la derecha sobre sí mismo?",
        "Quina espera us ha funcionat per a 90° al vostre robot?|¿Qué espera os ha funcionado para 90° en vuestro robot?"],
      rubric: [
        ["Com gira un robot|Cómo gira un robot", "Explica el gir per la diferència de velocitat de les rodes i prediu-ne el costat.|Explica el giro por la diferencia de velocidad de las ruedas y predice su lado.", "Fa girs que funcionen, però s'equivoca de costat quan el robot no mira amunt.|Hace giros que funcionan, pero se equivoca de lado cuando el robot no mira hacia arriba."],
        ["Tipus de gir|Tipos de giro", "Distingeix el gir sobre si mateix del gir en arc i tria el que convé.|Distingue el giro sobre sí mismo del giro en arco y elige el que conviene.", "Fa girs sobre si mateix, però encara no en sap fer en arc.|Hace giros sobre sí mismo, pero todavía no sabe hacerlos en arco."],
        ["Calibrar|Calibrar", "Prova, mesura i ajusta l'espera del gir fins que surt 90° al robot real.|Prueba, mide y ajusta la espera del giro hasta que sale 90° en el robot real.", "Prova el gir, però canvia l'espera sense mesurar.|Prueba el giro, pero cambia la espera sin medir."]
      ]
    },
    casa: "A casa, feu «Fes de rodes» amb algú: recte, gir sobre el lloc i arc. Busqueu també altres màquines que girin sense volant, com una excavadora o una cadira de rodes, i observeu com mouen les rodes.|En casa, haced «Haz de ruedas» con alguien: recto, giro sobre el sitio y arco. Buscad también otras máquinas que giren sin volante, como una excavadora o una silla de ruedas, y observad cómo mueven las ruedas.",
    slides: [
      { id: 's1', k: 'portada', t: "Girar sobre si mateix|Girar sobre sí mismo", x: "Com gira un robot que no té volant?|¿Cómo gira un robot que no tiene volante?",
        nota: "Presenta l'objectiu: avui cada grup trobarà l'espera exacta perquè el seu robot giri 90°.|Presenta el objetivo: hoy cada grupo encontrará la espera exacta para que su robot gire 90°." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", punts: ["La velocitat va de 0 a 255.|La velocidad va de 0 a 255.", "Per sota de 30, zona morta.|Por debajo de 30, zona muerta.", "Endavant i enrere amb el mateix temps: torna al lloc.|Adelante y atrás con el mismo tiempo: vuelve al sitio."],
        nota: "Pregunta a quin número arrencava el robot de cada grup.|Pregunta a qué número arrancaba el robot de cada grupo." },
      { id: 's3', k: 'anim', t: "Sense volant|Sin volante", anim: 'k1spin', x: "Fletxa verda: endavant. Fletxa taronja: enrere.|Flecha verde: adelante. Flecha naranja: atrás.",
        nota: "Regla per recordar: el robot gira cap al costat de la roda que va enrere (o més a poc a poc).|Regla para recordar: el robot gira hacia el lado de la rueda que va hacia atrás (o más despacio)." },
      { id: 's4', k: 'robo', t: "Quatre quarts de volta|Cuatro cuartos de vuelta", x: "L'esquerre endavant i el dret enrere, a 100, durant 590 ms. Quatre vegades.|El izquierdo adelante y el derecho atrás, a 100, durante 590 ms. Cuatro veces.",
        robo: { w: { w: 100, h: 60, bot: [50, 30, 90] }, prog: 'start{ run:L,fwd,100 run:R,back,100 wait:590 stop:all wait:700 run:L,fwd,100 run:R,back,100 wait:590 stop:all wait:700 run:L,fwd,100 run:R,back,100 wait:590 stop:all wait:700 run:L,fwd,100 run:R,back,100 wait:590 stop:all }' },
        nota: "Que comptin en veu alta els quarts de volta. Al final, mira on mirava al principi: 4 × 90° = 360°.|Que cuenten en voz alta los cuartos de vuelta. Al final, mira donde miraba al principio: 4 × 90° = 360°." },
      { id: 's5', k: 'robo', t: "Girar en arc|Girar en arco", x: "Només la roda esquerra, a 100, durant 1180 ms.|Solo la rueda izquierda, a 100, durante 1180 ms.",
        robo: { w: { w: 100, h: 60, bot: [30, 42, 90] }, prog: 'start{ run:L,fwd,100 wait:1180 stop:all wait:700 run:all,fwd,120 wait:2500 stop:all }' },
        nota: "Compara: el mateix quart de volta tarda el doble que sobre si mateix, però és més suau. Al voltant de quina roda gira?|Compara: el mismo cuarto de vuelta tarda el doble que sobre sí mismo, pero es más suave. ¿Alrededor de qué rueda gira?" },
      { id: 's6', k: 'anim', t: "Calibrar|Calibrar", anim: 'k1calib', x: "Provar, mesurar, ajustar i tornar a provar.|Probar, medir, ajustar y volver a probar.",
        nota: "Explica-ho amb l'exemple de l'animació: si amb 590 ms gira 80°, cal una mica més de temps (uns 660 ms).|Explícalo con el ejemplo de la animación: si con 590 ms gira 80°, hace falta un poco más de tiempo (unos 660 ms)." },
      { id: 's7', k: 'robo', t: "Prediu: cap on mirarà?|Predice: ¿hacia dónde mirará?", x: "Gira amb l'esquerre endavant i el dret enrere, i després avança. A, B o C?|Gira con el izquierdo adelante y el derecho atrás, y después avanza. ¿A, B o C?",
        robo: { w: { w: 120, h: 80, bot: [30, 40, 90], marks: { A: [30, 10], B: [30, 71], C: [61, 40] } }, prog: 'start{ run:L,fwd,100 run:R,back,100 wait:590 stop:all wait:300 run:all,fwd,150 wait:2000 stop:all }' },
        nota: "Resposta: B. Gira a la seva dreta: si mirava a la dreta de la pantalla, ara mira avall. Qui ha dit A, que es posi al lloc del robot.|Respuesta: B. Gira a su derecha: si miraba a la derecha de la pantalla, ahora mira hacia abajo. Quien haya dicho A, que se ponga en el lugar del robot." },
      { id: 's8', k: 'activitat', t: "Fes de rodes|Haz de ruedas", timer: 9, punts: ["Dues rodes agafades del braç i un cervell.|Dos ruedas cogidas del brazo y un cerebro.", "El cervell ensenya una targeta per a cada roda.|El cerebro enseña una tarjeta para cada rueda.", "Recte, gir a la dreta, gir a l'esquerra i arc.|Recto, giro a la derecha, giro a la izquierda y arco.", "Final: un quart de volta exacte a la creu.|Final: un cuarto de vuelta exacto en la cruz."],
        nota: "Passets curts i sense estirar. Si les rodes no es coordinen, que comptin en veu alta «un, dos» a cada pas.|Pasitos cortos y sin tirar. Si las ruedas no se coordinan, que cuenten en voz alta «uno, dos» a cada paso." },
      { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 11, punts: ["Obre la sessió «Girar sobre si mateix».|Abre la sesión «Girar sobre sí mismo».", "Mira les tres demos de «Descobreix».|Mira las tres demos de «Descubre».", "A «On acabarà?», posa't al lloc del robot.|En «¿Dónde terminará?», ponte en el lugar del robot.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas «Fes de rodes», que toquin «Ho hem fet!».|En el paso «Haz de ruedas», que toquen «¡Lo hemos hecho!»." },
      { id: 's10', k: 'activitat', t: "Calibrem el gir|Calibramos el giro", timer: 13, punts: ["Robot al creuament, mirant cap a una tira.|Robot en el cruce, mirando hacia una tira.", "Gir de 90° amb 590 ms a velocitat 100.|Giro de 90° con 590 ms a velocidad 100.", "Mesureu l'angle amb el transportador.|Medid el ángulo con el transportador.", "Ajusteu l'espera de 20 en 20 ms i apunteu-la.|Ajustad la espera de 20 en 20 ms y apuntadla."],
        code: "Maqueen_V5.I2CInit()\nMaqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 100)\nMaqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CCW, 100)\nbasic.pause(590)\nMaqueen_V5.motorStop(Maqueen_V5.Motors.All)",
        nota: "M1 és el motor esquerre i M2, el dret. CW vol dir endavant i CCW, enrere. Que canviïn només el número de basic.pause.|M1 es el motor izquierdo y M2, el derecho. CW quiere decir adelante y CCW, atrás. Que cambien solo el número de basic.pause." },
      { id: 's11', k: 'concepte', t: "Apunteu el vostre número|Apuntad vuestro número", punts: ["Gir de 90°: ______ ms|Giro de 90°: ______ ms", "Gir de 180°: ______ ms|Giro de 180°: ______ ms", "Al simulador: 590 ms i 1180 ms.|En el simulador: 590 ms y 1180 ms."],
        nota: "Aquest número és important: el faran servir al passeig del projecte de la sessió 4. Que l'escriguin també al full de la pista.|Este número es importante: lo usarán en el paseo del proyecto de la sesión 4. Que lo escriban también en la hoja de la pista." },
      { id: 's12', k: 'repte', t: "Reptes: girs i rutes|Retos: giros y rutas", timer: 9, punts: ["1. Quart de volta|1. Cuarto de vuelta", "2. El moll B|2. El muelle B", "3. Mitja volta|3. Media vuelta", "4. El passadís de caixes|4. El pasillo de cajas"],
        nota: "Recomana provar el programa cada vegada que afegeixen un tram o un gir: així el problema sempre és a l'últim tros.|Recomienda probar el programa cada vez que añaden un tramo o un giro: así el problema siempre está en el último trozo." },
      { id: 's13', k: 'activitat', t: "Crea: la ruta del port|Crea: la ruta del puerto", timer: 3, x: "Pels dos vaixells i fins al garatge, sense tocar el magatzem.|Por los dos barcos y hasta el garaje, sin tocar el almacén.",
        nota: "Si no hi ha temps d'acabar-la, la poden enllestir a casa: el projecte es desa quan funciona.|Si no hay tiempo de terminarla, la pueden acabar en casa: el proyecto se guarda cuando funciona." },
      { id: 's14', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["El robot gira cap a la roda més lenta.|El robot gira hacia la rueda más lenta.", "Una endavant i l'altra enrere: sobre si mateix. Una sola: en arc.|Una adelante y la otra atrás: sobre sí mismo. Una sola: en arco.", "Calibrar: provar, mesurar i ajustar.|Calibrar: probar, medir y ajustar."],
        nota: "Pregunta quina diferència hi havia entre l'espera calibrada de cada grup.|Pregunta qué diferencia había entre la espera calibrada de cada grupo." },
      { id: 's15', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Com van les rodes per girar a la dreta sobre si mateix?|¿Cómo van las ruedas para girar a la derecha sobre sí mismo?", "Quina espera us ha funcionat per a 90°?|¿Qué espera os ha funcionado para 90°?"],
        nota: "Guarda les fitxes amb l'espera de cada grup: les necessitaran per al projecte.|Guarda las fichas con la espera de cada grupo: las necesitarán para el proyecto." }
    ],
    print: [
      { id: 'p1', t: "Fes de rodes|Haz de ruedas", k: 'targetes',
        intro: "Un paquet per grup de 3. El cervell ensenya una targeta de la roda esquerra i una de la dreta alhora.|Un paquete por grupo de 3. El cerebro enseña una tarjeta de la rueda izquierda y una de la derecha a la vez.",
        items: [
          { t: "Esquerra: endavant ⬆|Izquierda: adelante ⬆", n: 2 },
          { t: "Esquerra: enrere ⬇|Izquierda: atrás ⬇", n: 2 },
          { t: "Dreta: endavant ⬆|Derecha: adelante ⬆", n: 2 },
          { t: "Dreta: enrere ⬇|Derecha: atrás ⬇", n: 2 },
          { t: "Roda aturada ✋|Rueda parada ✋", n: 2 }
        ] },
      { id: 'p2', t: "La creu de calibratge|La cruz de calibración", k: 'pista',
        intro: "Enganxeu dues tires de cinta que es creuin a 90°. Poseu el centre de les rodes del robot al creuament, mirant cap a una tira: després del gir de 90°, ha de quedar mirant l'altra.|Pegad dos tiras de cinta que se crucen a 90°. Poned el centro de las ruedas del robot en el cruce, mirando hacia una tira: después del giro de 90°, tiene que quedar mirando la otra.",
        w: { w: 60, h: 60, bot: [30, 30, 0], lines: [{ p: [[30, 6], [30, 54]] }, { p: [[6, 30], [54, 30]] }] },
        items: [
          { q: "Gir de 90° a velocitat 100. Espera que funciona al nostre robot: ______ ms|Giro de 90° a velocidad 100. Espera que funciona en nuestro robot: ______ ms" },
          { q: "Gir de 180°: ______ ms. És el doble que el de 90°?|Giro de 180°: ______ ms. ¿Es el doble que el de 90°?" },
          { q: "Gir en arc de 90° (una sola roda): ______ ms|Giro en arco de 90° (una sola rueda): ______ ms" }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: el passeig de la fira ---------- */
  'k1-4': {
    obj: [
      "L'alumne/a descompon una ruta en trams rectes i girs i n'estima les esperes abans de programar-la.|El alumno/a descompone una ruta en tramos rectos y giros y estima sus esperas antes de programarla.",
      "L'alumne/a programa i depura un passeig complet que passa per tres punts en ordre i acaba aturat a la sortida.|El alumno/a programa y depura un paseo completo que pasa por tres puntos en orden y termina parado en la salida.",
      "L'alumne/a passa el programa al Maqueen de veritat amb MakeCode i el calibra tram a tram.|El alumno/a pasa el programa al Maqueen de verdad con MakeCode y lo calibra tramo a tramo.",
      "L'alumne/a presenta el projecte i explica què ha canviat entre el simulador i el robot de veritat.|El alumno/a presenta el proyecto y explica qué ha cambiado entre el simulador y el robot de verdad."
    ],
    comp: [
      "Competència digital (CD5): crear i depurar un programa complet per a un robot|Competencia digital (CD5): crear y depurar un programa completo para un robot",
      "Competència STEM (STEM3): fer un projecte tecnològic: planificar, construir, provar i millorar|Competencia STEM (STEM3): hacer un proyecto tecnológico: planificar, construir, probar y mejorar",
      "Matemàtiques: mesures en un plànol a escala, angles i temps|Matemáticas: medidas en un plano a escala, ángulos y tiempo",
      "Comunicació oral: presentar un projecte i explicar-ne les decisions|Comunicación oral: presentar un proyecto y explicar sus decisiones"
    ],
    vocab: [
      ["Descompondre|Descomponer", "Partir un problema gran en problemes petits que es poden resoldre un a un.|Partir un problema grande en problemas pequeños que se pueden resolver uno a uno."],
      ["Tram|Tramo", "Un tros recte de la ruta: motor els dos, espera i atura.|Un trozo recto de la ruta: motor los dos, espera y para."],
      ["Ruta|Ruta", "El camí complet del robot: una sèrie de trams i girs en ordre.|El camino completo del robot: una serie de tramos y giros en orden."],
      ["Depurar|Depurar", "Trobar l'error d'un programa i canviar només el que falla.|Encontrar el error de un programa y cambiar solo lo que falla."],
      ["MakeCode|MakeCode", "L'editor on es programa la micro:bit i des d'on es descarrega el programa al robot.|El editor donde se programa la micro:bit y desde donde se descarga el programa al robot."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el passeig de la fira»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el paseo de la feria»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit Maqueen per grup de 3-4, amb cable USB i piles carregades|Un kit Maqueen por grupo de 3-4, con cable USB y pilas cargadas",
        "La pista de la fira a terra (140 × 90 cm): cinta de pintor, caixes de sabates per a les parades i una caixa més gran per a la font|La pista de la feria en el suelo (140 × 90 cm): cinta de pintor, cajas de zapatos para los puestos y una caja más grande para la fuente"
      ],
      imprimir: ["Pista: el passeig de la fira|Pista: el paseo de la feria", "Codi: els patrons del tram i del gir|Código: los patrones del tramo y del giro"],
      prep: [
        "Construir a terra la pista de la fira amb les mides de l'imprimible. Si no hi ha espai per a tots els grups, feu-ne una o dues i organitzeu torns de 3 minuts.|Construir en el suelo la pista de la feria con las medidas del imprimible. Si no hay espacio para todos los grupos, haced una o dos y organizad turnos de 3 minutos.",
        "Tornar a cada grup la fitxa de la sessió 3 amb l'espera calibrada del gir de 90°.|Devolver a cada grupo la ficha de la sesión 3 con la espera calibrada del giro de 90°.",
        "Comprovar que els ordinadors poden descarregar a la micro:bit (cable USB o connexió directa des del navegador).|Comprobar que los ordenadores pueden descargar en la micro:bit (cable USB o conexión directa desde el navegador)."
      ]
    },
    plan: [
      { min: 4, t: "El projecte: la fira de robòtica|El proyecto: la feria de robótica", fase: 'inici',
        fa: "Presenta el projecte: el Maqueen farà de guia a la fira de la plaça. Ensenya la pista construïda a terra i explica què ha de fer el robot: passar per les tres parades en ordre i acabar aturat a la sortida. Repasseu els girs amb la diapositiva 2.|Presenta el proyecto: el Maqueen hará de guía en la feria de la plaza. Enseña la pista construida en el suelo y explica qué tiene que hacer el robot: pasar por los tres puestos en orden y terminar parado en la salida. Repasad los giros con la diapositiva 2.",
        diu: ["Avui el vostre robot farà el seu primer passeig complet.|Hoy vuestro robot hará su primer paseo completo.",
          "Qui recorda l'espera que va calibrar per al gir de 90°?|¿Quién recuerda la espera que calibró para el giro de 90°?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 7, t: "Planificar, programar i passar al robot|Planificar, programar y pasar al robot", fase: 'teoria',
        fa: "Explica la descomposició amb la demo de la ruta a trossos i els dos patrons (tram i gir). Mostra com es passa el programa del simulador a la micro:bit amb el botó </> i recorda que al robot de veritat cal calibrar tram a tram.|Explica la descomposición con la demo de la ruta a trozos y los dos patrones (tramo y giro). Muestra cómo se pasa el programa del simulador a la micro:bit con el botón </> y recuerda que en el robot de verdad hay que calibrar tramo a tramo.",
        diu: ["Quants trams i quants girs té aquesta ruta?|¿Cuántos tramos y cuántos giros tiene esta ruta?",
          "Si un tram falla, quin número canviaríeu?|Si un tramo falla, ¿qué número cambiaríais?"],
        slides: ['s3', 's4', 's5', 's6'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El pla del passeig|El plan del paseo", fase: 'desconnectat',
        fa: "Grups de 3-4 amb la pista impresa. Dibuixen la ruta amb llapis, la parteixen en trams i girs i mesuren cada tram a l'escala del dibuix (cada quadre són 10 cm). Amb la taula de velocitats (a 150, uns 15,5 cm cada segon) estimen l'espera de cada tram, i per als girs fan servir l'espera calibrada a la sessió 3. Ho apunten al full.|Grupos de 3-4 con la pista impresa. Dibujan la ruta con lápiz, la parten en tramos y giros y miden cada tramo a la escala del dibujo (cada cuadro son 10 cm). Con la tabla de velocidades (a 150, unos 15,5 cm cada segundo) estiman la espera de cada tramo, y para los giros usan la espera calibrada en la sesión 3. Lo apuntan en la hoja.",
        diu: ["Primer el pla, després els blocs.|Primero el plan, después los bloques.",
          "Si un tram fa 100 cm i el robot en fa uns 15 cada segon, quants segons necessita?|Si un tramo mide 100 cm y el robot hace unos 15 cada segundo, ¿cuántos segundos necesita?",
          "No cal que el pla sigui perfecte: després el provarem i l'ajustarem.|No hace falta que el plan sea perfecto: después lo probaremos y lo ajustaremos."],
        slides: ['s7'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3-4|Grupos de 3-4" },
      { min: 14, t: "A l'ordinador: descobreix, prova i reptes|En el ordenador: descubre, prueba y retos", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins als reptes: les targetes, el pla curt, les prediccions, el bloc que fa xocar el robot, la pausa i els tres reptes. Al passeig exprés, que pensin que a 255 el robot va gairebé el doble de ràpid.|Cada alumno/a hace la sesión hasta los retos: las tarjetas, el plan corto, las predicciones, el bloque que hace chocar al robot, la pausa y los tres retos. En el paseo exprés, que piensen que a 255 el robot va casi el doble de rápido.",
        diu: ["Prova el programa després de cada tros.|Prueba el programa después de cada trozo.",
          "En Pau ja té el tram 1: què li falta?|Pau ya tiene el tramo 1: ¿qué le falta?",
          "Al passeig exprés, el gir també ha de ser més ràpid?|En el paseo exprés, ¿el giro también tiene que ser más rápido?"],
        slides: ['s8', 's9'], app: "De «Recorda» fins als reptes: les tres targetes, ordenar el pla, «El mapa del passeig» (ara no; és per a casa), «On acabarà?», el bloc que fa xocar el robot, la pregunta dels tres blocs, la pausa i els tres reptes (acaba el passeig, la volta a les flors i el passeig exprés).|De «Recuerda» hasta los retos: las tres tarjetas, ordenar el plan, «El mapa del paseo» (ahora no; es para casa), «¿Dónde terminará?», el bloque que hace chocar al robot, la pregunta de los tres bloques, la pausa y los tres retos (acaba el paseo, la vuelta a las flores y el paseo exprés).", org: "Individual|Individual" },
      { min: 8, t: "Crea: el passeig de la fira|Crea: el paseo de la feria", fase: 'crea',
        fa: "Cada grup tria el programa d'un dels seus membres com a base, o el fan junts, seguint el pla de paper. Al simulador, el passeig ha de passar pels tres punts i acabar a la sortida. Quan funcioni, que el desin i obrin el codi per a MakeCode amb el botó </>.|Cada grupo elige el programa de uno de sus miembros como base, o lo hacen juntos, siguiendo el plan de papel. En el simulador, el paseo tiene que pasar por los tres puntos y terminar en la salida. Cuando funcione, que lo guarden y abran el código para MakeCode con el botón </>.",
        diu: ["Seguiu el pla: tram 1, gir 1, tram 2…|Seguid el plan: tramo 1, giro 1, tramo 2…",
          "Si falla, on es desvia per primera vegada?|Si falla, ¿dónde se desvía por primera vez?"],
        slides: ['s10'], app: "Pas «Crea»: El passeig de la fira, i la història del robot de veritat.|Paso «Crea»: El paseo de la feria, y la historia del robot de verdad.", org: "Individual i després per grups|Individual y después por grupos" },
      { min: 15, t: "El passeig amb el Maqueen de veritat|El paseo con el Maqueen de verdad", fase: 'robot',
        fa: "Cada grup copia a MakeCode el codi del passeig, el descarrega i el prova a la pista de terra. Calibren en aquest ordre: primer els girs (amb l'espera de la sessió 3), després els trams, de l'inici cap al final i canviant un sol número cada vegada. Quan el robot passi per les tres parades, fan la prova final davant la classe: tothom mira si toca alguna parada i on s'atura. Organitza torns si només hi ha una pista.|Cada grupo copia en MakeCode el código del paseo, lo descarga y lo prueba en la pista del suelo. Calibran en este orden: primero los giros (con la espera de la sesión 3), después los tramos, del inicio hacia el final y cambiando un solo número cada vez. Cuando el robot pase por los tres puestos, hacen la prueba final delante de la clase: todos miran si toca algún puesto y dónde se para. Organiza turnos si solo hay una pista.",
        diu: ["Un sol número cada vegada: si no, no sabreu quin canvi ha funcionat.|Un solo número cada vez: si no, no sabréis qué cambio ha funcionado.",
          "On es desvia el robot per primera vegada? Aquell és el tram que heu de calibrar.|¿Dónde se desvía el robot por primera vez? Ese es el tramo que tenéis que calibrar.",
          "Cable fora, robot a la línia de sortida i el pilot preparat per aturar-lo.|Cable fuera, robot en la línea de salida y el piloto preparado para pararlo."],
        slides: ['s11', 's12'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers; torns a la pista|Grupos de 3-4 por kit con papeles; turnos en la pista" },
      { min: 4, t: "Presentació, tancament i tiquet|Presentación, cierre y ticket", fase: 'tancament',
        fa: "Cada grup diu en una frase què han hagut de canviar perquè el passeig funcionés al robot de veritat. Repassa el resum de la unitat i fes les preguntes del tiquet a la porta. Dona la insígnia de la unitat a qui hagi acabat el projecte a l'app.|Cada grupo dice en una frase qué han tenido que cambiar para que el paseo funcionara en el robot de verdad. Repasa el resumen de la unidad y haz las preguntas del ticket en la puerta. Da la insignia de la unidad a quien haya terminado el proyecto en la app.",
        diu: ["Què ha estat més difícil: el simulador o el robot de veritat? Per què?|¿Qué ha sido más difícil: el simulador o el robot de verdad? ¿Por qué?",
          "Quin número heu hagut de canviar més?|¿Qué número habéis tenido que cambiar más?"],
        slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Comença a posar blocs sense pla i es perd a mig camí.|Empieza a poner bloques sin plan y se pierde a mitad del camino.",
        "Que torni al pla de paper: en quin tram és? Que programi i provi un sol tram cada vegada.|Que vuelva al plan de papel: ¿en qué tramo está? Que programe y pruebe un solo tramo cada vez."],
      ["Quan el passeig falla, canvia moltes esperes alhora.|Cuando el paseo falla, cambia muchas esperas a la vez.",
        "Un sol número cada vegada: executa, mira el primer lloc on es desvia i ajusta només aquell tram o gir.|Un solo número cada vez: ejecuta, mira el primer sitio donde se desvía y ajusta solo ese tramo o giro."],
      ["Copia el codi a MakeCode, però s'oblida d'afegir l'extensió del Maqueen i surten errors.|Copia el código en MakeCode, pero se olvida de añadir la extensión del Maqueen y salen errores.",
        "Primer «Extensions» i «maqueen», després JavaScript i enganxar. Si surten línies vermelles, és que falta l'extensió.|Primero «Extensiones» y «maqueen», después JavaScript y pegar. Si salen líneas rojas, es que falta la extensión."],
      ["El robot real es desvia una mica a cada tram i al final no arriba a la sortida.|El robot real se desvía un poco en cada tramo y al final no llega a la salida.",
        "És normal: els errors petits se sumen. Calibreu primer els girs i després els trams, de l'inici cap al final.|Es normal: los errores pequeños se suman. Calibrad primero los giros y después los tramos, del inicio hacia el final."],
      ["Engega el robot amb el cable USB connectat o damunt d'una taula sense vora.|Enciende el robot con el cable USB conectado o encima de una mesa sin borde.",
        "Recorda les normes: cable fora, robot a terra a la línia de sortida i el pilot preparat per aturar-lo.|Recuerda las normas: cable fuera, robot en el suelo en la línea de salida y el piloto preparado para pararlo."]
    ],
    diff: {
      mes: "Afegir una parada de 2 segons a cada parada de la fira i fer l'últim tram a velocitat 255 recalculant l'espera. Al robot real, aconseguir que acabi dins la sortida dues vegades seguides.|Añadir una parada de 2 segundos en cada puesto de la feria y hacer el último tramo a velocidad 255 recalculando la espera. En el robot real, conseguir que termine dentro de la salida dos veces seguidas.",
      menys: "Fer el passeig curt del pas «Ordena els trossos» (tram, gir i tram) amb el patró imprès, i al robot real calibrar només el primer gir.|Hacer el paseo corto del paso «Ordena los trozos» (tramo, giro y tramo) con el patrón impreso, y en el robot real calibrar solo el primer giro."
    },
    aval: {
      ticket: ["Explica el teu pla: quants trams i quants girs té el passeig?|Explica tu plan: ¿cuántos tramos y cuántos giros tiene el paseo?",
        "Què heu hagut de canviar perquè funcionés al robot de veritat?|¿Qué habéis tenido que cambiar para que funcionara en el robot de verdad?"],
      rubric: [
        ["Planificar|Planificar", "Descompon la ruta en trams i girs i n'estima les esperes abans de programar.|Descompone la ruta en tramos y giros y estima sus esperas antes de programar.", "Programa a prova i error, sense pla.|Programa a prueba y error, sin plan."],
        ["Programar i depurar|Programar y depurar", "El passeig passa pels tres punts i acaba a la sortida; quan falla, troba el tram que cal canviar.|El paseo pasa por los tres puntos y termina en la salida; cuando falla, encuentra el tramo que hay que cambiar.", "El passeig funciona en part; per arreglar-lo canvia molts números alhora.|El paseo funciona en parte; para arreglarlo cambia muchos números a la vez."],
        ["Del simulador al robot|Del simulador al robot", "Passa el programa al Maqueen, el calibra i explica les diferències amb el simulador.|Pasa el programa al Maqueen, lo calibra y explica las diferencias con el simulador.", "El passa al robot amb ajuda, però encara no el calibra.|Lo pasa al robot con ayuda, pero todavía no lo calibra."]
      ]
    },
    casa: "A casa, ensenyeu el projecte des de «Projectes» i expliqueu el pla del passeig. Feu també «El mapa del passeig»: dibuixeu una habitació, escriviu una ruta en trams i girs i que algú la segueixi sense mirar el plànol.|En casa, enseñad el proyecto desde «Proyectos» y explicad el plan del paseo. Haced también «El mapa del paseo»: dibujad una habitación, escribid una ruta en tramos y giros y que alguien la siga sin mirar el plano.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: el passeig de la fira|Proyecto: el paseo de la feria", x: "El Maqueen farà de guia: tres parades i tornada a la sortida.|El Maqueen hará de guía: tres puestos y vuelta a la salida.",
        nota: "Ensenya la pista de terra i un robot. Explica que avui acaba la unitat i que el projecte es fa primer al simulador i després al robot de veritat.|Enseña la pista del suelo y un robot. Explica que hoy termina la unidad y que el proyecto se hace primero en el simulador y después en el robot de verdad." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", punts: ["Un tram: motor els dos, espera i atura.|Un tramo: motor los dos, espera y para.", "Gir a l'esquerra: l'esquerre enrere i el dret endavant.|Giro a la izquierda: el izquierdo atrás y el derecho adelante.", "90° a velocitat 100: uns 590 ms (o el vostre número calibrat).|90° a velocidad 100: unos 590 ms (o vuestro número calibrado)."],
        nota: "Que cada grup digui la seva espera calibrada de la sessió 3 i l'apunti al pla.|Que cada grupo diga su espera calibrada de la sesión 3 y la apunte en el plan." },
      { id: 's3', k: 'robo', t: "La ruta, a trossos|La ruta, a trozos", x: "Tram 1, gir a l'esquerra i tram 2. Cada tros és un problema petit.|Tramo 1, giro a la izquierda y tramo 2. Cada trozo es un problema pequeño.",
        robo: { w: { w: 120, h: 70, bot: [15, 55, 90], zones: [{ id: 'f', r: [62, 6, 26, 22], col: 'green', label: 'FINAL|FINAL' }], goal: [{ k: 'cps', pts: [[75, 55], [75, 17]], r: 6 }] }, prog: 'start{ run:all,fwd,150 wait:3900 stop:all run:L,back,100 run:R,fwd,100 wait:590 stop:all run:all,fwd,150 wait:2400 stop:all }' },
        nota: "Mentre s'executa, assenyala quins blocs del programa fan cada tros. Pregunta quants trams i girs tindrà el passeig de la fira (tres trams i dos girs).|Mientras se ejecuta, señala qué bloques del programa hacen cada trozo. Pregunta cuántos tramos y giros tendrá el paseo de la feria (tres tramos y dos giros)." },
      { id: 's4', k: 'concepte', t: "Dos patrons|Dos patrones", punts: ["Tram: motor els dos endavant, espera, atura.|Tramo: motor los dos adelante, espera, para.", "Gir: els dos motors en direccions contràries, espera, atura.|Giro: los dos motores en direcciones contrarias, espera, para.", "El passeig: tram, gir, tram, gir, tram.|El paseo: tramo, giro, tramo, giro, tramo."],
        blocks: ["motor els dos endavant a velocitat 150|motor los dos adelante a velocidad 150", "espera ____ ms|espera ____ ms", "atura el motor els dos|para el motor los dos", "motor esquerre enrere a velocitat 100|motor izquierdo atrás a velocidad 100", "motor dret endavant a velocitat 100|motor derecho adelante a velocidad 100"],
        nota: "Si el programa és llarg, que el llegeixin per patrons: «això és un tram, això és un gir». Així és més fàcil trobar on falla.|Si el programa es largo, que lo lean por patrones: «esto es un tramo, esto es un giro». Así es más fácil encontrar dónde falla." },
      { id: 's5', k: 'anim', t: "Del simulador a la micro:bit|Del simulador a la micro:bit", anim: 'k1usb', x: "El botó </> dona el codi per a MakeCode; després, cable USB i a la pista.|El botón </> da el código para MakeCode; después, cable USB y a la pista.",
        nota: "Fes-ho en directe una vegada amb el projector: botó </>, copiar, MakeCode amb l'extensió «maqueen», JavaScript, enganxar i descarregar.|Hazlo en directo una vez con el proyector: botón </>, copiar, MakeCode con la extensión «maqueen», JavaScript, pegar y descargar." },
      { id: 's6', k: 'anim', t: "Prova, mesura i ajusta|Prueba, mide y ajusta", anim: 'k1calib', x: "Primer els girs, després els trams, i un sol número cada vegada.|Primero los giros, después los tramos, y un solo número cada vez.",
        nota: "Recorda que els errors petits se sumen: un gir de 85° al principi fa que l'últim tram acabi molt desviat.|Recuerda que los errores pequeños se suman: un giro de 85° al principio hace que el último tramo termine muy desviado." },
      { id: 's7', k: 'activitat', t: "El pla del passeig|El plan del paseo", timer: 8, punts: ["Dibuixeu la ruta a la pista impresa.|Dibujad la ruta en la pista impresa.", "Parteix-la en trams i girs.|Pártela en tramos y giros.", "Mesureu cada tram (cada quadre, 10 cm).|Medid cada tramo (cada cuadro, 10 cm).", "Estimeu les esperes i apunteu-les.|Estimad las esperas y apuntadlas."],
        nota: "A velocitat 150, el robot fa uns 15,5 cm cada segon: un tram de 100 cm són uns 6400 ms. Per als girs, l'espera calibrada de cada grup.|A velocidad 150, el robot hace unos 15,5 cm cada segundo: un tramo de 100 cm son unos 6400 ms. Para los giros, la espera calibrada de cada grupo." },
      { id: 's8', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 14, punts: ["Obre la sessió del projecte.|Abre la sesión del proyecto.", "Fes les prediccions abans d'executar.|Haz las predicciones antes de ejecutar.", "«El mapa del passeig» és per a casa: toca «Ara no».|«El mapa del paseo» es para casa: toca «Ahora no».", "Fes els tres reptes.|Haz los tres retos."],
        nota: "Recorda que poden provar el programa tantes vegades com vulguin: provar no és fer trampa, és treballar com un enginyer.|Recuerda que pueden probar el programa tantas veces como quieran: probar no es hacer trampa, es trabajar como un ingeniero." },
      { id: 's9', k: 'repte', t: "Reptes del passeig|Retos del paseo", punts: ["1. Acaba el passeig d'en Pau|1. Acaba el paseo de Pau", "2. La volta a les flors|2. La vuelta a las flores", "3. Passeig exprés (menys de 6 segons)|3. Paseo exprés (menos de 6 segundos)"],
        nota: "Al passeig exprés, el gir es pot deixar igual: només cal fer els trams més ràpids i escurçar-ne les esperes.|En el paseo exprés, el giro se puede dejar igual: solo hay que hacer los tramos más rápidos y acortar sus esperas." },
      { id: 's10', k: 'activitat', t: "Crea: el passeig de la fira|Crea: el paseo de la feria", timer: 8, x: "Tres parades en ordre i aturat a la sortida, sense tocar res. Seguiu el vostre pla!|Tres puestos en orden y parado en la salida, sin tocar nada. ¡Seguid vuestro plan!",
        nota: "Quan funcioni, que el desin i obrin el codi amb el botó </>: el necessitaran per al robot de veritat.|Cuando funcione, que lo guarden y abran el código con el botón </>: lo necesitarán para el robot de verdad." },
      { id: 's11', k: 'activitat', t: "El passeig de veritat|El paseo de verdad", timer: 15, punts: ["Copieu el codi a MakeCode i descarregueu-lo.|Copiad el código en MakeCode y descargadlo.", "Proveu el passeig a la pista de terra.|Probad el paseo en la pista del suelo.", "Calibreu: primer els girs, després els trams.|Calibrad: primero los giros, después los tramos.", "Prova final davant la classe.|Prueba final delante de la clase."],
        code: "Maqueen_V5.I2CInit()\nMaqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 150)\nbasic.pause(3000)\nMaqueen_V5.motorStop(Maqueen_V5.Motors.All)\nMaqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CCW, 100)\nMaqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 100)\nbasic.pause(590)\nMaqueen_V5.motorStop(Maqueen_V5.Motors.All)",
        nota: "El codi de la diapositiva és només el patró d'un tram i un gir a l'esquerra, perquè vegin com es llegeix a MakeCode. Cada grup fa servir el codi del seu projecte.|El código de la diapositiva es solo el patrón de un tramo y un giro a la izquierda, para que vean cómo se lee en MakeCode. Cada grupo usa el código de su proyecto." },
      { id: 's12', k: 'concepte', t: "La prova final|La prueba final", punts: ["Passa per les tres parades en ordre?|¿Pasa por los tres puestos en orden?", "Acaba aturat a la sortida?|¿Termina parado en la salida?", "Toca alguna parada o la font?|¿Toca algún puesto o la fuente?", "Seguretat: cable fora i el pilot a punt.|Seguridad: cable fuera y el piloto a punto."],
        nota: "Valora el procés tant com el resultat: un grup que ha calibrat bé dos girs i ha entès per què es desvia ha après molt, encara que no arribi a la sortida.|Valora el proceso tanto como el resultado: un grupo que ha calibrado bien dos giros y ha entendido por qué se desvía ha aprendido mucho, aunque no llegue a la salida." },
      { id: 's13', k: 'pregunta', t: "Simulador o robot de veritat?|¿Simulador o robot de verdad?", x: "Què heu hagut de canviar perquè el passeig funcionés a la pista de terra?|¿Qué habéis tenido que cambiar para que el paseo funcionara en la pista del suelo?",
        nota: "Recull una frase de cada grup. Fes notar que tots han hagut de calibrar alguna cosa: és el que passa sempre amb els robots reals.|Recoge una frase de cada grupo. Haz notar que todos han tenido que calibrar algo: es lo que pasa siempre con los robots reales." },
      { id: 's14', k: 'resum', t: "Què hem après a la unitat 1|Qué hemos aprendido en la unidad 1", punts: ["Un robot sent, pensa i actua.|Un robot siente, piensa y actúa.", "Motors: velocitat de 0 a 255, endavant i enrere, i zona morta.|Motores: velocidad de 0 a 255, adelante y atrás, y zona muerta.", "Girs sobre si mateix i en arc; calibrar.|Giros sobre sí mismo y en arco; calibrar.", "Una ruta es descompon en trams i girs.|Una ruta se descompone en tramos y giros."],
        nota: "Avança què ve a la unitat 2: mesurarem amb precisió (distància = velocitat × temps) i el robot dibuixarà figures.|Adelanta lo que viene en la unidad 2: mediremos con precisión (distancia = velocidad × tiempo) y el robot dibujará figuras." },
      { id: 's15', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quants trams i quants girs té el vostre passeig?|¿Cuántos tramos y cuántos giros tiene vuestro paseo?", "Què heu canviat per al robot de veritat?|¿Qué habéis cambiado para el robot de verdad?"],
        nota: "Anota quins grups han fet funcionar el passeig al robot real i quins necessitaran reforç amb el calibratge a la unitat 2.|Anota qué grupos han hecho funcionar el paseo en el robot real y cuáles necesitarán refuerzo con la calibración en la unidad 2." }
    ],
    print: [
      { id: 'p1', t: "Pista: el passeig de la fira|Pista: el paseo de la feria", k: 'pista',
        intro: "Construïu la pista a terra a mida real. Les caixes són les parades i la font; els punts 1, 2 i 3 són on ha de passar el robot. Dibuixeu-hi la ruta amb llapis i apunteu el pla.|Construid la pista en el suelo a tamaño real. Las cajas son los puestos y la fuente; los puntos 1, 2 y 3 son por donde tiene que pasar el robot. Dibujad la ruta con lápiz y apuntad el plan.",
        w: { w: 140, h: 90, bot: [15, 75, 90], walls: [[52, 84, 26, 6], [126, 32, 10, 26], [57, 2, 26, 8], [40, 38, 56, 22]], zones: [{ id: 's', r: [16, 8, 28, 24], col: 'green', label: 'SORTIDA|SALIDA' }], goal: [{ k: 'cps', pts: [[65, 75], [115, 45], [70, 20]], r: 9 }] },
        items: [
          { q: "Tram 1 (fins a la primera cantonada): ____ cm → espera ____ ms|Tramo 1 (hasta la primera esquina): ____ cm → espera ____ ms" },
          { q: "Gir 1 (90° a l'esquerra): espera ____ ms (la del vostre robot)|Giro 1 (90° a la izquierda): espera ____ ms (la de vuestro robot)" },
          { q: "Tram 2: ____ cm → ____ ms · Gir 2: ____ ms · Tram 3: ____ cm → ____ ms|Tramo 2: ____ cm → ____ ms · Giro 2: ____ ms · Tramo 3: ____ cm → ____ ms" },
          { q: "Què heu hagut de canviar al robot de veritat?|¿Qué habéis tenido que cambiar en el robot de verdad?" }
        ] },
      { id: 'p2', t: "Patrons: un tram i un gir|Patrones: un tramo y un giro", k: 'codi',
        intro: "Els dos trossos amb què es construeix tot el passeig. Copieu-los i canvieu-ne les esperes amb els números del vostre pla.|Los dos trozos con los que se construye todo el paseo. Copiadlos y cambiad sus esperas con los números de vuestro plan.",
        items: [
          { t: "Un tram recte (velocitat 150)|Un tramo recto (velocidad 150)", prog: 'start{ run:all,fwd,150 wait:3000 stop:all }' },
          { t: "Un gir de 90° a l'esquerra (velocitat 100)|Un giro de 90° a la izquierda (velocidad 100)", prog: 'start{ run:L,back,100 run:R,fwd,100 wait:590 stop:all }' }
        ] }
    ]
  }
});
