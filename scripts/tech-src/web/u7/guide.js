/* ===== Numi Tech · guia del professorat · Tech Web · unitat 7 «Per al mòbil» =====
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1'].
   Les webs, marques i adreces dels exemples (FotoNuvi, fotonuvi.numi, regals.xyz, XatAmics…) són inventades. A la guia de
   Lleida només hi van fets generals i coneguts de la ciutat (la Seu Vella, el riu Segre, Gardeny, la Festa Major de maig
   amb Lo Marraco, l'Aplec del Caragol, la fruita de l'horta, els caragols); cap negoci real. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Pantalles petites ---------- */
  'w7-1': {
    obj: [
      "L'alumne/a explica què és una web adaptable: el mateix contingut, col·locat diferent al mòbil i a l'ordinador.|El alumno/a explica qué es una web adaptable: el mismo contenido, colocado diferente en el móvil y en el ordenador.",
      "L'alumne/a afegeix l'etiqueta meta viewport al head i explica què passa al mòbil si no hi és.|El alumno/a añade la etiqueta meta viewport al head y explica qué pasa en el móvil si no está.",
      "L'alumne/a escriu regles @media (max-width: 600px) amb les claus ben tancades per canviar la disposició al mòbil.|El alumno/a escribe reglas @media (max-width: 600px) con las llaves bien cerradas para cambiar la disposición en el móvil.",
      "L'alumne/a substitueix amplades fixes per max-width: 100% i fa servir imatges flexibles.|El alumno/a sustituye anchos fijos por max-width: 100% y usa imágenes flexibles."
    ],
    comp: [
      "Competència digital: crear continguts digitals (HTML i CSS) que funcionin en dispositius diferents|Competencia digital: crear contenidos digitales (HTML y CSS) que funcionen en dispositivos diferentes",
      "Pensament computacional: condicions (el @media és un «si…») i depuració d'errors de sintaxi|Pensamiento computacional: condiciones (el @media es un «si…») y depuración de errores de sintaxis",
      "Matemàtiques: mesures en píxels i percentatges; comparar amplades|Matemáticas: medidas en píxeles y porcentajes; comparar anchos",
      "Disseny i comunicació: pensar en qui farà servir la web i en com la llegirà|Diseño y comunicación: pensar en quién usará la web y en cómo la leerá"
    ],
    vocab: [
      ["Disseny adaptable|Diseño adaptable", "Una web que es reorganitza per veure's bé a qualsevol pantalla (en anglès, responsive).|Una web que se reorganiza para verse bien en cualquier pantalla (en inglés, responsive)."],
      ["Viewport|Viewport", "La zona de la pantalla on es veu la pàgina. L'etiqueta meta viewport diu al mòbil que faci servir la seva amplada real.|La zona de la pantalla donde se ve la página. La etiqueta meta viewport dice al móvil que use su anchura real."],
      ["@media|@media", "Un bloc de CSS amb una condició: les regles de dins només valen si es compleix (per exemple, pantalla de 600 píxels o menys).|Un bloque de CSS con una condición: las reglas de dentro solo valen si se cumple (por ejemplo, pantalla de 600 píxeles o menos)."],
      ["Punt de tall|Punto de corte", "L'amplada on la web canvia de disposició (en anglès, breakpoint). Avui: 600 píxels.|El ancho donde la web cambia de disposición (en inglés, breakpoint). Hoy: 600 píxeles."],
      ["max-width|max-width", "L'amplada màxima d'una caixa: pot ser més estreta, però mai més ampla.|El ancho máximo de una caja: puede ser más estrecha, pero nunca más ancha."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Pantalles petites»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Pantallas pequeñas»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per grup de 3: un full A4 (l'ordinador), una tira de paper de 7 cm d'amplada i 30 cm de llarg (el mòbil), cinta adhesiva o massilla|Por grupo de 3: una hoja A4 (el ordenador), una tira de papel de 7 cm de ancho y 30 cm de largo (el móvil), cinta adhesiva o masilla",
        "Si en teniu, un mòbil o una tauleta per ensenyar com es veu una web feta per a ordinador|Si tenéis, un móvil o una tableta para enseñar cómo se ve una web hecha para ordenador"
      ],
      imprimir: ["Peces de la web (una pàgina per grup)|Piezas de la web (una página por grupo)", "Fitxa: la meva regla @media (una per alumne/a)|Ficha: mi regla @media (una por alumno/a)"],
      prep: [
        "Imprimir i retallar les peces de la web: un paquet per grup. Tallar les tires de paper de 7 cm.|Imprimir y recortar las piezas de la web: un paquete por grupo. Cortar las tiras de papel de 7 cm.",
        "Obrir la diapositiva de la demo @media i provar d'estrènyer la finestra del navegador: el fons ha de canviar de blau a taronja.|Abrir la diapositiva de la demo @media y probar a estrechar la ventana del navegador: el fondo tiene que cambiar de azul a naranja.",
        "Deixar els ordinadors engegats amb la sessió iniciada.|Dejar los ordenadores encendidos con la sesión iniciada."
      ]
    },
    plan: [
      { min: 5, t: "La web que no cap|La web que no cabe", fase: 'inici',
        fa: "Presenta la missió de la unitat: una guia de Lleida per a estudiants d'intercanvi, que la miraran al mòbil. Pregunta quines webs obren amb el mòbil i què passa quan una pàgina no està pensada per al mòbil. Si tens un mòbil, ensenya una pàgina petitíssima (sense viewport) i fes veure que cal moure's de costat.|Presenta la misión de la unidad: una guía de Lleida para estudiantes de intercambio, que la mirarán en el móvil. Pregunta qué webs abren con el móvil y qué pasa cuando una página no está pensada para el móvil. Si tienes un móvil, enseña una página pequeñísima (sin viewport) y haz ver que hay que moverse de lado.",
        diu: ["Quines webs mireu més amb el mòbil que amb l'ordinador?|¿Qué webs miráis más con el móvil que con el ordenador?",
          "Us ha passat mai que una web es vegi petitíssima i s'hagi d'ampliar amb els dits?|¿Os ha pasado alguna vez que una web se vea pequeñísima y haya que ampliarla con los dedos?",
          "Avui farem que la nostra web s'adapti sola a qualsevol pantalla.|Hoy haremos que nuestra web se adapte sola a cualquier pantalla."],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Viewport, @media i amplades flexibles|Viewport, @media y anchos flexibles", fase: 'teoria',
        fa: "Explica la idea de web adaptable amb l'animació de l'ordinador i el mòbil. Després, l'etiqueta viewport (per què el mòbil ho fa tot petit sense ella). Presenta el @media com un «si…» del CSS i ensenya la demo: estreny la finestra del navegador perquè vegin el canvi de color en directe. Desmunta la sintaxi a la pissarra: les claus del @media i les de la regla de dins. Acaba amb el «compte!» de les amplades fixes.|Explica la idea de web adaptable con la animación del ordenador y el móvil. Después, la etiqueta viewport (por qué el móvil lo hace todo pequeño sin ella). Presenta el @media como un «si…» del CSS y enseña la demo: estrecha la ventana del navegador para que vean el cambio de color en directo. Desmonta la sintaxis en la pizarra: las llaves del @media y las de la regla de dentro. Termina con el «¡cuidado!» de los anchos fijos.",
        diu: ["La web és la mateixa: el que canvia és com es col·loca.|La web es la misma: lo que cambia es cómo se coloca.",
          "Llegiu el @media en veu alta: «si la pantalla fa 600 píxels o menys…».|Leed el @media en voz alta: «si la pantalla mide 600 píxeles o menos…».",
          "Quantes claus s'obren aquí? I quantes se'n tanquen?|¿Cuántas llaves se abren aquí? ¿Y cuántas se cierran?",
          "Què passa si una caixa fa 700 píxels i el mòbil només en fa 375?|¿Qué pasa si una caja mide 700 píxeles y el móvil solo mide 375?"],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La web elàstica (sense pantalla)|La web elástica (sin pantalla)", fase: 'desconnectat',
        fa: "Grups de 3 amb un paquet de peces de la web, un full A4 (ordinador) i una tira estreta (mòbil). Primer col·loquen les peces a l'A4 com una web d'ordinador (les fotos en fila). Després han de passar exactament les mateixes peces a la tira del mòbil, sense treure'n cap. Al final, cada alumne/a omple la fitxa: dibuixa les dues versions i completa la regla @media que faria el canvi.|Grupos de 3 con un paquete de piezas de la web, una hoja A4 (ordenador) y una tira estrecha (móvil). Primero colocan las piezas en el A4 como una web de ordenador (las fotos en fila). Después tienen que pasar exactamente las mismas piezas a la tira del móvil, sin quitar ninguna. Al final, cada alumno/a rellena la ficha: dibuja las dos versiones y completa la regla @media que haría el cambio.",
        diu: ["Al mòbil no podeu llençar cap peça: tothom ha de poder llegir el mateix.|En el móvil no podéis tirar ninguna pieza: todo el mundo tiene que poder leer lo mismo.",
          "Quines peces heu hagut de canviar de lloc? Quina propietat de CSS ho faria?|¿Qué piezas habéis tenido que cambiar de sitio? ¿Qué propiedad de CSS lo haría?",
          "El menú hi cap en fila, a la tira? Què en faríeu?|¿El menú cabe en fila, en la tira? ¿Qué haríais con él?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 i després individual|Grupos de 3 y después individual" },
      { min: 15, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «La web de paper», que toquin «Ho hem fet!». A la pregunta de les tres targetes, demana que llegeixin el @media abans de triar. Al pas de l'error, fes notar que el navegador no avisa: simplement s'oblida del bloc.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «La web de papel», que toquen «¡Lo hemos hecho!». En la pregunta de las tres tarjetas, pide que lean el @media antes de elegir. En el paso del error, haz notar que el navegador no avisa: simplemente se olvida del bloque.",
        diu: ["Abans de triar la vista prèvia, digues amb paraules què fa el codi.|Antes de elegir la vista previa, di con palabras qué hace el código.",
          "El navegador no et diu res quan una regla està mal escrita: per això cal mirar-ho bé.|El navegador no te dice nada cuando una regla está mal escrita: por eso hay que mirarlo bien."],
        slides: ['s11'], app: "De «La missió» fins a «Investiga»: les històries, les targetes de «Descobreix», «La web de paper» (ja feta), la pregunta de la web adaptable, la vista prèvia de les tres targetes i el @media sense parèntesis.|De «La misión» hasta «Investiga»: las historias, las tarjetas de «Descubre», «La web de papel» (ya hecha), la pregunta de la web adaptable, la vista previa de las tres tarjetas y el @media sin paréntesis.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: viewport, amplades i @media|Retos: viewport, anchos y @media", fase: 'ordinador',
        fa: "Fes la pausa activa tots junts. Després escriviu entre tots, a la projecció, el @media del menú (diapositiva de la demo), i deixa'ls fer els cinc reptes: el viewport, la capçalera que no cap, el menú en columna, el títol i les targetes, i el CSS amb dos errors. Recorda'ls que mirin la vista 📱 i l'avís groc de sota l'editor.|Haced la pausa activa todos juntos. Después escribid entre todos, en la proyección, el @media del menú (diapositiva de la demo), y deja que hagan los cinco retos: el viewport, la cabecera que no cabe, el menú en columna, el título y las tarjetas, y el CSS con dos errores. Recuérdales que miren la vista 📱 y el aviso amarillo de debajo del editor.",
        diu: ["Primer escriviu les dues claus del @media; després, la regla de dins.|Primero escribid las dos llaves del @media; después, la regla de dentro.",
          "Llegiu l'avís groc: us diu la línia on hi ha el problema.|Leed el aviso amarillo: os dice la línea donde está el problema.",
          "Si ajudes un company/a, fes-li preguntes: no li escriguis el codi.|Si ayudas a un compañero/a, hazle preguntas: no le escribas el código."],
        slides: ['s12', 's13'], app: "«Pausa activa» i els cinc reptes: el viewport, la capçalera i les imatges flexibles, el menú en columna, el títol i les targetes, i els dos errors.|«Pausa activa» y los cinco retos: el viewport, la cabecera y las imágenes flexibles, el menú en columna, el título y las tarjetas, y los dos errores.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 4, t: "Crea: Lleida al mòbil|Crea: Lleida en el móvil", fase: 'crea',
        fa: "Cada alumne/a fa la portada de la seva guia amb tres targetes que al mòbil vagin en columna. Qui acabi, ensenya-la al company/a amb el botó 📱 i després amb el 💻.|Cada alumno/a hace la portada de su guía con tres tarjetas que en el móvil vayan en columna. Quien termine, que la enseñe al compañero/a con el botón 📱 y después con el 💻.",
        diu: ["Tria tu els llocs i les imatges: no ha de ser igual que la del company/a.|Elige tú los lugares y las imágenes: no tiene que ser igual que la del compañero/a.",
          "Recorda l'alt de cada imatge.|Recuerda el alt de cada imagen."],
        slides: ['s14'], app: "Pas «Crea»: Lleida al mòbil (es desa a «Projectes»).|Paso «Crea»: Lleida en el móvil (se guarda en «Proyectos»).", org: "Individual|Individual" },
      { min: 2, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum i fes les preguntes del tiquet a la sortida.|Repasa las tres ideas con el resumen y haz las preguntas del ticket a la salida.",
        diu: ["Qui em diu per a què serveix el viewport?|¿Quién me dice para qué sirve el viewport?",
          "Llegiu-me aquest @media en veu alta.|Leedme este @media en voz alta."],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu <code>@media max-width: 600px {</code> sense parèntesis, o s'oblida la clau que tanca el @media.|Escribe <code>@media max-width: 600px {</code> sin paréntesis, o se olvida la llave que cierra el @media.",
        "Que compti les claus amb el dit: quantes s'obren i quantes es tanquen? Que llegeixi l'avís groc de sota l'editor i compari la seva línia amb la de la diapositiva.|Que cuente las llaves con el dedo: ¿cuántas se abren y cuántas se cierran? Que lea el aviso amarillo de debajo del editor y compare su línea con la de la diapositiva."],
      ["Posa el @media a dalt de tot del CSS i les regles normals de després el tornen a desfer.|Pone el @media arriba del todo del CSS y las reglas normales de después lo vuelven a deshacer.",
        "Pregunta-li quina regla llegeix l'últim el navegador. Quan dues regles diuen coses diferents del mateix element, guanya la de més avall: per això el @media va al final.|Pregúntale qué regla lee el último el navegador. Cuando dos reglas dicen cosas diferentes del mismo elemento, gana la de más abajo: por eso el @media va al final."],
      ["Escriu l'etiqueta viewport dins del body o a la pestanya CSS.|Escribe la etiqueta viewport dentro del body o en la pestaña CSS.",
        "Recorda-li que el viewport és una informació per al navegador, que no es veu a la pàgina. On posàvem el title? Allà mateix, dins del head.|Recuérdale que el viewport es una información para el navegador, que no se ve en la página. ¿Dónde poníamos el title? Allí mismo, dentro del head."],
      ["Creu que <code>max-width: 600px</code> al @media vol dir que la pàgina farà 600 píxels.|Cree que <code>max-width: 600px</code> en el @media quiere decir que la página medirá 600 píxeles.",
        "Que el llegeixi com una pregunta: «la pantalla fa com a màxim 600 píxels?». Si la resposta és sí, s'apliquen les regles de dins.|Que lo lea como una pregunta: «¿la pantalla mide como máximo 600 píxeles?». Si la respuesta es sí, se aplican las reglas de dentro."],
      ["Canvia <code>width: 700px</code> per <code>width: 100%</code>, però amb el padding la caixa continua sortint una mica.|Cambia <code>width: 700px</code> por <code>width: 100%</code>, pero con el padding la caja sigue saliendo un poco.",
        "Recorda el model de caixa de la unitat 5: el padding se suma a l'amplada. Amb <code>max-width: 100%</code>, o traient el width, la caixa ja s'ajusta.|Recuerda el modelo de caja de la unidad 5: el padding se suma al ancho. Con <code>max-width: 100%</code>, o quitando el width, la caja ya se ajusta."]
    ],
    diff: {
      mes: "Afegir un segon punt de tall per a mòbils molt estrets (<code>@media (max-width: 400px)</code>) amb el títol encara més petit, o fer que a les tauletes les targetes vagin de dues en dues amb <code>flex-wrap: wrap</code>.|Añadir un segundo punto de corte para móviles muy estrechos (<code>@media (max-width: 400px)</code>) con el título aún más pequeño, o hacer que en las tabletas las tarjetas vayan de dos en dos con <code>flex-wrap: wrap</code>.",
      menys: "Tenir la fitxa de la regla @media al costat de l'ordinador i fer servir els botons d'inserir codi. Començar copiant la regla de la demo i canviant només el selector.|Tener la ficha de la regla @media al lado del ordenador y usar los botones de insertar código. Empezar copiando la regla de la demo y cambiando solo el selector."
    },
    aval: {
      ticket: ["Per a què serveix l'etiqueta meta viewport?|¿Para qué sirve la etiqueta meta viewport?",
        "Escriu un @media que faci més petit el títol h1 quan la pantalla fa 600 píxels o menys.|Escribe un @media que haga más pequeño el título h1 cuando la pantalla mide 600 píxeles o menos."],
      rubric: [
        ["Web adaptable|Web adaptable", "Explica que el contingut és el mateix i que només en canvia la disposició.|Explica que el contenido es el mismo y que solo cambia su disposición.", "Creu que al mòbil cal treure contingut perquè hi càpiga.|Cree que en el móvil hay que quitar contenido para que quepa."],
        ["Sintaxi del @media|Sintaxis del @media", "Escriu el @media amb parèntesis i amb les claus de fora i de dins ben tancades.|Escribe el @media con paréntesis y con las llaves de fuera y de dentro bien cerradas.", "Necessita la demo al costat i de vegades s'oblida una clau.|Necesita la demo al lado y a veces se olvida una llave."],
        ["Amplades flexibles|Anchos flexibles", "Fa servir max-width: 100% i imatges flexibles i comprova la vista de mòbil.|Usa max-width: 100% e imágenes flexibles y comprueba la vista de móvil.", "Arregla l'amplada quan l'hi diuen, però no comprova el mòbil per si mateix/a.|Arregla el ancho cuando se lo dicen, pero no comprueba el móvil por sí mismo/a."]
      ]
    },
    casa: "A casa, amb un adult, obriu la mateixa web a l'ordinador i al mòbil (la de l'escola o la de la biblioteca): què canvia de lloc? Hi ha algun menú que s'amagui en un botó? També podeu fer l'activitat «La web de paper» amb un full i un pòsit.|En casa, con un adulto, abrid la misma web en el ordenador y en el móvil (la del colegio o la de la biblioteca): ¿qué cambia de sitio? ¿Hay algún menú que se esconda en un botón? También podéis hacer la actividad «La web de papel» con una hoja y un pósit.",
    slides: [
      { id: 's1', k: 'portada', t: "Pantalles petites|Pantallas pequeñas", x: "Comencem la guia de Lleida: una web que es veu bé al mòbil i a l'ordinador.|Empezamos la guía de Lleida: una web que se ve bien en el móvil y en el ordenador.",
        nota: "Presenta la missió de la unitat: en quatre sessions farem una guia de Lleida per a estudiants d'intercanvi, pensada per al mòbil.|Presenta la misión de la unidad: en cuatro sesiones haremos una guía de Lleida para estudiantes de intercambio, pensada para el móvil." },
      { id: 's2', k: 'pregunta', t: "Una web que no cap|Una web que no cabe", x: "Què passa quan obres al mòbil una web pensada només per a l'ordinador?|¿Qué pasa cuando abres en el móvil una web pensada solo para el ordenador?", punts: ["Tot es veu petitíssim|Todo se ve pequeñísimo", "Has de moure't de costat|Tienes que moverte de lado", "Els botons no s'encerten amb el dit|Los botones no se aciertan con el dedo"],
        nota: "Recull experiències. Si tens un mòbil, ensenya-ho. Remarca que avui hi posarem remei amb CSS.|Recoge experiencias. Si tienes un móvil, enséñalo. Remarca que hoy lo arreglaremos con CSS." },
      { id: 's3', k: 'anim', t: "Una web, moltes pantalles|Una web, muchas pantallas", anim: 'w7resp', x: "El mateix contingut, col·locat diferent: en fila a l'ordinador, en columna al mòbil.|El mismo contenido, colocado diferente: en fila en el ordenador, en columna en el móvil.",
        nota: "Pregunta què ha canviat entre les dues pantalles i què s'ha quedat igual. Insisteix: adaptar no és retallar.|Pregunta qué ha cambiado entre las dos pantallas y qué se ha quedado igual. Insiste: adaptar no es recortar." },
      { id: 's4', k: 'anim', t: "L'etiqueta viewport|La etiqueta viewport", anim: 'w7view', code: '<meta name="viewport" content="width=device-width, initial-scale=1">',
        nota: "Sense aquesta línia, el mòbil fa veure que té una pantalla ampla i ho redueix tot. Va dins del head, amb el title.|Sin esta línea, el móvil hace como si tuviera una pantalla ancha y lo reduce todo. Va dentro del head, con el title." },
      { id: 's5', k: 'anim', t: "@media: un «si…» del CSS|@media: un «si…» del CSS", anim: 'w7media', x: "Si la pantalla fa 600 píxels o menys, s'apliquen les regles de dins.|Si la pantalla mide 600 píxeles o menos, se aplican las reglas de dentro.",
        nota: "Fes que llegeixin la condició en veu alta. Mentre la finestra s'encongeix, demana que diguin «ara!» quan creuen que s'activarà.|Haz que lean la condición en voz alta. Mientras la ventana se encoge, pide que digan «¡ahora!» cuando crean que se activará." },
      { id: 's6', k: 'media', t: "Mira-ho funcionar|Míralo funcionar", x: "Fons blau a les pantalles amples; fons taronja i títol més petit a les estretes.|Fondo azul en las pantallas anchas; fondo naranja y título más pequeño en las estrechas.",
        media: { k: 'web', html: '<h1>Lleida</h1>\n<p>Benvinguts a la guia!</p>', css: 'body {\n  background: #E8F1FF;\n}\n@media (max-width: 600px) {\n  body {\n    background: #FFE9C7;\n  }\n  h1 {\n    font-size: 26px;\n  }\n}' },
        nota: "Segons l'amplada de la projecció, la demo es veurà blava (ordinador) o taronja (mòbil). Estreny la finestra del navegador i deixa que vegin el canvi en directe.|Según el ancho de la proyección, la demo se verá azul (ordenador) o naranja (móvil). Estrecha la ventana del navegador y deja que vean el cambio en directo." },
      { id: 's7', k: 'concepte', t: "Claus dins de claus|Llaves dentro de llaves", punts: ["La condició va entre parèntesis.|La condición va entre paréntesis.", "El @media té les seves claus { }.|El @media tiene sus llaves { }.", "A dins, regles normals amb les seves claus.|Dentro, reglas normales con sus llaves.", "El @media va al final del CSS.|El @media va al final del CSS."],
        code: '@media (max-width: 600px) {\n  .targetes {\n    flex-direction: column;\n  }\n}',
        nota: "Pinta a la pissarra les claus de dos colors: les del @media i les de la regla. Compteu-les junts.|Pinta en la pizarra las llaves de dos colores: las del @media y las de la regla. Contadlas juntos." },
      { id: 's8', k: 'anim', t: "Compte amb les amplades fixes|Cuidado con los anchos fijos", anim: 'w7flex', x: "Millor max-width: 100% que width: 700px. I a les imatges: img { max-width: 100%; height: auto; }.|Mejor max-width: 100% que width: 700px. Y en las imágenes: img { max-width: 100%; height: auto; }.",
        nota: "Pregunta: quina de les dues caixes es podria llegir al mòbil sense moure's de costat? Relaciona-ho amb el model de caixa de la unitat 5.|Pregunta: ¿cuál de las dos cajas se podría leer en el móvil sin moverse de lado? Relaciónalo con el modelo de caja de la unidad 5." },
      { id: 's9', k: 'activitat', t: "La web elàstica|La web elástica", timer: 12, punts: ["Col·loqueu les peces a l'A4: és l'ordinador.|Colocad las piezas en el A4: es el ordenador.", "Passeu les mateixes peces a la tira estreta: és el mòbil.|Pasad las mismas piezas a la tira estrecha: es el móvil.", "No en podeu treure cap!|¡No podéis quitar ninguna!", "Què heu canviat de lloc?|¿Qué habéis cambiado de sitio?"],
        nota: "Passa pels grups i pregunta quina propietat de CSS faria cada canvi (flex-direction, font-size…).|Pasa por los grupos y pregunta qué propiedad de CSS haría cada cambio (flex-direction, font-size…)." },
      { id: 's10', k: 'activitat', t: "Ara, la regla|Ahora, la regla", punts: ["Dibuixa les dues versions a la fitxa.|Dibuja las dos versiones en la ficha.", "Completa la regla @media.|Completa la regla @media.", "Compara-la amb la del company/a.|Compárala con la del compañero/a."],
        nota: "Si no hi ha temps, la fitxa es pot acabar a casa. L'important és que relacionin el paper amb el CSS.|Si no hay tiempo, la ficha se puede terminar en casa. Lo importante es que relacionen el papel con el CSS." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Pantalles petites».|Abre la sesión «Pantallas pequeñas».", "«La web de paper»: toca «Ho hem fet!».|«La web de papel»: toca «¡Lo hemos hecho!».", "Llegeix el codi abans de triar.|Lee el código antes de elegir.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Fixa't en qui tria la vista prèvia sense llegir el @media i demana-li que t'expliqui el codi.|Fíjate en quién elige la vista previa sin leer el @media y pídele que te explique el código." },
      { id: 's12', k: 'repte', t: "Reptes: la guia al mòbil|Retos: la guía en el móvil", timer: 10, punts: ["1. El viewport|1. El viewport", "2. La capçalera que no cap|2. La cabecera que no cabe", "3. El menú en columna|3. El menú en columna", "4. El títol i les targetes|4. El título y las tarjetas", "5. Dos errors|5. Dos errores"],
        nota: "Recorda'ls que l'avís groc de sota l'editor diu la línia de l'error, i que han de mirar la vista 📱.|Recuérdales que el aviso amarillo de debajo del editor dice la línea del error, y que tienen que mirar la vista 📱." },
      { id: 's13', k: 'media', t: "Programem junts: el menú|Programemos juntos: el menú", x: "Quina regla falta perquè al mòbil els botons vagin un sota l'altre?|¿Qué regla falta para que en el móvil los botones vayan uno debajo del otro?",
        media: { k: 'web', html: '<nav class="menu">\n  <a href="#llocs">Llocs</a>\n  <a href="#festes">Festes</a>\n  <a href="#menjar">Menjar</a>\n</nav>', css: '.menu {\n  display: flex;\n  gap: 10px;\n}\n.menu a {\n  background: #E8F1FF;\n  padding: 10px 16px;\n  border-radius: 8px;\n}\n@media (max-width: 600px) {\n  .menu {\n    flex-direction: column;\n  }\n}' },
        nota: "Tapa el bloc @media i demana'ls que el dictin línia a línia. Després destapa'l i compareu.|Tapa el bloque @media y pídeles que lo dicten línea a línea. Después destápalo y comparad." },
      { id: 's14', k: 'activitat', t: "Crea: Lleida al mòbil|Crea: Lleida en el móvil", timer: 4, x: "Un títol, una benvinguda i 3 targetes: en fila a l'ordinador, en columna al mòbil.|Un título, una bienvenida y 3 tarjetas: en fila en el ordenador, en columna en el móvil.",
        nota: "Celebra les tries diferents de llocs i imatges. Aquesta portada la farem servir a la sessió 4.|Celebra las elecciones diferentes de lugares e imágenes. Esta portada la usaremos en la sesión 4." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Una web adaptable col·loca el mateix contingut de maneres diferents.|Una web adaptable coloca el mismo contenido de maneras diferentes.", "El viewport fa que el mòbil faci servir la seva amplada real.|El viewport hace que el móvil use su anchura real.", "@media (max-width: 600px) { … }: regles només per a pantalles estretes.|@media (max-width: 600px) { … }: reglas solo para pantallas estrechas."],
        nota: "Torna a la pregunta del principi: ara ja saben arreglar una web que no cap.|Vuelve a la pregunta del principio: ahora ya saben arreglar una web que no cabe." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Per a què serveix el viewport?|¿Para qué sirve el viewport?", "Escriu un @media que faci més petit el h1.|Escribe un @media que haga más pequeño el h1."],
        nota: "Anota qui encara s'oblida les claus del @media: la propera sessió hi tornarem amb els botons.|Anota quién todavía se olvida de las llaves del @media: la próxima sesión volveremos a ello con los botones." }
    ],
    print: [
      { id: 'p1', t: "Peces de la web|Piezas de la web", k: 'targetes',
        intro: "Un paquet per grup de 3. Retalleu les peces: primer les col·loqueu en un A4 (l'ordinador) i després, les mateixes, en una tira de 7 cm (el mòbil).|Un paquete por grupo de 3. Recortad las piezas: primero las colocáis en un A4 (el ordenador) y después, las mismas, en una tira de 7 cm (el móvil).",
        items: [
          { t: "Capçalera: Guia de Lleida ⭐|Cabecera: Guía de Lleida ⭐", n: 1 },
          { t: "Menú: Llocs · Festes · Menjar 🧭|Menú: Lugares · Fiestas · Comida 🧭", n: 1 },
          { t: "Text de benvinguda 📖|Texto de bienvenida 📖", n: 1 },
          { t: "Foto i text: la Seu Vella 🏛️|Foto y texto: la Seu Vella 🏛️", n: 1 },
          { t: "Foto i text: el riu Segre 🗺️|Foto y texto: el río Segre 🗺️", n: 1 },
          { t: "Foto i text: Gardeny 🏰|Foto y texto: Gardeny 🏰", n: 1 },
          { t: "Festes: Lo Marraco 🐉|Fiestas: Lo Marraco 🐉", n: 1 },
          { t: "Menjar: la fruita de l'horta 🍎|Comida: la fruta de la huerta 🍎", n: 1 },
          { t: "Peu: les fonts ✏️|Pie: las fuentes ✏️", n: 1 }
        ] },
      { id: 'p2', t: "La meva regla @media|Mi regla @media", k: 'fitxa',
        intro: "Després de la web elàstica: dibuixa les dues versions i escriu el CSS que faria el canvi.|Después de la web elástica: dibuja las dos versiones y escribe el CSS que haría el cambio.",
        items: [
          { q: "Dibuixa com heu col·locat les peces a l'ordinador.|Dibuja cómo habéis colocado las piezas en el ordenador.", big: true, sol: "Les fotos en fila, una al costat de l'altra; el menú en fila sota la capçalera.|Las fotos en fila, una al lado de la otra; el menú en fila debajo de la cabecera." },
          { q: "Dibuixa la mateixa pàgina al mòbil.|Dibuja la misma página en el móvil.", big: true, sol: "Totes les peces en una sola columna, en el mateix ordre i sense treure'n cap.|Todas las piezas en una sola columna, en el mismo orden y sin quitar ninguna." },
          { q: "Completa: @media (__________: 600px) { .fotos { flex-direction: __________; } }|Completa: @media (__________: 600px) { .fotos { flex-direction: __________; } }", sol: "max-width · column|max-width · column" },
          { q: "Per què és millor max-width: 100% que width: 700px?|¿Por qué es mejor max-width: 100% que width: 700px?", sol: "Perquè la caixa s'encongeix fins que cap a la pantalla; amb 700px, al mòbil surt de la pantalla.|Porque la caja se encoge hasta que cabe en la pantalla; con 700px, en el móvil se sale de la pantalla." }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Botons i efectes ---------- */
  'w7-2': {
    obj: [
      "L'alumne/a converteix un enllaç en un botó amb fons, farciment, vores arrodonides i sense subratllat.|El alumno/a convierte un enlace en un botón con fondo, relleno, bordes redondeados y sin subrayado.",
      "L'alumne/a escriu regles :hover i :focus i explica quan s'apliquen.|El alumno/a escribe reglas :hover y :focus y explica cuándo se aplican.",
      "L'alumne/a fa servir transition a la regla normal perquè el canvi sigui suau en entrar i en sortir.|El alumno/a usa transition en la regla normal para que el cambio sea suave al entrar y al salir.",
      "L'alumne/a adapta els botons al dit (grans i separats) amb un @media i no amaga res important darrere del :hover.|El alumno/a adapta los botones al dedo (grandes y separados) con un @media y no esconde nada importante detrás del :hover."
    ],
    comp: [
      "Competència digital: dissenyar elements interactius d'una web amb CSS|Competencia digital: diseñar elementos interactivos de una web con CSS",
      "Pensament computacional: estats (normal, :hover, :focus) i depuració d'errors de sintaxi|Pensamiento computacional: estados (normal, :hover, :focus) y depuración de errores de sintaxis",
      "Ciutadania digital i accessibilitat: webs que es puguin fer servir amb el dit, el ratolí i el teclat|Ciudadanía digital y accesibilidad: webs que se puedan usar con el dedo, el ratón y el teclado",
      "Expressió artística: color, forma i moviment al servei de la claredat|Expresión artística: color, forma y movimiento al servicio de la claridad"
    ],
    vocab: [
      ["Pseudoclasse|Pseudoclase", "Una paraula després de dos punts que tria un estat d'un element: :hover, :focus.|Una palabra después de dos puntos que elige un estado de un elemento: :hover, :focus."],
      [":hover|:hover", "L'estil d'un element mentre el ratolí hi és a sobre.|El estilo de un elemento mientras el ratón está encima."],
      [":focus|:focus", "L'estil d'un element quan el teclat (la tecla de tabulació) hi és a sobre.|El estilo de un elemento cuando el teclado (la tecla de tabulación) está encima."],
      ["Transició|Transición", "Un canvi d'estil que es fa a poc a poc, en el temps que diem (transition: background 0.3s).|Un cambio de estilo que se hace poco a poco, en el tiempo que decimos (transition: background 0.3s)."],
      ["Farciment (padding)|Relleno (padding)", "L'espai entre el text del botó i la seva vora: fa el botó més gran i fàcil de tocar.|El espacio entre el texto del botón y su borde: hace el botón más grande y fácil de tocar."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Botons i efectes»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Botones y efectos»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per grup de 3: un paquet de targetes de codi de paper|Por grupo de 3: un paquete de tarjetas de código de papel",
        "Una cartolina de color (o un full gran) per grup, per al «botó humà»|Una cartulina de color (o una hoja grande) por grupo, para el «botón humano»"
      ],
      imprimir: ["Codi de paper: el botó (un paquet per grup)|Código de papel: el botón (un paquete por grupo)", "Fitxa: el botó en tres estats (una per alumne/a)|Ficha: el botón en tres estados (una por alumno/a)"],
      prep: [
        "Imprimir i retallar les targetes de codi. Barrejar-les abans de donar-les a cada grup.|Imprimir y recortar las tarjetas de código. Mezclarlas antes de darlas a cada grupo.",
        "Provar la demo de :hover de la diapositiva amb el ratolí: el botó ha de canviar de color.|Probar la demo de :hover de la diapositiva con el ratón: el botón tiene que cambiar de color.",
        "Deixar els ordinadors engegats amb la sessió iniciada.|Dejar los ordenadores encendidos con la sesión iniciada."
      ]
    },
    plan: [
      { min: 5, t: "On he de tocar?|¿Dónde tengo que tocar?", fase: 'inici',
        fa: "Repassa el @media amb la pregunta de la diapositiva. Després explica el problema d'en Bit: a la guia, els enllaços semblen text normal. Pregunta com sabem, en una app o en una web, què es pot tocar.|Repasa el @media con la pregunta de la diapositiva. Después explica el problema de Bit: en la guía, los enlaces parecen texto normal. Pregunta cómo sabemos, en una app o en una web, qué se puede tocar.",
        diu: ["Què fa aquest @media? Llegiu-lo en veu alta.|¿Qué hace este @media? Leedlo en voz alta.",
          "Com sabeu que una cosa d'una pantalla és un botó?|¿Cómo sabéis que una cosa de una pantalla es un botón?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Botons, :hover, :focus i transicions|Botones, :hover, :focus y transiciones", fase: 'teoria',
        fa: "Mostra com un enllaç es converteix en botó propietat a propietat (són coses de les unitats 4 i 5). Amb la demo de :hover, passa el ratolí pel botó i demana que expliquin què passa. Ensenya la diferència entre el canvi de cop i la transició, i on es posa la transition. Acaba amb el mòbil (botons per al dit) i el teclat (:focus).|Muestra cómo un enlace se convierte en botón propiedad a propiedad (son cosas de las unidades 4 y 5). Con la demo de :hover, pasa el ratón por el botón y pide que expliquen qué pasa. Enseña la diferencia entre el cambio de golpe y la transición, y dónde se pone la transition. Termina con el móvil (botones para el dedo) y el teclado (:focus).",
        diu: ["Quina propietat fa el botó més gran? I quina li treu el subratllat?|¿Qué propiedad hace el botón más grande? ¿Y cuál le quita el subrayado?",
          ":hover vol dir «mentre el ratolí hi és a sobre». I al mòbil, on és el ratolí?|:hover quiere decir «mientras el ratón está encima». ¿Y en el móvil, dónde está el ratón?",
          "Si poso la transition només al :hover, què passarà quan el ratolí surti?|Si pongo la transition solo en el :hover, ¿qué pasará cuando el ratón salga?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Codi de paper i el botó humà (sense pantalla)|Código de papel y el botón humano (sin pantalla)", fase: 'desconnectat',
        fa: "Grups de 3 amb un paquet de targetes de codi barrejades. Primer han d'ordenar les targetes per fer un botó que funcioni: la regla .boto, la regla .boto:hover i la transition al lloc bo. Quan el tinguin, fan de «botó humà»: un/a alumne/a és el botó (amb la cartolina), un altre és el ratolí i el tercer llegeix el codi. Quan el ratolí s'acosta, el botó canvia (aixeca la cartolina): primer de cop, després a poc a poc, comptant fins a 3 (la transició). Acabeu amb la fitxa dels tres estats.|Grupos de 3 con un paquete de tarjetas de código mezcladas. Primero tienen que ordenar las tarjetas para hacer un botón que funcione: la regla .boto, la regla .boto:hover y la transition en su sitio. Cuando lo tengan, hacen de «botón humano»: un/a alumno/a es el botón (con la cartulina), otro es el ratón y el tercero lee el código. Cuando el ratón se acerca, el botón cambia (levanta la cartulina): primero de golpe, después poco a poco, contando hasta 3 (la transición). Terminad con la ficha de los tres estados.",
        diu: ["On va la targeta de la transition? Per què?|¿Dónde va la tarjeta de la transition? ¿Por qué?",
          "Botó, quan el ratolí surt, també tornes a poc a poc!|Botón, cuando el ratón sale, ¡también vuelves poco a poco!",
          "Quantes claus { teniu? I quantes }?|¿Cuántas llaves { tenéis? ¿Y cuántas }?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 14, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. Al pas «Caçadors de botons», que el deixin per a casa («Ara no»). A les targetes de teoria, que passin el ratolí per les demos i facin servir la tecla de tabulació a la del teclat.|Cada alumno/a avanza hasta la pausa activa. En el paso «Cazadores de botones», que lo dejen para casa («Ahora no»). En las tarjetas de teoría, que pasen el ratón por las demos y usen la tecla de tabulación en la del teclado.",
        diu: ["Passa el ratolí per la demo. Ara prova la tecla de tabulació: què es marca?|Pasa el ratón por la demo. Ahora prueba la tecla de tabulación: ¿qué se marca?",
          "Al pas de l'error, llegeix lletra a lletra el nom de la pseudoclasse.|En el paso del error, lee letra a letra el nombre de la pseudoclase."],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: la història, les targetes de «Descobreix», ordenar què passa amb el :hover, «Caçadors de botons» (per a casa), el botó de la vista prèvia, on va la transition i el :hovre.|De «La misión» hasta «Investiga»: la historia, las tarjetas de «Descubre», ordenar qué pasa con el :hover, «Cazadores de botones» (para casa), el botón de la vista previa, dónde va la transition y el :hovre.", org: "Individual|Individual" },
      { min: 11, t: "Reptes: el botó complet|Retos: el botón completo", fase: 'ordinador',
        fa: "Pausa activa tots junts («el botó que s'estira»). Després, cinc reptes: el botó que no es veu, el :hover amb la mà, la transició i el :focus, els botons grans al mòbil i el botó amb dos errors. Si algú acaba aviat, que provi d'afegir un <code>transform: scale(1.05)</code> al :hover.|Pausa activa todos juntos («el botón que se estira»). Después, cinco retos: el botón que no se ve, el :hover con la mano, la transición y el :focus, los botones grandes en el móvil y el botón con dos errores. Si alguien termina pronto, que pruebe a añadir un <code>transform: scale(1.05)</code> al :hover.",
        diu: ["Passa el ratolí pel teu botó: canvia? Ho fa a poc a poc?|Pasa el ratón por tu botón: ¿cambia? ¿Lo hace poco a poco?",
          "Al mòbil, el podries tocar amb el dit gros sense equivocar-te?|En el móvil, ¿lo podrías tocar con el dedo gordo sin equivocarte?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els cinc reptes de «Reptes».|«Pausa activa» y los cinco retos de «Retos».", org: "Individual|Individual" },
      { min: 5, t: "Crea: el menú de la guia|Crea: el menú de la guía", fase: 'crea',
        fa: "Cada alumne/a crea el menú de la seva guia: un nav amb tres botons o més que portin a seccions, amb :hover, transition i un @media per al mòbil. Per parelles, proveu el menú del company/a amb el ratolí, amb el teclat i en mode 📱.|Cada alumno/a crea el menú de su guía: un nav con tres botones o más que lleven a secciones, con :hover, transition y un @media para el móvil. Por parejas, probad el menú del compañero/a con el ratón, con el teclado y en modo 📱.",
        diu: ["Tria uns colors amb bon contrast: el text s'ha de llegir bé.|Elige unos colores con buen contraste: el texto se tiene que leer bien.",
          "Prova el menú del company/a només amb el teclat.|Prueba el menú del compañero/a solo con el teclado."],
        slides: ['s15'], app: "Pas «Crea»: El menú de la guia.|Paso «Crea»: El menú de la guía.", org: "Individual i per parelles|Individual y por parejas" },
      { min: 2, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum. Tiquet de sortida a la porta.|Repasa las tres ideas con el resumen. Ticket de salida en la puerta.",
        diu: ["On es posa la transition?|¿Dónde se pone la transition?", "Per què al mòbil no podem amagar res darrere del :hover?|¿Por qué en el móvil no podemos esconder nada detrás del :hover?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu <code>.boto :hover</code> (amb un espai) o <code>.boto:hovre</code>, i el botó no canvia.|Escribe <code>.boto :hover</code> (con un espacio) o <code>.boto:hovre</code>, y el botón no cambia.",
        "Que compari lletra a lletra el seu selector amb el de la diapositiva. Explica que l'espai vol dir «dins de»: <code>.boto :hover</code> busca una cosa dins del botó.|Que compare letra a letra su selector con el de la diapositiva. Explica que el espacio quiere decir «dentro de»: <code>.boto :hover</code> busca algo dentro del botón."],
      ["Posa la transition només a la regla :hover i, en sortir, el botó torna de cop.|Pone la transition solo en la regla :hover y, al salir, el botón vuelve de golpe.",
        "Que passi el ratolí a poc a poc i observi l'entrada i la sortida. Quina regla s'aplica quan el ratolí ja no hi és? Allà ha d'anar la transition.|Que pase el ratón despacio y observe la entrada y la salida. ¿Qué regla se aplica cuando el ratón ya no está? Allí tiene que ir la transition."],
      ["Fa servir background-color en una regla i background en l'altra i es confon.|Usa background-color en una regla y background en la otra y se confunde.",
        "Totes dues propietats canvien el color de fons. Proposa-li fer servir sempre la mateixa a tot el CSS, i també a la transition (transition: background 0.3s).|Las dos propiedades cambian el color de fondo. Propónle usar siempre la misma en todo el CSS, y también en la transition (transition: background 0.3s)."],
      ["S'oblida el punt i coma al final d'una declaració i la següent deixa de funcionar.|Se olvida el punto y coma al final de una declaración y la siguiente deja de funcionar.",
        "Que miri quina propietat no fa res i llegeixi la línia d'abans: on s'acaba? El punt i coma és com el punt final d'una frase.|Que mire qué propiedad no hace nada y lea la línea de antes: ¿dónde termina? El punto y coma es como el punto final de una frase."],
      ["Posa una transició molt llarga (3 s) i la web sembla lenta.|Pone una transición muy larga (3 s) y la web parece lenta.",
        "Que la provi com a usuari/ària: esperaria 3 segons cada vegada? Proposa-li entre 0,2 i 0,4 segons.|Que la pruebe como usuario/a: ¿esperaría 3 segundos cada vez? Propónle entre 0,2 y 0,4 segundos."]
    ],
    diff: {
      mes: "Afegir al :hover un <code>transform: scale(1.05)</code> i posar-lo també a la transition (<code>transition: background 0.3s, transform 0.3s</code>). Fer un botó «fantasma» (fons transparent i vora) que s'ompli de color amb el :hover.|Añadir al :hover un <code>transform: scale(1.05)</code> y ponerlo también en la transition (<code>transition: background 0.3s, transform 0.3s</code>). Hacer un botón «fantasma» (fondo transparente y borde) que se llene de color con el :hover.",
      menys: "Treballar amb les targetes de codi de paper al costat de l'ordinador i amb els botons d'inserir codi. Fer primer el botó i el :hover; la transition i el :focus, després.|Trabajar con las tarjetas de código de papel al lado del ordenador y con los botones de insertar código. Hacer primero el botón y el :hover; la transition y el :focus, después."
    },
    aval: {
      ticket: ["Escriu la regla que fa que .boto canviï de color quan el ratolí hi passa per sobre.|Escribe la regla que hace que .boto cambie de color cuando el ratón pasa por encima.",
        "On es posa la transition perquè el canvi sigui suau en entrar i en sortir?|¿Dónde se pone la transition para que el cambio sea suave al entrar y al salir?"],
      rubric: [
        ["Botó amb estil|Botón con estilo", "Fa un botó amb fons, padding, border-radius i sense subratllat, amb bon contrast.|Hace un botón con fondo, padding, border-radius y sin subrayado, con buen contraste.", "Fa el botó, però amb poc contrast o massa petit.|Hace el botón, pero con poco contraste o demasiado pequeño."],
        [":hover, :focus i transition|:hover, :focus y transition", "Escriu el :hover i el :focus i posa la transition a la regla normal explicant per què.|Escribe el :hover y el :focus y pone la transition en la regla normal explicando por qué.", "Escriu el :hover, però dubta on va la transition.|Escribe el :hover, pero duda dónde va la transition."],
        ["Pensat per al mòbil|Pensado para el móvil", "Fa botons grans al mòbil amb @media i no amaga res darrere del :hover.|Hace botones grandes en el móvil con @media y no esconde nada detrás del :hover.", "Fa el @media quan l'hi recorden.|Hace el @media cuando se lo recuerdan."]
      ]
    },
    casa: "A casa, feu l'activitat «Caçadors de botons»: busqueu tres botons de veritat (ascensor, microones, comandament…) i comenteu com avisen que els heu premut. Després, amb un adult, mireu una web al mòbil: els botons són prou grans per al dit?|En casa, haced la actividad «Cazadores de botones»: buscad tres botones de verdad (ascensor, microondas, mando…) y comentad cómo avisan de que los habéis pulsado. Después, con un adulto, mirad una web en el móvil: ¿los botones son lo bastante grandes para el dedo?",
    slides: [
      { id: 's1', k: 'portada', t: "Botons i efectes|Botones y efectos", x: "Botons que conviden a tocar-los, que reaccionen i que canvien amb suavitat.|Botones que invitan a tocarlos, que reaccionan y que cambian con suavidad.",
        nota: "Presenta l'objectiu: avui la guia tindrà botons de veritat.|Presenta el objetivo: hoy la guía tendrá botones de verdad." },
      { id: 's2', k: 'repas', t: "Recordem: el @media|Recordemos: el @media", x: "Què fa aquesta regla?|¿Qué hace esta regla?", code: '@media (max-width: 600px) {\n  h1 {\n    font-size: 24px;\n  }\n}',
        nota: "Que la llegeixin en veu alta: «si la pantalla fa 600 píxels o menys, el títol fa 24 píxels».|Que la lean en voz alta: «si la pantalla mide 600 píxeles o menos, el título mide 24 píxeles»." },
      { id: 's3', k: 'pregunta', t: "On he de tocar?|¿Dónde tengo que tocar?", x: "Com saps que una cosa d'una pantalla és un botó?|¿Cómo sabes que una cosa de una pantalla es un botón?", punts: ["La forma i el color|La forma y el color", "Canvia quan hi passes per sobre|Cambia cuando pasas por encima", "El ratolí es converteix en una mà|El ratón se convierte en una mano"],
        nota: "Recull idees i apunta-les: són exactament les propietats que farem servir avui.|Recoge ideas y apúntalas: son exactamente las propiedades que usaremos hoy." },
      { id: 's4', k: 'media', t: "D'enllaç a botó|De enlace a botón", x: "Fons, farciment, vores arrodonides i sense subratllat.|Fondo, relleno, bordes redondeados y sin subrayado.",
        media: { k: 'web', html: '<p>Un enllaç normal: <a href="#festes">Les festes</a></p>\n<a class="boto" href="#festes">Les festes</a>', css: '.boto {\n  display: inline-block;\n  background: #2F6BFF;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n}' },
        nota: "Fes notar que no hi ha res nou: background, padding i border-radius ja els coneixen. Pregunta què fa display: inline-block (deixa que el padding faci el botó gran).|Haz notar que no hay nada nuevo: background, padding y border-radius ya los conocen. Pregunta qué hace display: inline-block (deja que el padding haga el botón grande)." },
      { id: 's5', k: 'media', t: ":hover: passa-hi el ratolí|:hover: pasa el ratón", x: ".boto:hover vol dir «el botó, mentre el ratolí hi és a sobre».|.boto:hover quiere decir «el botón, mientras el ratón está encima».",
        media: { k: 'web', html: '<a class="boto" href="#festes">Passa-hi el ratolí</a>', css: '.boto {\n  display: inline-block;\n  background: #2F6BFF;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.boto:hover {\n  background: #E5489A;\n}' },
        nota: "Passa el ratolí pel botó de la demo diverses vegades. Pregunta quina regla s'aplica en cada moment.|Pasa el ratón por el botón de la demo varias veces. Pregunta qué regla se aplica en cada momento." },
      { id: 's6', k: 'anim', t: "De cop o a poc a poc?|¿De golpe o poco a poco?", anim: 'w7hover', code: '.boto {\n  transition: background 0.3s;\n}',
        nota: "La transition va a la regla normal: així el canvi és suau quan el ratolí entra i quan surt. Entre 0,2 i 0,4 segons queda bé.|La transition va en la regla normal: así el cambio es suave cuando el ratón entra y cuando sale. Entre 0,2 y 0,4 segundos queda bien." },
      { id: 's7', k: 'concepte', t: "On va cada cosa?|¿Dónde va cada cosa?", punts: ["Regla normal: com és el botó i la transition.|Regla normal: cómo es el botón y la transition.", "Regla :hover: només el que canvia.|Regla :hover: solo lo que cambia.", ":hover i :focus junts, separats per una coma.|:hover y :focus juntos, separados por una coma."],
        code: '.boto {\n  background: #2F6BFF;\n  transition: background 0.3s;\n}\n.boto:hover, .boto:focus {\n  background: #1A3FB0;\n}',
        nota: "Assenyala que la regla :hover és curta: només hi va el que canvia. Tota la resta ja ho diu la regla normal.|Señala que la regla :hover es corta: solo va lo que cambia. Todo lo demás ya lo dice la regla normal." },
      { id: 's8', k: 'anim', t: "Un dit no és un ratolí|Un dedo no es un ratón", anim: 'w7tap', x: "Al mòbil: botons grans (uns 44 píxels d'alt), separats i res amagat darrere del :hover.|En el móvil: botones grandes (unos 44 píxeles de alto), separados y nada escondido detrás del :hover.",
        nota: "Pregunta quantes vegades han tocat el botó que no volien al mòbil. Al mòbil no hi ha ratolí que passi per sobre.|Pregunta cuántas veces han tocado el botón que no querían en el móvil. En el móvil no hay ratón que pase por encima." },
      { id: 's9', k: 'media', t: "També amb el teclat|También con el teclado", x: "Prem la tecla de tabulació: el :focus marca on ets.|Pulsa la tecla de tabulación: el :focus marca dónde estás.",
        media: { k: 'web', html: '<a class="boto" href="#llocs">Llocs</a>\n<a class="boto" href="#festes">Festes</a>', css: '.boto {\n  display: inline-block;\n  background: #2F6BFF;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n}\n.boto:hover, .boto:focus {\n  background: #FFC531;\n  color: #14204A;\n}' },
        nota: "Explica que hi ha persones que no poden fer servir el ratolí. Fes clic a la demo i prem la tecla de tabulació perquè vegin el :focus.|Explica que hay personas que no pueden usar el ratón. Haz clic en la demo y pulsa la tecla de tabulación para que vean el :focus." },
      { id: 's10', k: 'activitat', t: "Codi de paper|Código de papel", timer: 6, punts: ["Ordeneu les targetes: la regla .boto, la regla .boto:hover.|Ordenad las tarjetas: la regla .boto, la regla .boto:hover.", "On va la targeta de la transition?|¿Dónde va la tarjeta de la transition?", "Compteu les claus: tantes { com }.|Contad las llaves: tantas { como }."],
        nota: "Si un grup acaba aviat, dona-li les targetes del @media per fer els botons grans al mòbil.|Si un grupo termina pronto, dale las tarjetas del @media para hacer los botones grandes en el móvil." },
      { id: 's11', k: 'activitat', t: "El botó humà|El botón humano", timer: 5, punts: ["Un/a és el botó; un altre, el ratolí; el tercer llegeix el codi.|Uno/a es el botón; otro, el ratón; el tercero lee el código.", "Quan el ratolí arriba, el botó canvia: de cop.|Cuando el ratón llega, el botón cambia: de golpe.", "Ara amb transició: compteu fins a 3.|Ahora con transición: contad hasta 3.", "Canvieu els papers.|Cambiad los papeles."],
        nota: "Remarca que el botó també torna a poc a poc quan el ratolí se'n va: per això la transition és a la regla normal.|Remarca que el botón también vuelve poco a poco cuando el ratón se va: por eso la transition está en la regla normal." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 14, punts: ["Obre la sessió «Botons i efectes».|Abre la sesión «Botones y efectos».", "Passa el ratolí per les demos.|Pasa el ratón por las demos.", "«Caçadors de botons»: per a casa.|«Cazadores de botones»: para casa.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Fixa't en qui fa servir la tecla de tabulació a la demo del teclat.|Fíjate en quién usa la tecla de tabulación en la demo del teclado." },
      { id: 's13', k: 'repte', t: "Reptes: el botó complet|Retos: el botón completo", timer: 11, punts: ["1. El botó que no es veu|1. El botón que no se ve", "2. :hover i la mà|2. :hover y la mano", "3. Transició i :focus|3. Transición y :focus", "4. Botons grans al mòbil|4. Botones grandes en el móvil", "5. Dos errors|5. Dos errores"],
        nota: "Al repte 5, que mirin el final de cada línia i el nom de cada propietat.|En el reto 5, que miren el final de cada línea y el nombre de cada propiedad." },
      { id: 's14', k: 'concepte', t: "Botons per al dit|Botones para el dedo", punts: ["Cada botó ocupa tota l'amplada.|Cada botón ocupa todo el ancho.", "Més padding: més fàcil de tocar.|Más padding: más fácil de tocar.", "Una mica de separació.|Un poco de separación."],
        code: '@media (max-width: 600px) {\n  .boto {\n    display: block;\n    padding: 14px;\n    margin-bottom: 8px;\n  }\n}',
        nota: "Fes-la servir quan arribin al repte 4. Recorda que dins del @media només hi va el que canvia.|Úsala cuando lleguen al reto 4. Recuerda que dentro del @media solo va lo que cambia." },
      { id: 's15', k: 'activitat', t: "Crea: el menú de la guia|Crea: el menú de la guía", timer: 5, x: "Tres botons o més que portin a seccions, amb :hover, transition i grans al mòbil.|Tres botones o más que lleven a secciones, con :hover, transition y grandes en el móvil.",
        nota: "Per parelles, que provin el menú de l'altre amb el ratolí, amb el teclat i en mode 📱.|Por parejas, que prueben el menú del otro con el ratón, con el teclado y en modo 📱." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un botó és un enllaç amb fons, padding i border-radius.|Un botón es un enlace con fondo, padding y border-radius.", ":hover i :focus canvien l'estil; transition el fa suau.|:hover y :focus cambian el estilo; transition lo hace suave.", "Al mòbil: botons grans i res amagat darrere del :hover.|En el móvil: botones grandes y nada escondido detrás del :hover."],
        nota: "Pregunta qui ha provat el seu menú amb el teclat i com ha anat.|Pregunta quién ha probado su menú con el teclado y cómo ha ido." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Escriu la regla .boto:hover que canvia el color.|Escribe la regla .boto:hover que cambia el color.", "On va la transition?|¿Dónde va la transition?"],
        nota: "La sessió que ve canviem de tema: aprendrem a detectar webs falses.|La sesión que viene cambiamos de tema: aprenderemos a detectar webs falsas." }
    ],
    print: [
      { id: 'p1', t: "Codi de paper: el botó|Código de papel: el botón", k: 'targetes',
        intro: "Un paquet per grup, barrejat. Ordeneu les targetes per fer un botó amb :hover i transició. Les tres últimes són per als grups que acabin aviat (el @media).|Un paquete por grupo, mezclado. Ordenad las tarjetas para hacer un botón con :hover y transición. Las tres últimas son para los grupos que terminen pronto (el @media).",
        items: [
          { t: ".boto { 🧩|.boto { 🧩", n: 1 },
          { t: "background: #2F6BFF; ✏️|background: #2F6BFF; ✏️", n: 1 },
          { t: "color: white; ✏️|color: white; ✏️", n: 1 },
          { t: "padding: 12px 20px; ✏️|padding: 12px 20px; ✏️", n: 1 },
          { t: "border-radius: 10px; ✏️|border-radius: 10px; ✏️", n: 1 },
          { t: "transition: background 0.3s; ⏱️|transition: background 0.3s; ⏱️", n: 1 },
          { t: "} 🧩|} 🧩", n: 3 },
          { t: ".boto:hover { ✨|.boto:hover { ✨", n: 1 },
          { t: "background: #1A3FB0; ✨|background: #1A3FB0; ✨", n: 1 },
          { t: "@media (max-width: 600px) { 📏|@media (max-width: 600px) { 📏", n: 1 },
          { t: ".boto { display: block; } 📏|.boto { display: block; } 📏", n: 1 }
        ] },
      { id: 'p2', t: "El botó en tres estats|El botón en tres estados", k: 'fitxa',
        intro: "Dissenya un botó per a la guia de Lleida i dibuixa'l en cada estat. Després, escriu-ne el CSS.|Diseña un botón para la guía de Lleida y dibújalo en cada estado. Después, escribe su CSS.",
        items: [
          { q: "Estat normal: com és el botó quan ningú no el toca?|Estado normal: ¿cómo es el botón cuando nadie lo toca?", big: true, sol: "Un botó amb fons de color, text llegible, farciment i vores arrodonides.|Un botón con fondo de color, texto legible, relleno y bordes redondeados." },
          { q: "Estat :hover: què canvia quan el ratolí hi passa per sobre?|Estado :hover: ¿qué cambia cuando el ratón pasa por encima?", big: true, sol: "Per exemple, un color de fons més fosc. Només canvia una o dues coses.|Por ejemplo, un color de fondo más oscuro. Solo cambian una o dos cosas." },
          { q: "Escriu la regla .boto:hover del teu botó.|Escribe la regla .boto:hover de tu botón.", sol: ".boto:hover { background: #1A3FB0; } (o el color triat)|.boto:hover { background: #1A3FB0; } (o el color elegido)" },
          { q: "On posaràs la transition? Per què?|¿Dónde pondrás la transition? ¿Por qué?", sol: "A la regla .boto, perquè el canvi sigui suau quan el ratolí entra i quan surt.|En la regla .boto, para que el cambio sea suave cuando el ratón entra y cuando sale." },
          { q: "Per què al mòbil els botons han de ser més grans?|¿Por qué en el móvil los botones tienen que ser más grandes?", sol: "Perquè es toquen amb el dit, que és més gruixut que la punta del ratolí.|Porque se tocan con el dedo, que es más grueso que la punta del ratón." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Detecta la web falsa ---------- */
  'w7-3': {
    obj: [
      "L'alumne/a troba el domini d'una adreça (on s'acaba i quin n'és el final) i diu de qui és la web.|El alumno/a encuentra el dominio de una dirección (dónde termina y cuál es su final) y dice de quién es la web.",
      "L'alumne/a explica què vol dir el candau (connexió xifrada) i què no vol dir (que la web sigui de confiança).|El alumno/a explica qué significa el candado (conexión cifrada) y qué no significa (que la web sea de confianza).",
      "L'alumne/a reconeix senyals d'alerta en una web: presses, premis massa bons, errors i peticions de dades.|El alumno/a reconoce señales de alerta en una web: prisas, premios demasiado buenos, errores y peticiones de datos.",
      "L'alumne/a sap què ha de fer davant d'una web sospitosa (aturar-se, tancar, explicar-ho a un adult) i ho explica en una pàgina feta amb HTML i CSS.|El alumno/a sabe qué tiene que hacer ante una web sospechosa (pararse, cerrar, contárselo a un adulto) y lo explica en una página hecha con HTML y CSS."
    ],
    comp: [
      "Competència digital: seguretat (protecció de dades i identificació de fraus en línia)|Competencia digital: seguridad (protección de datos e identificación de fraudes en línea)",
      "Ciutadania digital: pensament crític i hàbits segurs, demanant ajuda sense por|Ciudadanía digital: pensamiento crítico y hábitos seguros, pidiendo ayuda sin miedo",
      "Llengua: llegir amb atenció i detectar errors i to de pressa en un text|Lengua: leer con atención y detectar errores y tono de prisa en un texto",
      "Competència digital: crear continguts (HTML i CSS) per informar els altres|Competencia digital: crear contenidos (HTML y CSS) para informar a los demás"
    ],
    vocab: [
      ["Domini|Dominio", "El nom de la web a l'adreça. S'acaba just abans de la primera barra «/», i l'amo és el final del domini.|El nombre de la web en la dirección. Termina justo antes de la primera barra «/», y el dueño es el final del dominio."],
      ["HTTPS i candau|HTTPS y candado", "La connexió va xifrada: ningú pel camí no pot llegir el que envies. No diu si la web és bona.|La conexión va cifrada: nadie por el camino puede leer lo que envías. No dice si la web es buena."],
      ["Web falsa (pesca o phishing)|Web falsa (phishing)", "Una web que n'imita una altra per aconseguir contrasenyes, dades o diners.|Una web que imita a otra para conseguir contraseñas, datos o dinero."],
      ["Senyal d'alerta|Señal de alerta", "Una pista que indica que alguna cosa no va bé: pressa, premi, faltes, demanar dades.|Una pista que indica que algo no va bien: prisa, premio, faltas, pedir datos."],
      ["Adult de confiança|Adulto de confianza", "Una persona gran a qui pots explicar el que et passa a internet (família, professorat).|Una persona mayor a quien puedes contar lo que te pasa en internet (familia, profesorado)."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Detecta la web falsa»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Detecta la web falsa»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per grup de 3: un paquet de targetes de casos i dos fulls amb els rètols «Sembla de confiança» i «Senyals d'alerta»|Por grupo de 3: un paquete de tarjetas de casos y dos hojas con los rótulos «Parece de confianza» y «Señales de alerta»",
        "Retoladors de dos colors per encerclar el domini a la fitxa|Rotuladores de dos colores para rodear el dominio en la ficha"
      ],
      imprimir: ["Casos per investigar (un paquet per grup)|Casos para investigar (un paquete por grupo)", "Fitxa: on s'acaba el domini? (una per alumne/a)|Ficha: ¿dónde termina el dominio? (una por alumno/a)"],
      prep: [
        "Imprimir i retallar les targetes de casos. Preparar els dos rètols per grup.|Imprimir y recortar las tarjetas de casos. Preparar los dos rótulos por grupo.",
        "Pensar com respondràs, amb calma i sense culpar ningú, si un alumne/a explica que alguna vegada ha caigut en una web falsa.|Pensar cómo responderás, con calma y sin culpar a nadie, si un alumno/a explica que alguna vez ha caído en una web falsa.",
        "Recordar que totes les adreces de la sessió són inventades: no cal (ni s'ha de) entrar a cap web sospitosa de veritat.|Recordar que todas las direcciones de la sesión son inventadas: no hace falta (ni se debe) entrar en ninguna web sospechosa de verdad."
      ]
    },
    plan: [
      { min: 5, t: "El missatge d'en Bit|El mensaje de Bit", fase: 'inici',
        fa: "Projecta el missatge del premi d'en Bit i demana què farien. Recull les respostes sense jutjar. Presenta la idea: les webs falses estan fetes per semblar de veritat, i per això cal un mètode, no tenir por.|Proyecta el mensaje del premio de Bit y pide qué harían. Recoge las respuestas sin juzgar. Presenta la idea: las webs falsas están hechas para parecer de verdad, y por eso hace falta un método, no tener miedo.",
        diu: ["Què faríeu si us arribés aquest missatge?|¿Qué haríais si os llegara este mensaje?",
          "Qui cau en una web falsa no és ximple: estan fetes per enganyar. Per això aprendrem a mirar-les com detectius.|Quien cae en una web falsa no es tonto: están hechas para engañar. Por eso aprenderemos a mirarlas como detectives."],
        slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El mètode del detectiu/iva|El método del detective", fase: 'teoria',
        fa: "Explica els quatre senyals amb les diapositives: com es llegeix una adreça (el domini acaba a la primera barra; l'amo és el final), què vol dir el candau i què no, les presses i els detalls (faltes, logotips, peticions de dades). Acaba amb el que cal fer: aturar-se, tancar, explicar-ho a un adult; i si ja ha passat, explicar-ho igualment.|Explica las cuatro señales con las diapositivas: cómo se lee una dirección (el dominio termina en la primera barra; el dueño es el final), qué significa el candado y qué no, las prisas y los detalles (faltas, logotipos, peticiones de datos). Termina con lo que hay que hacer: pararse, cerrar, contárselo a un adulto; y si ya ha pasado, contarlo igualmente.",
        diu: ["Llegiu l'adreça fins a la primera barra. Ara, quin és l'últim tros del domini?|Leed la dirección hasta la primera barra. Ahora, ¿cuál es el último trozo del dominio?",
          "El candau protegeix el camí, però no ens diu qui hi ha a l'altra banda.|El candado protege el camino, pero no nos dice quién hay al otro lado.",
          "Si una web us posa pressa, és el moment de frenar.|Si una web os mete prisa, es el momento de frenar.",
          "Si mai us passa, expliqueu-ho: ningú no us renyarà per demanar ajuda.|Si alguna vez os pasa, contadlo: nadie os reñirá por pedir ayuda."],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Casos per investigar (sense pantalla)|Casos para investigar (sin pantalla)", fase: 'desconnectat',
        fa: "Grups de 3 amb les targetes de casos i els dos rètols. Llegeixen cada cas i el posen a «Sembla de confiança» o a «Senyals d'alerta», dient quin senyal hi veuen (adreça, candau, pressa, error, dades). Un/a llegeix, un altre decideix i el tercer ho comprova; els papers roten a cada targeta. Al final, cada alumne/a fa la fitxa del domini.|Grupos de 3 con las tarjetas de casos y los dos rótulos. Leen cada caso y lo ponen en «Parece de confianza» o en «Señales de alerta», diciendo qué señal ven (dirección, candado, prisa, error, datos). Uno/a lee, otro decide y el tercero lo comprueba; los papeles rotan en cada tarjeta. Al final, cada alumno/a hace la ficha del dominio.",
        diu: ["Quin és el domini de veritat d'aquest cas?|¿Cuál es el dominio de verdad de este caso?",
          "Hi ha algun cas amb més d'un senyal?|¿Hay algún caso con más de una señal?",
          "Si no n'esteu segurs, què faríeu a la vida real?|Si no estáis seguros, ¿qué haríais en la vida real?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 14, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. Al pas «Detectius de webs», que el deixin per a casa: és per fer amb la família. Fes que llegeixin les adreces amb el dit a la pantalla, fins a la primera barra.|Cada alumno/a avanza hasta la pausa activa. En el paso «Detectives de webs», que lo dejen para casa: es para hacer con la familia. Haz que lean las direcciones con el dedo en la pantalla, hasta la primera barra.",
        diu: ["Posa el dit a la primera barra de l'adreça. Què hi ha just abans?|Pon el dedo en la primera barra de la dirección. ¿Qué hay justo antes?",
          "A les pàgines falses, busca més d'un senyal.|En las páginas falsas, busca más de una señal."],
        slides: ['s11'], app: "De «La missió» fins a «Investiga»: les dues històries, les targetes de «Descobreix», ordenar què fer, «Detectius de webs» (per a casa), l'adreça de FotoNuvi, el candau, les dues pàgines falses i les tres vistes prèvies.|De «La misión» hasta «Investiga»: las dos historias, las tarjetas de «Descubre», ordenar qué hacer, «Detectives de webs» (para casa), la dirección de FotoNuvi, el candado, las dos páginas falsas y las tres vistas previas.", org: "Individual|Individual" },
      { min: 11, t: "Reptes: la targeta d'avís|Retos: la tarjeta de aviso", fase: 'ordinador',
        fa: "Pausa activa tots junts (el semàfor detectiu). Després, tres reptes que fan servir el que saben de HTML i CSS per fer la targeta d'avís de la guia: la llista dels quatre senyals, l'estil de la targeta i un botó amb :hover i un @media.|Pausa activa todos juntos (el semáforo detective). Después, tres retos que usan lo que saben de HTML y CSS para hacer la tarjeta de aviso de la guía: la lista de las cuatro señales, el estilo de la tarjeta y un botón con :hover y un @media.",
        diu: ["Escriu els senyals amb les teves paraules: els entendrà un estudiant que no en sap res?|Escribe las señales con tus palabras: ¿las entenderá un estudiante que no sabe nada?",
          "Recordes com es fa un botó amb :hover? Torna a la sessió anterior si cal.|¿Recuerdas cómo se hace un botón con :hover? Vuelve a la sesión anterior si hace falta."],
        slides: ['s12', 's13'], app: "«Pausa activa» i els tres reptes de la targeta d'avís.|«Pausa activa» y los tres retos de la tarjeta de aviso.", org: "Individual|Individual" },
      { min: 5, t: "Crea: el detector de webs falses|Crea: el detector de webs falsas", fase: 'crea',
        fa: "Cada alumne/a fa una pàgina amb quatre consells per detectar webs falses, amb estil, un botó i @media. Per parelles, llegiu-vos els consells: s'entenen?|Cada alumno/a hace una página con cuatro consejos para detectar webs falsas, con estilo, un botón y @media. Por parejas, leeos los consejos: ¿se entienden?",
        diu: ["Escriu els consells per a algú de la teva edat.|Escribe los consejos para alguien de tu edad.", "Un consell ha de dir què has de fer, no només què has de témer.|Un consejo tiene que decir qué tienes que hacer, no solo qué tienes que temer."],
        slides: ['s14'], app: "Pas «Crea»: El detector de webs falses.|Paso «Crea»: El detector de webs falsas.", org: "Individual i per parelles|Individual y por parejas" },
      { min: 2, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el mètode amb el resum i fes el tiquet. Recorda que, si mai els passa alguna cosa a internet, poden parlar amb tu o amb la família.|Repasa el método con el resumen y haz el ticket. Recuerda que, si alguna vez les pasa algo en internet, pueden hablar contigo o con la familia.",
        diu: ["Quins són els quatre senyals?|¿Cuáles son las cuatro señales?", "Què fem si una web ens demana la contrasenya?|¿Qué hacemos si una web nos pide la contraseña?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Llegeix el principi de l'adreça (fotonuvi.numi…) i creu que la web és de FotoNuvi.|Lee el principio de la dirección (fotonuvi.numi…) y cree que la web es de FotoNuvi.",
        "Que posi el dit a la primera barra «/» i llegeixi cap enrere: quin és l'últim tros abans de la barra? Aquell és l'amo.|Que ponga el dedo en la primera barra «/» y lea hacia atrás: ¿cuál es el último trozo antes de la barra? Ese es el dueño."],
      ["Creu que el candau vol dir que la web és segura i de confiança.|Cree que el candado quiere decir que la web es segura y de confianza.",
        "Torna a l'animació: el candau tanca el sobre pel camí, però no diu qui el rep. Una web falsa també el pot tenir.|Vuelve a la animación: el candado cierra el sobre por el camino, pero no dice quién lo recibe. Una web falsa también lo puede tener."],
      ["Pensa que només els «despistats» cauen en webs falses, o se'n riu.|Piensa que solo los «despistados» caen en webs falsas, o se ríe de ello.",
        "Recorda que estan fetes per professionals per enganyar tothom, també adults. El que fa una persona experta és aturar-se i preguntar.|Recuerda que están hechas por profesionales para engañar a todo el mundo, también adultos. Lo que hace una persona experta es pararse y preguntar."],
      ["Té por d'explicar que alguna vegada ha fet clic o ha posat dades.|Tiene miedo de explicar que alguna vez ha hecho clic o ha puesto datos.",
        "Agraeix-li que ho expliqui i no el/la renyis. Proposa canviar la contrasenya amb la família i avisa la família si cal. Explicar-ho és el que s'ha de fer.|Agradécele que lo explique y no le riñas. Propón cambiar la contraseña con la familia y avisa a la familia si hace falta. Contarlo es lo que hay que hacer."],
      ["Ho classifica tot com a fals, fins i tot les webs normals.|Lo clasifica todo como falso, incluso las webs normales.",
        "Que digui quin senyal concret hi veu. Si no en troba cap, probablement és una web normal: el mètode serveix per decidir, no per desconfiar de tot.|Que diga qué señal concreta ve. Si no encuentra ninguna, probablemente es una web normal: el método sirve para decidir, no para desconfiar de todo."]
    ],
    diff: {
      mes: "Inventar tres adreces falses molt difícils de detectar (lletres que s'assemblen, paraules afegides) i passar-les a un company/a perquè en trobi l'amo. Afegir a la targeta d'avís un exemple d'adreça amb el domini ressaltat amb <code>&lt;strong&gt;</code>.|Inventar tres direcciones falsas muy difíciles de detectar (letras que se parecen, palabras añadidas) y pasarlas a un compañero/a para que encuentre al dueño. Añadir a la tarjeta de aviso un ejemplo de dirección con el dominio resaltado con <code>&lt;strong&gt;</code>.",
      menys: "Treballar només amb dos senyals (l'adreça i les presses) i amb la fitxa del domini al costat. A la pàgina final, començar amb dos consells i afegir-ne després.|Trabajar solo con dos señales (la dirección y las prisas) y con la ficha del dominio al lado. En la página final, empezar con dos consejos y añadir después."
    },
    aval: {
      ticket: ["A l'adreça https://xatamics.numi.regals.xyz/entra, de qui és la web?|En la dirección https://xatamics.numi.regals.xyz/entra, ¿de quién es la web?",
        "Digues dos senyals d'alerta d'una web falsa i què faries si en veiessis un.|Di dos señales de alerta de una web falsa y qué harías si vieras una."],
      rubric: [
        ["Llegir l'adreça|Leer la dirección", "Troba on s'acaba el domini i en diu l'amo, fins i tot amb paraules afegides.|Encuentra dónde termina el dominio y dice su dueño, incluso con palabras añadidas.", "Troba el domini en adreces senzilles, però es deixa enganyar pel principi.|Encuentra el dominio en direcciones sencillas, pero se deja engañar por el principio."],
        ["El candau|El candado", "Explica que vol dir connexió xifrada i que no garanteix que la web sigui bona.|Explica que significa conexión cifrada y que no garantiza que la web sea buena.", "Creu que el candau vol dir que la web és de confiança.|Cree que el candado quiere decir que la web es de confianza."],
        ["Què fer|Qué hacer", "Diu que s'aturaria, tancaria la pàgina i ho explicaria a un adult, també si ja hagués fet clic.|Dice que se pararía, cerraría la página y se lo contaría a un adulto, también si ya hubiera hecho clic.", "Sap que no ha d'escriure dades, però no pensa a explicar-ho a ningú.|Sabe que no tiene que escribir datos, pero no piensa en contárselo a nadie."]
      ]
    },
    casa: "A casa, feu amb la família l'activitat «Detectius de webs»: mireu juntes dues webs que feu servir, busqueu-ne el domini i el candau, i acordeu una norma de casa per a quan una web us demani dades o us posi pressa.|En casa, haced con la familia la actividad «Detectives de webs»: mirad juntos dos webs que uséis, buscad su dominio y el candado, y acordad una norma de casa para cuando una web os pida datos o os meta prisa.",
    slides: [
      { id: 's1', k: 'portada', t: "Detecta la web falsa|Detecta la web falsa", x: "Avui farem de detectius/ives: l'adreça, el candau, les presses i els errors.|Hoy haremos de detectives: la dirección, el candado, las prisas y los errores.",
        nota: "Presenta la sessió amb calma: no es tracta de tenir por d'internet, sinó de saber mirar.|Presenta la sesión con calma: no se trata de tener miedo de internet, sino de saber mirar." },
      { id: 's2', k: 'pregunta', t: "Un premi per a en Bit?|¿Un premio para Bit?", x: "«🎁 Has guanyat una consola! Entra ara a fotonuvi-regals.xyz abans que s'acabi el temps!» Què faríeu?|«🎁 ¡Has ganado una consola! ¡Entra ahora en fotonuvi-regals.xyz antes de que se acabe el tiempo!» ¿Qué haríais?",
        nota: "Recull respostes sense jutjar. Torna-hi al final de la sessió: quants senyals d'alerta té aquest missatge?|Recoge respuestas sin juzgar. Vuelve a ello al final de la sesión: ¿cuántas señales de alerta tiene este mensaje?" },
      { id: 's3', k: 'anim', t: "De qui és la web?|¿De quién es la web?", anim: 'w7url', x: "El domini s'acaba a la primera barra «/». L'amo és el final del domini.|El dominio termina en la primera barra «/». El dueño es el final del dominio.",
        nota: "Escriu a la pissarra fotonuvi.numi.regals.xyz/album i que un/a alumne/a hi posi el dit a la primera barra i llegeixi cap enrere.|Escribe en la pizarra fotonuvi.numi.regals.xyz/album y que un/a alumno/a ponga el dedo en la primera barra y lea hacia atrás." },
      { id: 's4', k: 'concepte', t: "Lletres que s'assemblen|Letras que se parecen", punts: ["fotonuvi.numi ✓|fotonuvi.numi ✓", "f0tonuvi.numi (amb un zero) ✗|f0tonuvi.numi (con un cero) ✗", "fotonuvi.numi.regals.xyz ✗|fotonuvi.numi.regals.xyz ✗", "fotonuvi-regals.xyz ✗|fotonuvi-regals.xyz ✗"],
        nota: "Totes les adreces són inventades. Fes que diguin en què es diferencia cada una de la bona.|Todas las direcciones son inventadas. Haz que digan en qué se diferencia cada una de la buena." },
      { id: 's5', k: 'anim', t: "Què vol dir el candau?|¿Qué significa el candado?", anim: 'w7lock', x: "El camí va xifrat: ningú no llegeix el que envies. Però una web falsa també pot tenir candau.|El camino va cifrado: nadie lee lo que envías. Pero una web falsa también puede tener candado.",
        nota: "Explica que molts navegadors mostren el candau (o una icona semblant) amb https i que, sense https, sovint avisen amb «No segur».|Explica que muchos navegadores muestran el candado (o un icono parecido) con https y que, sin https, a menudo avisan con «No seguro»." },
      { id: 's6', k: 'concepte', t: "Si et posen pressa, frena|Si te meten prisa, frena", pic: 'img/ment/rel.webp', punts: ["Comptes enrere|Cuentas atrás", "«Només avui», «queden 2»|«Solo hoy», «quedan 2»", "Premis que no has demanat|Premios que no has pedido"],
        nota: "Pregunta per què una web falsa vol que decidim de pressa: perquè si pensem, ens n'adonem.|Pregunta por qué una web falsa quiere que decidamos deprisa: porque si pensamos, nos damos cuenta." },
      { id: 's7', k: 'media', t: "Mira els detalls|Mira los detalles", x: "Quins errors hi veieu?|¿Qué errores veis?",
        media: { k: 'web', html: '<h1>FotoNubi</h1>\n<p>Benvingut! Verifica la teva compte ara mateix.</p>\n<p>Escriu la contrasenya del correu:</p>\n<input>', css: 'h1 {\n  color: #2F6BFF;\n  font-style: italic;\n}' },
        nota: "Que en trobin tres: el nom (FotoNubi en lloc de FotoNuvi), la falta («la teva compte») i, sobretot, que demana la contrasenya del correu.|Que encuentren tres: el nombre (FotoNubi en lugar de FotoNuvi), la falta («la teva compte») y, sobre todo, que pide la contraseña del correo." },
      { id: 's8', k: 'concepte', t: "Atura't, pensa, pregunta|Párate, piensa, pregunta", pic: 'img/ment/atu.webp', punts: ["No escriguis ni descarreguis res.|No escribas ni descargues nada.", "Tanca la pestanya.|Cierra la pestaña.", "Explica-ho a un adult de confiança.|Cuéntaselo a un adulto de confianza.", "Si ja ha passat, explica-ho igualment.|Si ya ha pasado, cuéntalo igualmente."],
        nota: "Insisteix en l'últim punt: si mai els passa, ningú no els renyarà. Com més aviat ho sàpiga un adult, més fàcil serà arreglar-ho.|Insiste en el último punto: si alguna vez les pasa, nadie les reñirá. Cuanto antes lo sepa un adulto, más fácil será arreglarlo." },
      { id: 's9', k: 'activitat', t: "Casos per investigar|Casos para investigar", timer: 8, punts: ["Llegiu cada cas en veu alta.|Leed cada caso en voz alta.", "Poseu-lo a «Sembla de confiança» o a «Senyals d'alerta».|Ponedlo en «Parece de confianza» o en «Señales de alerta».", "Digueu quin senyal hi veieu.|Decid qué señal veis.", "Canvieu els papers a cada targeta.|Cambiad los papeles en cada tarjeta."],
        nota: "Passa pels grups i demana sempre el senyal concret. Hi ha casos amb més d'un senyal.|Pasa por los grupos y pide siempre la señal concreta. Hay casos con más de una señal." },
      { id: 's10', k: 'activitat', t: "On s'acaba el domini?|¿Dónde termina el dominio?", timer: 3, punts: ["Encercla el domini de cada adreça.|Rodea el dominio de cada dirección.", "Subratlla l'amo (el final del domini).|Subraya el dueño (el final del dominio).", "Digues si te'n fiaries.|Di si te fiarías."],
        nota: "Si no hi ha temps, la fitxa es pot acabar a casa amb la família.|Si no hay tiempo, la ficha se puede terminar en casa con la familia." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 14, punts: ["Obre la sessió «Detecta la web falsa».|Abre la sesión «Detecta la web falsa».", "«Detectius de webs»: per a casa, amb la família.|«Detectives de webs»: para casa, con la familia.", "Llegeix les adreces amb el dit fins a la primera barra.|Lee las direcciones con el dedo hasta la primera barra.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Fixa't en qui respon de pressa: és una bona ocasió per recordar que el mètode demana anar a poc a poc.|Fíjate en quién responde deprisa: es una buena ocasión para recordar que el método pide ir despacio." },
      { id: 's12', k: 'repte', t: "Reptes: la targeta d'avís|Retos: la tarjeta de aviso", timer: 11, punts: ["1. La llista dels quatre senyals|1. La lista de las cuatro señales", "2. L'estil de la targeta|2. El estilo de la tarjeta", "3. Un botó i el mòbil|3. Un botón y el móvil"],
        nota: "Aquesta targeta formarà part de la guia de Lleida: és el consell que donarem als estudiants d'intercanvi.|Esta tarjeta formará parte de la guía de Lleida: es el consejo que daremos a los estudiantes de intercambio." },
      { id: 's13', k: 'media', t: "Així pot quedar|Así puede quedar", x: "Una targeta d'avís clara: títol, llista i un color que crida l'atenció.|Una tarjeta de aviso clara: título, lista y un color que llama la atención.",
        media: { k: 'web', html: '<div class="avis">\n  <h2>Abans de fer clic, mira…</h2>\n  <ul>\n    <li>L\'adreça</li>\n    <li>El candau</li>\n    <li>Les presses</li>\n    <li>Els errors</li>\n  </ul>\n</div>', css: '.avis {\n  background: #FFF8E1;\n  border: 3px solid #FFC531;\n  border-radius: 14px;\n  padding: 6px 14px;\n}' },
        nota: "Deixa-la projectada mentre treballen. Que cadascú hi posi els seus colors i les seves paraules.|Déjala proyectada mientras trabajan. Que cada uno ponga sus colores y sus palabras." },
      { id: 's14', k: 'activitat', t: "Crea: el detector de webs falses|Crea: el detector de webs falsas", timer: 5, x: "Quatre consells, amb estil, un botó i @media. Escriu-los per a algú de la teva edat.|Cuatro consejos, con estilo, un botón y @media. Escríbelos para alguien de tu edad.",
        nota: "Per parelles, que es llegeixin els consells i diguin si s'entenen.|Por parejas, que se lean los consejos y digan si se entienden." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["El domini s'acaba a la primera barra; l'amo és el final.|El dominio termina en la primera barra; el dueño es el final.", "El candau vol dir camí xifrat, no web de confiança.|El candado quiere decir camino cifrado, no web de confianza.", "Pressa, premis, errors o dades: atura't i pregunta a un adult.|Prisa, premios, errores o datos: párate y pregunta a un adulto."],
        nota: "Torna al missatge d'en Bit: quants senyals d'alerta hi trobeu ara?|Vuelve al mensaje de Bit: ¿cuántas señales de alerta encontráis ahora?" },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["De qui és xatamics.numi.regals.xyz/entra?|¿De quién es xatamics.numi.regals.xyz/entra?", "Digues dos senyals d'alerta i què faries.|Di dos señales de alerta y qué harías."],
        nota: "Resposta de la primera: regals.xyz. La setmana que ve fem el projecte de la guia de Lleida.|Respuesta de la primera: regals.xyz. La semana que viene hacemos el proyecto de la guía de Lleida." }
    ],
    print: [
      { id: 'p1', t: "Casos per investigar|Casos para investigar", k: 'targetes',
        intro: "Un paquet per grup. Totes les adreces i marques són inventades. Poseu cada cas a «Sembla de confiança» o a «Senyals d'alerta» i digueu quin senyal hi veieu.|Un paquete por grupo. Todas las direcciones y marcas son inventadas. Poned cada caso en «Parece de confianza» o en «Señales de alerta» y decid qué señal veis.",
        items: [
          { t: "biblioteca.numi/horaris · «Horari: de 9 a 20 h» 🔍|biblioteca.numi/horaris · «Horario: de 9 a 20 h» 🔍", n: 1 },
          { t: "biblioteca.numi.premis-ara.xyz · «Has guanyat un llibre!» 🔍|biblioteca.numi.premis-ara.xyz · «¡Has ganado un libro!» 🔍", n: 1 },
          { t: "f0tonuvi.numi/entra · «Escriu la contrasenya» 🔍|f0tonuvi.numi/entra · «Escribe la contraseña» 🔍", n: 1 },
          { t: "fotonuvi.numi/album · «Les fotos de l'excursió» 🔍|fotonuvi.numi/album · «Las fotos de la excursión» 🔍", n: 1 },
          { t: "http://botiga-regals.xyz · sense candau · «Paga ara!» 🔍|http://botiga-regals.xyz · sin candado · «¡Paga ahora!» 🔍", n: 1 },
          { t: "escola.numi/menu · «Menú de la setmana» 🔍|escola.numi/menu · «Menú de la semana» 🔍", n: 1 },
          { t: "xatamics.numi.regals.xyz · «Queden 30 segons!» 🔍|xatamics.numi.regals.xyz · «¡Quedan 30 segundos!» 🔍", n: 1 },
          { t: "videos-numi.xyz · «Descarrega aquest programa per veure el vídeo» 🔍|videos-numi.xyz · «Descarga este programa para ver el vídeo» 🔍", n: 1 }
        ] },
      { id: 'p2', t: "On s'acaba el domini?|¿Dónde termina el dominio?", k: 'fitxa',
        intro: "Encercla el domini de cada adreça (fins a la primera barra «/») i subratlla'n l'amo (el final del domini). Totes les adreces són inventades.|Rodea el dominio de cada dirección (hasta la primera barra «/») y subraya su dueño (el final del dominio). Todas las direcciones son inventadas.",
        items: [
          { q: "https://fotonuvi.numi/album|https://fotonuvi.numi/album", sol: "Domini: fotonuvi.numi. És de FotoNuvi.|Dominio: fotonuvi.numi. Es de FotoNuvi." },
          { q: "https://fotonuvi.numi.regals.xyz/album|https://fotonuvi.numi.regals.xyz/album", sol: "Domini: fotonuvi.numi.regals.xyz. L'amo és regals.xyz, no FotoNuvi.|Dominio: fotonuvi.numi.regals.xyz. El dueño es regals.xyz, no FotoNuvi." },
          { q: "https://f0tonuvi.numi/entra|https://f0tonuvi.numi/entra", sol: "Domini: f0tonuvi.numi, amb un zero: no és FotoNuvi.|Dominio: f0tonuvi.numi, con un cero: no es FotoNuvi." },
          { q: "https://escola.numi/menu/dilluns|https://escola.numi/menu/dilluns", sol: "Domini: escola.numi. El que va després de la barra és la pàgina dins la web.|Dominio: escola.numi. Lo que va después de la barra es la página dentro de la web." },
          { q: "Una web té candau, però et demana la contrasenya per donar-te un premi. Te'n fies? Per què?|Una web tiene candado, pero te pide la contraseña para darte un premio. ¿Te fías? ¿Por qué?", sol: "No: el candau només vol dir que el camí és xifrat. Demanar la contrasenya per un premi és un senyal d'alerta.|No: el candado solo quiere decir que el camino está cifrado. Pedir la contraseña por un premio es una señal de alerta." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: la guia de Lleida ---------- */
  'w7-4': {
    obj: [
      "L'alumne/a planifica una web (públic, seccions i esbós per a ordinador i mòbil) abans de programar-la.|El alumno/a planifica una web (público, secciones y boceto para ordenador y móvil) antes de programarla.",
      "L'alumne/a construeix una guia amb header, nav de botons, seccions amb id, targetes amb flex i un peu amb les fonts.|El alumno/a construye una guía con header, nav de botones, secciones con id, tarjetas con flex y un pie con las fuentes.",
      "L'alumne/a fa que la guia s'adapti al mòbil amb @media i que els botons reaccionin amb :hover i transition.|El alumno/a hace que la guía se adapte al móvil con @media y que los botones reaccionen con :hover y transition.",
      "L'alumne/a revisa la seva web i la d'un company/a: alt a les imatges, contrast, fets certs i vista de mòbil.|El alumno/a revisa su web y la de un compañero/a: alt en las imágenes, contraste, hechos ciertos y vista de móvil."
    ],
    comp: [
      "Competència digital: crear i editar continguts digitals complets (HTML i CSS)|Competencia digital: crear y editar contenidos digitales completos (HTML y CSS)",
      "Coneixement del medi: llocs, festes i productes de Lleida, amb informació certa i citada|Conocimiento del medio: lugares, fiestas y productos de Lleida, con información cierta y citada",
      "Pensament computacional: descompondre un projecte en passos i provar-lo a cada pas|Pensamiento computacional: descomponer un proyecto en pasos y probarlo en cada paso",
      "Competència personal i social: donar i rebre comentaris amables i útils|Competencia personal y social: dar y recibir comentarios amables y útiles"
    ],
    vocab: [
      ["Esbós (wireframe)|Boceto (wireframe)", "Un dibuix senzill de com es veurà la web, abans de programar-la.|Un dibujo sencillo de cómo se verá la web, antes de programarla."],
      ["Secció|Sección", "Una part de la pàgina amb un tema (llocs, festes, menjar), amb la seva etiqueta section i un id.|Una parte de la página con un tema (lugares, fiestas, comida), con su etiqueta section y un id."],
      ["Font|Fuente", "D'on surt la informació o la imatge. Es cita al peu de la pàgina.|De dónde sale la información o la imagen. Se cita al pie de la página."],
      ["Contrast|Contraste", "La diferència entre el color del text i el del fons: com més n'hi ha, més fàcil és llegir.|La diferencia entre el color del texto y el del fondo: cuanto más hay, más fácil es leer."],
      ["Revisió entre iguals|Revisión entre iguales", "Provar la web d'un company/a i donar-li comentaris per millorar-la.|Probar la web de un compañero/a y darle comentarios para mejorarla."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la guia de Lleida»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la guía de Lleida»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis, goma i colors per a l'esbós|Lápiz, goma y colores para el boceto",
        "Si en teniu, un parell de llibres o fullets de Lleida de la biblioteca per comprovar fets|Si tenéis, un par de libros o folletos de Lleida de la biblioteca para comprobar hechos"
      ],
      imprimir: ["Fitxa: el pla de la guia (una per alumne/a)|Ficha: el plan de la guía (una por alumno/a)", "Fitxa: revisem la guia (una per parella)|Ficha: revisamos la guía (una por pareja)"],
      prep: [
        "Imprimir les dues fitxes.|Imprimir las dos fichas.",
        "Preparar una llista curta de fets segurs de Lleida per si algú en demana (la Seu Vella dalt del turó, el riu Segre, el castell de Gardeny, la Festa Major de maig amb Lo Marraco, l'Aplec del Caragol, la fruita de l'horta, els caragols a la llauna).|Preparar una lista corta de hechos seguros de Lleida por si alguien los pide (la Seu Vella en lo alto del cerro, el río Segre, el castillo de Gardeny, la Fiesta Mayor de mayo con Lo Marraco, el Aplec del Caragol, la fruta de la huerta, los caracoles a la llauna).",
        "Decidir com fareu la galeria final: cada alumne/a deixa la seva guia oberta en mode 📱 i el grup va passant pels ordinadors.|Decidir cómo haréis la galería final: cada alumno/a deja su guía abierta en modo 📱 y el grupo va pasando por los ordenadores."
      ]
    },
    plan: [
      { min: 5, t: "La guia que farem|La guía que haremos", fase: 'inici',
        fa: "Repassa la unitat amb les preguntes de repàs (viewport, @media, :hover, webs falses). Ensenya com pot quedar la guia acabada i explica el pla de la sessió: pensar, dibuixar, construir a trossos i revisar.|Repasa la unidad con las preguntas de repaso (viewport, @media, :hover, webs falsas). Enseña cómo puede quedar la guía terminada y explica el plan de la sesión: pensar, dibujar, construir a trozos y revisar.",
        diu: ["Què hem après en aquesta unitat que farem servir avui?|¿Qué hemos aprendido en esta unidad que usaremos hoy?",
          "Avui no començarem pel codi: començarem pel pla.|Hoy no empezaremos por el código: empezaremos por el plan."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El pla, els fets i les peces|El plan, los hechos y las piezas", fase: 'teoria',
        fa: "Explica les tres preguntes del pla (per a qui, quines seccions, com es veurà al mòbil). Recorda que una guia només diu fets segurs, i que cal citar les fonts i posar alt a les imatges. Repassa les peces de codi que necessitaran i insisteix a provar-la al mòbil després de cada pas.|Explica las tres preguntas del plan (para quién, qué secciones, cómo se verá en el móvil). Recuerda que una guía solo dice hechos seguros, y que hay que citar las fuentes y poner alt a las imágenes. Repasa las piezas de código que necesitarán e insiste en probarla en el móvil después de cada paso.",
        diu: ["Què necessita saber un estudiant que arriba a Lleida per primera vegada?|¿Qué necesita saber un estudiante que llega a Lleida por primera vez?",
          "Si no esteu segurs d'un fet, no el poseu, o comproveu-lo abans.|Si no estáis seguros de un hecho, no lo pongáis, o comprobadlo antes.",
          "Després de cada pas, mireu la vista 📱.|Después de cada paso, mirad la vista 📱."],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "L'esbós de la guia (sense pantalla)|El boceto de la guía (sin pantalla)", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa del pla: per a qui és, quines seccions tindrà i quins llocs, festes i menjars hi posarà. Després dibuixa l'esbós de l'ordinador i el del mòbil. Per parelles, s'expliquen l'esbós en un minut.|Cada alumno/a rellena la ficha del plan: para quién es, qué secciones tendrá y qué lugares, fiestas y comidas pondrá. Después dibuja el boceto del ordenador y el del móvil. Por parejas, se explican el boceto en un minuto.",
        diu: ["Al mòbil, tot en una columna: en quin ordre?|En el móvil, todo en una columna: ¿en qué orden?",
          "On porta cada botó del menú? Marca-ho amb una fletxa.|¿Adónde lleva cada botón del menú? Márcalo con una flecha."],
        slides: ['s8'], app: "Cap: activitat sense pantalla (a l'app, el pas «L'esbós de la guia» es marca com a fet).|Ninguna: actividad sin pantalla (en la app, el paso «El boceto de la guía» se marca como hecho).", org: "Individual i per parelles|Individual y por parejas" },
      { min: 20, t: "A l'ordinador: la guia, pas a pas|En el ordenador: la guía, paso a paso", fase: 'ordinador',
        fa: "Cada alumne/a fa els passos de l'app fins al pas 4: ordenar els passos, l'esbós (ja fet), la targeta més llegible, la imatge sense alt, la pausa activa i els quatre passos de la guia (capçalera i menú, llocs, estil, mòbil). Passeja per l'aula i demana que t'ensenyin la vista 📱 després de cada pas.|Cada alumno/a hace los pasos de la app hasta el paso 4: ordenar los pasos, el boceto (ya hecho), la tarjeta más legible, la imagen sin alt, la pausa activa y los cuatro pasos de la guía (cabecera y menú, lugares, estilo, móvil). Pasea por el aula y pide que te enseñen la vista 📱 después de cada paso.",
        diu: ["Ensenya'm la vista 📱: hi ha alguna barra per moure's de costat?|Enséñame la vista 📱: ¿hay alguna barra para moverse de lado?",
          "Llegeix l'avís groc abans de demanar ajuda.|Lee el aviso amarillo antes de pedir ayuda."],
        slides: ['s9', 's10', 's11'], app: "De «La missió» fins al pas 4 de la guia: les targetes de «Descobreix», ordenar els passos, «L'esbós de la guia» (ja fet), la targeta més llegible, la imatge sense alt, la pausa i els quatre passos (capçalera i menú, llocs, estil i mòbil).|De «La misión» hasta el paso 4 de la guía: las tarjetas de «Descubre», ordenar los pasos, «El boceto de la guía» (ya hecho), la tarjeta más legible, la imagen sin alt, la pausa y los cuatro pasos (cabecera y menú, lugares, estilo y móvil).", org: "Individual|Individual" },
      { min: 10, t: "Crea: la guia completa|Crea: la guía completa", fase: 'crea',
        fa: "Cada alumne/a acaba la guia: secció de festes, secció de menjar i peu amb les fonts. Que la facin seva (colors, textos, imatges) seguint l'esbós. Quan es desi, la tindran a «Projectes» i la faran servir a la unitat 8.|Cada alumno/a termina la guía: sección de fiestas, sección de comida y pie con las fuentes. Que la hagan suya (colores, textos, imágenes) siguiendo el boceto. Cuando se guarde, la tendrán en «Proyectos» y la usarán en la unidad 8.",
        diu: ["Compara la guia amb el teu esbós: falta alguna cosa?|Compara la guía con tu boceto: ¿falta algo?",
          "Al peu, d'on has tret la informació?|En el pie, ¿de dónde has sacado la información?"],
        slides: ['s12', 's13'], app: "Pas «Crea»: La guia de Lleida (es desa a «Projectes»).|Paso «Crea»: La guía de Lleida (se guarda en «Proyectos»).", org: "Individual|Individual" },
      { min: 7, t: "Galeria, revisió i tiquet|Galería, revisión y ticket", fase: 'tancament',
        fa: "Cada alumne/a deixa la guia oberta en mode 📱. Per parelles, revisen la guia de l'altre amb la fitxa (alt, contrast, fets, mòbil, botons) i li escriuen dues estrelles i un desig. Acabeu amb el resum, les preguntes finals de l'app i el tiquet.|Cada alumno/a deja la guía abierta en modo 📱. Por parejas, revisan la guía del otro con la ficha (alt, contraste, hechos, móvil, botones) y le escriben dos estrellas y un deseo. Terminad con el resumen, las preguntas finales de la app y el ticket.",
        diu: ["Dues estrelles: dues coses que estiguin molt bé. Un desig: una cosa per millorar.|Dos estrellas: dos cosas que estén muy bien. Un deseo: una cosa para mejorar.",
          "Els comentaris han de ser amables i concrets.|Los comentarios tienen que ser amables y concretos."],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Per parelles i després tot el grup|Por parejas y después todo el grupo" }
    ],
    errors: [
      ["Vol posar fets que no sap si són certs («la torre més alta del món»…).|Quiere poner hechos que no sabe si son ciertos («la torre más alta del mundo»…).",
        "Pregunta-li com ho sap. Si no ho pot comprovar amb una font fiable, que escrigui una cosa que sí que sàpiga segur o que ho comproveu junts.|Pregúntale cómo lo sabe. Si no lo puede comprobar con una fuente fiable, que escriba algo que sí sepa seguro o que lo comprobéis juntos."],
      ["Els botons del menú no porten enlloc: l'href i l'id no coincideixen (#festes i id=\"festa\").|Los botones del menú no llevan a ninguna parte: el href y el id no coinciden (#festes e id=\"festa\").",
        "Que llegeixi en veu alta l'href i l'id lletra a lletra. Han de ser exactament iguals, però l'href porta el # al davant.|Que lea en voz alta el href y el id letra a letra. Tienen que ser exactamente iguales, pero el href lleva el # delante."],
      ["Fa tota la guia i només mira el mòbil al final; llavors hi ha moltes coses a arreglar.|Hace toda la guía y solo mira el móvil al final; entonces hay muchas cosas que arreglar.",
        "Proposa-li treballar a trossos: després de cada secció, botó 📱. Així cada problema és petit.|Propónle trabajar a trozos: después de cada sección, botón 📱. Así cada problema es pequeño."],
      ["Tria colors bonics però amb poc contrast (groc sobre blanc).|Elige colores bonitos pero con poco contraste (amarillo sobre blanco).",
        "Torna a la pregunta de la targeta més llegible: es llegiria al carrer, amb el sol a la pantalla? Que provi un text més fosc o un fons més clar.|Vuelve a la pregunta de la tarjeta más legible: ¿se leería en la calle, con el sol en la pantalla? Que pruebe un texto más oscuro o un fondo más claro."],
      ["Una etiqueta sense tancar (un div o una section) desordena tota la pàgina.|Una etiqueta sin cerrar (un div o una section) desordena toda la página.",
        "Que llegeixi l'avís groc: diu la línia de l'etiqueta oberta. Proposa-li fer servir el sagnat per veure on comença i on s'acaba cada caixa.|Que lea el aviso amarillo: dice la línea de la etiqueta abierta. Propónle usar la sangría para ver dónde empieza y dónde termina cada caja."]
    ],
    diff: {
      mes: "Afegir una secció nova (per exemple, «Com moure's per la ciutat» o un petit mapa amb una llista de llocs), un botó «Torna a dalt» que porti a #inici i un segon punt de tall per a tauletes.|Añadir una sección nueva (por ejemplo, «Cómo moverse por la ciudad» o un pequeño mapa con una lista de lugares), un botón «Vuelve arriba» que lleve a #inici y un segundo punto de corte para tabletas.",
      menys: "Fer la guia amb dues seccions (llocs i festes) i dues targetes cadascuna, amb els botons d'inserir codi. El @media pot tenir només la regla de les targetes.|Hacer la guía con dos secciones (lugares y fiestas) y dos tarjetas cada una, con los botones de insertar código. El @media puede tener solo la regla de las tarjetas."
    },
    aval: {
      ticket: ["Digues una cosa que has revisat a la guia d'un company/a i com l'ha millorada.|Di una cosa que has revisado en la guía de un compañero/a y cómo la ha mejorado.",
        "Quina regla fa que la teva guia es vegi bé al mòbil?|¿Qué regla hace que tu guía se vea bien en el móvil?"],
      rubric: [
        ["Estructura i contingut|Estructura y contenido", "La guia té capçalera, menú que funciona, tres seccions amb fets certs, imatges amb alt i fonts.|La guía tiene cabecera, menú que funciona, tres secciones con hechos ciertos, imágenes con alt y fuentes.", "La guia té les seccions, però falta algun alt, les fonts o algun enllaç del menú no funciona.|La guía tiene las secciones, pero falta algún alt, las fuentes o algún enlace del menú no funciona."],
        ["Disseny per al mòbil|Diseño para el móvil", "Al mòbil tot va en columna, no hi ha barra de costat i els botons són grans; té bon contrast.|En el móvil todo va en columna, no hay barra de lado y los botones son grandes; tiene buen contraste.", "Té el @media, però alguna cosa encara no cap o costa de llegir.|Tiene el @media, pero algo todavía no cabe o cuesta de leer."],
        ["Revisió i comentaris|Revisión y comentarios", "Revisa la guia del company/a amb la fitxa i dona comentaris amables i concrets.|Revisa la guía del compañero/a con la ficha y da comentarios amables y concretos.", "Revisa la guia, però els comentaris són generals («està bé»).|Revisa la guía, pero los comentarios son generales («está bien»)."]
      ]
    },
    casa: "A casa, ensenyeu la guia a la família des de «Projectes», en mode mòbil. Pregunteu-los quin lloc o festa de Lleida hi afegirien i comproveu-ho junts en una font fiable abans de posar-ho.|En casa, enseñad la guía a la familia desde «Proyectos», en modo móvil. Preguntadles qué lugar o fiesta de Lleida añadirían y comprobadlo juntos en una fuente fiable antes de ponerlo.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: la guia de Lleida|Proyecto: la guía de Lleida", x: "Una guia de la ciutat per als estudiants d'intercanvi, perfecta al mòbil.|Una guía de la ciudad para los estudiantes de intercambio, perfecta en el móvil.",
        nota: "Presenta el projecte com la culminació de la unitat: farà servir tot el que han après.|Presenta el proyecto como la culminación de la unidad: usará todo lo que han aprendido." },
      { id: 's2', k: 'repas', t: "Recordem la unitat|Recordemos la unidad", punts: ["Per a què serveix el viewport?|¿Para qué sirve el viewport?", "Què fa @media (max-width: 600px)?|¿Qué hace @media (max-width: 600px)?", "On va la transition?|¿Dónde va la transition?", "Quins són els senyals d'una web falsa?|¿Cuáles son las señales de una web falsa?"],
        nota: "Fes les preguntes en veu alta i deixa que es responguin entre ells.|Haz las preguntas en voz alta y deja que se respondan entre ellos." },
      { id: 's3', k: 'media', t: "Així pot quedar|Así puede quedar", x: "Capçalera, menú de botons i targetes. Al mòbil, tot en columna.|Cabecera, menú de botones y tarjetas. En el móvil, todo en columna.",
        media: { k: 'web', html: '<header>\n  <h1>Guia de Lleida</h1>\n  <nav>\n    <a class="boto" href="#llocs">Llocs</a>\n    <a class="boto" href="#festes">Festes</a>\n  </nav>\n</header>\n<div class="targetes">\n  <div class="targeta">\n    <img src="img/tech/web/seu-vella.svg" alt="La Seu Vella">\n    <h3>La Seu Vella</h3>\n  </div>\n  <div class="targeta">\n    <img src="img/tech/web/pont.svg" alt="Un pont">\n    <h3>El riu Segre</h3>\n  </div>\n</div>', css: 'header {\n  background: #2F6BFF;\n  color: white;\n  padding: 10px;\n  border-radius: 12px;\n}\n.boto {\n  display: inline-block;\n  background: white;\n  color: #1A3FB0;\n  padding: 6px 12px;\n  border-radius: 8px;\n  text-decoration: none;\n}\n.targetes {\n  display: flex;\n  gap: 10px;\n  margin-top: 10px;\n}\n.targeta {\n  background: #FFF4D6;\n  padding: 8px;\n  border-radius: 12px;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n@media (max-width: 600px) {\n  .targetes {\n    flex-direction: column;\n  }\n}' },
        nota: "És només un exemple: cadascú farà la seva, amb els seus colors i els seus llocs.|Es solo un ejemplo: cada uno hará la suya, con sus colores y sus lugares." },
      { id: 's4', k: 'concepte', t: "Primer el pla|Primero el plan", pic: 'img/ment/nom.webp', punts: ["Per a qui és? Estudiants que no coneixen Lleida.|¿Para quién es? Estudiantes que no conocen Lleida.", "Quines seccions? Llocs, festes, menjar.|¿Qué secciones? Lugares, fiestas, comida.", "Com es veurà al mòbil? Un esbós.|¿Cómo se verá en el móvil? Un boceto."],
        nota: "Pregunta què voldrien saber ells si arribessin a una ciutat nova.|Pregunta qué querrían saber ellos si llegaran a una ciudad nueva." },
      { id: 's5', k: 'concepte', t: "Fets segurs i fonts|Hechos seguros y fuentes", punts: ["Només fets que sabem certs.|Solo hechos que sabemos ciertos.", "Si dubtem, ho comprovem amb un adult.|Si dudamos, lo comprobamos con un adulto.", "Les fonts, al peu de la pàgina.|Las fuentes, al pie de la página.", "Un alt a cada imatge.|Un alt en cada imagen."],
        nota: "Ofereix la llista de fets segurs que has preparat (la Seu Vella, el Segre, Gardeny, la Festa Major amb Lo Marraco, l'Aplec del Caragol, la fruita, els caragols).|Ofrece la lista de hechos seguros que has preparado (la Seu Vella, el Segre, Gardeny, la Fiesta Mayor con Lo Marraco, el Aplec del Caragol, la fruta, los caracoles)." },
      { id: 's6', k: 'concepte', t: "Les peces de la guia|Las piezas de la guía", punts: ["header + nav amb botons|header + nav con botones", "section amb id per a cada tema|section con id para cada tema", "targetes amb flex|tarjetas con flex", ":hover, transition i @media|:hover, transition y @media"],
        code: '<nav>\n  <a class="boto" href="#festes">…</a>\n</nav>\n<section id="festes">\n  <h2>…</h2>\n</section>',
        nota: "Fes notar que l'href del botó i l'id de la secció han de coincidir (amb el # davant a l'href).|Haz notar que el href del botón y el id de la sección tienen que coincidir (con el # delante en el href)." },
      { id: 's7', k: 'anim', t: "Prova-la al mòbil sovint|Pruébala en el móvil a menudo", anim: 'w7flex', x: "Després de cada pas, botó 📱. Si surt una barra de costat, busca un width amb píxels.|Después de cada paso, botón 📱. Si sale una barra de lado, busca un width con píxeles.",
        nota: "Explica que els professionals també treballen així: un tros, provar; un altre tros, provar.|Explica que los profesionales también trabajan así: un trozo, probar; otro trozo, probar." },
      { id: 's8', k: 'activitat', t: "L'esbós de la guia|El boceto de la guía", timer: 10, punts: ["Omple el pla: per a qui, seccions, continguts.|Rellena el plan: para quién, secciones, contenidos.", "Dibuixa l'ordinador i el mòbil.|Dibuja el ordenador y el móvil.", "Marca on porta cada botó.|Marca adónde lleva cada botón.", "Explica-ho al company/a en un minut.|Explícaselo al compañero/a en un minuto."],
        nota: "L'esbós no ha de ser bonic: ha de ser clar. Els que acabin poden escriure ja els textos de les targetes.|El boceto no tiene que ser bonito: tiene que ser claro. Los que terminen pueden escribir ya los textos de las tarjetas." },
      { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 20, punts: ["Obre la sessió «Projecte: la guia de Lleida».|Abre la sesión «Proyecto: la guía de Lleida».", "«L'esbós de la guia»: toca «Ho hem fet!».|«El boceto de la guía»: toca «¡Lo hemos hecho!».", "Fes els quatre passos de la guia.|Haz los cuatro pasos de la guía.", "Després de cada pas, mira la vista 📱.|Después de cada paso, mira la vista 📱."],
        nota: "Passeja i demana la vista 📱. Qui vagi més de pressa pot començar el pas «Crea».|Pasea y pide la vista 📱. Quien vaya más deprisa puede empezar el paso «Crea»." },
      { id: 's10', k: 'repte', t: "La guia, pas a pas|La guía, paso a paso", punts: ["1. La capçalera i el menú|1. La cabecera y el menú", "2. Els llocs per visitar|2. Los lugares para visitar", "3. L'estil: flex, :hover i transition|3. El estilo: flex, :hover y transition", "4. El mòbil: @media|4. El móvil: @media"],
        nota: "Cada pas parteix del codi de l'anterior. Si algú s'encalla, pot fer servir «Una pista» i després continuar.|Cada paso parte del código del anterior. Si alguien se atasca, puede usar «Una pista» y después continuar." },
      { id: 's11', k: 'concepte', t: "El @media de la guia|El @media de la guía", punts: ["Títol més petit|Título más pequeño", "Targetes en columna|Tarjetas en columna", "Botons a tota l'amplada|Botones a todo el ancho"],
        code: '@media (max-width: 600px) {\n  h1 { font-size: 26px; }\n  .targetes { flex-direction: column; }\n  .boto { display: block; }\n}',
        nota: "Fes-la servir per al pas 4. Recorda: un sol @media amb diverses regles a dins.|Úsala para el paso 4. Recuerda: un solo @media con varias reglas dentro." },
      { id: 's12', k: 'activitat', t: "Crea: la guia completa|Crea: la guía completa", timer: 10, punts: ["Secció de festes (#festes)|Sección de fiestas (#festes)", "Secció de menjar (#menjar)|Sección de comida (#menjar)", "Peu amb les fonts|Pie con las fuentes", "Fes-la teva: colors, textos, imatges|Hazla tuya: colores, textos, imágenes"],
        nota: "Recorda'ls que comparin la guia amb l'esbós. Quan es desi, la tindran a «Projectes» per a la unitat 8.|Recuérdales que comparen la guía con el boceto. Cuando se guarde, la tendrán en «Proyectos» para la unidad 8." },
      { id: 's13', k: 'concepte', t: "Idees per a les festes i el menjar|Ideas para las fiestas y la comida", punts: ["La Festa Major de maig, amb Lo Marraco|La Fiesta Mayor de mayo, con Lo Marraco", "L'Aplec del Caragol, a la primavera|El Aplec del Caragol, en primavera", "La fruita dolça de l'horta|La fruta dulce de la huerta", "Els caragols a la llauna|Los caracoles a la llauna"],
        nota: "Són fets generals i coneguts. Si algú vol afegir-ne d'altres, que els comprovi abans en una font fiable.|Son hechos generales y conocidos. Si alguien quiere añadir otros, que los compruebe antes en una fuente fiable." },
      { id: 's14', k: 'activitat', t: "Galeria i revisió|Galería y revisión", timer: 5, punts: ["Deixa la guia oberta en mode 📱.|Deja la guía abierta en modo 📱.", "Revisa la del company/a amb la fitxa.|Revisa la del compañero/a con la ficha.", "Dues estrelles i un desig.|Dos estrellas y un deseo."],
        nota: "Modela un comentari concret abans de començar: «El menú es veu molt bé al mòbil; potser el text groc es llegeix poc».|Modela un comentario concreto antes de empezar: «El menú se ve muy bien en el móvil; quizás el texto amarillo se lee poco»." },
      { id: 's15', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["Webs adaptables: viewport, @media i amplades flexibles.|Webs adaptables: viewport, @media y anchos flexibles.", "Botons amb :hover, :focus i transition, pensats per al dit.|Botones con :hover, :focus y transition, pensados para el dedo.", "Detectar webs falses i demanar ajuda.|Detectar webs falsas y pedir ayuda.", "Planificar, construir i revisar una web completa.|Planificar, construir y revisar una web completa."],
        nota: "Felicita el grup: han fet una web de veritat, completa i per al mòbil. A la unitat 8 faran la seva pròpia web.|Felicita al grupo: han hecho una web de verdad, completa y para el móvil. En la unidad 8 harán su propia web." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què has millorat gràcies a la revisió?|¿Qué has mejorado gracias a la revisión?", "Quina regla fa que la guia es vegi bé al mòbil?|¿Qué regla hace que la guía se vea bien en el móvil?"],
        nota: "Recull les fitxes de revisió: et serviran per veure què cal reforçar a la unitat 8.|Recoge las fichas de revisión: te servirán para ver qué hay que reforzar en la unidad 8." }
    ],
    print: [
      { id: 'p1', t: "El pla de la guia|El plan de la guía", k: 'fitxa',
        intro: "Abans de programar, planifica la teva guia de Lleida. Recorda: només fets que sàpigues segurs.|Antes de programar, planifica tu guía de Lleida. Recuerda: solo hechos que sepas seguros.",
        items: [
          { q: "Per a qui és la guia? Què necessiten saber?|¿Para quién es la guía? ¿Qué necesitan saber?", sol: "Per a estudiants d'intercanvi que no coneixen Lleida: què visitar, quines festes hi ha i què menjar.|Para estudiantes de intercambio que no conocen Lleida: qué visitar, qué fiestas hay y qué comer." },
          { q: "Escriu 3 llocs, 2 festes i 2 menjars que hi posaràs.|Escribe 3 lugares, 2 fiestas y 2 comidas que pondrás.", sol: "Per exemple: la Seu Vella, el riu Segre, Gardeny; la Festa Major de maig, l'Aplec del Caragol; la fruita de l'horta, els caragols a la llauna.|Por ejemplo: la Seu Vella, el río Segre, Gardeny; la Fiesta Mayor de mayo, el Aplec del Caragol; la fruta de la huerta, los caracoles a la llauna." },
          { q: "Esbós per a l'ordinador.|Boceto para el ordenador.", big: true, sol: "Capçalera amb el menú; seccions amb les targetes en fila; peu amb les fonts.|Cabecera con el menú; secciones con las tarjetas en fila; pie con las fuentes." },
          { q: "Esbós per al mòbil.|Boceto para el móvil.", big: true, sol: "Tot en una columna, en el mateix ordre; botons grans a tota l'amplada.|Todo en una columna, en el mismo orden; botones grandes a todo el ancho." },
          { q: "D'on trauràs la informació (les fonts)?|¿De dónde sacarás la información (las fuentes)?", sol: "Explicacions a classe, llibres de la biblioteca o webs fiables consultades amb un adult.|Explicaciones en clase, libros de la biblioteca o webs fiables consultadas con un adulto." }
        ] },
      { id: 'p2', t: "Revisem la guia|Revisamos la guía", k: 'fitxa',
        intro: "Revisa la guia del teu company/a en mode mòbil. Marca cada punt i acaba amb dues estrelles i un desig.|Revisa la guía de tu compañero/a en modo móvil. Marca cada punto y termina con dos estrellas y un deseo.",
        items: [
          { q: "Al mòbil, tot va en columna i no hi ha barra per moure's de costat?|En el móvil, ¿todo va en columna y no hay barra para moverse de lado?", sol: "Sí: hi ha un @media amb flex-direction: column i amplades flexibles.|Sí: hay un @media con flex-direction: column y anchos flexibles." },
          { q: "Els botons del menú porten a la seva secció i canvien amb el :hover?|¿Los botones del menú llevan a su sección y cambian con el :hover?", sol: "Cada href (#festes…) coincideix amb un id i hi ha una regla .boto:hover.|Cada href (#festes…) coincide con un id y hay una regla .boto:hover." },
          { q: "Totes les imatges tenen alt? El text es llegeix bé (contrast)?|¿Todas las imágenes tienen alt? ¿El texto se lee bien (contraste)?", sol: "Cada img té un alt que la descriu; text fosc sobre fons clar o al revés.|Cada img tiene un alt que la describe; texto oscuro sobre fondo claro o al revés." },
          { q: "Els fets són certs i hi ha les fonts al peu?|¿Los hechos son ciertos y están las fuentes en el pie?", sol: "Només fets coneguts i comprovats, i un footer amb les fonts.|Solo hechos conocidos y comprobados, y un footer con las fuentes." },
          { q: "Dues estrelles i un desig per a la guia del company/a.|Dos estrellas y un deseo para la guía del compañero/a.", big: true, sol: "Dos comentaris concrets i amables del que està bé i un de concret per millorar.|Dos comentarios concretos y amables de lo que está bien y uno concreto para mejorar." }
        ] }
    ]
  }
});
