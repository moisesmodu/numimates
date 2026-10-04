/* Tech Web · unitat 4 «CSS» · guia del professorat (sessions w4-1 … w4-4)
   Classe de 60 minuts: presentació projectada (amb demos de codi i resultat), una activitat sense pantalla amb el seu
   imprimible i l'app a l'ordinador. Els textos són "català|castellano"; el codi de les demos no es tradueix. */
Object.assign(TGUIDE, (() => {
  const J = (...l) => l.join('\n');
  const FESTA = J('<h1>Festa de la tardor</h1>', '<p>Dissabte, a la plaça del poble.</p>', '<ul>', '  <li>Castanyes</li>', '  <li>Música</li>', '  <li>Tallers</li>', '</ul>');
  const W = (html, css) => ({ k: 'web', html, css });
  return {
    /* ---------- Sessió 1 · Donar estil ---------- */
    'w4-1': {
      obj: [
        "L'alumne/a explica la diferència entre l'HTML (què hi ha a la pàgina) i el CSS (com es veu) amb un exemple propi.|El alumno/a explica la diferencia entre el HTML (qué hay en la página) y el CSS (cómo se ve) con un ejemplo propio.",
        "L'alumne/a identifica les parts d'una regla: selector, claus, propietat, dos punts, valor i punt i coma.|El alumno/a identifica las partes de una regla: selector, llaves, propiedad, dos puntos, valor y punto y coma.",
        "L'alumne/a escriu regles amb color, font-size i text-align per a diverses etiquetes.|El alumno/a escribe reglas con color, font-size y text-align para varias etiquetas.",
        "L'alumne/a troba i arregla els errors típics del CSS: el punt i coma i la clau que falten.|El alumno/a encuentra y arregla los errores típicos del CSS: el punto y coma y la llave que faltan."
      ],
      comp: [
        "Competència digital (CD2): crear i editar continguts digitals, una pàgina web amb estil propi|Competencia digital (CD2): crear y editar contenidos digitales, una página web con estilo propio",
        "Competència digital (CD5): llenguatges de marques i d'estil amb una sintaxi exacta|Competencia digital (CD5): lenguajes de marcas y de estilo con una sintaxis exacta",
        "Pensament computacional: regles, patrons i depuració d'errors|Pensamiento computacional: reglas, patrones y depuración de errores",
        "Educació visual i plàstica: el color i la mida per comunicar|Educación visual y plástica: el color y el tamaño para comunicar"
      ],
      vocab: [
        ["CSS|CSS", "El llenguatge que diu com es veu una pàgina web: colors, mides, lletres.|El lenguaje que dice cómo se ve una página web: colores, tamaños, letras."],
        ["Regla|Regla", "Una instrucció de CSS: un selector i, entre claus, les declaracions.|Una instrucción de CSS: un selector y, entre llaves, las declaraciones."],
        ["Selector|Selector", "La part de la regla que diu a quins elements s'aplica (h1, p, li…).|La parte de la regla que dice a qué elementos se aplica (h1, p, li…)."],
        ["Declaració|Declaración", "Una propietat i un valor, separats per dos punts i acabats amb punt i coma.|Una propiedad y un valor, separados por dos puntos y acabados con punto y coma."],
        ["Propietat i valor|Propiedad y valor", "Què canviem (color, font-size) i com ho deixem (crimson, 20px).|Qué cambiamos (color, font-size) y cómo lo dejamos (crimson, 20px)."],
        ["Navegador|Navegador", "El programa que llegeix l'HTML i el CSS i dibuixa la pàgina.|El programa que lee el HTML y el CSS y dibuja la página."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Donar estil»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Dar estilo»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Llapis de colors per parella: vermell, blau, verd, lila, taronja i gris|Lápices de colores por pareja: rojo, azul, verde, lila, naranja y gris",
          "Tisores per retallar les peces de regla (o portar-les ja retallades)|Tijeras para recortar las piezas de regla (o traerlas ya recortadas)"
        ],
        imprimir: ["Targetes: peces de regla (una tira per parella)|Tarjetas: piezas de regla (una tira por pareja)", "Fitxa: Fes de navegador (una per alumne/a)|Ficha: Haz de navegador (una por alumno/a)"],
        prep: [
          "Retallar un paquet de peces de regla per parella. Si es plastifiquen, serveixen per a tota la unitat.|Recortar un paquete de piezas de regla por pareja. Si se plastifican, sirven para toda la unidad.",
          "Escriure a la pissarra, ben gran: selector { propietat: valor; }. Hi tornarem durant tota la unitat.|Escribir en la pizarra, bien grande: selector { propiedad: valor; }. Volveremos a ello durante toda la unidad.",
          "Provar abans les demos de les diapositives 5, 8 i 9 per veure el resultat de cada regla.|Probar antes las demos de las diapositivas 5, 8 y 9 para ver el resultado de cada regla.",
          "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: una web sense estil|Bienvenida: una web sin estilo", fase: 'inici',
          fa: "Projecta la portada i la pàgina de la Festa de la tardor sense estil. Pregunta què hi canviarien perquè fes ganes d'anar-hi i apunta tres o quatre idees a la pissarra (colors, mides, centrar…). Explica que avui aprendran el llenguatge que ho fa possible.|Proyecta la portada y la página de la Fiesta de otoño sin estilo. Pregunta qué cambiarían para que diera ganas de ir y apunta tres o cuatro ideas en la pizarra (colores, tamaños, centrar…). Explica que hoy aprenderán el lenguaje que lo hace posible.",
          diu: ["Aquesta web té tot el contingut, però… hi aniríeu, a aquesta festa?|Esta web tiene todo el contenido, pero… ¿iríais a esta fiesta?",
            "Qui decideix de quin color és el títol d'una web? L'ordinador s'ho inventa?|¿Quién decide de qué color es el título de una web? ¿El ordenador se lo inventa?",
            "Avui aprendrem CSS: el llenguatge de l'estil.|Hoy aprenderemos CSS: el lenguaje del estilo."],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "HTML i CSS; com és una regla|HTML y CSS; cómo es una regla", fase: 'teoria',
          fa: "Explica amb l'animació que l'HTML diu què hi ha i el CSS com es veu (la casa i la pintura). Mostra la primera regla i, abans de passar a la demo, demana que prediguin què canviarà. Desmunta la regla peça a peça amb l'animació i assenyala el patró de la pissarra. Acaba amb la demo del punt i coma que falta: deixa que endevinin per què no funciona.|Explica con la animación que el HTML dice qué hay y el CSS cómo se ve (la casa y la pintura). Muestra la primera regla y, antes de pasar a la demo, pide que predigan qué cambiará. Desmonta la regla pieza a pieza con la animación y señala el patrón de la pizarra. Acaba con la demo del punto y coma que falta: deja que adivinen por qué no funciona.",
          diu: ["L'HTML és la casa; el CSS, la pintura i la decoració.|El HTML es la casa; el CSS, la pintura y la decoración.",
            "Si el selector és h1, quins elements canviaran? I el paràgraf?|Si el selector es h1, ¿qué elementos cambiarán? ¿Y el párrafo?",
            "Els noms del CSS són en anglès: color, center, red. Vermell no l'entén!|Los nombres del CSS son en inglés: color, center, red. ¡Rojo no lo entiende!",
            "Per què el títol ha sortit negre si hem escrit crimson? Busqueu què falta.|¿Por qué el título ha salido negro si hemos escrito crimson? Buscad qué falta."],
          slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Fes de navegador|Haz de navegador", fase: 'desconnectat',
          fa: "Per parelles, primer construeixen tres regles amb les peces retallades (4 minuts): tu en dius una en veu alta («els paràgrafs, blaus i centrats») i la munten sobre la taula. Després, cada alumne/a fa la fitxa «Fes de navegador»: llegeix l'HTML i el CSS i dibuixa el resultat amb llapis de colors (6 minuts). Comproveu junts l'exercici 4, que té l'error amagat.|Por parejas, primero construyen tres reglas con las piezas recortadas (4 minutos): tú dices una en voz alta («los párrafos, azules y centrados») y la montan sobre la mesa. Después, cada alumno/a hace la ficha «Haz de navegador»: lee el HTML y el CSS y dibuja el resultado con lápices de colores (6 minutos). Comprobad juntos el ejercicio 4, que tiene el error escondido.",
          diu: ["Quantes peces té una regla completa? Compteu-les.|¿Cuántas piezas tiene una regla completa? Contadlas.",
            "Un navegador no s'inventa res: pinteu només el que diuen les regles.|Un navegador no se inventa nada: pintad solo lo que dicen las reglas.",
            "A l'exercici 4 hi ha una trampa. Què faria el navegador?|En el ejercicio 4 hay una trampa. ¿Qué haría el navegador?"],
          slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles i després individual|Por parejas y después individual" },
        { min: 15, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
          fa: "Cada alumne/a obre la sessió i avança al seu ritme fins a la pausa activa. A «Fes de navegador», que toquin «Ho hem fet!», perquè ja l'hem fet a classe. Passeja per l'aula i, a la pregunta de la línia amb l'error, demana que expliquin per què l'han triada abans de tocar-la.|Cada alumno/a abre la sesión y avanza a su ritmo hasta la pausa activa. En «Haz de navegador», que toquen «¡Lo hemos hecho!», porque ya lo hemos hecho en clase. Pasea por el aula y, en la pregunta de la línea con el error, pide que expliquen por qué la han elegido antes de tocarla.",
          diu: ["Abans de triar la vista prèvia, digues en veu alta què farà la regla.|Antes de elegir la vista previa, di en voz alta qué hará la regla.",
            "Llegeix cada línia del CSS: on falta una peça del patró?|Lee cada línea del CSS: ¿dónde falta una pieza del patrón?"],
          slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les dues preguntes de la unitat 3, les dues històries, les targetes de «Descobreix», ordenar les peces de la regla, «Fes de navegador» (ja fet), quina vista prèvia fa el CSS, la línia amb l'error i la regla ben escrita.|De «Recuerda» hasta «Investiga»: las dos preguntas de la unidad 3, las dos historias, las tarjetas de «Descubre», ordenar las piezas de la regla, «Haz de navegador» (ya hecho), qué vista previa hace el CSS, la línea con el error y la regla bien escrita.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: les primeres regles|Retos: las primeras reglas", fase: 'ordinador',
          fa: "Feu la pausa activa tots junts. Després escriu en directe, a l'editor projectat, una regla amb la classe (demana una peça a cada alumne/a) i deixa'ls fer els quatre reptes. Al tercer (el CSS d'en Bit), insisteix que llegeixin l'avís groc de sota l'editor abans de tocar res.|Haced la pausa activa todos juntos. Después escribe en directo, en el editor proyectado, una regla con la clase (pide una pieza a cada alumno/a) y deja que hagan los cuatro retos. En el tercero (el CSS de Bit), insiste en que lean el aviso amarillo de debajo del editor antes de tocar nada.",
          diu: ["Quina és la primera peça? I després del selector?|¿Cuál es la primera pieza? ¿Y después del selector?",
            "L'avís groc us diu on és l'error: llegiu-lo a poc a poc.|El aviso amarillo os dice dónde está el error: leedlo despacio.",
            "Mireu la llista de comprovacions: quines ja estan marcades?|Mirad la lista de comprobaciones: ¿cuáles ya están marcadas?"],
          slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: el color del títol, la regla del paràgraf, el CSS d'en Bit amb dos errors i les tres regles des de zero.|«Pausa activa» y los cuatro retos: el color del título, la regla del párrafo, el CSS de Bit con dos errores y las tres reglas desde cero.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: la web del meu club|Crea: la web de mi club", fase: 'crea',
          fa: "Cada alumne/a dona estil a la web d'un club: pot canviar els textos i triar els colors i les mides. Quan acabin, en parelles s'ensenyen la pàgina i l'altre/a diu quina regla li agrada més.|Cada alumno/a da estilo a la web de un club: puede cambiar los textos y elegir los colores y los tamaños. Cuando terminen, por parejas se enseñan la página y el otro/a dice qué regla le gusta más.",
          diu: ["Amb el mateix HTML, cadascú tindrà una web diferent. Això és el CSS!|Con el mismo HTML, cada uno tendrá una web diferente. ¡Eso es el CSS!",
            "Comproveu que no hi ha cap avís groc abans de desar.|Comprobad que no hay ningún aviso amarillo antes de guardar."],
          slides: ['s15'], app: "Pas «Crea»: La web del meu club.|Paso «Crea»: La web de mi club.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres idees amb el resum i deixa que responguin les preguntes finals de l'app. A la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas con el resumen y deja que respondan las preguntas finales de la app. En la puerta, haz a cada alumno/a una pregunta del ticket.",
          diu: ["Qui em diu les parts de la regla de la pissarra?|¿Quién me dice las partes de la regla de la pizarra?",
            "Què passa si oblidem un punt i coma?|¿Qué pasa si olvidamos un punto y coma?"],
          slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Escriu el CSS a la pestanya HTML (o hi barreja etiquetes).|Escribe el CSS en la pestaña HTML (o mezcla etiquetas).",
          "Pregunta-li què va a index.html i què a estil.css, i que miri quina pestanya té oberta.|Pregúntale qué va en index.html y qué en estil.css, y que mire qué pestaña tiene abierta."],
        ["S'oblida el punt i coma o els dos punts.|Olvida el punto y coma o los dos puntos.",
          "Que llegeixi l'avís de sota l'editor i repassi la seva línia amb el dit, peça a peça, comparant-la amb el patró de la pissarra.|Que lea el aviso de debajo del editor y repase su línea con el dedo, pieza a pieza, comparándola con el patrón de la pizarra."],
        ["Obre una clau i no la tanca, o en posa una de més.|Abre una llave y no la cierra, o pone una de más.",
          "Que compti en veu alta les { i les } de tot el CSS: n'hi ha d'haver les mateixes.|Que cuente en voz alta las { y las } de todo el CSS: tiene que haber las mismas."],
        ["Escriu els valors en català o castellà (vermell, centre).|Escribe los valores en catalán o castellano (rojo, centro).",
          "Recorda-li que el CSS és en anglès i que busqui el valor a la targeta de teoria o als botons de fragments.|Recuérdale que el CSS es en inglés y que busque el valor en la tarjeta de teoría o en los botones de fragmentos."],
        ["Escriu el selector amb els signes de l'etiqueta: &lt;h1&gt; { … }.|Escribe el selector con los signos de la etiqueta: &lt;h1&gt; { … }.",
          "Pregunta: al CSS hi ha etiquetes? El selector és només el nom, h1. Que ho compari amb la demo.|Pregunta: ¿en el CSS hay etiquetas? El selector es solo el nombre, h1. Que lo compare con la demo."]
      ],
      diff: {
        mes: "Fer dues versions ben diferents de la web del club amb el mateix HTML (per exemple, una de seriosa i una de festiva) i explicar quines regles han canviat. Investigar altres propietats de text a l'editor, com text-transform: uppercase.|Hacer dos versiones muy diferentes de la web del club con el mismo HTML (por ejemplo, una seria y una festiva) y explicar qué reglas han cambiado. Investigar otras propiedades de texto en el editor, como text-transform: uppercase.",
        menys: "Tenir el patró selector { propietat: valor; } escrit en un paper al costat de l'ordinador i fer servir els botons de fragments de l'editor. Començar pels dos primers reptes, que només demanen completar una regla.|Tener el patrón selector { propiedad: valor; } escrito en un papel al lado del ordenador y usar los botones de fragmentos del editor. Empezar por los dos primeros retos, que solo piden completar una regla."
      },
      aval: {
        ticket: ["Digues les parts de la regla h1 { color: navy; }.|Di las partes de la regla h1 { color: navy; }.",
          "Què passa si oblides el punt i coma entre dues declaracions?|¿Qué pasa si olvidas el punto y coma entre dos declaraciones?"],
        rubric: [
          ["HTML i CSS|HTML y CSS", "Explica què fa cadascun amb un exemple propi.|Explica qué hace cada uno con un ejemplo propio.", "Sap que el CSS canvia l'aspecte, però encara els confon.|Sabe que el CSS cambia el aspecto, pero todavía los confunde."],
          ["Sintaxi de la regla|Sintaxis de la regla", "Escriu regles completes sense ajuda: selector, claus, dos punts i punt i coma.|Escribe reglas completas sin ayuda: selector, llaves, dos puntos y punto y coma.", "Escriu regles amb el model al davant o amb algun signe que falta.|Escribe reglas con el modelo delante o con algún signo que falta."],
          ["Depuració|Depuración", "Troba i arregla el punt i coma i la clau que falten llegint l'avís.|Encuentra y arregla el punto y coma y la llave que faltan leyendo el aviso.", "Troba l'error amb ajuda, però encara no sap explicar per què falla.|Encuentra el error con ayuda, pero todavía no sabe explicar por qué falla."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió. Repte: busqueu un envàs, un cartell o una revista i escriviu en un paper les «regles de CSS» que el descriurien (de quin color és el títol, quina mida té, si està centrat…).|En casa, con el móvil, podéis repetir la sesión. Reto: buscad un envase, un cartel o una revista y escribid en un papel las «reglas de CSS» que lo describirían (de qué color es el título, qué tamaño tiene, si está centrado…).",
      slides: [
        { id: 's1', k: 'portada', t: 'Donar estil|Dar estilo', x: "Avui les webs deixaran de ser negres sobre blanc: aprendrem CSS.|Hoy las webs dejarán de ser negras sobre blanco: aprenderemos CSS.",
          nota: "Presenta l'objectiu: al final de la classe, cadascú haurà donat estil a una web amb les seves pròpies regles.|Presenta el objetivo: al final de la clase, cada uno habrá dado estilo a una web con sus propias reglas." },
        { id: 's2', k: 'pregunta', t: 'Per què les webs no són totes iguals?|¿Por qué las webs no son todas iguales?', x: "Qui decideix els colors, les lletres i les mides d'una pàgina web?|¿Quién decide los colores, las letras y los tamaños de una página web?",
          nota: "Recull respostes sense corregir. Al final de la classe hi tornarem: ho decideix qui escriu el CSS.|Recoge respuestas sin corregir. Al final de la clase volveremos: lo decide quien escribe el CSS." },
        { id: 's3', k: 'media', t: 'La web de la festa, sense estil|La web de la fiesta, sin estilo', x: "Té títol, paràgraf i llista… però fa ganes d'anar-hi?|Tiene título, párrafo y lista… pero ¿da ganas de ir?", media: W(FESTA),
          nota: "Apunta a la pissarra què hi canviarien. Al llarg de la sessió anirem fent realitat aquestes idees.|Apunta en la pizarra qué cambiarían. A lo largo de la sesión iremos haciendo realidad estas ideas." },
        { id: 's4', k: 'anim', t: 'Dos llenguatges, dues feines|Dos lenguajes, dos trabajos', anim: 'w4split', x: "L'HTML diu què hi ha; el CSS, com es veu.|El HTML dice qué hay; el CSS, cómo se ve.",
          nota: "Fes servir la imatge de la casa: les parets i els mobles (HTML) i la pintura i la decoració (CSS). Es pot repintar sense moure cap paret.|Usa la imagen de la casa: las paredes y los muebles (HTML) y la pintura y la decoración (CSS). Se puede repintar sin mover ninguna pared." },
        { id: 's5', k: 'media', t: 'La primera regla|La primera regla', x: "Què canviarà? Només el títol, o també el paràgraf?|¿Qué cambiará? ¿Solo el título, o también el párrafo?", media: W(J('<h1>Festa de la tardor</h1>', '<p>Dissabte, a la plaça del poble.</p>'), J('h1 {', '  color: crimson;', '}')),
          nota: "Fes que prediguin abans de mirar el resultat. El selector h1 només afecta els títols h1.|Haz que predigan antes de mirar el resultado. El selector h1 solo afecta a los títulos h1." },
        { id: 's6', k: 'anim', t: "Les parts d'una regla|Las partes de una regla", anim: 'w4rule', x: 'selector { propietat: valor; }|selector { propiedad: valor; }',
          nota: "Assenyala cada peça al patró de la pissarra. Fes que la classe digui en veu alta el nom de cada part mentre apareix.|Señala cada pieza en el patrón de la pizarra. Haz que la clase diga en voz alta el nombre de cada parte mientras aparece." },
        { id: 's7', k: 'concepte', t: 'Les primeres propietats|Las primeras propiedades', punts: ["color: el color del text|color: el color del texto", "font-size: la mida de la lletra, en px|font-size: el tamaño de la letra, en px", "text-align: left, center o right|text-align: left, center o right", "Els noms són en anglès!|¡Los nombres son en inglés!"],
          code: J('h1 {', '  color: crimson;', '  font-size: 40px;', '  text-align: center;', '}'),
          nota: "Fes notar que dins d'una regla hi caben moltes declaracions, una per línia, cadascuna amb el seu punt i coma.|Haz notar que dentro de una regla caben muchas declaraciones, una por línea, cada una con su punto y coma." },
        { id: 's8', k: 'media', t: 'Moltes declaracions, moltes regles|Muchas declaraciones, muchas reglas', media: W(J('<h1>Festa de la tardor</h1>', '<p>Castanyes, música i tallers.</p>'), J('h1 {', '  color: crimson;', '  text-align: center;', '}', 'p {', '  color: dimgray;', '  font-size: 20px;', '}')),
          nota: "Pregunta quina regla fa cada canvi. Si canviéssim p per h1 a la segona regla, què passaria?|Pregunta qué regla hace cada cambio. Si cambiáramos p por h1 en la segunda regla, ¿qué pasaría?" },
        { id: 's9', k: 'media', t: 'Compte! El punt i coma|¡Cuidado! El punto y coma', x: "Hem escrit crimson i center… però el títol surt negre i a l'esquerra. Per què?|Hemos escrito crimson y center… pero el título sale negro y a la izquierda. ¿Por qué?", media: W('<h1>Festa de la tardor</h1>', J('h1 {', '  color: crimson', '  text-align: center;', '}')),
          nota: "Sense el punt i coma, el navegador llegeix «crimson text-align: center» com un sol valor, no l'entén i no aplica cap de les dues declaracions.|Sin el punto y coma, el navegador lee «crimson text-align: center» como un solo valor, no lo entiende y no aplica ninguna de las dos declaraciones." },
        { id: 's10', k: 'activitat', t: 'Construïm regles amb peces|Construimos reglas con piezas', timer: 4, punts: ["Escolteu la regla que diu el professor/a.|Escuchad la regla que dice el profesor/a.", "Munteu-la sobre la taula amb les peces.|Montadla sobre la mesa con las piezas.", "Comproveu que no falta cap peça: dos punts, punt i coma, claus.|Comprobad que no falta ninguna pieza: dos puntos, punto y coma, llaves."],
          nota: "Regles per dir: «el títol, de color navy», «els paràgrafs, de 20px i centrats», «els elements de la llista, de color crimson».|Reglas para decir: «el título, de color navy», «los párrafos, de 20px y centrados», «los elementos de la lista, de color crimson»." },
        { id: 's11', k: 'activitat', t: 'Fes de navegador|Haz de navegador', timer: 6, punts: ["Llegeix l'HTML: què hi ha a la pàgina?|Lee el HTML: ¿qué hay en la página?", "Llegeix el CSS: què canvia i com?|Lee el CSS: ¿qué cambia y cómo?", "Dibuixa i pinta el resultat al requadre.|Dibuja y pinta el resultado en el recuadro.", "Compte amb la regla que té un error!|¡Cuidado con la regla que tiene un error!"],
          nota: "Corregiu l'exercici 4 tots junts: hi falta el punt i coma, així que el títol surt negre i a l'esquerra.|Corregid el ejercicio 4 todos juntos: falta el punto y coma, así que el título sale negro y a la izquierda." },
        { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Donar estil».|Abre la sesión «Dar estilo».", "Fes «Descobreix» i «Mans a l'obra».|Haz «Descubre» y «Manos a la obra».", "A «Fes de navegador», toca «Ho hem fet!».|En «Haz de navegador», toca «¡Lo hemos hecho!».", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
          nota: "Si algú acaba abans, que torni a la targeta de les parts de la regla i l'expliqui a un company/a.|Si alguien acaba antes, que vuelva a la tarjeta de las partes de la regla y se la explique a un compañero/a." },
        { id: 's13', k: 'media', t: 'Escrivim una regla junts|Escribimos una regla juntos', x: "Quina peça va ara? Digueu-ne una cadascú.|¿Qué pieza va ahora? Decid una cada uno.", media: W(FESTA, J('h1 {', '  color: darkgreen;', '  text-align: center;', '}', 'li {', '  color: crimson;', '}')),
          nota: "Si pots, escriu-la en directe a l'editor de l'app projectat, peça a peça, i deixa que la classe et corregeixi si t'oblides un signe (fes-ho expressament un cop!).|Si puedes, escríbela en directo en el editor de la app proyectado, pieza a pieza, y deja que la clase te corrija si olvidas un signo (¡hazlo a propósito una vez!)." },
        { id: 's14', k: 'repte', t: 'Reptes: les primeres regles|Retos: las primeras reglas', timer: 10, punts: ["1. El color del títol|1. El color del título", "2. Una regla nova per al paràgraf|2. Una regla nueva para el párrafo", "3. El CSS d'en Bit: dos errors|3. El CSS de Bit: dos errores", "4. Tres regles des de zero|4. Tres reglas desde cero"],
          nota: "Si algú s'encalla, pregunta: quina comprovació encara no està marcada? Què demana?|Si alguien se atasca, pregunta: ¿qué comprobación todavía no está marcada? ¿Qué pide?" },
        { id: 's15', k: 'activitat', t: 'Crea: la web del meu club|Crea: la web de mi club', timer: 5, x: "Dona estil a la web d'un club: almenys 4 regles, el títol centrat i amb color, i els paràgrafs de 16px o més.|Da estilo a la web de un club: al menos 4 reglas, el título centrado y con color, y los párrafos de 16px o más.",
          nota: "Celebra que, amb el mateix HTML, totes les webs són diferents: és la força del CSS.|Celebra que, con el mismo HTML, todas las webs son diferentes: es la fuerza del CSS." },
        { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["L'HTML diu què hi ha; el CSS, com es veu.|El HTML dice qué hay; el CSS, cómo se ve.", "Una regla: selector { propietat: valor; }|Una regla: selector { propiedad: valor; }", "Sense ; o sense }, el navegador no aplica l'estil.|Sin ; o sin }, el navegador no aplica el estilo."],
          nota: "Torna a la pregunta del principi: qui decideix com es veu una web? Qui escriu el CSS.|Vuelve a la pregunta del principio: ¿quién decide cómo se ve una web? Quien escribe el CSS." },
        { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Digues les parts de la regla h1 { color: navy; }.|Di las partes de la regla h1 { color: navy; }.", "Què passa si oblides un punt i coma?|¿Qué pasa si olvidas un punto y coma?"],
          nota: "Anota qui confon encara la propietat i el valor: ho repassarem al començament de la sessió de colors.|Anota quién confunde todavía la propiedad y el valor: lo repasaremos al principio de la sesión de colores." }
      ],
      print: [
        { id: 'p1', t: 'Peces de regla|Piezas de regla', k: 'targetes',
          intro: "Un paquet per parella. Retalleu-les: amb aquestes peces construireu regles de CSS sobre la taula, com un trencaclosques. Blau: selectors. Groc: claus. Verd: propietats. Vermell: valors. Blanc: signes.|Un paquete por pareja. Recortadlas: con estas piezas construiréis reglas de CSS sobre la mesa, como un rompecabezas. Azul: selectores. Amarillo: llaves. Verde: propiedades. Rojo: valores. Blanco: signos.",
          items: [
            { t: 'h1 🔵|h1 🔵', n: 1 }, { t: 'p 🔵|p 🔵', n: 1 }, { t: 'li 🔵|li 🔵', n: 1 },
            { t: '{ 🟡|{ 🟡', n: 3 }, { t: '} 🟡|} 🟡', n: 3 },
            { t: 'color 🟢|color 🟢', n: 2 }, { t: 'font-size 🟢|font-size 🟢', n: 1 }, { t: 'text-align 🟢|text-align 🟢', n: 1 },
            { t: ': ⚪|: ⚪', n: 4 }, { t: '; ⚪|; ⚪', n: 4 },
            { t: 'navy 🔴|navy 🔴', n: 1 }, { t: 'crimson 🔴|crimson 🔴', n: 1 }, { t: '20px 🔴|20px 🔴', n: 1 }, { t: 'center 🔴|center 🔴', n: 1 }
          ] },
        { id: 'p2', t: 'Fes de navegador|Haz de navegador', k: 'fitxa',
          intro: "Ets el navegador: llegeix l'HTML i les regles i dibuixa i pinta el resultat al requadre amb llapis de colors. Compte: una de les regles té un error, i un navegador no aplica el que no entén!|Eres el navegador: lee el HTML y las reglas y dibuja y pinta el resultado en el recuadro con lápices de colores. Cuidado: una de las reglas tiene un error, ¡y un navegador no aplica lo que no entiende!",
          items: [
            { q: "HTML: <code>&lt;h1&gt;Mercat&lt;/h1&gt; &lt;p&gt;Fruita fresca&lt;/p&gt;</code><br>CSS: <code>h1 { color: green; }</code>|HTML: <code>&lt;h1&gt;Mercat&lt;/h1&gt; &lt;p&gt;Fruita fresca&lt;/p&gt;</code><br>CSS: <code>h1 { color: green; }</code>", big: true,
              sol: "El títol «Mercat», gran i verd; el paràgraf, normal i negre.|El título «Mercat», grande y verde; el párrafo, normal y negro." },
            { q: "HTML: <code>&lt;h1&gt;Festa&lt;/h1&gt; &lt;p&gt;Dissabte&lt;/p&gt;</code><br>CSS: <code>p { color: blue; text-align: center; }</code>|HTML: <code>&lt;h1&gt;Festa&lt;/h1&gt; &lt;p&gt;Dissabte&lt;/p&gt;</code><br>CSS: <code>p { color: blue; text-align: center; }</code>", big: true,
              sol: "El títol, negre i a l'esquerra; «Dissabte», blau i centrat.|El título, negro y a la izquierda; «Dissabte», azul y centrado." },
            { q: "HTML: <code>&lt;h2&gt;Menú&lt;/h2&gt; &lt;ul&gt;&lt;li&gt;Sopa&lt;/li&gt;&lt;li&gt;Peix&lt;/li&gt;&lt;/ul&gt;</code><br>CSS: <code>h2 { color: red; }</code> <code>li { color: purple; font-size: 30px; }</code>|HTML: <code>&lt;h2&gt;Menú&lt;/h2&gt; &lt;ul&gt;&lt;li&gt;Sopa&lt;/li&gt;&lt;li&gt;Peix&lt;/li&gt;&lt;/ul&gt;</code><br>CSS: <code>h2 { color: red; }</code> <code>li { color: purple; font-size: 30px; }</code>", big: true,
              sol: "«Menú», vermell; «Sopa» i «Peix», grans i liles, amb el seu punt de llista.|«Menú», rojo; «Sopa» y «Peix», grandes y lilas, con su punto de lista." },
            { q: "HTML: <code>&lt;h1&gt;Concert&lt;/h1&gt;</code><br>CSS: <code>h1 { color: orange text-align: center; }</code>|HTML: <code>&lt;h1&gt;Concert&lt;/h1&gt;</code><br>CSS: <code>h1 { color: orange text-align: center; }</code>", big: true,
              sol: "Hi falta el ; després d'orange: el navegador no aplica cap de les dues declaracions. «Concert» surt negre i a l'esquerra.|Falta el ; después de orange: el navegador no aplica ninguna de las dos declaraciones. «Concert» sale negro y a la izquierda." }
          ] }
      ]
    },

    /* ---------- Sessió 2 · Colors ---------- */
    'w4-2': {
      obj: [
        "L'alumne/a escriu colors amb nom, en hex i amb rgb() i explica que la pantalla barreja llum vermella, verda i blava.|El alumno/a escribe colores con nombre, en hex y con rgb() y explica que la pantalla mezcla luz roja, verde y azul.",
        "L'alumne/a dedueix si un color hex és clar o fosc mirant-ne les xifres.|El alumno/a deduce si un color hex es claro u oscuro mirando sus cifras.",
        "L'alumne/a tria combinacions de text i fons amb bon contrast i explica per què és important per a tothom.|El alumno/a elige combinaciones de texto y fondo con buen contraste y explica por qué es importante para todo el mundo.",
        "L'alumne/a fa servir una classe per donar estil només a alguns elements de la pàgina.|El alumno/a usa una clase para dar estilo solo a algunos elementos de la página."
      ],
      comp: [
        "Competència digital (CD2): crear continguts digitals amb un disseny propi|Competencia digital (CD2): crear contenidos digitales con un diseño propio",
        "Matemàtiques: sistemes de numeració (de 0 a 255 i de 00 a FF)|Matemáticas: sistemas de numeración (de 0 a 255 y de 00 a FF)",
        "Ciències i educació visual: el color llum (vermell, verd i blau) i el contrast|Ciencias y educación visual: el color luz (rojo, verde y azul) y el contraste",
        "Ciutadania digital: dissenyar pàgines que tothom pugui llegir (accessibilitat)|Ciudadanía digital: diseñar páginas que todo el mundo pueda leer (accesibilidad)"
      ],
      vocab: [
        ["Píxel|Píxel", "Cadascun dels puntets de la pantalla; té tres llumetes: vermella, verda i blava.|Cada uno de los puntitos de la pantalla; tiene tres lucecitas: roja, verde y azul."],
        ["rgb()|rgb()", "Una manera d'escriure un color dient quanta llum vermella, verda i blava té, de 0 a 255.|Una manera de escribir un color diciendo cuánta luz roja, verde y azul tiene, de 0 a 255."],
        ["Codi hex|Código hex", "Un color escrit amb # i sis xifres hexadecimals (0-9 i A-F), dues per a cada llum.|Un color escrito con # y seis cifras hexadecimales (0-9 y A-F), dos para cada luz."],
        ["Contrast|Contraste", "La diferència entre el color del text i el del fons; com més n'hi ha, més fàcil és llegir.|La diferencia entre el color del texto y el del fondo; cuanta más hay, más fácil es leer."],
        ["Fons (background-color)|Fondo (background-color)", "La propietat que pinta el fons d'un element o de tota la pàgina.|La propiedad que pinta el fondo de un elemento o de toda la página."],
        ["Classe|Clase", "Un nom que posem a alguns elements (class=\"avis\") per donar-los estil amb una regla .avis.|Un nombre que ponemos a algunos elementos (class=\"avis\") para darles estilo con una regla .avis."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Colors»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Colores»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Llapis de colors per grup (com més colors, millor)|Lápices de colores por grupo (cuantos más colores, mejor)",
          "Les peces de regla de la sessió anterior, per si cal repassar|Las piezas de regla de la sesión anterior, por si hace falta repasar"
        ],
        imprimir: ["Targetes: codis de colors (un paquet per grup)|Tarjetas: códigos de colores (un paquete por grupo)", "Fitxa: Detectius del color (una per grup)|Ficha: Detectives del color (una por grupo)"],
        prep: [
          "Retallar un paquet de targetes de codis per grup de 3 o 4.|Recortar un paquete de tarjetas de códigos por grupo de 3 o 4.",
          "Tenir a punt la diapositiva 9 (el contrast) per comprovar les respostes de la fitxa a la pantalla gran.|Tener a punto la diapositiva 9 (el contraste) para comprobar las respuestas de la ficha en la pantalla grande.",
          "Si es pot, abaixar una mica els llums de l'aula quan es projecti el contrast: es veu millor la diferència.|Si se puede, bajar un poco las luces del aula cuando se proyecte el contraste: se ve mejor la diferencia.",
          "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Recordem i la web que no es llegeix|Recordamos y la web que no se lee", fase: 'inici',
          fa: "Fes dues preguntes ràpides sobre les regles (selector, propietat i valor). Després projecta la web de l'hort d'en Bit, amb text groc clar sobre blanc, i pregunta què hi passa.|Haz dos preguntas rápidas sobre las reglas (selector, propiedad y valor). Después proyecta la web del huerto de Bit, con texto amarillo claro sobre blanco, y pregunta qué pasa.",
          diu: ["Qui em dicta una regla perquè els paràgrafs siguin blaus?|¿Quién me dicta una regla para que los párrafos sean azules?",
            "Llegiu-me aquesta web des del vostre seient. Ho podeu fer?|Leedme esta web desde vuestro asiento. ¿Podéis?"],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Noms, llum i codis hex|Nombres, luz y códigos hex", fase: 'teoria',
          fa: "Mostra els colors amb nom. Explica amb l'animació que cada píxel té tres llums i que rgb() diu quanta llum fa cadascuna; demana que endevinin el color de rgb(255, 255, 0) abans que surti. Passa al codi hex amb l'animació i el truc de les xifres petites (fosc) i grans (clar). Acaba amb el text i el fons i les quatre targetes del contrast: que votin amb el polze quines es llegeixen.|Muestra los colores con nombre. Explica con la animación que cada píxel tiene tres luces y que rgb() dice cuánta luz hace cada una; pide que adivinen el color de rgb(255, 255, 0) antes de que salga. Pasa al código hex con la animación y el truco de las cifras pequeñas (oscuro) y grandes (claro). Acaba con el texto y el fondo y las cuatro tarjetas del contraste: que voten con el pulgar cuáles se leen.",
          diu: ["Vermell i verd al màxim… quin color creieu que surt? Amb llum no és com amb pintura!|Rojo y verde al máximo… ¿qué color creéis que sale? ¡Con luz no es como con pintura!",
            "FF és el màxim de llum; 00, apagada. Quin dels dos grisos és més fosc?|FF es el máximo de luz; 00, apagada. ¿Cuál de los dos grises es más oscuro?",
            "Polze amunt si es llegeix bé, polze avall si no.|Pulgar arriba si se lee bien, pulgar abajo si no."],
          slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Descodificadors de colors|Descodificadores de colores", fase: 'desconnectat',
          fa: "En grups de 3 o 4, reparteix les targetes de codis. Per a cada targeta, decideixen quines llums estan enceses, escriuen el nom del color i en pinten un quadradet. Després responen la fitxa «Detectius del color». Als últims dos minuts, comproveu-ho escrivint alguns codis a la demo projectada.|En grupos de 3 o 4, reparte las tarjetas de códigos. Para cada tarjeta, deciden qué luces están encendidas, escriben el nombre del color y pintan un cuadradito. Después responden la ficha «Detectives del color». En los dos últimos minutos, comprobadlo escribiendo algunos códigos en la demo proyectada.",
          diu: ["Comenceu pels fàcils: on només hi ha una llum encesa.|Empezad por los fáciles: donde solo hay una luz encendida.",
            "Si les tres parelles són iguals, què surt?|Si las tres parejas son iguales, ¿qué sale?",
            "Quin dels dos vermells és més fosc: #880000 o #FF0000?|¿Cuál de los dos rojos es más oscuro: #880000 o #FF0000?"],
          slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4|Grupos de 3 o 4" },
        { min: 13, t: "A l'ordinador: colors de veritat|En el ordenador: colores de verdad", fase: 'ordinador',
          fa: "Cada alumne/a avança des del principi fins a la pausa activa: les preguntes, les targetes, ordenar els grisos, les dues vistes prèvies i els tres reptes de color. Al repte del mercat, ajuda'ls a raonar el truc de les xifres petites en lloc de dir-los un codi.|Cada alumno/a avanza desde el principio hasta la pausa activa: las preguntas, las tarjetas, ordenar los grises, las dos vistas previas y los tres retos de color. En el reto del mercado, ayúdales a razonar el truco de las cifras pequeñas en lugar de decirles un código.",
          diu: ["Un hex té sis xifres: compteu-les per parelles.|Un hex tiene seis cifras: contadlas por parejas.",
            "El fons ha de ser fosc: quines xifres hi posaries?|El fondo tiene que ser oscuro: ¿qué cifras pondrías?"],
          slides: ['s12'], app: "De «Recorda» fins a la «Pausa activa»: les preguntes, «Descobreix», ordenar els grisos, «Descodificadors de colors» (ja fet), les dues vistes prèvies i els reptes de l'hort (noms i hex) i del mercat (contrast).|De «Recuerda» hasta la «Pausa activa»: las preguntas, «Descubre», ordenar los grises, «Descodificadores de colores» (ya hecho), las dos vistas previas y los retos del huerto (nombres y hex) y del mercado (contraste).", org: "Individual|Individual" },
        { min: 12, t: "Les classes: destacar només el que vull|Las clases: destacar solo lo que quiero", fase: 'ordinador',
          fa: "Feu la pausa activa del píxel tots junts. Després, en 4 minuts, explica les classes amb l'animació i la demo: el nom a l'HTML sense punt i la regla al CSS amb punt. Deixa'ls fer el repte dels avisos i trobar l'error de la classe.|Haced la pausa activa del píxel todos juntos. Después, en 4 minutos, explica las clases con la animación y la demo: el nombre en el HTML sin punto y la regla en el CSS con punto. Deja que hagan el reto de los avisos y encuentren el error de la clase.",
          diu: ["Si escric p { … }, quants paràgrafs canvien? I si només en vull dos?|Si escribo p { … }, ¿cuántos párrafos cambian? ¿Y si solo quiero dos?",
            "El punt va al CSS, no a l'HTML. Repetiu-ho amb mi!|El punto va en el CSS, no en el HTML. ¡Repetidlo conmigo!",
            "Trieu noms de classe que diguin per a què serveixen, no de quin color són.|Elegid nombres de clase que digan para qué sirven, no de qué color son."],
          slides: ['s13', 's14', 's15'], app: "«Pausa activa», les targetes de les classes, el repte dels avisos del mercat i la línia amb l'error de la classe.|«Pausa activa», las tarjetas de las clases, el reto de los avisos del mercado y la línea con el error de la clase.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: la meva paleta|Crea: mi paleta", fase: 'crea',
          fa: "Cada alumne/a fa el cartell del concert amb la seva paleta de tres colors i la classe destacat. Abans de desar, que s'allunyin dos passos de la pantalla: es llegeix tot?|Cada alumno/a hace el cartel del concierto con su paleta de tres colores y la clase destacat. Antes de guardar, que se alejen dos pasos de la pantalla: ¿se lee todo?",
          diu: ["Apunteu la paleta al comentari del CSS: fons, text i destacat.|Apuntad la paleta en el comentario del CSS: fondo, texto y destacado.",
            "Feu la prova dels dos passos enrere abans de desar.|Haced la prueba de los dos pasos atrás antes de guardar."],
          slides: ['s16'], app: "Pas «Crea»: La meva paleta.|Paso «Crea»: Mi paleta.", org: "Individual|Individual" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les idees amb el resum, deixa que responguin les preguntes finals i fes el tiquet a la porta.|Repasa las ideas con el resumen, deja que respondan las preguntas finales y haz el ticket en la puerta.",
          diu: ["Qui em diu un color en hex i quines llums té enceses?|¿Quién me dice un color en hex y qué luces tiene encendidas?",
            "Quan faig servir una classe?|¿Cuándo uso una clase?"],
          slides: ['s17', 's18'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Escriu el codi hex sense el # o amb cinc xifres.|Escribe el código hex sin el # o con cinco cifras.",
          "Que el llegeixi en veu alta per parelles: vermell, verd, blau. Quantes parelles té?|Que lo lea en voz alta por parejas: rojo, verde, azul. ¿Cuántas parejas tiene?"],
        ["Fa servir lletres que no són hexadecimals (#GG0000, #ZZ…).|Usa letras que no son hexadecimales (#GG0000, #ZZ…).",
          "Recorda-li que les xifres hex són 0-9 i A-F. Quina és la més gran que existeix?|Recuérdale que las cifras hex son 0-9 y A-F. ¿Cuál es la más grande que existe?"],
        ["Tria colors que li agraden però que no contrasten.|Elige colores que le gustan pero que no contrastan.",
          "Que s'allunyi dos passos de la pantalla o la miri amb els ulls mig tancats. Es llegeix? Què hi canviaria?|Que se aleje dos pasos de la pantalla o la mire con los ojos medio cerrados. ¿Se lee? ¿Qué cambiaría?"],
        ["Escriu el punt a l'HTML (class=\".avis\") o se l'oblida al CSS (avis { … }).|Escribe el punto en el HTML (class=\".avis\") o lo olvida en el CSS (avis { … }).",
          "Pregunta-li on va el punt i que ho compari amb la targeta «Compte!» de les classes.|Pregúntale dónde va el punto y que lo compare con la tarjeta «¡Cuidado!» de las clases."],
        ["Confon color i background-color.|Confunde color y background-color.",
          "Que digui en veu alta què vol pintar: la lletra o el fons? Després, que busqui la propietat que ho fa.|Que diga en voz alta qué quiere pintar: ¿la letra o el fondo? Después, que busque la propiedad que lo hace."]
      ],
      diff: {
        mes: "Escriure la mateixa paleta de tres maneres (nom, hex i rgb) i comprovar que surt igual. Posar dues classes al mateix element (class=\"avis gran\") i veure que s'apliquen totes dues regles.|Escribir la misma paleta de tres maneras (nombre, hex y rgb) y comprobar que sale igual. Poner dos clases al mismo elemento (class=\"avis gran\") y ver que se aplican las dos reglas.",
        menys: "Fer servir noms de colors en lloc de codis i tenir a mà la fitxa corregida dels descodificadors. Començar el repte de les classes posant-la en un sol paràgraf i comprovar què passa.|Usar nombres de colores en lugar de códigos y tener a mano la ficha corregida de los descodificadores. Empezar el reto de las clases poniéndola en un solo párrafo y comprobar qué pasa."
      },
      aval: {
        ticket: ["Quin color és #00FF00? Com ho saps?|¿Qué color es #00FF00? ¿Cómo lo sabes?",
          "Escriu la regla perquè els elements amb class=\"preu\" siguin de color crimson.|Escribe la regla para que los elementos con class=\"preu\" sean de color crimson."],
        rubric: [
          ["Codis de color|Códigos de color", "Escriu colors en hex i rgb() i dedueix si són clars o foscos.|Escribe colores en hex y rgb() y deduce si son claros u oscuros.", "Fa servir noms de colors, però encara no interpreta els codis.|Usa nombres de colores, pero todavía no interpreta los códigos."],
          ["Contrast|Contraste", "Tria parelles de text i fons que es llegeixen bé i explica per què.|Elige parejas de texto y fondo que se leen bien y explica por qué.", "Reconeix una combinació que no es llegeix, però no sempre ho té en compte.|Reconoce una combinación que no se lee, pero no siempre lo tiene en cuenta."],
          ["Classes|Clases", "Posa la classe a l'HTML i escriu la regla .classe sense errors.|Pone la clase en el HTML y escribe la regla .clase sin errores.", "Fa servir classes amb ajuda o s'equivoca amb el punt.|Usa clases con ayuda o se equivoca con el punto."]
        ]
      },
      casa: "Feu de detectius del contrast pel carrer o a casa: busqueu dos cartells o envasos que es llegeixin molt bé i un que costi de llegir, i apunteu-ne els colors del text i del fons. Com l'arreglaríeu?|Haced de detectives del contraste por la calle o en casa: buscad dos carteles o envases que se lean muy bien y uno que cueste leer, y apuntad los colores del texto y del fondo. ¿Cómo lo arreglaríais?",
      slides: [
        { id: 's1', k: 'portada', t: 'Colors|Colores', x: "Noms, codis i llum: aprendrem a triar colors com els dissenyadors… i que es puguin llegir!|Nombres, códigos y luz: aprenderemos a elegir colores como los diseñadores… ¡y que se puedan leer!",
          nota: "Explica que avui hi ha matemàtiques amagades als colors: els números del 0 al 255 i les xifres hexadecimals.|Explica que hoy hay matemáticas escondidas en los colores: los números del 0 al 255 y las cifras hexadecimales." },
        { id: 's2', k: 'repas', t: 'Recordem|Recordamos', punts: ["Quines són les parts d'una regla?|¿Cuáles son las partes de una regla?", "Què fa text-align: center?|¿Qué hace text-align: center?", "Què passa si falta un punt i coma?|¿Qué pasa si falta un punto y coma?"],
          code: 'p { color: blue; }',
          nota: "Que contestin en veu alta. Assenyala cada part de la regla de la diapositiva.|Que contesten en voz alta. Señala cada parte de la regla de la diapositiva." },
        { id: 's3', k: 'media', t: "La web de l'hort d'en Bit|La web del huerto de Bit", x: "La podeu llegir des del vostre seient?|¿La podéis leer desde vuestro asiento?", media: W(J("<h1>L'hort del poble</h1>", '<p>Cada dissabte plantem, reguem i collim.</p>'), J('h1 {', '  color: #FFF176;', '}', 'p {', '  color: #FFE0B2;', '}')),
          nota: "Deixa que diguin que no es llegeix. Pregunta: qui pot tenir encara més problemes per llegir-ho? (Persones que hi veuen poc, algú amb el mòbil al sol…)|Deja que digan que no se lee. Pregunta: ¿quién puede tener todavía más problemas para leerlo? (Personas que ven poco, alguien con el móvil al sol…)" },
        { id: 's4', k: 'media', t: 'Colors amb nom|Colores con nombre', media: W(J('<h1>crimson</h1>', '<h2>seagreen</h2>', '<h3>royalblue</h3>', '<h4>chocolate</h4>'), J('h1 {', '  color: crimson;', '}', 'h2 {', '  color: seagreen;', '}', 'h3 {', '  color: royalblue;', '}', 'h4 {', '  color: chocolate;', '}')),
          nota: "El CSS coneix més de cent noms de colors en anglès. Són pràctics, però una pantalla en pot fer moltíssims més.|El CSS conoce más de cien nombres de colores en inglés. Son prácticos, pero una pantalla puede hacer muchísimos más." },
        { id: 's5', k: 'anim', t: 'La pantalla barreja llum|La pantalla mezcla luz', anim: 'w4rgb', x: 'rgb(vermell, verd, blau), de 0 a 255|rgb(rojo, verde, azul), de 0 a 255',
          nota: "Atura't al groc i al blanc: amb llum, vermell + verd fa groc i les tres llums juntes fan blanc. Amb pintura no passa el mateix.|Detente en el amarillo y en el blanco: con luz, rojo + verde hace amarillo y las tres luces juntas hacen blanco. Con pintura no pasa lo mismo." },
        { id: 's6', k: 'anim', t: 'El codi hex|El código hex', anim: 'w4hex', x: "# i tres parelles: vermell, verd i blau, de 00 a FF.|# y tres parejas: rojo, verde y azul, de 00 a FF.",
          nota: "Explica que les xifres hex van de 0 a F (la A val 10 i la F, 15) i que FF és el màxim, igual que 255 a rgb().|Explica que las cifras hex van de 0 a F (la A vale 10 y la F, 15) y que FF es el máximo, igual que 255 en rgb()." },
        { id: 's7', k: 'concepte', t: 'Truc: clar o fosc?|Truco: ¿claro u oscuro?', punts: ["Xifres petites (0, 1, 2, 3…) → poca llum → fosc|Cifras pequeñas (0, 1, 2, 3…) → poca luz → oscuro", "Xifres grans (C, D, E, F) → molta llum → clar|Cifras grandes (C, D, E, F) → mucha luz → claro", "Tres parelles iguals → un gris|Tres parejas iguales → un gris"],
          code: J('#1D2433  fosc / oscuro', '#888888  gris / gris', '#FFF4D6  clar / claro'),
          nota: "Fes-ho en veu alta amb dos o tres codis inventats per la classe: clar o fosc?|Hazlo en voz alta con dos o tres códigos inventados por la clase: ¿claro u oscuro?" },
        { id: 's8', k: 'media', t: 'color i background-color|color y background-color', media: W(J("<h1>L'hort del poble</h1>", '<p>Tomàquets, enciams i carbasses.</p>'), J('body {', '  background-color: #FFF4D6;', '}', 'h1 {', '  color: #2E7D32;', '}', 'p {', '  color: #3E2723;', '}')),
          nota: "color pinta el text; background-color, el fons. Posat a body, el fons pinta tota la pàgina.|color pinta el texto; background-color, el fondo. Puesto en body, el fondo pinta toda la página." },
        { id: 's9', k: 'anim', t: 'El contrast|El contraste', anim: 'w4contrast', x: "Fosc sobre clar o clar sobre fosc.|Oscuro sobre claro o claro sobre oscuro.",
          nota: "Votació amb el polze per a cada targeta. Recorda que no tothom veu igual els colors: no expliquis res només amb el color.|Votación con el pulgar para cada tarjeta. Recuerda que no todo el mundo ve igual los colores: no expliques nada solo con el color." },
        { id: 's10', k: 'activitat', t: 'Descodificadors de colors|Descodificadores de colores', timer: 10, punts: ["Mireu les tres parelles de cada targeta.|Mirad las tres parejas de cada tarjeta.", "Quines llums estan enceses, a mitges o apagades?|¿Qué luces están encendidas, a medias o apagadas?", "Escriviu el nom del color i pinteu-ne un quadradet.|Escribid el nombre del color y pintad un cuadradito.", "Després, responeu la fitxa «Detectius del color».|Después, responded la ficha «Detectives del color»."],
          nota: "Passeja pels grups i pregunta pel #808080 i pel #FF8800, que són els que costen més.|Pasea por los grupos y pregunta por el #808080 y el #FF8800, que son los que cuestan más." },
        { id: 's11', k: 'media', t: 'Ho comprovem|Lo comprobamos', x: "Escrivim els codis de les targetes i mirem si heu encertat.|Escribimos los códigos de las tarjetas y miramos si habéis acertado.", media: W(J('<h2>#FF0000</h2>', '<h2>#FFFF00</h2>', '<h2>#808080</h2>', '<h2>#FF8800</h2>'), J('h2 {', '  color: #FF0000;', '}')),
          nota: "Obre l'editor de l'app projectat i canvia el color de l'h2 per cada codi que diguin els grups. Celebreu els encerts i comenteu els que no.|Abre el editor de la app proyectado y cambia el color del h2 por cada código que digan los grupos. Celebrad los aciertos y comentad los que no." },
        { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre la sessió «Colors».|Abre la sesión «Colores».", "A «Descodificadors», toca «Ho hem fet!».|En «Descodificadores», toca «¡Lo hemos hecho!».", "Fes els tres reptes: l'hort amb noms, l'hort amb hex i el mercat.|Haz los tres retos: el huerto con nombres, el huerto con hex y el mercado.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
          nota: "Al repte del mercat, no donis el codi: pregunta quines xifres fan un color fosc.|En el reto del mercado, no des el código: pregunta qué cifras hacen un color oscuro." },
        { id: 's13', k: 'anim', t: 'Les classes|Las clases', anim: 'w4class', x: 'class="avis" a l\'HTML · .avis { … } al CSS|class="avis" en el HTML · .avis { … } en el CSS',
          nota: "Pregunta: si la regla fos p { … }, quants paràgrafs es pintarien? Les classes serveixen per triar-ne només alguns.|Pregunta: si la regla fuera p { … }, ¿cuántos párrafos se pintarían? Las clases sirven para elegir solo algunos." },
        { id: 's14', k: 'media', t: 'La classe en acció|La clase en acción', media: W(J('<h1>Mercat de la tardor</h1>', '<p>Diumenge, a la plaça.</p>', '<p class="avis">Porta la teva bossa!</p>', '<p>Hi haurà música.</p>', '<p class="avis">No es pot aparcar a la plaça.</p>'), J('.avis {', '  background-color: #FFE082;', '  color: #4E342E;', '}')),
          nota: "Fes notar el punt al CSS i l'absència de punt a l'HTML. Escriu-ho a la pissarra al costat del patró de les regles.|Haz notar el punto en el CSS y la ausencia de punto en el HTML. Escríbelo en la pizarra al lado del patrón de las reglas." },
        { id: 's15', k: 'repte', t: 'Reptes de classes|Retos de clases', timer: 8, punts: ["1. Destaca els tres avisos del mercat|1. Destaca los tres avisos del mercado", "2. Troba l'avís que no surt destacat|2. Encuentra el aviso que no sale destacado"],
          nota: "Si algú no veu l'error, pregunta: on hi ha un punt que no hi hauria de ser?|Si alguien no ve el error, pregunta: ¿dónde hay un punto que no debería estar?" },
        { id: 's16', k: 'activitat', t: 'Crea: la meva paleta|Crea: mi paleta', timer: 5, x: "El cartell del concert amb tres colors teus, un en hex o rgb(), i la classe destacat en dos elements.|El cartel del concierto con tres colores tuyos, uno en hex o rgb(), y la clase destacat en dos elementos.",
          nota: "Recorda la prova dels dos passos enrere abans de desar.|Recuerda la prueba de los dos pasos atrás antes de guardar." },
        { id: 's17', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Colors amb nom, en hex (#14204A) i amb rgb().|Colores con nombre, en hex (#14204A) y con rgb().", "El text ha de contrastar amb el fons.|El texto tiene que contrastar con el fondo.", "Una classe dona estil només a qui la porta.|Una clase da estilo solo a quien la lleva."],
          nota: "Torna a projectar la web d'en Bit del principi: ara ja sabeu com arreglar-la.|Vuelve a proyectar la web de Bit del principio: ahora ya sabéis cómo arreglarla." },
        { id: 's18', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Quin color és #00FF00? Com ho saps?|¿Qué color es #00FF00? ¿Cómo lo sabes?", "Escriu la regla perquè class=\"preu\" sigui crimson.|Escribe la regla para que class=\"preu\" sea crimson."],
          nota: "Fixa't en qui encara posa el punt a l'HTML: ho repassarem a l'inici de la sessió següent.|Fíjate en quién todavía pone el punto en el HTML: lo repasaremos al inicio de la sesión siguiente." }
      ],
      print: [
        { id: 'p1', t: 'Codis de colors|Códigos de colores', k: 'targetes',
          intro: "Un paquet per grup. Cada targeta amaga un color: descobriu quines llums estan enceses, escriviu-hi el nom del color i pinteu-ne un quadradet.|Un paquete por grupo. Cada tarjeta esconde un color: descubrid qué luces están encendidas, escribid el nombre del color y pintad un cuadradito.",
          items: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#000000', '#FFFFFF', '#808080', '#FF8800', '#880000', '#000088'].map(c => ({ t: `${c} 🔍|${c} 🔍`, n: 1 })) },
        { id: 'p2', t: 'Detectius del color|Detectives del color', k: 'fitxa',
          intro: "Responeu en grup. Després ho comprovarem tots junts a la pantalla gran.|Responded en grupo. Después lo comprobaremos todos juntos en la pantalla grande.",
          items: [
            { q: "<code>#FF0000</code>: quines llums estan enceses? Quin color és?|<code>#FF0000</code>: ¿qué luces están encendidas? ¿Qué color es?", sol: "Només la vermella, al màxim: vermell.|Solo la roja, al máximo: rojo." },
            { q: "<code>#FFFF00</code>: quines llums estan enceses? Quin color és?|<code>#FFFF00</code>: ¿qué luces están encendidas? ¿Qué color es?", sol: "La vermella i la verda al màxim: groc (amb llum, vermell i verd fan groc).|La roja y la verde al máximo: amarillo (con luz, rojo y verde hacen amarillo)." },
            { q: "<code>#880000</code> i <code>#FF0000</code>: quin és més fosc? Per què?|<code>#880000</code> y <code>#FF0000</code>: ¿cuál es más oscuro? ¿Por qué?", sol: "#880000: la llum vermella fa menys llum (88 és menys que FF).|#880000: la luz roja hace menos luz (88 es menos que FF)." },
            { q: "<code>rgb(0, 0, 0)</code> i <code>rgb(255, 255, 255)</code>: quins colors són?|<code>rgb(0, 0, 0)</code> y <code>rgb(255, 255, 255)</code>: ¿qué colores son?", sol: "Negre (totes les llums apagades) i blanc (totes al màxim).|Negro (todas las luces apagadas) y blanco (todas al máximo)." },
            { q: "Text <code>#FFFF00</code> sobre fons <code>#FFFFFF</code>: es llegeix bé? Què hi canviaríeu?|Texto <code>#FFFF00</code> sobre fondo <code>#FFFFFF</code>: ¿se lee bien? ¿Qué cambiaríais?", sol: "No: groc sobre blanc no contrasta. Un text fosc o un fons fosc, com #14204A.|No: amarillo sobre blanco no contrasta. Un texto oscuro o un fondo oscuro, como #14204A." },
            { q: "Text <code>#FFFFFF</code> sobre fons <code>#000088</code>: es llegeix bé? Per què?|Texto <code>#FFFFFF</code> sobre fondo <code>#000088</code>: ¿se lee bien? ¿Por qué?", sol: "Sí: text molt clar sobre un fons fosc.|Sí: texto muy claro sobre un fondo oscuro." }
          ] }
      ]
    },

    /* ---------- Sessió 3 · Tipus de lletra ---------- */
    'w4-3': {
      obj: [
        "L'alumne/a tria la lletra amb font-family i acaba la llista amb una família genèrica.|El alumno/a elige la letra con font-family y acaba la lista con una familia genérica.",
        "L'alumne/a fa servir font-size per crear jerarquia i manté el text de lectura a 16px o més.|El alumno/a usa font-size para crear jerarquía y mantiene el texto de lectura en 16px o más.",
        "L'alumne/a explica la diferència entre una classe i un id i tria quin cal en cada cas.|El alumno/a explica la diferencia entre una clase y un id y elige cuál hace falta en cada caso.",
        "L'alumne/a aplica una regla #id i una regla .classe a la mateixa pàgina.|El alumno/a aplica una regla #id y una regla .clase en la misma página."
      ],
      comp: [
        "Competència digital (CD2): crear continguts digitals llegibles i ben organitzats|Competencia digital (CD2): crear contenidos digitales legibles y bien organizados",
        "Competència lingüística: jerarquia de la informació (títol, subtítol, text) i llegibilitat|Competencia lingüística: jerarquía de la información (título, subtítulo, texto) y legibilidad",
        "Educació visual i plàstica: la tipografia com a element de disseny|Educación visual y plástica: la tipografía como elemento de diseño",
        "Pensament computacional: classificar (el que es repeteix i el que és únic)|Pensamiento computacional: clasificar (lo que se repite y lo que es único)"
      ],
      vocab: [
        ["Tipus de lletra (font-family)|Tipo de letra (font-family)", "La propietat que tria la lletra del text.|La propiedad que elige la letra del texto."],
        ["Família genèrica|Familia genérica", "Un estil de lletra que tenen tots els ordinadors: serif, sans-serif, monospace o cursive.|Un estilo de letra que tienen todos los ordenadores: serif, sans-serif, monospace o cursive."],
        ["Mida (font-size)|Tamaño (font-size)", "La propietat que canvia la mida de la lletra, normalment en px.|La propiedad que cambia el tamaño de la letra, normalmente en px."],
        ["Jerarquia|Jerarquía", "L'ordre d'importància dels textos, que es veu per la mida: títol, subtítol, text.|El orden de importancia de los textos, que se ve por el tamaño: título, subtítulo, texto."],
        ["id|id", "Un nom únic per a un sol element (id=\"portada\"); al CSS, #portada.|Un nombre único para un solo elemento (id=\"portada\"); en el CSS, #portada."],
        ["Herència|Herencia", "Quan els elements de dins agafen l'estil del de fora (la lletra de body passa a tota la pàgina).|Cuando los elementos de dentro cogen el estilo del de fuera (la letra de body pasa a toda la página)."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Tipus de lletra»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Tipos de letra»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Imperdibles, pinces o cinta adhesiva per penjar-se les targetes|Imperdibles, pinzas o cinta adhesiva para colgarse las tarjetas",
          "Opcional: revistes, envasos o rètols amb lletres diferents|Opcional: revistas, envases o rótulos con letras diferentes"
        ],
        imprimir: ["Targetes: classe i id (una per alumne/a)|Tarjetas: clase e id (una por alumno/a)", "Fitxa: Classe o id? (una per parella)|Ficha: ¿Clase o id? (una por pareja)"],
        prep: [
          "Retallar una targeta de classe i id per alumne/a. Si sou menys de 24, traieu-ne les últimes de cada color perquè els equips quedin iguals.|Recortar una tarjeta de clase e id por alumno/a. Si sois menos de 24, quitad las últimas de cada color para que los equipos queden iguales.",
          "Preparar 6 o 7 regles per dir en veu alta a l'activitat (vegeu la nota de la diapositiva 12).|Preparar 6 o 7 reglas para decir en voz alta en la actividad (ved la nota de la diapositiva 12).",
          "Deixar lliure un espai de l'aula perquè la classe es pugui aixecar i moure.|Dejar libre un espacio del aula para que la clase se pueda levantar y moverse.",
          "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Recordem i la revista d'en Bit|Recordamos y la revista de Bit", fase: 'inici',
          fa: "Repassa els codis hex i les classes amb dues preguntes. Després projecta la revista d'en Bit, amb lletres barrejades i text petitíssim, i pregunta què en pensen.|Repasa los códigos hex y las clases con dos preguntas. Después proyecta la revista de Bit, con letras mezcladas y texto pequeñísimo, y pregunta qué opinan.",
          diu: ["Quin és més fosc, #1A1A1A o #F5F5F5?|¿Cuál es más oscuro, #1A1A1A o #F5F5F5?",
            "Llegiríeu aquesta revista? Què us cansa?|¿Leeríais esta revista? ¿Qué os cansa?"],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 9, t: "Lletres i mides|Letras y tamaños", fase: 'teoria',
          fa: "Presenta les quatre famílies amb l'animació i demana exemples de llocs on les han vist (llibres, codi, rètols). Mostra el pla B de font-family i la jerarquia de mides. Acaba amb la norma de com a molt dues lletres per pàgina i la idea que la lletra de body s'hereta.|Presenta las cuatro familias con la animación y pide ejemplos de sitios donde las han visto (libros, código, rótulos). Muestra el plan B de font-family y la jerarquía de tamaños. Acaba con la norma de como mucho dos letras por página y la idea de que la letra de body se hereda.",
          diu: ["On heu vist lletres amb «peuets»? I lletres que semblen escrites a mà?|¿Dónde habéis visto letras con «pies»? ¿Y letras que parecen escritas a mano?",
            "Si l'ordinador no té la lletra que demanem, què fa?|Si el ordenador no tiene la letra que pedimos, ¿qué hace?",
            "Què ha de ser més gran en una pàgina? I més petit?|¿Qué tiene que ser más grande en una página? ¿Y más pequeño?"],
          slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "A l'ordinador: lletres i jerarquia|En el ordenador: letras y jerarquía", fase: 'ordinador',
          fa: "Cada alumne/a avança fins a la pausa activa: les targetes, ordenar els textos del pòster, la vista prèvia, els dos reptes de la revista i la línia amb l'error. Passeja i fixa't en qui escriu font-size sense px.|Cada alumno/a avanza hasta la pausa activa: las tarjetas, ordenar los textos del póster, la vista previa, los dos retos de la revista y la línea con el error. Pasea y fíjate en quién escribe font-size sin px.",
          diu: ["La teva llista de lletres acaba amb una família genèrica?|¿Tu lista de letras acaba con una familia genérica?",
            "40 què? Píxels? El navegador ho ha de saber.|¿40 qué? ¿Píxeles? El navegador lo tiene que saber."],
          slides: ['s9'], app: "De «Recorda» fins a la «Pausa activa»: les preguntes, la història, «Descobreix», ordenar els textos del pòster, la vista prèvia de monospace, els reptes de la lletra i de les mides i la línia amb l'error.|De «Recuerda» hasta la «Pausa activa»: las preguntas, la historia, «Descubre», ordenar los textos del póster, la vista previa de monospace, los retos de la letra y de los tamaños y la línea con el error.", org: "Individual|Individual" },
        { min: 4, t: "Classe o id?|¿Clase o id?", fase: 'teoria',
          fa: "Feu la pausa activa de les lletres a l'aire. Després explica l'id amb l'animació de les samarretes (classe) i el braçalet de capità (id) i mostra la demo amb tots dos.|Haced la pausa activa de las letras en el aire. Después explica el id con la animación de las camisetas (clase) y el brazalete de capitán (id) y muestra la demo con los dos.",
          diu: ["Quantes persones poden portar la samarreta de l'equip? I el braçalet de capità?|¿Cuántas personas pueden llevar la camiseta del equipo? ¿Y el brazalete de capitán?",
            "Classe amb punt, id amb coixinet.|Clase con punto, id con almohadilla."],
          slides: ['s10', 's11'], app: "«Pausa activa».|«Pausa activa».", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "El navegador crida|El navegador llama", fase: 'desconnectat',
          fa: "Reparteix una targeta per alumne/a i que se la pengin. Fes de navegador: llegeix regles en veu alta i la classe les segueix (s'aixequen, saluden, s'asseuen…). Després dona dues targetes amb el mateix id i deixa que descobreixin el problema. Acaba amb la fitxa «Classe o id?» per parelles.|Reparte una tarjeta por alumno/a y que se la cuelguen. Haz de navegador: lee reglas en voz alta y la clase las sigue (se levantan, saludan, se sientan…). Después da dos tarjetas con el mismo id y deja que descubran el problema. Acaba con la ficha «¿Clase o id?» por parejas.",
          diu: [".blau { aixecar-se; } Qui s'ha d'aixecar?|.blau { levantarse; } ¿Quién se tiene que levantar?",
            "#p7 { saludar; } Quantes persones han de saludar?|#p7 { saludar; } ¿Cuántas personas tienen que saludar?",
            "Ui, dues persones tenen l'id p7. Què hauria de fer el navegador?|Uy, dos personas tienen el id p7. ¿Qué tendría que hacer el navegador?"],
          slides: ['s12', 's13'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Tot el grup i després per parelles|Todo el grupo y después por parejas" },
        { min: 7, t: "A l'ordinador: l'id de la portada|En el ordenador: el id de la portada", fase: 'ordinador',
          fa: "Tornen a l'app: les targetes de l'id, «El navegador crida» (ja fet), la pregunta de la botiga i el repte de l'id portada. Recorda que han d'editar les dues pestanyes.|Vuelven a la app: las tarjetas del id, «El navegador llama» (ya hecho), la pregunta de la tienda y el reto del id portada. Recuerda que tienen que editar las dos pestañas.",
          diu: ["Primer l'HTML: on poses l'id? Després el CSS: com l'escrius?|Primero el HTML: ¿dónde pones el id? Después el CSS: ¿cómo lo escribes?"],
          slides: ['s14'], app: "Les targetes de l'id, «El navegador crida» (ja fet), la pregunta de la botiga i el repte de l'id portada.|Las tarjetas del id, «El navegador llama» (ya hecho), la pregunta de la tienda y el reto del id portada.", org: "Individual|Individual" },
        { min: 10, t: "Crea: la portada de la revista|Crea: la portada de la revista", fase: 'crea',
          fa: "Cada alumne/a dissenya la portada de la seva revista: una lletra a body, una mida per a cada nivell, l'id portada i la classe seccio. Quan acabin, en parelles comproven que no hi ha més de dues lletres.|Cada alumno/a diseña la portada de su revista: una letra en body, un tamaño para cada nivel, el id portada y la clase seccio. Cuando terminen, por parejas comprueban que no hay más de dos letras.",
          diu: ["Quantes lletres diferents hi ha a la teva portada? I a la del company/a?|¿Cuántas letras diferentes hay en tu portada? ¿Y en la del compañero/a?",
            "Es nota què és el títol, què són les seccions i què és el text?|¿Se nota qué es el título, qué son las secciones y qué es el texto?"],
          slides: ['s15'], app: "Pas «Crea»: La portada de la revista.|Paso «Crea»: La portada de la revista.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa el resum, deixa que responguin les preguntes finals i fes el tiquet a la porta. Recull les targetes de classe i id: les tornarem a fer servir.|Repasa el resumen, deja que respondan las preguntas finales y haz el ticket en la puerta. Recoge las tarjetas de clase e id: las volveremos a usar.",
          diu: ["Per què la llista de font-family acaba amb sans-serif o serif?|¿Por qué la lista de font-family acaba con sans-serif o serif?",
            "Digueu-me una cosa que faríeu amb una classe i una amb un id.|Decidme algo que haríais con una clase y algo con un id."],
          slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Escriu font-size sense unitat (font-size: 40;).|Escribe font-size sin unidad (font-size: 40;).",
          "Pregunta: 40 què? Que ho compari amb la targeta de la mida i amb la línia de l'error que ha trobat abans.|Pregunta: ¿40 qué? Que lo compare con la tarjeta del tamaño y con la línea del error que ha encontrado antes."],
        ["La llista de lletres no acaba en una família genèrica (o el nom inventat va sense cometes).|La lista de letras no acaba en una familia genérica (o el nombre inventado va sin comillas).",
          "Pregunta-li què faria l'ordinador si no té aquesta lletra. Que torni a la targeta «El pla B».|Pregúntale qué haría el ordenador si no tiene esa letra. Que vuelva a la tarjeta «El plan B»."],
        ["Posa el mateix id a diversos elements.|Pone el mismo id a varios elementos.",
          "Recorda-li l'activitat de les targetes: què passava quan dues persones tenien el mateix id? Què hauria de fer servir?|Recuérdale la actividad de las tarjetas: ¿qué pasaba cuando dos personas tenían el mismo id? ¿Qué debería usar?"],
        ["Escriu el # a l'HTML (id=\"#portada\") o se l'oblida al CSS.|Escribe la # en el HTML (id=\"#portada\") o la olvida en el CSS.",
          "Igual que el punt de les classes: el signe només va al CSS. Que ho comprovi a la demo de classe i id.|Igual que el punto de las clases: el signo solo va en el CSS. Que lo compruebe en la demo de clase e id."],
        ["Fa servir moltes lletres diferents perquè «queda xulo».|Usa muchas letras diferentes porque «queda chulo».",
          "Fes-li la prova dels cinc segons amb un company/a: s'entén què és el més important? Proposa-li quedar-se amb la que més li agradi per al títol i una de clara per al text.|Hazle la prueba de los cinco segundos con un compañero/a: ¿se entiende qué es lo más importante? Proponle quedarse con la que más le guste para el título y una clara para el texto."]
      ],
      diff: {
        mes: "Comprovar l'herència: canviar només la lletra de body i observar quins elements canvien i quins no (perquè tenen la seva pròpia regla). Investigar line-height per fer més còmode el text llarg.|Comprobar la herencia: cambiar solo la letra de body y observar qué elementos cambian y cuáles no (porque tienen su propia regla). Investigar line-height para hacer más cómodo el texto largo.",
        menys: "Fer servir sans-serif per a tota la pàgina i canviar només la mida del títol. Tenir la fitxa «Classe o id?» al costat de l'ordinador mentre fa el repte de l'id.|Usar sans-serif para toda la página y cambiar solo el tamaño del título. Tener la ficha «¿Clase o id?» al lado del ordenador mientras hace el reto del id."
      },
      aval: {
        ticket: ["Per què acabem font-family amb una família genèrica?|¿Por qué acabamos font-family con una familia genérica?",
          "Posa un exemple d'una cosa que faries amb una classe i una que faries amb un id.|Pon un ejemplo de algo que harías con una clase y algo que harías con un id."],
        rubric: [
          ["Lletra i jerarquia|Letra y jerarquía", "Tria una o dues lletres amb família genèrica i ordena les mides amb sentit.|Elige una o dos letras con familia genérica y ordena los tamaños con sentido.", "Canvia la lletra i la mida, però sense criteri o amb el text massa petit.|Cambia la letra y el tamaño, pero sin criterio o con el texto demasiado pequeño."],
          ["Classe o id|Clase o id", "Explica quan cal cadascun i ho aplica bé a la seva pàgina.|Explica cuándo hace falta cada uno y lo aplica bien en su página.", "Coneix tots dos, però de vegades repeteix un id.|Conoce los dos, pero a veces repite un id."],
          ["Sintaxi de #id i .classe|Sintaxis de #id y .clase", "Escriu els selectors amb el signe correcte i els noms iguals a l'HTML.|Escribe los selectores con el signo correcto y los nombres iguales al HTML.", "Necessita ajuda amb el punt, el coixinet o els noms.|Necesita ayuda con el punto, la almohadilla o los nombres."]
        ]
      },
      casa: "Busca tres lletres diferents en llibres, envasos o rètols del carrer i classifica-les: serif, sans-serif, monospace o cursive. Quina es llegeix millor de lluny? Fes una foto o un dibuix de cada una per comentar-ho a la classe.|Busca tres letras diferentes en libros, envases o rótulos de la calle y clasifícalas: serif, sans-serif, monospace o cursive. ¿Cuál se lee mejor de lejos? Haz una foto o un dibujo de cada una para comentarlo en clase.",
      slides: [
        { id: 's1', k: 'portada', t: 'Tipus de lletra|Tipos de letra', x: "Triarem la lletra i la mida amb criteri i coneixerem l'id: l'element únic.|Elegiremos la letra y el tamaño con criterio y conoceremos el id: el elemento único.",
          nota: "Explica que la lletra també comunica: una revista seriosa i un cartell de festa no fan servir la mateixa.|Explica que la letra también comunica: una revista seria y un cartel de fiesta no usan la misma." },
        { id: 's2', k: 'repas', t: 'Recordem|Recordamos', punts: ["Quin és més fosc: #1A1A1A o #F5F5F5?|¿Cuál es más oscuro: #1A1A1A o #F5F5F5?", "Com s'escriu la classe preu a l'HTML? I al CSS?|¿Cómo se escribe la clase preu en el HTML? ¿Y en el CSS?"],
          nota: "Si dubten amb el punt de la classe, escriu-ho a la pissarra: class=\"preu\" a l'HTML i .preu al CSS.|Si dudan con el punto de la clase, escríbelo en la pizarra: class=\"preu\" en el HTML y .preu en el CSS." },
        { id: 's3', k: 'media', t: "La revista d'en Bit|La revista de Bit", x: "Què us sembla? La llegiríeu?|¿Qué os parece? ¿La leeríais?", media: W(J("<h1>Revista de l'escola</h1>", '<h2>Notícies</h2>', "<p>Aquest mes hem estrenat l'hort.</p>", '<h2>Entrevista</h2>', '<p>Parlem amb la cuinera.</p>'), J('h1 {', '  font-family: cursive;', '}', 'h2 {', '  font-family: monospace;', '  font-size: 12px;', '}', 'p {', '  font-family: serif;', '  font-size: 10px;', '}')),
          nota: "Deixa que expliquin què els molesta: massa lletres, subtítols més petits que el text, text minúscul. Ho arreglarem durant la sessió.|Deja que expliquen qué les molesta: demasiadas letras, subtítulos más pequeños que el texto, texto minúsculo. Lo arreglaremos durante la sesión." },
        { id: 's4', k: 'anim', t: 'Quatre famílies de lletra|Cuatro familias de letra', anim: 'w4font', x: 'serif · sans-serif · monospace · cursive|serif · sans-serif · monospace · cursive',
          nota: "Pregunta on han vist cada família: els llibres (serif), les pantalles (sans-serif), el codi (monospace), les invitacions (cursive). La lletra exacta canvia una mica segons l'ordinador.|Pregunta dónde han visto cada familia: los libros (serif), las pantallas (sans-serif), el código (monospace), las invitaciones (cursive). La letra exacta cambia un poco según el ordenador." },
        { id: 's5', k: 'media', t: 'El pla B|El plan B', media: W(J("<h1>Revista de l'escola</h1>", '<p>Número 1 · Tardor</p>'), J('h1 {', '  font-family: "Pissarra", cursive;', '}', 'p {', '  font-family: sans-serif;', '}')),
          nota: "La lletra «Pissarra» no existeix: l'ordinador fa servir la següent de la llista. Per això sempre acabem amb una família genèrica.|La letra «Pissarra» no existe: el ordenador usa la siguiente de la lista. Por eso siempre acabamos con una familia genérica." },
        { id: 's6', k: 'media', t: 'La jerarquia|La jerarquía', media: W(J('<h1>Revista</h1>', '<h2>Entrevista a la cuinera</h2>', '<p>Ens explica com prepara el menú de cada dia.</p>'), J('h1 {', '  font-size: 40px;', '}', 'h2 {', '  font-size: 26px;', '}', 'p {', '  font-size: 18px;', '}')),
          nota: "Els navegadors fan servir 16px per al text normal: per llegir còmodament, no baixeu d'aquí. El títol, el més gran.|Los navegadores usan 16px para el texto normal: para leer cómodamente, no bajéis de ahí. El título, el más grande." },
        { id: 's7', k: 'media', t: 'Negreta, cursiva i alineació|Negrita, cursiva y alineación', media: W(J('<h2>Cursa solidària</h2>', '<p class="data">Dissabte 15, a les 10 h</p>', '<p class="nota">Inscripcions a la consergeria.</p>'), J('h2 {', '  text-align: center;', '}', '.data {', '  font-weight: bold;', '}', '.nota {', '  font-style: italic;', '  color: dimgray;', '}')),
          nota: "Recorda que, si una cosa és important de veritat, a l'HTML va dins de &lt;strong&gt;: el CSS només canvia l'aspecte.|Recuerda que, si algo es importante de verdad, en el HTML va dentro de &lt;strong&gt;: el CSS solo cambia el aspecto." },
        { id: 's8', k: 'concepte', t: 'Com a molt, dues lletres|Como mucho, dos letras', punts: ["Una lletra per al text, a body: tota la pàgina l'hereta.|Una letra para el texto, en body: toda la página la hereda.", "Si vols, una altra per als títols.|Si quieres, otra para los títulos.", "Text de lectura: 16px o més.|Texto de lectura: 16px o más."],
          code: J('body {', '  font-family: sans-serif;', '}', 'h1 {', '  font-family: serif;', '}'),
          nota: "Torna a la revista d'en Bit: quantes lletres tenia? Com l'arreglaríeu amb aquestes dues regles?|Vuelve a la revista de Bit: ¿cuántas letras tenía? ¿Cómo la arreglaríais con estas dos reglas?" },
        { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Tipus de lletra».|Abre la sesión «Tipos de letra».", "Fes «Descobreix» i ordena els textos del pòster.|Haz «Descubre» y ordena los textos del póster.", "Reptes: la lletra de la revista i les mides.|Retos: la letra de la revista y los tamaños.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
          nota: "Qui acabi abans, que provi una lletra inventada amb pla B i comprovi quina surt.|Quien acabe antes, que pruebe una letra inventada con plan B y compruebe cuál sale." },
        { id: 's10', k: 'anim', t: "L'element únic|El elemento único", anim: 'w4id', x: 'Classe: la poden portar molts · id: només un|Clase: la pueden llevar muchos · id: solo uno',
          nota: "Samarreta de l'equip = classe; braçalet de capità = id. A l'HTML sense signes; al CSS, punt per a la classe i coixinet per a l'id.|Camiseta del equipo = clase; brazalete de capitán = id. En el HTML sin signos; en el CSS, punto para la clase y almohadilla para el id." },
        { id: 's11', k: 'media', t: 'Classe i id junts|Clase e id juntos', media: W(J('<h1 id="portada">Revista de l\'escola</h1>', '<p class="seccio">Notícies</p>', "<p>Hem estrenat l'hort.</p>", '<p class="seccio">Entrevista</p>', '<p>Parlem amb la cuinera.</p>'), J('#portada {', '  font-family: serif;', '  font-size: 40px;', '  color: #B71C1C;', '}', '.seccio {', '  font-weight: bold;', '  color: #1565C0;', '}')),
          nota: "Pregunta per què el títol fa servir un id i les seccions una classe: es pot repetir?|Pregunta por qué el título usa un id y las secciones una clase: ¿se puede repetir?" },
        { id: 's12', k: 'activitat', t: 'El navegador crida|El navegador llama', timer: 10, punts: ["Penja't la targeta on es vegi.|Cuélgate la tarjeta donde se vea.", "Escolta la regla i fes-la només si et toca.|Escucha la regla y hazla solo si te toca.", "Classe: ho fan tots els de l'equip. Id: només una persona.|Clase: lo hacen todos los del equipo. Id: solo una persona."],
          nota: "Regles per dir: .blau { aixecar-se; } · .vermell { aplaudir; } · #p7 { saludar; } · .verd { tocar-se el cap; } · #p15 { fer una volta; } · .groc { seure; }. Després dona l'id p7 a dues persones i pregunta què passa.|Reglas para decir: .blau { levantarse; } · .vermell { aplaudir; } · #p7 { saludar; } · .verd { tocarse la cabeza; } · #p15 { dar una vuelta; } · .groc { sentarse; }. Después da el id p7 a dos personas y pregunta qué pasa." },
        { id: 's13', k: 'activitat', t: 'Classe o id?|¿Clase o id?', punts: ["Llegiu cada cas de la fitxa.|Leed cada caso de la ficha.", "Es pot repetir? → classe. És únic? → id.|¿Se puede repetir? → clase. ¿Es único? → id.", "Escriviu el selector al CSS: .nom o #nom.|Escribid el selector en el CSS: .nom o #nom."],
          nota: "Corregiu en veu alta dos o tres casos. En cas de dubte, una classe sempre és la més flexible.|Corregid en voz alta dos o tres casos. En caso de duda, una clase siempre es la más flexible." },
        { id: 's14', k: 'repte', t: "Repte: l'id de la portada|Reto: el id de la portada", timer: 7, punts: ["A l'HTML: &lt;h1 id=\"portada\"&gt;|En el HTML: &lt;h1 id=\"portada\"&gt;", "Al CSS: #portada { … } amb serif i 44px|En el CSS: #portada { … } con serif y 44px"],
          nota: "Recorda que aquest repte té dues pestanyes: primer l'HTML, després el CSS.|Recuerda que este reto tiene dos pestañas: primero el HTML, después el CSS." },
        { id: 's15', k: 'activitat', t: 'Crea: la portada de la revista|Crea: la portada de la revista', timer: 10, x: "Una lletra a body, una mida per a cada nivell, l'id portada al títol i la classe seccio a les seccions.|Una letra en body, un tamaño para cada nivel, el id portada en el título y la clase seccio en las secciones.",
          nota: "Si acaben abans, que afegeixin una tercera secció i comprovin que la classe ja li dona estil sense escriure cap regla nova.|Si acaban antes, que añadan una tercera sección y comprueben que la clase ya le da estilo sin escribir ninguna regla nueva." },
        { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["font-family amb un pla B: una família genèrica al final.|font-family con un plan B: una familia genérica al final.", "La mida marca la jerarquia; text de 16px o més.|El tamaño marca la jerarquía; texto de 16px o más.", "Classe (.) es repeteix; id (#) és únic.|Clase (.) se repite; id (#) es único."],
          nota: "Torna a projectar la revista d'en Bit: quines tres regles li faltaven?|Vuelve a proyectar la revista de Bit: ¿qué tres reglas le faltaban?" },
        { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Per què acabem font-family amb una família genèrica?|¿Por qué acabamos font-family con una familia genérica?", "Una cosa per a una classe i una per a un id.|Algo para una clase y algo para un id."],
          nota: "La setmana vinent faran el pòster: anota qui necessitarà ajuda amb les classes i els id.|La semana que viene harán el póster: anota quién necesitará ayuda con las clases y los id." }
      ],
      print: [
        { id: 'p1', t: 'Classe i id|Clase e id', k: 'targetes',
          intro: "Una targeta per alumne/a. La classe és el color de l'equip (es repeteix); l'id és únic. Si sou menys de 24, traieu-ne les últimes de cada color.|Una tarjeta por alumno/a. La clase es el color del equipo (se repite); el id es único. Si sois menos de 24, quitad las últimas de cada color.",
          items: [['blau', '🔵'], ['vermell', '🔴'], ['verd', '🟢'], ['groc', '🟡']].flatMap(([c, ic], k) => [1, 2, 3, 4, 5, 6].map(n => { const id = `p${k * 6 + n}`; return { t: `class="${c}" · id="${id}" ${ic}|class="${c}" · id="${id}" ${ic}`, n: 1 }; })) },
        { id: 'p2', t: 'Classe o id?|¿Clase o id?', k: 'fitxa',
          intro: "Per a cada cas, decidiu si faríeu servir una classe o un id i escriviu com seria el selector al CSS.|Para cada caso, decidid si usaríais una clase o un id y escribid cómo sería el selector en el CSS.",
          items: [
            { q: "Els preus dels 12 productes d'una botiga.|Los precios de los 12 productos de una tienda.", sol: "Classe: .preu (es repeteix 12 vegades).|Clase: .precio (se repite 12 veces)." },
            { q: "El logotip de dalt de tot de la pàgina.|El logotipo de arriba del todo de la página.", sol: "Id: #logotip (només n'hi ha un).|Id: #logotipo (solo hay uno)." },
            { q: "Els avisos importants d'un cartell.|Los avisos importantes de un cartel.", sol: "Classe: .avis.|Clase: .aviso." },
            { q: "El formulari d'inscripció, que només hi és una vegada.|El formulario de inscripción, que solo está una vez.", sol: "Id: #inscripcio.|Id: #inscripcion." },
            { q: "Els noms de les seccions d'una revista.|Los nombres de las secciones de una revista.", sol: "Classe: .seccio.|Clase: .seccion." },
            { q: "Les fotos dels membres d'un equip de bàsquet.|Las fotos de los miembros de un equipo de baloncesto.", sol: "Classe: .foto (n'hi ha moltes). Si una és la del capità, a més pot tenir un id.|Clase: .foto (hay muchas). Si una es la del capitán, además puede tener un id." }
          ] }
      ]
    },

    /* ---------- Sessió 4 · Projecte: el pòster ---------- */
    'w4-4': {
      obj: [
        "L'alumne/a planifica un pòster en paper: contingut, jerarquia, paleta de colors i lletra.|El alumno/a planifica un póster en papel: contenido, jerarquía, paleta de colores y letra.",
        "L'alumne/a construeix el pòster amb HTML (títol amb id, classes, imatge amb alt) i com a mínim cinc regles de CSS.|El alumno/a construye el póster con HTML (título con id, clases, imagen con alt) y como mínimo cinco reglas de CSS.",
        "L'alumne/a revisa el pòster amb una llista (contrast, mida, lletres, alt, errors) i el millora.|El alumno/a revisa el póster con una lista (contraste, tamaño, letras, alt, errores) y lo mejora.",
        "L'alumne/a dona i rep comentaris amables i concrets sobre el pòster d'un company/a.|El alumno/a da y recibe comentarios amables y concretos sobre el póster de un compañero/a."
      ],
      comp: [
        "Competència digital (CD2): crear un contingut digital complet, del pla a la publicació|Competencia digital (CD2): crear un contenido digital completo, del plan a la publicación",
        "Competència lingüística: textos breus, clars i sense faltes per comunicar una activitat|Competencia lingüística: textos breves, claros y sin faltas para comunicar una actividad",
        "Educació visual i plàstica: composició, color i tipografia en un cartell|Educación visual y plástica: composición, color y tipografía en un cartel",
        "Competència personal i social: donar i rebre retroalimentació amb respecte|Competencia personal y social: dar y recibir retroalimentación con respeto"
      ],
      vocab: [
        ["Pòster o cartell|Póster o cartel", "Una pàgina que anuncia una cosa i es llegeix en pocs segons i de lluny.|Una página que anuncia algo y se lee en pocos segundos y de lejos."],
        ["Esbós|Boceto", "Un dibuix ràpid en paper per decidir on va cada cosa abans de construir.|Un dibujo rápido en papel para decidir dónde va cada cosa antes de construir."],
        ["Paleta|Paleta", "Els pocs colors que triem per a tot el disseny: fons, text i destacat.|Los pocos colores que elegimos para todo el diseño: fondo, texto y destacado."],
        ["Jerarquia|Jerarquía", "L'ordre d'importància: el títol primer, després la informació clau i al final els detalls.|El orden de importancia: el título primero, después la información clave y al final los detalles."],
        ["Revisió|Revisión", "Repassar el treball amb una llista per trobar què es pot millorar.|Repasar el trabajo con una lista para encontrar qué se puede mejorar."],
        ["Retroalimentació|Retroalimentación", "Un comentari que ajuda: una cosa bona i una millora concreta.|Un comentario que ayuda: una cosa buena y una mejora concreta."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el pòster»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el póster»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Llapis de colors i llapis normal per a l'esbós|Lápices de colores y lápiz normal para el boceto",
          "Notes adhesives (dues per alumne/a) per a la galeria de pòsters|Notas adhesivas (dos por alumno/a) para la galería de pósters"
        ],
        imprimir: ["Fitxa: L'esbós del pòster (una per alumne/a)|Ficha: El boceto del póster (una por alumno/a)", "Fitxa: Revisió entre companys (una per alumne/a)|Ficha: Revisión entre compañeros (una por alumno/a)"],
        prep: [
          "Pensar dues o tres activitats d'exemple per a qui no sàpiga què triar (exposició de robots, taller de volcans, observació d'estrelles, cursa del barri…).|Pensar dos o tres actividades de ejemplo para quien no sepa qué elegir (exposición de robots, taller de volcanes, observación de estrellas, carrera del barrio…).",
          "Tenir a punt la llista de les imatges de Numi que poden fer servir (img/ic/…): rocket, star, robot, volcano, flask, moon, sun, football, book…|Tener a punto la lista de las imágenes de Numi que pueden usar (img/ic/…): rocket, star, robot, volcano, flask, moon, sun, football, book…",
          "Decidir com es farà la galeria final: ordinadors amb el pòster obert i la classe passejant.|Decidir cómo se hará la galería final: ordenadores con el póster abierto y la clase paseando.",
          "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Recordem i la Setmana de la ciència|Recordamos y la Semana de la ciencia", fase: 'inici',
          fa: "Repassa en un minut classe i id, la unitat px i el codi hex. Després presenta el projecte: cada alumne/a farà el pòster d'una activitat de la Setmana de la ciència del poble (o d'una que s'inventi).|Repasa en un minuto clase e id, la unidad px y el código hex. Después presenta el proyecto: cada alumno/a hará el póster de una actividad de la Semana de la ciencia del pueblo (o de una que se invente).",
          diu: ["Classe o id per a un títol que només hi és un cop?|¿Clase o id para un título que solo está una vez?",
            "Avui sou dissenyadors: el pòster és vostre de dalt a baix.|Hoy sois diseñadores: el póster es vuestro de arriba abajo."],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 8, t: "Què fa bo un pòster|Qué hace bueno un póster", fase: 'teoria',
          fa: "Mostra el pòster de la Nit d'estrelles i analitzeu-lo junts: què es veu primer, quina informació és clau, quants colors i lletres hi ha. Presenta la paleta, l'esbós i la llista de revisió que faran servir al final.|Muestra el póster de la Noche de estrellas y analizadlo juntos: qué se ve primero, qué información es clave, cuántos colores y letras hay. Presenta la paleta, el boceto y la lista de revisión que usarán al final.",
          diu: ["Què és el primer que heu vist? I el segon?|¿Qué es lo primero que habéis visto? ¿Y lo segundo?",
            "Quants colors té aquest pòster? I quantes lletres?|¿Cuántos colores tiene este póster? ¿Y cuántas letras?",
            "Abans de construir, els dissenyadors dibuixen. Avui també!|Antes de construir, los diseñadores dibujan. ¡Hoy también!"],
          slides: ['s4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "L'esbós en paper|El boceto en papel", fase: 'desconnectat',
          fa: "Cada alumne/a omple la fitxa de l'esbós: activitat, títol, informació clau, detall, dibuix, paleta amb codis i lletra. Als últims 3 minuts, en parelles, es fan la prova dels cinc segons amb l'esbós: l'altre/a el mira cinc segons i diu què, quan i on.|Cada alumno/a rellena la ficha del boceto: actividad, título, información clave, detalle, dibujo, paleta con códigos y letra. En los últimos 3 minutos, por parejas, se hacen la prueba de los cinco segundos con el boceto: el otro/a lo mira cinco segundos y dice qué, cuándo y dónde.",
          diu: ["No cal dibuixar bé: rectangles i fletxes ja serveixen.|No hace falta dibujar bien: rectángulos y flechas ya sirven.",
            "Apunteu els codis hex de la paleta: els necessitareu a l'ordinador.|Apuntad los códigos hex de la paleta: los necesitaréis en el ordenador.",
            "El vostre company/a ha entès què, quan i on? Si no, què destacaríeu més?|¿Vuestro compañero/a ha entendido qué, cuándo y dónde? Si no, ¿qué destacaríais más?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 12, t: "Assaig: el pòster dels volcans|Ensayo: el póster de los volcanes", fase: 'ordinador',
          fa: "Cada alumne/a fa a l'app les preguntes, la vista prèvia, les dues línies amb error, la pausa i els tres reptes d'assaig (HTML i CSS del taller de volcans i el pòster d'en Bit). És l'entrenament abans del pòster propi: no cal córrer.|Cada alumno/a hace en la app las preguntas, la vista previa, las dos líneas con error, la pausa y los tres retos de ensayo (HTML y CSS del taller de volcanes y el póster de Bit). Es el entrenamiento antes del póster propio: no hace falta correr.",
          diu: ["Aquest pòster es veu bé, però el codi té un error. Com pot ser?|Este póster se ve bien, pero el código tiene un error. ¿Cómo puede ser?",
            "Quantes xifres té un hex? Compteu-les.|¿Cuántas cifras tiene un hex? Contadlas."],
          slides: ['s10', 's11'], app: "De «Recorda» fins al tercer repte: les preguntes, la història, «Descobreix», ordenar les fases, «L'esbós del pòster» (ja fet), quin pòster es llegeix millor, les dues línies amb error, la pausa i els reptes del taller de volcans i de la cursa.|De «Recuerda» hasta el tercer reto: las preguntas, la historia, «Descubre», ordenar las fases, «El boceto del póster» (ya hecho), qué póster se lee mejor, las dos líneas con error, la pausa y los retos del taller de volcanes y de la carrera.", org: "Individual|Individual" },
        { min: 15, t: "Crea: el meu pòster|Crea: mi póster", fase: 'crea',
          fa: "Cada alumne/a construeix el seu pòster seguint l'esbós. Recorda que l'app marca els criteris mentre treballen. Passeja amb la llista de revisió a la mà i fes preguntes, no correccions: es llegeix de lluny? quantes lletres hi ha?|Cada alumno/a construye su póster siguiendo el boceto. Recuerda que la app marca los criterios mientras trabajan. Pasea con la lista de revisión en la mano y haz preguntas, no correcciones: ¿se lee de lejos? ¿cuántas letras hay?",
          diu: ["Teniu l'esbós al costat? Seguiu-lo, però el podeu millorar.|¿Tenéis el boceto al lado? Seguidlo, pero lo podéis mejorar.",
            "Copieu els codis de la paleta tal com els vau apuntar.|Copiad los códigos de la paleta tal como los apuntasteis.",
            "Abans de desar, passeu la llista de revisió.|Antes de guardar, pasad la lista de revisión."],
          slides: ['s12', 's13'], app: "Pas «Crea»: El meu pòster (es desa a «Projectes»).|Paso «Crea»: Mi póster (se guarda en «Proyectos»).", org: "Individual|Individual" },
        { min: 5, t: "Galeria i prova dels cinc segons|Galería y prueba de los cinco segundos", fase: 'tancament',
          fa: "Deixeu els pòsters oberts a la pantalla i passegeu per l'aula. Cada alumne/a mira dos pòsters i, en una nota adhesiva, escriu una cosa que li agrada i una millora concreta. Després cadascú llegeix les seves notes.|Dejad los pósteres abiertos en la pantalla y pasead por el aula. Cada alumno/a mira dos pósteres y, en una nota adhesiva, escribe algo que le gusta y una mejora concreta. Después cada uno lee sus notas.",
          diu: ["Primer una cosa bona, després una millora que es pugui fer.|Primero algo bueno, después una mejora que se pueda hacer.",
            "«Està malament» no ajuda. «El text es llegiria millor més gran» sí.|«Está mal» no ayuda. «El texto se leería mejor más grande» sí."],
          slides: ['s14', 's15'], app: "El pas de la prova dels cinc segons.|El paso de la prueba de los cinco segundos.", org: "Tot el grup, passejant|Todo el grupo, paseando" },
        { min: 3, t: "Tancament de la unitat i tiquet|Cierre de la unidad y ticket", fase: 'tancament',
          fa: "Repassa què han après a la unitat amb el resum, deixa que responguin les preguntes finals i fes el tiquet a la porta. Felicita'ls: ja saben donar estil a una web de veritat.|Repasa qué han aprendido en la unidad con el resumen, deja que respondan las preguntas finales y haz el ticket en la puerta. Felicítales: ya saben dar estilo a una web de verdad.",
          diu: ["Quina és la regla de CSS de la qual esteu més orgullosos?|¿Cuál es la regla de CSS de la que estáis más orgullosos?",
            "Què milloraríeu del vostre pòster amb una sessió més?|¿Qué mejoraríais de vuestro póster con una sesión más?"],
          slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Comença a escriure codi sense esbós i es perd triant colors.|Empieza a escribir código sin boceto y se pierde eligiendo colores.",
          "Torna-li la fitxa de l'esbós: que triï la paleta en paper i després la copiï. Pregunta: què vols que es vegi primer?|Devuélvele la ficha del boceto: que elija la paleta en papel y después la copie. Pregunta: ¿qué quieres que se vea primero?"],
        ["Fa servir massa colors i lletres i el pòster queda desordenat.|Usa demasiados colores y letras y el póster queda desordenado.",
          "Fes-li la prova dels cinc segons. Que compti quants colors i quantes lletres té i en triï tres i dues.|Hazle la prueba de los cinco segundos. Que cuente cuántos colores y cuántas letras tiene y elija tres y dos."],
        ["El títol i la informació clau tenen la mateixa mida que els detalls.|El título y la información clave tienen el mismo tamaño que los detalles.",
          "Pregunta: què és el més important del pòster? I el segon? Que ho mostri amb les mides.|Pregunta: ¿qué es lo más importante del póster? ¿Y lo segundo? Que lo muestre con los tamaños."],
        ["La imatge no té alt, o l'alt diu «imatge».|La imagen no tiene alt, o el alt dice «imagen».",
          "Recorda-li la unitat 3: què li diries a una persona que no pot veure la imatge?|Recuérdale la unidad 3: ¿qué le dirías a una persona que no puede ver la imagen?"],
        ["Copia el codi hex de l'esbós malament (cinc xifres, sense #).|Copia el código hex del boceto mal (cinco cifras, sin #).",
          "Que compti les xifres per parelles i que miri si el color de la vista prèvia és el que esperava.|Que cuente las cifras por parejas y que mire si el color de la vista previa es el que esperaba."]
      ],
      diff: {
        mes: "Fer una segona versió del pòster amb una altra paleta (per exemple, de nit i de dia) canviant només el CSS. Afegir un enllaç a «Més informació» amb href=\"#titol\" o a una adreça inventada.|Hacer una segunda versión del póster con otra paleta (por ejemplo, de noche y de día) cambiando solo el CSS. Añadir un enlace a «Más información» con href=\"#titol\" o a una dirección inventada.",
        menys: "Partir del pòster dels volcans de l'assaig i canviar-ne els textos, la imatge i els colors. Fer servir la paleta de la diapositiva de la paleta si no en vol triar una de pròpia.|Partir del póster de los volcanes del ensayo y cambiar sus textos, la imagen y los colores. Usar la paleta de la diapositiva de la paleta si no quiere elegir una propia."
      },
      aval: {
        ticket: ["Quina regla del teu pòster fa que es llegeixi bé de lluny?|¿Qué regla de tu póster hace que se lea bien de lejos?",
          "Quina millora t'han proposat i com la faries?|¿Qué mejora te han propuesto y cómo la harías?"],
        rubric: [
          ["Planificació|Planificación", "L'esbós té jerarquia, paleta amb codis i lletra, i el pòster el segueix.|El boceto tiene jerarquía, paleta con códigos y letra, y el póster lo sigue.", "Fa l'esbós, però incomplet o no el fa servir per construir.|Hace el boceto, pero incompleto o no lo usa para construir."],
          ["Construcció|Construcción", "Fa servir id, classes, una imatge amb alt i cinc regles o més sense errors.|Usa id, clases, una imagen con alt y cinco reglas o más sin errores.", "El pòster funciona, però li falta algun element o té errors que arregla amb ajuda.|El póster funciona, pero le falta algún elemento o tiene errores que arregla con ayuda."],
          ["Revisió i retroalimentació|Revisión y retroalimentación", "Revisa el pòster amb la llista i dona comentaris amables i concrets.|Revisa el póster con la lista y da comentarios amables y concretos.", "Revisa amb ajuda; els comentaris són poc concrets («m'agrada»).|Revisa con ayuda; los comentarios son poco concretos («me gusta»)."]
        ]
      },
      casa: "Ensenya el teu pòster a algú de casa des del mòbil i fes-li la prova dels cinc segons: què ha entès? Apunta una millora i, si vols, fes-la a casa repetint la sessió.|Enseña tu póster a alguien de casa desde el móvil y hazle la prueba de los cinco segundos: ¿qué ha entendido? Apunta una mejora y, si quieres, hazla en casa repitiendo la sesión.",
      slides: [
        { id: 's1', k: 'portada', t: 'Projecte: el pòster|Proyecto: el póster', x: "Planifica, construeix i revisa el pòster d'una activitat amb HTML i CSS.|Planifica, construye y revisa el póster de una actividad con HTML y CSS.",
          nota: "Explica les tres fases de la sessió: pensar en paper, construir a l'ordinador i revisar amb els companys.|Explica las tres fases de la sesión: pensar en papel, construir en el ordenador y revisar con los compañeros." },
        { id: 's2', k: 'repas', t: 'Recordem|Recordamos', punts: ["Classe (.) o id (#)?|¿Clase (.) o id (#)?", "font-size: 40; o font-size: 40px;?|¿font-size: 40; o font-size: 40px;?", "Un hex: # i quantes xifres?|Un hex: # y ¿cuántas cifras?"],
          code: J('#titol { font-size: 44px; }', '.info { font-weight: bold; }'),
          nota: "Un minut, amb respostes ràpides en veu alta. Són les tres coses que més fallen als pòsters.|Un minuto, con respuestas rápidas en voz alta. Son las tres cosas que más fallan en los pósteres." },
        { id: 's3', k: 'concepte', t: 'La Setmana de la ciència|La Semana de la ciencia', punts: ["Cada activitat necessita un pòster.|Cada actividad necesita un póster.", "Tria'n una o inventa-te-la: robots, volcans, estrelles, una cursa…|Elige una o invéntatela: robots, volcanes, estrellas, una carrera…", "Ha de dir què, quan i on.|Tiene que decir qué, cuándo y dónde."], pic: 'img/ment/ate.webp',
          nota: "Si algú no sap què triar, ofereix-li les activitats d'exemple de la preparació.|Si alguien no sabe qué elegir, ofrécele las actividades de ejemplo de la preparación." },
        { id: 's4', k: 'media', t: 'Un pòster que funciona|Un póster que funciona', x: "Què es veu primer? Quants colors i lletres té?|¿Qué se ve primero? ¿Cuántos colores y letras tiene?",
          media: W(J('<h1 id="titol">Nit d\'estrelles</h1>', '<p class="info">Divendres 20 · 21 h · Pati de l\'escola</p>', '<img src="img/ic/moon.webp" alt="La Lluna" width="90">', '<p>Mirarem la Lluna i els planetes amb telescopis.</p>', "<p class=\"nota\">Porta roba d'abric!</p>"), J('body {', '  font-family: sans-serif;', '  background-color: #14204A;', '  color: #FFFFFF;', '  text-align: center;', '}', '#titol {', '  font-family: serif;', '  font-size: 44px;', '  color: #FFD54A;', '}', '.info {', '  font-weight: bold;', '  font-size: 20px;', '}', '.nota {', '  font-style: italic;', '  color: #C5CAE9;', '}')),
          nota: "Analitzeu-lo: títol gran i d'un color que destaca, informació clau en negreta, tres colors, dues lletres i bon contrast.|Analizadlo: título grande y de un color que destaca, información clave en negrita, tres colores, dos letras y buen contraste." },
        { id: 's5', k: 'media', t: 'La paleta|La paleta', media: W(J('<p class="c1">#14204A · fons</p>', '<p class="c2">#FFFFFF · text</p>', '<p class="c3">#FFD54A · destacat</p>'), J('p {', '  font-size: 20px;', '  font-weight: bold;', '}', '.c1 {', '  background-color: #14204A;', '  color: #FFFFFF;', '}', '.c2 {', '  background-color: #FFFFFF;', '  color: #14204A;', '}', '.c3 {', '  background-color: #FFD54A;', '  color: #14204A;', '}')),
          nota: "Tres colors: fons, text i destacat. Comproveu el contrast de cada parella abans de començar.|Tres colores: fondo, texto y destacado. Comprobad el contraste de cada pareja antes de empezar." },
        { id: 's6', k: 'concepte', t: "Primer, l'esbós|Primero, el boceto", punts: ["On va el títol, la imatge i el text?|¿Dónde va el título, la imagen y el texto?", "Què és el més important? I el segon?|¿Qué es lo más importante? ¿Y lo segundo?", "Quina paleta i quina lletra?|¿Qué paleta y qué letra?", "Què tindrà l'id i què la classe?|¿Qué tendrá el id y qué la clase?"], pic: 'img/ment/lli.webp',
          nota: "Insisteix que l'esbós no és un dibuix artístic: és un pla. Rectangles i fletxes.|Insiste en que el boceto no es un dibujo artístico: es un plan. Rectángulos y flechas." },
        { id: 's7', k: 'media', t: 'La llista de revisió|La lista de revisión', media: W(J('<h2>Abans de desar</h2>', '<ul>', '  <li>Es llegeix de lluny?</li>', '  <li>El contrast és bo?</li>', '  <li>Dues lletres com a molt?</li>', '  <li>Les imatges tenen alt?</li>', '  <li>Sense faltes ni errors?</li>', '</ul>'), J('body {', '  font-family: sans-serif;', '  background-color: #E8F5E9;', '}', 'h2 {', '  color: #1B5E20;', '}', 'li {', '  font-size: 18px;', '  color: #263238;', '}')),
          nota: "Fes notar que la llista mateixa és una web amb CSS. La faran servir abans de desar i a la galeria.|Haz notar que la lista misma es una web con CSS. La usarán antes de guardar y en la galería." },
        { id: 's8', k: 'activitat', t: "L'esbós del pòster|El boceto del póster", timer: 12, punts: ["Tria l'activitat.|Elige la actividad.", "Escriu el títol, la informació clau i un detall.|Escribe el título, la información clave y un detalle.", "Dibuixa l'esbós.|Dibuja el boceto.", "Tria la paleta (amb codis) i la lletra.|Elige la paleta (con códigos) y la letra.", "Marca què tindrà l'id i què la classe.|Marca qué tendrá el id y qué la clase."],
          nota: "Passa per les taules i comprova que cada esbós té els codis de la paleta: és el que més els ajudarà a l'ordinador.|Pasa por las mesas y comprueba que cada boceto tiene los códigos de la paleta: es lo que más les ayudará en el ordenador." },
        { id: 's9', k: 'activitat', t: 'La prova dels cinc segons|La prueba de los cinco segundos', punts: ["Ensenya l'esbós al company/a cinc segons.|Enseña el boceto al compañero/a cinco segundos.", "Amaga'l: sap dir què, quan i on?|Escóndelo: ¿sabe decir qué, cuándo y dónde?", "Si no, què destacaries més?|Si no, ¿qué destacarías más?"],
          nota: "Si cal, fes una demostració amb el pòster de la Nit d'estrelles: cinc segons i amagar-lo.|Si hace falta, haz una demostración con el póster de la Noche de estrellas: cinco segundos y esconderlo." },
        { id: 's10', k: 'repte', t: 'Assaig a l\'ordinador|Ensayo en el ordenador', timer: 12, punts: ["Les preguntes i les dues línies amb error|Las preguntas y las dos líneas con error", "1. L'HTML del taller de volcans|1. El HTML del taller de volcanes", "2. El CSS del taller de volcans|2. El CSS del taller de volcanes", "3. Arregla el pòster d'en Bit|3. Arregla el póster de Bit"],
          nota: "A «L'esbós del pòster», que toquin «Ho hem fet!». Para quan arribin al pas «El meu pòster».|En «El boceto del póster», que toquen «¡Lo hemos hecho!». Para cuando lleguen al paso «Mi póster»." },
        { id: 's11', k: 'media', t: 'Es veu bé… però és correcte?|Se ve bien… pero ¿es correcto?', media: W(J('<h1 id="titol">Taller de volcans</h1>', '<p class="info">Dimecres a les 5 h</p>', '<p id="titol">Al laboratori</p>'), '#titol { color: #B3261E; } .info { font-weight: bold; }'),
          nota: "El navegador pinta tots dos, però l'id titol està repetit. Que una pàgina es vegi bé no vol dir que el codi sigui correcte.|El navegador pinta los dos, pero el id titol está repetido. Que una página se vea bien no quiere decir que el código sea correcto." },
        { id: 's12', k: 'repte', t: 'El meu pòster|Mi póster', timer: 15, punts: ["Un h1 amb id titol, ben gran|Un h1 con id titol, bien grande", "La classe info (què, quan, on) en dos elements o més|La clase info (qué, cuándo, dónde) en dos elementos o más", "Una imatge amb alt|Una imagen con alt", "Lletra i fons a body, amb bon contrast|Letra y fondo en body, con buen contraste", "5 regles o més, sense errors|5 reglas o más, sin errores"],
          nota: "Deixa aquesta diapositiva projectada mentre treballen: són els criteris que l'app va marcant.|Deja esta diapositiva proyectada mientras trabajan: son los criterios que la app va marcando." },
        { id: 's13', k: 'concepte', t: 'La paleta, dins del codi|La paleta, dentro del código', punts: ["Apunta la paleta en un comentari al principi del CSS.|Apunta la paleta en un comentario al principio del CSS.", "Copia els codis de l'esbós.|Copia los códigos del boceto.", "Fes-los servir sempre els mateixos.|Úsalos siempre los mismos."],
          code: J('/* Paleta', '   fons: #E3F2FD', '   text: #0D2240', '   destacat: #C2185B', '   lletra: sans-serif */'),
          nota: "Els comentaris de CSS (/* … */) no es veuen a la pàgina: serveixen per organitzar-se, com fan els professionals.|Los comentarios de CSS (/* … */) no se ven en la página: sirven para organizarse, como hacen los profesionales." },
        { id: 's14', k: 'activitat', t: 'La galeria de pòsters|La galería de pósteres', timer: 5, punts: ["Deixa el pòster obert a la pantalla.|Deja el póster abierto en la pantalla.", "Passeja i mira dos pòsters.|Pasea y mira dos pósteres.", "A cada un, una nota: una cosa bona i una millora.|En cada uno, una nota: una cosa buena y una mejora."],
          nota: "Marca el ritme: dos minuts per pòster. Recorda que es mira, no es toca l'ordinador del company/a.|Marca el ritmo: dos minutos por póster. Recuerda que se mira, no se toca el ordenador del compañero/a." },
        { id: 's15', k: 'concepte', t: 'Un bon comentari|Un buen comentario', punts: ["Comença per una cosa bona i concreta.|Empieza por una cosa buena y concreta.", "Proposa una millora que es pugui fer.|Propón una mejora que se pueda hacer.", "Parla del pòster, no de la persona.|Habla del póster, no de la persona."],
          code: "M'agrada el títol groc. El text es llegiria millor una mica més gran.|Me gusta el título amarillo. El texto se leería mejor un poco más grande.",
          nota: "Llegeix en veu alta l'exemple i un de dolent («està malament»). Quin ajuda més?|Lee en voz alta el ejemplo y uno malo («está mal»). ¿Cuál ayuda más?" },
        { id: 's16', k: 'resum', t: 'Què hem après a la unitat|Qué hemos aprendido en la unidad', punts: ["Regles: selector { propietat: valor; }|Reglas: selector { propiedad: valor; }", "Colors amb nom, hex i rgb(), amb bon contrast.|Colores con nombre, hex y rgb(), con buen contraste.", "Lletra i mida amb jerarquia; classe per repetir, id per a l'únic.|Letra y tamaño con jerarquía; clase para repetir, id para lo único."],
          nota: "Felicita la classe: el seu pòster ja és al portafoli. A la unitat següent aprendran a fer caixes amb marges i vores.|Felicita a la clase: su póster ya está en el portafolio. En la unidad siguiente aprenderán a hacer cajas con márgenes y bordes." },
        { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Quina regla fa que el teu pòster es llegeixi de lluny?|¿Qué regla hace que tu póster se lea de lejos?", "Quina millora t'han proposat?|¿Qué mejora te han propuesto?"],
          nota: "Recull les notes adhesives de la galeria: et donaran pistes de què han entès sobre el contrast i la jerarquia.|Recoge las notas adhesivas de la galería: te darán pistas de qué han entendido sobre el contraste y la jerarquía." }
      ],
      print: [
        { id: 'p1', t: "L'esbós del pòster|El boceto del póster", k: 'fitxa',
          intro: "Planifica el teu pòster abans de tocar l'ordinador. No cal dibuixar bé: n'hi ha prou amb rectangles i fletxes.|Planifica tu póster antes de tocar el ordenador. No hace falta dibujar bien: basta con rectángulos y flechas.",
          items: [
            { q: "Quina activitat anuncia el pòster?|¿Qué actividad anuncia el póster?", sol: "Una activitat real de l'escola o inventada (per exemple, l'exposició de robots).|Una actividad real del cole o inventada (por ejemplo, la exposición de robots)." },
            { q: "El títol (anirà a l'<code>&lt;h1 id=\"titol\"&gt;</code>):|El título (irá en el <code>&lt;h1 id=\"titol\"&gt;</code>):", sol: "Curt i clar: es veu de lluny.|Corto y claro: se ve de lejos." },
            { q: "La informació clau, amb la classe <code>info</code>: què, quan i on.|La información clave, con la clase <code>info</code>: qué, cuándo y dónde.", sol: "Com a mínim dos textos: el dia i l'hora, i el lloc.|Como mínimo dos textos: el día y la hora, y el lugar." },
            { q: "L'esbós: dibuixa on va el títol, la imatge, la informació clau i el detall.|El boceto: dibuja dónde va el título, la imagen, la información clave y el detalle.", big: true, sol: "El títol a dalt i ben gran, la informació clau visible i el detall més petit a baix.|El título arriba y bien grande, la información clave visible y el detalle más pequeño abajo." },
            { q: "La paleta, amb el codi hex de cada color i un quadradet pintat: fons, text i destacat.|La paleta, con el código hex de cada color y un cuadradito pintado: fondo, texto y destacado.", sol: "Tres colors amb bon contrast entre el text i el fons (per exemple, #E3F2FD, #0D2240 i #C2185B).|Tres colores con buen contraste entre el texto y el fondo (por ejemplo, #E3F2FD, #0D2240 y #C2185B)." },
            { q: "La lletra per a <code>body</code> i, si vols, una altra per al títol (acabades en família genèrica).|La letra para <code>body</code> y, si quieres, otra para el título (acabadas en familia genérica).", sol: "Per exemple: body sans-serif i el títol serif. Com a molt, dues.|Por ejemplo: body sans-serif y el título serif. Como mucho, dos." }
          ] },
        { id: 'p2', t: 'Revisió entre companys|Revisión entre compañeros', k: 'fitxa',
          intro: "Mira el pòster d'un company/a i respon. Sigues amable i concret/a: una cosa bona i una millora.|Mira el póster de un compañero/a y responde. Sé amable y concreto/a: una cosa buena y una mejora.",
          items: [
            { q: "Prova dels cinc segons: què anuncia, quan i on?|Prueba de los cinco segundos: ¿qué anuncia, cuándo y dónde?", sol: "Si ho has pogut dir, la jerarquia funciona.|Si lo has podido decir, la jerarquía funciona." },
            { q: "El text es llegeix bé sobre el fons? (sí / costa / no)|¿El texto se lee bien sobre el fondo? (sí / cuesta / no)", sol: "Hi ha d'haver contrast: fosc sobre clar o clar sobre fosc.|Tiene que haber contraste: oscuro sobre claro o claro sobre oscuro." },
            { q: "Quantes lletres diferents hi ha? I quants colors?|¿Cuántas letras diferentes hay? ¿Y cuántos colores?", sol: "Com a molt dues lletres i una paleta de pocs colors.|Como mucho dos letras y una paleta de pocos colores." },
            { q: "Una cosa que t'agrada del pòster:|Algo que te gusta del póster:", sol: "Concreta: «el títol groc es veu de seguida».|Concreta: «el título amarillo se ve enseguida»." },
            { q: "Una millora que es pot fer:|Una mejora que se puede hacer:", sol: "Que es pugui fer: «el text es llegiria millor a 20px».|Que se pueda hacer: «el texto se leería mejor a 20px»." }
          ] }
      ]
    }
  };
})());
