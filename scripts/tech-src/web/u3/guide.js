/* ===== Numi Tech · guia del professorat · Tech Web · unitat 3 «Imatges i enllaços» =====
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1'].
   Diapositives «media»: el codi i la pàgina que fa (TMEDIA.web); el camp «code» mostra codi gran per llegir junts.
   El codi de les demos es veu en la llengua de la presentació: C('català', 'castellano'). */
Object.assign(TGUIDE, (() => {
  const C = (ca, es) => ({ __bi: [ca, es] });
  const bi = o => { if (Array.isArray(o)) { o.forEach(bi); return o; }
    if (o && typeof o === 'object') for (const k of Object.keys(o)) { const v = o[k];
      if (v && v.__bi) { const [ca, es] = v.__bi; Object.defineProperty(o, k, { get: () => (typeof L === 'function' ? L(ca, es) : ca), enumerable: true, configurable: true }); } else bi(v); }
    return o; };

  return bi({
    /* ---------- Sessió 1 · Imatges ---------- */
    'w3-1': {
      obj: [
        "L'alumne/a explica què és un atribut i escriu l'etiqueta img amb els atributs src, alt i width.|El alumno/a explica qué es un atributo y escribe la etiqueta img con los atributos src, alt y width.",
        "L'alumne/a descriu el camí d'una imatge: el navegador llegeix src, demana el fitxer al servidor i el dibuixa.|El alumno/a describe el camino de una imagen: el navegador lee src, pide el archivo al servidor y lo dibuja.",
        "L'alumne/a explica per què l'alt és important (lectors de pantalla, imatges que no carreguen) i n'escriu un de bo.|El alumno/a explica por qué el alt es importante (lectores de pantalla, imágenes que no cargan) y escribe uno bueno.",
        "L'alumne/a troba i arregla errors típics d'una imatge: el nom del fitxer, un atribut mal escrit o un tancament de més.|El alumno/a encuentra y arregla errores típicos de una imagen: el nombre del archivo, un atributo mal escrito o un &lt;/img&gt; de más."
      ],
      comp: [
        "Competència digital (CD3): crear contingut digital amb HTML, inserint imatges amb els seus atributs|Competencia digital (CD3): crear contenido digital con HTML, insertando imágenes con sus atributos",
        "Ciutadania digital: accessibilitat, pensar en les persones que fan servir lectors de pantalla|Ciudadanía digital: accesibilidad, pensar en las personas que usan lectores de pantalla",
        "Llengua: descriure una imatge amb precisió i en poques paraules|Lengua: describir una imagen con precisión y en pocas palabras",
        "Pensament computacional: llegir codi de manera exacta i depurar errors|Pensamiento computacional: leer código de manera exacta y depurar errores"
      ],
      vocab: [
        ["Atribut|Atributo", "Informació extra dins de l'etiqueta d'obertura: nom=\"valor\".|Información extra dentro de la etiqueta de apertura: nombre=\"valor\"."],
        ["src|src", "L'atribut que diu on és el fitxer de la imatge (carpeta i nom).|El atributo que dice dónde está el archivo de la imagen (carpeta y nombre)."],
        ["alt|alt", "El text que descriu la imatge per a qui no la pot veure.|El texto que describe la imagen para quien no puede verla."],
        ["Lector de pantalla|Lector de pantalla", "Programa que llegeix en veu alta el que hi ha a la pantalla.|Programa que lee en voz alta lo que hay en la pantalla."],
        ["Etiqueta buida|Etiqueta vacía", "Etiqueta que no té res a dins i no es tanca, com &lt;img&gt;.|Etiqueta que no tiene nada dentro y no se cierra, como &lt;img&gt;."],
        ["Píxel|Píxel", "Cadascun dels puntets de llum que formen la pantalla.|Cada uno de los puntitos de luz que forman la pantalla."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Imatges»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Imágenes»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Fulls en blanc, llapis i colors per a l'activitat del lector de pantalla|Hojas en blanco, lápices y colores para la actividad del lector de pantalla"
        ],
        imprimir: ["Targetes d'imatges per descriure|Tarjetas de imágenes para describir", "Fitxa: escriu la imatge|Ficha: escribe la imagen"],
        prep: [
          "Imprimir i retallar un paquet de targetes d'imatges per cada grup de 3 (si es plastifiquen, serveixen per a altres cursos).|Imprimir y recortar un paquete de tarjetas de imágenes por cada grupo de 3 (si se plastifican, sirven para otros cursos).",
          "Provar la sessió a l'ordinador de l'aula per comprovar que les imatges de la vista prèvia es veuen bé.|Probar la sesión en el ordenador del aula para comprobar que las imágenes de la vista previa se ven bien.",
          "Si l'ordinador té lector de pantalla, preparar-lo per fer-ne una demostració curta (no és imprescindible).|Si el ordenador tiene lector de pantalla, prepararlo para hacer una demostración corta (no es imprescindible)."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: l'Animalari de l'illa|Bienvenida: el Animalario de la isla", fase: 'inici',
          fa: "Presenta la unitat: el club de naturalistes de l'illa vol una web amb fitxes d'animals, l'Animalari. Pregunta com sabrien què hi ha en una foto sense veure-la i recull respostes sense corregir. Remarca que avui posarem imatges pensant en tothom.|Presenta la unidad: el club de naturalistas de la isla quiere una web con fichas de animales, el Animalario. Pregunta cómo sabrían qué hay en una foto sin verla y recoge respuestas sin corregir. Remarca que hoy pondremos imágenes pensando en todo el mundo.",
          diu: ["Imagineu que no veieu la pantalla. Com sabríeu què hi ha en una foto?|Imaginad que no veis la pantalla. ¿Cómo sabríais qué hay en una foto?", "Avui posarem imatges a les fitxes, i ho farem perquè les entengui tothom.|Hoy pondremos imágenes en las fichas, y lo haremos para que las entienda todo el mundo."],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "L'etiqueta <img> i els seus atributs|La etiqueta <img> y sus atributos", fase: 'teoria',
          fa: "Explica què és un atribut amb l'animació i escriu a la pissarra l'etiqueta &lt;img&gt; per parts. Recorda la unitat 1 per explicar d'on surt la imatge: el navegador la demana al servidor. Després treballa l'alt: per què serveix i com és un alt bo. Acaba amb la mida (width) i la demo de les dues tortugues.|Explica qué es un atributo con la animación y escribe en la pizarra la etiqueta &lt;img&gt; por partes. Recuerda la unidad 1 para explicar de dónde sale la imagen: el navegador la pide al servidor. Después trabaja el alt: para qué sirve y cómo es un alt bueno. Termina con el tamaño (width) y la demo de las dos tortugas.",
          diu: ["L'etiqueta &lt;img&gt; no es tanca: no té res a dins. Tota la informació va als atributs.|La etiqueta &lt;img&gt; no se cierra: no tiene nada dentro. Toda la información va en los atributos.", "Recordeu el viatge d'una pàgina? Les imatges fan el mateix viatge, una a una.|¿Recordáis el viaje de una página? Las imágenes hacen el mismo viaje, una a una.", "Quin d'aquests tres alt ajudaria més una persona que no veu la imatge?|¿Cuál de estos tres alt ayudaría más a una persona que no ve la imagen?"],
          slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "El lector de pantalla humà|El lector de pantalla humano", fase: 'desconnectat',
          fa: "Fes grups de 3: descriptor/a, lector/a i dibuixant. El descriptor/a agafa una targeta sense ensenyar-la i escriu un alt d'una sola frase en un paper. El lector/a el llegeix en veu alta, com un lector de pantalla, i el dibuixant dibuixa el que s'imagina. Compareu el dibuix amb la targeta, milloreu l'alt i canvieu els papers. Al final, cada grup llegeix el seu millor alt.|Haz grupos de 3: descriptor/a, lector/a y dibujante. El descriptor/a coge una tarjeta sin enseñarla y escribe un alt de una sola frase en un papel. El lector/a lo lee en voz alta, como un lector de pantalla, y el dibujante dibuja lo que se imagina. Comparad el dibujo con la tarjeta, mejorad el alt y cambiad los papeles. Al final, cada grupo lee su mejor alt.",
          diu: ["El lector/a només pot llegir el que hi ha escrit: ni gestos ni pistes!|El lector/a solo puede leer lo que hay escrito: ¡ni gestos ni pistas!", "Què faltava a l'alt perquè el dibuix s'assemblés a la targeta?|¿Qué faltaba en el alt para que el dibujo se pareciera a la tarjeta?", "Un bon alt és curt: no cal explicar cada pèl del gat.|Un buen alt es corto: no hace falta explicar cada pelo del gato."],
          slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
        { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa. Al pas «L'alt en veu alta», que toquin «Ho hem fet!»: l'acabem de fer a classe. Passeja i fixa't en qui tria opcions a l'atzar a «Quina vista prèvia?»: demana-li que llegeixi el codi en veu alta, de dalt a baix.|Cada alumno/a avanza a su ritmo hasta la pausa. En el paso «El alt en voz alta», que toquen «¡Lo hemos hecho!»: lo acabamos de hacer en clase. Pasea y fíjate en quién elige opciones al azar en «¿Qué vista previa?»: pídele que lea el código en voz alta, de arriba abajo.",
          diu: ["Llegeix el codi de dalt a baix: què es dibuixa primer?|Lee el código de arriba abajo: ¿qué se dibuja primero?", "La imatge no surt? Llegeix el nom del fitxer lletra a lletra.|¿La imagen no sale? Lee el nombre del archivo letra a letra."],
          slides: ['s12'], app: "Del recorda fins a «Investiga»: la pregunta del paràgraf, les dues històries, «Descobreix», ordenar què fa el navegador, «L'alt en veu alta» (ja fet), «Quina vista prèvia?», la imatge que no surt i el millor alt de la tortuga.|Del recuerda hasta «Investiga»: la pregunta del párrafo, las dos historias, «Descubre», ordenar qué hace el navegador, «El alt en voz alta» (ya hecho), «¿Qué vista previa?», la imagen que no sale y el mejor alt de la tortuga.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: imatges de veritat|Retos: imágenes de verdad", fase: 'ordinador',
          fa: "Fes la pausa activa tots junts. Després escriu amb la classe la imatge de la diapositiva 13, demanant a cada alumne/a una peça (l'etiqueta, el src, l'alt, la mida), i deixa'ls fer els quatre reptes. Recorda que la llista de comprovacions es va marcant mentre escriuen.|Haced la pausa activa todos juntos. Después escribe con la clase la imagen de la diapositiva 13, pidiendo a cada alumno/a una pieza (la etiqueta, el src, el alt, el tamaño), y deja que hagan los cuatro retos. Recuerda que la lista de comprobaciones se va marcando mientras escriben.",
          diu: ["Quina és la primera peça? I la segona? Anem a poc a poc.|¿Cuál es la primera pieza? ¿Y la segunda? Vamos poco a poco.", "Mira l'avís taronja de sota l'editor: et diu en quina línia hi ha el problema.|Mira el aviso naranja de debajo del editor: te dice en qué línea está el problema.", "Si ajudes algú, fes-li preguntes: no li escriguis el codi.|Si ayudas a alguien, hazle preguntas: no le escribas el código."],
          slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: l'alt de la tortuga, la imatge de la guineu, l'ocell amb dos errors i la mini galeria del bosc.|«Pausa activa» y los cuatro retos: el alt de la tortuga, la imagen del zorro, el pájaro con dos errores y la mini galería del bosque.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: el meu animal preferit|Crea: mi animal preferido", fase: 'crea',
          fa: "Cada alumne/a fa la pàgina del seu animal preferit amb les imatges de la llista. Quan la tinguin, en parelles es llegeixen l'alt en veu alta, sense mirar la pantalla del company/a, per veure si s'imaginen la imatge.|Cada alumno/a hace la página de su animal preferido con las imágenes de la lista. Cuando la tengan, por parejas se leen el alt en voz alta, sin mirar la pantalla del compañero/a, para ver si se imaginan la imagen.",
          diu: ["Llegeix-me el teu alt amb els ulls tancats: m'imagino l'animal?|Léeme tu alt con los ojos cerrados: ¿me imagino el animal?", "Escriu al paràgraf una cosa que sàpigues de veritat de l'animal.|Escribe en el párrafo algo que sepas de verdad del animal."],
          slides: ['s15'], app: "Pas «Crea»: El meu animal preferit (es desa a «Projectes»).|Paso «Crea»: Mi animal preferido (se guarda en «Proyectos»).", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
          diu: ["Qui em diu per a qui és important l'alt?|¿Quién me dice para quién es importante el alt?", "Per què &lt;img&gt; no es tanca?|¿Por qué &lt;img&gt; no se cierra?"],
          slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Tanca la imatge amb &lt;/img&gt;, com si fos un paràgraf.|Cierra la imagen con &lt;/img&gt;, como si fuera un párrafo.",
          "Pregunta-li què hi ha a dins de la imatge, entre l'obertura i el tancament. Si no hi ha res, cal tancar-la?|Pregúntale qué hay dentro de la imagen, entre la apertura y el cierre. Si no hay nada, ¿hace falta cerrarla?"],
        ["Escriu malament el nom del fitxer o la carpeta (ocel.svg, img/tech/gat.svg) i la imatge surt trencada.|Escribe mal el nombre del archivo o la carpeta (ocel.svg, img/tech/gat.svg) y la imagen sale rota.",
          "Que compari la seva ruta amb la del comentari, lletra a lletra, amb el dit damunt de la pantalla.|Que compare su ruta con la del comentario, letra a letra, con el dedo sobre la pantalla."],
        ["Escriu alt=\"imatge\" o el nom del fitxer per passar la comprovació.|Escribe alt=\"imagen\" o el nombre del archivo para pasar la comprobación.",
          "Tanca els ulls i demana-li que t'hi llegeixi l'alt. Què t'imagines? Què li hauria de dir perquè t'imaginessis l'animal?|Cierra los ojos y pídele que te lea el alt. ¿Qué te imaginas? ¿Qué te tendría que decir para que te imaginaras el animal?"],
        ["Oblida les cometes o un espai entre atributs (src=\"gat.svg\"alt=\"…\").|Olvida las comillas o un espacio entre atributos (src=\"gat.svg\"alt=\"…\").",
          "Mostra-li els colors de l'editor: si un valor no surt verd, alguna cosa falla. Que compari amb l'exemple de la diapositiva.|Muéstrale los colores del editor: si un valor no sale verde, algo falla. Que compare con el ejemplo de la diapositiva."],
        ["Posa width i height alhora amb números inventats i el dibuix queda aixafat.|Pone width y height a la vez con números inventados y el dibujo queda aplastado.",
          "Pregunta-li què passa si només posa l'amplada. Que ho provi i miri la vista prèvia.|Pregúntale qué pasa si solo pone el ancho. Que lo pruebe y mire la vista previa."]
      ],
      diff: {
        mes: "Afegir a la mini galeria tres animals més i, per a cadascun, escriure dos alt diferents i triar el millor amb un company/a. Provar com canvia la pàgina al mòbil i a l'ordinador amb amplades diferents.|Añadir a la mini galería tres animales más y, para cada uno, escribir dos alt diferentes y elegir el mejor con un compañero/a. Probar cómo cambia la página en el móvil y en el ordenador con anchos diferentes.",
        menys: "Tenir la fitxa impresa amb l'etiqueta &lt;img&gt; per parts al costat de l'ordinador i fer servir els botons de fragments de l'editor. Començar pel repte de l'alt de la tortuga, que només demana escriure el text de l'alt.|Tener la ficha impresa con la etiqueta &lt;img&gt; por partes al lado del ordenador y usar los botones de fragmentos del editor. Empezar por el reto del alt de la tortuga, que solo pide escribir el texto del alt."
      },
      aval: {
        ticket: ["Per a qui és important l'alt d'una imatge? Digues-ne dos casos.|¿Para quién es importante el alt de una imagen? Di dos casos.",
          "Què diu l'atribut src? Per què &lt;img&gt; no es tanca?|¿Qué dice el atributo src? ¿Por qué &lt;img&gt; no se cierra?"],
        rubric: [
          ["Etiqueta &lt;img&gt;|Etiqueta &lt;img&gt;", "Escriu &lt;img&gt; amb src, alt i width sense ajuda i sense tancar-la.|Escribe &lt;img&gt; con src, alt y width sin ayuda y sin cerrarla.", "Escriu la imatge copiant l'exemple o amb els fragments, i de vegades hi posa &lt;/img&gt;.|Escribe la imagen copiando el ejemplo o con los fragmentos, y a veces pone &lt;/img&gt;."],
          ["Alt descriptiu|Alt descriptivo", "Els seus alt diuen què es veu, curts i clars.|Sus alt dicen qué se ve, cortos y claros.", "Posa alt, però sovint genèrics («imatge», «gat»).|Pone alt, pero a menudo genéricos («imagen», «gato»)."],
          ["Depuració|Depuración", "Troba sol/a el nom del fitxer mal escrit i el &lt;/img&gt; de més.|Encuentra solo/a el nombre del archivo mal escrito y el &lt;/img&gt; de más.", "Troba els errors amb l'avís de l'editor o amb una pista.|Encuentra los errores con el aviso del editor o con una pista."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «L'alt en veu alta»: una persona descriu una foto de casa en una sola frase i l'altra la dibuixa sense veure-la.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «El alt en voz alta»: una persona describe una foto de casa en una sola frase y la otra la dibuja sin verla.",
      slides: [
        { id: 's1', k: 'portada', t: 'Imatges|Imágenes', x: "Avui posarem imatges a les fitxes de l'Animalari… i ho farem perquè les entengui tothom.|Hoy pondremos imágenes en las fichas del Animalario… y lo haremos para que las entienda todo el mundo.",
          nota: "Presenta la unitat i l'objectiu: al final de la classe, cadascú tindrà la pàgina del seu animal preferit amb imatge.|Presenta la unidad y el objetivo: al final de la clase, cada uno tendrá la página de su animal preferido con imagen." },
        { id: 's2', k: 'pregunta', t: 'I si no veiessis la pantalla?|¿Y si no vieras la pantalla?', x: "Com sabries què hi ha en una foto d'una web?|¿Cómo sabrías qué hay en una foto de una web?",
          nota: "Recull idees sense corregir. Torna-hi quan expliquis l'alt: hi ha programes que llegeixen la web en veu alta.|Recoge ideas sin corregir. Vuelve a ello cuando expliques el alt: hay programas que leen la web en voz alta." },
        { id: 's3', k: 'concepte', t: "L'Animalari de l'illa|El Animalario de la isla", pic: 'img/tech/web/lloro.svg',
          punts: ["El club de naturalistes vol una web amb una fitxa per a cada animal.|El club de naturalistas quiere una web con una ficha para cada animal.", "Avui: imatges. Després: enllaços, fonts i la fitxa completa.|Hoy: imágenes. Después: enlaces, fuentes y la ficha completa.", "Una bona web la pot fer servir tothom.|Una buena web la puede usar todo el mundo."],
          nota: "Explica el fil de la unitat: cada sessió afegirà una peça a l'Animalari, fins a la fitxa completa de la sessió 4.|Explica el hilo de la unidad: cada sesión añadirá una pieza al Animalario, hasta la ficha completa de la sesión 4." },
        { id: 's4', k: 'anim', t: 'Els atributs|Los atributos', anim: 'w3attr', x: "Informació extra dins de l'etiqueta: nom=\"valor\".|Información extra dentro de la etiqueta: nombre=\"valor\".",
          nota: "Fes notar les tres parts: l'etiqueta, el nom de l'atribut i el valor entre cometes. Els colors són els mateixos de l'editor.|Haz notar las tres partes: la etiqueta, el nombre del atributo y el valor entre comillas. Los colores son los mismos del editor." },
        { id: 's5', k: 'concepte', t: "L'etiqueta <img>|La etiqueta <img>", code: C(`<img src="img/tech/web/gat.svg" alt="Un gat taronja">`, `<img src="img/tech/web/gat.svg" alt="Un gato naranja">`),
          punts: ["src: on és el fitxer (carpeta i nom).|src: dónde está el archivo (carpeta y nombre).", "alt: què hi ha a la imatge.|alt: qué hay en la imagen.", "No es tanca: és una etiqueta buida.|No se cierra: es una etiqueta vacía."],
          nota: "Escriu-la a la pissarra per parts i pregunta què hi ha a dins de la imatge. Si no hi ha res, no cal tancar-la.|Escríbela en la pizarra por partes y pregunta qué hay dentro de la imagen. Si no hay nada, no hace falta cerrarla." },
        { id: 's6', k: 'anim', t: "D'on surt la imatge?|¿De dónde sale la imagen?", anim: 'w3src', x: "El navegador llegeix src, demana el fitxer al servidor i el dibuixa.|El navegador lee src, pide el archivo al servidor y lo dibuja.",
          nota: "Connecta-ho amb el viatge d'una pàgina de la unitat 1: cada imatge és un fitxer més que fa el viatge.|Conéctalo con el viaje de una página de la unidad 1: cada imagen es un archivo más que hace el viaje." },
        { id: 's7', k: 'anim', t: "Per què l'alt importa|Por qué el alt importa", anim: 'w3alt', x: "El llegeixen els lectors de pantalla i surt quan la imatge no carrega.|Lo leen los lectores de pantalla y sale cuando la imagen no carga.",
          nota: "Si tens un lector de pantalla a l'ordinador, fes-ne una demostració de 30 segons. Explica que moltes persones cegues naveguen així cada dia.|Si tienes un lector de pantalla en el ordenador, haz una demostración de 30 segundos. Explica que muchas personas ciegas navegan así cada día." },
        { id: 's8', k: 'pregunta', t: 'Quin alt és millor?|¿Qué alt es mejor?', x: "Per a la foto d'un gat que dorm al sol:|Para la foto de un gato que duerme al sol:",
          punts: ["A. alt=\"imatge\"|A. alt=\"imagen\"", "B. alt=\"gat.jpg\"|B. alt=\"gato.jpg\"", "C. alt=\"Un gat taronja dormint al sol\"|C. alt=\"Un gato naranja durmiendo al sol\""],
          nota: "Resposta: C. Pregunta per què A i B no ajuden: no diuen res del que es veu. Recorda que un adorn sense informació porta alt=\"\".|Respuesta: C. Pregunta por qué A y B no ayudan: no dicen nada de lo que se ve. Recuerda que un adorno sin información lleva alt=\"\"." },
        { id: 's9', k: 'media', t: 'La mida: width|El tamaño: width', x: "Només l'amplada: l'alçada s'ajusta sola.|Solo el ancho: la altura se ajusta sola.",
          media: { k: 'web', html: C(`<img src="img/tech/web/tortuga.svg" alt="Una tortuga petita" width="60">
<img src="img/tech/web/tortuga.svg" alt="Una tortuga gran" width="150">`, `<img src="img/tech/web/tortuga.svg" alt="Una tortuga pequeña" width="60">
<img src="img/tech/web/tortuga.svg" alt="Una tortuga grande" width="150">`) },
          nota: "Pregunta quants píxels creuen que fa d'ample un mòbil (uns 400). Una imatge de 1000 píxels no hi cabria.|Pregunta cuántos píxeles creen que mide de ancho un móvil (unos 400). Una imagen de 1000 píxeles no cabría." },
        { id: 's10', k: 'activitat', t: 'El lector de pantalla humà|El lector de pantalla humano', timer: 12,
          punts: ["Descriptor/a: mira la targeta en secret i escriu un alt d'una frase.|Descriptor/a: mira la tarjeta en secreto y escribe un alt de una frase.", "Lector/a: llegeix l'alt en veu alta, sense afegir res.|Lector/a: lee el alt en voz alta, sin añadir nada.", "Dibuixant: dibuixa el que s'imagina.|Dibujante: dibuja lo que se imagina.", "Compareu, milloreu l'alt i canvieu els papers.|Comparad, mejorad el alt y cambiad los papeles."],
          nota: "Cada grup necessita un paquet de targetes, paper i llapis. Passa pels grups i pregunta què faltava a l'alt quan el dibuix no s'assembla a la targeta.|Cada grupo necesita un paquete de tarjetas, papel y lápiz. Pasa por los grupos y pregunta qué faltaba en el alt cuando el dibujo no se parece a la tarjeta." },
        { id: 's11', k: 'activitat', t: "Les regles d'un bon alt|Las reglas de un buen alt",
          punts: ["Diu què es veu: l'animal, el color, què fa.|Dice qué se ve: el animal, el color, qué hace.", "És curt: una sola frase.|Es corto: una sola frase.", "No comença per «Imatge de…»: el lector ja ho diu.|No empieza por «Imagen de…»: el lector ya lo dice.", "Si és només un adorn, alt=\"\".|Si es solo un adorno, alt=\"\"."],
          nota: "Deixa aquesta diapositiva projectada mentre treballen: és la llista que faran servir per millorar els seus alt.|Deja esta diapositiva proyectada mientras trabajan: es la lista que usarán para mejorar sus alt." },
        { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Imatges».|Abre la sesión «Imágenes».", "Fes la missió, «Descobreix» i «Mans a l'obra».|Haz la misión, «Descubre» y «Manos a la obra».", "A «Quina vista prèvia?», llegeix el codi de dalt a baix.|En «¿Qué vista previa?», lee el código de arriba abajo.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
          nota: "Al pas «L'alt en veu alta», que toquin «Ho hem fet!»: ja l'hem fet a classe.|En el paso «El alt en voz alta», que toquen «¡Lo hemos hecho!»: ya lo hemos hecho en clase." },
        { id: 's13', k: 'media', t: 'Escrivim junts una imatge|Escribimos juntos una imagen', x: "Quines peces necessita la imatge de la guineu?|¿Qué piezas necesita la imagen del zorro?",
          media: { k: 'web', html: C(`<h1>La guineu</h1>
<img src="img/tech/web/guineu.svg" alt="Una guineu taronja asseguda" width="200">`, `<h1>El zorro</h1>
<img src="img/tech/web/guineu.svg" alt="Un zorro naranja sentado" width="200">`) },
          nota: "Abans de mostrar-la, demana les peces en ordre: etiqueta, src, alt i width. Escriu-les a la pissarra i després compara-les amb la diapositiva.|Antes de mostrarla, pide las piezas en orden: etiqueta, src, alt y width. Escríbelas en la pizarra y después compáralas con la diapositiva." },
        { id: 's14', k: 'repte', t: 'Reptes: imatges|Retos: imágenes', timer: 10,
          punts: ["1. L'alt de la tortuga|1. El alt de la tortuga", "2. La imatge de la guineu|2. La imagen del zorro", "3. L'ocell amb dos errors|3. El pájaro con dos errores", "4. La mini galeria del bosc|4. La mini galería del bosque"],
          nota: "Si algú s'encalla al repte 3, pregunta: el nom de l'atribut està ben escrit? I la imatge s'ha de tancar?|Si alguien se atasca en el reto 3, pregunta: ¿el nombre del atributo está bien escrito? ¿Y la imagen se tiene que cerrar?" },
        { id: 's15', k: 'activitat', t: 'Crea: el meu animal preferit|Crea: mi animal preferido', timer: 5, x: "Títol, imatge amb alt i mida, i un paràgraf amb una cosa que en sàpigues.|Título, imagen con alt y tamaño, y un párrafo con algo que sepas.",
          nota: "En parelles, que es llegeixin l'alt amb els ulls tancats. Si el company/a no s'imagina l'animal, cal millorar-lo.|Por parejas, que se lean el alt con los ojos cerrados. Si el compañero/a no se imagina el animal, hay que mejorarlo." },
        { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy',
          punts: ["&lt;img&gt; posa una imatge; src diu on és el fitxer i no es tanca.|&lt;img&gt; pone una imagen; src dice dónde está el archivo y no se cierra.", "L'alt descriu la imatge per a qui no la pot veure.|El alt describe la imagen para quien no puede verla.", "width diu l'amplada en píxels.|width dice el ancho en píxeles."],
          nota: "Torna a la pregunta del principi: ara saben que l'alt és el que explica la imatge a qui no la veu.|Vuelve a la pregunta del principio: ahora saben que el alt es lo que explica la imagen a quien no la ve." },
        { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida',
          punts: ["Per a qui és important l'alt? Digues dos casos.|¿Para quién es importante el alt? Di dos casos.", "Què diu src? Per què &lt;img&gt; no es tanca?|¿Qué dice src? ¿Por qué &lt;img&gt; no se cierra?"],
          nota: "Fes una pregunta a cada alumne/a a la porta i apunta qui encara confon src i alt.|Haz una pregunta a cada alumno/a en la puerta y apunta quién todavía confunde src y alt." }
      ],
      print: [
        { id: 'p1', t: "Targetes d'imatges per descriure|Tarjetas de imágenes para describir", k: 'targetes',
          intro: "Un paquet per grup de 3. El descriptor/a mira la targeta en secret i n'escriu un alt; el dibuixant només sent l'alt.|Un paquete por grupo de 3. El descriptor/a mira la tarjeta en secreto y escribe un alt; el dibujante solo oye el alt.",
          items: [{ t: 'Imatge 1 🐢|Imagen 1 🐢', n: 1 }, { t: 'Imatge 2 🦊|Imagen 2 🦊', n: 1 }, { t: 'Imatge 3 🦉|Imagen 3 🦉', n: 1 }, { t: 'Imatge 4 🐙|Imagen 4 🐙', n: 1 }, { t: 'Imatge 5 🐊|Imagen 5 🐊', n: 1 }, { t: 'Imatge 6 🦅|Imagen 6 🦅', n: 1 },
            { t: 'Imatge 7 🦁|Imagen 7 🦁', n: 1 }, { t: 'Imatge 8 🐰|Imagen 8 🐰', n: 1 }, { t: 'Imatge 9 🐉|Imagen 9 🐉', n: 1 }, { t: 'Imatge 10 🐣|Imagen 10 🐣', n: 1 }, { t: 'Imatge 11 🐭|Imagen 11 🐭', n: 1 }, { t: 'Imatge 12 🐺|Imagen 12 🐺', n: 1 }] },
        { id: 'p2', t: 'Fitxa: escriu la imatge|Ficha: escribe la imagen', k: 'fitxa',
          intro: "Escriu el codi o la resposta a cada exercici. Fes servir les cometes rectes \" \".|Escribe el código o la respuesta en cada ejercicio. Usa las comillas rectas \" \".",
          items: [
            { q: "Escriu la imatge del fitxer gos.svg (carpeta img/tech/web) amb un alt que la descrigui.|Escribe la imagen del archivo gos.svg (carpeta img/tech/web) con un alt que la describa.", sol: "&lt;img src=\"img/tech/web/gos.svg\" alt=\"Un gos marró amb les orelles caigudes\"&gt;|&lt;img src=\"img/tech/web/gos.svg\" alt=\"Un perro marrón con las orejas caídas\"&gt;" },
            { q: "Fes que la imatge anterior faci 150 píxels d'ample. Què hi afegeixes?|Haz que la imagen anterior mida 150 píxeles de ancho. ¿Qué añades?", sol: "L'atribut width=\"150\".|El atributo width=\"150\"." },
            { q: "Troba els dos errors: &lt;img scr=\"gat.svg\" alt=\"Un gat\"&gt;&lt;/img&gt;|Encuentra los dos errores: &lt;img scr=\"gat.svg\" alt=\"Un gato\"&gt;&lt;/img&gt;", sol: "scr ha de ser src, i &lt;img&gt; no es tanca: sobra &lt;/img&gt;.|scr tiene que ser src, y &lt;img&gt; no se cierra: sobra &lt;/img&gt;." },
            { q: "Escriu un bon alt per a la foto d'un ocell blau que canta en una branca.|Escribe un buen alt para la foto de un pájaro azul que canta en una rama.", sol: "Per exemple: «Un ocell blau cantant en una branca».|Por ejemplo: «Un pájaro azul cantando en una rama»." },
            { q: "Digues dues situacions en què l'alt és molt important.|Di dos situaciones en las que el alt es muy importante.", sol: "Quan una persona fa servir un lector de pantalla i quan la imatge no es pot carregar.|Cuando una persona usa un lector de pantalla y cuando la imagen no se puede cargar." }
          ] }
      ]
    },

    /* ---------- Sessió 2 · Enllaços ---------- */
    'w3-2': {
      obj: [
        "L'alumne/a explica què és l'hipertext i escriu enllaços (etiqueta a, atribut href) amb un text que diu on porten.|El alumno/a explica qué es el hipertexto y escribe enlaces (etiqueta a, atributo href) con un texto que dice adónde llevan.",
        "L'alumne/a distingeix un enllaç a una pàgina de la seva web (tortuga.html) d'un enllaç a una altra web (https://…).|El alumno/a distingue un enlace a una página de su web (tortuga.html) de un enlace a otra web (https://…).",
        "L'alumne/a fa un índex amb enllaços interns (#id) que salten a seccions de la mateixa pàgina.|El alumno/a hace un índice con enlaces internos (#id) que saltan a secciones de la misma página.",
        "L'alumne/a troba i arregla enllaços sense tancar i adreces sense https://.|El alumno/a encuentra y arregla enlaces sin cerrar y direcciones sin https://."
      ],
      comp: [
        "Competència digital (CD3): crear pàgines web enllaçades amb HTML|Competencia digital (CD3): crear páginas web enlazadas con HTML",
        "Competència digital (CD1): entendre com s'organitza la informació a la web (pàgines, adreces i enllaços)|Competencia digital (CD1): entender cómo se organiza la información en la web (páginas, direcciones y enlaces)",
        "Ciutadania digital: enllaços accessibles, amb textos que diuen on porten|Ciudadanía digital: enlaces accesibles, con textos que dicen adónde llevan",
        "Pensament computacional: organitzar un conjunt de pàgines com una xarxa|Pensamiento computacional: organizar un conjunto de páginas como una red"
      ],
      vocab: [
        ["Enllaç|Enlace", "Text (o imatge) que, si el toques, et porta a una altra pàgina o a un altre lloc.|Texto (o imagen) que, si lo tocas, te lleva a otra página o a otro sitio."],
        ["Hipertext|Hipertexto", "Text amb enllaços. És la «H» d'HTML.|Texto con enlaces. Es la «H» de HTML."],
        ["href|href", "L'atribut de l'enllaç que diu on porta.|El atributo del enlace que dice adónde lleva."],
        ["Enllaç intern|Enlace interno", "Enllaç que salta a un lloc de la mateixa pàgina: href=\"#nom\".|Enlace que salta a un sitio de la misma página: href=\"#nombre\"."],
        ["id|id", "Nom únic d'un element, perquè un enllaç hi pugui saltar.|Nombre único de un elemento, para que un enlace pueda saltar hasta él."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Enllaços»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Enlaces»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Un cabdell de llana (o cordills) i cinta adhesiva per a la web de la classe|Un ovillo de lana (o cordeles) y cinta adhesiva para la web de la clase"
        ],
        imprimir: ["Pàgines de la web de la classe|Páginas de la web de la clase", "Fitxa: escriu l'enllaç|Ficha: escribe el enlace"],
        prep: [
          "Imprimir un paquet de pàgines per cada grup de 5 o 6 (portada, quatre animals i fonts) i les targetes d'enllaç.|Imprimir un paquete de páginas por cada grupo de 5 o 6 (portada, cuatro animales y fuentes) y las tarjetas de enlace.",
          "Tallar trossos de llana d'uns 2 metres: en calen uns 8 per grup.|Cortar trozos de lana de unos 2 metros: hacen falta unos 8 por grupo.",
          "Provar els reptes a l'ordinador de l'aula, sobretot el de l'índex de la balena.|Probar los retos en el ordenador del aula, sobre todo el del índice de la ballena."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: una illa sense ponts|Bienvenida: una isla sin puentes", fase: 'inici',
          fa: "Repassa l'alt amb una pregunta ràpida. Explica el problema: l'Animalari té pàgines, però no es pot anar d'una a l'altra. Pregunta com arriben ells a una pàgina nova quan naveguen.|Repasa el alt con una pregunta rápida. Explica el problema: el Animalario tiene páginas, pero no se puede ir de una a otra. Pregunta cómo llegan ellos a una página nueva cuando navegan.",
          diu: ["Quan navegueu, com passeu d'una pàgina a una altra?|Cuando navegáis, ¿cómo pasáis de una página a otra?", "Avui construirem els ponts entre les pàgines de l'Animalari.|Hoy construiremos los puentes entre las páginas del Animalario."],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "L'etiqueta <a> i les adreces|La etiqueta <a> y las direcciones", fase: 'teoria',
          fa: "Explica l'hipertext amb l'animació i escriu un enllaç per parts a la pissarra. Compara les tres menes d'adreça: una pàgina de la teva web, una altra web amb https:// i un salt a un id. Acaba amb la pregunta del text de l'enllaç: «clica aquí» o «fitxa de la balena»?|Explica el hipertexto con la animación y escribe un enlace por partes en la pizarra. Compara las tres clases de dirección: una página de tu web, otra web con https:// y un salto a un id. Termina con la pregunta del texto del enlace: ¿«haz clic aquí» o «ficha de la ballena»?",
          diu: ["Quina part de l'enllaç es veu a la pàgina? I quina part no es veu però diu on anem?|¿Qué parte del enlace se ve en la página? ¿Y qué parte no se ve pero dice adónde vamos?", "Si l'adreça no té https://, el navegador la busca dins de la nostra web.|Si la dirección no tiene https://, el navegador la busca dentro de nuestra web.", "Si només llegíssiu els enllaços, sabríeu on porta «clica aquí»?|Si solo leyerais los enlaces, ¿sabríais adónde lleva «haz clic aquí»?"],
          slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "La web de la classe|La web de la clase", fase: 'desconnectat',
          fa: "Fes grups de 5 o 6. Cada alumne/a és una pàgina i enganxa la seva targeta al pit. Amb les targetes d'enllaç, escriuen el text de cada enllaç i el connecten amb un tros de llana fins a la pàgina on porta (la portada a cada animal i cada animal a la portada). Després, un alumne/a de fora «navega»: llegeix un enllaç i segueix la llana. Pregunta si hi ha alguna pàgina perduda, sense cap enllaç que hi porti.|Haz grupos de 5 o 6. Cada alumno/a es una página y se pega su tarjeta en el pecho. Con las tarjetas de enlace, escriben el texto de cada enlace y lo conectan con un trozo de lana hasta la página a la que lleva (la portada a cada animal y cada animal a la portada). Después, un alumno/a de fuera «navega»: lee un enlace y sigue la lana. Pregunta si hay alguna página perdida, sin ningún enlace que lleve a ella.",
          diu: ["Cada fil és un enllaç: va d'un text a una pàgina.|Cada hilo es un enlace: va de un texto a una página.", "Hi ha cap pàgina on no es pugui arribar? Què passaria a internet?|¿Hay alguna página a la que no se pueda llegar? ¿Qué pasaría en internet?", "Mireu quina teranyina heu fet: per això en diem web.|Mirad qué telaraña habéis hecho: por eso la llamamos web."],
          slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 5 o 6|Grupos de 5 o 6" },
        { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
          fa: "Cada alumne/a avança fins a la pausa. Al pas «La web de paper», que toquin «Ho hem fet!» (és com la de la classe). A la pregunta de l'enllaç sense tancar, fes notar que l'error d'una línia afecta tota la resta de la pàgina.|Cada alumno/a avanza hasta la pausa. En el paso «La web de papel», que toquen «¡Lo hemos hecho!» (es como la de la clase). En la pregunta del enlace sin cerrar, haz notar que el error de una línea afecta a todo el resto de la página.",
          diu: ["On comença l'enllaç i on s'acaba? Segueix-ho amb el dit.|¿Dónde empieza el enlace y dónde termina? Síguelo con el dedo.", "Per què tota la resta de la pàgina s'ha tornat blava?|¿Por qué todo el resto de la página se ha vuelto azul?"],
          slides: ['s12'], app: "Del recorda fins a «Investiga»: les dues preguntes de les imatges, la història, «Descobreix», ordenar les peces d'un enllaç, «La web de paper» (ja feta), «Quina vista prèvia?», l'enllaç sense tancar i el millor text d'enllaç.|Del recuerda hasta «Investiga»: las dos preguntas de las imágenes, la historia, «Descubre», ordenar las piezas de un enlace, «La web de papel» (ya hecha), «¿Qué vista previa?», el enlace sin cerrar y el mejor texto de enlace.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: connectem pàgines|Retos: conectamos páginas", fase: 'ordinador',
          fa: "Fes la pausa activa. Després construïu junts l'índex de la diapositiva 13: un alumne/a diu l'id i un altre l'enllaç. Deixa'ls fer els quatre reptes. Avisa que a la vista prèvia els enllaços porten a adreces inventades: si en toquen un, la vista prèvia es buida fins que tornin a escriure.|Haced la pausa activa. Después construid juntos el índice de la diapositiva 13: un alumno/a dice el id y otro el enlace. Deja que hagan los cuatro retos. Avisa de que en la vista previa los enlaces llevan a direcciones inventadas: si tocan uno, la vista previa se vacía hasta que vuelvan a escribir.",
          diu: ["L'id va sense coixinet; l'enllaç, amb coixinet. El nom ha de ser el mateix.|El id va sin almohadilla; el enlace, con almohadilla. El nombre tiene que ser el mismo.", "Llegeix l'avís taronja: quina etiqueta no està tancada?|Lee el aviso naranja: ¿qué etiqueta no está cerrada?"],
          slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: l'enllaç a la web dels ocells, el menú de la portada, l'índex de la balena i els dos errors del pop.|«Pausa activa» y los cuatro retos: el enlace a la web de los pájaros, el menú de la portada, el índice de la ballena y los dos errores del pulpo.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: la fitxa amb índex|Crea: la ficha con índice", fase: 'crea',
          fa: "Cada alumne/a acaba la fitxa del mussol (o la canvia pel seu animal) amb un índex, dues seccions i un enllaç a una altra web. En parelles, es proven l'índex: el company/a llegeix l'enllaç i diu on creu que saltarà.|Cada alumno/a termina la ficha del búho (o la cambia por su animal) con un índice, dos secciones y un enlace a otra web. Por parejas, se prueban el índice: el compañero/a lee el enlace y dice adónde cree que saltará.",
          diu: ["Tria noms curts per als id: sense espais ni accents.|Elige nombres cortos para los id: sin espacios ni acentos.", "El text de l'enllaç diu on porta?|¿El texto del enlace dice adónde lleva?"],
          slides: ['s15'], app: "Pas «Crea»: La fitxa amb índex (es desa a «Projectes»).|Paso «Crea»: La ficha con índice (se guarda en «Proyectos»).", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres menes d'adreça amb el resum i deixa que responguin les preguntes finals. A la porta, fes una pregunta del tiquet a cada alumne/a.|Repasa las tres clases de dirección con el resumen y deja que respondan las preguntas finales. En la puerta, haz una pregunta del ticket a cada alumno/a.",
          diu: ["On porta href=\"#fonts\"? I href=\"fonts.html\"?|¿Adónde lleva href=\"#fuentes\"? ¿Y href=\"fuentes.html\"?", "Per què «clica aquí» no és un bon text d'enllaç?|¿Por qué «haz clic aquí» no es un buen texto de enlace?"],
          slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Oblida el &lt;/a&gt; i tota la resta de la pàgina es converteix en enllaç.|Olvida el &lt;/a&gt; y todo el resto de la página se convierte en enlace.",
          "Que segueixi amb el dit el text blau de la vista prèvia: on s'hauria d'acabar? Allà hi falta el tancament.|Que siga con el dedo el texto azul de la vista previa: ¿dónde debería terminar? Ahí falta el cierre."],
        ["Escriu l'adreça d'una altra web sense https:// (exemple.numi/ocells).|Escribe la dirección de otra web sin https:// (exemple.numi/pajaros).",
          "Pregunta-li com sap el navegador que és una altra web i no un fitxer de la nostra. Recorda les URL de la unitat 1.|Pregúntale cómo sabe el navegador que es otra web y no un archivo de la nuestra. Recuerda las URL de la unidad 1."],
        ["Posa el coixinet a l'id (id=\"#menja\") o el treu de l'enllaç (href=\"menja\").|Pone la almohadilla en el id (id=\"#come\") o la quita del enlace (href=\"come\").",
          "Que llegeixi els dos en veu alta: «l'enllaç va al lloc que es diu menja». El coixinet vol dir «en aquesta pàgina» i només va a l'enllaç.|Que lea los dos en voz alta: «el enlace va al sitio que se llama come». La almohadilla quiere decir «en esta página» y solo va en el enlace."],
        ["Fa servir id amb espais o accents, o el mateix id dues vegades.|Usa id con espacios o acentos, o el mismo id dos veces.",
          "Pregunta-li què passaria si dues seccions es diguessin igual: on hauria de saltar l'enllaç?|Pregúntale qué pasaría si dos secciones se llamaran igual: ¿adónde tendría que saltar el enlace?"],
        ["Escriu «clica aquí» o «aquí» com a text de l'enllaç.|Escribe «haz clic aquí» o «aquí» como texto del enlace.",
          "Tapa la resta de la frase amb la mà i deixa veure només l'enllaç: s'entén on porta?|Tapa el resto de la frase con la mano y deja ver solo el enlace: ¿se entiende adónde lleva?"]
      ],
      diff: {
        mes: "Afegir a la fitxa amb índex un enllaç «Torna a dalt» al final de cada secció (href a l'id del títol) i una tercera secció. Dibuixar en paper el mapa de pàgines de l'Animalari amb totes les fletxes.|Añadir a la ficha con índice un enlace «Vuelve arriba» al final de cada sección (href al id del título) y una tercera sección. Dibujar en papel el mapa de páginas del Animalario con todas las flechas.",
        menys: "Fer servir els botons de fragments de l'editor per inserir l'enllaç sencer i només omplir el href i el text. Tenir la fitxa impresa amb les tres menes d'adreça al costat de l'ordinador.|Usar los botones de fragmentos del editor para insertar el enlace entero y solo rellenar el href y el texto. Tener la ficha impresa con las tres clases de dirección al lado del ordenador."
      },
      aval: {
        ticket: ["On porta href=\"#fonts\"? I href=\"https://exemple.numi/fonts\"?|¿Adónde lleva href=\"#fuentes\"? ¿Y href=\"https://exemple.numi/fuentes\"?",
          "Per què el text d'un enllaç ha de dir on porta?|¿Por qué el texto de un enlace tiene que decir adónde lleva?"],
        rubric: [
          ["Etiqueta &lt;a&gt;|Etiqueta &lt;a&gt;", "Escriu enllaços amb href i text, ben tancats, sense ajuda.|Escribe enlaces con href y texto, bien cerrados, sin ayuda.", "Escriu enllaços amb els fragments i de vegades n'oblida el tancament.|Escribe enlaces con los fragmentos y a veces olvida el cierre."],
          ["Menes d'adreça|Clases de dirección", "Tria bé entre fitxer.html, https:// i #id segons on vol anar.|Elige bien entre archivo.html, https:// y #id según adónde quiere ir.", "Les reconeix, però de vegades oblida el https:// o el coixinet.|Las reconoce, pero a veces olvida el https:// o la almohadilla."],
          ["Enllaços accessibles|Enlaces accesibles", "Els textos dels seus enllaços diuen on porten.|Los textos de sus enlaces dicen adónde llevan.", "Encara fa servir textos com «aquí» o «clica».|Todavía usa textos como «aquí» o «haz clic»."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «La web de paper»: quatre fulls, enllaços subratllats i fletxes. Una persona navega i l'altra li dona el full on porta cada enllaç.|En casa, con el móvil, podéis repetir la sesión y hacer «La web de papel»: cuatro hojas, enlaces subrayados y flechas. Una persona navega y la otra le da la hoja a la que lleva cada enlace.",
      slides: [
        { id: 's1', k: 'portada', t: 'Enllaços|Enlaces', x: "Avui construirem els ponts entre les pàgines de l'Animalari.|Hoy construiremos los puentes entre las páginas del Animalario.",
          nota: "Presenta l'objectiu: al final, la fitxa tindrà un índex que salta a les seccions i un enllaç a una altra web.|Presenta el objetivo: al final, la ficha tendrá un índice que salta a las secciones y un enlace a otra web." },
        { id: 's2', k: 'repas', t: 'Recordem: l\'alt|Recordamos: el alt', x: "Quin és un bon alt per a la foto d'un gos que corre per la platja?|¿Cuál es un buen alt para la foto de un perro que corre por la playa?",
          nota: "Deixa que en diguin dos o tres i tria el més clar. Recorda que l'alt diu què es veu, curt.|Deja que digan dos o tres y elige el más claro. Recuerda que el alt dice qué se ve, corto." },
        { id: 's3', k: 'pregunta', t: 'Com passes d\'una pàgina a una altra?|¿Cómo pasas de una página a otra?', x: "L'Animalari té moltes pàgines, però no es pot anar d'una a l'altra.|El Animalario tiene muchas páginas, pero no se puede ir de una a otra.",
          nota: "Recull respostes: toquem paraules o botons que ens porten a una altra pàgina. Són els enllaços.|Recoge respuestas: tocamos palabras o botones que nos llevan a otra página. Son los enlaces." },
        { id: 's4', k: 'anim', t: "La «H» d'HTML|La «H» de HTML", anim: 'w3link', x: "Hipertext: text amb enllaços que et porten a una altra pàgina.|Hipertexto: texto con enlaces que te llevan a otra página.",
          nota: "Explica que HTML vol dir HyperText Markup Language. Sense enllaços, la web seria un munt de pàgines soltes.|Explica que HTML quiere decir HyperText Markup Language. Sin enlaces, la web sería un montón de páginas sueltas." },
        { id: 's5', k: 'concepte', t: "Com s'escriu un enllaç|Cómo se escribe un enlace", code: C(`<a href="tortuga.html">La tortuga</a>`, `<a href="tortuga.html">La tortuga</a>`),
          punts: ["href: on porta.|href: adónde lleva.", "El text de dins: el que es veu i es toca.|El texto de dentro: lo que se ve y se toca.", "Es tanca amb &lt;/a&gt;.|Se cierra con &lt;/a&gt;."],
          nota: "Escriu-lo per parts i fes notar la diferència amb &lt;img&gt;: l'enllaç té text a dins i per això es tanca.|Escríbelo por partes y haz notar la diferencia con &lt;img&gt;: el enlace tiene texto dentro y por eso se cierra." },
        { id: 's6', k: 'media', t: 'Dins de la teva web o a una altra|Dentro de tu web o a otra', x: "Un fitxer de la teva web o una adreça completa amb https://.|Un archivo de tu web o una dirección completa con https://.",
          media: { k: 'web', html: C(`<p>A la meva web:
  <a href="tortuga.html">la tortuga</a></p>
<p>A una altra web:
  <a href="https://exemple.numi/ocells">la web dels ocells</a></p>`, `<p>En mi web:
  <a href="tortuga.html">la tortuga</a></p>
<p>En otra web:
  <a href="https://exemple.numi/pajaros">la web de los pájaros</a></p>`) },
          nota: "Recorda les URL de la unitat 1: protocol, domini i camí. Si falta https://, el navegador busca un fitxer a la nostra web.|Recuerda las URL de la unidad 1: protocolo, dominio y camino. Si falta https://, el navegador busca un archivo en nuestra web." },
        { id: 's7', k: 'anim', t: 'Saltar dins de la pàgina|Saltar dentro de la página', anim: 'w3jump', x: "L'enllaç porta coixinet (#menja) i l'element, el mateix id sense coixinet.|El enlace lleva almohadilla (#come) y el elemento, el mismo id sin almohadilla.",
          nota: "Compara-ho amb l'índex d'un llibre: diu en quina pàgina és cada capítol. Aquí, l'índex salta a cada secció.|Compáralo con el índice de un libro: dice en qué página está cada capítulo. Aquí, el índice salta a cada sección." },
        { id: 's8', k: 'concepte', t: 'Índex i seccions|Índice y secciones', code: C(`<a href="#menja">Què menja</a>
...
<h2 id="menja">Què menja</h2>`, `<a href="#come">Qué come</a>
...
<h2 id="come">Qué come</h2>`),
          punts: ["L'id és un nom únic: sense espais ni accents.|El id es un nombre único: sin espacios ni acentos.", "Al href, el mateix nom amb #.|En el href, el mismo nombre con #."],
          nota: "Pregunta què passaria si dues seccions tinguessin el mateix id. Per això ha de ser únic.|Pregunta qué pasaría si dos secciones tuvieran el mismo id. Por eso tiene que ser único." },
        { id: 's9', k: 'pregunta', t: "Quin text d'enllaç és millor?|¿Qué texto de enlace es mejor?",
          punts: ["A. Per veure la balena, clica aquí.|A. Para ver la ballena, haz clic aquí.", "B. Llegeix la fitxa de la balena.|B. Lee la ficha de la ballena."],
          nota: "Resposta: B. Molta gent, i els lectors de pantalla, llegeixen només els enllaços: «clica aquí» no diu on porta.|Respuesta: B. Mucha gente, y los lectores de pantalla, leen solo los enlaces: «haz clic aquí» no dice adónde lleva." },
        { id: 's10', k: 'activitat', t: 'La web de la classe|La web de la clase', timer: 12,
          punts: ["Cada persona és una pàgina: enganxa't la targeta.|Cada persona es una página: pégate la tarjeta.", "Escriviu el text de cada enllaç en una targeta d'enllaç.|Escribid el texto de cada enlace en una tarjeta de enlace.", "Connecteu cada enllaç amb llana fins a la pàgina on porta.|Conectad cada enlace con lana hasta la página a la que lleva.", "Algú de fora navega: llegeix un enllaç i segueix el fil.|Alguien de fuera navega: lee un enlace y sigue el hilo."],
          nota: "Necessites un paquet de pàgines i targetes d'enllaç per grup i uns 8 fils de llana. Al final, fes una foto de la teranyina.|Necesitas un paquete de páginas y tarjetas de enlace por grupo y unos 8 hilos de lana. Al final, haz una foto de la telaraña." },
        { id: 's11', k: 'activitat', t: 'Preguntes per al navegant|Preguntas para el navegante',
          punts: ["Des de la portada, pots arribar a totes les pàgines?|Desde la portada, ¿puedes llegar a todas las páginas?", "Des de cada animal, pots tornar a la portada?|Desde cada animal, ¿puedes volver a la portada?", "Hi ha cap pàgina perduda?|¿Hay alguna página perdida?"],
          nota: "Deixa-la projectada mentre naveguen. Si hi ha una pàgina perduda, pregunta quin enllaç caldria afegir.|Déjala proyectada mientras navegan. Si hay una página perdida, pregunta qué enlace habría que añadir." },
        { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Enllaços».|Abre la sesión «Enlaces».", "Fes la missió, «Descobreix» i «Mans a l'obra».|Haz la misión, «Descubre» y «Manos a la obra».", "A l'enllaç sense tancar, segueix el text blau amb el dit.|En el enlace sin cerrar, sigue el texto azul con el dedo.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
          nota: "Al pas «La web de paper», que toquin «Ho hem fet!»: és com la que acabem de fer amb la llana.|En el paso «La web de papel», que toquen «¡Lo hemos hecho!»: es como la que acabamos de hacer con la lana." },
        { id: 's13', k: 'media', t: "Fem junts l'índex|Hacemos juntos el índice", x: "Quin id necessita cada secció perquè l'índex funcioni?|¿Qué id necesita cada sección para que el índice funcione?",
          media: { k: 'web', html: C(`<p><a href="#on-viu">On viu</a> · <a href="#menja">Què menja</a></p>
<h2 id="on-viu">On viu</h2>
<p>A tots els oceans.</p>
<h2 id="menja">Què menja</h2>
<p>Krill i peixos petits.</p>`, `<p><a href="#donde-vive">Dónde vive</a> · <a href="#come">Qué come</a></p>
<h2 id="donde-vive">Dónde vive</h2>
<p>En todos los océanos.</p>
<h2 id="come">Qué come</h2>
<p>Kril y peces pequeños.</p>`) },
          nota: "Tapa el codi i demana-ho a la classe: un alumne/a diu l'id i un altre l'enllaç. Després destapa i compareu.|Tapa el código y pídelo a la clase: un alumno/a dice el id y otro el enlace. Después destapa y comparad." },
        { id: 's14', k: 'repte', t: 'Reptes: enllaços|Retos: enlaces', timer: 10,
          punts: ["1. La web dels ocells|1. La web de los pájaros", "2. El menú de la portada|2. El menú de la portada", "3. L'índex de la balena|3. El índice de la ballena", "4. Els dos errors del pop|4. Los dos errores del pulpo"],
          nota: "Avisa que a la vista prèvia els enllaços porten a adreces inventades: si en toquen un, la vista prèvia es buida fins que tornin a escriure.|Avisa de que en la vista previa los enlaces llevan a direcciones inventadas: si tocan uno, la vista previa se vacía hasta que vuelvan a escribir." },
        { id: 's15', k: 'activitat', t: 'Crea: la fitxa amb índex|Crea: la ficha con índice', timer: 5, x: "Índex, dues seccions amb id i un enllaç a una altra web.|Índice, dos secciones con id y un enlace a otra web.",
          nota: "En parelles, el company/a llegeix cada enllaç i diu on creu que portarà abans de tocar-lo.|Por parejas, el compañero/a lee cada enlace y dice adónde cree que llevará antes de tocarlo." },
        { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy',
          punts: ["Un enllaç és &lt;a href=\"…\"&gt;text&lt;/a&gt;.|Un enlace es &lt;a href=\"…\"&gt;texto&lt;/a&gt;.", "fitxer.html: la teva web · https://…: una altra web · #id: la mateixa pàgina.|archivo.html: tu web · https://…: otra web · #id: la misma página.", "El text de l'enllaç diu on porta.|El texto del enlace dice adónde lleva."],
          nota: "Torna a la teranyina de llana: cada fil era un enllaç i tots junts formen la web.|Vuelve a la telaraña de lana: cada hilo era un enlace y todos juntos forman la web." },
        { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida',
          punts: ["On porta href=\"#fonts\"? I https://exemple.numi/fonts?|¿Adónde lleva href=\"#fuentes\"? ¿Y https://exemple.numi/fuentes?", "Per què «clica aquí» no és un bon text d'enllaç?|¿Por qué «haz clic aquí» no es un buen texto de enlace?"],
          nota: "Apunta qui encara confon l'id amb l'enllaç: a la sessió 4 tornaran a fer un índex.|Apunta quién todavía confunde el id con el enlace: en la sesión 4 volverán a hacer un índice." }
      ],
      print: [
        { id: 'p1', t: 'Pàgines de la web de la classe|Páginas de la web de la clase', k: 'targetes',
          intro: "Un paquet per grup de 5 o 6. Cada alumne/a s'enganxa una pàgina; les targetes d'enllaç són per escriure-hi el text de cada enllaç.|Un paquete por grupo de 5 o 6. Cada alumno/a se pega una página; las tarjetas de enlace son para escribir el texto de cada enlace.",
          items: [{ t: 'Portada 🏠|Portada 🏠', n: 1 }, { t: 'La tortuga 🐢|La tortuga 🐢', n: 1 }, { t: 'La guineu 🦊|El zorro 🦊', n: 1 }, { t: 'El mussol 🦉|El búho 🦉', n: 1 }, { t: 'El pop 🐙|El pulpo 🐙', n: 1 }, { t: 'Fonts 📚|Fuentes 📚', n: 1 }, { t: 'Enllaç: ________ 🔗|Enlace: ________ 🔗', n: 6 }] },
        { id: 'p2', t: "Fitxa: escriu l'enllaç|Ficha: escribe el enlace", k: 'fitxa',
          intro: "Escriu l'enllaç que demana cada exercici, amb el text que diu on porta.|Escribe el enlace que pide cada ejercicio, con el texto que dice adónde lleva.",
          items: [
            { q: "Un enllaç a la pàgina gat.html de la teva web.|Un enlace a la página gat.html de tu web.", sol: "&lt;a href=\"gat.html\"&gt;El gat&lt;/a&gt;|&lt;a href=\"gat.html\"&gt;El gato&lt;/a&gt;" },
            { q: "Un enllaç a la web https://exemple.numi/balenes.|Un enlace a la web https://exemple.numi/ballenas.", sol: "&lt;a href=\"https://exemple.numi/balenes\"&gt;La web de les balenes&lt;/a&gt;|&lt;a href=\"https://exemple.numi/ballenas\"&gt;La web de las ballenas&lt;/a&gt;" },
            { q: "Un enllaç que salti a &lt;h2 id=\"menja\"&gt;.|Un enlace que salte a &lt;h2 id=\"come\"&gt;.", sol: "&lt;a href=\"#menja\"&gt;Què menja&lt;/a&gt;|&lt;a href=\"#come\"&gt;Qué come&lt;/a&gt;" },
            { q: "Troba l'error: &lt;a href=\"exemple.numi/ocells\"&gt;Ocells&lt;/a&gt;|Encuentra el error: &lt;a href=\"exemple.numi/pajaros\"&gt;Pájaros&lt;/a&gt;", sol: "Falta https:// al davant de l'adreça.|Falta https:// delante de la dirección." },
            { q: "Canvia el text de l'enllaç perquè digui on porta: Per veure el pop, &lt;a href=\"pop.html\"&gt;clica aquí&lt;/a&gt;.|Cambia el texto del enlace para que diga adónde lleva: Para ver el pulpo, &lt;a href=\"pop.html\"&gt;haz clic aquí&lt;/a&gt;.", sol: "Per exemple: Llegeix la &lt;a href=\"pop.html\"&gt;fitxa del pop&lt;/a&gt;.|Por ejemplo: Lee la &lt;a href=\"pop.html\"&gt;ficha del pulpo&lt;/a&gt;." }
          ] }
      ]
    },

    /* ---------- Sessió 3 · Citar les fonts ---------- */
    'w3-3': {
      obj: [
        "L'alumne/a explica que les obres (fotos, dibuixos, textos) tenen autor/a i que veure-les a internet no vol dir poder-les fer servir.|El alumno/a explica que las obras (fotos, dibujos, textos) tienen autor/a y que verlas en internet no quiere decir poder usarlas.",
        "L'alumne/a classifica situacions amb el semàfor: obra pròpia o amb permís, llicència lliure, o sense saber de qui és.|El alumno/a clasifica situaciones con el semáforo: obra propia o con permiso, licencia libre, o sin saber de quién es.",
        "L'alumne/a cita una font amb les quatre preguntes: qui, què, on i quan.|El alumno/a cita una fuente con las cuatro preguntas: quién, qué, dónde y cuándo.",
        "L'alumne/a fa servir les etiquetes figure i figcaption per posar una llegenda amb l'autor/a, i una secció de fonts amb enllaços.|El alumno/a usa las etiquetas figure y figcaption para poner una leyenda con el autor/a, y una sección de fuentes con enlaces."
      ],
      comp: [
        "Competència digital (CD4): respectar els drets d'autor i les llicències dels continguts digitals|Competencia digital (CD4): respetar los derechos de autor y las licencias de los contenidos digitales",
        "Competència digital (CD2): buscar informació i dir-ne la font|Competencia digital (CD2): buscar información y decir su fuente",
        "Ciutadania: valorar la feina creativa dels altres|Ciudadanía: valorar el trabajo creativo de los demás",
        "Llengua: explicar una informació amb les pròpies paraules|Lengua: explicar una información con las propias palabras"
      ],
      vocab: [
        ["Drets d'autor|Derechos de autor", "Els drets que té qui crea una obra per decidir com es fa servir.|Los derechos que tiene quien crea una obra para decidir cómo se usa."],
        ["Font|Fuente", "D'on surt una informació o una imatge: una persona, un llibre, una web.|De dónde sale una información o una imagen: una persona, un libro, una web."],
        ["Citar|Citar", "Dir de qui és i d'on has tret una cosa.|Decir de quién es y de dónde has sacado algo."],
        ["Llicència lliure|Licencia libre", "Permís que dona l'autor/a perquè tothom faci servir l'obra amb unes condicions.|Permiso que da el autor/a para que todo el mundo use la obra con unas condiciones."],
        ["Domini públic|Dominio público", "Obres que tothom pot fer servir perquè ja fa molts anys que l'autor/a ha mort.|Obras que todo el mundo puede usar porque ya hace muchos años que el autor/a ha muerto."],
        ["Llegenda|Leyenda", "El text que acompanya una imatge: &lt;figcaption&gt;.|El texto que acompaña a una imagen: &lt;figcaption&gt;."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Citar les fonts»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Citar las fuentes»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Tres fulls grans (verd, groc i vermell) per grup i alguns llibres de la biblioteca de l'aula|Tres hojas grandes (verde, amarilla y roja) por grupo y algunos libros de la biblioteca del aula"
        ],
        imprimir: ["Targetes del semàfor de les fonts|Tarjetas del semáforo de las fuentes", "Fitxa: cita la font|Ficha: cita la fuente"],
        prep: [
          "Imprimir i retallar un paquet de targetes del semàfor per grup de 4.|Imprimir y recortar un paquete de tarjetas del semáforo por grupo de 4.",
          "Preparar un llibre per grup (de ciència o de contes) per escriure'n la cita.|Preparar un libro por grupo (de ciencia o de cuentos) para escribir su cita.",
          "Llegir les solucions de la fitxa: algunes situacions tenen matisos i val la pena comentar-les.|Leer las soluciones de la ficha: algunas situaciones tienen matices y vale la pena comentarlas."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: de qui és aquesta foto?|Bienvenida: ¿de quién es esta foto?", fase: 'inici',
          fa: "Explica la situació d'en Bit: ha posat a l'Animalari una foto que ha trobat en una web. Pregunta si ho pot fer i recull les opinions sense corregir. Moltes persones pensen que el que és a internet és de tothom: és el que aclarirem avui.|Explica la situación de Bit: ha puesto en el Animalario una foto que ha encontrado en una web. Pregunta si puede hacerlo y recoge las opiniones sin corregir. Muchas personas piensan que lo que está en internet es de todo el mundo: es lo que aclararemos hoy.",
          diu: ["Si feu un dibuix i algú el posa a la seva web dient que és seu, què en pensaríeu?|Si hacéis un dibujo y alguien lo pone en su web diciendo que es suyo, ¿qué pensaríais?", "Si una cosa és a internet, és de tothom?|Si una cosa está en internet, ¿es de todo el mundo?"],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Drets d'autor, semàfor i cites|Derechos de autor, semáforo y citas", fase: 'teoria',
          fa: "Explica els drets d'autor amb l'animació: qui crea una obra decideix com es fa servir. Presenta el semàfor (verd, groc i vermell) i les quatre preguntes d'una cita. Acaba amb figure i figcaption: on posem l'autor/a d'una imatge a la web.|Explica los derechos de autor con la animación: quien crea una obra decide cómo se usa. Presenta el semáforo (verde, amarillo y rojo) y las cuatro preguntas de una cita. Termina con figure y figcaption: dónde ponemos el autor/a de una imagen en la web.",
          diu: ["Que una imatge es vegi no vol dir que es pugui agafar.|Que una imagen se vea no quiere decir que se pueda coger.", "Qui, què, on i quan: amb aquestes quatre preguntes, qualsevol pot trobar la font.|Quién, qué, dónde y cuándo: con estas cuatro preguntas, cualquiera puede encontrar la fuente.", "L'alt diu què es veu; la llegenda diu de qui és.|El alt dice qué se ve; la leyenda dice de quién es."],
          slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "El semàfor de les fonts|El semáforo de las fuentes", fase: 'desconnectat',
          fa: "Fes grups de 4 amb els tres fulls de colors a la taula. Cada grup llegeix les targetes de situacions i les posa al verd (es pot fer servir), al groc (es pot fer servir amb condicions, com citar) o al vermell (no, sense permís). Han de posar-se d'acord i explicar per què. Després, cada grup escriu la cita del seu llibre amb les quatre preguntes. Comenteu junts les targetes que han generat més dubtes.|Haz grupos de 4 con las tres hojas de colores en la mesa. Cada grupo lee las tarjetas de situaciones y las pone en el verde (se puede usar), en el amarillo (se puede usar con condiciones, como citar) o en el rojo (no, sin permiso). Tienen que ponerse de acuerdo y explicar por qué. Después, cada grupo escribe la cita de su libro con las cuatro preguntas. Comentad juntos las tarjetas que han generado más dudas.",
          diu: ["Abans de posar una targeta, digueu-ne el motiu en veu alta.|Antes de poner una tarjeta, decid el motivo en voz alta.", "Si no sabeu de qui és, quin color toca?|Si no sabéis de quién es, ¿qué color toca?", "On heu trobat l'autor/a i l'any del llibre?|¿Dónde habéis encontrado el autor/a y el año del libro?"],
          slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
        { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
          fa: "Cada alumne/a avança fins a la pausa. Al pas «Detectius de fonts», poden tocar «Ara no»: és per fer-lo a casa amb un llibre. A la llegenda que diu «Imatge: internet», obre un petit debat: per què internet no és una font?|Cada alumno/a avanza hasta la pausa. En el paso «Detectives de fuentes», pueden tocar «Ahora no»: es para hacerlo en casa con un libro. En la leyenda que dice «Imagen: internet», abre un pequeño debate: ¿por qué internet no es una fuente?",
          diu: ["Internet és on l'has trobada. Però qui l'ha feta?|Internet es donde la has encontrado. Pero ¿quién la ha hecho?", "Quina de les cites té les quatre parts?|¿Cuál de las citas tiene las cuatro partes?"],
          slides: ['s12'], app: "Del recorda fins a «Investiga»: la pregunta de l'enllaç intern, les dues històries, «Descobreix», ordenar les línies d'una figura, «Detectius de fonts» (per a casa), «Quina vista prèvia?», la llegenda que no cita bé, la cita més completa i el dibuix sense autor/a.|Del recuerda hasta «Investiga»: la pregunta del enlace interno, las dos historias, «Descubre», ordenar las líneas de una figura, «Detectives de fuentes» (para casa), «¿Qué vista previa?», la leyenda que no cita bien, la cita más completa y el dibujo sin autor/a.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: figures i fonts|Retos: figuras y fuentes", fase: 'ordinador',
          fa: "Fes la pausa activa del semàfor. Després escriu amb la classe la figura de la diapositiva 13 i deixa'ls fer els quatre reptes. Al repte de les fonts del gos, recorda que el text de l'enllaç ha de dir de quina web és.|Haced la pausa activa del semáforo. Después escribe con la clase la figura de la diapositiva 13 y deja que hagan los cuatro retos. En el reto de las fuentes del perro, recuerda que el texto del enlace tiene que decir de qué web es.",
          diu: ["La imatge i la llegenda, totes dues dins de &lt;figure&gt;.|La imagen y la leyenda, las dos dentro de &lt;figure&gt;.", "Ves error per error i mira com es marca la llista.|Ve error por error y mira cómo se marca la lista."],
          slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: la figura de la tortuga, l'alt i l'autor del drac, les fonts del gos i els tres errors de la balena.|«Pausa activa» y los cuatro retos: la figura de la tortuga, el alt y el autor del dragón, las fuentes del perro y los tres errores de la ballena.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: la notícia de l'Animalari|Crea: la noticia del Animalario", fase: 'crea',
          fa: "Cada alumne/a escriu una notícia curta sobre un animal amb figura, llegenda amb autor/a, un paràgraf amb les seves paraules i les fonts. Si no tenen temps d'acabar-la, la poden acabar a casa.|Cada alumno/a escribe una noticia corta sobre un animal con figura, leyenda con autor/a, un párrafo con sus palabras y las fuentes. Si no tienen tiempo de terminarla, la pueden terminar en casa.",
          diu: ["Explica-ho com ho explicaries a un amic: amb les teves paraules.|Explícalo como se lo explicarías a un amigo: con tus palabras.", "On has tret la informació? Posa-ho a les fonts.|¿De dónde has sacado la información? Ponlo en las fuentes."],
          slides: ['s15'], app: "Pas «Crea»: La notícia de l'Animalari (es desa a «Projectes»).|Paso «Crea»: La noticia del Animalario (se guarda en «Proyectos»).", org: "Individual|Individual" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Torna a la pregunta del principi (pot en Bit fer servir la foto?) i repassa les idees amb el resum. A la porta, fes una pregunta del tiquet a cada alumne/a.|Vuelve a la pregunta del principio (¿puede Bit usar la foto?) y repasa las ideas con el resumen. En la puerta, haz una pregunta del ticket a cada alumno/a.",
          diu: ["Què hauria d'haver fet en Bit amb la foto de la tortuga?|¿Qué tendría que haber hecho Bit con la foto de la tortuga?", "Quines són les quatre preguntes d'una cita?|¿Cuáles son las cuatro preguntas de una cita?"],
          slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Creu que si una imatge és a internet, la pot fer servir sense dir res.|Cree que si una imagen está en internet, la puede usar sin decir nada.",
          "Pregunta-li com se sentiria si algú posés el seu dibuix en una web amb un altre nom. Torna al semàfor: sap de qui és?|Pregúntale cómo se sentiría si alguien pusiera su dibujo en una web con otro nombre. Vuelve al semáforo: ¿sabe de quién es?"],
        ["Cita «internet» o «una web» com a font.|Cita «internet» o «una web» como fuente.",
          "Demana-li que respongui les quatre preguntes: qui, què, on i quan. Si en falta alguna, que la busqui.|Pídele que responda las cuatro preguntas: quién, qué, dónde y cuándo. Si falta alguna, que la busque."],
        ["Posa la &lt;figcaption&gt; fora de la &lt;figure&gt; o no la tanca.|Pone la &lt;figcaption&gt; fuera de la &lt;figure&gt; o no la cierra.",
          "Que segueixi les línies amb el dit: on s'obre la figura i on es tanca? La llegenda hi ha de quedar dins.|Que siga las líneas con el dedo: ¿dónde se abre la figura y dónde se cierra? La leyenda tiene que quedar dentro."],
        ["Copia i enganxa un text sencer d'una web a la notícia.|Copia y pega un texto entero de una web en la noticia.",
          "Que tanqui la font i t'expliqui en veu alta què ha entès. Després, que escrigui això mateix amb les seves paraules.|Que cierre la fuente y te explique en voz alta qué ha entendido. Después, que escriba eso mismo con sus palabras."],
        ["Confon l'alt amb la llegenda i hi escriu el mateix.|Confunde el alt con la leyenda y escribe lo mismo.",
          "Pregunta-li: què ha de saber qui no veu la imatge? (l'alt). I què li afegim a tothom? (la llegenda, amb l'autor/a).|Pregúntale: ¿qué tiene que saber quien no ve la imagen? (el alt). ¿Y qué le añadimos a todo el mundo? (la leyenda, con el autor/a)."]
      ],
      diff: {
        mes: "Afegir a la notícia una frase exacta d'una font, entre «cometes» i dient de qui és, i una segona figura. Buscar en un llibre de l'aula si té bibliografia i explicar-la a la classe.|Añadir a la noticia una frase exacta de una fuente, entre «comillas» y diciendo de quién es, y una segunda figura. Buscar en un libro del aula si tiene bibliografía y explicarla a la clase.",
        menys: "Treballar en parella el semàfor amb només sis targetes. A l'ordinador, fer servir els fragments de figure i figcaption i començar pel repte de la tortuga, que ja té tot el text escrit.|Trabajar en pareja el semáforo con solo seis tarjetas. En el ordenador, usar los fragmentos de figure y figcaption y empezar por el reto de la tortuga, que ya tiene todo el texto escrito."
      },
      aval: {
        ticket: ["Una imatge es veu a internet. La pots fer servir a la teva web? Què has de mirar?|Una imagen se ve en internet. ¿La puedes usar en tu web? ¿Qué tienes que mirar?",
          "Quines quatre coses diu una bona cita?|¿Qué cuatro cosas dice una buena cita?"],
        rubric: [
          ["Drets d'autor|Derechos de autor", "Explica que les obres tenen autor/a i classifica bé les situacions del semàfor.|Explica que las obras tienen autor/a y clasifica bien las situaciones del semáforo.", "Sap que cal permís, però dubta amb les llicències lliures o les obres pròpies.|Sabe que hace falta permiso, pero duda con las licencias libres o las obras propias."],
          ["Citar les fonts|Citar las fuentes", "Escriu cites amb qui, què, on i quan, amb enllaç.|Escribe citas con quién, qué, dónde y cuándo, con enlace.", "Cita la font, però li falta alguna part.|Cita la fuente, pero le falta alguna parte."],
          ["figure i figcaption|figure y figcaption", "Fa figures amb imatge, alt i llegenda amb l'autor/a, ben tancades.|Hace figuras con imagen, alt y leyenda con el autor/a, bien cerradas.", "Fa la figura amb ajuda o amb la llegenda fora de lloc.|Hace la figura con ayuda o con la leyenda fuera de lugar."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «Detectius de fonts»: agafeu un llibre, busqueu qui l'ha escrit, l'editorial i l'any, i escriviu-ne la cita.|En casa, con el móvil, podéis repetir la sesión y hacer «Detectives de fuentes»: coged un libro, buscad quién lo ha escrito, la editorial y el año, y escribid su cita.",
      slides: [
        { id: 's1', k: 'portada', t: 'Citar les fonts|Citar las fuentes', x: "De qui són les imatges i els textos que trobem a internet?|¿De quién son las imágenes y los textos que encontramos en internet?",
          nota: "Presenta l'objectiu: al final, sabran quan poden fer servir una imatge i com dir d'on l'han treta.|Presenta el objetivo: al final, sabrán cuándo pueden usar una imagen y cómo decir de dónde la han sacado." },
        { id: 's2', k: 'repas', t: 'Recordem: els enllaços|Recordamos: los enlaces', code: C(`<a href="#menja">Què menja</a>`, `<a href="#come">Qué come</a>`), x: "On porta aquest enllaç?|¿Adónde lleva este enlace?",
          nota: "Resposta: a l'element amb id=\"menja\" de la mateixa pàgina. Avui farem servir enllaços per citar les fonts.|Respuesta: al elemento con id=\"come\" de la misma página. Hoy usaremos enlaces para citar las fuentes." },
        { id: 's3', k: 'pregunta', t: 'Ho pot fer, en Bit?|¿Puede hacerlo Bit?', x: "En Bit ha posat a l'Animalari una foto que ha trobat en una web. Ho pot fer?|Bit ha puesto en el Animalario una foto que ha encontrado en una web. ¿Puede hacerlo?",
          nota: "Fes que votin amb la mà (sí, no, depèn) i guarda el resultat: hi tornareu al final de la classe.|Haz que voten con la mano (sí, no, depende) y guarda el resultado: volveréis a ello al final de la clase." },
        { id: 's4', k: 'anim', t: "Drets d'autor|Derechos de autor", anim: 'w3copy', x: "Qui crea una obra decideix qui la pot copiar, fer servir o canviar.|Quien crea una obra decide quién puede copiarla, usarla o cambiarla.",
          nota: "Remarca que els drets existeixen encara que no hi surti el símbol ©. Un dibuix seu també té drets d'autor.|Remarca que los derechos existen aunque no aparezca el símbolo ©. Un dibujo suyo también tiene derechos de autor." },
        { id: 's5', k: 'concepte', t: 'El semàfor de les imatges|El semáforo de las imágenes', pic: 'img/ment/atu.webp',
          punts: ["🟢 Fet per tu, o amb permís.|🟢 Hecho por ti, o con permiso.", "🟡 Llicència lliure: es pot fer servir amb condicions, com dir-ne l'autor/a.|🟡 Licencia libre: se puede usar con condiciones, como decir su autor/a.", "🔴 No saps de qui és: no l'agafis, demana permís o busca'n una altra.|🔴 No sabes de quién es: no la cojas, pide permiso o busca otra."],
          nota: "Explica també el domini públic: quan fa molts anys que l'autor/a ha mort (a Espanya, en general, 70 anys), l'obra es pot fer servir lliurement.|Explica también el dominio público: cuando hace muchos años que el autor/a ha muerto (en España, en general, 70 años), la obra se puede usar libremente." },
        { id: 's6', k: 'anim', t: 'Les quatre preguntes d\'una cita|Las cuatro preguntas de una cita', anim: 'w3cite', x: "Qui l'ha fet? Què és? On és? Quan ho vas consultar?|¿Quién lo ha hecho? ¿Qué es? ¿Dónde está? ¿Cuándo lo consultaste?",
          nota: "Fes notar que la data importa: les webs canvien, i així qui llegeix sap quan era veritat.|Haz notar que la fecha importa: las webs cambian, y así quien lee sabe cuándo era verdad." },
        { id: 's7', k: 'media', t: 'Imatge i llegenda: <figure>|Imagen y leyenda: <figure>', x: "La llegenda és el lloc ideal per dir qui ha fet la imatge.|La leyenda es el lugar ideal para decir quién ha hecho la imagen.",
          media: { k: 'web', html: C(`<figure>
  <img src="img/tech/web/guineu.svg" alt="Una guineu taronja asseguda" width="140">
  <figcaption>La guineu de l'illa. Dibuix: Numi.</figcaption>
</figure>`, `<figure>
  <img src="img/tech/web/guineu.svg" alt="Un zorro naranja sentado" width="140">
  <figcaption>El zorro de la isla. Dibujo: Numi.</figcaption>
</figure>`) },
          nota: "Compara l'alt i la llegenda: l'alt descriu què es veu i la llegenda hi afegeix informació, com l'autor/a.|Compara el alt y la leyenda: el alt describe qué se ve y la leyenda añade información, como el autor/a." },
        { id: 's8', k: 'concepte', t: 'La secció Fonts|La sección Fuentes', code: C(`<h2>Fonts</h2>
<ul>
  <li><a href="https://exemple.numi/tortugues">Club de Naturalistes:
      Les tortugues de l'illa</a> (consultat el 3 d'octubre)</li>
</ul>`, `<h2>Fuentes</h2>
<ul>
  <li><a href="https://exemple.numi/tortugas">Club de Naturalistas:
      Las tortugas de la isla</a> (consultado el 3 de octubre)</li>
</ul>`),
          punts: ["Al final de la pàgina.|Al final de la página.", "Una font a cada element de la llista, amb enllaç.|Una fuente en cada elemento de la lista, con enlace."],
          nota: "Busca a la cita les quatre preguntes: qui (el club), què (el títol), on (l'enllaç) i quan (la data).|Busca en la cita las cuatro preguntas: quién (el club), qué (el título), dónde (el enlace) y cuándo (la fecha)." },
        { id: 's9', k: 'concepte', t: 'Amb les teves paraules|Con tus palabras', pic: 'img/ment/sin.webp',
          punts: ["Llegeix dues o tres fonts.|Lee dos o tres fuentes.", "Tanca-les i escriu el que has entès.|Ciérralas y escribe lo que has entendido.", "Una frase exacta? Entre «cometes» i amb l'autor/a.|¿Una frase exacta? Entre «comillas» y con el autor/a."],
          nota: "Explica que copiar un text sencer no és aprendre i tampoc és respectar l'autor/a.|Explica que copiar un texto entero no es aprender y tampoco es respetar al autor/a." },
        { id: 's10', k: 'activitat', t: 'El semàfor de les fonts|El semáforo de las fuentes', timer: 12,
          punts: ["Llegiu una targeta en veu alta.|Leed una tarjeta en voz alta.", "Poseu-vos d'acord: verd, groc o vermell? Per què?|Poneos de acuerdo: ¿verde, amarillo o rojo? ¿Por qué?", "Al final, escriviu la cita del vostre llibre.|Al final, escribid la cita de vuestro libro."],
          nota: "Cada grup necessita les targetes, els tres fulls de colors i un llibre. Les solucions són a la fitxa «Cita la font».|Cada grupo necesita las tarjetas, las tres hojas de colores y un libro. Las soluciones están en la ficha «Cita la fuente»." },
        { id: 's11', k: 'activitat', t: 'La cita del llibre|La cita del libro', code: C(`Autor/a. Títol. Editorial, any.`, `Autor/a. Título. Editorial, año.`),
          punts: ["Busca-ho a la coberta i a les primeres pàgines.|Búscalo en la cubierta y en las primeras páginas.", "Si hi ha il·lustrador/a, també el pots dir.|Si hay ilustrador/a, también lo puedes decir."],
          nota: "Deixa-la projectada mentre escriuen la cita del llibre. Comenteu on és normalment l'any (a la pàgina dels crèdits, amb el ©).|Déjala proyectada mientras escriben la cita del libro. Comentad dónde está normalmente el año (en la página de los créditos, con el ©)." },
        { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Citar les fonts».|Abre la sesión «Citar las fuentes».", "Fes la missió, «Descobreix» i «Mans a l'obra».|Haz la misión, «Descubre» y «Manos a la obra».", "«Detectius de fonts» és per fer-lo a casa.|«Detectives de fuentes» es para hacerlo en casa.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
          nota: "Al pas «Detectius de fonts», que toquin «Ara no»: és la proposta per a casa amb un llibre.|En el paso «Detectives de fuentes», que toquen «Ahora no»: es la propuesta para casa con un libro." },
        { id: 's13', k: 'media', t: 'Fem junts una figura|Hacemos juntos una figura', x: "Quines peces necessita? I on va l'autor/a?|¿Qué piezas necesita? ¿Y dónde va el autor/a?",
          media: { k: 'web', html: C(`<figure>
  <img src="img/tech/web/tortuga.svg" alt="Una tortuga verda caminant" width="160">
  <figcaption>Una tortuga de terra. Dibuix: Numi.</figcaption>
</figure>`, `<figure>
  <img src="img/tech/web/tortuga.svg" alt="Una tortuga verde caminando" width="160">
  <figcaption>Una tortuga de tierra. Dibujo: Numi.</figcaption>
</figure>`) },
          nota: "Demana les línies en ordre: obrir la figura, la imatge, la llegenda i tancar la figura.|Pide las líneas en orden: abrir la figura, la imagen, la leyenda y cerrar la figura." },
        { id: 's14', k: 'repte', t: 'Reptes: figures i fonts|Retos: figuras y fuentes', timer: 10,
          punts: ["1. La figura de la tortuga|1. La figura de la tortuga", "2. L'alt i l'autor del drac|2. El alt y el autor del dragón", "3. Les fonts del gos|3. Las fuentes del perro", "4. Els tres errors de la balena|4. Los tres errores de la ballena"],
          nota: "Al repte 4, recomana que arreglin els errors d'un en un i mirin quina comprovació es marca cada vegada.|En el reto 4, recomienda que arreglen los errores de uno en uno y miren qué comprobación se marca cada vez." },
        { id: 's15', k: 'activitat', t: "Crea: la notícia de l'Animalari|Crea: la noticia del Animalario", timer: 5, x: "Figura amb llegenda i autor/a, un paràgraf amb les teves paraules i les fonts.|Figura con leyenda y autor/a, un párrafo con tus palabras y las fuentes.",
          nota: "Si no tenen temps d'acabar, la notícia es desa i la poden acabar a casa o al principi de la sessió següent.|Si no tienen tiempo de terminar, la noticia se guarda y la pueden terminar en casa o al principio de la sesión siguiente." },
        { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy',
          punts: ["El que algú crea és seu: veure-ho a internet no vol dir poder-ho agafar.|Lo que alguien crea es suyo: verlo en internet no quiere decir poder cogerlo.", "Una cita diu qui, què, on i quan.|Una cita dice quién, qué, dónde y cuándo.", "&lt;figure&gt; i &lt;figcaption&gt;: la imatge amb la llegenda i l'autor/a.|&lt;figure&gt; y &lt;figcaption&gt;: la imagen con la leyenda y el autor/a."],
          nota: "Torna a la votació del principi: què hauria d'haver fet en Bit? Buscar de qui és la foto, demanar permís o fer servir una altra imatge, i citar-ne l'autor/a.|Vuelve a la votación del principio: ¿qué tendría que haber hecho Bit? Buscar de quién es la foto, pedir permiso o usar otra imagen, y citar a su autor/a." },
        { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida',
          punts: ["Pots fer servir qualsevol imatge que trobis a internet? Què has de mirar?|¿Puedes usar cualquier imagen que encuentres en internet? ¿Qué tienes que mirar?", "Quines quatre coses diu una bona cita?|¿Qué cuatro cosas dice una buena cita?"],
          nota: "Apunta qui encara pensa que el que és a internet és de tothom: ho reprendreu a la revisió de la fitxa.|Apunta quién todavía piensa que lo que está en internet es de todo el mundo: lo retomaréis en la revisión de la ficha." }
      ],
      print: [
        { id: 'p1', t: 'Targetes del semàfor de les fonts|Tarjetas del semáforo de las fuentes', k: 'targetes',
          intro: "Un paquet per grup de 4. Llegiu cada situació i poseu-la al verd, al groc o al vermell. Les solucions són a la fitxa «Cita la font».|Un paquete por grupo de 4. Leed cada situación y ponedla en el verde, en el amarillo o en el rojo. Las soluciones están en la ficha «Cita la fuente».",
          items: [{ t: 'Una foto que has fet tu 🏫|Una foto que has hecho tú 🏫', n: 1 }, { t: 'Un dibuix fet per tu ✏|Un dibujo hecho por ti ✏', n: 1 }, { t: 'Un dibuix de Numi del curs 🤖|Un dibujo de Numi del curso 🤖', n: 1 },
            { t: 'Una foto sense autor/a 🔍|Una foto sin autor/a 🔍', n: 1 }, { t: 'Una foto amb llicència lliure 🔓|Una foto con licencia libre 🔓', n: 1 }, { t: "La foto d'un amic/ga, sense preguntar 👤|La foto de un amigo/a, sin preguntar 👤", n: 1 },
            { t: 'Un text copiat sencer 📖|Un texto copiado entero 📖', n: 1 }, { t: 'Una frase entre cometes, amb autor/a 📚|Una frase entre comillas, con autor/a 📚', n: 1 }, { t: 'Un quadre de fa 400 anys 🏛|Un cuadro de hace 400 años 🏛', n: 1 },
            { t: "Un dibuix d'una web amb ©, sense permís 🔒|Un dibujo de una web con ©, sin permiso 🔒", n: 1 }] },
        { id: 'p2', t: 'Fitxa: cita la font|Ficha: cita la fuente', k: 'fitxa',
          intro: "Respon cada pregunta. Recorda les quatre preguntes d'una cita: qui, què, on i quan.|Responde cada pregunta. Recuerda las cuatro preguntas de una cita: quién, qué, dónde y cuándo.",
          items: [
            { q: "Semàfor: una foto que has fet tu, un dibuix de Numi del curs i un dibuix fet per tu. Quin color?|Semáforo: una foto que has hecho tú, un dibujo de Numi del curso y un dibujo hecho por ti. ¿Qué color?", sol: "Verd: són teus o tens permís per fer-los servir. Pots dir-ne l'autor/a a la llegenda.|Verde: son tuyos o tienes permiso para usarlos. Puedes decir su autor/a en la leyenda." },
            { q: "Semàfor: una foto amb llicència lliure, una frase entre cometes amb l'autor/a i un quadre de fa 400 anys. Quin color?|Semáforo: una foto con licencia libre, una frase entre comillas con el autor/a y un cuadro de hace 400 años. ¿Qué color?", sol: "Groc (o verd, el quadre, perquè és de domini públic): es poden fer servir, però cal complir les condicions i citar-ne l'autor/a.|Amarillo (o verde, el cuadro, porque es de dominio público): se pueden usar, pero hay que cumplir las condiciones y citar a su autor/a." },
            { q: "Semàfor: una foto sense autor/a, la foto d'un amic/ga sense preguntar, un text copiat sencer i un dibuix amb © sense permís. Quin color?|Semáforo: una foto sin autor/a, la foto de un amigo/a sin preguntar, un texto copiado entero y un dibujo con © sin permiso. ¿Qué color?", sol: "Vermell: no saps si es pot fer servir o no en tens permís. La foto d'una persona, a més, necessita el seu permís.|Rojo: no sabes si se puede usar o no tienes permiso. La foto de una persona, además, necesita su permiso." },
            { q: "Escriu la cita del llibre del teu grup: autor/a, títol, editorial i any.|Escribe la cita del libro de tu grupo: autor/a, título, editorial y año.", sol: "Depèn del llibre. Ha de tenir les quatre dades en aquest ordre.|Depende del libro. Tiene que tener los cuatro datos en este orden." },
            { q: "Escriu una figura amb la imatge tortuga.svg, un alt i una llegenda amb l'autor/a (Numi).|Escribe una figura con la imagen tortuga.svg, un alt y una leyenda con el autor/a (Numi).", sol: "&lt;figure&gt;&lt;img src=\"img/tech/web/tortuga.svg\" alt=\"Una tortuga verda\"&gt;&lt;figcaption&gt;Una tortuga. Dibuix: Numi.&lt;/figcaption&gt;&lt;/figure&gt;|&lt;figure&gt;&lt;img src=\"img/tech/web/tortuga.svg\" alt=\"Una tortuga verde\"&gt;&lt;figcaption&gt;Una tortuga. Dibujo: Numi.&lt;/figcaption&gt;&lt;/figure&gt;" }
          ] }
      ]
    },

    /* ---------- Sessió 4 · Projecte: la fitxa d'un animal ---------- */
    'w3-4': {
      obj: [
        "L'alumne/a planifica una pàgina amb un esbós en paper abans d'escriure el codi.|El alumno/a planifica una página con un boceto en papel antes de escribir el código.",
        "L'alumne/a construeix la fitxa completa d'un animal: títol, índex, figura amb alt i llegenda, dades, seccions i fonts.|El alumno/a construye la ficha completa de un animal: título, índice, figura con alt y leyenda, datos, secciones y fuentes.",
        "L'alumne/a revisa una pàgina amb una llista (alt, enllaços, títols, fonts) i n'arregla els problemes.|El alumno/a revisa una página con una lista (alt, enlaces, títulos, fuentes) y arregla sus problemas.",
        "L'alumne/a dona i rep comentaris amables i útils sobre la fitxa d'un company/a.|El alumno/a da y recibe comentarios amables y útiles sobre la ficha de un compañero/a."
      ],
      comp: [
        "Competència digital (CD3): crear una pàgina web completa amb imatges, enllaços i fonts|Competencia digital (CD3): crear una página web completa con imágenes, enlaces y fuentes",
        "Ciències naturals: buscar i organitzar informació sobre un animal|Ciencias naturales: buscar y organizar información sobre un animal",
        "Ciutadania digital: accessibilitat i respecte dels drets d'autor|Ciudadanía digital: accesibilidad y respeto de los derechos de autor",
        "Aprendre a aprendre: planificar, revisar i millorar la pròpia feina|Aprender a aprender: planificar, revisar y mejorar el propio trabajo"
      ],
      vocab: [
        ["Esbós|Boceto", "Dibuix ràpid que mostra què hi haurà en una pàgina i en quin ordre.|Dibujo rápido que muestra qué habrá en una página y en qué orden."],
        ["Fitxa|Ficha", "Pàgina curta i ordenada amb la informació important d'un tema.|Página corta y ordenada con la información importante de un tema."],
        ["Secció|Sección", "Part de la pàgina amb el seu títol h2.|Parte de la página con su título h2."],
        ["Revisar|Revisar", "Repassar la feina amb una llista per trobar què es pot millorar.|Repasar el trabajo con una lista para encontrar qué se puede mejorar."],
        ["Accessibilitat|Accesibilidad", "Que una web la pugui fer servir tothom, també qui no hi veu.|Que una web la pueda usar todo el mundo, también quien no ve."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la fitxa d'un animal»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la ficha de un animal»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Llapis, goma i llibres d'animals de la biblioteca (per buscar dades i citar-los)|Lápiz, goma y libros de animales de la biblioteca (para buscar datos y citarlos)"
        ],
        imprimir: ["Fitxa: l'esbós de la fitxa|Ficha: el boceto de la ficha", "Fitxa: revisió en parella|Ficha: revisión en pareja"],
        prep: [
          "Imprimir una fitxa d'esbós i una de revisió per alumne/a.|Imprimir una ficha de boceto y una de revisión por alumno/a.",
          "Portar a l'aula alguns llibres d'animals: serviran per buscar dades i per a la secció de fonts.|Llevar al aula algunos libros de animales: servirán para buscar datos y para la sección de fuentes.",
          "Revisar a «Projectes» del panell que tothom té desades les pàgines de les sessions anteriors.|Revisar en «Proyectos» del panel que todo el mundo tiene guardadas las páginas de las sesiones anteriores."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: l'Animalari obre!|Bienvenida: ¡el Animalario abre!", fase: 'inici',
          fa: "Explica el projecte: cada alumne/a farà la fitxa completa d'un animal per a l'Animalari. Repassa en veu alta les peces que ja saben fer (imatge, alt, llegenda, enllaços, fonts) i mostra el resultat final al qual arribaran.|Explica el proyecto: cada alumno/a hará la ficha completa de un animal para el Animalario. Repasa en voz alta las piezas que ya saben hacer (imagen, alt, leyenda, enlaces, fuentes) y muestra el resultado final al que llegarán.",
          diu: ["Avui ajuntem tot el que hem après en una sola pàgina.|Hoy juntamos todo lo que hemos aprendido en una sola página.", "Quines peces ja sabeu fer? Digueu-me'n una cadascú.|¿Qué piezas ya sabéis hacer? Decidme una cada uno."],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 8, t: "Com és una bona fitxa|Cómo es una buena ficha", fase: 'teoria',
          fa: "Mostra l'animació de l'esbós i la fitxa acabada del lloro. Explica les dades ràpides en una llista amb strong i la llista de revisió. Remarca que primer es planifica en paper.|Muestra la animación del boceto y la ficha terminada del loro. Explica los datos rápidos en una lista con strong y la lista de revisión. Remarca que primero se planifica en papel.",
          diu: ["Les persones que fan webs primer dibuixen, després escriuen codi.|Las personas que hacen webs primero dibujan, después escriben código.", "Les dades curtes van en una llista; les explicacions, en paràgrafs.|Los datos cortos van en una lista; las explicaciones, en párrafos."],
          slides: ['s4', 's5', 's6', 's7'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "L'esbós en paper|El boceto en papel", fase: 'desconnectat',
          fa: "Cada alumne/a tria l'animal i omple la fitxa de l'esbós: dibuixa les parts en ordre, escriu l'alt, tres dades curtes i dues seccions. Qui necessiti una dada la busca als llibres de l'aula i n'apunta la font. Abans de passar a l'ordinador, ensenyen l'esbós al company/a del costat.|Cada alumno/a elige el animal y rellena la ficha del boceto: dibuja las partes en orden, escribe el alt, tres datos cortos y dos secciones. Quien necesite un dato lo busca en los libros del aula y apunta la fuente. Antes de pasar al ordenador, enseñan el boceto al compañero/a de al lado.",
          diu: ["Escriu les dades amb les teves paraules, ja des de l'esbós.|Escribe los datos con tus palabras, ya desde el boceto.", "D'on has tret aquesta dada? Apunta-ho ara, que després no te'n recordaràs.|¿De dónde has sacado este dato? Apúntalo ahora, que después no te acordarás."],
          slides: ['s8'], app: "Cap: activitat sense pantalla (a l'app, el pas «L'esbós de la fitxa» ja estarà fet).|Ninguna: actividad sin pantalla (en la app, el paso «El boceto de la ficha» ya estará hecho).", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 12, t: "A l'ordinador: les peces del lloro|En el ordenador: las piezas del loro", fase: 'ordinador',
          fa: "Cada alumne/a fa les preguntes, «Descobreix», ordenar les parts i les tres peces del lloro (capçal, dades, índex i seccions), amb la pausa al mig. A «L'esbós de la fitxa», que toquin «Ho hem fet!». Aquestes peces són el model que faran servir per a la seva fitxa.|Cada alumno/a hace las preguntas, «Descubre», ordenar las partes y las tres piezas del loro (cabecera, datos, índice y secciones), con la pausa en medio. En «El boceto de la ficha», que toquen «¡Lo hemos hecho!». Estas piezas son el modelo que usarán para su ficha.",
          diu: ["Peça a peça: no passis a la següent fins que la llista estigui tota marcada.|Pieza a pieza: no pases a la siguiente hasta que la lista esté toda marcada.", "Si et perds, torna a mirar l'esbós.|Si te pierdes, vuelve a mirar el boceto."],
          slides: ['s9', 's10'], app: "Del recorda fins a la peça 3: les dues preguntes, la història, «Descobreix», ordenar les parts, «L'esbós de la fitxa» (ja fet), les peces 1 i 2, la «Pausa activa» i la peça 3.|Del recuerda hasta la pieza 3: las dos preguntas, la historia, «Descubre», ordenar las partes, «El boceto de la ficha» (ya hecho), las piezas 1 y 2, la «Pausa activa» y la pieza 3.", org: "Individual|Individual" },
        { min: 5, t: "Revisem com els professionals|Revisamos como los profesionales", fase: 'ordinador',
          fa: "Projecta la llista de revisió i feu junts la pregunta de la papallona. Després, cadascú arregla la fitxa de la guineu, que té tres problemes.|Proyecta la lista de revisión y haced juntos la pregunta de la mariposa. Después, cada uno arregla la ficha del zorro, que tiene tres problemas.",
          diu: ["Llegim la llista punt per punt. La imatge té un alt que la descriu?|Leemos la lista punto por punto. ¿La imagen tiene un alt que la describe?", "Cada enllaç de l'índex té on saltar?|¿Cada enlace del índice tiene adónde saltar?"],
          slides: ['s11'], app: "«Investiga»: el problema d'accessibilitat de la papallona, i el repte de revisar la fitxa de la guineu.|«Investiga»: el problema de accesibilidad de la mariposa, y el reto de revisar la ficha del zorro.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 15, t: "Crea: la fitxa del meu animal|Crea: la ficha de mi animal", fase: 'crea',
          fa: "Cada alumne/a omple l'esquelet amb la fitxa del seu animal seguint l'esbós. Passeja i ajuda amb preguntes. Quan acabin, en parelles fan la revisió amb la fitxa impresa: primer una cosa que els agrada, després una que millorarien, i tenen uns minuts per arreglar-la.|Cada alumno/a rellena el esqueleto con la ficha de su animal siguiendo el boceto. Pasea y ayuda con preguntas. Cuando terminen, por parejas hacen la revisión con la ficha impresa: primero algo que les gusta, después algo que mejorarían, y tienen unos minutos para arreglarla.",
          diu: ["Ves comentari per comentari: cada comentari és una part de l'esbós.|Ve comentario por comentario: cada comentario es una parte del boceto.", "Primer digues una cosa que t'agrada de la fitxa del company/a.|Primero di algo que te gusta de la ficha del compañero/a.", "Quin canvi faràs després de la revisió?|¿Qué cambio harás después de la revisión?"],
          slides: ['s12', 's13', 's14'], app: "Pas «Crea»: La fitxa del meu animal (es desa a «Projectes»), i «Revisió en parella».|Paso «Crea»: La ficha de mi animal (se guarda en «Proyectos»), y «Revisión en pareja».", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 5, t: "Galeria i tancament|Galería y cierre", fase: 'tancament',
          fa: "Projecta dues o tres fitxes (amb permís dels autors/es) i destaca'n una cosa ben feta de cadascuna. Repassa la unitat amb el resum, deixa que responguin les preguntes finals i fes el tiquet de sortida.|Proyecta dos o tres fichas (con permiso de los autores/as) y destaca una cosa bien hecha de cada una. Repasa la unidad con el resumen, deja que respondan las preguntas finales y haz el ticket de salida.",
          diu: ["Qui vol ensenyar la seva fitxa? Què n'esteu més orgullosos?|¿Quién quiere enseñar su ficha? ¿De qué estáis más orgullosos?", "Què heu après en aquesta unitat que fareu servir a totes les webs?|¿Qué habéis aprendido en esta unidad que usaréis en todas las webs?"],
          slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Comença a escriure codi sense esbós i es perd a mig camí.|Empieza a escribir código sin boceto y se pierde a medio camino.",
          "Demana-li que t'ensenyi l'esbós i que et digui quina part està fent ara. Si no en té, que el faci en dos minuts.|Pídele que te enseñe el boceto y que te diga qué parte está haciendo ahora. Si no tiene, que lo haga en dos minutos."],
        ["L'índex no salta perquè l'id i l'enllaç no tenen el mateix nom.|El índice no salta porque el id y el enlace no tienen el mismo nombre.",
          "Que posi l'enllaç i l'id un al costat de l'altre i els compari lletra a lletra (el coixinet, només a l'enllaç).|Que ponga el enlace y el id uno al lado del otro y los compare letra a letra (la almohadilla, solo en el enlace)."],
        ["Copia el text sencer d'un llibre o d'una web a les seccions.|Copia el texto entero de un libro o de una web en las secciones.",
          "Que tanqui el llibre i t'expliqui la dada en veu alta. Després, que l'escrigui tal com te l'ha explicada.|Que cierre el libro y te explique el dato en voz alta. Después, que lo escriba tal como te lo ha explicado."],
        ["Barreja l'ordre dels títols (un h2 abans de l'h1) o fa servir h2 per fer lletra grossa.|Mezcla el orden de los títulos (un h2 antes del h1) o usa h2 para hacer letra grande.",
          "Pregunta-li quin és el títol de tota la pàgina i quins són els títols de les parts. Recorda la unitat 2: els títols van en ordre.|Pregúntale cuál es el título de toda la página y cuáles son los títulos de las partes. Recuerda la unidad 2: los títulos van en orden."],
        ["A la revisió en parella només diu «està bé» o només critica.|En la revisión en pareja solo dice «está bien» o solo critica.",
          "Recorda l'ordre: una cosa que t'agrada i una que milloraries, amb un exemple concret de la fitxa.|Recuerda el orden: algo que te gusta y algo que mejorarías, con un ejemplo concreto de la ficha."]
      ],
      diff: {
        mes: "Afegir una segona figura, una tercera secció i un enllaç «Torna a dalt» al final de cada secció. Afegir a les fonts un llibre de l'aula amb autor/a, títol, editorial i any.|Añadir una segunda figura, una tercera sección y un enlace «Vuelve arriba» al final de cada sección. Añadir a las fuentes un libro del aula con autor/a, título, editorial y año.",
        menys: "Fer la fitxa del lloro amb les tres peces de l'app com a model i canviar-ne només l'animal, la imatge i les dades. Fer servir els botons de fragments per a cada part.|Hacer la ficha del loro con las tres piezas de la app como modelo y cambiar solo el animal, la imagen y los datos. Usar los botones de fragmentos para cada parte."
      },
      aval: {
        ticket: ["Digues tres coses que ha de tenir una bona fitxa d'un animal.|Di tres cosas que tiene que tener una buena ficha de un animal.",
          "Quina millora has fet a la teva fitxa després de la revisió?|¿Qué mejora has hecho en tu ficha después de la revisión?"],
        rubric: [
          ["Planificació|Planificación", "Fa un esbós complet i el segueix per construir la pàgina.|Hace un boceto completo y lo sigue para construir la página.", "Fa l'esbós, però el deixa de banda a l'ordinador.|Hace el boceto, pero lo deja de lado en el ordenador."],
          ["Fitxa completa|Ficha completa", "La fitxa té totes les parts, amb alt descriptiu, índex que funciona i fonts amb enllaç.|La ficha tiene todas las partes, con alt descriptivo, índice que funciona y fuentes con enlace.", "Té la majoria de parts, però falla l'índex, l'alt o les fonts.|Tiene la mayoría de partes, pero falla el índice, el alt o las fuentes."],
          ["Revisió|Revisión", "Revisa amb la llista, dona comentaris útils i millora la seva fitxa.|Revisa con la lista, da comentarios útiles y mejora su ficha.", "Revisa amb ajuda i fa pocs canvis.|Revisa con ayuda y hace pocos cambios."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu obrir la fitxa a «Projectes» i fer junts la revisió en parella: llegiu-ne l'alt amb els ulls tancats, proveu l'índex i comproveu les fonts.|En casa, con el móvil, podéis abrir la ficha en «Proyectos» y hacer juntos la revisión en pareja: leed su alt con los ojos cerrados, probad el índice y comprobad las fuentes.",
      slides: [
        { id: 's1', k: 'portada', t: "Projecte: la fitxa d'un animal|Proyecto: la ficha de un animal", x: "Avui ajuntem tot el que hem après en una fitxa completa per a l'Animalari.|Hoy juntamos todo lo que hemos aprendido en una ficha completa para el Animalario.",
          nota: "Presenta el projecte i el que s'emportaran: una fitxa desada a «Projectes» que es pot ensenyar a casa.|Presenta el proyecto y lo que se llevarán: una ficha guardada en «Proyectos» que se puede enseñar en casa." },
        { id: 's2', k: 'repas', t: 'Les peces que ja sabem fer|Las piezas que ya sabemos hacer',
          punts: ["&lt;img&gt; amb src, alt i width|&lt;img&gt; con src, alt y width", "&lt;a href&gt; a pàgines, a webs i a #id|&lt;a href&gt; a páginas, a webs y a #id", "&lt;figure&gt; i &lt;figcaption&gt; amb l'autor/a|&lt;figure&gt; y &lt;figcaption&gt; con el autor/a", "Les fonts: qui, què, on i quan|Las fuentes: quién, qué, dónde y cuándo"],
          nota: "Demana un exemple de cada peça abans de mostrar-la. Qui dubti, que ho apunti per mirar-ho a les peces del lloro.|Pide un ejemplo de cada pieza antes de mostrarla. Quien dude, que lo apunte para mirarlo en las piezas del loro." },
        { id: 's3', k: 'media', t: 'On arribarem|Adónde llegaremos', x: "La fitxa completa del lloro.|La ficha completa del loro.",
          media: { k: 'web', html: C(`<h1>El lloro</h1>
<p><a href="#on-viu">On viu</a> · <a href="#fonts">Fonts</a></p>
<figure>
  <img src="img/tech/web/lloro.svg" alt="Un lloro vermell, verd i blau en una branca" width="150">
  <figcaption>Un lloro a la selva. Dibuix: Numi.</figcaption>
</figure>
<ul>
  <li><strong>Menja:</strong> fruita i llavors</li>
  <li><strong>Curiositat:</strong> pot imitar sons</li>
</ul>
<h2 id="on-viu">On viu</h2>
<p>En boscos de llocs càlids.</p>
<h2 id="fonts">Fonts</h2>
<p><a href="https://exemple.numi/lloros">Club de Naturalistes: Els lloros</a></p>`, `<h1>El loro</h1>
<p><a href="#donde-vive">Dónde vive</a> · <a href="#fuentes">Fuentes</a></p>
<figure>
  <img src="img/tech/web/lloro.svg" alt="Un loro rojo, verde y azul en una rama" width="150">
  <figcaption>Un loro en la selva. Dibujo: Numi.</figcaption>
</figure>
<ul>
  <li><strong>Come:</strong> fruta y semillas</li>
  <li><strong>Curiosidad:</strong> puede imitar sonidos</li>
</ul>
<h2 id="donde-vive">Dónde vive</h2>
<p>En bosques de lugares cálidos.</p>
<h2 id="fuentes">Fuentes</h2>
<p><a href="https://exemple.numi/loros">Club de Naturalistas: Los loros</a></p>`) },
          nota: "Recorre la fitxa de dalt a baix i demana quina peça és cada part. Fes notar que totes ja les han fet en sessions anteriors.|Recorre la ficha de arriba abajo y pide qué pieza es cada parte. Haz notar que todas ya las han hecho en sesiones anteriores." },
        { id: 's4', k: 'anim', t: "Primer l'esbós|Primero el boceto", anim: 'w3plan', x: "Un rectangle per a cada part, en ordre. Les imatges, amb una creu.|Un rectángulo para cada parte, en orden. Las imágenes, con una cruz.",
          nota: "Dibuixa un esbós a la pissarra mentre parles: no cal que sigui bonic, cal que sigui clar.|Dibuja un boceto en la pizarra mientras hablas: no hace falta que sea bonito, hace falta que sea claro." },
        { id: 's5', k: 'media', t: 'Les dades ràpides|Los datos rápidos', x: "Una llista, i el nom de cada dada en &lt;strong&gt;.|Una lista, y el nombre de cada dato en &lt;strong&gt;.",
          media: { k: 'web', html: C(`<ul>
  <li><strong>Menja:</strong> fruita i llavors</li>
  <li><strong>Viu:</strong> als boscos càlids</li>
  <li><strong>Curiositat:</strong> pot imitar sons</li>
</ul>`, `<ul>
  <li><strong>Come:</strong> fruta y semillas</li>
  <li><strong>Vive:</strong> en bosques cálidos</li>
  <li><strong>Curiosidad:</strong> puede imitar sonidos</li>
</ul>`) },
          nota: "Recorda la unitat 2: strong vol dir «important», no només negreta.|Recuerda la unidad 2: strong quiere decir «importante», no solo negrita." },
        { id: 's6', k: 'concepte', t: 'La llista de revisió|La lista de revisión', pic: 'img/ment/lli.webp',
          punts: ["Totes les imatges tenen un alt que les descriu?|¿Todas las imágenes tienen un alt que las describe?", "Els enllaços porten on diuen?|¿Los enlaces llevan adonde dicen?", "Els títols van en ordre (h1 i després h2)?|¿Los títulos van en orden (h1 y después h2)?", "Hi ha les fonts? Està escrit amb les meves paraules?|¿Están las fuentes? ¿Está escrito con mis palabras?"],
          nota: "És la mateixa llista de la fitxa de revisió en parella. Deixa-la a la vista durant tota la sessió.|Es la misma lista de la ficha de revisión en pareja. Déjala a la vista durante toda la sesión." },
        { id: 's7', k: 'pregunta', t: 'En quin ordre?|¿En qué orden?',
          punts: ["Nom (h1) → índex → figura|Nombre (h1) → índice → figura", "Dades (ul) → seccions (h2 id)|Datos (ul) → secciones (h2 id)", "Fonts, al final|Fuentes, al final"],
          nota: "Pregunta per què les fonts van al final i l'índex al principi: l'índex serveix per anar a les parts; les fonts, per comprovar-ho tot.|Pregunta por qué las fuentes van al final y el índice al principio: el índice sirve para ir a las partes; las fuentes, para comprobarlo todo." },
        { id: 's8', k: 'activitat', t: "L'esbós de la fitxa|El boceto de la ficha", timer: 10,
          punts: ["Tria l'animal i la imatge.|Elige el animal y la imagen.", "Dibuixa les parts en ordre.|Dibuja las partes en orden.", "Escriu l'alt, tres dades i dues seccions.|Escribe el alt, tres datos y dos secciones.", "Apunta d'on treus cada dada.|Apunta de dónde sacas cada dato."],
          nota: "Reparteix la fitxa de l'esbós. Qui acabi aviat pot buscar una dada curiosa als llibres de l'aula i apuntar-ne la font.|Reparte la ficha del boceto. Quien termine pronto puede buscar un dato curioso en los libros del aula y apuntar su fuente." },
        { id: 's9', k: 'repte', t: 'Les peces del lloro|Las piezas del loro', timer: 12,
          punts: ["Peça 1: títol i figura|Pieza 1: título y figura", "Peça 2: les dades ràpides|Pieza 2: los datos rápidos", "Peça 3: índex i seccions|Pieza 3: índice y secciones"],
          nota: "Que no passin de peça fins que la llista estigui tota marcada. Aquestes peces són el model per a la fitxa pròpia.|Que no pasen de pieza hasta que la lista esté toda marcada. Estas piezas son el modelo para la ficha propia." },
        { id: 's10', k: 'concepte', t: "L'índex i les seccions|El índice y las secciones", code: C(`<p><a href="#on-viu">On viu</a> · <a href="#menja">Què menja</a></p>
...
<h2 id="on-viu">On viu</h2>
<h2 id="menja">Què menja</h2>`, `<p><a href="#donde-vive">Dónde vive</a> · <a href="#come">Qué come</a></p>
...
<h2 id="donde-vive">Dónde vive</h2>
<h2 id="come">Qué come</h2>`),
          punts: ["El mateix nom a l'enllaç (amb #) i a l'id (sense #).|El mismo nombre en el enlace (con #) y en el id (sin #)."],
          nota: "Projecta-la quan arribin a la peça 3: és on més s'equivoquen.|Proyéctala cuando lleguen a la pieza 3: es donde más se equivocan." },
        { id: 's11', k: 'media', t: 'Revisem: què falla?|Revisamos: ¿qué falla?', x: "Passa-hi la llista de revisió.|Pásale la lista de revisión.",
          media: { k: 'web', html: C(`<h1>La papallona</h1>
<p><a href="#menja">Què menja</a></p>
<figure>
  <img src="img/tech/web/papallona.svg" alt="imatge" width="140">
  <figcaption>Papallona del jardí. Dibuix: Numi.</figcaption>
</figure>
<h2 id="menja">Què menja</h2>`, `<h1>La mariposa</h1>
<p><a href="#come">Qué come</a></p>
<figure>
  <img src="img/tech/web/papallona.svg" alt="imagen" width="140">
  <figcaption>Mariposa del jardín. Dibujo: Numi.</figcaption>
</figure>
<h2 id="come">Qué come</h2>`) },
          nota: "Es veu bé, però l'alt diu «imatge». També falten les fonts i el paràgraf de la secció. Que ho trobin amb la llista.|Se ve bien, pero el alt dice «imagen». También faltan las fuentes y el párrafo de la sección. Que lo encuentren con la lista." },
        { id: 's12', k: 'activitat', t: 'Crea: la fitxa del meu animal|Crea: la ficha de mi animal', timer: 12,
          punts: ["Segueix l'esbós i els comentaris de l'esquelet.|Sigue el boceto y los comentarios del esqueleto.", "Mira la llista de comprovacions després de cada part.|Mira la lista de comprobaciones después de cada parte.", "Escriu amb les teves paraules.|Escribe con tus palabras."],
          nota: "Passeja i ajuda amb preguntes. Si algú va molt de pressa, proposa-li els reptes de «Per anar més enllà».|Pasea y ayuda con preguntas. Si alguien va muy deprisa, proponle los retos de «Para ir más allá»." },
        { id: 's13', k: 'activitat', t: 'Revisió en parella|Revisión en pareja', timer: 3,
          punts: ["Llegeix l'alt amb els ulls tancats.|Lee el alt con los ojos cerrados.", "Prova l'índex i mira les fonts.|Prueba el índice y mira las fuentes.", "Una cosa que t'agrada i una que milloraries.|Algo que te gusta y algo que mejorarías."],
          nota: "Reparteix la fitxa de revisió. Que l'omplin per a la fitxa del company/a, no per a la seva.|Reparte la ficha de revisión. Que la rellenen para la ficha del compañero/a, no para la suya." },
        { id: 's14', k: 'concepte', t: 'Comentaris que ajuden|Comentarios que ayudan',
          punts: ["Concrets: «l'alt de la guineu no diu de quin color és».|Concretos: «el alt del zorro no dice de qué color es».", "Amables: primer, el que està bé.|Amables: primero, lo que está bien.", "Útils: una millora que es pugui fer ara.|Útiles: una mejora que se pueda hacer ahora."],
          nota: "Dona un exemple de comentari poc útil («no m'agrada») i un d'útil, i demana que el millorin entre tots.|Da un ejemplo de comentario poco útil («no me gusta») y uno útil, y pide que lo mejoren entre todos." },
        { id: 's15', k: 'resum', t: 'Què hem après a la unitat|Qué hemos aprendido en la unidad',
          punts: ["Imatges amb un alt que les descriu.|Imágenes con un alt que las describe.", "Enllaços a pàgines, a webs i dins de la pàgina.|Enlaces a páginas, a webs y dentro de la página.", "Respectar els autors/es i citar les fonts.|Respetar a los autores/as y citar las fuentes.", "Planificar, construir i revisar una pàgina.|Planificar, construir y revisar una página."],
          nota: "Celebra la feina feta: l'Animalari ja té una fitxa per a cada alumne/a. A la unitat 4 hi posarem colors i lletres amb CSS.|Celebra el trabajo hecho: el Animalario ya tiene una ficha para cada alumno/a. En la unidad 4 le pondremos colores y letras con CSS." },
        { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida',
          punts: ["Digues tres coses que ha de tenir una bona fitxa.|Di tres cosas que tiene que tener una buena ficha.", "Quina millora has fet després de la revisió?|¿Qué mejora has hecho después de la revisión?"],
          nota: "Apunta qui no ha pogut acabar la fitxa: la pot acabar a casa des de «Projectes».|Apunta quién no ha podido terminar la ficha: la puede terminar en casa desde «Proyectos»." }
      ],
      print: [
        { id: 'p1', t: "Fitxa: l'esbós de la fitxa|Ficha: el boceto de la ficha", k: 'fitxa',
          intro: "Planifica la fitxa del teu animal abans d'escriure el codi. Al quadre del primer exercici, dibuixa l'esbós: un rectangle per a cada part.|Planifica la ficha de tu animal antes de escribir el código. En el cuadro del primer ejercicio, dibuja el boceto: un rectángulo para cada parte.",
          items: [
            { q: "Dibuixa l'esbós de la fitxa, amb les parts en ordre: nom, índex, figura, dades, seccions i fonts.|Dibuja el boceto de la ficha, con las partes en orden: nombre, índice, figura, datos, secciones y fuentes.", big: true, sol: "Sis rectangles en aquest ordre; la imatge, amb una creu.|Seis rectángulos en este orden; la imagen, con una cruz." },
            { q: "Quin animal has triat? Quina imatge faràs servir (carpeta i nom del fitxer)?|¿Qué animal has elegido? ¿Qué imagen usarás (carpeta y nombre del archivo)?", sol: "Per exemple: el lloro, img/tech/web/lloro.svg.|Por ejemplo: el loro, img/tech/web/lloro.svg." },
            { q: "Escriu l'alt de la imatge i la llegenda amb l'autor/a.|Escribe el alt de la imagen y la leyenda con el autor/a.", sol: "Per exemple: alt «Un lloro vermell, verd i blau en una branca»; llegenda «Un lloro a la selva. Dibuix: Numi».|Por ejemplo: alt «Un loro rojo, verde y azul en una rama»; leyenda «Un loro en la selva. Dibujo: Numi»." },
            { q: "Escriu tres dades curtes (què menja, on viu, una curiositat).|Escribe tres datos cortos (qué come, dónde vive, una curiosidad).", sol: "Per exemple: Menja fruita i llavors · Viu als boscos càlids · Pot imitar sons.|Por ejemplo: Come fruta y semillas · Vive en bosques cálidos · Puede imitar sonidos." },
            { q: "Escriu el títol de les dues seccions i l'id de cadascuna (sense espais ni accents).|Escribe el título de las dos secciones y el id de cada una (sin espacios ni acentos).", sol: "Per exemple: On viu (on-viu) i Què menja (menja).|Por ejemplo: Dónde vive (donde-vive) y Qué come (come)." },
            { q: "D'on has tret la informació? Escriu-ne la font: qui, què, on i quan.|¿De dónde has sacado la información? Escribe su fuente: quién, qué, dónde y cuándo.", sol: "Per exemple: Club de Naturalistes. «Els lloros». exemple.numi/lloros (consultat el 3 d'octubre).|Por ejemplo: Club de Naturalistas. «Los loros». exemple.numi/loros (consultado el 3 de octubre)." }
          ] },
        { id: 'p2', t: 'Fitxa: revisió en parella|Ficha: revisión en pareja', k: 'fitxa',
          intro: "Revisa la fitxa del teu company/a. Respon cada pregunta amb sí o no i, si cal, explica què milloraries.|Revisa la ficha de tu compañero/a. Responde cada pregunta con sí o no y, si hace falta, explica qué mejorarías.",
          items: [
            { q: "Llegeix l'alt amb els ulls tancats de qui escolta: s'imagina la imatge?|Lee el alt con los ojos cerrados de quien escucha: ¿se imagina la imagen?", sol: "Sí, si l'alt diu quin animal és i com és. Si no, cal afegir-hi el color o què fa.|Sí, si el alt dice qué animal es y cómo es. Si no, hay que añadir el color o qué hace." },
            { q: "Els enllaços de l'índex salten a la secció bona?|¿Los enlaces del índice saltan a la sección buena?", sol: "Cada href=\"#…\" ha de tenir un id igual (sense #) en una secció.|Cada href=\"#…\" tiene que tener un id igual (sin #) en una sección." },
            { q: "La imatge té una llegenda amb l'autor/a?|¿La imagen tiene una leyenda con el autor/a?", sol: "Ha de ser dins de &lt;figcaption&gt;, per exemple «Dibuix: Numi».|Tiene que estar dentro de &lt;figcaption&gt;, por ejemplo «Dibujo: Numi»." },
            { q: "Els títols van en ordre? Hi ha les fonts al final, amb enllaç?|¿Los títulos van en orden? ¿Están las fuentes al final, con enlace?", sol: "Primer h1, després h2. Les fonts, en una secció amb enllaços complets (https://).|Primero h1, después h2. Las fuentes, en una sección con enlaces completos (https://)." },
            { q: "Una cosa que t'agrada de la fitxa i una que milloraries.|Algo que te gusta de la ficha y algo que mejorarías.", sol: "Resposta lliure: ha de ser concreta i amable.|Respuesta libre: tiene que ser concreta y amable." }
          ] }
      ]
    }
  });
})());
