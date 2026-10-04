/* ===== Numi Tech · guia del professorat · Tech Robot, unitat 1 «Ordres en ordre» =====
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

