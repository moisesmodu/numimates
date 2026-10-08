/* Tech Web · unitat 5 «Caixes» · guia del professorat (w5-1 … w5-4). Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Tot és una caixa ---------- */
  'w5-1': {
    obj: [
      "L'alumne/a explica que cada element d'una pàgina web és una caixa rectangular i ho comprova pintant-ne el fons amb <code>background-color</code>.|El alumno/a explica que cada elemento de una página web es una caja rectangular y lo comprueba pintando su fondo con <code>background-color</code>.",
      "L'alumne/a fa servir un <code>&lt;div&gt;</code> amb una classe per agrupar un títol i un paràgraf en una sola caixa.|El alumno/a usa un <code>&lt;div&gt;</code> con una clase para agrupar un título y un párrafo en una sola caja.",
      "L'alumne/a anomena en ordre les quatre capes d'una caixa (contingut, padding, border i margin) amb l'exemple del quadre.|El alumno/a nombra en orden las cuatro capas de una caja (contenido, padding, border y margin) con el ejemplo del cuadro.",
      "L'alumne/a dona amplada a una caixa amb <code>width</code> en px i en %, i reconeix l'error d'oblidar la unitat.|El alumno/a da anchura a una caja con <code>width</code> en px y en %, y reconoce el error de olvidar la unidad."
    ],
    comp: [
      "Competència digital (CD3): crear i editar continguts digitals amb HTML i CSS|Competencia digital (CD3): crear y editar contenidos digitales con HTML y CSS",
      "Pensament computacional: descompondre una pàgina en caixes, una dins de l'altra|Pensamiento computacional: descomponer una página en cajas, una dentro de la otra",
      "Matemàtiques (mesura): píxels i percentatges, comparar mides fixes i relatives|Matemáticas (medida): píxeles y porcentajes, comparar tamaños fijos y relativos",
      "Comunicació oral: explicar un concepte nou amb una analogia de la vida diària|Comunicación oral: explicar un concepto nuevo con una analogía de la vida diaria"
    ],
    vocab: [
      ["Caixa|Caja", "El rectangle invisible on el navegador dibuixa cada element.|El rectángulo invisible donde el navegador dibuja cada elemento."],
      ["div|div", "Una etiqueta sense significat propi que serveix per agrupar altres caixes.|Una etiqueta sin significado propio que sirve para agrupar otras cajas."],
      ["background-color|background-color", "La propietat que pinta el fons de tota la caixa.|La propiedad que pinta el fondo de toda la caja."],
      ["width|width", "L'amplada d'una caixa, en píxels (px) o en percentatge (%).|La anchura de una caja, en píxeles (px) o en porcentaje (%)."],
      ["Píxel (px)|Píxel (px)", "Cadascun dels puntets de la pantalla; la unitat de mida més habitual a les webs.|Cada uno de los puntitos de la pantalla; la unidad de medida más habitual en las webs."],
      ["Capes de la caixa|Capas de la caja", "Contingut, padding, border i margin, de dins cap a fora.|Contenido, padding, border y margin, de dentro hacia fuera."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Tot és una caixa»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Todo es una caja»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per cada grup de 3: un full A3, retoladors de quatre colors i un paquet de targetes «Caixes i capes»|Por cada grupo de 3: una hoja A3, rotuladores de cuatro colores y un paquete de tarjetas «Cajas y capas»",
        "Si en teniu, un quadre o una foto amb marc i paspartú per ensenyar l'exemple|Si tenéis, un cuadro o una foto con marco y paspartú para enseñar el ejemplo"
      ],
      imprimir: ["Targetes: caixes i capes|Tarjetas: cajas y capas"],
      prep: [
        "Imprimir i retallar un paquet de targetes per grup. Es poden plastificar i fer servir a tota la unitat.|Imprimir y recortar un paquete de tarjetas por grupo. Se pueden plastificar y usar en toda la unidad.",
        "Dibuixar a la pissarra, abans de començar, el contorn d'una pàgina web buida (una finestra de navegador).|Dibujar en la pizarra, antes de empezar, el contorno de una página web vacía (una ventana de navegador).",
        "Obrir la diapositiva 13 i comprovar que els botons 📱 i 💻 de la vista prèvia es veuen bé al projector.|Abrir la diapositiva 13 y comprobar que los botones 📱 y 💻 de la vista previa se ven bien en el proyector."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: la Fira de Videojocs|Bienvenida: la Feria de Videojuegos", fase: 'inici',
        fa: "Repassa amb dues preguntes ràpides com s'escriu una regla de CSS i la diferència entre classe i id. Després presenta la missió de la unitat: la web de la Fira de Videojocs necessita una targeta per a cada videojoc, i cada alumne/a en dissenyarà una a la sessió 4.|Repasa con dos preguntas rápidas cómo se escribe una regla de CSS y la diferencia entre clase e id. Después presenta la misión de la unidad: la web de la Feria de Videojuegos necesita una tarjeta para cada videojuego, y cada alumno/a diseñará una en la sesión 4.",
        diu: ["Qui em diu les tres parts d'una regla de CSS?|¿Quién me dice las tres partes de una regla de CSS?",
          "Si vull el mateix estil per a deu paràgrafs, faig servir una classe o un id?|Si quiero el mismo estilo para diez párrafos, ¿uso una clase o un id?",
          "Aquesta unitat acabarà amb la targeta del vostre videojoc inventat. Aneu-hi pensant!|Esta unidad terminará con la tarjeta de vuestro videojuego inventado. ¡Id pensando!"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Tot és una caixa|Todo es una caja", fase: 'teoria',
        fa: "Explica que el navegador dibuixa cada element dins d'una caixa i fes-ho visible amb la demo del color de fons: la caixa del títol arriba fins a la dreta encara que el text sigui curt. Presenta el <code>&lt;div&gt;</code> com la caixa que agrupa (la capsa d'ous). Acaba amb les quatre capes i l'exemple del quadre; si tens un quadre real, ensenya'l i assenyala cada capa.|Explica que el navegador dibuja cada elemento dentro de una caja y hazlo visible con la demo del color de fondo: la caja del título llega hasta la derecha aunque el texto sea corto. Presenta el <code>&lt;div&gt;</code> como la caja que agrupa (la caja de huevos). Termina con las cuatro capas y el ejemplo del cuadro; si tienes un cuadro real, enséñalo y señala cada capa.",
        diu: ["Per què creieu que el fons groc arriba fins a la dreta, si la paraula és tan curta?|¿Por qué creéis que el fondo amarillo llega hasta la derecha, si la palabra es tan corta?",
          "El div no vol dir res per si sol: és una capsa per guardar-hi altres caixes.|El div no significa nada por sí solo: es una caja para guardar otras cajas.",
          "En aquest quadre, quina part seria el padding? I el margin?|En este cuadro, ¿qué parte sería el padding? ¿Y el margin?",
          "Quantes caixes hi ha en aquest codi? Compteu-les abans que us ho digui.|¿Cuántas cajas hay en este código? Contadlas antes de que os lo diga."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Raigs X: caixes dins de caixes|Rayos X: cajas dentro de cajas", fase: 'desconnectat',
        fa: "Fes grups de 3. Cada grup dibuixa a l'A3 la pàgina de la fira que hi ha projectada, però només amb rectangles: un rectangle gran per a la targeta i, a dins, els rectangles del títol, la imatge i el paràgraf. Després col·loquen les targetes d'etiquetes a sobre de cada rectangle. A la segona part, trien una caixa i hi dibuixen les quatre capes amb quatre colors, amb les targetes «Contingut», «Padding», «Border» i «Margin».|Haz grupos de 3. Cada grupo dibuja en el A3 la página de la feria que está proyectada, pero solo con rectángulos: un rectángulo grande para la tarjeta y, dentro, los rectángulos del título, la imagen y el párrafo. Después colocan las tarjetas de etiquetas encima de cada rectángulo. En la segunda parte, eligen una caja y dibujan en ella las cuatro capas con cuatro colores, con las tarjetas «Contenido», «Padding», «Border» y «Margin».",
        diu: ["Si moc la targeta gran, què passa amb les caixes de dins?|Si muevo la tarjeta grande, ¿qué pasa con las cajas de dentro?",
          "On comença i on acaba el div? Assenyaleu el rectangle.|¿Dónde empieza y dónde termina el div? Señalad el rectángulo.",
          "Ordeneu les capes de dins cap a fora. Quina va primer?|Ordenad las capas de dentro hacia fuera. ¿Cuál va primero?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3|Grupos de 3" },
      { min: 14, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança fins a la pausa activa. Al pas «Caça caixes a casa», que toquin «Ara no»: és per fer-lo a casa. Als dos primers reptes, fixa't que escriguin <code>background-color</code> sencer i que tanquin el <code>&lt;/div&gt;</code> al lloc correcte.|Cada alumno/a abre la sesión y avanza hasta la pausa activa. En el paso «Caza cajas en casa», que toquen «Ahora no»: es para hacerlo en casa. En los dos primeros retos, fíjate en que escriban <code>background-color</code> entero y que cierren el <code>&lt;/div&gt;</code> en el lugar correcto.",
        diu: ["Abans de mirar la vista prèvia, digues on creus que arribarà el color de fons.|Antes de mirar la vista previa, di hasta dónde crees que llegará el color de fondo.",
          "Mira la llista de comprovacions: quina et falta?|Mira la lista de comprobaciones: ¿cuál te falta?",
          "On has de posar el &lt;/div&gt; perquè el paràgraf quedi a dins?|¿Dónde tienes que poner el &lt;/div&gt; para que el párrafo quede dentro?"],
        slides: ['s12'], app: "De «Recorda» fins a la pausa activa: les preguntes de repàs, la missió, les targetes de «Descobreix», ordenar les capes, «Caça caixes a casa» (per a casa), la vista prèvia del paràgraf i els reptes «Fes visibles les caixes» i «Dins d'una caixa».|De «Recuerda» hasta la pausa activa: las preguntas de repaso, la misión, las tarjetas de «Descubre», ordenar las capas, «Caza cajas en casa» (para casa), la vista previa del párrafo y los retos «Haz visibles las cajas» y «Dentro de una caja».", org: "Individual|Individual" },
      { min: 10, t: "Amplades i errors|Anchuras y errores", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després explica <code>width</code> amb la demo: fes clic a 📱 i a 💻 perquè vegin que la caixa en % canvia i la de px, no. Remarca l'error de la unitat i deixa que facin els reptes d'amplada i els dos «Troba l'error».|Haced la pausa activa todos juntos. Después explica <code>width</code> con la demo: haz clic en 📱 y en 💻 para que vean que la caja en % cambia y la de px, no. Remarca el error de la unidad y deja que hagan los retos de anchura y los dos «Encuentra el error».",
        diu: ["Què passarà amb la caixa del 50 % si la pantalla es fa més petita?|¿Qué pasará con la caja del 50 % si la pantalla se hace más pequeña?",
          "El navegador no avisa dels errors de CSS: simplement no fa cas de la línia.|El navegador no avisa de los errores de CSS: simplemente no hace caso de la línea.",
          "A l'error del div, llegiu la línia 4 a poc a poc. Què hi falta?|En el error del div, leed la línea 4 despacio. ¿Qué falta?"],
        slides: ['s13', 's14', 's15'], app: "Pausa activa, les targetes de width, els reptes «La targeta del Drac Volador» i «Inscripcions obertes» i els dos «Troba l'error».|Pausa activa, las tarjetas de width, los retos «La tarjeta del Drac Volador» e «Inscripciones abiertas» y los dos «Encuentra el error».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el cartell de la fira|Crea: el cartel de la feria", fase: 'crea',
        fa: "Cada alumne/a fa el cartell de la fira amb el seu text i els seus colors. Qui acabi aviat pot afegir-hi una imatge amb alt. Quan el desin, demana a dos o tres alumnes que el mostrin al projector.|Cada alumno/a hace el cartel de la feria con su texto y sus colores. Quien termine pronto puede añadir una imagen con alt. Cuando lo guarden, pide a dos o tres alumnos que lo muestren en el proyector.",
        diu: ["El text és vostre: quin dia és la fira? On es fa?|El texto es vuestro: ¿qué día es la feria? ¿Dónde se hace?",
          "Mireu el cartell al mòbil i a l'ordinador: hi cap bé als dos?|Mirad el cartel en el móvil y en el ordenador: ¿cabe bien en los dos?"],
        slides: ['s16'], app: "Pas «Crea»: El cartell de la fira.|Paso «Crea»: El cartel de la feria.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió. Deixa que responguin les dues preguntes finals de l'app i fes a cada alumne/a una pregunta del tiquet a la porta.|Repasa las tres ideas de la sesión. Deja que respondan las dos preguntas finales de la app y haz a cada alumno/a una pregunta del ticket en la puerta.",
        diu: ["Digueu-me les quatre capes, de dins cap a fora.|Decidme las cuatro capas, de dentro hacia fuera.",
          "Què li passa a <code>width: 300;</code>?|¿Qué le pasa a <code>width: 300;</code>?"],
        slides: ['s17', 's18'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu <code>background color</code> amb un espai, o <code>backgroundcolor</code> tot junt.|Escribe <code>background color</code> con un espacio, o <code>backgroundcolor</code> todo junto.",
        "Pregunta-li com s'escriuen les propietats de dues paraules que ja coneix, com <code>font-size</code>. Que trobi ell/a mateix/a el guió.|Pregúntale cómo se escriben las propiedades de dos palabras que ya conoce, como <code>font-size</code>. Que encuentre él/ella mismo/a el guion."],
      ["Obre el <code>&lt;div&gt;</code> però el tanca just després del títol i el paràgraf queda fora.|Abre el <code>&lt;div&gt;</code> pero lo cierra justo después del título y el párrafo queda fuera.",
        "Demana-li que posi el dit al <code>&lt;div&gt;</code> i el baixi fins al <code>&lt;/div&gt;</code>: què queda entre els dos dits? Mireu junts la comprovació que no es marca.|Pídele que ponga el dedo en el <code>&lt;div&gt;</code> y lo baje hasta el <code>&lt;/div&gt;</code>: ¿qué queda entre los dos dedos? Mirad juntos la comprobación que no se marca."],
      ["Escriu <code>width: 200;</code> o <code>width: 200 px;</code> i no entén per què no canvia res.|Escribe <code>width: 200;</code> o <code>width: 200 px;</code> y no entiende por qué no cambia nada.",
        "Pregunta-li: 200 què? Centímetres? Píxels? Que compari la seva línia amb la de la demo de la diapositiva 14.|Pregúntale: ¿200 qué? ¿Centímetros? ¿Píxeles? Que compare su línea con la de la demo de la diapositiva 14."],
      ["Oblida el punt al selector i escriu <code>targeta { … }</code> en lloc de <code>.targeta { … }</code>.|Olvida el punto en el selector y escribe <code>targeta { … }</code> en lugar de <code>.targeta { … }</code>.",
        "Recorda-li la unitat anterior: com sap el CSS que «targeta» és una classe i no una etiqueta?|Recuérdale la unidad anterior: ¿cómo sabe el CSS que «targeta» es una clase y no una etiqueta?"],
      ["Fa servir <code>&lt;div&gt;</code> per a tot, també per als títols.|Usa <code>&lt;div&gt;</code> para todo, también para los títulos.",
        "Pregunta-li com sabria un lector de pantalla que allò és un títol. El div només agrupa; cada cosa té la seva etiqueta.|Pregúntale cómo sabría un lector de pantalla que eso es un título. El div solo agrupa; cada cosa tiene su etiqueta."]
    ],
    diff: {
      mes: "Fer dos cartells, un amb width en px i l'altre en %, i explicar quin queda millor al mòbil i per què. També poden afegir una imatge amb alt a cada cartell.|Hacer dos carteles, uno con width en px y el otro en %, y explicar cuál queda mejor en el móvil y por qué. También pueden añadir una imagen con alt a cada cartel.",
      menys: "Treballar amb la solució d'un repte anterior al costat: copiar l'estructura del <code>&lt;div&gt;</code> i canviar només el text i el color. Fer servir els botons de fragments de sota l'editor per no haver d'escriure les etiquetes.|Trabajar con la solución de un reto anterior al lado: copiar la estructura del <code>&lt;div&gt;</code> y cambiar solo el texto y el color. Usar los botones de fragmentos de debajo del editor para no tener que escribir las etiquetas."
    },
    aval: {
      ticket: ["Digues les quatre capes d'una caixa, de dins cap a fora.|Di las cuatro capas de una caja, de dentro hacia fuera.",
        "Per què <code>width: 300;</code> no fa res?|¿Por qué <code>width: 300;</code> no hace nada?"],
      rubric: [
        ["Tot és una caixa|Todo es una caja", "Explica que cada element és una caixa i ho demostra amb <code>background-color</code>.|Explica que cada elemento es una caja y lo demuestra con <code>background-color</code>.", "Pinta el fons d'algun element, però no relaciona el color amb la caixa.|Pinta el fondo de algún elemento, pero no relaciona el color con la caja."],
        ["Agrupar amb div|Agrupar con div", "Fa un <code>&lt;div&gt;</code> amb classe que conté el títol i el paràgraf, ben tancat.|Hace un <code>&lt;div&gt;</code> con clase que contiene el título y el párrafo, bien cerrado.", "Fa el <code>&lt;div&gt;</code>, però el tanca al lloc equivocat o oblida la classe.|Hace el <code>&lt;div&gt;</code>, pero lo cierra en el lugar equivocado u olvida la clase."],
        ["Amplada|Anchura", "Fa servir <code>width</code> amb px i amb %, i explica la diferència.|Usa <code>width</code> con px y con %, y explica la diferencia.", "Posa <code>width</code>, però de vegades sense unitat.|Pone <code>width</code>, pero a veces sin unidad."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer l'activitat «Caça caixes a casa»: buscar un quadre o una foto amb marc, dibuixar-lo i pintar-ne les quatre capes.|En casa, con el móvil, podéis repetir la sesión y hacer la actividad «Caza cajas en casa»: buscar un cuadro o una foto con marco, dibujarlo y pintar sus cuatro capas.",
    slides: [
      { id: 's1', k: 'portada', t: "Tot és una caixa|Todo es una caja", x: "Avui descobrirem el secret de totes les pàgines web: estan fetes de caixes.|Hoy descubriremos el secreto de todas las páginas web: están hechas de cajas.",
        nota: "Presenta l'objectiu: avui veuran les caixes invisibles de les webs i en faran de pròpies.|Presenta el objetivo: hoy verán las cajas invisibles de las webs y harán las suyas propias." },
      { id: 's2', k: 'repas', t: "Recordem el CSS|Recordemos el CSS", code: `h1 {\n  color: blue;\n}\n.destacat {\n  font-size: 20px;\n}`,
        punts: ["Selector: a qui va dirigida la regla.|Selector: a quién va dirigida la regla.", "Dins les claus: <code>propietat: valor;</code>|Dentro de las llaves: <code>propiedad: valor;</code>", "Amb un punt, una classe (es pot repetir).|Con un punto, una clase (se puede repetir)."],
        nota: "Pregunta qui recorda per a què serveix el punt de <code>.destacat</code>. Avui les classes seran les protagonistes.|Pregunta quién recuerda para qué sirve el punto de <code>.destacat</code>. Hoy las clases serán las protagonistas." },
      { id: 's3', k: 'concepte', t: "La Fira de Videojocs|La Feria de Videojuegos", punts: ["L'escola organitza una fira per presentar els videojocs dels equips.|La escuela organiza una feria para presentar los videojuegos de los equipos.", "La web de la fira tindrà una targeta per a cada videojoc.|La web de la feria tendrá una tarjeta para cada videojuego.", "A la sessió 4, cadascú farà la targeta del seu videojoc inventat.|En la sesión 4, cada uno hará la tarjeta de su videojuego inventado."],
        nota: "Motiva la unitat: pregunta quin videojoc s'inventarien si en poguessin crear un. Que ho guardin per a la sessió 4.|Motiva la unidad: pregunta qué videojuego se inventarían si pudieran crear uno. Que lo guarden para la sesión 4." },
      { id: 's4', k: 'anim', t: "Tot és una caixa|Todo es una caja", anim: 'w5box', x: "Cada element de la pàgina viu dins d'una caixa rectangular.|Cada elemento de la página vive dentro de una caja rectangular.",
        nota: "Fes notar que les caixes dels títols i els paràgrafs ocupen tota la fila, i la de la imatge, només el que fa la imatge.|Haz notar que las cajas de los títulos y los párrafos ocupan toda la fila, y la de la imagen, solo lo que mide la imagen." },
      { id: 's5', k: 'media', t: "Un color de fons per veure-les|Un color de fondo para verlas", x: "<code>background-color</code> pinta tota la caixa.|<code>background-color</code> pinta toda la caja.",
        media: { k: 'web', html: `<h1>Fira de Videojocs</h1>\n<p>Vine a provar els videojocs de l'escola!</p>`, css: `h1 {\n  background-color: gold;\n}\np {\n  background-color: lightblue;\n}` },
        nota: "Pregunta per què el groc arriba fins a la dreta si «Fira de Videojocs» és curt. Resposta: la caixa del títol ocupa tota la fila.|Pregunta por qué el amarillo llega hasta la derecha si «Fira de Videojocs» es corto. Respuesta: la caja del título ocupa toda la fila." },
      { id: 's6', k: 'media', t: "La caixa per agrupar: div|La caja para agrupar: div", x: "Un <code>&lt;div&gt;</code> amb una classe agrupa el títol i el text.|Un <code>&lt;div&gt;</code> con una clase agrupa el título y el texto.",
        media: { k: 'web', html: `<div class="targeta">\n  <h2>Drac Volador</h2>\n  <p>Un videojoc de dracs i núvols.</p>\n</div>`, css: `.targeta {\n  background-color: #FFE9C7;\n}` },
        nota: "Compara-ho amb una capsa d'ous: el div és la capsa i el títol i el paràgraf són els ous. Remarca que el div no substitueix el h2 ni el p.|Compáralo con una caja de huevos: el div es la caja y el título y el párrafo son los huevos. Remarca que el div no sustituye al h2 ni al p." },
      { id: 's7', k: 'anim', t: "Les quatre capes|Las cuatro capas", anim: 'w5layers', x: "Contingut, padding, border i margin.|Contenido, padding, border y margin.",
        nota: "Digues els noms en veu alta i fes que el grup els repeteixi de dins cap a fora. A les sessions 2 i 3 les treballarem una a una.|Di los nombres en voz alta y haz que el grupo los repita de dentro hacia fuera. En las sesiones 2 y 3 las trabajaremos una a una." },
      { id: 's8', k: 'anim', t: "Com un quadre a la paret|Como un cuadro en la pared", anim: 'w5frame', x: "La pintura, el paspartú, el marc i l'aire de la paret.|La pintura, el paspartú, el marco y el aire de la pared.",
        nota: "Si tens un quadre o una foto amb marc, ensenya'l i assenyala cada capa. Pregunta: si pengem dos quadres, què els separa?|Si tienes un cuadro o una foto con marco, enséñalo y señala cada capa. Pregunta: si colgamos dos cuadros, ¿qué los separa?" },
      { id: 's9', k: 'pregunta', t: "Quantes caixes hi ha?|¿Cuántas cajas hay?", code: `<div class="targeta">\n  <h2>Drac Volador</h2>\n  <p>Vola entre núvols.</p>\n</div>`,
        nota: "Resposta: tres caixes (el div, el h2 i el p). El div és la caixa gran que conté les altres dues.|Respuesta: tres cajas (el div, el h2 y el p). El div es la caja grande que contiene las otras dos." },
      { id: 's10', k: 'activitat', t: "Raigs X: caixes dins de caixes|Rayos X: cajas dentro de cajas", timer: 11, punts: ["Dibuixeu la pàgina de la fira a l'A3 només amb rectangles.|Dibujad la página de la feria en el A3 solo con rectángulos.", "Un rectangle gran per a la targeta; a dins, el títol, la imatge i el text.|Un rectángulo grande para la tarjeta; dentro, el título, la imagen y el texto.", "Poseu a sobre de cada rectangle la targeta de la seva etiqueta.|Poned encima de cada rectángulo la tarjeta de su etiqueta.", "Tots tres heu de saber explicar on comença i on acaba cada caixa.|Los tres tenéis que saber explicar dónde empieza y dónde termina cada caja."],
        nota: "Torna a projectar la diapositiva 6 mentre dibuixen. Passa pels grups i fes moure la targeta gran: les caixes de dins s'han de moure amb ella.|Vuelve a proyectar la diapositiva 6 mientras dibujan. Pasa por los grupos y haz mover la tarjeta grande: las cajas de dentro tienen que moverse con ella." },
      { id: 's11', k: 'activitat', t: "Les capes de la caixa|Las capas de la caja", punts: ["Trieu una de les caixes del vostre dibuix.|Elegid una de las cajas de vuestro dibujo.", "Pinteu-hi les quatre capes amb quatre colors.|Pintad las cuatro capas con cuatro colores.", "Poseu-hi les targetes Contingut, Padding, Border i Margin.|Poned las tarjetas Contenido, Padding, Border y Margin."],
        nota: "Comprova que el margin quedi fora de la vora i el padding, dins. És l'error més habitual.|Comprueba que el margin quede fuera del borde y el padding, dentro. Es el error más habitual." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 14, punts: ["Obre la sessió «Tot és una caixa».|Abre la sesión «Todo es una caja».", "Fes la missió, «Descobreix» i ordena les capes.|Haz la misión, «Descubre» y ordena las capas.", "«Caça caixes a casa»: toca «Ara no», és per a casa.|«Caza cajas en casa»: toca «Ahora no», es para casa.", "Para quan arribis a la pausa activa.|Para cuando llegues a la pausa activa."],
        nota: "Als reptes, insisteix que mirin la llista de comprovacions: diu exactament què falta.|En los retos, insiste en que miren la lista de comprobaciones: dice exactamente qué falta." },
      { id: 's13', k: 'media', t: "Quant ocupa? width|¿Cuánto ocupa? width", x: "En px, sempre igual; en %, depèn de l'espai.|En px, siempre igual; en %, depende del espacio.",
        media: { k: 'web', html: `<div class="petita">width: 160px</div>\n<div class="meitat">width: 50%</div>`, css: `.petita {\n  background-color: gold;\n  width: 160px;\n}\n.meitat {\n  background-color: lightblue;\n  width: 50%;\n}` },
        nota: "Si la demo ho permet, canvia entre 📱 i 💻. Si no, fes-ho amb les mans: la caixa del 50 % sempre és la meitat de l'espai que té.|Si la demo lo permite, cambia entre 📱 y 💻. Si no, hazlo con las manos: la caja del 50 % siempre es la mitad del espacio que tiene." },
      { id: 's14', k: 'concepte', t: "Compte: sempre amb la unitat|Cuidado: siempre con la unidad", code: `width: 200;     ✗\nwidth: 200 px;  ✗\nwidth: 200px;   ✓\nwidth: 50%;     ✓`,
        punts: ["Sense unitat, el navegador ignora la línia.|Sin unidad, el navegador ignora la línea.", "El número i la unitat van junts, sense espai.|El número y la unidad van juntos, sin espacio.", "El navegador no avisa: has de mirar la vista prèvia.|El navegador no avisa: tienes que mirar la vista previa."],
        nota: "Explica que el CSS és molt tolerant: quan no entén una línia, la salta sense dir res. Per això cal mirar sempre el resultat.|Explica que el CSS es muy tolerante: cuando no entiende una línea, la salta sin decir nada. Por eso hay que mirar siempre el resultado." },
      { id: 's15', k: 'repte', t: "Reptes: amplades i errors|Retos: anchuras y errores", timer: 10, punts: ["1. La targeta del Drac Volador (px)|1. La tarjeta del Drac Volador (px)", "2. L'avís que ocupa el 80 %|2. El aviso que ocupa el 80 %", "3. Troba l'error: la targeta massa ampla|3. Encuentra el error: la tarjeta demasiado ancha", "4. Troba l'error: el div que no es tanca|4. Encuentra el error: el div que no se cierra"],
        nota: "A l'últim error, si s'encallen, pregunta quina diferència hi ha entre <code>&lt;div&gt;</code> i <code>&lt;/div&gt;</code>.|En el último error, si se atascan, pregunta qué diferencia hay entre <code>&lt;div&gt;</code> y <code>&lt;/div&gt;</code>." },
      { id: 's16', k: 'activitat', t: "Crea: el cartell de la fira|Crea: el cartel de la feria", timer: 5, punts: ["Una caixa <code>div</code> amb la classe <code>cartell</code>.|Una caja <code>div</code> con la clase <code>cartell</code>.", "A dins, un títol i un text.|Dentro, un título y un texto.", "Color de fons i amplada.|Color de fondo y anchura.", "Extra: una imatge amb alt.|Extra: una imagen con alt."],
        nota: "Projecta dos o tres cartells al final i fes notar que tots fan servir les mateixes propietats però són diferents.|Proyecta dos o tres carteles al final y haz notar que todos usan las mismas propiedades pero son diferentes." },
      { id: 's17', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Cada element és una caixa rectangular.|Cada elemento es una caja rectangular.", "El div agrupa caixes; width en decideix l'amplada (px o %).|El div agrupa cajas; width decide su anchura (px o %).", "Capes: contingut, padding, border i margin.|Capas: contenido, padding, border y margin."],
        nota: "Anuncia la sessió següent: aprendrem a fer servir el padding i el margin per deixar respirar les caixes.|Anuncia la sesión siguiente: aprenderemos a usar el padding y el margin para dejar respirar las cajas." },
      { id: 's18', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Digues les quatre capes, de dins cap a fora.|Di las cuatro capas, de dentro hacia fuera.", "Per què <code>width: 300;</code> no fa res?|¿Por qué <code>width: 300;</code> no hace nada?"],
        nota: "Anota qui confon encara l'ordre de les capes: a la sessió 2 començarem per aquí.|Anota quién confunde aún el orden de las capas: en la sesión 2 empezaremos por aquí." }
    ],
    print: [
      { id: 'p1', t: "Targetes: caixes i capes|Tarjetas: cajas y capas", k: 'targetes',
        intro: "Un paquet per grup de 3. Les etiquetes es posen damunt dels rectangles del dibuix, i les capes, al voltant d'una caixa.|Un paquete por grupo de 3. Las etiquetas se ponen encima de los rectángulos del dibujo, y las capas, alrededor de una caja.",
        items: [
          { t: 'div.targeta 🧩|div.targeta 🧩', n: 2 },
          { t: 'h1 títol 📖|h1 título 📖', n: 1 },
          { t: 'h2 títol 📖|h2 título 📖', n: 2 },
          { t: 'p paràgraf ✏️|p párrafo ✏️', n: 3 },
          { t: 'img imatge 🔎|img imagen 🔎', n: 2 },
          { t: 'Contingut 🎯|Contenido 🎯', n: 1 },
          { t: 'Padding 📏|Padding 📏', n: 1 },
          { t: 'Border 🖍️|Border 🖍️', n: 1 },
          { t: 'Margin 🧭|Margin 🧭', n: 1 }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Marges i farciment ---------- */
  'w5-2': {
    obj: [
      "L'alumne/a distingeix el padding (espai de dins, amb el color de fons) del margin (espai de fora, transparent) i tria el que cal en cada situació.|El alumno/a distingue el padding (espacio de dentro, con el color de fondo) del margin (espacio de fuera, transparente) y elige el que hace falta en cada situación.",
      "L'alumne/a aplica padding i margin en px a una caixa i a un grup de caixes amb la mateixa classe.|El alumno/a aplica padding y margin en px a una caja y a un grupo de cajas con la misma clase.",
      "L'alumne/a escriu i interpreta valors de dos i quatre números seguint l'ordre del rellotge (dalt, dreta, baix, esquerra).|El alumno/a escribe e interpreta valores de dos y cuatro números siguiendo el orden del reloj (arriba, derecha, abajo, izquierda).",
      "L'alumne/a centra una caixa amb amplada fent servir <code>margin: 0 auto</code>.|El alumno/a centra una caja con anchura usando <code>margin: 0 auto</code>."
    ],
    comp: [
      "Competència digital (CD3): crear continguts digitals amb HTML i CSS|Competencia digital (CD3): crear y editar contenidos digitales con HTML y CSS",
      "Matemàtiques (sentit espacial i mesura): costats, orientació i distàncies en píxels|Matemáticas (sentido espacial y medida): lados, orientación y distancias en píxeles",
      "Pensament computacional: notacions abreujades i ordre de les dades|Pensamiento computacional: notaciones abreviadas y orden de los datos",
      "Llegibilitat i disseny: l'espai en blanc fa que un text es llegeixi millor|Legibilidad y diseño: el espacio en blanco hace que un texto se lea mejor"
    ],
    vocab: [
      ["Padding (farciment)|Padding (relleno)", "L'espai de dins, entre el contingut i la vora. Agafa el color de fons.|El espacio de dentro, entre el contenido y el borde. Coge el color de fondo."],
      ["Margin (marge)|Margin (margen)", "L'espai de fora, que separa la caixa de les altres. És transparent.|El espacio de fuera, que separa la caja de las demás. Es transparente."],
      ["padding-top, -right, -bottom, -left|padding-top, -right, -bottom, -left", "El padding d'un sol costat: dalt, dreta, baix o esquerra.|El padding de un solo lado: arriba, derecha, abajo o izquierda."],
      ["L'ordre del rellotge|El orden del reloj", "Amb quatre valors: dalt, dreta, baix i esquerra.|Con cuatro valores: arriba, derecha, abajo e izquierda."],
      ["auto|auto", "Valor que deixa que el navegador reparteixi l'espai; als costats, centra la caixa.|Valor que deja que el navegador reparta el espacio; en los lados, centra la caja."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Marges i farciment»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Márgenes y relleno»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un espai lliure davant de la pissarra per a l'activitat «Persones caixa»|Un espacio libre delante de la pizarra para la actividad «Personas caja»",
        "La fitxa «Els quatre costats», una per parella, i llapis|La ficha «Los cuatro lados», una por pareja, y lápiz"
      ],
      imprimir: ["Fitxa: els quatre costats|Ficha: los cuatro lados"],
      prep: [
        "Imprimir una fitxa per parella i tenir-ne la solució a mà.|Imprimir una ficha por pareja y tener la solución a mano.",
        "Dibuixar a la pissarra un rellotge gran amb les 12, les 3, les 6 i les 9 marcades.|Dibujar en la pizarra un reloj grande con las 12, las 3, las 6 y las 9 marcadas.",
        "Decidir qui seran els quatre voluntaris de «Persones caixa» i deixar lliure l'espai.|Decidir quiénes serán los cuatro voluntarios de «Personas caja» y dejar libre el espacio."
      ]
    },
    plan: [
      { min: 5, t: "Repàs i missió: targetes enganxades|Repaso y misión: tarjetas pegadas", fase: 'inici',
        fa: "Repassa les quatre capes amb l'animació. Presenta el problema del dia: a la web de la fira, el text de les targetes toca les vores i les targetes estan enganxades. Pregunta quina capa els sembla que ho arreglarà.|Repasa las cuatro capas con la animación. Presenta el problema del día: en la web de la feria, el texto de las tarjetas toca los bordes y las tarjetas están pegadas. Pregunta qué capa les parece que lo arreglará.",
        diu: ["Quina capa hi ha just al voltant del contingut?|¿Qué capa hay justo alrededor del contenido?",
          "Aquestes targetes es llegeixen bé? Què hi falta?|¿Estas tarjetas se leen bien? ¿Qué les falta?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Dins i fora: padding i margin|Dentro y fuera: padding y margin", fase: 'teoria',
        fa: "Explica el padding i el margin amb l'animació i les tres demos. A la demo «Padding o margin?» fes que predeixin què passarà abans de mirar. Tanca el bloc amb les situacions de la diapositiva 8: el grup respon a mà alçada «padding» o «margin».|Explica el padding y el margin con la animación y las tres demos. En la demo «¿Padding o margin?» haz que predigan qué pasará antes de mirar. Cierra el bloque con las situaciones de la diapositiva 8: el grupo responde a mano alzada «padding» o «margin».",
        diu: ["El padding és dins: fa la caixa més grossa i té el color de fons.|El padding está dentro: hace la caja más grande y tiene el color de fondo.",
          "El margin és fora: separa i és transparent.|El margin está fuera: separa y es transparente.",
          "Si poso padding a dues targetes enganxades, se separen?|Si pongo padding a dos tarjetas pegadas, ¿se separan?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Persones caixa i els quatre costats|Personas caja y los cuatro lados", fase: 'desconnectat',
        fa: "Primera part (4 minuts): quatre voluntaris fan de caixes en fila amb un full A4 a les mans (el contingut). Tu dius ordres: «padding gran!» (estiren els braços), «margin: dos passos!» (se separen), «margin: 0!» (s'ajunten). Segona part (7 minuts): per parelles, fan la fitxa «Els quatre costats» amb el rellotge de la pissarra com a ajuda.|Primera parte (4 minutos): cuatro voluntarios hacen de cajas en fila con una hoja A4 en las manos (el contenido). Tú dices órdenes: «¡padding grande!» (estiran los brazos), «¡margin: dos pasos!» (se separan), «¡margin: 0!» (se juntan). Segunda parte (7 minutos): por parejas, hacen la ficha «Los cuatro lados» con el reloj de la pizarra como ayuda.",
        diu: ["El full és el contingut: no es mou mai. Què canvia quan estireu els braços?|La hoja es el contenido: no se mueve nunca. ¿Qué cambia cuando estiráis los brazos?",
          "Amb quatre valors, comenceu sempre a les 12 i gireu com les agulles.|Con cuatro valores, empezad siempre en las 12 y girad como las agujas.",
          "Si només hi ha dos valors, el primer és per a dalt i baix.|Si solo hay dos valores, el primero es para arriba y abajo."],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Quatre voluntaris i després per parelles|Cuatro voluntarios y después por parejas" },
      { min: 14, t: "A l'ordinador: padding i margin|En el ordenador: padding y margin", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança fins a la pausa activa. Quan arribin a les targetes del rellotge i de centrar, para un moment la classe i explica-les amb les diapositives 12 i 13: són les idees més difícils de la sessió.|Cada alumno/a abre la sesión y avanza hasta la pausa activa. Cuando lleguen a las tarjetas del reloj y de centrar, para un momento la clase y explícalas con las diapositivas 12 y 13: son las ideas más difíciles de la sesión.",
        diu: ["Vols espai dins o entre caixes? Digues-ho abans d'escriure.|¿Quieres espacio dentro o entre cajas? Dilo antes de escribir.",
          "Per què totes dues notes se separen si només has escrit una regla?|¿Por qué las dos notas se separan si solo has escrito una regla?",
          "Per centrar, primer cal que la caixa tingui width. Per què?|Para centrar, primero hace falta que la caja tenga width. ¿Por qué?"],
        slides: ['s11', 's12', 's13'], app: "De «Recorda» fins a la pausa activa: el repàs, la missió, «Descobreix», la pregunta del cartell, «El tauler de casa» (per a casa), els reptes de padding i de margin, les targetes del rellotge i de centrar, la vista prèvia de <code>padding: 10px 40px</code> i la pregunta del marge esquerre.|De «Recuerda» hasta la pausa activa: el repaso, la misión, «Descubre», la pregunta del cartel, «El tablero de casa» (para casa), los retos de padding y de margin, las tarjetas del reloj y de centrar, la vista previa de <code>padding: 10px 40px</code> y la pregunta del margen izquierdo.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: dos valors, centrar i errors|Retos: dos valores, centrar y errores", fase: 'ordinador',
        fa: "Feu la pausa del rellotge tots junts. Després deixa que facin els reptes de dos valors i de centrar i els dos «Troba l'error». Qui acabi ajuda un company/a fent-li preguntes, sense tocar-li el teclat.|Haced la pausa del reloj todos juntos. Después deja que hagan los retos de dos valores y de centrar y los dos «Encuentra el error». Quien termine ayuda a un compañero/a haciéndole preguntas, sin tocarle el teclado.",
        diu: ["A <code>padding: 10px 30px</code>, quin número va als costats?|En <code>padding: 10px 30px</code>, ¿qué número va a los lados?",
          "Els valors se separen amb espais o amb comes?|¿Los valores se separan con espacios o con comas?",
          "<code>auto 0</code> o <code>0 auto</code>? Quin és el dels costats?|¿<code>auto 0</code> o <code>0 auto</code>? ¿Cuál es el de los lados?"],
        slides: ['s14'], app: "Pausa activa, els reptes «Coet Lunar» (dos valors i centrar) i els dos «Troba l'error».|Pausa activa, los retos «Coet Lunar» (dos valores y centrar) y los dos «Encuentra el error».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: el tauler d'avisos|Crea: el tablón de anuncios", fase: 'crea',
        fa: "Cada alumne/a fa el tauler d'avisos de la fira amb dos o tres avisos propis. Recorda'ls que el padding és perquè el text respiri i el margin, perquè els avisos no s'enganxin. Al final, mostra'n un parell al projector, al mòbil i a l'ordinador.|Cada alumno/a hace el tablón de anuncios de la feria con dos o tres avisos propios. Recuérdales que el padding es para que el texto respire y el margin, para que los avisos no se peguen. Al final, muestra un par en el proyector, en el móvil y en el ordenador.",
        diu: ["Quins avisos necessita la fira? L'horari, on és, els premis…|¿Qué avisos necesita la feria? El horario, dónde está, los premios…",
          "Feu servir la mateixa classe per a tots els avisos: una regla i llestos.|Usad la misma clase para todos los avisos: una regla y listo."],
        slides: ['s15'], app: "Pas «Crea»: El tauler d'avisos.|Paso «Crea»: El tablón de anuncios.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió, deixa que responguin les preguntes finals i fes el tiquet de sortida a la porta.|Repasa las tres ideas de la sesión, deja que respondan las preguntas finales y haz el ticket de salida en la puerta.",
        diu: ["Quin espai té el color de fons, el padding o el margin?|¿Qué espacio tiene el color de fondo, el padding o el margin?",
          "Com centrem una caixa?|¿Cómo centramos una caja?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir padding per separar dues targetes i no entén per què continuen enganxades.|Usa padding para separar dos tarjetas y no entiende por qué siguen pegadas.",
        "Pregunta-li on és el padding, dins o fora de la caixa. Que torni a mirar la demo «Padding o margin?» i compari les caixes roses amb les verdes.|Pregúntale dónde está el padding, dentro o fuera de la caja. Que vuelva a mirar la demo «¿Padding o margin?» y compare las cajas rosas con las verdes."],
      ["Separa els valors amb comes: <code>padding: 10px, 20px;</code>.|Separa los valores con comas: <code>padding: 10px, 20px;</code>.",
        "Pregunta-li com estan separats els valors a les demos. El CSS separa els valors amb espais.|Pregúntale cómo están separados los valores en las demos. El CSS separa los valores con espacios."],
      ["Es confon amb l'ordre dels quatre valors i comença per l'esquerra.|Se confunde con el orden de los cuatro valores y empieza por la izquierda.",
        "Que miri el rellotge de la pissarra i assenyali amb el dit les 12, les 3, les 6 i les 9 mentre llegeix els valors.|Que mire el reloj de la pizarra y señale con el dedo las 12, las 3, las 6 y las 9 mientras lee los valores."],
      ["Posa <code>margin: 0 auto;</code> però la caixa no es mou perquè no té <code>width</code>.|Pone <code>margin: 0 auto;</code> pero la caja no se mueve porque no tiene <code>width</code>.",
        "Pregunta-li quant espai sobra als costats d'una caixa que ocupa tota la fila. Si no sobra res, no hi ha res per repartir.|Pregúntale cuánto espacio sobra a los lados de una caja que ocupa toda la fila. Si no sobra nada, no hay nada que repartir."],
      ["Oblida els px als espais: <code>padding: 20;</code>.|Olvida los px en los espacios: <code>padding: 20;</code>.",
        "Recorda-li l'error de la sessió anterior amb <code>width</code>: els números necessiten la seva unitat. Només el 0 es pot escriure sol.|Recuérdale el error de la sesión anterior con <code>width</code>: los números necesitan su unidad. Solo el 0 se puede escribir solo."]
    ],
    diff: {
      mes: "Fer un avís «destacat» amb una classe extra que tingui més padding a l'esquerra (<code>padding-left</code>) i comparar-lo amb els altres. Escriure el mateix padding de tres maneres diferents (un, dos i quatre valors).|Hacer un aviso «destacado» con una clase extra que tenga más padding a la izquierda (<code>padding-left</code>) y compararlo con los demás. Escribir el mismo padding de tres maneras diferentes (uno, dos y cuatro valores).",
      menys: "Treballar només amb un valor (<code>padding: 15px</code>, <code>margin: 15px</code>) i deixar els quatre valors per a més endavant. Tenir el rellotge dibuixat en un paper al costat de l'ordinador.|Trabajar solo con un valor (<code>padding: 15px</code>, <code>margin: 15px</code>) y dejar los cuatro valores para más adelante. Tener el reloj dibujado en un papel al lado del ordenador."
    },
    aval: {
      ticket: ["Quin espai agafa el color de fons de la caixa: el padding o el margin?|¿Qué espacio coge el color de fondo de la caja: el padding o el margin?",
        "Què vol dir <code>margin: 0 auto;</code>?|¿Qué significa <code>margin: 0 auto;</code>?"],
      rubric: [
        ["Padding i margin|Padding y margin", "Tria bé padding o margin segons si vol espai dins o entre caixes.|Elige bien padding o margin según si quiere espacio dentro o entre cajas.", "Els fa servir, però de vegades els confon.|Los usa, pero a veces los confunde."],
        ["Valors abreujats|Valores abreviados", "Escriu i llegeix valors de dos i quatre números en l'ordre del rellotge.|Escribe y lee valores de dos y cuatro números en el orden del reloj.", "Fa servir un sol valor o necessita el rellotge per llegir-ne quatre.|Usa un solo valor o necesita el reloj para leer cuatro."],
        ["Centrar una caixa|Centrar una caja", "Centra una caixa amb <code>width</code> i <code>margin: 0 auto</code> i ho explica.|Centra una caja con <code>width</code> y <code>margin: 0 auto</code> y lo explica.", "Fa servir <code>margin: 0 auto</code>, però oblida el <code>width</code> o gira els valors.|Usa <code>margin: 0 auto</code>, pero olvida el <code>width</code> o invierte los valores."]
      ]
    },
    casa: "A casa, podeu repetir la sessió amb el mòbil i fer «El tauler de casa»: tres papers amb missatges, amb padding (un dit fins a la vora) i margin (dos dits entre ells), i una persona de casa que dona les ordres de CSS.|En casa, podéis repetir la sesión con el móvil y hacer «El tablero de casa»: tres papeles con mensajes, con padding (un dedo hasta el borde) y margin (dos dedos entre ellos), y una persona de casa que da las órdenes de CSS.",
    slides: [
      { id: 's1', k: 'portada', t: "Marges i farciment|Márgenes y relleno", x: "Avui donarem aire a les caixes amb el padding i el margin.|Hoy daremos aire a las cajas con el padding y el margin.",
        nota: "Explica que «farciment» és el nom en català del padding i «marge», el del margin, però que al codi sempre escriurem les paraules en anglès.|Explica que «relleno» es el nombre en castellano del padding y «margen», el del margin, pero que en el código siempre escribiremos las palabras en inglés." },
      { id: 's2', k: 'anim', t: "Recordem les quatre capes|Recordemos las cuatro capas", anim: 'w5layers', x: "Avui treballarem el padding i el margin.|Hoy trabajaremos el padding y el margin.",
        nota: "Demana que diguin les capes en veu alta abans que surtin a l'animació.|Pide que digan las capas en voz alta antes de que salgan en la animación." },
      { id: 's3', k: 'concepte', t: "Targetes enganxades|Tarjetas pegadas", punts: ["El text de les targetes toca les vores.|El texto de las tarjetas toca los bordes.", "Les targetes estan enganxades les unes a les altres.|Las tarjetas están pegadas unas a otras.", "Costa molt de llegir: cal aire!|Cuesta mucho leerlas: ¡hace falta aire!"],
        nota: "Pregunta si han vist alguna web o algun cartell on tot estigui tan enganxat que costi de llegir.|Pregunta si han visto alguna web o algún cartel donde todo esté tan pegado que cueste leerlo." },
      { id: 's4', k: 'anim', t: "Dins i fora|Dentro y fuera", anim: 'w5pad', x: "Padding: espai de dins. Margin: espai de fora.|Padding: espacio de dentro. Margin: espacio de fuera.",
        nota: "Fes notar que, amb el padding, el groc creix; amb el margin, apareix un espai transparent entre les caixes.|Haz notar que, con el padding, el amarillo crece; con el margin, aparece un espacio transparente entre las cajas." },
      { id: 's5', k: 'media', t: "Deixa respirar el text|Deja respirar el texto", x: "<code>padding: 20px;</code> fa espai per dins.|<code>padding: 20px;</code> hace espacio por dentro.",
        media: { k: 'web', html: `<div class="sense">Sense padding: el text toca la vora.</div>\n<div class="amb">Amb padding: el text respira.</div>`, css: `.sense {\n  background-color: #FFF3B0;\n}\n.amb {\n  background-color: #C9F0D8;\n  padding: 20px;\n}` },
        nota: "Pregunta quina de les dues caixes es llegeix millor i per què.|Pregunta cuál de las dos cajas se lee mejor y por qué." },
      { id: 's6', k: 'media', t: "Separa les caixes|Separa las cajas", x: "<code>margin: 16px;</code> fa espai per fora.|<code>margin: 16px;</code> hace espacio por fuera.",
        media: { k: 'web', html: `<div class="nota">Nota 1</div>\n<div class="nota">Nota 2</div>\n<div class="nota">Nota 3</div>`, css: `.nota {\n  background-color: #9FD0FF;\n  padding: 10px;\n  margin: 16px;\n}` },
        nota: "Fes notar que una sola regla serveix per a les tres notes perquè comparteixen la classe.|Haz notar que una sola regla sirve para las tres notas porque comparten la clase." },
      { id: 's7', k: 'media', t: "Padding o margin?|¿Padding o margin?", x: "Les roses tenen padding; les verdes, margin.|Las rosas tienen padding; las verdes, margin.",
        media: { k: 'web', html: `<div class="p">padding: 20px</div>\n<div class="p">padding: 20px</div>\n<div class="m">margin: 20px</div>\n<div class="m">margin: 20px</div>`, css: `.p {\n  background-color: #FFB8D2;\n  padding: 20px;\n}\n.m {\n  background-color: #C9F0D8;\n  margin: 20px;\n}` },
        nota: "Abans de mostrar el resultat, pregunta quines caixes quedaran separades. Molts diran que totes.|Antes de mostrar el resultado, pregunta qué cajas quedarán separadas. Muchos dirán que todas." },
      { id: 's8', k: 'pregunta', t: "Padding o margin?|¿Padding o margin?", punts: ["El text toca la vora del cartell.|El texto toca el borde del cartel.", "Dues targetes estan enganxades.|Dos tarjetas están pegadas.", "Vull que la foto s'aparti del títol de sota.|Quiero que la foto se aparte del título de debajo.", "Vull més color de fons al voltant del text.|Quiero más color de fondo alrededor del texto."],
        nota: "Respostes: padding, margin, margin i padding. Fes que responguin a mà alçada i que justifiquin la tercera.|Respuestas: padding, margin, margin y padding. Haz que respondan a mano alzada y que justifiquen la tercera." },
      { id: 's9', k: 'activitat', t: "Persones caixa|Personas caja", timer: 11, punts: ["Quatre voluntaris en fila, amb un full a les mans: el contingut.|Cuatro voluntarios en fila, con una hoja en las manos: el contenido.", "«Padding gran!»: estireu els braços.|«¡Padding grande!»: estirad los brazos.", "«Margin: dos passos!»: separeu-vos.|«¡Margin: dos pasos!»: separaos.", "«Margin: 0!»: ajunteu-vos.|«¡Margin: 0!»: juntaos."],
        nota: "Que la resta del grup comprovi si els voluntaris fan bé cada ordre. Després, passa a la fitxa per parelles.|Que el resto del grupo compruebe si los voluntarios hacen bien cada orden. Después, pasa a la ficha por parejas." },
      { id: 's10', k: 'activitat', t: "Els quatre costats|Los cuatro lados", code: `margin: 10px 20px 30px 40px;\n/* dalt dreta baix esquerra */\n\npadding: 8px 16px;\n/* dalt i baix | costats */`,
        punts: ["Feu la fitxa per parelles.|Haced la ficha por parejas.", "Amb quatre valors: com les agulles del rellotge.|Con cuatro valores: como las agujas del reloj.", "Amb dos: dalt i baix, i després els costats.|Con dos: arriba y abajo, y después los lados."],
        nota: "Deixa projectada aquesta diapositiva mentre fan la fitxa. Corregiu l'exercici 1 en veu alta abans de continuar.|Deja proyectada esta diapositiva mientras hacen la ficha. Corregid el ejercicio 1 en voz alta antes de continuar." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 14, punts: ["Obre la sessió «Marges i farciment».|Abre la sesión «Márgenes y relleno».", "Fes la missió, «Descobreix» i els reptes de padding i margin.|Haz la misión, «Descubre» y los retos de padding y margin.", "«El tauler de casa»: toca «Ara no», és per a casa.|«El tablero de casa»: toca «Ahora no», es para casa.", "Para a la pausa activa.|Para en la pausa activa."],
        nota: "Para la classe quan la majoria arribi a les targetes del rellotge i explica les diapositives 12 i 13.|Para la clase cuando la mayoría llegue a las tarjetas del reloj y explica las diapositivas 12 y 13." },
      { id: 's12', k: 'anim', t: "L'ordre del rellotge|El orden del reloj", anim: 'w5clock', x: "Dalt, dreta, baix i esquerra.|Arriba, derecha, abajo e izquierda.",
        nota: "Assenyala el rellotge de la pissarra mentre surten els valors. Pregunta: amb <code>margin: 5px 10px 15px 20px</code>, quin és el de l'esquerra?|Señala el reloj de la pizarra mientras salen los valores. Pregunta: con <code>margin: 5px 10px 15px 20px</code>, ¿cuál es el de la izquierda?" },
      { id: 's13', k: 'media', t: "Una caixa al mig|Una caja en medio", x: "<code>width</code> + <code>margin: 0 auto;</code> = centrada.|<code>width</code> + <code>margin: 0 auto;</code> = centrada.",
        media: { k: 'web', html: `<div class="targeta">Soc al mig!</div>`, css: `.targeta {\n  background-color: #C9F0D8;\n  width: 160px;\n  padding: 10px;\n  margin: 0 auto;\n}` },
        nota: "Explica que <code>auto</code> vol dir «navegador, reparteix tu l'espai que sobra». Si treus el width, ja no sobra res.|Explica que <code>auto</code> significa «navegador, reparte tú el espacio que sobra». Si quitas el width, ya no sobra nada." },
      { id: 's14', k: 'repte', t: "Reptes: dos valors, centrar i errors|Retos: dos valores, centrar y errores", timer: 10, punts: ["1. Padding de dos valors: 10px 30px|1. Padding de dos valores: 10px 30px", "2. Centra la targeta del Coet Lunar|2. Centra la tarjeta del Coet Lunar", "3. Troba l'error: la coma|3. Encuentra el error: la coma", "4. Troba l'error: la targeta que no es centra|4. Encuentra el error: la tarjeta que no se centra"],
        nota: "Si algú acaba aviat, que provi canviar els números del padding i expliqui què passa a cada costat.|Si alguien termina pronto, que pruebe a cambiar los números del padding y explique qué pasa en cada lado." },
      { id: 's15', k: 'activitat', t: "Crea: el tauler d'avisos|Crea: el tablón de anuncios", timer: 7, punts: ["Almenys dos avisos amb la classe <code>avis</code>.|Al menos dos avisos con la clase <code>avis</code>.", "Color de fons, width, padding i margin.|Color de fondo, width, padding y margin.", "Extra: centrats amb <code>auto</code>.|Extra: centrados con <code>auto</code>."],
        nota: "Mostra un tauler al mòbil i a l'ordinador i pregunta si els avisos respiren prou.|Muestra un tablón en el móvil y en el ordenador y pregunta si los avisos respiran lo suficiente." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Padding: espai de dins, amb el color de fons.|Padding: espacio de dentro, con el color de fondo.", "Margin: espai de fora, transparent.|Margin: espacio de fuera, transparente.", "Quatre valors: dalt, dreta, baix i esquerra; <code>margin: 0 auto</code> centra.|Cuatro valores: arriba, derecha, abajo e izquierda; <code>margin: 0 auto</code> centra."],
        nota: "Anuncia la sessió següent: la tercera capa, el border, i també les cantonades rodones i les ombres.|Anuncia la sesión siguiente: la tercera capa, el border, y también las esquinas redondas y las sombras." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quin espai agafa el color de fons: el padding o el margin?|¿Qué espacio coge el color de fondo: el padding o el margin?", "Què vol dir <code>margin: 0 auto;</code>?|¿Qué significa <code>margin: 0 auto;</code>?"],
        nota: "Anota qui encara confon padding i margin per tornar-hi a l'inici de la sessió 3.|Anota quién aún confunde padding y margin para volver a ello al inicio de la sesión 3." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: els quatre costats|Ficha: los cuatro lados", k: 'fitxa',
        intro: "Per parelles. Recordeu: amb quatre valors, l'ordre és el del rellotge (dalt, dreta, baix, esquerra); amb dos, el primer és per a dalt i baix i el segon, per als costats.|Por parejas. Recordad: con cuatro valores, el orden es el del reloj (arriba, derecha, abajo, izquierda); con dos, el primero es para arriba y abajo y el segundo, para los lados.",
        items: [
          { q: "<code>margin: 10px 20px 30px 40px;</code> Escriu el marge de cada costat.|<code>margin: 10px 20px 30px 40px;</code> Escribe el margen de cada lado.", sol: "Dalt 10px, dreta 20px, baix 30px i esquerra 40px.|Arriba 10px, derecha 20px, abajo 30px e izquierda 40px." },
          { q: "<code>padding: 8px 16px;</code> Quin padding hi ha a dalt? I a l'esquerra?|<code>padding: 8px 16px;</code> ¿Qué padding hay arriba? ¿Y a la izquierda?", sol: "A dalt 8px (i a baix també); a l'esquerra 16px (i a la dreta també).|Arriba 8px (y abajo también); a la izquierda 16px (y a la derecha también)." },
          { q: "Vull 5px a dalt i a baix i 25px als costats. Escriu-ho amb una sola línia de padding.|Quiero 5px arriba y abajo y 25px a los lados. Escríbelo con una sola línea de padding.", sol: "<code>padding: 5px 25px;</code>|<code>padding: 5px 25px;</code>" },
          { q: "Vull un margin de 0 a dalt, 10px a la dreta, 20px a baix i 30px a l'esquerra.|Quiero un margin de 0 arriba, 10px a la derecha, 20px abajo y 30px a la izquierda.", sol: "<code>margin: 0 10px 20px 30px;</code>|<code>margin: 0 10px 20px 30px;</code>" },
          { q: "El text toca la vora del cartell. Hi poses padding o margin? Per què?|El texto toca el borde del cartel. ¿Le pones padding o margin? ¿Por qué?", sol: "Padding: és l'espai de dins, entre el text i la vora.|Padding: es el espacio de dentro, entre el texto y el borde." },
          { q: "Una caixa amb <code>width: 200px;</code> està enganxada a l'esquerra. Quina línia l'envia al mig?|Una caja con <code>width: 200px;</code> está pegada a la izquierda. ¿Qué línea la manda al centro?", sol: "<code>margin: 0 auto;</code> (0 a dalt i a baix, auto als costats).|<code>margin: 0 auto;</code> (0 arriba y abajo, auto a los lados)." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Vores i ombres ---------- */
  'w5-3': {
    obj: [
      "L'alumne/a posa vores a una caixa amb gruix, estil i color, i reconeix que sense l'estil la vora no es veu.|El alumno/a pone bordes a una caja con grosor, estilo y color, y reconoce que sin el estilo el borde no se ve.",
      "L'alumne/a arrodoneix cantonades amb <code>border-radius</code> i fa una caixa rodona amb <code>50%</code>.|El alumno/a redondea esquinas con <code>border-radius</code> y hace una caja redonda con <code>50%</code>.",
      "L'alumne/a afegeix una ombra amb <code>box-shadow</code> i explica què vol dir cada valor.|El alumno/a añade una sombra con <code>box-shadow</code> y explica qué significa cada valor.",
      "L'alumne/a calcula l'amplada total d'una caixa sumant width, padding i border.|El alumno/a calcula la anchura total de una caja sumando width, padding y border."
    ],
    comp: [
      "Competència digital (CD3): crear continguts digitals amb HTML i CSS|Competencia digital (CD3): crear y editar contenidos digitales con HTML y CSS",
      "Matemàtiques (càlcul i mesura): sumar les mides de les capes d'una caixa|Matemáticas (cálculo y medida): sumar los tamaños de las capas de una caja",
      "Educació visual i plàstica: llum i ombra, línies i formes|Educación visual y plástica: luz y sombra, líneas y formas",
      "Pensament crític: trobar i corregir errors en el codi|Pensamiento crítico: encontrar y corregir errores en el código"
    ],
    vocab: [
      ["Border (vora)|Border (borde)", "La línia que envolta la caixa, entre el padding i el margin.|La línea que rodea la caja, entre el padding y el margin."],
      ["Estil de vora|Estilo de borde", "<code>solid</code> (contínua), <code>dashed</code> (ratlles), <code>dotted</code> (punts) i <code>double</code> (doble).|<code>solid</code> (continua), <code>dashed</code> (rayas), <code>dotted</code> (puntos) y <code>double</code> (doble)."],
      ["border-radius|border-radius", "Arrodoneix les cantonades. Amb 50 %, un quadrat es torna un cercle.|Redondea las esquinas. Con 50 %, un cuadrado se vuelve un círculo."],
      ["box-shadow|box-shadow", "L'ombra de la caixa: dreta, avall, difuminat i color.|La sombra de la caja: derecha, abajo, difuminado y color."],
      ["rgba|rgba", "Un color amb transparència: el quart número va de 0 (invisible) a 1 (opac).|Un color con transparencia: el cuarto número va de 0 (invisible) a 1 (opaco)."],
      ["Amplada total|Anchura total", "width + padding + border, a cada costat.|width + padding + border, a cada lado."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Vores i ombres»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Bordes y sombras»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per parella: un paquet de targetes «Dibuixa-ho i endevina-ho», fulls en blanc i retoladors de colors|Por pareja: un paquete de tarjetas «Dibújalo y adivínalo», hojas en blanco y rotuladores de colores",
        "Una llanterna o el llum del mòbil per ensenyar com es mou una ombra|Una linterna o la luz del móvil para enseñar cómo se mueve una sombra"
      ],
      imprimir: ["Targetes: dibuixa-ho i endevina-ho|Tarjetas: dibújalo y adivínalo", "Fitxa: quant ocupa la caixa?|Ficha: ¿cuánto ocupa la caja?"],
      prep: [
        "Imprimir i retallar un paquet de targetes per parella, i la fitxa per a qui acabi aviat o per a casa.|Imprimir y recortar un paquete de tarjetas por pareja, y la ficha para quien termine pronto o para casa.",
        "Provar abans la llanterna amb un llibre damunt la taula per ensenyar l'ombra.|Probar antes la linterna con un libro sobre la mesa para enseñar la sombra.",
        "Revisar la diapositiva 7 (l'amplada total): és el càlcul que més costa.|Revisar la diapositiva 7 (la anchura total): es el cálculo que más cuesta."
      ]
    },
    plan: [
      { min: 5, t: "Repàs i missió: targetes de col·leccionista|Repaso y misión: tarjetas de coleccionista", fase: 'inici',
        fa: "Repassa el padding i el margin amb el codi de la diapositiva 2. Presenta la missió: les targetes de la fira semblen paper pla i els equips les volen com les targetes de col·leccionista, amb vora, cantonades rodones i ombra.|Repasa el padding y el margin con el código de la diapositiva 2. Presenta la misión: las tarjetas de la feria parecen papel plano y los equipos las quieren como las tarjetas de coleccionista, con borde, esquinas redondas y sombra.",
        diu: ["Què fa <code>padding: 10px 20px</code>? I <code>margin: 0 auto</code>?|¿Qué hace <code>padding: 10px 20px</code>? ¿Y <code>margin: 0 auto</code>?",
          "Quina és la capa que encara no hem fet servir?|¿Cuál es la capa que todavía no hemos usado?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "La vora i l'amplada total|El borde y la anchura total", fase: 'teoria',
        fa: "Mostra els quatre estils de vora i l'error típic de la vora sense estil. Ensenya la vora d'un sol costat. Acaba amb l'amplada total: resol l'exemple de l'animació a la pissarra i després fes que calculin el de la diapositiva 8 per parelles.|Muestra los cuatro estilos de borde y el error típico del borde sin estilo. Enseña el borde de un solo lado. Termina con la anchura total: resuelve el ejemplo de la animación en la pizarra y después haz que calculen el de la diapositiva 8 por parejas.",
        diu: ["Quines tres coses diu <code>border: 4px solid blue</code>?|¿Qué tres cosas dice <code>border: 4px solid blue</code>?",
          "Per què la primera caixa no té vora?|¿Por qué la primera caja no tiene borde?",
          "El padding i el border hi són dues vegades: a l'esquerra i a la dreta.|El padding y el border están dos veces: a la izquierda y a la derecha."],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Dibuixa-ho i endevina-ho|Dibújalo y adivínalo", fase: 'desconnectat',
        fa: "Per parelles, amb el paquet de targetes cap per avall. Una persona agafa una targeta sense ensenyar-la i dibuixa al full una caixa amb aquest estil (gruix, estil de vora, cantonades, ombra). L'altra ha d'endevinar el CSS i dir-lo en veu alta. Si l'encerta, guanyen la targeta tots dos i canvien els papers. Compte amb la targeta trampa: <code>border: 4px red</code> no es dibuixa!|Por parejas, con el paquete de tarjetas boca abajo. Una persona coge una tarjeta sin enseñarla y dibuja en la hoja una caja con ese estilo (grosor, estilo de borde, esquinas, sombra). La otra tiene que adivinar el CSS y decirlo en voz alta. Si acierta, ganan la tarjeta los dos y cambian los papeles. Cuidado con la tarjeta trampa: ¡<code>border: 4px red</code> no se dibuja!",
        diu: ["Dibuixeu l'ombra cap a on diu la targeta: dreta i avall.|Dibujad la sombra hacia donde dice la tarjeta: derecha y abajo.",
          "Com dibuixaries una vora <code>dotted</code>? I una <code>double</code>?|¿Cómo dibujarías un borde <code>dotted</code>? ¿Y uno <code>double</code>?",
          "Si et surt la targeta trampa, què dibuixes?|Si te sale la tarjeta trampa, ¿qué dibujas?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles|Por parejas" },
      { min: 14, t: "A l'ordinador: vores, cantonades i ombres|En el ordenador: bordes, esquinas y sombras", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança fins a la pausa activa. Quan la majoria arribi a les targetes de <code>border-radius</code> i <code>box-shadow</code>, fes-les servir al projector: encén la llanterna damunt un llibre perquè vegin cap on cau l'ombra.|Cada alumno/a abre la sesión y avanza hasta la pausa activa. Cuando la mayoría llegue a las tarjetas de <code>border-radius</code> y <code>box-shadow</code>, úsalas en el proyector: enciende la linterna sobre un libro para que vean hacia dónde cae la sombra.",
        diu: ["La teva vora té les tres coses? Gruix, estil i color.|¿Tu borde tiene las tres cosas? Grosor, estilo y color.",
          "Si la llum ve de dalt a l'esquerra, cap on va l'ombra?|Si la luz viene de arriba a la izquierda, ¿hacia dónde va la sombra?",
          "Què passa si el difuminat és 0?|¿Qué pasa si el difuminado es 0?"],
        slides: ['s11', 's12', 's13', 's14'], app: "De «Recorda» fins a la pausa activa: el repàs, la missió, «Descobreix», el càlcul de l'amplada total, «Caça vores i ombres» (per a casa), el repte de la vora, les targetes de cantonades i ombres, la vista prèvia de la xapa i la pregunta de l'ombra.|De «Recuerda» hasta la pausa activa: el repaso, la misión, «Descubre», el cálculo de la anchura total, «Caza bordes y sombras» (para casa), el reto del borde, las tarjetas de esquinas y sombras, la vista previa de la chapa y la pregunta de la sombra.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: cantonades, ombra i errors|Retos: esquinas, sombra y errores", fase: 'ordinador',
        fa: "Feu la pausa activa de l'ombra per parelles. Després deixa que facin els reptes de les cantonades, l'ombra i la targeta amb dos errors, i el «Troba l'error» de la vora.|Haced la pausa activa de la sombra por parejas. Después deja que hagan los retos de las esquinas, la sombra y la tarjeta con dos errores, y el «Encuentra el error» del borde.",
        diu: ["A la targeta del robot hi ha dos errors. Mira els missatges sota l'editor.|En la tarjeta del robot hay dos errores. Mira los mensajes bajo el editor.",
          "Prova de canviar els números de l'ombra: què fa cada un?|Prueba a cambiar los números de la sombra: ¿qué hace cada uno?"],
        slides: ['s15'], app: "Pausa activa, els reptes del Castell Encantat (cantonades i ombra), «Robot Saltador» (dos errors) i «Troba l'error».|Pausa activa, los retos del Castell Encantat (esquinas y sombra), «Robot Saltador» (dos errores) y «Encuentra el error».", org: "Per parelles i després individual|Por parejas y después individual" },
      { min: 7, t: "Crea: la xapa del club|Crea: la chapa del club", fase: 'crea',
        fa: "Cada alumne/a dissenya la xapa rodona del club de videojocs. Recorda que perquè sigui un cercle, l'amplada i l'alçada han de ser iguals. Qui acabi pot provar diferents estils de vora i ombres.|Cada alumno/a diseña la chapa redonda del club de videojuegos. Recuerda que para que sea un círculo, la anchura y la altura tienen que ser iguales. Quien termine puede probar diferentes estilos de borde y sombras.",
        diu: ["Si l'amplada i l'alçada no són iguals, què surt? Proveu-ho!|Si la anchura y la altura no son iguales, ¿qué sale? ¡Probadlo!",
          "Amb <code>text-align: center</code> el nom del club queda al mig.|Con <code>text-align: center</code> el nombre del club queda en medio."],
        slides: ['s16'], app: "Pas «Crea»: La xapa del club.|Paso «Crea»: La chapa del club.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les idees de la sessió i fes el tiquet de sortida. Anuncia que la setmana vinent faran la targeta del seu videojoc: que vagin pensant el nom i de què va.|Repasa las ideas de la sesión y haz el ticket de salida. Anuncia que la semana que viene harán la tarjeta de su videojuego: que vayan pensando el nombre y de qué va.",
        diu: ["Per què no es veu <code>border: 2px blue</code>?|¿Por qué no se ve <code>border: 2px blue</code>?",
          "Quin valor fa una caixa rodona?|¿Qué valor hace una caja redonda?"],
        slides: ['s17', 's18'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu la vora sense estil (<code>border: 3px red;</code>) i no es veu res.|Escribe el borde sin estilo (<code>border: 3px red;</code>) y no se ve nada.",
        "Pregunta-li quines tres coses necessita una vora. Que compari la seva línia amb la demo «Sense l'estil, no hi ha vora».|Pregúntale qué tres cosas necesita un borde. Que compare su línea con la demo «Sin el estilo, no hay borde»."],
      ["Oblida els dos punts: <code>border-radius 16px;</code>.|Olvida los dos puntos: <code>border-radius 16px;</code>.",
        "Que llegeixi el missatge taronja de sota l'editor: diu quina línia no té el format <code>propietat: valor;</code>.|Que lea el mensaje naranja de debajo del editor: dice qué línea no tiene el formato <code>propiedad: valor;</code>."],
      ["Fa la xapa amb <code>border-radius: 50%</code> però li surt un ou, no un cercle.|Hace la chapa con <code>border-radius: 50%</code> pero le sale un huevo, no un círculo.",
        "Pregunta-li quina amplada i quina alçada té la caixa. Un cercle necessita un quadrat.|Pregúntale qué anchura y qué altura tiene la caja. Un círculo necesita un cuadrado."],
      ["Posa una ombra molt negra i dura que fa difícil llegir la targeta.|Pone una sombra muy negra y dura que hace difícil leer la tarjeta.",
        "Mostra-li la demo «Les ombres suaus queden millor» i convida'l a provar <code>rgba</code> amb un quart número petit.|Muéstrale la demo «Las sombras suaves quedan mejor» e invítalo a probar <code>rgba</code> con un cuarto número pequeño."],
      ["A l'amplada total, només suma el padding i el border una vegada.|En la anchura total, solo suma el padding y el border una vez.",
        "Que dibuixi la caixa i posi el dit a l'esquerra: quantes capes travessa fins al contingut? I a la dreta?|Que dibuje la caja y ponga el dedo a la izquierda: ¿cuántas capas atraviesa hasta el contenido? ¿Y a la derecha?"]
    ],
    diff: {
      mes: "Fer tres versions de la mateixa targeta amb estils de vora i ombres diferents i triar-ne la més llegible, explicant per què. Provar <code>box-sizing: border-box</code> i comprovar que l'amplada total canvia.|Hacer tres versiones de la misma tarjeta con estilos de borde y sombras diferentes y elegir la más legible, explicando por qué. Probar <code>box-sizing: border-box</code> y comprobar que la anchura total cambia.",
      menys: "Treballar amb els fragments de sota l'editor (<code>border</code>, <code>border-radius</code>, <code>box-shadow</code>) i canviar només els números i els colors. A l'activitat, començar per les targetes de vora i deixar les d'ombra per al final.|Trabajar con los fragmentos de debajo del editor (<code>border</code>, <code>border-radius</code>, <code>box-shadow</code>) y cambiar solo los números y los colores. En la actividad, empezar por las tarjetas de borde y dejar las de sombra para el final."
    },
    aval: {
      ticket: ["Per què no es veu la vora <code>border: 2px blue;</code>?|¿Por qué no se ve el borde <code>border: 2px blue;</code>?",
        "Quin valor de <code>border-radius</code> fa que una caixa quadrada sigui rodona?|¿Qué valor de <code>border-radius</code> hace que una caja cuadrada sea redonda?"],
      rubric: [
        ["Vores|Bordes", "Escriu vores amb gruix, estil i color, i en fa d'un sol costat.|Escribe bordes con grosor, estilo y color, y hace de un solo lado.", "Posa vores, però de vegades oblida l'estil.|Pone bordes, pero a veces olvida el estilo."],
        ["Cantonades i ombres|Esquinas y sombras", "Fa servir <code>border-radius</code> i <code>box-shadow</code> i explica què fa cada valor.|Usa <code>border-radius</code> y <code>box-shadow</code> y explica qué hace cada valor.", "Els fa servir copiant els fragments, sense saber encara què fa cada número.|Los usa copiando los fragmentos, sin saber todavía qué hace cada número."],
        ["Amplada total|Anchura total", "Calcula l'amplada total sumant les capes dels dos costats.|Calcula la anchura total sumando las capas de los dos lados.", "Suma les capes, però només d'un costat.|Suma las capas, pero solo de un lado."]
      ]
    },
    casa: "A casa, podeu fer «Caça vores i ombres»: trobar objectes amb cantonades rodones, mirar cap on cau l'ombra d'un llibre amb una llanterna i escriure'n el CSS. També hi ha la fitxa «Quant ocupa la caixa?».|En casa, podéis hacer «Caza bordes y sombras»: encontrar objetos con esquinas redondas, mirar hacia dónde cae la sombra de un libro con una linterna y escribir su CSS. También está la ficha «¿Cuánto ocupa la caja?».",
    slides: [
      { id: 's1', k: 'portada', t: "Vores i ombres|Bordes y sombras", x: "Avui farem targetes de col·leccionista: vores, cantonades rodones i ombres.|Hoy haremos tarjetas de coleccionista: bordes, esquinas redondas y sombras.",
        nota: "Si tens alguna targeta o cromo de col·leccionista (sense marques), ensenya'l: té vora i cantonades rodones.|Si tienes alguna tarjeta o cromo de coleccionista (sin marcas), enséñalo: tiene borde y esquinas redondas." },
      { id: 's2', k: 'repas', t: "Recordem els espais|Recordemos los espacios", code: `.targeta {\n  width: 240px;\n  padding: 10px 20px;\n  margin: 0 auto;\n}`,
        punts: ["<code>padding: 10px 20px</code>: dalt i baix 10, costats 20.|<code>padding: 10px 20px</code>: arriba y abajo 10, lados 20.", "<code>margin: 0 auto</code>: centrada.|<code>margin: 0 auto</code>: centrada."],
        nota: "Demana a un alumne/a que expliqui cada línia abans de mostrar els punts.|Pide a un alumno/a que explique cada línea antes de mostrar los puntos." },
      { id: 's3', k: 'concepte', t: "Targetes de col·leccionista|Tarjetas de coleccionista", punts: ["Una vora de colors.|Un borde de colores.", "Les cantonades rodones.|Las esquinas redondas.", "Una ombra, com si sortís de la pantalla.|Una sombra, como si saliera de la pantalla."],
        nota: "Pregunta en quines apps o webs que facin servir veuen caixes amb cantonades rodones i ombres. Gairebé a totes!|Pregunta en qué apps o webs que usen ven cajas con esquinas redondas y sombras. ¡Casi en todas!" },
      { id: 's4', k: 'media', t: "La vora: gruix, estil i color|El borde: grosor, estilo y color", x: "<code>border: 4px solid blue;</code>|<code>border: 4px solid blue;</code>",
        media: { k: 'web', html: `<div class="a">solid</div>\n<div class="b">dashed</div>\n<div class="c">dotted</div>\n<div class="d">double</div>`, css: `div {\n  padding: 8px;\n  margin: 8px;\n}\n.a { border: 4px solid #2F5BEA; }\n.b { border: 4px dashed #E5489A; }\n.c { border: 4px dotted #1FA463; }\n.d { border: 6px double #F08A24; }` },
        nota: "Fes que diguin el nom de cada estil en veu alta. La regla <code>div</code> posa el mateix padding i margin a les quatre caixes.|Haz que digan el nombre de cada estilo en voz alta. La regla <code>div</code> pone el mismo padding y margin a las cuatro cajas." },
      { id: 's5', k: 'media', t: "Sense l'estil, no hi ha vora|Sin el estilo, no hay borde", x: "L'error més típic amb les vores.|El error más típico con los bordes.",
        media: { k: 'web', html: `<div class="no">border: 4px red;</div>\n<div class="si">border: 4px solid red;</div>`, css: `div {\n  padding: 8px;\n  margin: 8px;\n}\n.no {\n  border: 4px red;\n}\n.si {\n  border: 4px solid red;\n}` },
        nota: "Pregunta per què la primera no té vora abans de dir la resposta. Molts pensaran que el problema és el color.|Pregunta por qué la primera no tiene borde antes de decir la respuesta. Muchos pensarán que el problema es el color." },
      { id: 's6', k: 'media', t: "Una vora només a un costat|Un borde solo en un lado", x: "<code>border-left</code>, <code>border-bottom</code>…|<code>border-left</code>, <code>border-bottom</code>…",
        media: { k: 'web', html: `<p class="cita">«El videojoc més divertit de la fira!»</p>\n<h2 class="ratlla">Nivells</h2>`, css: `.cita {\n  border-left: 6px solid tomato;\n  padding-left: 12px;\n}\n.ratlla {\n  border-bottom: 3px dashed #8B5CF6;\n}` },
        nota: "Relaciona-ho amb el padding d'un sol costat de la sessió anterior: els noms segueixen la mateixa idea.|Relaciónalo con el padding de un solo lado de la sesión anterior: los nombres siguen la misma idea." },
      { id: 's7', k: 'anim', t: "Quant ocupa de debò?|¿Cuánto ocupa de verdad?", anim: 'w5total', x: "width + padding + border, a cada costat.|width + padding + border, a cada lado.",
        nota: "Fes la suma a la pissarra amb el dit damunt de cada capa, d'esquerra a dreta. Esmenta <code>box-sizing: border-box</code> com a truc dels dissenyadors.|Haz la suma en la pizarra con el dedo sobre cada capa, de izquierda a derecha. Menciona <code>box-sizing: border-box</code> como truco de los diseñadores." },
      { id: 's8', k: 'pregunta', t: "Fes els comptes|Haz las cuentas", code: `.caixa {\n  width: 150px;\n  padding: 10px;\n  border: 5px solid black;\n}`, x: "Quant fa d'amplada en total?|¿Cuánto mide de anchura en total?",
        nota: "Resposta: 5 + 10 + 150 + 10 + 5 = 180px. Si algú diu 165, pregunta-li si la caixa té padding només a un costat.|Respuesta: 5 + 10 + 150 + 10 + 5 = 180px. Si alguien dice 165, pregúntale si la caja tiene padding solo en un lado." },
      { id: 's9', k: 'activitat', t: "Dibuixa-ho i endevina-ho|Dibújalo y adivínalo", timer: 11, punts: ["Per parelles, les targetes cap per avall.|Por parejas, las tarjetas boca abajo.", "Un agafa una targeta i dibuixa la caixa sense dir res.|Uno coge una tarjeta y dibuja la caja sin decir nada.", "L'altre endevina el CSS i el diu en veu alta.|El otro adivina el CSS y lo dice en voz alta.", "Si l'encerta, canvieu els papers.|Si acierta, cambiad los papeles."],
        nota: "Passa per les parelles i demana que diguin el CSS complet: gruix, estil i color. Avisa que hi ha una targeta trampa.|Pasa por las parejas y pide que digan el CSS completo: grosor, estilo y color. Avisa de que hay una tarjeta trampa." },
      { id: 's10', k: 'activitat', t: "Les regles del dibuix|Las reglas del dibujo", punts: ["El dibuix ha de mostrar el gruix, l'estil i el color de la vora.|El dibujo tiene que mostrar el grosor, el estilo y el color del borde.", "Les ombres van cap a on diuen els números.|Las sombras van hacia donde dicen los números.", "La targeta trampa no es pot dibuixar: per què?|La tarjeta trampa no se puede dibujar: ¿por qué?"],
        nota: "Deixa aquesta diapositiva projectada durant l'activitat. Al final, pregunta qui ha trobat la targeta trampa i per què no es dibuixa.|Deja esta diapositiva proyectada durante la actividad. Al final, pregunta quién ha encontrado la tarjeta trampa y por qué no se dibuja." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 14, punts: ["Obre la sessió «Vores i ombres».|Abre la sesión «Bordes y sombras».", "Fes la missió, «Descobreix» i el càlcul de l'amplada.|Haz la misión, «Descubre» y el cálculo de la anchura.", "«Caça vores i ombres»: toca «Ara no», és per a casa.|«Caza bordes y sombras»: toca «Ahora no», es para casa.", "Para a la pausa activa.|Para en la pausa activa."],
        nota: "Quan arribin a les cantonades i les ombres, fes servir les diapositives 12, 13 i 14 i la llanterna.|Cuando lleguen a las esquinas y las sombras, usa las diapositivas 12, 13 y 14 y la linterna." },
      { id: 's12', k: 'anim', t: "Cantonades rodones|Esquinas redondas", anim: 'w5radius', x: "<code>border-radius</code>: com més gran, més rodona.|<code>border-radius</code>: cuanto más grande, más redonda.",
        nota: "Pregunta què creuen que passarà amb <code>50%</code> abans que surti a l'animació.|Pregunta qué creen que pasará con <code>50%</code> antes de que salga en la animación." },
      { id: 's13', k: 'anim', t: "Una ombra sota la caixa|Una sombra bajo la caja", anim: 'w5shadow', x: "Dreta, avall, difuminat i color.|Derecha, abajo, difuminado y color.",
        nota: "Encén la llanterna damunt un llibre des de dalt a l'esquerra i fes que vegin que l'ombra va cap a la dreta i avall, com a l'animació.|Enciende la linterna sobre un libro desde arriba a la izquierda y haz que vean que la sombra va hacia la derecha y abajo, como en la animación." },
      { id: 's14', k: 'media', t: "Les ombres suaus queden millor|Las sombras suaves quedan mejor", x: "<code>rgba(0, 0, 0, 0.25)</code>: negre i transparent.|<code>rgba(0, 0, 0, 0.25)</code>: negro y transparente.",
        media: { k: 'web', html: `<div class="dura">Ombra negra i dura</div>\n<div class="suau">Ombra suau</div>`, css: `div {\n  width: 180px;\n  padding: 14px;\n  margin: 20px;\n  background-color: white;\n  border-radius: 12px;\n}\n.dura {\n  box-shadow: 8px 8px 0 black;\n}\n.suau {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);\n}` },
        nota: "Recorda que a la unitat anterior van veure <code>rgb</code>: <code>rgba</code> hi afegeix un quart número, la transparència.|Recuerda que en la unidad anterior vieron <code>rgb</code>: <code>rgba</code> añade un cuarto número, la transparencia." },
      { id: 's15', k: 'repte', t: "Reptes: cantonades, ombra i errors|Retos: esquinas, sombra y errores", timer: 10, punts: ["1. Cantonades rodones a la targeta i a la imatge|1. Esquinas redondas en la tarjeta y en la imagen", "2. Una ombra perquè floti|2. Una sombra para que flote", "3. El Robot Saltador: dos errors|3. El Robot Saltador: dos errores", "4. Troba l'error: la vora que no es veu|4. Encuentra el error: el borde que no se ve"],
        nota: "Al repte de dos errors, recorda'ls que el missatge de sota l'editor els pot ajudar a trobar-ne un.|En el reto de dos errores, recuérdales que el mensaje de debajo del editor les puede ayudar a encontrar uno." },
      { id: 's16', k: 'activitat', t: "Crea: la xapa del club|Crea: la chapa del club", timer: 7, punts: ["Una caixa <code>div</code> amb la classe <code>xapa</code>.|Una caja <code>div</code> con la clase <code>xapa</code>.", "Amplada i alçada iguals i <code>border-radius: 50%</code>.|Anchura y altura iguales y <code>border-radius: 50%</code>.", "Una vora i una ombra.|Un borde y una sombra.", "Truc: <code>text-align: center</code>.|Truco: <code>text-align: center</code>."],
        nota: "Fes una petita exposició de xapes al projector i pregunta quina vora els agrada més i per què.|Haz una pequeña exposición de chapas en el proyector y pregunta qué borde les gusta más y por qué." },
      { id: 's17', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["<code>border</code>: gruix, estil i color.|<code>border</code>: grosor, estilo y color.", "<code>border-radius</code>: cantonades rodones; 50 % = cercle.|<code>border-radius</code>: esquinas redondas; 50 % = círculo.", "<code>box-shadow</code>: dreta, avall, difuminat i color.|<code>box-shadow</code>: derecha, abajo, difuminado y color."],
        nota: "Anuncia el projecte: la setmana vinent, la targeta del seu videojoc. Que pensin el nom, el gènere i de què va.|Anuncia el proyecto: la semana que viene, la tarjeta de su videojuego. Que piensen el nombre, el género y de qué va." },
      { id: 's18', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Per què no es veu <code>border: 2px blue;</code>?|¿Por qué no se ve <code>border: 2px blue;</code>?", "Quin valor fa una caixa rodona?|¿Qué valor hace una caja redonda?"],
        nota: "Anota qui oblida l'estil de la vora: a la sessió 4 serà a la llista de revisió.|Anota quién olvida el estilo del borde: en la sesión 4 estará en la lista de revisión." }
    ],
    print: [
      { id: 'p1', t: "Targetes: dibuixa-ho i endevina-ho|Tarjetas: dibújalo y adivínalo", k: 'targetes',
        intro: "Un paquet per parella, cap per avall. Qui agafa una targeta dibuixa la caixa i l'altre/a endevina el CSS. Compte: n'hi ha una de trampa!|Un paquete por pareja, boca abajo. Quien coge una tarjeta dibuja la caja y el otro/a adivina el CSS. Cuidado: ¡hay una trampa!",
        items: [
          { t: 'border: 4px solid red 🖍️|border: 4px solid red 🖍️', n: 1 },
          { t: 'border: 3px dashed blue 🖍️|border: 3px dashed blue 🖍️', n: 1 },
          { t: 'border: 5px dotted green 🖍️|border: 5px dotted green 🖍️', n: 1 },
          { t: 'border: 6px double orange 🖍️|border: 6px double orange 🖍️', n: 1 },
          { t: 'border-radius: 50% 🖍️|border-radius: 50% 🖍️', n: 1 },
          { t: 'border-radius: 20px 🖍️|border-radius: 20px 🖍️', n: 1 },
          { t: 'box-shadow: 10px 10px 0 black 🖍️|box-shadow: 10px 10px 0 black 🖍️', n: 1 },
          { t: 'box-shadow: 0 8px 16px gray 🖍️|box-shadow: 0 8px 16px gray 🖍️', n: 1 },
          { t: 'border-left: 8px solid purple 🖍️|border-left: 8px solid purple 🖍️', n: 1 },
          { t: 'border-bottom: 4px dashed red 🖍️|border-bottom: 4px dashed red 🖍️', n: 1 },
          { t: 'border: 4px red 🤔|border: 4px red 🤔', n: 1 },
          { t: 'border: 2px solid black; border-radius: 10px 🖍️|border: 2px solid black; border-radius: 10px 🖍️', n: 1 }
        ] },
      { id: 'p2', t: "Fitxa: quant ocupa la caixa?|Ficha: ¿cuánto ocupa la caja?", k: 'fitxa',
        intro: "L'amplada total d'una caixa és la suma de totes les capes: border + padding + width + padding + border.|La anchura total de una caja es la suma de todas las capas: border + padding + width + padding + border.",
        items: [
          { q: "<code>width: 100px; padding: 10px; border: 2px solid red;</code> Quant fa en total?|<code>width: 100px; padding: 10px; border: 2px solid red;</code> ¿Cuánto mide en total?", sol: "2 + 10 + 100 + 10 + 2 = 124px.|2 + 10 + 100 + 10 + 2 = 124px." },
          { q: "<code>width: 200px; padding: 20px; border: 5px solid blue;</code> Quant fa en total?|<code>width: 200px; padding: 20px; border: 5px solid blue;</code> ¿Cuánto mide en total?", sol: "5 + 20 + 200 + 20 + 5 = 250px.|5 + 20 + 200 + 20 + 5 = 250px." },
          { q: "Vull una caixa de 300px en total amb <code>padding: 20px</code> i <code>border: 10px</code>. Quin <code>width</code> li poso?|Quiero una caja de 300px en total con <code>padding: 20px</code> y <code>border: 10px</code>. ¿Qué <code>width</code> le pongo?", sol: "300 − 10 − 20 − 20 − 10 = 240px.|300 − 10 − 20 − 20 − 10 = 240px." },
          { q: "I si a la caixa de l'exercici 3 li poso <code>box-sizing: border-box</code>, quin <code>width</code> hi he d'escriure?|¿Y si a la caja del ejercicio 3 le pongo <code>box-sizing: border-box</code>, qué <code>width</code> tengo que escribir?", sol: "300px: amb border-box, el width ja inclou el padding i el border.|300px: con border-box, el width ya incluye el padding y el border." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: la targeta del videojoc ---------- */
  'w5-4': {
    obj: [
      "L'alumne/a planifica una targeta web amb un esbós en paper on identifica les caixes, els colors i els espais.|El alumno/a planifica una tarjeta web con un boceto en papel donde identifica las cajas, los colores y los espacios.",
      "L'alumne/a escriu l'HTML de la targeta amb un div, una imatge amb alt, un títol i paràgrafs ben tancats.|El alumno/a escribe el HTML de la tarjeta con un div, una imagen con alt, un título y párrafos bien cerrados.",
      "L'alumne/a aplica a la targeta tot el model de caixa: width, padding, margin, border, border-radius i box-shadow.|El alumno/a aplica a la tarjeta todo el modelo de caja: width, padding, margin, border, border-radius y box-shadow.",
      "L'alumne/a revisa la seva targeta (o la d'un company/a) amb criteris de llegibilitat, accessibilitat i mòbil, i hi proposa una millora.|El alumno/a revisa su tarjeta (o la de un compañero/a) con criterios de legibilidad, accesibilidad y móvil, y propone una mejora."
    ],
    comp: [
      "Competència digital (CD3): crear i editar continguts digitals amb HTML i CSS|Competencia digital (CD3): crear y editar contenidos digitales con HTML y CSS",
      "Competència personal i d'aprendre a aprendre: planificar, fer i revisar un projecte|Competencia personal y de aprender a aprender: planificar, hacer y revisar un proyecto",
      "Llengua: escriure un text breu i clar que descrigui un producte|Lengua: escribir un texto breve y claro que describa un producto",
      "Ciutadania digital: accessibilitat (alt, contrast) perquè la web sigui per a tothom|Ciudadanía digital: accesibilidad (alt, contraste) para que la web sea para todo el mundo"
    ],
    vocab: [
      ["Esbós|Boceto", "Un dibuix ràpid en paper per planificar com serà la pàgina.|Un dibujo rápido en papel para planificar cómo será la página."],
      ["Targeta|Tarjeta", "Una caixa amb amplada, espais, vora i ombra que agrupa la informació d'una cosa.|Una caja con anchura, espacios, borde y sombra que agrupa la información de una cosa."],
      ["Contrast|Contraste", "La diferència entre el color de la lletra i el del fons; com més contrast, més llegible.|La diferencia entre el color de la letra y el del fondo; cuanto más contraste, más legible."],
      ["alt|alt", "El text que descriu una imatge per a qui no la pot veure.|El texto que describe una imagen para quien no puede verla."],
      ["Revisar|Revisar", "Mirar el treball amb uns criteris per trobar què es pot millorar.|Mirar el trabajo con unos criterios para encontrar qué se puede mejorar."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la targeta del videojoc»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la tarjeta del videojuego»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La graella «L'esbós de la targeta», una per alumne/a, llapis i colors|La cuadrícula «El boceto de la tarjeta», una por alumno/a, lápiz y colores",
        "La fitxa «Revisió entre companys», una per alumne/a|La ficha «Revisión entre compañeros», una por alumno/a"
      ],
      imprimir: ["Graella: l'esbós de la targeta|Cuadrícula: el boceto de la tarjeta", "Fitxa: revisió entre companys|Ficha: revisión entre compañeros"],
      prep: [
        "Imprimir la graella i la fitxa de revisió per a cada alumne/a.|Imprimir la cuadrícula y la ficha de revisión para cada alumno/a.",
        "Tenir preparada al projector una targeta d'exemple (la de la diapositiva 5) per a qui necessiti un model.|Tener preparada en el proyector una tarjeta de ejemplo (la de la diapositiva 5) para quien necesite un modelo.",
        "Pensar com fareu la galeria final: qui ensenyarà la seva targeta al projector.|Pensar cómo haréis la galería final: quién enseñará su tarjeta en el proyector."
      ]
    },
    plan: [
      { min: 4, t: "Dissabte obre la fira!|¡El sábado abre la feria!", fase: 'inici',
        fa: "Repassa en un minut tot el que saben de les caixes amb la diapositiva 2. Presenta el projecte: cada alumne/a inventa un videojoc i en fa la targeta per a la web de la fira.|Repasa en un minuto todo lo que saben de las cajas con la diapositiva 2. Presenta el proyecto: cada alumno/a inventa un videojuego y hace su tarjeta para la web de la feria.",
        diu: ["Digueu-me una propietat de caixes que hàgim après. I una altra!|Decidme una propiedad de cajas que hayamos aprendido. ¡Y otra!",
          "El videojoc és inventat: el nom, de què va i com es controla, tot és vostre.|El videojuego es inventado: el nombre, de qué va y cómo se controla, todo es vuestro."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 6, t: "Com és una bona targeta|Cómo es una buena tarjeta", fase: 'teoria',
        fa: "Mostra la targeta d'exemple primer sense CSS i després amb CSS: tot el que ha canviat són caixes. Acaba amb les bones pràctiques: contrast, alt i mòbil, que seran a la revisió final.|Muestra la tarjeta de ejemplo primero sin CSS y después con CSS: todo lo que ha cambiado son cajas. Termina con las buenas prácticas: contraste, alt y móvil, que estarán en la revisión final.",
        diu: ["Què ha canviat entre les dues versions? Digueu-me les propietats.|¿Qué ha cambiado entre las dos versiones? Decidme las propiedades.",
          "Una targeta preciosa que no es llegeix no serveix de res.|Una tarjeta preciosa que no se lee no sirve de nada."],
        slides: ['s4', 's5', 's6'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "L'esbós de la targeta|El boceto de la tarjeta", fase: 'desconnectat',
        fa: "Cada alumne/a omple la graella: inventa el nom, el gènere i la descripció del videojoc, dibuixa la targeta amb rectangles (imatge, títol, gènere i text) i hi escriu els colors, el padding, la vora i l'ombra que vol. Als últims dos minuts, ensenyen l'esbós al company/a del costat.|Cada alumno/a rellena la cuadrícula: inventa el nombre, el género y la descripción del videojuego, dibuja la tarjeta con rectángulos (imagen, título, género y texto) y escribe los colores, el padding, el borde y la sombra que quiere. En los últimos dos minutos, enseñan el boceto al compañero/a de al lado.",
        diu: ["Primer les caixes, després els detalls.|Primero las cajas, después los detalles.",
          "Quin color de lletra hi posareu perquè es llegeixi bé sobre aquest fons?|¿Qué color de letra pondréis para que se lea bien sobre este fondo?",
          "Quina imatge de la llista fareu servir?|¿Qué imagen de la lista usaréis?"],
        slides: ['s7', 's8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 14, t: "Construïm la targeta pas a pas|Construimos la tarjeta paso a paso", fase: 'ordinador',
        fa: "Els alumnes obren la sessió i fan els quatre passos guiats (HTML, caixa, vores i etiqueta), el «Troba l'error» i la vista prèvia. Al pas «L'esbós de la targeta», que toquin «Ho hem fet!»: ja el tenen en paper. Fes la pausa activa tots junts quan la majoria hi arribi.|Los alumnos abren la sesión y hacen los cuatro pasos guiados (HTML, caja, bordes y etiqueta), el «Encuentra el error» y la vista previa. En el paso «El boceto de la tarjeta», que toquen «¡Lo hemos hecho!»: ya lo tienen en papel. Haced la pausa activa todos juntos cuando la mayoría llegue.",
        diu: ["Els passos guiats són de la targeta del Coet Lunar; la vostra ve després.|Los pasos guiados son de la tarjeta del Coet Lunar; la vuestra viene después.",
          "Si una comprovació no es marca, llegiu-la a poc a poc: què us demana exactament?|Si una comprobación no se marca, leedla despacio: ¿qué os pide exactamente?"],
        slides: ['s9', 's10'], app: "De «Recorda» fins a la vista prèvia de «Nivell 1»: el repàs, la missió, «Descobreix», «L'esbós de la targeta» (ja fet), ordenar els passos, els quatre passos del Coet Lunar, la pausa activa i el «Troba l'error».|De «Recuerda» hasta la vista previa de «Nivell 1»: el repaso, la misión, «Descubre», «El boceto de la tarjeta» (ya hecho), ordenar los pasos, los cuatro pasos del Coet Lunar, la pausa activa y el «Encuentra el error».", org: "Individual|Individual" },
      { min: 14, t: "Crea: la targeta del meu videojoc|Crea: la tarjeta de mi videojuego", fase: 'crea',
        fa: "Cada alumne/a fa la targeta del seu videojoc seguint el seu esbós. Pots deixar projectada la targeta d'exemple. Passa per les taules i, en lloc de corregir, pregunta: on és el padding a l'esbós? Està a la targeta?|Cada alumno/a hace la tarjeta de su videojuego siguiendo su boceto. Puedes dejar proyectada la tarjeta de ejemplo. Pasa por las mesas y, en lugar de corregir, pregunta: ¿dónde está el padding en el boceto? ¿Está en la tarjeta?",
        diu: ["Mireu l'esbós: el codi ha de fer el que vau dibuixar.|Mirad el boceto: el código tiene que hacer lo que dibujasteis.",
          "Les comprovacions us diuen què falta, però el disseny és vostre.|Las comprobaciones os dicen qué falta, pero el diseño es vuestro.",
          "Abans de desar, mireu-la al mòbil i a l'ordinador.|Antes de guardar, miradla en el móvil y en el ordenador."],
        slides: ['s11'], app: "Pas «Crea»: La targeta del meu videojoc.|Paso «Crea»: La tarjeta de mi videojuego.", org: "Individual|Individual" },
      { min: 8, t: "Revisió entre companys i galeria|Revisión entre compañeros y galería", fase: 'crea',
        fa: "Per parelles, cadascú s'asseu a l'ordinador del company/a, mira la seva targeta i omple la fitxa de revisió; després respon la revisió de l'app. L'autor/a llegeix els comentaris i fa un canvi petit. Acaba amb una galeria: tres o quatre targetes al projector.|Por parejas, cada uno se sienta en el ordenador del compañero/a, mira su tarjeta y rellena la ficha de revisión; después responde la revisión de la app. El autor/a lee los comentarios y hace un cambio pequeño. Termina con una galería: tres o cuatro tarjetas en el proyector.",
        diu: ["Digueu primer una cosa que us agradi i després una cosa per millorar.|Decid primero una cosa que os guste y después una cosa para mejorar.",
          "La revisió és per ajudar, no per posar nota.|La revisión es para ayudar, no para poner nota."],
        slides: ['s12', 's13'], app: "Pas «Revisa la targeta».|Paso «Revisa la tarjeta».", org: "Per parelles i després tot el grup|Por parejas y después todo el grupo" },
      { min: 4, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Celebra les targetes de la fira i repassa les idees de la unitat. Deixa que responguin les preguntes finals i fes el tiquet de sortida. Anuncia la unitat següent: posar les targetes una al costat de l'altra.|Celebra las tarjetas de la feria y repasa las ideas de la unidad. Deja que respondan las preguntas finales y haz el ticket de salida. Anuncia la unidad siguiente: poner las tarjetas una al lado de la otra.",
        diu: ["Quina capa separa les targetes de la fira?|¿Qué capa separa las tarjetas de la feria?",
          "Per què és important l'alt de la imatge?|¿Por qué es importante el alt de la imagen?"],
        slides: ['s14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Comença pel CSS i es perd provant colors sense tenir l'HTML acabat.|Empieza por el CSS y se pierde probando colores sin tener el HTML terminado.",
        "Recorda-li l'ordre de l'activitat d'ordenar els passos: primer el contingut i l'estructura, després l'aspecte.|Recuérdale el orden de la actividad de ordenar los pasos: primero el contenido y la estructura, después el aspecto."],
      ["Posa una imatge sense <code>alt</code> o amb un alt que no la descriu («imatge»).|Pone una imagen sin <code>alt</code> o con un alt que no la describe («imagen»).",
        "Demana-li que tanqui els ulls mentre tu llegeixes l'alt: sap què hi ha a la imatge?|Pídele que cierre los ojos mientras tú lees el alt: ¿sabe qué hay en la imagen?"],
      ["Tria colors de lletra i de fons semblants i el text no es llegeix.|Elige colores de letra y de fondo parecidos y el texto no se lee.",
        "Que miri la seva targeta des de lluny o entretancant els ulls: es llegeix? Mostra-li la demo de bones pràctiques.|Que mire su tarjeta desde lejos o entrecerrando los ojos: ¿se lee? Muéstrale la demo de buenas prácticas."],
      ["Posa un <code>width</code> molt gran (més de 400px) i al mòbil la targeta no hi cap.|Pone un <code>width</code> muy grande (más de 400px) y en el móvil la tarjeta no cabe.",
        "Que faci clic al botó 📱 de la vista prèvia. Què passa? Quina amplada hi cabria?|Que haga clic en el botón 📱 de la vista previa. ¿Qué pasa? ¿Qué anchura cabría?"],
      ["Escriu malament el nom d'una propietat (<code>widht</code>, <code>boder</code>) i no entén per què no funciona.|Escribe mal el nombre de una propiedad (<code>widht</code>, <code>boder</code>) y no entiende por qué no funciona.",
        "Recorda-li el «Troba l'error» de la sessió: que llegeixi les propietats lletra a lletra comparant-les amb les de la llista de comprovacions.|Recuérdale el «Encuentra el error» de la sesión: que lea las propiedades letra a letra comparándolas con las de la lista de comprobaciones."]
    ],
    diff: {
      mes: "Fer una segona targeta per a un altre videojoc fent servir les mateixes classes i comprovar que n'hi ha prou amb el CSS que ja tenen. Afegir una llista <code>&lt;ul&gt;</code> amb els controls i donar-li una vora només a dalt.|Hacer una segunda tarjeta para otro videojuego usando las mismas clases y comprobar que basta con el CSS que ya tienen. Añadir una lista <code>&lt;ul&gt;</code> con los controles y darle un borde solo arriba.",
      menys: "Partir de la targeta del Coet Lunar dels passos guiats i canviar-ne el text, la imatge i els colors. Fer servir els fragments de sota l'editor i l'esbós com a llista de control.|Partir de la tarjeta del Coet Lunar de los pasos guiados y cambiar su texto, la imagen y los colores. Usar los fragmentos de debajo del editor y el boceto como lista de control."
    },
    aval: {
      ticket: ["Quina capa de la caixa separa una targeta de les altres?|¿Qué capa de la caja separa una tarjeta de las demás?",
        "Digues una cosa que has revisat a la teva targeta abans de desar-la.|Di una cosa que has revisado en tu tarjeta antes de guardarla."],
      rubric: [
        ["Planificació|Planificación", "L'esbós mostra les caixes, els colors i els espais, i la targeta el segueix.|El boceto muestra las cajas, los colores y los espacios, y la tarjeta lo sigue.", "Fa l'esbós, però li falten detalls o la targeta no s'hi assembla.|Hace el boceto, pero le faltan detalles o la tarjeta no se parece."],
        ["Model de caixa|Modelo de caja", "Fa servir width, padding, margin, border, border-radius i box-shadow amb sentit.|Usa width, padding, margin, border, border-radius y box-shadow con sentido.", "Fa servir la majoria de propietats, però alguna sense saber per què.|Usa la mayoría de propiedades, pero alguna sin saber por qué."],
        ["Revisió i accessibilitat|Revisión y accesibilidad", "La targeta té bon contrast i alt, es veu bé al mòbil i hi aplica una millora de la revisió.|La tarjeta tiene buen contraste y alt, se ve bien en el móvil y aplica una mejora de la revisión.", "Revisa la targeta, però no hi aplica cap canvi o li falta l'alt.|Revisa la tarjeta, pero no aplica ningún cambio o le falta el alt."]
      ]
    },
    casa: "A casa, podeu ensenyar la targeta a la família des de «Projectes» i demanar-los que facin de revisors: es llegeix bé? S'entén de què va el videojoc? Amb els comentaris, podeu fer-ne una versió millorada.|En casa, podéis enseñar la tarjeta a la familia desde «Proyectos» y pedirles que hagan de revisores: ¿se lee bien? ¿Se entiende de qué va el videojuego? Con los comentarios, podéis hacer una versión mejorada.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: la targeta del videojoc|Proyecto: la tarjeta del videojuego", x: "Inventa un videojoc i fes-ne la targeta per a la web de la fira.|Inventa un videojuego y haz su tarjeta para la web de la feria.",
        nota: "Crea expectació: avui acaben la unitat amb un projecte que es desarà al seu portafoli.|Crea expectación: hoy terminan la unidad con un proyecto que se guardará en su portafolio." },
      { id: 's2', k: 'repas', t: "Tot el que saps de les caixes|Todo lo que sabes de las cajas", punts: ["<code>width</code> i <code>margin: 0 auto</code>: mida i centrada.|<code>width</code> y <code>margin: 0 auto</code>: tamaño y centrada.", "<code>padding</code>: el text respira.|<code>padding</code>: el texto respira.", "<code>border</code>: gruix, estil i color.|<code>border</code>: grosor, estilo y color.", "<code>border-radius</code> i <code>box-shadow</code>: cantonades i ombra.|<code>border-radius</code> y <code>box-shadow</code>: esquinas y sombra."],
        nota: "Fes que ho diguin ells abans de mostrar cada punt.|Haz que lo digan ellos antes de mostrar cada punto." },
      { id: 's3', k: 'concepte', t: "Dissabte obre la fira!|¡El sábado abre la feria!", punts: ["Inventa un videojoc: nom, gènere i de què va.|Inventa un videojuego: nombre, género y de qué va.", "Primer, l'esbós en paper.|Primero, el boceto en papel.", "Després, la targeta a l'ordinador.|Después, la tarjeta en el ordenador.", "Al final, revisió i galeria.|Al final, revisión y galería."],
        nota: "Escriu els quatre moments a la pissarra perquè sàpiguen on són durant tota la sessió.|Escribe los cuatro momentos en la pizarra para que sepan dónde están durante toda la sesión." },
      { id: 's4', k: 'media', t: "Les caixes de la targeta|Las cajas de la tarjeta", x: "Primer l'HTML, sense estil.|Primero el HTML, sin estilo.",
        media: { k: 'web', html: `<div class="targeta">\n  <img src="img/tech/web/coet.svg" alt="Un coet que surt cap a l'espai">\n  <h2>Coet Lunar</h2>\n  <p class="genere">Aventura</p>\n  <p>Pilota el coet fins a la Lluna i esquiva els meteorits.</p>\n</div>` },
        nota: "Fes notar que, sense CSS, el contingut ja hi és tot i en ordre: l'HTML és l'estructura.|Haz notar que, sin CSS, el contenido ya está todo y en orden: el HTML es la estructura." },
      { id: 's5', k: 'media', t: "La mateixa targeta, amb estil|La misma tarjeta, con estilo", x: "Tot el que ha canviat són caixes.|Todo lo que ha cambiado son cajas.",
        media: { k: 'web', html: `<div class="targeta">\n  <img src="img/tech/web/coet.svg" alt="Un coet que surt cap a l'espai">\n  <h2>Coet Lunar</h2>\n  <p class="genere">Aventura</p>\n  <p>Pilota el coet fins a la Lluna i esquiva els meteorits.</p>\n</div>`, css: `.targeta {\n  width: 240px;\n  margin: 0 auto;\n  padding: 14px;\n  background-color: #1B2B6B;\n  color: white;\n  border: 4px solid #FFC531;\n  border-radius: 18px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n}\nimg {\n  border-radius: 12px;\n}\n.genere {\n  width: 80px;\n  padding: 3px 10px;\n  background-color: #E5489A;\n  border-radius: 20px;\n}` },
        nota: "Recorre el CSS línia a línia i pregunta a quina sessió van aprendre cada propietat.|Recorre el CSS línea a línea y pregunta en qué sesión aprendieron cada propiedad." },
      { id: 's6', k: 'concepte', t: "Bones pràctiques|Buenas prácticas", punts: ["Contrast: lletra fosca sobre fons clar, o a l'inrevés.|Contraste: letra oscura sobre fondo claro, o al revés.", "Totes les imatges amb un <code>alt</code> que les descrigui.|Todas las imágenes con un <code>alt</code> que las describa.", "Una amplada que hi capi al mòbil (fins a uns 320px).|Una anchura que quepa en el móvil (hasta unos 320px).", "Text curt i clar: de què va i com es controla.|Texto corto y claro: de qué va y cómo se controla."],
        nota: "Aquests quatre punts són els de la revisió final: deixa'ls escrits a la pissarra.|Estos cuatro puntos son los de la revisión final: déjalos escritos en la pizarra." },
      { id: 's7', k: 'activitat', t: "L'esbós de la targeta|El boceto de la tarjeta", timer: 10, punts: ["Inventa el nom, el gènere i la descripció.|Inventa el nombre, el género y la descripción.", "Dibuixa les caixes amb rectangles.|Dibuja las cajas con rectángulos.", "Escriu-hi els colors i els espais.|Escribe los colores y los espacios.", "Ensenya-ho al company/a del costat.|Enséñalo al compañero/a de al lado."],
        nota: "Si algú no sap quin videojoc inventar, proposa-li que barregi dues coses: un drac i un castell, un robot i l'espai…|Si alguien no sabe qué videojuego inventar, proponle que mezcle dos cosas: un dragón y un castillo, un robot y el espacio…" },
      { id: 's8', k: 'activitat', t: "Què ha de tenir l'esbós?|¿Qué tiene que tener el boceto?", punts: ["La imatge: coet, drac, castell, robot, planeta, consola…|La imagen: coet, drac, castell, robot, planeta, consola…", "El títol, el gènere i el text.|El título, el género y el texto.", "Els colors del fons, de la lletra i de la vora.|Los colores del fondo, de la letra y del borde.", "On hi ha padding, la vora, les cantonades i l'ombra.|Dónde hay padding, el borde, las esquinas y la sombra."],
        nota: "Deixa-la projectada mentre dibuixen. Els noms de les imatges són els fitxers de <code>img/tech/web/</code>.|Déjala proyectada mientras dibujan. Los nombres de las imágenes son los archivos de <code>img/tech/web/</code>." },
      { id: 's9', k: 'activitat', t: "Construïm la targeta pas a pas|Construimos la tarjeta paso a paso", timer: 14, punts: ["Pas 1: l'HTML (imatge, títol i dos paràgrafs).|Paso 1: el HTML (imagen, título y dos párrafos).", "Pas 2: la caixa (width, margin, padding i fons).|Paso 2: la caja (width, margin, padding y fondo).", "Pas 3: vora, cantonades i ombra.|Paso 3: borde, esquinas y sombra.", "Pas 4: l'etiqueta del gènere.|Paso 4: la etiqueta del género."],
        nota: "Recorda que al pas «L'esbós de la targeta» han de tocar «Ho hem fet!». Feu la pausa activa junts a meitat del bloc.|Recuerda que en el paso «El boceto de la tarjeta» tienen que tocar «¡Lo hemos hecho!». Haced la pausa activa juntos a mitad del bloque." },
      { id: 's10', k: 'concepte', t: "Revisa el codi|Revisa el código", code: `.targeta {\n  widht: 250px;     ✗\n  border: 4px gold; ✗\n  padding: 10px, 20px; ✗\n  width: 250px;     ✓\n}`,
        punts: ["Una lletra canviada i el navegador ignora la línia.|Una letra cambiada y el navegador ignora la línea.", "La vora necessita l'estil.|El borde necesita el estilo.", "Els valors se separen amb espais.|Los valores se separan con espacios."],
        nota: "Són els errors de tota la unitat. Fes-los servir com a llista per revisar la targeta abans de desar-la.|Son los errores de toda la unidad. Úsalos como lista para revisar la tarjeta antes de guardarla." },
      { id: 's11', k: 'repte', t: "Crea: la targeta del meu videojoc|Crea: la tarjeta de mi videojuego", timer: 14, punts: ["Imatge amb alt, títol i dos paràgrafs.|Imagen con alt, título y dos párrafos.", "Amplada, padding i centrada.|Anchura, padding y centrada.", "Vora, cantonades rodones i ombra.|Borde, esquinas redondas y sombra.", "Bon contrast i es veu bé al mòbil.|Buen contraste y se ve bien en el móvil."],
        nota: "Passa per les taules amb l'esbós de cada alumne/a a la mà: pregunta en lloc de corregir.|Pasa por las mesas con el boceto de cada alumno/a en la mano: pregunta en lugar de corregir." },
      { id: 's12', k: 'activitat', t: "Revisió entre companys|Revisión entre compañeros", timer: 5, punts: ["Seu a l'ordinador del company/a.|Siéntate en el ordenador del compañero/a.", "Mira la targeta al mòbil i a l'ordinador.|Mira la tarjeta en el móvil y en el ordenador.", "Omple la fitxa i la revisió de l'app.|Rellena la ficha y la revisión de la app.", "Primer una cosa bona, després una millora.|Primero una cosa buena, después una mejora."],
        nota: "Insisteix en el to amable dels comentaris. L'autor/a té un minut per aplicar-ne un.|Insiste en el tono amable de los comentarios. El autor/a tiene un minuto para aplicar uno." },
      { id: 's13', k: 'concepte', t: "Galeria de la fira|Galería de la feria", punts: ["Tres o quatre targetes al projector.|Tres o cuatro tarjetas en el proyector.", "L'autor/a explica el seu videojoc en una frase.|El autor/a explica su videojuego en una frase.", "El grup diu quina propietat de caixes hi veu.|El grupo dice qué propiedad de cajas ve."],
        nota: "Tria targetes diferents entre si per mostrar que, amb les mateixes propietats, cada disseny és únic.|Elige tarjetas diferentes entre sí para mostrar que, con las mismas propiedades, cada diseño es único." },
      { id: 's14', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["Tot és una caixa: contingut, padding, border i margin.|Todo es una caja: contenido, padding, border y margin.", "width, padding i margin per a la mida i els espais.|width, padding y margin para el tamaño y los espacios.", "border, border-radius i box-shadow per a l'aspecte.|border, border-radius y box-shadow para el aspecto.", "Planificar, fer i revisar.|Planificar, hacer y revisar."],
        nota: "Anuncia la unitat següent: aprendran a posar les targetes una al costat de l'altra i a fer graelles.|Anuncia la unidad siguiente: aprenderán a poner las tarjetas una al lado de la otra y a hacer cuadrículas." },
      { id: 's15', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quina capa separa una targeta de les altres?|¿Qué capa separa una tarjeta de las demás?", "Què has revisat a la teva targeta abans de desar-la?|¿Qué has revisado en tu tarjeta antes de guardarla?"],
        nota: "Recull les fitxes de revisió: et serviran per valorar el criteri «Revisió i accessibilitat» de la rúbrica.|Recoge las fichas de revisión: te servirán para valorar el criterio «Revisión y accesibilidad» de la rúbrica." }
    ],
    print: [
      { id: 'p1', t: "Graella: l'esbós de la targeta|Cuadrícula: el boceto de la tarjeta", k: 'graella', w: 8, h: 10,
        intro: "Dibuixa la targeta del teu videojoc amb rectangles: un de gran per a la targeta i, a dins, la imatge, el títol, el gènere i el text. Escriu-hi els colors i els espais.|Dibuja la tarjeta de tu videojuego con rectángulos: uno grande para la tarjeta y, dentro, la imagen, el título, el género y el texto. Escribe los colores y los espacios.",
        legend: [['🧩', 'La targeta (div)|La tarjeta (div)'], ['🔎', 'La imatge (amb alt)|La imagen (con alt)'], ['📖', 'El títol (h2)|El título (h2)'], ['✏️', 'El gènere i el text (p)|El género y el texto (p)'], ['📏', 'Padding i margin|Padding y margin'], ['🖍️', 'Vora, cantonades i ombra|Borde, esquinas y sombra']],
        items: [
          { q: "Nom del videojoc i gènere:|Nombre del videojuego y género:" },
          { q: "De què va i com es controla (una o dues frases):|De qué va y cómo se controla (una o dos frases):", big: true },
          { q: "Colors (fons, lletra, vora) i CSS que faràs servir:|Colores (fondo, letra, borde) y CSS que usarás:" }
        ] },
      { id: 'p2', t: "Fitxa: revisió entre companys|Ficha: revisión entre compañeros", k: 'fitxa',
        intro: "Mira la targeta del company/a al mòbil i a l'ordinador. Respon amb sinceritat i amabilitat: primer una cosa bona, després una millora.|Mira la tarjeta del compañero/a en el móvil y en el ordenador. Responde con sinceridad y amabilidad: primero una cosa buena, después una mejora.",
        items: [
          { q: "El text es llegeix bé? Hi ha prou contrast entre la lletra i el fons?|¿El texto se lee bien? ¿Hay suficiente contraste entre la letra y el fondo?", sol: "Sí, si la lletra és fosca sobre un fons clar (o a l'inrevés) i es llegeix des de lluny.|Sí, si la letra es oscura sobre un fondo claro (o al revés) y se lee desde lejos." },
          { q: "La imatge té un alt que la descriu? Escriu-lo aquí.|¿La imagen tiene un alt que la describe? Escríbelo aquí.", sol: "Un alt bo descriu la imatge, per exemple «Un coet que surt cap a l'espai».|Un buen alt describe la imagen, por ejemplo «Un cohete que sale hacia el espacio»." },
          { q: "La targeta té padding, vora, cantonades rodones i ombra? Quines?|¿La tarjeta tiene padding, borde, esquinas redondas y sombra? ¿Cuáles?", sol: "Cal comprovar les quatre a la vista prèvia i al CSS.|Hay que comprobar las cuatro en la vista previa y en el CSS." },
          { q: "Es veu bé al mòbil, sense sortir de la pantalla?|¿Se ve bien en el móvil, sin salirse de la pantalla?", sol: "Sí, si l'amplada és de 320px o menys.|Sí, si la anchura es de 320px o menos." },
          { q: "Una cosa que m'agrada de la targeta:|Una cosa que me gusta de la tarjeta:", sol: "Resposta oberta.|Respuesta abierta." },
          { q: "Una millora que proposo:|Una mejora que propongo:", sol: "Resposta oberta.|Respuesta abierta." }
        ] }
    ]
  }
});

/* ---------- Guia completa (unitat 5): la sessió en breu, idees clau, coneixements previs, preguntes que faran, què fer si
   alguna cosa falla, seguretat i benestar, per anar més enllà i connexions ---------- */
Object.entries({
  'w5-1': {
    intro: "L'alumnat descobreix el secret del disseny web: al navegador, tot element és una caixa rectangular, encara que no es vegi. Ho comprova pintant el fons dels elements amb background-color, agrupa títol i text dins d'un &lt;div&gt; amb una classe (com els ous a la capsa) i coneix les quatre capes de cada caixa, de dins cap a fora: contingut, padding, border i margin, amb l'exemple d'un quadre amb paspartú i marc. També aprèn a donar amplada amb width, en px (fixa) i en % (relativa a l'espai), i a no oblidar mai la unitat. És la base de tota la unitat i del projecte de la targeta del videojoc.|El alumnado descubre el secreto del diseño web: en el navegador, todo elemento es una caja rectangular, aunque no se vea. Lo comprueba pintando el fondo de los elementos con background-color, agrupa título y texto dentro de un &lt;div&gt; con una clase (como los huevos en la caja) y conoce las cuatro capas de cada caja, de dentro hacia fuera: contenido, padding, border y margin, con el ejemplo de un cuadro con paspartú y marco. También aprende a dar anchura con width, en px (fija) y en % (relativa al espacio), y a no olvidar nunca la unidad. Es la base de toda la unidad y del proyecto de la tarjeta del videojuego.",
    claus: [
      "Cada element és una caixa rectangular: amb background-color la fem visible.|Cada elemento es una caja rectangular: con background-color la hacemos visible.",
      "&lt;div&gt; és una caixa per agrupar; amb una classe (class=&quot;targeta&quot;) li donem estil.|&lt;div&gt; es una caja para agrupar; con una clase (class=&quot;targeta&quot;) le damos estilo.",
      "Quatre capes, de dins cap a fora: contingut, padding, border i margin.|Cuatro capas, de dentro hacia fuera: contenido, padding, border y margin.",
      "width en px és fixa; en % depèn de l'espai que hi ha. Sense unitat (width: 300;) no fa res.|width en px es fija; en % depende del espacio que hay. Sin unidad (width: 300;) no hace nada."
    ],
    prev: [
      "Regles de CSS, colors i classes (unitat 4).|Reglas de CSS, colores y clases (unidad 4).",
      "Etiquetes que s'obren i es tanquen ben niuades (unitat 2).|Etiquetas que se abren y se cierran bien anidadas (unidad 2).",
      "Saber què és un percentatge (50 % = la meitat).|Saber qué es un porcentaje (50 % = la mitad)."
    ],
    faq: [
      ["Si tot són caixes, per què no les veig?|Si todo son cajas, ¿por qué no las veo?", "Perquè per defecte són transparents i sense vora. Amb un color de fons o una vora es fan visibles. Els dissenyadors ho fan sovint per entendre una pàgina.|Porque por defecto son transparentes y sin borde. Con un color de fondo o un borde se hacen visibles. Los diseñadores lo hacen a menudo para entender una página."],
      ["Per a què serveix un &lt;div&gt; si no es veu?|¿Para qué sirve un &lt;div&gt; si no se ve?", "Per agrupar coses i tractar-les com una sola caixa: donar-los un fons, una amplada o moure-les juntes. Sense estil, un &lt;div&gt; no canvia res.|Para agrupar cosas y tratarlas como una sola caja: darles un fondo, una anchura o moverlas juntas. Sin estilo, un &lt;div&gt; no cambia nada."],
      ["Per què no posem height a les caixes?|¿Por qué no ponemos height a las cajas?", "Si fixes l'alçada i el text creix (o el mòbil és estret), el text surt de la caixa. Millor que l'alçada la decideixi el contingut.|Si fijas la altura y el texto crece (o el móvil es estrecho), el texto sale de la caja. Mejor que la altura la decida el contenido."],
      ["Quan faig servir px i quan %?|¿Cuándo uso px y cuándo %?", "px per a coses que han de fer sempre el mateix (una icona, una vora); % perquè s'adapti a la pantalla. Proveu els botons Mòbil i Ordinador de la vista prèvia per veure la diferència.|px para cosas que tienen que medir siempre lo mismo (un icono, un borde); % para que se adapte a la pantalla. Probad los botones Móvil y Ordenador de la vista previa para ver la diferencia."],
      ["La Fira de Videojocs és de veritat?|¿La Feria de Videojuegos es de verdad?", "És una fira inventada de l'escola del poble: els videojocs i els equips també. Al projecte de la unitat cadascú inventarà el seu.|Es una feria inventada de la escuela del pueblo: los videojuegos y los equipos también. En el proyecto de la unidad cada uno inventará el suyo."]
    ],
    tec: [
      ["La caixa en % no canvia entre Mòbil i Ordinador.|La caja en % no cambia entre Móvil y Ordenador.", "Sí que canvia: el % és de l'espai disponible. Al mòbil, la pàgina fa 375 píxels d'amplada; a l'ordinador, 960. Una caixa del 80 % ocupa la mateixa proporció a tots dos, però una de 300px no.|Sí que cambia: el % es del espacio disponible. En el móvil, la página mide 375 píxeles de anchura; en el ordenador, 960. Una caja del 80 % ocupa la misma proporción en los dos, pero una de 300px no."],
      ["La segona targeta queda dins de la primera.|La segunda tarjeta queda dentro de la primera.", "El primer &lt;div&gt; no està tancat abans d'obrir el segon. Que comptin els &lt;div&gt; i els &lt;/div&gt;: n'hi ha d'haver els mateixos.|El primer &lt;div&gt; no está cerrado antes de abrir el segundo. Que cuenten los &lt;div&gt; y los &lt;/div&gt;: tiene que haber los mismos."],
      ["La regla .targeta no s'aplica.|La regla .targeta no se aplica.", "A l'HTML, class=&quot;targeta&quot; (sense punt); al CSS, .targeta (amb punt). Han de tenir el mateix nom exacte.|En el HTML, class=&quot;targeta&quot; (sin punto); en el CSS, .targeta (con punto). Tienen que tener el mismo nombre exacto."]
    ],
    seg: [
      "A l'activitat dels raigs X, es dibuixa sobre el full; si feu servir objectes de l'aula, es tornen al seu lloc.|En la actividad de los rayos X, se dibuja sobre la hoja; si usáis objetos del aula, se devuelven a su sitio.",
      "Els videojocs de la fira són inventats i per a totes les edats: res de violència ni de continguts per a adults.|Los videojuegos de la feria son inventados y para todas las edades: nada de violencia ni de contenidos para adultos.",
      "Pausa activa de la caixa (braços en rodona) entre els reptes.|Pausa activa de la caja (brazos en redondo) entre los retos."
    ],
    extra: [
      "Posar dues caixes &lt;div&gt; amb amplades diferents (40 % i 250px) i comparar-les al mòbil i a l'ordinador.|Poner dos cajas &lt;div&gt; con anchuras diferentes (40 % y 250px) y compararlas en el móvil y en el ordenador.",
      "Fer visibles totes les caixes d'una pàgina de la unitat 2 posant un color de fons a cada etiqueta.|Hacer visibles todas las cajas de una página de la unidad 2 poniendo un color de fondo a cada etiqueta.",
      "Dibuixar en paper les caixes d'una web coneguda (on hi ha el menú, el contingut, el peu…).|Dibujar en papel las cajas de una web conocida (dónde está el menú, el contenido, el pie…)."
    ],
    trans: [
      "Sessió següent: padding i margin, l'espai de dins i el de fora.|Sesión siguiente: padding y margin, el espacio de dentro y el de fuera.",
      "Matemàtiques: els percentatges i les mesures en píxels.|Matemáticas: los porcentajes y las medidas en píxeles.",
      "Educació visual i plàstica: l'enquadrament i el marc d'una obra.|Educación visual y plástica: el encuadre y el marco de una obra."
    ]
  },
  'w5-2': {
    intro: "L'alumnat aprèn a donar espai a les caixes: el padding és l'espai de dins (entre el contingut i la vora, amb el color de fons) i el margin, el de fora (separa la caixa de les altres, sempre transparent). Practica amb un sol valor, amb dos (dalt i baix, costats) i amb quatre seguint l'ordre del rellotge: dalt, dreta, baix, esquerra. També aprèn el truc per centrar una caixa amb amplada: margin: 0 auto. A l'activitat sense pantalla, l'alumnat fa de «persones caixa» davant de la pissarra: s'apropen o s'allunyen segons el padding i el margin que diu el navegador. La sessió acaba amb el tauler d'avisos de la fira.|El alumnado aprende a dar espacio a las cajas: el padding es el espacio de dentro (entre el contenido y el borde, con el color de fondo) y el margin, el de fuera (separa la caja de las demás, siempre transparente). Practica con un solo valor, con dos (arriba y abajo, lados) y con cuatro siguiendo el orden del reloj: arriba, derecha, abajo, izquierda. También aprende el truco para centrar una caja con anchura: margin: 0 auto. En la actividad sin pantalla, el alumnado hace de «personas caja» delante de la pizarra: se acercan o se alejan según el padding y el margin que dice el navegador. La sesión termina con el tablón de avisos de la feria.",
    claus: [
      "padding: espai de dins, amb el color de fons; margin: espai de fora, transparent.|padding: espacio de dentro, con el color de fondo; margin: espacio de fuera, transparente.",
      "Un valor per als quatre costats; dos valors: dalt/baix i costats.|Un valor para los cuatro lados; dos valores: arriba/abajo y lados.",
      "Quatre valors en l'ordre del rellotge: dalt, dreta, baix, esquerra (margin: 5px 10px 15px 20px).|Cuatro valores en el orden del reloj: arriba, derecha, abajo, izquierda (margin: 5px 10px 15px 20px).",
      "margin: 0 auto centra una caixa que té amplada (width).|margin: 0 auto centra una caja que tiene anchura (width)."
    ],
    prev: [
      "Les capes de la caixa i width (sessió anterior).|Las capas de la caja y width (sesión anterior).",
      "Les unitats px i % i les classes de CSS.|Las unidades px y % y las clases de CSS.",
      "Llegir un rellotge d'agulles (l'ordre dels quatre costats).|Leer un reloj de agujas (el orden de los cuatro lados)."
    ],
    faq: [
      ["Per què el margin no té color?|¿Por qué el margin no tiene color?", "Perquè és l'espai de fora de la caixa: és transparent i hi veus el fons del que hi ha darrere. El color de fons de la caixa arriba fins a la vora (inclou el padding).|Porque es el espacio de fuera de la caja: es transparente y ves el fondo de lo que hay detrás. El color de fondo de la caja llega hasta el borde (incluye el padding)."],
      ["Per què auto centra la caixa?|¿Por qué auto centra la caja?", "Amb auto als costats, el navegador reparteix l'espai que sobra a parts iguals a l'esquerra i a la dreta. Si la caixa no té amplada, ocupa tota la fila i no sobra res per repartir.|Con auto a los lados, el navegador reparte el espacio que sobra a partes iguales a la izquierda y a la derecha. Si la caja no tiene anchura, ocupa toda la fila y no sobra nada para repartir."],
      ["Puc posar padding només a un costat?|¿Puedo poner padding solo a un lado?", "Sí: padding-top, padding-right, padding-bottom i padding-left (igual amb margin). O amb quatre valors, posant 0 als costats que no en vols.|Sí: padding-top, padding-right, padding-bottom y padding-left (igual con margin). O con cuatro valores, poniendo 0 en los lados que no quieres."],
      ["Per què dues caixes amb margin: 20px no queden a 40px?|¿Por qué dos cajas con margin: 20px no quedan a 40px?", "Els marges de dalt i de baix de dues caixes seguides es fusionen: queda el més gran (20px). Els dels costats sí que se sumen.|Los márgenes de arriba y de abajo de dos cajas seguidas se fusionan: queda el más grande (20px). Los de los lados sí que se suman."],
      ["Es poden fer marges negatius?|¿Se pueden hacer márgenes negativos?", "Sí, i acosten o superposen caixes, però costen de controlar. En aquest curs no els farem servir.|Sí, y acercan o superponen cajas, pero cuestan de controlar. En este curso no los usaremos."]
    ],
    tec: [
      ["El padding no es nota.|El padding no se nota.", "Si la caixa no té color de fons ni vora, el padding no es veu (però hi és). Poseu-hi un background-color per veure'l.|Si la caja no tiene color de fondo ni borde, el padding no se ve (pero está). Ponedle un background-color para verlo."],
      ["La caixa no es centra amb margin: 0 auto.|La caja no se centra con margin: 0 auto.", "Li falta width (i una amplada més petita que la pàgina). Sense amplada, la caixa ocupa tota la fila.|Le falta width (y una anchura más pequeña que la página). Sin anchura, la caja ocupa toda la fila."],
      ["Amb dos valors, el padding surt al revés.|Con dos valores, el padding sale al revés.", "El primer valor és per a dalt i baix i el segon per als costats: padding: 10px 30px vol dir 10 a dalt i baix i 30 als costats.|El primer valor es para arriba y abajo y el segundo para los lados: padding: 10px 30px quiere decir 10 arriba y abajo y 30 a los lados."]
    ],
    seg: [
      "Persones caixa: deixar espai lliure davant de la pissarra, caminar a poc a poc i sense tocar-se.|Personas caja: dejar espacio libre delante de la pizarra, caminar despacio y sin tocarse.",
      "Qui no vulgui sortir davant pot fer de navegador i dir les regles.|Quien no quiera salir delante puede hacer de navegador y decir las reglas.",
      "Pausa activa del rellotge (dalt, dreta, baix, esquerra) abans dels reptes de quatre valors.|Pausa activa del reloj (arriba, derecha, abajo, izquierda) antes de los retos de cuatro valores."
    ],
    extra: [
      "Fer una caixa amb marges diferents a cada costat amb quatre valors i explicar-los en veu alta.|Hacer una caja con márgenes diferentes en cada lado con cuatro valores y explicarlos en voz alta.",
      "Fer tres avisos centrats amb amplades diferents (60 %, 300px i 80 %).|Hacer tres avisos centrados con anchuras diferentes (60 %, 300px y 80 %).",
      "Descobrir els marges que es fusionen: dues caixes amb margin 20px i 30px, quant queda entre elles?|Descubrir los márgenes que se fusionan: dos cajas con margin 20px y 30px, ¿cuánto queda entre ellas?"
    ],
    trans: [
      "Sessió següent: vores, cantonades rodones i ombres per fer targetes de col·leccionista.|Sesión siguiente: bordes, esquinas redondeadas y sombras para hacer tarjetas de coleccionista.",
      "Matemàtiques: l'ordre en sentit horari i el repartiment a parts iguals.|Matemáticas: el orden en sentido horario y el reparto a partes iguales.",
      "Educació visual i plàstica: l'espai en blanc fa que un disseny respiri.|Educación visual y plástica: el espacio en blanco hace que un diseño respire."
    ]
  },
  'w5-3': {
    intro: "L'alumnat fa que les caixes semblin targetes de col·leccionista: posa vores amb gruix, estil i color (i descobreix que sense l'estil la vora no es veu), arrodoneix les cantonades amb border-radius (amb 50 % una caixa quadrada es fa rodona) i afegeix ombres amb box-shadow (dreta, avall, difuminat i color), que queden millor suaus. També calcula quant ocupa de debò una caixa: width + padding + border a cada costat. A l'activitat sense pantalla, una persona descriu una caixa amb CSS i l'altra la dibuixa. Acaben fent la xapa rodona del club de videojocs.|El alumnado hace que las cajas parezcan tarjetas de coleccionista: pone bordes con grosor, estilo y color (y descubre que sin el estilo el borde no se ve), redondea las esquinas con border-radius (con 50 % una caja cuadrada se vuelve redonda) y añade sombras con box-shadow (derecha, abajo, difuminado y color), que quedan mejor suaves. También calcula cuánto ocupa de verdad una caja: width + padding + border en cada lado. En la actividad sin pantalla, una persona describe una caja con CSS y la otra la dibuja. Terminan haciendo la chapa redonda del club de videojuegos.",
    claus: [
      "border: gruix estil color (border: 3px solid navy;). Sense l'estil (solid, dashed, dotted, double), no es veu.|border: grosor estilo color (border: 3px solid navy;). Sin el estilo (solid, dashed, dotted, double), no se ve.",
      "border-radius arrodoneix les cantonades; 50 % en una caixa quadrada fa un cercle.|border-radius redondea las esquinas; 50 % en una caja cuadrada hace un círculo.",
      "box-shadow: dreta avall difuminat color; les ombres suaus (gris clar, molt difuminat) queden més naturals.|box-shadow: derecha abajo difuminado color; las sombras suaves (gris claro, muy difuminado) quedan más naturales.",
      "Amplada total = width + padding × 2 + border × 2 (si no es canvia box-sizing).|Anchura total = width + padding × 2 + border × 2 (si no se cambia box-sizing)."
    ],
    prev: [
      "padding, margin i width (sessions 1 i 2).|padding, margin y width (sesiones 1 y 2).",
      "Colors amb nom i en hex (unitat 4).|Colores con nombre y en hex (unidad 4).",
      "Sumar i multiplicar per 2 mentalment.|Sumar y multiplicar por 2 mentalmente."
    ],
    faq: [
      ["Per què la vora necessita l'estil?|¿Por qué el borde necesita el estilo?", "Perquè l'estil per defecte és none (cap vora). Encara que diguis el gruix i el color, sense solid, dashed… el navegador no en dibuixa cap.|Porque el estilo por defecto es none (ningún borde). Aunque digas el grosor y el color, sin solid, dashed… el navegador no dibuja ninguno."],
      ["Com faig una ombra cap a dalt o cap a l'esquerra?|¿Cómo hago una sombra hacia arriba o hacia la izquierda?", "Amb números negatius: box-shadow: -6px -6px 10px gray; posa l'ombra a l'esquerra i a dalt.|Con números negativos: box-shadow: -6px -6px 10px gray; pone la sombra a la izquierda y arriba."],
      ["Puc fer una caixa que no compti el padding a l'amplada?|¿Puedo hacer una caja que no cuente el padding en la anchura?", "Sí, amb box-sizing: border-box: aleshores width ja inclou el padding i la vora. Molts professionals el posen a totes les caixes.|Sí, con box-sizing: border-box: entonces width ya incluye el padding y el borde. Muchos profesionales lo ponen en todas las cajas."],
      ["Una imatge també pot ser rodona?|¿Una imagen también puede ser redonda?", "Sí: una imatge quadrada amb border-radius: 50 % es veu rodona, com les fotos de perfil.|Sí: una imagen cuadrada con border-radius: 50 % se ve redonda, como las fotos de perfil."]
    ],
    tec: [
      ["La vora no surt.|El borde no sale.", "Falta l'estil (solid, dashed…) o està mal escrit (solit, dash). La barra de comprovacions avisa si la vora no té els tres valors.|Falta el estilo (solid, dashed…) o está mal escrito (solit, dash). La barra de comprobaciones avisa si el borde no tiene los tres valores."],
      ["La xapa no queda rodona del tot.|La chapa no queda redonda del todo.", "Amb 50 % surt un cercle només si la caixa és quadrada: width i height iguals. Si no, surt un oval.|Con 50 % sale un círculo solo si la caja es cuadrada: width y height iguales. Si no, sale un óvalo."],
      ["L'ombra no es veu.|La sombra no se ve.", "Potser el color és gairebé igual que el fons o el difuminat és enorme. Proveu box-shadow: 0 6px 14px gray; per començar.|Quizá el color es casi igual que el fondo o el difuminado es enorme. Probad box-shadow: 0 6px 14px gray; para empezar."]
    ],
    seg: [
      "Amb la llanterna o el llum del mòbil, no enfoqueu mai els ulls de ningú.|Con la linterna o la luz del móvil, no enfoquéis nunca los ojos de nadie.",
      "Dibuixa-ho i endevina-ho: qui descriu ho fa a poc a poc; ningú no es riu del dibuix de l'altre.|Dibújalo y adivínalo: quien describe lo hace despacio; nadie se ríe del dibujo del otro.",
      "Pausa activa de l'ombra entre la teoria i els reptes.|Pausa activa de la sombra entre la teoría y los retos."
    ],
    extra: [
      "Fer la xapa amb una vora double i una ombra de color (per exemple, rgba o un color de la paleta).|Hacer la chapa con un borde double y una sombra de color (por ejemplo, rgba o un color de la paleta).",
      "Calcular l'amplada total de tres caixes diferents i comprovar-ho amb l'eina d'inspeccionar del navegador (amb el professor/a).|Calcular la anchura total de tres cajas diferentes y comprobarlo con la herramienta de inspeccionar del navegador (con el profesor/a).",
      "Provar box-sizing: border-box i explicar què canvia en els comptes.|Probar box-sizing: border-box y explicar qué cambia en las cuentas."
    ],
    trans: [
      "Sessió següent: el projecte de la unitat, la targeta del videojoc amb tot el model de caixa.|Sesión siguiente: el proyecto de la unidad, la tarjeta del videojuego con todo el modelo de caja.",
      "Ciències: la llum i les ombres (d'on ve la llum, cap on cau l'ombra).|Ciencias: la luz y las sombras (de dónde viene la luz, hacia dónde cae la sombra).",
      "Matemàtiques: el càlcul de l'amplada total (sumes i dobles).|Matemáticas: el cálculo de la anchura total (sumas y dobles)."
    ]
  },
  'w5-4': {
    intro: "Sessió de projecte que tanca la unitat: cada alumne/a inventa un videojoc (nom, gènere i de què va) i en fa la targeta per a la Fira de Videojocs, com les dels dissenyadors web. Primer en dibuixa l'esbós en paper (quines caixes hi ha, una dins de l'altra, i quins espais tenen); després la construeix pas a pas (l'HTML, la caixa amb amplada i centrada, el toc de col·leccionista amb vora, cantonades i ombra, i l'etiqueta del gènere); i al final la revisa amb criteris de llegibilitat, accessibilitat (alt) i mòbil, i hi proposa una millora. Valoreu que facin servir el model de caixa amb sentit, no només que la targeta sigui bonica.|Sesión de proyecto que cierra la unidad: cada alumno/a inventa un videojuego (nombre, género y de qué va) y hace su tarjeta para la Feria de Videojuegos, como las de los diseñadores web. Primero dibuja el boceto en papel (qué cajas hay, una dentro de la otra, y qué espacios tienen); después la construye paso a paso (el HTML, la caja con anchura y centrada, el toque de coleccionista con borde, esquinas y sombra, y la etiqueta del género); y al final la revisa con criterios de legibilidad, accesibilidad (alt) y móvil, y propone una mejora. Valorad que usen el modelo de caja con sentido, no solo que la tarjeta sea bonita.",
    claus: [
      "L'esbós decideix les caixes (targeta → imatge, títol, gènere, descripció) i els espais.|El boceto decide las cajas (tarjeta → imagen, título, género, descripción) y los espacios.",
      "Una targeta és una caixa amb width, centrada (margin auto), amb padding, vora, cantonades rodones i ombra.|Una tarjeta es una caja con width, centrada (margin auto), con padding, borde, esquinas redondeadas y sombra.",
      "Una etiqueta (com el gènere) és una caixa petita amb fons, padding i border-radius gran.|Una etiqueta (como el género) es una caja pequeña con fondo, padding y border-radius grande.",
      "Revisar: es llegeix bé, la imatge té alt i es veu bé al mòbil i a l'ordinador.|Revisar: se lee bien, la imagen tiene alt y se ve bien en el móvil y en el ordenador."
    ],
    prev: [
      "Tot el model de caixa: width, padding, margin, border, border-radius i box-shadow (sessions 1-3).|Todo el modelo de caja: width, padding, margin, border, border-radius y box-shadow (sesiones 1-3).",
      "Imatges amb alt i classes de CSS (unitats 3 i 4).|Imágenes con alt y clases de CSS (unidades 3 y 4).",
      "Inventar i explicar una idea en poques paraules (el nom i la descripció del videojoc).|Inventar y explicar una idea en pocas palabras (el nombre y la descripción del videojuego)."
    ],
    faq: [
      ["El videojoc ha d'existir?|¿El videojuego tiene que existir?", "No: és un videojoc inventat per vosaltres. Només en fem la targeta de presentació (no el programem). Si a Creadors en vau fer un, podeu fer-ne la targeta.|No: es un videojuego inventado por vosotros. Solo hacemos su tarjeta de presentación (no lo programamos). Si en Creadores hicisteis uno, podéis hacer su tarjeta."],
      ["Puc posar la imatge d'un videojoc famós?|¿Puedo poner la imagen de un videojuego famoso?", "No: és d'una empresa i té drets d'autor. Feu servir les imatges de Numi (consola, coet, drac, robot…) o un dibuix vostre escanejat amb el professor/a.|No: es de una empresa y tiene derechos de autor. Usad las imágenes de Numi (consola, cohete, dragón, robot…) o un dibujo vuestro escaneado con el profesor/a."],
      ["Com faig que la targeta sigui més estreta al mòbil?|¿Cómo hago que la tarjeta sea más estrecha en el móvil?", "Amb width en % (per exemple, 90 %) o amb max-width: 320px i width: 100 %. A la unitat 7 ho farem amb @media.|Con width en % (por ejemplo, 90 %) o con max-width: 320px y width: 100 %. En la unidad 7 lo haremos con @media."],
      ["Quantes regles ha de tenir el CSS?|¿Cuántas reglas tiene que tener el CSS?", "Les que calguin perquè la targeta tingui tot el model de caixa: normalment .targeta, img, h2 i .genere. Les comprovacions diuen què falta.|Las que hagan falta para que la tarjeta tenga todo el modelo de caja: normalmente .targeta, img, h2 y .genere. Las comprobaciones dicen qué falta."]
    ],
    tec: [
      ["La targeta ocupa tota la fila i no es centra.|La tarjeta ocupa toda la fila y no se centra.", "Falta width o està mal escrit (widht). Amb width i margin: 0 auto ja es centra.|Falta width o está mal escrito (widht). Con width y margin: 0 auto ya se centra."],
      ["L'etiqueta del gènere s'estira per tota la targeta.|La etiqueta del género se estira por toda la tarjeta.", "Un &lt;p&gt; ocupa tota la fila; doneu a .genere una amplada petita (width) o display: inline-block.|Un &lt;p&gt; ocupa toda la fila; dad a .genere una anchura pequeña (width) o display: inline-block."],
      ["La revisió entre companys no surt al portafoli.|La revisión entre compañeros no sale en el portafolio.", "Les respostes de la revisió es desen amb la sessió; el portafoli guarda la targeta. Comenteu-les en veu alta amb el company/a.|Las respuestas de la revisión se guardan con la sesión; el portafolio guarda la tarjeta. Comentadlas en voz alta con el compañero/a."]
    ],
    seg: [
      "Videojocs inventats per a totes les edats; a la galeria, comentaris amables i concrets.|Videojuegos inventados para todas las edades; en la galería, comentarios amables y concretos.",
      "No feu servir imatges de videojocs comercials ni noms de marques registrades a la targeta.|No uséis imágenes de videojuegos comerciales ni nombres de marcas registradas en la tarjeta.",
      "Pausa activa de la caixa amb padding abans del projecte final.|Pausa activa de la caja con padding antes del proyecto final."
    ],
    extra: [
      "Fer una segona targeta per a un altre videojoc i posar-les una al costat de l'altra (a la unitat 6 ho farem amb flex).|Hacer una segunda tarjeta para otro videojuego y ponerlas una al lado de la otra (en la unidad 6 lo haremos con flex).",
      "Afegir una llista de controls (tecles) amb una vora de punts i cantonades rodones.|Añadir una lista de controles (teclas) con un borde de puntos y esquinas redondeadas.",
      "Fer una versió fosca de la targeta (fons fosc i text clar) amb bon contrast.|Hacer una versión oscura de la tarjeta (fondo oscuro y texto claro) con buen contraste."
    ],
    trans: [
      "Unitat 6: flexbox i graelles per posar moltes targetes en files i columnes.|Unidad 6: flexbox y rejillas para poner muchas tarjetas en filas y columnas.",
      "Tech Creadors: si heu fet el curs, la targeta pot presentar el vostre videojoc de veritat.|Tech Creadores: si habéis hecho el curso, la tarjeta puede presentar vuestro videojuego de verdad.",
      "Llengua: el text publicitari breu (nom, eslògan i descripció).|Lengua: el texto publicitario breve (nombre, eslogan y descripción)."
    ]
  }
}).forEach(([id, g]) => Object.assign(TGUIDE[id], g));

/* les demos de codi de les diapositives, també en castellà (diccionari a la unitat 4) */
if (typeof webTr === 'function' && typeof WEB_TR45 !== 'undefined') ['w5-1', 'w5-2', 'w5-3', 'w5-4'].forEach(id => TGUIDE[id] && webTr(TGUIDE[id], WEB_TR45));
