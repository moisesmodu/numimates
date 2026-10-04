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
