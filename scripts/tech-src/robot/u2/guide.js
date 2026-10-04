/* Tech Robot · unitat 2 «Repeteix!» · guia del professorat (r2-1 … r2-4) */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Repetir sense cansar-se ---------- */
  'r2-1': {
    obj: [
      "L'alumne/a explica què és un bucle i reconeix repeticions en programes i a la vida diària.|El alumno/a explica qué es un bucle y reconoce repeticiones en programas y en la vida diaria.",
      "L'alumne/a converteix una fila de blocs iguals en un bucle «Repeteix N vegades» amb el número correcte.|El alumno/a convierte una fila de bloques iguales en un bucle «Repite N veces» con el número correcto.",
      "L'alumne/a prediu on acabarà en Bit amb un programa que té un bucle i blocs després del bucle.|El alumno/a predice dónde terminará Bit con un programa que tiene un bucle y bloques después del bucle.",
      "L'alumne/a troba i arregla un bucle que té el número equivocat.|El alumno/a encuentra y arregla un bucle que tiene el número equivocado."
    ],
    comp: [
      "Competència digital (CD5): resoldre problemes amb programació per blocs fent servir la repetició|Competencia digital (CD5): resolver problemas con programación por bloques usando la repetición",
      "Pensament computacional: bucles, abstracció i programes més curts i clars|Pensamiento computacional: bucles, abstracción y programas más cortos y claros",
      "Matemàtiques (sentit numèric i espacial): comptar desplaçaments i entendre «N vegades» com una suma repetida|Matemáticas (sentido numérico y espacial): contar desplazamientos y entender «N veces» como una suma repetida",
      "Comunicació oral: explicar un programa en veu alta i comptar les voltes|Comunicación oral: explicar un programa en voz alta y contar las vueltas"
    ],
    vocab: [
      ["Bucle|Bucle", "Un bloc que repeteix els blocs que té a dins.|Un bloque que repite los bloques que tiene dentro."],
      ["Repetir|Repetir", "Fer la mateixa cosa diverses vegades seguides.|Hacer la misma cosa varias veces seguidas."],
      ["Vegades|Veces", "El número del bucle: quantes vegades es fan els blocs de dins.|El número del bucle: cuántas veces se hacen los bloques de dentro."],
      ["Volta|Vuelta", "Cada una de les vegades que el bucle fa els blocs de dins.|Cada una de las veces que el bucle hace los bloques de dentro."],
      ["Dins del bucle|Dentro del bucle", "Els blocs que el bucle repeteix. Els de sota només es fan un cop.|Los bloques que el bucle repite. Los de debajo solo se hacen una vez."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Repetir sense cansar-se»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Repetir sin cansarse»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra de 5 × 5 i les targetes d'ordres de la unitat 1|La cuadrícula del suelo de 5 × 5 y las tarjetas de órdenes de la unidad 1",
        "Un tros de llana o de cordill d'un metre per grup, per encerclar els blocs de dins del bucle|Un trozo de lana o de cordel de un metro por grupo, para rodear los bloques de dentro del bucle"
      ],
      imprimir: ["Targetes de bucle|Tarjetas de bucle", "Quadrícula del terra: el robot que repeteix|Cuadrícula del suelo: el robot que repite"],
      prep: [
        "Comprovar que la quadrícula del terra continua ben marcada i posar una roca (un coixí) per a la missió 3.|Comprobar que la cuadrícula del suelo sigue bien marcada y poner una roca (un cojín) para la misión 3.",
        "Imprimir i retallar un paquet de targetes de bucle per grup de 3 i afegir-lo al de la unitat 1.|Imprimir y recortar un paquete de tarjetas de bucle por grupo de 3 y añadirlo al de la unidad 1.",
        "Tallar els trossos de llana i deixar-ne un a cada paquet de targetes.|Cortar los trozos de lana y dejar uno en cada paquete de tarjetas.",
        "Provar abans les demostracions de les diapositives 9, 13 i 14 per conèixer les respostes.|Probar antes las demostraciones de las diapositivas 9, 13 y 14 para conocer las respuestas."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i la missió del far|Recordamos y la misión del faro", fase: 'inici',
        fa: "Fes la pregunta de repàs sobre descompondre. Explica la missió: en Bit ha de portar un missatge al far, a l'altra punta de l'illa, per un camí molt llarg i recte. Pregunta quants blocs Endavant creuen que caldran i escriu-ne alguna resposta a la pissarra.|Haz la pregunta de repaso sobre descomponer. Explica la misión: Bit tiene que llevar un mensaje al faro, en la otra punta de la isla, por un camino muy largo y recto. Pregunta cuántos bloques Adelante creen que harán falta y escribe alguna respuesta en la pizarra.",
        diu: ["Què volia dir descompondre un problema?|¿Qué quería decir descomponer un problema?",
          "Si el far és a 20 caselles, quants blocs Endavant hauríem de posar? Quina paciència!|Si el faro está a 20 casillas, ¿cuántos bloques Adelante tendríamos que poner? ¡Qué paciencia!"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades o abaixades.|Todavía no: pantallas apagadas o bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Repetir cansa: el bucle|Repetir cansa: el bucle", fase: 'teoria',
        fa: "Comença per les repeticions de cada dia i demana'n exemples. Compara el programa de 7 Endavant amb el bucle de 2 blocs. Presenta el bloc Repeteix amb la targeta de paper i fes que la classe compti les voltes en veu alta mentre mira l'animació. A la demostració, tothom diu A, B o C abans d'executar.|Empieza por las repeticiones de cada día y pide ejemplos. Compara el programa de 7 Adelante con el bucle de 2 bloques. Presenta el bloque Repite con la tarjeta de papel y haz que la clase cuente las vueltas en voz alta mientras mira la animación. En la demostración, todos dicen A, B o C antes de ejecutar.",
        diu: ["Quines coses feu moltes vegades seguides?|¿Qué cosas hacéis muchas veces seguidas?",
          "Quin programa és més fàcil de llegir: el de 7 blocs o el de 2?|¿Qué programa es más fácil de leer: el de 7 bloques o el de 2?",
          "Comptem les voltes junts: una, dues, tres… i el bucle s'acaba.|Contemos las vueltas juntos: una, dos, tres… y el bucle se termina.",
          "El bucle fa 2 vegades Endavant, Endavant. Quantes caselles són en total?|El bucle hace 2 veces Adelante, Adelante. ¿Cuántas casillas son en total?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El robot que repeteix|El robot que repite", fase: 'desconnectat',
        fa: "Grups de 3 amb els papers de la unitat 1: programador/a, robot i revisor/a. Per a cada missió de la quadrícula, el programador/a posa la targeta Repeteix, la targeta del número i, a sota, els blocs de dins encerclats amb la llana. El robot fa els blocs de dins i compta cada volta en veu alta; el revisor/a comprova que el número és el bo. Roteu els papers a cada missió.|Grupos de 3 con los papeles de la unidad 1: programador/a, robot y revisor/a. Para cada misión de la cuadrícula, el programador/a pone la tarjeta Repite, la tarjeta del número y, debajo, los bloques de dentro rodeados con la lana. El robot hace los bloques de dentro y cuenta cada vuelta en voz alta; el revisor/a comprueba que el número es el bueno. Rotad los papeles en cada misión.",
        diu: ["Quines targetes van dins de la llana? Només aquestes es repeteixen.|¿Qué tarjetas van dentro de la lana? Solo esas se repiten.",
          "Robot, compta les voltes en veu alta: quan arribes al número, para!|Robot, cuenta las vueltas en voz alta: ¡cuando llegas al número, para!",
          "Quantes targetes us heu estalviat amb el bucle?|¿Cuántas tarjetas os habéis ahorrado con el bucle?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a la pausa activa. Al pas «El bucle del cos», que toquin «Ho hem fet!» si ja l'han fet a la quadrícula. A mig bloc, atura la classe un minut amb la diapositiva 13: el bucle diu 5 i la bandera és a 4. Passeja i fixa't en qui compta la casella on ja és en Bit.|Cada alumno/a hace la sesión hasta la pausa activa. En el paso «El bucle del cuerpo», que toquen «¡Lo hemos hecho!» si ya lo han hecho en la cuadrícula. A mitad de bloque, para la clase un minuto con la diapositiva 13: el bucle dice 5 y la bandera está a 4. Pasea y fíjate en quién cuenta la casilla donde ya está Bit.",
        diu: ["Compta amb el dit: un salt, dos salts… La casella d'en Bit no compta.|Cuenta con el dedo: un salto, dos saltos… La casilla de Bit no cuenta.",
          "Què passa després del bucle? Es fa un sol cop o també es repeteix?|¿Qué pasa después del bucle? ¿Se hace una sola vez o también se repite?"],
        slides: ['s12', 's13'], app: "Les preguntes de «Recorda», les dues històries del far, les targetes de «Descobreix», la pregunta del programa de 5 Endavant, «El bucle del cos», els dos «On acabarà?» i l'«Investiga» del bucle amb el número equivocat.|Las preguntas de «Recuerda», las dos historias del faro, las tarjetas de «Descubre», la pregunta del programa de 5 Adelante, «El bucle del cuerpo», los dos «¿Dónde terminará?» y el «Investiga» del bucle con el número equivocado.", org: "Individual|Individual" },
      { min: 10, t: "Reptes del far|Retos del faro", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després programeu entre tots el camí de la diapositiva 14: la classe diu quants Endavant té cada tram i tu ho converteixes en bucles. Deixa'ls fer els quatre reptes; recorda'ls que el màxim de blocs obliga a fer servir el bucle.|Haced la pausa activa todos juntos. Después programad entre todos el camino de la diapositiva 14: la clase dice cuántos Adelante tiene cada tramo y tú lo conviertes en bucles. Déjales hacer los cuatro retos; recuérdales que el máximo de bloques obliga a usar el bucle.",
        diu: ["Quants Endavant té el primer tram? I el segon?|¿Cuántos Adelante tiene el primer tramo? ¿Y el segundo?",
          "Al repte del número equivocat, fes-ho pas a pas: on gira massa aviat?|En el reto del número equivocado, hazlo paso a paso: ¿dónde gira demasiado pronto?",
          "Si ajudes un company/a, fes-li preguntes: no li toquis el ratolí.|Si ayudas a un compañero/a, hazle preguntas: no le toques el ratón."],
        slides: ['s14', 's15'], app: "«Pausa activa» i els quatre reptes: el far amb 2 blocs, dos trams i un revolt, el número equivocat i el camí del far amb estrelles.|«Pausa activa» y los cuatro retos: el faro con 2 bloques, dos tramos y una curva, el número equivocado y el camino del faro con estrellas.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el camí del far|Crea: el camino del faro", fase: 'crea',
        fa: "Cada alumne/a inventa un camí que reculli les tres estrelles i faci servir almenys dos bucles. Quan el tinguin, per parelles s'ensenyen el programa i l'altre/a diu quantes caselles avança cada bucle abans d'executar-lo.|Cada alumno/a inventa un camino que recoja las tres estrellas y use al menos dos bucles. Cuando lo tengan, por parejas se enseñan el programa y el otro/a dice cuántas casillas avanza cada bucle antes de ejecutarlo.",
        diu: ["Hi ha molts camins bons. On has pogut fer servir un bucle?|Hay muchos caminos buenos. ¿Dónde has podido usar un bucle?",
          "Abans d'executar el programa del company/a, digues on creus que girarà.|Antes de ejecutar el programa del compañero/a, di dónde crees que girará."],
        slides: ['s16'], app: "Pas «Crea»: El camí del far.|Paso «Crea»: El camino del faro.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum i deixa que responguin les preguntes finals de l'app. A la porta, fes a cada alumne/a una de les preguntes del tiquet.|Repasa las tres ideas de la sesión con el resumen y deja que respondan las preguntas finales de la app. En la puerta, haz a cada alumno/a una de las preguntas del ticket.",
        diu: ["Qui em diu què és un bucle amb les seves paraules?|¿Quién me dice qué es un bucle con sus palabras?",
          "Com comptem bé el número d'un bucle?|¿Cómo contamos bien el número de un bucle?"],
        slides: ['s17', 's18'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa al bucle un número de més perquè compta també la casella on ja és en Bit.|Pone en el bucle un número de más porque cuenta también la casilla donde ya está Bit.",
        "Que posi el dit damunt d'en Bit i digui «un» només quan el dit salta a la casella següent. Després, que ho comprovi pas a pas.|Que ponga el dedo sobre Bit y diga «uno» solo cuando el dedo salta a la casilla siguiente. Después, que lo compruebe paso a paso."],
      ["Posa l'Endavant a sota del bucle i el bucle queda buit.|Pone el Adelante debajo del bucle y el bucle queda vacío.",
        "Pregunta: què hi ha dins del bucle? Que miri on és la línia «els blocs nous van aquí» abans de tocar un bloc de la paleta.|Pregunta: ¿qué hay dentro del bucle? Que mire dónde está la línea «los bloques nuevos van aquí» antes de tocar un bloque de la paleta."],
      ["Creu que els blocs de després del bucle també es repeteixen.|Cree que los bloques de después del bucle también se repiten.",
        "Que executi pas a pas i miri quan deixa d'il·luminar-se el bucle. Què passa amb el gir de sota: quantes vegades es fa?|Que ejecute paso a paso y mire cuándo deja de iluminarse el bucle. ¿Qué pasa con el giro de abajo: cuántas veces se hace?"],
      ["No troba com canviar el número del bucle.|No encuentra cómo cambiar el número del bucle.",
        "Recorda-li que pot tocar el bloc del bucle: apareixen els botons − i +. Ensenya-ho una vegada a tot el grup amb el projector.|Recuérdale que puede tocar el bloque del bucle: aparecen los botones − y +. Enséñalo una vez a todo el grupo con el proyector."],
      ["Continua posant Endavant solts per costum i arriba al màxim de blocs.|Sigue poniendo Adelante sueltos por costumbre y llega al máximo de bloques.",
        "Pregunta: on tens blocs iguals seguits? Quants n'hi ha? Que provi de canviar-los per un bucle i compti quants blocs s'estalvia.|Pregunta: ¿dónde tienes bloques iguales seguidos? ¿Cuántos hay? Que pruebe a cambiarlos por un bucle y cuente cuántos bloques se ahorra."]
    ],
    diff: {
      mes: "Fer el camí del far de l'apartat «Crea» amb el mínim de blocs possible i explicar per què. Després, inventar una missió per a la quadrícula del terra amb tres trams i escriure-la amb targetes de bucle perquè la faci un altre grup.|Hacer el camino del faro del apartado «Crea» con el mínimo de bloques posible y explicar por qué. Después, inventar una misión para la cuadrícula del suelo con tres tramos y escribirla con tarjetas de bucle para que la haga otro grupo.",
      menys: "Tenir les targetes de paper a la taula: primer posa en fila tants Endavant com caselles, els compta i després els canvia per la targeta Repeteix i el número. Començar pel repte del far de 2 blocs, comptant amb el dit.|Tener las tarjetas de papel en la mesa: primero pone en fila tantos Adelante como casillas, los cuenta y después los cambia por la tarjeta Repite y el número. Empezar por el reto del faro de 2 bloques, contando con el dedo."
    },
    aval: {
      ticket: ["Què fa un bucle? Explica-ho amb les teves paraules.|¿Qué hace un bucle? Explícalo con tus palabras.",
        "En Bit ha d'avançar 5 caselles. Com ho escrius amb un bucle?|Bit tiene que avanzar 5 casillas. ¿Cómo lo escribes con un bucle?"],
      rubric: [
        ["Concepte de bucle|Concepto de bucle", "Explica que el bucle repeteix els blocs de dins tantes vegades com diu el número.|Explica que el bucle repite los bloques de dentro tantas veces como dice el número.", "Fa servir el bucle, però no sap explicar què es repeteix.|Usa el bucle, pero no sabe explicar qué se repite."],
        ["Número del bucle|Número del bucle", "Compta bé els salts i posa el número correcte a la primera o després de provar-ho.|Cuenta bien los saltos y pone el número correcto a la primera o después de probarlo.", "Sovint posa un número de més o de menys i el canvia a l'atzar.|A menudo pone un número de más o de menos y lo cambia al azar."],
        ["Predir i depurar|Predecir y depurar", "Prediu on acaba en Bit amb un bucle i blocs després, i troba el bucle que falla.|Predice dónde termina Bit con un bucle y bloques después, y encuentra el bucle que falla.", "Prediu bé els bucles sols, però s'equivoca amb el que ve després del bucle.|Predice bien los bucles solos, pero se equivoca con lo que viene después del bucle."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «El bucle del cos»: una persona diu «Repeteix 4 vegades: salta i aplaudeix» i l'altra ho fa comptant les voltes en veu alta.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «El bucle del cuerpo»: una persona dice «Repite 4 veces: salta y aplaude» y la otra lo hace contando las vueltas en voz alta.",
    slides: [
      { id: 's1', k: 'portada', t: "Repetir sense cansar-se|Repetir sin cansarse", x: "Avui en Bit aprendrà a repetir blocs sense posar-los un per un.|Hoy Bit aprenderá a repetir bloques sin ponerlos uno a uno.",
        nota: "Presenta l'objectiu: al final de la classe, tothom farà programes més curts amb el bloc Repeteix.|Presenta el objetivo: al final de la clase, todos harán programas más cortos con el bloque Repite." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Què vol dir descompondre un problema?|¿Qué quiere decir descomponer un problema?",
        nota: "Resposta: partir-lo en trossos més petits. Avui veurem que, de vegades, els trossos són iguals.|Respuesta: partirlo en trozos más pequeños. Hoy veremos que, a veces, los trozos son iguales." },
      { id: 's3', k: 'concepte', t: "La missió del far|La misión del faro", punts: ["El far és a l'altra punta de l'illa.|El faro está en la otra punta de la isla.", "El camí és llarg i gairebé tot recte.|El camino es largo y casi todo recto.", "Quants blocs Endavant caldran?|¿Cuántos bloques Adelante harán falta?"],
        nota: "Deixa que facin propostes. Si algú ja parla de «repetir», felicita'l i guarda la idea per a la teoria.|Deja que hagan propuestas. Si alguien ya habla de «repetir», felicítalo y guarda la idea para la teoría." },
      { id: 's4', k: 'anim', t: "Repetim coses cada dia|Repetimos cosas cada día", anim: 'u2life', x: "Aplaudir, pujar escales, cantar la tornada: fem el mateix moltes vegades.|Aplaudir, subir escaleras, cantar el estribillo: hacemos lo mismo muchas veces.",
        nota: "Fes aplaudir la classe 3 vegades: ho heu fet sense pensar cada aplaudiment, només el número.|Haz aplaudir a la clase 3 veces: lo habéis hecho sin pensar cada aplauso, solo el número." },
      { id: 's5', k: 'pregunta', t: "I vosaltres, què repetiu?|¿Y vosotros, qué repetís?", punts: ["Pujar els graons de l'escola|Subir los peldaños del cole", "Raspallar-se les dents amunt i avall|Cepillarse los dientes arriba y abajo", "Saltar a corda|Saltar a la comba"],
        nota: "Recull dos o tres exemples més. Per a cada un, pregunta: què es repeteix i quantes vegades?|Recoge dos o tres ejemplos más. Para cada uno, pregunta: ¿qué se repite y cuántas veces?" },
      { id: 's6', k: 'anim', t: "Massa blocs iguals|Demasiados bloques iguales", anim: 'u2tired', x: "7 blocs Endavant o 2 blocs amb un bucle: fan el mateix!|7 bloques Adelante o 2 bloques con un bucle: ¡hacen lo mismo!",
        nota: "Pregunta en quin dels dos programes és més fàcil equivocar-se comptant.|Pregunta en cuál de los dos programas es más fácil equivocarse contando." },
      { id: 's7', k: 'concepte', t: "El bloc «Repeteix»|El bloque «Repite»", blocks: ['Repeteix 6 vegades|Repite 6 veces', 'Endavant|Adelante'], punts: ["El número diu quantes vegades.|El número dice cuántas veces.", "Els blocs de dins es repeteixen.|Los bloques de dentro se repiten.", "Un bloc que repeteix es diu bucle.|Un bloque que repite se llama bucle."],
        nota: "Ensenya la targeta de paper Repeteix amb el número i la llana que encercla els blocs de dins: la faran servir a la quadrícula.|Enseña la tarjeta de papel Repite con el número y la lana que rodea los bloques de dentro: la usarán en la cuadrícula." },
      { id: 's8', k: 'anim', t: "Com compta un bucle|Cómo cuenta un bucle", anim: 'u2loop', x: "Fa els blocs de dins, torna a dalt i compta una volta més.|Hace los bloques de dentro, vuelve arriba y cuenta una vuelta más.",
        nota: "Que la classe compti les voltes en veu alta al ritme de l'animació: una, dues, tres… fi!|Que la clase cuente las vueltas en voz alta al ritmo de la animación: una, dos, tres… ¡fin!" },
      { id: 's9', k: 'demo', t: "Pensa abans d'executar|Piensa antes de ejecutar", x: "Programa: Repeteix 2 vegades: Endavant, Endavant. On acabarà: A, B o C?|Programa: Repite 2 veces: Adelante, Adelante. ¿Dónde terminará: A, B o C?",
        demo: { w: { map: ['.......', '>#A#B#C'] }, prog: '2{ f f }' },
        nota: "Que tothom assenyali amb el dit abans d'executar. Resposta: B (2 voltes de 2 caselles). Pregunta a qui ha dit A què pensava.|Que todos señalen con el dedo antes de ejecutar. Respuesta: B (2 vueltas de 2 casillas). Pregunta a quien ha dicho A qué pensaba." },
      { id: 's10', k: 'activitat', t: "El robot que repeteix|El robot que repite", timer: 12, punts: ["Programador/a: Repeteix + número + els blocs de dins.|Programador/a: Repite + número + los bloques de dentro.", "Encercleu els blocs de dins amb la llana.|Rodead los bloques de dentro con la lana.", "Robot: compta les voltes en veu alta.|Robot: cuenta las vueltas en voz alta.", "Revisor/a: el número és el bo?|Revisor/a: ¿el número es el bueno?"],
        nota: "Comenceu tots per la missió 1 i després cada grup avança al seu ritme. Roteu els papers a cada missió.|Empezad todos por la misión 1 y después cada grupo avanza a su ritmo. Rotad los papeles en cada misión." },
      { id: 's11', k: 'activitat', t: "Les regles del bucle|Las reglas del bucle", punts: ["Repeteix i el número van davant.|Repite y el número van delante.", "Només es repeteix el que és dins de la llana.|Solo se repite lo que está dentro de la lana.", "Quan arriba al número, el robot continua amb la targeta de després.|Cuando llega al número, el robot sigue con la tarjeta de después."],
        nota: "Deixa aquesta diapositiva projectada mentre treballen a la quadrícula.|Deja esta diapositiva proyectada mientras trabajan en la cuadrícula." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Repetir sense cansar-se».|Abre la sesión «Repetir sin cansarse».", "Fes la missió, «Descobreix» i «Mans a l'obra».|Haz la misión, «Descubre» y «Manos a la obra».", "A «Prediu i prova», compta abans de triar.|En «Predice y prueba», cuenta antes de elegir.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Al pas «El bucle del cos», que toquin «Ho hem fet!» si l'han fet a la quadrícula.|En el paso «El bucle del cuerpo», que toquen «¡Lo hemos hecho!» si lo han hecho en la cuadrícula." },
      { id: 's13', k: 'demo', t: "Compte amb el número!|¡Cuidado con el número!", x: "El bucle diu 5. Arribarà en Bit a la bandera?|El bucle dice 5. ¿Llegará Bit a la bandera?",
        demo: { w: { map: ['......', '>###FR', '......'] }, prog: '5{ f }' },
        nota: "En Bit se'n passa i xoca amb la roca: la bandera és a 4 salts. Que algú digui quin número caldria.|Bit se pasa y choca con la roca: la bandera está a 4 saltos. Que alguien diga qué número haría falta." },
      { id: 's14', k: 'demo', t: "Programem junts|Programemos juntos", x: "Dos trams i un revolt. Quins números posem als bucles?|Dos tramos y una curva. ¿Qué números ponemos en los bucles?",
        demo: { w: { map: ['#####F', '#.....', '#.....', '#.....', '^.....'] }, prog: '4{ f } r 5{ f }' },
        nota: "La classe compta les caselles de cada tram: 4 amunt i 5 cap a la dreta. Escriu el programa a la pissarra abans d'executar.|La clase cuenta las casillas de cada tramo: 4 arriba y 5 hacia la derecha. Escribe el programa en la pizarra antes de ejecutar." },
      { id: 's15', k: 'repte', t: "Reptes del far|Retos del faro", timer: 10, punts: ["1. El far amb 2 blocs|1. El faro con 2 bloques", "2. Dos trams i un revolt|2. Dos tramos y una curva", "3. El número equivocat|3. El número equivocado", "4. El camí del far amb estrelles|4. El camino del faro con estrellas"],
        nota: "Si algú s'encalla, pregunta: quants salts té aquest tram? Compta'ls amb el dit.|Si alguien se atasca, pregunta: ¿cuántos saltos tiene este tramo? Cuéntalos con el dedo." },
      { id: 's16', k: 'activitat', t: "Crea: el camí del far|Crea: el camino del faro", timer: 5, x: "Recull les 3 estrelles i arriba a la bandera fent servir almenys 2 bucles.|Recoge las 3 estrellas y llega a la bandera usando al menos 2 bucles.",
        nota: "Celebra que hi hagi camins diferents. Pregunta qui ha fet servir més bucles i qui menys blocs.|Celebra que haya caminos diferentes. Pregunta quién ha usado más bucles y quién menos bloques." },
      { id: 's17', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un bucle repeteix els blocs de dins.|Un bucle repite los bloques de dentro.", "El número diu quantes vegades.|El número dice cuántas veces.", "Compta els salts, no la casella d'en Bit.|Cuenta los saltos, no la casilla de Bit."],
        nota: "Torna a la missió del far: amb bucles, el camí llarg s'ha fet amb molt pocs blocs.|Vuelve a la misión del faro: con bucles, el camino largo se ha hecho con muy pocos bloques." },
      { id: 's18', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què fa un bucle?|¿Qué hace un bucle?", "Com escrius 5 Endavant amb un bucle?|¿Cómo escribes 5 Adelante con un bucle?"],
        nota: "Anota qui encara compta la casella de sortida: la setmana vinent, comença per aquí amb ells.|Anota quién todavía cuenta la casilla de salida: la semana que viene, empieza por aquí con ellos." }
    ],
    print: [
      { id: 'p1', t: "Targetes de bucle|Tarjetas de bucle", k: 'targetes',
        intro: "Un paquet per grup de 3, per afegir a les targetes d'ordres de la unitat 1. La targeta Repeteix va amb una targeta de número; la llana encercla els blocs de dins; la targeta «Fi del bucle» marca on s'acaba.|Un paquete por grupo de 3, para añadir a las tarjetas de órdenes de la unidad 1. La tarjeta Repite va con una tarjeta de número; la lana rodea los bloques de dentro; la tarjeta «Fin del bucle» marca dónde se termina.",
        items: [
          { t: "Repeteix 🔁|Repite 🔁", n: 3 },
          { t: "2 vegades 2️⃣|2 veces 2️⃣", n: 1 },
          { t: "3 vegades 3️⃣|3 veces 3️⃣", n: 1 },
          { t: "4 vegades 4️⃣|4 veces 4️⃣", n: 2 },
          { t: "5 vegades 5️⃣|5 veces 5️⃣", n: 1 },
          { t: "Fi del bucle 🔚|Fin del bucle 🔚", n: 3 }
        ] },
      { id: 'p2', t: "Quadrícula del terra: el robot que repeteix|Cuadrícula del suelo: el robot que repite", k: 'quadricula',
        intro: "Feu servir la quadrícula de 5 × 5. A cada missió, escriviu el programa amb el mínim de targetes: cada tram recte, un bucle. El robot compta les voltes en veu alta.|Usad la cuadrícula de 5 × 5. En cada misión, escribid el programa con el mínimo de tarjetas: cada tramo recto, un bucle. El robot cuenta las vueltas en voz alta.",
        items: [
          { t: "Missió 1: la recta llarga|Misión 1: la recta larga", w: 5, h: 5, cells: ['.....', '.....', '>...F', '.....', '.....'],
            instructions: "En Bit mira cap a la bandera. Feu-ho amb una sola targeta Repeteix i un Endavant a dins.|Bit mira hacia la bandera. Hacedlo con una sola tarjeta Repite y un Adelante dentro.", sol: '4{ f }' },
          { t: "Missió 2: la cantonada|Misión 2: la esquina", w: 5, h: 5, cells: ['....F', '.....', '.....', '.....', '^....'],
            instructions: "Dos trams iguals i un gir entre els dos. Quantes targetes us estalvieu amb els bucles?|Dos tramos iguales y un giro entre los dos. ¿Cuántas tarjetas os ahorráis con los bucles?", sol: '4{ f } r 4{ f }' },
          { t: "Missió 3: la U de la roca|Misión 3: la U de la roca", w: 5, h: 5, cells: ['.....', '..R..', '..R..', '..R..', '^.R.F'],
            instructions: "Hi ha una paret de roques al mig. Pugeu, travesseu per dalt i baixeu fins a la bandera: tres trams, tres bucles.|Hay una pared de rocas en medio. Subid, cruzad por arriba y bajad hasta la bandera: tres tramos, tres bucles.", sol: '4{ f } r 4{ f } r 4{ f }' }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Troba el patró ---------- */
  'r2-2': {
    obj: [
      "L'alumne/a reconeix un patró (un tros que es repeteix sempre igual) en sèries d'objectes, en camins i en programes.|El alumno/a reconoce un patrón (un trozo que se repite siempre igual) en series de objetos, en caminos y en programas.",
      "L'alumne/a troba el tros que es repeteix en un programa llarg i l'escriu com un bucle amb diversos blocs a dins.|El alumno/a encuentra el trozo que se repite en un programa largo y lo escribe como un bucle con varios bloques dentro.",
      "L'alumne/a comprova que, en acabar el tros, en Bit mira com al principi perquè el bucle funcioni.|El alumno/a comprueba que, al terminar el trozo, Bit mira como al principio para que el bucle funcione.",
      "L'alumne/a programa quadrats, escales i ziga-zagues amb un sol bucle.|El alumno/a programa cuadrados, escaleras y zigzags con un solo bucle."
    ],
    comp: [
      "Competència digital (CD5): resoldre problemes amb programació per blocs fent servir bucles amb diversos blocs|Competencia digital (CD5): resolver problemas con programación por bloques usando bucles con varios bloques",
      "Pensament computacional: reconeixement de patrons i abstracció|Pensamiento computacional: reconocimiento de patrones y abstracción",
      "Matemàtiques: sèries i patrons de repetició, el quadrat i els girs|Matemáticas: series y patrones de repetición, el cuadrado y los giros",
      "Educació artística: patrons decoratius en rajoles, sanefes i teixits|Educación artística: patrones decorativos en baldosas, cenefas y tejidos"
    ],
    vocab: [
      ["Patró|Patrón", "Un tros que es repeteix sempre igual i en el mateix ordre.|Un trozo que se repite siempre igual y en el mismo orden."],
      ["Tros|Trozo", "El grup de blocs que surt diverses vegades seguides i que va dins del bucle.|El grupo de bloques que sale varias veces seguidas y que va dentro del bucle."],
      ["Esglaó|Escalón", "Un tros d'escala: endavant, gira, endavant, gira cap a l'altre costat.|Un trozo de escalera: adelante, gira, adelante, gira hacia el otro lado."],
      ["Ziga-zaga|Zigzag", "Un camí que va canviant de costat, sempre igual.|Un camino que va cambiando de lado, siempre igual."],
      ["Quadrat|Cuadrado", "Una figura de 4 costats iguals: 4 vegades un costat i un gir.|Una figura de 4 lados iguales: 4 veces un lado y un giro."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Troba el patró»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Encuentra el patrón»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra, les targetes d'ordres i de bucle i la llana de la sessió 1|La cuadrícula del suelo, las tarjetas de órdenes y de bucle y la lana de la sesión 1",
        "Objectes de colors per fer sèries a la taula: gomets, peces de construcció o llapis de colors|Objetos de colores para hacer series en la mesa: pegatinas, piezas de construcción o lápices de colores"
      ],
      imprimir: ["Fitxa: detectius de patrons|Ficha: detectives de patrones", "Quadrícula del terra: escales i parterres|Cuadrícula del suelo: escaleras y parterres"],
      prep: [
        "Imprimir una fitxa de detectius per parella.|Imprimir una ficha de detectives por pareja.",
        "Preparar a la quadrícula del terra la missió 2 (el parterre): quatre roques al mig i tres estrelles de paper.|Preparar en la cuadrícula del suelo la misión 2 (el parterre): cuatro rocas en medio y tres estrellas de papel.",
        "Fer a la taula del professor una sèrie de colors a mitges (per exemple vermell, vermell, groc…) per començar la classe.|Hacer en la mesa del profesor una serie de colores a medias (por ejemplo rojo, rojo, amarillo…) para empezar la clase.",
        "Provar les demostracions de les diapositives 7, 8 i 12 per conèixer què fa cada una.|Probar las demostraciones de las diapositivas 7, 8 y 12 para conocer qué hace cada una."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i el jardí del poble|Recordamos y el jardín del pueblo", fase: 'inici',
        fa: "Fes la pregunta de repàs sobre el bucle. Ensenya la sèrie de colors a mitges de la teva taula i pregunta quin color va ara. Explica la missió: el jardí del poble està ple de flors i camins que es repeteixen.|Haz la pregunta de repaso sobre el bucle. Enseña la serie de colores a medias de tu mesa y pregunta qué color va ahora. Explica la misión: el jardín del pueblo está lleno de flores y caminos que se repiten.",
        diu: ["Què feia el bloc Repeteix? I el número?|¿Qué hacía el bloque Repite? ¿Y el número?",
          "Mireu aquesta fila de colors. Quin va ara? Com ho sabeu?|Mirad esta fila de colores. ¿Cuál va ahora? ¿Cómo lo sabéis?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és un patró?|¿Qué es un patrón?", fase: 'teoria',
        fa: "Explica què és un patró amb l'animació i la pregunta de la sèrie. Mostra el programa llarg de l'escala i demana que trobin el tros que es repeteix. Executa la demostració del quadrat i de l'escala; abans, la classe diu quants blocs hi ha dins del bucle i quantes voltes farà.|Explica qué es un patrón con la animación y la pregunta de la serie. Muestra el programa largo de la escalera y pide que encuentren el trozo que se repite. Ejecuta la demostración del cuadrado y de la escalera; antes, la clase dice cuántos bloques hay dentro del bucle y cuántas vueltas hará.",
        diu: ["On veieu patrons a l'aula o a la vostra roba?|¿Dónde veis patrones en el aula o en vuestra ropa?",
          "Quin és el tros que es repeteix? Quantes vegades surt?|¿Cuál es el trozo que se repite? ¿Cuántas veces sale?",
          "Després d'un esglaó, cap on mira en Bit? Igual que al principi?|Después de un escalón, ¿hacia dónde mira Bit? ¿Igual que al principio?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Detectius de patrons|Detectives de patrones", fase: 'desconnectat',
        fa: "Primer, per parelles, fan els exercicis 1 a 3 de la fitxa: encerclen el tros que es repeteix i l'escriuen com un bucle. Després, en grups de 3, fan la missió 1 de la quadrícula (l'escala): el programador/a encercla amb la llana les quatre targetes de l'esglaó i el robot fa cada volta comptant en veu alta. Qui acabi, fa la missió 2.|Primero, por parejas, hacen los ejercicios 1 a 3 de la ficha: rodean el trozo que se repite y lo escriben como un bucle. Después, en grupos de 3, hacen la misión 1 de la cuadrícula (la escalera): el programador/a rodea con la lana las cuatro tarjetas del escalón y el robot hace cada vuelta contando en voz alta. Quien termine, hace la misión 2.",
        diu: ["Encercleu el tros amb el llapis: on comença i on acaba?|Rodead el trozo con el lápiz: ¿dónde empieza y dónde termina?",
          "Robot, en acabar l'esglaó, mires cap al mateix lloc que al principi?|Robot, al terminar el escalón, ¿miras hacia el mismo sitio que al principio?",
          "Quantes targetes hi ha dins de la llana?|¿Cuántas tarjetas hay dentro de la lana?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles i després grups de 3|Por parejas y después grupos de 3" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a la pausa activa. A mig bloc, atura la classe amb la diapositiva 12: el bucle només té «Endavant, Gira a la dreta» i en Bit xoca. Deixa que expliquin per què. Fixa't en qui posa només una part del tros dins del bucle.|Cada alumno/a hace la sesión hasta la pausa activa. A mitad de bloque, para la clase con la diapositiva 12: el bucle solo tiene «Adelante, Gira a la derecha» y Bit choca. Deja que expliquen por qué. Fíjate en quién pone solo una parte del trozo dentro del bucle.",
        diu: ["Llegeix el programa en veu alta. On torna a començar el mateix?|Lee el programa en voz alta. ¿Dónde vuelve a empezar lo mismo?",
          "En acabar una volta, cap on mira en Bit? I a la segona volta?|Al terminar una vuelta, ¿hacia dónde mira Bit? ¿Y en la segunda vuelta?"],
        slides: ['s11', 's12'], app: "Pregunta de «Recorda», les dues històries del jardí, les targetes de «Descobreix», la sèrie de flors, el bucle bo de l'escala, «Caçadors de patrons» (per a casa), els dos «On acabarà?» i l'«Investiga» del gir equivocat.|Pregunta de «Recuerda», las dos historias del jardín, las tarjetas de «Descubre», la serie de flores, el bucle bueno de la escalera, «Cazadores de patrones» (para casa), los dos «¿Dónde terminará?» y el «Investiga» del giro equivocado.", org: "Individual|Individual" },
      { min: 10, t: "Reptes del jardí|Retos del jardín", fase: 'ordinador',
        fa: "Pausa activa de l'escala tots junts. Després, programeu entre tots la ziga-zaga de la diapositiva 13: la classe troba el tros i el número abans d'executar. Deixa'ls fer els quatre reptes; el màxim de blocs els obliga a trobar el patró.|Pausa activa de la escalera todos juntos. Después, programad entre todos el zigzag de la diapositiva 13: la clase encuentra el trozo y el número antes de ejecutar. Déjales hacer los cuatro retos; el máximo de bloques les obliga a encontrar el patrón.",
        diu: ["Mireu un sol esglaó: quins blocs té?|Mirad un solo escalón: ¿qué bloques tiene?",
          "Al parterre, tots els costats són iguals? Llavors, què va dins del bucle?|En el parterre, ¿todos los lados son iguales? Entonces, ¿qué va dentro del bucle?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els reptes: ordenar els blocs amb bucles, el parterre de 4 flors, el bloc que falta a l'escala i la pujada amb estrelles.|«Pausa activa» y los retos: ordenar los bloques con bucles, el parterre de 4 flores, el bloque que falta en la escalera y la subida con estrellas.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: el meu patró|Crea: mi patrón", fase: 'crea',
        fa: "Cada alumne/a busca un patró per recollir les quatre estrelles amb un bucle d'almenys tres blocs. Hi ha més d'un patró possible! Qui acabi, ensenya el programa a un company/a i li demana que trobi el tros que es repeteix sense executar-lo.|Cada alumno/a busca un patrón para recoger las cuatro estrellas con un bucle de al menos tres bloques. ¡Hay más de un patrón posible! Quien termine, enseña el programa a un compañero/a y le pide que encuentre el trozo que se repite sin ejecutarlo.",
        diu: ["Les estrelles fan una escala. Quin és l'esglaó?|Las estrellas forman una escalera. ¿Cuál es el escalón?",
          "El teu patró és igual que el del company/a? Funcionen tots dos?|¿Tu patrón es igual que el del compañero/a? ¿Funcionan los dos?"],
        slides: ['s15'], app: "Pas «Crea»: El meu patró.|Paso «Crea»: Mi patrón.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les idees de la sessió amb el resum i deixa que responguin les preguntes finals de l'app. Fes el tiquet de sortida a la porta.|Repasa las ideas de la sesión con el resumen y deja que respondan las preguntas finales de la app. Haz el ticket de salida en la puerta.",
        diu: ["Què és un patró? Digueu-me'n un que hàgiu vist avui.|¿Qué es un patrón? Decidme uno que hayáis visto hoy.",
          "Com sabem que el tros és sencer?|¿Cómo sabemos que el trozo está entero?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa dins del bucle només una part del tros (per exemple, Endavant i Gira a la dreta) i en Bit xoca a la segona volta.|Pone dentro del bucle solo una parte del trozo (por ejemplo, Adelante y Gira a la derecha) y Bit choca en la segunda vuelta.",
        "Que executi pas a pas la primera volta i miri cap on mira en Bit en acabar-la. Mira com al principi? Què li falta?|Que ejecute paso a paso la primera vuelta y mire hacia dónde mira Bit al terminarla. ¿Mira como al principio? ¿Qué le falta?"],
      ["Troba el tros, però posa al bucle el número de blocs en lloc del número de vegades.|Encuentra el trozo, pero pone en el bucle el número de bloques en lugar del número de veces.",
        "Pregunta: quantes vegades surt el tros sencer? Que encercli cada repetició amb el dit i les compti.|Pregunta: ¿cuántas veces sale el trozo entero? Que rodee cada repetición con el dedo y las cuente."],
      ["Al quadrat, posa el gir fora del bucle.|En el cuadrado, pone el giro fuera del bucle.",
        "Pregunta: a cada cantonada, en Bit gira? Llavors el gir forma part del tros que es repeteix.|Pregunta: en cada esquina, ¿Bit gira? Entonces el giro forma parte del trozo que se repite."],
      ["Confon els dos girs de l'esglaó i els posa al revés.|Confunde los dos giros del escalón y los pone al revés.",
        "Que es posi dret i faci un esglaó amb el cos, mirant cap on mira en Bit, com a la unitat 1.|Que se ponga de pie y haga un escalón con el cuerpo, mirando hacia donde mira Bit, como en la unidad 1."],
      ["Busca el patró a l'atzar canviant blocs fins que funciona.|Busca el patrón al azar cambiando bloques hasta que funciona.",
        "Atura'l i demana-li que digui el camí en veu alta: «una a la dreta, una amunt…». Quan ho repeteixi, ja tindrà el tros.|Páralo y pídele que diga el camino en voz alta: «una a la derecha, una arriba…». Cuando lo repita, ya tendrá el trozo."]
    ],
    diff: {
      mes: "Trobar dos patrons diferents per a l'apartat «Crea» i comparar quin té menys blocs. Després, fer l'exercici 5 de la fitxa: inventar un camí amb un patró i donar-lo a un company/a perquè en trobi el tros.|Encontrar dos patrones diferentes para el apartado «Crea» y comparar cuál tiene menos bloques. Después, hacer el ejercicio 5 de la ficha: inventar un camino con un patrón y dárselo a un compañero/a para que encuentre el trozo.",
      menys: "Treballar amb la fitxa i un llapis de color: primer encercla cada repetició del tros i després compta els cercles. A l'app, començar pel parterre, que té quatre costats iguals, i fer el bucle amb les targetes de paper al costat.|Trabajar con la ficha y un lápiz de color: primero rodea cada repetición del trozo y después cuenta los círculos. En la app, empezar por el parterre, que tiene cuatro lados iguales, y hacer el bucle con las tarjetas de papel al lado."
    },
    aval: {
      ticket: ["Què és un patró? Posa'n un exemple.|¿Qué es un patrón? Pon un ejemplo.",
        "Quin bucle fa un quadrat?|¿Qué bucle hace un cuadrado?"],
      rubric: [
        ["Reconèixer patrons|Reconocer patrones", "Troba el tros que es repeteix en sèries i en programes i diu quantes vegades surt.|Encuentra el trozo que se repite en series y en programas y dice cuántas veces sale.", "Reconeix patrons en sèries de colors, però li costa trobar-los en un programa.|Reconoce patrones en series de colores, pero le cuesta encontrarlos en un programa."],
        ["Bucles amb diversos blocs|Bucles con varios bloques", "Posa el tros sencer dins del bucle i el número de vegades correcte.|Pone el trozo entero dentro del bucle y el número de veces correcto.", "Fa servir el bucle, però de vegades hi deixa un bloc fora o hi posa massa blocs.|Usa el bucle, pero a veces deja un bloque fuera o pone demasiados bloques."],
        ["Orientació al final del tros|Orientación al final del trozo", "Comprova que, en acabar el tros, en Bit mira com al principi.|Comprueba que, al terminar el trozo, Bit mira como al principio.", "Només ho descobreix quan en Bit xoca a la segona volta.|Solo lo descubre cuando Bit choca en la segunda vuelta."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «Caçadors de patrons»: busqueu patrons per casa i feu-ne un amb objectes perquè l'altra persona el continuï.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «Cazadores de patrones»: buscad patrones por casa y haced uno con objetos para que la otra persona lo continúe.",
    slides: [
      { id: 's1', k: 'portada', t: "Troba el patró|Encuentra el patrón", x: "Avui descobrirem trossos que es repeteixen i els posarem dins d'un bucle.|Hoy descubriremos trozos que se repiten y los pondremos dentro de un bucle.",
        nota: "Explica que avui els bucles tindran més d'un bloc a dins.|Explica que hoy los bucles tendrán más de un bloque dentro." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "En Bit ha d'avançar 4 caselles. Quin bucle ho fa?|Bit tiene que avanzar 4 casillas. ¿Qué bucle lo hace?",
        nota: "Resposta: Repeteix 4 vegades: Endavant. Recorda que es compten els salts.|Respuesta: Repite 4 veces: Adelante. Recuerda que se cuentan los saltos." },
      { id: 's3', k: 'concepte', t: "El jardí del poble|El jardín del pueblo", punts: ["Les flors fan files de colors que es repeteixen.|Las flores forman filas de colores que se repiten.", "Els camins fan esglaons i voltes.|Los caminos hacen escalones y vueltas.", "En Bit les ha de regar totes!|¡Bit tiene que regarlas todas!"],
        nota: "Connecta amb la sèrie de colors de la teva taula: també era un patró.|Conecta con la serie de colores de tu mesa: también era un patrón." },
      { id: 's4', k: 'anim', t: "Què és un patró?|¿Qué es un patrón?", anim: 'u2pattern', x: "Un tros que es repeteix sempre igual, en el mateix ordre.|Un trozo que se repite siempre igual, en el mismo orden.",
        nota: "Fes notar que el patró té 3 peces i surt 3 vegades: per això el bucle diu 3.|Haz notar que el patrón tiene 3 piezas y sale 3 veces: por eso el bucle dice 3." },
      { id: 's5', k: 'pregunta', t: "Quina va ara?|¿Cuál va ahora?", x: "🌷🌼🌼🌷🌼🌼🌷🌼 …",
        nota: "Resposta: 🌼. El patró és una tulipa i dues margarides. Demana que algú inventi una sèrie per a la classe.|Respuesta: 🌼. El patrón es un tulipán y dos margaritas. Pide que alguien invente una serie para la clase." },
      { id: 's6', k: 'anim', t: "Troba el tros que es repeteix|Encuentra el trozo que se repite", anim: 'u2stairs', x: "El programa de l'escala té el mateix tros 3 vegades.|El programa de la escalera tiene el mismo trozo 3 veces.",
        nota: "Que llegeixin en veu alta les tres files de blocs: «endavant, gira, endavant, gira». Són iguals!|Que lean en voz alta las tres filas de bloques: «adelante, gira, adelante, gira». ¡Son iguales!" },
      { id: 's7', k: 'demo', t: "Un quadrat amb un bucle|Un cuadrado con un bucle", x: "Repeteix 4 vegades: Endavant, Endavant, Gira a la dreta. On acabarà en Bit?|Repite 4 veces: Adelante, Adelante, Gira a la derecha. ¿Dónde terminará Bit?",
        demo: { w: { map: ['>##', '#.#', '###'] }, prog: '4{ f f r }' },
        nota: "Resposta: torna a la casella de sortida, mirant on mirava. Quatre costats, quatre girs.|Respuesta: vuelve a la casilla de salida, mirando donde miraba. Cuatro lados, cuatro giros." },
      { id: 's8', k: 'demo', t: "L'escala|La escalera", x: "Repeteix 3 vegades: Endavant, Gira a la dreta, Endavant, Gira a l'esquerra.|Repite 3 veces: Adelante, Gira a la derecha, Adelante, Gira a la izquierda.",
        demo: { w: { map: ['>#..', '.##.', '..##', '...F'] }, prog: '3{ f r f l }' },
        nota: "Atura la demostració després del primer esglaó i pregunta cap on mira en Bit: a la dreta, com al principi.|Para la demostración después del primer escalón y pregunta hacia dónde mira Bit: a la derecha, como al principio." },
      { id: 's9', k: 'activitat', t: "Detectius de patrons|Detectives de patrones", timer: 10, punts: ["Per parelles: exercicis 1 a 3 de la fitxa.|Por parejas: ejercicios 1 a 3 de la ficha.", "Encercleu el tros que es repeteix.|Rodead el trozo que se repite.", "Després, en grups de 3: l'escala a la quadrícula.|Después, en grupos de 3: la escalera en la cuadrícula.", "La llana encercla les 4 targetes de l'esglaó.|La lana rodea las 4 tarjetas del escalón."],
        nota: "Dona 4 minuts a la fitxa i 6 a la quadrícula. Roteu els papers a cada missió.|Da 4 minutos a la ficha y 6 a la cuadrícula. Rotad los papeles en cada misión." },
      { id: 's10', k: 'concepte', t: "Com es troba un patró|Cómo se encuentra un patrón", punts: ["1. Llegeix el programa en veu alta.|1. Lee el programa en voz alta.", "2. Busca on torna a començar el mateix.|2. Busca dónde vuelve a empezar lo mismo.", "3. Encercla el tros i compta les vegades.|3. Rodea el trozo y cuenta las veces.", "4. Comprova que en Bit acaba mirant com al principi.|4. Comprueba que Bit termina mirando como al principio."],
        nota: "Deixa aquesta diapositiva projectada durant l'activitat i també a l'ordinador.|Deja esta diapositiva proyectada durante la actividad y también en el ordenador." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Troba el patró».|Abre la sesión «Encuentra el patrón».", "A «Prediu i prova», pensa cada volta.|En «Predice y prueba», piensa cada vuelta.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "«Caçadors de patrons» és per fer a casa: que toquin «Ara no» i continuïn.|«Cazadores de patrones» es para hacer en casa: que toquen «Ahora no» y continúen." },
      { id: 's12', k: 'demo', t: "Per què xoca?|¿Por qué choca?", x: "Repeteix 3 vegades: Endavant, Gira a la dreta. Què li falta al tros?|Repite 3 veces: Adelante, Gira a la derecha. ¿Qué le falta al trozo?",
        demo: { w: { map: ['>#..', '.##.', '..##', '...F'] }, prog: '3{ f r }' },
        nota: "A la segona volta en Bit mira a l'esquerra i xoca. Falten l'Endavant i el gir a l'esquerra: el tros ha de ser sencer.|En la segunda vuelta Bit mira a la izquierda y choca. Faltan el Adelante y el giro a la izquierda: el trozo tiene que estar entero." },
      { id: 's13', k: 'demo', t: "Programem junts: la ziga-zaga|Programemos juntos: el zigzag", x: "Quin és l'esglaó? Quantes vegades es repeteix?|¿Cuál es el escalón? ¿Cuántas veces se repite?",
        demo: { w: { map: ['...F', '..##', '.##.', '>#..'] }, prog: '3{ f l f r }' },
        nota: "La classe dicta el tros (Endavant, Gira a l'esquerra, Endavant, Gira a la dreta) i el número (3). Executa per comprovar-ho.|La clase dicta el trozo (Adelante, Gira a la izquierda, Adelante, Gira a la derecha) y el número (3). Ejecuta para comprobarlo." },
      { id: 's14', k: 'repte', t: "Reptes del jardí|Retos del jardín", timer: 10, punts: ["1. Ordena els blocs amb bucles|1. Ordena los bloques con bucles", "2. Les 4 flors del parterre|2. Las 4 flores del parterre", "3. El bloc que falta a l'escala|3. El bloque que falta en la escalera", "4. La pujada amb estrelles|4. La subida con estrellas"],
        nota: "Pista per a la pujada: un esglaó puja una casella i en va dues cap a la dreta.|Pista para la subida: un escalón sube una casilla y va dos hacia la derecha." },
      { id: 's15', k: 'activitat', t: "Crea: el meu patró|Crea: mi patrón", timer: 7, x: "Recull les 4 estrelles amb un bucle d'almenys 3 blocs.|Recoge las 4 estrellas con un bucle de al menos 3 bloques.",
        nota: "Celebra els patrons diferents que funcionen: hi ha més d'una solució bona.|Celebra los patrones diferentes que funcionan: hay más de una solución buena." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un patró és un tros que es repeteix.|Un patrón es un trozo que se repite.", "El tros va dins del bucle; el número, les vegades.|El trozo va dentro del bucle; el número, las veces.", "Al final del tros, en Bit ha de mirar com al principi.|Al final del trozo, Bit tiene que mirar como al principio."],
        nota: "Pregunta quin patró del jardí els ha agradat més i per què.|Pregunta qué patrón del jardín les ha gustado más y por qué." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què és un patró? Posa'n un exemple.|¿Qué es un patrón? Pon un ejemplo.", "Quin bucle fa un quadrat?|¿Qué bucle hace un cuadrado?"],
        nota: "Anota qui encara deixa el gir fora del bucle del quadrat.|Anota quién todavía deja el giro fuera del bucle del cuadrado." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: detectius de patrons|Ficha: detectives de patrones", k: 'fitxa',
        intro: "Llegiu cada programa en veu alta, encercleu el tros que es repeteix i escriviu-lo com un bucle: «Repeteix … vegades: …».|Leed cada programa en voz alta, rodead el trozo que se repite y escribidlo como un bucle: «Repite … veces: …».",
        items: [
          { q: "Aquest programa fa la volta al parterre. Quin és el tros que es repeteix? Escriu-lo amb un bucle.|Este programa da la vuelta al parterre. ¿Cuál es el trozo que se repite? Escríbelo con un bucle.",
            w: { map: ['>##', '#.#', '###'] }, prog: 'f f r f f r f f r f f r', solProg: '4{ f f r }', sol: "El tros és «Endavant, Endavant, Gira a la dreta» i surt 4 vegades.|El trozo es «Adelante, Adelante, Gira a la derecha» y sale 4 veces." },
          { q: "I aquesta escala? Escriu-la amb un bucle.|¿Y esta escalera? Escríbela con un bucle.",
            w: { map: ['>#..', '.##.', '..##', '...F'] }, prog: 'f r f l f r f l f r f l', solProg: '3{ f r f l }', sol: "L'esglaó «Endavant, Gira a la dreta, Endavant, Gira a l'esquerra» surt 3 vegades.|El escalón «Adelante, Gira a la derecha, Adelante, Gira a la izquierda» sale 3 veces." },
          { q: "Continua la sèrie i encercla el patró: 🔴🔴🟡🔴🔴🟡🔴 … Quines dues peces van ara?|Continúa la serie y rodea el patrón: 🔴🔴🟡🔴🔴🟡🔴 … ¿Qué dos piezas van ahora?",
            sol: "🔴🟡. El patró és 🔴🔴🟡: dues vermelles i una groga.|🔴🟡. El patrón es 🔴🔴🟡: dos rojas y una amarilla." },
          { q: "Una ziga-zaga cap amunt. Escriu el programa amb un bucle.|Un zigzag hacia arriba. Escribe el programa con un bucle.",
            w: { map: ['...F', '..##', '.##.', '>#..'] }, solProg: '3{ f l f r }', sol: "Repeteix 3 vegades: Endavant, Gira a l'esquerra, Endavant, Gira a la dreta.|Repite 3 veces: Adelante, Gira a la izquierda, Adelante, Gira a la derecha." },
          { q: "Inventa un camí amb un patró i dibuixa'l en una quadrícula. Escriu-ne el bucle i dona'l a un company/a perquè el comprovi.|Inventa un camino con un patrón y dibújalo en una cuadrícula. Escribe su bucle y dáselo a un compañero/a para que lo compruebe.",
            sol: "Resposta oberta. Comproveu que el tros acaba amb en Bit mirant com al principi.|Respuesta abierta. Comprobad que el trozo termina con Bit mirando como al principio." }
        ] },
      { id: 'p2', t: "Quadrícula del terra: escales i parterres|Cuadrícula del suelo: escaleras y parterres", k: 'quadricula',
        intro: "Feu servir la quadrícula de 5 × 5, les targetes i la llana. Primer trobeu el tros que es repeteix, després encercleu-lo amb la llana i poseu-hi davant la targeta Repeteix i el número.|Usad la cuadrícula de 5 × 5, las tarjetas y la lana. Primero encontrad el trozo que se repite, después rodeadlo con la lana y poned delante la tarjeta Repite y el número.",
        items: [
          { t: "Missió 1: l'escala del jardí|Misión 1: la escalera del jardín", w: 5, h: 5, cells: ['....F', '.....', '.....', '.....', '>....'],
            instructions: "Pugeu fins a la bandera fent esglaons: una casella a la dreta i una amunt. Quantes vegades es repeteix l'esglaó?|Subid hasta la bandera haciendo escalones: una casilla a la derecha y una arriba. ¿Cuántas veces se repite el escalón?", sol: '4{ f l f r }' },
          { t: "Missió 2: la volta al parterre|Misión 2: la vuelta al parterre", w: 5, h: 5, cells: ['>..*.', '.RR..', '.RR..', '*..*.', '.....'],
            instructions: "Recolliu les 3 estrelles fent la volta al parterre de roques. Tots els costats són iguals!|Recoged las 3 estrellas dando la vuelta al parterre de rocas. ¡Todos los lados son iguales!", sol: '4{ f f f r }' },
          { t: "Missió 3: la ziga-zaga de les roques|Misión 3: el zigzag de las rocas", w: 5, h: 5, cells: ['>....', 'R....', '.R...', '..R..', '...RF'],
            instructions: "Baixeu fins a la bandera en ziga-zaga, al costat de les roques: una casella a la dreta i una avall.|Bajad hasta la bandera en zigzag, al lado de las rocas: una casilla a la derecha y una abajo.", sol: '4{ f r f l }' }
        ] }
    ]
  },

  /* ---------- Sessió 3 · El llapis d'en Bit ---------- */
  'r2-3': {
    obj: [
      "L'alumne/a explica que, amb el llapis, en Bit pinta les caselles on entra i no la de sortida.|El alumno/a explica que, con el lápiz, Bit pinta las casillas a las que entra y no la de salida.",
      "L'alumne/a programa línies, una L, un quadrat i una escala amb bucles, pintant exactament el dibuix del model.|El alumno/a programa líneas, una L, un cuadrado y una escalera con bucles, pintando exactamente el dibujo del modelo.",
      "L'alumne/a fa servir el bloc «Pinta de» alternant Endavant i Pinta per fer un patró de colors.|El alumno/a usa el bloque «Pinta de» alternando Adelante y Pinta para hacer un patrón de colores.",
      "L'alumne/a crea un dibuix propi amb un bucle i explica quin patró ha fet servir.|El alumno/a crea un dibujo propio con un bucle y explica qué patrón ha usado."
    ],
    comp: [
      "Competència digital (CD3 i CD5): crear un dibuix digital amb programació per blocs|Competencia digital (CD3 y CD5): crear un dibujo digital con programación por bloques",
      "Pensament computacional: bucles, patrons i seguiment de l'estat del robot (on és i cap on mira)|Pensamiento computacional: bucles, patrones y seguimiento del estado del robot (dónde está y hacia dónde mira)",
      "Matemàtiques (geometria): línies, figures, la vora d'un quadrat i comptar caselles|Matemáticas (geometría): líneas, figuras, el borde de un cuadrado y contar casillas",
      "Educació visual i plàstica: dibuixar sobre quadrícula i combinar colors|Educación visual y plástica: dibujar sobre cuadrícula y combinar colores"
    ],
    vocab: [
      ["Llapis|Lápiz", "Quan està posat, en Bit pinta cada casella on entra.|Cuando está puesto, Bit pinta cada casilla a la que entra."],
      ["Pintar|Pintar", "Posar color a una casella. El bloc «Pinta de» pinta la casella on és en Bit.|Poner color a una casilla. El bloque «Pinta de» pinta la casilla donde está Bit."],
      ["Model|Modelo", "El dibuix que demana el repte, marcat amb requadres de punts.|El dibujo que pide el reto, marcado con recuadros de puntos."],
      ["Vora|Borde", "Les caselles de fora d'una figura, com el marc d'un quadre.|Las casillas de fuera de una figura, como el marco de un cuadro."],
      ["Casella de sortida|Casilla de salida", "On comença en Bit. Amb el llapis no es pinta, si no hi torna a entrar.|Donde empieza Bit. Con el lápiz no se pinta, si no vuelve a entrar."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «El llapis d'en Bit»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «El lápiz de Bit»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un full «Robot dibuixant» per parella, llapis i colors (vermell i groc com a mínim)|Una hoja «Robot dibujante» por pareja, lápiz y colores (rojo y amarillo como mínimo)",
        "Les targetes d'ordres i de bucle de les sessions anteriors|Las tarjetas de órdenes y de bucle de las sesiones anteriores"
      ],
      imprimir: ["Graella: robot dibuixant|Cuadrícula: robot dibujante", "Fitxa: quin programa fa el dibuix?|Ficha: ¿qué programa hace el dibujo?"],
      prep: [
        "Imprimir un full de graella per parella i una fitxa per alumne/a (per als qui acabin abans o per a casa).|Imprimir una hoja de cuadrícula por pareja y una ficha por alumno/a (para quien termine antes o para casa).",
        "Dibuixar a la pissarra una quadrícula de 6 × 6 per fer l'exemple del quadrat amb tota la classe.|Dibujar en la pizarra una cuadrícula de 6 × 6 para hacer el ejemplo del cuadrado con toda la clase.",
        "Comprovar com es canvia el color del bloc Pinta a l'app (tocar el bloc i «Canvia el color») per ensenyar-ho.|Comprobar cómo se cambia el color del bloque Pinta en la app (tocar el bloque y «Cambia el color») para enseñarlo.",
        "Provar les demostracions de les diapositives 5, 6, 7, 12 i 14.|Probar las demostraciones de las diapositivas 5, 6, 7, 12 y 14."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i el regal d'en Bit|Recordamos y el regalo de Bit", fase: 'inici',
        fa: "Fes la pregunta de repàs sobre el tros que es repeteix. Explica la missió: en Numi ha fet un llapis per a en Bit i, per a la festa major, pintarà dibuixos a la plaça. Presenta les quatre regles del llapis.|Haz la pregunta de repaso sobre el trozo que se repite. Explica la misión: Numi ha hecho un lápiz para Bit y, para la fiesta mayor, pintará dibujos en la plaza. Presenta las cuatro reglas del lápiz.",
        diu: ["Quin era el tros que es repeteix en un quadrat?|¿Cuál era el trozo que se repite en un cuadrado?",
          "Si en Bit dibuixa mentre camina, quin dibuix farà el bucle del quadrat?|Si Bit dibuja mientras camina, ¿qué dibujo hará el bucle del cuadrado?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El llapis i el bloc Pinta|El lápiz y el bloque Pinta", fase: 'teoria',
        fa: "Mostra l'animació del llapis i fes notar que la casella de sortida no es pinta. A cada demostració, la classe diu quantes caselles es pintaran abans d'executar. Presenta el bloc Pinta de i el compte: Pinta no mou en Bit, cal alternar Endavant i Pinta.|Muestra la animación del lápiz y haz notar que la casilla de salida no se pinta. En cada demostración, la clase dice cuántas casillas se pintarán antes de ejecutar. Presenta el bloque Pinta de y el cuidado: Pinta no mueve a Bit, hay que alternar Adelante y Pinta.",
        diu: ["Quantes caselles pintarà la línia? Compteu els Endavant.|¿Cuántas casillas pintará la línea? Contad los Adelante.",
          "Al quadrat, la casella de sortida es pinta? Per què?|En el cuadrado, ¿la casilla de salida se pinta? ¿Por qué?",
          "Si poso tres Pinta seguits, quantes caselles pinto?|Si pongo tres Pinta seguidos, ¿cuántas casillas pinto?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Robot dibuixant|Robot dibujante", fase: 'desconnectat',
        fa: "Feu primer el quadrat de la pissarra amb tota la classe: un alumne/a llegeix el bucle i un altre pinta les caselles. Després, per parelles amb el full de graella: la programadora llegeix un programa del full i el robot pinta només les caselles on entra. Comparen el dibuix amb el de la parella del costat. A la part final, cada parella inventa un dibuix i n'escriu el bucle perquè el faci una altra parella.|Haced primero el cuadrado de la pizarra con toda la clase: un alumno/a lee el bucle y otro pinta las casillas. Después, por parejas con la hoja de cuadrícula: la programadora lee un programa de la hoja y el robot pinta solo las casillas a las que entra. Comparan el dibujo con el de la pareja de al lado. En la parte final, cada pareja inventa un dibujo y escribe su bucle para que lo haga otra pareja.",
        diu: ["Robot, pinta només quan entres a una casella nova.|Robot, pinta solo cuando entras en una casilla nueva.",
          "El vostre dibuix és igual que el de la parella del costat? Si no, qui s'ha equivocat, el programa o el robot?|¿Vuestro dibujo es igual que el de la pareja de al lado? Si no, ¿quién se ha equivocado, el programa o el robot?",
          "Quin bucle fa el vostre dibuix?|¿Qué bucle hace vuestro dibujo?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Tot el grup i després per parelles|Todo el grupo y después por parejas" },
      { min: 13, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a la pausa activa. Al pas «Robot dibuixant», que toquin «Ho hem fet!». A mig bloc, mostra la diapositiva 12: el quadrat que surt del mapa per un gir equivocat. Fixa't en qui espera que la casella de sortida es pinti.|Cada alumno/a hace la sesión hasta la pausa activa. En el paso «Robot dibujante», que toquen «¡Lo hemos hecho!». A mitad de bloque, muestra la diapositiva 12: el cuadrado que se sale del mapa por un giro equivocado. Fíjate en quién espera que la casilla de salida se pinte.",
        diu: ["Mira els requadres de punts: quantes caselles has de pintar?|Mira los recuadros de puntos: ¿cuántas casillas tienes que pintar?",
          "Si en Bit surt del mapa, mira el primer gir: cap on mira després?|Si Bit se sale del mapa, mira el primer giro: ¿hacia dónde mira después?"],
        slides: ['s11', 's12'], app: "Pregunta de «Recorda», les dues històries del taller, les targetes de «Descobreix», quantes caselles pinta, «Robot dibuixant» (ja fet), «On acabarà?» i l'«Investiga» del quadrat que surt del mapa.|Pregunta de «Recuerda», las dos historias del taller, las tarjetas de «Descubre», cuántas casillas pinta, «Robot dibujante» (ya hecho), «¿Dónde terminará?» y el «Investiga» del cuadrado que se sale del mapa.", org: "Individual|Individual" },
      { min: 10, t: "Reptes de dibuix|Retos de dibujo", fase: 'ordinador',
        fa: "Pausa activa tots junts dibuixant a l'aire. Programeu entre tots la L de la diapositiva 14, decidint cap on gira en Bit quan mira avall. Després, els cinc reptes. Al de la bandera de colors, ensenya com es canvia el color del bloc Pinta.|Pausa activa todos juntos dibujando en el aire. Programad entre todos la L de la diapositiva 14, decidiendo hacia dónde gira Bit cuando mira abajo. Después, los cinco retos. En el de la bandera de colores, enseña cómo se cambia el color del bloque Pinta.",
        diu: ["En Bit mira avall i ha d'anar cap a la dreta de la pantalla. Quin gir li cal?|Bit mira abajo y tiene que ir hacia la derecha de la pantalla. ¿Qué giro necesita?",
          "Al marc, quants Endavant té cada costat?|En el marco, ¿cuántos Adelante tiene cada lado?",
          "A la bandera, quin és el tros que es repeteix?|En la bandera, ¿cuál es el trozo que se repite?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els cinc reptes: la tanca, la L, el marc, l'escala i la bandera de colors.|«Pausa activa» y los cinco retos: la valla, la L, el marco, la escalera y la bandera de colores.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: el meu dibuix de llapis|Crea: mi dibujo de lápiz", fase: 'crea',
        fa: "Cada alumne/a dibuixa el que vulgui amb el llapis i un bucle: una lletra, una escala, una casa… Ha de pintar almenys 8 caselles sense sortir del mapa. Qui acabi, ensenya el programa a un company/a, que ha d'endevinar el dibuix abans d'executar-lo.|Cada alumno/a dibuja lo que quiera con el lápiz y un bucle: una letra, una escalera, una casa… Tiene que pintar al menos 8 casillas sin salir del mapa. Quien termine, enseña el programa a un compañero/a, que tiene que adivinar el dibujo antes de ejecutarlo.",
        diu: ["Quin dibuix vols fer? Quin tros es repeteix?|¿Qué dibujo quieres hacer? ¿Qué trozo se repite?",
          "Endevina el dibuix del company/a només mirant el programa.|Adivina el dibujo del compañero/a solo mirando el programa."],
        slides: ['s15'], app: "Pas «Crea»: El meu dibuix de llapis.|Paso «Crea»: Mi dibujo de lápiz.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les idees de la sessió amb el resum i deixa que responguin les preguntes finals de l'app. Avança que la setmana vinent pintaran un mosaic sencer per a la festa major. Fes el tiquet de sortida a la porta.|Repasa las ideas de la sesión con el resumen y deja que respondan las preguntas finales de la app. Avanza que la semana que viene pintarán un mosaico entero para la fiesta mayor. Haz el ticket de salida en la puerta.",
        diu: ["Quina casella no pinta el llapis?|¿Qué casilla no pinta el lápiz?",
          "Per què cal un Endavant entre dos Pinta?|¿Por qué hace falta un Adelante entre dos Pinta?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Espera que la casella de sortida es pinti i compta un Endavant de més.|Espera que la casilla de salida se pinte y cuenta un Adelante de más.",
        "Recorda la regla 2 del llapis: només es pinta on en Bit entra. Que compti els requadres de punts, no les caselles des d'en Bit.|Recuerda la regla 2 del lápiz: solo se pinta donde Bit entra. Que cuente los recuadros de puntos, no las casillas desde Bit."],
      ["Posa diversos Pinta seguits i en Bit es queda quiet.|Pone varios Pinta seguidos y Bit se queda quieto.",
        "Que ho executi pas a pas i miri on és en Bit a cada Pinta. Què cal perquè canviï de casella?|Que lo ejecute paso a paso y mire dónde está Bit en cada Pinta. ¿Qué hace falta para que cambie de casilla?"],
      ["El dibuix és gairebé bo, però pinta una casella de més i el repte no es resol.|El dibujo es casi bueno, pero pinta una casilla de más y el reto no se resuelve.",
        "Que compari el dibuix amb els requadres de punts: quina casella sobra? Quin bloc l'ha pintada?|Que compare el dibujo con los recuadros de puntos: ¿qué casilla sobra? ¿Qué bloque la ha pintado?"],
      ["A la L, gira cap al costat equivocat perquè en Bit comença mirant avall.|En la L, gira hacia el lado equivocado porque Bit empieza mirando abajo.",
        "Que es posi al lloc d'en Bit, com a la unitat 1: mirant avall, on té la mà esquerra?|Que se ponga en el lugar de Bit, como en la unidad 1: mirando abajo, ¿dónde tiene la mano izquierda?"],
      ["No sap canviar el color del bloc Pinta.|No sabe cambiar el color del bloque Pinta.",
        "Que toqui el bloc Pinta que ja és al programa: surt el botó «Canvia el color». Cada toc passa al color següent.|Que toque el bloque Pinta que ya está en el programa: sale el botón «Cambia el color». Cada toque pasa al color siguiente."]
    ],
    diff: {
      mes: "Fer el dibuix de l'apartat «Crea» amb un bucle que tingui almenys 4 blocs a dins (per exemple, una escala amb esglaons de 2) i, després, la fitxa «Quin programa fa el dibuix?» sense mirar la pantalla.|Hacer el dibujo del apartado «Crea» con un bucle que tenga al menos 4 bloques dentro (por ejemplo, una escalera con escalones de 2) y, después, la ficha «¿Qué programa hace el dibujo?» sin mirar la pantalla.",
      menys: "Tenir el full de graella al costat de l'ordinador i pintar-hi primer el dibuix del repte amb el dit, casella a casella, dient «endavant» a cada pas. Començar per la tanca i la L, i deixar el marc i l'escala per després.|Tener la hoja de cuadrícula al lado del ordenador y pintar primero el dibujo del reto con el dedo, casilla a casilla, diciendo «adelante» en cada paso. Empezar por la valla y la L, y dejar el marco y la escalera para después."
    },
    aval: {
      ticket: ["Quina casella no pinta el llapis d'en Bit?|¿Qué casilla no pinta el lápiz de Bit?",
        "Com pintes 3 caselles seguides amb el bloc Pinta i un bucle?|¿Cómo pintas 3 casillas seguidas con el bloque Pinta y un bucle?"],
      rubric: [
        ["Regles del llapis|Reglas del lápiz", "Sap que es pinten les caselles on entra en Bit i compta bé les caselles del dibuix.|Sabe que se pintan las casillas a las que entra Bit y cuenta bien las casillas del dibujo.", "Sovint compta la casella de sortida o un Endavant de més.|A menudo cuenta la casilla de salida o un Adelante de más."],
        ["Dibuixar amb bucles|Dibujar con bucles", "Fa la L, el marc i l'escala amb bucles i dins del màxim de blocs.|Hace la L, el marco y la escalera con bucles y dentro del máximo de bloques.", "Fa la línia i la L, però al marc o a l'escala necessita ajuda per trobar el tros.|Hace la línea y la L, pero en el marco o en la escalera necesita ayuda para encontrar el trozo."],
        ["Bloc Pinta|Bloque Pinta", "Alterna Endavant i Pinta i canvia els colors per fer un patró.|Alterna Adelante y Pinta y cambia los colores para hacer un patrón.", "Fa servir el bloc Pinta, però de vegades oblida l'Endavant entre dos Pinta.|Usa el bloque Pinta, pero a veces olvida el Adelante entre dos Pinta."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla pot ensenyar-vos el dibuix que ha creat amb el llapis d'en Bit. Amb un full de quadrícula, podeu fer junts «Robot dibuixant»: una persona diu el bucle i l'altra pinta.|En casa, con el móvil, vuestro hijo o hija puede enseñaros el dibujo que ha creado con el lápiz de Bit. Con una hoja de cuadrícula, podéis hacer juntos «Robot dibujante»: una persona dice el bucle y la otra pinta.",
    slides: [
      { id: 's1', k: 'portada', t: "El llapis d'en Bit|El lápiz de Bit", x: "Avui en Bit dibuixarà mentre camina i pintarà de colors.|Hoy Bit dibujará mientras camina y pintará de colores.",
        nota: "Explica que faran servir els bucles i els patrons de les sessions anteriors per dibuixar.|Explica que usarán los bucles y los patrones de las sesiones anteriores para dibujar." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Endavant, Endavant, Gira a la dreta… tres vegades. Quin és el tros que es repeteix?|Adelante, Adelante, Gira a la derecha… tres veces. ¿Cuál es el trozo que se repite?",
        nota: "Resposta: Endavant, Endavant, Gira a la dreta. Avui aquest tros deixarà un dibuix.|Respuesta: Adelante, Adelante, Gira a la derecha. Hoy este trozo dejará un dibujo." },
      { id: 's3', k: 'concepte', t: "Les regles del llapis|Las reglas del lápiz", punts: ["Pinta cada casella on entra en Bit.|Pinta cada casilla a la que entra Bit.", "La casella de sortida no es pinta.|La casilla de salida no se pinta.", "Els girs no pinten.|Los giros no pintan.", "Cal pintar el model, ni una casella més.|Hay que pintar el modelo, ni una casilla más."],
        nota: "Deixa les regles a la vista durant tota la sessió.|Deja las reglas a la vista durante toda la sesión." },
      { id: 's4', k: 'anim', t: "Dibuixar caminant|Dibujar caminando", anim: 'u2pen', x: "Cada Endavant pinta la casella on entra en Bit.|Cada Adelante pinta la casilla a la que entra Bit.",
        nota: "Pregunta: quantes caselles s'han pintat? I quants Endavant ha fet en Bit? El mateix número!|Pregunta: ¿cuántas casillas se han pintado? ¿Y cuántos Adelante ha hecho Bit? ¡El mismo número!" },
      { id: 's5', k: 'demo', t: "Una línia amb un bucle|Una línea con un bucle", x: "Repeteix 4 vegades: Endavant. Quantes caselles es pintaran?|Repite 4 veces: Adelante. ¿Cuántas casillas se pintarán?",
        demo: { w: { map: ['>....', '.....'], pen: true, target: ['.pppp', '.....'] }, prog: '4{ f }' },
        nota: "Resposta: 4. Fes notar els requadres de punts: és el model que cal pintar.|Respuesta: 4. Haz notar los recuadros de puntos: es el modelo que hay que pintar." },
      { id: 's6', k: 'demo', t: "Un quadrat de llapis|Un cuadrado de lápiz", x: "Repeteix 4 vegades: Endavant, Endavant, Gira a la dreta. Es pintarà la casella de sortida?|Repite 4 veces: Adelante, Adelante, Gira a la derecha. ¿Se pintará la casilla de salida?",
        demo: { w: { map: ['>..', '...', '...'], pen: true, target: ['ppp', 'p.p', 'ppp'] }, prog: '4{ f f r }' },
        nota: "Sí, a l'última volta: en Bit hi torna a entrar. El forat del mig queda sense pintar.|Sí, en la última vuelta: Bit vuelve a entrar. El hueco del medio queda sin pintar." },
      { id: 's7', k: 'demo', t: "El bloc «Pinta de»|El bloque «Pinta de»", x: "Repeteix 2 vegades: Endavant, Pinta de vermell, Endavant, Pinta de groc.|Repite 2 veces: Adelante, Pinta de rojo, Adelante, Pinta de amarillo.",
        demo: { w: { map: ['>....', '.....'], target: ['.ryry', '.....'] }, prog: '2{ f paint:r f paint:y }' },
        nota: "Pinta no mou en Bit: per això cada color va després d'un Endavant. I el bucle fa un patró de colors.|Pinta no mueve a Bit: por eso cada color va después de un Adelante. Y el bucle hace un patrón de colores." },
      { id: 's8', k: 'anim', t: "Compte: Pinta no camina|Cuidado: Pinta no camina", anim: 'u2paint', x: "Pinta, Pinta, Pinta: en Bit no es mou. Endavant, Pinta: ara sí!|Pinta, Pinta, Pinta: Bit no se mueve. Adelante, Pinta: ¡ahora sí!",
        nota: "Demana a un alumne/a que faci de Bit: «pinta» (toca la taula), «pinta», «pinta»… S'ha mogut?|Pide a un alumno/a que haga de Bit: «pinta» (toca la mesa), «pinta», «pinta»… ¿Se ha movido?" },
      { id: 's9', k: 'activitat', t: "Robot dibuixant|Robot dibujante", timer: 12, punts: ["Programadora: llegeix el bucle del full.|Programadora: lee el bucle de la hoja.", "Robot: pinta només les caselles on entra.|Robot: pinta solo las casillas a las que entra.", "Compareu el dibuix amb la parella del costat.|Comparad el dibujo con la pareja de al lado.", "Al final, inventeu un dibuix i el seu bucle.|Al final, inventad un dibujo y su bucle."],
        nota: "Comença amb el quadrat de la pissarra amb tota la classe (3 minuts) i després deixa treballar les parelles.|Empieza con el cuadrado de la pizarra con toda la clase (3 minutos) y después deja trabajar a las parejas." },
      { id: 's10', k: 'concepte', t: "Abans de pintar|Antes de pintar", punts: ["On és la casella de sortida?|¿Dónde está la casilla de salida?", "Cap on mira el robot?|¿Hacia dónde mira el robot?", "Quin tros es repeteix i quantes vegades?|¿Qué trozo se repite y cuántas veces?"],
        nota: "Deixa-ho projectat mentre treballen amb el full de graella.|Déjalo proyectado mientras trabajan con la hoja de cuadrícula." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre la sessió «El llapis d'en Bit».|Abre la sesión «El lápiz de Bit».", "Llegeix bé les regles del llapis.|Lee bien las reglas del lápiz.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Al pas «Robot dibuixant», que toquin «Ho hem fet!»: ja l'han fet amb el full.|En el paso «Robot dibujante», que toquen «¡Lo hemos hecho!»: ya lo han hecho con la hoja." },
      { id: 's12', k: 'demo', t: "Per què surt del mapa?|¿Por qué se sale del mapa?", x: "Repeteix 4 vegades: Endavant, Endavant, Gira a l'esquerra. Què passa?|Repite 4 veces: Adelante, Adelante, Gira a la izquierda. ¿Qué pasa?",
        demo: { w: { map: ['>..', '...', '...'], pen: true, target: ['ppp', 'p.p', 'ppp'] }, prog: '4{ f f l }' },
        nota: "Amb l'esquerra, en Bit mira amunt i surt del mapa. Per baixar, havia de girar a la dreta.|Con la izquierda, Bit mira arriba y se sale del mapa. Para bajar, tenía que girar a la derecha." },
      { id: 's13', k: 'repte', t: "Reptes de dibuix|Retos de dibujo", timer: 10, punts: ["1. La tanca|1. La valla", "2. La L gegant|2. La L gigante", "3. El marc|3. El marco", "4. L'escala|4. La escalera", "5. La bandera de colors|5. La bandera de colores"],
        nota: "Pista per al marc: cada costat té 3 Endavant i un gir.|Pista para el marco: cada lado tiene 3 Adelante y un giro." },
      { id: 's14', k: 'demo', t: "Programem junts: la L|Programemos juntos: la L", x: "En Bit mira avall. Baixa 3 caselles i en fa 3 cap a la dreta. Quin gir li cal?|Bit mira abajo. Baja 3 casillas y hace 3 hacia la derecha. ¿Qué giro necesita?",
        demo: { w: { map: ['v...', '....', '....', '....'], pen: true, target: ['....', 'p...', 'p...', 'pppp'] }, prog: '3{ f } l 3{ f }' },
        nota: "Resposta: gira a l'esquerra. Que la classe es posi al lloc d'en Bit per comprovar-ho.|Respuesta: gira a la izquierda. Que la clase se ponga en el lugar de Bit para comprobarlo." },
      { id: 's15', k: 'activitat', t: "Crea: el meu dibuix|Crea: mi dibujo", timer: 7, x: "Dibuixa el que vulguis amb un bucle: almenys 8 caselles, sense sortir del mapa.|Dibuja lo que quieras con un bucle: al menos 8 casillas, sin salir del mapa.",
        nota: "Abans d'executar el programa d'un company/a, que la parella endevini el dibuix.|Antes de ejecutar el programa de un compañero/a, que la pareja adivine el dibujo." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["El llapis pinta les caselles on entra en Bit.|El lápiz pinta las casillas a las que entra Bit.", "Pinta de pinta la casella on és, sense moure'l.|Pinta de pinta la casilla donde está, sin moverlo.", "Amb bucles, dibuixem línies, quadrats i escales.|Con bucles, dibujamos líneas, cuadrados y escaleras."],
        nota: "Avança el projecte de la setmana vinent: el mosaic de la festa major.|Avanza el proyecto de la semana que viene: el mosaico de la fiesta mayor." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quina casella no pinta el llapis?|¿Qué casilla no pinta el lápiz?", "Com pintes 3 caselles amb Pinta i un bucle?|¿Cómo pintas 3 casillas con Pinta y un bucle?"],
        nota: "Respostes: la de sortida; Repeteix 3 vegades: Endavant, Pinta.|Respuestas: la de salida; Repite 3 veces: Adelante, Pinta." }
    ],
    print: [
      { id: 'p1', t: "Graella: robot dibuixant|Cuadrícula: robot dibujante", k: 'graella', w: 8, h: 8,
        intro: "Marqueu un punt a la casella de sortida i una fletxa cap on mira el robot. La programadora llegeix el bucle; el robot pinta només les caselles on entra.|Marcad un punto en la casilla de salida y una flecha hacia donde mira el robot. La programadora lee el bucle; el robot pinta solo las casillas a las que entra.",
        legend: [['•', "Casella de sortida (no es pinta)|Casilla de salida (no se pinta)"], ['➜', 'Cap on mira el robot|Hacia dónde mira el robot'], ['✏️', 'Pinta cada casella on entra|Pinta cada casilla a la que entra']],
        items: [
          { q: "Programa 1. Comenceu a baix a l'esquerra, mirant amunt: Repeteix 4 vegades: Endavant, Endavant, Endavant, Gira a la dreta. Quin dibuix surt?|Programa 1. Empezad abajo a la izquierda, mirando arriba: Repite 4 veces: Adelante, Adelante, Adelante, Gira a la derecha. ¿Qué dibujo sale?" },
          { q: "Programa 2. Comenceu en una altra casella, mirant amunt: Repeteix 3 vegades: Endavant, Gira a la dreta, Endavant, Gira a l'esquerra. Quin dibuix surt?|Programa 2. Empezad en otra casilla, mirando arriba: Repite 3 veces: Adelante, Gira a la derecha, Adelante, Gira a la izquierda. ¿Qué dibujo sale?" },
          { q: "Ara vosaltres: inventeu un dibuix i escriviu-ne el programa amb un bucle perquè el faci una altra parella.|Ahora vosotros: inventad un dibujo y escribid su programa con un bucle para que lo haga otra pareja.", big: true }
        ] },
      { id: 'p2', t: "Fitxa: quin programa fa el dibuix?|Ficha: ¿qué programa hace el dibujo?", k: 'fitxa',
        intro: "Els requadres de punts són el dibuix que cal fer. Escriu el programa amb un bucle. Recorda: amb el llapis, en Bit pinta les caselles on entra.|Los recuadros de puntos son el dibujo que hay que hacer. Escribe el programa con un bucle. Recuerda: con el lápiz, Bit pinta las casillas a las que entra.",
        items: [
          { q: "Una L. En Bit comença mirant avall.|Una L. Bit empieza mirando abajo.", w: { map: ['v...', '....', '....', '....'], pen: true, target: ['....', 'p...', 'p...', 'pppp'] }, solProg: '3{ f } l 3{ f }',
            sol: "Baixa 3, gira a l'esquerra (que és la dreta de la pantalla) i en fa 3 més.|Baja 3, gira a la izquierda (que es la derecha de la pantalla) y hace 3 más." },
          { q: "El marc d'un quadre.|El marco de un cuadro.", w: { map: ['>...', '....', '....', '....'], pen: true, target: ['pppp', 'p..p', 'p..p', 'pppp'] }, solProg: '4{ f f f r }',
            sol: "Cada costat: 3 Endavant i un gir a la dreta, 4 vegades.|Cada lado: 3 Adelante y un giro a la derecha, 4 veces." },
          { q: "Una escala. En Bit comença mirant amunt.|Una escalera. Bit empieza mirando arriba.", w: { map: ['....', '....', '....', '^...'], pen: true, target: ['..pp', '.pp.', 'pp..', '....'] }, solProg: '3{ f r f l }',
            sol: "Cada esglaó: Endavant, Gira a la dreta, Endavant, Gira a l'esquerra, 3 vegades.|Cada escalón: Adelante, Gira a la derecha, Adelante, Gira a la izquierda, 3 veces." },
          { q: "La bandera de colors amb el bloc Pinta (sense llapis).|La bandera de colores con el bloque Pinta (sin lápiz).", w: { map: ['>....', '.....'], target: ['.ryry', '.....'] }, solProg: '2{ f paint:r f paint:y }',
            sol: "Repeteix 2 vegades: Endavant, Pinta de vermell, Endavant, Pinta de groc.|Repite 2 veces: Adelante, Pinta de rojo, Adelante, Pinta de amarillo." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: el mosaic de l'illa ---------- */
  'r2-4': {
    obj: [
      "L'alumne/a descompon un mosaic en files i identifica les files que es repeteixen.|El alumno/a descompone un mosaico en filas e identifica las filas que se repiten.",
      "L'alumne/a programa una fila amb un bucle (Endavant, Pinta) i la mitja volta per canviar de fila.|El alumno/a programa una fila con un bucle (Adelante, Pinta) y la media vuelta para cambiar de fila.",
      "L'alumne/a fa servir un bucle gran amb altres bucles a dins per repetir un grup de files.|El alumno/a usa un bucle grande con otros bucles dentro para repetir un grupo de filas.",
      "L'alumne/a planifica, programa, prova i presenta un mosaic propi.|El alumno/a planifica, programa, prueba y presenta un mosaico propio."
    ],
    comp: [
      "Competència digital (CD3 i CD5): crear un producte digital propi amb programació per blocs|Competencia digital (CD3 y CD5): crear un producto digital propio con programación por bloques",
      "Pensament computacional: descomposició, patrons, bucles dins de bucles i depuració|Pensamiento computacional: descomposición, patrones, bucles dentro de bucles y depuración",
      "Matemàtiques: files i columnes, patrons i comptar rajoles com una suma repetida|Matemáticas: filas y columnas, patrones y contar baldosas como una suma repetida",
      "Educació artística i comunicació oral: dissenyar un mosaic i presentar-lo a la classe|Educación artística y comunicación oral: diseñar un mosaico y presentarlo a la clase"
    ],
    vocab: [
      ["Mosaic|Mosaico", "Un dibuix fet amb rajoles o peces petites de colors.|Un dibujo hecho con baldosas o piezas pequeñas de colores."],
      ["Fila|Fila", "Una ratlla de rajoles d'esquerra a dreta.|Una línea de baldosas de izquierda a derecha."],
      ["Mitja volta|Media vuelta", "Endavant i un gir, dues vegades: en Bit baixa de fila i mira cap a l'altre costat.|Adelante y un giro, dos veces: Bit baja de fila y mira hacia el otro lado."],
      ["Bucle dins d'un bucle|Bucle dentro de un bucle", "Un bucle gran que repeteix un tros que ja té bucles a dins.|Un bucle grande que repite un trozo que ya tiene bucles dentro."],
      ["Pla|Plan", "El que decidim abans de programar: quantes files, de quins colors i quines són iguals.|Lo que decidimos antes de programar: cuántas filas, de qué colores y cuáles son iguales."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el mosaic de l'illa»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el mosaico de la isla»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra i les targetes d'ordres i de bucle de les sessions anteriors|La cuadrícula del suelo y las tarjetas de órdenes y de bucle de las sesiones anteriores",
        "Quadrats de paper de 4 colors (uns 16 per grup) o gomets grans, i llapis de colors|Cuadrados de papel de 4 colores (unos 16 por grupo) o pegatinas grandes, y lápices de colores"
      ],
      imprimir: ["Targetes de pintar|Tarjetas de pintar", "Full de disseny del mosaic|Hoja de diseño del mosaico"],
      prep: [
        "Imprimir i retallar un paquet de targetes de pintar per grup i un full de disseny per parella.|Imprimir y recortar un paquete de tarjetas de pintar por grupo y una hoja de diseño por pareja.",
        "Tallar els quadrats de paper de colors (o preparar els gomets) i posar-los en safates per grup.|Cortar los cuadrados de papel de colores (o preparar las pegatinas) y ponerlos en bandejas por grupo.",
        "Marcar a la quadrícula del terra una fila de vora a l'esquerra: el robot hi comença, fora del mosaic.|Marcar en la cuadrícula del suelo una fila de borde a la izquierda: el robot empieza ahí, fuera del mosaico.",
        "Decidir com es presentaran els projectes: 3 o 4 voluntaris al projector o una volta per l'aula amb els ordinadors oberts.|Decidir cómo se presentarán los proyectos: 3 o 4 voluntarios en el proyector o una vuelta por el aula con los ordenadores abiertos."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i la festa major|Recordamos y la fiesta mayor", fase: 'inici',
        fa: "Fes la pregunta de repàs sobre el bloc Pinta. Explica la missió: la plaça vol un mosaic per a la festa major i avui farem el projecte final de la unitat. Mostra el mosaic de 16 rajoles i pregunta quants blocs caldrien sense bucles.|Haz la pregunta de repaso sobre el bloque Pinta. Explica la misión: la plaza quiere un mosaico para la fiesta mayor y hoy haremos el proyecto final de la unidad. Muestra el mosaico de 16 baldosas y pregunta cuántos bloques harían falta sin bucles.",
        diu: ["Per pintar una rajola, quins dos blocs calen?|Para pintar una baldosa, ¿qué dos bloques hacen falta?",
          "16 rajoles… Quants blocs serien sense bucles? Ho podem fer més curt?|16 baldosas… ¿Cuántos bloques serían sin bucles? ¿Lo podemos hacer más corto?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Un mosaic, fila a fila|Un mosaico, fila a fila", fase: 'teoria',
        fa: "Explica el mosaic amb l'animació de les files A i B. A les demostracions, la classe prediu: quantes rajoles pinta la fila, on queda en Bit després de la mitja volta i quantes vegades es repeteix el bucle gran. Tanca amb els quatre passos del pla.|Explica el mosaico con la animación de las filas A y B. En las demostraciones, la clase predice: cuántas baldosas pinta la fila, dónde queda Bit después de la media vuelta y cuántas veces se repite el bucle grande. Cierra con los cuatro pasos del plan.",
        diu: ["Quines files són iguals? Com les anomenaríeu?|¿Qué filas son iguales? ¿Cómo las llamaríais?",
          "Després de la mitja volta, cap on mira en Bit?|Después de la media vuelta, ¿hacia dónde mira Bit?",
          "Un bucle dins d'un altre bucle: quantes files pinta cada volta del bucle gran?|Un bucle dentro de otro bucle: ¿cuántas filas pinta cada vuelta del bucle grande?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El mosaic al terra|El mosaico en el suelo", fase: 'desconnectat',
        fa: "Per parelles, dissenyen un mosaic de 4 × 4 al full de disseny: escullen el patró de les files, marquen quines són iguals i escriuen el programa amb paraules (fila A, mitja volta, fila B, mitja volta… 2 vegades). Després, en grups de 3, una altra parella fa de robot a la quadrícula: comença a la vora, entra a cada casella i hi deixa el quadrat del color que diu la targeta Pinta. Al final, comparen el mosaic del terra amb el del full.|Por parejas, diseñan un mosaico de 4 × 4 en la hoja de diseño: escogen el patrón de las filas, marcan cuáles son iguales y escriben el programa con palabras (fila A, media vuelta, fila B, media vuelta… 2 veces). Después, en grupos de 3, otra pareja hace de robot en la cuadrícula: empieza en el borde, entra en cada casilla y deja el cuadrado del color que dice la tarjeta Pinta. Al final, comparan el mosaico del suelo con el de la hoja.",
        diu: ["Primer el pla: quines files són iguals?|Primero el plan: ¿qué filas son iguales?",
          "Robot, pinta només després d'entrar a la casella.|Robot, pinta solo después de entrar en la casilla.",
          "El mosaic del terra és igual que el del full? On és la diferència?|¿El mosaico del suelo es igual que el de la hoja? ¿Dónde está la diferencia?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles i després grups de 3|Por parejas y después grupos de 3" },
      { min: 12, t: "A l'ordinador: files i mitges voltes|En el ordenador: filas y medias vueltas", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins als reptes de les dues franges. A mig bloc, atura la classe amb la diapositiva 12: en Bit gira cap al costat equivocat i surt del mapa. Recorda'ls que diguin el pla en veu alta abans de cada repte. Fixa't en qui oblida l'Endavant de la mitja volta.|Cada alumno/a hace la sesión hasta los retos de las dos franjas. A mitad de bloque, para la clase con la diapositiva 12: Bit gira hacia el lado equivocado y se sale del mapa. Recuérdales que digan el plan en voz alta antes de cada reto. Fíjate en quién olvida el Adelante de la media vuelta.",
        diu: ["Digues-me el teu pla: primer la fila…, després…|Dime tu plan: primero la fila…, después…",
          "On és la fila següent? Llavors, cap on has de girar?|¿Dónde está la fila siguiente? Entonces, ¿hacia dónde tienes que girar?"],
        slides: ['s11', 's12'], app: "Pregunta de «Recorda», les dues històries de la festa major, les targetes de «Descobreix», ordenar el pla, les files iguals, «Mosaic de casa» (per a casa), les dues files de colors, l'«Investiga» de la mitja volta, la «Pausa activa» i els reptes de la franja verda i de les dues franges.|Pregunta de «Recuerda», las dos historias de la fiesta mayor, las tarjetas de «Descubre», ordenar el plan, las filas iguales, «Mosaico de casa» (para casa), las dos filas de colores, el «Investiga» de la media vuelta, la «Pausa activa» y los retos de la franja verde y de las dos franjas.", org: "Individual|Individual" },
      { min: 15, t: "Projecte: el gran mosaic i el meu mosaic|Proyecto: el gran mosaico y mi mosaico", fase: 'crea',
        fa: "Primer, la pregunta de les 4 files i el gran mosaic de la plaça: el bucle gran ja hi és i cal posar-hi el tros de dues files. Després, abans del projecte final, cada alumne/a decideix el seu pla (quantes files, colors i files iguals) al full de disseny o en veu alta. Quan el tingui, programa, prova i millora fent servir «Pas a pas».|Primero, la pregunta de las 4 filas y el gran mosaico de la plaza: el bucle grande ya está y hay que poner dentro el trozo de dos filas. Después, antes del proyecto final, cada alumno/a decide su plan (cuántas filas, colores y filas iguales) en la hoja de diseño o en voz alta. Cuando lo tenga, programa, prueba y mejora usando «Paso a paso».",
        diu: ["Toca dins del bucle gran: els blocs nous hi aniran a dins.|Toca dentro del bucle grande: los bloques nuevos irán dentro.",
          "En acabar el tros, en Bit és a la vora i mira a la dreta, com al principi?|Al terminar el trozo, ¿Bit está en el borde y mira a la derecha, como al principio?",
          "El teu mosaic té files iguals? Les pots fer amb un bucle gran?|¿Tu mosaico tiene filas iguales? ¿Las puedes hacer con un bucle grande?"],
        slides: ['s13', 's14', 's15'], app: "La pregunta del bucle gran, el repte «El gran mosaic de la plaça» i el projecte de «Crea»: El meu mosaic.|La pregunta del bucle grande, el reto «El gran mosaico de la plaza» y el proyecto de «Crea»: Mi mosaico.", org: "Individual|Individual" },
      { min: 5, t: "Presentem els mosaics|Presentamos los mosaicos", fase: 'tancament',
        fa: "Tres o quatre voluntaris projecten el seu mosaic. Abans d'executar-lo, expliquen el pla i la classe diu quines files són iguals. Després, expliquen un bug que hagin trobat i com l'han arreglat.|Tres o cuatro voluntarios proyectan su mosaico. Antes de ejecutarlo, explican el plan y la clase dice qué filas son iguales. Después, explican un bug que hayan encontrado y cómo lo han arreglado.",
        diu: ["Quin és el pla del teu mosaic?|¿Cuál es el plan de tu mosaico?",
          "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?",
          "Què t'agrada del mosaic del company/a?|¿Qué te gusta del mosaico del compañero/a?"],
        slides: ['s16'], app: "El projecte guardat a «Crea», projectat des de l'ordinador de cada voluntari/ària.|El proyecto guardado en «Crea», proyectado desde el ordenador de cada voluntario/a.", org: "Tot el grup|Todo el grupo" },
      { min: 3, t: "Tancament de la unitat|Cierre de la unidad", fase: 'tancament',
        fa: "Repassa les idees de la unitat amb el resum i deixa que responguin les preguntes finals de l'app. Fes el tiquet de sortida i reconeix la feina de tothom amb la insígnia d'artista del mosaic.|Repasa las ideas de la unidad con el resumen y deja que respondan las preguntas finales de la app. Haz el ticket de salida y reconoce el trabajo de todos con la insignia de artista del mosaico.",
        diu: ["Per a què serveix un bucle? I un patró?|¿Para qué sirve un bucle? ¿Y un patrón?",
          "Quina sessió de la unitat us ha agradat més?|¿Qué sesión de la unidad os ha gustado más?"],
        slides: ['s17', 's18'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["A la mitja volta, oblida un dels Endavant i en Bit pinta la vora o es queda a la mateixa fila.|En la media vuelta, olvida uno de los Adelante y Bit pinta el borde o se queda en la misma fila.",
        "Que executi pas a pas fins al final de la fila i digui en veu alta cada moviment: surt a la vora, gira, baixa, gira.|Que ejecute paso a paso hasta el final de la fila y diga en voz alta cada movimiento: sale al borde, gira, baja, gira."],
      ["Gira sempre cap al mateix costat al final de cada fila.|Gira siempre hacia el mismo lado al final de cada fila.",
        "Pregunta: cap on mira en Bit ara? On és la fila de sota? Que es posi al lloc d'en Bit, com a la unitat 1.|Pregunta: ¿hacia dónde mira Bit ahora? ¿Dónde está la fila de abajo? Que se ponga en el lugar de Bit, como en la unidad 1."],
      ["Al gran mosaic, posa els blocs fora del bucle gran.|En el gran mosaico, pone los bloques fuera del bucle grande.",
        "Que toqui l'espai de dins del bucle gran abans d'afegir blocs: hi apareix «els blocs nous van aquí». Si ja els ha posat fora, que els esborri i comenci el tros a dins.|Que toque el espacio de dentro del bucle grande antes de añadir bloques: aparece «los bloques nuevos van aquí». Si ya los ha puesto fuera, que los borre y empiece el trozo dentro."],
      ["Comença a programar el seu mosaic sense pla i es perd.|Empieza a programar su mosaico sin plan y se pierde.",
        "Atura'l amb amabilitat i demana-li que pinti el mosaic al full de disseny o que digui el pla. Després, que programi només la primera fila.|Páralo con amabilidad y pídele que pinte el mosaico en la hoja de diseño o que diga el plan. Después, que programe solo la primera fila."],
      ["Posa Pinta abans d'Endavant i pinta la casella de la vora.|Pone Pinta antes de Adelante y pinta la casilla del borde.",
        "Recorda-li que en Bit comença fora del mosaic: primer entra a la rajola i després la pinta.|Recuérdale que Bit empieza fuera del mosaico: primero entra en la baldosa y después la pinta."]
    ],
    diff: {
      mes: "Fer el mosaic propi amb tres tipus de files o amb un patró de colors dins de cada fila (per exemple vermell, groc, vermell, groc) i, després, buscar la manera de fer-lo amb menys blocs. També poden dissenyar al full un mosaic perquè el programi un company/a.|Hacer el mosaico propio con tres tipos de filas o con un patrón de colores dentro de cada fila (por ejemplo rojo, amarillo, rojo, amarillo) y, después, buscar la manera de hacerlo con menos bloques. También pueden diseñar en la hoja un mosaico para que lo programe un compañero/a.",
      menys: "Fer el projecte amb dues files només (una fila, la mitja volta i l'altra fila) i, quan funcioni, afegir-hi el bucle gran. Tenir les targetes de paper a la taula per construir el tros abans de passar-lo a blocs.|Hacer el proyecto con dos filas solo (una fila, la media vuelta y la otra fila) y, cuando funcione, añadir el bucle grande. Tener las tarjetas de papel en la mesa para construir el trozo antes de pasarlo a bloques."
    },
    aval: {
      ticket: ["Com es programa un mosaic? Digues els passos del pla.|¿Cómo se programa un mosaico? Di los pasos del plan.",
        "Què fa un bucle dins d'un altre bucle?|¿Qué hace un bucle dentro de otro bucle?"],
      rubric: [
        ["Descomposició en files|Descomposición en filas", "Parteix el mosaic en files, troba les que són iguals i ho diu abans de programar.|Parte el mosaico en filas, encuentra las que son iguales y lo dice antes de programar.", "Troba les files iguals quan l'hi pregunten, però programa sense seguir el pla.|Encuentra las filas iguales cuando se lo preguntan, pero programa sin seguir el plan."],
        ["Fila i mitja volta|Fila y media vuelta", "Programa una fila amb un bucle i la mitja volta cap al costat bo.|Programa una fila con un bucle y la media vuelta hacia el lado bueno.", "Programa la fila, però la mitja volta li surt després de diverses proves.|Programa la fila, pero la media vuelta le sale después de varias pruebas."],
        ["Projecte final|Proyecto final", "Crea un mosaic propi amb bucles (també un bucle gran), el prova, el millora i l'explica.|Crea un mosaico propio con bucles (también un bucle grande), lo prueba, lo mejora y lo explica.", "Crea un mosaic d'una o dues files amb bucles, o el gran amb ajuda.|Crea un mosaico de una o dos filas con bucles, o el grande con ayuda."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla pot ensenyar-vos el mosaic que ha creat i explicar-vos-en el pla. Podeu fer també «Mosaic de casa» amb papers de colors o peces de construcció.|En casa, con el móvil, vuestro hijo o hija puede enseñaros el mosaico que ha creado y explicaros su plan. También podéis hacer «Mosaico de casa» con papeles de colores o piezas de construcción.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: el mosaic de l'illa|Proyecto: el mosaico de la isla", x: "Avui farem el projecte final de la unitat: un mosaic de colors programat amb bucles.|Hoy haremos el proyecto final de la unidad: un mosaico de colores programado con bucles.",
        nota: "Explica que avui faran servir tot el que han après: bucles, patrons, el llapis i el bloc Pinta.|Explica que hoy usarán todo lo que han aprendido: bucles, patrones, el lápiz y el bloque Pinta." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Quin programa pinta 3 caselles seguides de vermell?|¿Qué programa pinta 3 casillas seguidas de rojo?",
        nota: "Resposta: Repeteix 3 vegades: Endavant, Pinta de vermell. Sense l'Endavant, en Bit no es mou.|Respuesta: Repite 3 veces: Adelante, Pinta de rojo. Sin el Adelante, Bit no se mueve." },
      { id: 's3', k: 'concepte', t: "El mosaic de la festa major|El mosaico de la fiesta mayor", punts: ["La plaça vol un mosaic de 16 rajoles.|La plaza quiere un mosaico de 16 baldosas.", "Files vermelles i grogues que es repeteixen.|Filas rojas y amarillas que se repiten.", "En Bit l'ha de pintar amb pocs blocs.|Bit lo tiene que pintar con pocos bloques."],
        nota: "Pregunta: sense bucles, quants blocs caldrien? (Una pista: dos per rajola, més els girs.)|Pregunta: sin bucles, ¿cuántos bloques harían falta? (Una pista: dos por baldosa, más los giros.)" },
      { id: 's4', k: 'anim', t: "Un mosaic, fila a fila|Un mosaico, fila a fila", anim: 'u2rows', x: "Parteix el mosaic en files i busca les que són iguals.|Parte el mosaico en filas y busca las que son iguales.",
        nota: "Connecta amb la unitat 1: descompondre és partir un problema gran en trossos. Aquí, els trossos són files.|Conecta con la unidad 1: descomponer es partir un problema grande en trozos. Aquí, los trozos son filas." },
      { id: 's5', k: 'demo', t: "Una fila amb un bucle|Una fila con un bucle", x: "Repeteix 4 vegades: Endavant, Pinta de verd. Quantes rajoles pintarà?|Repite 4 veces: Adelante, Pinta de verde. ¿Cuántas baldosas pintará?",
        demo: { w: { map: ['>.....', '......'], target: ['.gggg.', '......'] }, prog: '4{ f paint:g }' },
        nota: "Fes notar que en Bit comença fora del mosaic, a la vora: primer entra a la rajola i després la pinta.|Haz notar que Bit empieza fuera del mosaico, en el borde: primero entra en la baldosa y después la pinta." },
      { id: 's6', k: 'demo', t: "La mitja volta|La media vuelta", x: "Fila groga, Repeteix 2 vegades: Endavant, Gira a la dreta, i fila blava. On queda en Bit?|Fila amarilla, Repite 2 veces: Adelante, Gira a la derecha, y fila azul. ¿Dónde queda Bit?",
        demo: { w: { map: ['>.....', '......'], target: ['.yyyy.', '.uuuu.'] }, prog: '4{ f paint:y } 2{ f r } 4{ f paint:u }' },
        nota: "Atura després de la mitja volta: en Bit és a la vora de la dreta, una fila més avall, mirant a l'esquerra.|Para después de la media vuelta: Bit está en el borde de la derecha, una fila más abajo, mirando a la izquierda." },
      { id: 's7', k: 'demo', t: "Un bucle dins d'un bucle|Un bucle dentro de un bucle", x: "El tros de dues files es repeteix 2 vegades. Quantes files pintarà?|El trozo de dos filas se repite 2 veces. ¿Cuántas filas pintará?",
        demo: { w: { map: ['>.....', '......', '......', '......', '......'], target: ['.rrrr.', '.yyyy.', '.rrrr.', '.yyyy.', '......'] }, prog: '2{ 4{ f paint:r } 2{ f r } 4{ f paint:y } 2{ f l } }' },
        nota: "Resposta: 4 files. Fes notar que, en acabar el tros, en Bit torna a ser a la vora mirant a la dreta: per això es pot repetir.|Respuesta: 4 filas. Haz notar que, al terminar el trozo, Bit vuelve a estar en el borde mirando a la derecha: por eso se puede repetir." },
      { id: 's8', k: 'concepte', t: "El pla del mosaic|El plan del mosaico", punts: ["1. Compta les files.|1. Cuenta las filas.", "2. Busca les files iguals.|2. Busca las filas iguales.", "3. Programa una fila i la mitja volta.|3. Programa una fila y la media vuelta.", "4. Repeteix les files iguals i prova-ho.|4. Repite las filas iguales y pruébalo."],
        nota: "Deixa aquesta diapositiva a la vista durant l'activitat del terra i el projecte.|Deja esta diapositiva a la vista durante la actividad del suelo y el proyecto." },
      { id: 's9', k: 'activitat', t: "El mosaic al terra|El mosaico en el suelo", timer: 12, punts: ["Per parelles: dissenyeu el mosaic al full.|Por parejas: diseñad el mosaico en la hoja.", "Escriviu el programa amb paraules.|Escribid el programa con palabras.", "En grups de 3: el robot comença a la vora.|En grupos de 3: el robot empieza en el borde.", "Entra a la casella i hi deixa el color de la targeta.|Entra en la casilla y deja el color de la tarjeta."],
        nota: "Dona 6 minuts al disseny i 6 a la quadrícula. El robot executa el programa d'una altra parella.|Da 6 minutos al diseño y 6 a la cuadrícula. El robot ejecuta el programa de otra pareja." },
      { id: 's10', k: 'concepte', t: "Les regles del mosaic|Las reglas del mosaico", punts: ["El robot comença fora, a la vora.|El robot empieza fuera, en el borde.", "Primer Endavant, després Pinta.|Primero Adelante, después Pinta.", "Mitja volta: Endavant, gira, Endavant, gira.|Media vuelta: Adelante, gira, Adelante, gira.", "Les files iguals, amb un bucle gran.|Las filas iguales, con un bucle grande."],
        nota: "Deixa-ho projectat mentre treballen a la quadrícula.|Déjalo proyectado mientras trabajan en la cuadrícula." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Projecte: el mosaic de l'illa».|Abre la sesión «Proyecto: el mosaico de la isla».", "Abans de cada repte, digues el pla.|Antes de cada reto, di el plan.", "Para després del repte de les dues franges.|Para después del reto de las dos franjas."],
        nota: "«Mosaic de casa» és per fer a casa: que toquin «Ara no».|«Mosaico de casa» es para hacer en casa: que toquen «Ahora no»." },
      { id: 's12', k: 'demo', t: "Cap on gira?|¿Hacia dónde gira?", x: "Fila groga i Repeteix 2 vegades: Endavant, Gira a l'esquerra. Què passarà?|Fila amarilla y Repite 2 veces: Adelante, Gira a la izquierda. ¿Qué pasará?",
        demo: { w: { map: ['>.....', '......'], target: ['.yyyy.', '.uuuu.'] }, prog: '4{ f paint:y } 2{ f l }' },
        nota: "En Bit gira cap amunt i surt del mapa. La fila de sota és a la seva dreta: la mitja volta havia de ser a la dreta.|Bit gira hacia arriba y se sale del mapa. La fila de abajo está a su derecha: la media vuelta tenía que ser a la derecha." },
      { id: 's13', k: 'repte', t: "El gran mosaic de la plaça|El gran mosaico de la plaza", timer: 5, x: "El bucle gran ja hi és: posa-hi a dins el tros de dues files.|El bucle grande ya está: pon dentro el trozo de dos filas.",
        nota: "Pista: fila vermella, mitja volta a la dreta, fila groga, mitja volta a l'esquerra.|Pista: fila roja, media vuelta a la derecha, fila amarilla, media vuelta a la izquierda." },
      { id: 's14', k: 'concepte', t: "El meu mosaic: fes el pla|Mi mosaico: haz el plan", punts: ["Quantes files tindrà?|¿Cuántas filas tendrá?", "De quins colors serà cada fila?|¿De qué colores será cada fila?", "Quines files són iguals?|¿Qué filas son iguales?", "Prova cada fila abans de continuar.|Prueba cada fila antes de seguir."],
        nota: "No deixis començar a programar fins que cada alumne/a tingui el pla dibuixat o dit.|No dejes empezar a programar hasta que cada alumno/a tenga el plan dibujado o dicho." },
      { id: 's15', k: 'activitat', t: "Projecte: el meu mosaic|Proyecto: mi mosaico", timer: 10, x: "Almenys 8 rajoles, 2 colors i un bucle. Planifica, programa, prova i millora.|Al menos 8 baldosas, 2 colores y un bucle. Planifica, programa, prueba y mejora.",
        nota: "Qui acabi pot fer el mosaic amb menys blocs o ajudar un company/a amb preguntes.|Quien termine puede hacer el mosaico con menos bloques o ayudar a un compañero/a con preguntas." },
      { id: 's16', k: 'activitat', t: "Presentem els mosaics|Presentamos los mosaicos", timer: 5, punts: ["Quin és el teu pla?|¿Cuál es tu plan?", "Quines files són iguals?|¿Qué filas son iguales?", "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?"],
        nota: "Abans d'executar cada mosaic, que la classe digui quantes files tindrà.|Antes de ejecutar cada mosaico, que la clase diga cuántas filas tendrá." },
      { id: 's17', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["Un bucle repeteix els blocs de dins.|Un bucle repite los bloques de dentro.", "Un patró és un tros que es repeteix.|Un patrón es un trozo que se repite.", "El llapis i Pinta fan dibuixos i mosaics.|El lápiz y Pinta hacen dibujos y mosaicos.", "Un bucle pot anar dins d'un altre bucle.|Un bucle puede ir dentro de otro bucle."],
        nota: "Felicita la classe pel segon projecte del curs. Avança que la unitat següent tracta de llums, sons i botons.|Felicita a la clase por el segundo proyecto del curso. Avanza que la unidad siguiente trata de luces, sonidos y botones." },
      { id: 's18', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Com es programa un mosaic?|¿Cómo se programa un mosaico?", "Què fa un bucle dins d'un altre bucle?|¿Qué hace un bucle dentro de otro bucle?"],
        nota: "Respostes: fila a fila, buscant les files iguals; repeteix un tros que ja té bucles a dins.|Respuestas: fila a fila, buscando las filas iguales; repite un trozo que ya tiene bucles dentro." }
    ],
    print: [
      { id: 'p1', t: "Targetes de pintar|Tarjetas de pintar", k: 'targetes',
        intro: "Afegiu aquestes targetes al paquet de les sessions anteriors. El robot fa la targeta Pinta deixant un quadrat de paper d'aquell color a la casella on és. La targeta «Mitja volta» resumeix Endavant, gira, Endavant, gira.|Añadid estas tarjetas al paquete de las sesiones anteriores. El robot hace la tarjeta Pinta dejando un cuadrado de papel de ese color en la casilla donde está. La tarjeta «Media vuelta» resume Adelante, gira, Adelante, gira.",
        items: [
          { t: "Pinta de vermell 🟥|Pinta de rojo 🟥", n: 2 },
          { t: "Pinta de groc 🟨|Pinta de amarillo 🟨", n: 2 },
          { t: "Pinta de blau 🟦|Pinta de azul 🟦", n: 2 },
          { t: "Pinta de verd 🟩|Pinta de verde 🟩", n: 2 },
          { t: "Mitja volta 🔄|Media vuelta 🔄", n: 2 },
          { t: "Fila A 🅰️|Fila A 🅰️", n: 1 },
          { t: "Fila B 🅱️|Fila B 🅱️", n: 1 }
        ] },
      { id: 'p2', t: "Full de disseny del mosaic|Hoja de diseño del mosaico", k: 'graella', w: 4, h: 4,
        intro: "Pinteu el vostre mosaic a la quadrícula. En Bit comença fora, a l'esquerra de la primera fila, mirant a la dreta. Marqueu amb una lletra (A, B…) les files que són iguals.|Pintad vuestro mosaico en la cuadrícula. Bit empieza fuera, a la izquierda de la primera fila, mirando a la derecha. Marcad con una letra (A, B…) las filas que son iguales.",
        legend: [['🟥', 'Vermell|Rojo'], ['🟨', 'Groc|Amarillo'], ['🟦', 'Blau|Azul'], ['🟩', 'Verd|Verde'], ['🤖', 'En Bit comença a la vora|Bit empieza en el borde']],
        items: [
          { q: "Quantes files té el vostre mosaic? Quines són iguals?|¿Cuántas filas tiene vuestro mosaico? ¿Cuáles son iguales?" },
          { q: "Escriviu el programa amb paraules: fila A, mitja volta, fila B, mitja volta… Quantes vegades es repeteix?|Escribid el programa con palabras: fila A, media vuelta, fila B, media vuelta… ¿Cuántas veces se repite?", big: true },
          { q: "Quan l'hàgiu fet al terra o a l'ordinador: ha quedat igual que el vostre pla? Què heu hagut d'arreglar?|Cuando lo hayáis hecho en el suelo o en el ordenador: ¿ha quedado igual que vuestro plan? ¿Qué habéis tenido que arreglar?" }
        ] }
    ]
  }
});
