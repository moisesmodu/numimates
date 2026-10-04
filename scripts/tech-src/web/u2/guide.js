/* ===== Numi Tech · guia del professorat · Tech Web · unitat 2 «HTML» (w2-1 … w2-4) =====
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1'].
   Les diapositives «media» mostren el codi i el resultat (TMEDIA.web: { k: 'web', html, css }); el camp «code» mostra codi gran. */
Object.assign(TGUIDE, {

  /* ---------- Sessió 1 · Etiquetes ---------- */
  'w2-1': {
    obj: [
      "L'alumne/a explica que l'HTML marca què és cada tros d'una pàgina i que el navegador fa servir aquestes marques per dibuixar-la.|El alumno/a explica que el HTML marca qué es cada trozo de una página y que el navegador usa esas marcas para dibujarla.",
      "L'alumne/a escriu elements amb l'etiqueta d'obrir i la de tancar (<code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>) i reconeix la barra del tancament.|El alumno/a escribe elementos con la etiqueta de abrir y la de cerrar (<code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>) y reconoce la barra del cierre.",
      "L'alumne/a niua <code>&lt;strong&gt;</code> i <code>&lt;em&gt;</code> dins d'un paràgraf en l'ordre correcte i detecta quan les etiquetes s'encreuen.|El alumno/a anida <code>&lt;strong&gt;</code> y <code>&lt;em&gt;</code> dentro de un párrafo en el orden correcto y detecta cuándo las etiquetas se cruzan.",
      "L'alumne/a troba i arregla etiquetes mal tancades fent servir la vista prèvia i els missatges de l'editor.|El alumno/a encuentra y arregla etiquetas mal cerradas usando la vista previa y los mensajes del editor."
    ],
    comp: [
      'Competència digital (CD3): crear continguts digitals amb un llenguatge de marques|Competencia digital (CD3): crear contenidos digitales con un lenguaje de marcas',
      "Pensament computacional: sintaxi precisa, estructures niuades i depuració d'errors|Pensamiento computacional: sintaxis precisa, estructuras anidadas y depuración de errores",
      "Llengua: l'estructura d'un text (títol i paràgrafs) i el valor de l'èmfasi|Lengua: la estructura de un texto (título y párrafos) y el valor del énfasis",
      'Aprendre a aprendre: llegir els missatges d\'error i fer-los servir per millorar|Aprender a aprender: leer los mensajes de error y usarlos para mejorar'
    ],
    vocab: [
      ['HTML|HTML', 'El llenguatge de marques amb què es fan les pàgines web.|El lenguaje de marcas con el que se hacen las páginas web.'],
      ['Etiqueta|Etiqueta', "Una marca entre &lt; i &gt; que diu on comença o on s'acaba un tros.|Una marca entre &lt; y &gt; que dice dónde empieza o dónde termina un trozo."],
      ['Element|Elemento', "L'etiqueta d'obrir, el contingut i l'etiqueta de tancar, tot junt.|La etiqueta de abrir, el contenido y la etiqueta de cerrar, todo junto."],
      ['Niuar|Anidar', "Posar un element dins d'un altre, tancant primer el de dins.|Poner un elemento dentro de otro, cerrando primero el de dentro."],
      ['Navegador|Navegador', "El programa que llegeix l'HTML i dibuixa la pàgina.|El programa que lee el HTML y dibuja la página."],
      ['strong / em|strong / em', 'Important / èmfasi: el sentit d\'un tros de text, no només com es veu.|Importante / énfasis: el sentido de un trozo de texto, no solo cómo se ve.']
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Etiquetes»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Etiquetas»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        'Un paquet de targetes «Etiquetes humanes» per grup de 5 o 6|Un paquete de tarjetas «Etiquetas humanas» por grupo de 5 o 6',
        'Pissarra per escriure codi en gran|Pizarra para escribir código en grande'
      ],
      imprimir: ['Targetes: etiquetes humanes|Tarjetas: etiquetas humanas', "Fitxa: caça l'etiqueta|Ficha: caza la etiqueta"],
      prep: [
        "Imprimir i retallar un paquet de targetes per grup. Si es plastifiquen, serveixen per a tota la unitat.|Imprimir y recortar un paquete de tarjetas por grupo. Si se plastifican, sirven para toda la unidad.",
        "Provar abans el primer repte a l'app per veure com es marquen les comprovacions i on surt el missatge taronja dels errors.|Probar antes el primer reto en la app para ver cómo se marcan las comprobaciones y dónde sale el mensaje naranja de los errores.",
        "Pensar tres frases amb errors per a la segona part de l'activitat desconnectada (diapositiva 11).|Pensar tres frases con errores para la segunda parte de la actividad desconectada (diapositiva 11).",
        "Imprimir la fitxa «Caça l'etiqueta» per a qui acabi abans o per fer a casa.|Imprimir la ficha «Caza la etiqueta» para quien termine antes o para hacer en casa."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: la sopa de lletres d'en Bit|Bienvenida: la sopa de letras de Bit", fase: 'inici',
        fa: "Presenta la missió de la unitat (el receptari del poble) i escriu a la pissarra un text sense cap marca: el nom d'una fleca, una frase i un horari, tot seguit. Pregunta com sabria un ordinador quin tros és el títol. Recull respostes sense corregir.|Presenta la misión de la unidad (el recetario del pueblo) y escribe en la pizarra un texto sin ninguna marca: el nombre de una panadería, una frase y un horario, todo seguido. Pregunta cómo sabría un ordenador qué trozo es el título. Recoge respuestas sin corregir.",
        diu: ["Vosaltres veieu de seguida quin és el títol. Però un ordinador, com ho sap?|Vosotros veis enseguida cuál es el título. Pero un ordenador, ¿cómo lo sabe?", "En aquesta unitat farem una web de veritat: el receptari del poble.|En esta unidad haremos una web de verdad: el recetario del pueblo."],
        slides: ['s1', 's2', 's3'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: 'Etiquetes que obren i tanquen|Etiquetas que abren y cierran', fase: 'teoria',
        fa: "Explica que l'HTML marca el text amb etiquetes. Escriu a la pissarra un element i assenyala les tres parts. Ensenya la demo del primer codi i, després, la del títol sense tancar: pregunta per què tota la pàgina surt gegant abans de donar la resposta. Acaba amb els arcs de la diapositiva 8 i fes que dibuixin els arcs amb el dit a l'aire.|Explica que el HTML marca el texto con etiquetas. Escribe en la pizarra un elemento y señala las tres partes. Enseña la demo del primer código y, después, la del título sin cerrar: pregunta por qué toda la página sale gigante antes de dar la respuesta. Termina con los arcos de la diapositiva 8 y haz que dibujen los arcos con el dedo en el aire.",
        diu: ["Les etiquetes no surten a la pàgina: són instruccions per al navegador.|Las etiquetas no salen en la página: son instrucciones para el navegador.", "Què té de diferent l'etiqueta de tancar? Exacte: la barra.|¿Qué tiene de diferente la etiqueta de cerrar? Exacto: la barra.", "Per què ara tot és gegant? Què li falta, al títol?|¿Por qué ahora todo es gigante? ¿Qué le falta al título?", "L'última que obres és la primera que tanques.|La última que abres es la primera que cierras."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 10, t: 'Etiquetes humanes|Etiquetas humanas', fase: 'desconnectat',
        fa: "Fes grups de 5 o 6 i reparteix les targetes. Cada grup forma una fila que sigui un paràgraf amb una paraula important a dins. La persona que fa de navegador llegeix la fila i uneix amb els braços cada obertura amb el seu tancament. Després, digues en veu alta frases amb errors (un tancament sense barra, dues etiquetes encreuades) i els grups s'han de recol·locar per arreglar-les.|Haz grupos de 5 o 6 y reparte las tarjetas. Cada grupo forma una fila que sea un párrafo con una palabra importante dentro. La persona que hace de navegador lee la fila y une con los brazos cada apertura con su cierre. Después, di en voz alta frases con errores (un cierre sin barra, dos etiquetas cruzadas) y los grupos tienen que recolocarse para arreglarlas.",
        diu: ["Navegador: llegiu la fila d'esquerra a dreta, com llegeix el codi l'ordinador.|Navegador: leed la fila de izquierda a derecha, como lee el código el ordenador.", "Si els braços s'encreuen, què heu de canviar de lloc?|Si los brazos se cruzan, ¿qué tenéis que cambiar de sitio?", "Qui té la meta 🏁? Ha d'estar a la dreta de la seva bandera 🚩.|¿Quién tiene la meta 🏁? Tiene que estar a la derecha de su bandera 🚩."],
        slides: ['s10', 's11'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Grups de 5 o 6|Grupos de 5 o 6' },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança al seu ritme fins a la pausa activa. Al pas «Etiquetes humanes», que toquin «Ho hem fet!». Passeja per l'aula i, als passos de trobar l'error, demana que expliquin per què han triat la línia abans de comprovar-ho.|Cada alumno/a abre la sesión y avanza a su ritmo hasta la pausa activa. En el paso «Etiquetas humanas», que toquen «¡Lo hemos hecho!». Pasea por el aula y, en los pasos de encontrar el error, pide que expliquen por qué han elegido la línea antes de comprobarlo.",
        diu: ["Abans de tocar la línia, digues-me què hi veus d'estrany.|Antes de tocar la línea, dime qué ves de raro.", "Mira la vista prèvia: què et diu, del codi?|Mira la vista previa: ¿qué te dice del código?"],
        slides: ['s12'], app: "Des de les preguntes de «Recorda» fins a «Investiga»: la missió, les targetes de «Descobreix», ordenar les peces del paràgraf, «Etiquetes humanes» (ja fet), quina vista prèvia fa el codi i les dues línies amb error.|Desde las preguntas de «Recuerda» hasta «Investiga»: la misión, las tarjetas de «Descubre», ordenar las piezas del párrafo, «Etiquetas humanas» (ya hecho), qué vista previa hace el código y las dos líneas con error.", org: 'Individual|Individual' },
      { min: 10, t: 'Reptes: el primer codi|Retos: el primer código', fase: 'ordinador',
        fa: "Fes la pausa activa tots junts. Després escriu en directe a l'editor projectat el primer repte, demanant a la classe què cal escriure i on, i deixa'ls fer els tres reptes. Insisteix a llegir el missatge taronja de sota l'editor quan alguna cosa falla.|Haced la pausa activa todos juntos. Después escribe en directo en el editor proyectado el primer reto, preguntando a la clase qué hay que escribir y dónde, y deja que hagan los tres retos. Insiste en leer el mensaje naranja de debajo del editor cuando algo falla.",
        diu: ["On va el text: abans o després del &gt; de l'etiqueta d'obrir?|¿Dónde va el texto: antes o después del &gt; de la etiqueta de abrir?", "Què diu el missatge taronja? A quina línia us envia?|¿Qué dice el mensaje naranja? ¿A qué línea os manda?", "Si ajudes un company/a, fes-li preguntes: no li escriguis el codi.|Si ayudas a un compañero/a, hazle preguntas: no le escribas el código."],
        slides: ['s13', 's14'], app: '«Pausa activa» i els tres reptes: el primer codi, el segon paràgraf amb strong i el codi amb dos errors.|«Pausa activa» y los tres retos: el primer código, el segundo párrafo con strong y el código con dos errores.', org: 'Tot el grup i després individual|Todo el grupo y después individual' },
      { min: 5, t: 'Crea: el rètol de la botiga|Crea: el rótulo de la tienda', fase: 'crea',
        fa: "Cada alumne/a s'inventa una botiga del poble i en fa la primera pàgina. Quan totes les comprovacions estiguin en verd, la desen. Si hi ha temps, en parelles s'ensenyen la vista prèvia i el company/a endevina quina paraula és dins del <code>&lt;strong&gt;</code>.|Cada alumno/a se inventa una tienda del pueblo y hace su primera página. Cuando todas las comprobaciones estén en verde, la guardan. Si hay tiempo, por parejas se enseñan la vista previa y el compañero/a adivina qué palabra está dentro del <code>&lt;strong&gt;</code>.",
        diu: ["Quin és l'avís més important de la teva botiga? Aquest va al strong.|¿Cuál es el aviso más importante de tu tienda? Ese va en el strong.", "Mira les comprovacions: quina et falta?|Mira las comprobaciones: ¿cuál te falta?"],
        slides: ['s15'], app: 'Pas «Crea»: el rètol de la botiga.|Paso «Crea»: el rótulo de la tienda.', org: 'Individual i després per parelles|Individual y después por parejas' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals de l'app i fes a cada alumne/a una pregunta del tiquet a la porta.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales de la app y haz a cada alumno/a una pregunta del ticket en la puerta.",
        diu: ["Com sap el navegador quin tros és el títol?|¿Cómo sabe el navegador qué trozo es el título?", 'Quina és la regla d\'or per niuar etiquetes?|¿Cuál es la regla de oro para anidar etiquetas?'],
        slides: ['s16', 's17'], app: '«Tancament»: les dues preguntes i com m\'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.', org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ['Tanca el títol sense barra: <code>&lt;h1&gt;Fleca&lt;h1&gt;</code>.|Cierra el título sin barra: <code>&lt;h1&gt;Panadería&lt;h1&gt;</code>.', "Que miri la vista prèvia: per què surt tot gegant? Després, que compari les dues etiquetes de la línia i digui quina diferència hi hauria d'haver.|Que mire la vista previa: ¿por qué sale todo gigante? Después, que compare las dos etiquetas de la línea y diga qué diferencia debería haber."],
      ["Esborra les etiquetes quan escriu el text a dins.|Borra las etiquetas cuando escribe el texto dentro.", "Que posi el cursor just després del &gt; de l'etiqueta d'obrir abans d'escriure. Si ja les ha esborrat, els botons de sota l'editor les tornen a escriure.|Que ponga el cursor justo después del &gt; de la etiqueta de abrir antes de escribir. Si ya las ha borrado, los botones de debajo del editor las vuelven a escribir."],
      ["Tanca les etiquetes encreuades: <code>&lt;p&gt;&lt;strong&gt;…&lt;/p&gt;&lt;/strong&gt;</code>.|Cierra las etiquetas cruzadas: <code>&lt;p&gt;&lt;strong&gt;…&lt;/p&gt;&lt;/strong&gt;</code>.", "Que dibuixi amb el dit els arcs de cada parella sobre la pantalla. Si es creuen, quina etiqueta s'ha obert l'última?|Que dibuje con el dedo los arcos de cada pareja sobre la pantalla. Si se cruzan, ¿qué etiqueta se ha abierto la última?"],
      ["Escriu les etiquetes amb espais o lletres de més (<code>&lt; p&gt;</code>, <code>&lt;pp&gt;</code>).|Escribe las etiquetas con espacios o letras de más (<code>&lt; p&gt;</code>, <code>&lt;pp&gt;</code>).", "Que llegeixi el missatge taronja: li diu la línia. Recorda que l'ordinador no endevina: cada caràcter compta.|Que lea el mensaje naranja: le dice la línea. Recuerda que el ordenador no adivina: cada carácter cuenta."],
      ["Fa servir <code>&lt;strong&gt;</code> a tot arreu perquè li agrada la negreta.|Usa <code>&lt;strong&gt;</code> en todas partes porque le gusta la negrita.", "Pregunta: de tot el text, què és el més important de veritat? Si tot és important, res no destaca.|Pregunta: de todo el texto, ¿qué es lo más importante de verdad? Si todo es importante, nada destaca."]
    ],
    diff: {
      mes: "Afegir al rètol un tercer paràgraf amb <code>&lt;em&gt;</code> i <code>&lt;strong&gt;</code> a la mateixa frase, ben niuats, i fer la fitxa «Caça l'etiqueta».|Añadir al rótulo un tercer párrafo con <code>&lt;em&gt;</code> y <code>&lt;strong&gt;</code> en la misma frase, bien anidados, y hacer la ficha «Caza la etiqueta».",
      menys: "Fer servir sempre els botons de sota l'editor, que escriuen l'obertura i el tancament alhora, i començar pel repte 1 amb el professor/a al costat llegint junts el missatge d'error.|Usar siempre los botones de debajo del editor, que escriben la apertura y el cierre a la vez, y empezar por el reto 1 con el profesor/a al lado leyendo juntos el mensaje de error."
    },
    aval: {
      ticket: ["Escriu un paràgraf que digui «Hola».|Escribe un párrafo que diga «Hola».", "Què passa si oblides tancar un <code>&lt;h1&gt;</code>?|¿Qué pasa si olvidas cerrar un <code>&lt;h1&gt;</code>?"],
      rubric: [
        ["Obrir i tancar|Abrir y cerrar", "Escriu elements complets i sap que la de tancar porta barra.|Escribe elementos completos y sabe que la de cerrar lleva barra.", "Escriu l'obertura, però a vegades oblida el tancament o la barra.|Escribe la apertura, pero a veces olvida el cierre o la barra."],
        ['Niuar|Anidar', "Niua <code>&lt;strong&gt;</code> o <code>&lt;em&gt;</code> dins de <code>&lt;p&gt;</code> sense encreuar-los.|Anida <code>&lt;strong&gt;</code> o <code>&lt;em&gt;</code> dentro de <code>&lt;p&gt;</code> sin cruzarlos.", "Posa una etiqueta dins d'una altra, però de vegades les tanca encreuades.|Pone una etiqueta dentro de otra, pero a veces las cierra cruzadas."],
        ['Depurar|Depurar', "Llegeix el missatge d'error i arregla el codi sol/a.|Lee el mensaje de error y arregla el código solo/a.", 'Troba que alguna cosa falla, però necessita ajuda per saber on.|Encuentra que algo falla, pero necesita ayuda para saber dónde.']
      ]
    },
    casa: "A casa, busqueu un cartell, un fulletó o la capsa d'un aliment i marqueu-hi amb llapis on posaríeu <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code> i <code>&lt;strong&gt;</code>. Amb el mòbil, podeu tornar a fer la sessió i millorar el rètol de la botiga.|En casa, buscad un cartel, un folleto o la caja de un alimento y marcad con lápiz dónde pondríais <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code> y <code>&lt;strong&gt;</code>. Con el móvil, podéis volver a hacer la sesión y mejorar el rótulo de la tienda.",
    slides: [
      { id: 's1', k: 'portada', t: 'Etiquetes|Etiquetas', x: "Avui escriurem el primer codi HTML: el llenguatge de totes les webs.|Hoy escribiremos el primer código HTML: el lenguaje de todas las webs.",
        nota: "Presenta l'objectiu: al final de la classe, tothom haurà fet la primera pàgina d'una botiga inventada.|Presenta el objetivo: al final de la clase, todos habrán hecho la primera página de una tienda inventada." },
      { id: 's2', k: 'pregunta', t: 'Com sap el navegador què és un títol?|¿Cómo sabe el navegador qué es un título?', x: "Nosaltres ho veiem de seguida. Però l'ordinador només rep lletres…|Nosotros lo vemos enseguida. Pero el ordenador solo recibe letras…",
        nota: "Escriu a la pissarra el text sense marques i recull idees. Torna-hi al final: amb etiquetes.|Escribe en la pizarra el texto sin marcas y recoge ideas. Vuelve a ello al final: con etiquetas." },
      { id: 's3', k: 'concepte', t: 'La missió: el receptari del poble|La misión: el recetario del pueblo', pic: 'img/tech/scenes/poble.webp',
        punts: ["El poble vol una web amb les receptes de cada família.|El pueblo quiere una web con las recetas de cada familia.", "Aprendrem l'HTML pas a pas, una sessió rere l'altra.|Aprenderemos el HTML paso a paso, una sesión tras otra.", "A la sessió 4 publicareu la vostra recepta.|En la sesión 4 publicaréis vuestra receta."],
        nota: 'Explica que cada sessió farà una peça del receptari: avui, les etiquetes.|Explica que cada sesión hará una pieza del recetario: hoy, las etiquetas.' },
      { id: 's4', k: 'anim', t: 'Un llenguatge de marques|Un lenguaje de marcas', anim: 'w2mark', x: "L'HTML marca cada tros: això és el títol, això és un paràgraf.|El HTML marca cada trozo: esto es el título, esto es un párrafo.",
        nota: "Compara-ho amb subratllar uns apunts amb colors: el text és el mateix, però ara se sap què és cada cosa.|Compáralo con subrayar unos apuntes con colores: el texto es el mismo, pero ahora se sabe qué es cada cosa." },
      { id: 's5', k: 'anim', t: 'Obrir i tancar|Abrir y cerrar', anim: 'w2tag', x: "Obertura + contingut + tancament (amb barra) = un element.|Apertura + contenido + cierre (con barra) = un elemento.",
        nota: "Escriu un element a la pissarra i encercla la barra. Pregunta com seria l'element d'un títol.|Escribe un elemento en la pizarra y rodea la barra. Pregunta cómo sería el elemento de un título." },
      { id: 's6', k: 'media', t: 'El primer codi|El primer código', x: "A l'esquerra, el codi. A la dreta, el que dibuixa el navegador.|A la izquierda, el código. A la derecha, lo que dibuja el navegador.",
        media: { k: 'web', get html() { return L('<h1>Fleca Bon Dia</h1>\n<p>Pa calent cada matí.</p>', '<h1>Panadería Buen Día</h1>\n<p>Pan caliente cada mañana.</p>'); } },
        nota: "Fes notar que les etiquetes no surten a la pàgina. Pregunta: on ha anat a parar el &lt;h1&gt;?|Haz notar que las etiquetas no salen en la página. Pregunta: ¿dónde ha ido a parar el &lt;h1&gt;?" },
      { id: 's7', k: 'media', t: 'Si oblides tancar…|Si olvidas cerrar…', x: "Falta un tancament. Què li passa a la pàgina?|Falta un cierre. ¿Qué le pasa a la página?",
        media: { k: 'web', get html() { return L('<h1>Fleca Bon Dia\n<p>Pa calent cada matí.</p>\n<p>Obrim a les 7.</p>', '<h1>Panadería Buen Día\n<p>Pan caliente cada mañana.</p>\n<p>Abrimos a las 7.</p>'); } },
        nota: "Deixa que ho expliquin ells: el navegador no sap on s'acaba el títol i tot es converteix en títol.|Deja que lo expliquen ellos: el navegador no sabe dónde termina el título y todo se convierte en título." },
      { id: 's8', k: 'anim', t: "Etiquetes dins d'etiquetes|Etiquetas dentro de etiquetas", anim: 'w2nest', x: "L'última que obres és la primera que tanques: els arcs no es poden creuar.|La última que abres es la primera que cierras: los arcos no se pueden cruzar.",
        nota: "Que tothom dibuixi els arcs amb el dit a l'aire mentre els llegeixes en veu alta.|Que todos dibujen los arcos con el dedo en el aire mientras los lees en voz alta." },
      { id: 's9', k: 'concepte', t: 'strong i em, amb sentit|strong y em, con sentido', code: '<p><strong>Compte:</strong> el forn crema.</p>\n<p>Vull <em>molt</em> de xocolata.</p>|<p><strong>Cuidado:</strong> el horno quema.</p>\n<p>Quiero <em>mucho</em> chocolate.</p>',
        punts: ['<code>&lt;strong&gt;</code> = important (es veu en negreta).|<code>&lt;strong&gt;</code> = importante (se ve en negrita).', '<code>&lt;em&gt;</code> = èmfasi (es veu en cursiva).|<code>&lt;em&gt;</code> = énfasis (se ve en cursiva).', 'Sempre dins del paràgraf, tancades abans que el <code>&lt;/p&gt;</code>.|Siempre dentro del párrafo, cerradas antes del <code>&lt;/p&gt;</code>.'],
        nota: "Remarca que el que compta és el sentit. Llegeix les frases en veu alta posant èmfasi a la paraula marcada.|Remarca que lo que cuenta es el sentido. Lee las frases en voz alta poniendo énfasis en la palabra marcada." },
      { id: 's10', k: 'activitat', t: 'Etiquetes humanes|Etiquetas humanas', timer: 10,
        punts: ['Cada persona té una targeta: una etiqueta o un tros de text.|Cada persona tiene una tarjeta: una etiqueta o un trozo de texto.', 'Feu una fila que sigui un paràgraf amb una paraula important.|Haced una fila que sea un párrafo con una palabra importante.', 'El navegador llegeix la fila i uneix cada parella amb els braços.|El navegador lee la fila y une cada pareja con los brazos.', "Si els braços s'encreuen, arregleu-ho!|Si los brazos se cruzan, ¡arregladlo!"],
        nota: "La bandera 🚩 és l'etiqueta d'obrir i la meta 🏁, la de tancar. Que cada grup ho faci com a mínim dues vegades canviant qui fa de navegador.|La bandera 🚩 es la etiqueta de abrir y la meta 🏁, la de cerrar. Que cada grupo lo haga como mínimo dos veces cambiando quién hace de navegador." },
      { id: 's11', k: 'activitat', t: "Caceu l'error|Cazad el error",
        punts: ["Escolteu la frase que diu el professor/a.|Escuchad la frase que dice el profesor/a.", 'Poseu-vos en fila tal com és, amb l\'error.|Poneos en fila tal como es, con el error.', 'El navegador troba on falla i el grup es recol·loca per arreglar-ho.|El navegador encuentra dónde falla y el grupo se recoloca para arreglarlo.'],
        nota: "Exemples: «obre p, Compte, obre strong, crema, tanca p, tanca strong» (encreuades) o «obre h1, Fleca, obre h1» (sense barra).|Ejemplos: «abre p, Cuidado, abre strong, quema, cierra p, cierra strong» (cruzadas) o «abre h1, Panadería, abre h1» (sin barra)." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
        punts: ['Obre la sessió «Etiquetes».|Abre la sesión «Etiquetas».', 'Fes «Recorda», la missió i «Descobreix».|Haz «Recuerda», la misión y «Descubre».', "A «Investiga», explica per què tries cada línia.|En «Investiga», explica por qué eliges cada línea.", 'Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa».'],
        nota: "Al pas «Etiquetes humanes», que toquin «Ho hem fet!»: ja l'hem fet a classe.|En el paso «Etiquetas humanas», que toquen «¡Lo hemos hecho!»: ya lo hemos hecho en clase." },
      { id: 's13', k: 'media', t: 'Escrivim junts|Escribimos juntos', x: "Què hem d'escriure, i on, perquè surti un títol i un paràgraf?|¿Qué tenemos que escribir, y dónde, para que salga un título y un párrafo?",
        media: { k: 'web', get html() { return L('<h1>Fleca Bon Dia</h1>\n<p>Pa calent cada matí.</p>\n<p>Obrim a les <strong>7 del matí</strong>.</p>', '<h1>Panadería Buen Día</h1>\n<p>Pan caliente cada mañana.</p>\n<p>Abrimos a las <strong>7 de la mañana</strong>.</p>'); } },
        nota: "Obre també l'editor de l'app al projector i escriu el codi en directe, preguntant cada etiqueta a la classe. Equivoca't expressament un cop i deixa que trobin l'error.|Abre también el editor de la app en el proyector y escribe el código en directo, preguntando cada etiqueta a la clase. Equivócate a propósito una vez y deja que encuentren el error." },
      { id: 's14', k: 'repte', t: 'Reptes: el primer codi|Retos: el primer código', timer: 10,
        punts: ['1. El nom de la fleca i una frase|1. El nombre de la panadería y una frase', "2. Un segon paràgraf amb <code>&lt;strong&gt;</code>|2. Un segundo párrafo con <code>&lt;strong&gt;</code>", '3. El codi amb dos errors: arregla\'l|3. El código con dos errores: arréglalo'],
        nota: "Si algú s'encalla, pregunta: què diu el missatge taronja de sota l'editor?|Si alguien se atasca, pregunta: ¿qué dice el mensaje naranja de debajo del editor?" },
      { id: 's15', k: 'activitat', t: 'Crea: el rètol de la botiga|Crea: el rótulo de la tienda', timer: 5,
        x: "Inventa una botiga del poble: nom (<code>&lt;h1&gt;</code>), dos paràgrafs, un avís amb <code>&lt;strong&gt;</code> i una paraula amb <code>&lt;em&gt;</code>.|Inventa una tienda del pueblo: nombre (<code>&lt;h1&gt;</code>), dos párrafos, un aviso con <code>&lt;strong&gt;</code> y una palabra con <code>&lt;em&gt;</code>.",
        nota: "Celebra la varietat de botigues. Recorda que les pàgines es desen a «Projectes».|Celebra la variedad de tiendas. Recuerda que las páginas se guardan en «Proyectos»." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy',
        punts: ["L'HTML marca què és cada tros amb etiquetes.|El HTML marca qué es cada trozo con etiquetas.", "L'etiqueta de tancar porta una barra: <code>&lt;/p&gt;</code>.|La etiqueta de cerrar lleva una barra: <code>&lt;/p&gt;</code>.", "L'última que obres és la primera que tanques.|La última que abres es la primera que cierras."],
        nota: "Torna a la pregunta del principi: com sap el navegador què és un títol? Per l'etiqueta &lt;h1&gt;.|Vuelve a la pregunta del principio: ¿cómo sabe el navegador qué es un título? Por la etiqueta &lt;h1&gt;." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida',
        punts: ['Escriu un paràgraf que digui «Hola».|Escribe un párrafo que diga «Hola».', 'Què passa si oblides tancar un <code>&lt;h1&gt;</code>?|¿Qué pasa si olvidas cerrar un <code>&lt;h1&gt;</code>?'],
        nota: "Anota qui encara oblida la barra: la setmana vinent comença la sessió al seu costat.|Anota quién todavía olvida la barra: la semana que viene empieza la sesión a su lado." }
    ],
    print: [
      { id: 'p1', t: 'Targetes: etiquetes humanes|Tarjetas: etiquetas humanas', k: 'targetes',
        intro: "Un paquet per grup de 5 o 6. La bandera 🚩 vol dir «obre» i la meta 🏁, «tanca». Les targetes amb llapis són trossos de text.|Un paquete por grupo de 5 o 6. La bandera 🚩 quiere decir «abre» y la meta 🏁, «cierra». Las tarjetas con lápiz son trozos de texto.",
        items: [
          { t: '<p> 🚩|<p> 🚩', n: 2 }, { t: '</p> 🏁|</p> 🏁', n: 2 }, { t: '<h1> 🚩|<h1> 🚩', n: 1 }, { t: '</h1> 🏁|</h1> 🏁', n: 1 },
          { t: '<strong> 🚩|<strong> 🚩', n: 1 }, { t: '</strong> 🏁|</strong> 🏁', n: 1 }, { t: '<em> 🚩|<em> 🚩', n: 1 }, { t: '</em> 🏁|</em> 🏁', n: 1 },
          { t: 'Fleca Bon Dia ✏️|Panadería Buen Día ✏️', n: 1 }, { t: 'Compte: el forn ✏️|Cuidado: el horno ✏️', n: 1 }, { t: 'crema! ✏️|¡quema! ✏️', n: 1 }, { t: 'Pa calent ✏️|Pan caliente ✏️', n: 1 }
        ] },
      { id: 'p2', t: "Fitxa: caça l'etiqueta|Ficha: caza la etiqueta", k: 'fitxa',
        intro: "Cada codi té un error. Explica què falla i torna'l a escriure ben fet.|Cada código tiene un error. Explica qué falla y vuelve a escribirlo bien.",
        items: [
          { q: '<code>&lt;h1&gt;Fleca Bon Dia&lt;h1&gt;</code>|<code>&lt;h1&gt;Panadería Buen Día&lt;h1&gt;</code>', sol: 'Falta la barra del tancament: <code>&lt;h1&gt;Fleca Bon Dia&lt;/h1&gt;</code>|Falta la barra del cierre: <code>&lt;h1&gt;Panadería Buen Día&lt;/h1&gt;</code>' },
          { q: '<code>&lt;p&gt;Pa calent cada matí.</code>|<code>&lt;p&gt;Pan caliente cada mañana.</code>', sol: 'Falta tancar el paràgraf: <code>…matí.&lt;/p&gt;</code>|Falta cerrar el párrafo: <code>…mañana.&lt;/p&gt;</code>' },
          { q: '<code>&lt;p&gt;És &lt;strong&gt;molt bo&lt;/p&gt;&lt;/strong&gt;</code>|<code>&lt;p&gt;Es &lt;strong&gt;muy rico&lt;/p&gt;&lt;/strong&gt;</code>', sol: "S'encreuen: primer es tanca el strong. <code>&lt;p&gt;És &lt;strong&gt;molt bo&lt;/strong&gt;&lt;/p&gt;</code>|Se cruzan: primero se cierra el strong. <code>&lt;p&gt;Es &lt;strong&gt;muy rico&lt;/strong&gt;&lt;/p&gt;</code>" },
          { q: '<code>&lt;p&gt;Vull &lt;em&gt;dos&lt;/p&gt; croissants.</code>|<code>&lt;p&gt;Quiero &lt;em&gt;dos&lt;/p&gt; cruasanes.</code>', sol: "L'em no es tanca: <code>&lt;p&gt;Vull &lt;em&gt;dos&lt;/em&gt; croissants.&lt;/p&gt;</code>|El em no se cierra: <code>&lt;p&gt;Quiero &lt;em&gt;dos&lt;/em&gt; cruasanes.&lt;/p&gt;</code>" },
          { q: "Escriu un paràgraf que digui que la fleca obre el diumenge, amb la paraula «diumenge» marcada com a important.|Escribe un párrafo que diga que la panadería abre el domingo, con la palabra «domingo» marcada como importante.", sol: '<code>&lt;p&gt;Obrim el &lt;strong&gt;diumenge&lt;/strong&gt;.&lt;/p&gt;</code>|<code>&lt;p&gt;Abrimos el &lt;strong&gt;domingo&lt;/strong&gt;.&lt;/p&gt;</code>' }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Títols i paràgrafs ---------- */
  'w2-2': {
    obj: [
      "L'alumne/a fa servir els títols de <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code> segons el nivell i no segons la mida, sense saltar-se nivells.|El alumno/a usa los títulos de <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code> según el nivel y no según el tamaño, sin saltarse niveles.",
      "L'alumne/a explica que el navegador ajunta els espais i els salts de línia i separa els textos amb paràgrafs.|El alumno/a explica que el navegador junta los espacios y los saltos de línea y separa los textos con párrafos.",
      "L'alumne/a escriu l'esquelet d'una pàgina (doctype, html amb lang, head amb title i body) i diu què va a cada part.|El alumno/a escribe el esqueleto de una página (doctype, html con lang, head con title y body) y dice qué va en cada parte.",
      "L'alumne/a explica per què l'esquema de títols i l'atribut lang ajuden els cercadors i les persones que fan servir lectors de pantalla.|El alumno/a explica por qué el esquema de títulos y el atributo lang ayudan a los buscadores y a las personas que usan lectores de pantalla."
    ],
    comp: [
      'Competència digital (CD3): crear una pàgina web completa i ben estructurada|Competencia digital (CD3): crear una página web completa y bien estructurada',
      "Llengua: jerarquia d'un text (títol, seccions, apartats) i resum en un esquema|Lengua: jerarquía de un texto (título, secciones, apartados) y resumen en un esquema",
      "Ciutadania digital: accessibilitat, pàgines que tothom pot fer servir|Ciudadanía digital: accesibilidad, páginas que todo el mundo puede usar",
      "Pensament computacional: estructures jeràrquiques (arbre) i depuració|Pensamiento computacional: estructuras jerárquicas (árbol) y depuración"
    ],
    vocab: [
      ['Títol (h1-h6)|Título (h1-h6)', "Sis nivells de títol: h1 és el principal, h2 les seccions, h3 els apartats…|Seis niveles de título: h1 es el principal, h2 las secciones, h3 los apartados…"],
      ['Esquema|Esquema', 'La llista dels títols d\'una pàgina en ordre, com l\'índex d\'un llibre.|La lista de los títulos de una página en orden, como el índice de un libro.'],
      ['head / body|head / body', "El cap (informació per al navegador) i el cos (el que es veu) de la pàgina.|La cabeza (información para el navegador) y el cuerpo (lo que se ve) de la página."],
      ['title|title', 'El nom de la pàgina que surt a la pestanya i als cercadors.|El nombre de la página que sale en la pestaña y en los buscadores.'],
      ['Atribut|Atributo', "Informació extra dins de l'etiqueta d'obrir, com <code>lang=\"ca\"</code>.|Información extra dentro de la etiqueta de abrir, como <code>lang=\"es\"</code>."],
      ['Lector de pantalla|Lector de pantalla', 'Un programa que llegeix la pàgina en veu alta a qui no la pot veure bé.|Un programa que lee la página en voz alta a quien no la puede ver bien.']
    ],
    mat: {
      aula: [
        'Un ordinador per alumne/a amb Numi Tech obert a la sessió «Títols i paràgrafs»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Títulos y párrafos»',
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        'Un sobre amb les tires de la revista per grup de 3, i notes adhesives|Un sobre con las tiras de la revista por grupo de 3, y notas adhesivas',
        "Un llibre qualsevol amb índex, per ensenyar-lo a l'inici|Un libro cualquiera con índice, para enseñarlo al principio"
      ],
      imprimir: ['Tires de la revista del poble|Tiras de la revista del pueblo', "Fitxa: l'esquelet i els títols|Ficha: el esqueleto y los títulos"],
      prep: [
        "Imprimir les tires, retallar-les i posar-les barrejades en un sobre per grup.|Imprimir las tiras, recortarlas y ponerlas mezcladas en un sobre por grupo.",
        "Tenir a mà un llibre amb índex per comparar-lo amb l'esquema d'una pàgina web.|Tener a mano un libro con índice para compararlo con el esquema de una página web.",
        "Provar el repte de l'esquelet a l'app per saber on es posa el lang i el title.|Probar el reto del esqueleto en la app para saber dónde se pone el lang y el title."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i comencem: l'índex d'un llibre|Recordamos y empezamos: el índice de un libro", fase: 'inici',
        fa: "Fes dues preguntes ràpides de la sessió anterior (la barra del tancament, el sentit de strong). Ensenya l'índex d'un llibre i pregunta com sabem quins són els capítols i quins els apartats.|Haz dos preguntas rápidas de la sesión anterior (la barra del cierre, el sentido de strong). Enseña el índice de un libro y pregunta cómo sabemos cuáles son los capítulos y cuáles los apartados.",
        diu: ["Com es tanca un paràgraf? I què vol dir strong?|¿Cómo se cierra un párrafo? ¿Y qué quiere decir strong?", "En aquest índex, com sabeu què és un capítol i què és un apartat?|En este índice, ¿cómo sabéis qué es un capítulo y qué es un apartado?"],
        slides: ['s1', 's2', 's3'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: "Títols, espais i l'esquelet|Títulos, espacios y el esqueleto", fase: 'teoria',
        fa: "Ensenya els sis nivells de títol i l'esquema. Després, la demo dels espais: abans de mostrar el resultat, pregunta com creuen que sortirà. Acaba amb l'esquelet de la pàgina i la diferència entre <code>&lt;title&gt;</code> i <code>&lt;h1&gt;</code>; si pots, obre una pàgina qualsevol al navegador i ensenya'n la pestanya.|Enseña los seis niveles de título y el esquema. Después, la demo de los espacios: antes de mostrar el resultado, pregunta cómo creen que saldrá. Termina con el esqueleto de la página y la diferencia entre <code>&lt;title&gt;</code> y <code>&lt;h1&gt;</code>; si puedes, abre una página cualquiera en el navegador y enseña su pestaña.",
        diu: ["El número del títol diu el nivell, no la mida.|El número del título dice el nivel, no el tamaño.", "Com creieu que sortiran tots aquests espais?|¿Cómo creéis que saldrán todos estos espacios?", "El title surt a la pestanya; el h1, dins de la pàgina.|El title sale en la pestaña; el h1, dentro de la página.", "Per què creieu que és important dir l'idioma de la pàgina?|¿Por qué creéis que es importante decir el idioma de la página?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: "L'esquema de la revista|El esquema de la revista", fase: 'desconnectat',
        fa: "Fes grups de 3 i dona un sobre de tires a cada grup. Han de separar títols i paràgrafs, decidir el nivell de cada títol, posar-ho tot en ordre a la taula i escriure l'etiqueta en una nota adhesiva al costat de cada tira. Al final, cada grup llegeix només els seus títols en veu alta i un altre grup diu si l'esquema s'entén.|Haz grupos de 3 y da un sobre de tiras a cada grupo. Tienen que separar títulos y párrafos, decidir el nivel de cada título, ponerlo todo en orden en la mesa y escribir la etiqueta en una nota adhesiva al lado de cada tira. Al final, cada grupo lee solo sus títulos en voz alta y otro grupo dice si el esquema se entiende.",
        diu: ["Quin és el títol de tota la pàgina? Només n'hi pot haver un.|¿Cuál es el título de toda la página? Solo puede haber uno.", "Aquesta tira és una secció o un apartat d'una secció?|¿Esta tira es una sección o un apartado de una sección?", "Llegiu només els títols: s'entén de què va?|Leed solo los títulos: ¿se entiende de qué va?"],
        slides: ['s10', 's11'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Grups de 3|Grupos de 3' },
      { min: 13, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Avancen al seu ritme fins a la pausa activa. Al pas «L'esquema de la revista», que toquin «Ho hem fet!». Fixa't en qui tria el títol per la mida a les preguntes de vista prèvia i pregunta-li pel nivell.|Avanzan a su ritmo hasta la pausa activa. En el paso «El esquema de la revista», que toquen «¡Lo hemos hecho!». Fíjate en quién elige el título por el tamaño en las preguntas de vista previa y pregúntale por el nivel.",
        diu: ["Aquest títol, de quina secció és un apartat?|Este título, ¿de qué sección es un apartado?", 'On va el title: al cap o al cos de la pàgina?|¿Dónde va el title: en la cabeza o en el cuerpo de la página?'],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: la missió, «Descobreix», ordenar l'esquelet, «L'esquema de la revista» (ja fet), les dues vistes prèvies i els dos codis amb error.|De «Recuerda» hasta «Investiga»: la misión, «Descubre», ordenar el esqueleto, «El esquema de la revista» (ya hecho), las dos vistas previas y los dos códigos con error.", org: 'Individual|Individual' },
      { min: 10, t: "Reptes: seccions, apartats i l'esquelet|Retos: secciones, apartados y el esqueleto", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Escriu en directe l'atribut <code>lang</code> i el <code>&lt;title&gt;</code> a l'editor projectat i deixa'ls fer els quatre reptes. L'últim té tres errors: demana que els trobin tots abans de començar a escriure.|Haced la pausa activa juntos. Escribe en directo el atributo <code>lang</code> y el <code>&lt;title&gt;</code> en el editor proyectado y deja que hagan los cuatro retos. El último tiene tres errores: pide que los encuentren todos antes de empezar a escribir.",
        diu: ["L'atribut va dins de l'etiqueta d'obrir, amb cometes.|El atributo va dentro de la etiqueta de abrir, con comillas.", "Abans d'arreglar res, digues-me els tres errors.|Antes de arreglar nada, dime los tres errores."],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: les seccions, l'apartat h3, l'esquelet amb lang i title i la pàgina amb tres errors.|«Pausa activa» y los cuatro retos: las secciones, el apartado h3, el esqueleto con lang y title y la página con tres errores.", org: 'Tot el grup i després individual|Todo el grupo y después individual' },
      { min: 5, t: 'Crea: la portada del receptari|Crea: la portada del recetario', fase: 'crea',
        fa: "Cada alumne/a fa la portada completa del receptari, amb les seccions que vulgui. Quan estigui en verd, que llegeixi només els títols en veu alta al company/a: s'entén l'esquema?|Cada alumno/a hace la portada completa del recetario, con las secciones que quiera. Cuando esté en verde, que lea solo los títulos en voz alta al compañero/a: ¿se entiende el esquema?",
        diu: ["Quines seccions tindrà el vostre receptari?|¿Qué secciones tendrá vuestro recetario?", "Has posat el title? Mira-ho a les comprovacions.|¿Has puesto el title? Míralo en las comprobaciones."],
        slides: ['s15'], app: 'Pas «Crea»: la portada del receptari.|Paso «Crea»: la portada del recetario.', org: 'Individual i després per parelles|Individual y después por parejas' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Repassa el resum, deixa que facin les preguntes finals i el tiquet a la porta.|Repasa el resumen, deja que hagan las preguntas finales y el ticket en la puerta.",
        diu: ["Per a què serveix l'esquema dels títols?|¿Para qué sirve el esquema de los títulos?", 'On surt el title?|¿Dónde sale el title?'],
        slides: ['s16', 's17'], app: '«Tancament»: les dues preguntes i com m\'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.', org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ["Tria el títol per la mida: posa <code>&lt;h4&gt;</code> perquè «queda millor».|Elige el título por el tamaño: pone <code>&lt;h4&gt;</code> porque «queda mejor».", "Pregunta: aquest títol és una secció o un apartat? De quin títol depèn? Recorda-li que la mida es canviarà amb CSS a la unitat 4.|Pregunta: ¿este título es una sección o un apartado? ¿De qué título depende? Recuérdale que el tamaño se cambiará con CSS en la unidad 4."],
      ["Fa salts de línia a l'editor i s'estranya que no surtin a la pàgina.|Hace saltos de línea en el editor y se extraña de que no salgan en la página.", "Torna a la demo dels espais: com separa el navegador els textos? Que posi cada tros dins del seu <code>&lt;p&gt;</code>.|Vuelve a la demo de los espacios: ¿cómo separa el navegador los textos? Que ponga cada trozo dentro de su <code>&lt;p&gt;</code>."],
      ["Posa el <code>&lt;title&gt;</code> dins del body o confon title i h1.|Pone el <code>&lt;title&gt;</code> dentro del body o confunde title y h1.", "Que miri la diapositiva de l'esquelet: el cap i el cos. On surt el title? I el h1?|Que mire la diapositiva del esqueleto: la cabeza y el cuerpo. ¿Dónde sale el title? ¿Y el h1?"],
      ["Escriu l'atribut malament: <code>&lt;html&gt; lang=\"ca\"</code> o sense cometes.|Escribe el atributo mal: <code>&lt;html&gt; lang=\"es\"</code> o sin comillas.", "Que miri l'exemple: l'atribut va dins dels &lt; &gt; de l'etiqueta d'obrir, després del nom i d'un espai. Pot fer servir el botó de sota l'editor.|Que mire el ejemplo: el atributo va dentro de los &lt; &gt; de la etiqueta de abrir, después del nombre y de un espacio. Puede usar el botón de debajo del editor."],
      ["Tanca un títol amb un altre número: <code>&lt;h2&gt;…&lt;/h3&gt;</code>.|Cierra un título con otro número: <code>&lt;h2&gt;…&lt;/h3&gt;</code>.", "Que llegeixi el missatge taronja i compari els dos números de la línia.|Que lea el mensaje naranja y compare los dos números de la línea."]
    ],
    diff: {
      mes: "Afegir a la portada una tercera secció amb dos apartats <code>&lt;h3&gt;</code> i, dins d'un, un salt de línia amb <code>&lt;br&gt;</code> (per exemple, una adreça). Després, fer la fitxa de l'esquelet.|Añadir a la portada una tercera sección con dos apartados <code>&lt;h3&gt;</code> y, dentro de uno, un salto de línea con <code>&lt;br&gt;</code> (por ejemplo, una dirección). Después, hacer la ficha del esqueleto.",
      menys: "Tenir l'esquelet imprès al costat de l'ordinador i començar el «Crea» copiant-lo; fer primer una sola secció i, quan funcioni, la segona.|Tener el esqueleto impreso al lado del ordenador y empezar el «Crea» copiándolo; hacer primero una sola sección y, cuando funcione, la segunda."
    },
    aval: {
      ticket: ['Una pàgina té un <code>&lt;h2&gt;</code> «Postres». Quin títol li toca a la recepta «Crema catalana»?|Una página tiene un <code>&lt;h2&gt;</code> «Postres». ¿Qué título le toca a la receta «Crema catalana»?', "Què va al head i què va al body?|¿Qué va en el head y qué va en el body?"],
      rubric: [
        ['Nivells de títol|Niveles de título', 'Fa servir h1, h2 i h3 en ordre i explica per què.|Usa h1, h2 y h3 en orden y explica por qué.', 'Fa servir títols, però de vegades els tria per la mida o se salta un nivell.|Usa títulos, pero a veces los elige por el tamaño o se salta un nivel.'],
        ['Esquelet|Esqueleto', "Escriu l'esquelet complet amb lang i title al lloc correcte.|Escribe el esqueleto completo con lang y title en el lugar correcto.", "Té l'esquelet, però li falta lang o el title, o no està al head.|Tiene el esqueleto, pero le falta lang o el title, o no está en el head."],
        ['Paràgrafs i espais|Párrafos y espacios', 'Separa els textos amb paràgrafs i sap que els espais del codi no compten.|Separa los textos con párrafos y sabe que los espacios del código no cuentan.', "Encara intenta separar textos amb espais o línies en blanc.|Todavía intenta separar textos con espacios o líneas en blanco."]
      ]
    },
    casa: "A casa, agafeu un diari, una revista o un llibre de receptes i feu-ne l'esquema en un paper: quin seria el h1, quins els h2 i quins els h3. Amb el mòbil, podeu ampliar la portada del receptari amb una secció nova.|En casa, coged un periódico, una revista o un libro de recetas y haced su esquema en un papel: cuál sería el h1, cuáles los h2 y cuáles los h3. Con el móvil, podéis ampliar la portada del recetario con una sección nueva.",
    slides: [
      { id: 's1', k: 'portada', t: 'Títols i paràgrafs|Títulos y párrafos', x: "Avui farem la portada completa del receptari, amb el seu esquelet.|Hoy haremos la portada completa del recetario, con su esqueleto.",
        nota: "Objectiu: una pàgina completa, amb títols en ordre, que tothom pugui llegir bé.|Objetivo: una página completa, con títulos en orden, que todo el mundo pueda leer bien." },
      { id: 's2', k: 'repas', t: "Recordem: etiquetes|Recordamos: etiquetas", punts: ['Com es tanca un paràgraf?|¿Cómo se cierra un párrafo?', 'Què vol dir <code>&lt;strong&gt;</code>?|¿Qué quiere decir <code>&lt;strong&gt;</code>?', "Quina és la regla d'or per niuar?|¿Cuál es la regla de oro para anidar?"],
        nota: "Respostes: <code>&lt;/p&gt;</code>; important; l'última que obres és la primera que tanques.|Respuestas: <code>&lt;/p&gt;</code>; importante; la última que abres es la primera que cierras." },
      { id: 's3', k: 'pregunta', t: "Com s'organitza un llibre?|¿Cómo se organiza un libro?", x: 'Mireu aquest índex: com sabeu què és un capítol i què és un apartat?|Mirad este índice: ¿cómo sabéis qué es un capítulo y qué es un apartado?',
        nota: "Ensenya l'índex d'un llibre real. Fes-los veure que hi ha nivells: el títol del llibre, els capítols, els apartats.|Enseña el índice de un libro real. Hazles ver que hay niveles: el título del libro, los capítulos, los apartados." },
      { id: 's4', k: 'media', t: 'Sis nivells de títol|Seis niveles de título', x: "h1 és el principal (un per pàgina); h2, les seccions; h3, els apartats…|h1 es el principal (uno por página); h2, las secciones; h3, los apartados…",
        media: { k: 'web', get html() { return L('<h1>Títol 1</h1>\n<h2>Títol 2</h2>\n<h3>Títol 3</h3>\n<h4>Títol 4</h4>\n<h5>Títol 5</h5>\n<h6>Títol 6</h6>', '<h1>Título 1</h1>\n<h2>Título 2</h2>\n<h3>Título 3</h3>\n<h4>Título 4</h4>\n<h5>Título 5</h5>\n<h6>Título 6</h6>'); } },
        nota: "La h ve de <i>heading</i>. Insisteix que el número és el nivell: la mida, la decidirem amb CSS.|La h viene de <i>heading</i>. Insiste en que el número es el nivel: el tamaño lo decidiremos con CSS." },
      { id: 's5', k: 'anim', t: "Com l'índex d'un llibre|Como el índice de un libro", anim: 'w2heads', x: "Els títols fan l'esquema: sense saltar nivells.|Los títulos hacen el esquema: sin saltar niveles.",
        nota: "Explica que els lectors de pantalla permeten saltar de títol en títol: si l'esquema és bo, es troba tot de seguida.|Explica que los lectores de pantalla permiten saltar de título en título: si el esquema es bueno, se encuentra todo enseguida." },
      { id: 's6', k: 'media', t: "El navegador s'empassa els espais|El navegador se traga los espacios", x: "Com creieu que sortirà aquest codi?|¿Cómo creéis que saldrá este código?",
        media: { k: 'web', get html() { return L('<p>Barreja    la farina\n      amb el sucre.</p>\n<p>Després,\n\n\nafegeix-hi els ous.</p>', '<p>Mezcla    la harina\n      con el azúcar.</p>\n<p>Después,\n\n\nañade los huevos.</p>'); } },
        nota: "Tapa el resultat amb la mà o un full abans de deixar-lo veure. Després, explica <code>&lt;br&gt;</code>, una etiqueta que no es tanca.|Tapa el resultado con la mano o una hoja antes de dejarlo ver. Después, explica <code>&lt;br&gt;</code>, una etiqueta que no se cierra." },
      { id: 's7', k: 'anim', t: "L'esquelet d'una pàgina|El esqueleto de una página", anim: 'w2page', x: 'head: la informació per al navegador. body: el que es veu.|head: la información para el navegador. body: lo que se ve.',
        nota: "Compara-ho amb una carta: el sobre (adreça, segell) i la carta de dins. El sobre seria el head.|Compáralo con una carta: el sobre (dirección, sello) y la carta de dentro. El sobre sería el head." },
      { id: 's8', k: 'media', t: 'title o h1?|¿title o h1?', x: "El title va a la pestanya; el h1, dins de la pàgina.|El title va a la pestaña; el h1, dentro de la página.",
        media: { k: 'web', get html() { return L('<!DOCTYPE html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <title>Receptari</title>\n</head>\n<body>\n  <h1>Receptari del poble</h1>\n  <p>Receptes de tota la vida.</p>\n</body>\n</html>', '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>Recetario</title>\n</head>\n<body>\n  <h1>Recetario del pueblo</h1>\n  <p>Recetas de toda la vida.</p>\n</body>\n</html>'); } },
        nota: "Fes notar que el title no apareix al resultat. El meta charset fa que es vegin bé els accents.|Haz notar que el title no aparece en el resultado. El meta charset hace que se vean bien los acentos." },
      { id: 's9', k: 'concepte', t: "lang: l'idioma de la pàgina|lang: el idioma de la página", code: '<html lang="ca">|<html lang="es">',
        punts: ["<code>lang</code> és un atribut: informació extra dins de l'etiqueta d'obrir.|<code>lang</code> es un atributo: información extra dentro de la etiqueta de abrir.", 'Els lectors de pantalla el fan servir per llegir amb la pronúncia bona.|Los lectores de pantalla lo usan para leer con la pronunciación correcta.', 'Els cercadors i els traductors saben en quin idioma és la pàgina.|Los buscadores y los traductores saben en qué idioma está la página.'],
        nota: "Pregunta com sonaria una pàgina en català llegida per una veu que creu que és anglès.|Pregunta cómo sonaría una página en español leída por una voz que cree que es inglés." },
      { id: 's10', k: 'activitat', t: "L'esquema de la revista|El esquema de la revista", timer: 12,
        punts: ['Separeu títols i paràgrafs.|Separad títulos y párrafos.', 'Decidiu el nivell de cada títol: h1, h2 o h3.|Decidid el nivel de cada título: h1, h2 o h3.', "Poseu-ho en ordre i escriviu l'etiqueta al costat.|Ponedlo en orden y escribid la etiqueta al lado.", "Llegiu només els títols: s'entén?|Leed solo los títulos: ¿se entiende?"],
        nota: "Solució: h1 «La festa major, minut a minut»; h2 «Dissabte» i «Diumenge»; h3 «La cercavila» i «El concurs de coques» sota dissabte, i «El concert de la plaça» sota diumenge; els altres són paràgrafs.|Solución: h1 «La fiesta mayor, minuto a minuto»; h2 «Sábado» y «Domingo»; h3 «El pasacalles» y «El concurso de cocas» bajo sábado, y «El concierto de la plaza» bajo domingo; los demás son párrafos." },
      { id: 's11', k: 'activitat', t: 'Compareu els esquemes|Comparad los esquemas',
        punts: ['Un grup llegeix els seus títols en veu alta.|Un grupo lee sus títulos en voz alta.', "Un altre grup diu si s'entén i per què.|Otro grupo dice si se entiende y por qué.", 'Si no coincideixen, quin té raó? Pot ser que tots dos?|Si no coinciden, ¿quién tiene razón? ¿Pueden tenerla los dos?'],
        nota: "Hi pot haver més d'un esquema bo. Valora que ho justifiquin.|Puede haber más de un esquema bueno. Valora que lo justifiquen." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13,
        punts: ['Obre la sessió «Títols i paràgrafs».|Abre la sesión «Títulos y párrafos».', 'Fes «Recorda», la missió i «Descobreix».|Haz «Recuerda», la misión y «Descubre».', "Ordena l'esquelet i resol les vistes prèvies.|Ordena el esqueleto y resuelve las vistas previas.", 'Para a la «Pausa activa».|Para en la «Pausa activa».'],
        nota: "Al pas «L'esquema de la revista», que toquin «Ho hem fet!».|En el paso «El esquema de la revista», que toquen «¡Lo hemos hecho!»." },
      { id: 's13', k: 'media', t: 'Escrivim junts: lang i title|Escribimos juntos: lang y title', x: "On va l'idioma? I el title?|¿Dónde va el idioma? ¿Y el title?",
        media: { k: 'web', get html() { return L('<!DOCTYPE html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <title>Receptari</title>\n</head>\n<body>\n  <h1>Receptari del poble</h1>\n  <p>Receptes de família.</p>\n</body>\n</html>', '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>Recetario</title>\n</head>\n<body>\n  <h1>Recetario del pueblo</h1>\n  <p>Recetas de familia.</p>\n</body>\n</html>'); } },
        nota: "Escriu-ho en directe a l'editor de l'app, en el repte de l'esquelet, perquè vegin com es marquen les comprovacions.|Escríbelo en directo en el editor de la app, en el reto del esqueleto, para que vean cómo se marcan las comprobaciones." },
      { id: 's14', k: 'repte', t: 'Reptes: el receptari creix|Retos: el recetario crece', timer: 10,
        punts: ['1. Dues seccions amb <code>&lt;h2&gt;</code>|1. Dos secciones con <code>&lt;h2&gt;</code>', '2. Un apartat amb <code>&lt;h3&gt;</code>|2. Un apartado con <code>&lt;h3&gt;</code>', "3. L'esquelet: lang i title|3. El esqueleto: lang y title", '4. Tres errors per arreglar|4. Tres errores para arreglar'],
        nota: "Al repte 4, que diguin els tres errors en veu alta abans de tocar res.|En el reto 4, que digan los tres errores en voz alta antes de tocar nada." },
      { id: 's15', k: 'activitat', t: 'Crea: la portada del receptari|Crea: la portada del recetario', timer: 5,
        x: "Esquelet amb lang i title, un h1, dues seccions h2 amb un paràgraf cada una.|Esqueleto con lang y title, un h1, dos secciones h2 con un párrafo cada una.",
        nota: "Quan acabin, que llegeixin només els títols al company/a.|Cuando terminen, que lean solo los títulos al compañero/a." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy',
        punts: ['Els títols van de h1 a h6, en ordre i sense saltar nivells.|Los títulos van de h1 a h6, en orden y sin saltar niveles.', 'El navegador ajunta els espais: cada text, al seu <code>&lt;p&gt;</code>.|El navegador junta los espacios: cada texto, en su <code>&lt;p&gt;</code>.', "Una pàgina té head (amb el title) i body, i lang diu l'idioma.|Una página tiene head (con el title) y body, y lang dice el idioma."],
        nota: "Torna a l'índex del llibre: la portada que han fet té el mateix esquema.|Vuelve al índice del libro: la portada que han hecho tiene el mismo esquema." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida',
        punts: ['Quin títol li toca a una recepta dins de la secció <code>&lt;h2&gt;</code> «Postres»?|¿Qué título le toca a una receta dentro de la sección <code>&lt;h2&gt;</code> «Postres»?', 'Què va al head i què va al body?|¿Qué va en el head y qué va en el body?'],
        nota: "Respostes: un h3; al head, la informació (title, meta), i al body, el que es veu.|Respuestas: un h3; en el head, la información (title, meta), y en el body, lo que se ve." }
    ],
    print: [
      { id: 'p1', t: 'Tires de la revista del poble|Tiras de la revista del pueblo', k: 'targetes',
        intro: "Una còpia per grup de 3. Retalleu les tires i poseu-les barrejades en un sobre. Hi ha títols de tres nivells i paràgrafs.|Una copia por grupo de 3. Recortad las tiras y ponedlas mezcladas en un sobre. Hay títulos de tres niveles y párrafos.",
        items: [
          { t: 'La festa major, minut a minut 🎉|La fiesta mayor, minuto a minuto 🎉', n: 1 }, { t: 'Dissabte 📅|Sábado 📅', n: 1 }, { t: 'Diumenge 📅|Domingo 📅', n: 1 },
          { t: 'La cercavila ⭐|El pasacalles ⭐', n: 1 }, { t: 'El concurs de coques 🧁|El concurso de cocas 🧁', n: 1 }, { t: 'El concert de la plaça 🎧|El concierto de la plaza 🎧', n: 1 },
          { t: 'Surt a les 6 de la plaça Major i acaba al parc. 📖|Sale a las 6 de la plaza Mayor y termina en el parque. 📖', n: 1 },
          { t: "Porteu la vostra coca abans de les 11. Hi haurà tast! 📖|Traed vuestra coca antes de las 11. ¡Habrá degustación! 📖", n: 1 },
          { t: 'Música per a tothom a les 10 del vespre. 📖|Música para todos a las 10 de la noche. 📖', n: 1 },
          { t: 'Dos dies de festa per a grans i petits. 📖|Dos días de fiesta para grandes y pequeños. 📖', n: 1 }
        ] },
      { id: 'p2', t: "Fitxa: l'esquelet i els títols|Ficha: el esqueleto y los títulos", k: 'fitxa',
        intro: 'Respon cada pregunta. Si cal codi, escriu-lo amb lletra clara.|Responde cada pregunta. Si hace falta código, escríbelo con letra clara.',
        items: [
          { q: "Escriu l'esquelet d'una pàgina en català que es digui «Les meves receptes» a la pestanya.|Escribe el esqueleto de una página en español que se llame «Mis recetas» en la pestaña.", big: true, sol: '<code>&lt;!DOCTYPE html&gt; &lt;html lang="ca"&gt; &lt;head&gt; &lt;meta charset="utf-8"&gt; &lt;title&gt;Les meves receptes&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;/body&gt; &lt;/html&gt;</code>|<code>&lt;!DOCTYPE html&gt; &lt;html lang="es"&gt; &lt;head&gt; &lt;meta charset="utf-8"&gt; &lt;title&gt;Mis recetas&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;/body&gt; &lt;/html&gt;</code>' },
          { q: 'Ordena aquests títols i digues el nivell de cada un: «Sopes», «Receptari», «Escudella», «Primers plats».|Ordena estos títulos y di el nivel de cada uno: «Sopas», «Recetario», «Escudella», «Primeros platos».', sol: "h1 Receptari · h2 Primers plats · h3 Sopes · h4 Escudella (l'escudella és una sopa: va dins de «Sopes»).|h1 Recetario · h2 Primeros platos · h3 Sopas · h4 Escudella (la escudella es una sopa: va dentro de «Sopas»)." },
          { q: 'Per què no és bona idea triar <code>&lt;h4&gt;</code> només perquè la mida t\'agrada?|¿Por qué no es buena idea elegir <code>&lt;h4&gt;</code> solo porque el tamaño te gusta?', sol: "Perquè el número és el nivell de l'esquema: si se salta nivells, l'esquema queda coix per als cercadors i els lectors de pantalla. La mida es canvia amb CSS.|Porque el número es el nivel del esquema: si se salta niveles, el esquema queda cojo para los buscadores y los lectores de pantalla. El tamaño se cambia con CSS." },
          { q: 'On surt el text del <code>&lt;title&gt;</code>? I el del <code>&lt;h1&gt;</code>?|¿Dónde sale el texto del <code>&lt;title&gt;</code>? ¿Y el del <code>&lt;h1&gt;</code>?', sol: "El title, a la pestanya del navegador (i als cercadors). El h1, dins de la pàgina.|El title, en la pestaña del navegador (y en los buscadores). El h1, dentro de la página." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Llistes ---------- */
  'w2-3': {
    obj: [
      "L'alumne/a tria entre <code>&lt;ul&gt;</code> i <code>&lt;ol&gt;</code> segons si l'ordre dels elements importa i ho justifica.|El alumno/a elige entre <code>&lt;ul&gt;</code> y <code>&lt;ol&gt;</code> según si el orden de los elementos importa y lo justifica.",
      "L'alumne/a escriu llistes amb un <code>&lt;li&gt;</code> per a cada element, sempre dins de la seva llista.|El alumno/a escribe listas con un <code>&lt;li&gt;</code> para cada elemento, siempre dentro de su lista.",
      "L'alumne/a fa una llista niuada posant la llista de dins abans de tancar el <code>&lt;li&gt;</code>.|El alumno/a hace una lista anidada poniendo la lista de dentro antes de cerrar el <code>&lt;li&gt;</code>.",
      "L'alumne/a explica per què una llista feta amb guions dins d'un paràgraf no és una llista de veritat.|El alumno/a explica por qué una lista hecha con guiones dentro de un párrafo no es una lista de verdad."
    ],
    comp: [
      'Competència digital (CD3): organitzar informació en una pàgina web amb llistes|Competencia digital (CD3): organizar información en una página web con listas',
      'Pensament computacional: seqüències (ordre) i conjunts (sense ordre); estructures niuades|Pensamiento computacional: secuencias (orden) y conjuntos (sin orden); estructuras anidadas',
      "Llengua: textos instructius (els passos d'una recepta)|Lengua: textos instructivos (los pasos de una receta)",
      'Ciutadania digital: accessibilitat, contingut que un lector de pantalla entén|Ciudadanía digital: accesibilidad, contenido que un lector de pantalla entiende'
    ],
    vocab: [
      ['ul|ul', 'Llista sense ordre (<i>unordered list</i>): surt amb pics.|Lista sin orden (<i>unordered list</i>): sale con viñetas.'],
      ['ol|ol', "Llista ordenada (<i>ordered list</i>): surt amb números perquè l'ordre importa.|Lista ordenada (<i>ordered list</i>): sale con números porque el orden importa."],
      ['li|li', "Cada element d'una llista (<i>list item</i>).|Cada elemento de una lista (<i>list item</i>)."],
      ['Llista niuada|Lista anidada', "Una llista dins d'un element d'una altra llista.|Una lista dentro de un elemento de otra lista."],
      ['Sagnia|Sangría', "Els espais del principi de línia que fan veure què hi ha dins de què.|Los espacios del principio de línea que hacen ver qué hay dentro de qué."]
    ],
    mat: {
      aula: [
        'Un ordinador per alumne/a amb Numi Tech obert a la sessió «Llistes»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Listas»',
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        'Un paquet de targetes «Llistes de la vida» per grup de 3, i un full per grup|Un paquete de tarjetas «Listas de la vida» por grupo de 3, y una hoja por grupo',
        'Dues capses o dos fulls grans marcats «ul» i «ol» per grup|Dos cajas o dos hojas grandes marcadas «ul» y «ol» por grupo'
      ],
      imprimir: ['Targetes: llistes de la vida|Tarjetas: listas de la vida'],
      prep: [
        "Imprimir i retallar les targetes: un paquet per grup.|Imprimir y recortar las tarjetas: un paquete por grupo.",
        'Preparar els dos fulls «ul» i «ol» a cada taula.|Preparar las dos hojas «ul» y «ol» en cada mesa.',
        "Provar el repte de la llista niuada a l'app per veure com queden les sagnies.|Probar el reto de la lista anidada en la app para ver cómo quedan las sangrías."
      ]
    },
    plan: [
      { min: 5, t: 'Recordem i comencem: dues llistes|Recordamos y empezamos: dos listas', fase: 'inici',
        fa: "Repassa ràpidament els títols i els espais. Després escriu a la pissarra dues llistes d'una recepta, la dels ingredients i la dels passos, i pregunta què passaria si en canviéssim l'ordre.|Repasa rápidamente los títulos y los espacios. Después escribe en la pizarra dos listas de una receta, la de los ingredientes y la de los pasos, y pregunta qué pasaría si cambiáramos su orden.",
        diu: ["Si compro primer els ous i després la farina, canvia res?|Si compro primero los huevos y después la harina, ¿cambia algo?", "I si poso el pastís al forn abans de barrejar?|¿Y si meto el pastel en el horno antes de mezclar?"],
        slides: ['s1', 's2', 's3'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 10, t: 'ul, ol i li|ul, ol y li', fase: 'teoria',
        fa: "Ensenya les dues menes de llista i les demos de <code>&lt;ul&gt;</code> i <code>&lt;ol&gt;</code>. Després la llista niuada: assenyala amb el dit on s'obre i on es tanca el <code>&lt;li&gt;</code> que conté la llista de dins. Acaba amb la llista falsa i pregunta per què queda en una línia.|Enseña los dos tipos de lista y las demos de <code>&lt;ul&gt;</code> y <code>&lt;ol&gt;</code>. Después la lista anidada: señala con el dedo dónde se abre y dónde se cierra el <code>&lt;li&gt;</code> que contiene la lista de dentro. Termina con la lista falsa y pregunta por qué queda en una línea.",
        diu: ["Qui posa el pic o el número: vosaltres o el navegador?|¿Quién pone la viñeta o el número: vosotros o el navegador?", "On es tanca el li de «Fruita»? Abans o després de la llista de dins?|¿Dónde se cierra el li de «Fruta»? ¿Antes o después de la lista de dentro?", "Per què la llista amb guions queda tota en una línia?|¿Por qué la lista con guiones queda toda en una línea?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: 'Ordenada o sense ordre?|¿Ordenada o sin orden?', fase: 'desconnectat',
        fa: "Grups de 3 amb el paquet de targetes. Primer classifiquen les targetes de llistes als fulls «ul» i «ol» i ho justifiquen amb la pregunta màgica. Després fan grups amb les targetes d'ingredients i escriuen al full el codi de la llista niuada, amb sagnies.|Grupos de 3 con el paquete de tarjetas. Primero clasifican las tarjetas de listas en las hojas «ul» y «ol» y lo justifican con la pregunta mágica. Después hacen grupos con las tarjetas de ingredientes y escriben en la hoja el código de la lista anidada, con sangrías.",
        diu: ["Pregunta màgica: si canvio l'ordre, el resultat canvia?|Pregunta mágica: si cambio el orden, ¿el resultado cambia?", "El podi d'una cursa: és ul o ol? Per què?|El podio de una carrera: ¿es ul u ol? ¿Por qué?", "On aneu a escriure la llista de dins?|¿Dónde vais a escribir la lista de dentro?"],
        slides: ['s9', 's10'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Grups de 3|Grupos de 3' },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Avancen al seu ritme fins a la pausa activa. Al pas «Ordenada o sense ordre?», que toquin «Ho hem fet!». A les dues línies amb error, demana que diguin què li passa a la vista prèvia abans de triar.|Avanzan a su ritmo hasta la pausa activa. En el paso «¿Ordenada o sin orden?», que toquen «¡Lo hemos hecho!». En las dos líneas con error, pide que digan qué le pasa a la vista previa antes de elegir.",
        diu: ["Per què aquest pas no surt numerat?|¿Por qué este paso no sale numerado?", "La llista de dins, de quin element penja?|La lista de dentro, ¿de qué elemento cuelga?"],
        slides: ['s11'], app: "De «Recorda» fins a «Investiga»: la missió, «Descobreix», la pregunta de la llista ordenada, «Ordenada o sense ordre?» (ja fet), les dues vistes prèvies i les dues línies amb error.|De «Recuerda» hasta «Investiga»: la misión, «Descubre», la pregunta de la lista ordenada, «¿Ordenada o sin orden?» (ya hecho), las dos vistas previas y las dos líneas con error.", org: 'Individual|Individual' },
      { min: 10, t: 'Reptes: llistes de la recepta|Retos: listas de la receta', fase: 'ordinador',
        fa: "Feu la pausa activa junts. Escriu en directe una <code>&lt;ol&gt;</code> de tres passos a l'editor projectat, amb sagnies, i deixa'ls fer els quatre reptes. Al de la llista niuada, recorda que copiïn l'estructura del primer grup.|Haced la pausa activa juntos. Escribe en directo una <code>&lt;ol&gt;</code> de tres pasos en el editor proyectado, con sangrías, y deja que hagan los cuatro retos. En el de la lista anidada, recuerda que copien la estructura del primer grupo.",
        diu: ["Fixeu-vos en les sagnies: us diuen què hi ha dins de què.|Fijaos en las sangrías: os dicen qué hay dentro de qué.", "Abans d'arreglar la llista de l'excursió, digues-me els tres errors.|Antes de arreglar la lista de la excursión, dime los tres errores."],
        slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes: la llista de la compra, els passos del pa amb tomàquet, la llista de l'excursió amb errors i els ingredients en grups.|«Pausa activa» y los cuatro retos: la lista de la compra, los pasos del pan con tomate, la lista de la excursión con errores y los ingredientes en grupos.", org: 'Tot el grup i després individual|Todo el grupo y después individual' },
      { min: 5, t: "Crea: la pàgina de l'excursió|Crea: la página de la excursión", fase: 'crea',
        fa: "Cada alumne/a fa la pàgina de l'excursió amb les dues llistes i un avís important. Quan estigui en verd, un company/a la llegeix i diu si ha entès què ha de portar i a quina hora surten.|Cada alumno/a hace la página de la excursión con las dos listas y un aviso importante. Cuando esté en verde, un compañero/a la lee y dice si ha entendido qué tiene que llevar y a qué hora salen.",
        diu: ["Quina de les dues llistes ha de tenir números?|¿Cuál de las dos listas tiene que tener números?", "Quin és l'avís que ningú no es pot perdre?|¿Cuál es el aviso que nadie se puede perder?"],
        slides: ['s14'], app: "Pas «Crea»: la pàgina de l'excursió.|Paso «Crea»: la página de la excursión.", org: 'Individual i després per parelles|Individual y después por parejas' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Repassa el resum, deixa que facin les preguntes finals i el tiquet a la porta.|Repasa el resumen, deja que hagan las preguntas finales y el ticket en la puerta.",
        diu: ["Quan fem servir ol en lloc d'ul?|¿Cuándo usamos ol en lugar de ul?", 'On va la llista de dins en una llista niuada?|¿Dónde va la lista de dentro en una lista anidada?'],
        slides: ['s15', 's16'], app: '«Tancament»: les dues preguntes i com m\'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.', org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ["Escriu els elements a dins de la <code>&lt;ul&gt;</code> sense <code>&lt;li&gt;</code>.|Escribe los elementos dentro de la <code>&lt;ul&gt;</code> sin <code>&lt;li&gt;</code>.", "Que miri la vista prèvia: quins elements tenen pic i quins no? Què tenen de diferent al codi?|Que mire la vista previa: ¿qué elementos tienen viñeta y cuáles no? ¿Qué tienen de diferente en el código?"],
      ["Tanca el <code>&lt;li&gt;</code> abans de posar-hi la llista de dins.|Cierra el <code>&lt;li&gt;</code> antes de poner la lista de dentro.", "Pregunta: de quin element penja la llista de dins? Llavors, ha d'estar abans o després del seu <code>&lt;/li&gt;</code>?|Pregunta: ¿de qué elemento cuelga la lista de dentro? Entonces, ¿tiene que estar antes o después de su <code>&lt;/li&gt;</code>?"],
      ["Obre una <code>&lt;ul&gt;</code> i la tanca amb <code>&lt;/ol&gt;</code>.|Abre una <code>&lt;ul&gt;</code> y la cierra con <code>&lt;/ol&gt;</code>.", 'Que llegeixi el missatge taronja i compari l\'obertura i el tancament.|Que lea el mensaje naranja y compare la apertura y el cierre.'],
      ["Escriu els números a mà dins d'una <code>&lt;ol&gt;</code> (surt «1. 1. Bat…»).|Escribe los números a mano dentro de una <code>&lt;ol&gt;</code> (sale «1. 1. Bate…»).", "Recorda-li que el navegador numera sol: que esborri els seus números i ho miri a la vista prèvia.|Recuérdale que el navegador numera solo: que borre sus números y lo mire en la vista previa."],
      ['No fa sagnies i es perd a la llista niuada.|No hace sangrías y se pierde en la lista anidada.', "Que posi dos espais (o el tabulador) a cada nivell. Les sagnies no surten a la pàgina, però ajuden molt a llegir el codi.|Que ponga dos espacios (o el tabulador) en cada nivel. Las sangrías no salen en la página, pero ayudan mucho a leer el código."]
    ],
    diff: {
      mes: "A la pàgina de l'excursió, agrupar el que cal portar en una llista niuada (roba, menjar, altres) i afegir a l'<code>&lt;ol&gt;</code> un pas amb un detall dins d'una llista de dins.|En la página de la excursión, agrupar lo que hay que llevar en una lista anidada (ropa, comida, otros) y añadir a la <code>&lt;ol&gt;</code> un paso con un detalle dentro de una lista de dentro.",
      menys: "Fer servir els botons de sota l'editor, que escriuen la llista amb el primer <code>&lt;li&gt;</code>, i fer primer només la <code>&lt;ul&gt;</code> de l'excursió; quan funcioni, l'<code>&lt;ol&gt;</code>.|Usar los botones de debajo del editor, que escriben la lista con el primer <code>&lt;li&gt;</code>, y hacer primero solo la <code>&lt;ul&gt;</code> de la excursión; cuando funcione, la <code>&lt;ol&gt;</code>."
    },
    aval: {
      ticket: ["Digues una llista de la vida que hagi de ser <code>&lt;ol&gt;</code> i explica per què.|Di una lista de la vida que tenga que ser <code>&lt;ol&gt;</code> y explica por qué.", "Escriu una <code>&lt;ul&gt;</code> amb dues fruites.|Escribe una <code>&lt;ul&gt;</code> con dos frutas."],
      rubric: [
        ['Triar la llista|Elegir la lista', "Tria ul o ol segons si l'ordre importa i ho explica.|Elige ul u ol según si el orden importa y lo explica.", 'Tria bé en els casos clars, però dubta en els que no ho són tant.|Elige bien en los casos claros, pero duda en los que no lo son tanto.'],
        ['Escriure llistes|Escribir listas', 'Cada element dins del seu li i tot dins de la llista, ben tancat.|Cada elemento dentro de su li y todo dentro de la lista, bien cerrado.', 'Fa la llista, però a vegades deixa un element sense li o sense tancar.|Hace la lista, pero a veces deja un elemento sin li o sin cerrar.'],
        ['Llistes niuades|Listas anidadas', 'Posa la llista de dins dins del li correcte, amb sagnies.|Pone la lista de dentro dentro del li correcto, con sangrías.', 'Fa la llista niuada amb ajuda o la posa fora del li.|Hace la lista anidada con ayuda o la pone fuera del li.']
      ]
    },
    casa: "A casa, escriviu en un paper la llista de la compra de la setmana agrupada per seccions del mercat (fruita, forn, nevera…) i, al costat, els passos per preparar un esmorzar. Quina és ul i quina ol? Amb el mòbil, podeu millorar la pàgina de l'excursió.|En casa, escribid en un papel la lista de la compra de la semana agrupada por secciones del mercado (fruta, horno, nevera…) y, al lado, los pasos para preparar un desayuno. ¿Cuál es ul y cuál ol? Con el móvil, podéis mejorar la página de la excursión.",
    slides: [
      { id: 's1', k: 'portada', t: 'Llistes|Listas', x: "Avui farem les llistes de les receptes: ingredients i passos.|Hoy haremos las listas de las recetas: ingredientes y pasos.",
        nota: "Objectiu: saber quina llista toca a cada cosa i escriure-la ben feta.|Objetivo: saber qué lista toca a cada cosa y escribirla bien hecha." },
      { id: 's2', k: 'repas', t: 'Recordem: títols i espais|Recordamos: títulos y espacios', punts: ['Quin títol toca a un apartat dins d\'un <code>&lt;h2&gt;</code>?|¿Qué título toca a un apartado dentro de un <code>&lt;h2&gt;</code>?', 'Com surten molts espais seguits?|¿Cómo salen muchos espacios seguidos?', 'On va el <code>&lt;title&gt;</code>?|¿Dónde va el <code>&lt;title&gt;</code>?'],
        nota: "Respostes: h3; com un sol espai; dins del head.|Respuestas: h3; como un solo espacio; dentro del head." },
      { id: 's3', k: 'pregunta', t: 'Dues llistes, una recepta|Dos listas, una receta', x: "Si canviem l'ordre dels ingredients, passa res? I si canviem l'ordre dels passos?|Si cambiamos el orden de los ingredientes, ¿pasa algo? ¿Y si cambiamos el orden de los pasos?",
        nota: "Escriu les dues llistes a la pissarra i deixa que ho debatin un minut.|Escribe las dos listas en la pizarra y deja que lo debatan un minuto." },
      { id: 's4', k: 'anim', t: 'Dues menes de llista|Dos tipos de lista', anim: 'w2lists', x: "ul: sense ordre, amb pics. ol: amb ordre, amb números.|ul: sin orden, con viñetas. ol: con orden, con números.",
        nota: "Explica de passada d'on venen els noms: <i>unordered list</i> i <i>ordered list</i>.|Explica de pasada de dónde vienen los nombres: <i>unordered list</i> y <i>ordered list</i>." },
      { id: 's5', k: 'media', t: 'ul i li|ul y li', x: 'La capsa és la ul i cada element, un li.|La caja es la ul y cada elemento, un li.',
        media: { k: 'web', get html() { return L('<h2>Ingredients</h2>\n<ul>\n  <li>Farina</li>\n  <li>Ous</li>\n  <li>Sucre</li>\n</ul>', '<h2>Ingredientes</h2>\n<ul>\n  <li>Harina</li>\n  <li>Huevos</li>\n  <li>Azúcar</li>\n</ul>'); } },
        nota: "Fes notar que els pics els posa el navegador, i que les sagnies són per llegir millor el codi.|Haz notar que las viñetas las pone el navegador, y que las sangrías son para leer mejor el código." },
      { id: 's6', k: 'media', t: "ol: quan l'ordre importa|ol: cuando el orden importa", x: "Els mateixos li, una altra capsa: ara surten números.|Los mismos li, otra caja: ahora salen números.",
        media: { k: 'web', get html() { return L('<h2>Passos</h2>\n<ol>\n  <li>Bat els ous.</li>\n  <li>Afegeix-hi la farina.</li>\n  <li>Posa-ho al forn.</li>\n</ol>', '<h2>Pasos</h2>\n<ol>\n  <li>Bate los huevos.</li>\n  <li>Añade la harina.</li>\n  <li>Mételo en el horno.</li>\n</ol>'); } },
        nota: "Pregunta què passaria amb els números si afegíssim un pas al mig: el navegador els torna a posar bé.|Pregunta qué pasaría con los números si añadiéramos un paso en medio: el navegador los vuelve a poner bien." },
      { id: 's7', k: 'media', t: 'Llistes dins de llistes|Listas dentro de listas', x: 'La llista de dins va dins del li, abans de tancar-lo.|La lista de dentro va dentro del li, antes de cerrarlo.',
        media: { k: 'web', get html() { return L('<ul>\n  <li>Fruita\n    <ul>\n      <li>Poma</li>\n      <li>Pera</li>\n    </ul>\n  </li>\n  <li>Verdura</li>\n</ul>', '<ul>\n  <li>Fruta\n    <ul>\n      <li>Manzana</li>\n      <li>Pera</li>\n    </ul>\n  </li>\n  <li>Verdura</li>\n</ul>'); } },
        nota: "Assenyala amb el dit l'obertura i el tancament del li «Fruita». És la regla de niuar de la sessió 1.|Señala con el dedo la apertura y el cierre del li «Fruta». Es la regla de anidar de la sesión 1." },
      { id: 's8', k: 'media', t: 'Compte: la llista falsa|Cuidado: la lista falsa', x: 'Per què queda tot en una línia?|¿Por qué queda todo en una línea?',
        media: { k: 'web', get html() { return L('<p>\n  - Farina\n  - Ous\n  - Sucre\n</p>', '<p>\n  - Harina\n  - Huevos\n  - Azúcar\n</p>'); } },
        nota: "Connecta-ho amb els espais de la sessió 2. A més, un lector de pantalla no sap que això és una llista: amb ul diria quants elements té.|Conéctalo con los espacios de la sesión 2. Además, un lector de pantalla no sabe que esto es una lista: con ul diría cuántos elementos tiene." },
      { id: 's9', k: 'activitat', t: 'Ordenada o sense ordre?|¿Ordenada o sin orden?', timer: 12,
        punts: ['Llegiu cada targeta de llista i poseu-la al full «ul» o «ol».|Leed cada tarjeta de lista y ponedla en la hoja «ul» u «ol».', "Justifiqueu-ho: si canvio l'ordre, el resultat canvia?|Justificadlo: si cambio el orden, ¿el resultado cambia?", "Agrupeu les targetes d'ingredients: és una llista niuada!|Agrupad las tarjetas de ingredientes: ¡es una lista anidada!", 'Escriviu-ne el codi al full, amb sagnies.|Escribid su código en la hoja, con sangrías.'],
        nota: "Solucions: ol per als passos de plantar, el muntatge de la tenda i el podi; ul per a la compra, la motxilla i les fruites preferides. Els grups d'ingredients poden ser fruita i dolços.|Soluciones: ol para los pasos de plantar, el montaje de la tienda y el podio; ul para la compra, la mochila y las frutas preferidas. Los grupos de ingredientes pueden ser fruta y dulces." },
      { id: 's10', k: 'activitat', t: 'La pregunta màgica|La pregunta mágica',
        punts: ["Si canvio l'ordre, el resultat canvia?|Si cambio el orden, ¿el resultado cambia?", 'Sí → <code>&lt;ol&gt;</code>|Sí → <code>&lt;ol&gt;</code>', 'No → <code>&lt;ul&gt;</code>|No → <code>&lt;ul&gt;</code>'],
        nota: "Deixa aquesta diapositiva projectada mentre treballen. El podi sol generar debat: l'ordre (1r, 2n, 3r) és la informació!|Deja esta diapositiva proyectada mientras trabajan. El podio suele generar debate: ¡el orden (1.º, 2.º, 3.º) es la información!" },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
        punts: ['Obre la sessió «Llistes».|Abre la sesión «Listas».', 'Fes «Recorda», la missió i «Descobreix».|Haz «Recuerda», la misión y «Descubre».', 'Resol les vistes prèvies i troba les dues línies amb error.|Resuelve las vistas previas y encuentra las dos líneas con error.', 'Para a la «Pausa activa».|Para en la «Pausa activa».'],
        nota: "Al pas «Ordenada o sense ordre?», que toquin «Ho hem fet!».|En el paso «¿Ordenada o sin orden?», que toquen «¡Lo hemos hecho!»." },
      { id: 's12', k: 'media', t: 'Escrivim junts: els passos|Escribimos juntos: los pasos', x: 'Quins passos té el pa amb tomàquet? En quin ordre?|¿Qué pasos tiene el pan con tomate? ¿En qué orden?',
        media: { k: 'web', get html() { return L('<h2>Passos</h2>\n<ol>\n  <li>Talla una llesca de pa.</li>\n  <li>Frega-hi el tomàquet.</li>\n  <li>Tira-hi oli i sal.</li>\n</ol>', '<h2>Pasos</h2>\n<ol>\n  <li>Corta una rebanada de pan.</li>\n  <li>Frota el tomate.</li>\n  <li>Échale aceite y sal.</li>\n</ol>'); } },
        nota: "Escriu-ho en directe a l'editor de l'app demanant cada pas a la classe. Canvia després l'ol per ul i mira què passa.|Escríbelo en directo en el editor de la app pidiendo cada paso a la clase. Cambia después el ol por ul y mira qué pasa." },
      { id: 's13', k: 'repte', t: 'Reptes: llistes de la recepta|Retos: listas de la receta', timer: 10,
        punts: ['1. La llista de la compra|1. La lista de la compra', '2. Els passos del pa amb tomàquet|2. Los pasos del pan con tomate', "3. La llista de l'excursió amb errors|3. La lista de la excursión con errores", '4. Els ingredients en dos grups|4. Los ingredientes en dos grupos'],
        nota: "Al repte 4, si algú s'encalla, que copiï l'estructura del primer grup i només canviï el text.|En el reto 4, si alguien se atasca, que copie la estructura del primer grupo y solo cambie el texto." },
      { id: 's14', k: 'activitat', t: "Crea: la pàgina de l'excursió|Crea: la página de la excursión", timer: 5,
        x: "Un títol, el que cal portar (ul), el programa del dia (ol) i un avís amb strong.|Un título, lo que hay que llevar (ul), el programa del día (ol) y un aviso con strong.",
        nota: "Quan acabin, un company/a ha de poder dir què ha de portar i a quina hora surten.|Cuando terminen, un compañero/a tiene que poder decir qué tiene que llevar y a qué hora salen." },
      { id: 's15', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy',
        punts: ["ul: sense ordre (pics). ol: amb ordre (números).|ul: sin orden (viñetas). ol: con orden (números).", 'Cada element va dins d\'un li, i els li, dins de la llista.|Cada elemento va dentro de un li, y los li, dentro de la lista.', 'Una llista pot anar dins d\'un li d\'una altra llista.|Una lista puede ir dentro de un li de otra lista.'],
        nota: "Anuncia la propera sessió: amb tot el que saben, faran la recepta sencera.|Anuncia la próxima sesión: con todo lo que saben, harán la receta entera." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida',
        punts: ["Digues una llista de la vida que hagi de ser <code>&lt;ol&gt;</code>. Per què?|Di una lista de la vida que tenga que ser <code>&lt;ol&gt;</code>. ¿Por qué?", 'Escriu una <code>&lt;ul&gt;</code> amb dues fruites.|Escribe una <code>&lt;ul&gt;</code> con dos frutas.'],
        nota: "Demana a qui digui l'exemple que expliqui què passaria si canviés l'ordre.|Pide a quien diga el ejemplo que explique qué pasaría si cambiara el orden." }
    ],
    print: [
      { id: 'p1', t: 'Targetes: llistes de la vida|Tarjetas: listas de la vida', k: 'targetes',
        intro: "Un paquet per grup de 3. Les sis primeres són llistes per classificar (ul o ol); les altres són ingredients per agrupar en una llista niuada.|Un paquete por grupo de 3. Las seis primeras son listas para clasificar (ul u ol); las demás son ingredientes para agrupar en una lista anidada.",
        items: [
          { t: 'Els passos per plantar una llavor 🌸|Los pasos para plantar una semilla 🌸', n: 1 }, { t: 'La compra del mercat 🛍️|La compra del mercado 🛍️', n: 1 },
          { t: "El podi d'una cursa 🏆|El podio de una carrera 🏆", n: 1 }, { t: 'Què cal portar a la motxilla 🗺️|Qué hay que llevar en la mochila 🗺️', n: 1 },
          { t: 'Com es munta una tenda de campanya 🔧|Cómo se monta una tienda de campaña 🔧', n: 1 }, { t: 'Les fruites que més m\'agraden 🍓|Las frutas que más me gustan 🍓', n: 1 },
          { t: 'Poma 🍎|Manzana 🍎', n: 1 }, { t: 'Plàtan 🍌|Plátano 🍌', n: 1 }, { t: 'Maduixa 🍓|Fresa 🍓', n: 1 },
          { t: 'Galeta 🍪|Galleta 🍪', n: 1 }, { t: 'Magdalena 🧁|Magdalena 🧁', n: 1 }, { t: 'Caramel 🍬|Caramelo 🍬', n: 1 }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: la recepta ---------- */
  'w2-4': {
    obj: [
      "L'alumne/a planifica una pàgina en un esbós i assigna una etiqueta a cada part abans d'escriure codi.|El alumno/a planifica una página en un boceto y asigna una etiqueta a cada parte antes de escribir código.",
      "L'alumne/a construeix una pàgina completa que combina l'esquelet, títols en ordre, paràgrafs i llistes ul i ol.|El alumno/a construye una página completa que combina el esqueleto, títulos en orden, párrafos y listas ul y ol.",
      "L'alumne/a fa servir <code>&lt;strong&gt;</code> i <code>&lt;em&gt;</code> amb sentit i deixa notes amb comentaris.|El alumno/a usa <code>&lt;strong&gt;</code> y <code>&lt;em&gt;</code> con sentido y deja notas con comentarios.",
      "L'alumne/a revisa la seva pàgina (etiquetes, esquema, ortografia, mòbil) i dona i rep comentaris amables d'un company/a.|El alumno/a revisa su página (etiquetas, esquema, ortografía, móvil) y da y recibe comentarios amables de un compañero/a."
    ],
    comp: [
      'Competència digital (CD3): crear i publicar un contingut digital propi complet|Competencia digital (CD3): crear y publicar un contenido digital propio completo',
      "Llengua: escriure un text instructiu clar i revisar-ne l'ortografia|Lengua: escribir un texto instructivo claro y revisar su ortografía",
      'Emprenedoria i creativitat: planificar un projecte i millorar-lo amb comentaris|Emprendimiento y creatividad: planificar un proyecto y mejorarlo con comentarios',
      'Ciutadania: compartir el patrimoni de les receptes de família|Ciudadanía: compartir el patrimonio de las recetas de familia'
    ],
    vocab: [
      ['Esbós|Boceto', "Un dibuix ràpid de la pàgina per planificar-la abans de fer el codi.|Un dibujo rápido de la página para planificarla antes de hacer el código."],
      ['Comentari|Comentario', 'Una nota al codi, entre &lt;!-- i --&gt;, que el navegador no mostra.|Una nota en el código, entre &lt;!-- y --&gt;, que el navegador no muestra.'],
      ['Plantilla|Plantilla', "Un codi de partida amb l'estructura feta, per omplir.|Un código de partida con la estructura hecha, para rellenar."],
      ['Revisar|Revisar', 'Comprovar la feina i millorar-la abans de publicar-la.|Comprobar el trabajo y mejorarlo antes de publicarlo.'],
      ['Publicar|Publicar', 'Fer que una pàgina estigui a punt perquè altres la vegin.|Hacer que una página esté lista para que otros la vean.']
    ],
    mat: {
      aula: [
        'Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la recepta»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la receta»',
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La fitxa de l'esbós (una per alumne/a) i llapis|La ficha del boceto (una por alumno/a) y lápiz",
        'La fitxa de revisió entre companys (una per parella)|La ficha de revisión entre compañeros (una por pareja)'
      ],
      imprimir: ["Fitxa: l'esbós de la recepta|Ficha: el boceto de la receta", 'Fitxa: revisió entre companys|Ficha: revisión entre compañeros'],
      prep: [
        "Demanar la setmana anterior que pensin una recepta de casa (o que en preguntin una a la família).|Pedir la semana anterior que piensen una receta de casa (o que pregunten una a la familia).",
        "Imprimir les dues fitxes.|Imprimir las dos fichas.",
        "Tenir preparada una recepta d'exemple per a qui no en porti cap.|Tener preparada una receta de ejemplo para quien no traiga ninguna.",
        "Decidir com es farà la galeria final: projectant unes quantes receptes o passejant per les taules.|Decidir cómo se hará la galería final: proyectando algunas recetas o paseando por las mesas."
      ]
    },
    plan: [
      { min: 5, t: 'El gran dia del receptari|El gran día del recetario', fase: 'inici',
        fa: "Fes les dues preguntes de repàs (ul o ol per als ingredients, on va la llista de dins) i presenta el projecte: cada alumne/a publicarà una recepta al receptari del poble.|Haz las dos preguntas de repaso (ul u ol para los ingredientes, dónde va la lista de dentro) y presenta el proyecto: cada alumno/a publicará una receta en el recetario del pueblo.",
        diu: ["Quina recepta voleu publicar? Pot ser de casa o inventada.|¿Qué receta queréis publicar? Puede ser de casa o inventada.", "Avui farem servir tot el que hem après a la unitat.|Hoy usaremos todo lo que hemos aprendido en la unidad."],
        slides: ['s1', 's2'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 8, t: 'Les parts, els comentaris i el sentit|Las partes, los comentarios y el sentido', fase: 'teoria',
        fa: "Ensenya les parts d'una recepta i quina etiqueta li toca a cada una. Explica els comentaris (la plantilla del projecte en porta) i torna a <code>&lt;strong&gt;</code> i <code>&lt;em&gt;</code> amb l'exemple que canvia el sentit de la frase. Acaba amb la recepta curta d'en Bit.|Enseña las partes de una receta y qué etiqueta le toca a cada una. Explica los comentarios (la plantilla del proyecto los lleva) y vuelve a <code>&lt;strong&gt;</code> y <code>&lt;em&gt;</code> con el ejemplo que cambia el sentido de la frase. Termina con la receta corta de Bit.",
        diu: ["Quina etiqueta li toca als ingredients? I als passos?|¿Qué etiqueta les toca a los ingredientes? ¿Y a los pasos?", "Llegiu la frase posant força a la paraula marcada. Canvia el que vol dir?|Leed la frase poniendo fuerza en la palabra marcada. ¿Cambia lo que quiere decir?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 10, t: "L'esbós de la recepta|El boceto de la receta", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa de l'esbós: dibuixa la pàgina amb caixes, escriu l'etiqueta de cada part, apunta ingredients i passos i marca l'avís important. Els últims minuts, en parelles, s'expliquen l'esbós i el company/a diu si hi falta alguna part.|Cada alumno/a rellena la ficha del boceto: dibuja la página con cajas, escribe la etiqueta de cada parte, apunta ingredientes y pasos y marca el aviso importante. Los últimos minutos, por parejas, se explican el boceto y el compañero/a dice si falta alguna parte.",
        diu: ["Primer el pla, després el codi.|Primero el plan, después el código.", "Quin és l'avís més important de la teva recepta?|¿Cuál es el aviso más importante de tu receta?", "El teu company/a entendria com es fa només llegint-ho?|¿Tu compañero/a entendería cómo se hace solo leyéndolo?"],
        slides: ['s8', 's9'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Individual i després per parelles|Individual y después por parejas' },
      { min: 12, t: "A l'ordinador: la recepta d'en Bit|En el ordenador: la receta de Bit", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa i, després, fan els tres trossos de la recepta d'en Bit. Al pas «L'esbós de la recepta», que toquin «Ho hem fet!». Recorda que cada tros comença amb el codi de l'anterior.|Avanzan hasta la pausa activa y, después, hacen los tres trozos de la receta de Bit. En el paso «El boceto de la receta», que toquen «¡Lo hemos hecho!». Recuerda que cada trozo empieza con el código del anterior.",
        diu: ["On va el nou codi: abans o després del &lt;/body&gt;?|¿Dónde va el nuevo código: antes o después del &lt;/body&gt;?", "El strong va dins del li o fora?|¿El strong va dentro del li o fuera?"],
        slides: ['s10', 's11'], app: "De «Recorda» fins als tres trossos de la recepta d'en Bit: la missió, «Descobreix», ordenar les parts, «L'esbós» (ja fet), la pregunta del strong, la línia amb error, la pausa activa i els trossos 1, 2 i 3.|De «Recuerda» hasta los tres trozos de la receta de Bit: la misión, «Descubre», ordenar las partes, «El boceto» (ya hecho), la pregunta del strong, la línea con error, la pausa activa y los trozos 1, 2 y 3.", org: 'Individual|Individual' },
      { min: 15, t: 'Crea: la meva recepta|Crea: mi receta', fase: 'crea',
        fa: "Cada alumne/a escriu la seva recepta a la plantilla, seguint l'esbós i els comentaris. Quan totes les comprovacions estiguin en verd, fan la revisió en parelles amb la fitxa i, si cal, la milloren abans de desar-la.|Cada alumno/a escribe su receta en la plantilla, siguiendo el boceto y los comentarios. Cuando todas las comprobaciones estén en verde, hacen la revisión por parejas con la ficha y, si hace falta, la mejoran antes de guardarla.",
        diu: ["Segueix l'esbós: ja saps què va a cada lloc.|Sigue el boceto: ya sabes qué va en cada sitio.", "Mira-la amb el botó del mòbil: es llegeix bé?|Mírala con el botón del móvil: ¿se lee bien?", "Un comentari amable i una idea per millorar: aquesta és la revisió.|Un comentario amable y una idea para mejorar: esta es la revisión."],
        slides: ['s12', 's13'], app: "«Ara, la teva!» (la llista de revisió) i el pas «Crea»: la meva recepta.|«¡Ahora, la tuya!» (la lista de revisión) y el paso «Crea»: mi receta.", org: 'Individual i després per parelles|Individual y después por parejas' },
      { min: 10, t: 'Galeria del receptari i tancament|Galería del recetario y cierre', fase: 'tancament',
        fa: "Projecta tres o quatre receptes (amb permís dels autors) o feu una volta per les taules amb les pantalles obertes. Cada autor/a diu en una frase què li ha costat més. Acaba amb el resum de la unitat, les preguntes finals de l'app i el tiquet.|Proyecta tres o cuatro recetas (con permiso de los autores) o dad una vuelta por las mesas con las pantallas abiertas. Cada autor/a dice en una frase qué le ha costado más. Termina con el resumen de la unidad, las preguntas finales de la app y el ticket.",
        diu: ["Què és el que t'ha costat més de la teva recepta?|¿Qué es lo que te ha costado más de tu receta?", "Quina etiqueta de la unitat t'ha estat més útil?|¿Qué etiqueta de la unidad te ha sido más útil?"],
        slides: ['s14', 's15', 's16'], app: '«Tancament»: les dues preguntes i com m\'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.', org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ["Comença a escriure codi sense esbós i es perd a mig camí.|Empieza a escribir código sin boceto y se pierde a medio camino.", "Que torni a l'esbós: quina part estàs fent ara? Quina és la següent? Que segueixi els comentaris de la plantilla d'un en un.|Que vuelva al boceto: ¿qué parte estás haciendo ahora? ¿Cuál es la siguiente? Que siga los comentarios de la plantilla de uno en uno."],
      ["Escriu el codi nou després del <code>&lt;/body&gt;</code> o del <code>&lt;/html&gt;</code>.|Escribe el código nuevo después del <code>&lt;/body&gt;</code> o del <code>&lt;/html&gt;</code>.", "Pregunta: on comença i on s'acaba el cos de la pàgina? Tot el que es veu va dins.|Pregunta: ¿dónde empieza y dónde termina el cuerpo de la página? Todo lo que se ve va dentro."],
      ["Posa els ingredients en una <code>&lt;ol&gt;</code> o els passos en una <code>&lt;ul&gt;</code>.|Pone los ingredientes en una <code>&lt;ol&gt;</code> o los pasos en una <code>&lt;ul&gt;</code>.", "La pregunta màgica: si canvio l'ordre, el resultat canvia?|La pregunta mágica: si cambio el orden, ¿el resultado cambia?"],
      ["Esborra els comentaris de la plantilla i després no sap què va a cada lloc.|Borra los comentarios de la plantilla y después no sabe qué va en cada sitio.", "No passa res: que es guiï per l'esbós, o que torni a obrir el pas per recuperar la plantilla i copiï la seva feina a dins.|No pasa nada: que se guíe por el boceto, o que vuelva a abrir el paso para recuperar la plantilla y copie su trabajo dentro."],
      ["Posa tota la recepta en negreta amb <code>&lt;strong&gt;</code>.|Pone toda la receta en negrita con <code>&lt;strong&gt;</code>.", "Pregunta: si ho llegís en veu alta, què diries amb més força? Només això va al strong.|Pregunta: si lo leyeras en voz alta, ¿qué dirías con más fuerza? Solo eso va en el strong."]
    ],
    diff: {
      mes: "Afegir a la recepta una llista niuada (els ingredients agrupats), un tercer <code>&lt;h2&gt;</code> amb consells o variants i un <code>&lt;em&gt;</code> que canviï el sentit d'una frase. Després, ajudar un company/a amb preguntes.|Añadir a la receta una lista anidada (los ingredientes agrupados), un tercer <code>&lt;h2&gt;</code> con consejos o variantes y un <code>&lt;em&gt;</code> que cambie el sentido de una frase. Después, ayudar a un compañero/a con preguntas.",
      menys: "Fer una recepta curta (3 ingredients i 3 passos), amb l'esbós al costat i fent servir els botons de sota l'editor. Es pot partir de la recepta d'en Bit i canviar-ne el contingut.|Hacer una receta corta (3 ingredientes y 3 pasos), con el boceto al lado y usando los botones de debajo del editor. Se puede partir de la receta de Bit y cambiar su contenido."
    },
    aval: {
      ticket: ["Quina etiqueta has fet servir per als passos i per què?|¿Qué etiqueta has usado para los pasos y por qué?", "Digues una cosa que has millorat després de la revisió del company/a.|Di una cosa que has mejorado después de la revisión del compañero/a."],
      rubric: [
        ['Estructura|Estructura', "Esquelet complet, títols en ordre i cada part amb l'etiqueta que li toca.|Esqueleto completo, títulos en orden y cada parte con la etiqueta que le toca.", "La pàgina funciona, però alguna part no té l'etiqueta adequada o falta lang/title.|La página funciona, pero alguna parte no tiene la etiqueta adecuada o falta lang/title."],
        ['Llistes i sentit|Listas y sentido', 'Ingredients en ul, passos en ol i strong/em on de veritat calen.|Ingredientes en ul, pasos en ol y strong/em donde de verdad hacen falta.', 'Fa les llistes, però confon ul i ol o abusa del strong.|Hace las listas, pero confunde ul y ol o abusa del strong.'],
        ['Planificar i revisar|Planificar y revisar', "Segueix l'esbós, revisa la pàgina i en millora alguna cosa amb els comentaris rebuts.|Sigue el boceto, revisa la página y mejora algo con los comentarios recibidos.", "Fa l'esbós o la revisió, però no els fa servir per millorar.|Hace el boceto o la revisión, pero no los usa para mejorar."]
      ]
    },
    casa: "A casa, ensenyeu la recepta a la família amb el mòbil i pregunteu-los si l'entenen. Si us en diuen una altra de família, podeu fer-ne una segona pàgina a la sessió del projecte.|En casa, enseñad la receta a la familia con el móvil y preguntadles si la entienden. Si os dicen otra de familia, podéis hacer una segunda página en la sesión del proyecto.",
    slides: [
      { id: 's1', k: 'portada', t: 'Projecte: la recepta|Proyecto: la receta', x: "Avui publicareu la vostra recepta al receptari del poble.|Hoy publicaréis vuestra receta en el recetario del pueblo.",
        nota: "Recorda el camí de la unitat: etiquetes, títols, llistes… i ara, tot junt.|Recuerda el camino de la unidad: etiquetas, títulos, listas… y ahora, todo junto." },
      { id: 's2', k: 'repas', t: 'Recordem: llistes|Recordamos: listas', punts: ['Ingredients: <code>&lt;ul&gt;</code> o <code>&lt;ol&gt;</code>?|Ingredientes: ¿<code>&lt;ul&gt;</code> u <code>&lt;ol&gt;</code>?', 'Passos: <code>&lt;ul&gt;</code> o <code>&lt;ol&gt;</code>?|Pasos: ¿<code>&lt;ul&gt;</code> u <code>&lt;ol&gt;</code>?', 'On va la llista de dins?|¿Dónde va la lista de dentro?'],
        nota: "Respostes: ul; ol; dins del li, abans del &lt;/li&gt;.|Respuestas: ul; ol; dentro del li, antes del &lt;/li&gt;." },
      { id: 's3', k: 'anim', t: "Les parts d'una recepta|Las partes de una receta", anim: 'w2recipe', x: 'Cada part, amb la seva etiqueta.|Cada parte, con su etiqueta.',
        nota: "Pregunta abans de mostrar-ho: quina etiqueta li posaríeu al nom de la recepta? I als passos?|Pregunta antes de mostrarlo: ¿qué etiqueta le pondríais al nombre de la receta? ¿Y a los pasos?" },
      { id: 's4', k: 'concepte', t: "Primer, l'esbós|Primero, el boceto", pic: 'img/ment/lli.webp',
        punts: ['Dibuixa la pàgina amb caixes.|Dibuja la página con cajas.', "Escriu l'etiqueta al costat de cada caixa.|Escribe la etiqueta al lado de cada caja.", 'Apunta ingredients i passos.|Apunta ingredientes y pasos.'],
        nota: "Explica que els desenvolupadors web també planifiquen en paper abans de programar.|Explica que los desarrolladores web también planifican en papel antes de programar." },
      { id: 's5', k: 'media', t: 'Notes que no surten: els comentaris|Notas que no salen: los comentarios', x: "Entre &lt;!-- i --&gt;: el navegador no ho mostra.|Entre &lt;!-- y --&gt;: el navegador no lo muestra.",
        media: { k: 'web', get html() { return L('<!-- Això és una nota: no surt -->\n<h1>Batut de plàtan</h1>\n<!-- Aquí aniran els ingredients -->\n<p>Fresc i ràpid.</p>', '<!-- Esto es una nota: no sale -->\n<h1>Batido de plátano</h1>\n<!-- Aquí irán los ingredientes -->\n<p>Fresco y rápido.</p>'); } },
        nota: "La plantilla del projecte té comentaris que diuen què va a cada lloc: que no els esborrin fins que acabin.|La plantilla del proyecto tiene comentarios que dicen qué va en cada sitio: que no los borren hasta que terminen." },
      { id: 's6', k: 'anim', t: 'strong i em, quan toca|strong y em, cuando toca', anim: 'w2strong', x: "strong: un avís important. em: la paraula que diries amb més força.|strong: un aviso importante. em: la palabra que dirías con más fuerza.",
        nota: "Llegeix les dues frases de l'em en veu alta: canvia el sentit! Si tot és important, res no ho és.|Lee las dos frases del em en voz alta: ¡cambia el sentido! Si todo es importante, nada lo es." },
      { id: 's7', k: 'media', t: "La recepta d'en Bit|La receta de Bit", x: 'Una recepta curta, sencera.|Una receta corta, entera.',
        media: { k: 'web', get html() { return L('<h1>Batut de plàtan</h1>\n<p>Fresc i ràpid.</p>\n<h2>Ingredients</h2>\n<ul>\n  <li>1 plàtan</li>\n  <li>1 got de llet</li>\n</ul>\n<h2>Passos</h2>\n<ol>\n  <li>Pela el plàtan.</li>\n  <li>Bat-ho tot.</li>\n</ol>', '<h1>Batido de plátano</h1>\n<p>Fresco y rápido.</p>\n<h2>Ingredientes</h2>\n<ul>\n  <li>1 plátano</li>\n  <li>1 vaso de leche</li>\n</ul>\n<h2>Pasos</h2>\n<ol>\n  <li>Pela el plátano.</li>\n  <li>Bátelo todo.</li>\n</ol>'); } },
        nota: "Fes que identifiquin cada part al codi i al resultat. La seva serà més llarga i completa.|Haz que identifiquen cada parte en el código y en el resultado. La suya será más larga y completa." },
      { id: 's8', k: 'activitat', t: "L'esbós de la recepta|El boceto de la receta", timer: 10,
        punts: ['Tria la recepta.|Elige la receta.', "Dibuixa la pàgina i escriu l'etiqueta de cada part.|Dibuja la página y escribe la etiqueta de cada parte.", 'Apunta 3 o més ingredients i passos, i l\'avís important.|Apunta 3 o más ingredientes y pasos, y el aviso importante.', "Explica-ho al company/a: hi falta res?|Explícaselo al compañero/a: ¿falta algo?"],
        nota: "Qui no tingui recepta pot fer-ne una d'inventada o fer servir la que has preparat.|Quien no tenga receta puede hacer una inventada o usar la que has preparado." },
      { id: 's9', k: 'activitat', t: 'Com es dona un bon comentari|Cómo se da un buen comentario',
        punts: ["Una cosa que t'agrada, concreta.|Una cosa que te gusta, concreta.", 'Una pregunta o una idea per millorar.|Una pregunta o una idea para mejorar.', 'Sempre amb respecte: parlem de la pàgina, no de la persona.|Siempre con respeto: hablamos de la página, no de la persona.'],
        nota: "Modela un exemple en veu alta amb l'esbós d'un voluntari/ària.|Modela un ejemplo en voz alta con el boceto de un voluntario/a." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12,
        punts: ['Obre la sessió «Projecte: la recepta».|Abre la sesión «Proyecto: la receta».', 'Fes «Recorda», la missió i «Descobreix».|Haz «Recuerda», la misión y «Descubre».', "Fes els tres trossos de la recepta d'en Bit.|Haz los tres trozos de la receta de Bit.", 'Para quan arribis a «Ara, la teva!».|Para cuando llegues a «¡Ahora, la tuya!».'],
        nota: "Al pas «L'esbós de la recepta», que toquin «Ho hem fet!».|En el paso «El boceto de la receta», que toquen «¡Lo hemos hecho!»." },
      { id: 's11', k: 'repte', t: "La recepta d'en Bit, a trossos|La receta de Bit, a trozos",
        punts: ["1. L'esquelet, el nom i la presentació|1. El esqueleto, el nombre y la presentación", '2. Els ingredients (h2 + ul)|2. Los ingredientes (h2 + ul)', '3. Els passos (h2 + ol) amb un avís strong|3. Los pasos (h2 + ol) con un aviso strong'],
        nota: "Si algú s'encalla, que miri on és el &lt;/body&gt;: el codi nou va just abans.|Si alguien se atasca, que mire dónde está el &lt;/body&gt;: el código nuevo va justo antes." },
      { id: 's12', k: 'activitat', t: 'Crea: la meva recepta|Crea: mi receta', timer: 15,
        punts: ["Segueix l'esbós i els comentaris de la plantilla.|Sigue el boceto y los comentarios de la plantilla.", 'Posa totes les comprovacions en verd.|Pon todas las comprobaciones en verde.', 'Mira-la al mòbil 📱 i a l\'ordinador 💻.|Mírala en el móvil 📱 y en el ordenador 💻.', 'Revisió en parella i, si cal, millora-la.|Revisión en pareja y, si hace falta, mejórala.'],
        nota: "Passeja i pregunta per l'esquema: llegeix-me només els títols. Es desa a «Projectes» quan totes les comprovacions estan en verd.|Pasea y pregunta por el esquema: léeme solo los títulos. Se guarda en «Proyectos» cuando todas las comprobaciones están en verde." },
      { id: 's13', k: 'concepte', t: 'Revisa com un/a professional|Revisa como un/a profesional', pic: 'img/ment/sin.webp',
        punts: ['Llegeix-la en veu alta: hi ha faltes?|Léela en voz alta: ¿hay faltas?', "Llegeix només els títols: s'entén l'esquema?|Lee solo los títulos: ¿se entiende el esquema?", 'Al mòbil, es llegeix bé?|En el móvil, ¿se lee bien?', 'Un company/a entén com es fa?|¿Un compañero/a entiende cómo se hace?'],
        nota: "Deixa-la projectada mentre fan la revisió en parelles amb la fitxa.|Déjala proyectada mientras hacen la revisión por parejas con la ficha." },
      { id: 's14', k: 'activitat', t: 'Galeria del receptari|Galería del recetario',
        punts: ['Ensenyem unes quantes receptes.|Enseñamos algunas recetas.', "Cada autor/a diu què li ha costat més.|Cada autor/a dice qué le ha costado más.", 'La resta diu una cosa que li agrada, concreta.|Los demás dicen una cosa que les gusta, concreta.'],
        nota: "Projecta només les receptes dels qui ho vulguin. Celebra la varietat: hi ha receptes de moltes famílies!|Proyecta solo las recetas de quienes quieran. Celebra la variedad: ¡hay recetas de muchas familias!" },
      { id: 's15', k: 'resum', t: 'Què hem après a la unitat|Qué hemos aprendido en la unidad',
        punts: ["Les etiquetes s'obren i es tanquen, i es niuen en ordre.|Las etiquetas se abren y se cierran, y se anidan en orden.", "Una pàgina té esquelet, títols en ordre, paràgrafs i llistes.|Una página tiene esqueleto, títulos en orden, párrafos y listas.", 'Primer es planifica, després es fa el codi i al final es revisa.|Primero se planifica, después se hace el código y al final se revisa.'],
        nota: "Anuncia la unitat següent: imatges i enllaços, per connectar les receptes entre elles.|Anuncia la unidad siguiente: imágenes y enlaces, para conectar las recetas entre ellas." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida',
        punts: ['Quina etiqueta has fet servir per als passos i per què?|¿Qué etiqueta has usado para los pasos y por qué?', "Una cosa que has millorat gràcies a la revisió.|Una cosa que has mejorado gracias a la revisión."],
        nota: "Anota qui no ha pogut acabar: pot fer-ho a casa amb el mòbil o al principi de la sessió següent.|Anota quién no ha podido terminar: puede hacerlo en casa con el móvil o al principio de la sesión siguiente." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: l'esbós de la recepta|Ficha: el boceto de la receta", k: 'fitxa',
        intro: "Planifica la teva recepta abans d'escriure el codi.|Planifica tu receta antes de escribir el código.",
        items: [
          { q: 'Com es diu la teva recepta? (serà el <code>&lt;h1&gt;</code> i el <code>&lt;title&gt;</code>)|¿Cómo se llama tu receta? (será el <code>&lt;h1&gt;</code> y el <code>&lt;title&gt;</code>)', sol: 'Resposta oberta.|Respuesta abierta.' },
          { q: 'Escriu una frase de presentació (serà el primer <code>&lt;p&gt;</code>).|Escribe una frase de presentación (será el primer <code>&lt;p&gt;</code>).', sol: 'Resposta oberta.|Respuesta abierta.' },
          { q: 'Ingredients (almenys 3). Seran una <code>&lt;ul&gt;</code> o una <code>&lt;ol&gt;</code>? Per què?|Ingredientes (al menos 3). ¿Serán una <code>&lt;ul&gt;</code> o una <code>&lt;ol&gt;</code>? ¿Por qué?', big: true, sol: "Una ul: l'ordre dels ingredients no importa.|Una ul: el orden de los ingredientes no importa." },
          { q: 'Passos (almenys 3). Marca amb una estrella el pas que tindrà un avís important.|Pasos (al menos 3). Marca con una estrella el paso que tendrá un aviso importante.', big: true, sol: "Una ol: l'ordre dels passos importa. L'avís va dins d'un strong.|Una ol: el orden de los pasos importa. El aviso va dentro de un strong." },
          { q: "Dibuixa l'esbós de la pàgina amb caixes i escriu l'etiqueta al costat de cada una.|Dibuja el boceto de la página con cajas y escribe la etiqueta al lado de cada una.", big: true, sol: 'h1, p, h2 + ul, h2 + ol, p (consell).|h1, p, h2 + ul, h2 + ol, p (consejo).' }
        ] },
      { id: 'p2', t: 'Fitxa: revisió entre companys|Ficha: revisión entre compañeros', k: 'fitxa',
        intro: "Mira la recepta del teu company/a a la seva pantalla i respon. Recorda: parlem de la pàgina, sempre amb respecte.|Mira la receta de tu compañero/a en su pantalla y responde. Recuerda: hablamos de la página, siempre con respeto.",
        items: [
          { q: "Llegeix només els títols. S'entén de què va la pàgina?|Lee solo los títulos. ¿Se entiende de qué va la página?", sol: 'Resposta oberta.|Respuesta abierta.' },
          { q: 'Els ingredients són en una llista amb pics i els passos, en una de numerada?|¿Los ingredientes están en una lista con viñetas y los pasos, en una numerada?', sol: 'Ingredients: ul. Passos: ol.|Ingredientes: ul. Pasos: ol.' },
          { q: "Hi ha alguna falta d'ortografia? Apunta-la.|¿Hay alguna falta de ortografía? Apúntala.", sol: 'Resposta oberta.|Respuesta abierta.' },
          { q: "Una cosa que t'agrada de la recepta, concreta.|Una cosa que te gusta de la receta, concreta.", sol: 'Resposta oberta.|Respuesta abierta.' },
          { q: 'Una idea per millorar-la.|Una idea para mejorarla.', sol: 'Resposta oberta.|Respuesta abierta.' }
        ] }
    ]
  }
});
