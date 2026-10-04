Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · El comptador d'en Bit ---------- */
  'r6-1': {
    obj: [
      "L'alumne/a explica amb les seves paraules què és una variable (una capsa amb nom que recorda un número) i en dona un exemple de la vida diària.|El alumno/a explica con sus palabras qué es una variable (una caja con nombre que recuerda un número) y da un ejemplo de la vida diaria.",
      "L'alumne/a prediu el valor final del comptador després d'una seqüència de blocs «Suma», «Resta» i «Posa el comptador a…».|El alumno/a predice el valor final del contador después de una secuencia de bloques «Suma», «Resta» y «Pon el contador a…».",
      "L'alumne/a programa en Bit perquè compti passes o girs i arribi al valor que demana el repte.|El alumno/a programa a Bit para que cuente pasos o giros y llegue al valor que pide el reto.",
      "L'alumne/a posa el comptador a 0 al principi del programa quan porta un número d'abans (inicialitzar).|El alumno/a pone el contador a 0 al principio del programa cuando trae un número de antes (inicializar)."
    ],
    comp: [
      "Competència digital (CD5): resoldre problemes senzills amb programació per blocs|Competencia digital (CD5): resolver problemas sencillos con programación por bloques",
      "Pensament computacional: variables, assignació i actualització d'un valor|Pensamiento computacional: variables, asignación y actualización de un valor",
      "Matemàtiques (sentit numèric): sumar i restar mentalment, comptar i fer prediccions|Matemáticas (sentido numérico): sumar y restar mentalmente, contar y hacer predicciones",
      "Comunicació oral: explicar què passa amb un número pas a pas|Comunicación oral: explicar qué pasa con un número paso a paso"
    ],
    vocab: [
      ["Variable|Variable", "Una capsa amb nom que recorda un número que pot canviar.|Una caja con nombre que recuerda un número que puede cambiar."],
      ["Comptador|Contador", "La variable d'en Bit: un número que puja o baixa amb els blocs.|La variable de Bit: un número que sube o baja con los bloques."],
      ["Sumar i restar|Sumar y restar", "Fer créixer o fer baixar el número del comptador.|Hacer crecer o hacer bajar el número del contador."],
      ["Posar a…|Poner a…", "Esborrar el número d'abans i posar-n'hi un de nou.|Borrar el número de antes y poner uno nuevo."],
      ["Inicialitzar|Inicializar", "Posar la variable a un número de partida (normalment 0) abans de començar.|Poner la variable en un número de partida (normalmente 0) antes de empezar."],
      ["Marcador|Marcador", "El requadre damunt del món que diu quant val el comptador i quant ha de valer.|El recuadro encima del mundo que dice cuánto vale el contador y cuánto tiene que valer."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «El comptador d'en Bit»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «El contador de Bit»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra (5 × 5) i les targetes d'ordres de la unitat 1|La cuadrícula del suelo (5 × 5) y las tarjetas de órdenes de la unidad 1",
        "Una pissarreta o un full plastificat i un retolador per grup (fa de comptador)|Una pizarrita o una hoja plastificada y un rotulador por grupo (hace de contador)",
        "Una capsa de cartró petita amb l'etiqueta «comptador» per a la demostració|Una caja de cartón pequeña con la etiqueta «contador» para la demostración"
      ],
      imprimir: ["Targetes del comptador|Tarjetas del contador", "Quadrícula del terra: el comptador humà|Cuadrícula del suelo: el contador humano"],
      prep: [
        "Preparar una capsa amb l'etiqueta «comptador» i uns quants taps o pilotetes per ensenyar què és una variable.|Preparar una caja con la etiqueta «contador» y unos cuantos tapones o pelotitas para enseñar qué es una variable.",
        "Imprimir i retallar un paquet de targetes del comptador per grup de 3 i afegir-lo a les targetes d'ordres de la unitat 1.|Imprimir y recortar un paquete de tarjetas del contador por grupo de 3 y añadirlo a las tarjetas de órdenes de la unidad 1.",
        "Marcar la quadrícula al terra (o tenir-la en A3 per a la taula) amb la missió 1 de la fitxa.|Marcar la cuadrícula en el suelo (o tenerla en A3 para la mesa) con la misión 1 de la ficha.",
        "Provar abans la demostració de la diapositiva 6 per saber quant val el comptador al final (3).|Probar antes la demostración de la diapositiva 6 para saber cuánto vale el contador al final (3)."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: com recordem un número?|Bienvenida: ¿cómo recordamos un número?", fase: 'inici',
        fa: "Fes la pregunta de repàs de les funcions. Explica la missió: diumenge hi ha la cursa del far i en Bit ha de comptar les passes dels corredors. Pregunta com podem recordar un número que canvia tota l'estona i recull dues o tres idees (els dits, apuntar-lo, el marcador…).|Haz la pregunta de repaso de las funciones. Explica la misión: el domingo es la carrera del faro y Bit tiene que contar los pasos de los corredores. Pregunta cómo podemos recordar un número que cambia todo el rato y recoge dos o tres ideas (los dedos, apuntarlo, el marcador…).",
        diu: ["Recordeu què és una funció? Avui posarem nom a una altra cosa: a un número.|¿Recordáis qué es una función? Hoy pondremos nombre a otra cosa: a un número.",
          "Si cada passa d'un corredor és un número més, com ho fem per no perdre el compte?|Si cada paso de un corredor es un número más, ¿cómo lo hacemos para no perder la cuenta?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és una variable?|¿Qué es una variable?", fase: 'teoria',
        fa: "Ensenya la capsa amb l'etiqueta «comptador»: a fora hi ha el nom, a dins un número. Fes-hi entrar i sortir taps mentre la classe diu el número en veu alta. Mostra els exemples (marcador, comptador de passes) i els tres blocs nous. A la demostració, la classe prediu quant valdrà el comptador abans d'executar. Acaba amb el «compte!»: sumar no és posar.|Enseña la caja con la etiqueta «contador»: fuera está el nombre, dentro un número. Mete y saca tapones mientras la clase dice el número en voz alta. Muestra los ejemplos (marcador, contador de pasos) y los tres bloques nuevos. En la demostración, la clase predice cuánto valdrá el contador antes de ejecutar. Termina con el «¡cuidado!»: sumar no es poner.",
        diu: ["La capsa es diu «comptador». Què hi ha a dins ara? I si hi poso un tap més?|La caja se llama «contador». ¿Qué hay dentro ahora? ¿Y si pongo un tapón más?",
          "Quines coses de casa o del carrer recorden un número que canvia?|¿Qué cosas de casa o de la calle recuerdan un número que cambia?",
          "Abans d'executar-lo: quant valdrà el comptador a la bandera? Compteu els «Suma», no els «Endavant»!|Antes de ejecutarlo: ¿cuánto valdrá el contador en la bandera? ¡Contad los «Suma», no los «Adelante»!",
          "Si el comptador val 4 i faig «Posa el comptador a 1», quant val? I si faig «Suma 1»?|Si el contador vale 4 y hago «Pon el contador a 1», ¿cuánto vale? ¿Y si hago «Suma 1»?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El comptador humà|El contador humano", fase: 'desconnectat',
        fa: "Grups de 3 amb tres papers: programador/a, robot i comptador/a. El programador/a posa en fila les targetes d'ordres i les del comptador; el robot camina per la quadrícula; el comptador/a porta la pissarreta i canvia el número només quan surt una targeta «Suma», «Resta» o «Posa a». Abans d'executar cada missió, tot el grup prediu el número final. Després de cada missió, els papers roten.|Grupos de 3 con tres papeles: programador/a, robot y contador/a. El programador/a pone en fila las tarjetas de órdenes y las del contador; el robot camina por la cuadrícula; el contador/a lleva la pizarrita y cambia el número solo cuando sale una tarjeta «Suma», «Resta» o «Pon a». Antes de ejecutar cada misión, todo el grupo predice el número final. Después de cada misión, los papeles rotan.",
        diu: ["El comptador només canvia el número quan surt una targeta de comptador. Un Endavant no el canvia!|El contador solo cambia el número cuando sale una tarjeta de contador. ¡Un Adelante no lo cambia!",
          "Abans de començar: quin número creieu que hi haurà a la pissarreta al final?|Antes de empezar: ¿qué número creéis que habrá en la pizarrita al final?",
          "A la missió 3, què heu de fer abans de comptar els girs?|En la misión 3, ¿qué tenéis que hacer antes de contar los giros?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i prediu|En el ordenador: descubre y predice", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança fins a la pausa activa. Passeja per l'aula i, a les preguntes «Prediu!», demana que diguin el número en veu alta abans de tocar cap opció. A «La capsa dels números», que toquin «Ara no»: és per fer-la a casa.|Cada alumno/a abre la sesión y avanza hasta la pausa activa. Pasea por el aula y, en las preguntas «¡Predice!», pide que digan el número en voz alta antes de tocar ninguna opción. En «La caja de los números», que toquen «Ahora no»: es para hacerla en casa.",
        diu: ["Llegeix els blocs d'un en un i digues el número després de cada bloc.|Lee los bloques de uno en uno y di el número después de cada bloque.",
          "Al pas «Investiga», executa'l i mira el marcador: on comença a anar malament?|En el paso «Investiga», ejecútalo y mira el marcador: ¿dónde empieza a ir mal?"],
        slides: ['s11'], app: "La pregunta de «Recorda», les dues històries de la cursa, les targetes de «Descobreix», la pregunta del marcador de bàsquet, «La capsa dels números» (per a casa), les dues preguntes «Prediu!» i l'«Investiga» del bloc equivocat.|La pregunta de «Recuerda», las dos historias de la carrera, las tarjetas de «Descubre», la pregunta del marcador de baloncesto, «La caja de los números» (para casa), las dos preguntas «¡Predice!» y el «Investiga» del bloque equivocado.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: comptar passes i girs|Retos: contar pasos y giros", fase: 'ordinador',
        fa: "Fes la pausa activa tots junts. Després programeu entre tots el compte enrere de la diapositiva 12 i deixa'ls fer els quatre reptes. Al repte dels girs, fixa't en qui no posa el comptador a 0: pregunta-li quant valia al principi.|Haced la pausa activa todos juntos. Después programad entre todos la cuenta atrás de la diapositiva 12 y deja que hagan los cuatro retos. En el reto de los giros, fíjate en quién no pone el contador a 0: pregúntale cuánto valía al principio.",
        diu: ["Quant val el comptador abans de començar? Mira el marcador.|¿Cuánto vale el contador antes de empezar? Mira el marcador.",
          "Al repte del bug: què fa l'últim bloc al número que ja havíeu comptat?|En el reto del bug: ¿qué hace el último bloque al número que ya habíais contado?"],
        slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes: comptar les passes, el compte enrere, comptar els girs i el programa que esborra el compte.|«Pausa activa» y los cuatro retos: contar los pasos, la cuenta atrás, contar los giros y el programa que borra la cuenta.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el meu comptador de passes|Crea: mi contador de pasos", fase: 'crea',
        fa: "Cada alumne/a inventa un camí per les 3 estrelles fins a la bandera i fa que el comptador digui quantes passes ha fet. En parelles: abans d'executar el programa del company/a, l'altre/a endevina el número final.|Cada alumno/a inventa un camino por las 3 estrellas hasta la bandera y hace que el contador diga cuántos pasos ha dado. Por parejas: antes de ejecutar el programa del compañero/a, el otro/a adivina el número final.",
        diu: ["Quantes passes creus que farà en Bit pel teu camí?|¿Cuántos pasos crees que dará Bit por tu camino?",
          "Qui ha trobat un camí més curt? Com ho sabeu? Mireu el comptador!|¿Quién ha encontrado un camino más corto? ¿Cómo lo sabéis? ¡Mirad el contador!"],
        slides: ['s14'], app: "Pas «Crea»: El meu comptador de passes.|Paso «Crea»: Mi contador de pasos.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum, deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida a la porta.|Repasa las tres ideas de la sesión con el resumen, deja que respondan las preguntas finales de la app y haz el ticket de salida en la puerta.",
        diu: ["Qui em diu una variable que hagi vist avui fora de l'escola?|¿Quién me dice una variable que haya visto hoy fuera del cole?",
          "Quin bloc faríeu servir per tornar a començar a comptar?|¿Qué bloque usaríais para volver a empezar a contar?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Creu que els blocs «Endavant» també fan canviar el comptador.|Cree que los bloques «Adelante» también hacen cambiar el contador.",
        "Demana-li que llegeixi el programa en veu alta i que digui el número només quan llegeix un bloc vermell. Després, que ho comprovi mirant el marcador amb «Pas a pas».|Pídele que lea el programa en voz alta y que diga el número solo cuando lee un bloque rojo. Después, que lo compruebe mirando el marcador con «Paso a paso»."],
      ["Confon «Suma 1» amb «Posa el comptador a 1».|Confunde «Suma 1» con «Pon el contador a 1».",
        "Torna a la capsa de taps: si n'hi ha 4 i en poso 1 més, quants n'hi ha? I si els trec tots i en poso 1? Que compari els dos casos.|Vuelve a la caja de tapones: si hay 4 y pongo 1 más, ¿cuántos hay? ¿Y si los saco todos y pongo 1? Que compare los dos casos."],
      ["No sap canviar el número d'un bloc (deixa «Suma 1» quan en calen 2).|No sabe cambiar el número de un bloque (deja «Suma 1» cuando hacen falta 2).",
        "Recorda-li que pot tocar el bloc que ja ha posat: hi surten els botons − i +. Que provi de canviar-lo i miri l'etiqueta del bloc.|Recuérdale que puede tocar el bloque que ya ha puesto: salen los botones − y +. Que pruebe a cambiarlo y mire la etiqueta del bloque."],
      ["Al repte dels girs, oblida posar el comptador a 0 i acaba amb 10.|En el reto de los giros, olvida poner el contador a 0 y termina con 10.",
        "Pregunta: quant valia el comptador abans d'executar? D'on surt el 10? Que trobi ell/a mateix/a que cal esborrar el 7 al principi.|Pregunta: ¿cuánto valía el contador antes de ejecutar? ¿De dónde sale el 10? Que descubra él/ella mismo/a que hay que borrar el 7 al principio."],
      ["Posa «Posa el comptador a 0» al final del programa per «tancar».|Pone «Pon el contador a 0» al final del programa para «cerrar».",
        "Que executi pas a pas i miri el marcador just a l'últim bloc: què li passa al número que havia comptat?|Que ejecute paso a paso y mire el marcador justo en el último bloque: ¿qué le pasa al número que había contado?"]
    ],
    diff: {
      mes: "Al projecte, buscar el camí per les 3 estrelles que faci menys passes i comparar el número amb el d'un company/a. Després, fer un programa que compti les passes i també resti 1 a cada gir: quin número surt?|En el proyecto, buscar el camino por las 3 estrellas que dé menos pasos y comparar el número con el de un compañero/a. Después, hacer un programa que cuente los pasos y también reste 1 en cada giro: ¿qué número sale?",
      menys: "Treballar amb la capsa i els taps al costat de l'ordinador: cada vegada que posa un «Suma 1», hi posa un tap. Començar pels reptes sense Repeteix (un «Suma 1» després de cada Endavant).|Trabajar con la caja y los tapones al lado del ordenador: cada vez que pone un «Suma 1», mete un tapón. Empezar por los retos sin Repite (un «Suma 1» después de cada Adelante)."
    },
    aval: {
      ticket: ["Què és una variable? Posa'n un exemple de fora de l'escola.|¿Qué es una variable? Pon un ejemplo de fuera del cole.",
        "El comptador val 4. Quant val després de «Posa el comptador a 1»? I després de «Suma 1»?|El contador vale 4. ¿Cuánto vale después de «Pon el contador a 1»? ¿Y después de «Suma 1»?"],
      rubric: [
        ["Concepte de variable|Concepto de variable", "L'explica com un nom que recorda un número que canvia i en dona un exemple propi.|La explica como un nombre que recuerda un número que cambia y da un ejemplo propio.", "Reconeix el comptador a l'app, però encara no el relaciona amb exemples de fora.|Reconoce el contador en la app, pero todavía no lo relaciona con ejemplos de fuera."],
        ["Predir el valor|Predecir el valor", "Llegeix els blocs d'un en un i encerta el valor final, també amb «Posa a…».|Lee los bloques de uno en uno y acierta el valor final, también con «Pon a…».", "Encerta les sumes, però s'equivoca quan hi ha «Posa a…» o «Resta».|Acierta las sumas, pero se equivoca cuando hay «Pon a…» o «Resta»."],
        ["Programar amb el comptador|Programar con el contador", "Resol els reptes de passes, compte enrere i girs, i inicialitza el comptador quan cal.|Resuelve los retos de pasos, cuenta atrás y giros, e inicializa el contador cuando hace falta.", "Resol el repte de les passes, però als altres necessita la pista.|Resuelve el reto de los pasos, pero en los otros necesita la pista."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «La capsa dels números»: una persona dona ordres (suma 2, resta 1, posa a 0) i l'altra posa o treu botons d'una capsa. Abans d'obrir-la, endevineu quants n'hi ha!|En casa, con el móvil, podéis repetir la sesión y hacer juntos «La caja de los números»: una persona da órdenes (suma 2, resta 1, pon a 0) y la otra pone o quita botones de una caja. Antes de abrirla, ¡adivinad cuántos hay!",
    slides: [
      { id: 's1', k: 'portada', t: "El comptador d'en Bit|El contador de Bit", x: "Avui en Bit aprendrà a recordar números amb una variable: el comptador.|Hoy Bit aprenderá a recordar números con una variable: el contador.",
        nota: "Presenta la unitat 6: quatre sessions per aprendre a comptar i recordar. Avui, la primera variable.|Presenta la unidad 6: cuatro sesiones para aprender a contar y recordar. Hoy, la primera variable." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Què és una funció? Per a què ens servia?|¿Qué es una función? ¿Para qué nos servía?",
        nota: "Resposta: un grup de blocs amb nom que es pot fer servir moltes vegades. Avui posarem nom a un número.|Respuesta: un grupo de bloques con nombre que se puede usar muchas veces. Hoy pondremos nombre a un número." },
      { id: 's3', k: 'pregunta', t: "Com recordem un número?|¿Cómo recordamos un número?", x: "Diumenge hi ha la cursa del far. Com podem saber quantes passes fa cada corredor sense perdre el compte?|El domingo es la carrera del faro. ¿Cómo podemos saber cuántos pasos da cada corredor sin perder la cuenta?",
        nota: "Recull idees sense corregir: amb els dits, apuntant-ho, amb un marcador… Totes guarden un número que canvia.|Recoge ideas sin corregir: con los dedos, apuntándolo, con un marcador… Todas guardan un número que cambia." },
      { id: 's4', k: 'anim', t: "Una capsa amb nom|Una caja con nombre", anim: 'u6box', x: "Una variable té un nom a fora i un número a dins, que pot canviar.|Una variable tiene un nombre fuera y un número dentro, que puede cambiar.",
        nota: "Fes la demostració amb la capsa i els taps mentre l'animació corre. Que la classe digui el número en veu alta a cada tap.|Haz la demostración con la caja y los tapones mientras la animación corre. Que la clase diga el número en voz alta en cada tapón." },
      { id: 's5', k: 'concepte', t: "Variables de cada dia|Variables de cada día", punts: ["El marcador d'un partit|El marcador de un partido", "El comptador de passes d'un rellotge|El contador de pasos de un reloj", "Els punts d'un repte|Los puntos de un reto", "La temperatura del termòmetre|La temperatura del termómetro"],
        nota: "Per a cadascuna, pregunta: com es diu? Quin número té ara? Quan canvia?|Para cada una, pregunta: ¿cómo se llama? ¿Qué número tiene ahora? ¿Cuándo cambia?" },
      { id: 's6', k: 'demo', t: "Quant valdrà el comptador?|¿Cuánto valdrá el contador?", x: "Abans d'executar: quant valdrà el comptador quan en Bit arribi a la bandera?|Antes de ejecutar: ¿cuánto valdrá el contador cuando Bit llegue a la bandera?",
        demo: { w: { map: ['.....', '>###F', '.....'], vname: 'comptador|contador' }, prog: 'f add:1 f add:1 f f add:1' },
        nota: "Hi ha 4 Endavant però només 3 «Suma 1»: el comptador acaba a 3. Pregunta a qui ha dit 4 per què ho pensava.|Hay 4 Adelante pero solo 3 «Suma 1»: el contador termina en 3. Pregunta a quien ha dicho 4 por qué lo pensaba." },
      { id: 's7', k: 'anim', t: "Suma, resta i posa|Suma, resta y pon", anim: 'u6ops', blocks: ["Suma N|Suma N", "Resta N|Resta N", "Posa el comptador a N|Pon el contador a N"],
        nota: "Explica que el número N es tria tocant el bloc i fent servir − i +.|Explica que el número N se elige tocando el bloque y usando − y +." },
      { id: 's8', k: 'anim', t: "Compte! Sumar no és posar|¡Cuidado! Sumar no es poner", anim: 'u6setadd', x: "Posar esborra el número que hi havia.|Poner borra el número que había.",
        nota: "Fes-ho amb la capsa: amb 4 taps, «suma 1» (en poso un) i «posa a 1» (els trec tots i en poso un).|Hazlo con la caja: con 4 tapones, «suma 1» (pongo uno) y «pon a 1» (los saco todos y pongo uno)." },
      { id: 's9', k: 'activitat', t: "El comptador humà|El contador humano", timer: 12, punts: ["Programador/a: posa les targetes en fila.|Programador/a: pone las tarjetas en fila.", "Robot: camina per la quadrícula.|Robot: camina por la cuadrícula.", "Comptador/a: canvia el número de la pissarreta només amb les targetes de comptador.|Contador/a: cambia el número de la pizarrita solo con las tarjetas de contador.", "Abans de cada missió, predim el número final.|Antes de cada misión, predecimos el número final."],
        nota: "Les missions són a la fitxa de la quadrícula. Roteu els papers a cada missió.|Las misiones están en la ficha de la cuadrícula. Rotad los papeles en cada misión." },
      { id: 's10', k: 'concepte', t: "Les regles del comptador|Las reglas del contador", punts: ["El comptador comença a 0, si la missió no diu el contrari.|El contador empieza en 0, si la misión no dice lo contrario.", "Endavant i els girs no el canvien.|Adelante y los giros no lo cambian.", "«Posa a…» esborra el número d'abans.|«Pon a…» borra el número de antes."],
        nota: "Deixa aquesta diapositiva projectada durant l'activitat del terra.|Deja esta diapositiva proyectada durante la actividad del suelo." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «El comptador d'en Bit».|Abre la sesión «El contador de Bit».", "A «Prediu!», digues el número abans de triar.|En «¡Predice!», di el número antes de elegir.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "A «La capsa dels números», que toquin «Ara no»: és l'activitat per fer a casa.|En «La caja de los números», que toquen «Ahora no»: es la actividad para hacer en casa." },
      { id: 's12', k: 'demo', t: "Programem junts: el compte enrere|Programemos juntos: la cuenta atrás", x: "El comptador comença a 4. Quin bloc posem a cada passa perquè arribi a 0 a la bandera?|El contador empieza en 4. ¿Qué bloque ponemos en cada paso para que llegue a 0 en la bandera?",
        demo: { w: { map: ['.....', '>###F', '.....'], v0: 4, count: 0 }, prog: '4{ f sub:1 }' },
        nota: "Que la classe proposi els blocs i compti enrere en veu alta mentre s'executa: 4, 3, 2, 1, 0!|Que la clase proponga los bloques y cuente hacia atrás en voz alta mientras se ejecuta: ¡4, 3, 2, 1, 0!" },
      { id: 's13', k: 'repte', t: "Reptes del comptador|Retos del contador", timer: 10, punts: ["1. Compta les passes|1. Cuenta los pasos", "2. El compte enrere|2. La cuenta atrás", "3. Compta els girs (primer, a 0!)|3. Cuenta los giros (¡primero, a 0!)", "4. El programa que esborra el compte|4. El programa que borra la cuenta"],
        nota: "Si algú s'encalla, pregunta: quant val el comptador abans de començar? I quant ha de valer al final?|Si alguien se atasca, pregunta: ¿cuánto vale el contador antes de empezar? ¿Y cuánto tiene que valer al final?" },
      { id: 's14', k: 'activitat', t: "Crea: el meu comptador de passes|Crea: mi contador de pasos", timer: 5, x: "Porta en Bit per les 3 estrelles fins a la bandera i fes que el comptador digui quantes passes ha fet. El company/a endevina el número!|Lleva a Bit por las 3 estrellas hasta la bandera y haz que el contador diga cuántos pasos ha dado. ¡El compañero/a adivina el número!",
        nota: "Celebra que hi hagi camins i números diferents. Qui té el camí més curt?|Celebra que haya caminos y números diferentes. ¿Quién tiene el camino más corto?" },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Una variable és una capsa amb nom que recorda un número.|Una variable es una caja con nombre que recuerda un número.", "«Suma» i «Resta» el canvien; «Posa a…» el substitueix.|«Suma» y «Resta» lo cambian; «Pon a…» lo sustituye.", "Abans de comptar, posem el comptador a 0.|Antes de contar, ponemos el contador a 0."],
        nota: "Avança que a la sessió següent en Bit comptarà estrelles mentre les recull.|Avanza que en la sesión siguiente Bit contará estrellas mientras las recoge." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què és una variable? Posa'n un exemple.|¿Qué es una variable? Pon un ejemplo.", "El comptador val 4: quant val després de «Posa a 1»? I de «Suma 1»?|El contador vale 4: ¿cuánto vale después de «Pon a 1»? ¿Y de «Suma 1»?"],
        nota: "Respostes: 1 i 5. Anota qui confon sumar i posar per reforçar-ho a la sessió 2.|Respuestas: 1 y 5. Anota quién confunde sumar y poner para reforzarlo en la sesión 2." }
    ],
    print: [
      { id: 'p1', t: "Targetes del comptador|Tarjetas del contador", k: 'targetes',
        intro: "Un paquet per grup de 3. S'afegeixen a les targetes d'ordres de la unitat 1. La targeta «Comptador» es posa damunt de la pissarreta.|Un paquete por grupo de 3. Se añaden a las tarjetas de órdenes de la unidad 1. La tarjeta «Contador» se pone encima de la pizarrita.",
        items: [
          { t: "Suma 1 ➕|Suma 1 ➕", n: 8 },
          { t: "Suma 2 ➕|Suma 2 ➕", n: 2 },
          { t: "Resta 1 ➖|Resta 1 ➖", n: 6 },
          { t: "Posa el comptador a 0 0️⃣|Pon el contador a 0 0️⃣", n: 2 },
          { t: "Comptador 🧮|Contador 🧮", n: 1 }
        ] },
      { id: 'p2', t: "Quadrícula del terra: el comptador humà|Cuadrícula del suelo: el contador humano", k: 'quadricula',
        intro: "Quadrícula de 5 × 5 al terra (o en A3 a la taula). El robot camina; el comptador/a canvia el número de la pissarreta només amb les targetes de comptador. Abans de començar cada missió, prediu el número final.|Cuadrícula de 5 × 5 en el suelo (o en A3 en la mesa). El robot camina; el contador/a cambia el número de la pizarrita solo con las tarjetas de contador. Antes de empezar cada misión, predice el número final.",
        items: [
          { t: "Missió 1: compta les passes|Misión 1: cuenta los pasos", w: 5, h: 5, cells: ['.....', '.....', '>...F', '.....', '.....'],
            instructions: "El comptador comença a 0. Després de cada Endavant, una targeta «Suma 1». Quant val a la bandera?|El contador empieza en 0. Después de cada Adelante, una tarjeta «Suma 1». ¿Cuánto vale en la bandera?", sol: 'f add:1 f add:1 f add:1 f add:1' },
          { t: "Missió 2: el compte enrere|Misión 2: la cuenta atrás", w: 5, h: 5, cells: ['....F', '.....', '.....', '.....', '>....'],
            instructions: "Primer, «Posa el comptador a 8». Després, «Resta 1» a cada passa. Arribeu a la bandera amb el comptador a 0?|Primero, «Pon el contador a 8». Después, «Resta 1» en cada paso. ¿Llegáis a la bandera con el contador a 0?", sol: 'setv:8 f sub:1 f sub:1 f sub:1 f sub:1 l f sub:1 f sub:1 f sub:1 f sub:1' },
          { t: "Missió 3: compta els girs|Misión 3: cuenta los giros", w: 5, h: 5, cells: ['..R.F', '..R..', '.....', '.R...', '>R...'],
            instructions: "La pissarreta encara té un 5 de la missió anterior. Poseu el comptador a 0 i sumeu 1 a cada gir. Quants girs fa el vostre camí?|La pizarrita todavía tiene un 5 de la misión anterior. Poned el contador a 0 y sumad 1 en cada giro. ¿Cuántos giros hace vuestro camino?", sol: 'setv:0 l add:1 f f r add:1 f f f l add:1 f f r add:1 f' }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Recollir i comptar ---------- */
  'r6-2': {
    obj: [
      "L'alumne/a fa servir «Si hi ha una estrella» amb «Suma 1» a dins per comptar coses mentre en Bit camina.|El alumno/a usa «Si hay una estrella» con «Suma 1» dentro para contar cosas mientras Bit camina.",
      "L'alumne/a explica per què un programa que compta funciona a illes amb un nombre diferent d'estrelles i un número fix no.|El alumno/a explica por qué un programa que cuenta funciona en islas con un número diferente de estrellas y un número fijo no.",
      "L'alumne/a troba i arregla el bug de posar «Suma 1» fora del «Si».|El alumno/a encuentra y arregla el bug de poner «Suma 1» fuera del «Si».",
      "L'alumne/a combina el comptador amb bucles i funcions per comptar estrelles o caixes en camins més llargs.|El alumno/a combina el contador con bucles y funciones para contar estrellas o cajas en caminos más largos."
    ],
    comp: [
      "Competència digital (CD5): crear programes que s'adapten a situacions diferents|Competencia digital (CD5): crear programas que se adaptan a situaciones diferentes",
      "Pensament computacional: variables dins de bucles i condicions, generalització|Pensamiento computacional: variables dentro de bucles y condiciones, generalización",
      "Matemàtiques (sentit numèric i estadística): comptar i fer recomptes|Matemáticas (sentido numérico y estadística): contar y hacer recuentos",
      "Aprendre a aprendre: comprovar una hipòtesi amb casos diferents|Aprender a aprender: comprobar una hipótesis con casos diferentes"
    ],
    vocab: [
      ["Comptar|Contar", "Sumar 1 cada vegada que trobem una cosa.|Sumar 1 cada vez que encontramos una cosa."],
      ["Recompte|Recuento", "El número final que diu quantes coses hem trobat.|El número final que dice cuántas cosas hemos encontrado."],
      ["Condició|Condición", "La pregunta que fa el «Si»: hi ha una estrella? Hi ha una caixa?|La pregunta que hace el «Si»: ¿hay una estrella? ¿Hay una caja?"],
      ["A dins / a fora|Dentro / fuera", "Un bloc a dins del «Si» només es fa si la resposta és sí; a fora es fa sempre.|Un bloque dentro del «Si» solo se hace si la respuesta es sí; fuera se hace siempre."],
      ["Illes alternatives|Islas alternativas", "Mapes diferents on s'ha de provar el mateix programa.|Mapas diferentes donde hay que probar el mismo programa."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Recollir i comptar»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Recoger y contar»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra i les targetes d'ordres i del comptador de la sessió 1|La cuadrícula del suelo y las tarjetas de órdenes y del contador de la sesión 1",
        "Estrelles de paper (unes 6 per grup) i una pissarreta per grup|Estrellas de papel (unas 6 por grupo) y una pizarrita por grupo"
      ],
      imprimir: ["Targetes noves: «Si hi ha una estrella» i estrelles|Tarjetas nuevas: «Si hay una estrella» y estrellas", "Quadrícula del terra: dues platges, un programa|Cuadrícula del suelo: dos playas, un programa"],
      prep: [
        "Imprimir i retallar les targetes noves i les estrelles; afegir-les al paquet de cada grup.|Imprimir y recortar las tarjetas nuevas y las estrellas; añadirlas al paquete de cada grupo.",
        "Muntar al terra el camí de la platja 1 de la fitxa, amb les estrelles de paper a les caselles marcades.|Montar en el suelo el camino de la playa 1 de la ficha, con las estrellas de papel en las casillas marcadas.",
        "Preparar a la pissarra el programa de targetes que faran servir tots els grups (diapositiva 10).|Preparar en la pizarra el programa de tarjetas que usarán todos los grupos (diapositiva 10).",
        "Provar abans la demostració de la diapositiva 5 per saber quant val el comptador (3).|Probar antes la demostración de la diapositiva 5 para saber cuánto vale el contador (3)."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i la pluja d'estrelles|Recordamos y la lluvia de estrellas", fase: 'inici',
        fa: "Fes la pregunta de repàs (posa a 0 i suma 2). Explica la missió: ha plogut estrelles a les platges i en Numi vol saber quantes n'hi ha a cada platja. Planteja el problema: el programa no sap quantes estrelles trobarà.|Haz la pregunta de repaso (pon a 0 y suma 2). Explica la misión: han llovido estrellas en las playas y Numi quiere saber cuántas hay en cada playa. Plantea el problema: el programa no sabe cuántas estrellas encontrará.",
        diu: ["El comptador val 5, fem «Posa a 0» i «Suma 2». Quant val?|El contador vale 5, hacemos «Pon a 0» y «Suma 2». ¿Cuánto vale?",
          "Si no sabem quantes estrelles hi ha, quin número posem al «Suma»?|Si no sabemos cuántas estrellas hay, ¿qué número ponemos en el «Suma»?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Si hi ha una estrella, suma 1|Si hay una estrella, suma 1", fase: 'teoria',
        fa: "Primer mostra la manera manual (un «Suma 1» després de cada estrella) i després la manera que compta sola, amb el «Si». A la segona demostració, la classe prediu el número abans d'executar. Explica amb l'animació per què el «Si» serveix per a totes les platges i acaba amb el «compte!»: «Suma 1» a dins del «Si».|Primero muestra la manera manual (un «Suma 1» después de cada estrella) y después la manera que cuenta sola, con el «Si». En la segunda demostración, la clase predice el número antes de ejecutar. Explica con la animación por qué el «Si» sirve para todas las playas y termina con el «¡cuidado!»: «Suma 1» dentro del «Si».",
        diu: ["Si canvio les estrelles de lloc, el primer programa encara funciona?|Si cambio las estrellas de sitio, ¿el primer programa todavía funciona?",
          "A cada casella, en Bit es fa una pregunta. Quina?|En cada casilla, Bit se hace una pregunta. ¿Cuál?",
          "Si poso «Suma 1» a fora del «Si», què comptarà?|Si pongo «Suma 1» fuera del «Si», ¿qué contará?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Estrelles al terra: dues platges|Estrellas en el suelo: dos playas", fase: 'desconnectat',
        fa: "Cada grup de 3 copia amb targetes el programa de la diapositiva 10. El robot el fa a la platja 1 i el comptador/a suma a la pissarreta només quan el robot trepitja una estrella. Després, el revisor/a canvia les estrelles de lloc segons la platja 2 i tornen a executar el mateix programa sense tocar cap targeta. Comparen els dos números.|Cada grupo de 3 copia con tarjetas el programa de la diapositiva 10. El robot lo hace en la playa 1 y el contador/a suma en la pizarrita solo cuando el robot pisa una estrella. Después, el revisor/a cambia las estrellas de sitio según la playa 2 y vuelven a ejecutar el mismo programa sin tocar ninguna tarjeta. Comparan los dos números.",
        diu: ["Hi ha estrella en aquesta casella? Llavors, què fa el comptador?|¿Hay estrella en esta casilla? Entonces, ¿qué hace el contador?",
          "Heu canviat alguna targeta per a la platja 2? I el número ha canviat?|¿Habéis cambiado alguna tarjeta para la playa 2? ¿Y el número ha cambiado?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a la pausa activa. A la pregunta «Prediu!», que comptin les estrelles amb el dit damunt de la pantalla. A «Compta sense saber-ho», que toquin «Ara no» (és per a casa).|Cada alumno/a hace la sesión hasta la pausa activa. En la pregunta «¡Predice!», que cuenten las estrellas con el dedo sobre la pantalla. En «Cuenta sin saberlo», que toquen «Ahora no» (es para casa).",
        diu: ["Quantes caselles avança? I quantes tenen estrella?|¿Cuántas casillas avanza? ¿Y cuántas tienen estrella?",
          "A l'«Investiga», per què el comptador val el doble?|En el «Investiga», ¿por qué el contador vale el doble?"],
        slides: ['s11'], app: "Les dues preguntes de «Recorda», la pluja d'estrelles, les targetes de «Descobreix», «Prediu!», ordenar com compta en Bit, «Compta sense saber-ho» (per a casa) i l'«Investiga» del «Suma 2».|Las dos preguntas de «Recuerda», la lluvia de estrellas, las tarjetas de «Descubre», «¡Predice!», ordenar cómo cuenta Bit, «Cuenta sin saberlo» (para casa) y el «Investiga» del «Suma 2».", org: "Individual|Individual" },
      { min: 10, t: "Reptes: moltes platges, un programa|Retos: muchas playas, un programa", fase: 'ordinador',
        fa: "Fes la pausa activa de les estrelles de mar. Programeu junts el repte de la diapositiva 12 i deixa'ls fer els quatre reptes. Als reptes amb illes, recorda'ls que el programa s'executa a totes les illes, una darrere l'altra, i que no han de canviar res entre illa i illa.|Haced la pausa activa de las estrellas de mar. Programad juntos el reto de la diapositiva 12 y deja que hagan los cuatro retos. En los retos con islas, recuérdales que el programa se ejecuta en todas las islas, una detrás de otra, y que no tienen que cambiar nada entre isla e isla.",
        diu: ["Funciona a l'illa 1. I a l'illa 2? Què és diferent?|Funciona en la isla 1. ¿Y en la isla 2? ¿Qué es diferente?",
          "Al repte de la funció: quins blocs fa «passa i compta»?|En el reto de la función: ¿qué bloques hace «pasa y cuenta»?",
          "Al repte de les caixes, el «Suma 1» és a dins o a fora del «Si»?|En el reto de las cajas, ¿el «Suma 1» está dentro o fuera del «Si»?"],
        slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes: la platja amb revolt, les tres platges, la funció «passa i compta» i el programa de les caixes que compta passes.|«Pausa activa» y los cuatro retos: la playa con curva, las tres playas, la función «pasa y cuenta» y el programa de las cajas que cuenta pasos.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la platja de les estrelles|Crea: la playa de las estrellas", fase: 'crea',
        fa: "Cada alumne/a tria un camí per recollir les 4 estrelles i les compta amb «Si hi ha una estrella». En parelles, comparen els camins: tots dos comptadors haurien de valer 4.|Cada alumno/a elige un camino para recoger las 4 estrellas y las cuenta con «Si hay una estrella». Por parejas, comparan los caminos: los dos contadores deberían valer 4.",
        diu: ["El teu camí i el del company/a són diferents. Per què el comptador val el mateix?|Tu camino y el del compañero/a son diferentes. ¿Por qué el contador vale lo mismo?"],
        slides: ['s14'], app: "Pas «Crea»: La platja de les estrelles.|Paso «Crea»: La playa de las estrellas.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals i fes el tiquet de sortida.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales y haz el ticket de salida.",
        diu: ["On va el «Suma 1» per comptar només les estrelles?|¿Dónde va el «Suma 1» para contar solo las estrellas?",
          "Per què és millor comptar que posar el número directament?|¿Por qué es mejor contar que poner el número directamente?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa «Suma 3» directament perquè ha comptat les estrelles amb els ulls.|Pone «Suma 3» directamente porque ha contado las estrellas con los ojos.",
        "Felicita'l per haver-les comptat i demana-li que miri l'illa 2. Funcionaria el mateix número? Què hauria de fer en Bit per comptar-les sol?|Felicítale por haberlas contado y pídele que mire la isla 2. ¿Funcionaría el mismo número? ¿Qué tendría que hacer Bit para contarlas solo?"],
      ["Deixa «Suma 1» a sota del «Si», a fora, i el comptador compta totes les passes.|Deja «Suma 1» debajo del «Si», fuera, y el contador cuenta todos los pasos.",
        "Que executi pas a pas i miri quan puja el marcador: a cada passa o només a les estrelles? Recorda-li que pot tocar l'espai buit de dins del «Si».|Que ejecute paso a paso y mire cuándo sube el marcador: ¿en cada paso o solo en las estrellas? Recuérdale que puede tocar el espacio vacío de dentro del «Si»."],
      ["Posa el «Si» abans de l'Endavant i compta la casella on encara no ha arribat.|Pone el «Si» antes del Adelante y cuenta la casilla a la que aún no ha llegado.",
        "Pregunta: quan mira en Bit si hi ha una estrella, on és? Que digui en veu alta l'ordre: primer arribo, després miro.|Pregunta: cuando Bit mira si hay una estrella, ¿dónde está? Que diga en voz alta el orden: primero llego, después miro."],
      ["Al repte de la funció, escriu els blocs al programa principal i deixa la funció buida.|En el reto de la función, escribe los bloques en el programa principal y deja la función vacía.",
        "Recorda-li la unitat 5: la funció té el seu propi requadre. Que hi posi el cursor tocant-ne l'espai i que hi escrigui «Endavant» i el «Si».|Recuérdale la unidad 5: la función tiene su propio recuadro. Que ponga el cursor tocando su espacio y que escriba «Adelante» y el «Si»."],
      ["Canvia el programa per a cada illa i s'enfada quan l'altra deixa de funcionar.|Cambia el programa para cada isla y se enfada cuando la otra deja de funcionar.",
        "Normalitza-ho: és el repte! Demana-li un programa que no sàpiga quantes estrelles hi ha. Què ha de preguntar en Bit a cada casella?|Normalízalo: ¡es el reto! Pídele un programa que no sepa cuántas estrellas hay. ¿Qué tiene que preguntar Bit en cada casilla?"]
    ],
    diff: {
      mes: "Al projecte, fer el camí amb una funció «passa i compta» i el mínim de blocs possible. Després, pensar com comptaria en Bit les caselles sense estrella (amb «si no»).|En el proyecto, hacer el camino con una función «pasa y cuenta» y el mínimo de bloques posible. Después, pensar cómo contaría Bit las casillas sin estrella (con «si no»).",
      menys: "Fer primer la versió manual (un «Suma 1» després de cada estrella) i, quan funcioni, canviar-la per un «Si» dins d'un Repeteix. Tenir la targeta «Si hi ha una estrella» a la taula per recordar on va el «Suma 1».|Hacer primero la versión manual (un «Suma 1» después de cada estrella) y, cuando funcione, cambiarla por un «Si» dentro de un Repite. Tener la tarjeta «Si hay una estrella» en la mesa para recordar dónde va el «Suma 1»."
    },
    aval: {
      ticket: ["On ha d'anar el «Suma 1» per comptar només les estrelles?|¿Dónde tiene que ir el «Suma 1» para contar solo las estrellas?",
        "Per què «Si hi ha una estrella, suma 1» funciona a totes les platges i «Suma 3» no?|¿Por qué «Si hay una estrella, suma 1» funciona en todas las playas y «Suma 3» no?"],
      rubric: [
        ["Comptar amb condicions|Contar con condiciones", "Posa «Suma 1» a dins del «Si» i explica què passaria a fora.|Pone «Suma 1» dentro del «Si» y explica qué pasaría fuera.", "Fa servir el «Si», però de vegades deixa el «Suma 1» a fora.|Usa el «Si», pero a veces deja el «Suma 1» fuera."],
        ["Generalitzar|Generalizar", "Resol els reptes de diverses illes amb un sol programa i explica per què funciona.|Resuelve los retos de varias islas con un solo programa y explica por qué funciona.", "Resol una illa i necessita ajuda per fer que el programa serveixi per a totes.|Resuelve una isla y necesita ayuda para que el programa sirva para todas."],
        ["Bucles i funcions amb comptador|Bucles y funciones con contador", "Escriu la funció «passa i compta» i la fa servir dins de bucles.|Escribe la función «pasa y cuenta» y la usa dentro de bucles.", "Compta bé en camins rectes, però s'embolica en combinar-ho amb funcions.|Cuenta bien en caminos rectos, pero se lía al combinarlo con funciones."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu fer «Compta sense saber-ho»: una persona amaga culleres sota uns gots i l'altra fa de Bit, got a got: si hi ha cullera, suma 1. Torneu-ho a fer amagant-ne un altre nombre: el «programa» és el mateix, però el número canvia!|En casa, con el móvil, podéis hacer «Cuenta sin saberlo»: una persona esconde cucharas bajo unos vasos y la otra hace de Bit, vaso a vaso: si hay cuchara, suma 1. Volved a hacerlo escondiendo otro número: el «programa» es el mismo, ¡pero el número cambia!",
    slides: [
      { id: 's1', k: 'portada', t: "Recollir i comptar|Recoger y contar", x: "Avui en Bit comptarà estrelles mentre les recull, encara que no sàpiga quantes n'hi ha.|Hoy Bit contará estrellas mientras las recoge, aunque no sepa cuántas hay.",
        nota: "Explica que avui el comptador treballarà amb el «Si» de la unitat 4.|Explica que hoy el contador trabajará con el «Si» de la unidad 4." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "El comptador val 5. En Bit fa «Posa el comptador a 0» i després «Suma 2». Quant val?|El contador vale 5. Bit hace «Pon el contador a 0» y después «Suma 2». ¿Cuánto vale?",
        nota: "Resposta: 2. «Posa a 0» esborra el 5.|Respuesta: 2. «Pon a 0» borra el 5." },
      { id: 's3', k: 'pregunta', t: "Quantes estrelles hi ha?|¿Cuántas estrellas hay?", x: "Ha plogut estrelles a les platges de l'illa. Com pot comptar-les en Bit si no sap quantes en trobarà?|Han llovido estrellas en las playas de la isla. ¿Cómo puede contarlas Bit si no sabe cuántas encontrará?",
        nota: "Recull idees. Guia-les cap a «mirar a cada casella i sumar si n'hi ha».|Recoge ideas. Guíalas hacia «mirar en cada casilla y sumar si la hay»." },
      { id: 's4', k: 'demo', t: "Comptar a mà|Contar a mano", x: "Aquí hem posat un «Suma 1» just després de cada estrella. Funciona… però només en aquesta platja.|Aquí hemos puesto un «Suma 1» justo después de cada estrella. Funciona… pero solo en esta playa.",
        demo: { w: { map: ['.....', '>*#*#', '.....'], vname: 'comptador|contador' }, prog: 'f add:1 f f add:1 f' },
        nota: "Pregunta: i si l'estrella fos a la tercera casella? Hauríem de canviar el programa.|Pregunta: ¿y si la estrella estuviera en la tercera casilla? Tendríamos que cambiar el programa." },
      { id: 's5', k: 'demo', t: "Si hi ha una estrella, suma 1|Si hay una estrella, suma 1", x: "Abans d'executar: quant valdrà el comptador al final?|Antes de ejecutar: ¿cuánto valdrá el contador al final?",
        demo: { w: { map: ['.....', '>*#**', '.....'], vname: 'comptador|contador' }, prog: '4{ f if:gem{ add:1 } }' },
        nota: "Avança 4 caselles i 3 tenen estrella: el comptador acaba a 3. Fes notar que el marcador només puja a les estrelles.|Avanza 4 casillas y 3 tienen estrella: el contador termina en 3. Haz notar que el marcador solo sube en las estrellas." },
      { id: 's6', k: 'anim', t: "Un programa per a totes les platges|Un programa para todas las playas", anim: 'u6islands', x: "El número fix només serveix per a una platja. El «Si» compta a totes.|El número fijo solo sirve para una playa. El «Si» cuenta en todas.",
        nota: "Explica que als reptes amb pestanyes «Illa», el mateix programa s'executa a totes les illes.|Explica que en los retos con pestañas «Isla», el mismo programa se ejecuta en todas las islas." },
      { id: 's7', k: 'anim', t: "Compte! A dins, no a fora|¡Cuidado! Dentro, no fuera", anim: 'u6inside', x: "«Suma 1» a fora del «Si» compta totes les passes.|«Suma 1» fuera del «Si» cuenta todos los pasos.",
        nota: "Pregunta quantes passes i quantes estrelles hi ha a la tira de caselles, i compara-ho amb els dos números.|Pregunta cuántos pasos y cuántas estrellas hay en la tira de casillas, y compáralo con los dos números." },
      { id: 's8', k: 'concepte', t: "Què més pot comptar en Bit?|¿Qué más puede contar Bit?", punts: ["Estrelles: «Si hi ha una estrella»|Estrellas: «Si hay una estrella»", "Caixes: «Si hi ha una caixa»|Cajas: «Si hay una caja»", "Passes: «Suma 1» a cada Endavant|Pasos: «Suma 1» en cada Adelante", "Girs: «Suma 1» a cada gir|Giros: «Suma 1» en cada giro"],
        nota: "Pregunta què comptarien ells a l'escola: llibres, finestres, alumnes que porten jaqueta…|Pregunta qué contarían ellos en el cole: libros, ventanas, alumnos que llevan chaqueta…" },
      { id: 's9', k: 'activitat', t: "Estrelles al terra: dues platges|Estrellas en el suelo: dos playas", timer: 12, punts: ["Copieu el programa de targetes de la pissarra.|Copiad el programa de tarjetas de la pizarra.", "Executeu-lo a la platja 1: el comptador/a suma a cada estrella.|Ejecutadlo en la playa 1: el contador/a suma en cada estrella.", "Canvieu les estrelles a la platja 2. No toqueu cap targeta!|Cambiad las estrellas a la playa 2. ¡No toquéis ninguna tarjeta!", "Torneu-lo a executar i compareu els números.|Volved a ejecutarlo y comparad los números."],
        nota: "Les dues platges són a la fitxa de la quadrícula. El camí és el mateix; només canvien les estrelles.|Las dos playas están en la ficha de la cuadrícula. El camino es el mismo; solo cambian las estrellas." },
      { id: 's10', k: 'concepte', t: "El programa de targetes|El programa de tarjetas", blocks: ["Repeteix 4 vegades|Repite 4 veces", "Endavant|Adelante", "Si hi ha una estrella|Si hay una estrella", "Suma 1 al comptador|Suma 1 al contador"], x: "Dins del Repeteix: Endavant i, a sota, el «Si» amb el «Suma 1» a dins.|Dentro del Repite: Adelante y, debajo, el «Si» con el «Suma 1» dentro.",
        nota: "Deixa-ho projectat durant l'activitat: és el programa que han de copiar amb targetes.|Déjalo proyectado durante la actividad: es el programa que tienen que copiar con tarjetas." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Recollir i comptar».|Abre la sesión «Recoger y contar».", "A «Prediu!», compta les estrelles amb el dit.|En «¡Predice!», cuenta las estrellas con el dedo.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "A «Compta sense saber-ho», que toquin «Ara no»: és per a casa.|En «Cuenta sin saberlo», que toquen «Ahora no»: es para casa." },
      { id: 's12', k: 'demo', t: "Programem junts: la platja amb revolt|Programemos juntos: la playa con curva", x: "Quins blocs posem perquè en Bit compti les 4 estrelles i arribi a la bandera?|¿Qué bloques ponemos para que Bit cuente las 4 estrellas y llegue a la bandera?",
        demo: { w: { map: ['>**#.', '...*.', '...*F'], count: 4 }, prog: '3{ f if:gem{ add:1 } } r 2{ f if:gem{ add:1 } } l f' },
        nota: "Fes notar que el mateix «Si» es repeteix a cada tros del camí. Avança que al repte 3 ho faran amb una funció.|Haz notar que el mismo «Si» se repite en cada trozo del camino. Avanza que en el reto 3 lo harán con una función." },
      { id: 's13', k: 'repte', t: "Reptes de les platges|Retos de las playas", timer: 10, punts: ["1. La platja amb revolt|1. La playa con curva", "2. Tres platges, un programa|2. Tres playas, un programa", "3. La funció «passa i compta»|3. La función «pasa y cuenta»", "4. Arregla el comptador de caixes|4. Arregla el contador de cajas"],
        nota: "Recorda que, si el programa funciona a una illa, l'app el prova sola a la següent.|Recuerda que, si el programa funciona en una isla, la app lo prueba sola en la siguiente." },
      { id: 's14', k: 'activitat', t: "Crea: la platja de les estrelles|Crea: la playa de las estrellas", timer: 5, x: "Tria el teu camí, recull les 4 estrelles i compta-les amb «Si hi ha una estrella».|Elige tu camino, recoge las 4 estrellas y cuéntalas con «Si hay una estrella».",
        nota: "Que comparin camins: són diferents, però el comptador sempre val 4.|Que comparen caminos: son diferentes, pero el contador siempre vale 4." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Per comptar mentre caminem: «Si hi ha una estrella, suma 1».|Para contar mientras caminamos: «Si hay una estrella, suma 1».", "El mateix programa compta bé a totes les illes.|El mismo programa cuenta bien en todas las islas.", "«Suma 1» va a dins del «Si».|«Suma 1» va dentro del «Si»."],
        nota: "Avança que a la sessió següent cada cosa valdrà punts diferents.|Avanza que en la sesión siguiente cada cosa valdrá puntos diferentes." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["On va el «Suma 1» per comptar només les estrelles?|¿Dónde va el «Suma 1» para contar solo las estrellas?", "Per què el «Si» funciona a totes les platges?|¿Por qué el «Si» funciona en todas las playas?"],
        nota: "Respostes: a dins del «Si»; perquè el programa compta, no sap el número de memòria.|Respuestas: dentro del «Si»; porque el programa cuenta, no sabe el número de memoria." }
    ],
    print: [
      { id: 'p1', t: "Targetes noves: «Si hi ha una estrella» i estrelles|Tarjetas nuevas: «Si hay una estrella» y estrellas", k: 'targetes',
        intro: "Afegiu-les al paquet de la sessió 1. Les estrelles es posen a les caselles de la quadrícula; la targeta «Si» porta el «Suma 1» a sota, una mica entrat cap a dins.|Añadidlas al paquete de la sesión 1. Las estrellas se ponen en las casillas de la cuadrícula; la tarjeta «Si» lleva el «Suma 1» debajo, un poco metido hacia dentro.",
        items: [
          { t: "Si hi ha una estrella ❓|Si hay una estrella ❓", n: 2 },
          { t: "Repeteix 4 vegades 🔁|Repite 4 veces 🔁", n: 1 },
          { t: "Estrella ⭐|Estrella ⭐", n: 6 },
          { t: "Caixa 📦|Caja 📦", n: 3 }
        ] },
      { id: 'p2', t: "Quadrícula del terra: dues platges, un programa|Cuadrícula del suelo: dos playas, un programa", k: 'quadricula',
        intro: "El camí és el mateix a les dues platges; només canvien les estrelles. Feu el mateix programa de targetes a totes dues i apunteu el número final a la pissarreta.|El camino es el mismo en las dos playas; solo cambian las estrellas. Haced el mismo programa de tarjetas en las dos y apuntad el número final en la pizarrita.",
        items: [
          { t: "Platja 1|Playa 1", w: 5, h: 5, cells: ['.....', '.....', '>*.**', '.....', '.....'],
            instructions: "Programa: Repeteix 4 vegades { Endavant · Si hi ha una estrella { Suma 1 } }. Quant val el comptador al final?|Programa: Repite 4 veces { Adelante · Si hay una estrella { Suma 1 } }. ¿Cuánto vale el contador al final?", sol: '4{ f if:gem{ add:1 } }' },
          { t: "Platja 2|Playa 2", w: 5, h: 5, cells: ['.....', '.....', '>..*.', '.....', '.....'],
            instructions: "El mateix programa, sense canviar cap targeta. Quant val ara? Per què és diferent?|El mismo programa, sin cambiar ninguna tarjeta. ¿Cuánto vale ahora? ¿Por qué es diferente?", sol: '4{ f if:gem{ add:1 } }' },
          { t: "Platja 3: inventeu-la|Playa 3: inventadla", w: 5, h: 5, cells: ['.....', '.....', '>****', '.....', '.....'],
            instructions: "Poseu les estrelles on vulgueu a la fila d'en Bit. Abans d'executar, endevineu el número final.|Poned las estrellas donde queráis en la fila de Bit. Antes de ejecutar, adivinad el número final.", sol: '4{ f if:gem{ add:1 } }' }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Punts i rècords ---------- */
  'r6-3': {
    obj: [
      "L'alumne/a fa servir «Suma» i «Resta» amb números diferents perquè cada cosa valgui els punts que toca.|El alumno/a usa «Suma» y «Resta» con números diferentes para que cada cosa valga los puntos que toca.",
      "L'alumne/a fa servir la condició «el comptador valgui N» perquè en Bit faci alguna cosa quan arriba a un número.|El alumno/a usa la condición «el contador valga N» para que Bit haga algo cuando llega a un número.",
      "L'alumne/a explica que la condició és certa només quan el comptador val exactament aquest número.|El alumno/a explica que la condición es cierta solo cuando el contador vale exactamente ese número.",
      "L'alumne/a dissenya les regles de punts d'una gimcana i ajusta els valors perquè el marcador arribi a 10.|El alumno/a diseña las reglas de puntos de una gincana y ajusta los valores para que el marcador llegue a 10."
    ],
    comp: [
      "Competència digital (CD5): programar reaccions a partir d'un valor guardat|Competencia digital (CD5): programar reacciones a partir de un valor guardado",
      "Pensament computacional: variables, condicions sobre una variable i depuració|Pensamiento computacional: variables, condiciones sobre una variable y depuración",
      "Matemàtiques (sentit numèric): sumes i restes repetides, sèries de 2 en 2 i igualtat|Matemáticas (sentido numérico): sumas y restas repetidas, series de 2 en 2 e igualdad",
      "Competència personal i social: acordar regles i respectar-les en una activitat de grup|Competencia personal y social: acordar reglas y respetarlas en una actividad de grupo"
    ],
    vocab: [
      ["Punts|Puntos", "El valor que suma o resta cada cosa en un repte.|El valor que suma o resta cada cosa en un reto."],
      ["Marcador|Marcador", "La variable on es guarden els punts.|La variable donde se guardan los puntos."],
      ["Restar punts|Restar puntos", "Fer baixar el marcador sense esborrar el que hi havia.|Hacer bajar el marcador sin borrar lo que había."],
      ["Condició sobre el comptador|Condición sobre el contador", "Un «Si» que pregunta si el comptador val un número.|Un «Si» que pregunta si el contador vale un número."],
      ["Exactament|Exactamente", "Ni més ni menys: 3 és 3, no 4 ni 5.|Ni más ni menos: 3 es 3, no 4 ni 5."],
      ["Rècord|Récord", "El millor resultat aconseguit fins ara.|El mejor resultado conseguido hasta ahora."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Punts i rècords»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Puntos y récords»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra, les targetes de les sessions anteriors i una pissarreta per grup|La cuadrícula del suelo, las tarjetas de las sesiones anteriores y una pizarrita por grupo",
        "Un llum o una llanterna petita (o una cartolina verda) per al «Si el marcador val 6»|Una luz o una linterna pequeña (o una cartulina verde) para el «Si el marcador vale 6»"
      ],
      imprimir: ["Targetes de punts de la gimcana|Tarjetas de puntos de la gincana", "Full de punts de la gimcana|Hoja de puntos de la gincana"],
      prep: [
        "Imprimir i retallar les targetes de punts per grup i un full de punts per parella.|Imprimir y recortar las tarjetas de puntos por grupo y una hoja de puntos por pareja.",
        "Muntar a la quadrícula del terra un recorregut amb 3 estrelles, 1 caixa i 2 caselles vermelles (bassals).|Montar en la cuadrícula del suelo un recorrido con 3 estrellas, 1 caja y 2 casillas rojas (charcos).",
        "Provar abans la demostració de la diapositiva 12 (en Bit acaba a la B).|Probar antes la demostración de la diapositiva 12 (Bit termina en la B).",
        "Pensar un exemple de bàsquet (1, 2 i 3 punts) per a l'inici.|Pensar un ejemplo de baloncesto (1, 2 y 3 puntos) para el inicio."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i la gimcana|Recordamos y la gincana", fase: 'inici',
        fa: "Fes la pregunta de repàs (on va el «Suma 1»). Explica la missió: a la gimcana de la festa major cada cosa dona punts diferents. Pregunta quants punts val una cistella de bàsquet i fes veure que no sempre se suma 1.|Haz la pregunta de repaso (dónde va el «Suma 1»). Explica la misión: en la gincana de la fiesta mayor cada cosa da puntos diferentes. Pregunta cuántos puntos vale una canasta de baloncesto y haz ver que no siempre se suma 1.",
        diu: ["Al bàsquet, quant val una cistella normal? I un triple? I un tir lliure?|En el baloncesto, ¿cuánto vale una canasta normal? ¿Y un triple? ¿Y un tiro libre?",
          "Si una estrella val 2 punts, quin bloc posarem?|Si una estrella vale 2 puntos, ¿qué bloque pondremos?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Punts i el «Si» del comptador|Puntos y el «Si» del contador", fase: 'teoria',
        fa: "Mostra l'animació dels punts i la demostració de restar als bassals. Explica que la variable es pot dir marcador. Després presenta la condició nova: «el comptador valgui 3». A la demostració, la classe diu en quina passa s'encendrà el llum. Acaba amb el «compte!»: de 2 en 2 mai no s'arriba a 3.|Muestra la animación de los puntos y la demostración de restar en los charcos. Explica que la variable se puede llamar marcador. Después presenta la condición nueva: «el contador valga 3». En la demostración, la clase dice en qué paso se encenderá la luz. Termina con el «¡cuidado!»: de 2 en 2 nunca se llega a 3.",
        diu: ["El marcador puja 2 i baixa 1. Quant val després de dues estrelles i un bassal?|El marcador sube 2 y baja 1. ¿Cuánto vale después de dos estrellas y un charco?",
          "En quina passa s'encendrà el llum verd? Aixequeu tants dits com passes.|¿En qué paso se encenderá la luz verde? Levantad tantos dedos como pasos.",
          "Si sumo de 2 en 2: 0, 2, 4, 6… passo mai pel 3?|Si sumo de 2 en 2: 0, 2, 4, 6… ¿paso alguna vez por el 3?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La gimcana de targetes|La gincana de tarjetas", fase: 'desconnectat',
        fa: "En grups de 3 (robot, marcador/a i revisor/a), fan el recorregut de la quadrícula amb les targetes de punts: estrella +2, caixa +5, bassal −1. El marcador/a apunta a la pissarreta i, quan el marcador val exactament 6, el revisor/a encén el llum (o aixeca la cartolina verda). Després omplen per parelles els exercicis 1 i 2 del full de punts.|En grupos de 3 (robot, marcador/a y revisor/a), hacen el recorrido de la cuadrícula con las tarjetas de puntos: estrella +2, caja +5, charco −1. El marcador/a apunta en la pizarrita y, cuando el marcador vale exactamente 6, el revisor/a enciende la luz (o levanta la cartulina verde). Después rellenan por parejas los ejercicios 1 y 2 de la hoja de puntos.",
        diu: ["Abans de començar, a quant posem el marcador?|Antes de empezar, ¿a cuánto ponemos el marcador?",
          "El marcador ha valgut 6 en algun moment? Llavors, s'ha encès el llum?|¿El marcador ha valido 6 en algún momento? Entonces, ¿se ha encendido la luz?",
          "Si canviem l'ordre del recorregut, el marcador passa pel 6?|Si cambiamos el orden del recorrido, ¿el marcador pasa por el 6?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 i després per parelles|Grupos de 3 y después por parejas" },
      { min: 15, t: "A l'ordinador: prediu i investiga|En el ordenador: predice e investiga", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a la pausa activa. A «On acabarà?», demana que segueixin el comptador amb els dits mentre llegeixen el programa. A «El marcador de mitjons», que toquin «Ara no» (és per a casa).|Cada alumno/a hace la sesión hasta la pausa activa. En «¿Dónde terminará?», pide que sigan el contador con los dedos mientras leen el programa. En «El marcador de calcetines», que toquen «Ahora no» (es para casa).",
        diu: ["Després de cada passa, quant val el comptador? Quan gira?|Después de cada paso, ¿cuánto vale el contador? ¿Cuándo gira?",
          "Per què el llum no s'encén mai? Digues els números del comptador un per un.|¿Por qué la luz no se enciende nunca? Di los números del contador uno por uno."],
        slides: ['s11'], app: "La pregunta de «Recorda», la gimcana, les targetes de «Descobreix», la pregunta de les estrelles de 2 punts, «El marcador de mitjons» (per a casa), «Prediu!», «On acabarà?» i l'«Investiga» del llum que no s'encén.|La pregunta de «Recuerda», la gincana, las tarjetas de «Descubre», la pregunta de las estrellas de 2 puntos, «El marcador de calcetines» (para casa), «¡Predice!», «¿Dónde terminará?» y el «Investiga» de la luz que no se enciende.", org: "Individual|Individual" },
      { min: 10, t: "Reptes de la gimcana|Retos de la gincana", fase: 'ordinador',
        fa: "Fes la pausa activa de punts. Després deixa'ls fer els quatre reptes. El quart és el més difícil: si s'encallen, mostra la diapositiva 12 i pregunta quant val el comptador a les passes sense estrella.|Haced la pausa activa de puntos. Después deja que hagan los cuatro retos. El cuarto es el más difícil: si se atascan, muestra la diapositiva 12 y pregunta cuánto vale el contador en los pasos sin estrella.",
        diu: ["Com canvies el número d'un «Suma»? Toca el bloc i fes servir el +.|¿Cómo cambias el número de un «Suma»? Toca el bloque y usa el +.",
          "Al repte del premi, què fa en Bit si el comptador no val 3?|En el reto del premio, ¿qué hace Bit si el contador no vale 3?",
          "Al repte del rècord, quantes vegades sona «sol»? Per què?|En el reto del récord, ¿cuántas veces suena «sol»? ¿Por qué?"],
        slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes: estrelles i caixa, els bassals, el premi del llum verd i el «sol» que sona massa vegades.|«Pausa activa» y los cuatro retos: estrellas y caja, los charcos, el premio de la luz verde y el «sol» que suena demasiadas veces.", org: "Individual|Individual" },
      { min: 5, t: "Crea: la meva gimcana de punts|Crea: mi gincana de puntos", fase: 'crea',
        fa: "Cada alumne/a decideix quants punts val cada cosa i els ajusta perquè el marcador arribi exactament a 10 i s'encengui el llum verd. Abans d'executar, que apunti al full de punts les seves regles.|Cada alumno/a decide cuántos puntos vale cada cosa y los ajusta para que el marcador llegue exactamente a 10 y se encienda la luz verde. Antes de ejecutar, que apunte en la hoja de puntos sus reglas.",
        diu: ["Quines són les teves regles? Quant val una estrella? I la caixa?|¿Cuáles son tus reglas? ¿Cuánto vale una estrella? ¿Y la caja?",
          "El marcador passa exactament pel 10? Si no, quin número canviaries?|¿El marcador pasa exactamente por el 10? Si no, ¿qué número cambiarías?"],
        slides: ['s14'], app: "Pas «Crea»: La meva gimcana de punts.|Paso «Crea»: Mi gincana de puntos.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals i fes el tiquet de sortida. Reconeix la insígnia «Rècord de punts».|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales y haz el ticket de salida. Reconoce la insignia «Récord de puntos».",
        diu: ["Quan és certa la condició «el marcador valgui 5»?|¿Cuándo es cierta la condición «el marcador valga 5»?",
          "Quin bloc fas servir per perdre un punt?|¿Qué bloque usas para perder un punto?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa dos blocs «Suma 1» en lloc d'un «Suma 2» i el programa es fa molt llarg.|Pone dos bloques «Suma 1» en lugar de un «Suma 2» y el programa se hace muy largo.",
        "Funciona, però pregunta-li si recorda com es canvia el número d'un bloc. Que provi de tocar-lo i fer servir el +.|Funciona, pero pregúntale si recuerda cómo se cambia el número de un bloque. Que pruebe a tocarlo y usar el +."],
      ["Creu que «el comptador valgui 3» també és cert quan val 4 o 5.|Cree que «el contador valga 3» también es cierto cuando vale 4 o 5.",
        "Torna a l'animació de la recta numèrica. Que digui els valors del comptador un a un i aixequi la mà només quan diu exactament 3.|Vuelve a la animación de la recta numérica. Que diga los valores del contador uno a uno y levante la mano solo cuando dice exactamente 3."],
      ["Al repte del premi, posa el «Si el comptador…» dins del Repeteix i el llum s'encén abans d'hora.|En el reto del premio, pone el «Si el contador…» dentro del Repite y la luz se enciende antes de hora.",
        "Pregunta: quan vols saber si en té 3, a mig camí o al final? Llavors, on ha d'anar el «Si»?|Pregunta: ¿cuándo quieres saber si tiene 3, a medio camino o al final? Entonces, ¿dónde tiene que ir el «Si»?"],
      ["Al repte del rècord no entén per què «sol» sona dues vegades.|En el reto del récord no entiende por qué «sol» suena dos veces.",
        "Que l'executi pas a pas mirant el marcador. Quan arriba a 3, què passa a la passa següent si no hi ha estrella? El comptador continua valent 3!|Que lo ejecute paso a paso mirando el marcador. Cuando llega a 3, ¿qué pasa en el paso siguiente si no hay estrella? ¡El contador sigue valiendo 3!"],
      ["Al projecte, el marcador se salta el 10 (passa de 9 a 11) i el llum no s'encén.|En el proyecto, el marcador se salta el 10 (pasa de 9 a 11) y la luz no se enciende.",
        "No li diguis quin número ha de canviar. Que escrigui els valors del marcador després de cada cosa i busqui on se salta el 10.|No le digas qué número tiene que cambiar. Que escriba los valores del marcador después de cada cosa y busque dónde se salta el 10."]
    ],
    diff: {
      mes: "Al projecte, fer que el bassal vermell resti punts i tornar a ajustar les regles perquè el marcador encara arribi a 10. Inventar una regla nova: quan el marcador valgui 5, sona una nota.|En el proyecto, hacer que el charco rojo reste puntos y volver a ajustar las reglas para que el marcador todavía llegue a 10. Inventar una regla nueva: cuando el marcador valga 5, suena una nota.",
      menys: "Escriure al full de punts els valors del marcador després de cada estrella o caixa abans de programar. Al projecte, començar amb estrelles de 3 punts i la caixa d'1 punt (3 + 1 + 3 + 3 = 10).|Escribir en la hoja de puntos los valores del marcador después de cada estrella o caja antes de programar. En el proyecto, empezar con estrellas de 3 puntos y la caja de 1 punto (3 + 1 + 3 + 3 = 10)."
    },
    aval: {
      ticket: ["Quan és certa la condició «el marcador valgui 5»?|¿Cuándo es cierta la condición «el marcador valga 5»?",
        "Una estrella val 2 i una caixa 5. Quants punts són 2 estrelles i 1 caixa?|Una estrella vale 2 y una caja 5. ¿Cuántos puntos son 2 estrellas y 1 caja?"],
      rubric: [
        ["Punts de valors diferents|Puntos de valores diferentes", "Ajusta el número de «Suma» i «Resta» al valor de cada cosa i calcula el total.|Ajusta el número de «Suma» y «Resta» al valor de cada cosa y calcula el total.", "Fa servir «Suma 1» repetit o s'equivoca en el total.|Usa «Suma 1» repetido o se equivoca en el total."],
        ["Condició sobre el comptador|Condición sobre el contador", "Fa servir «el comptador valgui N» al lloc correcte i explica per què de 2 en 2 no s'arriba a 3.|Usa «el contador valga N» en el lugar correcto y explica por qué de 2 en 2 no se llega a 3.", "Fa servir la condició amb ajuda o creu que vol dir «N o més».|Usa la condición con ayuda o cree que quiere decir «N o más»."],
        ["Depurar amb el marcador|Depurar con el marcador", "Troba els bugs mirant el marcador pas a pas.|Encuentra los bugs mirando el marcador paso a paso.", "Prova canvis a l'atzar fins que el número surt bé.|Prueba cambios al azar hasta que el número sale bien."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu fer «El marcador de mitjons»: poseu el marcador a 0, llanceu mitjons a una cistella (si entra, suma 2; si cau, resta 1) i crideu «Rècord!» quan valgui exactament 6.|En casa, con el móvil, podéis hacer «El marcador de calcetines»: poned el marcador a 0, lanzad calcetines a una cesta (si entra, suma 2; si cae, resta 1) y gritad «¡Récord!» cuando valga exactamente 6.",
    slides: [
      { id: 's1', k: 'portada', t: "Punts i rècords|Puntos y récords", x: "A la gimcana de la festa major, cada cosa val punts diferents. I quan el marcador arriba a un número… passa alguna cosa!|En la gincana de la fiesta mayor, cada cosa vale puntos diferentes. Y cuando el marcador llega a un número… ¡pasa algo!",
        nota: "Explica que avui la variable es dirà marcador i que en Bit reaccionarà quan arribi a un número.|Explica que hoy la variable se llamará marcador y que Bit reaccionará cuando llegue a un número." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Per comptar només les estrelles, on va el bloc «Suma 1»?|Para contar solo las estrellas, ¿dónde va el bloque «Suma 1»?",
        nota: "Resposta: a dins del «Si hi ha una estrella».|Respuesta: dentro del «Si hay una estrella»." },
      { id: 's3', k: 'pregunta', t: "Quants punts val?|¿Cuántos puntos vale?", x: "Al bàsquet, una cistella no sempre val el mateix. Quants punts val cada tipus de cistella?|En el baloncesto, una canasta no siempre vale lo mismo. ¿Cuántos puntos vale cada tipo de canasta?",
        nota: "Tir lliure: 1 punt; cistella normal: 2; triple: 3. Per això el «Suma» pot tenir números diferents.|Tiro libre: 1 punto; canasta normal: 2; triple: 3. Por eso el «Suma» puede tener números diferentes." },
      { id: 's4', k: 'anim', t: "Cada cosa pot valer diferent|Cada cosa puede valer diferente", anim: 'u6points', x: "Estrella: «Suma 2». Caixa: «Suma 5».|Estrella: «Suma 2». Caja: «Suma 5».",
        nota: "Que la classe calculi el marcador en veu alta abans que l'animació el mostri: 2, 7, 9.|Que la clase calcule el marcador en voz alta antes de que la animación lo muestre: 2, 7, 9." },
      { id: 's5', k: 'demo', t: "Perdre punts als bassals|Perder puntos en los charcos", x: "Estrella +2, bassal vermell −1. Quant valdrà el comptador a la bandera?|Estrella +2, charco rojo −1. ¿Cuánto valdrá el contador en la bandera?",
        demo: { w: { map: ['......', '>*r*rF', '......'], vname: 'comptador|contador' }, prog: '5{ f if:gem{ add:2 } if:floor:r{ sub:1 } }' },
        nota: "2 − 1 + 2 − 1 = 2. Fes notar que hi ha dos «Si», un per a cada cosa.|2 − 1 + 2 − 1 = 2. Haz notar que hay dos «Si», uno para cada cosa." },
      { id: 's6', k: 'concepte', t: "Les variables tenen nom|Las variables tienen nombre", punts: ["Comptador, marcador, punts, fruites…|Contador, marcador, puntos, frutas…", "El nom diu què recorda la variable.|El nombre dice qué recuerda la variable.", "Abans de començar, el marcador es posa a 0.|Antes de empezar, el marcador se pone a 0."], anim: 'u6box',
        nota: "Explica que als reptes d'avui la variable d'en Bit es diu «marcador».|Explica que en los retos de hoy la variable de Bit se llama «marcador»." },
      { id: 's7', k: 'demo', t: "Quan el comptador valgui 3…|Cuando el contador valga 3…", x: "En Bit suma 1 a cada passa. En quina passa s'encendrà el llum verd?|Bit suma 1 en cada paso. ¿En qué paso se encenderá la luz verde?",
        demo: { w: { map: ['......', '>####F', '......'], vname: 'comptador|contador' }, prog: '5{ f add:1 if:cnt=3{ light:g } }' },
        nota: "A la tercera passa. Fes notar que el «Si» mira el comptador a cada volta del bucle.|En el tercer paso. Haz notar que el «Si» mira el contador en cada vuelta del bucle." },
      { id: 's8', k: 'anim', t: "Compte! Exactament 3|¡Cuidado! Exactamente 3", anim: 'u6jump', x: "De 2 en 2, el comptador se salta el 3 i el «Si» no fa res.|De 2 en 2, el contador se salta el 3 y el «Si» no hace nada.",
        nota: "Feu salts de 2 en 2 a la recta numèrica de la pissarra: el 3 no el trepitgem mai.|Haced saltos de 2 en 2 en la recta numérica de la pizarra: el 3 no lo pisamos nunca." },
      { id: 's9', k: 'activitat', t: "La gimcana de targetes|La gincana de tarjetas", timer: 12, punts: ["Poseu el marcador a 0.|Poned el marcador a 0.", "Estrella +2 · Caixa +5 · Bassal −1.|Estrella +2 · Caja +5 · Charco −1.", "Quan el marcador val exactament 6: llum!|Cuando el marcador vale exactamente 6: ¡luz!", "Després, el full de punts per parelles.|Después, la hoja de puntos por parejas."],
        nota: "Roteu els papers a cada volta del recorregut. Si el marcador se salta el 6, no s'encén el llum: comenteu-ho!|Rotad los papeles en cada vuelta del recorrido. Si el marcador se salta el 6, no se enciende la luz: ¡comentadlo!" },
      { id: 's10', k: 'concepte', t: "Les regles de la gimcana|Las reglas de la gincana", blocks: ["Suma 2 ⭐|Suma 2 ⭐", "Suma 5 📦|Suma 5 📦", "Resta 1 🟥|Resta 1 🟥", "Si el marcador val 6 💡|Si el marcador vale 6 💡"],
        nota: "Deixa-ho projectat durant l'activitat del terra.|Déjalo proyectado durante la actividad del suelo." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Punts i rècords».|Abre la sesión «Puntos y récords».", "A «On acabarà?», segueix el comptador amb els dits.|En «¿Dónde terminará?», sigue el contador con los dedos.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "A «El marcador de mitjons», que toquin «Ara no»: és per a casa.|En «El marcador de calcetines», que toquen «Ahora no»: es para casa." },
      { id: 's12', k: 'demo', t: "On acabarà en Bit?|¿Dónde terminará Bit?", x: "Suma 1 a cada passa i gira a l'esquerra quan el comptador val 2. A, B o C?|Suma 1 en cada paso y gira a la izquierda cuando el contador vale 2. ¿A, B o C?",
        demo: { w: { map: ['..B..', '..#C.', '>###A'] }, prog: '4{ f add:1 if:cnt=2{ l } }' },
        nota: "Resposta: B. Després de 2 passes gira i les altres 2 les fa pujant. Serveix de pista per al repte del rècord.|Respuesta: B. Después de 2 pasos gira y los otros 2 los da subiendo. Sirve de pista para el reto del récord." },
      { id: 's13', k: 'repte', t: "Reptes de la gimcana|Retos de la gincana", timer: 10, punts: ["1. Estrelles i caixa|1. Estrellas y caja", "2. Els bassals de fang|2. Los charcos de barro", "3. El premi del llum verd|3. El premio de la luz verde", "4. El «sol» que sona massa|4. El «sol» que suena demasiado"],
        nota: "Pista del 4: el «Si el comptador…» ha d'anar a dins del «Si hi ha una estrella».|Pista del 4: el «Si el contador…» tiene que ir dentro del «Si hay una estrella»." },
      { id: 's14', k: 'activitat', t: "Crea: la meva gimcana de punts|Crea: mi gincana de puntos", timer: 5, x: "Tria quants punts val cada cosa. Quan el marcador valgui 10, encén el llum verd!|Elige cuántos puntos vale cada cosa. Cuando el marcador valga 10, ¡enciende la luz verde!",
        nota: "Si el marcador se salta el 10, que escriguin els valors un a un al full de punts.|Si el marcador se salta el 10, que escriban los valores uno a uno en la hoja de puntos." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Cada cosa pot valer punts diferents: Suma 2, Suma 5, Resta 1…|Cada cosa puede valer puntos diferentes: Suma 2, Suma 5, Resta 1…", "«El comptador valgui 3» vol dir exactament 3.|«El contador valga 3» quiere decir exactamente 3.", "Amb un «Si», en Bit reacciona quan arriba a un número.|Con un «Si», Bit reacciona cuando llega a un número."],
        nota: "Avança que a la sessió següent faran el projecte del mercat i ho comptaran tot.|Avanza que en la sesión siguiente harán el proyecto del mercado y lo contarán todo." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quan és certa «el marcador valgui 5»?|¿Cuándo es cierta «el marcador valga 5»?", "2 estrelles (2 punts) i 1 caixa (5 punts): quants punts?|2 estrellas (2 puntos) y 1 caja (5 puntos): ¿cuántos puntos?"],
        nota: "Respostes: només quan val exactament 5; 9 punts.|Respuestas: solo cuando vale exactamente 5; 9 puntos." }
    ],
    print: [
      { id: 'p1', t: "Targetes de punts de la gimcana|Tarjetas de puntos de la gincana", k: 'targetes',
        intro: "Un paquet per grup. Les targetes de punts es posen al costat de cada estrella, caixa o bassal de la quadrícula; la targeta del llum es fa servir quan el marcador val exactament 6.|Un paquete por grupo. Las tarjetas de puntos se ponen al lado de cada estrella, caja o charco de la cuadrícula; la tarjeta de la luz se usa cuando el marcador vale exactamente 6.",
        items: [
          { t: "Suma 2 ⭐|Suma 2 ⭐", n: 3 },
          { t: "Suma 5 📦|Suma 5 📦", n: 1 },
          { t: "Resta 1 🟥|Resta 1 🟥", n: 2 },
          { t: "Posa el marcador a 0 0️⃣|Pon el marcador a 0 0️⃣", n: 1 },
          { t: "Si el marcador val 6 ❓|Si el marcador vale 6 ❓", n: 1 },
          { t: "Encén el llum verd 💡|Enciende la luz verde 💡", n: 1 }
        ] },
      { id: 'p2', t: "Full de punts de la gimcana|Hoja de puntos de la gincana", k: 'fitxa',
        intro: "Per parelles. Escriviu el marcador després de cada cosa: així veureu si passa pel número que voleu.|Por parejas. Escribid el marcador después de cada cosa: así veréis si pasa por el número que queréis.",
        items: [
          { q: "Una estrella val 2 punts i una caixa en val 5. En Bit recull 2 estrelles i 1 caixa. Quants punts té? Escriu el marcador després de cada cosa.|Una estrella vale 2 puntos y una caja vale 5. Bit recoge 2 estrellas y 1 caja. ¿Cuántos puntos tiene? Escribe el marcador después de cada cosa.",
            sol: "Per exemple: 2, 4, 9. Total: 9 punts.|Por ejemplo: 2, 4, 9. Total: 9 puntos." },
          { q: "En Bit suma 1 a cada passa i gira a l'esquerra quan el comptador val 2. On acaba: A, B o C?|Bit suma 1 en cada paso y gira a la izquierda cuando el contador vale 2. ¿Dónde termina: A, B o C?",
            w: { map: ['..B..', '..#C.', '>###A'] }, prog: '4{ f add:1 if:cnt=2{ l } }', a: 'B',
            sol: "A la B: després de 2 passes el comptador val 2, gira cap amunt i fa 2 passes més.|En la B: después de 2 pasos el contador vale 2, gira hacia arriba y da 2 pasos más." },
          { q: "El marcador comença a 0 i a cada estrella fa «Suma 2». Arribarà mai a valer 5? Per què?|El marcador empieza en 0 y en cada estrella hace «Suma 2». ¿Llegará alguna vez a valer 5? ¿Por qué?",
            sol: "No: fa 2, 4, 6, 8… i se salta el 5. La condició «valgui 5» no serà mai certa.|No: hace 2, 4, 6, 8… y se salta el 5. La condición «valga 5» nunca será cierta." },
          { q: "Les teves regles per al projecte: quants punts val una estrella, la caixa i el bassal vermell? Escriu el marcador després de cada cosa. Arriba exactament a 10?|Tus reglas para el proyecto: ¿cuántos puntos vale una estrella, la caja y el charco rojo? Escribe el marcador después de cada cosa. ¿Llega exactamente a 10?",
            sol: "Resposta oberta. Una possibilitat: estrella 3 i caixa 1 → 3, 4, 7, 10.|Respuesta abierta. Una posibilidad: estrella 3 y caja 1 → 3, 4, 7, 10." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: el recol·lector de fruita ---------- */
  'r6-4': {
    obj: [
      "L'alumne/a planifica un programa amb una variable responent quatre preguntes: què compta, amb quin número comença, quan canvia i quant ha de valer al final.|El alumno/a planifica un programa con una variable respondiendo cuatro preguntas: qué cuenta, con qué número empieza, cuándo cambia y cuánto tiene que valer al final.",
      "L'alumne/a fa servir una mateixa variable per sumar coses que valen diferent (fruita +1, caixa +5) mentre reparteix caixes.|El alumno/a usa una misma variable para sumar cosas que valen diferente (fruta +1, caja +5) mientras reparte cajas.",
      "L'alumne/a programa, prova i millora el projecte final de la unitat combinant variables, bucles, condicions i funcions.|El alumno/a programa, prueba y mejora el proyecto final de la unidad combinando variables, bucles, condiciones y funciones.",
      "L'alumne/a presenta el projecte i explica com ha comprovat que el comptador dona el número correcte.|El alumno/a presenta el proyecto y explica cómo ha comprobado que el contador da el número correcto."
    ],
    comp: [
      "Competència digital (CD5): crear un programa per resoldre un problema de diverses etapes|Competencia digital (CD5): crear un programa para resolver un problema de varias etapas",
      "Pensament computacional: variables, descomposició, planificació i depuració|Pensamiento computacional: variables, descomposición, planificación y depuración",
      "Matemàtiques: sumes amb sumands diferents, multiplicació com a suma repetida i comprovació de resultats|Matemáticas: sumas con sumandos diferentes, multiplicación como suma repetida y comprobación de resultados",
      "Comunicació oral: presentar un projecte i justificar un resultat|Comunicación oral: presentar un proyecto y justificar un resultado"
    ],
    vocab: [
      ["Planificar|Planificar", "Decidir què farà el programa, i en quin ordre, abans de posar blocs.|Decidir qué hará el programa, y en qué orden, antes de poner bloques."],
      ["Valor inicial|Valor inicial", "El número amb què comença la variable.|El número con que empieza la variable."],
      ["Valor final|Valor final", "El número que té la variable quan el programa acaba.|El número que tiene la variable cuando el programa termina."],
      ["Parada|Puesto", "La casa del mercat on en Bit deixa les caixes de fruita.|La casa del mercado donde Bit deja las cajas de fruta."],
      ["Comprovar|Comprobar", "Mirar si el resultat és el que esperàvem i, si no, buscar el bug.|Mirar si el resultado es el que esperábamos y, si no, buscar el bug."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el recol·lector de fruita»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el recolector de fruta»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra, totes les targetes de la unitat i una pissarreta per grup|La cuadrícula del suelo, todas las tarjetas de la unidad y una pizarrita por grupo",
        "Dues capses petites (caixes de fruita), dues cadires o cartolines (parades) i 4 fruites de paper o de joguina per grup|Dos cajas pequeñas (cajas de fruta), dos sillas o cartulinas (puestos) y 4 frutas de papel o de juguete por grupo"
      ],
      imprimir: ["Targetes del mercat|Tarjetas del mercado", "Full de pla del recol·lector|Hoja de plan del recolector"],
      prep: [
        "Muntar a la quadrícula del terra el mapa del projecte (exercici 1 del full de pla): 4 fruites, 2 caixes, 2 parades, una roca i un estany.|Montar en la cuadrícula del suelo el mapa del proyecto (ejercicio 1 de la hoja de plan): 4 frutas, 2 cajas, 2 puestos, una roca y un estanque.",
        "Imprimir les targetes del mercat per grup i un full de pla per parella.|Imprimir las tarjetas del mercado por grupo y una hoja de plan por pareja.",
        "Decidir com es presentaran els projectes: 3 o 4 voluntaris al projector o una volta per l'aula.|Decidir cómo se presentarán los proyectos: 3 o 4 voluntarios en el proyector o una vuelta por el aula.",
        "Tenir preparat un reconeixement senzill per al final de la unitat (insígnia de recol·lector/a).|Tener preparado un reconocimiento sencillo para el final de la unidad (insignia de recolector/a)."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i el mercat de l'illa|Recordamos y el mercado de la isla", fase: 'inici',
        fa: "Fes les preguntes de repàs (la condició exacta i com es compten fruites d'illes diferents). Explica la missió: dissabte hi ha mercat i en Bit ha de collir fruita, portar caixes a les parades i comptar-ho tot. Avui és el projecte final de la unitat.|Haz las preguntas de repaso (la condición exacta y cómo se cuentan frutas de islas diferentes). Explica la misión: el sábado hay mercado y Bit tiene que recoger fruta, llevar cajas a los puestos y contarlo todo. Hoy es el proyecto final de la unidad.",
        diu: ["Quan és certa la condició «el comptador valgui 3»?|¿Cuándo es cierta la condición «el contador valga 3»?",
          "Avui farem servir tot el que hem après: comptar, sumar punts diferents i el «Si».|Hoy usaremos todo lo que hemos aprendido: contar, sumar puntos diferentes y el «Si»."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El pla del recol·lector|El plan del recolector", fase: 'teoria',
        fa: "Explica les quatre preguntes del pla amb l'animació. A les dues demostracions, la classe prediu el valor final abans d'executar. Repassa les regles del mercat: fruita +1, caixa a la parada +5, una sola caixa cada vegada, el comptador a 0 al principi.|Explica las cuatro preguntas del plan con la animación. En las dos demostraciones, la clase predice el valor final antes de ejecutar. Repasa las reglas del mercado: fruta +1, caja en el puesto +5, una sola caja cada vez, el contador a 0 al principio.",
        diu: ["Què vol comptar en Bit? Amb quin número comença?|¿Qué quiere contar Bit? ¿Con qué número empieza?",
          "Per què suma 5 quan deixa la caixa, i no quan l'agafa?|¿Por qué suma 5 cuando deja la caja, y no cuando la coge?",
          "2 fruites i 1 caixa: quant valdrà el comptador?|2 frutas y 1 caja: ¿cuánto valdrá el contador?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El mercat al terra|El mercado en el suelo", fase: 'desconnectat',
        fa: "Per parelles, omplen l'exercici 1 del full de pla (les quatre preguntes) i l'exercici 2 (l'ordre de la feina). Després, en grups de 3 (robot, comptador/a i revisor/a), executen el pla a la quadrícula del terra: el robot cull les fruites i porta les caixes una a una, el comptador/a suma a la pissarreta i el revisor/a comprova que al final val 14.|Por parejas, rellenan el ejercicio 1 de la hoja de plan (las cuatro preguntas) y el ejercicio 2 (el orden del trabajo). Después, en grupos de 3 (robot, contador/a y revisor/a), ejecutan el plan en la cuadrícula del suelo: el robot recoge las frutas y lleva las cajas una a una, el contador/a suma en la pizarrita y el revisor/a comprueba que al final vale 14.",
        diu: ["Primer el pla. Quin és el primer bloc del vostre programa?|Primero el plan. ¿Cuál es el primer bloque de vuestro programa?",
          "El comptador val 14 al final? Si no, en quina fruita o caixa us heu descomptat?|¿El contador vale 14 al final? Si no, ¿en qué fruta o caja os habéis descontado?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles i després grups de 3|Por parejas y después grupos de 3" },
      { min: 12, t: "A l'ordinador: les primeres feines|En el ordenador: los primeros trabajos", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a l'«Investiga» del comptador que s'esborra. Recorda'ls que diguin el valor final esperat abans d'executar cada repte. Fixa't en qui suma les caixes abans de deixar-les.|Cada alumno/a hace la sesión hasta el «Investiga» del contador que se borra. Recuérdales que digan el valor final esperado antes de ejecutar cada reto. Fíjate en quién suma las cajas antes de dejarlas.",
        diu: ["Quant ha de valer el comptador al final d'aquest repte? Com ho saps?|¿Cuánto tiene que valer el contador al final de este reto? ¿Cómo lo sabes?",
          "A la funció «cull», què fa en Bit a cada casella?|En la función «recoge», ¿qué hace Bit en cada casilla?"],
        slides: ['s10'], app: "Les dues preguntes de «Recorda», el mercat de l'illa, les targetes de «Descobreix», les regles d'en Bit, ordenar el pla, la primera feina (ordenar blocs), els camps en U, la «Pausa activa», les dues caixes i l'«Investiga» del «Posa a 0» al mig.|Las dos preguntas de «Recuerda», el mercado de la isla, las tarjetas de «Descubre», las reglas de Bit, ordenar el plan, el primer trabajo (ordenar bloques), los campos en U, la «Pausa activa», las dos cajas y el «Investiga» del «Pon a 0» en medio.", org: "Individual|Individual" },
      { min: 15, t: "Projecte: el recol·lector de fruita|Proyecto: el recolector de fruta", fase: 'crea',
        fa: "Primer, el repte dels tres camins de fruiters. Després, abans del projecte final, cada alumne/a revisa el seu full de pla: per on començarà i en quin ordre farà la feina. Quan el tingui, programa tros a tros i comprova el comptador després de cada caixa.|Primero, el reto de los tres caminos de frutales. Después, antes del proyecto final, cada alumno/a revisa su hoja de plan: por dónde empezará y en qué orden hará el trabajo. Cuando lo tenga, programa trozo a trozo y comprueba el contador después de cada caja.",
        diu: ["Quin és el primer bloc? Per què?|¿Cuál es el primer bloque? ¿Por qué?",
          "Després de la primera caixa, quant hauria de valer el comptador?|Después de la primera caja, ¿cuánto debería valer el contador?",
          "Ja funciona? Pots fer-ho amb menys blocs fent servir un Repeteix o un «Si»?|¿Ya funciona? ¿Puedes hacerlo con menos bloques usando un Repite o un «Si»?"],
        slides: ['s11', 's12', 's13'], app: "El repte dels tres camins i el projecte de «Crea»: El recol·lector de fruita.|El reto de los tres caminos y el proyecto de «Crea»: El recolector de fruta.", org: "Individual|Individual" },
      { min: 5, t: "Presentem els projectes|Presentamos los proyectos", fase: 'tancament',
        fa: "Tres o quatre voluntaris projecten el seu recol·lector. Abans d'executar-lo, la classe diu quant valdrà el comptador després de cada caixa. Després, cada voluntari/ària explica un bug que hagi trobat i com l'ha arreglat.|Tres o cuatro voluntarios proyectan su recolector. Antes de ejecutarlo, la clase dice cuánto valdrá el contador después de cada caja. Después, cada voluntario/a explica un bug que haya encontrado y cómo lo ha arreglado.",
        diu: ["Com has sabut que el teu comptador donava el número bo?|¿Cómo has sabido que tu contador daba el número bueno?",
          "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?",
          "Què t'ha agradat del projecte del company/a?|¿Qué te ha gustado del proyecto del compañero/a?"],
        slides: ['s14'], app: "El projecte desat a «Crea», projectat des de l'ordinador de cada voluntari/ària.|El proyecto guardado en «Crea», proyectado desde el ordenador de cada voluntario/a.", org: "Tot el grup|Todo el grupo" },
      { min: 3, t: "Tancament de la unitat|Cierre de la unidad", fase: 'tancament',
        fa: "Repassa les idees de la unitat amb el resum, deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida. Reconeix la feina de tothom amb la insígnia de recol·lector/a.|Repasa las ideas de la unidad con el resumen, deja que respondan las preguntas finales de la app y haz el ticket de salida. Reconoce el trabajo de todos con la insignia de recolector/a.",
        diu: ["Quines quatre preguntes et fas abans de programar amb una variable?|¿Qué cuatro preguntas te haces antes de programar con una variable?",
          "On heu vist variables aquesta setmana fora de l'escola?|¿Dónde habéis visto variables esta semana fuera del cole?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Oblida posar el comptador a 0 al principi i acaba amb 17 en lloc de 14.|Olvida poner el contador a 0 al principio y termina con 17 en lugar de 14.",
        "Pregunta: quant valia el comptador abans d'executar? D'on surten els 3 de més? Que ho descobreixi mirant el marcador.|Pregunta: ¿cuánto valía el contador antes de ejecutar? ¿De dónde salen los 3 de más? Que lo descubra mirando el marcador."],
      ["Suma 5 quan agafa la caixa i, si després xoca, el comptador ja ha comptat fruites que no han arribat.|Suma 5 cuando coge la caja y, si después choca, el contador ya ha contado frutas que no han llegado.",
        "Recorda la regla del mercat: compta la fruita que arriba a la parada. Que posi el «Suma 5» just després de «Deixa la caixa».|Recuerda la regla del mercado: cuenta la fruta que llega al puesto. Que ponga el «Suma 5» justo después de «Deja la caja»."],
      ["Intenta agafar la segona caixa sense haver deixat la primera.|Intenta coger la segunda caja sin haber dejado la primera.",
        "Torna a la unitat 1: una caixa cada vegada. Que miri el seu pla: després d'agafar, quin tros toca?|Vuelve a la unidad 1: una caja cada vez. Que mire su plan: después de coger, ¿qué trozo toca?"],
      ["Es perd al mig del projecte i comença a canviar blocs a l'atzar.|Se pierde en medio del proyecto y empieza a cambiar bloques al azar.",
        "Atura'l amb amabilitat: que torni al full de pla i executi pas a pas fins a la primera caixa. El comptador hi val el que esperava?|Páralo con amabilidad: que vuelva a la hoja de plan y ejecute paso a paso hasta la primera caja. ¿El contador vale ahí lo que esperaba?"],
      ["S'oblida d'una fruita i el comptador acaba a 13.|Se olvida de una fruta y el contador termina en 13.",
        "Pregunta: quantes fruites hi ha al mapa? Quantes estrelles queden sense recollir? Que compti amb el dit damunt la pantalla.|Pregunta: ¿cuántas frutas hay en el mapa? ¿Cuántas estrellas quedan sin recoger? Que cuente con el dedo sobre la pantalla."]
    ],
    diff: {
      mes: "Fer el projecte en un altre ordre (primer les caixes i després les fruites) i comparar quin programa té menys blocs. Després, afegir un «Si» que faci sonar una nota quan el comptador valgui 10.|Hacer el proyecto en otro orden (primero las cajas y después las frutas) y comparar qué programa tiene menos bloques. Después, añadir un «Si» que haga sonar una nota cuando el contador valga 10.",
      menys: "Fer el pla al full amb targetes damunt la taula, un tros per fila, i programar tros a tros. Començar per una sola caixa i les fruites que troba pel camí i comprovar el comptador abans de continuar.|Hacer el plan en la hoja con tarjetas sobre la mesa, un trozo por fila, y programar trozo a trozo. Empezar por una sola caja y las frutas que encuentra por el camino y comprobar el contador antes de seguir."
    },
    aval: {
      ticket: ["Quines quatre preguntes et fas abans de programar amb una variable?|¿Qué cuatro preguntas te haces antes de programar con una variable?",
        "En Bit cull 3 fruites (+1) i deixa 2 caixes (+5). Quant val el comptador si començava a 0?|Bit recoge 3 frutas (+1) y deja 2 cajas (+5). ¿Cuánto vale el contador si empezaba en 0?"],
      rubric: [
        ["Planificació amb variables|Planificación con variables", "Respon les quatre preguntes del pla i el segueix en programar.|Responde las cuatro preguntas del plan y lo sigue al programar.", "Fa el pla quan l'hi demanen, però programa sense seguir-lo.|Hace el plan cuando se lo piden, pero programa sin seguirlo."],
        ["Variable amb valors diferents|Variable con valores diferentes", "Inicialitza el comptador i suma +1 i +5 al moment correcte.|Inicializa el contador y suma +1 y +5 en el momento correcto.", "Fa servir el comptador, però oblida inicialitzar-lo o suma en un moment equivocat.|Usa el contador, pero olvida inicializarlo o suma en un momento equivocado."],
        ["Projecte final|Proyecto final", "Cull les 4 fruites, reparteix les 2 caixes, el comptador val 14 i explica com ho ha comprovat.|Recoge las 4 frutas, reparte las 2 cajas, el contador vale 14 y explica cómo lo ha comprobado.", "Completa una part del projecte o el completa amb ajuda.|Completa una parte del proyecto o lo completa con ayuda."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla us pot ensenyar el projecte «El recol·lector de fruita» i explicar-vos com ha comptat la fruita. Podeu fer de mercat amb fruita de veritat: compteu les peces soltes (+1) i les bosses de 5 (+5).|En casa, con el móvil, vuestro hijo o hija os puede enseñar el proyecto «El recolector de fruta» y explicaros cómo ha contado la fruta. Podéis hacer de mercado con fruta de verdad: contad las piezas sueltas (+1) y las bolsas de 5 (+5).",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: el recol·lector de fruita|Proyecto: el recolector de fruta", x: "Avui farem el projecte final de la unitat: collir, repartir i comptar-ho tot al mercat de l'illa.|Hoy haremos el proyecto final de la unidad: recoger, repartir y contarlo todo en el mercado de la isla.",
        nota: "Explica que avui faran servir tot el que han après a les tres sessions de la unitat.|Explica que hoy usarán todo lo que han aprendido en las tres sesiones de la unidad." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Quan és certa la condició «el comptador valgui 3»? I com comptem fruites d'illes diferents?|¿Cuándo es cierta la condición «el contador valga 3»? ¿Y cómo contamos frutas de islas diferentes?",
        nota: "Respostes: només quan val exactament 3; amb «Si hi ha una estrella» i «Suma 1» a dins.|Respuestas: solo cuando vale exactamente 3; con «Si hay una estrella» y «Suma 1» dentro." },
      { id: 's3', k: 'concepte', t: "El mercat de l'illa|El mercado de la isla", punts: ["Cada fruita (estrella) val +1.|Cada fruta (estrella) vale +1.", "Cada caixa deixada a una parada val +5.|Cada caja dejada en un puesto vale +5.", "Al final, el comptador diu quantes fruites hi ha al mercat.|Al final, el contador dice cuántas frutas hay en el mercado."],
        nota: "Pregunta per què una caixa val 5: perquè porta 5 fruites a dins.|Pregunta por qué una caja vale 5: porque lleva 5 frutas dentro." },
      { id: 's4', k: 'anim', t: "Quatre preguntes abans de començar|Cuatro preguntas antes de empezar", anim: 'u6plan', punts: ["Què vull comptar?|¿Qué quiero contar?", "Amb quin número comença?|¿Con qué número empieza?", "Quan suma? Quant?|¿Cuándo suma? ¿Cuánto?", "Quant ha de valer al final?|¿Cuánto tiene que valer al final?"],
        nota: "Escriu les quatre preguntes a la pissarra: les faran servir al full de pla.|Escribe las cuatro preguntas en la pizarra: las usarán en la hoja de plan." },
      { id: 's5', k: 'demo', t: "Una caixa plena val 5|Una caja llena vale 5", x: "En Bit agafa la caixa, la porta a la parada i suma 5. Quant valdrà el comptador?|Bit coge la caja, la lleva al puesto y suma 5. ¿Cuánto valdrá el contador?",
        demo: { w: { map: ['.....', '>b#H.', '.....'], vname: 'comptador|contador' }, prog: 'setv:0 f p f f d add:5' },
        nota: "Resposta: 5. Fes notar que suma després de deixar la caixa.|Respuesta: 5. Haz notar que suma después de dejar la caja." },
      { id: 's6', k: 'demo', t: "Fruites soltes i caixes|Frutas sueltas y cajas", x: "Dues fruites (+1) i una caixa (+5). Quant valdrà el comptador?|Dos frutas (+1) y una caja (+5). ¿Cuánto valdrá el contador?",
        demo: { w: { map: ['......', '>*b*H.', '......'], vname: 'comptador|contador' }, prog: 'f if:gem{ add:1 } f p f if:gem{ add:1 } f d add:5' },
        nota: "1 + 1 + 5 = 7. Que la classe digui el número en veu alta a cada canvi.|1 + 1 + 5 = 7. Que la clase diga el número en voz alta en cada cambio." },
      { id: 's7', k: 'concepte', t: "Les regles del recol·lector|Las reglas del recolector", punts: ["Posa el comptador a 0 al principi, no al mig.|Pon el contador a 0 al principio, no en medio.", "Una sola caixa cada vegada.|Una sola caja cada vez.", "Suma 5 quan la caixa ja és a la parada.|Suma 5 cuando la caja ya está en el puesto.", "Comprova el comptador després de cada caixa.|Comprueba el contador después de cada caja."], anim: 'u6setadd',
        nota: "Deixa aquestes regles a la vista durant l'activitat del terra i el projecte.|Deja estas reglas a la vista durante la actividad del suelo y el proyecto." },
      { id: 's8', k: 'activitat', t: "El mercat al terra|El mercado en el suelo", timer: 12, punts: ["Per parelles: responeu les quatre preguntes al full de pla.|Por parejas: responded las cuatro preguntas en la hoja de plan.", "Ordeneu la feina: fruites, caixes, parades.|Ordenad el trabajo: frutas, cajas, puestos.", "En grups de 3, executeu-ho a la quadrícula.|En grupos de 3, ejecutadlo en la cuadrícula.", "El comptador val 14 al final?|¿El contador vale 14 al final?"],
        nota: "El mapa de la quadrícula és el del projecte. Roteu els papers a cada caixa.|El mapa de la cuadrícula es el del proyecto. Rotad los papeles en cada caja." },
      { id: 's9', k: 'concepte', t: "El full de pla|La hoja de plan", punts: ["1. Les quatre preguntes|1. Las cuatro preguntas", "2. L'ordre de la feina|2. El orden del trabajo", "3. Els trossos del camí|3. Los trozos del camino", "4. El comptador després de cada caixa|4. El contador después de cada caja"],
        nota: "Fes notar que cada tros comença on acaba l'anterior, com a la unitat 1.|Haz notar que cada trozo empieza donde termina el anterior, como en la unidad 1." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Projecte: el recol·lector de fruita».|Abre la sesión «Proyecto: el recolector de fruta».", "Abans de cada repte, digues quant ha de valer el comptador.|Antes de cada reto, di cuánto tiene que valer el contador.", "Para quan arribis als tres camins de fruiters.|Para cuando llegues a los tres caminos de frutales."],
        nota: "Comprova que ningú suma la caixa abans de deixar-la.|Comprueba que nadie suma la caja antes de dejarla." },
      { id: 's11', k: 'repte', t: "Tres camins de fruiters|Tres caminos de frutales", timer: 4, x: "Un sol programa per a tres camins amb fruita diferent: agafa la caixa, cull i deixa-ho tot a la parada.|Un solo programa para tres caminos con fruta diferente: coge la caja, recoge y déjalo todo en el puesto.",
        nota: "Pista: dins del Repeteix, Endavant i «Si hi ha una estrella, suma 1».|Pista: dentro del Repite, Adelante y «Si hay una estrella, suma 1»." },
      { id: 's12', k: 'concepte', t: "El projecte: fes el pla|El proyecto: haz el plan", punts: ["El comptador comença a 3: primer, posa'l a 0.|El contador empieza en 3: primero, ponlo a 0.", "Per quina fruita o caixa començaràs?|¿Por qué fruta o caja empezarás?", "A quina parada portaràs cada caixa?|¿A qué puesto llevarás cada caja?", "Al final ha de valer 14: 4 + 5 + 5.|Al final tiene que valer 14: 4 + 5 + 5."],
        nota: "No deixis començar a programar fins que cada alumne/a tingui el pla escrit o dit.|No dejes empezar a programar hasta que cada alumno/a tenga el plan escrito o dicho." },
      { id: 's13', k: 'activitat', t: "Projecte: el recol·lector de fruita|Proyecto: el recolector de fruta", timer: 11, x: "Cull les 4 fruites, reparteix les 2 caixes i fes que el comptador digui quantes fruites hi ha al mercat.|Recoge las 4 frutas, reparte las 2 cajas y haz que el contador diga cuántas frutas hay en el mercado.",
        nota: "Qui acabi pot buscar un programa amb menys blocs o ajudar un company/a amb preguntes.|Quien termine puede buscar un programa con menos bloques o ayudar a un compañero/a con preguntas." },
      { id: 's14', k: 'activitat', t: "Presentem els projectes|Presentamos los proyectos", timer: 5, punts: ["Quin és el teu pla?|¿Cuál es tu plan?", "Quant val el comptador després de cada caixa?|¿Cuánto vale el contador después de cada caja?", "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?"],
        nota: "Abans d'executar cada projecte, que la classe digui el valor del comptador després de la primera caixa.|Antes de ejecutar cada proyecto, que la clase diga el valor del contador después de la primera caja." },
      { id: 's15', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["Una variable és una capsa amb nom que recorda un número.|Una variable es una caja con nombre que recuerda un número.", "«Si hi ha una estrella, suma 1» compta a qualsevol illa.|«Si hay una estrella, suma 1» cuenta en cualquier isla.", "Cada cosa pot valer diferent, i en Bit pot reaccionar a un número.|Cada cosa puede valer diferente, y Bit puede reaccionar a un número.", "Abans de programar, fem el pla de la variable.|Antes de programar, hacemos el plan de la variable."],
        nota: "Felicita la classe pel projecte. Avança que la unitat següent tracta de repetir fins que passi alguna cosa.|Felicita a la clase por el proyecto. Avanza que la unidad siguiente trata de repetir hasta que pase algo." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quines quatre preguntes et fas abans de programar amb una variable?|¿Qué cuatro preguntas te haces antes de programar con una variable?", "3 fruites (+1) i 2 caixes (+5): quant val el comptador?|3 frutas (+1) y 2 cajas (+5): ¿cuánto vale el contador?"],
        nota: "Respostes: què compto, amb quin número comença, quan suma i quant ha de valer al final; 13.|Respuestas: qué cuento, con qué número empieza, cuándo suma y cuánto tiene que valer al final; 13." }
    ],
    print: [
      { id: 'p1', t: "Targetes del mercat|Tarjetas del mercado", k: 'targetes',
        intro: "Un paquet per grup. Les fruites, les caixes i les parades marquen el mapa a la quadrícula; les targetes de comptador s'afegeixen al programa.|Un paquete por grupo. Las frutas, las cajas y los puestos marcan el mapa en la cuadrícula; las tarjetas de contador se añaden al programa.",
        items: [
          { t: "Fruita 🍎|Fruta 🍎", n: 4 },
          { t: "Caixa de fruita 📦|Caja de fruta 📦", n: 2 },
          { t: "Parada del mercat 🏪|Puesto del mercado 🏪", n: 2 },
          { t: "Suma 1 (fruita) ➕|Suma 1 (fruta) ➕", n: 4 },
          { t: "Suma 5 (caixa) ➕|Suma 5 (caja) ➕", n: 2 },
          { t: "Posa el comptador a 0 0️⃣|Pon el contador a 0 0️⃣", n: 1 }
        ] },
      { id: 'p2', t: "Full de pla del recol·lector|Hoja de plan del recolector", k: 'fitxa',
        intro: "Primer penseu el pla amb paraules, després passeu-lo a targetes o a blocs. En Bit només pot portar una caixa cada vegada i el comptador comença a 3 (de la feina d'ahir).|Primero pensad el plan con palabras, después pasadlo a tarjetas o a bloques. Bit solo puede llevar una caja cada vez y el contador empieza en 3 (del trabajo de ayer).",
        items: [
          { q: "Mira el mapa del projecte i respon les quatre preguntes: què vull comptar? Amb quin número comença? Quan suma i quant? Quant ha de valer al final?|Mira el mapa del proyecto y responde las cuatro preguntas: ¿qué quiero contar? ¿Con qué número empieza? ¿Cuándo suma y cuánto? ¿Cuánto tiene que valer al final?",
            w: { map: ['>..*..H', '.R...R.', '..b..*.', '*..~...', '.R..b.R', 'H..*...'], v0: 3, count: 14 },
            solProg: 'setv:0 r 3{ f } add:1 l f f l f p r r 3{ f } r f f d add:5 r r 3{ f } add:1 l f r f p l f f r f add:1 f l f f d add:5 l 3{ f } add:1',
            sol: "Les fruites que arriben al mercat. Comença a 3, però el posem a 0. Suma 1 a cada fruita i 5 a cada caixa deixada. Al final: 4 + 5 + 5 = 14.|Las frutas que llegan al mercado. Empieza en 3, pero lo ponemos a 0. Suma 1 en cada fruta y 5 en cada caja dejada. Al final: 4 + 5 + 5 = 14." },
          { q: "Escriu l'ordre de la feina d'en Bit: quina fruita o caixa va a buscar primer, i a quina parada porta cada caixa?|Escribe el orden del trabajo de Bit: ¿qué fruta o caja va a buscar primero, y a qué puesto lleva cada caja?",
            sol: "Resposta oberta. Una solució: fruita de l'esquerra, caixa del mig a la parada de baix, fruita de baix, caixa de baix a la dreta, fruita del mig a la dreta, parada de dalt i fruita de dalt.|Respuesta abierta. Una solución: fruta de la izquierda, caja del medio al puesto de abajo, fruta de abajo, caja de abajo a la derecha, fruta del medio a la derecha, puesto de arriba y fruta de arriba." },
          { q: "Escriu quant valdrà el comptador després de cada fruita i de cada caixa del teu pla.|Escribe cuánto valdrá el contador después de cada fruta y de cada caja de tu plan.",
            sol: "Amb la solució anterior: 1, 6, 7, 8, 13, 14. L'últim número sempre ha de ser 14.|Con la solución anterior: 1, 6, 7, 8, 13, 14. El último número siempre tiene que ser 14." },
          { q: "En Bit porta una caixa i passa per una casella on n'hi ha una altra. La pot agafar? Quan ha de sumar 5?|Bit lleva una caja y pasa por una casilla donde hay otra. ¿La puede coger? ¿Cuándo tiene que sumar 5?",
            sol: "No: només pot portar una caixa cada vegada. Suma 5 quan ja ha deixat la caixa a la parada.|No: solo puede llevar una caja cada vez. Suma 5 cuando ya ha dejado la caja en el puesto." }
        ] }
    ]
  }
});
