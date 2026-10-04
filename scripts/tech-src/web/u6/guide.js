/* Tech Web · unitat 6 «Disposició» · guia del professorat (w6-1 … w6-4)
   Material propi de Numi. Classe de 60 minuts, mateix esquema que TGUIDE['r1-1']. Les diapositives «media» fan servir el
   motor web (tech-web.js): el codi amb colors i la vista prèvia de veritat, perquè la classe predigui abans de mirar-la.
   Dins del codi, «{{català|castellano}}» es tria segons l'idioma de la presentació. */
Object.assign(TGUIDE, (() => {
  const LG = s => s.replace(/\{\{([^{}|]*)\|([^{}]*)\}\}/g, (_, ca, es) => (typeof LANG !== 'undefined' && LANG === 'es') ? es : ca);
  const BI = o => { if (Array.isArray(o)) { o.forEach(BI); return o; } if (!o || typeof o !== 'object') return o;
    for (const k of Object.keys(o)) { const v = o[k]; if ((k === 'html' || k === 'css') && typeof v === 'string' && v.includes('{{')) Object.defineProperty(o, k, { get: () => LG(v), enumerable: true, configurable: true }); else if (v && typeof v === 'object') BI(v); }
    return o; };
  const BOX3 = `<div class="fila">\n  <div class="c">{{Platja|Playa}}</div>\n  <div class="c">{{Bosc|Bosque}}</div>\n  <div class="c">{{Pont|Puente}}</div>\n</div>`;
  const BOXC = `.c {\n  background: #FFC531;\n  padding: 10px;\n}`;
  const NUM = n => Array.from({ length: n }, (_, i) => `  <div class="c">${i + 1}</div>`).join('\n');
  const NUMC = `.c {\n  background: #6C5CE7;\n  color: white;\n  padding: 8px;\n  text-align: center;\n}`;
  const T_CSS = `table {\n  border-collapse: collapse;\n}\nth, td {\n  border: 1px solid #9AA6C8;\n  padding: 6px;\n}\nth {\n  background-color: #14A3B8;\n  color: white;\n}`;
  const TAULA = `<table>\n  <caption>{{Sortides del club|Salidas del club}}</caption>\n  <tr><th>{{Dia|Día}}</th><th>{{Lloc|Lugar}}</th><th>{{Hora|Hora}}</th></tr>\n  <tr><td>{{Dissabte|Sábado}}</td><td>{{El moll|El muelle}}</td><td>10:00</td></tr>\n  <tr><td>{{Diumenge|Domingo}}</td><td>{{El bosc|El bosque}}</td><td>9:30</td></tr>\n</table>`;
  const img = (n, a) => `<img src="img/tech/web/${n}.svg" alt="{{${a}}}">`;

  return BI({
  /* ---------- Sessió 1 · Una al costat de l'altra ---------- */
  'w6-1': {
    obj: [
      "L'alumne/a explica per què les caixes de bloc fan pila i que flexbox les posa en fila des del contenidor.|El alumno/a explica por qué las cajas de bloque hacen pila y que flexbox las pone en fila desde el contenedor.",
      "L'alumne/a escriu una regla amb display: flex i gap per posar fotos i enllaços en fila.|El alumno/a escribe una regla con display: flex y gap para poner fotos y enlaces en fila.",
      "L'alumne/a fa servir flex-direction i justify-content per decidir la direcció i on es col·loquen els elements.|El alumno/a usa flex-direction y justify-content para decidir la dirección y dónde se colocan los elementos.",
      "L'alumne/a troba i arregla errors típics de flexbox (valors mal escrits, regla posada als fills, contenidor mal tancat).|El alumno/a encuentra y arregla errores típicos de flexbox (valores mal escritos, regla puesta en los hijos, contenedor mal cerrado)."
    ],
    comp: [
      "Competència digital (CD2): crear continguts digitals amb HTML i CSS|Competencia digital (CD2): crear contenidos digitales con HTML y CSS",
      "Pensament computacional (CD5): predir el resultat d'un codi i depurar-lo|Pensamiento computacional (CD5): predecir el resultado de un código y depurarlo",
      "Matemàtiques (sentit espacial): files, columnes, alineació i distribució de l'espai|Matemáticas (sentido espacial): filas, columnas, alineación y distribución del espacio",
      "Comunicació: explicar amb vocabulari tècnic com es col·loquen els elements|Comunicación: explicar con vocabulario técnico cómo se colocan los elementos"
    ],
    vocab: [
      ["Disposició (layout)|Disposición (layout)", "Com es col·loquen les caixes d'una pàgina: en fila, en columna, en graella…|Cómo se colocan las cajas de una página: en fila, en columna, en rejilla…"],
      ["Contenidor|Contenedor", "La caixa que en conté d'altres i les col·loca (el pare).|La caja que contiene otras y las coloca (el padre)."],
      ["Element (flex)|Elemento (flex)", "Cada caixa de dins del contenidor (els fills).|Cada caja de dentro del contenedor (los hijos)."],
      ["Flexbox|Flexbox", "L'eina del CSS per posar elements en una fila o en una columna: display: flex.|La herramienta del CSS para poner elementos en una fila o en una columna: display: flex."],
      ["gap|gap", "L'espai que flex deixa entre element i element.|El espacio que flex deja entre elemento y elemento."],
      ["justify-content|justify-content", "On van els elements al llarg de la fila: inici, centre, final o repartits.|Dónde van los elementos a lo largo de la fila: inicio, centro, final o repartidos."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Una al costat de l'altra»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Una al lado de la otra»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Cinta de pintor per marcar al terra un rectangle de 3 × 1,5 m (el contenidor)|Cinta de pintor para marcar en el suelo un rectángulo de 3 × 1,5 m (el contenedor)",
        "4 fulls A4 amb un número gran (1, 2, 3, 4) per als alumnes que fan d'elements|4 hojas A4 con un número grande (1, 2, 3, 4) para los alumnos que hacen de elementos"
      ],
      imprimir: ["Targetes de CSS: som caixes flex|Tarjetas de CSS: somos cajas flex"],
      prep: [
        "Marcar el contenidor al terra en un espai lliure. Si no n'hi ha, fer servir una taula llarga com a contenidor i figuretes o gomes d'esborrar com a elements.|Marcar el contenedor en el suelo en un espacio libre. Si no lo hay, usar una mesa larga como contenedor y figuritas o gomas de borrar como elementos.",
        "Imprimir i retallar un paquet de targetes de CSS per grup (i un de més gran per a la demostració).|Imprimir y recortar un paquete de tarjetas de CSS por grupo (y uno más grande para la demostración).",
        "Provar abans les diapositives de demostració: el codi i la vista prèvia es veuen un al costat de l'altre.|Probar antes las diapositivas de demostración: el código y la vista previa se ven uno al lado del otro.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 4, t: "Benvinguda: la web del Club Foto|Bienvenida: la web del Club Foto", fase: 'inici',
        fa: "Presenta la missió de la unitat: el Club Foto del poble necessita una web per ensenyar les fotos. Pregunta com es posen dues fotos l'una al costat de l'altra en una web i recull respostes sense corregir. Remarca que fins ara tot sortia en pila.|Presenta la misión de la unidad: el Club Foto del pueblo necesita una web para enseñar las fotos. Pregunta cómo se ponen dos fotos una al lado de la otra en una web y recoge respuestas sin corregir. Remarca que hasta ahora todo salía en pila.",
        diu: ["Fins ara, tot el que heu fet sortia una cosa sota l'altra. Per què creieu que passa?|Hasta ahora, todo lo que habéis hecho salía una cosa debajo de la otra. ¿Por qué creéis que pasa?",
          "En aquesta unitat sereu els dissenyadors i dissenyadores de la web del club.|En esta unidad seréis los diseñadores y diseñadoras de la web del club."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Flexbox: el contenidor posa els fills en fila|Flexbox: el contenedor pone a los hijos en fila", fase: 'teoria',
        fa: "Mostra l'animació de les caixes en pila i en fila. Passa les dues demostracions (display: flex i gap) i, abans de cadascuna, demana què creuen que canviarà a la vista prèvia. Acaba amb l'error típic: posar display: flex a cada foto. Fes la pregunta de predicció i que votin amb els dits (1, 2 o 3).|Muestra la animación de las cajas en pila y en fila. Pasa las dos demostraciones (display: flex y gap) y, antes de cada una, pregunta qué creen que cambiará en la vista previa. Termina con el error típico: poner display: flex en cada foto. Haz la pregunta de predicción y que voten con los dedos (1, 2 o 3).",
        diu: ["Qui conté les fotos? Aquest és el contenidor, el pare.|¿Quién contiene las fotos? Ese es el contenedor, el padre.",
          "Abans de mirar la vista prèvia: què creieu que farà el gap?|Antes de mirar la vista previa: ¿qué creéis que hará el gap?",
          "Si poso display: flex a cada foto, es posaran en fila? Per què no?|Si pongo display: flex en cada foto, ¿se pondrán en fila? ¿Por qué no?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Som caixes flex|Somos cajas flex", fase: 'desconnectat',
        fa: "Quatre voluntaris fan d'elements amb un full numerat i es posen dins del contenidor marcat al terra, l'un darrere l'altre (en pila). Un alumne/a fa de navegador i un altre, de programador/a: el programador/a ensenya una targeta de CSS i el navegador col·loca els elements. Abans de moure's, la resta de la classe prediu com quedarà. Després, en grups de 4, un/a dibuixa una disposició i els altres trien les targetes que la fan. Inclou la targeta trampa «.foto { display: flex }»: si s'aplica a un element, no passa res.|Cuatro voluntarios hacen de elementos con una hoja numerada y se ponen dentro del contenedor marcado en el suelo, uno detrás del otro (en pila). Un alumno/a hace de navegador y otro, de programador/a: el programador/a enseña una tarjeta de CSS y el navegador coloca los elementos. Antes de moverse, el resto de la clase predice cómo quedará. Después, en grupos de 4, uno/a dibuja una disposición y los demás eligen las tarjetas que la hacen. Incluye la tarjeta trampa «.foto { display: flex }»: si se aplica a un elemento, no pasa nada.",
        diu: ["El navegador només mou les caixes quan la targeta és per al contenidor.|El navegador solo mueve las cajas cuando la tarjeta es para el contenedor.",
          "Abans que es moguin: qui sap com quedarà amb space-between?|Antes de que se muevan: ¿quién sabe cómo quedará con space-between?",
          "Quines dues targetes calen per fer una columna amb espai entre els elements?|¿Qué dos tarjetas hacen falta para hacer una columna con espacio entre los elementos?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Tot el grup i després grups de 4|Todo el grupo y después grupos de 4" },
      { min: 14, t: "A l'ordinador: descobreix i primers reptes|En el ordenador: descubre y primeros retos", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la segona targeta de teoria. A «Caixes de veritat» poden tocar «Ara no»: és per fer-la a casa. Passeja per l'aula i, als reptes, demana que llegeixin en veu alta les comprovacions que encara no estan marcades abans de demanar ajuda.|Cada alumno/a avanza a su ritmo hasta la segunda tarjeta de teoría. En «Cajas de verdad» pueden tocar «Ahora no»: es para hacerla en casa. Pasea por el aula y, en los retos, pide que lean en voz alta las comprobaciones que aún no están marcadas antes de pedir ayuda.",
        diu: ["Quina comprovació et falta? Què et demana exactament?|¿Qué comprobación te falta? ¿Qué te pide exactamente?",
          "On es tanca el contenidor? Les fotos són a dins?|¿Dónde se cierra el contenedor? ¿Las fotos están dentro?",
          "Mira l'avís de sota l'editor: et diu la línia de l'error.|Mira el aviso de debajo del editor: te dice la línea del error."],
        slides: ['s11'], app: "Des de «Recorda» fins al repte de la quarta foto: les dues preguntes de repàs, la missió, «Descobreix», ordenar els passos, «Caixes de veritat» (per a casa), les prediccions, la línia amb l'error, la pausa activa i els reptes de la fila de fotos i del gap.|Desde «Recuerda» hasta el reto de la cuarta foto: las dos preguntas de repaso, la misión, «Descubre», ordenar los pasos, «Cajas de verdad» (para casa), las predicciones, la línea con el error, la pausa activa y los retos de la fila de fotos y del gap.", org: "Individual|Individual" },
      { min: 4, t: "Direcció i justify-content|Dirección y justify-content", fase: 'teoria',
        fa: "Atura un moment la classe. Mostra l'animació de justify-content i demana que diguin el valor abans que aparegui. Passa la demostració del menú i pregunta on han vist menús com aquest.|Para un momento la clase. Muestra la animación de justify-content y pide que digan el valor antes de que aparezca. Pasa la demostración del menú y pregunta dónde han visto menús como este.",
        diu: ["Amb center, on van les caixes? I amb space-between?|Con center, ¿dónde van las cajas? ¿Y con space-between?",
          "Quines webs coneixeu que tinguin el menú en una fila?|¿Qué webs conocéis que tengan el menú en una fila?"],
        slides: ['s12', 's13'], app: "Pantalles abaixades un moment.|Pantallas bajadas un momento.", org: "Tot el grup|Todo el grupo" },
      { min: 9, t: "Reptes: el menú i caça els errors|Retos: el menú y caza los errores", fase: 'ordinador',
        fa: "Fan la segona part de teoria a l'app, la predicció de justify-content, el menú del club i el repte dels tres errors. Qui acabi ajuda un company/a fent preguntes, sense tocar-li el teclat.|Hacen la segunda parte de teoría en la app, la predicción de justify-content, el menú del club y el reto de los tres errores. Quien termine ayuda a un compañero/a haciendo preguntas, sin tocarle el teclado.",
        diu: ["Al repte dels errors: llegeix cada línia com si fossis el navegador. L'entendries?|En el reto de los errores: lee cada línea como si fueras el navegador. ¿La entenderías?",
          "Si ajudes algú, assenyala la línia però no l'escriguis tu.|Si ayudas a alguien, señala la línea pero no la escribas tú."],
        slides: ['s14'], app: "La segona «Descobreix» (direcció, justify-content i el menú), la predicció de space-between, el menú del club i «Caça els errors» de la llista en columna.|El segundo «Descubre» (dirección, justify-content y el menú), la predicción de space-between, el menú del club y «Caza los errores» de la lista en columna.", org: "Individual|Individual" },
      { min: 7, t: "Crea: la capçalera del Club Foto|Crea: la cabecera del Club Foto", fase: 'crea',
        fa: "Cada alumne/a fa la seva capçalera: títol, menú en fila i fila de fotos. Anima'ls a provar valors diferents de justify-content i a mirar-ho amb el botó del mòbil i el de l'ordinador. Si no acaben, ho poden continuar a casa: es desa al portafoli.|Cada alumno/a hace su cabecera: título, menú en fila y fila de fotos. Anímales a probar valores diferentes de justify-content y a mirarlo con el botón del móvil y el del ordenador. Si no terminan, lo pueden continuar en casa: se guarda en el portafolio.",
        diu: ["Prova center, space-between i flex-end: quin t'agrada més per al menú?|Prueba center, space-between y flex-end: ¿cuál te gusta más para el menú?",
          "Les teves fotos tenen un alt que les descriu?|¿Tus fotos tienen un alt que las describe?"],
        slides: ['s15'], app: "Pas «Crea»: La capçalera del Club Foto.|Paso «Crea»: La cabecera del Club Foto.", org: "Individual|Individual" },
      { min: 4, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una de les preguntes del tiquet.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una de las preguntas del ticket.",
        diu: ["On es posa display: flex: al pare o als fills?|¿Dónde se pone display: flex: en el padre o en los hijos?",
          "Quina diferència hi ha entre gap i justify-content?|¿Qué diferencia hay entre gap y justify-content?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa display: flex a cada foto (.foto) i no al contenidor.|Pone display: flex en cada foto (.foto) y no en el contenedor.",
        "Pregunta-li: qui conté les fotos? Qui les ha de col·locar? Que assenyali amb el dit la caixa que les envolta a l'HTML.|Pregúntale: ¿quién contiene las fotos? ¿Quién las tiene que colocar? Que señale con el dedo la caja que las envuelve en el HTML."],
      ["Tanca el contenidor abans d'hora i les fotos queden fora del &lt;div class=\"fila\"&gt;.|Cierra el contenedor antes de tiempo y las fotos quedan fuera del &lt;div class=\"fila\"&gt;.",
        "Que segueixi amb el dit on s'obre i on es tanca cada &lt;div&gt;. El sagnat ajuda: tot el que és a dins va més cap a la dreta.|Que siga con el dedo dónde se abre y dónde se cierra cada &lt;div&gt;. El sangrado ayuda: todo lo que está dentro va más hacia la derecha."],
      ["Escriu valors que el navegador no entén: flexbox, colum, centre, o oblida els dos punts.|Escribe valores que el navegador no entiende: flexbox, colum, centre, u olvida los dos puntos.",
        "No li diguis quina paraula és: que compari la seva línia amb la targeta de CSS lletra a lletra i que llegeixi l'avís de sota l'editor.|No le digas qué palabra es: que compare su línea con la tarjeta de CSS letra a letra y que lea el aviso de debajo del editor."],
      ["Separa les fotos posant margin a cadascuna en lloc de gap.|Separa las fotos poniendo margin en cada una en lugar de gap.",
        "Funciona, però pregunta-li què passa als extrems de la fila. Que provi gap i compari els dos resultats.|Funciona, pero pregúntale qué pasa en los extremos de la fila. Que pruebe gap y compare los dos resultados."],
      ["Confon justify-content amb text-align.|Confunde justify-content con text-align.",
        "text-align mou el text de dins d'una caixa; justify-content mou les caixes senceres. Que provi les dues coses al menú i digui què es mou.|text-align mueve el texto de dentro de una caja; justify-content mueve las cajas enteras. Que pruebe las dos cosas en el menú y diga qué se mueve."]
    ],
    diff: {
      mes: "Fer un menú amb un enllaç a l'esquerra (el logo) i la resta a la dreta, posant dues fileres flex una dins de l'altra. Provar també flex-wrap: wrap amb 8 fotos i explicar què fa quan no hi caben.|Hacer un menú con un enlace a la izquierda (el logo) y el resto a la derecha, poniendo dos filas flex una dentro de la otra. Probar también flex-wrap: wrap con 8 fotos y explicar qué hace cuando no caben.",
      menys: "Tenir les targetes de CSS a la taula i copiar-les lletra a lletra. Fer primer només el repte de la fila de fotos i fer servir els botons de fragments de sota l'editor.|Tener las tarjetas de CSS en la mesa y copiarlas letra a letra. Hacer primero solo el reto de la fila de fotos y usar los botones de fragmentos de debajo del editor."
    },
    aval: {
      ticket: ["A quina caixa s'escriu display: flex per posar tres fotos en fila? Per què?|¿En qué caja se escribe display: flex para poner tres fotos en fila? ¿Por qué?",
        "Digues un valor de justify-content i on deixa els elements.|Di un valor de justify-content y dónde deja los elementos."],
      rubric: [
        ["Contenidor i elements|Contenedor y elementos", "Posa display: flex al contenidor i explica que el pare col·loca els fills.|Pone display: flex en el contenedor y explica que el padre coloca a los hijos.", "Fa la fila, però de vegades posa la regla als elements.|Hace la fila, pero a veces pone la regla en los elementos."],
        ["Propietats de flex|Propiedades de flex", "Fa servir gap, flex-direction i justify-content segons el que vol aconseguir.|Usa gap, flex-direction y justify-content según lo que quiere conseguir.", "Fa servir display: flex, però prova valors a l'atzar per a la resta.|Usa display: flex, pero prueba valores al azar para el resto."],
        ["Depurar|Depurar", "Troba els tres errors del CSS llegint les comprovacions i l'avís.|Encuentra los tres errores del CSS leyendo las comprobaciones y el aviso.", "Troba algun error, però necessita ajuda per als valors mal escrits.|Encuentra algún error, pero necesita ayuda para los valores mal escritos."]
      ]
    },
    casa: "A casa, amb el mòbil, es pot repetir la sessió i fer «Caixes de veritat»: una safata fa de contenidor, uns quants objectes fan d'elements i una persona de la família diu regles de CSS. També es pot continuar la capçalera del club des del portafoli.|En casa, con el móvil, se puede repetir la sesión y hacer «Cajas de verdad»: una bandeja hace de contenedor, unos cuantos objetos hacen de elementos y una persona de la familia dice reglas de CSS. También se puede continuar la cabecera del club desde el portafolio.",
    slides: [
      { id: 's1', k: 'portada', t: "Una al costat de l'altra|Una al lado de la otra", x: "Comença la unitat de la disposició: avui posarem caixes en fila i en columna amb flexbox.|Empieza la unidad de la disposición: hoy pondremos cajas en fila y en columna con flexbox.",
        nota: "Presenta l'objectiu: al final de la classe, cadascú tindrà la capçalera de la web del club amb un menú i una fila de fotos.|Presenta el objetivo: al final de la clase, cada uno tendrá la cabecera de la web del club con un menú y una fila de fotos." },
      { id: 's2', k: 'pregunta', t: "Com es posen dues fotos l'una al costat de l'altra?|¿Cómo se ponen dos fotos una al lado de la otra?", x: "Fins ara, a les vostres pàgines tot sortia una cosa sota l'altra. Per què?|Hasta ahora, en vuestras páginas todo salía una cosa debajo de la otra. ¿Por qué?",
        nota: "Recull respostes sense corregir. Algú pot recordar que les caixes de bloc ocupen tota l'amplada: és la clau de la sessió.|Recoge respuestas sin corregir. Alguien puede recordar que las cajas de bloque ocupan todo el ancho: es la clave de la sesión." },
      { id: 's3', k: 'concepte', t: 'La missió: el Club Foto|La misión: el Club Foto', pic: 'img/tech/scenes/poble.webp', punts: ["El club fa fotos a les sortides: la platja, el bosc, el pont…|El club hace fotos en las salidas: la playa, el bosque, el puente…", "Vol una web per ensenyar-les a les famílies.|Quiere una web para enseñarlas a las familias.", "Problema: tot surt en una torre llarguíssima!|Problema: ¡todo sale en una torre larguísima!"],
        nota: "Explica que durant les quatre sessions faran la web del club i que l'última serà el seu àlbum de fotos.|Explica que durante las cuatro sesiones harán la web del club y que la última será su álbum de fotos." },
      { id: 's4', k: 'anim', t: 'De la pila a la fila|De la pila a la fila', anim: 'w6stack', x: "Les caixes de bloc fan pila. Amb display: flex al contenidor, fan fila.|Las cajas de bloque hacen pila. Con display: flex en el contenedor, hacen fila.",
        nota: "Fes notar que el contenidor és la línia discontínua: és ell qui rep la regla.|Haz notar que el contenedor es la línea discontinua: es él quien recibe la regla." },
      { id: 's5', k: 'media', t: 'display: flex|display: flex', x: "El contenidor .fila conté tres caixes. Què passa amb una sola línia de CSS?|El contenedor .fila contiene tres cajas. ¿Qué pasa con una sola línea de CSS?",
        media: { k: 'web', html: BOX3, css: `.fila {\n  display: flex;\n}\n${BOXC}` },
        nota: "Tapa la vista prèvia amb la mà (o amb un full) i demana que la descriguin abans de mirar-la.|Tapa la vista previa con la mano (o con una hoja) y pide que la describan antes de mirarla." },
      { id: 's6', k: 'media', t: 'gap: espai entre elements|gap: espacio entre elementos', x: "El mateix codi amb gap: 16px. On apareix l'espai?|El mismo código con gap: 16px. ¿Dónde aparece el espacio?",
        media: { k: 'web', html: BOX3, css: `.fila {\n  display: flex;\n  gap: 16px;\n}\n${BOXC}` },
        nota: "Remarca que el gap només és entre els elements: no n'hi ha a l'esquerra del primer ni a la dreta de l'últim.|Remarca que el gap solo está entre los elementos: no hay a la izquierda del primero ni a la derecha del último." },
      { id: 's7', k: 'anim', t: 'Compte: al pare, no als fills|Cuidado: al padre, no a los hijos', anim: 'w6parent', x: "Si poses display: flex a cada foto, les fotos no es mouen.|Si pones display: flex en cada foto, las fotos no se mueven.",
        nota: "És l'error més habitual de la sessió. Fes la comparació: el pare és qui posa els fills en fila per a la foto de família.|Es el error más habitual de la sesión. Haz la comparación: el padre es quien pone a los hijos en fila para la foto de familia." },
      { id: 's8', k: 'pregunta', t: 'Prediu|Predice', x: "Com es veurà? 1) En fila amb espai, 2) en fila enganxades, 3) en columna.|¿Cómo se verá? 1) En fila con espacio, 2) en fila pegadas, 3) en columna.", code: ".fila {\n  display: flex;\n  gap: 20px;\n}",
        nota: "Que votin amb els dits. Resposta: 1. Pregunta a qui ha dit 3 què hauria de canviar per tenir una columna.|Que voten con los dedos. Respuesta: 1. Pregunta a quien ha dicho 3 qué tendría que cambiar para tener una columna." },
      { id: 's9', k: 'activitat', t: 'Som caixes flex|Somos cajas flex', timer: 10, punts: ["4 alumnes fan d'elements dins del contenidor del terra.|4 alumnos hacen de elementos dentro del contenedor del suelo.", "El programador/a ensenya una targeta de CSS.|El programador/a enseña una tarjeta de CSS.", "La classe prediu i el navegador col·loca els elements.|La clase predice y el navegador coloca los elementos.", "Després, en grups: dibuixa una disposició i trieu les targetes que la fan.|Después, en grupos: dibuja una disposición y elegid las tarjetas que la hacen."],
        nota: "Comença amb display: flex, després gap i, al final, els valors de justify-content. Guarda la targeta trampa per al final.|Empieza con display: flex, después gap y, al final, los valores de justify-content. Guarda la tarjeta trampa para el final." },
      { id: 's10', k: 'activitat', t: 'Les regles del navegador|Las reglas del navegador', punts: ["Les targetes són per al contenidor, no per a una caixa sola.|Las tarjetas son para el contenedor, no para una caja sola.", "Si la targeta està mal escrita, el navegador no fa res.|Si la tarjeta está mal escrita, el navegador no hace nada.", "Els elements no es mouen sols: només quan ho diu una targeta.|Los elementos no se mueven solos: solo cuando lo dice una tarjeta."],
        nota: "Deixa-la projectada durant l'activitat. Si algú es mou abans d'hora, recorda que el navegador només fa el que diu el CSS.|Déjala proyectada durante la actividad. Si alguien se mueve antes de tiempo, recuerda que el navegador solo hace lo que dice el CSS." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 14, punts: ["Obre la sessió «Una al costat de l'altra».|Abre la sesión «Una al lado de la otra».", "«Caixes de veritat» és per a casa: toca «Ara no».|«Cajas de verdad» es para casa: toca «Ahora no».", "Als reptes, llegeix les comprovacions abans de demanar ajuda.|En los retos, lee las comprobaciones antes de pedir ayuda.", "Para quan acabis el repte de la quarta foto.|Para cuando termines el reto de la cuarta foto."],
        nota: "Passeja i fixa't en qui escriu la regla a .foto: és el moment de tornar a la idea del pare i els fills.|Pasea y fíjate en quién escribe la regla en .foto: es el momento de volver a la idea del padre y los hijos." },
      { id: 's12', k: 'anim', t: 'justify-content|justify-content', anim: 'w6justify', x: "On van els elements al llarg de la fila: flex-start, center, flex-end o space-between.|Dónde van los elementos a lo largo de la fila: flex-start, center, flex-end o space-between.",
        nota: "Que diguin el valor en veu alta abans que surti escrit. Explica que flex-direction: column fa el mateix però de dalt a baix.|Que digan el valor en voz alta antes de que salga escrito. Explica que flex-direction: column hace lo mismo pero de arriba abajo." },
      { id: 's13', k: 'media', t: 'Un menú en fila|Un menú en fila', x: "Un nav amb enllaços i tres línies de CSS.|Un nav con enlaces y tres líneas de CSS.",
        media: { k: 'web', html: `<nav>\n  <a href="#">{{Inici|Inicio}}</a>\n  <a href="#">{{Fotos|Fotos}}</a>\n  <a href="#">{{Club|Club}}</a>\n</nav>`, css: `nav {\n  display: flex;\n  justify-content: space-between;\n  background: #14204A;\n  padding: 10px;\n}\nnav a {\n  color: #FFC531;\n}` },
        nota: "Pregunta què passaria amb center o amb flex-end. Si podeu, canvieu el valor en directe a l'app per comprovar-ho.|Pregunta qué pasaría con center o con flex-end. Si podéis, cambiad el valor en directo en la app para comprobarlo." },
      { id: 's14', k: 'repte', t: 'Reptes: el menú i caça els errors|Retos: el menú y caza los errores', timer: 9, punts: ["El menú del club: flex, space-between i gap.|El menú del club: flex, space-between y gap.", "La llista en columna: troba els tres errors.|La lista en columna: encuentra los tres errores."],
        nota: "Pista per als errors: hi ha una paraula de més, una lletra de menys i un signe que falta.|Pista para los errores: hay una palabra de más, una letra de menos y un signo que falta." },
      { id: 's15', k: 'activitat', t: 'Crea: la capçalera del club|Crea: la cabecera del club', timer: 7, x: "Un títol, un menú en fila i una fila de 3 fotos o més. Tu tries els colors i on va cada cosa.|Un título, un menú en fila y una fila de 3 fotos o más. Tú eliges los colores y dónde va cada cosa.",
        nota: "Celebra que les capçaleres siguin diferents. Recorda que es desa al portafoli i que la podran millorar a casa.|Celebra que las cabeceras sean diferentes. Recuerda que se guarda en el portafolio y que la podrán mejorar en casa." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["display: flex al contenidor posa els elements en fila.|display: flex en el contenedor pone los elementos en fila.", "gap separa i flex-direction: column fa una columna.|gap separa y flex-direction: column hace una columna.", "justify-content decideix on van dins la fila.|justify-content decide dónde van dentro de la fila."],
        nota: "Torna a la pregunta del principi: ara ja saben com es posen dues fotos l'una al costat de l'altra.|Vuelve a la pregunta del principio: ahora ya saben cómo se ponen dos fotos una al lado de la otra." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["On s'escriu display: flex per posar tres fotos en fila?|¿Dónde se escribe display: flex para poner tres fotos en fila?", "Digues un valor de justify-content i on deixa els elements.|Di un valor de justify-content y dónde deja los elementos."],
        nota: "Anota qui encara posa la regla als fills: la sessió que ve, comença el repàs amb ells.|Anota quién todavía pone la regla en los hijos: la próxima sesión, empieza el repaso con ellos." }
    ],
    print: [
      { id: 'p1', t: 'Targetes de CSS: som caixes flex|Tarjetas de CSS: somos cajas flex', k: 'targetes',
        intro: "Un paquet per grup de 4 i un de gran per a la demostració. La targeta «.foto { display: flex }» és la trampa: aplicada a un element sol, no mou res.|Un paquete por grupo de 4 y uno grande para la demostración. La tarjeta «.foto { display: flex }» es la trampa: aplicada a un elemento solo, no mueve nada.",
        items: [
          { t: '.fila { display: flex } 🧩|.fila { display: flex } 🧩', n: 2 },
          { t: 'flex-direction: column ⬇️|flex-direction: column ⬇️', n: 1 },
          { t: 'gap: un pas 📏|gap: un paso 📏', n: 2 },
          { t: 'justify-content: flex-start ⬅️|justify-content: flex-start ⬅️', n: 1 },
          { t: 'justify-content: center 🎯|justify-content: center 🎯', n: 1 },
          { t: 'justify-content: flex-end ➡️|justify-content: flex-end ➡️', n: 1 },
          { t: 'justify-content: space-between ↔️|justify-content: space-between ↔️', n: 1 },
          { t: '.foto { display: flex } ❓|.foto { display: flex } ❓', n: 1 },
          { t: 'Contenidor (el pare) 🏠|Contenedor (el padre) 🏠', n: 1 },
          { t: 'Element (un fill) 🙂|Elemento (un hijo) 🙂', n: 4 }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Graelles ---------- */
  'w6-2': {
    obj: [
      "L'alumne/a fa servir align-items per centrar elements d'una fila flex de dalt a baix.|El alumno/a usa align-items para centrar elementos de una fila flex de arriba abajo.",
      "L'alumne/a converteix un contenidor en una graella amb display: grid i grid-template-columns.|El alumno/a convierte un contenedor en una rejilla con display: grid y grid-template-columns.",
      "L'alumne/a explica què vol dir 1fr i prediu quantes files sortiran segons les columnes i els elements.|El alumno/a explica qué quiere decir 1fr y predice cuántas filas saldrán según las columnas y los elementos.",
      "L'alumne/a tria entre flex (una direcció) i grid (dues direccions) segons el que vol fer.|El alumno/a elige entre flex (una dirección) y grid (dos direcciones) según lo que quiere hacer."
    ],
    comp: [
      "Competència digital (CD2): crear una galeria web amb una disposició en graella|Competencia digital (CD2): crear una galería web con una disposición en rejilla",
      "Matemàtiques (nombres i proporcions): fraccions de l'amplada amb fr, divisions per saber les files|Matemáticas (números y proporciones): fracciones del ancho con fr, divisiones para saber las filas",
      "Pensament computacional (CD5): predir el resultat del codi i depurar-lo|Pensamiento computacional (CD5): predecir el resultado del código y depurarlo",
      "Comunicació: descriure una disposició amb paraules perquè un altre la construeixi|Comunicación: describir una disposición con palabras para que otro la construya"
    ],
    vocab: [
      ["align-items|align-items", "On van els elements d'una fila flex de dalt a baix: a dalt, al mig o a baix.|Dónde van los elementos de una fila flex de arriba abajo: arriba, en medio o abajo."],
      ["Graella (grid)|Rejilla (grid)", "Disposició en files i columnes alhora: display: grid.|Disposición en filas y columnas a la vez: display: grid."],
      ["grid-template-columns|grid-template-columns", "La llista de mides de les columnes de la graella.|La lista de tamaños de las columnas de la rejilla."],
      ["fr|fr", "Fracció: un tros de l'espai que queda a la graella.|Fracción: un trozo del espacio que queda en la rejilla."],
      ["repeat()|repeat()", "Una manera curta d'escriure columnes iguals: repeat(3, 1fr).|Una manera corta de escribir columnas iguales: repeat(3, 1fr)."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Graelles»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Rejillas»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un full A3 per grup i 9 notes adhesives (o quadrets de paper) que fan de fotos|Una hoja A3 por grupo y 9 notas adhesivas (o cuadraditos de papel) que hacen de fotos",
        "Llapis, regle i retoladors|Lápices, regla y rotuladores"
      ],
      imprimir: ["Targetes de graella|Tarjetas de rejilla", "Fitxa: graelles de paper|Ficha: rejillas de papel"],
      prep: [
        "Imprimir i retallar les targetes de graella (un paquet per grup) i una fitxa per alumne/a.|Imprimir y recortar las tarjetas de rejilla (un paquete por grupo) y una ficha por alumno/a.",
        "Preparar un A3 per grup amb el contenidor dibuixat (un rectangle gran).|Preparar un A3 por grupo con el contenedor dibujado (un rectángulo grande).",
        "Provar les diapositives de demostració per veure la graella de 6 i de 7 caixes.|Probar las diapositivas de demostración para ver la rejilla de 6 y de 7 cajas.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 4, t: "Repàs i missió: 9 fotos del moll|Repaso y misión: 9 fotos del muelle", fase: 'inici',
        fa: "Repassa flexbox amb la pregunta de la diapositiva i presenta el problema: 9 fotos no caben en una fila i en columna fan la pàgina eterna. Pregunta on veuen files i columnes alhora a la vida diària.|Repasa flexbox con la pregunta de la diapositiva y presenta el problema: 9 fotos no caben en una fila y en columna hacen la página eterna. Pregunta dónde ven filas y columnas a la vez en la vida diaria.",
        diu: ["On s'escrivia display: flex, al pare o als fills?|¿Dónde se escribía display: flex, en el padre o en los hijos?",
          "On veieu coses en files i columnes? Una capsa d'ous, un calendari…|¿Dónde veis cosas en filas y columnas? Una caja de huevos, un calendario…"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "align-items i la graella|align-items y la rejilla", fase: 'teoria',
        fa: "Comença amb align-items: l'animació mostra que és l'altra direcció de justify-content. Després presenta grid amb les demostracions: columnes en píxels, la unitat fr i repeat(). Abans de cada demostració, demana quantes columnes i quantes files sortiran. Acaba comparant flex i grid i amb la pregunta de les 10 fotos.|Empieza con align-items: la animación muestra que es la otra dirección de justify-content. Después presenta grid con las demostraciones: columnas en píxeles, la unidad fr y repeat(). Antes de cada demostración, pregunta cuántas columnas y cuántas filas saldrán. Termina comparando flex y grid y con la pregunta de las 10 fotos.",
        diu: ["justify-content va al llarg de la fila. I align-items?|justify-content va a lo largo de la fila. ¿Y align-items?",
          "Si parteixo l'amplada en 1fr 2fr 1fr, quants trossos hi ha en total?|Si parto el ancho en 1fr 2fr 1fr, ¿cuántos trozos hay en total?",
          "Amb 7 caixes i 3 columnes, quantes files? I quantes caixes a l'última?|Con 7 cajas y 3 columnas, ¿cuántas filas? ¿Y cuántas cajas en la última?"],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Graelles de paper|Rejillas de papel", fase: 'desconnectat',
        fa: "En grups de 3 o 4, cada grup treu una targeta de graella sense ensenyar-la i col·loca les notes adhesives (les fotos) a l'A3 tal com ho faria el navegador. Després, els grups giren: cada grup mira l'A3 d'un altre i escriu quina regla de CSS creu que l'ha fet. Es comprova amb la targeta. Al final, cadascú fa individualment la fitxa.|En grupos de 3 o 4, cada grupo saca una tarjeta de rejilla sin enseñarla y coloca las notas adhesivas (las fotos) en el A3 tal como lo haría el navegador. Después, los grupos giran: cada grupo mira el A3 de otro y escribe qué regla de CSS cree que lo ha hecho. Se comprueba con la tarjeta. Al final, cada uno hace individualmente la ficha.",
        diu: ["El navegador omple les files d'esquerra a dreta, i quan una fila s'acaba, en comença una altra.|El navegador llena las filas de izquierda a derecha, y cuando una fila se acaba, empieza otra.",
          "Com sabeu si és 1fr 2fr o 1fr 1fr? Mireu l'amplada de les columnes.|¿Cómo sabéis si es 1fr 2fr o 1fr 1fr? Mirad el ancho de las columnas.",
          "Si dues regles fan el mateix dibuix, totes dues són bones.|Si dos reglas hacen el mismo dibujo, las dos son buenas."],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4 i després individual|Grupos de 3 o 4 y después individual" },
      { min: 15, t: "A l'ordinador: descobreix i reptes|En el ordenador: descubre y retos", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme: teoria, preguntes, la línia amb l'error, la pausa activa i els reptes de la capçalera i de la galeria. «Caçadors de graelles» és per a casa. Fixa't en qui escriu les columnes amb comes i en qui posa la regla a img en lloc del contenidor.|Cada alumno/a avanza a su ritmo: teoría, preguntas, la línea con el error, la pausa activa y los retos de la cabecera y de la galería. «Cazadores de rejillas» es para casa. Fíjate en quién escribe las columnas con comas y en quién pone la regla en img en lugar del contenedor.",
        diu: ["Quina és la caixa que conté les fotos? Aquesta rep el display: grid.|¿Cuál es la caja que contiene las fotos? Esa recibe el display: grid.",
          "Llegeix la comprovació que et falta: què et demana?|Lee la comprobación que te falta: ¿qué te pide?"],
        slides: ['s11'], app: "Des de «Recorda» fins al repte de la galeria de 3 columnes: el repàs, la missió, «Descobreix», les 10 fotos, «Caçadors de graelles» (per a casa), la predicció de 1fr 2fr, la línia amb l'error, la pausa activa, la capçalera centrada i la galeria.|Desde «Recuerda» hasta el reto de la galería de 3 columnas: el repaso, la misión, «Descubre», las 10 fotos, «Cazadores de rejillas» (para casa), la predicción de 1fr 2fr, la línea con el error, la pausa activa, la cabecera centrada y la galería.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: les mascotes i caça els errors|Retos: las mascotas y caza los errores", fase: 'ordinador',
        fa: "Fan el repte de les mascotes (4 columnes escrites des de zero) i el de la graella amb tres errors. Abans, projecta el codi amb l'error de les comes i pregunta per què no funciona.|Hacen el reto de las mascotas (4 columnas escritas desde cero) y el de la rejilla con tres errores. Antes, proyecta el código con el error de las comas y pregunta por qué no funciona.",
        diu: ["En aquesta línia hi ha una cosa que el navegador no entén. Quina?|En esta línea hay una cosa que el navegador no entiende. ¿Cuál?",
          "Un número de mida sense unitat… el navegador sap si són píxels?|Un número de tamaño sin unidad… ¿el navegador sabe si son píxeles?"],
        slides: ['s12', 's13'], app: "Els reptes de les mascotes del club i de «Caça els errors» de la graella.|Los retos de las mascotas del club y de «Caza los errores» de la rejilla.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 6, t: "Crea: la meva galeria|Crea: mi galería", fase: 'crea',
        fa: "Cada alumne/a s'inventa una sortida i en fa la galeria. Proposa'ls que provin columnes diferents (2fr 1fr 1fr, repeat(2, 1fr)…) i que mirin com canvia al mòbil i a l'ordinador.|Cada alumno/a se inventa una salida y hace su galería. Propónles que prueben columnas diferentes (2fr 1fr 1fr, repeat(2, 1fr)…) y que miren cómo cambia en el móvil y en el ordenador.",
        diu: ["Quina foto vols que sigui més gran? Dona-li més fr a la seva columna.|¿Qué foto quieres que sea más grande? Dale más fr a su columna.",
          "Al mòbil, quantes columnes es veuen bé?|En el móvil, ¿cuántas columnas se ven bien?"],
        slides: ['s14'], app: "Pas «Crea»: La meva galeria.|Paso «Crea»: Mi galería.", org: "Individual|Individual" },
      { min: 2, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum i fes el tiquet a la porta mentre responen les preguntes finals de l'app.|Repasa las tres ideas con el resumen y haz el ticket en la puerta mientras responden las preguntas finales de la app.",
        diu: ["Flex o grid per a una galeria de 12 fotos? Per què?|¿Flex o grid para una galería de 12 fotos? ¿Por qué?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu les columnes separades amb comes: 1fr, 1fr, 1fr.|Escribe las columnas separadas con comas: 1fr, 1fr, 1fr.",
        "Que compari la seva línia amb la de la diapositiva. Pregunta: en una llista de mides de CSS, què separa els valors?|Que compare su línea con la de la diapositiva. Pregunta: en una lista de tamaños de CSS, ¿qué separa los valores?"],
      ["Posa display: grid a les imatges (img) en lloc del contenidor .galeria.|Pone display: grid en las imágenes (img) en lugar del contenedor .galeria.",
        "Recorda la idea del pare i els fills de la sessió passada: qui conté les fotos?|Recuerda la idea del padre y los hijos de la sesión pasada: ¿quién contiene las fotos?"],
      ["Creu que ha d'escriure les files una a una (grid-template-rows o divs per fila).|Cree que tiene que escribir las filas una a una (grid-template-rows o divs por fila).",
        "Que posi totes les fotos al mateix contenidor i miri què passa: la graella fa les files sola.|Que ponga todas las fotos en el mismo contenedor y mire qué pasa: la rejilla hace las filas sola."],
      ["Confon justify-content i align-items a la capçalera.|Confunde justify-content y align-items en la cabecera.",
        "Que digui la direcció amb la mà: ↔ al llarg de la fila (justify) o ↕ de dalt a baix (align). Després, que provi l'altra propietat.|Que diga la dirección con la mano: ↔ a lo largo de la fila (justify) o ↕ de arriba abajo (align). Después, que pruebe la otra propiedad."],
      ["Escriu gap: 10 sense unitat.|Escribe gap: 10 sin unidad.",
        "Pregunta: 10 què? Píxels, centímetres, pams? El navegador tampoc no ho sap.|Pregunta: ¿10 qué? ¿Píxeles, centímetros, palmos? El navegador tampoco lo sabe."]
    ],
    diff: {
      mes: "Fer que la primera foto de la galeria ocupi dues columnes amb grid-column: span 2 i explicar com canvia la resta de la graella. Fer una galeria amb columnes de mides diferents (200px 1fr) i mirar-la al mòbil.|Hacer que la primera foto de la galería ocupe dos columnas con grid-column: span 2 y explicar cómo cambia el resto de la rejilla. Hacer una galería con columnas de tamaños diferentes (200px 1fr) y mirarla en el móvil.",
      menys: "Treballar només amb repeat(2, 1fr) i repeat(3, 1fr) i fer servir els botons de fragments. A la fitxa, comptar les fotos amb el dit, fila a fila.|Trabajar solo con repeat(2, 1fr) y repeat(3, 1fr) y usar los botones de fragmentos. En la ficha, contar las fotos con el dedo, fila a fila."
    },
    aval: {
      ticket: ["Què fa grid-template-columns: repeat(3, 1fr)?|¿Qué hace grid-template-columns: repeat(3, 1fr)?",
        "Per a una galeria de 12 fotos, faries servir flex o grid? Per què?|Para una galería de 12 fotos, ¿usarías flex o grid? ¿Por qué?"],
      rubric: [
        ["La graella|La rejilla", "Fa una galeria amb display: grid al contenidor i columnes ben escrites.|Hace una galería con display: grid en el contenedor y columnas bien escritas.", "Fa la graella amb ajuda o amb errors de format (comes, unitats).|Hace la rejilla con ayuda o con errores de formato (comas, unidades)."],
        ["La unitat fr|La unidad fr", "Explica que 1fr 2fr parteix l'espai en 3 trossos i prediu les files.|Explica que 1fr 2fr parte el espacio en 3 trozos y predice las filas.", "Fa servir 1fr, però encara no prediu com d'amples seran les columnes.|Usa 1fr, pero todavía no predice cómo de anchas serán las columnas."],
        ["Triar l'eina|Elegir la herramienta", "Tria flex per a files i grid per a files i columnes, i ho justifica.|Elige flex para filas y grid para filas y columnas, y lo justifica.", "Fa servir la mateixa eina per a tot.|Usa la misma herramienta para todo."]
      ]
    },
    casa: "A casa, amb el mòbil, es pot repetir la sessió i fer «Caçadors de graelles»: buscar graelles a casa (capsa d'ous, calendari, rajoles…) i escriure'n la regla de CSS. La galeria es pot millorar des del portafoli.|En casa, con el móvil, se puede repetir la sesión y hacer «Cazadores de rejillas»: buscar rejillas en casa (caja de huevos, calendario, azulejos…) y escribir su regla de CSS. La galería se puede mejorar desde el portafolio.",
    slides: [
      { id: 's1', k: 'portada', t: 'Graelles|Rejillas', x: "Avui farem galeries de fotos en files i columnes amb grid.|Hoy haremos galerías de fotos en filas y columnas con grid.",
        nota: "Presenta l'objectiu: al final, cadascú tindrà la galeria d'una sortida inventada.|Presenta el objetivo: al final, cada uno tendrá la galería de una salida inventada." },
      { id: 's2', k: 'repas', t: 'Recordes flexbox?|¿Recuerdas flexbox?', x: "Què fa aquest codi? I on va el display: flex, al pare o als fills?|¿Qué hace este código? ¿Y dónde va el display: flex, en el padre o en los hijos?", code: ".fila {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}",
        nota: "Resposta: posa els elements de .fila en fila, al centre i amb 10px entre ells. Va al pare.|Respuesta: pone los elementos de .fila en fila, en el centro y con 10px entre ellos. Va en el padre." },
      { id: 's3', k: 'anim', t: 'align-items: de dalt a baix|align-items: de arriba abajo', anim: 'w6align', x: "justify-content va al llarg de la fila (↔); align-items, de dalt a baix (↕).|justify-content va a lo largo de la fila (↔); align-items, de arriba abajo (↕).",
        nota: "Fes que facin el gest amb la mà: horitzontal per a justify, vertical per a align. Ho tornaran a fer servir als errors.|Haz que hagan el gesto con la mano: horizontal para justify, vertical para align. Lo volverán a usar en los errores." },
      { id: 's4', k: 'media', t: 'display: grid|display: grid', x: "Tres columnes de 80px i sis caixes. Quantes files sortiran?|Tres columnas de 80px y seis cajas. ¿Cuántas filas saldrán?",
        media: { k: 'web', html: `<div class="galeria">\n${NUM(6)}\n</div>`, css: `.galeria {\n  display: grid;\n  grid-template-columns: 80px 80px 80px;\n  gap: 6px;\n}\n${NUMC}` },
        nota: "Que responguin abans de mirar: 2 files. Remarca que només hem dit les columnes.|Que respondan antes de mirar: 2 filas. Remarca que solo hemos dicho las columnas." },
      { id: 's5', k: 'anim', t: 'La unitat fr|La unidad fr', anim: 'w6fr', x: "1fr 2fr 1fr parteix l'amplada en 4 trossos. I 1fr vol dir «el que queda».|1fr 2fr 1fr parte el ancho en 4 trozos. Y 1fr quiere decir «lo que queda».",
        nota: "Relaciona-ho amb les fraccions: és com repartir una pizza en 4 trossos i donar-ne 2 a la columna del mig.|Relaciónalo con las fracciones: es como repartir una pizza en 4 trozos y darle 2 a la columna del medio." },
      { id: 's6', k: 'media', t: 'repeat(3, 1fr)|repeat(3, 1fr)', x: "Tres columnes iguals i set caixes. Com quedarà l'última fila?|Tres columnas iguales y siete cajas. ¿Cómo quedará la última fila?",
        media: { k: 'web', html: `<div class="galeria">\n${NUM(7)}\n</div>`, css: `.galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n${NUMC}` },
        nota: "Resposta: 3 files i una sola caixa a l'última, a l'esquerra. La graella no s'inventa caixes per omplir.|Respuesta: 3 filas y una sola caja en la última, a la izquierda. La rejilla no se inventa cajas para rellenar." },
      { id: 's7', k: 'anim', t: 'Flex o grid?|¿Flex o grid?', anim: 'w6grid', x: "Flex: una direcció (fila o columna). Grid: files i columnes alhora.|Flex: una dirección (fila o columna). Grid: filas y columnas a la vez.",
        nota: "Demana exemples de cada cas: un menú (flex), un calendari (grid), una capçalera (flex), una galeria (grid).|Pide ejemplos de cada caso: un menú (flex), un calendario (grid), una cabecera (flex), una galería (grid)." },
      { id: 's8', k: 'pregunta', t: '10 fotos, 4 columnes|10 fotos, 4 columnas', x: "Quantes files tindrà la galeria? Quantes fotos a l'última?|¿Cuántas filas tendrá la galería? ¿Cuántas fotos en la última?", code: ".galeria {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}",
        nota: "Resposta: 3 files (4, 4 i 2). És una divisió amb residu: 10 entre 4 fa 2 i en sobren 2.|Respuesta: 3 filas (4, 4 y 2). Es una división con resto: 10 entre 4 da 2 y sobran 2." },
      { id: 's9', k: 'activitat', t: 'Graelles de paper|Rejillas de papel', timer: 11, punts: ["Cada grup treu una targeta de graella i no l'ensenya.|Cada grupo saca una tarjeta de rejilla y no la enseña.", "Col·loqueu les fotos (notes adhesives) a l'A3 com ho faria el navegador.|Colocad las fotos (notas adhesivas) en el A3 como lo haría el navegador.", "Gireu: endevineu la regla del grup del costat.|Girad: adivinad la regla del grupo de al lado.", "Al final, feu la fitxa cadascú.|Al final, haced la ficha cada uno."],
        nota: "Comprova que omplen les files d'esquerra a dreta i que les columnes 2fr són el doble d'amples que les 1fr.|Comprueba que llenan las filas de izquierda a derecha y que las columnas 2fr son el doble de anchas que las 1fr." },
      { id: 's10', k: 'activitat', t: 'Les regles de la graella|Las reglas de la rejilla', punts: ["Tu dius les columnes; les files es fan soles.|Tú dices las columnas; las filas se hacen solas.", "Les fotos omplen les files d'esquerra a dreta.|Las fotos llenan las filas de izquierda a derecha.", "2fr és el doble d'ample que 1fr.|2fr es el doble de ancho que 1fr."],
        nota: "Deixa-la projectada mentre els grups treballen.|Déjala proyectada mientras los grupos trabajan." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Graelles».|Abre la sesión «Rejillas».", "«Caçadors de graelles» és per a casa: toca «Ara no».|«Cazadores de rejillas» es para casa: toca «Ahora no».", "Para quan acabis la galeria de 3 columnes.|Para cuando termines la galería de 3 columnas."],
        nota: "Si algú acaba aviat, que provi a la galeria repeat(2, 1fr) i repeat(4, 1fr) abans de continuar.|Si alguien termina pronto, que pruebe en la galería repeat(2, 1fr) y repeat(4, 1fr) antes de continuar." },
      { id: 's12', k: 'pregunta', t: 'Per què no funciona?|¿Por qué no funciona?', x: "Aquesta galeria surt en una sola columna. On és l'error?|Esta galería sale en una sola columna. ¿Dónde está el error?", code: ".galeria {\n  display: grid;\n  grid-template-columns: 1fr, 1fr, 1fr;\n}",
        nota: "Les comes. En CSS, els valors d'una llista de mides se separen amb espais. Quan el navegador no entén una línia, se la salta sencera.|Las comas. En CSS, los valores de una lista de tamaños se separan con espacios. Cuando el navegador no entiende una línea, se la salta entera." },
      { id: 's13', k: 'repte', t: 'Reptes: mascotes i errors|Retos: mascotas y errores', timer: 10, punts: ["Les mascotes: 8 imatges, 4 columnes i gap.|Las mascotas: 8 imágenes, 4 columnas y gap.", "Caça els errors: tres errors a la graella.|Caza los errores: tres errores en la rejilla."],
        nota: "Pista per als errors: una lletra, unes comes i una unitat.|Pista para los errores: una letra, unas comas y una unidad." },
      { id: 's14', k: 'activitat', t: 'Crea: la meva galeria|Crea: mi galería', timer: 6, x: "Inventa una sortida i fes-ne la galeria: almenys 6 fotos amb alt, columnes amb fr i gap.|Inventa una salida y haz su galería: al menos 6 fotos con alt, columnas con fr y gap.",
        nota: "Mostra dues o tres galeries amb columnes diferents per fer veure que hi ha moltes solucions bones.|Muestra dos o tres galerías con columnas diferentes para hacer ver que hay muchas soluciones buenas." },
      { id: 's15', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["align-items centra de dalt a baix.|align-items centra de arriba abajo.", "display: grid + grid-template-columns: tu dius les columnes.|display: grid + grid-template-columns: tú dices las columnas.", "fr és un tros de l'espai que queda; repeat() evita repetir.|fr es un trozo del espacio que queda; repeat() evita repetir."],
        nota: "Pregunta quina de les tres idees els ha costat més i apunta-ho per al repàs de la sessió que ve.|Pregunta cuál de las tres ideas les ha costado más y apúntalo para el repaso de la próxima sesión." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Què fa grid-template-columns: repeat(3, 1fr)?|¿Qué hace grid-template-columns: repeat(3, 1fr)?", "Flex o grid per a una galeria de 12 fotos? Per què?|¿Flex o grid para una galería de 12 fotos? ¿Por qué?"],
        nota: "Anota qui encara escriu les columnes amb comes.|Anota quién todavía escribe las columnas con comas." }
    ],
    print: [
      { id: 'p1', t: 'Targetes de graella|Tarjetas de rejilla', k: 'targetes',
        intro: "Un paquet per grup. Cada grup en treu una a l'atzar i col·loca 9 notes adhesives (les fotos) com ho faria el navegador.|Un paquete por grupo. Cada grupo saca una al azar y coloca 9 notas adhesivas (las fotos) como lo haría el navegador.",
        items: [
          { t: 'grid-template-columns: repeat(3, 1fr) 🧩|grid-template-columns: repeat(3, 1fr) 🧩', n: 1 },
          { t: 'grid-template-columns: 1fr 2fr 🧩|grid-template-columns: 1fr 2fr 🧩', n: 1 },
          { t: 'grid-template-columns: repeat(4, 1fr) 🧩|grid-template-columns: repeat(4, 1fr) 🧩', n: 1 },
          { t: 'grid-template-columns: 2fr 1fr 1fr 🧩|grid-template-columns: 2fr 1fr 1fr 🧩', n: 1 },
          { t: 'grid-template-columns: repeat(2, 1fr) 🧩|grid-template-columns: repeat(2, 1fr) 🧩', n: 1 },
          { t: 'grid-template-columns: 1fr 1fr 1fr 1fr 1fr 🧩|grid-template-columns: 1fr 1fr 1fr 1fr 1fr 🧩', n: 1 }
        ] },
      { id: 'p2', t: 'Fitxa: graelles de paper|Ficha: rejillas de papel', k: 'fitxa',
        intro: "Dibuixa cada graella amb quadrets (cada quadret és una foto) o escriu la regla que la fa.|Dibuja cada rejilla con cuadraditos (cada cuadradito es una foto) o escribe la regla que la hace.",
        items: [
          { q: "Dibuixa: grid-template-columns: repeat(3, 1fr) amb 7 fotos.|Dibuja: grid-template-columns: repeat(3, 1fr) con 7 fotos.", big: true, sol: "3 columnes iguals i 3 files: 3, 3 i 1 foto (a l'esquerra).|3 columnas iguales y 3 filas: 3, 3 y 1 foto (a la izquierda)." },
          { q: "Dibuixa: grid-template-columns: 1fr 2fr amb 4 fotos.|Dibuja: grid-template-columns: 1fr 2fr con 4 fotos.", big: true, sol: "2 columnes (la de la dreta, el doble d'ampla) i 2 files de 2 fotos.|2 columnas (la de la derecha, el doble de ancha) y 2 filas de 2 fotos." },
          { q: "Un calendari té 7 columnes iguals (una per dia). Escriu-ne la regla de CSS.|Un calendario tiene 7 columnas iguales (una por día). Escribe su regla de CSS.", sol: "grid-template-columns: repeat(7, 1fr); (o 1fr escrit 7 vegades)|grid-template-columns: repeat(7, 1fr); (o 1fr escrito 7 veces)" },
          { q: "Una galeria té repeat(5, 1fr) i 12 fotos. Quantes files? Quantes fotos a l'última?|Una galería tiene repeat(5, 1fr) y 12 fotos. ¿Cuántas filas? ¿Cuántas fotos en la última?", sol: "3 files: 5, 5 i 2 fotos.|3 filas: 5, 5 y 2 fotos." },
          { q: "Per què aquesta línia no funciona? grid-template-columns: 1fr, 1fr;|¿Por qué esta línea no funciona? grid-template-columns: 1fr, 1fr;", sol: "Les columnes se separen amb espais, no amb comes: 1fr 1fr.|Las columnas se separan con espacios, no con comas: 1fr 1fr." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Taules ---------- */
  'w6-3': {
    obj: [
      "L'alumne/a reconeix quan una informació és una taula (dades per files i columnes) i quan no ho és.|El alumno/a reconoce cuándo una información es una tabla (datos por filas y columnas) y cuándo no lo es.",
      "L'alumne/a construeix una taula amb table, tr, td, th i caption, amb el mateix nombre de cel·les a cada fila.|El alumno/a construye una tabla con table, tr, td, th y caption, con el mismo número de celdas en cada fila.",
      "L'alumne/a explica per què les capçaleres han de ser th pensant en les persones que fan servir un lector de pantalla.|El alumno/a explica por qué las cabeceras tienen que ser th pensando en las personas que usan un lector de pantalla.",
      "L'alumne/a dona estil a una taula amb border-collapse, border i padding.|El alumno/a da estilo a una tabla con border-collapse, border y padding."
    ],
    comp: [
      "Competència digital (CD2): crear continguts digitals ben estructurats i accessibles|Competencia digital (CD2): crear contenidos digitales bien estructurados y accesibles",
      "Matemàtiques (estadística): organitzar i llegir dades en taules|Matemáticas (estadística): organizar y leer datos en tablas",
      "Ciutadania (inclusió): pensar en tothom quan fem una web, també en qui no hi veu|Ciudadanía (inclusión): pensar en todo el mundo cuando hacemos una web, también en quien no ve",
      "Pensament computacional (CD5): trobar errors d'estructura i corregir-los|Pensamiento computacional (CD5): encontrar errores de estructura y corregirlos"
    ],
    vocab: [
      ["Taula|Tabla", "Dades organitzades en files i columnes: &lt;table&gt;.|Datos organizados en filas y columnas: &lt;table&gt;."],
      ["Fila (tr)|Fila (tr)", "Una línia horitzontal de la taula: una cosa amb totes les seves dades.|Una línea horizontal de la tabla: una cosa con todos sus datos."],
      ["Cel·la (td)|Celda (td)", "Cada casella d'una fila, amb una sola dada.|Cada casilla de una fila, con un solo dato."],
      ["Capçalera (th)|Cabecera (th)", "La cel·la que diu què hi ha a la columna.|La celda que dice qué hay en la columna."],
      ["caption|caption", "El títol de la taula.|El título de la tabla."],
      ["Lector de pantalla|Lector de pantalla", "Un programa que llegeix la web en veu alta per a qui no la pot veure.|Un programa que lee la web en voz alta para quien no la puede ver."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Taules»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Tablas»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Una fitxa de l'enquesta per alumne/a i llapis|Una ficha de la encuesta por alumno/a y lápices",
        "Opcional: un tiquet de la compra i un horari reals per ensenyar|Opcional: un tique de la compra y un horario reales para enseñar"
      ],
      imprimir: ["Fitxa: l'enquesta de la classe|Ficha: la encuesta de la clase"],
      prep: [
        "Imprimir una fitxa de l'enquesta per alumne/a.|Imprimir una ficha de la encuesta por alumno/a.",
        "Tenir a mà un tiquet de la compra o un horari per fer veure que són taules.|Tener a mano un tique de la compra o un horario para hacer ver que son tablas.",
        "Si l'ordinador de l'aula té un lector de pantalla, provar-lo abans amb una taula per fer-ne una demostració breu.|Si el ordenador del aula tiene un lector de pantalla, probarlo antes con una tabla para hacer una demostración breve.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 4, t: "Repàs i missió: la llibreta del club|Repaso y misión: la libreta del club", fase: 'inici',
        fa: "Repassa grid amb la pregunta de la diapositiva. Llegeix en veu alta la llibreta desordenada del club i pregunta com ho organitzarien perquè es trobés tot d'un cop d'ull.|Repasa grid con la pregunta de la diapositiva. Lee en voz alta la libreta desordenada del club y pregunta cómo lo organizarían para que se encontrara todo de un vistazo.",
        diu: ["Quines dades té cada sortida?|¿Qué datos tiene cada salida?",
          "Com ho escriuríeu a la pissarra perquè s'entengués de seguida?|¿Cómo lo escribiríais en la pizarra para que se entendiera enseguida?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Taules amb sentit|Tablas con sentido", fase: 'teoria',
        fa: "Ensenya un tiquet o un horari i pregunta què són les files i les columnes. Presenta les etiquetes amb l'animació (tr, td, th) i la demostració amb caption. Explica el lector de pantalla amb l'animació i, si pots, fes una demostració breu. Acaba amb l'estil i amb la pregunta de quines coses són taules.|Enseña un tique o un horario y pregunta qué son las filas y las columnas. Presenta las etiquetas con la animación (tr, td, th) y la demostración con caption. Explica el lector de pantalla con la animación y, si puedes, haz una demostración breve. Termina con el estilo y con la pregunta de qué cosas son tablas.",
        diu: ["En aquest tiquet, què és cada fila? I cada columna?|En este tique, ¿qué es cada fila? ¿Y cada columna?",
          "Si no hi veieu i el lector només diu «9:30», sabeu si és una hora, un preu o una nota?|Si no veis y el lector solo dice «9:30», ¿sabéis si es una hora, un precio o una nota?",
          "Una galeria de fotos és una taula? Per què no?|¿Una galería de fotos es una tabla? ¿Por qué no?"],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "L'enquesta de la classe|La encuesta de la clase", fase: 'desconnectat',
        fa: "En grups de 4, cada grup tria una pregunta (fruita preferida, mascota, esport, assignatura) i la fa a 5 companys d'altres grups. Amb les respostes, omplen a la fitxa una taula amb títol, capçaleres i files de dades. Després fan la prova del lector de pantalla: un membre llegeix una fila en veu alta amb les capçaleres («Nom: Laia. Fruita: maduixa») i un altre, amb els ulls tancats, respon una pregunta sobre la taula.|En grupos de 4, cada grupo elige una pregunta (fruta preferida, mascota, deporte, asignatura) y se la hace a 5 compañeros de otros grupos. Con las respuestas, rellenan en la ficha una tabla con título, cabeceras y filas de datos. Después hacen la prueba del lector de pantalla: un miembro lee una fila en voz alta con las cabeceras («Nombre: Laia. Fruta: fresa») y otro, con los ojos cerrados, responde una pregunta sobre la tabla.",
        diu: ["Quina és la fila de capçaleres? Marqueu-la: seran els th.|¿Cuál es la fila de cabeceras? Marcadla: serán los th.",
          "Totes les files tenen el mateix nombre de cel·les?|¿Todas las filas tienen el mismo número de celdas?",
          "Amb els ulls tancats, què us ha ajudat a entendre la taula?|Con los ojos cerrados, ¿qué os ha ayudado a entender la tabla?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 14, t: "A l'ordinador: descobreix i primers reptes|En el ordenador: descubre y primeros retos", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins al repte de les capçaleres. «Taules amagades» és per a casa. Passeja i fixa't en les files amb cel·les de més o de menys: demana que comptin les cel·les de cada fila.|Cada alumno/a avanza a su ritmo hasta el reto de las cabeceras. «Tablas escondidas» es para casa. Pasea y fíjate en las filas con celdas de más o de menos: pide que cuenten las celdas de cada fila.",
        diu: ["Compta les cel·les d'aquesta fila. I les de la fila de capçaleres?|Cuenta las celdas de esta fila. ¿Y las de la fila de cabeceras?",
          "On comença i on acaba aquesta fila?|¿Dónde empieza y dónde termina esta fila?"],
        slides: ['s11'], app: "Des de «Recorda» fins al repte de les capçaleres: el repàs, la missió, «Descobreix», ordenar les línies, quina cosa és una taula, «Taules amagades» (per a casa), la predicció, la línia amb l'error, la pausa activa, afegir una fila i canviar les capçaleres per th.|Desde «Recuerda» hasta el reto de las cabeceras: el repaso, la misión, «Descubre», ordenar las líneas, qué cosa es una tabla, «Tablas escondidas» (para casa), la predicción, la línea con el error, la pausa activa, añadir una fila y cambiar las cabeceras por th.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: l'estil i caça els errors|Retos: el estilo y caza los errores", fase: 'ordinador',
        fa: "Projecta el codi de la fila amb una cel·la de menys i pregunteu-vos què veurà el visitant. Després fan el repte de l'estil (escrit des de zero) i el de les etiquetes mal tancades.|Proyecta el código de la fila con una celda de menos y preguntaos qué verá el visitante. Después hacen el reto del estilo (escrito desde cero) y el de las etiquetas mal cerradas.",
        diu: ["th, td amb una coma: què vol dir?|th, td con una coma: ¿qué quiere decir?",
          "L'avís de sota l'editor diu la línia: comença a buscar per allà.|El aviso de debajo del editor dice la línea: empieza a buscar por ahí."],
        slides: ['s12', 's13'], app: "Els reptes de l'estil de la taula i de «Caça els errors».|Los retos del estilo de la tabla y de «Caza los errores».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 6, t: "Crea: la meva taula|Crea: mi tabla", fase: 'crea',
        fa: "Cada alumne/a fa una taula amb dades de veritat: poden passar a l'app la taula de l'enquesta de la fitxa. Recorda que ha de tenir caption, th i almenys tres files de dades.|Cada alumno/a hace una tabla con datos de verdad: pueden pasar a la app la tabla de la encuesta de la ficha. Recuerda que tiene que tener caption, th y al menos tres filas de datos.",
        diu: ["Passa a l'app la taula de la teva enquesta.|Pasa a la app la tabla de tu encuesta.",
          "Llegeix una fila com un lector de pantalla: s'entén?|Lee una fila como un lector de pantalla: ¿se entiende?"],
        slides: ['s14'], app: "Pas «Crea»: La meva taula.|Paso «Crea»: Mi tabla.", org: "Individual|Individual" },
      { min: 2, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum i fes el tiquet a la porta mentre responen les preguntes finals.|Repasa las tres ideas con el resumen y haz el ticket en la puerta mientras responden las preguntas finales.",
        diu: ["Digues una cosa que sí que és una taula i una que no.|Di una cosa que sí es una tabla y una que no."],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Una fila té una cel·la de més o de menys i les dades es desplacen de columna.|Una fila tiene una celda de más o de menos y los datos se desplazan de columna.",
        "Que compti en veu alta les cel·les de la fila de capçaleres i després les de la fila que falla.|Que cuente en voz alta las celdas de la fila de cabeceras y después las de la fila que falla."],
      ["Posa les capçaleres com a td amb negreta (&lt;b&gt; o &lt;strong&gt;).|Pone las cabeceras como td con negrita (&lt;b&gt; o &lt;strong&gt;).",
        "Es veu igual, però pregunta: com sabrà el lector de pantalla que això és el nom de la columna?|Se ve igual, pero pregunta: ¿cómo sabrá el lector de pantalla que eso es el nombre de la columna?"],
      ["Oblida tancar una fila (&lt;/tr&gt;) o tanca una cel·la th amb &lt;/td&gt;.|Olvida cerrar una fila (&lt;/tr&gt;) o cierra una celda th con &lt;/td&gt;.",
        "Que llegeixi l'avís de sota l'editor i segueixi amb el dit cada etiqueta que s'obre fins on es tanca.|Que lea el aviso de debajo del editor y siga con el dedo cada etiqueta que se abre hasta donde se cierra."],
      ["Vol fer servir una taula per col·locar les fotos de la galeria.|Quiere usar una tabla para colocar las fotos de la galería.",
        "Pregunta: aquestes fotos tenen columnes de dades (nom, lloc, data)? Si no, és feina de grid.|Pregunta: ¿estas fotos tienen columnas de datos (nombre, lugar, fecha)? Si no, es trabajo de grid."],
      ["Posa el caption fora de la taula o després de les files.|Pone el caption fuera de la tabla o después de las filas.",
        "Recorda que el títol va just després d'obrir &lt;table&gt;, com el títol d'un llibre a la primera pàgina.|Recuerda que el título va justo después de abrir &lt;table&gt;, como el título de un libro en la primera página."]
    ],
    diff: {
      mes: "Separar la taula en &lt;thead&gt; (capçaleres) i &lt;tbody&gt; (dades) i afegir scope=\"col\" als th. Fer una fila de colors alterns amb una classe i explicar per què ajuda a llegir.|Separar la tabla en &lt;thead&gt; (cabeceras) y &lt;tbody&gt; (datos) y añadir scope=\"col\" a los th. Hacer una fila de colores alternos con una clase y explicar por qué ayuda a leer.",
      menys: "Començar amb una taula de 2 columnes i 2 files de dades i fer servir els botons de fragments. Escriure cada fila en una sola línia per veure-la sencera.|Empezar con una tabla de 2 columnas y 2 filas de datos y usar los botones de fragmentos. Escribir cada fila en una sola línea para verla entera."
    },
    aval: {
      ticket: ["Quina etiqueta fa una fila i quina fa una cel·la de capçalera?|¿Qué etiqueta hace una fila y cuál hace una celda de cabecera?",
        "Digues una cosa que sí que és una taula i una que no ho és.|Di una cosa que sí es una tabla y una que no lo es."],
      rubric: [
        ["Quan fer una taula|Cuándo hacer una tabla", "Distingeix dades tabulars d'una galeria o un menú i ho justifica.|Distingue datos tabulares de una galería o un menú y lo justifica.", "Reconeix una taula en un exemple clar, però dubta amb les galeries.|Reconoce una tabla en un ejemplo claro, pero duda con las galerías."],
        ["Estructura|Estructura", "Fa una taula amb caption, th i files amb el mateix nombre de cel·les.|Hace una tabla con caption, th y filas con el mismo número de celdas.", "Fa la taula, però amb alguna fila descompensada o sense th.|Hace la tabla, pero con alguna fila descompensada o sin th."],
        ["Accessibilitat|Accesibilidad", "Explica que els th ajuden el lector de pantalla a dir què vol dir cada dada.|Explica que los th ayudan al lector de pantalla a decir qué quiere decir cada dato.", "Fa servir th perquè ho demana el repte, però encara no n'explica el motiu.|Usa th porque lo pide el reto, pero todavía no explica el motivo."]
      ]
    },
    casa: "A casa, amb el mòbil, es pot repetir la sessió i fer «Taules amagades»: buscar taules de veritat (tiquets, horaris, calendaris, informació nutricional) i llegir-ne una fila com un lector de pantalla. La taula es pot millorar des del portafoli.|En casa, con el móvil, se puede repetir la sesión y hacer «Tablas escondidas»: buscar tablas de verdad (tiques, horarios, calendarios, información nutricional) y leer una fila como un lector de pantalla. La tabla se puede mejorar desde el portafolio.",
    slides: [
      { id: 's1', k: 'portada', t: 'Taules|Tablas', x: "Avui posarem dades en files i columnes, i farem taules que tothom pugui entendre.|Hoy pondremos datos en filas y columnas, y haremos tablas que todo el mundo pueda entender.",
        nota: "Presenta l'objectiu: al final, cadascú tindrà una taula amb dades de veritat, ben feta i accessible.|Presenta el objetivo: al final, cada uno tendrá una tabla con datos de verdad, bien hecha y accesible." },
      { id: 's2', k: 'repas', t: 'Recordes grid?|¿Recuerdas grid?', x: "8 fotos i aquesta regla. Quantes files surten?|8 fotos y esta regla. ¿Cuántas filas salen?", code: ".galeria {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}",
        nota: "Resposta: 2 files de 4. Aprofita per recordar que grid és per col·locar fotos; avui veurem una altra cosa: dades.|Respuesta: 2 filas de 4. Aprovecha para recordar que grid es para colocar fotos; hoy veremos otra cosa: datos." },
      { id: 's3', k: 'concepte', t: 'Quan cal una taula?|¿Cuándo hace falta una tabla?', pic: 'img/ment/com.webp', punts: ["Un tiquet: producte, quantitat, preu.|Un tique: producto, cantidad, precio.", "Un horari: dia, hora, activitat.|Un horario: día, hora, actividad.", "Una classificació: equip, partits, punts.|Una clasificación: equipo, partidos, puntos."],
        nota: "Si portes un tiquet o un horari, ensenya'l. La pregunta clau: té sentit llegir-ho per files i per columnes?|Si traes un tique o un horario, enséñalo. La pregunta clave: ¿tiene sentido leerlo por filas y por columnas?" },
      { id: 's4', k: 'anim', t: 'table, tr, td i th|table, tr, td y th', anim: 'w6table', x: "tr és una fila, td una cel·la i th una capçalera.|tr es una fila, td una celda y th una cabecera.",
        nota: "Explica d'on venen els noms: table row, table data, table header. Ajuda a recordar-los.|Explica de dónde vienen los nombres: table row, table data, table header. Ayuda a recordarlos." },
      { id: 's5', k: 'media', t: 'Una taula de veritat|Una tabla de verdad', x: "El caption és el títol; la primera fila té les capçaleres th.|El caption es el título; la primera fila tiene las cabeceras th.",
        media: { k: 'web', html: TAULA, css: T_CSS },
        nota: "Fes llegir el codi en veu alta fila a fila i que algú assenyali a la vista prèvia la fila que es llegeix.|Haz leer el código en voz alta fila a fila y que alguien señale en la vista previa la fila que se lee." },
      { id: 's6', k: 'anim', t: 'El lector de pantalla|El lector de pantalla', anim: 'w6reader', x: "Amb th, el lector pot dir «Lloc: el bosc» i no només «el bosc».|Con th, el lector puede decir «Lugar: el bosque» y no solo «el bosque».",
        nota: "Explica que moltes persones cegues o amb poca visió naveguen així. Fer bé una taula és una manera de pensar en tothom.|Explica que muchas personas ciegas o con poca visión navegan así. Hacer bien una tabla es una manera de pensar en todo el mundo." },
      { id: 's7', k: 'media', t: 'Estil per a la taula|Estilo para la tabla', x: "border-collapse ajunta les vores; th, td reben vora i padding.|border-collapse junta los bordes; th, td reciben borde y padding.",
        media: { k: 'web', html: TAULA, css: T_CSS },
        nota: "Pregunta què passaria sense border-collapse: vores dobles. Fes notar la coma de th, td: una regla per a dos selectors.|Pregunta qué pasaría sin border-collapse: bordes dobles. Haz notar la coma de th, td: una regla para dos selectores." },
      { id: 's8', k: 'pregunta', t: 'Taula o no?|¿Tabla o no?', punts: ["Els resultats del concurs de fotos|Los resultados del concurso de fotos", "La galeria de la sortida|La galería de la salida", "El menú de la web|El menú de la web", "L'horari de les sortides|El horario de las salidas"],
        nota: "Taula: els resultats i l'horari. La galeria és grid i el menú és flex.|Tabla: los resultados y el horario. La galería es grid y el menú es flex." },
      { id: 's9', k: 'activitat', t: "L'enquesta de la classe|La encuesta de la clase", timer: 12, punts: ["Trieu una pregunta per al grup.|Elegid una pregunta para el grupo.", "Pregunteu-la a 5 companys d'altres grups.|Preguntadla a 5 compañeros de otros grupos.", "Feu la taula a la fitxa: títol, capçaleres i files.|Haced la tabla en la ficha: título, cabeceras y filas.", "Prova del lector: llegiu una fila amb les capçaleres.|Prueba del lector: leed una fila con las cabeceras."],
        nota: "Vigila que les preguntes siguin amables i que ningú no se senti incòmode. Només noms de pila o inicials.|Vigila que las preguntas sean amables y que nadie se sienta incómodo. Solo nombres de pila o iniciales." },
      { id: 's10', k: 'activitat', t: 'La prova del lector de pantalla|La prueba del lector de pantalla', punts: ["Un/a llegeix: «Nom: Laia. Fruita: maduixa».|Uno/a lee: «Nombre: Laia. Fruta: fresa».", "Un altre/a, amb els ulls tancats, respon una pregunta.|Otro/a, con los ojos cerrados, responde una pregunta.", "Després, proveu-ho llegint només les dades, sense capçaleres.|Después, probadlo leyendo solo los datos, sin cabeceras."],
        nota: "Que comparin les dues lectures: sense capçaleres, costa molt més entendre la taula.|Que comparen las dos lecturas: sin cabeceras, cuesta mucho más entender la tabla." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 14, punts: ["Obre la sessió «Taules».|Abre la sesión «Tablas».", "«Taules amagades» és per a casa: toca «Ara no».|«Tablas escondidas» es para casa: toca «Ahora no».", "Para quan acabis el repte de les capçaleres.|Para cuando termines el reto de las cabeceras."],
        nota: "Fixa't en qui copia una fila sencera i en qui l'escriu cel·la a cel·la: tots dos camins són bons.|Fíjate en quién copia una fila entera y en quién la escribe celda a celda: los dos caminos son buenos." },
      { id: 's12', k: 'pregunta', t: "On és l'error?|¿Dónde está el error?", x: "Aquesta fila fa que «9:30» surti a la columna del lloc. Per què?|Esta fila hace que «9:30» salga en la columna del lugar. ¿Por qué?", code: "<tr><th>Dia</th><th>Lloc</th><th>Hora</th></tr>\n<tr><td>Diumenge</td><td>9:30</td></tr>|<tr><th>Día</th><th>Lugar</th><th>Hora</th></tr>\n<tr><td>Domingo</td><td>9:30</td></tr>",
        nota: "Falta la cel·la del lloc. Les cel·les s'omplen per ordre: la segona cel·la sempre va a la segona columna.|Falta la celda del lugar. Las celdas se llenan por orden: la segunda celda siempre va a la segunda columna." },
      { id: 's13', k: 'repte', t: "Reptes: l'estil i els errors|Retos: el estilo y los errores", timer: 10, punts: ["L'estil: border-collapse, border, padding i background-color.|El estilo: border-collapse, border, padding y background-color.", "Caça els errors: dues etiquetes mal tancades.|Caza los errores: dos etiquetas mal cerradas."],
        nota: "Pista per als errors: una capçalera que es tanca amb l'etiqueta equivocada i una fila que no es tanca.|Pista para los errores: una cabecera que se cierra con la etiqueta equivocada y una fila que no se cierra." },
      { id: 's14', k: 'activitat', t: 'Crea: la meva taula|Crea: mi tabla', timer: 6, x: "Passa a l'app la taula de l'enquesta (o una altra amb dades de veritat): caption, th, 3 files de dades i estil.|Pasa a la app la tabla de la encuesta (u otra con datos de verdad): caption, th, 3 filas de datos y estilo.",
        nota: "Abans de desar, que llegeixin una fila en veu alta com un lector de pantalla.|Antes de guardar, que lean una fila en voz alta como un lector de pantalla." },
      { id: 's15', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Taules per a dades en files i columnes; no per col·locar fotos.|Tablas para datos en filas y columnas; no para colocar fotos.", "table, tr, td, th i caption.|table, tr, td, th y caption.", "Els th ajuden el lector de pantalla.|Los th ayudan al lector de pantalla."],
        nota: "Lliga-ho amb la unitat: flex per a files, grid per a graelles i taules per a dades. A la sessió que ve ho farem servir tot.|Relaciónalo con la unidad: flex para filas, grid para rejillas y tablas para datos. En la próxima sesión lo usaremos todo." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Quina etiqueta fa una fila? I una capçalera?|¿Qué etiqueta hace una fila? ¿Y una cabecera?", "Una cosa que sí que és una taula i una que no.|Una cosa que sí es una tabla y una que no."],
        nota: "Recorda'ls que la sessió que ve és el projecte: poden pensar a casa quines fotos posaran al seu àlbum.|Recuérdales que la próxima sesión es el proyecto: pueden pensar en casa qué fotos pondrán en su álbum." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: l'enquesta de la classe|Ficha: la encuesta de la clase", k: 'fitxa',
        intro: "En grup, feu una pregunta a 5 companys i organitzeu les respostes en una taula. Recordeu: títol, capçaleres i una fila per persona. Feu servir només noms de pila o inicials.|En grupo, haced una pregunta a 5 compañeros y organizad las respuestas en una tabla. Recordad: título, cabeceras y una fila por persona. Usad solo nombres de pila o iniciales.",
        items: [
          { q: "Quina pregunta fareu? (fruita preferida, mascota, esport, assignatura…)|¿Qué pregunta haréis? (fruta preferida, mascota, deporte, asignatura…)", sol: "Resposta oberta: una pregunta amable que tothom pugui respondre.|Respuesta abierta: una pregunta amable que todo el mundo pueda responder." },
          { q: "Dibuixa la taula: escriu el títol (caption), la fila de capçaleres (th) i una fila per a cada persona.|Dibuja la tabla: escribe el título (caption), la fila de cabeceras (th) y una fila para cada persona.", big: true, sol: "Exemple: «La fruita preferida» · Nom · Fruita · Per què · 5 files de dades amb 3 cel·les cadascuna.|Ejemplo: «La fruta preferida» · Nombre · Fruta · Por qué · 5 filas de datos con 3 celdas cada una." },
          { q: "Quantes files de dades té la vostra taula? I quantes cel·les ha de tenir cada fila?|¿Cuántas filas de datos tiene vuestra tabla? ¿Y cuántas celdas tiene que tener cada fila?", sol: "Una fila per persona (5) i tantes cel·les com capçaleres.|Una fila por persona (5) y tantas celdas como cabeceras." },
          { q: "Escriu com llegiria un lector de pantalla la segona fila de dades.|Escribe cómo leería un lector de pantalla la segunda fila de datos.", sol: "Exemple: «Nom: Pau. Fruita: plàtan. Per què: és dolç».|Ejemplo: «Nombre: Pau. Fruta: plátano. Por qué: es dulce»." },
          { q: "Escriu el codi HTML de la fila de capçaleres de la vostra taula.|Escribe el código HTML de la fila de cabeceras de vuestra tabla.", sol: "Exemple: &lt;tr&gt;&lt;th&gt;Nom&lt;/th&gt;&lt;th&gt;Fruita&lt;/th&gt;&lt;th&gt;Per què&lt;/th&gt;&lt;/tr&gt;|Ejemplo: &lt;tr&gt;&lt;th&gt;Nombre&lt;/th&gt;&lt;th&gt;Fruta&lt;/th&gt;&lt;th&gt;Por qué&lt;/th&gt;&lt;/tr&gt;" }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: l'àlbum de fotos ---------- */
  'w6-4': {
    obj: [
      "L'alumne/a planifica una pàgina amb un esbós en paper abans de programar-la.|El alumno/a planifica una página con un boceto en papel antes de programarla.",
      "L'alumne/a tria l'eina adequada per a cada part: flex per a la capçalera, grid per a la galeria i taula per a les dades.|El alumno/a elige la herramienta adecuada para cada parte: flex para la cabecera, grid para la galería y tabla para los datos.",
      "L'alumne/a construeix un àlbum de fotos complet amb figure i figcaption, alt a totes les imatges i una taula accessible.|El alumno/a construye un álbum de fotos completo con figure y figcaption, alt en todas las imágenes y una tabla accesible.",
      "L'alumne/a revisa la seva pàgina al mòbil i a l'ordinador i dona i rep comentaris útils.|El alumno/a revisa su página en el móvil y en el ordenador y da y recibe comentarios útiles."
    ],
    comp: [
      "Competència digital (CD2): dissenyar i crear un contingut digital complet|Competencia digital (CD2): diseñar y crear un contenido digital completo",
      "Competència personal i d'aprendre a aprendre: planificar, revisar i millorar la feina|Competencia personal y de aprender a aprender: planificar, revisar y mejorar el trabajo",
      "Llengua: escriure textos alternatius i peus de foto clars i breus|Lengua: escribir textos alternativos y pies de foto claros y breves",
      "Comunicació i convivència: donar comentaris respectuosos i útils a un company/a|Comunicación y convivencia: dar comentarios respetuosos y útiles a un compañero/a"
    ],
    vocab: [
      ["Esbós (wireframe)|Boceto (wireframe)", "Un dibuix amb caixes que diu on va cada cosa d'una pàgina, abans de programar-la.|Un dibujo con cajas que dice dónde va cada cosa de una página, antes de programarla."],
      ["Peu de foto (figcaption)|Pie de foto (figcaption)", "El text que acompanya una foto dins d'una figure.|El texto que acompaña a una foto dentro de una figure."],
      ["Text alternatiu (alt)|Texto alternativo (alt)", "La descripció de la imatge per a qui no la pot veure.|La descripción de la imagen para quien no la puede ver."],
      ["Revisió|Revisión", "Mirar la pàgina amb ulls de visitant per trobar què es pot millorar.|Mirar la página con ojos de visitante para encontrar qué se puede mejorar."],
      ["Peu de pàgina (footer)|Pie de página (footer)", "La part de baix de la pàgina, amb qui l'ha fet o com contactar.|La parte de abajo de la página, con quién la ha hecho o cómo contactar."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: l'àlbum de fotos»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el álbum de fotos»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Una graella de l'esbós i una fitxa de revisió per alumne/a|Una rejilla del boceto y una ficha de revisión por alumno/a",
        "Llapis de colors i regle|Lápices de colores y regla"
      ],
      imprimir: ["Graella: l'esbós de l'àlbum|Rejilla: el boceto del álbum", "Fitxa: revisió de l'àlbum|Ficha: revisión del álbum"],
      prep: [
        "Imprimir una graella de l'esbós i una fitxa de revisió per alumne/a.|Imprimir una rejilla del boceto y una ficha de revisión por alumno/a.",
        "Dibuixar a la pissarra un esbós d'exemple (capçalera, galeria, taula, peu) per a qui s'encalli.|Dibujar en la pizarra un boceto de ejemplo (cabecera, galería, tabla, pie) para quien se atasque.",
        "Decidir com fareu la galeria de l'aula: ordinadors oberts i la classe que hi passeja.|Decidir cómo haréis la galería del aula: ordenadores abiertos y la clase que pasea por ellos.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 4, t: "Repàs i missió: l'exposició del club|Repaso y misión: la exposición del club", fase: 'inici',
        fa: "Repassa les tres eines de la unitat amb la diapositiva i presenta el projecte: l'àlbum web per a l'exposició del club. Llegeix en veu alta què ha de tenir.|Repasa las tres herramientas de la unidad con la diapositiva y presenta el proyecto: el álbum web para la exposición del club. Lee en voz alta lo que tiene que tener.",
        diu: ["Per a una fila, quina eina? I per a files i columnes de fotos? I per a dades?|Para una fila, ¿qué herramienta? ¿Y para filas y columnas de fotos? ¿Y para datos?",
          "Avui treballareu com un estudi de disseny: primer el pla i després el codi.|Hoy trabajaréis como un estudio de diseño: primero el plan y después el código."],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 6, t: "Què ha de tenir l'àlbum|Qué tiene que tener el álbum", fase: 'teoria',
        fa: "Mostra els requisits del club i les dues demostracions: una pàgina amb les tres eines i la galeria amb figure i figcaption. Recorda el margin: 0 de figure.|Muestra los requisitos del club y las dos demostraciones: una página con las tres herramientas y la galería con figure y figcaption. Recuerda el margin: 0 de figure.",
        diu: ["On veieu flex, on veieu grid i on veieu la taula en aquesta pàgina?|¿Dónde veis flex, dónde veis grid y dónde veis la tabla en esta página?",
          "Per què figure i no només img? Què hi guanyem?|¿Por qué figure y no solo img? ¿Qué ganamos?"],
        slides: ['s3', 's4', 's5'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "L'esbós en paper|El boceto en papel", fase: 'desconnectat',
        fa: "Cada alumne/a dibuixa a la graella l'esbós del seu àlbum: caixes amb el nom (header, nav, galeria, figure, taula, footer), fletxes per a les files flex i les columnes de la graella, i les columnes de la taula. Als 7 minuts, l'ensenyen al company/a del costat, que fa una pregunta i un suggeriment.|Cada alumno/a dibuja en la rejilla el boceto de su álbum: cajas con el nombre (header, nav, galería, figure, tabla, footer), flechas para las filas flex y las columnas de la rejilla, y las columnas de la tabla. A los 7 minutos, lo enseñan al compañero/a de al lado, que hace una pregunta y una sugerencia.",
        diu: ["Sense colors ni detalls: només caixes, noms i fletxes.|Sin colores ni detalles: solo cajas, nombres y flechas.",
          "Quantes columnes tindrà la teva galeria? Escriu-ho amb fr al costat.|¿Cuántas columnas tendrá tu galería? Escríbelo con fr al lado.",
          "Quines columnes tindrà la teva taula? Quines dades de les fotos hi posaràs?|¿Qué columnas tendrá tu tabla? ¿Qué datos de las fotos pondrás?"],
        slides: ['s6', 's7'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 12, t: "A l'ordinador: les tres peces|En el ordenador: las tres piezas", fase: 'ordinador',
        fa: "Fan a l'app el repàs, la teoria i les tres peces: la capçalera, la galeria amb peus de foto i el tros d'àlbum amb tres errors. Abans de l'últim repte, projecta el codi amb errors i pregunta què miraran primer.|Hacen en la app el repaso, la teoría y las tres piezas: la cabecera, la galería con pies de foto y el trozo de álbum con tres errores. Antes del último reto, proyecta el código con errores y pregunta qué mirarán primero.",
        diu: ["Les peces que feu ara les podeu reaprofitar per al vostre àlbum.|Las piezas que hacéis ahora las podéis reaprovechar para vuestro álbum.",
          "Als errors: mireu els dos fitxers, HTML i CSS.|En los errores: mirad los dos archivos, HTML y CSS."],
        slides: ['s8', 's9'], app: "Des de «Recorda» fins a la peça 3: el repàs, la missió, «Descobreix», el pla de treball, quina eina va a cada part, la predicció, la pausa activa, la capçalera, la galeria amb peus de foto i el tros d'àlbum amb errors.|Desde «Recuerda» hasta la pieza 3: el repaso, la misión, «Descubre», el plan de trabajo, qué herramienta va en cada parte, la predicción, la pausa activa, la cabecera, la galería con pies de foto y el trozo de álbum con errores.", org: "Individual|Individual" },
      { min: 18, t: "Crea: el meu àlbum de fotos|Crea: mi álbum de fotos", fase: 'crea',
        fa: "Cada alumne/a construeix el seu àlbum seguint l'esbós. Als 12 minuts, avisa que comencin la revisió: alt, títols en ordre, contrast i botons de mòbil i ordinador. Qui acabi abans pot afegir una segona taula o més fotos.|Cada alumno/a construye su álbum siguiendo el boceto. A los 12 minutos, avisa de que empiecen la revisión: alt, títulos en orden, contraste y botones de móvil y ordenador. Quien termine antes puede añadir una segunda tabla o más fotos.",
        diu: ["Mira el teu esbós: quina és la caixa que toca ara?|Mira tu boceto: ¿cuál es la caja que toca ahora?",
          "Si una peça no surt, comprova-la amb els reptes d'abans: ja la vas fer funcionar.|Si una pieza no sale, compruébala con los retos de antes: ya la hiciste funcionar.",
          "Fes la revisió abans de desar: el teu àlbum és per a les famílies!|Haz la revisión antes de guardar: ¡tu álbum es para las familias!"],
        slides: ['s10', 's11'], app: "Pas «Crea»: El meu àlbum de fotos, i la revisió de després.|Paso «Crea»: Mi álbum de fotos, y la revisión de después.", org: "Individual|Individual" },
      { min: 10, t: "Galeria de l'aula i tancament|Galería del aula y cierre", fase: 'tancament',
        fa: "Galeria de l'aula: deixen l'àlbum obert a la pantalla i la classe hi passeja. Cadascú omple la fitxa de revisió per a dos àlbums: dues estrelles (coses ben fetes) i un desig (una millora concreta). Acaba amb el resum, la unitat en tres eines i el tiquet.|Galería del aula: dejan el álbum abierto en la pantalla y la clase pasea por ellos. Cada uno rellena la ficha de revisión para dos álbumes: dos estrellas (cosas bien hechas) y un deseo (una mejora concreta). Termina con el resumen, la unidad en tres herramientas y el ticket.",
        diu: ["Una estrella ha de dir exactament què està ben fet: «el menú queda centrat», no només «m'agrada».|Una estrella tiene que decir exactamente qué está bien hecho: «el menú queda centrado», no solo «me gusta».",
          "El desig és una idea per millorar, dita amb respecte.|El deseo es una idea para mejorar, dicha con respeto.",
          "Quina part del teu àlbum t'agrada més? Quina eina hi has fet servir?|¿Qué parte de tu álbum te gusta más? ¿Qué herramienta has usado?"],
        slides: ['s12', 's13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tota l'aula, en moviment, i després tot el grup|Toda el aula, en movimiento, y después todo el grupo" }
    ],
    errors: [
      ["Vol començar a escriure codi sense esbós i s'encalla a mitja pàgina.|Quiere empezar a escribir código sin boceto y se atasca a media página.",
        "Que torni a l'esbós i digui en veu alta les caixes de dalt a baix. Després, que escrigui només l'HTML d'aquestes caixes, buides.|Que vuelva al boceto y diga en voz alta las cajas de arriba abajo. Después, que escriba solo el HTML de esas cajas, vacías."],
      ["Fa la galeria amb una taula.|Hace la galería con una tabla.",
        "Pregunta: les teves fotos tenen columnes de dades? Si no, que ho provi amb grid: és més curt i s'adapta al mòbil.|Pregunta: ¿tus fotos tienen columnas de datos? Si no, que lo pruebe con grid: es más corto y se adapta al móvil."],
      ["Una figure queda oberta i la galeria es desquadra.|Una figure queda abierta y la galería se descuadra.",
        "Que llegeixi l'avís de sota l'editor i compti les &lt;figure&gt; que s'obren i les que es tanquen.|Que lea el aviso de debajo del editor y cuente las &lt;figure&gt; que se abren y las que se cierran."],
      ["Escriu alt com «foto1» o el nom del fitxer.|Escribe alt como «foto1» o el nombre del archivo.",
        "Pregunta: si no hi veiessis, què t'agradaria que et diguessin d'aquesta foto?|Pregunta: si no vieras, ¿qué te gustaría que te dijeran de esta foto?"],
      ["Als comentaris de la galeria de l'aula diu només «m'agrada» o «està malament».|En los comentarios de la galería del aula dice solo «me gusta» o «está mal».",
        "Recorda l'estructura: què està ben fet (concret) i què milloraries (concret i amable). Posa'n un exemple.|Recuerda la estructura: qué está bien hecho (concreto) y qué mejorarías (concreto y amable). Pon un ejemplo."]
    ],
    diff: {
      mes: "Afegir una segona secció amb una galeria diferent (columnes de mides diferents) i separar la taula en thead i tbody. Fer que la primera foto ocupi dues columnes amb grid-column: span 2.|Añadir una segunda sección con una galería diferente (columnas de tamaños diferentes) y separar la tabla en thead y tbody. Hacer que la primera foto ocupe dos columnas con grid-column: span 2.",
      menys: "Partir del codi de les tres peces de l'app i ajuntar-les. Una galeria de 6 fotos amb repeat(2, 1fr) i una taula de 2 columnes. Fer servir els botons de fragments.|Partir del código de las tres piezas de la app y juntarlas. Una galería de 6 fotos con repeat(2, 1fr) y una tabla de 2 columnas. Usar los botones de fragmentos."
    },
    aval: {
      ticket: ["Quina eina has fet servir per a la galeria i per què?|¿Qué herramienta has usado para la galería y por qué?",
        "Digues una cosa que has millorat gràcies a la revisió o als comentaris.|Di una cosa que has mejorado gracias a la revisión o a los comentarios."],
      rubric: [
        ["Planificació|Planificación", "Fa un esbós clar amb les caixes i la disposició i el segueix.|Hace un boceto claro con las cajas y la disposición y lo sigue.", "Fa l'esbós, però el deixa de banda quan programa.|Hace el boceto, pero lo deja de lado cuando programa."],
        ["Disposició|Disposición", "Fa servir flex, grid i taula cadascun on toca i la pàgina es veu bé al mòbil i a l'ordinador.|Usa flex, grid y tabla cada uno donde toca y la página se ve bien en el móvil y en el ordenador.", "Fa servir les tres eines, però alguna part queda desquadrada o mal triada.|Usa las tres herramientas, pero alguna parte queda descuadrada o mal elegida."],
        ["Qualitat i revisió|Calidad y revisión", "Totes les fotos tenen alt i peu, la taula té caption i th, i millora alguna cosa després de revisar.|Todas las fotos tienen alt y pie, la tabla tiene caption y th, y mejora algo después de revisar.", "Hi falta algun alt, peu o capçalera, o no revisa la pàgina.|Falta algún alt, pie o cabecera, o no revisa la página."]
      ]
    },
    casa: "A casa, amb el mòbil, es pot obrir l'àlbum des del portafoli i ensenyar-lo a la família: que triïn la seva foto preferida i diguin una cosa que millorarien. També es pot completar la taula amb més dades de les fotos.|En casa, con el móvil, se puede abrir el álbum desde el portafolio y enseñárselo a la familia: que elijan su foto preferida y digan una cosa que mejorarían. También se puede completar la tabla con más datos de las fotos.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: l'àlbum de fotos|Proyecto: el álbum de fotos", x: "Avui farem servir tot el que hem après a la unitat per construir l'àlbum web del Club Foto.|Hoy usaremos todo lo que hemos aprendido en la unidad para construir el álbum web del Club Foto.",
        nota: "Explica que és una sessió de projecte: menys teoria i més temps per crear, revisar i ensenyar.|Explica que es una sesión de proyecto: menos teoría y más tiempo para crear, revisar y enseñar." },
      { id: 's2', k: 'repas', t: 'Tres eines|Tres herramientas', punts: ["Una fila (menú, capçalera) → ?|Una fila (menú, cabecera) → ?", "Files i columnes de fotos → ?|Filas y columnas de fotos → ?", "Dades per files i columnes → ?|Datos por filas y columnas → ?"],
        nota: "Respostes: flex, grid i taula. Que les diguin en veu alta tots junts.|Respuestas: flex, grid y tabla. Que las digan en voz alta todos juntos." },
      { id: 's3', k: 'concepte', t: 'El que demana el club|Lo que pide el club', punts: ["Capçalera amb títol i menú (flex)|Cabecera con título y menú (flex)", "Galeria de 6 fotos o més amb peu (grid, figure, figcaption)|Galería de 6 fotos o más con pie (grid, figure, figcaption)", "Taula amb les dades de les fotos (caption, th)|Tabla con los datos de las fotos (caption, th)", "Peu de pàgina amb qui l'ha fet|Pie de página con quién la ha hecho"],
        nota: "Deixa-la projectada durant l'esbós: són els criteris del projecte.|Déjala proyectada durante el boceto: son los criterios del proyecto." },
      { id: 's4', k: 'media', t: 'Una pàgina, tres eines|Una página, tres herramientas', x: "On és flex? On és grid? On és la taula?|¿Dónde está flex? ¿Dónde está grid? ¿Dónde está la tabla?",
        media: { k: 'web', html: `<header>\n  <b>Club Foto</b>\n  <nav><a href="#">{{Fotos|Fotos}}</a> <a href="#">{{Dades|Datos}}</a></nav>\n</header>\n<div class="galeria">\n  ${img('platja', 'Platja|Playa')}\n  ${img('bosc', 'Bosc|Bosque')}\n  ${img('pont', 'Pont|Puente')}\n</div>\n<table>\n  <tr><th>{{Foto|Foto}}</th><th>{{Lloc|Lugar}}</th></tr>\n  <tr><td>1</td><td>{{La platja|La playa}}</td></tr>\n</table>`,
          css: `header {\n  display: flex;\n  justify-content: space-between;\n}\n.galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\nimg {\n  width: 100%;\n}\nth, td {\n  border: 1px solid #9AA6C8;\n}` },
        nota: "Que assenyalin cada part a la vista prèvia i diguin la regla de CSS que la fa.|Que señalen cada parte en la vista previa y digan la regla de CSS que la hace." },
      { id: 's5', k: 'media', t: 'figure dins de la graella|figure dentro de la rejilla', x: "Cada figure és una cel·la de la graella amb la foto i el seu peu.|Cada figure es una celda de la rejilla con la foto y su pie.",
        media: { k: 'web', html: `<div class="galeria">\n  <figure>\n    ${img('platja', "Platja amb una palmera|Playa con una palmera")}\n    <figcaption>{{La platja, a l'estiu|La playa, en verano}}</figcaption>\n  </figure>\n  <figure>\n    ${img('castell', 'Un castell amb dues torres|Un castillo con dos torres')}\n    <figcaption>{{Visita al castell|Visita al castillo}}</figcaption>\n  </figure>\n</div>`,
          css: `.galeria {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\nfigure {\n  margin: 0;\n  background: #FFF3D6;\n  padding: 6px;\n  border-radius: 8px;\n}\nimg {\n  width: 100%;\n}` },
        nota: "Recorda que figure i figcaption es van veure a la unitat d'imatges. Pregunta què passaria sense margin: 0.|Recuerda que figure y figcaption se vieron en la unidad de imágenes. Pregunta qué pasaría sin margin: 0." },
      { id: 's6', k: 'concepte', t: "Primer, l'esbós|Primero, el boceto", pic: 'img/ment/lli.webp', punts: ["Només caixes, noms i fletxes.|Solo cajas, nombres y flechas.", "Fletxa → per a una fila flex; quadrícula per a la graella.|Flecha → para una fila flex; cuadrícula para la rejilla.", "Apunta les columnes: 1fr 1fr 1fr…|Apunta las columnas: 1fr 1fr 1fr…"],
        nota: "Dibuixa a la pissarra un exemple ràpid i esborra'l abans que comencin, perquè cadascú faci el seu.|Dibuja en la pizarra un ejemplo rápido y bórralo antes de que empiecen, para que cada uno haga el suyo." },
      { id: 's7', k: 'activitat', t: "Dibuixa l'esbós del teu àlbum|Dibuja el boceto de tu álbum", timer: 10, punts: ["Dibuixa les caixes de dalt a baix: capçalera, galeria, taula, peu.|Dibuja las cajas de arriba abajo: cabecera, galería, tabla, pie.", "Marca on hi ha flex i on hi ha grid.|Marca dónde hay flex y dónde hay grid.", "Escriu les columnes de la galeria i de la taula.|Escribe las columnas de la galería y de la tabla.", "Als 7 minuts: ensenya-ho al company/a.|A los 7 minutos: enséñaselo al compañero/a."],
        nota: "Passeja i pregunta per les decisions: per què 3 columnes? Quines dades aniran a la taula?|Pasea y pregunta por las decisiones: ¿por qué 3 columnas? ¿Qué datos irán en la tabla?" },
      { id: 's8', k: 'activitat', t: "A l'ordinador: les tres peces|En el ordenador: las tres piezas", timer: 12, punts: ["Peça 1: la capçalera (flex).|Pieza 1: la cabecera (flex).", "Peça 2: la galeria amb peus de foto (grid).|Pieza 2: la galería con pies de foto (grid).", "Peça 3: caça els tres errors.|Pieza 3: caza los tres errores.", "Para quan arribis a «Crea».|Para cuando llegues a «Crea»."],
        nota: "Si algú va molt de pressa, que comenci el seu àlbum; si va lent, que es quedi amb les peces 1 i 2 i les reaprofiti.|Si alguien va muy deprisa, que empiece su álbum; si va lento, que se quede con las piezas 1 y 2 y las reaproveche." },
      { id: 's9', k: 'pregunta', t: 'Tres errors|Tres errores', x: "Abans de buscar-los a l'app: n'hi ha un aquí. El veieu?|Antes de buscarlos en la app: hay uno aquí. ¿Lo veis?", code: "header {\n  display: flex;\n  justify-content: space between;\n}\nnav a {\n  display: flex;\n}",
        nota: "Hi ha dos errors al CSS: falta el guionet de space-between i el display: flex del menú és als enllaços (fills) i no al nav (pare). El tercer és una figure sense tancar.|Hay dos errores en el CSS: falta el guion de space-between y el display: flex del menú está en los enlaces (hijos) y no en el nav (padre). El tercero es una figure sin cerrar." },
      { id: 's10', k: 'repte', t: 'Construeix el teu àlbum|Construye tu álbum', timer: 18, punts: ["Segueix el teu esbós, caixa a caixa.|Sigue tu boceto, caja a caja.", "Fes servir les peces que ja funcionen.|Usa las piezas que ya funcionan.", "Als 12 minuts: comença la revisió.|A los 12 minutos: empieza la revisión."],
        nota: "Avisa als 12 minuts. Qui tingui totes les comprovacions marcades pot millorar colors i textos o afegir més fotos.|Avisa a los 12 minutos. Quien tenga todas las comprobaciones marcadas puede mejorar colores y textos o añadir más fotos." },
      { id: 's11', k: 'concepte', t: 'La revisió|La revisión', pic: 'img/ment/vel.webp', punts: ["Totes les fotos tenen un alt que les descriu?|¿Todas las fotos tienen un alt que las describe?", "Títols en ordre: h1 i després h2?|¿Títulos en orden: h1 y después h2?", "Es llegeix bé el text sobre el fons?|¿Se lee bien el texto sobre el fondo?", "Es veu bé al mòbil 📱 i a l'ordinador 💻?|¿Se ve bien en el móvil 📱 y en el ordenador 💻?"],
        nota: "Que facin la revisió a la seva pàgina abans de la galeria de l'aula: així els comentaris dels companys seran sobre coses noves.|Que hagan la revisión en su página antes de la galería del aula: así los comentarios de los compañeros serán sobre cosas nuevas." },
      { id: 's12', k: 'activitat', t: "Galeria de l'aula|Galería del aula", timer: 8, punts: ["Deixa el teu àlbum obert a la pantalla.|Deja tu álbum abierto en la pantalla.", "Visita dos àlbums d'altres companys.|Visita dos álbumes de otros compañeros.", "Per a cada un: dues estrelles ⭐⭐ i un desig ✨.|Para cada uno: dos estrellas ⭐⭐ y un deseo ✨."],
        nota: "Organitza els torns perquè cada àlbum rebi almenys dos comentaris. Recorda que els comentaris han de ser concrets i amables.|Organiza los turnos para que cada álbum reciba al menos dos comentarios. Recuerda que los comentarios tienen que ser concretos y amables." },
      { id: 's13', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Primer l'esbós, després el codi.|Primero el boceto, después el código.", "Cada eina per a la seva feina: flex, grid i taula.|Cada herramienta para su trabajo: flex, grid y tabla.", "Revisar i escoltar els companys fa millor la web.|Revisar y escuchar a los compañeros hace mejor la web."],
        nota: "Pregunta qui ha canviat alguna cosa gràcies a un comentari i que ho expliqui.|Pregunta quién ha cambiado algo gracias a un comentario y que lo explique." },
      { id: 's14', k: 'resum', t: 'La unitat en tres eines|La unidad en tres herramientas', punts: ["Flex: una fila o una columna (display: flex, gap, justify-content, align-items).|Flex: una fila o una columna (display: flex, gap, justify-content, align-items).", "Grid: files i columnes (display: grid, grid-template-columns, fr).|Grid: filas y columnas (display: grid, grid-template-columns, fr).", "Taula: dades amb sentit (table, tr, td, th, caption).|Tabla: datos con sentido (table, tr, td, th, caption)."],
        nota: "Explica que a la unitat següent faran que les pàgines canviïn de disposició segons la pantalla, per al mòbil.|Explica que en la unidad siguiente harán que las páginas cambien de disposición según la pantalla, para el móvil." },
      { id: 's15', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Quina eina has fet servir per a la galeria i per què?|¿Qué herramienta has usado para la galería y por qué?", "Què has millorat gràcies a la revisió o als comentaris?|¿Qué has mejorado gracias a la revisión o a los comentarios?"],
        nota: "Recull les fitxes de revisió: et donen informació de com han entès la unitat.|Recoge las fichas de revisión: te dan información de cómo han entendido la unidad." }
    ],
    print: [
      { id: 'p1', t: "Graella: l'esbós de l'àlbum|Rejilla: el boceto del álbum", k: 'graella', w: 8, h: 10,
        intro: "Dibuixa l'esbós del teu àlbum: cada caixa amb el seu nom, fletxes per a les files flex i les columnes de la galeria i de la taula. Sense colors ni detalls.|Dibuja el boceto de tu álbum: cada caja con su nombre, flechas para las filas flex y las columnas de la galería y de la tabla. Sin colores ni detalles.",
        legend: [['📦', 'Una caixa: escriu-hi què és (header, nav, figure…)|Una caja: escribe qué es (header, nav, figure…)'], ['➡️', 'Una fila flex|Una fila flex'], ['⬇️', 'Una columna flex|Una columna flex'], ['🧩', 'Una graella grid: dibuixa les columnes|Una rejilla grid: dibuja las columnas'], ['📅', 'Una taula de dades|Una tabla de datos'], ['✏️', 'Una nota per a tu|Una nota para ti']],
        items: [{ q: "Quantes columnes tindrà la teva galeria? Escriu el grid-template-columns.|¿Cuántas columnas tendrá tu galería? Escribe el grid-template-columns." }, { q: "Quines capçaleres (th) tindrà la teva taula?|¿Qué cabeceras (th) tendrá tu tabla?" }] },
      { id: 'p2', t: "Fitxa: revisió de l'àlbum|Ficha: revisión del álbum", k: 'fitxa',
        intro: "Primer revisa el teu àlbum (1 i 2). Després, a la galeria de l'aula, deixa dues estrelles i un desig a dos companys (3 i 4).|Primero revisa tu álbum (1 y 2). Después, en la galería del aula, deja dos estrellas y un deseo a dos compañeros (3 y 4).",
        items: [
          { q: "El meu àlbum: totes les fotos tenen alt i peu? Els títols van en ordre? Es llegeix bé? Es veu bé al mòbil?|Mi álbum: ¿todas las fotos tienen alt y pie? ¿Los títulos van en orden? ¿Se lee bien? ¿Se ve bien en el móvil?", sol: "Resposta oberta: una marca per a cada punt i, si cal, què ha arreglat.|Respuesta abierta: una marca para cada punto y, si hace falta, qué ha arreglado." },
          { q: "On he fet servir flex, on grid i on la taula?|¿Dónde he usado flex, dónde grid y dónde la tabla?", sol: "Flex a la capçalera i al menú, grid a la galeria i taula per a les dades de les fotos.|Flex en la cabecera y en el menú, grid en la galería y tabla para los datos de las fotos." },
          { q: "Àlbum de: ____________ · ⭐ ⭐ Dues coses ben fetes (concretes) · ✨ Un desig (una millora amable).|Álbum de: ____________ · ⭐ ⭐ Dos cosas bien hechas (concretas) · ✨ Un deseo (una mejora amable).", big: true, sol: "Exemple: ⭐ el menú queda centrat · ⭐ les fotos tenen peus clars · ✨ la taula podria tenir una columna amb la data.|Ejemplo: ⭐ el menú queda centrado · ⭐ las fotos tienen pies claros · ✨ la tabla podría tener una columna con la fecha." },
          { q: "Àlbum de: ____________ · ⭐ ⭐ Dues coses ben fetes (concretes) · ✨ Un desig (una millora amable).|Álbum de: ____________ · ⭐ ⭐ Dos cosas bien hechas (concretas) · ✨ Un deseo (una mejora amable).", big: true, sol: "Resposta oberta: comentaris concrets i respectuosos.|Respuesta abierta: comentarios concretos y respetuosos." }
        ] }
    ]
  }
  });
})());
