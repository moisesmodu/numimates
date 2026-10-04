/* ===== Numi Tech · guia del professorat · Tech Robot (unitats 1-8) =====
   Material propi de Numi (no és de cap altra plataforma). Classe de 60 minuts, un cop per setmana, alumnes amb
   ordinador a l'aula (i el mòbil a casa) i presentació projectada pel professor/a.
   Cada sessió (r1-1 … r1-4) té el mateix esquema; tots els textos són "català|castellano":
   · obj, comp, vocab, mat {aula, imprimir, prep}
   · plan: blocs que sumen 60 minuts {min, t, fase, fa, diu[], slides[], app, org}
   · errors, diff {mes, menys}, aval {ticket[], rubric[[criteri, assolit, en procés]]}, casa
   · slides: diapositives per projectar {id, k, t, x?, punts?, anim? (clau de TANI), demo? {w:{map}, prog:'f l r p d'}, timer?, nota}
   · print: imprimibles {id, t, k:'targetes'|'quadricula'|'fitxa', intro, items}
       targetes   → items: {t, n}  (text de la targeta i còpies per grup)
       quadricula → items: {t, w, h, cells, instructions, sol?, prog?}  (prog: programa amb error que cal arreglar; sol: una solució)
       fitxa      → items: {q, w?, prog?, a?, sol, solProg?}  (a: lletra on acaba en Bit; solProg: programa solució)
   Els mapes fan servir els mateixos símbols que tech-bot.js (si hi ha «#», les caselles «.» són arbres). */
const TGUIDE = {};

/* ---------- Sessió 1 · Què és un algorisme? ---------- */
TGUIDE['r1-1'] = {
  obj: [
    "L'alumne/a explica amb les seves paraules què és un algorisme i en dona un exemple de la vida diària.|El alumno/a explica con sus palabras qué es un algoritmo y da un ejemplo de la vida diaria.",
    "L'alumne/a ordena els passos d'una tasca quotidiana i diu què passaria si se'n canviés l'ordre.|El alumno/a ordena los pasos de una tarea cotidiana y dice qué pasaría si se cambiara el orden.",
    "L'alumne/a distingeix l'ordre que mou en Bit de casella (Endavant) de les que només el fan girar.|El alumno/a distingue la orden que mueve a Bit de casilla (Adelante) de las que solo lo hacen girar.",
    "L'alumne/a escriu i executa un programa de blocs que porta en Bit fins a la bandera.|El alumno/a escribe y ejecuta un programa de bloques que lleva a Bit hasta la bandera."
  ],
  comp: [
    "Competència digital (CD5): resoldre problemes senzills amb programació per blocs|Competencia digital (CD5): resolver problemas sencillos con programación por bloques",
    "Pensament computacional: algorisme, seqüència d'instruccions i programa|Pensamiento computacional: algoritmo, secuencia de instrucciones y programa",
    "Matemàtiques (sentit espacial): desplaçaments i orientació en una quadrícula|Matemáticas (sentido espacial): desplazamientos y orientación en una cuadrícula",
    "Comunicació oral: donar i seguir instruccions precises|Comunicación oral: dar y seguir instrucciones precisas"
  ],
  vocab: [
    ["Algorisme|Algoritmo", "Una llista d'instruccions, en ordre, per fer una tasca.|Una lista de instrucciones, en orden, para hacer una tarea."],
    ["Instrucció|Instrucción", "Una sola cosa que li diem que faci al robot.|Una sola cosa que le decimos al robot que haga."],
    ["Programa|Programa", "Un algorisme escrit amb blocs que una màquina pot seguir.|Un algoritmo escrito con bloques que una máquina puede seguir."],
    ["Executar|Ejecutar", "Fer que la màquina segueixi el programa, bloc a bloc.|Hacer que la máquina siga el programa, bloque a bloque."],
    ["Girar|Girar", "Canviar cap on mira el robot sense moure'l de casella.|Cambiar hacia dónde mira el robot sin moverlo de casilla."]
  ],
  mat: {
    aula: [
      "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Què és un algorisme?»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «¿Qué es un algoritmo?»",
      "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
      "Cinta de pintor per marcar al terra una quadrícula de 5 × 5 caselles (uns 40 cm per casella)|Cinta de pintor para marcar en el suelo una cuadrícula de 5 × 5 casillas (unos 40 cm por casilla)",
      "Una bandera de paper i 3 o 4 objectes tous que facin de roca (motxilles o coixins)|Una bandera de papel y 3 o 4 objetos blandos que hagan de roca (mochilas o cojines)"
    ],
    imprimir: ["Targetes d'ordres|Tarjetas de órdenes", "Quadrícula del terra: missions d'en Bit|Cuadrícula del suelo: misiones de Bit"],
    prep: [
      "Marcar la quadrícula al terra en un espai lliure de l'aula. Si no n'hi ha, imprimir la quadrícula en A3 i fer-la servir a la taula amb una figureta.|Marcar la cuadrícula en el suelo en un espacio libre del aula. Si no lo hay, imprimir la cuadrícula en A3 y usarla en la mesa con una figurita.",
      "Imprimir i retallar un paquet de targetes per cada grup de 3. Si es plastifiquen, serveixen per a tota la unitat.|Imprimir y recortar un paquete de tarjetas por cada grupo de 3. Si se plastifican, sirven para toda la unidad.",
      "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada.",
      "Provar abans la demostració de la diapositiva 9 per saber on acaba en Bit.|Probar antes la demostración de la diapositiva 9 para saber dónde termina Bit."
    ]
  },
  plan: [
    { min: 5, t: "Benvinguda: coneixem en Bit|Bienvenida: conocemos a Bit", fase: 'inici',
      fa: "Presenta en Bit, el robot de l'illa, i escriu a la pissarra l'objectiu de la sessió. Pregunta què creuen que necessita un robot per saber què ha de fer i recull tres o quatre respostes sense corregir-les. Remarca la idea clau: en Bit fa exactament el que li diem.|Presenta a Bit, el robot de la isla, y escribe en la pizarra el objetivo de la sesión. Pregunta qué creen que necesita un robot para saber qué tiene que hacer y recoge tres o cuatro respuestas sin corregirlas. Remarca la idea clave: Bit hace exactamente lo que le decimos.",
      diu: ["Un robot pot pensar sol o necessita que algú li digui què ha de fer?|¿Un robot puede pensar solo o necesita que alguien le diga qué tiene que hacer?",
        "Avui aprendrem a donar ordres tan clares que en Bit no es pugui equivocar.|Hoy aprenderemos a dar órdenes tan claras que Bit no se pueda equivocar.",
        "En Bit fa exactament el que li dieu: ni més ni menys.|Bit hace exactamente lo que le decís: ni más ni menos."],
      slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades o abaixades.|Todavía no: pantallas apagadas o bajadas.", org: "Tot el grup|Todo el grupo" },
    { min: 10, t: "Què és un algorisme?|¿Qué es un algoritmo?", fase: 'teoria',
      fa: "Explica què és un algorisme amb la recepta i demana exemples de la vida diària. Mostra amb el mitjó i la sabata que l'ordre canvia el resultat. Presenta les tres ordres d'en Bit i fes que tothom faci un gir dret, sense caminar, per comprovar que girar no mou de casella. Abans d'executar la demostració, cada alumne/a assenyala amb el dit on creu que acabarà en Bit.|Explica qué es un algoritmo con la receta y pide ejemplos de la vida diaria. Muestra con el calcetín y el zapato que el orden cambia el resultado. Presenta las tres órdenes de Bit y haz que todos hagan un giro de pie, sin caminar, para comprobar que girar no mueve de casilla. Antes de ejecutar la demostración, cada alumno/a señala con el dedo dónde cree que terminará Bit.",
      diu: ["Quins passos feu per anar de casa a l'escola? Això és un algorisme!|¿Qué pasos hacéis para ir de casa al cole? ¡Eso es un algoritmo!",
        "Què passa si us poseu la sabata abans que el mitjó?|¿Qué pasa si os ponéis el zapato antes que el calcetín?",
        "Gireu a la dreta sense caminar. Els vostres peus han canviat de lloc?|Girad a la derecha sin caminar. ¿Vuestros pies han cambiado de sitio?",
        "Abans d'executar-lo: on creieu que acabarà en Bit, a la A, a la B o a la C?|Antes de ejecutarlo: ¿dónde creéis que terminará Bit, en la A, en la B o en la C?"],
      slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
    { min: 12, t: "Fes de robot a la quadrícula|Haz de robot en la cuadrícula", fase: 'desconnectat',
      fa: "Fes grups de 3 amb tres papers: programador/a, robot i revisor/a. El programador/a posa les targetes en fila, el robot les fa una a una damunt la quadrícula i el revisor/a comprova que cada pas coincideix amb la targeta. Després de cada missió de la fitxa de la quadrícula, els papers roten. Si només hi ha una quadrícula al terra, la resta de grups treballen amb la versió A3 a la taula i una figureta.|Haz grupos de 3 con tres papeles: programador/a, robot y revisor/a. El programador/a pone las tarjetas en fila, el robot las hace una a una sobre la cuadrícula y el revisor/a comprueba que cada paso coincide con la tarjeta. Después de cada misión de la ficha de la cuadrícula, los papeles rotan. Si solo hay una cuadrícula en el suelo, el resto de grupos trabaja con la versión A3 en la mesa y una figurita.",
      diu: ["El robot només fa el que diu la targeta, encara que vegi que és un error.|El robot solo hace lo que dice la tarjeta, aunque vea que es un error.",
        "Abans de moure's, llegiu tot el programa en veu alta.|Antes de moveros, leed todo el programa en voz alta.",
        "Heu xocat amb una roca? Molt bé: quina targeta canviaríeu?|¿Habéis chocado con una roca? Muy bien: ¿qué tarjeta cambiaríais?"],
      slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
    { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
      fa: "Cada alumne/a obre la sessió i avança al seu ritme. Passeja per l'aula i fixa't en qui mou en Bit amb els botons sense pensar abans: demana-li que digui el camí en veu alta abans de tocar res. Al pas «Fes de robot», que toquin «Ho hem fet!», perquè ja l'hem fet a classe.|Cada alumno/a abre la sesión y avanza a su ritmo. Pasea por el aula y fíjate en quién mueve a Bit con los botones sin pensar antes: pídele que diga el camino en voz alta antes de tocar nada. En el paso «Haz de robot», que toquen «¡Lo hemos hecho!», porque ya lo hemos hecho en clase.",
      diu: ["Abans de tocar cap botó, digues-me el camí amb paraules.|Antes de tocar ningún botón, dime el camino con palabras.",
        "Quantes caselles hi ha fins al revolt? Compta-les amb el dit.|¿Cuántas casillas hay hasta la curva? Cuéntalas con el dedo.",
        "A la pregunta «On acabarà?», primer pensa i després tria.|En la pregunta «¿Dónde terminará?», primero piensa y después elige."],
      slides: ['s12'], app: "De «La missió» fins a «Investiga»: les dues històries, les targetes de «Descobreix», la pregunta de la recepta, ordenar els passos per rentar-se les dents, «Fes de robot» (ja fet), moure en Bit amb els botons, «On acabarà?» i la pregunta del gir a l'esquerra.|De «La misión» hasta «Investiga»: las dos historias, las tarjetas de «Descubre», la pregunta de la receta, ordenar los pasos para lavarse los dientes, «Haz de robot» (ya hecho), mover a Bit con los botones, «¿Dónde terminará?» y la pregunta del giro a la izquierda.", org: "Individual|Individual" },
    { min: 10, t: "Reptes: el primer programa|Retos: el primer programa", fase: 'ordinador',
      fa: "Fes la pausa activa tots junts, drets al costat de la taula. Després programa amb la classe el camí de la diapositiva 13, demanant un bloc a cada alumne/a, i deixa'ls fer els quatre reptes. Qui acabi ajuda un company/a amb preguntes, sense tocar-li el ratolí.|Haced la pausa activa todos juntos, de pie al lado de la mesa. Después programa con la clase el camino de la diapositiva 13, pidiendo un bloque a cada alumno/a, y deja que hagan los cuatro retos. Quien termine ayuda a un compañero/a con preguntas, sin tocarle el ratón.",
      diu: ["Quin és el primer bloc? I el segon? Anem a poc a poc.|¿Cuál es el primer bloque? ¿Y el segundo? Vamos poco a poco.",
        "En el repte de l'error, en Bit avança massa o massa poc abans de girar?|En el reto del error, ¿Bit avanza demasiado o demasiado poco antes de girar?",
        "Si ajudes algú, fes-li preguntes: no li diguis la solució.|Si ayudas a alguien, hazle preguntas: no le digas la solución."],
      slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes de «Reptes»: la recta, el revolt, les roques i l'aigua, i el programa que xoca.|«Pausa activa» y los cuatro retos de «Retos»: la recta, la curva, las rocas y el agua, y el programa que choca.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
    { min: 5, t: "Crea: el meu primer camí|Crea: mi primer camino", fase: 'crea',
      fa: "Cada alumne/a inventa un camí que passi per les tres estrelles. Quan el tinguin, en parelles s'ensenyen el programa i l'altre/a diu on creu que anirà en Bit abans d'executar-lo.|Cada alumno/a inventa un camino que pase por las tres estrellas. Cuando lo tengan, por parejas se enseñan el programa y el otro/a dice adónde cree que irá Bit antes de ejecutarlo.",
      diu: ["Hi ha molts camins bons: el teu no ha de ser igual que el del company/a.|Hay muchos caminos buenos: el tuyo no tiene que ser igual que el del compañero/a.",
        "Abans d'executar el programa del company/a, digues on creus que acabarà.|Antes de ejecutar el programa del compañero/a, di dónde crees que terminará."],
      slides: ['s15'], app: "Pas «Crea»: El meu primer camí.|Paso «Crea»: Mi primer camino.", org: "Individual i després per parelles|Individual y después por parejas" },
    { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
      fa: "Repassa les tres idees de la sessió amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una de les preguntes del tiquet.|Repasa las tres ideas de la sesión con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una de las preguntas del ticket.",
      diu: ["Qui em diu un algorisme que hagi fet avui abans de venir?|¿Quién me dice un algoritmo que haya hecho hoy antes de venir?",
        "Quin bloc fa que en Bit canviï de casella?|¿Qué bloque hace que Bit cambie de casilla?"],
      slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
  ],
  errors: [
    ["Creu que «Gira a la dreta» mou en Bit una casella cap a la dreta.|Cree que «Gira a la derecha» mueve a Bit una casilla hacia la derecha.",
      "Demana-li que es posi dret i faci el gir sense caminar. On són els peus? Després, que ho comprovi amb un sol bloc a l'app.|Pídele que se ponga de pie y haga el giro sin caminar. ¿Dónde están los pies? Después, que lo compruebe con un solo bloque en la app."],
    ["Compta també la casella on ja és en Bit i posa un Endavant de més.|Cuenta también la casilla donde ya está Bit y pone un Adelante de más.",
      "Que posi el dit damunt d'en Bit i digui «un» només quan el dit salta a la casella següent.|Que ponga el dedo sobre Bit y diga «uno» solo cuando el dedo salta a la casilla siguiente."],
    ["Posa blocs a l'atzar fins que, per casualitat, funciona.|Pone bloques al azar hasta que, por casualidad, funciona.",
      "Pregunta-li cap on ha d'anar primer i quantes caselles. Que digui el camí en veu alta abans de posar cap bloc.|Pregúntale hacia dónde tiene que ir primero y cuántas casillas. Que diga el camino en voz alta antes de poner ningún bloque."],
    ["Quan en Bit xoca, ho esborra tot i torna a començar.|Cuando Bit choca, lo borra todo y vuelve a empezar.",
      "Pregunta: fins on ha anat bé? Que trobi l'últim bloc que ha funcionat i canviï només el que ve després.|Pregunta: ¿hasta dónde ha ido bien? Que encuentre el último bloque que ha funcionado y cambie solo lo que viene después."],
    ["S'equivoca de gir quan en Bit no mira cap a la dreta (es treballa a la sessió 2).|Se equivoca de giro cuando Bit no mira hacia la derecha (se trabaja en la sesión 2).",
      "No cal resoldre-ho del tot avui. Suggereix-li que giri el cap o el cos per mirar cap on mira en Bit.|No hace falta resolverlo del todo hoy. Sugiérele que gire la cabeza o el cuerpo para mirar hacia donde mira Bit."]
  ],
  diff: {
    mes: "Tornar a fer el camí de les 3 estrelles amb els mínims blocs possibles i comparar-lo amb el d'un company/a: qui n'ha fet servir menys i per què? Després, inventar una missió nova per a la quadrícula del terra.|Volver a hacer el camino de las 3 estrellas con los mínimos bloques posibles y compararlo con el de un compañero/a: ¿quién ha usado menos y por qué? Después, inventar una misión nueva para la cuadrícula del suelo.",
    menys: "Tenir les targetes d'ordres a la taula, al costat de l'ordinador: primer posa les targetes en fila i després les copia com a blocs. Començar pel repte de la recta comptant les caselles amb el dit.|Tener las tarjetas de órdenes en la mesa, al lado del ordenador: primero pone las tarjetas en fila y después las copia como bloques. Empezar por el reto de la recta contando las casillas con el dedo."
  },
  aval: {
    ticket: ["Digues un algorisme que facis cada dia i quin n'és el primer pas.|Di un algoritmo que hagas cada día y cuál es su primer paso.",
      "Quin bloc fa que en Bit canviï de casella? I què fan els altres dos?|¿Qué bloque hace que Bit cambie de casilla? ¿Y qué hacen los otros dos?"],
    rubric: [
      ["Concepte d'algorisme|Concepto de algoritmo", "El defineix com a instruccions en ordre i en dona un exemple propi.|Lo define como instrucciones en orden y da un ejemplo propio.", "Reconeix un algorisme en un exemple, però encara no l'explica amb les seves paraules.|Reconoce un algoritmo en un ejemplo, pero todavía no lo explica con sus palabras."],
      ["Girar i avançar|Girar y avanzar", "Sap que els girs no mouen en Bit i posa un Endavant després de cada gir quan cal.|Sabe que los giros no mueven a Bit y pone un Adelante después de cada giro cuando hace falta.", "De vegades espera que un gir mogui en Bit de casella.|A veces espera que un giro mueva a Bit de casilla."],
      ["Primer programa|Primer programa", "Resol els reptes de la recta i del revolt pensant el camí abans de posar blocs.|Resuelve los retos de la recta y de la curva pensando el camino antes de poner bloques.", "Resol la recta, però al revolt prova blocs fins que funciona.|Resuelve la recta, pero en la curva prueba bloques hasta que funciona."]
    ]
  },
  casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts l'activitat «Fes de robot»: una persona dona les ordres i l'altra les segueix fins a un lloc de casa.|En casa, con el móvil, podéis repetir la sesión y hacer juntos la actividad «Haz de robot»: una persona da las órdenes y la otra las sigue hasta un sitio de casa.",
  slides: [
    { id: 's1', k: 'portada', t: "Què és un algorisme?|¿Qué es un algoritmo?", x: "Avui aprendrem a donar ordres clares a en Bit, el robot de l'illa.|Hoy aprenderemos a dar órdenes claras a Bit, el robot de la isla.",
      nota: "Presenta l'objectiu: al final de la classe, tothom haurà escrit el seu primer programa.|Presenta el objetivo: al final de la clase, todos habrán escrito su primer programa." },
    { id: 's2', k: 'pregunta', t: "Un robot pensa sol?|¿Un robot piensa solo?", x: "Què necessita un robot per saber què ha de fer?|¿Qué necesita un robot para saber qué tiene que hacer?",
      nota: "Recull respostes sense corregir. Torna-hi al final de la classe: necessita instruccions clares i en ordre.|Recoge respuestas sin corregir. Vuelve a ello al final de la clase: necesita instrucciones claras y en orden." },
    { id: 's3', k: 'concepte', t: "Coneix en Bit|Conoce a Bit", punts: ["Viu en una illa plena de camins.|Vive en una isla llena de caminos.", "Fa exactament el que li dius: ni més ni menys.|Hace exactamente lo que le dices: ni más ni menos.", "Si l'ordre és equivocada… pam! Contra una roca.|Si la orden es equivocada… ¡pum! Contra una roca."],
      nota: "Explica que en Bit no endevina què volem: per això les ordres han de ser exactes.|Explica que Bit no adivina lo que queremos: por eso las órdenes tienen que ser exactas." },
    { id: 's4', k: 'anim', t: "Un algorisme és com una recepta|Un algoritmo es como una receta", anim: 'algo', x: "Una llista d'instruccions, en ordre, per aconseguir alguna cosa.|Una lista de instrucciones, en orden, para conseguir algo.",
      nota: "Fes notar que la recepta no és el pastís: la recepta són les instruccions i el pastís és el resultat.|Haz notar que la receta no es el pastel: la receta son las instrucciones y el pastel es el resultado." },
    { id: 's5', k: 'pregunta', t: "Algorismes de cada dia|Algoritmos de cada día", punts: ["Vestir-se al matí|Vestirse por la mañana", "Preparar un entrepà|Preparar un bocadillo", "Anar de casa a l'escola|Ir de casa al cole"],
      nota: "Tria'n un i construïu-lo entre tots a la pissarra, pas a pas. Pregunta si es pot saltar algun pas.|Elige uno y construidlo entre todos en la pizarra, paso a paso. Pregunta si se puede saltar algún paso." },
    { id: 's6', k: 'anim', t: "L'ordre importa|El orden importa", anim: 'order', x: "Si canvies l'ordre dels passos, el resultat canvia.|Si cambias el orden de los pasos, el resultado cambia.",
      nota: "Pregunta per altres exemples on l'ordre importi: primer obrir la porta i després passar.|Pregunta por otros ejemplos donde el orden importe: primero abrir la puerta y después pasar." },
    { id: 's7', k: 'concepte', t: "Les tres ordres d'en Bit|Las tres órdenes de Bit", punts: ["⬆ Endavant: avança una casella cap on mira|⬆ Adelante: avanza una casilla hacia donde mira", "↶ Gira a l'esquerra: es queda a la mateixa casella|↶ Gira a la izquierda: se queda en la misma casilla", "↷ Gira a la dreta: es queda a la mateixa casella|↷ Gira a la derecha: se queda en la misma casilla"],
      nota: "Ensenya les targetes de paper de cada ordre: són les mateixes que faran servir a la quadrícula.|Enseña las tarjetas de papel de cada orden: son las mismas que usarán en la cuadrícula." },
    { id: 's8', k: 'anim', t: "Girar no el mou|Girar no lo mueve", anim: 'turn', x: "Després d'un gir, gairebé sempre cal un Endavant.|Después de un giro, casi siempre hace falta un Adelante.",
      nota: "Tothom dret: gireu a la dreta sense caminar. Comproveu que els peus continuen al mateix lloc.|Todos de pie: girad a la derecha sin caminar. Comprobad que los pies siguen en el mismo sitio." },
    { id: 's9', k: 'demo', t: "Pensa abans d'executar|Piensa antes de ejecutar", x: "En Bit mira amunt. Programa: Gira a la dreta, Endavant, Endavant. On acabarà: A, B o C?|Bit mira arriba. Programa: Gira a la derecha, Adelante, Adelante. ¿Dónde terminará: A, B o C?",
      demo: { w: { map: ['..A..', '..#..', 'B#^#C', '.....'] }, prog: 'r f f' },
      nota: "Que tothom assenyali amb el dit abans d'executar. Resposta: C. Pregunta a qui ha dit B per què ho pensava.|Que todos señalen con el dedo antes de ejecutar. Respuesta: C. Pregunta a quien ha dicho B por qué lo pensaba." },
    { id: 's10', k: 'activitat', t: "Fes de robot|Haz de robot", timer: 12, punts: ["Programador/a: posa les targetes en fila.|Programador/a: pone las tarjetas en fila.", "Robot: fa les targetes una a una a la quadrícula.|Robot: hace las tarjetas una a una en la cuadrícula.", "Revisor/a: comprova cada pas.|Revisor/a: comprueba cada paso.", "Després de cada missió, canvieu els papers.|Después de cada misión, cambiad los papeles."],
      nota: "Recorda que el robot camina a poc a poc i que les roques són coixins o motxilles: ningú no ha de saltar.|Recuerda que el robot camina despacio y que las rocas son cojines o mochilas: nadie tiene que saltar." },
    { id: 's11', k: 'activitat', t: "Les regles del robot|Las reglas del robot", punts: ["Una targeta = un moviment.|Una tarjeta = un movimiento.", "El robot no fa res que no digui una targeta.|El robot no hace nada que no diga una tarjeta.", "Si xoca, no passa res: arreglem el programa.|Si choca, no pasa nada: arreglamos el programa."],
      nota: "Deixa aquesta diapositiva projectada mentre treballen a la quadrícula.|Deja esta diapositiva proyectada mientras trabajan en la cuadrícula." },
    { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Què és un algorisme?».|Abre la sesión «¿Qué es un algoritmo?».", "Fes la missió, «Descobreix» i «Mans a l'obra».|Haz la misión, «Descubre» y «Manos a la obra».", "A «Prediu i prova», pensa abans de triar.|En «Predice y prueba», piensa antes de elegir.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
      nota: "Al pas «Fes de robot», que toquin «Ho hem fet!»: ja l'hem fet a la quadrícula.|En el paso «Haz de robot», que toquen «¡Lo hemos hecho!»: ya lo hemos hecho en la cuadrícula." },
    { id: 's13', k: 'demo', t: "Programem junts|Programemos juntos", x: "Quins blocs portaran en Bit a la bandera? Digueu-ne un cadascú.|¿Qué bloques llevarán a Bit a la bandera? Decid uno cada uno.",
      demo: { w: { map: ['>##..', '..#..', '..##F'] }, prog: 'f f r f f l f f' },
      nota: "Escriu a la pissarra els blocs que proposen i executa la demo al final per comprovar-ho.|Escribe en la pizarra los bloques que proponen y ejecuta la demo al final para comprobarlo." },
    { id: 's14', k: 'repte', t: "Reptes: el teu primer programa|Retos: tu primer programa", timer: 10, punts: ["1. La recta|1. La recta", "2. El revolt|2. La curva", "3. Roques i aigua|3. Rocas y agua", "4. El programa que xoca: troba l'error|4. El programa que choca: encuentra el error"],
      nota: "Si algú s'encalla, pregunta: on és la primera casella on canvia de direcció?|Si alguien se atasca, pregunta: ¿dónde está la primera casilla en la que cambia de dirección?" },
    { id: 's15', k: 'activitat', t: "Crea: el meu primer camí|Crea: mi primer camino", timer: 5, x: "Porta en Bit a la bandera passant per les 3 estrelles. Després, el company/a endevina el camí abans d'executar-lo.|Lleva a Bit a la bandera pasando por las 3 estrellas. Después, el compañero/a adivina el camino antes de ejecutarlo.",
      nota: "Celebra que hi hagi camins diferents: hi ha molts algorismes que resolen el mateix problema.|Celebra que haya caminos diferentes: hay muchos algoritmos que resuelven el mismo problema." },
    { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un algorisme són instruccions en ordre.|Un algoritmo son instrucciones en orden.", "Un programa és un algorisme per a una màquina.|Un programa es un algoritmo para una máquina.", "Endavant mou; els girs només canvien cap on mira.|Adelante mueve; los giros solo cambian hacia dónde mira."],
      nota: "Torna a la pregunta del principi: un robot pensa sol? Ara saben que necessita un programa.|Vuelve a la pregunta del principio: ¿un robot piensa solo? Ahora saben que necesita un programa." },
    { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Digues un algorisme de cada dia i el primer pas.|Di un algoritmo de cada día y su primer paso.", "Quin bloc fa que en Bit canviï de casella?|¿Qué bloque hace que Bit cambie de casilla?"],
      nota: "Fes una pregunta a cada alumne/a a la porta i anota qui necessita més suport la setmana vinent.|Haz una pregunta a cada alumno/a en la puerta y anota quién necesita más apoyo la semana que viene." }
  ],
  print: [
    { id: 'p1', t: "Targetes d'ordres|Tarjetas de órdenes", k: 'targetes',
      intro: "Un paquet per grup de 3. Retalleu-les i, si podeu, plastifiqueu-les: les farem servir durant tota la unitat.|Un paquete por grupo de 3. Recortadlas y, si podéis, plastificadlas: las usaremos durante toda la unidad.",
      items: [
        { t: "Endavant ⬆|Adelante ⬆", n: 10 },
        { t: "Gira a l'esquerra ↶|Gira a la izquierda ↶", n: 4 },
        { t: "Gira a la dreta ↷|Gira a la derecha ↷", n: 4 },
        { t: "Inici 🤖|Inicio 🤖", n: 1 },
        { t: "Bandera 🚩|Bandera 🚩", n: 1 }
      ] },
    { id: 'p2', t: "Quadrícula del terra: missions d'en Bit|Cuadrícula del suelo: misiones de Bit", k: 'quadricula',
      intro: "Marqueu una quadrícula de 5 × 5 al terra amb cinta (o imprimiu-la en A3 per a la taula). Cada missió diu on va en Bit, cap on mira, on és la bandera i on són les roques.|Marcad una cuadrícula de 5 × 5 en el suelo con cinta (o imprimidla en A3 para la mesa). Cada misión dice dónde va Bit, hacia dónde mira, dónde está la bandera y dónde están las rocas.",
      items: [
        { t: "Missió 1: la recta|Misión 1: la recta", w: 5, h: 5, cells: ['.....', '.....', '>...F', '.....', '.....'],
          instructions: "En Bit mira cap a la bandera. Quantes targetes Endavant calen?|Bit mira hacia la bandera. ¿Cuántas tarjetas Adelante hacen falta?", sol: 'f f f f' },
        { t: "Missió 2: la cantonada|Misión 2: la esquina", w: 5, h: 5, cells: ['....F', '.....', '.....', '.....', '>....'],
          instructions: "En Bit ha d'arribar a la cantonada del davant. Recordeu: després de girar, cal avançar.|Bit tiene que llegar a la esquina de enfrente. Recordad: después de girar, hay que avanzar.", sol: 'f f f f l f f f f' },
        { t: "Missió 3: les roques|Misión 3: las rocas", w: 5, h: 5, cells: ['..R.F', '..R..', '.....', '.R...', '>R...'],
          instructions: "Les roques són motxilles o coixins: el robot no hi pot passar. Hi ha més d'un camí bo; aquí en teniu un.|Las rocas son mochilas o cojines: el robot no puede pasar. Hay más de un camino bueno; aquí tenéis uno.", sol: 'l f f r f f f l f f r f' }
      ] }
  ]
};

/* ---------- Sessió 2 · La dreta i l'esquerra d'en Bit ---------- */
TGUIDE['r1-2'] = {
  obj: [
    "L'alumne/a diu cap on mira en Bit després d'un o més girs, comenci on comenci.|El alumno/a dice hacia dónde mira Bit después de uno o más giros, empiece donde empiece.",
    "L'alumne/a explica que la dreta i l'esquerra depenen de cap on mira cadascú.|El alumno/a explica que la derecha y la izquierda dependen de hacia dónde mira cada uno.",
    "L'alumne/a fa servir l'estratègia de posar-se al lloc d'en Bit per triar cada gir.|El alumno/a usa la estrategia de ponerse en el lugar de Bit para elegir cada giro.",
    "L'alumne/a programa camins amb girs quan en Bit comença mirant avall o a l'esquerra.|El alumno/a programa caminos con giros cuando Bit empieza mirando abajo o a la izquierda."
  ],
  comp: [
    "Competència digital (CD5): resoldre problemes senzills amb programació per blocs|Competencia digital (CD5): resolver problemas sencillos con programación por bloques",
    "Pensament computacional: seqüències amb girs i simulació mental d'un programa|Pensamiento computacional: secuencias con giros y simulación mental de un programa",
    "Matemàtiques (sentit espacial): dreta i esquerra relatives, quart de volta, mitja volta i volta sencera|Matemáticas (sentido espacial): derecha e izquierda relativas, cuarto de vuelta, media vuelta y vuelta entera",
    "Educació física: lateralitat i orientació del propi cos|Educación física: lateralidad y orientación del propio cuerpo"
  ],
  vocab: [
    ["Dreta i esquerra|Derecha e izquierda", "Depenen de cap on mira cadascú: la meva dreta pot ser la teva esquerra.|Dependen de hacia dónde mira cada uno: mi derecha puede ser tu izquierda."],
    ["Quart de volta|Cuarto de vuelta", "El que gira en Bit amb un sol bloc de gir.|Lo que gira Bit con un solo bloque de giro."],
    ["Mitja volta|Media vuelta", "Dos girs iguals: en Bit acaba mirant al revés.|Dos giros iguales: Bit acaba mirando al revés."],
    ["Volta sencera|Vuelta entera", "Quatre girs iguals: en Bit torna a mirar on mirava.|Cuatro giros iguales: Bit vuelve a mirar donde miraba."],
    ["Punt de vista|Punto de vista", "Com veu les coses cadascú des del lloc on és.|Cómo ve las cosas cada uno desde el sitio donde está."]
  ],
  mat: {
    aula: [
      "Un ordinador per alumne/a amb Numi Tech obert a la sessió «La dreta i l'esquerra d'en Bit»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «La derecha y la izquierda de Bit»",
      "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
      "La quadrícula del terra i les targetes d'ordres de la sessió 1|La cuadrícula del suelo y las tarjetas de órdenes de la sesión 1",
      "Gomets o polseres d'un color per marcar la mà dreta (opcional)|Pegatinas o pulseras de un color para marcar la mano derecha (opcional)"
    ],
    imprimir: ["Fitxa: cap on mira en Bit?|Ficha: ¿hacia dónde mira Bit?", "Quadrícula del terra: en Bit ve cap a tu|Cuadrícula del suelo: Bit viene hacia ti"],
    prep: [
      "Comprovar que la quadrícula del terra continua ben marcada i que hi ha prou targetes de gir.|Comprobar que la cuadrícula del suelo sigue bien marcada y que hay suficientes tarjetas de giro.",
      "Imprimir una fitxa per alumne/a (per als qui acabin abans o per fer a casa).|Imprimir una ficha por alumno/a (para quien termine antes o para hacer en casa).",
      "Preparar gomets per als alumnes que encara dubten amb la seva dreta, sense assenyalar ningú: n'oferirem a tothom.|Preparar pegatinas para los alumnos que todavía dudan con su derecha, sin señalar a nadie: los ofreceremos a todos.",
      "Provar les demostracions de les diapositives 9 i 13 per conèixer les respostes.|Probar las demostraciones de las diapositivas 9 y 13 para conocer las respuestas."
    ]
  },
  plan: [
    { min: 5, t: "Recordem i la missió del diari|Recordamos y la misión del periódico", fase: 'inici',
      fa: "Fes la pregunta de repàs sobre el bloc Gira a la dreta i demana que la responguin amb el cos. Explica la missió: en Bit reparteix el diari pel poble i, quan ve cap a nosaltres, la seva dreta és la nostra esquerra.|Haz la pregunta de repaso sobre el bloque Gira a la derecha y pide que la respondan con el cuerpo. Explica la misión: Bit reparte el periódico por el pueblo y, cuando viene hacia nosotros, su derecha es nuestra izquierda.",
      diu: ["Què feia el bloc Gira a la dreta? Ensenyeu-m'ho amb el cos.|¿Qué hacía el bloque Gira a la derecha? Enseñádmelo con el cuerpo.",
        "Avui en Bit no sempre mirarà cap a la dreta. Ho complicarem una mica!|Hoy Bit no siempre mirará hacia la derecha. ¡Lo complicaremos un poco!"],
      slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
    { min: 6, t: "El mirall|El espejo", fase: 'desconnectat',
      fa: "Per parelles, cara a cara, tots dos aixequen la mà dreta i observen que queden a costats diferents. Després es posen l'un darrere l'altre, mirant cap al mateix lloc, i ho repeteixen. Recull la conclusió en veu alta.|Por parejas, cara a cara, los dos levantan la mano derecha y observan que quedan en lados diferentes. Después se ponen uno detrás del otro, mirando hacia el mismo sitio, y lo repiten. Recoge la conclusión en voz alta.",
      diu: ["Aixequeu la mà dreta. Les vostres mans són al mateix costat?|Levantad la mano derecha. ¿Vuestras manos están en el mismo lado?",
        "I ara, l'un darrere l'altre? Què ha canviat?|¿Y ahora, uno detrás del otro? ¿Qué ha cambiado?",
        "Llavors, la dreta de qui és la que compta quan programem en Bit?|Entonces, ¿la derecha de quién es la que cuenta cuando programamos a Bit?"],
      slides: ['s4', 's5'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles|Por parejas" },
    { min: 9, t: "Girs, voltes i el truc del programador|Giros, vueltas y el truco del programador", fase: 'teoria',
      fa: "Mostra l'animació del mirall i les demostracions de la volta sencera i la mitja volta, fent que la classe compti els girs amb els braços. A la demostració d'en Bit mirant avall, tothom ha de dir on acabarà abans d'executar-la. Tanca amb el truc: posar-se al lloc d'en Bit.|Muestra la animación del espejo y las demostraciones de la vuelta entera y la media vuelta, haciendo que la clase cuente los giros con los brazos. En la demostración de Bit mirando abajo, todos tienen que decir dónde terminará antes de ejecutarla. Cierra con el truco: ponerse en el lugar de Bit.",
      diu: ["Quants girs calen per tornar a mirar al mateix lloc?|¿Cuántos giros hacen falta para volver a mirar al mismo sitio?",
        "En Bit mira cap a nosaltres i gira a la seva dreta. Cap a quin costat de la pantalla anirà?|Bit mira hacia nosotros y gira a su derecha. ¿Hacia qué lado de la pantalla irá?",
        "Gireu-vos d'esquena a la pantalla, com en Bit. On teniu ara la mà dreta?|Giraos de espaldas a la pantalla, como Bit. ¿Dónde tenéis ahora la mano derecha?"],
      slides: ['s6', 's7', 's8', 's9', 's10'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
    { min: 10, t: "El robot que ve cap a tu|El robot que viene hacia ti", fase: 'desconnectat',
      fa: "A la quadrícula del terra, el robot comença mirant cap a la classe. Grups de 3 amb els papers de la sessió 1: abans de posar una targeta de gir, el programador/a es col·loca darrere el robot, mirant cap on mira ell. Feu les missions del full de la quadrícula i roteu els papers.|En la cuadrícula del suelo, el robot empieza mirando hacia la clase. Grupos de 3 con los papeles de la sesión 1: antes de poner una tarjeta de giro, el programador/a se coloca detrás del robot, mirando hacia donde mira él. Haced las misiones de la hoja de la cuadrícula y rotad los papeles.",
      diu: ["Abans de triar el gir, poseu-vos darrere el robot.|Antes de elegir el giro, poneos detrás del robot.",
        "El robot ha anat cap on volíeu? Si no, quina targeta canviaríeu?|¿El robot ha ido hacia donde queríais? Si no, ¿qué tarjeta cambiaríais?",
        "Qui pot explicar per què ha girat cap a aquest costat?|¿Quién puede explicar por qué ha girado hacia ese lado?"],
      slides: ['s11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
    { min: 14, t: "A l'ordinador: prediu i prova|En el ordenador: predice y prueba", fase: 'ordinador',
      fa: "Cada alumne/a fa la sessió fins a la pausa activa. A mig bloc, atura la classe un minut amb la diapositiva 13: tothom pensa on acabarà en Bit mirant a l'esquerra i després ho executes. Acompanya qui s'equivoca als girs amb la pregunta «cap on mira ara?».|Cada alumno/a hace la sesión hasta la pausa activa. A mitad de bloque, para la clase un minuto con la diapositiva 13: todos piensan dónde terminará Bit mirando a la izquierda y después lo ejecutas. Acompaña a quien se equivoca en los giros con la pregunta «¿hacia dónde mira ahora?».",
      diu: ["Cap on mira en Bit ara mateix? Comença per aquí.|¿Hacia dónde mira Bit ahora mismo? Empieza por aquí.",
        "Pots girar el cap o la pantalla: no és fer trampa, és el que fan els programadors de robots.|Puedes girar la cabeza o la pantalla: no es hacer trampa, es lo que hacen los programadores de robots.",
        "Al pas «El mirall», toqueu «Ho hem fet!»: ja l'hem fet.|En el paso «El espejo», tocad «¡Lo hemos hecho!»: ya lo hemos hecho."],
      slides: ['s12', 's13'], app: "Pregunta de «Recorda», història del diari, targetes de «Descobreix», «El mirall» (ja fet), el truc del programador, la pregunta d'en Bit mirant avall, moure'l amb els botons, els dos «On acabarà?» i «Investiga» (tocar el gir que el porta a la bandera).|Pregunta de «Recuerda», historia del periódico, tarjetas de «Descubre», «El espejo» (ya hecho), el truco del programador, la pregunta de Bit mirando abajo, moverlo con los botones, los dos «¿Dónde terminará?» e «Investiga» (tocar el giro que lo lleva a la bandera).", org: "Individual|Individual" },
    { min: 9, t: "Reptes del diari|Retos del periódico", fase: 'ordinador',
      fa: "Pausa activa de quatre girs tots junts. Programeu entre tots el zig-zag de la diapositiva 14, demanant per a cada gir que algú expliqui cap on mira en Bit. Després, els tres reptes de l'app.|Pausa activa de cuatro giros todos juntos. Programad entre todos el zigzag de la diapositiva 14, pidiendo para cada giro que alguien explique hacia dónde mira Bit. Después, los tres retos de la app.",
      diu: ["En Bit baixa i ha d'anar cap a la dreta de la pantalla. És la seva dreta o la seva esquerra?|Bit baja y tiene que ir hacia la derecha de la pantalla. ¿Es su derecha o su izquierda?",
        "Al camí en U, cap on mira en Bit quan acaba de baixar?|En el camino en U, ¿hacia dónde mira Bit cuando acaba de bajar?"],
      slides: ['s14', 's15'], app: "«Pausa activa» i els tres reptes: en Bit comença mirant avall, el camí en U i el camí de l'aigua.|«Pausa activa» y los tres retos: Bit empieza mirando abajo, el camino en U y el camino del agua.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
    { min: 4, t: "Crea: el repartidor de diaris|Crea: el repartidor de periódicos", fase: 'crea',
      fa: "Cada alumne/a reparteix el diari a les tres estrelles amb el seu propi camí. Qui acabi, ensenya el programa a un company/a i li demana que endevini el primer gir.|Cada alumno/a reparte el periódico en las tres estrellas con su propio camino. Quien termine, enseña el programa a un compañero/a y le pide que adivine el primer giro.",
      diu: ["Quina estrella vas a buscar primer? Per què?|¿Qué estrella vas a buscar primero? ¿Por qué?",
        "Abans de cada gir, posa't al lloc d'en Bit.|Antes de cada giro, ponte en el lugar de Bit."],
      slides: ['s16'], app: "Pas «Crea»: El repartidor de diaris.|Paso «Crea»: El repartidor de periódicos.", org: "Individual i després per parelles|Individual y después por parejas" },
    { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
      fa: "Repassa el truc de la sessió amb el resum i deixa que responguin les preguntes finals de l'app. Fes el tiquet de sortida a la porta.|Repasa el truco de la sesión con el resumen y deja que respondan las preguntas finales de la app. Haz el ticket de salida en la puerta.",
      diu: ["Quin és el millor truc per no equivocar-se amb els girs?|¿Cuál es el mejor truco para no equivocarse con los giros?",
        "Quants girs fan mitja volta?|¿Cuántos giros hacen media vuelta?"],
      slides: ['s17', 's18'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
  ],
  errors: [
    ["Fa servir la seva dreta (la de la pantalla) en lloc de la d'en Bit quan en Bit mira avall.|Usa su derecha (la de la pantalla) en lugar de la de Bit cuando Bit mira abajo.",
      "Pregunta-li cap on mira en Bit i demana-li que giri el cos o el cap fins a mirar igual. Després: on tens ara la mà dreta?|Pregúntale hacia dónde mira Bit y pídele que gire el cuerpo o la cabeza hasta mirar igual. Después: ¿dónde tienes ahora la mano derecha?"],
    ["Després de dos girs, creu que en Bit mira on mirava al principi.|Después de dos giros, cree que Bit mira donde miraba al principio.",
      "Que faci els dos girs dret, comptant en veu alta «un quart, dos quarts». Cap on mira ara?|Que haga los dos giros de pie, contando en voz alta «un cuarto, dos cuartos». ¿Hacia dónde mira ahora?"],
    ["Perd el compte de cap on mira en Bit al mig d'un programa llarg.|Pierde la cuenta de hacia dónde mira Bit en medio de un programa largo.",
      "Suggereix-li que dibuixi una fletxa petita en un paper després de cada gir, o que provi el programa a trossos.|Sugiérele que dibuje una flecha pequeña en un papel después de cada giro, o que pruebe el programa a trozos."],
    ["Dubta amb la seva pròpia dreta i esquerra.|Duda con su propia derecha e izquierda.",
      "Ofereix-li un gomet a la mà dreta (n'hem ofert a tothom). És una ajuda normal, com una regla per dibuixar línies.|Ofrécele una pegatina en la mano derecha (se la hemos ofrecido a todos). Es una ayuda normal, como una regla para dibujar líneas."],
    ["Al camí en U posa el segon gir al revés perquè en Bit ja ha canviat de direcció.|En el camino en U pone el segundo giro al revés porque Bit ya ha cambiado de dirección.",
      "Que executi només fins al primer gir i miri cap on queda en Bit. A partir d'aquí, que torni a posar-se al seu lloc.|Que ejecute solo hasta el primer giro y mire hacia dónde queda Bit. A partir de ahí, que vuelva a ponerse en su lugar."]
  ],
  diff: {
    mes: "Fer la fitxa «Cap on mira en Bit?» sense mirar la pantalla i, després, inventar una missió per a la quadrícula del terra en què el robot comenci mirant cap a la classe i calgui fer almenys tres girs.|Hacer la ficha «¿Hacia dónde mira Bit?» sin mirar la pantalla y, después, inventar una misión para la cuadrícula del suelo en la que el robot empiece mirando hacia la clase y haya que hacer al menos tres giros.",
    menys: "Treballar al costat d'una figureta o d'un robot de paper que pugui girar sobre la taula: abans de posar cada gir a l'app, el gira amb la mà en la mateixa direcció que en Bit. Començar pels reptes en què en Bit mira a la dreta.|Trabajar al lado de una figurita o de un robot de papel que pueda girar sobre la mesa: antes de poner cada giro en la app, lo gira con la mano en la misma dirección que Bit. Empezar por los retos en los que Bit mira a la derecha."
  },
  aval: {
    ticket: ["En Bit mira avall i gira a la seva dreta. Cap on va a la pantalla?|Bit mira abajo y gira a su derecha. ¿Hacia dónde va en la pantalla?",
      "Quants girs iguals fan mitja volta? I una volta sencera?|¿Cuántos giros iguales hacen media vuelta? ¿Y una vuelta entera?"],
    rubric: [
      ["Orientació després de girs|Orientación después de giros", "Diu cap on mira en Bit després d'un, dos o quatre girs, comenci on comenci.|Dice hacia dónde mira Bit después de uno, dos o cuatro giros, empiece donde empiece.", "Ho encerta quan en Bit mira a la dreta o amunt, però dubta quan mira avall o a l'esquerra.|Lo acierta cuando Bit mira a la derecha o arriba, pero duda cuando mira abajo o a la izquierda."],
      ["Estratègia del punt de vista|Estrategia del punto de vista", "Es posa al lloc d'en Bit (gira el cap, el cos o la pantalla) abans de decidir un gir.|Se pone en el lugar de Bit (gira la cabeza, el cuerpo o la pantalla) antes de decidir un giro.", "Fa servir l'estratègia quan l'hi recorden.|Usa la estrategia cuando se lo recuerdan."],
      ["Programes amb girs|Programas con giros", "Resol els reptes del diari i el camí en U amb pocs intents.|Resuelve los retos del periódico y el camino en U con pocos intentos.", "Resol els reptes amb ajuda o provant girs fins que surten.|Resuelve los retos con ayuda o probando giros hasta que salen."]
    ]
  },
  casa: "A casa, amb el mòbil, podeu fer junts «El mirall»: cara a cara, aixequeu la mà dreta i mireu què passa. Després, repetiu els reptes del diari de l'app.|En casa, con el móvil, podéis hacer juntos «El espejo»: cara a cara, levantad la mano derecha y mirad qué pasa. Después, repetid los retos del periódico de la app.",
  slides: [
    { id: 's1', k: 'portada', t: "La dreta i l'esquerra d'en Bit|La derecha y la izquierda de Bit", x: "Avui aprendrem a girar com en Bit, miri cap on miri.|Hoy aprenderemos a girar como Bit, mire hacia donde mire.",
      nota: "Objectiu: decidir bé cada gir encara que en Bit no miri cap a la dreta.|Objetivo: decidir bien cada giro aunque Bit no mire hacia la derecha." },
    { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Què fa el bloc Gira a la dreta? En Bit canvia de casella?|¿Qué hace el bloque Gira a la derecha? ¿Bit cambia de casilla?",
      nota: "Resposta: es gira cap a la seva dreta i es queda a la mateixa casella. Que ho facin drets.|Respuesta: se gira hacia su derecha y se queda en la misma casilla. Que lo hagan de pie." },
    { id: 's3', k: 'concepte', t: "La missió: el diari del poble|La misión: el periódico del pueblo", x: "En Bit reparteix el diari. Compte: quan ve cap a tu, la seva dreta és la teva esquerra!|Bit reparte el periódico. Cuidado: cuando viene hacia ti, ¡su derecha es tu izquierda!",
      nota: "Pregunta si això els ha passat mai amb algú que els donava indicacions.|Pregunta si eso les ha pasado alguna vez con alguien que les daba indicaciones." },
    { id: 's4', k: 'pregunta', t: "La dreta de qui?|¿La derecha de quién?", x: "Si algú et mira de cara i aixeca la mà dreta, a quin costat la veus tu?|Si alguien te mira de cara y levanta la mano derecha, ¿en qué lado la ves tú?",
      nota: "Deixa que facin hipòtesis; ho comprovaran tot seguit amb el mirall.|Deja que hagan hipótesis; lo comprobarán enseguida con el espejo." },
    { id: 's5', k: 'activitat', t: "El mirall|El espejo", timer: 5, punts: ["Cara a cara: tots dos aixequeu la mà dreta.|Cara a cara: los dos levantad la mano derecha.", "Les mans queden al mateix costat?|¿Las manos quedan en el mismo lado?", "Ara l'un darrere l'altre: torneu-ho a fer.|Ahora uno detrás del otro: volved a hacerlo."],
      nota: "Conclusió que han de dir ells: per saber cap on gira algú, cal posar-se al seu lloc.|Conclusión que tienen que decir ellos: para saber hacia dónde gira alguien, hay que ponerse en su lugar." },
    { id: 's6', k: 'anim', t: "Depèn de cap on mires|Depende de hacia dónde miras", anim: 'mirror', x: "Tots dos aixequen la mà dreta… i a la pantalla queden a costats diferents.|Los dos levantan la mano derecha… y en la pantalla quedan en lados diferentes.",
      nota: "Relaciona l'animació amb el que acaben de fer per parelles.|Relaciona la animación con lo que acaban de hacer por parejas." },
    { id: 's7', k: 'demo', t: "Quatre girs: una volta sencera|Cuatro giros: una vuelta entera", x: "Cada gir és un quart de volta. Compteu amb mi!|Cada giro es un cuarto de vuelta. ¡Contad conmigo!",
      demo: { w: { map: ['...', '.^.', '...'] }, prog: 'r r r r' },
      nota: "Que la classe faci els girs amb el cos alhora que en Bit. Al final, tothom mira on mirava.|Que la clase haga los giros con el cuerpo a la vez que Bit. Al final, todos miran donde miraban." },
    { id: 's8', k: 'demo', t: "Dos girs: mitja volta|Dos giros: media vuelta", x: "En Bit mira amunt, gira dues vegades i avança. Cap on anirà?|Bit mira arriba, gira dos veces y avanza. ¿Hacia dónde irá?",
      demo: { w: { map: ['.....', '..^..', '..#..', '..F..'] }, prog: 'r r f f' },
      nota: "Resposta: avall, fins a la bandera. Dos girs iguals el deixen mirant al revés.|Respuesta: abajo, hasta la bandera. Dos giros iguales lo dejan mirando al revés." },
    { id: 's9', k: 'demo', t: "En Bit mira cap a nosaltres|Bit mira hacia nosotros", x: "Endavant, Endavant, Gira a la dreta, Endavant, Endavant. On acabarà: A o B?|Adelante, Adelante, Gira a la derecha, Adelante, Adelante. ¿Dónde terminará: A o B?",
      demo: { w: { map: ['..v..', '..#..', 'A###B', '.....'] }, prog: 'f f r f f' },
      nota: "Resposta: A, a l'esquerra de la pantalla. Molts diran B: és normal i és el moment de fer el truc.|Respuesta: A, a la izquierda de la pantalla. Muchos dirán B: es normal y es el momento de hacer el truco." },
    { id: 's10', k: 'concepte', t: "El truc: posa't al seu lloc|El truco: ponte en su lugar", punts: ["Mira cap on mira en Bit.|Mira hacia donde mira Bit.", "Pensa on tens la mà dreta.|Piensa dónde tienes la mano derecha.", "Pots girar el cap o la pantalla: no és trampa!|Puedes girar la cabeza o la pantalla: ¡no es trampa!"],
      nota: "Fes que tothom es giri d'esquena a la pantalla per comprovar el resultat de la demostració anterior.|Haz que todos se giren de espaldas a la pantalla para comprobar el resultado de la demostración anterior." },
    { id: 's11', k: 'activitat', t: "El robot que ve cap a tu|El robot que viene hacia ti", timer: 10, punts: ["El robot comença mirant cap a la classe.|El robot empieza mirando hacia la clase.", "Abans de cada gir, el programador/a es posa darrere el robot.|Antes de cada giro, el programador/a se pone detrás del robot.", "Ha anat cap on volíeu? Si no, canvieu una targeta.|¿Ha ido hacia donde queríais? Si no, cambiad una tarjeta."],
      nota: "Recorda caminar a poc a poc. Qui no vulgui o no pugui caminar pot fer de programador/a o revisor/a.|Recuerda caminar despacio. Quien no quiera o no pueda caminar puede hacer de programador/a o revisor/a." },
    { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 14, punts: ["Obre la sessió «La dreta i l'esquerra d'en Bit».|Abre la sesión «La derecha y la izquierda de Bit».", "A «Prediu i prova», posa't al lloc d'en Bit abans de triar.|En «Predice y prueba», ponte en el lugar de Bit antes de elegir.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
      nota: "Al pas «El mirall», que toquin «Ho hem fet!».|En el paso «El espejo», que toquen «¡Lo hemos hecho!»." },
    { id: 's13', k: 'demo', t: "Aturada: i si mira a l'esquerra?|Parada: ¿y si mira a la izquierda?", x: "Endavant, Gira a la dreta, Endavant, Endavant. On acabarà: A, B o C?|Adelante, Gira a la derecha, Adelante, Adelante. ¿Dónde terminará: A, B o C?",
      demo: { w: { map: ['..A..', '..#..', 'B##<.', '..#..', '..C..'] }, prog: 'f r f f' },
      nota: "Resposta: A. En Bit mira a l'esquerra; la seva dreta és amunt a la pantalla.|Respuesta: A. Bit mira a la izquierda; su derecha es arriba en la pantalla." },
    { id: 's14', k: 'demo', t: "Programem junts: el zig-zag|Programemos juntos: el zigzag", x: "En Bit comença mirant avall. Quin gir cal a cada revolt?|Bit empieza mirando abajo. ¿Qué giro hace falta en cada curva?",
      demo: { w: { map: ['v....', '#....', '###..', '..#..', '..#F.'] }, prog: 'f f l f f r f f l f' },
      nota: "Solució: Endavant ×2, Gira a l'esquerra, Endavant ×2, Gira a la dreta, Endavant ×2, Gira a l'esquerra, Endavant. Demana que justifiquin cada gir.|Solución: Adelante ×2, Gira a la izquierda, Adelante ×2, Gira a la derecha, Adelante ×2, Gira a la izquierda, Adelante. Pide que justifiquen cada giro." },
    { id: 's15', k: 'repte', t: "Reptes del diari|Retos del periódico", timer: 9, punts: ["1. En Bit comença mirant avall|1. Bit empieza mirando abajo", "2. El camí en U|2. El camino en U", "3. El camí de l'aigua|3. El camino del agua"],
      nota: "Qui acabi pot fer la fitxa «Cap on mira en Bit?».|Quien termine puede hacer la ficha «¿Hacia dónde mira Bit?»." },
    { id: 's16', k: 'activitat', t: "Crea: el repartidor de diaris|Crea: el repartidor de periódicos", timer: 4, x: "Porta el diari a les 3 estrelles i acaba a la bandera. En Bit comença mirant avall.|Lleva el periódico a las 3 estrellas y termina en la bandera. Bit empieza mirando abajo.",
      nota: "Cada alumne/a tria el seu ordre d'estrelles: no hi ha un sol camí bo.|Cada alumno/a elige su orden de estrellas: no hay un solo camino bueno." },
    { id: 's17', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["La dreta i l'esquerra depenen de cap on mira cadascú.|La derecha y la izquierda dependen de hacia dónde mira cada uno.", "Dos girs iguals fan mitja volta; quatre, una volta sencera.|Dos giros iguales hacen media vuelta; cuatro, una vuelta entera.", "Per programar un robot, posa't al seu lloc.|Para programar un robot, ponte en su lugar."],
      nota: "Pregunta qui ha fet servir el truc avui i en quin repte.|Pregunta quién ha usado el truco hoy y en qué reto." },
    { id: 's18', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["En Bit mira avall i gira a la seva dreta. Cap on va a la pantalla?|Bit mira abajo y gira a su derecha. ¿Hacia dónde va en la pantalla?", "Quants girs fan mitja volta?|¿Cuántos giros hacen media vuelta?"],
      nota: "Respostes: cap a l'esquerra de la pantalla; dos girs iguals.|Respuestas: hacia la izquierda de la pantalla; dos giros iguales." }
  ],
  print: [
    { id: 'p1', t: "Fitxa: cap on mira en Bit?|Ficha: ¿hacia dónde mira Bit?", k: 'fitxa',
      intro: "Llegeix cada programa i dibuixa la fletxa de cap on mira en Bit al final. Si vols, gira el full o posa't dret per fer els girs.|Lee cada programa y dibuja la flecha de hacia dónde mira Bit al final. Si quieres, gira la hoja o ponte de pie para hacer los giros.",
      items: [
        { q: "En Bit mira amunt ↑. Fa: Gira a la dreta. Cap on mira?|Bit mira arriba ↑. Hace: Gira a la derecha. ¿Hacia dónde mira?", sol: "→ Dreta|→ Derecha" },
        { q: "En Bit mira a la dreta →. Fa: Gira a l'esquerra. Cap on mira?|Bit mira a la derecha →. Hace: Gira a la izquierda. ¿Hacia dónde mira?", sol: "↑ Amunt|↑ Arriba" },
        { q: "En Bit mira avall ↓. Fa: Gira a la dreta. Cap on mira, a la pantalla?|Bit mira abajo ↓. Hace: Gira a la derecha. ¿Hacia dónde mira, en la pantalla?", sol: "← Esquerra de la pantalla|← Izquierda de la pantalla" },
        { q: "En Bit mira a l'esquerra ←. Fa: Gira a la dreta, Gira a la dreta. Cap on mira?|Bit mira a la izquierda ←. Hace: Gira a la derecha, Gira a la derecha. ¿Hacia dónde mira?", sol: "→ Dreta: és mitja volta.|→ Derecha: es media vuelta." },
        { q: "En Bit mira amunt ↑. Fa quatre vegades Gira a l'esquerra. Cap on mira?|Bit mira arriba ↑. Hace cuatro veces Gira a la izquierda. ¿Hacia dónde mira?", sol: "↑ Amunt: és una volta sencera.|↑ Arriba: es una vuelta entera." },
        { q: "En Bit mira avall. Programa: Gira a l'esquerra, Endavant, Endavant. On acabarà: A, B o C?|Bit mira abajo. Programa: Gira a la izquierda, Adelante, Adelante. ¿Dónde terminará: A, B o C?",
          w: { map: ['..C..', '..#..', 'A#v#B', '.....'] }, prog: 'l f f', a: 'B', sol: "B. En Bit mira avall: la seva esquerra és la dreta de la pantalla.|B. Bit mira abajo: su izquierda es la derecha de la pantalla." },
        { q: "Escriu el programa que porta en Bit a la bandera. Compte: comença mirant avall!|Escribe el programa que lleva a Bit a la bandera. Cuidado: ¡empieza mirando abajo!",
          w: { map: ['v..', '#..', '##F'] }, solProg: 'f f l f f', sol: "Endavant, Endavant, Gira a l'esquerra, Endavant, Endavant.|Adelante, Adelante, Gira a la izquierda, Adelante, Adelante." }
      ] },
    { id: 'p2', t: "Quadrícula del terra: en Bit ve cap a tu|Cuadrícula del suelo: Bit viene hacia ti", k: 'quadricula',
      intro: "Feu servir la quadrícula de 5 × 5 de la sessió 1. La fila de dalt del dibuix és la que queda més lluny de la classe; així, un robot que mira avall mira cap a vosaltres.|Usad la cuadrícula de 5 × 5 de la sesión 1. La fila de arriba del dibujo es la que queda más lejos de la clase; así, un robot que mira abajo mira hacia vosotros.",
      items: [
        { t: "Missió 1: cap a tu|Misión 1: hacia ti", w: 5, h: 5, cells: ['..v..', '.....', '.....', '.....', 'F....'],
          instructions: "El robot comença mirant cap a la classe. Per anar cap a la bandera, a quin costat ha de girar ell?|El robot empieza mirando hacia la clase. Para ir hacia la bandera, ¿hacia qué lado tiene que girar él?", sol: 'f f f f r f f' },
        { t: "Missió 2: la U|Misión 2: la U", w: 5, h: 5, cells: ['F...v', '.R...', '.R...', '.RRR.', '.....'],
          instructions: "Envolteu les roques fent una U. Hi ha dos girs: comproveu cap on mira el robot abans de cadascun.|Rodead las rocas haciendo una U. Hay dos giros: comprobad hacia dónde mira el robot antes de cada uno.", sol: 'f f f f r f f f f r f f f f' },
        { t: "Missió 3: mirant a l'esquerra|Misión 3: mirando a la izquierda", w: 5, h: 5, cells: ['.....', '.R...', 'F.R.<', '.....', '.....'],
          instructions: "El robot mira a l'esquerra i té una roca a prop. Programeu un camí per sota de la roca. Hi ha més d'una solució.|El robot mira a la izquierda y tiene una roca cerca. Programad un camino por debajo de la roca. Hay más de una solución.", sol: 'f l f r f f f r f' }
      ] }
  ]
};

/* ---------- Sessió 3 · Caça l'error ---------- */
TGUIDE['r1-3'] = {
  obj: [
    "L'alumne/a explica què és un bug i què vol dir depurar un programa.|El alumno/a explica qué es un bug y qué quiere decir depurar un programa.",
    "L'alumne/a classifica un error com a bloc que falta, que sobra, equivocat o en mal ordre.|El alumno/a clasifica un error como bloque que falta, que sobra, equivocado o en mal orden.",
    "L'alumne/a fa servir l'execució pas a pas per trobar el bloc on comença l'error.|El alumno/a usa la ejecución paso a paso para encontrar el bloque donde empieza el error.",
    "L'alumne/a corregeix un programa canviant només els blocs necessaris, sense esborrar-lo tot.|El alumno/a corrige un programa cambiando solo los bloques necesarios, sin borrarlo todo."
  ],
  comp: [
    "Competència digital (CD5): identificar i corregir errors en programes senzills|Competencia digital (CD5): identificar y corregir errores en programas sencillos",
    "Pensament computacional: depuració, prova i avaluació|Pensamiento computacional: depuración, prueba y evaluación",
    "Competència personal i d'aprendre a aprendre: l'error com a part de l'aprenentatge|Competencia personal y de aprender a aprender: el error como parte del aprendizaje",
    "Comunicació oral: explicar on és un error i per què|Comunicación oral: explicar dónde está un error y por qué"
  ],
  vocab: [
    ["Bug|Bug", "Un error en un programa. En anglès vol dir «bestiola».|Un error en un programa. En inglés quiere decir «bicho»."],
    ["Depurar|Depurar", "Buscar i arreglar els errors d'un programa.|Buscar y arreglar los errores de un programa."],
    ["Pas a pas|Paso a paso", "Executar el programa bloc a bloc, com a càmera lenta.|Ejecutar el programa bloque a bloque, como a cámara lenta."],
    ["Provar|Probar", "Tornar a executar el programa per comprovar si ara funciona.|Volver a ejecutar el programa para comprobar si ahora funciona."],
    ["Tipus de bug|Tipos de bug", "Falta un bloc, sobra un bloc, un bloc equivocat o blocs en mal ordre.|Falta un bloque, sobra un bloque, un bloque equivocado o bloques en mal orden."]
  ],
  mat: {
    aula: [
      "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Caça l'error»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Caza el error»",
      "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
      "La quadrícula del terra i les targetes d'ordres de la sessió 1|La cuadrícula del suelo y las tarjetas de órdenes de la sesión 1",
      "Pinces d'estendre o gomets per marcar la targeta sospitosa (opcional)|Pinzas de tender o pegatinas para marcar la tarjeta sospechosa (opcional)"
    ],
    imprimir: ["Fitxa: troba el bug|Ficha: encuentra el bug", "Quadrícula del terra: programes amb bug|Cuadrícula del suelo: programas con bug"],
    prep: [
      "Preparar a la quadrícula la missió 1 del full «Programes amb bug» i deixar-ne les targetes en fila, amb l'error inclòs.|Preparar en la cuadrícula la misión 1 de la hoja «Programas con bug» y dejar sus tarjetas en fila, con el error incluido.",
      "Imprimir una fitxa per alumne/a i el full de missions amb bug per a cada grup de 3.|Imprimir una ficha por alumno/a y la hoja de misiones con bug para cada grupo de 3.",
      "Repassar les quatre preguntes del mètode per caçar bugs (diapositiva 10) per fer-les servir durant tota la sessió.|Repasar las cuatro preguntas del método para cazar bugs (diapositiva 10) para usarlas durante toda la sesión.",
      "Provar les demostracions de les diapositives 7 i 8.|Probar las demostraciones de las diapositivas 7 y 8."
    ]
  },
  plan: [
    { min: 5, t: "Recordem i la història del bug|Recordamos y la historia del bug", fase: 'inici',
      fa: "Fes la pregunta de repàs de la mitja volta. Explica que tots els programadors s'equivoquen i que trobar errors és una part normal de la feina. Explica breument la història de 1947 i la paraula bug.|Haz la pregunta de repaso de la media vuelta. Explica que todos los programadores se equivocan y que encontrar errores es una parte normal del trabajo. Explica brevemente la historia de 1947 y la palabra bug.",
      diu: ["Quan us ha passat que alguna cosa no sortia com volíeu? Què vau fer?|¿Cuándo os ha pasado que algo no salía como queríais? ¿Qué hicisteis?",
        "Equivocar-se no és dolent: el que compta és saber trobar l'error.|Equivocarse no es malo: lo que cuenta es saber encontrar el error."],
      slides: ['s1', 's2', 's3', 's4'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
    { min: 9, t: "Bugs i com es cacen|Bugs y cómo se cazan", fase: 'teoria',
      fa: "Presenta què és un bug i els quatre tipus més habituals. A la demostració, demana que tothom digui on acabarà en Bit abans d'executar-la; després troben quin bloc és l'equivocat i executes la versió arreglada. Tanca amb el pas a pas i el mètode de quatre passos.|Presenta qué es un bug y los cuatro tipos más habituales. En la demostración, pide que todos digan dónde terminará Bit antes de ejecutarla; después encuentran qué bloque es el equivocado y ejecutas la versión arreglada. Cierra con el paso a paso y el método de cuatro pasos.",
      diu: ["Volíem arribar a la C. On ha acabat en Bit? Quin bloc ho ha fet?|Queríamos llegar a la C. ¿Dónde ha terminado Bit? ¿Qué bloque lo ha hecho?",
        "Quin tipus de bug era: falta, sobra, equivocat o mal ordre?|¿Qué tipo de bug era: falta, sobra, equivocado o mal orden?",
        "Per què és millor canviar un sol bloc que esborrar-ho tot?|¿Por qué es mejor cambiar un solo bloque que borrarlo todo?"],
      slides: ['s5', 's6', 's7', 's8', 's9', 's10'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
    { min: 12, t: "Caçabugs al terra|Cazabugs en el suelo", fase: 'desconnectat',
      fa: "Primer, tots junts: un voluntari/ària fa de robot amb el programa amb error que ja és a terra i la classe diu «pas!» abans de cada targeta. Quan el robot xoca o no arriba, s'atura; la classe busca la targeta culpable, diu de quin tipus és i la canvia. Després, en grups de 3, feu les missions 2 i 3 del full de la quadrícula de la mateixa manera.|Primero, todos juntos: un voluntario/a hace de robot con el programa con error que ya está en el suelo y la clase dice «¡paso!» antes de cada tarjeta. Cuando el robot choca o no llega, se para; la clase busca la tarjeta culpable, dice de qué tipo es y la cambia. Después, en grupos de 3, haced las misiones 2 y 3 de la hoja de la cuadrícula de la misma manera.",
      diu: ["Pas! Què diu aquesta targeta? I ara, on és el robot?|¡Paso! ¿Qué dice esta tarjeta? ¿Y ahora, dónde está el robot?",
        "On ha començat a anar malament? Marqueu la targeta amb la pinça.|¿Dónde ha empezado a ir mal? Marcad la tarjeta con la pinza.",
        "Canvieu només aquella targeta i torneu-ho a provar.|Cambiad solo esa tarjeta y volved a probarlo."],
      slides: ['s11', 's12'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Tot el grup i després grups de 3|Todo el grupo y después grupos de 3" },
    { min: 14, t: "A l'ordinador: investiga|En el ordenador: investiga", fase: 'ordinador',
      fa: "Cada alumne/a fa la sessió fins als dos primers reptes. Insisteix que facin servir el botó «Pas a pas» abans de canviar cap bloc. Si algú esborra tot el programa, demana-li que el torni a posar i busqui primer el bloc culpable.|Cada alumno/a hace la sesión hasta los dos primeros retos. Insiste en que usen el botón «Paso a paso» antes de cambiar ningún bloque. Si alguien borra todo el programa, pídele que lo vuelva a poner y busque primero el bloque culpable.",
      diu: ["Has executat el programa pas a pas? En quin bloc comença el problema?|¿Has ejecutado el programa paso a paso? ¿En qué bloque empieza el problema?",
        "Toca el bloc que creus que és el bug i explica-me per què.|Toca el bloque que crees que es el bug y explícame por qué."],
      slides: ['s13'], app: "Pregunta de «Recorda», les dues històries (el bug i la bestiola de 1947), les targetes de «Descobreix», el mètode d'en Bit, els dos «Investiga» (el gir equivocat i el bloc que sobra) i els reptes «se'n passa» i «el gir equivocat».|Pregunta de «Recuerda», las dos historias (el bug y el bicho de 1947), las tarjetas de «Descubre», el método de Bit, los dos «Investiga» (el giro equivocado y el bloque que sobra) y los retos «se pasa» y «el giro equivocado».", org: "Individual|Individual" },
    { min: 10, t: "Reptes de caçabugs|Retos de cazabugs", fase: 'ordinador',
      fa: "Pausa activa del bug de la granota tots junts. Després continuen amb els blocs barrejats i el programa amb dos errors. Abans d'aquest últim, explica l'estratègia: arreglar un error, provar i després buscar el segon.|Pausa activa del bug de la rana todos juntos. Después siguen con los bloques mezclados y el programa con dos errores. Antes de este último, explica la estrategia: arreglar un error, probar y después buscar el segundo.",
      diu: ["Ja has arreglat un bug? Prova-ho abans de buscar l'altre.|¿Ya has arreglado un bug? Pruébalo antes de buscar el otro.",
        "En Bit mira avall i ha d'anar cap a la dreta de la pantalla: quin gir li cal?|Bit mira abajo y tiene que ir hacia la derecha de la pantalla: ¿qué giro le hace falta?"],
      slides: ['s14', 's15'], app: "«Pausa activa», ordenar els blocs barrejats i el repte dels dos errors.|«Pausa activa», ordenar los bloques mezclados y el reto de los dos errores.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
    { min: 6, t: "Crea: un camí per endevinar|Crea: un camino para adivinar", fase: 'crea',
      fa: "Cada alumne/a crea un camí amb almenys tres girs. Per parelles, s'ensenyen el programa: el company/a diu on acabarà en Bit abans d'executar-lo. Si hi ha un bug, el busquen junts pas a pas.|Cada alumno/a crea un camino con al menos tres giros. Por parejas, se enseñan el programa: el compañero/a dice dónde terminará Bit antes de ejecutarlo. Si hay un bug, lo buscan juntos paso a paso.",
      diu: ["Abans d'executar el programa del company/a, digues on creus que acabarà.|Antes de ejecutar el programa del compañero/a, di dónde crees que terminará.",
        "Si heu trobat un bug, de quin tipus era?|Si habéis encontrado un bug, ¿de qué tipo era?"],
      slides: ['s16'], app: "Pas «Crea»: Un camí per endevinar.|Paso «Crea»: Un camino para adivinar.", org: "Individual i després per parelles|Individual y después por parejas" },
    { min: 4, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
      fa: "Repassa el mètode per caçar bugs amb el resum. Deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida.|Repasa el método para cazar bugs con el resumen. Deja que respondan las preguntas finales de la app y haz el ticket de salida.",
      diu: ["Quin ha estat el bug més difícil d'avui? Com l'heu trobat?|¿Cuál ha sido el bug más difícil de hoy? ¿Cómo lo habéis encontrado?",
        "Què vol dir depurar?|¿Qué quiere decir depurar?"],
      slides: ['s17', 's18'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
  ],
  errors: [
    ["Quan el programa falla, ho esborra tot i el torna a fer.|Cuando el programa falla, lo borra todo y lo vuelve a hacer.",
      "Pregunta: fins a quin bloc ha anat bé? Que ho comprovi amb «Pas a pas» i canviï només el primer bloc que falla.|Pregunta: ¿hasta qué bloque ha ido bien? Que lo compruebe con «Paso a paso» y cambie solo el primer bloque que falla."],
    ["Busca l'error al bloc on en Bit xoca, però el problema ve d'abans (per exemple, un gir equivocat).|Busca el error en el bloque donde Bit choca, pero el problema viene de antes (por ejemplo, un giro equivocado).",
      "Demana-li que miri cap on mira en Bit just abans de xocar i que pensi quin bloc l'ha deixat mirant així.|Pídele que mire hacia dónde mira Bit justo antes de chocar y que piense qué bloque lo ha dejado mirando así."],
    ["Canvia diversos blocs alhora i ja no sap quin era el bo.|Cambia varios bloques a la vez y ya no sabe cuál era el bueno.",
      "Proposa-li la norma «un canvi, una prova»: canvia un sol bloc i executa abans de tocar res més.|Proponle la norma «un cambio, una prueba»: cambia un solo bloque y ejecuta antes de tocar nada más."],
    ["Al repte dels dos errors, arregla el primer i creu que ja està.|En el reto de los dos errores, arregla el primero y cree que ya está.",
      "Pregunta: en Bit ja arriba a la bandera? Si no, encara queda un bug. Que torni a fer pas a pas des d'on s'ha aturat.|Pregunta: ¿Bit ya llega a la bandera? Si no, todavía queda un bug. Que vuelva a hacer paso a paso desde donde se ha parado."],
    ["Se sent malament quan s'equivoca i no vol continuar.|Se siente mal cuando se equivoca y no quiere seguir.",
      "Recorda-li que trobar bugs és la feina dels programadors i felicita'l per cada error trobat, no només pels programes que funcionen.|Recuérdale que encontrar bugs es el trabajo de los programadores y felicítalo por cada error encontrado, no solo por los programas que funcionan."]
  ],
  diff: {
    mes: "Crear un programa amb un bug amagat per a un company/a: ha de funcionar gairebé del tot i el company/a ha de trobar el bloc i dir-ne el tipus. Després, fer la fitxa «Troba el bug» completa.|Crear un programa con un bug escondido para un compañero/a: tiene que funcionar casi del todo y el compañero/a tiene que encontrar el bloque y decir su tipo. Después, hacer la ficha «Encuentra el bug» completa.",
    menys: "Fer els reptes amb les targetes de paper al costat: copiar el programa de la pantalla amb targetes, moure una figureta a la quadrícula A3 targeta a targeta i posar una pinça a la targeta on comença el problema.|Hacer los retos con las tarjetas de papel al lado: copiar el programa de la pantalla con tarjetas, mover una figurita en la cuadrícula A3 tarjeta a tarjeta y poner una pinza en la tarjeta donde empieza el problema."
  },
  aval: {
    ticket: ["Què vol dir depurar un programa?|¿Qué quiere decir depurar un programa?",
      "Digues dos tipus de bug.|Di dos tipos de bug."],
    rubric: [
      ["Localitzar el bug|Localizar el bug", "Fa servir «Pas a pas» i troba el primer bloc que falla.|Usa «Paso a paso» y encuentra el primer bloque que falla.", "Veu on xoca en Bit, però no sempre troba el bloc que en té la culpa.|Ve dónde choca Bit, pero no siempre encuentra el bloque que tiene la culpa."],
      ["Corregir sense començar de nou|Corregir sin empezar de nuevo", "Canvia només els blocs necessaris i torna a provar.|Cambia solo los bloques necesarios y vuelve a probar.", "Arregla l'error, però sovint esborra més blocs dels que cal.|Arregla el error, pero a menudo borra más bloques de los necesarios."],
      ["Explicar l'error|Explicar el error", "Diu de quin tipus és el bug i per què fa fallar el programa.|Dice de qué tipo es el bug y por qué hace fallar el programa.", "Sap quin bloc canviar, però li costa explicar per què.|Sabe qué bloque cambiar, pero le cuesta explicar por qué."]
    ]
  },
  casa: "A casa, amb el mòbil, podeu fer el repte «Un camí per endevinar»: abans d'executar el programa, demaneu a algú de casa on creu que acabarà en Bit. Si hi ha un bug, busqueu-lo junts pas a pas.|En casa, con el móvil, podéis hacer el reto «Un camino para adivinar»: antes de ejecutar el programa, pedid a alguien de casa dónde cree que terminará Bit. Si hay un bug, buscadlo juntos paso a paso.",
  slides: [
    { id: 's1', k: 'portada', t: "Caça l'error|Caza el error", x: "Avui aprendrem a trobar i arreglar els errors dels programes.|Hoy aprenderemos a encontrar y arreglar los errores de los programas.",
      nota: "Objectiu: no esborrar-ho tot quan alguna cosa falla, sinó trobar el bloc culpable.|Objetivo: no borrarlo todo cuando algo falla, sino encontrar el bloque culpable." },
    { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "En Bit mira amunt i fa dos girs a la dreta. Cap on mira?|Bit mira arriba y hace dos giros a la derecha. ¿Hacia dónde mira?",
      nota: "Resposta: avall. Dos girs iguals fan mitja volta.|Respuesta: abajo. Dos giros iguales hacen media vuelta." },
    { id: 's3', k: 'concepte', t: "Els programadors també s'equivoquen|Los programadores también se equivocan", x: "Escrius un programa i… no fa el que volies! Un error en un programa es diu bug.|Escribes un programa y… ¡no hace lo que querías! Un error en un programa se llama bug.",
      nota: "Normalitza l'error: tothom en fa, també els programadors amb molta experiència.|Normaliza el error: todo el mundo los comete, también los programadores con mucha experiencia." },
    { id: 's4', k: 'concepte', t: "La bestiola de 1947|El bicho de 1947", x: "Un equip va trobar una arna dins d'un ordinador gegant que fallava i la va enganxar al quadern.|Un equipo encontró una polilla dentro de un ordenador gigante que fallaba y la pegó en el cuaderno.",
      nota: "Aclareix que la paraula bug ja existia abans, però aquesta història la va fer famosa.|Aclara que la palabra bug ya existía antes, pero esta historia la hizo famosa." },
    { id: 's5', k: 'anim', t: "Què és un bug?|¿Qué es un bug?", anim: 'bug', x: "Un bloc que no hauria de ser-hi, que falta o que està malament.|Un bloque que no debería estar, que falta o que está mal.",
      nota: "Fes notar que la lupa revisa els blocs un a un: així es busquen els bugs.|Haz notar que la lupa revisa los bloques uno a uno: así se buscan los bugs." },
    { id: 's6', k: 'anim', t: "Els quatre bugs més habituals|Los cuatro bugs más habituales", anim: 'bugtypes', punts: ["Falta un bloc|Falta un bloque", "Sobra un bloc|Sobra un bloque", "Un bloc equivocat|Un bloque equivocado", "Els blocs en mal ordre|Los bloques en mal orden"],
      nota: "Demana un exemple de cada tipus amb una recepta o amb el camí a l'escola.|Pide un ejemplo de cada tipo con una receta o con el camino al cole." },
    { id: 's7', k: 'demo', t: "On acabarà?|¿Dónde terminará?", x: "Volíem que en Bit anés a la C. Programa: Gira a l'esquerra, Endavant, Endavant.|Queríamos que Bit fuera a la C. Programa: Gira a la izquierda, Adelante, Adelante.",
      demo: { w: { map: ['.....', 'A#^#C', '..#..', '..B..'] }, prog: 'l f f' },
      nota: "Primer, que diguin on acabarà; després executa. Acaba a la A: el bug és el gir, un bloc equivocat.|Primero, que digan dónde terminará; después ejecuta. Termina en la A: el bug es el giro, un bloque equivocado." },
    { id: 's8', k: 'demo', t: "Arreglat: un sol bloc|Arreglado: un solo bloque", x: "Hem canviat només el gir. Ara arriba a la C?|Hemos cambiado solo el giro. ¿Ahora llega a la C?",
      demo: { w: { map: ['.....', 'A#^#C', '..#..', '..B..'] }, prog: 'r f f' },
      nota: "Remarca que no hem tornat a escriure el programa: hem canviat un bloc i hem provat.|Remarca que no hemos vuelto a escribir el programa: hemos cambiado un bloque y hemos probado." },
    { id: 's9', k: 'anim', t: "Pas a pas|Paso a paso", anim: 'step', x: "Un bloc… pausa… un altre bloc. Així veus on comença el problema.|Un bloque… pausa… otro bloque. Así ves dónde empieza el problema.",
      nota: "Ensenya on és el botó «Pas a pas» a l'app projectant-la un moment.|Enseña dónde está el botón «Paso a paso» en la app proyectándola un momento." },
    { id: 's10', k: 'concepte', t: "Com es caça un bug|Cómo se caza un bug", punts: ["1. Executa i mira on falla.|1. Ejecuta y mira dónde falla.", "2. Fes-lo pas a pas.|2. Hazlo paso a paso.", "3. Canvia només el bloc equivocat.|3. Cambia solo el bloque equivocado.", "4. Torna-ho a provar.|4. Vuelve a probarlo."],
      nota: "Deixa aquest mètode a la vista o a la pissarra durant tota la sessió.|Deja este método a la vista o en la pizarra durante toda la sesión." },
    { id: 's11', k: 'activitat', t: "Caçabugs al terra|Cazabugs en el suelo", timer: 12, punts: ["El robot fa una targeta quan la classe diu «pas!».|El robot hace una tarjeta cuando la clase dice «¡paso!».", "Quan falla, atureu-vos i marqueu la targeta culpable.|Cuando falla, paraos y marcad la tarjeta culpable.", "Digueu de quin tipus és el bug i canvieu només aquella targeta.|Decid de qué tipo es el bug y cambiad solo esa tarjeta."],
      nota: "Primer la missió 1 amb tota la classe; després, grups de 3 amb les missions 2 i 3.|Primero la misión 1 con toda la clase; después, grupos de 3 con las misiones 2 y 3." },
    { id: 's12', k: 'pregunta', t: "Quin tipus de bug és?|¿Qué tipo de bug es?", x: "Volíem: Endavant, Endavant, Gira a la dreta, Endavant. Hem escrit: Endavant, Gira a la dreta, Endavant, Endavant.|Queríamos: Adelante, Adelante, Gira a la derecha, Adelante. Hemos escrito: Adelante, Gira a la derecha, Adelante, Adelante.",
      nota: "Resposta: els blocs en mal ordre. Hi ha els mateixos blocs, però el gir és massa aviat.|Respuesta: los bloques en mal orden. Están los mismos bloques, pero el giro es demasiado pronto." },
    { id: 's13', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 14, punts: ["Obre la sessió «Caça l'error».|Abre la sesión «Caza el error».", "A «Investiga», toca el bloc culpable.|En «Investiga», toca el bloque culpable.", "Fes servir «Pas a pas» abans de canviar res.|Usa «Paso a paso» antes de cambiar nada.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
      nota: "Passeja i pregunta: en quin bloc comença el problema?|Pasea y pregunta: ¿en qué bloque empieza el problema?" },
    { id: 's14', k: 'repte', t: "Reptes de caçabugs|Retos de cazabugs", timer: 10, punts: ["Pausa activa: el bug de la granota|Pausa activa: el bug de la rana", "Ordena els blocs barrejats|Ordena los bloques mezclados", "El programa amb dos bugs|El programa con dos bugs"],
      nota: "Fes la pausa activa tots junts, drets i amb espai al voltant.|Haced la pausa activa todos juntos, de pie y con espacio alrededor." },
    { id: 's15', k: 'concepte', t: "Dos bugs? Un cada vegada|¿Dos bugs? Uno cada vez", punts: ["Troba el primer bug i arregla'l.|Encuentra el primer bug y arréglalo.", "Prova: on arriba ara en Bit?|Prueba: ¿adónde llega ahora Bit?", "Busca el segon a partir d'aquí.|Busca el segundo a partir de ahí."],
      nota: "Recorda la norma: un canvi, una prova.|Recuerda la norma: un cambio, una prueba." },
    { id: 's16', k: 'activitat', t: "Crea: un camí per endevinar|Crea: un camino para adivinar", timer: 6, x: "Crea un camí amb almenys 3 girs. El company/a endevina on acabarà en Bit abans d'executar-lo.|Crea un camino con al menos 3 giros. El compañero/a adivina dónde terminará Bit antes de ejecutarlo.",
      nota: "Si un programa té un bug, aprofiteu-lo: busqueu-lo junts pas a pas.|Si un programa tiene un bug, aprovechadlo: buscadlo juntos paso a paso." },
    { id: 's17', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un bug és un error en un programa.|Un bug es un error en un programa.", "Depurar és trobar-lo i arreglar-lo.|Depurar es encontrarlo y arreglarlo.", "Pas a pas i un canvi cada vegada.|Paso a paso y un cambio cada vez."],
      nota: "Felicita la classe pels bugs trobats, no només pels programes que funcionen.|Felicita a la clase por los bugs encontrados, no solo por los programas que funcionan." },
    { id: 's18', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què vol dir depurar un programa?|¿Qué quiere decir depurar un programa?", "Digues dos tipus de bug.|Di dos tipos de bug."],
      nota: "Anota qui encara esborra tot el programa quan falla: la setmana vinent, seu al seu costat al principi.|Anota quién todavía borra todo el programa cuando falla: la semana que viene, siéntate a su lado al principio." }
  ],
  print: [
    { id: 'p1', t: "Fitxa: troba el bug|Ficha: encuentra el bug", k: 'fitxa',
      intro: "Cada programa té un bug. Encercla el bloc culpable, escriu de quin tipus és (falta, sobra, equivocat o mal ordre) i escriu el programa arreglat.|Cada programa tiene un bug. Rodea el bloque culpable, escribe de qué tipo es (falta, sobra, equivocado o mal orden) y escribe el programa arreglado.",
      items: [
        { q: "Programa: Endavant, Endavant. En Bit no arriba a la bandera.|Programa: Adelante, Adelante. Bit no llega a la bandera.",
          w: { map: ['>##F'] }, prog: 'f f', solProg: 'f f f', sol: "Falta un bloc: cal un tercer Endavant.|Falta un bloque: hace falta un tercer Adelante." },
        { q: "Programa: Endavant, Endavant, Endavant, Endavant. En Bit se'n passa i xoca amb un arbre.|Programa: Adelante, Adelante, Adelante, Adelante. Bit se pasa y choca con un árbol.",
          w: { map: ['>##F.'] }, prog: 'f f f f', solProg: 'f f f', sol: "Sobra un bloc: l'últim Endavant.|Sobra un bloque: el último Adelante." },
        { q: "Programa: Endavant, Endavant, Gira a l'esquerra, Endavant. En Bit xoca amb una roca.|Programa: Adelante, Adelante, Gira a la izquierda, Adelante. Bit choca con una roca.",
          w: { map: ['RRRR', '>##.', '..F.'] }, prog: 'f f l f', solProg: 'f f r f', sol: "Un bloc equivocat: havia de girar a la dreta.|Un bloque equivocado: tenía que girar a la derecha." },
        { q: "Programa: Endavant, Gira a l'esquerra, Endavant, Endavant, Endavant. En Bit xoca amb un arbre.|Programa: Adelante, Gira a la izquierda, Adelante, Adelante, Adelante. Bit choca con un árbol.",
          w: { map: ['F##', '..#', '..^'] }, prog: 'f l f f f', solProg: 'f f l f f', sol: "Blocs en mal ordre: el gir va després del segon Endavant.|Bloques en mal orden: el giro va después del segundo Adelante." },
        { q: "Repte: aquest programa té dos bugs. Programa: Endavant, Endavant, Gira a la dreta, Endavant, Endavant.|Reto: este programa tiene dos bugs. Programa: Adelante, Adelante, Gira a la derecha, Adelante, Adelante.",
          w: { map: ['v..', '#..', '#..', '##F'] }, prog: 'f f r f f', solProg: 'f f f l f f', sol: "Falta un Endavant abans del gir i el gir és equivocat: en Bit mira avall i ha de girar a l'esquerra.|Falta un Adelante antes del giro y el giro es equivocado: Bit mira abajo y tiene que girar a la izquierda." }
      ] },
    { id: 'p2', t: "Quadrícula del terra: programes amb bug|Cuadrícula del suelo: programas con bug", k: 'quadricula',
      intro: "Feu servir la quadrícula de 5 × 5. Poseu les targetes del programa amb bug en fila, executeu-lo pas a pas i, quan falli, marqueu la targeta culpable i canvieu-la.|Usad la cuadrícula de 5 × 5. Poned las tarjetas del programa con bug en fila, ejecutadlo paso a paso y, cuando falle, marcad la tarjeta culpable y cambiadla.",
      items: [
        { t: "Missió 1 (tota la classe): el robot no arriba|Misión 1 (toda la clase): el robot no llega", w: 5, h: 5, cells: ['.....', '.....', '>...F', '.....', '.....'], prog: 'f f f',
          instructions: "Programa amb bug: Endavant ×3. Tipus de bug: falta un bloc.|Programa con bug: Adelante ×3. Tipo de bug: falta un bloque.", sol: 'f f f f' },
        { t: "Missió 2: el gir que surt del mapa|Misión 2: el giro que sale del mapa", w: 5, h: 5, cells: ['....F', '...R.', '.....', '.....', '>....'], prog: 'f f f f r f f f f',
          instructions: "Programa amb bug: Endavant ×4, Gira a la dreta, Endavant ×4. El robot surt de la quadrícula. Tipus de bug: un bloc equivocat.|Programa con bug: Adelante ×4, Gira a la derecha, Adelante ×4. El robot sale de la cuadrícula. Tipo de bug: un bloque equivocado.", sol: 'f f f f l f f f f' },
        { t: "Missió 3: el gir arriba tard|Misión 3: el giro llega tarde", w: 5, h: 5, cells: ['...F.', '.....', 'R....', '.....', '^....'], prog: 'f f r f f f l f f',
          instructions: "Programa amb bug: Endavant ×2, Gira a la dreta, Endavant ×3, Gira a l'esquerra, Endavant ×2. El robot xoca amb la roca. Tipus de bug: blocs en mal ordre (un Endavant és al principi i havia d'anar al final).|Programa con bug: Adelante ×2, Gira a la derecha, Adelante ×3, Gira a la izquierda, Adelante ×2. El robot choca con la roca. Tipo de bug: bloques en mal orden (un Adelante está al principio y tenía que ir al final).", sol: 'f r f f f l f f f' }
      ] }
  ]
};

/* ---------- Sessió 4 · Projecte: el repartidor de l'illa ---------- */
TGUIDE['r1-4'] = {
  obj: [
    "L'alumne/a col·loca «Agafa la caixa» i «Deixa la caixa» al lloc correcte del programa.|El alumno/a coloca «Coge la caja» y «Deja la caja» en el lugar correcto del programa.",
    "L'alumne/a descompon un repartiment en trossos (anar a la caixa, agafar-la, anar a la casa, deixar-la) abans de programar.|El alumno/a descompone un reparto en trozos (ir a la caja, cogerla, ir a la casa, dejarla) antes de programar.",
    "L'alumne/a planifica, programa, prova i millora un repartiment de diverses caixes fent servir el que ha après a la unitat.|El alumno/a planifica, programa, prueba y mejora un reparto de varias cajas usando lo que ha aprendido en la unidad.",
    "L'alumne/a presenta el seu projecte i explica com l'ha partit en trossos i quin bug ha arreglat.|El alumno/a presenta su proyecto y explica cómo lo ha partido en trozos y qué bug ha arreglado."
  ],
  comp: [
    "Competència digital (CD5): crear un programa per resoldre un problema de diverses etapes|Competencia digital (CD5): crear un programa para resolver un problema de varias etapas",
    "Pensament computacional: descomposició, planificació i depuració|Pensamiento computacional: descomposición, planificación y depuración",
    "Matemàtiques: resolució de problemes per etapes i orientació en una quadrícula|Matemáticas: resolución de problemas por etapas y orientación en una cuadrícula",
    "Comunicació oral: presentar un projecte i explicar com s'ha fet|Comunicación oral: presentar un proyecto y explicar cómo se ha hecho"
  ],
  vocab: [
    ["Descompondre|Descomponer", "Partir un problema gran en trossos més petits.|Partir un problema grande en trozos más pequeños."],
    ["Tros|Trozo", "Una part petita del problema que es pot resoldre sola.|Una parte pequeña del problema que se puede resolver sola."],
    ["Pla|Plan", "El que decidim fer, i en quin ordre, abans de posar blocs.|Lo que decidimos hacer, y en qué orden, antes de poner bloques."],
    ["Ordre d'acció|Orden de acción", "Una ordre que fa una cosa sense moure en Bit, com Agafa o Deixa.|Una orden que hace algo sin mover a Bit, como Coge o Deja."],
    ["Projecte|Proyecto", "Un repte més gran on fem servir tot el que hem après.|Un reto más grande donde usamos todo lo que hemos aprendido."]
  ],
  mat: {
    aula: [
      "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el repartidor de l'illa»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el repartidor de la isla»",
      "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
      "La quadrícula del terra i les targetes d'ordres de la sessió 1|La cuadrícula del suelo y las tarjetas de órdenes de la sesión 1",
      "Dues capses petites (o estoigs) que facin de caixa i un llapis per a cada grup|Dos cajas pequeñas (o estuches) que hagan de caja y un lápiz para cada grupo"
    ],
    imprimir: ["Targetes noves: Agafa i Deixa|Tarjetas nuevas: Coge y Deja", "Full de pla del repartidor|Hoja de plan del repartidor"],
    prep: [
      "Muntar a la quadrícula del terra el mapa de l'exercici 1 del full de pla: dues caixes, dues cases i una roca.|Montar en la cuadrícula del suelo el mapa del ejercicio 1 de la hoja de plan: dos cajas, dos casas y una roca.",
      "Imprimir i retallar les targetes noves (Agafa, Deixa, Tros) per a cada grup i un full de pla per parella.|Imprimir y recortar las tarjetas nuevas (Coge, Deja, Trozo) para cada grupo y una hoja de plan por pareja.",
      "Decidir com es presentaran els projectes: 3 o 4 voluntaris al projector o els ordinadors oberts per fer una volta per l'aula.|Decidir cómo se presentarán los proyectos: 3 o 4 voluntarios en el proyector o los ordenadores abiertos para dar una vuelta por el aula.",
      "Tenir preparades les insígnies o un reconeixement senzill per al final de la unitat.|Tener preparadas las insignias o un reconocimiento sencillo para el final de la unidad."
    ]
  },
  plan: [
    { min: 5, t: "Recordem i el nou repartidor|Recordamos y el nuevo repartidor", fase: 'inici',
      fa: "Fes la pregunta de repàs sobre què fer quan un programa falla. Explica la missió: en Bit és el nou repartidor de l'illa i avui farem el projecte final de la unitat. Escriu a la pissarra les dues ordres noves.|Haz la pregunta de repaso sobre qué hacer cuando un programa falla. Explica la misión: Bit es el nuevo repartidor de la isla y hoy haremos el proyecto final de la unidad. Escribe en la pizarra las dos órdenes nuevas.",
      diu: ["Un programa fa xocar en Bit. Què és el primer que feu?|Un programa hace chocar a Bit. ¿Qué es lo primero que hacéis?",
        "Avui farem servir tot el que hem après: ordres, girs i caçar bugs.|Hoy usaremos todo lo que hemos aprendido: órdenes, giros y cazar bugs."],
      slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
    { min: 8, t: "Agafa, Deixa i el pla|Coge, Deja y el plan", fase: 'teoria',
      fa: "Mostra la demostració d'Agafa i Deixa i les regles del repartidor. Explica descompondre amb l'animació i el pla en quatre passos. A la darrera demostració, la classe dicta els trossos i tu els converteixes en blocs abans d'executar.|Muestra la demostración de Coge y Deja y las reglas del repartidor. Explica descomponer con la animación y el plan en cuatro pasos. En la última demostración, la clase dicta los trozos y tú los conviertes en bloques antes de ejecutar.",
      diu: ["Agafa i Deixa mouen en Bit? Què li cal fer abans d'agafar una caixa?|¿Coge y Deja mueven a Bit? ¿Qué tiene que hacer antes de coger una caja?",
        "Quins trossos té aquest repartiment? Digueu-los amb paraules, sense blocs.|¿Qué trozos tiene este reparto? Decidlos con palabras, sin bloques.",
        "Si en Bit porta una caixa i en troba una altra, la pot agafar?|Si Bit lleva una caja y encuentra otra, ¿la puede coger?"],
      slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
    { min: 12, t: "El repartidor al terra|El repartidor en el suelo", fase: 'desconnectat',
      fa: "Per parelles, omplen els exercicis 1 i 2 del full de pla: primer els trossos amb paraules i després les targetes. Després, en grups de 3, executen el pla a la quadrícula: cada tros és una fila de targetes encapçalada per una targeta «Tros». El robot porta una sola caixa a la vegada i la deixa a la casa.|Por parejas, rellenan los ejercicios 1 y 2 de la hoja de plan: primero los trozos con palabras y después las tarjetas. Después, en grupos de 3, ejecutan el plan en la cuadrícula: cada trozo es una fila de tarjetas encabezada por una tarjeta «Trozo». El robot lleva una sola caja a la vez y la deja en la casa.",
      diu: ["Primer el pla, després les targetes. Quin és el tros 1?|Primero el plan, después las tarjetas. ¿Cuál es el trozo 1?",
        "On acaba aquest tros? A sobre d'una caixa o d'una casa?|¿Dónde termina este trozo? ¿Encima de una caja o de una casa?",
        "Ha fallat un tros? Arregleu només aquella fila de targetes.|¿Ha fallado un trozo? Arreglad solo esa fila de tarjetas."],
      slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles i després grups de 3|Por parejas y después grupos de 3" },
    { min: 12, t: "A l'ordinador: primers repartiments|En el ordenador: primeros repartos", fase: 'ordinador',
      fa: "Cada alumne/a fa la sessió fins a l'«Investiga» del repartidor que falla. Recorda'ls que diguin el pla en veu alta abans de cada repte. Fixa't especialment en qui posa Agafa abans d'arribar a la caixa.|Cada alumno/a hace la sesión hasta el «Investiga» del repartidor que falla. Recuérdales que digan el plan en voz alta antes de cada reto. Fíjate especialmente en quién pone Coge antes de llegar a la caja.",
      diu: ["Digues-me el teu pla: primer vaig a…, després…|Dime tu plan: primero voy a…, después…",
        "En Bit és a sobre de la caixa quan fa Agafa? Comprova-ho pas a pas.|¿Bit está encima de la caja cuando hace Coge? Compruébalo paso a paso."],
      slides: ['s11'], app: "Pregunta de «Recorda», la història del nou repartidor, les targetes de «Descobreix», les regles d'en Bit, el primer repartiment (ordenar blocs), ordenar els trossos, la caixa a la casa, la «Pausa activa», les dues caixes en línia i l'«Investiga» del bloc fora de lloc.|Pregunta de «Recuerda», la historia del nuevo repartidor, las tarjetas de «Descubre», las reglas de Bit, el primer reparto (ordenar bloques), ordenar los trozos, la caja a la casa, la «Pausa activa», las dos cajas en línea y el «Investiga» del bloque fuera de lugar.", org: "Individual|Individual" },
    { min: 15, t: "Projecte: el gran repartiment|Proyecto: el gran reparto", fase: 'crea',
      fa: "Primer, el repte del repartiment amb girs. Després, abans de començar el projecte final, cada alumne/a escriu el pla a l'exercici 4 del full: en quin ordre repartirà les tres caixes. Quan el tingui, programa, prova i millora fent servir «Pas a pas».|Primero, el reto del reparto con giros. Después, antes de empezar el proyecto final, cada alumno/a escribe el plan en el ejercicio 4 de la hoja: en qué orden repartirá las tres cajas. Cuando lo tenga, programa, prueba y mejora usando «Paso a paso».",
      diu: ["Quina caixa és la més a prop d'en Bit? Per què comences per aquesta?|¿Qué caja está más cerca de Bit? ¿Por qué empiezas por esa?",
        "Prova cada tros abans de continuar: així, si hi ha un bug, saps on és.|Prueba cada trozo antes de seguir: así, si hay un bug, sabes dónde está.",
        "Has repartit les tres caixes? Pots fer-ho amb menys blocs?|¿Has repartido las tres cajas? ¿Puedes hacerlo con menos bloques?"],
      slides: ['s12', 's13', 's14'], app: "El repte «Repartiment amb girs» i el projecte de «Crea»: El gran repartiment.|El reto «Reparto con giros» y el proyecto de «Crea»: El gran reparto.", org: "Individual|Individual" },
    { min: 5, t: "Presentem els projectes|Presentamos los proyectos", fase: 'tancament',
      fa: "Tres o quatre voluntaris projecten el seu gran repartiment. Abans d'executar-lo, expliquen el pla i la classe diu quina caixa repartirà primer. Després, expliquen un bug que hagin trobat i com l'han arreglat.|Tres o cuatro voluntarios proyectan su gran reparto. Antes de ejecutarlo, explican el plan y la clase dice qué caja repartirá primero. Después, explican un bug que hayan encontrado y cómo lo han arreglado.",
      diu: ["En quants trossos has partit el repartiment?|¿En cuántos trozos has partido el reparto?",
        "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?",
        "Què t'ha agradat del projecte del company/a?|¿Qué te ha gustado del proyecto del compañero/a?"],
      slides: ['s15'], app: "El projecte guardat a «Crea», projectat des de l'ordinador de cada voluntari/ària.|El proyecto guardado en «Crea», proyectado desde el ordenador de cada voluntario/a.", org: "Tot el grup|Todo el grupo" },
    { min: 3, t: "Tancament de la unitat|Cierre de la unidad", fase: 'tancament',
      fa: "Repassa les quatre idees de la unitat amb el resum i deixa que responguin les preguntes finals de l'app. Fes el tiquet de sortida i reconeix la feina de tothom amb la insígnia de repartidor/a.|Repasa las cuatro ideas de la unidad con el resumen y deja que respondan las preguntas finales de la app. Haz el ticket de salida y reconoce el trabajo de todos con la insignia de repartidor/a.",
      diu: ["Què vol dir descompondre un problema?|¿Qué quiere decir descomponer un problema?",
        "Quina de les quatre sessions us ha agradat més? Per què?|¿Cuál de las cuatro sesiones os ha gustado más? ¿Por qué?"],
      slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
  ],
  errors: [
    ["Posa «Agafa la caixa» abans d'arribar a la casella de la caixa.|Pone «Coge la caja» antes de llegar a la casilla de la caja.",
      "Pregunta: on és en Bit quan fa Agafa? Que ho comprovi amb «Pas a pas» i compti quants Endavant falten.|Pregunta: ¿dónde está Bit cuando hace Coge? Que lo compruebe con «Paso a paso» y cuente cuántos Adelante faltan."],
    ["Intenta agafar la segona caixa sense haver deixat la primera.|Intenta coger la segunda caja sin haber dejado la primera.",
      "Recorda-li la regla: una caixa cada vegada. Que miri el seu pla: després d'agafar, quin tros toca?|Recuérdale la regla: una caja cada vez. Que mire su plan: después de coger, ¿qué trozo toca?"],
    ["Comença a posar blocs sense pla i es perd al mig del projecte.|Empieza a poner bloques sin plan y se pierde en medio del proyecto.",
      "Atura'l amb amabilitat i demana-li que digui el pla en veu alta o que l'escrigui al full. Després, que programi només el primer tros.|Páralo con amabilidad y pídele que diga el plan en voz alta o que lo escriba en la hoja. Después, que programe solo el primer trozo."],
    ["Després de deixar una caixa, oblida cap on mira en Bit i s'equivoca amb el gir següent.|Después de dejar una caja, olvida hacia dónde mira Bit y se equivoca con el giro siguiente.",
      "Que executi fins a la caixa deixada i miri en Bit: cap on mira? A partir d'aquí, posa't al seu lloc, com a la sessió 2.|Que ejecute hasta la caja dejada y mire a Bit: ¿hacia dónde mira? A partir de ahí, ponte en su lugar, como en la sesión 2."],
    ["Vol acabar el projecte de pressa i no el prova fins al final.|Quiere terminar el proyecto deprisa y no lo prueba hasta el final.",
      "Proposa-li provar cada tros quan l'acabi. Si falla al final, és molt més difícil trobar on és el bug.|Proponle probar cada trozo cuando lo termine. Si falla al final, es mucho más difícil encontrar dónde está el bug."]
  ],
  diff: {
    mes: "Fer el gran repartiment amb dos ordres de caixes diferents i comparar quin programa té menys blocs. Després, dibuixar al full un mapa nou amb dues caixes i dues cases perquè el resolgui un company/a a la quadrícula del terra.|Hacer el gran reparto con dos órdenes de cajas diferentes y comparar qué programa tiene menos bloques. Después, dibujar en la hoja un mapa nuevo con dos cajas y dos casas para que lo resuelva un compañero/a en la cuadrícula del suelo.",
    menys: "Fer el pla amb targetes de paper damunt la taula, un tros per fila, i passar-lo a blocs tros a tros. Al projecte final, començar repartint una sola caixa i provar-ho abans d'afegir la segona.|Hacer el plan con tarjetas de papel sobre la mesa, un trozo por fila, y pasarlo a bloques trozo a trozo. En el proyecto final, empezar repartiendo una sola caja y probarlo antes de añadir la segunda."
  },
  aval: {
    ticket: ["Què vol dir descompondre un problema? Posa'n un exemple.|¿Qué quiere decir descomponer un problema? Pon un ejemplo.",
      "Quins són els quatre trossos per repartir una caixa?|¿Cuáles son los cuatro trozos para repartir una caja?"],
    rubric: [
      ["Ordres d'acció|Órdenes de acción", "Posa Agafa i Deixa just quan en Bit és a la caixa o a la casa.|Pone Coge y Deja justo cuando Bit está en la caja o en la casa.", "Fa servir les ordres d'acció, però de vegades abans d'arribar a la casella.|Usa las órdenes de acción, pero a veces antes de llegar a la casilla."],
      ["Descomposició i pla|Descomposición y plan", "Escriu o diu els trossos abans de programar i els segueix.|Escribe o dice los trozos antes de programar y los sigue.", "Fa el pla quan l'hi demanen, però programa sense seguir-lo.|Hace el plan cuando se lo piden, pero programa sin seguirlo."],
      ["Projecte final|Proyecto final", "Reparteix les tres caixes i explica com ha trobat i arreglat algun bug.|Reparte las tres cajas y explica cómo ha encontrado y arreglado algún bug.", "Reparteix una o dues caixes, o les tres amb ajuda.|Reparte una o dos cajas, o las tres con ayuda."]
    ]
  },
  casa: "A casa, amb el mòbil, el vostre fill o filla pot ensenyar-vos el projecte «El gran repartiment» i explicar-vos com l'ha planificat. Podeu fer també la pausa activa del repartidor amb un coixí.|En casa, con el móvil, vuestro hijo o hija puede enseñaros el proyecto «El gran reparto» y explicaros su plan. También podéis hacer la pausa activa del repartidor con un cojín.",
  slides: [
    { id: 's1', k: 'portada', t: "Projecte: el repartidor de l'illa|Proyecto: el repartidor de la isla", x: "Avui farem el projecte final de la unitat: repartir caixes amb un bon pla.|Hoy haremos el proyecto final de la unidad: repartir cajas con un buen plan.",
      nota: "Explica que avui faran servir tot el que han après en les tres sessions anteriors.|Explica que hoy usarán todo lo que han aprendido en las tres sesiones anteriores." },
    { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Un programa fa xocar en Bit. Què és el primer que fas?|Un programa hace chocar a Bit. ¿Qué es lo primero que haces?",
      nota: "Resposta: executar-lo pas a pas per veure on falla, i després canviar només el bloc equivocat.|Respuesta: ejecutarlo paso a paso para ver dónde falla, y después cambiar solo el bloque equivocado." },
    { id: 's3', k: 'concepte', t: "En Bit, repartidor!|¡Bit, repartidor!", x: "En Bit ha d'agafar les caixes del moll i portar-les a les cases de l'illa.|Bit tiene que coger las cajas del muelle y llevarlas a las casas de la isla.",
      nota: "Pregunta quines ordres noves creuen que necessitarà en Bit.|Pregunta qué órdenes nuevas creen que necesitará Bit." },
    { id: 's4', k: 'demo', t: "Dues ordres noves: Agafa i Deixa|Dos órdenes nuevas: Coge y Deja", x: "Agafa i Deixa no mouen en Bit: fan una acció a la casella on és.|Coge y Deja no mueven a Bit: hacen una acción en la casilla donde está.",
      demo: { w: { map: ['>b##H'] }, prog: 'f p f f f d' },
      nota: "Fes notar que, abans d'Agafa, en Bit ha d'arribar a la caixa amb un Endavant.|Haz notar que, antes de Coge, Bit tiene que llegar a la caja con un Adelante." },
    { id: 's5', k: 'concepte', t: "Les regles del repartidor|Las reglas del repartidor", punts: ["Porta una sola caixa cada vegada.|Lleva una sola caja cada vez.", "Només agafa on hi ha una caixa.|Solo coge donde hay una caja.", "Només deixa en una casa.|Solo deja en una casa.", "Agafa i Deixa no el mouen.|Coge y Deja no lo mueven."],
      nota: "Deixa aquestes regles a la vista durant l'activitat del terra.|Deja estas reglas a la vista durante la actividad del suelo." },
    { id: 's6', k: 'anim', t: "Un problema gran, a trossos|Un problema grande, a trozos", anim: 'decompose', x: "Repartir una caixa són quatre trossos: anar, agafar, anar i deixar.|Repartir una caja son cuatro trozos: ir, coger, ir y dejar.",
      nota: "Demana un altre exemple de descompondre: parar la taula, preparar la motxilla…|Pide otro ejemplo de descomponer: poner la mesa, preparar la mochila…" },
    { id: 's7', k: 'anim', t: "Primer el pla, després els blocs|Primero el plan, después los bloques", anim: 'plan', punts: ["Què ha de fer en Bit?|¿Qué tiene que hacer Bit?", "Parteix-ho en trossos.|Pártelo en trozos.", "Passa-ho a blocs.|Pásalo a bloques.", "Prova-ho i millora-ho.|Pruébalo y mejóralo."],
      nota: "Recorda que els programadors no comencen posant blocs a l'atzar.|Recuerda que los programadores no empiezan poniendo bloques al azar." },
    { id: 's8', k: 'demo', t: "Del pla als blocs|Del plan a los bloques", x: "Tros 1: puja fins a la caixa. Tros 2: agafa-la. Tros 3: gira i ves a la casa. Tros 4: deixa-la.|Trozo 1: sube hasta la caja. Trozo 2: cógela. Trozo 3: gira y ve a la casa. Trozo 4: déjala.",
      demo: { w: { map: ['H#b..', '..#..', '..^..'] }, prog: 'f f p l f f d' },
      nota: "Que la classe dicti els blocs de cada tros: Endavant ×2 · Agafa · Gira a l'esquerra, Endavant ×2 · Deixa.|Que la clase dicte los bloques de cada trozo: Adelante ×2 · Coge · Gira a la izquierda, Adelante ×2 · Deja." },
    { id: 's9', k: 'activitat', t: "El repartidor al terra|El repartidor en el suelo", timer: 12, punts: ["Per parelles: escriviu els trossos al full de pla.|Por parejas: escribid los trozos en la hoja de plan.", "Cada tros, una fila de targetes.|Cada trozo, una fila de tarjetas.", "El robot porta una sola caixa cada vegada.|El robot lleva una sola caja cada vez.", "Si un tros falla, arregleu només aquella fila.|Si un trozo falla, arreglad solo esa fila."],
      nota: "El mapa és el de l'exercici 1 del full de pla, ja muntat a la quadrícula. Roteu els papers a cada caixa.|El mapa es el del ejercicio 1 de la hoja de plan, ya montado en la cuadrícula. Rotad los papeles en cada caja." },
    { id: 's10', k: 'concepte', t: "Un tros, una fila de targetes|Un trozo, una fila de tarjetas", punts: ["Tros 1: anar a la caixa|Trozo 1: ir a la caja", "Tros 2: Agafa la caixa|Trozo 2: Coge la caja", "Tros 3: anar a la casa|Trozo 3: ir a la casa", "Tros 4: Deixa la caixa|Trozo 4: Deja la caja"],
      nota: "Fes notar que cada tros comença on acaba l'anterior.|Haz notar que cada trozo empieza donde termina el anterior." },
    { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Projecte: el repartidor de l'illa».|Abre la sesión «Proyecto: el repartidor de la isla».", "Abans de cada repte, digues el pla en veu alta.|Antes de cada reto, di el plan en voz alta.", "Para quan arribis al repartiment amb girs.|Para cuando llegues al reparto con giros."],
      nota: "Comprova que ningú posa Agafa abans d'arribar a la caixa.|Comprueba que nadie pone Coge antes de llegar a la caja." },
    { id: 's12', k: 'repte', t: "Repartiment amb girs|Reparto con giros", timer: 4, x: "Dues caixes, dues cases i uns quants revolts. Fes-ho tros a tros!|Dos cajas, dos casas y unas cuantas curvas. ¡Hazlo trozo a trozo!",
      nota: "Pista: primer la caixa de baix fins a la casa del mig.|Pista: primero la caja de abajo hasta la casa del medio." },
    { id: 's13', k: 'concepte', t: "El gran repartiment: fes el pla|El gran reparto: haz el plan", punts: ["Quina caixa vas a buscar primer?|¿Qué caja vas a buscar primero?", "A quina casa la portaràs?|¿A qué casa la llevarás?", "Escriu els trossos al full de pla.|Escribe los trozos en la hoja de plan.", "Prova cada tros abans de continuar.|Prueba cada trozo antes de seguir."],
      nota: "No deixis començar a programar fins que cada alumne/a tingui l'ordre de les caixes escrit o dit.|No dejes empezar a programar hasta que cada alumno/a tenga el orden de las cajas escrito o dicho." },
    { id: 's14', k: 'activitat', t: "Projecte: el gran repartiment|Proyecto: el gran reparto", timer: 11, x: "Reparteix les 3 caixes a les 3 cases. Planifica, programa, prova i millora.|Reparte las 3 cajas en las 3 casas. Planifica, programa, prueba y mejora.",
      nota: "Qui acabi pot buscar un programa amb menys blocs o ajudar un company/a amb preguntes.|Quien termine puede buscar un programa con menos bloques o ayudar a un compañero/a con preguntas." },
    { id: 's15', k: 'activitat', t: "Presentem els projectes|Presentamos los proyectos", timer: 5, punts: ["Quin és el teu pla?|¿Cuál es tu plan?", "Quina caixa reparteixes primer?|¿Qué caja repartes primero?", "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?"],
      nota: "Abans d'executar cada projecte, que la classe digui quina caixa repartirà primer en Bit.|Antes de ejecutar cada proyecto, que la clase diga qué caja repartirá primero Bit." },
    { id: 's16', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["Un algorisme són instruccions en ordre.|Un algoritmo son instrucciones en orden.", "Per girar bé, posa't al lloc d'en Bit.|Para girar bien, ponte en el lugar de Bit.", "Els bugs es cacen pas a pas.|Los bugs se cazan paso a paso.", "Un problema gran es resol a trossos.|Un problema grande se resuelve a trozos."],
      nota: "Felicita la classe: han acabat el primer projecte del curs. Avança que la unitat següent tracta de repetir.|Felicita a la clase: han terminado el primer proyecto del curso. Avanza que la unidad siguiente trata de repetir." },
    { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què vol dir descompondre un problema?|¿Qué quiere decir descomponer un problema?", "Quins són els quatre trossos per repartir una caixa?|¿Cuáles son los cuatro trozos para repartir una caja?"],
      nota: "Respostes: partir-lo en trossos petits; anar a la caixa, agafar-la, anar a la casa i deixar-la.|Respuestas: partirlo en trozos pequeños; ir a la caja, cogerla, ir a la casa y dejarla." }
  ],
  print: [
    { id: 'p1', t: "Targetes noves: Agafa i Deixa|Tarjetas nuevas: Coge y Deja", k: 'targetes',
      intro: "Afegiu aquestes targetes al paquet de la sessió 1. Les targetes «Tros» encapçalen cada fila del pla; les de caixa i casa marquen el mapa a la quadrícula.|Añadid estas tarjetas al paquete de la sesión 1. Las tarjetas «Trozo» encabezan cada fila del plan; las de caja y casa marcan el mapa en la cuadrícula.",
      items: [
        { t: "Agafa la caixa 📦⬆|Coge la caja 📦⬆", n: 3 },
        { t: "Deixa la caixa 📦⬇|Deja la caja 📦⬇", n: 3 },
        { t: "Tros 1|Trozo 1", n: 1 },
        { t: "Tros 2|Trozo 2", n: 1 },
        { t: "Tros 3|Trozo 3", n: 1 },
        { t: "Tros 4|Trozo 4", n: 1 },
        { t: "Caixa 📦|Caja 📦", n: 2 },
        { t: "Casa 🏠|Casa 🏠", n: 2 }
      ] },
    { id: 'p2', t: "Full de pla del repartidor|Hoja de plan del repartidor", k: 'fitxa',
      intro: "Primer penseu el pla amb paraules, després passeu-lo a targetes o a blocs. En Bit només pot portar una caixa cada vegada.|Primero pensad el plan con palabras, después pasadlo a tarjetas o a bloques. Bit solo puede llevar una caja cada vez.",
      items: [
        { q: "Mira el mapa. En Bit comença mirant amunt. Escriu amb paraules els trossos per repartir les dues caixes.|Mira el mapa. Bit empieza mirando arriba. Escribe con palabras los trozos para repartir las dos cajas.",
          w: { map: ['H...b', '.....', '..R..', '.....', '^b..H'] }, solProg: 'r f p f f f d l f f f f p l f f f f d',
          sol: "Una solució: 1) gira a la dreta i avança fins a la caixa del costat; 2) agafa-la; 3) avança fins a la casa de baix a la dreta; 4) deixa-la; 5) gira a l'esquerra i puja fins a la caixa de dalt; 6) agafa-la; 7) gira a l'esquerra i avança fins a la casa de dalt a l'esquerra; 8) deixa-la.|Una solución: 1) gira a la derecha y avanza hasta la caja de al lado; 2) cógela; 3) avanza hasta la casa de abajo a la derecha; 4) déjala; 5) gira a la izquierda y sube hasta la caja de arriba; 6) cógela; 7) gira a la izquierda y avanza hasta la casa de arriba a la izquierda; 8) déjala." },
        { q: "Escriu les targetes dels quatre primers trossos (la primera caixa).|Escribe las tarjetas de los cuatro primeros trozos (la primera caja).",
          w: { map: ['H...b', '.....', '..R..', '.....', '^b..H'] },
          sol: "Tros 1: Gira a la dreta, Endavant · Tros 2: Agafa · Tros 3: Endavant ×3 · Tros 4: Deixa.|Trozo 1: Gira a la derecha, Adelante · Trozo 2: Coge · Trozo 3: Adelante ×3 · Trozo 4: Deja." },
        { q: "En Bit porta una caixa i passa per una casella on n'hi ha una altra. La pot agafar? Per què?|Bit lleva una caja y pasa por una casilla donde hay otra. ¿La puede coger? ¿Por qué?",
          sol: "No: només pot portar una caixa cada vegada. Primer ha de deixar la que porta en una casa.|No: solo puede llevar una caja cada vez. Primero tiene que dejar la que lleva en una casa." },
        { q: "El teu pla per al gran repartiment de l'app (3 caixes i 3 cases): escriu en quin ordre repartiràs les caixes i a quina casa portaràs cadascuna.|Tu plan para el gran reparto de la app (3 cajas y 3 casas): escribe en qué orden repartirás las cajas y a qué casa llevarás cada una.",
          sol: "Resposta oberta. Comproveu que el pla alterna sempre caixa → casa i que cada tros comença on acaba l'anterior.|Respuesta abierta. Comprobad que el plan alterna siempre caja → casa y que cada trozo empieza donde termina el anterior." }
      ] }
  ]
};

/* ==================== Tech Robot · unitat 2 «Repeteix!» ==================== */
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

/* ==================== Tech Robot · unitat 3 «Llums, sons i botons» ==================== */
/* Tech Robot · unitat 3 «Llums, sons i botons» · guia del professorat (r3-1 … r3-4) */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Llums de colors ---------- */
  'r3-1': {
    obj: [
      "L'alumne/a fa servir el bloc Llum per encendre el llum d'en Bit del color que demana el repte.|El alumno/a usa el bloque Luz para encender la luz de Bit del color que pide el reto.",
      "L'alumne/a programa una seqüència de llums en l'ordre correcte i explica que, si canvia l'ordre, canvia el missatge (semàfor, far).|El alumno/a programa una secuencia de luces en el orden correcto y explica que, si cambia el orden, cambia el mensaje (semáforo, faro).",
      "L'alumne/a combina moviments i llums perquè el llum s'encengui just quan en Bit arriba a una casella.|El alumno/a combina movimientos y luces para que la luz se encienda justo cuando Bit llega a una casilla.",
      "L'alumne/a fa pampallugues posant dos llums diferents dins d'un bucle «Repeteix».|El alumno/a hace parpadeos poniendo dos luces diferentes dentro de un bucle «Repite»."
    ],
    comp: [
      "Competència digital (CD5): resoldre problemes senzills amb programació per blocs, fent servir sortides del robot (llums)|Competencia digital (CD5): resolver problemas sencillos con programación por bloques, usando salidas del robot (luces)",
      "Pensament computacional: seqüència d'accions, ordre i bucles amb patrons que es repeteixen|Pensamiento computacional: secuencia de acciones, orden y bucles con patrones que se repiten",
      "Matemàtiques: patrons de repetició (AB AB AB) i comptatge de repeticions|Matemáticas: patrones de repetición (AB AB AB) y conteo de repeticiones",
      "Coneixement del medi: senyals lluminosos de la vida diària (semàfors, fars) i educació viària|Conocimiento del medio: señales luminosas de la vida diaria (semáforos, faros) y educación vial"
    ],
    vocab: [
      ["Llum|Luz", "Una sortida d'en Bit: s'encén del color que diu el bloc i es queda encesa fins que un altre bloc la canvia.|Una salida de Bit: se enciende del color que dice el bloque y se queda encendida hasta que otro bloque la cambia."],
      ["Seqüència de llums|Secuencia de luces", "Diversos llums que s'encenen un darrere l'altre, en un ordre concret.|Varias luces que se encienden una detrás de otra, en un orden concreto."],
      ["Senyal|Señal", "Un missatge que es dona amb llums, sons o gestos, com el del semàfor o el del far.|Un mensaje que se da con luces, sonidos o gestos, como el del semáforo o el del faro."],
      ["Pampallugues|Parpadeos", "Quan un llum canvia molt de pressa entre dos colors (o entre encès i apagat).|Cuando una luz cambia muy deprisa entre dos colores (o entre encendida y apagada)."],
      ["Bucle|Bucle", "El bloc «Repeteix»: fa diverses vegades els blocs que té a dins (repàs de la unitat 2).|El bloque «Repite»: hace varias veces los bloques que tiene dentro (repaso de la unidad 2)."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Llums de colors»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Luces de colores»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per a cada grup de 3: quatre fulls de colors (verd, groc, vermell i blau) o les targetes de llums impreses|Para cada grupo de 3: cuatro hojas de colores (verde, amarillo, rojo y azul) o las tarjetas de luces impresas",
        "Opcional: una llanterna per fer de far a la pausa activa|Opcional: una linterna para hacer de faro en la pausa activa"
      ],
      imprimir: ["Targetes de llums|Tarjetas de luces", "Fitxa: llums i senyals|Ficha: luces y señales"],
      prep: [
        "Imprimir i retallar un paquet de targetes de llums per grup de 3. Si les plastifiqueu, les fareu servir a tota la unitat.|Imprimir y recortar un paquete de tarjetas de luces por grupo de 3. Si las plastificáis, las usaréis en toda la unidad.",
        "Escriure a la pissarra el «codi del far» de la diapositiva 10 (o deixar-la projectada durant l'activitat).|Escribir en la pizarra el «código del faro» de la diapositiva 10 (o dejarla proyectada durante la actividad).",
        "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada.",
        "Provar abans la demostració de la diapositiva 7 per saber en quines caselles s'encenen els llums.|Probar antes la demostración de la diapositiva 7 para saber en qué casillas se encienden las luces."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i la festa major|Recordamos y la fiesta mayor", fase: 'inici',
        fa: "Fes la pregunta de repàs sobre els bucles i recull dues o tres respostes. Explica la història de la unitat: s'acosta la festa major de l'illa i el far del port s'ha espatllat. Pregunta on veuen llums que donen missatges i apunta les respostes a la pissarra.|Haz la pregunta de repaso sobre los bucles y recoge dos o tres respuestas. Explica la historia de la unidad: se acerca la fiesta mayor de la isla y el faro del puerto se ha estropeado. Pregunta dónde ven luces que dan mensajes y apunta las respuestas en la pizarra.",
        diu: ["Quin programa fa avançar en Bit 4 caselles amb menys blocs?|¿Qué programa hace avanzar a Bit 4 casillas con menos bloques?",
          "On veieu llums que us diuen alguna cosa? Al carrer, a casa, al cotxe…|¿Dónde veis luces que os dicen algo? En la calle, en casa, en el coche…",
          "Avui en Bit aprendrà a encendre el seu llum i a fer senyals.|Hoy Bit aprenderá a encender su luz y a hacer señales."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades o abaixades.|Todavía no: pantallas apagadas o bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El bloc Llum i les seqüències|El bloque Luz y las secuencias", fase: 'teoria',
        fa: "Presenta el bloc Llum amb l'animació i remarca que no mou en Bit. Fes la demostració de la seqüència i pregunta quin llum s'encendrà primer. Relaciona-ho amb el semàfor i el far. A la demostració del camí, la classe assenyala on creu que s'encendrà cada llum abans d'executar-la. Acaba amb les pampallugues: per què un sol llum dins d'un bucle no parpelleja?|Presenta el bloque Luz con la animación y remarca que no mueve a Bit. Haz la demostración de la secuencia y pregunta qué luz se encenderá primero. Relaciónalo con el semáforo y el faro. En la demostración del camino, la clase señala dónde cree que se encenderá cada luz antes de ejecutarla. Termina con los parpadeos: ¿por qué una sola luz dentro de un bucle no parpadea?",
        diu: ["El bloc Llum mou en Bit? Què fa, doncs?|¿El bloque Luz mueve a Bit? ¿Qué hace, entonces?",
          "Si el semàfor fes vermell, groc i verd, què pensarien els cotxes?|Si el semáforo hiciera rojo, amarillo y verde, ¿qué pensarían los coches?",
          "En quina casella s'encendrà el llum groc? Assenyaleu-la abans d'executar.|¿En qué casilla se encenderá la luz amarilla? Señaladla antes de ejecutar.",
          "Si poso només un llum groc dins del bucle, parpellejarà?|Si pongo solo una luz amarilla dentro del bucle, ¿parpadeará?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Fars i vaixells|Faros y barcos", fase: 'desconnectat',
        fa: "Fes grups de 3 amb tres papers: programador/a, far i vaixell. El programador/a posa en fila les targetes de llums (i, si vol, una targeta «Repeteix») sense que el vaixell les vegi. El far aixeca els fulls de colors exactament en aquell ordre. El vaixell mira el senyal, el busca al codi del far de la pissarra i diu què vol dir. Si el vaixell l'endevina, el programa era bo; si no, el grup busca el bug. Després de cada senyal, els papers roten.|Haz grupos de 3 con tres papeles: programador/a, faro y barco. El programador/a pone en fila las tarjetas de luces (y, si quiere, una tarjeta «Repite») sin que el barco las vea. El faro levanta las hojas de colores exactamente en ese orden. El barco mira la señal, la busca en el código del faro de la pizarra y dice qué quiere decir. Si el barco la adivina, el programa era bueno; si no, el grupo busca el bug. Después de cada señal, los papeles rotan.",
        diu: ["El far només aixeca el color que diu la targeta, en ordre.|El faro solo levanta el color que dice la tarjeta, en orden.",
          "Amb una targeta «Repeteix 3 vegades», quants colors ha d'aixecar el far?|Con una tarjeta «Repite 3 veces», ¿cuántos colores tiene que levantar el faro?",
          "El vaixell no ho ha entès? Busqueu on és el bug: a les targetes o al far?|¿El barco no lo ha entendido? Buscad dónde está el bug: ¿en las tarjetas o en el faro?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança al seu ritme fins a l'«Investiga». Passeja per l'aula i fixa't en qui posa els blocs Llum abans dels Endavant: demana-li que segueixi en Bit amb el dit i digui on és quan s'encén el llum. Al pas «El semàfor de casa», que toquin «Ara no» i el facin a casa.|Cada alumno/a abre la sesión y avanza a su ritmo hasta el «Investiga». Pasea por el aula y fíjate en quién pone los bloques Luz antes de los Adelante: pídele que siga a Bit con el dedo y diga dónde está cuando se enciende la luz. En el paso «El semáforo de casa», que toquen «Ahora no» y lo hagan en casa.",
        diu: ["On és en Bit quan s'executa aquest bloc Llum? Segueix-lo amb el dit.|¿Dónde está Bit cuando se ejecuta este bloque Luz? Síguelo con el dedo.",
          "Mira els llums de dalt del món: quins ja estan bé i quin falla?|Mira las luces de arriba del mundo: ¿cuáles ya están bien y cuál falla?",
          "A la pregunta «On acabarà?», compta quantes vegades es repeteix el bucle.|En la pregunta «¿Dónde terminará?», cuenta cuántas veces se repite el bucle."],
        slides: ['s11'], app: "Del «Recorda» a l'«Investiga»: la pregunta dels bucles, les dues històries del far, les targetes de «Descobreix», ordenar el semàfor, «El semàfor de casa» (per a casa), el color final, «On acabarà?» i el bloc fora de lloc.|Del «Recuerda» al «Investiga»: la pregunta de los bucles, las dos historias del faro, las tarjetas de «Descubre», ordenar el semáforo, «El semáforo de casa» (para casa), el color final, «¿Dónde terminará?» y el bloque fuera de lugar.", org: "Individual|Individual" },
      { min: 10, t: "Reptes de llums|Retos de luces", fase: 'ordinador',
        fa: "Feu la pausa activa del semàfor tots junts. Després programa amb la classe la demostració de la diapositiva 12: un senyal de far amb un bucle. Deixa'ls fer els cinc reptes. En el del far, si algú posa sis blocs, recorda-li que només en pot fer servir tres: quin tros es repeteix?|Haced la pausa activa del semáforo todos juntos. Después programa con la clase la demostración de la diapositiva 12: una señal de faro con un bucle. Deja que hagan los cinco retos. En el del faro, si alguien pone seis bloques, recuérdale que solo puede usar tres: ¿qué trozo se repite?",
        diu: ["Quin tros del senyal es repeteix? Quantes vegades?|¿Qué trozo de la señal se repite? ¿Cuántas veces?",
          "Fes-ho a trossos: primer arriba a la casella i després encén el llum.|Hazlo a trozos: primero llega a la casilla y después enciende la luz.",
          "En el repte del bug, executa pas a pas i mira quin llum surt malament.|En el reto del bug, ejecuta paso a paso y mira qué luz sale mal."],
        slides: ['s12', 's13'], app: "«Pausa activa» i els cinc reptes: el semàfor, el far del moll, les caselles de colors, ordenar els blocs i el bug dels llums del moll.|«Pausa activa» y los cinco retos: el semáforo, el faro del muelle, las casillas de colores, ordenar los bloques y el bug de las luces del muelle.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el far de la festa|Crea: el faro de la fiesta", fase: 'crea',
        fa: "Cada alumne/a porta en Bit fins al far i inventa un espectacle de llums amb almenys tres blocs Llum i un bucle. En parelles, abans d'executar, el company/a diu quins colors creu que veurà.|Cada alumno/a lleva a Bit hasta el faro e inventa un espectáculo de luces con al menos tres bloques Luz y un bucle. Por parejas, antes de ejecutar, el compañero/a dice qué colores cree que verá.",
        diu: ["Quin senyal farà el teu far? Explica'l amb paraules.|¿Qué señal hará tu faro? Explícala con palabras.",
          "Abans d'executar el programa del company/a, digues quins colors veuràs.|Antes de ejecutar el programa del compañero/a, di qué colores verás."],
        slides: ['s14'], app: "Pas «Crea»: El far de la festa.|Paso «Crea»: El faro de la fiesta.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas de la sesión con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
        diu: ["Què fa el bloc Llum? I què no fa?|¿Qué hace el bloque Luz? ¿Y qué no hace?",
          "Com es fan pampallugues amb pocs blocs?|¿Cómo se hacen parpadeos con pocos bloques?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el bloc Llum abans dels Endavant i el llum s'encén abans d'arribar a la casella.|Pone el bloque Luz antes de los Adelante y la luz se enciende antes de llegar a la casilla.",
        "Demana-li que executi pas a pas i digui on és en Bit quan s'encén el llum. Que trobi ell/a mateix/a on ha d'anar el bloc.|Pídele que ejecute paso a paso y diga dónde está Bit cuando se enciende la luz. Que encuentre él/ella mismo/a dónde tiene que ir el bloque."],
      ["Creu que el bloc Llum fa moure en Bit, o espera que en Bit avanci.|Cree que el bloque Luz hace mover a Bit, o espera que Bit avance.",
        "Que executi un programa amb un sol bloc Llum i miri si en Bit canvia de casella. Recorda-li que Llum és una acció, com Agafa i Deixa.|Que ejecute un programa con un solo bloque Luz y mire si Bit cambia de casilla. Recuérdale que Luz es una acción, como Coge y Deja."],
      ["Per fer pampallugues posa un sol llum dins del bucle.|Para hacer parpadeos pone una sola luz dentro del bucle.",
        "Pregunta: de quin color és el llum la primera vegada? I la segona? Si sempre és el mateix, sembla que parpellegi?|Pregunta: ¿de qué color es la luz la primera vez? ¿Y la segunda? Si siempre es la misma, ¿parece que parpadee?"],
      ["Al repte del far posa sis blocs Llum i es queda sense blocs.|En el reto del faro pone seis bloques Luz y se queda sin bloques.",
        "Que digui el senyal en veu alta i escolti què es repeteix: «groc, blau… groc, blau…». Aquest tros va dins del bucle.|Que diga la señal en voz alta y escuche qué se repite: «amarillo, azul… amarillo, azul…». Ese trozo va dentro del bucle."],
      ["No troba com canviar el color i deixa tots els llums vermells.|No encuentra cómo cambiar el color y deja todas las luces rojas.",
        "Ensenya-li a tocar el bloc: apareix el botó «Canvia el color». Cada toc passa al color següent.|Enséñale a tocar el bloque: aparece el botón «Cambia el color». Cada toque pasa al color siguiente."]
    ],
    diff: {
      mes: "Inventar un senyal de far amb dos bucles seguits (per exemple, groc-blau tres vegades i després vermell-verd dues vegades) i explicar-lo a un company/a perquè l'endevini. Al projecte, fer que en Bit encengui un llum a cada casella del camí.|Inventar una señal de faro con dos bucles seguidos (por ejemplo, amarillo-azul tres veces y después rojo-verde dos veces) y explicársela a un compañero/a para que la adivine. En el proyecto, hacer que Bit encienda una luz en cada casilla del camino.",
      menys: "Tenir les targetes de llums a la taula: primer col·loca les targetes en ordre i després les copia com a blocs. Començar pel repte del semàfor i deixar el bucle per al final, amb ajuda.|Tener las tarjetas de luces en la mesa: primero coloca las tarjetas en orden y después las copia como bloques. Empezar por el reto del semáforo y dejar el bucle para el final, con ayuda."
    },
    aval: {
      ticket: ["Què fa el bloc Llum? Mou en Bit?|¿Qué hace el bloque Luz? ¿Mueve a Bit?",
        "Com faries que el llum fes pampallugues groc i blau amb pocs blocs?|¿Cómo harías que la luz hiciera parpadeos amarillo y azul con pocos bloques?"],
      rubric: [
        ["Bloc Llum i colors|Bloque Luz y colores", "Encén els llums que demana el repte i en canvia el color sense ajuda.|Enciende las luces que pide el reto y cambia su color sin ayuda.", "Posa blocs Llum, però necessita ajuda per triar el color o l'ordre.|Pone bloques Luz, pero necesita ayuda para elegir el color o el orden."],
        ["Llums i moviment|Luces y movimiento", "Col·loca cada bloc Llum just quan en Bit arriba a la casella.|Coloca cada bloque Luz justo cuando Bit llega a la casilla.", "Encén els llums correctes, però de vegades abans d'arribar a la casella.|Enciende las luces correctas, pero a veces antes de llegar a la casilla."],
        ["Pampallugues amb bucles|Parpadeos con bucles", "Fa servir un bucle amb dos llums diferents i tria bé el nombre de repeticions.|Usa un bucle con dos luces diferentes y elige bien el número de repeticiones.", "Fa el senyal amb molts blocs seguits o amb un sol llum dins del bucle.|Hace la señal con muchos bloques seguidos o con una sola luz dentro del bucle."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «El semàfor de casa»: una persona ensenya colors i l'altra hi reacciona caminant, anant a poc a poc o parant. Després podeu inventar un senyal de far amb palmades.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «El semáforo de casa»: una persona enseña colores y la otra reacciona caminando, yendo despacio o parando. Después podéis inventar una señal de faro con palmadas.",
    slides: [
      { id: 's1', k: 'portada', t: "Llums de colors|Luces de colores", x: "Avui en Bit aprendrà a encendre el seu llum i a fer senyals per a la festa major.|Hoy Bit aprenderá a encender su luz y a hacer señales para la fiesta mayor.",
        nota: "Presenta la nova unitat: llums, sons i botons. Avui comencem pels llums.|Presenta la nueva unidad: luces, sonidos y botones. Hoy empezamos por las luces." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Quin programa fa avançar en Bit 4 caselles amb menys blocs?|¿Qué programa hace avanzar a Bit 4 casillas con menos bloques?", blocks: ['Repeteix 4 vegades|Repite 4 veces', 'Endavant|Adelante'],
        nota: "Resposta: «Repeteix 4 vegades» amb un Endavant a dins. Avui farem servir els bucles amb llums.|Respuesta: «Repite 4 veces» con un Adelante dentro. Hoy usaremos los bucles con luces." },
      { id: 's3', k: 'concepte', t: "S'acosta la festa major|Se acerca la fiesta mayor", punts: ["El far del port s'ha espatllat.|El faro del puerto se ha estropeado.", "En Bit té un llum a l'antena i un altre al pit.|Bit tiene una luz en la antena y otra en el pecho.", "Avui el programarem per fer senyals.|Hoy lo programaremos para hacer señales."],
        nota: "Pregunta on veuen llums que donen missatges: semàfors, fars, l'ambulància, el llum del forn… Apunta-ho a la pissarra.|Pregunta dónde ven luces que dan mensajes: semáforos, faros, la ambulancia, la luz del horno… Apúntalo en la pizarra." },
      { id: 's4', k: 'anim', t: "El bloc Llum|El bloque Luz", anim: 'u3light', x: "Un bloc Llum encén un color. El llum es queda encès fins que un altre bloc el canvia.|Un bloque Luz enciende un color. La luz se queda encendida hasta que otro bloque la cambia.",
        nota: "Remarca que el bloc Llum no mou en Bit: és una acció, com Agafa i Deixa de la unitat 1.|Remarca que el bloque Luz no mueve a Bit: es una acción, como Coge y Deja de la unidad 1." },
      { id: 's5', k: 'demo', t: "Llums en ordre|Luces en orden", x: "Quin llum s'encendrà primer? I l'últim?|¿Qué luz se encenderá primero? ¿Y la última?",
        demo: { w: { map: ['...', '.v.', '...'], lights: ['g', 'y', 'r'] }, prog: 'light:g light:y light:r' },
        nota: "Abans d'executar, que diguin els colors en veu alta. Fes notar els llums de dalt del món: es van posant de color quan surten bé.|Antes de ejecutar, que digan los colores en voz alta. Haz notar las luces de arriba del mundo: se van poniendo de color cuando salen bien." },
      { id: 's6', k: 'anim', t: "Llums que donen missatges|Luces que dan mensajes", anim: 'u3traffic', x: "El semàfor i el far parlen amb llums. Cada color, i cada ordre, vol dir una cosa.|El semáforo y el faro hablan con luces. Cada color, y cada orden, quiere decir una cosa.",
        nota: "Pregunta què passaria si el semàfor canviés l'ordre dels colors. Aprofita per recordar com es creua el carrer amb seguretat.|Pregunta qué pasaría si el semáforo cambiara el orden de los colores. Aprovecha para recordar cómo se cruza la calle con seguridad." },
      { id: 's7', k: 'demo', t: "Pensa abans d'executar|Piensa antes de ejecutar", x: "En quina casella s'encendrà el llum groc? I el blau?|¿En qué casilla se encenderá la luz amarilla? ¿Y la azul?",
        demo: { w: { map: ['>#y#.', '...#u'], lights: ['y', 'u'] }, prog: 'f f light:y f r f l f light:u' },
        nota: "Que tothom assenyali les caselles abans d'executar. Resposta: el groc a la casella groga i el blau a la blava, perquè cada Llum va just després dels Endavant que hi porten.|Que todos señalen las casillas antes de ejecutar. Respuesta: la amarilla en la casilla amarilla y la azul en la azul, porque cada Luz va justo después de los Adelante que llevan allí." },
      { id: 's8', k: 'anim', t: "Pampallugues amb un bucle|Parpadeos con un bucle", anim: 'u3blink', x: "Dos llums diferents dins d'un Repeteix fan pampallugues.|Dos luces diferentes dentro de un Repite hacen parpadeos.", blocks: ['Repeteix 3 vegades|Repite 3 veces', 'Llum groc|Luz amarilla', 'Llum blau|Luz azul'],
        nota: "Pregunta: si dins del bucle només hi poso Llum groc, parpellejarà? No: es queda sempre groc. Calen dos colors que s'alternin.|Pregunta: si dentro del bucle solo pongo Luz amarilla, ¿parpadeará? No: se queda siempre amarilla. Hacen falta dos colores que se alternen." },
      { id: 's9', k: 'activitat', t: "Fars i vaixells|Faros y barcos", timer: 12, punts: ["Programador/a: posa les targetes de llums en fila, d'amagat.|Programador/a: pone las tarjetas de luces en fila, a escondidas.", "Far: aixeca els fulls de colors en aquell ordre exacte.|Faro: levanta las hojas de colores en ese orden exacto.", "Vaixell: busca el senyal al codi del far i diu què vol dir.|Barco: busca la señal en el código del faro y dice qué quiere decir.", "Després de cada senyal, canvieu els papers.|Después de cada señal, cambiad los papeles."],
        nota: "Si un grup acaba de pressa, que faci un senyal amb una targeta «Repeteix» i el vaixell compti quants colors veu.|Si un grupo termina deprisa, que haga una señal con una tarjeta «Repite» y el barco cuente cuántos colores ve." },
      { id: 's10', k: 'concepte', t: "El codi del far|El código del faro", punts: ["Groc, groc → «Port obert: podeu entrar»|Amarillo, amarillo → «Puerto abierto: podéis entrar»", "Vermell, vermell → «Espereu, hi ha un altre vaixell»|Rojo, rojo → «Esperad, hay otro barco»", "Groc, blau, groc, blau → «Veniu a la festa!»|Amarillo, azul, amarillo, azul → «¡Venid a la fiesta!»", "Verd → «Bon viatge!»|Verde → «¡Buen viaje!»"],
        nota: "És un codi inventat per a l'activitat. Deixa'l projectat; els grups poden inventar senyals nous i afegir-los a la pissarra.|Es un código inventado para la actividad. Déjalo proyectado; los grupos pueden inventar señales nuevas y añadirlas a la pizarra." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Llums de colors».|Abre la sesión «Luces de colores».", "Fes la missió, «Descobreix» i «Mans a l'obra».|Haz la misión, «Descubre» y «Manos a la obra».", "Abans d'executar, pensa on serà en Bit quan s'encengui cada llum.|Antes de ejecutar, piensa dónde estará Bit cuando se encienda cada luz.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Al pas «El semàfor de casa», que toquin «Ara no»: és per fer-lo a casa amb la família.|En el paso «El semáforo de casa», que toquen «Ahora no»: es para hacerlo en casa con la familia." },
      { id: 's12', k: 'demo', t: "Programem junts|Programemos juntos", x: "Senyal: vermell, blau, vermell, blau. Com el fem amb només 3 blocs?|Señal: rojo, azul, rojo, azul. ¿Cómo la hacemos con solo 3 bloques?",
        demo: { w: { map: ['~~~~~', '###>~', '~~~~~'], lights: ['r', 'u', 'r', 'u'] }, prog: '2{ light:r light:u }' },
        nota: "Primer escriviu-lo a la pissarra amb quatre blocs. Després pregunta quin tros es repeteix i substituïu-lo per un bucle.|Primero escribidlo en la pizarra con cuatro bloques. Después pregunta qué trozo se repite y sustituidlo por un bucle." },
      { id: 's13', k: 'repte', t: "Reptes de llums|Retos de luces", timer: 10, punts: ["1. El semàfor de la plaça|1. El semáforo de la plaza", "2. El far del moll (3 blocs!)|2. El faro del muelle (¡3 bloques!)", "3. Les caselles de colors|3. Las casillas de colores", "4. Ordena els blocs|4. Ordena los bloques", "5. El bug dels llums del moll|5. El bug de las luces del muelle"],
        nota: "Si algú s'encalla, pregunta: on és en Bit quan s'encén aquest llum? Quin tros es repeteix?|Si alguien se atasca, pregunta: ¿dónde está Bit cuando se enciende esta luz? ¿Qué trozo se repite?" },
      { id: 's14', k: 'activitat', t: "Crea: el far de la festa|Crea: el faro de la fiesta", timer: 5, x: "Porta en Bit fins al far i fes un espectacle amb almenys 3 llums i un bucle.|Lleva a Bit hasta el faro y haz un espectáculo con al menos 3 luces y un bucle.",
        nota: "Celebra que cada far fa un senyal diferent. Abans d'executar, el company/a endevina els colors.|Celebra que cada faro hace una señal diferente. Antes de ejecutar, el compañero/a adivina los colores." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["El bloc Llum encén un color i no mou en Bit.|El bloque Luz enciende un color y no mueve a Bit.", "Els llums s'encenen en ordre: l'ordre canvia el missatge.|Las luces se encienden en orden: el orden cambia el mensaje.", "Dos llums dins d'un bucle fan pampallugues.|Dos luces dentro de un bucle hacen parpadeos."],
        nota: "Avança que a la propera sessió en Bit farà música per a la banda de la festa.|Avanza que en la próxima sesión Bit hará música para la banda de la fiesta." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què fa el bloc Llum? Mou en Bit?|¿Qué hace el bloque Luz? ¿Mueve a Bit?", "Com faries pampallugues groc i blau amb pocs blocs?|¿Cómo harías parpadeos amarillo y azul con pocos bloques?"],
        nota: "Respostes: encén el llum del color triat i no el mou; dos llums (groc i blau) dins d'un «Repeteix».|Respuestas: enciende la luz del color elegido y no lo mueve; dos luces (amarilla y azul) dentro de un «Repite»." }
    ],
    print: [
      { id: 'p1', t: "Targetes de llums|Tarjetas de luces", k: 'targetes',
        intro: "Un paquet per grup de 3. Retalleu-les i, si podeu, plastifiqueu-les: les farem servir a tota la unitat. Les de «Repeteix» van davant dels llums que es repeteixen.|Un paquete por grupo de 3. Recortadlas y, si podéis, plastificadlas: las usaremos en toda la unidad. Las de «Repite» van delante de las luces que se repiten.",
        items: [
          { t: "Llum verd 🟢|Luz verde 🟢", n: 3 },
          { t: "Llum groc 🟡|Luz amarilla 🟡", n: 3 },
          { t: "Llum vermell 🔴|Luz roja 🔴", n: 3 },
          { t: "Llum blau 🔵|Luz azul 🔵", n: 3 },
          { t: "Repeteix 2 vegades 🔁|Repite 2 veces 🔁", n: 1 },
          { t: "Repeteix 3 vegades 🔁|Repite 3 veces 🔁", n: 1 }
        ] },
      { id: 'p2', t: "Fitxa: llums i senyals|Ficha: luces y señales", k: 'fitxa',
        intro: "Llegeix cada programa amb calma i pensa què farà en Bit abans de respondre.|Lee cada programa con calma y piensa qué hará Bit antes de responder.",
        items: [
          { q: "Quins llums s'encenen, en ordre? Pinta'ls o escriu-los.|¿Qué luces se encienden, en orden? Píntalas o escríbelas.", prog: '2{ light:y light:u } light:r',
            sol: "Groc, blau, groc, blau i vermell.|Amarillo, azul, amarillo, azul y rojo." },
          { q: "De quin color es queda el llum quan s'acaba el programa?|¿De qué color se queda la luz cuando termina el programa?", prog: '3{ light:r light:g }',
            sol: "Verd: és l'últim bloc que s'executa.|Verde: es el último bloque que se ejecuta." },
          { q: "En Bit mira a la dreta. Escriu un programa perquè encengui el llum blau a la casella blava, el groc a la groga i acabi a la bandera.|Bit mira a la derecha. Escribe un programa para que encienda la luz azul en la casilla azul, la amarilla en la amarilla y termine en la bandera.",
            w: { map: ['>#u.', '..#.', '..yF'], lights: ['u', 'y'] }, solProg: 'f f light:u r f f light:y l f',
            sol: "Una solució: Endavant ×2, Llum blau, Gira a la dreta, Endavant ×2, Llum groc, Gira a l'esquerra, Endavant.|Una solución: Adelante ×2, Luz azul, Gira a la derecha, Adelante ×2, Luz amarilla, Gira a la izquierda, Adelante." },
          { q: "Inventa el senyal del teu far: escriu una seqüència de llums i després fes-la més curta amb un «Repeteix».|Inventa la señal de tu faro: escribe una secuencia de luces y después hazla más corta con un «Repite».",
            sol: "Resposta oberta. Comproveu que dins del bucle hi ha el tros que es repeteix i que el nombre de vegades és el correcte.|Respuesta abierta. Comprobad que dentro del bucle está el trozo que se repite y que el número de veces es el correcto." }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Música amb en Bit ---------- */
  'r3-2': {
    obj: [
      "L'alumne/a fa sonar notes amb el bloc Nota i diu quina nota és més greu o més aguda (de do a si).|El alumno/a hace sonar notas con el bloque Nota y dice qué nota es más grave o más aguda (de do a si).",
      "L'alumne/a programa una melodia donada en l'ordre correcte i explica que, si canvia l'ordre, la melodia canvia.|El alumno/a programa una melodía dada en el orden correcto y explica que, si cambia el orden, la melodía cambia.",
      "L'alumne/a fa servir un bucle per repetir un ritme o una tornada amb pocs blocs.|El alumno/a usa un bucle para repetir un ritmo o un estribillo con pocos bloques.",
      "L'alumne/a combina moviment i notes perquè cada nota soni a la casella que toca.|El alumno/a combina movimiento y notas para que cada nota suene en la casilla que toca."
    ],
    comp: [
      "Competència digital (CD5): crear seqüències sonores amb programació per blocs|Competencia digital (CD5): crear secuencias sonoras con programación por bloques",
      "Pensament computacional: seqüència, patrons i bucles aplicats a la música|Pensamiento computacional: secuencia, patrones y bucles aplicados a la música",
      "Educació artística (música): les notes de l'escala, agut i greu, ritme i repetició|Educación artística (música): las notas de la escala, agudo y grave, ritmo y repetición",
      "Matemàtiques: patrons que es repeteixen i comptatge de repeticions|Matemáticas: patrones que se repiten y conteo de repeticiones"
    ],
    vocab: [
      ["Nota|Nota", "Un so musical. N'hi ha set: do, re, mi, fa, sol, la i si.|Un sonido musical. Hay siete: do, re, mi, fa, sol, la y si."],
      ["Melodia|Melodía", "Una seqüència de notes, una darrere l'altra, en un ordre concret.|Una secuencia de notas, una detrás de otra, en un orden concreto."],
      ["Greu i agut|Grave y agudo", "Greu és un so baix (com un tambor gran); agut és un so alt (com el xiulet d'un ocell).|Grave es un sonido bajo (como un tambor grande); agudo es un sonido alto (como el silbido de un pájaro)."],
      ["Ritme|Ritmo", "Un grup de sons que es repeteix, com quan piquem de mans seguint una cançó.|Un grupo de sonidos que se repite, como cuando damos palmadas siguiendo una canción."],
      ["Tornada|Estribillo", "El tros d'una cançó que torna a sonar diverses vegades.|El trozo de una canción que vuelve a sonar varias veces."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Música amb en Bit» i, si pot ser, auriculars|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Música con Bit» y, si puede ser, auriculares",
        "Projector, altaveus i la presentació d'aquesta sessió|Proyector, altavoces y la presentación de esta sesión",
        "Les targetes de notes impreses (un conjunt de set notes per grup) i les targetes «Repeteix» de la sessió anterior|Las tarjetas de notas impresas (un conjunto de siete notas por grupo) y las tarjetas «Repite» de la sesión anterior",
        "Opcional: un instrument de l'aula (xilòfon, metal·lòfon o teclat) per fer sonar les notes|Opcional: un instrumento del aula (xilófono, metalófono o teclado) para hacer sonar las notas"
      ],
      imprimir: ["Targetes de notes|Tarjetas de notas", "Fitxa: melodies d'en Bit|Ficha: melodías de Bit"],
      prep: [
        "Imprimir i retallar les targetes de notes: un conjunt de set notes (do… si) per grup, més targetes repetides per fer melodies.|Imprimir y recortar las tarjetas de notas: un conjunto de siete notas (do… si) por grupo, más tarjetas repetidas para hacer melodías.",
        "Comprovar que els ordinadors tenen el so activat (i els auriculars connectats) abans de la classe.|Comprobar que los ordenadores tienen el sonido activado (y los auriculares conectados) antes de la clase.",
        "Si hi ha un instrument a l'aula, provar abans les notes do, re, mi, fa, sol, la i si.|Si hay un instrumento en el aula, probar antes las notas do, re, mi, fa, sol, la y si.",
        "Preparar l'espai per a dues files de set alumnes (el xilòfon humà) davant de la pissarra.|Preparar el espacio para dos filas de siete alumnos (el xilófono humano) delante de la pizarra."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i la banda de la festa|Recordamos y la banda de la fiesta", fase: 'inici',
        fa: "Fes la pregunta de repàs dels llums dins d'un bucle. Explica la història: a la banda de la festa li falta un músic i en Bit s'ofereix a tocar. Pregunta quines cançons de la festa major coneixen i si tenen algun tros que es repeteixi.|Haz la pregunta de repaso de las luces dentro de un bucle. Explica la historia: a la banda de la fiesta le falta un músico y Bit se ofrece a tocar. Pregunta qué canciones de la fiesta mayor conocen y si tienen algún trozo que se repita.",
        diu: ["Repeteix 2 vegades: vermell, verd. Quins llums s'encenen?|Repite 2 veces: rojo, verde. ¿Qué luces se encienden?",
          "Coneixeu alguna cançó amb un tros que torna a sonar? Com es diu aquest tros?|¿Conocéis alguna canción con un trozo que vuelve a sonar? ¿Cómo se llama ese trozo?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Notes, melodies i ritmes|Notas, melodías y ritmos", fase: 'teoria',
        fa: "Presenta les set notes amb l'animació del xilòfon i canteu-les junts pujant i baixant. Fes la pregunta de sons greus i aguts de la vida diària. Executa la melodia i compara do-mi-sol amb sol-mi-do: quina puja i quina baixa? Mostra el ritme amb bucle i, a la demostració del camí, que la classe digui a quina estrella sonarà cada nota abans d'executar.|Presenta las siete notas con la animación del xilófono y cantadlas juntos subiendo y bajando. Haz la pregunta de sonidos graves y agudos de la vida diaria. Ejecuta la melodía y compara do-mi-sol con sol-mi-do: ¿cuál sube y cuál baja? Muestra el ritmo con bucle y, en la demostración del camino, que la clase diga en qué estrella sonará cada nota antes de ejecutar.",
        diu: ["Quin so és més agut, un ocell o un camió?|¿Qué sonido es más agudo, un pájaro o un camión?",
          "Do, mi, sol i sol, mi, do són les mateixes notes. Sonen igual?|Do, mi, sol y sol, mi, do son las mismas notas. ¿Suenan igual?",
          "Quantes vegades sona el do en aquest ritme? Compteu-ho amb els dits.|¿Cuántas veces suena el do en este ritmo? Contadlo con los dedos."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El xilòfon humà|El xilófono humano", fase: 'desconnectat',
        fa: "Set alumnes fan de xilòfon: es posen en fila, de més greu (do) a més aguda (si), cadascun amb la seva targeta de nota. Un alumne/a fa de programador/a: posa targetes de notes en fila a la taula (i, si vol, una targeta «Repeteix»). Un altre fa de director/a i toca l'espatlla de cada nota en l'ordre del programa; la nota tocada canta el seu nom. La resta de la classe escolta i diu si la melodia ha pujat o baixat. Canvieu els papers cada dues melodies. Si hi ha més de 14 alumnes, feu dos xilòfons.|Siete alumnos hacen de xilófono: se ponen en fila, de más grave (do) a más aguda (si), cada uno con su tarjeta de nota. Un alumno/a hace de programador/a: pone tarjetas de notas en fila en la mesa (y, si quiere, una tarjeta «Repite»). Otro hace de director/a y toca el hombro de cada nota en el orden del programa; la nota tocada canta su nombre. El resto de la clase escucha y dice si la melodía ha subido o bajado. Cambiad los papeles cada dos melodías. Si hay más de 14 alumnos, haced dos xilófonos.",
        diu: ["El director/a toca les notes en l'ordre exacte del programa, com en Bit.|El director/a toca las notas en el orden exacto del programa, como Bit.",
          "Aquesta melodia puja o baixa? Per què?|¿Esta melodía sube o baja? ¿Por qué?",
          "Si poso la targeta «Repeteix 2 vegades», quantes notes sonaran?|Si pongo la tarjeta «Repite 2 veces», ¿cuántas notas sonarán?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 9: set notes, programador/a i director/a|Grupos de 9: siete notas, programador/a y director/a" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança fins a l'«Investiga». Si no hi ha auriculars, demana que baixin el volum. Fixa't en qui posa les notes abans d'arribar a les estrelles i en qui confon l'ordre de les notes. Al pas «Música amb el cos», que toquin «Ara no» i el facin a casa.|Cada alumno/a abre la sesión y avanza hasta el «Investiga». Si no hay auriculares, pide que bajen el volumen. Fíjate en quién pone las notas antes de llegar a las estrellas y en quién confunde el orden de las notas. En el paso «Música con el cuerpo», que toquen «Ahora no» y lo hagan en casa.",
        diu: ["Escolta la melodia: quina nota sona diferent del que demana el repte?|Escucha la melodía: ¿qué nota suena diferente de lo que pide el reto?",
          "On és en Bit quan sona aquesta nota? Ja ha arribat a l'estrella?|¿Dónde está Bit cuando suena esta nota? ¿Ya ha llegado a la estrella?"],
        slides: ['s12'], app: "Del «Recorda» a l'«Investiga»: la pregunta dels llums, les dues històries de la banda, les targetes de «Descobreix», ordenar les notes, «Música amb el cos» (per a casa), la melodia amb bucle, «On acabarà?» i la nota equivocada.|Del «Recuerda» al «Investiga»: la pregunta de las luces, las dos historias de la banda, las tarjetas de «Descubre», ordenar las notas, «Música con el cuerpo» (para casa), la melodía con bucle, «¿Dónde terminará?» y la nota equivocada.", org: "Individual|Individual" },
      { min: 10, t: "Reptes musicals|Retos musicales", fase: 'ordinador',
        fa: "Feu tots junts la pausa activa de l'escala amb el cos, cantant les notes. Després deixa'ls fer els cinc reptes. Als reptes amb bucle, demana que diguin en veu alta el tros que es repeteix abans de programar-lo.|Haced todos juntos la pausa activa de la escala con el cuerpo, cantando las notas. Después deja que hagan los cinco retos. En los retos con bucle, pide que digan en voz alta el trozo que se repite antes de programarlo.",
        diu: ["Canta el ritme dels gegants: do, sol, do, sol… Quin tros es repeteix?|Canta el ritmo de los gigantes: do, sol, do, sol… ¿Qué trozo se repite?",
          "A la tornada hi ha dues notes canviades de lloc. Quines són?|En el estribillo hay dos notas cambiadas de sitio. ¿Cuáles son?"],
        slides: ['s13'], app: "«Pausa activa» i els cinc reptes: la crida de la festa, el ritme dels gegants, els tres músics, la tornada amb bug i ordenar els blocs.|«Pausa activa» y los cinco retos: la llamada de la fiesta, el ritmo de los gigantes, los tres músicos, el estribillo con bug y ordenar los bloques.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la cançó de la festa|Crea: la canción de la fiesta", fase: 'crea',
        fa: "Cada alumne/a compon la seva melodia: almenys quatre blocs Nota i un tros que es repeteixi, i en Bit acaba a l'escenari. Quan la tinguin, la fan sonar al company/a, que ha de dir quin tros es repeteix.|Cada alumno/a compone su melodía: al menos cuatro bloques Nota y un trozo que se repita, y Bit termina en el escenario. Cuando la tengan, la hacen sonar al compañero/a, que tiene que decir qué trozo se repite.",
        diu: ["La teva melodia puja, baixa o fa ziga-zaga?|¿Tu melodía sube, baja o hace zigzag?",
          "Escolta la del company/a: quin tros es repeteix?|Escucha la del compañero/a: ¿qué trozo se repite?"],
        slides: ['s14'], app: "Pas «Crea»: La cançó de la festa.|Paso «Crea»: La canción de la fiesta.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum, deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida a la porta.|Repasa las tres ideas de la sesión con el resumen, deja que respondan las preguntas finales de la app y haz el ticket de salida en la puerta.",
        diu: ["Què és una melodia?|¿Qué es una melodía?", "Quina és la nota més greu? I la més aguda?|¿Cuál es la nota más grave? ¿Y la más aguda?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa les notes en un ordre diferent del que demana el repte i no ho sent.|Pone las notas en un orden diferente del que pide el reto y no lo oye.",
        "Que miri la melodia de dalt del món: cada nota encertada es posa de color i la primera que falla es marca. Que canviï només aquella.|Que mire la melodía de arriba del mundo: cada nota acertada se pone de color y la primera que falla se marca. Que cambie solo esa."],
      ["Fa sonar la nota abans d'arribar a l'estrella.|Hace sonar la nota antes de llegar a la estrella.",
        "Pas a pas: on és en Bit quan sona la nota? Que compti els Endavant que falten abans de la Nota.|Paso a paso: ¿dónde está Bit cuando suena la nota? Que cuente los Adelante que faltan antes de la Nota."],
      ["Al ritme dels gegants posa la Nota do i la Nota sol en bucles separats.|En el ritmo de los gigantes pone la Nota do y la Nota sol en bucles separados.",
        "Que canti el que ha programat: «do, do, do, do, sol, sol…». Sona igual que «do, sol, do, sol»? Els dos blocs han d'anar junts dins del mateix bucle.|Que cante lo que ha programado: «do, do, do, do, sol, sol…». ¿Suena igual que «do, sol, do, sol»? Los dos bloques tienen que ir juntos dentro del mismo bucle."],
      ["Confon greu i agut, o creu que «agut» vol dir «fort».|Confunde grave y agudo, o cree que «agudo» quiere decir «fuerte».",
        "Fes sonar un do i un si amb el mateix volum. Agut és més alt, com un ocell; fort és més volum. Que ho comprovi a l'app amb «Canvia la nota».|Haz sonar un do y un si con el mismo volumen. Agudo es más alto, como un pájaro; fuerte es más volumen. Que lo compruebe en la app con «Cambia la nota»."],
      ["No sent res i pensa que el programa no funciona.|No oye nada y piensa que el programa no funciona.",
        "Comprova el volum i els auriculars. Si cal, al perfil de l'app hi ha l'opció «So». La melodia de dalt del món també mostra les notes que han sonat.|Comprueba el volumen y los auriculares. Si hace falta, en el perfil de la app está la opción «Sonido». La melodía de arriba del mundo también muestra las notas que han sonado."]
    ],
    diff: {
      mes: "Compondre una melodia amb dos bucles diferents (per exemple, la tornada dues vegades i un final que baixa) i escriure-la a la fitxa perquè un company/a la toqui al xilòfon humà. Intentar fer la cançó del projecte amb el mínim de blocs.|Componer una melodía con dos bucles diferentes (por ejemplo, el estribillo dos veces y un final que baja) y escribirla en la ficha para que un compañero/a la toque en el xilófono humano. Intentar hacer la canción del proyecto con el mínimo de bloques.",
      menys: "Tenir les targetes de notes a la taula, en l'ordre de la melodia que demana el repte, i copiar-les com a blocs una a una. Fer servir només tres notes (do, mi i sol) fins que se senti segur/a.|Tener las tarjetas de notas en la mesa, en el orden de la melodía que pide el reto, y copiarlas como bloques una a una. Usar solo tres notas (do, mi y sol) hasta que se sienta seguro/a."
    },
    aval: {
      ticket: ["Què és una melodia? Posa'n un exemple amb tres notes.|¿Qué es una melodía? Pon un ejemplo con tres notas.",
        "Com faries sonar «do, sol» quatre vegades amb pocs blocs?|¿Cómo harías sonar «do, sol» cuatro veces con pocos bloques?"],
      rubric: [
        ["Notes i melodies|Notas y melodías", "Programa la melodia que demana el repte en l'ordre correcte i sap dir quina nota és més aguda.|Programa la melodía que pide el reto en el orden correcto y sabe decir qué nota es más aguda.", "Fa sonar notes, però s'equivoca en l'ordre o necessita ajuda per triar-les.|Hace sonar notas, pero se equivoca en el orden o necesita ayuda para elegirlas."],
        ["Ritmes amb bucles|Ritmos con bucles", "Troba el tros que es repeteix i el posa dins d'un bucle amb el nombre de vegades correcte.|Encuentra el trozo que se repite y lo pone dentro de un bucle con el número de veces correcto.", "Fa el ritme amb molts blocs seguits o separa el patró en bucles diferents.|Hace el ritmo con muchos bloques seguidos o separa el patrón en bucles diferentes."],
        ["Notes i moviment|Notas y movimiento", "Fa sonar cada nota just quan en Bit arriba a l'estrella.|Hace sonar cada nota justo cuando Bit llega a la estrella.", "Encerta les notes, però de vegades sonen abans d'arribar a l'estrella.|Acierta las notas, pero a veces suenan antes de llegar a la estrella."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «Música amb el cos»: una persona escriu un ritme amb palmades, cops a les cames i cops de peu, i l'altra el toca com un robot. Proveu d'afegir-hi un «Repeteix»!|En casa, con el móvil, podéis repetir la sesión y hacer «Música con el cuerpo»: una persona escribe un ritmo con palmadas, golpes en las piernas y golpes de pie, y la otra lo toca como un robot. ¡Probad a añadir un «Repite»!",
    slides: [
      { id: 's1', k: 'portada', t: "Música amb en Bit|Música con Bit", x: "Avui en Bit farà música per a la banda de la festa major.|Hoy Bit hará música para la banda de la fiesta mayor.",
        nota: "Comprova que el so del projector funciona abans de començar.|Comprueba que el sonido del proyector funciona antes de empezar." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Repeteix 2 vegades: Llum vermell, Llum verd. Quins llums s'encenen, en ordre?|Repite 2 veces: Luz roja, Luz verde. ¿Qué luces se encienden, en orden?", blocks: ['Repeteix 2 vegades|Repite 2 veces', 'Llum vermell|Luz roja', 'Llum verd|Luz verde'],
        nota: "Resposta: vermell, verd, vermell, verd. El bucle repeteix tot el que té a dins, en ordre.|Respuesta: rojo, verde, rojo, verde. El bucle repite todo lo que tiene dentro, en orden." },
      { id: 's3', k: 'concepte', t: "La banda de la festa|La banda de la fiesta", punts: ["A la banda li falta un músic.|A la banda le falta un músico.", "En Bit té un altaveu i sap fer notes.|Bit tiene un altavoz y sabe hacer notas.", "Avui li ensenyarem a tocar melodies.|Hoy le enseñaremos a tocar melodías."],
        nota: "Pregunta quines cançons de festa coneixen i si tenen un tros que torna a sonar: és la tornada.|Pregunta qué canciones de fiesta conocen y si tienen un trozo que vuelve a sonar: es el estribillo." },
      { id: 's4', k: 'anim', t: "Les set notes|Las siete notas", anim: 'u3notes', x: "Do, re, mi, fa, sol, la, si: de la més greu a la més aguda.|Do, re, mi, fa, sol, la, si: de la más grave a la más aguda.",
        nota: "Canteu les notes junts pujant i baixant. Si teniu un instrument a l'aula, toqueu-les a la vegada que l'animació.|Cantad las notas juntos subiendo y bajando. Si tenéis un instrumento en el aula, tocadlas a la vez que la animación." },
      { id: 's5', k: 'pregunta', t: "Agut o greu?|¿Agudo o grave?", punts: ["El xiulet d'un ocell|El silbido de un pájaro", "Un camió que passa pel carrer|Un camión que pasa por la calle", "El timbre de la bicicleta|El timbre de la bicicleta", "Un tambor gran|Un tambor grande"],
        nota: "Que responguin amb el cos: braços amunt si és agut, ajupits si és greu. Ocell i timbre, aguts; camió i tambor, greus.|Que respondan con el cuerpo: brazos arriba si es agudo, agachados si es grave. Pájaro y timbre, agudos; camión y tambor, graves." },
      { id: 's6', k: 'demo', t: "Una melodia|Una melodía", x: "Quantes notes sonaran? Pugen o baixen?|¿Cuántas notas sonarán? ¿Suben o bajan?",
        demo: { w: { map: ['...', '.v.', '...'], melody: ['do', 're', 'mi', 'fa', 'sol'] }, prog: 'note:do note:re note:mi note:fa note:sol' },
        nota: "Fes notar la melodia de dalt del món: cada nota que sona bé es posa de color.|Haz notar la melodía de arriba del mundo: cada nota que suena bien se pone de color." },
      { id: 's7', k: 'anim', t: "Un altre ordre, una altra melodia|Otro orden, otra melodía", anim: 'u3melody', x: "Mateixes notes, un altre ordre: una melodia diferent.|Mismas notas, otro orden: una melodía diferente.",
        nota: "Canteu do-mi-sol i després sol-mi-do. Pregunta quina sembla que pugi una escala i quina que la baixi.|Cantad do-mi-sol y después sol-mi-do. Pregunta cuál parece que sube una escalera y cuál que la baja." },
      { id: 's8', k: 'demo', t: "Un ritme que es repeteix|Un ritmo que se repite", x: "Quantes vegades sonarà el do?|¿Cuántas veces sonará el do?",
        demo: { w: { map: ['...', '.v.', '...'], melody: ['do', 'sol', 'do', 'sol', 'do', 'sol'] }, prog: '3{ note:do note:sol }' },
        nota: "Resposta: 3 vegades. Piqueu de mans el ritme mentre sona i compareu-ho amb els patrons de la unitat 2.|Respuesta: 3 veces. Dad palmadas al ritmo mientras suena y comparadlo con los patrones de la unidad 2." },
      { id: 's9', k: 'demo', t: "Pensa abans d'executar|Piensa antes de ejecutar", x: "A quina estrella sonarà el do? I el mi?|¿En qué estrella sonará el do? ¿Y el mi?",
        demo: { w: { map: ['>#*#*'], melody: ['do', 'mi'] }, prog: 'f f note:do f f note:mi' },
        nota: "Que assenyalin les estrelles abans d'executar. Recorda la regla: primer arribar a l'estrella, després la nota.|Que señalen las estrellas antes de ejecutar. Recuerda la regla: primero llegar a la estrella, después la nota." },
      { id: 's10', k: 'activitat', t: "El xilòfon humà|El xilófono humano", timer: 12, punts: ["Set alumnes en fila: do, re, mi, fa, sol, la, si.|Siete alumnos en fila: do, re, mi, fa, sol, la, si.", "Programador/a: posa targetes de notes en fila.|Programador/a: pone tarjetas de notas en fila.", "Director/a: toca les notes en aquell ordre; cada nota canta el seu nom.|Director/a: toca las notas en ese orden; cada nota canta su nombre.", "La classe escolta: la melodia puja o baixa?|La clase escucha: ¿la melodía sube o baja?"],
        nota: "Canvieu els papers cada dues melodies perquè tothom faci de nota, de programador/a i de director/a.|Cambiad los papeles cada dos melodías para que todos hagan de nota, de programador/a y de director/a." },
      { id: 's11', k: 'concepte', t: "Com es programa el xilòfon|Cómo se programa el xilófono", punts: ["Una targeta = una nota.|Una tarjeta = una nota.", "La targeta «Repeteix» va davant de les notes que es repeteixen.|La tarjeta «Repite» va delante de las notas que se repiten.", "El director/a no es salta cap targeta.|El director/a no se salta ninguna tarjeta.", "Si sona malament, busqueu el bug a les targetes.|Si suena mal, buscad el bug en las tarjetas."],
        nota: "Deixa aquesta diapositiva projectada mentre fan l'activitat.|Deja esta diapositiva proyectada mientras hacen la actividad." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Música amb en Bit».|Abre la sesión «Música con Bit».", "Posa't els auriculars o abaixa el volum.|Ponte los auriculares o baja el volumen.", "Escolta cada melodia i mira la línia de notes de dalt del món.|Escucha cada melodía y mira la línea de notas de arriba del mundo.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Al pas «Música amb el cos», que toquin «Ara no»: és per fer-lo a casa.|En el paso «Música con el cuerpo», que toquen «Ahora no»: es para hacerlo en casa." },
      { id: 's13', k: 'repte', t: "Reptes musicals|Retos musicales", timer: 10, punts: ["1. La crida de la festa|1. La llamada de la fiesta", "2. El ritme dels gegants (3 blocs!)|2. El ritmo de los gigantes (¡3 bloques!)", "3. Els tres músics|3. Los tres músicos", "4. La tornada amb un bug|4. El estribillo con un bug", "5. Ordena els blocs|5. Ordena los bloques"],
        nota: "Si algú s'encalla, que canti la melodia que demana el repte i després la que sona.|Si alguien se atasca, que cante la melodía que pide el reto y después la que suena." },
      { id: 's14', k: 'activitat', t: "Crea: la cançó de la festa|Crea: la canción de la fiesta", timer: 5, x: "Compon una melodia amb almenys 4 notes i un tros que es repeteixi, i porta en Bit a l'escenari.|Compón una melodía con al menos 4 notas y un trozo que se repita, y lleva a Bit al escenario.",
        nota: "Si queda temps, dos o tres voluntaris fan sonar la seva cançó al projector.|Si queda tiempo, dos o tres voluntarios hacen sonar su canción en el proyector." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["El bloc Nota fa sonar do, re, mi, fa, sol, la o si.|El bloque Nota hace sonar do, re, mi, fa, sol, la o si.", "Una melodia és una seqüència de notes: l'ordre importa.|Una melodía es una secuencia de notas: el orden importa.", "Un ritme que es repeteix es fa amb un bucle.|Un ritmo que se repite se hace con un bucle."],
        nota: "Avança que la propera sessió en Bit tindrà un comandament amb botons.|Avanza que en la próxima sesión Bit tendrá un mando con botones." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què és una melodia?|¿Qué es una melodía?", "Com faries sonar «do, sol» 4 vegades amb pocs blocs?|¿Cómo harías sonar «do, sol» 4 veces con pocos bloques?"],
        nota: "Respostes: una seqüència de notes en ordre; «Repeteix 4 vegades» amb les notes do i sol a dins.|Respuestas: una secuencia de notas en orden; «Repite 4 veces» con las notas do y sol dentro." }
    ],
    print: [
      { id: 'p1', t: "Targetes de notes|Tarjetas de notas", k: 'targetes',
        intro: "Un conjunt de set notes per al xilòfon humà i notes de més per programar melodies. Cada nota té el seu color.|Un conjunto de siete notas para el xilófono humano y notas de más para programar melodías. Cada nota tiene su color.",
        items: [
          { t: "Nota do 🔴|Nota do 🔴", n: 2 },
          { t: "Nota re 🟠|Nota re 🟠", n: 2 },
          { t: "Nota mi 🟡|Nota mi 🟡", n: 2 },
          { t: "Nota fa 🟢|Nota fa 🟢", n: 2 },
          { t: "Nota sol 🔵|Nota sol 🔵", n: 2 },
          { t: "Nota la 🟣|Nota la 🟣", n: 1 },
          { t: "Nota si 🟤|Nota si 🟤", n: 1 }
        ] },
      { id: 'p2', t: "Fitxa: melodies d'en Bit|Ficha: melodías de Bit", k: 'fitxa',
        intro: "Llegeix cada programa i escriu les notes que sonaran, en ordre. Si vols, canta-les fluixet.|Lee cada programa y escribe las notas que sonarán, en orden. Si quieres, cántalas bajito.",
        items: [
          { q: "Quina melodia sona? Escriu les notes en ordre.|¿Qué melodía suena? Escribe las notas en orden.", prog: '2{ note:do note:mi } note:sol',
            sol: "do, mi, do, mi, sol.|do, mi, do, mi, sol." },
          { q: "Escriu un programa més curt, amb un bucle, per a aquesta melodia: re, fa, re, fa, re, fa.|Escribe un programa más corto, con un bucle, para esta melodía: re, fa, re, fa, re, fa.",
            sol: "Repeteix 3 vegades: Nota re, Nota fa.|Repite 3 veces: Nota re, Nota fa." },
          { q: "En Bit mira a la dreta. Escriu el programa perquè soni un do a la primera estrella, un re a la segona i un mi a la tercera.|Bit mira a la derecha. Escribe el programa para que suene un do en la primera estrella, un re en la segunda y un mi en la tercera.",
            w: { map: ['>#*', '..#', '*#*'], melody: ['do', 're', 'mi'] }, solProg: 'f f note:do r f f note:re r f f note:mi',
            sol: "Endavant ×2, Nota do, Gira a la dreta, Endavant ×2, Nota re, Gira a la dreta, Endavant ×2, Nota mi.|Adelante ×2, Nota do, Gira a la derecha, Adelante ×2, Nota re, Gira a la derecha, Adelante ×2, Nota mi." },
          { q: "Compon la teva tornada: escriu 3 o 4 notes i quantes vegades es repeteixen. Puja, baixa o fa ziga-zaga?|Compón tu estribillo: escribe 3 o 4 notas y cuántas veces se repiten. ¿Sube, baja o hace zigzag?",
            sol: "Resposta oberta. Comproveu que les notes estan en ordre i que el bucle repeteix tota la tornada.|Respuesta abierta. Comprobad que las notas están en orden y que el bucle repite todo el estribillo." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Quan premo el botó… ---------- */
  'r3-3': {
    obj: [
      "L'alumne/a explica què és un esdeveniment amb exemples de la vida diària (timbre, interruptor, polsador del semàfor).|El alumno/a explica qué es un evento con ejemplos de la vida diaria (timbre, interruptor, pulsador del semáforo).",
      "L'alumne/a distingeix els blocs de «Quan comença» dels de «Quan premo A / B» i diu quan s'executa cadascun.|El alumno/a distingue los bloques de «Al empezar» de los de «Al pulsar A / B» y dice cuándo se ejecuta cada uno.",
      "L'alumne/a programa els botons A i B com un comandament a distància i guia en Bit fins a la bandera.|El alumno/a programa los botones A y B como un mando a distancia y guía a Bit hasta la bandera.",
      "L'alumne/a programa botons que encenen llums i fan sonar notes i ho comprova amb «Comprova».|El alumno/a programa botones que encienden luces y hacen sonar notas y lo comprueba con «Comprueba»."
    ],
    comp: [
      "Competència digital (CD5): programar un sistema que respon a les accions de l'usuari|Competencia digital (CD5): programar un sistema que responde a las acciones del usuario",
      "Pensament computacional: esdeveniments, causa i efecte, i programes que esperen una acció|Pensamiento computacional: eventos, causa y efecto, y programas que esperan una acción",
      "Coneixement del medi i tecnologia: màquines quotidianes que reaccionen a botons i sensors (ascensor, timbre, semàfor)|Conocimiento del medio y tecnología: máquinas cotidianas que reaccionan a botones y sensores (ascensor, timbre, semáforo)",
      "Comunicació oral: explicar què fa cada botó i donar instruccions a un company/a|Comunicación oral: explicar qué hace cada botón y dar instrucciones a un compañero/a"
    ],
    vocab: [
      ["Esdeveniment|Evento", "Una cosa que passa (prémer un botó, tocar un interruptor) i que fa que un programa reaccioni.|Algo que pasa (pulsar un botón, tocar un interruptor) y que hace que un programa reaccione."],
      ["Reaccionar|Reaccionar", "Fer una cosa just després que passi un esdeveniment.|Hacer algo justo después de que pase un evento."],
      ["Quan comença|Al empezar", "Els blocs que s'executen sols, una vegada, quan toques Executa.|Los bloques que se ejecutan solos, una vez, cuando tocas Ejecuta."],
      ["Quan premo A|Al pulsar A", "Els blocs que s'executen cada vegada que algú prem el botó A.|Los bloques que se ejecutan cada vez que alguien pulsa el botón A."],
      ["Comandament a distància|Mando a distancia", "Uns botons que fan moure o funcionar una màquina des de lluny.|Unos botones que hacen mover o funcionar una máquina desde lejos."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Quan premo el botó…»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Cuando pulso el botón…»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Les targetes d'esdeveniments i d'accions impreses (un paquet per grup de 3 o 4)|Las tarjetas de eventos y de acciones impresas (un paquete por grupo de 3 o 4)",
        "La quadrícula del terra de la unitat 1 (o en A3) i dos fulls grans amb una A i una B|La cuadrícula del suelo de la unidad 1 (o en A3) y dos hojas grandes con una A y una B"
      ],
      imprimir: ["Targetes d'esdeveniments i accions|Tarjetas de eventos y acciones", "Quadrícula: missions del comandament|Cuadrícula: misiones del mando"],
      prep: [
        "Imprimir i retallar un paquet de targetes per grup i preparar dos fulls grans amb una A i una B per fer de botons.|Imprimir y recortar un paquete de tarjetas por grupo y preparar dos hojas grandes con una A y una B para hacer de botones.",
        "Marcar o recuperar la quadrícula del terra de 5 × 5 i muntar-hi la missió 3 (amb roques) de la fitxa de la quadrícula.|Marcar o recuperar la cuadrícula del suelo de 5 × 5 y montar en ella la misión 3 (con rocas) de la ficha de la cuadrícula.",
        "Provar abans un repte amb «Comprova» per saber com es veuen les proves dels botons.|Probar antes un reto con «Comprueba» para saber cómo se ven las pruebas de los botones.",
        "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i el comandament d'en Bit|Recordamos y el mando de Bit", fase: 'inici',
        fa: "Fes la pregunta de repàs del bloc Nota. Explica la història: en Numi ha construït un comandament amb dos botons perquè el públic de la festa pugui fer reaccionar en Bit. Pregunta quines màquines de casa o del carrer fan alguna cosa quan prems un botó.|Haz la pregunta de repaso del bloque Nota. Explica la historia: Numi ha construido un mando con dos botones para que el público de la fiesta pueda hacer reaccionar a Bit. Pregunta qué máquinas de casa o de la calle hacen algo cuando pulsas un botón.",
        diu: ["Quin bloc fa sonar una nota?|¿Qué bloque hace sonar una nota?",
          "Quines màquines fan alguna cosa quan prems un botó?|¿Qué máquinas hacen algo cuando pulsas un botón?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és un esdeveniment?|¿Qué es un evento?", fase: 'teoria',
        fa: "Parteix dels exemples de la classe i mostra l'animació: passa una cosa i el programa reacciona. Presenta els botons A i B i la diferència entre «Quan comença» i «Quan premo A». A les demostracions, abans d'executar, la classe prediu què passarà quan toquis Executa i què passarà cada vegada que premis un botó. Remarca que cada botó només fa els seus blocs.|Parte de los ejemplos de la clase y muestra la animación: pasa algo y el programa reacciona. Presenta los botones A y B y la diferencia entre «Al empezar» y «Al pulsar A». En las demostraciones, antes de ejecutar, la clase predice qué pasará cuando toques Ejecuta y qué pasará cada vez que pulses un botón. Remarca que cada botón solo hace sus bloques.",
        diu: ["Quan prems el timbre, què passa? I si ningú no el prem?|Cuando pulsas el timbre, ¿qué pasa? ¿Y si nadie lo pulsa?",
          "Quan toco Executa, quins blocs es fan? I quan premo A?|Cuando toco Ejecuta, ¿qué bloques se hacen? ¿Y cuando pulso A?",
          "Si premo B, s'executen els blocs del botó A?|Si pulso B, ¿se ejecutan los bloques del botón A?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Reaccions de robot i comandament al terra|Reacciones de robot y mando en el suelo", fase: 'desconnectat',
        fa: "Primera part (6 minuts): cada grup rep les targetes «Quan comença», «Quan veus A» i «Quan veus B» i hi posa a sota targetes d'acció (aplaudeix, digues BIP, gira…). Quan tots els grups tenen el programa, tu fas de públic: aixeques el full A o el full B i cada grup reacciona segons el seu programa. Segona part (6 minuts): a la quadrícula del terra, un alumne/a fa de robot i un altre té els fulls A (un pas endavant) i B (gira a la dreta); ha de portar el robot a la bandera de la missió 3 de la fitxa. La resta escriu la seqüència de botons.|Primera parte (6 minutos): cada grupo recibe las tarjetas «Al empezar», «Cuando veas A» y «Cuando veas B» y pone debajo tarjetas de acción (aplaude, di BIP, gira…). Cuando todos los grupos tienen el programa, tú haces de público: levantas la hoja A o la hoja B y cada grupo reacciona según su programa. Segunda parte (6 minutos): en la cuadrícula del suelo, un alumno/a hace de robot y otro tiene las hojas A (un paso adelante) y B (gira a la derecha); tiene que llevar al robot a la bandera de la misión 3 de la ficha. El resto escribe la secuencia de botones.",
        diu: ["Encara no he aixecat cap full: què ha de fer el vostre robot? Esperar!|Todavía no he levantado ninguna hoja: ¿qué tiene que hacer vuestro robot? ¡Esperar!",
          "He aixecat la B: fa també el que hi ha sota la A?|He levantado la B: ¿hace también lo que hay debajo de la A?",
          "Amb només A i B, com fa el robot per girar a l'esquerra?|Con solo A y B, ¿cómo hace el robot para girar a la izquierda?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4 i després tot el grup a la quadrícula|Grupos de 3 o 4 y después todo el grupo en la cuadrícula" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la història de «Com es proven els botons». Projecta la diapositiva 13 i explica com es fa: Executa per a «Quan comença», els botons de sota el món per provar i «Comprova» per acabar. Al pas «El robot teledirigit», que toquin «Ara no» i el facin a casa.|Cada alumno/a avanza hasta la historia de «Cómo se prueban los botones». Proyecta la diapositiva 13 y explica cómo se hace: Ejecuta para «Al empezar», los botones de debajo del mundo para probar y «Comprueba» para terminar. En el paso «El robot teledirigido», que toquen «Ahora no» y lo hagan en casa.",
        diu: ["A la pregunta del comandament, segueix en Bit amb el dit a cada botó.|En la pregunta del mando, sigue a Bit con el dedo en cada botón.",
          "On has de posar els blocs perquè es facin quan prems A?|¿Dónde tienes que poner los bloques para que se hagan cuando pulsas A?"],
        slides: ['s12', 's13'], app: "Del «Recorda» a la història de «Com es proven els botons»: la pregunta de la nota, les dues històries del comandament, les targetes de «Descobreix», l'esdeveniment de l'ascensor, ordenar el timbre, «El robot teledirigit» (per a casa) i els botons fins a la bandera.|Del «Recuerda» a la historia de «Cómo se prueban los botones»: la pregunta de la nota, las dos historias del mando, las tarjetas de «Descubre», el evento del ascensor, ordenar el timbre, «El robot teledirigido» (para casa) y los botones hasta la bandera.", org: "Individual|Individual" },
      { min: 10, t: "Reptes amb botons|Retos con botones", fase: 'ordinador',
        fa: "Feu tots junts la pausa activa dels botons: tu dius «A!» o «B!» i la classe reacciona. Després deixa'ls fer els cinc reptes. Passeja i fixa't en qui posa els blocs a «Quan comença» en lloc del botó: pregunta-li quan s'han d'executar.|Haced todos juntos la pausa activa de los botones: tú dices «¡A!» o «¡B!» y la clase reacciona. Después deja que hagan los cinco retos. Pasea y fíjate en quién pone los bloques en «Al empezar» en lugar de en el botón: pregúntale cuándo se tienen que ejecutar.",
        diu: ["Aquests blocs s'han de fer sols al principi o quan algú prem el botó?|¿Estos bloques se tienen que hacer solos al principio o cuando alguien pulsa el botón?",
          "Abans de prémer els botons del comandament, compta les caselles del camí.|Antes de pulsar los botones del mando, cuenta las casillas del camino.",
          "Al comandament amb bug, en quin moment en Bit se'n va del camí?|En el mando con bug, ¿en qué momento Bit se sale del camino?"],
        slides: ['s14'], app: "«Pausa activa» i els cinc reptes: el timbre, el semàfor dels vianants, el comandament a distància, els botons musicals i el comandament amb bug.|«Pausa activa» y los cinco retos: el timbre, el semáforo de los peatones, el mando a distancia, los botones musicales y el mando con bug.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el meu comandament|Crea: mi mando", fase: 'crea',
        fa: "Cada alumne/a decideix què fan els botons A i B, amb moviment i amb llum o música, i porta en Bit a la bandera prement-los. En parelles, un explica què fa cada botó i l'altre prova de portar en Bit a la bandera amb aquell comandament.|Cada alumno/a decide qué hacen los botones A y B, con movimiento y con luz o música, y lleva a Bit a la bandera pulsándolos. Por parejas, uno explica qué hace cada botón y el otro intenta llevar a Bit a la bandera con ese mando.",
        diu: ["Què fa el teu botó A? I el B?|¿Qué hace tu botón A? ¿Y el B?",
          "Amb el comandament del company/a, quins botons prémer per arribar a la bandera?|Con el mando del compañero/a, ¿qué botones hay que pulsar para llegar a la bandera?"],
        slides: ['s15'], app: "Pas «Crea»: El meu comandament.|Paso «Crea»: Mi mando.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les idees de la sessió amb el resum, deixa que responguin les preguntes finals i fes el tiquet de sortida.|Repasa las ideas de la sesión con el resumen, deja que respondan las preguntas finales y haz el ticket de salida.",
        diu: ["Digues un esdeveniment de casa i com hi reacciona la màquina.|Di un evento de casa y cómo reacciona la máquina.",
          "Quan s'executen els blocs de «Quan premo A»?|¿Cuándo se ejecutan los bloques de «Al pulsar A»?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa els blocs a «Quan comença» quan haurien d'anar al botó, i en Bit ho fa tot de cop.|Pone los bloques en «Al empezar» cuando tendrían que ir en el botón, y Bit lo hace todo de golpe.",
        "Pregunta: quan vols que passi això, al principi o quan algú prem A? Que toqui l'espai de sota «Quan premo A» abans de posar els blocs.|Pregunta: ¿cuándo quieres que pase esto, al principio o cuando alguien pulsa A? Que toque el espacio de debajo de «Al pulsar A» antes de poner los bloques."],
      ["Creu que els blocs dels botons s'executen sols quan toca Executa.|Cree que los bloques de los botones se ejecutan solos cuando toca Ejecuta.",
        "Que toqui Executa i miri què passa: només es fan els de «Quan comença». Després, que premi A i observi. Recorda el timbre: si ningú no el prem, no sona.|Que toque Ejecuta y mire qué pasa: solo se hacen los de «Al empezar». Después, que pulse A y observe. Recuerda el timbre: si nadie lo pulsa, no suena."],
      ["Al comandament posa molts Endavant al botó A i en Bit se'n va del camí.|En el mando pone muchos Adelante en el botón A y Bit se sale del camino.",
        "Recorda-li que pot prémer A tantes vegades com vulgui: cada vegada, un pas. Així controla exactament on s'atura.|Recuérdale que puede pulsar A tantas veces como quiera: cada vez, un paso. Así controla exactamente dónde se para."],
      ["No sap girar a l'esquerra quan B només fa girar a la dreta.|No sabe girar a la izquierda cuando B solo hace girar a la derecha.",
        "Que es posi dret/a i faci tres girs a la dreta: cap on mira? És el mateix que un gir a l'esquerra!|Que se ponga de pie y haga tres giros a la derecha: ¿hacia dónde mira? ¡Es lo mismo que un giro a la izquierda!"],
      ["Prem «Comprova» abans de provar els botons i no entén què falla.|Pulsa «Comprueba» antes de probar los botones y no entiende qué falla.",
        "Que llegeixi el missatge de la prova que falla (diu quins botons s'han premut). Després, que premi ell/a mateix/a aquells botons i miri què fa en Bit.|Que lea el mensaje de la prueba que falla (dice qué botones se han pulsado). Después, que pulse él/ella mismo/a esos botones y mire qué hace Bit."]
    ],
    diff: {
      mes: "Fer un comandament amb B = gira a l'esquerra i resoldre el mateix camí: calen menys pulsacions? Al projecte, fer que cada botó encengui un llum diferent per saber quin s'ha premut. Inventar una missió nova per a la quadrícula del terra i escriure'n la seqüència de botons.|Hacer un mando con B = gira a la izquierda y resolver el mismo camino: ¿hacen falta menos pulsaciones? En el proyecto, hacer que cada botón encienda una luz diferente para saber cuál se ha pulsado. Inventar una misión nueva para la cuadrícula del suelo y escribir su secuencia de botones.",
      menys: "Fer primer el repte del timbre amb ajuda: assenyalar on van els blocs abans de posar-los. Al comandament, apuntar en un paper cada botó que prem (A, A, B…) i comptar les caselles amb el dit abans de prémer.|Hacer primero el reto del timbre con ayuda: señalar dónde van los bloques antes de ponerlos. En el mando, apuntar en un papel cada botón que pulsa (A, A, B…) y contar las casillas con el dedo antes de pulsar."
    },
    aval: {
      ticket: ["Digues un esdeveniment de la vida diària i com hi reacciona la màquina.|Di un evento de la vida diaria y cómo reacciona la máquina.",
        "Quina diferència hi ha entre «Quan comença» i «Quan premo A»?|¿Qué diferencia hay entre «Al empezar» y «Al pulsar A»?"],
      rubric: [
        ["Concepte d'esdeveniment|Concepto de evento", "Explica què és un esdeveniment amb un exemple propi (passa una cosa → la màquina reacciona).|Explica qué es un evento con un ejemplo propio (pasa algo → la máquina reacciona).", "Reconeix un esdeveniment en un exemple donat, però no l'explica amb les seves paraules.|Reconoce un evento en un ejemplo dado, pero no lo explica con sus palabras."],
        ["Quan comença i quan premo|Al empezar y al pulsar", "Posa cada bloc a la llista correcta i sap quan s'executarà.|Pone cada bloque en la lista correcta y sabe cuándo se ejecutará.", "Barreja els blocs de «Quan comença» i dels botons, i ho arregla amb ajuda.|Mezcla los bloques de «Al empezar» y de los botones, y lo arregla con ayuda."],
        ["Comandament i proves|Mando y pruebas", "Programa A i B, guia en Bit fins a la bandera i fa servir «Comprova» per verificar els botons.|Programa A y B, guía a Bit hasta la bandera y usa «Comprueba» para verificar los botones.", "Programa els botons, però necessita ajuda per triar la seqüència o per entendre una prova que falla.|Programa los botones, pero necesita ayuda para elegir la secuencia o para entender una prueba que falla."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «El robot teledirigit»: una persona fa de robot i només es mou quan l'altra li ensenya el paper A o el paper B. També podeu buscar junts esdeveniments de casa: el timbre, el microones, l'interruptor…|En casa, con el móvil, podéis repetir la sesión y hacer «El robot teledirigido»: una persona hace de robot y solo se mueve cuando la otra le enseña el papel A o el papel B. También podéis buscar juntos eventos de casa: el timbre, el microondas, el interruptor…",
    slides: [
      { id: 's1', k: 'portada', t: "Quan premo el botó…|Cuando pulso el botón…", x: "Avui en Bit tindrà un comandament amb dos botons, A i B.|Hoy Bit tendrá un mando con dos botones, A y B.",
        nota: "Explica que avui aprendrem una idea molt important de la programació: els esdeveniments.|Explica que hoy aprenderemos una idea muy importante de la programación: los eventos." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Quin bloc fa sonar una nota? I quin encén un llum?|¿Qué bloque hace sonar una nota? ¿Y cuál enciende una luz?", blocks: ['Nota|Nota', 'Llum|Luz'],
        nota: "Avui farem que les notes sonin i els llums s'encenguin només quan algú premi un botó.|Hoy haremos que las notas y las luces suenen y se enciendan solo cuando alguien pulse un botón." },
      { id: 's3', k: 'concepte', t: "Un comandament per a en Bit|Un mando para Bit", punts: ["En Numi ha fet un comandament amb dos botons: A i B.|Numi ha hecho un mando con dos botones: A y B.", "Durant la festa, el públic els podrà prémer.|Durante la fiesta, el público los podrá pulsar.", "En Bit ha de saber què fer quan premin cada botó.|Bit tiene que saber qué hacer cuando pulsen cada botón."],
        nota: "Pregunta: fins ara, quan s'acabava el programa d'en Bit? Ara aprendrà a esperar.|Pregunta: hasta ahora, ¿cuándo se acababa el programa de Bit? Ahora aprenderá a esperar." },
      { id: 's4', k: 'pregunta', t: "Què passa quan…?|¿Qué pasa cuando…?", punts: ["…prems el timbre de casa?|…pulsas el timbre de casa?", "…toques l'interruptor de la llum?|…tocas el interruptor de la luz?", "…prems el botó de l'ascensor?|…pulsas el botón del ascensor?"],
        nota: "Recull les respostes: sempre passa una cosa i la màquina hi reacciona. Escriu a la pissarra «passa… → reacciona…».|Recoge las respuestas: siempre pasa algo y la máquina reacciona. Escribe en la pizarra «pasa… → reacciona…»." },
      { id: 's5', k: 'anim', t: "Passa una cosa… i el programa reacciona|Pasa algo… y el programa reacciona", anim: 'u3event', x: "Això es diu un esdeveniment.|Esto se llama un evento.",
        nota: "Fes notar que, si ningú no prem res, la màquina no fa res: espera l'esdeveniment.|Haz notar que, si nadie pulsa nada, la máquina no hace nada: espera el evento." },
      { id: 's6', k: 'anim', t: "Cada botó, els seus blocs|Cada botón, sus bloques", anim: 'u3buttons', x: "Els blocs de «Quan premo A» es fan cada vegada que es prem A.|Los bloques de «Al pulsar A» se hacen cada vez que se pulsa A.",
        nota: "Pregunta: si premo A dues vegades, quantes caselles avançarà en Bit?|Pregunta: si pulso A dos veces, ¿cuántas casillas avanzará Bit?" },
      { id: 's7', k: 'demo', t: "Quan comença i quan premo A|Al empezar y al pulsar A", x: "Què passarà quan toqui Executa? I cada vegada que premi A?|¿Qué pasará cuando toque Ejecuta? ¿Y cada vez que pulse A?",
        demo: { w: { map: ['>###F'] }, prog: 'light:r', evs: { A: 'f note:mi' }, press: 'AAAA' },
        nota: "Primer s'encén el llum vermell (Quan comença). Després, a cada A, un pas i un mi. Quantes A calen per arribar a la bandera? Quatre.|Primero se enciende la luz roja (Al empezar). Después, en cada A, un paso y un mi. ¿Cuántas A hacen falta para llegar a la bandera? Cuatro." },
      { id: 's8', k: 'demo', t: "El comandament a distància|El mando a distancia", x: "A = Endavant, B = Gira a la dreta. Quins botons premeríeu?|A = Adelante, B = Gira a la derecha. ¿Qué botones pulsaríais?",
        demo: { w: { map: ['>##.', '..#.', '..F.'] }, prog: 'light:g', evs: { A: 'f', B: 'r' }, press: 'AABAA' },
        nota: "Que la classe digui la seqüència abans d'executar. Resposta: A, A, B, A, A.|Que la clase diga la secuencia antes de ejecutar. Respuesta: A, A, B, A, A." },
      { id: 's9', k: 'concepte', t: "Compte! Cada botó fa només el seu|¡Cuidado! Cada botón hace solo lo suyo", punts: ["«Quan comença» es fa sol, una vegada.|«Al empezar» se hace solo, una vez.", "«Quan premo A» es fa només quan prems A.|«Al pulsar A» se hace solo cuando pulsas A.", "Prémer B no fa els blocs d'A.|Pulsar B no hace los bloques de A.", "Si prems dues vegades, es fa dues vegades.|Si pulsas dos veces, se hace dos veces."],
        nota: "Aquest és l'error més habitual de la sessió. Torna-hi quan vegis algú que posa els blocs del botó a «Quan comença».|Este es el error más habitual de la sesión. Vuelve a ello cuando veas a alguien que pone los bloques del botón en «Al empezar»." },
      { id: 's10', k: 'activitat', t: "Reaccions de robot|Reacciones de robot", timer: 6, punts: ["Poseu targetes d'acció sota «Quan comença», «Quan veus A» i «Quan veus B».|Poned tarjetas de acción debajo de «Al empezar», «Cuando veas A» y «Cuando veas B».", "Quan dic «comença», feu les accions de «Quan comença».|Cuando digo «empieza», haced las acciones de «Al empezar».", "Quan aixeco un full, feu només les accions d'aquell botó.|Cuando levanto una hoja, haced solo las acciones de ese botón.", "Si no aixeco res… espereu!|Si no levanto nada… ¡esperad!"],
        nota: "Alterna A i B, repeteix-ne algun i fes alguna pausa llarga per comprovar que els grups esperen.|Alterna A y B, repite alguno y haz alguna pausa larga para comprobar que los grupos esperan." },
      { id: 's11', k: 'activitat', t: "El comandament al terra|El mando en el suelo", timer: 6, punts: ["Robot: a la quadrícula, només es mou quan veu un full.|Robot: en la cuadrícula, solo se mueve cuando ve una hoja.", "A = un pas endavant · B = gira a la dreta.|A = un paso adelante · B = gira a la derecha.", "La resta de la classe apunta la seqüència de botons.|El resto de la clase apunta la secuencia de botones.", "Per girar a l'esquerra… B, B, B!|Para girar a la izquierda… ¡B, B, B!"],
        nota: "Feu la missió 3 de la fitxa de la quadrícula. Compareu després les seqüències que ha apuntat la classe.|Haced la misión 3 de la ficha de la cuadrícula. Comparad después las secuencias que ha apuntado la clase." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Quan premo el botó…».|Abre la sesión «Cuando pulso el botón…».", "Fes la missió, «Descobreix» i «Mans a l'obra».|Haz la misión, «Descubre» y «Manos a la obra».", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Al pas «El robot teledirigit», que toquin «Ara no»: ja l'hem fet al terra i el poden repetir a casa.|En el paso «El robot teledirigido», que toquen «Ahora no»: ya lo hemos hecho en el suelo y lo pueden repetir en casa." },
      { id: 's13', k: 'concepte', t: "Com es proven els botons|Cómo se prueban los botones", punts: ["1. Executa: es fan els blocs de «Quan comença».|1. Ejecuta: se hacen los bloques de «Al empezar».", "2. Prem A i B sota el món i mira què passa.|2. Pulsa A y B debajo del mundo y mira qué pasa.", "3. Comprova: l'app fa unes quantes proves amb els botons.|3. Comprueba: la app hace unas cuantas pruebas con los botones.", "Si una prova falla, llegeix quins botons s'han premut.|Si una prueba falla, lee qué botones se han pulsado."],
        nota: "Fes una demostració al projector amb el primer repte (el timbre) abans que comencin els reptes.|Haz una demostración en el proyector con el primer reto (el timbre) antes de que empiecen los retos." },
      { id: 's14', k: 'repte', t: "Reptes amb botons|Retos con botones", timer: 10, punts: ["1. El timbre|1. El timbre", "2. El semàfor dels vianants|2. El semáforo de los peatones", "3. El comandament a distància (2 blocs!)|3. El mando a distancia (¡2 bloques!)", "4. Botons musicals|4. Botones musicales", "5. El comandament amb un bug|5. El mando con un bug"],
        nota: "Al semàfor dels vianants, explica que molts semàfors fan sons perquè les persones cegues sàpiguen quan poden passar.|En el semáforo de los peatones, explica que muchos semáforos hacen sonidos para que las personas ciegas sepan cuándo pueden pasar." },
      { id: 's15', k: 'activitat', t: "Crea: el meu comandament|Crea: mi mando", timer: 5, x: "Decideix què fan A i B (moviment i llum o música) i porta en Bit a la bandera prement-los.|Decide qué hacen A y B (movimiento y luz o música) y lleva a Bit a la bandera pulsándolos.",
        nota: "En parelles, que provin el comandament del company/a sense mirar-ne els blocs: només amb l'explicació.|Por parejas, que prueben el mando del compañero/a sin mirar sus bloques: solo con la explicación." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un esdeveniment: passa una cosa i el programa reacciona.|Un evento: pasa algo y el programa reacciona.", "«Quan comença» es fa sol; «Quan premo A», quan prems A.|«Al empezar» se hace solo; «Al pulsar A», cuando pulsas A.", "Amb dos botons es pot fer un comandament a distància.|Con dos botones se puede hacer un mando a distancia."],
        nota: "Avança que la propera sessió és el projecte de la unitat: la coreografia de la festa major.|Avanza que la próxima sesión es el proyecto de la unidad: la coreografía de la fiesta mayor." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Digues un esdeveniment i com hi reacciona la màquina.|Di un evento y cómo reacciona la máquina.", "Quina diferència hi ha entre «Quan comença» i «Quan premo A»?|¿Qué diferencia hay entre «Al empezar» y «Al pulsar A»?"],
        nota: "Exemple de resposta: prems l'interruptor (esdeveniment) i s'encén el llum (reacció). «Quan comença» es fa sol al principi; «Quan premo A», cada vegada que prems A.|Ejemplo de respuesta: pulsas el interruptor (evento) y se enciende la luz (reacción). «Al empezar» se hace solo al principio; «Al pulsar A», cada vez que pulsas A." }
    ],
    print: [
      { id: 'p1', t: "Targetes d'esdeveniments i accions|Tarjetas de eventos y acciones", k: 'targetes',
        intro: "Un paquet per grup. Les targetes d'esdeveniment («Quan comença», «Quan veus A», «Quan veus B») encapçalen cada columna; les d'acció es posen a sota. Els fulls A i B grans són per al professor/a.|Un paquete por grupo. Las tarjetas de evento («Al empezar», «Cuando veas A», «Cuando veas B») encabezan cada columna; las de acción se ponen debajo. Las hojas A y B grandes son para el profesor/a.",
        items: [
          { t: "Quan comença 🚩|Al empezar 🚩", n: 1 },
          { t: "Quan veus A 🅰️|Cuando veas A 🅰️", n: 1 },
          { t: "Quan veus B 🅱️|Cuando veas B 🅱️", n: 1 },
          { t: "Aplaudeix 👏|Aplaude 👏", n: 2 },
          { t: "Digues BIP 🤖|Di BIP 🤖", n: 2 },
          { t: "Gira ↷|Gira ↷", n: 2 },
          { t: "Aixeca't ⬆|Levántate ⬆", n: 1 },
          { t: "Seu ⬇|Siéntate ⬇", n: 1 },
          { t: "Pica de peus 🦶|Golpea con los pies 🦶", n: 1 }
        ] },
      { id: 'p2', t: "Quadrícula: missions del comandament|Cuadrícula: misiones del mando", k: 'quadricula',
        intro: "A la quadrícula del terra, el robot només es mou quan veu un botó: A = un pas endavant, B = gira a la dreta. Apunteu la seqüència de botons que el porta a la bandera.|En la cuadrícula del suelo, el robot solo se mueve cuando ve un botón: A = un paso adelante, B = gira a la derecha. Apuntad la secuencia de botones que lo lleva a la bandera.",
        items: [
          { t: "Missió 1: la recta|Misión 1: la recta", w: 5, h: 5, cells: ['.....', '.....', '>...F', '.....', '.....'],
            instructions: "Quantes vegades cal prémer A?|¿Cuántas veces hay que pulsar A?", sol: "Botons: A, A, A, A.|Botones: A, A, A, A." },
          { t: "Missió 2: la cantonada|Misión 2: la esquina", w: 5, h: 5, cells: ['>....', '.....', '.....', '.....', '....F'],
            instructions: "En Bit ha d'anar fins a la cantonada de baix. Quan has de prémer B?|Bit tiene que ir hasta la esquina de abajo. ¿Cuándo tienes que pulsar B?", sol: "Botons: A, A, A, A, B, A, A, A, A.|Botones: A, A, A, A, B, A, A, A, A." },
          { t: "Missió 3: les roques|Misión 3: las rocas", w: 5, h: 5, cells: ['>..R.', '...R.', '.....', '..R..', '....F'],
            instructions: "Les roques no es poden travessar. Amb aquests botons, per girar a l'esquerra cal prémer B tres vegades!|Las rocas no se pueden atravesar. ¡Con estos botones, para girar a la izquierda hay que pulsar B tres veces!",
            sol: "Una solució: A, A, B, A, A, B, B, B, A, A, B, A, A.|Una solución: A, A, B, A, A, B, B, B, A, A, B, A, A." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: la coreografia ---------- */
  'r3-4': {
    obj: [
      "L'alumne/a planifica una coreografia en trossos (entrada, pas que es repeteix, botons i final) abans de programar-la.|El alumno/a planifica una coreografía en trozos (entrada, paso que se repite, botones y final) antes de programarla.",
      "L'alumne/a combina moviments, llums, notes, bucles i botons en un mateix programa.|El alumno/a combina movimientos, luces, notas, bucles y botones en un mismo programa.",
      "L'alumne/a troba i arregla errors en una coreografia: el nombre de repeticions i l'ordre dels llums.|El alumno/a encuentra y arregla errores en una coreografía: el número de repeticiones y el orden de las luces.",
      "L'alumne/a presenta el seu projecte i explica quin pas es repeteix i què fan els botons.|El alumno/a presenta su proyecto y explica qué paso se repite y qué hacen los botones."
    ],
    comp: [
      "Competència digital (CD5): crear un programa propi que combina sortides (moviment, llum, so) i esdeveniments|Competencia digital (CD5): crear un programa propio que combina salidas (movimiento, luz, sonido) y eventos",
      "Pensament computacional: descomposició, patrons, bucles, esdeveniments i depuració|Pensamiento computacional: descomposición, patrones, bucles, eventos y depuración",
      "Educació artística (música i dansa): coreografia, ritme i moviment expressiu|Educación artística (música y danza): coreografía, ritmo y movimiento expresivo",
      "Comunicació oral: presentar un projecte al grup i valorar el dels companys|Comunicación oral: presentar un proyecto al grupo y valorar el de los compañeros"
    ],
    vocab: [
      ["Coreografia|Coreografía", "Un ball pensat i escrit pas a pas, en ordre.|Un baile pensado y escrito paso a paso, en orden."],
      ["Pas de ball|Paso de baile", "Un grup de moviments que es pot repetir, com un patró.|Un grupo de movimientos que se puede repetir, como un patrón."],
      ["Patró|Patrón", "Una cosa que es repeteix sempre igual: es programa amb un bucle.|Algo que se repite siempre igual: se programa con un bucle."],
      ["Espectacle|Espectáculo", "Una actuació per a un públic, com el ball de la festa major.|Una actuación para un público, como el baile de la fiesta mayor."],
      ["Projecte|Proyecto", "Un repte més gran on fem servir tot el que hem après a la unitat.|Un reto más grande donde usamos todo lo que hemos aprendido en la unidad."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la coreografia»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la coreografía»",
        "Projector, altaveus i la presentació d'aquesta sessió|Proyector, altavoces y la presentación de esta sesión",
        "Les targetes de les sessions anteriors (moviment, llums, notes, Repeteix i esdeveniments) i les targetes de ball noves|Las tarjetas de las sesiones anteriores (movimiento, luces, notas, Repite y eventos) y las tarjetas de baile nuevas",
        "Un espai lliure a l'aula per ballar i un full de pla de la coreografia per alumne/a|Un espacio libre en el aula para bailar y una hoja de plan de la coreografía por alumno/a"
      ],
      imprimir: ["Targetes de ball|Tarjetas de baile", "Full de pla de la coreografia|Hoja de plan de la coreografía"],
      prep: [
        "Imprimir les targetes de ball (un paquet per grup) i un full de pla per alumne/a.|Imprimir las tarjetas de baile (un paquete por grupo) y una hoja de plan por alumno/a.",
        "Deixar un espai lliure perquè els grups puguin ballar la coreografia sense xocar.|Dejar un espacio libre para que los grupos puedan bailar la coreografía sin chocar.",
        "Decidir com es presentaran els projectes: 3 o 4 voluntaris al projector, amb la classe fent de públic que prem els botons.|Decidir cómo se presentarán los proyectos: 3 o 4 voluntarios en el proyector, con la clase haciendo de público que pulsa los botones.",
        "Tenir preparades les insígnies o un reconeixement senzill per al final de la unitat.|Tener preparadas las insignias o un reconocimiento sencillo para el final de la unidad."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i la festa major|Recordamos y la fiesta mayor", fase: 'inici',
        fa: "Fes la pregunta de repàs dels botons. Explica la missió: avui és la festa major i en Bit farà un ball a l'escenari; és el projecte final de la unitat. Escriu a la pissarra tot el que poden fer servir: moviments, llums, notes, bucles i botons.|Haz la pregunta de repaso de los botones. Explica la misión: hoy es la fiesta mayor y Bit hará un baile en el escenario; es el proyecto final de la unidad. Escribe en la pizarra todo lo que pueden usar: movimientos, luces, notas, bucles y botones.",
        diu: ["Si A fa Endavant i premo A tres vegades, què fa en Bit?|Si A hace Adelante y pulso A tres veces, ¿qué hace Bit?",
          "Avui farem servir tot el que hem après a la unitat: llums, música i botons.|Hoy usaremos todo lo que hemos aprendido en la unidad: luces, música y botones."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Què és una coreografia?|¿Qué es una coreografía?", fase: 'teoria',
        fa: "Explica què és una coreografia amb l'animació i mostra el pas de ball amb gir, llum i nota dins d'un bucle. Mostra com els botons deixen que el públic hi participi. Presenta el pla en quatre trossos. A la darrera demostració, la classe prediu on acabarà en Bit abans d'executar.|Explica qué es una coreografía con la animación y muestra el paso de baile con giro, luz y nota dentro de un bucle. Muestra cómo los botones dejan que el público participe. Presenta el plan en cuatro trozos. En la última demostración, la clase predice dónde terminará Bit antes de ejecutar.",
        diu: ["Coneixeu algun ball que tingui un pas que es repeteix?|¿Conocéis algún baile que tenga un paso que se repite?",
          "Quants girs calen perquè en Bit faci una volta sencera?|¿Cuántos giros hacen falta para que Bit dé una vuelta entera?",
          "Què podria fer el botó A durant el ball? I el B?|¿Qué podría hacer el botón A durante el baile? ¿Y el B?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La coreografia en grup|La coreografía en grupo", fase: 'desconnectat',
        fa: "En grups de 3 o 4, cada grup escriu una coreografia curta amb targetes: un pas de ball de 3 o 4 targetes (moviments, un llum que es fa aixecant un full de color i una nota que es canta), una targeta «Repeteix» i una reacció per a «Quan veus A». Després, un altre grup la balla exactament com diu el programa i el grup autor comprova si és el que volia. Si no, busquen el bug junts. Al final, tu aixeques el full A i tots els grups fan la seva reacció alhora.|En grupos de 3 o 4, cada grupo escribe una coreografía corta con tarjetas: un paso de baile de 3 o 4 tarjetas (movimientos, una luz que se hace levantando una hoja de color y una nota que se canta), una tarjeta «Repite» y una reacción para «Cuando veas A». Después, otro grupo la baila exactamente como dice el programa y el grupo autor comprueba si es lo que quería. Si no, buscan el bug juntos. Al final, tú levantas la hoja A y todos los grupos hacen su reacción a la vez.",
        diu: ["Quin és el vostre pas de ball? Quantes vegades es repeteix?|¿Cuál es vuestro paso de baile? ¿Cuántas veces se repite?",
          "El grup que balla fa exactament el que diuen les targetes?|¿El grupo que baila hace exactamente lo que dicen las tarjetas?",
          "Ha sortit diferent? On és el bug: a les targetes o al ball?|¿Ha salido diferente? ¿Dónde está el bug: en las tarjetas o en el baile?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4|Grupos de 3 o 4" },
      { min: 12, t: "A l'ordinador: assaig del ball|En el ordenador: ensayo del baile", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins al repte dels botons del públic. Fixa't en qui oblida comptar els girs i en qui posa les accions dels botons a «Quan comença». Recorda'ls que provin cada tros abans de continuar.|Cada alumno/a hace la sesión hasta el reto de los botones del público. Fíjate en quién olvida contar los giros y en quién pone las acciones de los botones en «Al empezar». Recuérdales que prueben cada trozo antes de seguir.",
        diu: ["Quants girs té el teu pas de ball? Acaba mirant on mirava?|¿Cuántos giros tiene tu paso de baile? ¿Acaba mirando donde miraba?",
          "Quin tros es repeteix? Posa'l dins d'un bucle.|¿Qué trozo se repite? Ponlo dentro de un bucle."],
        slides: ['s11'], app: "Del «Recorda» al repte «Els botons del públic»: la pregunta dels botons, les històries de la festa, les targetes de «Descobreix», ordenar les parts del ball, «La coreografia de casa» (per a casa), la volta a la font, el bucle de la volta sencera, la «Pausa activa», el primer pas de ball, la cercavila i els botons del públic.|Del «Recuerda» al reto «Los botones del público»: la pregunta de los botones, las historias de la fiesta, las tarjetas de «Descubre», ordenar las partes del baile, «La coreografía de casa» (para casa), la vuelta a la fuente, el bucle de la vuelta entera, la «Pausa activa», el primer paso de baile, el pasacalles y los botones del público.", org: "Individual|Individual" },
      { min: 15, t: "Projecte: la coreografia de la festa major|Proyecto: la coreografía de la fiesta mayor", fase: 'crea',
        fa: "Primer, el repte del final amb el bug dels colors. Després, cada alumne/a omple el full de pla (entrada, pas que es repeteix, botons i final) i el passa a blocs tros a tros. Quan funcioni, el desa al portafoli. Qui acabi, prova el projecte d'un company/a prement els botons.|Primero, el reto del final con el bug de los colores. Después, cada alumno/a rellena la hoja de plan (entrada, paso que se repite, botones y final) y la pasa a bloques trozo a trozo. Cuando funcione, la guarda en el portafolio. Quien termine, prueba el proyecto de un compañero/a pulsando los botones.",
        diu: ["Ensenya'm el teu pla: quin és el primer tros?|Enséñame tu plan: ¿cuál es el primer trozo?",
          "Prova cada tros abans de continuar: així, si hi ha un bug, saps on és.|Prueba cada trozo antes de seguir: así, si hay un bug, sabes dónde está.",
          "La teva coreografia té llums, notes i un bucle? Arriba a l'escenari?|¿Tu coreografía tiene luces, notas y un bucle? ¿Llega al escenario?"],
        slides: ['s12', 's13', 's14'], app: "El repte del final amb bug, el pla del gran ball i el projecte de «Crea»: La coreografia de la festa major.|El reto del final con bug, el plan del gran baile y el proyecto de «Crea»: La coreografía de la fiesta mayor.", org: "Individual|Individual" },
      { min: 5, t: "L'espectacle de la festa major|El espectáculo de la fiesta mayor", fase: 'tancament',
        fa: "Tres o quatre voluntaris projecten la seva coreografia. Abans d'executar-la, expliquen el pla i quin pas es repeteix. Mentre balla en Bit, un company/a fa de públic i prem els botons A i B. Després, l'autor/a explica un bug que hagi trobat i com l'ha arreglat.|Tres o cuatro voluntarios proyectan su coreografía. Antes de ejecutarla, explican el plan y qué paso se repite. Mientras baila Bit, un compañero/a hace de público y pulsa los botones A y B. Después, el autor/a explica un bug que haya encontrado y cómo lo ha arreglado.",
        diu: ["Quin pas de ball es repeteix? Quantes vegades?|¿Qué paso de baile se repite? ¿Cuántas veces?",
          "Què fan els teus botons?|¿Qué hacen tus botones?",
          "Què t'ha agradat de la coreografia del company/a?|¿Qué te ha gustado de la coreografía del compañero/a?"],
        slides: ['s15'], app: "El projecte desat a «Crea», projectat des de l'ordinador de cada voluntari/ària.|El proyecto guardado en «Crea», proyectado desde el ordenador de cada voluntario/a.", org: "Tot el grup|Todo el grupo" },
      { min: 3, t: "Tancament de la unitat|Cierre de la unidad", fase: 'tancament',
        fa: "Repassa les idees de la unitat amb el resum i deixa que responguin les preguntes finals. Fes el tiquet de sortida i reconeix la feina de tothom amb la insígnia de coreògraf/a.|Repasa las ideas de la unidad con el resumen y deja que respondan las preguntas finales. Haz el ticket de salida y reconoce el trabajo de todos con la insignia de coreógrafo/a.",
        diu: ["Què és un esdeveniment? Digueu-ne un del ball.|¿Qué es un evento? Decid uno del baile.",
          "Quina sessió de la unitat us ha agradat més: llums, música o botons?|¿Qué sesión de la unidad os ha gustado más: luces, música o botones?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa la volta sencera amb 3 girs (o 5) i en Bit acaba mirant cap a un altre costat.|Hace la vuelta entera con 3 giros (o 5) y Bit acaba mirando hacia otro lado.",
        "Que es posi dret/a i faci els girs del seu programa comptant-los. Quants n'hi calen per tornar a mirar la pissarra?|Que se ponga de pie y haga los giros de su programa contándolos. ¿Cuántos hacen falta para volver a mirar la pizarra?"],
      ["Programa tot el ball sense provar-lo i al final no sap on és el bug.|Programa todo el baile sin probarlo y al final no sabe dónde está el bug.",
        "Proposa-li provar cada tros del pla quan l'acabi. Si ja ho té tot, que faci servir «Pas a pas» fins al primer moment en què el ball no fa el que volia.|Proponle probar cada trozo del plan cuando lo termine. Si ya lo tiene todo, que use «Paso a paso» hasta el primer momento en que el baile no hace lo que quería."],
      ["Posa el pas de ball fora del bucle i el bucle queda buit (o amb només una part del pas).|Pone el paso de baile fuera del bucle y el bucle queda vacío (o con solo una parte del paso).",
        "Que digui el pas en veu alta: «gira, llum, nota». Tots aquests blocs han d'anar dins del Repeteix. Recorda que, en tocar el bucle, els blocs nous hi van a dins.|Que diga el paso en voz alta: «gira, luz, nota». Todos esos bloques tienen que ir dentro del Repite. Recuerda que, al tocar el bucle, los bloques nuevos van dentro."],
      ["Posa tot el ball als botons i en tocar Executa no passa res.|Pone todo el baile en los botones y al tocar Ejecuta no pasa nada.",
        "Recorda-li la sessió anterior: «Quan comença» es fa sol; els botons només quan algú els prem. Quin tros vol que es faci sol?|Recuérdale la sesión anterior: «Al empezar» se hace solo; los botones solo cuando alguien los pulsa. ¿Qué trozo quiere que se haga solo?"],
      ["Vol fer una coreografia molt llarga i no arriba a acabar el projecte.|Quiere hacer una coreografía muy larga y no llega a terminar el proyecto.",
        "Ajuda'l/la a triar: primer una versió curta que compleixi els criteris (llum, nota, bucle i escenari). Quan funcioni i estigui desada, la pot millorar.|Ayúdale a elegir: primero una versión corta que cumpla los criterios (luz, nota, bucle y escenario). Cuando funcione y esté guardada, la puede mejorar."]
    ],
    diff: {
      mes: "Fer que cada botó tingui un pas de ball diferent amb el seu propi bucle i que la coreografia funcioni prement-los en qualsevol ordre. Escriure al full de pla la coreografia d'un company/a només mirant-la ballar.|Hacer que cada botón tenga un paso de baile diferente con su propio bucle y que la coreografía funcione pulsándolos en cualquier orden. Escribir en la hoja de plan la coreografía de un compañero/a solo mirándola bailar.",
      menys: "Fer el pla amb targetes de paper damunt la taula i passar-lo a blocs tros a tros. Al projecte, començar per un pas de ball curt (un gir, un llum i una nota) dins d'un bucle i, després, afegir-hi el camí fins a l'escenari. Els botons són opcionals.|Hacer el plan con tarjetas de papel sobre la mesa y pasarlo a bloques trozo a trozo. En el proyecto, empezar por un paso de baile corto (un giro, una luz y una nota) dentro de un bucle y, después, añadir el camino hasta el escenario. Los botones son opcionales."
    },
    aval: {
      ticket: ["Què és una coreografia? Com la programaries amb en Bit?|¿Qué es una coreografía? ¿Cómo la programarías con Bit?",
        "Què fan els botons durant el ball? Quan s'executen?|¿Qué hacen los botones durante el baile? ¿Cuándo se ejecutan?"],
      rubric: [
        ["Planificació|Planificación", "Escriu el pla en trossos (entrada, pas que es repeteix, botons, final) i el segueix en programar.|Escribe el plan en trozos (entrada, paso que se repite, botones, final) y lo sigue al programar.", "Fa el pla quan l'hi demanen, però programa sense seguir-lo.|Hace el plan cuando se lo piden, pero programa sin seguirlo."],
        ["Combinar blocs|Combinar bloques", "La coreografia fa servir moviment, llums, notes i un bucle, i acaba a l'escenari; si vol, hi afegeix botons.|La coreografía usa movimiento, luces, notas y un bucle, y termina en el escenario; si quiere, añade botones.", "La coreografia funciona però li falta algun element (llum, nota o bucle), o l'acaba amb ajuda.|La coreografía funciona pero le falta algún elemento (luz, nota o bucle), o la termina con ayuda."],
        ["Depurar i presentar|Depurar y presentar", "Troba i arregla errors de repeticions o d'ordre i explica al grup un bug que ha resolt.|Encuentra y arregla errores de repeticiones o de orden y explica al grupo un bug que ha resuelto.", "Arregla els errors amb ajuda i li costa explicar què ha canviat.|Arregla los errores con ayuda y le cuesta explicar qué ha cambiado."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla pot ensenyar-vos la coreografia de la festa major i deixar-vos prémer els botons A i B. Podeu fer també «La coreografia de casa»: inventeu junts un pas de ball, escriviu-lo amb un «Repeteix» i balleu-lo com dos robots.|En casa, con el móvil, vuestro hijo o hija puede enseñaros la coreografía de la fiesta mayor y dejaros pulsar los botones A y B. También podéis hacer «La coreografía de casa»: inventad juntos un paso de baile, escribidlo con un «Repite» y bailadlo como dos robots.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: la coreografia|Proyecto: la coreografía", x: "Avui és la festa major: en Bit farà un ball amb llums, música i botons.|Hoy es la fiesta mayor: Bit hará un baile con luces, música y botones.",
        nota: "Explica que és el projecte final de la unitat i que faran servir tot el que han après en les tres sessions anteriors.|Explica que es el proyecto final de la unidad y que usarán todo lo que han aprendido en las tres sesiones anteriores." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Al comandament, A fa Endavant. Si prems A tres vegades, què fa en Bit?|En el mando, A hace Adelante. Si pulsas A tres veces, ¿qué hace Bit?",
        nota: "Resposta: avança tres caselles. Cada vegada que passa l'esdeveniment, es fan els blocs del botó.|Respuesta: avanza tres casillas. Cada vez que pasa el evento, se hacen los bloques del botón." },
      { id: 's3', k: 'concepte', t: "Avui és la festa major!|¡Hoy es la fiesta mayor!", punts: ["La plaça és plena de gent.|La plaza está llena de gente.", "Hi ha un escenari per a l'espectacle.|Hay un escenario para el espectáculo.", "En Bit hi farà un ball… i el programareu vosaltres!|Bit hará allí un baile… ¡y lo programaréis vosotros!"],
        nota: "Escriu a la pissarra: moviments · llums · notes · bucles · botons. Són els ingredients de la coreografia.|Escribe en la pizarra: movimientos · luces · notas · bucles · botones. Son los ingredientes de la coreografía." },
      { id: 's4', k: 'anim', t: "Un ball escrit pas a pas|Un baile escrito paso a paso", anim: 'u3dance', x: "Una coreografia té un pas de ball que es repeteix: un patró!|Una coreografía tiene un paso de baile que se repite: ¡un patrón!",
        nota: "Pregunta per balls que coneguin amb un pas que es repeteix: sardanes, balls de la festa, cançons de l'escola…|Pregunta por bailes que conozcan con un paso que se repite: sardanas, bailes de la fiesta, canciones del cole…" },
      { id: 's5', k: 'demo', t: "Moviment, llum i nota|Movimiento, luz y nota", x: "Quants girs farà en Bit? Acabarà mirant on mirava?|¿Cuántos giros hará Bit? ¿Terminará mirando donde miraba?",
        demo: { w: { map: ['...', '.^.', '...'] }, prog: '2{ r light:r note:do r light:u note:mi }' },
        nota: "Resposta: 4 girs (2 per volta del bucle): fa la volta sencera i acaba mirant amunt, com al principi.|Respuesta: 4 giros (2 por vuelta del bucle): da la vuelta entera y termina mirando arriba, como al principio." },
      { id: 's6', k: 'demo', t: "El públic prem els botons|El público pulsa los botones", x: "A: avança amb llum i música. B: gira sobre si mateix. Què passarà amb A, B, A, A?|A: avanza con luz y música. B: gira sobre sí mismo. ¿Qué pasará con A, B, A, A?",
        demo: { w: { map: ['>##F'] }, prog: '2{ light:y note:sol }', evs: { A: 'f light:g note:mi', B: '4{ r }' }, press: 'ABAA' },
        nota: "Fes notar que el ball de «Quan comença» es fa sol i que els botons hi afegeixen sorpreses quan el públic els prem.|Haz notar que el baile de «Al empezar» se hace solo y que los botones añaden sorpresas cuando el público los pulsa." },
      { id: 's7', k: 'anim', t: "Primer, el pla del ball|Primero, el plan del baile", anim: 'plan', punts: ["Entrada: com arribo a prop de l'escenari?|Entrada: ¿cómo llego cerca del escenario?", "Pas de ball: què repeteixo i quantes vegades?|Paso de baile: ¿qué repito y cuántas veces?", "Botons: què faran A i B?|Botones: ¿qué harán A y B?", "Final: com pujo a l'escenari?|Final: ¿cómo subo al escenario?"],
        nota: "Recorda el repartidor de la unitat 1: descompondre un problema gran en trossos petits.|Recuerda el repartidor de la unidad 1: descomponer un problema grande en trozos pequeños." },
      { id: 's8', k: 'demo', t: "Pensa abans d'executar|Piensa antes de ejecutar", x: "En Bit fa la volta a la font. On acabarà: A, B o C?|Bit da la vuelta a la fuente. ¿Dónde terminará: A, B o C?",
        demo: { w: { map: ['>#C', '#~#', 'B#A'] }, prog: '2{ f f r light:g note:sol }' },
        nota: "Que tothom assenyali abans d'executar. Resposta: A, després de dues voltes del bucle.|Que todos señalen antes de ejecutar. Respuesta: A, después de dos vueltas del bucle." },
      { id: 's9', k: 'activitat', t: "La coreografia en grup|La coreografía en grupo", timer: 12, punts: ["Escriviu un pas de ball amb 3 o 4 targetes i una targeta «Repeteix».|Escribid un paso de baile con 3 o 4 tarjetas y una tarjeta «Repite».", "Afegiu-hi un llum (aixecar un full de color) i una nota (cantar).|Añadid una luz (levantar una hoja de color) y una nota (cantar).", "Un altre grup el balla exactament com diu el programa.|Otro grupo lo baila exactamente como dice el programa.", "Al final, «Quan veus A»: tots reaccionen alhora!|Al final, «Cuando veas A»: ¡todos reaccionan a la vez!"],
        nota: "Si un ball no surt com volien, que busquin el bug a les targetes, com fan a l'app.|Si un baile no sale como querían, que busquen el bug en las tarjetas, como hacen en la app." },
      { id: 's10', k: 'concepte', t: "Com s'escriu un ball|Cómo se escribe un baile", punts: ["Una targeta = un moviment, un llum o una nota.|Una tarjeta = un movimiento, una luz o una nota.", "El pas que es repeteix va dins del «Repeteix».|El paso que se repite va dentro del «Repite».", "«Quan veus A»: el que passa quan el públic prem A.|«Cuando veas A»: lo que pasa cuando el público pulsa A.", "Qui balla no s'inventa res: segueix el programa.|Quien baila no se inventa nada: sigue el programa."],
        nota: "Deixa aquesta diapositiva projectada mentre els grups escriuen i ballen.|Deja esta diapositiva proyectada mientras los grupos escriben y bailan." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Projecte: la coreografia».|Abre la sesión «Proyecto: la coreografía».", "Compta els girs de cada pas de ball.|Cuenta los giros de cada paso de baile.", "Para quan acabis el repte dels botons del públic.|Para cuando termines el reto de los botones del público."],
        nota: "Comprova que ningú posa els blocs dels botons a «Quan comença».|Comprueba que nadie pone los bloques de los botones en «Al empezar»." },
      { id: 's12', k: 'repte', t: "El final amb un bug|El final con un bug", timer: 3, x: "Els colors surten al revés: vermell i blau s'han de canviar de lloc.|Los colores salen al revés: rojo y azul tienen que cambiarse de sitio.",
        nota: "Pista: mireu els llums de dalt del món i toqueu cada llum del bucle per canviar-ne el color.|Pista: mirad las luces de arriba del mundo y tocad cada luz del bucle para cambiar su color." },
      { id: 's13', k: 'concepte', t: "El gran ball: fes el pla|El gran baile: haz el plan", punts: ["Escriu els quatre trossos al full de pla.|Escribe los cuatro trozos en la hoja de plan.", "Programa un tros i prova'l.|Programa un trozo y pruébalo.", "Criteris: llums, notes, un bucle i acabar a l'escenari.|Criterios: luces, notas, un bucle y terminar en el escenario.", "Els botons són un extra per al públic.|Los botones son un extra para el público."],
        nota: "No deixis començar a programar fins que cada alumne/a tingui el pla escrit o dit en veu alta.|No dejes empezar a programar hasta que cada alumno/a tenga el plan escrito o dicho en voz alta." },
      { id: 's14', k: 'activitat', t: "Projecte: la coreografia de la festa major|Proyecto: la coreografía de la fiesta mayor", timer: 10, x: "Fes ballar en Bit per la plaça amb llums i música i acaba a l'escenari. Si vols, programa els botons A i B.|Haz bailar a Bit por la plaza con luces y música y termina en el escenario. Si quieres, programa los botones A y B.",
        nota: "Qui acabi pot provar el projecte d'un company/a fent de públic, o afegir un pas de ball diferent a cada botó.|Quien termine puede probar el proyecto de un compañero/a haciendo de público, o añadir un paso de baile diferente a cada botón." },
      { id: 's15', k: 'activitat', t: "L'espectacle de la festa major|El espectáculo de la fiesta mayor", timer: 5, punts: ["Explica el teu pla abans d'executar.|Explica tu plan antes de ejecutar.", "Quin pas de ball es repeteix?|¿Qué paso de baile se repite?", "Un company/a fa de públic i prem els botons.|Un compañero/a hace de público y pulsa los botones.", "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?"],
        nota: "Fes que la classe aplaudeixi cada espectacle: és la festa major!|Haz que la clase aplauda cada espectáculo: ¡es la fiesta mayor!" },
      { id: 's16', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["El bloc Llum fa senyals i, amb un bucle, pampallugues.|El bloque Luz hace señales y, con un bucle, parpadeos.", "Una melodia és una seqüència de notes: l'ordre importa.|Una melodía es una secuencia de notas: el orden importa.", "Un esdeveniment fa que el programa reaccioni: els botons A i B.|Un evento hace que el programa reaccione: los botones A y B.", "Una coreografia combina tot això amb un pla.|Una coreografía combina todo esto con un plan."],
        nota: "Felicita la classe pel projecte. Avança que a la unitat següent en Bit aprendrà a mirar el món i a prendre decisions.|Felicita a la clase por el proyecto. Avanza que en la unidad siguiente Bit aprenderá a mirar el mundo y a tomar decisiones." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què és una coreografia?|¿Qué es una coreografía?", "Què fan els botons durant el ball i quan s'executen?|¿Qué hacen los botones durante el baile y cuándo se ejecutan?"],
        nota: "Respostes: un ball escrit pas a pas, amb un pas que es repeteix; els blocs dels botons s'executen cada vegada que el públic prem el botó.|Respuestas: un baile escrito paso a paso, con un paso que se repite; los bloques de los botones se ejecutan cada vez que el público pulsa el botón." }
    ],
    print: [
      { id: 'p1', t: "Targetes de ball|Tarjetas de baile", k: 'targetes',
        intro: "Afegiu aquestes targetes a les de les sessions anteriors (girs, llums, notes, Repeteix i esdeveniments). Amb totes juntes, cada grup escriu la seva coreografia.|Añadid estas tarjetas a las de las sesiones anteriores (giros, luces, notas, Repite y eventos). Con todas juntas, cada grupo escribe su coreografía.",
        items: [
          { t: "Salta ⬆|Salta ⬆", n: 2 },
          { t: "Aplaudeix 👏|Aplaude 👏", n: 2 },
          { t: "Canta «la!» 🎵|Canta «¡la!» 🎵", n: 2 },
          { t: "Mans amunt 🙌|Manos arriba 🙌", n: 2 },
          { t: "Aixeca el full groc 🟡|Levanta la hoja amarilla 🟡", n: 1 },
          { t: "Aixeca el full blau 🔵|Levanta la hoja azul 🔵", n: 1 },
          { t: "Repeteix 4 vegades 🔁|Repite 4 veces 🔁", n: 1 },
          { t: "Quan veus A 🅰️|Cuando veas A 🅰️", n: 1 }
        ] },
      { id: 'p2', t: "Full de pla de la coreografia|Hoja de plan de la coreografía", k: 'fitxa',
        intro: "Primer penseu el ball a trossos i després passeu-lo a blocs. Prova cada tros abans de continuar!|Primero pensad el baile a trozos y después pasadlo a bloques. ¡Prueba cada trozo antes de seguir!",
        items: [
          { q: "El pas de ball: en Bit fa aquest programa. Quantes vegades gira? Acaba mirant on mirava al principi?|El paso de baile: Bit hace este programa. ¿Cuántas veces gira? ¿Termina mirando donde miraba al principio?", prog: '4{ r light:u note:mi }',
            sol: "Gira 4 vegades: fa la volta sencera i acaba mirant com al principi. Sonen 4 mi.|Gira 4 veces: da la vuelta entera y termina mirando como al principio. Suenan 4 mi." },
          { q: "On acabarà en Bit? Encercla la lletra.|¿Dónde terminará Bit? Rodea la letra.", w: { map: ['>#C', '#~#', 'B#A'] }, prog: '2{ f f r light:g note:sol }', a: 'A',
            sol: "A la A: cada volta del bucle avança dues caselles i gira a la dreta.|En la A: cada vuelta del bucle avanza dos casillas y gira a la derecha." },
          { q: "El pla de la teva coreografia. Entrada: … · Pas que es repeteix (quantes vegades?): … · Botó A: … · Botó B: … · Final: …|El plan de tu coreografía. Entrada: … · Paso que se repite (¿cuántas veces?): … · Botón A: … · Botón B: … · Final: …",
            sol: "Resposta oberta. Comproveu que el pla té llums, notes i un pas dins d'un bucle, i que acaba a l'escenari.|Respuesta abierta. Comprobad que el plan tiene luces, notas y un paso dentro de un bucle, y que termina en el escenario." },
          { q: "Quin bug has trobat en el teu projecte i com l'has arreglat?|¿Qué bug has encontrado en tu proyecto y cómo lo has arreglado?",
            sol: "Resposta oberta. Valoreu que expliqui on fallava (per exemple, un gir de més) i quin bloc ha canviat.|Respuesta abierta. Valorad que explique dónde fallaba (por ejemplo, un giro de más) y qué bloque ha cambiado." }
        ] }
    ]
  }
});

/* ==================== Tech Robot · unitat 4 «En Bit veu el món» ==================== */
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

/* ==================== Tech Robot · unitat 5 «Ordres noves» ==================== */
/* Tech Robot · unitat 5 «Ordres noves» (funcions) · guia del professorat (r5-1 … r5-4) */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Posa nom a un grup de blocs ---------- */
  'r5-1': {
    obj: [
      "L'alumne/a explica amb les seves paraules què és una funció (un grup d'ordres amb un nom) i en dona un exemple de la vida diària.|El alumno/a explica con sus palabras qué es una función (un grupo de órdenes con un nombre) y da un ejemplo de la vida diaria.",
      "L'alumne/a fa servir una funció ja feta cridant-la amb el seu bloc i prediu on acabarà en Bit.|El alumno/a usa una función ya hecha llamándola con su bloque y predice dónde terminará Bit.",
      "L'alumne/a escriu els blocs d'una funció a partir del tros de camí que es repeteix.|El alumno/a escribe los bloques de una función a partir del trozo de camino que se repite.",
      "L'alumne/a distingeix entre escriure una funció i cridar-la: la funció només es fa quan el programa la crida.|El alumno/a distingue entre escribir una función y llamarla: la función solo se hace cuando el programa la llama."
    ],
    comp: [
      "Competència digital (CD5): crear programes per blocs que fan servir ordres noves definides per l'alumne/a|Competencia digital (CD5): crear programas por bloques que usan órdenes nuevas definidas por el alumno/a",
      "Pensament computacional: abstracció, funcions (definir i cridar) i reutilització|Pensamiento computacional: abstracción, funciones (definir y llamar) y reutilización",
      "Matemàtiques: reconeixement de patrons i orientació en una quadrícula|Matemáticas: reconocimiento de patrones y orientación en una cuadrícula",
      "Comunicació oral: posar noms clars a les coses i explicar què vol dir cada nom|Comunicación oral: poner nombres claros a las cosas y explicar qué quiere decir cada nombre"
    ],
    vocab: [
      ["Funció|Función", "Un grup d'ordres amb un nom. És com una ordre nova.|Un grupo de órdenes con un nombre. Es como una orden nueva."],
      ["Cridar una funció|Llamar a una función", "Posar el seu bloc al programa perquè en Bit la faci.|Poner su bloque en el programa para que Bit la haga."],
      ["Nom de la funció|Nombre de la función", "La paraula que diu què fa la funció: escala, cantonada…|La palabra que dice qué hace la función: escalera, esquina…"],
      ["Escriure una funció|Escribir una función", "Posar a dins els blocs que farà cada vegada que la cridin.|Poner dentro los bloques que hará cada vez que la llamen."],
      ["Bloc lila|Bloque lila", "El bloc de les funcions: un sol bloc que fa la feina de molts.|El bloque de las funciones: un solo bloque que hace el trabajo de muchos."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Posa nom a un grup de blocs»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Ponle nombre a un grupo de bloques»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra de 5 × 5 i les targetes d'ordres de la unitat 1|La cuadrícula del suelo de 5 × 5 y las tarjetas de órdenes de la unidad 1",
        "Un full en blanc per grup, que farà de «llibreta de funcions», i un retolador|Una hoja en blanco por grupo, que hará de «libreta de funciones», y un rotulador"
      ],
      imprimir: ["Targetes de funció|Tarjetas de función", "Quadrícula del terra: missions amb funcions|Cuadrícula del suelo: misiones con funciones"],
      prep: [
        "Imprimir les targetes de funció (millor en paper lila o pintades de lila) i retallar-les: un paquet per grup de 3.|Imprimir las tarjetas de función (mejor en papel lila o pintadas de lila) y recortarlas: un paquete por grupo de 3.",
        "Tenir a punt la quadrícula del terra amb la missió 1 muntada: en Bit a baix a l'esquerra mirant a la dreta i la bandera a dalt a la dreta.|Tener a punto la cuadrícula del suelo con la misión 1 montada: Bit abajo a la izquierda mirando a la derecha y la bandera arriba a la derecha.",
        "Provar abans la demostració de la diapositiva 9 per saber on acaba en Bit (a la A).|Probar antes la demostración de la diapositiva 9 para saber dónde termina Bit (en la A).",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i una ordre misteriosa|Recordamos y una orden misteriosa", fase: 'inici',
        fa: "Fes les preguntes de repàs del «si… si no…» i del bucle. Després pregunta què fan quan a casa els diuen «para taula». Apunta a la pissarra tots els passos que diguin: una sola ordre amaga molts passos. Presenta l'objectiu: avui en Bit aprendrà ordres noves.|Haz las preguntas de repaso del «si… si no…» y del bucle. Después pregunta qué hacen cuando en casa les dicen «pon la mesa». Apunta en la pizarra todos los pasos que digan: una sola orden esconde muchos pasos. Presenta el objetivo: hoy Bit aprenderá órdenes nuevas.",
        diu: ["Quan us diuen «para taula», què feu exactament? Quants passos són?|Cuando os dicen «pon la mesa», ¿qué hacéis exactamente? ¿Cuántos pasos son?",
          "Ningú no us explica plat per plat: ja sabeu què vol dir. Doncs avui en Bit també aprendrà paraules així.|Nadie os explica plato por plato: ya sabéis qué quiere decir. Pues hoy Bit también aprenderá palabras así."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és una funció?|¿Qué es una función?", fase: 'teoria',
        fa: "Explica la funció amb «para taula» i demana més exemples de casa i de l'escola. Mostra com quatre blocs es tanquen dins d'un bloc lila amb nom i com en Bit va a la funció, la fa i torna. A la primera demostració, la classe compta quantes vegades en Bit fa els blocs de la funció. A la segona, cada alumne/a assenyala amb el dit on creu que acabarà abans d'executar-la.|Explica la función con «pon la mesa» y pide más ejemplos de casa y del cole. Muestra cómo cuatro bloques se cierran dentro de un bloque lila con nombre y cómo Bit va a la función, la hace y vuelve. En la primera demostración, la clase cuenta cuántas veces Bit hace los bloques de la función. En la segunda, cada alumno/a señala con el dedo dónde cree que terminará antes de ejecutarla.",
        diu: ["Una funció és una ordre nova feta d'altres ordres. Quines funcions feu cada matí?|Una función es una orden nueva hecha de otras órdenes. ¿Qué funciones hacéis cada mañana?",
          "Quan en Bit troba el bloc lila, on va? I després, on torna?|Cuando Bit encuentra el bloque lila, ¿adónde va? ¿Y después, adónde vuelve?",
          "Si escric la funció però no la crido, què farà en Bit?|Si escribo la función pero no la llamo, ¿qué hará Bit?",
          "Abans d'executar: on acabarà en Bit, a la A, a la B o a la C?|Antes de ejecutar: ¿dónde terminará Bit, en la A, en la B o en la C?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La fàbrica d'ordres|La fábrica de órdenes", fase: 'desconnectat',
        fa: "Grups de 3 amb tres papers: programador/a, robot i guardià/ana de la llibreta. El guardià/ana escriu el nom de la funció a dalt del full i hi posa les targetes de la funció (per exemple, l'escala). El programador/a fa el programa amb targetes normals i targetes lila. Quan el robot arriba a una targeta lila, demana la funció al guardià/ana, fa les seves targetes una a una i torna al programa. Feu les missions de la quadrícula i roteu els papers a cada missió.|Grupos de 3 con tres papeles: programador/a, robot y guardián/a de la libreta. El guardián/a escribe el nombre de la función arriba de la hoja y pone en ella las tarjetas de la función (por ejemplo, la escalera). El programador/a hace el programa con tarjetas normales y tarjetas lila. Cuando el robot llega a una tarjeta lila, pide la función al guardián/a, hace sus tarjetas una a una y vuelve al programa. Haced las misiones de la cuadrícula y rotad los papeles en cada misión.",
        diu: ["Robot: quan trobis la targeta lila, digues «crido la funció!» i fes-la sencera.|Robot: cuando encuentres la tarjeta lila, di «¡llamo a la función!» y hazla entera.",
          "Quantes targetes us heu estalviat gràcies a la funció?|¿Cuántas tarjetas os habéis ahorrado gracias a la función?",
          "Quin tros del camí es repeteix? Aquest tros és el que va a la llibreta.|¿Qué trozo del camino se repite? Ese trozo es el que va a la libreta."],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança al seu ritme fins a l'«Investiga». Al repte de l'escala ja feta, fixa't en qui intenta posar els blocs a mà: el màxim de 4 blocs l'obliga a fer servir la funció. Al pas «El ball amb nom», que toquin «Ho hem fet!» si ja l'han fet a la fàbrica d'ordres o que el deixin per a casa.|Cada alumno/a abre la sesión y avanza a su ritmo hasta el «Investiga». En el reto de la escalera ya hecha, fíjate en quién intenta poner los bloques a mano: el máximo de 4 bloques le obliga a usar la función. En el paso «El baile con nombre», que toquen «¡Lo hemos hecho!» si ya lo han hecho en la fábrica de órdenes o que lo dejen para casa.",
        diu: ["Quants esglaons hi ha? Doncs quantes vegades has de cridar l'escala?|¿Cuántos escalones hay? Pues, ¿cuántas veces tienes que llamar a la escalera?",
          "A la pregunta «On acabarà?», fes la funció amb el dit dues vegades abans de triar.|En la pregunta «¿Dónde terminará?», haz la función con el dedo dos veces antes de elegir.",
          "A l'«Investiga», la funció està bé. On és l'error, doncs?|En el «Investiga», la función está bien. ¿Dónde está el error, entonces?"],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: les històries de la llibreta, les targetes de «Descobreix», ordenar els passos de «fes el llit», «El ball amb nom», la funció mitja volta, «On acabarà?» amb la cantonada, l'escala ja feta amb 4 blocs i el bloc equivocat després de l'escala.|De «La misión» hasta «Investiga»: las historias de la libreta, las tarjetas de «Descubre», ordenar los pasos de «haz la cama», «El baile con nombre», la función media vuelta, «¿Dónde terminará?» con la esquina, la escalera ya hecha con 4 bloques y el bloque equivocado después de la escalera.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: escriu la funció|Retos: escribe la función", fase: 'ordinador',
        fa: "Feu la pausa activa de la funció «salutació» tots junts. Després programa amb la classe la funció «baixa l'escala» a la diapositiva 13: primer decidiu entre tots els blocs d'un sol esglaó i després quantes vegades cal cridar-la. Deixa'ls fer els dos reptes. Recorda'ls que per posar blocs dins de la funció cal tocar dins del requadre lila.|Haced la pausa activa de la función «saludo» todos juntos. Después programa con la clase la función «baja la escalera» en la diapositiva 13: primero decidid entre todos los bloques de un solo escalón y después cuántas veces hay que llamarla. Deja que hagan los dos retos. Recuérdales que para poner bloques dentro de la función hay que tocar dentro del recuadro lila.",
        diu: ["Pensa només en un esglaó. Quins blocs té?|Piensa solo en un escalón. ¿Qué bloques tiene?",
          "A la torre, en Bit mira amunt. Per què la mateixa escala ara va cap a l'esquerra?|En la torre, Bit mira arriba. ¿Por qué la misma escalera ahora va hacia la izquierda?",
          "El comptador diu quants blocs fas servir, també els de dins de la funció.|El contador dice cuántos bloques usas, también los de dentro de la función."],
        slides: ['s13', 's14'], app: "«Pausa activa» i els dos reptes: la funció «baixa l'escala» (el programa ja la crida) i la torre del rellotge (funció i programa, màxim 8 blocs).|«Pausa activa» y los dos retos: la función «baja la escalera» (el programa ya la llama) y la torre del reloj (función y programa, máximo 8 bloques).", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la meva primera funció|Crea: mi primera función", fase: 'crea',
        fa: "Cada alumne/a escriu la funció «la meva ordre» i la crida per recollir les 4 estrelles. Quan acabin, per parelles, s'expliquen la funció amb paraules: «la meva ordre vol dir…».|Cada alumno/a escribe la función «mi orden» y la llama para recoger las 4 estrellas. Cuando terminen, por parejas, se explican la función con palabras: «mi orden quiere decir…».",
        diu: ["Explica'm la teva funció sense ensenyar-me la pantalla.|Explícame tu función sin enseñarme la pantalla.",
          "Quantes vegades la crides? Podries cridar-la més vegades i fer servir menys blocs?|¿Cuántas veces la llamas? ¿Podrías llamarla más veces y usar menos bloques?"],
        slides: ['s15'], app: "Pas «Crea»: La meva primera funció.|Paso «Crea»: Mi primera función.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum i deixa que responguin les preguntes finals de l'app. A la porta, fes a cada alumne/a una de les preguntes del tiquet.|Repasa las tres ideas de la sesión con el resumen y deja que respondan las preguntas finales de la app. En la puerta, haz a cada alumno/a una de las preguntas del ticket.",
        diu: ["Digueu-me una funció de casa i quins passos té.|Decidme una función de casa y qué pasos tiene.",
          "Quan fa en Bit els blocs d'una funció?|¿Cuándo hace Bit los bloques de una función?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu els blocs dins de la funció, però el programa queda buit i en Bit no es mou.|Escribe los bloques dentro de la función, pero el programa queda vacío y Bit no se mueve.",
        "Pregunta: qui crida la funció? Recorda-li la llibreta: la funció espera fins que el programa posa el seu bloc lila.|Pregunta: ¿quién llama a la función? Recuérdale la libreta: la función espera hasta que el programa pone su bloque lila."],
      ["Posa al programa els blocs que havien d'anar a dins de la funció.|Pone en el programa los bloques que tenían que ir dentro de la función.",
        "Que busqui la ratlla «els blocs nous van aquí»: és on aniran els blocs. Per escriure a la funció, cal tocar dins del requadre lila.|Que busque la raya «los bloques nuevos van aquí»: es donde irán los bloques. Para escribir en la función, hay que tocar dentro del recuadro lila."],
      ["Posa tot el camí dins de la funció en lloc d'un sol esglaó.|Pone todo el camino dentro de la función en lugar de un solo escalón.",
        "Demana-li que assenyali al mapa un sol esglaó amb el dit. Quins blocs calen per a aquest tros? Això és la funció.|Pídele que señale en el mapa un solo escalón con el dedo. ¿Qué bloques hacen falta para ese trozo? Eso es la función."],
      ["No entén per què la mateixa funció fa pujar en Bit cap a un altre costat a la torre.|No entiende por qué la misma función hace subir a Bit hacia otro lado en la torre.",
        "Que es posi al lloc d'en Bit, com a la unitat 1: mira cap on mira ell i fa la funció amb el cos.|Que se ponga en el lugar de Bit, como en la unidad 1: mira hacia donde mira él y hace la función con el cuerpo."],
      ["Se sorprèn que el comptador digui més blocs dels que veu al programa.|Le sorprende que el contador diga más bloques de los que ve en el programa.",
        "Explica que el comptador també suma els blocs de dins de les funcions que escriu. Compteu-los junts amb el dit.|Explica que el contador también suma los bloques de dentro de las funciones que escribe. Contadlos juntos con el dedo."]
    ],
    diff: {
      mes: "Fer la torre amb una funció de dos esglaons (8 blocs a dins i 2 crides) i comparar-la amb la d'un esglaó: quina fa servir menys blocs? Després, inventar una funció per a la quadrícula del terra perquè un company/a endevini on acabarà el robot.|Hacer la torre con una función de dos escalones (8 bloques dentro y 2 llamadas) y compararla con la de un escalón: ¿cuál usa menos bloques? Después, inventar una función para la cuadrícula del suelo para que un compañero/a adivine dónde terminará el robot.",
      menys: "Tenir al costat de l'ordinador les quatre targetes de l'escala sobre una targeta lila: primer les mira i després les copia dins de la funció. Començar pel repte de la funció ja feta i dir en veu alta «crido l'escala» cada vegada que posa el bloc lila.|Tener al lado del ordenador las cuatro tarjetas de la escalera sobre una tarjeta lila: primero las mira y después las copia dentro de la función. Empezar por el reto de la función ya hecha y decir en voz alta «llamo a la escalera» cada vez que pone el bloque lila."
    },
    aval: {
      ticket: ["Què és una funció? Digues-ne un exemple de casa.|¿Qué es una función? Di un ejemplo de casa.",
        "Si escric una funció però no la crido, què fa en Bit?|Si escribo una función pero no la llamo, ¿qué hace Bit?"],
      rubric: [
        ["Concepte de funció|Concepto de función", "Explica que és un grup d'ordres amb un nom i en dona un exemple propi.|Explica que es un grupo de órdenes con un nombre y da un ejemplo propio.", "Reconeix una funció en un exemple, però encara no l'explica amb les seves paraules.|Reconoce una función en un ejemplo, pero todavía no la explica con sus palabras."],
        ["Cridar una funció|Llamar a una función", "Fa servir el bloc lila les vegades que cal i prediu bé on acaba en Bit.|Usa el bloque lila las veces que hace falta y predice bien dónde termina Bit.", "Fa servir la funció, però de vegades oblida cridar-la o compta malament les crides.|Usa la función, pero a veces olvida llamarla o cuenta mal las llamadas."],
        ["Escriure una funció|Escribir una función", "Troba el tros que es repeteix i l'escriu dins de la funció sense ajuda.|Encuentra el trozo que se repite y lo escribe dentro de la función sin ayuda.", "Escriu la funció amb ajuda o hi posa més blocs dels necessaris.|Escribe la función con ayuda o pone más bloques de los necesarios."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts l'activitat «El ball amb nom»: inventeu tres moviments, poseu-los un nom i feu un programa que el faci servir.|En casa, con el móvil, podéis repetir la sesión y hacer juntos la actividad «El baile con nombre»: inventad tres movimientos, ponedles un nombre y haced un programa que lo use.",
    slides: [
      { id: 's1', k: 'portada', t: 'Posa nom a un grup de blocs|Ponle nombre a un grupo de bloques', x: "Avui en Bit aprendrà ordres noves: les funcions.|Hoy Bit aprenderá órdenes nuevas: las funciones.",
        nota: "Explica que comença una unitat nova: al final, en Bit farà encàrrecs per tota la ciutat amb ordres que inventaran ells.|Explica que empieza una unidad nueva: al final, Bit hará encargos por toda la ciudad con órdenes que inventarán ellos." },
      { id: 's2', k: 'repas', t: 'Recordes?|¿Recuerdas?', punts: ["Si hi ha un obstacle davant: Gira a la dreta. Si no: Endavant.|Si hay un obstáculo delante: Gira a la derecha. Si no: Adelante.", "Repeteix 3 vegades: Endavant, Endavant.|Repite 3 veces: Adelante, Adelante."],
        nota: "Respostes: si hi ha obstacle, gira (i no avança); el bucle fa 6 passos. Recorda que avui tot això es pot posar dins d'una funció.|Respuestas: si hay obstáculo, gira (y no avanza); el bucle hace 6 pasos. Recuerda que hoy todo esto se puede poner dentro de una función." },
      { id: 's3', k: 'pregunta', t: 'Què vol dir «para taula»?|¿Qué quiere decir «pon la mesa»?', x: "Una sola ordre… quants passos amaga?|Una sola orden… ¿cuántos pasos esconde?",
        nota: "Apunta a la pissarra els passos que diguin. Remarca que ningú no els explica cada dia: ja saben què vol dir.|Apunta en la pizarra los pasos que digan. Remarca que nadie se los explica cada día: ya saben qué quiere decir." },
      { id: 's4', k: 'anim', t: "Una ordre feta d'altres ordres|Una orden hecha de otras órdenes", anim: 'u5recipe', x: "Una funció és una ordre nova feta d'altres ordres.|Una función es una orden nueva hecha de otras órdenes.",
        nota: "Fes notar que «Para taula» és el nom i les quatre línies són el que hi ha a dins.|Haz notar que «Pon la mesa» es el nombre y las cuatro líneas son lo que hay dentro." },
      { id: 's5', k: 'pregunta', t: 'Funcions de cada dia|Funciones de cada día', punts: ["Fes el llit|Haz la cama", "Renta't les mans|Lávate las manos", "Prepara la motxilla|Prepara la mochila"],
        nota: "Tria'n una i digueu entre tots els passos que té a dins. Pregunta: si en canviem un pas, canvia tota la funció?|Elige una y decid entre todos los pasos que tiene dentro. Pregunta: si cambiamos un paso, ¿cambia toda la función?" },
      { id: 's6', k: 'anim', t: 'Un grup de blocs amb nom|Un grupo de bloques con nombre', anim: 'u5pack', x: "Quatre blocs es diuen «escala»: ara un sol bloc lila fa la feina dels quatre.|Cuatro bloques se llaman «escalera»: ahora un solo bloque lila hace el trabajo de los cuatro.",
        nota: "Demana que llegeixin els quatre blocs en veu alta i que expliquin per què «escala» és un bon nom.|Pide que lean los cuatro bloques en voz alta y que expliquen por qué «escalera» es un buen nombre." },
      { id: 's7', k: 'anim', t: 'Cridar una funció|Llamar a una función', anim: 'u5call', x: "En Bit va a la funció, en fa tots els blocs i torna al programa.|Bit va a la función, hace todos sus bloques y vuelve al programa.",
        nota: "Segueix el requadre groc amb el dit: programa, funció, i torna. Insisteix que la funció només es fa quan se la crida.|Sigue el recuadro amarillo con el dedo: programa, función, y vuelve. Insiste en que la función solo se hace cuando se la llama." },
      { id: 's8', k: 'demo', t: 'En Bit fa servir la funció|Bit usa la función', x: "La funció A és l'escala. Programa: Funció A, Funció A, Endavant.|La función A es la escalera. Programa: Función A, Función A, Adelante.",
        demo: { w: { map: ['..#F', '.##.', '>#..'] }, prog: 'A A f', fns: { A: 'f l f r' } },
        nota: "Abans d'executar, demana quants blocs farà en Bit en total (9). Després compteu-los mentre s'il·luminen.|Antes de ejecutar, pide cuántos bloques hará Bit en total (9). Después contadlos mientras se iluminan." },
      { id: 's9', k: 'demo', t: 'Pensa abans d\'executar|Piensa antes de ejecutar', x: "La funció A és: Endavant, Endavant, Gira a la dreta. El programa la crida dues vegades. On acabarà en Bit: A, B o C?|La función A es: Adelante, Adelante, Gira a la derecha. El programa la llama dos veces. ¿Dónde terminará Bit: A, B o C?",
        demo: { w: { map: ['.C...', '.#...', '.B#A.', '.#...', '.^...'] }, prog: 'A A', fns: { A: 'f f r' } },
        nota: "Que tothom assenyali amb el dit abans d'executar. Resposta: A. Qui ha dit B ha fet la funció només una vegada; qui ha dit C ha oblidat el gir.|Que todos señalen con el dedo antes de ejecutar. Respuesta: A. Quien ha dicho B ha hecho la función solo una vez; quien ha dicho C ha olvidado el giro." },
      { id: 's10', k: 'activitat', t: "La fàbrica d'ordres|La fábrica de órdenes", timer: 12, punts: ["Guardià/ana: escriu el nom de la funció i hi posa les targetes.|Guardián/a: escribe el nombre de la función y pone las tarjetas.", "Programador/a: fa el programa amb targetes normals i lila.|Programador/a: hace el programa con tarjetas normales y lila.", "Robot: a cada targeta lila, fa la funció sencera i torna.|Robot: en cada tarjeta lila, hace la función entera y vuelve.", "Canvieu els papers a cada missió.|Cambiad los papeles en cada misión."],
        nota: "Comenceu tots junts amb la missió 1 perquè vegin com funciona la llibreta. Després, cada grup al seu ritme.|Empezad todos juntos con la misión 1 para que vean cómo funciona la libreta. Después, cada grupo a su ritmo." },
      { id: 's11', k: 'concepte', t: 'Les regles de la llibreta|Las reglas de la libreta', punts: ["La funció té un nom i unes targetes a dins.|La función tiene un nombre y unas tarjetas dentro.", "Al programa, la funció és una sola targeta lila.|En el programa, la función es una sola tarjeta lila.", "La funció es fa cada vegada que surt la targeta lila.|La función se hace cada vez que sale la tarjeta lila.", "Després de la funció, el robot torna al programa.|Después de la función, el robot vuelve al programa."],
        nota: "Deixa aquesta diapositiva projectada mentre treballen a la quadrícula.|Deja esta diapositiva proyectada mientras trabajan en la cuadrícula." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Posa nom a un grup de blocs».|Abre la sesión «Ponle nombre a un grupo de bloques».", "A «On acabarà?», fes la funció amb el dit abans de triar.|En «¿Dónde terminará?», haz la función con el dedo antes de elegir.", "A l'escala ja feta, només tens 4 blocs!|En la escalera ya hecha, ¡solo tienes 4 bloques!", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Passeja i pregunta a qui s'encalla: quants esglaons hi ha? quantes vegades cal cridar la funció?|Pasea y pregunta a quien se atasque: ¿cuántos escalones hay? ¿cuántas veces hay que llamar a la función?" },
      { id: 's13', k: 'demo', t: 'Programem junts la funció|Programemos juntos la función', x: "Quins blocs té un sol esglaó de baixada? Quantes vegades l'hem de cridar?|¿Qué bloques tiene un solo escalón de bajada? ¿Cuántas veces tenemos que llamarlo?",
        demo: { w: { map: ['>#..', '.##.', '..##', '...F'] }, prog: 'A A A', fns: { A: 'f r f l' } },
        nota: "Escriu a la pissarra la funció que dicti la classe (Endavant, Gira a la dreta, Endavant, Gira a l'esquerra) i el programa (tres crides). Executa la demo per comprovar-ho.|Escribe en la pizarra la función que dicte la clase (Adelante, Gira a la derecha, Adelante, Gira a la izquierda) y el programa (tres llamadas). Ejecuta la demo para comprobarlo." },
      { id: 's14', k: 'repte', t: 'Reptes: escriu la funció|Retos: escribe la función', timer: 10, punts: ["1. Baixa l'escala: el programa ja crida la funció.|1. Baja la escalera: el programa ya llama a la función.", "2. La torre del rellotge: funció i programa, màxim 8 blocs.|2. La torre del reloj: función y programa, máximo 8 bloques."],
        nota: "Recorda'ls que per escriure dins de la funció cal tocar dins del requadre lila. Pista per a la torre: en Bit mira amunt.|Recuérdales que para escribir dentro de la función hay que tocar dentro del recuadro lila. Pista para la torre: Bit mira arriba." },
      { id: 's15', k: 'activitat', t: 'Crea: la meva primera funció|Crea: mi primera función', timer: 5, x: "Escriu la funció «la meva ordre» i crida-la per recollir les 4 estrelles. Després explica-la a un company/a.|Escribe la función «mi orden» y llámala para recoger las 4 estrellas. Después explícasela a un compañero/a.",
        nota: "Celebra les funcions diferents: hi ha qui fa un esglaó i qui en fa dos de cop. Totes valen si funcionen.|Celebra las funciones diferentes: hay quien hace un escalón y quien hace dos de golpe. Todas valen si funcionan." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Una funció és un grup de blocs amb un nom.|Una función es un grupo de bloques con un nombre.", "Cridar la funció és posar el seu bloc lila al programa.|Llamar a la función es poner su bloque lila en el programa.", "Una funció escrita una vegada es pot cridar moltes vegades.|Una función escrita una vez se puede llamar muchas veces."],
        nota: "Torna a «para taula»: ara saben que és una funció de la vida real.|Vuelve a «pon la mesa»: ahora saben que es una función de la vida real." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Què és una funció? Digues-ne un exemple de casa.|¿Qué es una función? Di un ejemplo de casa.", "Si escric una funció però no la crido, què fa en Bit?|Si escribo una función pero no la llamo, ¿qué hace Bit?"],
        nota: "Respostes: un grup d'ordres amb nom (para taula, fes el llit…); res, la funció només es fa quan es crida.|Respuestas: un grupo de órdenes con nombre (pon la mesa, haz la cama…); nada, la función solo se hace cuando se llama." }
    ],
    print: [
      { id: 'p1', t: 'Targetes de funció|Tarjetas de función', k: 'targetes',
        intro: "Un paquet per grup de 3, millor en paper lila. Les targetes amb nom van al programa; la «llibreta» és un full on el guardià/ana posa les targetes de dins de la funció. Les targetes d'ordres són les de la unitat 1.|Un paquete por grupo de 3, mejor en papel lila. Las tarjetas con nombre van al programa; la «libreta» es una hoja donde el guardián/a pone las tarjetas de dentro de la función. Las tarjetas de órdenes son las de la unidad 1.",
        items: [
          { t: 'Funció escala 🪜|Función escalera 🪜', n: 4 },
          { t: 'Funció cantonada ↱|Función esquina ↱', n: 3 },
          { t: 'Funció ____ ✏️|Función ____ ✏️', n: 4 },
          { t: 'Llibreta de funcions 📒|Libreta de funciones 📒', n: 1 },
          { t: 'Crido la funció! 📣|¡Llamo a la función! 📣', n: 1 }
        ] },
      { id: 'p2', t: 'Quadrícula del terra: missions amb funcions|Cuadrícula del suelo: misiones con funciones', k: 'quadricula',
        intro: "Feu servir la quadrícula de 5 × 5 de la unitat 1. Abans de moure el robot, escriviu la funció a la llibreta i el programa amb targetes lila.|Usad la cuadrícula de 5 × 5 de la unidad 1. Antes de mover el robot, escribid la función en la libreta y el programa con tarjetas lila.",
        items: [
          { t: "Missió 1: l'escala|Misión 1: la escalera", w: 5, h: 5, cells: ['R...F', '.....', '.....', '.....', '>...R'],
            instructions: "La funció escala és: Endavant, Gira a l'esquerra, Endavant, Gira a la dreta. Quantes vegades l'heu de cridar per arribar a la bandera?|La función escalera es: Adelante, Gira a la izquierda, Adelante, Gira a la derecha. ¿Cuántas veces tenéis que llamarla para llegar a la bandera?",
            sol: 'A A A A', solFns: { A: 'f l f r' } },
          { t: 'Missió 2: la cantonada|Misión 2: la esquina', w: 5, h: 5, cells: ['>....', '.R...', 'F....', '.....', '.....'],
            instructions: "La funció cantonada és: Endavant, Endavant, Gira a la dreta. Feu un programa només amb targetes lila que porti el robot a la bandera.|La función esquina es: Adelante, Adelante, Gira a la derecha. Haced un programa solo con tarjetas lila que lleve al robot a la bandera.",
            sol: 'A A A', solFns: { A: 'f f r' } },
          { t: 'Missió 3: inventeu la funció|Misión 3: inventad la función', w: 5, h: 5, cells: ['>...R', '.....', '.....', '.....', 'R...F'],
            instructions: "Ara la funció la inventeu vosaltres. Busqueu el tros que es repeteix per baixar en diagonal, poseu-li nom i escriviu-lo a la llibreta.|Ahora la función la inventáis vosotros. Buscad el trozo que se repite para bajar en diagonal, ponedle nombre y escribidlo en la libreta.",
            sol: 'A A A A', solFns: { A: 'f r f l' } }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Funcions dins de bucles ---------- */
  'r5-2': {
    obj: [
      "L'alumne/a posa una funció dins d'un bucle i tria el nombre de repeticions comptant els trossos del camí.|El alumno/a pone una función dentro de un bucle y elige el número de repeticiones contando los trozos del camino.",
      "L'alumne/a prediu on acabarà en Bit amb un bucle que crida una funció.|El alumno/a predice dónde terminará Bit con un bucle que llama a una función.",
      "L'alumne/a explica que un error dins d'una funció es repeteix cada vegada que la funció es crida.|El alumno/a explica que un error dentro de una función se repite cada vez que la función se llama.",
      "L'alumne/a arregla una funció amb un error canviant-la en un sol lloc.|El alumno/a arregla una función con un error cambiándola en un solo sitio."
    ],
    comp: [
      "Competència digital (CD5): combinar estructures de programació (bucles i funcions) per resoldre un problema|Competencia digital (CD5): combinar estructuras de programación (bucles y funciones) para resolver un problema",
      "Pensament computacional: composició de funcions i bucles, depuració dins de funcions|Pensamiento computacional: composición de funciones y bucles, depuración dentro de funciones",
      "Matemàtiques: patrons que es repeteixen i multiplicació com a suma repetida|Matemáticas: patrones que se repiten y multiplicación como suma repetida",
      "Aprendre a aprendre: buscar la causa d'un error que es repeteix|Aprender a aprender: buscar la causa de un error que se repite"
    ],
    vocab: [
      ["Bucle|Bucle", "Un bloc que repeteix els blocs de dins tantes vegades com diu el número.|Un bloque que repite los bloques de dentro tantas veces como dice el número."],
      ["Funció dins d'un bucle|Función dentro de un bucle", "El bucle crida la funció a cada volta.|El bucle llama a la función en cada vuelta."],
      ["Esglaó|Escalón", "Cada tros de l'escala: el que fa la funció una vegada.|Cada trozo de la escalera: lo que hace la función una vez."],
      ["Bug a la funció|Bug en la función", "Un error dins de la funció: surt cada vegada que la crides.|Un error dentro de la función: sale cada vez que la llamas."],
      ["Arreglar en un sol lloc|Arreglar en un solo sitio", "Canviar la funció una vegada perquè quedin bé totes les crides.|Cambiar la función una vez para que queden bien todas las llamadas."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Funcions dins de bucles»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Funciones dentro de bucles»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra, les targetes d'ordres de la unitat 1 i les targetes de funció de la sessió 1|La cuadrícula del suelo, las tarjetas de órdenes de la unidad 1 y las tarjetas de función de la sesión 1",
        "Una estrella de paper per marcar el cim i una bandera|Una estrella de papel para marcar la cima y una bandera"
      ],
      imprimir: ["Targetes de bucle i de bug|Tarjetas de bucle y de bug", "Quadrícula del terra: bucles amb funcions|Cuadrícula del suelo: bucles con funciones"],
      prep: [
        "Imprimir i retallar les targetes de bucle (verdes) i les de bug: un paquet per grup de 3.|Imprimir y recortar las tarjetas de bucle (verdes) y las de bug: un paquete por grupo de 3.",
        "Preparar una «funció amb bug» per a cada grup: la funció zig-zag de la missió 2 amb el segon gir canviat.|Preparar una «función con bug» para cada grupo: la función zigzag de la misión 2 con el segundo giro cambiado.",
        "Provar abans la demostració de la diapositiva 8 (en Bit acaba a la A).|Probar antes la demostración de la diapositiva 8 (Bit termina en la A).",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i l'escala del mirador|Recordamos y la escalera del mirador", fase: 'inici',
        fa: "Fes la pregunta de repàs de la funció «salt». Explica la missió: per arribar al mirador cal una escala llarguíssima. Pregunta com ho farien amb el que saben: amb blocs solts, amb una funció o amb un bucle.|Haz la pregunta de repaso de la función «salto». Explica la misión: para llegar al mirador hace falta una escalera larguísima. Pregunta cómo lo harían con lo que saben: con bloques sueltos, con una función o con un bucle.",
        diu: ["Si la funció salt té dos Endavant i la crido dues vegades, quantes caselles avança en Bit?|Si la función salto tiene dos Adelante y la llamo dos veces, ¿cuántas casillas avanza Bit?",
          "Una escala de 5 esglaons: com la faríeu amb el mínim de blocs?|Una escalera de 5 escalones: ¿cómo la haríais con el mínimo de bloques?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Funcions dins de bucles|Funciones dentro de bucles", fase: 'teoria',
        fa: "Mostra l'animació de la funció dins del bucle i compteu en veu alta cada volta. A la primera demostració, que la classe digui «escala!» cada vegada que el bucle crida la funció. Explica amb l'animació del bug que un error a la funció surt a totes les crides i s'arregla en un sol lloc. Amb la muntanya, descobriu que la mateixa funció serveix per pujar i per baixar. Acaba amb la predicció de la cantonada.|Muestra la animación de la función dentro del bucle y contad en voz alta cada vuelta. En la primera demostración, que la clase diga «¡escalera!» cada vez que el bucle llama a la función. Explica con la animación del bug que un error en la función sale en todas las llamadas y se arregla en un solo sitio. Con la montaña, descubrid que la misma función sirve para subir y para bajar. Acaba con la predicción de la esquina.",
        diu: ["Quantes vegades farà en Bit els blocs de la funció si el bucle diu 3?|¿Cuántas veces hará Bit los bloques de la función si el bucle dice 3?",
          "Si la funció té un gir equivocat, quantes vegades s'equivocarà en Bit?|Si la función tiene un giro equivocado, ¿cuántas veces se equivocará Bit?",
          "Per què la mateixa escala fa baixar en Bit després de girar?|¿Por qué la misma escalera hace bajar a Bit después de girar?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "L'escala humana i el bug que es repeteix|La escalera humana y el bug que se repite", fase: 'desconnectat',
        fa: "Grups de 3: programador/a, robot i guardià/ana de la llibreta. Primer fan la missió 1 amb una targeta de bucle i una de funció. A la missió 2, el guardià/ana rep una funció amb un bug (la que has preparat): el robot la fa i el grup observa que l'error surt a cada volta del bucle. Han de trobar-lo i canviar només una targeta de la llibreta. La missió 3 és la muntanya amb la mateixa funció per pujar i baixar.|Grupos de 3: programador/a, robot y guardián/a de la libreta. Primero hacen la misión 1 con una tarjeta de bucle y una de función. En la misión 2, el guardián/a recibe una función con un bug (la que has preparado): el robot la hace y el grupo observa que el error sale en cada vuelta del bucle. Tienen que encontrarlo y cambiar solo una tarjeta de la libreta. La misión 3 es la montaña con la misma función para subir y bajar.",
        diu: ["L'error surt a la primera volta? I a la segona? On deu ser, doncs?|¿El error sale en la primera vuelta? ¿Y en la segunda? ¿Dónde estará, entonces?",
          "Canvieu una sola targeta de la llibreta i torneu-ho a provar.|Cambiad una sola tarjeta de la libreta y volved a probar.",
          "Quantes targetes té el vostre programa? I quantes en tindria sense funció ni bucle?|¿Cuántas tarjetas tiene vuestro programa? ¿Y cuántas tendría sin función ni bucle?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a l'«Investiga» de l'escala que es queda curta. A l'activitat «El ball que es repeteix», que toquin «Ho hem fet!» si l'han fet al terra o que la deixin per a casa. Fixa't en qui a la predicció només fa la funció una vegada: demana-li que compti les voltes amb els dits.|Cada alumno/a hace la sesión hasta el «Investiga» de la escalera que se queda corta. En la actividad «El baile que se repite», que toquen «¡Lo hemos hecho!» si lo han hecho en el suelo o que la dejen para casa. Fíjate en quién en la predicción solo hace la función una vez: pídele que cuente las vueltas con los dedos.",
        diu: ["Quantes voltes fa el bucle? Compta-les amb els dits mentre segueixes en Bit.|¿Cuántas vueltas da el bucle? Cuéntalas con los dedos mientras sigues a Bit.",
          "La funció està bé i en Bit es queda curt. Què més pot fallar?|La función está bien y Bit se queda corto. ¿Qué más puede fallar?"],
        slides: ['s11'], app: "Pregunta de «Recorda», les dues històries del mirador, les targetes de «Descobreix», ordenar els passos del programador/a, «El ball que es repeteix», «On acabarà?» amb la cantonada i l'«Investiga» del número del bucle.|Pregunta de «Recuerda», las dos historias del mirador, las tarjetas de «Descubre», ordenar los pasos del programador/a, «El baile que se repite», «¿Dónde terminará?» con la esquina y el «Investiga» del número del bucle.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: escales, repartiments i un bug|Retos: escaleras, repartos y un bug", fase: 'ordinador',
        fa: "Feu la pausa activa dels esglaons tots junts. Després programa amb la classe la pujada al mirador (diapositiva 12): una funció i un bucle, només dos blocs. Deixa'ls fer els quatre reptes. Al del zig-zag, demana que facin «Pas a pas» per veure que l'error surt a cada volta.|Haced la pausa activa de los escalones todos juntos. Después programa con la clase la subida al mirador (diapositiva 12): una función y un bucle, solo dos bloques. Deja que hagan los cuatro retos. En el del zigzag, pide que hagan «Paso a paso» para ver que el error sale en cada vuelta.",
        diu: ["Per posar la funció dins del bucle, primer posa el Repeteix i després el bloc lila.|Para poner la función dentro del bucle, primero pon el Repite y después el bloque lila.",
          "En Bit dona voltes: és un error del programa o de la funció?|Bit da vueltas: ¿es un error del programa o de la función?",
          "A la muntanya, què ha de fer en Bit quan arriba al cim?|En la montaña, ¿qué tiene que hacer Bit cuando llega a la cima?"],
        slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes: el mirador (2 blocs), el mercat (escriure la funció reparteix), el zig-zag amb bug i la muntanya (5 blocs).|«Pausa activa» y los cuatro retos: el mirador (2 bloques), el mercado (escribir la función reparte), el zigzag con bug y la montaña (5 bloques).", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: les onades de la platja|Crea: las olas de la playa", fase: 'crea',
        fa: "Cada alumne/a inventa la funció «tros» i la posa dins d'un bucle per recollir les tres estrelles. Per parelles, s'ensenyen el programa i el company/a diu quantes vegades es farà la funció abans d'executar-lo.|Cada alumno/a inventa la función «trozo» y la pone dentro de un bucle para recoger las tres estrellas. Por parejas, se enseñan el programa y el compañero/a dice cuántas veces se hará la función antes de ejecutarlo.",
        diu: ["Quina forma té el teu tros: una escala, una onada…?|¿Qué forma tiene tu trozo: una escalera, una ola…?",
          "Abans d'executar el del company/a: quantes vegades es farà la funció?|Antes de ejecutar el del compañero/a: ¿cuántas veces se hará la función?"],
        slides: ['s14'], app: "Pas «Crea»: Les onades de la platja.|Paso «Crea»: Las olas de la playa.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida a la porta.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales de la app y haz el ticket de salida en la puerta.",
        diu: ["Si una funció té un error i la crido 4 vegades, quantes vegades surt l'error?|Si una función tiene un error y la llamo 4 veces, ¿cuántas veces sale el error?",
          "I quants llocs he d'arreglar?|¿Y cuántos sitios tengo que arreglar?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el bloc de la funció a sota del bucle i no a dins.|Pone el bloque de la función debajo del bucle y no dentro.",
        "Que executi pas a pas i compti quantes vegades es fa la funció. Si només es fa una vegada, on ha de ser el bloc lila?|Que ejecute paso a paso y cuente cuántas veces se hace la función. Si solo se hace una vez, ¿dónde tiene que estar el bloque lila?"],
      ["Posa al bucle el nombre de blocs de la funció en lloc del nombre d'esglaons.|Pone en el bucle el número de bloques de la función en lugar del número de escalones.",
        "Demana-li que compti els esglaons del mapa amb el dit: aquest és el número del bucle. Els blocs de dins de la funció no compten aquí.|Pídele que cuente los escalones del mapa con el dedo: ese es el número del bucle. Los bloques de dentro de la función no cuentan aquí."],
      ["Quan en Bit s'equivoca, canvia el programa principal en lloc de la funció.|Cuando Bit se equivoca, cambia el programa principal en lugar de la función.",
        "Pregunta: l'error surt una vegada o a cada volta? Si surt a cada volta, el bloc equivocat és dins de la funció.|Pregunta: ¿el error sale una vez o en cada vuelta? Si sale en cada vuelta, el bloque equivocado está dentro de la función."],
      ["A la muntanya fa dues funcions diferents per pujar i baixar i es queda sense blocs.|En la montaña hace dos funciones distintas para subir y bajar y se queda sin bloques.",
        "Que provi la mateixa escala després de girar cap avall. Recorda-li que la funció es fa des d'on és en Bit i cap on mira.|Que pruebe la misma escalera después de girar hacia abajo. Recuérdale que la función se hace desde donde está Bit y hacia donde mira."],
      ["A la funció reparteix posa Agafa abans d'arribar a la caixa.|En la función reparte pone Coge antes de llegar a la caja.",
        "Que faci un sol encàrrec pas a pas: on és en Bit quan fa Agafa? Com a la unitat 1, primer cal arribar a la caixa.|Que haga un solo encargo paso a paso: ¿dónde está Bit cuando hace Coge? Como en la unidad 1, primero hay que llegar a la caja."]
    ],
    diff: {
      mes: "Fer la muntanya amb només 4 blocs (pista: el bucle de pujada i el gir es poden repetir dues vegades). Després, dissenyar al paper una escala amb un bug a la funció perquè un company/a el trobi.|Hacer la montaña con solo 4 bloques (pista: el bucle de subida y el giro se pueden repetir dos veces). Después, diseñar en papel una escalera con un bug en la función para que un compañero/a lo encuentre.",
      menys: "Treballar amb les targetes al costat: la targeta verda del bucle amb la targeta lila a sobre, i la llibreta amb els blocs de la funció. Començar pel mirador comptant els esglaons amb el dit i posar aquest número al bucle.|Trabajar con las tarjetas al lado: la tarjeta verde del bucle con la tarjeta lila encima, y la libreta con los bloques de la función. Empezar por el mirador contando los escalones con el dedo y poner ese número en el bucle."
    },
    aval: {
      ticket: ["Si una funció té un error i el bucle la crida 4 vegades, quantes vegades surt l'error?|Si una función tiene un error y el bucle la llama 4 veces, ¿cuántas veces sale el error?",
        "Com faries pujar en Bit 6 esglaons amb només 2 blocs al programa?|¿Cómo harías subir a Bit 6 escalones con solo 2 bloques en el programa?"],
      rubric: [
        ["Funció dins d'un bucle|Función dentro de un bucle", "Posa la funció dins del bucle i tria el número comptant els trossos del camí.|Pone la función dentro del bucle y elige el número contando los trozos del camino.", "Fa servir el bucle i la funció, però de vegades la funció queda fora o el número no és el bo.|Usa el bucle y la función, pero a veces la función queda fuera o el número no es el correcto."],
        ["Predir|Predecir", "Segueix totes les voltes del bucle i encerta on acaba en Bit.|Sigue todas las vueltas del bucle y acierta dónde termina Bit.", "Fa bé la primera volta, però es perd a les següents.|Hace bien la primera vuelta, pero se pierde en las siguientes."],
        ["Depurar una funció|Depurar una función", "Veu que l'error es repeteix, el busca dins de la funció i l'arregla en un sol lloc.|Ve que el error se repite, lo busca dentro de la función y lo arregla en un solo sitio.", "Arregla l'error amb ajuda o canvia el programa principal abans de mirar la funció.|Arregla el error con ayuda o cambia el programa principal antes de mirar la función."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «El ball que es repeteix»: inventeu un pas de ball, repetiu-lo 4 vegades i canvieu-ne una cosa per veure que el canvi surt a totes les vegades.|En casa, con el móvil, podéis repetir la sesión y hacer «El baile que se repite»: inventad un paso de baile, repetidlo 4 veces y cambiad algo para ver que el cambio sale todas las veces.",
    slides: [
      { id: 's1', k: 'portada', t: 'Funcions dins de bucles|Funciones dentro de bucles', x: "Avui en Bit pujarà al mirador amb una funció i un bucle.|Hoy Bit subirá al mirador con una función y un bucle.",
        nota: "Explica que avui combinaran dues coses que ja saben: els bucles de la unitat 2 i les funcions de la setmana passada.|Explica que hoy combinarán dos cosas que ya saben: los bucles de la unidad 2 y las funciones de la semana pasada." },
      { id: 's2', k: 'repas', t: 'Recordes?|¿Recuerdas?', x: "La funció salt és: Endavant, Endavant. Programa: Funció salt, Funció salt. Quantes caselles avança en Bit?|La función salto es: Adelante, Adelante. Programa: Función salto, Función salto. ¿Cuántas casillas avanza Bit?",
        nota: "Resposta: 4. Cada crida fa els dos Endavant de la funció.|Respuesta: 4. Cada llamada hace los dos Adelante de la función." },
      { id: 's3', k: 'pregunta', t: "L'escala del mirador|La escalera del mirador", x: "Una escala de 5 esglaons. Com la faríeu amb el mínim de blocs?|Una escalera de 5 escalones. ¿Cómo la haríais con el mínimo de bloques?",
        nota: "Recull propostes: blocs solts (20), funció cridada 5 vegades (9), bucle amb la funció a dins (6). Torna-hi al final de la teoria.|Recoge propuestas: bloques sueltos (20), función llamada 5 veces (9), bucle con la función dentro (6). Vuelve a ello al final de la teoría." },
      { id: 's4', k: 'anim', t: "Una funció dins d'un bucle|Una función dentro de un bucle", anim: 'u5loopfn', x: "Repeteix 3 vegades: Funció escala. Tres esglaons amb dos blocs.|Repite 3 veces: Función escalera. Tres escalones con dos bloques.",
        nota: "Compteu en veu alta cada esglaó que puja en Bit: u, dos, tres.|Contad en voz alta cada escalón que sube Bit: uno, dos, tres." },
      { id: 's5', k: 'demo', t: 'Tres esglaons i tres estrelles|Tres escalones y tres estrellas', x: "La funció A és l'escala. Programa: Repeteix 3 vegades: Funció A. Després, Endavant.|La función A es la escalera. Programa: Repite 3 veces: Función A. Después, Adelante.",
        demo: { w: { map: ['...*F', '..*#.', '.*#..', '>#...'] }, prog: '3{ A } f', fns: { A: 'f l f r' } },
        nota: "Que la classe digui «escala!» cada vegada que s'il·lumina el bloc lila.|Que la clase diga «¡escalera!» cada vez que se ilumina el bloque lila." },
      { id: 's6', k: 'anim', t: 'Un error a la funció surt cada vegada|Un error en la función sale cada vez', anim: 'u5bugfn', x: "I s'arregla en un sol lloc: dins de la funció.|Y se arregla en un solo sitio: dentro de la función.",
        nota: "Pregunta: si l'error fos al programa i no a la funció, sortiria tres vegades? Fes-los notar la diferència.|Pregunta: si el error estuviera en el programa y no en la función, ¿saldría tres veces? Hazles notar la diferencia." },
      { id: 's7', k: 'demo', t: 'La mateixa funció, en dos llocs|La misma función, en dos sitios', x: "Repeteix 2 vegades A, Gira a la dreta, Repeteix 2 vegades A. La funció A és l'escala.|Repite 2 veces A, Gira a la derecha, Repite 2 veces A. La función A es la escalera.",
        demo: { w: { map: ['..*..', '.###.', '>#.#F'] }, prog: '2{ A } r 2{ A }', fns: { A: 'f l f r' } },
        nota: "Abans d'executar, pregunta si en Bit arribarà a la bandera. Molts diran que no: la funció és de pujar! Després de veure-ho, remarca que fa els blocs des d'on és i cap on mira.|Antes de ejecutar, pregunta si Bit llegará a la bandera. Muchos dirán que no: ¡la función es de subir! Después de verlo, remarca que hace los bloques desde donde está y hacia donde mira." },
      { id: 's8', k: 'demo', t: "Pensa abans d'executar|Piensa antes de ejecutar", x: "La funció A és: Endavant, Endavant, Gira a la dreta. Repeteix 3 vegades: Funció A. On acabarà en Bit: A, B o C?|La función A es: Adelante, Adelante, Gira a la derecha. Repite 3 veces: Función A. ¿Dónde terminará Bit: A, B o C?",
        demo: { w: { map: ['>#C', '#.#', 'A#B'] }, prog: '3{ A }', fns: { A: 'f f r' } },
        nota: "Resposta: A. Qui diu C ha fet una sola volta; qui diu B, dues.|Respuesta: A. Quien dice C ha hecho una sola vuelta; quien dice B, dos." },
      { id: 's9', k: 'activitat', t: "L'escala humana|La escalera humana", timer: 12, punts: ["Missió 1: un bucle i una funció.|Misión 1: un bucle y una función.", "Missió 2: la funció té un bug. Trobeu-lo!|Misión 2: la función tiene un bug. ¡Encontradlo!", "Missió 3: la muntanya, amb la mateixa funció.|Misión 3: la montaña, con la misma función.", "Roteu els papers a cada missió.|Rotad los papeles en cada misión."],
        nota: "Dona la funció amb bug de la missió 2 al guardià/ana de cada grup sense dir-los on és l'error.|Da la función con bug de la misión 2 al guardián/a de cada grupo sin decirles dónde está el error." },
      { id: 's10', k: 'concepte', t: 'Com es caça un bug dins d\'una funció|Cómo se caza un bug dentro de una función', punts: ["L'error surt cada vegada igual? És a la funció.|¿El error sale cada vez igual? Está en la función.", "Fes la funció a poc a poc, targeta a targeta.|Haz la función despacio, tarjeta a tarjeta.", "Canvia només la targeta equivocada.|Cambia solo la tarjeta equivocada.", "Torna-ho a provar: ara totes les voltes van bé.|Vuelve a probarlo: ahora todas las vueltas van bien."],
        nota: "Deixa-la projectada durant la missió 2 de l'activitat.|Déjala proyectada durante la misión 2 de la actividad." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Funcions dins de bucles».|Abre la sesión «Funciones dentro de bucles».", "A «On acabarà?», compta les voltes amb els dits.|En «¿Dónde terminará?», cuenta las vueltas con los dedos.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "A l'«Investiga», la funció està bé: l'error és el número del bucle.|En el «Investiga», la función está bien: el error es el número del bucle." },
      { id: 's12', k: 'demo', t: 'Programem junts: el mirador|Programemos juntos: el mirador', x: "Una funció i un bucle: només dos blocs al programa. Quin número posem al bucle?|Una función y un bucle: solo dos bloques en el programa. ¿Qué número ponemos en el bucle?",
        demo: { w: { map: ['.....F', '....##', '...##.', '..##..', '.##...', '>#....'] }, prog: '5{ A }', fns: { A: 'f l f r' } },
        nota: "Compteu els esglaons entre tots (5) abans d'executar. És el primer repte de l'app: ara el sabran fer tots.|Contad los escalones entre todos (5) antes de ejecutar. Es el primer reto de la app: ahora lo sabrán hacer todos." },
      { id: 's13', k: 'repte', t: 'Reptes: funcions dins de bucles|Retos: funciones dentro de bucles', timer: 10, punts: ["1. El mirador: 2 blocs.|1. El mirador: 2 bloques.", "2. El mercat: escriu la funció reparteix.|2. El mercado: escribe la función reparte.", "3. El zig-zag: arregla la funció.|3. El zigzag: arregla la función.", "4. La muntanya: puja i baixa amb 5 blocs.|4. La montaña: sube y baja con 5 bloques."],
        nota: "Al zig-zag, que facin «Pas a pas» i diguin a quina volta s'equivoca en Bit: a totes!|En el zigzag, que hagan «Paso a paso» y digan en qué vuelta se equivoca Bit: ¡en todas!" },
      { id: 's14', k: 'activitat', t: 'Crea: les onades de la platja|Crea: las olas de la playa', timer: 5, x: "Inventa la funció «tros», posa-la dins d'un bucle i recull les 3 estrelles.|Inventa la función «trozo», ponla dentro de un bucle y recoge las 3 estrellas.",
        nota: "Hi ha moltes funcions que funcionen. Demana a dos alumnes amb solucions diferents que les ensenyin.|Hay muchas funciones que funcionan. Pide a dos alumnos con soluciones diferentes que las enseñen." },
      { id: 's15', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Una funció es pot posar dins d'un bucle.|Una función se puede poner dentro de un bucle.", "Un error a la funció surt cada vegada.|Un error en la función sale cada vez.", "S'arregla en un sol lloc: a la funció.|Se arregla en un solo sitio: en la función."],
        nota: "Torna a la pregunta de l'escala de 5 esglaons: ara saben fer-la amb 6 blocs (o 2 si la funció ja està feta).|Vuelve a la pregunta de la escalera de 5 escalones: ahora saben hacerla con 6 bloques (o 2 si la función ya está hecha)." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Si la funció té un error i el bucle la crida 4 vegades, quantes vegades surt l'error?|Si la función tiene un error y el bucle la llama 4 veces, ¿cuántas veces sale el error?", "Com faries pujar 6 esglaons amb 2 blocs?|¿Cómo harías subir 6 escalones con 2 bloques?"],
        nota: "Respostes: 4 vegades (i s'arregla en un lloc); Repeteix 6 vegades: Funció escala.|Respuestas: 4 veces (y se arregla en un sitio); Repite 6 veces: Función escalera." }
    ],
    print: [
      { id: 'p1', t: 'Targetes de bucle i de bug|Tarjetas de bucle y de bug', k: 'targetes',
        intro: "Afegiu-les al paquet de les sessions anteriors. A la targeta del bucle hi escriviu el número amb retolador. La targeta de bug la fa servir el guardià/ana per marcar on era l'error quan el trobeu.|Añadidlas al paquete de las sesiones anteriores. En la tarjeta del bucle escribís el número con rotulador. La tarjeta de bug la usa el guardián/a para marcar dónde estaba el error cuando lo encontréis.",
        items: [
          { t: 'Repeteix __ vegades 🔁|Repite __ veces 🔁', n: 3 },
          { t: 'Fi del bucle ⏹|Fin del bucle ⏹', n: 3 },
          { t: 'Funció zig-zag ⚡|Función zigzag ⚡', n: 2 },
          { t: 'Aquí hi havia el bug 🐞|Aquí estaba el bug 🐞', n: 2 },
          { t: 'Cim ⭐|Cima ⭐', n: 1 }
        ] },
      { id: 'p2', t: 'Quadrícula del terra: bucles amb funcions|Cuadrícula del suelo: bucles con funciones', k: 'quadricula',
        intro: "Feu servir la quadrícula de 5 × 5. El programa té una targeta de bucle i, a dins, la targeta lila de la funció. La funció va a la llibreta.|Usad la cuadrícula de 5 × 5. El programa tiene una tarjeta de bucle y, dentro, la tarjeta lila de la función. La función va en la libreta.",
        items: [
          { t: 'Missió 1: el mirador|Misión 1: el mirador', w: 5, h: 5, cells: ['R...F', '.....', '.....', '.....', '>...R'],
            instructions: "Funció escala: Endavant, Gira a l'esquerra, Endavant, Gira a la dreta. Quin número heu de posar al bucle?|Función escalera: Adelante, Gira a la izquierda, Adelante, Gira a la derecha. ¿Qué número tenéis que poner en el bucle?",
            sol: '4{ A }', solFns: { A: 'f l f r' } },
          { t: 'Missió 2: el zig-zag amb bug|Misión 2: el zigzag con bug', w: 5, h: 5, cells: ['>...R', '.*...', '..*..', '...*.', 'R...F'],
            instructions: "Programa: Repeteix 4 vegades la funció zig-zag. La funció de la llibreta té un error i el robot dona voltes. Trobeu la targeta equivocada i canvieu només aquesta.|Programa: Repite 4 veces la función zigzag. La función de la libreta tiene un error y el robot da vueltas. Encontrad la tarjeta equivocada y cambiad solo esa.",
            prog: '4{ A }', fns: { A: 'f r f r' }, sol: '4{ A }', solFns: { A: 'f r f l' } },
          { t: 'Missió 3: la muntanya|Misión 3: la montaña', w: 5, h: 5, cells: ['.....', '.....', '..*..', '.....', '>...F'],
            instructions: "Pugeu fins al cim (l'estrella) i baixeu fins a la bandera fent servir la mateixa funció escala. Pista: al cim, gireu a la dreta.|Subid hasta la cima (la estrella) y bajad hasta la bandera usando la misma función escalera. Pista: en la cima, girad a la derecha.",
            sol: '2{ A } r 2{ A }', solFns: { A: 'f l f r' } }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Pocs blocs, molta feina ---------- */
  'r5-3': {
    obj: [
      "L'alumne/a reconeix trossos repetits en un programa llarg i els converteix en una funció per reutilitzar-los.|El alumno/a reconoce trozos repetidos en un programa largo y los convierte en una función para reutilizarlos.",
      "L'alumne/a fa servir dues funcions diferents i les crida en l'ordre que demana el camí.|El alumno/a usa dos funciones diferentes y las llama en el orden que pide el camino.",
      "L'alumne/a compta els blocs d'un programa amb funcions i resol reptes amb un màxim de blocs.|El alumno/a cuenta los bloques de un programa con funciones y resuelve retos con un máximo de bloques.",
      "L'alumne/a compara un programa llarg i un de curt i explica per què el curt és més fàcil d'arreglar.|El alumno/a compara un programa largo y uno corto y explica por qué el corto es más fácil de arreglar."
    ],
    comp: [
      "Competència digital (CD5): optimitzar un programa per blocs perquè sigui més curt i més clar|Competencia digital (CD5): optimizar un programa por bloques para que sea más corto y más claro",
      "Pensament computacional: reutilització, abstracció i eficiència dels programes|Pensamiento computacional: reutilización, abstracción y eficiencia de los programas",
      "Matemàtiques: comptar, comparar quantitats i descompondre un total (2 + 4 = 6)|Matemáticas: contar, comparar cantidades y descomponer un total (2 + 4 = 6)",
      "Comunicació oral: argumentar quina solució és millor i per què|Comunicación oral: argumentar qué solución es mejor y por qué"
    ],
    vocab: [
      ["Reutilitzar|Reutilizar", "Escriure un tros una vegada i fer-lo servir moltes vegades.|Escribir un trozo una vez y usarlo muchas veces."],
      ["Comptador de blocs|Contador de bloques", "Diu quants blocs fas servir: els del programa i els de les funcions que escrius.|Dice cuántos bloques usas: los del programa y los de las funciones que escribes."],
      ["Màxim de blocs|Máximo de bloques", "El nombre més gran de blocs que pots fer servir en un repte.|El número más grande de bloques que puedes usar en un reto."],
      ["Dues funcions|Dos funciones", "Dues ordres noves amb noms diferents, com puja i baixa.|Dos órdenes nuevas con nombres distintos, como sube y baja."],
      ["Programa curt|Programa corto", "Un programa que fa la mateixa feina amb menys blocs.|Un programa que hace el mismo trabajo con menos bloques."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Pocs blocs, molta feina»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Pocos bloques, mucho trabajo»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La fitxa «El concurs dels pocs blocs» (una per parella) i un llapis|La ficha «El concurso de los pocos bloques» (una por pareja) y un lápiz",
        "La quadrícula del terra i les targetes de les sessions anteriors per provar una solució|La cuadrícula del suelo y las tarjetas de las sesiones anteriores para probar una solución"
      ],
      imprimir: ["Fitxa: el concurs dels pocs blocs|Ficha: el concurso de los pocos bloques"],
      prep: [
        "Imprimir una fitxa per parella.|Imprimir una ficha por pareja.",
        "Muntar a la quadrícula del terra el mapa de l'exercici 1 de la fitxa (l'escala amb la bandera).|Montar en la cuadrícula del suelo el mapa del ejercicio 1 de la ficha (la escalera con la bandera).",
        "Preparar a la pissarra una taula amb dues columnes: «blocs abans» i «blocs després».|Preparar en la pizarra una tabla con dos columnas: «bloques antes» y «bloques después».",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i el xip de poca memòria|Recordamos y el chip de poca memoria", fase: 'inici',
        fa: "Fes la pregunta de repàs de l'escala de 5 esglaons. Explica la missió: al laboratori han posat a en Bit un xip on hi caben pocs blocs. Pregunta per què pot ser bo que un programa sigui curt.|Haz la pregunta de repaso de la escalera de 5 escalones. Explica la misión: en el laboratorio le han puesto a Bit un chip donde caben pocos bloques. Pregunta por qué puede ser bueno que un programa sea corto.",
        diu: ["Com feu pujar 5 esglaons a en Bit amb la funció escala?|¿Cómo hacéis subir 5 escalones a Bit con la función escalera?",
          "Per què és millor un programa curt? Hi ha alguna altra raó, a part que hi càpiga?|¿Por qué es mejor un programa corto? ¿Hay alguna otra razón, además de que quepa?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Reutilitzar i dues funcions|Reutilizar y dos funciones", fase: 'teoria',
        fa: "Explica reutilitzar amb l'animació dels 12 i els 6 blocs i compteu els blocs junts a la pissarra (2 del programa + 4 de la funció). Presenta les dues funcions, puja i baixa, i a la demostració que la classe digui el nom de la funció que s'executa. Fes la predicció de recte, volta, recte. Acaba amb la idea clau: primer que funcioni, després que sigui curt.|Explica reutilizar con la animación de los 12 y los 6 bloques y contad los bloques juntos en la pizarra (2 del programa + 4 de la función). Presenta las dos funciones, sube y baja, y en la demostración que la clase diga el nombre de la función que se ejecuta. Haz la predicción de recto, vuelta, recto. Acaba con la idea clave: primero que funcione, después que sea corto.",
        diu: ["Quants blocs hi ha al programa? I a dins de la funció? Quants en total?|¿Cuántos bloques hay en el programa? ¿Y dentro de la función? ¿Cuántos en total?",
          "Ara s'il·lumina la funció A o la B? Què fa en Bit?|¿Ahora se ilumina la función A o la B? ¿Qué hace Bit?",
          "Un programa curt que no funciona serveix d'alguna cosa?|¿Un programa corto que no funciona sirve de algo?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El concurs dels pocs blocs|El concurso de los pocos bloques", fase: 'desconnectat',
        fa: "Per parelles, fan la fitxa: reben programes llargs que funcionen i els han de reescriure amb funcions, comptant els blocs abans i després. Apunteu els resultats a la taula de la pissarra. Al final, un grup prova la seva solució de l'exercici 1 a la quadrícula del terra amb les targetes per comprovar que fa el mateix camí.|Por parejas, hacen la ficha: reciben programas largos que funcionan y tienen que reescribirlos con funciones, contando los bloques antes y después. Apuntad los resultados en la tabla de la pizarra. Al final, un grupo prueba su solución del ejercicio 1 en la cuadrícula del suelo con las tarjetas para comprobar que hace el mismo camino.",
        diu: ["Busqueu el tros que es repeteix: on comença i on acaba?|Buscad el trozo que se repite: ¿dónde empieza y dónde termina?",
          "Quants blocs teníeu abans? I ara? Quants us n'heu estalviat?|¿Cuántos bloques teníais antes? ¿Y ahora? ¿Cuántos os habéis ahorrado?",
          "El programa curt fa exactament el mateix camí? Comproveu-ho al terra.|¿El programa corto hace exactamente el mismo camino? Comprobadlo en el suelo."],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles i després un grup a la quadrícula|Por parejas y después un grupo en la cuadrícula" },
      { min: 15, t: "A l'ordinador: descobreix, prediu i compara|En el ordenador: descubre, predice y compara", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a la pregunta de comparar programes. A l'«Investiga», demana que llegeixin el programa en veu alta i busquin el tros que ja és a la funció. A «El missatge més curt», que el deixin per a casa si ja han fet la fitxa.|Cada alumno/a hace la sesión hasta la pregunta de comparar programas. En el «Investiga», pide que lean el programa en voz alta y busquen el trozo que ya está en la función. En «El mensaje más corto», que lo dejen para casa si ya han hecho la ficha.",
        diu: ["Llegeix el programa en veu alta. Quin tros ja l'has sentit abans?|Lee el programa en voz alta. ¿Qué trozo ya lo has oído antes?",
          "Si hi ha un error a l'escala, en quants llocs l'hauries d'arreglar a cada programa?|Si hay un error en la escalera, ¿en cuántos sitios tendrías que arreglarlo en cada programa?"],
        slides: ['s12'], app: "Pregunta de «Recorda», les dues històries del xip, les targetes de «Descobreix», comptar els blocs, «El missatge més curt», «On acabarà?» amb recte i volta, l'«Investiga» del tros repetit i la pregunta de comparar programes.|Pregunta de «Recuerda», las dos historias del chip, las tarjetas de «Descubre», contar los bloques, «El mensaje más corto», «¿Dónde terminará?» con recto y vuelta, el «Investiga» del trozo repetido y la pregunta de comparar programas.", org: "Individual|Individual" },
      { min: 10, t: "Reptes amb màxim de blocs|Retos con máximo de bloques", fase: 'ordinador',
        fa: "Feu la pausa activa del programa llarg i el curt. Després programa amb la classe la volta al jardí petit de la diapositiva 13 i deixa'ls fer els tres reptes. Recorda'ls que el comptador de dalt del programa es posa vermell quan arriben al màxim.|Haced la pausa activa del programa largo y el corto. Después programa con la clase la vuelta al jardín pequeño de la diapositiva 13 y deja que hagan los tres retos. Recuérdales que el contador de encima del programa se pone rojo cuando llegan al máximo.",
        diu: ["No hi ha bucle: com pots repetir un costat del jardí sense escriure'l quatre vegades?|No hay bucle: ¿cómo puedes repetir un lado del jardín sin escribirlo cuatro veces?",
          "A la serra, digues en veu alta l'ordre de les funcions abans de posar cap bloc.|En la sierra, di en voz alta el orden de las funciones antes de poner ningún bloque.",
          "Al repartiment, quantes caixes hi ha al carrer de dalt? I al de baix?|En el reparto, ¿cuántas cajas hay en la calle de arriba? ¿Y en la de abajo?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els tres reptes: la volta al jardí (8 blocs, sense bucle), la serra de les estrelles (dues funcions, 14 blocs) i el repartiment als dos carrers (12 blocs).|«Pausa activa» y los tres retos: la vuelta al jardín (8 bloques, sin bucle), la sierra de las estrellas (dos funciones, 14 bloques) y el reparto en las dos calles (12 bloques).", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el rècord de blocs|Crea: el récord de bloques", fase: 'crea',
        fa: "Cada alumne/a resol el rècord de blocs amb un màxim de 10. Qui acabi, prova de fer-ho amb menys blocs i ho apunta a la pissarra. Comenteu la solució amb menys blocs: és també la més fàcil d'entendre?|Cada alumno/a resuelve el récord de bloques con un máximo de 10. Quien termine, intenta hacerlo con menos bloques y lo apunta en la pizarra. Comentad la solución con menos bloques: ¿es también la más fácil de entender?",
        diu: ["Quants blocs has fet servir? Encara se'n pot treure algun?|¿Cuántos bloques has usado? ¿Todavía se puede quitar alguno?",
          "El teu programa s'entén si el llegeix algú altre?|¿Tu programa se entiende si lo lee otra persona?"],
        slides: ['s15'], app: "Pas «Crea»: El rècord de blocs.|Paso «Crea»: El récord de bloques.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les idees amb el resum, deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida a la porta.|Repasa las ideas con el resumen, deja que respondan las preguntas finales de la app y haz el ticket de salida en la puerta.",
        diu: ["Què vol dir reutilitzar?|¿Qué quiere decir reutilizar?",
          "Per què un programa curt és més fàcil d'arreglar?|¿Por qué un programa corto es más fácil de arreglar?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["No troba on comença el tros que es repeteix.|No encuentra dónde empieza el trozo que se repite.",
        "Que llegeixi el programa en veu alta o que segueixi el camí amb el dit: on torna a passar el mateix? Marqueu cada tros amb un color.|Que lea el programa en voz alta o que siga el camino con el dedo: ¿dónde vuelve a pasar lo mismo? Marcad cada trozo con un color."],
      ["Només compta els blocs del programa i se sorprèn que no li quedin blocs.|Solo cuenta los bloques del programa y se sorprende de que no le queden bloques.",
        "Mireu junts el comptador: suma també els blocs de dins de les funcions que escriu. Compteu-los amb el dit.|Mirad juntos el contador: suma también los bloques de dentro de las funciones que escribe. Contadlos con el dedo."],
      ["A la serra, posa els blocs de puja dins de la funció baixa (o al revés).|En la sierra, pone los bloques de sube dentro de la función baja (o al revés).",
        "Que executi una sola crida de cada funció i miri què fa en Bit: puja o baixa? Així sabrà si cada funció té el nom que toca.|Que ejecute una sola llamada de cada función y mire qué hace Bit: ¿sube o baja? Así sabrá si cada función tiene el nombre que le toca."],
      ["Vol fer el programa curt des del principi i s'encalla.|Quiere hacer el programa corto desde el principio y se atasca.",
        "Proposa-li primer fer-lo funcionar sense pensar en el màxim (pot provar-ho al paper) i després buscar el tros repetit per fer-ne la funció.|Proponle primero hacerlo funcionar sin pensar en el máximo (puede probarlo en el papel) y después buscar el trozo repetido para hacer la función."],
      ["Creu que el programa més curt sempre és el millor, encara que costi d'entendre.|Cree que el programa más corto siempre es el mejor, aunque cueste entenderlo.",
        "Pregunta si un company/a entendria el programa només de llegir-lo. Un bon programa és curt i clar: els noms de les funcions ajuden.|Pregunta si un compañero/a entendería el programa solo con leerlo. Un buen programa es corto y claro: los nombres de las funciones ayudan."]
    ],
    diff: {
      mes: "Fer el repartiment dels dos carrers amb menys de 12 blocs i explicar el truc. Després, escriure al paper un camí propi amb dos trossos que es repeteixin perquè un company/a el faci amb dues funcions.|Hacer el reparto de las dos calles con menos de 12 bloques y explicar el truco. Después, escribir en papel un camino propio con dos trozos que se repitan para que un compañero/a lo haga con dos funciones.",
      menys: "A la fitxa, començar per l'exercici de comptar blocs. A l'app, fer primer el repte del jardí dient en veu alta «un costat, un altre costat…» i provar la funció amb una sola crida abans d'afegir-ne més.|En la ficha, empezar por el ejercicio de contar bloques. En la app, hacer primero el reto del jardín diciendo en voz alta «un lado, otro lado…» y probar la función con una sola llamada antes de añadir más."
    },
    aval: {
      ticket: ["Què vol dir reutilitzar un tros de programa?|¿Qué quiere decir reutilizar un trozo de programa?",
        "Programa: Funció A, Funció A, Funció A. La funció A té 4 blocs. Quants blocs són en total?|Programa: Función A, Función A, Función A. La función A tiene 4 bloques. ¿Cuántos bloques son en total?"],
      rubric: [
        ["Reutilitzar|Reutilizar", "Troba el tros repetit i el converteix en una funció sense ajuda.|Encuentra el trozo repetido y lo convierte en una función sin ayuda.", "Fa servir funcions quan l'hi proposen, però costa que vegi el tros repetit.|Usa funciones cuando se lo proponen, pero le cuesta ver el trozo repetido."],
        ["Dues funcions|Dos funciones", "Fa servir dues funcions amb el nom que toca i les crida en l'ordre bo.|Usa dos funciones con el nombre que toca y las llama en el orden correcto.", "Fa servir una sola funció o barreja el que fa cadascuna.|Usa una sola función o mezcla lo que hace cada una."],
        ["Comptar i comparar|Contar y comparar", "Compta bé els blocs (programa + funcions) i explica per què el programa curt és més fàcil d'arreglar.|Cuenta bien los bloques (programa + funciones) y explica por qué el programa corto es más fácil de arreglar.", "Compta només els blocs del programa o encara no sap explicar l'avantatge.|Cuenta solo los bloques del programa o todavía no sabe explicar la ventaja."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «El missatge més curt»: escriviu el camí de la porta a la cuina i torneu-lo a escriure amb noms per als trossos que es repeteixen.|En casa, con el móvil, podéis repetir la sesión y hacer «El mensaje más corto»: escribid el camino de la puerta a la cocina y volved a escribirlo con nombres para los trozos que se repiten.",
    slides: [
      { id: 's1', k: 'portada', t: 'Pocs blocs, molta feina|Pocos bloques, mucho trabajo', x: "Avui farem programes curts que fan molta feina.|Hoy haremos programas cortos que hacen mucho trabajo.",
        nota: "Explica que avui hi haurà reptes amb un màxim de blocs: com un concurs.|Explica que hoy habrá retos con un máximo de bloques: como un concurso." },
      { id: 's2', k: 'repas', t: 'Recordes?|¿Recuerdas?', x: "Com fas pujar en Bit 5 esglaons amb la funció escala?|¿Cómo haces subir a Bit 5 escalones con la función escalera?",
        nota: "Resposta: Repeteix 5 vegades: Funció escala.|Respuesta: Repite 5 veces: Función escalera." },
      { id: 's3', k: 'concepte', t: 'Un xip amb poca memòria|Un chip con poca memoria', punts: ["Al xip nou d'en Bit hi caben pocs blocs.|En el chip nuevo de Bit caben pocos bloques.", "Si el programa és massa llarg, no hi cap.|Si el programa es demasiado largo, no cabe.", "El truc: reutilitzar amb funcions.|El truco: reutilizar con funciones."],
        nota: "Pregunta per altres raons per fer programes curts: s'entenen millor i, si hi ha un error, es troba abans.|Pregunta por otras razones para hacer programas cortos: se entienden mejor y, si hay un error, se encuentra antes." },
      { id: 's4', k: 'anim', t: 'Escriu-ho una vegada, fes-ho servir moltes|Escríbelo una vez, úsalo muchas', anim: 'u5short', x: "12 blocs sense funció; 6 amb una funció i un bucle.|12 bloques sin función; 6 con una función y un bucle.",
        nota: "Compteu els blocs de la columna de la dreta: 2 al programa i 4 a la funció.|Contad los bloques de la columna de la derecha: 2 en el programa y 4 en la función." },
      { id: 's5', k: 'pregunta', t: 'Quants blocs són?|¿Cuántos bloques son?', punts: ["Programa: Repeteix 3 vegades: Funció escala.|Programa: Repite 3 veces: Función escalera.", "Funció escala: Endavant, Gira a l'esquerra, Endavant, Gira a la dreta.|Función escalera: Adelante, Gira a la izquierda, Adelante, Gira a la derecha."],
        nota: "Resposta: 6 (2 + 4). Escriu a la pissarra la suma i deixa-la tota la sessió.|Respuesta: 6 (2 + 4). Escribe en la pizarra la suma y déjala toda la sesión." },
      { id: 's6', k: 'anim', t: 'Dues funcions: puja i baixa|Dos funciones: sube y baja', anim: 'u5two', x: "Cada funció és una ordre nova, i les pots cridar en l'ordre que vulguis.|Cada función es una orden nueva, y las puedes llamar en el orden que quieras.",
        nota: "Llegiu junts l'ordre de les funcions: puja, baixa, puja, puja, baixa.|Leed juntos el orden de las funciones: sube, baja, sube, sube, baja." },
      { id: 's7', k: 'demo', t: 'Dues funcions en acció|Dos funciones en acción', x: "La funció A puja un esglaó i la B en baixa un. Programa: A, A, B, B.|La función A sube un escalón y la B baja uno. Programa: A, A, B, B.",
        demo: { w: { map: ['..##.', '.####', '>#..F'] }, prog: 'A A B B', fns: { A: 'f l f r', B: 'f r f l' } },
        nota: "Que la classe digui «puja!» o «baixa!» cada vegada que s'il·lumina una funció.|Que la clase diga «¡sube!» o «¡baja!» cada vez que se ilumina una función." },
      { id: 's8', k: 'demo', t: "Pensa abans d'executar|Piensa antes de ejecutar", x: "A = recte (Endavant, Endavant). B = volta (Gira a l'esquerra, Endavant, Gira a l'esquerra). Programa: A, B, A. On acabarà en Bit: A, B o C?|A = recto (Adelante, Adelante). B = vuelta (Gira a la izquierda, Adelante, Gira a la izquierda). Programa: A, B, A. ¿Dónde terminará Bit: A, B o C?",
        demo: { w: { map: ['A#B..', '>###C'] }, prog: 'A B A', fns: { A: 'f f', B: 'l f l' } },
        nota: "Resposta: a la A. Qui diu B ha oblidat l'última crida; qui diu C no ha fet la volta.|Respuesta: en la A. Quien dice B ha olvidado la última llamada; quien dice C no ha hecho la vuelta." },
      { id: 's9', k: 'concepte', t: 'Primer que funcioni, després que sigui curt|Primero que funcione, después que sea corto', punts: ["1. Fes que el programa funcioni.|1. Haz que el programa funcione.", "2. Busca el tros que es repeteix.|2. Busca el trozo que se repite.", "3. Converteix-lo en una funció amb nom.|3. Conviértelo en una función con nombre.", "4. Torna-ho a provar.|4. Vuelve a probarlo."],
        nota: "Remarca que fer-ho curt és el segon pas, no el primer. Un programa curt que no funciona no serveix.|Remarca que hacerlo corto es el segundo paso, no el primero. Un programa corto que no funciona no sirve." },
      { id: 's10', k: 'activitat', t: 'El concurs dels pocs blocs|El concurso de los pocos bloques', timer: 12, punts: ["Per parelles, feu la fitxa.|Por parejas, haced la ficha.", "Busqueu el tros que es repeteix i poseu-li nom.|Buscad el trozo que se repite y ponedle nombre.", "Apunteu els blocs abans i després.|Apuntad los bloques antes y después.", "Proveu una solució a la quadrícula del terra.|Probad una solución en la cuadrícula del suelo."],
        nota: "Apunta a la taula de la pissarra els resultats de cada parella per a l'exercici 1.|Apunta en la tabla de la pizarra los resultados de cada pareja para el ejercicio 1." },
      { id: 's11', k: 'concepte', t: 'Com es compten els blocs|Cómo se cuentan los bloques', punts: ["Cada bloc del programa compta 1, també el bucle i el bloc lila.|Cada bloque del programa cuenta 1, también el bucle y el bloque lila.", "Els blocs de dins de la funció es compten una sola vegada.|Los bloques de dentro de la función se cuentan una sola vez.", "Total = programa + funcions.|Total = programa + funciones."],
        nota: "Deixa-la projectada durant la fitxa.|Déjala proyectada durante la ficha." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Pocs blocs, molta feina».|Abre la sesión «Pocos bloques, mucho trabajo».", "A l'«Investiga», busca el tros que ja és a la funció.|En el «Investiga», busca el trozo que ya está en la función.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Fixa't en qui només compta els blocs del programa a la pregunta de comptar.|Fíjate en quién solo cuenta los bloques del programa en la pregunta de contar." },
      { id: 's13', k: 'demo', t: 'Programem junts: el jardí petit|Programemos juntos: el jardín pequeño', x: "Sense bucle! La funció A és un costat: Endavant, Endavant, Gira a la dreta. Quantes vegades l'hem de cridar per recollir les estrelles?|¡Sin bucle! La función A es un lado: Adelante, Adelante, Gira a la derecha. ¿Cuántas veces tenemos que llamarla para recoger las estrellas?",
        demo: { w: { map: ['>#*', '#.#', '*#*'] }, prog: 'A A A', fns: { A: 'f f r' } },
        nota: "Resposta: 3 vegades (6 blocs en total). Al primer repte de l'app el jardí és més gran, però la idea és la mateixa.|Respuesta: 3 veces (6 bloques en total). En el primer reto de la app el jardín es más grande, pero la idea es la misma." },
      { id: 's14', k: 'repte', t: 'Reptes amb màxim de blocs|Retos con máximo de bloques', timer: 10, punts: ["1. La volta al jardí: 8 blocs, sense bucle.|1. La vuelta al jardín: 8 bloques, sin bucle.", "2. La serra de les estrelles: dues funcions, 14 blocs.|2. La sierra de las estrellas: dos funciones, 14 bloques.", "3. El repartiment als dos carrers: 12 blocs.|3. El reparto en las dos calles: 12 bloques."],
        nota: "Si algú s'encalla a la serra, que segueixi les estrelles amb el dit i digui puja o baixa a cada una.|Si alguien se atasca en la sierra, que siga las estrellas con el dedo y diga sube o baja en cada una." },
      { id: 's15', k: 'activitat', t: 'Crea: el rècord de blocs|Crea: el récord de bloques', timer: 5, x: "Recull les 5 estrelles i arriba a la bandera amb 10 blocs com a màxim.|Recoge las 5 estrellas y llega a la bandera con 10 bloques como máximo.",
        nota: "Apunta a la pissarra el rècord de la classe. Pregunta si la solució més curta també és fàcil d'entendre.|Apunta en la pizarra el récord de la clase. Pregunta si la solución más corta también es fácil de entender." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Reutilitzar: escriu-ho una vegada, fes-ho servir moltes.|Reutilizar: escríbelo una vez, úsalo muchas.", "Pots tenir dues funcions i cridar-les en l'ordre que calgui.|Puedes tener dos funciones y llamarlas en el orden que haga falta.", "Primer que funcioni, després que sigui curt i clar.|Primero que funcione, después que sea corto y claro."],
        nota: "Avança que la setmana vinent faran el projecte de la unitat: la ciutat dels robots.|Avanza que la semana que viene harán el proyecto de la unidad: la ciudad de los robots." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Què vol dir reutilitzar?|¿Qué quiere decir reutilizar?", "Funció A, Funció A, Funció A, i la funció A té 4 blocs. Quants blocs en total?|Función A, Función A, Función A, y la función A tiene 4 bloques. ¿Cuántos bloques en total?"],
        nota: "Respostes: escriure un tros una vegada i fer-lo servir moltes; 3 + 4 = 7 blocs.|Respuestas: escribir un trozo una vez y usarlo muchas; 3 + 4 = 7 bloques." }
    ],
    print: [
      { id: 'p1', t: 'Fitxa: el concurs dels pocs blocs|Ficha: el concurso de los pocos bloques', k: 'fitxa',
        intro: "Aquests programes funcionen, però són llargs. Busqueu el tros que es repeteix, poseu-li nom i torneu a escriure el programa amb funcions. Compteu els blocs abans i després.|Estos programas funcionan, pero son largos. Buscad el trozo que se repite, ponedle nombre y volved a escribir el programa con funciones. Contad los bloques antes y después.",
        items: [
          { q: "Aquest programa porta en Bit a la bandera i té 13 blocs. Torna'l a escriure amb una funció. Quants blocs fas servir ara?|Este programa lleva a Bit a la bandera y tiene 13 bloques. Vuelve a escribirlo con una función. ¿Cuántos bloques usas ahora?",
            w: { map: ['...#F', '..##.', '.##..', '>#...'] }, prog: 'f l f r f l f r f l f r f', solProg: 'A A A f', solFns: { A: 'f l f r' },
            sol: "Funció escala: Endavant, Gira a l'esquerra, Endavant, Gira a la dreta. Programa: escala, escala, escala, Endavant. 4 + 4 = 8 blocs (amb un bucle, 7).|Función escalera: Adelante, Gira a la izquierda, Adelante, Gira a la derecha. Programa: escalera, escalera, escalera, Adelante. 4 + 4 = 8 bloques (con un bucle, 7)." },
          { q: "Compta! Quants blocs té aquest programa, comptant els de la funció?|¡Cuenta! ¿Cuántos bloques tiene este programa, contando los de la función?",
            prog: '3{ A }', fns: { A: 'f f r' },
            sol: "2 blocs al programa (el bucle i la funció) + 3 a dins de la funció = 5 blocs.|2 bloques en el programa (el bucle y la función) + 3 dentro de la función = 5 bloques." },
          { q: "Aquest camí puja i baixa. Té 17 blocs. Fes-lo amb dues funcions, puja i baixa, i escriu en quin ordre les crides.|Este camino sube y baja. Tiene 17 bloques. Hazlo con dos funciones, sube y baja, y escribe en qué orden las llamas.",
            w: { map: ['..*.*F', '.*.*..', '>.....'] }, prog: 'f l f r f l f r f r f l f l f r f', solProg: 'A A B A f', solFns: { A: 'f l f r', B: 'f r f l' },
            sol: "Puja (A): Endavant, Gira a l'esquerra, Endavant, Gira a la dreta. Baixa (B): Endavant, Gira a la dreta, Endavant, Gira a l'esquerra. Programa: puja, puja, baixa, puja, Endavant. 5 + 8 = 13 blocs.|Sube (A): Adelante, Gira a la izquierda, Adelante, Gira a la derecha. Baja (B): Adelante, Gira a la derecha, Adelante, Gira a la izquierda. Programa: sube, sube, baja, sube, Adelante. 5 + 8 = 13 bloques." },
          { q: "Dos programes fan el mateix camí: un té 16 blocs i l'altre en té 8 amb una funció. Si hi ha un error a l'escala, quin arreglaries abans? Per què?|Dos programas hacen el mismo camino: uno tiene 16 bloques y el otro tiene 8 con una función. Si hay un error en la escalera, ¿cuál arreglarías antes? ¿Por qué?",
            sol: "El de la funció: l'error és en un sol lloc i, arreglant la funció, queda bé a totes les crides.|El de la función: el error está en un solo sitio y, arreglando la función, queda bien en todas las llamadas." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: la ciutat dels robots ---------- */
  'r5-4': {
    obj: [
      "L'alumne/a planifica un projecte buscant la feina que es repeteix i decidint quines funcions farà i quin nom tindran.|El alumno/a planifica un proyecto buscando el trabajo que se repite y decidiendo qué funciones hará y qué nombre tendrán.",
      "L'alumne/a escriu funcions amb noms que expliquen què fan i les crida en diferents llocs del programa.|El alumno/a escribe funciones con nombres que explican qué hacen y las llama en distintos lugares del programa.",
      "L'alumne/a fa servir la mateixa funció en carrers amb direccions diferents perquè entén que comença on és en Bit.|El alumno/a usa la misma función en calles con direcciones diferentes porque entiende que empieza donde está Bit.",
      "L'alumne/a presenta el seu projecte i explica les seves funcions i un error que ha arreglat.|El alumno/a presenta su proyecto y explica sus funciones y un error que ha arreglado."
    ],
    comp: [
      "Competència digital (CD5): dissenyar i programar un projecte de diverses etapes amb funcions|Competencia digital (CD5): diseñar y programar un proyecto de varias etapas con funciones",
      "Pensament computacional: descomposició, abstracció amb funcions amb nom, planificació i depuració|Pensamiento computacional: descomposición, abstracción con funciones con nombre, planificación y depuración",
      "Matemàtiques: orientació i recorreguts en una quadrícula, patrons|Matemáticas: orientación y recorridos en una cuadrícula, patrones",
      "Comunicació oral: presentar un projecte i explicar com s'ha fet|Comunicación oral: presentar un proyecto y explicar cómo se ha hecho"
    ],
    vocab: [
      ["Planificar|Planificar", "Pensar què farà el programa i en quin ordre abans de posar blocs.|Pensar qué hará el programa y en qué orden antes de poner bloques."],
      ["Encàrrec|Encargo", "Una feina completa: agafar una caixa i portar-la a una casa.|Un trabajo completo: coger una caja y llevarla a una casa."],
      ["Nom clar|Nombre claro", "Un nom de funció que diu què fa, com porta-la.|Un nombre de función que dice qué hace, como llévala."],
      ["Des d'on és en Bit|Desde donde está Bit", "Una funció fa els blocs des de la casella on és en Bit i cap on mira.|Una función hace los bloques desde la casilla donde está Bit y hacia donde mira."],
      ["Projecte|Proyecto", "Un repte més gran on fem servir tot el que hem après a la unitat.|Un reto más grande donde usamos todo lo que hemos aprendido en la unidad."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la ciutat dels robots»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la ciudad de los robots»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra, les targetes d'ordres i les targetes de la ciutat|La cuadrícula del suelo, las tarjetas de órdenes y las tarjetas de la ciudad",
        "Dues capses petites (o estoigs) que facin de caixa i el full de pla de la ciutat (un per parella)|Dos cajas pequeñas (o estuches) que hagan de caja y la hoja de plan de la ciudad (una por pareja)"
      ],
      imprimir: ["Full de pla de la ciutat|Hoja de plan de la ciudad", "Targetes de la ciutat|Tarjetas de la ciudad"],
      prep: [
        "Muntar a la quadrícula del terra el mapa de l'exercici 1 del full de pla: dues caixes, dues cases i en Bit a baix a l'esquerra mirant amunt.|Montar en la cuadrícula del suelo el mapa del ejercicio 1 de la hoja de plan: dos cajas, dos casas y Bit abajo a la izquierda mirando arriba.",
        "Imprimir un full de pla per parella i un paquet de targetes de la ciutat per grup.|Imprimir una hoja de plan por pareja y un paquete de tarjetas de la ciudad por grupo.",
        "Decidir com es presentaran els projectes: 3 o 4 voluntaris al projector o una volta per l'aula.|Decidir cómo se presentarán los proyectos: 3 o 4 voluntarios en el proyector o una vuelta por el aula.",
        "Tenir preparades les insígnies o un reconeixement senzill per al final de la unitat.|Tener preparadas las insignias o un reconocimiento sencillo para el final de la unidad."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i la ciutat dels robots|Recordamos y la ciudad de los robots", fase: 'inici',
        fa: "Fes la pregunta de repàs sobre les funcions. Explica la missió: el poble ha crescut i ara és la ciutat dels robots, i avui en Bit farà tots els encàrrecs. Escriu a la pissarra: «Què es repeteix? Posa-hi nom!»|Haz la pregunta de repaso sobre las funciones. Explica la misión: el pueblo ha crecido y ahora es la ciudad de los robots, y hoy Bit hará todos los encargos. Escribe en la pizarra: «¿Qué se repite? ¡Ponle nombre!»",
        diu: ["Una funció escrita una vegada, quantes vegades es pot cridar?|Una función escrita una vez, ¿cuántas veces se puede llamar?",
          "Avui farem servir tot el que hem après: funcions, bucles, noms i caçar bugs.|Hoy usaremos todo lo que hemos aprendido: funciones, bucles, nombres y cazar bugs."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Planificar amb funcions|Planificar con funciones", fase: 'teoria',
        fa: "Mostra l'animació del pla: tres encàrrecs iguals es converteixen en la funció «porta-la». Amb la demostració, discutiu quin nom és millor, «A» o «porta-la». Explica amb l'animació que la funció comença on és en Bit i per això serveix per a carrers diferents. Acaba amb els passos del pla del projecte.|Muestra la animación del plan: tres encargos iguales se convierten en la función «llévala». Con la demostración, discutid qué nombre es mejor, «A» o «llévala». Explica con la animación que la función empieza donde está Bit y por eso sirve para calles diferentes. Acaba con los pasos del plan del proyecto.",
        diu: ["Quina feina es repeteix a cada encàrrec?|¿Qué trabajo se repite en cada encargo?",
          "Si llegiu «Funció A», sabeu què fa? I si llegiu «porta-la»?|Si leéis «Función A», ¿sabéis qué hace? ¿Y si leéis «llévala»?",
          "Abans de cridar porta-la, on ha de ser en Bit i cap on ha de mirar?|Antes de llamar a llévala, ¿dónde tiene que estar Bit y hacia dónde tiene que mirar?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Planifiquem la ciutat|Planificamos la ciudad", fase: 'desconnectat',
        fa: "Per parelles, omplen els exercicis 1 i 2 del full de pla: marquen al mapa els encàrrecs que es repeteixen, escriuen la funció «porta-la» i el programa. Després, en grups de 3, ho proven a la quadrícula del terra: el guardià/ana de la llibreta té la funció i el robot porta una capsa de debò. Si un encàrrec falla, arreglen només la funció o el tros del programa que falla.|Por parejas, rellenan los ejercicios 1 y 2 de la hoja de plan: marcan en el mapa los encargos que se repiten, escriben la función «llévala» y el programa. Después, en grupos de 3, lo prueban en la cuadrícula del suelo: el guardián/a de la libreta tiene la función y el robot lleva una caja de verdad. Si un encargo falla, arreglan solo la función o el trozo del programa que falla.",
        diu: ["Primer el pla, després les targetes. Quina feina es repeteix?|Primero el plan, después las tarjetas. ¿Qué trabajo se repite?",
          "Entre un encàrrec i l'altre, què ha de fer el robot? Això va al programa, no a la funció.|Entre un encargo y otro, ¿qué tiene que hacer el robot? Eso va en el programa, no en la función.",
          "Ha fallat el segon encàrrec però el primer no: on deu ser l'error?|Ha fallado el segundo encargo pero el primero no: ¿dónde estará el error?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles i després grups de 3|Por parejas y después grupos de 3" },
      { min: 12, t: "A l'ordinador: primers encàrrecs|En el ordenador: primeros encargos", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins al repte de la plaça del mercat. A l'ordenar blocs, que diguin en veu alta què fa cada bloc lila. Fixa't en qui posa a la funció el gir que va entre encàrrecs: pregunta-li si aquest gir és igual a tots els encàrrecs.|Cada alumno/a hace la sesión hasta el reto de la plaza del mercado. Al ordenar bloques, que digan en voz alta qué hace cada bloque lila. Fíjate en quién pone en la función el giro que va entre encargos: pregúntale si ese giro es igual en todos los encargos.",
        diu: ["Llegeix el teu programa en veu alta: s'entén com una història?|Lee tu programa en voz alta: ¿se entiende como una historia?",
          "Aquest gir passa a tots els encàrrecs o només entre el primer i el segon?|¿Este giro pasa en todos los encargos o solo entre el primero y el segundo?"],
        slides: ['s10'], app: "Pregunta de «Recorda», les històries de la ciutat, les targetes de «Descobreix», el millor nom, ordenar els passos del pla, ordenar els blocs amb porta-la, el repte dels dos encàrrecs, la «Pausa activa» i la plaça del mercat.|Pregunta de «Recuerda», las historias de la ciudad, las tarjetas de «Descubre», el mejor nombre, ordenar los pasos del plan, ordenar los bloques con llévala, el reto de los dos encargos, la «Pausa activa» y la plaza del mercado.", org: "Individual|Individual" },
      { min: 15, t: "Projecte: la ciutat dels robots|Proyecto: la ciudad de los robots", fase: 'crea',
        fa: "Primer, el repte de la funció amb un bug. Després, abans de començar el projecte final, cada alumne/a escriu a l'exercici 3 del full de pla quines funcions farà, quin nom tindran i en quin ordre les cridarà. Quan ho tingui, programa, prova cada encàrrec i millora.|Primero, el reto de la función con un bug. Después, antes de empezar el proyecto final, cada alumno/a escribe en el ejercicio 3 de la hoja de plan qué funciones hará, qué nombre tendrán y en qué orden las llamará. Cuando lo tenga, programa, prueba cada encargo y mejora.",
        diu: ["Quina és la primera caixa? Cap on mira en Bit quan hi arriba?|¿Cuál es la primera caja? ¿Hacia dónde mira Bit cuando llega?",
          "Prova cada encàrrec abans de continuar: si falla, saps on és el bug.|Prueba cada encargo antes de seguir: si falla, sabes dónde está el bug.",
          "Has fet servir porta-la als tres carrers? Per què funciona encara que vagin cap a llocs diferents?|¿Has usado llévala en las tres calles? ¿Por qué funciona aunque vayan hacia sitios distintos?"],
        slides: ['s11', 's12', 's13'], app: "El repte de la funció porta-la amb un bug i el projecte de «Crea»: La ciutat dels robots.|El reto de la función llévala con un bug y el proyecto de «Crea»: La ciudad de los robots.", org: "Individual|Individual" },
      { min: 5, t: "Presentem els projectes|Presentamos los proyectos", fase: 'tancament',
        fa: "Tres o quatre voluntaris projecten la seva ciutat. Abans d'executar-la, llegeixen el programa en veu alta i expliquen què fa cada funció. La classe diu si el programa s'entén com un pla. Després, expliquen un bug que hagin trobat i com l'han arreglat.|Tres o cuatro voluntarios proyectan su ciudad. Antes de ejecutarla, leen el programa en voz alta y explican qué hace cada función. La clase dice si el programa se entiende como un plan. Después, explican un bug que hayan encontrado y cómo lo han arreglado.",
        diu: ["Quines funcions has fet i quin nom els has posat?|¿Qué funciones has hecho y qué nombre les has puesto?",
          "Quantes vegades crides porta-la?|¿Cuántas veces llamas a llévala?",
          "Què t'ha agradat del projecte del company/a?|¿Qué te ha gustado del proyecto del compañero/a?"],
        slides: ['s14'], app: "El projecte guardat a «Crea», projectat des de l'ordinador de cada voluntari/ària.|El proyecto guardado en «Crea», proyectado desde el ordenador de cada voluntario/a.", org: "Tot el grup|Todo el grupo" },
      { min: 3, t: "Tancament de la unitat|Cierre de la unidad", fase: 'tancament',
        fa: "Repassa les idees de la unitat amb el resum i deixa que responguin les preguntes finals de l'app. Fes el tiquet de sortida i reconeix la feina de tothom amb la insígnia de la ciutat dels robots.|Repasa las ideas de la unidad con el resumen y deja que respondan las preguntas finales de la app. Haz el ticket de salida y reconoce el trabajo de todos con la insignia de la ciudad de los robots.",
        diu: ["Què és una funció i per a què serveix?|¿Qué es una función y para qué sirve?",
          "Quina de les quatre sessions us ha agradat més? Per què?|¿Cuál de las cuatro sesiones os ha gustado más? ¿Por qué?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa dins de porta-la el gir que va entre dos encàrrecs, i el següent encàrrec surt torçat.|Pone dentro de llévala el giro que va entre dos encargos, y el siguiente encargo sale torcido.",
        "Pregunta si aquest gir passa a tots els encàrrecs. Si només passa entre dos, va al programa, no a la funció.|Pregunta si ese giro pasa en todos los encargos. Si solo pasa entre dos, va en el programa, no en la función."],
      ["Crida porta-la quan en Bit encara no mira cap a la caixa.|Llama a llévala cuando Bit todavía no mira hacia la caja.",
        "Que executi fins just abans de la crida i miri en Bit: on és i cap on mira? Recorda-li que la funció comença on és en Bit.|Que ejecute hasta justo antes de la llamada y mire a Bit: ¿dónde está y hacia dónde mira? Recuérdale que la función empieza donde está Bit."],
      ["Compta malament les caselles entre la caixa i la casa i deixa la caixa abans d'hora.|Cuenta mal las casillas entre la caja y la casa y deja la caja antes de tiempo.",
        "Que faci un sol encàrrec pas a pas i compti amb el dit les caselles que avança en Bit després d'agafar la caixa.|Que haga un solo encargo paso a paso y cuente con el dedo las casillas que avanza Bit después de coger la caja."],
      ["Comença a posar blocs sense pla i es perd al mig del projecte.|Empieza a poner bloques sin plan y se pierde en medio del proyecto.",
        "Atura'l amb amabilitat i demana-li que llegeixi el pla del full o que el digui en veu alta. Després, que programi i provi només el primer encàrrec.|Páralo con amabilidad y pídele que lea el plan de la hoja o que lo diga en voz alta. Después, que programe y pruebe solo el primer encargo."],
      ["Fa tot el projecte amb blocs solts i no fa servir cap funció.|Hace todo el proyecto con bloques sueltos y no usa ninguna función.",
        "Felicita'l perquè funciona i proposa-li un repte: quin tros es repeteix tres vegades? Si el converteix en porta-la, quants blocs s'estalvia?|Felicítalo porque funciona y proponle un reto: ¿qué trozo se repite tres veces? Si lo convierte en llévala, ¿cuántos bloques se ahorra?"]
    ],
    diff: {
      mes: "Fer el projecte amb dues funcions (porta-la i una altra per anar d'un carrer a l'altre) i comparar els blocs amb una sola funció. Després, dibuixar al full una ciutat nova amb tres encàrrecs iguals perquè un company/a la resolgui amb funcions.|Hacer el proyecto con dos funciones (llévala y otra para ir de una calle a otra) y comparar los bloques con una sola función. Después, dibujar en la hoja una ciudad nueva con tres encargos iguales para que un compañero/a la resuelva con funciones.",
      menys: "Començar el projecte amb un sol encàrrec: escriure porta-la, cridar-la una vegada i comprovar que funciona. Després afegir el camí fins al segon encàrrec i tornar-la a cridar. Tenir la targeta lila de porta-la al costat de l'ordinador.|Empezar el proyecto con un solo encargo: escribir llévala, llamarla una vez y comprobar que funciona. Después añadir el camino hasta el segundo encargo y volver a llamarla. Tener la tarjeta lila de llévala al lado del ordenador."
    },
    aval: {
      ticket: ["Què és una funció i per a què serveix?|¿Qué es una función y para qué sirve?",
        "Per què és millor dir-ne «porta-la» que «A»?|¿Por qué es mejor llamarla «llévala» que «A»?"],
      rubric: [
        ["Planificació|Planificación", "Abans de programar, troba la feina que es repeteix i decideix les funcions i els noms.|Antes de programar, encuentra el trabajo que se repite y decide las funciones y los nombres.", "Fa el pla quan l'hi demanen, però programa sense seguir-lo.|Hace el plan cuando se lo piden, pero programa sin seguirlo."],
        ["Funcions amb nom|Funciones con nombre", "Escriu porta-la i la crida a tots els encàrrecs, posant en Bit al lloc bo abans de cada crida.|Escribe llévala y la llama en todos los encargos, poniendo a Bit en el sitio correcto antes de cada llamada.", "Fa servir la funció en un encàrrec o necessita ajuda per posar en Bit al lloc bo.|Usa la función en un encargo o necesita ayuda para poner a Bit en el sitio correcto."],
        ["Projecte final|Proyecto final", "Reparteix les tres caixes amb funcions i explica un bug que ha arreglat.|Reparte las tres cajas con funciones y explica un bug que ha arreglado.", "Reparteix una o dues caixes, o les tres sense funcions o amb ajuda.|Reparte una o dos cajas, o las tres sin funciones o con ayuda."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla us pot ensenyar el projecte «La ciutat dels robots» i explicar-vos què fa la funció porta-la. Podeu fer també la pausa activa del repartidor amb una caixa imaginària.|En casa, con el móvil, vuestro hijo o hija os puede enseñar el proyecto «La ciudad de los robots» y explicaros qué hace la función llévala. También podéis hacer la pausa activa del repartidor con una caja imaginaria.",
    slides: [
      { id: 's1', k: 'portada', t: 'Projecte: la ciutat dels robots|Proyecto: la ciudad de los robots', x: "Avui en Bit farà tots els encàrrecs de la ciutat amb ordres noves.|Hoy Bit hará todos los encargos de la ciudad con órdenes nuevas.",
        nota: "Explica que és el projecte final de la unitat: faran servir tot el que han après en les tres sessions anteriors.|Explica que es el proyecto final de la unidad: usarán todo lo que han aprendido en las tres sesiones anteriores." },
      { id: 's2', k: 'repas', t: 'Recordes?|¿Recuerdas?', x: "Una funció escrita una vegada… quantes vegades es pot cridar?|Una función escrita una vez… ¿cuántas veces se puede llamar?",
        nota: "Resposta: tantes com vulguis. Per això fa els programes més curts.|Respuesta: tantas como quieras. Por eso hace los programas más cortos." },
      { id: 's3', k: 'concepte', t: 'La ciutat dels robots|La ciudad de los robots', punts: ["Hi ha caixes i cases per tota la ciutat.|Hay cajas y casas por toda la ciudad.", "Cada encàrrec: agafar la caixa, caminar i deixar-la.|Cada encargo: coger la caja, caminar y dejarla.", "En Bit ho farà amb funcions amb nom.|Bit lo hará con funciones con nombre."],
        nota: "Pregunta quina funció creuen que necessitarà en Bit i quin nom li posarien.|Pregunta qué función creen que necesitará Bit y qué nombre le pondrían." },
      { id: 's4', k: 'anim', t: 'Què es repeteix? Posa-hi nom!|¿Qué se repite? ¡Ponle nombre!', anim: 'u5plan', x: "Tres encàrrecs iguals es converteixen en la funció porta-la.|Tres encargos iguales se convierten en la función llévala.",
        nota: "Llegiu el programa de la dreta com una història: porta-la, gira, porta-la, gira, porta-la.|Leed el programa de la derecha como una historia: llévala, gira, llévala, gira, llévala." },
      { id: 's5', k: 'demo', t: 'Un nom que expliqui què fa|Un nombre que explique qué hace', x: "La funció A és: Endavant, Agafa, Endavant, Endavant, Deixa. Quin nom li posaríeu?|La función A es: Adelante, Coge, Adelante, Adelante, Deja. ¿Qué nombre le pondríais?",
        demo: { w: { map: ['>b#Hb#H', '.......'] }, prog: 'A A', fns: { A: 'f p f f d' } },
        nota: "Recull noms i voteu el que expliqui millor què fa. Compareu-lo amb «A»: quin s'entén sense mirar els blocs?|Recoge nombres y votad el que explique mejor qué hace. Comparadlo con «A»: ¿cuál se entiende sin mirar los bloques?" },
      { id: 's6', k: 'anim', t: 'La funció comença on és en Bit|La función empieza donde está Bit', anim: 'u5where', x: "La mateixa porta-la serveix per a un carrer cap a la dreta o cap avall.|La misma llévala sirve para una calle hacia la derecha o hacia abajo.",
        nota: "Fes-ho amb el cos: un alumne/a fa porta-la mirant a la finestra i després mirant a la porta. Els passos són els mateixos!|Hacedlo con el cuerpo: un alumno/a hace llévala mirando a la ventana y después mirando a la puerta. ¡Los pasos son los mismos!" },
      { id: 's7', k: 'concepte', t: 'El pla del projecte|El plan del proyecto', punts: ["1. Mira el mapa i busca què es repeteix.|1. Mira el mapa y busca qué se repite.", "2. Posa nom a la funció.|2. Ponle nombre a la función.", "3. Escriu els blocs de la funció.|3. Escribe los bloques de la función.", "4. Crida-la al programa.|4. Llámala en el programa.", "5. Prova-ho i arregla el que falli.|5. Pruébalo y arregla lo que falle."],
        nota: "Deixa aquests passos escrits a la pissarra durant tota la sessió.|Deja estos pasos escritos en la pizarra durante toda la sesión." },
      { id: 's8', k: 'activitat', t: 'Planifiquem la ciutat|Planificamos la ciudad', timer: 12, punts: ["Per parelles: marqueu al mapa els encàrrecs que es repeteixen.|Por parejas: marcad en el mapa los encargos que se repiten.", "Escriviu la funció porta-la i el programa.|Escribid la función llévala y el programa.", "En grups de 3: proveu-ho a la quadrícula.|En grupos de 3: probadlo en la cuadrícula.", "Si falla, arregleu només el tros que falla.|Si falla, arreglad solo el trozo que falla."],
        nota: "El mapa de l'exercici 1 ja és muntat a la quadrícula. El robot porta una capsa de debò.|El mapa del ejercicio 1 ya está montado en la cuadrícula. El robot lleva una caja de verdad." },
      { id: 's9', k: 'concepte', t: 'Funció o programa?|¿Función o programa?', punts: ["El que passa a tots els encàrrecs va a la funció.|Lo que pasa en todos los encargos va en la función.", "El que passa entre dos encàrrecs va al programa.|Lo que pasa entre dos encargos va en el programa.", "Abans de cridar la funció, en Bit ha de mirar cap a la caixa.|Antes de llamar a la función, Bit tiene que mirar hacia la caja."],
        nota: "És la idea que més costa. Torna-hi cada vegada que un grup posi un gir dins de la funció.|Es la idea que más cuesta. Vuelve a ella cada vez que un grupo ponga un giro dentro de la función." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Projecte: la ciutat dels robots».|Abre la sesión «Proyecto: la ciudad de los robots».", "Llegeix el programa en veu alta: s'entén?|Lee el programa en voz alta: ¿se entiende?", "Para quan arribis al repte de la funció amb un bug.|Para cuando llegues al reto de la función con un bug."],
        nota: "Comprova que ningú posa a la funció el gir que va entre encàrrecs.|Comprueba que nadie pone en la función el giro que va entre encargos." },
      { id: 's11', k: 'repte', t: 'La funció porta-la té un bug|La función llévala tiene un bug', timer: 4, x: "En Bit vol deixar la caixa abans d'arribar a la casa. Arregla la funció!|Bit quiere dejar la caja antes de llegar a la casa. ¡Arregla la función!",
        nota: "Pista: compteu les caselles entre la caixa i la casa. Falta un Endavant dins de la funció.|Pista: contad las casillas entre la caja y la casa. Falta un Adelante dentro de la función." },
      { id: 's12', k: 'concepte', t: 'La ciutat: fes el pla|La ciudad: haz el plan', punts: ["Quina feina es repeteix als tres carrers?|¿Qué trabajo se repite en las tres calles?", "Com passa en Bit d'un carrer a l'altre?|¿Cómo pasa Bit de una calle a otra?", "Escriu el pla a l'exercici 3 del full.|Escribe el plan en el ejercicio 3 de la hoja.", "Prova cada encàrrec abans de continuar.|Prueba cada encargo antes de seguir."],
        nota: "No deixis començar a programar fins que cada alumne/a tingui el pla escrit o dit.|No dejes empezar a programar hasta que cada alumno/a tenga el plan escrito o dicho." },
      { id: 's13', k: 'activitat', t: 'Projecte: la ciutat dels robots|Proyecto: la ciudad de los robots', timer: 11, x: "Reparteix les 3 caixes amb la funció porta-la. Planifica, programa, prova i millora.|Reparte las 3 cajas con la función llévala. Planifica, programa, prueba y mejora.",
        nota: "Qui acabi pot fer una segona funció per anar d'un carrer a l'altre o ajudar un company/a amb preguntes.|Quien termine puede hacer una segunda función para ir de una calle a otra o ayudar a un compañero/a con preguntas." },
      { id: 's14', k: 'activitat', t: 'Presentem els projectes|Presentamos los proyectos', timer: 5, punts: ["Quines funcions has fet i com es diuen?|¿Qué funciones has hecho y cómo se llaman?", "Llegeix el programa com un pla.|Lee el programa como un plan.", "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?"],
        nota: "Abans d'executar cada projecte, que la classe digui quantes vegades es cridarà porta-la.|Antes de ejecutar cada proyecto, que la clase diga cuántas veces se llamará a llévala." },
      { id: 's15', k: 'resum', t: 'Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad', punts: ["Una funció és un grup de blocs amb nom.|Una función es un grupo de bloques con nombre.", "Una funció es pot posar dins d'un bucle.|Una función se puede poner dentro de un bucle.", "Reutilitzar fa els programes curts i fàcils d'arreglar.|Reutilizar hace los programas cortos y fáciles de arreglar.", "Planificar: què es repeteix? Posa-hi un bon nom!|Planificar: ¿qué se repite? ¡Ponle un buen nombre!"],
        nota: "Felicita la classe pel projecte. Avança que la unitat següent tracta de comptar i recordar coses.|Felicita a la clase por el proyecto. Avanza que la unidad siguiente trata de contar y recordar cosas." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Què és una funció i per a què serveix?|¿Qué es una función y para qué sirve?", "Per què és millor dir-ne «porta-la» que «A»?|¿Por qué es mejor llamarla «llévala» que «A»?"],
        nota: "Respostes: un grup de blocs amb nom que es pot cridar moltes vegades; perquè el nom explica què fa i el programa s'entén.|Respuestas: un grupo de bloques con nombre que se puede llamar muchas veces; porque el nombre explica qué hace y el programa se entiende." }
    ],
    print: [
      { id: 'p1', t: 'Full de pla de la ciutat|Hoja de plan de la ciudad', k: 'fitxa',
        intro: "Primer penseu el pla: què es repeteix? Després escriviu la funció i el programa. En Bit només porta una caixa cada vegada.|Primero pensad el plan: ¿qué se repite? Después escribid la función y el programa. Bit solo lleva una caja cada vez.",
        items: [
          { q: "En Bit comença mirant amunt. Escriu la funció porta-la i el programa per fer els dos encàrrecs. Després proveu-ho a la quadrícula del terra.|Bit empieza mirando arriba. Escribe la función llévala y el programa para hacer los dos encargos. Después probadlo en la cuadrícula del suelo.",
            w: { map: ['.....', 'Hb#H.', '#....', 'b....', '^....'] }, solProg: 'A r A', solFns: { A: 'f p f f d' },
            sol: "Porta-la: Endavant, Agafa, Endavant, Endavant, Deixa. Programa: porta-la, Gira a la dreta, porta-la.|Llévala: Adelante, Coge, Adelante, Adelante, Deja. Programa: llévala, Gira a la derecha, llévala." },
          { q: "Quin gir has posat entre els dos encàrrecs? Per què va al programa i no a dins de la funció?|¿Qué giro has puesto entre los dos encargos? ¿Por qué va en el programa y no dentro de la función?",
            sol: "Gira a la dreta. Va al programa perquè només passa entre el primer encàrrec i el segon, no a cada encàrrec.|Gira a la derecha. Va en el programa porque solo pasa entre el primer encargo y el segundo, no en cada encargo." },
          { q: "El projecte de l'app: la ciutat dels robots. Marca al mapa els tres encàrrecs i escriu el teu pla: quines funcions faràs, quin nom tindran i en quin ordre les cridaràs.|El proyecto de la app: la ciudad de los robots. Marca en el mapa los tres encargos y escribe tu plan: qué funciones harás, qué nombre tendrán y en qué orden las llamarás.",
            w: { map: ['>#.###.', '.b.H.b.', '.#.#.#.', '.H.b.H.', '.###...'] }, solProg: 'f r A B A f r f f r A', solFns: { A: 'f p f f d', B: 'f l f f l' },
            sol: "Resposta oberta. Una possibilitat: porta-la (Endavant, Agafa, Endavant, Endavant, Deixa) als tres carrers, i una funció B (Endavant, Gira a l'esquerra, Endavant, Endavant, Gira a l'esquerra) per passar del primer carrer al segon.|Respuesta abierta. Una posibilidad: llévala (Adelante, Coge, Adelante, Adelante, Deja) en las tres calles, y una función B (Adelante, Gira a la izquierda, Adelante, Adelante, Gira a la izquierda) para pasar de la primera calle a la segunda." },
          { q: "Inventa un nom bo per a aquestes funcions: a) puja un esglaó; b) fa la volta a una plaça; c) agafa una caixa i la deixa a la casa del costat.|Inventa un buen nombre para estas funciones: a) sube un escalón; b) da la vuelta a una plaza; c) coge una caja y la deja en la casa de al lado.",
            sol: "Resposta oberta. Per exemple: a) puja o esglaó; b) volta a la plaça; c) reparteix o porta-la. Un bon nom diu què fa la funció.|Respuesta abierta. Por ejemplo: a) sube o escalón; b) vuelta a la plaza; c) reparte o llévala. Un buen nombre dice qué hace la función." }
        ] },
      { id: 'p2', t: 'Targetes de la ciutat|Tarjetas de la ciudad', k: 'targetes',
        intro: "Afegiu-les al paquet de la unitat. La targeta lila de porta-la va al programa i les seves targetes, a la llibreta. Les de caixa i casa marquen el mapa a la quadrícula.|Añadidlas al paquete de la unidad. La tarjeta lila de llévala va en el programa y sus tarjetas, en la libreta. Las de caja y casa marcan el mapa en la cuadrícula.",
        items: [
          { t: 'Funció porta-la 📦|Función llévala 📦', n: 3 },
          { t: 'Agafa la caixa ⬆|Coge la caja ⬆', n: 2 },
          { t: 'Deixa la caixa ⬇|Deja la caja ⬇', n: 2 },
          { t: 'Caixa 📦|Caja 📦', n: 2 },
          { t: 'Casa 🏠|Casa 🏠', n: 2 },
          { t: 'Pla del projecte 📝|Plan del proyecto 📝', n: 1 }
        ] }
    ]
  }
});

/* ==================== Tech Robot · unitat 6 «Comptar i recordar» ==================== */
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

/* ==================== Tech Robot · unitat 7 «Fins que…» ==================== */
/* ===== Numi Tech · guia del professorat · Tech Robot, unitat 7 «Fins que…» (bucles amb condició) =====
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Repeteix fins que arribis ---------- */
  'r7-1': {
    obj: [
      "L'alumne/a explica la diferència entre «Repeteix 5 vegades» i «Repeteix fins que…» amb un exemple de la vida diària.|El alumno/a explica la diferencia entre «Repite 5 veces» y «Repite hasta que…» con un ejemplo de la vida diaria.",
      "L'alumne/a fa servir «Repeteix fins que arribis a la bandera» i «Repeteix fins que hi hagi un obstacle davant» per portar en Bit on toca.|El alumno/a usa «Repite hasta que llegues a la bandera» y «Repite hasta que haya un obstáculo delante» para llevar a Bit donde toca.",
      "L'alumne/a diu que el bucle fa la pregunta abans de cada volta i para quan la resposta és «sí».|El alumno/a dice que el bucle hace la pregunta antes de cada vuelta y para cuando la respuesta es «sí».",
      "L'alumne/a reconeix un bucle infinit i el corregeix canviant els blocs de dins o la condició.|El alumno/a reconoce un bucle infinito y lo corrige cambiando los bloques de dentro o la condición."
    ],
    comp: [
      "Competència digital (CD5): crear programes que funcionen en situacions que canvien|Competencia digital (CD5): crear programas que funcionan en situaciones que cambian",
      "Pensament computacional: bucle amb condició, condició d'aturada i bucle infinit|Pensamiento computacional: bucle con condición, condición de parada y bucle infinito",
      "Matemàtiques: comptar i estimar quantitats desconegudes; comparar llargades|Matemáticas: contar y estimar cantidades desconocidas; comparar longitudes",
      "Comunicació oral: explicar amb paraules quan s'atura una repetició|Comunicación oral: explicar con palabras cuándo se para una repetición"
    ],
    vocab: [
      ["Bucle amb condició|Bucle con condición", "Un bucle que repeteix fins que passa alguna cosa, sense saber quantes vegades caldrà.|Un bucle que repite hasta que pasa algo, sin saber cuántas veces hará falta."],
      ["Condició|Condición", "La pregunta que fa en Bit abans de cada volta: «hi he arribat?», «tinc un obstacle davant?».|La pregunta que hace Bit antes de cada vuelta: «¿he llegado?», «¿tengo un obstáculo delante?»."],
      ["Fins que|Hasta que", "Les paraules que diuen quan s'ha d'aturar la repetició.|Las palabras que dicen cuándo se tiene que parar la repetición."],
      ["Volta|Vuelta", "Cada vegada que el bucle fa els blocs de dins.|Cada vez que el bucle hace los bloques de dentro."],
      ["Bucle infinit|Bucle infinito", "Un bucle que no s'acaba mai perquè la condició no es compleix mai.|Un bucle que no se acaba nunca porque la condición no se cumple nunca."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Repeteix fins que arribis»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Repite hasta que llegues»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Cinta de pintor per marcar al terra tres camins rectes de llargades diferents (3, 5 i 7 caselles, d'uns 40 cm)|Cinta de pintor para marcar en el suelo tres caminos rectos de longitudes diferentes (3, 5 y 7 casillas, de unos 40 cm)",
        "Tres banderes de paper, alguns fulls grans per fer de «boira» i un estoig que faci de caixa|Tres banderas de papel, algunas hojas grandes para hacer de «niebla» y un estuche que haga de caja"
      ],
      imprimir: ["Targetes del bucle «fins que»|Tarjetas del bucle «hasta que»", "Quadrícula del terra: missions de la boira|Cuadrícula del suelo: misiones de la niebla"],
      prep: [
        "Marcar els tres camins al terra, l'un al costat de l'altre, amb una bandera al final de cadascun. Tapar la meitat final de cada camí amb fulls de «boira».|Marcar los tres caminos en el suelo, uno al lado del otro, con una bandera al final de cada uno. Tapar la mitad final de cada camino con hojas de «niebla».",
        "Imprimir i retallar un paquet de targetes per grup de 3. Es poden afegir a les targetes d'ordres de la unitat 1.|Imprimir y recortar un paquete de tarjetas por grupo de 3. Se pueden añadir a las tarjetas de órdenes de la unidad 1.",
        "Provar les demostracions de les diapositives 7 i 8 per saber quantes vegades pregunta en Bit i on acaba.|Probar las demostraciones de las diapositivas 7 y 8 para saber cuántas veces pregunta Bit y dónde termina.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: la cova i la boira|Bienvenida: la cueva y la niebla", fase: 'inici',
        fa: "Fes la pregunta de repàs del bucle de la unitat 2. Explica la nova aventura: s'ha trobat una cova a la muntanya i en Bit va amb l'expedició, però hi ha boira i no se sap quant fa el camí. Pregunta quantes cullerades calen per menjar-se un plat de sopa i recull respostes.|Haz la pregunta de repaso del bucle de la unidad 2. Explica la nueva aventura: se ha encontrado una cueva en la montaña y Bit va con la expedición, pero hay niebla y no se sabe cuánto mide el camino. Pregunta cuántas cucharadas hacen falta para comerse un plato de sopa y recoge respuestas.",
        diu: ["Amb «Repeteix 4 vegades: Endavant», quantes caselles avança en Bit?|Con «Repite 4 veces: Adelante», ¿cuántas casillas avanza Bit?",
          "Quantes cullerades feu per menjar-vos la sopa? Ho sabeu abans de començar?|¿Cuántas cucharadas hacéis para comeros la sopa? ¿Lo sabéis antes de empezar?",
          "Si no sabem el número, com ho farà en Bit per saber quan ha de parar?|Si no sabemos el número, ¿cómo lo hará Bit para saber cuándo tiene que parar?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Repeteix fins que…|Repite hasta que…", fase: 'teoria',
        fa: "Explica el bucle amb condició amb l'animació del plat. Amb la segona animació, remarca que la pregunta es fa abans de cada volta. Presenta el bloc nou i, abans d'executar cada demostració, demana que la classe predigui quantes vegades preguntarà en Bit i on acabarà. Acaba amb el bucle infinit: que expliquin per què no s'acaba.|Explica el bucle con condición con la animación del plato. Con la segunda animación, remarca que la pregunta se hace antes de cada vuelta. Presenta el bloque nuevo y, antes de ejecutar cada demostración, pide que la clase prediga cuántas veces preguntará Bit y dónde terminará. Acaba con el bucle infinito: que expliquen por qué no se acaba.",
        diu: ["Mengeu fins que el plat és buit: això és un bucle amb condició!|Coméis hasta que el plato está vacío: ¡eso es un bucle con condición!",
          "Quantes vegades preguntarà en Bit «hi he arribat?» abans de parar?|¿Cuántas veces preguntará Bit «¿he llegado?» antes de parar?",
          "Si dins del bucle només hi ha «Gira», en Bit s'acosta a la bandera?|Si dentro del bucle solo hay «Gira», ¿Bit se acerca a la bandera?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El robot a la boira|El robot en la niebla", fase: 'desconnectat',
        fa: "Grups de 3: programador/a, robot i revisor/a. Primer, el programador/a fa un programa amb la targeta «Repeteix 4 vegades» per a un dels camins tapats per la boira, i el robot el prova als tres camins: només en funciona un. Després, fan el programa amb «Repeteix fins que arribis a la bandera: Endavant» i el proven als tres camins. El robot ha de dir en veu alta «Hi he arribat?» abans de cada pas. Acabeu amb les missions de la fitxa de la quadrícula i roteu els papers.|Grupos de 3: programador/a, robot y revisor/a. Primero, el programador/a hace un programa con la tarjeta «Repite 4 veces» para uno de los caminos tapados por la niebla, y el robot lo prueba en los tres caminos: solo funciona en uno. Después, hacen el programa con «Repite hasta que llegues a la bandera: Adelante» y lo prueban en los tres caminos. El robot tiene que decir en voz alta «¿He llegado?» antes de cada paso. Acabad con las misiones de la ficha de la cuadrícula y rotad los papeles.",
        diu: ["Amb «Repeteix 4 vegades», a quin camí arriba el robot a la bandera? I als altres?|Con «Repite 4 veces», ¿en qué camino llega el robot a la bandera? ¿Y en los otros?",
          "Robot: abans de cada pas, pregunta en veu alta «Hi he arribat?».|Robot: antes de cada paso, pregunta en voz alta «¿He llegado?».",
          "Heu hagut de canviar el programa per a cada camí? Per què no?|¿Habéis tenido que cambiar el programa para cada camino? ¿Por qué no?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a la pausa activa. Al pas «Fins que el plat sigui buit», que toquin «Ara no» i el facin a casa. Passeja i, a l'«On acabarà?», demana que expliquin per què en Bit no para a la A. Al bucle que no s'acaba, que l'executin per veure que en Bit s'atura sol, i després que toquin el bloc.|Cada alumno/a hace la sesión hasta la pausa activa. En el paso «Hasta que el plato esté vacío», que toquen «Ahora no» y lo hagan en casa. Pasea y, en el «¿Dónde terminará?», pide que expliquen por qué Bit no para en la A. En el bucle que no se acaba, que lo ejecuten para ver que Bit se para solo, y después que toquen el bloque.",
        diu: ["Per què en Bit no para a la A? Què té davant, allà?|¿Por qué Bit no para en la A? ¿Qué tiene delante, allí?",
          "Si la bandera estigués més lluny, què canviaries del programa?|Si la bandera estuviera más lejos, ¿qué cambiarías del programa?",
          "En el bucle que no s'acaba: què hi ha dins? Acosta en Bit a la bandera?|En el bucle que no se acaba: ¿qué hay dentro? ¿Acerca a Bit a la bandera?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les dues preguntes de repàs, les històries de la boira, les targetes de «Descobreix», la frase del globus, «Fins que el plat sigui buit» (per a casa), la bandera més lluny, «On acabarà?» i el bucle que no s'acaba mai.|De «Recuerda» hasta «Investiga»: las dos preguntas de repaso, las historias de la niebla, las tarjetas de «Descubre», la frase del globo, «Hasta que el plato esté vacío» (para casa), la bandera más lejos, «¿Dónde terminará?» y el bucle que no se acaba nunca.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: fins a la meta|Retos: hasta la meta", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després, programa amb la classe la demostració de la caixa demanant cada bloc. Deixa'ls fer els cinc reptes. Al de les tres illes, si algú fa servir «Repeteix 3 vegades», deixa que vegi com falla a la illa 2 abans d'ajudar-lo. Al de la bandera que se'ls passa, recorda'ls com es canvia la condició.|Haced la pausa activa todos juntos. Después, programa con la clase la demostración de la caja pidiendo cada bloque. Deja que hagan los cinco retos. En el de las tres islas, si alguien usa «Repite 3 veces», deja que vea cómo falla en la isla 2 antes de ayudarle. En el de la bandera que se pasa, recuérdales cómo se cambia la condición.",
        diu: ["Funciona a les tres illes? Mira les pestanyes de dalt.|¿Funciona en las tres islas? Mira las pestañas de arriba.",
          "On ha de parar en Bit, de veritat: a l'obstacle o a la bandera?|¿Dónde tiene que parar Bit, de verdad: en el obstáculo o en la bandera?",
          "Si ajudes un company/a, fes-li preguntes: no li toquis el ratolí.|Si ayudas a un compañero/a, hazle preguntas: no le toques el ratón."],
        slides: ['s13', 's14'], app: "«Pausa activa» i els cinc reptes: només 2 blocs, les tres illes de la boira, l'estrella del final del camí, el bug de la bandera i la caixa de l'expedició.|«Pausa activa» y los cinco retos: solo 2 bloques, las tres islas de la niebla, la estrella del final del camino, el bug de la bandera y la caja de la expedición.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el camí de la boira|Crea: el camino de la niebla", fase: 'crea',
        fa: "Cada alumne/a porta en Bit al campament amb almenys dos bucles «fins que». Quan acabin, per parelles s'ensenyen el programa i l'altre/a diu, abans d'executar-lo, on para cada bucle.|Cada alumno/a lleva a Bit al campamento con al menos dos bucles «hasta que». Cuando terminen, por parejas se enseñan el programa y el otro/a dice, antes de ejecutarlo, dónde para cada bucle.",
        diu: ["On para el teu primer bucle? I el segon?|¿Dónde para tu primer bucle? ¿Y el segundo?",
          "Hi ha algun Endavant repetit que podries canviar per un bucle?|¿Hay algún Adelante repetido que podrías cambiar por un bucle?"],
        slides: ['s15'], app: "Pas «Crea»: El camí de la boira.|Paso «Crea»: El camino de la niebla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida a la porta.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales de la app y haz el ticket de salida en la puerta.",
        diu: ["Digues una cosa que facis «fins que» passa alguna cosa.|Di algo que hagas «hasta que» pasa algo.",
          "Què passa si la condició no es compleix mai?|¿Qué pasa si la condición no se cumple nunca?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa «Repeteix fins que…» però no hi posa cap bloc a dins, o el posa a sota del bucle.|Pone «Repite hasta que…» pero no le pone ningún bloque dentro, o lo pone debajo del bucle.",
        "Pregunta: què ha de fer en Bit a cada volta? Que miri la ratlla del cursor: els blocs nous van on diu «els blocs nous van aquí».|Pregunta: ¿qué tiene que hacer Bit en cada vuelta? Que mire la raya del cursor: los bloques nuevos van donde dice «los bloques nuevos van aquí»."],
      ["Creu que el bucle fa una sola volta, o que para després de la primera.|Cree que el bucle hace una sola vuelta, o que para después de la primera.",
        "Que faci el programa «Pas a pas» i compti en veu alta les vegades que en Bit pregunta «hi he arribat?».|Que haga el programa «Paso a paso» y cuente en voz alta las veces que Bit pregunta «¿he llegado?»."],
      ["No canvia la condició: fa servir «arribis a la bandera» on no hi ha bandera.|No cambia la condición: usa «llegues a la bandera» donde no hay bandera.",
        "Pregunta: hi ha bandera en aquest mapa? Què hi ha al final del camí? Recorda-li que tocant el bloc pot triar «Canvia la condició».|Pregunta: ¿hay bandera en este mapa? ¿Qué hay al final del camino? Recuérdale que tocando el bloque puede elegir «Cambia la condición»."],
      ["Fa un bucle infinit (per exemple, només «Gira» a dins) i s'espera molta estona.|Hace un bucle infinito (por ejemplo, solo «Gira» dentro) y espera mucho rato.",
        "Ensenya-li el botó «Atura». Pregunta: els blocs de dins acosten en Bit a la condició? Què hauria de fer a cada volta per arribar-hi?|Enséñale el botón «Para». Pregunta: ¿los bloques de dentro acercan a Bit a la condición? ¿Qué tendría que hacer en cada vuelta para llegar?"],
      ["Continua fent servir «Repeteix N vegades» i canvia el número per a cada illa.|Sigue usando «Repite N veces» y cambia el número para cada isla.",
        "Felicita'l perquè compta bé i pregunta: i si demà el camí fos més llarg? Existeix un bucle que no necessiti el número?|Felicítale porque cuenta bien y pregunta: ¿y si mañana el camino fuera más largo? ¿Existe un bucle que no necesite el número?"]
    ],
    diff: {
      mes: "Fer el repte de la caixa amb el mínim de blocs i explicar per què el segon bucle para a la casa. Després, dibuixar a la quadrícula un camí nou amb una estrella al final i escriure un programa amb «fins que hi hagi un obstacle» perquè el resolgui un company/a.|Hacer el reto de la caja con el mínimo de bloques y explicar por qué el segundo bucle para en la casa. Después, dibujar en la cuadrícula un camino nuevo con una estrella al final y escribir un programa con «hasta que haya un obstáculo» para que lo resuelva un compañero/a.",
      menys: "Tenir a la taula la targeta «Repeteix fins que…» i la de la condició, i fer de robot amb el dit sobre la pantalla abans d'executar. Començar pels reptes d'una sola illa i fer servir «Pas a pas» per veure cada pregunta del bucle.|Tener en la mesa la tarjeta «Repite hasta que…» y la de la condición, y hacer de robot con el dedo sobre la pantalla antes de ejecutar. Empezar por los retos de una sola isla y usar «Paso a paso» para ver cada pregunta del bucle."
    },
    aval: {
      ticket: ["Digues una cosa que facis «fins que» passa alguna cosa.|Di algo que hagas «hasta que» pasa algo.",
        "Què passa si dins d'un «fins que arribis» només hi ha «Gira»?|¿Qué pasa si dentro de un «hasta que llegues» solo hay «Gira»?"],
      rubric: [
        ["Idea de bucle amb condició|Idea de bucle con condición", "Explica que repeteix fins que es compleix la condició i en dona un exemple propi.|Explica que repite hasta que se cumple la condición y da un ejemplo propio.", "Reconeix un «fins que» en un exemple, però el confon amb un número de vegades.|Reconoce un «hasta que» en un ejemplo, pero lo confunde con un número de veces."],
        ["Triar la condició|Elegir la condición", "Tria «arribis a la bandera», «hi hagi un obstacle» o «hi hagi una caixa» segons el que demana el mapa.|Elige «llegues a la bandera», «haya un obstáculo» o «haya una caja» según lo que pide el mapa.", "Fa servir sempre la mateixa condició, encara que el mapa no tingui bandera.|Usa siempre la misma condición, aunque el mapa no tenga bandera."],
        ["Bucle infinit|Bucle infinito", "Explica per què un bucle no s'acaba i l'arregla canviant els blocs de dins.|Explica por qué un bucle no se acaba y lo arregla cambiando los bloques de dentro.", "Veu que no s'acaba, però necessita ajuda per trobar el bloc que falla.|Ve que no se acaba, pero necesita ayuda para encontrar el bloque que falla."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla pot repetir la sessió i fer amb vosaltres l'activitat «Fins que el plat sigui buit», amb dos plats i uns quants macarrons crus. Fixeu-vos que el programa serveix encara que hi hagi més macarrons!|En casa, con el móvil, vuestro hijo o hija puede repetir la sesión y hacer con vosotros la actividad «Hasta que el plato esté vacío», con dos platos y unos cuantos macarrones crudos. ¡Fijaos en que el programa sirve aunque haya más macarrones!",
    slides: [
      { id: 's1', k: 'portada', t: "Repeteix fins que arribis|Repite hasta que llegues", x: "Avui aprendrem un bucle que no necessita saber el número de vegades.|Hoy aprenderemos un bucle que no necesita saber el número de veces.",
        nota: "Presenta la unitat: en Bit va d'expedició a la cova de la muntanya. Aquesta setmana, el camí amb boira.|Presenta la unidad: Bit va de expedición a la cueva de la montaña. Esta semana, el camino con niebla." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Amb «Repeteix 4 vegades: Endavant», quantes caselles avança en Bit?|Con «Repite 4 veces: Adelante», ¿cuántas casillas avanza Bit?",
        nota: "Resposta: 4. El bucle de la unitat 2 repeteix un número fix de vegades. Avui en veurem un altre.|Respuesta: 4. El bucle de la unidad 2 repite un número fijo de veces. Hoy veremos otro." },
      { id: 's3', k: 'pregunta', t: "Quantes cullerades?|¿Cuántas cucharadas?", x: "Quantes cullerades feu per menjar-vos un plat de sopa? Ho sabeu abans de començar?|¿Cuántas cucharadas hacéis para comeros un plato de sopa? ¿Lo sabéis antes de empezar?",
        nota: "Recull respostes. Conclusió: no ho sabem, i no cal! Mengem fins que el plat és buit.|Recoge respuestas. Conclusión: no lo sabemos, ¡y no hace falta! Comemos hasta que el plato está vacío." },
      { id: 's4', k: 'anim', t: "Fins que el plat sigui buit|Hasta que el plato esté vacío", anim: 'u7eat', x: "Repetir fins que passa alguna cosa és un bucle amb condició.|Repetir hasta que pasa algo es un bucle con condición.",
        nota: "Demana més exemples: caminar fins al semàfor, bufar el globus fins que és gros, omplir el got fins dalt.|Pide más ejemplos: caminar hasta el semáforo, soplar el globo hasta que es grande, llenar el vaso hasta arriba." },
      { id: 's5', k: 'anim', t: "Primer pregunta, després repeteix|Primero pregunta, después repite", anim: 'u7check', x: "Abans de cada volta, en Bit pregunta: hi he arribat? Si no, avança. Si sí, para.|Antes de cada vuelta, Bit pregunta: ¿he llegado? Si no, avanza. Si sí, para.",
        nota: "Remarca la paraula condició: és la pregunta del bucle. Es fa abans de cada volta, també la primera.|Remarca la palabra condición: es la pregunta del bucle. Se hace antes de cada vuelta, también la primera." },
      { id: 's6', k: 'concepte', t: "El bloc nou|El bloque nuevo", blocks: ["Repeteix fins que arribis a la bandera|Repite hasta que llegues a la bandera", "Endavant|Adelante"],
        punts: ["Els blocs de dins es repeteixen.|Los bloques de dentro se repiten.", "Para quan es compleix la condició.|Para cuando se cumple la condición.", "Tocant el bloc, pots canviar la condició.|Tocando el bloque, puedes cambiar la condición."],
        nota: "Ensenya la targeta de paper del bucle i les de les condicions: les farem servir a l'activitat del terra.|Enseña la tarjeta de papel del bucle y las de las condiciones: las usaremos en la actividad del suelo." },
      { id: 's7', k: 'demo', t: "Pensa abans d'executar|Piensa antes de ejecutar", x: "Quantes vegades preguntarà en Bit «hi he arribat?» abans de parar?|¿Cuántas veces preguntará Bit «¿he llegado?» antes de parar?",
        demo: { w: { map: ['......', '>####F', '......'] }, prog: 'until:goal{ f }' },
        nota: "Resposta: 5 vegades. Quatre vegades diu que no i avança; la cinquena diu que sí i para.|Respuesta: 5 veces. Cuatro veces dice que no y avanza; la quinta dice que sí y para." },
      { id: 's8', k: 'demo', t: "Fins que hi hagi un obstacle|Hasta que haya un obstáculo", x: "En Bit avança fins que té un obstacle davant. On para: A, B o C?|Bit avanza hasta que tiene un obstáculo delante. ¿Dónde para: A, B o C?",
        demo: { w: { map: ['..C...', '>#A#BR', '......'] }, prog: 'until:wall{ f }' },
        nota: "Que tothom assenyali amb el dit abans d'executar. Resposta: B, just abans de la roca. A la A encara té camí davant.|Que todos señalen con el dedo antes de ejecutar. Respuesta: B, justo antes de la roca. En la A aún tiene camino delante." },
      { id: 's9', k: 'anim', t: "Compte: el bucle infinit|Cuidado: el bucle infinito", anim: 'u7inf', x: "Si els blocs de dins no acosten en Bit a la condició, el bucle no s'acaba mai.|Si los bloques de dentro no acercan a Bit a la condición, el bucle no se acaba nunca.",
        nota: "Pregunta: com ho arreglaríeu? Canviant «Gira» per «Endavant». A l'app, en Bit s'atura sol si dona massa voltes.|Pregunta: ¿cómo lo arreglaríais? Cambiando «Gira» por «Adelante». En la app, Bit se para solo si da demasiadas vueltas." },
      { id: 's10', k: 'activitat', t: "El robot a la boira|El robot en la niebla", timer: 12, punts: ["Primer: «Repeteix 4 vegades» als tres camins.|Primero: «Repite 4 veces» en los tres caminos.", "Després: «Repeteix fins que arribis a la bandera».|Después: «Repite hasta que llegues a la bandera».", "Robot: abans de cada pas, pregunta «Hi he arribat?».|Robot: antes de cada paso, pregunta «¿He llegado?».", "Roteu els papers a cada missió.|Rotad los papeles en cada misión."],
        nota: "Els fulls de boira tapen el final dels camins: el programador/a no pot comptar les caselles. Així es veu per què cal el «fins que».|Las hojas de niebla tapan el final de los caminos: el programador/a no puede contar las casillas. Así se ve por qué hace falta el «hasta que»." },
      { id: 's11', k: 'concepte', t: "Les regles del robot a la boira|Las reglas del robot en la niebla", punts: ["Abans de cada pas, el robot pregunta en veu alta.|Antes de cada paso, el robot pregunta en voz alta.", "Si la resposta és no, fa els blocs de dins.|Si la respuesta es no, hace los bloques de dentro.", "Si és sí, para i passa a la targeta següent.|Si es sí, para y pasa a la tarjeta siguiente.", "El revisor/a vigila que no es salti cap pregunta.|El revisor/a vigila que no se salte ninguna pregunta."],
        nota: "Deixa aquesta diapositiva projectada mentre treballen al terra.|Deja esta diapositiva proyectada mientras trabajan en el suelo." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Repeteix fins que arribis».|Abre la sesión «Repite hasta que llegues».", "«Fins que el plat sigui buit» és per fer a casa: toca «Ara no».|«Hasta que el plato esté vacío» es para hacer en casa: toca «Ahora no».", "A «On acabarà?», pensa abans de triar.|En «¿Dónde terminará?», piensa antes de elegir.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Al bucle que no s'acaba, deixa que l'executin: en Bit s'atura sol al cap d'una estona i diu que no s'acaba mai.|En el bucle que no se acaba, deja que lo ejecuten: Bit se para solo al cabo de un rato y dice que no se acaba nunca." },
      { id: 's13', k: 'demo', t: "Programem junts: la caixa|Programemos juntos: la caja", x: "Avança fins que hi hagi una caixa, agafa-la, i avança fins al final del camí, on hi ha la casa.|Avanza hasta que haya una caja, cógela, y avanza hasta el final del camino, donde está la casa.",
        demo: { w: { map: ['.......', '>##b##H', '.......'] }, prog: 'until:box{ f } p until:wall{ f } d' },
        nota: "Demana un bloc a cada alumne/a. Fes notar que hi ha dos bucles seguits amb condicions diferents.|Pide un bloque a cada alumno/a. Haz notar que hay dos bucles seguidos con condiciones diferentes." },
      { id: 's14', k: 'repte', t: "Reptes: fins a la meta|Retos: hasta la meta", timer: 10, punts: ["1. Només 2 blocs|1. Solo 2 bloques", "2. Les tres illes de la boira|2. Las tres islas de la niebla", "3. L'estrella del final del camí|3. La estrella del final del camino", "4. El bug: en Bit es passa de la bandera|4. El bug: Bit se pasa de la bandera", "5. La caixa de l'expedició|5. La caja de la expedición"],
        nota: "Si algú s'encalla, pregunta: on ha de parar en Bit? Quina condició ho diu?|Si alguien se atasca, pregunta: ¿dónde tiene que parar Bit? ¿Qué condición lo dice?" },
      { id: 's15', k: 'activitat', t: "Crea: el camí de la boira|Crea: el camino de la niebla", timer: 5, x: "Porta en Bit al campament amb almenys dos «Repeteix fins que…». Després, el company/a diu on para cada bucle.|Lleva a Bit al campamento con al menos dos «Repite hasta que…». Después, el compañero/a dice dónde para cada bucle.",
        nota: "Hi ha diverses solucions bones. Celebra qui fa servir tres bucles.|Hay varias soluciones buenas. Celebra a quien usa tres bucles." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["«Repeteix fins que…» repeteix fins que es compleix la condició.|«Repite hasta que…» repite hasta que se cumple la condición.", "Va bé quan no sabem quantes vegades cal repetir.|Va bien cuando no sabemos cuántas veces hay que repetir.", "Si la condició no es compleix mai, el bucle és infinit.|Si la condición no se cumple nunca, el bucle es infinito."],
        nota: "Torna a la sopa del principi: ara ja sabeu programar «fins que el plat sigui buit».|Vuelve a la sopa del principio: ahora ya sabéis programar «hasta que el plato esté vacío»." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Digues una cosa que facis «fins que» passa alguna cosa.|Di algo que hagas «hasta que» pasa algo.", "Què passa si dins d'un «fins que arribis» només hi ha «Gira»?|¿Qué pasa si dentro de un «hasta que llegues» solo hay «Gira»?"],
        nota: "Resposta de la segona: en Bit dona voltes sense parar perquè no s'acosta mai a la bandera.|Respuesta de la segunda: Bit da vueltas sin parar porque nunca se acerca a la bandera." }
    ],
    print: [
      { id: 'p1', t: "Targetes del bucle «fins que»|Tarjetas del bucle «hasta que»", k: 'targetes',
        intro: "Un paquet per grup de 3. La targeta «Repeteix fins que…» va a dalt, la condició just al costat i els blocs que es repeteixen a sota, fins a la targeta «Fi del bucle».|Un paquete por grupo de 3. La tarjeta «Repite hasta que…» va arriba, la condición justo al lado y los bloques que se repiten debajo, hasta la tarjeta «Fin del bucle».",
        items: [
          { t: "Repeteix fins que… 🔁|Repite hasta que… 🔁", n: 3 },
          { t: "arribis a la bandera 🚩|llegues a la bandera 🚩", n: 2 },
          { t: "hi hagi un obstacle davant 🪨|haya un obstáculo delante 🪨", n: 2 },
          { t: "hi hagi una caixa 📦|haya una caja 📦", n: 1 },
          { t: "Fi del bucle 🔚|Fin del bucle 🔚", n: 3 },
          { t: "Repeteix 4 vegades 4️⃣|Repite 4 veces 4️⃣", n: 1 },
          { t: "Endavant ⬆|Adelante ⬆", n: 4 },
          { t: "Boira ☁️|Niebla ☁️", n: 4 }
        ] },
      { id: 'p2', t: "Quadrícula del terra: missions de la boira|Cuadrícula del suelo: misiones de la niebla", k: 'quadricula',
        intro: "Marqueu cada missió a la quadrícula del terra (o en un A3 a la taula). Tapeu el final del camí amb fulls de boira: el programa ha de funcionar sense comptar les caselles.|Marcad cada misión en la cuadrícula del suelo (o en un A3 en la mesa). Tapad el final del camino con hojas de niebla: el programa tiene que funcionar sin contar las casillas.",
        items: [
          { t: "Missió 1: la bandera a prop|Misión 1: la bandera cerca", w: 6, h: 3, cells: ['......', '>..F..', '......'],
            instructions: "En Bit mira cap a la bandera. Feu el programa amb una sola targeta d'Endavant.|Bit mira hacia la bandera. Haced el programa con una sola tarjeta de Adelante.", sol: 'until:goal{ f }' },
          { t: "Missió 2: la bandera lluny|Misión 2: la bandera lejos", w: 6, h: 3, cells: ['......', '>....F', '......'],
            instructions: "Funciona el mateix programa de la missió 1? Proveu-ho sense canviar cap targeta.|¿Funciona el mismo programa de la misión 1? Probadlo sin cambiar ninguna tarjeta.", sol: 'until:goal{ f }' },
          { t: "Missió 3: l'estrella de la roca|Misión 3: la estrella de la roca", w: 6, h: 3, cells: ['......', '>..*R.', '......'],
            instructions: "No hi ha bandera. Feu que el robot avanci fins que tingui la roca (una motxilla) davant i reculli l'estrella.|No hay bandera. Haced que el robot avance hasta que tenga la roca (una mochila) delante y recoja la estrella.", sol: 'until:wall{ f }' },
          { t: "Missió 4: la caixa de l'expedició|Misión 4: la caja de la expedición", w: 6, h: 3, cells: ['......', '>.b..H', '......'],
            instructions: "Dos bucles: fins que hi hagi una caixa, agafa-la; fins que hi hagi un obstacle (la vora), deixa-la a la casa.|Dos bucles: hasta que haya una caja, cógela; hasta que haya un obstáculo (el borde), déjala en la casa.", sol: 'until:box{ f } p until:wall{ f } d' }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Camins de llargada desconeguda ---------- */
  'r7-2': {
    obj: [
      "L'alumne/a escriu un sol programa que funciona en camins de llargades diferents (illes alternatives).|El alumno/a escribe un solo programa que funciona en caminos de longitudes diferentes (islas alternativas).",
      "L'alumne/a tria entre «Repeteix N vegades» i «Repeteix fins que…» segons si coneix el número de repeticions.|El alumno/a elige entre «Repite N veces» y «Repite hasta que…» según si conoce el número de repeticiones.",
      "L'alumne/a segueix camins amb revolts posant un bucle per a cada tros recte i el gir entre els bucles.|El alumno/a sigue caminos con curvas poniendo un bucle para cada trozo recto y el giro entre los bucles.",
      "L'alumne/a troba i arregla el bug del gir col·locat dins del bucle.|El alumno/a encuentra y arregla el bug del giro colocado dentro del bucle."
    ],
    comp: [
      "Competència digital (CD5): crear programes generals que serveixen per a casos diferents|Competencia digital (CD5): crear programas generales que sirven para casos diferentes",
      "Pensament computacional: generalització, combinació de bucles i depuració|Pensamiento computacional: generalización, combinación de bucles y depuración",
      "Matemàtiques: mesura i comparació de llargades; saber quan un número és conegut o desconegut|Matemáticas: medida y comparación de longitudes; saber cuándo un número es conocido o desconocido",
      "Comunicació oral: justificar per què un programa funciona en tots els casos|Comunicación oral: justificar por qué un programa funciona en todos los casos"
    ],
    vocab: [
      ["Llargada desconeguda|Longitud desconocida", "Quan no sabem quantes caselles fa un camí abans de començar.|Cuando no sabemos cuántas casillas mide un camino antes de empezar."],
      ["Illes alternatives|Islas alternativas", "Mapes diferents on s'ha de provar el mateix programa.|Mapas diferentes en los que se tiene que probar el mismo programa."],
      ["Tram|Tramo", "Un tros recte del camí, entre dos revolts.|Un trozo recto del camino, entre dos curvas."],
      ["Revolt|Curva", "El lloc on el camí canvia de direcció i en Bit ha de girar.|El sitio donde el camino cambia de dirección y Bit tiene que girar."],
      ["Programa general|Programa general", "Un programa que funciona en molts casos, no només en un.|Un programa que funciona en muchos casos, no solo en uno."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Camins de llargada desconeguda»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Caminos de longitud desconocida»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra de 5 × 5, una bandera de paper i tres motxilles que facin de roca|La cuadrícula del suelo de 5 × 5, una bandera de papel y tres mochilas que hagan de roca",
        "Les targetes del bucle «fins que» de la sessió anterior i les targetes de gir|Las tarjetas del bucle «hasta que» de la sesión anterior y las tarjetas de giro"
      ],
      imprimir: ["Quadrícula del terra: camins de marea|Cuadrícula del suelo: caminos de marea", "Fitxa: N vegades o fins que?|Ficha: ¿N veces o hasta que?"],
      prep: [
        "Tenir la quadrícula marcada i les motxilles a punt per muntar les tres missions en forma de L.|Tener la cuadrícula marcada y las mochilas a punto para montar las tres misiones en forma de L.",
        "Imprimir una fitxa per parella i les missions de la quadrícula per al grup.|Imprimir una ficha por pareja y las misiones de la cuadrícula para el grupo.",
        "Provar la demostració de la diapositiva 10 per saber on acaba en Bit.|Probar la demostración de la diapositiva 10 para saber dónde termina Bit.",
        "Preparar a la pissarra dues columnes: «Sé el número» i «No sé el número».|Preparar en la pizarra dos columnas: «Sé el número» y «No sé el número»."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i les marees|Recordamos y las mareas", fase: 'inici',
        fa: "Fes la pregunta de repàs de l'obstacle. Explica la missió: la barca porta l'equip de l'expedició i la marea fa que els camins del moll canviïn de llargada cada dia. Pregunta com podem fer un programa que serveixi per a tots els dies.|Haz la pregunta de repaso del obstáculo. Explica la misión: la barca trae el equipo de la expedición y la marea hace que los caminos del muelle cambien de longitud cada día. Pregunta cómo podemos hacer un programa que sirva para todos los días.",
        diu: ["Amb «fins que hi hagi un obstacle», on para en Bit?|Con «hasta que haya un obstáculo», ¿dónde para Bit?",
          "Si avui el camí fa 3 caselles i demà en fa 6, quin programa faríeu?|Si hoy el camino mide 3 casillas y mañana mide 6, ¿qué programa haríais?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Un programa per a totes les illes|Un programa para todas las islas", fase: 'teoria',
        fa: "Mostra l'animació de les tres illes i explica que a l'app hi haurà pestanyes per provar el programa a cada illa. Amb la segona animació, classifiqueu exemples a la pissarra en «Sé el número» i «No sé el número». Després, demostra el camí en L i, abans d'executar, que diguin on para cada bucle. Acaba amb l'error del gir dins del bucle i la predicció de la diapositiva 10.|Muestra la animación de las tres islas y explica que en la app habrá pestañas para probar el programa en cada isla. Con la segunda animación, clasificad ejemplos en la pizarra en «Sé el número» y «No sé el número». Después, demuestra el camino en L y, antes de ejecutar, que digan dónde para cada bucle. Acaba con el error del giro dentro del bucle y la predicción de la diapositiva 10.",
        diu: ["Pujar 5 graons: sabem el número? I omplir el got fins dalt?|Subir 5 peldaños: ¿sabemos el número? ¿Y llenar el vaso hasta arriba?",
          "On para el primer bucle? I què fa en Bit just després?|¿Dónde para el primer bucle? ¿Y qué hace Bit justo después?",
          "Si el gir és dins del bucle, quantes vegades gira en Bit?|Si el giro está dentro del bucle, ¿cuántas veces gira Bit?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9', 's10'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Camins de marea al terra|Caminos de marea en el suelo", fase: 'desconnectat',
        fa: "En grups de 3, escriuen amb targetes UN sol programa per a la missió 1 de la quadrícula. Després tu canvies les motxilles i la bandera de lloc (missions 2 i 3) i el robot executa el mateix programa sense canviar cap targeta. Si falla, el grup busca on és el bug. Mentre un grup és al terra, els altres fan la fitxa per parelles.|En grupos de 3, escriben con tarjetas UN solo programa para la misión 1 de la cuadrícula. Después tú cambias las mochilas y la bandera de sitio (misiones 2 y 3) y el robot ejecuta el mismo programa sin cambiar ninguna tarjeta. Si falla, el grupo busca dónde está el bug. Mientras un grupo está en el suelo, los demás hacen la ficha por parejas.",
        diu: ["Ara he mogut la bandera. Cal canviar alguna targeta?|Ahora he movido la bandera. ¿Hay que cambiar alguna tarjeta?",
          "On és el gir: dins o fora del bucle?|¿Dónde está el giro: dentro o fuera del bucle?",
          "A la missió 3, quantes passes fa el primer bucle?|En la misión 3, ¿cuántos pasos hace el primer bucle?"],
        slides: ['s11', 's12'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 al terra i parelles amb la fitxa|Grupos de 3 en el suelo y parejas con la ficha" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a la pausa activa. L'activitat de les passes de gegant és per a casa. Passeja i, al problema d'ordenar blocs i a l'«On acabarà?», demana que diguin on para cada bucle abans de comprovar-ho.|Cada alumno/a hace la sesión hasta la pausa activa. La actividad de los pasos de gigante es para casa. Pasea y, en el problema de ordenar bloques y en el «¿Dónde terminará?», pide que digan dónde para cada bucle antes de comprobarlo.",
        diu: ["Digues-me amb paraules el programa: fins on, gir, fins on.|Dime con palabras el programa: hasta dónde, giro, hasta dónde.",
          "Per què el primer bucle no para a la A? O sí que hi para?|¿Por qué el primer bucle no para en la A? ¿O sí que para?"],
        slides: ['s13'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, les històries del moll, les targetes de «Descobreix», les escales i la xocolata, «Passes de gegant» (per a casa), ordenar els blocs del revolt, «On acabarà?» i el gir en mal lloc.|De «Recuerda» hasta «Investiga»: las preguntas de repaso, las historias del muelle, las tarjetas de «Descubre», las escaleras y el chocolate, «Pasos de gigante» (para casa), ordenar los bloques de la curva, «¿Dónde terminará?» y el giro en mal lugar.", org: "Individual|Individual" },
      { min: 10, t: "Reptes amb marea|Retos con marea", fase: 'ordinador',
        fa: "Pausa activa tots junts. Després, els cinc reptes. Al del primer tram fix, deixa que descobreixin que el «fins que hi hagi un obstacle» no serveix perquè el camí de dalt continua. Al dels 6 blocs, si s'encallen, pregunta quin tros es repeteix.|Pausa activa todos juntos. Después, los cinco retos. En el del primer tramo fijo, deja que descubran que el «hasta que haya un obstáculo» no sirve porque el camino de arriba continúa. En el de los 6 bloques, si se atascan, pregunta qué trozo se repite.",
        diu: ["Aquest tram canvia d'una illa a l'altra o és sempre igual?|¿Este tramo cambia de una isla a otra o es siempre igual?",
          "Quin tros fa en Bit dues vegades? Es pot posar dins d'un «Repeteix 2 vegades»?|¿Qué trozo hace Bit dos veces? ¿Se puede poner dentro de un «Repite 2 veces»?",
          "Un graó de l'escala: quins blocs té?|Un peldaño de la escalera: ¿qué bloques tiene?"],
        slides: ['s14', 's15'], app: "«Pausa activa» i els cinc reptes: el revolt, el primer tram fix, els dos revolts amb 6 blocs, el gir en mal lloc i l'escala del penya-segat.|«Pausa activa» y los cinco retos: la curva, el primer tramo fijo, las dos curvas con 6 bloques, el giro en mal lugar y la escalera del acantilado.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el viatge de la marea|Crea: el viaje de la marea", fase: 'crea',
        fa: "Cada alumne/a fa un programa que funcioni a les dues illes del camp obert. Hi ha més d'un camí possible: que en triïn un i comprovin les dues pestanyes.|Cada alumno/a hace un programa que funcione en las dos islas del campo abierto. Hay más de un camino posible: que elijan uno y comprueben las dos pestañas.",
        diu: ["La bandera no és al mateix lloc: per on pots anar perquè el programa serveixi a les dues?|La bandera no está en el mismo sitio: ¿por dónde puedes ir para que el programa sirva en las dos?",
          "Has provat l'illa 2? Mira si té el ✓.|¿Has probado la isla 2? Mira si tiene el ✓."],
        slides: ['s16'], app: "Pas «Crea»: El viatge de la marea.|Paso «Crea»: El viaje de la marea.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals i fes el tiquet de sortida.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales y haz el ticket de salida.",
        diu: ["Quan faríeu servir «Repeteix 3 vegades» i quan «Repeteix fins que…»?|¿Cuándo usaríais «Repite 3 veces» y cuándo «Repite hasta que…»?",
          "On va el gir en un camí en L?|¿Dónde va el giro en un camino en L?"],
        slides: ['s17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el gir dins del bucle, al costat de l'Endavant.|Pone el giro dentro del bucle, al lado del Adelante.",
        "Que executi «Pas a pas» i compti quantes vegades gira en Bit. Pregunta: quantes vegades hauria de girar en aquest revolt?|Que ejecute «Paso a paso» y cuente cuántas veces gira Bit. Pregunta: ¿cuántas veces tendría que girar en esta curva?"],
      ["Fa el programa per a la illa 1 amb números i no mira les altres pestanyes.|Hace el programa para la isla 1 con números y no mira las otras pestañas.",
        "Que toqui la pestanya de la illa 2 i hi executi el mateix programa. Què ha canviat del camí? Quina part del programa depèn d'aquest número?|Que toque la pestaña de la isla 2 y ejecute allí el mismo programa. ¿Qué ha cambiado del camino? ¿Qué parte del programa depende de ese número?"],
      ["Fa servir «fins que hi hagi un obstacle» en un tram on el camí continua i en Bit es passa del revolt.|Usa «hasta que haya un obstáculo» en un tramo donde el camino continúa y Bit se pasa de la curva.",
        "Pregunta: en aquest revolt, en Bit té un obstacle davant? Si el tram sempre fa el mateix, quin bucle va millor?|Pregunta: en esta curva, ¿Bit tiene un obstáculo delante? Si el tramo siempre mide lo mismo, ¿qué bucle va mejor?"],
      ["S'equivoca de gir després del bucle quan en Bit mira avall o a l'esquerra.|Se equivoca de giro después del bucle cuando Bit mira abajo o a la izquierda.",
        "Com a la unitat 1: que es posi al lloc d'en Bit. Cap on mira quan s'acaba el bucle? Cap on ha d'anar?|Como en la unidad 1: que se ponga en el lugar de Bit. ¿Hacia dónde mira cuando se acaba el bucle? ¿Hacia dónde tiene que ir?"],
      ["A l'escala, posa un bucle per a cada graó en lloc de repetir el graó sencer.|En la escalera, pone un bucle para cada peldaño en lugar de repetir el peldaño entero.",
        "Pregunta: quins blocs fa en Bit per pujar un sol graó? Si tots els graons són iguals, què es repeteix?|Pregunta: ¿qué bloques hace Bit para subir un solo peldaño? Si todos los peldaños son iguales, ¿qué se repite?"]
    ],
    diff: {
      mes: "Fer el repte dels dos revolts amb menys de 6 blocs si és possible i explicar-ho. Dibuixar a la fitxa una illa nova amb tres revolts i escriure un programa que també funcioni si els trams fossin més llargs.|Hacer el reto de las dos curvas con menos de 6 bloques si es posible y explicarlo. Dibujar en la ficha una isla nueva con tres curvas y escribir un programa que también funcione si los tramos fueran más largos.",
      menys: "Treballar primer amb una sola illa i, quan funcioni, passar a la pestanya següent. Fer servir les targetes de paper damunt la taula per decidir on va el gir abans de posar els blocs.|Trabajar primero con una sola isla y, cuando funcione, pasar a la pestaña siguiente. Usar las tarjetas de papel sobre la mesa para decidir dónde va el giro antes de poner los bloques."
    },
    aval: {
      ticket: ["Posa un exemple de «Repeteix N vegades» i un de «Repeteix fins que…».|Pon un ejemplo de «Repite N veces» y uno de «Repite hasta que…».",
        "En un camí en L, el gir va dins o fora del bucle? Per què?|En un camino en L, ¿el giro va dentro o fuera del bucle? ¿Por qué?"],
      rubric: [
        ["Programa general|Programa general", "Fa programes que funcionen a totes les illes i comprova cada pestanya.|Hace programas que funcionan en todas las islas y comprueba cada pestaña.", "Fa programes que funcionen a una illa i necessita ajuda per generalitzar-los.|Hace programas que funcionan en una isla y necesita ayuda para generalizarlos."],
        ["Triar el bucle|Elegir el bucle", "Justifica quan fa servir un número i quan un «fins que».|Justifica cuándo usa un número y cuándo un «hasta que».", "Fa servir sempre el mateix tipus de bucle.|Usa siempre el mismo tipo de bucle."],
        ["Camins amb revolts|Caminos con curvas", "Posa un bucle per tram i el gir a fora, i troba el bug del gir a dins.|Pone un bucle por tramo y el giro fuera, y encuentra el bug del giro dentro.", "Segueix camins amb un revolt, però amb dos revolts es perd.|Sigue caminos con una curva, pero con dos curvas se pierde."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla pot repetir la sessió i fer amb vosaltres «Passes de gegant, passes de formiga»: el mateix programa per anar del sofà a la porta, amb passes de mides diferents.|En casa, con el móvil, vuestro hijo o hija puede repetir la sesión y hacer con vosotros «Pasos de gigante, pasos de hormiga»: el mismo programa para ir del sofá a la puerta, con pasos de tamaños diferentes.",
    slides: [
      { id: 's1', k: 'portada', t: "Camins de llargada desconeguda|Caminos de longitud desconocida", x: "Avui farem programes que funcionen encara que el camí canviï.|Hoy haremos programas que funcionan aunque el camino cambie.",
        nota: "Situa la història: el moll, la barca de l'expedició i la marea que canvia els camins.|Sitúa la historia: el muelle, la barca de la expedición y la marea que cambia los caminos." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Amb «Repeteix fins que hi hagi un obstacle davant: Endavant», on para en Bit?|Con «Repite hasta que haya un obstáculo delante: Adelante», ¿dónde para Bit?",
        nota: "Resposta: just abans de l'obstacle. La pregunta es fa abans de cada pas.|Respuesta: justo antes del obstáculo. La pregunta se hace antes de cada paso." },
      { id: 's3', k: 'pregunta', t: "Un programa per a cada dia?|¿Un programa para cada día?", x: "Avui el camí fa 3 caselles, demà en farà 6 i demà passat 4. Cal fer tres programes?|Hoy el camino mide 3 casillas, mañana medirá 6 y pasado mañana 4. ¿Hay que hacer tres programas?",
        nota: "Deixa que ho discuteixin. Recull la idea: amb un «fins que» n'hi ha prou amb un.|Deja que lo discutan. Recoge la idea: con un «hasta que» basta con uno." },
      { id: 's4', k: 'anim', t: "Un programa, tres illes|Un programa, tres islas", anim: 'u7tide', x: "El mateix programa arriba a la bandera a les tres illes.|El mismo programa llega a la bandera en las tres islas.",
        nota: "Explica les pestanyes «Illa 1 · Illa 2 · Illa 3» de l'app: el programa s'ha de provar a totes.|Explica las pestañas «Isla 1 · Isla 2 · Isla 3» de la app: el programa se tiene que probar en todas." },
      { id: 's5', k: 'anim', t: "N vegades o fins que?|¿N veces o hasta que?", anim: 'u7vs', x: "Si saps el número, «Repeteix N vegades». Si no el saps, «Repeteix fins que…».|Si sabes el número, «Repite N veces». Si no lo sabes, «Repite hasta que…».",
        nota: "Escriu les dues columnes a la pissarra: «Sé el número» i «No sé el número».|Escribe las dos columnas en la pizarra: «Sé el número» y «No sé el número»." },
      { id: 's6', k: 'pregunta', t: "Sé el número o no?|¿Sé el número o no?", punts: ["Pujar les 12 escales de casa|Subir las 12 escaleras de casa", "Remenar la xocolata fins que no hi ha grumolls|Remover el chocolate hasta que no hay grumos", "Picar de mans 3 vegades|Dar 3 palmadas", "Caminar fins que trobes la porta|Caminar hasta que encuentres la puerta"],
        nota: "Respostes: N, fins que, N, fins que. Demana un exemple nou per a cada columna.|Respuestas: N, hasta que, N, hasta que. Pide un ejemplo nuevo para cada columna." },
      { id: 's7', k: 'demo', t: "Un camí amb revolt|Un camino con curva", x: "Fins que hi hagi un obstacle, gira, i fins que arribis a la bandera.|Hasta que haya un obstáculo, gira, y hasta que llegues a la bandera.",
        demo: { w: { map: ['>###.', '...#.', '...#.', '...F.'] }, prog: 'until:wall{ f } r until:goal{ f }' },
        nota: "Abans d'executar, que diguin on para el primer bucle. Fes notar que el gir és entre els dos bucles.|Antes de ejecutar, que digan dónde para el primer bucle. Haz notar que el giro está entre los dos bucles." },
      { id: 's8', k: 'concepte', t: "Un bucle per a cada tram|Un bucle para cada tramo", blocks: ["Repeteix fins que hi hagi un obstacle|Repite hasta que haya un obstáculo", "Gira a la dreta|Gira a la derecha", "Repeteix fins que arribis|Repite hasta que llegues"],
        punts: ["Cada tros recte és un bucle.|Cada trozo recto es un bucle.", "El gir va entre els bucles, a fora.|El giro va entre los bucles, fuera.", "Si els trams canvien, el programa és el mateix.|Si los tramos cambian, el programa es el mismo."],
        nota: "Dibuixa a la pissarra una L i marca amb colors cada tram i el revolt.|Dibuja en la pizarra una L y marca con colores cada tramo y la curva." },
      { id: 's9', k: 'anim', t: "Compte: el gir va fora|Cuidado: el giro va fuera", anim: 'u7inside', x: "Si el gir és dins del bucle, en Bit gira a cada pas i es perd.|Si el giro está dentro del bucle, Bit gira en cada paso y se pierde.",
        nota: "Fes-ho amb el cos: un pas i gir, un pas i gir… On acabes? Ara: passos fins a la paret i, al final, un gir.|Hazlo con el cuerpo: un paso y giro, un paso y giro… ¿Dónde acabas? Ahora: pasos hasta la pared y, al final, un giro." },
      { id: 's10', k: 'demo', t: "On acabarà?|¿Dónde terminará?", x: "Dos bucles i un gir. On acaba en Bit: A, B o C?|Dos bucles y un giro. ¿Dónde termina Bit: A, B o C?",
        demo: { w: { map: ['>##A.', '.C.#.', '...B.', '.....'] }, prog: 'until:wall{ f } r until:wall{ f }' },
        nota: "Resposta: B. El primer bucle para a la A (davant de l'arbre) i el segon baixa fins a la B.|Respuesta: B. El primer bucle para en la A (delante del árbol) y el segundo baja hasta la B." },
      { id: 's11', k: 'activitat', t: "Camins de marea|Caminos de marea", timer: 12, punts: ["Un sol programa amb targetes per a la missió 1.|Un solo programa con tarjetas para la misión 1.", "El professor/a mou la bandera i les roques.|El profesor/a mueve la bandera y las rocas.", "El robot fa el mateix programa sense canviar res.|El robot hace el mismo programa sin cambiar nada.", "Si falla, busqueu el bug.|Si falla, buscad el bug."],
        nota: "A la missió 3 el primer bucle no fa cap pas: té la roca just davant. És un bon moment per comentar-ho.|En la misión 3 el primer bucle no da ningún paso: tiene la roca justo delante. Es un buen momento para comentarlo." },
      { id: 's12', k: 'concepte', t: "Fitxa: N vegades o fins que?|Ficha: ¿N veces o hasta que?", punts: ["Classifica les situacions.|Clasifica las situaciones.", "Prediu on acaba en Bit.|Predice dónde termina Bit.", "Escriu un programa per a un camí en L.|Escribe un programa para un camino en L.", "Troba el bug del gir.|Encuentra el bug del giro."],
        nota: "Les parelles que no són al terra fan la fitxa i després canvien.|Las parejas que no están en el suelo hacen la ficha y después cambian." },
      { id: 's13', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Camins de llargada desconeguda».|Abre la sesión «Caminos de longitud desconocida».", "«Passes de gegant» és per fer a casa.|«Pasos de gigante» es para hacer en casa.", "Abans de comprovar, digues on para cada bucle.|Antes de comprobar, di dónde para cada bucle.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Fixa't en qui posa el gir dins del bucle al problema d'ordenar blocs.|Fíjate en quién pone el giro dentro del bucle en el problema de ordenar bloques." },
      { id: 's14', k: 'repte', t: "Reptes amb marea|Retos con marea", timer: 10, punts: ["1. El revolt a tres illes|1. La curva en tres islas", "2. El primer tram sempre fa 2|2. El primer tramo siempre mide 2", "3. Dos revolts, 6 blocs com a màxim|3. Dos curvas, 6 bloques como máximo", "4. El gir en mal lloc|4. El giro en mal lugar", "5. L'escala del penya-segat|5. La escalera del acantilado"],
        nota: "Al repte 2, el «fins que hi hagi un obstacle» fa que en Bit es passi del revolt: aquí va millor un número.|En el reto 2, el «hasta que haya un obstáculo» hace que Bit se pase de la curva: aquí va mejor un número." },
      { id: 's15', k: 'demo', t: "Pista: l'escala|Pista: la escalera", x: "Un graó és Endavant, Gira a l'esquerra, Endavant, Gira a la dreta. Fins quan es repeteix?|Un peldaño es Adelante, Gira a la izquierda, Adelante, Gira a la derecha. ¿Hasta cuándo se repite?",
        demo: { w: { map: ['.....', '.....', '..F..', '.##..', '>#...'] }, prog: 'until:goal{ f l f r }' },
        nota: "Projecta-la només si molts alumnes s'encallen a l'escala: és l'escala més curta del repte.|Proyéctala solo si muchos alumnos se atascan en la escalera: es la escalera más corta del reto." },
      { id: 's16', k: 'activitat', t: "Crea: el viatge de la marea|Crea: el viaje de la marea", timer: 5, x: "Un camp obert i dues illes amb la bandera a llocs diferents. Tria un camí que serveixi a totes dues.|Un campo abierto y dos islas con la bandera en sitios diferentes. Elige un camino que sirva en las dos.",
        nota: "Pista per a qui s'encalli: quina vora del mapa porta a les dues banderes?|Pista para quien se atasque: ¿qué borde del mapa lleva a las dos banderas?" },
      { id: 's17', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un «fins que» serveix per a camins de qualsevol llargada.|Un «hasta que» sirve para caminos de cualquier longitud.", "Si saps el número, «Repeteix N vegades»; si no, «fins que».|Si sabes el número, «Repite N veces»; si no, «hasta que».", "Un bucle per tram i el gir a fora.|Un bucle por tramo y el giro fuera."],
        nota: "Tiquet de sortida a la porta: un exemple de cada bucle i on va el gir en un camí en L.|Ticket de salida en la puerta: un ejemplo de cada bucle y dónde va el giro en un camino en L." }
    ],
    print: [
      { id: 'p1', t: "Quadrícula del terra: camins de marea|Cuadrícula del suelo: caminos de marea", k: 'quadricula',
        intro: "Quadrícula de 5 × 5. Les roques són motxilles. El mateix programa ha de funcionar a les tres missions sense canviar cap targeta.|Cuadrícula de 5 × 5. Las rocas son mochilas. El mismo programa tiene que funcionar en las tres misiones sin cambiar ninguna tarjeta.",
        items: [
          { t: "Missió 1: marea alta|Misión 1: marea alta", w: 5, h: 5, cells: ['>..R.', '.....', '.....', '..F..', '.....'],
            instructions: "Escriviu el programa: fins que hi hagi un obstacle, gira, i fins que arribis a la bandera.|Escribid el programa: hasta que haya un obstáculo, gira, y hasta que llegues a la bandera.", sol: 'until:wall{ f } r until:goal{ f }' },
          { t: "Missió 2: marea baixa|Misión 2: marea baja", w: 5, h: 5, cells: ['>...R', '.....', '...F.', '.....', '.....'],
            instructions: "El professor/a mou la roca i la bandera. Proveu el mateix programa.|El profesor/a mueve la roca y la bandera. Probad el mismo programa.", sol: 'until:wall{ f } r until:goal{ f }' },
          { t: "Missió 3: la roca just davant|Misión 3: la roca justo delante", w: 5, h: 5, cells: ['>R...', '.....', '.....', '.....', 'F....'],
            instructions: "Quantes passes fa el primer bucle? Funciona igualment?|¿Cuántos pasos da el primer bucle? ¿Funciona igualmente?", sol: 'until:wall{ f } r until:goal{ f }' }
        ] },
      { id: 'p2', t: "Fitxa: N vegades o fins que?|Ficha: ¿N veces o hasta que?", k: 'fitxa',
        intro: "Per parelles. Penseu-ho amb paraules abans d'escriure els blocs.|Por parejas. Pensadlo con palabras antes de escribir los bloques.",
        items: [
          { q: "Escriu N (Repeteix N vegades) o F (Repeteix fins que…): a) pujar els 10 graons de l'escala; b) omplir la banyera fins que sigui plena; c) picar de mans 3 vegades; d) caminar fins al semàfor.|Escribe N (Repite N veces) o H (Repite hasta que…): a) subir los 10 peldaños de la escalera; b) llenar la bañera hasta que esté llena; c) dar 3 palmadas; d) caminar hasta el semáforo.",
            sol: "a) N · b) F · c) N · d) F.|a) N · b) H · c) N · d) H." },
          { q: "On acabarà en Bit amb «Repeteix fins que hi hagi un obstacle: Endavant», «Gira a la dreta» i «Repeteix fins que hi hagi un obstacle: Endavant»? Encercla A, B o C.|¿Dónde terminará Bit con «Repite hasta que haya un obstáculo: Adelante», «Gira a la derecha» y «Repite hasta que haya un obstáculo: Adelante»? Rodea A, B o C.",
            w: { map: ['>##A.', '.C.#.', '...B.', '.....'] }, prog: 'until:wall{ f } r until:wall{ f }', a: 'B',
            sol: "B: el primer bucle para a la A, gira i el segon baixa fins a la B.|B: el primer bucle para en la A, gira y el segundo baja hasta la B." },
          { q: "Escriu un programa per a aquest camí que també serviria si els trams fossin més llargs.|Escribe un programa para este camino que también serviría si los tramos fueran más largos.",
            w: { map: ['>###.', '...#.', '...#.', '...F.'] }, solProg: 'until:wall{ f } r until:goal{ f }',
            sol: "Repeteix fins que hi hagi un obstacle: Endavant · Gira a la dreta · Repeteix fins que arribis: Endavant.|Repite hasta que haya un obstáculo: Adelante · Gira a la derecha · Repite hasta que llegues: Adelante." },
          { q: "Troba el bug: «Repeteix fins que hi hagi un obstacle: Endavant i Gira a la dreta» i després «Repeteix fins que arribis: Endavant». Què passa i com s'arregla?|Encuentra el bug: «Repite hasta que haya un obstáculo: Adelante y Gira a la derecha» y después «Repite hasta que llegues: Adelante». ¿Qué pasa y cómo se arregla?",
            sol: "El gir és dins del primer bucle i en Bit gira després de cada pas. Cal treure'l del bucle i posar-lo entre els dos bucles.|El giro está dentro del primer bucle y Bit gira después de cada paso. Hay que sacarlo del bucle y ponerlo entre los dos bucles." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Combinem-ho tot ---------- */
  'r7-3': {
    obj: [
      "L'alumne/a posa un «Si… si no…» dins d'un «Repeteix fins que…» perquè en Bit segueixi camins que giren.|El alumno/a pone un «Si… si no…» dentro de un «Repite hasta que…» para que Bit siga caminos que giran.",
      "L'alumne/a combina el bucle amb condició amb funcions, llums i comptadors.|El alumno/a combina el bucle con condición con funciones, luces y contadores.",
      "L'alumne/a llegeix un programa llarg bloc a bloc i prediu on acabarà en Bit.|El alumno/a lee un programa largo bloque a bloque y predice dónde terminará Bit.",
      "L'alumne/a depura un programa llarg fent-lo pas a pas i canviant només el bloc que falla.|El alumno/a depura un programa largo haciéndolo paso a paso y cambiando solo el bloque que falla."
    ],
    comp: [
      "Competència digital (CD5): crear programes que prenen decisions a partir de sensors|Competencia digital (CD5): crear programas que toman decisiones a partir de sensores",
      "Pensament computacional: estructures niades (condicions dins de bucles), lectura i depuració de programes|Pensamiento computacional: estructuras anidadas (condiciones dentro de bucles), lectura y depuración de programas",
      "Matemàtiques: orientació en la quadrícula i recompte amb un comptador|Matemáticas: orientación en la cuadrícula y recuento con un contador",
      "Aprendre a aprendre: predir, comprovar i corregir|Aprender a aprender: predecir, comprobar y corregir"
    ],
    vocab: [
      ["Decidir|Decidir", "Triar què fer segons el que diu un sensor: si hi ha obstacle, gira; si no, avança.|Elegir qué hacer según lo que dice un sensor: si hay obstáculo, gira; si no, avanza."],
      ["Niar|Anidar", "Posar un bloc dins d'un altre, com un «si» dins d'un bucle.|Poner un bloque dentro de otro, como un «si» dentro de un bucle."],
      ["Sensor del costat|Sensor del lado", "Les condicions «hi ha camí a l'esquerra» i «hi ha camí a la dreta».|Las condiciones «hay camino a la izquierda» y «hay camino a la derecha»."],
      ["Predir|Predecir", "Dir què farà un programa abans d'executar-lo.|Decir qué hará un programa antes de ejecutarlo."],
      ["Depurar|Depurar", "Buscar i arreglar l'error d'un programa.|Buscar y arreglar el error de un programa."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Combinem-ho tot»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Combinémoslo todo»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra, una bandera de paper i cinc o sis motxilles que facin de roca|La cuadrícula del suelo, una bandera de papel y cinco o seis mochilas que hagan de roca",
        "Les targetes «fins que» de la sessió 1 i les targetes «Si» de la unitat 4|Las tarjetas «hasta que» de la sesión 1 y las tarjetas «Si» de la unidad 4"
      ],
      imprimir: ["Quadrícula del terra: el robot que decideix|Cuadrícula del suelo: el robot que decide", "Fitxa: llegeix, prediu i depura|Ficha: lee, predice y depura"],
      prep: [
        "Escriure a la pissarra el programa del robot que decideix: «Fins que arribis: si hi ha obstacle, gira a la dreta; si no, endavant».|Escribir en la pizarra el programa del robot que decide: «Hasta que llegues: si hay obstáculo, gira a la derecha; si no, adelante».",
        "Tenir les motxilles a punt per muntar ràpidament les tres missions de la quadrícula.|Tener las mochilas a punto para montar rápidamente las tres misiones de la cuadrícula.",
        "Imprimir una fitxa per alumne/a (es pot acabar a casa).|Imprimir una ficha por alumno/a (se puede terminar en casa).",
        "Provar les demostracions de les diapositives 6, 7 i 8.|Probar las demostraciones de las diapositivas 6, 7 y 8."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i l'equip de la cova|Recordamos y el equipo de la cueva", fase: 'inici',
        fa: "Fes les preguntes de repàs: on va el gir en un camí en L i què fa el «Si… si no…». Explica la missió: dins de la cova els passadissos giren a cada moment i no hi ha mapa, així que en Bit haurà de decidir a cada pas.|Haz las preguntas de repaso: dónde va el giro en un camino en L y qué hace el «Si… si no…». Explica la misión: dentro de la cueva los pasillos giran a cada momento y no hay mapa, así que Bit tendrá que decidir en cada paso.",
        diu: ["En un camí en L, el gir va dins o fora del bucle?|En un camino en L, ¿el giro va dentro o fuera del bucle?",
          "I si el camí tingués deu revolts i no sabéssim on són?|¿Y si el camino tuviera diez curvas y no supiéramos dónde están?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Decidir a cada pas|Decidir en cada paso", fase: 'teoria',
        fa: "Explica amb l'animació que un «si» dins d'un «fins que» fa que en Bit decideixi a cada volta. A les demostracions, para després de cada revolt i pregunta quin bloc s'ha il·luminat i per què. Presenta els sensors dels costats i el bucle amb funció. Acaba amb la lectura en veu alta d'un programa llarg: la classe prediu i després comproveu-ho.|Explica con la animación que un «si» dentro de un «hasta que» hace que Bit decida en cada vuelta. En las demostraciones, para después de cada curva y pregunta qué bloque se ha iluminado y por qué. Presenta los sensores de los lados y el bucle con función. Acaba con la lectura en voz alta de un programa largo: la clase predice y después lo comprobáis.",
        diu: ["Ara en Bit té un arbre davant: quina part del «si» farà?|Ahora Bit tiene un árbol delante: ¿qué parte del «si» hará?",
          "Aquest programa té 4 blocs. Serviria per a un camí el doble de llarg?|Este programa tiene 4 bloques. ¿Serviría para un camino el doble de largo?",
          "Llegim-lo amb el dit: què fa la primera volta? I la segona?|Leámoslo con el dedo: ¿qué hace la primera vuelta? ¿Y la segunda?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El robot que decideix|El robot que decide", fase: 'desconnectat',
        fa: "En grups de 3, munteu una missió de la quadrícula amb motxilles. El robot segueix el programa de la pissarra i diu en veu alta cada decisió («obstacle: giro», «lliure: avanço»). El revisor/a comprova que no se salti cap pregunta. Després, el programador/a mou una o dues motxilles i comproven si el mateix programa encara funciona. Roteu els papers a cada missió.|En grupos de 3, montad una misión de la cuadrícula con mochilas. El robot sigue el programa de la pizarra y dice en voz alta cada decisión («obstáculo: giro», «libre: avanzo»). El revisor/a comprueba que no se salte ninguna pregunta. Después, el programador/a mueve una o dos mochilas y comprueban si el mismo programa todavía funciona. Rotad los papeles en cada misión.",
        diu: ["Robot: digues cada decisió en veu alta abans de moure't.|Robot: di cada decisión en voz alta antes de moverte.",
          "Heu mogut una roca i el robot no arriba: per què? Què faríeu?|Habéis movido una roca y el robot no llega: ¿por qué? ¿Qué haríais?",
          "Aquest programa funcionaria en un camí que gira a l'esquerra?|¿Este programa funcionaría en un camino que gira a la izquierda?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a la pausa activa. «El robot que decideix» és per fer a casa. A l'«On acabarà?», demana que llegeixin el programa amb el dit abans de triar. Al bloc equivocat, que expliquin cap on giren els revolts.|Cada alumno/a hace la sesión hasta la pausa activa. «El robot que decide» es para hacer en casa. En el «¿Dónde terminará?», pide que lean el programa con el dedo antes de elegir. En el bloque equivocado, que expliquen hacia dónde giran las curvas.",
        diu: ["Llegeix-lo amb el dit: on para el primer bucle de dins?|Léelo con el dedo: ¿dónde para el primer bucle de dentro?",
          "Cap on giren els revolts d'aquest camí? I el programa, cap on gira?|¿Hacia dónde giran las curvas de este camino? ¿Y el programa, hacia dónde gira?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, les històries del taller, les targetes de «Descobreix», ordenar què fa en Bit a cada volta, «El robot que decideix» (per a casa), «On acabarà?» i el gir equivocat.|De «Recuerda» hasta «Investiga»: las preguntas de repaso, las historias del taller, las tarjetas de «Descubre», ordenar qué hace Bit en cada vuelta, «El robot que decide» (para casa), «¿Dónde terminará?» y el giro equivocado.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: combinem-ho tot|Retos: combinémoslo todo", fase: 'ordinador',
        fa: "Pausa activa tots junts. Després, els cinc reptes. Són llargs: digues que no cal acabar-los tots avui i que l'important és entendre cada programa. Al del llum, insisteix que el facin «Pas a pas» per veure on s'encén el llum vermell.|Pausa activa todos juntos. Después, los cinco retos. Son largos: di que no hace falta terminarlos todos hoy y que lo importante es entender cada programa. En el de la luz, insiste en que lo hagan «Paso a paso» para ver dónde se enciende la luz roja.",
        diu: ["Què ha de fer en Bit si té un obstacle? I si no en té?|¿Qué tiene que hacer Bit si tiene un obstáculo? ¿Y si no lo tiene?",
          "La funció «esquiva» ja està feta: on la crides?|La función «esquiva» ya está hecha: ¿dónde la llamas?",
          "El llum vermell, a quina part del «si» ha d'anar?|La luz roja, ¿en qué parte del «si» tiene que ir?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els cinc reptes: els passadissos que giren a la dreta, els girs als dos costats, la funció «esquiva», el comptador d'estrelles i el bug dels llums.|«Pausa activa» y los cinco retos: los pasillos que giran a la derecha, los giros a los dos lados, la función «esquiva», el contador de estrellas y el bug de las luces.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la patrulla de la cova|Crea: la patrulla de la cueva", fase: 'crea',
        fa: "Cada alumne/a programa la patrulla per a les dues coves. Qui acabi pot afegir llums, notes o un comptador d'estrelles i ensenyar-ho a un company/a.|Cada alumno/a programa la patrulla para las dos cuevas. Quien termine puede añadir luces, notas o un contador de estrellas y enseñárselo a un compañero/a.",
        diu: ["Funciona a les dues coves? Mira les pestanyes.|¿Funciona en las dos cuevas? Mira las pestañas.",
          "Què has afegit al teu programa per fer-lo més teu?|¿Qué has añadido a tu programa para hacerlo más tuyo?"],
        slides: ['s15'], app: "Pas «Crea»: La patrulla de la cova.|Paso «Crea»: La patrulla de la cueva.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals i fes el tiquet de sortida.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales y haz el ticket de salida.",
        diu: ["Què fa en Bit a cada volta del programa que decideix?|¿Qué hace Bit en cada vuelta del programa que decide?",
          "Què feu abans d'executar un programa llarg?|¿Qué hacéis antes de ejecutar un programa largo?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el «Si» fora del bucle, i en Bit només decideix una vegada.|Pone el «Si» fuera del bucle, y Bit solo decide una vez.",
        "Pregunta: quantes vegades ha de decidir en Bit? Que miri si el «Si» queda dins del requadre verd del bucle.|Pregunta: ¿cuántas veces tiene que decidir Bit? Que mire si el «Si» queda dentro del recuadro verde del bucle."],
      ["Posa «Endavant» a la part del «si» i «Gira» a la del «si no», al revés.|Pone «Adelante» en la parte del «si» y «Gira» en la del «si no», al revés.",
        "Que llegeixi la condició en veu alta: «si hi ha un obstacle davant…». Què ha de fer, llavors?|Que lea la condición en voz alta: «si hay un obstáculo delante…». ¿Qué tiene que hacer, entonces?"],
      ["Al repte dels dos costats, posa «si no» i en Bit no avança quan gira.|En el reto de los dos lados, pone «si no» y Bit no avanza cuando gira.",
        "Que el faci «Pas a pas» en un revolt. Després de girar, què ha de fer sempre? Ha d'anar dins o fora dels «si»?|Que lo haga «Paso a paso» en una curva. Después de girar, ¿qué tiene que hacer siempre? ¿Tiene que ir dentro o fuera de los «si»?"],
      ["Executa un programa llarg moltes vegades sense pensar per què falla.|Ejecuta un programa largo muchas veces sin pensar por qué falla.",
        "Proposa-li predir primer: «On creus que s'equivocarà?». Després, «Pas a pas» fins al bloc que falla i canviar només aquell.|Proponle predecir primero: «¿Dónde crees que se equivocará?». Después, «Paso a paso» hasta el bloque que falla y cambiar solo ese."],
      ["Al comptador d'estrelles, posa «Suma 1» sense «Si» i compta caselles en lloc d'estrelles.|En el contador de estrellas, pone «Suma 1» sin «Si» y cuenta casillas en lugar de estrellas.",
        "Pregunta: quan ha de sumar, a cada pas o només quan hi ha una estrella? Quin bloc fa servir el sensor?|Pregunta: ¿cuándo tiene que sumar, en cada paso o solo cuando hay una estrella? ¿Qué bloque usa el sensor?"]
    ],
    diff: {
      mes: "Fer que la patrulla compti les estrelles i encengui el llum verd en arribar. Inventar a la fitxa un camí amb revolts als dos costats i escriure un programa que el segueixi.|Hacer que la patrulla cuente las estrellas y encienda la luz verde al llegar. Inventar en la ficha un camino con curvas a los dos lados y escribir un programa que lo siga.",
      menys: "Començar pel repte dels revolts a la dreta amb el programa de la pissarra al costat. Fer de robot amb el dit sobre la pantalla dient cada decisió en veu alta.|Empezar por el reto de las curvas a la derecha con el programa de la pizarra al lado. Hacer de robot con el dedo sobre la pantalla diciendo cada decisión en voz alta."
    },
    aval: {
      ticket: ["Què fa en Bit a cada volta del programa «Fins que arribis: si hi ha obstacle, gira; si no, endavant»?|¿Qué hace Bit en cada vuelta del programa «Hasta que llegues: si hay obstáculo, gira; si no, adelante»?",
        "Què fas abans d'executar un programa llarg?|¿Qué haces antes de ejecutar un programa largo?"],
      rubric: [
        ["Condicions dins de bucles|Condiciones dentro de bucles", "Posa el «Si… si no…» dins del bucle i explica què passa a cada volta.|Pone el «Si… si no…» dentro del bucle y explica qué pasa en cada vuelta.", "Fa servir el bucle i el «Si», però de vegades els posa l'un sota l'altre.|Usa el bucle y el «Si», pero a veces los pone uno debajo del otro."],
        ["Combinar blocs|Combinar bloques", "Combina el bucle amb funcions, llums o comptadors segons el que demana el repte.|Combina el bucle con funciones, luces o contadores según lo que pide el reto.", "Combina el bucle amb un altre tipus de bloc amb ajuda.|Combina el bucle con otro tipo de bloque con ayuda."],
        ["Llegir i depurar|Leer y depurar", "Prediu on acaba en Bit i troba el bloc que falla amb «Pas a pas».|Predice dónde termina Bit y encuentra el bloque que falla con «Paso a paso».", "Executa per provar i necessita ajuda per localitzar el bug.|Ejecuta para probar y necesita ayuda para localizar el bug."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla pot repetir la sessió i fer «El robot que decideix»: caminar fins a la cuina seguint la regla «si tinc una paret davant, giro; si no, faig una passa». Feu-ho a poc a poc i amb els ulls oberts!|En casa, con el móvil, vuestro hijo o hija puede repetir la sesión y hacer «El robot que decide»: caminar hasta la cocina siguiendo la regla «si tengo una pared delante, giro; si no, doy un paso». ¡Hacedlo despacio y con los ojos abiertos!",
    slides: [
      { id: 's1', k: 'portada', t: "Combinem-ho tot|Combinémoslo todo", x: "Bucles, sensors, funcions, llums i comptadors: tot junt!|Bucles, sensores, funciones, luces y contadores: ¡todo junto!",
        nota: "Explica que avui faran els programes més llargs del curs fins ara, i que llegir-los bé és part de la feina.|Explica que hoy harán los programas más largos del curso hasta ahora, y que leerlos bien es parte del trabajo." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", punts: ["En un camí en L, el gir va dins o fora del bucle?|En un camino en L, ¿el giro va dentro o fuera del bucle?", "Què fa «Si hi ha un obstacle: Gira. Si no: Endavant» amb el camí lliure?|¿Qué hace «Si hay un obstáculo: Gira. Si no: Adelante» con el camino libre?"],
        nota: "Respostes: a fora, després del bucle; avança, perquè fa la part del «si no».|Respuestas: fuera, después del bucle; avanza, porque hace la parte del «si no»." },
      { id: 's3', k: 'pregunta', t: "Un camí sense mapa|Un camino sin mapa", x: "Si el passadís de la cova té deu revolts i no sabem on són, quin programa faríem?|Si el pasillo de la cueva tiene diez curvas y no sabemos dónde están, ¿qué programa haríamos?",
        nota: "Recull idees. Porta-les cap a la solució: a cada pas, mirar si hi ha obstacle i decidir.|Recoge ideas. Llévalas hacia la solución: en cada paso, mirar si hay obstáculo y decidir." },
      { id: 's4', k: 'anim', t: "Un «si» dins d'un «fins que»|Un «si» dentro de un «hasta que»", anim: 'u7follow', x: "A cada volta en Bit decideix: si hi ha obstacle, gira; si no, avança.|En cada vuelta Bit decide: si hay obstáculo, gira; si no, avanza.",
        nota: "Fes notar quin bloc s'il·lumina a cada moment: als revolts, «Gira»; als trams rectes, «Endavant».|Haz notar qué bloque se ilumina en cada momento: en las curvas, «Gira»; en los tramos rectos, «Adelante»." },
      { id: 's5', k: 'concepte', t: "Blocs dins de blocs|Bloques dentro de bloques", blocks: ["Repeteix fins que arribis|Repite hasta que llegues", "Si hi ha un obstacle davant|Si hay un obstáculo delante", "Gira a la dreta|Gira a la derecha", "Si no: Endavant|Si no: Adelante"],
        punts: ["El bucle fa la pregunta gran: hi he arribat?|El bucle hace la pregunta grande: ¿he llegado?", "El «si» fa la pregunta petita: tinc un obstacle?|El «si» hace la pregunta pequeña: ¿tengo un obstáculo?", "Totes dues es fan a cada volta.|Las dos se hacen en cada vuelta."],
        nota: "Dibuixa a la pissarra els requadres un dins de l'altre amb els colors dels blocs: verd per al bucle, groc per al «si».|Dibuja en la pizarra los recuadros uno dentro del otro con los colores de los bloques: verde para el bucle, amarillo para el «si»." },
      { id: 's6', k: 'demo', t: "El camí que gira|El camino que gira", x: "Abans d'executar: quantes vegades girarà en Bit?|Antes de ejecutar: ¿cuántas veces girará Bit?",
        demo: { w: { map: ['>###.', '...#.', '.F.#.', '.###.'] }, prog: 'until:goal{ if:wall{ r } else{ f } }' },
        nota: "Resposta: 3 vegades, una a cada revolt. La resta de voltes avança.|Respuesta: 3 veces, una en cada curva. El resto de vueltas avanza." },
      { id: 's7', k: 'demo', t: "Girs als dos costats|Giros a los dos lados", x: "Si hi ha camí a l'esquerra, gira a l'esquerra. Si n'hi ha a la dreta, a la dreta. I un pas endavant.|Si hay camino a la izquierda, gira a la izquierda. Si lo hay a la derecha, a la derecha. Y un paso adelante.",
        demo: { w: { map: ['>#...', '.#...', '.###.', '...#F'] }, prog: 'until:goal{ if:freeL{ l } if:freeR{ r } f }' },
        nota: "Fes-ho amb el cos: estireu els braços com si fossin els sensors dels costats.|Hacedlo con el cuerpo: estirad los brazos como si fueran los sensores de los lados." },
      { id: 's8', k: 'demo', t: "Un bucle que crida una funció|Un bucle que llama a una función", x: "La funció A fa un graó. El bucle la repeteix fins que en Bit arriba dalt.|La función A hace un peldaño. El bucle la repite hasta que Bit llega arriba.",
        demo: { w: { map: ['.....', '...F.', '..##.', '.##..', '>#...'] }, prog: 'until:goal{ A }', fns: { A: 'f l f r' } },
        nota: "Recorda la unitat 5: una funció és un grup de blocs amb nom. Aquí el bucle la crida tres vegades.|Recuerda la unidad 5: una función es un grupo de bloques con nombre. Aquí el bucle la llama tres veces." },
      { id: 's9', k: 'demo', t: "Llegeix abans d'executar|Lee antes de ejecutar", x: "A cada volta avança i, si hi ha una estrella, suma 1. Quant valdrà el comptador?|En cada vuelta avanza y, si hay una estrella, suma 1. ¿Cuánto valdrá el contador?",
        demo: { w: { map: ['.......', '>*#*#*F', '.......'] }, prog: 'until:goal{ f if:gem{ add:1 } }' },
        nota: "Que escriguin la predicció a la mà o a la pissarra abans d'executar. Resposta: 3.|Que escriban la predicción en la mano o en la pizarra antes de ejecutar. Respuesta: 3." },
      { id: 's10', k: 'activitat', t: "El robot que decideix|El robot que decide", timer: 12, punts: ["Munteu una missió amb motxilles.|Montad una misión con mochilas.", "El robot segueix el programa de la pissarra.|El robot sigue el programa de la pizarra.", "Diu cada decisió en veu alta.|Dice cada decisión en voz alta.", "Moveu una roca: encara funciona?|Moved una roca: ¿todavía funciona?"],
        nota: "Les missions de la fitxa només giren a la dreta. Si mouen roques i el camí gira a l'esquerra, el programa falla: bona conversa!|Las misiones de la ficha solo giran a la derecha. Si mueven rocas y el camino gira a la izquierda, el programa falla: ¡buena conversación!" },
      { id: 's11', k: 'concepte', t: "El programa del robot|El programa del robot", blocks: ["Repeteix fins que arribis|Repite hasta que llegues", "Si hi ha un obstacle: Gira a la dreta|Si hay un obstáculo: Gira a la derecha", "Si no: Endavant|Si no: Adelante"],
        nota: "Deixa aquesta diapositiva projectada mentre treballen al terra.|Deja esta diapositiva proyectada mientras trabajan en el suelo." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Combinem-ho tot».|Abre la sesión «Combinémoslo todo».", "«El robot que decideix» és per fer a casa.|«El robot que decide» es para hacer en casa.", "A «On acabarà?», llegeix amb el dit.|En «¿Dónde terminará?», lee con el dedo.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Comprova que tothom ordena bé què fa en Bit a cada volta: és la base dels reptes.|Comprueba que todos ordenan bien qué hace Bit en cada vuelta: es la base de los retos." },
      { id: 's13', k: 'repte', t: "Reptes: combinem-ho tot|Retos: combinémoslo todo", timer: 10, punts: ["1. Passadissos que giren a la dreta|1. Pasillos que giran a la derecha", "2. Girs als dos costats|2. Giros a los dos lados", "3. La funció «esquiva»|3. La función «esquiva»", "4. El comptador d'estrelles|4. El contador de estrellas", "5. El bug dels llums|5. El bug de las luces"],
        nota: "No cal acabar-los tots. Prioritza que entenguin el primer i el del bug.|No hace falta terminarlos todos. Prioriza que entiendan el primero y el del bug." },
      { id: 's14', k: 'concepte', t: "Com es caça un bug llarg|Cómo se caza un bug largo", punts: ["Prediu on fallarà.|Predice dónde fallará.", "Fes-lo «Pas a pas».|Hazlo «Paso a paso».", "Para al primer bloc que fa una cosa estranya.|Para en el primer bloque que hace algo raro.", "Canvia només aquell bloc i torna-ho a provar.|Cambia solo ese bloque y vuelve a probar."],
        nota: "Són els passos de la unitat 1, ara amb programes més llargs. Recorda'ls quan arribin al bug dels llums.|Son los pasos de la unidad 1, ahora con programas más largos. Recuérdalos cuando lleguen al bug de las luces." },
      { id: 's15', k: 'activitat', t: "Crea: la patrulla de la cova|Crea: la patrulla de la cueva", timer: 5, x: "Recorre els passadissos de les dues coves i recull les estrelles. Extra: llums, notes o comptador.|Recorre los pasillos de las dos cuevas y recoge las estrellas. Extra: luces, notas o contador.",
        nota: "Qui acabi aviat pot ensenyar la patrulla a un company/a i que aquest predigui el valor del comptador.|Quien termine pronto puede enseñar la patrulla a un compañero/a y que este prediga el valor del contador." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un «si» dins d'un «fins que» fa que en Bit decideixi a cada pas.|Un «si» dentro de un «hasta que» hace que Bit decida en cada paso.", "Dins d'un bucle hi caben funcions, llums i comptadors.|Dentro de un bucle caben funciones, luces y contadores.", "Els programes llargs es llegeixen i es prediuen abans d'executar-los.|Los programas largos se leen y se predicen antes de ejecutarlos."],
        nota: "Avança que la setmana vinent és el projecte final de la unitat: el rescat a la cova.|Avanza que la semana que viene es el proyecto final de la unidad: el rescate en la cueva." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què fa en Bit a cada volta del programa que decideix?|¿Qué hace Bit en cada vuelta del programa que decide?", "Què fas abans d'executar un programa llarg?|¿Qué haces antes de ejecutar un programa largo?"],
        nota: "Respostes: pregunta si ha arribat; si no, mira si hi ha obstacle i gira o avança. Llegir-lo i predir què farà.|Respuestas: pregunta si ha llegado; si no, mira si hay obstáculo y gira o avanza. Leerlo y predecir qué hará." }
    ],
    print: [
      { id: 'p1', t: "Quadrícula del terra: el robot que decideix|Cuadrícula del suelo: el robot que decide", k: 'quadricula',
        intro: "Les roques (motxilles) fan de parets del passadís; la vora de la quadrícula també és un obstacle. El robot sempre segueix el mateix programa: «Fins que arribis: si hi ha obstacle, gira a la dreta; si no, endavant».|Las rocas (mochilas) hacen de paredes del pasillo; el borde de la cuadrícula también es un obstáculo. El robot siempre sigue el mismo programa: «Hasta que llegues: si hay obstáculo, gira a la derecha; si no, adelante».",
        items: [
          { t: "Missió 1: un revolt|Misión 1: una curva", w: 5, h: 3, cells: ['>..R.', '.....', '..F..'],
            instructions: "Abans de començar, endevineu a quina casella girarà el robot.|Antes de empezar, adivinad en qué casilla girará el robot.", sol: 'until:goal{ if:wall{ r } else{ f } }' },
          { t: "Missió 2: dos revolts|Misión 2: dos curvas", w: 5, h: 3, cells: ['>...R', 'F....', '...R.'],
            instructions: "Quantes vegades girarà el robot? I quantes passes farà?|¿Cuántas veces girará el robot? ¿Y cuántos pasos dará?", sol: 'until:goal{ if:wall{ r } else{ f } }' },
          { t: "Missió 3: la volta llarga|Misión 3: la vuelta larga", w: 5, h: 4, cells: ['>...R', '.F...', '.....', 'R....'],
            instructions: "Tres revolts. Després, moveu una roca i comproveu si el robot encara hi arriba.|Tres curvas. Después, moved una roca y comprobad si el robot todavía llega.", sol: 'until:goal{ if:wall{ r } else{ f } }' }
        ] },
      { id: 'p2', t: "Fitxa: llegeix, prediu i depura|Ficha: lee, predice y depura", k: 'fitxa',
        intro: "Llegeix cada programa amb el dit, bloc a bloc, abans de respondre.|Lee cada programa con el dedo, bloque a bloque, antes de responder.",
        items: [
          { q: "«Repeteix 3 vegades: (Repeteix fins que hi hagi un obstacle: Endavant) i Gira a l'esquerra». On acabarà en Bit? Encercla A, B o C.|«Repite 3 veces: (Repite hasta que haya un obstáculo: Adelante) y Gira a la izquierda». ¿Dónde terminará Bit? Rodea A, B o C.",
            w: { map: ['A##B.', '...#.', '...#.', '>##C.'] }, prog: '3{ until:wall{ f } l }', a: 'A',
            sol: "A: primer fins a la C, després fins a la B i finalment fins a la A.|A: primero hasta la C, después hasta la B y finalmente hasta la A." },
          { q: "«Fins que hi hagi un obstacle: Endavant», «Gira a la dreta», i això dues vegades més. On acabarà en Bit?|«Hasta que haya un obstáculo: Adelante», «Gira a la derecha», y esto dos veces más. ¿Dónde terminará Bit?",
            w: { map: ['>##.', '..#.', 'A##B'] }, prog: 'until:wall{ f } r until:wall{ f } r until:wall{ f }', a: 'A',
            sol: "A: va a la dreta, baixa fins a baix de tot, gira i va cap a l'esquerra fins a la A.|A: va a la derecha, baja hasta abajo del todo, gira y va hacia la izquierda hasta la A." },
          { q: "«Repeteix fins que arribis: Endavant; si hi ha una estrella, suma 1». Quant valdrà el comptador al final?|«Repite hasta que llegues: Adelante; si hay una estrella, suma 1». ¿Cuánto valdrá el contador al final?",
            w: { map: ['......', '>*#**F', '......'] }, sol: "3: hi ha tres estrelles pel camí.|3: hay tres estrellas por el camino." },
          { q: "Aquest programa havia d'encendre el llum vermell només als revolts, però l'encén a cada pas: «Fins que arribis: si hi ha obstacle, gira; si no, endavant i llum vermell». Com l'arreglaries?|Este programa tenía que encender la luz roja solo en las curvas, pero la enciende en cada paso: «Hasta que llegues: si hay obstáculo, gira; si no, adelante y luz roja». ¿Cómo lo arreglarías?",
            sol: "Cal moure el llum vermell a la part del «si»: si hi ha obstacle, gira i llum vermell; si no, només endavant.|Hay que mover la luz roja a la parte del «si»: si hay obstáculo, gira y luz roja; si no, solo adelante." },
          { q: "Escriu el programa que decideix a cada pas per a aquest passadís.|Escribe el programa que decide en cada paso para este pasillo.",
            w: { map: ['>###', '...#', 'F###'] }, solProg: 'until:goal{ if:wall{ r } else{ f } }',
            sol: "Repeteix fins que arribis: si hi ha un obstacle davant, gira a la dreta; si no, endavant.|Repite hasta que llegues: si hay un obstáculo delante, gira a la derecha; si no, adelante." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: rescat a la cova ---------- */
  'r7-4': {
    obj: [
      "L'alumne/a planifica amb paraules un rescat (anar a la caixa, agafar-la, mitja volta, tornar, deixar-la) abans de programar.|El alumno/a planifica con palabras un rescate (ir a la caja, cogerla, media vuelta, volver, dejarla) antes de programar.",
      "L'alumne/a fa servir «fins que hi hagi una caixa» i «fins que hi hagi un obstacle» en un programa que funciona a coves diferents.|El alumno/a usa «hasta que haya una caja» y «hasta que haya un obstáculo» en un programa que funciona en cuevas diferentes.",
      "L'alumne/a combina bucles amb condició amb girs, el «si» o el comptador per resoldre un problema de diverses etapes.|El alumno/a combina bucles con condición con giros, el «si» o el contador para resolver un problema de varias etapas.",
      "L'alumne/a presenta el seu projecte i explica on para cada bucle i quin bug ha arreglat.|El alumno/a presenta su proyecto y explica dónde para cada bucle y qué bug ha arreglado."
    ],
    comp: [
      "Competència digital (CD5): crear un programa complet per a un problema de diverses etapes|Competencia digital (CD5): crear un programa completo para un problema de varias etapas",
      "Pensament computacional: descomposició, generalització amb bucles amb condició i depuració|Pensamiento computacional: descomposición, generalización con bucles con condición y depuración",
      "Matemàtiques: orientació i girs a la quadrícula; comptar endavant i enrere|Matemáticas: orientación y giros en la cuadrícula; contar hacia delante y hacia atrás",
      "Comunicació oral: presentar un projecte i explicar com s'ha fet|Comunicación oral: presentar un proyecto y explicar cómo se ha hecho"
    ],
    vocab: [
      ["Rescat|Rescate", "Anar a buscar una cosa que s'ha quedat en un lloc i tornar-la on toca.|Ir a buscar algo que se ha quedado en un sitio y devolverlo donde toca."],
      ["Mitja volta|Media vuelta", "Dos girs iguals: en Bit acaba mirant cap on venia.|Dos giros iguales: Bit acaba mirando hacia donde venía."],
      ["Pla|Plan", "Els trossos del rescat dits amb paraules, en ordre, abans de posar blocs.|Los trozos del rescate dichos con palabras, en orden, antes de poner bloques."],
      ["Comptador de passes|Contador de pasos", "Una variable que suma a l'anada i resta a la tornada per saber quan s'ha tornat al principi.|Una variable que suma a la ida y resta a la vuelta para saber cuándo se ha vuelto al principio."],
      ["Projecte|Proyecto", "Un repte gran on fem servir tot el que hem après a la unitat.|Un reto grande donde usamos todo lo que hemos aprendido en la unidad."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: rescat a la cova»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: rescate en la cueva»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra, cadires o motxilles per fer les parets de la cova i un estoig que faci de caixa|La cuadrícula del suelo, sillas o mochilas para hacer las paredes de la cueva y un estuche que haga de caja",
        "Totes les targetes de la unitat (bucle «fins que», condicions, girs, Agafa i Deixa)|Todas las tarjetas de la unidad (bucle «hasta que», condiciones, giros, Coge y Deja)"
      ],
      imprimir: ["Full de pla del rescat|Hoja de plan del rescate", "Targetes del rescat|Tarjetas del rescate"],
      prep: [
        "Muntar al terra una «cova» recta amb cadires o motxilles: la casa a l'entrada, tocant a la paret, i la caixa a dins.|Montar en el suelo una «cueva» recta con sillas o mochilas: la casa en la entrada, tocando la pared, y la caja dentro.",
        "Imprimir un full de pla per parella i retallar les targetes del rescat per grup.|Imprimir una hoja de plan por pareja y recortar las tarjetas del rescate por grupo.",
        "Decidir com es presentaran els projectes: 3 o 4 voluntaris al projector o una volta per l'aula.|Decidir cómo se presentarán los proyectos: 3 o 4 voluntarios en el proyector o una vuelta por el aula.",
        "Tenir preparada la insígnia de rescatador/a o un reconeixement senzill per al final de la unitat.|Tener preparada la insignia de rescatador/a o un reconocimiento sencillo para el final de la unidad."
      ]
    },
    plan: [
      { min: 5, t: "Alerta al campament!|¡Alerta en el campamento!", fase: 'inici',
        fa: "Fes la pregunta de repàs del programa que decideix. Explica la missió del projecte: el material de l'expedició s'ha quedat dins de la cova i els passadissos canvien cada vegada. Escriu a la pissarra el pla d'en Bit en cinc trossos.|Haz la pregunta de repaso del programa que decide. Explica la misión del proyecto: el material de la expedición se ha quedado dentro de la cueva y los pasillos cambian cada vez. Escribe en la pizarra el plan de Bit en cinco trozos.",
        diu: ["Què posaríeu dins del «fins que arribis» per seguir un camí que gira?|¿Qué pondríais dentro del «hasta que llegues» para seguir un camino que gira?",
          "Si el passadís canvia cada vegada, per què no podem comptar caselles?|Si el pasillo cambia cada vez, ¿por qué no podemos contar casillas?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El pla del rescat|El plan del rescate", fase: 'teoria',
        fa: "Mostra l'animació del rescat i la demostració de la caixa: abans d'executar, que la classe digui on para cada bucle. Presenta el pla del projecte i el truc del comptador de passes amb la demostració.|Muestra la animación del rescate y la demostración de la caja: antes de ejecutar, que la clase diga dónde para cada bucle. Presenta el plan del proyecto y el truco del contador de pasos con la demostración.",
        diu: ["On para el primer bucle? I el segon?|¿Dónde para el primer bucle? ¿Y el segundo?",
          "Per què la mitja volta són dos girs?|¿Por qué la media vuelta son dos giros?",
          "Si la casa no és al final del passadís, com sap en Bit on ha de parar?|Si la casa no está al final del pasillo, ¿cómo sabe Bit dónde tiene que parar?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Rescat a la cova del terra|Rescate en la cueva del suelo", fase: 'desconnectat',
        fa: "Per parelles, omplen els exercicis 1 i 2 del full de pla. Després, en grups de 3, programen el rescat amb targetes i el robot el fa a la cova del terra. Quan funcioni, mou la caixa més endins o més a prop: el mateix programa ha de funcionar sense canviar res.|Por parejas, rellenan los ejercicios 1 y 2 de la hoja de plan. Después, en grupos de 3, programan el rescate con tarjetas y el robot lo hace en la cueva del suelo. Cuando funcione, mueve la caja más adentro o más cerca: el mismo programa tiene que funcionar sin cambiar nada.",
        diu: ["Primer el pla amb paraules, després les targetes.|Primero el plan con palabras, después las tarjetas.",
          "He mogut la caixa. Cal canviar alguna targeta?|He movido la caja. ¿Hay que cambiar alguna tarjeta?",
          "Robot: abans de cada pas, digues quina pregunta fas.|Robot: antes de cada paso, di qué pregunta haces."],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles i després grups de 3|Por parejas y después grupos de 3" },
      { min: 12, t: "A l'ordinador: els primers rescats|En el ordenador: los primeros rescates", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins al repte del comptador de passes. Recorda'ls que diguin el pla en veu alta abans de cada repte. Al comptador, si s'encallen, torna a la diapositiva del truc.|Cada alumno/a hace la sesión hasta el reto del contador de pasos. Recuérdales que digan el plan en voz alta antes de cada reto. En el contador, si se atascan, vuelve a la diapositiva del truco.",
        diu: ["Digues-me el teu pla: fins on, què fa, fins on…|Dime tu plan: hasta dónde, qué hace, hasta dónde…",
          "Funciona a les tres coves? Mira les pestanyes.|¿Funciona en las tres cuevas? Mira las pestañas.",
          "Quant val el comptador quan en Bit arriba a la caixa? I quan torna?|¿Cuánto vale el contador cuando Bit llega a la caja? ¿Y cuando vuelve?"],
        slides: ['s11'], app: "De «Recorda» fins al comptador de passes: el repàs, les històries del campament, les targetes de «Descobreix», ordenar el pla, passar el pla a blocs, el bloc que s'ha de canviar, el primer rescat, la «Pausa activa», les estrelles de cristall i el comptador de passes.|De «Recuerda» hasta el contador de pasos: el repaso, las historias del campamento, las tarjetas de «Descubre», ordenar el plan, pasar el plan a bloques, el bloque que hay que cambiar, el primer rescate, la «Pausa activa», las estrellas de cristal y el contador de pasos.", org: "Individual|Individual" },
      { min: 15, t: "Projecte: rescat a la cova|Proyecto: rescate en la cueva", fase: 'crea',
        fa: "Primer, el repte del passadís amb revolt (arreglar el gir de tornada). Després, abans del projecte final, cada alumne/a escriu el pla a l'exercici 4 del full. Quan el tingui, programa, prova a les dues coves i millora.|Primero, el reto del pasillo con curva (arreglar el giro de vuelta). Después, antes del proyecto final, cada alumno/a escribe el plan en el ejercicio 4 de la hoja. Cuando lo tenga, programa, prueba en las dos cuevas y mejora.",
        diu: ["A la tornada, en Bit mira cap a l'altre costat: quin gir li toca ara?|A la vuelta, Bit mira hacia el otro lado: ¿qué giro le toca ahora?",
          "Prova cada tros abans de continuar: així, si hi ha un bug, saps on és.|Prueba cada trozo antes de seguir: así, si hay un bug, sabes dónde está.",
          "Funciona a les dues coves? Com ho pots celebrar en acabar?|¿Funciona en las dos cuevas? ¿Cómo lo puedes celebrar al terminar?"],
        slides: ['s12', 's13', 's14'], app: "El repte del passadís amb revolt, la història del projecte i el projecte de «Crea»: Rescat a la cova.|El reto del pasillo con curva, la historia del proyecto y el proyecto de «Crea»: Rescate en la cueva.", org: "Individual|Individual" },
      { min: 5, t: "Presentem els projectes|Presentamos los proyectos", fase: 'tancament',
        fa: "Tres o quatre voluntaris projecten el seu rescat. Abans d'executar-lo, la classe diu on pararà cada bucle. Després, expliquen un bug que hagin trobat i com l'han arreglat.|Tres o cuatro voluntarios proyectan su rescate. Antes de ejecutarlo, la clase dice dónde parará cada bucle. Después, explican un bug que hayan encontrado y cómo lo han arreglado.",
        diu: ["On para el teu primer bucle? I l'últim?|¿Dónde para tu primer bucle? ¿Y el último?",
          "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?",
          "Què t'ha agradat del projecte del company/a?|¿Qué te ha gustado del proyecto del compañero/a?"],
        slides: ['s15'], app: "El projecte desat a «Crea», projectat des de l'ordinador de cada voluntari/ària.|El proyecto guardado en «Crea», proyectado desde el ordenador de cada voluntario/a.", org: "Tot el grup|Todo el grupo" },
      { min: 3, t: "Tancament de la unitat|Cierre de la unidad", fase: 'tancament',
        fa: "Repassa les idees de la unitat amb el resum, deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida. Reconeix la feina de tothom amb la insígnia de rescatador/a.|Repasa las ideas de la unidad con el resumen, deja que respondan las preguntas finales de la app y haz el ticket de salida. Reconoce el trabajo de todos con la insignia de rescatador/a.",
        diu: ["Quina diferència hi ha entre «Repeteix 5 vegades» i «Repeteix fins que…»?|¿Qué diferencia hay entre «Repite 5 veces» y «Repite hasta que…»?",
          "Quina sessió de la cova us ha agradat més?|¿Qué sesión de la cueva os ha gustado más?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir «fins que hi hagi un obstacle» per anar a la caixa i en Bit se la passa.|Usa «hasta que haya un obstáculo» para ir a la caja y Bit se la pasa.",
        "Pregunta: on ha de parar en Bit, a la paret o a la caixa? Quina condició diu «caixa»?|Pregunta: ¿dónde tiene que parar Bit, en la pared o en la caja? ¿Qué condición dice «caja»?"],
      ["Oblida la mitja volta (o només fa un gir) i en Bit no pot tornar.|Olvida la media vuelta (o solo hace un giro) y Bit no puede volver.",
        "Que faci el programa «Pas a pas» fins a la caixa i miri cap on mira en Bit. Cap on ha de mirar per tornar?|Que haga el programa «Paso a paso» hasta la caja y mire hacia dónde mira Bit. ¿Hacia dónde tiene que mirar para volver?"],
      ["A la tornada d'un passadís amb revolt, repeteix el mateix gir de l'anada.|En la vuelta de un pasillo con curva, repite el mismo giro de la ida.",
        "Com a la unitat 1: posa't al lloc d'en Bit. A l'anada baixava i girava; ara puja: cap on queda la casa?|Como en la unidad 1: ponte en el lugar de Bit. A la ida bajaba y giraba; ahora sube: ¿hacia dónde queda la casa?"],
      ["Al comptador de passes, suma però no resta, o resta fora del bucle.|En el contador de pasos, suma pero no resta, o resta fuera del bucle.",
        "Que miri el comptador de dalt mentre executa. Quant val a la caixa? Què ha de passar a cada pas de tornada perquè arribi a 0?|Que mire el contador de arriba mientras ejecuta. ¿Cuánto vale en la caja? ¿Qué tiene que pasar en cada paso de vuelta para que llegue a 0?"],
      ["Vol acabar el projecte de pressa i no el prova a la segona cova.|Quiere terminar el proyecto deprisa y no lo prueba en la segunda cueva.",
        "Recorda-li que el projecte s'ha de provar a totes les coves. Que toqui la pestanya de la cova 2 i hi executi el programa.|Recuérdale que el proyecto se tiene que probar en todas las cuevas. Que toque la pestaña de la cueva 2 y ejecute allí el programa."]
    ],
    diff: {
      mes: "Afegir al projecte una celebració amb llums i notes en acabar i explicar on va. Dibuixar al full una cova nova amb un revolt i una caixa perquè la resolgui un company/a amb targetes al terra.|Añadir al proyecto una celebración con luces y notas al terminar y explicar dónde va. Dibujar en la hoja una cueva nueva con una curva y una caja para que la resuelva un compañero/a con tarjetas en el suelo.",
      menys: "Fer el pla amb les targetes de paper damunt la taula, un tros per fila, i passar-lo a blocs tros a tros. Al projecte, programar primer només l'anada fins a la caixa i provar-ho abans d'afegir la tornada.|Hacer el plan con las tarjetas de papel sobre la mesa, un trozo por fila, y pasarlo a bloques trozo a trozo. En el proyecto, programar primero solo la ida hasta la caja y probarlo antes de añadir la vuelta."
    },
    aval: {
      ticket: ["Quina diferència hi ha entre «Repeteix 5 vegades» i «Repeteix fins que…»?|¿Qué diferencia hay entre «Repite 5 veces» y «Repite hasta que…»?",
        "Digues el pla del rescat d'una caixa en cinc trossos.|Di el plan del rescate de una caja en cinco trozos."],
      rubric: [
        ["Pla i descomposició|Plan y descomposición", "Diu o escriu els trossos del rescat abans de programar i els segueix.|Dice o escribe los trozos del rescate antes de programar y los sigue.", "Fa el pla quan l'hi demanen, però programa sense seguir-lo.|Hace el plan cuando se lo piden, pero programa sin seguirlo."],
        ["Bucles amb condició|Bucles con condición", "Tria la condició bona per a cada tros i el programa funciona a totes les coves.|Elige la condición buena para cada trozo y el programa funciona en todas las cuevas.", "Fa servir bucles amb condició, però el programa només funciona a una cova.|Usa bucles con condición, pero el programa solo funciona en una cueva."],
        ["Projecte final|Proyecto final", "Rescata la caixa a les dues coves i explica com ha trobat i arreglat algun bug.|Rescata la caja en las dos cuevas y explica cómo ha encontrado y arreglado algún bug.", "Fa una part del rescat, o el completa amb ajuda.|Hace una parte del rescate, o lo completa con ayuda."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla pot ensenyar-vos el projecte «Rescat a la cova» i explicar-vos on para cada bucle. Podeu fer també la pausa activa del rescat amb una caixa imaginària (o un coixí).|En casa, con el móvil, vuestro hijo o hija puede enseñaros el proyecto «Rescate en la cueva» y explicaros dónde para cada bucle. También podéis hacer la pausa activa del rescate con una caja imaginaria (o un cojín).",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: rescat a la cova|Proyecto: rescate en la cueva", x: "Avui farem el projecte final de la unitat: un rescat amb bucles amb condició.|Hoy haremos el proyecto final de la unidad: un rescate con bucles con condición.",
        nota: "Explica que faran servir tot el que han après en les tres sessions anteriors.|Explica que usarán todo lo que han aprendido en las tres sesiones anteriores." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Què poses dins del «fins que arribis» per seguir un camí que gira?|¿Qué pones dentro del «hasta que llegues» para seguir un camino que gira?",
        nota: "Resposta: un «Si hi ha un obstacle: gira; si no: endavant». Amb només «Gira», el bucle seria infinit.|Respuesta: un «Si hay un obstáculo: gira; si no: adelante». Con solo «Gira», el bucle sería infinito." },
      { id: 's3', k: 'concepte', t: "Alerta al campament!|¡Alerta en el campamento!", punts: ["El material de l'expedició s'ha quedat dins de la cova.|El material de la expedición se ha quedado dentro de la cueva.", "Els passadissos canvien cada vegada.|Los pasillos cambian cada vez.", "En Bit no pot comptar caselles: farà servir el «fins que».|Bit no puede contar casillas: usará el «hasta que»."],
        nota: "Remarca que tothom és bé al campament: és un rescat de material, no de persones.|Remarca que todos están bien en el campamento: es un rescate de material, no de personas." },
      { id: 's4', k: 'anim', t: "Un rescat fet de bucles|Un rescate hecho de bucles", anim: 'u7cave', x: "Fins que trobi la caixa, l'agafa, mitja volta i fins a la paret de la sortida.|Hasta que encuentre la caja, la coge, media vuelta y hasta la pared de la salida.",
        nota: "Demana a la classe que digui els trossos en veu alta mentre es veu l'animació.|Pide a la clase que diga los trozos en voz alta mientras se ve la animación." },
      { id: 's5', k: 'demo', t: "Fins que hi hagi una caixa|Hasta que haya una caja", x: "On para el primer bucle? I el segon?|¿Dónde para el primer bucle? ¿Y el segundo?",
        demo: { w: { map: ['.....', 'H>#b#', '.....'] }, prog: 'until:box{ f } p r r until:wall{ f } d' },
        nota: "El primer para a la caixa; el segon, a la casa, perquè després hi ha la vora del mapa.|El primero para en la caja; el segundo, en la casa, porque después está el borde del mapa." },
      { id: 's6', k: 'concepte', t: "El pla del rescat|El plan del rescate", blocks: ["Repeteix fins que hi hagi una caixa|Repite hasta que haya una caja", "Agafa la caixa|Coge la caja", "Gira, Gira|Gira, Gira", "Repeteix fins que hi hagi un obstacle|Repite hasta que haya un obstáculo", "Deixa la caixa|Deja la caja"],
        nota: "Cada fitxa de color és un tros del pla. Deixa-la projectada durant l'activitat del terra.|Cada ficha de color es un trozo del plan. Déjala proyectada durante la actividad del suelo." },
      { id: 's7', k: 'concepte', t: "El truc del comptador|El truco del contador", punts: ["A l'anada: Endavant i Suma 1.|A la ida: Adelante y Suma 1.", "A la tornada: Endavant i Resta 1.|A la vuelta: Adelante y Resta 1.", "Fins que el comptador valgui 0.|Hasta que el contador valga 0.", "Llavors en Bit és on ha començat.|Entonces Bit está donde ha empezado."],
        nota: "Fes-ho amb el cos: tres passes endavant comptant 1, 2, 3, mitja volta i tres passes comptant 2, 1, 0.|Hazlo con el cuerpo: tres pasos adelante contando 1, 2, 3, media vuelta y tres pasos contando 2, 1, 0." },
      { id: 's8', k: 'demo', t: "El comptador de passes|El contador de pasos", x: "La casa no és al final del passadís. El comptador diu quan en Bit ha tornat.|La casa no está al final del pasillo. El contador dice cuándo Bit ha vuelto.",
        demo: { w: { map: ['.......', '#H>##b#', '.......'] }, prog: 'until:box{ f add:1 } p r r until:cnt=0{ f sub:1 } f d' },
        nota: "Fes que la classe digui el valor del comptador a cada pas: 1, 2, 3 a l'anada; 2, 1, 0 a la tornada.|Haz que la clase diga el valor del contador en cada paso: 1, 2, 3 a la ida; 2, 1, 0 a la vuelta." },
      { id: 's9', k: 'activitat', t: "Rescat a la cova del terra|Rescate en la cueva del suelo", timer: 12, punts: ["Per parelles: el pla al full.|Por parejas: el plan en la hoja.", "En grups: el pla amb targetes.|En grupos: el plan con tarjetas.", "El robot fa el rescat a la cova del terra.|El robot hace el rescate en la cueva del suelo.", "Movem la caixa: el programa encara funciona?|Movemos la caja: ¿el programa todavía funciona?"],
        nota: "La casa ha de tocar la paret de l'entrada perquè el bucle de tornada pari just allà.|La casa tiene que tocar la pared de la entrada para que el bucle de vuelta pare justo allí." },
      { id: 's10', k: 'concepte', t: "Les regles del rescat|Las reglas del rescate", punts: ["Només una caixa cada vegada.|Solo una caja cada vez.", "Només es deixa en una casa.|Solo se deja en una casa.", "Cada tros recte és un bucle.|Cada trozo recto es un bucle.", "Prova el pla abans de canviar res.|Prueba el plan antes de cambiar nada."],
        nota: "Són les regles del repartidor de la unitat 1, ara amb bucles amb condició.|Son las reglas del repartidor de la unidad 1, ahora con bucles con condición." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Projecte: rescat a la cova».|Abre la sesión «Proyecto: rescate en la cueva».", "Abans de cada repte, digues el pla en veu alta.|Antes de cada reto, di el plan en voz alta.", "Para quan acabis el comptador de passes.|Para cuando termines el contador de pasos."],
        nota: "Fixa't en qui fa servir «fins que hi hagi un obstacle» per anar a la caixa.|Fíjate en quién usa «hasta que haya un obstáculo» para ir a la caja." },
      { id: 's12', k: 'repte', t: "El passadís amb revolt|El pasillo con curva", timer: 4, x: "El programa és gairebé bo: a la tornada, en Bit gira cap al costat equivocat.|El programa es casi bueno: a la vuelta, Bit gira hacia el lado equivocado.",
        nota: "Pista: a l'anada gira a la dreta per baixar; a la tornada puja i la casa queda a la seva esquerra.|Pista: a la ida gira a la derecha para bajar; a la vuelta sube y la casa queda a su izquierda." },
      { id: 's13', k: 'concepte', t: "Projecte: fes el pla|Proyecto: haz el plan", punts: ["Per on entra en Bit i on gira?|¿Por dónde entra Bit y dónde gira?", "On és la caixa?|¿Dónde está la caja?", "Com torna fins a la casa?|¿Cómo vuelve hasta la casa?", "Escriu els trossos al full i prova cada tros.|Escribe los trozos en la hoja y prueba cada trozo."],
        nota: "No deixis començar a programar fins que cada alumne/a tingui el pla escrit o dit.|No dejes empezar a programar hasta que cada alumno/a tenga el plan escrito o dicho." },
      { id: 's14', k: 'activitat', t: "Projecte: rescat a la cova|Proyecto: rescate en la cueva", timer: 11, x: "Rescata la caixa, recull les estrelles i deixa la caixa a la casa. Ha de funcionar a les dues coves.|Rescata la caja, recoge las estrellas y deja la caja en la casa. Tiene que funcionar en las dos cuevas.",
        nota: "Qui acabi pot afegir una celebració amb llums o notes, o ajudar un company/a amb preguntes.|Quien termine puede añadir una celebración con luces o notas, o ayudar a un compañero/a con preguntas." },
      { id: 's15', k: 'activitat', t: "Presentem els projectes|Presentamos los proyectos", timer: 5, punts: ["Quin és el teu pla?|¿Cuál es tu plan?", "On para cada bucle?|¿Dónde para cada bucle?", "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?"],
        nota: "Abans d'executar cada projecte, que la classe predigui on para el primer bucle.|Antes de ejecutar cada proyecto, que la clase prediga dónde para el primer bucle." },
      { id: 's16', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["«Repeteix fins que…» para quan es compleix la condició.|«Repite hasta que…» para cuando se cumple la condición.", "El mateix programa serveix per a camins de qualsevol llargada.|El mismo programa sirve para caminos de cualquier longitud.", "Un «si» dins del bucle fa que en Bit decideixi a cada pas.|Un «si» dentro del bucle hace que Bit decida en cada paso.", "Un projecte gran es fa a trossos i es prova a cada cova.|Un proyecto grande se hace a trozos y se prueba en cada cueva."],
        nota: "Felicita la classe per acabar la unitat. Avança que a la unitat 8 dissenyaran el seu propi repte.|Felicita a la clase por terminar la unidad. Avanza que en la unidad 8 diseñarán su propio reto." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quina diferència hi ha entre «Repeteix 5 vegades» i «Repeteix fins que…»?|¿Qué diferencia hay entre «Repite 5 veces» y «Repite hasta que…»?", "Digues el pla del rescat en cinc trossos.|Di el plan del rescate en cinco trozos."],
        nota: "Respostes: un número fix de vegades o fins que es compleix una condició; fins a la caixa, agafar, mitja volta, fins a la paret, deixar.|Respuestas: un número fijo de veces o hasta que se cumple una condición; hasta la caja, coger, media vuelta, hasta la pared, dejar." }
    ],
    print: [
      { id: 'p1', t: "Full de pla del rescat|Hoja de plan del rescate", k: 'fitxa',
        intro: "Primer penseu el pla amb paraules, després passeu-lo a targetes o a blocs. Recordeu: una caixa cada vegada i només es deixa en una casa.|Primero pensad el plan con palabras, después pasadlo a tarjetas o a bloques. Recordad: una caja cada vez y solo se deja en una casa.",
        items: [
          { q: "Escriu amb paraules els cinc trossos del rescat d'una caixa.|Escribe con palabras los cinco trozos del rescate de una caja.",
            sol: "1) Avança fins que hi hagi una caixa; 2) agafa-la; 3) fes mitja volta; 4) avança fins que hi hagi un obstacle; 5) deixa-la a la casa.|1) Avanza hasta que haya una caja; 2) cógela; 3) da media vuelta; 4) avanza hasta que haya un obstáculo; 5) déjala en la casa." },
          { q: "Passa el pla a blocs per a aquest passadís. Funcionaria igual si la caixa fos més endins?|Pasa el plan a bloques para este pasillo. ¿Funcionaría igual si la caja estuviera más adentro?",
            w: { map: ['.......', 'H>#b###', '.......'] }, solProg: 'until:box{ f } p r r until:wall{ f } d',
            sol: "Fins que hi hagi una caixa: Endavant · Agafa · Gira, Gira · Fins que hi hagi un obstacle: Endavant · Deixa. Sí: els bucles paren on toca.|Hasta que haya una caja: Adelante · Coge · Gira, Gira · Hasta que haya un obstáculo: Adelante · Deja. Sí: los bucles paran donde toca." },
          { q: "Passadís amb revolt: escriu el programa. Compte amb el gir de la tornada!|Pasillo con curva: escribe el programa. ¡Cuidado con el giro de la vuelta!",
            w: { map: ['.......', 'H>###..', '....#..', '....b..'] }, solProg: 'until:wall{ f } r until:box{ f } p r r until:wall{ f } l until:wall{ f } d',
            sol: "Fins a l'obstacle · Gira a la dreta · Fins a la caixa · Agafa · Gira, Gira · Fins a l'obstacle · Gira a l'esquerra · Fins a l'obstacle · Deixa.|Hasta el obstáculo · Gira a la derecha · Hasta la caja · Coge · Gira, Gira · Hasta el obstáculo · Gira a la izquierda · Hasta el obstáculo · Deja." },
          { q: "El teu projecte: dibuixa per on anirà en Bit a les dues coves de l'app i escriu els trossos del pla.|Tu proyecto: dibuja por dónde irá Bit en las dos cuevas de la app y escribe los trozos del plan.",
            sol: "Resposta oberta. Comproveu que cada tros recte acaba en una caixa o en un obstacle i que el gir de tornada és el contrari del d'anada.|Respuesta abierta. Comprobad que cada trozo recto termina en una caja o en un obstáculo y que el giro de vuelta es el contrario del de ida." }
        ] },
      { id: 'p2', t: "Targetes del rescat|Tarjetas del rescate", k: 'targetes',
        intro: "Afegiu aquestes targetes a les de la unitat. La cova del terra es fa amb cadires o motxilles; la casa va a l'entrada, tocant a la paret.|Añadid estas tarjetas a las de la unidad. La cueva del suelo se hace con sillas o mochilas; la casa va en la entrada, tocando la pared.",
        items: [
          { t: "Repeteix fins que… 🔁|Repite hasta que… 🔁", n: 2 },
          { t: "hi hagi una caixa 📦|haya una caja 📦", n: 2 },
          { t: "hi hagi un obstacle davant 🪨|haya un obstáculo delante 🪨", n: 2 },
          { t: "Agafa la caixa 📦⬆|Coge la caja 📦⬆", n: 1 },
          { t: "Deixa la caixa 📦⬇|Deja la caja 📦⬇", n: 1 },
          { t: "Mitja volta 🔄|Media vuelta 🔄", n: 1 },
          { t: "Casa del campament 🏠|Casa del campamento 🏠", n: 1 },
          { t: "Caixa de l'expedició 📦|Caja de la expedición 📦", n: 1 }
        ] }
    ]
  }
});

/* ==================== Tech Robot · unitat 8 «El meu projecte» ==================== */
/* Tech Robot · unitat 8 «El meu projecte» · guia del professorat (r8-1 … r8-4)
   Projecte final del curs: cada alumne/a dissenya un repte propi per a en Bit (r8-1), el programa i el millora (r8-2),
   el fa provar a un company/a i rep comentaris (r8-3) i el presenta a la classe abans de rebre el diploma (r8-4).
   El mapa de cada alumne/a es desa a l'app (editor «Dissenya») i es recupera a totes les sessions de la unitat. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Dissenya el teu repte ---------- */
  'r8-1': {
    obj: [
      "L'alumne/a explica què fa que un repte sigui bo: un objectiu clar, obstacles, una dificultat ajustada i una solució.|El alumno/a explica qué hace que un reto sea bueno: un objetivo claro, obstáculos, una dificultad ajustada y una solución.",
      "L'alumne/a aplica en reptes curts les eines principals del curs: bucles, condicions, funcions i variables.|El alumno/a aplica en retos cortos las herramientas principales del curso: bucles, condiciones, funciones y variables.",
      "L'alumne/a dibuixa en paper l'esbós d'un repte propi i comprova, amb l'ajuda d'un company/a, que té solució.|El alumno/a dibuja en papel el boceto de un reto propio y comprueba, con la ayuda de un compañero/a, que tiene solución.",
      "L'alumne/a passa l'esbós a l'editor de l'app, li posa un nom i el desa.|El alumno/a pasa el boceto al editor de la app, le pone un nombre y lo guarda."
    ],
    comp: [
      "Competència digital (CD5): dissenyar un artefacte digital senzill (un repte programable) i comprovar-ne el funcionament|Competencia digital (CD5): diseñar un artefacto digital sencillo (un reto programable) y comprobar su funcionamiento",
      "Pensament computacional: abstracció i disseny d'un problema; repàs de bucles, condicions, funcions i variables|Pensamiento computacional: abstracción y diseño de un problema; repaso de bucles, condiciones, funciones y variables",
      "Matemàtiques (sentit espacial): representar recorreguts en una quadrícula i comptar caselles|Matemáticas (sentido espacial): representar recorridos en una cuadrícula y contar casillas",
      "Educació artística: de l'esbós a la versió final d'un disseny|Educación artística: del boceto a la versión final de un diseño"
    ],
    vocab: [
      ["Repte|Reto", "Un problema per resoldre amb un objectiu clar: arribar a la bandera, recollir estrelles, repartir caixes…|Un problema para resolver con un objetivo claro: llegar a la bandera, recoger estrellas, repartir cajas…"],
      ["Objectiu|Objetivo", "El que ha d'aconseguir en Bit perquè el repte estigui resolt.|Lo que tiene que conseguir Bit para que el reto esté resuelto."],
      ["Obstacle|Obstáculo", "Una cosa que fa pensar el camí: roques, aigua, arbres, revolts.|Algo que hace pensar el camino: rocas, agua, árboles, curvas."],
      ["Esbós|Boceto", "Un dibuix ràpid per pensar una idea abans de construir-la.|Un dibujo rápido para pensar una idea antes de construirla."],
      ["Al punt|En su punto", "Un repte que fa pensar però es pot resoldre: ni massa fàcil ni impossible.|Un reto que hace pensar pero se puede resolver: ni demasiado fácil ni imposible."],
      ["Dissenyador/a|Diseñador/a", "La persona que pensa i dibuixa com serà una cosa abans de fer-la.|La persona que piensa y dibuja cómo será algo antes de hacerlo."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Dissenya el teu repte»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Diseña tu reto»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis, goma i colors per a cada alumne/a|Lápiz, goma y colores para cada alumno/a",
        "Una carpeta o un sobre per alumne/a per guardar l'esbós durant tota la unitat|Una carpeta o un sobre por alumno/a para guardar el boceto durante toda la unidad"
      ],
      imprimir: ["Graella del meu repte (dues per alumne/a)|Cuadrícula de mi reto (dos por alumno/a)", "Fitxa: és un bon repte?|Ficha: ¿es un buen reto?"],
      prep: [
        "Imprimir dues graelles per alumne/a (una per a l'esbós i una de recanvi) i unes quantes fitxes «És un bon repte?» per als que acabin abans.|Imprimir dos cuadrículas por alumno/a (una para el boceto y una de recambio) y unas cuantas fichas «¿Es un buen reto?» para los que terminen antes.",
        "Provar abans l'editor «Dissenya» de l'app: les eines, com es gira en Bit tocant-lo dues vegades i què passa quan es dibuixa un camí.|Probar antes el editor «Diseña» de la app: las herramientas, cómo se gira a Bit tocándolo dos veces y qué pasa cuando se dibuja un camino.",
        "Decidir les parelles per a la prova del dit: seran les mateixes que a la sessió 3, quan es provaran els reptes a l'ordinador.|Decidir las parejas para la prueba del dedo: serán las mismas que en la sesión 3, cuando se probarán los retos en el ordenador.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda a la Fira dels Reptes|Bienvenida a la Feria de los Retos", fase: 'inici',
        fa: "Presenta la darrera unitat: durant quatre sessions, cada alumne/a crearà el seu propi repte per a en Bit. Pregunta quin repte del curs els ha agradat més i per què, i apunta a la pissarra les raons (tenia revolts, calia pensar, sortia a la primera…). Explica el pla de les quatre sessions amb la diapositiva 3.|Presenta la última unidad: durante cuatro sesiones, cada alumno/a creará su propio reto para Bit. Pregunta qué reto del curso les ha gustado más y por qué, y apunta en la pizarra las razones (tenía curvas, había que pensar, salía a la primera…). Explica el plan de las cuatro sesiones con la diapositiva 3.",
        diu: ["Quin repte d'en Bit us ha agradat més de tot el curs? Per què?|¿Qué reto de Bit os ha gustado más de todo el curso? ¿Por qué?",
          "Fins ara els reptes els fèiem nosaltres. Ara us toca a vosaltres: sereu els dissenyadors!|Hasta ahora los retos los hacíamos nosotros. Ahora os toca a vosotros: ¡seréis los diseñadores!",
          "Al final de la unitat, el vostre repte el provarà un company/a i el presentareu a tothom.|Al final de la unidad, vuestro reto lo probará un compañero/a y lo presentaréis a todo el mundo."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què fa bo un repte?|¿Qué hace bueno un reto?", fase: 'teoria',
        fa: "Repassa la caixa d'eines del curs: per a cada eina, demana un exemple d'on l'han fet servir. Explica les quatre condicions d'un bon repte amb l'animació i el mesurador «al punt». Projecta les dues demostracions: abans d'executar-les, la classe diu quants blocs calen i si el repte és massa fàcil o està al punt. Acaba amb la idea de l'esbós en paper.|Repasa la caja de herramientas del curso: para cada herramienta, pide un ejemplo de dónde la han usado. Explica las cuatro condiciones de un buen reto con la animación y el medidor «en su punto». Proyecta las dos demostraciones: antes de ejecutarlas, la clase dice cuántos bloques hacen falta y si el reto es demasiado fácil o está en su punto. Termina con la idea del boceto en papel.",
        diu: ["On heu fet servir un bucle? I un «Si…»? I una funció?|¿Dónde habéis usado un bucle? ¿Y un «Si…»? ¿Y una función?",
          "Un repte on la bandera és al costat d'en Bit… és un bon repte? I un on no s'hi pot arribar?|Un reto donde la bandera está al lado de Bit… ¿es un buen reto? ¿Y uno donde no se puede llegar?",
          "Un bon repte és com un regal: l'heu de pensar per a la persona que el resoldrà.|Un buen reto es como un regalo: lo tenéis que pensar para la persona que lo resolverá."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "L'estudi de disseny: el repte en paper|El estudio de diseño: el reto en papel", fase: 'desconnectat',
        fa: "Cada alumne/a dibuixa l'esbós del seu repte a la graella (7 × 6, la mateixa mida que l'editor de l'app) amb els símbols de la llegenda i respon les preguntes de sota. Després de 7 minuts, fes la prova del dit: cada alumne/a passa la graella al company/a, que segueix el camí amb el dit sense dir res i, al final, diu si li ha semblat massa fàcil, al punt o impossible. L'autor/a pot fer un canvi abans de guardar la graella a la carpeta.|Cada alumno/a dibuja el boceto de su reto en la cuadrícula (7 × 6, el mismo tamaño que el editor de la app) con los símbolos de la leyenda y responde las preguntas de abajo. Después de 7 minutos, haz la prueba del dedo: cada alumno/a pasa la cuadrícula al compañero/a, que sigue el camino con el dedo sin decir nada y, al final, dice si le ha parecido demasiado fácil, en su punto o imposible. El autor/a puede hacer un cambio antes de guardar la cuadrícula en la carpeta.",
        diu: ["Primer decidiu l'objectiu: què haurà de fer en Bit? Escriviu-ho a sota de la graella.|Primero decidid el objetivo: ¿qué tendrá que hacer Bit? Escribidlo debajo de la cuadrícula.",
          "Dibuixeu la fletxa d'en Bit mirant cap on comença.|Dibujad la flecha de Bit mirando hacia donde empieza.",
          "A la prova del dit, el company/a només segueix el camí i diu: massa fàcil, al punt o impossible.|En la prueba del dedo, el compañero/a solo sigue el camino y dice: demasiado fácil, en su punto o imposible."],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 10, t: "A l'ordinador: descobreix i escalfa motors|En el ordenador: descubre y calienta motores", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança al seu ritme fins a «On acabarà?». Al pas «Un repte per a algú de casa», que toquin «Ara no»: és per fer a casa. Projecta la demostració de la diapositiva 13 quan la majoria hi arribi i deixa que la classe digui la lletra abans d'executar-la.|Cada alumno/a abre la sesión y avanza a su ritmo hasta «¿Dónde terminará?». En el paso «Un reto para alguien de casa», que toquen «Ahora no»: es para hacer en casa. Proyecta la demostración de la diapositiva 13 cuando la mayoría llegue y deja que la clase diga la letra antes de ejecutarla.",
        diu: ["Al quiz dels tres reptes, quin és massa fàcil? I quin és impossible?|En el quiz de los tres retos, ¿cuál es demasiado fácil? ¿Y cuál es imposible?",
          "On acabarà en Bit? Seguiu el bucle amb el dit: dues vegades «Endavant, Endavant, Gira».|¿Dónde terminará Bit? Seguid el bucle con el dedo: dos veces «Adelante, Adelante, Gira»."],
        slides: ['s12', 's13'], app: "De «Recorda» fins a «On acabarà?»: el bloc «fins que», les dues històries de la fira, les targetes de «Descobreix», el quiz del repte ben pensat, ordenar els passos del disseny, el repte per a casa (per més tard) i la predicció del bucle.|De «Recuerda» hasta «¿Dónde terminará?»: el bloque «hasta que», las dos historias de la feria, las tarjetas de «Descubre», el quiz del reto bien pensado, ordenar los pasos del diseño, el reto para casa (para más tarde) y la predicción del bucle.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: una eina, un repte|Retos: una herramienta, un reto", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després, cada alumne/a resol els quatre reptes de repàs: el terra de colors (bucle i llapis), les tres illes (condicions i «fins que»), «Salta la roca» (funcions) i el comptador d'estrelles (variables). Qui acabi aviat agafa la fitxa «És un bon repte?».|Haced la pausa activa todos juntos. Después, cada alumno/a resuelve los cuatro retos de repaso: el suelo de colores (bucle y lápiz), las tres islas (condiciones y «hasta que»), «Salta la roca» (funciones) y el contador de estrellas (variables). Quien termine pronto coge la ficha «¿Es un buen reto?».",
        diu: ["Quin tros es repeteix? Aquest va dins del «Repeteix».|¿Qué trozo se repite? Ese va dentro del «Repite».",
          "A les tres illes, el camí canvia: què ha de mirar en Bit a cada pas?|En las tres islas, el camino cambia: ¿qué tiene que mirar Bit en cada paso?",
          "Quan acaba la funció «Salta la roca», cap on mira en Bit?|Cuando termina la función «Salta la roca», ¿hacia dónde mira Bit?"],
        slides: ['s14'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 10, t: "Crea: el teu repte a la pantalla|Crea: tu reto en la pantalla", fase: 'crea',
        fa: "Cada alumne/a té l'esbós al costat i el copia a l'editor «Dissenya»: tria una eina, toca les caselles, posa en Bit (tocant-lo una altra vegada gira) i escriu el nom del repte. L'editor no deixa desar fins que totes les comprovacions són verdes. Passeja per l'aula i pregunta per l'objectiu de cada repte.|Cada alumno/a tiene el boceto al lado y lo copia en el editor «Diseña»: elige una herramienta, toca las casillas, pone a Bit (tocándolo otra vez gira) y escribe el nombre del reto. El editor no deja guardar hasta que todas las comprobaciones están en verde. Pasea por el aula y pregunta por el objetivo de cada reto.",
        diu: ["Si dibuixes un camí, la resta de l'illa es torna bosc. És el que vols?|Si dibujas un camino, el resto de la isla se vuelve bosque. ¿Es lo que quieres?",
          "Quin nom li posaràs? Un bon nom diu de què va el repte.|¿Qué nombre le pondrás? Un buen nombre dice de qué va el reto.",
          "Una comprovació no es posa verda? Llegeix-la: et diu què falta.|¿Una comprobación no se pone verde? Léela: te dice qué falta."],
        slides: ['s15'], app: "Pas «Crea»: l'editor «Dissenya» (es desa el mapa del repte, que es farà servir a les sessions següents).|Paso «Crea»: el editor «Diseña» (se guarda el mapa del reto, que se usará en las sesiones siguientes).", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum. Deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida a la porta. Recull les graelles a les carpetes: les farem servir a la sessió 3.|Repasa las tres ideas de la sesión con el resumen. Deja que respondan las preguntas finales de la app y haz el ticket de salida en la puerta. Recoge las cuadrículas en las carpetas: las usaremos en la sesión 3.",
        diu: ["Digueu-me una cosa que ha de tenir un bon repte.|Decidme algo que tiene que tener un buen reto.",
          "La setmana vinent programareu el vostre repte. Ja sabeu com el resoldreu?|La semana que viene programaréis vuestro reto. ¿Ya sabéis cómo lo resolveréis?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Dissenya un repte impossible: la bandera queda tancada entre roques o aigua.|Diseña un reto imposible: la bandera queda encerrada entre rocas o agua.",
        "Demana-li que faci la prova del dit des d'en Bit fins a la bandera. A l'app, que miri la comprovació «En Bit pot arribar a tot» i busqui per on es tanca el camí.|Pídele que haga la prueba del dedo desde Bit hasta la bandera. En la app, que mire la comprobación «Bit puede llegar a todo» y busque por dónde se cierra el camino."],
      ["Fa un repte massa fàcil: la bandera és a una o dues caselles d'en Bit.|Hace un reto demasiado fácil: la bandera está a una o dos casillas de Bit.",
        "Pregunta-li quants blocs caldrien per resoldre'l. Proposa-li allunyar la bandera o posar un obstacle al mig, i que pensi quina eina del curs faria servir el provador/a.|Pregúntale cuántos bloques harían falta para resolverlo. Propónle alejar la bandera o poner un obstáculo en medio, y que piense qué herramienta del curso usaría el probador/a."],
      ["Omple el mapa de coses sense un objectiu clar (estrelles, caixes i bandera barrejades).|Llena el mapa de cosas sin un objetivo claro (estrellas, cajas y bandera mezcladas).",
        "Demana-li que digui l'objectiu en una sola frase: «En Bit ha de…». Si no pot, que triï un objectiu i tregui el que no hi encaixa.|Pídele que diga el objetivo en una sola frase: «Bit tiene que…». Si no puede, que elija un objetivo y quite lo que no encaja."],
      ["Dibuixa un camí a l'editor i no entén per què han aparegut arbres a la resta de caselles.|Dibuja un camino en el editor y no entiende por qué han aparecido árboles en el resto de casillas.",
        "Llegiu junts l'ajuda de l'eina «Camí»: si hi ha camí, en Bit només hi pot anar per dins. Pot fer un mapa tot d'herba (sense camí) o dibuixar el camí sencer.|Leed juntos la ayuda de la herramienta «Camino»: si hay camino, Bit solo puede ir por dentro. Puede hacer un mapa todo de hierba (sin camino) o dibujar el camino entero."],
      ["Al repte «Salta la roca», la funció no acaba mirant cap a la dreta i el segon salt falla.|En el reto «Salta la roca», la función no termina mirando hacia la derecha y el segundo salto falla.",
        "Que executi pas a pas i s'aturi just quan acaba la primera crida: cap on mira en Bit? Què li falta perquè torni a mirar a la dreta?|Que ejecute paso a paso y se pare justo cuando termina la primera llamada: ¿hacia dónde mira Bit? ¿Qué le falta para que vuelva a mirar a la derecha?"]
    ],
    diff: {
      mes: "Fer la fitxa «És un bon repte?» i, després, afegir al seu esbós un segon objectiu (una caixa per repartir o estrelles) que obligui a fer servir una eina diferent. També poden dissenyar una versió «difícil» a la graella de recanvi.|Hacer la ficha «¿Es un buen reto?» y, después, añadir a su boceto un segundo objetivo (una caja para repartir o estrellas) que obligue a usar una herramienta diferente. También pueden diseñar una versión «difícil» en la cuadrícula de recambio.",
      menys: "Començar amb un mapa més petit (fer servir només 5 × 4 caselles de la graella) i un sol objectiu: arribar a la bandera amb un parell de revolts. Als reptes de repàs, fer primer el del terra de colors i el de les estrelles, amb la pista a mà.|Empezar con un mapa más pequeño (usar solo 5 × 4 casillas de la cuadrícula) y un solo objetivo: llegar a la bandera con un par de curvas. En los retos de repaso, hacer primero el del suelo de colores y el de las estrellas, con la pista a mano."
    },
    aval: {
      ticket: ["Digues dues coses que ha de tenir un bon repte.|Di dos cosas que tiene que tener un buen reto.",
        "Quin és l'objectiu del teu repte i quin obstacle hi has posat?|¿Cuál es el objetivo de tu reto y qué obstáculo has puesto?"],
      rubric: [
        ["Criteris d'un bon repte|Criterios de un buen reto", "Explica que un bon repte té objectiu, obstacles i solució, i reconeix un repte massa fàcil o impossible.|Explica que un buen reto tiene objetivo, obstáculos y solución, y reconoce un reto demasiado fácil o imposible.", "Reconeix un bon repte quan el veu, però encara no diu per què.|Reconoce un buen reto cuando lo ve, pero todavía no dice por qué."],
        ["Repàs de les eines|Repaso de las herramientas", "Resol els quatre reptes de repàs triant l'eina adequada (bucle, condició, funció, variable).|Resuelve los cuatro retos de repaso eligiendo la herramienta adecuada (bucle, condición, función, variable).", "Resol dos o tres reptes, o els quatre amb pistes.|Resuelve dos o tres retos, o los cuatro con pistas."],
        ["Disseny propi|Diseño propio", "Dibuixa l'esbós, el passa a l'editor i el desa amb un objectiu clar i un camí possible.|Dibuja el boceto, lo pasa al editor y lo guarda con un objetivo claro y un camino posible.", "Desa un repte a l'editor, però és massa fàcil o li costa explicar-ne l'objectiu.|Guarda un reto en el editor, pero es demasiado fácil o le cuesta explicar su objetivo."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla us pot ensenyar el repte que ha dissenyat i explicar-vos-en l'objectiu. També podeu fer junts l'activitat «Un repte per a algú de casa»: una habitació es converteix en l'illa d'en Bit i una persona fa de robot.|En casa, con el móvil, vuestro hijo o hija os puede enseñar el reto que ha diseñado y explicaros su objetivo. También podéis hacer juntos la actividad «Un reto para alguien de casa»: una habitación se convierte en la isla de Bit y una persona hace de robot.",
    slides: [
      { id: 's1', k: 'portada', t: "Dissenya el teu repte|Diseña tu reto", x: "Comença el projecte final: cada programador/a crearà un repte per a en Bit.|Empieza el proyecto final: cada programador/a creará un reto para Bit.",
        nota: "Explica que aquesta és l'última unitat del curs i que el protagonista serà el repte de cadascú.|Explica que esta es la última unidad del curso y que el protagonista será el reto de cada uno." },
      { id: 's2', k: 'pregunta', t: "El vostre repte preferit|Vuestro reto preferido", x: "Quin repte d'en Bit us ha agradat més de tot el curs? Per què?|¿Qué reto de Bit os ha gustado más de todo el curso? ¿Por qué?",
        nota: "Apunta les raons a la pissarra: les farem servir per definir què fa bo un repte.|Apunta las razones en la pizarra: las usaremos para definir qué hace bueno un reto." },
      { id: 's3', k: 'concepte', t: "La Fira dels Reptes|La Feria de los Retos", punts: ["Sessió 1: dissenyes el teu repte|Sesión 1: diseñas tu reto", "Sessió 2: el programes i el millores|Sesión 2: lo programas y lo mejoras", "Sessió 3: el prova un company/a|Sesión 3: lo prueba un compañero/a", "Sessió 4: el presentes i reps el diploma|Sesión 4: lo presentas y recibes el diploma"],
        nota: "Deixa clar que el repte es guarda a l'app i que el treballaran durant les quatre sessions.|Deja claro que el reto se guarda en la app y que lo trabajarán durante las cuatro sesiones." },
      { id: 's4', k: 'anim', t: "La caixa d'eines|La caja de herramientas", anim: 'u8tools', x: "Tot el que heu après aquest curs, a punt per fer-lo servir.|Todo lo que habéis aprendido este curso, listo para usarlo.",
        nota: "Per a cada eina, demana un exemple: on l'heu fet servir? Quin repte resolia?|Para cada herramienta, pide un ejemplo: ¿dónde la habéis usado? ¿Qué reto resolvía?" },
      { id: 's5', k: 'anim', t: "Un bon repte té…|Un buen reto tiene…", anim: 'u8good', punts: ["Un objectiu clar|Un objetivo claro", "Obstacles que fan pensar|Obstáculos que hacen pensar", "Una dificultat al punt|Una dificultad en su punto", "Una solució|Una solución"],
        nota: "Relaciona cada condició amb les raons que han dit a la diapositiva 2.|Relaciona cada condición con las razones que han dicho en la diapositiva 2." },
      { id: 's6', k: 'anim', t: "Ni massa fàcil ni impossible|Ni demasiado fácil ni imposible", anim: 'u8level', x: "El millor repte fa pensar, però té solució.|El mejor reto hace pensar, pero tiene solución.",
        nota: "Pregunta què senten amb un repte massa fàcil (avorriment) i amb un d'impossible (ràbia). El bon repte està al mig.|Pregunta qué sienten con un reto demasiado fácil (aburrimiento) y con uno imposible (rabia). El buen reto está en medio." },
      { id: 's7', k: 'demo', t: "Aquest repte és bo?|¿Este reto es bueno?", x: "Quants blocs calen per arribar a la bandera?|¿Cuántos bloques hacen falta para llegar a la bandera?",
        demo: { w: { map: ['>F...', '...R.', '.~...'] }, prog: 'f' },
        nota: "Abans d'executar, que diguin quants blocs calen. Resposta: un de sol. És massa fàcil: com el milloraríeu?|Antes de ejecutar, que digan cuántos bloques hacen falta. Respuesta: uno solo. Es demasiado fácil: ¿cómo lo mejoraríais?" },
      { id: 's8', k: 'demo', t: "Un repte al punt|Un reto en su punto", x: "Bandera, estrella, roques i aigua… i es pot resoldre amb bucles.|Bandera, estrella, rocas y agua… y se puede resolver con bucles.",
        demo: { w: { map: ['>##*.', 'R.R#.', '~~.#F'] }, prog: '3{ f } r 2{ f } l f' },
        nota: "Abans d'executar, que la classe digui el camí amb paraules. Fes notar l'objectiu, els obstacles i que té solució.|Antes de ejecutar, que la clase diga el camino con palabras. Haz notar el objetivo, los obstáculos y que tiene solución." },
      { id: 's9', k: 'anim', t: "Primer, en paper|Primero, en papel", anim: 'u8paper', x: "Un esbós ràpid per pensar la idea; després, a la pantalla.|Un boceto rápido para pensar la idea; después, a la pantalla.",
        nota: "Explica que els dissenyadors de veritat també fan esbossos: és més ràpid canviar un dibuix que un programa.|Explica que los diseñadores de verdad también hacen bocetos: es más rápido cambiar un dibujo que un programa." },
      { id: 's10', k: 'activitat', t: "L'estudi de disseny|El estudio de diseño", timer: 12, punts: ["Decideix l'objectiu i escriu-lo a sota.|Decide el objetivo y escríbelo debajo.", "Dibuixa en Bit amb una fletxa cap on mira.|Dibuja a Bit con una flecha hacia donde mira.", "Posa obstacles i, si vols, estrelles o caixes.|Pon obstáculos y, si quieres, estrellas o cajas.", "Quan acabis, passa la graella al company/a.|Cuando termines, pasa la cuadrícula al compañero/a."],
        nota: "Recorda que la graella té la mateixa mida que l'editor de l'app (7 × 6): no cal omplir-la tota.|Recuerda que la cuadrícula tiene el mismo tamaño que el editor de la app (7 × 6): no hace falta llenarla toda." },
      { id: 's11', k: 'activitat', t: "La prova del dit|La prueba del dedo", punts: ["El company/a segueix el camí amb el dit, sense parlar.|El compañero/a sigue el camino con el dedo, sin hablar.", "Després diu: massa fàcil, al punt o impossible.|Después dice: demasiado fácil, en su punto o imposible.", "L'autor/a pot fer un sol canvi.|El autor/a puede hacer un solo cambio."],
        nota: "Insisteix que la prova del dit no és per jutjar: és la primera prova del repte.|Insiste en que la prueba del dedo no es para juzgar: es la primera prueba del reto." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre la sessió «Dissenya el teu repte».|Abre la sesión «Diseña tu reto».", "Fes «Descobreix» i els quizzes.|Haz «Descubre» y los quizzes.", "El repte per a casa: toca «Ara no».|El reto para casa: toca «Ahora no».", "Para a la pausa activa.|Para en la pausa activa."],
        nota: "Comprova que tothom ha entès el quiz dels tres reptes: és el resum de la teoria.|Comprueba que todo el mundo ha entendido el quiz de los tres retos: es el resumen de la teoría." },
      { id: 's13', k: 'demo', t: "Escalfem: on acabarà?|Calentamos: ¿dónde terminará?", x: "En Bit mira amunt. Programa: Repeteix 2 vegades { Endavant, Endavant, Gira a la dreta }. A, B o C?|Bit mira arriba. Programa: Repite 2 veces { Adelante, Adelante, Gira a la derecha }. ¿A, B o C?",
        demo: { w: { map: ['A....', '##BC.', '#....', '^....'] }, prog: '2{ f f r }' },
        nota: "Resposta: B. Si algú diu A, potser ha fet el bucle una sola vegada; si diu C, ha comptat una casella de més.|Respuesta: B. Si alguien dice A, quizá ha hecho el bucle una sola vez; si dice C, ha contado una casilla de más." },
      { id: 's14', k: 'repte', t: "Una eina, un repte|Una herramienta, un reto", timer: 10, blocks: ['Repeteix|Repite', 'Si… si no…|Si… si no…', 'Funció|Función', 'Suma 1|Suma 1'],
        punts: ["1. El terra de colors: bucle i llapis|1. El suelo de colores: bucle y lápiz", "2. Les tres illes: condicions i «fins que»|2. Las tres islas: condiciones y «hasta que»", "3. Salta la roca: funcions|3. Salta la roca: funciones", "4. Compta les estrelles: variables|4. Cuenta las estrellas: variables"],
        nota: "Si algú s'encalla, pregunta-li quina eina del curs creu que demana el repte abans de donar-li cap pista.|Si alguien se atasca, pregúntale qué herramienta del curso cree que pide el reto antes de darle ninguna pista." },
      { id: 's15', k: 'activitat', t: "Crea: el teu repte a la pantalla|Crea: tu reto en la pantalla", timer: 10, punts: ["Tria una eina i toca les caselles.|Elige una herramienta y toca las casillas.", "Toca en Bit una altra vegada per girar-lo.|Toca a Bit otra vez para girarlo.", "Escriu el nom del repte.|Escribe el nombre del reto.", "Desa'l quan tot estigui en verd.|Guárdalo cuando todo esté en verde."],
        nota: "Si algú no ha acabat, pot desar-lo igualment (si les comprovacions són verdes) i millorar-lo a la sessió 2.|Si alguien no ha terminado, puede guardarlo igualmente (si las comprobaciones están en verde) y mejorarlo en la sesión 2." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un bon repte té objectiu, obstacles i solució.|Un buen reto tiene objetivo, obstáculos y solución.", "Ni massa fàcil ni impossible: al punt.|Ni demasiado fácil ni imposible: en su punto.", "Primer l'esbós en paper, després la pantalla.|Primero el boceto en papel, después la pantalla."],
        nota: "Avança que la setmana vinent programaran el seu propi repte i el faran encara millor.|Avanza que la semana que viene programarán su propio reto y lo harán todavía mejor." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Digues dues coses que ha de tenir un bon repte.|Di dos cosas que tiene que tener un buen reto.", "Quin és l'objectiu del teu repte?|¿Cuál es el objetivo de tu reto?"],
        nota: "Anota qui no ha pogut desar el repte: a la sessió 2 l'app li deixa dissenyar-lo abans de programar-lo.|Anota quién no ha podido guardar el reto: en la sesión 2 la app le deja diseñarlo antes de programarlo." }
    ],
    print: [
      { id: 'p1', t: "Graella del meu repte|Cuadrícula de mi reto", k: 'graella', w: 7, h: 6,
        intro: "Dibuixa el teu repte amb els símbols de la llegenda. La graella té la mateixa mida que l'editor de l'app: no cal omplir-la tota.|Dibuja tu reto con los símbolos de la leyenda. La cuadrícula tiene el mismo tamaño que el editor de la app: no hace falta llenarla toda.",
        items: [
          { q: "Quin és l'objectiu? «En Bit ha de…»|¿Cuál es el objetivo? «Bit tiene que…»" },
          { q: "Quins obstacles hi has posat? Per què fan pensar?|¿Qué obstáculos has puesto? ¿Por qué hacen pensar?" },
          { q: "Prova del dit (ho escriu el company/a): massa fàcil, al punt o impossible?|Prueba del dedo (lo escribe el compañero/a): ¿demasiado fácil, en su punto o imposible?" }
        ] },
      { id: 'p2', t: "Fitxa: és un bon repte?|Ficha: ¿es un buen reto?", k: 'fitxa',
        intro: "Mira cada repte i decideix si és massa fàcil, al punt o impossible. Explica per què.|Mira cada reto y decide si es demasiado fácil, en su punto o imposible. Explica por qué.",
        items: [
          { q: "Aquest repte és massa fàcil, al punt o impossible?|¿Este reto es demasiado fácil, en su punto o imposible?", w: { map: ['>F...', '.....', '..R..'] },
            sol: "Massa fàcil: amb un sol «Endavant» ja s'arriba a la bandera.|Demasiado fácil: con un solo «Adelante» ya se llega a la bandera." },
          { q: "I aquest?|¿Y este?", w: { map: ['>##~F', 'R.#~~', '..###'] },
            sol: "Impossible: l'aigua tanca la bandera i en Bit no hi pot arribar.|Imposible: el agua encierra la bandera y Bit no puede llegar." },
          { q: "I aquest? Si està al punt, escriu-ne una solució amb blocs.|¿Y este? Si está en su punto, escribe una solución con bloques.", w: { map: ['>##*.', 'R.R#.', '~~.#F'] }, solProg: '3{ f } r 2{ f } l f',
            sol: "Al punt: té objectiu, obstacles i solució.|En su punto: tiene objetivo, obstáculos y solución." },
          { q: "Tria el repte massa fàcil o l'impossible i explica com el canviaries perquè estigués al punt.|Elige el reto demasiado fácil o el imposible y explica cómo lo cambiarías para que estuviera en su punto.",
            sol: "Resposta oberta. Per exemple: allunyar la bandera i posar-hi una roca pel mig, o treure una casella d'aigua perquè hi hagi camí.|Respuesta abierta. Por ejemplo: alejar la bandera y poner una roca en medio, o quitar una casilla de agua para que haya camino." }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Construeix-lo i prova'l ---------- */
  'r8-2': {
    obj: [
      "L'alumne/a programa el seu propi repte fins que en Bit el resol.|El alumno/a programa su propio reto hasta que Bit lo resuelve.",
      "L'alumne/a localitza i corregeix errors fent servir l'execució pas a pas i canviant només el bloc que falla.|El alumno/a localiza y corrige errores usando la ejecución paso a paso y cambiando solo el bloque que falla.",
      "L'alumne/a millora el mapa del seu repte després de provar-lo.|El alumno/a mejora el mapa de su reto después de probarlo.",
      "L'alumne/a escurça un programa amb bucles o funcions sense canviar el que fa.|El alumno/a acorta un programa con bucles o funciones sin cambiar lo que hace."
    ],
    comp: [
      "Competència digital (CD5): crear, provar i depurar un programa propi|Competencia digital (CD5): crear, probar y depurar un programa propio",
      "Pensament computacional: depuració, iteració (dissenya → programa → prova → millora) i abstracció amb bucles i funcions|Pensamiento computacional: depuración, iteración (diseña → programa → prueba → mejora) y abstracción con bucles y funciones",
      "Matemàtiques: comptar i comparar el nombre de blocs de dos programes que fan el mateix|Matemáticas: contar y comparar el número de bloques de dos programas que hacen lo mismo",
      "Aprendre a aprendre: perseverar davant l'error i entendre'l com a part del procés|Aprender a aprender: perseverar ante el error y entenderlo como parte del proceso"
    ],
    vocab: [
      ["Provar|Probar", "Executar el programa per veure si fa el que volíem.|Ejecutar el programa para ver si hace lo que queríamos."],
      ["Depurar|Depurar", "Buscar l'error d'un programa i arreglar-lo.|Buscar el error de un programa y arreglarlo."],
      ["Cicle|Ciclo", "Dissenyar, programar, provar i millorar, i tornar a començar.|Diseñar, programar, probar y mejorar, y volver a empezar."],
      ["Versió|Versión", "Cada vegada que canviem i millorem un programa o un mapa, en fem una versió nova.|Cada vez que cambiamos y mejoramos un programa o un mapa, hacemos una versión nueva."],
      ["Programa més curt|Programa más corto", "Un programa que fa el mateix amb menys blocs, gràcies als bucles i les funcions.|Un programa que hace lo mismo con menos bloques, gracias a los bucles y las funciones."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Construeix-lo i prova'l»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Constrúyelo y pruébalo»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La carpeta de cada alumne/a amb la graella de la sessió 1|La carpeta de cada alumno/a con la cuadrícula de la sesión 1",
        "Llapis de color vermell (per marcar bugs) i llapis normal|Lápiz de color rojo (para marcar bugs) y lápiz normal"
      ],
      imprimir: ["Fitxa del depurador/a|Ficha del depurador/a", "Graella: versió 2 del meu repte|Cuadrícula: versión 2 de mi reto"],
      prep: [
        "Imprimir una fitxa del depurador/a per parella i una graella «versió 2» per alumne/a.|Imprimir una ficha del depurador/a por pareja y una cuadrícula «versión 2» por alumno/a.",
        "Comprovar qui no va desar el repte a la sessió 1: a l'app, el primer pas «Dissenya» li deixarà crear-lo ara.|Comprobar quién no guardó el reto en la sesión 1: en la app, el primer paso «Diseña» le dejará crearlo ahora.",
        "Provar abans la demostració de la diapositiva 5 per saber on xoca en Bit.|Probar antes la demostración de la diapositiva 5 para saber dónde choca Bit.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i el laboratori de proves|Recordamos y el laboratorio de pruebas", fase: 'inici',
        fa: "Fes la pregunta de repàs sobre què ha de tenir un bon repte. Explica la missió d'avui: al laboratori de proves de l'illa, els inventors construeixen, proven i milloren. Cada alumne/a té la graella de la sessió 1 a la taula.|Haz la pregunta de repaso sobre qué tiene que tener un buen reto. Explica la misión de hoy: en el laboratorio de pruebas de la isla, los inventores construyen, prueban y mejoran. Cada alumno/a tiene la cuadrícula de la sesión 1 en la mesa.",
        diu: ["Què ha de tenir un bon repte? Digueu-me les quatre coses.|¿Qué tiene que tener un buen reto? Decidme las cuatro cosas.",
          "Avui el vostre repte cobrarà vida: el programareu i el provareu.|Hoy vuestro reto cobrará vida: lo programaréis y lo probaréis."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El cicle del programador/a|El ciclo del programador/a", fase: 'teoria',
        fa: "Explica el cicle dissenya → programa → prova → millora amb l'animació. Projecta la demostració del bug: abans d'executar-la, la classe prediu on xocarà en Bit. Repassa com es caça un bug i mostra com un bucle i una funció escurcen un programa; a la darrera demostració, compteu quants blocs s'estalvien.|Explica el ciclo diseña → programa → prueba → mejora con la animación. Proyecta la demostración del bug: antes de ejecutarla, la clase predice dónde chocará Bit. Repasa cómo se caza un bug y muestra cómo un bucle y una función acortan un programa; en la última demostración, contad cuántos bloques se ahorran.",
        diu: ["Algú creu que els programadors ho encerten a la primera?|¿Alguien cree que los programadores lo aciertan a la primera?",
          "On xocarà en Bit? A quin bloc és el bug?|¿Dónde chocará Bit? ¿En qué bloque está el bug?",
          "Sense la funció, quants blocs caldrien? I amb la funció?|Sin la función, ¿cuántos bloques harían falta? ¿Y con la función?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Els depuradors|Los depuradores", fase: 'desconnectat',
        fa: "Per parelles, fan la fitxa del depurador/a: als dos primers exercicis, troben el bug (el marquen en vermell) i escriuen el bloc correcte; al tercer i al quart, escriuen una versió més curta amb un bucle o una funció. Després, cadascú dibuixa a la graella «versió 2» un canvi que vulgui fer al seu repte. Si hi ha temps, un voluntari/ària fa de robot davant la classe i executa un programa de la fitxa.|Por parejas, hacen la ficha del depurador/a: en los dos primeros ejercicios, encuentran el bug (lo marcan en rojo) y escriben el bloque correcto; en el tercero y el cuarto, escriben una versión más corta con un bucle o una función. Después, cada uno dibuja en la cuadrícula «versión 2» un cambio que quiera hacer en su reto. Si hay tiempo, un voluntario/a hace de robot delante de la clase y ejecuta un programa de la ficha.",
        diu: ["Seguiu el programa amb el dit, bloc a bloc. On comença a anar malament?|Seguid el programa con el dedo, bloque a bloque. ¿Dónde empieza a ir mal?",
          "Quin tros es repeteix? Quantes vegades?|¿Qué trozo se repite? ¿Cuántas veces?",
          "Quin canvi faries al teu repte perquè fos més interessant?|¿Qué cambio harías en tu reto para que fuera más interesante?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles i després individual|Por parejas y después individual" },
      { min: 15, t: "A l'ordinador: programa el teu repte|En el ordenador: programa tu reto", fase: 'ordinador',
        fa: "Cada alumne/a revisa el mapa (o el crea, si no el té) i el programa fins que en Bit el resol. Després fa la pregunta del bug, la predicció de la funció i els dos exercicis de depuració. Passeja per l'aula i demana a qui xoca que t'ensenyi el bloc on comença el problema amb «Pas a pas».|Cada alumno/a revisa el mapa (o lo crea, si no lo tiene) y lo programa hasta que Bit lo resuelve. Después hace la pregunta del bug, la predicción de la función y los dos ejercicios de depuración. Pasea por el aula y pide a quien choca que te enseñe el bloque donde empieza el problema con «Paso a paso».",
        diu: ["Abans de programar, digues-me el pla: quins trossos té el teu repte?|Antes de programar, dime el plan: ¿qué trozos tiene tu reto?",
          "En Bit ha xocat? Molt bé: ara ja saps on buscar.|¿Bit ha chocado? Muy bien: ahora ya sabes dónde buscar.",
          "Fes «Pas a pas» i atura't al bloc que falla.|Haz «Paso a paso» y párate en el bloque que falla."],
        slides: ['s11', 's12'], app: "Des de «Recorda» fins a «Investiga»: revisar el mapa, programar el propi repte, la pregunta del bug, la predicció de «Puja i gira», el bloc equivocat i el programa del llac.|Desde «Recuerda» hasta «Investiga»: revisar el mapa, programar el propio reto, la pregunta del bug, la predicción de «Sube y gira», el bloque equivocado y el programa del lago.", org: "Individual|Individual" },
      { min: 8, t: "Reptes: fes-ho més curt|Retos: hazlo más corto", fase: 'ordinador',
        fa: "Feu la pausa activa del cicle tots junts. Després, resolen l'escala del far (amb 6 blocs com a molt) i el repartiment amb la funció «Reparteix» (amb 7 blocs com a molt). Qui acabi ajuda un company/a amb preguntes, sense tocar-li el ratolí.|Haced la pausa activa del ciclo todos juntos. Después, resuelven la escalera del faro (con 6 bloques como mucho) y el reparto con la función «Reparte» (con 7 bloques como mucho). Quien termine ayuda a un compañero/a con preguntas, sin tocarle el ratón.",
        diu: ["Quin tros fa pujar un graó? Aquest és el que es repeteix.|¿Qué trozo hace subir un peldaño? Ese es el que se repite.",
          "El comptador de blocs diu que no et queden blocs? Busca el que es repeteix.|¿El contador de bloques dice que no te quedan bloques? Busca lo que se repite."],
        slides: ['s13'], app: "«Pausa activa» i els dos reptes de «Reptes».|«Pausa activa» y los dos retos de «Retos».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 9, t: "Crea: millora'l i fes-lo més curt|Crea: mejóralo y hazlo más corto", fase: 'crea',
        fa: "Amb la graella «versió 2» al costat, cada alumne/a millora el mapa a l'editor (el troba tal com el va desar) i el torna a programar en una versió més curta, amb un bucle, una funció o «Repeteix fins que». L'app no la desa fins que hi ha alguna d'aquestes eines.|Con la cuadrícula «versión 2» al lado, cada alumno/a mejora el mapa en el editor (lo encuentra tal como lo guardó) y lo vuelve a programar en una versión más corta, con un bucle, una función o «Repite hasta que». La app no la guarda hasta que hay alguna de estas herramientas.",
        diu: ["Quin canvi has fet al mapa? Continua tenint solució?|¿Qué cambio has hecho en el mapa? ¿Sigue teniendo solución?",
          "Quants blocs tenia la primera versió? I la nova?|¿Cuántos bloques tenía la primera versión? ¿Y la nueva?"],
        slides: ['s14'], app: "Pas «Crea»: millorar el mapa a l'editor i programar-ne la versió curta (es desa a «Projectes»).|Paso «Crea»: mejorar el mapa en el editor y programar la versión corta (se guarda en «Proyectos»).", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el cicle i les idees de la sessió amb el resum. Deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida. Guardeu la graella «versió 2» a la carpeta.|Repasa el ciclo y las ideas de la sesión con el resumen. Deja que respondan las preguntas finales de la app y haz el ticket de salida. Guardad la cuadrícula «versión 2» en la carpeta.",
        diu: ["Quin bug heu trobat avui al vostre repte?|¿Qué bug habéis encontrado hoy en vuestro reto?",
          "La setmana vinent, el vostre repte el provarà un company/a!|¡La semana que viene, vuestro reto lo probará un compañero/a!"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Quan en Bit xoca, esborra tot el programa i torna a començar.|Cuando Bit choca, borra todo el programa y vuelve a empezar.",
        "Pregunta-li fins on ha anat bé. Que faci «Pas a pas» fins al bloc que falla i canviï només aquell.|Pregúntale hasta dónde ha ido bien. Que haga «Paso a paso» hasta el bloque que falla y cambie solo ese."],
      ["Per resoldre el seu repte, el canvia perquè sigui més fàcil (treu les roques).|Para resolver su reto, lo cambia para que sea más fácil (quita las rocas).",
        "Recorda-li que el repte l'ha de resoldre un company/a: si treu els obstacles, deixa de fer pensar. Millor que busqui el bug al programa.|Recuérdale que el reto lo tiene que resolver un compañero/a: si quita los obstáculos, deja de hacer pensar. Mejor que busque el bug en el programa."],
      ["Posa el bucle però hi deixa a dins blocs de més (o en falten) i en Bit se'n va del camí.|Pone el bucle pero deja dentro bloques de más (o faltan) y Bit se sale del camino.",
        "Que digui en veu alta el tros que es repeteix una sola vegada i el compari amb el que hi ha dins del «Repeteix».|Que diga en voz alta el trozo que se repite una sola vez y lo compare con lo que hay dentro del «Repite»."],
      ["A la funció «Reparteix», oblida «Deixa la caixa» o el posa abans d'arribar a la casa.|En la función «Reparte», olvida «Deja la caja» o lo pone antes de llegar a la casa.",
        "Que descompongui el repartiment en quatre trossos, com a la unitat 1: anar a la caixa, agafar-la, anar a la casa, deixar-la. Cada tros ha de ser dins de la funció.|Que descomponga el reparto en cuatro trozos, como en la unidad 1: ir a la caja, cogerla, ir a la casa, dejarla. Cada trozo tiene que estar dentro de la función."],
      ["El seu repte és tan curt que no sap on posar un bucle a la versió curta.|Su reto es tan corto que no sabe dónde poner un bucle en la versión corta.",
        "És el moment de millorar el mapa: proposa-li allargar el camí amb un tros que es repeteixi (una escala, una recta llarga) i tornar-lo a provar.|Es el momento de mejorar el mapa: propónle alargar el camino con un trozo que se repita (una escalera, una recta larga) y volver a probarlo."]
    ],
    diff: {
      mes: "Fer una tercera versió del seu repte amb el mínim de blocs possible i comparar-la amb la d'un company/a. També poden afegir al mapa un segon objectiu (estrelles o una caixa) i programar-lo amb una funció.|Hacer una tercera versión de su reto con el mínimo de bloques posible y compararla con la de un compañero/a. También pueden añadir al mapa un segundo objetivo (estrellas o una caja) y programarlo con una función.",
      menys: "Programar el repte a trossos: primer només fins al primer revolt, provar-lo i després continuar. A la fitxa, fer els dos exercicis de bugs amb la versió de blocs a la vista i deixar l'escurçament per a més endavant.|Programar el reto a trozos: primero solo hasta la primera curva, probarlo y después continuar. En la ficha, hacer los dos ejercicios de bugs con la versión de bloques a la vista y dejar el acortamiento para más adelante."
    },
    aval: {
      ticket: ["Quins són els quatre passos del cicle del programador/a?|¿Cuáles son los cuatro pasos del ciclo del programador/a?",
        "Com has fet més curt el programa del teu repte?|¿Cómo has hecho más corto el programa de tu reto?"],
      rubric: [
        ["Programa propi|Programa propio", "Programa el seu repte i en Bit el resol sense ajuda.|Programa su reto y Bit lo resuelve sin ayuda.", "Programa el seu repte amb ajuda o el resol només en part.|Programa su reto con ayuda o lo resuelve solo en parte."],
        ["Depuració|Depuración", "Fa servir «Pas a pas» per trobar el bloc que falla i el canvia sense esborrar la resta.|Usa «Paso a paso» para encontrar el bloque que falla y lo cambia sin borrar el resto.", "Troba l'error provant canvis, de vegades sense saber quin bloc fallava.|Encuentra el error probando cambios, a veces sin saber qué bloque fallaba."],
        ["Millora i escurçament|Mejora y acortamiento", "Millora el mapa i en fa una versió més curta amb bucles o funcions que continua funcionant.|Mejora el mapa y hace una versión más corta con bucles o funciones que sigue funcionando.", "Fa un canvi al mapa o al programa, però la versió curta encara no li surt.|Hace un cambio en el mapa o en el programa, pero la versión corta todavía no le sale."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla pot ensenyar-vos el seu repte i les dues versions del programa (la llarga i la curta, a «Projectes»). Pregunteu-li quin bug ha trobat i com l'ha arreglat.|En casa, con el móvil, vuestro hijo o hija puede enseñaros su reto y las dos versiones del programa (la larga y la corta, en «Proyectos»). Preguntadle qué bug ha encontrado y cómo lo ha arreglado.",
    slides: [
      { id: 's1', k: 'portada', t: "Construeix-lo i prova'l|Constrúyelo y pruébalo", x: "Avui el vostre repte cobra vida: el programareu, el provareu i el millorareu.|Hoy vuestro reto cobra vida: lo programaréis, lo probaréis y lo mejoraréis.",
        nota: "Que tothom tingui a la taula la graella de la sessió 1.|Que todo el mundo tenga en la mesa la cuadrícula de la sesión 1." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Què ha de tenir un bon repte?|¿Qué tiene que tener un buen reto?",
        nota: "Resposta: un objectiu clar, obstacles, una dificultat al punt i una solució.|Respuesta: un objetivo claro, obstáculos, una dificultad en su punto y una solución." },
      { id: 's3', k: 'concepte', t: "El laboratori de proves|El laboratorio de pruebas", punts: ["Programar el teu repte|Programar tu reto", "Caçar els bugs|Cazar los bugs", "Millorar el mapa|Mejorar el mapa", "Fer-lo més curt|Hacerlo más corto"],
        nota: "Presenta les quatre feines del dia. Remarca que equivocar-se forma part del procés.|Presenta las cuatro tareas del día. Remarca que equivocarse forma parte del proceso." },
      { id: 's4', k: 'anim', t: "El cicle del programador/a|El ciclo del programador/a", anim: 'u8cycle', punts: ["Dissenya|Diseña", "Programa|Programa", "Prova|Prueba", "Millora… i torna-hi!|Mejora… ¡y vuelve a empezar!"],
        nota: "Pregunta en quin pas del cicle són ara: ja han dissenyat; avui toca programar, provar i millorar.|Pregunta en qué paso del ciclo están ahora: ya han diseñado; hoy toca programar, probar y mejorar." },
      { id: 's5', k: 'demo', t: "On falla?|¿Dónde falla?", x: "En Bit mira a la dreta. Programa: Endavant ×3, Gira a la dreta, Endavant ×2, Gira a l'esquerra, Endavant. On xocarà?|Bit mira a la derecha. Programa: Adelante ×3, Gira a la derecha, Adelante ×2, Gira a la izquierda, Adelante. ¿Dónde chocará?",
        demo: { w: { map: ['>##R', 'R.#R', 'R.#F'] }, prog: 'f f f r f f l f' },
        nota: "Resposta: al tercer «Endavant», contra la roca. El bug és un bloc que sobra. Pregunta com l'arreglarien.|Respuesta: en el tercer «Adelante», contra la roca. El bug es un bloque que sobra. Pregunta cómo lo arreglarían." },
      { id: 's6', k: 'concepte', t: "Com es caça un bug|Cómo se caza un bug", punts: ["Executa i mira on s'atura en Bit.|Ejecuta y mira dónde se para Bit.", "Fes «Pas a pas» fins al bloc que falla.|Haz «Paso a paso» hasta el bloque que falla.", "Canvia només aquell bloc.|Cambia solo ese bloque.", "Torna-ho a provar.|Vuelve a probarlo."],
        nota: "És el mateix mètode de la unitat 1: ara el faran servir amb el seu propi repte.|Es el mismo método de la unidad 1: ahora lo usarán con su propio reto." },
      { id: 's7', k: 'anim', t: "Més curt amb un bucle|Más corto con un bucle", anim: 'u8shrink', x: "8 blocs o 3 blocs: fan exactament el mateix.|8 bloques o 3 bloques: hacen exactamente lo mismo.",
        nota: "Pregunta quin dels dos programes és més fàcil de llegir i d'arreglar.|Pregunta cuál de los dos programas es más fácil de leer y de arreglar." },
      { id: 's8', k: 'demo', t: "Una funció per a cada graó|Una función para cada peldaño", x: "La funció «Esglaó» fa: Endavant, Gira a l'esquerra, Endavant, Gira a la dreta. El programa la crida tres vegades.|La función «Escalón» hace: Adelante, Gira a la izquierda, Adelante, Gira a la derecha. El programa la llama tres veces.",
        demo: { w: { map: ['...F', '..##', '.##.', '>#..'] }, prog: 'A A A', fns: { A: 'f l f r' }, fnName: { A: 'Esglaó|Escalón' } },
        nota: "Compteu els blocs: sense funció, 12; amb funció, 4 a la funció i 3 crides.|Contad los bloques: sin función, 12; con función, 4 en la función y 3 llamadas." },
      { id: 's9', k: 'activitat', t: "Els depuradors|Los depuradores", timer: 12, punts: ["Exercicis 1 i 2: troba el bug i marca'l en vermell.|Ejercicios 1 y 2: encuentra el bug y márcalo en rojo.", "Exercicis 3 i 4: escriu una versió més curta.|Ejercicios 3 y 4: escribe una versión más corta.", "Graella «versió 2»: dibuixa una millora del teu repte.|Cuadrícula «versión 2»: dibuja una mejora de tu reto."],
        nota: "Si alguna parella acaba aviat, que faci de robot davant la classe amb un dels programes de la fitxa.|Si alguna pareja termina pronto, que haga de robot delante de la clase con uno de los programas de la ficha." },
      { id: 's10', k: 'concepte', t: "Escurça'l!|¡Acórtalo!", punts: ["Busca el tros que es repeteix.|Busca el trozo que se repite.", "Compta quantes vegades es repeteix.|Cuenta cuántas veces se repite.", "Posa'l dins d'un «Repeteix» o d'una funció.|Ponlo dentro de un «Repite» o de una función.", "Comprova que fa el mateix.|Comprueba que hace lo mismo."],
        nota: "Deixa aquesta diapositiva projectada mentre fan els exercicis 3 i 4.|Deja esta diapositiva proyectada mientras hacen los ejercicios 3 y 4." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador: el teu repte|Ahora, al ordenador: tu reto", timer: 15, punts: ["Revisa el mapa (o crea'l si no el tens).|Revisa el mapa (o créalo si no lo tienes).", "Programa'l fins que en Bit el resolgui.|Prográmalo hasta que Bit lo resuelva.", "Si falla, «Pas a pas».|Si falla, «Paso a paso».", "Para a la pausa activa.|Para en la pausa activa."],
        nota: "Si algú no va desar el repte a la sessió 1, el primer pas «Dissenya» li permet crear-lo ara.|Si alguien no guardó el reto en la sesión 1, el primer paso «Diseña» le permite crearlo ahora." },
      { id: 's12', k: 'demo', t: "Prediu: Puja i gira|Predice: Sube y gira", x: "La funció «Puja i gira» fa: Endavant, Endavant, Gira a la dreta. El programa la crida dues vegades. A, B o C?|La función «Sube y gira» hace: Adelante, Adelante, Gira a la derecha. El programa la llama dos veces. ¿A, B o C?",
        demo: { w: { map: ['A#B.', '#.#.', '^.C.'] }, prog: 'A A', fns: { A: 'f f r' }, fnName: { A: 'Puja i gira|Sube y gira' } },
        nota: "Resposta: B. Qui diu C ha cridat la funció tres vegades; qui diu A, només una.|Respuesta: B. Quien dice C ha llamado a la función tres veces; quien dice A, solo una." },
      { id: 's13', k: 'repte', t: "Reptes: fes-ho més curt|Retos: hazlo más corto", timer: 8, punts: ["1. L'escala del far: 6 blocs com a molt|1. La escalera del faro: 6 bloques como mucho", "2. Dues caixes, una funció: 7 blocs com a molt|2. Dos cajas, una función: 7 bloques como mucho"],
        nota: "Pista per a l'escala: un graó és «Endavant, Gira a l'esquerra, Endavant, Gira a la dreta».|Pista para la escalera: un peldaño es «Adelante, Gira a la izquierda, Adelante, Gira a la derecha»." },
      { id: 's14', k: 'activitat', t: "Crea: millora'l i fes-lo curt|Crea: mejóralo y hazlo corto", timer: 9, punts: ["Millora el mapa amb la idea de la graella «versió 2».|Mejora el mapa con la idea de la cuadrícula «versión 2».", "Comprova que continua tenint solució.|Comprueba que sigue teniendo solución.", "Programa'l amb un bucle, una funció o «fins que».|Prográmalo con un bucle, una función o «hasta que».", "Compara: quants blocs t'has estalviat?|Compara: ¿cuántos bloques te has ahorrado?"],
        nota: "La versió curta es desa a «Projectes». Si el mapa és molt curt, és millor allargar-lo abans.|La versión corta se guarda en «Proyectos». Si el mapa es muy corto, es mejor alargarlo antes." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Dissenya, programa, prova, millora… i torna-hi.|Diseña, programa, prueba, mejora… y vuelve a empezar.", "«Pas a pas» t'ajuda a trobar el bug.|«Paso a paso» te ayuda a encontrar el bug.", "Bucles i funcions fan programes més curts i clars.|Bucles y funciones hacen programas más cortos y claros."],
        nota: "Avança que a la sessió 3 un company/a provarà el repte de cadascú.|Avanza que en la sesión 3 un compañero/a probará el reto de cada uno." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quins són els quatre passos del cicle?|¿Cuáles son los cuatro pasos del ciclo?", "Com has fet més curt el teu programa?|¿Cómo has hecho más corto tu programa?"],
        nota: "Anota qui encara no ha resolt el seu propi repte: a la sessió 3 el provarà un company/a i ha de tenir solució.|Anota quién todavía no ha resuelto su propio reto: en la sesión 3 lo probará un compañero/a y tiene que tener solución." }
    ],
    print: [
      { id: 'p1', t: "Fitxa del depurador/a|Ficha del depurador/a", k: 'fitxa',
        intro: "Seguiu cada programa amb el dit, bloc a bloc. Marqueu en vermell el bloc que falla i escriviu-ne la versió bona.|Seguid cada programa con el dedo, bloque a bloque. Marcad en rojo el bloque que falla y escribid su versión buena.",
        items: [
          { q: "En Bit hauria d'arribar a la bandera, però se surt del mapa. Quin bloc és el bug?|Bit debería llegar a la bandera, pero se sale del mapa. ¿Qué bloque es el bug?", w: { map: ['..F.', '..#.', '>##.'] }, prog: 'f f r f f', solProg: 'f f l f f',
            sol: "El bug és «Gira a la dreta»: ha de ser «Gira a l'esquerra» per pujar cap a la bandera.|El bug es «Gira a la derecha»: tiene que ser «Gira a la izquierda» para subir hacia la bandera." },
          { q: "A aquest programa li falta un bloc i en Bit xoca. Quin bloc falta i on?|A este programa le falta un bloque y Bit choca. ¿Qué bloque falta y dónde?", w: { map: ['>#R', 'R#R', 'R#F'] }, prog: 'f r f l f', solProg: 'f r f f l f',
            sol: "Falta un «Endavant» després del primer: en Bit ha de baixar dues caselles abans de girar.|Falta un «Adelante» después del primero: Bit tiene que bajar dos casillas antes de girar." },
          { q: "Aquest programa funciona, però és molt llarg. Escriu-lo amb un «Repeteix».|Este programa funciona, pero es muy largo. Escríbelo con un «Repite».", w: { map: ['...F', '..##', '.##.', '>#..'] }, prog: 'f l f r f l f r f l f', solProg: '3{ f l f r }',
            sol: "Repeteix 3 vegades: Endavant, Gira a l'esquerra, Endavant, Gira a la dreta.|Repite 3 veces: Adelante, Gira a la izquierda, Adelante, Gira a la derecha." },
          { q: "Aquí es repeteix el tros de repartir una caixa. Escriu una funció «Reparteix» i el programa que la fa servir.|Aquí se repite el trozo de repartir una caja. Escribe una función «Reparte» y el programa que la usa.", w: { map: ['>bHbH', '.....'] }, prog: 'f p f d f p f d', solProg: 'A A', solFns: { A: 'f p f d' },
            sol: "Funció Reparteix: Endavant, Agafa, Endavant, Deixa. Programa: Reparteix, Reparteix.|Función Reparte: Adelante, Coge, Adelante, Deja. Programa: Reparte, Reparte." },
          { q: "El teu repte: escriu els trossos del pla abans de programar-lo a l'ordinador.|Tu reto: escribe los trozos del plan antes de programarlo en el ordenador.",
            sol: "Resposta oberta. Comproveu que cada tros comença on acaba l'anterior i que el pla arriba a l'objectiu.|Respuesta abierta. Comprobad que cada trozo empieza donde termina el anterior y que el plan llega al objetivo." }
        ] },
      { id: 'p2', t: "Graella: versió 2 del meu repte|Cuadrícula: versión 2 de mi reto", k: 'graella', w: 7, h: 6,
        intro: "Dibuixa com quedarà el teu repte després de millorar-lo. Marca amb un cercle el que has canviat.|Dibuja cómo quedará tu reto después de mejorarlo. Marca con un círculo lo que has cambiado.",
        items: [
          { q: "Què has canviat i per què?|¿Qué has cambiado y por qué?" },
          { q: "Quina eina faràs servir per fer el programa més curt?|¿Qué herramienta usarás para hacer el programa más corto?" }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Que el provi algú altre ---------- */
  'r8-3': {
    obj: [
      "L'alumne/a prova el repte d'un company/a i el resol sense que l'autor/a li digui la solució.|El alumno/a prueba el reto de un compañero/a y lo resuelve sin que el autor/a le diga la solución.",
      "L'alumne/a valora un repte (claredat, dificultat, millores) i fa un comentari amable i útil: una cosa que li ha agradat i una idea per millorar.|El alumno/a valora un reto (claridad, dificultad, mejoras) y hace un comentario amable y útil: algo que le ha gustado y una idea para mejorar.",
      "L'alumne/a escolta els comentaris sobre el seu repte, dona les gràcies i decideix quins canvis hi fa.|El alumno/a escucha los comentarios sobre su reto, da las gracias y decide qué cambios hace.",
      "L'alumne/a millora el seu repte a partir dels comentaris i comprova que continua tenint solució.|El alumno/a mejora su reto a partir de los comentarios y comprueba que sigue teniendo solución."
    ],
    comp: [
      "Competència digital: col·laborar i comunicar-se amb respecte per millorar un producte digital|Competencia digital: colaborar y comunicarse con respeto para mejorar un producto digital",
      "Pensament computacional: provar amb usuaris i iterar un disseny a partir dels resultats|Pensamiento computacional: probar con usuarios e iterar un diseño a partir de los resultados",
      "Comunicació oral: donar i rebre comentaris constructius|Comunicación oral: dar y recibir comentarios constructivos",
      "Competència personal i social: empatia, respecte i acceptació de les opinions dels altres|Competencia personal y social: empatía, respeto y aceptación de las opiniones de los demás"
    ],
    vocab: [
      ["Provador/a|Probador/a", "La persona que prova un repte o un programa per primera vegada.|La persona que prueba un reto o un programa por primera vez."],
      ["Usuari/ària|Usuario/a", "La persona que fa servir el que hem creat.|La persona que usa lo que hemos creado."],
      ["Autor/a|Autor/a", "La persona que ha creat el repte.|La persona que ha creado el reto."],
      ["Comentari|Comentario", "El que diem d'un treball per ajudar a millorar-lo.|Lo que decimos de un trabajo para ayudar a mejorarlo."],
      ["Valorar|Valorar", "Pensar i dir com és una cosa: si és clara, fàcil o difícil, què li falta.|Pensar y decir cómo es algo: si es clara, fácil o difícil, qué le falta."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Que el provi algú altre»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Que lo pruebe otra persona»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La carpeta de cada alumne/a amb les graelles de les sessions 1 i 2|La carpeta de cada alumno/a con las cuadrículas de las sesiones 1 y 2",
        "Unes quantes fitxes petites o post-its per escriure comentaris|Unas cuantas fichas pequeñas o pósits para escribir comentarios"
      ],
      imprimir: ["Targetes de comentaris|Tarjetas de comentarios", "Full del provador/a|Hoja del probador/a"],
      prep: [
        "Fer les parelles de provadors (les de la prova del dit de la sessió 1). Si el nombre és senar, feu un trio que roti.|Hacer las parejas de probadores (las de la prueba del dedo de la sesión 1). Si el número es impar, haced un trío que rote.",
        "Imprimir i retallar un paquet de targetes de comentaris per taula i un full del provador/a per alumne/a.|Imprimir y recortar un paquete de tarjetas de comentarios por mesa y una hoja del probador/a por alumno/a.",
        "Comprovar que tothom té el repte desat amb solució. Qui no, el pot acabar al primer pas «Dissenya» d'aquesta sessió.|Comprobar que todo el mundo tiene el reto guardado con solución. Quien no, lo puede terminar en el primer paso «Diseña» de esta sesión.",
        "Decidir el senyal per al canvi de lloc (una campaneta, unes palmades) perquè tothom es mogui alhora.|Decidir la señal para el cambio de sitio (una campanita, unas palmadas) para que todo el mundo se mueva a la vez."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i comença la fira|Recordamos y empieza la feria", fase: 'inici',
        fa: "Fes la pregunta de repàs sobre com s'escurça un programa. Explica la missió: avui, a la plaça del poble, cada repte el provarà algú altre. Pregunta com se senten quan algú mira una cosa que han fet i què els agrada que els diguin.|Haz la pregunta de repaso sobre cómo se acorta un programa. Explica la misión: hoy, en la plaza del pueblo, cada reto lo probará otra persona. Pregunta cómo se sienten cuando alguien mira algo que han hecho y qué les gusta que les digan.",
        diu: ["Com podeu fer més curt un programa que repeteix uns blocs?|¿Cómo podéis hacer más corto un programa que repite unos bloques?",
          "Quan feu un dibuix i algú el mira, què us agrada que us diguin?|Cuando hacéis un dibujo y alguien lo mira, ¿qué os gusta que os digan?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Ulls nous i comentaris que ajuden|Ojos nuevos y comentarios que ayudan", fase: 'teoria',
        fa: "Projecta la demostració d'un repte fet per algú altre: la classe el resol en veu alta abans d'executar-lo. Explica per què cal que el provi una altra persona (ulls nous) i com es valora la dificultat. Mostra l'animació dels comentaris i les dues parts d'un bon comentari. Practiqueu-ho: proposa un comentari poc útil i que la classe el transformi en un d'amable i útil.|Proyecta la demostración de un reto hecho por otra persona: la clase lo resuelve en voz alta antes de ejecutarlo. Explica por qué hace falta que lo pruebe otra persona (ojos nuevos) y cómo se valora la dificultad. Muestra la animación de los comentarios y las dos partes de un buen comentario. Practicadlo: propón un comentario poco útil y que la clase lo transforme en uno amable y útil.",
        diu: ["Per què us sembla fàcil el vostre repte? Perquè ja en sabeu la solució!|¿Por qué os parece fácil vuestro reto? ¡Porque ya sabéis la solución!",
          "«És avorrit.» Com ho podríem dir perquè ajudi?|«Es aburrido.» ¿Cómo lo podríamos decir para que ayude?",
          "Parlem del repte, no de la persona.|Hablamos del reto, no de la persona."],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La fira de paper|La feria de papel", fase: 'desconnectat',
        fa: "Cada alumne/a deixa a la taula la graella del seu repte (la versió 2, si en té). Les parelles es mouen a una altra taula: resolen el repte de paper amb el dit, i l'escriuen amb paraules o amb targetes d'ordres si en teniu. Després deixen al costat de la graella una targeta de comentari: «M'ha agradat…» i «Una idea…». Feu dues o tres rotacions de 4 minuts; al final, cadascú torna al seu lloc i llegeix els comentaris que ha rebut.|Cada alumno/a deja en la mesa la cuadrícula de su reto (la versión 2, si la tiene). Las parejas se mueven a otra mesa: resuelven el reto de papel con el dedo, y lo escriben con palabras o con tarjetas de órdenes si tenéis. Después dejan al lado de la cuadrícula una tarjeta de comentario: «Me ha gustado…» y «Una idea…». Haced dos o tres rotaciones de 4 minutos; al final, cada uno vuelve a su sitio y lee los comentarios que ha recibido.",
        diu: ["Primer resoleu el repte; després escriviu el comentari.|Primero resolved el reto; después escribid el comentario.",
          "Una idea per millorar ha de ser concreta: què hi posaríeu, què hi trauríeu?|Una idea para mejorar tiene que ser concreta: ¿qué pondríais, qué quitaríais?",
          "Quan llegiu els vostres comentaris, recordeu: vosaltres decidiu què canvieu.|Cuando leáis vuestros comentarios, recordad: vosotros decidís qué cambiáis."],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles que roten per les taules|Por parejas que rotan por las mesas" },
      { min: 12, t: "A l'ordinador: aprèn a fer de provador/a|En el ordenador: aprende a hacer de probador/a", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins als dos reptes «d'altres programadors»: els quizzes dels comentaris, el repte impossible i el massa fàcil, la pausa activa, el moll de les caixes i la roca que canvia de lloc. Atura la classe abans del pas «Deixa el teu repte a punt».|Cada alumno/a hace la sesión hasta los dos retos «de otros programadores»: los quizzes de los comentarios, el reto imposible y el demasiado fácil, la pausa activa, el muelle de las cajas y la roca que cambia de sitio. Para la clase antes del paso «Deja tu reto a punto».",
        diu: ["Al repte de les dues illes, què ha de mirar en Bit abans de cada pas?|En el reto de las dos islas, ¿qué tiene que mirar Bit antes de cada paso?",
          "Abans de programar el repte d'un altre, llegeix bé el mapa: quin és l'objectiu?|Antes de programar el reto de otro, lee bien el mapa: ¿cuál es el objetivo?"],
        slides: ['s11', 's12'], app: "Des de «Recorda» fins als reptes: el bloc «Repeteix», la història de la fira, les targetes de «Descobreix», el comentari que ajuda, ordenar un bon comentari, els dos mapes per valorar, la «Pausa activa», el moll de les caixes i la roca que canvia de lloc.|Desde «Recuerda» hasta los retos: el bloque «Repite», la historia de la feria, las tarjetas de «Descubre», el comentario que ayuda, ordenar un buen comentario, los dos mapas para valorar, la «Pausa activa», el muelle de las cajas y la roca que cambia de sitio.", org: "Individual|Individual" },
      { min: 18, t: "El gran canvi de lloc|El gran cambio de sitio", fase: 'crea',
        fa: "Cada alumne/a deixa el repte a punt i llegeix el pas «Canvi de lloc». Al teu senyal, les parelles canvien d'ordinador. El provador/a resol el repte de l'autor/a (l'autor/a només mira i pot donar una sola pista) i, després, respon la valoració a l'app i omple el full del provador/a. Abans de tornar, el provador/a explica de paraula una cosa que li ha agradat i una idea per millorar. Cadascú torna al seu lloc i millora el repte a l'editor amb els comentaris.|Cada alumno/a deja el reto a punto y lee el paso «Cambio de sitio». A tu señal, las parejas cambian de ordenador. El probador/a resuelve el reto del autor/a (el autor/a solo mira y puede dar una sola pista) y, después, responde la valoración en la app y rellena la hoja del probador/a. Antes de volver, el probador/a explica de palabra algo que le ha gustado y una idea para mejorar. Cada uno vuelve a su sitio y mejora el reto en el editor con los comentarios.",
        diu: ["Autors i autores: mans a la falda! Només podeu donar una pista.|Autores y autoras: ¡manos en el regazo! Solo podéis dar una pista.",
          "Provadors i provadores: llegiu el mapa i feu un pla abans de posar blocs.|Probadores y probadoras: leed el mapa y haced un plan antes de poner bloques.",
          "Quan rebeu un comentari, digueu «gràcies» encara que no hi estigueu d'acord.|Cuando recibáis un comentario, decid «gracias» aunque no estéis de acuerdo."],
        slides: ['s13', 's14', 's15'], app: "Pas «Crea»: deixar el repte a punt, el canvi de lloc, el provador/a resol el repte i el valora, i l'autor/a el millora a l'editor.|Paso «Crea»: dejar el reto a punto, el cambio de sitio, el probador/a resuelve el reto y lo valora, y el autor/a lo mejora en el editor.", org: "Per parelles (canvi d'ordinador) i després individual|Por parejas (cambio de ordenador) y después individual" },
      { min: 5, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Pregunta a tres o quatre alumnes quin canvi han fet al seu repte gràcies als comentaris. Repassa les idees de la sessió, deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida. Recull els fulls del provador/a: els autors els poden tenir a la carpeta per a la presentació.|Pregunta a tres o cuatro alumnos qué cambio han hecho en su reto gracias a los comentarios. Repasa las ideas de la sesión, deja que respondan las preguntas finales de la app y haz el ticket de salida. Recoge las hojas del probador/a: los autores las pueden tener en la carpeta para la presentación.",
        diu: ["Quin comentari us ha ajudat més? Què heu canviat?|¿Qué comentario os ha ayudado más? ¿Qué habéis cambiado?",
          "La setmana vinent presentarem els reptes a tothom!|¡La semana que viene presentaremos los retos a todo el mundo!"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["L'autor/a no pot evitar dir la solució o tocar el ratolí del provador/a.|El autor/a no puede evitar decir la solución o tocar el ratón del probador/a.",
        "Recorda la norma de la diapositiva 14: mans a la falda i una sola pista. Proposa-li que apunti en un paper on s'encalla el provador/a: és informació valuosa per millorar el repte.|Recuerda la norma de la diapositiva 14: manos en el regazo y una sola pista. Propónle que apunte en un papel dónde se atasca el probador/a: es información valiosa para mejorar el reto."],
      ["El comentari és només «molt bé» o «està malament», sense cap idea concreta.|El comentario es solo «muy bien» o «está mal», sin ninguna idea concreta.",
        "Ajuda'l amb les targetes de comentaris: «M'ha agradat… perquè…» i «I si…?». Pregunta-li què canviaria si el repte fos seu.|Ayúdale con las tarjetas de comentarios: «Me ha gustado… porque…» y «¿Y si…?». Pregúntale qué cambiaría si el reto fuera suyo."],
      ["S'enfada o es posa trist/a quan li diuen que el repte és massa fàcil o massa difícil.|Se enfada o se pone triste cuando le dicen que el reto es demasiado fácil o demasiado difícil.",
        "Recorda-li que el comentari parla del repte, no d'ell o ella, i que és la informació que necessita per millorar-lo. Ell o ella decideix quins canvis fa.|Recuérdale que el comentario habla del reto, no de él o ella, y que es la información que necesita para mejorarlo. Él o ella decide qué cambios hace."],
      ["El provador/a no pot resoldre el repte perquè no té solució o és molt difícil.|El probador/a no puede resolver el reto porque no tiene solución o es muy difícil.",
        "Després d'uns minuts, que l'autor/a doni la pista i, si cal, ensenyi la seva solució. Aquest repte és el que més necessita la millora: que ho apunti a la valoració.|Después de unos minutos, que el autor/a dé la pista y, si hace falta, enseñe su solución. Este reto es el que más necesita la mejora: que lo apunte en la valoración."],
      ["Al repte de les dues illes, programa una solució que només funciona a la primera illa.|En el reto de las dos islas, programa una solución que solo funciona en la primera isla.",
        "Que miri la pestanya de la segona illa: on és la roca ara? Quina pregunta ha de fer en Bit abans de cada pas per saber si l'ha de saltar?|Que mire la pestaña de la segunda isla: ¿dónde está la roca ahora? ¿Qué pregunta tiene que hacer Bit antes de cada paso para saber si la tiene que saltar?"]
    ],
    diff: {
      mes: "Provar el repte d'un segon company/a i comparar les dues experiències. També poden fer una versió «difícil» del seu repte amb dues illes (pensant quina part canviaria) i explicar-la a la presentació.|Probar el reto de un segundo compañero/a y comparar las dos experiencias. También pueden hacer una versión «difícil» de su reto con dos islas (pensando qué parte cambiaría) y explicarla en la presentación.",
      menys: "Fer la valoració de paraula amb el professor/a al costat, triant les respostes de l'app una a una. Per al comentari, completar només la frase «M'ha agradat…» i triar una idea de la llista de la valoració.|Hacer la valoración de palabra con el profesor/a al lado, eligiendo las respuestas de la app una a una. Para el comentario, completar solo la frase «Me ha gustado…» y elegir una idea de la lista de la valoración."
    },
    aval: {
      ticket: ["Quines dues parts té un bon comentari?|¿Qué dos partes tiene un buen comentario?",
        "Quin canvi has fet al teu repte gràcies als comentaris?|¿Qué cambio has hecho en tu reto gracias a los comentarios?"],
      rubric: [
        ["Provar el repte d'un altre|Probar el reto de otro", "Llegeix el mapa, fa un pla i resol el repte del company/a sense que li diguin la solució.|Lee el mapa, hace un plan y resuelve el reto del compañero/a sin que le digan la solución.", "Resol el repte del company/a amb la pista o amb força ajuda.|Resuelve el reto del compañero/a con la pista o con bastante ayuda."],
        ["Donar comentaris|Dar comentarios", "Fa un comentari amable i útil, amb una cosa concreta que li ha agradat i una idea per millorar.|Hace un comentario amable y útil, con algo concreto que le ha gustado y una idea para mejorar.", "Fa un comentari amable però general («m'agrada», «està bé»).|Hace un comentario amable pero general («me gusta», «está bien»)."],
        ["Rebre comentaris i millorar|Recibir comentarios y mejorar", "Escolta, dona les gràcies i fa almenys un canvi raonat al seu repte.|Escucha, da las gracias y hace al menos un cambio razonado en su reto.", "Escolta els comentaris, però no fa cap canvi o el fa sense saber explicar per què.|Escucha los comentarios, pero no hace ningún cambio o lo hace sin saber explicar por qué."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu fer de provadors del repte del vostre fill o filla: la sessió té un pas pensat perquè un familiar s'assegui al seu lloc i el resolgui. Després, feu-li un comentari amb una cosa que us ha agradat i una idea per millorar.|En casa, con el móvil, podéis hacer de probadores del reto de vuestro hijo o hija: la sesión tiene un paso pensado para que un familiar se siente en su lugar y lo resuelva. Después, hacedle un comentario con algo que os ha gustado y una idea para mejorar.",
    slides: [
      { id: 's1', k: 'portada', t: "Que el provi algú altre|Que lo pruebe otra persona", x: "Avui els reptes canvien de mans: provarem i millorarem.|Hoy los retos cambian de manos: probaremos y mejoraremos.",
        nota: "Explica que avui cada alumne/a farà dos papers: autor/a del seu repte i provador/a del repte d'un company/a.|Explica que hoy cada alumno/a hará dos papeles: autor/a de su reto y probador/a del reto de un compañero/a." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Com podeu fer més curt un programa que repeteix uns blocs?|¿Cómo podéis hacer más corto un programa que repite unos bloques?",
        nota: "Resposta: amb un «Repeteix», una funció o «Repeteix fins que».|Respuesta: con un «Repite», una función o «Repite hasta que»." },
      { id: 's3', k: 'pregunta', t: "Quan algú mira el teu treball…|Cuando alguien mira tu trabajo…", x: "Què us agrada que us diguin? Què no us ajuda gens?|¿Qué os gusta que os digan? ¿Qué no os ayuda nada?",
        nota: "Recull dues o tres respostes de cada tipus. Les farem servir per construir les normes dels comentaris.|Recoge dos o tres respuestas de cada tipo. Las usaremos para construir las normas de los comentarios." },
      { id: 's4', k: 'demo', t: "Un repte d'un altre programador/a|Un reto de otro programador/a", x: "Llegiu el mapa: quin és l'objectiu? Com el resoldríeu?|Leed el mapa: ¿cuál es el objetivo? ¿Cómo lo resolveríais?",
        demo: { w: { map: ['>##R', 'R.#R', 'F##R'] }, prog: '2{ f f r } f f' },
        nota: "Que la classe digui el camí abans d'executar. Fes notar que, sense saber la solució, cal llegir el mapa amb calma: això és tenir ulls nous.|Que la clase diga el camino antes de ejecutar. Haz notar que, sin saber la solución, hay que leer el mapa con calma: eso es tener ojos nuevos." },
      { id: 's5', k: 'anim', t: "Massa fàcil, al punt o massa difícil?|¿Demasiado fácil, en su punto o demasiado difícil?", anim: 'u8level', x: "El provador/a et dirà on queda el teu repte.|El probador/a te dirá dónde queda tu reto.",
        nota: "Recorda que «massa fàcil» o «massa difícil» no és dolent: és una informació per ajustar el repte.|Recuerda que «demasiado fácil» o «demasiado difícil» no es malo: es una información para ajustar el reto." },
      { id: 's6', k: 'anim', t: "Comentaris amables i útils|Comentarios amables y útiles", anim: 'u8feedback', punts: ["1. Una cosa que t'ha agradat|1. Algo que te ha gustado", "2. Una idea per millorar-lo|2. Una idea para mejorarlo"],
        nota: "Compara els dos comentaris de l'animació: quin ajuda l'autor/a a canviar alguna cosa?|Compara los dos comentarios de la animación: ¿cuál ayuda al autor/a a cambiar algo?" },
      { id: 's7', k: 'concepte', t: "Comentaris que ajuden|Comentarios que ayudan", punts: ["Parla del repte, no de la persona.|Habla del reto, no de la persona.", "Primer, el que t'ha agradat.|Primero, lo que te ha gustado.", "Després, una idea concreta.|Después, una idea concreta.", "I sempre amb respecte.|Y siempre con respeto."],
        nota: "Practiqueu-ho: digues «És avorrit» i que la classe ho transformi en un comentari amable i útil.|Practicadlo: di «Es aburrido» y que la clase lo transforme en un comentario amable y útil." },
      { id: 's8', k: 'concepte', t: "Quan reps un comentari|Cuando recibes un comentario", punts: ["Escolta fins al final.|Escucha hasta el final.", "Dona les gràcies.|Da las gracias.", "Tu decideixes què canvies.|Tú decides qué cambias.", "No és res personal: és per millorar.|No es nada personal: es para mejorar."],
        nota: "Remarca que rebre comentaris també s'aprèn i que costa a tothom, també als adults.|Remarca que recibir comentarios también se aprende y que cuesta a todo el mundo, también a los adultos." },
      { id: 's9', k: 'activitat', t: "La fira de paper|La feria de papel", timer: 12, punts: ["Deixa la graella del teu repte a la taula.|Deja la cuadrícula de tu reto en la mesa.", "Amb la parella, resol el repte d'una altra taula.|Con la pareja, resuelve el reto de otra mesa.", "Deixa-hi una targeta: «M'ha agradat…» i «Una idea…».|Deja una tarjeta: «Me ha gustado…» y «Una idea…».", "Al senyal, canvieu de taula.|A la señal, cambiad de mesa."],
        nota: "Rotacions de 4 minuts. Al final, cadascú torna al seu lloc i llegeix els comentaris rebuts.|Rotaciones de 4 minutos. Al final, cada uno vuelve a su sitio y lee los comentarios recibidos." },
      { id: 's10', k: 'concepte', t: "Les targetes de comentaris|Las tarjetas de comentarios", punts: ["M'ha agradat… perquè…|Me ha gustado… porque…", "I si hi posessis…?|¿Y si pusieras…?", "Era al punt? Massa fàcil? Massa difícil?|¿Estaba en su punto? ¿Demasiado fácil? ¿Demasiado difícil?"],
        nota: "Deixa la diapositiva projectada durant la fira de paper per a qui no sàpiga com començar el comentari.|Deja la diapositiva proyectada durante la feria de papel para quien no sepa cómo empezar el comentario." },
      { id: 's11', k: 'activitat', t: "A l'ordinador: aprèn a fer de provador/a|En el ordenador: aprende a hacer de probador/a", timer: 12, punts: ["Obre la sessió «Que el provi algú altre».|Abre la sesión «Que lo pruebe otra persona».", "Fes els quizzes dels comentaris i dels mapes.|Haz los quizzes de los comentarios y de los mapas.", "Resol els dos reptes d'altres programadors.|Resuelve los dos retos de otros programadores.", "Para abans de «Deixa el teu repte a punt».|Para antes de «Deja tu reto a punto»."],
        nota: "És important que tothom s'aturi al mateix pas: el canvi de lloc s'ha de fer alhora.|Es importante que todo el mundo se pare en el mismo paso: el cambio de sitio se tiene que hacer a la vez." },
      { id: 's12', k: 'demo', t: "La roca que canvia de lloc|La roca que cambia de sitio", x: "Repeteix fins que arribis a la bandera: si hi ha un obstacle davant, salta la roca; si no, endavant.|Repite hasta que llegues a la bandera: si hay un obstáculo delante, salta la roca; si no, adelante.",
        demo: { w: { map: ['...###.', '>###R#F', '~~~~~~~'] }, prog: 'until:goal{ if:wall{ A } else{ f } }', fns: { A: 'l f r f f r f l' }, fnName: { A: 'Salta la roca|Salta la roca' } },
        nota: "Projecta-la quan la majoria hagi resolt el repte, per comentar-lo. És l'illa 2 del repte: la roca és més lluny.|Proyéctala cuando la mayoría haya resuelto el reto, para comentarlo. Es la isla 2 del reto: la roca está más lejos." },
      { id: 's13', k: 'activitat', t: "El gran canvi de lloc|El gran cambio de sitio", timer: 18, punts: ["Deixa el teu repte a punt i llegeix «Canvi de lloc».|Deja tu reto a punto y lee «Cambio de sitio».", "Al senyal, canvia d'ordinador amb la parella.|A la señal, cambia de ordenador con la pareja.", "Resol el repte i fes-ne la valoració.|Resuelve el reto y haz su valoración.", "Torna al teu lloc i millora el teu repte.|Vuelve a tu sitio y mejora tu reto."],
        nota: "Dona el senyal perquè tothom canviï alhora. Deixa uns 8 minuts per resoldre, 3 per valorar i parlar i la resta per millorar.|Da la señal para que todo el mundo cambie a la vez. Deja unos 8 minutos para resolver, 3 para valorar y hablar y el resto para mejorar." },
      { id: 's14', k: 'concepte', t: "Normes de la prova|Normas de la prueba", punts: ["Autor/a: mans a la falda i boca tancada.|Autor/a: manos en el regazo y boca cerrada.", "Autor/a: només una pista, si cal.|Autor/a: solo una pista, si hace falta.", "Provador/a: llegeix el mapa i fes un pla.|Probador/a: lee el mapa y haz un plan.", "Provador/a: valora amb sinceritat i amabilitat.|Probador/a: valora con sinceridad y amabilidad."],
        nota: "Deixa les normes projectades durant tota la prova.|Deja las normas proyectadas durante toda la prueba." },
      { id: 's15', k: 'activitat', t: "Torna al teu lloc i millora'l|Vuelve a tu sitio y mejóralo", punts: ["Escolta el que t'explica el provador/a.|Escucha lo que te explica el probador/a.", "Dona les gràcies.|Da las gracias.", "Tria un canvi i fes-lo a l'editor.|Elige un cambio y hazlo en el editor.", "Comprova que continua tenint solució.|Comprueba que sigue teniendo solución."],
        nota: "Les respostes de la valoració es desen a l'app, però l'autor/a no les veu a la pantalla: per això el provador/a les explica de paraula i omple el full del provador/a.|Las respuestas de la valoración se guardan en la app, pero el autor/a no las ve en la pantalla: por eso el probador/a las explica de palabra y rellena la hoja del probador/a." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un repte es prova amb una altra persona: té ulls nous.|Un reto se prueba con otra persona: tiene ojos nuevos.", "Un bon comentari: el que t'agrada i una idea.|Un buen comentario: lo que te gusta y una idea.", "Tu decideixes com millores el teu repte.|Tú decides cómo mejoras tu reto."],
        nota: "Felicita la classe per com han donat i rebut els comentaris: és una de les coses més difícils del curs.|Felicita a la clase por cómo han dado y recibido los comentarios: es una de las cosas más difíciles del curso." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quines dues parts té un bon comentari?|¿Qué dos partes tiene un buen comentario?", "Quin canvi has fet gràcies als comentaris?|¿Qué cambio has hecho gracias a los comentarios?"],
        nota: "Respostes: una cosa que t'ha agradat i una idea per millorar. Anota els canvis: són bons exemples per a la presentació.|Respuestas: algo que te ha gustado y una idea para mejorar. Anota los cambios: son buenos ejemplos para la presentación." }
    ],
    print: [
      { id: 'p1', t: "Targetes de comentaris|Tarjetas de comentarios", k: 'targetes',
        intro: "Un paquet per taula. A la fira de paper, escriviu el comentari a sota de la frase i deixeu la targeta al costat de la graella.|Un paquete por mesa. En la feria de papel, escribid el comentario debajo de la frase y dejad la tarjeta al lado de la cuadrícula.",
        items: [
          { t: "M'ha agradat… 💚|Me ha gustado… 💚", n: 4 },
          { t: "I si hi posessis…? 💡|¿Y si pusieras…? 💡", n: 4 },
          { t: "Era al punt 🎯|Estaba en su punto 🎯", n: 2 },
          { t: "Massa fàcil 🐢|Demasiado fácil 🐢", n: 1 },
          { t: "Massa difícil 🧗|Demasiado difícil 🧗", n: 1 }
        ] },
      { id: 'p2', t: "Full del provador/a|Hoja del probador/a", k: 'fitxa',
        intro: "Omple aquest full després de provar el repte del company/a a l'ordinador. Després, dona'l a l'autor/a.|Rellena esta hoja después de probar el reto del compañero/a en el ordenador. Después, dáselo al autor/a.",
        items: [
          { q: "Nom del repte i de l'autor/a:|Nombre del reto y del autor/a:", sol: "Resposta oberta.|Respuesta abierta." },
          { q: "Era clar què havia de fer en Bit? Encercla: sí · més o menys · no gaire|¿Estaba claro qué tenía que hacer Bit? Rodea: sí · más o menos · no mucho", sol: "Resposta oberta.|Respuesta abierta." },
          { q: "Com era de difícil? Encercla: massa fàcil · al punt · massa difícil|¿Cómo de difícil era? Rodea: demasiado fácil · en su punto · demasiado difícil", sol: "Resposta oberta.|Respuesta abierta." },
          { q: "Una cosa que m'ha agradat:|Algo que me ha gustado:", sol: "Resposta oberta: ha de ser concreta (el revolt de l'aigua, les estrelles…).|Respuesta abierta: tiene que ser concreta (la curva del agua, las estrellas…)." },
          { q: "Una idea per millorar-lo:|Una idea para mejorarlo:", sol: "Resposta oberta: una proposta que l'autor/a pugui fer a l'editor (posar, treure o moure alguna cosa).|Respuesta abierta: una propuesta que el autor/a pueda hacer en el editor (poner, quitar o mover algo)." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Presentació i diploma ---------- */
  'r8-4': {
    obj: [
      "L'alumne/a presenta el seu repte a un grup o a la classe explicant què ha fet, què ha après i què li ha costat.|El alumno/a presenta su reto a un grupo o a la clase explicando qué ha hecho, qué ha aprendido y qué le ha costado.",
      "L'alumne/a reconeix i anomena els conceptes del curs: seqüència, bucle, esdeveniment, condició, funció, variable i bucle amb condició.|El alumno/a reconoce y nombra los conceptos del curso: secuencia, bucle, evento, condición, función, variable y bucle con condición.",
      "L'alumne/a resol reptes que combinen eines de diverses unitats.|El alumno/a resuelve retos que combinan herramientas de varias unidades.",
      "L'alumne/a escolta les presentacions dels companys/es i hi fa preguntes o comentaris respectuosos.|El alumno/a escucha las presentaciones de los compañeros/as y hace preguntas o comentarios respetuosos."
    ],
    comp: [
      "Comunicació oral: presentar un projecte propi de manera ordenada davant d'un públic|Comunicación oral: presentar un proyecto propio de manera ordenada delante de un público",
      "Competència digital (CD5): explicar com s'ha creat i depurat un programa|Competencia digital (CD5): explicar cómo se ha creado y depurado un programa",
      "Pensament computacional: síntesi dels conceptes del curs i combinació d'eines en un mateix repte|Pensamiento computacional: síntesis de los conceptos del curso y combinación de herramientas en un mismo reto",
      "Competència personal i social: reconèixer el propi aprenentatge i valorar el dels altres|Competencia personal y social: reconocer el propio aprendizaje y valorar el de los demás"
    ],
    vocab: [
      ["Presentació|Presentación", "Explicar a un públic què hem fet i com ho hem fet.|Explicar a un público qué hemos hecho y cómo lo hemos hecho."],
      ["Públic|Público", "Les persones que escolten una presentació.|Las personas que escuchan una presentación."],
      ["Guió|Guion", "Les idees que direm, en ordre, preparades abans de presentar.|Las ideas que diremos, en orden, preparadas antes de presentar."],
      ["Projecte|Proyecto", "Una feina llarga, feta en diversos passos, on fem servir tot el que hem après.|Un trabajo largo, hecho en varios pasos, donde usamos todo lo que hemos aprendido."],
      ["Programador/a|Programador/a", "Una persona que dissenya, escriu, prova i millora programes.|Una persona que diseña, escribe, prueba y mejora programas."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Presentació i diploma»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Presentación y diploma»",
        "Projector, la presentació d'aquesta sessió i un ordinador connectat per als voluntaris/àries|Proyector, la presentación de esta sesión y un ordenador conectado para los voluntarios/as",
        "La carpeta de cada alumne/a (graelles i full del provador/a)|La carpeta de cada alumno/a (cuadrículas y hoja del probador/a)",
        "Els diplomes impresos, un per alumne/a|Los diplomas impresos, uno por alumno/a"
      ],
      imprimir: ["Guió de la meva presentació|Guion de mi presentación", "Diploma del curs|Diploma del curso"],
      prep: [
        "Imprimir un guió per alumne/a i un diploma per alumne/a. Escriure-hi el nom abans de la classe i signar-los.|Imprimir un guion por alumno/a y un diploma por alumno/a. Escribir el nombre antes de la clase y firmarlos.",
        "Organitzar les taules en grups de 4 per a les presentacions i triar 3 o 4 voluntaris/àries per presentar al projector.|Organizar las mesas en grupos de 4 para las presentaciones y elegir 3 o 4 voluntarios/as para presentar en el proyector.",
        "Provar abans que el repte de cada voluntari/ària s'obre bé a l'ordinador del projector (cadascú entra amb el seu usuari).|Probar antes que el reto de cada voluntario/a se abre bien en el ordenador del proyector (cada uno entra con su usuario).",
        "Si es vol, convidar les famílies als darrers 10 minuts per al lliurament dels diplomes.|Si se quiere, invitar a las familias a los últimos 10 minutos para la entrega de los diplomas."
      ]
    },
    plan: [
      { min: 5, t: "El gran dia de la fira|El gran día de la feria", fase: 'inici',
        fa: "Dona la benvinguda a l'última sessió del curs i explica com anirà: repàs, preparació, presentacions i diplomes. Fes la pregunta de repàs sobre els comentaris. Recorda que avui tothom presentarà, primer al seu grup i alguns també al projector.|Da la bienvenida a la última sesión del curso y explica cómo irá: repaso, preparación, presentaciones y diplomas. Haz la pregunta de repaso sobre los comentarios. Recuerda que hoy todo el mundo presentará, primero en su grupo y algunos también en el proyector.",
        diu: ["Quines dues parts té un bon comentari? Avui en fareu molts!|¿Qué dos partes tiene un buen comentario? ¡Hoy haréis muchos!",
          "Avui és la vostra fira: el vostre repte serà el protagonista.|Hoy es vuestra feria: vuestro reto será el protagonista."],
        slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El viatge del curs|El viaje del curso", fase: 'teoria',
        fa: "Recorreu les vuit illes del curs amb l'animació: per a cada unitat, demana una paraula o un bloc que en recordin. Projecta les dues demostracions de repàs («fins que» i els botons) i, abans d'executar-les, que la classe predigui què passarà. Acaba amb la caixa d'eines: cadascú pensa quines eines ha fet servir al seu repte.|Recorred las ocho islas del curso con la animación: para cada unidad, pide una palabra o un bloque que recuerden. Proyecta las dos demostraciones de repaso («hasta que» y los botones) y, antes de ejecutarlas, que la clase prediga qué pasará. Termina con la caja de herramientas: cada uno piensa qué herramientas ha usado en su reto.",
        diu: ["Què recordeu de la primera illa? I de la de les funcions?|¿Qué recordáis de la primera isla? ¿Y de la de las funciones?",
          "Si premo A i després B, de quin color quedarà el llum?|Si pulso A y después B, ¿de qué color quedará la luz?",
          "Quines eines heu fet servir al vostre repte?|¿Qué herramientas habéis usado en vuestro reto?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El guió i l'assaig|El guion y el ensayo", fase: 'desconnectat',
        fa: "Cada alumne/a omple el guió de la presentació amb les tres preguntes (què he fet, què he après, què m'ha costat) i fa servir el full del provador/a de la sessió 3 per recordar els canvis. Després, per parelles, cadascú assaja la presentació en un minut mentre l'altre/a escolta i li diu una cosa que ha fet bé.|Cada alumno/a rellena el guion de la presentación con las tres preguntas (qué he hecho, qué he aprendido, qué me ha costado) y usa la hoja del probador/a de la sesión 3 para recordar los cambios. Después, por parejas, cada uno ensaya la presentación en un minuto mientras el otro/a escucha y le dice algo que ha hecho bien.",
        diu: ["No cal escriure-ho tot: només unes paraules per recordar què direu.|No hace falta escribirlo todo: solo unas palabras para recordar qué diréis.",
          "Què us ha costat més? Un bug, un revolt, una funció? Això també s'explica!|¿Qué os ha costado más? ¿Un bug, una curva, una función? ¡Eso también se explica!"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 10, t: "A l'ordinador: repàs i repte final|En el ordenador: repaso y reto final", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins al repte final: la història, les targetes, ordenar la presentació, les preguntes de repàs, la predicció, la pausa activa, els llums i botons, la tanca de colors i «La gran desfilada». Qui no l'acabi la pot deixar per a casa: la presentació és més important.|Cada alumno/a hace la sesión hasta el reto final: la historia, las tarjetas, ordenar la presentación, las preguntas de repaso, la predicción, la pausa activa, las luces y botones, la valla de colores y «El gran desfile». Quien no lo termine lo puede dejar para casa: la presentación es más importante.",
        diu: ["Al repte dels botons, cada botó té el seu requadre: què hi ha de fer A? I B?|En el reto de los botones, cada botón tiene su recuadro: ¿qué tiene que hacer A? ¿Y B?",
          "A la desfilada, què es repeteix a cada costat del quadrat?|En el desfile, ¿qué se repite en cada lado del cuadrado?"],
        slides: ['s10', 's11'], app: "Des de «Recorda» fins a «Crea: La gran desfilada».|Desde «Recuerda» hasta «Crea: El gran desfile».", org: "Individual|Individual" },
      { min: 17, t: "Les presentacions|Las presentaciones", fase: 'crea',
        fa: "Cada alumne/a fa els últims retocs al seu repte (pas «Dissenya») i l'obre al pas de presentar. Primer, presentacions als grups de 4: cadascú té 2 minuts per explicar el guió i executar el repte, i el grup li fa un comentari amable i útil. Després, 3 o 4 voluntaris/àries presenten al projector davant de tota la classe.|Cada alumno/a hace los últimos retoques a su reto (paso «Diseña») y lo abre en el paso de presentar. Primero, presentaciones en los grupos de 4: cada uno tiene 2 minutos para explicar el guion y ejecutar el reto, y el grupo le hace un comentario amable y útil. Después, 3 o 4 voluntarios/as presentan en el proyector delante de toda la clase.",
        diu: ["Qui presenta parla; la resta escolta i mira el repte.|Quien presenta habla; el resto escucha y mira el reto.",
          "Abans d'executar-lo, que el públic digui per on creu que anirà en Bit.|Antes de ejecutarlo, que el público diga por dónde cree que irá Bit.",
          "Un aplaudiment per a cada programador/a!|¡Un aplauso para cada programador/a!"],
        slides: ['s12', 's13', 's14'], app: "Pas «Crea»: els últims retocs a l'editor i el pas de presentar el propi repte, projectat des de l'ordinador de cada voluntari/ària.|Paso «Crea»: los últimos retoques en el editor y el paso de presentar el propio reto, proyectado desde el ordenador de cada voluntario/a.", org: "Grups de 4 i després tot el grup|Grupos de 4 y después todo el grupo" },
      { min: 10, t: "Diplomes i comiat|Diplomas y despedida", fase: 'tancament',
        fa: "Repassa el que han après durant el curs amb el resum. Cada alumne/a arriba al pas del diploma a l'app i, mentrestant, lliura el diploma imprès a cadascú amb un aplaudiment. Acaba amb les preguntes finals de l'app, el tiquet de sortida i un comiat.|Repasa lo que han aprendido durante el curso con el resumen. Cada alumno/a llega al paso del diploma en la app y, mientras tanto, entrega el diploma impreso a cada uno con un aplauso. Termina con las preguntas finales de la app, el ticket de salida y una despedida.",
        diu: ["Al setembre no sabíeu què era un algorisme. Ara dissenyeu, programeu i milloreu reptes!|En septiembre no sabíais qué era un algoritmo. ¡Ahora diseñáis, programáis y mejoráis retos!",
          "Què us emporteu d'aquest curs?|¿Qué os lleváis de este curso?"],
        slides: ['s15', 's16', 's17'], app: "«Tancament»: el diploma de l'app (es pot imprimir), el missatge d'en Bit, la pregunta final i com m'he sentit.|«Cierre»: el diploma de la app (se puede imprimir), el mensaje de Bit, la pregunta final y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Té vergonya de presentar i no vol parlar davant dels altres.|Tiene vergüenza de presentar y no quiere hablar delante de los demás.",
        "Que presenti només al seu grup de 4 i que llegeixi el guió. Pot executar el repte i deixar que un company/a llegeixi una de les tres respostes.|Que presente solo en su grupo de 4 y que lea el guion. Puede ejecutar el reto y dejar que un compañero/a lea una de las tres respuestas."],
      ["La presentació és només «aquest és el meu repte» i l'executa.|La presentación es solo «este es mi reto» y lo ejecuta.",
        "Fes-li les tres preguntes del guió una a una: què has fet, quines eines has fet servir, què t'ha costat. Que les respongui mirant el full.|Hazle las tres preguntas del guion una a una: qué has hecho, qué herramientas has usado, qué te ha costado. Que las responda mirando la hoja."],
      ["El repte no funciona just quan l'ha de presentar.|El reto no funciona justo cuando lo tiene que presentar.",
        "Converteix-ho en una oportunitat: que ho expliqui al públic com un bug de veritat i el busqui amb «Pas a pas». Celebra-ho: és el que fan els programadors.|Conviértelo en una oportunidad: que lo explique al público como un bug de verdad y lo busque con «Paso a paso». Celébralo: es lo que hacen los programadores."],
      ["El públic parla mentre algú presenta o fa comentaris que no ajuden.|El público habla mientras alguien presenta o hace comentarios que no ayudan.",
        "Recorda les normes del públic de la diapositiva 13 i les dues parts d'un bon comentari. Dona un paper a cada membre del grup: qui fa la pregunta, qui diu el que li ha agradat…|Recuerda las normas del público de la diapositiva 13 y las dos partes de un buen comentario. Da un papel a cada miembro del grupo: quién hace la pregunta, quién dice lo que le ha gustado…"],
      ["Al repte dels botons, posa tots els blocs al mateix botó o al «Quan comença».|En el reto de los botones, pone todos los bloques en el mismo botón o en el «Al empezar».",
        "Que miri els requadres: cada botó té el seu. Pregunta-li què ha de passar quan es prem A i que ho posi només dins de «Quan premo A».|Que mire los recuadros: cada botón tiene el suyo. Pregúntale qué tiene que pasar cuando se pulsa A y que lo ponga solo dentro de «Al pulsar A»."]
    ],
    diff: {
      mes: "Preparar una pregunta per al públic al final de la presentació («per on creieu que anirà en Bit?») i fer una versió nova del repte que faci servir una eina que encara no hi hagi posat. També poden ajudar a preparar l'ordinador del projector.|Preparar una pregunta para el público al final de la presentación («¿por dónde creéis que irá Bit?») y hacer una versión nueva del reto que use una herramienta que todavía no haya puesto. También pueden ayudar a preparar el ordenador del proyector.",
      menys: "Presentar al grup de 4 amb el guió a la mà i respondre només dues preguntes (què he fet i què m'ha costat). Dels reptes finals, fer el de la tanca de colors i la desfilada amb la pista.|Presentar en el grupo de 4 con el guion en la mano y responder solo dos preguntas (qué he hecho y qué me ha costado). De los retos finales, hacer el de la valla de colores y el desfile con la pista."
    },
    aval: {
      ticket: ["Digues tres eines que has après en aquest curs.|Di tres herramientas que has aprendido en este curso.",
        "Què és el que més t'ha agradat de fer el teu propi repte?|¿Qué es lo que más te ha gustado de hacer tu propio reto?"],
      rubric: [
        ["Presentació|Presentación", "Explica què ha fet, quines eines ha fet servir i què li ha costat, i executa el repte.|Explica qué ha hecho, qué herramientas ha usado y qué le ha costado, y ejecuta el reto.", "Presenta el repte i l'executa, però li cal ajuda per explicar com l'ha fet.|Presenta el reto y lo ejecuta, pero necesita ayuda para explicar cómo lo ha hecho."],
        ["Conceptes del curs|Conceptos del curso", "Anomena i reconeix els conceptes del curs i resol els reptes finals que els combinen.|Nombra y reconoce los conceptos del curso y resuelve los retos finales que los combinan.", "Reconeix alguns conceptes i resol una part dels reptes finals.|Reconoce algunos conceptos y resuelve una parte de los retos finales."],
        ["Escolta i comentaris|Escucha y comentarios", "Escolta les presentacions i fa comentaris amables i concrets.|Escucha las presentaciones y hace comentarios amables y concretos.", "Escolta, però li costa fer un comentari concret.|Escucha, pero le cuesta hacer un comentario concreto."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla us pot presentar el seu repte igual que ho ha fet a classe: què ha fet, què ha après i què li ha costat. A «Projectes» hi trobareu totes les versions que ha programat durant el curs. Enhorabona per aquest curs!|En casa, con el móvil, vuestro hijo o hija os puede presentar su reto igual que lo ha hecho en clase: qué ha hecho, qué ha aprendido y qué le ha costado. En «Proyectos» encontraréis todas las versiones que ha programado durante el curso. ¡Enhorabuena por este curso!",
    slides: [
      { id: 's1', k: 'portada', t: "Presentació i diploma|Presentación y diploma", x: "El gran dia de la Fira dels Reptes: presentem i celebrem!|El gran día de la Feria de los Retos: ¡presentamos y celebramos!",
        nota: "Explica l'ordre de la sessió: repàs, guió, reptes finals, presentacions i diplomes.|Explica el orden de la sesión: repaso, guion, retos finales, presentaciones y diplomas." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Quines dues parts té un bon comentari?|¿Qué dos partes tiene un buen comentario?",
        nota: "Resposta: una cosa que t'ha agradat i una idea per millorar. Avui els faran servir a les presentacions.|Respuesta: algo que te ha gustado y una idea para mejorar. Hoy los usarán en las presentaciones." },
      { id: 's3', k: 'anim', t: "El viatge del curs|El viaje del curso", anim: 'u8journey', x: "Vuit illes, vuit unitats… i un programador/a a cada ordinador.|Ocho islas, ocho unidades… y un programador/a en cada ordenador.",
        nota: "Per a cada illa, demana una paraula o un bloc que en recordin.|Para cada isla, pide una palabra o un bloque que recuerden." },
      { id: 's4', k: 'concepte', t: "Les eines del curs|Las herramientas del curso", blocks: ['Endavant|Adelante', 'Repeteix|Repite', 'Llum|Luz', 'Quan premo A|Al pulsar A', 'Si… si no…|Si… si no…', 'Funció|Función', 'Suma 1|Suma 1', 'Repeteix fins que|Repite hasta que'],
        punts: ["Seqüència: ordres en ordre|Secuencia: órdenes en orden", "Bucle: repetir|Bucle: repetir", "Esdeveniment: quan passa alguna cosa|Evento: cuando pasa algo", "Condició: decidir|Condición: decidir"],
        nota: "Assenyala cada fitxa i que la classe digui per a què serveix i en quin repte l'han fet servir.|Señala cada ficha y que la clase diga para qué sirve y en qué reto la han usado." },
      { id: 's5', k: 'demo', t: "Repàs: fins que…|Repaso: hasta que…", x: "Repeteix fins que hi hagi un obstacle davant: Endavant. Després, Gira a la dreta i Endavant ×2. A, B o C?|Repite hasta que haya un obstáculo delante: Adelante. Después, Gira a la derecha y Adelante ×2. ¿A, B o C?",
        demo: { w: { map: ['>###.', '.#.#.', '.C.A.', '...B.'] }, prog: 'until:wall{ f } r 2{ f }' },
        nota: "Resposta: A. El bucle no sap quantes caselles hi ha: avança fins que troba l'obstacle.|Respuesta: A. El bucle no sabe cuántas casillas hay: avanza hasta que encuentra el obstáculo." },
      { id: 's6', k: 'demo', t: "Repàs: llums i botons|Repaso: luces y botones", x: "Quan comença: llum groc. Quan premo A: llum verd i nota do. Quan premo B: llum vermell i nota sol. Premerem A i després B.|Al empezar: luz amarilla. Al pulsar A: luz verde y nota do. Al pulsar B: luz roja y nota sol. Pulsaremos A y después B.",
        demo: { w: { map: ['.....', '..v..', '.....'] }, prog: 'light:y', evs: { A: 'light:g note:do', B: 'light:r note:sol' }, press: 'AB' },
        nota: "Abans d'executar, pregunta de quin color quedarà el llum al final. Resposta: vermell, perquè B és l'últim botó.|Antes de ejecutar, pregunta de qué color quedará la luz al final. Respuesta: rojo, porque B es el último botón." },
      { id: 's7', k: 'anim', t: "Quines eines has fet servir?|¿Qué herramientas has usado?", anim: 'u8tools', x: "Al teu repte, quines eines del curs hi has posat?|En tu reto, ¿qué herramientas del curso has puesto?",
        nota: "Que cadascú en digui una en veu baixa al company/a: serà part de la presentació.|Que cada uno diga una en voz baja al compañero/a: será parte de la presentación." },
      { id: 's8', k: 'activitat', t: "El guió de la presentació|El guion de la presentación", timer: 10, punts: ["Què he fet? El nom i l'objectiu del repte.|¿Qué he hecho? El nombre y el objetivo del reto.", "Què he après? Les eines que he fet servir.|¿Qué he aprendido? Las herramientas que he usado.", "Què m'ha costat? Un bug, un canvi, una millora.|¿Qué me ha costado? Un bug, un cambio, una mejora.", "Assaja-ho amb la parella en un minut.|Ensáyalo con la pareja en un minuto."],
        nota: "Recorda'ls que el full del provador/a de la sessió 3 els pot ajudar a respondre la tercera pregunta.|Recuérdales que la hoja del probador/a de la sesión 3 les puede ayudar a responder la tercera pregunta." },
      { id: 's9', k: 'concepte', t: "Com es presenta|Cómo se presenta", punts: ["Parla a poc a poc i mira el públic.|Habla despacio y mira al público.", "Executa el repte perquè tothom el vegi.|Ejecuta el reto para que todo el mundo lo vea.", "Si alguna cosa falla, explica el bug.|Si algo falla, explica el bug.", "Acaba dient «gràcies».|Termina diciendo «gracias»."],
        nota: "Fes tu una presentació curta d'exemple amb un repte inventat: és la millor manera que vegin com es fa.|Haz tú una presentación corta de ejemplo con un reto inventado: es la mejor manera de que vean cómo se hace." },
      { id: 's10', k: 'activitat', t: "A l'ordinador: repàs i repte final|En el ordenador: repaso y reto final", timer: 10, punts: ["Obre la sessió «Presentació i diploma».|Abre la sesión «Presentación y diploma».", "Respon les preguntes de repàs del curs.|Responde las preguntas de repaso del curso.", "Fes els reptes de llums i del llapis.|Haz los retos de luces y del lápiz.", "Para quan acabis «La gran desfilada».|Para cuando termines «El gran desfile»."],
        nota: "Qui vagi més lent pot saltar-se la desfilada i fer-la a casa: la presentació és la part més important d'avui.|Quien vaya más lento puede saltarse el desfile y hacerlo en casa: la presentación es la parte más importante de hoy." },
      { id: 's11', k: 'repte', t: "La gran desfilada|El gran desfile", x: "Recull les 3 estrelles de les cantonades i acaba a la bandera del mig, amb un bucle, una funció o «fins que».|Recoge las 3 estrellas de las esquinas y termina en la bandera del centro, con un bucle, una función o «hasta que».",
        nota: "Pista: cada costat del quadrat és «Endavant ×4, Gira a la dreta». Es pot fer amb una funció dins d'un bucle.|Pista: cada lado del cuadrado es «Adelante ×4, Gira a la derecha». Se puede hacer con una función dentro de un bucle." },
      { id: 's12', k: 'activitat', t: "Últims retocs|Últimos retoques", timer: 3, punts: ["Obre el teu repte a l'editor.|Abre tu reto en el editor.", "Fes l'últim canvi, si cal, i desa'l.|Haz el último cambio, si hace falta, y guárdalo.", "Obre'l al pas de presentar.|Ábrelo en el paso de presentar."],
        nota: "Que no facin canvis grans: el repte ha d'arribar a la presentació funcionant.|Que no hagan cambios grandes: el reto tiene que llegar a la presentación funcionando." },
      { id: 's13', k: 'activitat', t: "Presentacions als grups|Presentaciones en los grupos", timer: 10, punts: ["2 minuts per persona.|2 minutos por persona.", "Qui presenta: guió i executa el repte.|Quien presenta: guion y ejecuta el reto.", "El públic escolta i, al final, fa un comentari amable i útil.|El público escucha y, al final, hace un comentario amable y útil.", "Aplaudiment!|¡Aplauso!"],
        nota: "Controla el temps en veu alta («canvi de presentador/a!») perquè tothom tingui el seu torn.|Controla el tiempo en voz alta («¡cambio de presentador/a!») para que todo el mundo tenga su turno." },
      { id: 's14', k: 'activitat', t: "Al projector|En el proyector", timer: 4, punts: ["3 o 4 voluntaris/àries.|3 o 4 voluntarios/as.", "Abans d'executar, el públic prediu el camí.|Antes de ejecutar, el público predice el camino.", "Una pregunta o un comentari del públic.|Una pregunta o un comentario del público."],
        nota: "Tria voluntaris/àries amb reptes diferents (amb caixes, amb estrelles, amb un camí llarg) per mostrar la varietat.|Elige voluntarios/as con retos diferentes (con cajas, con estrellas, con un camino largo) para mostrar la variedad." },
      { id: 's15', k: 'resum', t: "Què hem après en aquest curs|Qué hemos aprendido en este curso", punts: ["Ordres en ordre, girs i bugs|Órdenes en orden, giros y bugs", "Bucles, llums, sons i botons|Bucles, luces, sonidos y botones", "Sensors, funcions i variables|Sensores, funciones y variables", "«Fins que»… i el meu propi repte!|«Hasta que»… ¡y mi propio reto!"],
        nota: "Felicita la classe per tot el camí: han après a pensar com programadors i programadores.|Felicita a la clase por todo el camino: han aprendido a pensar como programadores y programadoras." },
      { id: 's16', k: 'concepte', t: "Programadors i programadores de l'illa|Programadores y programadoras de la isla", x: "Cada alumne/a rep el diploma del curs Tech Robot.|Cada alumno/a recibe el diploma del curso Tech Robot.",
        nota: "Lliura els diplomes un a un amb un aplaudiment. A l'app, el pas del diploma també es pot imprimir.|Entrega los diplomas uno a uno con un aplauso. En la app, el paso del diploma también se puede imprimir." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Digues tres eines que has après en aquest curs.|Di tres herramientas que has aprendido en este curso.", "Què t'ha agradat més de fer el teu repte?|¿Qué te ha gustado más de hacer tu reto?"],
        nota: "Escolta les respostes com a avaluació final del curs: qui anomena les eines i qui explica com ha treballat.|Escucha las respuestas como evaluación final del curso: quién nombra las herramientas y quién explica cómo ha trabajado." }
    ],
    print: [
      { id: 'p1', t: "Guió de la meva presentació|Guion de mi presentación", k: 'fitxa',
        intro: "Escriu unes paraules per a cada pregunta: t'ajudaran a recordar què vols dir. No cal escriure frases llargues.|Escribe unas palabras para cada pregunta: te ayudarán a recordar qué quieres decir. No hace falta escribir frases largas.",
        items: [
          { q: "Què he fet? (el nom del repte i què ha de fer en Bit)|¿Qué he hecho? (el nombre del reto y qué tiene que hacer Bit)", sol: "Resposta oberta: el nom i l'objectiu del repte.|Respuesta abierta: el nombre y el objetivo del reto." },
          { q: "Què he après? (quines eines del curs he fet servir)|¿Qué he aprendido? (qué herramientas del curso he usado)", sol: "Resposta oberta: per exemple, un bucle, una funció, una condició o «fins que».|Respuesta abierta: por ejemplo, un bucle, una función, una condición o «hasta que»." },
          { q: "Què m'ha costat? (un bug, un canvi, un comentari que m'ha ajudat)|¿Qué me ha costado? (un bug, un cambio, un comentario que me ha ayudado)", sol: "Resposta oberta: valoreu que expliqui un error o una millora concreta.|Respuesta abierta: valorad que explique un error o una mejora concreta." },
          { q: "Què m'agradaria programar ara que ja sé tot això?|¿Qué me gustaría programar ahora que ya sé todo esto?", sol: "Resposta oberta.|Respuesta abierta." }
        ] },
      { id: 'p2', t: "Diploma del curs|Diploma del curso", k: 'diploma',
        intro: "ha completat el curs Tech Robot de Numi Tech: ha dissenyat, programat, provat i presentat el seu propi repte per a en Bit.|ha completado el curso Tech Robot de Numi Tech: ha diseñado, programado, probado y presentado su propio reto para Bit.",
        items: [
          'Ha après a escriure programes amb ordres en ordre i a depurar-los.|Ha aprendido a escribir programas con órdenes en orden y a depurarlos.',
          'Ha fet servir bucles, llums, sons i botons.|Ha usado bucles, luces, sonidos y botones.',
          'Ha programat decisions amb sensors i condicions.|Ha programado decisiones con sensores y condiciones.',
          'Ha creat funcions i ha fet servir variables.|Ha creado funciones y ha usado variables.',
          'Ha dissenyat, provat i millorat un repte propi.|Ha diseñado, probado y mejorado un reto propio.'
        ] }
    ]
  }
});
