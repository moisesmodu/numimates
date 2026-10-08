/* Numi Tech · Tech Web · guies del professor. Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */

/* ── unitat 1 ── */
/* Tech Web · unitat 1 «Com funciona internet» · guia del professor (w1-1 … w1-4)
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. Les diapositives de tipus «media»
   fan servir la demo del motor web (tech-web.js): el codi amb colors i la pàgina que en surt. El codi de les demos és
   bilingüe com a unit.js: "codi ca|código es" a html, css o text es converteix en una propietat que tria l'idioma. */
Object.assign(TGUIDE, (() => {
  const B = (ca, es) => ca + '|' + es;
  const LZ = new Set(['html', 'css', 'text']);
  const pick = v => { const i = v.indexOf('|'); return typeof L === 'function' ? L(v.slice(0, i), v.slice(i + 1)) : v.slice(0, i); };
  const bil = o => { if (Array.isArray(o)) { o.forEach(bil); return o; } if (o && typeof o === 'object') for (const k of Object.keys(o)) { const v = o[k];
    if (LZ.has(k) && typeof v === 'string' && v.includes('|')) Object.defineProperty(o, k, { get: () => pick(v), enumerable: true, configurable: true }); else if (v && typeof v === 'object') bil(v); } return o; };
  const HOLA = B('<h1>Hola!</h1>\n<p>He viatjat fins aquí.</p>', '<h1>¡Hola!</h1>\n<p>He viajado hasta aquí.</p>');
  const FOTO = B("<h1>FotoNuvi</h1>\n<p>Fotos de l'illa i del poble.</p>\n<img src=\"img/tech/web/platja.svg\" alt=\"La platja de l'illa\" width=\"130\">", '<h1>FotoNuvi</h1>\n<p>Fotos de la isla y del pueblo.</p>\n<img src="img/tech/web/platja.svg" alt="La playa de la isla" width="130">');
  const GATS = B('<h1>Els gats</h1>\n<p>El gat és un animal molt curiós.</p>', '<h1>Los gatos</h1>\n<p>El gato es un animal muy curioso.</p>');
  const MAPA = B("<h1>El mapa d'internet</h1>\n<p>1. Escric el domini al navegador.</p>\n<p>2. El DNS em dona l'adreça IP.</p>\n<p>3. Els routers porten la petició.</p>\n<p>4. El servidor envia la pàgina.</p>", '<h1>El mapa de internet</h1>\n<p>1. Escribo el dominio en el navegador.</p>\n<p>2. El DNS me da la dirección IP.</p>\n<p>3. Los routers llevan la petición.</p>\n<p>4. El servidor envía la página.</p>');
  return bil({
  /* ---------- Sessió 1 · El viatge d'una pàgina ---------- */
  'w1-1': {
    obj: [
      "L'alumne/a explica que internet és una xarxa de xarxes i distingeix el wifi de casa d'internet.|El alumno/a explica que internet es una red de redes y distingue el wifi de casa de internet.",
      "L'alumne/a descriu el paper del client (el navegador) i del servidor en una petició i la seva resposta.|El alumno/a describe el papel del cliente (el navegador) y del servidor en una petición y su respuesta.",
      "L'alumne/a explica per què les dades viatgen en paquets numerats i què fan els routers quan un camí falla.|El alumno/a explica por qué los datos viajan en paquetes numerados y qué hacen los routers cuando un camino falla.",
      "L'alumne/a canvia el text d'una pàgina web senzilla i en comprova el resultat a la vista prèvia.|El alumno/a cambia el texto de una página web sencilla y comprueba el resultado en la vista previa."
    ],
    comp: [
      "Competència digital: entendre com es connecten els dispositius i com circula la informació per la xarxa|Competencia digital: entender cómo se conectan los dispositivos y cómo circula la información por la red",
      "Tecnologia i digitalització: xarxes de comunicació, client i servidor, transmissió de dades|Tecnología y digitalización: redes de comunicación, cliente y servidor, transmisión de datos",
      "Pensament computacional: descomposició (la pàgina en paquets) i seqüència d'un procés|Pensamiento computacional: descomposición (la página en paquetes) y secuencia de un proceso",
      "Comunicació oral: explicar un procés pas a pas amb vocabulari precís|Comunicación oral: explicar un proceso paso a paso con vocabulario preciso"
    ],
    vocab: [
      ['Xarxa|Red', 'Aparells connectats que es poden enviar dades.|Aparatos conectados que pueden enviarse datos.'],
      ['Internet|Internet', 'La xarxa de xarxes que connecta ordinadors de tot el món.|La red de redes que conecta ordenadores de todo el mundo.'],
      ['Servidor|Servidor', 'Ordinador que guarda webs i les envia quan algú les demana.|Ordenador que guarda webs y las envía cuando alguien las pide.'],
      ['Client (navegador)|Cliente (navegador)', 'El programa que demana la pàgina i la dibuixa a la pantalla.|El programa que pide la página y la dibuja en la pantalla.'],
      ['Paquet|Paquete', "Un tros petit de dades, amb l'adreça de destí i un número d'ordre.|Un trozo pequeño de datos, con la dirección de destino y un número de orden."],
      ['Router|Router', 'Aparell que rep paquets i tria per on els envia.|Aparato que recibe paquetes y elige por dónde los envía.']
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «El viatge d'una pàgina»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «El viaje de una página»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per a la xarxa humana: 10 cadires, un cabdell de llana o cinta de pintor per fer els «cables» i les targetes impreses|Para la red humana: 10 sillas, un ovillo de lana o cinta de pintor para hacer los «cables» y las tarjetas impresas"
      ],
      imprimir: ['Targetes de la xarxa humana|Tarjetas de la red humana', "Fitxa: el viatge d'una pàgina|Ficha: el viaje de una página"],
      prep: [
        "Dibuixar a la pissarra l'esquema de la xarxa humana (sis routers, un servidor a cada punta i un client a cada punta) i deixar l'espai lliure per col·locar-hi les cadires.|Dibujar en la pizarra el esquema de la red humana (seis routers, un servidor en cada punta y un cliente en cada punta) y dejar el espacio libre para colocar las sillas.",
        "Imprimir i retallar les targetes: dos missatges de sis paquets (A i B) i les targetes de rol.|Imprimir y recortar las tarjetas: dos mensajes de seis paquetes (A y B) y las tarjetas de rol.",
        "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada.",
        "Provar abans el repte final (la primera pàgina) per veure com es marquen les comprovacions.|Probar antes el reto final (la primera página) para ver cómo se marcan las comprobaciones."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda a l'Estudi Web|Bienvenida al Estudio Web", fase: 'inici',
        fa: "Presenta el curs: aprendran com funciona internet i faran webs de veritat amb HTML i CSS. Planteja el misteri de la sessió i recull hipòtesis sense corregir-les: on és una web abans que la vegem?|Presenta el curso: aprenderán cómo funciona internet y harán webs de verdad con HTML y CSS. Plantea el misterio de la sesión y recoge hipótesis sin corregirlas: ¿dónde está una web antes de que la veamos?",
        diu: ["Quan obriu una web al mòbil, d'on ve? Ja hi era, dins del mòbil?|Cuando abrís una web en el móvil, ¿de dónde viene? ¿Ya estaba dentro del móvil?",
          "Al final d'aquest curs, cadascú de vosaltres tindrà la seva pròpia web.|Al final de este curso, cada uno de vosotros tendrá su propia web."],
        slides: ['s1', 's2', 's3'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 10, t: 'Xarxes, servidors i paquets|Redes, servidores y paquetes', fase: 'teoria',
        fa: "Explica amb les animacions la xarxa de casa i internet com a xarxa de xarxes, la petició i la resposta, els paquets numerats i els routers. Insisteix en la diferència entre el wifi (el tros fins al router) i internet. Fes notar que internet és físic: cables, fibra i servidors en edificis reals.|Explica con las animaciones la red de casa e internet como red de redes, la petición y la respuesta, los paquetes numerados y los routers. Insiste en la diferencia entre el wifi (el tramo hasta el router) e internet. Haz notar que internet es físico: cables, fibra y servidores en edificios reales.",
        diu: ["Si s'espatlla el router de casa, el mòbil continua tenint wifi? I internet?|Si se estropea el router de casa, ¿el móvil sigue teniendo wifi? ¿E internet?",
          'Per què creieu que la pàgina es trenca en trossos en lloc de viatjar sencera?|¿Por qué creéis que la página se rompe en trozos en lugar de viajar entera?',
          "Si es talla un cable, s'atura internet? Mirem què fan els routers.|Si se corta un cable, ¿se para internet? Miremos qué hacen los routers."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: 'La xarxa humana|La red humana', fase: 'desconnectat',
        fa: "Col·loca sis alumnes com a routers (A-F) en dues files, units amb llana només amb els veïns. A cada punta, un servidor i un client. Cada servidor té un missatge de sis paquets barrejats. Els routers només poden passar un paquet a un router connectat i han de dir en veu alta cap a on l'envien. A mig camí, «talla» un cable (aixeca la llana) i observa com busquen un altre camí. El client ordena els paquets pel número; si en falta un, el demana. La resta del grup fa d'observador: compta quants paquets passen per cada router.|Coloca a seis alumnos como routers (A-F) en dos filas, unidos con lana solo con los vecinos. En cada punta, un servidor y un cliente. Cada servidor tiene un mensaje de seis paquetes mezclados. Los routers solo pueden pasar un paquete a un router conectado y tienen que decir en voz alta hacia dónde lo envían. A mitad de camino, «corta» un cable (levanta la lana) y observa cómo buscan otro camino. El cliente ordena los paquetes por el número; si falta uno, lo pide. El resto del grupo hace de observador: cuenta cuántos paquetes pasan por cada router.",
        diu: ["Un router només pot passar el paquet a un router amb qui estigui connectat.|Un router solo puede pasar el paquete a un router con el que esté conectado.",
          "Atenció: aquest cable s'acaba de tallar! Per on ha d'anar ara el paquet?|¡Atención: este cable se acaba de cortar! ¿Por dónde tiene que ir ahora el paquete?",
          "Client, et falta algun paquet? Quin número? Demana'l al servidor.|Cliente, ¿te falta algún paquete? ¿Qué número? Pídeselo al servidor."],
        slides: ['s10', 's11'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Tot el grup amb papers (routers, servidors, clients i observadors)|Todo el grupo con papeles (routers, servidores, clientes y observadores)' },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança al seu ritme fins a la pausa activa. Al pas «Fes de paquet» poden tocar «Ho hem fet!», perquè ja ho han fet a classe amb la xarxa humana. Passeja i demana que t'expliquin amb les seves paraules el que acaben d'ordenar.|Cada alumno/a abre la sesión y avanza a su ritmo hasta la pausa activa. En el paso «Haz de paquete» pueden tocar «¡Lo hemos hecho!», porque ya lo han hecho en clase con la red humana. Pasea y pide que te expliquen con sus palabras lo que acaban de ordenar.",
        diu: ["Explica'm el viatge com si jo no en sabés res.|Explícame el viaje como si yo no supiera nada.", 'Qui és el client en aquesta història? I el servidor?|¿Quién es el cliente en esta historia? ¿Y el servidor?'],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: les històries, les targetes de «Descobreix», ordenar el viatge, «Fes de paquet» (ja fet), les preguntes del navegador, dels números i del camí tallat.|De «La misión» hasta «Investiga»: las historias, las tarjetas de «Descubre», ordenar el viaje, «Haz de paquete» (ya hecho), las preguntas del navegador, de los números y del camino cortado.", org: 'Individual|Individual' },
      { min: 10, t: 'Reptes del viatge|Retos del viaje', fase: 'ordinador',
        fa: "Feu la pausa activa junts. Després, mostra la demo del codi: el servidor envia text i el navegador el dibuixa. Deixa que facin els quatre reptes. Al de la tauleta sense internet, demana que ho relacionin amb el que han vist a la xarxa humana.|Haced la pausa activa juntos. Después, muestra la demo del código: el servidor envía texto y el navegador lo dibuja. Deja que hagan los cuatro retos. En el de la tableta sin internet, pide que lo relacionen con lo que han visto en la red humana.",
        diu: ['El que viatja per internet és text i dades. El navegador el converteix en el que veieu.|Lo que viaja por internet es texto y datos. El navegador lo convierte en lo que veis.',
          'Si el router de casa no té internet, fins on arriba la petició?|Si el router de casa no tiene internet, ¿hasta dónde llega la petición?'],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: la tauleta sense internet, ordenar del més proper al més llunyà, què no forma part del viatge i quina vista prèvia fa el codi.|«Pausa activa» y los cuatro retos: la tableta sin internet, ordenar de lo más cercano a lo más lejano, qué no forma parte del viaje y qué vista previa hace el código.", org: 'Tot el grup i després individual|Todo el grupo y después individual' },
      { min: 5, t: 'Crea: la meva primera pàgina|Crea: mi primera página', fase: 'crea',
        fa: "Cada alumne/a omple els buits de la seva primera pàgina. Recorda que només han de canviar el text, no els signes &lt; &gt;. Quan totes les comprovacions estiguin marcades, la deseu al portafoli.|Cada alumno/a rellena los huecos de su primera página. Recuerda que solo tienen que cambiar el texto, no los signos &lt; &gt;. Cuando todas las comprobaciones estén marcadas, la guardáis en el portafolio.",
        diu: ["Fixeu-vos en la llista de comprovacions: es van marcant mentre escriviu.|Fijaos en la lista de comprobaciones: se van marcando mientras escribís.", "Un nom de programador/a inventat, no el vostre nom real complet: a internet, com menys dades personals, millor.|Un nombre de programador/a inventado, no vuestro nombre real completo: en internet, cuantos menos datos personales, mejor."],
        slides: ['s15'], app: 'Pas «Crea»: La meva primera pàgina.|Paso «Crea»: Mi primera página.', org: 'Individual|Individual' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Repassa les tres idees de la sessió. Deixa que facin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas de la sesión. Deja que hagan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
        diu: ["Qui em diu, en una frase, què és un servidor?|¿Quién me dice, en una frase, qué es un servidor?", 'I per què els paquets porten un número?|¿Y por qué los paquetes llevan un número?'],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ['Pensa que el wifi i internet són el mateix.|Piensa que el wifi e internet son lo mismo.', "Pregunta-li què passaria si el router de casa perdés la connexió: el mòbil encara veuria el wifi? Podria obrir webs noves?|Pregúntale qué pasaría si el router de casa perdiera la conexión: ¿el móvil aún vería el wifi? ¿Podría abrir webs nuevas?"],
      ["Creu que les webs estan guardades dins del mòbil o de l'ordinador.|Cree que las webs están guardadas dentro del móvil o del ordenador.", "Proposa-li que pensi en una web nova que no hagi obert mai: com pot ser que ja la tingués a dins?|Proponle que piense en una web nueva que no haya abierto nunca: ¿cómo puede ser que ya la tuviera dentro?"],
      ['Confon el router amb el servidor: creu que el router guarda les webs.|Confunde el router con el servidor: cree que el router guarda las webs.', "Recorda-li el paper que feia a la xarxa humana: el router guardava el missatge o només el passava?|Recuérdale el papel que hacía en la red humana: ¿el router guardaba el mensaje o solo lo pasaba?"],
      ['No entén per què cal numerar els paquets.|No entiende por qué hay que numerar los paquetes.', "Dona-li tres paquets desordenats sense número i demana-li que reconstrueixi el missatge. Després, amb números.|Dale tres paquetes desordenados sin número y pídele que reconstruya el mensaje. Después, con números."],
      ['Al repte final, esborra els signes &lt; o &gt; i la pàgina es desfà.|En el reto final, borra los signos &lt; o &gt; y la página se deshace.', "Que miri la llista de comprovacions i el missatge taronja de sota l'editor: diu quina etiqueta no està tancada. Pot tocar «Una pista».|Que mire la lista de comprobaciones y el mensaje naranja debajo del editor: dice qué etiqueta no está cerrada. Puede tocar «Una pista»."]
    ],
    diff: {
      mes: "Afegir a la primera pàgina un quart paràgraf que expliqui què fa un router (copiant una línia de &lt;p&gt; i canviant-ne el text). Dibuixar en un paper una xarxa amb cinc routers i trobar tres camins diferents entre dos punts.|Añadir a la primera página un cuarto párrafo que explique qué hace un router (copiando una línea de &lt;p&gt; y cambiando su texto). Dibujar en un papel una red con cinco routers y encontrar tres caminos diferentes entre dos puntos.",
      menys: "Tenir a la taula la fitxa del viatge amb les sis fases i fer servir les targetes de rol de la xarxa humana per ordenar el viatge abans de fer-ho a l'app. Al repte final, omplir un buit cada vegada i mirar la vista prèvia.|Tener en la mesa la ficha del viaje con las seis fases y usar las tarjetas de rol de la red humana para ordenar el viaje antes de hacerlo en la app. En el reto final, rellenar un hueco cada vez y mirar la vista previa."
    },
    aval: {
      ticket: ['Digues la diferència entre un client i un servidor.|Di la diferencia entre un cliente y un servidor.', "Per què les dades viatgen en paquets numerats?|¿Por qué los datos viajan en paquetes numerados?"],
      rubric: [
        ['Xarxa i internet|Red e internet', "Explica internet com a xarxa de xarxes i distingeix-lo del wifi amb un exemple.|Explica internet como red de redes y lo distingue del wifi con un ejemplo.", "Sap que internet connecta ordinadors, però encara el confon amb el wifi.|Sabe que internet conecta ordenadores, pero aún lo confunde con el wifi."],
        ['Client i servidor|Cliente y servidor', 'Descriu la petició i la resposta i qui fa cada paper.|Describe la petición y la respuesta y quién hace cada papel.', "Reconeix el servidor, però no sap explicar què fa el navegador.|Reconoce el servidor, pero no sabe explicar qué hace el navegador."],
        ['Paquets i routers|Paquetes y routers', "Explica per què es numeren els paquets i què fa un router si un camí falla.|Explica por qué se numeran los paquetes y qué hace un router si un camino falla.", 'Sap que hi ha paquets, però no en veu la utilitat dels números.|Sabe que hay paquetes, pero no ve la utilidad de los números.']
      ]
    },
    casa: "A casa podeu fer l'activitat «Fes de paquet»: una frase repartida en quatre papers numerats que l'altra persona ha de reconstruir. També podeu mirar el router de casa i comptar quants aparells hi ha connectats a la vostra xarxa.|En casa podéis hacer la actividad «Haz de paquete»: una frase repartida en cuatro papeles numerados que la otra persona tiene que reconstruir. También podéis mirar el router de casa y contar cuántos aparatos hay conectados a vuestra red.",
    slides: [
      { id: 's1', k: 'portada', t: "El viatge d'una pàgina|El viaje de una página", x: "Com arriba una web des d'un servidor llunyà fins a la teva pantalla?|¿Cómo llega una web desde un servidor lejano hasta tu pantalla?",
        nota: "Presenta el curs i l'objectiu de la sessió. Explica que avui no programarem gaire: entendrem el camí que fa cada pàgina.|Presenta el curso y el objetivo de la sesión. Explica que hoy no programaremos mucho: entenderemos el camino que hace cada página." },
      { id: 's2', k: 'pregunta', t: 'On és una web abans que la vegis?|¿Dónde está una web antes de que la veas?', punts: ['Dins del mòbil?|¿Dentro del móvil?', 'En un ordinador llunyà?|¿En un ordenador lejano?', 'Al wifi?|¿En el wifi?'],
        nota: "Recull respostes i apunta-les a la pissarra. No corregeixis encara: hi tornareu al final de la teoria.|Recoge respuestas y apúntalas en la pizarra. No corrijas todavía: volveréis a ellas al final de la teoría." },
      { id: 's3', k: 'concepte', t: "L'Estudi Web de l'illa|El Estudio Web de la isla", punts: ['Unitat 1: com funciona internet|Unidad 1: cómo funciona internet', 'Després: HTML i CSS de veritat|Después: HTML y CSS de verdad', 'Al final: la teva pròpia web|Al final: tu propia web'], pic: 'img/tech/scenes/lab.webp',
        nota: "Explica que per fer una bona web cal entendre primer com viatja. Remarca que tot el que veuran és real: els mateixos llenguatges i el mateix funcionament que les webs que fan servir cada dia.|Explica que para hacer una buena web hay que entender primero cómo viaja. Remarca que todo lo que verán es real: los mismos lenguajes y el mismo funcionamiento que las webs que usan cada día." },
      { id: 's4', k: 'anim', t: 'Una xarxa… i una xarxa de xarxes|Una red… y una red de redes', anim: 'w1net', x: "Els aparells de casa formen una xarxa. Internet connecta milions de xarxes.|Los aparatos de casa forman una red. Internet conecta millones de redes.",
        nota: "Pregunta quins aparells tenen connectats a casa: mòbils, ordinadors, la tele… Tots formen la xarxa de casa, i el router la connecta amb internet.|Pregunta qué aparatos tienen conectados en casa: móviles, ordenadores, la tele… Todos forman la red de casa, y el router la conecta con internet." },
      { id: 's5', k: 'pregunta', t: 'Wifi o internet?|¿Wifi o internet?', x: "El router de casa perd la connexió. El mòbil encara té wifi… pot obrir una web nova?|El router de casa pierde la conexión. El móvil aún tiene wifi… ¿puede abrir una web nueva?",
        nota: "Resposta: no. El wifi només és el tros entre l'aparell i el router. Internet és tot el que hi ha darrere del router.|Respuesta: no. El wifi solo es el tramo entre el aparato y el router. Internet es todo lo que hay detrás del router." },
      { id: 's6', k: 'anim', t: 'Client i servidor|Cliente y servidor', anim: 'w1cs', x: 'El navegador fa una petició; el servidor respon amb els fitxers de la pàgina.|El navegador hace una petición; el servidor responde con los archivos de la página.',
        nota: "Compara-ho amb demanar un plat en un restaurant: el client demana, la cuina prepara i el cambrer porta. Recalca que el servidor és un ordinador de veritat, engegat dia i nit.|Compáralo con pedir un plato en un restaurante: el cliente pide, la cocina prepara y el camarero lo lleva. Recalca que el servidor es un ordenador de verdad, encendido día y noche." },
      { id: 's7', k: 'anim', t: 'La pàgina viatja en paquets|La página viaja en paquetes', anim: 'w1pack', x: "Cada paquet porta l'adreça de destí i un número. En arribar, s'ordenen.|Cada paquete lleva la dirección de destino y un número. Al llegar, se ordenan.",
        nota: "Fes notar que els paquets arriben desordenats a l'animació (3, 1, 4, 2) i que és el número el que permet ordenar-los.|Haz notar que los paquetes llegan desordenados en la animación (3, 1, 4, 2) y que es el número lo que permite ordenarlos." },
      { id: 's8', k: 'anim', t: 'Els routers trien el camí|Los routers eligen el camino', anim: 'w1route', x: "Si un camí falla, els routers en busquen un altre.|Si un camino falla, los routers buscan otro.",
        nota: "Pregunta: si es talla un cable, s'atura internet? Gràcies als camins alternatius, no. Ho provarem a la xarxa humana.|Pregunta: si se corta un cable, ¿se para internet? Gracias a los caminos alternativos, no. Lo probaremos en la red humana." },
      { id: 's9', k: 'concepte', t: 'Internet és de veritat|Internet es de verdad', pic: 'img/ment/nom.webp', punts: ['Cables de coure i de fibra òptica (llum dins de fils de vidre)|Cables de cobre y de fibra óptica (luz dentro de hilos de vidrio)', 'Cables de fibra al fons del mar entre continents|Cables de fibra en el fondo del mar entre continentes', 'Servidors en edificis plens d\'ordinadors|Servidores en edificios llenos de ordenadores'],
        nota: "Desfés la idea que internet és «el núvol» o una cosa que flota: són aparells i cables de veritat. Torna a la pregunta de la diapositiva 2 i corregiu-la junts.|Deshaz la idea de que internet es «la nube» o algo que flota: son aparatos y cables de verdad. Vuelve a la pregunta de la diapositiva 2 y corregidla juntos." },
      { id: 's10', k: 'activitat', t: 'La xarxa humana|La red humana', timer: 12, punts: ['Sis routers units amb llana, un servidor i un client a cada punta.|Seis routers unidos con lana, un servidor y un cliente en cada punta.', 'El servidor envia els sis paquets del seu missatge, barrejats.|El servidor envía los seis paquetes de su mensaje, mezclados.', 'Cada router passa el paquet a un veí i diu en veu alta cap a on.|Cada router pasa el paquete a un vecino y dice en voz alta hacia dónde.', "El client ordena els paquets pel número i llegeix el missatge.|El cliente ordena los paquetes por el número y lee el mensaje."],
        nota: "Feu dues rondes: a la primera, tot funciona; a la segona, talla un cable i amaga un paquet perquè el client l'hagi de demanar.|Haced dos rondas: en la primera, todo funciona; en la segunda, corta un cable y esconde un paquete para que el cliente lo tenga que pedir." },
      { id: 's11', k: 'activitat', t: 'Les regles dels routers|Las reglas de los routers', punts: ['Només pots passar el paquet a un router connectat amb tu.|Solo puedes pasar el paquete a un router conectado contigo.', 'Mira l\'adreça del paquet: cap a on el vols acostar?|Mira la dirección del paquete: ¿hacia dónde lo quieres acercar?', 'Si un cable està tallat, busca un altre camí.|Si un cable está cortado, busca otro camino.'],
        nota: "Deixa aquesta diapositiva projectada durant l'activitat. Els observadors anoten per quins routers passa cada paquet.|Deja esta diapositiva proyectada durante la actividad. Los observadores anotan por qué routers pasa cada paquete." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «El viatge d'una pàgina».|Abre la sesión «El viaje de una página».", 'Fes la missió i «Descobreix».|Haz la misión y «Descubre».', '«Fes de paquet»: ja l\'hem fet a classe.|«Haz de paquete»: ya lo hemos hecho en clase.', 'Para a la «Pausa activa».|Para en la «Pausa activa».'],
        nota: 'Passeja i escolta com expliquen el viatge. Qui acabi abans pot ajudar algú amb preguntes, sense tocar-li el ratolí.|Pasea y escucha cómo explican el viaje. Quien termine antes puede ayudar a alguien con preguntas, sin tocarle el ratón.' },
      { id: 's13', k: 'media', t: 'El que viatja és codi|Lo que viaja es código', x: "A l'esquerra, el codi que envia el servidor. A la dreta, el que en dibuixa el navegador.|A la izquierda, el código que envía el servidor. A la derecha, lo que dibuja el navegador.", media: { k: 'web', html: HOLA },
        nota: "No cal explicar encara les etiquetes: només que el servidor envia text i el navegador el converteix en una pàgina. Les etiquetes les estudiarem a la unitat 2.|No hace falta explicar todavía las etiquetas: solo que el servidor envía texto y el navegador lo convierte en una página. Las etiquetas las estudiaremos en la unidad 2." },
      { id: 's14', k: 'repte', t: 'Reptes del viatge|Retos del viaje', timer: 10, punts: ['1. La tauleta sense internet|1. La tableta sin internet', "2. Del més proper al més llunyà|2. De lo más cercano a lo más lejano", "3. Què no forma part del viatge?|3. ¿Qué no forma parte del viaje?", '4. Quina vista prèvia fa el codi?|4. ¿Qué vista previa hace el código?'],
        nota: "Si algú s'encalla a l'ordre, que pensi en la xarxa humana: per on passava el paquet abans d'arribar al client?|Si alguien se atasca en el orden, que piense en la red humana: ¿por dónde pasaba el paquete antes de llegar al cliente?" },
      { id: 's15', k: 'activitat', t: 'Crea: la meva primera pàgina|Crea: mi primera página', timer: 5, x: "Omple els buits ___ amb paraules teves. Canvia només el text, no els signes &lt; &gt;.|Rellena los huecos ___ con palabras tuyas. Cambia solo el texto, no los signos &lt; &gt;.", code: B("<p>El meu nom de programador/a és ___.</p>", '<p>Mi nombre de programador/a es ___.</p>'),
        nota: "Recorda que facin servir un nom inventat: és una bona pràctica no posar dades personals a les webs.|Recuerda que usen un nombre inventado: es una buena práctica no poner datos personales en las webs." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ['Internet és una xarxa de xarxes.|Internet es una red de redes.', 'El navegador demana i el servidor respon.|El navegador pide y el servidor responde.', 'Les dades viatgen en paquets numerats que els routers encaminen.|Los datos viajan en paquetes numerados que los routers encaminan.'],
        nota: 'Torna a la pregunta del principi: on és una web abans que la vegem? En un servidor.|Vuelve a la pregunta del principio: ¿dónde está una web antes de que la veamos? En un servidor.' },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ['Quina diferència hi ha entre un client i un servidor?|¿Qué diferencia hay entre un cliente y un servidor?', 'Per què els paquets porten un número?|¿Por qué los paquetes llevan un número?'],
        nota: "Fes una pregunta a cada alumne/a a la porta i anota qui confon el wifi amb internet per tornar-hi la setmana vinent.|Haz una pregunta a cada alumno/a en la puerta y anota quién confunde el wifi con internet para volver a ello la semana que viene." }
    ],
    print: [
      { id: 'p1', t: 'Targetes de la xarxa humana|Tarjetas de la red humana', k: 'targetes',
        intro: "Retalleu-les. Hi ha dos missatges (A i B) de sis paquets cadascun i les targetes de rol. Cada servidor barreja els seus paquets abans d'enviar-los.|Recortadlas. Hay dos mensajes (A y B) de seis paquetes cada uno y las tarjetas de rol. Cada servidor mezcla sus paquetes antes de enviarlos.",
        items: [
          { t: 'A · 1 de 6 · Les 📨|A · 1 de 6 · Las 📨', n: 1 }, { t: 'A · 2 de 6 · pàgines 📨|A · 2 de 6 · páginas 📨', n: 1 }, { t: 'A · 3 de 6 · viatgen 📨|A · 3 de 6 · viajan 📨', n: 1 },
          { t: 'A · 4 de 6 · en 📨|A · 4 de 6 · en 📨', n: 1 }, { t: 'A · 5 de 6 · paquets 📨|A · 5 de 6 · paquetes 📨', n: 1 }, { t: 'A · 6 de 6 · numerats 📨|A · 6 de 6 · numerados 📨', n: 1 },
          { t: 'B · 1 de 6 · Si 📨|B · 1 de 6 · Si 📨', n: 1 }, { t: 'B · 2 de 6 · falla 📨|B · 2 de 6 · falla 📨', n: 1 }, { t: 'B · 3 de 6 · un 📨|B · 3 de 6 · un 📨', n: 1 },
          { t: 'B · 4 de 6 · camí, 📨|B · 4 de 6 · camino, 📨', n: 1 }, { t: 'B · 5 de 6 · en busquem 📨|B · 5 de 6 · buscamos 📨', n: 1 }, { t: 'B · 6 de 6 · un altre 📨|B · 6 de 6 · otro 📨', n: 1 },
          { t: 'Servidor 🤖|Servidor 🤖', n: 2 }, { t: 'Client · navegador 🔍|Cliente · navegador 🔍', n: 2 }, { t: 'Router 🔁|Router 🔁', n: 6 }
        ] },
      { id: 'p2', t: "Fitxa: el viatge d'una pàgina|Ficha: el viaje de una página", k: 'fitxa',
        intro: "Respon amb les teves paraules. Pots fer servir el dibuix de la xarxa humana de la pissarra.|Responde con tus palabras. Puedes usar el dibujo de la red humana de la pizarra.",
        items: [
          { q: "Què és internet? Explica-ho amb una frase.|¿Qué es internet? Explícalo con una frase.", sol: "Una xarxa de xarxes: milions de xarxes d'ordinadors de tot el món connectades entre elles.|Una red de redes: millones de redes de ordenadores de todo el mundo conectadas entre ellas." },
          { q: 'Quina diferència hi ha entre el wifi i internet?|¿Qué diferencia hay entre el wifi e internet?', sol: "El wifi connecta l'aparell amb el router de casa; internet és la xarxa que hi ha darrere del router.|El wifi conecta el aparato con el router de casa; internet es la red que hay detrás del router." },
          { q: "Qui fa la petició i qui envia la resposta quan obres una web?|¿Quién hace la petición y quién envía la respuesta cuando abres una web?", sol: 'El navegador (client) fa la petició i el servidor envia la resposta.|El navegador (cliente) hace la petición y el servidor envía la respuesta.' },
          { q: 'Per què els paquets porten un número?|¿Por qué los paquetes llevan un número?', sol: "Per tornar-los a posar en ordre en arribar i saber si en falta algun.|Para volver a ponerlos en orden al llegar y saber si falta alguno." },
          { q: "Dibuixa dos camins diferents perquè un paquet vagi del client al servidor.|Dibuja dos caminos diferentes para que un paquete vaya del cliente al servidor.", sol: "Qualsevol dibuix amb dos recorreguts diferents per routers connectats.|Cualquier dibujo con dos recorridos diferentes por routers conectados.", big: true }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Adreces i dominis ---------- */
  'w1-2': {
    obj: [
      "L'alumne/a reconeix una adreça IP ben escrita (quatre números de 0 a 255 separats per punts) i n'explica la funció.|El alumno/a reconoce una dirección IP bien escrita (cuatro números de 0 a 255 separados por puntos) y explica su función.",
      "L'alumne/a explica que el DNS tradueix un domini a una adreça IP, amb la comparació de l'agenda.|El alumno/a explica que el DNS traduce un dominio a una dirección IP, con la comparación de la agenda.",
      "L'alumne/a identifica el protocol, el domini i el camí d'una URL i sap què indica el https.|El alumno/a identifica el protocolo, el dominio y la ruta de una URL y sabe qué indica el https.",
      "L'alumne/a edita una pàgina senzilla per afegir-hi dades i noves línies a una llista.|El alumno/a edita una página sencilla para añadir datos y nuevas líneas a una lista."
    ],
    comp: [
      "Competència digital: interpretar adreces web i reconèixer els elements d'una URL|Competencia digital: interpretar direcciones web y reconocer los elementos de una URL",
      "Tecnologia i digitalització: adreçament a les xarxes (IP) i sistema de noms de domini (DNS)|Tecnología y digitalización: direccionamiento en las redes (IP) y sistema de nombres de dominio (DNS)",
      "Ciutadania digital: fixar-se en l'adreça per evitar webs falses amb noms semblants|Ciudadanía digital: fijarse en la dirección para evitar webs falsas con nombres parecidos",
      "Matemàtiques: nombres naturals dins d'un interval (de 0 a 255) i estructura d'un codi|Matemáticas: números naturales dentro de un intervalo (de 0 a 255) y estructura de un código"
    ],
    vocab: [
      ['Adreça IP|Dirección IP', "Els números que diuen on és un aparell a internet, com 203.0.113.25.|Los números que dicen dónde está un aparato en internet, como 203.0.113.25."],
      ['Domini|Dominio', "El nom fàcil de recordar d'una web, com fotonuvi.numi.|El nombre fácil de recordar de una web, como fotonuvi.numi."],
      ['DNS|DNS', "El servei que tradueix un domini a la seva adreça IP, com una agenda.|El servicio que traduce un dominio a su dirección IP, como una agenda."],
      ['URL|URL', "L'adreça completa d'una pàgina: protocol, domini i camí.|La dirección completa de una página: protocolo, dominio y ruta."],
      ['Protocol (https)|Protocolo (https)', 'Les normes per parlar amb el servidor; la s vol dir que va xifrat.|Las normas para hablar con el servidor; la s quiere decir que va cifrado.'],
      ['Navegador|Navegador', 'El programa que llegeix la URL, demana la pàgina i la dibuixa.|El programa que lee la URL, pide la página y la dibuja.']
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Adreces i dominis»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Direcciones y dominios»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        'Les targetes de «Troba el servidor» retallades i cinta adhesiva per enganxar les adreces IP a la roba|Las tarjetas de «Encuentra el servidor» recortadas y cinta adhesiva para pegar las direcciones IP en la ropa'
      ],
      imprimir: ['Targetes: troba el servidor|Tarjetas: encuentra el servidor', "Fitxa: les parts d'una URL|Ficha: las partes de una URL"],
      prep: [
        "Imprimir i retallar les targetes: les adreces IP dels servidors, les fitxes de l'agenda DNS i les peticions dels navegadors.|Imprimir y recortar las tarjetas: las direcciones IP de los servidores, las fichas de la agenda DNS y las peticiones de los navegadores.",
        "Preparar per a cada servidor un petit dibuix o una paraula que farà de «pàgina» (per exemple, el dibuix d'una pizza per a pizzes.numi).|Preparar para cada servidor un pequeño dibujo o una palabra que hará de «página» (por ejemplo, el dibujo de una pizza para pizzes.numi).",
        "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada.",
        "Imprimir una fitxa de la URL per alumne/a per al bloc de tancament o per a casa.|Imprimir una ficha de la URL por alumno/a para el bloque de cierre o para casa."
      ]
    },
    plan: [
      { min: 5, t: 'Repàs: el viatge|Repaso: el viaje', fase: 'inici',
        fa: "Repassa en veu alta el viatge de la sessió anterior amb la diapositiva de repàs. Després planteja el misteri: els ordinadors es troben per números, però nosaltres escrivim noms. Com pot ser?|Repasa en voz alta el viaje de la sesión anterior con la diapositiva de repaso. Después plantea el misterio: los ordenadores se encuentran por números, pero nosotros escribimos nombres. ¿Cómo puede ser?",
        diu: ["Qui em recorda què fa un router?|¿Quién me recuerda qué hace un router?", "Si els ordinadors es troben per números, per què nosaltres escrivim noms?|Si los ordenadores se encuentran por números, ¿por qué nosotros escribimos nombres?"],
        slides: ['s1', 's2', 's3'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 10, t: 'IP, domini, DNS i URL|IP, dominio, DNS y URL', fase: 'teoria',
        fa: "Explica l'adreça IP com l'adreça d'una casa i fes notar els quatre números de 0 a 255. Presenta el domini i el DNS amb l'agenda de contactes del mòbil. Desmunta una URL a la pissarra en tres colors i explica la s del https i el candau, amb el matís que el candau no garanteix que la web sigui de fiar.|Explica la dirección IP como la dirección de una casa y haz notar los cuatro números de 0 a 255. Presenta el dominio y el DNS con la agenda de contactos del móvil. Desmonta una URL en la pizarra en tres colores y explica la s del https y el candado, con el matiz de que el candado no garantiza que la web sea de fiar.",
        diu: ["Us sabeu de memòria el número de telèfon de tots els vostres contactes? Per això existeix l'agenda.|¿Os sabéis de memoria el número de teléfono de todos vuestros contactos? Por eso existe la agenda.",
          "Aquesta IP és bona? 198.51.300.7. Per què no?|¿Esta IP es buena? 198.51.300.7. ¿Por qué no?",
          "On acaba el domini i on comença el camí? Busqueu la primera barra.|¿Dónde acaba el dominio y dónde empieza la ruta? Buscad la primera barra."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: 'Troba el servidor|Encuentra el servidor', fase: 'desconnectat',
        fa: "Sis alumnes fan de servidors: s'enganxen a la roba una adreça IP i tenen la «pàgina» (un dibuix). Dos alumnes fan de DNS i tenen les fitxes de l'agenda. La resta fan de navegadors: reben una petició amb un domini, han de preguntar la IP al DNS i anar a buscar la pàgina al servidor correcte. Dues peticions tenen el domini mal escrit: el DNS ha de respondre que no el troba. Feu dues rondes i canvieu els papers.|Seis alumnos hacen de servidores: se pegan en la ropa una dirección IP y tienen la «página» (un dibujo). Dos alumnos hacen de DNS y tienen las fichas de la agenda. El resto hacen de navegadores: reciben una petición con un dominio, tienen que preguntar la IP al DNS e ir a buscar la página al servidor correcto. Dos peticiones tienen el dominio mal escrito: el DNS tiene que responder que no lo encuentra. Haced dos rondas y cambiad los papeles.",
        diu: ["Navegadors: no podeu anar directament al servidor, primer heu de preguntar al DNS!|Navegadores: no podéis ir directamente al servidor, ¡primero tenéis que preguntar al DNS!",
          "DNS: si el domini no és exactament igual al de l'agenda, no el trobeu.|DNS: si el dominio no es exactamente igual al de la agenda, no lo encontráis.",
          "Què ha passat amb la petició de «pizes.numi»? Per què?|¿Qué ha pasado con la petición de «pizes.numi»? ¿Por qué?"],
        slides: ['s10', 's11'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Tot el grup amb papers (servidors, DNS i navegadors)|Todo el grupo con papeles (servidores, DNS y navegadores)' },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «L'agenda DNS de casa» poden tocar «Ara no»: és per fer a casa. Fixa't en la pregunta del domini dins la URL: és la que costa més.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «La agenda DNS de casa» pueden tocar «Ahora no»: es para hacer en casa. Fíjate en la pregunta del dominio dentro de la URL: es la que cuesta más.",
        diu: ['On és la primera barra de la URL? Abans hi ha el domini.|¿Dónde está la primera barra de la URL? Antes está el dominio.', 'Compta els números de la IP: en són quatre? Cap passa de 255?|Cuenta los números de la IP: ¿son cuatro? ¿Ninguno pasa de 255?'],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: la botiga FotoNuvi, les targetes de «Descobreix», ordenar què passa quan escrius el domini, «L'agenda DNS de casa» (per a casa), les preguntes de la IP, del DNS i del domini.|De «La misión» hasta «Investiga»: la tienda FotoNuvi, las tarjetas de «Descubre», ordenar qué pasa cuando escribes el dominio, «La agenda DNS de casa» (para casa), las preguntas de la IP, del DNS y del dominio.", org: 'Individual|Individual' },
      { min: 10, t: 'Reptes: adreces i URL|Retos: direcciones y URL', fase: 'ordinador',
        fa: "Feu la pausa activa junts. Abans dels reptes, mostra el codi de la web de FotoNuvi i com el navegador el converteix en pàgina. Al repte de la lletra canviada, parla breument de les webs falses que imiten noms coneguts.|Haced la pausa activa juntos. Antes de los retos, muestra el código de la web de FotoNuvi y cómo el navegador lo convierte en página. En el reto de la letra cambiada, habla brevemente de las webs falsas que imitan nombres conocidos.",
        diu: ["Una sola lletra canviada és una altra web. Per això cal mirar bé l'adreça.|Una sola letra cambiada es otra web. Por eso hay que mirar bien la dirección.",
          'El candau vol dir que la connexió és xifrada, no que la web sigui bona.|El candado quiere decir que la conexión es cifrada, no que la web sea buena.'],
        slides: ['s13', 's14'], app: "«Pausa activa» i els reptes: la lletra canviada, construir la URL, la s del https i la web de FotoNuvi.|«Pausa activa» y los retos: la letra cambiada, construir la URL, la s del https y la web de FotoNuvi.", org: 'Tot el grup i després individual|Todo el grupo y después individual' },
      { min: 5, t: 'Crea: la meva agenda DNS|Crea: mi agenda DNS', fase: 'crea',
        fa: "Cada alumne/a afegeix dues webs inventades a la seva agenda DNS. Ensenya com copiar una línia sencera o fer servir el botó &lt;li&gt;&lt;/li&gt;. Qui acabi, que en revisi les IP: quatre números de 0 a 255.|Cada alumno/a añade dos webs inventadas a su agenda DNS. Enseña cómo copiar una línea entera o usar el botón &lt;li&gt;&lt;/li&gt;. Quien termine, que revise sus IP: cuatro números de 0 a 255.",
        diu: ["Cada línia de la llista va entre &lt;li&gt; i &lt;/li&gt;. Copieu-ne una i canvieu-ne el text.|Cada línea de la lista va entre &lt;li&gt; y &lt;/li&gt;. Copiad una y cambiad su texto."],
        slides: ['s15'], app: 'Pas «Crea»: La meva agenda DNS.|Paso «Crea»: Mi agenda DNS.', org: 'Individual|Individual' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Repassa les tres idees amb el resum i deixa que facin les preguntes finals. A la porta, fes una pregunta del tiquet a cada alumne/a. Reparteix la fitxa de la URL per fer a casa.|Repasa las tres ideas con el resumen y deja que hagan las preguntas finales. En la puerta, haz una pregunta del ticket a cada alumno/a. Reparte la ficha de la URL para hacer en casa.",
        diu: ['Quines són les tres parts d\'una URL?|¿Cuáles son las tres partes de una URL?', 'Què fa el DNS, en una frase?|¿Qué hace el DNS, en una frase?'],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ['Confon el domini amb la URL sencera.|Confunde el dominio con la URL entera.', "Que pinti la URL de tres colors: fins a les dues barres, fins a la primera barra sola, i la resta. El tros del mig és el domini.|Que pinte la URL de tres colores: hasta las dos barras, hasta la primera barra sola, y el resto. El trozo del medio es el dominio."],
      ['Accepta com a IP números més grans que 255 o amb guions.|Acepta como IP números mayores que 255 o con guiones.', "Pregunta-li quina és la regla: quants números, de quin a quin i separats per què. Que comprovi cada número.|Pregúntale cuál es la regla: cuántos números, de cuál a cuál y separados por qué. Que compruebe cada número."],
      ['Creu que el DNS guarda les webs.|Cree que el DNS guarda las webs.', "Recorda-li l'activitat: el DNS tenia les pàgines o només l'agenda? Qui les tenia?|Recuérdale la actividad: ¿el DNS tenía las páginas o solo la agenda? ¿Quién las tenía?"],
      ['Pensa que el candau vol dir que la web és de fiar.|Piensa que el candado quiere decir que la web es de fiar.', "Explica que el candau protegeix el camí (ningú no pot llegir el que s'envia), però no diu qui hi ha a l'altra banda. Ho treballarem a la unitat 7.|Explica que el candado protege el camino (nadie puede leer lo que se envía), pero no dice quién hay al otro lado. Lo trabajaremos en la unidad 7."],
      ["A l'agenda, escriu les línies noves fora de la llista.|En la agenda, escribe las líneas nuevas fuera de la lista.", "Que miri on és &lt;/ul&gt;: les línies noves han d'anar abans d'aquesta etiqueta.|Que mire dónde está &lt;/ul&gt;: las líneas nuevas tienen que ir antes de esta etiqueta."]
    ],
    diff: {
      mes: "Escriure tres URL inventades de la mateixa web amb camins diferents (per exemple, /fotos/platja.html) i explicar què canvia i què es manté. Afegir a l'agenda DNS una web amb una lletra canviada i explicar per què és una altra web.|Escribir tres URL inventadas de la misma web con rutas diferentes (por ejemplo, /fotos/platja.html) y explicar qué cambia y qué se mantiene. Añadir a la agenda DNS una web con una letra cambiada y explicar por qué es otra web.",
      menys: "Treballar amb la fitxa de la URL acolorint les tres parts abans de fer les preguntes de l'app. A l'agenda, afegir primer una sola web nova i comprovar la vista prèvia.|Trabajar con la ficha de la URL coloreando las tres partes antes de hacer las preguntas de la app. En la agenda, añadir primero una sola web nueva y comprobar la vista previa."
    },
    aval: {
      ticket: ['Digues les tres parts de la URL https://estudi.numi/cursos.html.|Di las tres partes de la URL https://estudi.numi/cursos.html.', 'Què fa el DNS quan escrius un domini?|¿Qué hace el DNS cuando escribes un dominio?'],
      rubric: [
        ['Adreça IP|Dirección IP', 'Reconeix una IP vàlida i explica per a què serveix.|Reconoce una IP válida y explica para qué sirve.', 'Sap que és un número, però no en reconeix el format.|Sabe que es un número, pero no reconoce su formato.'],
        ['DNS|DNS', "Explica que tradueix el domini a una IP abans de demanar la pàgina.|Explica que traduce el dominio a una IP antes de pedir la página.", "Associa el DNS a les adreces, però no sap en quin moment actua.|Asocia el DNS a las direcciones, pero no sabe en qué momento actúa."],
        ['URL|URL', 'Separa protocol, domini i camí en qualsevol URL.|Separa protocolo, dominio y ruta en cualquier URL.', 'Troba el domini, però confon el protocol o el camí.|Encuentra el dominio, pero confunde el protocolo o la ruta.']
      ]
    },
    casa: "A casa podeu fer «L'agenda DNS de casa» i la fitxa de les parts d'una URL. També podeu mirar la barra d'adreces del navegador amb una persona adulta i buscar-hi el protocol, el domini, el camí i el candau.|En casa podéis hacer «La agenda DNS de casa» y la ficha de las partes de una URL. También podéis mirar la barra de direcciones del navegador con una persona adulta y buscar el protocolo, el dominio, la ruta y el candado.",
    slides: [
      { id: 's1', k: 'portada', t: 'Adreces i dominis|Direcciones y dominios', x: "Com troba el navegador una web entre milions?|¿Cómo encuentra el navegador una web entre millones?",
        nota: "Presenta l'objectiu: entendre què passa entre que escrius una adreça i que la pàgina arriba.|Presenta el objetivo: entender qué pasa entre que escribes una dirección y que la página llega." },
      { id: 's2', k: 'repas', t: 'Repàs: el viatge d\'una pàgina|Repaso: el viaje de una página', anim: 'w1cs', punts: ['El navegador fa la petició.|El navegador hace la petición.', 'El servidor respon amb la pàgina.|El servidor responde con la página.', 'Viatja en paquets numerats.|Viaja en paquetes numerados.'],
        nota: "Demana a tres alumnes que expliquin cadascun un pas. Si algú confon el router amb el servidor, aclareix-ho ara.|Pide a tres alumnos que expliquen cada uno un paso. Si alguien confunde el router con el servidor, acláralo ahora." },
      { id: 's3', k: 'pregunta', t: 'Noms o números?|¿Nombres o números?', x: "Els ordinadors es troben per números. Nosaltres escrivim noms com fotonuvi.numi. Qui fa la traducció?|Los ordenadores se encuentran por números. Nosotros escribimos nombres como fotonuvi.numi. ¿Quién hace la traducción?",
        nota: "Recull idees. Algú potser dirà «el navegador» o «Google»: digues que hi ha un servei especial que ho fa, i que ara el coneixerem.|Recoge ideas. Alguien quizá dirá «el navegador» o «un buscador»: di que hay un servicio especial que lo hace, y que ahora lo conoceremos." },
      { id: 's4', k: 'anim', t: "L'adreça IP|La dirección IP", anim: 'w1ip', x: "Cada aparell té la seva adreça IP: quatre números de 0 a 255.|Cada aparato tiene su dirección IP: cuatro números de 0 a 255.",
        nota: "Compara-la amb l'adreça postal d'una casa: sense adreça, el carter no sap on portar la carta. Cada paquet porta la IP de destí i la d'origen.|Compárala con la dirección postal de una casa: sin dirección, el cartero no sabe dónde llevar la carta. Cada paquete lleva la IP de destino y la de origen." },
      { id: 's5', k: 'pregunta', t: 'És una IP vàlida?|¿Es una IP válida?', punts: ['203.0.113.25', '198.51.300.7', '10.0.0', '198.51.100.8'],
        nota: "Vàlides: la primera i l'última. La segona té un 300 (més de 255) i la tercera només té tres números.|Válidas: la primera y la última. La segunda tiene un 300 (más de 255) y la tercera solo tiene tres números." },
      { id: 's6', k: 'anim', t: "El DNS, l'agenda d'internet|El DNS, la agenda de internet", anim: 'w1dns', x: "1. Pregunta al DNS · 2. Rep la IP · 3. Demana la web · 4. Arriba la pàgina|1. Pregunta al DNS · 2. Recibe la IP · 3. Pide la web · 4. Llega la página",
        nota: "Fes la comparació amb l'agenda del mòbil: busques un nom i el mòbil truca a un número. El DNS fa el mateix amb els dominis.|Haz la comparación con la agenda del móvil: buscas un nombre y el móvil llama a un número. El DNS hace lo mismo con los dominios." },
      { id: 's7', k: 'anim', t: "Les parts d'una URL|Las partes de una URL", anim: 'w1url', x: "protocol · domini · camí|protocolo · dominio · ruta",
        nota: "Escriu la URL a la pissarra i pinta cada part d'un color. Pregunta què canviaria si volguéssim la pàgina dels gossos de la mateixa web.|Escribe la URL en la pizarra y pinta cada parte de un color. Pregunta qué cambiaría si quisiéramos la página de los perros de la misma web." },
      { id: 's8', k: 'concepte', t: 'El candau del https|El candado del https', punts: ['La s vol dir «segur»: la connexió va xifrada.|La s quiere decir «seguro»: la conexión va cifrada.', 'Ningú pel camí no pot llegir el que envies.|Nadie por el camino puede leer lo que envías.', 'Però el candau no diu si la web és de fiar!|¡Pero el candado no dice si la web es de fiar!'], anim: 'w1url',
        nota: "Remarca l'última idea: una web falsa també pot tenir candau. Ho treballarem a fons a la unitat 7, «Detecta la web falsa».|Remarca la última idea: una web falsa también puede tener candado. Lo trabajaremos a fondo en la unidad 7, «Detecta la web falsa»." },
      { id: 's9', k: 'pregunta', t: 'Una lletra de diferència|Una letra de diferencia', x: 'fotonuvi.numi · fotonubi.numi · fotonuvi.numl', punts: ['Són la mateixa web?|¿Son la misma web?', 'Per què ho fan algunes webs falses?|¿Por qué lo hacen algunas webs falsas?'],
        nota: "Per al DNS, cada nom és diferent. Hi ha webs falses que fan servir noms gairebé iguals per enganyar: cal mirar l'adreça amb calma.|Para el DNS, cada nombre es diferente. Hay webs falsas que usan nombres casi iguales para engañar: hay que mirar la dirección con calma." },
      { id: 's10', k: 'activitat', t: 'Troba el servidor|Encuentra el servidor', timer: 12, punts: ["Servidors: porteu la vostra IP enganxada i guardeu la «pàgina».|Servidores: llevad vuestra IP pegada y guardad la «página».", "DNS: teniu l'agenda. Només responeu si el domini és exacte.|DNS: tenéis la agenda. Solo respondéis si el dominio es exacto.", 'Navegadors: primer pregunteu al DNS, després aneu al servidor.|Navegadores: primero preguntad al DNS, después id al servidor.', 'Torneu amb la pàgina i expliqueu el camí que heu fet.|Volved con la página y explicad el camino que habéis hecho.'],
        nota: "Assegura't que hi hagi dues peticions amb el domini mal escrit. Quan tornin sense pàgina, comenteu-ho amb tot el grup.|Asegúrate de que haya dos peticiones con el dominio mal escrito. Cuando vuelvan sin página, comentadlo con todo el grupo." },
      { id: 's11', k: 'activitat', t: 'Les regles del DNS|Las reglas del DNS', punts: ['El DNS no té les pàgines: només sap les adreces.|El DNS no tiene las páginas: solo sabe las direcciones.', 'Si el domini no és exacte, la resposta és «no el trobo».|Si el dominio no es exacto, la respuesta es «no lo encuentro».', 'Sense IP, el navegador no sap on anar.|Sin IP, el navegador no sabe dónde ir.'],
        nota: "Deixa-la projectada durant l'activitat. Al final, pregunta quin paper els ha semblat més important i per què.|Déjala proyectada durante la actividad. Al final, pregunta qué papel les ha parecido más importante y por qué." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ['Obre la sessió «Adreces i dominis».|Abre la sesión «Direcciones y dominios».', 'Fes la missió i «Descobreix».|Haz la misión y «Descubre».', "«L'agenda DNS de casa» és per a casa: toca «Ara no».|«La agenda DNS de casa» es para casa: toca «Ahora no».", 'Para a la «Pausa activa».|Para en la «Pausa activa».'],
        nota: "Passeja i para atenció a la pregunta del domini dins la URL. Demana que t'assenyalin amb el dit on acaba el domini.|Pasea y presta atención a la pregunta del dominio dentro de la URL. Pide que te señalen con el dedo dónde acaba el dominio." },
      { id: 's13', k: 'media', t: 'La web de FotoNuvi|La web de FotoNuvi', x: "El servidor de fotonuvi.numi envia aquest codi i el navegador el dibuixa.|El servidor de fotonuvi.numi envía este código y el navegador lo dibuja.", media: { k: 'web', html: FOTO },
        nota: "Fes notar que la imatge té un nom de fitxer (platja.svg): el navegador la demana a part. Ho veurem a fons la propera sessió.|Haz notar que la imagen tiene un nombre de archivo (platja.svg): el navegador la pide aparte. Lo veremos a fondo la próxima sesión." },
      { id: 's14', k: 'repte', t: 'Reptes: adreces i URL|Retos: direcciones y URL', timer: 10, punts: ['1. La lletra canviada|1. La letra cambiada', '2. Construeix la URL|2. Construye la URL', '3. La s del https|3. La s del https', '4. La web de FotoNuvi: el domini i la IP|4. La web de FotoNuvi: el dominio y la IP'],
        nota: "Al repte de la web, recorda que només han de canviar els ??? i que la llista de comprovacions els diu què falta.|En el reto de la web, recuerda que solo tienen que cambiar los ??? y que la lista de comprobaciones les dice qué falta." },
      { id: 's15', k: 'activitat', t: 'Crea: la meva agenda DNS|Crea: mi agenda DNS', timer: 5, x: 'Afegeix dues webs inventades amb la seva adreça IP.|Añade dos webs inventadas con su dirección IP.', code: '<li>pizzes.numi → 198.51.100.42</li>',
        nota: "Mostra a la pissarra com copiar una línia sencera. Recorda que cada IP ha de tenir quatre números de 0 a 255.|Muestra en la pizarra cómo copiar una línea entera. Recuerda que cada IP tiene que tener cuatro números de 0 a 255." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ['Cada aparell té una adreça IP.|Cada aparato tiene una dirección IP.', 'El DNS tradueix el domini a la IP.|El DNS traduce el dominio a la IP.', 'Una URL té protocol, domini i camí.|Una URL tiene protocolo, dominio y ruta.'],
        nota: "Torna a la pregunta del principi: qui fa la traducció dels noms als números? El DNS.|Vuelve a la pregunta del principio: ¿quién hace la traducción de los nombres a los números? El DNS." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ['Digues les tres parts de https://estudi.numi/cursos.html.|Di las tres partes de https://estudi.numi/cursos.html.', 'Què fa el DNS?|¿Qué hace el DNS?'],
        nota: "Anota qui encara confon el domini amb la URL sencera: ho repassarem a l'inici de la sessió 3.|Anota quién aún confunde el dominio con la URL entera: lo repasaremos al inicio de la sesión 3." }
    ],
    print: [
      { id: 'p1', t: 'Targetes: troba el servidor|Tarjetas: encuentra el servidor', k: 'targetes',
        intro: "Servidors: adreça IP per enganxar a la roba. DNS: les fitxes de l'agenda. Navegadors: les peticions (dues tenen el domini mal escrit, a propòsit).|Servidores: dirección IP para pegar en la ropa. DNS: las fichas de la agenda. Navegadores: las peticiones (dos tienen el dominio mal escrito, a propósito).",
        items: [
          { t: 'Servidor 198.51.100.12 🏠|Servidor 198.51.100.12 🏠', n: 1 }, { t: 'Servidor 198.51.100.40 🏠|Servidor 198.51.100.40 🏠', n: 1 }, { t: 'Servidor 203.0.113.25 🏠|Servidor 203.0.113.25 🏠', n: 1 },
          { t: 'Servidor 203.0.113.80 🏠|Servidor 203.0.113.80 🏠', n: 1 }, { t: 'Servidor 198.51.100.7 🏠|Servidor 198.51.100.7 🏠', n: 1 }, { t: 'Servidor 203.0.113.140 🏠|Servidor 203.0.113.140 🏠', n: 1 },
          { t: 'DNS: pizzes.numi → 198.51.100.12 📚|DNS: pizzes.numi → 198.51.100.12 📚', n: 1 }, { t: 'DNS: gats.numi → 198.51.100.40 📚|DNS: gats.numi → 198.51.100.40 📚', n: 1 }, { t: 'DNS: fotonuvi.numi → 203.0.113.25 📚|DNS: fotonuvi.numi → 203.0.113.25 📚', n: 1 },
          { t: 'DNS: dracs.numi → 203.0.113.80 📚|DNS: dracs.numi → 203.0.113.80 📚', n: 1 }, { t: 'DNS: estudi.numi → 198.51.100.7 📚|DNS: estudi.numi → 198.51.100.7 📚', n: 1 }, { t: 'DNS: platja.numi → 203.0.113.140 📚|DNS: platja.numi → 203.0.113.140 📚', n: 1 },
          { t: 'Vull: pizzes.numi 🔍|Quiero: pizzes.numi 🔍', n: 1 }, { t: 'Vull: gats.numi 🔍|Quiero: gats.numi 🔍', n: 1 }, { t: 'Vull: fotonuvi.numi 🔍|Quiero: fotonuvi.numi 🔍', n: 1 },
          { t: 'Vull: dracs.numi 🔍|Quiero: dracs.numi 🔍', n: 1 }, { t: 'Vull: estudi.numi 🔍|Quiero: estudi.numi 🔍', n: 1 }, { t: 'Vull: platja.numi 🔍|Quiero: platja.numi 🔍', n: 1 },
          { t: 'Vull: pizes.numi 🔍|Quiero: pizes.numi 🔍', n: 1 }, { t: 'Vull: fotonubi.numi 🔍|Quiero: fotonubi.numi 🔍', n: 1 }
        ] },
      { id: 'p2', t: "Fitxa: les parts d'una URL|Ficha: las partes de una URL", k: 'fitxa',
        intro: "Pinta el protocol de verd, el domini de blau i el camí de taronja. Després respon.|Pinta el protocolo de verde, el dominio de azul y la ruta de naranja. Después responde.",
        items: [
          { q: 'https://fotonuvi.numi/botiga.html — quin és el domini?|https://fotonuvi.numi/botiga.html — ¿cuál es el dominio?', sol: 'fotonuvi.numi|fotonuvi.numi' },
          { q: 'https://exemple.numi/animals/gats.html — quin és el camí?|https://exemple.numi/animals/gats.html — ¿cuál es la ruta?', sol: '/animals/gats.html|/animals/gats.html' },
          { q: "Escriu la URL de la pàgina contacte.html de la web estudi.numi, amb connexió segura.|Escribe la URL de la página contacte.html de la web estudi.numi, con conexión segura.", sol: 'https://estudi.numi/contacte.html|https://estudi.numi/contacte.html' },
          { q: 'Encercla les IP vàlides: 203.0.113.25 · 198.51.256.1 · 198.51.100 · 198.51.100.99|Rodea las IP válidas: 203.0.113.25 · 198.51.256.1 · 198.51.100 · 198.51.100.99', sol: '203.0.113.25 i 198.51.100.99 (256 és més gran que 255 i a 198.51.100 li falta un número).|203.0.113.25 y 198.51.100.99 (256 es mayor que 255 y a 198.51.100 le falta un número).' },
          { q: "Per què és important mirar bé el domini abans d'escriure-hi una contrasenya?|¿Por qué es importante mirar bien el dominio antes de escribir una contraseña?", sol: "Perquè una lletra canviada pot ser una web falsa que imita la de veritat.|Porque una letra cambiada puede ser una web falsa que imita la de verdad." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Què hi ha dins una web? ---------- */
  'w1-3': {
    obj: [
      "L'alumne/a explica que una web són fitxers de text (HTML i CSS) i imatges que el navegador converteix en una pàgina.|El alumno/a explica que una web son archivos de texto (HTML y CSS) e imágenes que el navegador convierte en una página.",
      "L'alumne/a distingeix el que és contingut (HTML), aspecte (CSS) i fitxer d'imatge en un tros de codi.|El alumno/a distingue lo que es contenido (HTML), aspecto (CSS) y archivo de imagen en un trozo de código.",
      "L'alumne/a prediu la vista prèvia d'un codi senzill amb HTML i CSS.|El alumno/a predice la vista previa de un código sencillo con HTML y CSS.",
      "L'alumne/a modifica el text, el color i la imatge d'una pàgina, i hi escriu un alt que descriu la imatge.|El alumno/a modifica el texto, el color y la imagen de una página, y escribe un alt que describe la imagen."
    ],
    comp: [
      "Competència digital: creació de continguts digitals senzills modificant codi real|Competencia digital: creación de contenidos digitales sencillos modificando código real",
      "Tecnologia i digitalització: llenguatges de marques (HTML) i d'estil (CSS)|Tecnología y digitalización: lenguajes de marcado (HTML) y de estilo (CSS)",
      "Ciutadania digital: accessibilitat, el text alternatiu de les imatges|Ciudadanía digital: accesibilidad, el texto alternativo de las imágenes",
      "Llengua: escriure frases breus i precises per a un públic|Lengua: escribir frases breves y precisas para un público"
    ],
    vocab: [
      ['HTML|HTML', "El llenguatge que diu què hi ha a la pàgina: títols, paràgrafs, imatges…|El lenguaje que dice qué hay en la página: títulos, párrafos, imágenes…"],
      ['CSS|CSS', "El llenguatge que diu com es veu: colors, mides, lletra…|El lenguaje que dice cómo se ve: colores, tamaños, letra…"],
      ['Etiqueta|Etiqueta', "Una marca de l'HTML entre &lt; i &gt;, com &lt;h1&gt;, que obre o tanca un element.|Una marca del HTML entre &lt; y &gt;, como &lt;h1&gt;, que abre o cierra un elemento."],
      ['Regla CSS|Regla CSS', 'Diu a quines etiquetes s\'aplica i què canvia: h1 { color: red; }.|Dice a qué etiquetas se aplica y qué cambia: h1 { color: red; }.'],
      ['src i alt|src y alt', "On és el fitxer de la imatge i el text que la descriu.|Dónde está el archivo de la imagen y el texto que la describe."],
      ['Codi font|Código fuente', 'El text amb el codi de la pàgina que rep el navegador.|El texto con el código de la página que recibe el navegador.']
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Què hi ha dins una web?»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «¿Qué hay dentro de una web?»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        'Llapis de colors i dos fulls en blanc per parella|Lápices de colores y dos hojas en blanco por pareja'
      ],
      imprimir: ['Fitxa: el navegador humà|Ficha: el navegador humano', 'Targetes: HTML, CSS o imatge?|Tarjetas: ¿HTML, CSS o imagen?'],
      prep: [
        "Imprimir una fitxa del navegador humà per parella i un lot de targetes de classificar per grup de 4.|Imprimir una ficha del navegador humano por pareja y un lote de tarjetas de clasificar por grupo de 4.",
        "Si podeu, preparar en un ordinador del professor/a una web qualsevol amb l'opció de veure el codi font oberta, per ensenyar-la al principi.|Si podéis, preparar en un ordenador del profesor/a una web cualquiera con la opción de ver el código fuente abierta, para enseñarla al principio.",
        "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada.",
        "Provar els tres reptes de codi per saber quins errors poden sortir (per exemple, esborrar una cometa).|Probar los tres retos de código para saber qué errores pueden salir (por ejemplo, borrar una comilla)."
      ]
    },
    plan: [
      { min: 5, t: 'Repàs i pregunta|Repaso y pregunta', fase: 'inici',
        fa: "Repassa la URL i el DNS amb dues preguntes ràpides. Després pregunta què creuen que hi ha dins dels paquets: una foto de la pàgina? Si tens preparada una web amb el codi font obert, ensenya-la: és text!|Repasa la URL y el DNS con dos preguntas rápidas. Después pregunta qué creen que hay dentro de los paquetes: ¿una foto de la página? Si tienes preparada una web con el código fuente abierto, enséñala: ¡es texto!",
        diu: ['Què viatja dins dels paquets: una foto de la pàgina o una altra cosa?|¿Qué viaja dentro de los paquetes: una foto de la página u otra cosa?', 'Això que veieu és el codi font d\'una web de veritat.|Esto que veis es el código fuente de una web de verdad.'],
        slides: ['s1', 's2', 's3'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 10, t: 'HTML, CSS i imatges|HTML, CSS e imágenes', fase: 'teoria',
        fa: "Explica amb l'animació què arriba al navegador i en quin ordre. Mostra les demos: el mateix HTML sense CSS i amb CSS, i una imatge amb src i alt. Classifiqueu junts unes quantes targetes (HTML, CSS o imatge) per comprovar que ho distingeixen. Remarca la importància de l'alt per a les persones que fan servir un lector de pantalla.|Explica con la animación qué llega al navegador y en qué orden. Muestra las demos: el mismo HTML sin CSS y con CSS, y una imagen con src y alt. Clasificad juntos unas cuantas tarjetas (HTML, CSS o imagen) para comprobar que lo distinguen. Remarca la importancia del alt para las personas que usan un lector de pantalla.",
        diu: ["L'HTML diu què hi ha; el CSS diu com es veu.|El HTML dice qué hay; el CSS dice cómo se ve.", "Si la imatge no carrega, què es veu? I què sent una persona cega que fa servir un lector de pantalla?|Si la imagen no carga, ¿qué se ve? ¿Y qué oye una persona ciega que usa un lector de pantalla?",
          'Aquesta targeta és HTML, CSS o una imatge? Per què?|¿Esta tarjeta es HTML, CSS o una imagen? ¿Por qué?'],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: 'El navegador humà|El navegador humano', fase: 'desconnectat',
        fa: "Per parelles, amb la fitxa del navegador humà. Un alumne/a llegeix el codi en veu alta i l'altre fa de navegador i dibuixa la pàgina al full, amb els colors que diu el CSS. Canvien els papers a cada exercici. Al final, comparen els dibuixos amb una altra parella: han sortit iguals? Si no, quina línia s'ha entès diferent?|Por parejas, con la ficha del navegador humano. Un alumno/a lee el código en voz alta y el otro hace de navegador y dibuja la página en la hoja, con los colores que dice el CSS. Cambian los papeles en cada ejercicio. Al final, comparan los dibujos con otra pareja: ¿han salido iguales? Si no, ¿qué línea se ha entendido diferente?",
        diu: ["El navegador no endevina: dibuixa només el que diu el codi.|El navegador no adivina: dibuja solo lo que dice el código.", "Si el CSS diu p, quin text pinteu?|Si el CSS dice p, ¿qué texto pintáis?", "Compareu: on s'han equivocat els navegadors?|Comparad: ¿dónde se han equivocado los navegadores?"],
        slides: ['s10', 's11'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Per parelles que canvien de paper|Por parejas que cambian de papel' },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. Al pas «El navegador humà» poden tocar «Ho hem fet!». A la pregunta de la línia que fa el títol verd, demana que t'expliquin com ho han sabut.|Cada alumno/a avanza hasta la pausa activa. En el paso «El navegador humano» pueden tocar «¡Lo hemos hecho!». En la pregunta de la línea que hace el título verde, pide que te expliquen cómo lo han sabido.",
        diu: ['Abans de triar la vista prèvia, digues en veu baixa què ha de sortir.|Antes de elegir la vista previa, di en voz baja qué tiene que salir.', 'Quina línia té les claus { }? Aquesta és CSS.|¿Qué línea tiene las llaves { }? Esta es CSS.'],
        slides: ['s12'], app: "De «La missió» fins a «Prova»: les targetes de «Descobreix», ordenar com treballa el navegador, «El navegador humà» (ja fet), la vista prèvia de les pizzes, la línia del títol verd i on és la imatge.|De «La misión» hasta «Prueba»: las tarjetas de «Descubre», ordenar cómo trabaja el navegador, «El navegador humano» (ya hecho), la vista previa de las pizzas, la línea del título verde y dónde está la imagen.", org: 'Individual|Individual' },
      { min: 10, t: 'Reptes de codi|Retos de código', fase: 'ordinador',
        fa: "Feu la pausa activa. Després, projecta el primer repte i fes-lo en directe: canvia «Títol» per un nom i mostra com es marquen les comprovacions. Deixa'ls fer els tres reptes de codi i la vista prèvia de la platja. Si algú trenca una etiqueta, que llegeixi el missatge taronja.|Haced la pausa activa. Después, proyecta el primer reto y hazlo en directo: cambia «Título» por un nombre y muestra cómo se marcan las comprobaciones. Déjalos hacer los tres retos de código y la vista previa de la playa. Si alguien rompe una etiqueta, que lea el mensaje naranja.",
        diu: ["Canvieu només el que hi ha entre les etiquetes.|Cambiad solo lo que hay entre las etiquetas.", "Els noms dels colors van en anglès: red, green, purple…|Los nombres de los colores van en inglés: red, green, purple…", "L'alt ha de dir què es veu, com si ho expliquéssiu per telèfon.|El alt tiene que decir qué se ve, como si lo explicarais por teléfono."],
        slides: ['s13', 's14'], app: "«Pausa activa» i els reptes: el títol i la frase, el color del drac, canviar la imatge i l'alt, i la vista prèvia de la platja.|«Pausa activa» y los retos: el título y la frase, el color del dragón, cambiar la imagen y el alt, y la vista previa de la playa.", org: 'Tot el grup i després individual|Todo el grupo y después individual' },
      { min: 5, t: 'Crea: la fitxa del meu animal|Crea: la ficha de mi animal', fase: 'crea',
        fa: "Cada alumne/a fa la fitxa del seu animal preferit: títol, imatge, alt, dues frases i color. Quan la desin, en parelles es miren les fitxes i comproven si l'alt descriu bé la imatge.|Cada alumno/a hace la ficha de su animal preferido: título, imagen, alt, dos frases y color. Cuando la guarden, por parejas se miran las fichas y comprueban si el alt describe bien la imagen.",
        diu: ["Tria un color que es llegeixi bé sobre el fons blanc.|Elige un color que se lea bien sobre el fondo blanco.", "Llegeix l'alt del company/a amb els ulls tancats: t'imagines la imatge?|Lee el alt del compañero/a con los ojos cerrados: ¿te imaginas la imagen?"],
        slides: ['s15'], app: 'Pas «Crea»: La fitxa del meu animal.|Paso «Crea»: La ficha de mi animal.', org: 'Individual i després per parelles|Individual y después por parejas' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Repassa les tres idees amb el resum. Deixa que facin les preguntes finals i, a la porta, fes una pregunta del tiquet a cada alumne/a.|Repasa las tres ideas con el resumen. Deja que hagan las preguntas finales y, en la puerta, haz una pregunta del ticket a cada alumno/a.",
        diu: ["Què fa l'HTML i què fa el CSS?|¿Qué hace el HTML y qué hace el CSS?", "Per a què serveix l'alt d'una imatge?|¿Para qué sirve el alt de una imagen?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ["Esborra un &lt; o un &gt; quan canvia el text i la pàgina es desfà.|Borra un &lt; o un &gt; cuando cambia el texto y la página se deshace.", "Que llegeixi el missatge taronja de sota l'editor: diu la línia i l'etiqueta. Pot desfer el canvi amb Ctrl+Z.|Que lea el mensaje naranja debajo del editor: dice la línea y la etiqueta. Puede deshacer el cambio con Ctrl+Z."],
      ['Escriu el color en català o en castellà (vermell, rojo).|Escribe el color en catalán o en castellano (vermell, rojo).', "Recorda-li que el CSS fa servir els noms en anglès. Que en triï un de la llista de l'enunciat.|Recuérdale que el CSS usa los nombres en inglés. Que elija uno de la lista del enunciado."],
      ['Esborra els dos punts o el punt i coma de la regla CSS.|Borra los dos puntos o el punto y coma de la regla CSS.', "Que compari la seva línia amb la de la pista: propietat, dos punts, valor i punt i coma.|Que compare su línea con la de la pista: propiedad, dos puntos, valor y punto y coma."],
      ["A src escriu el nom de l'animal en lloc del nom del fitxer (gat en lloc de gat.svg).|En src escribe el nombre del animal en lugar del nombre del archivo (gat en lugar de gat.svg).", "Pregunta-li com es diu exactament el fitxer al servidor. Que miri la llista de l'enunciat: tots acaben en .svg.|Pregúntale cómo se llama exactamente el archivo en el servidor. Que mire la lista del enunciado: todos acaban en .svg."],
      ["L'alt diu «imatge» o «foto» i no descriu res.|El alt dice «imagen» o «foto» y no describe nada.", "Demana-li que expliqui la imatge a algú que no la veu: aquesta frase és l'alt.|Pídele que explique la imagen a alguien que no la ve: esa frase es el alt."]
    ],
    diff: {
      mes: "Afegir a la fitxa de l'animal una regla CSS per al paràgraf (p { color: …; }) i un tercer paràgraf. Explicar a un company/a per què l'HTML i el CSS es guarden separats.|Añadir a la ficha del animal una regla CSS para el párrafo (p { color: …; }) y un tercer párrafo. Explicar a un compañero/a por qué el HTML y el CSS se guardan separados.",
      menys: "Tenir a la taula les targetes HTML, CSS o imatge classificades com a model. Als reptes, fer un sol canvi cada vegada i mirar la vista prèvia; fer servir «Una pista» abans de tornar a començar.|Tener en la mesa las tarjetas HTML, CSS o imagen clasificadas como modelo. En los retos, hacer un solo cambio cada vez y mirar la vista previa; usar «Una pista» antes de volver a empezar."
    },
    aval: {
      ticket: ["Digues què fa l'HTML i què fa el CSS.|Di qué hace el HTML y qué hace el CSS.", "Per a què serveix l'alt d'una imatge?|¿Para qué sirve el alt de una imagen?"],
      rubric: [
        ['HTML, CSS i imatges|HTML, CSS e imágenes', 'Classifica correctament trossos de codi i explica el paper de cadascun.|Clasifica correctamente trozos de código y explica el papel de cada uno.', 'Distingeix HTML i CSS, però no sap on és la imatge.|Distingue HTML y CSS, pero no sabe dónde está la imagen.'],
        ['Predir la vista prèvia|Predecir la vista previa', 'Encerta la vista prèvia i ho justifica amb la regla CSS.|Acierta la vista previa y lo justifica con la regla CSS.', "Encerta per descart, però no sap explicar a quina etiqueta s'aplica la regla.|Acierta por descarte, pero no sabe explicar a qué etiqueta se aplica la regla."],
        ['Modificar codi|Modificar código', "Canvia text, color i imatge sense trencar etiquetes i escriu un alt descriptiu.|Cambia texto, color e imagen sin romper etiquetas y escribe un alt descriptivo.", "Fa els canvis amb ajuda de la pista o deixa l'alt sense descriure.|Hace los cambios con ayuda de la pista o deja el alt sin describir."]
      ]
    },
    casa: "A casa, amb una persona adulta, podeu obrir una web a l'ordinador i buscar l'opció de veure el codi font: hi trobareu etiquetes com les que heu vist avui. També podeu fer «El navegador humà» amb una pàgina que inventeu.|En casa, con una persona adulta, podéis abrir una web en el ordenador y buscar la opción de ver el código fuente: encontraréis etiquetas como las que habéis visto hoy. También podéis hacer «El navegador humano» con una página que inventéis.",
    slides: [
      { id: 's1', k: 'portada', t: 'Què hi ha dins una web?|¿Qué hay dentro de una web?', x: 'Avui obrim una web per dins i en canviem coses amb codi de veritat.|Hoy abrimos una web por dentro y cambiamos cosas con código de verdad.',
        nota: "Explica que avui faran els primers canvis en codi real. Encara no cal saber totes les etiquetes: les aprendrem a la unitat 2.|Explica que hoy harán los primeros cambios en código real. Todavía no hace falta saber todas las etiquetas: las aprenderemos en la unidad 2." },
      { id: 's2', k: 'repas', t: 'Repàs: adreces i dominis|Repaso: direcciones y dominios', anim: 'w1dns', punts: ['Què fa el DNS?|¿Qué hace el DNS?', 'Quines són les parts d\'una URL?|¿Cuáles son las partes de una URL?'],
        nota: "Dues preguntes ràpides a mà alçada. Si cal, torna a pintar una URL a la pissarra.|Dos preguntas rápidas a mano alzada. Si hace falta, vuelve a pintar una URL en la pizarra." },
      { id: 's3', k: 'pregunta', t: 'Què hi ha dins dels paquets?|¿Qué hay dentro de los paquetes?', punts: ['Una foto de la pàgina?|¿Una foto de la página?', 'Text?|¿Texto?', 'Una altra cosa?|¿Otra cosa?'],
        nota: "Si pots, ensenya el codi font d'una web qualsevol. Fes notar que és text que es pot llegir.|Si puedes, enseña el código fuente de una web cualquiera. Haz notar que es texto que se puede leer." },
      { id: 's4', k: 'anim', t: 'Què arriba al navegador?|¿Qué llega al navegador?', anim: 'w1page', x: "L'HTML (què hi ha), el CSS (com es veu) i les imatges, cadascun en el seu fitxer.|El HTML (qué hay), el CSS (cómo se ve) y las imágenes, cada uno en su archivo.",
        nota: "Para l'atenció en els tres moments de l'animació: només HTML, HTML amb CSS i, al final, la imatge.|Detén la atención en los tres momentos de la animación: solo HTML, HTML con CSS y, al final, la imagen." },
      { id: 's5', k: 'media', t: "L'HTML diu què hi ha|El HTML dice qué hay", x: "Cada cosa va entre etiquetes: &lt;h1&gt; obre el títol i &lt;/h1&gt; el tanca.|Cada cosa va entre etiquetas: &lt;h1&gt; abre el título y &lt;/h1&gt; lo cierra.", media: { k: 'web', html: GATS },
        nota: "Assenyala l'etiqueta d'obrir i la de tancar. Pregunta què passaria si canviéssim el text de dins.|Señala la etiqueta de abrir y la de cerrar. Pregunta qué pasaría si cambiáramos el texto de dentro." },
      { id: 's6', k: 'media', t: 'El CSS diu com es veu|El CSS dice cómo se ve', x: 'El mateix HTML, ara amb dues regles de CSS.|El mismo HTML, ahora con dos reglas de CSS.', media: { k: 'web', html: GATS, css: 'h1 {\n  color: purple;\n}\np {\n  color: gray;\n}' },
        nota: "Compara-la amb la diapositiva anterior: l'HTML és el mateix i només ha canviat l'aspecte.|Compárala con la diapositiva anterior: el HTML es el mismo y solo ha cambiado el aspecto." },
      { id: 's7', k: 'concepte', t: 'Una regla de CSS|Una regla de CSS', punts: ['h1: a quines etiquetes (el selector)|h1: a qué etiquetas (el selector)', 'color: què canviem (la propietat)|color: qué cambiamos (la propiedad)', 'purple: com ho volem (el valor)|purple: cómo lo queremos (el valor)'], code: 'h1 {\n  color: purple;\n}',
        nota: "No cal que memoritzin els noms selector, propietat i valor: els treballarem a la unitat 4. Que es quedin amb la forma i el punt i coma.|No hace falta que memoricen los nombres selector, propiedad y valor: los trabajaremos en la unidad 4. Que se queden con la forma y el punto y coma." },
      { id: 's8', k: 'media', t: 'Les imatges són fitxers a part|Las imágenes son archivos aparte', x: "src diu on és el fitxer; alt diu què s'hi veu.|src dice dónde está el archivo; alt dice qué se ve.", media: { k: 'web', html: '<h1>La tortuga</h1>\n<img src="img/tech/web/tortuga.svg" alt="Una tortuga" width="140">' },
        nota: "Explica que l'alt el llegeixen els lectors de pantalla de les persones cegues i que es veu si la imatge no carrega. Escriure un bon alt és una manera de fer webs per a tothom.|Explica que el alt lo leen los lectores de pantalla de las personas ciegas y que se ve si la imagen no carga. Escribir un buen alt es una manera de hacer webs para todo el mundo." },
      { id: 's9', k: 'pregunta', t: 'HTML, CSS o imatge?|¿HTML, CSS o imagen?', punts: ['&lt;p&gt;Hola&lt;/p&gt;', 'p { color: red; }', 'gat.svg', '&lt;h1&gt;El bosc&lt;/h1&gt;'],
        nota: "Feu-ho a mà alçada amb tres gestos (una mà = HTML, dues = CSS, braços en quadrat = imatge). Després reparteix les targetes de classificar.|Hacedlo a mano alzada con tres gestos (una mano = HTML, dos = CSS, brazos en cuadrado = imagen). Después reparte las tarjetas de clasificar." },
      { id: 's10', k: 'activitat', t: 'El navegador humà|El navegador humano', timer: 12, punts: ['Un/a llegeix el codi de la fitxa en veu alta.|Uno/a lee el código de la ficha en voz alta.', "L'altre/a fa de navegador i dibuixa la pàgina.|El otro/a hace de navegador y dibuja la página.", 'Canvieu els papers a cada exercici.|Cambiad los papeles en cada ejercicio.', 'Compareu els dibuixos amb una altra parella.|Comparad los dibujos con otra pareja.'],
        nota: "Passeja i fixa't que respectin el CSS: si la regla és per a p, el títol no canvia de color.|Pasea y fíjate en que respeten el CSS: si la regla es para p, el título no cambia de color." },
      { id: 's11', k: 'activitat', t: 'Les regles del navegador|Las reglas del navegador', punts: ['Llegeix de dalt a baix.|Lee de arriba abajo.', 'h1 = títol gran · p = paràgraf · img = imatge|h1 = título grande · p = párrafo · img = imagen', 'Pinta només el que diu el CSS.|Pinta solo lo que dice el CSS.'],
        nota: "Deixa-la projectada durant l'activitat com a recordatori.|Déjala proyectada durante la actividad como recordatorio." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ['Obre la sessió «Què hi ha dins una web?».|Abre la sesión «¿Qué hay dentro de una web?».', 'Fes la missió i «Descobreix».|Haz la misión y «Descubre».', '«El navegador humà»: ja l\'hem fet.|«El navegador humano»: ya lo hemos hecho.', 'Para a la «Pausa activa».|Para en la «Pausa activa».'],
        nota: "A la pregunta de la vista prèvia, que diguin què ha de sortir abans de mirar les opcions.|En la pregunta de la vista previa, que digan qué tiene que salir antes de mirar las opciones." },
      { id: 's13', k: 'media', t: 'Fem el primer repte junts|Hagamos el primer reto juntos', x: "Canviem només el text que hi ha entre les etiquetes.|Cambiamos solo el texto que hay entre las etiquetas.", media: { k: 'web', html: B('<h1>La tortuga</h1>\n<p>Camina a poc a poc i porta la casa a sobre.</p>', '<h1>La tortuga</h1>\n<p>Camina despacio y lleva la casa encima.</p>') },
        nota: "Fes-lo en directe a l'app projectada i mostra com es van marcant les comprovacions. Després, deixa'ls continuar sols.|Hazlo en directo en la app proyectada y muestra cómo se van marcando las comprobaciones. Después, déjalos continuar solos." },
      { id: 's14', k: 'repte', t: 'Reptes de codi|Retos de código', timer: 10, punts: ['1. El títol i la frase|1. El título y la frase', '2. El color del drac|2. El color del dragón', "3. Una altra imatge i el seu alt|3. Otra imagen y su alt", '4. Quina vista prèvia fa?|4. ¿Qué vista previa hace?'],
        nota: "Si algú escriu el color en català, recorda-li que el CSS parla en anglès. Si trenca una etiqueta, que llegeixi el missatge taronja.|Si alguien escribe el color en catalán, recuérdale que el CSS habla en inglés. Si rompe una etiqueta, que lea el mensaje naranja." },
      { id: 's15', k: 'activitat', t: 'Crea: la fitxa del meu animal|Crea: la ficha de mi animal', timer: 5, punts: ['Títol i dues frases teves|Título y dos frases tuyas', "Imatge i un alt que la descrigui|Imagen y un alt que la describa", 'Un color nou per al títol|Un color nuevo para el título'],
        nota: "En parelles, que llegeixin l'alt del company/a amb els ulls tancats: s'imaginen la imatge?|Por parejas, que lean el alt del compañero/a con los ojos cerrados: ¿se imaginan la imagen?" },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["L'HTML diu què hi ha; el CSS, com es veu.|El HTML dice qué hay; el CSS, cómo se ve.", "Les imatges són fitxers a part (src i alt).|Las imágenes son archivos aparte (src y alt).", 'El navegador llegeix el codi i dibuixa la pàgina.|El navegador lee el código y dibuja la página.'],
        nota: "Anuncia que la setmana vinent és el projecte de la unitat: el mapa d'internet.|Anuncia que la semana que viene es el proyecto de la unidad: el mapa de internet." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Què fa l'HTML i què fa el CSS?|¿Qué hace el HTML y qué hace el CSS?", "Per a què serveix l'alt?|¿Para qué sirve el alt?"],
        nota: "Anota qui confon encara HTML i CSS per fer-li una pregunta de repàs a l'inici del projecte.|Anota quién confunde aún HTML y CSS para hacerle una pregunta de repaso al inicio del proyecto." }
    ],
    print: [
      { id: 'p1', t: 'Fitxa: el navegador humà|Ficha: el navegador humano', k: 'fitxa',
        intro: "Fes de navegador: llegeix el codi de dalt a baix i dibuixa la pàgina al requadre, amb els colors que diu el CSS.|Haz de navegador: lee el código de arriba abajo y dibuja la página en el recuadro, con los colores que dice el CSS.",
        items: [
          { q: "<code>&lt;h1&gt;El meu gos&lt;/h1&gt;</code><br><code>&lt;p&gt;Es diu Lluc i té tres anys.&lt;/p&gt;</code>|<code>&lt;h1&gt;Mi perro&lt;/h1&gt;</code><br><code>&lt;p&gt;Se llama Lluc y tiene tres años.&lt;/p&gt;</code>", sol: "Un títol gran a dalt i una frase normal a sota, tots dos negres.|Un título grande arriba y una frase normal debajo, los dos negros.", big: true },
          { q: "<code>&lt;h1&gt;El bosc&lt;/h1&gt;</code><br><code>&lt;p&gt;Hi viuen esquirols.&lt;/p&gt;</code><br>CSS: <code>h1 { color: green; }</code>|<code>&lt;h1&gt;El bosque&lt;/h1&gt;</code><br><code>&lt;p&gt;Viven ardillas.&lt;/p&gt;</code><br>CSS: <code>h1 { color: green; }</code>", sol: "El títol gran de color verd i la frase negra.|El título grande de color verde y la frase negra.", big: true },
          { q: "<code>&lt;h1&gt;La platja&lt;/h1&gt;</code><br><code>&lt;img src=\"platja.svg\" alt=\"Sorra i mar\"&gt;</code><br><code>&lt;p&gt;Fa sol.&lt;/p&gt;</code><br>CSS: <code>p { color: blue; }</code>|<code>&lt;h1&gt;La playa&lt;/h1&gt;</code><br><code>&lt;img src=\"platja.svg\" alt=\"Arena y mar\"&gt;</code><br><code>&lt;p&gt;Hace sol.&lt;/p&gt;</code><br>CSS: <code>p { color: blue; }</code>", sol: "Títol negre, a sota una imatge de la platja i, al final, la frase blava.|Título negro, debajo una imagen de la playa y, al final, la frase azul.", big: true },
          { q: "Si la imatge de l'exercici 3 no carrega, què es veurà al seu lloc?|Si la imagen del ejercicio 3 no carga, ¿qué se verá en su lugar?", sol: "El text de l'alt: «Sorra i mar».|El texto del alt: «Arena y mar»." }
        ] },
      { id: 'p2', t: 'Targetes: HTML, CSS o imatge?|Tarjetas: ¿HTML, CSS o imagen?', k: 'targetes',
        intro: "Un lot per grup. Barregeu-les i classifiqueu-les en tres piles: HTML (què hi ha), CSS (com es veu) i fitxer d'imatge.|Un lote por grupo. Mezcladlas y clasificadlas en tres pilas: HTML (qué hay), CSS (cómo se ve) y archivo de imagen.",
        items: [
          { t: '<h1>Les tortugues</h1> 🏷️|<h1>Las tortugas</h1> 🏷️', n: 1 }, { t: '<p>Viuen molts anys.</p> 🏷️|<p>Viven muchos años.</p> 🏷️', n: 1 }, { t: '<img src="gat.svg" alt="Un gat"> 🏷️|<img src="gat.svg" alt="Un gato"> 🏷️', n: 1 },
          { t: 'h1 { color: red; } 🎨|h1 { color: red; } 🎨', n: 1 }, { t: 'p { color: blue; } 🎨|p { color: blue; } 🎨', n: 1 }, { t: 'h1 { font-size: 40px; } 🎨|h1 { font-size: 40px; } 🎨', n: 1 },
          { t: 'gat.svg 🖼️|gat.svg 🖼️', n: 1 }, { t: 'platja.svg 🖼️|platja.svg 🖼️', n: 1 }, { t: 'drac.svg 🖼️|drac.svg 🖼️', n: 1 }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: el mapa d'internet ---------- */
  'w1-4': {
    obj: [
      "L'alumne/a representa en un mapa el viatge sencer d'una pàgina amb totes les peces en l'ordre correcte.|El alumno/a representa en un mapa el viaje entero de una página con todas las piezas en el orden correcto.",
      "L'alumne/a explica oralment la funció del navegador, el DNS, els routers i el servidor.|El alumno/a explica oralmente la función del navegador, el DNS, los routers y el servidor.",
      "L'alumne/a diagnostica què ha fallat en situacions senzilles (domini mal escrit, paquet perdut).|El alumno/a diagnostica qué ha fallado en situaciones sencillas (dominio mal escrito, paquete perdido).",
      "L'alumne/a completa i amplia una pàgina web que explica el mapa, amb HTML i una regla de CSS.|El alumno/a completa y amplía una página web que explica el mapa, con HTML y una regla de CSS."
    ],
    comp: [
      "Competència digital: comprensió global del funcionament d'internet i creació d'un contingut web|Competencia digital: comprensión global del funcionamiento de internet y creación de un contenido web",
      "Tecnologia i digitalització: representar un sistema tecnològic amb un esquema|Tecnología y digitalización: representar un sistema tecnológico con un esquema",
      "Educació visual i plàstica: comunicar una idea amb un mapa conceptual il·lustrat|Educación visual y plástica: comunicar una idea con un mapa conceptual ilustrado",
      "Comunicació oral: presentar un treball en equip amb vocabulari tècnic|Comunicación oral: presentar un trabajo en equipo con vocabulario técnico"
    ],
    vocab: [
      ['Mapa conceptual|Mapa conceptual', "Un dibuix amb peces i fletxes que explica com es relacionen les coses.|Un dibujo con piezas y flechas que explica cómo se relacionan las cosas."],
      ['Petició i resposta|Petición y respuesta', 'El que el navegador demana i el que el servidor torna.|Lo que el navegador pide y lo que el servidor devuelve.'],
      ['Adreça IP|Dirección IP', "Els números que diuen on és el servidor.|Los números que dicen dónde está el servidor."],
      ['DNS|DNS', "L'agenda que tradueix el domini a l'adreça IP.|La agenda que traduce el dominio a la dirección IP."],
      ['Router|Router', 'Aparell que tria per on va cada paquet.|Aparato que elige por dónde va cada paquete.']
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el mapa d'internet»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el mapa de internet»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        'Per grup de 4: un full gran (A3 o paper d\'embalar), retoladors, tisores, pega i les peces del mapa impreses|Por grupo de 4: una hoja grande (A3 o papel de embalar), rotuladores, tijeras, pegamento y las piezas del mapa impresas'
      ],
      imprimir: ["Peces del mapa d'internet|Piezas del mapa de internet", 'Fitxa: el pla del mapa|Ficha: el plan del mapa'],
      prep: [
        "Imprimir un lot de peces del mapa i una fitxa del pla per grup de 4.|Imprimir un lote de piezas del mapa y una ficha del plan por grupo de 4.",
        "Preparar un espai a la paret o al passadís per penjar els mapes al final (l'exposició).|Preparar un espacio en la pared o en el pasillo para colgar los mapas al final (la exposición).",
        "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada.",
        "Fer grups de 4 abans de la classe, barrejant alumnes que van més ràpid amb els que necessiten més suport.|Hacer grupos de 4 antes de la clase, mezclando alumnos que van más rápido con los que necesitan más apoyo."
      ]
    },
    plan: [
      { min: 5, t: "L'encàrrec de l'exposició|El encargo de la exposición", fase: 'inici',
        fa: "Presenta el projecte: un mapa en paper per grups per a l'exposició de l'escola i una web individual que l'explica. Llegiu junts els criteris d'èxit.|Presenta el proyecto: un mapa en papel por grupos para la exposición de la escuela y una web individual que lo explica. Leed juntos los criterios de éxito.",
        diu: ["El vostre mapa l'ha d'entendre algú que no ha vingut mai a classe.|Vuestro mapa lo tiene que entender alguien que no ha venido nunca a clase.", 'Mirem què ha de tenir un bon mapa.|Miremos qué tiene que tener un buen mapa.'],
        slides: ['s1', 's2', 's3'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 8, t: 'Repàs de totes les peces|Repaso de todas las piezas', fase: 'teoria',
        fa: "Repassa el viatge sencer amb les animacions. Fes una representació ràpida: assigna a cinc alumnes les peces (navegador, DNS, router de casa, router d'internet, servidor) i que facin la petició en veu alta, peça a peça. Ensenya el model de pàgina web del projecte.|Repasa el viaje entero con las animaciones. Haz una representación rápida: asigna a cinco alumnos las piezas (navegador, DNS, router de casa, router de internet, servidor) y que hagan la petición en voz alta, pieza a pieza. Enseña el modelo de página web del proyecto.",
        diu: ["Qui parla primer: el navegador o el servidor?|¿Quién habla primero: el navegador o el servidor?", "En quin moment entra el DNS?|¿En qué momento entra el DNS?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 15, t: "El mapa d'internet en paper|El mapa de internet en papel", fase: 'desconnectat',
        fa: "Per grups de 4, amb la fitxa del pla i les peces impreses. Primer decideixen la web inventada i on va cada peça (5 min); després enganxen les peces, dibuixen les fletxes numerades i escriuen una frase curta a cada fletxa (10 min). Cada membre del grup té un rol: coordinador/a, dibuixant, redactor/a i revisor/a (que comprova la llista de la fitxa).|Por grupos de 4, con la ficha del plan y las piezas impresas. Primero deciden la web inventada y dónde va cada pieza (5 min); después pegan las piezas, dibujan las flechas numeradas y escriben una frase corta en cada flecha (10 min). Cada miembro del grupo tiene un rol: coordinador/a, dibujante, redactor/a y revisor/a (que comprueba la lista de la ficha).",
        diu: ["Revisors/es: falta alguna peça de la llista?|Revisores/as: ¿falta alguna pieza de la lista?", "Hi ha fletxes d'anada i de tornada? La pàgina també ha de tornar!|¿Hay flechas de ida y de vuelta? ¡La página también tiene que volver!",
          "Si un camí es talla, el vostre mapa té un altre camí?|Si un camino se corta, ¿vuestro mapa tiene otro camino?"],
        slides: ['s8', 's9'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Grups de 4 amb rols|Grupos de 4 con roles' },
      { min: 10, t: "A l'ordinador: repàs i reptes|En el ordenador: repaso y retos", fase: 'ordinador',
        fa: "Cada alumne/a fa la part de repàs i els reptes de diagnòstic de l'app fins a la vista prèvia. Al pas «El mapa en paper» poden tocar «Ho hem fet!». Demana que justifiquin les respostes dels reptes de què ha fallat.|Cada alumno/a hace la parte de repaso y los retos de diagnóstico de la app hasta la vista previa. En el paso «El mapa en papel» pueden tocar «¡Lo hemos hecho!». Pide que justifiquen las respuestas de los retos de qué ha fallado.",
        diu: ["Per què creus que ha fallat el DNS i no el servidor?|¿Por qué crees que ha fallado el DNS y no el servidor?", 'Com sap l\'ordinador quin paquet falta?|¿Cómo sabe el ordenador qué paquete falta?'],
        slides: ['s10', 's11'], app: "Des de «La missió» fins al repte de la vista prèvia: el repàs, ordenar el viatge sencer, qui tria el camí, «El mapa en paper» (ja fet), la frase falsa, la pausa i els reptes del DNS, del paquet perdut i de la vista prèvia.|Desde «La misión» hasta el reto de la vista previa: el repaso, ordenar el viaje entero, quién elige el camino, «El mapa en papel» (ya hecho), la frase falsa, la pausa y los retos del DNS, del paquete perdido y de la vista previa.", org: 'Individual|Individual' },
      { min: 12, t: "Crea: la web del mapa d'internet|Crea: la web del mapa de internet", fase: 'crea',
        fa: "Cada alumne/a completa la web del projecte: omple els buits amb la peça correcta, escriu el seu nom de programador/a, afegeix un paràgraf amb el que li ha sorprès i tria el color del títol. Recorda'ls que comprovin la vista prèvia en mòbil i en ordinador amb els botons de dalt.|Cada alumno/a completa la web del proyecto: rellena los huecos con la pieza correcta, escribe su nombre de programador/a, añade un párrafo con lo que le ha sorprendido y elige el color del título. Recuérdales que comprueben la vista previa en móvil y en ordenador con los botones de arriba.",
        diu: ['Mireu el vostre mapa de paper: quina peça va a cada pas?|Mirad vuestro mapa de papel: ¿qué pieza va en cada paso?', "El paràgraf nou ha d'anar dins d'unes etiquetes &lt;p&gt; i &lt;/p&gt;.|El párrafo nuevo tiene que ir dentro de unas etiquetas &lt;p&gt; y &lt;/p&gt;."],
        slides: ['s12', 's13'], app: "Pas «Crea»: El mapa d'internet.|Paso «Crea»: El mapa de internet.", org: 'Individual|Individual' },
      { min: 10, t: "Exposició i tancament|Exposición y cierre", fase: 'tancament',
        fa: "Pengeu els mapes. Cada grup presenta el seu en un minut seguint el viatge amb el dit; la resta hi pot fer una pregunta. Acabeu amb les preguntes finals de l'app, el resum de la unitat i el tiquet de sortida.|Colgad los mapas. Cada grupo presenta el suyo en un minuto siguiendo el viaje con el dedo; el resto puede hacer una pregunta. Terminad con las preguntas finales de la app, el resumen de la unidad y el ticket de salida.",
        diu: ["Expliqueu el viatge com si fóssiu el paquet.|Explicad el viaje como si fuerais el paquete.", "Què us ha sorprès més d'aquesta unitat?|¿Qué os ha sorprendido más de esta unidad?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: 'Grups i tot el grup|Grupos y todo el grupo' }
    ],
    errors: [
      ['Al mapa, posa el DNS després del servidor.|En el mapa, pone el DNS después del servidor.', "Pregunta: si el navegador encara no sap l'adreça IP, com pot arribar al servidor?|Pregunta: si el navegador todavía no sabe la dirección IP, ¿cómo puede llegar al servidor?"],
      ['Dibuixa només la fletxa d\'anada i oblida la resposta.|Dibuja solo la flecha de ida y olvida la respuesta.', "Que segueixi el mapa amb el dit fent de paquet: un cop al servidor, com torna la pàgina a la pantalla?|Que siga el mapa con el dedo haciendo de paquete: una vez en el servidor, ¿cómo vuelve la página a la pantalla?"],
      ['Confon les funcions del router i del servidor a la web.|Confunde las funciones del router y del servidor en la web.', "Que miri el seu mapa de paper i la frase falsa de l'app: qui guarda les webs?|Que mire su mapa de papel y la frase falsa de la app: ¿quién guarda las webs?"],
      ['El paràgraf nou queda fora de les etiquetes &lt;p&gt; i no compta.|El párrafo nuevo queda fuera de las etiquetas &lt;p&gt; y no cuenta.', "Que toqui el botó &lt;p&gt;&lt;/p&gt; i escrigui entre les dues etiquetes, on queda el cursor.|Que toque el botón &lt;p&gt;&lt;/p&gt; y escriba entre las dos etiquetas, donde queda el cursor."],
      ["Al grup, una persona fa tota la feina.|En el grupo, una persona hace todo el trabajo.", "Recorda els rols i demana al revisor/a que comprovi que tothom ha escrit almenys una frase del mapa.|Recuerda los roles y pide al revisor/a que compruebe que todo el mundo ha escrito al menos una frase del mapa."]
    ],
    diff: {
      mes: "Afegir al mapa el viatge d'una segona web amb un camí diferent i un cable tallat. A la web, afegir una regla de CSS per als paràgrafs i un paràgraf que expliqui què és l'adreça IP.|Añadir al mapa el viaje de una segunda web con un camino diferente y un cable cortado. En la web, añadir una regla de CSS para los párrafos y un párrafo que explique qué es la dirección IP.",
      menys: "Treballar el mapa amb la fitxa del pla com a llista de passos i les peces ja retallades. A la web, omplir els buits mirant el mapa del grup i fer el paràgraf nou amb el botó &lt;p&gt;&lt;/p&gt;.|Trabajar el mapa con la ficha del plan como lista de pasos y las piezas ya recortadas. En la web, rellenar los huecos mirando el mapa del grupo y hacer el párrafo nuevo con el botón &lt;p&gt;&lt;/p&gt;."
    },
    aval: {
      ticket: ['Digues les peces del viatge d\'una pàgina en ordre.|Di las piezas del viaje de una página en orden.', "Què li diries a algú que pensa que internet és el wifi?|¿Qué le dirías a alguien que piensa que internet es el wifi?"],
      rubric: [
        ['El mapa|El mapa', "Té totes les peces en ordre, amb fletxes d'anada i tornada i frases clares.|Tiene todas las piezas en orden, con flechas de ida y vuelta y frases claras.", 'Té la majoria de peces, però falta el DNS o la resposta.|Tiene la mayoría de piezas, pero falta el DNS o la respuesta.'],
        ['Explicació oral|Explicación oral', 'Explica la funció de cada peça amb vocabulari precís.|Explica la función de cada pieza con vocabulario preciso.', "Segueix el mapa, però confon alguna funció (router i servidor).|Sigue el mapa, pero confunde alguna función (router y servidor)."],
        ['La web del projecte|La web del proyecto', "Omple tots els passos correctament, afegeix un paràgraf propi i canvia el color sense errors.|Rellena todos los pasos correctamente, añade un párrafo propio y cambia el color sin errores.", "Completa els passos amb ajuda o no arriba a afegir el paràgraf nou.|Completa los pasos con ayuda o no llega a añadir el párrafo nuevo."]
      ]
    },
    casa: "A casa podeu explicar el mapa d'internet a la família seguint el viatge amb el dit. Si la teniu a l'app, ensenyeu-los també la web del projecte i expliqueu quina part és HTML i quina és CSS.|En casa podéis explicar el mapa de internet a la familia siguiendo el viaje con el dedo. Si la tenéis en la app, enseñadles también la web del proyecto y explicad qué parte es HTML y cuál es CSS.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: el mapa d'internet|Proyecto: el mapa de internet", x: "Un mapa per a l'exposició de l'escola i una web que l'explica.|Un mapa para la exposición de la escuela y una web que lo explica.",
        nota: "Explica que és la sessió de projecte: tot el que hem après a la unitat es fa servir avui.|Explica que es la sesión de proyecto: todo lo que hemos aprendido en la unidad se usa hoy." },
      { id: 's2', k: 'concepte', t: "L'encàrrec|El encargo", pic: 'img/ment/nom.webp', punts: ['En grup: el mapa en paper, per a l\'exposició.|En grupo: el mapa en papel, para la exposición.', 'Individual: la web que explica el mapa.|Individual: la web que explica el mapa.', "Al final: presentació d'un minut per grup.|Al final: presentación de un minuto por grupo."],
        nota: "Remarca que el mapa l'ha d'entendre algú que no hagi vingut a classe: les fletxes i les frases han de ser clares.|Remarca que el mapa lo tiene que entender alguien que no haya venido a clase: las flechas y las frases tienen que ser claras." },
      { id: 's3', k: 'concepte', t: 'Criteris del mapa|Criterios del mapa', punts: ['Totes les peces: navegador, router de casa, routers, DNS i servidor.|Todas las piezas: navegador, router de casa, routers, DNS y servidor.', "Fletxes numerades d'anada i de tornada.|Flechas numeradas de ida y de vuelta.", 'Una frase curta a cada fletxa.|Una frase corta en cada flecha.', 'Un camí alternatiu per si un cable es talla.|Un camino alternativo por si un cable se corta.'],
        nota: "Deixa'ls clar que aquests criteris són els que revisarà el revisor/a de cada grup amb la fitxa del pla.|Déjales claro que estos criterios son los que revisará el revisor/a de cada grupo con la ficha del plan." },
      { id: 's4', k: 'anim', t: 'Repàs: el viatge sencer|Repaso: el viaje entero', anim: 'w1dns', x: 'Domini → DNS → IP → petició → servidor → pàgina.|Dominio → DNS → IP → petición → servidor → página.',
        nota: "Fes la representació amb cinc alumnes: cadascú diu en veu alta què fa la seva peça quan li arriba la petició.|Haz la representación con cinco alumnos: cada uno dice en voz alta qué hace su pieza cuando le llega la petición." },
      { id: 's5', k: 'anim', t: 'Repàs: paquets i camins|Repaso: paquetes y caminos', anim: 'w1route', x: 'Molts routers, molts camins: si un falla, se\'n busca un altre.|Muchos routers, muchos caminos: si uno falla, se busca otro.',
        nota: "Recorda la xarxa humana de la sessió 1. El mapa ha de mostrar que hi ha més d'un camí.|Recuerda la red humana de la sesión 1. El mapa tiene que mostrar que hay más de un camino." },
      { id: 's6', k: 'anim', t: 'Repàs: dins una web|Repaso: dentro de una web', anim: 'w1page', x: 'HTML, CSS i imatges arriben al navegador.|HTML, CSS e imágenes llegan al navegador.',
        nota: "L'últim pas del mapa: el navegador llegeix l'HTML i el CSS i dibuixa la pàgina.|El último paso del mapa: el navegador lee el HTML y el CSS y dibuja la página." },
      { id: 's7', k: 'media', t: 'Model de la web del projecte|Modelo de la web del proyecto', x: 'Així pot quedar la teva web (la teva tindrà més passos i un paràgraf teu).|Así puede quedar tu web (la tuya tendrá más pasos y un párrafo tuyo).', media: { k: 'web', html: MAPA, css: 'h1 {\n  color: teal;\n}' },
        nota: "Ensenya el model però no el deixis projectat durant la creació: cadascú ha de pensar quina peça va a cada pas.|Enseña el modelo pero no lo dejes proyectado durante la creación: cada uno tiene que pensar qué pieza va en cada paso." },
      { id: 's8', k: 'activitat', t: "El mapa d'internet en paper|El mapa de internet en papel", timer: 15, punts: ['Trieu una web inventada (per exemple, pizzes.numi).|Elegid una web inventada (por ejemplo, pizzes.numi).', 'Col·loqueu les peces i dibuixeu les fletxes numerades.|Colocad las piezas y dibujad las flechas numeradas.', 'Escriviu una frase a cada fletxa.|Escribid una frase en cada flecha.', 'El revisor/a comprova la llista de la fitxa.|El revisor/a comprueba la lista de la ficha.'],
        nota: "Passa pels grups i fes preguntes, no donis respostes: on és el DNS? per on torna la pàgina?|Pasa por los grupos y haz preguntas, no des respuestas: ¿dónde está el DNS? ¿por dónde vuelve la página?" },
      { id: 's9', k: 'activitat', t: 'Els rols del grup|Los roles del grupo', punts: ['Coordinador/a: vigila el temps i que tothom participi.|Coordinador/a: vigila el tiempo y que todo el mundo participe.', 'Dibuixant: col·loca les peces i les fletxes.|Dibujante: coloca las piezas y las flechas.', 'Redactor/a: escriu les frases de les fletxes.|Redactor/a: escribe las frases de las flechas.', 'Revisor/a: comprova els criteris amb la fitxa.|Revisor/a: comprueba los criterios con la ficha.'],
        nota: "Deixa-la projectada durant tota l'activitat.|Déjala proyectada durante toda la actividad." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre la sessió «Projecte: el mapa d'internet».|Abre la sesión «Proyecto: el mapa de internet».", 'Fes el repàs i els reptes.|Haz el repaso y los retos.', '«El mapa en paper»: ja l\'hem fet.|«El mapa en papel»: ya lo hemos hecho.', 'Para abans de «Crea».|Para antes de «Crea».'],
        nota: "Si algú acaba aviat, que repassi el mapa del grup amb el revisor/a.|Si alguien termina pronto, que repase el mapa del grupo con el revisor/a." },
      { id: 's11', k: 'repte', t: 'Què ha fallat?|¿Qué ha fallado?', punts: ['«No es pot trobar el servidor»: qui no ha trobat res?|«No se puede encontrar el servidor»: ¿quién no ha encontrado nada?', 'Falta un paquet: què fa l\'ordinador?|Falta un paquete: ¿qué hace el ordenador?', 'Una frase falsa a la web: quina és?|Una frase falsa en la web: ¿cuál es?'],
        nota: "Comenta les respostes amb el grup després dels reptes: són situacions que els passaran de debò.|Comenta las respuestas con el grupo después de los retos: son situaciones que les pasarán de verdad." },
      { id: 's12', k: 'activitat', t: "Crea: la web del mapa|Crea: la web del mapa", timer: 12, punts: ['Omple els buits ___ amb la peça correcta.|Rellena los huecos ___ con la pieza correcta.', 'Escriu el teu nom de programador/a.|Escribe tu nombre de programador/a.', "Afegeix un paràgraf amb el que t'ha sorprès.|Añade un párrafo con lo que te ha sorprendido.", 'Tria un color per al títol (CSS).|Elige un color para el título (CSS).'],
        nota: "Recorda que comprovin la vista prèvia en mòbil i en ordinador. Qui acabi pot ajudar un company/a fent-li preguntes.|Recuerda que comprueben la vista previa en móvil y en ordenador. Quien termine puede ayudar a un compañero/a haciéndole preguntas." },
      { id: 's13', k: 'concepte', t: 'Un paràgraf nou|Un párrafo nuevo', punts: ['Toca el botó &lt;p&gt;&lt;/p&gt; al final del codi.|Toca el botón &lt;p&gt;&lt;/p&gt; al final del código.', 'Escriu entre les dues etiquetes.|Escribe entre las dos etiquetas.', 'Mira la vista prèvia!|¡Mira la vista previa!'], code: B("<p>M'ha sorprès que hi hagi cables sota el mar.</p>", '<p>Me ha sorprendido que haya cables bajo el mar.</p>'),
        nota: "Projecta-la si veus que molts alumnes escriuen el paràgraf fora de les etiquetes.|Proyéctala si ves que muchos alumnos escriben el párrafo fuera de las etiquetas." },
      { id: 's14', k: 'activitat', t: 'Exposició dels mapes|Exposición de los mapas', timer: 7, punts: ['Cada grup presenta el seu mapa en un minut.|Cada grupo presenta su mapa en un minuto.', 'Seguiu el viatge amb el dit, com si fóssiu el paquet.|Seguid el viaje con el dedo, como si fuerais el paquete.', 'Una pregunta del públic per grup.|Una pregunta del público por grupo.'],
        nota: "Valora amb la rúbrica mentre presenten. Fes notar les solucions originals de cada grup.|Valora con la rúbrica mientras presentan. Haz notar las soluciones originales de cada grupo." },
      { id: 's15', k: 'resum', t: 'Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad', punts: ['Internet: una xarxa de xarxes amb servidors, routers i navegadors.|Internet: una red de redes con servidores, routers y navegadores.', 'IP, domini, DNS i URL: com es troba cada web.|IP, dominio, DNS y URL: cómo se encuentra cada web.', 'Una web és HTML, CSS i imatges.|Una web es HTML, CSS e imágenes.'],
        nota: "Anuncia la unitat 2: aprendrem les etiquetes d'HTML a fons i farem una recepta en forma de web.|Anuncia la unidad 2: aprenderemos las etiquetas de HTML a fondo y haremos una receta en forma de web." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Digues les peces del viatge d'una pàgina en ordre.|Di las piezas del viaje de una página en orden.", "Què li diries a algú que pensa que internet és el wifi?|¿Qué le dirías a alguien que piensa que internet es el wifi?"],
        nota: "Felicita'ls pel projecte i recull els mapes per a l'exposició.|Felicítalos por el proyecto y recoge los mapas para la exposición." }
    ],
    print: [
      { id: 'p1', t: "Peces del mapa d'internet|Piezas del mapa de internet", k: 'targetes',
        intro: "Un lot per grup. Retalleu les peces i enganxeu-les al full gran. Afegiu-hi fletxes numerades i una frase curta a cada fletxa.|Un lote por grupo. Recortad las piezas y pegadlas en la hoja grande. Añadid flechas numeradas y una frase corta en cada flecha.",
        items: [
          { t: 'El meu aparell i el navegador 🧒|Mi aparato y el navegador 🧒', n: 1 }, { t: 'Router de casa 🏠|Router de casa 🏠', n: 1 }, { t: "Router d'internet 🔁|Router de internet 🔁", n: 4 },
          { t: "DNS: l'agenda d'adreces 📚|DNS: la agenda de direcciones 📚", n: 1 }, { t: 'Servidor de la web 🤖|Servidor de la web 🤖', n: 1 }, { t: 'Paquet numerat 📨|Paquete numerado 📨', n: 3 },
          { t: 'Cable de fibra sota el mar 🌊|Cable de fibra bajo el mar 🌊', n: 1 }, { t: 'Cable tallat ✂️|Cable cortado ✂️', n: 1 }, { t: 'La pàgina: HTML, CSS i imatges 🖼️|La página: HTML, CSS e imágenes 🖼️', n: 1 }
        ] },
      { id: 'p2', t: 'Fitxa: el pla del mapa|Ficha: el plan del mapa', k: 'fitxa',
        intro: "Responeu en grup abans de començar el mapa. El revisor/a la fa servir al final per comprovar-lo.|Responded en grupo antes de empezar el mapa. El revisor/a la usa al final para comprobarlo.",
        items: [
          { q: "Quina web inventada viatjarà pel vostre mapa? Escriviu-ne la URL completa.|¿Qué web inventada viajará por vuestro mapa? Escribid su URL completa.", sol: "Qualsevol URL amb protocol, domini i camí, per exemple https://pizzes.numi/menu.html.|Cualquier URL con protocolo, dominio y ruta, por ejemplo https://pizzes.numi/menu.html." },
          { q: "Quina adreça IP té el servidor? (4 números de 0 a 255)|¿Qué dirección IP tiene el servidor? (4 números de 0 a 255)", sol: 'Qualsevol IP vàlida, per exemple 203.0.113.80.|Cualquier IP válida, por ejemplo 203.0.113.80.' },
          { q: "Escriviu en ordre les peces per on passa la petició.|Escribid en orden las piezas por donde pasa la petición.", sol: "Navegador → DNS (per saber la IP) → router de casa → routers d'internet → servidor.|Navegador → DNS (para saber la IP) → router de casa → routers de internet → servidor." },
          { q: 'I per on torna la pàgina?|¿Y por dónde vuelve la página?', sol: "Del servidor, en paquets, pels routers fins al router de casa i el navegador, que la dibuixa.|Del servidor, en paquetes, por los routers hasta el router de casa y el navegador, que la dibuja." },
          { q: "Revisió: hi ha totes les peces, fletxes d'anada i tornada, una frase a cada fletxa i un camí alternatiu?|Revisión: ¿están todas las piezas, flechas de ida y vuelta, una frase en cada flecha y un camino alternativo?", sol: 'Sí a tots quatre criteris.|Sí a los cuatro criterios.', big: true }
        ] }
    ]
  }
  });
})());

/* ── unitat 2 ── */
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

/* ── unitat 3 ── */
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

/* ── unitat 4 ── */
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

/* ── unitat 5 ── */
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

/* ── unitat 6 ── */
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

/* ── unitat 7 ── */
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

/* ── unitat 8 ── */
/* Tech Web · unitat 8 «La meva web» · guia del professorat (w8-1 … w8-4)
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. Les demos de web de les
   diapositives (media) porten el text de la pàgina en les dues llengües: els camps html/css són getters. */
Object.assign(TGUIDE, (() => {
  const md = m => { for (const k of ['html', 'css']) if (typeof m[k] === 'function') { const f = m[k]; Object.defineProperty(m, k, { get: f, enumerable: true }); } m.k = 'web'; return m; };
  const SKEL = () => `<header>\n  <h1>${L("L'hort de l'escola", 'El huerto de la escuela')}</h1>\n</header>\n<nav>\n  <a href="#plantes">${L('Plantes', 'Plantas')}</a>\n  <a href="#calendari">${L('Calendari', 'Calendario')}</a>\n</nav>\n<main>\n  <section id="plantes">\n    <h2>${L('Plantes', 'Plantas')}</h2>\n    <p>${L('Tomàquets, enciams i maduixes.', 'Tomates, lechugas y fresas.')}</p>\n  </section>\n</main>\n<footer>${L("Fet per la classe de l'hort", 'Hecho por la clase del huerto')}</footer>`;
  const SKEL_CSS = 'header {\n  background: #166534;\n  color: white;\n  padding: 10px;\n}\nnav a {\n  margin-right: 10px;\n}\nfooter {\n  background: #E2E8F0;\n  padding: 8px;\n}';
  const TARG = () => `<div class="targeta">\n  <h2>${L('Maduixes', 'Fresas')}</h2>\n  <img src="img/tech/web/fruita.svg" alt="${L('Un cistell de fruita', 'Una cesta de fruta')}" width="80">\n  <p>${L('Surten a la primavera.', 'Salen en primavera.')}</p>\n</div>`;
  const TARG_CSS = '.targeta {\n  background: #FFF7ED;\n  padding: 16px;\n  border-radius: 12px;\n  border: 2px solid #C2410C;\n}';
  const FILA = () => `<div class="fila">\n  <div class="llibre">${L('Dracs del nord', 'Dragones del norte')}</div>\n  <div class="llibre">${L('El misteri del far', 'El misterio del faro')}</div>\n  <div class="llibre">${L('Viatge a la Lluna', 'Viaje a la Luna')}</div>\n</div>`;
  const FILA_CSS = '.fila {\n  display: flex;\n  gap: 12px;\n}\n.llibre {\n  flex: 1;\n  background: #EEF2FF;\n  padding: 16px;\n  border-radius: 10px;\n}\n@media (max-width: 600px) {\n  .fila {\n    flex-direction: column;\n  }\n}';
  const AINA = () => `<header id="inici">\n  <h1>${L('El cel de nit', 'El cielo de noche')}</h1>\n</header>\n<main>\n  <section id="planetes">\n    <h2>${L('Els planetes', 'Los planetas')}</h2>\n    <img src="img/tech/web/planeta.svg" alt="${L('Un planeta amb anells', 'Un planeta con anillos')}" width="100">\n  </section>\n</main>\n<footer>\n  <p>${L("Web feta per l'Aina a Numi Tech. Imatges: Numi.", 'Web hecha por Aina en Numi Tech. Imágenes: Numi.')}</p>\n  <p><a href="#inici">${L('Torna a dalt', 'Vuelve arriba')}</a></p>\n</footer>`;
  const AINA_CSS = 'header {\n  background: #3730A3;\n  color: white;\n  padding: 12px;\n}\nfooter {\n  background: #E0E7FF;\n  padding: 10px;\n}';
  const G = {};

  /* ---------- Sessió 1 · Planificar ---------- */
  G['w8-1'] = {
    obj: [
      "L'alumne/a defineix el públic i l'objectiu de la seva web i tria tres seccions coherents amb aquest públic.|El alumno/a define el público y el objetivo de su web y elige tres secciones coherentes con ese público.",
      "L'alumne/a dibuixa un esbós en format mòbil amb capçalera, menú, seccions i peu.|El alumno/a dibuja un boceto en formato móvil con cabecera, menú, secciones y pie.",
      "L'alumne/a escriu l'esquelet d'una web amb header, nav, main, section i footer en l'ordre correcte i ben tancats.|El alumno/a escribe el esqueleto de una web con header, nav, main, section y footer en el orden correcto y bien cerrados.",
      "L'alumne/a connecta els enllaços del menú amb les seccions fent servir href=\"#id\" i un id idèntic.|El alumno/a conecta los enlaces del menú con las secciones usando href=\"#id\" y un id idéntico."
    ],
    comp: [
      'Competència digital (CD2): crear continguts digitals amb HTML i planificar-ne l\'estructura|Competencia digital (CD2): crear contenidos digitales con HTML y planificar su estructura',
      'Comunicació lingüística: adequar un missatge al públic i a la finalitat|Comunicación lingüística: adecuar un mensaje al público y a la finalidad',
      'Competència personal i d\'aprendre a aprendre: planificar un projecte en fases|Competencia personal y de aprender a aprender: planificar un proyecto por fases',
      'Pensament computacional: descompondre una web en parts i relacionar-les (enllaços i ids)|Pensamiento computacional: descomponer una web en partes y relacionarlas (enlaces e ids)'
    ],
    vocab: [
      ['Públic|Público', 'Les persones per a qui fem la web: qui la llegirà i què hi busca.|Las personas para quienes hacemos la web: quién la leerá y qué busca en ella.'],
      ['Esbós (wireframe)|Boceto (wireframe)', 'Dibuix de la pàgina fet amb caixes per decidir on va cada part.|Dibujo de la página hecho con cajas para decidir dónde va cada parte.'],
      ['Esquelet|Esqueleto', 'Les etiquetes que organitzen la pàgina: header, nav, main, section i footer.|Las etiquetas que organizan la página: header, nav, main, section y footer.'],
      ['Secció|Sección', 'Una part del contingut amb un tema propi i el seu títol h2.|Una parte del contenido con un tema propio y su título h2.'],
      ['Enllaç intern|Enlace interno', 'Un enllaç href="#nom" que porta a l\'element amb id="nom" de la mateixa pàgina.|Un enlace href="#nombre" que lleva al elemento con id="nombre" de la misma página.']
    ],
    mat: {
      aula: ['Un ordinador per alumne/a amb Numi Tech obert a la sessió «Planificar»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Planificar»', 'Projector i la presentació d\'aquesta sessió|Proyector y la presentación de esta sesión', 'Llapis, goma i el full d\'esbós imprès (un per alumne/a i alguns de recanvi)|Lápiz, goma y la hoja de boceto impresa (una por alumno/a y algunas de recambio)'],
      imprimir: ["Full d'esbós de la meva web|Hoja de boceto de mi web", 'Fitxa: esquelets per arreglar|Ficha: esqueletos para arreglar'],
      prep: ["Imprimir un full d'esbós per alumne/a. Es farà servir durant les quatre sessions: demaneu que el guardin a la carpeta.|Imprimir una hoja de boceto por alumno/a. Se usará durante las cuatro sesiones: pedid que la guarden en la carpeta.",
        'Dibuixar a la pissarra (o portar fet) un esbós d\'exemple d\'una web inventada, per ensenyar com es fa amb caixes.|Dibujar en la pizarra (o traer hecho) un boceto de ejemplo de una web inventada, para enseñar cómo se hace con cajas.',
        "Revisar els sis temes que ofereix l'app (espai, animals, cuina, esport, música, el poble o barri): qui vulgui un altre tema pot triar el més proper i canviar-ne el títol i les seccions.|Revisar los seis temas que ofrece la app (espacio, animales, cocina, deporte, música, el pueblo o barrio): quien quiera otro tema puede elegir el más cercano y cambiar su título y sus secciones.",
        'Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada.']
    },
    plan: [
      { min: 5, t: 'Benvinguda: la Mostra de Webs|Bienvenida: la Muestra de Webs', fase: 'inici',
        fa: "Presenta el projecte final: en quatre setmanes, cada alumne/a farà la seva web i la presentarà a la Mostra. Explica el calendari (planificar, construir, revisar, presentar). Fes les dues preguntes de repàs de la unitat 7 i pregunta què fa que una web sigui «bona».|Presenta el proyecto final: en cuatro semanas, cada alumno/a hará su web y la presentará en la Muestra. Explica el calendario (planificar, construir, revisar, presentar). Haz las dos preguntas de repaso de la unidad 7 y pregunta qué hace que una web sea «buena».",
        diu: ['D\'aquí a quatre setmanes, cadascú de vosaltres presentarà una web feta del tot per vosaltres.|Dentro de cuatro semanas, cada uno de vosotros presentará una web hecha del todo por vosotros.', 'Penseu en una web que us agradi: per què hi torneu?|Pensad en una web que os guste: ¿por qué volvéis a ella?'],
        slides: ['s1', 's2', 's3'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 10, t: 'Per a qui, què i com|Para quién, qué y cómo', fase: 'teoria',
        fa: "Treballa les tres preguntes del pla: per a qui és (públic), què hi ha de trobar (objectiu) i com s'organitza (esquelet). Ensenya la demo de l'esquelet i com l'esbós es converteix en web. Remarca la regla del menú: href=\"#nom\" i id=\"nom\" idèntics. Acaba amb les capes: avui només estructura.|Trabaja las tres preguntas del plan: para quién es (público), qué tiene que encontrar (objetivo) y cómo se organiza (esqueleto). Enseña la demo del esqueleto y cómo el boceto se convierte en web. Remarca la regla del menú: href=\"#nombre\" e id=\"nombre\" idénticos. Termina con las capas: hoy solo estructura.",
        diu: ['Una web per a nens petits i una per a famílies poden parlar del mateix i ser molt diferents. Per què?|Una web para niños pequeños y una para familias pueden hablar de lo mismo y ser muy diferentes. ¿Por qué?', "L'header, el nav i el footer no es veuen diferents, però diuen què és cada part.|El header, el nav y el footer no se ven diferentes, pero dicen qué es cada parte.", 'Si l\'enllaç diu #fotos i la secció es diu foto, on anirà?|Si el enlace dice #fotos y la sección se llama foto, ¿adónde irá?'],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: 'Entrevista i esbós en paper|Entrevista y boceto en papel', fase: 'desconnectat',
        fa: "Per parelles, cada alumne/a entrevista l'altre/a durant tres minuts amb les preguntes de la diapositiva (de què vols parlar, per a qui és, què hi ha de trobar). Després, cadascú dibuixa el seu esbós al full: un mòbil amb les caixes de l'esquelet, el nom de cada secció (que serà l'id) i què hi haurà. Per acabar, intercanvien els esbossos i l'altre/a diu on clicaria per trobar cada cosa.|Por parejas, cada alumno/a entrevista al otro/a durante tres minutos con las preguntas de la diapositiva (de qué quieres hablar, para quién es, qué tiene que encontrar). Después, cada uno dibuja su boceto en la hoja: un móvil con las cajas del esqueleto, el nombre de cada sección (que será el id) y qué habrá. Para terminar, intercambian los bocetos y el otro/a dice dónde haría clic para encontrar cada cosa.",
        diu: ['No cal dibuixar bé: caixes i paraules. És un plànol, no un quadre.|No hace falta dibujar bien: cajas y palabras. Es un plano, no un cuadro.', 'Noms curts per a les seccions, en minúscules i sense accents: seran els ids.|Nombres cortos para las secciones, en minúsculas y sin acentos: serán los ids.', 'Si el company/a no sap on clicar, què podríeu canviar?|Si el compañero/a no sabe dónde hacer clic, ¿qué podríais cambiar?'],
        slides: ['s9', 's10'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Per parelles i després individual|Por parejas y después individual' },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança fins a la pausa activa. Al pas de l'esbós, que toquin «Ho hem fet!». Al pas de la línia equivocada, fixa't en qui toca l'enllaç i no la secció: pregunta-li quines dues paraules ha de comparar.|Cada alumno/a abre la sesión y avanza hasta la pausa activa. En el paso del boceto, que toquen «¡Lo hemos hecho!». En el paso de la línea equivocada, fíjate en quién toca el enlace y no la sección: pregúntale qué dos palabras tiene que comparar.",
        diu: ["Llegeix l'href i l'id lletra a lletra: són iguals?|Lee el href y el id letra a letra: ¿son iguales?", "A la pregunta de la vista prèvia, digues primer l'ordre en veu alta.|En la pregunta de la vista previa, di primero el orden en voz alta."],
        slides: ['s11'], app: "De «La missió» fins a «Investiga»: les dues històries, les targetes de «Descobreix», el públic de l'Arnau, ordenar l'esquelet, l'esbós (ja fet), la vista prèvia i la línia de la secció equivocada.|De «La misión» hasta «Investiga»: las dos historias, las tarjetas de «Descubre», el público de Arnau, ordenar el esqueleto, el boceto (ya hecho), la vista previa y la línea de la sección equivocada.", org: 'Individual|Individual' },
      { min: 10, t: 'Reptes: menú, seccions i esquelet trencat|Retos: menú, secciones y esqueleto roto', fase: 'ordinador',
        fa: "Feu la pausa activa junts. Després, escriu amb la classe la secció de la diapositiva 13 (amb el seu id i el seu h2) i deixa'ls fer els tres reptes. Qui acabi ajuda un company/a amb preguntes, sense tocar-li el teclat.|Haced la pausa activa juntos. Después, escribe con la clase la sección de la diapositiva 13 (con su id y su h2) y deja que hagan los tres retos. Quien termine ayuda a un compañero/a con preguntas, sin tocarle el teclado.",
        diu: ["A l'esquelet trencat, quines són les dues coses que estan malament?|En el esqueleto roto, ¿cuáles son las dos cosas que están mal?", "Cada <section> que obres, l'has de tancar abans d'obrir la següent.|Cada <section> que abres, la tienes que cerrar antes de abrir la siguiente."],
        slides: ['s12', 's13'], app: "«Pausa activa» i els tres reptes: completar el menú dels gats, escriure les seccions del club de lectura i arreglar l'esquelet del Club d'Astronomia.|«Pausa activa» y los tres retos: completar el menú de los gatos, escribir las secciones del club de lectura y arreglar el esqueleto del Club de Astronomía.", org: 'Tot el grup i després individual|Todo el grupo y después individual' },
      { min: 5, t: 'Crea: el pla i la versió 1|Crea: el plan y la versión 1', fase: 'crea',
        fa: "Amb l'esbós al costat, cada alumne/a tria el tema, el públic i la paleta, i escriu l'esquelet de la seva web: menú amb tres enllaços i tres seccions. Insisteix que la desin: la setmana que ve continuaran des d'aquí.|Con el boceto al lado, cada alumno/a elige el tema, el público y la paleta, y escribe el esqueleto de su web: menú con tres enlaces y tres secciones. Insiste en que la guarden: la semana que viene continuarán desde aquí.",
        diu: ['Copia els noms de les seccions del teu esbós: ja tens els ids!|Copia los nombres de las secciones de tu boceto: ¡ya tienes los ids!', "Recorda tocar «Desa-ho i continua» quan totes les comprovacions estiguin en verd.|Recuerda tocar «Guárdalo y continúa» cuando todas las comprobaciones estén en verde."],
        slides: ['s14'], app: "Passos «Crea»: triar el tema, el públic i els colors, i la versió 1 de la web (l'esquelet).|Pasos «Crea»: elegir el tema, el público y los colores, y la versión 1 de la web (el esqueleto).", org: 'Individual|Individual' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Repassa les tres idees de la sessió. Deixa que responguin les preguntes finals de l'app i fes a cada alumne/a una de les preguntes del tiquet a la porta. Recull els esbossos o demana que els guardin.|Repasa las tres ideas de la sesión. Deja que respondan las preguntas finales de la app y haz a cada alumno/a una de las preguntas del ticket en la puerta. Recoge los bocetos o pide que los guarden.",
        diu: ['Qui em diu per a qui és la seva web?|¿Quién me dice para quién es su web?', 'Com sap el navegador on ha d\'anar quan toquem un enllaç del menú?|¿Cómo sabe el navegador adónde tiene que ir cuando tocamos un enlace del menú?'],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ['Posa href="#fotos" però id="Fotos" o id="les fotos": l\'enllaç no funciona.|Pone href="#fotos" pero id="Fotos" o id="las fotos": el enlace no funciona.', 'Que llegeixi les dues paraules en veu alta, lletra a lletra. Proposa la norma de la classe: ids curts, en minúscules, sense accents ni espais.|Que lea las dos palabras en voz alta, letra a letra. Propón la norma de la clase: ids cortos, en minúsculas, sin acentos ni espacios.'],
      ["Escriu el # també a l'id: id=\"#fotos\".|Escribe el # también en el id: id=\"#fotos\".", 'Pregunta: el # és el nom o és la manera de dir «ves a…»? Només va a l\'enllaç.|Pregunta: ¿el # es el nombre o es la manera de decir «ve a…»? Solo va en el enlace.'],
      ['Posa el nav dins d\'una secció o el footer dins del main.|Pone el nav dentro de una sección o el footer dentro del main.', "Que miri el seu esbós de dalt a baix i assenyali on comença i on acaba cada caixa. Cada caixa és una etiqueta que s'obre i es tanca.|Que mire su boceto de arriba abajo y señale dónde empieza y dónde termina cada caja. Cada caja es una etiqueta que se abre y se cierra."],
      ['Passa la sessió canviant colors i tipus de lletra.|Pasa la sesión cambiando colores y tipos de letra.', "Recorda-li les capes: avui toca l'estructura. Els colors ja els ha triat i ja hi són a la plantilla.|Recuérdale las capas: hoy toca la estructura. Los colores ya los ha elegido y ya están en la plantilla."],
      ['Tria un tema massa gran («tot sobre els animals»).|Elige un tema demasiado grande («todo sobre los animales»).', "Pregunta per a qui és i què hi ha de trobar. Ajuda'l a quedar-se amb tres seccions concretes que pugui omplir en una sessió.|Pregunta para quién es y qué tiene que encontrar. Ayúdale a quedarse con tres secciones concretas que pueda llenar en una sesión."]
    ],
    diff: {
      mes: "Afegir una quarta secció i el seu enllaç al menú. Dibuixar també l'esbós en format ordinador i comparar-lo amb el de mòbil: què canvia de lloc? Fer la fitxa dels esquelets per arreglar.|Añadir una cuarta sección y su enlace al menú. Dibujar también el boceto en formato ordenador y compararlo con el de móvil: ¿qué cambia de sitio? Hacer la ficha de los esqueletos para arreglar.",
      menys: "Partir dels comentaris de la plantilla, que ja proposen les seccions i els ids. Fer servir els botons d'inserir codi. Tenir l'esbós al costat de l'ordinador i escriure una caixa cada vegada.|Partir de los comentarios de la plantilla, que ya proponen las secciones y los ids. Usar los botones de insertar código. Tener el boceto al lado del ordenador y escribir una caja cada vez."
    },
    aval: {
      ticket: ['Per a qui és la teva web i què hi ha de trobar el públic?|¿Para quién es tu web y qué tiene que encontrar el público?', 'Com fas que un enllaç del menú porti a una secció?|¿Cómo haces que un enlace del menú lleve a una sección?'],
      rubric: [
        ['Pla de la web|Plan de la web', 'Defineix el públic i l\'objectiu, i les tres seccions hi encaixen.|Define el público y el objetivo, y las tres secciones encajan con ellos.', 'Té un tema, però el públic o les seccions encara són poc concrets.|Tiene un tema, pero el público o las secciones todavía son poco concretos.'],
        ['Esbós|Boceto', "Dibuixa totes les parts de l'esquelet en ordre i posa nom a cada secció.|Dibuja todas las partes del esqueleto en orden y pone nombre a cada sección.", "Dibuixa algunes parts o les posa en un ordre que no s'entén.|Dibuja algunas partes o las pone en un orden que no se entiende."],
        ['Esquelet i enllaços|Esqueleto y enlaces', "Escriu header, nav, main amb tres seccions i els enllaços del menú porten a cada secció.|Escribe header, nav, main con tres secciones y los enlaces del menú llevan a cada sección.", "Escriu l'esquelet amb ajuda, o algun enllaç no coincideix amb l'id.|Escribe el esqueleto con ayuda, o algún enlace no coincide con el id."]
      ]
    },
    casa: "A casa, ensenyeu l'esbós a algú de la família: entén de què va la web? Què hi buscaria? Apunteu-ne les idees al darrere del full per fer-les servir la setmana que ve.|En casa, enseñad el boceto a alguien de la familia: ¿entiende de qué va la web? ¿Qué buscaría en ella? Apuntad sus ideas detrás de la hoja para usarlas la semana que viene.",
    slides: [
      { id: 's1', k: 'portada', t: 'La meva web: planificar|Mi web: planificar', x: 'Comença el projecte final: una web feta del tot per tu.|Empieza el proyecto final: una web hecha del todo por ti.', nota: "Explica que en quatre setmanes cadascú presentarà la seva web a la Mostra, davant del grup.|Explica que en cuatro semanas cada uno presentará su web en la Muestra, delante del grupo." },
      { id: 's2', k: 'repas', t: 'Recordem la unitat 7|Recordamos la unidad 7', punts: ['Quina etiqueta fa que la web s\'adapti a l\'amplada del mòbil?|¿Qué etiqueta hace que la web se adapte al ancho del móvil?', 'Què fa @media (max-width: 600px)?|¿Qué hace @media (max-width: 600px)?', 'Digues un senyal d\'una web falsa.|Di una señal de una web falsa.'], nota: 'Respostes: el meta viewport; aplica les regles només a pantalles de 600 px o menys; per exemple, una adreça estranya, presses o faltes d\'ortografia.|Respuestas: el meta viewport; aplica las reglas solo a pantallas de 600 px o menos; por ejemplo, una dirección extraña, prisas o faltas de ortografía.' },
      { id: 's3', k: 'pregunta', t: 'Què té una bona web?|¿Qué tiene una buena web?', x: 'Penseu en una web que us agradi. Per què hi torneu?|Pensad en una web que os guste. ¿Por qué volvéis a ella?', nota: "Apunta les respostes a la pissarra (s'entén, és fàcil de trobar-hi coses, es veu bé al mòbil…). Hi tornareu a la sessió 3, a la revisió.|Apunta las respuestas en la pizarra (se entiende, es fácil encontrar cosas, se ve bien en el móvil…). Volveréis a ellas en la sesión 3, en la revisión." },
      { id: 's4', k: 'anim', t: 'Per a qui és?|¿Para quién es?', anim: 'w8aud', x: 'El públic decideix què va primer i com s\'escriu.|El público decide qué va primero y cómo se escribe.', nota: "Exemple: una web de l'equip de bàsquet per a les famílies ha de dir quan i on són els partits; per a l'equip, potser els entrenaments.|Ejemplo: una web del equipo de baloncesto para las familias tiene que decir cuándo y dónde son los partidos; para el equipo, quizá los entrenamientos." },
      { id: 's5', k: 'media', t: "L'esquelet d'una web|El esqueleto de una web", x: 'header, nav, main amb seccions i footer.|header, nav, main con secciones y footer.', media: md({ html: SKEL, css: SKEL_CSS }), nota: "Assenyala cada part al codi i al resultat. Fes notar que les etiquetes d'esquelet no canvien l'aspecte: és el CSS qui el canvia.|Señala cada parte en el código y en el resultado. Haz notar que las etiquetas de esqueleto no cambian el aspecto: es el CSS quien lo cambia." },
      { id: 's6', k: 'anim', t: "L'esbós en paper|El boceto en papel", anim: 'w8wire', x: 'Caixes i paraules: on va cada part.|Cajas y palabras: dónde va cada parte.', nota: "Dibuixa un esbós a la pissarra mentre ho expliques. Insisteix en el format mòbil.|Dibuja un boceto en la pizarra mientras lo explicas. Insiste en el formato móvil." },
      { id: 's7', k: 'anim', t: 'El menú porta a les seccions|El menú lleva a las secciones', anim: 'w8map', code: '<a href="#fotos">Fotos</a>\n…\n<section id="fotos">', nota: "Pregunta què passaria amb href=\"#foto\". Proposa la norma: ids curts, en minúscules, sense accents ni espais.|Pregunta qué pasaría con href=\"#foto\". Propón la norma: ids cortos, en minúsculas, sin acentos ni espacios." },
      { id: 's8', k: 'anim', t: 'Una capa cada vegada|Una capa cada vez', anim: 'w8layers', x: 'Avui: estructura. Setmana 2: contingut i estil. Setmana 3: revisió.|Hoy: estructura. Semana 2: contenido y estilo. Semana 3: revisión.', nota: "Relaciona cada capa amb una setmana del projecte: així saben què toca avui i què pot esperar.|Relaciona cada capa con una semana del proyecto: así saben qué toca hoy y qué puede esperar." },
      { id: 's9', k: 'activitat', t: 'Entrevista per parelles|Entrevista por parejas', timer: 3, punts: ['De què vols que parli la teva web?|¿De qué quieres que hable tu web?', 'Per a qui és? Qui la llegirà?|¿Para quién es? ¿Quién la leerá?', 'Què hi ha de trobar aquesta persona?|¿Qué tiene que encontrar esa persona?', 'Quines tres seccions hi posaries?|¿Qué tres secciones pondrías?'], nota: 'Tres minuts cadascú. L\'entrevistador/a apunta les respostes a la part de dalt del full d\'esbós de l\'altre/a.|Tres minutos cada uno. El entrevistador/a apunta las respuestas en la parte de arriba de la hoja de boceto del otro/a.' },
      { id: 's10', k: 'activitat', t: "Dibuixa l'esbós|Dibuja el boceto", timer: 9, punts: ['Un mòbil gran amb les caixes: capçalera, menú, tres seccions i peu.|Un móvil grande con las cajas: cabecera, menú, tres secciones y pie.', 'A cada secció: un nom curt (l\'id) i què hi haurà.|En cada sección: un nombre corto (el id) y qué habrá.', 'Intercanvieu: on clicaria l\'altre/a per trobar cada cosa?|Intercambiad: ¿dónde haría clic el otro/a para encontrar cada cosa?'], nota: "Passeja i fes preguntes: per a qui és aquesta secció? Què hi trobaré? Deixa la diapositiva projectada.|Pasea y haz preguntas: ¿para quién es esta sección? ¿Qué encontraré en ella? Deja la diapositiva proyectada." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ['Obre la sessió «Planificar».|Abre la sesión «Planificar».', "Al pas de l'esbós, toca «Ho hem fet!».|En el paso del boceto, toca «¡Lo hemos hecho!».", 'Para quan arribis a la pausa activa.|Para cuando llegues a la pausa activa.'], nota: "Mira qui s'encalla a la línia equivocada: que compari l'href i l'id en veu alta.|Mira quién se atasca en la línea equivocada: que compare el href y el id en voz alta." },
      { id: 's12', k: 'repte', t: 'Tres reptes|Tres retos', timer: 10, punts: ['1. Completa el menú dels gats|1. Completa el menú de los gatos', '2. Escriu les seccions del club de lectura|2. Escribe las secciones del club de lectura', "3. Arregla l'esquelet trencat|3. Arregla el esqueleto roto"], nota: "Al tercer repte hi ha dos errors: el footer a dalt i una secció sense tancar. L'editor avisa de l'etiqueta oberta: ensenya'ls a llegir aquest avís.|En el tercer reto hay dos errores: el footer arriba y una sección sin cerrar. El editor avisa de la etiqueta abierta: enséñales a leer ese aviso." },
      { id: 's13', k: 'media', t: 'Escrivim una secció junts|Escribimos una sección juntos', x: 'Una secció = un id, un h2 i el contingut.|Una sección = un id, un h2 y el contenido.', media: md({ html: () => `<nav>\n  <a href="#horaris">${L('Horaris', 'Horarios')}</a>\n</nav>\n<section id="horaris">\n  <h2>${L('Horaris', 'Horarios')}</h2>\n  <p>${L('Obrim de dilluns a divendres.', 'Abrimos de lunes a viernes.')}</p>\n</section>`, css: 'nav {\n  background: #0E7490;\n  padding: 8px;\n}\nnav a {\n  color: white;\n}\nsection {\n  border-left: 4px solid #0E7490;\n  padding-left: 10px;\n}' }), nota: "Escriu-la davant d'ells pas a pas, demanant cada peça a un alumne/a diferent.|Escríbela delante de ellos paso a paso, pidiendo cada pieza a un alumno/a diferente." },
      { id: 's14', k: 'activitat', t: 'Crea: la versió 1 de la teva web|Crea: la versión 1 de tu web', timer: 5, punts: ['Tria el tema, el públic i els colors.|Elige el tema, el público y los colores.', 'Escriu el menú amb tres enllaços.|Escribe el menú con tres enlaces.', 'Afegeix les seccions amb id i h2, i desa-la!|Añade las secciones con id y h2, ¡y guárdala!'], nota: "Si algú vol un tema que no és a la llista, que triï el més proper i en canviï el títol i les seccions: la plantilla és només un punt de partida.|Si alguien quiere un tema que no está en la lista, que elija el más cercano y cambie su título y sus secciones: la plantilla es solo un punto de partida." },
      { id: 's15', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ['Primer: per a qui és i què hi ha de trobar.|Primero: para quién es y qué tiene que encontrar.', "L'esquelet: header, nav, main amb seccions i footer.|El esqueleto: header, nav, main con secciones y footer.", 'href="#nom" porta a id="nom": el mateix nom.|href="#nombre" lleva a id="nombre": el mismo nombre.'], nota: 'Torna a la pregunta del principi: què té una bona web? Ara hi podem afegir «està pensada per al seu públic».|Vuelve a la pregunta del principio: ¿qué tiene una buena web? Ahora podemos añadir «está pensada para su público».' },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ['Per a qui és la teva web i què hi ha de trobar?|¿Para quién es tu web y qué tiene que encontrar?', 'Com fas que un enllaç porti a una secció?|¿Cómo haces que un enlace lleve a una sección?'], nota: "Anota qui no ha pogut desar la versió 1: a la sessió 2 l'app li proposarà un esquelet complet del seu tema per continuar.|Anota quién no ha podido guardar la versión 1: en la sesión 2 la app le propondrá un esqueleto completo de su tema para continuar." }
    ],
    print: [
      { id: 'p1', t: "Full d'esbós de la meva web|Hoja de boceto de mi web", k: 'graella', w: 6, h: 10,
        intro: "Dibuixa la teva web tal com es veurà al mòbil, de dalt a baix. Fes una caixa per a cada part i escriu-hi la lletra de la llegenda. No cal omplir tota la graella.|Dibuja tu web tal como se verá en el móvil, de arriba abajo. Haz una caja para cada parte y escribe dentro la letra de la leyenda. No hace falta llenar toda la cuadrícula.",
        legend: [['H', 'Capçalera (header)|Cabecera (header)'], ['N', 'Menú (nav)|Menú (nav)'], ['S', 'Secció (section)|Sección (section)'], ['I', 'Imatge (img)|Imagen (img)'], ['T', 'Text (p)|Texto (p)'], ['F', 'Peu (footer)|Pie (footer)']],
        items: [
          { q: 'Tema i títol de la web:|Tema y título de la web:' },
          { q: 'Per a qui és? Què hi ha de trobar el públic?|¿Para quién es? ¿Qué tiene que encontrar el público?' },
          { q: 'Les tres seccions i el seu id (curt, en minúscules, sense accents):|Las tres secciones y su id (corto, en minúsculas, sin acentos):', big: true }
        ] },
      { id: 'p2', t: 'Fitxa: esquelets per arreglar|Ficha: esqueletos para arreglar', k: 'fitxa',
        intro: "Cada exercici té un error d'esquelet o d'enllaç. Explica què hi falla i com ho arreglaries.|Cada ejercicio tiene un error de esqueleto o de enlace. Explica qué falla y cómo lo arreglarías.",
        items: [
          { q: 'El menú té &lt;a href="#galeria"&gt; i la secció és &lt;section id="galeria-fotos"&gt;. Què passa quan toques l\'enllaç?|El menú tiene &lt;a href="#galeria"&gt; y la sección es &lt;section id="galeria-fotos"&gt;. ¿Qué pasa cuando tocas el enlace?', sol: "No porta enlloc: els noms no coincideixen. Cal fer servir el mateix nom als dos llocs (per exemple, galeria).|No lleva a ninguna parte: los nombres no coinciden. Hay que usar el mismo nombre en los dos sitios (por ejemplo, galeria)." },
          { q: 'Ordena aquestes parts de dalt a baix: footer, nav, main, header.|Ordena estas partes de arriba abajo: footer, nav, main, header.', sol: 'header, nav, main, footer.|header, nav, main, footer.' },
          { q: 'Què hi ha de malament a &lt;section id="#contacte"&gt;?|¿Qué hay de malo en &lt;section id="#contacte"&gt;?', sol: "Sobra el #: només va a l'enllaç (href=\"#contacte\"). L'id ha de ser id=\"contacte\".|Sobra el #: solo va en el enlace (href=\"#contacte\"). El id tiene que ser id=\"contacte\"." },
          { q: "Escriu l'enllaç del menú que porta a la secció &lt;section id=\"receptes\"&gt;.|Escribe el enlace del menú que lleva a la sección &lt;section id=\"receptes\"&gt;.", sol: '&lt;a href="#receptes"&gt;Receptes&lt;/a&gt;|&lt;a href="#receptes"&gt;Recetas&lt;/a&gt;' },
          { q: 'Una secció comença amb &lt;section id="sortides"&gt; i, abans de tancar-la, n\'obres una altra. Què passa?|Una sección empieza con &lt;section id="sortides"&gt; y, antes de cerrarla, abres otra. ¿Qué pasa?', sol: "La segona queda a dins de la primera i l'editor avisa que una etiqueta no està tancada. Cal posar &lt;/section&gt; abans d'obrir la següent.|La segunda queda dentro de la primera y el editor avisa de que una etiqueta no está cerrada. Hay que poner &lt;/section&gt; antes de abrir la siguiente." }
        ] }
    ]
  };

  /* ---------- Sessió 2 · Construir ---------- */
  G['w8-2'] = {
    obj: [
      "L'alumne/a escriu textos breus, clars i amb les seves paraules, adequats al públic de la seva web.|El alumno/a escribe textos breves, claros y con sus palabras, adecuados al público de su web.",
      "L'alumne/a insereix imatges amb un alt descriptiu i només fa servir imatges que té permís per utilitzar.|El alumno/a inserta imágenes con un alt descriptivo y solo usa imágenes que tiene permiso para utilizar.",
      "L'alumne/a aplica una classe a diversos elements per donar-los el mateix estil amb una sola regla.|El alumno/a aplica una clase a varios elementos para darles el mismo estilo con una sola regla.",
      "L'alumne/a dona estil a la seva web amb una paleta coherent i fa servir flexbox per a una galeria.|El alumno/a da estilo a su web con una paleta coherente y usa flexbox para una galería."
    ],
    comp: [
      'Competència digital (CD2): crear i editar continguts digitals respectant els drets d\'autor|Competencia digital (CD2): crear y editar contenidos digitales respetando los derechos de autor',
      'Comunicació lingüística: escriure textos breus i adequats a la finalitat i al públic|Comunicación lingüística: escribir textos breves y adecuados a la finalidad y al público',
      'Competència en consciència i expressions culturals: triar colors i composició amb intenció|Competencia en conciencia y expresiones culturales: elegir colores y composición con intención',
      'Ciutadania digital: reconèixer l\'autoria i citar les fonts|Ciudadanía digital: reconocer la autoría y citar las fuentes'
    ],
    vocab: [
      ['Contingut|Contenido', 'Els textos i les imatges que omplen la web.|Los textos y las imágenes que llenan la web.'],
      ['Text alternatiu (alt)|Texto alternativo (alt)', "La descripció d'una imatge que llegeixen els lectors de pantalla.|La descripción de una imagen que leen los lectores de pantalla."],
      ["Drets d'autor|Derechos de autor", "Els drets que té qui ha creat un text o una imatge sobre com es fa servir.|Los derechos que tiene quien ha creado un texto o una imagen sobre cómo se usa."],
      ['Classe|Clase', "Un nom que es posa a diversos elements per donar-los el mateix estil (.targeta).|Un nombre que se pone a varios elementos para darles el mismo estilo (.targeta)."],
      ['Paleta|Paleta', "Els pocs colors que fa servir una web: principal, fons i destacat.|Los pocos colores que usa una web: principal, fondo y destacado."]
    ],
    mat: {
      aula: ['Un ordinador per alumne/a amb Numi Tech obert a la sessió «Construir»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Construir»', 'Projector i la presentació d\'aquesta sessió|Proyector y la presentación de esta sesión', "L'esbós de la sessió 1 de cada alumne/a i la fitxa d'esborrany de textos|El boceto de la sesión 1 de cada alumno/a y la ficha de borrador de textos"],
      imprimir: ['Esborrany dels textos de la meva web|Borrador de los textos de mi web', 'Fitxa: CSS amb errors|Ficha: CSS con errores'],
      prep: ["Imprimir una fitxa d'esborrany per alumne/a.|Imprimir una ficha de borrador por alumno/a.", "Comprovar a «Projectes» que cada alumne/a té desada la versió 1. Qui no la tingui començarà amb un esquelet complet del seu tema.|Comprobar en «Proyectos» que cada alumno/a tiene guardada la versión 1. Quien no la tenga empezará con un esqueleto completo de su tema.",
        "Tenir a mà la llista d'imatges de Numi (img/tech/web/ i img/ic/) per projectar-la o escriure-la a la pissarra.|Tener a mano la lista de imágenes de Numi (img/tech/web/ e img/ic/) para proyectarla o escribirla en la pizarra."]
    },
    plan: [
      { min: 5, t: 'Repàs: on érem?|Repaso: ¿dónde estábamos?', fase: 'inici',
        fa: "Recorda el pla de les quatre setmanes i on som: l'esquelet ja està fet; avui toca el contingut i l'estil. Repassa la diferència entre classe i id.|Recuerda el plan de las cuatro semanas y dónde estamos: el esqueleto ya está hecho; hoy toca el contenido y el estilo. Repasa la diferencia entre clase e id.",
        diu: ['Qui recorda per a qui és la seva web? Avui hi escriurem pensant en aquesta persona.|¿Quién recuerda para quién es su web? Hoy escribiremos pensando en esa persona.', 'Quina etiqueta es pot repetir i quina és única: la classe o l\'id?|¿Qué se puede repetir y qué es único: la clase o el id?'],
        slides: ['s1', 's2'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 10, t: 'Textos, imatges i estil|Textos, imágenes y estilo', fase: 'teoria',
        fa: "Explica com es llegeix a la pantalla (escanejant) i què fa un bon text web. Ensenya la demo de la imatge amb alt i parla dels drets d'autor. Després, la classe .targeta i la paleta de pocs colors.|Explica cómo se lee en la pantalla (escaneando) y qué hace un buen texto web. Enseña la demo de la imagen con alt y habla de los derechos de autor. Después, la clase .targeta y la paleta de pocos colores.",
        diu: ["Quant de temps us mireu una web abans de decidir si us interessa?|¿Cuánto tiempo miráis una web antes de decidir si os interesa?", "Si una foto és a internet, vol dir que la podem fer servir?|Si una foto está en internet, ¿quiere decir que la podemos usar?", 'Una regla .targeta i tres seccions: quantes vegades escrivim l\'estil?|Una regla .targeta y tres secciones: ¿cuántas veces escribimos el estilo?'],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: 'Escriu abans de picar|Escribe antes de teclear', fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa d'esborrany: per a cada secció, un títol, dues o tres frases curtes, la imatge que hi posarà amb el seu alt i, si cal, la font. Després, per parelles, fan la «prova dels cinc segons»: l'altre/a mira l'esborrany d'una secció cinc segons i diu de què va. Si no ho sap dir, cal un títol o una primera frase més clars.|Cada alumno/a rellena la ficha de borrador: para cada sección, un título, dos o tres frases cortas, la imagen que pondrá con su alt y, si hace falta, la fuente. Después, por parejas, hacen la «prueba de los cinco segundos»: el otro/a mira el borrador de una sección cinco segundos y dice de qué va. Si no sabe decirlo, hace falta un título o una primera frase más claros.",
        diu: ['Frases curtes: si una frase té més de dues línies, parteix-la.|Frases cortas: si una frase tiene más de dos líneas, pártela.', "L'alt descriu la imatge com si l'expliquessis per telèfon.|El alt describe la imagen como si la explicaras por teléfono.", 'Cinc segons: de què va aquesta secció?|Cinco segundos: ¿de qué va esta sección?'],
        slides: ['s8', 's9'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Individual i després per parelles|Individual y después por parejas' },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. Al pas de la línia amb l'error de CSS, si algú no el troba, que llegeixi cada línia buscant el punt i coma del final.|Avanzan hasta la pausa activa. En el paso de la línea con el error de CSS, si alguien no lo encuentra, que lea cada línea buscando el punto y coma del final.",
        diu: ['Quin dels tres textos de la tortuga entendria un nen de vuit anys?|¿Cuál de los tres textos de la tortuga entendería un niño de ocho años?', 'Totes les línies de CSS acaben igual. Totes?|Todas las líneas de CSS terminan igual. ¿Todas?'],
        slides: ['s10'], app: "De «La missió» fins a «Investiga»: la història, les targetes de «Descobreix», el text de la tortuga, l'ordre per construir una secció, la vista prèvia de la targeta i el CSS amb un error.|De «La misión» hasta «Investiga»: la historia, las tarjetas de «Descubre», el texto de la tortuga, el orden para construir una sección, la vista previa de la tarjeta y el CSS con un error.", org: 'Individual|Individual' },
      { min: 10, t: "Reptes: l'hort de l'escola|Retos: el huerto de la escuela", fase: 'ordinador',
        fa: "Pausa activa junts i, després, els tres reptes de l'hort: omplir una secció, la classe .targeta i la galeria amb flex. Projecta el recordatori del punt i coma mentre treballen.|Pausa activa juntos y, después, los tres retos del huerto: llenar una sección, la clase .targeta y la galería con flex. Proyecta el recordatorio del punto y coma mientras trabajan.",
        diu: ['La classe va a l\'HTML (class="targeta") i la regla al CSS (.targeta). Les dues coses!|La clase va en el HTML (class="targeta") y la regla en el CSS (.targeta). ¡Las dos cosas!', 'display: flex es posa al contenidor, no a cada imatge.|display: flex se pone en el contenedor, no en cada imagen.'],
        slides: ['s11', 's12'], app: '«Pausa activa» i els tres reptes: omplir la secció de les tomaqueres, la classe .targeta i la galeria.|«Pausa activa» y los tres retos: llenar la sección de las tomateras, la clase .targeta y la galería.', org: 'Individual|Individual' },
      { min: 5, t: 'Crea: la versió 2 de la meva web|Crea: la versión 2 de mi web', fase: 'crea',
        fa: "Cada alumne/a obre la seva web (l'app la recupera de la sessió anterior) i hi passa els textos de l'esborrany, hi posa imatges amb alt, el footer i l'estil. Recorda'ls que la desin al final, encara que no l'hagin acabada del tot.|Cada alumno/a abre su web (la app la recupera de la sesión anterior) y pasa los textos del borrador, pone imágenes con alt, el footer y el estilo. Recuérdales que la guarden al final, aunque no la hayan terminado del todo.",
        diu: ["Tens l'esborrany al costat? Copia'l secció per secció.|¿Tienes el borrador al lado? Cópialo sección por sección.", 'Prova-la amb el botó del mòbil i amb el de l\'ordinador.|Pruébala con el botón del móvil y con el del ordenador.'],
        slides: ['s13'], app: 'Pas «Crea»: la versió 2 de la web (contingut i estil).|Paso «Crea»: la versión 2 de la web (contenido y estilo).', org: 'Individual|Individual' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Repassa les tres idees de la sessió. Respondre les preguntes finals de l'app i el tiquet a la porta.|Repasa las tres ideas de la sesión. Responder las preguntas finales de la app y el ticket en la puerta.",
        diu: ["Qui ha escrit un alt del qual estigui orgullós/osa? Llegeix-nos-el!|¿Quién ha escrito un alt del que esté orgulloso/a? ¡Léenoslo!"],
        slides: ['s14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ["Copia un text llarg d'una altra web.|Copia un texto largo de otra web.", "Pregunta-li què n'ha entès i demana-li que ho expliqui en veu alta amb les seves paraules: això és el que ha d'escriure. Si fa servir una dada, que en posi la font al peu.|Pregúntale qué ha entendido y pídele que lo explique en voz alta con sus palabras: eso es lo que tiene que escribir. Si usa un dato, que ponga la fuente en el pie."],
      ['Escriu alt="imatge" o alt="foto".|Escribe alt="imagen" o alt="foto".', "Tanca-li els ulls i llegeix-li l'alt: sap què hi ha a la imatge? Que la descrigui com si l'expliqués per telèfon.|Ciérrale los ojos y léele el alt: ¿sabe qué hay en la imagen? Que la describa como si la explicara por teléfono."],
      ['Escriu .targeta a l\'HTML o class="targeta" al CSS.|Escribe .targeta en el HTML o class="targeta" en el CSS.', "Recorda la parella: a l'HTML es posa el nom (class=\"targeta\"); al CSS, el punt i el nom (.targeta { … }).|Recuerda la pareja: en el HTML se pone el nombre (class=\"targeta\"); en el CSS, el punto y el nombre (.targeta { … })."],
      ['Oblida un punt i coma i dues propietats deixen de funcionar.|Olvida un punto y coma y dos propiedades dejan de funcionar.', "Que llegeixi el final de cada línia de la regla que falla. L'avís de l'editor també li dona una pista.|Que lea el final de cada línea de la regla que falla. El aviso del editor también le da una pista."],
      ['Posa deu colors diferents a la web.|Pone diez colores diferentes en la web.', "Recorda-li la paleta que va triar a la sessió 1: un color principal, un de fons i un per destacar. Que n'esborri la resta.|Recuérdale la paleta que eligió en la sesión 1: un color principal, uno de fondo y uno para destacar. Que borre el resto."]
    ],
    diff: {
      mes: "Afegir una llista (ul) amb una secció de consells, una galeria amb flex a la seva web o una ombra (box-shadow) a les targetes. Fer la fitxa del CSS amb errors.|Añadir una lista (ul) con una sección de consejos, una galería con flex en su web o una sombra (box-shadow) en las tarjetas. Hacer la ficha del CSS con errores.",
      menys: 'Omplir primer una sola secció del tot (text, imatge i alt) i després les altres. Fer servir els botons d\'inserir codi i les regles de CSS de la plantilla.|Llenar primero una sola sección del todo (texto, imagen y alt) y después las demás. Usar los botones de insertar código y las reglas de CSS de la plantilla.'
    },
    aval: {
      ticket: ["Què ha de dir l'alt d'una imatge? Posa'n un exemple de la teva web.|¿Qué tiene que decir el alt de una imagen? Pon un ejemplo de tu web.", 'Per què fem servir una classe com .targeta?|¿Por qué usamos una clase como .targeta?'],
      rubric: [
        ['Textos|Textos', 'Escriu textos breus, propis i pensats per al seu públic a totes les seccions.|Escribe textos breves, propios y pensados para su público en todas las secciones.', 'Hi ha seccions buides, textos molt llargs o copiats.|Hay secciones vacías, textos muy largos o copiados.'],
        ['Imatges|Imágenes', "Posa imatges amb un alt que les descriu i en sap dir l'origen.|Pone imágenes con un alt que las describe y sabe decir su origen.", "Posa imatges sense alt o amb un alt que no les descriu.|Pone imágenes sin alt o con un alt que no las describe."],
        ['Estil|Estilo', 'Fa servir la seva paleta, una classe per a l\'estil repetit i el CSS sense errors.|Usa su paleta, una clase para el estilo repetido y el CSS sin errores.', "Dona estil a alguns elements, però amb massa colors o amb errors de CSS.|Da estilo a algunos elementos, pero con demasiados colores o con errores de CSS."]
      ]
    },
    casa: "A casa, llegiu junts els textos de la web en veu alta: s'entenen? Hi ha alguna frase massa llarga? Apunteu-ho a la fitxa d'esborrany per corregir-ho a la sessió de revisió.|En casa, leed juntos los textos de la web en voz alta: ¿se entienden? ¿Hay alguna frase demasiado larga? Apuntadlo en la ficha de borrador para corregirlo en la sesión de revisión.",
    slides: [
      { id: 's1', k: 'portada', t: 'La meva web: construir|Mi web: construir', x: "L'esquelet ja hi és: avui l'omplim de textos, imatges i estil.|El esqueleto ya está: hoy lo llenamos de textos, imágenes y estilo.", nota: "Recorda les capes: estructura (fet), contingut i estil (avui), revisió (setmana vinent).|Recuerda las capas: estructura (hecho), contenido y estilo (hoy), revisión (semana que viene)." },
      { id: 's2', k: 'repas', t: 'Classe o id?|¿Clase o id?', punts: ['class="targeta": es pot repetir en molts elements.|class="targeta": se puede repetir en muchos elementos.', 'id="fotos": un de sol a la pàgina.|id="fotos": uno solo en la página.', 'Al CSS: .targeta i #fotos.|En el CSS: .targeta y #fotos.'], nota: "Pregunta quina de les dues fan servir els enllaços del menú (l'id) i quina farem servir avui per a l'estil (la classe).|Pregunta cuál de las dos usan los enlaces del menú (el id) y cuál usaremos hoy para el estilo (la clase)." },
      { id: 's3', k: 'concepte', t: 'Escriure per a una pantalla|Escribir para una pantalla', pic: 'img/ment/lli.webp', punts: ['A la pantalla, la gent escaneja: títols i primeres paraules.|En la pantalla, la gente escanea: títulos y primeras palabras.', 'Paràgrafs curts: dues o tres frases.|Párrafos cortos: dos o tres frases.', 'Amb les teves paraules, pensant en el teu públic.|Con tus palabras, pensando en tu público.'], nota: 'Llegeix en veu alta un paràgraf llarg i un de curt sobre el mateix tema: quin recorden millor?|Lee en voz alta un párrafo largo y uno corto sobre el mismo tema: ¿cuál recuerdan mejor?' },
      { id: 's4', k: 'media', t: 'Imatges amb alt|Imágenes con alt', x: 'L\'alt diu què hi ha a la imatge.|El alt dice qué hay en la imagen.', media: md({ html: () => `<h2>${L('Tomaqueres', 'Tomateras')}</h2>\n<img src="img/tech/web/tomaquet.svg" alt="${L('Un tomàquet vermell i madur', 'Un tomate rojo y maduro')}" width="90">\n<p>${L('Les reguem cada dos dies.', 'Las regamos cada dos días.')}</p>` }), nota: "Esborra l'src en directe (o explica què passaria): si la imatge no carrega, surt l'alt. Ho llegeixen també els lectors de pantalla.|Borra el src en directo (o explica qué pasaría): si la imagen no carga, sale el alt. También lo leen los lectores de pantalla." },
      { id: 's5', k: 'media', t: 'Una classe, moltes targetes|Una clase, muchas tarjetas', media: md({ html: TARG, css: TARG_CSS }), x: 'class="targeta" a l\'HTML i .targeta { … } al CSS.|class="targeta" en el HTML y .targeta { … } en el CSS.', nota: "Pregunta què caldria canviar si volguéssim totes les targetes verdes: només una línia.|Pregunta qué habría que cambiar si quisiéramos todas las tarjetas verdes: solo una línea." },
      { id: 's6', k: 'concepte', t: 'Pocs colors i una lletra|Pocos colores y una letra', punts: ['Un color principal (títols, capçalera).|Un color principal (títulos, cabecera).', 'Un fons clar.|Un fondo claro.', 'Un color per destacar (botons, enllaços).|Un color para destacar (botones, enlaces).', 'Una sola família de lletra.|Una sola familia de letra.'], code: 'body {\n  font-family: Verdana, sans-serif;\n  background: #EEF2FF;\n}\nh1 {\n  color: #3730A3;\n}', nota: "Ensenya la paleta que va triar cada alumne/a a la sessió 1: el codi ja la porta a la plantilla.|Enseña la paleta que eligió cada alumno/a en la sesión 1: el código ya la lleva en la plantilla." },
      { id: 's7', k: 'anim', t: 'Copiar no és crear|Copiar no es crear', anim: 'w8layers', punts: ["Textos i imatges tenen autor/a.|Textos e imágenes tienen autor/a.", "Fes servir imatges teves, de Numi o amb llicència lliure.|Usa imágenes tuyas, de Numi o con licencia libre.", 'Si fas servir una dada, cita la font al peu.|Si usas un dato, cita la fuente en el pie.'], nota: "Relaciona-ho amb la unitat 3 (citar les fonts). Remarca que la web és interessant perquè hi ha el que ells saben i pensen.|Relaciónalo con la unidad 3 (citar las fuentes). Remarca que la web es interesante porque está lo que ellos saben y piensan." },
      { id: 's8', k: 'activitat', t: "L'esborrany dels textos|El borrador de los textos", timer: 8, punts: ['Per a cada secció: un títol i dues o tres frases curtes.|Para cada sección: un título y dos o tres frases cortas.', "La imatge que hi posaràs i el seu alt.|La imagen que pondrás y su alt.", 'Si fas servir una dada d\'algun lloc, la font.|Si usas un dato de algún sitio, la fuente.'], nota: 'Passeja i llegeix alguns esborranys. Pregunta: per a qui és aquesta frase? La pot entendre?|Pasea y lee algunos borradores. Pregunta: ¿para quién es esta frase? ¿La puede entender?' },
      { id: 's9', k: 'activitat', t: 'La prova dels cinc segons|La prueba de los cinco segundos', timer: 4, punts: ["Dona l'esborrany al company/a.|Da el borrador al compañero/a.", "Té cinc segons per mirar una secció.|Tiene cinco segundos para mirar una sección.", 'Diu de què va. Ho ha encertat?|Dice de qué va. ¿Ha acertado?'], nota: "Si no ho encerta, cal un títol o una primera frase més clars. És exactament el que passa quan algú obre una web.|Si no acierta, hace falta un título o una primera frase más claros. Es exactamente lo que pasa cuando alguien abre una web." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ['Obre la sessió «Construir».|Abre la sesión «Construir».', "Fes «Descobreix» i «Mans a l'obra».|Haz «Descubre» y «Manos a la obra».", 'Para a la pausa activa.|Para en la pausa activa.'], nota: "Al pas del CSS amb error, que no toquin a l'atzar: primer han de llegir línia per línia.|En el paso del CSS con error, que no toquen al azar: primero tienen que leer línea por línea." },
      { id: 's11', k: 'repte', t: "Reptes de l'hort|Retos del huerto", timer: 10, punts: ['1. Omple la secció: paràgraf i imatge amb alt|1. Llena la sección: párrafo e imagen con alt', '2. La classe .targeta a les tres seccions|2. La clase .targeta en las tres secciones', '3. Una galeria amb display: flex i gap|3. Una galería con display: flex y gap'], nota: "Al tercer repte també cal posar alt a dues imatges: és una manera de començar a revisar.|En el tercer reto también hay que poner alt a dos imágenes: es una manera de empezar a revisar." },
      { id: 's12', k: 'concepte', t: 'El punt i coma importa|El punto y coma importa', code: '.targeta {\n  background: #FFF7ED;\n  padding: 16px;\n}', punts: ['Cada propietat acaba amb punt i coma.|Cada propiedad termina con punto y coma.', 'Si en falta un, el navegador se salta dues propietats.|Si falta uno, el navegador se salta dos propiedades.'], nota: 'Deixa-la projectada durant els reptes i el projecte.|Déjala proyectada durante los retos y el proyecto.' },
      { id: 's13', k: 'activitat', t: 'Crea: la versió 2|Crea: la versión 2', timer: 5, punts: ['Un paràgraf amb text teu a cada secció.|Un párrafo con texto tuyo en cada sección.', 'Almenys una imatge amb alt.|Al menos una imagen con alt.', 'El footer i cinc regles de CSS amb la teva paleta.|El footer y cinco reglas de CSS con tu paleta.', 'Desa-la!|¡Guárdala!'], nota: "Si algú no té desada la versió 1, l'app li dona un esquelet complet del seu tema: que el personalitzi.|Si alguien no tiene guardada la versión 1, la app le da un esqueleto completo de su tema: que lo personalice." },
      { id: 's14', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ['Textos curts, clars i amb les teves paraules.|Textos cortos, claros y con tus palabras.', 'Cada imatge amb el seu alt i amb permís.|Cada imagen con su alt y con permiso.', 'Una classe per a l\'estil que es repeteix; pocs colors.|Una clase para el estilo que se repite; pocos colores.'], nota: "Demana a dos o tres alumnes que llegeixin un alt de la seva web.|Pide a dos o tres alumnos que lean un alt de su web." },
      { id: 's15', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Què ha de dir l'alt d'una imatge?|¿Qué tiene que decir el alt de una imagen?", 'Per a què serveix una classe com .targeta?|¿Para qué sirve una clase como .targeta?'], nota: 'Anota qui té seccions buides: a la sessió 3, que comenci omplint-les abans de revisar.|Anota quién tiene secciones vacías: en la sesión 3, que empiece llenándolas antes de revisar.' }
    ],
    print: [
      { id: 'p1', t: 'Esborrany dels textos de la meva web|Borrador de los textos de mi web', k: 'fitxa',
        intro: "Escriu aquí els textos abans de passar-los a l'ordinador. Frases curtes i amb les teves paraules. Al final, fes la prova dels cinc segons amb un company/a.|Escribe aquí los textos antes de pasarlos al ordenador. Frases cortas y con tus palabras. Al final, haz la prueba de los cinco segundos con un compañero/a.",
        items: [
          { q: 'Secció 1 · títol (h2) i dues o tres frases:|Sección 1 · título (h2) y dos o tres frases:', sol: 'Resposta oberta: valoreu que el títol sigui clar i les frases, curtes.|Respuesta abierta: valorad que el título sea claro y las frases, cortas.' },
          { q: 'Secció 2 · títol (h2) i dues o tres frases:|Sección 2 · título (h2) y dos o tres frases:', sol: 'Resposta oberta.|Respuesta abierta.' },
          { q: 'Secció 3 · títol (h2) i dues o tres frases:|Sección 3 · título (h2) y dos o tres frases:', sol: 'Resposta oberta.|Respuesta abierta.' },
          { q: "Les imatges que hi posaré i el seu alt (què s'hi veu):|Las imágenes que pondré y su alt (qué se ve):", sol: "Resposta oberta: l'alt ha de descriure la imatge, no dir «imatge» o «foto».|Respuesta abierta: el alt tiene que describir la imagen, no decir «imagen» o «foto»." },
          { q: "Fonts de les dades o imatges que no són meves ni de Numi:|Fuentes de los datos o imágenes que no son míos ni de Numi:", sol: 'Resposta oberta: si no n\'hi ha, «cap».|Respuesta abierta: si no hay, «ninguna».' },
          { q: 'Prova dels cinc segons (ho escriu el company/a): de què va cada secció?|Prueba de los cinco segundos (lo escribe el compañero/a): ¿de qué va cada sección?', sol: "Resposta oberta: si no ho encerta, cal millorar el títol o la primera frase.|Respuesta abierta: si no acierta, hay que mejorar el título o la primera frase." }
        ] },
      { id: 'p2', t: 'Fitxa: CSS amb errors|Ficha: CSS con errores', k: 'fitxa',
        intro: "Cada regla té un error. Troba'l i escriu la regla ben feta.|Cada regla tiene un error. Encuéntralo y escribe la regla bien hecha.",
        items: [
          { q: '.targeta { background: #FFF7ED padding: 16px; }|.targeta { background: #FFF7ED padding: 16px; }', sol: 'Falta el punt i coma després de #FFF7ED.|Falta el punto y coma después de #FFF7ED.' },
          { q: 'targeta { border-radius: 12px; } (i a l\'HTML hi ha class="targeta")|targeta { border-radius: 12px; } (y en el HTML hay class="targeta")', sol: 'Falta el punt: .targeta { … }.|Falta el punto: .targeta { … }.' },
          { q: '.galeria { display flex; gap: 12px; }|.galeria { display flex; gap: 12px; }', sol: 'Falten els dos punts: display: flex;|Faltan los dos puntos: display: flex;' },
          { q: 'h2 { color: #166534;|h2 { color: #166534;', sol: 'Falta tancar la clau: }.|Falta cerrar la llave: }.' }
        ] }
    ]
  };

  /* ---------- Sessió 3 · Revisar i millorar ---------- */
  G['w8-3'] = {
    obj: [
      "L'alumne/a revisa l'accessibilitat d'una web: alt a les imatges, títols en ordre i enllaços amb un text clar.|El alumno/a revisa la accesibilidad de una web: alt en las imágenes, títulos en orden y enlaces con un texto claro.",
      "L'alumne/a identifica problemes de contrast i els corregeix amb colors foscos sobre fons clars (o al revés).|El alumno/a identifica problemas de contraste y los corrige con colores oscuros sobre fondos claros (o al revés).",
      "L'alumne/a revisa l'ortografia llegint en veu alta i prova la web al mòbil, amb una regla @media si cal.|El alumno/a revisa la ortografía leyendo en voz alta y prueba la web en el móvil, con una regla @media si hace falta.",
      "L'alumne/a fa i rep una revisió amable i concreta, i fa servir els comentaris per millorar la seva web.|El alumno/a hace y recibe una revisión amable y concreta, y usa los comentarios para mejorar su web."
    ],
    comp: [
      "Competència digital (CD3): crear continguts accessibles i col·laborar amb respecte|Competencia digital (CD3): crear contenidos accesibles y colaborar con respeto",
      "Comunicació lingüística: revisar i corregir textos propis (ortografia i claredat)|Comunicación lingüística: revisar y corregir textos propios (ortografía y claridad)",
      "Competència ciutadana: tenir en compte les persones amb diversitat funcional|Competencia ciudadana: tener en cuenta a las personas con diversidad funcional",
      "Competència personal i social: donar i rebre comentaris de manera constructiva|Competencia personal y social: dar y recibir comentarios de manera constructiva"
    ],
    vocab: [
      ['Accessibilitat|Accesibilidad', 'Que una web la pugui fer servir tothom, també qui hi veu poc o gens.|Que una web la pueda usar todo el mundo, también quien ve poco o nada.'],
      ['Lector de pantalla|Lector de pantalla', 'Programa que llegeix la web en veu alta.|Programa que lee la web en voz alta.'],
      ['Contrast|Contraste', 'La diferència entre el color del text i el del fons.|La diferencia entre el color del texto y el del fondo.'],
      ['Jerarquia de títols|Jerarquía de títulos', "L'ordre dels títols segons la importància: h1, h2, h3…|El orden de los títulos según su importancia: h1, h2, h3…"],
      ['Revisió entre iguals|Revisión entre iguales', 'Quan un company/a revisa la teva feina i et proposa millores.|Cuando un compañero/a revisa tu trabajo y te propone mejoras.']
    ],
    mat: {
      aula: ['Un ordinador per alumne/a amb Numi Tech obert a la sessió «Revisar i millorar»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Revisar y mejorar»', 'Projector i la presentació d\'aquesta sessió|Proyector y la presentación de esta sesión', 'La fitxa de la web per revisar (una per parella) i la llista de revisió (una per alumne/a)|La ficha de la web para revisar (una por pareja) y la lista de revisión (una por alumno/a)', "Opcional: un mòbil o una tauleta per provar alguna web de veritat|Opcional: un móvil o una tableta para probar alguna web de verdad"],
      imprimir: ['La web del Club d\'Escacs per revisar|La web del Club de Ajedrez para revisar', 'La meva llista de revisió|Mi lista de revisión'],
      prep: ['Imprimir la fitxa de la web per revisar (una per parella) i la llista de revisió (una per alumne/a).|Imprimir la ficha de la web para revisar (una por pareja) y la lista de revisión (una por alumno/a).', "Decidir les parelles de revisió: millor que no siguin companys/es de taula habituals.|Decidir las parejas de revisión: mejor que no sean compañeros/as de mesa habituales.", "Recuperar les respostes de la sessió 1 sobre «què té una bona web» per tornar-hi.|Recuperar las respuestas de la sesión 1 sobre «qué tiene una buena web» para volver a ellas."]
    },
    plan: [
      { min: 5, t: "L'equip de revisió|El equipo de revisión", fase: 'inici',
        fa: "Explica que les webs professionals sempre passen una revisió abans de publicar-se, i que avui faran de revisors/es. Fes el repàs de l'alt i de flex-direction.|Explica que las webs profesionales siempre pasan una revisión antes de publicarse, y que hoy harán de revisores/as. Haz el repaso del alt y de flex-direction.",
        diu: ["Per què creieu que algú que no ha fet la web la revisa millor?|¿Por qué creéis que alguien que no ha hecho la web la revisa mejor?", 'Avui revisareu i us revisaran: amb respecte i amb idees concretes.|Hoy revisaréis y os revisarán: con respeto y con ideas concretas.'],
        slides: ['s1', 's2'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 10, t: 'Una web per a tothom|Una web para todo el mundo', fase: 'teoria',
        fa: "Explica què és un lector de pantalla i per què necessita l'alt i els títols en ordre. Ensenya la demo del contrast i la del mòbil. Acaba amb la llista de revisió i com donar un comentari útil.|Explica qué es un lector de pantalla y por qué necesita el alt y los títulos en orden. Enseña la demo del contraste y la del móvil. Termina con la lista de revisión y cómo dar un comentario útil.",
        diu: ['Tanqueu els ulls. Si sentiu «imatge, imatge, clica aquí», sabeu què hi ha a la pàgina?|Cerrad los ojos. Si oís «imagen, imagen, haz clic aquí», ¿sabéis qué hay en la página?', "Quin dels tres textos es llegiria bé al sol, al pati?|¿Cuál de los tres textos se leería bien al sol, en el patio?", '«No m\'agrada» o «el text gris es llegeix malament»: quin ajuda més?|«No me gusta» o «el texto gris se lee mal»: ¿cuál ayuda más?'],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: 'El lector de pantalla humà|El lector de pantalla humano', fase: 'desconnectat',
        fa: "Per parelles, amb la fitxa de la web del Club d'Escacs. Un alumne/a fa de lector de pantalla: llegeix en veu alta només els títols, els alt de les imatges i el text dels enllaços, en l'ordre en què surten. L'altre/a escolta amb els ulls tancats i ha de dir de què va la pàgina i on clicaria per apuntar-se. Després, junts, troben els problemes de la fitxa (alt que falten, títols desordenats, «clica aquí», faltes, contrast) i escriuen com els arreglarien.|Por parejas, con la ficha de la web del Club de Ajedrez. Un alumno/a hace de lector de pantalla: lee en voz alta solo los títulos, los alt de las imágenes y el texto de los enlaces, en el orden en que salen. El otro/a escucha con los ojos cerrados y tiene que decir de qué va la página y dónde haría clic para apuntarse. Después, juntos, encuentran los problemas de la ficha (alt que faltan, títulos desordenados, «haz clic aquí», faltas, contraste) y escriben cómo los arreglarían.",
        diu: ['El lector només llegeix el que hi ha escrit: si no hi ha alt, diu «imatge» i prou.|El lector solo lee lo que está escrito: si no hay alt, dice «imagen» y ya está.', "Amb els ulls tancats: sabries on clicar per apuntar-te al club?|Con los ojos cerrados: ¿sabrías dónde hacer clic para apuntarte al club?", 'Per a cada problema, una solució concreta.|Para cada problema, una solución concreta.'],
        slides: ['s8', 's9'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Per parelles|Por parejas' },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. A la falta d'ortografia, demana que llegeixin les línies en veu baixa, paraula per paraula.|Avanzan hasta la pausa activa. En la falta de ortografía, pide que lean las líneas en voz baja, palabra por palabra.",
        diu: ['Llegeix-ho a poc a poc: el cervell corregeix sol les paraules quan llegim de pressa.|Léelo despacio: el cerebro corrige solo las palabras cuando leemos deprisa.', 'Quin títol té la mateixa importància que «Qui som»?|¿Qué título tiene la misma importancia que «Quiénes somos»?'],
        slides: ['s10'], app: "De «La missió» fins a «Investiga»: la història, les targetes de «Descobreix», el text de l'enllaç, la targeta que es llegeix millor, la falta d'ortografia i el títol desordenat.|De «La misión» hasta «Investiga»: la historia, las tarjetas de «Descubre», el texto del enlace, la tarjeta que se lee mejor, la falta de ortografía y el título desordenado.", org: 'Individual|Individual' },
      { min: 8, t: 'Reptes: arreglar el club de lectura|Retos: arreglar el club de lectura', fase: 'ordinador',
        fa: "Pausa activa junts. Després, els tres reptes: accessibilitat, contrast i mòbil. Qui acabi, que comenci a revisar la seva pròpia web amb la llista.|Pausa activa juntos. Después, los tres retos: accesibilidad, contraste y móvil. Quien termine, que empiece a revisar su propia web con la lista.",
        diu: ["Recorda canviar també la de tancament: </h2>.|Recuerda cambiar también la de cierre: </h2>.", 'Els colors que comencen per #0, #1, #2 o #3 són foscos.|Los colores que empiezan por #0, #1, #2 o #3 son oscuros.'],
        slides: ['s11'], app: "«Pausa activa» i els tres reptes: l'accessibilitat del club, el contrast i la fila de llibres al mòbil.|«Pausa activa» y los tres retos: la accesibilidad del club, el contraste y la fila de libros en el móvil.", org: 'Individual|Individual' },
      { min: 7, t: 'Crea: revisió per parelles i versió 3|Crea: revisión por parejas y versión 3', fase: 'crea',
        fa: "Per parelles, cada alumne/a obre la web de l'altre/a a «Projectes» (al seu ordinador), la prova al mòbil i respon les preguntes de la revisió a l'app. Després li diu una cosa que funciona i una millora concreta. Finalment, cadascú millora la seva web i desa la versió 3.|Por parejas, cada alumno/a abre la web del otro/a en «Proyectos» (en su ordenador), la prueba en el móvil y responde las preguntas de la revisión en la app. Después le dice algo que funciona y una mejora concreta. Finalmente, cada uno mejora su web y guarda la versión 3.",
        diu: ['Primer el que funciona, després la millora.|Primero lo que funciona, después la mejora.', "Quina millora faràs primer amb el que t'ha dit el company/a?|¿Qué mejora harás primero con lo que te ha dicho el compañero/a?"],
        slides: ['s12', 's13'], app: 'Passos «Crea»: la revisió de la web d\'un company/a i la versió 3 de la web.|Pasos «Crea»: la revisión de la web de un compañero/a y la versión 3 de la web.', org: 'Per parelles i després individual|Por parejas y después individual' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Torna a la llista de la sessió 1 (què té una bona web) i afegiu-hi el que heu après avui. Preguntes finals i tiquet a la porta.|Vuelve a la lista de la sesión 1 (qué tiene una buena web) y añadid lo que habéis aprendido hoy. Preguntas finales y ticket en la puerta.",
        diu: ['Què heu canviat de la vostra web gràcies a la revisió?|¿Qué habéis cambiado de vuestra web gracias a la revisión?'],
        slides: ['s14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ['Canvia <h4> per <h2> però deixa </h4> al final.|Cambia <h4> por <h2> pero deja </h4> al final.', "L'editor avisa de l'etiqueta oberta: que llegeixi l'avís i busqui la parella de cada etiqueta.|El editor avisa de la etiqueta abierta: que lea el aviso y busque la pareja de cada etiqueta."],
      ['Tria un títol pel que fa de mida (h4 perquè és petit).|Elige un título por su tamaño (h4 porque es pequeño).', "Pregunta: és tan important com l'altre títol? Si ho és, ha de ser del mateix nivell; la mida es canvia amb CSS (font-size).|Pregunta: ¿es tan importante como el otro título? Si lo es, tiene que ser del mismo nivel; el tamaño se cambia con CSS (font-size)."],
      ['Dona comentaris com «està malament» o «és lletja».|Da comentarios como «está mal» o «es fea».', 'Demana-li que digui primer una cosa que funciona i després què canviaria i com: «el text gris es llegeix malament; prova un color més fosc».|Pídele que diga primero algo que funciona y después qué cambiaría y cómo: «el texto gris se lee mal; prueba un color más oscuro».'],
      ['Escriu la regla @media però sense cap regla a dins, o amb les claus mal tancades.|Escribe la regla @media pero sin ninguna regla dentro, o con las llaves mal cerradas.', "Que compti les claus: la de @media i la de la regla de dins. Al final n'hi ha d'haver dues de tancament.|Que cuente las llaves: la de @media y la de la regla de dentro. Al final tiene que haber dos de cierre."],
      ['Pensa que la revisió vol dir que la seva web està malament.|Piensa que la revisión quiere decir que su web está mal.', "Explica que totes les webs professionals es revisen i que trobar errors abans de publicar és una bona notícia.|Explica que todas las webs profesionales se revisan y que encontrar errores antes de publicar es una buena noticia."]
    ],
    diff: {
      mes: "Afegir a la seva web efectes :hover amb transition als enllaços del menú i comprovar que el text dels enllaços diu on porta. Revisar la web d'un segon company/a.|Añadir a su web efectos :hover con transition a los enlaces del menú y comprobar que el texto de los enlaces dice adónde lleva. Revisar la web de un segundo compañero/a.",
      menys: "Revisar la seva web amb la llista punt per punt, un cada vegada, i començar per l'alt de les imatges. Fer servir el botó d'inserir @media.|Revisar su web con la lista punto por punto, uno cada vez, y empezar por el alt de las imágenes. Usar el botón de insertar @media."
    },
    aval: {
      ticket: ["Digues dues coses que fan que una web sigui accessible.|Di dos cosas que hacen que una web sea accesible.", 'Quin és el millor truc per trobar faltes d\'ortografia?|¿Cuál es el mejor truco para encontrar faltas de ortografía?'],
      rubric: [
        ['Accessibilitat|Accesibilidad', "Totes les imatges tenen alt, els títols van en ordre i els enllaços diuen on porten.|Todas las imágenes tienen alt, los títulos van en orden y los enlaces dicen adónde llevan.", "Ha arreglat alguns problemes, però en queda algun (un alt, un títol desordenat).|Ha arreglado algunos problemas, pero queda alguno (un alt, un título desordenado)."],
        ['Llegibilitat i mòbil|Legibilidad y móvil', 'Colors amb bon contrast, cap falta i una regla @media que funciona.|Colores con buen contraste, ninguna falta y una regla @media que funciona.', "La web es llegeix, però hi ha alguna falta o es veu malament al mòbil.|La web se lee, pero hay alguna falta o se ve mal en el móvil."],
        ['Revisió entre iguals|Revisión entre iguales', 'Dona comentaris amables i concrets i fa servir els que rep per millorar.|Da comentarios amables y concretos y usa los que recibe para mejorar.', "Dona comentaris generals («està bé») o no fa servir els que rep.|Da comentarios generales («está bien») o no usa los que recibe."]
      ]
    },
    casa: "A casa, obriu la web al mòbil (a «Projectes») i llegiu-la en veu alta amb algú de la família. Hi ha alguna paraula mal escrita o alguna part que costi d'entendre? Apunteu-la per arreglar-la a la darrera sessió.|En casa, abrid la web en el móvil (en «Proyectos») y leedla en voz alta con alguien de la familia. ¿Hay alguna palabra mal escrita o alguna parte que cueste entender? Apuntadla para arreglarla en la última sesión.",
    slides: [
      { id: 's1', k: 'portada', t: 'La meva web: revisar i millorar|Mi web: revisar y mejorar', x: "Avui fem d'equip de revisió: que tothom pugui fer servir la web.|Hoy hacemos de equipo de revisión: que todo el mundo pueda usar la web.", nota: "Recorda que la setmana que ve és la Mostra: el que millorem avui és el que veurà el públic.|Recuerda que la semana que viene es la Muestra: lo que mejoremos hoy es lo que verá el público." },
      { id: 's2', k: 'repas', t: 'Recordem|Recordamos', punts: ["Per què serveix l'alt d'una imatge?|¿Para qué sirve el alt de una imagen?", 'Quina propietat posa una fila flex en columna?|¿Qué propiedad pone una fila flex en columna?'], nota: "Respostes: el llegeix el lector de pantalla i surt si la imatge no carrega; flex-direction: column.|Respuestas: lo lee el lector de pantalla y sale si la imagen no carga; flex-direction: column." },
      { id: 's3', k: 'anim', t: 'Una web per a tothom|Una web para todo el mundo', anim: 'w8a11y', x: "L'alt i els títols en ordre guien el lector de pantalla.|El alt y los títulos en orden guían al lector de pantalla.", nota: "Explica que hi ha persones cegues o amb poca visió que naveguen així cada dia. Si en coneixen algun programa, deixa que ho expliquin.|Explica que hay personas ciegas o con poca visión que navegan así cada día. Si conocen algún programa, deja que lo expliquen." },
      { id: 's4', k: 'media', t: 'El contrast|El contraste', x: 'Text fosc sobre fons clar, o al revés.|Texto oscuro sobre fondo claro, o al revés.', media: md({ html: () => `<p class="mal">${L('Gris clar sobre blanc', 'Gris claro sobre blanco')}</p>\n<p class="be">${L('Gairebé negre sobre blanc', 'Casi negro sobre blanco')}</p>\n<p class="be2">${L('Blanc sobre blau fosc', 'Blanco sobre azul oscuro')}</p>`, css: '.mal {\n  color: #C8C8C8;\n}\n.be {\n  color: #1d2433;\n}\n.be2 {\n  color: white;\n  background: #3730A3;\n  padding: 6px;\n}' }), nota: "Si podeu, apagueu un moment els llums o mireu la projecció des del fons de l'aula: el text gris desapareix.|Si podéis, apagad un momento las luces o mirad la proyección desde el fondo del aula: el texto gris desaparece." },
      { id: 's5', k: 'concepte', t: "L'ortografia també es revisa|La ortografía también se revisa", pic: 'img/ment/sin.webp', punts: ['Llegeix el text en veu alta, a poc a poc.|Lee el texto en voz alta, despacio.', 'Revisa majúscules, accents i noms propis.|Revisa mayúsculas, acentos y nombres propios.', 'Les faltes són un senyal de les webs falses!|¡Las faltas son una señal de las webs falsas!'], nota: 'Relaciona-ho amb la unitat 7: una web amb faltes fa desconfiar.|Relaciónalo con la unidad 7: una web con faltas hace desconfiar.' },
      { id: 's6', k: 'media', t: 'Prova-la al mòbil|Pruébala en el móvil', media: md({ html: FILA, css: FILA_CSS }), x: 'Una regla @media posa la fila en columna.|Una regla @media pone la fila en columna.', nota: "Ensenya la regla @media del codi i, si la presentació ho permet, fes la finestra més estreta perquè vegin el canvi.|Enseña la regla @media del código y, si la presentación lo permite, haz la ventana más estrecha para que vean el cambio." },
      { id: 's7', k: 'anim', t: 'La llista de revisió|La lista de revisión', anim: 'w8check', punts: ['Una cosa que funciona…|Algo que funciona…', '… i una millora concreta.|… y una mejora concreta.'], nota: "Modela un comentari amb la web d'exemple: «M'agrada el menú. Proposo un color més fosc per al text.»|Modela un comentario con la web de ejemplo: «Me gusta el menú. Propongo un color más oscuro para el texto.»" },
      { id: 's8', k: 'activitat', t: 'El lector de pantalla humà|El lector de pantalla humano', timer: 6, punts: ['Un/a fa de lector: només títols, alt i text dels enllaços.|Uno/a hace de lector: solo títulos, alt y texto de los enlaces.', "L'altre/a escolta amb els ulls tancats.|El otro/a escucha con los ojos cerrados.", 'De què va la pàgina? On clicaries per apuntar-te?|¿De qué va la página? ¿Dónde harías clic para apuntarte?'], nota: 'Després canvien els papers amb la meitat de baix de la fitxa.|Después cambian los papeles con la mitad de abajo de la ficha.' },
      { id: 's9', k: 'activitat', t: 'Troba els problemes i arregla\'ls|Encuentra los problemas y arréglalos', timer: 6, punts: ['Imatges sense alt|Imágenes sin alt', 'Títols que salten|Títulos que saltan', 'Enllaços «clica aquí»|Enlaces «haz clic aquí»', 'Faltes i contrast|Faltas y contraste'], nota: "Posa en comú dos o tres solucions. Fixa't que proposin solucions concretes, no només «està malament».|Pon en común dos o tres soluciones. Fíjate en que propongan soluciones concretas, no solo «está mal»." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ['Obre la sessió «Revisar i millorar».|Abre la sesión «Revisar y mejorar».', 'Llegeix a poc a poc a les preguntes de les línies.|Lee despacio en las preguntas de las líneas.', 'Para a la pausa activa.|Para en la pausa activa.'], nota: "A la falta d'ortografia, molts llegiran de pressa i no la veuran: és una bona ocasió per comentar-ho.|En la falta de ortografía, muchos leerán deprisa y no la verán: es una buena ocasión para comentarlo." },
      { id: 's11', k: 'repte', t: 'Arregla el club de lectura|Arregla el club de lectura', timer: 8, punts: ["1. Accessibilitat: alt i títols|1. Accesibilidad: alt y títulos", '2. Contrast: colors foscos|2. Contraste: colores oscuros', '3. Mòbil: @media i columna|3. Móvil: @media y columna'], nota: "Qui acabi, que comenci a revisar la seva web amb la llista de paper.|Quien termine, que empiece a revisar su web con la lista de papel." },
      { id: 's12', k: 'activitat', t: 'Revisió per parelles|Revisión por parejas', timer: 4, punts: ["Obre la web del company/a a «Projectes».|Abre la web del compañero/a en «Proyectos».", 'Prova-la amb el botó 📱 i respon a l\'app.|Pruébala con el botón 📱 y responde en la app.', 'Digues una cosa que funciona i una millora.|Di algo que funciona y una mejora.'], nota: "Vigila el to dels comentaris. Si cal, recorda la frase model de la diapositiva 7.|Vigila el tono de los comentarios. Si hace falta, recuerda la frase modelo de la diapositiva 7." },
      { id: 's13', k: 'activitat', t: 'Crea: la versió 3|Crea: la versión 3', timer: 3, punts: ['Alt a totes les imatges i títols en ordre.|Alt en todas las imágenes y títulos en orden.', 'Bon contrast i cap falta.|Buen contraste y ninguna falta.', 'Una regla @media. Desa-la!|Una regla @media. ¡Guárdala!'], nota: "Si no acaben, que desin igualment: a la sessió 4 encara hi haurà una estona per millorar-la.|Si no terminan, que guarden igualmente: en la sesión 4 todavía habrá un rato para mejorarla." },
      { id: 's14', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ['Alt, títols en ordre, enllaços clars i bon contrast.|Alt, títulos en orden, enlaces claros y buen contraste.', 'Llegir en veu alta i provar-la al mòbil.|Leer en voz alta y probarla en el móvil.', 'Revisar amb amabilitat: què funciona i una millora.|Revisar con amabilidad: qué funciona y una mejora.'], nota: "Afegiu aquestes idees a la llista de la sessió 1: «què té una bona web».|Añadid estas ideas a la lista de la sesión 1: «qué tiene una buena web»." },
      { id: 's15', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ['Dues coses que fan una web accessible.|Dos cosas que hacen una web accesible.', 'El millor truc per trobar faltes.|El mejor truco para encontrar faltas.'], nota: "Anota qui no ha desat la versió 3 per donar-li temps al començament de la sessió 4.|Anota quién no ha guardado la versión 3 para darle tiempo al principio de la sesión 4." }
    ],
    print: [
      { id: 'p1', t: "La web del Club d'Escacs per revisar|La web del Club de Ajedrez para revisar", k: 'fitxa',
        intro: "Aquest és el codi de la web d'un club inventat. Primer, un/a de vosaltres fa de lector de pantalla i llegeix només els títols, els alt i el text dels enllaços. Després, trobeu el problema de cada línia i escriviu com l'arreglaríeu.|Este es el código de la web de un club inventado. Primero, uno/a de vosotros hace de lector de pantalla y lee solo los títulos, los alt y el texto de los enlaces. Después, encontrad el problema de cada línea y escribid cómo lo arreglaríais.",
        items: [
          { q: '&lt;h1&gt;Club d\'Escacs de l\'Illa&lt;/h1&gt; … &lt;h4&gt;Horaris&lt;/h4&gt;|&lt;h1&gt;Club de Ajedrez de la Isla&lt;/h1&gt; … &lt;h4&gt;Horarios&lt;/h4&gt;', sol: "Els títols salten de h1 a h4. «Horaris» ha de ser un h2.|Los títulos saltan de h1 a h4. «Horarios» tiene que ser un h2." },
          { q: '&lt;img src="taulell.svg"&gt;|&lt;img src="tablero.svg"&gt;', sol: "Falta l'alt. Per exemple: alt=\"Un taulell d'escacs amb les peces\".|Falta el alt. Por ejemplo: alt=\"Un tablero de ajedrez con las piezas\"." },
          { q: 'Per apuntar-te, &lt;a href="#inscripcio"&gt;clica aquí&lt;/a&gt;.|Para apuntarte, &lt;a href="#inscripcio"&gt;haz clic aquí&lt;/a&gt;.', sol: "El text de l'enllaç no diu on porta. Millor: «Apunta't al club».|El texto del enlace no dice adónde lleva. Mejor: «Apúntate al club»." },
          { q: "&lt;p&gt;Els dissaptes fem tornejos.&lt;/p&gt;|&lt;p&gt;Los savados hacemos torneos.&lt;/p&gt;", sol: 'Falta d\'ortografia: dissabtes (amb b).|Falta de ortografía: sábados (con b y con tilde).' },
          { q: 'p { color: #DDDDDD; } amb el fons blanc.|p { color: #DDDDDD; } con el fondo blanco.', sol: 'Poc contrast: cal un color fosc, com #1d2433.|Poco contraste: hace falta un color oscuro, como #1d2433.' },
          { q: '.taulers { display: flex; } i, al mòbil, els tres taulers queden molt estrets.|.taulers { display: flex; } y, en el móvil, los tres tableros quedan muy estrechos.', sol: 'Afegir @media (max-width: 600px) { .taulers { flex-direction: column; } }.|Añadir @media (max-width: 600px) { .taulers { flex-direction: column; } }.' }
        ] },
      { id: 'p2', t: 'La meva llista de revisió|Mi lista de revisión', k: 'fitxa',
        intro: "Fes servir aquesta llista per revisar la teva web i la d'un company/a. Escriu-hi el que has trobat i què canviaràs.|Usa esta lista para revisar tu web y la de un compañero/a. Escribe lo que has encontrado y qué cambiarás.",
        items: [
          { q: "Totes les imatges tenen un alt que les descriu?|¿Todas las imágenes tienen un alt que las describe?", sol: 'Resposta oberta.|Respuesta abierta.' },
          { q: 'Els títols van en ordre (h1, després h2, després h3)?|¿Los títulos van en orden (h1, después h2, después h3)?', sol: 'Resposta oberta.|Respuesta abierta.' },
          { q: "Els enllaços diuen on porten (res de «clica aquí»)?|¿Los enlaces dicen adónde llevan (nada de «haz clic aquí»)?", sol: 'Resposta oberta.|Respuesta abierta.' },
          { q: 'Es llegeix bé? (contrast i mida de la lletra)|¿Se lee bien? (contraste y tamaño de la letra)', sol: 'Resposta oberta.|Respuesta abierta.' },
          { q: "L'he llegida en veu alta: quines faltes he trobat?|La he leído en voz alta: ¿qué faltas he encontrado?", sol: 'Resposta oberta.|Respuesta abierta.' },
          { q: 'Com es veu al mòbil? Què hi canviaré?|¿Cómo se ve en el móvil? ¿Qué cambiaré?', sol: 'Resposta oberta.|Respuesta abierta.' },
          { q: "El que m'ha dit el company/a: una cosa que funciona i una millora.|Lo que me ha dicho el compañero/a: algo que funciona y una mejora.", sol: 'Resposta oberta.|Respuesta abierta.' }
        ] }
    ]
  };

  /* ---------- Sessió 4 · Presentació i diploma ---------- */
  G['w8-4'] = {
    obj: [
      "L'alumne/a reconeix quines dades personals no s'han de publicar mai en una web pública i les treu de la seva.|El alumno/a reconoce qué datos personales no se deben publicar nunca en una web pública y los quita de la suya.",
      "L'alumne/a completa el document per publicar-lo (lang, title i viewport) i afegeix crèdits i un enllaç «Torna a dalt».|El alumno/a completa el documento para publicarlo (lang, title y viewport) y añade créditos y un enlace «Vuelve arriba».",
      "L'alumne/a presenta la seva web explicant per a qui és, com l'ha feta i què n'ha après, i en mostra una part del codi.|El alumno/a presenta su web explicando para quién es, cómo la ha hecho y qué ha aprendido, y muestra una parte del código.",
      "L'alumne/a escolta les presentacions dels companys/es i hi fa comentaris respectuosos.|El alumno/a escucha las presentaciones de los compañeros/as y les hace comentarios respetuosos."
    ],
    comp: [
      "Competència digital (CD4): protegir les dades personals i la privadesa|Competencia digital (CD4): proteger los datos personales y la privacidad",
      "Competència digital (CD2): publicar continguts digitals amb crèdits i autoria|Competencia digital (CD2): publicar contenidos digitales con créditos y autoría",
      "Comunicació lingüística (oral): presentar un projecte de manera clara i ordenada|Comunicación lingüística (oral): presentar un proyecto de manera clara y ordenada",
      "Competència personal i d'aprendre a aprendre: reflexionar sobre el procés i el que s'ha après|Competencia personal y de aprender a aprender: reflexionar sobre el proceso y lo aprendido"
    ],
    vocab: [
      ['Dades personals|Datos personales', "Informació que diu qui ets o on trobar-te: adreça, telèfon, escola…|Información que dice quién eres o dónde encontrarte: dirección, teléfono, colegio…"],
      ['Publicar|Publicar', "Pujar la web a un servidor perquè qualsevol persona la pugui visitar.|Subir la web a un servidor para que cualquier persona la pueda visitar."],
      ['title|title', "El nom de la pàgina que surt a la pestanya i als cercadors.|El nombre de la página que sale en la pestaña y en los buscadores."],
      ['Crèdits|Créditos', 'Qui ha fet la web i d\'on surten les imatges i les dades.|Quién ha hecho la web y de dónde salen las imágenes y los datos.'],
      ['Presentació|Presentación', "Explicar la teva feina al públic: què has fet, com i què n'has après.|Explicar tu trabajo al público: qué has hecho, cómo y qué has aprendido."]
    ],
    mat: {
      aula: ['Un ordinador per alumne/a amb Numi Tech obert a la sessió «Presentació i diploma»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Presentación y diploma»', 'Projector connectat a un ordinador on es puguin obrir les webs de l\'alumnat (o que cadascú projecti des del seu)|Proyector conectado a un ordenador donde se puedan abrir las webs del alumnado (o que cada uno proyecte desde el suyo)', 'El guió de la presentació imprès i els diplomes|El guion de la presentación impreso y los diplomas', 'Opcional: un rellotge visible per a les presentacions de dos minuts|Opcional: un reloj visible para las presentaciones de dos minutos'],
      imprimir: ['Guió de la meva presentació|Guion de mi presentación', 'Diploma del curs|Diploma del curso'],
      prep: ["Imprimir un guió per alumne/a i un diploma per alumne/a (amb el nom escrit o per escriure a classe).|Imprimir un guion por alumno/a y un diploma por alumno/a (con el nombre escrito o para escribir en clase).", "Decidir com es projectaran les webs: des de l'ordinador de cada alumne/a o des de l'ordinador del professor/a amb el seu compte.|Decidir cómo se proyectarán las webs: desde el ordenador de cada alumno/a o desde el ordenador del profesor/a con su cuenta.", "Preparar l'ordre de les presentacions i, si el grup és gran, repartir-les en dues rondes o fer-les en grups petits.|Preparar el orden de las presentaciones y, si el grupo es grande, repartirlas en dos rondas o hacerlas en grupos pequeños.", "Si voleu, convidar famílies o un altre grup a la Mostra.|Si queréis, invitar a familias u otro grupo a la Muestra."]
    },
    plan: [
      { min: 5, t: "S'obre la Mostra|Se abre la Muestra", fase: 'inici',
        fa: "Dona la benvinguda a la Mostra i fes el repàs del viatge del curs amb l'animació. Explica el pla del dia: deixar la web a punt, assajar, presentar i diplomes.|Da la bienvenida a la Muestra y haz el repaso del viaje del curso con la animación. Explica el plan del día: dejar la web a punto, ensayar, presentar y diplomas.",
        diu: ['Recordeu la primera pàgina que vau escriure? Mireu on som ara!|¿Recordáis la primera página que escribisteis? ¡Mirad dónde estamos ahora!', 'Avui sou els autors i autores: el públic vol saber com ho heu fet.|Hoy sois los autores y autoras: el público quiere saber cómo lo habéis hecho.'],
        slides: ['s1', 's2'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 8, t: 'A punt per publicar|A punto para publicar', fase: 'teoria',
        fa: "Explica quines dades no es posen mai a una web pública. Ensenya el document complet (lang, title, viewport) i el peu amb crèdits i «Torna a dalt». Acaba amb les tres preguntes de la presentació.|Explica qué datos no se ponen nunca en una web pública. Enseña el documento completo (lang, title, viewport) y el pie con créditos y «Vuelve arriba». Termina con las tres preguntas de la presentación.",
        diu: ["Qui pot veure una web publicada? I qui la pot copiar?|¿Quién puede ver una web publicada? ¿Y quién la puede copiar?", 'El nom de pila sí; l\'adreça, el telèfon i l\'escola, mai.|El nombre sí; la dirección, el teléfono y el colegio, nunca.'],
        slides: ['s3', 's4', 's5', 's6'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: "A l'ordinador: la versió final|En el ordenador: la versión final", fase: 'ordinador',
        fa: "Fan els passos de l'app fins a la versió final de la web: les dades personals, el document complet, «Torna a dalt» i, a la seva web, el peu amb crèdits. Després responen les preguntes per preparar la presentació. Passeja i comprova que ningú no tingui dades personals a la web.|Hacen los pasos de la app hasta la versión final de la web: los datos personales, el documento completo, «Vuelve arriba» y, en su web, el pie con créditos. Después responden las preguntas para preparar la presentación. Pasea y comprueba que nadie tenga datos personales en la web.",
        diu: ['Hi ha alguna cosa a la teva web que digui on vius o on estudies? Treu-la.|¿Hay algo en tu web que diga dónde vives o dónde estudias? Quítalo.', "Al peu: qui l'ha feta i d'on són les imatges.|En el pie: quién la ha hecho y de dónde son las imágenes."],
        slides: ['s7'], app: "De «La missió» fins a «Crea»: la història, les targetes, ordenar la presentació, la pàgina de la Júlia, la línia que no s'ha de publicar, el title, la pausa activa, els dos reptes, la versió final de la web i les preguntes per preparar la presentació.|De «La misión» hasta «Crea»: la historia, las tarjetas, ordenar la presentación, la página de Júlia, la línea que no se debe publicar, el title, la pausa activa, los dos retos, la versión final de la web y las preguntas para preparar la presentación.", org: 'Individual|Individual' },
      { min: 10, t: 'Assaig en trios|Ensayo en tríos', fase: 'desconnectat',
        fa: "En grups de tres, amb el guió imprès. Cada alumne/a assaja la presentació (dos minuts) mentre un company/a fa de públic i l'altre/a controla el temps. El públic diu «una estrella i un desig»: una cosa que ha agradat i una que milloraria. Roten els papers.|En grupos de tres, con el guion impreso. Cada alumno/a ensaya la presentación (dos minutos) mientras un compañero/a hace de público y el otro/a controla el tiempo. El público dice «una estrella y un deseo»: algo que le ha gustado y algo que mejoraría. Rotan los papeles.",
        diu: ['Dos minuts: per a qui és, com l\'has feta i què n\'has après.|Dos minutos: para quién es, cómo la has hecho y qué has aprendido.', "Una estrella i un desig: primer el que ha funcionat.|Una estrella y un deseo: primero lo que ha funcionado."],
        slides: ['s8', 's9'], app: 'Cap: assaig sense pantalla, amb el guió de paper.|Ninguna: ensayo sin pantalla, con el guion de papel.', org: 'Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan' },
      { min: 20, t: 'La Mostra de Webs|La Muestra de Webs', fase: 'crea',
        fa: "Cada alumne/a presenta la seva web projectada (uns dos minuts): portada, menú i seccions, una part del codi, què n'ha après i com es veu al mòbil. El públic fa una pregunta o un comentari amable. Si el grup és gran, feu dues rondes en grups o una «fira» on la meitat presenta a la seva taula i l'altra meitat visita.|Cada alumno/a presenta su web proyectada (unos dos minutos): portada, menú y secciones, una parte del código, qué ha aprendido y cómo se ve en el móvil. El público hace una pregunta o un comentario amable. Si el grupo es grande, haced dos rondas en grupos o una «feria» donde la mitad presenta en su mesa y la otra mitad visita.",
        diu: ['Aplaudim cada presentació: tothom ha fet una web sencera!|Aplaudimos cada presentación: ¡todo el mundo ha hecho una web entera!', "Una pregunta per al presentador/a: què t'ha costat més?|Una pregunta para el presentador/a: ¿qué te ha costado más?"],
        slides: ['s10', 's11', 's12'], app: 'La web de cada alumne/a, oberta a «Projectes».|La web de cada alumno/a, abierta en «Proyectos».', org: 'Tot el grup (o fira per taules)|Todo el grupo (o feria por mesas)' },
      { min: 5, t: 'Diplomes i tancament|Diplomas y cierre', fase: 'tancament',
        fa: "Tots junts acaben la sessió a l'app: surt el diploma (es pot imprimir). Lliura el diploma de paper i fes el tiquet de sortida. Acaba explicant com poden continuar creant webs.|Todos juntos terminan la sesión en la app: sale el diploma (se puede imprimir). Entrega el diploma de papel y haz el ticket de salida. Termina explicando cómo pueden seguir creando webs.",
        diu: ['Enhorabona: ja sabeu què hi ha darrere de cada pàgina que obriu!|Enhorabuena: ¡ya sabéis lo que hay detrás de cada página que abrís!', 'Quina és la propera web que us agradaria fer?|¿Cuál es la próxima web que os gustaría hacer?'],
        slides: ['s13', 's14', 's15'], app: "«Tancament»: el diploma, el missatge d'en Bit, l'última pregunta i com m'he sentit.|«Cierre»: el diploma, el mensaje de Bit, la última pregunta y cómo me he sentido.", org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ["Posa a la web el nom complet, l'escola o una foto de la cara.|Pone en la web el nombre completo, el colegio o una foto de la cara.", "Pregunta-li: qui podria veure aquesta web? I què en podria saber de tu? Ajuda'l a substituir-ho pel nom de pila o per una il·lustració.|Pregúntale: ¿quién podría ver esta web? ¿Y qué podría saber de ti? Ayúdale a sustituirlo por el nombre o por una ilustración."],
      ['Posa id="#inici" o href="inici" (sense #).|Pone id="#inici" o href="inici" (sin #).', "Recorda la regla de la sessió 1: el # només a l'enllaç i el mateix nom als dos llocs.|Recuerda la regla de la sesión 1: el # solo en el enlace y el mismo nombre en los dos sitios."],
      ['A la presentació, llegeix el codi línia per línia o es queda en silenci.|En la presentación, lee el código línea por línea o se queda en silencio.', "Que segueixi el guió de paper: tres preguntes i una sola part del codi, explicada amb paraules.|Que siga el guion de papel: tres preguntas y una sola parte del código, explicada con palabras."],
      ['Està molt nerviós/osa i no vol presentar davant de tothom.|Está muy nervioso/a y no quiere presentar delante de todo el mundo.', "Ofereix-li presentar en un grup petit o a la seva taula durant la fira, o fer-ho en parella amb un company/a.|Ofrécele presentar en un grupo pequeño o en su mesa durante la feria, o hacerlo en pareja con un compañero/a."],
      ["La web no està acabada i no la vol ensenyar.|La web no está terminada y no la quiere enseñar.", "Recorda que les webs de veritat sempre es poden millorar: que expliqui què té, què li falta i com ho faria.|Recuerda que las webs de verdad siempre se pueden mejorar: que explique qué tiene, qué le falta y cómo lo haría."]
    ],
    diff: {
      mes: "Afegir a la seva web una segona pàgina inventada (enllaç a una altra secció o una pàgina de crèdits) o una galeria amb :hover i transition. Ajudar els companys/es a assajar.|Añadir a su web una segunda página inventada (enlace a otra sección o una página de créditos) o una galería con :hover y transition. Ayudar a los compañeros/as a ensayar.",
      menys: "Presentar només dues preguntes del guió (per a qui és i què n'ha après) i ensenyar el menú com a part del codi. Assajar primer amb el professor/a.|Presentar solo dos preguntas del guion (para quién es y qué ha aprendido) y enseñar el menú como parte del código. Ensayar primero con el profesor/a."
    },
    aval: {
      ticket: ["Digues dues dades que no posaries mai en una web pública.|Di dos datos que nunca pondrías en una web pública.", "Què és el que més t'ha agradat aprendre en aquest curs?|¿Qué es lo que más te ha gustado aprender en este curso?"],
      rubric: [
        ['Web final|Web final', "La web té l'esquelet complet, contingut propi, estil, crèdits, «Torna a dalt» i cap dada personal.|La web tiene el esqueleto completo, contenido propio, estilo, créditos, «Vuelve arriba» y ningún dato personal.", "La web funciona, però li falten els crèdits o alguna part, o té alguna dada personal.|La web funciona, pero le faltan los créditos o alguna parte, o tiene algún dato personal."],
        ['Presentació|Presentación', "Explica per a qui és, com l'ha feta (amb una part del codi) i què n'ha après, de manera clara.|Explica para quién es, cómo la ha hecho (con una parte del código) y qué ha aprendido, de manera clara.", "Ensenya la web, però costa entendre com l'ha feta o què n'ha après.|Enseña la web, pero cuesta entender cómo la ha hecho o qué ha aprendido."],
        ['Escolta i respecte|Escucha y respeto', 'Escolta les presentacions i fa preguntes o comentaris amables.|Escucha las presentaciones y hace preguntas o comentarios amables.', 'Escolta, però no participa o fa comentaris poc concrets.|Escucha, pero no participa o hace comentarios poco concretos.']
      ]
    },
    casa: "A casa, presenteu la web a la família tal com l'heu presentada a la Mostra: per a qui és, com l'heu feta i què n'heu après. Penseu junts quina altra web us agradaria fer!|En casa, presentad la web a la familia tal como la habéis presentado en la Muestra: para quién es, cómo la habéis hecho y qué habéis aprendido. ¡Pensad juntos qué otra web os gustaría hacer!",
    slides: [
      { id: 's1', k: 'portada', t: 'La Mostra de Webs|La Muestra de Webs', x: 'Avui presentem les nostres webs… i hi ha diplomes!|Hoy presentamos nuestras webs… ¡y hay diplomas!', nota: "Crea ambient de celebració: és la culminació de tot el curs.|Crea ambiente de celebración: es la culminación de todo el curso." },
      { id: 's2', k: 'anim', t: 'Vuit unitats, una web teva|Ocho unidades, una web tuya', anim: 'w8journey', nota: "Recorre les unitats i demana a un alumne/a diferent què recorda de cadascuna.|Recorre las unidades y pide a un alumno/a diferente qué recuerda de cada una." },
      { id: 's3', k: 'anim', t: 'El que no va mai a una web pública|Lo que nunca va en una web pública', anim: 'w8safe', punts: ['Nom de pila: sí.|Nombre: sí.', 'Adreça, telèfon, escola, cognom complet, fotos de la cara: mai.|Dirección, teléfono, colegio, apellido completo, fotos de la cara: nunca.'], nota: "Explica que el que es publica es pot copiar i guardar, i que és molt difícil fer-ho desaparèixer.|Explica que lo que se publica se puede copiar y guardar, y que es muy difícil hacerlo desaparecer." },
      { id: 's4', k: 'media', t: 'El document complet|El documento completo', x: 'lang, title i viewport per publicar-la.|lang, title y viewport para publicarla.', media: md({ html: () => `<!doctype html>\n<html lang="${L('ca', 'es')}">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>${L('El cel de nit', 'El cielo de noche')}</title>\n</head>\n<body>\n  <h1>${L('El cel de nit', 'El cielo de noche')}</h1>\n</body>\n</html>` }), nota: "Recorda la unitat 1: per publicar-la cal un servidor i un domini; el fitxer és aquest document complet.|Recuerda la unidad 1: para publicarla hace falta un servidor y un dominio; el archivo es este documento completo." },
      { id: 's5', k: 'media', t: 'Crèdits i «Torna a dalt»|Créditos y «Vuelve arriba»', media: md({ html: AINA, css: AINA_CSS }), x: 'id="inici" a la capçalera i href="#inici" al peu.|id="inici" en la cabecera y href="#inici" en el pie.', nota: "Fes notar que és el mateix truc del menú de la sessió 1: un enllaç intern.|Haz notar que es el mismo truco del menú de la sesión 1: un enlace interno." },
      { id: 's6', k: 'concepte', t: 'Tres preguntes per presentar|Tres preguntas para presentar', pic: 'img/ment/nom.webp', punts: ['Per a qui és i de què va?|¿Para quién es y de qué va?', "Com l'he feta? (una part del codi)|¿Cómo la he hecho? (una parte del código)", "Què n'he après? (un error, una millora)|¿Qué he aprendido? (un error, una mejora)"], nota: "Fes una presentació model de dos minuts amb la web de l'Aina per ensenyar el to i el temps.|Haz una presentación modelo de dos minutos con la web de Aina para enseñar el tono y el tiempo." },
      { id: 's7', k: 'activitat', t: "A l'ordinador: la versió final|En el ordenador: la versión final", timer: 12, punts: ['Fes la sessió fins a «Crea».|Haz la sesión hasta «Crea».', 'Treu qualsevol dada personal de la teva web.|Quita cualquier dato personal de tu web.', 'Peu amb crèdits i «Torna a dalt». Desa-la!|Pie con créditos y «Vuelve arriba». ¡Guárdala!', 'Respon les preguntes de la presentació.|Responde las preguntas de la presentación.'], nota: 'Passa per totes les taules i revisa que cap web no tingui dades personals abans de projectar-la.|Pasa por todas las mesas y revisa que ninguna web tenga datos personales antes de proyectarla.' },
      { id: 's8', k: 'activitat', t: 'Assaig en trios|Ensayo en tríos', timer: 10, punts: ['Presentador/a: dos minuts amb el guió.|Presentador/a: dos minutos con el guion.', 'Públic: escolta i diu una estrella i un desig.|Público: escucha y dice una estrella y un deseo.', 'Rellotge: avisa quan falten 30 segons.|Reloj: avisa cuando faltan 30 segundos.'], nota: "Roten els papers fins que tots tres hagin assajat.|Rotan los papeles hasta que los tres hayan ensayado." },
      { id: 's9', k: 'activitat', t: 'Una estrella i un desig|Una estrella y un deseo', punts: ["⭐ Una cosa que m'ha agradat de la presentació.|⭐ Algo que me ha gustado de la presentación.", '💡 Una cosa que milloraria per a la Mostra.|💡 Algo que mejoraría para la Muestra.'], nota: "Deixa-la projectada durant l'assaig.|Déjala proyectada durante el ensayo." },
      { id: 's10', k: 'activitat', t: 'La Mostra de Webs|La Muestra de Webs', timer: 20, punts: ['Dos minuts per web.|Dos minutos por web.', 'Ensenya-la a l\'ordinador i al mòbil.|Enséñala en el ordenador y en el móvil.', 'Al final, una pregunta del públic.|Al final, una pregunta del público.'], nota: "Si el grup és gran, organitza una fira: la meitat presenta a la seva taula i l'altra meitat visita, i després canvien.|Si el grupo es grande, organiza una feria: la mitad presenta en su mesa y la otra mitad visita, y después cambian." },
      { id: 's11', k: 'concepte', t: 'Com ser un bon públic|Cómo ser un buen público', punts: ['Escolta sense interrompre.|Escucha sin interrumpir.', "Fes una pregunta: què t'ha costat més? Com has fet…?|Haz una pregunta: ¿qué te ha costado más? ¿Cómo has hecho…?", 'Aplaudeix: tothom ha fet una web sencera!|Aplaude: ¡todo el mundo ha hecho una web entera!'], nota: 'Projecta-la abans de començar les presentacions.|Proyéctala antes de empezar las presentaciones.' },
      { id: 's12', k: 'pregunta', t: 'Preguntes per al presentador/a|Preguntas para el presentador/a', punts: ['Quina part del codi t\'agrada més?|¿Qué parte del código te gusta más?', 'Quin error et va costar més de trobar?|¿Qué error te costó más encontrar?', 'Què hi afegiries si tinguessis més temps?|¿Qué añadirías si tuvieras más tiempo?'], nota: "Fes-les servir si el públic no s'anima a preguntar.|Úsalas si el público no se anima a preguntar." },
      { id: 's13', k: 'resum', t: 'Què hem après en aquest curs|Qué hemos aprendido en este curso', punts: ['Com viatja una pàgina i què hi ha dins: HTML, CSS i imatges.|Cómo viaja una página y qué hay dentro: HTML, CSS e imágenes.', 'A estructurar, donar estil i adaptar una web al mòbil.|A estructurar, dar estilo y adaptar una web al móvil.', 'A planificar, construir, revisar i presentar un projecte propi.|A planificar, construir, revisar y presentar un proyecto propio.'], nota: 'Lliura els diplomes de paper mentre l\'app mostra el diploma digital.|Entrega los diplomas de papel mientras la app muestra el diploma digital.' },
      { id: 's14', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ['Dues dades que no posaries mai en una web pública.|Dos datos que nunca pondrías en una web pública.', "El que més t'ha agradat aprendre.|Lo que más te ha gustado aprender."], nota: 'Recull les respostes: són una bona avaluació final del curs.|Recoge las respuestas: son una buena evaluación final del curso.' },
      { id: 's15', k: 'concepte', t: 'I ara, què?|Y ahora, ¿qué?', punts: ['Les webs dels «Projectes» continuen a l\'app: les podeu millorar.|Las webs de «Proyectos» siguen en la app: las podéis mejorar.', 'Mireu el codi de les webs que visiteu: ara ja l\'enteneu!|Mirad el código de las webs que visitáis: ¡ahora ya lo entendéis!', 'Proposeu-vos una web nova: una afició, un club, un regal.|Proponeos una web nueva: una afición, un club, un regalo.'], nota: "Acaba amb un aplaudiment per a tot el grup.|Termina con un aplauso para todo el grupo." }
    ],
    print: [
      { id: 'p1', t: 'Guió de la meva presentació|Guion de mi presentación', k: 'fitxa',
        intro: "Escriu unes paraules per a cada pregunta: t'ajudaran a recordar què vols dir. No cal escriure frases llargues. Tens uns dos minuts.|Escribe unas palabras para cada pregunta: te ayudarán a recordar qué quieres decir. No hace falta escribir frases largas. Tienes unos dos minutos.",
        items: [
          { q: 'Com es diu la meva web, de què va i per a qui és?|¿Cómo se llama mi web, de qué va y para quién es?', sol: "Resposta oberta: el nom, el tema i el públic.|Respuesta abierta: el nombre, el tema y el público." },
          { q: "Quina part del codi ensenyaré i com l'explicaré? (el menú, una classe, la regla @media…)|¿Qué parte del código enseñaré y cómo la explicaré? (el menú, una clase, la regla @media…)", sol: 'Resposta oberta: una part concreta, explicada amb paraules.|Respuesta abierta: una parte concreta, explicada con palabras.' },
          { q: "Què n'he après? (un error que vaig arreglar, una millora que em va proposar un company/a)|¿Qué he aprendido? (un error que arreglé, una mejora que me propuso un compañero/a)", sol: 'Resposta oberta: valoreu que expliqui un error o una millora concreta.|Respuesta abierta: valorad que explique un error o una mejora concreta.' },
          { q: 'Estrella i desig de l\'assaig (ho escriu el company/a):|Estrella y deseo del ensayo (lo escribe el compañero/a):', sol: 'Resposta oberta.|Respuesta abierta.' }
        ] },
      { id: 'p2', t: 'Diploma del curs|Diploma del curso', k: 'diploma',
        intro: 'ha completat el curs Tech Web de Numi Tech: ha planificat, construït, revisat i presentat la seva pròpia web amb HTML i CSS.|ha completado el curso Tech Web de Numi Tech: ha planificado, construido, revisado y presentado su propia web con HTML y CSS.',
        items: [
          'Sap com viatja una pàgina per internet i què hi ha dins d\'una web.|Sabe cómo viaja una página por internet y qué hay dentro de una web.',
          "Escriu HTML amb títols, paràgrafs, llistes, imatges amb alt i enllaços.|Escribe HTML con títulos, párrafos, listas, imágenes con alt y enlaces.",
          'Dona estil amb CSS: colors, lletres, classes, caixes, flexbox i graelles.|Da estilo con CSS: colores, letras, clases, cajas, flexbox y rejillas.',
          'Adapta les webs al mòbil i en revisa l\'accessibilitat.|Adapta las webs al móvil y revisa su accesibilidad.',
          'Ha planificat, construït, revisat i presentat una web pròpia.|Ha planificado, construido, revisado y presentado una web propia.'
        ] }
    ]
  };
  return G;
})());
