/* ===== Numi Tech · guia del professorat · Tech Web (w1-1 … w8-4) =====
   Material propi de Numi. Mateix esquema que tech-guide-c1.js (obj, comp, vocab, mat, plan de 60 min, errors, diff,
   aval, casa, slides, print). Les diapositives poden portar `code` (codi HTML/CSS que es projecta acolorit).
   Les animacions (anim) són claus de TANI_WEB (tech-web.js). */

/* ---------- Guies del professorat · Tech Web, unitat 1 «Com funciona internet» ---------- */
Object.assign(TGUIDE, {

  /* ===== w1-1 · El viatge d'una pàgina ===== */
  'w1-1': {
    obj: [
      "L'alumne/a explica amb les seves paraules que internet és una xarxa de xarxes i quin paper tenen el wifi, el router i els cables.|El alumno/a explica con sus palabras que internet es una red de redes y qué papel tienen el wifi, el router y los cables.",
      "L'alumne/a distingeix el client (el navegador) del servidor i descriu la petició i la resposta.|El alumno/a distingue el cliente (el navegador) del servidor y describe la petición y la respuesta.",
      "L'alumne/a ordena els cinc passos del viatge d'una pàgina, amb el DNS i els paquets.|El alumno/a ordena los cinco pasos del viaje de una página, con el DNS y los paquetes.",
      "L'alumne/a modifica un fitxer HTML senzill (canvia textos, afegeix un paràgraf, tanca una etiqueta) i en veu l'efecte a l'instant.|El alumno/a modifica un archivo HTML sencillo (cambia textos, añade un párrafo, cierra una etiqueta) y ve su efecto al instante."
    ],
    comp: [
      "Competència digital: entendre com funcionen les xarxes i els serveis d'internet que fem servir cada dia|Competencia digital: entender cómo funcionan las redes y los servicios de internet que usamos cada día",
      "Pensament computacional: descompondre un procés en passos ordenats|Pensamiento computacional: descomponer un proceso en pasos ordenados",
      "Ciència i tecnologia: sistemes de comunicació i transmissió de la informació|Ciencia y tecnología: sistemas de comunicación y transmisión de la información",
      "Comunicació oral: explicar un procés tècnic amb paraules senzilles|Comunicación oral: explicar un proceso técnico con palabras sencillas"
    ],
    vocab: [
      ["Internet|Internet", "Una xarxa de xarxes: milions d'ordinadors connectats amb cables, fibra i wifi.|Una red de redes: millones de ordenadores conectados con cables, fibra y wifi."],
      ["Servidor|Servidor", "Ordinador sempre engegat que guarda webs i les envia a qui les demana.|Ordenador siempre encendido que guarda webs y las envía a quien las pide."],
      ["Client (navegador)|Cliente (navegador)", "El programa que demana les pàgines i les dibuixa: Chrome, Firefox, Safari…|El programa que pide las páginas y las dibuja: Chrome, Firefox, Safari…"],
      ["Petició i resposta|Petición y respuesta", "El navegador demana una pàgina (petició) i el servidor l'envia (resposta).|El navegador pide una página (petición) y el servidor la envía (respuesta)."],
      ["Paquet|Paquete", "Tros petit i numerat en què es talla la pàgina per viatjar.|Trozo pequeño y numerado en que se corta la página para viajar."],
      ["Router|Router", "Aparell que connecta la xarxa de casa (o de l'escola) amb internet.|Aparato que conecta la red de casa (o de la escuela) con internet."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «El viatge d'una pàgina»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «El viaje de una página»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Fulls, tisores i quatre cartells de rol per grup (navegador, DNS, router, servidor)|Hojas, tijeras y cuatro carteles de rol por grupo (navegador, DNS, router, servidor)",
        "Si es pot, el router de l'aula a la vista per ensenyar-lo|Si se puede, el router del aula a la vista para enseñarlo"
      ],
      imprimir: ["Rols i paquets de «Fes d'internet»|Roles y paquetes de «Haz de internet»", "Fitxa: el viatge en 5 passos|Ficha: el viaje en 5 pasos"],
      prep: [
        "Imprimir i retallar un paquet de targetes de rols i paquets per grup de 4. Barrejar els paquets de la pàgina abans de donar-los al servidor.|Imprimir y recortar un paquete de tarjetas de roles y paquetes por grupo de 4. Mezclar los paquetes de la página antes de dárselos al servidor.",
        "Preparar l'espai perquè cada grup pugui seure en línia: navegador, DNS a un costat, router al mig i servidor al final.|Preparar el espacio para que cada grupo pueda sentarse en línea: navegador, DNS a un lado, router en medio y servidor al final.",
        "Obrir Numi Tech a tots els ordinadors i comprovar que la vista prèvia de l'editor funciona.|Abrir Numi Tech en todos los ordenadores y comprobar que la vista previa del editor funciona.",
        "Repassar el pas «El viatge» de l'app per saber què veuran a cada clic.|Repasar el paso «El viaje» de la app para saber qué verán en cada clic."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: on és una pàgina?|Bienvenida: ¿dónde está una página?", fase: 'inici',
        fa: "Presenta el curs i l'objectiu de la unitat: entendre com funciona internet abans de fer webs. Pregunta on creuen que és una pàgina abans d'arribar a la pantalla i recull respostes a la pissarra sense corregir-les.|Presenta el curso y el objetivo de la unidad: entender cómo funciona internet antes de hacer webs. Pregunta dónde creen que está una página antes de llegar a la pantalla y recoge respuestas en la pizarra sin corregirlas.",
        diu: ["Quan obriu una web, d'on surt? És dins el mòbil?|Cuando abrís una web, ¿de dónde sale? ¿Está dentro del móvil?",
          "Avui seguirem el viatge d'una pàgina des d'un ordinador llunyà fins a la vostra pantalla.|Hoy seguiremos el viaje de una página desde un ordenador lejano hasta vuestra pantalla.",
          "I al final de la classe tocareu per primer cop el codi que viatja.|Y al final de la clase tocaréis por primera vez el código que viaja."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Internet, client, servidor i paquets|Internet, cliente, servidor y paquetes", fase: 'teoria',
        fa: "Explica internet com una xarxa de xarxes i, si el tens a la vista, ensenya el router de l'aula. Presenta client i servidor amb l'exemple de la biblioteca. Mostra el fitxer que arriba i el que dibuixa el navegador, i acaba amb els paquets i els cinc passos del viatge. Remarca que la web és només un dels serveis d'internet.|Explica internet como una red de redes y, si lo tienes a la vista, enseña el router del aula. Presenta cliente y servidor con el ejemplo de la biblioteca. Muestra el archivo que llega y lo que dibuja el navegador, y termina con los paquetes y los cinco pasos del viaje. Remarca que la web es solo uno de los servicios de internet.",
        diu: ["Aquella capsa amb llumetes és el router: la porta de l'aula cap a internet.|Esa caja con lucecitas es el router: la puerta del aula hacia internet.",
          "El servidor no us envia una foto de la pàgina: us envia text amb instruccions.|El servidor no os envía una foto de la página: os envía texto con instrucciones.",
          "Si un paquet es perd pel camí, què ha de fer el navegador?|Si un paquete se pierde por el camino, ¿qué tiene que hacer el navegador?",
          "Un correu o una videotrucada també viatgen per internet, però no són la web.|Un correo o una videollamada también viajan por internet, pero no son la web."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Fes d'internet amb papers|Haz de internet con papeles", fase: 'desconnectat',
        fa: "Fes grups de 4 amb els rols navegador, DNS, router i servidor. El navegador demana la pàgina, el DNS dona el número, el router porta els missatges i el servidor envia els quatre paquets desordenats. Fes una segona ronda en què el router «perd» un paquet i el navegador l'ha de tornar a demanar. Si sobra temps, canvieu els rols.|Haz grupos de 4 con los roles navegador, DNS, router y servidor. El navegador pide la página, el DNS da el número, el router lleva los mensajes y el servidor envía los cuatro paquetes desordenados. Haz una segunda ronda en la que el router «pierde» un paquete y el navegador tiene que volver a pedirlo. Si sobra tiempo, cambiad los roles.",
        diu: ["Ningú no es pot saltar el router: tots els missatges passen per ell.|Nadie se puede saltar el router: todos los mensajes pasan por él.",
          "Navegador: com saps en quin ordre van els paquets?|Navegador: ¿cómo sabes en qué orden van los paquetes?",
          "Quin número falta? Doncs demaneu-lo un altre cop.|¿Qué número falta? Pues pedidlo otra vez."],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla. A l'app, el pas «Fes d'internet» es marca com a fet.|Ninguna: actividad sin pantalla. En la app, el paso «Haz de internet» se marca como hecho.", org: "Grups de 4 amb rols|Grupos de 4 con roles" },
      { min: 13, t: "A l'ordinador: descobreix, prediu i investiga|En el ordenador: descubre, predice e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas del viatge interactiu, demana que expliquin en veu baixa a qui tenen al costat què passa a cada clic. Al pas de l'error, fixa't en qui toca la línia a l'atzar i pregunta-li què veu a la vista prèvia.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso del viaje interactivo, pide que expliquen en voz baja a quien tienen al lado qué pasa en cada clic. En el paso del error, fíjate en quién toca la línea al azar y pregúntale qué ve en la vista previa.",
        diu: ["Abans de triar quina pàgina dibuixarà el navegador, llegiu el codi en veu baixa.|Antes de elegir qué página dibujará el navegador, leed el código en voz baja.",
          "Què diu el missatge vermell de sota l'editor?|¿Qué dice el mensaje rojo de debajo del editor?",
          "A «Investiga» podeu canviar el que vulgueu: no es trenca res.|En «Investiga» podéis cambiar lo que queráis: no se rompe nada."],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: les dues històries, les sis targetes de «Descobreix», «Fes d'internet» (ja fet), ordenar el viatge, el viatge interactiu, prediu el resultat, troba l'error i l'editor lliure.|De «La misión» hasta «Investiga»: las dos historias, las seis tarjetas de «Descubre», «Haz de internet» (ya hecho), ordenar el viaje, el viaje interactivo, predice el resultado, encuentra el error y el editor libre.", org: "Individual|Individual" },
      { min: 12, t: "Reptes: els primers canvis al codi|Retos: los primeros cambios en el código", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després resol a la pissarra el primer repte com a exemple: només es canvia el text entre etiquetes. Deixa que facin els quatre reptes i, als ràpids, el repte extra. Al repte de les etiquetes sense tancar, projecta la diapositiva de l'error.|Haced la pausa activa todos juntos. Después resuelve en la pizarra el primer reto como ejemplo: solo se cambia el texto entre etiquetas. Deja que hagan los cuatro retos y, a los rápidos, el reto extra. En el reto de las etiquetas sin cerrar, proyecta la diapositiva del error.",
        diu: ["Escriviu entre el signe de tancar de l'etiqueta i el d'obrir de la següent, no a sobre.|Escribid entre el signo de cerrar de la etiqueta y el de abrir de la siguiente, no encima.",
          "Si heu esborrat una etiqueta sense voler, feu servir el botó de desfer.|Si habéis borrado una etiqueta sin querer, usad el botón de deshacer.",
          "L'ona vermella us diu la línia de l'error: llegiu el missatge.|La onda roja os dice la línea del error: leed el mensaje."],
        slides: ['s13', 's14'], app: "«Pausa activa» i «Reptes»: canviar els textos, afegir un paràgraf, arreglar les etiquetes, completar la fitxa d'internet i el repte extra de les negretes.|«Pausa activa» y «Retos»: cambiar los textos, añadir un párrafo, arreglar las etiquetas, completar la ficha de internet y el reto extra de las negritas.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el meu viatge per internet|Crea: mi viaje por internet", fase: 'crea',
        fa: "Cada alumne/a escriu la seva pàgina explicant el viatge com si ho expliqués a algú més petit. Recorda que els criteris són a la vista a l'app. Qui acabi, la llegeix a un company/a.|Cada alumno/a escribe su página explicando el viaje como si se lo explicara a alguien más pequeño. Recuerda que los criterios están a la vista en la app. Quien termine, la lee a un compañero/a.",
        diu: ["Feu-ho amb les vostres paraules, no copieu les targetes.|Hacedlo con vuestras palabras, no copiéis las tarjetas.",
          "Si l'entén el vostre germà petit, està perfecte.|Si lo entiende vuestro hermano pequeño, está perfecto."],
        slides: ['s15'], app: "Pas «Crea»: El meu viatge per internet (es desa al portafoli).|Paso «Crea»: Mi viaje por internet (se guarda en el portafolio).", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum i torna a la pregunta del principi. Que responguin les dues preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas de la sesión con el resumen y vuelve a la pregunta del principio. Que respondan las dos preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
        diu: ["On era la pàgina abans d'arribar a la pantalla?|¿Dónde estaba la página antes de llegar a la pantalla?",
          "Qui demana i qui respon?|¿Quién pide y quién responde?"],
        slides: ['s16', 's17'], app: "«Tancament»: dues preguntes i com m'he sentit.|«Cierre»: dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Pensa que les pàgines són dins el mòbil o a «internet» com si fos un lloc.|Piensa que las páginas están dentro del móvil o en «internet» como si fuera un lugar.",
        "Torna a l'activitat de rols: on era el full de la pàgina abans que el navegador el demanés? Al servidor.|Vuelve a la actividad de roles: ¿dónde estaba la hoja de la página antes de que el navegador la pidiera? En el servidor."],
      ["Confon internet amb la web o amb el wifi.|Confunde internet con la web o con el wifi.",
        "Fes servir la comparació de les carreteres: internet és la xarxa, el wifi és el camí de casa fins al router i la web és un dels vehicles que hi circulen.|Usa la comparación de las carreteras: internet es la red, el wifi es el camino de casa hasta el router y la web es uno de los vehículos que circulan por ella."],
      ["En canviar el text, esborra també part d'una etiqueta i la pàgina es desmunta.|Al cambiar el texto, borra también parte de una etiqueta y la página se desmonta.",
        "Que premi desfer i activi els Raigs X: així veu on comença i on acaba cada element abans d'escriure.|Que pulse deshacer y active los Rayos X: así ve dónde empieza y dónde termina cada elemento antes de escribir."],
      ["Escriu l'etiqueta de tancar sense la barra i no entén per què tot surt gros.|Escribe la etiqueta de cerrar sin la barra y no entiende por qué todo sale grande.",
        "Compara amb una línia que funciona: què té de diferent la segona etiqueta? Que llegeixi el missatge de sota l'editor.|Compara con una línea que funciona: ¿qué tiene de diferente la segunda etiqueta? Que lea el mensaje de debajo del editor."],
      ["Creu que tots els paquets fan el mateix camí i arriben en ordre.|Cree que todos los paquetes hacen el mismo camino y llegan en orden.",
        "Recorda la segona ronda de l'activitat: per què calia numerar els paquets?|Recuerda la segunda ronda de la actividad: ¿por qué hacía falta numerar los paquetes?"]
    ],
    diff: {
      mes: "Afegir a la pàgina del «Crea» un paràgraf sobre què passa si un paquet es perd, i posar en negreta totes les paraules del vocabulari. Explicar a la classe la diferència entre internet i la web amb un exemple propi.|Añadir a la página del «Crea» un párrafo sobre qué pasa si un paquete se pierde, y poner en negrita todas las palabras del vocabulario. Explicar a la clase la diferencia entre internet y la web con un ejemplo propio.",
      menys: "Tenir la fitxa dels 5 passos al costat de l'ordinador. Fer els reptes 1 i 2 amb ajuda dels Raigs X i, al repte 3, mirar primer el missatge d'error de sota l'editor.|Tener la ficha de los 5 pasos al lado del ordenador. Hacer los retos 1 y 2 con ayuda de los Rayos X y, en el reto 3, mirar primero el mensaje de error de debajo del editor."
    },
    aval: {
      ticket: ["Digues qui demana la pàgina i qui l'envia.|Di quién pide la página y quién la envía.",
        "Per què una pàgina viatja en paquets numerats?|¿Por qué una página viaja en paquetes numerados?"],
      rubric: [
        ["Client i servidor|Cliente y servidor", "Explica qui demana i qui respon amb un exemple propi.|Explica quién pide y quién responde con un ejemplo propio.", "Reconeix els dos papers però els confon de vegades.|Reconoce los dos papeles pero a veces los confunde."],
        ["El viatge en passos|El viaje en pasos", "Ordena els cinc passos i explica per a què serveixen el DNS i els paquets.|Ordena los cinco pasos y explica para qué sirven el DNS y los paquetes.", "Ordena els passos amb ajuda o se li escapa el DNS.|Ordena los pasos con ayuda o se le escapa el DNS."],
        ["Primer contacte amb el codi|Primer contacto con el código", "Canvia textos, afegeix un paràgraf i tanca etiquetes sense trencar la pàgina.|Cambia textos, añade un párrafo y cierra etiquetas sin romper la página.", "Canvia textos, però de vegades esborra etiquetes i necessita ajuda per arreglar-les.|Cambia textos, pero a veces borra etiquetas y necesita ayuda para arreglarlas."]
      ]
    },
    casa: "A casa, busqueu junts el router i mireu-ne les llums. Després, amb el mòbil, repetiu la sessió i expliqueu a algú de la família el viatge d'una pàgina en cinc passos.|En casa, buscad juntos el router y mirad sus luces. Después, con el móvil, repetid la sesión y explicad a alguien de la familia el viaje de una página en cinco pasos.",
    slides: [
      { id: 's1', k: 'portada', t: "El viatge d'una pàgina|El viaje de una página", x: "Descobrirem què passa entre el teu clic i la pàgina que veus a la pantalla.|Descubriremos qué pasa entre tu clic y la página que ves en la pantalla.",
        nota: "Presenta el curs Tech Web: primer entendrem internet, després farem webs de debò.|Presenta el curso Tech Web: primero entenderemos internet, después haremos webs de verdad." },
      { id: 's2', k: 'pregunta', t: "On és una pàgina abans d'arribar a la pantalla?|¿Dónde está una página antes de llegar a la pantalla?", x: "Dins el mòbil? En un núvol? En un altre ordinador?|¿Dentro del móvil? ¿En una nube? ¿En otro ordenador?",
        nota: "Anota les idees a la pissarra. Hi tornareu al final de la classe.|Anota las ideas en la pizarra. Volveréis a ellas al final de la clase." },
      { id: 's3', k: 'concepte', t: "Avui aprendrem…|Hoy aprenderemos…", punts: ["Què és internet|Qué es internet", "Qui demana i qui respon|Quién pide y quién responde", "Com viatja una pàgina|Cómo viaja una página", "A tocar el primer codi|A tocar el primer código"],
        nota: "Deixa clar que no cal saber res d'abans: començarem des de zero.|Deja claro que no hace falta saber nada de antes: empezaremos desde cero." },
      { id: 's4', k: 'anim', t: "Una xarxa de xarxes|Una red de redes", anim: 'wtrip', x: "Mòbil → wifi → router → companyia → altres xarxes → servidor.|Móvil → wifi → router → compañía → otras redes → servidor.",
        nota: "Si el tens a la vista, ensenya el router de l'aula. Esmenta els cables submarins que uneixen continents.|Si lo tienes a la vista, enseña el router del aula. Menciona los cables submarinos que unen continentes." },
      { id: 's5', k: 'anim', t: "Client i servidor|Cliente y servidor", anim: 'wclient', x: "El navegador demana; el servidor, sempre engegat, respon a molts clients alhora.|El navegador pide; el servidor, siempre encendido, responde a muchos clientes a la vez.",
        nota: "Compara-ho amb una biblioteca: molts lectors, un sol lloc que guarda i deixa els llibres.|Compáralo con una biblioteca: muchos lectores, un solo sitio que guarda y presta los libros." },
      { id: 's6', k: 'concepte', t: "Petició i resposta|Petición y respuesta", x: "El servidor envia un fitxer de text amb etiquetes. El navegador el llegeix i el dibuixa.|El servidor envía un archivo de texto con etiquetas. El navegador lo lee y lo dibuja.",
        code: '<h1>El temps a Lleida</h1>\n<p>Avui fa <b>sol</b> tot el dia.</p>',
        nota: "Assenyala que les etiquetes no surten a la pantalla: el navegador les fa servir per saber què és cada cosa.|Señala que las etiquetas no salen en la pantalla: el navegador las usa para saber qué es cada cosa." },
      { id: 's7', k: 'anim', t: "La pàgina viatja en paquets|La página viaja en paquetes", anim: 'wpackets', x: "Trossos petits i numerats que poden fer camins diferents i es tornen a ajuntar.|Trozos pequeños y numerados que pueden hacer caminos diferentes y se vuelven a juntar.",
        nota: "Pregunta per què creuen que es numeren. Resposta: per tornar-los a posar en ordre i saber si en falta algun.|Pregunta por qué creen que se numeran. Respuesta: para volver a ponerlos en orden y saber si falta alguno." },
      { id: 's8', k: 'pregunta', t: "Web o internet?|¿Web o internet?", punts: ["Un correu electrònic|Un correo electrónico", "Una videotrucada|Una videollamada", "Una pàgina de receptes|Una página de recetas", "Un missatge de xat|Un mensaje de chat"],
        nota: "Tot viatja per internet, però només la pàgina de receptes és la web. Internet és la carretera; la web, un dels vehicles.|Todo viaja por internet, pero solo la página de recetas es la web. Internet es la carretera; la web, uno de los vehículos." },
      { id: 's9', k: 'concepte', t: "Els 5 passos del viatge|Los 5 pasos del viaje", punts: ["1. Escrius l'adreça|1. Escribes la dirección", "2. El DNS diu el número|2. El DNS dice el número", "3. El navegador fa la petició|3. El navegador hace la petición", "4. El servidor respon en paquets|4. El servidor responde en paquetes", "5. El navegador ajunta i dibuixa|5. El navegador junta y dibuja"],
        nota: "El DNS s'aprofundeix la sessió que ve: avui, només la idea de l'agenda que dona el número.|El DNS se profundiza la sesión que viene: hoy, solo la idea de la agenda que da el número." },
      { id: 's10', k: 'activitat', t: "Fes d'internet|Haz de internet", timer: 10, punts: ["Navegador: escriu la petició.|Navegador: escribe la petición.", "DNS: busca el número a l'agenda.|DNS: busca el número en la agenda.", "Router: porta tots els missatges.|Router: lleva todos los mensajes.", "Servidor: envia 4 paquets desordenats.|Servidor: envía 4 paquetes desordenados."],
        nota: "Segona ronda: el router «perd» un paquet. El navegador ha de notar el número que falta i tornar-lo a demanar.|Segunda ronda: el router «pierde» un paquete. El navegador tiene que notar el número que falta y volver a pedirlo." },
      { id: 's11', k: 'activitat', t: "Les regles de la xarxa|Las reglas de la red", punts: ["Ningú no es salta el router.|Nadie se salta el router.", "Cada paquet porta el seu número.|Cada paquete lleva su número.", "El navegador no llegeix fins que els té tots.|El navegador no lee hasta que los tiene todos."],
        nota: "Deixa-la projectada mentre treballen en grup.|Déjala proyectada mientras trabajan en grupo." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre «El viatge d'una pàgina».|Abre «El viaje de una página».", "Fes el viatge interactiu i explica'l al company/a.|Haz el viaje interactivo y explícaselo al compañero/a.", "Prediu abans de triar.|Predice antes de elegir.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas «Fes d'internet» de l'app, que marquin que ja l'han fet a classe.|En el paso «Haz de internet» de la app, que marquen que ya lo han hecho en clase." },
      { id: 's13', k: 'repte', t: "Reptes: toca el codi|Retos: toca el código", timer: 12, punts: ["1. Canvia els textos|1. Cambia los textos", "2. Afegeix un paràgraf|2. Añade un párrafo", "3. Arregla les etiquetes|3. Arregla las etiquetas", "4. Completa la fitxa d'internet|4. Completa la ficha de internet"],
        code: '<h1>Benvinguts a la meva web</h1>\n<p>Aquesta pàgina ha viatjat des d\'un servidor.</p>\n<p>Escriu aquí una cosa sobre tu.</p>',
        nota: "Fes el primer en directe: només canvia el text que hi ha entre etiquetes.|Haz el primero en directo: solo cambia el texto que hay entre etiquetas." },
      { id: 's14', k: 'concepte', t: "Una etiqueta sense tancar|Una etiqueta sin cerrar", x: "Si el títol no es tanca, el navegador no sap on acaba i tot es fa gros.|Si el título no se cierra, el navegador no sabe dónde termina y todo se hace grande.",
        code: '<h1>Com arriba una pàgina\n<p>Primer, el navegador demana la pàgina.</p>\n\n<h1>Com arriba una pàgina</h1>\n<p>Primer, el navegador demana la pàgina.</p>',
        nota: "Compara les dues versions: la segona etiqueta porta barra. Projecta-la quan arribin al repte 3.|Compara las dos versiones: la segunda etiqueta lleva barra. Proyéctala cuando lleguen al reto 3." },
      { id: 's15', k: 'activitat', t: "Crea: el meu viatge per internet|Crea: mi viaje por internet", timer: 5, x: "Un títol i tres paràgrafs: navegador, servidor i paquets, amb les teves paraules.|Un título y tres párrafos: navegador, servidor y paquetes, con tus palabras.",
        nota: "Valora que ho expliquin amb exemples propis, no que sigui llarg.|Valora que lo expliquen con ejemplos propios, no que sea largo." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Internet és una xarxa de xarxes.|Internet es una red de redes.", "El client demana i el servidor respon.|El cliente pide y el servidor responde.", "La pàgina viatja en paquets numerats.|La página viaja en paquetes numerados."],
        nota: "Torna a la pregunta de l'inici: la pàgina era en un servidor.|Vuelve a la pregunta del inicio: la página estaba en un servidor." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Qui demana la pàgina i qui l'envia?|¿Quién pide la página y quién la envía?", "Per què es numeren els paquets?|¿Por qué se numeran los paquetes?"],
        nota: "Anota qui confon client i servidor per reforçar-ho a l'inici de la sessió següent.|Anota quién confunde cliente y servidor para reforzarlo al inicio de la sesión siguiente." }
    ],
    print: [
      { id: 'p1', t: "Rols i paquets de «Fes d'internet»|Roles y paquetes de «Haz de internet»", k: 'targetes',
        intro: "Un paquet de targetes per grup de 4. Els quatre paquets de la pàgina es barregen abans de donar-los al servidor.|Un paquete de tarjetas por grupo de 4. Los cuatro paquetes de la página se mezclan antes de dárselos al servidor.",
        items: [
          { t: "🧭 Navegador (client)|🧭 Navegador (cliente)", n: 1 }, { t: "📒 DNS|📒 DNS", n: 1 }, { t: "📶 Router|📶 Router", n: 1 }, { t: "🗄️ Servidor|🗄️ Servidor", n: 1 },
          { t: "Agenda del DNS: www.exemple.cat → 203.0.113.7|Agenda del DNS: www.exemple.cat → 203.0.113.7", n: 1 },
          { t: "Petició: «Vull la pàgina www.exemple.cat» → 203.0.113.7|Petición: «Quiero la página www.exemple.cat» → 203.0.113.7", n: 2 },
          { t: "Paquet 1/4: El temps a Lleida|Paquete 1/4: El tiempo en Lleida", n: 1 },
          { t: "Paquet 2/4: Avui fa sol tot el dia.|Paquete 2/4: Hoy hace sol todo el día.", n: 1 },
          { t: "Paquet 3/4: A la tarda, una mica de vent.|Paquete 3/4: Por la tarde, un poco de viento.", n: 1 },
          { t: "Paquet 4/4: Demà, núvols i pluja.|Paquete 4/4: Mañana, nubes y lluvia.", n: 1 }
        ] },
      { id: 'p2', t: "Fitxa: el viatge en 5 passos|Ficha: el viaje en 5 pasos", k: 'fitxa',
        intro: "Per fer individualment després de l'activitat, o a casa.|Para hacer individualmente después de la actividad, o en casa.",
        items: [
          { q: "Numera de l'1 al 5: el servidor respon en paquets · escrius l'adreça · el navegador dibuixa la pàgina · el DNS diu el número · el navegador fa la petició.|Numera del 1 al 5: el servidor responde en paquetes · escribes la dirección · el navegador dibuja la página · el DNS dice el número · el navegador hace la petición.",
            sol: "1 escrius l'adreça, 2 el DNS diu el número, 3 el navegador fa la petició, 4 el servidor respon en paquets, 5 el navegador dibuixa.|1 escribes la dirección, 2 el DNS dice el número, 3 el navegador hace la petición, 4 el servidor responde en paquetes, 5 el navegador dibuja." },
          { q: "Quan mires una web de receptes amb el mòbil, qui és el client i qui és el servidor?|Cuando miras una web de recetas con el móvil, ¿quién es el cliente y quién es el servidor?",
            sol: "El client és el navegador del mòbil; el servidor és l'ordinador que guarda la web de receptes.|El cliente es el navegador del móvil; el servidor es el ordenador que guarda la web de recetas." },
          { q: "Per què es numeren els paquets?|¿Por qué se numeran los paquetes?",
            sol: "Per posar-los en ordre quan arriben i saber si en falta algun per tornar-lo a demanar.|Para ponerlos en orden cuando llegan y saber si falta alguno para volver a pedirlo." },
          { q: "Una pàgina comença amb l'etiqueta d'obrir «h1» però el títol no es tanca mai. Què veurà el navegador? Com s'arregla?|Una página empieza con la etiqueta de abrir «h1» pero el título no se cierra nunca. ¿Qué verá el navegador? ¿Cómo se arregla?",
            sol: "Tot surt en lletra de títol. S'arregla posant l'etiqueta de tancar, amb barra, just després del text del títol.|Todo sale en letra de título. Se arregla poniendo la etiqueta de cerrar, con barra, justo después del texto del título." }
        ] }
    ]
  },

  /* ===== w1-2 · Adreces i dominis ===== */
  'w1-2': {
    obj: [
      "L'alumne/a identifica el protocol, el domini i la ruta d'una adreça web.|El alumno/a identifica el protocolo, el dominio y la ruta de una dirección web.",
      "L'alumne/a explica que el DNS tradueix el nom d'una web al número IP del servidor.|El alumno/a explica que el DNS traduce el nombre de una web al número IP del servidor.",
      "L'alumne/a sap què vol dir el cadenat de https i que no garanteix que una web sigui de fiar.|El alumno/a sabe qué significa el candado de https y que no garantiza que una web sea de fiar.",
      "L'alumne/a localitza el domini que mana en una adreça que se n'assembla a una altra i crea una pàgina d'adreces explicades.|El alumno/a localiza el dominio que manda en una dirección que se parece a otra y crea una página de direcciones explicadas."
    ],
    comp: [
      "Competència digital: navegar amb criteri i reconèixer adreces web|Competencia digital: navegar con criterio y reconocer direcciones web",
      "Seguretat digital: lectura atenta d'adreces i significat del xifratge|Seguridad digital: lectura atenta de direcciones y significado del cifrado",
      "Pensament computacional: descomposició d'una adreça en parts amb funcions diferents|Pensamiento computacional: descomposición de una dirección en partes con funciones diferentes",
      "Matemàtiques: números en un interval (de 0 a 255) i notació amb punts|Matemáticas: números en un intervalo (de 0 a 255) y notación con puntos"
    ],
    vocab: [
      ["URL (adreça web)|URL (dirección web)", "El text que porta el navegador a una pàgina concreta.|El texto que lleva al navegador a una página concreta."],
      ["Protocol|Protocolo", "La manera com parlen navegador i servidor: https.|La manera en que hablan navegador y servidor: https."],
      ["Domini|Dominio", "El nom de la web, com www.exemple.cat. Acaba en una extensió: .cat, .es, .com…|El nombre de la web, como www.exemple.cat. Termina en una extensión: .cat, .es, .com…"],
      ["Ruta|Ruta", "La part després del domini: la carpeta i el fitxer dins el servidor.|La parte después del dominio: la carpeta y el archivo dentro del servidor."],
      ["DNS|DNS", "L'agenda d'internet: tradueix noms a números IP.|La agenda de internet: traduce nombres a números IP."],
      ["Adreça IP|Dirección IP", "Quatre números del 0 al 255 separats per punts que identifiquen un ordinador a la xarxa.|Cuatro números del 0 al 255 separados por puntos que identifican un ordenador en la red."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Adreces i dominis»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Direcciones y dominios»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Fulls i retoladors gruixuts per als cartells de servidor|Hojas y rotuladores gruesos para los carteles de servidor",
        "Opcional: un navegador obert al projector per ensenyar el cadenat i l'adreça d'una web coneguda|Opcional: un navegador abierto en el proyector para enseñar el candado y la dirección de una web conocida"
      ],
      imprimir: ["Agenda del DNS i cartells de servidor|Agenda del DNS y carteles de servidor", "Fitxa: anatomia d'adreces|Ficha: anatomía de direcciones"],
      prep: [
        "Imprimir una agenda del DNS i un paquet de cartells de servidor per grup de 4.|Imprimir una agenda del DNS y un paquete de carteles de servidor por grupo de 4.",
        "Imprimir la fitxa d'anatomia d'adreces per a cada alumne/a.|Imprimir la ficha de anatomía de direcciones para cada alumno/a.",
        "Comprovar al projector una web amb https per ensenyar on surt el cadenat al vostre navegador.|Comprobar en el proyector una web con https para enseñar dónde sale el candado en vuestro navegador.",
        "Obrir Numi Tech a tots els ordinadors abans que entri el grup.|Abrir Numi Tech en todos los ordenadores antes de que entre el grupo."
      ]
    },
    plan: [
      { min: 5, t: "Repàs i pregunta inicial|Repaso y pregunta inicial", fase: 'inici',
        fa: "Repassa els cinc passos del viatge amb la classe, demanant un pas a cada alumne/a. Després planteja la pregunta: com sap el navegador on ha d'anar amb un munt de lletres?|Repasa los cinco pasos del viaje con la clase, pidiendo un paso a cada alumno/a. Después plantea la pregunta: ¿cómo sabe el navegador adónde tiene que ir con un montón de letras?",
        diu: ["Qui recorda el primer pas del viatge?|¿Quién recuerda el primer paso del viaje?",
          "Avui posarem la lupa al primer i al segon pas: l'adreça i el DNS.|Hoy pondremos la lupa en el primer y el segundo paso: la dirección y el DNS."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "URL, DNS, IP i cadenat|URL, DNS, IP y candado", fase: 'teoria',
        fa: "Desmunta una adreça a la pissarra en tres colors: protocol, domini i ruta. Explica el DNS com l'agenda del mòbil i escriu una IP de llibre. Parla de les extensions i del cadenat, i acaba amb el truc de la primera barra per trobar el domini que mana.|Desmonta una dirección en la pizarra en tres colores: protocolo, dominio y ruta. Explica el DNS como la agenda del móvil y escribe una IP de libro. Habla de las extensiones y del candado, y termina con el truco de la primera barra para encontrar el dominio que manda.",
        diu: ["Vosaltres recordeu el número de mòbil dels amics o busqueu el nom a l'agenda?|¿Vosotros recordáis el número de móvil de los amigos o buscáis el nombre en la agenda?",
          "Aquests números són de llibre: estan reservats per a exemples i no porten a cap web real.|Estos números son de libro: están reservados para ejemplos y no llevan a ninguna web real.",
          "El cadenat vol dir que ningú no llegeix els paquets pel camí, no que la web sigui bona.|El candado significa que nadie lee los paquetes por el camino, no que la web sea buena.",
          "Busqueu la primera barra i mireu les dues peces d'abans: aquest és el domini que mana.|Buscad la primera barra y mirad las dos piezas de antes: ese es el dominio que manda."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "L'agenda del DNS|La agenda del DNS", fase: 'desconnectat',
        fa: "En grups de 4: un DNS amb l'agenda, dos o tres servidors amb el seu número en un cartell i un navegador que demana adreces de les targetes. Inclou al final les adreces amb una lletra canviada: el DNS ha de respondre que no les té (o que són d'un altre). Canvieu els rols a mitja activitat.|En grupos de 4: un DNS con la agenda, dos o tres servidores con su número en un cartel y un navegador que pide direcciones de las tarjetas. Incluye al final las direcciones con una letra cambiada: el DNS tiene que responder que no las tiene (o que son de otro). Cambiad los roles a mitad de actividad.",
        diu: ["DNS: només podeu dir números que siguin a la vostra agenda.|DNS: solo podéis decir números que estén en vuestra agenda.",
          "Una lletra de diferència és un domini totalment diferent.|Una letra de diferencia es un dominio totalmente diferente.",
          "Navegador: a quin servidor aneu amb aquest número?|Navegador: ¿a qué servidor vais con este número?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla. A l'app, el pas «L'agenda del DNS» es marca com a fet.|Ninguna: actividad sin pantalla. En la app, el paso «La agenda del DNS» se marca como hecho.", org: "Grups de 4 amb rols|Grupos de 4 con roles" },
      { min: 13, t: "A l'ordinador: descobreix, prediu i investiga|En el ordenador: descubre, predice e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. Al pas de l'adreça disfressada, demana a qui s'equivoqui que busqui la primera barra amb el dit sobre la pantalla abans de tornar-ho a provar.|Cada alumno/a avanza hasta la pausa activa. En el paso de la dirección disfrazada, pide a quien se equivoque que busque la primera barra con el dedo sobre la pantalla antes de volver a intentarlo.",
        diu: ["On és la primera barra? Quines dues peces hi ha just abans?|¿Dónde está la primera barra? ¿Qué dos piezas hay justo antes?",
          "Abans de triar, digues en veu baixa quina part és el domini.|Antes de elegir, di en voz baja qué parte es el dominio."],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: la història, les sis targetes, «L'agenda del DNS» (ja fet), ordenar les parts de l'adreça, la pregunta del domini, prediu el resultat i l'adreça disfressada.|De «La misión» hasta «Investiga»: la historia, las seis tarjetas, «La agenda del DNS» (ya hecho), ordenar las partes de la dirección, la pregunta del dominio, predice el resultado y la dirección disfrazada.", org: "Individual|Individual" },
      { min: 12, t: "Reptes amb adreces|Retos con direcciones", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Resol a la pissarra la primera línia del repte d'anatomia i deixa'ls continuar. Recorda que al repte de l'agenda els quatre números han d'anar del 0 al 255. El repte extra és el detectiu del domini que mana.|Haced la pausa activa todos juntos. Resuelve en la pizarra la primera línea del reto de anatomía y deja que continúen. Recuerda que en el reto de la agenda los cuatro números tienen que ir del 0 al 255. El reto extra es el detective del dominio que manda.",
        diu: ["Podeu copiar i enganxar trossos de l'adreça: és el que fan els programadors.|Podéis copiar y pegar trozos de la dirección: es lo que hacen los programadores.",
          "Quin és el número més gran que pot tenir cada tros d'una IP?|¿Cuál es el número más grande que puede tener cada trozo de una IP?",
          "Les adreces de la vostra llista: inventades amb «exemple» o webs que conegueu bé.|Las direcciones de vuestra lista: inventadas con «exemple» o webs que conozcáis bien."],
        slides: ['s13', 's14'], app: "«Pausa activa» i «Reptes»: anatomia d'una adreça, l'agenda del DNS, arreglar la llista, les adreces preferides i el repte extra del detectiu.|«Pausa activa» y «Retos»: anatomía de una dirección, la agenda del DNS, arreglar la lista, las direcciones preferidas y el reto extra del detective.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: les meves adreces de confiança|Crea: mis direcciones de confianza", fase: 'crea',
        fa: "Cada alumne/a fa la seva guia d'adreces amb tres webs explicades i un consell sobre el cadenat o el domini. Passeja i comprova que no hi posen dades personals.|Cada alumno/a hace su guía de direcciones con tres webs explicadas y un consejo sobre el candado o el dominio. Pasea y comprueba que no ponen datos personales.",
        diu: ["Quin consell donaríeu a un amic abans de tocar una adreça?|¿Qué consejo daríais a un amigo antes de tocar una dirección?",
          "Res de dades personals: ni adreces de casa ni telèfons.|Nada de datos personales: ni direcciones de casa ni teléfonos."],
        slides: ['s15'], app: "Pas «Crea»: Les meves adreces de confiança.|Paso «Crea»: Mis direcciones de confianza.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum. Que responguin les preguntes finals de l'app i fes el tiquet a la porta.|Repasa las tres ideas con el resumen. Que respondan las preguntas finales de la app y haz el ticket en la puerta.",
        diu: ["Què fa el DNS, en una frase?|¿Qué hace el DNS, en una frase?",
          "El cadenat vol dir que la web és bona?|¿El candado significa que la web es buena?"],
        slides: ['s16', 's17'], app: "«Tancament»: dues preguntes i com m'he sentit.|«Cierre»: dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Pensa que el domini és tota l'adreça, ruta inclosa.|Piensa que el dominio es toda la dirección, ruta incluida.",
        "Que encercli amb el dit des de després de les dues barres fins a la primera barra sola: això és el domini.|Que rodee con el dedo desde después de las dos barras hasta la primera barra sola: eso es el dominio."],
      ["Creu que el cadenat vol dir que la web és de confiança.|Cree que el candado significa que la web es de confianza.",
        "Torna a la imatge de la carta en codi secret: el cadenat protegeix el viatge, però no diu qui hi ha a l'altra banda.|Vuelve a la imagen de la carta en código secreto: el candado protege el viaje, pero no dice quién hay al otro lado."],
      ["Escriu IP amb números més grans de 255 o amb només tres números.|Escribe IP con números mayores de 255 o con solo tres números.",
        "Que compti els punts (n'hi ha d'haver tres) i que revisi cada número un per un.|Que cuente los puntos (tiene que haber tres) y que revise cada número uno por uno."],
      ["Es deixa enganyar per la paraula coneguda dins una adreça disfressada.|Se deja engañar por la palabra conocida dentro de una dirección disfrazada.",
        "Que llegeixi l'adreça de dreta a esquerra des de la primera barra: les dues primeres peces que troba són les que manen.|Que lea la dirección de derecha a izquierda desde la primera barra: las dos primeras piezas que encuentra son las que mandan."],
      ["En afegir negretes, tanca el paràgraf abans que la negreta.|Al añadir negritas, cierra el párrafo antes que la negrita.",
        "Recorda-li la regla de les nines russes: l'última etiqueta que obres és la primera que tanques.|Recuérdale la regla de las muñecas rusas: la última etiqueta que abres es la primera que cierras."]
    ],
    diff: {
      mes: "Inventar tres adreces disfressades per a un company/a i que les desxifri. Afegir a la guia d'adreces un paràgraf que expliqui la diferència entre .cat, .es i .com.|Inventar tres direcciones disfrazadas para un compañero/a y que las descifre. Añadir a la guía de direcciones un párrafo que explique la diferencia entre .cat, .es y .com.",
      menys: "Treballar amb la fitxa d'anatomia al costat i acolorir cada part de l'adreça abans d'escriure-la a l'editor. Fer el repte de l'agenda copiant una línia sencera i canviant només l'últim número.|Trabajar con la ficha de anatomía al lado y colorear cada parte de la dirección antes de escribirla en el editor. Hacer el reto de la agenda copiando una línea entera y cambiando solo el último número."
    },
    aval: {
      ticket: ["Digues les tres parts d'una adreça web.|Di las tres partes de una dirección web.",
        "Què vol dir el cadenat? I què no vol dir?|¿Qué significa el candado? ¿Y qué no significa?"],
      rubric: [
        ["Parts de l'adreça|Partes de la dirección", "Separa sense errors protocol, domini i ruta en adreces noves.|Separa sin errores protocolo, dominio y ruta en direcciones nuevas.", "Troba el domini però confon on comença la ruta.|Encuentra el dominio pero confunde dónde empieza la ruta."],
        ["DNS i IP|DNS e IP", "Explica el DNS com una agenda i escriu IP vàlides.|Explica el DNS como una agenda y escribe IP válidas.", "Sap que el DNS dona un número, però escriu IP amb errors.|Sabe que el DNS da un número, pero escribe IP con errores."],
        ["Lectura crítica d'adreces|Lectura crítica de direcciones", "Troba el domini que mana en una adreça disfressada i explica el cadenat amb precisió.|Encuentra el dominio que manda en una dirección disfrazada y explica el candado con precisión.", "Necessita ajuda per trobar el domini real o creu que el cadenat garanteix la web.|Necesita ayuda para encontrar el dominio real o cree que el candado garantiza la web."],
        ["Pàgina d'adreces|Página de direcciones", "Fa una pàgina amb tres adreces explicades i un consell, sense errors d'etiquetes.|Hace una página con tres direcciones explicadas y un consejo, sin errores de etiquetas.", "La pàgina té adreces però poques explicacions o algun error d'etiquetes.|La página tiene direcciones pero pocas explicaciones o algún error de etiquetas."]
      ]
    },
    casa: "A casa, mireu junts l'adreça de tres webs que feu servir i digueu-ne el domini i l'extensió. Comproveu si tenen cadenat i recordeu què vol dir.|En casa, mirad juntos la dirección de tres webs que uséis y decid su dominio y su extensión. Comprobad si tienen candado y recordad qué significa.",
    slides: [
      { id: 's1', k: 'portada', t: "Adreces i dominis|Direcciones y dominios", x: "Aprendrem a llegir adreces web com experts.|Aprenderemos a leer direcciones web como expertos.",
        nota: "Connecta amb la sessió anterior: avui aprofundim en els dos primers passos del viatge.|Conecta con la sesión anterior: hoy profundizamos en los dos primeros pasos del viaje." },
      { id: 's2', k: 'pregunta', t: "Com sap el navegador on ha d'anar?|¿Cómo sabe el navegador adónde tiene que ir?", x: "Només li donem un munt de lletres i punts…|Solo le damos un montón de letras y puntos…",
        nota: "Recull hipòtesis. Algú pot recordar el DNS de la sessió passada.|Recoge hipótesis. Alguien puede recordar el DNS de la sesión pasada." },
      { id: 's3', k: 'repas', t: "Recordem el viatge|Recordemos el viaje", punts: ["Escrius l'adreça|Escribes la dirección", "El DNS diu el número|El DNS dice el número", "Petició, resposta en paquets i dibuix|Petición, respuesta en paquetes y dibujo"],
        nota: "Demana un pas a cada alumne/a. Remarca que avui treballem els dos primers.|Pide un paso a cada alumno/a. Remarca que hoy trabajamos los dos primeros." },
      { id: 's4', k: 'anim', t: "Les parts d'una URL|Las partes de una URL", anim: 'wurl', x: "Protocol, domini i ruta: com parlem, a quin servidor anem i quin fitxer volem.|Protocolo, dominio y ruta: cómo hablamos, a qué servidor vamos y qué archivo queremos.",
        nota: "Escriu una adreça a la pissarra i encercla cada part amb un color diferent.|Escribe una dirección en la pizarra y rodea cada parte con un color diferente." },
      { id: 's5', k: 'anim', t: "El DNS, l'agenda d'internet|El DNS, la agenda de internet", anim: 'wdns', x: "Tu dius el nom; el DNS respon amb el número del servidor.|Tú dices el nombre; el DNS responde con el número del servidor.",
        nota: "Compara-ho amb l'agenda del mòbil: ningú no recorda els números, recordem els noms.|Compáralo con la agenda del móvil: nadie recuerda los números, recordamos los nombres." },
      { id: 's6', k: 'concepte', t: "L'adreça IP|La dirección IP", x: "Quatre números del 0 al 255 separats per punts.|Cuatro números del 0 al 255 separados por puntos.",
        code: '<h3>Agenda del DNS</h3>\n<p><b>www.exemple.cat</b> → 203.0.113.7</p>\n<p><b>www.exemple.com</b> → 198.51.100.24</p>',
        nota: "Aquestes IP estan reservades per a documentació i classes: no porten a cap web real.|Estas IP están reservadas para documentación y clases: no llevan a ninguna web real." },
      { id: 's7', k: 'concepte', t: "Extensions de domini|Extensiones de dominio", punts: [".cat: llengua i cultura catalanes|.cat: lengua y cultura catalanas", ".es: Espanya|.es: España", ".com: pensada per a empreses|.com: pensada para empresas", ".org: organitzacions|.org: organizaciones"],
        nota: "Cada domini es registra i només té un propietari: per això una sola lletra canviada és una web diferent.|Cada dominio se registra y solo tiene un propietario: por eso una sola letra cambiada es una web diferente." },
      { id: 's8', k: 'anim', t: "https i el cadenat|https y el candado", anim: 'wpackets', x: "Els paquets viatgen xifrats. Protegeix el viatge, no diu qui és a l'altra banda.|Los paquetes viajan cifrados. Protege el viaje, no dice quién está al otro lado.",
        nota: "Si pots, ensenya el cadenat al navegador del projector. Insisteix: una web falsa també pot tenir cadenat.|Si puedes, enseña el candado en el navegador del proyector. Insiste: una web falsa también puede tener candado." },
      { id: 's9', k: 'concepte', t: "Quin domini mana?|¿Qué dominio manda?", x: "Busca la primera barra i mira les dues peces d'abans.|Busca la primera barra y mira las dos piezas de antes.",
        code: 'https://ca.wikipedia.org/wiki/Lleida\nhttps://ca.wikipedia.org.regals-exemple.xyz/premi',
        nota: "La segona adreça porta a regals-exemple.xyz. Anuncia que a la unitat 7 seran detectius de webs falses.|La segunda dirección lleva a regals-exemple.xyz. Anuncia que en la unidad 7 serán detectives de webs falsas." },
      { id: 's10', k: 'activitat', t: "L'agenda del DNS|La agenda del DNS", timer: 10, punts: ["DNS: té l'agenda de noms i números.|DNS: tiene la agenda de nombres y números.", "Servidors: cada un amb el seu número en un cartell.|Servidores: cada uno con su número en un cartel.", "Navegador: demana adreces senceres.|Navegador: pide direcciones enteras."],
        nota: "Guarda per al final les adreces amb una lletra canviada. Canvieu els rols a mitja activitat.|Guarda para el final las direcciones con una letra cambiada. Cambiad los roles a mitad de actividad." },
      { id: 's11', k: 'activitat', t: "Regles de l'agenda|Reglas de la agenda", punts: ["El DNS només respon el que té apuntat.|El DNS solo responde lo que tiene apuntado.", "El navegador va al número, no al nom.|El navegador va al número, no al nombre.", "Una lletra diferent = un domini diferent.|Una letra diferente = un dominio diferente."],
        nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre «Adreces i dominis».|Abre «Direcciones y dominios».", "Ordena les parts d'una adreça.|Ordena las partes de una dirección.", "Troba l'adreça disfressada.|Encuentra la dirección disfrazada.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas «L'agenda del DNS» de l'app, que marquin que ja l'han fet.|En el paso «La agenda del DNS» de la app, que marquen que ya lo han hecho." },
      { id: 's13', k: 'repte', t: "Reptes amb adreces|Retos con direcciones", timer: 12, punts: ["1. Anatomia d'una adreça|1. Anatomía de una dirección", "2. L'agenda del DNS|2. La agenda del DNS", "3. Arregla la llista|3. Arregla la lista", "4. Les meves adreces preferides|4. Mis direcciones preferidas"],
        code: '<p>Adreça: https://www.exemple.cat/receptes/pizza.html</p>\n<p>Protocol: https://</p>\n<p>Domini: www.exemple.cat</p>\n<p>Ruta: /receptes/pizza.html</p>',
        nota: "Resol en directe només la línia del protocol; la resta, que la facin sols.|Resuelve en directo solo la línea del protocolo; el resto, que lo hagan solos." },
      { id: 's14', k: 'pregunta', t: "IP vàlida o no?|¿IP válida o no?", punts: ["203.0.113.7|203.0.113.7", "198.51.100.300|198.51.100.300", "192.0.2|192.0.2", "203.0.113.255|203.0.113.255"],
        nota: "Vàlides: la primera i l'última. La segona té un número massa gran i la tercera només té tres números.|Válidas: la primera y la última. La segunda tiene un número demasiado grande y la tercera solo tiene tres números." },
      { id: 's15', k: 'activitat', t: "Crea: adreces de confiança|Crea: direcciones de confianza", timer: 5, x: "Tres adreces explicades i un consell per llegir-les bé.|Tres direcciones explicadas y un consejo para leerlas bien.",
        nota: "Recorda: res de dades personals a la pàgina.|Recuerda: nada de datos personales en la página." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Una URL té protocol, domini i ruta.|Una URL tiene protocolo, dominio y ruta.", "El DNS tradueix noms a números IP.|El DNS traduce nombres a números IP.", "El cadenat xifra el viatge: el domini diu qui hi ha.|El candado cifra el viaje: el dominio dice quién hay."],
        nota: "Torna a la pregunta de l'inici: el navegador va on li diu el DNS.|Vuelve a la pregunta del inicio: el navegador va adonde le dice el DNS." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Les tres parts d'una adreça.|Las tres partes de una dirección.", "Què vol dir el cadenat i què no.|Qué significa el candado y qué no."],
        nota: "Anota qui creu que el cadenat garanteix la web: ho reprendrem a la unitat 7.|Anota quién cree que el candado garantiza la web: lo retomaremos en la unidad 7." }
    ],
    print: [
      { id: 'p1', t: "Agenda del DNS i cartells de servidor|Agenda del DNS y carteles de servidor", k: 'targetes',
        intro: "Un paquet per grup de 4. L'agenda és per al DNS; cada cartell, per a un servidor; les adreces, per al navegador.|Un paquete por grupo de 4. La agenda es para el DNS; cada cartel, para un servidor; las direcciones, para el navegador.",
        items: [
          { t: "Agenda del DNS: www.gats-del-barri.cat → 203.0.113.12 · www.receptes-exemple.es → 203.0.113.88 · www.biblio-exemple.cat → 198.51.100.24|Agenda del DNS: www.gats-del-barri.cat → 203.0.113.12 · www.receptes-exemple.es → 203.0.113.88 · www.biblio-exemple.cat → 198.51.100.24", n: 1 },
          { t: "Servidor 203.0.113.12|Servidor 203.0.113.12", n: 1 }, { t: "Servidor 203.0.113.88|Servidor 203.0.113.88", n: 1 }, { t: "Servidor 198.51.100.24|Servidor 198.51.100.24", n: 1 },
          { t: "Adreça: https://www.gats-del-barri.cat/fotos|Dirección: https://www.gats-del-barri.cat/fotos", n: 1 },
          { t: "Adreça: https://www.receptes-exemple.es/pizza.html|Dirección: https://www.receptes-exemple.es/pizza.html", n: 1 },
          { t: "Adreça trampa: https://www.gat-del-barri.cat/fotos|Dirección trampa: https://www.gat-del-barri.cat/fotos", n: 1 },
          { t: "Adreça trampa: https://www.biblio-exemple.cat.regals-exemple.xyz|Dirección trampa: https://www.biblio-exemple.cat.regals-exemple.xyz", n: 1 }
        ] },
      { id: 'p2', t: "Fitxa: anatomia d'adreces|Ficha: anatomía de direcciones", k: 'fitxa',
        intro: "Acoloreix el protocol en blau, el domini en verd i la ruta en taronja. Després respon.|Colorea el protocolo en azul, el dominio en verde y la ruta en naranja. Después responde.",
        items: [
          { q: "https://www.exemple.cat/fotos/gat.html: quin és el domini? I la ruta?|https://www.exemple.cat/fotos/gat.html: ¿cuál es el dominio? ¿Y la ruta?", sol: "Domini: www.exemple.cat. Ruta: /fotos/gat.html.|Dominio: www.exemple.cat. Ruta: /fotos/gat.html." },
          { q: "Escriu dues IP vàlides i una que no ho sigui. Explica per què no ho és.|Escribe dos IP válidas y una que no lo sea. Explica por qué no lo es.", sol: "Per exemple 203.0.113.7 i 192.0.2.15 són vàlides; 203.0.113.700 no, perquè 700 passa de 255.|Por ejemplo 203.0.113.7 y 192.0.2.15 son válidas; 203.0.113.700 no, porque 700 pasa de 255." },
          { q: "https://ca.wikipedia.org.regals-exemple.xyz/premi: a quin domini porta de veritat?|https://ca.wikipedia.org.regals-exemple.xyz/premi: ¿a qué dominio lleva de verdad?", sol: "A regals-exemple.xyz: són les dues peces just abans de la primera barra.|A regals-exemple.xyz: son las dos piezas justo antes de la primera barra." },
          { q: "Una web té cadenat. Vol dir que és de confiança? Explica-ho.|Una web tiene candado. ¿Significa que es de confianza? Explícalo.", sol: "No. Vol dir que els paquets viatgen xifrats; qui hi ha a l'altra banda ho diu el domini.|No. Significa que los paquetes viajan cifrados; quién hay al otro lado lo dice el dominio." }
        ] }
    ]
  },

  /* ===== w1-3 · Què hi ha dins una web? ===== */
  'w1-3': {
    obj: [
      "L'alumne/a explica que una web és una carpeta de fitxers i reconeix index.html, estil.css i la carpeta img.|El alumno/a explica que una web es una carpeta de archivos y reconoce index.html, estil.css y la carpeta img.",
      "L'alumne/a distingeix el contingut (HTML) de l'aspecte (CSS) en una pàgina.|El alumno/a distingue el contenido (HTML) del aspecto (CSS) en una página.",
      "L'alumne/a sap obrir el codi font d'una web i fa servir els Raigs X per relacionar codi i pàgina.|El alumno/a sabe abrir el código fuente de una web y usa los Rayos X para relacionar código y página.",
      "L'alumne/a modifica una web de dos fitxers: canvia contingut, un color al CSS, el nom d'un enllaç d'estil i hi afegeix una imatge.|El alumno/a modifica una web de dos archivos: cambia contenido, un color en el CSS, el nombre de un enlace de estilo y añade una imagen."
    ],
    comp: [
      "Competència digital: entendre l'estructura d'una web i els fitxers que la formen|Competencia digital: entender la estructura de una web y los archivos que la forman",
      "Pensament computacional: separar el contingut de la presentació|Pensamiento computacional: separar el contenido de la presentación",
      "Comunicació audiovisual: com el disseny canvia la manera de llegir un mateix contingut|Comunicación audiovisual: cómo el diseño cambia la manera de leer un mismo contenido",
      "Aprendre a aprendre: investigar el codi d'altres webs per aprendre'n|Aprender a aprender: investigar el código de otras webs para aprender de él"
    ],
    vocab: [
      ["Fitxer|Archivo", "Un document amb nom i extensió, com index.html o estil.css.|Un documento con nombre y extensión, como index.html o estil.css."],
      ["index.html|index.html", "La pàgina principal d'una web: la que s'obre si no dius cap ruta.|La página principal de una web: la que se abre si no dices ninguna ruta."],
      ["HTML|HTML", "El llenguatge que diu què hi ha a la pàgina: el contingut.|El lenguaje que dice qué hay en la página: el contenido."],
      ["CSS|CSS", "El llenguatge que diu com es veu la pàgina: colors, mides, lletres.|El lenguaje que dice cómo se ve la página: colores, tamaños, letras."],
      ["Codi font|Código fuente", "El text HTML que envia el servidor i que es pot mirar des del navegador.|El texto HTML que envía el servidor y que se puede mirar desde el navegador."],
      ["Ruta d'una imatge|Ruta de una imagen", "On és el fitxer de la imatge, per exemple img/gat.svg.|Dónde está el archivo de la imagen, por ejemplo img/gat.svg."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Què hi ha dins una web?»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «¿Qué hay dentro de una web?»",
        "Projector, la presentació i un navegador obert per ensenyar el codi font d'una web real|Proyector, la presentación y un navegador abierto para enseñar el código fuente de una web real",
        "Per parella: tres sobres o carpetes de paper, fulls i colors|Por pareja: tres sobres o carpetas de papel, hojas y colores"
      ],
      imprimir: ["Sobres i peces de la web desmuntada|Sobres y piezas de la web desmontada", "Fitxa: contingut o aspecte?|Ficha: ¿contenido o aspecto?"],
      prep: [
        "Imprimir les etiquetes dels sobres i les targetes d'instruccions d'estil, un paquet per parella.|Imprimir las etiquetas de los sobres y las tarjetas de instrucciones de estilo, un paquete por pareja.",
        "Triar una web senzilla i de confiança per ensenyar el codi font al projector (per exemple, la de l'escola) i provar abans la drecera.|Elegir una web sencilla y de confianza para enseñar el código fuente en el proyector (por ejemplo, la de la escuela) y probar antes el atajo.",
        "Imprimir la fitxa de contingut o aspecte per a cada alumne/a.|Imprimir la ficha de contenido o aspecto para cada alumno/a.",
        "Obrir Numi Tech a tots els ordinadors.|Abrir Numi Tech en todos los ordenadores."
      ]
    },
    plan: [
      { min: 5, t: "Repàs i pregunta inicial|Repaso y pregunta inicial", fase: 'inici',
        fa: "Repassa les parts d'una adreça i el DNS. Pregunta què creuen que hi ha dins una web: és una foto? un programa? un text? Recull respostes.|Repasa las partes de una dirección y el DNS. Pregunta qué creen que hay dentro de una web: ¿es una foto? ¿un programa? ¿un texto? Recoge respuestas.",
        diu: ["Quan el servidor respon, què us envia exactament?|Cuando el servidor responde, ¿qué os envía exactamente?",
          "Avui obrirem una web com qui obre un rellotge per veure'n les peces.|Hoy abriremos una web como quien abre un reloj para ver sus piezas."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Fitxers, codi font, HTML i CSS|Archivos, código fuente, HTML y CSS", fase: 'teoria',
        fa: "Mostra que una web és una carpeta de fitxers. Obre el codi font d'una web real al projector i fes veure les etiquetes i el sagnat. Explica les etiquetes d'obrir i tancar, i compara la mateixa pàgina sense CSS i amb CSS. Acaba amb la pregunta de contingut o aspecte.|Muestra que una web es una carpeta de archivos. Abre el código fuente de una web real en el proyector y haz ver las etiquetas y la sangría. Explica las etiquetas de abrir y cerrar, y compara la misma página sin CSS y con CSS. Termina con la pregunta de contenido o aspecto.",
        diu: ["Tota web, fins i tot la més gran, s'acaba enviant com a fitxers de text.|Toda web, incluso la más grande, se acaba enviando como archivos de texto.",
          "L'HTML és l'esquelet; el CSS, la roba.|El HTML es el esqueleto; el CSS, la ropa.",
          "El fitxer HTML no porta la imatge a dins: només diu on és.|El archivo HTML no lleva la imagen dentro: solo dice dónde está."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "La web desmuntada|La web desmontada", fase: 'desconnectat',
        fa: "En parelles, preparen els tres sobres: index.html amb el contingut escrit, estil.css amb instruccions d'aspecte en paraules i img amb el dibuix. Després fan de navegador i dibuixen la pàgina final. Per acabar, intercanvien només el sobre d'estil amb una altra parella i tornen a dibuixar.|En parejas, preparan los tres sobres: index.html con el contenido escrito, estil.css con instrucciones de aspecto en palabras e img con el dibujo. Después hacen de navegador y dibujan la página final. Para terminar, intercambian solo el sobre de estilo con otra pareja y vuelven a dibujar.",
        diu: ["Al sobre d'index.html, només text: res de colors!|En el sobre de index.html, solo texto: ¡nada de colores!",
          "Mateix contingut, estil diferent: és la mateixa web?|Mismo contenido, estilo diferente: ¿es la misma web?",
          "Quin nom té el fitxer de la imatge? Escriviu-lo sencer.|¿Qué nombre tiene el archivo de la imagen? Escribidlo entero."],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla. A l'app, el pas «La web desmuntada» es marca com a fet.|Ninguna: actividad sin pantalla. En la app, el paso «La web desmontada» se marca como hecho.", org: "Parelles|Parejas" },
      { min: 13, t: "A l'ordinador: descobreix, prediu i investiga|En el ordenador: descubre, predice e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. A l'editor lliure, anima'ls a canviar colors de l'estil.css i a fer servir els Raigs X. Al pas de la imatge que no surt, fes que comparin lletra a lletra el nom de la carpeta.|Cada alumno/a avanza hasta la pausa activa. En el editor libre, anímales a cambiar colores del estil.css y a usar los Rayos X. En el paso de la imagen que no sale, haz que comparen letra a letra el nombre de la carpeta.",
        diu: ["Proveu colors en anglès: tomato, gold, orchid…|Probad colores en inglés: tomato, gold, orchid…",
          "La carpeta es diu img: el navegador no endevina res.|La carpeta se llama img: el navegador no adivina nada."],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: la història, les sis targetes, «La web desmuntada» (ja fet), quin fitxer canviaries, prediu el resultat amb CSS, la imatge que no surt i el laboratori de colors.|De «La misión» hasta «Investiga»: la historia, las seis tarjetas, «La web desmontada» (ya hecho), qué archivo cambiarías, predice el resultado con CSS, la imagen que no sale y el laboratorio de colores.", org: "Individual|Individual" },
      { min: 12, t: "Reptes amb dos fitxers|Retos con dos archivos", fase: 'ordinador',
        fa: "Feu la pausa activa. Ensenya on són les pestanyes index.html i estil.css de l'editor. Deixa'ls fer els reptes; al de l'estil perdut, projecta la diapositiva del link i fes notar que el nom ha de ser exacte. El repte extra demana canviar dos valors al CSS.|Haced la pausa activa. Enseña dónde están las pestañas index.html y estil.css del editor. Deja que hagan los retos; en el del estilo perdido, proyecta la diapositiva del link y haz notar que el nombre tiene que ser exacto. El reto extra pide cambiar dos valores en el CSS.",
        diu: ["A quina pestanya heu de ser per canviar un color?|¿En qué pestaña tenéis que estar para cambiar un color?",
          "Al CSS, no esborreu els dos punts ni el punt i coma.|En el CSS, no borréis los dos puntos ni el punto y coma.",
          "Compareu el nom del link amb el nom de la pestanya, lletra a lletra.|Comparad el nombre del link con el nombre de la pestaña, letra a letra."],
        slides: ['s13', 's14'], app: "«Pausa activa» i «Reptes»: canviar el contingut, canviar el color del títol, recuperar l'estil perdut, afegir una imatge i el repte extra de dos canvis.|«Pausa activa» y «Retos»: cambiar el contenido, cambiar el color del título, recuperar el estilo perdido, añadir una imagen y el reto extra de dos cambios.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la meva web per dins|Crea: mi web por dentro", fase: 'crea',
        fa: "Cada alumne/a fa una web de dos fitxers sobre un tema que li agradi: contingut i imatge a l'index.html i colors propis a l'estil.css. Passeja i fes preguntes: aquest canvi, a quin fitxer l'has fet?|Cada alumno/a hace una web de dos archivos sobre un tema que le guste: contenido e imagen en el index.html y colores propios en el estil.css. Pasea y haz preguntas: este cambio, ¿en qué archivo lo has hecho?",
        diu: ["Primer el contingut, després els colors.|Primero el contenido, después los colores.",
          "Tria colors que es llegeixin bé: text fosc sobre fons clar, o al revés.|Elegid colores que se lean bien: texto oscuro sobre fondo claro, o al revés."],
        slides: ['s15'], app: "Pas «Crea»: La meva web per dins.|Paso «Crea»: Mi web por dentro.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum. Que responguin les dues preguntes de l'app i fes el tiquet a la porta.|Repasa el resumen. Que respondan las dos preguntas de la app y haz el ticket en la puerta.",
        diu: ["Si vull canviar un text, quin fitxer obro? I si vull canviar un color?|Si quiero cambiar un texto, ¿qué archivo abro? ¿Y si quiero cambiar un color?",
          "Què passa si el link té el nom mal escrit?|¿Qué pasa si el link tiene el nombre mal escrito?"],
        slides: ['s16', 's17'], app: "«Tancament»: dues preguntes i com m'he sentit.|«Cierre»: dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Intenta canviar un color escrivint-lo a l'index.html.|Intenta cambiar un color escribiéndolo en el index.html.",
        "Pregunta: això és contingut o aspecte? Si és aspecte, a quina pestanya va?|Pregunta: ¿esto es contenido o aspecto? Si es aspecto, ¿en qué pestaña va?"],
      ["Escriu els colors en català o castellà (vermell, rojo).|Escribe los colores en catalán o castellano (vermell, rojo).",
        "Explica que el CSS només entén els noms en anglès i deixa'l triar de la llista de suggeriments de l'editor.|Explica que el CSS solo entiende los nombres en inglés y deja que elija de la lista de sugerencias del editor."],
      ["Esborra els dos punts o el punt i coma en canviar un valor al CSS.|Borra los dos puntos o el punto y coma al cambiar un valor en el CSS.",
        "Que desfaci i seleccioni només la paraula del valor abans d'escriure.|Que deshaga y seleccione solo la palabra del valor antes de escribir."],
      ["Posa la imatge amb una carpeta inventada o un nom que no existeix.|Pone la imagen con una carpeta inventada o un nombre que no existe.",
        "Que miri la llista d'imatges de la carpeta img als suggeriments i copiï el nom exacte.|Que mire la lista de imágenes de la carpeta img en las sugerencias y copie el nombre exacto."],
      ["Deixa l'atribut alt buit.|Deja el atributo alt vacío.",
        "Pregunta com ho explicaria a algú que no veu la imatge: aquesta frase curta és l'alt.|Pregunta cómo se lo explicaría a alguien que no ve la imagen: esa frase corta es el alt."]
    ],
    diff: {
      mes: "Afegir a la web del «Crea» una segona imatge i canviar també el color dels paràgrafs i la mida de la lletra. Mirar el codi font de dues webs conegudes i comptar quins fitxers CSS enllacen.|Añadir a la web del «Crea» una segunda imagen y cambiar también el color de los párrafos y el tamaño de la letra. Mirar el código fuente de dos webs conocidas y contar qué archivos CSS enlazan.",
      menys: "Fer els reptes amb la fitxa de contingut o aspecte al costat. Al repte del color, triar el valor de la llista de suggeriments de l'editor en lloc d'escriure'l.|Hacer los retos con la ficha de contenido o aspecto al lado. En el reto del color, elegir el valor de la lista de sugerencias del editor en lugar de escribirlo."
    },
    aval: {
      ticket: ["Quins tres elements té la carpeta d'una web senzilla?|¿Qué tres elementos tiene la carpeta de una web sencilla?",
        "Digues una cosa que va a l'HTML i una que va al CSS.|Di una cosa que va en el HTML y una que va en el CSS."],
      rubric: [
        ["Fitxers d'una web|Archivos de una web", "Anomena index.html, estil.css i img i explica què guarda cadascun.|Nombra index.html, estil.css e img y explica qué guarda cada uno.", "Reconeix els fitxers però no sap explicar per a què serveix cadascun.|Reconoce los archivos pero no sabe explicar para qué sirve cada uno."],
        ["Contingut i aspecte|Contenido y aspecto", "Decideix sense dubtar si un canvi va a l'HTML o al CSS.|Decide sin dudar si un cambio va en el HTML o en el CSS.", "De vegades busca els colors a l'HTML.|A veces busca los colores en el HTML."],
        ["Web de dos fitxers|Web de dos archivos", "Canvia contingut, colors i imatge sense errors i manté el link.|Cambia contenido, colores e imagen sin errores y mantiene el link.", "Fa els canvis amb ajuda o trenca el link o el CSS en algun moment.|Hace los cambios con ayuda o rompe el link o el CSS en algún momento."]
      ]
    },
    casa: "A casa, amb un ordinador, obriu el codi font d'una web que feu servir i busqueu-hi un títol i una imatge. Expliqueu a la família la diferència entre HTML i CSS amb l'exemple de l'esquelet i la roba.|En casa, con un ordenador, abrid el código fuente de una web que uséis y buscad un título y una imagen. Explicad a la familia la diferencia entre HTML y CSS con el ejemplo del esqueleto y la ropa.",
    slides: [
      { id: 's1', k: 'portada', t: "Què hi ha dins una web?|¿Qué hay dentro de una web?", x: "Obrirem una web per dins i en descobrirem les peces.|Abriremos una web por dentro y descubriremos sus piezas.",
        nota: "Explica que avui tocaran dos fitxers alhora per primer cop.|Explica que hoy tocarán dos archivos a la vez por primera vez." },
      { id: 's2', k: 'pregunta', t: "Què hi ha dins una web?|¿Qué hay dentro de una web?", x: "Una foto? Un programa? Text?|¿Una foto? ¿Un programa? ¿Texto?",
        nota: "Recull respostes i deixa-les a la pissarra per comprovar-les al final.|Recoge respuestas y déjalas en la pizarra para comprobarlas al final." },
      { id: 's3', k: 'repas', t: "Recordem les adreces|Recordemos las direcciones", punts: ["Protocol, domini i ruta|Protocolo, dominio y ruta", "El DNS dona el número IP|El DNS da el número IP", "El cadenat xifra el viatge|El candado cifra el viaje"],
        nota: "Pregunta quina part de l'adreça diu quin fitxer volem: la ruta. Avui veurem quins fitxers hi ha.|Pregunta qué parte de la dirección dice qué archivo queremos: la ruta. Hoy veremos qué archivos hay." },
      { id: 's4', k: 'anim', t: "Una web és una carpeta|Una web es una carpeta", anim: 'wfiles', x: "index.html, estil.css i la carpeta img.|index.html, estil.css y la carpeta img.",
        nota: "Remarca que els noms s'han d'escriure sempre igual, sense espais ni accents.|Remarca que los nombres se tienen que escribir siempre igual, sin espacios ni acentos." },
      { id: 's5', k: 'anim', t: "Veure el codi font|Ver el código fuente", anim: 'wsource', x: "Clic dret, «Veure el codi font», o Ctrl + U.|Clic derecho, «Ver el código fuente», o Ctrl + U.",
        nota: "Fes-ho en directe amb la web que has preparat. No cal entendre-ho tot: busqueu junts un títol.|Hazlo en directo con la web que has preparado. No hace falta entenderlo todo: buscad juntos un título." },
      { id: 's6', k: 'anim', t: "Les etiquetes|Las etiquetas", anim: 'wtag', x: "Obrir, contingut, tancar. La de tancar porta barra.|Abrir, contenido, cerrar. La de cerrar lleva barra.",
        nota: "Només una primera idea: la unitat 2 és tota d'etiquetes.|Solo una primera idea: la unidad 2 es toda de etiquetas." },
      { id: 's7', k: 'concepte', t: "HTML: el contingut|HTML: el contenido", x: "Diu què hi ha: títol, paràgraf, imatge.|Dice qué hay: título, párrafo, imagen.",
        code: '<h1>Les balenes</h1>\n<p>La balena blava és l\'animal més gran del planeta.</p>\n<img src="img/balena.svg" alt="Una balena blava">',
        nota: "Fes notar que la imatge no és dins el fitxer: la línia img només diu on és.|Haz notar que la imagen no está dentro del archivo: la línea img solo dice dónde está." },
      { id: 's8', k: 'concepte', t: "CSS: l'aspecte|CSS: el aspecto", x: "Diu com es veu: colors, mides i lletres. Va a estil.css.|Dice cómo se ve: colores, tamaños y letras. Va en estil.css.",
        code: 'body {\n  background-color: lightcyan;\n}\nh1 {\n  color: navy;\n  font-family: Georgia, serif;\n}',
        nota: "No expliquis la sintaxi encara (unitat 4): només que cada regla diu a qui s'aplica i com.|No expliques la sintaxis todavía (unidad 4): solo que cada regla dice a quién se aplica y cómo." },
      { id: 's9', k: 'pregunta', t: "Contingut o aspecte?|¿Contenido o aspecto?", punts: ["El text del títol|El texto del título", "El color del títol|El color del título", "Una imatge nova|Una imagen nueva", "La mida de la lletra|El tamaño de la letra"],
        nota: "Contingut: el text i la imatge (HTML). Aspecte: el color i la mida (CSS).|Contenido: el texto y la imagen (HTML). Aspecto: el color y el tamaño (CSS)." },
      { id: 's10', k: 'activitat', t: "La web desmuntada|La web desmontada", timer: 10, punts: ["Sobre index.html: el contingut.|Sobre index.html: el contenido.", "Sobre estil.css: com es veu.|Sobre estil.css: cómo se ve.", "Sobre img: el dibuix amb el seu nom.|Sobre img: el dibujo con su nombre.", "Feu de navegador: dibuixeu la pàgina.|Haced de navegador: dibujad la página."],
        nota: "Comprova que al sobre d'index.html no hi ha colors ni mides: només text.|Comprueba que en el sobre de index.html no hay colores ni tamaños: solo texto." },
      { id: 's11', k: 'activitat', t: "Intercanvi d'estil|Intercambio de estilo", x: "Canvieu només el sobre estil.css amb una altra parella i torneu a dibuixar.|Cambiad solo el sobre estil.css con otra pareja y volved a dibujar.",
        nota: "Pregunta: és la mateixa web? Sí: el mateix contingut amb un altre aspecte.|Pregunta: ¿es la misma web? Sí: el mismo contenido con otro aspecto." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre «Què hi ha dins una web?».|Abre «¿Qué hay dentro de una web?».", "Prediu amb HTML i CSS.|Predice con HTML y CSS.", "Al laboratori, canvia colors.|En el laboratorio, cambia colores.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas «La web desmuntada» de l'app, que marquin que ja l'han fet.|En el paso «La web desmontada» de la app, que marquen que ya lo han hecho." },
      { id: 's13', k: 'repte', t: "Reptes amb dos fitxers|Retos con dos archivos", timer: 12, punts: ["1. Canvia el contingut|1. Cambia el contenido", "2. Canvia el color del títol|2. Cambia el color del título", "3. Recupera l'estil perdut|3. Recupera el estilo perdido", "4. Afegeix una imatge|4. Añade una imagen"],
        code: '<link rel="stylesheet" href="estils.css">\n\n<link rel="stylesheet" href="estil.css">',
        nota: "Projecta-la al repte 3: una lletra de més al nom i el navegador no troba el fitxer.|Proyéctala en el reto 3: una letra de más en el nombre y el navegador no encuentra el archivo." },
      { id: 's14', k: 'concepte', t: "La ruta d'una imatge|La ruta de una imagen", x: "Carpeta, barra i nom del fitxer, exactes.|Carpeta, barra y nombre del archivo, exactos.",
        code: '<img src="img/robot.svg" alt="Un robot que saluda">',
        nota: "Recorda que l'alt explica la imatge a qui no la veu. Projecta-la al repte 4.|Recuerda que el alt explica la imagen a quien no la ve. Proyéctala en el reto 4." },
      { id: 's15', k: 'activitat', t: "Crea: la meva web per dins|Crea: mi web por dentro", timer: 5, x: "Contingut i imatge a index.html; colors propis a estil.css.|Contenido e imagen en index.html; colores propios en estil.css.",
        nota: "Pregunta a cada alumne/a a quin fitxer ha fet cada canvi.|Pregunta a cada alumno/a en qué archivo ha hecho cada cambio." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Una web és una carpeta de fitxers.|Una web es una carpeta de archivos.", "HTML = contingut; CSS = aspecte.|HTML = contenido; CSS = aspecto.", "El codi font de qualsevol web es pot mirar.|El código fuente de cualquier web se puede mirar."],
        nota: "Torna a la pregunta del principi: dins una web hi ha fitxers de text.|Vuelve a la pregunta del principio: dentro de una web hay archivos de texto." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Els tres elements de la carpeta d'una web.|Los tres elementos de la carpeta de una web.", "Una cosa de l'HTML i una del CSS.|Una cosa del HTML y una del CSS."],
        nota: "Anota qui confon contingut i aspecte per reforçar-ho a la sessió del projecte.|Anota quién confunde contenido y aspecto para reforzarlo en la sesión del proyecto." }
    ],
    print: [
      { id: 'p1', t: "Sobres i peces de la web desmuntada|Sobres y piezas de la web desmontada", k: 'targetes',
        intro: "Un paquet per parella. Les etiquetes es peguen als sobres; les instruccions d'estil, a l'interior del sobre estil.css.|Un paquete por pareja. Las etiquetas se pegan en los sobres; las instrucciones de estilo, dentro del sobre estil.css.",
        items: [
          { t: "📄 index.html (contingut)|📄 index.html (contenido)", n: 1 }, { t: "🎨 estil.css (aspecte)|🎨 estil.css (aspecto)", n: 1 }, { t: "🖼️ img/ (imatges)|🖼️ img/ (imágenes)", n: 1 },
          { t: "Estil: títol de color verd|Estilo: título de color verde", n: 1 }, { t: "Estil: fons groc clar|Estilo: fondo amarillo claro", n: 1 },
          { t: "Estil: lletra dels paràgrafs grossa|Estilo: letra de los párrafos grande", n: 1 }, { t: "Estil: títol centrat|Estilo: título centrado", n: 1 }
        ] },
      { id: 'p2', t: "Fitxa: contingut o aspecte?|Ficha: ¿contenido o aspecto?", k: 'fitxa',
        intro: "Escriu HTML si el canvi és de contingut o CSS si és d'aspecte.|Escribe HTML si el cambio es de contenido o CSS si es de aspecto.",
        items: [
          { q: "Canviar el text del títol.|Cambiar el texto del título.", sol: "HTML|HTML" },
          { q: "Posar el fons de color blau clar.|Poner el fondo de color azul claro.", sol: "CSS|CSS" },
          { q: "Afegir una foto d'un gat.|Añadir una foto de un gato.", sol: "HTML (la línia img a l'index.html)|HTML (la línea img en el index.html)" },
          { q: "Fer la lletra dels paràgrafs més gran.|Hacer la letra de los párrafos más grande.", sol: "CSS|CSS" },
          { q: "La imatge no surt i la ruta diu imatges/gat.svg. Què passa?|La imagen no sale y la ruta dice imatges/gat.svg. ¿Qué pasa?", sol: "La carpeta es diu img: cal escriure img/gat.svg.|La carpeta se llama img: hay que escribir img/gat.svg." }
        ] }
    ]
  },

  /* ===== w1-4 · Projecte: el mapa d'internet ===== */
  'w1-4': {
    obj: [
      "L'alumne/a planifica una pàgina amb un esbós abans de programar-la.|El alumno/a planifica una página con un boceto antes de programarla.",
      "L'alumne/a fa una llista numerada amb ol i li, i hi ordena els cinc passos del viatge d'una pàgina.|El alumno/a hace una lista numerada con ol y li, y ordena en ella los cinco pasos del viaje de una página.",
      "L'alumne/a afegeix una imatge amb src i un alt que la descriu.|El alumno/a añade una imagen con src y un alt que la describe.",
      "L'alumne/a construeix una pàgina completa, sense errors, que explica com funciona internet amb un glossari propi.|El alumno/a construye una página completa, sin errores, que explica cómo funciona internet con un glosario propio."
    ],
    comp: [
      "Competència digital: crear contingut digital estructurat i explicar com funciona internet|Competencia digital: crear contenido digital estructurado y explicar cómo funciona internet",
      "Pensament computacional: descompondre un projecte en parts i comprovar-les una a una|Pensamiento computacional: descomponer un proyecto en partes y comprobarlas una a una",
      "Comunicació escrita: explicar un procés tècnic per a un públic més petit|Comunicación escrita: explicar un proceso técnico para un público más pequeño",
      "Inclusió digital: descriure imatges per a les persones que no les poden veure|Inclusión digital: describir imágenes para las personas que no pueden verlas"
    ],
    vocab: [
      ["Esbós (wireframe)|Boceto (wireframe)", "Dibuix amb caixes que diu què va a cada lloc d'una pàgina.|Dibujo con cajas que dice qué va en cada sitio de una página."],
      ["Llista numerada (ol)|Lista numerada (ol)", "Llista on l'ordre importa; el navegador hi posa els números.|Lista donde el orden importa; el navegador pone los números."],
      ["Element de llista (li)|Elemento de lista (li)", "Cada punt d'una llista, tant numerada com amb punts.|Cada punto de una lista, tanto numerada como con puntos."],
      ["Atribut|Atributo", "Informació extra dins una etiqueta, com src o alt.|Información extra dentro de una etiqueta, como src o alt."],
      ["Text alternatiu (alt)|Texto alternativo (alt)", "Frase curta que descriu una imatge per a qui no la pot veure.|Frase corta que describe una imagen para quien no puede verla."],
      ["Glossari|Glosario", "Llista de paraules difícils amb la seva explicació.|Lista de palabras difíciles con su explicación."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el mapa d'internet»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el mapa de internet»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis, goma i la fitxa d'esbós per a cada alumne/a|Lápiz, goma y la ficha de boceto para cada alumno/a"
      ],
      imprimir: ["Esbós del mapa d'internet|Boceto del mapa de internet", "Paraules del glossari|Palabras del glosario"],
      prep: [
        "Imprimir una fitxa d'esbós per alumne/a i un paquet de targetes de paraules per taula.|Imprimir una ficha de boceto por alumno/a y un paquete de tarjetas de palabras por mesa.",
        "Preparar un exemple d'esbós fet per tu per ensenyar-lo al projector o a la pissarra.|Preparar un ejemplo de boceto hecho por ti para enseñarlo en el proyector o en la pizarra.",
        "Obrir Numi Tech a tots els ordinadors i comprovar que els projectes es desen al portafoli.|Abrir Numi Tech en todos los ordenadores y comprobar que los proyectos se guardan en el portafolio.",
        "Pensar com fareu la galeria final: pantalles girades o dos o tres alumnes que ensenyen el seu mapa al projector.|Pensar cómo haréis la galería final: pantallas giradas o dos o tres alumnos que enseñan su mapa en el proyector."
      ]
    },
    plan: [
      { min: 4, t: "L'encàrrec|El encargo", fase: 'inici',
        fa: "Presenta l'encàrrec: la biblioteca del barri vol una pàgina per explicar internet als més petits. Pregunta com ho explicarien a un nen de 8 anys i ensenya les quatre parts del projecte.|Presenta el encargo: la biblioteca del barrio quiere una página para explicar internet a los más pequeños. Pregunta cómo se lo explicarían a un niño de 8 años y enseña las cuatro partes del proyecto.",
        diu: ["Avui sou dissenyadors web amb un encàrrec de debò.|Hoy sois diseñadores web con un encargo de verdad.",
          "Com explicaríeu el DNS a un nen de 8 anys?|¿Cómo explicaríais el DNS a un niño de 8 años?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Planificar, llistes i imatges|Planificar, listas e imágenes", fase: 'teoria',
        fa: "Explica per què es fa un esbós abans de programar. Presenta ol i li amb l'exemple dels passos, la diferència amb ul, i l'etiqueta img amb els atributs src i alt. Remarca que img no es tanca.|Explica por qué se hace un boceto antes de programar. Presenta ol y li con el ejemplo de los pasos, la diferencia con ul, y la etiqueta img con los atributos src y alt. Remarca que img no se cierra.",
        diu: ["Els números de la llista no s'escriuen: els posa el navegador.|Los números de la lista no se escriben: los pone el navegador.",
          "Si l'ordre importa, ol; si no, ul.|Si el orden importa, ol; si no, ul.",
          "Com descriuríeu la imatge a algú que no la pot veure? Això és l'alt.|¿Cómo describiríais la imagen a alguien que no puede verla? Eso es el alt."],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "L'esbós en paper|El boceto en papel", fase: 'desconnectat',
        fa: "Cada alumne/a fa l'esbós del seu mapa a la fitxa: caixa del títol, introducció, imatge, els cinc passos i el glossari, amb el nom de l'etiqueta al costat de cada caixa. Després l'intercanvien amb un company/a, que comprova si s'entén el viatge.|Cada alumno/a hace el boceto de su mapa en la ficha: caja del título, introducción, imagen, los cinco pasos y el glosario, con el nombre de la etiqueta al lado de cada caja. Después lo intercambian con un compañero/a, que comprueba si se entiende el viaje.",
        diu: ["Al costat de cada caixa, escriviu l'etiqueta que fareu servir.|Al lado de cada caja, escribid la etiqueta que usaréis.",
          "Feu servir les targetes de paraules per triar el vostre glossari.|Usad las tarjetas de palabras para elegir vuestro glosario.",
          "Company/a: entens el viatge només llegint aquest paper?|Compañero/a: ¿entiendes el viaje solo leyendo este papel?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla. A l'app, el pas «El mapa en paper» es marca com a fet.|Ninguna: actividad sin pantalla. En la app, el paso «El mapa en papel» se marca como hecho.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 10, t: "A l'ordinador: descobreix, prediu i investiga|En el ordenador: descubre, predice e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. Fixa't en el pas de l'atribut mal escrit: és l'error més habitual quan escriuen imatges a mà.|Cada alumno/a avanza hasta la pausa activa. Fíjate en el paso del atributo mal escrito: es el error más habitual cuando escriben imágenes a mano.",
        diu: ["Números o punts? Mireu si la llista és ol o ul.|¿Números o puntos? Mirad si la lista es ol o ul.",
          "Llegiu l'atribut lletra a lletra: s, r, c.|Leed el atributo letra a letra: s, r, c."],
        slides: ['s10'], app: "De «La missió» fins a «Investiga»: les dues històries, les sis targetes, «El mapa en paper» (ja fet), prediu la llista, tria el codi i l'atribut mal escrit.|De «La misión» hasta «Investiga»: las dos historias, las seis tarjetas, «El mapa en papel» (ya hecho), predice la lista, elige el código y el atributo mal escrito.", org: "Individual|Individual" },
      { min: 15, t: "Reptes: el mapa peça a peça|Retos: el mapa pieza a pieza", fase: 'ordinador',
        fa: "Feu la pausa activa. Després cada alumne/a construeix el mapa per parts amb els cinc reptes: inici, passos, ordre, imatge i glossari. Projecta les diapositives de la llista i de la imatge quan hi arribin. Qui acabi, fa el repte extra «I si falla?».|Haced la pausa activa. Después cada alumno/a construye el mapa por partes con los cinco retos: inicio, pasos, orden, imagen y glosario. Proyecta las diapositivas de la lista y de la imagen cuando lleguen. Quien termine, hace el reto extra «¿Y si falla?».",
        diu: ["Una peça cada vegada, i comproveu-la abans de passar a la següent.|Una pieza cada vez, y comprobadla antes de pasar a la siguiente.",
          "Mireu el vostre esbós: quina part toca ara?|Mirad vuestro boceto: ¿qué parte toca ahora?",
          "Per moure un pas de lloc, retalleu la línia sencera i enganxeu-la.|Para mover un paso de sitio, cortad la línea entera y pegadla."],
        slides: ['s11', 's12', 's13'], app: "«Pausa activa» i els cinc reptes: el començament, els passos, l'ordre, la imatge i el glossari; repte extra «I si falla?».|«Pausa activa» y los cinco retos: el principio, los pasos, el orden, la imagen y el glosario; reto extra «¿Y si falla?».", org: "Individual|Individual" },
      { min: 12, t: "Projecte final i galeria|Proyecto final y galería", fase: 'crea',
        fa: "Cada alumne/a ajunta-ho tot al projecte final seguint el seu esbós i la llista de comprovació. Als darrers minuts, feu una galeria: dos o tres alumnes ensenyen el seu mapa al projector i la resta diu una cosa que s'entén molt bé.|Cada alumno/a lo junta todo en el proyecto final siguiendo su boceto y la lista de comprobación. En los últimos minutos, haced una galería: dos o tres alumnos enseñan su mapa en el proyector y el resto dice una cosa que se entiende muy bien.",
        diu: ["Repasseu la llista de comprovació abans de desar.|Repasad la lista de comprobación antes de guardar.",
          "Escriviu-ho amb les vostres paraules: és el vostre mapa.|Escribidlo con vuestras palabras: es vuestro mapa.",
          "Què és el que s'entén millor del mapa del company/a?|¿Qué es lo que se entiende mejor del mapa del compañero/a?"],
        slides: ['s14', 's15'], app: "Pas «Crea»: El mapa d'internet (es desa al portafoli i dona la insígnia de la unitat).|Paso «Crea»: El mapa de internet (se guarda en el portafolio y da la insignia de la unidad).", org: "Individual i després tot el grup|Individual y después todo el grupo" },
      { min: 3, t: "Tancament de la unitat|Cierre de la unidad", fase: 'tancament',
        fa: "Celebra el primer projecte del curs i repassa què han après a la unitat. Que responguin les preguntes finals i fes el tiquet a la porta. Anuncia que a la unitat 2 aprendran totes les etiquetes de l'HTML.|Celebra el primer proyecto del curso y repasa qué han aprendido en la unidad. Que respondan las preguntas finales y haz el ticket en la puerta. Anuncia que en la unidad 2 aprenderán todas las etiquetas del HTML.",
        diu: ["Fa quatre setmanes, sabíeu com arriba una web a la pantalla?|Hace cuatro semanas, ¿sabíais cómo llega una web a la pantalla?",
          "La setmana que ve, a fons amb les etiquetes!|La semana que viene, ¡a fondo con las etiquetas!"],
        slides: ['s16', 's17'], app: "«Tancament»: dues preguntes i com m'he sentit.|«Cierre»: dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu els números a mà dins la llista o posa els passos sense li.|Escribe los números a mano dentro de la lista o pone los pasos sin li.",
        "Que miri la vista prèvia: surten números repetits o cap número? Recorda que cada pas va dins un li i que els números els posa el navegador.|Que mire la vista previa: ¿salen números repetidos o ningún número? Recuerda que cada paso va dentro de un li y que los números los pone el navegador."],
      ["Escriu scr en lloc de src, o tanca la imatge amb una etiqueta de tancament.|Escribe scr en lugar de src, o cierra la imagen con una etiqueta de cierre.",
        "Que llegeixi el missatge de l'editor i compari amb el tros de codi de la barra de suggeriments.|Que lea el mensaje del editor y compare con el trozo de código de la barra de sugerencias."],
      ["Posa un alt massa genèric, com «imatge» o «foto».|Pone un alt demasiado genérico, como «imagen» o «foto».",
        "Pregunta-li què es veu exactament: quin objecte, de quin color, què fa? Una frase curta i concreta.|Pregúntale qué se ve exactamente: ¿qué objeto, de qué color, qué hace? Una frase corta y concreta."],
      ["Copia les definicions de les targetes de l'app sense entendre-les.|Copia las definiciones de las tarjetas de la app sin entenderlas.",
        "Demana-li que t'expliqui la paraula en veu alta i que escrigui el que ha dit.|Pídele que te explique la palabra en voz alta y que escriba lo que ha dicho."],
      ["Vol fer-ho tot de cop i s'encalla amb molts errors alhora.|Quiere hacerlo todo de golpe y se atasca con muchos errores a la vez.",
        "Torna a l'esbós: que faci una sola part, la comprovi i després passi a la següent.|Vuelve al boceto: que haga una sola parte, la compruebe y después pase a la siguiente."]
    ],
    diff: {
      mes: "Afegir la secció «I si falla?» amb una llista ul i un paràgraf final amb tres consells per navegar segur. Fer servir una segona imatge i ordenar el glossari alfabèticament.|Añadir la sección «¿Y si falla?» con una lista ul y un párrafo final con tres consejos para navegar seguro. Usar una segunda imagen y ordenar el glosario alfabéticamente.",
      menys: "Treballar sobre el codi que es va construint als reptes (copiar-lo al projecte final) i fer el glossari amb les quatre targetes de paraules ja escrites. Fer servir els trossos de codi de la barra de suggeriments.|Trabajar sobre el código que se va construyendo en los retos (copiarlo en el proyecto final) y hacer el glosario con las cuatro tarjetas de palabras ya escritas. Usar los trozos de código de la barra de sugerencias."
    },
    aval: {
      ticket: ["Quina etiqueta fas servir per a una llista on l'ordre importa? I per a cada pas?|¿Qué etiqueta usas para una lista donde el orden importa? ¿Y para cada paso?",
        "Per a què serveix l'alt d'una imatge?|¿Para qué sirve el alt de una imagen?"],
      rubric: [
        ["Planificació|Planificación", "Fa un esbós complet amb les etiquetes i el segueix en programar.|Hace un boceto completo con las etiquetas y lo sigue al programar.", "Fa un esbós incomplet o no el fa servir després.|Hace un boceto incompleto o no lo usa después."],
        ["Llistes i imatges|Listas e imágenes", "Fa una ol ben formada amb els cinc passos en ordre i una imatge amb un alt concret.|Hace una ol bien formada con los cinco pasos en orden y una imagen con un alt concreto.", "La llista o la imatge tenen algun error o l'alt és genèric.|La lista o la imagen tienen algún error o el alt es genérico."],
        ["Contingut del mapa|Contenido del mapa", "Explica el viatge i el glossari amb paraules pròpies i correctes.|Explica el viaje y el glosario con palabras propias y correctas.", "El contingut és correcte però copiat o li falta alguna paraula clau.|El contenido es correcto pero copiado o le falta alguna palabra clave."],
        ["Codi net|Código limpio", "La pàgina no té errors d'etiquetes i té títol de pestanya.|La página no tiene errores de etiquetas y tiene título de pestaña.", "Hi queda algun error d'etiquetes que necessita ajuda per arreglar.|Queda algún error de etiquetas que necesita ayuda para arreglar."]
      ]
    },
    casa: "A casa, ensenyeu el mapa d'internet a la família des del portafoli del mòbil i feu-los una pregunta del glossari. Si voleu, afegiu-hi una paraula nova que us hagin preguntat.|En casa, enseñad el mapa de internet a la familia desde el portafolio del móvil y hacedles una pregunta del glosario. Si queréis, añadid una palabra nueva que os hayan preguntado.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: el mapa d'internet|Proyecto: el mapa de internet", x: "El primer projecte del curs: una pàgina que explica com arriba una web a la pantalla.|El primer proyecto del curso: una página que explica cómo llega una web a la pantalla.",
        nota: "Dona-li to d'encàrrec real: la pàgina és per a algú que l'ha de poder entendre.|Dale tono de encargo real: la página es para alguien que tiene que poder entenderla." },
      { id: 's2', k: 'pregunta', t: "Com ho explicaries a un nen de 8 anys?|¿Cómo se lo explicarías a un niño de 8 años?", x: "Com arriba una web a la pantalla, sense paraules difícils.|Cómo llega una web a la pantalla, sin palabras difíciles.",
        nota: "Recull dues o tres explicacions. Les paraules difícils que surtin aniran al glossari.|Recoge dos o tres explicaciones. Las palabras difíciles que salgan irán al glosario." },
      { id: 's3', k: 'concepte', t: "L'encàrrec: 4 parts|El encargo: 4 partes", punts: ["Títol i introducció|Título e introducción", "Els 5 passos, numerats|Los 5 pasos, numerados", "Una imatge amb alt|Una imagen con alt", "Un glossari|Un glosario"],
        nota: "Escriu les quatre parts a la pissarra: les anireu marcant a mesura que les facin.|Escribe las cuatro partes en la pizarra: las iréis marcando a medida que las hagan." },
      { id: 's4', k: 'anim', t: "Primer l'esbós|Primero el boceto", anim: 'wplan', x: "Caixes que diuen què va a cada lloc, abans d'escriure codi.|Cajas que dicen qué va en cada sitio, antes de escribir código.",
        nota: "Ensenya el teu esbós d'exemple i fes notar el nom de l'etiqueta al costat de cada caixa.|Enseña tu boceto de ejemplo y haz notar el nombre de la etiqueta al lado de cada caja." },
      { id: 's5', k: 'concepte', t: "Llista numerada: ol i li|Lista numerada: ol y li", x: "Cada pas dins un li. Els números, els posa el navegador.|Cada paso dentro de un li. Los números los pone el navegador.",
        code: '<ol>\n  <li>Escrius l\'adreça</li>\n  <li>El DNS diu el número</li>\n  <li>El servidor respon</li>\n</ol>',
        nota: "Afegeix en directe un pas al mig i fes veure que la numeració es refà sola.|Añade en directo un paso en medio y haz ver que la numeración se rehace sola." },
      { id: 's6', k: 'anim', t: "ol o ul?|¿ol o ul?", anim: 'wlist', x: "L'ordre importa: ol, amb números. No importa: ul, amb punts.|El orden importa: ol, con números. No importa: ul, con puntos.",
        nota: "Demana exemples de cada tipus: una recepta (ol), la llista de la compra (ul).|Pide ejemplos de cada tipo: una receta (ol), la lista de la compra (ul)." },
      { id: 's7', k: 'anim', t: "L'etiqueta img|La etiqueta img", anim: 'wimg', x: "src: on és el fitxer. alt: què s'hi veu. I no es tanca.|src: dónde está el archivo. alt: qué se ve. Y no se cierra.",
        nota: "Explica que els lectors de pantalla llegeixen l'alt en veu alta a les persones cegues.|Explica que los lectores de pantalla leen el alt en voz alta a las personas ciegas." },
      { id: 's8', k: 'activitat', t: "El mapa en paper|El mapa en papel", timer: 8, punts: ["Caixa del títol i introducció|Caja del título e introducción", "Els 5 passos numerats|Los 5 pasos numerados", "La imatge i el seu alt|La imagen y su alt", "El glossari amb 4 paraules|El glosario con 4 palabras"],
        nota: "Passa per les taules i comprova que hi ha l'etiqueta al costat de cada caixa.|Pasa por las mesas y comprueba que está la etiqueta al lado de cada caja." },
      { id: 's9', k: 'concepte', t: "De l'esbós al codi|Del boceto al código", x: "Cada caixa de l'esbós es converteix en una etiqueta.|Cada caja del boceto se convierte en una etiqueta.",
        code: '<h1>El mapa d\'internet</h1>\n<p>Introducció…</p>\n<img src="img/planeta.svg" alt="…">\n<ol>\n  <li>…</li>\n</ol>\n<h2>Glossari</h2>\n<p><b>DNS</b>: …</p>',
        nota: "Posa l'esbós al costat d'aquest codi i fes que relacionin cada caixa amb la seva línia.|Pon el boceto al lado de este código y haz que relacionen cada caja con su línea." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre «Projecte: el mapa d'internet».|Abre «Proyecto: el mapa de internet».", "Prediu i tria el codi de la llista.|Predice y elige el código de la lista.", "Troba l'atribut mal escrit.|Encuentra el atributo mal escrito.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas «El mapa en paper» de l'app, que marquin que ja l'han fet.|En el paso «El mapa en papel» de la app, que marquen que ya lo han hecho." },
      { id: 's11', k: 'repte', t: "Reptes: el mapa peça a peça|Retos: el mapa pieza a pieza", timer: 15, punts: ["1. El començament|1. El principio", "2. Els passos|2. Los pasos", "3. L'ordre|3. El orden", "4. La imatge|4. La imagen", "5. El glossari|5. El glosario"],
        code: '<ol>\n  <li>Escrius l\'adreça al navegador.</li>\n  <li>El DNS diu el número IP del servidor.</li>\n  <li>El navegador envia la petició al servidor.</li>\n  <li>El servidor respon amb els fitxers en paquets.</li>\n  <li>El navegador ajunta els paquets i dibuixa la pàgina.</li>\n</ol>',
        nota: "Projecta-la quan facin els reptes 2 i 3. No donis la solució del 3 abans d'hora: que la pensin.|Proyéctala cuando hagan los retos 2 y 3. No des la solución del 3 antes de tiempo: que la piensen." },
      { id: 's12', k: 'repte', t: "La imatge i el glossari|La imagen y el glosario", x: "La imatge entre la introducció i la llista; el glossari, al final.|La imagen entre la introducción y la lista; el glosario, al final.",
        code: '<img src="img/planeta.svg" alt="El planeta Terra, connectat per internet">\n\n<h2>Glossari</h2>\n<p><b>Servidor</b>: ordinador que guarda webs.</p>',
        nota: "Recorda que img no es tanca i que cada paraula del glossari va en un paràgraf propi.|Recuerda que img no se cierra y que cada palabra del glosario va en un párrafo propio." },
      { id: 's13', k: 'concepte', t: "Llista de comprovació|Lista de comprobación", punts: ["Títol de pestanya i títol h1|Título de pestaña y título h1", "Introducció i imatge amb alt|Introducción e imagen con alt", "5 passos en ordre dins una ol|5 pasos en orden dentro de una ol", "Glossari amb 4 paraules en negreta|Glosario con 4 palabras en negrita", "El teu nom al final, sense errors|Tu nombre al final, sin errores"],
        nota: "Deixa-la projectada durant el projecte final perquè la vagin repassant.|Déjala proyectada durante el proyecto final para que la vayan repasando." },
      { id: 's14', k: 'activitat', t: "Projecte final: el mapa d'internet|Proyecto final: el mapa de internet", timer: 12, x: "Ajunta-ho tot seguint el teu esbós i la llista de comprovació.|Júntalo todo siguiendo tu boceto y la lista de comprobación.",
        nota: "Qui vagi just, que reaprofiti el codi dels reptes; qui vagi sobrat, que afegeixi la secció «I si falla?».|Quien vaya justo, que reaproveche el código de los retos; quien vaya sobrado, que añada la sección «¿Y si falla?»." },
      { id: 's15', k: 'activitat', t: "Galeria de mapes|Galería de mapas", x: "Ensenyeu el mapa i digueu una cosa que s'entén molt bé del dels altres.|Enseñad el mapa y decid una cosa que se entiende muy bien del de los demás.",
        nota: "Tria mapes diferents entre si. Els comentaris, només en positiu i concrets.|Elige mapas diferentes entre sí. Los comentarios, solo en positivo y concretos." },
      { id: 's16', k: 'resum', t: "Què hem après a la unitat|Qué hemos aprendido en la unidad", punts: ["Com viatja una pàgina per internet|Cómo viaja una página por internet", "Llegir adreces: protocol, domini i ruta|Leer direcciones: protocolo, dominio y ruta", "Una web són fitxers: HTML i CSS|Una web son archivos: HTML y CSS", "Llistes ol, li i imatges amb alt|Listas ol, li e imágenes con alt"],
        nota: "Celebra el primer projecte i la insígnia de la unitat. Anuncia la unitat 2: l'HTML a fons.|Celebra el primer proyecto y la insignia de la unidad. Anuncia la unidad 2: el HTML a fondo." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quina etiqueta per a una llista ordenada? I per a cada pas?|¿Qué etiqueta para una lista ordenada? ¿Y para cada paso?", "Per a què serveix l'alt?|¿Para qué sirve el alt?"],
        nota: "Revisa els projectes desats al portafoli per fer l'avaluació amb la rúbrica.|Revisa los proyectos guardados en el portafolio para hacer la evaluación con la rúbrica." }
    ],
    print: [
      { id: 'p1', t: "Esbós del mapa d'internet|Boceto del mapa de internet", k: 'fitxa',
        intro: "Dibuixa l'esbós de la teva pàgina al requadre gran. Al costat de cada caixa, escriu l'etiqueta que faràs servir.|Dibuja el boceto de tu página en el recuadro grande. Al lado de cada caja, escribe la etiqueta que usarás.",
        items: [
          { q: "Quin títol tindrà la pàgina? Escriu també la frase d'introducció.|¿Qué título tendrá la página? Escribe también la frase de introducción.", sol: "Resposta oberta: un títol per a l'etiqueta h1 i una frase que expliqui de què va la pàgina.|Respuesta abierta: un título para la etiqueta h1 y una frase que explique de qué va la página." },
          { q: "Escriu els 5 passos del viatge en ordre, amb paraules curtes.|Escribe los 5 pasos del viaje en orden, con palabras cortas.", sol: "Adreça, DNS, petició, resposta en paquets, el navegador dibuixa. Aniran en una ol, un li per pas.|Dirección, DNS, petición, respuesta en paquetes, el navegador dibuja. Irán en una ol, un li por paso." },
          { q: "Quina imatge triaràs (planeta o robot) i quin serà el seu alt?|¿Qué imagen elegirás (planeta o robot) y cuál será su alt?", sol: "Per exemple: img/planeta.svg amb l'alt «El planeta Terra, connectat per internet».|Por ejemplo: img/planeta.svg con el alt «El planeta Terra, connectat per internet»." },
          { q: "Tria 4 paraules per al glossari i explica cadascuna en una frase.|Elige 4 palabras para el glosario y explica cada una en una frase.", sol: "Per exemple: servidor, DNS, paquet i navegador, cadascuna en un paràgraf amb la paraula en negreta.|Por ejemplo: servidor, DNS, paquete y navegador, cada una en un párrafo con la palabra en negrita." }
        ] },
      { id: 'p2', t: "Paraules del glossari|Palabras del glosario", k: 'targetes',
        intro: "Un paquet per taula. Cada alumne/a en tria quatre per al seu glossari i les explica amb les seves paraules.|Un paquete por mesa. Cada alumno/a elige cuatro para su glosario y las explica con sus palabras.",
        items: [
          { t: "Internet|Internet", n: 1 }, { t: "Servidor|Servidor", n: 1 }, { t: "Navegador|Navegador", n: 1 }, { t: "Router|Router", n: 1 },
          { t: "DNS|DNS", n: 1 }, { t: "Adreça IP|Dirección IP", n: 1 }, { t: "Paquet|Paquete", n: 1 }, { t: "Domini|Dominio", n: 1 },
          { t: "https i cadenat|https y candado", n: 1 }, { t: "HTML|HTML", n: 1 }, { t: "CSS|CSS", n: 1 }
        ] }
    ]
  }
});

/* ---------- Guies del professorat · Unitat 2 · HTML ---------- */
Object.assign(TGUIDE, {
  /* ===== w2-1 · Etiquetes ===== */
  'w2-1': {
    obj: [
      "L'alumne/a explica que un element HTML té una etiqueta d'obrir, un contingut i una etiqueta de tancar amb barra.|El alumno/a explica que un elemento HTML tiene una etiqueta de abrir, un contenido y una etiqueta de cerrar con barra.",
      "L'alumne/a escriu títols, paràgrafs i negretes amb h1, p i b, ben niats.|El alumno/a escribe títulos, párrafos y negritas con h1, p y b, bien anidados.",
      "L'alumne/a diu què va a head (informació, com el title) i què va a body (tot el que es veu).|El alumno/a dice qué va en head (información, como el title) y qué va en body (todo lo que se ve).",
      "L'alumne/a troba i corregeix etiquetes sense tancar o creuades amb l'ajuda dels avisos de l'editor.|El alumno/a encuentra y corrige etiquetas sin cerrar o cruzadas con la ayuda de los avisos del editor."
    ],
    comp: [
      "Competència digital (CD3): crear contingut digital escrivint codi HTML|Competencia digital (CD3): crear contenido digital escribiendo código HTML",
      "Pensament computacional: sintaxi, estructures niades i depuració d'errors|Pensamiento computacional: sintaxis, estructuras anidadas y depuración de errores",
      "Comunicació lingüística: organitzar un text en títol i paràgrafs|Comunicación lingüística: organizar un texto en título y párrafos"
    ],
    vocab: [
      ["HTML|HTML", "El llenguatge que marca què és cada tros d'una pàgina web.|El lenguaje que marca qué es cada trozo de una página web."],
      ["Etiqueta|Etiqueta", "Una marca entre angles, com p o h1, que el navegador llegeix i no mostra.|Una marca entre ángulos, como p o h1, que el navegador lee y no muestra."],
      ["Element|Elemento", "Etiqueta d'obrir + contingut + etiqueta de tancar.|Etiqueta de abrir + contenido + etiqueta de cerrar."],
      ["Niar|Anidar", "Posar una etiqueta dins d'una altra; es tanquen en ordre invers.|Poner una etiqueta dentro de otra; se cierran en orden inverso."],
      ["Esquelet|Esqueleto", "L'estructura de tota pàgina: html, head (cap) i body (cos).|La estructura de toda página: html, head (cabeza) y body (cuerpo)."],
      ["Sagnat|Sangría", "Espais a l'esquerra del codi per veure què hi ha dins de què.|Espacios a la izquierda del código para ver qué hay dentro de qué."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Etiquetes»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Etiquetas»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Tires de paper, tisores i retoladors per a l'activitat sense pantalla|Tiras de papel, tijeras y rotuladores para la actividad sin pantalla"
      ],
      imprimir: ["Etiquetes de paper|Etiquetas de papel", "Fitxa: caça l'error|Ficha: caza el error"],
      prep: [
        "Imprimir i retallar un paquet d'etiquetes de paper per parella. Si es plastifiquen, serveixen per a tota la unitat.|Imprimir y recortar un paquete de etiquetas de papel por pareja. Si se plastifican, sirven para toda la unidad.",
        "Comprovar que els ordinadors tenen Numi Tech obert i que l'editor de codi funciona (escriure una lletra i veure la vista prèvia).|Comprobar que los ordenadores tienen Numi Tech abierto y que el editor de código funciona (escribir una letra y ver la vista previa).",
        "Fer abans el repte 3 de l'app per saber quins avisos d'error surten sota l'editor.|Hacer antes el reto 3 de la app para saber qué avisos de error salen debajo del editor."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: deixem de mirar webs i les escrivim|Bienvenida: dejamos de mirar webs y las escribimos", fase: 'inici',
        fa: "Recorda la unitat anterior: una web són fitxers que el navegador llegeix. Pregunta com creuen que el navegador sap quin text és un títol i quin és un paràgraf. Recull respostes sense corregir i anuncia que avui escriuran la seva primera pàgina, lletra a lletra.|Recuerda la unidad anterior: una web son archivos que el navegador lee. Pregunta cómo creen que el navegador sabe qué texto es un título y cuál es un párrafo. Recoge respuestas sin corregir y anuncia que hoy escribirán su primera página, letra a letra.",
        diu: ["Com sap el navegador que això és un títol i no un paràgraf?|¿Cómo sabe el navegador que esto es un título y no un párrafo?",
          "Avui no arrossegarem blocs: escriurem codi de debò, com els professionals.|Hoy no arrastraremos bloques: escribiremos código de verdad, como los profesionales."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Les etiquetes: obrir, contingut i tancar|Las etiquetas: abrir, contenido y cerrar", fase: 'teoria',
        fa: "Explica que l'HTML marca el text amb etiquetes. Escriu a la pissarra un paràgraf i encercla les tres parts de l'element. Remarca la barra de l'etiqueta de tancar. Mostra que b pot anar dins de p i fes la comparació de les nines russes. Acaba amb l'esquelet: el que va a head no es veu, el que va a body sí.|Explica que el HTML marca el texto con etiquetas. Escribe en la pizarra un párrafo y rodea las tres partes del elemento. Remarca la barra de la etiqueta de cerrar. Muestra que b puede ir dentro de p y haz la comparación de las muñecas rusas. Acaba con el esqueleto: lo que va en head no se ve, lo que va en body sí.",
        diu: ["Quina diferència hi ha entre l'etiqueta d'obrir i la de tancar?|¿Qué diferencia hay entre la etiqueta de abrir y la de cerrar?",
          "L'última que obres és la primera que tanques, com les nines russes.|La última que abres es la primera que cierras, como las muñecas rusas.",
          "On creieu que va el text de la pestanya: al cap o al cos?|¿Dónde creéis que va el texto de la pestaña: en la cabeza o en el cuerpo?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Etiquetes de paper|Etiquetas de papel", fase: 'desconnectat',
        fa: "En parelles, una persona escriu un títol i dues frases sobre un animal i l'altra hi col·loca les etiquetes de paper. Després intercanvien els papers. Passa per les taules i demana que llegeixin en veu alta l'ordre de les etiquetes quan hi ha una negreta dins un paràgraf.|En parejas, una persona escribe un título y dos frases sobre un animal y la otra coloca las etiquetas de papel. Después intercambian los papeles. Pasa por las mesas y pide que lean en voz alta el orden de las etiquetas cuando hay una negrita dentro de un párrafo.",
        diu: ["Cada etiqueta d'obrir té la seva parella de tancar?|¿Cada etiqueta de abrir tiene su pareja de cerrar?",
          "Llegiu-me l'ordre: obre p, obre b… i ara quina tanqueu primer?|Leedme el orden: abre p, abre b… ¿y ahora cuál cerráis primero?"],
        slides: ['s10'], app: "Cap: activitat sense pantalla. A l'app, al pas «Etiquetes de paper», toquen «Ho hem fet!».|Ninguna: actividad sin pantalla. En la app, en el paso «Etiquetas de papel», tocan «¡Lo hemos hecho!».", org: "Parelles|Parejas" },
      { min: 12, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança al seu ritme fins a la pausa activa. Al pas d'experimentar, anima'ls a esborrar una barra a propòsit per veure què passa i a provar el botó Raigs X.|Cada alumno/a abre la sesión y avanza a su ritmo hasta la pausa activa. En el paso de experimentar, anímalos a borrar una barra a propósito para ver qué pasa y a probar el botón Rayos X.",
        diu: ["Abans de triar, llegeix el codi en veu baixa: què serà gran i què serà negreta?|Antes de elegir, lee el código en voz baja: ¿qué será grande y qué será negrita?",
          "Esborra una barra a propòsit. Què fa el navegador?|Borra una barra a propósito. ¿Qué hace el navegador?"],
        slides: ['s11'], app: "De «Recorda» fins a «Investiga»: la pregunta d'HTML, la missió, les targetes de «Descobreix», prediu el resultat, troba l'error del hàmster i l'editor lliure.|De «Recuerda» hasta «Investiga»: la pregunta de HTML, la misión, las tarjetas de «Descubre», predice el resultado, encuentra el error del hámster y el editor libre.", org: "Individual|Individual" },
      { min: 13, t: "Pausa activa i reptes de codi|Pausa activa y retos de código", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després escriu en directe, amb la classe dictant, el codi de la diapositiva 12 i deixa'ls fer els quatre reptes. El repte extra és per a qui acabi abans. Qui acabi pot ajudar amb preguntes, sense tocar el teclat del company/a.|Haced la pausa activa todos juntos. Después escribe en directo, con la clase dictando, el código de la diapositiva 12 y déjales hacer los cuatro retos. El reto extra es para quien acabe antes. Quien acabe puede ayudar con preguntas, sin tocar el teclado del compañero/a.",
        diu: ["Mireu sota l'editor: l'avís us diu la línia de l'error.|Mirad debajo del editor: el aviso os dice la línea del error.",
          "Al repte 3 hi ha tres errors. Quants n'heu trobat?|En el reto 3 hay tres errores. ¿Cuántos habéis encontrado?",
          "Si ajudes algú, assenyala la línia, però no l'escriguis tu.|Si ayudas a alguien, señala la línea, pero no la escribas tú."],
        slides: ['s12', 's13'], app: "«Pausa activa» i els reptes 1 a 4 (el teu nom, dos paràgrafs, caça els errors, títol de pestanya i negretes) i el repte extra.|«Pausa activa» y los retos 1 a 4 (tu nombre, dos párrafos, caza los errores, título de pestaña y negritas) y el reto extra.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: la meva primera pàgina|Crea: mi primera página", fase: 'crea',
        fa: "Cada alumne/a fa la seva pàgina de presentació i la desa. Recorda els criteris de la diapositiva. Si en queda temps, en parelles es llegeixen el codi i busquen alguna etiqueta mal tancada.|Cada alumno/a hace su página de presentación y la guarda. Recuerda los criterios de la diapositiva. Si queda tiempo, por parejas se leen el código y buscan alguna etiqueta mal cerrada.",
        diu: ["Aquesta pàgina és vostra: expliqueu coses de debò sobre vosaltres.|Esta página es vuestra: explicad cosas de verdad sobre vosotros.",
          "Abans de desar, mireu que no hi hagi cap avís vermell.|Antes de guardar, mirad que no haya ningún aviso rojo."],
        slides: ['s14'], app: "Pas «Crea»: La meva primera pàgina.|Paso «Crea»: Mi primera página.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals de l'app i fes les preguntes del tiquet a la porta.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales de la app y haz las preguntas del ticket en la puerta.",
        diu: ["Com és l'etiqueta que tanca un paràgraf?|¿Cómo es la etiqueta que cierra un párrafo?",
          "Si obro p i després b, quina tanco primer?|Si abro p y después b, ¿cuál cierro primero?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu l'etiqueta de tancar sense la barra i tot el text de sota es fa gran o en negreta.|Escribe la etiqueta de cerrar sin la barra y todo el texto de debajo se hace grande o en negrita.",
        "Demana-li que llegeixi l'avís de sota l'editor i que compari les dues etiquetes de la línia: què té l'una que l'altra no té?|Pídele que lea el aviso de debajo del editor y que compare las dos etiquetas de la línea: ¿qué tiene una que la otra no tiene?"],
      ["Creua les etiquetes: tanca p abans que b.|Cruza las etiquetas: cierra p antes que b.",
        "Fes-li dir en veu alta «obro p, obro b, tanco…» i que ho representi amb les mans, com a la pausa activa.|Haz que diga en voz alta «abro p, abro b, cierro…» y que lo represente con las manos, como en la pausa activa."],
      ["Posa el títol de la pestanya dins de body o un h1 dins de head.|Pone el título de la pestaña dentro de body o un h1 dentro de head.",
        "Recorda la imatge del cap i el cos: el cap té informació que no es veu a la pàgina; el cos, tot el que es veu.|Recuerda la imagen de la cabeza y el cuerpo: la cabeza tiene información que no se ve en la página; el cuerpo, todo lo que se ve."],
      ["Esborra etiquetes senceres quan només havia de canviar el text.|Borra etiquetas enteras cuando solo tenía que cambiar el texto.",
        "Proposa-li seleccionar només el que hi ha entre les dues etiquetes. Si s'ha esborrat, l'editor té el botó de desfer.|Propónle seleccionar solo lo que hay entre las dos etiquetas. Si se ha borrado, el editor tiene el botón de deshacer."],
      ["Escriu les etiquetes amb espais o majúscules estranyes, com «p » o «H 1».|Escribe las etiquetas con espacios o mayúsculas raras, como «p » o «H 1».",
        "Explica que el nom de l'etiqueta va enganxat als angles i sense espais. Que faci servir els suggeriments de l'editor.|Explica que el nombre de la etiqueta va pegado a los ángulos y sin espacios. Que use las sugerencias del editor."]
    ],
    diff: {
      mes: "Fer el repte extra i, després, afegir a la pàgina de presentació una frase amb negreta, cursiva i subratllat niats correctament. Explicar a un company/a per què l'ordre de tancament importa.|Hacer el reto extra y, después, añadir a la página de presentación una frase con negrita, cursiva y subrayado anidados correctamente. Explicar a un compañero/a por qué el orden de cierre importa.",
      menys: "Tenir les etiquetes de paper al costat de l'ordinador i col·locar-les sobre la fitxa abans d'escriure. Començar pels reptes 1 i 2 i fer servir sempre els suggeriments de l'editor, que tanquen sols les etiquetes.|Tener las etiquetas de papel al lado del ordenador y colocarlas sobre la ficha antes de escribir. Empezar por los retos 1 y 2 y usar siempre las sugerencias del editor, que cierran solas las etiquetas."
    },
    aval: {
      ticket: ["Quines són les tres parts d'un element HTML?|¿Cuáles son las tres partes de un elemento HTML?",
        "Si obres p i després b, quina etiqueta tanques primer?|Si abres p y después b, ¿qué etiqueta cierras primero?"],
      rubric: [
        ["Element i etiquetes|Elemento y etiquetas", "Escriu elements complets amb l'etiqueta de tancar amb barra, sense ajuda.|Escribe elementos completos con la etiqueta de cerrar con barra, sin ayuda.", "De vegades oblida la barra o la de tancar, però la troba amb l'avís.|A veces olvida la barra o la de cerrar, pero la encuentra con el aviso."],
        ["Niar|Anidar", "Nia b dins de p i tanca en ordre invers.|Anida b dentro de p y cierra en orden inverso.", "Nia les etiquetes, però de vegades les creua.|Anida las etiquetas, pero a veces las cruza."],
        ["Esquelet de la pàgina|Esqueleto de la página", "Posa el title a head i el contingut a body.|Pone el title en head y el contenido en body.", "Confon què va a head i què va a body.|Confunde qué va en head y qué va en body."],
        ["Depuració|Depuración", "Fa servir els avisos de l'editor per trobar i corregir errors.|Usa los avisos del editor para encontrar y corregir errores.", "Necessita ajuda per relacionar l'avís amb la línia de l'error.|Necesita ayuda para relacionar el aviso con la línea del error."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu obrir la pàgina desada al portafoli i ampliar-la: una persona de la família pot dictar dues frases sobre ella mateixa i l'alumne/a les afegeix com a paràgrafs.|En casa, con el móvil, podéis abrir la página guardada en el portafolio y ampliarla: una persona de la familia puede dictar dos frases sobre sí misma y el alumno/a las añade como párrafos.",
    slides: [
      { id: 's1', k: 'portada', t: 'Etiquetes|Etiquetas', x: "Avui escriurem la nostra primera pàgina web, lletra a lletra.|Hoy escribiremos nuestra primera página web, letra a letra.",
        nota: "Presenta l'objectiu: al final de la classe, cadascú tindrà una pàgina seva desada al portafoli.|Presenta el objetivo: al final de la clase, cada uno tendrá una página suya guardada en el portafolio." },
      { id: 's2', k: 'pregunta', t: 'Com ho sap el navegador?|¿Cómo lo sabe el navegador?', x: "Com sap el navegador quin text és un títol i quin és un paràgraf?|¿Cómo sabe el navegador qué texto es un título y cuál es un párrafo?",
        nota: "Recull respostes sense corregir. La resposta arriba a la diapositiva 4: perquè el marquem amb etiquetes.|Recoge respuestas sin corregir. La respuesta llega en la diapositiva 4: porque lo marcamos con etiquetas." },
      { id: 's3', k: 'repas', t: 'Recordem|Recordemos', punts: ["Una web són fitxers que el navegador llegeix.|Una web son archivos que el navegador lee.", "L'HTML diu què hi ha a la pàgina.|El HTML dice qué hay en la página.", "El CSS diu com es veu.|El CSS dice cómo se ve."],
        nota: "Connecta amb la unitat 1: avui obrim el fitxer index.html per dins.|Conecta con la unidad 1: hoy abrimos el archivo index.html por dentro." },
      { id: 's4', k: 'anim', t: "Un llenguatge d'etiquetes|Un lenguaje de etiquetas", anim: 'wtag', x: "Cada tros de la pàgina va entre etiquetes que diuen què és.|Cada trozo de la página va entre etiquetas que dicen qué es.",
        nota: "Remarca que les etiquetes no surten a la pantalla: el navegador les fa servir per dibuixar.|Remarca que las etiquetas no salen en la pantalla: el navegador las usa para dibujar." },
      { id: 's5', k: 'concepte', t: 'Obrir, contingut, tancar|Abrir, contenido, cerrar', code: '<p>Els gats dormen molt.</p>',
        punts: ["Etiqueta d'obrir: p entre angles.|Etiqueta de abrir: p entre ángulos.", "Contingut: el text que es veu.|Contenido: el texto que se ve.", "Etiqueta de tancar: igual, amb una barra.|Etiqueta de cerrar: igual, con una barra."],
        nota: "Encercla a la pissarra les tres parts amb tres colors diferents.|Rodea en la pizarra las tres partes con tres colores distintos." },
      { id: 's6', k: 'concepte', t: 'Títols, paràgrafs i negretes|Títulos, párrafos y negritas', code: '<h1>El meu gat</h1>\n<p>Es diu <b>Mixa</b> i és molt curiós.</p>',
        nota: "Fes notar que la b és dins del paràgraf: un element en pot contenir d'altres.|Haz notar que la b está dentro del párrafo: un elemento puede contener otros." },
      { id: 's7', k: 'anim', t: 'Dins de dins|Dentro de dentro', anim: 'wnest', x: "L'última etiqueta que obres és la primera que tanques.|La última etiqueta que abres es la primera que cierras.",
        nota: "Mostra unes nines russes o unes capses una dins l'altra si en tens.|Muestra unas muñecas rusas o unas cajas una dentro de otra si tienes." },
      { id: 's8', k: 'concepte', t: "L'esquelet de la pàgina|El esqueleto de la página", code: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>La meva web</title>\n  </head>\n  <body>\n    <h1>Hola!</h1>\n  </body>\n</html>',
        nota: "Head és el cap: informació que no es veu. Body és el cos: tot el que es veu. El title surt a la pestanya.|Head es la cabeza: información que no se ve. Body es el cuerpo: todo lo que se ve. El title sale en la pestaña." },
      { id: 's9', k: 'anim', t: 'Codi endreçat|Código ordenado', anim: 'wsource', x: "El navegador ignora els espais; les persones, no. Sagnem el que és a dins.|El navegador ignora los espacios; las personas, no. Sangramos lo que está dentro.",
        nota: "Ensenya el mateix codi sense sagnar i sagnat: quin s'entén millor?|Enseña el mismo código sin sangrar y sangrado: ¿cuál se entiende mejor?" },
      { id: 's10', k: 'activitat', t: 'Etiquetes de paper|Etiquetas de papel', timer: 8, punts: ["Un/a escriu un títol i dues frases.|Uno/a escribe un título y dos frases.", "L'altre/a hi posa les etiquetes de paper.|El otro/a pone las etiquetas de papel.", "Afegiu una negreta sense creuar etiquetes.|Añadid una negrita sin cruzar etiquetas.", "Canvieu els papers.|Cambiad los papeles."],
        nota: "Comprova que cada etiqueta d'obrir té la seva de tancar i que la negreta queda dins del paràgraf.|Comprueba que cada etiqueta de abrir tiene la suya de cerrar y que la negrita queda dentro del párrafo." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Etiquetes».|Abre la sesión «Etiquetas».", "Fes «Descobreix», «Prova» i «Investiga».|Haz «Descubre», «Prueba» e «Investiga».", "A l'editor lliure, esborra una barra a propòsit.|En el editor libre, borra una barra a propósito.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas de les etiquetes de paper, que toquin «Ho hem fet!»: ja l'han fet a classe.|En el paso de las etiquetas de papel, que toquen «¡Lo hemos hecho!»: ya lo han hecho en clase." },
      { id: 's12', k: 'repte', t: 'Programem junts|Programemos juntos', x: "Dicteu-me el codi: un títol amb el nom de la classe i un paràgraf amb una paraula en negreta.|Dictadme el código: un título con el nombre de la clase y un párrafo con una palabra en negrita.",
        code: '<h1>La classe de Tech Web</h1>\n<p>Avui hem après <b>HTML</b>.</p>',
        nota: "Escriu el que et diguin, també els errors, i deixa que la classe els descobreixi amb l'avís de l'editor.|Escribe lo que te digan, también los errores, y deja que la clase los descubra con el aviso del editor." },
      { id: 's13', k: 'repte', t: 'Reptes de codi|Retos de código', timer: 13, punts: ["1. El teu nom al títol|1. Tu nombre en el título", "2. Dos paràgrafs nous|2. Dos párrafos nuevos", "3. Caça els tres errors|3. Caza los tres errores", "4. Títol de pestanya i negretes|4. Título de pestaña y negritas", "Extra: negreta i cursiva alhora|Extra: negrita y cursiva a la vez"],
        nota: "Si algú s'encalla al repte 3, pregunta-li quantes etiquetes d'obrir i de tancar hi ha a cada línia.|Si alguien se atasca en el reto 3, pregúntale cuántas etiquetas de abrir y de cerrar hay en cada línea." },
      { id: 's14', k: 'activitat', t: 'Crea: la meva primera pàgina|Crea: mi primera página', timer: 7, punts: ["Un títol h1 amb el teu nom|Un título h1 con tu nombre", "Almenys tres paràgrafs|Al menos tres párrafos", "Paraules en negreta|Palabras en negrita", "Un títol de pestanya|Un título de pestaña"],
        nota: "Recorda que la pàgina es desa al portafoli: la podran ampliar a casa.|Recuerda que la página se guarda en el portafolio: la podrán ampliar en casa." },
      { id: 's15', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Un element: obrir, contingut i tancar amb barra.|Un elemento: abrir, contenido y cerrar con barra.", "Les etiquetes es nien i es tanquen en ordre invers.|Las etiquetas se anidan y se cierran en orden inverso.", "Head no es veu; body és tot el que es veu.|Head no se ve; body es todo lo que se ve."],
        nota: "Torna a la pregunta del principi: ara saben que el navegador ho sap per les etiquetes.|Vuelve a la pregunta del principio: ahora saben que el navegador lo sabe por las etiquetas." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Quines són les tres parts d'un element?|¿Cuáles son las tres partes de un elemento?", "Obres p i després b: quina tanques primer?|Abres p y después b: ¿cuál cierras primero?"],
        nota: "Anota qui confon l'ordre de tancament: la setmana vinent hi tornarem amb els títols.|Anota quién confunde el orden de cierre: la semana que viene volveremos a ello con los títulos." }
    ],
    print: [
      { id: 'p1', t: 'Etiquetes de paper|Etiquetas de papel', k: 'targetes',
        intro: "Un paquet per parella. Retalleu cada targeta: les d'obrir i les de tancar (amb barra) són parelles.|Un paquete por pareja. Recortad cada tarjeta: las de abrir y las de cerrar (con barra) son parejas.",
        items: [
          { t: "h1 · obrir|h1 · abrir", n: 1 }, { t: "/h1 · tancar|/h1 · cerrar", n: 1 },
          { t: "p · obrir|p · abrir", n: 3 }, { t: "/p · tancar|/p · cerrar", n: 3 },
          { t: "b · obrir|b · abrir", n: 2 }, { t: "/b · tancar|/b · cerrar", n: 2 }
        ] },
      { id: 'p2', t: "Fitxa: caça l'error|Ficha: caza el error", k: 'fitxa',
        intro: "Cada línia de codi té un error. Escriu-la ben feta. Les etiquetes s'escriuen entre «» per no confondre-les amb el text.|Cada línea de código tiene un error. Escríbela bien hecha. Las etiquetas se escriben entre «» para no confundirlas con el texto.",
        items: [
          { q: "«h1»El meu hàmster«h1»|«h1»Mi hámster«h1»", sol: "«h1»El meu hàmster«/h1»: a la de tancar hi falta la barra.|«h1»Mi hámster«/h1»: a la de cerrar le falta la barra." },
          { q: "«p»Menja «b»pipes«/p»«/b»|«p»Come «b»pipas«/p»«/b»", sol: "«p»Menja «b»pipes«/b»«/p»: primer es tanca la b, que és la de dins.|«p»Come «b»pipas«/b»«/p»: primero se cierra la b, que es la de dentro." },
          { q: "«p»Viu en una gàbia gran.|«p»Vive en una jaula grande.", sol: "«p»Viu en una gàbia gran.«/p»: falta l'etiqueta de tancar.|«p»Vive en una jaula grande.«/p»: falta la etiqueta de cerrar." },
          { q: "Dibuixa com es veurà: «h1»Pipa«/h1» «p»És «b»petita«/b».«/p»|Dibuja cómo se verá: «h1»Pipa«/h1» «p»Es «b»pequeña«/b».«/p»", sol: "«Pipa» en lletra gran i, a sota, la frase en lletra normal amb «petita» en negreta.|«Pipa» en letra grande y, debajo, la frase en letra normal con «pequeña» en negrita." }
        ] }
    ]
  },

  /* ===== w2-2 · Títols i paràgrafs ===== */
  'w2-2': {
    obj: [
      "L'alumne/a organitza una pàgina amb un sol h1 i seccions h2 i h3, sense saltar nivells, com l'índex d'un llibre.|El alumno/a organiza una página con un solo h1 y secciones h2 y h3, sin saltar niveles, como el índice de un libro.",
      "L'alumne/a explica que el navegador ajunta els espais i salts de línia del codi i fa servir br per partir línies dins un paràgraf.|El alumno/a explica que el navegador junta los espacios y saltos de línea del código y usa br para partir líneas dentro de un párrafo.",
      "L'alumne/a fa servir hr per marcar un canvi de tema i p per a cada idea.|El alumno/a usa hr para marcar un cambio de tema y p para cada idea.",
      "L'alumne/a distingeix strong i em (significat) de b i i (només aspecte) i els tria amb criteri.|El alumno/a distingue strong y em (significado) de b e i (solo aspecto) y los elige con criterio."
    ],
    comp: [
      "Competència digital (CD3): crear contingut digital estructurat amb HTML|Competencia digital (CD3): crear contenido digital estructurado con HTML",
      "Comunicació lingüística: jerarquia de la informació, títols i paràgrafs|Comunicación lingüística: jerarquía de la información, títulos y párrafos",
      "Pensament computacional: abstracció (estructura per sobre de l'aspecte) i depuració|Pensamiento computacional: abstracción (estructura por encima del aspecto) y depuración",
      "Ciutadania digital: accessibilitat per a lectors de pantalla|Ciudadanía digital: accesibilidad para lectores de pantalla"
    ],
    vocab: [
      ["Nivell de títol|Nivel de título", "De h1 (el més important) a h6; fan d'índex de la pàgina.|De h1 (el más importante) a h6; hacen de índice de la página."],
      ["Paràgraf|Párrafo", "Un bloc de text amb una sola idea, marcat amb p.|Un bloque de texto con una sola idea, marcado con p."],
      ["Etiqueta buida|Etiqueta vacía", "Una etiqueta sense contingut que no es tanca, com br o hr.|Una etiqueta sin contenido que no se cierra, como br o hr."],
      ["Espai en blanc|Espacio en blanco", "Espais i salts de línia del codi: el navegador els ajunta en un de sol.|Espacios y saltos de línea del código: el navegador los junta en uno solo."],
      ["Semàntica|Semántica", "El significat d'una etiqueta: strong vol dir important; b només és negreta.|El significado de una etiqueta: strong significa importante; b solo es negrita."],
      ["Lector de pantalla|Lector de pantalla", "Programa que llegeix la pàgina en veu alta a persones que no hi veuen.|Programa que lee la página en voz alta a personas que no ven."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Títols i paràgrafs»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Títulos y párrafos»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Revistes, diaris o llibres de text amb títols i subtítols (un per parella)|Revistas, periódicos o libros de texto con títulos y subtítulos (uno por pareja)"
      ],
      imprimir: ["Fitxa: l'índex desordenat|Ficha: el índice desordenado"],
      prep: [
        "Recollir revistes o diaris vells i marcar-hi un article amb subtítols per parella.|Recoger revistas o periódicos viejos y marcar un artículo con subtítulos por pareja.",
        "Imprimir una fitxa per alumne/a.|Imprimir una ficha por alumno/a.",
        "Provar abans el repte 3 (la guia de Lleida) per veure quins títols s'han de canviar.|Probar antes el reto 3 (la guía de Lleida) para ver qué títulos hay que cambiar."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: el mur de text|Bienvenida: el muro de texto", fase: 'inici',
        fa: "Projecta la diapositiva del mur de text i pregunta si el llegirien. Després repassa amb dues preguntes ràpides la sessió anterior: l'etiqueta de tancar i l'ordre de tancament.|Proyecta la diapositiva del muro de texto y pregunta si lo leerían. Después repasa con dos preguntas rápidas la sesión anterior: la etiqueta de cerrar y el orden de cierre.",
        diu: ["Llegiríeu aquest text? Per què no?|¿Leeríais este texto? ¿Por qué no?",
          "Què li falta perquè s'entengui d'un cop d'ull?|¿Qué le falta para que se entienda de un vistazo?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 13, t: "Títols, paràgrafs i etiquetes amb sentit|Títulos, párrafos y etiquetas con sentido", fase: 'teoria',
        fa: "Presenta els sis nivells de títol com un índex, no com sis mides. Llegeix en veu alta només els títols de l'exemple de l'hort. Demostra en directe que el navegador ajunta els espais i que br baixa de línia. Acaba comparant strong amb b: es veuen igual, però no volen dir el mateix.|Presenta los seis niveles de título como un índice, no como seis tamaños. Lee en voz alta solo los títulos del ejemplo del huerto. Demuestra en directo que el navegador junta los espacios y que br baja de línea. Acaba comparando strong con b: se ven igual, pero no significan lo mismo.",
        diu: ["Si només llegeixo els títols, entenc de què va la pàgina?|Si solo leo los títulos, ¿entiendo de qué va la página?",
          "He posat deu espais al codi. Quants en surten a la pàgina?|He puesto diez espacios en el código. ¿Cuántos salen en la página?",
          "Ho destaco perquè és important o només perquè quedi bonic?|¿Lo destaco porque es importante o solo porque quede bonito?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "L'índex de la revista|El índice de la revista", fase: 'desconnectat',
        fa: "En parelles, busquen un article amb subtítols, en copien l'índex sagnat i marquen cada línia amb h1, h2 o h3. Després decideixen si una paraula destacada seria strong o em. Recull dos índexs i comenta'ls amb la classe.|En parejas, buscan un artículo con subtítulos, copian su índice sangrado y marcan cada línea con h1, h2 o h3. Después deciden si una palabra destacada sería strong o em. Recoge dos índices y coméntalos con la clase.",
        diu: ["Quin és l'únic h1 d'aquest article?|¿Cuál es el único h1 de este artículo?",
          "Aquest subtítol és un capítol o una part d'un capítol?|¿Este subtítulo es un capítulo o una parte de un capítulo?"],
        slides: ['s10'], app: "Cap: activitat sense pantalla. A l'app, al pas «L'índex de la revista», toquen «Ho hem fet!».|Ninguna: actividad sin pantalla. En la app, en el paso «El índice de la revista», tocan «¡Lo hemos hecho!».", org: "Parelles|Parejas" },
      { min: 11, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. Al laboratori de text, demana que provin d'afegir espais i salts de línia i que activin els Raigs X.|Cada alumno/a avanza hasta la pausa activa. En el laboratorio de texto, pide que prueben a añadir espacios y saltos de línea y que activen los Rayos X.",
        diu: ["Al poema: on hi ha d'haver un br perquè baixi de línia?|En el poema: ¿dónde tiene que haber un br para que baje de línea?",
          "A la guia de Lleida, quin títol trenca l'índex?|En la guía de Lleida, ¿qué título rompe el índice?"],
        slides: ['s11'], app: "De «Recorda» fins a «Investiga»: les dues preguntes, les dues històries, les targetes de «Descobreix», prediu l'excursió, tria el codi del poema, l'error de la guia i el laboratori de text.|De «Recuerda» hasta «Investiga»: las dos preguntas, las dos historias, las tarjetas de «Descubre», predice la excursión, elige el código del poema, el error de la guía y el laboratorio de texto.", org: "Individual|Individual" },
      { min: 13, t: "Pausa activa i reptes de codi|Pausa activa y retos de código", fase: 'ordinador',
        fa: "Feu la pausa activa dels títols amb el cos. Després arregla amb la classe l'índex de la diapositiva 12 i deixa'ls fer els quatre reptes. El repte extra és per a qui acabi abans.|Haced la pausa activa de los títulos con el cuerpo. Después arregla con la clase el índice de la diapositiva 12 y déjales hacer los cuatro retos. El reto extra es para quien acabe antes.",
        diu: ["Al repte 3 no cal tocar cap text: només les etiquetes.|En el reto 3 no hace falta tocar ningún texto: solo las etiquetas.",
          "Recordeu: br i hr no es tanquen.|Recordad: br y hr no se cierran.",
          "Quin avís us surt sota l'editor? Llegiu-lo abans de preguntar.|¿Qué aviso os sale debajo del editor? Leedlo antes de preguntar."],
        slides: ['s12', 's13'], app: "«Pausa activa» i els reptes 1 a 4 (l'article de l'hort, el poema, la guia de Lleida, l'avís de l'excursió) i el repte extra (l'índex del llibre).|«Pausa activa» y los retos 1 a 4 (el artículo del huerto, el poema, la guía de Lleida, el aviso de la excursión) y el reto extra (el índice del libro).", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: el meu article per a la revista|Crea: mi artículo para la revista", fase: 'crea',
        fa: "Cada alumne/a escriu un article sobre un tema que conegui bé, amb índex de debò, i el desa. Abans de començar, que pensin tres títols de secció en veu baixa.|Cada alumno/a escribe un artículo sobre un tema que conozca bien, con índice de verdad, y lo guarda. Antes de empezar, que piensen tres títulos de sección en voz baja.",
        diu: ["Primer l'índex: quines seccions tindrà el vostre article?|Primero el índice: ¿qué secciones tendrá vuestro artículo?",
          "Paràgrafs curts: una idea, un p.|Párrafos cortos: una idea, un p."],
        slides: ['s14'], app: "Pas «Crea»: El meu article per a la revista.|Paso «Crea»: Mi artículo para la revista.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals i fes les del tiquet a la porta.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales y haz las del ticket en la puerta.",
        diu: ["Quants h1 té una pàgina?|¿Cuántos h1 tiene una página?",
          "Com baixo de línia dins un paràgraf?|¿Cómo bajo de línea dentro de un párrafo?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Tria el nivell de títol per la mida (posa un h4 perquè «es veu més petit»).|Elige el nivel de título por el tamaño (pone un h4 porque «se ve más pequeño»).",
        "Pregunta-li on aniria aquest títol a l'índex d'un llibre. Explica que la mida la canviarem amb CSS d'aquí a poques sessions.|Pregúntale dónde iría este título en el índice de un libro. Explica que el tamaño lo cambiaremos con CSS dentro de pocas sesiones."],
      ["Posa més d'un h1, un per a cada secció.|Pone más de un h1, uno para cada sección.",
        "Recorda la portada del llibre: només hi ha un títol. Les seccions són capítols, és a dir, h2.|Recuerda la portada del libro: solo hay un título. Las secciones son capítulos, es decir, h2."],
      ["Prem Enter al codi i espera que la pàgina baixi de línia.|Pulsa Intro en el código y espera que la página baje de línea.",
        "Que miri la vista prèvia: el navegador ha ajuntat els salts. Pregunta-li quina etiqueta fa el salt de debò.|Que mire la vista previa: el navegador ha juntado los saltos. Pregúntale qué etiqueta hace el salto de verdad."],
      ["Separa paràgrafs amb molts br seguits.|Separa párrafos con muchos br seguidos.",
        "Explica que br és per a línies d'una mateixa idea (poema, adreça). Si canvia la idea, cal un p nou.|Explica que br es para líneas de una misma idea (poema, dirección). Si cambia la idea, hace falta un p nuevo."],
      ["Intenta tancar br o hr amb una etiqueta amb barra.|Intenta cerrar br o hr con una etiqueta con barra.",
        "Recorda que són etiquetes buides: no tenen contingut, per tant no hi ha res a tancar.|Recuerda que son etiquetas vacías: no tienen contenido, por lo tanto no hay nada que cerrar."]
    ],
    diff: {
      mes: "Fer el repte extra de l'índex del llibre i ampliar l'article amb una secció h3 dins d'una h2. Escriure un poema propi de quatre versos amb br dins l'article.|Hacer el reto extra del índice del libro y ampliar el artículo con una sección h3 dentro de una h2. Escribir un poema propio de cuatro versos con br dentro del artículo.",
      menys: "Fer primer l'índex de l'article en paper, amb sagnat, i marcar-hi els nivells. Centrar-se en els reptes 1 i 2 i, a l'article, demanar només un h1, dues h2 i un paràgraf a cada secció.|Hacer primero el índice del artículo en papel, con sangría, y marcar los niveles. Centrarse en los retos 1 y 2 y, en el artículo, pedir solo un h1, dos h2 y un párrafo en cada sección."
    },
    aval: {
      ticket: ["Quants h1 ha de tenir una pàgina i per què?|¿Cuántos h1 tiene que tener una página y por qué?",
        "Quina diferència hi ha entre strong i b?|¿Qué diferencia hay entre strong y b?"],
      rubric: [
        ["Jerarquia de títols|Jerarquía de títulos", "Fa servir un sol h1 i seccions h2 i h3 sense saltar nivells.|Usa un solo h1 y secciones h2 y h3 sin saltar niveles.", "Fa servir títols, però de vegades tria el nivell per la mida.|Usa títulos, pero a veces elige el nivel por el tamaño."],
        ["Espais, br i hr|Espacios, br y hr", "Sap que el navegador ajunta els espais i fa servir br i hr on toca.|Sabe que el navegador junta los espacios y usa br y hr donde toca.", "Fa servir br per separar paràgrafs o espera que Enter baixi de línia.|Usa br para separar párrafos o espera que Intro baje de línea."],
        ["Etiquetes amb sentit|Etiquetas con sentido", "Tria strong per a coses importants i em per remarcar, i ho explica.|Elige strong para cosas importantes y em para remarcar, y lo explica.", "Fa servir negretes i cursives sense distingir el significat.|Usa negritas y cursivas sin distinguir el significado."]
      ]
    },
    casa: "A casa, amb el mòbil, l'alumne/a pot ensenyar a algú de la família l'article desat i, junts, buscar una web de notícies i llegir-ne només els títols: entenen de què va la notícia?|En casa, con el móvil, el alumno/a puede enseñar a alguien de la familia el artículo guardado y, juntos, buscar una web de noticias y leer solo los títulos: ¿entienden de qué va la noticia?",
    slides: [
      { id: 's1', k: 'portada', t: 'Títols i paràgrafs|Títulos y párrafos', x: "Avui donarem estructura als textos: títols, seccions i paraules destacades.|Hoy daremos estructura a los textos: títulos, secciones y palabras destacadas.",
        nota: "Explica la missió: la revista de l'escola passa a la web i necessita articles ben organitzats.|Explica la misión: la revista de la escuela pasa a la web y necesita artículos bien organizados." },
      { id: 's2', k: 'pregunta', t: 'El mur de text|El muro de texto', x: "Un text de deu línies sense títols ni paràgrafs. El llegiríeu?|Un texto de diez líneas sin títulos ni párrafos. ¿Lo leeríais?",
        code: '<p>El nostre hort Aquest curs hem plantat un hort al pati Què hem plantat Tomàquets enciams i maduixes Qui en té cura Cada setmana un grup diferent rega i treu les males herbes i al final del curs farem una amanida amb tot el que haguem collit</p>',
        nota: "Deixa que diguin què hi falta: títols, separació, ordre. Són els continguts d'avui.|Deja que digan qué falta: títulos, separación, orden. Son los contenidos de hoy." },
      { id: 's3', k: 'repas', t: 'Recordem|Recordemos', punts: ["Element: obrir, contingut i tancar amb barra.|Elemento: abrir, contenido y cerrar con barra.", "L'última que obres és la primera que tanques.|La última que abres es la primera que cierras.", "El title va a head; el que es veu, a body.|El title va en head; lo que se ve, en body."],
        nota: "Fes les dues preguntes de «Recorda» a mà alçada abans d'obrir l'app.|Haz las dos preguntas de «Recuerda» a mano alzada antes de abrir la app." },
      { id: 's4', k: 'anim', t: 'Sis nivells de títol|Seis niveles de título', anim: 'whead', x: "De h1 a h6: no són sis mides, són sis nivells d'un índex.|De h1 a h6: no son seis tamaños, son seis niveles de un índice.",
        nota: "Regla d'or: un sol h1 per pàgina, com el títol de la portada d'un llibre.|Regla de oro: un solo h1 por página, como el título de la portada de un libro." },
      { id: 's5', k: 'concepte', t: 'Els títols fan d\'índex|Los títulos hacen de índice', code: '<h1>El nostre hort</h1>\n<p>Aquest curs hem plantat un hort.</p>\n<h2>Què hem plantat</h2>\n<p>Tomàquets i maduixes.</p>\n<h3>Les maduixes</h3>\n<p>Creixen a poc a poc.</p>\n<h2>Qui en té cura</h2>\n<p>Cada setmana, un grup.</p>',
        nota: "Llegeix només els títols en veu alta. Pregunta: el h3 de quin h2 forma part? Insisteix que no se salten nivells.|Lee solo los títulos en voz alta. Pregunta: ¿el h3 de qué h2 forma parte? Insiste en que no se saltan niveles." },
      { id: 's6', k: 'anim', t: 'Cada idea, el seu paràgraf|Cada idea, su párrafo', anim: 'wtag', x: "Un p és una caixa per a una idea. Quan canvies d'idea, obres un p nou.|Un p es una caja para una idea. Cuando cambias de idea, abres un p nuevo.",
        nota: "Torna al mur de text: on el partiríeu en paràgrafs?|Vuelve al muro de texto: ¿dónde lo partiríais en párrafos?" },
      { id: 's7', k: 'concepte', t: 'El navegador ajunta els espais|El navegador junta los espacios', code: '<p>Hola,        com\n\n\n        estàs?</p>',
        punts: ["Molts espais o salts al codi = un sol espai a la pàgina.|Muchos espacios o saltos en el código = un solo espacio en la página.", "Avantatge: podem sagnar el codi sense espatllar res.|Ventaja: podemos sangrar el código sin estropear nada."],
        nota: "Fes la demostració en directe a l'editor de l'app: afegeix espais i mostra que no surten.|Haz la demostración en directo en el editor de la app: añade espacios y muestra que no salen." },
      { id: 's8', k: 'concepte', t: 'Salt de línia i canvi de tema|Salto de línea y cambio de tema', code: '<p>Cau la pluja,<br>canta el riu,<br>dorm el gat.</p>\n<hr>\n<p>Aquí comença un altre tema.</p>',
        punts: ["br: baixa de línia dins el mateix paràgraf.|br: baja de línea dentro del mismo párrafo.", "hr: línia de canvi de tema.|hr: línea de cambio de tema.", "Totes dues són buides: no es tanquen.|Las dos son vacías: no se cierran."],
        nota: "Exemples per a br: adreces, poemes, lletres de cançons. No per separar paràgrafs.|Ejemplos para br: direcciones, poemas, letras de canciones. No para separar párrafos." },
      { id: 's9', k: 'concepte', t: 'Sentit o aspecte|Sentido o aspecto', code: '<p><strong>No toquis el forn calent.</strong></p>\n<p>No és un gat <em>qualsevol</em>.</p>\n<p>Té <b>cent</b> pàgines.</p>',
        punts: ["strong: això és important.|strong: esto es importante.", "em: ho dic amb un altre to.|em: lo digo con otro tono.", "b i i: només canvien l'aspecte.|b e i: solo cambian el aspecto."],
        nota: "Llegeix la frase de em amb èmfasi i sense: canvia el sentit. Explica que els lectors de pantalla poden fer aquesta diferència.|Lee la frase de em con énfasis y sin él: cambia el sentido. Explica que los lectores de pantalla pueden hacer esta diferencia." },
      { id: 's10', k: 'activitat', t: "L'índex de la revista|El índice de la revista", timer: 8, punts: ["Busqueu un article amb subtítols.|Buscad un artículo con subtítulos.", "Copieu-ne l'índex, amb sagnat.|Copiad su índice, con sangría.", "Marqueu cada línia: h1, h2 o h3.|Marcad cada línea: h1, h2 o h3.", "Una paraula destacada: strong o em?|Una palabra destacada: ¿strong o em?"],
        nota: "Comprova que cada parella té un sol h1. Si troben un salt de nivell a l'article, celebra-ho: és un error real!|Comprueba que cada pareja tiene un solo h1. Si encuentran un salto de nivel en el artículo, celébralo: ¡es un error real!" },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 11, punts: ["Obre la sessió «Títols i paràgrafs».|Abre la sesión «Títulos y párrafos».", "Fes «Descobreix», «Prova» i «Investiga».|Haz «Descubre», «Prueba» e «Investiga».", "Al laboratori, prova espais i salts de línia.|En el laboratorio, prueba espacios y saltos de línea.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "A la pregunta del poema, demana que expliquin per què les altres dues opcions no fan el mateix.|En la pregunta del poema, pide que expliquen por qué las otras dos opciones no hacen lo mismo." },
      { id: 's12', k: 'repte', t: "Arreglem l'índex junts|Arreglemos el índice juntos", x: "Aquest índex té dos errors. Quins títols canviaríeu?|Este índice tiene dos errores. ¿Qué títulos cambiaríais?",
        code: '<h1>Guia del riu</h1>\n<h1>Els ocells</h1>\n<h3>Els ànecs</h3>\n<h2>Els peixos</h2>\n<h4>Les carpes</h4>',
        nota: "Solució: el segon h1 passa a h2 i el h4 passa a h3. Fes-ho a l'editor amb el que diguin.|Solución: el segundo h1 pasa a h2 y el h4 pasa a h3. Hazlo en el editor con lo que digan." },
      { id: 's13', k: 'repte', t: 'Reptes de codi|Retos de código', timer: 13, punts: ["1. L'article de l'hort: h1 i h2|1. El artículo del huerto: h1 y h2", "2. El poema: br i títol|2. El poema: br y título", "3. La guia de Lleida: arregla l'índex|3. La guía de Lleida: arregla el índice", "4. L'avís de l'excursió: br, hr, strong i em|4. El aviso de la excursión: br, hr, strong y em", "Extra: l'índex d'un llibre|Extra: el índice de un libro"],
        nota: "Al repte 4, recomana fer una etiqueta cada vegada i mirar la vista prèvia.|En el reto 4, recomienda hacer una etiqueta cada vez y mirar la vista previa." },
      { id: 's14', k: 'activitat', t: 'Crea: el meu article|Crea: mi artículo', timer: 7, punts: ["Un sol h1 i almenys dues h2|Un solo h1 y al menos dos h2", "Un paràgraf a cada secció|Un párrafo en cada sección", "strong i em amb sentit|strong y em con sentido", "Una línia hr i un títol de pestanya|Una línea hr y un título de pestaña"],
        nota: "Si algú no sap de què escriure, proposa: el meu barri, el meu esport, el meu animal preferit.|Si alguien no sabe de qué escribir, propón: mi barrio, mi deporte, mi animal preferido." },
      { id: 's15', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Un sol h1; seccions amb h2 i h3, sense salts.|Un solo h1; secciones con h2 y h3, sin saltos.", "El navegador ajunta els espais: br baixa de línia, hr canvia de tema.|El navegador junta los espacios: br baja de línea, hr cambia de tema.", "strong i em tenen significat; b i i, només aspecte.|strong y em tienen significado; b e i, solo aspecto."],
        nota: "Torna al mur de text del principi: ara el sabrien convertir en una pàgina que es llegeix bé.|Vuelve al muro de texto del principio: ahora sabrían convertirlo en una página que se lee bien." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Quants h1 ha de tenir una pàgina?|¿Cuántos h1 tiene que tener una página?", "Quina diferència hi ha entre strong i b?|¿Qué diferencia hay entre strong y b?"],
        nota: "Anota qui encara tria els títols per la mida: hi tornarem quan fem CSS.|Anota quién aún elige los títulos por el tamaño: volveremos a ello cuando hagamos CSS." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: l'índex desordenat|Ficha: el índice desordenado", k: 'fitxa',
        intro: "Les etiquetes s'escriuen entre «» per no confondre-les amb el text. Respon a cada pregunta.|Las etiquetas se escriben entre «» para no confundirlas con el texto. Responde a cada pregunta.",
        items: [
          { q: "Ordena i posa nivell (h1, h2 o h3) a aquests títols d'una pàgina sobre el bàsquet: Les regles · El bàsquet · Els equips · Quant dura un partit|Ordena y pon nivel (h1, h2 o h3) a estos títulos de una página sobre el baloncesto: Las reglas · El baloncesto · Los equipos · Cuánto dura un partido",
            sol: "h1 El bàsquet · h2 Les regles · h3 Quant dura un partit · h2 Els equips (també és vàlid posar Els equips abans de Les regles).|h1 El baloncesto · h2 Las reglas · h3 Cuánto dura un partido · h2 Los equipos (también es válido poner Los equipos antes de Las reglas)." },
          { q: "Aquest índex té un error: «h1»Animals«/h1» «h2»Mamífers«/h2» «h4»El gos«/h4». Corregeix-lo.|Este índice tiene un error: «h1»Animales«/h1» «h2»Mamíferos«/h2» «h4»El perro«/h4». Corrígelo.",
            sol: "«h3»El gos«/h3»: després d'un h2 no es pot saltar a h4.|«h3»El perro«/h3»: después de un h2 no se puede saltar a h4." },
          { q: "Escriu el codi d'una adreça en tres línies dins un sol paràgraf.|Escribe el código de una dirección en tres líneas dentro de un solo párrafo.",
            sol: "«p»Carrer Major, 12«br»25001 Lleida«br»Catalunya«/p» (qualsevol adreça amb dos br és vàlida).|«p»Calle Mayor, 12«br»25001 Lleida«br»Cataluña«/p» (cualquier dirección con dos br es válida)." },
          { q: "Tria strong o em: a) «Prohibit passar» en un cartell. b) «M'agrada molt» dit amb emoció.|Elige strong o em: a) «Prohibido pasar» en un cartel. b) «Me gusta mucho» dicho con emoción.",
            sol: "a) strong, perquè és un avís important. b) em, perquè és èmfasi en el to.|a) strong, porque es un aviso importante. b) em, porque es énfasis en el tono." }
        ] }
    ]
  },

  /* ===== w2-3 · Llistes ===== */
  'w2-3': {
    obj: [
      "L'alumne/a crea llistes amb ul i ol, amb cada element dins un li.|El alumno/a crea listas con ul y ol, con cada elemento dentro de un li.",
      "L'alumne/a tria entre ul i ol segons si l'ordre canvia el significat i ho justifica.|El alumno/a elige entre ul y ol según si el orden cambia el significado y lo justifica.",
      "L'alumne/a nia una llista dins d'un li i la tanca en el lloc correcte.|El alumno/a anida una lista dentro de un li y la cierra en el lugar correcto.",
      "L'alumne/a fa servir els atributs reversed i start d'una llista numerada.|El alumno/a usa los atributos reversed y start de una lista numerada."
    ],
    comp: [
      "Competència digital (CD3): crear contingut digital organitzat amb llistes HTML|Competencia digital (CD3): crear contenido digital organizado con listas HTML",
      "Pensament computacional: seqüència, classificació i estructures niades|Pensamiento computacional: secuencia, clasificación y estructuras anidadas",
      "Comunicació lingüística: textos instructius i enumeracions|Comunicación lingüística: textos instructivos y enumeraciones"
    ],
    vocab: [
      ["Llista no ordenada (ul)|Lista no ordenada (ul)", "Llista amb pics: l'ordre dels elements no importa.|Lista con viñetas: el orden de los elementos no importa."],
      ["Llista ordenada (ol)|Lista ordenada (ol)", "Llista numerada: l'ordre dels elements sí que importa.|Lista numerada: el orden de los elementos sí importa."],
      ["Element de llista (li)|Elemento de lista (li)", "Cada element d'una llista; sempre va dins d'un ul o d'un ol.|Cada elemento de una lista; siempre va dentro de un ul o de un ol."],
      ["Llista niada|Lista anidada", "Una llista sencera dins d'un li, per fer categories o subapartats.|Una lista entera dentro de un li, para hacer categorías o subapartados."],
      ["Atribut|Atributo", "Una paraula extra dins l'etiqueta d'obrir, com reversed o start.|Una palabra extra dentro de la etiqueta de abrir, como reversed o start."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Llistes»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Listas»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Dos fulls i un llapis per alumne/a|Dos hojas y un lápiz por alumno/a"
      ],
      imprimir: ["Targetes: llista de la compra|Tarjetas: lista de la compra", "Fitxa: ul, ol o niada?|Ficha: ¿ul, ol o anidada?"],
      prep: [
        "Imprimir i retallar un paquet de targetes de la compra per grup de 3 i barrejar-les.|Imprimir y recortar un paquete de tarjetas de la compra por grupo de 3 y mezclarlas.",
        "Imprimir una fitxa per alumne/a.|Imprimir una ficha por alumno/a.",
        "Provar abans el repte 4 de l'app (la compra per categories) per veure on van les categories noves.|Probar antes el reto 4 de la app (la compra por categorías) para ver dónde van las categorías nuevas."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: les llistes són a tot arreu|Bienvenida: las listas están en todas partes", fase: 'inici',
        fa: "Pregunta on han vist llistes avui (menús, horaris, missatges…). Repassa amb dues preguntes la sessió anterior: br i els nivells de títol.|Pregunta dónde han visto listas hoy (menús, horarios, mensajes…). Repasa con dos preguntas la sesión anterior: br y los niveles de título.",
        diu: ["Quantes llistes heu fet servir avui sense adonar-vos-en?|¿Cuántas listas habéis usado hoy sin daros cuenta?",
          "En quines llistes l'ordre és important?|¿En qué listas el orden es importante?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "ul, ol, li i llistes niades|ul, ol, li y listas anidadas", fase: 'teoria',
        fa: "Presenta les dues llistes amb l'animació i la pregunta màgica: si canvio l'ordre, canvia el significat? Escriu una llista en directe i afegeix un pas al mig per mostrar que els números es corregeixen sols. Acaba amb la llista niada: assenyala amb el dit on s'obre i on es tanca el li que conté la subllista.|Presenta las dos listas con la animación y la pregunta mágica: ¿si cambio el orden, cambia el significado? Escribe una lista en directo y añade un paso en medio para mostrar que los números se corrigen solos. Acaba con la lista anidada: señala con el dedo dónde se abre y dónde se cierra el li que contiene la sublista.",
        diu: ["Si canvio l'ordre de la llista de la compra, passa alguna cosa?|Si cambio el orden de la lista de la compra, ¿pasa algo?",
          "I si canvio l'ordre dels passos per plantar una llavor?|¿Y si cambio el orden de los pasos para plantar una semilla?",
          "On es tanca el li de «Fruita»: abans o després de la llista de dins?|¿Dónde se cierra el li de «Fruita»: antes o después de la lista de dentro?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Llistes de paper|Listas de papel", fase: 'desconnectat',
        fa: "Primer, en grups de 3, classifiquen les targetes de la compra en categories i les col·loquen a la taula amb sagnat, com una llista niada. Després, en parelles, fan l'activitat de les instruccions exactes de l'app: un dicta passos numerats i l'altre dibuixa.|Primero, en grupos de 3, clasifican las tarjetas de la compra en categorías y las colocan en la mesa con sangría, como una lista anidada. Después, en parejas, hacen la actividad de las instrucciones exactas de la app: uno dicta pasos numerados y el otro dibuja.",
        diu: ["Quines categories heu fet? Hi ha més d'una manera bona.|¿Qué categorías habéis hecho? Hay más de una manera buena.",
          "El dibuix ha sortit igual? Quin pas no estava prou clar?|¿El dibujo ha salido igual? ¿Qué paso no estaba lo bastante claro?"],
        slides: ['s10'], app: "Cap: activitat sense pantalla. A l'app, al pas «Llistes de paper», toquen «Ho hem fet!».|Ninguna: actividad sin pantalla. En la app, en el paso «Listas de papel», tocan «¡Lo hemos hecho!».", org: "Grups de 3 i després parelles|Grupos de 3 y después parejas" },
      { min: 11, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. A l'activitat d'ordenar les línies, si s'encallen, que pensin primer quina és la caixa de fora i quina la de dins.|Cada alumno/a avanza hasta la pausa activa. En la actividad de ordenar las líneas, si se atascan, que piensen primero cuál es la caja de fuera y cuál la de dentro.",
        diu: ["Quina és la primera línia i quina l'última? Les caixes de fora.|¿Cuál es la primera línea y cuál la última? Las cajas de fuera.",
          "Al laboratori, afegiu reversed a l'ol. Què passa amb els números?|En el laboratorio, añadid reversed al ol. ¿Qué pasa con los números?"],
        slides: ['s11'], app: "De «Recorda» fins a «Investiga»: les preguntes, les històries, les targetes, ordena les línies, prediu la llista de la piscina, tria el codi de la fruita, l'error de l'excursió i el laboratori de llistes.|De «Recuerda» hasta «Investiga»: las preguntas, las historias, las tarjetas, ordena las líneas, predice la lista de la piscina, elige el código de la fruta, el error de la excursión y el laboratorio de listas.", org: "Individual|Individual" },
      { min: 14, t: "Pausa activa i reptes de codi|Pausa activa y retos de código", fase: 'ordinador',
        fa: "Feu la pausa activa de la llista de moviments. Després escriviu junts la llista niada de la diapositiva 12 i deixa'ls fer els quatre reptes. El repte extra és per a qui acabi abans.|Haced la pausa activa de la lista de movimientos. Después escribid juntos la lista anidada de la diapositiva 12 y déjales hacer los cuatro retos. El reto extra es para quien acabe antes.",
        diu: ["Al repte 3 hi ha tres errors diferents. Llegiu els avisos un per un.|En el reto 3 hay tres errores distintos. Leed los avisos uno por uno.",
          "Al repte 4, copieu el bloc de «Begudes» sencer i canvieu-ne els textos.|En el reto 4, copiad el bloque de «Begudes» entero y cambiad sus textos.",
          "Sagneu bé el codi: us estalviarà errors.|Sangrad bien el código: os ahorrará errores."],
        slides: ['s12', 's13'], app: "«Pausa activa» i els reptes 1 a 4 (l'avió de paper, el top 5, la compra espatllada, la compra per categories) i el repte extra (el compte enrere).|«Pausa activa» y los retos 1 a 4 (el avión de papel, el top 5, la compra estropeada, la compra por categorías) y el reto extra (la cuenta atrás).", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: les meves llistes|Crea: mis listas", fase: 'crea',
        fa: "Cada alumne/a fa una pàgina de llistes sobre si mateix/a, amb una ul, un rànquing ol i una llista niada, i la desa.|Cada alumno/a hace una página de listas sobre sí mismo/a, con una ul, un ranking ol y una lista anidada, y la guarda.",
        diu: ["Quin rànquing fareu? Llibres, cançons, menjars, llocs…|¿Qué ranking haréis? Libros, canciones, comidas, sitios…",
          "Cada llista amb el seu títol h2.|Cada lista con su título h2."],
        slides: ['s14'], app: "Pas «Crea»: Les meves llistes.|Paso «Crea»: Mis listas.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa que responguin les preguntes finals i fes les del tiquet a la porta.|Repasa el resumen, deja que respondan las preguntas finales y haz las del ticket en la puerta.",
        diu: ["Unes instruccions: ul o ol?|Unas instrucciones: ¿ul u ol?",
          "On va la llista de dins d'una llista niada?|¿Dónde va la lista de dentro de una lista anidada?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu els números a mà dins dels li (1., 2., 3.).|Escribe los números a mano dentro de los li (1., 2., 3.).",
        "Que miri la vista prèvia amb una ol: surten els números dues vegades. Pregunta-li qui ja numera la llista.|Que mire la vista previa con una ol: salen los números dos veces. Pregúntale quién numera ya la lista."],
      ["Posa li fora de cap ul o ol.|Pone li fuera de ningún ul u ol.",
        "Recorda que el ul és la caixa i els li són el que hi ha a dins: sense caixa, no és una llista.|Recuerda que el ul es la caja y los li son lo que hay dentro: sin caja, no es una lista."],
      ["Tanca el li de la categoria abans de la subllista i deixa la llista de dins a fora.|Cierra el li de la categoría antes de la sublista y deja la lista de dentro fuera.",
        "Assenyala amb el dit on s'obre el li i pregunta-li: la llista de dins forma part d'aquest element? Llavors, on s'ha de tancar?|Señala con el dedo dónde se abre el li y pregúntale: ¿la lista de dentro forma parte de este elemento? Entonces, ¿dónde se tiene que cerrar?"],
      ["Obre la llista amb ul i la tanca amb ol, o al revés.|Abre la lista con ul y la cierra con ol, o al revés.",
        "Que llegeixi l'avís de l'editor i compari la primera i l'última línia de la llista.|Que lea el aviso del editor y compare la primera y la última línea de la lista."],
      ["Fa servir ol per a tot perquè «queda més ordenat».|Usa ol para todo porque «queda más ordenado».",
        "Torna a la pregunta màgica: si canvio l'ordre, canvia el significat? Si no, és una ul.|Vuelve a la pregunta mágica: ¿si cambio el orden, cambia el significado? Si no, es una ul."]
    ],
    diff: {
      mes: "Fer el repte extra del compte enrere i afegir a la pàgina de llistes una llista amb tres nivells (per exemple, Esports, dins Bàsquet, dins els equips preferits). Provar l'atribut start.|Hacer el reto extra de la cuenta atrás y añadir a la página de listas una lista con tres niveles (por ejemplo, Deportes, dentro Baloncesto, dentro los equipos preferidos). Probar el atributo start.",
      menys: "Tenir a la taula les targetes de la compra classificades mentre es fa el repte 4. A la pàgina de llistes, demanar una ul i una ol, i la llista niada només si hi ha temps, partint del codi d'exemple de la targeta.|Tener en la mesa las tarjetas de la compra clasificadas mientras se hace el reto 4. En la página de listas, pedir una ul y una ol, y la lista anidada solo si hay tiempo, partiendo del código de ejemplo de la tarjeta."
    },
    aval: {
      ticket: ["Posa un exemple de llista que ha de ser ol i un de llista que ha de ser ul.|Pon un ejemplo de lista que tiene que ser ol y uno de lista que tiene que ser ul.",
        "On es tanca el li que té una llista a dins?|¿Dónde se cierra el li que tiene una lista dentro?"],
      rubric: [
        ["Llistes ul i ol|Listas ul y ol", "Escriu llistes amb tots els li dins d'un ul o d'un ol i ben tancats.|Escribe listas con todos los li dentro de un ul o de un ol y bien cerrados.", "Escriu llistes, però de vegades deixa un li fora o barreja ul i ol en el tancament.|Escribe listas, pero a veces deja un li fuera o mezcla ul y ol en el cierre."],
        ["Triar la llista|Elegir la lista", "Tria ul o ol segons l'ordre i ho justifica.|Elige ul u ol según el orden y lo justifica.", "Tria la llista per l'aspecte (pics o números).|Elige la lista por el aspecto (viñetas o números)."],
        ["Llistes niades|Listas anidadas", "Nia una llista dins d'un li i la tanca al lloc correcte.|Anida una lista dentro de un li y la cierra en el lugar correcto.", "Fa la llista niada amb ajuda o la deixa fora del li.|Hace la lista anidada con ayuda o la deja fuera del li."]
      ]
    },
    casa: "A casa, amb el mòbil, l'alumne/a pot fer amb la família la llista de la compra de la setmana a l'editor, agrupada per categories, i ensenyar-los la diferència entre una ul i una ol.|En casa, con el móvil, el alumno/a puede hacer con la familia la lista de la compra de la semana en el editor, agrupada por categorías, y enseñarles la diferencia entre una ul y una ol.",
    slides: [
      { id: 's1', k: 'portada', t: 'Llistes|Listas', x: "Avui ordenarem la informació amb llistes, i posarem llistes dins de llistes.|Hoy ordenaremos la información con listas, y pondremos listas dentro de listas.",
        nota: "Explica la missió: la llista de la compra de la festa és un desastre i l'hem d'organitzar.|Explica la misión: la lista de la compra de la fiesta es un desastre y tenemos que organizarla." },
      { id: 's2', k: 'pregunta', t: 'On hi ha llistes?|¿Dónde hay listas?', x: "Digueu llistes que heu vist avui: a l'escola, al mòbil, a casa…|Decid listas que habéis visto hoy: en la escuela, en el móvil, en casa…",
        nota: "Apunta-les a la pissarra en dues columnes, sense dir per què: les que l'ordre importa i les que no.|Apúntalas en la pizarra en dos columnas, sin decir por qué: las que el orden importa y las que no." },
      { id: 's3', k: 'repas', t: 'Recordem|Recordemos', punts: ["Un sol h1; seccions amb h2 i h3.|Un solo h1; secciones con h2 y h3.", "br baixa de línia; hr canvia de tema.|br baja de línea; hr cambia de tema.", "strong és important; em és èmfasi.|strong es importante; em es énfasis."],
        nota: "Fes les dues preguntes de «Recorda» a mà alçada.|Haz las dos preguntas de «Recuerda» a mano alzada." },
      { id: 's4', k: 'anim', t: 'Dues llistes|Dos listas', anim: 'wlist', x: "ul: amb pics, l'ordre no importa. ol: numerada, l'ordre sí que importa.|ul: con viñetas, el orden no importa. ol: numerada, el orden sí importa.",
        nota: "Torna a les dues columnes de la pissarra: quina columna és ul i quina és ol?|Vuelve a las dos columnas de la pizarra: ¿qué columna es ul y cuál es ol?" },
      { id: 's5', k: 'concepte', t: 'Cada element, un li|Cada elemento, un li', code: '<h3>A la motxilla</h3>\n<ul>\n  <li>Aigua</li>\n  <li>Entrepà</li>\n  <li>Gorra</li>\n</ul>',
        punts: ["ul és la caixa.|ul es la caja.", "Cada li és un element.|Cada li es un elemento.", "Els li sempre van dins d'un ul o d'un ol.|Los li siempre van dentro de un ul o de un ol."],
        nota: "Fes notar el sagnat: els li van cap a dins perquè són dins del ul.|Haz notar la sangría: los li van hacia dentro porque están dentro del ul." },
      { id: 's6', k: 'concepte', t: 'Passos en ordre|Pasos en orden', code: '<ol>\n  <li>Omple el test de terra.</li>\n  <li>Fes un forat amb el dit.</li>\n  <li>Posa-hi la llavor.</li>\n  <li>Rega-la una mica.</li>\n</ol>',
        nota: "Afegeix en directe un pas al mig i mostra com es corregeixen els números sols. No s'escriuen els números a mà.|Añade en directo un paso en medio y muestra cómo se corrigen los números solos. No se escriben los números a mano." },
      { id: 's7', k: 'pregunta', t: 'La pregunta màgica|La pregunta mágica', x: "Si canvio l'ordre, canvia el significat? Sí: ol. No: ul.|¿Si cambio el orden, cambia el significado? Sí: ol. No: ul.",
        punts: ["Un rànquing de cançons|Un ranking de canciones", "Els materials de plàstica|Los materiales de plástica", "Les instruccions d'un moble|Las instrucciones de un mueble", "Les teves aficions|Tus aficiones"],
        nota: "Respostes: ol, ul, ol, ul. Demana que ho justifiquin amb la pregunta màgica.|Respuestas: ol, ul, ol, ul. Pide que lo justifiquen con la pregunta mágica." },
      { id: 's8', k: 'anim', t: "Una llista dins d'una altra|Una lista dentro de otra", anim: 'wnest', x: "La subllista va dins d'un li, abans del seu tancament.|La sublista va dentro de un li, antes de su cierre.",
        nota: "Compara-ho amb una carpeta que conté altres carpetes.|Compáralo con una carpeta que contiene otras carpetas." },
      { id: 's9', k: 'concepte', t: 'On es tanca el li?|¿Dónde se cierra el li?', code: '<ul>\n  <li>Fruita\n    <ul>\n      <li>Pomes</li>\n      <li>Plàtans</li>\n    </ul>\n  </li>\n  <li>Llet</li>\n</ul>',
        punts: ["El li de «Fruita» s'obre.|El li de «Fruita» se abre.", "A dins, tota una llista ul.|Dentro, toda una lista ul.", "Després, i només després, es tanca.|Después, y solo después, se cierra."],
        nota: "Afegeix-hi els atributs de ol si queda temps: reversed compta enrere i start canvia el primer número.|Añade los atributos de ol si queda tiempo: reversed cuenta hacia atrás y start cambia el primer número." },
      { id: 's10', k: 'activitat', t: 'Llistes de paper|Listas de papel', timer: 8, punts: ["Classifiqueu les targetes de la compra per categories.|Clasificad las tarjetas de la compra por categorías.", "Col·loqueu-les amb sagnat, com una llista niada.|Colocadlas con sangría, como una lista anidada.", "Instruccions exactes: un dicta, l'altre dibuixa.|Instrucciones exactas: uno dicta, el otro dibuja."],
        nota: "Les categories poden ser diferents a cada grup: totes són vàlides si s'expliquen.|Las categorías pueden ser distintas en cada grupo: todas son válidas si se explican." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 11, punts: ["Obre la sessió «Llistes».|Abre la sesión «Listas».", "Fes «Descobreix», «Prova» i «Investiga».|Haz «Descubre», «Prueba» e «Investiga».", "Ordena les línies: primer les caixes de fora.|Ordena las líneas: primero las cajas de fuera.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas de les llistes de paper, que toquin «Ho hem fet!».|En el paso de las listas de papel, que toquen «¡Lo hemos hecho!»." },
      { id: 's12', k: 'repte', t: 'Programem junts|Programemos juntos', x: "Feu-me la llista del material de l'escola en dues categories: estoig i motxilla.|Hacedme la lista del material de la escuela en dos categorías: estuche y mochila.",
        code: '<ul>\n  <li>Estoig\n    <ul>\n      <li>Llapis</li>\n      <li>Goma</li>\n    </ul>\n  </li>\n  <li>Motxilla\n    <ul>\n      <li>Llibres</li>\n      <li>Esmorzar</li>\n    </ul>\n  </li>\n</ul>',
        nota: "Escriu-la a l'editor amb el que et dictin i, abans de cada tancament, pregunta quina etiqueta toca.|Escríbela en el editor con lo que te dicten y, antes de cada cierre, pregunta qué etiqueta toca." },
      { id: 's13', k: 'repte', t: 'Reptes de codi|Retos de código', timer: 14, punts: ["1. L'avió de paper: de ul a ol|1. El avión de papel: de ul a ol", "2. El teu top 5|2. Tu top 5", "3. La compra espatllada|3. La compra estropeada", "4. La compra per categories|4. La compra por categorías", "Extra: compte enrere amb reversed|Extra: cuenta atrás con reversed"],
        nota: "Al repte 3, si algú s'encalla, que arregli un error cada vegada i miri com canvien els avisos.|En el reto 3, si alguien se atasca, que arregle un error cada vez y mire cómo cambian los avisos." },
      { id: 's14', k: 'activitat', t: 'Crea: les meves llistes|Crea: mis listas', timer: 7, punts: ["Un h1 i una presentació|Un h1 y una presentación", "Una ul de coses que t'agraden|Una ul de cosas que te gustan", "Un rànquing ol|Un ranking ol", "Una llista niada|Una lista anidada"],
        nota: "Recorda que cada llista porta el seu títol h2: així l'índex de la pàgina continua ben fet.|Recuerda que cada lista lleva su título h2: así el índice de la página sigue bien hecho." },
      { id: 's15', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["ul: l'ordre no importa. ol: l'ordre importa.|ul: el orden no importa. ol: el orden importa.", "Cada element és un li, sempre dins d'una llista.|Cada elemento es un li, siempre dentro de una lista.", "La subllista va dins d'un li, abans del seu tancament.|La sublista va dentro de un li, antes de su cierre."],
        nota: "Anuncia que la setmana vinent farem servir tot el que hem après en un projecte: una recepta.|Anuncia que la semana que viene usaremos todo lo que hemos aprendido en un proyecto: una receta." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Un exemple de llista ol i un de llista ul.|Un ejemplo de lista ol y uno de lista ul.", "On es tanca el li que té una llista a dins?|¿Dónde se cierra el li que tiene una lista dentro?"],
        nota: "Demana a cada alumne/a que porti la setmana vinent una recepta de casa apuntada (o pensada).|Pide a cada alumno/a que traiga la semana que viene una receta de casa apuntada (o pensada)." }
    ],
    print: [
      { id: 'p1', t: 'Targetes: llista de la compra|Tarjetas: lista de la compra', k: 'targetes',
        intro: "Un paquet per grup de 3. Barregeu-les i classifiqueu-les en categories, col·locant-les amb sagnat com una llista niada.|Un paquete por grupo de 3. Mezcladlas y clasificadlas en categorías, colocándolas con sangría como una lista anidada.",
        items: [
          { t: "Pomes|Manzanas", n: 1 }, { t: "Plàtans|Plátanos", n: 1 }, { t: "Taronges|Naranjas", n: 1 },
          { t: "Llet|Leche", n: 1 }, { t: "Iogurts|Yogures", n: 1 }, { t: "Formatge|Queso", n: 1 },
          { t: "Pa|Pan", n: 1 }, { t: "Galetes|Galletas", n: 1 }, { t: "Sabó|Jabón", n: 1 }, { t: "Pasta de dents|Pasta de dientes", n: 1 },
          { t: "Categoria en blanc: …|Categoría en blanco: …", n: 4 }
        ] },
      { id: 'p2', t: "Fitxa: ul, ol o niada?|Ficha: ¿ul, ol o anidada?", k: 'fitxa',
        intro: "Les etiquetes s'escriuen entre «» per no confondre-les amb el text.|Las etiquetas se escriben entre «» para no confundirlas con el texto.",
        items: [
          { q: "Quina llista faries servir? a) Els passos per fer un batut. b) Els colors que t'agraden. c) Els 3 primers d'una cursa.|¿Qué lista usarías? a) Los pasos para hacer un batido. b) Los colores que te gustan. c) Los 3 primeros de una carrera.",
            sol: "a) ol. b) ul. c) ol.|a) ol. b) ul. c) ol." },
          { q: "Troba els dos errors: «ul» «li»Pa«/li» «li»Ous«/li» «/ol» «li»Llet«/li»|Encuentra los dos errores: «ul» «li»Pan«/li» «li»Huevos«/li» «/ol» «li»Leche«/li»",
            sol: "La llista es tanca amb «/ul», no «/ol», i el li de la llet ha d'anar dins, abans del tancament.|La lista se cierra con «/ul», no «/ol», y el li de la leche tiene que ir dentro, antes del cierre." },
          { q: "Escriu el codi d'una llista amb la categoria Esports i, a dins, Bàsquet i Natació.|Escribe el código de una lista con la categoría Deportes y, dentro, Baloncesto y Natación.",
            sol: "«ul» «li»Esports «ul» «li»Bàsquet«/li» «li»Natació«/li» «/ul» «/li» «/ul»|«ul» «li»Deportes «ul» «li»Baloncesto«/li» «li»Natación«/li» «/ul» «/li» «/ul»" },
          { q: "Dibuixa com es veurà: «ol reversed» «li»Bronze«/li» «li»Plata«/li» «li»Or«/li» «/ol»|Dibuja cómo se verá: «ol reversed» «li»Bronce«/li» «li»Plata«/li» «li»Oro«/li» «/ol»",
            sol: "3. Bronze · 2. Plata · 1. Or (compta cap enrere).|3. Bronce · 2. Plata · 1. Oro (cuenta hacia atrás)." }
        ] }
    ]
  },

  /* ===== w2-4 · Projecte: la recepta ===== */
  'w2-4': {
    obj: [
      "L'alumne/a planifica una pàgina amb un esbós abans d'escriure el codi.|El alumno/a planifica una página con un boceto antes de escribir el código.",
      "L'alumne/a construeix per parts una pàgina completa amb títol de pestanya, h1, introducció, seccions h2, ul, ol, strong, em, hr i una llista niada.|El alumno/a construye por partes una página completa con título de pestaña, h1, introducción, secciones h2, ul, ol, strong, em, hr y una lista anidada.",
      "L'alumne/a tria l'etiqueta adequada per a cada part del contingut i ho justifica.|El alumno/a elige la etiqueta adecuada para cada parte del contenido y lo justifica.",
      "L'alumne/a comprova la pàgina després de cada tros i corregeix els errors amb els avisos de l'editor.|El alumno/a comprueba la página después de cada trozo y corrige los errores con los avisos del editor."
    ],
    comp: [
      "Competència digital (CD3): crear un document web complet i estructurat|Competencia digital (CD3): crear un documento web completo y estructurado",
      "Pensament computacional: descomposició d'un projecte en parts i depuració|Pensamiento computacional: descomposición de un proyecto en partes y depuración",
      "Comunicació lingüística: el text instructiu (la recepta) i l'entrevista|Comunicación lingüística: el texto instructivo (la receta) y la entrevista",
      "Competència personal i social: valorar el patrimoni culinari de la família|Competencia personal y social: valorar el patrimonio culinario de la familia"
    ],
    vocab: [
      ["Esbós (wireframe)|Boceto (wireframe)", "Dibuix de caixes que diu què va a cada lloc de la pàgina.|Dibujo de cajas que dice qué va en cada sitio de la página."],
      ["Projecte|Proyecto", "Una pàgina gran que es fa per parts, comprovant cada part.|Una página grande que se hace por partes, comprobando cada parte."],
      ["Secció|Sección", "Una part de la pàgina amb el seu títol h2.|Una parte de la página con su título h2."],
      ["Fitxa|Ficha", "Dades curtes d'una recepta (temps, racions, dificultat) en línies amb br.|Datos cortos de una receta (tiempo, raciones, dificultad) en líneas con br."],
      ["Depurar|Depurar", "Trobar i corregir errors del codi.|Encontrar y corregir errores del código."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la recepta»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la receta»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La recepta que cada alumne/a porta de casa (apuntada o pensada)|La receta que cada alumno/a trae de casa (apuntada o pensada)",
        "Llapis i colors per a l'esbós|Lápices y colores para el boceto"
      ],
      imprimir: ["Plantilla: esbós de la recepta|Plantilla: boceto de la receta"],
      prep: [
        "Recordar la setmana anterior que portin una recepta de casa. Tenir preparades dues o tres receptes senzilles per a qui no en porti.|Recordar la semana anterior que traigan una receta de casa. Tener preparadas dos o tres recetas sencillas para quien no traiga.",
        "Imprimir una plantilla d'esbós per alumne/a.|Imprimir una plantilla de boceto por alumno/a.",
        "Fer abans els quatre passos de les galetes a l'app: cada pas comença amb el codi del pas anterior.|Hacer antes los cuatro pasos de las galletas en la app: cada paso empieza con el código del paso anterior."
      ]
    },
    plan: [
      { min: 4, t: "Benvinguda: el llibre de receptes de la classe|Bienvenida: el libro de recetas de la clase", fase: 'inici',
        fa: "Presenta el projecte: entre tots farem un llibre de receptes digital. Pregunta qui ha portat una recepta de casa i de qui és. Repassa ràpidament ul i ol amb les preguntes de «Recorda».|Presenta el proyecto: entre todos haremos un libro de recetas digital. Pregunta quién ha traído una receta de casa y de quién es. Repasa rápidamente ul y ol con las preguntas de «Recuerda».",
        diu: ["Qui ha portat una recepta? De qui és?|¿Quién ha traído una receta? ¿De quién es?",
          "Per als ingredients, ul o ol? I per als passos?|Para los ingredientes, ¿ul u ol? ¿Y para los pasos?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Com és una pàgina de receptes|Cómo es una página de recetas", fase: 'teoria',
        fa: "Explica que els professionals primer fan un esbós. Mostra l'estructura d'una recepta i relaciona cada part amb una etiqueta. Remarca tres detalls: quantitats en strong, ingredients per grups amb una llista niada i fitxa amb br. Acaba amb el consell clau: comprovar després de cada tros.|Explica que los profesionales primero hacen un boceto. Muestra la estructura de una receta y relaciona cada parte con una etiqueta. Remarca tres detalles: cantidades en strong, ingredientes por grupos con una lista anidada y ficha con br. Acaba con el consejo clave: comprobar después de cada trozo.",
        diu: ["Amb les mans plenes de farina, què busqueu primer a la recepta?|Con las manos llenas de harina, ¿qué buscáis primero en la receta?",
          "Per què les quantitats van en strong?|¿Por qué las cantidades van en strong?",
          "Si ho escrius tot i només ho comproves al final, què pot passar?|Si lo escribes todo y solo lo compruebas al final, ¿qué puede pasar?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 7, t: "L'esbós de la meva recepta|El boceto de mi receta", fase: 'desconnectat',
        fa: "Cada alumne/a omple la plantilla d'esbós amb la seva recepta: dibuixa les caixes i hi escriu l'etiqueta de cada part. Qui no ha portat recepta tria una de les teves o fa l'entrevista a un company/a.|Cada alumno/a rellena la plantilla de boceto con su receta: dibuja las cajas y escribe la etiqueta de cada parte. Quien no ha traído receta elige una de las tuyas o hace la entrevista a un compañero/a.",
        diu: ["Quines seccions tindrà la vostra recepta?|¿Qué secciones tendrá vuestra receta?",
          "Teniu alguna part que necessiti una llista niada?|¿Tenéis alguna parte que necesite una lista anidada?"],
        slides: ['s8'], app: "Cap: activitat sense pantalla. A l'app, al pas «Entrevista a la cuina», toquen «Ho hem fet!».|Ninguna: actividad sin pantalla. En la app, en el paso «Entrevista en la cocina», tocan «¡Lo hemos hecho!».", org: "Individual o parelles|Individual o parejas" },
      { min: 8, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. A la truita de patates, demana que activin els Raigs X i assenyalin on comença i on acaba cada secció.|Cada alumno/a avanza hasta la pausa activa. En la tortilla de patatas, pide que activen los Rayos X y señalen dónde empieza y dónde termina cada sección.",
        diu: ["A l'error del sucre, compareu les dues etiquetes strong de la línia.|En el error del azúcar, comparad las dos etiquetas strong de la línea.",
          "Amb els Raigs X: quantes caixes hi ha dins de la llista d'ingredients?|Con los Rayos X: ¿cuántas cajas hay dentro de la lista de ingredientes?"],
        slides: ['s9'], app: "De «Recorda» fins a «Investiga»: les preguntes, les històries, les targetes, prediu els ingredients, tria el codi de la fitxa, l'error del sucre i la truita de patates.|De «Recuerda» hasta «Investiga»: las preguntas, las historias, las tarjetas, predice los ingredientes, elige el código de la ficha, el error del azúcar y la tortilla de patatas.", org: "Individual|Individual" },
      { min: 15, t: "Pausa activa i les galetes, tros a tros|Pausa activa y las galletas, trozo a trozo", fase: 'ordinador',
        fa: "Feu la pausa activa de la cuina invisible. Després, cada alumne/a fa els quatre passos de les galetes: esquelet, ingredients, passos i consells. Cada pas comença on va acabar l'anterior. Fes una aturada al cap de 7 minuts per resoldre dubtes comuns a la pantalla gran.|Haced la pausa activa de la cocina invisible. Después, cada alumno/a hace los cuatro pasos de las galletas: esqueleto, ingredientes, pasos y consejos. Cada paso empieza donde acabó el anterior. Haz una parada a los 7 minutos para resolver dudas comunes en la pantalla grande.",
        diu: ["Fes un li, comprova'l i després copia'l: és el truc dels professionals.|Haz un li, compruébalo y después cópialo: es el truco de los profesionales.",
          "Al pas 3, recordeu esborrar els números escrits.|En el paso 3, recordad borrar los números escritos.",
          "Abans de passar al pas següent: cap avís vermell?|Antes de pasar al paso siguiente: ¿ningún aviso rojo?"],
        slides: ['s10', 's11'], app: "«Pausa activa» i els passos 1 a 4 de «Reptes» (esquelet, ingredients, passos, consells) i el repte extra de la fitxa.|«Pausa activa» y los pasos 1 a 4 de «Retos» (esqueleto, ingredientes, pasos, consejos) y el reto extra de la ficha.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 14, t: "Crea: la recepta de casa|Crea: la receta de casa", fase: 'crea',
        fa: "Cada alumne/a construeix la pàgina de la seva recepta seguint l'esbós, per parts, i la desa. Als 10 minuts, en parelles, es fan una revisió amb la llista de criteris de la diapositiva 13: un llegeix el codi i l'altre marca els criteris.|Cada alumno/a construye la página de su receta siguiendo el boceto, por partes, y la guarda. A los 10 minutos, por parejas, se hacen una revisión con la lista de criterios de la diapositiva 13: uno lee el código y el otro marca los criterios.",
        diu: ["Seguiu el vostre esbós: una caixa, un tros de codi, una comprovació.|Seguid vuestro boceto: una caja, un trozo de código, una comprobación.",
          "Podeu copiar l'estructura de les galetes i canviar-ne el contingut.|Podéis copiar la estructura de las galletas y cambiar su contenido.",
          "Revisor/a: digues què està bé abans de dir què falta.|Revisor/a: di qué está bien antes de decir qué falta."],
        slides: ['s12', 's13'], app: "Pas «Crea»: La recepta de casa.|Paso «Crea»: La receta de casa.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 4, t: "Tancament: la unitat d'HTML|Cierre: la unidad de HTML", fase: 'tancament',
        fa: "Mostra dues o tres receptes a la pantalla gran (amb permís dels autors) i destaca una bona decisió de cada una. Repassa la unitat amb el resum, deixa que responguin les preguntes finals i fes les del tiquet.|Muestra dos o tres recetas en la pantalla grande (con permiso de los autores) y destaca una buena decisión de cada una. Repasa la unidad con el resumen, deja que respondan las preguntas finales y haz las del ticket.",
        diu: ["Què heu après a fer amb HTML en aquestes quatre sessions?|¿Qué habéis aprendido a hacer con HTML en estas cuatro sesiones?",
          "La setmana vinent: imatges i enllaços!|La semana que viene: ¡imágenes y enlaces!"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit. L'insígnia de la unitat apareix en acabar.|«Cierre»: las dos preguntas finales y cómo me he sentido. La insignia de la unidad aparece al acabar.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Ho escriu tot de cop i, al final, té molts errors i no sap per on començar.|Lo escribe todo de golpe y, al final, tiene muchos errores y no sabe por dónde empezar.",
        "Que comenci pel primer avís de l'editor, que és el de més amunt. Proposa-li tornar a construir la pàgina per seccions, comprovant cada secció.|Que empiece por el primer aviso del editor, que es el de más arriba. Propónle volver a construir la página por secciones, comprobando cada sección."],
      ["Posa tot el text de l'ingredient en strong i no només la quantitat.|Pone todo el texto del ingrediente en strong y no solo la cantidad.",
        "Pregunta-li què busca el cuiner d'un cop d'ull: el nom o la quantitat? Si tot és important, res no ho és.|Pregúntale qué busca el cocinero de un vistazo: ¿el nombre o la cantidad? Si todo es importante, nada lo es."],
      ["Copia els passos amb els números escrits dins d'una ol.|Copia los pasos con los números escritos dentro de una ol.",
        "Que miri la vista prèvia: veurà els números dues vegades.|Que mire la vista previa: verá los números dos veces."],
      ["Perd el fil de les llistes niades i tanca els li al lloc equivocat.|Pierde el hilo de las listas anidadas y cierra los li en el lugar equivocado.",
        "Demana-li que sagni el codi abans de buscar l'error: d'un cop d'ull es veurà què hi ha dins de què.|Pídele que sangre el código antes de buscar el error: de un vistazo se verá qué hay dentro de qué."],
      ["No té cap recepta i es bloqueja.|No tiene ninguna receta y se bloquea.",
        "Ofereix-li una de les receptes de reserva o que faci la d'un plat que li agradi molt, encara que hagi d'imaginar les quantitats.|Ofrécele una de las recetas de reserva o que haga la de un plato que le guste mucho, aunque tenga que imaginar las cantidades."]
    ],
    diff: {
      mes: "Fer el repte extra de la fitxa i afegir a la recepta pròpia ingredients per grups (llista niada), una secció h3 dins de Consells i una frase de la història de la recepta amb em. Ajudar un company/a com a revisor/a.|Hacer el reto extra de la ficha y añadir a la receta propia ingredientes por grupos (lista anidada), una sección h3 dentro de Consejos y una frase de la historia de la receta con em. Ayudar a un compañero/a como revisor/a.",
      menys: "Fer els passos 1, 2 i 3 de les galetes i, per a la recepta pròpia, partir del codi de les galetes i canviar-ne només els textos. Demanar com a mínim títol, ingredients en ul i passos en ol.|Hacer los pasos 1, 2 y 3 de las galletas y, para la receta propia, partir del código de las galletas y cambiar solo los textos. Pedir como mínimo título, ingredientes en ul y pasos en ol."
    },
    aval: {
      ticket: ["Quina etiqueta has fet servir per als ingredients i quina per als passos? Per què?|¿Qué etiqueta has usado para los ingredientes y cuál para los pasos? ¿Por qué?",
        "Quin error has trobat avui al teu codi i com l'has arreglat?|¿Qué error has encontrado hoy en tu código y cómo lo has arreglado?"],
      rubric: [
        ["Estructura de la pàgina|Estructura de la página", "Títol de pestanya, un sol h1, introducció i seccions h2 sense salts de nivell.|Título de pestaña, un solo h1, introducción y secciones h2 sin saltos de nivel.", "Té títols, però falta alguna part o hi ha salts de nivell.|Tiene títulos, pero falta alguna parte o hay saltos de nivel."],
        ["Llistes|Listas", "Ingredients en ul, passos en ol sense números a mà i una llista niada ben tancada.|Ingredientes en ul, pasos en ol sin números a mano y una lista anidada bien cerrada.", "Fa les llistes, però confon ul i ol o la llista niada queda fora del li.|Hace las listas, pero confunde ul y ol o la lista anidada queda fuera del li."],
        ["Detalls amb sentit|Detalles con sentido", "Fa servir strong per a les quantitats i els avisos, em per remarcar i hr entre seccions.|Usa strong para las cantidades y los avisos, em para remarcar y hr entre secciones.", "Fa servir negretes i línies, però sense un criteri clar.|Usa negritas y líneas, pero sin un criterio claro."],
        ["Procés i depuració|Proceso y depuración", "Treballa per parts, comprova cada part i deixa el codi sagnat i sense errors.|Trabaja por partes, comprueba cada parte y deja el código sangrado y sin errores.", "Ho escriu tot de cop i necessita ajuda per trobar els errors.|Lo escribe todo de golpe y necesita ayuda para encontrar los errores."]
      ]
    },
    casa: "A casa, amb el mòbil, l'alumne/a pot ensenyar la pàgina de la recepta a la persona que li va explicar i, si la feu junts a la cuina, comprovar si els passos estaven prou clars. Si en falta algun, es pot afegir a l'editor.|En casa, con el móvil, el alumno/a puede enseñar la página de la receta a la persona que se la explicó y, si la hacéis juntos en la cocina, comprobar si los pasos estaban lo bastante claros. Si falta alguno, se puede añadir en el editor.",
    slides: [
      { id: 's1', k: 'portada', t: 'Projecte: la recepta|Proyecto: la receta', x: "Farem el llibre de receptes digital de la classe: una pàgina completa per a cadascú.|Haremos el libro de recetas digital de la clase: una página completa para cada uno.",
        nota: "Explica que és el projecte final de la unitat i que farà servir tot l'HTML après fins ara.|Explica que es el proyecto final de la unidad y que usará todo el HTML aprendido hasta ahora." },
      { id: 's2', k: 'pregunta', t: 'La recepta de casa|La receta de casa', x: "Quina recepta heu portat? Qui la fa a casa vostra?|¿Qué receta habéis traído? ¿Quién la hace en vuestra casa?",
        nota: "Deixa que en diguin unes quantes. Valora la diversitat de receptes i famílies sense comparar-les.|Deja que digan unas cuantas. Valora la diversidad de recetas y familias sin compararlas." },
      { id: 's3', k: 'repas', t: "L'HTML de la unitat|El HTML de la unidad", punts: ["Etiquetes ben tancades i niades.|Etiquetas bien cerradas y anidadas.", "Un h1, seccions h2 i h3; br i hr.|Un h1, secciones h2 y h3; br y hr.", "strong i em amb sentit.|strong y em con sentido.", "ul, ol i llistes niades.|ul, ol y listas anidadas."],
        nota: "Fes les preguntes de «Recorda»: ul o ol per als passos, i com es fa una llista niada.|Haz las preguntas de «Recuerda»: ul u ol para los pasos, y cómo se hace una lista anidada." },
      { id: 's4', k: 'anim', t: "Primer, l'esbós|Primero, el boceto", anim: 'wplan', x: "Un dibuix de caixes abans del codi: cada caixa serà una etiqueta.|Un dibujo de cajas antes del código: cada caja será una etiqueta.",
        nota: "Dibuixa a la pissarra l'esbós d'una recepta: títol, introducció, ingredients, passos i consells.|Dibuja en la pizarra el boceto de una receta: título, introducción, ingredientes, pasos y consejos." },
      { id: 's5', k: 'concepte', t: "L'estructura d'una recepta|La estructura de una receta", code: "<h1>Pa amb tomàquet</h1>\n<p>L'esmorzar de tota la vida.</p>\n<h2>Ingredients</h2>\n<ul>\n  <li>Pa de pagès</li>\n  <li>Un tomàquet madur</li>\n</ul>\n<h2>Passos</h2>\n<ol>\n  <li>Torra el pa.</li>\n  <li>Frega-hi el tomàquet.</li>\n</ol>",
        nota: "Relaciona cada caixa de l'esbós de la pissarra amb un tros d'aquest codi.|Relaciona cada caja del boceto de la pizarra con un trozo de este código." },
      { id: 's6', k: 'concepte', t: 'Els detalls que fan una bona recepta|Los detalles que hacen una buena receta', code: '<p><strong>Temps:</strong> 30 minuts<br>\n<strong>Racions:</strong> 4</p>\n<hr>\n<ul>\n  <li>Per a la massa:\n    <ul>\n      <li><strong>200 g</strong> de farina</li>\n    </ul>\n  </li>\n</ul>',
        punts: ["Fitxa amb br.|Ficha con br.", "Quantitats en strong.|Cantidades en strong.", "Ingredients per grups: llista niada.|Ingredientes por grupos: lista anidada.", "hr entre seccions.|hr entre secciones."],
        nota: "Pregunta per què la fitxa fa servir br i no tres paràgrafs: són línies curtes d'una mateixa idea.|Pregunta por qué la ficha usa br y no tres párrafos: son líneas cortas de una misma idea." },
      { id: 's7', k: 'anim', t: 'Comprova cada tros|Comprueba cada trozo', anim: 'wsource', x: "Codi sagnat, una etiqueta per línia i vista prèvia després de cada tros.|Código sangrado, una etiqueta por línea y vista previa después de cada trozo.",
        nota: "Explica que és com cuinar: es tasta mentre es cuina, no només al final.|Explica que es como cocinar: se prueba mientras se cocina, no solo al final." },
      { id: 's8', k: 'activitat', t: "L'esbós de la meva recepta|El boceto de mi receta", timer: 7, punts: ["Dibuixa una caixa per a cada part.|Dibuja una caja para cada parte.", "Escriu-hi l'etiqueta: h1, p, h2, ul, ol…|Escribe la etiqueta: h1, p, h2, ul, ol…", "Apunta els ingredients amb quantitats.|Apunta los ingredientes con cantidades.", "Apunta els passos en ordre.|Apunta los pasos en orden."],
        nota: "Qui no té recepta pot fer l'entrevista a un company/a o triar una recepta de reserva.|Quien no tiene receta puede hacer la entrevista a un compañero/a o elegir una receta de reserva." },
      { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 8, punts: ["Obre la sessió «Projecte: la recepta».|Abre la sesión «Proyecto: la receta».", "Fes «Descobreix», «Prova» i «Investiga».|Haz «Descubre», «Prueba» e «Investiga».", "A la truita, activa els Raigs X.|En la tortilla, activa los Rayos X.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas de l'entrevista, que toquin «Ho hem fet!»: ja han fet l'esbós a classe.|En el paso de la entrevista, que toquen «¡Lo hemos hecho!»: ya han hecho el boceto en clase." },
      { id: 's10', k: 'repte', t: 'Les galetes, tros a tros|Las galletas, trozo a trozo', timer: 15, punts: ["1. Esquelet: title, h1 i introducció|1. Esqueleto: title, h1 e introducción", "2. Ingredients: h2, ul i strong|2. Ingredientes: h2, ul y strong", "3. Passos: de paràgrafs a ol|3. Pasos: de párrafos a ol", "4. Consells: hr, em i llista niada|4. Consejos: hr, em y lista anidada", "Extra: la fitxa amb br|Extra: la ficha con br"],
        nota: "Cada pas comença amb el codi bo del pas anterior: ningú no es queda enrere per un error.|Cada paso empieza con el código bueno del paso anterior: nadie se queda atrás por un error." },
      { id: 's11', k: 'repte', t: 'Del paràgraf a la llista|Del párrafo a la lista', x: "Com convertim aquests passos en una ol? Què hem d'esborrar?|¿Cómo convertimos estos pasos en una ol? ¿Qué tenemos que borrar?",
        code: '<h2>Passos</h2>\n<p>1. Barreja la mantega amb el sucre.</p>\n<p>2. Afegeix l\'ou i remena.</p>\n<p>3. Fes boletes.</p>',
        nota: "Fes-ho en directe a l'aturada dels 7 minuts: envoltar amb ol, canviar p per li i esborrar els números.|Hazlo en directo en la parada de los 7 minutos: envolver con ol, cambiar p por li y borrar los números." },
      { id: 's12', k: 'activitat', t: 'Crea: la recepta de casa|Crea: la receta de casa', timer: 14, punts: ["Segueix el teu esbós.|Sigue tu boceto.", "Construeix una secció cada vegada.|Construye una sección cada vez.", "Comprova la vista prèvia després de cada secció.|Comprueba la vista previa después de cada sección.", "Desa-la al final.|Guárdala al final."],
        nota: "Als 10 minuts, passa a la diapositiva de revisió per parelles.|A los 10 minutos, pasa a la diapositiva de revisión por parejas." },
      { id: 's13', k: 'activitat', t: 'Revisió per parelles|Revisión por parejas', timer: 4, punts: ["Title i un sol h1|Title y un solo h1", "Introducció i seccions h2|Introducción y secciones h2", "Ingredients en ul amb strong|Ingredientes en ul con strong", "Passos en ol sense números a mà|Pasos en ol sin números a mano", "Llista niada, em i hr|Lista anidada, em y hr"],
        nota: "Un llegeix el codi i l'altre marca els criteris. Primer es diu què està bé i després què falta.|Uno lee el código y el otro marca los criterios. Primero se dice qué está bien y después qué falta." },
      { id: 's14', k: 'concepte', t: 'El llibre de receptes|El libro de recetas', x: "Mirem algunes receptes de la classe. Quina bona decisió hi veieu?|Miramos algunas recetas de la clase. ¿Qué buena decisión veis?",
        nota: "Mostra només les receptes dels qui donin permís. Destaca decisions concretes: una bona llista niada, una fitxa clara…|Muestra solo las recetas de quienes den permiso. Destaca decisiones concretas: una buena lista anidada, una ficha clara…" },
      { id: 's15', k: 'resum', t: 'Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad', punts: ["Una pàgina gran es fa per parts, comprovant cada part.|Una página grande se hace por partes, comprobando cada parte.", "Cada contingut té la seva etiqueta: títols, paràgrafs i llistes.|Cada contenido tiene su etiqueta: títulos, párrafos y listas.", "El codi sagnat ens ajuda a trobar els errors.|El código sangrado nos ayuda a encontrar los errores."],
        nota: "Felicita la classe: han fet una pàgina web completa escrita a mà. La propera unitat hi afegirem imatges i enllaços.|Felicita a la clase: han hecho una página web completa escrita a mano. En la próxima unidad añadiremos imágenes y enlaces." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Ingredients i passos: quina llista i per què?|Ingredientes y pasos: ¿qué lista y por qué?", "Quin error has trobat avui i com l'has arreglat?|¿Qué error has encontrado hoy y cómo lo has arreglado?"],
        nota: "Anota qui no ha pogut acabar la recepta: la pot acabar a casa des del portafoli.|Anota quién no ha podido acabar la receta: la puede acabar en casa desde el portafolio." }
    ],
    print: [
      { id: 'p1', t: 'Plantilla: esbós de la recepta|Plantilla: boceto de la receta', k: 'fitxa',
        intro: "Omple cada apartat amb la teva recepta i, al costat, escriu l'etiqueta que faràs servir. Les etiquetes s'escriuen entre «».|Rellena cada apartado con tu receta y, al lado, escribe la etiqueta que usarás. Las etiquetas se escriben entre «».",
        items: [
          { q: "Nom de la recepta (títol de pestanya i títol principal):|Nombre de la receta (título de pestaña y título principal):", sol: "«title» i «h1» amb el nom. Exemple: Coca de recapte.|«title» y «h1» con el nombre. Ejemplo: Coca de recapte." },
          { q: "Introducció: de qui és la recepta i quan es fa.|Introducción: de quién es la receta y cuándo se hace.", sol: "Un «p» amb una o dues frases.|Un «p» con una o dos frases." },
          { q: "Fitxa: temps, racions i dificultat.|Ficha: tiempo, raciones y dificultad.", sol: "Un «p» amb «br» entre les línies i els noms en «strong».|Un «p» con «br» entre las líneas y los nombres en «strong»." },
          { q: "Ingredients amb quantitats (si hi ha grups, escriu-los a part).|Ingredientes con cantidades (si hay grupos, escríbelos aparte).", sol: "«h2»Ingredients«/h2» i una «ul»; quantitats en «strong»; grups amb una llista niada dins d'un «li».|«h2»Ingredientes«/h2» y una «ul»; cantidades en «strong»; grupos con una lista anidada dentro de un «li»." },
          { q: "Passos en ordre.|Pasos en orden.", sol: "«h2»Passos«/h2» i una «ol», sense escriure els números.|«h2»Pasos«/h2» y una «ol», sin escribir los números." },
          { q: "Consells o trucs secrets.|Consejos o trucos secretos.", sol: "«h2»Consells«/h2» i una «ul»; alguna paraula en «em»; «hr» entre seccions.|«h2»Consejos«/h2» y una «ul»; alguna palabra en «em»; «hr» entre secciones." }
        ] }
    ]
  }
});

/* ---------- Guia del professorat · Tech Web, unitat 3 «Imatges i enllaços» ---------- */
Object.assign(TGUIDE, {

  /* ===== Sessió 1 · Imatges ===== */
  'w3-1': {
    obj: [
      "L'alumne/a insereix imatges amb l'etiqueta «img» i els atributs src i alt.|El alumno/a inserta imágenes con la etiqueta «img» y los atributos src y alt.",
      "L'alumne/a escriu rutes relatives correctes (carpeta img, barra i nom del fitxer) i descobreix per què una imatge surt trencada.|El alumno/a escribe rutas relativas correctas (carpeta img, barra y nombre del archivo) y descubre por qué una imagen sale rota.",
      "L'alumne/a redacta textos alternatius que descriuen la imatge per a qui no la pot veure.|El alumno/a redacta textos alternativos que describen la imagen para quien no la puede ver.",
      "L'alumne/a agrupa imatge i peu de foto amb «figure» i «figcaption» i en controla l'amplada amb width.|El alumno/a agrupa imagen y pie de foto con «figure» y «figcaption» y controla su anchura con width."
    ],
    comp: [
      "Competència digital: creació de continguts digitals escrivint codi HTML|Competencia digital: creación de contenidos digitales escribiendo código HTML",
      "Ciutadania digital i accessibilitat: webs pensades per a tothom, també per a persones cegues|Ciudadanía digital y accesibilidad: webs pensadas para todo el mundo, también para personas ciegas",
      "Comunicació lingüística: descriure una imatge amb precisió i poques paraules|Comunicación lingüística: describir una imagen con precisión y pocas palabras",
      "Pensament computacional: carpetes, fitxers i rutes com a estructura ordenada|Pensamiento computacional: carpetas, archivos y rutas como estructura ordenada"
    ],
    vocab: [
      ["Atribut|Atributo", "Informació extra dins una etiqueta, amb un nom i un valor entre cometes.|Información extra dentro de una etiqueta, con un nombre y un valor entre comillas."],
      ["Etiqueta buida|Etiqueta vacía", "Etiqueta que no té contingut ni etiqueta de tancar, com «img».|Etiqueta que no tiene contenido ni etiqueta de cierre, como «img»."],
      ["Ruta relativa|Ruta relativa", "El camí fins a un fitxer des de la pàgina, per exemple img/gat.svg.|El camino hasta un archivo desde la página, por ejemplo img/gat.svg."],
      ["Text alternatiu (alt)|Texto alternativo (alt)", "Frase que descriu una imatge per a qui no la pot veure.|Frase que describe una imagen para quien no la puede ver."],
      ["Lector de pantalla|Lector de pantalla", "Programa que llegeix en veu alta el que hi ha a la pantalla.|Programa que lee en voz alta lo que hay en la pantalla."],
      ["Píxel|Píxel", "Cada un dels puntets de llum que formen la pantalla.|Cada uno de los puntitos de luz que forman la pantalla."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Imatges»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Imágenes»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un llibre, còmic o revista amb dibuixos o fotos per parella|Un libro, cómic o revista con dibujos o fotos por pareja",
        "Fulls en blanc i llapis|Hojas en blanco y lápices"
      ],
      imprimir: ["Fitxa: detectiu de rutes i alts|Ficha: detective de rutas y alts"],
      prep: [
        "Deixar els ordinadors engegats amb la sessió «Imatges» oberta.|Dejar los ordenadores encendidos con la sesión «Imágenes» abierta.",
        "Imprimir una fitxa per parella; es pot fer servir com a repàs al final o com a feina per a qui acabi abans.|Imprimir una ficha por pareja; se puede usar como repaso al final o como tarea para quien termine antes.",
        "Triar llibres o revistes amb imatges riques en detalls (animals, paisatges, escenes amb gent).|Elegir libros o revistas con imágenes ricas en detalles (animales, paisajes, escenas con gente).",
        "Si es pot, provar abans un lector de pantalla (el del mòbil o l'ordinador) per fer una demostració de 30 segons.|Si se puede, probar antes un lector de pantalla (el del móvil o el ordenador) para hacer una demostración de 30 segundos."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: webs sense imatges?|Bienvenida: ¿webs sin imágenes?", fase: 'inici',
        fa: "Pregunta quantes webs coneixen que no tinguin cap imatge. Repassa en un minut les llistes i els títols de la unitat anterior. Explica la missió: la protectora del barri necessita posar fotos dels seus animals a la web.|Pregunta cuántas webs conocen que no tengan ninguna imagen. Repasa en un minuto las listas y los títulos de la unidad anterior. Explica la misión: la protectora del barrio necesita poner fotos de sus animales en la web.",
        diu: ["Quina web feu servir que no tingui ni una sola imatge?|¿Qué web usáis que no tenga ni una sola imagen?",
          "Com creieu que sap el navegador quina imatge ha de posar i on?|¿Cómo creéis que sabe el navegador qué imagen tiene que poner y dónde?",
          "Avui les vostres pàgines tindran imatges, i les entendrà tothom, també qui no hi veu.|Hoy vuestras páginas tendrán imágenes, y las entenderá todo el mundo, también quien no ve."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Com es posa una imatge|Cómo se pone una imagen", fase: 'teoria',
        fa: "Explica l'etiqueta «img» com a etiqueta buida i els atributs src i alt amb el codi projectat. Dibuixa a la pissarra l'arbre de carpetes (index.html, estil.css i la carpeta img) i llegeix la ruta en veu alta: entra a img, agafa gat.svg. Fes la demostració del lector de pantalla si l'has preparada. Acaba amb width, figure i figcaption, i els tres formats.|Explica la etiqueta «img» como etiqueta vacía y los atributos src y alt con el código proyectado. Dibuja en la pizarra el árbol de carpetas (index.html, estil.css y la carpeta img) y lee la ruta en voz alta: entra en img, coge gat.svg. Haz la demostración del lector de pantalla si la has preparado. Termina con width, figure y figcaption, y los tres formatos.",
        diu: ["Per què «img» no es tanca? Hi ha text a dins d'una imatge?|¿Por qué «img» no se cierra? ¿Hay texto dentro de una imagen?",
          "Llegim la ruta com si fos un camí: primer la carpeta, després la barra, després el fitxer.|Leamos la ruta como si fuera un camino: primero la carpeta, después la barra, después el archivo.",
          "Tanqueu els ulls: amb aquest alt, us imagineu la imatge?|Cerrad los ojos: con este alt, ¿os imagináis la imagen?",
          "L'alt és per a qui no veu la imatge; el peu de foto és per a tothom.|El alt es para quien no ve la imagen; el pie de foto es para todo el mundo."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "L'alt a cegues|El alt a ciegas", fase: 'desconnectat',
        fa: "Per parelles, amb un llibre o revista. Una persona tria una imatge sense ensenyar-la i n'escriu l'alt en una frase; l'altra la dibuixa en un minut només amb la frase. Comparen, milloren l'alt i canvien els papers. Recull dos o tres exemples d'alts que hagin millorat molt.|Por parejas, con un libro o revista. Una persona elige una imagen sin enseñarla y escribe su alt en una frase; la otra la dibuja en un minuto solo con la frase. Comparan, mejoran el alt y cambian los papeles. Recoge dos o tres ejemplos de alts que hayan mejorado mucho.",
        diu: ["Què faltava a la primera frase perquè el dibuix s'assemblés a la imatge?|¿Qué faltaba en la primera frase para que el dibujo se pareciera a la imagen?",
          "Un bon alt diu què és i com és, no «imatge» ni «foto».|Un buen alt dice qué es y cómo es, no «imagen» ni «foto»."],
        slides: ['s10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 12, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la «Pausa activa». Al pas «L'alt a cegues» tocaran «Ho hem fet!». Abans que facin els passos d'investigar, resol amb tothom l'error de la diapositiva projectada. Al laboratori d'imatges, anima'ls a trencar la ruta expressament per veure que surt l'alt.|Cada alumno/a avanza a su ritmo hasta la «Pausa activa». En el paso «El alt a ciegas» pulsarán «¡Lo hemos hecho!». Antes de que hagan los pasos de investigar, resuelve con todos el error de la diapositiva proyectada. En el laboratorio de imágenes, anímales a romper la ruta a propósito para ver que sale el alt.",
        diu: ["Quan una imatge surt trencada, què hi veus en el seu lloc?|Cuando una imagen sale rota, ¿qué ves en su lugar?",
          "Compara la línia que falla amb una que funciona, lletra a lletra.|Compara la línea que falla con una que funciona, letra a letra.",
          "Prova width 40 i width 300: què passa amb l'alçada?|Prueba width 40 y width 300: ¿qué pasa con la altura?"],
        slides: ['s11', 's12'], app: "De «La missió» fins a «Investiga»: les dues històries, les set targetes de «Descobreix», «L'alt a cegues» (ja fet), les dues prediccions, els dos errors per trobar i el laboratori d'imatges.|De «La misión» hasta «Investiga»: las dos historias, las siete tarjetas de «Descubre», «El alt a ciegas» (ya hecho), las dos predicciones, los dos errores por encontrar y el laboratorio de imágenes.", org: "Individual|Individual" },
      { min: 13, t: "Pausa i reptes d'imatges|Pausa y retos de imágenes", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després, cada alumne/a fa els cinc reptes: afegir el gat, arreglar dues rutes trencades, millorar els alts, convertir una imatge en figura i fer una mini galeria. Qui acabi pot fer el repte extra del top 3 amb icones. Passeja i llegeix alts en veu alta.|Haced la pausa activa todos juntos. Después, cada alumno/a hace los cinco retos: añadir el gato, arreglar dos rutas rotas, mejorar los alts, convertir una imagen en figura y hacer una mini galería. Quien termine puede hacer el reto extra del top 3 con iconos. Pasea y lee alts en voz alta.",
        diu: ["L'editor t'avisa amb una ona vermella: llegeix el missatge de sota.|El editor te avisa con una onda roja: lee el mensaje de debajo.",
          "Al repte 2 hi ha dos errors diferents. Mira la barra i el nom de l'atribut.|En el reto 2 hay dos errores diferentes. Mira la barra y el nombre del atributo.",
          "Si ajudes algú, assenyala la línia, però no li escriguis la solució.|Si ayudas a alguien, señala la línea, pero no le escribas la solución."],
        slides: ['s13'], app: "«Pausa activa», els reptes 1 a 5 i, per a qui acabi, el repte extra.|«Pausa activa», los retos 1 a 5 y, para quien termine, el reto extra.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: la meva galeria|Crea: mi galería", fase: 'crea',
        fa: "Cada alumne/a fa la seva galeria personal amb almenys tres figures. Quan la tinguin, l'ensenyen al company/a, que llegeix només els alts en veu alta amb els ulls tancats de qui escolta.|Cada alumno/a hace su galería personal con al menos tres figuras. Cuando la tengan, la enseñan al compañero/a, que lee solo los alts en voz alta mientras quien escucha cierra los ojos.",
        diu: ["Tria imatges que diguin alguna cosa de tu i explica-ho al peu.|Elige imágenes que digan algo de ti y explícalo en el pie.",
          "El teu company/a s'imagina les imatges només amb els teus alts?|¿Tu compañero/a se imagina las imágenes solo con tus alts?"],
        slides: ['s14'], app: "Pas «Crea»: Les meves imatges preferides (es desa al portafoli).|Paso «Crea»: Mis imágenes preferidas (se guarda en el portafolio).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees del resum, deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas del resumen, deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
        diu: ["Quins dos atributs no poden faltar mai en una imatge?|¿Qué dos atributos no pueden faltar nunca en una imagen?",
          "Per a qui escrivim l'alt?|¿Para quién escribimos el alt?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu una etiqueta de tancament per a «img».|Escribe una etiqueta de cierre para «img».",
        "Pregunta què hi hauria entre l'obertura i el tancament. Si no hi ha text, no cal tancar: tot va als atributs.|Pregunta qué habría entre la apertura y el cierre. Si no hay texto, no hace falta cerrar: todo va en los atributos."],
      ["La imatge surt trencada per una barra invertida, una carpeta mal escrita o una lletra canviada a src.|La imagen sale rota por una barra invertida, una carpeta mal escrita o una letra cambiada en src.",
        "Que compari la línia amb una que funciona, lletra a lletra i en veu alta. Recorda-li que, si surt l'alt, el navegador no ha trobat el fitxer.|Que compare la línea con una que funciona, letra a letra y en voz alta. Recuérdale que, si sale el alt, el navegador no ha encontrado el archivo."],
      ["Posa alts com «imatge», «foto» o el nom del fitxer.|Pone alts como «imagen», «foto» o el nombre del archivo.",
        "Fes-li la prova: tanca els ulls mentre li llegeixes l'alt. S'imagina la imatge? Què hi afegiria?|Hazle la prueba: cierra los ojos mientras le lees el alt. ¿Se imagina la imagen? ¿Qué añadiría?"],
      ["Confon l'alt amb el peu de foto i hi escriu el mateix.|Confunde el alt con el pie de foto y escribe lo mismo.",
        "Explica que l'alt descriu el que es veu per a qui no ho veu, i el peu explica o dona context per a tothom.|Explica que el alt describe lo que se ve para quien no lo ve, y el pie explica o da contexto para todo el mundo."],
      ["Escriu width amb px o sense cometes.|Escribe width con px o sin comillas.",
        "Mostra el model: només el número i entre cometes. Els px s'escriuran més endavant, al CSS.|Muestra el modelo: solo el número y entre comillas. Los px se escribirán más adelante, en el CSS."]
    ],
    diff: {
      mes: "Fer el repte extra del top 3 amb icones i, després, afegir a la galeria una imatge que sigui només un adorn amb alt buit, explicant per què.|Hacer el reto extra del top 3 con iconos y, después, añadir a la galería una imagen que sea solo un adorno con alt vacío, explicando por qué.",
      menys: "Tenir a la taula una targeta amb el model de figura escrit sencer i fer servir el botó d'inserir codi. Començar pels reptes 1 i 4, i fer el 2 amb ajuda.|Tener en la mesa una tarjeta con el modelo de figura escrito entero y usar el botón de insertar código. Empezar por los retos 1 y 4, y hacer el 2 con ayuda."
    },
    aval: {
      ticket: ["Quins dos atributs ha de portar sempre una imatge i per a què serveix cada un?|¿Qué dos atributos tiene que llevar siempre una imagen y para qué sirve cada uno?",
        "Una imatge surt trencada i només es veu el text de l'alt. Què revisaries?|Una imagen sale rota y solo se ve el texto del alt. ¿Qué revisarías?"],
      rubric: [
        ["Inserir imatges|Insertar imágenes", "Escriu «img» amb src i alt sense errors i sense tancament.|Escribe «img» con src y alt sin errores y sin cierre.", "Insereix la imatge, però de vegades oblida l'alt o la tanca.|Inserta la imagen, pero a veces olvida el alt o la cierra."],
        ["Rutes|Rutas", "Escriu rutes correctes i arregla les trencades comparant-les amb un model.|Escribe rutas correctas y arregla las rotas comparándolas con un modelo.", "Necessita ajuda per trobar per què una imatge no surt.|Necesita ayuda para encontrar por qué una imagen no sale."],
        ["Textos alternatius|Textos alternativos", "Els seus alts diuen què és i com és, i permeten imaginar la imatge.|Sus alts dicen qué es y cómo es, y permiten imaginar la imagen.", "Els alts són massa curts o genèrics.|Los alts son demasiado cortos o genéricos."],
        ["Figura i mida|Figura y tamaño", "Fa figures amb imatge i peu, i en controla l'amplada amb width.|Hace figuras con imagen y pie, y controla su anchura con width.", "Fa la figura amb el model al davant.|Hace la figura con el modelo delante."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «L'alt a cegues» amb fotos de la família: una persona descriu una foto en una frase i l'altra l'endevina.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «El alt a ciegas» con fotos de la familia: una persona describe una foto en una frase y la otra la adivina.",
    slides: [
      { id: 's1', k: 'portada', t: "Imatges|Imágenes", x: "Avui posarem imatges a les nostres pàgines, i ho farem perquè les entengui tothom.|Hoy pondremos imágenes en nuestras páginas, y lo haremos para que las entienda todo el mundo.",
        nota: "Presenta la missió: la protectora del barri necessita fotos dels seus animals a la web.|Presenta la misión: la protectora del barrio necesita fotos de sus animales en la web." },
      { id: 's2', k: 'pregunta', t: "Com ho sap el navegador?|¿Cómo lo sabe el navegador?", x: "Com sap el navegador quina imatge ha de posar i on la trobarà?|¿Cómo sabe el navegador qué imagen tiene que poner y dónde la encontrará?",
        nota: "Recull idees sense corregir. Al final de la teoria hi tornareu: l'HTML li diu on és el fitxer.|Recoge ideas sin corregir. Al final de la teoría volveréis a ella: el HTML le dice dónde está el archivo." },
      { id: 's3', k: 'repas', t: "Recordem la unitat 2|Recordemos la unidad 2", punts: ["Els títols van de h1 (el principal) a h6.|Los títulos van de h1 (el principal) a h6.", "La llista amb punts és ul; la numerada, ol.|La lista con puntos es ul; la numerada, ol.", "Cada element d'una llista va dins un li.|Cada elemento de una lista va dentro de un li."],
        code: '<h1>Els animals</h1>\n<ul>\n  <li>Gat</li>\n  <li>Gos</li>\n</ul>',
        nota: "Pregunta a dos alumnes què fa cada etiqueta del codi abans de passar a la diapositiva següent.|Pregunta a dos alumnos qué hace cada etiqueta del código antes de pasar a la diapositiva siguiente." },
      { id: 's4', k: 'anim', t: "Una etiqueta buida|Una etiqueta vacía", anim: 'wimg', x: "La imatge no té text a dins: no es tanca. Tota la informació va als atributs.|La imagen no tiene texto dentro: no se cierra. Toda la información va en los atributos.",
        nota: "Remarca que mai s'escriu el tancament de «img». És l'error més freqüent dels primers dies.|Remarca que nunca se escribe el cierre de «img». Es el error más frecuente de los primeros días." },
      { id: 's5', k: 'concepte', t: "src i alt|src y alt", punts: ["src: on és el fitxer.|src: dónde está el archivo.", "alt: què hi ha a la imatge.|alt: qué hay en la imagen.", "Els valors, sempre entre cometes.|Los valores, siempre entre comillas."],
        code: '<img src="img/gat.svg" alt="Un gat taronja amb ratlles, assegut">',
        nota: "Llegeix l'etiqueta en veu alta: imatge, la font és img/gat.svg, i el text alternatiu és «Un gat taronja…».|Lee la etiqueta en voz alta: imagen, la fuente es img/gat.svg, y el texto alternativo es «Un gato naranja…»." },
      { id: 's6', k: 'anim', t: "On és el fitxer?|¿Dónde está el archivo?", anim: 'wfiles', x: "Una web és una carpeta: index.html, estil.css i la carpeta img. La ruta diu el camí fins al fitxer.|Una web es una carpeta: index.html, estil.css y la carpeta img. La ruta dice el camino hasta el archivo.",
        nota: "Dibuixa l'arbre a la pissarra i escriu-hi tres rutes dolentes: amb barra invertida, amb una carpeta inventada i sense extensió. Que trobin què falla.|Dibuja el árbol en la pizarra y escribe tres rutas malas: con barra invertida, con una carpeta inventada y sin extensión. Que encuentren qué falla." },
      { id: 's7', k: 'anim', t: "L'alt és per a les persones|El alt es para las personas", anim: 'walt', x: "Els lectors de pantalla llegeixen l'alt en veu alta. També surt si la imatge no es carrega.|Los lectores de pantalla leen el alt en voz alta. También sale si la imagen no se carga.",
        nota: "Si pots, fes sonar un lector de pantalla del mòbil durant 30 segons. Fes notar que no cal començar amb «Imatge de».|Si puedes, haz sonar un lector de pantalla del móvil durante 30 segundos. Haz notar que no hace falta empezar con «Imagen de»." },
      { id: 's8', k: 'concepte', t: "Mida i peu de foto|Tamaño y pie de foto", punts: ["width: amplada en píxels, només el número.|width: anchura en píxeles, solo el número.", "figure agrupa la imatge i el seu peu.|figure agrupa la imagen y su pie.", "figcaption és el peu: surt a sota.|figcaption es el pie: sale debajo."],
        code: '<figure>\n  <img src="img/tortuga.svg" alt="Una tortuga verda caminant per l\'herba" width="170">\n  <figcaption>La Lenta, la tortuga de la protectora</figcaption>\n</figure>',
        nota: "Pregunta la diferència entre l'alt i el peu d'aquest exemple. L'alt descriu; el peu dona context.|Pregunta la diferencia entre el alt y el pie de este ejemplo. El alt describe; el pie da contexto." },
      { id: 's9', k: 'concepte', t: "SVG, PNG i JPG|SVG, PNG y JPG", punts: ["SVG: dibuixos fets amb formes, nítids a qualsevol mida.|SVG: dibujos hechos con formas, nítidos a cualquier tamaño.", "PNG: píxels, bo per a captures i fons transparents.|PNG: píxeles, bueno para capturas y fondos transparentes.", "JPG: fotos, ocupa poc però perd qualitat.|JPG: fotos, ocupa poco pero pierde calidad."],
        nota: "Si vols, fes zoom a una foto JPG fins que es vegin els quadradets. Les il·lustracions del curs són SVG.|Si quieres, haz zoom a una foto JPG hasta que se vean los cuadraditos. Las ilustraciones del curso son SVG." },
      { id: 's10', k: 'activitat', t: "L'alt a cegues|El alt a ciegas", timer: 8, punts: ["Tria una imatge sense ensenyar-la.|Elige una imagen sin enseñarla.", "Escriu-ne l'alt en una sola frase.|Escribe su alt en una sola frase.", "L'altra persona la dibuixa en un minut.|La otra persona la dibuja en un minuto.", "Compareu, milloreu l'alt i canvieu els papers.|Comparad, mejorad el alt y cambiad los papeles."],
        nota: "Deixa la diapositiva projectada. Al final, demana que llegeixin un alt de la primera ronda i el millorat.|Deja la diapositiva proyectada. Al final, pide que lean un alt de la primera ronda y el mejorado." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Imatges».|Abre la sesión «Imágenes».", "Fes la missió, «Descobreix» i les prediccions.|Haz la misión, «Descubre» y las predicciones.", "Al laboratori, trenca una ruta expressament.|En el laboratorio, rompe una ruta a propósito.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas «L'alt a cegues» han de tocar «Ho hem fet!»: ja l'han fet a classe.|En el paso «El alt a ciegas» tienen que pulsar «¡Lo hemos hecho!»: ya lo han hecho en clase." },
      { id: 's12', k: 'pregunta', t: "On és l'error?|¿Dónde está el error?", x: "Una de les tres imatges surt trencada. Quina línia falla i per què?|Una de las tres imágenes sale rota. ¿Qué línea falla y por qué?",
        code: '<img src="img/gat.svg" alt="Un gat taronja">\n<img src="imatges/gos.svg" alt="Un cadell marró">\n<img src="img/tortuga.svg" alt="Una tortuga verda">',
        nota: "Resposta: la segona línia. La carpeta es diu img, no imatges. Fes-ho abans que arribin als passos d'investigar.|Respuesta: la segunda línea. La carpeta se llama img, no imatges. Hazlo antes de que lleguen a los pasos de investigar." },
      { id: 's13', k: 'repte', t: "Reptes d'imatges|Retos de imágenes", timer: 13, punts: ["1. Afegeix el gat.|1. Añade el gato.", "2. Arregla dues rutes trencades.|2. Arregla dos rutas rotas.", "3. Escriu bons alts.|3. Escribe buenos alts.", "4. Converteix-la en figura.|4. Conviértela en figura.", "5. Mini galeria (i repte extra: el top 3).|5. Mini galería (y reto extra: el top 3)."],
        code: '<figure>\n  <img src="img/balena.svg" alt="Una balena blava traient aigua pel cap" width="120">\n  <figcaption>La balena</figcaption>\n</figure>',
        nota: "El codi projectat és el model del repte 5. Fes primer la pausa activa tots junts.|El código proyectado es el modelo del reto 5. Haced primero la pausa activa todos juntos." },
      { id: 's14', k: 'activitat', t: "Crea: la meva galeria|Crea: mi galería", timer: 7, x: "Tres figures o més amb coses que t'agradin, bons alts i un peu que expliqui per què les has triat.|Tres figuras o más con cosas que te gusten, buenos alts y un pie que explique por qué las has elegido.",
        nota: "Quan acabin, el company/a llegeix només els alts mentre l'autor/a tanca els ulls.|Cuando terminen, el compañero/a lee solo los alts mientras el autor/a cierra los ojos." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["La imatge es posa amb img, que no es tanca.|La imagen se pone con img, que no se cierra.", "src diu on és el fitxer; alt la descriu.|src dice dónde está el archivo; alt la describe.", "figure i figcaption fan el peu de foto; width, la mida.|figure y figcaption hacen el pie de foto; width, el tamaño."],
        nota: "Torna a la pregunta del principi: el navegador sap on és la imatge perquè l'HTML li diu la ruta.|Vuelve a la pregunta del principio: el navegador sabe dónde está la imagen porque el HTML le dice la ruta." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quins dos atributs no poden faltar i per a què serveixen?|¿Qué dos atributos no pueden faltar y para qué sirven?", "Si una imatge surt trencada, què revisaries?|Si una imagen sale rota, ¿qué revisarías?"],
        nota: "Anota qui encara confon l'alt amb el peu: ho reprendrem a la sessió 3 amb els crèdits.|Anota quién aún confunde el alt con el pie: lo retomaremos en la sesión 3 con los créditos." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: detectiu de rutes i alts|Ficha: detective de rutas y alts", k: 'fitxa',
        intro: "La carpeta de la web té index.html i una carpeta img amb gat.svg, gos.svg i pizza.svg. Resol cada cas en paper.|La carpeta de la web tiene index.html y una carpeta img con gat.svg, gos.svg y pizza.svg. Resuelve cada caso en papel.",
        items: [
          { q: "Aquesta imatge té src igual a imatges/gat.svg. Surt bé? Per què?|Esta imagen tiene src igual a imatges/gat.svg. ¿Sale bien? ¿Por qué?", sol: "No: la carpeta es diu img. Ha de ser img/gat.svg.|No: la carpeta se llama img. Tiene que ser img/gat.svg." },
          { q: "Aquesta té src igual a img/gos (sense res més). Què hi falta?|Esta tiene src igual a img/gos (sin nada más). ¿Qué falta?", sol: "L'extensió del fitxer: img/gos.svg.|La extensión del archivo: img/gos.svg." },
          { q: "Escriu, amb paraules, l'etiqueta per posar la pizza amb un bon alt i 150 píxels d'ample.|Escribe, con palabras, la etiqueta para poner la pizza con un buen alt y 150 píxeles de ancho.", sol: "Etiqueta img amb src img/pizza.svg, alt «Una pizza sencera amb tomàquet i formatge» i width 150.|Etiqueta img con src img/pizza.svg, alt «Una pizza entera con tomate y queso» y width 150." },
          { q: "Millora aquest alt: «foto1».|Mejora este alt: «foto1».", sol: "Resposta oberta: ha de dir què és i com és, per exemple «Un cadell marró i blanc amb collar blau».|Respuesta abierta: tiene que decir qué es y cómo es, por ejemplo «Un cachorro marrón y blanco con collar azul»." },
          { q: "Quina diferència hi ha entre l'alt i el peu de foto (figcaption)?|¿Qué diferencia hay entre el alt y el pie de foto (figcaption)?", sol: "L'alt descriu la imatge per a qui no la veu; el peu es veu sempre i dona context a tothom.|El alt describe la imagen para quien no la ve; el pie se ve siempre y da contexto a todo el mundo." }
        ] }
    ]
  },

  /* ===== Sessió 2 · Enllaços ===== */
  'w3-2': {
    obj: [
      "L'alumne/a crea enllaços amb l'etiqueta «a» i l'atribut href cap a webs externes i cap a altres pàgines.|El alumno/a crea enlaces con la etiqueta «a» y el atributo href hacia webs externas y hacia otras páginas.",
      "L'alumne/a fa que els enllaços externs s'obrin en una pestanya nova amb target igual a _blank.|El alumno/a hace que los enlaces externos se abran en una pestaña nueva con target igual a _blank.",
      "L'alumne/a enllaça parts de la mateixa pàgina amb un id i un href que comença amb #, i construeix un menú dins «nav».|El alumno/a enlaza partes de la misma página con un id y un href que empieza con #, y construye un menú dentro de «nav».",
      "L'alumne/a escriu textos d'enllaç que expliquen on porten, sense «clica aquí».|El alumno/a escribe textos de enlace que explican adónde llevan, sin «haz clic aquí»."
    ],
    comp: [
      "Competència digital: creació de continguts web enllaçats|Competencia digital: creación de contenidos web enlazados",
      "Ciutadania digital i accessibilitat: enllaços comprensibles per a lectors de pantalla|Ciudadanía digital y accesibilidad: enlaces comprensibles para lectores de pantalla",
      "Pensament computacional: noms únics (id) i referències que hi apunten|Pensamiento computacional: nombres únicos (id) y referencias que apuntan a ellos",
      "Comunicació lingüística: textos breus i precisos que anticipen un contingut|Comunicación lingüística: textos breves y precisos que anticipan un contenido"
    ],
    vocab: [
      ["Enllaç|Enlace", "Text o imatge que porta a una altra pàgina o a una altra part de la mateixa.|Texto o imagen que lleva a otra página o a otra parte de la misma."],
      ["href|href", "Atribut que diu on porta un enllaç.|Atributo que dice adónde lleva un enlace."],
      ["Adreça completa|Dirección completa", "Adreça que comença amb https:// i porta a una altra web.|Dirección que empieza con https:// y lleva a otra web."],
      ["id|id", "Nom únic que es dona a un element per poder-hi saltar.|Nombre único que se da a un elemento para poder saltar a él."],
      ["Menú (nav)|Menú (nav)", "Llista d'enllaços per moure's per la web.|Lista de enlaces para moverse por la web."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Enllaços»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Enlaces»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Cinta adhesiva o massilla per enganxar fulls a la paret|Cinta adhesiva o masilla para pegar hojas en la pared",
        "Llapis de colors per dibuixar les fletxes|Lápices de colores para dibujar las flechas"
      ],
      imprimir: ["Targetes per a la web de paper|Tarjetas para la web de papel", "Fitxa: enllaços que salten|Ficha: enlaces que saltan"],
      prep: [
        "Imprimir i retallar un paquet de targetes per grup de 3 o 4.|Imprimir y recortar un paquete de tarjetas por grupo de 3 o 4.",
        "Reservar un tros de paret per grup per enganxar-hi les pàgines de paper.|Reservar un trozo de pared por grupo para pegar las páginas de papel.",
        "Provar el pas de l'app «Experimenta amb els salts» per saber com es veuen els enllaços # a la vista prèvia.|Probar el paso de la app «Experimenta con los saltos» para saber cómo se ven los enlaces # en la vista previa.",
        "Recordar que a la vista prèvia els enllaços externs no surten de l'app: passant-hi el ratolí es veu el destí.|Recordar que en la vista previa los enlaces externos no salen de la app: pasando el ratón se ve el destino."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: per què es diu web?|Bienvenida: ¿por qué se llama web?", fase: 'inici',
        fa: "Pregunta per què creuen que la web es diu així. Explica que en anglès vol dir teranyina i que els fils són els enllaços. Repassa les imatges de la sessió anterior amb dues preguntes ràpides.|Pregunta por qué creen que la web se llama así. Explica que en inglés significa telaraña y que los hilos son los enlaces. Repasa las imágenes de la sesión anterior con dos preguntas rápidas.",
        diu: ["Si la web és una teranyina, quins són els fils?|Si la web es una telaraña, ¿cuáles son los hilos?",
          "Quants clics feu per arribar a un vídeo des de la pàgina d'inici?|¿Cuántos clics hacéis para llegar a un vídeo desde la página de inicio?",
          "Quina etiqueta no es tancava mai? I per a qui escrivim l'alt?|¿Qué etiqueta no se cerraba nunca? ¿Y para quién escribimos el alt?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 13, t: "Com es fa un enllaç|Cómo se hace un enlace", fase: 'teoria',
        fa: "Presenta l'etiqueta «a» i l'atribut href. Distingeix adreces completes (amb https) de noms de fitxer propis. Mostra target per obrir pestanya nova. Explica el parell id i # amb el codi projectat i construeix el menú dins «nav». Acaba amb el text de l'enllaç: llegeix en veu alta una llista d'enllaços que diuen «clica aquí».|Presenta la etiqueta «a» y el atributo href. Distingue direcciones completas (con https) de nombres de archivo propios. Muestra target para abrir pestaña nueva. Explica el par id y # con el código proyectado y construye el menú dentro de «nav». Termina con el texto del enlace: lee en voz alta una lista de enlaces que dicen «haz clic aquí».",
        diu: ["El text entre l'obertura i el tancament és el que es clica; l'href, on porta.|El texto entre la apertura y el cierre es lo que se pulsa; el href, adónde lleva.",
          "El # vol dir: dins d'aquesta mateixa pàgina.|El # significa: dentro de esta misma página.",
          "A l'id, el nom sol; a l'href, el # i el nom.|En el id, el nombre solo; en el href, el # y el nombre.",
          "Si us llegeixo «clica aquí, clica aquí, clica aquí», sabeu on porta cada un?|Si os leo «haz clic aquí, haz clic aquí, haz clic aquí», ¿sabéis adónde lleva cada uno?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "La web de paper|La web de papel", fase: 'desconnectat',
        fa: "Grups de 3 o 4 amb un paquet de targetes. Cada grup fa quatre pàgines en fulls, hi enganxa dues targetes d'enllaç per pàgina i dibuixa les fletxes cap al full de destí. Una persona fa de navegador i només es pot moure seguint enllaços. Al final, llegeixen només els textos d'enllaç.|Grupos de 3 o 4 con un paquete de tarjetas. Cada grupo hace cuatro páginas en hojas, pega dos tarjetas de enlace por página y dibuja las flechas hacia la hoja de destino. Una persona hace de navegador y solo se puede mover siguiendo enlaces. Al final, leen solo los textos de enlace.",
        diu: ["Hi ha alguna pàgina on no s'hi pugui arribar? Quin enllaç hi falta?|¿Hay alguna página a la que no se pueda llegar? ¿Qué enlace falta?",
          "Llegint només els enllaços, sabríeu on porta cada un?|Leyendo solo los enlaces, ¿sabríais adónde lleva cada uno?"],
        slides: ['s10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4|Grupos de 3 o 4" },
      { min: 12, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la «Pausa activa». Abans dels passos d'investigar, resol amb tothom l'error de la diapositiva: un id amb #. Al pas d'experimentar, comprova que tothom clica el menú i veu com la pàgina salta.|Cada alumno/a avanza hasta la «Pausa activa». Antes de los pasos de investigar, resuelve con todos el error de la diapositiva: un id con #. En el paso de experimentar, comprueba que todos pulsan el menú y ven cómo la página salta.",
        diu: ["Passa el ratolí per sobre de l'enllaç extern: on portaria?|Pasa el ratón por encima del enlace externo: ¿adónde llevaría?",
          "Canvia un id i torna a clicar el seu enllaç. Què passa?|Cambia un id y vuelve a pulsar su enlace. ¿Qué pasa?",
          "Si un enllaç surt negre i no es pot clicar, mira com està escrit l'href.|Si un enlace sale negro y no se puede pulsar, mira cómo está escrito el href."],
        slides: ['s11', 's12'], app: "De «La missió» fins a «Investiga»: les dues històries, les set targetes, «La web de paper» (ja fet), les dues prediccions, els dos errors per trobar i «Experimenta amb els salts».|De «La misión» hasta «Investiga»: las dos historias, las siete tarjetas, «La web de papel» (ya hecho), las dos predicciones, los dos errores por encontrar y «Experimenta con los saltos».", org: "Individual|Individual" },
      { min: 12, t: "Pausa i reptes d'enllaços|Pausa y retos de enlaces", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després, els cinc reptes: l'enllaç a la Viquipèdia, les pestanyes noves, els id que falten, els textos «clica aquí» i el menú des de zero. El repte extra, el menú d'imatges amb «Torna a dalt», és per a qui acabi.|Haced la pausa activa todos juntos. Después, los cinco retos: el enlace a la Viquipèdia, las pestañas nuevas, los id que faltan, los textos «clica aquí» y el menú desde cero. El reto extra, el menú de imágenes con «Vuelve arriba», es para quien termine.",
        diu: ["Prova cada enllaç clicant-lo: si salta, l'id i l'href coincideixen.|Prueba cada enlace pulsándolo: si salta, el id y el href coinciden.",
          "Al menú hi ha tres capes, una dins l'altra: nav, ul i li.|En el menú hay tres capas, una dentro de otra: nav, ul y li.",
          "Si ajudes algú, assenyala la línia, però deixa que l'arregli ell o ella.|Si ayudas a alguien, señala la línea, pero deja que la arregle él o ella."],
        slides: ['s13'], app: "«Pausa activa», els reptes 1 a 5 i el repte extra per a qui acabi.|«Pausa activa», los retos 1 a 5 y el reto extra para quien termine.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: la meva web amb menú|Crea: mi web con menú", fase: 'crea',
        fa: "Cada alumne/a tria un tema i fa una pàgina amb un menú de tres seccions, una imatge i un enllaç extern que s'obri en una pestanya nova. Al final, el company/a prova tots els enllaços.|Cada alumno/a elige un tema y hace una página con un menú de tres secciones, una imagen y un enlace externo que se abra en una pestaña nueva. Al final, el compañero/a prueba todos los enlaces.",
        diu: ["Primer les seccions amb id, després el menú: així sabràs on ha de saltar.|Primero las secciones con id, después el menú: así sabrás dónde tiene que saltar.",
          "Fes de navegador del teu company/a: funcionen tots els salts?|Haz de navegador de tu compañero/a: ¿funcionan todos los saltos?"],
        slides: ['s14'], app: "Pas «Crea»: La meva web amb menú (es desa al portafoli).|Paso «Crea»: Mi web con menú (se guarda en el portafolio).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum i deixa que responguin les preguntes finals de l'app. A la porta, fes una pregunta del tiquet a cada alumne/a.|Repasa el resumen y deja que respondan las preguntas finales de la app. En la puerta, haz una pregunta del ticket a cada alumno/a.",
        diu: ["Com faríeu un enllaç que salti a la secció de fotos?|¿Cómo haríais un enlace que salte a la sección de fotos?",
          "Digueu-me un bon text per a un enllaç a l'horari de la piscina.|Decidme un buen texto para un enlace al horario de la piscina."],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu l'adreça d'una web sense https:// i l'enllaç falla.|Escribe la dirección de una web sin https:// y el enlace falla.",
        "Explica que sense aquest principi el navegador busca un fitxer amb aquell nom dins la mateixa web. Que copiï l'adreça sencera.|Explica que sin ese principio el navegador busca un archivo con ese nombre dentro de la misma web. Que copie la dirección entera."],
      ["Posa el # també a l'id o escriu l'id amb accents i espais.|Pone el # también en el id o escribe el id con acentos y espacios.",
        "Recorda la regla: a l'id, el nom sol, en minúscules i sense accents; a l'href, el # davant. Que els compari lletra a lletra.|Recuerda la regla: en el id, el nombre solo, en minúsculas y sin acentos; en el href, el # delante. Que los compare letra a letra."],
      ["Escriu malament el nom de l'atribut (herf) o oblida les cometes.|Escribe mal el nombre del atributo (herf) u olvida las comillas.",
        "Si l'enllaç surt negre, el navegador no l'ha reconegut. Que llegeixi l'etiqueta en veu alta, lletra a lletra.|Si el enlace sale negro, el navegador no lo ha reconocido. Que lea la etiqueta en voz alta, letra a letra."],
      ["Fa el menú amb enllaços solts, sense llista, o posa el «nav» dins la llista.|Hace el menú con enlaces sueltos, sin lista, o pone el «nav» dentro de la lista.",
        "Dibuixa les tres capes com a caixes: «nav» fora, la llista a dins i un element de llista per enllaç.|Dibuja las tres capas como cajas: «nav» fuera, la lista dentro y un elemento de lista por enlace."],
      ["Fa servir textos com «aquí» o «més» als enllaços.|Usa textos como «aquí» o «más» en los enlaces.",
        "Llegeix-li només els enllaços de la seva pàgina. Sap on porta cada un? Que reescrigui la frase perquè l'enllaç sigui el destí.|Léele solo los enlaces de su página. ¿Sabe adónde lleva cada uno? Que reescriba la frase para que el enlace sea el destino."]
    ],
    diff: {
      mes: "Fer el repte extra del menú d'imatges i afegir enllaços «Torna a dalt» al final de cada secció de la seva web.|Hacer el reto extra del menú de imágenes y añadir enlaces «Vuelve arriba» al final de cada sección de su web.",
      menys: "Treballar amb el codi del menú de la targeta de teoria com a model i fer servir el fragment d'inserir un element de llista amb enllaç. Prioritzar els reptes 1, 3 i 5.|Trabajar con el código del menú de la tarjeta de teoría como modelo y usar el fragmento de insertar un elemento de lista con enlace. Priorizar los retos 1, 3 y 5."
    },
    aval: {
      ticket: ["Com faries un enllaç que salti a un títol que té l'id «fotos»?|¿Cómo harías un enlace que salte a un título que tiene el id «fotos»?",
        "Per què «clica aquí» és un mal text per a un enllaç?|¿Por qué «haz clic aquí» es un mal texto para un enlace?"],
      rubric: [
        ["Enllaços externs|Enlaces externos", "Crea enllaços amb l'adreça completa i els obre en pestanya nova.|Crea enlaces con la dirección completa y los abre en pestaña nueva.", "Crea l'enllaç, però oblida el https:// o el target.|Crea el enlace, pero olvida el https:// o el target."],
        ["Salts dins la pàgina|Saltos dentro de la página", "Fa coincidir l'id i l'href i ho comprova clicant.|Hace coincidir el id y el href y lo comprueba pulsando.", "Necessita ajuda per veure per què un salt no funciona.|Necesita ayuda para ver por qué un salto no funciona."],
        ["Menú|Menú", "Construeix un menú dins «nav» amb una llista d'enllaços.|Construye un menú dentro de «nav» con una lista de enlaces.", "Fa el menú amb el model al davant.|Hace el menú con el modelo delante."],
        ["Text de l'enllaç|Texto del enlace", "Els seus enllaços expliquen on porten.|Sus enlaces explican adónde llevan.", "Encara fa servir textos genèrics en algun enllaç.|Todavía usa textos genéricos en algún enlace."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i mirar junts una web que feu servir sovint: trobeu el menú, compteu-ne els enllaços i busqueu algun «clica aquí» que es podria millorar.|En casa, con el móvil, podéis repetir la sesión y mirar juntos una web que uséis a menudo: encontrad el menú, contad sus enlaces y buscad algún «haz clic aquí» que se podría mejorar.",
    slides: [
      { id: 's1', k: 'portada', t: "Enllaços|Enlaces", x: "Avui connectarem les nostres pàgines amb altres webs i entre les seves pròpies parts.|Hoy conectaremos nuestras páginas con otras webs y entre sus propias partes.",
        nota: "Presenta l'objectiu: al final, cada alumne/a tindrà una pàgina amb un menú de debò.|Presenta el objetivo: al final, cada alumno/a tendrá una página con un menú de verdad." },
      { id: 's2', k: 'pregunta', t: "Per què es diu web?|¿Por qué se llama web?", x: "En anglès, web vol dir teranyina. Quins són els fils d'aquesta teranyina?|En inglés, web significa telaraña. ¿Cuáles son los hilos de esta telaraña?",
        nota: "Deixa que facin hipòtesis. La resposta són els enllaços: sense ells, cada pàgina seria una illa.|Deja que hagan hipótesis. La respuesta son los enlaces: sin ellos, cada página sería una isla." },
      { id: 's3', k: 'repas', t: "Recordem les imatges|Recordemos las imágenes", punts: ["img no es tanca.|img no se cierra.", "src: on és el fitxer. alt: què hi ha.|src: dónde está el archivo. alt: qué hay.", "figure i figcaption: imatge amb peu.|figure y figcaption: imagen con pie."],
        code: '<img src="img/gos.svg" alt="Un cadell marró i blanc amb collar blau" width="120">',
        nota: "Pregunta què passaria si la ruta digués imatges en lloc d'img.|Pregunta qué pasaría si la ruta dijera imatges en lugar de img." },
      { id: 's4', k: 'anim', t: "L'etiqueta a|La etiqueta a", anim: 'wlink', x: "href diu on porta. El text de dins és el que es veu i es clica.|href dice adónde lleva. El texto de dentro es lo que se ve y se pulsa.",
        nota: "Remarca que un enllaç pot anar dins un paràgraf i convertir una sola paraula en una porta.|Remarca que un enlace puede ir dentro de un párrafo y convertir una sola palabra en una puerta." },
      { id: 's5', k: 'concepte', t: "Altres webs o pàgines teves|Otras webs o páginas tuyas", punts: ["Una altra web: adreça completa amb https://.|Otra web: dirección completa con https://.", "Una pàgina teva: el nom del fitxer.|Una página tuya: el nombre del archivo."],
        code: '<p>Busca dades a la <a href="https://ca.wikipedia.org">Viquipèdia</a>\no mira <a href="fotos.html">les meves fotos</a>.</p>',
        nota: "Explica que a la vista prèvia de Numi els enllaços externs no surten de l'app: passant-hi el ratolí es veu el destí.|Explica que en la vista previa de Numi los enlaces externos no salen de la app: pasando el ratón se ve el destino." },
      { id: 's6', k: 'concepte', t: "Pestanya nova|Pestaña nueva", punts: ["target igual a _blank obre una pestanya nova.|target igual a _blank abre una pestaña nueva.", "Per a webs externes, sí; per a les teves pàgines, millor no.|Para webs externas, sí; para tus páginas, mejor no."],
        code: '<a href="https://www.openstreetmap.org" target="_blank">Mapa del món</a>',
        nota: "Fes notar el guió baix de _blank: és un error molt habitual oblidar-lo.|Haz notar el guion bajo de _blank: es un error muy habitual olvidarlo." },
      { id: 's7', k: 'concepte', t: "Saltar dins la pàgina|Saltar dentro de la página", punts: ["Primer, posa un id a l'element.|Primero, pon un id al elemento.", "Després, l'enllaç hi apunta amb #.|Después, el enlace apunta a él con #.", "id únic, sense espais ni accents.|id único, sin espacios ni acentos."],
        code: '<a href="#menjar">Què menja?</a>\n\n<h2 id="menjar">Què menja</h2>\n<p>Peix petit i crancs.</p>',
        nota: "Escriu a la pissarra id igual a menjar i href igual a #menjar, un a sobre de l'altre, i encercla el que canvia: només el #.|Escribe en la pizarra id igual a menjar y href igual a #menjar, uno encima del otro, y rodea lo que cambia: solo el #." },
      { id: 's8', k: 'concepte', t: "Un menú és una llista d'enllaços|Un menú es una lista de enlaces", punts: ["nav: la caixa del menú.|nav: la caja del menú.", "A dins, una llista ul.|Dentro, una lista ul.", "Cada li porta un enllaç.|Cada li lleva un enlace."],
        code: '<nav>\n  <ul>\n    <li><a href="#inici">Inici</a></li>\n    <li><a href="#fotos">Fotos</a></li>\n    <li><a href="#contacte">Contacte</a></li>\n  </ul>\n</nav>',
        nota: "Explica que més endavant, amb CSS, aquesta llista es posarà en fila. Ara importa l'estructura.|Explica que más adelante, con CSS, esta lista se pondrá en fila. Ahora importa la estructura." },
      { id: 's9', k: 'anim', t: "Res de «clica aquí»|Nada de «haz clic aquí»", anim: 'walt', x: "Els lectors de pantalla poden llegir només els enllaços. El text ha de dir on porta.|Los lectores de pantalla pueden leer solo los enlaces. El texto tiene que decir adónde lleva.",
        nota: "Llegeix en veu alta: clica aquí, aquí, més. Pregunta on porta cada un. Després llegeix: horari de la biblioteca, llibres nous.|Lee en voz alta: haz clic aquí, aquí, más. Pregunta adónde lleva cada uno. Después lee: horario de la biblioteca, libros nuevos." },
      { id: 's10', k: 'activitat', t: "La web de paper|La web de papel", timer: 8, punts: ["Quatre fulls: quatre pàgines.|Cuatro hojas: cuatro páginas.", "Dues targetes d'enllaç per pàgina, amb fletxa.|Dos tarjetas de enlace por página, con flecha.", "El navegador només es mou seguint enllaços.|El navegador solo se mueve siguiendo enlaces.", "Llegiu només els textos d'enllaç.|Leed solo los textos de enlace."],
        nota: "Passa pels grups i busca pàgines on no s'hi pugui arribar: són una bona pregunta per al tancament de l'activitat.|Pasa por los grupos y busca páginas a las que no se pueda llegar: son una buena pregunta para el cierre de la actividad." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Enllaços».|Abre la sesión «Enlaces».", "Fes la missió, «Descobreix» i les prediccions.|Haz la misión, «Descubre» y las predicciones.", "Experimenta amb els salts del menú.|Experimenta con los saltos del menú.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas «La web de paper» han de tocar «Ho hem fet!».|En el paso «La web de papel» tienen que pulsar «¡Lo hemos hecho!»." },
      { id: 's12', k: 'pregunta', t: "Per què no salta?|¿Por qué no salta?", x: "L'enllaç «Vídeos» no salta enlloc. Quina línia té l'error?|El enlace «Vídeos» no salta a ningún sitio. ¿Qué línea tiene el error?",
        code: '<nav>\n  <a href="#fotos">Fotos</a>\n  <a href="#videos">Vídeos</a>\n</nav>\n<h2 id="fotos">Fotos</h2>\n<h2 id="#videos">Vídeos</h2>',
        nota: "Resposta: l'últim títol. A l'id no hi va el #. Fes-ho abans que arribin als passos d'investigar.|Respuesta: el último título. En el id no va el #. Hazlo antes de que lleguen a los pasos de investigar." },
      { id: 's13', k: 'repte', t: "Reptes d'enllaços|Retos de enlaces", timer: 12, punts: ["1. L'enllaç a la Viquipèdia.|1. El enlace a la Viquipèdia.", "2. Tres pestanyes noves.|2. Tres pestañas nuevas.", "3. Els id que falten.|3. Los id que faltan.", "4. Fora els «clica aquí».|4. Fuera los «clica aquí».", "5. El menú des de zero (i l'extra: menú d'imatges).|5. El menú desde cero (y el extra: menú de imágenes)."],
        code: '<li><a href="#gats">Gats</a></li>',
        nota: "El codi és el model d'element de menú per al repte 5. Fes primer la pausa activa tots junts.|El código es el modelo de elemento de menú para el reto 5. Haced primero la pausa activa todos juntos." },
      { id: 's14', k: 'activitat', t: "Crea: la meva web amb menú|Crea: mi web con menú", timer: 7, x: "Un tema teu, un menú amb tres seccions, una imatge i un enllaç extern en pestanya nova.|Un tema tuyo, un menú con tres secciones, una imagen y un enlace externo en pestaña nueva.",
        nota: "Quan acabin, el company/a fa de navegador i prova tots els enllaços.|Cuando terminen, el compañero/a hace de navegador y prueba todos los enlaces." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["a i href fan un enllaç; el text és el que es clica.|a y href hacen un enlace; el texto es lo que se pulsa.", "id i # fan saltar dins la pàgina.|id y # hacen saltar dentro de la página.", "Un menú és una llista d'enllaços dins nav, amb textos que diuen on porten.|Un menú es una lista de enlaces dentro de nav, con textos que dicen adónde llevan."],
        nota: "Torna a la teranyina: avui heu teixit els primers fils de la vostra web.|Vuelve a la telaraña: hoy habéis tejido los primeros hilos de vuestra web." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Com saltes a un títol amb l'id «fotos»?|¿Cómo saltas a un título con el id «fotos»?", "Per què «clica aquí» és un mal text d'enllaç?|¿Por qué «haz clic aquí» es un mal texto de enlace?"],
        nota: "Anota qui encara posa el # a l'id: a la sessió 4, l'índex de la fitxa ho tornarà a treballar.|Anota quién todavía pone el # en el id: en la sesión 4, el índice de la ficha lo volverá a trabajar." }
    ],
    print: [
      { id: 'p1', t: "Targetes per a la web de paper|Tarjetas para la web de papel", k: 'targetes',
        intro: "Un paquet per grup. Les targetes de pàgina van a dalt de cada full; les d'enllaç s'hi enganxen i s'hi dibuixa una fletxa cap al full de destí.|Un paquete por grupo. Las tarjetas de página van arriba de cada hoja; las de enlace se pegan en ella y se dibuja una flecha hacia la hoja de destino.",
        items: [
          { t: "Pàgina: Inici|Página: Inicio", n: 1 },
          { t: "Pàgina: Animals|Página: Animales", n: 1 },
          { t: "Pàgina: Menjar|Página: Comida", n: 1 },
          { t: "Pàgina: Música|Página: Música", n: 1 },
          { t: "Enllaç: Coneix els animals del parc → Animals|Enlace: Conoce los animales del parque → Animales", n: 1 },
          { t: "Enllaç: Què mengen els gats → Menjar|Enlace: Qué comen los gatos → Comida", n: 1 },
          { t: "Enllaç: Cançons per ballar → Música|Enlace: Canciones para bailar → Música", n: 1 },
          { t: "Enllaç: Torna a l'inici → Inici|Enlace: Vuelve al inicio → Inicio", n: 3 },
          { t: "Enllaç en blanc: escriviu-hi el vostre text|Enlace en blanco: escribid vuestro texto", n: 2 }
        ] },
      { id: 'p2', t: "Fitxa: enllaços que salten|Ficha: enlaces que saltan", k: 'fitxa',
        intro: "Resol cada cas en paper. Recorda: a l'id, el nom sol; a l'href, el # i el nom.|Resuelve cada caso en papel. Recuerda: en el id, el nombre solo; en el href, el # y el nombre.",
        items: [
          { q: "Un títol té l'id «platja». Quin href ha de tenir l'enllaç que hi salta?|Un título tiene el id «platja». ¿Qué href tiene que tener el enlace que salta allí?", sol: "#platja|#platja" },
          { q: "Un enllaç porta a ca.wikipedia.org i falla. Què hi falta?|Un enlace lleva a ca.wikipedia.org y falla. ¿Qué falta?", sol: "El principi https://, per indicar que és una altra web.|El principio https://, para indicar que es otra web." },
          { q: "Per què l'id «Què menja» és una mala idea?|¿Por qué el id «Qué come» es una mala idea?", sol: "Té espais, majúscules i accents. Millor «que-menja».|Tiene espacios, mayúsculas y acentos. Mejor «que-come»." },
          { q: "Reescriu aquest enllaç perquè digui on porta: «Per veure les fotos, clica aquí».|Reescribe este enlace para que diga adónde lleva: «Para ver las fotos, haz clic aquí».", sol: "Resposta oberta, per exemple: «Mira les fotos de l'excursió», amb l'enllaç a «fotos de l'excursió».|Respuesta abierta, por ejemplo: «Mira las fotos de la excursión», con el enlace en «fotos de la excursión»." },
          { q: "Dibuixa les tres caixes d'un menú i escriu el nom de cada etiqueta.|Dibuja las tres cajas de un menú y escribe el nombre de cada etiqueta.", sol: "Una caixa nav; a dins, una llista ul; a dins, un li per cada enllaç (a).|Una caja nav; dentro, una lista ul; dentro, un li por cada enlace (a)." }
        ] }
    ]
  },

  /* ===== Sessió 3 · Citar les fonts ===== */
  'w3-3': {
    obj: [
      "L'alumne/a explica que tota obra té autor i que només es pot fer servir amb permís o amb una llicència que ho permeti.|El alumno/a explica que toda obra tiene autor y que solo se puede usar con permiso o con una licencia que lo permita.",
      "L'alumne/a descriu què és una llicència Creative Commons i què demana la CC BY.|El alumno/a describe qué es una licencia Creative Commons y qué pide la CC BY.",
      "L'alumne/a escriu crèdits d'imatge al peu de foto i cites amb «blockquote» i «cite».|El alumno/a escribe créditos de imagen en el pie de foto y citas con «blockquote» y «cite».",
      "L'alumne/a afegeix a la seva pàgina una secció de fonts amb enllaços i un peu signat amb el símbol de copyright.|El alumno/a añade a su página una sección de fuentes con enlaces y un pie firmado con el símbolo de copyright."
    ],
    comp: [
      "Ciutadania digital: drets d'autor, llicències i ús responsable del contingut d'internet|Ciudadanía digital: derechos de autor, licencias y uso responsable del contenido de internet",
      "Competència digital: creació de continguts web citant les fonts|Competencia digital: creación de contenidos web citando las fuentes",
      "Competència personal i social: respecte per la feina dels altres|Competencia personal y social: respeto por el trabajo de los demás",
      "Competència en recerca d'informació: identificar i referenciar fonts|Competencia en búsqueda de información: identificar y referenciar fuentes"
    ],
    vocab: [
      ["Autor/a|Autor/a", "Persona que ha creat una obra: un text, una foto, un dibuix, una cançó.|Persona que ha creado una obra: un texto, una foto, un dibujo, una canción."],
      ["Drets d'autor (copyright)|Derechos de autor (copyright)", "Drets que permeten a l'autor decidir qui pot fer servir la seva obra.|Derechos que permiten al autor decidir quién puede usar su obra."],
      ["Llicència|Licencia", "Permís que diu què es pot fer amb una obra i amb quines condicions.|Permiso que dice qué se puede hacer con una obra y con qué condiciones."],
      ["Creative Commons (CC)|Creative Commons (CC)", "Llicències per compartir obres amb permís per endavant; la CC BY demana citar l'autor.|Licencias para compartir obras con permiso por adelantado; la CC BY pide citar al autor."],
      ["Crèdit|Crédito", "Text que diu qui ha fet una obra i amb quina llicència es fa servir.|Texto que dice quién ha hecho una obra y con qué licencia se usa."],
      ["Font|Fuente", "Lloc d'on surt una informació.|Lugar de donde sale una información."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Citar les fonts»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Citar las fuentes»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Quarts de full en blanc i colors per a l'activitat «Qui ho ha fet?»|Cuartos de hoja en blanco y colores para la actividad «¿Quién lo ha hecho?»",
        "Un llibre de la biblioteca de l'aula per mostrar on hi ha l'autor i el copyright|Un libro de la biblioteca del aula para mostrar dónde están el autor y el copyright"
      ],
      imprimir: ["Fitxa: crèdits i llicències|Ficha: créditos y licencias"],
      prep: [
        "Buscar a la Viquipèdia una imatge qualsevol i obrir-ne la pàgina d'informació per mostrar l'autor i la llicència.|Buscar en la Wikipedia una imagen cualquiera y abrir su página de información para mostrar el autor y la licencia.",
        "Marcar al llibre de l'aula la pàgina de crèdits (autor, il·lustrador, any).|Marcar en el libro del aula la página de créditos (autor, ilustrador, año).",
        "Imprimir una fitxa per parella.|Imprimir una ficha por pareja.",
        "Deixar la sessió «Citar les fonts» oberta a tots els ordinadors.|Dejar la sesión «Citar las fuentes» abierta en todos los ordenadores."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: i si fos el teu dibuix?|Bienvenida: ¿y si fuera tu dibujo?", fase: 'inici',
        fa: "Planteja la situació: has dibuixat un còmic i el trobes en una web amb el nom d'una altra persona. Recull com se sentirien. Repassa en un minut els enllaços (id i #, target).|Plantea la situación: has dibujado un cómic y lo encuentras en una web con el nombre de otra persona. Recoge cómo se sentirían. Repasa en un minuto los enlaces (id y #, target).",
        diu: ["Com us sentiríeu si veiéssiu el vostre dibuix amb el nom d'una altra persona?|¿Cómo os sentiríais si vierais vuestro dibujo con el nombre de otra persona?",
          "Tot el que hi ha a internet és de tothom?|¿Todo lo que hay en internet es de todo el mundo?",
          "Avui aprendrem a ser creadors web honestos.|Hoy aprenderemos a ser creadores web honestos."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Autors, llicències i crèdits|Autores, licencias y créditos", fase: 'teoria',
        fa: "Mostra el llibre de l'aula: on diu qui l'ha escrit i qui l'ha il·lustrat? Explica els drets d'autor i el símbol de copyright. Ensenya la pàgina d'informació d'una imatge de la Viquipèdia i explica les llicències Creative Commons. Acaba amb com es fa un crèdit al peu de foto, una cita amb «blockquote» i «cite» i una secció de fonts.|Muestra el libro del aula: ¿dónde dice quién lo ha escrito y quién lo ha ilustrado? Explica los derechos de autor y el símbolo de copyright. Enseña la página de información de una imagen de la Wikipedia y explica las licencias Creative Commons. Termina con cómo se hace un crédito en el pie de foto, una cita con «blockquote» y «cite» y una sección de fuentes.",
        diu: ["Trobar una cosa a internet no vol dir que sigui teva.|Encontrar una cosa en internet no significa que sea tuya.",
          "La CC BY diu: la pots fer servir si dius qui l'ha feta.|La CC BY dice: la puedes usar si dices quién la ha hecho.",
          "Un bon crèdit diu què és, qui l'ha feta i amb quina llicència.|Un buen crédito dice qué es, quién la ha hecho y con qué licencia.",
          "Les il·lustracions del curs són de Numi i les podeu fer servir a l'app.|Las ilustraciones del curso son de Numi y las podéis usar en la app."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Qui ho ha fet?|¿Quién lo ha hecho?", fase: 'desconnectat',
        fa: "Per parelles. Cadascú fa un dibuix petit, el signa i hi escriu una llicència senzilla. Intercanvien els dibuixos, fan un pòster amb el de l'altre i escriuen el crèdit. Es revisen mútuament. Acaba amb la pregunta de les tres preguntes abans d'agafar una imatge.|Por parejas. Cada uno hace un dibujo pequeño, lo firma y escribe una licencia sencilla. Intercambian los dibujos, hacen un póster con el del otro y escriben el crédito. Se revisan mutuamente. Termina con la pregunta de las tres preguntas antes de coger una imagen.",
        diu: ["La llicència del teu company/a et deixa canviar el dibuix?|¿La licencia de tu compañero/a te deja cambiar el dibujo?",
          "El crèdit diu què és i qui l'ha fet?|¿El crédito dice qué es y quién lo ha hecho?",
          "Quines tres preguntes ens fem abans d'agafar una imatge d'internet?|¿Qué tres preguntas nos hacemos antes de coger una imagen de internet?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 10, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la «Pausa activa»: història, targetes, «Qui ho ha fet?» (ja fet), ordenar els passos, predir la cita, la pregunta de la foto del cercador i els dos errors.|Cada alumno/a avanza hasta la «Pausa activa»: historia, tarjetas, «¿Quién lo ha hecho?» (ya hecho), ordenar los pasos, predecir la cita, la pregunta de la foto del buscador y los dos errores.",
        diu: ["Si la cita no s'acaba mai, mira si totes les etiquetes es tanquen.|Si la cita no se acaba nunca, mira si todas las etiquetas se cierran.",
          "Un enllaç a una font sense https:// porta a algun lloc?|¿Un enlace a una fuente sin https:// lleva a algún sitio?"],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: les dues històries, les set targetes, «Qui ho ha fet?» (ja fet), ordenar els passos, la predicció de la cita, la pregunta de la foto i els dos errors.|De «La misión» hasta «Investiga»: las dos historias, las siete tarjetas, «¿Quién lo ha hecho?» (ya hecho), ordenar los pasos, la predicción de la cita, la pregunta de la foto y los dos errores.", org: "Individual|Individual" },
      { min: 13, t: "Pausa i reptes de crèdits|Pausa y retos de créditos", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Abans dels reptes, comenta la diapositiva del cercador: Google no és l'autor de les imatges que troba. Després, els cinc reptes: crèdit al peu, cita, llista de fonts, arreglar crèdits i peu signat. L'extra (crèdit CC BY complet) és per a qui acabi.|Haced la pausa activa todos juntos. Antes de los retos, comenta la diapositiva del buscador: Google no es el autor de las imágenes que encuentra. Después, los cinco retos: crédito en el pie, cita, lista de fuentes, arreglar créditos y pie firmado. El extra (crédito CC BY completo) es para quien termine.",
        diu: ["El símbol de copyright s'escriu amb el codi «ampersand copy punt i coma».|El símbolo de copyright se escribe con el código «ampersand copy punto y coma».",
          "Un cercador troba imatges, però no les fa.|Un buscador encuentra imágenes, pero no las hace.",
          "Dins un peu de foto hi caben altres etiquetes, com «cite» o «a».|Dentro de un pie de foto caben otras etiquetas, como «cite» o «a»."],
        slides: ['s13', 's14'], app: "«Pausa activa», els reptes 1 a 5 i el repte extra per a qui acabi.|«Pausa activa», los retos 1 a 5 y el reto extra para quien termine.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: la meva pàgina amb fonts|Crea: mi página con fuentes", fase: 'crea',
        fa: "Cada alumne/a fa una pàgina sobre un tema que li agradi amb imatge i crèdit, una cita amb la seva font (pot ser d'algú de casa), una secció de fonts i un peu signat.|Cada alumno/a hace una página sobre un tema que le guste con imagen y crédito, una cita con su fuente (puede ser de alguien de casa), una sección de fuentes y un pie firmado.",
        diu: ["La cita pot ser d'una persona que coneixes: la font és ella.|La cita puede ser de una persona que conoces: la fuente es ella.",
          "Signa la teva pàgina: tu també ets autor o autora.|Firma tu página: tú también eres autor o autora."],
        slides: ['s15'], app: "Pas «Crea»: La meva pàgina amb fonts (es desa al portafoli).|Paso «Crea»: Mi página con fuentes (se guarda en el portafolio).", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa que responguin les preguntes finals i fes una pregunta del tiquet a cada alumne/a a la porta.|Repasa el resumen, deja que respondan las preguntas finales y haz una pregunta del ticket a cada alumno/a en la puerta.",
        diu: ["Què vol dir CC BY?|¿Qué significa CC BY?",
          "On posaries el crèdit d'una imatge?|¿Dónde pondrías el crédito de una imagen?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Creu que tot el que surt al cercador es pot fer servir lliurement.|Cree que todo lo que sale en el buscador se puede usar libremente.",
        "Torna a la pregunta del còmic: si el dibuix fos seu, li agradaria? Mostra-li on es mira la llicència d'una imatge.|Vuelve a la pregunta del cómic: si el dibujo fuera suyo, ¿le gustaría? Muéstrale dónde se mira la licencia de una imagen."],
      ["Posa com a autor el cercador o la web on ha trobat la imatge.|Pone como autor el buscador o la web donde ha encontrado la imagen.",
        "Pregunta: qui ha dibuixat o fotografiat aquesta imatge? El cercador només l'ha trobada.|Pregunta: ¿quién ha dibujado o fotografiado esta imagen? El buscador solo la ha encontrado."],
      ["No tanca el «blockquote» o hi posa també el nom de la font.|No cierra el «blockquote» o pone también el nombre de la fuente dentro.",
        "Mostra el model: la cita dins, la font fora i amb «cite». Si tot surt amb marge, falta un tancament.|Muestra el modelo: la cita dentro, la fuente fuera y con «cite». Si todo sale con margen, falta un cierre."],
      ["Escriu les fonts sense enllaç o sense https://.|Escribe las fuentes sin enlace o sin https://.",
        "Recorda per què posem fonts: perquè qualsevol ho pugui comprovar. Sense enllaç bo, no es pot.|Recuerda por qué ponemos fuentes: para que cualquiera lo pueda comprobar. Sin enlace bueno, no se puede."],
      ["Confon el peu de pàgina (footer) amb el peu de foto (figcaption).|Confunde el pie de página (footer) con el pie de foto (figcaption).",
        "El peu de foto va enganxat a una imatge; el peu de pàgina va al final de tot i parla de tota la pàgina.|El pie de foto va pegado a una imagen; el pie de página va al final de todo y habla de toda la página."]
    ],
    diff: {
      mes: "Fer el repte extra del crèdit CC BY complet i buscar, amb un adult, una imatge de la Viquipèdia per llegir-ne la llicència i escriure'n el crèdit correcte en paper.|Hacer el reto extra del crédito CC BY completo y buscar, con un adulto, una imagen de la Wikipedia para leer su licencia y escribir su crédito correcto en papel.",
      menys: "Tenir el model de crèdit escrit a la taula (què és, qui l'ha feta, llicència) i treballar els reptes 1, 2 i 5, que tenen el model al davant.|Tener el modelo de crédito escrito en la mesa (qué es, quién la ha hecho, licencia) y trabajar los retos 1, 2 y 5, que tienen el modelo delante."
    },
    aval: {
      ticket: ["Què vol dir que una imatge té llicència CC BY?|¿Qué significa que una imagen tiene licencia CC BY?",
        "Has trobat una imatge i no saps qui l'ha feta. Què fas?|Has encontrado una imagen y no sabes quién la ha hecho. ¿Qué haces?"],
      rubric: [
        ["Autoria i llicències|Autoría y licencias", "Explica que tota obra té autor i què permet una llicència CC BY.|Explica que toda obra tiene autor y qué permite una licencia CC BY.", "Sap que cal citar, però confon autor amb el lloc on ha trobat l'obra.|Sabe que hay que citar, pero confunde autor con el sitio donde ha encontrado la obra."],
        ["Crèdits d'imatge|Créditos de imagen", "Escriu crèdits complets al peu de foto.|Escribe créditos completos en el pie de foto.", "Escriu el crèdit amb el model al davant.|Escribe el crédito con el modelo delante."],
        ["Cites|Citas", "Fa servir «blockquote» per a la cita i «cite» per a la font.|Usa «blockquote» para la cita y «cite» para la fuente.", "Fa la cita, però barreja la cita i la font.|Hace la cita, pero mezcla la cita y la fuente."],
        ["Fonts|Fuentes", "Fa una secció de fonts amb enllaços que funcionen.|Hace una sección de fuentes con enlaces que funcionan.", "Posa fonts sense enllaç o amb enllaços incomplets.|Pone fuentes sin enlace o con enlaces incompletos."]
      ]
    },
    casa: "A casa, mireu junts un llibre o un disc: on diu qui l'ha fet i qui en té els drets? Si voleu, demaneu a algú de la família una frase que li agradi per fer-la servir de cita a la vostra pàgina.|En casa, mirad juntos un libro o un disco: ¿dónde dice quién lo ha hecho y quién tiene los derechos? Si queréis, pedid a alguien de la familia una frase que le guste para usarla como cita en vuestra página.",
    slides: [
      { id: 's1', k: 'portada', t: "Citar les fonts|Citar las fuentes", x: "Avui aprendrem a fer servir només el que podem i a dir sempre d'on ho hem tret.|Hoy aprenderemos a usar solo lo que podemos y a decir siempre de dónde lo hemos sacado.",
        nota: "Presenta l'objectiu: ser creadors web honestos, que respecten la feina dels altres.|Presenta el objetivo: ser creadores web honestos, que respetan el trabajo de los demás." },
      { id: 's2', k: 'pregunta', t: "I si fos el teu dibuix?|¿Y si fuera tu dibujo?", x: "Has dibuixat un còmic durant setmanes i el trobes en una web amb el nom d'una altra persona. Com et sents?|Has dibujado un cómic durante semanas y lo encuentras en una web con el nombre de otra persona. ¿Cómo te sientes?",
        nota: "Deixa que parlin. Recull paraules com injust, enfadat, trist: són la base per entendre els drets d'autor.|Deja que hablen. Recoge palabras como injusto, enfadado, triste: son la base para entender los derechos de autor." },
      { id: 's3', k: 'repas', t: "Recordem els enllaços|Recordemos los enlaces", punts: ["href diu on porta l'enllaç.|href dice adónde lleva el enlace.", "id i # fan saltar dins la pàgina.|id y # hacen saltar dentro de la página.", "target igual a _blank obre una pestanya nova.|target igual a _blank abre una pestaña nueva."],
        code: '<a href="#fotos">Fotos</a>\n<h2 id="fotos">Fotos</h2>',
        nota: "Pregunta què fallaria si l'id portés el #. Avui farem servir enllaços a la secció de fonts.|Pregunta qué fallaría si el id llevara el #. Hoy usaremos enlaces en la sección de fuentes." },
      { id: 's4', k: 'anim', t: "Tot té autor|Todo tiene autor", anim: 'wcite', x: "Cada foto, dibuix, cançó o text l'ha fet algú. Trobar-lo a internet no el fa teu.|Cada foto, dibujo, canción o texto lo ha hecho alguien. Encontrarlo en internet no lo hace tuyo.",
        nota: "Mostra la pàgina de crèdits del llibre de l'aula: autor, il·lustrador i any.|Muestra la página de créditos del libro del aula: autor, ilustrador y año." },
      { id: 's5', k: 'concepte', t: "Drets d'autor|Derechos de autor", punts: ["L'autor decideix qui pot fer servir la seva obra.|El autor decide quién puede usar su obra.", "El símbol © vol dir copyright.|El símbolo © significa copyright.", "Tu també ets autor de les teves pàgines.|Tú también eres autor de tus páginas."],
        code: '<footer>\n  <p><small>&copy; 2026 Laia Puig. Tots els drets reservats.</small></p>\n</footer>',
        nota: "Explica que a l'HTML el símbol s'escriu amb un codi especial i que sortirà al repte 5.|Explica que en el HTML el símbolo se escribe con un código especial y que saldrá en el reto 5." },
      { id: 's6', k: 'concepte', t: "Creative Commons|Creative Commons", punts: ["Permís per endavant, amb condicions.|Permiso por adelantado, con condiciones.", "BY: cal dir qui l'ha feta.|BY: hay que decir quién la ha hecho.", "NC: sense fer-ne negoci. ND: sense canviar-la.|NC: sin hacer negocio. ND: sin cambiarla."],
        nota: "Mostra la pàgina d'informació d'una imatge de la Viquipèdia i busqueu junts l'autor i la llicència.|Muestra la página de información de una imagen de la Wikipedia y buscad juntos el autor y la licencia." },
      { id: 's7', k: 'concepte', t: "Un bon crèdit|Un buen crédito", punts: ["Què és.|Qué es.", "Qui l'ha feta.|Quién la ha hecho.", "Amb quina llicència, si en té.|Con qué licencia, si la tiene."],
        code: '<figure>\n  <img src="img/lloro.svg" alt="Un lloro vermell sobre una branca" width="150">\n  <figcaption>El lloro. Il·lustració: Numi.</figcaption>\n</figure>',
        nota: "Explica que les il·lustracions del curs són pròpies de Numi i que el seu crèdit és «Il·lustració: Numi».|Explica que las ilustraciones del curso son propias de Numi y que su crédito es «Il·lustració: Numi»." },
      { id: 's8', k: 'concepte', t: "Cites amb blockquote i cite|Citas con blockquote y cite", punts: ["blockquote: les paraules exactes d'algú.|blockquote: las palabras exactas de alguien.", "cite: el nom de l'obra o la font, en cursiva.|cite: el nombre de la obra o la fuente, en cursiva."],
        code: '<blockquote>\n  <p>Qui no s\'arrisca no pisca.</p>\n</blockquote>\n<p>— <cite>Refranyer popular</cite></p>',
        nota: "Pregunta per què és important que es vegi que aquelles paraules no són nostres.|Pregunta por qué es importante que se vea que esas palabras no son nuestras." },
      { id: 's9', k: 'concepte', t: "La secció de fonts|La sección de fuentes", punts: ["Diu d'on has tret la informació.|Dice de dónde has sacado la información.", "Amb enllaços perquè es pugui comprovar.|Con enlaces para que se pueda comprobar.", "Al final de la pàgina.|Al final de la página."],
        code: '<h2>Fonts</h2>\n<ul>\n  <li><a href="https://ca.wikipedia.org/wiki/Tortuga" target="_blank">Tortuga, a la Viquipèdia</a></li>\n  <li>Il·lustracions: Numi</li>\n</ul>',
        nota: "Relaciona-ho amb els treballs de l'escola: també hi posen la bibliografia.|Relaciónalo con los trabajos del cole: también ponen la bibliografía." },
      { id: 's10', k: 'activitat', t: "Qui ho ha fet?|¿Quién lo ha hecho?", timer: 10, punts: ["Fes un dibuix petit i signa'l.|Haz un dibujo pequeño y fírmalo.", "Escriu-hi una llicència senzilla.|Escribe una licencia sencilla.", "Intercanvieu i feu un pòster amb el de l'altre.|Intercambiad y haced un póster con el del otro.", "Escriviu-hi el crèdit i reviseu-vos.|Escribid el crédito y revisaos."],
        nota: "Exemples de llicència: «La pots fer servir si dius que és meva» o «No la pots canviar».|Ejemplos de licencia: «La puedes usar si dices que es mía» o «No la puedes cambiar»." },
      { id: 's11', k: 'pregunta', t: "Tres preguntes abans d'agafar|Tres preguntas antes de coger", punts: ["Qui ho ha fet?|¿Quién lo ha hecho?", "La llicència em deixa fer-ho servir?|¿La licencia me deja usarlo?", "Com ho diré a la meva pàgina?|¿Cómo lo diré en mi página?"],
        nota: "Si no saben respondre les dues primeres, no s'ha de fer servir: busquem una altra imatge o en fem una.|Si no saben responder las dos primeras, no se tiene que usar: buscamos otra imagen o hacemos una." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre la sessió «Citar les fonts».|Abre la sesión «Citar las fuentes».", "Fes la missió, «Descobreix» i ordena els passos.|Haz la misión, «Descubre» y ordena los pasos.", "Troba els dos errors.|Encuentra los dos errores.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas «Qui ho ha fet?» han de tocar «Ho hem fet!».|En el paso «¿Quién lo ha hecho?» tienen que pulsar «¡Lo hemos hecho!»." },
      { id: 's13', k: 'repte', t: "Reptes de crèdits|Retos de créditos", timer: 13, punts: ["1. Crèdit al peu.|1. Crédito en el pie.", "2. Una cita.|2. Una cita.", "3. La llista de fonts.|3. La lista de fuentes.", "4. Arregla els crèdits.|4. Arregla los créditos.", "5. Signa la pàgina (i l'extra: crèdit CC BY).|5. Firma la página (y el extra: crédito CC BY)."],
        code: '<footer>\n  <p><small>&copy; 2026 Laia</small></p>\n  <p><small>Il·lustracions: Numi</small></p>\n</footer>',
        nota: "El codi és el model del repte 5. Fes primer la pausa activa tots junts.|El código es el modelo del reto 5. Haced primero la pausa activa todos juntos." },
      { id: 's14', k: 'pregunta', t: "Google és l'autor?|¿Google es el autor?", x: "Un peu de foto diu «Imatge: Google». És correcte?|Un pie de foto dice «Imagen: Google». ¿Es correcto?",
        nota: "No: el cercador troba imatges, però no les fa. L'autor és qui l'ha dibuixada o fotografiada. Prepara el repte 4.|No: el buscador encuentra imágenes, pero no las hace. El autor es quien la ha dibujado o fotografiado. Prepara el reto 4." },
      { id: 's15', k: 'activitat', t: "Crea: la meva pàgina amb fonts|Crea: mi página con fuentes", timer: 7, x: "Imatge amb crèdit, una cita amb la seva font, una secció de fonts i un peu signat amb el teu nom.|Imagen con crédito, una cita con su fuente, una sección de fuentes y un pie firmado con tu nombre.",
        nota: "Suggereix citar algú de casa o un refrany: així la cita és real i saben qui és la font.|Sugiere citar a alguien de casa o un refrán: así la cita es real y saben quién es la fuente." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Tot té autor: cal permís o una llicència.|Todo tiene autor: hace falta permiso o una licencia.", "CC BY: es pot fer servir si se cita l'autor.|CC BY: se puede usar si se cita al autor.", "Crèdits al peu, cites amb blockquote i una secció de fonts.|Créditos en el pie, citas con blockquote y una sección de fuentes."],
        nota: "Torna a la pregunta del còmic: ara saben com protegir la seva feina i respectar la dels altres.|Vuelve a la pregunta del cómic: ahora saben cómo proteger su trabajo y respetar el de los demás." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què vol dir CC BY?|¿Qué significa CC BY?", "Què fas si no saps qui ha fet una imatge?|¿Qué haces si no sabes quién ha hecho una imagen?"],
        nota: "Anota qui encara posa el cercador com a autor: a la fitxa de la sessió 4 ho tornarem a revisar.|Anota quién aún pone el buscador como autor: en la ficha de la sesión 4 lo volveremos a revisar." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: crèdits i llicències|Ficha: créditos y licencias", k: 'fitxa',
        intro: "Llegeix cada situació i respon. Recorda les tres preguntes: qui ho ha fet, ho puc fer servir i com ho dic.|Lee cada situación y responde. Recuerda las tres preguntas: quién lo ha hecho, si lo puedo usar y cómo lo digo.",
        items: [
          { q: "Una foto té llicència CC BY i l'ha feta en Pau Mir. Escriu-ne el crèdit.|Una foto tiene licencia CC BY y la ha hecho Pau Mir. Escribe su crédito.", sol: "Per exemple: «Foto: Pau Mir. Llicència CC BY.»|Por ejemplo: «Foto: Pau Mir. Licencia CC BY.»" },
          { q: "Un dibuix té llicència CC BY-ND. El pots retallar i canviar-li els colors?|Un dibujo tiene licencia CC BY-ND. ¿Lo puedes recortar y cambiarle los colores?", sol: "No: ND vol dir que no es pot modificar. Es pot fer servir tal com és, citant l'autor.|No: ND significa que no se puede modificar. Se puede usar tal como es, citando al autor." },
          { q: "Has trobat una imatge al cercador sense cap informació de l'autor. Què fas?|Has encontrado una imagen en el buscador sin ninguna información del autor. ¿Qué haces?", sol: "No la faig servir: en busco una amb llicència clara o en faig una de pròpia.|No la uso: busco una con licencia clara o hago una propia." },
          { q: "Un company ha escrit al peu: «Imatge: Google». Com l'ajudaries?|Un compañero ha escrito en el pie: «Imagen: Google». ¿Cómo le ayudarías?", sol: "Li explicaria que Google només troba la imatge; cal buscar qui l'ha feta i posar aquest nom.|Le explicaría que Google solo encuentra la imagen; hay que buscar quién la ha hecho y poner ese nombre." },
          { q: "Quines dues etiquetes fas servir per a una cita i la seva font?|¿Qué dos etiquetas usas para una cita y su fuente?", sol: "blockquote per a la cita i cite per al nom de la font.|blockquote para la cita y cite para el nombre de la fuente." }
        ] }
    ]
  },

  /* ===== Sessió 4 · Projecte: la fitxa d'un animal ===== */
  'w3-4': {
    obj: [
      "L'alumne/a planifica una pàgina amb un esbós (wireframe) abans d'escriure el codi.|El alumno/a planifica una página con un boceto (wireframe) antes de escribir el código.",
      "L'alumne/a construeix una fitxa completa amb figura, índex d'enllaços interns, seccions amb id i llistes de dades.|El alumno/a construye una ficha completa con figura, índice de enlaces internos, secciones con id y listas de datos.",
      "L'alumne/a inclou una cita, una secció de fonts i un peu signat, respectant l'autoria.|El alumno/a incluye una cita, una sección de fuentes y un pie firmado, respetando la autoría.",
      "L'alumne/a revisa la seva pàgina i la d'un company/a amb una llista de comprovació i corregeix els errors.|El alumno/a revisa su página y la de un compañero/a con una lista de comprobación y corrige los errores."
    ],
    comp: [
      "Competència digital: disseny i creació d'una pàgina web completa|Competencia digital: diseño y creación de una página web completa",
      "Competència científica: recollir i organitzar informació sobre un animal|Competencia científica: recoger y organizar información sobre un animal",
      "Aprendre a aprendre: planificar, construir per parts i revisar|Aprender a aprender: planificar, construir por partes y revisar",
      "Ciutadania digital: autoria, crèdits i fonts fiables|Ciudadanía digital: autoría, créditos y fuentes fiables"
    ],
    vocab: [
      ["Esbós (wireframe)|Boceto (wireframe)", "Dibuix amb caixes que mostra què anirà a cada lloc d'una pàgina.|Dibujo con cajas que muestra qué irá en cada sitio de una página."],
      ["Índex|Índice", "Menú d'enllaços que salten a les seccions de la mateixa pàgina.|Menú de enlaces que saltan a las secciones de la misma página."],
      ["Secció|Sección", "Part de la pàgina que comença amb un títol h2 i parla d'un tema.|Parte de la página que empieza con un título h2 y habla de un tema."],
      ["Revisió|Revisión", "Comprovar la feina amb una llista abans de donar-la per acabada.|Comprobar el trabajo con una lista antes de darlo por terminado."],
      ["Font fiable|Fuente fiable", "Lloc d'informació que diu qui l'ha escrita i es pot comprovar.|Lugar de información que dice quién la ha escrito y se puede comprobar."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la fitxa d'un animal»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la ficha de un animal»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Fulls, llapis i regles per a l'esbós|Hojas, lápices y reglas para el boceto",
        "Llibres o enciclopèdies d'animals de la biblioteca (si n'hi ha) per buscar dades|Libros o enciclopedias de animales de la biblioteca (si los hay) para buscar datos"
      ],
      imprimir: ["Fitxa: l'esbós de la fitxa|Ficha: el boceto de la ficha", "Targetes de revisió|Tarjetas de revisión"],
      prep: [
        "Imprimir una fitxa d'esbós per alumne/a i un paquet de targetes de revisió per parella.|Imprimir una ficha de boceto por alumno/a y un paquete de tarjetas de revisión por pareja.",
        "Preparar a la pissarra la llista dels sis animals: gat, gos, tortuga, lloro, guineu i balena.|Preparar en la pizarra la lista de los seis animales: gato, perro, tortuga, loro, zorro y ballena.",
        "Tenir a mà dues o tres fonts fiables per animal (Viquipèdia, enciclopèdia, llibres de l'aula) per si algú no en troba.|Tener a mano dos o tres fuentes fiables por animal (Wikipedia, enciclopedia, libros del aula) por si alguien no encuentra.",
        "Recordar que la fitxa final es desa al portafoli i que es pot acabar a casa.|Recordar que la ficha final se guarda en el portafolio y que se puede terminar en casa."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: l'encàrrec del museu|Bienvenida: el encargo del museo", fase: 'inici',
        fa: "Explica l'encàrrec: el museu de natura de l'illa vol una guia d'animals i cada alumne/a en farà una fitxa. Repassa la unitat amb la diapositiva i pregunta què ha de tenir una bona fitxa. Deixa que cadascú triï el seu animal.|Explica el encargo: el museo de naturaleza de la isla quiere una guía de animales y cada alumno/a hará una ficha. Repasa la unidad con la diapositiva y pregunta qué tiene que tener una buena ficha. Deja que cada uno elija su animal.",
        diu: ["Avui sou dissenyadors web: el museu us fa un encàrrec.|Hoy sois diseñadores web: el museo os hace un encargo.",
          "Què heu après aquesta unitat que us servirà per a la fitxa?|¿Qué habéis aprendido esta unidad que os servirá para la ficha?",
          "Si visiteu la fitxa d'un animal, què hi voleu trobar?|Si visitáis la ficha de un animal, ¿qué queréis encontrar?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Com es construeix una fitxa|Cómo se construye una ficha", fase: 'teoria',
        fa: "Mostra el pas de l'esbós a la pàgina. Repassa amb codi projectat les tres peces noves de la fitxa: l'índex amb id sense accents, les llistes de dades i el tancament amb cita i fonts. Acaba amb la llista de revisió.|Muestra el paso del boceto a la página. Repasa con código proyectado las tres piezas nuevas de la ficha: el índice con id sin acentos, las listas de datos y el cierre con cita y fuentes. Termina con la lista de revisión.",
        diu: ["Primer l'esbós: si sabeu on va cada cosa, el codi surt sol.|Primero el boceto: si sabéis dónde va cada cosa, el código sale solo.",
          "Els id, curts, en minúscules i sense accents: com-es, on-viu.|Los id, cortos, en minúsculas y sin acentos: com-es, on-viu.",
          "Només dades que hàgiu comprovat en una font, i la font, a la llista.|Solo datos que hayáis comprobado en una fuente, y la fuente, en la lista."],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "L'esbós de la fitxa|El boceto de la ficha", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa d'esbós: dibuixa les caixes de dalt a baix, escriu quina etiqueta farà servir a cada una i l'id de cada secció, i dibuixa les fletxes des de l'índex. Després, l'ensenya al company/a, que fa de client i diu què hi trobaria a faltar.|Cada alumno/a rellena la ficha de boceto: dibuja las cajas de arriba abajo, escribe qué etiqueta usará en cada una y el id de cada sección, y dibuja las flechas desde el índice. Después, la enseña al compañero/a, que hace de cliente y dice qué echaría en falta.",
        diu: ["Escriu l'id al costat de cada secció: sense accents ni espais.|Escribe el id al lado de cada sección: sin acentos ni espacios.",
          "Client: s'entén on hi haurà cada cosa? Què hi trobes a faltar?|Cliente: ¿se entiende dónde estará cada cosa? ¿Qué echas en falta?"],
        slides: ['s8'], app: "Cap: activitat sense pantalla (l'esbós es queda a la taula).|Ninguna: actividad sin pantalla (el boceto se queda en la mesa).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 14, t: "A l'ordinador: preparació i primeres parts|En el ordenador: preparación y primeras partes", fase: 'ordinador',
        fa: "Cada alumne/a fa els passos de l'app fins a la pausa i, després de la pausa activa, els reptes 1 i 2 amb la fitxa de mostra de la balena: la capçalera i l'índex. Projecta el codi de la diapositiva quan vegis que molts s'encallen amb els id.|Cada alumno/a hace los pasos de la app hasta la pausa y, después de la pausa activa, los retos 1 y 2 con la ficha de muestra de la ballena: la cabecera y el índice. Proyecta el código de la diapositiva cuando veas que muchos se atascan con los id.",
        diu: ["Clica cada enllaç de l'índex: si no salta, compara l'href amb l'id.|Pulsa cada enlace del índice: si no salta, compara el href con el id.",
          "L'índex va entre la figura i la primera secció.|El índice va entre la figura y la primera sección.",
          "El width, només el número i entre 150 i 250.|El width, solo el número y entre 150 y 250."],
        slides: ['s9', 's10'], app: "De «La missió» fins a «Investiga» (l'esbós ja està fet), la «Pausa activa» i els reptes 1 i 2: la capçalera i l'índex.|De «La misión» hasta «Investiga» (el boceto ya está hecho), la «Pausa activa» y los retos 1 y 2: la cabecera y el índice.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: dades, revisió i fonts|Retos: datos, revisión y fuentes", fase: 'ordinador',
        fa: "Els alumnes fan els reptes 3, 4 i 5: les llistes de dades, la revisió de la fitxa del gos amb quatre errors i la cita amb les fonts i el peu. L'extra, «Torna a l'índex», és per a qui acabi.|Los alumnos hacen los retos 3, 4 y 5: las listas de datos, la revisión de la ficha del perro con cuatro errores y la cita con las fuentes y el pie. El extra, «Vuelve al índice», es para quien termine.",
        diu: ["Al repte de la revisió hi ha quatre errors: compta'ls quan els trobis.|En el reto de la revisión hay cuatro errores: cuéntalos cuando los encuentres.",
          "Les dades, en frases curtes d'una sola idea.|Los datos, en frases cortas de una sola idea.",
          "El peu de pàgina, l'últim de tot.|El pie de página, lo último de todo."],
        slides: ['s11'], app: "Reptes 3, 4 i 5 i, per a qui acabi, el repte extra.|Retos 3, 4 y 5 y, para quien termine, el reto extra.", org: "Individual|Individual" },
      { min: 12, t: "Crea: la fitxa del meu animal|Crea: la ficha de mi animal", fase: 'crea',
        fa: "Cada alumne/a construeix la fitxa sencera del seu animal seguint l'esbós. Als darrers minuts, en parelles, es revisen la fitxa amb les targetes de revisió: cada targeta superada es gira. Recorda que la poden acabar a casa.|Cada alumno/a construye la ficha entera de su animal siguiendo el boceto. En los últimos minutos, por parejas, se revisan la ficha con las tarjetas de revisión: cada tarjeta superada se gira. Recuerda que la pueden terminar en casa.",
        diu: ["Segueix el teu esbós: és el teu mapa.|Sigue tu boceto: es tu mapa.",
          "Revisor/a: llegeix cada targeta i comprova-la a la pàgina del company/a.|Revisor/a: lee cada tarjeta y compruébala en la página del compañero/a.",
          "No cal acabar-la avui: es desa al portafoli i la pots continuar a casa.|No hace falta terminarla hoy: se guarda en el portafolio y la puedes continuar en casa."],
        slides: ['s12', 's13'], app: "Pas «Crea»: La fitxa d'un animal (es desa al portafoli i dona la insígnia d'imatges i enllaços).|Paso «Crea»: La ficha de un animal (se guarda en el portafolio y da la insignia de imágenes y enlaces).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament: la guia del museu|Cierre: la guía del museo", fase: 'tancament',
        fa: "Projecta dues o tres fitxes voluntàries i celebra un encert de cada una. Repassa el resum de la unitat, deixa que responguin les preguntes finals i fes el tiquet a la porta.|Proyecta dos o tres fichas voluntarias y celebra un acierto de cada una. Repasa el resumen de la unidad, deja que respondan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Què és el que més us ha costat de la fitxa? I el que us ha quedat millor?|¿Qué es lo que más os ha costado de la ficha? ¿Y lo que os ha quedado mejor?",
          "Ja sabeu fer una web amb imatges, enllaços i fonts: com les de debò.|Ya sabéis hacer una web con imágenes, enlaces y fuentes: como las de verdad."],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Comença a escriure codi sense esbós i es perd a mitja fitxa.|Empieza a escribir código sin boceto y se pierde a media ficha.",
        "Torna-li l'esbós de paper i demana-li que assenyali en quina caixa és ara. Que construeixi la caixa següent.|Devuélvele el boceto de papel y pídele que señale en qué caja está ahora. Que construya la caja siguiente."],
      ["L'índex no salta perquè l'id té accents, espais o el #.|El índice no salta porque el id tiene acentos, espacios o el #.",
        "Que copiï l'id de l'esbós lletra a lletra i el compari amb l'href. Recorda la regla: minúscules, sense accents, guions.|Que copie el id del boceto letra a letra y lo compare con el href. Recuerda la regla: minúsculas, sin acentos, guiones."],
      ["Copia paràgrafs sencers d'una web com si fossin seus.|Copia párrafos enteros de una web como si fueran suyos.",
        "Recorda la sessió 3: o ho escriu amb les seves paraules i posa la font, o ho posa com a cita amb «blockquote».|Recuerda la sesión 3: o lo escribe con sus palabras y pone la fuente, o lo pone como cita con «blockquote»."],
      ["Inventa dades de l'animal (mides, edats) sense comprovar-les.|Inventa datos del animal (medidas, edades) sin comprobarlos.",
        "Pregunta-li on ho ha llegit. Si no ho sap, que ho busqui en una font fiable o que ho tregui de la fitxa.|Pregúntale dónde lo ha leído. Si no lo sabe, que lo busque en una fuente fiable o que lo quite de la ficha."],
      ["Posa el «footer» a mig document o abans de les fonts.|Pone el «footer» a mitad del documento o antes de las fuentes.",
        "Que miri l'esbós: el peu és l'última caixa. Que mogui el bloc sencer al final, just abans de tancar el «body».|Que mire el boceto: el pie es la última caja. Que mueva el bloque entero al final, justo antes de cerrar el «body»."]
    ],
    diff: {
      mes: "Fer el repte extra «Torna a l'índex» i afegir a la fitxa una secció «Animals semblants» amb dues figures i els seus crèdits.|Hacer el reto extra «Vuelve al índice» y añadir a la ficha una sección «Animales parecidos» con dos figuras y sus créditos.",
      menys: "Fer la fitxa amb dues seccions en lloc de tres i partir del codi de la balena dels reptes com a plantilla, canviant-hi l'animal, les dades i les fonts.|Hacer la ficha con dos secciones en lugar de tres y partir del código de la ballena de los retos como plantilla, cambiando el animal, los datos y las fuentes."
    },
    aval: {
      ticket: ["Quines dues coses han de coincidir perquè un enllaç de l'índex salti a la seva secció?|¿Qué dos cosas tienen que coincidir para que un enlace del índice salte a su sección?",
        "Digues dues coses que has revisat abans de donar la fitxa per acabada.|Di dos cosas que has revisado antes de dar la ficha por terminada."],
      rubric: [
        ["Planificació|Planificación", "Fa un esbós complet amb etiquetes i id, i el segueix.|Hace un boceto completo con etiquetas e id, y lo sigue.", "Fa l'esbós, però no el fa servir per construir.|Hace el boceto, pero no lo usa para construir."],
        ["Imatge i índex|Imagen e índice", "Figura amb alt i crèdit, i un índex on tots els enllaços salten.|Figura con alt y crédito, y un índice donde todos los enlaces saltan.", "Algun enllaç no salta o falta l'alt o el crèdit.|Algún enlace no salta o falta el alt o el crédito."],
        ["Contingut|Contenido", "Dades comprovades en llistes ben fetes i una llista numerada pròpia.|Datos comprobados en listas bien hechas y una lista numerada propia.", "Poques dades o en paràgrafs llargs, o sense comprovar.|Pocos datos o en párrafos largos, o sin comprobar."],
        ["Cita, fonts i peu|Cita, fuentes y pie", "Cita amb font, fonts amb enllaços que funcionen i peu signat al final.|Cita con fuente, fuentes con enlaces que funcionan y pie firmado al final.", "Falta alguna peça o els enllaços de les fonts no funcionen.|Falta alguna pieza o los enlaces de las fuentes no funcionan."]
      ]
    },
    casa: "A casa, acabeu junts la fitxa al mòbil: busqueu dues dades més en una font fiable, afegiu-les a la llista i poseu la font a la secció «Fonts». La persona de casa pot fer de revisora amb les targetes.|En casa, terminad juntos la ficha en el móvil: buscad dos datos más en una fuente fiable, añadidlos a la lista y poned la fuente en la sección «Fuentes». La persona de casa puede hacer de revisora con las tarjetas.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: la fitxa d'un animal|Proyecto: la ficha de un animal", x: "El museu de natura de l'illa vol una guia d'animals. Avui en feu les fitxes!|El museo de naturaleza de la isla quiere una guía de animales. ¡Hoy hacéis las fichas!",
        nota: "Presenta l'encàrrec com un projecte professional: hi haurà esbós, construcció i revisió.|Presenta el encargo como un proyecto profesional: habrá boceto, construcción y revisión." },
      { id: 's2', k: 'repas', t: "La unitat en quatre idees|La unidad en cuatro ideas", punts: ["img amb src i alt.|img con src y alt.", "a amb href; id i # per saltar.|a con href; id y # para saltar.", "Crèdits al peu de foto.|Créditos en el pie de foto.", "Cita i secció de fonts.|Cita y sección de fuentes."],
        nota: "Demana un exemple de cada idea a alumnes diferents.|Pide un ejemplo de cada idea a alumnos diferentes." },
      { id: 's3', k: 'pregunta', t: "Què ha de tenir una bona fitxa?|¿Qué tiene que tener una buena ficha?", x: "Si busqueu informació d'un animal, què voleu trobar a la seva fitxa?|Si buscáis información de un animal, ¿qué queréis encontrar en su ficha?",
        nota: "Apunta les respostes a la pissarra: les faràs servir per comprovar l'esbós. Deixa que triïn l'animal.|Apunta las respuestas en la pizarra: las usarás para comprobar el boceto. Deja que elijan el animal." },
      { id: 's4', k: 'anim', t: "De l'esbós a la pàgina|Del boceto a la página", anim: 'wplan', x: "Primer, caixes en un paper. Després, cada caixa es converteix en etiquetes.|Primero, cajas en un papel. Después, cada caja se convierte en etiquetas.",
        nota: "Explica que els dissenyadors de debò comencen així: canviar un dibuix és molt més ràpid que canviar el codi.|Explica que los diseñadores de verdad empiezan así: cambiar un dibujo es mucho más rápido que cambiar el código." },
      { id: 's5', k: 'concepte', t: "Capçalera i índex|Cabecera e índice", punts: ["h1 amb el nom i una figura amb crèdit.|h1 con el nombre y una figura con crédito.", "Índex: nav amb enllaços #.|Índice: nav con enlaces #.", "id curts, sense accents ni espais.|id cortos, sin acentos ni espacios."],
        code: '<h1 id="dalt">La balena</h1>\n<nav>\n  <ul>\n    <li><a href="#com-es">Com és</a></li>\n    <li><a href="#on-viu">On viu</a></li>\n  </ul>\n</nav>\n<h2 id="com-es">Com és</h2>\n<h2 id="on-viu">On viu</h2>',
        nota: "Encercla cada parella href i id del mateix color a la projecció o a la pissarra.|Rodea cada pareja href e id del mismo color en la proyección o en la pizarra." },
      { id: 's6', k: 'concepte', t: "Dades en llistes|Datos en listas", punts: ["ul per a dades curtes.|ul para datos cortos.", "ol per a un rànquing teu.|ol para un ranking tuyo.", "Només dades comprovades.|Solo datos comprobados."],
        code: '<h2 id="com-es">Com és</h2>\n<ul>\n  <li>És un mamífer, no un peix.</li>\n  <li>Respira aire pels forats del cap.</li>\n</ul>',
        nota: "Remarca que no s'inventen dades: si no ho han llegit en una font, no ho escriuen.|Remarca que no se inventan datos: si no lo han leído en una fuente, no lo escriben." },
      { id: 's7', k: 'anim', t: "La llista de revisió|La lista de revisión", anim: 'walt', x: "Alts, enllaços que salten, crèdits, fonts amb https i codi sense errors.|Alts, enlaces que saltan, créditos, fuentes con https y código sin errores.",
        nota: "Presenta les targetes de revisió: les faran servir al final del pas Crea.|Presenta las tarjetas de revisión: las usarán al final del paso Crea." },
      { id: 's8', k: 'activitat', t: "L'esbós de la fitxa|El boceto de la ficha", timer: 8, punts: ["Tria l'animal.|Elige el animal.", "Dibuixa les caixes de dalt a baix.|Dibuja las cajas de arriba abajo.", "Escriu l'etiqueta i l'id de cada caixa.|Escribe la etiqueta y el id de cada caja.", "Ensenya-ho al teu client.|Enséñalo a tu cliente."],
        nota: "Comprova que cada esbós té els id escrits sense accents: estalviarà molts errors després.|Comprueba que cada boceto tiene los id escritos sin acentos: ahorrará muchos errores después." },
      { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 14, punts: ["Fes els passos fins a la pausa.|Haz los pasos hasta la pausa.", "Pausa activa tots junts.|Pausa activa todos juntos.", "Repte 1: la capçalera.|Reto 1: la cabecera.", "Repte 2: l'índex.|Reto 2: el índice."],
        nota: "Al pas «L'esbós de la fitxa» han de tocar «Ho hem fet!».|En el paso «El boceto de la ficha» tienen que pulsar «¡Lo hemos hecho!»." },
      { id: 's10', k: 'repte', t: "L'índex de la balena|El índice de la ballena", x: "Tres seccions, tres id, tres enllaços. Coincideixen lletra a lletra?|Tres secciones, tres id, tres enlaces. ¿Coinciden letra a letra?",
        code: '<nav>\n  <ul>\n    <li><a href="#com-es">Com és</a></li>\n    <li><a href="#on-viu">On viu</a></li>\n    <li><a href="#que-menja">Què menja</a></li>\n  </ul>\n</nav>',
        nota: "Projecta-ho només si molts s'encallen al repte 2. Fes notar que el text de l'enllaç sí que porta accents; l'id, no.|Proyéctalo solo si muchos se atascan en el reto 2. Haz notar que el texto del enlace sí lleva acentos; el id, no." },
      { id: 's11', k: 'repte', t: "Dades, revisió i fonts|Datos, revisión y fuentes", timer: 10, punts: ["3. Llistes de dades.|3. Listas de datos.", "4. Revisa la fitxa del gos: quatre errors.|4. Revisa la ficha del perro: cuatro errores.", "5. Cita, fonts i peu.|5. Cita, fuentes y pie.", "Extra: «Torna a l'índex».|Extra: «Vuelve al índice»."],
        code: '<blockquote>\n  <p>Les balenes es comuniquen amb cants.</p>\n</blockquote>\n<p>— <cite>La meva profe de ciències</cite></p>',
        nota: "Al repte 4, si algú no troba els quatre errors, digues-li quants n'hi queden, no on són.|En el reto 4, si alguien no encuentra los cuatro errores, dile cuántos quedan, no dónde están." },
      { id: 's12', k: 'activitat', t: "Crea: la fitxa del meu animal|Crea: la ficha de mi animal", timer: 12, punts: ["Segueix el teu esbós.|Sigue tu boceto.", "Capçalera, índex, seccions.|Cabecera, índice, secciones.", "Cita, fonts i peu signat.|Cita, fuentes y pie firmado.", "Als darrers minuts, revisió per parelles.|En los últimos minutos, revisión por parejas."],
        nota: "Avisa quan quedin 4 minuts per començar la revisió amb les targetes.|Avisa cuando queden 4 minutos para empezar la revisión con las tarjetas." },
      { id: 's13', k: 'concepte', t: "Revisió per parelles|Revisión por parejas", punts: ["Totes les imatges tenen alt?|¿Todas las imágenes tienen alt?", "Cada enllaç de l'índex salta?|¿Cada enlace del índice salta?", "El crèdit i les fonts hi són?|¿El crédito y las fuentes están?", "El peu és al final i diu l'autor?|¿El pie está al final y dice el autor?"],
        nota: "El revisor/a ho comprova a la pàgina del company/a i gira cada targeta superada. L'autor/a arregla el que falti.|El revisor/a lo comprueba en la página del compañero/a y gira cada tarjeta superada. El autor/a arregla lo que falte." },
      { id: 's14', k: 'activitat', t: "La guia del museu|La guía del museo", timer: 2, x: "Mirem dues o tres fitxes. Què hi ha que funcioni molt bé?|Miremos dos o tres fichas. ¿Qué hay que funcione muy bien?",
        nota: "Només fitxes voluntàries. Celebra encerts concrets: un alt molt bo, un índex que salta perfecte, unes fonts ben posades.|Solo fichas voluntarias. Celebra aciertos concretos: un alt muy bueno, un índice que salta perfecto, unas fuentes bien puestas." },
      { id: 's15', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["Imatges amb alt i figures amb peu i crèdit.|Imágenes con alt y figuras con pie y crédito.", "Enllaços, pestanyes noves i índexs amb id.|Enlaces, pestañas nuevas e índices con id.", "Respectar l'autoria i citar les fonts.|Respetar la autoría y citar las fuentes."],
        nota: "Felicita el grup: han fet una web completa, connectada i honesta. Han guanyat la insígnia de la unitat.|Felicita al grupo: han hecho una web completa, conectada y honesta. Han ganado la insignia de la unidad." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què ha de coincidir perquè l'índex salti?|¿Qué tiene que coincidir para que el índice salte?", "Digues dues coses que has revisat.|Di dos cosas que has revisado."],
        nota: "Apunta qui no ha acabat la fitxa i recorda-li que la pot continuar a casa des del portafoli.|Apunta quién no ha terminado la ficha y recuérdale que la puede continuar en casa desde el portafolio." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: l'esbós de la fitxa|Ficha: el boceto de la ficha", k: 'fitxa',
        intro: "Dibuixa una caixa per a cada part, de dalt a baix, i respon a cada pregunta dins la caixa. Les solucions són una proposta.|Dibuja una caja para cada parte, de arriba abajo, y responde a cada pregunta dentro de la caja. Las soluciones son una propuesta.",
        items: [
          { q: "Caixa 1, el títol: quina etiqueta fas servir i quin id li poses per poder-hi tornar?|Caja 1, el título: ¿qué etiqueta usas y qué id le pones para poder volver?", sol: "h1 amb el nom de l'animal i id «dalt».|h1 con el nombre del animal e id «dalt»." },
          { q: "Caixa 2, la imatge: quines etiquetes i atributs necessites?|Caja 2, la imagen: ¿qué etiquetas y atributos necesitas?", sol: "figure amb img (src, alt i width) i figcaption amb «Il·lustració: Numi».|figure con img (src, alt y width) y figcaption con «Il·lustració: Numi»." },
          { q: "Caixa 3, l'índex: escriu el text i l'href de tres enllaços.|Caja 3, el índice: escribe el texto y el href de tres enlaces.", sol: "Per exemple: Com és (#com-es), On viu (#on-viu), Què menja (#que-menja).|Por ejemplo: Cómo es (#como-es), Dónde vive (#donde-vive), Qué come (#que-come)." },
          { q: "Caixes 4 a 6, les seccions: escriu el títol i l'id de cada una i quin tipus de llista hi posaràs.|Cajas 4 a 6, las secciones: escribe el título y el id de cada una y qué tipo de lista pondrás.", sol: "Títols h2 amb els mateixos id que l'índex; ul per a dades i ol per al rànquing «M'agrada perquè…».|Títulos h2 con los mismos id que el índice; ul para datos y ol para el ranking «Me gusta porque…»." },
          { q: "Caixa 7, la cita: de qui serà i on posaràs el seu nom?|Caja 7, la cita: ¿de quién será y dónde pondrás su nombre?", sol: "Resposta oberta: la cita dins blockquote i el nom de la font dins cite.|Respuesta abierta: la cita dentro de blockquote y el nombre de la fuente dentro de cite." },
          { q: "Caixes 8 i 9, les fonts i el peu: quines dues fonts faràs servir i què dirà el peu?|Cajas 8 y 9, las fuentes y el pie: ¿qué dos fuentes usarás y qué dirá el pie?", sol: "Dos enllaços https amb pestanya nova (per exemple, la Viquipèdia i una enciclopèdia) i un footer amb ©, l'any i el nom.|Dos enlaces https con pestaña nueva (por ejemplo, la Wikipedia y una enciclopedia) y un footer con ©, el año y el nombre." }
        ] },
      { id: 'p2', t: "Targetes de revisió|Tarjetas de revisión", k: 'targetes',
        intro: "Un paquet per parella. El revisor/a llegeix cada targeta, ho comprova a la pàgina del company/a i la gira si està bé.|Un paquete por pareja. El revisor/a lee cada tarjeta, lo comprueba en la página del compañero/a y la gira si está bien.",
        items: [
          { t: "Totes les imatges tenen un alt que les descriu|Todas las imágenes tienen un alt que las describe", n: 1 },
          { t: "La figura té el crèdit «Il·lustració: Numi»|La figura tiene el crédito «Il·lustració: Numi»", n: 1 },
          { t: "Cada enllaç de l'índex salta a la seva secció|Cada enlace del índice salta a su sección", n: 1 },
          { t: "Les dades estan en llistes i surten d'una font|Los datos están en listas y salen de una fuente", n: 1 },
          { t: "La cita té la seva font amb cite|La cita tiene su fuente con cite", n: 1 },
          { t: "Les fonts són enllaços amb https que s'obren en una pestanya nova|Las fuentes son enlaces con https que se abren en una pestaña nueva", n: 1 },
          { t: "El peu és al final i porta ©, l'any i el nom|El pie está al final y lleva ©, el año y el nombre", n: 1 },
          { t: "L'editor no marca cap error|El editor no marca ningún error", n: 1 }
        ] }
    ]
  }
});

/* ---------- Guia del professorat · Tech Web, unitat 4 «CSS: donar estil» ---------- */
Object.assign(TGUIDE, {
  /* ===== w4-1 · Donar estil ===== */
  'w4-1': {
    obj: [
      "L'alumne/a explica que l'HTML diu què hi ha a la pàgina i el CSS diu com es veu.|El alumno/a explica que el HTML dice qué hay en la página y el CSS dice cómo se ve.",
      "L'alumne/a identifica les parts d'una regla CSS: selector, claus, propietat, dos punts, valor i punt i coma.|El alumno/a identifica las partes de una regla CSS: selector, llaves, propiedad, dos puntos, valor y punto y coma.",
      "L'alumne/a connecta un fitxer estil.css a l'index.html amb l'etiqueta «link» i comprova que s'aplica.|El alumno/a conecta un archivo estil.css al index.html con la etiqueta «link» y comprueba que se aplica.",
      "L'alumne/a escriu regles de color per a diverses etiquetes i corregeix errors de sintaxi amb l'ajuda de l'editor.|El alumno/a escribe reglas de color para varias etiquetas y corrige errores de sintaxis con la ayuda del editor."
    ],
    comp: [
      "Competència digital (CD2): crear contingut digital separant contingut i presentació|Competencia digital (CD2): crear contenido digital separando contenido y presentación",
      "Pensament computacional: sintaxi exacta d'un llenguatge i depuració d'errors|Pensamiento computacional: sintaxis exacta de un lenguaje y depuración de errores",
      "Llengua estrangera (anglès): noms de colors i de propietats|Lengua extranjera (inglés): nombres de colores y de propiedades",
      "Educació visual i plàstica: el color com a element de comunicació|Educación visual y plástica: el color como elemento de comunicación"
    ],
    vocab: [
      ["CSS|CSS", "El llenguatge que diu com es veu una pàgina: colors, lletres, mides.|El lenguaje que dice cómo se ve una página: colores, letras, tamaños."],
      ["Regla|Regla", "Un selector i, entre claus, una o més declaracions.|Un selector y, entre llaves, una o más declaraciones."],
      ["Selector|Selector", "La part de la regla que diu a quins elements s'aplica (h1, p, body…).|La parte de la regla que dice a qué elementos se aplica (h1, p, body…)."],
      ["Propietat i valor|Propiedad y valor", "Què canviem (color) i com ho deixem (red), separats per dos punts.|Qué cambiamos (color) y cómo lo dejamos (red), separados por dos puntos."],
      ["Full d'estil|Hoja de estilo", "El fitxer estil.css, que l'index.html enllaça amb l'etiqueta link.|El archivo estil.css, que el index.html enlaza con la etiqueta link."],
      ["Comentari|Comentario", "Text entre barra-asterisc i asterisc-barra que el navegador no llegeix.|Texto entre barra-asterisco y asterisco-barra que el navegador no lee."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Donar estil»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Dar estilo»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Fulls en blanc i colors (retoladors o llapis) per parella|Hojas en blanco y colores (rotuladores o lápices) por pareja"
      ],
      imprimir: ["Peces de regla CSS|Piezas de regla CSS", "Fitxa: caça l'error|Ficha: caza el error"],
      prep: [
        "Imprimir i retallar un paquet de peces de regla per parella. Si es plastifiquen, serveixen per a tota la unitat.|Imprimir y recortar un paquete de piezas de regla por pareja. Si se plastifican, sirven para toda la unidad.",
        "Imprimir la fitxa de caçar errors (una per alumne/a) per a qui acabi abans o per fer a casa.|Imprimir la ficha de cazar errores (una por alumno/a) para quien acabe antes o para hacer en casa.",
        "Provar a l'app el repte 3 (el CSS amb quatre errors) per veure els avisos que dona l'editor.|Probar en la app el reto 3 (el CSS con cuatro errores) para ver los avisos que da el editor."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: la mateixa pàgina, dues cares|Bienvenida: la misma página, dos caras", fase: 'inici',
        fa: "Projecta la pàgina sense estil i després la mateixa amb estil. Pregunta què ha canviat i què continua igual. Fes notar que el text és idèntic: només ha canviat l'aspecte. Escriu a la pissarra: HTML = què hi ha, CSS = com es veu.|Proyecta la página sin estilo y después la misma con estilo. Pregunta qué ha cambiado y qué sigue igual. Haz notar que el texto es idéntico: solo ha cambiado el aspecto. Escribe en la pizarra: HTML = qué hay, CSS = cómo se ve.",
        diu: ["Què ha canviat entre aquestes dues pàgines? I què és exactament igual?|¿Qué ha cambiado entre estas dos páginas? ¿Y qué es exactamente igual?",
          "Fins ara escrivíem què hi ha a la pàgina. Avui decidirem com es veu.|Hasta ahora escribíamos qué hay en la página. Hoy decidiremos cómo se ve.",
          "Recordeu el src de les imatges? Avui veureu un altre atribut que també porta un nom de fitxer.|¿Recordáis el src de las imágenes? Hoy veréis otro atributo que también lleva un nombre de archivo."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Com s'escriu una regla CSS|Cómo se escribe una regla CSS", fase: 'teoria',
        fa: "Explica que una web són fitxers i que l'estil va en un fitxer a part. Desmunta una regla a la pissarra, peça a peça, i demana a la classe que digui el nom de cada part. Mostra el codi en viu i el link que uneix els fitxers. Compara l'atribut style amb el fitxer i pregunta quina opció és millor per a una web de vint pàgines. Acaba amb la diapositiva de l'error: que el trobin a mà alçada.|Explica que una web son archivos y que el estilo va en un archivo aparte. Desmonta una regla en la pizarra, pieza a pieza, y pide a la clase que diga el nombre de cada parte. Muestra el código en vivo y el link que une los archivos. Compara el atributo style con el archivo y pregunta qué opción es mejor para una web de veinte páginas. Termina con la diapositiva del error: que lo encuentren a mano alzada.",
        diu: ["Com es diu la part de fora de les claus? I la de dins abans dels dos punts?|¿Cómo se llama la parte de fuera de las llaves? ¿Y la de dentro antes de los dos puntos?",
          "Si tinc vint paràgrafs, quantes vegades he d'escriure l'estil amb style? I amb el fitxer?|Si tengo veinte párrafos, ¿cuántas veces tengo que escribir el estilo con style? ¿Y con el archivo?",
          "El navegador no sap català: els colors, en anglès.|El navegador no sabe castellano: los colores, en inglés.",
          "Sense la línia link, el CSS existeix però no s'aplica.|Sin la línea link, el CSS existe pero no se aplica."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Fes de navegador|Haz de navegador", fase: 'desconnectat',
        fa: "En parelles, una persona dibuixa una pàgina sense colors i munta regles amb les peces de paper; l'altra fa de navegador i acoloreix exactament el que diuen les regles. Després canvien i la dissenyadora amaga un error a propòsit (un igual, un punt i coma que falta, un color en català). El navegador només pot aplicar regles ben escrites.|En parejas, una persona dibuja una página sin colores y monta reglas con las piezas de papel; la otra hace de navegador y colorea exactamente lo que dicen las reglas. Después cambian y la diseñadora esconde un error a propósito (un igual, un punto y coma que falta, un color en castellano). El navegador solo puede aplicar reglas bien escritas.",
        diu: ["Navegadors: si la regla té un error, no la podeu aplicar, encara que endevineu què volia dir.|Navegadores: si la regla tiene un error, no la podéis aplicar, aunque adivinéis qué quería decir.",
          "El selector p pinta tots els paràgrafs, no només el primer.|El selector p pinta todos los párrafos, no solo el primero.",
          "Quin error heu amagat? L'ha trobat el navegador?|¿Qué error habéis escondido? ¿Lo ha encontrado el navegador?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles amb papers que es canvien|Parejas con papeles que se cambian" },
      { min: 13, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança al seu ritme fins a la pausa activa. Al pas «Mans a l'obra», que marquin que ja l'han fet. Passeja i fixa't en qui tria les respostes de «Prova» sense llegir el codi: demana-li que llegeixi el selector en veu alta. A l'editor lliure, anima'ls a esborrar la línia link per veure què passa.|Cada alumno/a abre la sesión y avanza a su ritmo hasta la pausa activa. En el paso «Manos a la obra», que marquen que ya lo han hecho. Pasea y fíjate en quién elige las respuestas de «Prueba» sin leer el código: pídele que lea el selector en voz alta. En el editor libre, anímalos a borrar la línea link para ver qué pasa.",
        diu: ["Abans de triar, llegeix el selector: a qui s'aplica aquesta regla?|Antes de elegir, lee el selector: ¿a quién se aplica esta regla?",
          "Què passa si esborres el link? I si el tornes a escriure?|¿Qué pasa si borras el link? ¿Y si lo vuelves a escribir?",
          "Ara tens dues pestanyes: comprova sempre en quina estàs escrivint.|Ahora tienes dos pestañas: comprueba siempre en cuál estás escribiendo."],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: les dues històries, les set targetes de «Descobreix», «Fes de navegador» (ja fet), les dues preguntes de «Prova», els dos errors per trobar i l'editor lliure.|De «La misión» hasta «Investiga»: las dos historias, las siete tarjetas de «Descubre», «Haz de navegador» (ya hecho), las dos preguntas de «Prueba», los dos errores por encontrar y el editor libre.", org: "Individual|Individual" },
      { min: 12, t: "Pausa activa i reptes|Pausa activa y retos", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després resol amb la classe el repte dels quatre errors, projectat: que cada alumne/a en digui un i com s'arregla. Deixa'ls fer els cinc reptes. Qui acabi, el repte extra de la regla amb comes. Recorda que l'editor indica la línia de cada error.|Haced la pausa activa todos juntos. Después resuelve con la clase el reto de los cuatro errores, proyectado: que cada alumno/a diga uno y cómo se arregla. Deja que hagan los cinco retos. Quien acabe, el reto extra de la regla con comas. Recuerda que el editor indica la línea de cada error.",
        diu: ["Llegeix el missatge de sota l'editor: et diu la línia i què hi falta.|Lee el mensaje de debajo del editor: te dice la línea y qué falta.",
          "Al repte 4 el CSS és perfecte: on pot ser el problema, doncs?|En el reto 4 el CSS es perfecto: ¿dónde puede estar el problema, entonces?",
          "Si ajudes algú, assenyala la línia, però no li escriguis el codi.|Si ayudas a alguien, señala la línea, pero no le escribas el código."],
        slides: ['s13', 's14'], app: "«Pausa activa» i els reptes: canviar el color del títol, la regla nova per als paràgrafs, els quatre errors, enllaçar l'estil.css i les cinc regles des de zero. Extra: una regla per a h1, h2 i h3 amb un comentari.|«Pausa activa» y los retos: cambiar el color del título, la regla nueva para los párrafos, los cuatro errores, enlazar el estil.css y las cinco reglas desde cero. Extra: una regla para h1, h2 y h3 con un comentario.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la meva pàgina amb estil|Crea: mi página con estilo", fase: 'crea',
        fa: "Cada alumne/a escriu una pàgina sobre si mateix/a i la vesteix amb almenys tres regles. Recorda els criteris que surten a l'app. Si no hi ha temps d'acabar-la, es desa i es pot completar a casa.|Cada alumno/a escribe una página sobre sí mismo/a y la viste con al menos tres reglas. Recuerda los criterios que salen en la app. Si no hay tiempo de acabarla, se guarda y se puede completar en casa.",
        diu: ["Primer el contingut a l'index.html, després l'estil.|Primero el contenido en el index.html, después el estilo.",
          "Tria colors que es llegeixin bé: la setmana vinent parlarem de contrast.|Elige colores que se lean bien: la semana que viene hablaremos de contraste."],
        slides: ['s15'], app: "Pas «Crea»: La meva pàgina amb estil.|Paso «Crea»: Mi página con estilo.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una de les preguntes del tiquet.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una de las preguntas del ticket.",
        diu: ["Què fa l'HTML i què fa el CSS?|¿Qué hace el HTML y qué hace el CSS?",
          "Quines són les parts d'una regla?|¿Cuáles son las partes de una regla?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu un igual en lloc de dos punts: color = red.|Escribe un igual en lugar de dos puntos: color = red.",
        "Que digui en veu alta les parts: propietat, dos punts, valor, punt i coma. L'editor també ho marca.|Que diga en voz alta las partes: propiedad, dos puntos, valor, punto y coma. El editor también lo marca."],
      ["Escriu els colors en català o castellà (vermell, rojo).|Escribe los colores en catalán o castellano (vermell, rojo).",
        "Recorda-li que el navegador només entén l'anglès. L'avís de l'editor li proposa la paraula correcta.|Recuérdale que el navegador solo entiende inglés. El aviso del editor le propone la palabra correcta."],
      ["Escriu el CSS a la pestanya index.html (o l'HTML a estil.css).|Escribe el CSS en la pestaña index.html (o el HTML en estil.css).",
        "Fes-li mirar el nom de la pestanya activa abans d'escriure. Cada llenguatge té el seu fitxer.|Hazle mirar el nombre de la pestaña activa antes de escribir. Cada lenguaje tiene su archivo."],
      ["Oblida la clau de tancar i les regles següents deixen de funcionar.|Olvida la llave de cerrar y las reglas siguientes dejan de funcionar.",
        "Que compti les claus d'obrir i de tancar amb el dit: n'hi ha d'haver les mateixes.|Que cuente las llaves de abrir y de cerrar con el dedo: tiene que haber las mismas."],
      ["Creu que el CSS no funciona quan en realitat falta el link.|Cree que el CSS no funciona cuando en realidad falta el link.",
        "Pregunta-li: com sap l'index.html on és l'estil? Que busqui la línia al head.|Pregúntale: ¿cómo sabe el index.html dónde está el estilo? Que busque la línea en el head."]
    ],
    diff: {
      mes: "Fer el repte extra amb selectors separats per comes i afegir comentaris que expliquin cada regla. Després, provar quina regla guanya si dues diuen coses diferents al mateix element.|Hacer el reto extra con selectores separados por comas y añadir comentarios que expliquen cada regla. Después, probar qué regla gana si dos dicen cosas diferentes al mismo elemento.",
      menys: "Tenir a la taula una regla de paper muntada amb les peces i copiar-la tal qual, canviant només el valor. Començar pels reptes 1 i 2 i deixar el 5 per a casa.|Tener en la mesa una regla de papel montada con las piezas y copiarla tal cual, cambiando solo el valor. Empezar por los retos 1 y 2 y dejar el 5 para casa."
    },
    aval: {
      ticket: ["Què fa l'HTML i què fa el CSS? Digues un exemple de cada.|¿Qué hace el HTML y qué hace el CSS? Di un ejemplo de cada.",
        "Digues les parts de la regla h1 { color: red; }.|Di las partes de la regla h1 { color: red; }."],
      rubric: [
        ["HTML i CSS|HTML y CSS", "Explica amb les seves paraules què fa cada llenguatge i per què van en fitxers separats.|Explica con sus palabras qué hace cada lenguaje y por qué van en archivos separados.", "Sap que el CSS canvia colors, però encara confon on s'escriu cada cosa.|Sabe que el CSS cambia colores, pero todavía confunde dónde se escribe cada cosa."],
        ["Sintaxi de la regla|Sintaxis de la regla", "Escriu regles completes sense errors i corregeix les que en tenen.|Escribe reglas completas sin errores y corrige las que los tienen.", "Escriu regles amb ajuda de l'editor, però sovint li falten el punt i coma o la clau.|Escribe reglas con ayuda del editor, pero a menudo le faltan el punto y coma o la llave."],
        ["Enllaçar l'estil|Enlazar el estilo", "Afegeix el link al head i sap explicar què passa si falta.|Añade el link en el head y sabe explicar qué pasa si falta.", "Afegeix el link copiant-lo, però no sap dir per què cal.|Añade el link copiándolo, pero no sabe decir por qué hace falta."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts l'activitat «Fes de navegador»: una persona escriu regles en un paper i l'altra pinta un dibuix exactament com diuen.|En casa, con el móvil, podéis repetir la sesión y hacer juntos la actividad «Haz de navegador»: una persona escribe reglas en un papel y la otra pinta un dibujo exactamente como dicen.",
    slides: [
      { id: 's1', k: 'portada', t: "Donar estil|Dar estilo", x: "Avui aprenem el segon llenguatge de la web: el CSS.|Hoy aprendemos el segundo lenguaje de la web: el CSS.",
        nota: "Presenta l'objectiu: al final de la classe, cada alumne/a tindrà una pàgina vestida amb el seu propi estil.|Presenta el objetivo: al final de la clase, cada alumno/a tendrá una página vestida con su propio estilo." },
      { id: 's2', k: 'pregunta', t: "La mateixa pàgina, dues cares|La misma página, dos caras", x: "Què ha canviat? I què és exactament igual?|¿Qué ha cambiado? ¿Y qué es exactamente igual?",
        code: '<h1>Club de lectura</h1>\n<p>Ens trobem cada dijous.</p>\n\n/* estil.css */\nbody { background-color: lavender; }\nh1 { color: purple; font-size: 44px; }\np { color: dimgray; }',
        nota: "Primer mostra només l'HTML i imagina amb ells la pàgina en blanc i negre. Després, l'estil. El text no ha canviat ni una lletra.|Primero muestra solo el HTML e imagina con ellos la página en blanco y negro. Después, el estilo. El texto no ha cambiado ni una letra." },
      { id: 's3', k: 'repas', t: "Recordem: atributs amb fitxers|Recordemos: atributos con archivos", punts: ["src diu quin fitxer d'imatge es mostra.|src dice qué archivo de imagen se muestra.", "href diu on porta un enllaç.|href dice adónde lleva un enlace.", "Avui: href també servirà per trobar l'estil.css.|Hoy: href también servirá para encontrar el estil.css."],
        nota: "Pregunta-ho abans de mostrar els punts. Connecta-ho amb l'etiqueta link que veuran avui.|Pregúntalo antes de mostrar los puntos. Conéctalo con la etiqueta link que verán hoy." },
      { id: 's4', k: 'anim', t: "Una web són fitxers|Una web son archivos", anim: 'wfiles', x: "index.html és l'esquelet; estil.css és la roba.|index.html es el esqueleto; estil.css es la ropa.",
        nota: "Explica que CSS vol dir fulls d'estil en cascada. Separar contingut i aspecte permet canviar el disseny sense tocar el text.|Explica que CSS significa hojas de estilo en cascada. Separar contenido y aspecto permite cambiar el diseño sin tocar el texto." },
      { id: 's5', k: 'anim', t: "L'anatomia d'una regla|La anatomía de una regla", anim: 'wrule', x: "Selector, claus, propietat, dos punts, valor, punt i coma.|Selector, llaves, propiedad, dos puntos, valor, punto y coma.",
        nota: "Escriu la regla a la pissarra i encercla cada part d'un color. Demana a la classe el nom de cada peça.|Escribe la regla en la pizarra y rodea cada parte de un color. Pide a la clase el nombre de cada pieza." },
      { id: 's6', k: 'concepte', t: "Una regla en viu|Una regla en vivo", x: "Un selector pot portar moltes declaracions, una per línia.|Un selector puede llevar muchas declaraciones, una por línea.",
        code: 'h1 {\n  color: crimson;\n  font-size: 40px;\n}\np {\n  color: gray;\n}',
        nota: "Pregunta què passarà amb els paràgrafs abans de passar a la segona regla. Remarca que els colors van en anglès.|Pregunta qué pasará con los párrafos antes de pasar a la segunda regla. Remarca que los colores van en inglés." },
      { id: 's7', k: 'anim', t: "El link uneix els fitxers|El link une los archivos", anim: 'wlinkcss', x: "Una línia al head: rel diu que és un full d'estil i href, el nom del fitxer.|Una línea en el head: rel dice que es una hoja de estilo y href, el nombre del archivo.",
        code: '<head>\n  <title>La meva web</title>\n  <link rel="stylesheet" href="estil.css">\n</head>',
        nota: "Remarca que link no es tanca, com img. Sense aquesta línia, el CSS no s'aplica encara que estigui perfecte.|Remarca que link no se cierra, como img. Sin esta línea, el CSS no se aplica aunque esté perfecto." },
      { id: 's8', k: 'concepte', t: "Atribut style o fitxer?|¿Atributo style o archivo?", punts: ["style: només afecta aquell element.|style: solo afecta a ese elemento.", "estil.css: una regla canvia tota la web.|estil.css: una regla cambia toda la web.", "Els professionals fan servir el fitxer.|Los profesionales usan el archivo."],
        code: '<p style="color: blue;">Només aquest.</p>\n\n/* estil.css */\np { color: blue; }',
        nota: "Pregunta: si la web té vint pàgines amb deu paràgrafs cadascuna, quantes vegades hauríem d'escriure style?|Pregunta: si la web tiene veinte páginas con diez párrafos cada una, ¿cuántas veces tendríamos que escribir style?" },
      { id: 's9', k: 'pregunta', t: "On és l'error?|¿Dónde está el error?", x: "Aquest CSS té tres errors. Qui en troba un?|Este CSS tiene tres errores. ¿Quién encuentra uno?",
        code: 'h1 {\n  color = navy;\n}\np {\n  color: vermell\n  font-size: 18px;\n',
        nota: "Errors: el igual de la línia 2, el color en català i el punt i coma que falta a la línia 5, i la clau final que falta.|Errores: el igual de la línea 2, el color en catalán y el punto y coma que falta en la línea 5, y la llave final que falta." },
      { id: 's10', k: 'activitat', t: "Fes de navegador|Haz de navegador", timer: 10, punts: ["Dissenyador/a: dibuixa la pàgina i munta tres regles amb les peces.|Diseñador/a: dibuja la página y monta tres reglas con las piezas.", "Navegador/a: acoloreix només el que diu cada regla.|Navegador/a: colorea solo lo que dice cada regla.", "Canvieu i amagueu un error a propòsit.|Cambiad y esconded un error a propósito."],
        nota: "Passa per les taules i comprova que els navegadors no apliquen regles amb errors. És la idea clau de l'activitat.|Pasa por las mesas y comprueba que los navegadores no aplican reglas con errores. Es la idea clave de la actividad." },
      { id: 's11', k: 'activitat', t: "Les regles del navegador|Las reglas del navegador", punts: ["Només aplica regles ben escrites.|Solo aplica reglas bien escritas.", "El selector tria tots els elements d'aquell tipus.|El selector elige todos los elementos de ese tipo.", "No endevina: fa el que hi ha escrit.|No adivina: hace lo que está escrito."],
        nota: "Deixa aquesta diapositiva projectada mentre treballen en parelles.|Deja esta diapositiva proyectada mientras trabajan en parejas." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre la sessió «Donar estil».|Abre la sesión «Dar estilo».", "Fes «Descobreix», «Prova» i «Investiga».|Haz «Descubre», «Prueba» e «Investiga».", "A l'editor lliure, esborra el link i mira què passa.|En el editor libre, borra el link y mira qué pasa.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas de l'activitat en paper, que marquin que ja l'han fet a classe.|En el paso de la actividad en papel, que marquen que ya la han hecho en clase." },
      { id: 's13', k: 'repte', t: "Arreglem-ho junts|Arreglémoslo juntos", x: "Quatre errors: qui en diu un i com s'arregla?|Cuatro errores: ¿quién dice uno y cómo se arregla?",
        code: 'h1 {\n  color: navy\n  font-size: 36px;\n}\np {\n  color: vermell;\n}\nli {\n  color = green;\n',
        nota: "És el repte 3 de l'app. Errors: punt i coma a la línia 2, color en català, igual a la línia 8 i clau final.|Es el reto 3 de la app. Errores: punto y coma en la línea 2, color en catalán, igual en la línea 8 y llave final." },
      { id: 's14', k: 'repte', t: "Reptes: vesteix la pàgina|Retos: viste la página", timer: 12, punts: ["1. Canvia el color del títol|1. Cambia el color del título", "2. Una regla nova per als paràgrafs|2. Una regla nueva para los párrafos", "3. Caça els quatre errors|3. Caza los cuatro errores", "4. Enllaça l'estil.css|4. Enlaza el estil.css", "5. Cinc regles des de zero|5. Cinco reglas desde cero"],
        nota: "Si algú s'encalla al repte 4, pregunta: on diu l'index.html quin estil ha de fer servir?|Si alguien se atasca en el reto 4, pregunta: ¿dónde dice el index.html qué estilo tiene que usar?" },
      { id: 's15', k: 'activitat', t: "Crea: la meva pàgina amb estil|Crea: mi página con estilo", timer: 5, x: "Presenta't i vesteix la pàgina amb almenys tres regles: títol, paràgrafs i fons.|Preséntate y viste la página con al menos tres reglas: título, párrafos y fondo.",
        nota: "Celebra que cada pàgina sembli diferent amb el mateix tipus d'HTML: aquest és el poder del CSS.|Celebra que cada página parezca diferente con el mismo tipo de HTML: este es el poder del CSS." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["HTML: què hi ha. CSS: com es veu.|HTML: qué hay. CSS: cómo se ve.", "Regla: selector { propietat: valor; }|Regla: selector { propiedad: valor; }", "El link del head connecta l'estil.|El link del head conecta el estilo."],
        nota: "Torna a la pàgina de dues cares de l'inici: ara ja saben com s'ha fet.|Vuelve a la página de dos caras del inicio: ahora ya saben cómo se ha hecho." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què fa l'HTML i què fa el CSS?|¿Qué hace el HTML y qué hace el CSS?", "Digues les parts de h1 { color: red; }.|Di las partes de h1 { color: red; }."],
        nota: "Fes una pregunta a cada alumne/a a la porta i anota qui necessita més suport amb la sintaxi.|Haz una pregunta a cada alumno/a en la puerta y anota quién necesita más apoyo con la sintaxis." }
    ],
    print: [
      { id: 'p1', t: "Peces de regla CSS|Piezas de regla CSS", k: 'targetes',
        intro: "Un paquet per parella. Retalleu les peces i munteu regles completes sobre la taula: selector, clau d'obrir, propietat, dos punts, valor, punt i coma i clau de tancar.|Un paquete por pareja. Recortad las piezas y montad reglas completas sobre la mesa: selector, llave de abrir, propiedad, dos puntos, valor, punto y coma y llave de cerrar.",
        items: [
          { t: "h1|h1", n: 2 }, { t: "p|p", n: 2 }, { t: "li|li", n: 1 }, { t: "body|body", n: 1 },
          { t: "{|{", n: 4 }, { t: "}|}", n: 4 }, { t: "color|color", n: 4 }, { t: "background-color|background-color", n: 1 },
          { t: ":|:", n: 5 }, { t: ";|;", n: 5 },
          { t: "red|red", n: 1 }, { t: "blue|blue", n: 1 }, { t: "green|green", n: 1 }, { t: "orange|orange", n: 1 }, { t: "lightyellow|lightyellow", n: 1 }
        ] },
      { id: 'p2', t: "Fitxa: caça l'error|Ficha: caza el error", k: 'fitxa',
        intro: "Cada regla té un error. Encercla'l i escriu la regla ben escrita a sota.|Cada regla tiene un error. Rodéalo y escribe la regla bien escrita debajo.",
        items: [
          { q: "h1 { color = blue; }|h1 { color = blue; }", sol: "h1 { color: blue; } (dos punts, no igual)|h1 { color: blue; } (dos puntos, no igual)" },
          { q: "p { color: groc; }|p { color: amarillo; }", sol: "p { color: yellow; } (els colors van en anglès)|p { color: yellow; } (los colores van en inglés)" },
          { q: "li { color: green }|li { color: green }", sol: "li { color: green; } (falta el punt i coma)|li { color: green; } (falta el punto y coma)" },
          { q: "body { background-color: pink;|body { background-color: pink;", sol: "body { background-color: pink; } (falta la clau de tancar)|body { background-color: pink; } (falta la llave de cerrar)" },
          { q: "h2 ( color: purple; )|h2 ( color: purple; )", sol: "h2 { color: purple; } (claus, no parèntesis)|h2 { color: purple; } (llaves, no paréntesis)" }
        ] }
    ]
  },

  /* ===== w4-2 · Colors ===== */
  'w4-2': {
    obj: [
      "L'alumne/a distingeix color (lletres) de background-color (fons) i els aplica a diferents elements.|El alumno/a distingue color (letras) de background-color (fondo) y los aplica a distintos elementos.",
      "L'alumne/a escriu colors amb nom en anglès, en hexadecimal i amb rgb, i explica què volen dir els números.|El alumno/a escribe colores con nombre en inglés, en hexadecimal y con rgb, y explica qué significan los números.",
      "L'alumne/a valora si una combinació de colors té prou contrast per llegir-se bé.|El alumno/a valora si una combinación de colores tiene suficiente contraste para leerse bien.",
      "L'alumne/a tria una paleta de 3 o 4 colors i l'aplica a una pàgina amb coherència.|El alumno/a elige una paleta de 3 o 4 colores y la aplica a una página con coherencia."
    ],
    comp: [
      "Competència digital (CD2): crear contingut digital amb criteris de disseny i accessibilitat|Competencia digital (CD2): crear contenido digital con criterios de diseño y accesibilidad",
      "Matemàtiques: sistemes de numeració (hexadecimal) i rangs de 0 a 255|Matemáticas: sistemas de numeración (hexadecimal) y rangos de 0 a 255",
      "Ciències: la llum i la barreja additiva de colors|Ciencias: la luz y la mezcla aditiva de colores",
      "Educació en valors: dissenyar perquè tothom pugui llegir|Educación en valores: diseñar para que todo el mundo pueda leer"
    ],
    vocab: [
      ["background-color|background-color", "Propietat que pinta el fons de la caixa d'un element.|Propiedad que pinta el fondo de la caja de un elemento."],
      ["Hexadecimal|Hexadecimal", "Codi de color amb un coixinet i sis xifres: dues per al vermell, dues per al verd i dues per al blau.|Código de color con una almohadilla y seis cifras: dos para el rojo, dos para el verde y dos para el azul."],
      ["rgb|rgb", "Color escrit com a barreja de llum vermella, verda i blava, de 0 a 255 cadascuna.|Color escrito como mezcla de luz roja, verde y azul, de 0 a 255 cada una."],
      ["Contrast|Contraste", "La diferència entre el color del text i el del fons; com més gran, millor es llegeix.|La diferencia entre el color del texto y el del fondo; cuanto mayor, mejor se lee."],
      ["Paleta|Paleta", "El grup de 3 o 4 colors que fa servir una web.|El grupo de 3 o 4 colores que usa una web."],
      ["Herència|Herencia", "Quan un element agafa el color del seu contenidor si no en té un de propi.|Cuando un elemento coge el color de su contenedor si no tiene uno propio."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Colors»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Colores»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Papers de colors (blanc, groc, negre, blau) i retoladors de diversos colors per grup|Papeles de colores (blanco, amarillo, negro, azul) y rotuladores de varios colores por grupo"
      ],
      imprimir: ["Cartes de color|Cartas de color", "Fitxa: llegeix l'hexadecimal|Ficha: lee el hexadecimal"],
      prep: [
        "Preparar, per a cada grup, quatre papers de colors i quatre retoladors per a la prova dels 3 metres.|Preparar, para cada grupo, cuatro papeles de colores y cuatro rotuladores para la prueba de los 3 metros.",
        "Imprimir les cartes de color (un paquet per grup) i la fitxa d'hexadecimal (una per alumne/a).|Imprimir las cartas de color (un paquete por grupo) y la ficha de hexadecimal (una por alumno/a).",
        "Marcar a terra una línia a uns tres metres de la paret on penjareu els papers.|Marcar en el suelo una línea a unos tres metros de la pared donde colgaréis los papeles."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: els colors diuen coses|Bienvenida: los colores dicen cosas", fase: 'inici',
        fa: "Pregunta per què els semàfors, les senyals o les samarretes d'un equip fan servir uns colors concrets. Recull idees i fes el repàs de la sessió anterior amb la diapositiva de repàs.|Pregunta por qué los semáforos, las señales o las camisetas de un equipo usan unos colores concretos. Recoge ideas y haz el repaso de la sesión anterior con la diapositiva de repaso.",
        diu: ["Per què creieu que el senyal de stop és vermell i no groc clar?|¿Por qué creéis que la señal de stop es roja y no amarillo claro?",
          "Quina part de h2 { color: teal; } és el selector?|¿Qué parte de h2 { color: teal; } es el selector?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Escriure colors|Escribir colores", fase: 'teoria',
        fa: "Mostra la diferència entre color i background-color. Passa pels noms en anglès i després explica l'hexadecimal com tres parelles de llum que van de 00 a FF. Amb rgb, fes que la classe endevini quin color surt abans de mostrar-lo. Acaba amb contrast i paleta: pregunta quina de les dues frases es llegeix millor.|Muestra la diferencia entre color y background-color. Pasa por los nombres en inglés y después explica el hexadecimal como tres parejas de luz que van de 00 a FF. Con rgb, haz que la clase adivine qué color sale antes de mostrarlo. Termina con contraste y paleta: pregunta cuál de las dos frases se lee mejor.",
        diu: ["Les dues primeres xifres són el vermell, les del mig el verd i les últimes el blau.|Las dos primeras cifras son el rojo, las del medio el verde y las últimas el azul.",
          "Si barregem tota la llum vermella i tota la verda, què surt? Groc!|Si mezclamos toda la luz roja y toda la verde, ¿qué sale? ¡Amarillo!",
          "Una web no és una caixa de llapis: amb tres o quatre colors n'hi ha prou.|Una web no es una caja de lápices: con tres o cuatro colores es suficiente."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "La prova dels 3 metres|La prueba de los 3 metros", fase: 'desconnectat',
        fa: "Cada grup escriu la mateixa paraula amb retoladors diferents sobre papers de colors. Pengeu-los a la paret i, des de la línia de tres metres, ordeneu-los del que es llegeix millor al que es llegeix pitjor. Després, cada grup tria una paleta de quatre colors amb les cartes i n'escriu el nom en anglès.|Cada grupo escribe la misma palabra con rotuladores diferentes sobre papeles de colores. Colgadlos en la pared y, desde la línea de tres metros, ordenadlos de lo que se lee mejor a lo que se lee peor. Después, cada grupo elige una paleta de cuatro colores con las cartas y escribe su nombre en inglés.",
        diu: ["Quines parelles guanyen? Què tenen en comú?|¿Qué parejas ganan? ¿Qué tienen en común?",
          "Un color fosc i un de clar: això és el contrast.|Un color oscuro y uno claro: eso es el contraste.",
          "La vostra paleta té un fons, un text, un principal i un accent?|¿Vuestra paleta tiene un fondo, un texto, uno principal y un acento?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4|Grupos de 3 o 4" },
      { min: 13, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al laboratori de llum, anima'ls a provar les barreges de la llista i a inventar-ne de noves. Fixa't en qui no troba l'error dels cinc dígits: que compti les xifres amb el dit.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el laboratorio de luz, anímalos a probar las mezclas de la lista y a inventar otras nuevas. Fíjate en quién no encuentra el error de los cinco dígitos: que cuente las cifras con el dedo.",
        diu: ["Quantes xifres té un color hexadecimal? Compta-les.|¿Cuántas cifras tiene un color hexadecimal? Cuéntalas.",
          "Al laboratori, què passa si poses els tres números a 128?|En el laboratorio, ¿qué pasa si pones los tres números a 128?"],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: les històries, les set targetes, «La prova dels 3 metres» (ja feta), les dues preguntes de «Prova», els dos errors i el laboratori de llum.|De «La misión» hasta «Investiga»: las historias, las siete tarjetas, «La prueba de los 3 metros» (ya hecha), las dos preguntas de «Prueba», los dos errores y el laboratorio de luz.", org: "Individual|Individual" },
      { min: 12, t: "Pausa activa i reptes|Pausa activa y retos", fase: 'ordinador',
        fa: "Feu la pausa de la barreja de llum amb el cos. Després resol amb la classe el repte dels colors que no es llegeixen, projectat. Deixa'ls fer els cinc reptes. Qui acabi, el mode nit.|Haced la pausa de la mezcla de luz con el cuerpo. Después resuelve con la clase el reto de los colores que no se leen, proyectado. Deja que hagan los cinco retos. Quien acabe, el modo noche.",
        diu: ["El repte diu fosc: quins colors foscos coneixes en anglès?|El reto dice oscuro: ¿qué colores oscuros conoces en inglés?",
          "Copia el codi hexadecimal amb el coixinet davant.|Copia el código hexadecimal con la almohadilla delante.",
          "Per fer groc amb rgb, quanta llum de cada color necessites?|Para hacer amarillo con rgb, ¿cuánta luz de cada color necesitas?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els reptes: el títol blanc sobre blanc, els colors hexadecimals, el groc amb rgb, la pàgina que no es llegeix i la paleta des de zero. Extra: el mode nit.|«Pausa activa» y los retos: el título blanco sobre blanco, los colores hexadecimales, el amarillo con rgb, la página que no se lee y la paleta desde cero. Extra: el modo noche.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el cartell del meu lloc preferit|Crea: el cartel de mi lugar preferido", fase: 'crea',
        fa: "Cada alumne/a fa el cartell d'un lloc que li agradi amb una paleta pròpia apuntada en un comentari. Recorda que l'app comprova el contrast entre el text i el fons.|Cada alumno/a hace el cartel de un lugar que le guste con una paleta propia apuntada en un comentario. Recuerda que la app comprueba el contraste entre el texto y el fondo.",
        diu: ["Comença per la paleta: escriu-la al comentari i després fes-la servir.|Empieza por la paleta: escríbela en el comentario y después úsala.",
          "Fes la prova dels tres metres amb la pantalla: es llegeix?|Haz la prueba de los tres metros con la pantalla: ¿se lee?"],
        slides: ['s15'], app: "Pas «Crea»: El cartell del meu lloc preferit.|Paso «Crea»: El cartel de mi lugar preferido.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals de l'app i fes el tiquet a la porta.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales de la app y haz el ticket en la puerta.",
        diu: ["Quin color és el coixinet FFFFFF?|¿Qué color es almohadilla FFFFFF?",
          "Què ha de tenir un text perquè es llegeixi bé?|¿Qué tiene que tener un texto para que se lea bien?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir color quan vol pintar el fons (o al revés).|Usa color cuando quiere pintar el fondo (o al revés).",
        "Pregunta-li: vols canviar les lletres o el que hi ha darrere? background vol dir fons.|Pregúntale: ¿quieres cambiar las letras o lo que hay detrás? background significa fondo."],
      ["Escriu codis hexadecimals sense coixinet o amb cinc xifres.|Escribe códigos hexadecimales sin almohadilla o con cinco cifras.",
        "Que compti tres parelles amb el dit: vermell, verd, blau. Sempre sis xifres i el coixinet davant.|Que cuente tres parejas con el dedo: rojo, verde, azul. Siempre seis cifras y la almohadilla delante."],
      ["Pensa que vermell i verd fan marró, com amb la pintura.|Piensa que rojo y verde dan marrón, como con la pintura.",
        "Recorda-li que la pantalla barreja llum, no pintura. Que ho comprovi al laboratori de llum.|Recuérdale que la pantalla mezcla luz, no pintura. Que lo compruebe en el laboratorio de luz."],
      ["Tria colors preciosos però sense contrast (groc sobre blanc).|Elige colores preciosos pero sin contraste (amarillo sobre blanco).",
        "Fes-li fer la prova de la distància amb la pantalla. Proposa-li mantenir el color i canviar-ne la foscor.|Hazle hacer la prueba de la distancia con la pantalla. Propónle mantener el color y cambiar su oscuridad."],
      ["Fa servir deu colors diferents a la mateixa pàgina.|Usa diez colores diferentes en la misma página.",
        "Demana-li que escrigui la paleta al comentari i que només pugui fer servir aquells colors.|Pídele que escriba la paleta en el comentario y que solo pueda usar esos colores."]
    ],
    diff: {
      mes: "Fer el mode nit i, després, buscar una combinació de colors amb el mateix to però diferent foscor. Provar colors amb tres xifres hexadecimals i explicar com s'amplien a sis.|Hacer el modo noche y, después, buscar una combinación de colores con el mismo tono pero distinta oscuridad. Probar colores con tres cifras hexadecimales y explicar cómo se amplían a seis.",
      menys: "Treballar només amb noms de colors en anglès, amb les cartes de color a la taula com a diccionari. Al repte de rgb, tenir escrites les barreges bàsiques.|Trabajar solo con nombres de colores en inglés, con las cartas de color en la mesa como diccionario. En el reto de rgb, tener escritas las mezclas básicas."
    },
    aval: {
      ticket: ["Quin color és el coixinet FFFFFF? I el 000000?|¿Qué color es almohadilla FFFFFF? ¿Y el 000000?",
        "Digues una parella de colors que es llegeixi bé i una que no.|Di una pareja de colores que se lea bien y una que no."],
      rubric: [
        ["Text i fons|Texto y fondo", "Fa servir color i background-color al lloc correcte sense dubtar.|Usa color y background-color en el lugar correcto sin dudar.", "De vegades confon quina propietat pinta el fons.|A veces confunde qué propiedad pinta el fondo."],
        ["Formats de color|Formatos de color", "Escriu colors amb nom, hexadecimal i rgb, i explica què vol dir cada número.|Escribe colores con nombre, hexadecimal y rgb, y explica qué significa cada número.", "Fa servir noms en anglès però copia els codis sense entendre'ls.|Usa nombres en inglés pero copia los códigos sin entenderlos."],
        ["Contrast i paleta|Contraste y paleta", "Tria una paleta de 3 o 4 colors coherent i amb bon contrast.|Elige una paleta de 3 o 4 colores coherente y con buen contraste.", "Tria colors que li agraden però cal ajudar-lo amb el contrast.|Elige colores que le gustan pero hay que ayudarle con el contraste."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer la prova dels 3 metres amb paper i retoladors: quins colors es llegeixen millor de lluny?|En casa, con el móvil, podéis repetir la sesión y hacer la prueba de los 3 metros con papel y rotuladores: ¿qué colores se leen mejor de lejos?",
    slides: [
      { id: 's1', k: 'portada', t: "Colors|Colores", x: "Avui aprenem a escriure qualsevol color i a triar-ne pocs que combinin.|Hoy aprendemos a escribir cualquier color y a elegir pocos que combinen.",
        nota: "Objectiu: al final, cada alumne/a tindrà un cartell amb una paleta pròpia i bon contrast.|Objetivo: al final, cada alumno/a tendrá un cartel con una paleta propia y buen contraste." },
      { id: 's2', k: 'pregunta', t: "Els colors diuen coses|Los colores dicen cosas", punts: ["El semàfor|El semáforo", "La samarreta del teu equip|La camiseta de tu equipo", "El logo d'una botiga|El logo de una tienda"],
        nota: "Recull respostes: els colors avisen, identifiquen i fan que les coses es vegin de lluny.|Recoge respuestas: los colores avisan, identifican y hacen que las cosas se vean de lejos." },
      { id: 's3', k: 'repas', t: "Recordem la regla|Recordemos la regla", x: "Quin és el selector? I la propietat? I el valor?|¿Cuál es el selector? ¿Y la propiedad? ¿Y el valor?",
        code: 'h2 {\n  color: teal;\n}',
        nota: "Pregunta també què passaria si l'index.html no tingués el link.|Pregunta también qué pasaría si el index.html no tuviera el link." },
      { id: 's4', k: 'concepte', t: "Lletres i fons|Letras y fondo", x: "color pinta les lletres; background-color pinta el fons de la caixa.|color pinta las letras; background-color pinta el fondo de la caja.",
        code: 'h1 {\n  color: white;\n  background-color: hotpink;\n}',
        nota: "Fes notar que el fons del h1 arriba d'una punta a l'altra: el títol ocupa tota l'amplada.|Haz notar que el fondo del h1 llega de punta a punta: el título ocupa todo el ancho." },
      { id: 's5', k: 'anim', t: "Colors amb nom|Colores con nombre", anim: 'wcolor', x: "Noms en anglès, hexadecimal o rgb: tres maneres d'escriure el mateix color.|Nombres en inglés, hexadecimal o rgb: tres maneras de escribir el mismo color.",
        nota: "Demana noms de colors en anglès que coneguin. Avisa que els noms són pocs: per tenir-los tots calen números.|Pide nombres de colores en inglés que conozcan. Avisa de que los nombres son pocos: para tenerlos todos hacen falta números." },
      { id: 's6', k: 'concepte', t: "El codi hexadecimal|El código hexadecimal", punts: ["Coixinet i tres parelles: vermell, verd, blau.|Almohadilla y tres parejas: rojo, verde, azul.", "Cada parella va de 00 (gens) a FF (tot).|Cada pareja va de 00 (nada) a FF (todo).", "Es compta 0-9 i després A-F.|Se cuenta 0-9 y después A-F."],
        code: '#FF0000  /* vermell */\n#00FF00  /* verd */\n#0000FF  /* blau */\n#FFFFFF  /* blanc */\n#000000  /* negre */',
        nota: "Pregunta quin color serà el FFFF00 abans de dir-ho: vermell i verd al màxim, groc.|Pregunta qué color será el FFFF00 antes de decirlo: rojo y verde al máximo, amarillo." },
      { id: 's7', k: 'concepte', t: "Barrejar llum amb rgb|Mezclar luz con rgb", x: "Tres números de 0 a 255: vermell, verd i blau. És llum, no pintura.|Tres números de 0 a 255: rojo, verde y azul. Es luz, no pintura.",
        code: 'p {\n  color: rgb(255, 255, 0);\n}\nh2 {\n  color: rgb(0, 180, 255);\n}',
        nota: "Fes que endevinin el color abans de mostrar el resultat. Molts esperaran marró pel vermell i el verd: és un bon moment per parlar de la llum.|Haz que adivinen el color antes de mostrar el resultado. Muchos esperarán marrón por el rojo y el verde: es un buen momento para hablar de la luz." },
      { id: 's8', k: 'concepte', t: "Contrast: que es llegeixi|Contraste: que se lea", punts: ["Fosc sobre clar, o clar sobre fosc.|Oscuro sobre claro, o claro sobre oscuro.", "Groc sobre blanc: costa de llegir.|Amarillo sobre blanco: cuesta de leer.", "Hi ha persones que veuen menys bé els colors.|Hay personas que ven peor los colores."],
        code: 'h2 {\n  color: yellow;\n  background-color: white;\n}\np {\n  color: navy;\n  background-color: lightyellow;\n}',
        nota: "Pregunta quina de les dues frases es llegeix millor des del fons de l'aula.|Pregunta cuál de las dos frases se lee mejor desde el fondo del aula." },
      { id: 's9', k: 'concepte', t: "Una paleta de 4 colors|Una paleta de 4 colores", punts: ["Un fons clar|Un fondo claro", "Un text fosc|Un texto oscuro", "Un principal per als títols|Uno principal para los títulos", "Un accent per destacar|Un acento para destacar"],
        code: '/* Paleta: #FFF8E7 #333333 #2A6F97 #E07A5F */\nbody {\n  background-color: #FFF8E7;\n  color: #333333;\n}\nh1 {\n  color: #2A6F97;\n}',
        nota: "Remarca la idea d'apuntar la paleta en un comentari i explica que els paràgrafs hereten el color del body.|Remarca la idea de apuntar la paleta en un comentario y explica que los párrafos heredan el color del body." },
      { id: 's10', k: 'activitat', t: "La prova dels 3 metres|La prueba de los 3 metros", timer: 10, punts: ["Escriviu la mateixa paraula amb colors diferents.|Escribid la misma palabra con colores diferentes.", "Pengeu-les i mireu-les des de la línia.|Colgadlas y miradlas desde la línea.", "Ordeneu-les de la més clara a la més difícil.|Ordenadlas de la más clara a la más difícil."],
        nota: "Deixa que discuteixin l'ordre. Quan acabin, pregunta què tenen en comú les guanyadores.|Deja que discutan el orden. Cuando acaben, pregunta qué tienen en común las ganadoras." },
      { id: 's11', k: 'activitat', t: "Tria la paleta del grup|Elige la paleta del grupo", punts: ["Quatre cartes de color: fons, text, principal i accent.|Cuatro cartas de color: fondo, texto, principal y acento.", "Escriviu el nom en anglès o el codi.|Escribid el nombre en inglés o el código.", "Comproveu el contrast entre text i fons.|Comprobad el contraste entre texto y fondo."],
        nota: "Guardeu les paletes: poden servir per al pòster de la sessió 4.|Guardad las paletas: pueden servir para el póster de la sesión 4." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre la sessió «Colors».|Abre la sesión «Colores».", "Fes «Descobreix», «Prova» i «Investiga».|Haz «Descubre», «Prueba» e «Investiga».", "Al laboratori de llum, inventa barreges.|En el laboratorio de luz, inventa mezclas.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas de l'activitat en paper, que marquin que ja l'han feta a classe.|En el paso de la actividad en papel, que marquen que ya la han hecho en clase." },
      { id: 's13', k: 'repte', t: "Arreglem-ho junts|Arreglémoslo juntos", x: "Dos problemes: colors en català i colors que no es llegeixen.|Dos problemas: colores en catalán y colores que no se leen.",
        code: 'body {\n  background-color: blanc;\n}\nh1 {\n  color: groc;\n}\np {\n  color: lightgray;\n}',
        nota: "És el repte 4 de l'app. Primer traduïu els noms; després pregunta quins colors foscos proposarien per al títol i el text.|Es el reto 4 de la app. Primero traducid los nombres; después pregunta qué colores oscuros propondrían para el título y el texto." },
      { id: 's14', k: 'repte', t: "Reptes de color|Retos de color", timer: 12, punts: ["1. El títol blanc sobre blanc|1. El título blanco sobre blanco", "2. Colors hexadecimals|2. Colores hexadecimales", "3. Groc i blanc amb rgb|3. Amarillo y blanco con rgb", "4. La pàgina que no es llegeix|4. La página que no se lee", "5. La teva paleta des de zero|5. Tu paleta desde cero"],
        nota: "Al repte 3, si algú s'encalla, pregunta: quines llums encens per fer groc?|En el reto 3, si alguien se atasca, pregunta: ¿qué luces enciendes para hacer amarillo?" },
      { id: 's15', k: 'activitat', t: "Crea: el cartell del meu lloc preferit|Crea: el cartel de mi lugar preferido", timer: 5, x: "Paleta pròpia en un comentari, almenys un color hexadecimal i bon contrast.|Paleta propia en un comentario, al menos un color hexadecimal y buen contraste.",
        nota: "Si no hi ha temps, que ho desin: el poden acabar a casa amb el mòbil.|Si no hay tiempo, que lo guarden: lo pueden acabar en casa con el móvil." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["color: lletres. background-color: fons.|color: letras. background-color: fondo.", "Nom en anglès, hexadecimal o rgb.|Nombre en inglés, hexadecimal o rgb.", "Paleta de 3 o 4 colors amb bon contrast.|Paleta de 3 o 4 colores con buen contraste."],
        nota: "Torna a la pregunta inicial: els colors diuen coses, i ara sabeu triar-los perquè es llegeixin.|Vuelve a la pregunta inicial: los colores dicen cosas, y ahora sabéis elegirlos para que se lean." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quin color és el coixinet FFFFFF? I el 000000?|¿Qué color es almohadilla FFFFFF? ¿Y el 000000?", "Una parella que es llegeix bé i una que no.|Una pareja que se lee bien y una que no."],
        nota: "Anota qui encara confon color i background-color per repassar-ho a l'inici de la sessió 3.|Anota quién todavía confunde color y background-color para repasarlo al inicio de la sesión 3." }
    ],
    print: [
      { id: 'p1', t: "Cartes de color|Cartas de color", k: 'targetes',
        intro: "Un paquet per grup. Cada carta té el nom en anglès i el codi hexadecimal. Si podeu, pinteu-ne un quadradet amb el color.|Un paquete por grupo. Cada carta tiene el nombre en inglés y el código hexadecimal. Si podéis, pintad un cuadradito con el color.",
        items: [
          { t: "white · #FFFFFF|white · #FFFFFF", n: 1 }, { t: "black · #000000|black · #000000", n: 1 }, { t: "red · #FF0000|red · #FF0000", n: 1 },
          { t: "navy · #000080|navy · #000080", n: 1 }, { t: "gold · #FFD700|gold · #FFD700", n: 1 }, { t: "tomato · #FF6347|tomato · #FF6347", n: 1 },
          { t: "teal · #008080|teal · #008080", n: 1 }, { t: "lightyellow · #FFFFE0|lightyellow · #FFFFE0", n: 1 }, { t: "lavender · #E6E6FA|lavender · #E6E6FA", n: 1 },
          { t: "darkgreen · #006400|darkgreen · #006400", n: 1 }, { t: "hotpink · #FF69B4|hotpink · #FF69B4", n: 1 }, { t: "skyblue · #87CEEB|skyblue · #87CEEB", n: 1 }
        ] },
      { id: 'p2', t: "Fitxa: llegeix l'hexadecimal|Ficha: lee el hexadecimal", k: 'fitxa',
        intro: "Recorda: coixinet i tres parelles (vermell, verd, blau). 00 és gens de llum i FF és tota la llum. Escriu quin color és o com s'escriu.|Recuerda: almohadilla y tres parejas (rojo, verde, azul). 00 es nada de luz y FF es toda la luz. Escribe qué color es o cómo se escribe.",
        items: [
          { q: "Quin color és #00FF00?|¿Qué color es #00FF00?", sol: "Verd: només la llum verda al màxim.|Verde: solo la luz verde al máximo." },
          { q: "Quin color és #FFFF00?|¿Qué color es #FFFF00?", sol: "Groc: vermell i verd al màxim, sense blau.|Amarillo: rojo y verde al máximo, sin azul." },
          { q: "Escriu el blanc en hexadecimal i amb rgb.|Escribe el blanco en hexadecimal y con rgb.", sol: "#FFFFFF i rgb(255, 255, 255).|#FFFFFF y rgb(255, 255, 255)." },
          { q: "Escriu el blau pur amb rgb.|Escribe el azul puro con rgb.", sol: "rgb(0, 0, 255)|rgb(0, 0, 255)" },
          { q: "Què li passa a #12345?|¿Qué le pasa a #12345?", sol: "Només té cinc xifres; n'hi calen sis.|Solo tiene cinco cifras; hacen falta seis." },
          { q: "Quin color creus que és #808080? Per què?|¿Qué color crees que es #808080? ¿Por qué?", sol: "Gris: les tres llums a mitja potència i iguals.|Gris: las tres luces a media potencia e iguales." }
        ] }
    ]
  },

  /* ===== w4-3 · Tipus de lletra ===== */
  'w4-3': {
    obj: [
      "L'alumne/a distingeix les famílies serif, sans-serif i monospace i escriu una llista de lletres amb recanvi.|El alumno/a distingue las familias serif, sans-serif y monospace y escribe una lista de letras con recambio.",
      "L'alumne/a ajusta la mida (px i em), el gruix, la cursiva, l'alineació i l'espaiat del text.|El alumno/a ajusta el tamaño (px y em), el grosor, la cursiva, la alineación y el espaciado del texto.",
      "L'alumne/a crea una classe al CSS i l'aplica a diversos elements de l'HTML.|El alumno/a crea una clase en el CSS y la aplica a varios elementos del HTML.",
      "L'alumne/a tria una tipografia d'acord amb el contingut i pensant en la lectura al mòbil.|El alumno/a elige una tipografía de acuerdo con el contenido y pensando en la lectura en el móvil."
    ],
    comp: [
      "Competència digital (CD2): crear contingut digital amb criteris tipogràfics|Competencia digital (CD2): crear contenido digital con criterios tipográficos",
      "Pensament computacional: reutilitzar estils amb classes|Pensamiento computacional: reutilizar estilos con clases",
      "Llengua: la forma del text també comunica (to, jerarquia, llegibilitat)|Lengua: la forma del texto también comunica (tono, jerarquía, legibilidad)",
      "Matemàtiques: proporcions i múltiples (em com a vegades la mida del pare)|Matemáticas: proporciones y múltiplos (em como veces el tamaño del padre)"
    ],
    vocab: [
      ["Tipografia|Tipografía", "El disseny de les lletres d'un text.|El diseño de las letras de un texto."],
      ["Serif i sans-serif|Serif y sans-serif", "Lletres amb remats als peus, i lletres sense remats.|Letras con remates en los pies, y letras sin remates."],
      ["Monospace|Monospace", "Família on totes les lletres fan la mateixa amplada.|Familia donde todas las letras tienen la misma anchura."],
      ["em|em", "Unitat que vol dir vegades la mida de la lletra del pare.|Unidad que significa veces el tamaño de la letra del padre."],
      ["Interlineat|Interlineado", "L'espai entre línies de text (line-height).|El espacio entre líneas de texto (line-height)."],
      ["Classe|Clase", "Un nom que posem a uns elements de l'HTML per donar-los un estil propi des del CSS, amb un punt davant.|Un nombre que ponemos a unos elementos del HTML para darles un estilo propio desde el CSS, con un punto delante."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Tipus de lletra»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Tipos de letra»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Revistes, fullets, envasos o tiquets vells per retallar, tisores i pegament per grup|Revistas, folletos, envases o tiques viejos para recortar, tijeras y pegamento por grupo"
      ],
      imprimir: ["Fitxa: caçadors de lletres|Ficha: cazadores de letras", "Targetes de propietats de text|Tarjetas de propiedades de texto"],
      prep: [
        "Recollir material imprès amb lletres variades (n'hi ha prou amb publicitat, envasos i tiquets).|Recoger material impreso con letras variadas (basta con publicidad, envases y tiques).",
        "Imprimir la fitxa de caçadors de lletres (una per grup) i un paquet de targetes de propietats per grup.|Imprimir la ficha de cazadores de letras (una por grupo) y un paquete de tarjetas de propiedades por grupo.",
        "Provar a l'app el repte de la cita (blockquote) per conèixer-ne la solució.|Probar en la app el reto de la cita (blockquote) para conocer su solución."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: la veu de les lletres|Bienvenida: la voz de las letras", fase: 'inici',
        fa: "Projecta la mateixa frase amb tres lletres diferents i pregunta quina faria servir un conte de por, un diari i un videojoc. Fes el repàs de colors amb la diapositiva.|Proyecta la misma frase con tres letras diferentes y pregunta cuál usaría un cuento de miedo, un periódico y un videojuego. Haz el repaso de colores con la diapositiva.",
        diu: ["El text és el mateix. Per què sembla que digui coses diferents?|El texto es el mismo. ¿Por qué parece que diga cosas diferentes?",
          "Quin color és el coixinet FF0000? I quin no entén el navegador?|¿Qué color es almohadilla FF0000? ¿Y cuál no entiende el navegador?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Famílies, mides i classes|Familias, tamaños y clases", fase: 'teoria',
        fa: "Presenta les tres famílies i la llista de recanvi de font-family. Explica px i em amb el càlcul a la pissarra. Mostra el gruix amb números i l'espaiat amb el poema. Per acabar, introdueix les classes: fes que la classe digui quins paràgrafs es pintaran abans de mostrar el resultat.|Presenta las tres familias y la lista de recambio de font-family. Explica px y em con el cálculo en la pizarra. Muestra el grosor con números y el espaciado con el poema. Para terminar, introduce las clases: haz que la clase diga qué párrafos se pintarán antes de mostrar el resultado.",
        diu: ["Si l'ordinador no té Georgia, quina lletra farà servir?|Si el ordenador no tiene Georgia, ¿qué letra usará?",
          "Un paràgraf de 18px amb una negreta d'1.5em: quants píxels fa la negreta?|Un párrafo de 18px con una negrita de 1.5em: ¿cuántos píxeles mide la negrita?",
          "A l'HTML, la classe va sense punt; al CSS, amb punt.|En el HTML, la clase va sin punto; en el CSS, con punto."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9', 's10'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Caçadors de lletres|Cazadores de letras", fase: 'desconnectat',
        fa: "En grups, busquen i retallen lletres del material imprès i les classifiquen en serif, sans-serif i monospace a la fitxa. Després, amb les targetes de propietats, descriuen el títol d'un dels retalls: família, mida aproximada, gruix i alineació.|En grupos, buscan y recortan letras del material impreso y las clasifican en serif, sans-serif y monospace en la ficha. Después, con las tarjetas de propiedades, describen el título de uno de los recortes: familia, tamaño aproximado, grosor y alineación.",
        diu: ["Mireu els peus de la lletra: tenen remats?|Mirad los pies de la letra: ¿tienen remates?",
          "Els tiquets de la compra fan servir una lletra on totes ocupen el mateix: quina família és?|Los tiques de la compra usan una letra donde todas ocupan lo mismo: ¿qué familia es?",
          "Quines targetes necessiteu per descriure aquest títol?|¿Qué tarjetas necesitáis para describir este título?"],
        slides: ['s11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4|Grupos de 3 o 4" },
      { min: 13, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. A la pregunta de la classe destacat, demana que expliquin per què només un paràgraf canvia. Al laboratori de lletres, que provin almenys tres famílies i diguin quina es llegeix millor.|Cada alumno/a avanza hasta la pausa activa. En la pregunta de la clase destacat, pide que expliquen por qué solo un párrafo cambia. En el laboratorio de letras, que prueben al menos tres familias y digan cuál se lee mejor.",
        diu: ["Per què només canvia el dimarts?|¿Por qué solo cambia el martes?",
          "Quina família fa que el poema es llegeixi millor? Per què?|¿Qué familia hace que el poema se lea mejor? ¿Por qué?"],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: les històries, les set targetes, «Caçadors de lletres» (ja fet), les dues preguntes de «Prova», els dos errors i el laboratori de lletres.|De «La misión» hasta «Investiga»: las historias, las siete tarjetas, «Cazadores de letras» (ya hecho), las dos preguntas de «Prueba», los dos errores y el laboratorio de letras.", org: "Individual|Individual" },
      { min: 12, t: "Pausa activa i reptes|Pausa activa y retos", fase: 'ordinador',
        fa: "Feu la pausa de les lletres amb el cos. Després resol amb la classe el repte dels quatre errors de tipografia, projectat. Deixa'ls fer els cinc reptes; qui acabi, el repte extra de les dues classes.|Haced la pausa de las letras con el cuerpo. Después resuelve con la clase el reto de los cuatro errores de tipografía, proyectado. Deja que hagan los cinco retos; quien acabe, el reto extra de las dos clases.",
        diu: ["Al CSS s'escriu center, a l'americana.|En el CSS se escribe center, a la americana.",
          "Has posat la classe a l'HTML i la regla amb punt al CSS? Calen totes dues coses.|¿Has puesto la clase en el HTML y la regla con punto en el CSS? Hacen falta las dos cosas.",
          "line-height va sense unitat: 1.6 vol dir una vegada i mitja i una mica més.|line-height va sin unidad: 1.6 significa una vez y media y un poco más."],
        slides: ['s13', 's14'], app: "«Pausa activa» i els reptes: serif i sans-serif, les mides, els quatre errors, la classe destacat i la cita amb blockquote. Extra: dues classes al mateix element.|«Pausa activa» y los retos: serif y sans-serif, los tamaños, los cuatro errores, la clase destacat y la cita con blockquote. Extra: dos clases en el mismo elemento.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la fitxa del meu preferit|Crea: la ficha de mi preferido", fase: 'crea',
        fa: "Cada alumne/a fa la fitxa del seu llibre, pel·lícula o sèrie preferida i tria una tipografia que encaixi amb la història. Ha de fer servir una classe en dos elements com a mínim.|Cada alumno/a hace la ficha de su libro, película o serie preferida y elige una tipografía que encaje con la historia. Tiene que usar una clase en dos elementos como mínimo.",
        diu: ["Quina lletra encaixa amb una història de misteri? I amb una d'humor?|¿Qué letra encaja con una historia de misterio? ¿Y con una de humor?",
          "Què vols destacar amb la teva classe?|¿Qué quieres destacar con tu clase?"],
        slides: ['s15'], app: "Pas «Crea»: La fitxa del meu llibre preferit.|Paso «Crea»: La ficha de mi libro preferido.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals i fes el tiquet a la porta.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Per què acabem font-family amb sans-serif o serif?|¿Por qué acabamos font-family con sans-serif o serif?",
          "Com s'escriu al CSS la classe menu?|¿Cómo se escribe en el CSS la clase menu?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu la classe amb punt a l'HTML (class igual a .destacat).|Escribe la clase con punto en el HTML (class igual a .destacat).",
        "Recorda-li la frase de la sessió: a l'HTML sense punt, al CSS amb punt. Que ho comprovi amb el pas de l'error.|Recuérdale la frase de la sesión: en el HTML sin punto, en el CSS con punto. Que lo compruebe con el paso del error."],
      ["Oblida el punt al CSS i escriu destacat sol.|Olvida el punto en el CSS y escribe destacat solo.",
        "L'editor li avisa. Pregunta-li: sense punt, el navegador busca una etiqueta o una classe?|El editor le avisa. Pregúntale: sin punto, ¿el navegador busca una etiqueta o una clase?"],
      ["Escriu les mides sense unitat o amb espai (40, 40 px).|Escribe los tamaños sin unidad o con espacio (40, 40 px).",
        "Que llegeixi l'avís de l'editor. El número i la unitat van enganxats: 40px.|Que lea el aviso del editor. El número y la unidad van pegados: 40px."],
      ["Fa servir l'anglès britànic (centre, colour).|Usa el inglés británico (centre, colour).",
        "Explica que el CSS es va escriure a l'estil americà. Fes una llista a la pissarra: center, color, gray.|Explica que el CSS se escribió al estilo americano. Haz una lista en la pizarra: center, color, gray."],
      ["Posa cinc famílies diferents a la mateixa pàgina.|Pone cinco familias diferentes en la misma página.",
        "Proposa-li la norma de dues famílies com a màxim: una per als títols i una per al text.|Propónle la norma de dos familias como máximo: una para los títulos y una para el texto."]
    ],
    diff: {
      mes: "Fer el repte extra de les dues classes i investigar què passa amb em quan un element és dins d'un altre que ja té em. Provar text-transform capitalize en un títol.|Hacer el reto extra de las dos clases e investigar qué pasa con em cuando un elemento está dentro de otro que ya tiene em. Probar text-transform capitalize en un título.",
      menys: "Tenir les targetes de propietats a la taula com a recordatori i treballar només amb px. Fer primer els reptes 1, 2 i 4, i el de la cita a casa.|Tener las tarjetas de propiedades en la mesa como recordatorio y trabajar solo con px. Hacer primero los retos 1, 2 y 4, y el de la cita en casa."
    },
    aval: {
      ticket: ["Per què acabem font-family amb una família genèrica?|¿Por qué acabamos font-family con una familia genérica?",
        "Com poses una classe a un paràgraf i com la selecciones al CSS?|¿Cómo pones una clase a un párrafo y cómo la seleccionas en el CSS?"],
      rubric: [
        ["Famílies de lletra|Familias de letra", "Reconeix les tres famílies i escriu llistes amb recanvi.|Reconoce las tres familias y escribe listas con recambio.", "Escriu una sola lletra sense recanvi o confon serif i sans-serif.|Escribe una sola letra sin recambio o confunde serif y sans-serif."],
        ["Mida, gruix i espai|Tamaño, grosor y espacio", "Ajusta mida, gruix, alineació i interlineat per fer el text llegible.|Ajusta tamaño, grosor, alineación e interlineado para hacer el texto legible.", "Canvia la mida, però encara no fa servir l'interlineat o l'alineació.|Cambia el tamaño, pero todavía no usa el interlineado o la alineación."],
        ["Classes|Clases", "Crea una classe i l'aplica a diversos elements sense ajuda.|Crea una clase y la aplica a varios elementos sin ayuda.", "Crea la classe però de vegades oblida el punt al CSS o el posa a l'HTML.|Crea la clase pero a veces olvida el punto en el CSS o lo pone en el HTML."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer de caçadors de lletres amb envasos de la cuina: quantes famílies diferents trobeu?|En casa, con el móvil, podéis repetir la sesión y hacer de cazadores de letras con envases de la cocina: ¿cuántas familias diferentes encontráis?",
    slides: [
      { id: 's1', k: 'portada', t: "Tipus de lletra|Tipos de letra", x: "Avui triem la veu de la pàgina: famílies, mides, gruixos i classes.|Hoy elegimos la voz de la página: familias, tamaños, grosores y clases.",
        nota: "Objectiu: al final, cada alumne/a farà una fitxa amb una tipografia triada amb intenció.|Objetivo: al final, cada alumno/a hará una ficha con una tipografía elegida con intención." },
      { id: 's2', k: 'pregunta', t: "La mateixa frase, tres veus|La misma frase, tres voces", x: "Quina faria servir un conte de por? I un diari? I un videojoc?|¿Cuál usaría un cuento de miedo? ¿Y un periódico? ¿Y un videojuego?",
        code: "h1 { font-family: Georgia, serif; }\nh2 { font-family: Impact, sans-serif; }\nh3 { font-family: 'Courier New', monospace; }",
        nota: "Escriu la mateixa frase a les tres línies (per exemple, Aquesta nit passarà alguna cosa) i deixa que opinin.|Escribe la misma frase en las tres líneas (por ejemplo, Esta noche pasará algo) y deja que opinen." },
      { id: 's3', k: 'repas', t: "Recordem els colors|Recordemos los colores", punts: ["Quin color és el coixinet FF0000?|¿Qué color es almohadilla FF0000?", "Què vol dir rgb(255, 255, 0)?|¿Qué significa rgb(255, 255, 0)?", "Si el body és navy, de quin color són els paràgrafs?|Si el body es navy, ¿de qué color son los párrafos?"],
        nota: "La tercera pregunta prepara la idea d'herència, que també passa amb les lletres.|La tercera pregunta prepara la idea de herencia, que también pasa con las letras." },
      { id: 's4', k: 'anim', t: "Tres famílies|Tres familias", anim: 'wfont', x: "Serif amb remats, sans-serif sense remats, monospace totes iguals d'amples.|Serif con remates, sans-serif sin remates, monospace todas igual de anchas.",
        nota: "Assenyala els remats a la pissarra amb una lletra gran. Pregunta on han vist cada família.|Señala los remates en la pizarra con una letra grande. Pregunta dónde han visto cada familia." },
      { id: 's5', k: 'concepte', t: "font-family: una llista|font-family: una lista", punts: ["El navegador prova la primera.|El navegador prueba la primera.", "Si no la té, passa a la següent.|Si no la tiene, pasa a la siguiente.", "L'última, sempre una genèrica.|La última, siempre una genérica."],
        code: "h1 {\n  font-family: Georgia, serif;\n}\np {\n  font-family: Arial, sans-serif;\n}\ncode {\n  font-family: 'Courier New', monospace;\n}",
        nota: "Remarca les cometes quan el nom té espais. Pregunta què passaria en un mòbil que no té Georgia.|Remarca las comillas cuando el nombre tiene espacios. Pregunta qué pasaría en un móvil que no tiene Georgia." },
      { id: 's6', k: 'concepte', t: "Mida: px i em|Tamaño: px y em", x: "16px és la mida normal. 1.5em vol dir una vegada i mitja la mida del pare.|16px es el tamaño normal. 1.5em significa una vez y media el tamaño del padre.",
        code: 'p {\n  font-size: 18px;\n}\nb {\n  font-size: 1.5em;\n}',
        nota: "Fes el càlcul a la pissarra: 1,5 per 18 són 27 píxels. Recorda que el número i la unitat van junts.|Haz el cálculo en la pizarra: 1,5 por 18 son 27 píxeles. Recuerda que el número y la unidad van juntos." },
      { id: 's7', k: 'concepte', t: "Gruix i cursiva|Grosor y cursiva", punts: ["font-weight: de 100 (prim) a 900 (gruixut).|font-weight: de 100 (fino) a 900 (grueso).", "400 és normal i 700 és bold.|400 es normal y 700 es bold.", "font-style: italic posa cursiva.|font-style: italic pone cursiva."],
        code: 'h1 {\n  font-weight: 300;\n}\np {\n  font-style: italic;\n}\nh3 {\n  font-weight: 900;\n}',
        nota: "Explica que els títols ja són negreta i que amb font-weight normal es pot treure.|Explica que los títulos ya son negrita y que con font-weight normal se puede quitar." },
      { id: 's8', k: 'concepte', t: "Alinear i fer respirar el text|Alinear y hacer respirar el texto", punts: ["text-align: left, center, right, justify.|text-align: left, center, right, justify.", "line-height: espai entre línies (1.4 a 1.8).|line-height: espacio entre líneas (1.4 a 1.8).", "letter-spacing: espai entre lletres.|letter-spacing: espacio entre letras."],
        code: 'h2 {\n  text-align: center;\n  letter-spacing: 6px;\n}\np {\n  line-height: 2;\n}',
        nota: "Pregunta per què un text amb les línies massa juntes cansa, sobretot al mòbil.|Pregunta por qué un texto con las líneas demasiado juntas cansa, sobre todo en el móvil." },
      { id: 's9', k: 'anim', t: "La classe: estil a la carta|La clase: estilo a la carta", anim: 'wclass', x: "Un selector d'etiqueta tria tots els elements; una classe, només els que tu marques.|Un selector de etiqueta elige todos los elementos; una clase, solo los que tú marcas.",
        nota: "Compara-ho amb posar un adhesiu a uns quants alumnes: la norma només val per als que el porten.|Compáralo con poner una pegatina a unos cuantos alumnos: la norma solo vale para los que la llevan." },
      { id: 's10', k: 'concepte', t: "Classe a l'HTML i al CSS|Clase en el HTML y en el CSS", punts: ["HTML: class i el nom, sense punt.|HTML: class y el nombre, sin punto.", "CSS: el nom amb un punt davant.|CSS: el nombre con un punto delante.", "Una classe pot anar a molts elements.|Una clase puede ir a muchos elementos."],
        code: '<p class="destacat">Important!</p>\n\n.destacat {\n  color: crimson;\n  font-weight: bold;\n}',
        nota: "Pregunta quins paràgrafs es pintaran abans de mostrar el resultat a l'app.|Pregunta qué párrafos se pintarán antes de mostrar el resultado en la app." },
      { id: 's11', k: 'activitat', t: "Caçadors de lletres|Cazadores de letras", timer: 10, punts: ["Busqueu i retalleu lletres dels papers.|Buscad y recortad letras de los papeles.", "Classifiqueu-les: serif, sans-serif, monospace.|Clasificadlas: serif, sans-serif, monospace.", "Descriviu un títol amb les targetes de propietats.|Describid un título con las tarjetas de propiedades."],
        nota: "Passa pels grups i demana que justifiquin cada classificació mirant els peus de les lletres.|Pasa por los grupos y pide que justifiquen cada clasificación mirando los pies de las letras." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre la sessió «Tipus de lletra».|Abre la sesión «Tipos de letra».", "Fes «Descobreix», «Prova» i «Investiga».|Haz «Descubre», «Prueba» e «Investiga».", "Al laboratori, prova tres famílies.|En el laboratorio, prueba tres familias.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas de l'activitat en paper, que marquin que ja l'han feta a classe.|En el paso de la actividad en papel, que marquen que ya la han hecho en clase." },
      { id: 's13', k: 'repte', t: "Arreglem-ho junts|Arreglémoslo juntos", x: "Quatre errors de tipografia: qui els troba?|Cuatro errores de tipografía: ¿quién los encuentra?",
        code: "h1 {\n  font-family: 'Trebuchet MS', sans-serif;\n  font-size: 40;\n  text-align: centre;\n}\np {\n  line-height 1.6;\n  font-wieght: bold;\n}",
        nota: "És el repte 3 de l'app. Errors: falta px, centre en lloc de center, falten els dos punts i weight mal escrit.|Es el reto 3 de la app. Errores: falta px, centre en lugar de center, faltan los dos puntos y weight mal escrito." },
      { id: 's14', k: 'repte', t: "Reptes de lletres|Retos de letras", timer: 12, punts: ["1. Serif i sans-serif|1. Serif y sans-serif", "2. Les mides|2. Los tamaños", "3. Quatre errors|3. Cuatro errores", "4. La classe destacat|4. La clase destacat", "5. La cita amb estil|5. La cita con estilo"],
        nota: "Al repte 4, si algú no ho aconsegueix, que comprovi les dues bandes: la classe a l'HTML i la regla al CSS.|En el reto 4, si alguien no lo consigue, que compruebe los dos lados: la clase en el HTML y la regla en el CSS." },
      { id: 's15', k: 'activitat', t: "Crea: la fitxa del meu preferit|Crea: la ficha de mi preferido", timer: 5, x: "Tipografia que encaixi amb la història, títol gran i una classe en dos elements.|Tipografía que encaje con la historia, título grande y una clase en dos elementos.",
        nota: "Demana a dos o tres alumnes que expliquin per què han triat aquella lletra.|Pide a dos o tres alumnos que expliquen por qué han elegido esa letra." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["font-family amb recanvi al final.|font-family con recambio al final.", "Mida, gruix, alineació i interlineat.|Tamaño, grosor, alineación e interlineado.", "Classe: sense punt a l'HTML, amb punt al CSS.|Clase: sin punto en el HTML, con punto en el CSS."],
        nota: "Avisa que la setmana vinent faran un pòster on faran servir tot el que han après a la unitat.|Avisa de que la semana que viene harán un póster donde usarán todo lo aprendido en la unidad." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Per què acabem font-family amb una genèrica?|¿Por qué acabamos font-family con una genérica?", "Com poses una classe i com la selecciones?|¿Cómo pones una clase y cómo la seleccionas?"],
        nota: "Anota qui encara confon on va el punt de la classe per revisar-ho a l'inici del projecte.|Anota quién todavía confunde dónde va el punto de la clase para revisarlo al inicio del proyecto." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: caçadors de lletres|Ficha: cazadores de letras", k: 'fitxa',
        intro: "Enganxeu o dibuixeu a cada apartat les lletres que trobeu i responeu les preguntes.|Pegad o dibujad en cada apartado las letras que encontréis y responded las preguntas.",
        items: [
          { q: "Enganxeu tres exemples de lletra serif. Com sabeu que ho són?|Pegad tres ejemplos de letra serif. ¿Cómo sabéis que lo son?", sol: "Tenen petits remats als extrems de les lletres, sobretot als peus.|Tienen pequeños remates en los extremos de las letras, sobre todo en los pies." },
          { q: "Enganxeu tres exemples de lletra sans-serif. On les heu trobat?|Pegad tres ejemplos de letra sans-serif. ¿Dónde las habéis encontrado?", sol: "Resposta oberta: sovint a envasos, rètols i aplicacions del mòbil.|Respuesta abierta: a menudo en envases, rótulos y aplicaciones del móvil." },
          { q: "Busqueu una lletra monospace. Per què creieu que es fa servir als tiquets?|Buscad una letra monospace. ¿Por qué creéis que se usa en los tiques?", sol: "Totes les lletres i números ocupen el mateix i les columnes de preus queden alineades.|Todas las letras y números ocupan lo mismo y las columnas de precios quedan alineadas." },
          { q: "Escriviu la regla CSS que descriuria el títol d'un dels retalls.|Escribid la regla CSS que describiría el título de uno de los recortes.", sol: "Exemple: h1 { font-family: Impact, sans-serif; font-size: 48px; font-weight: bold; text-align: center; }|Ejemplo: h1 { font-family: Impact, sans-serif; font-size: 48px; font-weight: bold; text-align: center; }" },
          { q: "Si un paràgraf fa 20px, quant fa una paraula de 2em a dins?|Si un párrafo mide 20px, ¿cuánto mide una palabra de 2em dentro?", sol: "40px: dues vegades la mida del pare.|40px: dos veces el tamaño del padre." }
        ] },
      { id: 'p2', t: "Targetes de propietats de text|Tarjetas de propiedades de texto", k: 'targetes',
        intro: "Un paquet per grup. Feu servir les targetes per descriure el títol que hàgiu triat: col·loqueu cada propietat amb un valor.|Un paquete por grupo. Usad las tarjetas para describir el título que hayáis elegido: colocad cada propiedad con un valor.",
        items: [
          { t: "font-family|font-family", n: 1 }, { t: "font-size|font-size", n: 1 }, { t: "font-weight|font-weight", n: 1 }, { t: "font-style|font-style", n: 1 },
          { t: "text-align|text-align", n: 1 }, { t: "line-height|line-height", n: 1 }, { t: "letter-spacing|letter-spacing", n: 1 }, { t: "text-transform|text-transform", n: 1 },
          { t: "serif|serif", n: 1 }, { t: "sans-serif|sans-serif", n: 1 }, { t: "monospace|monospace", n: 1 }, { t: "bold|bold", n: 1 }, { t: "italic|italic", n: 1 },
          { t: "center|center", n: 1 }, { t: "uppercase|uppercase", n: 1 }, { t: "48px|48px", n: 1 }, { t: "1.5|1.5", n: 1 }
        ] }
    ]
  },

  /* ===== w4-4 · Projecte: el pòster ===== */
  'w4-4': {
    obj: [
      "L'alumne/a planifica un pòster amb un esbós que ordena la informació per importància.|El alumno/a planifica un póster con un boceto que ordena la información por importancia.",
      "L'alumne/a aplica una paleta pròpia amb bon contrast i almenys un color hexadecimal.|El alumno/a aplica una paleta propia con buen contraste y al menos un color hexadecimal.",
      "L'alumne/a combina dues famílies de lletra, mides i alineació per crear jerarquia.|El alumno/a combina dos familias de letra, tamaños y alineación para crear jerarquía.",
      "L'alumne/a reutilitza estils amb classes i revisa el seu pòster amb criteris compartits.|El alumno/a reutiliza estilos con clases y revisa su póster con criterios compartidos."
    ],
    comp: [
      "Competència digital (CD2): crear i editar un producte digital complet|Competencia digital (CD2): crear y editar un producto digital completo",
      "Competència personal i d'aprendre a aprendre: planificar, fer i revisar|Competencia personal y de aprender a aprender: planificar, hacer y revisar",
      "Educació visual i plàstica: composició, jerarquia i color|Educación visual y plástica: composición, jerarquía y color",
      "Comunicació: transmetre una informació clara a un públic concret|Comunicación: transmitir una información clara a un público concreto"
    ],
    vocab: [
      ["Esbós|Boceto", "Dibuix ràpid amb caixes que mostra on va cada cosa abans de programar.|Dibujo rápido con cajas que muestra dónde va cada cosa antes de programar."],
      ["Jerarquia|Jerarquía", "L'ordre d'importància de la informació, que es veu amb la mida i el gruix.|El orden de importancia de la información, que se ve con el tamaño y el grosor."],
      ["Paleta|Paleta", "Els 3 o 4 colors que fa servir tot el pòster.|Los 3 o 4 colores que usa todo el póster."],
      ["span|span", "Etiqueta per marcar un tros petit de text dins d'un paràgraf.|Etiqueta para marcar un trozo pequeño de texto dentro de un párrafo."],
      ["Revisió entre iguals|Revisión entre iguales", "Quan un company/a mira el teu treball amb uns criteris i et dona idees per millorar-lo.|Cuando un compañero/a mira tu trabajo con unos criterios y te da ideas para mejorarlo."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el pòster»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el póster»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Fulls A4, llapis de colors i les paletes que van fer els grups a la sessió 2|Hojas A4, lápices de colores y las paletas que hicieron los grupos en la sesión 2"
      ],
      imprimir: ["Plantilla de l'esbós del pòster|Plantilla del boceto del póster", "Revisió del pòster en 5 segons|Revisión del póster en 5 segundos"],
      prep: [
        "Imprimir una plantilla d'esbós per alumne/a i una fitxa de revisió per parella.|Imprimir una plantilla de boceto por alumno/a y una ficha de revisión por pareja.",
        "Tenir a mà les paletes de la sessió 2 i les targetes de propietats de la sessió 3.|Tener a mano las paletas de la sesión 2 y las tarjetas de propiedades de la sesión 3.",
        "Pensar quatre o cinc esdeveniments d'exemple (festa, concert, exposició, mercat) per a qui no sàpiga què triar.|Pensar cuatro o cinco eventos de ejemplo (fiesta, concierto, exposición, mercado) para quien no sepa qué elegir."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: el repte del pòster|Bienvenida: el reto del póster", fase: 'inici',
        fa: "Presenta el projecte: un pòster web d'un esdeveniment, fet per cada alumne/a. Projecta la pregunta dels cinc segons i fes un repàs ràpid de propietats amb la diapositiva.|Presenta el proyecto: un póster web de un evento, hecho por cada alumno/a. Proyecta la pregunta de los cinco segundos y haz un repaso rápido de propiedades con la diapositiva.",
        diu: ["Quan passes per davant d'un cartell, quant de temps el mires?|Cuando pasas por delante de un cartel, ¿cuánto tiempo lo miras?",
          "Què ha de saber la gent en cinc segons? Què, quan i on.|¿Qué tiene que saber la gente en cinco segundos? Qué, cuándo y dónde."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Com es dissenya un pòster|Cómo se diseña un póster", fase: 'teoria',
        fa: "Explica l'esbós, la jerarquia (tres mides), la paleta apuntada en un comentari, les dues famílies de lletra i les classes que es repeteixen. Mostra el codi de cada idea i pregunta què es veurà abans de mostrar-ho.|Explica el boceto, la jerarquía (tres tamaños), la paleta apuntada en un comentario, las dos familias de letra y las clases que se repiten. Muestra el código de cada idea y pregunta qué se verá antes de mostrarlo.",
        diu: ["Si tot és gran, què destaca? Res!|Si todo es grande, ¿qué destaca? ¡Nada!",
          "Dues famílies com a màxim: una per als títols i una per al text.|Dos familias como máximo: una para los títulos y una para el texto.",
          "Què es repeteix al vostre pòster? Això serà una classe.|¿Qué se repite en vuestro póster? Eso será una clase."],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "L'esbós en paper|El boceto en papel", fase: 'desconnectat',
        fa: "Cada alumne/a omple la plantilla de l'esbós: tria l'esdeveniment, escriu la informació, dibuixa les caixes, pinta la paleta i anota les classes. Als darrers dos minuts, en parelles, s'ensenyen l'esbós cinc segons i el company/a diu què, quan i on.|Cada alumno/a rellena la plantilla del boceto: elige el evento, escribe la información, dibuja las cajas, pinta la paleta y anota las clases. En los dos últimos minutos, en parejas, se enseñan el boceto cinco segundos y el compañero/a dice qué, cuándo y dónde.",
        diu: ["No cal que sigui bonic: ha de ser clar.|No hace falta que sea bonito: tiene que ser claro.",
          "Quina caixa és la més gran? És la informació més important?|¿Qué caja es la más grande? ¿Es la información más importante?",
          "El company/a ho ha entès en cinc segons? Si no, què canviaries?|¿El compañero/a lo ha entendido en cinco segundos? Si no, ¿qué cambiarías?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 10, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a fa les primeres fases de l'app fins a la pausa activa: les targetes, l'esbós (ja fet), ordenar els passos, la predicció i els dos errors. Fes la pausa de la distància tots junts.|Cada alumno/a hace las primeras fases de la app hasta la pausa activa: las tarjetas, el boceto (ya hecho), ordenar los pasos, la predicción y los dos errores. Haced la pausa de la distancia todos juntos.",
        diu: ["Per què l'esbós va abans dels colors?|¿Por qué el boceto va antes de los colores?",
          "On va el punt de la classe, a l'HTML o al CSS?|¿Dónde va el punto de la clase, en el HTML o en el CSS?"],
        slides: ['s10'], app: "De «La missió» fins a «Pausa activa»: les històries, les set targetes, «L'esbós del pòster» (ja fet), ordenar els passos, la predicció, els dos errors i la prova de la distància.|De «La misión» hasta «Pausa activa»: las historias, las siete tarjetas, «El boceto del póster» (ya hecho), ordenar los pasos, la predicción, los dos errores y la prueba de la distancia.", org: "Individual|Individual" },
      { min: 12, t: "Reptes: el pòster peça a peça|Retos: el póster pieza a pieza", fase: 'ordinador',
        fa: "Explica que els cinc reptes construeixen un mateix pòster pas a pas: contingut, paleta, lletres, classes i toc final. Resol amb la classe la regla de les dues classes amb coma, projectada. Qui acabi, el repte extra de l'oferta.|Explica que los cinco retos construyen un mismo póster paso a paso: contenido, paleta, letras, clases y toque final. Resuelve con la clase la regla de las dos clases con coma, proyectada. Quien acabe, el reto extra de la oferta.",
        diu: ["Cada repte afegeix una capa: no esborris el que ja funciona.|Cada reto añade una capa: no borres lo que ya funciona.",
          "Una sola regla per a dues classes: separa-les amb una coma.|Una sola regla para dos clases: sepáralas con una coma.",
          "Comprova el contrast: es llegeix el text sobre el fons?|Comprueba el contraste: ¿se lee el texto sobre el fondo?"],
        slides: ['s11', 's12'], app: "Els cinc reptes: el contingut, la paleta, les lletres, les classes i el toc final. Extra: l'oferta amb preu ratllat.|Los cinco retos: el contenido, la paleta, las letras, las clases y el toque final. Extra: la oferta con precio tachado.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 12, t: "Crea: el meu pòster|Crea: mi póster", fase: 'crea',
        fa: "Cada alumne/a programa el seu pòster seguint l'esbós. L'app mostra tots els criteris: que els vagin marcant. Als darrers quatre minuts, revisió en parelles amb la fitxa dels cinc segons i un consell per millorar.|Cada alumno/a programa su póster siguiendo el boceto. La app muestra todos los criterios: que los vayan marcando. En los cuatro últimos minutos, revisión en parejas con la ficha de los cinco segundos y un consejo para mejorar.",
        diu: ["Segueix el teu esbós: ja has decidit l'ordre i la paleta.|Sigue tu boceto: ya has decidido el orden y la paleta.",
          "Revisió: digues una cosa que funciona i una que milloraries.|Revisión: di una cosa que funciona y una que mejorarías.",
          "Si no l'acabes avui, es desa: el pots acabar a casa.|Si no lo acabas hoy, se guarda: lo puedes acabar en casa."],
        slides: ['s13', 's14'], app: "Pas «Crea»: El meu pòster (projecte de la unitat).|Paso «Crea»: Mi póster (proyecto de la unidad).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el que han après a tota la unitat amb el resum i celebra els pòsters. Deixa que responguin les preguntes finals i fes el tiquet a la porta.|Repasa lo que han aprendido en toda la unidad con el resumen y celebra los pósteres. Deja que respondan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Quina és la primera cosa que fa un dissenyador/a?|¿Cuál es la primera cosa que hace un diseñador/a?",
          "Què has fet servir del CSS en el teu pòster?|¿Qué has usado del CSS en tu póster?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals, com m'he sentit i la insignia de la unitat.|«Cierre»: las dos preguntas finales, cómo me he sentido y la insignia de la unidad.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Comença pels colors i les lletres i no té clar què ha de dir el pòster.|Empieza por los colores y las letras y no tiene claro qué tiene que decir el póster.",
        "Torna a l'esbós: que escrigui primer què, quan i on. Els colors vénen després.|Vuelve al boceto: que escriba primero qué, cuándo y dónde. Los colores vienen después."],
      ["Fa tot el text gran i en negreta: no destaca res.|Hace todo el texto grande y en negrita: no destaca nada.",
        "Pregunta-li quina és la informació més important i proposa tres mides: gran, mitjana i normal.|Pregúntale cuál es la información más importante y propón tres tamaños: grande, mediano y normal."],
      ["Tria colors que no tenen contrast i l'app no li dona el criteri.|Elige colores que no tienen contraste y la app no le da el criterio.",
        "Fes-li fer la prova de la distància. Que mantingui el to però faci el text més fosc o el fons més clar.|Hazle hacer la prueba de la distancia. Que mantenga el tono pero haga el texto más oscuro o el fondo más claro."],
      ["Escriu la mateixa regla diverses vegades per a elements que s'assemblen.|Escribe la misma regla varias veces para elementos que se parecen.",
        "Proposa-li una classe o una regla amb coma: un sol canvi s'aplicarà a tots.|Propónle una clase o una regla con coma: un solo cambio se aplicará a todos."],
      ["Se li desconfigura tot en afegir una regla nova.|Se le desconfigura todo al añadir una regla nueva.",
        "Que miri l'avís de l'editor: sovint és una clau que falta a la regla d'abans.|Que mire el aviso del editor: a menudo es una llave que falta en la regla anterior."]
    ],
    diff: {
      mes: "Fer el repte extra de l'oferta i afegir una segona versió del pòster amb una altra paleta, canviant només l'estil.css. Explicar a la classe les decisions de disseny.|Hacer el reto extra de la oferta y añadir una segunda versión del póster con otra paleta, cambiando solo el estil.css. Explicar a la clase las decisiones de diseño.",
      menys: "Partir del pòster dels reptes i canviar-ne el contingut, la paleta i les lletres pel seu esdeveniment. Tenir a la taula la plantilla de l'esbós i les targetes de propietats.|Partir del póster de los retos y cambiar su contenido, la paleta y las letras por su evento. Tener en la mesa la plantilla del boceto y las tarjetas de propiedades."
    },
    aval: {
      ticket: ["Quina és la primera cosa que cal fer per dissenyar un pòster?|¿Cuál es la primera cosa que hay que hacer para diseñar un póster?",
        "Digues tres propietats de CSS que has fet servir al teu pòster i per a què.|Di tres propiedades de CSS que has usado en tu póster y para qué."],
      rubric: [
        ["Planificació|Planificación", "L'esbós té la informació clara i el pòster el segueix.|El boceto tiene la información clara y el póster lo sigue.", "Fa l'esbós, però al pòster la informació queda desordenada.|Hace el boceto, pero en el póster la información queda desordenada."],
        ["Color i contrast|Color y contraste", "Paleta coherent de 3 o 4 colors, apuntada en un comentari i amb bon contrast.|Paleta coherente de 3 o 4 colores, apuntada en un comentario y con buen contraste.", "Fa servir colors variats, però el contrast o la coherència necessiten ajuda.|Usa colores variados, pero el contraste o la coherencia necesitan ayuda."],
        ["Tipografia i jerarquia|Tipografía y jerarquía", "Dues famílies, tres mides i alineació que fan llegir primer el més important.|Dos familias, tres tamaños y alineación que hacen leer primero lo más importante.", "Canvia lletres i mides, però la jerarquia encara no és clara.|Cambia letras y tamaños, pero la jerarquía todavía no es clara."],
        ["Classes i codi net|Clases y código limpio", "Fa servir classes per repetir estils i el codi no té errors.|Usa clases para repetir estilos y el código no tiene errores.", "Fa servir alguna classe amb ajuda o el codi té algun error que cal revisar.|Usa alguna clase con ayuda o el código tiene algún error que hay que revisar."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu acabar el pòster i ensenyar-lo a la família cinc segons: ho han entès? Després, proveu de fer-ne una versió amb una altra paleta.|En casa, con el móvil, podéis acabar el póster y enseñárselo a la familia cinco segundos: ¿lo han entendido? Después, probad a hacer una versión con otra paleta.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: el pòster|Proyecto: el póster", x: "Avui dissenyes i programes el pòster web d'un esdeveniment.|Hoy diseñas y programas el póster web de un evento.",
        nota: "Explica que és el projecte de la unitat i que faran servir tot el que han après: estil, colors i lletres.|Explica que es el proyecto de la unidad y que usarán todo lo aprendido: estilo, colores y letras." },
      { id: 's2', k: 'pregunta', t: "La prova dels cinc segons|La prueba de los cinco segundos", x: "Què ha de saber la gent quan mira un pòster només cinc segons?|¿Qué tiene que saber la gente cuando mira un póster solo cinco segundos?",
        nota: "Recull respostes i escriu a la pissarra: què, quan i on. Serà el criteri de revisió final.|Recoge respuestas y escribe en la pizarra: qué, cuándo y dónde. Será el criterio de revisión final." },
      { id: 's3', k: 'repas', t: "Repàs exprés de la unitat|Repaso exprés de la unidad", punts: ["La regla i el link|La regla y el link", "color, background-color i hexadecimal|color, background-color y hexadecimal", "font-family, font-size i text-align|font-family, font-size y text-align", "Classes amb punt al CSS|Clases con punto en el CSS"],
        code: '.data {\n  color: #1D3557;\n  font-weight: bold;\n}',
        nota: "Fes preguntes ràpides: quina propietat canvia el gruix? com es centra? on va el punt?|Haz preguntas rápidas: ¿qué propiedad cambia el grosor? ¿cómo se centra? ¿dónde va el punto?" },
      { id: 's4', k: 'anim', t: "Primer, l'esbós|Primero, el boceto", anim: 'wplan', x: "Caixes que diuen on va cada cosa i quina és més important.|Cajas que dicen dónde va cada cosa y cuál es más importante.",
        nota: "Dibuixa un esbós a la pissarra en trenta segons per mostrar que no cal que sigui bonic.|Dibuja un boceto en la pizarra en treinta segundos para mostrar que no hace falta que sea bonito." },
      { id: 's5', k: 'concepte', t: "Jerarquia: tres mides|Jerarquía: tres tamaños", punts: ["Nom de l'esdeveniment: enorme.|Nombre del evento: enorme.", "Data i lloc: mitjans i en negreta.|Fecha y lugar: medianos y en negrita.", "Descripció: normal.|Descripción: normal."],
        code: 'h1 {\n  font-size: 44px;\n}\n.data {\n  font-size: 24px;\n  font-weight: bold;\n}\np {\n  font-size: 16px;\n}',
        nota: "Pregunta: si tot fos de 44px, què destacaria? Explica que la classe guanya a l'etiqueta perquè és més concreta.|Pregunta: si todo fuera de 44px, ¿qué destacaría? Explica que la clase gana a la etiqueta porque es más concreta." },
      { id: 's6', k: 'concepte', t: "Paleta i lletres|Paleta y letras", punts: ["La paleta, en un comentari a dalt.|La paleta, en un comentario arriba.", "Una família per als títols, una per al text.|Una familia para los títulos, una para el texto.", "Amb una coma, una regla per a dos selectors.|Con una coma, una regla para dos selectores."],
        code: "/* Paleta: #F4F1DE #264653 #2A9D8F #E9C46A */\nbody {\n  background-color: #F4F1DE;\n  color: #264653;\n  font-family: Georgia, serif;\n}\nh1, h2 {\n  font-family: Impact, sans-serif;\n}",
        nota: "Recorda les paletes que van fer a la sessió 2: les poden reaprofitar.|Recuerda las paletas que hicieron en la sesión 2: las pueden reaprovechar." },
      { id: 's7', k: 'concepte', t: "Classes, emojis i centrar|Clases, emojis y centrar", punts: ["El que es repeteix, en una classe.|Lo que se repite, en una clase.", "Els emojis són text: font-size i text-align.|Los emojis son texto: font-size y text-align.", "text-align al body ho centra tot.|text-align en el body lo centra todo."],
        code: 'body {\n  text-align: center;\n}\n.emojis {\n  font-size: 48px;\n}\n.etiqueta {\n  background-color: #E76F51;\n  color: white;\n}',
        nota: "Recorda que les imatges sempre porten alt, com a la unitat 3.|Recuerda que las imágenes siempre llevan alt, como en la unidad 3." },
      { id: 's8', k: 'activitat', t: "L'esbós del pòster|El boceto del póster", timer: 10, punts: ["Tria l'esdeveniment i escriu què, quan i on.|Elige el evento y escribe qué, cuándo y dónde.", "Dibuixa les caixes per ordre d'importància.|Dibuja las cajas por orden de importancia.", "Pinta la paleta i anota les classes.|Pinta la paleta y anota las clases."],
        nota: "Per a qui no sàpiga què triar, proposa esdeveniments d'exemple: festa, concert, exposició, mercat.|Para quien no sepa qué elegir, propón eventos de ejemplo: fiesta, concierto, exposición, mercado." },
      { id: 's9', k: 'activitat', t: "Prova de l'esbós en parella|Prueba del boceto en pareja", punts: ["Ensenya l'esbós cinc segons.|Enseña el boceto cinco segundos.", "El company/a diu què, quan i on.|El compañero/a dice qué, cuándo y dónde.", "Si falla, canvia la mida o l'ordre.|Si falla, cambia el tamaño o el orden."],
        nota: "Fes-ho als darrers dos minuts del bloc. Cronometra els cinc segons en veu alta per a tota la classe.|Hazlo en los dos últimos minutos del bloque. Cronometra los cinco segundos en voz alta para toda la clase." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre la sessió «Projecte: el pòster».|Abre la sesión «Proyecto: el póster».", "Fes «Descobreix», «Prova» i «Investiga».|Haz «Descubre», «Prueba» e «Investiga».", "Fem junts la pausa de la distància.|Hacemos juntos la pausa de la distancia."],
        nota: "Al pas de l'esbós, que marquin que ja l'han fet. Guarden l'esbós de paper al costat de l'ordinador.|En el paso del boceto, que marquen que ya lo han hecho. Guardan el boceto de papel al lado del ordenador." },
      { id: 's11', k: 'repte', t: "El pòster peça a peça|El póster pieza a pieza", timer: 12, punts: ["1. El contingut i el link|1. El contenido y el link", "2. La paleta|2. La paleta", "3. Les lletres|3. Las letras", "4. Les classes|4. Las clases", "5. El toc final|5. El toque final"],
        nota: "Remarca que cada repte parteix del resultat de l'anterior: és com treballa un dissenyador/a, per capes.|Remarca que cada reto parte del resultado del anterior: es como trabaja un diseñador/a, por capas." },
      { id: 's12', k: 'repte', t: "Una regla per a dues classes|Una regla para dos clases", x: "Com fem que la data i el lloc destaquin igual amb una sola regla?|¿Cómo hacemos que la fecha y el lugar destaquen igual con una sola regla?",
        code: '.data, .lloc {\n  background-color: #A8DADC;\n  color: #1D3557;\n  font-weight: bold;\n}',
        nota: "És el repte 4 de l'app. Pregunta quins colors de la paleta farien bon contrast abans de mostrar la solució.|Es el reto 4 de la app. Pregunta qué colores de la paleta harían buen contraste antes de mostrar la solución." },
      { id: 's13', k: 'activitat', t: "Crea: el meu pòster|Crea: mi póster", timer: 12, punts: ["Segueix el teu esbós.|Sigue tu boceto.", "Paleta, dues famílies i classes.|Paleta, dos familias y clases.", "Marca els criteris de l'app un a un.|Marca los criterios de la app uno a uno."],
        nota: "Passeja i pregunta a cada alumne/a quin és el següent criteri que vol aconseguir.|Pasea y pregunta a cada alumno/a cuál es el siguiente criterio que quiere conseguir." },
      { id: 's14', k: 'activitat', t: "Revisió en parelles|Revisión en parejas", timer: 4, punts: ["Mira el pòster del company/a cinc segons.|Mira el póster del compañero/a cinco segundos.", "Digues què, quan i on.|Di qué, cuándo y dónde.", "Una cosa que funciona i una per millorar.|Una cosa que funciona y una para mejorar."],
        nota: "Els consells han de ser concrets i amables: per exemple, faria la data més gran.|Los consejos tienen que ser concretos y amables: por ejemplo, haría la fecha más grande." },
      { id: 's15', k: 'resum', t: "Què hem après a la unitat|Qué hemos aprendido en la unidad", punts: ["El CSS vesteix l'HTML amb regles.|El CSS viste el HTML con reglas.", "Colors amb contrast i una paleta.|Colores con contraste y una paleta.", "Lletres, mides i classes per crear jerarquia.|Letras, tamaños y clases para crear jerarquía.", "Primer l'esbós, després el codi.|Primero el boceto, después el código."],
        nota: "Projecta dos o tres pòsters (amb permís de qui els ha fet) i celebra les decisions de disseny.|Proyecta dos o tres pósteres (con permiso de quien los ha hecho) y celebra las decisiones de diseño." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què cal fer abans de programar un pòster?|¿Qué hay que hacer antes de programar un póster?", "Tres propietats que has fet servir i per a què.|Tres propiedades que has usado y para qué."],
        nota: "Anota qui no ha acabat el pòster perquè el pugui completar a casa o a l'inici de la sessió següent.|Anota quién no ha acabado el póster para que lo pueda completar en casa o al inicio de la sesión siguiente." }
    ],
    print: [
      { id: 'p1', t: "Plantilla de l'esbós del pòster|Plantilla del boceto del póster", k: 'fitxa',
        intro: "Omple cada apartat abans d'obrir l'ordinador. Aquest full serà el plànol del teu pòster.|Rellena cada apartado antes de abrir el ordenador. Esta hoja será el plano de tu póster.",
        items: [
          { q: "Què és? Escriu el nom de l'esdeveniment (serà el h1).|¿Qué es? Escribe el nombre del evento (será el h1).", sol: "Exemple: Festa de final de trimestre.|Ejemplo: Fiesta de final de trimestre." },
          { q: "Quan i on? Escriu la data i l'hora, i el lloc (seran les classes data i lloc).|¿Cuándo y dónde? Escribe la fecha y la hora, y el lugar (serán las clases data y lloc).", sol: "Exemple: Divendres 19 a les 5 · Al pati de l'escola.|Ejemplo: Viernes 19 a las 5 · En el patio de la escuela." },
          { q: "Escriu una frase que convidi a venir.|Escribe una frase que invite a venir.", sol: "Exemple: Música, tallers i berenar per a tothom.|Ejemplo: Música, talleres y merienda para todo el mundo." },
          { q: "Dibuixa l'esbós amb caixes: la més gran, la més important.|Dibuja el boceto con cajas: la más grande, la más importante.", sol: "Títol a dalt i gran, data i lloc mitjans, descripció normal, imatge o emojis.|Título arriba y grande, fecha y lugar medianos, descripción normal, imagen o emojis." },
          { q: "Pinta la paleta (fons, text, principal, accent) i escriu-ne els noms o codis.|Pinta la paleta (fondo, texto, principal, acento) y escribe sus nombres o códigos.", sol: "Exemple: #1D3557, #F1FAEE, #E63946, #A8DADC.|Ejemplo: #1D3557, #F1FAEE, #E63946, #A8DADC." },
          { q: "Tria dues famílies de lletra: una per als títols i una per al text.|Elige dos familias de letra: una para los títulos y una para el texto.", sol: "Exemple: Impact, sans-serif per als títols i Arial, sans-serif per al text.|Ejemplo: Impact, sans-serif para los títulos y Arial, sans-serif para el texto." }
        ] },
      { id: 'p2', t: "Revisió del pòster en 5 segons|Revisión del póster en 5 segundos", k: 'fitxa',
        intro: "Mira el pòster del company/a només cinc segons i respon. Després, digues-li una cosa que funciona i una que milloraries.|Mira el póster del compañero/a solo cinco segundos y responde. Después, dile una cosa que funciona y una que mejorarías.",
        items: [
          { q: "Què és l'esdeveniment?|¿Qué es el evento?", sol: "Si ho has sabut dir, el títol funciona.|Si lo has sabido decir, el título funciona." },
          { q: "Quan és?|¿Cuándo es?", sol: "Si no ho has vist, la data necessita més mida o més contrast.|Si no lo has visto, la fecha necesita más tamaño o más contraste." },
          { q: "On és?|¿Dónde es?", sol: "Si no ho has vist, el lloc necessita destacar més.|Si no lo has visto, el lugar necesita destacar más." },
          { q: "El text es llegeix bé sobre el fons?|¿El texto se lee bien sobre el fondo?", sol: "Si costa, cal un text més fosc o un fons més clar (o al revés).|Si cuesta, hace falta un texto más oscuro o un fondo más claro (o al revés)." },
          { q: "Una cosa que funciona i una que milloraries.|Una cosa que funciona y una que mejorarías.", sol: "Resposta oberta: consells concrets i amables.|Respuesta abierta: consejos concretos y amables." }
        ] }
    ]
  }
});

/* ---------- Guia del professorat · Tech Web, unitat 5 «Caixes» ---------- */
Object.assign(TGUIDE, {

  /* ===== w5-1 · Tot és una caixa ===== */
  'w5-1': {
    obj: [
      "L'alumne/a explica que cada element d'una pàgina és una caixa rectangular i la fa visible amb un color de fons.|El alumno/a explica que cada elemento de una página es una caja rectangular y la hace visible con un color de fondo.",
      "L'alumne/a distingeix les caixes de bloc (div, p, h1) de les caixes en línia (span, b, a) i tria la correcta per agrupar o per destacar.|El alumno/a distingue las cajas de bloque (div, p, h1) de las cajas en línea (span, b, a) y elige la correcta para agrupar o para destacar.",
      "L'alumne/a fa servir classes per aplicar el mateix estil a un grup de caixes.|El alumno/a usa clases para aplicar el mismo estilo a un grupo de cajas.",
      "L'alumne/a controla la mida d'una caixa amb width, height i max-width en píxels.|El alumno/a controla el tamaño de una caja con width, height y max-width en píxeles."
    ],
    comp: [
      "Competència digital (CD3): crear contingut digital amb HTML i CSS|Competencia digital (CD3): crear contenido digital con HTML y CSS",
      "Pensament computacional: descompondre una pàgina en caixes i regles|Pensamiento computacional: descomponer una página en cajas y reglas",
      "Matemàtiques: mesures en píxels, comparar i ordenar longituds|Matemáticas: medidas en píxeles, comparar y ordenar longitudes",
      "Educació visual i plàstica: composició amb rectangles i color|Educación visual y plástica: composición con rectángulos y color"
    ],
    vocab: [
      ["Caixa|Caja", "El rectangle invisible que el navegador dibuixa al voltant de cada element.|El rectángulo invisible que el navegador dibuja alrededor de cada elemento."],
      ["Bloc|Bloque", "Caixa que comença en una línia nova i ocupa tota l'amplada (div, p, h1).|Caja que empieza en una línea nueva y ocupa toda la anchura (div, p, h1)."],
      ["En línia|En línea", "Caixa que viu dins del text i només ocupa el que necessita (span, b, a).|Caja que vive dentro del texto y solo ocupa lo que necesita (span, b, a)."],
      ["Classe|Clase", "Nom que posem a diverses caixes perquè comparteixin un estil; al CSS va amb un punt.|Nombre que ponemos a varias cajas para que compartan un estilo; en el CSS va con un punto."],
      ["Píxel|Píxel", "El punt més petit de la pantalla; la unitat de mida que fem servir (px).|El punto más pequeño de la pantalla; la unidad de medida que usamos (px)."],
      ["Amplada màxima|Anchura máxima", "Límit d'amplada (max-width): la caixa no passa d'aquí però es pot encongir.|Límite de anchura (max-width): la caja no pasa de ahí pero se puede encoger."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Tot és una caixa»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Todo es una caja»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Diaris, revistes o fullets de propaganda (un full per parella)|Periódicos, revistas o folletos de propaganda (una hoja por pareja)",
        "Retoladors vermells i blaus|Rotuladores rojos y azules"
      ],
      imprimir: ["Fitxa: bloc o en línia?|Ficha: ¿bloque o en línea?", "Targetes d'etiquetes|Tarjetas de etiquetas"],
      prep: [
        "Recollir uns quants fulls de revista o de diari amb títols, fotos i requadres ben visibles.|Recoger unas cuantas hojas de revista o de periódico con títulos, fotos y recuadros bien visibles.",
        "Imprimir la fitxa (una per parella) i un paquet de targetes d'etiquetes per parella.|Imprimir la ficha (una por pareja) y un paquete de tarjetas de etiquetas por pareja.",
        "Obrir una web coneguda (la de l'escola, per exemple) per mostrar-ne les caixes amb el botó Raigs X de l'editor o les eines del navegador.|Abrir una web conocida (la del colegio, por ejemplo) para mostrar sus cajas con el botón Rayos X del editor o las herramientas del navegador.",
        "Provar abans el repte 4 per veure com queden les tres caixes apilades.|Probar antes el reto 4 para ver cómo quedan las tres cajas apiladas."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: la web amb Raigs X|Bienvenida: la web con Rayos X", fase: 'inici',
        fa: "Projecta la portada i pregunta quantes caixes veuen en una pantalla d'app. Recull respostes sense corregir. Repassa en un minut com s'enllaça l'estil.css, que farem servir tota la unitat.|Proyecta la portada y pregunta cuántas cajas ven en una pantalla de app. Recoge respuestas sin corregir. Repasa en un minuto cómo se enlaza el estil.css, que usaremos toda la unidad.",
        diu: ["Si poguéssiu veure la pàgina amb Raigs X, què hi veuríeu?|Si pudierais ver la página con Rayos X, ¿qué veríais?",
          "Avui descobrireu que una web és un munt de rectangles ben col·locats.|Hoy descubriréis que una web es un montón de rectángulos bien colocados.",
          "Recordeu: sense el link, l'estil.css no fa res.|Recordad: sin el link, el estil.css no hace nada."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Caixes de bloc i en línia|Cajas de bloque y en línea", fase: 'teoria',
        fa: "Explica amb l'animació que tot element és una caixa i que, sense fons, no es veu. Mostra la diferència entre bloc i en línia i fes la comparació de la safata (div) i el subratllador (span). Projecta el codi de les classes i el de width i height, i pregunta què passaria si la tortuga també tingués la classe. Acaba amb max-width mostrant la mateixa caixa en un ordinador i en un mòbil.|Explica con la animación que todo elemento es una caja y que, sin fondo, no se ve. Muestra la diferencia entre bloque y en línea y haz la comparación de la bandeja (div) y el subrayador (span). Proyecta el código de las clases y el de width y height, y pregunta qué pasaría si la tortuga también tuviera la clase. Termina con max-width mostrando la misma caja en un ordenador y en un móvil.",
        diu: ["Un div és com una safata: hi poseu coses a sobre i les moveu totes juntes.|Un div es como una bandeja: ponéis cosas encima y las movéis todas juntas.",
          "Un span és un subratllador: pinta unes paraules sense trencar la frase.|Un span es un subrayador: pinta unas palabras sin romper la frase.",
          "Per què el selector de la classe porta un punt al davant?|¿Por qué el selector de la clase lleva un punto delante?",
          "Què passa amb una caixa de 900 píxels en un mòbil?|¿Qué pasa con una caja de 900 píxeles en un móvil?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Raigs X de paper|Rayos X de papel", fase: 'desconnectat',
        fa: "Per parelles, cada una amb un full de revista i dos retoladors. Encerclen en vermell les caixes de bloc i en blau les en línia, i després posen damunt de cada rectangle la targeta d'etiqueta que hi correspon. Acaba amb la fitxa, que poden resoldre en parella.|Por parejas, cada una con una hoja de revista y dos rotuladores. Rodean en rojo las cajas de bloque y en azul las en línea, y después ponen sobre cada rectángulo la tarjeta de etiqueta que le corresponde. Termina con la ficha, que pueden resolver en pareja.",
        diu: ["Aquest requadre amb foto i text, quina caixa seria? Un div que n'agrupa d'altres!|Este recuadro con foto y texto, ¿qué caja sería? ¡Un div que agrupa otras!",
          "Les caixes vermelles van una sota l'altra. I les blaves?|Las cajas rojas van una debajo de otra. ¿Y las azules?",
          "Si dubteu, pregunteu-vos: trenca la línia o es queda dins la frase?|Si dudáis, preguntaos: ¿rompe la línea o se queda dentro de la frase?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla (al pas «Mans a l'obra» toquen «Ho hem fet!»).|Ninguna: actividad sin pantalla (en el paso «Manos a la obra» tocan «¡Lo hemos hecho!»).", org: "Parelles|Parejas" },
      { min: 12, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança fins al laboratori de caixes. Passeja per l'aula: a les preguntes de predir, demana que expliquin per què abans de triar. Al laboratori, proposa que posin width a un span i ho comparin amb un div.|Cada alumno/a abre la sesión y avanza hasta el laboratorio de cajas. Pasea por el aula: en las preguntas de predecir, pide que expliquen por qué antes de elegir. En el laboratorio, propón que pongan width a un span y lo comparen con un div.",
        diu: ["Abans de triar, digues on aniria el fons groc.|Antes de elegir, di dónde iría el fondo amarillo.",
          "Has trobat la línia de l'error? Què hi falta al número?|¿Has encontrado la línea del error? ¿Qué le falta al número?",
          "Activa els Raigs X: on comença i on acaba cada caixa?|Activa los Rayos X: ¿dónde empieza y dónde termina cada caja?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les dues preguntes de repàs, la missió, les 7 targetes de «Descobreix», «Raigs X de paper» (ja fet), la pàgina a predir, el codi de les tres barres, l'error de la unitat i el laboratori de caixes.|De «Recuerda» hasta «Investiga»: las dos preguntas de repaso, la misión, las 7 tarjetas de «Descubre», «Rayos X de papel» (ya hecho), la página a predecir, el código de las tres barras, el error de la unidad y el laboratorio de cajas.", org: "Individual|Individual" },
      { min: 13, t: "Pausa activa i reptes|Pausa activa y retos", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després projecta la diapositiva del repte de les tres caixes i resol amb el grup la primera regla. Deixa'ls fer els quatre reptes; el repte extra és per a qui acabi. Qui acabi abans ajuda un company/a amb preguntes, sense tocar-li el teclat.|Haced la pausa activa todos juntos. Después proyecta la diapositiva del reto de las tres cajas y resuelve con el grupo la primera regla. Deja que hagan los cuatro retos; el reto extra es para quien termine. Quien termine antes ayuda a un compañero/a con preguntas, sin tocarle el teclado.",
        diu: ["Bloc o en línia? Braços oberts o enganxats!|¿Bloque o en línea? ¡Brazos abiertos o pegados!",
          "Una caixa pot tenir dues classes: caixa i gos. D'on treu el color i d'on l'amplada?|Una caja puede tener dos clases: caixa y gos. ¿De dónde saca el color y de dónde la anchura?",
          "Al repte 3, el span va just abans de la paraula i el tancament just després.|En el reto 3, el span va justo antes de la palabra y el cierre justo después."],
        slides: ['s13', 's14'], app: "«Pausa activa» i «Reptes»: les tres caixes del matí, la mida dels animals, el subratllador, la pàgina de tres caixes i el repte extra de la gràfica de barres.|«Pausa activa» y «Retos»: las tres cajas de la mañana, el tamaño de los animales, el subrayador, la página de tres cajas y el reto extra del gráfico de barras.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: el meu dia en caixes|Crea: mi día en cajas", fase: 'crea',
        fa: "Cada alumne/a fa la seva pàgina amb almenys quatre moments del dia en caixes de colors, dins d'una caixa amb amplada màxima. Recorda que es desa i que poden continuar-la a casa.|Cada alumno/a hace su página con al menos cuatro momentos del día en cajas de colores, dentro de una caja con anchura máxima. Recuerda que se guarda y que pueden continuarla en casa.",
        diu: ["Quin moment del dia destacaríeu amb el subratllador?|¿Qué momento del día destacaríais con el subrayador?",
          "Proveu la vista de mòbil: la pàgina s'encongeix gràcies a max-width?|Probad la vista de móvil: ¿la página se encoge gracias a max-width?"],
        slides: ['s15'], app: "Pas «Crea»: El meu dia en caixes.|Paso «Crea»: Mi día en cajas.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les dues preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas con el resumen, deja que hagan las dos preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
        diu: ["Digues-me una caixa de bloc i una en línia.|Dime una caja de bloque y una en línea.",
          "Per a què serveix max-width?|¿Para qué sirve max-width?"],
        slides: ['s16', 's17'], app: "«Tancament»: dues preguntes i com m'he sentit.|«Cierre»: dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu la classe al CSS sense el punt (fitxa en lloc de .fitxa) i no passa res.|Escribe la clase en el CSS sin el punto (fitxa en lugar de .fitxa) y no pasa nada.",
        "Pregunta-li com sap el navegador si fitxa és una etiqueta o una classe. Fes-li buscar el punt a la targeta de teoria.|Pregúntale cómo sabe el navegador si fitxa es una etiqueta o una clase. Haz que busque el punto en la tarjeta de teoría."],
      ["Posa width a un span i no entén per què no canvia.|Pone width a un span y no entiende por qué no cambia.",
        "Que faci el gest de la pausa: el span és en línia, braços enganxats. Proposa-li canviar-lo per un div o posar-li display: block.|Que haga el gesto de la pausa: el span es en línea, brazos pegados. Propónle cambiarlo por un div o ponerle display: block."],
      ["Escriu números sense unitat (width: 200).|Escribe números sin unidad (width: 200).",
        "Llegiu junts el missatge de l'editor. Pregunta: 200 què? Centímetres, píxels, elefants?|Leed juntos el mensaje del editor. Pregunta: ¿200 qué? ¿Centímetros, píxeles, elefantes?"],
      ["Fa servir un div al mig d'una frase per destacar una paraula i la frase es trenca.|Usa un div en medio de una frase para destacar una palabra y la frase se rompe.",
        "Recorda la diferència entre safata i subratllador. Que ho canviï per un span i compari el resultat.|Recuerda la diferencia entre bandeja y subrayador. Que lo cambie por un span y compare el resultado."],
      ["Copia tot el codi d'un repte en lloc de modificar la regla que ja hi ha.|Copia todo el código de un reto en lugar de modificar la regla que ya existe.",
        "Mostra-li que la regla buida ja hi és: només cal omplir-la entre les claus.|Muéstrale que la regla vacía ya está: solo hace falta rellenarla entre las llaves."]
    ],
    diff: {
      mes: "Fer el repte extra de la gràfica de barres i afegir una quarta afició. Després, convertir la pàgina del dia en una línia del temps amb caixes d'amplades proporcionals a les hores de cada activitat.|Hacer el reto extra del gráfico de barras y añadir una cuarta afición. Después, convertir la página del día en una línea del tiempo con cajas de anchuras proporcionales a las horas de cada actividad.",
      menys: "Tenir a la taula les targetes d'etiquetes separades en dos munts, bloc i en línia. Fer els reptes 1 i 2 amb una llista escrita de colors i amplades per triar, i a la pàgina final, començar amb tres moments en lloc de quatre.|Tener en la mesa las tarjetas de etiquetas separadas en dos montones, bloque y en línea. Hacer los retos 1 y 2 con una lista escrita de colores y anchuras para elegir, y en la página final, empezar con tres momentos en lugar de cuatro."
    },
    aval: {
      ticket: ["Digues una etiqueta de bloc i una d'en línia, i què les diferencia.|Di una etiqueta de bloque y una en línea, y qué las diferencia.",
        "Quina diferència hi ha entre width i max-width?|¿Qué diferencia hay entre width y max-width?"],
      rubric: [
        ["Bloc i en línia|Bloque y en línea", "Tria div per agrupar i span per destacar, i explica per què.|Elige div para agrupar y span para destacar, y explica por qué.", "Reconeix la diferència en un exemple, però encara les confon en escriure.|Reconoce la diferencia en un ejemplo, pero todavía las confunde al escribir."],
        ["Classes|Clases", "Posa la mateixa classe a diverses caixes i escriu el selector amb el punt.|Pone la misma clase a varias cajas y escribe el selector con el punto.", "Fa servir classes, però de vegades oblida el punt o el nom no coincideix.|Usa clases, pero a veces olvida el punto o el nombre no coincide."],
        ["Mida de les caixes|Tamaño de las cajas", "Fa servir width, height i max-width amb unitats i preveu el resultat.|Usa width, height y max-width con unidades y prevé el resultado.", "Canvia mides provant números fins que s'assembla al que vol.|Cambia tamaños probando números hasta que se parece a lo que quiere."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu obrir la pàgina «El meu dia en caixes» i afegir-hi els moments del cap de setmana. També podeu fer l'activitat dels Raigs X de paper amb una revista o un fullet de propaganda.|En casa, con el móvil, podéis abrir la página «Mi día en cajas» y añadir los momentos del fin de semana. También podéis hacer la actividad de los Rayos X de papel con una revista o un folleto de propaganda.",
    slides: [
      { id: 's1', k: 'portada', t: "Tot és una caixa|Todo es una caja", x: "Avui aprendrem a veure les caixes d'una web i a decidir-ne la mida i el color.|Hoy aprenderemos a ver las cajas de una web y a decidir su tamaño y su color.",
        nota: "Presenta l'objectiu: al final, cadascú tindrà el seu dia dibuixat en caixes.|Presenta el objetivo: al final, cada uno tendrá su día dibujado en cajas." },
      { id: 's2', k: 'pregunta', t: "Quantes caixes hi veus?|¿Cuántas cajas ves?", x: "Penseu en la pantalla d'una app de missatges. Quants rectangles hi ha?|Pensad en la pantalla de una app de mensajes. ¿Cuántos rectángulos hay?",
        nota: "Deixa que comptin: missatges, botons, fotos de perfil, la barra d'escriure… Tot són caixes.|Deja que cuenten: mensajes, botones, fotos de perfil, la barra de escribir… Todo son cajas." },
      { id: 's3', k: 'repas', t: "Recordem: l'estil.css|Recordemos: el estil.css", x: "El link uneix l'index.html amb l'estil.css.|El link une el index.html con el estil.css.",
        code: '<link rel="stylesheet" href="estil.css">\n\np {\n  color: blue;\n}',
        nota: "Pregunta què passa si falta el link. Tota la unitat treballarà amb les dues pestanyes.|Pregunta qué pasa si falta el link. Toda la unidad trabajará con las dos pestañas." },
      { id: 's4', k: 'anim', t: "Cada element és una caixa|Cada elemento es una caja", anim: 'wbox', x: "Sense fons ni vora no la veiem, però hi és.|Sin fondo ni borde no la vemos, pero está.",
        nota: "Si pots, mostra una web real amb el botó Raigs X de l'editor perquè vegin tots els rectangles.|Si puedes, muestra una web real con el botón Rayos X del editor para que vean todos los rectángulos." },
      { id: 's5', k: 'anim', t: "Bloc o en línia|Bloque o en línea", anim: 'wblock', punts: ["Bloc: línia nova i tota l'amplada (div, p, h1, ul, li).|Bloque: línea nueva y toda la anchura (div, p, h1, ul, li).", "En línia: dins del text (span, b, a, img).|En línea: dentro del texto (span, b, a, img)."],
        nota: "Fes el gest que faran a la pausa: braços oberts per al bloc, enganxats per a l'en línia.|Haz el gesto que harán en la pausa: brazos abiertos para el bloque, pegados para el en línea." },
      { id: 's6', k: 'concepte', t: "La safata i el subratllador|La bandeja y el subrayador", x: "div agrupa (bloc); span destaca dins d'una frase (en línia).|div agrupa (bloque); span destaca dentro de una frase (en línea).",
        code: '<div class="avis">\n  <h2>Avís</h2>\n  <p>Demà no hi ha <span class="verd">classe</span>.</p>\n</div>',
        nota: "Pregunta què passaria si canviéssim el span per un div: la frase es trencaria en tres línies.|Pregunta qué pasaría si cambiáramos el span por un div: la frase se rompería en tres líneas." },
      { id: 's7', k: 'concepte', t: "Classes: grups de caixes|Clases: grupos de cajas", x: "Totes les caixes amb la classe fitxa es pinten amb una sola regla.|Todas las cajas con la clase fitxa se pintan con una sola regla.",
        code: '<div class="fitxa">Gat</div>\n<div class="fitxa">Gos</div>\n<div>Tortuga</div>\n\n.fitxa {\n  background-color: skyblue;\n}',
        nota: "Pregunta per què la tortuga no és blava i què caldria fer perquè ho fos.|Pregunta por qué la tortuga no es azul y qué habría que hacer para que lo fuera." },
      { id: 's8', k: 'concepte', t: "width i height|width y height", x: "Amplada i alçada en píxels. Les caixes en línia no en fan cas.|Anchura y altura en píxeles. Las cajas en línea no les hacen caso.",
        code: '.caixa {\n  background-color: tomato;\n  width: 150px;\n  height: 60px;\n}',
        nota: "Remarca que el número i la unitat van junts i sense espai: 150px.|Remarca que el número y la unidad van juntos y sin espacio: 150px." },
      { id: 's9', k: 'anim', t: "max-width: fins aquí i prou|max-width: hasta aquí y basta", anim: 'wdevice', x: "A l'ordinador no passa del límit; al mòbil s'encongeix.|En el ordenador no pasa del límite; en el móvil se encoge.",
        nota: "Compara-ho amb una porta: per molt que empenyis no passa de cert punt, però sí que es pot tancar.|Compáralo con una puerta: por mucho que empujes no pasa de cierto punto, pero sí se puede cerrar." },
      { id: 's10', k: 'activitat', t: "Raigs X de paper|Rayos X de papel", timer: 8, punts: ["Vermell: caixes de bloc.|Rojo: cajas de bloque.", "Blau: caixes en línia.|Azul: cajas en línea.", "Poseu la targeta d'etiqueta damunt de cada rectangle.|Poned la tarjeta de etiqueta sobre cada rectángulo.", "Acabeu amb la fitxa.|Terminad con la ficha."],
        nota: "Passa per les parelles i demana'ls que et mostrin una caixa que n'agrupi d'altres.|Pasa por las parejas y pídeles que te enseñen una caja que agrupe otras." },
      { id: 's11', k: 'activitat', t: "Com ho decidim?|¿Cómo lo decidimos?", punts: ["Trenca la línia? És de bloc.|¿Rompe la línea? Es de bloque.", "Es queda dins la frase? És en línia.|¿Se queda dentro de la frase? Es en línea.", "N'agrupa d'altres? És un div.|¿Agrupa otras? Es un div."],
        nota: "Deixa-la projectada durant l'activitat sense pantalla.|Déjala proyectada durante la actividad sin pantalla." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Tot és una caixa».|Abre la sesión «Todo es una caja».", "Fes fins al laboratori de caixes.|Haz hasta el laboratorio de cajas.", "Pensa abans de triar.|Piensa antes de elegir.", "Para a la pausa activa.|Para en la pausa activa."],
        nota: "Al pas dels Raigs X de paper, que toquin «Ho hem fet!»: ja l'han fet a classe.|En el paso de los Rayos X de papel, que toquen «¡Lo hemos hecho!»: ya lo han hecho en clase." },
      { id: 's13', k: 'repte', t: "Tres caixes apilades|Tres cajas apiladas", x: "Cada caixa nova necessita la seva regla.|Cada caja nueva necesita su regla.",
        code: '<div class="cap">El meu barri</div>\n<div class="cos">…</div>\n<div class="peu">…</div>\n\n.cos {\n  background-color: #EEF7F1;\n  height: 150px;\n}',
        nota: "Escriviu junts la regla del cos i deixa que facin la del peu sols.|Escribid juntos la regla del cuerpo y deja que hagan la del pie solos." },
      { id: 's14', k: 'repte', t: "Reptes de caixes|Retos de cajas", timer: 13, punts: ["1. Pinta les caixes del matí.|1. Pinta las cajas de la mañana.", "2. Mida dels animals.|2. Tamaño de los animales.", "3. El subratllador.|3. El subrayador.", "4. Tres caixes apilades.|4. Tres cajas apiladas.", "Extra: gràfica de barres.|Extra: gráfico de barras."],
        nota: "Si algú s'encalla, pregunta: quina regla has de tocar i quina propietat hi falta?|Si alguien se atasca, pregunta: ¿qué regla tienes que tocar y qué propiedad falta?" },
      { id: 's15', k: 'activitat', t: "Crea: el meu dia en caixes|Crea: mi día en cajas", timer: 7, x: "Quatre moments del dia, cada un en una caixa de color, dins d'una pàgina amb amplada màxima.|Cuatro momentos del día, cada uno en una caja de color, dentro de una página con anchura máxima.",
        nota: "Anima'ls a triar colors que combinin: un color principal i un de suau per al fons.|Anímalos a elegir colores que combinen: un color principal y uno suave para el fondo." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Cada element és una caixa.|Cada elemento es una caja.", "Bloc: tota la fila. En línia: dins del text.|Bloque: toda la fila. En línea: dentro del texto.", "Classe + width, height i max-width.|Clase + width, height y max-width."],
        nota: "Torna a la pregunta de l'app de missatges: ara ja saben de quines caixes està feta.|Vuelve a la pregunta de la app de mensajes: ahora ya saben de qué cajas está hecha." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Una caixa de bloc i una en línia.|Una caja de bloque y una en línea.", "width o max-width: quina diferència hi ha?|width o max-width: ¿qué diferencia hay?"],
        nota: "Anota qui confon bloc i en línia: la setmana vinent el model de caixa hi torna.|Anota quién confunde bloque y en línea: la semana que viene el modelo de caja vuelve a ello." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: bloc o en línia?|Ficha: ¿bloque o en línea?", k: 'fitxa',
        intro: "Una fitxa per parella. Responeu sense ordinador; després ho comprovareu a l'app.|Una ficha por pareja. Responded sin ordenador; después lo comprobaréis en la app.",
        items: [
          { q: "Classifica aquestes etiquetes en bloc o en línia: div, span, p, b, h1, a.|Clasifica estas etiquetas en bloque o en línea: div, span, p, b, h1, a.", sol: "Bloc: div, p, h1. En línia: span, b, a.|Bloque: div, p, h1. En línea: span, b, a." },
          { q: "Vols pintar de groc només la paraula «avui» dins d'una frase. Quina etiqueta fas servir?|Quieres pintar de amarillo solo la palabra «avui» dentro de una frase. ¿Qué etiqueta usas?", sol: "Un span amb una classe, per exemple class destacat.|Un span con una clase, por ejemplo class destacat." },
          { q: "Escriu la regla CSS que dona fons verd a totes les caixes amb la classe nota.|Escribe la regla CSS que da fondo verde a todas las cajas con la clase nota.", sol: ".nota { background-color: green; }|.nota { background-color: green; }" },
          { q: "Una caixa té width: 300px. Dibuixa com es veu al costat d'una caixa sense width.|Una caja tiene width: 300px. Dibuja cómo se ve al lado de una caja sin width.", sol: "La caixa sense width ocupa tota la fila; la de 300px és més curta i comença a l'esquerra.|La caja sin width ocupa toda la fila; la de 300px es más corta y empieza a la izquierda." },
          { q: "Troba l'error: .caixa { width: 200; }|Encuentra el error: .caixa { width: 200; }", sol: "Falta la unitat: width: 200px;|Falta la unidad: width: 200px;" }
        ] },
      { id: 'p2', t: "Targetes d'etiquetes|Tarjetas de etiquetas", k: 'targetes',
        intro: "Un paquet per parella. Retalleu-les i poseu cada targeta damunt del rectangle del diari que hi correspongui.|Un paquete por pareja. Recortadlas y poned cada tarjeta sobre el rectángulo del periódico que le corresponda.",
        items: [
          { t: "h1 (bloc)|h1 (bloque)", n: 1 },
          { t: "p (bloc)|p (bloque)", n: 3 },
          { t: "div (bloc que agrupa)|div (bloque que agrupa)", n: 2 },
          { t: "img (en línia)|img (en línea)", n: 2 },
          { t: "span (en línia)|span (en línea)", n: 3 },
          { t: "b (en línia)|b (en línea)", n: 2 }
        ] }
    ]
  },

  /* ===== w5-2 · Marges i farciment ===== */
  'w5-2': {
    obj: [
      "L'alumne/a identifica les quatre capes del model de caixa: contingut, farciment, vora i marge.|El alumno/a identifica las cuatro capas del modelo de caja: contenido, relleno, borde y margen.",
      "L'alumne/a tria padding per a l'espai de dins i margin per a l'espai entre caixes.|El alumno/a elige padding para el espacio de dentro y margin para el espacio entre cajas.",
      "L'alumne/a escriu les abreujades de 1, 2 i 4 valors i centra una caixa amb margin 0 auto.|El alumno/a escribe las abreviadas de 1, 2 y 4 valores y centra una caja con margin 0 auto.",
      "L'alumne/a calcula l'amplada total d'una caixa sumant amplada, farciment i vora.|El alumno/a calcula la anchura total de una caja sumando anchura, relleno y borde."
    ],
    comp: [
      "Competència digital (CD3): crear i editar contingut digital amb HTML i CSS|Competencia digital (CD3): crear y editar contenido digital con HTML y CSS",
      "Matemàtiques: sumes de mesures, càlcul d'amplades i simetria|Matemáticas: sumas de medidas, cálculo de anchuras y simetría",
      "Pensament computacional: abstracció d'un model (la caixa en capes)|Pensamiento computacional: abstracción de un modelo (la caja en capas)"
    ],
    vocab: [
      ["Farciment (padding)|Relleno (padding)", "Espai de dins de la caixa, entre el contingut i la vora. Agafa el color de fons.|Espacio dentro de la caja, entre el contenido y el borde. Coge el color de fondo."],
      ["Marge (margin)|Margen (margin)", "Espai de fora de la caixa, transparent, que la separa de les altres.|Espacio fuera de la caja, transparente, que la separa de las demás."],
      ["Vora (border)|Borde (border)", "La línia que envolta la caixa, entre el farciment i el marge.|La línea que rodea la caja, entre el relleno y el margen."],
      ["Abreujada|Abreviada", "Una propietat que en resumeix diverses, com padding per als quatre costats.|Una propiedad que resume varias, como padding para los cuatro lados."],
      ["Model de caixa|Modelo de caja", "La manera com el navegador calcula cada caixa: contingut, farciment, vora i marge.|La manera en que el navegador calcula cada caja: contenido, relleno, borde y margen."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Marges i farciment»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Márgenes y relleno»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per parella: un full blanc, un full de color, un regle, tisores, cola i un retolador gruixut|Por pareja: una hoja blanca, una hoja de color, una regla, tijeras, pegamento y un rotulador grueso"
      ],
      imprimir: ["Fitxa: matemàtiques de caixes|Ficha: matemáticas de cajas"],
      prep: [
        "Preparar un quadre de paper d'exemple (dibuix, cartró de color, vora de retolador) per ensenyar-lo a la teoria.|Preparar un cuadro de papel de ejemplo (dibujo, cartón de color, borde de rotulador) para enseñarlo en la teoría.",
        "Imprimir una fitxa de matemàtiques de caixes per alumne/a.|Imprimir una ficha de matemáticas de cajas por alumno/a.",
        "Provar el model de caixa interactiu de l'app per saber com es mouen els controls.|Probar el modelo de caja interactivo de la app para saber cómo se mueven los controles."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: deixa respirar|Bienvenida: deja respirar", fase: 'inici',
        fa: "Repassa div i span amb una pregunta ràpida. Després projecta la pregunta de les dues caixes i deixa que diguin quina es llegeix millor i per què. Presenta la idea del dia: l'espai buit també es dissenya.|Repasa div y span con una pregunta rápida. Después proyecta la pregunta de las dos cajas y deja que digan cuál se lee mejor y por qué. Presenta la idea del día: el espacio vacío también se diseña.",
        diu: ["Quina etiqueta agrupa i quina destaca dins d'una frase?|¿Qué etiqueta agrupa y cuál destaca dentro de una frase?",
          "Quina de les dues caixes us fa més ganes de llegir?|¿Cuál de las dos cajas os da más ganas de leer?",
          "Avui aprendreu a controlar l'espai al píxel.|Hoy aprenderéis a controlar el espacio al píxel."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 13, t: "El model de caixa|El modelo de caja", fase: 'teoria',
        fa: "Explica les quatre capes amb l'animació i el quadre de paper d'exemple a la mà. Mostra el codi del farciment i del marge i fes notar que el fons només omple el farciment. Explica les abreujades amb el rellotge, el truc de margin 0 auto i fes el càlcul de l'amplada total a la pissarra. Acaba amb la pregunta del càlcul perquè la resolguin sols.|Explica las cuatro capas con la animación y el cuadro de papel de ejemplo en la mano. Muestra el código del relleno y del margen y haz notar que el fondo solo llena el relleno. Explica las abreviadas con el reloj, el truco de margin 0 auto y haz el cálculo de la anchura total en la pizarra. Termina con la pregunta del cálculo para que la resuelvan solos.",
        diu: ["La foto és el contingut, el cartró el farciment, el marc la vora i l'espai fins a la paret el marge.|La foto es el contenido, el cartón el relleno, el marco el borde y el espacio hasta la pared el margen.",
          "Amb quatre valors, comenceu a les dotze i seguiu les agulles del rellotge.|Con cuatro valores, empezad a las doce y seguid las agujas del reloj.",
          "Per què margin auto no fa res si la caixa no té amplada?|¿Por qué margin auto no hace nada si la caja no tiene anchura?",
          "Quant fa de debò una caixa de 200 amb 20 de farciment i 5 de vora?|¿Cuánto mide de verdad una caja de 200 con 20 de relleno y 5 de borde?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9', 's10'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El quadre de paper|El cuadro de papel", fase: 'desconnectat',
        fa: "Per parelles construeixen el quadre capa a capa amb les mides de la diapositiva: dibuix de 6 cm, 2 cm de farciment, 0,5 cm de vora i 3 cm de marge. Calculen l'amplada total i la comproven amb el regle. Els qui acabin comencen la fitxa de matemàtiques de caixes.|Por parejas construyen el cuadro capa a capa con las medidas de la diapositiva: dibujo de 6 cm, 2 cm de relleno, 0,5 cm de borde y 3 cm de margen. Calculan la anchura total y la comprueban con la regla. Quienes terminen empiezan la ficha de matemáticas de cajas.",
        diu: ["Quina capa té el color del fons?|¿Qué capa tiene el color del fondo?",
          "Quant us dona la suma? I el regle?|¿Cuánto os da la suma? ¿Y la regla?",
          "Escriviu el nom CSS al costat de cada capa.|Escribid el nombre CSS al lado de cada capa."],
        slides: ['s11'], app: "Cap: activitat sense pantalla (al pas «Mans a l'obra» toquen «Ho hem fet!»).|Ninguna: actividad sin pantalla (en el paso «Manos a la obra» tocan «¡Lo hemos hecho!»).", org: "Parelles|Parejas" },
      { min: 12, t: "A l'ordinador: el model de caixa interactiu|En el ordenador: el modelo de caja interactivo", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a l'error del marge. Al primer model de caixa, deixa'ls explorar lliurement; al segon (la missió de precisió) demana que diguin l'amplada total abans de comprovar-la. A l'error, pregunta quina capa volíem canviar.|Cada alumno/a avanza hasta el error del margen. En el primer modelo de caja, déjalos explorar libremente; en el segundo (la misión de precisión) pide que digan la anchura total antes de comprobarla. En el error, pregunta qué capa queríamos cambiar.",
        diu: ["Mou només el marge: canvia la mida de la caixa de color?|Mueve solo el margen: ¿cambia el tamaño de la caja de color?",
          "Si el contingut fa 100, quant fa amb 20 de farciment i 5 de vora?|Si el contenido mide 100, ¿cuánto mide con 20 de relleno y 5 de borde?",
          "El text volia espai dins o fora del fons groc?|¿El texto quería espacio dentro o fuera del fondo amarillo?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, la missió, les 7 targetes de «Descobreix», «El quadre de paper» (ja fet), el model de caixa per explorar, les dues caixes a predir, la missió de precisió i l'error del marge.|De «Recuerda» hasta «Investiga»: las preguntas de repaso, la misión, las 7 tarjetas de «Descubre», «El cuadro de papel» (ya hecho), el modelo de caja para explorar, las dos cajas a predecir, la misión de precisión y el error del margen.", org: "Individual|Individual" },
      { min: 12, t: "Pausa activa i reptes|Pausa activa y retos", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Explica breument la sorpresa dels marges verticals que es fusionen, que trobaran als reptes. Després, deixa'ls fer els quatre reptes; el càlcul de 300 píxels és el repte extra.|Haced la pausa activa juntos. Explica brevemente la sorpresa de los márgenes verticales que se fusionan, que encontrarán en los retos. Después, deja que hagan los cuatro retos; el cálculo de 300 píxeles es el reto extra.",
        diu: ["Abraçada sense farciment, braços oberts amb farciment, un pas al costat és marge!|¡Abrazo sin relleno, brazos abiertos con relleno, un paso al lado es margen!",
          "Al botó, quin número va primer: el de dalt i baix o el dels costats?|En el botón, ¿qué número va primero: el de arriba y abajo o el de los lados?",
          "Per centrar la targeta, què ha de tenir abans que els marges auto?|Para centrar la tarjeta, ¿qué tiene que tener antes que los márgenes auto?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i «Reptes»: farciment a les notes, marge entre notes, el botó girat, la targeta centrada i el repte extra de la caixa de 300px.|«Pausa activa» y «Retos»: relleno en las notas, margen entre notas, el botón girado, la tarjeta centrada y el reto extra de la caja de 300px.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: la meva agenda|Crea: mi agenda", fase: 'crea',
        fa: "Cada alumne/a fa la seva agenda de la setmana: una pàgina centrada amb caixes de dies ben espaiades. Anima'ls a provar la vista de mòbil.|Cada alumno/a hace su agenda de la semana: una página centrada con cajas de días bien espaciadas. Anímalos a probar la vista de móvil.",
        diu: ["Els dies respiren? El text toca la vora?|¿Los días respiran? ¿El texto toca el borde?",
          "Estireu i encongiu la pantalla: l'agenda continua centrada?|Estirad y encoged la pantalla: ¿la agenda sigue centrada?"],
        slides: ['s15'], app: "Pas «Crea»: La meva agenda de la setmana.|Paso «Crea»: Mi agenda de la semana.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa fer les preguntes finals i fes les preguntes del tiquet a la porta.|Repasa el resumen, deja hacer las preguntas finales y haz las preguntas del ticket en la puerta.",
        diu: ["Padding o margin: quin és el de dins?|Padding o margin: ¿cuál es el de dentro?",
          "Com centreu una caixa?|¿Cómo centráis una caja?"],
        slides: ['s16', 's17'], app: "«Tancament»: dues preguntes i com m'he sentit.|«Cierre»: dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir margin per separar el text de la vora i no entén per què el fons no creix.|Usa margin para separar el texto del borde y no entiende por qué el fondo no crece.",
        "Torna al quadre de paper: el cartró de color (farciment) és dins del marc; l'espai fins a la paret (marge) és fora.|Vuelve al cuadro de papel: el cartón de color (relleno) está dentro del marco; el espacio hasta la pared (margen) está fuera."],
      ["Escriu margin 0 auto però la caixa no es mou.|Escribe margin 0 auto pero la caja no se mueve.",
        "Pregunta quant fa d'ample la caixa. Si ocupa tota la fila, no hi ha espai per repartir: primer cal width o max-width.|Pregunta cuánto mide de ancho la caja. Si ocupa toda la fila, no hay espacio para repartir: primero hace falta width o max-width."],
      ["Confon l'ordre dels valors de l'abreujada (posa els costats primer).|Confunde el orden de los valores de la abreviada (pone los lados primero).",
        "Que assenyali amb el dit les dotze del rellotge i segueixi les agulles: dalt, dreta, baix, esquerra.|Que señale con el dedo las doce del reloj y siga las agujas: arriba, derecha, abajo, izquierda."],
      ["Al càlcul de l'amplada total només suma un costat del farciment o de la vora.|En el cálculo de la anchura total solo suma un lado del relleno o del borde.",
        "Que ho dibuixi: la caixa té farciment a l'esquerra i a la dreta, i vora a l'esquerra i a la dreta.|Que lo dibuje: la caja tiene relleno a la izquierda y a la derecha, y borde a la izquierda y a la derecha."],
      ["Espera que dos marges verticals de 20 sumin 40.|Espera que dos márgenes verticales de 20 sumen 40.",
        "Ensenya-li la targeta de la sorpresa: els marges verticals es fusionen i guanya el més gran. No és un error seu.|Enséñale la tarjeta de la sorpresa: los márgenes verticales se fusionan y gana el más grande. No es un error suyo."]
    ],
    diff: {
      mes: "Fer el repte extra dels 300 píxels i provar box-sizing: border-box per veure com canvia el càlcul. Després, donar a cada dia de l'agenda marges diferents amb quatre valors per crear un efecte d'escala.|Hacer el reto extra de los 300 píxeles y probar box-sizing: border-box para ver cómo cambia el cálculo. Después, dar a cada día de la agenda márgenes diferentes con cuatro valores para crear un efecto de escalera.",
      menys: "Tenir el quadre de paper a la taula com a xuleta, amb el nom de cada capa escrit. Fer servir només abreujades d'un valor (padding: 15px) fins que se sentin segurs, i al càlcul fer servir la fitxa amb el dibuix.|Tener el cuadro de papel en la mesa como chuleta, con el nombre de cada capa escrito. Usar solo abreviadas de un valor (padding: 15px) hasta que se sientan seguros, y en el cálculo usar la ficha con el dibujo."
    },
    aval: {
      ticket: ["Quin és l'espai de dins i quin el de fora: padding o margin?|¿Cuál es el espacio de dentro y cuál el de fuera: padding o margin?",
        "Què cal perquè margin 0 auto centri una caixa?|¿Qué hace falta para que margin 0 auto centre una caja?"],
      rubric: [
        ["Farciment i marge|Relleno y margen", "Tria padding o margin segons si vol espai dins o fora, i ho explica.|Elige padding o margin según si quiere espacio dentro o fuera, y lo explica.", "Els fa servir tots dos, però de vegades els intercanvia.|Usa los dos, pero a veces los intercambia."],
        ["Abreujades|Abreviadas", "Escriu abreujades de 1, 2 i 4 valors en l'ordre correcte.|Escribe abreviadas de 1, 2 y 4 valores en el orden correcto.", "Fa servir l'abreujada d'un valor, però s'embolica amb l'ordre de dos o quatre.|Usa la abreviada de un valor, pero se lía con el orden de dos o cuatro."],
        ["Centrar|Centrar", "Combina width o max-width amb margin auto i la caixa queda centrada.|Combina width o max-width con margin auto y la caja queda centrada.", "Escriu margin auto, però oblida l'amplada.|Escribe margin auto, pero olvida la anchura."],
        ["Amplada total|Anchura total", "Calcula l'amplada total sumant farciment i vora dels dos costats.|Calcula la anchura total sumando relleno y borde de los dos lados.", "Fa el càlcul amb ajuda o oblida un dels costats.|Hace el cálculo con ayuda u olvida uno de los lados."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu completar l'agenda amb tots els dies de la setmana. També podeu buscar marcs i quadres de casa i dir quina part és el farciment, la vora i el marge.|En casa, con el móvil, podéis completar la agenda con todos los días de la semana. También podéis buscar marcos y cuadros de casa y decir qué parte es el relleno, el borde y el margen.",
    slides: [
      { id: 's1', k: 'portada', t: "Marges i farciment|Márgenes y relleno", x: "Avui aprendrem a dissenyar l'espai: el de dins i el de fora de cada caixa.|Hoy aprenderemos a diseñar el espacio: el de dentro y el de fuera de cada caja.",
        nota: "Ensenya el quadre de paper d'exemple sense explicar-lo encara.|Enseña el cuadro de papel de ejemplo sin explicarlo todavía." },
      { id: 's2', k: 'repas', t: "Recordem: div i span|Recordemos: div y span", punts: ["div: caixa de bloc per agrupar.|div: caja de bloque para agrupar.", "span: caixa en línia per destacar.|span: caja en línea para destacar."],
        nota: "Pregunta ràpida a dos o tres alumnes. Si dubten, fes el gest dels braços.|Pregunta rápida a dos o tres alumnos. Si dudan, haz el gesto de los brazos." },
      { id: 's3', k: 'pregunta', t: "Quina es llegeix millor?|¿Cuál se lee mejor?", x: "Mateix text, mateix color. Què canvia?|Mismo texto, mismo color. ¿Qué cambia?",
        code: '.sense {\n  background-color: #BFF0D4;\n}\n\n.amb {\n  background-color: #BFF0D4;\n  padding: 20px;\n}',
        nota: "Escolta les respostes: l'espai fa que el text respiri. No cal dir encara el nom de la propietat.|Escucha las respuestas: el espacio hace que el texto respire. No hace falta decir todavía el nombre de la propiedad." },
      { id: 's4', k: 'anim', t: "Les quatre capes|Las cuatro capas", anim: 'wbox', x: "Contingut, farciment, vora i marge, de dins cap a fora.|Contenido, relleno, borde y margen, de dentro hacia fuera.",
        nota: "Assenyala cada capa del quadre de paper mentre surt a l'animació.|Señala cada capa del cuadro de papel mientras sale en la animación." },
      { id: 's5', k: 'concepte', t: "padding: l'espai de dins|padding: el espacio de dentro", x: "El fons omple també el farciment.|El fondo llena también el relleno.",
        code: '.amb {\n  background-color: #BFF0D4;\n  padding: 20px;\n}',
        nota: "Fes notar que la caixa es fa més gran: el farciment suma.|Haz notar que la caja se hace más grande: el relleno suma." },
      { id: 's6', k: 'concepte', t: "margin: l'espai de fora|margin: el espacio de fuera", x: "Transparent: separa la caixa de les altres.|Transparente: separa la caja de las demás.",
        code: '.separada {\n  margin: 25px;\n}',
        nota: "Pregunta de quin color és el marge. Resposta: de cap, és transparent.|Pregunta de qué color es el margen. Respuesta: de ninguno, es transparente." },
      { id: 's7', k: 'concepte', t: "Les abreujades del rellotge|Las abreviadas del reloj", punts: ["1 valor: els 4 costats.|1 valor: los 4 lados.", "2 valors: dalt i baix, costats.|2 valores: arriba y abajo, lados.", "4 valors: dalt, dreta, baix, esquerra.|4 valores: arriba, derecha, abajo, izquierda."],
        code: 'padding: 20px;\npadding: 5px 40px;\npadding: 0 0 0 50px;\nmargin-top: 10px;',
        nota: "Dibuixa un rellotge a la pissarra i marca l'ordre amb fletxes.|Dibuja un reloj en la pizarra y marca el orden con flechas." },
      { id: 's8', k: 'concepte', t: "Centrar amb auto|Centrar con auto", x: "Amb amplada, auto reparteix l'espai que sobra a parts iguals.|Con anchura, auto reparte el espacio que sobra a partes iguales.",
        code: '.targeta {\n  width: 200px;\n  margin: 0 auto;\n}',
        nota: "Pregunta què passaria sense width: res, la caixa ja ocupa tota la fila.|Pregunta qué pasaría sin width: nada, la caja ya ocupa toda la fila." },
      { id: 's9', k: 'concepte', t: "Quant fa de debò?|¿Cuánto mide de verdad?", x: "200 + 20 + 20 + 5 + 5 = 250 píxels.|200 + 20 + 20 + 5 + 5 = 250 píxeles.",
        code: '.caixa {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid #1FA463;\n}',
        nota: "Fes la suma a la pissarra pintant els dos costats de cada capa.|Haz la suma en la pizarra pintando los dos lados de cada capa." },
      { id: 's10', k: 'pregunta', t: "Calcula-ho tu|Calcúlalo tú", x: "width 100, padding 10 i vora de 2. Quant fa en total?|width 100, padding 10 y borde de 2. ¿Cuánto mide en total?",
        nota: "Resposta: 124. Si algú diu 112, pregunta-li per quants costats ha comptat.|Respuesta: 124. Si alguien dice 112, pregúntale por cuántos lados ha contado." },
      { id: 's11', k: 'activitat', t: "El quadre de paper|El cuadro de papel", timer: 8, punts: ["Dibuix de 6 cm: contingut.|Dibujo de 6 cm: contenido.", "2 cm de color: farciment.|2 cm de color: relleno.", "Retolador de 0,5 cm: vora.|Rotulador de 0,5 cm: borde.", "3 cm fins al veí: marge.|3 cm hasta el vecino: margen."],
        nota: "Total esperat: 11 cm. Qui acabi, a la fitxa de matemàtiques de caixes.|Total esperado: 11 cm. Quien termine, a la ficha de matemáticas de cajas." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Marges i farciment».|Abre la sesión «Márgenes y relleno».", "Explora el model de caixa.|Explora el modelo de caja.", "Fes la missió de precisió.|Haz la misión de precisión.", "Para a la pausa activa.|Para en la pausa activa."],
        nota: "Abans de comprovar la missió de precisió, que diguin el total en veu alta.|Antes de comprobar la misión de precisión, que digan el total en voz alta." },
      { id: 's13', k: 'concepte', t: "Sorpresa: marges que es fusionen|Sorpresa: márgenes que se fusionan", x: "Dos marges verticals de 20 donen 20, no 40.|Dos márgenes verticales de 20 dan 20, no 40.",
        code: '.m {\n  margin: 20px 0;\n}',
        nota: "No cal aprofundir-hi: és perquè no s'estranyin si ho veuen als reptes.|No hace falta profundizar: es para que no se extrañen si lo ven en los retos." },
      { id: 's14', k: 'repte', t: "Reptes d'espais|Retos de espacios", timer: 12, punts: ["1. Farciment a les notes.|1. Relleno en las notas.", "2. Marge entre notes.|2. Margen entre notas.", "3. El botó girat.|3. El botón girado.", "4. La targeta centrada.|4. La tarjeta centrada.", "Extra: la caixa de 300px.|Extra: la caja de 300px."],
        code: '.boto {\n  padding: 10px 30px;\n}',
        nota: "Al repte 3 només han de girar els dos números. Al 4, primer amplada i després auto.|En el reto 3 solo tienen que girar los dos números. En el 4, primero anchura y después auto." },
      { id: 's15', k: 'activitat', t: "Crea: la meva agenda|Crea: mi agenda", timer: 7, x: "Pàgina centrada amb una caixa per dia, amb farciment i marge.|Página centrada con una caja por día, con relleno y margen.",
        nota: "Valora que l'espaiat sigui regular: el mateix farciment i el mateix marge a tots els dies.|Valora que el espaciado sea regular: el mismo relleno y el mismo margen en todos los días." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["padding: dins. margin: fora.|padding: dentro. margin: fuera.", "1, 2 o 4 valors, com el rellotge.|1, 2 o 4 valores, como el reloj.", "Amplada + margin auto = centrat.|Anchura + margin auto = centrado."],
        nota: "Torna a la pregunta de l'inici: ara saben que la diferència era el farciment.|Vuelve a la pregunta del inicio: ahora saben que la diferencia era el relleno." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["padding o margin: quin és el de dins?|padding o margin: ¿cuál es el de dentro?", "Què cal per centrar amb margin auto?|¿Qué hace falta para centrar con margin auto?"],
        nota: "Anota qui confon padding i margin per repassar-ho a l'inici de la sessió vinent.|Anota quién confunde padding y margin para repasarlo al inicio de la próxima sesión." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: matemàtiques de caixes|Ficha: matemáticas de cajas", k: 'fitxa',
        intro: "Una fitxa per alumne/a. Dibuixa la caixa si t'ajuda: recorda que el farciment i la vora compten pels dos costats.|Una ficha por alumno/a. Dibuja la caja si te ayuda: recuerda que el relleno y el borde cuentan por los dos lados.",
        items: [
          { q: "width: 200px, padding: 10px, border: 5px. Quant fa d'ample en total?|width: 200px, padding: 10px, border: 5px. ¿Cuánto mide de ancho en total?", sol: "200 + 10 + 10 + 5 + 5 = 230px.|200 + 10 + 10 + 5 + 5 = 230px." },
          { q: "Vols una caixa de 300px en total amb padding de 20px i border de 5px. Quin width hi poses?|Quieres una caja de 300px en total con padding de 20px y border de 5px. ¿Qué width le pones?", sol: "300 − 40 − 10 = 250px.|300 − 40 − 10 = 250px." },
          { q: "Què vol dir padding: 5px 15px?|¿Qué significa padding: 5px 15px?", sol: "5px a dalt i a baix, 15px a dreta i esquerra.|5px arriba y abajo, 15px a derecha e izquierda." },
          { q: "Escriu amb una sola línia: marge de 10px a dalt, 0 a la dreta, 20px a baix i 0 a l'esquerra.|Escribe en una sola línea: margen de 10px arriba, 0 a la derecha, 20px abajo y 0 a la izquierda.", sol: "margin: 10px 0 20px 0;|margin: 10px 0 20px 0;" },
          { q: "Una caixa té margin: 0 auto però no es centra. Què hi falta?|Una caja tiene margin: 0 auto pero no se centra. ¿Qué le falta?", sol: "Una amplada: width o max-width.|Una anchura: width o max-width." },
          { q: "Dos paràgrafs tenen margin: 20px 0. Quin espai hi ha entre tots dos?|Dos párrafos tienen margin: 20px 0. ¿Qué espacio hay entre los dos?", sol: "20px: els marges verticals es fusionen.|20px: los márgenes verticales se fusionan." }
        ] }
    ]
  },

  /* ===== w5-3 · Vores i ombres ===== */
  'w5-3': {
    obj: [
      "L'alumne/a escriu una vora amb gruix, estil i color, i sap que sense estil no es veu.|El alumno/a escribe un borde con grosor, estilo y color, y sabe que sin estilo no se ve.",
      "L'alumne/a arrodoneix cantonades amb border-radius i fa un cercle amb 50% en una caixa quadrada.|El alumno/a redondea esquinas con border-radius y hace un círculo con 50% en una caja cuadrada.",
      "L'alumne/a afegeix ombres a caixes i textos i n'explica els valors (x, y, difuminat, color).|El alumno/a añade sombras a cajas y textos y explica sus valores (x, y, difuminado, color).",
      "L'alumne/a aplica un estil coherent i discret a tota una pàgina.|El alumno/a aplica un estilo coherente y discreto a toda una página."
    ],
    comp: [
      "Competència digital (CD3): crear contingut digital amb HTML i CSS|Competencia digital (CD3): crear contenido digital con HTML y CSS",
      "Educació visual i plàstica: llum i ombra, formes geomètriques i equilibri|Educación visual y plástica: luz y sombra, formas geométricas y equilibrio",
      "Matemàtiques: quadrat, cercle, radi i percentatges|Matemáticas: cuadrado, círculo, radio y porcentajes"
    ],
    vocab: [
      ["Vora (border)|Borde (border)", "Línia al voltant de la caixa; necessita gruix, estil i color.|Línea alrededor de la caja; necesita grosor, estilo y color."],
      ["Radi (border-radius)|Radio (border-radius)", "Com de rodones són les cantonades; amb 50% en un quadrat surt un cercle.|Cómo de redondas son las esquinas; con 50% en un cuadrado sale un círculo."],
      ["Ombra de caixa (box-shadow)|Sombra de caja (box-shadow)", "Ombra que fa la caixa: desplaçament x, y, difuminat i color.|Sombra que hace la caja: desplazamiento x, y, difuminado y color."],
      ["Ombra de text (text-shadow)|Sombra de texto (text-shadow)", "Ombra que fan les lletres; ideal per a títols.|Sombra que hacen las letras; ideal para títulos."],
      ["Difuminat|Difuminado", "Com de borrosa és l'ombra; amb 0, l'ombra és dura.|Cómo de borrosa es la sombra; con 0, la sombra es dura."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Vores i ombres»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Bordes y sombras»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per parella: cartolina blanca, un full de color fosc, tisores, una moneda i un regle|Por pareja: cartulina blanca, una hoja de color oscuro, tijeras, una moneda y una regla",
        "Una llanterna o el llum del mòbil per mostrar com cau una ombra|Una linterna o la luz del móvil para mostrar cómo cae una sombra"
      ],
      imprimir: ["Fitxa: llegeix el CSS i dibuixa'l|Ficha: lee el CSS y dibújalo"],
      prep: [
        "Retallar una targeta de mostra amb cantonades rodones i una ombra de paper fosc a sota.|Recortar una tarjeta de muestra con esquinas redondas y una sombra de papel oscuro debajo.",
        "Imprimir una fitxa per alumne/a.|Imprimir una ficha por alumno/a.",
        "Provar la llanterna sobre un objecte de la taula per mostrar desplaçament i difuminat de l'ombra.|Probar la linterna sobre un objeto de la mesa para mostrar desplazamiento y difuminado de la sombra."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: els acabats|Bienvenida: los acabados", fase: 'inici',
        fa: "Repassa padding i margin amb una pregunta. Després pregunta què fa que una app sembli professional i porta'ls cap als detalls: fotos rodones, cantonades suaus i ombres.|Repasa padding y margin con una pregunta. Después pregunta qué hace que una app parezca profesional y llévalos hacia los detalles: fotos redondas, esquinas suaves y sombras.",
        diu: ["Quin és l'espai de dins: padding o margin?|¿Cuál es el espacio de dentro: padding o margin?",
          "Mireu les fotos de perfil de qualsevol app: de quina forma són?|Mirad las fotos de perfil de cualquier app: ¿de qué forma son?",
          "Avui aprendreu els acabats que fan servir els dissenyadors.|Hoy aprenderéis los acabados que usan los diseñadores."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Vores, cantonades i ombres|Bordes, esquinas y sombras", fase: 'teoria',
        fa: "Explica la vora amb les seves tres parts i l'error de l'estil oblidat. Mostra els quatre estils i els costats sols. Passa a border-radius i fes la pregunta del rectangle amb 50%. Fes servir la llanterna per explicar el desplaçament i el difuminat abans de mostrar box-shadow i text-shadow. Acaba amb la diapositiva de menys és més.|Explica el borde con sus tres partes y el error del estilo olvidado. Muestra los cuatro estilos y los lados sueltos. Pasa a border-radius y haz la pregunta del rectángulo con 50%. Usa la linterna para explicar el desplazamiento y el difuminado antes de mostrar box-shadow y text-shadow. Termina con la diapositiva de menos es más.",
        diu: ["Gruix, estil i color: sense l'estil, la vora no es dibuixa.|Grosor, estilo y color: sin el estilo, el borde no se dibuja.",
          "Si poso 50% a un rectangle, surt un cercle?|Si pongo 50% a un rectángulo, ¿sale un círculo?",
          "Si moc la llanterna, cap on va l'ombra? I si l'allunyo?|Si muevo la linterna, ¿hacia dónde va la sombra? ¿Y si la alejo?",
          "Quina de les dues targetes sembla d'una app moderna?|¿Cuál de las dos tarjetas parece de una app moderna?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9', 's10'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Targetes que floten|Tarjetas que flotan", fase: 'desconnectat',
        fa: "Per parelles retallen tres targetes: cantonades rectes, cantonades rodones amb una moneda i un cercle. Posen una ombra de paper fosc a sota, la desplacen i mesuren el desplaçament per escriure el box-shadow que hi correspondria. Qui acabi fa la fitxa.|Por parejas recortan tres tarjetas: esquinas rectas, esquinas redondas con una moneda y un círculo. Ponen una sombra de papel oscuro debajo, la desplazan y miden el desplazamiento para escribir el box-shadow que le correspondería. Quien termine hace la ficha.",
        diu: ["La moneda fa de radi: com més gran la moneda, més rodona la cantonada.|La moneda hace de radio: cuanto más grande la moneda, más redonda la esquina.",
          "Si moveu l'ombra cap avall, quin número de box-shadow canvia?|Si movéis la sombra hacia abajo, ¿qué número de box-shadow cambia?",
          "L'ombra de paper té difuminat? Quin número li posaríeu?|¿La sombra de papel tiene difuminado? ¿Qué número le pondríais?"],
        slides: ['s11'], app: "Cap: activitat sense pantalla (al pas «Mans a l'obra» toquen «Ho hem fet!»).|Ninguna: actividad sin pantalla (en el paso «Manos a la obra» tocan «¡Lo hemos hecho!»).", org: "Parelles|Parejas" },
      { min: 12, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança fins al laboratori d'acabats. Al laboratori, proposa reptes ràpids en veu alta: ombra cap amunt, ombra sense difuminat, cantonades molt rodones.|Cada alumno/a avanza hasta el laboratorio de acabados. En el laboratorio, propón retos rápidos en voz alta: sombra hacia arriba, sombra sin difuminado, esquinas muy redondas.",
        diu: ["Quin número faries negatiu perquè l'ombra anés cap amunt?|¿Qué número harías negativo para que la sombra fuera hacia arriba?",
          "Al codi de la vora vermella, què hi falta?|En el código del borde rojo, ¿qué falta?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, la missió, les 7 targetes de «Descobreix», «Targetes que floten» (ja fet), el gat rodó, la targeta que flota, l'error de la vora i el laboratori d'acabats.|De «Recuerda» hasta «Investiga»: las preguntas de repaso, la misión, las 7 tarjetas de «Descubre», «Tarjetas que flotan» (ya hecho), el gato redondo, la tarjeta que flota, el error del borde y el laboratorio de acabados.", org: "Individual|Individual" },
      { min: 13, t: "Pausa activa i reptes|Pausa activa y retos", fase: 'ordinador',
        fa: "Feu la pausa activa. Projecta el repte de l'avatar i pregunta quins dos números han de ser iguals. Després, deixa'ls fer els quatre reptes; el botó retro és el repte extra.|Haced la pausa activa. Proyecta el reto del avatar y pregunta qué dos números tienen que ser iguales. Después, deja que hagan los cuatro retos; el botón retro es el reto extra.",
        diu: ["Quadrat, quadrat rodó, cercle: dibuixeu-los a l'aire!|Cuadrado, cuadrado redondo, círculo: ¡dibujadlos en el aire!",
          "Un cercle només surt d'un quadrat: quins números han de coincidir?|Un círculo solo sale de un cuadrado: ¿qué números tienen que coincidir?",
          "Ombra suau o ombra dura? Quin número ho decideix?|¿Sombra suave o sombra dura? ¿Qué número lo decide?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i «Reptes»: la vora de la mascota, les cantonades d'en Rufus, l'avatar rodó, la targeta que flota i el repte extra del botó retro.|«Pausa activa» y «Retos»: el borde de la mascota, las esquinas de Rufus, el avatar redondo, la tarjeta que flota y el reto extra del botón retro.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: la meva col·lecció d'insígnies|Crea: mi colección de insignias", fase: 'crea',
        fa: "Cada alumne/a crea una pàgina amb almenys tres insígnies rodones d'assoliments propis. Recorda que totes han de compartir el mateix estil.|Cada alumno/a crea una página con al menos tres insignias redondas de logros propios. Recuerda que todas tienen que compartir el mismo estilo.",
        diu: ["Quines insígnies us mereixeu aquest curs?|¿Qué insignias os merecéis este curso?",
          "Totes tenen la mateixa vora i la mateixa ombra? Així semblen d'una col·lecció.|¿Todas tienen el mismo borde y la misma sombra? Así parecen de una colección."],
        slides: ['s15'], app: "Pas «Crea»: La meva col·lecció d'insígnies.|Paso «Crea»: Mi colección de insignias.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa fer les preguntes finals de l'app i fes el tiquet a la porta.|Repasa el resumen, deja hacer las preguntas finales de la app y haz el ticket en la puerta.",
        diu: ["Quines tres coses porta una vora?|¿Qué tres cosas lleva un borde?",
          "Com es fa una foto de perfil rodona?|¿Cómo se hace una foto de perfil redonda?"],
        slides: ['s16', 's17'], app: "«Tancament»: dues preguntes i com m'he sentit.|«Cierre»: dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu la vora sense estil (border: 3px red) i no es veu res.|Escribe el borde sin estilo (border: 3px red) y no se ve nada.",
        "Pregunta-li com ha de ser la línia: contínua, de ratlles o de punts? Aquesta paraula és l'estil que hi falta.|Pregúntale cómo tiene que ser la línea: ¿continua, de rayas o de puntos? Esa palabra es el estilo que falta."],
      ["Posa border-radius: 50% a una imatge rectangular i surt un ou.|Pone border-radius: 50% a una imagen rectangular y sale un huevo.",
        "Que compari width i height. Un cercle només surt d'un quadrat: han de tenir el mateix número.|Que compare width y height. Un círculo solo sale de un cuadrado: tienen que tener el mismo número."],
      ["Barreja l'ordre dels valors de l'ombra i posa el color al mig.|Mezcla el orden de los valores de la sombra y pone el color en medio.",
        "Recorda la llanterna: primer cap on es mou (x, y), després com de borrosa és i, al final, el color.|Recuerda la linterna: primero hacia dónde se mueve (x, y), después cómo de borrosa es y, al final, el color."],
      ["Fa servir text-shadow per fer flotar una caixa.|Usa text-shadow para hacer flotar una caja.",
        "Pregunta qui fa l'ombra: les lletres o la caixa sencera? Box vol dir caixa.|Pregunta quién hace la sombra: ¿las letras o la caja entera? Box significa caja."],
      ["Posa vores gruixudes, ombres fortes i colors diferents a cada caixa.|Pone bordes gruesos, sombras fuertes y colores diferentes en cada caja.",
        "No és un error de codi. Mostra la diapositiva de menys és més i proposa-li triar un sol estil i repetir-lo.|No es un error de código. Muestra la diapositiva de menos es más y propónle elegir un solo estilo y repetirlo."]
    ],
    diff: {
      mes: "Fer el botó retro del repte extra i provar una ombra doble separant dos valors amb una coma. Després, afegir a les insígnies una vora de color diferent segons si l'assoliment ja està aconseguit o encara és un objectiu.|Hacer el botón retro del reto extra y probar una sombra doble separando dos valores con una coma. Después, añadir a las insignias un borde de color diferente según si el logro ya está conseguido o todavía es un objetivo.",
      menys: "Tenir a la vista una xuleta amb tres línies per copiar i modificar (vora, radi i ombra). Fer primer els reptes 1 i 3 i, a la pàgina final, començar amb dues insígnies.|Tener a la vista una chuleta con tres líneas para copiar y modificar (borde, radio y sombra). Hacer primero los retos 1 y 3 y, en la página final, empezar con dos insignias."
    },
    aval: {
      ticket: ["Quines tres coses porta la propietat border?|¿Qué tres cosas lleva la propiedad border?",
        "Què cal perquè border-radius: 50% faci un cercle?|¿Qué hace falta para que border-radius: 50% haga un círculo?"],
      rubric: [
        ["Vores|Bordes", "Escriu vores amb gruix, estil i color, i fa servir costats sols quan cal.|Escribe bordes con grosor, estilo y color, y usa lados sueltos cuando hace falta.", "Escriu vores, però de vegades oblida l'estil.|Escribe bordes, pero a veces olvida el estilo."],
        ["Cantonades i cercles|Esquinas y círculos", "Arrodoneix cantonades i fa cercles a partir de caixes quadrades.|Redondea esquinas y hace círculos a partir de cajas cuadradas.", "Fa servir border-radius, però el cercle li surt ovalat.|Usa border-radius, pero el círculo le sale ovalado."],
        ["Ombres|Sombras", "Fa ombres de caixa i de text i explica què fa cada valor.|Hace sombras de caja y de texto y explica qué hace cada valor.", "Copia ombres que funcionen, però encara no sap canviar-ne els valors amb intenció.|Copia sombras que funcionan, pero todavía no sabe cambiar sus valores con intención."],
        ["Estil coherent|Estilo coherente", "Repeteix el mateix radi i la mateixa ombra a tota la pàgina.|Repite el mismo radio y la misma sombra en toda la página.", "Cada caixa té un estil diferent.|Cada caja tiene un estilo diferente."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu afegir insígnies noves a la col·lecció. També podeu fer l'experiment de la llanterna: moveu un llum al voltant d'un objecte i mireu com canvia l'ombra.|En casa, con el móvil, podéis añadir insignias nuevas a la colección. También podéis hacer el experimento de la linterna: moved una luz alrededor de un objeto y mirad cómo cambia la sombra.",
    slides: [
      { id: 's1', k: 'portada', t: "Vores i ombres|Bordes y sombras", x: "Avui aprendrem els acabats que fan que una pàgina sembli professional.|Hoy aprenderemos los acabados que hacen que una página parezca profesional.",
        nota: "Ensenya la targeta de mostra de paper amb cantonades rodones i ombra.|Enseña la tarjeta de muestra de papel con esquinas redondas y sombra." },
      { id: 's2', k: 'pregunta', t: "Per què sembla professional?|¿Por qué parece profesional?", punts: ["Fotos de perfil rodones|Fotos de perfil redondas", "Botons amb cantonades suaus|Botones con esquinas suaves", "Targetes que semblen flotar|Tarjetas que parecen flotar"],
        nota: "Deixa que diguin apps que coneixen i detalls que hi veuen.|Deja que digan apps que conocen y detalles que ven en ellas." },
      { id: 's3', k: 'repas', t: "Recordem: dins i fora|Recordemos: dentro y fuera", punts: ["padding: espai de dins.|padding: espacio de dentro.", "margin: espai de fora.|margin: espacio de fuera.", "margin 0 auto: centrar.|margin 0 auto: centrar."],
        nota: "Avui treballem la capa que faltava: la vora.|Hoy trabajamos la capa que faltaba: el borde." },
      { id: 's4', k: 'concepte', t: "La vora: gruix, estil i color|El borde: grosor, estilo y color", x: "Sense l'estil, la vora no es dibuixa.|Sin el estilo, el borde no se dibuja.",
        code: '.caixa {\n  border: 4px solid tomato;\n}',
        nota: "Escriu a la pissarra la versió sense solid i pregunta què passarà.|Escribe en la pizarra la versión sin solid y pregunta qué pasará." },
      { id: 's5', k: 'concepte', t: "Estils i costats|Estilos y lados", punts: ["solid, dashed, dotted, double|solid, dashed, dotted, double", "border-left, border-bottom…|border-left, border-bottom…"],
        code: '.cita {\n  border-left: 6px solid gold;\n}\n\n.cupo {\n  border: 3px dashed gray;\n}',
        nota: "Pregunta on han vist una vora de ratlles: en un cupó per retallar.|Pregunta dónde han visto un borde de rayas: en un cupón para recortar." },
      { id: 's6', k: 'concepte', t: "border-radius|border-radius", x: "Pocs píxels: cantonades suaus. 50% en un quadrat: cercle.|Pocos píxeles: esquinas suaves. 50% en un cuadrado: círculo.",
        code: '.boto {\n  border-radius: 15px;\n}\n\n.avatar {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n}',
        nota: "Remarca que el cercle necessita la mateixa amplada i alçada.|Remarca que el círculo necesita la misma anchura y altura." },
      { id: 's7', k: 'pregunta', t: "I si és un rectangle?|¿Y si es un rectángulo?", x: "Una caixa de 200 × 100 amb border-radius: 50%. Què surt?|Una caja de 200 × 100 con border-radius: 50%. ¿Qué sale?",
        nota: "Resposta: un ou o una el·lipse, no un cercle. Dibuixa-ho a la pissarra.|Respuesta: un huevo o una elipse, no un círculo. Dibújalo en la pizarra." },
      { id: 's8', k: 'concepte', t: "box-shadow|box-shadow", punts: ["1r: horitzontal|1.º: horizontal", "2n: vertical|2.º: vertical", "3r: difuminat|3.º: difuminado", "4t: color|4.º: color"],
        code: '.targeta {\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);\n}',
        nota: "Fes servir la llanterna: si la llum ve de dalt, l'ombra cau a sota. Si l'allunyes, es fa borrosa.|Usa la linterna: si la luz viene de arriba, la sombra cae debajo. Si la alejas, se hace borrosa." },
      { id: 's9', k: 'concepte', t: "text-shadow|text-shadow", x: "Ombra de les lletres: dura per a estil còmic, difuminada per a neó.|Sombra de las letras: dura para estilo cómic, difuminada para neón.",
        code: 'h1 {\n  text-shadow: 3px 3px 0 black;\n}\n\n.neo {\n  text-shadow: 0 0 10px deepskyblue;\n}',
        nota: "Recorda que en paràgrafs llargs l'ombra fa el text més difícil de llegir.|Recuerda que en párrafos largos la sombra hace el texto más difícil de leer." },
      { id: 's10', k: 'concepte', t: "Menys és més|Menos es más", punts: ["Vores fines o cap vora.|Bordes finos o ningún borde.", "Ombres suaus i transparents.|Sombras suaves y transparentes.", "El mateix estil a totes les targetes.|El mismo estilo en todas las tarjetas."],
        code: '.targeta {\n  border-radius: 10px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}',
        nota: "Compara una targeta amb vora negra gruixuda i una amb ombra suau. Pregunta quina triarien per a una app.|Compara una tarjeta con borde negro grueso y una con sombra suave. Pregunta cuál elegirían para una app." },
      { id: 's11', k: 'activitat', t: "Targetes que floten|Tarjetas que flotan", timer: 8, punts: ["Tres targetes: rectes, rodones i cercle.|Tres tarjetas: rectas, redondas y círculo.", "Una ombra de paper fosc a sota.|Una sombra de papel oscuro debajo.", "Mesureu el desplaçament.|Medid el desplazamiento.", "Escriviu el box-shadow.|Escribid el box-shadow."],
        nota: "Les ombres de paper tenen difuminat 0: és una bona manera d'entendre el tercer valor.|Las sombras de papel tienen difuminado 0: es una buena manera de entender el tercer valor." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Vores i ombres».|Abre la sesión «Bordes y sombras».", "Fes fins al laboratori d'acabats.|Haz hasta el laboratorio de acabados.", "Prova ombres cap amunt i sense difuminat.|Prueba sombras hacia arriba y sin difuminado.", "Para a la pausa activa.|Para en la pausa activa."],
        nota: "Al laboratori, demana que t'ensenyin l'ombra que trobin més elegant.|En el laboratorio, pide que te enseñen la sombra que encuentren más elegante." },
      { id: 's13', k: 'repte', t: "L'avatar rodó|El avatar redondo", x: "Primer quadrat, després 50%, després vora.|Primero cuadrado, después 50%, después borde.",
        code: '.avatar {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 4px solid #1FA463;\n}',
        nota: "Pregunta quin número cal canviar del codi inicial (l'alçada de 80).|Pregunta qué número hay que cambiar del código inicial (la altura de 80)." },
      { id: 's14', k: 'repte', t: "Reptes d'acabats|Retos de acabados", timer: 13, punts: ["1. La vora de la mascota.|1. El borde de la mascota.", "2. Cantonades rodones.|2. Esquinas redondas.", "3. L'avatar rodó.|3. El avatar redondo.", "4. La targeta que flota.|4. La tarjeta que flota.", "Extra: el botó retro.|Extra: el botón retro."],
        nota: "Si algú s'encalla en una ombra, que compti els valors en veu alta: x, y, difuminat, color.|Si alguien se atasca en una sombra, que cuente los valores en voz alta: x, y, difuminado, color." },
      { id: 's15', k: 'activitat', t: "Crea: la col·lecció d'insígnies|Crea: la colección de insignias", timer: 7, x: "Almenys tres insígnies rodones, amb vora i ombra, i un títol amb ombra de text.|Al menos tres insignias redondas, con borde y sombra, y un título con sombra de texto.",
        nota: "Les insígnies poden ser d'assoliments reals o d'objectius: totes valen.|Las insignias pueden ser de logros reales o de objetivos: todas valen." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["border: gruix, estil i color.|border: grosor, estilo y color.", "border-radius: 50% en un quadrat fa un cercle.|border-radius: 50% en un cuadrado hace un círculo.", "Ombres: x, y, difuminat i color.|Sombras: x, y, difuminado y color."],
        nota: "Torna a les apps de l'inici: ara saben com es fan aquests detalls.|Vuelve a las apps del inicio: ahora saben cómo se hacen esos detalles." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Les tres parts d'una vora.|Las tres partes de un borde.", "Com es fa un avatar rodó?|¿Cómo se hace un avatar redondo?"],
        nota: "La setmana vinent fan el projecte de la unitat: anota qui necessita repassar les ombres.|La semana que viene hacen el proyecto de la unidad: anota quién necesita repasar las sombras." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: llegeix el CSS i dibuixa'l|Ficha: lee el CSS y dibújalo", k: 'fitxa',
        intro: "Una fitxa per alumne/a. Dibuixa com quedaria cada caixa i, a les últimes, escriu el codi.|Una ficha por alumno/a. Dibuja cómo quedaría cada caja y, en las últimas, escribe el código.",
        items: [
          { q: "Dibuixa: border: 3px dashed blue;|Dibuja: border: 3px dashed blue;", sol: "Una caixa amb vora blava de ratlles.|Una caja con borde azul de rayas." },
          { q: "Dibuixa una caixa de 100 × 100 amb border-radius: 50%.|Dibuja una caja de 100 × 100 con border-radius: 50%.", sol: "Un cercle.|Un círculo." },
          { q: "Dibuixa l'ombra de box-shadow: 5px 5px 0 black;|Dibuja la sombra de box-shadow: 5px 5px 0 black;", sol: "Una ombra negra dura, desplaçada cap a la dreta i cap avall.|Una sombra negra dura, desplazada hacia la derecha y hacia abajo." },
          { q: "Troba l'error: border: 4px green;|Encuentra el error: border: 4px green;", sol: "Falta l'estil: border: 4px solid green;|Falta el estilo: border: 4px solid green;" },
          { q: "Escriu el CSS d'un títol amb ombra de text groga, sense desplaçament i difuminada.|Escribe el CSS de un título con sombra de texto amarilla, sin desplazamiento y difuminada.", sol: "h1 { text-shadow: 0 0 8px yellow; }|h1 { text-shadow: 0 0 8px yellow; }" }
        ] }
    ]
  },

  /* ===== w5-4 · Projecte: la targeta del videojoc ===== */
  'w5-4': {
    obj: [
      "L'alumne/a planifica una targeta amb un esbós de caixes abans de programar-la.|El alumno/a planifica una tarjeta con un boceto de cajas antes de programarla.",
      "L'alumne/a escriu l'estructura HTML completa d'una targeta: imatge amb alt, nom, tipus, estadístiques i descripció.|El alumno/a escribe la estructura HTML completa de una tarjeta: imagen con alt, nombre, tipo, estadísticas y descripción.",
      "L'alumne/a aplica el model de caixa sencer (farciment, vora, radi, ombra, amplada màxima i marges auto) a un projecte propi.|El alumno/a aplica el modelo de caja entero (relleno, borde, radio, sombra, anchura máxima y márgenes auto) a un proyecto propio.",
      "L'alumne/a revisa el projecte en pantalla de mòbil i el presenta als companys.|El alumno/a revisa el proyecto en pantalla de móvil y lo presenta a los compañeros."
    ],
    comp: [
      "Competència digital (CD3): crear un projecte digital propi amb HTML i CSS|Competencia digital (CD3): crear un proyecto digital propio con HTML y CSS",
      "Pensament computacional: planificar i descompondre un disseny en caixes|Pensamiento computacional: planificar y descomponer un diseño en cajas",
      "Comunicació: presentar una creació i donar retorn constructiu|Comunicación: presentar una creación y dar retorno constructivo",
      "Matemàtiques: percentatges per representar dades en barres|Matemáticas: porcentajes para representar datos en barras"
    ],
    vocab: [
      ["Esbós (wireframe)|Boceto (wireframe)", "Dibuix de caixes que diu què va a cada lloc abans de programar.|Dibujo de cajas que dice qué va en cada sitio antes de programar."],
      ["Targeta|Tarjeta", "Caixa amb informació agrupada i un marc, com un cromo.|Caja con información agrupada y un marco, como un cromo."],
      ["Percentatge|Porcentaje", "Una part de cent: width 70% ocupa set desenes parts de la caixa de fora.|Una parte de cien: width 70% ocupa siete décimas partes de la caja de fuera."],
      ["inline-block|inline-block", "Caixa que es queda a la línia però accepta farciment i mides.|Caja que se queda en la línea pero acepta relleno y tamaños."],
      ["Revisió|Revisión", "Comprovar el projecte amb una llista de criteris i millorar-lo.|Comprobar el proyecto con una lista de criterios y mejorarlo."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la targeta del videojoc»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la tarjeta del videojuego»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Fulls, llapis i colors per a l'esbós|Hojas, lápices y colores para el boceto",
        "Si en teniu, uns quants cromos o cartes col·leccionables per ensenyar|Si tenéis, unos cuantos cromos o cartas coleccionables para enseñar"
      ],
      imprimir: ["Peces de l'esbós de la targeta|Piezas del boceto de la tarjeta", "Fitxa de revisió del projecte|Ficha de revisión del proyecto"],
      prep: [
        "Imprimir i retallar un paquet de peces de l'esbós per alumne/a (o per parella).|Imprimir y recortar un paquete de piezas del boceto por alumno/a (o por pareja).",
        "Imprimir una fitxa de revisió per alumne/a.|Imprimir una ficha de revisión por alumno/a.",
        "Fer una targeta d'exemple a l'app per mostrar el resultat final i provar-la a la vista de mòbil.|Hacer una tarjeta de ejemplo en la app para mostrar el resultado final y probarla en la vista de móvil.",
        "Preparar l'aula per a la galeria final: espai perquè tothom pugui passejar i veure les pantalles.|Preparar el aula para la galería final: espacio para que todo el mundo pueda pasear y ver las pantallas."
      ]
    },
    plan: [
      { min: 4, t: "L'encàrrec de l'estudi|El encargo del estudio", fase: 'inici',
        fa: "Presenta el projecte com un encàrrec real: un estudi de videojocs necessita targetes col·leccionables dels seus personatges. Ensenya cromos si en tens i pregunta quines parts hi veuen. Repassa en un minut les capes de la caixa i el border-radius.|Presenta el proyecto como un encargo real: un estudio de videojuegos necesita tarjetas coleccionables de sus personajes. Enseña cromos si tienes y pregunta qué partes ven. Repasa en un minuto las capas de la caja y el border-radius.",
        diu: ["Quines parts té un cromo? Imatge, nom, punts…|¿Qué partes tiene un cromo? Imagen, nombre, puntos…",
          "Avui sou dissenyadors: el personatge l'inventeu vosaltres.|Hoy sois diseñadores: el personaje lo inventáis vosotros.",
          "Recordeu les quatre capes: contingut, farciment, vora i marge.|Recordad las cuatro capas: contenido, relleno, borde y margen."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Com es construeix una targeta|Cómo se construye una tarjeta", fase: 'teoria',
        fa: "Explica que els dissenyadors comencen per l'esbós. Mostra l'estructura HTML de la targeta, el marc amb tot el model de caixa i el truc de les barres amb percentatges. Acaba amb la targeta adaptant-se a l'ordinador i al mòbil.|Explica que los diseñadores empiezan por el boceto. Muestra la estructura HTML de la tarjeta, el marco con todo el modelo de caja y el truco de las barras con porcentajes. Termina con la tarjeta adaptándose al ordenador y al móvil.",
        diu: ["Primer què hi ha, després com es veu.|Primero qué hay, después cómo se ve.",
          "Una barra són dues caixes: el fons gris i la barra de color a dins.|Una barra son dos cajas: el fondo gris y la barra de color dentro.",
          "Per què max-width i no width per a la targeta?|¿Por qué max-width y no width para la tarjeta?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "L'esbós del cromo|El boceto del cromo", fase: 'desconnectat',
        fa: "Cada alumne/a inventa el personatge i en fa l'esbós amb les peces retallades o dibuixant rectangles, i escriu l'etiqueta de cada caixa. Després, per parelles, intercanvien els esbossos i es fan una revisió amb la diapositiva de preguntes.|Cada alumno/a inventa el personaje y hace su boceto con las piezas recortadas o dibujando rectángulos, y escribe la etiqueta de cada caja. Después, por parejas, intercambian los bocetos y se hacen una revisión con la diapositiva de preguntas.",
        diu: ["Quin nom, quin tipus i quines tres estadístiques té el vostre personatge?|¿Qué nombre, qué tipo y qué tres estadísticas tiene vuestro personaje?",
          "On hi haurà farciment? I ombra? Marqueu-ho amb fletxes.|¿Dónde habrá relleno? ¿Y sombra? Marcadlo con flechas.",
          "A l'esbós del company/a, hi ha les cinc parts?|En el boceto del compañero/a, ¿están las cinco partes?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla (al pas «Mans a l'obra» toquen «Ho hem fet!»).|Ninguna: actividad sin pantalla (en el paso «Manos a la obra» tocan «¡Lo hemos hecho!»).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 8, t: "A l'ordinador: prepara't|En el ordenador: prepárate", fase: 'ordinador',
        fa: "Fan les preguntes de repàs, les targetes de «Descobreix» que vulguin revisar, ordenen els passos del dissenyador, prediuen les barres, ajusten el marc al model de caixa i troben l'error de la targeta no centrada.|Hacen las preguntas de repaso, las tarjetas de «Descubre» que quieran revisar, ordenan los pasos del diseñador, predicen las barras, ajustan el marco en el modelo de caja y encuentran el error de la tarjeta no centrada.",
        diu: ["Si la barra té width 30%, quant del fons gris ocupa?|Si la barra tiene width 30%, ¿cuánto del fondo gris ocupa?",
          "A l'error, què li falta a max-width?|En el error, ¿qué le falta a max-width?"],
        slides: ['s11'], app: "De «Recorda» fins a «Investiga»: preguntes de repàs, missió, «Descobreix», «L'esbós del cromo» (ja fet), ordenar els passos, predir les barres, ajustar el marc del cromo i l'error de la targeta.|De «Recuerda» hasta «Investiga»: preguntas de repaso, misión, «Descubre», «El boceto del cromo» (ya hecho), ordenar los pasos, predecir las barras, ajustar el marco del cromo y el error de la tarjeta.", org: "Individual|Individual" },
      { min: 15, t: "Pausa activa i reptes per peces|Pausa activa y retos por piezas", fase: 'ordinador',
        fa: "Feu la pausa de les poses. Després, cada repte construeix una part de la targeta: estructura, marc, mòbil i barres. Projecta el repte de les barres i resol amb el grup la primera regla. La píndola del tipus és el repte extra.|Haced la pausa de las poses. Después, cada reto construye una parte de la tarjeta: estructura, marco, móvil y barras. Proyecta el reto de las barras y resuelve con el grupo la primera regla. La píldora del tipo es el reto extra.",
        diu: ["Pose de força, de velocitat i d'enginy!|¡Pose de fuerza, de velocidad y de ingenio!",
          "Cada repte és una peça del projecte final: guardeu les idees que us agradin.|Cada reto es una pieza del proyecto final: guardad las ideas que os gusten.",
          "Les tres barres han de tenir amplades diferents: quines estadístiques té el vostre personatge?|Las tres barras tienen que tener anchuras diferentes: ¿qué estadísticas tiene vuestro personaje?"],
        slides: ['s12', 's13'], app: "«Pausa activa» i «Reptes»: l'estructura, el marc, a punt per al mòbil, les barres i el repte extra de la píndola del tipus.|«Pausa activa» y «Retos»: la estructura, el marco, lista para el móvil, las barras y el reto extra de la píldora del tipo.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 12, t: "Projecte: la targeta del meu videojoc|Proyecto: la tarjeta de mi videojuego", fase: 'crea',
        fa: "Cada alumne/a tradueix el seu esbós a codi al pas «Crea». Quan tinguin tots els criteris, omplen la fitxa de revisió i proven la vista de mòbil. Els últims 3 minuts, feu una galeria: les pantalles queden obertes i tothom passeja i deixa un comentari amable a dues targetes.|Cada alumno/a traduce su boceto a código en el paso «Crea». Cuando tengan todos los criterios, rellenan la ficha de revisión y prueban la vista de móvil. Los últimos 3 minutos, haced una galería: las pantallas quedan abiertas y todo el mundo pasea y deja un comentario amable a dos tarjetas.",
        diu: ["Mireu l'esbós: quina caixa us falta per programar?|Mirad el boceto: ¿qué caja os falta por programar?",
          "Abans de la galeria, comproveu-la a la vista de mòbil.|Antes de la galería, comprobadla en la vista de móvil.",
          "A la galeria, digueu una cosa que us agradi i una idea per millorar.|En la galería, decid una cosa que os guste y una idea para mejorar."],
        slides: ['s14', 's15'], app: "Pas «Crea»: La targeta del meu videojoc (projecte final, es desa).|Paso «Crea»: La tarjeta de mi videojuego (proyecto final, se guarda).", org: "Individual i després tot el grup en galeria|Individual y después todo el grupo en galería" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum de la unitat, deixa fer les preguntes finals de l'app i felicita el grup per la insígnia de les caixes. Fes el tiquet a la porta.|Repasa el resumen de la unidad, deja hacer las preguntas finales de la app y felicita al grupo por la insignia de las cajas. Haz el ticket en la puerta.",
        diu: ["Quina propietat us ha costat més aquesta unitat?|¿Qué propiedad os ha costado más en esta unidad?",
          "Com faries que la targeta no es surti de la pantalla del mòbil?|¿Cómo harías que la tarjeta no se salga de la pantalla del móvil?"],
        slides: ['s16', 's17'], app: "«Tancament»: dues preguntes, com m'he sentit i la insígnia de la unitat.|«Cierre»: dos preguntas, cómo me he sentido y la insignia de la unidad.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Comença pels colors i l'ombra sense tenir l'HTML fet, i després ho ha de refer.|Empieza por los colores y la sombra sin tener el HTML hecho, y después tiene que rehacerlo.",
        "Torna a l'esbós i a l'ordre dels passos: primer l'estructura, després l'estil.|Vuelve al boceto y al orden de los pasos: primero la estructura, después el estilo."],
      ["La imatge no surt perquè el nom del fitxer no existeix o està mal escrit.|La imagen no sale porque el nombre del archivo no existe o está mal escrito.",
        "Que miri la llista d'imatges disponibles i comprovi la ruta: img, barra, nom i .svg.|Que mire la lista de imágenes disponibles y compruebe la ruta: img, barra, nombre y .svg."],
      ["Les barres no es veuen perquè la barra de dins no té alçada o el fons no té color.|Las barras no se ven porque la barra de dentro no tiene altura o el fondo no tiene color.",
        "Activa els Raigs X amb l'alumne/a: on és la caixa de fora i on la de dins? Quina alçada tenen?|Activa los Rayos X con el alumno/a: ¿dónde está la caja de fuera y dónde la de dentro? ¿Qué altura tienen?"],
      ["La targeta no es centra perquè només té width en percentatge o no en té.|La tarjeta no se centra porque solo tiene width en porcentaje o no tiene.",
        "Recorda la regla: amplada en píxels (millor max-width) i després margin auto.|Recuerda la regla: anchura en píxeles (mejor max-width) y después margin auto."],
      ["Vol posar-ho tot i la targeta queda carregada de vores, ombres i colors.|Quiere ponerlo todo y la tarjeta queda cargada de bordes, sombras y colores.",
        "Proposa-li triar dos colors i un sol estil d'ombra, com les targetes de la sessió anterior.|Propónle elegir dos colores y un solo estilo de sombra, como las tarjetas de la sesión anterior."]
    ],
    diff: {
      mes: "Afegir barres d'estadístiques amb colors diferents per a cada estadística, una píndola de tipus i una segona targeta d'un altre personatge al costat, amb el mateix estil, per fer una col·lecció.|Añadir barras de estadísticas con colores diferentes para cada estadística, una píldora de tipo y una segunda tarjeta de otro personaje al lado, con el mismo estilo, para hacer una colección.",
      menys: "Partir del codi del repte 2 o 3 i canviar-hi el personatge, el text i els colors. Les estadístiques poden quedar en llista, sense barres, i es valoren els criteris bàsics: imatge, nom, farciment, vora i centrat.|Partir del código del reto 2 o 3 y cambiar el personaje, el texto y los colores. Las estadísticas pueden quedar en lista, sin barras, y se valoran los criterios básicos: imagen, nombre, relleno, borde y centrado."
    },
    aval: {
      ticket: ["Digues tres propietats del model de caixa que has fet servir a la targeta.|Di tres propiedades del modelo de caja que has usado en la tarjeta.",
        "Com faries que la targeta no es surti de la pantalla del mòbil?|¿Cómo harías que la tarjeta no se salga de la pantalla del móvil?"],
      rubric: [
        ["Planificació|Planificación", "Fa un esbós amb totes les caixes i l'etiqueta de cadascuna, i el segueix.|Hace un boceto con todas las cajas y la etiqueta de cada una, y lo sigue.", "Fa l'esbós, però li falten parts o no el fa servir.|Hace el boceto, pero le faltan partes o no lo usa."],
        ["Estructura HTML|Estructura HTML", "Imatge amb alt, nom, tipus, llista d'estadístiques i descripció, tot ben tancat.|Imagen con alt, nombre, tipo, lista de estadísticas y descripción, todo bien cerrado.", "Hi ha la majoria de parts, però en falta alguna o hi ha errors d'etiquetes.|Están la mayoría de partes, pero falta alguna o hay errores de etiquetas."],
        ["Model de caixa|Modelo de caja", "Fa servir farciment, vora, radi, ombra, max-width i margin auto amb intenció.|Usa relleno, borde, radio, sombra, max-width y margin auto con intención.", "Fa servir algunes propietats, però la targeta no està centrada o no respira.|Usa algunas propiedades, pero la tarjeta no está centrada o no respira."],
        ["Presentació i retorn|Presentación y retorno", "Explica la seva targeta i dona comentaris amables i útils als altres.|Explica su tarjeta y da comentarios amables y útiles a los demás.", "Ensenya la targeta, però li costa explicar-la o donar idees.|Enseña la tarjeta, pero le cuesta explicarla o dar ideas."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu ensenyar la targeta a la família i fer-ne una segona d'un altre personatge del mateix videojoc. Demaneu-los quines estadístiques li posarien!|En casa, con el móvil, podéis enseñar la tarjeta a la familia y hacer una segunda de otro personaje del mismo videojuego. ¡Preguntadles qué estadísticas le pondrían!",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: la targeta del videojoc|Proyecto: la tarjeta del videojuego", x: "Un estudi de videojocs necessita targetes col·leccionables. El personatge l'inventes tu!|Un estudio de videojuegos necesita tarjetas coleccionables. ¡El personaje lo inventas tú!",
        nota: "Presenta-ho com un encàrrec real: avui sou l'equip de disseny.|Preséntalo como un encargo real: hoy sois el equipo de diseño." },
      { id: 's2', k: 'pregunta', t: "Què té un cromo?|¿Qué tiene un cromo?", punts: ["Imatge|Imagen", "Nom i tipus|Nombre y tipo", "Estadístiques|Estadísticas", "Descripció|Descripción", "Un marc especial|Un marco especial"],
        nota: "Deixa que ho descobreixin ells abans de mostrar els punts. Si tens cromos, passa'ls.|Deja que lo descubran ellos antes de mostrar los puntos. Si tienes cromos, pásalos." },
      { id: 's3', k: 'repas', t: "Recordem la unitat|Recordemos la unidad", punts: ["Caixes de bloc i en línia|Cajas de bloque y en línea", "padding, border i margin|padding, border y margin", "border-radius i box-shadow|border-radius y box-shadow"],
        nota: "Avui ho farem servir tot junt en un sol projecte.|Hoy lo usaremos todo junto en un solo proyecto." },
      { id: 's4', k: 'anim', t: "Primer, l'esbós|Primero, el boceto", anim: 'wplan', x: "Els dissenyadors dibuixen les caixes abans d'escriure codi.|Los diseñadores dibujan las cajas antes de escribir código.",
        nota: "Remarca que un esbós no ha de ser bonic: només ha de dir què va a cada lloc.|Remarca que un boceto no tiene que ser bonito: solo tiene que decir qué va en cada sitio." },
      { id: 's5', k: 'concepte', t: "L'estructura|La estructura", x: "Un div que fa de marc i, a dins, cinc parts.|Un div que hace de marco y, dentro, cinco partes.",
        code: '<div class="targeta">\n  <img src="img/robot.svg" alt="Robot Volt">\n  <h2>Volt</h2>\n  <span class="tipus">Elèctric</span>\n  <ul class="stats">\n    <li>Força: 7</li>\n  </ul>\n  <p>Un robot que es carrega amb els llamps.</p>\n</div>',
        nota: "Pregunta per què la imatge porta alt: perquè les persones que no hi veuen sàpiguen què hi ha.|Pregunta por qué la imagen lleva alt: para que las personas que no ven sepan qué hay." },
      { id: 's6', k: 'concepte', t: "El marc|El marco", x: "Tot el model de caixa en una sola regla.|Todo el modelo de caja en una sola regla.",
        code: '.targeta {\n  max-width: 300px;\n  margin: 20px auto;\n  padding: 15px;\n  border: 5px solid gold;\n  border-radius: 16px;\n  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);\n}',
        nota: "Llegiu la regla línia a línia i que diguin què fa cada una.|Leed la regla línea a línea y que digan qué hace cada una." },
      { id: 's7', k: 'concepte', t: "Barres amb percentatges|Barras con porcentajes", x: "Una caixa grisa a fora i una de color a dins amb width en %.|Una caja gris fuera y una de color dentro con width en %.",
        code: '<div class="fons"><div class="barra forca"></div></div>\n\n.barra {\n  height: 12px;\n  background-color: #1FA463;\n}\n\n.forca {\n  width: 70%;\n}',
        nota: "Si la força és 7 de 10, quin percentatge hi posarien? 70%.|Si la fuerza es 7 de 10, ¿qué porcentaje pondrían? 70%." },
      { id: 's8', k: 'anim', t: "A qualsevol pantalla|En cualquier pantalla", anim: 'wresp', x: "max-width i margin auto: centrada a l'ordinador, encongida al mòbil.|max-width y margin auto: centrada en el ordenador, encogida en el móvil.",
        nota: "Recorda que la imatge amb width 100% s'adapta a la targeta.|Recuerda que la imagen con width 100% se adapta a la tarjeta." },
      { id: 's9', k: 'activitat', t: "L'esbós del cromo|El boceto del cromo", timer: 10, punts: ["Inventa el personatge: nom, tipus i 3 estadístiques.|Inventa el personaje: nombre, tipo y 3 estadísticas.", "Col·loca les peces o dibuixa els rectangles.|Coloca las piezas o dibuja los rectángulos.", "Escriu l'etiqueta de cada caixa.|Escribe la etiqueta de cada caja.", "Marca farciment, vora, radi i ombra.|Marca relleno, borde, radio y sombra."],
        nota: "Passa per les taules i pregunta quin personatge han inventat. Valora la idea, no el dibuix.|Pasa por las mesas y pregunta qué personaje han inventado. Valora la idea, no el dibujo." },
      { id: 's10', k: 'activitat', t: "Revisió per parelles|Revisión por parejas", punts: ["Hi ha les cinc parts?|¿Están las cinco partes?", "Cada caixa té la seva etiqueta?|¿Cada caja tiene su etiqueta?", "Es pot fer amb el que sabem?|¿Se puede hacer con lo que sabemos?", "Una millora per al company/a.|Una mejora para el compañero/a."],
        nota: "Demana que els comentaris comencin per una cosa positiva.|Pide que los comentarios empiecen por una cosa positiva." },
      { id: 's11', k: 'activitat', t: "A l'ordinador: prepara't|En el ordenador: prepárate", timer: 8, punts: ["Ordena els passos del dissenyador.|Ordena los pasos del diseñador.", "Prediu les barres.|Predice las barras.", "Ajusta el marc del cromo.|Ajusta el marco del cromo.", "Troba l'error de la targeta.|Encuentra el error de la tarjeta."],
        nota: "Qui ja ho tingui clar pot anar més de pressa per tenir més temps al projecte.|Quien ya lo tenga claro puede ir más deprisa para tener más tiempo en el proyecto." },
      { id: 's12', k: 'repte', t: "Les barres|Las barras", x: "Amplades diferents, cantonades rodones i llista sense pics.|Anchuras diferentes, esquinas redondas y lista sin viñetas.",
        code: '.stats {\n  list-style-type: none;\n}\n\n.barra {\n  border-radius: 6px;\n}\n\n.forca {\n  width: 70%;\n}',
        nota: "Escriviu junts la regla de la força i deixa que facin la velocitat i l'enginy.|Escribid juntos la regla de la fuerza y deja que hagan la velocidad y el ingenio." },
      { id: 's13', k: 'repte', t: "Reptes per peces|Retos por piezas", timer: 15, punts: ["1. L'estructura.|1. La estructura.", "2. El marc.|2. El marco.", "3. A punt per al mòbil.|3. Lista para el móvil.", "4. Les barres.|4. Las barras.", "Extra: la píndola del tipus.|Extra: la píldora del tipo."],
        nota: "Recorda que cada repte és una peça del projecte: poden copiar idees dels reptes al seu projecte.|Recuerda que cada reto es una pieza del proyecto: pueden copiar ideas de los retos en su proyecto." },
      { id: 's14', k: 'activitat', t: "Projecte: la meva targeta|Proyecto: mi tarjeta", timer: 12, punts: ["Segueix el teu esbós.|Sigue tu boceto.", "Compleix tots els criteris.|Cumple todos los criterios.", "Omple la fitxa de revisió.|Rellena la ficha de revisión.", "Prova la vista de mòbil.|Prueba la vista de móvil."],
        nota: "Avisa quan faltin 3 minuts per a la galeria.|Avisa cuando falten 3 minutos para la galería." },
      { id: 's15', k: 'activitat', t: "Galeria de targetes|Galería de tarjetas", punts: ["Deixa la targeta oberta a la pantalla.|Deja la tarjeta abierta en la pantalla.", "Passeja i mira'n dues.|Pasea y mira dos.", "Una cosa que t'agrada i una idea per millorar.|Una cosa que te gusta y una idea para mejorar."],
        nota: "Si no hi ha temps per passejar, projecta'n dues o tres de voluntàries.|Si no hay tiempo para pasear, proyecta dos o tres de voluntarias." },
      { id: 's16', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["Tot és una caixa: bloc o en línia.|Todo es una caja: bloque o en línea.", "Farciment, vora i marge.|Relleno, borde y margen.", "Radi, ombres i amplada màxima centrada.|Radio, sombras y anchura máxima centrada."],
        nota: "Felicita el grup: han guanyat la insígnia de les caixes.|Felicita al grupo: han ganado la insignia de las cajas." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Tres propietats de la teva targeta.|Tres propiedades de tu tarjeta.", "Com evites que se surti del mòbil?|¿Cómo evitas que se salga del móvil?"],
        nota: "Guarda els esbossos: són una bona evidència del procés per a l'avaluació.|Guarda los bocetos: son una buena evidencia del proceso para la evaluación." }
    ],
    print: [
      { id: 'p1', t: "Peces de l'esbós de la targeta|Piezas del boceto de la tarjeta", k: 'targetes',
        intro: "Un paquet per alumne/a. Retalleu les peces i col·loqueu-les dins la targeta gran per fer l'esbós. Podeu escriure-hi a sobre amb llapis.|Un paquete por alumno/a. Recortad las piezas y colocadlas dentro de la tarjeta grande para hacer el boceto. Podéis escribir encima con lápiz.",
        items: [
          { t: "div.targeta: el marc (rectangle gran)|div.targeta: el marco (rectángulo grande)", n: 1 },
          { t: "img: la imatge del personatge|img: la imagen del personaje", n: 1 },
          { t: "h2: el nom|h2: el nombre", n: 1 },
          { t: "span.tipus: la píndola del tipus|span.tipus: la píldora del tipo", n: 1 },
          { t: "ul.stats: la llista d'estadístiques|ul.stats: la lista de estadísticas", n: 1 },
          { t: "li: una estadística|li: una estadística", n: 3 },
          { t: "p: la descripció|p: la descripción", n: 1 }
        ] },
      { id: 'p2', t: "Fitxa de revisió del projecte|Ficha de revisión del proyecto", k: 'fitxa',
        intro: "Una fitxa per alumne/a. Abans de la galeria, comprova cada punt a la teva targeta i escriu com ho has fet.|Una ficha por alumno/a. Antes de la galería, comprueba cada punto en tu tarjeta y escribe cómo lo has hecho.",
        items: [
          { q: "La imatge té un alt que descriu el personatge?|¿La imagen tiene un alt que describe el personaje?", sol: "Sí: per exemple alt «Guineu Brasa».|Sí: por ejemplo alt «Zorro Brasa»." },
          { q: "Quantes estadístiques té la llista? Com les has mostrat?|¿Cuántas estadísticas tiene la lista? ¿Cómo las has mostrado?", sol: "Almenys tres, en llista o amb barres de width en percentatge.|Al menos tres, en lista o con barras de width en porcentaje." },
          { q: "Quin farciment, quina vora i quin radi té la targeta?|¿Qué relleno, qué borde y qué radio tiene la tarjeta?", sol: "Per exemple padding 15px, border 5px solid gold i border-radius 16px.|Por ejemplo padding 15px, border 5px solid gold y border-radius 16px." },
          { q: "Com has centrat la targeta?|¿Cómo has centrado la tarjeta?", sol: "Amb max-width i margin auto als costats.|Con max-width y margin auto a los lados." },
          { q: "A la vista de mòbil, la targeta hi cap sencera?|En la vista de móvil, ¿la tarjeta cabe entera?", sol: "Sí, perquè max-width deixa que s'encongeixi i la imatge té width 100%.|Sí, porque max-width deja que se encoja y la imagen tiene width 100%." }
        ] }
    ]
  }
});

/* ---------- Guia del professorat · Tech Web, unitat 6 «Disposició» ---------- */
Object.assign(TGUIDE, {

  /* ===== w6-1 · Una al costat de l'altra ===== */
  'w6-1': {
    obj: [
      "L'alumne/a explica que «display: flex» s'escriu al contenidor (el pare) i que afecta els seus fills directes.|El alumno/a explica que «display: flex» se escribe en el contenedor (el padre) y que afecta a sus hijos directos.",
      "L'alumne/a reparteix i alinea elements amb justify-content, align-items i gap, i centra una caixa en horitzontal i en vertical.|El alumno/a reparte y alinea elementos con justify-content, align-items y gap, y centra una caja en horizontal y en vertical.",
      "L'alumne/a fa servir flex-direction i flex-wrap per apilar elements o deixar-los saltar de línia.|El alumno/a usa flex-direction y flex-wrap para apilar elementos o dejarlos saltar de línea.",
      "L'alumne/a construeix una capçalera amb el logo a l'esquerra i un menú en fila a la dreta.|El alumno/a construye una cabecera con el logo a la izquierda y un menú en fila a la derecha."
    ],
    comp: [
      "Competència digital (CD3): crear contingut digital amb HTML i CSS|Competencia digital (CD3): crear contenido digital con HTML y CSS",
      "Pensament computacional: relacions pare-fill i propietats que s'apliquen a un conjunt|Pensamiento computacional: relaciones padre-hijo y propiedades que se aplican a un conjunto",
      "Educació visual i plàstica: composició, alineació i espai en blanc|Educación visual y plástica: composición, alineación y espacio en blanco"
    ],
    vocab: [
      ["Contenidor flex|Contenedor flex", "La caixa que té «display: flex» i que col·loca els seus fills en fila.|La caja que tiene «display: flex» y que coloca a sus hijos en fila."],
      ["Element flex|Elemento flex", "Cada fill directe d'un contenidor flex.|Cada hijo directo de un contenedor flex."],
      ["justify-content|justify-content", "Propietat que reparteix els fills al llarg de la fila.|Propiedad que reparte los hijos a lo largo de la fila."],
      ["align-items|align-items", "Propietat que alinea els fills de dalt a baix dins la fila.|Propiedad que alinea los hijos de arriba abajo dentro de la fila."],
      ["gap|gap", "Espai entre els fills d'un contenidor flex o grid.|Espacio entre los hijos de un contenedor flex o grid."],
      ["flex-wrap|flex-wrap", "Propietat que deixa saltar de línia els fills que no hi caben.|Propiedad que deja saltar de línea a los hijos que no caben."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Una al costat de l'altra»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Una al lado de la otra»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un full A3 (o A4) per parella, que farà de contenidor, i tisores|Una hoja A3 (o A4) por pareja, que hará de contenedor, y tijeras"
      ],
      imprimir: ["Targetes del contenidor flex|Tarjetas del contenedor flex", "Fitxa: dibuixa el resultat|Ficha: dibuja el resultado"],
      prep: [
        "Imprimir i retallar un paquet de targetes per parella (caixes de la capçalera i targetes de propietats).|Imprimir y recortar un paquete de tarjetas por pareja (cajas de la cabecera y tarjetas de propiedades).",
        "Provar el laboratori de flex de l'apartat «Investiga» per saber què passa amb cada valor.|Probar el laboratorio de flex del apartado «Investiga» para saber qué pasa con cada valor.",
        "Tenir obert un web conegut (el de l'escola o d'un club) per mostrar-ne el menú en fila.|Tener abierta una web conocida (la de la escuela o la de un club) para mostrar su menú en fila."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: on són les files?|Bienvenida: ¿dónde están las filas?", fase: 'inici',
        fa: "Repassa el model de caixa i recorda que els elements de bloc es posen un sota l'altre. Projecta un web conegut i demana on veuen coses una al costat de l'altra. Planteja el repte: amb el que sabem, no podem fer un menú en fila.|Repasa el modelo de caja y recuerda que los elementos de bloque se ponen uno debajo del otro. Proyecta una web conocida y pregunta dónde ven cosas una al lado de la otra. Plantea el reto: con lo que sabemos, no podemos hacer un menú en fila.",
        diu: ["Com es col·loquen tres «div» seguits? I tres «li»?|¿Cómo se colocan tres «div» seguidos? ¿Y tres «li»?",
          "Mireu aquest web: on hi ha coses en fila?|Mirad esta web: ¿dónde hay cosas en fila?",
          "Avui aprendreu l'eina que fan servir els dissenyadors per posar coses en fila.|Hoy aprenderéis la herramienta que usan los diseñadores para poner cosas en fila."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Flexbox pas a pas|Flexbox paso a paso", fase: 'teoria',
        fa: "Explica que flex es posa al pare. Projecta el codi de cada diapositiva i, abans de mostrar el resultat, demana que prediguin què passarà. Insisteix en la parella justify-content + align-items per centrar i en flex-wrap per al mòbil.|Explica que flex se pone en el padre. Proyecta el código de cada diapositiva y, antes de mostrar el resultado, pide que predigan qué pasará. Insiste en la pareja justify-content + align-items para centrar y en flex-wrap para el móvil.",
        diu: ["Qui és el pare aquí? Doncs allà va el «display: flex».|¿Quién es el padre aquí? Pues ahí va el «display: flex».",
          "Si poso space-between, on anirà el logo? I el menú?|Si pongo space-between, ¿dónde irá el logo? ¿Y el menú?",
          "Per centrar del tot, quines dues propietats necessito?|Para centrar del todo, ¿qué dos propiedades necesito?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El contenidor de paper|El contenedor de papel", fase: 'desconnectat',
        fa: "Per parelles: un fa de navegador i l'altre de programador/a. El programador/a treu una targeta de propietat i el navegador mou les caixes de paper dins el full. Al final, cada parella dibuixa una capçalera i marca quines dues caixes necessiten flex.|Por parejas: uno hace de navegador y el otro de programador/a. El programador/a saca una tarjeta de propiedad y el navegador mueve las cajas de papel dentro de la hoja. Al final, cada pareja dibuja una cabecera y marca qué dos cajas necesitan flex.",
        diu: ["El navegador no pensa: només fa el que diu la targeta.|El navegador no piensa: solo hace lo que dice la tarjeta.",
          "Plegueu el full: ara és un mòbil. Què fa flex-wrap?|Doblad la hoja: ahora es un móvil. ¿Qué hace flex-wrap?"],
        slides: ['s10'], app: "Cap: activitat amb paper.|Ninguna: actividad con papel.", org: "Per parelles|Por parejas" },
      { min: 12, t: "A l'ordinador: prediu i investiga|En el ordenador: predice e investiga", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins al laboratori de flex. Passeja i, al laboratori, demana a cada alumne/a que t'ensenyi un valor de justify-content que no hagi vist a la teoria.|Cada alumno/a hace la sesión hasta el laboratorio de flex. Pasea y, en el laboratorio, pide a cada alumno/a que te enseñe un valor de justify-content que no haya visto en la teoría.",
        diu: ["Abans de triar el dibuix, digues on aniran les fruites.|Antes de elegir el dibujo, di dónde irán las frutas.",
          "Al laboratori, canvia un sol valor cada vegada i mira què passa.|En el laboratorio, cambia un solo valor cada vez y mira qué pasa."],
        slides: ['s11'], app: "De «La missió» fins a «Investiga»: les dues preguntes de repàs, les dues històries, les 7 targetes de «Descobreix», «Mans a l'obra» (ja fet), prediu el resultat, tria el codi que centra, troba l'error del menú i el laboratori de flex.|De «La misión» hasta «Investiga»: las dos preguntas de repaso, las dos historias, las 7 tarjetas de «Descubre», «Manos a la obra» (ya hecho), predice el resultado, elige el código que centra, encuentra el error del menú y el laboratorio de flex.", org: "Individual|Individual" },
      { min: 13, t: "Pausa activa i reptes|Pausa activa y retos", fase: 'ordinador',
        fa: "Feu la pausa tots junts. Després resol a la pissarra el primer pas del repte 3 (on va el flex?) i deixa'ls treballar els cinc reptes. Qui acabi, el repte extra de la fitxa de perfil.|Haced la pausa todos juntos. Después resuelve en la pizarra el primer paso del reto 3 (¿dónde va el flex?) y deja que trabajen los cinco retos. Quien termine, el reto extra de la ficha de perfil.",
        diu: ["Al repte 3, qui conté el logo i el menú? Aquest és el pare.|En el reto 3, ¿quién contiene el logo y el menú? Ese es el padre.",
          "Si el centrat vertical no es veu, mira si el contenidor té alçada.|Si el centrado vertical no se ve, mira si el contenedor tiene altura.",
          "Llegeix els objectius: et diuen exactament què es comprova.|Lee los objetivos: te dicen exactamente qué se comprueba."],
        slides: ['s12', 's13'], app: "«Pausa activa» i els reptes 1 a 5 (menú, fitxes, capçalera, cartell centrat, xapes) i el repte extra.|«Pausa activa» y los retos 1 a 5 (menú, fichas, cabecera, cartel centrado, chapas) y el reto extra.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: la meva web en fila|Crea: mi web en fila", fase: 'crea',
        fa: "Cada alumne/a fa la seva web amb capçalera, menú i targetes de coses preferides. Recorda que poden canviar colors i textos. Comprova amb el mode mòbil que les targetes salten de línia.|Cada alumno/a hace su web con cabecera, menú y tarjetas de cosas preferidas. Recuerda que pueden cambiar colores y textos. Comprueba con el modo móvil que las tarjetas saltan de línea.",
        diu: ["Quines tres coses t'agraden prou per posar-les en una targeta?|¿Qué tres cosas te gustan lo bastante para ponerlas en una tarjeta?",
          "Mira-ho en mòbil: les targetes baixen de línia?|Míralo en móvil: ¿las tarjetas bajan de línea?"],
        slides: ['s14'], app: "Pas «Crea»: La meva web en fila (es desa al portafoli).|Paso «Crea»: Mi web en fila (se guarda en el portafolio).", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals de l'app i fes el tiquet de sortida a la porta.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales de la app y haz el ticket de salida en la puerta.",
        diu: ["On va el «display: flex», al pare o als fills?|¿Dónde va el «display: flex», en el padre o en los hijos?",
          "Com centraríeu una caixa al mig d'una pàgina?|¿Cómo centraríais una caja en medio de una página?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa «display: flex» als fills (a cada «li» o «div») en lloc del pare.|Pone «display: flex» en los hijos (en cada «li» o «div») en lugar del padre.",
        "Pregunta: qui conté totes aquestes caixes? Que assenyali el pare a l'HTML i hi mogui la línia.|Pregunta: ¿quién contiene todas estas cajas? Que señale el padre en el HTML y mueva la línea allí."],
      ["Escriu justify-content o gap però s'oblida del «display: flex» i no passa res.|Escribe justify-content o gap pero se olvida del «display: flex» y no pasa nada.",
        "Recorda-li que aquestes propietats només funcionen dins un contenidor flex: primer el display, després la resta.|Recuérdale que estas propiedades solo funcionan dentro de un contenedor flex: primero el display, después el resto."],
      ["Fa servir align-items: center però no veu cap canvi.|Usa align-items: center pero no ve ningún cambio.",
        "El contenidor només és tan alt com el contingut: que li doni una alçada (height) i ho tornarà a provar.|El contenedor solo es tan alto como el contenido: que le dé una altura (height) y lo vuelva a probar."],
      ["Confon justify-content amb align-items quan fa servir flex-direction: column.|Confunde justify-content con align-items cuando usa flex-direction: column.",
        "Dibuixa una fletxa a la pissarra: justify-content va en la direcció de la fila o columna; align-items, en la perpendicular.|Dibuja una flecha en la pizarra: justify-content va en la dirección de la fila o columna; align-items, en la perpendicular."],
      ["Escriu «justify-content: space-between» amb errors (spacebetween, space between).|Escribe «justify-content: space-between» con errores (spacebetween, space between).",
        "Que faci servir els suggeriments de l'editor: en començar a escriure el valor, en surt la llista.|Que use las sugerencias del editor: al empezar a escribir el valor, sale la lista."]
    ],
    diff: {
      mes: "Fer el repte extra de la fitxa de perfil i després afegir a la seva web una segona fila de botons amb flex-direction: column dins de cada targeta.|Hacer el reto extra de la ficha de perfil y después añadir en su web una segunda fila de botones con flex-direction: column dentro de cada tarjeta.",
      menys: "Treballar amb les targetes de propietats a la taula: abans d'escriure, posar la targeta damunt el paper del pare. Fer els reptes 1, 2 i 4, i al «Crea» començar només amb la capçalera.|Trabajar con las tarjetas de propiedades en la mesa: antes de escribir, poner la tarjeta encima del papel del padre. Hacer los retos 1, 2 y 4, y en el «Crea» empezar solo con la cabecera."
    },
    aval: {
      ticket: ["Escriu les dues propietats que centren una caixa en horitzontal i en vertical.|Escribe las dos propiedades que centran una caja en horizontal y en vertical.",
        "En una capçalera amb logo i menú, a quina caixa poses «display: flex»?|En una cabecera con logo y menú, ¿en qué caja pones «display: flex»?"],
      rubric: [
        ["Pare i fills|Padre e hijos", "Posa sempre flex al contenidor i sap explicar per què.|Pone siempre flex en el contenedor y sabe explicar por qué.", "De vegades el posa als fills i ho corregeix amb ajuda.|A veces lo pone en los hijos y lo corrige con ayuda."],
        ["Repartir i alinear|Repartir y alinear", "Tria el valor de justify-content i align-items adequat sense provar a l'atzar.|Elige el valor de justify-content y align-items adecuado sin probar al azar.", "Arriba al resultat provant valors un rere l'altre.|Llega al resultado probando valores uno tras otro."],
        ["Pàgina pròpia|Página propia", "La seva web té capçalera flex, menú amb gap i targetes que salten de línia.|Su web tiene cabecera flex, menú con gap y tarjetas que saltan de línea.", "Té una part en fila però li falta el menú o el flex-wrap.|Tiene una parte en fila pero le falta el menú o el flex-wrap."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu obrir dues o tres webs i buscar-hi coses en fila: el menú, els botons de xarxes socials, les fitxes de productes. Quines creieu que fan servir flex?|En casa, con el móvil, podéis abrir dos o tres webs y buscar cosas en fila: el menú, los botones de redes sociales, las fichas de productos. ¿Cuáles creéis que usan flex?",
    slides: [
      { id: 's1', k: 'portada', t: "Una al costat de l'altra|Una al lado de la otra", x: "Avui aprendrem flexbox: l'eina per posar coses en fila, repartir-les i centrar-les.|Hoy aprenderemos flexbox: la herramienta para poner cosas en fila, repartirlas y centrarlas.",
        nota: "Presenta l'objectiu: al final faran una web amb capçalera i menú en fila.|Presenta el objetivo: al final harán una web con cabecera y menú en fila." },
      { id: 's2', k: 'repas', t: "Recordem: blocs i caixes|Recordemos: bloques y cajas", punts: ["Els elements de bloc ocupen tota l'amplada.|Los elementos de bloque ocupan todo el ancho.", "Cada bloc comença en una línia nova.|Cada bloque empieza en una línea nueva.", "padding és dins, margin és fora.|padding es dentro, margin es fuera."],
        code: '<div>1</div>\n<div>2</div>\n<div>3</div>',
        nota: "Pregunta com es veuran els tres div abans d'ensenyar-ho: un sota l'altre.|Pregunta cómo se verán los tres div antes de enseñarlo: uno debajo del otro." },
      { id: 's3', k: 'pregunta', t: "On són les files?|¿Dónde están las filas?", x: "Mireu una web coneguda. Quines coses estan una al costat de l'altra?|Mirad una web conocida. ¿Qué cosas están una al lado de la otra?",
        nota: "Recull: menú, logo i menú, botons, productes. Tots es poden fer amb flex.|Recoge: menú, logo y menú, botones, productos. Todos se pueden hacer con flex." },
      { id: 's4', k: 'anim', t: "Flex es posa al pare|Flex se pone en el padre", anim: 'wflex', x: "El contenidor té display: flex i els seus fills es posen en fila.|El contenedor tiene display: flex y sus hijos se ponen en fila.",
        nota: "Remarca la paraula «fills directes»: els néts no es mouen.|Remarca las palabras «hijos directos»: los nietos no se mueven." },
      { id: 's5', k: 'concepte', t: "Un menú en fila|Un menú en fila", x: "Una llista amb flex i gap: les opcions en fila i amb espai entre elles.|Una lista con flex y gap: las opciones en fila y con espacio entre ellas.",
        code: '.menu {\n  display: flex;\n  gap: 20px;\n  list-style-type: none;\n}',
        nota: "Fes notar que gap posa espai entre els fills, no als extrems.|Haz notar que gap pone espacio entre los hijos, no en los extremos." },
      { id: 's6', k: 'concepte', t: "justify-content|justify-content", punts: ["flex-start: tot a l'esquerra|flex-start: todo a la izquierda", "center: tot al mig|center: todo en medio", "flex-end: tot a la dreta|flex-end: todo a la derecha", "space-between: als extrems i espai al mig|space-between: en los extremos y espacio en medio"],
        code: '.cap {\n  display: flex;\n  justify-content: space-between;\n}',
        nota: "Fes que tres alumnes facin de fills davant la classe i es moguin amb cada valor.|Haz que tres alumnos hagan de hijos delante de la clase y se muevan con cada valor." },
      { id: 's7', k: 'concepte', t: "Centrar una caixa|Centrar una caja", x: "justify-content: center centra en horitzontal; align-items: center, en vertical. Calen totes dues.|justify-content: center centra en horizontal; align-items: center, en vertical. Hacen falta las dos.",
        code: '.marc {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n}',
        nota: "Explica que sense alçada el contenidor és tan alt com el contingut i no es nota el centrat vertical.|Explica que sin altura el contenedor es tan alto como el contenido y no se nota el centrado vertical." },
      { id: 's8', k: 'concepte', t: "Columna o fila que salta|Columna o fila que salta", punts: ["flex-direction: column apila els fills.|flex-direction: column apila los hijos.", "flex-wrap: wrap els fa saltar de línia.|flex-wrap: wrap los hace saltar de línea.", "gap funciona igual en tots dos casos.|gap funciona igual en los dos casos."],
        code: '.xapes {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}',
        nota: "Mostra el laboratori amb la finestra estreta perquè vegin com salten les caixes.|Muestra el laboratorio con la ventana estrecha para que vean cómo saltan las cajas." },
      { id: 's9', k: 'pregunta', t: "Prediu!|¡Predice!", x: "Tres fruites, display: flex i justify-content: center. On queden?|Tres frutas, display: flex y justify-content: center. ¿Dónde quedan?",
        code: '.fila {\n  display: flex;\n  justify-content: center;\n}',
        nota: "Resposta: les tres juntes al mig. Pregunta què canviaria amb space-around.|Respuesta: las tres juntas en medio. Pregunta qué cambiaría con space-around." },
      { id: 's10', k: 'activitat', t: "El contenidor de paper|El contenedor de papel", timer: 8, punts: ["El full és el contenidor; els papers, els fills.|La hoja es el contenedor; los papeles, los hijos.", "Programador/a: treu una targeta de propietat.|Programador/a: saca una tarjeta de propiedad.", "Navegador: mou els papers sense ajuda.|Navegador: mueve los papeles sin ayuda.", "Final: dibuixeu una capçalera i marqueu on va flex.|Final: dibujad una cabecera y marcad dónde va flex."],
        nota: "Passa per les taules i demana a cada parella que t'expliqui per què el menú també necessita flex.|Pasa por las mesas y pide a cada pareja que te explique por qué el menú también necesita flex." },
      { id: 's11', k: 'activitat', t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", timer: 12, punts: ["Obre la sessió «Una al costat de l'altra».|Abre la sesión «Una al lado de la otra».", "Llegeix les 7 targetes i mira cada resultat.|Lee las 7 tarjetas y mira cada resultado.", "Prediu abans de triar.|Predice antes de elegir.", "Para al laboratori de flex.|Para en el laboratorio de flex."],
        nota: "A «Mans a l'obra» toquen «Ho hem fet!», perquè ja l'hem fet amb paper.|En «Manos a la obra» tocan «¡Lo hemos hecho!», porque ya lo hemos hecho con papel." },
      { id: 's12', k: 'repte', t: "On va el flex?|¿Dónde va el flex?", x: "Volem el logo a l'esquerra i el menú a la dreta. Quina regla està malament?|Queremos el logo a la izquierda y el menú a la derecha. ¿Qué regla está mal?",
        code: '.cap {\n  background-color: #1B2A4A;\n}\n.logo {\n  display: flex;\n  justify-content: space-between;\n}',
        nota: "Resolució: les dues línies passen de .logo a .cap i s'hi afegeix align-items: center.|Resolución: las dos líneas pasan de .logo a .cap y se añade align-items: center." },
      { id: 's13', k: 'repte', t: "Reptes de flex|Retos de flex", timer: 13, punts: ["1. El menú en fila|1. El menú en fila", "2. Les fitxes dels equips|2. Las fichas de los equipos", "3. La capçalera mal feta|3. La cabecera mal hecha", "4. El cartell al mig|4. El cartel en medio", "5. Les xapes que salten|5. Las chapas que saltan"],
        nota: "Qui acabi, el repte extra. Recorda que poden ajudar un company/a amb preguntes, sense tocar-li el teclat.|Quien termine, el reto extra. Recuerda que pueden ayudar a un compañero/a con preguntas, sin tocarle el teclado." },
      { id: 's14', k: 'activitat', t: "Crea: la meva web en fila|Crea: mi web en fila", timer: 7, x: "Capçalera amb logo i menú als extrems, targetes de coses preferides en fila i un peu amb el teu nom.|Cabecera con logo y menú en los extremos, tarjetas de cosas preferidas en fila y un pie con tu nombre.",
        nota: "Anima a personalitzar colors i textos: el comprovador només mira l'estructura.|Anima a personalizar colores y textos: el comprobador solo mira la estructura." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["display: flex va al pare i posa els fills en fila.|display: flex va en el padre y pone a los hijos en fila.", "justify-content reparteix, align-items alinea i gap separa.|justify-content reparte, align-items alinea y gap separa.", "column apila; wrap fa saltar de línia.|column apila; wrap hace saltar de línea."],
        nota: "Torna a la web del principi: ara ja saben com es fa aquell menú.|Vuelve a la web del principio: ahora ya saben cómo se hace aquel menú." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quines dues propietats centren una caixa?|¿Qué dos propiedades centran una caja?", "On poses display: flex en una capçalera?|¿Dónde pones display: flex en una cabecera?"],
        nota: "Anota qui confon pare i fills: ho reprendrem a l'inici de la sessió de graelles.|Anota quién confunde padre e hijos: lo retomaremos al inicio de la sesión de rejillas." }
    ],
    print: [
      { id: 'p1', t: "Targetes del contenidor flex|Tarjetas del contenedor flex", k: 'targetes',
        intro: "Un paquet per parella. Les caixes fan de fills dins un full que fa de contenidor; les propietats les treu el programador/a.|Un paquete por pareja. Las cajas hacen de hijos dentro de una hoja que hace de contenedor; las propiedades las saca el programador/a.",
        items: [
          { t: "Caixa: Logo|Caja: Logo", n: 1 }, { t: "Caixa: Inici|Caja: Inicio", n: 1 }, { t: "Caixa: Fotos|Caja: Fotos", n: 1 }, { t: "Caixa: Horaris|Caja: Horarios", n: 1 }, { t: "Caixa: Contacte|Caja: Contacto", n: 1 },
          { t: "display: flex|display: flex", n: 2 }, { t: "justify-content: center|justify-content: center", n: 1 }, { t: "justify-content: space-between|justify-content: space-between", n: 1 },
          { t: "justify-content: flex-end|justify-content: flex-end", n: 1 }, { t: "align-items: flex-end|align-items: flex-end", n: 1 }, { t: "flex-direction: column|flex-direction: column", n: 1 }, { t: "flex-wrap: wrap|flex-wrap: wrap", n: 1 }
        ] },
      { id: 'p2', t: "Fitxa: dibuixa el resultat|Ficha: dibuja el resultado", k: 'fitxa',
        intro: "Llegeix cada regla i dibuixa dins el requadre com quedarien tres caixes A, B i C.|Lee cada regla y dibuja dentro del recuadro cómo quedarían tres cajas A, B y C.",
        items: [
          { q: "El pare no té cap regla de flex.|El padre no tiene ninguna regla de flex.", sol: "A, B i C una sota l'altra, ocupant tota l'amplada.|A, B y C una debajo de la otra, ocupando todo el ancho." },
          { q: "display: flex i justify-content: flex-end.|display: flex y justify-content: flex-end.", sol: "A, B i C en fila, juntes, a la dreta del contenidor.|A, B y C en fila, juntas, a la derecha del contenedor." },
          { q: "display: flex i justify-content: space-between.|display: flex y justify-content: space-between.", sol: "A a l'esquerra, C a la dreta i B al mig, amb el mateix espai a cada banda.|A a la izquierda, C a la derecha y B en medio, con el mismo espacio a cada lado." },
          { q: "display: flex, flex-direction: column i gap: 10px.|display: flex, flex-direction: column y gap: 10px.", sol: "A, B i C una sota l'altra, separades 10 píxels.|A, B y C una debajo de la otra, separadas 10 píxeles." },
          { q: "Volem una caixa al mig del tot d'un contenidor de 200px d'alçada. Escriu la regla.|Queremos una caja en medio del todo de un contenedor de 200px de altura. Escribe la regla.", sol: "display: flex; justify-content: center; align-items: center; height: 200px;|display: flex; justify-content: center; align-items: center; height: 200px;" }
        ] }
    ]
  },

  /* ===== w6-2 · Graelles ===== */
  'w6-2': {
    obj: [
      "L'alumne/a crea una graella amb «display: grid» i defineix les columnes amb grid-template-columns.|El alumno/a crea una rejilla con «display: grid» y define las columnas con grid-template-columns.",
      "L'alumne/a fa servir les unitats px i fr i la funció repeat() per fer columnes fixes, flexibles i iguals.|El alumno/a usa las unidades px y fr y la función repeat() para hacer columnas fijas, flexibles e iguales.",
      "L'alumne/a construeix una galeria d'imatges que s'ajusten a la cel·la amb width: 100%.|El alumno/a construye una galería de imágenes que se ajustan a la celda con width: 100%.",
      "L'alumne/a fa que una cel·la ocupi dues columnes amb grid-column: span 2 i tria entre flex i grid.|El alumno/a hace que una celda ocupe dos columnas con grid-column: span 2 y elige entre flex y grid."
    ],
    comp: [
      "Competència digital (CD3): crear contingut digital amb HTML i CSS|Competencia digital (CD3): crear contenido digital con HTML y CSS",
      "Matemàtiques: fraccions i proporcions (repartir l'espai en parts)|Matemáticas: fracciones y proporciones (repartir el espacio en partes)",
      "Pensament computacional: abstracció d'una estructura en files i columnes|Pensamiento computacional: abstracción de una estructura en filas y columnas"
    ],
    vocab: [
      ["Graella (grid)|Rejilla (grid)", "Contenidor que col·loca els fills en files i columnes.|Contenedor que coloca a los hijos en filas y columnas."],
      ["grid-template-columns|grid-template-columns", "Propietat que diu quantes columnes hi ha i quina mida fa cadascuna.|Propiedad que dice cuántas columnas hay y qué medida tiene cada una."],
      ["fr|fr", "Unitat que reparteix l'espai lliure en parts (fraccions).|Unidad que reparte el espacio libre en partes (fracciones)."],
      ["repeat()|repeat()", "Funció per repetir columnes: quantes vegades, una coma i la mida.|Función para repetir columnas: cuántas veces, una coma y la medida."],
      ["span|span", "Paraula per estirar una cel·la per diverses columnes o files.|Palabra para estirar una celda por varias columnas o filas."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Graelles»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Rejillas»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per parella: un full, un llapis i 7 papers petits numerats (o pòsits)|Por pareja: una hoja, un lápiz y 7 papeles pequeños numerados (o pósits)"
      ],
      imprimir: ["Fitxa: graelles en paper|Ficha: rejillas en papel"],
      prep: [
        "Imprimir la fitxa (una per parella) i preparar 7 papers numerats per parella.|Imprimir la ficha (una por pareja) y preparar 7 papeles numerados por pareja.",
        "Tenir a mà la galeria de fotos d'un mòbil o una web de botiga per mostrar una graella real.|Tener a mano la galería de fotos de un móvil o una web de tienda para mostrar una rejilla real.",
        "Provar el laboratori de grid i comprovar què passa amb 1fr 2fr 1fr.|Probar el laboratorio de grid y comprobar qué pasa con 1fr 2fr 1fr."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: de la fila a la graella|Bienvenida: de la fila a la rejilla", fase: 'inici',
        fa: "Repassa flex amb una pregunta ràpida. Després mostra la galeria d'un mòbil i pregunta si això es pot fer amb flex. Introdueix la idea: flex pensa en una fila; grid, en files i columnes alhora.|Repasa flex con una pregunta rápida. Después muestra la galería de un móvil y pregunta si eso se puede hacer con flex. Introduce la idea: flex piensa en una fila; grid, en filas y columnas a la vez.",
        diu: ["On posàvem el display: flex? I el gap?|¿Dónde poníamos el display: flex? ¿Y el gap?",
          "Aquestes fotos quadren en files i en columnes. Com ho fan?|Estas fotos cuadran en filas y en columnas. ¿Cómo lo hacen?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Grid: columnes, fr i span|Grid: columnas, fr y span", fase: 'teoria',
        fa: "Explica que només es dibuixen les columnes: les files surten soles. Fes el càlcul de fr a la pissarra com una fracció (1fr 2fr = 3 parts). Mostra repeat() com una drecera i acaba amb span 2 i amb la comparació flex o grid.|Explica que solo se dibujan las columnas: las filas salen solas. Haz el cálculo de fr en la pizarra como una fracción (1fr 2fr = 3 partes). Muestra repeat() como un atajo y acaba con span 2 y con la comparación flex o grid.",
        diu: ["Si la pantalla fa 900 píxels, quant fa cada columna amb 1fr 2fr?|Si la pantalla mide 900 píxeles, ¿cuánto mide cada columna con 1fr 2fr?",
          "Quantes columnes surten amb repeat(4, 1fr)?|¿Cuántas columnas salen con repeat(4, 1fr)?",
          "Un menú, flex o grid? I un calendari?|Un menú, ¿flex o grid? ¿Y un calendario?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "La graella de paper|La rejilla de papel", fase: 'desconnectat',
        fa: "Per parelles, amb la fitxa: el programador/a llegeix una regla i el navegador dibuixa les columnes i col·loca els papers numerats. A l'última, canvien els papers: el navegador inventa una graella i l'altre n'endevina el CSS.|Por parejas, con la ficha: el programador/a lee una regla y el navegador dibuja las columnas y coloca los papeles numerados. En la última, cambian los papeles: el navegador inventa una rejilla y el otro adivina su CSS.",
        diu: ["Vosaltres només dibuixeu columnes: les files surten soles.|Vosotros solo dibujáis columnas: las filas salen solas.",
          "Amb el paper 1 en span 2, on va a parar el 3?|Con el papel 1 en span 2, ¿dónde va a parar el 3?"],
        slides: ['s10'], app: "Cap: activitat amb paper.|Ninguna: actividad con papel.", org: "Per parelles|Por parejas" },
      { min: 12, t: "A l'ordinador: prediu i investiga|En el ordenador: predice e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins al laboratori de grid. Al laboratori, demana'ls que facin una graella de 4 columnes i que t'expliquin què passa amb la cel·la gran.|Cada alumno/a avanza hasta el laboratorio de grid. En el laboratorio, pídeles que hagan una rejilla de 4 columnas y que te expliquen qué pasa con la celda grande.",
        diu: ["Compta: 5 caixes i 3 columnes, quantes files?|Cuenta: 5 cajas y 3 columnas, ¿cuántas filas?",
          "A l'error de repeat, què hi falta?|En el error de repeat, ¿qué falta?"],
        slides: ['s11'], app: "De «La missió» fins a «Investiga»: dues preguntes de repàs, dues històries, les 7 targetes, «Mans a l'obra» (ja fet), prediu la graella de 5 caixes, tria el codi de la columna fixa, troba l'error de repeat i el laboratori de grid.|De «La misión» hasta «Investiga»: dos preguntas de repaso, dos historias, las 7 tarjetas, «Manos a la obra» (ya hecho), predice la rejilla de 5 cajas, elige el código de la columna fija, encuentra el error de repeat y el laboratorio de grid.", org: "Individual|Individual" },
      { min: 13, t: "Pausa activa i reptes|Pausa activa y retos", fase: 'ordinador',
        fa: "Feu la pausa de la graella humana. Resol amb la classe el repte de la pàgina de notícies (tres errors) i deixa'ls fer els cinc reptes. El repte extra és per a qui acabi.|Haced la pausa de la rejilla humana. Resuelve con la clase el reto de la página de noticias (tres errores) y deja que hagan los cinco retos. El reto extra es para quien termine.",
        diu: ["Quins tres errors veieu en aquest CSS?|¿Qué tres errores veis en este CSS?",
          "A la galeria, recordeu el width: 100% de les imatges.|En la galería, recordad el width: 100% de las imágenes.",
          "Si la nota destacada no canvia de color, mireu l'ordre de les regles.|Si la nota destacada no cambia de color, mirad el orden de las reglas."],
        slides: ['s12', 's13'], app: "«Pausa activa», els reptes 1 a 5 (3 columnes, galeria de la protectora, pàgina de notícies, tauler amb nota destacada, calendari de 7 dies) i el repte extra.|«Pausa activa», los retos 1 a 5 (3 columnas, galería de la protectora, página de noticias, tablón con nota destacada, calendario de 7 días) y el reto extra.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: la meva galeria|Crea: mi galería", fase: 'crea',
        fa: "Cada alumne/a tria un tema i fa la seva galeria amb sis imatges com a mínim, cadascuna amb alt, i una de destacada. Recorda que l'alt descriu el que es veu.|Cada alumno/a elige un tema y hace su galería con seis imágenes como mínimo, cada una con alt, y una destacada. Recuerda que el alt describe lo que se ve.",
        diu: ["Quin tema triaràs? Quina imatge mereix ser la gran?|¿Qué tema elegirás? ¿Qué imagen merece ser la grande?",
          "Prova 2, 3 i 4 columnes: quina queda millor?|Prueba 2, 3 y 4 columnas: ¿cuál queda mejor?"],
        slides: ['s14'], app: "Pas «Crea»: La meva galeria (es desa al portafoli).|Paso «Crea»: Mi galería (se guarda en el portafolio).", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa fer les preguntes finals i fes el tiquet de sortida.|Repasa el resumen, deja hacer las preguntas finales y haz el ticket de salida.",
        diu: ["Escriviu una graella de 4 columnes iguals amb el dit a l'aire.|Escribid una rejilla de 4 columnas iguales con el dedo en el aire.",
          "Què faríeu servir per a un calendari, flex o grid?|¿Qué usaríais para un calendario, flex o grid?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu grid-template-columns però deixa «display: flex» o no posa display.|Escribe grid-template-columns pero deja «display: flex» o no pone display.",
        "Recorda-li que les columnes només existeixen en un contenidor grid: primer display: grid.|Recuérdale que las columnas solo existen en un contenedor grid: primero display: grid."],
      ["Escriu repeat(3 1fr) sense la coma, o repeat(1fr, 3) al revés.|Escribe repeat(3 1fr) sin la coma, o repeat(1fr, 3) al revés.",
        "Que ho llegeixi en veu alta: «repeteix 3 vegades, coma, 1fr». Primer el número, després la mida.|Que lo lea en voz alta: «repite 3 veces, coma, 1fr». Primero el número, después la medida."],
      ["Posa un número sense unitat (2 1fr) o fa servir % per a tot.|Pone un número sin unidad (2 1fr) o usa % para todo.",
        "Pregunta: 2 què? Píxels, fraccions? Que triï la unitat i miri el canvi.|Pregunta: ¿2 qué? ¿Píxeles, fracciones? Que elija la unidad y mire el cambio."],
      ["Les imatges de la galeria surten massa grans o es surten de la cel·la.|Las imágenes de la galería salen demasiado grandes o se salen de la celda.",
        "Falta width: 100% a les imatges: que el posi a la regla de les img de la galeria.|Falta width: 100% en las imágenes: que lo ponga en la regla de las img de la galería."],
      ["Posa grid-column: span 2 al contenidor en lloc de la cel·la.|Pone grid-column: span 2 en el contenedor en lugar de la celda.",
        "La graella es defineix al pare; l'estirament, a la cel·la que s'ha d'estirar. Que assenyali quina cel·la vol fer gran.|La rejilla se define en el padre; el estiramiento, en la celda que se tiene que estirar. Que señale qué celda quiere hacer grande."]
    ],
    diff: {
      mes: "Fer el repte extra de la revista i, a la seva galeria, provar grid-template-columns amb barreja d'unitats (200px 1fr 1fr) i una cel·la que ocupi dues files.|Hacer el reto extra de la revista y, en su galería, probar grid-template-columns con mezcla de unidades (200px 1fr 1fr) y una celda que ocupe dos filas.",
      menys: "Fer servir sempre repeat(3, 1fr) com a model escrit a la fitxa i començar pels reptes 1, 2 i 4. A «Crea», començar amb quatre imatges i afegir-ne després.|Usar siempre repeat(3, 1fr) como modelo escrito en la ficha y empezar por los retos 1, 2 y 4. En «Crea», empezar con cuatro imágenes y añadir más después."
    },
    aval: {
      ticket: ["Escriu el CSS d'una graella de 4 columnes iguals amb 10px d'espai.|Escribe el CSS de una rejilla de 4 columnas iguales con 10px de espacio.",
        "Digues una cosa que faries amb flex i una que faries amb grid.|Di una cosa que harías con flex y una que harías con grid."],
      rubric: [
        ["Definir columnes|Definir columnas", "Escriu columnes amb px, fr i repeat() i preveu el resultat.|Escribe columnas con px, fr y repeat() y prevé el resultado.", "Fa servir un model copiat i necessita provar per saber què fa.|Usa un modelo copiado y necesita probar para saber qué hace."],
        ["Galeria d'imatges|Galería de imágenes", "La galeria té graella, gap, imatges a l'amplada de la cel·la i alt a totes.|La galería tiene rejilla, gap, imágenes al ancho de la celda y alt en todas.", "La graella funciona, però falten alt o les imatges no s'ajusten.|La rejilla funciona, pero faltan alt o las imágenes no se ajustan."],
        ["Triar l'eina|Elegir la herramienta", "Justifica quan cal flex i quan cal grid amb un exemple.|Justifica cuándo hace falta flex y cuándo grid con un ejemplo.", "Les fa servir, però encara no sap explicar quina convé.|Las usa, pero todavía no sabe explicar cuál conviene."]
      ]
    },
    casa: "A casa, amb el mòbil, obriu la galeria de fotos i compteu quantes columnes té. Després gireu el mòbil: en té més? Penseu quina regla de grid faria cada vista.|En casa, con el móvil, abrid la galería de fotos y contad cuántas columnas tiene. Después girad el móvil: ¿tiene más? Pensad qué regla de grid haría cada vista.",
    slides: [
      { id: 's1', k: 'portada', t: "Graelles|Rejillas", x: "Avui aprendrem grid: files i columnes alhora, per fer galeries, calendaris i taulers.|Hoy aprenderemos grid: filas y columnas a la vez, para hacer galerías, calendarios y tablones.",
        nota: "Presenta el resultat final: una galeria pròpia amb una imatge destacada.|Presenta el resultado final: una galería propia con una imagen destacada." },
      { id: 's2', k: 'repas', t: "Recordem flex|Recordemos flex", punts: ["display: flex va al pare.|display: flex va en el padre.", "justify-content reparteix i gap separa.|justify-content reparte y gap separa.", "flex-wrap fa saltar de línia.|flex-wrap hace saltar de línea."],
        code: '.menu {\n  display: flex;\n  gap: 20px;\n}',
        nota: "Pregunta qui recorda on va el display: flex. Si hi ha dubtes, torna-hi amb un exemple.|Pregunta quién recuerda dónde va el display: flex. Si hay dudas, vuelve a ello con un ejemplo." },
      { id: 's3', k: 'pregunta', t: "Files i columnes|Filas y columnas", x: "La galeria del mòbil quadra en files i en columnes. Es pot fer amb flex?|La galería del móvil cuadra en filas y en columnas. ¿Se puede hacer con flex?",
        nota: "Amb flex-wrap s'hi acostaria, però les columnes no sempre quadren. Grid ho fa directament.|Con flex-wrap se acercaría, pero las columnas no siempre cuadran. Grid lo hace directamente." },
      { id: 's4', k: 'anim', t: "Una graella de debò|Una rejilla de verdad", anim: 'wgrid', x: "Tu dibuixes les columnes i el navegador omple les cel·les per ordre.|Tú dibujas las columnas y el navegador llena las celdas por orden.",
        nota: "Remarca que les files es creen soles segons quants fills hi ha.|Remarca que las filas se crean solas según cuántos hijos hay." },
      { id: 's5', k: 'concepte', t: "grid-template-columns|grid-template-columns", x: "Cada valor és una columna. Tres valors, tres columnes.|Cada valor es una columna. Tres valores, tres columnas.",
        code: '.graella {\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  gap: 8px;\n}',
        nota: "Pregunta: si hi ha 7 fills, quantes files surten? (3: dues plenes i una amb un fill).|Pregunta: si hay 7 hijos, ¿cuántas filas salen? (3: dos llenas y una con un hijo)." },
      { id: 's6', k: 'concepte', t: "La unitat fr|La unidad fr", punts: ["fr = una part de l'espai lliure|fr = una parte del espacio libre", "1fr 2fr: 3 parts, la segona en té 2|1fr 2fr: 3 partes, la segunda tiene 2", "200px 1fr: una fixa i una que s'estira|200px 1fr: una fija y otra que se estira"],
        code: '.graella {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}',
        nota: "Fes el càlcul a la pissarra amb 900 píxels: 300 i 600.|Haz el cálculo en la pizarra con 900 píxeles: 300 y 600." },
      { id: 's7', k: 'concepte', t: "repeat() i span|repeat() y span", punts: ["repeat(4, 1fr) = 1fr 1fr 1fr 1fr|repeat(4, 1fr) = 1fr 1fr 1fr 1fr", "Primer quantes vegades, després la mida|Primero cuántas veces, después la medida", "grid-column: span 2 estira una cel·la|grid-column: span 2 estira una celda"],
        code: '.galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.gran {\n  grid-column: span 2;\n}',
        nota: "Insisteix en la coma de repeat: és l'error més habitual.|Insiste en la coma de repeat: es el error más habitual." },
      { id: 's8', k: 'concepte', t: "Una galeria d'imatges|Una galería de imágenes", x: "Cada imatge és una cel·la. Amb width: 100% omple exactament la seva columna.|Cada imagen es una celda. Con width: 100% llena exactamente su columna.",
        code: '.galeria img {\n  width: 100%;\n  border-radius: 12px;\n}',
        nota: "Mostra què passa sense width: 100%: les imatges no s'adapten a la columna.|Muestra qué pasa sin width: 100%: las imágenes no se adaptan a la columna." },
      { id: 's9', k: 'pregunta', t: "Flex o grid?|¿Flex o grid?", punts: ["Un menú de 5 opcions|Un menú de 5 opciones", "Un calendari d'un mes|Un calendario de un mes", "Una capçalera amb logo i menú|Una cabecera con logo y menú", "Una galeria de 12 fotos|Una galería de 12 fotos"],
        nota: "Respostes: flex, grid, flex, grid. Una fila, flex; files i columnes que quadren, grid.|Respuestas: flex, grid, flex, grid. Una fila, flex; filas y columnas que cuadran, grid." },
      { id: 's10', k: 'activitat', t: "La graella de paper|La rejilla de papel", timer: 8, punts: ["Programador/a: llegeix una regla de la fitxa.|Programador/a: lee una regla de la ficha.", "Navegador: dibuixa les columnes i col·loca els papers.|Navegador: dibuja las columnas y coloca los papeles.", "Comproveu-ho junts amb la solució.|Comprobadlo juntos con la solución.", "Últim: inventeu una graella i endevineu el CSS.|Último: inventad una rejilla y adivinad el CSS."],
        nota: "Comprova que col·loquen els papers d'esquerra a dreta i de dalt a baix.|Comprueba que colocan los papeles de izquierda a derecha y de arriba abajo." },
      { id: 's11', k: 'activitat', t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", timer: 12, punts: ["Obre la sessió «Graelles».|Abre la sesión «Rejillas».", "Mira el codi i el resultat de cada targeta.|Mira el código y el resultado de cada tarjeta.", "Prediu abans de triar.|Predice antes de elegir.", "Para al laboratori de grid.|Para en el laboratorio de grid."],
        nota: "A «Mans a l'obra» toquen «Ho hem fet!»: ja l'hem fet amb paper.|En «Manos a la obra» tocan «¡Lo hemos hecho!»: ya lo hemos hecho con papel." },
      { id: 's12', k: 'repte', t: "Tres errors|Tres errores", x: "Aquesta pàgina hauria de fer dues columnes, 2fr i 1fr. Trobeu els tres errors.|Esta página debería hacer dos columnas, 2fr y 1fr. Encontrad los tres errores.",
        code: '.pagina {\n  display: flex;\n  grid-template-columns: 2 1fr;\n  gap 20px;\n}',
        nota: "Errors: display ha de ser grid, al 2 li falta fr i a gap li falten els dos punts.|Errores: display tiene que ser grid, al 2 le falta fr y a gap le faltan los dos puntos." },
      { id: 's13', k: 'repte', t: "Reptes de grid|Retos de grid", timer: 13, punts: ["1. Tres columnes|1. Tres columnas", "2. La galeria de la protectora|2. La galería de la protectora", "3. La pàgina de notícies|3. La página de noticias", "4. La nota destacada|4. La nota destacada", "5. El calendari de 7 dies|5. El calendario de 7 días"],
        nota: "Al repte 4, si el color no canvia, la regla destacada ha d'anar després de la de les notes.|En el reto 4, si el color no cambia, la regla destacada tiene que ir después de la de las notas." },
      { id: 's14', k: 'activitat', t: "Crea: la meva galeria|Crea: mi galería", timer: 7, x: "Un tema teu, un títol, sis imatges amb alt, una graella amb gap i una imatge que ocupi dues columnes.|Un tema tuyo, un título, seis imágenes con alt, una rejilla con gap y una imagen que ocupe dos columnas.",
        nota: "Recorda que les imatges disponibles són les de la llista de l'editor.|Recuerda que las imágenes disponibles son las de la lista del editor." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["display: grid i grid-template-columns fan la graella.|display: grid y grid-template-columns hacen la rejilla.", "fr reparteix; repeat() escurça.|fr reparte; repeat() acorta.", "span 2 estira una cel·la per dues columnes.|span 2 estira una celda por dos columnas."],
        nota: "Pregunta quina part de la galeria del principi ja sabrien fer.|Pregunta qué parte de la galería del principio ya sabrían hacer." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["CSS d'una graella de 4 columnes iguals amb 10px d'espai.|CSS de una rejilla de 4 columnas iguales con 10px de espacio.", "Una cosa per a flex i una per a grid.|Una cosa para flex y una para grid."],
        nota: "Anota qui encara escriu repeat sense coma per repassar-ho a la propera sessió.|Anota quién todavía escribe repeat sin coma para repasarlo en la próxima sesión." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: graelles en paper|Ficha: rejillas en papel", k: 'fitxa',
        intro: "Per parelles. Per a cada regla, dibuixeu les columnes i col·loqueu-hi els papers numerats de l'1 al 7 per ordre.|Por parejas. Para cada regla, dibujad las columnas y colocad en ellas los papeles numerados del 1 al 7 por orden.",
        items: [
          { q: "grid-template-columns: 1fr 1fr 1fr. Quantes files surten?|grid-template-columns: 1fr 1fr 1fr. ¿Cuántas filas salen?", sol: "3 files: 1-2-3, 4-5-6 i el 7 sol.|3 filas: 1-2-3, 4-5-6 y el 7 solo." },
          { q: "grid-template-columns: 2fr 1fr. Quina columna és més ampla i quantes files hi ha?|grid-template-columns: 2fr 1fr. ¿Qué columna es más ancha y cuántas filas hay?", sol: "La primera és el doble d'ampla. 4 files: 1-2, 3-4, 5-6 i el 7.|La primera es el doble de ancha. 4 filas: 1-2, 3-4, 5-6 y el 7." },
          { q: "3 columnes iguals i el paper 1 amb grid-column: span 2. On va el paper 3?|3 columnas iguales y el papel 1 con grid-column: span 2. ¿Dónde va el papel 3?", sol: "Fila 1: el 1 (dues columnes) i el 2. El 3 comença la fila 2.|Fila 1: el 1 (dos columnas) y el 2. El 3 empieza la fila 2." },
          { q: "Escriu amb repeat() una graella de 5 columnes iguals.|Escribe con repeat() una rejilla de 5 columnas iguales.", sol: "grid-template-columns: repeat(5, 1fr);|grid-template-columns: repeat(5, 1fr);" },
          { q: "Troba l'error: grid-template-columns: repeat(3 1fr);|Encuentra el error: grid-template-columns: repeat(3 1fr);", sol: "Falta la coma: repeat(3, 1fr).|Falta la coma: repeat(3, 1fr)." }
        ] }
    ]
  },

  /* ===== w6-3 · Taules ===== */
  'w6-3': {
    obj: [
      "L'alumne/a construeix una taula fila a fila amb les etiquetes table, tr, td i th.|El alumno/a construye una tabla fila a fila con las etiquetas table, tr, td y th.",
      "L'alumne/a organitza una taula amb caption, thead i tbody.|El alumno/a organiza una tabla con caption, thead y tbody.",
      "L'alumne/a fa una taula llegible amb border-collapse, padding a les cel·les i files alternes amb nth-child(even).|El alumno/a hace una tabla legible con border-collapse, padding en las celdas y filas alternas con nth-child(even).",
      "L'alumne/a distingeix quan cal una taula (dades) i quan cal flex o grid (col·locar parts de la pàgina).|El alumno/a distingue cuándo hace falta una tabla (datos) y cuándo flex o grid (colocar partes de la página)."
    ],
    comp: [
      "Competència digital (CD3): crear contingut digital amb HTML i CSS|Competencia digital (CD3): crear contenido digital con HTML y CSS",
      "Matemàtiques: organització i representació de dades en taules|Matemáticas: organización y representación de datos en tablas",
      "Accessibilitat: estructura semàntica que entenen els lectors de pantalla|Accesibilidad: estructura semántica que entienden los lectores de pantalla"
    ],
    vocab: [
      ["Fila (tr)|Fila (tr)", "Línia horitzontal d'una taula; conté les cel·les.|Línea horizontal de una tabla; contiene las celdas."],
      ["Cel·la (td)|Celda (td)", "Lloc on es creuen una fila i una columna; hi va una dada.|Lugar donde se cruzan una fila y una columna; ahí va un dato."],
      ["Cel·la de títol (th)|Celda de título (th)", "Cel·la que explica una columna o una fila.|Celda que explica una columna o una fila."],
      ["caption|caption", "Títol de la taula, just després de l'etiqueta table.|Título de la tabla, justo después de la etiqueta table."],
      ["border-collapse|border-collapse", "Propietat que fon les vores de les cel·les veïnes en una de sola.|Propiedad que funde los bordes de las celdas vecinas en uno solo."],
      ["nth-child(even)|nth-child(even)", "Selector que tria els elements que fan un número parell.|Selector que elige los elementos que hacen un número par."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Taules»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Tablas»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un full i llapis de colors per parella|Una hoja y lápices de colores por pareja"
      ],
      imprimir: ["Fitxa: taules en paper|Ficha: tablas en papel"],
      prep: [
        "Imprimir la fitxa, una per parella.|Imprimir la ficha, una por pareja.",
        "Portar un exemple de taula real en paper o a la pantalla (horari, classificació, preus) per començar la classe.|Traer un ejemplo de tabla real en papel o en pantalla (horario, clasificación, precios) para empezar la clase.",
        "Provar el repte de la taula trencada per conèixer els avisos que dona l'editor.|Probar el reto de la tabla rota para conocer los avisos que da el editor."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: dades en creu|Bienvenida: datos en cruz", fase: 'inici',
        fa: "Repassa grid amb una pregunta. Mostra una taula real (un horari) i fes que llegeixin una dada creuant fila i columna. Pregunta en què es diferencia d'una galeria.|Repasa grid con una pregunta. Muestra una tabla real (un horario) y haz que lean un dato cruzando fila y columna. Pregunta en qué se diferencia de una galería.",
        diu: ["Què fa dimecres a les 18 h? Com ho heu trobat?|¿Qué hace el miércoles a las 18 h? ¿Cómo lo habéis encontrado?",
          "En una galeria, una foto no depèn de la columna. En un horari, sí.|En una galería, una foto no depende de la columna. En un horario, sí."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Les etiquetes de la taula|Las etiquetas de la tabla", fase: 'teoria',
        fa: "Explica que la taula es construeix fila a fila: no hi ha etiqueta de columna. Construeix a la pissarra una taula de 2 × 2 dient cada etiqueta en veu alta. Mostra th, caption, thead i tbody, i acaba amb l'estil i amb per què no s'han de fer servir per maquetar.|Explica que la tabla se construye fila a fila: no hay etiqueta de columna. Construye en la pizarra una tabla de 2 × 2 diciendo cada etiqueta en voz alta. Muestra th, caption, thead y tbody, y acaba con el estilo y con por qué no se deben usar para maquetar.",
        diu: ["On és l'etiqueta de columna? No n'hi ha: les columnes surten soles.|¿Dónde está la etiqueta de columna? No la hay: las columnas salen solas.",
          "Si una fila té menys cel·les, què passarà?|Si una fila tiene menos celdas, ¿qué pasará?",
          "Per què les vores surten dobles? Què les fon?|¿Por qué los bordes salen dobles? ¿Qué los funde?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "L'horari de paper|El horario de papel", fase: 'desconnectat',
        fa: "Per parelles: dibuixen l'horari d'una setmana i després l'escriuen en HTML a mà (amb la fitxa). L'altre fa de revisor/a: compta files i cel·les. Al final pinten les files parells.|Por parejas: dibujan el horario de una semana y después lo escriben en HTML a mano (con la ficha). El otro hace de revisor/a: cuenta filas y celdas. Al final pintan las filas pares.",
        diu: ["Quantes cel·les té cada fila? Han de ser les mateixes.|¿Cuántas celdas tiene cada fila? Tienen que ser las mismas.",
          "Quines files pintaria nth-child(even)?|¿Qué filas pintaría nth-child(even)?"],
        slides: ['s10'], app: "Cap: activitat amb paper.|Ninguna: actividad con papel.", org: "Per parelles|Por parejas" },
      { min: 12, t: "A l'ordinador: prediu i investiga|En el ordenador: predice e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins al laboratori de taules. Al laboratori, demana'ls que afegeixin una fila i que canviïn even per odd.|Cada alumno/a avanza hasta el laboratorio de tablas. En el laboratorio, pídeles que añadan una fila y que cambien even por odd.",
        diu: ["Compta els tr: quantes files tindrà la taula?|Cuenta los tr: ¿cuántas filas tendrá la tabla?",
          "A l'error, quina etiqueta hauria de portar barra?|En el error, ¿qué etiqueta debería llevar barra?"],
        slides: ['s11'], app: "De «La missió» fins a «Investiga»: dues preguntes de repàs, dues històries, les 7 targetes, «Mans a l'obra» (ja fet), prediu la taula, tria el CSS de les vores, troba la fila mal tancada i el laboratori de taules.|De «La misión» hasta «Investiga»: dos preguntas de repaso, dos historias, las 7 tarjetas, «Manos a la obra» (ya hecho), predice la tabla, elige el CSS de los bordes, encuentra la fila mal cerrada y el laboratorio de tablas.", org: "Individual|Individual" },
      { min: 13, t: "Pausa activa i reptes|Pausa activa y retos", fase: 'ordinador',
        fa: "Feu la pausa. Resol amb la classe la taula trencada de la diapositiva i deixa'ls fer els cinc reptes: horari, estil, concurs, lliga i, per a qui acabi, la fila del pati.|Haced la pausa. Resuelve con la clase la tabla rota de la diapositiva y deja que hagan los cinco retos: horario, estilo, concurso, liga y, para quien termine, la fila del patio.",
        diu: ["Llegiu els avisos de sota l'editor: diuen la línia de l'error.|Leed los avisos de debajo del editor: dicen la línea del error.",
          "A la lliga, escriviu primer una fila sencera i copieu-la.|En la liga, escribid primero una fila entera y copiadla."],
        slides: ['s12', 's13'], app: "«Pausa activa», els reptes 1 a 4 (horari del centre cívic, vores i farciment, concurs de pastissos trencat, classificació de la lliga) i el repte extra de la fila del pati.|«Pausa activa», los retos 1 a 4 (horario del centro cívico, bordes y relleno, concurso de pasteles roto, clasificación de la liga) y el reto extra de la fila del patio.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 7, t: "Crea: la meva taula de dades|Crea: mi tabla de datos", fase: 'crea',
        fa: "Cada alumne/a tria unes dades seves i en fa una taula completa. Si no saben què triar, proposa l'horari de la setmana o els llibres preferits amb una nota.|Cada alumno/a elige unos datos suyos y hace con ellos una tabla completa. Si no saben qué elegir, propone el horario de la semana o los libros preferidos con una nota.",
        diu: ["Quines dades teves es llegeixen millor en una taula?|¿Qué datos tuyos se leen mejor en una tabla?",
          "Abans d'escriure, quantes columnes tindrà la teva taula?|Antes de escribir, ¿cuántas columnas tendrá tu tabla?"],
        slides: ['s14'], app: "Pas «Crea»: La meva taula de dades (es desa al portafoli).|Paso «Crea»: Mi tabla de datos (se guarda en el portafolio).", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa fer les preguntes finals i fes el tiquet de sortida.|Repasa el resumen, deja hacer las preguntas finales y haz el ticket de salida.",
        diu: ["Quina etiqueta fa una fila? I una cel·la de títol?|¿Qué etiqueta hace una fila? ¿Y una celda de título?",
          "Faríeu el menú d'una web amb una taula? Per què?|¿Haríais el menú de una web con una tabla? ¿Por qué?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Intenta escriure la taula columna a columna.|Intenta escribir la tabla columna a columna.",
        "Que assenyali la primera fila al paper i l'escrigui sencera abans de passar a la següent.|Que señale la primera fila en el papel y la escriba entera antes de pasar a la siguiente."],
      ["Una fila té menys cel·les que les altres i la taula queda coixa.|Una fila tiene menos celdas que las demás y la tabla queda coja.",
        "Que compti les cel·les de cada fila en veu alta i compari els números.|Que cuente las celdas de cada fila en voz alta y compare los números."],
      ["Posa la vora només a l'etiqueta table i no surten línies entre cel·les.|Pone el borde solo en la etiqueta table y no salen líneas entre celdas.",
        "La vora ha d'anar a th i td; a la taula, només border-collapse.|El borde tiene que ir en th y td; en la tabla, solo border-collapse."],
      ["Oblida tancar un tr o un td, o escriu l'etiqueta de tancar sense barra.|Olvida cerrar un tr o un td, o escribe la etiqueta de cerrar sin barra.",
        "Que llegeixi l'avís de sota l'editor i vagi a la línia que indica.|Que lea el aviso de debajo del editor y vaya a la línea que indica."],
      ["Fa servir la taula per col·locar parts de la pàgina (menú i contingut).|Usa la tabla para colocar partes de la página (menú y contenido).",
        "Pregunta: això són dades? Si no ho són, flex o grid. Explica que el lector de pantalla ho llegiria com a dades.|Pregunta: ¿esto son datos? Si no lo son, flex o grid. Explica que el lector de pantalla lo leería como datos."]
    ],
    diff: {
      mes: "Fer el repte extra amb colspan i, a la seva taula, afegir una fila final de totals que ocupi diverses columnes, i una columna de números alineada a la dreta amb text-align.|Hacer el reto extra con colspan y, en su tabla, añadir una fila final de totales que ocupe varias columnas, y una columna de números alineada a la derecha con text-align.",
      menys: "Treballar amb la taula ja dibuixada al paper i una fila model escrita a la fitxa per copiar. Fer els reptes 1, 2 i 3; a «Crea», una taula de 2 columnes i 4 files.|Trabajar con la tabla ya dibujada en papel y una fila modelo escrita en la ficha para copiar. Hacer los retos 1, 2 y 3; en «Crea», una tabla de 2 columnas y 4 filas."
    },
    aval: {
      ticket: ["Quina etiqueta fa una fila i quina una cel·la de títol?|¿Qué etiqueta hace una fila y cuál una celda de título?",
        "Digues una cosa que posaries en una taula i una que no.|Di una cosa que pondrías en una tabla y una que no."],
      rubric: [
        ["Estructura de la taula|Estructura de la tabla", "Fa taules ben tancades, amb el mateix nombre de cel·les a cada fila, caption, thead i tbody.|Hace tablas bien cerradas, con el mismo número de celdas en cada fila, caption, thead y tbody.", "La taula funciona però falta caption o thead, o hi ha files coixes.|La tabla funciona pero falta caption o thead, o hay filas cojas."],
        ["Estil llegible|Estilo legible", "Fa servir border-collapse, padding i files alternes.|Usa border-collapse, padding y filas alternas.", "Aplica una o dues d'aquestes millores.|Aplica una o dos de estas mejoras."],
        ["Quan fer servir taules|Cuándo usar tablas", "Explica que les taules són per a dades i dona exemples correctes.|Explica que las tablas son para datos y da ejemplos correctos.", "Encara proposa taules per col·locar parts de la pàgina.|Todavía propone tablas para colocar partes de la página."]
      ]
    },
    casa: "A casa, busqueu amb el mòbil una taula de dades real (un horari de tren o d'autobús, una classificació, una recepta amb quantitats) i compteu-ne les files i les columnes. Quin seria el seu caption?|En casa, buscad con el móvil una tabla de datos real (un horario de tren o de autobús, una clasificación, una receta con cantidades) y contad sus filas y columnas. ¿Cuál sería su caption?",
    slides: [
      { id: 's1', k: 'portada', t: "Taules|Tablas", x: "Avui aprendrem a fer taules de dades: horaris, classificacions i rànquings.|Hoy aprenderemos a hacer tablas de datos: horarios, clasificaciones y rankings.",
        nota: "Presenta el resultat final: una taula pròpia, clara i amb colors alterns.|Presenta el resultado final: una tabla propia, clara y con colores alternos." },
      { id: 's2', k: 'repas', t: "Recordem grid|Recordemos grid", punts: ["display: grid fa una graella.|display: grid hace una rejilla.", "repeat(3, 1fr) fa tres columnes iguals.|repeat(3, 1fr) hace tres columnas iguales.", "span 2 estira una cel·la.|span 2 estira una celda."],
        code: '.galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}',
        nota: "Pregunta: per a què faríeu servir grid? Recull galeria, calendari, tauler.|Pregunta: ¿para qué usaríais grid? Recoge galería, calendario, tablón." },
      { id: 's3', k: 'pregunta', t: "Llegim en creu|Leemos en cruz", x: "En un horari, com sabeu què toca dimecres a les 18 h?|En un horario, ¿cómo sabéis qué toca el miércoles a las 18 h?",
        nota: "Busquen la columna del dia i la fila de l'hora: on es creuen hi ha la dada. Això és una taula.|Buscan la columna del día y la fila de la hora: donde se cruzan está el dato. Eso es una tabla." },
      { id: 's4', k: 'anim', t: "Files i cel·les|Filas y celdas", anim: 'wtable', x: "Cada fila és un tr; cada cel·la, un td. Les columnes surten soles.|Cada fila es un tr; cada celda, un td. Las columnas salen solas.",
        nota: "Remarca que no hi ha cap etiqueta de columna.|Remarca que no hay ninguna etiqueta de columna." },
      { id: 's5', k: 'concepte', t: "La taula fila a fila|La tabla fila a fila", x: "Dues files, dues cel·les per fila: una taula de 2 × 2.|Dos filas, dos celdas por fila: una tabla de 2 × 2.",
        code: '<table>\n  <tr>\n    <td>Dilluns</td>\n    <td>Bàsquet</td>\n  </tr>\n  <tr>\n    <td>Dimarts</td>\n    <td>Piscina</td>\n  </tr>\n</table>',
        nota: "Escriu-la a la pissarra dient cada etiqueta en veu alta.|Escríbela en la pizarra diciendo cada etiqueta en voz alta." },
      { id: 's6', k: 'concepte', t: "Títols i parts|Títulos y partes", punts: ["th: cel·la de títol, en negreta|th: celda de título, en negrita", "caption: el títol de la taula|caption: el título de la tabla", "thead: la fila de títols|thead: la fila de títulos", "tbody: les dades|tbody: los datos"],
        code: '<table>\n  <caption>Horari</caption>\n  <thead>\n    <tr><th>Dia</th><th>Activitat</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Dilluns</td><td>Bàsquet</td></tr>\n  </tbody>\n</table>',
        nota: "Explica que els lectors de pantalla fan servir els th per dir a quina columna és cada dada.|Explica que los lectores de pantalla usan los th para decir en qué columna está cada dato." },
      { id: 's7', k: 'concepte', t: "Vores i aire|Bordes y aire", x: "La vora va a les cel·les; border-collapse a la taula les fon; padding dona aire.|El borde va en las celdas; border-collapse en la tabla los funde; padding da aire.",
        code: 'table {\n  border-collapse: collapse;\n}\nth, td {\n  border: 2px solid #2F6BFF;\n  padding: 8px;\n}',
        nota: "Mostra el resultat amb i sense border-collapse: les línies dobles ho fan evident.|Muestra el resultado con y sin border-collapse: las líneas dobles lo hacen evidente." },
      { id: 's8', k: 'concepte', t: "Files de colors alterns|Filas de colores alternos", x: "nth-child(even) tria les files parells. L'ull segueix la fila sense perdre's.|nth-child(even) elige las filas pares. El ojo sigue la fila sin perderse.",
        code: 'tbody tr:nth-child(even) {\n  background-color: #E8F0FF;\n}',
        nota: "Pregunta quines files pintaria odd. Resposta: les senars (1a, 3a…).|Pregunta qué filas pintaría odd. Respuesta: las impares (1.ª, 3.ª…)." },
      { id: 's9', k: 'pregunta', t: "Taula sí o taula no?|¿Tabla sí o tabla no?", punts: ["La classificació d'una lliga|La clasificación de una liga", "El menú d'una web|El menú de una web", "Els preus d'una piscina|Los precios de una piscina", "Una galeria de fotos|Una galería de fotos"],
        nota: "Respostes: sí, no (flex), sí, no (grid). Les taules, només per a dades.|Respuestas: sí, no (flex), sí, no (grid). Las tablas, solo para datos." },
      { id: 's10', k: 'activitat', t: "L'horari de paper|El horario de papel", timer: 8, punts: ["Dibuixeu un horari de 3 columnes i 4 files.|Dibujad un horario de 3 columnas y 4 filas.", "Escriviu-lo en HTML a la fitxa, fila a fila.|Escribidlo en HTML en la ficha, fila a fila.", "Revisor/a: compta files i cel·les.|Revisor/a: cuenta filas y celdas.", "Pinteu les files parells.|Pintad las filas pares."],
        nota: "Comprova que cap parella intenta escriure columna a columna.|Comprueba que ninguna pareja intenta escribir columna a columna." },
      { id: 's11', k: 'activitat', t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", timer: 12, punts: ["Obre la sessió «Taules».|Abre la sesión «Tablas».", "Mira el codi i el resultat de cada targeta.|Mira el código y el resultado de cada tarjeta.", "Prediu abans de triar.|Predice antes de elegir.", "Para al laboratori de taules.|Para en el laboratorio de tablas."],
        nota: "A «Mans a l'obra» toquen «Ho hem fet!»: ja l'hem fet amb paper.|En «Manos a la obra» tocan «¡Lo hemos hecho!»: ya lo hemos hecho con papel." },
      { id: 's12', k: 'repte', t: "La taula trencada|La tabla rota", x: "Quines etiquetes estan malament? Quina cel·la falta?|¿Qué etiquetas están mal? ¿Qué celda falta?",
        code: '<tbody>\n  <tr>\n    <td>Xocolata</td>\n    <td>8</td>\n  <tr>\n    <td>Formatge<td>\n    <td>7</td>\n    <td>10</td>\n  </tr>\n</tbody>',
        nota: "Errors: la primera fila no es tanca i li falta una cel·la; Formatge té un td en lloc de la barra de tancar.|Errores: la primera fila no se cierra y le falta una celda; Formatge tiene un td en lugar de la barra de cerrar." },
      { id: 's13', k: 'repte', t: "Reptes de taules|Retos de tablas", timer: 13, punts: ["1. L'horari: caption i capçalera|1. El horario: caption y cabecera", "2. Vores i farciment|2. Bordes y relleno", "3. El concurs trencat|3. El concurso roto", "4. La classificació de la lliga|4. La clasificación de la liga", "Extra: la fila del pati amb colspan|Extra: la fila del patio con colspan"],
        nota: "A la lliga, recomana escriure una fila sencera i copiar-la tres vegades.|En la liga, recomienda escribir una fila entera y copiarla tres veces." },
      { id: 's14', k: 'activitat', t: "Crea: la meva taula de dades|Crea: mi tabla de datos", timer: 7, x: "Unes dades teves en una taula amb títol, capçalera, quatre files o més, vores i colors alterns.|Unos datos tuyos en una tabla con título, cabecera, cuatro filas o más, bordes y colores alternos.",
        nota: "Si algú no sap què triar, proposa l'horari de la setmana.|Si alguien no sabe qué elegir, propone el horario de la semana." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["table, tr, td i th: la taula fila a fila.|table, tr, td y th: la tabla fila a fila.", "caption, thead i tbody l'organitzen.|caption, thead y tbody la organizan.", "Taules per a dades; flex i grid per col·locar.|Tablas para datos; flex y grid para colocar."],
        nota: "Lliga-ho amb la propera sessió: al projecte faran servir flex, grid i una taula alhora.|Enlázalo con la próxima sesión: en el proyecto usarán flex, grid y una tabla a la vez." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quina etiqueta fa una fila? I una cel·la de títol?|¿Qué etiqueta hace una fila? ¿Y una celda de título?", "Una cosa per a una taula i una que no.|Una cosa para una tabla y una que no."],
        nota: "Anota qui confon tr i td per repassar-ho a l'inici del projecte.|Anota quién confunde tr y td para repasarlo al inicio del proyecto." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: taules en paper|Ficha: tablas en papel", k: 'fitxa',
        intro: "Per parelles. Responeu a mà; quan escriviu codi, poseu els noms de les etiquetes entre angles com a l'ordinador.|Por parejas. Responded a mano; cuando escribáis código, poned los nombres de las etiquetas entre ángulos como en el ordenador.",
        items: [
          { q: "Una taula té 3 tr i cada tr té 4 td. Quantes files i columnes té?|Una tabla tiene 3 tr y cada tr tiene 4 td. ¿Cuántas filas y columnas tiene?", sol: "3 files i 4 columnes (12 cel·les).|3 filas y 4 columnas (12 celdas)." },
          { q: "Escriu la fila de títols d'un horari amb Dia, Matí i Tarda.|Escribe la fila de títulos de un horario con Día, Mañana y Tarde.", sol: "Un tr amb tres th: Dia, Matí i Tarda, tot dins un thead.|Un tr con tres th: Día, Mañana y Tarde, todo dentro de un thead." },
          { q: "Troba l'error: una fila té td de Dilluns, td de Natació i després s'obre un altre tr.|Encuentra el error: una fila tiene td de Lunes, td de Natación y después se abre otro tr.", sol: "La fila no es tanca: cal la barra de tancar del tr abans d'obrir-ne un altre.|La fila no se cierra: hace falta la barra de cerrar del tr antes de abrir otro." },
          { q: "Les vores de la taula surten dobles. Quina propietat ho arregla i a quina etiqueta va?|Los bordes de la tabla salen dobles. ¿Qué propiedad lo arregla y en qué etiqueta va?", sol: "border-collapse: collapse, a table.|border-collapse: collapse, en table." },
          { q: "Quines files pinta tbody tr:nth-child(even) en una taula de 6 files de dades?|¿Qué filas pinta tbody tr:nth-child(even) en una tabla de 6 filas de datos?", sol: "La 2a, la 4a i la 6a.|La 2.ª, la 4.ª y la 6.ª." }
        ] }
    ]
  },

  /* ===== w6-4 · Projecte: l'àlbum de fotos ===== */
  'w6-4': {
    obj: [
      "L'alumne/a planifica una pàgina amb un esbós i decideix quina part es fa amb flex, amb grid o amb una taula.|El alumno/a planifica una página con un boceto y decide qué parte se hace con flex, con grid o con una tabla.",
      "L'alumne/a agrupa imatges i peus de foto amb figure i figcaption, amb un alt adequat a cada imatge.|El alumno/a agrupa imágenes y pies de foto con figure y figcaption, con un alt adecuado en cada imagen.",
      "L'alumne/a construeix una pàgina completa que combina una capçalera flex, una galeria grid, una taula de resum i un peu de pàgina.|El alumno/a construye una página completa que combina una cabecera flex, una galería grid, una tabla de resumen y un pie de página.",
      "L'alumne/a endreça el CSS per seccions amb comentaris i revisa la pàgina fins que no té errors.|El alumno/a ordena el CSS por secciones con comentarios y revisa la página hasta que no tiene errores."
    ],
    comp: [
      "Competència digital (CD3): crear i editar continguts digitals amb un objectiu|Competencia digital (CD3): crear y editar contenidos digitales con un objetivo",
      "Aprendre a aprendre: planificar, fer i revisar un projecte per parts|Aprender a aprender: planificar, hacer y revisar un proyecto por partes",
      "Comunicació: explicar una experiència pròpia amb imatges, peus de foto i dades|Comunicación: explicar una experiencia propia con imágenes, pies de foto y datos",
      "Educació visual i plàstica: composició d'una pàgina|Educación visual y plástica: composición de una página"
    ],
    vocab: [
      ["Esbós (wireframe)|Boceto (wireframe)", "Dibuix de la pàgina amb caixes, sense colors ni detalls.|Dibujo de la página con cajas, sin colores ni detalles."],
      ["figure|figure", "Caixa que agrupa una imatge amb el seu peu.|Caja que agrupa una imagen con su pie."],
      ["figcaption|figcaption", "Peu de foto: el text que explica la imatge d'una figure.|Pie de foto: el texto que explica la imagen de una figure."],
      ["Comentari CSS|Comentario CSS", "Text entre barra-asterisc que el navegador no llegeix; serveix per endreçar.|Texto entre barra-asterisco que el navegador no lee; sirve para ordenar."],
      ["Maquetació|Maquetación", "Col·locar les parts d'una pàgina: capçalera, contingut i peu.|Colocar las partes de una página: cabecera, contenido y pie."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: l'àlbum de fotos»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el álbum de fotos»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis i goma per a l'esbós|Lápiz y goma para el boceto"
      ],
      imprimir: ["Plantilla de l'esbós de l'àlbum|Plantilla del boceto del álbum", "Targetes de les parts de la pàgina|Tarjetas de las partes de la página"],
      prep: [
        "Imprimir una plantilla d'esbós per alumne/a i un paquet de targetes per parella.|Imprimir una plantilla de boceto por alumno/a y un paquete de tarjetas por pareja.",
        "Fer abans el projecte final per tenir un exemple acabat que es pugui projectar.|Hacer antes el proyecto final para tener un ejemplo acabado que se pueda proyectar.",
        "Recordar la llista d'imatges disponibles a l'editor (muntanya, platja, seu-vella, pont, pastis, gos, estrella…).|Recordar la lista de imágenes disponibles en el editor (muntanya, platja, seu-vella, pont, pastis, gos, estrella…)."
      ]
    },
    plan: [
      { min: 4, t: "Benvinguda: el projecte|Bienvenida: el proyecto", fase: 'inici',
        fa: "Presenta el projecte i ensenya l'àlbum d'exemple acabat. Repassa amb dues preguntes ràpides flex, grid i taules. Explica que avui treballaran com els dissenyadors: primer l'esbós, després el codi.|Presenta el proyecto y enseña el álbum de ejemplo acabado. Repasa con dos preguntas rápidas flex, grid y tablas. Explica que hoy trabajarán como los diseñadores: primero el boceto, después el código.",
        diu: ["Quines eines veieu en aquest àlbum? On hi ha flex? On hi ha grid?|¿Qué herramientas veis en este álbum? ¿Dónde hay flex? ¿Dónde hay grid?",
          "Avui el vostre àlbum explicarà una història vostra.|Hoy vuestro álbum contará una historia vuestra."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Peces noves: esbós i figure|Piezas nuevas: boceto y figure", fase: 'teoria',
        fa: "Explica què és un esbós i per què estalvia feina. Presenta figure i figcaption i la diferència entre alt i peu de foto. Acaba projectant l'estructura completa de l'àlbum amb els comentaris del CSS.|Explica qué es un boceto y por qué ahorra trabajo. Presenta figure y figcaption y la diferencia entre alt y pie de foto. Acaba proyectando la estructura completa del álbum con los comentarios del CSS.",
        diu: ["Què diu l'alt i què diu el peu de foto? Per a qui és cadascun?|¿Qué dice el alt y qué dice el pie de foto? ¿Para quién es cada uno?",
          "Si el CSS és llarg, com trobareu la regla de la galeria?|Si el CSS es largo, ¿cómo encontraréis la regla de la galería?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "L'esbós de l'àlbum|El boceto del álbum", fase: 'desconnectat',
        fa: "Cada alumne/a dibuixa el seu esbós a la plantilla: tria el tema i les 6 fotos, i marca l'eina de cada part amb les targetes. Després l'intercanvien amb el company/a, que n'ha de dir quantes figures i quantes files de taula hi haurà.|Cada alumno/a dibuja su boceto en la plantilla: elige el tema y las 6 fotos, y marca la herramienta de cada parte con las tarjetas. Después lo intercambian con el compañero/a, que tiene que decir cuántas figuras y cuántas filas de tabla habrá.",
        diu: ["Quin tema triareu? Una excursió, unes vacances, el vostre any?|¿Qué tema elegiréis? ¿Una excursión, unas vacaciones, vuestro año?",
          "Poseu la targeta de l'eina al costat de cada caixa.|Poned la tarjeta de la herramienta al lado de cada caja."],
        slides: ['s8'], app: "Cap: activitat amb paper. L'esbós es guarda per al «Crea».|Ninguna: actividad con papel. El boceto se guarda para el «Crea».", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 15, t: "A l'ordinador: prova i primers reptes|En el ordenador: prueba y primeros retos", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió des del principi fins al repte 2. Passeja i comprova que al repte 1 fan servir figure i figcaption (no només esborren els paràgrafs) i que al repte 2 hi ha dos contenidors flex.|Cada alumno/a hace la sesión desde el principio hasta el reto 2. Pasea y comprueba que en el reto 1 usan figure y figcaption (no solo borran los párrafos) y que en el reto 2 hay dos contenedores flex.",
        diu: ["Cada figure porta una imatge i un figcaption a dins.|Cada figure lleva una imagen y un figcaption dentro.",
          "Quantes caixes flex hi ha a la capçalera?|¿Cuántas cajas flex hay en la cabecera?"],
        slides: ['s9', 's10'], app: "De «La missió» fins al repte 2: preguntes de repàs, històries, targetes, «Mans a l'obra» (ja fet), prediu la galeria, tria el CSS de la capçalera, troba el punt i coma, pausa activa, repte 1 (figures) i repte 2 (capçalera).|De «La misión» hasta el reto 2: preguntas de repaso, historias, tarjetas, «Manos a la obra» (ya hecho), predice la galería, elige el CSS de la cabecera, encuentra el punto y coma, pausa activa, reto 1 (figuras) y reto 2 (cabecera).", org: "Individual|Individual" },
      { min: 10, t: "Reptes: galeria i resum|Retos: galería y resumen", fase: 'ordinador',
        fa: "Mostra a la diapositiva el CSS de la galeria i demana que el completin oralment. Després fan els reptes 3 i 4; qui acabi, el repte extra.|Muestra en la diapositiva el CSS de la galería y pide que lo completen oralmente. Después hacen los retos 3 y 4; quien termine, el reto extra.",
        diu: ["Què falta perquè les imatges omplin la cel·la?|¿Qué falta para que las imágenes llenen la celda?",
          "A la taula, escriviu una fila sencera i copieu-la.|En la tabla, escribid una fila entera y copiadla."],
        slides: ['s11', 's12'], app: "Reptes 3 (galeria) i 4 (resum i peu), i el repte extra del toc de revista.|Retos 3 (galería) y 4 (resumen y pie), y el reto extra del toque de revista.", org: "Individual|Individual" },
      { min: 12, t: "Crea: el meu àlbum de fotos|Crea: mi álbum de fotos", fase: 'crea',
        fa: "Cada alumne/a construeix el seu àlbum seguint l'esbós, part a part i en l'ordre dels comentaris. Recorda que l'objectiu és una pàgina sencera i sense errors; si algú acaba, que en millori els colors i els textos. Als últims minuts, dos o tres alumnes ensenyen el seu àlbum.|Cada alumno/a construye su álbum siguiendo el boceto, parte a parte y en el orden de los comentarios. Recuerda que el objetivo es una página entera y sin errores; si alguien acaba, que mejore los colores y los textos. En los últimos minutos, dos o tres alumnos enseñan su álbum.",
        diu: ["Seguiu l'esbós: quina part fareu primer?|Seguid el boceto: ¿qué parte haréis primero?",
          "Mireu la llista d'objectius: quants en teniu en verd?|Mirad la lista de objetivos: ¿cuántos tenéis en verde?",
          "Qui vol ensenyar el seu àlbum a la classe?|¿Quién quiere enseñar su álbum a la clase?"],
        slides: ['s13', 's14'], app: "Pas «Crea»: El meu àlbum de fotos (projecte de la unitat; es desa al portafoli i dona la insígnia de disposició).|Paso «Crea»: Mi álbum de fotos (proyecto de la unidad; se guarda en el portafolio y da la insignia de disposición).", org: "Individual i després tot el grup|Individual y después todo el grupo" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum de la unitat, deixa fer les preguntes finals i fes el tiquet de sortida.|Repasa el resumen de la unidad, deja hacer las preguntas finales y haz el ticket de salida.",
        diu: ["Quina eina heu fet servir per a cada part de l'àlbum?|¿Qué herramienta habéis usado para cada parte del álbum?",
          "Què canviaríeu si el tornéssiu a fer?|¿Qué cambiaríais si lo volvierais a hacer?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Comença a escriure codi sense esbós i es perd a mig projecte.|Empieza a escribir código sin boceto y se pierde a mitad del proyecto.",
        "Que torni a l'esbós i marqui amb una creu les parts ja fetes; després, la següent part i prou.|Que vuelva al boceto y marque con una cruz las partes ya hechas; después, la siguiente parte y nada más."],
      ["Posa el figcaption fora de la figure o fa servir caption (que és de les taules).|Pone el figcaption fuera de la figure o usa caption (que es de las tablas).",
        "Recorda: figcaption, dins figure, per a imatges; caption, dins table, per a taules.|Recuerda: figcaption, dentro de figure, para imágenes; caption, dentro de table, para tablas."],
      ["Copia el mateix alt a totes les imatges o deixa l'alt buit.|Copia el mismo alt en todas las imágenes o deja el alt vacío.",
        "Pregunta: si no veiessis la foto, què t'hauria de dir l'alt? Que el descrigui amb les seves paraules.|Pregunta: si no vieras la foto, ¿qué te tendría que decir el alt? Que lo describa con sus palabras."],
      ["Una regla del CSS no s'aplica perquè falta un punt i coma o una clau.|Una regla del CSS no se aplica porque falta un punto y coma o una llave.",
        "Que miri l'avís de sota l'editor i la línia marcada; amb el CSS endreçat per seccions es troba abans.|Que mire el aviso de debajo del editor y la línea marcada; con el CSS ordenado por secciones se encuentra antes."],
      ["Fa servir una taula per posar les fotos en graella.|Usa una tabla para poner las fotos en rejilla.",
        "Pregunta si les fotos són dades: no ho són. La galeria és grid; la taula, només per al resum.|Pregunta si las fotos son datos: no lo son. La galería es grid; la tabla, solo para el resumen."]
    ],
    diff: {
      mes: "Fer el repte extra i afegir a l'àlbum una segona galeria amb una foto que ocupi dues columnes i dues files, un peu de pàgina amb tres enllaços en fila i una columna de la taula alineada a la dreta.|Hacer el reto extra y añadir al álbum una segunda galería con una foto que ocupe dos columnas y dos filas, un pie de página con tres enlaces en fila y una columna de la tabla alineada a la derecha.",
      menys: "Treballar amb l'esbós i les targetes a la taula i fer el projecte en l'ordre dels comentaris, revisant els objectius després de cada part. Començar amb 4 figures i afegir-ne 2 al final.|Trabajar con el boceto y las tarjetas en la mesa y hacer el proyecto en el orden de los comentarios, revisando los objetivos después de cada parte. Empezar con 4 figuras y añadir 2 al final."
    },
    aval: {
      ticket: ["Quina eina has fet servir per a la capçalera, per a la galeria i per al resum?|¿Qué herramienta has usado para la cabecera, para la galería y para el resumen?",
        "Quina diferència hi ha entre l'alt d'una imatge i el seu figcaption?|¿Qué diferencia hay entre el alt de una imagen y su figcaption?"],
      rubric: [
        ["Planificació|Planificación", "L'esbós indica l'eina de cada part i la pàgina el segueix.|El boceto indica la herramienta de cada parte y la página lo sigue.", "Hi ha esbós, però la pàgina se n'aparta o falten parts.|Hay boceto, pero la página se aparta de él o faltan partes."],
        ["Disposició|Disposición", "Capçalera flex, galeria grid i taula de resum ben fetes i combinades.|Cabecera flex, galería grid y tabla de resumen bien hechas y combinadas.", "Dues de les tres parts funcionen; la tercera necessita ajuda.|Dos de las tres partes funcionan; la tercera necesita ayuda."],
        ["Contingut i accessibilitat|Contenido y accesibilidad", "Sis figures amb alt descriptiu i peus de foto propis.|Seis figuras con alt descriptivo y pies de foto propios.", "Les figures hi són, però els alt o els peus són genèrics o repetits.|Las figuras están, pero los alt o los pies son genéricos o repetidos."],
        ["Codi endreçat|Código ordenado", "CSS per seccions amb comentaris i pàgina sense errors.|CSS por secciones con comentarios y página sin errores.", "El CSS funciona però està desordenat o queda algun avís.|El CSS funciona pero está desordenado o queda algún aviso."]
      ]
    },
    casa: "A casa, ensenyeu el vostre àlbum des del mòbil a la família: expliqueu quina part és flex, quina és grid i quina és una taula. Podeu triar junts una foto per a un àlbum nou.|En casa, enseñad vuestro álbum desde el móvil a la familia: explicad qué parte es flex, cuál es grid y cuál es una tabla. Podéis elegir juntos una foto para un álbum nuevo.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: l'àlbum de fotos|Proyecto: el álbum de fotos", x: "Avui farem servir totes les eines de la unitat per crear un àlbum de fotos web.|Hoy usaremos todas las herramientas de la unidad para crear un álbum de fotos web.",
        nota: "Projecta l'àlbum d'exemple acabat i deixa'l uns segons perquè l'observin.|Proyecta el álbum de ejemplo acabado y déjalo unos segundos para que lo observen." },
      { id: 's2', k: 'repas', t: "Les tres eines|Las tres herramientas", punts: ["Flex: una fila (menú, capçalera)|Flex: una fila (menú, cabecera)", "Grid: files i columnes (galeria)|Grid: filas y columnas (galería)", "Taula: dades (resum)|Tabla: datos (resumen)"],
        nota: "Demana un exemple nou per a cada eina.|Pide un ejemplo nuevo para cada herramienta." },
      { id: 's3', k: 'pregunta', t: "On és cada eina?|¿Dónde está cada herramienta?", x: "Mireu l'àlbum d'exemple: quina part és flex, quina és grid i quina és una taula?|Mirad el álbum de ejemplo: ¿qué parte es flex, cuál es grid y cuál es una tabla?",
        nota: "Assenyala cada part a la projecció mentre responen.|Señala cada parte en la proyección mientras responden." },
      { id: 's4', k: 'anim', t: "Primer, l'esbós|Primero, el boceto", anim: 'wplan', x: "Caixes, fletxes i l'eina de cada part. Després, el codi.|Cajas, flechas y la herramienta de cada parte. Después, el código.",
        nota: "Explica que l'esbós no ha de ser bonic: ha de ser clar.|Explica que el boceto no tiene que ser bonito: tiene que ser claro." },
      { id: 's5', k: 'concepte', t: "figure i figcaption|figure y figcaption", x: "La figure agrupa la imatge i el peu. L'alt descriu la foto; el figcaption l'explica.|La figure agrupa la imagen y el pie. El alt describe la foto; el figcaption la explica.",
        code: '<figure>\n  <img src="img/muntanya.svg" alt="El cim de la muntanya">\n  <figcaption>El cim, a 2.000 metres.</figcaption>\n</figure>',
        nota: "Fes notar que figcaption no és el mateix que caption, que és el títol d'una taula.|Haz notar que figcaption no es lo mismo que caption, que es el título de una tabla." },
      { id: 's6', k: 'concepte', t: "L'estructura de l'àlbum|La estructura del álbum", punts: ["header: títol i nav|header: título y nav", "main: h1, galeria i taula|main: h1, galería y tabla", "footer: el vostre nom|footer: vuestro nombre"],
        code: '<header>…</header>\n<main>\n  <h1>El meu estiu</h1>\n  <section class="album">…</section>\n  <table>…</table>\n</main>\n<footer>…</footer>',
        nota: "Relaciona cada etiqueta amb una caixa de l'esbós.|Relaciona cada etiqueta con una caja del boceto." },
      { id: 's7', k: 'concepte', t: "Un CSS endreçat|Un CSS ordenado", x: "Els comentaris separen el CSS per seccions. El navegador no els llegeix.|Los comentarios separan el CSS por secciones. El navegador no los lee.",
        code: '/* ---- Capçalera ---- */\nheader {\n  display: flex;\n  justify-content: space-between;\n}\n\n/* ---- Galeria ---- */\n.album {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}',
        nota: "Explica que el projecte final ja porta aquests comentaris preparats.|Explica que el proyecto final ya lleva estos comentarios preparados." },
      { id: 's8', k: 'activitat', t: "L'esbós de l'àlbum|El boceto del álbum", timer: 8, punts: ["Tria el tema i les 6 fotos.|Elige el tema y las 6 fotos.", "Dibuixa les caixes a la plantilla.|Dibuja las cajas en la plantilla.", "Posa l'eina al costat de cada caixa.|Pon la herramienta al lado de cada caja.", "Intercanvia l'esbós i revisa el del company/a.|Intercambia el boceto y revisa el del compañero/a."],
        nota: "Recorda que l'esbós es guarda al costat de l'ordinador per al projecte final.|Recuerda que el boceto se guarda al lado del ordenador para el proyecto final." },
      { id: 's9', k: 'activitat', t: "A l'ordinador: prova i reptes 1-2|En el ordenador: prueba y retos 1-2", timer: 15, punts: ["Obre la sessió del projecte.|Abre la sesión del proyecto.", "Prediu, tria i troba l'error.|Predice, elige y encuentra el error.", "Repte 1: les figures.|Reto 1: las figuras.", "Repte 2: la capçalera.|Reto 2: la cabecera."],
        nota: "A «Mans a l'obra» toquen «Ho hem fet!», perquè l'esbós ja està fet.|En «Manos a la obra» tocan «¡Lo hemos hecho!», porque el boceto ya está hecho." },
      { id: 's10', k: 'repte', t: "De paràgrafs a figures|De párrafos a figuras", x: "Converteix cada imatge i el seu paràgraf en una figure amb figcaption.|Convierte cada imagen y su párrafo en una figure con figcaption.",
        code: '<img src="img/fruita.svg" alt="Fruita per esmorzar">\n<p>L\'esmorzar de fruita.</p>',
        nota: "Resolució: figure envolta la imatge i el text, i la p es converteix en figcaption.|Resolución: figure envuelve la imagen y el texto, y la p se convierte en figcaption." },
      { id: 's11', k: 'repte', t: "Completa la galeria|Completa la galería", x: "Què falta perquè l'àlbum faci 3 columnes i les imatges omplin la cel·la?|¿Qué falta para que el álbum haga 3 columnas y las imágenes llenen la celda?",
        code: '.album {\n  display: grid;\n  /* columnes? */\n  gap: 12px;\n}\nfigure img {\n  /* amplada? */\n}',
        nota: "Respostes: grid-template-columns: repeat(3, 1fr) i width: 100%.|Respuestas: grid-template-columns: repeat(3, 1fr) y width: 100%." },
      { id: 's12', k: 'repte', t: "Reptes 3 i 4|Retos 3 y 4", timer: 10, punts: ["3. La galeria de 6 figures|3. La galería de 6 figuras", "4. La taula de resum i el peu|4. La tabla de resumen y el pie", "Extra: la primera figura en gran|Extra: la primera figura en grande"],
        nota: "Si algú s'encalla a la taula, recorda-li que es construeix fila a fila.|Si alguien se atasca en la tabla, recuérdale que se construye fila a fila." },
      { id: 's13', k: 'activitat', t: "Crea: el meu àlbum de fotos|Crea: mi álbum de fotos", timer: 12, punts: ["Segueix el teu esbós, part a part.|Sigue tu boceto, parte a parte.", "Capçalera, galeria, resum i peu.|Cabecera, galería, resumen y pie.", "Revisa els objectius després de cada part.|Revisa los objetivos después de cada parte.", "Si acabes, millora colors i textos.|Si acabas, mejora colores y textos."],
        nota: "Passa per les taules amb l'esbós de cada alumne/a a la mà i pregunta quina part ve ara.|Pasa por las mesas con el boceto de cada alumno/a en la mano y pregunta qué parte viene ahora." },
      { id: 's14', k: 'activitat', t: "Galeria d'àlbums|Galería de álbumes", x: "Dos o tres voluntaris ensenyen l'àlbum i expliquen quina eina han fet servir a cada part.|Dos o tres voluntarios enseñan el álbum y explican qué herramienta han usado en cada parte.",
        nota: "Destaca coses concretes: un bon alt, un peu de foto original, una graella ben repartida.|Destaca cosas concretas: un buen alt, un pie de foto original, una rejilla bien repartida." },
      { id: 's15', k: 'resum', t: "Què hem après a la unitat|Qué hemos aprendido en la unidad", punts: ["Flex col·loca en una fila.|Flex coloca en una fila.", "Grid col·loca en files i columnes.|Grid coloca en filas y columnas.", "Les taules són per a dades.|Las tablas son para datos.", "Primer l'esbós, després el codi.|Primero el boceto, después el código."],
        nota: "Felicita el grup: han construït una pàgina completa amb disposició professional.|Felicita al grupo: han construido una página completa con disposición profesional." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quina eina per a la capçalera, la galeria i el resum?|¿Qué herramienta para la cabecera, la galería y el resumen?", "Diferència entre alt i figcaption.|Diferencia entre alt y figcaption."],
        nota: "Anota qui no ha acabat el projecte per deixar-li temps a la sessió següent.|Anota quién no ha acabado el proyecto para dejarle tiempo en la sesión siguiente." }
    ],
    print: [
      { id: 'p1', t: "Plantilla de l'esbós de l'àlbum|Plantilla del boceto del álbum", k: 'fitxa',
        intro: "Una per alumne/a. Respon cada pregunta i dibuixa l'esbós de l'àlbum al dors del full.|Una por alumno/a. Responde cada pregunta y dibuja el boceto del álbum en el dorso de la hoja.",
        items: [
          { q: "De què va el teu àlbum? Escriu-ne el títol (el que anirà a l'h1).|¿De qué va tu álbum? Escribe su título (el que irá en el h1).", sol: "Resposta lliure: per exemple, «El meu estiu» o «L'excursió de l'escola».|Respuesta libre: por ejemplo, «Mi verano» o «La excursión del colegio»." },
          { q: "Quines 3 opcions tindrà el menú de la capçalera? Quina eina el posa en fila?|¿Qué 3 opciones tendrá el menú de la cabecera? ¿Qué herramienta lo pone en fila?", sol: "Per exemple Fotos, Resum i Contacte, en un nav amb display: flex.|Por ejemplo Fotos, Resumen y Contacto, en un nav con display: flex." },
          { q: "Escriu les 6 fotos: imatge, alt i peu de foto de cadascuna.|Escribe las 6 fotos: imagen, alt y pie de foto de cada una.", sol: "Sis línies amb una imatge de la llista, un alt que la descrigui i un peu propi.|Seis líneas con una imagen de la lista, un alt que la describa y un pie propio." },
          { q: "Quantes columnes tindrà la galeria? Escriu la regla de grid.|¿Cuántas columnas tendrá la galería? Escribe la regla de grid.", sol: "Per exemple: display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;|Por ejemplo: display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;" },
          { q: "Quines dades aniran a la taula de resum? Escriu-ne el caption i les files.|¿Qué datos irán en la tabla de resumen? Escribe su caption y las filas.", sol: "Un caption i almenys 3 files de dades amb dues columnes (Què i Quant).|Un caption y al menos 3 filas de datos con dos columnas (Qué y Cuánto)." }
        ] },
      { id: 'p2', t: "Targetes de les parts de la pàgina|Tarjetas de las partes de la página", k: 'targetes',
        intro: "Un paquet per parella. Col·loqueu cada targeta al costat de la caixa corresponent de l'esbós.|Un paquete por pareja. Colocad cada tarjeta al lado de la caja correspondiente del boceto.",
        items: [
          { t: "header · flex|header · flex", n: 1 }, { t: "nav · flex amb gap|nav · flex con gap", n: 1 }, { t: "h1 · títol de l'àlbum|h1 · título del álbum", n: 1 },
          { t: "section.album · grid de 3 columnes|section.album · grid de 3 columnas", n: 1 }, { t: "figure + figcaption|figure + figcaption", n: 6 },
          { t: "table · caption, thead, tbody|table · caption, thead, tbody", n: 1 }, { t: "footer · el meu nom|footer · mi nombre", n: 1 }
        ] }
    ]
  }
});

/* ---------- Guies del professorat · Tech Web, unitat 7 «Per al mòbil» ---------- */
Object.assign(TGUIDE, {

/* ===================== w7-1 · Pantalles petites ===================== */
'w7-1': {
  obj: [
    "L'alumne/a explica per què una web pensada per a l'ordinador es veu malament al mòbil i què fa l'etiqueta meta viewport.|El alumno/a explica por qué una web pensada para el ordenador se ve mal en el móvil y qué hace la etiqueta meta viewport.",
    "L'alumne/a fa servir percentatges, max-width i la regla de les imatges flexibles perquè res no surti de la pantalla.|El alumno/a usa porcentajes, max-width y la regla de las imágenes flexibles para que nada se salga de la pantalla.",
    "L'alumne/a escriu una media query amb max-width que passa una fila de flex a columna a les pantalles petites.|El alumno/a escribe una media query con max-width que pasa una fila de flex a columna en las pantallas pequeñas.",
    "L'alumne/a comprova una pàgina pròpia a la vista de mòbil i a la d'ordinador i explica què canvia.|El alumno/a comprueba una página propia en la vista de móvil y en la de ordenador y explica qué cambia."
  ],
  comp: [
    "Competència digital: creació de continguts digitals (disseny web adaptable amb HTML i CSS)|Competencia digital: creación de contenidos digitales (diseño web adaptable con HTML y CSS)",
    "Pensament computacional: condicions (si la pantalla és petita, aplica aquestes regles)|Pensamiento computacional: condiciones (si la pantalla es pequeña, aplica estas reglas)",
    "Matemàtiques: mesures relatives (percentatges) i absolutes (píxels)|Matemáticas: medidas relativas (porcentajes) y absolutas (píxeles)",
    "Disseny i comunicació: prioritzar el contingut segons l'espai disponible|Diseño y comunicación: priorizar el contenido según el espacio disponible"
  ],
  vocab: [
    ["Disseny adaptable (responsive)|Diseño adaptable (responsive)", "Una sola web que es recol·loca per quedar bé a qualsevol mida de pantalla.|Una sola web que se recoloca para quedar bien en cualquier tamaño de pantalla."],
    ["Viewport|Viewport", "La zona visible de la pantalla. L'etiqueta meta viewport diu al mòbil que faci servir la seva amplada real.|La zona visible de la pantalla. La etiqueta meta viewport le dice al móvil que use su anchura real."],
    ["Media query|Media query", "Un bloc @media: regles que només s'apliquen si es compleix una condició de la pantalla.|Un bloque @media: reglas que solo se aplican si se cumple una condición de la pantalla."],
    ["max-width|max-width", "Amplada màxima: fins a aquí, però si no hi cap, s'encongeix.|Anchura máxima: hasta aquí, pero si no cabe, se encoge."],
    ["Mobile first|Mobile first", "Escriure primer el CSS del mòbil i afegir després regles per a pantalles grans.|Escribir primero el CSS del móvil y añadir después reglas para pantallas grandes."]
  ],
  mat: {
    aula: [
      "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Pantalles petites»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Pantallas pequeñas»",
      "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
      "Un mòbil o una tauleta del centre per ensenyar una web real en pantalla petita (opcional)|Un móvil o una tableta del centro para enseñar una web real en pantalla pequeña (opcional)",
      "Fulls, tisores i llapis per a l'activitat de la pàgina que es plega|Hojas, tijeras y lápices para la actividad de la página que se pliega"
    ],
    imprimir: ["Peces de la pàgina per recol·locar|Piezas de la página para recolocar", "Fitxa: de l'ordinador al mòbil|Ficha: del ordenador al móvil"],
    prep: [
      "Imprimir un lot de peces per parella (si no voleu que les dibuixin) i una fitxa per alumne/a.|Imprimir un lote de piezas por pareja (si no queréis que las dibujen) y una ficha por alumno/a.",
      "Provar abans a l'app el pas «Experimenta» amb la vista de mòbil i la d'ordinador per saber on són els botons de mida.|Probar antes en la app el paso «Experimenta» con la vista de móvil y la de ordenador para saber dónde están los botones de tamaño.",
      "Tenir obert el codi de la diapositiva 8 per canviar-hi la mida de la finestra en directe i ensenyar com salta el @media.|Tener abierto el código de la diapositiva 8 para cambiar en directo el tamaño de la ventana y enseñar cómo salta el @media."
    ]
  },
  plan: [
    { min: 5, t: "Benvinguda: la web que no cap|Bienvenida: la web que no cabe", fase: 'inici',
      fa: "Pregunta qui ha vist mai una web que al mòbil es veu minúscula o que s'ha de moure de costat. Recorda amb la diapositiva de repàs el flex i el padding de la unitat anterior: avui els farem servir per adaptar pàgines.|Pregunta quién ha visto alguna vez una web que en el móvil se ve minúscula o que hay que mover de lado. Recuerda con la diapositiva de repaso el flex y el padding de la unidad anterior: hoy los usaremos para adaptar páginas.",
      diu: ["On mireu més webs, al mòbil o a l'ordinador?|¿Dónde miráis más webs, en el móvil o en el ordenador?",
        "Una mateixa web s'ha de veure bé a les dues pantalles: avui aprendrem com.|Una misma web se tiene que ver bien en las dos pantallas: hoy aprenderemos cómo."],
      slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
    { min: 12, t: "Com s'adapta una web|Cómo se adapta una web", fase: 'teoria',
      fa: "Explica les mides de pantalla, l'etiqueta meta viewport i la diferència entre píxels fixos i percentatges. Presenta el @media com un «si…» del CSS i ensenya en directe com la fila passa a columna quan fas la finestra estreta. Acaba amb la idea de mobile first, sense aprofundir-hi: surt al repte extra.|Explica los tamaños de pantalla, la etiqueta meta viewport y la diferencia entre píxeles fijos y porcentajes. Presenta el @media como un «si…» del CSS y enseña en directo cómo la fila pasa a columna cuando haces la ventana estrecha. Termina con la idea de mobile first, sin profundizar: sale en el reto extra.",
      diu: ["Si una caixa fa 700 píxels i el mòbil en fa uns 375, què passa?|Si una caja mide 700 píxeles y el móvil unos 375, ¿qué pasa?",
        "El @media és com dir: si la pantalla fa 600 o menys, fes això.|El @media es como decir: si la pantalla mide 600 o menos, haz esto.",
        "Mireu què passa quan faig la finestra més estreta. Ara! Heu vist el salt?|Mirad qué pasa cuando hago la ventana más estrecha. ¡Ahora! ¿Habéis visto el salto?"],
      slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
    { min: 8, t: "La pàgina que es plega|La página que se pliega", fase: 'desconnectat',
      fa: "En parelles, un dibuixa (o retalla de l'imprimible) una pàgina d'ordinador amb títol, menú i tres caixes en fila. L'altre l'ha de recol·locar dins una tira estreta que fa de mòbil. Al final, cada parella explica el canvi amb paraules de CSS.|Por parejas, uno dibuja (o recorta del imprimible) una página de ordenador con título, menú y tres cajas en fila. El otro la tiene que recolocar dentro de una tira estrecha que hace de móvil. Al final, cada pareja explica el cambio con palabras de CSS.",
      diu: ["Les tres caixes no hi caben en fila: com les poseu?|Las tres cajas no caben en fila: ¿cómo las ponéis?",
        "Què ha d'anar primer al mòbil? Per què?|¿Qué tiene que ir primero en el móvil? ¿Por qué?",
        "Digueu-ho en CSS: al mòbil, flex-direction column.|Decidlo en CSS: en el móvil, flex-direction column."],
      slides: ['s10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
    { min: 12, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
      fa: "Cada alumne/a fa a l'app el principi de la sessió fins a la pausa. Projecta la diapositiva de predicció i deixa que votin abans de mirar la resposta. Al pas «Experimenta», demana que canviïn entre mòbil i ordinador i que provin el 300px del @media.|Cada alumno/a hace en la app el principio de la sesión hasta la pausa. Proyecta la diapositiva de predicción y deja que voten antes de mirar la respuesta. En el paso «Experimenta», pide que cambien entre móvil y ordenador y que prueben el 300px del @media.",
      diu: ["Abans de triar, digues en veu baixa què creus que es veurà.|Antes de elegir, di en voz baja qué crees que se verá.",
        "Als errors, llegeix el @media línia a línia: què hi diu de debò?|En los errores, lee el @media línea a línea: ¿qué dice de verdad?",
        "Amb 300px, quan s'activa la regla? I al mòbil d'uns 375?|Con 300px, ¿cuándo se activa la regla? ¿Y en el móvil de unos 375?"],
      slides: ['s11', 's12'], app: "Recorda, Missió, Descobreix, Mans a l'obra (ja fet), les dues prediccions, els dos errors de CSS, «Experimenta» i la pausa activa «Pantalla elàstica».|Recuerda, Misión, Descubre, Manos a la obra (ya hecho), las dos predicciones, los dos errores de CSS, «Experimenta» y la pausa activa «Pantalla elástica».", org: "Individual|Individual" },
    { min: 13, t: "Reptes: fem-la adaptable|Retos: hagámosla adaptable", fase: 'ordinador',
      fa: "Projecta la diapositiva dels reptes i escriu amb la classe l'estructura d'un @media a la pissarra (dues claus d'obrir, dues de tancar). Deixa'ls fer els quatre reptes. Qui acabi, fa el repte extra de mobile first.|Proyecta la diapositiva de los retos y escribe con la clase la estructura de un @media en la pizarra (dos llaves de abrir, dos de cerrar). Deja que hagan los cuatro retos. Quien termine, hace el reto extra de mobile first.",
      diu: ["Al repte 1, recordeu: el viewport va dins del head.|En el reto 1, recordad: el viewport va dentro del head.",
        "Comproveu cada repte a la vista de mòbil abans de dir que està fet.|Comprobad cada reto en la vista de móvil antes de decir que está hecho.",
        "Si el @media no funciona, compteu les claus.|Si el @media no funciona, contad las llaves."],
      slides: ['s13', 's14'], app: "Els quatre reptes (viewport i lletra, targeta i imatge flexibles, fila que passa a columna, menú adaptable) i el repte extra «Primer el mòbil».|Los cuatro retos (viewport y letra, tarjeta e imagen flexibles, fila que pasa a columna, menú adaptable) y el reto extra «Primero el móvil».", org: "Individual|Individual" },
    { min: 7, t: "Crea: la meva web, també al mòbil|Crea: mi web, también en el móvil", fase: 'crea',
      fa: "Cada alumne/a fa una pàgina sobre la seva afició amb tres targetes que passen a columna al mòbil. Als últims minuts, en parelles, un fa servir la vista de mòbil per revisar la pàgina de l'altre.|Cada alumno/a hace una página sobre su afición con tres tarjetas que pasan a columna en el móvil. En los últimos minutos, por parejas, uno usa la vista de móvil para revisar la página del otro.",
      diu: ["Feu-la vostra: el tema, els colors i les imatges els trieu vosaltres.|Hacedla vuestra: el tema, los colores y las imágenes los elegís vosotros.",
        "Reviseu la del company/a: hi ha res que surti de la pantalla?|Revisad la del compañero/a: ¿hay algo que se salga de la pantalla?"],
      slides: ['s15'], app: "Pas «Crea»: La meva web, també al mòbil (es desa al portafoli).|Paso «Crea»: Mi web, también en el móvil (se guarda en el portafolio).", org: "Individual i després per parelles|Individual y después por parejas" },
    { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
      fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals de l'app i fes una pregunta del tiquet a cada alumne/a a la porta.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales de la app y haz una pregunta del ticket a cada alumno/a en la puerta.",
      diu: ["Quina etiqueta fa que el mòbil no ho encongeixi tot?|¿Qué etiqueta hace que el móvil no lo encoja todo?",
        "Què vol dir max-width 600px dins un @media?|¿Qué significa max-width 600px dentro de un @media?"],
      slides: ['s16', 's17'], app: "«Tancament»: dues preguntes i com m'he sentit.|«Cierre»: dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
  ],
  errors: [
    ["Posa l'etiqueta meta viewport dins el body o fora de l'html.|Pone la etiqueta meta viewport dentro del body o fuera del html.",
      "Que obri el head i hi busqui el meta charset: el viewport va just a sota, al mateix nivell.|Que abra el head y busque el meta charset: el viewport va justo debajo, al mismo nivel."],
    ["Escriu el @media al principi del CSS i les regles de després el trepitgen.|Escribe el @media al principio del CSS y las reglas de después lo pisan.",
      "Explica que, quan dues regles diuen el contrari, guanya la de més avall. Que el mogui al final.|Explica que, cuando dos reglas dicen lo contrario, gana la de más abajo. Que lo mueva al final."],
    ["Oblida una de les dues claus de tancar del @media.|Olvida una de las dos llaves de cerrar del @media.",
      "Que compti en veu alta: una clau per obrir el @media, una per a la regla; per tant, dues per tancar. El corrector marca la línia.|Que cuente en voz alta: una llave para abrir el @media, una para la regla; por tanto, dos para cerrar. El corrector marca la línea."],
    ["Confon max-width i min-width i la regla s'aplica a l'ordinador.|Confunde max-width y min-width y la regla se aplica en el ordenador.",
      "Fes que ho llegeixi en veu alta: max vol dir com a màxim (pantalles petites), min vol dir com a mínim (pantalles grans).|Haz que lo lea en voz alta: max significa como máximo (pantallas pequeñas), min significa como mínimo (pantallas grandes)."],
    ["Posa flex-direction column fora del @media i a l'ordinador també surt en columna.|Pone flex-direction column fuera del @media y en el ordenador también sale en columna.",
      "Que miri la vista d'ordinador i busqui on és el column. Només ha d'estar dins del bloc del mòbil.|Que mire la vista de ordenador y busque dónde está el column. Solo tiene que estar dentro del bloque del móvil."]
  ],
  diff: {
    mes: "Fer el repte extra (mobile first) i després afegir un segon @media per a tauleta (min-width 700px: dues columnes; min-width 1000px: tres).|Hacer el reto extra (mobile first) y después añadir un segundo @media para tableta (min-width 700px: dos columnas; min-width 1000px: tres).",
    menys: "Fer els reptes amb la fitxa al costat, on hi ha l'estructura del @media escrita, i copiar-la canviant només el selector i la propietat. Prioritzar els reptes 1 a 3.|Hacer los retos con la ficha al lado, donde está escrita la estructura del @media, y copiarla cambiando solo el selector y la propiedad. Priorizar los retos 1 a 3."
  },
  aval: {
    ticket: ["Per a què serveix l'etiqueta meta viewport?|¿Para qué sirve la etiqueta meta viewport?",
      "Digues una regla que faci que una imatge no surti mai de la pantalla.|Di una regla que haga que una imagen no se salga nunca de la pantalla."],
    rubric: [
      ["Viewport i mides flexibles|Viewport y medidas flexibles", "Posa el viewport al head i fa servir max-width i percentatges sense ajuda.|Pone el viewport en el head y usa max-width y porcentajes sin ayuda.", "Necessita la pista per saber on va el viewport o per canviar els píxels fixos.|Necesita la pista para saber dónde va el viewport o para cambiar los píxeles fijos."],
      ["Media query|Media query", "Escriu un @media complet i correcte que només canvia el que cal al mòbil.|Escribe un @media completo y correcto que solo cambia lo necesario en el móvil.", "Escriu el @media amb errors de claus o hi posa regles que no calen.|Escribe el @media con errores de llaves o pone reglas que no hacen falta."],
      ["Comprovació|Comprobación", "Revisa la seva pàgina a les dues vistes i explica què canvia.|Revisa su página en las dos vistas y explica qué cambia.", "Només mira una de les vistes.|Solo mira una de las vistas."]
    ]
  },
  casa: "A casa, obriu la pàgina creada a l'app des del mòbil i mireu-la girant la pantalla (vertical i horitzontal). Podeu buscar junts una web que conegueu i comprovar si s'adapta bé.|En casa, abrid la página creada en la app desde el móvil y miradla girando la pantalla (vertical y horizontal). Podéis buscar juntos una web que conozcáis y comprobar si se adapta bien.",
  slides: [
    { id: 's1', k: 'portada', t: "Pantalles petites|Pantallas pequeñas", x: "Avui aprendrem a fer webs que quedin bé al mòbil, a la tauleta i a l'ordinador.|Hoy aprenderemos a hacer webs que queden bien en el móvil, en la tableta y en el ordenador.",
      nota: "Presenta l'objectiu: al final, cada alumne/a tindrà una pàgina pròpia que es recol·loca al mòbil.|Presenta el objetivo: al final, cada alumno/a tendrá una página propia que se recoloca en el móvil." },
    { id: 's2', k: 'pregunta', t: "Us ha passat mai?|¿Os ha pasado alguna vez?", punts: ["Lletra minúscula que obliga a fer zoom|Letra minúscula que obliga a hacer zoom", "Fotos que surten per la dreta|Fotos que se salen por la derecha", "Botons tan petits que toques el que no vols|Botones tan pequeños que tocas el que no quieres"],
      nota: "Recull experiències. Si teniu un mòbil a l'aula, ensenya una web que s'adapti bé i comenteu què fa diferent.|Recoge experiencias. Si tenéis un móvil en el aula, enseña una web que se adapte bien y comentad qué hace diferente." },
    { id: 's3', k: 'repas', t: "Recordem|Recordemos", punts: ["display flex posa els fills en fila.|display flex pone los hijos en fila.", "padding és l'espai de dins; margin, el de fora.|padding es el espacio de dentro; margin, el de fuera."],
      code: '.fila {\n  display: flex;\n  gap: 12px;\n}',
      nota: "Pregunta què passaria amb aquesta fila de tres caixes en un mòbil. Guarda la resposta per a la diapositiva 8.|Pregunta qué pasaría con esta fila de tres cajas en un móvil. Guarda la respuesta para la diapositiva 8." },
    { id: 's4', k: 'anim', t: "Una web, moltes pantalles|Una web, muchas pantallas", anim: 'wdevice', x: "Mòbil, unes 375 unitats d'ample; tauleta, unes 768; ordinador, 1200 o més.|Móvil, unas 375 unidades de ancho; tableta, unas 768; ordenador, 1200 o más.",
      nota: "Remarca que no fem tres webs: fem una sola web que es recol·loca. Les mides exactes canvien segons l'aparell.|Remarca que no hacemos tres webs: hacemos una sola web que se recoloca. Los tamaños exactos cambian según el aparato." },
    { id: 's5', k: 'concepte', t: "L'etiqueta viewport|La etiqueta viewport", x: "Sense aquesta línia, el mòbil fa veure que és un ordinador ample i ho encongeix tot.|Sin esta línea, el móvil hace como si fuera un ordenador ancho y lo encoge todo.",
      code: '<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>La meva web</title>\n</head>',
      nota: "Insisteix que va sempre dins del head. És una línia que es copia igual a totes les webs.|Insiste en que va siempre dentro del head. Es una línea que se copia igual en todas las webs." },
    { id: 's6', k: 'concepte', t: "Píxels fixos o mides flexibles|Píxeles fijos o medidas flexibles", punts: ["width 700px: no cap al mòbil.|width 700px: no cabe en el móvil.", "width 90%: el 90 % del lloc disponible.|width 90%: el 90 % del sitio disponible.", "max-width 100% a les imatges: mai no surten.|max-width 100% en las imágenes: nunca se salen."],
      code: '.caixa {\n  width: 90%;\n  max-width: 700px;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}',
      nota: "Compara amb una ampolla i un got: el got té una mida fixa, l'aigua s'adapta. Volem caixes com l'aigua.|Compara con una botella y un vaso: el vaso tiene un tamaño fijo, el agua se adapta. Queremos cajas como el agua." },
    { id: 's7', k: 'anim', t: "El @media: un «si…» del CSS|El @media: un «si…» del CSS", anim: 'wresp', x: "Si la pantalla fa com a màxim 600 píxels, aplica les regles de dins.|Si la pantalla mide como máximo 600 píxeles, aplica las reglas de dentro.",
      nota: "Relaciona-ho amb les condicions: el navegador ho comprova cada cop que canvia la mida de la pantalla.|Relaciónalo con las condiciones: el navegador lo comprueba cada vez que cambia el tamaño de la pantalla." },
    { id: 's8', k: 'concepte', t: "Fila a l'ordinador, columna al mòbil|Fila en el ordenador, columna en el móvil", x: "Dins el @media només canviem el que cal.|Dentro del @media solo cambiamos lo necesario.",
      code: '.fila {\n  display: flex;\n  gap: 12px;\n}\n@media (max-width: 600px) {\n  .fila {\n    flex-direction: column;\n  }\n}',
      nota: "Fes la demostració en directe: estreny la finestra del navegador i ensenya el moment del salt. Assenyala les dues claus de tancar.|Haz la demostración en directo: estrecha la ventana del navegador y enseña el momento del salto. Señala las dos llaves de cerrar." },
    { id: 's9', k: 'concepte', t: "Mobile first|Mobile first", x: "Primer el CSS del mòbil, després un @media amb min-width per a les pantalles grans.|Primero el CSS del móvil, después un @media con min-width para las pantallas grandes.",
      code: '.galeria {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n@media (min-width: 700px) {\n  .galeria {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}',
      nota: "Només cal que en sentin a parlar: ho trobaran al repte extra. Max vol dir com a màxim; min, com a mínim.|Solo hace falta que les suene: lo encontrarán en el reto extra. Max significa como máximo; min, como mínimo." },
    { id: 's10', k: 'activitat', t: "La pàgina que es plega|La página que se pliega", timer: 8, punts: ["Dibuixeu o retalleu una pàgina d'ordinador: títol, menú i tres caixes.|Dibujad o recortad una página de ordenador: título, menú y tres cajas.", "Recol·loqueu-la dins una tira estreta: el mòbil.|Recolocadla dentro de una tira estrecha: el móvil.", "Expliqueu el canvi amb paraules de CSS.|Explicad el cambio con palabras de CSS."],
      nota: "Passa per les taules i pregunta quin element han posat primer i per què. Al mòbil, el més important va a dalt.|Pasa por las mesas y pregunta qué elemento han puesto primero y por qué. En el móvil, lo más importante va arriba." },
    { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Pantalles petites».|Abre la sesión «Pantallas pequeñas».", "Fes fins a la pausa activa.|Haz hasta la pausa activa.", "A «Experimenta», canvia entre mòbil i ordinador.|En «Experimenta», cambia entre móvil y ordenador."],
      nota: "Al pas «Mans a l'obra», que marquin que ja l'han fet a classe.|En el paso «Manos a la obra», que marquen que ya lo han hecho en clase." },
    { id: 's12', k: 'pregunta', t: "Prediu: què es veurà?|Predice: ¿qué se verá?", x: "Amb aquesta barra, quina amplada tindrà al mòbil? I a l'ordinador?|Con esta barra, ¿qué anchura tendrá en el móvil? ¿Y en el ordenador?",
      code: '.barra {\n  width: 50%;\n  background: gold;\n}',
      nota: "Fes que votin amb els dits (1, 2 o 3 opcions de l'app) abans de comprovar-ho. La clau: el 50 % sempre és la meitat del lloc que té.|Haz que voten con los dedos (1, 2 o 3 opciones de la app) antes de comprobarlo. La clave: el 50 % siempre es la mitad del sitio que tiene." },
    { id: 's13', k: 'repte', t: "Reptes: fem-la adaptable|Retos: hagámosla adaptable", timer: 13, punts: ["1. Viewport i lletra més gran|1. Viewport y letra más grande", "2. Targeta i imatge flexibles|2. Tarjeta e imagen flexibles", "3. La fila que passa a columna|3. La fila que pasa a columna", "4. Un menú adaptable de zero|4. Un menú adaptable desde cero"],
      code: '@media (max-width: 600px) {\n  nav {\n    flex-direction: column;\n  }\n  nav a {\n    font-size: 20px;\n  }\n}',
      nota: "Deixa projectada l'estructura: dins un mateix @media hi caben diverses regles.|Deja proyectada la estructura: dentro de un mismo @media caben varias reglas." },
    { id: 's14', k: 'repte', t: "Repte extra: primer el mòbil|Reto extra: primero el móvil", x: "Torna a escriure la galeria: una columna per defecte i tres a partir de 700 píxels.|Vuelve a escribir la galería: una columna por defecto y tres a partir de 700 píxeles.",
      nota: "Per a qui acabi abans. Si s'encallen, que intercanviïn els valors de la regla normal i del @media.|Para quien termine antes. Si se atascan, que intercambien los valores de la regla normal y del @media." },
    { id: 's15', k: 'activitat', t: "Crea: la meva web, també al mòbil|Crea: mi web, también en el móvil", timer: 7, x: "Una pàgina sobre la teva afició amb tres targetes que al mòbil van en columna.|Una página sobre tu afición con tres tarjetas que en el móvil van en columna.",
      nota: "Recorda els criteris visibles a l'app. Als dos últims minuts, revisió creuada a la vista de mòbil.|Recuerda los criterios visibles en la app. En los dos últimos minutos, revisión cruzada en la vista de móvil." },
    { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["El viewport evita que el mòbil ho encongeixi tot.|El viewport evita que el móvil lo encoja todo.", "Percentatges, max-width i imatges amb max-width 100%.|Porcentajes, max-width e imágenes con max-width 100%.", "El @media amb max-width canvia regles a les pantalles petites.|El @media con max-width cambia reglas en las pantallas pequeñas."],
      nota: "Torna a la diapositiva 2: ara saben arreglar els tres problemes.|Vuelve a la diapositiva 2: ahora saben arreglar los tres problemas." },
    { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Per a què serveix el viewport?|¿Para qué sirve el viewport?", "Quina regla fa que una imatge no surti de la pantalla?|¿Qué regla hace que una imagen no se salga de la pantalla?"],
      nota: "Anota qui confon max-width i min-width per tornar-hi a la sessió següent.|Anota quién confunde max-width y min-width para volver a ello en la sesión siguiente." }
  ],
  print: [
    { id: 'p1', t: "Peces de la pàgina per recol·locar|Piezas de la página para recolocar", k: 'targetes',
      intro: "Un lot per parella. Retalleu les peces i col·loqueu-les primer en un full apaïsat (ordinador) i després en una tira estreta (mòbil).|Un lote por pareja. Recortad las piezas y colocadlas primero en una hoja apaisada (ordenador) y después en una tira estrecha (móvil).",
      items: [
        { t: "Títol de la pàgina|Título de la página", n: 1 },
        { t: "Menú: Inici · Fotos · Horaris · Contacte|Menú: Inicio · Fotos · Horarios · Contacto", n: 1 },
        { t: "Caixa amb foto i text|Caja con foto y texto", n: 3 },
        { t: "Peu de pàgina|Pie de página", n: 1 }
      ] },
    { id: 'p2', t: "Fitxa: de l'ordinador al mòbil|Ficha: del ordenador al móvil", k: 'fitxa',
      intro: "Resol cada exercici en paper. Escriu el CSS amb les claus i els punts i coma.|Resuelve cada ejercicio en papel. Escribe el CSS con las llaves y los puntos y coma.",
      items: [
        { q: "Escriu la línia que va dins del head perquè el mòbil faci servir la seva amplada real.|Escribe la línea que va dentro del head para que el móvil use su anchura real.", sol: "meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" (entre els signes de l'etiqueta)|meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" (entre los signos de la etiqueta)" },
        { q: "Canvia aquesta regla perquè la caixa no surti mai de la pantalla: .caixa { width: 800px; }|Cambia esta regla para que la caja no se salga nunca de la pantalla: .caixa { width: 800px; }", sol: ".caixa { max-width: 800px; } (o width: 100%; max-width: 800px;)|.caixa { max-width: 800px; } (o width: 100%; max-width: 800px;)" },
        { q: "Escriu el @media que posa la .galeria en columna quan la pantalla fa 600 píxels o menys.|Escribe el @media que pone la .galeria en columna cuando la pantalla mide 600 píxeles o menos.", sol: "@media (max-width: 600px) { .galeria { flex-direction: column; } }|@media (max-width: 600px) { .galeria { flex-direction: column; } }" },
        { q: "Una regla diu @media (min-width: 900px). S'aplicarà en un mòbil? I en un ordinador de 1200?|Una regla dice @media (min-width: 900px). ¿Se aplicará en un móvil? ¿Y en un ordenador de 1200?", sol: "Al mòbil no (no arriba a 900); a l'ordinador de 1200, sí.|En el móvil no (no llega a 900); en el ordenador de 1200, sí." }
      ] }
  ]
},

/* ===================== w7-2 · Botons i efectes ===================== */
'w7-2': {
  obj: [
    "L'alumne/a converteix un enllaç en un botó amb padding, color de fons, border-radius i text-decoration none.|El alumno/a convierte un enlace en un botón con padding, color de fondo, border-radius y text-decoration none.",
    "L'alumne/a fa servir les pseudoclasses :hover i :active per canviar l'aspecte d'un element segons l'estat.|El alumno/a usa las pseudoclases :hover y :active para cambiar el aspecto de un elemento según el estado.",
    "L'alumne/a aplica transition i transform per fer efectes suaus i explica on va cada propietat.|El alumno/a aplica transition y transform para hacer efectos suaves y explica dónde va cada propiedad.",
    "L'alumne/a dissenya botons tàctils de 44 píxels o més i explica per què el :hover no serveix al mòbil.|El alumno/a diseña botones táctiles de 44 píxeles o más y explica por qué el :hover no sirve en el móvil."
  ],
  comp: [
    "Competència digital: creació de continguts digitals (interacció amb CSS)|Competencia digital: creación de contenidos digitales (interacción con CSS)",
    "Pensament computacional: estats d'un element (normal, a sobre, prement)|Pensamiento computacional: estados de un elemento (normal, encima, pulsando)",
    "Disseny i usabilitat: retroacció visual i accessibilitat tàctil|Diseño y usabilidad: retroalimentación visual y accesibilidad táctil",
    "Matemàtiques: mesures en píxels, escales i temps en segons|Matemáticas: medidas en píxeles, escalas y tiempo en segundos"
  ],
  vocab: [
    ["Pseudoclasse|Pseudoclase", "Un estat d'un element que s'escriu amb dos punts: :hover, :active.|Un estado de un elemento que se escribe con dos puntos: :hover, :active."],
    [":hover|:hover", "Quan el ratolí és a sobre de l'element.|Cuando el ratón está encima del elemento."],
    [":active|:active", "El moment en què es prem l'element, amb el ratolí o amb el dit.|El momento en que se pulsa el elemento, con el ratón o con el dedo."],
    ["transition|transition", "Fa que un canvi d'estil passi a poc a poc, en el temps que diguem.|Hace que un cambio de estilo pase poco a poco, en el tiempo que digamos."],
    ["transform|transform", "Mou, gira o canvia la mida d'un element sense empènyer els altres.|Mueve, gira o cambia el tamaño de un elemento sin empujar a los demás."],
    ["Zona tàctil|Zona táctil", "L'espai que es pot tocar amb el dit: com a mínim 44 píxels d'alt.|El espacio que se puede tocar con el dedo: como mínimo 44 píxeles de alto."]
  ],
  mat: {
    aula: [
      "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Botons i efectes»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Botones y efectos»",
      "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
      "Paper, colors, tisores i un regle per parella|Papel, colores, tijeras y una regla por pareja"
    ],
    imprimir: ["Fitxa: botons amb CSS|Ficha: botones con CSS"],
    prep: [
      "Imprimir una fitxa per alumne/a.|Imprimir una ficha por alumno/a.",
      "Preparar el codi de les diapositives 6 a 8 en un editor obert per canviar valors en directe (el color del hover, el temps de la transició).|Preparar el código de las diapositivas 6 a 8 en un editor abierto para cambiar valores en directo (el color del hover, el tiempo de la transición).",
      "Pensar dues o tres webs conegudes amb botons que reaccionen per comentar-les a l'inici.|Pensar dos o tres webs conocidas con botones que reaccionen para comentarlas al inicio."
    ]
  },
  plan: [
    { min: 5, t: "Benvinguda: botons que responen|Bienvenida: botones que responden", fase: 'inici',
      fa: "Pregunta com sabem que una cosa d'una web es pot clicar. Recull respostes (canvia de color, surt una maneta, sembla un botó) i repassa amb la diapositiva el @media i el viewport de la sessió anterior.|Pregunta cómo sabemos que una cosa de una web se puede clicar. Recoge respuestas (cambia de color, sale una manita, parece un botón) y repasa con la diapositiva el @media y el viewport de la sesión anterior.",
      diu: ["Com sabeu que una cosa es pot clicar, sense provar-ho?|¿Cómo sabéis que una cosa se puede clicar, sin probarlo?",
        "Avui farem que les vostres webs responguin quan les toqueu.|Hoy haremos que vuestras webs respondan cuando las toquéis."],
      slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
    { min: 13, t: "Estats, transicions i transformacions|Estados, transiciones y transformaciones", fase: 'teoria',
      fa: "Construeix pas a pas un botó: primer l'enllaç amb aspecte de botó, després el :hover i la maneta, la transició, el transform i el :active. Canvia valors en directe (2 segons de transició, scale 1.5) perquè vegin què és exagerat. Acaba amb els botons tàctils i la idea que al mòbil no hi ha hover.|Construye paso a paso un botón: primero el enlace con aspecto de botón, después el :hover y la manita, la transición, el transform y el :active. Cambia valores en directo (2 segundos de transición, scale 1.5) para que vean qué es exagerado. Termina con los botones táctiles y la idea de que en el móvil no hay hover.",
      diu: ["El :hover és un estat: el mateix botó, quan el ratolí hi és a sobre.|El :hover es un estado: el mismo botón, cuando el ratón está encima.",
        "On posem la transition, a la regla normal o al hover? Per què?|¿Dónde ponemos la transition, en la regla normal o en el hover? ¿Por qué?",
        "Al mòbil, com feu hover amb el dit?|En el móvil, ¿cómo hacéis hover con el dedo?"],
      slides: ['s4', 's5', 's6', 's7', 's8', 's9', 's10'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
    { min: 7, t: "El botó de tres cares|El botón de tres caras", fase: 'desconnectat',
      fa: "En parelles, retallen tres rectangles i dibuixen el mateix botó en estat normal, hover i active. Mesuren la punta del dit amb el regle i dibuixen un botó tàctil còmode i un de minúscul. Al final ensenyen les tres cares de pressa, com una animació.|Por parejas, recortan tres rectángulos y dibujan el mismo botón en estado normal, hover y active. Miden la punta del dedo con la regla y dibujan un botón táctil cómodo y uno minúsculo. Al final enseñan las tres caras deprisa, como una animación.",
      diu: ["Què canvia d'una cara a l'altra? Digueu-ho amb una propietat CSS.|¿Qué cambia de una cara a otra? Decidlo con una propiedad CSS.",
        "Quant fa la punta del vostre dit? Hi cap en el botó petit?|¿Cuánto mide la punta de vuestro dedo? ¿Cabe en el botón pequeño?"],
      slides: ['s11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
    { min: 11, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
      fa: "Cada alumne/a avança fins a la pausa activa: targetes de teoria, les dues prediccions, els dos errors de CSS i el laboratori d'efectes. Fes la pausa del botó humà tots junts.|Cada alumno/a avanza hasta la pausa activa: tarjetas de teoría, las dos predicciones, los dos errores de CSS y el laboratorio de efectos. Haced la pausa del botón humano todos juntos.",
      diu: ["Al laboratori, quin efecte us agrada més? I quin marejaria?|En el laboratorio, ¿qué efecto os gusta más? ¿Y cuál marearía?",
        "A l'error del hover, mireu bé els dos punts.|En el error del hover, mirad bien los dos puntos."],
      slides: ['s12'], app: "Recorda, Missió, Descobreix, Mans a l'obra (ja fet), les prediccions del botó, els dos errors, el laboratori d'efectes i la pausa «Botó humà».|Recuerda, Misión, Descubre, Manos a la obra (ya hecho), las predicciones del botón, los dos errores, el laboratorio de efectos y la pausa «Botón humano».", org: "Individual i pausa tots junts|Individual y pausa todos juntos" },
    { min: 15, t: "Reptes: el botó perfecte|Retos: el botón perfecto", fase: 'ordinador',
      fa: "Projecta la diapositiva dels reptes. Els reptes 1 a 3 construeixen el mateix botó pas a pas; el 4 és d'arreglar errors i el 5, de botons tàctils al mòbil. Qui acabi fa la targeta que s'aixeca.|Proyecta la diapositiva de los retos. Los retos 1 a 3 construyen el mismo botón paso a paso; el 4 es de arreglar errores y el 5, de botones táctiles en el móvil. Quien termine hace la tarjeta que se levanta.",
      diu: ["Passeu el ratolí per sobre del vostre botó: fa el que volíeu?|Pasad el ratón por encima de vuestro botón: ¿hace lo que queríais?",
        "Al repte 4, el corrector us marca una línia: llegiu el missatge.|En el reto 4, el corrector os marca una línea: leed el mensaje.",
        "Al repte 5, mireu-lo a la vista de mòbil.|En el reto 5, miradlo en la vista de móvil."],
      slides: ['s13', 's14'], app: "Els cinc reptes (enllaç-botó, hover i maneta, transició i transform, botó amb errors, menú tàctil) i el repte extra «La targeta que s'aixeca».|Los cinco retos (enlace-botón, hover y manita, transición y transform, botón con errores, menú táctil) y el reto extra «La tarjeta que se levanta».", org: "Individual|Individual" },
    { min: 6, t: "Crea: la meva botonera|Crea: mi botonera", fase: 'crea',
      fa: "Cada alumne/a fa la seva botonera: avatar, nom i quatre botons grans cap a coses que li agraden, amb hover, transició i active. Recorda que els enllaços no han de portar enlloc real: és un disseny.|Cada alumno/a hace su botonera: avatar, nombre y cuatro botones grandes hacia cosas que le gustan, con hover, transición y active. Recuerda que los enlaces no tienen que llevar a ningún sitio real: es un diseño.",
      diu: ["Feu servir colors que combinin: el del hover, una mica més fosc que el normal.|Usad colores que combinen: el del hover, un poco más oscuro que el normal.",
        "No poseu dades personals reals: n'hi ha prou amb el nom de pila.|No pongáis datos personales reales: basta con el nombre de pila."],
      slides: ['s15'], app: "Pas «Crea»: La meva botonera (es desa al portafoli).|Paso «Crea»: Mi botonera (se guarda en el portafolio).", org: "Individual|Individual" },
    { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
      fa: "Repassa les tres idees, deixa que facin les preguntes finals i fes una pregunta del tiquet a cada alumne/a.|Repasa las tres ideas, deja que hagan las preguntas finales y haz una pregunta del ticket a cada alumno/a.",
      diu: ["Quina diferència hi ha entre :hover i :active?|¿Qué diferencia hay entre :hover y :active?",
        "Per què els botons del mòbil han de ser grans?|¿Por qué los botones del móvil tienen que ser grandes?"],
      slides: ['s16', 's17'], app: "«Tancament»: dues preguntes i com m'he sentit.|«Cierre»: dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
  ],
  errors: [
    ["Escriu .boto :hover (amb espai) o .boto hover (sense dos punts).|Escribe .boto :hover (con espacio) o .boto hover (sin dos puntos).",
      "Que ho llegeixi com una sola paraula: el botó-quan-el-ratolí-és-a-sobre. Tot enganxat, amb dos punts.|Que lo lea como una sola palabra: el botón-cuando-el-ratón-está-encima. Todo junto, con dos puntos."],
    ["Posa la transition dins del :hover i, en treure el ratolí, el botó torna de cop.|Pone la transition dentro del :hover y, al quitar el ratón, el botón vuelve de golpe.",
      "Que la mogui a la regla normal i compari les dues versions passant el ratolí per sobre i fora.|Que la mueva a la regla normal y compare las dos versiones pasando el ratón por encima y fuera."],
    ["Fa efectes exagerats (scale 2, girs grans, transicions de 3 segons).|Hace efectos exagerados (scale 2, giros grandes, transiciones de 3 segundos).",
      "No ho corregeixis de seguida: pregunta-li com se sentiria qui fa servir la web. Proposa valors petits: scale 1.05, 0.3s.|No lo corrijas enseguida: pregúntale cómo se sentiría quien usa la web. Propón valores pequeños: scale 1.05, 0.3s."],
    ["Escriu cursor hand, que el navegador no entén.|Escribe cursor hand, que el navegador no entiende.",
      "El valor és pointer. Recorda-li que els suggeriments de l'editor li mostren els valors vàlids.|El valor es pointer. Recuérdale que las sugerencias del editor le muestran los valores válidos."],
    ["Al repte 5 posa el min-height fora del @media i també canvia l'ordinador.|En el reto 5 pone el min-height fuera del @media y también cambia el ordenador.",
      "No és un error greu, però el repte demana el canvi només al mòbil. Que miri dins de quina clau és la regla.|No es un error grave, pero el reto pide el cambio solo en el móvil. Que mire dentro de qué llave está la regla."]
  ],
  diff: {
    mes: "Fer la targeta que s'aixeca i afegir-hi un botó dins amb el seu propi hover. Investigar transform-origin o el valor ease-in-out a la transició.|Hacer la tarjeta que se levanta y añadirle un botón dentro con su propio hover. Investigar transform-origin o el valor ease-in-out en la transición.",
    menys: "Fer els reptes 1 a 3 amb la fitxa al costat, on hi ha el botó complet, i copiar-ne les propietats d'una en una. Saltar el repte 5 si cal.|Hacer los retos 1 a 3 con la ficha al lado, donde está el botón completo, y copiar sus propiedades de una en una. Saltar el reto 5 si hace falta."
  },
  aval: {
    ticket: ["Quina diferència hi ha entre :hover i :active?|¿Qué diferencia hay entre :hover y :active?",
      "On va la transition perquè l'efecte sigui suau en entrar i en sortir?|¿Dónde va la transition para que el efecto sea suave al entrar y al salir?"],
    rubric: [
      ["Enllaç-botó|Enlace-botón", "Dona aspecte de botó a un enllaç amb totes les propietats necessàries sense ajuda.|Da aspecto de botón a un enlace con todas las propiedades necesarias sin ayuda.", "Fa el botó, però li falta algun ingredient (subratllat, padding o display).|Hace el botón, pero le falta algún ingrediente (subrayado, padding o display)."],
      ["Estats i efectes|Estados y efectos", "Escriu regles :hover i :active correctes, amb transition a la regla normal i efectes mesurats.|Escribe reglas :hover y :active correctas, con transition en la regla normal y efectos medidos.", "Escriu el :hover, però amb errors de selector o la transition al lloc equivocat.|Escribe el :hover, pero con errores de selector o la transition en el sitio equivocado."],
      ["Botons tàctils|Botones táctiles", "Fa botons de 44 píxels o més al mòbil i explica per què.|Hace botones de 44 píxeles o más en el móvil y explica por qué.", "Sap que han de ser grans, però no ho aplica amb un @media.|Sabe que tienen que ser grandes, pero no lo aplica con un @media."],
      ["Botonera pròpia|Botonera propia", "La botonera compleix tots els criteris i té un estil coherent.|La botonera cumple todos los criterios y tiene un estilo coherente.", "La botonera funciona, però li falten efectes o mida tàctil.|La botonera funciona, pero le faltan efectos o tamaño táctil."]
    ]
  },
  casa: "A casa, obriu la botonera des del mòbil i comproveu que els botons es toquen bé amb el dit. Podeu fixar-vos junts en els botons de les apps que feu servir: com us diuen que s'han premut?|En casa, abrid la botonera desde el móvil y comprobad que los botones se tocan bien con el dedo. Podéis fijaros juntos en los botones de las apps que usáis: ¿cómo os dicen que se han pulsado?",
  slides: [
    { id: 's1', k: 'portada', t: "Botons i efectes|Botones y efectos", x: "Avui farem botons que responen: canvien de color, creixen i s'enfonsen.|Hoy haremos botones que responden: cambian de color, crecen y se hunden.",
      nota: "Presenta l'objectiu: acabarem amb una botonera personal que funciona bé al mòbil.|Presenta el objetivo: terminaremos con una botonera personal que funciona bien en el móvil." },
    { id: 's2', k: 'pregunta', t: "Com saps que es pot clicar?|¿Cómo sabes que se puede clicar?", punts: ["Té forma de botó|Tiene forma de botón", "Canvia quan hi passes per sobre|Cambia cuando pasas por encima", "Surt una maneta|Sale una manita"],
      nota: "Recull les respostes i fes notar que totes són CSS: avui les aprendrem a fer.|Recoge las respuestas y haz notar que todas son CSS: hoy aprenderemos a hacerlas." },
    { id: 's3', k: 'repas', t: "Recordem|Recordemos", punts: ["El viewport, dins del head.|El viewport, dentro del head.", "El @media amb max-width, per a pantalles petites.|El @media con max-width, para pantallas pequeñas."],
      code: '@media (max-width: 600px) {\n  .fila {\n    flex-direction: column;\n  }\n}',
      nota: "Pregunta qui recorda quantes claus de tancar porta un @media amb una regla a dins.|Pregunta quién recuerda cuántas llaves de cerrar lleva un @media con una regla dentro." },
    { id: 's4', k: 'concepte', t: "Un enllaç disfressat de botó|Un enlace disfrazado de botón", punts: ["padding: espai de dins|padding: espacio de dentro", "background: color de fons|background: color de fondo", "border-radius: cantonades rodones|border-radius: esquinas redondas", "text-decoration none: sense subratllat|text-decoration none: sin subrayado"],
      code: '.boto {\n  display: inline-block;\n  padding: 12px 24px;\n  background: #E2574C;\n  color: white;\n  text-decoration: none;\n  border-radius: 10px;\n}',
      nota: "Treu i posa el text-decoration en directe perquè vegin el subratllat. Explica que inline-block fa que el padding ocupi lloc de debò.|Quita y pon el text-decoration en directo para que vean el subrayado. Explica que inline-block hace que el padding ocupe sitio de verdad." },
    { id: 's5', k: 'anim', t: "El :hover|El :hover", anim: 'whover', x: "Una pseudoclasse és un estat de l'element: el mateix botó, quan el ratolí hi és a sobre.|Una pseudoclase es un estado del elemento: el mismo botón, cuando el ratón está encima.",
      nota: "Remarca que a la regla del hover només hi posem el que canvia.|Remarca que en la regla del hover solo ponemos lo que cambia." },
    { id: 's6', k: 'concepte', t: "Color nou i maneta|Color nuevo y manita", code: '.boto {\n  background: teal;\n  cursor: pointer;\n}\n.boto:hover {\n  background: navy;\n}',
      nota: "Fes veure l'error típic: si hi poses un espai, .boto :hover ja no funciona. Prova-ho en directe.|Haz ver el error típico: si pones un espacio, .boto :hover ya no funciona. Pruébalo en directo." },
    { id: 's7', k: 'concepte', t: "Canvis suaus amb transition|Cambios suaves con transition", x: "La transition va a la regla normal: així és suau en entrar i en sortir.|La transition va en la regla normal: así es suave al entrar y al salir.",
      code: '.boto {\n  background: teal;\n  transition: 0.4s;\n}\n.boto:hover {\n  background: darkorange;\n}',
      nota: "Canvia el temps a 2s i després a 0.1s. Pregunta quin queda més natural.|Cambia el tiempo a 2s y después a 0.1s. Pregunta cuál queda más natural." },
    { id: 's8', k: 'concepte', t: "Créixer, pujar i girar|Crecer, subir y girar", punts: ["scale(1.1): un 10 % més gran|scale(1.1): un 10 % más grande", "translateY(-4px): puja 4 píxels|translateY(-4px): sube 4 píxeles", "rotate(3deg): gira una mica|rotate(3deg): gira un poco"],
      code: '.boto:hover {\n  transform: translateY(-4px) scale(1.05);\n  box-shadow: 0 6px 12px gray;\n}',
      nota: "Destaca que transform no empeny els veïns: el botó creix per sobre dels altres elements.|Destaca que transform no empuja a los vecinos: el botón crece por encima de los demás elementos." },
    { id: 's9', k: 'concepte', t: "El botó que s'enfonsa|El botón que se hunde", x: ":active és el moment en què prems, amb el ratolí o amb el dit.|:active es el momento en que pulsas, con el ratón o con el dedo.",
      code: '.boto:active {\n  transform: scale(0.92);\n}',
      nota: "Pregunta per què aquest efecte sí que es veu al mòbil i el hover no.|Pregunta por qué este efecto sí se ve en el móvil y el hover no." },
    { id: 's10', k: 'concepte', t: "Botons per a dits|Botones para dedos", punts: ["Al mòbil no hi ha hover.|En el móvil no hay hover.", "Botons de 44 píxels d'alt o més.|Botones de 44 píxeles de alto o más.", "Espai entre botons perquè no toquis el del costat.|Espacio entre botones para que no toques el de al lado."],
      code: '@media (max-width: 600px) {\n  .menu a {\n    min-height: 44px;\n    font-size: 18px;\n  }\n}',
      nota: "Enllaça amb l'activitat de mesurar el dit que faran ara.|Enlaza con la actividad de medir el dedo que harán ahora." },
    { id: 's11', k: 'activitat', t: "El botó de tres cares|El botón de tres caras", timer: 7, punts: ["Dibuixeu el botó normal, en hover i en active.|Dibujad el botón normal, en hover y en active.", "Mesureu la punta del dit.|Medid la punta del dedo.", "Dibuixeu un botó tàctil còmode i un de minúscul.|Dibujad un botón táctil cómodo y uno minúsculo."],
      nota: "Demana que escriguin al costat de cada cara la propietat CSS que canvia.|Pide que escriban al lado de cada cara la propiedad CSS que cambia." },
    { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 11, punts: ["Obre la sessió «Botons i efectes».|Abre la sesión «Botones y efectos».", "Fes fins a la pausa activa.|Haz hasta la pausa activa.", "Al laboratori, prova valors exagerats i valors petits.|En el laboratorio, prueba valores exagerados y valores pequeños."],
      nota: "Quan tothom arribi a la pausa, feu el botó humà en parelles.|Cuando todos lleguen a la pausa, haced el botón humano por parejas." },
    { id: 's13', k: 'repte', t: "Reptes: el botó perfecte|Retos: el botón perfecto", timer: 15, punts: ["1. Enllaç-botó|1. Enlace-botón", "2. Hover i maneta|2. Hover y manita", "3. Transició i transform|3. Transición y transform", "4. El botó amb tres errors|4. El botón con tres errores", "5. Menú tàctil per al mòbil|5. Menú táctil para el móvil"],
      code: '.boto {\n  cursor: pointer;\n  transition: 0.3s;\n}\n.boto:hover {\n  transform: scale(1.05);\n}\n.boto:active {\n  transform: scale(0.95);\n}',
      nota: "Els reptes 1 a 3 construeixen el mateix botó: que no esborrin el que ja tenen.|Los retos 1 a 3 construyen el mismo botón: que no borren lo que ya tienen." },
    { id: 's14', k: 'repte', t: "Repte extra: la targeta que s'aixeca|Reto extra: la tarjeta que se levanta", x: "Quan passes per sobre de la targeta, puja, fa més ombra i la imatge de dins creix.|Cuando pasas por encima de la tarjeta, sube, hace más sombra y la imagen de dentro crece.",
      code: '.targeta:hover img {\n  transform: scale(1.08);\n}',
      nota: "Explica el selector: la imatge de la targeta, quan el ratolí és sobre la targeta.|Explica el selector: la imagen de la tarjeta, cuando el ratón está sobre la tarjeta." },
    { id: 's15', k: 'activitat', t: "Crea: la meva botonera|Crea: mi botonera", timer: 6, x: "El teu avatar, el teu nom i quatre botons grans amb hover, transició i active.|Tu avatar, tu nombre y cuatro botones grandes con hover, transición y active.",
      nota: "Recorda que no cal posar enllaços reals ni dades personals.|Recuerda que no hace falta poner enlaces reales ni datos personales." },
    { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: [":hover quan el ratolí és a sobre; :active quan prems.|:hover cuando el ratón está encima; :active cuando pulsas.", "transition fa els canvis suaus; transform mou i fa créixer.|transition hace los cambios suaves; transform mueve y hace crecer.", "Al mòbil, botons de 44 píxels o més.|En el móvil, botones de 44 píxeles o más."],
      nota: "Torna a la pregunta de l'inici: ara saben fer les tres coses que van dir.|Vuelve a la pregunta del inicio: ahora saben hacer las tres cosas que dijeron." },
    { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Diferència entre :hover i :active|Diferencia entre :hover y :active", "On va la transition?|¿Dónde va la transition?"],
      nota: "Anota qui encara escriu el hover amb espai per revisar-ho a la sessió següent.|Anota quién todavía escribe el hover con espacio para revisarlo en la sesión siguiente." }
  ],
  print: [
    { id: 'p1', t: "Fitxa: botons amb CSS|Ficha: botones con CSS", k: 'fitxa',
      intro: "Resol cada exercici en paper. Pots fer servir la fitxa de recordatori durant els reptes.|Resuelve cada ejercicio en papel. Puedes usar la ficha de recordatorio durante los retos.",
      items: [
        { q: "Escriu les propietats que converteixen l'enllaç .boto en un botó (almenys quatre).|Escribe las propiedades que convierten el enlace .boto en un botón (al menos cuatro).", sol: "display: inline-block; padding: 12px 24px; background: un color; color: white; text-decoration: none; border-radius: 10px;|display: inline-block; padding: 12px 24px; background: un color; color: white; text-decoration: none; border-radius: 10px;" },
        { q: "Troba l'error: .boto hover { background: navy; }|Encuentra el error: .boto hover { background: navy; }", sol: "Falten els dos punts: .boto:hover|Faltan los dos puntos: .boto:hover" },
        { q: "On escriuries transition: 0.3s perquè el canvi sigui suau en entrar i en sortir? Per què?|¿Dónde escribirías transition: 0.3s para que el cambio sea suave al entrar y al salir? ¿Por qué?", sol: "A la regla normal .boto, perquè així s'aplica en els dos sentits.|En la regla normal .boto, porque así se aplica en los dos sentidos." },
        { q: "Dibuixa com es veurà un botó amb transform: scale(1.1) rotate(5deg) quan hi passes per sobre.|Dibuja cómo se verá un botón con transform: scale(1.1) rotate(5deg) cuando pasas por encima.", sol: "Una mica més gran i inclinat cap a la dreta.|Un poco más grande e inclinado hacia la derecha." },
        { q: "Escriu una regla perquè, al mòbil, els enllaços del .menu facin 44 píxels d'alt o més.|Escribe una regla para que, en el móvil, los enlaces del .menu midan 44 píxeles de alto o más.", sol: "@media (max-width: 600px) { .menu a { min-height: 44px; } }|@media (max-width: 600px) { .menu a { min-height: 44px; } }" }
      ] }
  ]
},

/* ===================== w7-3 · Detecta la web falsa ===================== */
'w7-3': {
  obj: [
    "L'alumne/a llegeix una adreça web i identifica el domini real, encara que comenci amb el nom d'una altra web.|El alumno/a lee una dirección web e identifica el dominio real, aunque empiece con el nombre de otra web.",
    "L'alumne/a explica que el candau indica una connexió xifrada, però no garanteix que la web sigui honrada.|El alumno/a explica que el candado indica una conexión cifrada, pero no garantiza que la web sea honrada.",
    "L'alumne/a reconeix pistes d'una web trampa (pressa, premis, preus impossibles, faltes, demanar contrasenyes o dades) i sap què fer si en troba una.|El alumno/a reconoce pistas de una web trampa (prisa, premios, precios imposibles, faltas, pedir contraseñas o datos) y sabe qué hacer si encuentra una.",
    "L'alumne/a crea una pàgina de consells de seguretat amb caixes d'avís, una llista de comprovació, efectes i disseny adaptable.|El alumno/a crea una página de consejos de seguridad con cajas de aviso, una lista de comprobación, efectos y diseño adaptable."
  ],
  comp: [
    "Competència digital: seguretat i benestar digital (detectar fraus i protegir les dades personals)|Competencia digital: seguridad y bienestar digital (detectar fraudes y proteger los datos personales)",
    "Competència digital: creació de continguts digitals amb HTML i CSS|Competencia digital: creación de contenidos digitales con HTML y CSS",
    "Pensament crític: buscar evidències abans de confiar en una informació|Pensamiento crítico: buscar evidencias antes de confiar en una información",
    "Competència personal i social: demanar ajuda a un adult de confiança|Competencia personal y social: pedir ayuda a un adulto de confianza"
  ],
  vocab: [
    ["Domini|Dominio", "El nom de la web, just abans de la primera barra de l'adreça (per exemple, biblioteca-del-barri.cat).|El nombre de la web, justo antes de la primera barra de la dirección (por ejemplo, biblioteca-del-barri.cat)."],
    ["HTTPS i candau|HTTPS y candado", "La connexió va xifrada: ningú no pot llegir pel camí el que escrius. No vol dir que la web sigui honrada.|La conexión va cifrada: nadie puede leer por el camino lo que escribes. No significa que la web sea honrada."],
    ["Pesca de dades (phishing)|Pesca de datos (phishing)", "Engany que imita una web o un missatge conegut per aconseguir contrasenyes o dades.|Engaño que imita una web o un mensaje conocido para conseguir contraseñas o datos."],
    ["Dades personals|Datos personales", "Informació que t'identifica: nom complet, adreça, telèfon, fotos, contrasenyes.|Información que te identifica: nombre completo, dirección, teléfono, fotos, contraseñas."],
    ["Domini imitador|Dominio imitador", "Un nom de web que s'assembla a un altre canviant lletres o afegint paraules.|Un nombre de web que se parece a otro cambiando letras o añadiendo palabras."]
  ],
  mat: {
    aula: [
      "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Detecta la web falsa»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Detecta la web falsa»",
      "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
      "Fulls, colors i una lupa de paper (un cercle retallat) per alumne/a|Hojas, colores y una lupa de papel (un círculo recortado) por alumno/a"
    ],
    imprimir: ["Targetes de pistes|Tarjetas de pistas", "Fitxa del detectiu/a: llegeix l'adreça|Ficha del detective: lee la dirección"],
    prep: [
      "Imprimir un lot de targetes de pistes per grup i una fitxa per alumne/a.|Imprimir un lote de tarjetas de pistas por grupo y una ficha por alumno/a.",
      "Repassar els quatre casos de l'app per saber quines pistes té cadascun (el cas 3 és una web de fiar).|Repasar los cuatro casos de la app para saber qué pistas tiene cada uno (el caso 3 es una web de fiar).",
      "Tenir present que algun alumne/a pot explicar una experiència real: escolta-la sense jutjar i, si cal, segueix el protocol del centre.|Tener presente que algún alumno/a puede explicar una experiencia real: escúchala sin juzgar y, si hace falta, sigue el protocolo del centro."
    ]
  },
  plan: [
    { min: 5, t: "Benvinguda: el missatge del premi|Bienvenida: el mensaje del premio", fase: 'inici',
      fa: "Projecta el missatge del premi i pregunta què farien. Recull respostes sense jutjar. Repassa ràpidament el :hover i els botons grans de la sessió anterior: avui faran una pàgina de consells que els farà servir.|Proyecta el mensaje del premio y pregunta qué harían. Recoge respuestas sin juzgar. Repasa rápidamente el :hover y los botones grandes de la sesión anterior: hoy harán una página de consejos que los usará.",
      diu: ["Has participat en algun sorteig? Llavors, per què hauries guanyat?|¿Has participado en algún sorteo? Entonces, ¿por qué habrías ganado?",
        "Avui sereu detectius de webs: buscarem pistes, no culpables.|Hoy seréis detectives de webs: buscaremos pistas, no culpables."],
      slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
    { min: 13, t: "Les pistes d'una web trampa|Las pistas de una web trampa", fase: 'teoria',
      fa: "Explica com es llegeix una adreça (la web és just abans de la primera barra) i què vol dir el candau. Ensenya el codi del fals banc per fer veure que qualsevol pot fer una pantalla que sembli oficial. Repassa els enllaços enganyosos, la pressa i la llista de pistes, i acaba amb què fer si dubten.|Explica cómo se lee una dirección (la web está justo antes de la primera barra) y qué significa el candado. Enseña el código del falso banco para hacer ver que cualquiera puede hacer una pantalla que parezca oficial. Repasa los enlaces engañosos, la prisa y la lista de pistas, y termina con qué hacer si dudan.",
      diu: ["Busqueu la primera barra després de https. Què hi ha just davant?|Buscad la primera barra después de https. ¿Qué hay justo delante?",
        "El candau diu connexió protegida, no web honrada.|El candado dice conexión protegida, no web honrada.",
        "Aquest fals banc l'he fet amb quatre línies d'HTML: les mateixes que sabeu vosaltres.|Este falso banco lo he hecho con cuatro líneas de HTML: las mismas que sabéis vosotros.",
        "Si mai caieu en una trampa, no és culpa vostra: expliqueu-ho de seguida.|Si alguna vez caéis en una trampa, no es culpa vuestra: contadlo enseguida."],
      slides: ['s4', 's5', 's6', 's7', 's8', 's9', 's10'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
    { min: 9, t: "La fàbrica de trampes|La fábrica de trampas", fase: 'desconnectat',
      fa: "En parelles, cadascú dibuixa una web inventada amb tres pistes amagades i l'intercanvia. Amb la lupa de paper encerclen les pistes i escriuen per què. Si sobra temps, classifiquen les targetes de pistes en sospitoses i normals. Al final, dibuixen junts la versió de fiar.|Por parejas, cada uno dibuja una web inventada con tres pistas escondidas y la intercambia. Con la lupa de papel rodean las pistas y escriben por qué. Si sobra tiempo, clasifican las tarjetas de pistas en sospechosas y normales. Al final, dibujan juntos la versión de fiar.",
      diu: ["Inventeu els noms: res de botigues ni bancs de veritat.|Inventad los nombres: nada de tiendas ni bancos de verdad.",
        "Quina pista era la més ben amagada?|¿Qué pista era la mejor escondida?",
        "Què hauríeu de canviar perquè la web fos de fiar?|¿Qué tendríais que cambiar para que la web fuera de fiar?"],
      slides: ['s11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
    { min: 11, t: "A l'ordinador: els quatre casos|En el ordenador: los cuatro casos", fase: 'ordinador',
      fa: "Cada alumne/a fa a l'app la part inicial i els quatre casos del detectiu/a. Quan la majoria hagi fet el cas 3, atura la classe un minut: era de fiar, i per què? Feu la pausa activa tots junts.|Cada alumno/a hace en la app la parte inicial y los cuatro casos del detective. Cuando la mayoría haya hecho el caso 3, para la clase un minuto: era de fiar, ¿y por qué? Haced la pausa activa todos juntos.",
      diu: ["Al cas 2 hi ha candau. Això la fa de fiar?|En el caso 2 hay candado. ¿Eso la hace de fiar?",
        "Al cas 3, quines pistes de confiança heu trobat?|En el caso 3, ¿qué pistas de confianza habéis encontrado?",
        "Al cas 4, llegiu l'adreça sencera, a poc a poc.|En el caso 4, leed la dirección entera, despacio."],
      slides: ['s12'], app: "Recorda, Missió (dues històries), Descobreix, Mans a l'obra (ja fet), els quatre casos del detectiu/a i la pausa «Detectiu/a en moviment».|Recuerda, Misión (dos historias), Descubre, Manos a la obra (ya hecho), los cuatro casos del detective y la pausa «Detective en movimiento».", org: "Individual|Individual" },
    { min: 13, t: "Reptes: la pàgina Navega segur|Retos: la página Navega segur", fase: 'ordinador',
      fa: "Projecta els reptes: construeixen per parts una pàgina de consells (caixa d'avís, llista de comprovació, tres errors per arreglar i targetes que reaccionen i s'adapten). Qui acabi fa el test desplegable amb details i summary.|Proyecta los retos: construyen por partes una página de consejos (caja de aviso, lista de comprobación, tres errores para arreglar y tarjetas que reaccionan y se adaptan). Quien termine hace el test desplegable con details y summary.",
      diu: ["Al repte 3 també heu de fer de detectius, però del codi.|En el reto 3 también tenéis que hacer de detectives, pero del código.",
        "Els consells que escriviu, que siguin útils de debò.|Los consejos que escribáis, que sean útiles de verdad."],
      slides: ['s13', 's14'], app: "Els quatre reptes (caixa d'avís, llista de comprovació, tres errors, targetes amb hover i @media) i el repte extra «El test desplegable».|Los cuatro retos (caja de aviso, lista de comprobación, tres errores, tarjetas con hover y @media) y el reto extra «El test desplegable».", org: "Individual|Individual" },
    { min: 6, t: "Crea: el meu cartell de seguretat|Crea: mi cartel de seguridad", fase: 'crea',
      fa: "Cada alumne/a fa el seu cartell de seguretat per ensenyar-lo a casa o a alumnes més petits. Insisteix que els consells han de ser clars i curts, com en un cartell de debò.|Cada alumno/a hace su cartel de seguridad para enseñarlo en casa o a alumnos más pequeños. Insiste en que los consejos tienen que ser claros y cortos, como en un cartel de verdad.",
      diu: ["Penseu en qui el llegirà: un germà petit, l'àvia… Com li ho diríeu?|Pensad en quién lo leerá: un hermano pequeño, la abuela… ¿Cómo se lo diríais?",
        "Comproveu que es llegeix bé a la vista de mòbil.|Comprobad que se lee bien en la vista de móvil."],
      slides: ['s15'], app: "Pas «Crea»: El meu cartell de seguretat (es desa al portafoli).|Paso «Crea»: Mi cartel de seguridad (se guarda en el portafolio).", org: "Individual|Individual" },
    { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
      fa: "Repassa les tres idees, deixa que facin les preguntes finals i fes una pregunta del tiquet a cada alumne/a. Recorda-los que sempre poden explicar a un adult qualsevol cosa estranya que vegin a internet.|Repasa las tres ideas, deja que hagan las preguntas finales y haz una pregunta del ticket a cada alumno/a. Recuérdales que siempre pueden contar a un adulto cualquier cosa rara que vean en internet.",
      diu: ["On és el nom de debò d'una web dins l'adreça?|¿Dónde está el nombre de verdad de una web dentro de la dirección?",
        "Què feu si un missatge us demana la contrasenya?|¿Qué hacéis si un mensaje os pide la contraseña?"],
      slides: ['s16', 's17'], app: "«Tancament»: dues preguntes i com m'he sentit.|«Cierre»: dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
  ],
  errors: [
    ["Creu que el nom de la web és el que surt al principi de l'adreça.|Cree que el nombre de la web es lo que sale al principio de la dirección.",
      "Que posi el dit a la primera barra després de https i llegeixi cap enrere les dues últimes paraules. Practiqueu-ho amb la fitxa.|Que ponga el dedo en la primera barra después de https y lea hacia atrás las dos últimas palabras. Practicadlo con la ficha."],
    ["Pensa que si té candau, segur que és de fiar.|Piensa que si tiene candado, seguro que es de fiar.",
      "Torna al cas 2: té candau i és una trampa. El candau protegeix el camí, no diu qui hi ha a l'altra banda.|Vuelve al caso 2: tiene candado y es una trampa. El candado protege el camino, no dice quién hay al otro lado."],
    ["Ho marca tot com a sospitós, també la web de fiar.|Lo marca todo como sospechoso, también la web de fiar.",
      "Està bé ser prudent. Ajuda'l a buscar pistes de confiança: adreça coherent, contacte, cap pressa, no demana dades.|Está bien ser prudente. Ayúdale a buscar pistas de confianza: dirección coherente, contacto, ninguna prisa, no pide datos."],
    ["Explica una experiència pròpia i se sent avergonyit/da.|Explica una experiencia propia y se siente avergonzado/a.",
      "Agraeix-li que ho expliqui i recorda a tothom que aquestes webs enganyen també els adults. Si hi ha un risc real, segueix el protocol del centre i parla amb la família.|Agradécele que lo cuente y recuerda a todos que estas webs engañan también a los adultos. Si hay un riesgo real, sigue el protocolo del centro y habla con la familia."],
    ["Al repte 3 només troba l'error del CSS i oblida que falta enllaçar l'estil.css.|En el reto 3 solo encuentra el error del CSS y olvida que falta enlazar el estil.css.",
      "Pregunta: si cap color no surt, és un problema d'una regla o de tot el fitxer?|Pregunta: si no sale ningún color, ¿es un problema de una regla o de todo el archivo?"]
  ],
  diff: {
    mes: "Fer el test desplegable i afegir-hi més preguntes. Després, escriure a la pàgina una secció «Com llegir una adreça» amb tres exemples inventats i la resposta amagada dins un details.|Hacer el test desplegable y añadirle más preguntas. Después, escribir en la página una sección «Cómo leer una dirección» con tres ejemplos inventados y la respuesta escondida dentro de un details.",
    menys: "Fer els casos del detectiu/a amb la targeta de pistes al costat. Als reptes, prioritzar l'1 i el 2 i fer el cartell amb tres avisos i tres consells.|Hacer los casos del detective con la tarjeta de pistas al lado. En los retos, priorizar el 1 y el 2 y hacer el cartel con tres avisos y tres consejos."
  },
  aval: {
    ticket: ["En aquesta adreça, quina és la web de debò: botiga.cat.premis.win/entra?|En esta dirección, ¿cuál es la web de verdad: botiga.cat.premis.win/entra?",
      "Digues dues pistes d'una web trampa i què faries si en trobessis una.|Di dos pistas de una web trampa y qué harías si encontraras una."],
    rubric: [
      ["Lectura d'adreces|Lectura de direcciones", "Identifica el domini real en adreces amb paraules afegides o lletres canviades.|Identifica el dominio real en direcciones con palabras añadidas o letras cambiadas.", "L'identifica en adreces senzilles, però es confon quan el nom fals va al principi.|Lo identifica en direcciones sencillas, pero se confunde cuando el nombre falso va al principio."],
      ["Pistes i candau|Pistas y candado", "Troba la majoria de pistes dels casos i explica que el candau no garanteix confiança.|Encuentra la mayoría de pistas de los casos y explica que el candado no garantiza confianza.", "Troba algunes pistes, però confia en una web pel candau o pel logotip.|Encuentra algunas pistas, pero confía en una web por el candado o por el logotipo."],
      ["Què fer|Qué hacer", "Explica els passos: no clicar, escriure l'adreça, avisar un adult.|Explica los pasos: no clicar, escribir la dirección, avisar a un adulto.", "En diu un, però no el procediment complet.|Dice uno, pero no el procedimiento completo."],
      ["Pàgina de consells|Página de consejos", "El cartell té avisos, llista, botó amb efecte i s'adapta al mòbil.|El cartel tiene avisos, lista, botón con efecto y se adapta al móvil.", "El cartell té el contingut, però li falta l'estil o el @media.|El cartel tiene el contenido, pero le falta el estilo o el @media."]
    ]
  },
  casa: "A casa, ensenyeu el cartell de seguretat a la família i repasseu junts els missatges i correus estranys que hàgiu rebut: quines pistes tenien? Acordeu a qui ho explicareu si mai en rebeu un.|En casa, enseñad el cartel de seguridad a la familia y repasad juntos los mensajes y correos raros que hayáis recibido: ¿qué pistas tenían? Acordad a quién se lo contaréis si alguna vez recibís uno.",
  slides: [
    { id: 's1', k: 'portada', t: "Detecta la web falsa|Detecta la web falsa", x: "Avui sereu detectius de webs: aprendreu a llegir les pistes que delaten una web trampa.|Hoy seréis detectives de webs: aprenderéis a leer las pistas que delatan una web trampa.",
      nota: "Presenta l'objectiu: protegir-se i ajudar els altres a protegir-se. El to és tranquil: no volem espantar, volem entrenar la mirada.|Presenta el objetivo: protegerse y ayudar a los demás a protegerse. El tono es tranquilo: no queremos asustar, queremos entrenar la mirada." },
    { id: 's2', k: 'pregunta', t: "Has guanyat una consola!|¡Has ganado una consola!", x: "Entra en 10 minuts o el premi es perdrà. Què faries?|Entra en 10 minutos o el premio se perderá. ¿Qué harías?",
      nota: "Escolta sense corregir. Torna-hi al final: ara sabran trobar-hi tres pistes (premi no demanat, pressa, enllaç desconegut).|Escucha sin corregir. Vuelve a ello al final: ahora sabrán encontrar tres pistas (premio no pedido, prisa, enlace desconocido)." },
    { id: 's3', k: 'repas', t: "Recordem|Recordemos", punts: [":hover i transition per a efectes suaus.|:hover y transition para efectos suaves.", "Botons de 44 píxels o més al mòbil.|Botones de 44 píxeles o más en el móvil."],
      nota: "Repàs ràpid: els faran servir a la pàgina de consells de la segona part.|Repaso rápido: los usarán en la página de consejos de la segunda parte." },
    { id: 's4', k: 'anim', t: "Llegeix l'adreça sencera|Lee la dirección entera", anim: 'wurl', x: "La web de debò són les dues últimes paraules just abans de la primera barra.|La web de verdad son las dos últimas palabras justo antes de la primera barra.",
      punts: ["botiga-pixel.cat/ofertes → botiga-pixel.cat|botiga-pixel.cat/ofertes → botiga-pixel.cat", "botiga-pixel.cat.ofertes.xyz/ → ofertes.xyz|botiga-pixel.cat.ofertes.xyz/ → ofertes.xyz"],
      nota: "Fes-ho amb el dit a la pantalla: busca la primera barra i llegeix cap enrere. Esmenta les lletres canviades (un zero per una o).|Hazlo con el dedo en la pantalla: busca la primera barra y lee hacia atrás. Menciona las letras cambiadas (un cero por una o)." },
    { id: 's5', k: 'concepte', t: "El candau no ho és tot|El candado no lo es todo", punts: ["Amb candau: el que escrius viatja xifrat.|Con candado: lo que escribes viaja cifrado.", "Sense candau: no hi escriguis res.|Sin candado: no escribas nada.", "Però les webs trampa també poden tenir candau.|Pero las webs trampa también pueden tener candado."],
      nota: "Compara-ho amb un sobre tancat: protegeix la carta pel camí, però no et diu si qui la rep és de fiar.|Compáralo con un sobre cerrado: protege la carta por el camino, pero no te dice si quien la recibe es de fiar." },
    { id: 's6', k: 'concepte', t: "Fer una web falsa és massa fàcil|Hacer una web falsa es demasiado fácil", x: "Amb l'HTML que ja sabeu escriure surt una pantalla que sembla d'un banc.|Con el HTML que ya sabéis escribir sale una pantalla que parece de un banco.",
      code: '<div class="login">\n  <h2>🏦 Banc de l\'Illa</h2>\n  <p>Escriu la contrasenya per continuar:</p>\n  <input type="password" placeholder="Contrasenya">\n  <button>Entrar</button>\n</div>',
      nota: "Moment clau de la sessió: que una web sembli oficial no vol dir que ho sigui. Cap banc, escola ni app demana la contrasenya per un missatge.|Momento clave de la sesión: que una web parezca oficial no significa que lo sea. Ningún banco, escuela ni app pide la contraseña por un mensaje." },
    { id: 's7', k: 'concepte', t: "Un enllaç pot mentir|Un enlace puede mentir", x: "El text el pot escriure qualsevol; el href diu on va de debò.|El texto lo puede escribir cualquiera; el href dice adónde va de verdad.",
      code: '<a href="http://regals-gratis.xyz">\n  www.biblioteca-del-barri.cat\n</a>',
      nota: "Ensenya com es veu l'adreça real passant el ratolí per sobre sense clicar. Al mòbil, mantenint el dit premut.|Enseña cómo se ve la dirección real pasando el ratón por encima sin clicar. En el móvil, manteniendo el dedo pulsado." },
    { id: 's8', k: 'concepte', t: "Pressa i gangues impossibles|Prisa y gangas imposibles", punts: ["Compte enrere: L'oferta acaba en 04:59|Cuenta atrás: La oferta acaba en 04:59", "Només en queden 2!!|¡¡Solo quedan 2!!", "Una consola nova a 9 €|Una consola nueva a 9 €"],
      nota: "Pregunta per què una web voldria que anéssim de pressa. Resposta: perquè no pensem. La pressa és el senyal per aturar-se.|Pregunta por qué una web querría que fuéramos deprisa. Respuesta: para que no pensemos. La prisa es la señal para pararse." },
    { id: 's9', k: 'anim', t: "La llista del detectiu/a|La lista del detective", anim: 'wfake', punts: ["Faltes i frases estranyes|Faltas y frases raras", "Premis que no has demanat|Premios que no has pedido", "Cap adreça ni telèfon de contacte|Ninguna dirección ni teléfono de contacto", "Et demana contrasenyes, dades o diners|Te pide contraseñas, datos o dinero"],
      nota: "Una sola pista ja és motiu per aturar-se i preguntar.|Una sola pista ya es motivo para pararse y preguntar." },
    { id: 's10', k: 'anim', t: "Si dubtes, atura't|Si dudas, párate", anim: 'wdns', punts: ["No cliquis ni hi escriguis res.|No hagas clic ni escribas nada.", "Explica-ho a un adult de confiança.|Cuéntaselo a un adulto de confianza.", "Escriu tu l'adreça o fes servir un preferit.|Escribe tú la dirección o usa un favorito.", "Tanca la pestanya.|Cierra la pestaña."],
      nota: "Remarca que caure en una trampa no és culpa de ningú: el que importa és explicar-ho de seguida.|Remarca que caer en una trampa no es culpa de nadie: lo que importa es contarlo enseguida." },
    { id: 's11', k: 'activitat', t: "La fàbrica de trampes|La fábrica de trampas", timer: 9, punts: ["Dibuixa una web inventada amb tres pistes amagades.|Dibuja una web inventada con tres pistas escondidas.", "Intercanvieu-les i busqueu les pistes amb la lupa.|Intercambiadlas y buscad las pistas con la lupa.", "Dibuixeu junts la versió de fiar.|Dibujad juntos la versión de fiar."],
      nota: "Recorda que els noms de les webs han de ser inventats. Si van ràpid, que classifiquin les targetes de pistes.|Recuerda que los nombres de las webs tienen que ser inventados. Si van rápido, que clasifiquen las tarjetas de pistas." },
    { id: 's12', k: 'activitat', t: "Els quatre casos|Los cuatro casos", timer: 11, punts: ["Cas 1: una botiga de consoles|Caso 1: una tienda de consolas", "Cas 2: un premi amb candau|Caso 2: un premio con candado", "Cas 3: la biblioteca del barri|Caso 3: la biblioteca del barrio", "Cas 4: el correu de l'escola|Caso 4: el correo de la escuela"],
      nota: "Atura la classe després del cas 3: no totes les webs són trampes. Quines pistes de confiança tenia?|Para la clase después del caso 3: no todas las webs son trampas. ¿Qué pistas de confianza tenía?" },
    { id: 's13', k: 'repte', t: "Reptes: la pàgina Navega segur|Retos: la página Navega segur", timer: 13, punts: ["1. Una caixa d'avís|1. Una caja de aviso", "2. La llista de comprovació|2. La lista de comprobación", "3. Tres errors amagats|3. Tres errores escondidos", "4. Targetes que reaccionen i s'adapten|4. Tarjetas que reaccionan y se adaptan"],
      code: '.avis {\n  background: mistyrose;\n  border-left: 6px solid tomato;\n  padding: 14px;\n  border-radius: 10px;\n}',
      nota: "Al repte 3 fan de detectius del codi: un error és a l'HTML i dos al CSS.|En el reto 3 hacen de detectives del código: un error está en el HTML y dos en el CSS." },
    { id: 's14', k: 'repte', t: "Repte extra: el test desplegable|Reto extra: el test desplegable", x: "Les etiquetes details i summary amaguen i ensenyen una resposta sense programar res.|Las etiquetas details y summary esconden y enseñan una respuesta sin programar nada.",
      code: '<details>\n  <summary>Una web diu que has guanyat un mòbil</summary>\n  <p>Sospitós: no has participat en cap sorteig.</p>\n</details>',
      nota: "Per a qui acabi abans. Ensenya-ho en directe: un clic al títol i s'obre.|Para quien termine antes. Enséñalo en directo: un clic en el título y se abre." },
    { id: 's15', k: 'activitat', t: "Crea: el meu cartell de seguretat|Crea: mi cartel de seguridad", timer: 6, x: "Tres avisos, una llista de consells i un botó amb efecte, pensat per ensenyar-lo a casa.|Tres avisos, una lista de consejos y un botón con efecto, pensado para enseñarlo en casa.",
      nota: "Recorda que es desa al portafoli i que el poden ensenyar a la família amb el mòbil.|Recuerda que se guarda en el portafolio y que lo pueden enseñar a la familia con el móvil." },
    { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["La web de debò és just abans de la primera barra.|La web de verdad está justo antes de la primera barra.", "El candau no vol dir que la web sigui honrada.|El candado no significa que la web sea honrada.", "Si dubtes: no cliquis, escriu l'adreça i explica-ho a un adult.|Si dudas: no hagas clic, escribe la dirección y cuéntaselo a un adulto."],
      nota: "Torna al missatge del premi: quantes pistes hi troben ara?|Vuelve al mensaje del premio: ¿cuántas pistas encuentran ahora?" },
    { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quina és la web de debò a botiga.cat.premis.win/entra?|¿Cuál es la web de verdad en botiga.cat.premis.win/entra?", "Dues pistes i què faries.|Dos pistas y qué harías."],
      nota: "Resposta de l'adreça: premis.win. Anota qui encara mira el principi de l'adreça.|Respuesta de la dirección: premis.win. Anota quién todavía mira el principio de la dirección." }
  ],
  print: [
    { id: 'p1', t: "Targetes de pistes|Tarjetas de pistas", k: 'targetes',
      intro: "Un lot per parella. Classifiqueu les targetes en dues piles: sospitós i normal. Després compareu-ho amb un altre grup.|Un lote por pareja. Clasificad las tarjetas en dos pilas: sospechoso y normal. Después comparadlo con otro grupo.",
      items: [
        { t: "Compte enrere: l'oferta acaba en 5 minuts|Cuenta atrás: la oferta acaba en 5 minutos", n: 1 },
        { t: "Et demana la contrasenya per donar-te un premi|Te pide la contraseña para darte un premio", n: 1 },
        { t: "Una consola nova per 9 €|Una consola nueva por 9 €", n: 1 },
        { t: "Adreça amb un zero en lloc d'una o|Dirección con un cero en lugar de una o", n: 1 },
        { t: "Faltes d'ortografia al text principal|Faltas de ortografía en el texto principal", n: 1 },
        { t: "Té adreça, telèfon i correu de contacte|Tiene dirección, teléfono y correo de contacto", n: 1 },
        { t: "Explica els horaris amb calma|Explica los horarios con calma", n: 1 },
        { t: "El nom de la web coincideix amb l'adreça|El nombre de la web coincide con la dirección", n: 1 },
        { t: "Té candau (pot ser de fiar o no: cal mirar més pistes)|Tiene candado (puede ser de fiar o no: hay que mirar más pistas)", n: 1 }
      ] },
    { id: 'p2', t: "Fitxa del detectiu/a: llegeix l'adreça|Ficha del detective: lee la dirección", k: 'fitxa',
      intro: "Per a cada adreça inventada, escriu quina és la web de debò. Pista: busca la primera barra després de https i llegeix cap enrere.|Para cada dirección inventada, escribe cuál es la web de verdad. Pista: busca la primera barra después de https y lee hacia atrás.",
      items: [
        { q: "https://www.biblioteca-del-barri.cat/activitats|https://www.biblioteca-del-barri.cat/activitats", sol: "biblioteca-del-barri.cat (de fiar pel que fa a l'adreça)|biblioteca-del-barri.cat (de fiar en cuanto a la dirección)" },
        { q: "https://biblioteca-del-barri.cat.regals-ara.win/entra|https://biblioteca-del-barri.cat.regals-ara.win/entra", sol: "regals-ara.win (sospitosa: imita la biblioteca)|regals-ara.win (sospechosa: imita la biblioteca)" },
        { q: "http://www.consoles-0fertes.xyz/super-preu|http://www.consoles-0fertes.xyz/super-preu", sol: "consoles-0fertes.xyz (sospitosa: un zero en lloc de la o i sense candau)|consoles-0fertes.xyz (sospechosa: un cero en lugar de la o y sin candado)" },
        { q: "https://correu-escola.cat/login|https://correu-escola.cat/login", sol: "correu-escola.cat|correu-escola.cat" },
        { q: "Dibuixa una adreça inventada que imiti correu-escola.cat i explica com la detectaries.|Dibuja una dirección inventada que imite correu-escola.cat y explica cómo la detectarías.", sol: "Per exemple: correu-escola.cat.entra-ara.top/login. La web de debò és entra-ara.top.|Por ejemplo: correu-escola.cat.entra-ara.top/login. La web de verdad es entra-ara.top." }
      ] }
  ]
},

/* ===================== w7-4 · Projecte: la guia de Lleida ===================== */
'w7-4': {
  obj: [
    "L'alumne/a planifica una web amb un esbós de la versió mòbil i de la d'ordinador abans de programar-la.|El alumno/a planifica una web con un boceto de la versión móvil y de la de ordenador antes de programarla.",
    "L'alumne/a organitza la pàgina amb header, nav, main, section i footer i fa un menú amb enllaços que salten a seccions.|El alumno/a organiza la página con header, nav, main, section y footer y hace un menú con enlaces que saltan a secciones.",
    "L'alumne/a construeix una graella de targetes que passa de diverses columnes a una al mòbil, amb imatges flexibles i efectes :hover.|El alumno/a construye una rejilla de tarjetas que pasa de varias columnas a una en el móvil, con imágenes flexibles y efectos :hover.",
    "L'alumne/a publica a l'app una guia de Lleida completa amb informació certa i la revisa amb la llista del bon dissenyador/a.|El alumno/a publica en la app una guía de Lleida completa con información cierta y la revisa con la lista del buen diseñador/a."
  ],
  comp: [
    "Competència digital: creació de continguts digitals (projecte web adaptable complet)|Competencia digital: creación de contenidos digitales (proyecto web adaptable completo)",
    "Pensament computacional: descomposició d'un projecte en parts i planificació|Pensamiento computacional: descomposición de un proyecto en partes y planificación",
    "Coneixement de l'entorn: llocs i trets característics de Lleida|Conocimiento del entorno: lugares y rasgos característicos de Lleida",
    "Comunicació: escriure textos breus, clars i verídics per a un públic concret|Comunicación: escribir textos breves, claros y verídicos para un público concreto"
  ],
  vocab: [
    ["Esbós (wireframe)|Boceto (wireframe)", "Dibuix de caixes que planifica on va cada part de la pàgina.|Dibujo de cajas que planifica dónde va cada parte de la página."],
    ["Etiquetes semàntiques|Etiquetas semánticas", "header, nav, main, section i footer: caixes amb un nom que explica què contenen.|header, nav, main, section y footer: cajas con un nombre que explica qué contienen."],
    ["Àncora (#id)|Ancla (#id)", "Enllaç que salta a l'element amb aquell id dins la mateixa pàgina.|Enlace que salta al elemento con ese id dentro de la misma página."],
    ["Graella (grid)|Rejilla (grid)", "Disposició en columnes; 1fr vol dir una part de l'espai.|Disposición en columnas; 1fr significa una parte del espacio."],
    ["Imatge de fons|Imagen de fondo", "background-image posa una imatge darrere del contingut d'una caixa.|background-image pone una imagen detrás del contenido de una caja."]
  ],
  mat: {
    aula: [
      "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la guia de Lleida»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la guía de Lleida»",
      "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
      "Fulls (un apaïsat i una tira estreta per parella), llapis i retoladors vermells|Hojas (una apaisada y una tira estrecha por pareja), lápices y rotuladores rojos",
      "Si n'hi ha, un mapa de Lleida o un fulletó turístic per inspirar-se|Si hay, un mapa de Lleida o un folleto turístico para inspirarse"
    ],
    imprimir: ["Fitxa: l'esbós de la guia|Ficha: el boceto de la guía", "Targetes de llocs de Lleida|Tarjetas de lugares de Lleida"],
    prep: [
      "Imprimir una fitxa d'esbós per parella i un lot de targetes de llocs per grup.|Imprimir una ficha de boceto por pareja y un lote de tarjetas de lugares por grupo.",
      "Revisar que els textos que proposen els alumnes siguin certs: millor frases generals que dates o xifres dubtoses.|Revisar que los textos que proponen los alumnos sean ciertos: mejor frases generales que fechas o cifras dudosas.",
      "És la sessió de projecte: pots dedicar més temps al «Crea» i fer els reptes com a guia, sense obligar a acabar-los tots.|Es la sesión de proyecto: puedes dedicar más tiempo al «Crea» y hacer los retos como guía, sin obligar a terminarlos todos."
    ]
  },
  plan: [
    { min: 4, t: "Benvinguda: un encàrrec de debò|Bienvenida: un encargo de verdad", fase: 'inici',
      fa: "Presenta l'encàrrec: una guia de Lleida per a nois i noies que vénen d'excursió i la miraran al mòbil. Pregunta què els ensenyarien i apunta els llocs a la pissarra. Repassa el @media i els efectes de les sessions anteriors.|Presenta el encargo: una guía de Lleida para chicos y chicas que vienen de excursión y la mirarán en el móvil. Pregunta qué les enseñarían y apunta los lugares en la pizarra. Repasa el @media y los efectos de las sesiones anteriores.",
      diu: ["Si un amic d'una altra ciutat vingués a Lleida, on el portaríeu?|Si un amigo de otra ciudad viniera a Lleida, ¿adónde lo llevaríais?",
        "Avui fem el projecte gran de la unitat: tot el que sabeu en una sola web.|Hoy hacemos el proyecto grande de la unidad: todo lo que sabéis en una sola web."],
      slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
    { min: 8, t: "Com es construeix una guia|Cómo se construye una guía", fase: 'teoria',
      fa: "Explica l'esbós com a primer pas, les etiquetes semàntiques, el menú amb àncores, la graella de targetes i la portada amb imatge de fons. Tanca amb la llista del bon dissenyador/a, que faran servir per revisar el projecte.|Explica el boceto como primer paso, las etiquetas semánticas, el menú con anclas, la rejilla de tarjetas y la portada con imagen de fondo. Cierra con la lista del buen diseñador/a, que usarán para revisar el proyecto.",
      diu: ["Abans d'escriure codi, dibuixem. Què canvia entre el mòbil i l'ordinador?|Antes de escribir código, dibujamos. ¿Qué cambia entre el móvil y el ordenador?",
        "Un enllaç amb # no surt de la pàgina: salta a un id.|Un enlace con # no sale de la página: salta a un id.",
        "Una guia ha de dir coses certes: si dubteu d'una dada, no la poseu.|Una guía tiene que decir cosas ciertas: si dudáis de un dato, no lo pongáis."],
      slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
    { min: 7, t: "L'esbós de la guia|El boceto de la guía", fase: 'desconnectat',
      fa: "En parelles, trien quatre llocs (poden fer servir les targetes de llocs) i dibuixen l'esbós del mòbil i el de l'ordinador a la fitxa. Marquen amb fletxes vermelles què canvia: cada fletxa serà una regla del @media.|Por parejas, eligen cuatro lugares (pueden usar las tarjetas de lugares) y dibujan el boceto del móvil y el del ordenador en la ficha. Marcan con flechas rojas qué cambia: cada flecha será una regla del @media.",
      diu: ["Caixes i fletxes, res de dibuixos detallats.|Cajas y flechas, nada de dibujos detallados.",
        "Quantes fletxes vermelles teniu? Aquestes són les vostres regles del mòbil.|¿Cuántas flechas rojas tenéis? Esas son vuestras reglas del móvil."],
      slides: ['s10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
    { min: 8, t: "A l'ordinador: descobreix i explora|En el ordenador: descubre y explora", fase: 'ordinador',
      fa: "Cada alumne/a fa la part inicial de la sessió i explora la guia acabada a la vista de mòbil i d'ordinador. Feu la pausa activa tots junts.|Cada alumno/a hace la parte inicial de la sesión y explora la guía terminada en la vista de móvil y de ordenador. Haced la pausa activa todos juntos.",
      diu: ["A la guia acabada, quina regla fa que les targetes passin a una columna?|En la guía terminada, ¿qué regla hace que las tarjetas pasen a una columna?",
        "Copieu idees, però feu-vos la guia vostra.|Copiad ideas, pero haceos la guía vuestra."],
      slides: ['s11'], app: "Recorda, Missió (dues històries), Descobreix, Mans a l'obra (ja fet), la predicció de la graella, l'error del @media, «Explora una guia acabada» i la pausa «Passeig per Lleida».|Recuerda, Misión (dos historias), Descubre, Manos a la obra (ya hecho), la predicción de la rejilla, el error del @media, «Explora una guía terminada» y la pausa «Paseo por Lleida».", org: "Individual|Individual" },
    { min: 12, t: "Reptes: les peces de la guia|Retos: las piezas de la guía", fase: 'ordinador',
      fa: "Els quatre reptes són les peces del projecte: capçalera i menú, graella de llocs, targetes trencades i peu amb botó. Deixa'ls avançar i, als 12 minuts, passa al projecte encara que no els hagin acabat: el que han après els servirà igual.|Los cuatro retos son las piezas del proyecto: cabecera y menú, rejilla de lugares, tarjetas rotas y pie con botón. Déjalos avanzar y, a los 12 minutos, pasa al proyecto aunque no los hayan terminado: lo que han aprendido les servirá igual.",
      diu: ["Cada repte és una peça del vostre projecte: fixeu-vos en el codi que funciona.|Cada reto es una pieza de vuestro proyecto: fijaos en el código que funciona.",
        "La portada amb la Seu Vella de fons és el repte extra.|La portada con la Seu Vella de fondo es el reto extra."],
      slides: ['s12', 's13'], app: "Els quatre reptes (capçalera i menú, graella de llocs, targetes trencades, peu amb botó) i el repte extra «La portada».|Los cuatro retos (cabecera y menú, rejilla de lugares, tarjetas rotas, pie con botón) y el reto extra «La portada».", org: "Individual|Individual" },
    { min: 18, t: "Projecte: la guia de Lleida|Proyecto: la guía de Lleida", fase: 'crea',
      fa: "Cada alumne/a construeix la seva guia seguint l'esbós. Projecta la llista de criteris i passeja per l'aula. Als últims minuts, prova creuada: en parelles, cadascú revisa la guia de l'altre a la vista de mòbil amb la llista del bon dissenyador/a i li diu una cosa que funciona i una que milloraria.|Cada alumno/a construye su guía siguiendo el boceto. Proyecta la lista de criterios y pasea por el aula. En los últimos minutos, prueba cruzada: por parejas, cada uno revisa la guía del otro en la vista de móvil con la lista del buen diseñador/a y le dice una cosa que funciona y una que mejoraría.",
      diu: ["Seguiu el vostre esbós: primer l'estructura, després els colors.|Seguid vuestro boceto: primero la estructura, después los colores.",
        "Cada targeta, amb imatge, alt, títol i una frase certa.|Cada tarjeta, con imagen, alt, título y una frase cierta.",
        "A la prova creuada: una cosa que funciona i una que milloraríeu, amb respecte.|En la prueba cruzada: una cosa que funciona y una que mejoraríais, con respeto."],
      slides: ['s14', 's15'], app: "Pas «Crea»: La guia de Lleida (projecte gran, es desa al portafoli).|Paso «Crea»: La guía de Lleida (proyecto grande, se guarda en el portafolio).", org: "Individual i després per parelles|Individual y después por parejas" },
    { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
      fa: "Celebra els projectes i, si hi ha temps, projecta'n un parell (amb permís dels autors). Repassa les idees de la unitat i fes les preguntes del tiquet.|Celebra los proyectos y, si hay tiempo, proyecta un par (con permiso de los autores). Repasa las ideas de la unidad y haz las preguntas del ticket.",
      diu: ["Què és el que més us ha costat de la guia? I el que més us agrada?|¿Qué es lo que más os ha costado de la guía? ¿Y lo que más os gusta?",
        "Heu acabat la unitat Per al mòbil: ara les vostres webs funcionen a totes les pantalles.|Habéis terminado la unidad Para el móvil: ahora vuestras webs funcionan en todas las pantallas."],
      slides: ['s16', 's17'], app: "«Tancament»: dues preguntes i com m'he sentit. Apareix la insignia de la unitat.|«Cierre»: dos preguntas y cómo me he sentido. Aparece la insignia de la unidad.", org: "Tot el grup|Todo el grupo" }
  ],
  errors: [
    ["Escriu href=\"llocs\" sense coixinet, o l'id no coincideix amb l'enllaç.|Escribe href=\"llocs\" sin almohadilla, o el id no coincide con el enlace.",
      "Que posi l'enllaç i la secció un al costat de l'altre i comprovi lletra a lletra: #llocs a l'enllaç, llocs a l'id.|Que ponga el enlace y la sección uno al lado del otro y compruebe letra a letra: #llocs en el enlace, llocs en el id."],
    ["Copia una targeta i se li queda un div sense tancar.|Copia una tarjeta y se le queda un div sin cerrar.",
      "Que faci servir el missatge del corrector i el sagnat: cada div lloc ha de començar i acabar a la mateixa columna.|Que use el mensaje del corrector y la sangría: cada div lloc tiene que empezar y terminar en la misma columna."],
    ["Escriu dates, xifres o fets que no són segurs.|Escribe fechas, cifras o hechos que no son seguros.",
      "Pregunta-li d'on ho ha tret. Si no n'està segur/a, proposa una frase general i certa (per exemple, que la Seu Vella és dalt d'un turó).|Pregúntale de dónde lo ha sacado. Si no está seguro/a, propón una frase general y cierta (por ejemplo, que la Seu Vella está en lo alto de una colina)."],
    ["Passa tota l'estona amb els colors i no arriba a fer la graella ni el @media.|Pasa todo el rato con los colores y no llega a hacer la rejilla ni el @media.",
      "Recorda-li l'ordre: primer l'estructura i els criteris, després la decoració. Ensenya-li la llista de criteris de l'app.|Recuérdale el orden: primero la estructura y los criterios, después la decoración. Enséñale la lista de criterios de la app."],
    ["La guia es veu bé a l'ordinador però no l'ha provada al mòbil.|La guía se ve bien en el ordenador pero no la ha probado en el móvil.",
      "Que canviï a la vista de mòbil i faci la llista del bon dissenyador/a punt per punt.|Que cambie a la vista de móvil y haga la lista del buen diseñador/a punto por punto."]
  ],
  diff: {
    mes: "Afegir la portada amb imatge de fons, una segona secció amb un test desplegable (details) sobre Lleida i un @media per a tauleta amb dues columnes.|Añadir la portada con imagen de fondo, una segunda sección con un test desplegable (details) sobre Lleida y un @media para tableta con dos columnas.",
    menys: "Partir del codi del repte 2 (la graella ja feta) i afegir-hi el menú i el peu. Reduir a tres llocs i una sola secció extra.|Partir del código del reto 2 (la rejilla ya hecha) y añadirle el menú y el pie. Reducir a tres lugares y una sola sección extra."
  },
  aval: {
    ticket: ["Què fa un enllaç amb href=\"#menjar\"?|¿Qué hace un enlace con href=\"#menjar\"?",
      "Digues dues coses que has comprovat perquè la teva guia funcioni al mòbil.|Di dos cosas que has comprobado para que tu guía funcione en el móvil."],
    rubric: [
      ["Planificació|Planificación", "Fa l'esbós de les dues versions i el segueix al projecte.|Hace el boceto de las dos versiones y lo sigue en el proyecto.", "Fa l'esbós, però el projecte no hi té gaire relació.|Hace el boceto, pero el proyecto no tiene mucha relación con él."],
      ["Estructura i menú|Estructura y menú", "Fa servir header, nav, main, section i footer, i els enllaços del menú salten a les seccions.|Usa header, nav, main, section y footer, y los enlaces del menú saltan a las secciones.", "Hi ha estructura, però algun enllaç del menú no salta o falten seccions.|Hay estructura, pero algún enlace del menú no salta o faltan secciones."],
      ["Disseny adaptable i efectes|Diseño adaptable y efectos", "La graella passa a una columna al mòbil, les imatges no surten i hi ha efectes :hover suaus.|La rejilla pasa a una columna en el móvil, las imágenes no se salen y hay efectos :hover suaves.", "S'adapta parcialment o li falten els efectes.|Se adapta parcialmente o le faltan los efectos."],
      ["Contingut|Contenido", "Quatre llocs o més amb imatge, alt i textos clars i certs.|Cuatro lugares o más con imagen, alt y textos claros y ciertos.", "Menys llocs, textos molt curts o alguna dada dubtosa.|Menos lugares, textos muy cortos o algún dato dudoso."]
    ]
  },
  casa: "A casa, ensenyeu la guia de Lleida a la família des del mòbil. Podeu afegir-hi junts un lloc que us agradi a tots i comprovar que la informació és certa.|En casa, enseñad la guía de Lleida a la familia desde el móvil. Podéis añadir juntos un lugar que os guste a todos y comprobar que la información es cierta.",
  slides: [
    { id: 's1', k: 'portada', t: "Projecte: la guia de Lleida|Proyecto: la guía de Lleida", x: "Una web per a qui visita Lleida i la consulta al mòbil mentre passeja.|Una web para quien visita Lleida y la consulta en el móvil mientras pasea.",
      nota: "Presenta el projecte com un encàrrec real: algú ha de poder fer servir la guia.|Presenta el proyecto como un encargo real: alguien tiene que poder usar la guía." },
    { id: 's2', k: 'pregunta', t: "Què ensenyaríeu de Lleida?|¿Qué enseñaríais de Lleida?", x: "Si un amic d'una altra ciutat vingués un dia, on el portaríeu?|Si un amigo de otra ciudad viniera un día, ¿adónde lo llevaríais?",
      nota: "Apunta els llocs a la pissarra. Si surten dades dubtoses, aprofita per parlar de la importància de dir coses certes.|Apunta los lugares en la pizarra. Si salen datos dudosos, aprovecha para hablar de la importancia de decir cosas ciertas." },
    { id: 's3', k: 'repas', t: "La unitat en tres idees|La unidad en tres ideas", punts: ["Viewport, mides flexibles i @media|Viewport, medidas flexibles y @media", "Botons amb :hover, transition i 44 píxels|Botones con :hover, transition y 44 píxeles", "Webs de fiar i webs trampa|Webs de fiar y webs trampa"],
      nota: "Avui ho farem servir tot alhora en un sol projecte.|Hoy lo usaremos todo a la vez en un solo proyecto." },
    { id: 's4', k: 'anim', t: "Primer, l'esbós|Primero, el boceto", anim: 'wplan', x: "Caixes i fletxes: la versió mòbil i la d'ordinador.|Cajas y flechas: la versión móvil y la de ordenador.",
      nota: "Explica que els professionals també comencen dibuixant: és més ràpid canviar un dibuix que el codi.|Explica que los profesionales también empiezan dibujando: es más rápido cambiar un dibujo que el código." },
    { id: 's5', k: 'concepte', t: "Caixes amb nom|Cajas con nombre", punts: ["header: capçalera i menú|header: cabecera y menú", "main i section: el contingut|main y section: el contenido", "footer: el peu|footer: el pie"],
      code: '<header>…</header>\n<main>\n  <section id="llocs">…</section>\n  <section id="saber">…</section>\n</main>\n<footer>…</footer>',
      nota: "Funcionen com un div, però el nom ajuda qui llegeix el codi i els lectors de pantalla.|Funcionan como un div, pero el nombre ayuda a quien lee el código y a los lectores de pantalla." },
    { id: 's6', k: 'concepte', t: "Un menú que salta|Un menú que salta", x: "Si el href comença per #, salta a l'element que té aquell id.|Si el href empieza por #, salta al elemento que tiene ese id.",
      code: '<nav>\n  <a href="#llocs">Llocs</a>\n  <a href="#saber">Coses a saber</a>\n</nav>\n<section id="llocs">…</section>',
      nota: "Fes notar que l'id va sense coixinet i l'enllaç amb coixinet.|Haz notar que el id va sin almohadilla y el enlace con almohadilla." },
    { id: 's7', k: 'concepte', t: "La graella de targetes|La rejilla de tarjetas", code: '.llocs {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 600px) {\n  .llocs {\n    grid-template-columns: 1fr;\n  }\n}',
      nota: "Relaciona-ho amb les fletxes vermelles de l'esbós: aquesta és la regla que canvia.|Relaciónalo con las flechas rojas del boceto: esta es la regla que cambia." },
    { id: 's8', k: 'concepte', t: "Una portada amb foto de fons|Una portada con foto de fondo", x: "background-size cover fa que la imatge ompli tota la caixa.|background-size cover hace que la imagen llene toda la caja.",
      code: ".hero {\n  background-image: url('img/seu-vella.svg');\n  background-size: cover;\n}\n.hero h2 {\n  color: white;\n  text-shadow: 2px 2px 4px black;\n}",
      nota: "Ho trobaran al repte extra. L'ombra del text fa que es llegeixi sobre la imatge.|Lo encontrarán en el reto extra. La sombra del texto hace que se lea sobre la imagen." },
    { id: 's9', k: 'anim', t: "La llista del bon dissenyador/a|La lista del buen diseñador/a", anim: 'wresp', punts: ["Viewport al head|Viewport en el head", "Imatges amb max-width 100% i alt|Imágenes con max-width 100% y alt", "Graella que passa a una columna|Rejilla que pasa a una columna", "Botons grans i hover suaus|Botones grandes y hover suaves", "Provada al mòbil i a l'ordinador|Probada en el móvil y en el ordenador"],
      nota: "Aquesta llista és la que faran servir a la prova creuada del final.|Esta lista es la que usarán en la prueba cruzada del final." },
    { id: 's10', k: 'activitat', t: "L'esbós de la guia|El boceto de la guía", timer: 7, punts: ["Trieu quatre llocs de Lleida.|Elegid cuatro lugares de Lleida.", "Esbós del mòbil en una tira estreta.|Boceto del móvil en una tira estrecha.", "Esbós de l'ordinador en un full apaïsat.|Boceto del ordenador en una hoja apaisada.", "Fletxes vermelles: què canvia.|Flechas rojas: qué cambia."],
      nota: "Que guardin l'esbós a la vora de l'ordinador: el necessitaran al projecte.|Que guarden el boceto cerca del ordenador: lo necesitarán en el proyecto." },
    { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 8, punts: ["Obre la sessió del projecte.|Abre la sesión del proyecto.", "Fes fins a la pausa activa.|Haz hasta la pausa activa.", "Explora la guia acabada al mòbil i a l'ordinador.|Explora la guía terminada en el móvil y en el ordenador."],
      nota: "Al pas «Mans a l'obra», que marquin que ja l'han fet.|En el paso «Manos a la obra», que marquen que ya lo han hecho." },
    { id: 's12', k: 'repte', t: "Reptes: les peces de la guia|Retos: las piezas de la guía", timer: 12, punts: ["1. Capçalera i menú|1. Cabecera y menú", "2. La graella de llocs|2. La rejilla de lugares", "3. Targetes trencades|3. Tarjetas rotas", "4. El peu amb botó|4. El pie con botón"],
      code: '.menu a:hover {\n  background: #B83A30;\n}\n.lloc:hover {\n  transform: translateY(-6px);\n}',
      nota: "Avisa als 12 minuts que passem al projecte, encara que no estiguin tots acabats.|Avisa a los 12 minutos de que pasamos al proyecto, aunque no estén todos terminados." },
    { id: 's13', k: 'repte', t: "Repte extra: la portada|Reto extra: la portada", x: "La Seu Vella de fons, títol amb ombra, gran a l'ordinador i més petit al mòbil.|La Seu Vella de fondo, título con sombra, grande en el ordenador y más pequeño en el móvil.",
      nota: "Qui el faci, el pot afegir a la seva guia al projecte.|Quien lo haga, lo puede añadir a su guía en el proyecto." },
    { id: 's14', k: 'activitat', t: "Projecte: la guia de Lleida|Proyecto: la guía de Lleida", timer: 15, punts: ["Viewport i menú amb 3 enllaços o més|Viewport y menú con 3 enlaces o más", "Dues seccions i quatre llocs amb imatge i alt|Dos secciones y cuatro lugares con imagen y alt", "Graella a l'ordinador, una columna al mòbil|Rejilla en el ordenador, una columna en el móvil", "Hover al menú i a les targetes, i un peu|Hover en el menú y en las tarjetas, y un pie"],
      nota: "Deixa projectats els criteris. Recorda: només informació certa.|Deja proyectados los criterios. Recuerda: solo información cierta." },
    { id: 's15', k: 'activitat', t: "Prova creuada|Prueba cruzada", timer: 3, punts: ["Mira la guia del company/a a la vista de mòbil.|Mira la guía del compañero/a en la vista de móvil.", "Repassa la llista del bon dissenyador/a.|Repasa la lista del buen diseñador/a.", "Digues una cosa que funciona i una que milloraries.|Di una cosa que funciona y una que mejorarías."],
      nota: "Modela una crítica amable: comença sempre per una cosa que funciona.|Modela una crítica amable: empieza siempre por una cosa que funciona." },
    { id: 's16', k: 'resum', t: "Què hem après a la unitat|Qué hemos aprendido en la unidad", punts: ["Planificar amb un esbós mòbil i ordinador.|Planificar con un boceto móvil y ordenador.", "Estructura semàntica i menú amb àncores.|Estructura semántica y menú con anclas.", "Graella adaptable, imatges flexibles i botons grans.|Rejilla adaptable, imágenes flexibles y botones grandes."],
      nota: "Felicita el grup: han fet una web completa i adaptable.|Felicita al grupo: han hecho una web completa y adaptable." },
    { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què fa href=\"#menjar\"?|¿Qué hace href=\"#menjar\"?", "Dues comprovacions per al mòbil.|Dos comprobaciones para el móvil."],
      nota: "Anota qui no ha pogut acabar el projecte per donar-li temps a la sessió següent o a casa.|Anota quién no ha podido terminar el proyecto para darle tiempo en la sesión siguiente o en casa." }
  ],
  print: [
    { id: 'p1', t: "Fitxa: l'esbós de la guia|Ficha: el boceto de la guía", k: 'fitxa',
      intro: "Completeu la fitxa en parella abans d'obrir l'ordinador.|Completad la ficha por parejas antes de abrir el ordenador.",
      items: [
        { q: "Escriviu els quatre llocs de Lleida que sortiran a la guia i una frase certa de cadascun.|Escribid los cuatro lugares de Lleida que saldrán en la guía y una frase cierta de cada uno.", sol: "Per exemple: la Seu Vella (dalt del turó), el Pont Vell (creua el Segre), el riu Segre (travessa la ciutat), terra de fruita (camps de fruiters al voltant).|Por ejemplo: la Seu Vella (en lo alto de la colina), el Pont Vell (cruza el Segre), el río Segre (atraviesa la ciudad), tierra de fruta (campos de frutales alrededor)." },
        { q: "Dibuixeu l'esbós del mòbil: capçalera, menú, targetes i peu.|Dibujad el boceto del móvil: cabecera, menú, tarjetas y pie.", sol: "Tot en una columna: capçalera amb menú, targetes l'una sota l'altra, peu al final.|Todo en una columna: cabecera con menú, tarjetas una debajo de la otra, pie al final." },
        { q: "Dibuixeu l'esbós de l'ordinador amb les mateixes caixes.|Dibujad el boceto del ordenador con las mismas cajas.", sol: "Capçalera a dalt, targetes en tres o quatre columnes, peu a baix.|Cabecera arriba, tarjetas en tres o cuatro columnas, pie abajo." },
        { q: "Escriviu els id de les seccions i els enllaços del menú que hi saltaran.|Escribid los id de las secciones y los enlaces del menú que saltarán a ellas.", sol: "Per exemple: id llocs i enllaç #llocs; id saber i enllaç #saber; id contacte i enllaç #contacte.|Por ejemplo: id llocs y enlace #llocs; id saber y enlace #saber; id contacte y enlace #contacte." },
        { q: "Quines regles anirien dins el @media del mòbil? Mireu les fletxes vermelles.|¿Qué reglas irían dentro del @media del móvil? Mirad las flechas rojas.", sol: ".llocs { grid-template-columns: 1fr; } i, si cal, lletra més gran al menú.|.llocs { grid-template-columns: 1fr; } y, si hace falta, letra más grande en el menú." }
      ] },
    { id: 'p2', t: "Targetes de llocs de Lleida|Tarjetas de lugares de Lleida", k: 'targetes',
      intro: "Un lot per grup per triar els llocs de la guia. Totes les frases són certes; podeu afegir-hi llocs propis.|Un lote por grupo para elegir los lugares de la guía. Todas las frases son ciertas; podéis añadir lugares propios.",
      items: [
        { t: "La Seu Vella: la catedral antiga, dalt del turó|La Seu Vella: la catedral antigua, en lo alto de la colina", n: 1 },
        { t: "El riu Segre: travessa la ciutat|El río Segre: atraviesa la ciudad", n: 1 },
        { t: "El Pont Vell: creua el Segre pel centre|El Pont Vell: cruza el Segre por el centro", n: 1 },
        { t: "El Carrer Major: un carrer comercial per passejar|La Calle Mayor: una calle comercial para pasear", n: 1 },
        { t: "La Mitjana: un parc natural a la vora del riu|La Mitjana: un parque natural a la orilla del río", n: 1 },
        { t: "El castell de Gardeny: dalt d'un altre turó|El castillo de Gardeny: en lo alto de otra colina", n: 1 },
        { t: "Terra de fruita: camps de fruiters al voltant de la ciutat|Tierra de fruta: campos de frutales alrededor de la ciudad", n: 1 },
        { t: "Els caragols: un dels plats més típics|Los caracoles: uno de los platos más típicos", n: 1 }
      ] }
  ]
}

});

/* ---------- Guies del professorat · Tech Web, unitat 8 «La meva web» (projecte final) ---------- */
Object.assign(TGUIDE, {

  /* ===================== w8-1 · Planificar ===================== */
  'w8-1': {
    obj: [
      "L'alumne/a defineix el propòsit i el públic de la seva web en una frase i en tria el tema.|El alumno/a define el propósito y el público de su web en una frase y elige el tema.",
      "L'alumne/a fa l'inventari de continguts i un esbós (wireframe) en paper amb les parts de la pàgina.|El alumno/a hace el inventario de contenidos y un boceto (wireframe) en papel con las partes de la página.",
      "L'alumne/a fa servir les etiquetes semàntiques header, nav, main, section i footer en el lloc que toca.|El alumno/a usa las etiquetas semánticas header, nav, main, section y footer en el lugar que toca.",
      "L'alumne/a crea un menú amb enllaços que salten a seccions amb id i comença l'esquelet de la seva web.|El alumno/a crea un menú con enlaces que saltan a secciones con id y empieza el esqueleto de su web."
    ],
    comp: [
      "Competència digital: crear continguts digitals planificant-ne l'estructura abans de produir-los|Competencia digital: crear contenidos digitales planificando su estructura antes de producirlos",
      "Pensament computacional: descomposició d'un projecte en parts i fases|Pensamiento computacional: descomposición de un proyecto en partes y fases",
      "Comunicació: adaptar un missatge al seu propòsit i al seu públic|Comunicación: adaptar un mensaje a su propósito y a su público",
      "Aprendre a aprendre: planificar un projecte llarg i seguir-lo durant diverses sessions|Aprender a aprender: planificar un proyecto largo y seguirlo durante varias sesiones"
    ],
    vocab: [
      ["Propòsit|Propósito", "Per a què serveix la web: informar, ensenyar, convidar a fer alguna cosa.|Para qué sirve la web: informar, enseñar, invitar a hacer algo."],
      ["Públic|Público", "Les persones que visitaran la web.|Las personas que visitarán la web."],
      ["Inventari de continguts|Inventario de contenidos", "La llista de textos, imatges i enllaços que tindrà la web.|La lista de textos, imágenes y enlaces que tendrá la web."],
      ["Wireframe (esbós)|Wireframe (boceto)", "Dibuix ràpid amb caixes que mostra on va cada part, sense colors.|Dibujo rápido con cajas que muestra dónde va cada parte, sin colores."],
      ["Etiqueta semàntica|Etiqueta semántica", "Etiqueta que diu què és una part: capçalera, menú, secció, peu.|Etiqueta que dice qué es una parte: cabecera, menú, sección, pie."],
      ["Ancoratge (id)|Ancla (id)", "Nom únic d'una secció al qual pot saltar un enllaç que comença per #.|Nombre único de una sección al que puede saltar un enlace que empieza por #."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Planificar»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Planificar»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Fulls A4 en blanc, llapis, gomes i regles|Hojas A4 en blanco, lápices, gomas y reglas",
        "Una carpeta o sobre per alumne/a per guardar l'esbós durant les quatre sessions|Una carpeta o sobre por alumno/a para guardar el boceto durante las cuatro sesiones"
      ],
      imprimir: ["Fitxa de planificació del projecte|Ficha de planificación del proyecto", "Targetes d'etiquetes semàntiques|Tarjetas de etiquetas semánticas"],
      prep: [
        "Imprimir una fitxa de planificació per alumne/a i un paquet de targetes d'etiquetes per parella.|Imprimir una ficha de planificación por alumno/a y un paquete de tarjetas de etiquetas por pareja.",
        "Pensar dos o tres exemples de temes propers al grup (un club del barri, una afició, un negoci inventat) per desencallar qui no sap què triar.|Pensar dos o tres ejemplos de temas cercanos al grupo (un club del barrio, una afición, un negocio inventado) para desatascar a quien no sabe qué elegir.",
        "Recordar que el projecte es desa sol d'una sessió a l'altra: cada alumne/a ha d'entrar amb el seu perfil.|Recordar que el proyecto se guarda solo de una sesión a otra: cada alumno/a tiene que entrar con su perfil.",
        "Fer un esbós propi en paper per ensenyar-lo com a exemple a la diapositiva de l'activitat.|Hacer un boceto propio en papel para enseñarlo como ejemplo en la diapositiva de la actividad."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: arrenca el projecte final|Bienvenida: arranca el proyecto final", fase: 'inici',
        fa: "Presenta el repte de la unitat: en quatre sessions cada alumne/a farà la seva pròpia web, de la idea fins a la presentació. Pregunta quina web els agradaria fer i apunta tres o quatre idees a la pissarra. Ensenya el calendari de les quatre sessions.|Presenta el reto de la unidad: en cuatro sesiones cada alumno/a hará su propia web, de la idea hasta la presentación. Pregunta qué web les gustaría hacer y apunta tres o cuatro ideas en la pizarra. Enseña el calendario de las cuatro sesiones.",
        diu: ["Si poguéssiu fer qualsevol web, sobre què seria?|Si pudierais hacer cualquier web, ¿sobre qué sería?",
          "Avui no començarem pel codi: començarem pensant, com fan els equips de debò.|Hoy no empezaremos por el código: empezaremos pensando, como hacen los equipos de verdad."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Planificar com un professional|Planificar como un profesional", fase: 'teoria',
        fa: "Explica les preguntes de partida (per a què i per a qui), com triar un tema i com fer l'inventari de continguts. Mostra què és un wireframe i, amb el codi projectat, les etiquetes semàntiques i els enllaços amb # que salten a una secció amb id. Acaba amb l'organització de fitxers.|Explica las preguntas de partida (para qué y para quién), cómo elegir un tema y cómo hacer el inventario de contenidos. Muestra qué es un wireframe y, con el código proyectado, las etiquetas semánticas y los enlaces con # que saltan a una sección con id. Termina con la organización de archivos.",
        diu: ["Digueu el propòsit de la web de la biblioteca en una sola frase.|Decid el propósito de la web de la biblioteca en una sola frase.",
          "Un div no diu res; un nav diu «aquí hi ha el menú».|Un div no dice nada; un nav dice «aquí está el menú».",
          "L'href porta coixinet i el mateix nom que l'id, lletra per lletra.|El href lleva almohadilla y el mismo nombre que el id, letra por letra."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9', 's10'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "L'esbós de la meva web en paper|El boceto de mi web en papel", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa de planificació (tema, propòsit, públic, inventari) i dibuixa el wireframe. Després, en parelles, s'ensenyen l'esbós sense explicar-lo i col·loquen les targetes d'etiquetes damunt de cada caixa. Guarden el full a la carpeta.|Cada alumno/a rellena la ficha de planificación (tema, propósito, público, inventario) y dibuja el wireframe. Después, por parejas, se enseñan el boceto sin explicarlo y colocan las tarjetas de etiquetas encima de cada caja. Guardan la hoja en la carpeta.",
        diu: ["Res de colors: només caixes, creus per a les imatges i ratlles per al text.|Nada de colores: solo cajas, cruces para las imágenes y rayas para el texto.",
          "El company/a sap dir què és cada caixa sense que li ho expliquis?|¿El compañero/a sabe decir qué es cada caja sin que se lo expliques?",
          "Quina targeta posaríeu damunt del menú? I del peu?|¿Qué tarjeta pondríais encima del menú? ¿Y del pie?"],
        slides: ['s11', 's12'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 12, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança fins a la pausa. Al pas de l'esbós en paper, que toquin «Ho hem fet!». Passeja i para atenció a les dues preguntes de trobar l'error: demana que expliquin per què falla abans de tocar.|Cada alumno/a abre la sesión y avanza hasta la pausa. En el paso del boceto en papel, que toquen «¡Lo hemos hecho!». Pasea y presta atención a las dos preguntas de encontrar el error: pide que expliquen por qué falla antes de tocar.",
        diu: ["Abans de triar, digues on creus que sortirà el peu.|Antes de elegir, di dónde crees que saldrá el pie.",
          "Què li falta a l'enllaç que no salta?|¿Qué le falta al enlace que no salta?"],
        slides: ['s13'], app: "De «La missió» fins a «Investiga»: les dues preguntes de repàs, les dues històries, les targetes de «Descobreix», l'esbós en paper (ja fet), ordenar les fases, les dues preguntes de predir i triar el codi i les dues de trobar l'error.|De «La misión» hasta «Investiga»: las dos preguntas de repaso, las dos historias, las tarjetas de «Descubre», el boceto en papel (ya hecho), ordenar las fases, las dos preguntas de predecir y elegir el código y las dos de encontrar el error.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: l'esquelet del club d'astronomia|Retos: el esqueleto del club de astronomía", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Després cada alumne/a fa els quatre reptes: títols de debò, el menú dins la capçalera, canviar els div per etiquetes semàntiques i crear dues seccions noves. Qui acabi, el repte extra.|Haced la pausa activa juntos. Después cada alumno/a hace los cuatro retos: títulos de verdad, el menú dentro de la cabecera, cambiar los div por etiquetas semánticas y crear dos secciones nuevas. Quien termine, el reto extra.",
        diu: ["Si canvies l'etiqueta d'obrir, recorda canviar també la de tancar.|Si cambias la etiqueta de abrir, recuerda cambiar también la de cerrar.",
          "Prova cada enllaç a la vista prèvia: salta on ha de saltar?|Prueba cada enlace en la vista previa: ¿salta donde tiene que saltar?"],
        slides: ['s14'], app: "«Pausa activa» i els quatre reptes de «Reptes» (més el repte extra, opcional).|«Pausa activa» y los cuatro retos de «Retos» (más el reto extra, opcional).", org: "Individual|Individual" },
      { min: 6, t: "Crea: l'esquelet de la meva web|Crea: el esqueleto de mi web", fase: 'crea',
        fa: "Amb l'esbós al costat de l'ordinador, cada alumne/a escriu l'esquelet de la seva web: títol, menú, tres seccions amb id i títol, i peu. Recorda que no cal acabar: es desa sol i continuarà la setmana vinent.|Con el boceto al lado del ordenador, cada alumno/a escribe el esqueleto de su web: título, menú, tres secciones con id y título, y pie. Recuerda que no hace falta terminar: se guarda solo y continuará la semana que viene.",
        diu: ["Copia l'esbós: cada caixa del paper és una etiqueta del codi.|Copia el boceto: cada caja del papel es una etiqueta del código.",
          "Els id en minúscules i amb guionets, sense espais ni accents.|Los id en minúsculas y con guiones, sin espacios ni acentos."],
        slides: ['s15'], app: "Pas «Crea»: La meva web, l'esquelet.|Paso «Crea»: Mi web, el esqueleto.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet. Recull les carpetes amb els esbossos.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket. Recoge las carpetas con los bocetos.",
        diu: ["Qui em diu el propòsit de la seva web en una frase?|¿Quién me dice el propósito de su web en una frase?",
          "Quina etiqueta fas servir per al menú?|¿Qué etiqueta usas para el menú?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Vol començar directament pels colors i les imatges sense saber què hi posarà.|Quiere empezar directamente por los colores y las imágenes sin saber qué pondrá.",
        "Valida l'entusiasme i pregunta: quins textos tindrà? Que primer faci l'inventari; els colors arribaran la setmana vinent.|Valida el entusiasmo y pregunta: ¿qué textos tendrá? Que primero haga el inventario; los colores llegarán la semana que viene."],
      ["No sap quin tema triar o en canvia cada cinc minuts.|No sabe qué tema elegir o lo cambia cada cinco minutos.",
        "Pregunta-li què fa a la tarda o de què podria parlar deu minuts seguits. Dona-li un límit: tria'n un abans d'acabar la fitxa.|Pregúntale qué hace por la tarde o de qué podría hablar diez minutos seguidos. Dale un límite: que elija uno antes de terminar la ficha."],
      ["L'enllaç del menú no salta: escriu l'href sense coixinet o amb un nom diferent de l'id.|El enlace del menú no salta: escribe el href sin almohadilla o con un nombre diferente del id.",
        "Que posi el dit a l'href i a l'id i els llegeixi lletra a lletra: han de ser idèntics, amb el coixinet només a l'enllaç.|Que ponga el dedo en el href y en el id y los lea letra a letra: tienen que ser idénticos, con la almohadilla solo en el enlace."],
      ["Posa ids amb espais, majúscules o accents.|Pone ids con espacios, mayúsculas o acentos.",
        "Recorda la regla dels noms de fitxer: minúscules, guionets, sense accents. Fes-li reescriure un id com a exemple.|Recuerda la regla de los nombres de archivo: minúsculas, guiones, sin acentos. Hazle reescribir un id como ejemplo."],
      ["Canvia l'etiqueta d'obrir d'un div però no la de tancar i apareix l'ona vermella.|Cambia la etiqueta de abrir de un div pero no la de cerrar y aparece la onda roja.",
        "Que llegeixi l'avís de sota l'editor: diu la línia. Cada etiqueta canviada té dues parelles: la d'obrir i la de tancar.|Que lea el aviso de debajo del editor: dice la línea. Cada etiqueta cambiada tiene dos parejas: la de abrir y la de cerrar."]
    ],
    diff: {
      mes: "Fer dues versions del wireframe (una per a ordinador i una per a mòbil) i, al codi, afegir article dins d'alguna secció i un enllaç «Torna a dalt» al peu. Pensar quines parts de la web podrien créixer més endavant.|Hacer dos versiones del wireframe (una para ordenador y una para móvil) y, en el código, añadir article dentro de alguna sección y un enlace «Vuelve arriba» en el pie. Pensar qué partes de la web podrían crecer más adelante.",
      menys: "Partir d'un tema proposat pel professor/a i d'un esbós amb les caixes ja dibuixades, només per etiquetar. Al codi, començar amb dues seccions en lloc de tres i fer servir els botons d'inserir de l'editor.|Partir de un tema propuesto por el profesor/a y de un boceto con las cajas ya dibujadas, solo para etiquetar. En el código, empezar con dos secciones en lugar de tres y usar los botones de insertar del editor."
    },
    aval: {
      ticket: ["Digues el propòsit i el públic de la teva web en una frase.|Di el propósito y el público de tu web en una frase.",
        "Quina etiqueta és el menú i quina el peu?|¿Qué etiqueta es el menú y cuál el pie?"],
      rubric: [
        ["Planificació|Planificación", "La fitxa té propòsit, públic i un inventari amb textos, imatges i enllaços concrets.|La ficha tiene propósito, público y un inventario con textos, imágenes y enlaces concretos.", "Té tema, però el propòsit o l'inventari són vagues o incomplets.|Tiene tema, pero el propósito o el inventario son vagos o incompletos."],
        ["Wireframe|Wireframe", "L'esbós mostra clarament totes les parts i un company/a les reconeix sense explicacions.|El boceto muestra claramente todas las partes y un compañero/a las reconoce sin explicaciones.", "L'esbós és incomplet o necessita explicacions per entendre's.|El boceto está incompleto o necesita explicaciones para entenderse."],
        ["Etiquetes semàntiques|Etiquetas semánticas", "Fa servir header, nav, main, section i footer al lloc que toca.|Usa header, nav, main, section y footer en el sitio que toca.", "Barreja etiquetes o en deixa alguna com a div.|Mezcla etiquetas o deja alguna como div."],
        ["Menú amb ancoratges|Menú con anclas", "Tots els enllaços del menú salten a una secció amb id.|Todos los enlaces del menú saltan a una sección con id.", "Algun enllaç no funciona per l'href o l'id.|Algún enlace no funciona por el href o el id."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repassar la sessió i ensenyar l'esbós a la família: sabeu dir per a qui és la web i què hi haurà a cada caixa? Si se us acudeix contingut nou, apunteu-lo a l'inventari.|En casa, con el móvil, podéis repasar la sesión y enseñar el boceto a la familia: ¿sabéis decir para quién es la web y qué habrá en cada caja? Si se os ocurre contenido nuevo, apuntadlo en el inventario.",
    slides: [
      { id: 's1', k: 'portada', t: "La meva web · 1. Planificar|Mi web · 1. Planificar", x: "Comença el projecte final: en quatre sessions crearàs la teva pròpia web.|Empieza el proyecto final: en cuatro sesiones crearás tu propia web.",
        nota: "Transmet il·lusió: és el projecte més gran del curs i serà totalment seu.|Transmite ilusión: es el proyecto más grande del curso y será totalmente suyo." },
      { id: 's2', k: 'pregunta', t: "Quina web t'agradaria fer?|¿Qué web te gustaría hacer?", x: "Una afició, un club, un videojoc, el barri, un negoci inventat…|Una afición, un club, un videojuego, el barrio, un negocio inventado…",
        nota: "Apunta les idees a la pissarra sense jutjar-les. Serviran d'inspiració a qui no sap què triar.|Apunta las ideas en la pizarra sin juzgarlas. Servirán de inspiración a quien no sabe qué elegir." },
      { id: 's3', k: 'concepte', t: "El projecte en quatre sessions|El proyecto en cuatro sesiones", punts: ["1. Planificar: idea, inventari i esbós|1. Planificar: idea, inventario y boceto", "2. Construir: contingut i estil|2. Construir: contenido y estilo", "3. Revisar i millorar|3. Revisar y mejorar", "4. Publicar, presentar i diploma|4. Publicar, presentar y diploma"],
        nota: "Remarca que el codi es desa sol i continua d'una sessió a l'altra.|Remarca que el código se guarda solo y continúa de una sesión a otra." },
      { id: 's4', k: 'anim', t: "Per a què i per a qui?|¿Para qué y para quién?", anim: 'wdevice', x: "El propòsit i el públic decideixen els textos, les imatges i els colors.|El propósito y el público deciden los textos, las imágenes y los colores.",
        nota: "Compara una web per a nens de primària i una per a famílies: com canvien els textos?|Compara una web para niños de primaria y una para familias: ¿cómo cambian los textos?" },
      { id: 's5', k: 'concepte', t: "Tria un tema que coneguis bé|Elige un tema que conozcas bien", punts: ["Una afició: dibuix, música, cuina|Una afición: dibujo, música, cocina", "Un club o equip on vas|Un club o equipo al que vas", "El teu videojoc preferit|Tu videojuego preferido", "El teu barri o un negoci inventat|Tu barrio o un negocio inventado"],
        nota: "Desaconsella temes sobre persones reals concretes: millor coses, llocs i activitats.|Desaconseja temas sobre personas reales concretas: mejor cosas, lugares y actividades." },
      { id: 's6', k: 'concepte', t: "L'inventari de continguts|El inventario de contenidos", x: "Primer el contingut, després el disseny.|Primero el contenido, después el diseño.", punts: ["Textos: qui som, horaris, contacte|Textos: quiénes somos, horarios, contacto", "Imatges: quines i on|Imágenes: cuáles y dónde", "Enllaços: a on porten|Enlaces: adónde llevan"],
        nota: "Fes l'inventari d'una web inventada amb tota la classe, en dos minuts.|Haz el inventario de una web inventada con toda la clase, en dos minutos." },
      { id: 's7', k: 'anim', t: "El wireframe: caixes abans que colors|El wireframe: cajas antes que colores", anim: 'wplan', x: "Rectangles per a cada part, una creu per a les imatges, ratlles per al text.|Rectángulos para cada parte, una cruz para las imágenes, rayas para el texto.",
        nota: "Ensenya el teu esbós de paper com a exemple. Insisteix que es fa ràpid i sense colors.|Enseña tu boceto de papel como ejemplo. Insiste en que se hace rápido y sin colores." },
      { id: 's8', k: 'concepte', t: "Etiquetes semàntiques|Etiquetas semánticas", x: "Cada part diu què és. Les entenen els lectors de pantalla, els cercadors i les persones.|Cada parte dice qué es. Las entienden los lectores de pantalla, los buscadores y las personas.",
        code: `<header>\n  <h1>Club Estels</h1>\n  <nav>…</nav>\n</header>\n<main>\n  <section id="activitats">…</section>\n</main>\n<footer>…</footer>`,
        nota: "Assenyala cada etiqueta i pregunta a quina caixa de l'esbós correspon.|Señala cada etiqueta y pregunta a qué caja del boceto corresponde." },
      { id: 's9', k: 'concepte', t: "Un menú que salta a cada secció|Un menú que salta a cada sección", x: "L'href comença per # i porta el mateix nom que l'id de la secció.|El href empieza por # y lleva el mismo nombre que el id de la sección.",
        code: `<nav>\n  <a href="#horaris">Horaris</a>\n</nav>\n<section id="horaris">\n  <h2>Horaris</h2>\n</section>`,
        nota: "Fes notar que el coixinet només va a l'enllaç, no a l'id.|Haz notar que la almohadilla solo va en el enlace, no en el id." },
      { id: 's10', k: 'anim', t: "Cada cosa al seu lloc|Cada cosa en su sitio", anim: 'wfiles', x: "index.html, estil.css i la carpeta img. Noms en minúscules, sense espais ni accents.|index.html, estil.css y la carpeta img. Nombres en minúsculas, sin espacios ni acentos.",
        nota: "Explica que l'app ja els organitza els fitxers, però que en publicar caldrà respectar els noms.|Explica que la app ya les organiza los archivos, pero que al publicar habrá que respetar los nombres." },
      { id: 's11', k: 'activitat', t: "Dibuixa l'esbós de la teva web|Dibuja el boceto de tu web", timer: 12, punts: ["Omple la fitxa: tema, propòsit i públic|Rellena la ficha: tema, propósito y público", "Fes l'inventari de continguts|Haz el inventario de contenidos", "Dibuixa el wireframe amb rectangles|Dibuja el wireframe con rectángulos", "Escriu l'etiqueta i l'id de cada caixa|Escribe la etiqueta y el id de cada caja"],
        nota: "Passeja i ajuda a concretar el propòsit: ha de cabre en una frase.|Pasea y ayuda a concretar el propósito: tiene que caber en una frase." },
      { id: 's12', k: 'activitat', t: "Ensenya-ho sense explicar-ho|Enséñalo sin explicarlo", punts: ["El company/a diu què és cada caixa|El compañero/a dice qué es cada caja", "Col·loqueu les targetes d'etiquetes|Colocad las tarjetas de etiquetas", "Si una caixa no s'entén, afegeix-hi pistes|Si una caja no se entiende, añádele pistas"],
        nota: "Deixa projectada aquesta diapositiva mentre treballen en parelles. Recull els esbossos a la carpeta.|Deja proyectada esta diapositiva mientras trabajan por parejas. Recoge los bocetos en la carpeta." },
      { id: 's13', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Planificar»|Abre la sesión «Planificar»", "Fes fins a «Investiga»|Hazla hasta «Investiga»", "L'esbós en paper: toca «Ho hem fet!»|El boceto en papel: toca «¡Lo hemos hecho!»", "Para a la «Pausa activa»|Para en la «Pausa activa»"],
        nota: "Fixa't en qui respon les preguntes de predir massa ràpid: demana que t'ho expliquin.|Fíjate en quién responde las preguntas de predecir demasiado rápido: pide que te lo expliquen." },
      { id: 's14', k: 'repte', t: "Reptes: l'esquelet del club d'astronomia|Retos: el esqueleto del club de astronomía", timer: 10, punts: ["1. Títols de debò|1. Títulos de verdad", "2. El menú dins la capçalera|2. El menú dentro de la cabecera", "3. Dels div a les etiquetes semàntiques|3. De los div a las etiquetas semánticas", "4. Dues seccions noves amb id|4. Dos secciones nuevas con id"],
        code: `<div class="menu">  →  <nav>\n<div class="peu">   →  <footer>`,
        nota: "Si algú s'encalla al repte 3, que llegeixi la classe de cada div: ja diu quina etiqueta ha de ser.|Si alguien se atasca en el reto 3, que lea la clase de cada div: ya dice qué etiqueta tiene que ser." },
      { id: 's15', k: 'activitat', t: "Crea: l'esquelet de la teva web|Crea: el esqueleto de tu web", timer: 6, x: "Passa l'esbós al codi: títol, menú, tres seccions amb id i peu. Es desa sol.|Pasa el boceto al código: título, menú, tres secciones con id y pie. Se guarda solo.",
        nota: "Tranquil·litza qui no acaba: la setmana vinent continuarà exactament on ho ha deixat.|Tranquiliza a quien no termina: la semana que viene continuará exactamente donde lo ha dejado." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Una web es planifica abans de programar-la.|Una web se planifica antes de programarla.", "El wireframe mostra on va cada part.|El wireframe muestra dónde va cada parte.", "Etiquetes semàntiques i ids per al menú.|Etiquetas semánticas e ids para el menú."],
        nota: "Pregunta qui ha canviat d'idea en fer l'esbós: és normal i bo.|Pregunta quién ha cambiado de idea al hacer el boceto: es normal y bueno." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Propòsit i públic de la teva web en una frase.|Propósito y público de tu web en una frase.", "Quina etiqueta és el menú? I el peu?|¿Qué etiqueta es el menú? ¿Y el pie?"],
        nota: "Anota qui no té encara el tema clar per ajudar-lo al principi de la propera sessió.|Anota quién no tiene todavía el tema claro para ayudarle al principio de la próxima sesión." }
    ],
    print: [
      { id: 'p1', t: "Fitxa de planificació del projecte|Ficha de planificación del proyecto", k: 'fitxa',
        intro: "Una per alumne/a. Es guarda a la carpeta i es fa servir les quatre sessions de la unitat.|Una por alumno/a. Se guarda en la carpeta y se usa las cuatro sesiones de la unidad.",
        items: [
          { q: "Tema de la meva web:|Tema de mi web:", sol: "Exemple: el club de bàsquet del barri.|Ejemplo: el club de baloncesto del barrio." },
          { q: "Propòsit en una frase: «Aquesta web serveix perquè…»|Propósito en una frase: «Esta web sirve para que…»", sol: "Exemple: …més nens i nenes coneguin el club i s'hi apuntin.|Ejemplo: …más niños y niñas conozcan el club y se apunten." },
          { q: "Públic: per a qui és?|Público: ¿para quién es?", sol: "Exemple: famílies del barri amb fills de 10 a 16 anys.|Ejemplo: familias del barrio con hijos de 10 a 16 años." },
          { q: "Inventari: escriu almenys 3 textos, 2 imatges i 1 enllaç.|Inventario: escribe al menos 3 textos, 2 imágenes y 1 enlace.", sol: "Textos: qui som, horaris, contacte. Imatges: pilota, pavelló. Enllaç: inscripcions.|Textos: quiénes somos, horarios, contacto. Imágenes: pelota, pabellón. Enlace: inscripciones." },
          { q: "Dibuixa el wireframe: capçalera, menú, tres seccions i peu. Escriu l'etiqueta i l'id de cada caixa.|Dibuja el wireframe: cabecera, menú, tres secciones y pie. Escribe la etiqueta y el id de cada caja.", sol: "Caixes etiquetades: header, nav, section amb id qui-som, equips, contacte, i footer.|Cajas etiquetadas: header, nav, section con id qui-som, equips, contacte, y footer." }
        ] },
      { id: 'p2', t: "Targetes d'etiquetes semàntiques|Tarjetas de etiquetas semánticas", k: 'targetes',
        intro: "Un paquet per parella. Es col·loquen damunt de les caixes de l'esbós per comprovar que cada part té la seva etiqueta.|Un paquete por pareja. Se colocan encima de las cajas del boceto para comprobar que cada parte tiene su etiqueta.",
        items: [
          { t: "header · capçalera|header · cabecera", n: 1 },
          { t: "nav · menú|nav · menú", n: 1 },
          { t: "main · contingut principal|main · contenido principal", n: 1 },
          { t: "section · un bloc del tema|section · un bloque del tema", n: 4 },
          { t: "article · una notícia o fitxa|article · una noticia o ficha", n: 2 },
          { t: "footer · peu|footer · pie", n: 1 }
        ] }
    ]
  },

  /* ===================== w8-2 · Construir ===================== */
  'w8-2': {
    obj: [
      "L'alumne/a omple les seccions de la seva web amb textos, llistes, imatges amb alt i enllaços.|El alumno/a rellena las secciones de su web con textos, listas, imágenes con alt y enlaces.",
      "L'alumne/a tria una paleta de 3 a 5 colors i dues fonts i les aplica de manera coherent.|El alumno/a elige una paleta de 3 a 5 colores y dos fuentes y las aplica de manera coherente.",
      "L'alumne/a dona estil a caixes amb farciment, cantonades arrodonides i ombra.|El alumno/a da estilo a cajas con relleno, esquinas redondeadas y sombra.",
      "L'alumne/a col·loca la capçalera amb flex i una secció de targetes amb grid.|El alumno/a coloca la cabecera con flex y una sección de tarjetas con grid."
    ],
    comp: [
      "Competència digital: crear i editar continguts digitals combinant HTML i CSS|Competencia digital: crear y editar contenidos digitales combinando HTML y CSS",
      "Competència artística: triar colors i tipografies amb una intenció|Competencia artística: elegir colores y tipografías con una intención",
      "Pensament computacional: construir per capes i comprovar cada pas|Pensamiento computacional: construir por capas y comprobar cada paso",
      "Comunicació escrita: textos breus, clars i adaptats al públic|Comunicación escrita: textos breves, claros y adaptados al público"
    ],
    vocab: [
      ["Paleta|Paleta", "Els 3 a 5 colors triats que es repeteixen a tota la web.|Los 3 a 5 colores elegidos que se repiten en toda la web."],
      ["Tipografia|Tipografía", "El tipus de lletra; es tria amb font-family.|El tipo de letra; se elige con font-family."],
      ["Targeta|Tarjeta", "Caixa amb fons, farciment, cantonades rodones i ombra que agrupa un contingut.|Caja con fondo, relleno, esquinas redondas y sombra que agrupa un contenido."],
      ["Flex|Flex", "Manera de col·locar els fills d'una caixa en fila o en columna.|Manera de colocar los hijos de una caja en fila o en columna."],
      ["Grid (graella)|Grid (rejilla)", "Manera de col·locar els fills en files i columnes; fr és una part de l'espai.|Manera de colocar los hijos en filas y columnas; fr es una parte del espacio."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Construir»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Construir»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Retoladors o llapis de colors i retalls de paper de colors|Rotuladores o lápices de colores y recortes de papel de colores",
        "Les carpetes amb l'esbós i la fitxa de planificació de la sessió anterior|Las carpetas con el boceto y la ficha de planificación de la sesión anterior"
      ],
      imprimir: ["La meva paleta i les meves fonts|Mi paleta y mis fuentes", "Targetes de propietats CSS|Tarjetas de propiedades CSS"],
      prep: [
        "Tornar a cada alumne/a la seva carpeta amb l'esbós.|Devolver a cada alumno/a su carpeta con el boceto.",
        "Imprimir una fitxa de paleta per alumne/a i un paquet de targetes de propietats per grup de 4.|Imprimir una ficha de paleta por alumno/a y un paquete de tarjetas de propiedades por grupo de 4.",
        "Comprovar que el projecte de la setmana passada apareix a la sessió (el codi es desa per perfil).|Comprobar que el proyecto de la semana pasada aparece en la sesión (el código se guarda por perfil).",
        "Tenir preparats tres o quatre codis de color #hex de mostra (càlids, freds, foscos) per a qui no en trobi.|Tener preparados tres o cuatro códigos de color #hex de muestra (cálidos, fríos, oscuros) para quien no los encuentre."
      ]
    },
    plan: [
      { min: 5, t: "Repàs: de l'esquelet a la web|Repaso: del esqueleto a la web", fase: 'inici',
        fa: "Torna les carpetes i demana a dos o tres alumnes que ensenyin l'esbós i diguin el propòsit de la seva web. Recorda el pla: avui contingut i estil. Pregunta què faria que una web semblés feta per un professional.|Devuelve las carpetas y pide a dos o tres alumnos que enseñen el boceto y digan el propósito de su web. Recuerda el plan: hoy contenido y estilo. Pregunta qué haría que una web pareciera hecha por un profesional.",
        diu: ["Qui ens explica la seva web en una frase?|¿Quién nos explica su web en una frase?",
          "Avui l'esquelet tindrà carn i pell: contingut i estil.|Hoy el esqueleto tendrá carne y piel: contenido y estilo."],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Contingut, paleta, fonts, caixes, flex i grid|Contenido, paleta, fuentes, cajas, flex y grid", fase: 'teoria',
        fa: "Mostra una secció plena de contingut, explica la paleta (fons, text, principal, suau) i la regla de dues fonts. Projecta el codi de les targetes, de la capçalera amb flex i de la graella amb grid. Acaba amb la idea de construir per capes i mirar la vista prèvia després de cada capa.|Muestra una sección llena de contenido, explica la paleta (fondo, texto, principal, suave) y la regla de dos fuentes. Proyecta el código de las tarjetas, de la cabecera con flex y de la rejilla con grid. Termina con la idea de construir por capas y mirar la vista previa después de cada capa.",
        diu: ["Quants colors veieu en aquesta web? Es repeteixen?|¿Cuántos colores veis en esta web? ¿Se repiten?",
          "Flex posa en fila; grid fa files i columnes.|Flex pone en fila; grid hace filas y columnas.",
          "Una capa, una mirada a la vista prèvia.|Una capa, una mirada a la vista previa."],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El mostrari de la meva paleta|El muestrario de mi paleta", fase: 'desconnectat',
        fa: "Cada alumne/a pinta quatre quadrats (fons, text, principal, suau) a la fitxa, comprova des de lluny que el text es llegeix sobre el fons i tria dues fonts. En grups de quatre, cada un descriu la web d'un altre només pels colors.|Cada alumno/a pinta cuatro cuadrados (fondo, texto, principal, suave) en la ficha, comprueba desde lejos que el texto se lee sobre el fondo y elige dos fuentes. En grupos de cuatro, cada uno describe la web de otro solo por los colores.",
        diu: ["Quina paraula descriu la web del company/a pels colors: alegre, seriosa, tranquil·la?|¿Qué palabra describe la web del compañero/a por los colores: alegre, seria, tranquila?",
          "Des de dues passes, el text es llegeix bé sobre el fons?|Desde dos pasos, ¿el texto se lee bien sobre el fondo?"],
        slides: ['s10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i en grups de 4|Individual y en grupos de 4" },
      { min: 10, t: "A l'ordinador: descobreix, prova i el laboratori|En el ordenador: descubre, prueba y el laboratorio", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa. Al pas del mostrari, que toquin «Ho hem fet!». Al laboratori de paletes, anima'ls a provar els seus colors de paper: és el moment de trobar els codis #hex.|Cada alumno/a avanza hasta la pausa. En el paso del muestrario, que toquen «¡Lo hemos hecho!». En el laboratorio de paletas, anímalos a probar sus colores de papel: es el momento de encontrar los códigos #hex.",
        diu: ["Abans de triar, digues on quedarà el menú.|Antes de elegir, di dónde quedará el menú.",
          "Al laboratori, prova el teu color principal: com queda?|En el laboratorio, prueba tu color principal: ¿cómo queda?"],
        slides: ['s11'], app: "De «La missió» fins a «Investiga»: repàs, històries, «Descobreix», el mostrari (ja fet), predir la capçalera, triar el CSS de la graella, trobar l'error de «colums» i el laboratori de paletes.|De «La misión» hasta «Investiga»: repaso, historias, «Descubre», el muestrario (ya hecho), predecir la cabecera, elegir el CSS de la rejilla, encontrar el error de «colums» y el laboratorio de paletas.", org: "Individual|Individual" },
      { min: 12, t: "Reptes: el Refugi Bigotis capa a capa|Retos: el Refugi Bigotis capa a capa", fase: 'ordinador',
        fa: "Pausa activa junts i després els cinc reptes: contingut, paleta i fonts, targetes, capçalera amb flex i graella amb grid. Cada repte afegeix una capa a la mateixa web. Qui acabi, el botó amb hover del repte extra.|Pausa activa juntos y después los cinco retos: contenido, paleta y fuentes, tarjetas, cabecera con flex y rejilla con grid. Cada reto añade una capa a la misma web. Quien termine, el botón con hover del reto extra.",
        diu: ["Flex i grid es posen a la caixa pare, no als fills.|Flex y grid se ponen en la caja padre, no en los hijos.",
          "Si el CSS no fa res, mira si hi ha una ona vermella.|Si el CSS no hace nada, mira si hay una onda roja."],
        slides: ['s12', 's13'], app: "«Pausa activa» i els cinc reptes de «Reptes» (més el repte extra, opcional).|«Pausa activa» y los cinco retos de «Retos» (más el reto extra, opcional).", org: "Individual|Individual" },
      { min: 10, t: "Crea: construeix la teva web|Crea: construye tu web", fase: 'crea',
        fa: "Cada alumne/a obre el seu projecte, que continua on el va deixar. Primer omple el contingut seguint l'inventari i després aplica la paleta, les fonts, les targetes, el flex i el grid. Passa per les taules i ajuda a escollir on va la graella.|Cada alumno/a abre su proyecto, que continúa donde lo dejó. Primero rellena el contenido siguiendo el inventario y después aplica la paleta, las fuentes, las tarjetas, el flex y el grid. Pasa por las mesas y ayuda a elegir dónde va la rejilla.",
        diu: ["Primer textos i imatges; els colors després.|Primero textos e imágenes; los colores después.",
          "Quina secció de la teva web podria ser una graella de targetes?|¿Qué sección de tu web podría ser una rejilla de tarjetas?"],
        slides: ['s14', 's15'], app: "Pas «Crea»: La meva web, construïda.|Paso «Crea»: Mi web, construida.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta. Recull les carpetes amb la fitxa de la paleta.|Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta. Recoge las carpetas con la ficha de la paleta.",
        diu: ["Quants colors té la teva paleta i per a què serveix cada un?|¿Cuántos colores tiene tu paleta y para qué sirve cada uno?",
          "Quina propietat fa una graella de tres columnes?|¿Qué propiedad hace una rejilla de tres columnas?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir molts colors diferents, un per a cada element.|Usa muchos colores diferentes, uno para cada elemento.",
        "Torna a la fitxa de paleta: quin dels quatre colors és aquest? Si no hi és, que el canviï per un de la paleta.|Vuelve a la ficha de paleta: ¿cuál de los cuatro colores es este? Si no está, que lo cambie por uno de la paleta."],
      ["Posa display flex o grid a les targetes en lloc de la caixa que les conté.|Pone display flex o grid en las tarjetas en lugar de la caja que las contiene.",
        "Pregunta: qui ha de repartir l'espai, cada targeta o la caixa que les té a dins? Que miri amb els raigs X quina caixa és el pare.|Pregunta: ¿quién tiene que repartir el espacio, cada tarjeta o la caja que las tiene dentro? Que mire con los rayos X qué caja es el padre."],
      ["Escriu els colors en català (vermell, blau) o oblida el # dels codis.|Escribe los colores en catalán (vermell, blau) u olvida el # de los códigos.",
        "Que llegeixi l'avís de l'editor: suggereix el nom en anglès. Els codis #hex sempre comencen per coixinet.|Que lea el aviso del editor: sugiere el nombre en inglés. Los códigos #hex siempre empiezan por almohadilla."],
      ["Les imatges surten enormes i trenquen la graella.|Las imágenes salen enormes y rompen la rejilla.",
        "Afegiu junts una regla amb width per a les imatges de les targetes, per exemple 90 px o 100%.|Añadid juntos una regla con width para las imágenes de las tarjetas, por ejemplo 90 px o 100%."],
      ["Passa tota l'estona triant colors i no omple el contingut.|Pasa todo el rato eligiendo colores y no rellena el contenido.",
        "Pacta un ordre: deu minuts de contingut amb l'inventari i, després, l'estil. El laboratori de paletes ja li ha deixat provar colors.|Pacta un orden: diez minutos de contenido con el inventario y, después, el estilo. El laboratorio de paletas ya le ha dejado probar colores."]
    ],
    diff: {
      mes: "Afegir un botó amb hover i transition, una segona graella amb un nombre diferent de columnes i fer servir la mateixa classe per a tots els botons de la web. Escriure la paleta en un comentari a dalt del CSS.|Añadir un botón con hover y transition, una segunda rejilla con un número diferente de columnas y usar la misma clase para todos los botones de la web. Escribir la paleta en un comentario arriba del CSS.",
      menys: "Partir d'una paleta donada pel professor/a (quatre codis #hex escrits a la pissarra) i fer només el contingut, les targetes i el flex de la capçalera. La graella es pot fer amb dues columnes.|Partir de una paleta dada por el profesor/a (cuatro códigos #hex escritos en la pizarra) y hacer solo el contenido, las tarjetas y el flex de la cabecera. La rejilla se puede hacer con dos columnas."
    },
    aval: {
      ticket: ["Digues els colors de la teva paleta i la feina de cada un.|Di los colores de tu paleta y el trabajo de cada uno.",
        "Quina propietat posa el títol i el menú en fila?|¿Qué propiedad pone el título y el menú en fila?"],
      rubric: [
        ["Contingut|Contenido", "Les seccions tenen textos clars, una llista, imatges amb alt i enllaços.|Las secciones tienen textos claros, una lista, imágenes con alt y enlaces.", "Hi ha seccions buides o imatges sense alt.|Hay secciones vacías o imágenes sin alt."],
        ["Paleta i fonts|Paleta y fuentes", "Fa servir de 3 a 5 colors i dues fonts de manera coherent.|Usa de 3 a 5 colores y dos fuentes de manera coherente.", "Barreja massa colors o fonts sense un criteri.|Mezcla demasiados colores o fuentes sin un criterio."],
        ["Caixes|Cajas", "Les targetes tenen farciment, cantonades i fons propi.|Las tarjetas tienen relleno, esquinas y fondo propio.", "Les caixes no tenen farciment o el text toca les vores.|Las cajas no tienen relleno o el texto toca los bordes."],
        ["Flex i grid|Flex y grid", "Col·loca la capçalera amb flex i una graella amb grid a la caixa pare.|Coloca la cabecera con flex y una rejilla con grid en la caja padre.", "Fa servir flex o grid, però no sap a quina caixa posar-los.|Usa flex o grid, pero no sabe en qué caja ponerlos."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu obrir la web i mirar-la junts: la família sap dir de què va només mirant els colors i la portada? Busqueu també una web que us agradi i fixeu-vos en quants colors fa servir.|En casa, con el móvil, podéis abrir la web y mirarla juntos: ¿la familia sabe decir de qué va solo mirando los colores y la portada? Buscad también una web que os guste y fijaos en cuántos colores usa.",
    slides: [
      { id: 's1', k: 'portada', t: "La meva web · 2. Construir|Mi web · 2. Construir", x: "Avui l'esquelet de la teva web tindrà contingut i un estil propi.|Hoy el esqueleto de tu web tendrá contenido y un estilo propio.",
        nota: "Recorda que el projecte es reprèn on es va deixar.|Recuerda que el proyecto se retoma donde se dejó." },
      { id: 's2', k: 'repas', t: "Recordes l'esquelet?|¿Recuerdas el esqueleto?", punts: ["header, nav, main, section, footer|header, nav, main, section, footer", "El menú salta a les seccions amb id|El menú salta a las secciones con id", "L'esbós és el plànol|El boceto es el plano"],
        nota: "Demana a dos o tres alumnes que ensenyin l'esbós i diguin el propòsit.|Pide a dos o tres alumnos que enseñen el boceto y digan el propósito." },
      { id: 's3', k: 'concepte', t: "Una secció ben plena|Una sección bien llena", x: "Títol, paràgrafs curts, una llista, una imatge amb alt i un enllaç.|Título, párrafos cortos, una lista, una imagen con alt y un enlace.",
        code: `<section id="qui-som">\n  <h2>Qui som</h2>\n  <p>Cuidem animals fins que troben casa.</p>\n  <img src="img/gat.svg" alt="Gat taronja estirat">\n  <ul><li>Els banyem</li></ul>\n</section>`,
        nota: "Insisteix en textos curts: a la web es llegeix d'una ullada.|Insiste en textos cortos: en la web se lee de un vistazo." },
      { id: 's4', k: 'anim', t: "La paleta: pocs colors, sempre els mateixos|La paleta: pocos colores, siempre los mismos", anim: 'wcolor', punts: ["Fons|Fondo", "Text|Texto", "Principal: títols i botons|Principal: títulos y botones", "Suau: caixes i detalls|Suave: cajas y detalles"],
        nota: "Ensenya una web coneguda i compteu junts quants colors fa servir.|Enseña una web conocida y contad juntos cuántos colores usa." },
      { id: 's5', k: 'anim', t: "Dues fonts com a màxim|Dos fuentes como máximo", anim: 'wfont', x: "Una amb personalitat per als títols i una de molt llegible per al text.|Una con personalidad para los títulos y una muy legible para el texto.",
        nota: "Si la font va al body, tota la pàgina l'hereta: només cal canviar-la als títols.|Si la fuente va en el body, toda la página la hereda: solo hace falta cambiarla en los títulos." },
      { id: 's6', k: 'concepte', t: "Targetes|Tarjetas", x: "Fons, farciment, cantonades rodones i una ombra suau.|Fondo, relleno, esquinas redondas y una sombra suave.",
        code: `.animal {\n  background-color: white;\n  padding: 14px;\n  border-radius: 12px;\n  box-shadow: 0 4px 10px #e8d5c4;\n}`,
        nota: "Pregunta què passa si traiem el padding: el text toca la vora.|Pregunta qué pasa si quitamos el padding: el texto toca el borde." },
      { id: 's7', k: 'concepte', t: "Capçalera amb flex|Cabecera con flex", x: "El títol a l'esquerra, el menú a la dreta, alineats pel mig.|El título a la izquierda, el menú a la derecha, alineados por el medio.",
        code: `header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}`,
        nota: "Recorda la unitat de maquetació: flex va a la caixa pare, el header.|Recuerda la unidad de maquetación: flex va en la caja padre, el header." },
      { id: 's8', k: 'concepte', t: "Graella amb grid|Rejilla con grid", x: "Tres columnes iguals i aire entre les targetes.|Tres columnas iguales y aire entre las tarjetas.",
        code: `.animals {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}`,
        nota: "Explica fr com a parts d'un pastís: tres fr són tres trossos iguals.|Explica fr como partes de un pastel: tres fr son tres trozos iguales." },
      { id: 's9', k: 'anim', t: "Construeix per capes|Construye por capas", anim: 'wrule', punts: ["1. Contingut|1. Contenido", "2. Paleta i fonts|2. Paleta y fuentes", "3. Caixes|3. Cajas", "4. Flex i grid|4. Flex y grid"],
        nota: "Després de cada capa, una mirada a la vista prèvia: així els errors es troben de seguida.|Después de cada capa, una mirada a la vista previa: así los errores se encuentran enseguida." },
      { id: 's10', k: 'activitat', t: "El mostrari de la teva paleta|El muestrario de tu paleta", timer: 8, punts: ["Pinta 4 quadrats: fons, text, principal, suau|Pinta 4 cuadrados: fondo, texto, principal, suave", "Comprova des de lluny que es llegeix|Comprueba desde lejos que se lee", "Tria dues fonts|Elige dos fuentes", "Endevina la web del company/a pels colors|Adivina la web del compañero/a por los colores"],
        nota: "Si algú tria text clar sobre fons clar, deixa que ho descobreixi des de lluny.|Si alguien elige texto claro sobre fondo claro, deja que lo descubra desde lejos." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre la sessió «Construir»|Abre la sesión «Construir»", "Fes fins al laboratori de paletes|Hazla hasta el laboratorio de paletas", "Busca els #hex dels teus colors|Busca los #hex de tus colores", "Para a la «Pausa activa»|Para en la «Pausa activa»"],
        nota: "Que apuntin a la fitxa els codis #hex que trobin al laboratori.|Que apunten en la ficha los códigos #hex que encuentren en el laboratorio." },
      { id: 's12', k: 'repte', t: "Reptes: el Refugi Bigotis|Retos: el Refugi Bigotis", timer: 12, punts: ["1. Omple «Qui som»|1. Rellena «Qui som»", "2. Paleta i fonts|2. Paleta y fuentes", "3. Targetes|3. Tarjetas", "4. Capçalera amb flex|4. Cabecera con flex", "5. Graella amb grid|5. Rejilla con grid"],
        nota: "Cada repte comença on acaba l'anterior: és la mateixa web que creix capa a capa.|Cada reto empieza donde termina el anterior: es la misma web que crece capa a capa." },
      { id: 's13', k: 'repte', t: "Repte extra: un botó que reacciona|Reto extra: un botón que reacciona", x: "Per a qui acabi: un botó amb hover i un canvi suau.|Para quien termine: un botón con hover y un cambio suave.",
        code: `.boto {\n  background-color: #b5402a;\n  color: white;\n  transition: 0.3s;\n}\n.boto:hover {\n  background-color: #2d2a32;\n}`,
        nota: "És opcional: qui el fa pot ajudar després un company/a amb preguntes.|Es opcional: quien lo hace puede ayudar después a un compañero/a con preguntas." },
      { id: 's14', k: 'activitat', t: "Crea: construeix la teva web|Crea: construye tu web", timer: 10, punts: ["Omple les seccions amb l'inventari|Rellena las secciones con el inventario", "Aplica la teva paleta i les fonts|Aplica tu paleta y las fuentes", "Targetes, flex a la capçalera i una graella|Tarjetas, flex en la cabecera y una rejilla"],
        nota: "Primer contingut, després estil. Es desa sol.|Primero contenido, después estilo. Se guarda solo." },
      { id: 's15', k: 'activitat', t: "On va la teva graella?|¿Dónde va tu rejilla?", x: "Pensa quina secció té elements que es repeteixen: equips, receptes, personatges, productes…|Piensa qué sección tiene elementos que se repiten: equipos, recetas, personajes, productos…",
        nota: "Ajuda a triar: una graella té sentit quan hi ha diverses coses del mateix tipus.|Ayuda a elegir: una rejilla tiene sentido cuando hay varias cosas del mismo tipo." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Primer el contingut, després l'estil.|Primero el contenido, después el estilo.", "Una paleta curta i dues fonts, sempre les mateixes.|Una paleta corta y dos fuentes, siempre las mismas.", "Flex per a la capçalera, grid per a la graella.|Flex para la cabecera, grid para la rejilla."],
        nota: "Pregunta qui ha canviat algun color en veure'l a la pantalla.|Pregunta quién ha cambiado algún color al verlo en la pantalla." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Els colors de la teva paleta i la feina de cada un.|Los colores de tu paleta y el trabajo de cada uno.", "Quina propietat posa títol i menú en fila?|¿Qué propiedad pone título y menú en fila?"],
        nota: "Anota qui encara té seccions buides: la propera sessió comença revisant.|Anota quién todavía tiene secciones vacías: la próxima sesión empieza revisando." }
    ],
    print: [
      { id: 'p1', t: "La meva paleta i les meves fonts|Mi paleta y mis fuentes", k: 'fitxa',
        intro: "Una per alumne/a. Es pinta amb colors de veritat i s'hi apunten els codis que es trobin a l'ordinador.|Una por alumno/a. Se pinta con colores de verdad y se apuntan los códigos que se encuentren en el ordenador.",
        items: [
          { q: "Pinta el color de fons i escriu el seu codi #hex.|Pinta el color de fondo y escribe su código #hex.", sol: "Exemple: un crema molt clar, #fffaf0.|Ejemplo: un crema muy claro, #fffaf0." },
          { q: "Pinta el color del text. Es llegeix bé sobre el fons des de dues passes?|Pinta el color del texto. ¿Se lee bien sobre el fondo desde dos pasos?", sol: "Exemple: gris gairebé negre, #222222. Ha de ser fosc si el fons és clar.|Ejemplo: gris casi negro, #222222. Tiene que ser oscuro si el fondo es claro." },
          { q: "Pinta el color principal (títols i botons) i el suau (caixes).|Pinta el color principal (títulos y botones) y el suave (cajas).", sol: "Exemple: principal #c4472b, suau #ffe8d6.|Ejemplo: principal #c4472b, suave #ffe8d6." },
          { q: "Tria dues fonts: una per als títols i una per al text.|Elige dos fuentes: una para los títulos y una para el texto.", sol: "Exemple: Georgia per als títols i Verdana per al text.|Ejemplo: Georgia para los títulos y Verdana para el texto." },
          { q: "Escriu la regla del body amb el fons, el color del text i la font.|Escribe la regla del body con el fondo, el color del texto y la fuente.", sol: "body amb background-color #fffaf0, color #222222 i font-family Verdana, sans-serif, cada declaració amb el seu punt i coma.|body con background-color #fffaf0, color #222222 y font-family Verdana, sans-serif, cada declaración con su punto y coma." }
        ] },
      { id: 'p2', t: "Targetes de propietats CSS|Tarjetas de propiedades CSS", k: 'targetes',
        intro: "Un paquet per grup de 4. Es reparteixen boca avall: cada un en treu una i diu què fa i a quina caixa la posaria.|Un paquete por grupo de 4. Se reparten boca abajo: cada uno saca una y dice qué hace y en qué caja la pondría.",
        items: [
          { t: "display: flex", n: 1 },
          { t: "justify-content: space-between", n: 1 },
          { t: "align-items: center", n: 1 },
          { t: "display: grid", n: 1 },
          { t: "grid-template-columns: repeat(3, 1fr)", n: 1 },
          { t: "gap: 16px", n: 1 },
          { t: "padding: 14px", n: 1 },
          { t: "border-radius: 12px", n: 1 },
          { t: "box-shadow: 0 4px 10px gray", n: 1 },
          { t: "font-family: Georgia, serif", n: 1 }
        ].map(o => ({ t: o.t + '|' + o.t, n: o.n })) }
    ]
  },

  /* ===================== w8-3 · Revisar i millorar ===================== */
  'w8-3': {
    obj: [
      "L'alumne/a revisa una web amb una llista de qualitat: alt, text dels enllaços, contrast, ordre dels títols, mòbil i codi net.|El alumno/a revisa una web con una lista de calidad: alt, texto de los enlaces, contraste, orden de los títulos, móvil y código limpio.",
      "L'alumne/a troba i arregla errors d'HTML i de CSS fent servir els avisos de l'editor.|El alumno/a encuentra y arregla errores de HTML y de CSS usando los avisos del editor.",
      "L'alumne/a afegeix una regla @media perquè la seva web funcioni en una pantalla de mòbil.|El alumno/a añade una regla @media para que su web funcione en una pantalla de móvil.",
      "L'alumne/a fa i rep una revisió entre iguals amb «dues estrelles i un desig», de manera concreta i amable.|El alumno/a hace y recibe una revisión entre iguales con «dos estrellas y un deseo», de manera concreta y amable."
    ],
    comp: [
      "Competència digital: accessibilitat i qualitat dels continguts digitals|Competencia digital: accesibilidad y calidad de los contenidos digitales",
      "Pensament computacional: depuració sistemàtica d'errors|Pensamiento computacional: depuración sistemática de errores",
      "Competència personal i social: donar i rebre crítica constructiva|Competencia personal y social: dar y recibir crítica constructiva",
      "Valors: disseny inclusiu, pensat per a persones amb necessitats diferents|Valores: diseño inclusivo, pensado para personas con necesidades diferentes"
    ],
    vocab: [
      ["Accessibilitat|Accesibilidad", "Que la web la pugui fer servir tothom, també qui no hi veu bé o navega amb el teclat.|Que la web la pueda usar todo el mundo, también quien no ve bien o navega con el teclado."],
      ["Lector de pantalla|Lector de pantalla", "Programa que llegeix la web en veu alta, també l'alt de les imatges.|Programa que lee la web en voz alta, también el alt de las imágenes."],
      ["Contrast|Contraste", "Diferència entre el color del text i el del fons.|Diferencia entre el color del texto y el del fondo."],
      ["Depurar|Depurar", "Buscar i arreglar els errors del codi, d'un en un.|Buscar y arreglar los errores del código, de uno en uno."],
      ["Revisió entre iguals|Revisión entre iguales", "Quan un company/a revisa la teva feina i et dona idees per millorar-la.|Cuando un compañero/a revisa tu trabajo y te da ideas para mejorarlo."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Revisar i millorar»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Revisar y mejorar»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Notes adhesives o papers petits de dos colors (estrelles i desitjos)|Notas adhesivas o papeles pequeños de dos colores (estrellas y deseos)",
        "Si n'hi ha, un o dos mòbils o tauletes per veure les webs en pantalla petita|Si hay, uno o dos móviles o tabletas para ver las webs en pantalla pequeña"
      ],
      imprimir: ["Llista de revisió de la web|Lista de revisión de la web", "Targetes: dues estrelles i un desig|Tarjetas: dos estrellas y un deseo"],
      prep: [
        "Imprimir una llista de revisió per alumne/a i un paquet de targetes d'estrelles i desitjos per alumne/a.|Imprimir una lista de revisión por alumno/a y un paquete de tarjetas de estrellas y deseos por alumno/a.",
        "Decidir les parelles de revisió: millor entre alumnes amb webs en un punt semblant.|Decidir las parejas de revisión: mejor entre alumnos con webs en un punto parecido.",
        "Provar el botó de mida de pantalla de la vista prèvia per ensenyar com es veu una web al mòbil.|Probar el botón de tamaño de pantalla de la vista previa para enseñar cómo se ve una web en el móvil.",
        "Preparar dos exemples d'estrella i de desig ben escrits per projectar-los.|Preparar dos ejemplos de estrella y de deseo bien escritos para proyectarlos."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: l'equip de qualitat|Bienvenida: el equipo de calidad", fase: 'inici',
        fa: "Explica que avui fareu d'equip de qualitat: primer amb la web de la Festa Major plena d'errors i després amb la pròpia. Pregunta si mai han trobat una web que no es podia llegir o que no funcionava al mòbil.|Explica que hoy haréis de equipo de calidad: primero con la web de la Fiesta Mayor llena de errores y después con la propia. Pregunta si alguna vez han encontrado una web que no se podía leer o que no funcionaba en el móvil.",
        diu: ["Us heu trobat mai una web que no es podia fer servir al mòbil? Què passava?|¿Os habéis encontrado alguna vez una web que no se podía usar en el móvil? ¿Qué pasaba?",
          "Trobar errors no vol dir que la web estigui malament: vol dir que la farem millor.|Encontrar errores no significa que la web esté mal: significa que la haremos mejor."],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "La llista de revisió|La lista de revisión", fase: 'teoria',
        fa: "Repassa un a un els punts de la llista: alt, text dels enllaços, contrast, ordre dels títols, mòbil amb @media, codi net i coherència. Per a cada punt, ensenya un exemple dolent i un de bo. Al punt del mòbil, ensenya la vista prèvia en mida de mòbil.|Repasa uno a uno los puntos de la lista: alt, texto de los enlaces, contraste, orden de los títulos, móvil con @media, código limpio y coherencia. Para cada punto, enseña un ejemplo malo y uno bueno. En el punto del móvil, enseña la vista previa en tamaño de móvil.",
        diu: ["Tanqueu els ulls: què us diria el lector de pantalla d'aquesta imatge?|Cerrad los ojos: ¿qué os diría el lector de pantalla de esta imagen?",
          "Si tots els enllaços diuen «clica aquí», on porta cada un?|Si todos los enlaces dicen «clica aquí», ¿adónde lleva cada uno?",
          "La mida dels títols es canvia amb CSS, no triant un altre h.|El tamaño de los títulos se cambia con CSS, no eligiendo otro h."],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "A l'ordinador: prediu i investiga|En el ordenador: predice e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa. L'activitat «Dues estrelles i un desig» es fa més tard a classe: que la saltin amb «Ho hem fet!» i hi tornarem. Para atenció a les tres preguntes de trobar l'error: són els tres punts més importants de la llista.|Cada alumno/a avanza hasta la pausa. La actividad «Dos estrellas y un deseo» se hace más tarde en clase: que la salten con «¡Lo hemos hecho!» y volveremos a ella. Presta atención a las tres preguntas de encontrar el error: son los tres puntos más importantes de la lista.",
        diu: ["Quin punt de la llista falla en aquesta línia?|¿Qué punto de la lista falla en esta línea?",
          "Abans de triar el CSS, imagina el color de cada codi.|Antes de elegir el CSS, imagina el color de cada código."],
        slides: ['s10'], app: "De «La missió» fins a «Investiga»: repàs, històries, «Descobreix», «Dues estrelles i un desig» (es fa després a classe), predir els títols, triar el CSS de l'avís i les tres preguntes de trobar l'error.|De «La misión» hasta «Investiga»: repaso, historias, «Descubre», «Dos estrellas y un deseo» (se hace después en clase), predecir los títulos, elegir el CSS del aviso y las tres preguntas de encontrar el error.", org: "Individual|Individual" },
      { min: 12, t: "Reptes: la Festa Major i la gran reparació|Retos: la Fiesta Mayor y la gran reparación", fase: 'ordinador',
        fa: "Pausa activa junts. Després, els cinc reptes: alt, text dels enllaços, ordre dels títols, @media per al mòbil i la gran reparació. A la gran reparació, recorda la tècnica: un avís cada vegada, de dalt a baix.|Pausa activa juntos. Después, los cinco retos: alt, texto de los enlaces, orden de los títulos, @media para el móvil y la gran reparación. En la gran reparación, recuerda la técnica: un aviso cada vez, de arriba abajo.",
        diu: ["Un error cada vegada: arregla el primer avís i mira si en desapareixen d'altres.|Un error cada vez: arregla el primer aviso y mira si desaparecen otros.",
          "Al repte del mòbil, compte amb les dues claus de tancar.|En el reto del móvil, cuidado con las dos llaves de cerrar."],
        slides: ['s11', 's12'], app: "«Pausa activa» i els cinc reptes de «Reptes» (més el repte extra, opcional).|«Pausa activa» y los cinco retos de «Retos» (más el reto extra, opcional).", org: "Individual|Individual" },
      { min: 10, t: "Dues estrelles i un desig|Dos estrellas y un deseo", fase: 'desconnectat',
        fa: "En parelles, cada alumne/a obre la seva web i se separa de l'ordinador. El company/a la revisa amb la llista impresa i escriu dues estrelles i un desig en paper. Després es canvien. Cada autor/a llegeix les notes, dona les gràcies i tria quin desig farà.|Por parejas, cada alumno/a abre su web y se separa del ordenador. El compañero/a la revisa con la lista impresa y escribe dos estrellas y un deseo en papel. Después se cambian. Cada autor/a lee las notas, da las gracias y elige qué deseo hará.",
        diu: ["Una estrella ha de ser concreta: què funciona bé, exactament?|Una estrella tiene que ser concreta: ¿qué funciona bien, exactamente?",
          "Un desig comença per «M'agradaria…» o «Podries provar…».|Un deseo empieza por «Me gustaría…» o «Podrías probar…».",
          "Parlem de la web, no de la persona.|Hablamos de la web, no de la persona."],
        slides: ['s13', 's14'], app: "Les webs obertes al pas «Crea», sense tocar res: només es miren.|Las webs abiertas en el paso «Crea», sin tocar nada: solo se miran.", org: "Per parelles|Por parejas" },
      { min: 10, t: "Crea: revisa i millora la teva web|Crea: revisa y mejora tu web", fase: 'crea',
        fa: "Cada alumne/a aplica la llista a la seva web: alt, enllaços, un sol h1, @media i cap error. Primer fa el desig que ha triat. Passa per les taules i comprova amb la vista prèvia en mida de mòbil.|Cada alumno/a aplica la lista a su web: alt, enlaces, un solo h1, @media y ningún error. Primero hace el deseo que ha elegido. Pasa por las mesas y comprueba con la vista previa en tamaño de móvil.",
        diu: ["Comença pel desig que t'han escrit.|Empieza por el deseo que te han escrito.",
          "Mira la teva web en mida de mòbil: què es trenca?|Mira tu web en tamaño de móvil: ¿qué se rompe?"],
        slides: ['s15'], app: "Pas «Crea»: La meva web, revisada.|Paso «Crea»: Mi web, revisada.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta. Recull les notes d'estrelles i desitjos a la carpeta de cada alumne/a.|Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta. Recoge las notas de estrellas y deseos en la carpeta de cada alumno/a.",
        diu: ["Quin punt de la llista t'ha costat més d'arreglar?|¿Qué punto de la lista te ha costado más de arreglar?",
          "Quina estrella t'ha fet més il·lusió?|¿Qué estrella te ha hecho más ilusión?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu alts com «imatge», «foto1» o el nom del fitxer.|Escribe alts como «imagen», «foto1» o el nombre del archivo.",
        "Fes-li tancar els ulls i descriu-li tu la imatge amb el seu alt. Què li caldria saber? Que ho escrigui així.|Hazle cerrar los ojos y descríbele tú la imagen con su alt. ¿Qué necesitaría saber? Que lo escriba así."],
      ["Canvia h2 per h4 perquè vol el títol més petit.|Cambia h2 por h4 porque quiere el título más pequeño.",
        "Recorda que els h són un índex. Que torni a h2 i faci una regla de CSS amb font-size per a la mida.|Recuerda que los h son un índice. Que vuelva a h2 y haga una regla de CSS con font-size para el tamaño."],
      ["La regla @media no fa res: falta una clau o el selector és diferent del de fora.|La regla @media no hace nada: falta una llave o el selector es diferente del de fuera.",
        "Que compti les claus: la de la @media i la de cada regla de dins. El selector ha de ser el mateix que el de la regla de l'ordinador.|Que cuente las llaves: la de la @media y la de cada regla de dentro. El selector tiene que ser el mismo que el de la regla del ordenador."],
      ["Davant de molts avisos, es bloqueja o ho esborra tot.|Ante muchos avisos, se bloquea o lo borra todo.",
        "Que arregli només el primer avís i miri què passa: sovint un sol error en provoca d'altres i en desapareixen diversos de cop.|Que arregle solo el primer aviso y mire qué pasa: a menudo un solo error provoca otros y desaparecen varios de golpe."],
      ["A la revisió entre iguals escriu desitjos vagues o poc amables («no m'agrada»).|En la revisión entre iguales escribe deseos vagos o poco amables («no me gusta»).",
        "Projecta els exemples de la diapositiva i ajuda'l a reformular: què canviaries, exactament, i com ho diries perquè ajudi?|Proyecta los ejemplos de la diapositiva y ayúdale a reformular: ¿qué cambiarías, exactamente, y cómo lo dirías para que ayude?"]
    ],
    diff: {
      mes: "Afegir lang a l'etiqueta html, la meta viewport i un estil focus per al teclat. Revisar la web d'un segon company/a i comprovar el contrast de tots els textos, no només el principal.|Añadir lang a la etiqueta html, la meta viewport y un estilo focus para el teclado. Revisar la web de un segundo compañero/a y comprobar el contraste de todos los textos, no solo el principal.",
      menys: "Revisar només tres punts de la llista (alt, enllaços i codi net) i fer la regla @media amb el fragment que dona l'editor. En la revisió entre iguals, començar per les estrelles amb l'ajuda del professor/a.|Revisar solo tres puntos de la lista (alt, enlaces y código limpio) y hacer la regla @media con el fragmento que da el editor. En la revisión entre iguales, empezar por las estrellas con la ayuda del profesor/a."
    },
    aval: {
      ticket: ["Digues tres punts de la llista de revisió.|Di tres puntos de la lista de revisión.",
        "Per a què serveix una regla @media amb max-width de 600 px?|¿Para qué sirve una regla @media con max-width de 600 px?"],
      rubric: [
        ["Accessibilitat|Accesibilidad", "Totes les imatges tenen un alt descriptiu i els enllaços diuen on porten.|Todas las imágenes tienen un alt descriptivo y los enlaces dicen adónde llevan.", "Hi ha alts genèrics o algun enllaç «clica aquí».|Hay alts genéricos o algún enlace «clica aquí»."],
        ["Mòbil|Móvil", "La web es recol·loca bé en mida de mòbil gràcies a una regla @media.|La web se recoloca bien en tamaño de móvil gracias a una regla @media.", "Té una @media, però alguna part encara es trenca al mòbil.|Tiene una @media, pero alguna parte todavía se rompe en el móvil."],
        ["Depuració|Depuración", "Deixa el codi sense cap avís arreglant els errors d'un en un.|Deja el código sin ningún aviso arreglando los errores de uno en uno.", "Arregla alguns errors, però li cal ajuda per llegir els avisos.|Arregla algunos errores, pero necesita ayuda para leer los avisos."],
        ["Revisió entre iguals|Revisión entre iguales", "Escriu estrelles i desitjos concrets i amables i aplica un desig rebut.|Escribe estrellas y deseos concretos y amables y aplica un deseo recibido.", "Les notes són vagues o encara no aplica cap desig.|Las notas son vagas o todavía no aplica ningún deseo."]
      ]
    },
    casa: "A casa, amb el mòbil, obriu la web i comproveu-la en pantalla petita: es llegeix tot? Demaneu a algú de la família dues estrelles i un desig, i apunteu-los per a la propera sessió.|En casa, con el móvil, abrid la web y comprobadla en pantalla pequeña: ¿se lee todo? Pedid a alguien de la familia dos estrellas y un deseo, y apuntadlos para la próxima sesión.",
    slides: [
      { id: 's1', k: 'portada', t: "La meva web · 3. Revisar i millorar|Mi web · 3. Revisar y mejorar", x: "Avui sou l'equip de qualitat: trobareu errors i millorareu les webs.|Hoy sois el equipo de calidad: encontraréis errores y mejoraréis las webs.",
        nota: "Remarca que revisar és part de la feina de qualsevol equip professional.|Remarca que revisar es parte del trabajo de cualquier equipo profesional." },
      { id: 's2', k: 'pregunta', t: "Una web que no funciona|Una web que no funciona", x: "Recordeu alguna web que no es podia llegir o que es trencava al mòbil? Què hi passava?|¿Recordáis alguna web que no se podía leer o que se rompía en el móvil? ¿Qué pasaba?",
        nota: "Recull dues o tres experiències: les tornareu a trobar a la llista de revisió.|Recoge dos o tres experiencias: las volveréis a encontrar en la lista de revisión." },
      { id: 's3', k: 'anim', t: "Imatges que es poden escoltar|Imágenes que se pueden escuchar", anim: 'walt', x: "El lector de pantalla llegeix l'alt. Ha de dir què s'hi veu i què importa.|El lector de pantalla lee el alt. Tiene que decir qué se ve y qué importa.",
        nota: "Fes tancar els ulls i llegeix dos alts: un de dolent i un de bo.|Haz cerrar los ojos y lee dos alts: uno malo y uno bueno." },
      { id: 's4', k: 'anim', t: "Enllaços que diuen on porten|Enlaces que dicen adónde llevan", anim: 'wlink', punts: ["Malament: clica aquí, aquí, més|Mal: clica aquí, aquí, más", "Bé: l'horari complet de la festa|Bien: el horario completo de la fiesta"],
        nota: "Explica que molta gent i els lectors de pantalla salten d'enllaç en enllaç.|Explica que mucha gente y los lectores de pantalla saltan de enlace en enlace." },
      { id: 's5', k: 'concepte', t: "Contrast|Contraste", x: "Text fosc sobre fons clar o text clar sobre fons fosc. Mai gris clar sobre blanc.|Texto oscuro sobre fondo claro o texto claro sobre fondo oscuro. Nunca gris claro sobre blanco.",
        code: `.mal { color: #dddddd; background-color: white; }\n.be  { color: #333333; background-color: white; }`,
        nota: "Si hi ha un mòbil, mostreu un text de poc contrast a la llum de la finestra.|Si hay un móvil, mostrad un texto de poco contraste a la luz de la ventana." },
      { id: 's6', k: 'anim', t: "Títols en ordre|Títulos en orden", anim: 'whead', punts: ["Un sol h1: el nom de la web|Un solo h1: el nombre de la web", "Un h2 per a cada secció|Un h2 para cada sección", "h3 per a les parts d'una secció|h3 para las partes de una sección", "La mida, amb CSS|El tamaño, con CSS"],
        nota: "Compara els títols amb l'índex d'un llibre: no hi ha un capítol 1.1.1 sense capítol 1.|Compara los títulos con el índice de un libro: no hay un capítulo 1.1.1 sin capítulo 1." },
      { id: 's7', k: 'anim', t: "Que funcioni al mòbil|Que funcione en el móvil", anim: 'wresp', x: "Una regla @media aplica canvis només a les pantalles estretes.|Una regla @media aplica cambios solo en las pantallas estrechas.",
        code: `@media (max-width: 600px) {\n  .graella {\n    grid-template-columns: 1fr;\n  }\n}`,
        nota: "Ensenya la vista prèvia en mida de mòbil abans i després d'afegir la regla.|Enseña la vista previa en tamaño de móvil antes y después de añadir la regla." },
      { id: 's8', k: 'anim', t: "Codi net|Código limpio", anim: 'wsource', punts: ["Etiquetes ben tancades|Etiquetas bien cerradas", "Propietats ben escrites i amb punt i coma|Propiedades bien escritas y con punto y coma", "Codi sagnat|Código sangrado", "Cap ona vermella a l'editor|Ninguna onda roja en el editor"],
        nota: "Explica la tècnica: un avís cada vegada, de dalt a baix.|Explica la técnica: un aviso cada vez, de arriba abajo." },
      { id: 's9', k: 'concepte', t: "Coherència|Coherencia", x: "Les coses iguals es veuen iguals: mateixos colors per als títols, mateixa forma per als botons.|Las cosas iguales se ven iguales: mismos colores para los títulos, misma forma para los botones.",
        code: `.boto {\n  background-color: #6a0f49;\n  color: white;\n  border-radius: 8px;\n}`,
        nota: "Una sola classe per a tots els botons: si la canvies, canvien tots.|Una sola clase para todos los botones: si la cambias, cambian todos." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre la sessió «Revisar i millorar»|Abre la sesión «Revisar y mejorar»", "«Dues estrelles i un desig»: ho farem després|«Dos estrellas y un deseo»: lo haremos después", "Fes fins a «Investiga»|Hazla hasta «Investiga»", "Para a la «Pausa activa»|Para en la «Pausa activa»"],
        nota: "Comprova que tothom salta l'activitat sense pantalla: es fa a classe més tard.|Comprueba que todos saltan la actividad sin pantalla: se hace en clase más tarde." },
      { id: 's11', k: 'repte', t: "Reptes: la web de la Festa Major|Retos: la web de la Fiesta Mayor", timer: 12, punts: ["1. Alts que descriuen|1. Alts que describen", "2. Enllaços clars|2. Enlaces claros", "3. Títols en ordre|3. Títulos en orden", "4. La graella al mòbil|4. La rejilla en el móvil", "5. La gran reparació|5. La gran reparación"],
        nota: "Qui acabi pot fer el repte extra: lang, viewport, title i focus.|Quien termine puede hacer el reto extra: lang, viewport, title y focus." },
      { id: 's12', k: 'repte', t: "La gran reparació|La gran reparación", x: "Errors d'etiquetes, CSS mal escrit, alt, enllaç i contrast. Un avís cada vegada.|Errores de etiquetas, CSS mal escrito, alt, enlace y contraste. Un aviso cada vez.",
        code: `body {\n  colr: #2b2b2b;\n}\nh1 {\n  color: blanc;\n  background-color: #6a0f49\n}`,
        nota: "Projecta-ho i troba un error amb tota la classe abans que ho facin sols.|Proyéctalo y encuentra un error con toda la clase antes de que lo hagan solos." },
      { id: 's13', k: 'activitat', t: "Dues estrelles i un desig|Dos estrellas y un deseo", timer: 10, punts: ["L'autor/a no explica res|El autor/a no explica nada", "Qui revisa passa la llista|Quien revisa pasa la lista", "Escriu dues estrelles i un desig|Escribe dos estrellas y un deseo", "Canvieu els papers|Cambiad los papeles"],
        nota: "Deixa-la projectada mentre treballen. Vigila que ningú no toqui l'ordinador de l'altre.|Déjala proyectada mientras trabajan. Vigila que nadie toque el ordenador del otro." },
      { id: 's14', k: 'concepte', t: "Com s'escriu una bona nota|Cómo se escribe una buena nota", punts: ["Estrella: el menú porta a totes les seccions.|Estrella: el menú lleva a todas las secciones.", "Desig: m'agradaria que el text del peu es llegís millor.|Deseo: me gustaría que el texto del pie se leyera mejor.", "Mai: està malament, no m'agrada.|Nunca: está mal, no me gusta."],
        nota: "Llegeix els exemples en veu alta i pregunta per què el tercer no ajuda.|Lee los ejemplos en voz alta y pregunta por qué el tercero no ayuda." },
      { id: 's15', k: 'activitat', t: "Crea: revisa la teva web|Crea: revisa tu web", timer: 10, punts: ["Fes el desig que has triat|Haz el deseo que has elegido", "Alts, enllaços i un sol h1|Alts, enlaces y un solo h1", "Una regla @media|Una regla @media", "Cap avís a l'editor|Ningún aviso en el editor"],
        nota: "Comprova amb cada alumne/a la vista prèvia en mida de mòbil.|Comprueba con cada alumno/a la vista previa en tamaño de móvil." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Una web es revisa amb una llista.|Una web se revisa con una lista.", "@media fa que funcioni al mòbil.|@media hace que funcione en el móvil.", "Dues estrelles i un desig: concret i amable.|Dos estrellas y un deseo: concreto y amable."],
        nota: "Pregunta quina millora els ha agradat més de la seva web.|Pregunta qué mejora les ha gustado más de su web." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Tres punts de la llista de revisió.|Tres puntos de la lista de revisión.", "Per a què serveix una regla @media?|¿Para qué sirve una regla @media?"],
        nota: "Anota qui té encara errors a l'editor: la propera sessió comença amb el poliment final.|Anota quién tiene todavía errores en el editor: la próxima sesión empieza con el pulido final." }
    ],
    print: [
      { id: 'p1', t: "Llista de revisió de la web|Lista de revisión de la web", k: 'fitxa',
        intro: "Una per alumne/a. Qui revisa marca cada punt mirant la web del company/a sense tocar l'ordinador.|Una por alumno/a. Quien revisa marca cada punto mirando la web del compañero/a sin tocar el ordenador.",
        items: [
          { q: "Totes les imatges tenen un alt que descriu el que s'hi veu?|¿Todas las imágenes tienen un alt que describe lo que se ve?", sol: "Sí: per exemple, «Pastís de xocolata amb espelmes», no «imatge».|Sí: por ejemplo, «Pastel de chocolate con velas», no «imagen»." },
          { q: "El text de cada enllaç diu on porta?|¿El texto de cada enlace dice adónde lleva?", sol: "Sí: cap enllaç diu «clica aquí», «aquí» o «més».|Sí: ningún enlace dice «clica aquí», «aquí» o «más»." },
          { q: "Tot el text es llegeix bé sobre el seu fons?|¿Todo el texto se lee bien sobre su fondo?", sol: "Sí: text fosc sobre clar o clar sobre fosc.|Sí: texto oscuro sobre claro o claro sobre oscuro." },
          { q: "Hi ha un sol h1 i els títols van en ordre (h2, h3)?|¿Hay un solo h1 y los títulos van en orden (h2, h3)?", sol: "Sí: un h1 amb el nom de la web i un h2 per secció.|Sí: un h1 con el nombre de la web y un h2 por sección." },
          { q: "En mida de mòbil, la web es veu bé?|¿En tamaño de móvil, la web se ve bien?", sol: "Sí: gràcies a una regla @media, la graella i el menú es recol·loquen.|Sí: gracias a una regla @media, la rejilla y el menú se recolocan." },
          { q: "L'editor no mostra cap avís i els colors i botons són coherents?|¿El editor no muestra ningún aviso y los colores y botones son coherentes?", sol: "Sí: cap ona vermella i els elements iguals es veuen iguals.|Sí: ninguna onda roja y los elementos iguales se ven iguales." }
        ] },
      { id: 'p2', t: "Targetes: dues estrelles i un desig|Tarjetas: dos estrellas y un deseo", k: 'targetes',
        intro: "Tres targetes per alumne/a: dues estrelles i un desig. S'escriuen a mà i es lliuren a l'autor/a de la web.|Tres tarjetas por alumno/a: dos estrellas y un deseo. Se escriben a mano y se entregan al autor/a de la web.",
        items: [
          { t: "⭐ Estrella: m'agrada que…|⭐ Estrella: me gusta que…", n: 2 },
          { t: "🌱 Desig: m'agradaria que…|🌱 Deseo: me gustaría que…", n: 1 }
        ] }
    ]
  },

  /* ===================== w8-4 · Presentació i diploma ===================== */
  'w8-4': {
    obj: [
      "L'alumne/a explica com es publica una web: fitxers, servidor (hosting) i domini.|El alumno/a explica cómo se publica una web: archivos, servidor (hosting) y dominio.",
      "L'alumne/a revisa la privadesa de la seva web: sense dades personals ni imatges de persones sense permís.|El alumno/a revisa la privacidad de su web: sin datos personales ni imágenes de personas sin permiso.",
      "L'alumne/a fa els últims retocs (portada, botons amb hover, secció «Sobre aquesta web») i acaba el projecte final.|El alumno/a hace los últimos retoques (portada, botones con hover, sección «Sobre esta web») y termina el proyecto final.",
      "L'alumne/a presenta la seva web en un minut: què és, de què està orgullós/osa, què ha après i què milloraria.|El alumno/a presenta su web en un minuto: qué es, de qué está orgulloso/a, qué ha aprendido y qué mejoraría."
    ],
    comp: [
      "Competència digital: seguretat, privadesa i identitat digital en publicar continguts|Competencia digital: seguridad, privacidad e identidad digital al publicar contenidos",
      "Comunicació oral: presentar un projecte propi davant d'un públic|Comunicación oral: presentar un proyecto propio ante un público",
      "Ciutadania digital: drets d'imatge i autoria de les imatges|Ciudadanía digital: derechos de imagen y autoría de las imágenes",
      "Aprendre a aprendre: valorar el propi procés i proposar millores|Aprender a aprender: valorar el propio proceso y proponer mejoras"
    ],
    vocab: [
      ["Hosting (allotjament)|Hosting (alojamiento)", "Espai en un servidor on es guarden els fitxers d'una web.|Espacio en un servidor donde se guardan los archivos de una web."],
      ["Servidor|Servidor", "Ordinador sempre encès i connectat que envia la web a qui la visita.|Ordenador siempre encendido y conectado que envía la web a quien la visita."],
      ["Domini|Dominio", "El nom de l'adreça d'una web, com elmeuclub.cat.|El nombre de la dirección de una web, como elmeuclub.cat."],
      ["Dades personals|Datos personales", "Informació que identifica una persona: cognoms, adreça, telèfon, correu.|Información que identifica a una persona: apellidos, dirección, teléfono, correo."],
      ["Dret d'imatge|Derecho de imagen", "Cada persona decideix si es pot publicar una foto on surt.|Cada persona decide si se puede publicar una foto donde sale."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Presentació i diploma»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Presentación y diploma»",
        "Projector, la presentació d'aquesta sessió i un ordinador connectat per projectar les webs dels alumnes|Proyector, la presentación de esta sesión y un ordenador conectado para proyectar las webs de los alumnos",
        "Un cronòmetre visible per a les presentacions d'un minut|Un cronómetro visible para las presentaciones de un minuto",
        "Les carpetes amb l'esbós, la paleta i les notes d'estrelles i desitjos|Las carpetas con el boceto, la paleta y las notas de estrellas y deseos"
      ],
      imprimir: ["Guió de la presentació d'un minut|Guion de la presentación de un minuto", "Preguntes per al públic|Preguntas para el público"],
      prep: [
        "Imprimir un guió per alumne/a i unes quantes targetes de preguntes per al públic.|Imprimir un guion por alumno/a y unas cuantas tarjetas de preguntas para el público.",
        "Decidir l'ordre de les presentacions i com es projectaran les webs (des de l'ordinador de cada alumne/a o des del del professor/a).|Decidir el orden de las presentaciones y cómo se proyectarán las webs (desde el ordenador de cada alumno/a o desde el del profesor/a).",
        "Recordar que l'app no publica la web a internet: el fitxer que es descarga amb el diploma es pot publicar amb la família o des del centre, si es vol.|Recordar que la app no publica la web en internet: el archivo que se descarga con el diploma se puede publicar con la familia o desde el centro, si se quiere.",
        "Si el grup és nombrós, preveure fer una part de les presentacions a l'inici de la sessió següent.|Si el grupo es numeroso, prever hacer una parte de las presentaciones al inicio de la sesión siguiente."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: el dia de l'estrena|Bienvenida: el día del estreno", fase: 'inici',
        fa: "Explica el pla de l'últim dia: com es publica una web, privadesa, retocs finals, diploma i presentacions d'un minut. Pregunta què creuen que cal perquè una web la pugui veure tothom.|Explica el plan del último día: cómo se publica una web, privacidad, retoques finales, diploma y presentaciones de un minuto. Pregunta qué creen que hace falta para que una web la pueda ver todo el mundo.",
        diu: ["Ara la vostra web viu a l'app. Què caldria perquè la pogués veure algú de l'altra punta del món?|Ahora vuestra web vive en la app. ¿Qué haría falta para que la pudiera ver alguien del otro lado del mundo?",
          "Avui acabem i ho celebrem: cadascú ensenyarà la seva web.|Hoy terminamos y lo celebramos: cada uno enseñará su web."],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Publicar, privadesa i presentar|Publicar, privacidad y presentar", fase: 'teoria',
        fa: "Explica amb les animacions què és el hosting i el servidor, què és un domini i quins fitxers es pugen. Dedica temps a la privadesa: dades que no es publiquen i permís per a les fotos de persones. Acaba amb l'estructura de la presentació d'un minut.|Explica con las animaciones qué es el hosting y el servidor, qué es un dominio y qué archivos se suben. Dedica tiempo a la privacidad: datos que no se publican y permiso para las fotos de personas. Termina con la estructura de la presentación de un minuto.",
        diu: ["El hosting és on viu la web; el domini és el nom per trobar-la.|El hosting es donde vive la web; el dominio es el nombre para encontrarla.",
          "Una web publicada la pot veure qualsevol persona del món.|Una web publicada la puede ver cualquier persona del mundo.",
          "Un minut: què és, l'orgull, la dificultat i la millora.|Un minuto: qué es, el orgullo, la dificultad y la mejora."],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa. L'assaig de la presentació es fa més tard a classe: que el saltin amb «Ho hem fet!». Para atenció a la pregunta de privadesa i a la línia del peu que no s'ha de publicar.|Cada alumno/a avanza hasta la pausa. El ensayo de la presentación se hace más tarde en clase: que lo salten con «¡Lo hemos hecho!». Presta atención a la pregunta de privacidad y a la línea del pie que no se debe publicar.",
        diu: ["Aquesta dada la posaries a la porta de casa? Doncs tampoc a la web.|¿Este dato lo pondrías en la puerta de casa? Pues tampoco en la web.",
          "Què li falta a aquest número del CSS?|¿Qué le falta a este número del CSS?"],
        slides: ['s9'], app: "De «La missió» fins a «Investiga»: repàs, històries, «Descobreix», l'assaig (es fa després a classe), la pregunta de privadesa, triar el CSS de la targeta i les dues preguntes de trobar l'error.|De «La misión» hasta «Investiga»: repaso, historias, «Descubre», el ensayo (se hace después en clase), la pregunta de privacidad, elegir el CSS de la tarjeta y las dos preguntas de encontrar el error.", org: "Individual|Individual" },
      { min: 10, t: "Reptes de poliment|Retos de pulido", fase: 'ordinador',
        fa: "Pausa activa junts. Després, els quatre reptes: una portada que atrapi, un botó amb hover, arreglar la privadesa d'un peu i crear la secció «Sobre aquesta web». Qui acabi, el repte extra de la capçalera enganxada.|Pausa activa juntos. Después, los cuatro retos: una portada que atrape, un botón con hover, arreglar la privacidad de un pie y crear la sección «Sobre esta web». Quien termine, el reto extra de la cabecera pegada.",
        diu: ["Cada repte és una idea que pots copiar a la teva web.|Cada reto es una idea que puedes copiar en tu web.",
          "El hover necessita dues regles: la normal i la de :hover.|El hover necesita dos reglas: la normal y la de :hover."],
        slides: ['s10'], app: "«Pausa activa» i els quatre reptes de «Reptes» (més el repte extra, opcional).|«Pausa activa» y los cuatro retos de «Retos» (más el reto extra, opcional).", org: "Individual|Individual" },
      { min: 10, t: "Crea: el projecte final i el diploma|Crea: el proyecto final y el diploma", fase: 'crea',
        fa: "Cada alumne/a fa els últims retocs a la seva web fins que tots els objectius estiguin en verd: privadesa del peu, secció «Sobre aquesta web», un hover i mòbil. En desar-la, apareix el diploma amb el botó per descarregar la web en un sol fitxer.|Cada alumno/a hace los últimos retoques a su web hasta que todos los objetivos estén en verde: privacidad del pie, sección «Sobre esta web», un hover y móvil. Al guardarla, aparece el diploma con el botón para descargar la web en un solo archivo.",
        diu: ["Mira els objectius: quin et queda en gris?|Mira los objetivos: ¿cuál te queda en gris?",
          "El fitxer descarregat és la teva web sencera, llesta per publicar amb un adult si voleu.|El archivo descargado es tu web entera, lista para publicar con un adulto si queréis."],
        slides: ['s11', 's12'], app: "Pas «Crea»: La meva web (projecte final) i, després, el diploma.|Paso «Crea»: Mi web (proyecto final) y, después, el diploma.", org: "Individual|Individual" },
      { min: 15, t: "Assaig i presentacions d'un minut|Ensayo y presentaciones de un minuto", fase: 'desconnectat',
        fa: "Tres minuts d'assaig en parelles amb el guió i el cronòmetre. Després, cada alumne/a presenta la seva web projectada durant un minut. El públic fa una pregunta amb les targetes i aplaudeix al final de cada presentació.|Tres minutos de ensayo por parejas con el guion y el cronómetro. Después, cada alumno/a presenta su web proyectada durante un minuto. El público hace una pregunta con las tarjetas y aplaude al final de cada presentación.",
        diu: ["Mira el públic, no la pantalla.|Mira al público, no a la pantalla.",
          "Quina pregunta li faríeu a la web del vostre company/a?|¿Qué pregunta le haríais a la web de vuestro compañero/a?",
          "Un minut passa volant: quatre paraules clau i endavant.|Un minuto pasa volando: cuatro palabras clave y adelante."],
        slides: ['s13', 's14', 's15'], app: "La web de cada alumne/a oberta, només per ensenyar-la.|La web de cada alumno/a abierta, solo para enseñarla.", org: "Per parelles i després tot el grup|Por parejas y después todo el grupo" },
      { min: 2, t: "Tancament i celebració|Cierre y celebración", fase: 'tancament',
        fa: "Repassa el camí de les quatre sessions amb el resum, deixa que facin les preguntes finals de l'app i felicita el grup. Recorda que la web descarregada és seva.|Repasa el camino de las cuatro sesiones con el resumen, deja que hagan las preguntas finales de la app y felicita al grupo. Recuerda que la web descargada es suya.",
        diu: ["De l'esbós de paper a una web de debò: enhorabona!|Del boceto de papel a una web de verdad: ¡enhorabuena!",
          "Què és el hosting? I el domini?|¿Qué es el hosting? ¿Y el dominio?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el nom complet, l'escola o una foto seva amb amics a la web.|Pone el nombre completo, la escuela o una foto suya con amigos en la web.",
        "Sense alarmar, recorda que una web publicada la pot veure qualsevol persona. Proposa el nom de pila o un pseudònim i una il·lustració en lloc de la foto.|Sin alarmar, recuerda que una web publicada la puede ver cualquier persona. Propón el nombre de pila o un seudónimo y una ilustración en lugar de la foto."],
      ["Confon hosting i domini.|Confunde hosting y dominio.",
        "Fes servir la comparació de la casa: el hosting és el terreny on hi ha la casa i el domini és l'adreça escrita a la bústia.|Usa la comparación de la casa: el hosting es el terreno donde está la casa y el dominio es la dirección escrita en el buzón."],
      ["El hover no funciona: escriu hover sense els dos punts o en una regla d'un altre element.|El hover no funciona: escribe hover sin los dos puntos o en una regla de otro elemento.",
        "Que compari el seu selector amb el de la regla normal: ha de ser el mateix més dos punts i hover, tot junt.|Que compare su selector con el de la regla normal: tiene que ser el mismo más dos puntos y hover, todo junto."],
      ["A la presentació llegeix el codi o parla més d'un minut.|En la presentación lee el código o habla más de un minuto.",
        "Que ensenyi la web, no el codi, i que segueixi les quatre paraules clau del guió. Avisa quan quedin quinze segons.|Que enseñe la web, no el código, y que siga las cuatro palabras clave del guion. Avisa cuando queden quince segundos."],
      ["Té vergonya de presentar davant de tothom.|Le da vergüenza presentar delante de todos.",
        "Ofereix alternatives: presentar en parella, només davant del professor/a o amb el company/a fent clic a la web mentre parla.|Ofrece alternativas: presentar en pareja, solo delante del profesor/a o con el compañero/a haciendo clic en la web mientras habla."]
    ],
    diff: {
      mes: "Afegir la capçalera enganxada i l'estil focus, i preparar una presentació que inclogui una demostració en directe d'una part del codi. Investigar amb la família quins hostings gratuïts existeixen per a projectes petits.|Añadir la cabecera pegada y el estilo focus, y preparar una presentación que incluya una demostración en directo de una parte del código. Investigar con la familia qué hostings gratuitos existen para proyectos pequeños.",
      menys: "Centrar-se en tres retocs: privadesa del peu, secció «Sobre aquesta web» i un botó amb hover. A la presentació, fer servir el guió imprès i dir només dues de les quatre parts.|Centrarse en tres retoques: privacidad del pie, sección «Sobre esta web» y un botón con hover. En la presentación, usar el guion impreso y decir solo dos de las cuatro partes."
    },
    aval: {
      ticket: ["Què és el hosting i què és el domini?|¿Qué es el hosting y qué es el dominio?",
        "Digues dues dades que no posaries mai en una web publicada.|Di dos datos que no pondrías nunca en una web publicada."],
      rubric: [
        ["Publicació|Publicación", "Explica la relació entre fitxers, servidor (hosting) i domini.|Explica la relación entre archivos, servidor (hosting) y dominio.", "Sap que la web s'ha de pujar a internet, però confon hosting i domini.|Sabe que la web se tiene que subir a internet, pero confunde hosting y dominio."],
        ["Privadesa|Privacidad", "La web no té cap dada personal i les imatges són pròpies o amb permís.|La web no tiene ningún dato personal y las imágenes son propias o con permiso.", "Encara hi queda alguna dada personal o una imatge sense origen clar.|Todavía queda algún dato personal o una imagen sin origen claro."],
        ["Projecte final|Proyecto final", "La web és completa, coherent, funciona al mòbil i no té errors.|La web es completa, coherente, funciona en el móvil y no tiene errores.", "La web funciona, però li falta alguna part o encara té errors.|La web funciona, pero le falta alguna parte o todavía tiene errores."],
        ["Presentació|Presentación", "Presenta en un minut les quatre parts mirant el públic.|Presenta en un minuto las cuatro partes mirando al público.", "Presenta amb ajuda del guió o se'n deixa alguna part.|Presenta con ayuda del guion o se deja alguna parte."]
      ]
    },
    casa: "A casa, amb el mòbil, ensenyeu la web a la família com si fos la presentació d'un minut. Si voleu publicar-la, feu-ho amb un adult: abans, reviseu junts que no hi hagi cap dada personal ni cap foto de persones sense permís.|En casa, con el móvil, enseñad la web a la familia como si fuera la presentación de un minuto. Si queréis publicarla, hacedlo con un adulto: antes, revisad juntos que no haya ningún dato personal ni ninguna foto de personas sin permiso.",
    slides: [
      { id: 's1', k: 'portada', t: "La meva web · 4. Presentació i diploma|Mi web · 4. Presentación y diploma", x: "L'últim dia del projecte: publicar, retocar, presentar i celebrar.|El último día del proyecto: publicar, retocar, presentar y celebrar.",
        nota: "Crea ambient d'estrena: és el dia que cadascú ensenya la seva feina.|Crea ambiente de estreno: es el día en que cada uno enseña su trabajo." },
      { id: 's2', k: 'pregunta', t: "Com arriba una web a tot el món?|¿Cómo llega una web a todo el mundo?", x: "Ara la vostra web viu a l'app. Què caldria perquè la pogués veure qualsevol persona?|Ahora vuestra web vive en la app. ¿Qué haría falta para que la pudiera ver cualquier persona?",
        nota: "Recull idees i connecta-les amb la unitat 1: servidors, adreces i el viatge d'una pàgina.|Recoge ideas y conéctalas con la unidad 1: servidores, direcciones y el viaje de una página." },
      { id: 's3', k: 'anim', t: "Publicar: pujar els fitxers a un servidor|Publicar: subir los archivos a un servidor", anim: 'wpublish', x: "El hosting és l'espai en un servidor sempre encès on viu la web.|El hosting es el espacio en un servidor siempre encendido donde vive la web.",
        nota: "Explica que n'hi ha de gratuïts per a projectes petits i que sempre cal un adult per contractar-los.|Explica que los hay gratuitos para proyectos pequeños y que siempre hace falta un adulto para contratarlos." },
      { id: 's4', k: 'anim', t: "El domini: un nom per a l'adreça|El dominio: un nombre para la dirección", anim: 'wdns', x: "Un nom fàcil, com elmeuclub.cat, en lloc del número del servidor.|Un nombre fácil, como elmeuclub.cat, en lugar del número del servidor.",
        nota: "Compara-ho amb la casa: el hosting és el terreny i el domini, l'adreça de la bústia.|Compáralo con la casa: el hosting es el terreno y el dominio, la dirección del buzón." },
      { id: 's5', k: 'anim', t: "Què es puja|Qué se sube", anim: 'wfiles', punts: ["index.html a l'arrel|index.html en la raíz", "estil.css al costat|estil.css al lado", "Les imatges a img|Las imágenes en img", "El diploma et dona tot en un sol fitxer|El diploma te da todo en un solo archivo"],
        nota: "Remarca que l'app no publica sola: el fitxer descarregat es pot publicar amb la família.|Remarca que la app no publica sola: el archivo descargado se puede publicar con la familia." },
      { id: 's6', k: 'concepte', t: "Privadesa: res de dades personals|Privacidad: nada de datos personales", punts: ["Cognoms, adreça, telèfon, correu: no|Apellidos, dirección, teléfono, correo: no", "L'escola i els horaris on ets sol/a: no|La escuela y los horarios en que estás solo/a: no", "Nom de pila o pseudònim: sí|Nombre de pila o seudónimo: sí"],
        code: `<footer>\n  <p>Web feta per Laia · contacte a través del club</p>\n</footer>`,
        nota: "Pregunta: ho posaríeu en un cartell al carrer? Si la resposta és no, tampoc a la web.|Pregunta: ¿lo pondríais en un cartel en la calle? Si la respuesta es no, tampoco en la web." },
      { id: 's7', k: 'anim', t: "Fotos de persones: amb permís|Fotos de personas: con permiso", anim: 'wcite', x: "Per publicar la foto d'algú cal el seu permís i, si és menor, el de la família. I cal dir de qui són les imatges.|Para publicar la foto de alguien hace falta su permiso y, si es menor, el de la familia. Y hay que decir de quién son las imágenes.",
        nota: "Recorda que les il·lustracions de Numi es poden fer servir i que convé citar-les a la secció «Sobre aquesta web».|Recuerda que las ilustraciones de Numi se pueden usar y que conviene citarlas en la sección «Sobre esta web»." },
      { id: 's8', k: 'concepte', t: "La teva web en un minut|Tu web en un minuto", punts: ["1. Què és i per a qui|1. Qué es y para quién", "2. La part de què estic més orgullós/osa|2. La parte de la que estoy más orgulloso/a", "3. Una dificultat i com l'he resolta|3. Una dificultad y cómo la he resuelto", "4. Què hi afegiria|4. Qué añadiría"],
        nota: "Fes tu una presentació d'exemple d'un minut amb una web inventada.|Haz tú una presentación de ejemplo de un minuto con una web inventada." },
      { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 8, punts: ["Obre la sessió «Presentació i diploma»|Abre la sesión «Presentación y diploma»", "L'assaig: el farem després a classe|El ensayo: lo haremos después en clase", "Fes fins a «Investiga»|Hazla hasta «Investiga»", "Para a la «Pausa activa»|Para en la «Pausa activa»"],
        nota: "Comprova que tothom respon bé la pregunta de privadesa.|Comprueba que todos responden bien la pregunta de privacidad." },
      { id: 's10', k: 'repte', t: "Reptes de poliment|Retos de pulido", timer: 10, punts: ["1. Una portada que atrapi|1. Una portada que atrape", "2. Un botó amb hover|2. Un botón con hover", "3. Un peu sense dades personals|3. Un pie sin datos personales", "4. La secció «Sobre aquesta web»|4. La sección «Sobre esta web»"],
        code: `.boto:hover {\n  background-color: #1d3557;\n  transform: scale(1.05);\n}`,
        nota: "Cada repte és una idea per a la seva web: anima'ls a copiar el que els agradi.|Cada reto es una idea para su web: anímalos a copiar lo que les guste." },
      { id: 's11', k: 'activitat', t: "Crea: el teu projecte final|Crea: tu proyecto final", timer: 10, punts: ["Revisa la privadesa del peu|Revisa la privacidad del pie", "Afegeix «Sobre aquesta web»|Añade «Sobre esta web»", "Un botó amb hover|Un botón con hover", "Tots els objectius en verd|Todos los objetivos en verde"],
        nota: "Passa per les taules: qui tingui un objectiu en gris, que llegeixi la pista.|Pasa por las mesas: quien tenga un objetivo en gris, que lea la pista." },
      { id: 's12', k: 'concepte', t: "El diploma|El diploma", x: "En desar el projecte apareix el diploma i un botó per descarregar la web en un sol fitxer.|Al guardar el proyecto aparece el diploma y un botón para descargar la web en un solo archivo.",
        nota: "Explica que el fitxer s'obre amb qualsevol navegador i que, si el volen publicar, ho facin amb un adult.|Explica que el archivo se abre con cualquier navegador y que, si lo quieren publicar, lo hagan con un adulto." },
      { id: 's13', k: 'activitat', t: "Assaig en parelles|Ensayo por parejas", timer: 3, punts: ["Quatre paraules clau al guió|Cuatro palabras clave en el guion", "Un minut amb cronòmetre|Un minuto con cronómetro", "El company/a diu què s'ha entès bé|El compañero/a dice qué se ha entendido bien"],
        nota: "Avisa quan faltin quinze segons perquè es facin la idea del temps.|Avisa cuando falten quince segundos para que se hagan una idea del tiempo." },
      { id: 's14', k: 'activitat', t: "Presentacions d'un minut|Presentaciones de un minuto", timer: 12, x: "Cada persona presenta la seva web projectada. El públic escolta, pregunta i aplaudeix.|Cada persona presenta su web proyectada. El público escucha, pregunta y aplaude.",
        nota: "Si no hi ha temps per a tothom, continueu a l'inici de la propera sessió.|Si no hay tiempo para todos, continuad al inicio de la próxima sesión." },
      { id: 's15', k: 'concepte', t: "Preguntes per al públic|Preguntas para el público", punts: ["Quina part t'ha costat més?|¿Qué parte te ha costado más?", "Per què has triat aquests colors?|¿Por qué has elegido estos colores?", "Què hi afegiries ara?|¿Qué añadirías ahora?"],
        nota: "Deixa-la projectada entre presentacions perquè el públic tingui preguntes preparades.|Déjala proyectada entre presentaciones para que el público tenga preguntas preparadas." },
      { id: 's16', k: 'resum', t: "El camí del projecte|El camino del proyecto", punts: ["Planificar: esbós i esquelet|Planificar: boceto y esqueleto", "Construir: contingut i estil|Construir: contenido y estilo", "Revisar: llista i dues estrelles i un desig|Revisar: lista y dos estrellas y un deseo", "Presentar i publicar amb seguretat|Presentar y publicar con seguridad"],
        nota: "Felicita el grup: han fet una web completa des de zero.|Felicita al grupo: han hecho una web completa desde cero." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què és el hosting i què és el domini?|¿Qué es el hosting y qué es el dominio?", "Dues dades que no posaries mai en una web.|Dos datos que no pondrías nunca en una web."],
        nota: "Anota qui no ha pogut presentar per començar per aquestes persones la propera sessió.|Anota quién no ha podido presentar para empezar por estas personas la próxima sesión." }
    ],
    print: [
      { id: 'p1', t: "Guió de la presentació d'un minut|Guion de la presentación de un minuto", k: 'fitxa',
        intro: "Una per alumne/a. Només cal escriure una o dues paraules clau a cada part: no es llegeix, serveix de recordatori.|Una por alumno/a. Solo hay que escribir una o dos palabras clave en cada parte: no se lee, sirve de recordatorio.",
        items: [
          { q: "Què és la meva web i per a qui és?|¿Qué es mi web y para quién es?", sol: "Exemple: club de bàsquet, per a famílies del barri.|Ejemplo: club de baloncesto, para familias del barrio." },
          { q: "La part de què estic més orgullós/osa:|La parte de la que estoy más orgulloso/a:", sol: "Exemple: la graella dels equips.|Ejemplo: la rejilla de los equipos." },
          { q: "Una cosa difícil i com l'he resolta:|Una cosa difícil y cómo la he resuelto:", sol: "Exemple: la regla del mòbil; he comptat les claus.|Ejemplo: la regla del móvil; he contado las llaves." },
          { q: "Què hi afegiria si tingués més temps:|Qué añadiría si tuviera más tiempo:", sol: "Exemple: una secció amb el calendari de partits.|Ejemplo: una sección con el calendario de partidos." }
        ] },
      { id: 'p2', t: "Preguntes per al públic|Preguntas para el público", k: 'targetes',
        intro: "Es reparteixen entre el públic. Després de cada presentació, qui té una targeta pot fer la pregunta.|Se reparten entre el público. Después de cada presentación, quien tiene una tarjeta puede hacer la pregunta.",
        items: [
          { t: "Quina part t'ha costat més de fer?|¿Qué parte te ha costado más de hacer?", n: 3 },
          { t: "Per què has triat aquests colors?|¿Por qué has elegido estos colores?", n: 3 },
          { t: "Què hi afegiries ara?|¿Qué añadirías ahora?", n: 3 },
          { t: "Per a qui és la teva web?|¿Para quién es tu web?", n: 3 },
          { t: "Quina cosa nova has après fent-la?|¿Qué cosa nueva has aprendido haciéndola?", n: 3 }
        ] }
    ]
  }
});
