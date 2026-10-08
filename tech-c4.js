/* Numi Tech · Tech Web · sessions de les unitats. Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */
(function () {
const COURSE_UNITS = {};

/* ── unitat 1 ── */
/* Tech Web · unitat 1 «Com funciona internet» (w1-1 … w1-4)
   Contingut propi de Numi. L'alumne/a entra a l'Estudi Web de l'illa i segueix el viatge d'una pàgina: la xarxa i
   internet, el client i el servidor, els paquets i els routers (w1-1); l'adreça IP, els dominis, el DNS i les parts
   d'una URL (w1-2); què hi ha dins una web: HTML, CSS i imatges, i els primers canvis al codi (w1-3); i el projecte
   del mapa d'internet, amb la seva pàgina web (w1-4). Tots els noms de webs, botigues i adreces són inventats
   (dominis .numi i adreces IP dels rangs reservats per a exemples: 198.51.100.x i 203.0.113.x).
   El codi dels reptes també és bilingüe: un text "codi en català|código en castellano" a html, css o text es
   converteix en una propietat que torna l'idioma de l'alumne/a (vegeu bil() a sota). */
Object.assign(TBADGE, {
  w_paquet: { id: 'w_paquet', ico: '📨', n: "Viatger/a d'internet|Viajero/a de internet", d: "Has seguit el viatge d'una pàgina: del servidor al navegador, en paquets i passant per routers.|Has seguido el viaje de una página: del servidor al navegador, en paquetes y pasando por routers." },
  w_dns: { id: 'w_dns', ico: '🔍', n: "Detectiu/iva d'adreces|Detective de direcciones", d: "Saps llegir una URL i explicar com el DNS troba l'adreça IP d'una web.|Sabes leer una URL y explicar cómo el DNS encuentra la dirección IP de una web." },
  w_codi: { id: 'w_codi', ico: '🔧', n: 'Mecànic/a de webs|Mecánico/a de webs', d: "Has obert una web per dins i n'has canviat l'HTML, el CSS i la imatge.|Has abierto una web por dentro y has cambiado su HTML, su CSS y su imagen." },
  w_mapa: { id: 'w_mapa', ico: '🗺️', n: "Cartògraf/a d'internet|Cartógrafo/a de internet", d: "Projecte acabat: has fet el mapa d'internet i la pàgina web que l'explica.|Proyecto terminado: has hecho el mapa de internet y la página web que lo explica." }
});

COURSE_UNITS[1] = (() => {
  // codi bilingüe: B('codi ca', 'código es') → "ca|es"; bil() el converteix en una propietat que tria l'idioma en llegir-la
  const B = (ca, es) => ca + '|' + es;
  const LZ = new Set(['html', 'css', 'text']);
  const pick = v => { const i = v.indexOf('|'); return typeof L === 'function' ? L(v.slice(0, i), v.slice(i + 1)) : v.slice(0, i); };
  const bil = o => { if (Array.isArray(o)) { o.forEach(bil); return o; } if (o && typeof o === 'object') for (const k of Object.keys(o)) { const v = o[k];
    if (LZ.has(k) && typeof v === 'string' && v.includes('|')) Object.defineProperty(o, k, { get: () => pick(v), enumerable: true, configurable: true }); else if (v && typeof v === 'object') bil(v); } return o; };
  // colors amb nom que es llegeixen bé sobre fons blanc (per comprovar que l'alumne/a n'ha posat un de nou)
  const COLS = ['red', 'green', 'blue', 'orange', 'purple', 'pink', 'brown', 'navy', 'teal', 'crimson', 'tomato', 'coral', 'olive', 'maroon', 'magenta', 'violet', 'indigo', 'darkgreen', 'darkblue', 'darkred', 'darkorange', 'darkviolet', 'hotpink', 'deeppink', 'royalblue', 'seagreen', 'chocolate', 'orchid', 'turquoise', 'darkcyan', 'steelblue', 'black', 'gray', 'grey'];
  const colRx = no => `/^(${COLS.filter(c => c !== no).join('|')}|#[0-9a-f]{3}|#[0-9a-f]{6})$/i`;
  const IMGS = '(gat|gos|tortuga|guineu|lloro|peix|balena|ocell|papallona)';
  // codi que es repeteix en diverses opcions
  const HOLA = B('<h1>Hola!</h1>\n<p>He viatjat fins aquí.</p>', '<h1>¡Hola!</h1>\n<p>He viajado hasta aquí.</p>');
  const PIZ = B("<h1>Pizzes</h1>\n<p>Les més bones de l'illa.</p>", '<h1>Pizzas</h1>\n<p>Las más buenas de la isla.</p>');
  const PLA = B('<h1>Platja</h1>\n<p>Sorra i mar.</p>', '<h1>Playa</h1>\n<p>Arena y mar.</p>');
  const MAPQ = B('<h1>Mapa</h1>\n<p>DNS, IP i routers.</p>', '<h1>Mapa</h1>\n<p>DNS, IP y routers.</p>');
  const MAP = B("<h1>El viatge d'una pàgina</h1>\n<p>Primer, el DNS troba l'adreça.</p>", '<h1>El viaje de una página</h1>\n<p>Primero, el DNS encuentra la dirección.</p>');

  return bil({ t: 'Com funciona internet|Cómo funciona internet', d: 'Servidors, adreces i navegadors|Servidores, direcciones y navegadores', color: '#14A3B8', s: [
  /* ---------- Sessió 1 · El viatge d'una pàgina ---------- */
  { id: 'w1-1', t: "El viatge d'una pàgina|El viaje de una página", min: 40, badge: 'w_paquet',
    learn: ["Internet és una xarxa de xarxes: ordinadors de tot el món connectats per cables, fibra òptica i ones.|Internet es una red de redes: ordenadores de todo el mundo conectados por cables, fibra óptica y ondas.",
      'El navegador (el client) demana la pàgina i el servidor, que la guarda, la hi envia.|El navegador (el cliente) pide la página y el servidor, que la guarda, se la envía.',
      "Les dades viatgen en paquets numerats que els routers encaminen; en arribar, es tornen a ordenar.|Los datos viajan en paquetes numerados que los routers encaminan; al llegar, se vuelven a ordenar."],
    steps: [
      { k: 'quiz', ph: 'recorda', q: "Abans de començar: quan obres una web al mòbil, <b>on és la pàgina</b> just abans que la vegis?|Antes de empezar: cuando abres una web en el móvil, <b>¿dónde está la página</b> justo antes de que la veas?",
        opts: ["En un ordinador llunyà que la guarda i te l'envia|En un ordenador lejano que la guarda y te la envía", 'Dins del mòbil, des del dia que el vas comprar|Dentro del móvil, desde el día que lo compraste', "Enlloc: el mòbil se l'inventa en aquell moment|En ningún sitio: el móvil se la inventa en ese momento"], a: 0,
        ex: "Les pàgines web es guarden en ordinadors que en diem <b>servidors</b>. Quan la demanes, la pàgina fa un viatge fins a tu. Avui el seguirem pas a pas!|Las páginas web se guardan en ordenadores que llamamos <b>servidores</b>. Cuando la pides, la página hace un viaje hasta ti. ¡Hoy lo seguiremos paso a paso!" },
      { k: 'story', ph: 'missio', who: 'both', scene: 'lab', title: "L'Estudi Web de l'illa|El Estudio Web de la isla",
        t: "Benvingut/da a l'<b>Estudi Web</b> de l'illa! En aquest curs faràs webs de veritat, amb <b>HTML</b> i <b>CSS</b>, els mateixos llenguatges que fan servir els professionals. Però abans, un misteri: com pot arribar una pàgina des de l'altra punta del món fins a la teva pantalla <b>en menys d'un segon</b>?|¡Bienvenido/a al <b>Estudio Web</b> de la isla! En este curso harás webs de verdad, con <b>HTML</b> y <b>CSS</b>, los mismos lenguajes que usan los profesionales. Pero antes, un misterio: ¿cómo puede llegar una página desde la otra punta del mundo hasta tu pantalla <b>en menos de un segundo</b>?" },
      { k: 'story', ph: 'missio', who: 'bit', mood: 'happy', art: () => TANI.w1cs(),
        t: "BIP! Jo treballo a la sala dels <b>servidors</b>. Cada vegada que algú demana una pàgina, la meva feina és enviar-la. Avui en seguirem el viatge sencer: hi ha <b>cables sota el mar</b>, <b>routers</b> que trien camins i <b>paquets</b> que viatgen separats!|¡BIP! Yo trabajo en la sala de los <b>servidores</b>. Cada vez que alguien pide una página, mi trabajo es enviarla. Hoy seguiremos su viaje entero: ¡hay <b>cables bajo el mar</b>, <b>routers</b> que eligen caminos y <b>paquetes</b> que viajan separados!" },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Xarxa|Red', t: 'Una xarxa… i una xarxa de xarxes|Una red… y una red de redes', anim: 'w1net',
          x: "Una <span class='hl'>xarxa</span> són aparells connectats que es poden enviar dades: l'ordinador, el mòbil i la tauleta de casa, connectats al router, formen una xarxa. <span class='hl'>Internet</span> és una <b>xarxa de xarxes</b>: milions de xarxes de cases, escoles i empreses de tot el món, connectades entre elles.|Una <span class='hl'>red</span> son aparatos conectados que pueden enviarse datos: el ordenador, el móvil y la tableta de casa, conectados al router, forman una red. <span class='hl'>Internet</span> es una <b>red de redes</b>: millones de redes de casas, escuelas y empresas de todo el mundo, conectadas entre ellas.",
          tip: "Les connexions poden ser cables de coure, <b>fibra òptica</b> (fils de vidre que porten llum) o ones, com el wifi i les dades del mòbil. Entre continents, les dades viatgen sobretot per cables de fibra posats al fons del mar.|Las conexiones pueden ser cables de cobre, <b>fibra óptica</b> (hilos de vidrio que llevan luz) u ondas, como el wifi y los datos del móvil. Entre continentes, los datos viajan sobre todo por cables de fibra colocados en el fondo del mar.",
          bad: 'El wifi i internet són el mateix.|El wifi e internet son lo mismo.', good: "El wifi només connecta el teu aparell amb el router de casa; internet és la xarxa gegant que hi ha darrere.|El wifi solo conecta tu aparato con el router de casa; internet es la red gigante que hay detrás." },
        { k: 'Client i servidor|Cliente y servidor', t: 'Algú demana i algú respon|Alguien pide y alguien responde', anim: 'w1cs',
          x: "Les webs es guarden en ordinadors especials, els <span class='hl'>servidors</span>, que estan engegats dia i nit. El teu navegador fa de <span class='hl'>client</span>: envia una <b>petició</b> («vull la pàgina gats.html») i el servidor envia una <b>resposta</b> amb els fitxers de la pàgina.|Las webs se guardan en ordenadores especiales, los <span class='hl'>servidores</span>, que están encendidos día y noche. Tu navegador hace de <span class='hl'>cliente</span>: envía una <b>petición</b> («quiero la página gats.html») y el servidor envía una <b>respuesta</b> con los archivos de la página.",
          tip: "Un servidor pot respondre a moltes peticions alhora: per això una mateixa web la pot mirar molta gent a la vegada.|Un servidor puede responder a muchas peticiones a la vez: por eso una misma web la puede mirar mucha gente al mismo tiempo." },
        { k: 'Paquets|Paquetes', t: 'La pàgina viatja a trossos|La página viaja a trozos', anim: 'w1pack',
          x: "Una pàgina no viatja d'una sola peça: es trenca en trossos petits, els <span class='hl'>paquets</span>. Cada paquet porta l'adreça on va i un <b>número d'ordre</b>. Poden fer camins diferents i arribar desordenats: l'ordinador que els rep els torna a ordenar i, si en falta algun, el torna a demanar.|Una página no viaja de una sola pieza: se rompe en trozos pequeños, los <span class='hl'>paquetes</span>. Cada paquete lleva la dirección adonde va y un <b>número de orden</b>. Pueden hacer caminos distintos y llegar desordenados: el ordenador que los recibe los vuelve a ordenar y, si falta alguno, lo vuelve a pedir." },
        { k: 'Routers|Routers', t: 'Els routers trien el camí|Los routers eligen el camino', anim: 'w1route',
          x: "Els <span class='hl'>routers</span> són com les cruïlles d'internet: reben paquets i decideixen per on els envien perquè s'acostin al seu destí. Si un camí s'espatlla, en busquen un altre. Per això internet continua funcionant encara que es trenqui un cable.|Los <span class='hl'>routers</span> son como los cruces de internet: reciben paquetes y deciden por dónde los envían para que se acerquen a su destino. Si un camino se estropea, buscan otro. Por eso internet sigue funcionando aunque se rompa un cable.",
          tip: "El router de casa és el primer router del viatge: connecta la xarxa de casa amb internet.|El router de casa es el primer router del viaje: conecta la red de casa con internet." }
      ] },
      { k: 'seq', ph: 'mans', q: "<b>Ordena el viatge</b> d'una pàgina, des que toques un enllaç fins que la veus.|<b>Ordena el viaje</b> de una página, desde que tocas un enlace hasta que la ves.",
        items: ['Toques un enllaç al navegador|Tocas un enlace en el navegador', 'El navegador envia una petició al servidor|El navegador envía una petición al servidor', 'El servidor trenca la pàgina en paquets i els envia|El servidor rompe la página en paquetes y los envía',
          "Els routers es passen els paquets d'un a l'altre|Los routers se pasan los paquetes de uno a otro", "Els paquets arriben i s'ordenen pel seu número|Los paquetes llegan y se ordenan por su número", 'El navegador dibuixa la pàgina a la pantalla|El navegador dibuja la página en la pantalla'],
        ex: "Aquest és el viatge que fa <b>cada</b> pàgina que obres. I tot plegat sol durar menys d'un segon!|Este es el viaje que hace <b>cada</b> página que abres. ¡Y todo junto suele durar menos de un segundo!" },
      { k: 'unplug', ph: 'mans', ico: '📨', title: 'Fes de paquet|Haz de paquete',
        t: 'Amb algú de casa i quatre papers:|Con alguien de casa y cuatro papeles:',
        steps: ["Escriu una frase de 8 paraules repartida en 4 papers (2 paraules a cada un). Numera'ls de l'1 al 4 i escriu a tots «Per a:» i el nom de l'altra persona.|Escribe una frase de 8 palabras repartida en 4 papeles (2 palabras en cada uno). Numéralos del 1 al 4 y escribe en todos «Para:» y el nombre de la otra persona.",
          "Barreja els papers i dona'ls d'un en un, desordenats. L'altra persona ha de reconstruir la frase només amb els números.|Mezcla los papeles y dáselos de uno en uno, desordenados. La otra persona tiene que reconstruir la frase solo con los números.",
          "Torneu-ho a fer, però amaga'n un. Qui rep els paquets ha de descobrir quin número falta i demanar-lo.|Volved a hacerlo, pero esconde uno. Quien recibe los paquetes tiene que descubrir qué número falta y pedirlo.",
          'Canvieu els papers: ara l\'altra persona escriu la frase.|Cambiad los papeles: ahora la otra persona escribe la frase.'],
        tip: "És el que fan els ordinadors: el número d'ordre serveix per tornar a ajuntar els paquets i per saber quin falta.|Es lo que hacen los ordenadores: el número de orden sirve para volver a juntar los paquetes y para saber cuál falta." },
      { k: 'quiz', ph: 'prova', q: 'Quan obres una web, quin paper fa el teu <b>navegador</b>?|Cuando abres una web, ¿qué papel hace tu <b>navegador</b>?',
        opts: ['El de client: demana la pàgina i la rep|El de cliente: pide la página y la recibe', 'El de servidor: guarda les webs de tothom|El de servidor: guarda las webs de todo el mundo', 'El de router: tria el camí de cada paquet|El de router: elige el camino de cada paquete'], a: 0,
        ex: 'El navegador és el <b>client</b>: fa la petició. El servidor guarda la web i respon.|El navegador es el <b>cliente</b>: hace la petición. El servidor guarda la web y responde.' },
      { k: 'quiz', ph: 'prova', q: 'Per què cada paquet porta un <b>número</b>?|¿Por qué cada paquete lleva un <b>número</b>?',
        opts: ['Per tornar-los a posar en ordre i saber si en falta algun|Para volver a ponerlos en orden y saber si falta alguno', 'Per saber quant costa enviar-los|Para saber cuánto cuesta enviarlos', 'Perquè els routers els comptin i en llencin la meitat|Para que los routers los cuenten y tiren la mitad'], a: 0,
        ex: "Com que poden arribar desordenats, el número permet tornar a muntar la pàgina tal com era.|Como pueden llegar desordenados, el número permite volver a montar la página tal como era." },
      { k: 'quiz', ph: 'investiga', art: () => TANI.w1route(), q: 'Un paquet arriba a un router i el camí que fa servir normalment <b>està tallat</b>. Què passa?|Un paquete llega a un router y el camino que usa normalmente <b>está cortado</b>. ¿Qué pasa?',
        opts: ['El router l\'envia per un altre camí|El router lo envía por otro camino', 'El paquet es queda esperant per sempre|El paquete se queda esperando para siempre', "La pàgina s'esborra del servidor|La página se borra del servidor"], a: 0,
        ex: "Internet té molts camins possibles entre dos punts. Els routers en busquen un altre i el paquet arriba igualment, potser una mica més tard.|Internet tiene muchos caminos posibles entre dos puntos. Los routers buscan otro y el paquete llega igualmente, quizá un poco más tarde." },
      { k: 'move', ph: 'pausa', secs: 30, t: "Fes de paquet! Aixeca't: <b>4 passos endavant</b> (un cable), <b>gira</b> (un router t'envia per un altre camí), <b>3 passos més</b>… Has arribat! Ara torna al teu lloc pel camí del revés.|¡Haz de paquete! Levántate: <b>4 pasos adelante</b> (un cable), <b>gira</b> (un router te envía por otro camino), <b>3 pasos más</b>… ¡Has llegado! Ahora vuelve a tu sitio por el camino al revés." },
      { k: 'quiz', ph: 'repte', q: 'La teva tauleta està connectada al wifi de casa, però el router de casa <b>ha perdut la connexió a internet</b>. Què passa?|Tu tableta está conectada al wifi de casa, pero el router de casa <b>ha perdido la conexión a internet</b>. ¿Qué pasa?',
        opts: ['Pots veure les fotos guardades a la tauleta, però no pots obrir webs noves|Puedes ver las fotos guardadas en la tableta, pero no puedes abrir webs nuevas', 'Pots obrir qualsevol web igualment, perquè el wifi és internet|Puedes abrir cualquier web igualmente, porque el wifi es internet', "La tauleta s'apaga sola|La tableta se apaga sola"], a: 0,
        ex: "El wifi arriba fins al router, però sense connexió a internet les peticions no poden sortir de casa ni arribar als servidors.|El wifi llega hasta el router, pero sin conexión a internet las peticiones no pueden salir de casa ni llegar a los servidores." },
      { k: 'seq', ph: 'repte', q: "Una pàgina ve d'un servidor de l'altra punta del món. <b>Ordena</b> per on passa la petició, del més proper a tu al més llunyà.|Una página viene de un servidor de la otra punta del mundo. <b>Ordena</b> por dónde pasa la petición, de lo más cercano a ti a lo más lejano.",
        items: ['La teva tauleta|Tu tableta', 'El router de casa|El router de casa', "Els routers de l'empresa que et dona internet|Los routers de la empresa que te da internet", 'Un cable de fibra òptica sota el mar|Un cable de fibra óptica bajo el mar', 'El servidor on es guarda la web|El servidor donde se guarda la web'],
        ex: "La resposta fa el mateix camí, però al revés: del servidor fins a la teva tauleta.|La respuesta hace el mismo camino, pero al revés: del servidor hasta tu tableta." },
      { k: 'quiz', ph: 'repte', q: "Quina d'aquestes coses <b>no</b> forma part del viatge d'una pàgina?|¿Cuál de estas cosas <b>no</b> forma parte del viaje de una página?",
        opts: ["Una impressora que imprimeix la pàgina abans d'enviar-la|Una impresora que imprime la página antes de enviarla", 'Un servidor|Un servidor', 'Uns quants routers|Unos cuantos routers', 'Cables de fibra òptica|Cables de fibra óptica'], a: 0,
        ex: "La pàgina viatja com a dades (paquets), no en paper. Servidor, routers i cables sí que hi són.|La página viaja como datos (paquetes), no en papel. Servidor, routers y cables sí que están." },
      { k: 'wquiz', ph: 'repte', q: "El servidor envia aquest <b>codi</b>. Què dibuixa el navegador a la pantalla?|El servidor envía este <b>código</b>. ¿Qué dibuja el navegador en la pantalla?",
        code: { html: HOLA },
        opts: [{ html: HOLA }, { html: B('<pre>&lt;h1&gt;Hola!&lt;/h1&gt;\n&lt;p&gt;He viatjat\nfins aquí.&lt;/p&gt;</pre>', '<pre>&lt;h1&gt;¡Hola!&lt;/h1&gt;\n&lt;p&gt;He viajado\nhasta aquí.&lt;/p&gt;</pre>') },
          { html: B('<p>He viatjat fins aquí.</p>', '<p>He viajado hasta aquí.</p>') }, { html: B('<h1>Hola!</h1>', '<h1>¡Hola!</h1>') }], a: 0,
        ex: "El navegador no et mostra el codi: el <b>llegeix</b> i dibuixa el que diu. El codi demana un títol gran (<code>h1</code>) i un paràgraf (<code>p</code>), i això és el que veus.|El navegador no te muestra el código: lo <b>lee</b> y dibuja lo que dice. El código pide un título grande (<code>h1</code>) y un párrafo (<code>p</code>), y eso es lo que ves." },
      { k: 'wcreate', ph: 'crea', name: 'La meva primera pàgina|Mi primera página', url: 'https://estudi.numi/primera.html',
        q: "La teva primera pàgina ja és al servidor de l'Estudi Web! <b>Omple els buits ___</b> canviant-los per paraules teves i mira com canvia la vista prèvia. Toca només el text, no els signes &lt; &gt;.|¡Tu primera página ya está en el servidor del Estudio Web! <b>Rellena los huecos ___</b> cambiándolos por palabras tuyas y mira cómo cambia la vista previa. Toca solo el texto, no los signos &lt; &gt;.",
        crit: ['Omple els tres buits ___|Rellena los tres huecos ___', "Diu d'on ve la pàgina: d'un servidor|Dice de dónde viene la página: de un servidor", 'Les etiquetes continuen ben tancades|Las etiquetas siguen bien cerradas'],
        html: B("<h1>Hola, internet!</h1>\n<p>El meu nom de programador/a és ___.</p>\n<p>Aquesta pàgina ha viatjat en paquets des d'un ___ fins al meu navegador.</p>\n<p>El meu animal preferit és ___.</p>",
          '<h1>¡Hola, internet!</h1>\n<p>Mi nombre de programador/a es ___.</p>\n<p>Esta página ha viajado en paquetes desde un ___ hasta mi navegador.</p>\n<p>Mi animal preferido es ___.</p>'),
        checks: [{ k: 'tag', t: 'p', text: '___', min: 0, max: 0, txt: "Ja no queda cap buit ___|Ya no queda ningún hueco ___" },
          { k: 'tag', t: 'p', text: 'servidor', txt: "Has dit d'on ve la pàgina: d'un servidor|Has dicho de dónde viene la página: de un servidor" },
          { k: 'tag', t: 'p', min: 3, txt: 'Continuen els tres paràgrafs|Siguen los tres párrafos' }, { k: 'clean' }],
        sol: { html: B("<h1>Hola, internet!</h1>\n<p>El meu nom de programador/a és Llamp Blau.</p>\n<p>Aquesta pàgina ha viatjat en paquets des d'un servidor fins al meu navegador.</p>\n<p>El meu animal preferit és la guineu.</p>",
          '<h1>¡Hola, internet!</h1>\n<p>Mi nombre de programador/a es Rayo Azul.</p>\n<p>Esta página ha viajado en paquetes desde un servidor hasta mi navegador.</p>\n<p>Mi animal preferido es el zorro.</p>') },
        hint: "Esborra cada ___ i escriu-hi la teva paraula. Al segon buit: on es guarden les pàgines web?|Borra cada ___ y escribe tu palabra. En el segundo hueco: ¿dónde se guardan las páginas web?" },
      { k: 'quiz', ph: 'tanca', q: 'Per acabar: què és <b>internet</b>?|Para terminar: ¿qué es <b>internet</b>?', opts: ['Una xarxa de xarxes que connecta ordinadors de tot el món|Una red de redes que conecta ordenadores de todo el mundo', 'Un programa per mirar vídeos|Un programa para ver vídeos', 'El wifi de casa|El wifi de casa'], a: 0 },
      { k: 'quiz', ph: 'tanca', q: 'Què fa un <b>servidor</b>?|¿Qué hace un <b>servidor</b>?', opts: ['Guarda pàgines i les envia quan algú les demana|Guarda páginas y las envía cuando alguien las pide', 'Dibuixa la pàgina a la teva pantalla|Dibuja la página en tu pantalla', 'Tria el camí de cada paquet|Elige el camino de cada paquete'], a: 0,
        ex: "Qui dibuixa la pàgina és el navegador, i qui tria els camins són els routers.|Quien dibuja la página es el navegador, y quien elige los caminos son los routers." },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 2 · Adreces i dominis ---------- */
  { id: 'w1-2', t: 'Adreces i dominis|Direcciones y dominios', min: 40, badge: 'w_dns',
    learn: ["Cada aparell connectat a internet té una adreça IP: uns números que diuen on és.|Cada aparato conectado a internet tiene una dirección IP: unos números que dicen dónde está.",
      'Un domini és un nom fàcil de recordar, i el DNS el tradueix a una adreça IP, com una agenda.|Un dominio es un nombre fácil de recordar, y el DNS lo traduce a una dirección IP, como una agenda.',
      'Una URL té el protocol (https), el domini i el camí fins a la pàgina exacta.|Una URL tiene el protocolo (https), el dominio y la ruta hasta la página exacta.'],
    steps: [
      { k: 'quiz', ph: 'recorda', q: 'Recordes la sessió anterior? <b>Qui envia la pàgina</b> quan el navegador la demana?|¿Recuerdas la sesión anterior? <b>¿Quién envía la página</b> cuando el navegador la pide?',
        opts: ['El servidor|El servidor', 'El router de casa|El router de casa', 'El teclat|El teclado'], a: 0 },
      { k: 'quiz', ph: 'recorda', q: 'I com viatja la pàgina per internet?|¿Y cómo viaja la página por internet?',
        opts: ["Trencada en paquets numerats|Rota en paquetes numerados", "Sencera, d'una sola peça|Entera, de una sola pieza", 'En un sobre de paper|En un sobre de papel'], a: 0 },
      { k: 'story', ph: 'missio', who: 'both', scene: 'poble', title: 'La botiga FotoNuvi|La tienda FotoNuvi',
        t: "La Guida té una botiga de fotos al poble i ha estrenat la seva web, <b>fotonuvi.numi</b>. Però hi ha un misteri: a internet, els ordinadors no es troben pel nom… <b>sinó per números!</b> Com pot ser que escriguis un nom i arribis a la botiga de la Guida?|Guida tiene una tienda de fotos en el pueblo y ha estrenado su web, <b>fotonuvi.numi</b>. Pero hay un misterio: en internet, los ordenadores no se encuentran por el nombre… <b>¡sino por números!</b> ¿Cómo puede ser que escribas un nombre y llegues a la tienda de Guida?" },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Adreça IP|Dirección IP', t: 'Cada aparell té la seva adreça|Cada aparato tiene su dirección', anim: 'w1ip',
          x: "Cada aparell connectat a internet té una <span class='hl'>adreça IP</span>: uns números que diuen on és, com l'adreça d'una casa. Les més habituals tenen <b>4 números de 0 a 255</b> separats per punts, com <b>203.0.113.25</b>. Cada paquet porta l'adreça IP on va i la de qui l'envia, perquè la resposta sàpiga tornar.|Cada aparato conectado a internet tiene una <span class='hl'>dirección IP</span>: unos números que dicen dónde está, como la dirección de una casa. Las más habituales tienen <b>4 números de 0 a 255</b> separados por puntos, como <b>203.0.113.25</b>. Cada paquete lleva la dirección IP adonde va y la de quien lo envía, para que la respuesta sepa volver.",
          tip: "Hi ha tants aparells connectats que es va crear un altre tipus d'adreça més llarga, la IPv6, amb moltíssimes més combinacions.|Hay tantos aparatos conectados que se creó otro tipo de dirección más larga, la IPv6, con muchísimas más combinaciones." },
        { k: 'Domini i DNS|Dominio y DNS', t: "El DNS, l'agenda d'internet|El DNS, la agenda de internet", anim: 'w1dns',
          x: "Recordar números és difícil, i per això les webs tenen un <span class='hl'>domini</span>: un nom com <b>fotonuvi.numi</b>. Quan l'escrius, el navegador pregunta al <span class='hl'>DNS</span> quina adreça IP té aquest nom, igual que el mòbil busca el número d'un contacte a l'agenda. Amb la IP, ja pot enviar la petició al servidor.|Recordar números es difícil, y por eso las webs tienen un <span class='hl'>dominio</span>: un nombre como <b>fotonuvi.numi</b>. Cuando lo escribes, el navegador pregunta al <span class='hl'>DNS</span> qué dirección IP tiene ese nombre, igual que el móvil busca el número de un contacto en la agenda. Con la IP, ya puede enviar la petición al servidor.",
          bad: 'fotonuvi.numi i fotonubi.numi porten a la mateixa web.|fotonuvi.numi y fotonubi.numi llevan a la misma web.', good: "Cada domini és diferent: una sola lletra canviada et porta a una altra web, o a cap.|Cada dominio es diferente: una sola letra cambiada te lleva a otra web, o a ninguna." },
        { k: 'URL|URL', t: "Les parts d'una URL|Las partes de una URL", anim: 'w1url',
          x: "L'adreça completa d'una pàgina és la <span class='hl'>URL</span>. Comença pel <b>protocol</b> (<b>https://</b>, les normes per parlar amb el servidor), després ve el <b>domini</b> (quina web) i, al final, el <b>camí</b> (quina pàgina d'aquella web, com <b>/gats.html</b>).|La dirección completa de una página es la <span class='hl'>URL</span>. Empieza por el <b>protocolo</b> (<b>https://</b>, las normas para hablar con el servidor), después viene el <b>dominio</b> (qué web) y, al final, la <b>ruta</b> (qué página de esa web, como <b>/gats.html</b>).",
          tip: "La <b>s</b> de https vol dir «segur»: el que envies i reps viatja xifrat. Ho indica el candau. Compte: el candau diu que la connexió és segura, no que la web sigui de fiar.|La <b>s</b> de https quiere decir «seguro»: lo que envías y recibes viaja cifrado. Lo indica el candado. Cuidado: el candado dice que la conexión es segura, no que la web sea de fiar." },
        { k: 'Navegador|Navegador', t: 'El navegador ho llegeix i ho dibuixa|El navegador lo lee y lo dibuja',
          media: { k: 'web', html: B("<h1>FotoNuvi</h1>\n<p>Fotos de l'illa i del poble.</p>\n<img src=\"img/tech/web/platja.svg\" alt=\"La platja de l'illa\" width=\"130\">", '<h1>FotoNuvi</h1>\n<p>Fotos de la isla y del pueblo.</p>\n<img src="img/tech/web/platja.svg" alt="La playa de la isla" width="130">') },
          x: "El <span class='hl'>navegador</span> és el programa que fa tota aquesta feina: llegeix la URL, pregunta al DNS, envia la petició, rep els fitxers i <b>dibuixa la pàgina</b>. A l'esquerra tens el codi que envia el servidor de FotoNuvi; a la dreta, el que en dibuixa el navegador.|El <span class='hl'>navegador</span> es el programa que hace todo este trabajo: lee la URL, pregunta al DNS, envía la petición, recibe los archivos y <b>dibuja la página</b>. A la izquierda tienes el código que envía el servidor de FotoNuvi; a la derecha, lo que dibuja el navegador." }
      ] },
      { k: 'seq', ph: 'mans', q: "Escrius <b>fotonuvi.numi</b> a la barra d'adreces. <b>Ordena</b> què passa després.|Escribes <b>fotonuvi.numi</b> en la barra de direcciones. <b>Ordena</b> qué pasa después.",
        items: ['Escrius fotonuvi.numi i prems Retorn|Escribes fotonuvi.numi y pulsas Intro', "El navegador pregunta al DNS l'adreça IP de fotonuvi.numi|El navegador pregunta al DNS la dirección IP de fotonuvi.numi", 'El DNS respon: 203.0.113.25|El DNS responde: 203.0.113.25',
          'El navegador envia la petició a 203.0.113.25|El navegador envía la petición a 203.0.113.25', 'El servidor de FotoNuvi respon amb la pàgina|El servidor de FotoNuvi responde con la página', 'El navegador dibuixa la pàgina|El navegador dibuja la página'],
        ex: "Primer el nom es converteix en número (DNS) i després es demana la pàgina a aquell número.|Primero el nombre se convierte en número (DNS) y después se pide la página a ese número." },
      { k: 'unplug', ph: 'mans', ico: '🔍', title: "L'agenda DNS de casa|La agenda DNS de casa",
        t: 'Amb algú de casa, un paper i un llapis:|Con alguien de casa, un papel y un lápiz:',
        steps: ["Inventeu 5 webs (per exemple, <b>pizzes.numi</b> o <b>gats.numi</b>) i doneu a cadascuna una adreça IP inventada de 4 números de 0 a 255. Apunteu-ho en una llista: és la vostra agenda DNS.|Inventad 5 webs (por ejemplo, <b>pizzas.numi</b> o <b>gatos.numi</b>) y dad a cada una una dirección IP inventada de 4 números de 0 a 255. Apuntadlo en una lista: es vuestra agenda DNS.",
          "Una persona fa de navegador i pregunta: «Quina IP té pizzes.numi?». L'altra fa de DNS: la busca a l'agenda i diu el número.|Una persona hace de navegador y pregunta: «¿Qué IP tiene pizzas.numi?». La otra hace de DNS: la busca en la agenda y dice el número.",
          'Ara el navegador pregunta per un domini que no és a la llista, o amb una lletra canviada. Què ha de respondre el DNS?|Ahora el navegador pregunta por un dominio que no está en la lista, o con una letra cambiada. ¿Qué tiene que responder el DNS?',
          'Canvieu els papers i afegiu dues webs més a l\'agenda.|Cambiad los papeles y añadid dos webs más a la agenda.'],
        tip: "Quan un domini no existeix, el DNS no troba cap adreça i el navegador avisa que no pot trobar el servidor.|Cuando un dominio no existe, el DNS no encuentra ninguna dirección y el navegador avisa de que no puede encontrar el servidor." },
      { k: 'quiz', ph: 'prova', q: "Quina d'aquestes és una <b>adreça IP</b> ben escrita?|¿Cuál de estas es una <b>dirección IP</b> bien escrita?",
        opts: ['198.51.100.7|198.51.100.7', '198.51.300.7|198.51.300.7', 'fotonuvi.numi|fotonuvi.numi', '198-51-100-7|198-51-100-7'], a: 0,
        ex: "Té 4 números de 0 a 255 separats per punts. El 300 és massa gran, els guions no serveixen i fotonuvi.numi és un domini, no una IP.|Tiene 4 números de 0 a 255 separados por puntos. El 300 es demasiado grande, los guiones no sirven y fotonuvi.numi es un dominio, no una IP." },
      { k: 'quiz', ph: 'prova', q: 'Per a què serveix el <b>DNS</b>?|¿Para qué sirve el <b>DNS</b>?',
        opts: ['Per traduir un domini (un nom) a una adreça IP (un número)|Para traducir un dominio (un nombre) a una dirección IP (un número)', 'Per fer que el wifi vagi més de pressa|Para que el wifi vaya más deprisa', 'Per dibuixar la pàgina a la pantalla|Para dibujar la página en la pantalla'], a: 0 },
      { k: 'quiz', ph: 'investiga', q: 'En aquesta URL, <b>quin és el domini</b>?<br><code>https://pomesiperes.numi/fruita/pomes.html</code>|En esta URL, <b>¿cuál es el dominio</b>?<br><code>https://pomesiperes.numi/fruita/pomes.html</code>',
        opts: ['pomesiperes.numi|pomesiperes.numi', 'https://|https://', '/fruita/pomes.html|/fruita/pomes.html', 'pomes.html|pomes.html'], a: 0,
        ex: "El domini va després de <b>https://</b> i abans de la primera barra <b>/</b>. El que ve després és el camí: la carpeta <b>fruita</b> i la pàgina <b>pomes.html</b>.|El dominio va después de <b>https://</b> y antes de la primera barra <b>/</b>. Lo que viene después es la ruta: la carpeta <b>fruita</b> y la página <b>pomes.html</b>." },
      { k: 'move', ph: 'pausa', secs: 30, t: "Aixeca't i escriu a l'aire, amb el dit i ben gran, el domini <b>estudi.numi</b>. A cada punt, fes un petit salt. Ara escriu-lo al revés, de l'última lletra a la primera!|Levántate y escribe en el aire, con el dedo y bien grande, el dominio <b>estudi.numi</b>. En cada punto, da un pequeño salto. ¡Ahora escríbelo al revés, de la última letra a la primera!" },
      { k: 'quiz', ph: 'repte', q: "Vols anar a <b>fotonuvi.numi</b>, però t'equivoques i escrius <b>fotonubi.numi</b>. Què pot passar?|Quieres ir a <b>fotonuvi.numi</b>, pero te equivocas y escribes <b>fotonubi.numi</b>. ¿Qué puede pasar?",
        opts: ['Que arribis a una altra web, o que el navegador no en trobi cap|Que llegues a otra web, o que el navegador no encuentre ninguna', 'Res: el navegador sempre ho arregla sol|Nada: el navegador siempre lo arregla solo', "Que la web de FotoNuvi s'esborri|Que la web de FotoNuvi se borre"], a: 0,
        ex: "Per al DNS són dos noms diferents. Hi ha webs falses que fan servir noms gairebé iguals per enganyar: mira sempre bé l'adreça abans d'escriure-hi res.|Para el DNS son dos nombres diferentes. Hay webs falsas que usan nombres casi iguales para engañar: mira siempre bien la dirección antes de escribir nada en ella." },
      { k: 'seq', ph: 'repte', q: "<b>Construeix la URL</b> de la pàgina dels gats de la web exemple.numi: posa les parts en l'ordre en què s'escriuen.|<b>Construye la URL</b> de la página de los gatos de la web exemple.numi: pon las partes en el orden en que se escriben.",
        items: ['https://|https://', 'exemple.numi|exemple.numi', '/animals|/animals', '/gats.html|/gats.html'],
        ex: "<b>https://exemple.numi/animals/gats.html</b>: protocol, domini i camí (la carpeta animals i la pàgina gats.html).|<b>https://exemple.numi/animals/gats.html</b>: protocolo, dominio y ruta (la carpeta animals y la página gats.html)." },
      { k: 'quiz', ph: 'repte', q: 'Quina part de la URL diu que la connexió va <b>xifrada</b>?|¿Qué parte de la URL dice que la conexión va <b>cifrada</b>?',
        opts: ['La s de https|La s de https', 'El domini|El dominio', 'El final .html|El final .html'], a: 0,
        ex: "Amb https, el que envies viatja xifrat i ningú pel camí ho pot llegir. Però recorda: el candau no vol dir que la web sigui de fiar, només que la connexió és segura.|Con https, lo que envías viaja cifrado y nadie por el camino lo puede leer. Pero recuerda: el candado no quiere decir que la web sea de fiar, solo que la conexión es segura." },
      { k: 'web', ph: 'repte', url: 'https://fotonuvi.numi',
        q: "La Guida vol que la seva web digui on és. <b>Canvia els ???</b>: al primer, escriu el domini <b>fotonuvi.numi</b> i, al segon, l'adreça IP <b>203.0.113.25</b>.|Guida quiere que su web diga dónde está. <b>Cambia los ???</b>: en el primero, escribe el dominio <b>fotonuvi.numi</b> y, en el segundo, la dirección IP <b>203.0.113.25</b>.",
        html: B("<h1>FotoNuvi</h1>\n<p>La botiga de fotos de l'illa.</p>\n<p>Domini: ???</p>\n<p>Adreça IP: ???</p>", '<h1>FotoNuvi</h1>\n<p>La tienda de fotos de la isla.</p>\n<p>Dominio: ???</p>\n<p>Dirección IP: ???</p>'),
        checks: [{ k: 'tag', t: 'p', text: 'fotonuvi.numi', txt: 'Hi ha el domini fotonuvi.numi|Está el dominio fotonuvi.numi' }, { k: 'tag', t: 'p', text: '203.0.113.25', txt: "Hi ha l'adreça IP 203.0.113.25|Está la dirección IP 203.0.113.25" },
          { k: 'tag', t: 'p', text: '???', min: 0, max: 0, txt: 'Ja no queda cap ???|Ya no queda ningún ???' }, { k: 'clean' }],
        sol: { html: B("<h1>FotoNuvi</h1>\n<p>La botiga de fotos de l'illa.</p>\n<p>Domini: fotonuvi.numi</p>\n<p>Adreça IP: 203.0.113.25</p>", '<h1>FotoNuvi</h1>\n<p>La tienda de fotos de la isla.</p>\n<p>Dominio: fotonuvi.numi</p>\n<p>Dirección IP: 203.0.113.25</p>') },
        hint: "Esborra els tres signes ??? i escriu-hi el text. Les etiquetes &lt;p&gt; i &lt;/p&gt; s'han de quedar on són.|Borra los tres signos ??? y escribe el texto. Las etiquetas &lt;p&gt; y &lt;/p&gt; tienen que quedarse donde están." },
      { k: 'wcreate', ph: 'crea', name: 'La meva agenda DNS|Mi agenda DNS', url: 'https://estudi.numi/agenda.html',
        q: "Crea la teva <b>agenda DNS</b>: ja hi ha dues webs. <b>Afegeix-ne dues més</b>, inventades, amb la seva adreça IP. Truc: copia una línia sencera de <code>&lt;li&gt;</code> a <code>&lt;/li&gt;</code> i canvia'n el text, o fes servir els botons de sota l'editor.|Crea tu <b>agenda DNS</b>: ya hay dos webs. <b>Añade dos más</b>, inventadas, con su dirección IP. Truco: copia una línea entera de <code>&lt;li&gt;</code> a <code>&lt;/li&gt;</code> y cambia su texto, o usa los botones de debajo del editor.",
        crit: ['Hi ha almenys 4 webs a l\'agenda|Hay al menos 4 webs en la agenda', 'Cada web té una fletxa → i la seva adreça IP|Cada web tiene una flecha → y su dirección IP', 'Les IP tenen 4 números de 0 a 255|Las IP tienen 4 números de 0 a 255'],
        html: B("<h1>La meva agenda DNS</h1>\n<p>Cada domini té la seva adreça IP.</p>\n<ul>\n  <li>fotonuvi.numi → 203.0.113.25</li>\n  <li>estudi.numi → 198.51.100.7</li>\n</ul>", '<h1>Mi agenda DNS</h1>\n<p>Cada dominio tiene su dirección IP.</p>\n<ul>\n  <li>fotonuvi.numi → 203.0.113.25</li>\n  <li>estudi.numi → 198.51.100.7</li>\n</ul>'),
        snips: ['<li>|</li>', ' → ', '.numi'],
        checks: [{ k: 'in', t: 'li', p: 'ul', min: 4, txt: "L'agenda té almenys 4 webs|La agenda tiene al menos 4 webs" }, { k: 'tag', t: 'li', text: '→', min: 4, txt: 'Totes les línies tenen la fletxa →|Todas las líneas tienen la flecha →' }, { k: 'clean' }],
        sol: { html: B("<h1>La meva agenda DNS</h1>\n<p>Cada domini té la seva adreça IP.</p>\n<ul>\n  <li>fotonuvi.numi → 203.0.113.25</li>\n  <li>estudi.numi → 198.51.100.7</li>\n  <li>pizzes.numi → 198.51.100.42</li>\n  <li>dracs.numi → 203.0.113.80</li>\n</ul>", '<h1>Mi agenda DNS</h1>\n<p>Cada dominio tiene su dirección IP.</p>\n<ul>\n  <li>fotonuvi.numi → 203.0.113.25</li>\n  <li>estudi.numi → 198.51.100.7</li>\n  <li>pizzas.numi → 198.51.100.42</li>\n  <li>dragones.numi → 203.0.113.80</li>\n</ul>') },
        hint: "Posa el cursor al final de l'última línia &lt;li&gt;, prem Retorn i toca el botó &lt;li&gt;&lt;/li&gt;. Escriu-hi el domini, la fletxa i la IP.|Pon el cursor al final de la última línea &lt;li&gt;, pulsa Intro y toca el botón &lt;li&gt;&lt;/li&gt;. Escribe el dominio, la flecha y la IP." },
      { k: 'quiz', ph: 'tanca', q: 'Què és un <b>domini</b>?|¿Qué es un <b>dominio</b>?', opts: ['El nom fàcil de recordar d\'una web, com estudi.numi|El nombre fácil de recordar de una web, como estudi.numi', 'Quatre números separats per punts|Cuatro números separados por puntos', 'Un cable que va sota el mar|Un cable que va bajo el mar'], a: 0 },
      { k: 'quiz', ph: 'tanca', q: "Quina d'aquestes és una <b>URL completa</b>?|¿Cuál de estas es una <b>URL completa</b>?", opts: ['https://estudi.numi/cursos.html|https://estudi.numi/cursos.html', 'estudi|estudi', '203.0.113|203.0.113', '/cursos.html|/cursos.html'], a: 0,
        ex: 'Té les tres parts: protocol (https://), domini (estudi.numi) i camí (/cursos.html).|Tiene las tres partes: protocolo (https://), dominio (estudi.numi) y ruta (/cursos.html).' },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 3 · Què hi ha dins una web? ---------- */
  { id: 'w1-3', t: 'Què hi ha dins una web?|¿Qué hay dentro de una web?', min: 40, badge: 'w_codi',
    learn: ["Una web és text: l'HTML diu què hi ha (títols, paràgrafs, imatges) i el CSS diu com es veu.|Una web es texto: el HTML dice qué hay (títulos, párrafos, imágenes) y el CSS dice cómo se ve.",
      "Les imatges són fitxers a part: l'HTML només diu on són (src) i què mostren (alt).|Las imágenes son archivos aparte: el HTML solo dice dónde están (src) y qué muestran (alt).",
      'El navegador llegeix el codi de dalt a baix i dibuixa la pàgina tal com diu.|El navegador lee el código de arriba abajo y dibuja la página tal como dice.'],
    steps: [
      { k: 'quiz', ph: 'recorda', q: 'Recordes què fa el <b>DNS</b>?|¿Recuerdas qué hace el <b>DNS</b>?', opts: ["Troba l'adreça IP d'un domini|Encuentra la dirección IP de un dominio", 'Guarda les fotos de les webs|Guarda las fotos de las webs', 'Pinta la pàgina de colors|Pinta la página de colores'], a: 0 },
      { k: 'quiz', ph: 'recorda', q: 'A la URL <code>https://estudi.numi/cursos.html</code>, què és <b>/cursos.html</b>?|En la URL <code>https://estudi.numi/cursos.html</code>, ¿qué es <b>/cursos.html</b>?',
        opts: ['El camí: quina pàgina volem del servidor|La ruta: qué página queremos del servidor', 'El domini|El dominio', 'El protocol|El protocolo'], a: 0 },
      { k: 'story', ph: 'missio', who: 'both', scene: 'taller', title: 'Obrim una web per dins|Abrimos una web por dentro',
        t: "Ja saps com viatja una pàgina. Però <b>què hi ha dins dels paquets?</b> Avui obrirem una web per dins, com qui obre un rellotge per veure'n les peces… i en canviarem coses. Amb <b>codi de veritat</b>!|Ya sabes cómo viaja una página. Pero <b>¿qué hay dentro de los paquetes?</b> Hoy abriremos una web por dentro, como quien abre un reloj para ver sus piezas… y cambiaremos cosas. ¡Con <b>código de verdad</b>!" },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Dins una web|Dentro de una web', t: 'Fitxers de text i imatges|Archivos de texto e imágenes', anim: 'w1page',
          x: "Quan demanes una web, el servidor no t'envia una foto de la pàgina: t'envia <b>fitxers de text amb codi</b> i les imatges a part. El navegador llegeix el codi i dibuixa la pàgina. Primer arriba l'<b>HTML</b> (què hi ha), després el <b>CSS</b> (com es veu) i les <b>imatges</b>.|Cuando pides una web, el servidor no te envía una foto de la página: te envía <b>archivos de texto con código</b> y las imágenes aparte. El navegador lee el código y dibuja la página. Primero llega el <b>HTML</b> (qué hay), después el <b>CSS</b> (cómo se ve) y las <b>imágenes</b>.",
          tip: "La majoria de navegadors d'ordinador tenen una opció per <b>veure el codi font</b> de qualsevol pàgina. Prova-ho a casa amb una web que coneguis!|La mayoría de navegadores de ordenador tienen una opción para <b>ver el código fuente</b> de cualquier página. ¡Pruébalo en casa con una web que conozcas!" },
        { k: 'HTML|HTML', t: "L'HTML diu què hi ha|El HTML dice qué hay",
          media: { k: 'web', html: B('<h1>Els gats</h1>\n<p>El gat és un animal molt curiós.</p>', '<h1>Los gatos</h1>\n<p>El gato es un animal muy curioso.</p>') },
          x: "L'<span class='hl'>HTML</span> és el llenguatge que diu <b>què hi ha</b> a la pàgina: un títol, un paràgraf, una imatge… Cada cosa va entre <b>etiquetes</b>: <code>&lt;h1&gt;</code> obre un títol i <code>&lt;/h1&gt;</code>, amb la barra, el tanca. <code>&lt;p&gt;</code> és un paràgraf. Ho aprendràs a fons a la unitat següent.|El <span class='hl'>HTML</span> es el lenguaje que dice <b>qué hay</b> en la página: un título, un párrafo, una imagen… Cada cosa va entre <b>etiquetas</b>: <code>&lt;h1&gt;</code> abre un título y <code>&lt;/h1&gt;</code>, con la barra, lo cierra. <code>&lt;p&gt;</code> es un párrafo. Lo aprenderás a fondo en la unidad siguiente." },
        { k: 'CSS|CSS', t: 'El CSS diu com es veu|El CSS dice cómo se ve',
          media: { k: 'web', html: B('<h1>Els gats</h1>\n<p>El gat és un animal molt curiós.</p>', '<h1>Los gatos</h1>\n<p>El gato es un animal muy curioso.</p>'), css: 'h1 {\n  color: purple;\n}\np {\n  color: gray;\n}' },
          x: "El <span class='hl'>CSS</span> és el llenguatge de l'<b>aspecte</b>: colors, mides, tipus de lletra… Una regla diu a quines etiquetes s'aplica i què hi canvia: <code>h1 { color: purple; }</code> vol dir «posa els títols h1 de color lila». Els noms dels colors s'escriuen en anglès.|El <span class='hl'>CSS</span> es el lenguaje del <b>aspecto</b>: colores, tamaños, tipos de letra… Una regla dice a qué etiquetas se aplica y qué cambia: <code>h1 { color: purple; }</code> quiere decir «pon los títulos h1 de color lila». Los nombres de los colores se escriben en inglés.",
          tip: "El mateix HTML pot tenir un aspecte molt diferent amb un altre CSS. Per això es guarden separats.|El mismo HTML puede tener un aspecto muy diferente con otro CSS. Por eso se guardan separados." },
        { k: 'Imatges|Imágenes', t: 'Les imatges són fitxers a part|Las imágenes son archivos aparte',
          media: { k: 'web', html: B('<h1>La tortuga</h1>\n<img src="img/tech/web/tortuga.svg" alt="Una tortuga" width="140">', '<h1>La tortuga</h1>\n<img src="img/tech/web/tortuga.svg" alt="Una tortuga" width="140">') },
          x: "Les imatges <b>no són dins de l'HTML</b>: són fitxers a part, com <b>tortuga.svg</b>. L'etiqueta <code>&lt;img&gt;</code> només diu on és el fitxer (<code>src</code>) i què s'hi veu (<code>alt</code>). L'alt el llegeixen les persones que fan servir un lector de pantalla, i es veu si la imatge no carrega.|Las imágenes <b>no están dentro del HTML</b>: son archivos aparte, como <b>tortuga.svg</b>. La etiqueta <code>&lt;img&gt;</code> solo dice dónde está el archivo (<code>src</code>) y qué se ve (<code>alt</code>). El alt lo leen las personas que usan un lector de pantalla, y se ve si la imagen no carga.",
          bad: "Si copio el text de l'HTML, la imatge ja hi va a dins.|Si copio el texto del HTML, la imagen ya va dentro.", good: "L'HTML només diu on és la imatge: el navegador la demana al servidor a part.|El HTML solo dice dónde está la imagen: el navegador la pide al servidor aparte." }
      ] },
      { k: 'seq', ph: 'mans', q: 'Com treballa el navegador quan rep una web? <b>Ordena</b> els passos.|¿Cómo trabaja el navegador cuando recibe una web? <b>Ordena</b> los pasos.',
        items: ["Rep el fitxer HTML de la pàgina|Recibe el archivo HTML de la página", 'Llegeix les etiquetes de dalt a baix|Lee las etiquetas de arriba abajo', "Demana el CSS i les imatges que diu l'HTML|Pide el CSS y las imágenes que dice el HTML", 'Dibuixa la pàgina amb el seu aspecte|Dibuja la página con su aspecto'],
        ex: "Per això, quan una connexió va lenta, de vegades veus primer el text i les imatges apareixen després.|Por eso, cuando una conexión va lenta, a veces ves primero el texto y las imágenes aparecen después." },
      { k: 'unplug', ph: 'mans', ico: '✏️', title: 'El navegador humà|El navegador humano',
        t: 'Amb algú de casa i dos papers:|Con alguien de casa y dos papeles:',
        steps: ["Una persona escriu en un paper una «pàgina» amb aquest codi: <code>&lt;h1&gt;</code>, un títol i <code>&lt;/h1&gt;</code>; <code>&lt;p&gt;</code>, una frase i <code>&lt;/p&gt;</code>; i, a sota, la regla <code>h1 { color: blue; }</code>.|Una persona escribe en un papel una «página» con este código: <code>&lt;h1&gt;</code>, un título y <code>&lt;/h1&gt;</code>; <code>&lt;p&gt;</code>, una frase y <code>&lt;/p&gt;</code>; y, debajo, la regla <code>h1 { color: blue; }</code>.",
          "L'altra persona fa de navegador: llegeix el codi de dalt a baix i dibuixa la pàgina en un altre paper (el títol gran, la frase petita i els colors que diu el CSS).|La otra persona hace de navegador: lee el código de arriba abajo y dibuja la página en otro papel (el título grande, la frase pequeña y los colores que dice el CSS).",
          'Compareu-ho: el dibuix fa el que deia el codi? Si no, quina part no estava clara?|Comparadlo: ¿el dibujo hace lo que decía el código? Si no, ¿qué parte no estaba clara?',
          'Canvieu els papers i afegiu-hi una imatge: escriviu <code>&lt;img&gt;</code> i el nom d\'un dibuix.|Cambiad los papeles y añadid una imagen: escribid <code>&lt;img&gt;</code> y el nombre de un dibujo.'],
        tip: 'El navegador no endevina res: dibuixa exactament el que diu el codi.|El navegador no adivina nada: dibuja exactamente lo que dice el código.' },
      { k: 'wquiz', ph: 'prova', q: 'Quina vista prèvia fa aquest codi?|¿Qué vista previa hace este código?',
        code: { html: PIZ, css: 'h1 { color: red; }' },
        opts: [{ html: PIZ, css: 'h1 { color: red; }' }, { html: PIZ, css: 'h1 { color: blue; }' }, { html: PIZ, css: 'p { color: red; }' }, { html: B("<p>Les més bones de l'illa.</p>", '<p>Las más buenas de la isla.</p>'), css: 'p { color: red; }' }], a: 0,
        ex: "L'HTML diu que hi ha un títol i un paràgraf; el CSS diu que el títol (<code>h1</code>) és vermell. El paràgraf no canvia.|El HTML dice que hay un título y un párrafo; el CSS dice que el título (<code>h1</code>) es rojo. El párrafo no cambia." },
      { k: 'wspot', ph: 'investiga', q: 'En aquesta pàgina, el títol és de color verd. <b>Toca la línia que ho decideix.</b>|En esta página, el título es de color verde. <b>Toca la línea que lo decide.</b>',
        html: B('<style>\n  h1 { color: green; }\n</style>\n<h1>El bosc</h1>\n<p>Arbres, ocells i molt de silenci.</p>', '<style>\n  h1 { color: green; }\n</style>\n<h1>El bosque</h1>\n<p>Árboles, pájaros y mucho silencio.</p>'), bad: 2,
        ex: "És la línia de CSS: diu que els <code>h1</code> són verds. El CSS pot anar en un fitxer a part o, com aquí, dins de l'etiqueta <code>&lt;style&gt;</code>.|Es la línea de CSS: dice que los <code>h1</code> son verdes. El CSS puede ir en un archivo aparte o, como aquí, dentro de la etiqueta <code>&lt;style&gt;</code>." },
      { k: 'quiz', ph: 'prova', q: "On és, de veritat, la imatge d'una web?|¿Dónde está, de verdad, la imagen de una web?",
        opts: ['En un fitxer a part, que el navegador demana al servidor|En un archivo aparte, que el navegador pide al servidor', "Escrita amb lletres dins de l'HTML|Escrita con letras dentro del HTML", 'Dins del CSS|Dentro del CSS'], a: 0,
        ex: "L'HTML diu on és (src) i què s'hi veu (alt), però la imatge viatja en un fitxer propi.|El HTML dice dónde está (src) y qué se ve (alt), pero la imagen viaja en un archivo propio." },
      { k: 'move', ph: 'pausa', secs: 30, t: "Fes de navegador! Dibuixa a l'aire amb el dit: un <b>títol gran</b> a dalt, <b>tres ratlles</b> de paràgraf a sota i un <b>quadrat</b> per a la imatge. Ara «pinta-ho» tot de colors amb tot el braç: això és el CSS!|¡Haz de navegador! Dibuja en el aire con el dedo: un <b>título grande</b> arriba, <b>tres rayas</b> de párrafo debajo y un <b>cuadrado</b> para la imagen. Ahora «píntalo» todo de colores con todo el brazo: ¡eso es el CSS!" },
      { k: 'web', ph: 'repte', url: 'https://estudi.numi/animal.html',
        q: "Et toca! Aquesta pàgina encara diu «Títol». <b>Canvia el text del títol</b> pel nom del teu animal preferit i escriu una frase al paràgraf. Canvia només el que hi ha <b>entre</b> les etiquetes.|¡Te toca! Esta página todavía dice «Título». <b>Cambia el texto del título</b> por el nombre de tu animal preferido y escribe una frase en el párrafo. Cambia solo lo que hay <b>entre</b> las etiquetas.",
        html: B('<h1>Títol</h1>\n<p>Escriu aquí una frase.</p>', '<h1>Título</h1>\n<p>Escribe aquí una frase.</p>'),
        checks: [{ k: 'tag', t: 'h1', text: B('Títol', 'Título'), min: 0, max: 0, txt: 'El títol ja no diu «Títol»|El título ya no dice «Título»' }, { k: 'text', t: 'h1', min: 3, txt: "El títol té el nom d'un animal|El título tiene el nombre de un animal" },
          { k: 'tag', t: 'p', text: B('Escriu aquí', 'Escribe aquí'), min: 0, max: 0, txt: 'El paràgraf té la teva frase|El párrafo tiene tu frase' }, { k: 'text', t: 'p', min: 15, txt: 'La frase té almenys 15 caràcters|La frase tiene al menos 15 caracteres' }, { k: 'clean' }],
        sol: { html: B('<h1>La tortuga</h1>\n<p>Camina a poc a poc i porta la casa a sobre.</p>', '<h1>La tortuga</h1>\n<p>Camina despacio y lleva la casa encima.</p>') },
        hint: "Esborra només la paraula «Títol» i escriu-hi el nom. Les etiquetes &lt;h1&gt; i &lt;/h1&gt; s'han de quedar on són.|Borra solo la palabra «Título» y escribe el nombre. Las etiquetas &lt;h1&gt; y &lt;/h1&gt; tienen que quedarse donde están." },
      { k: 'web', ph: 'repte', url: 'https://estudi.numi/drac.html', tab: 'css',
        q: "Ara, l'<b>aspecte</b>. A la pestanya <b>CSS</b>, el títol és de color <code>blue</code> (blau). <b>Canvia'l per un altre color</b> en anglès: <code>red</code>, <code>green</code>, <code>purple</code>, <code>orange</code>, <code>brown</code>…|Ahora, el <b>aspecto</b>. En la pestaña <b>CSS</b>, el título es de color <code>blue</code> (azul). <b>Cámbialo por otro color</b> en inglés: <code>red</code>, <code>green</code>, <code>purple</code>, <code>orange</code>, <code>brown</code>…",
        html: B('<h1>El drac del castell</h1>\n<p>Viu dalt de la torre més alta.</p>\n<img src="img/tech/web/drac.svg" alt="Un drac" width="140">', '<h1>El dragón del castillo</h1>\n<p>Vive en lo alto de la torre más alta.</p>\n<img src="img/tech/web/drac.svg" alt="Un dragón" width="140">'),
        css: 'h1 {\n  color: blue;\n}',
        checks: [{ k: 'css', s: 'h1', p: 'color', v: colRx('blue'), txt: 'El títol té un color nou (que no sigui blue)|El título tiene un color nuevo (que no sea blue)' }, { k: 'cssclean', txt: 'La regla continua ben escrita: color: …;|La regla sigue bien escrita: color: …;' }],
        sol: { css: 'h1 {\n  color: purple;\n}' },
        hint: 'Canvia només la paraula blue. Els dos punts i el punt i coma s\'han de quedar: color: purple;|Cambia solo la palabra blue. Los dos puntos y el punto y coma tienen que quedarse: color: purple;' },
      { k: 'web', ph: 'repte', url: 'https://estudi.numi/animal.html',
        q: "El servidor té més imatges: <code>gat.svg</code>, <code>gos.svg</code>, <code>tortuga.svg</code>, <code>guineu.svg</code>, <code>lloro.svg</code>, <code>balena.svg</code>… <b>Canvia el drac per un altre animal</b> i actualitza l'<code>alt</code>, el text que descriu la imatge.|El servidor tiene más imágenes: <code>gat.svg</code>, <code>gos.svg</code>, <code>tortuga.svg</code>, <code>guineu.svg</code>, <code>lloro.svg</code>, <code>balena.svg</code>… <b>Cambia el dragón por otro animal</b> y actualiza el <code>alt</code>, el texto que describe la imagen.",
        html: B('<h1>El meu animal</h1>\n<img src="img/tech/web/drac.svg" alt="Un drac" width="160">\n<p>Aquesta imatge és un fitxer a part.</p>', '<h1>Mi animal</h1>\n<img src="img/tech/web/drac.svg" alt="Un dragón" width="160">\n<p>Esta imagen es un archivo aparte.</p>'),
        checks: [{ k: 'attr', t: 'img', a: 'src', v: `/img\\/tech\\/web\\/${IMGS}\\.svg$/`, txt: "La imatge és d'un altre animal del servidor|La imagen es de otro animal del servidor" },
          { k: 'attr', t: 'img', a: 'alt', v: '/^(?!.*(drac|drag[oó]n)).{4,}$/i', txt: "L'alt descriu el nou animal (ja no parla del drac)|El alt describe el nuevo animal (ya no habla del dragón)" }, { k: 'clean' }],
        sol: { html: B('<h1>El meu animal</h1>\n<img src="img/tech/web/guineu.svg" alt="Una guineu" width="160">\n<p>Aquesta imatge és un fitxer a part.</p>', '<h1>Mi animal</h1>\n<img src="img/tech/web/guineu.svg" alt="Un zorro" width="160">\n<p>Esta imagen es un archivo aparte.</p>') },
        hint: "A src, canvia només el nom del fitxer: drac.svg → guineu.svg. A alt, escriu què s'hi veu: «Una guineu». Les cometes s'han de quedar.|En src, cambia solo el nombre del archivo: drac.svg → guineu.svg. En alt, escribe qué se ve: «Un zorro». Las comillas tienen que quedarse." },
      { k: 'wquiz', ph: 'repte', q: 'Aquest codi té HTML i CSS. Quina vista prèvia fa?|Este código tiene HTML y CSS. ¿Qué vista previa hace?',
        code: { html: PLA, css: 'p { color: blue; }' },
        opts: [{ html: PLA, css: 'p { color: blue; }' }, { html: PLA, css: 'h1 { color: blue; }' }, { html: PLA, css: 'h1, p { color: blue; }' }, { html: PLA, css: '' }], a: 0,
        ex: "La regla és per a <code>p</code>: només el paràgraf es torna blau. El títol es queda com estava.|La regla es para <code>p</code>: solo el párrafo se vuelve azul. El título se queda como estaba." },
      { k: 'wcreate', ph: 'crea', name: 'La fitxa del meu animal|La ficha de mi animal', url: 'https://estudi.numi/fitxa.html',
        q: "Crea la <b>fitxa del teu animal preferit</b>: canvia tots els <b>???</b> (el títol, l'alt i dues frases), tria la imatge i, a la pestanya <b>CSS</b>, dona un color nou al títol.|Crea la <b>ficha de tu animal preferido</b>: cambia todos los <b>???</b> (el título, el alt y dos frases), elige la imagen y, en la pestaña <b>CSS</b>, dale un color nuevo al título.",
        crit: ["El títol, l'alt i les dues frases són teus|El título, el alt y las dos frases son tuyos", 'La imatge és la del teu animal|La imagen es la de tu animal', 'El títol té un color que es llegeix bé|El título tiene un color que se lee bien'],
        html: '<h1>???</h1>\n<img src="img/tech/web/gat.svg" alt="???" width="150">\n<p>???</p>\n<p>???</p>',
        css: 'h1 {\n  color: black;\n}',
        checks: [{ k: 'tag', t: 'h1', text: '???', min: 0, max: 0, txt: 'El títol és teu (sense ???)|El título es tuyo (sin ???)' }, { k: 'text', t: 'h1', min: 3, txt: 'El títol té almenys 3 lletres|El título tiene al menos 3 letras' },
          { k: 'attr', t: 'img', a: 'alt', v: '/^(?!.*\\?\\?\\?).{4,}$/', txt: "L'alt descriu la imatge|El alt describe la imagen" }, { k: 'attr', t: 'img', a: 'src', v: `/img\\/tech\\/web\\/${IMGS}\\.svg$/`, txt: "La imatge és d'un animal del servidor|La imagen es de un animal del servidor" },
          { k: 'tag', t: 'p', text: '???', min: 0, max: 0, txt: 'Les dues frases són teves|Las dos frases son tuyas' }, { k: 'text', t: 'p', min: 10, txt: 'Les frases tenen contingut|Las frases tienen contenido' },
          { k: 'css', s: 'h1', p: 'color', v: colRx('black'), txt: 'El títol té un color nou|El título tiene un color nuevo' }, { k: 'clean' }, { k: 'cssclean' }],
        sol: { html: B('<h1>La balena</h1>\n<img src="img/tech/web/balena.svg" alt="Una balena" width="150">\n<p>És el mamífer més gran del planeta.</p>\n<p>Viu al mar i respira aire.</p>', '<h1>La ballena</h1>\n<img src="img/tech/web/balena.svg" alt="Una ballena" width="150">\n<p>Es el mamífero más grande del planeta.</p>\n<p>Vive en el mar y respira aire.</p>'), css: 'h1 {\n  color: navy;\n}' },
        hint: "Ves canviant els ??? un a un i mira com es van marcant les comprovacions. Per a la imatge, canvia gat.svg per un altre fitxer (o deixa el gat si és el teu animal!).|Ve cambiando los ??? uno a uno y mira cómo se van marcando las comprobaciones. Para la imagen, cambia gat.svg por otro archivo (¡o deja el gato si es tu animal!)." },
      { k: 'quiz', ph: 'tanca', q: 'Quin llenguatge diu <b>què hi ha</b> a la pàgina (títols, paràgrafs, imatges)?|¿Qué lenguaje dice <b>qué hay</b> en la página (títulos, párrafos, imágenes)?', opts: ['HTML|HTML', 'CSS|CSS', 'DNS|DNS'], a: 0 },
      { k: 'quiz', ph: 'tanca', q: 'I quin diu <b>com es veu</b> (colors, mides, lletra)?|¿Y cuál dice <b>cómo se ve</b> (colores, tamaños, letra)?', opts: ['CSS|CSS', 'HTML|HTML', 'URL|URL'], a: 0,
        ex: "HTML per al contingut, CSS per a l'aspecte, i les imatges en fitxers a part.|HTML para el contenido, CSS para el aspecto, y las imágenes en archivos aparte." },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 4 · Projecte: el mapa d'internet ---------- */
  { id: 'w1-4', t: "Projecte: el mapa d'internet|Proyecto: el mapa de internet", min: 45, proj: true, badge: 'w_mapa',
    learn: ['Una pàgina fa un viatge: navegador, DNS, routers i servidor, i torna en paquets.|Una página hace un viaje: navegador, DNS, routers y servidor, y vuelve en paquetes.',
      'Cada peça té una feina: el DNS troba l\'adreça, els routers trien el camí i el servidor guarda la web.|Cada pieza tiene un trabajo: el DNS encuentra la dirección, los routers eligen el camino y el servidor guarda la web.',
      'Una web es fa amb HTML (contingut), CSS (aspecte) i imatges, i la pots canviar tu mateix/a.|Una web se hace con HTML (contenido), CSS (aspecto) e imágenes, y la puedes cambiar tú mismo/a.'],
    steps: [
      { k: 'quiz', ph: 'recorda', q: 'Quin llenguatge canvia el <b>color</b> del títol?|¿Qué lenguaje cambia el <b>color</b> del título?', opts: ['CSS|CSS', 'HTML|HTML', 'IP|IP'], a: 0 },
      { k: 'quiz', ph: 'recorda', q: 'Quina peça tradueix <b>estudi.numi</b> a <b>198.51.100.7</b>?|¿Qué pieza traduce <b>estudi.numi</b> a <b>198.51.100.7</b>?', opts: ['El DNS|El DNS', 'El router de casa|El router de casa', 'El CSS|El CSS'], a: 0 },
      { k: 'story', ph: 'missio', who: 'both', scene: 'moll', title: "L'exposició del poble|La exposición del pueblo",
        t: "L'escola del poble prepara una exposició: <b>«Com funciona internet?»</b>. Us han encarregat la peça principal: un <b>mapa</b> que expliqui el viatge sencer d'una pàgina i una <b>web</b> que l'acompanyi. Primer repassarem totes les peces del mapa.|La escuela del pueblo prepara una exposición: <b>«¿Cómo funciona internet?»</b>. Os han encargado la pieza principal: un <b>mapa</b> que explique el viaje entero de una página y una <b>web</b> que lo acompañe. Primero repasaremos todas las piezas del mapa." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Repàs|Repaso', t: 'El viatge sencer|El viaje entero', anim: 'w1dns',
          x: "<b>1.</b> Escrius el domini al <span class='hl'>navegador</span>. <b>2.</b> El <span class='hl'>DNS</span> en dona l'adreça IP. <b>3.</b> La petició surt pel router de casa i els <span class='hl'>routers</span> la porten fins al <span class='hl'>servidor</span>. <b>4.</b> El servidor respon amb la pàgina, trencada en <b>paquets</b>, que fan el camí de tornada.|<b>1.</b> Escribes el dominio en el <span class='hl'>navegador</span>. <b>2.</b> El <span class='hl'>DNS</span> da su dirección IP. <b>3.</b> La petición sale por el router de casa y los <span class='hl'>routers</span> la llevan hasta el <span class='hl'>servidor</span>. <b>4.</b> El servidor responde con la página, rota en <b>paquetes</b>, que hacen el camino de vuelta." },
        { k: 'Repàs|Repaso', t: 'Camins i paquets|Caminos y paquetes', anim: 'w1pack',
          x: "Entre tu i el servidor hi ha <b>molts routers</b> i molts camins possibles: per cables, fibra sota el mar i ones. Cada paquet porta l'adreça IP de destí i el seu número, i en arribar s'ordenen per muntar la pàgina.|Entre tú y el servidor hay <b>muchos routers</b> y muchos caminos posibles: por cables, fibra bajo el mar y ondas. Cada paquete lleva la dirección IP de destino y su número, y al llegar se ordenan para montar la página." },
        { k: 'El projecte|El proyecto', t: 'Un mapa, i una web que l\'explica|Un mapa, y una web que lo explica',
          media: { k: 'web', html: MAP, css: 'h1 {\n  color: teal;\n}' },
          x: "El mapa el fareu en paper, en grup, amb les peces i fletxes numerades. La web la faràs tu a l'app: hi explicaràs els passos del viatge amb les paraules justes, triaràs un color per al títol i hi afegiràs una cosa que t'hagi sorprès.|El mapa lo haréis en papel, en grupo, con las piezas y flechas numeradas. La web la harás tú en la app: explicarás los pasos del viaje con las palabras justas, elegirás un color para el título y añadirás algo que te haya sorprendido." }
      ] },
      { k: 'seq', ph: 'mans', q: "<b>Ordena el viatge sencer</b>, des que escrius l'adreça fins que veus la pàgina.|<b>Ordena el viaje entero</b>, desde que escribes la dirección hasta que ves la página.",
        items: ["Escrius estudi.numi a la barra d'adreces|Escribes estudi.numi en la barra de direcciones", "El DNS diu l'adreça IP: 198.51.100.7|El DNS dice la dirección IP: 198.51.100.7", 'La petició surt pel router de casa|La petición sale por el router de casa', 'Els routers la porten fins al servidor|Los routers la llevan hasta el servidor',
          'El servidor envia la pàgina en paquets|El servidor envía la página en paquetes', "Els paquets arriben i s'ordenen|Los paquetes llegan y se ordenan", "El navegador llegeix l'HTML i el CSS i dibuixa la pàgina|El navegador lee el HTML y el CSS y dibuja la página"],
        ex: "Aquest és l'ordre de les fletxes del vostre mapa!|¡Este es el orden de las flechas de vuestro mapa!" },
      { k: 'quiz', ph: 'mans', q: 'Quina peça del mapa <b>tria per on va</b> cada paquet?|¿Qué pieza del mapa <b>elige por dónde va</b> cada paquete?', opts: ['Els routers|Los routers', 'El servidor|El servidor', 'El navegador|El navegador', 'El DNS|El DNS'], a: 0, grid: true },
      { k: 'unplug', ph: 'mans', ico: '🗺️', title: 'El mapa en paper|El mapa en papel',
        t: 'A casa, amb un full gran i colors (a classe el fareu en grup):|En casa, con una hoja grande y colores (en clase lo haréis en grupo):',
        steps: ["Dibuixa a l'esquerra el teu aparell amb el navegador i, a la dreta, el servidor d'una web inventada.|Dibuja a la izquierda tu aparato con el navegador y, a la derecha, el servidor de una web inventada.",
          "Entre tots dos, dibuixa el router de casa, tres o quatre routers d'internet i l'agenda del DNS.|Entre los dos, dibuja el router de casa, tres o cuatro routers de internet y la agenda del DNS.",
          "Uneix-ho amb fletxes numerades en l'ordre del viatge i escriu una frase curta al costat de cada fletxa.|Únelo con flechas numeradas en el orden del viaje y escribe una frase corta al lado de cada flecha.",
          "Explica el mapa a algú de casa en menys d'un minut. Ho ha entès?|Explica el mapa a alguien de casa en menos de un minuto. ¿Lo ha entendido?"],
        tip: 'Un bon mapa es pot seguir sense que tu hi siguis: les fletxes i els números ho han de dir tot.|Un buen mapa se puede seguir sin que tú estés: las flechas y los números tienen que decirlo todo.' },
      { k: 'wspot', ph: 'investiga', q: "Aquesta pàgina per a l'exposició té una frase <b>falsa</b>. Toca-la.|Esta página para la exposición tiene una frase <b>falsa</b>. Tócala.", preview: false,
        html: B("<h1>El viatge d'una pàgina</h1>\n<p>1. El navegador pregunta al DNS l'adreça IP.</p>\n<p>2. El router de casa guarda totes les webs del món.</p>\n<p>3. El servidor envia la pàgina en paquets.</p>", '<h1>El viaje de una página</h1>\n<p>1. El navegador pregunta al DNS la dirección IP.</p>\n<p>2. El router de casa guarda todas las webs del mundo.</p>\n<p>3. El servidor envía la página en paquetes.</p>'), bad: 3,
        ex: "El router no guarda les webs: només passa paquets. Les webs es guarden als servidors.|El router no guarda las webs: solo pasa paquetes. Las webs se guardan en los servidores." },
      { k: 'move', ph: 'pausa', secs: 30, t: "Fes el viatge amb el cos! Ajupit/da = el teu aparell. Aixeca't a poc a poc = el router de casa. Braços oberts = els routers d'internet. Mans enlaire = el servidor! I ara, de tornada, fins a ajupir-te una altra vegada.|¡Haz el viaje con el cuerpo! Agachado/a = tu aparato. Levántate poco a poco = el router de casa. Brazos abiertos = los routers de internet. ¡Manos arriba = el servidor! Y ahora, de vuelta, hasta agacharte otra vez." },
      { k: 'quiz', ph: 'repte', q: "La Tuga escriu <b>estudi.numi</b> però surt «No es pot trobar el servidor». Quina peça és més probable que no hagi trobat res?|Tuga escribe <b>estudi.numi</b> pero sale «No se puede encontrar el servidor». ¿Qué pieza es más probable que no haya encontrado nada?",
        opts: ["El DNS: no ha trobat l'adreça IP d'aquest domini|El DNS: no ha encontrado la dirección IP de ese dominio", 'El CSS de la pàgina|El CSS de la página', 'La pantalla de la tauleta|La pantalla de la tableta'], a: 0,
        ex: "Si el DNS no troba el domini (per exemple, perquè està mal escrit), el navegador no sap a quina adreça IP ha d'enviar la petició.|Si el DNS no encuentra el dominio (por ejemplo, porque está mal escrito), el navegador no sabe a qué dirección IP tiene que enviar la petición." },
      { k: 'quiz', ph: 'repte', q: "Arriba una pàgina, però <b>en falta un paquet</b>. Què fa l'ordinador?|Llega una página, pero <b>falta un paquete</b>. ¿Qué hace el ordenador?",
        opts: ['Demana que li tornin a enviar el que falta|Pide que le vuelvan a enviar lo que falta', 'Mostra la pàgina amb un forat per sempre|Muestra la página con un agujero para siempre', "S'inventa el tros que falta|Se inventa el trozo que falta"], a: 0,
        ex: "Gràcies als números sap exactament quin paquet falta i el torna a demanar.|Gracias a los números sabe exactamente qué paquete falta y lo vuelve a pedir." },
      { k: 'wquiz', ph: 'repte', q: 'Una prova per a la web del projecte. Quina vista prèvia fa aquest codi?|Una prueba para la web del proyecto. ¿Qué vista previa hace este código?',
        code: { html: MAPQ, css: 'h1 { color: green; }\np { color: purple; }' },
        opts: [{ html: MAPQ, css: 'h1 { color: green; }\np { color: purple; }' }, { html: MAPQ, css: 'h1 { color: purple; }\np { color: green; }' }, { html: MAPQ, css: 'h1, p { color: green; }' }, { html: MAPQ, css: '' }], a: 0,
        ex: "Cada regla va a la seva etiqueta: el títol <code>h1</code> verd i el paràgraf <code>p</code> lila.|Cada regla va a su etiqueta: el título <code>h1</code> verde y el párrafo <code>p</code> lila." },
      { k: 'wcreate', ph: 'crea', name: "El mapa d'internet|El mapa de internet", url: 'https://estudi.numi/mapa.html',
        q: "La web de l'exposició! <b>Omple els buits ___</b> amb la peça del viatge que toca a cada pas, escriu el teu nom de programador/a, <b>afegeix un paràgraf</b> amb una cosa que t'hagi sorprès i, al <b>CSS</b>, tria un color per al títol.|¡La web de la exposición! <b>Rellena los huecos ___</b> con la pieza del viaje que toca en cada paso, escribe tu nombre de programador/a, <b>añade un párrafo</b> con algo que te haya sorprendido y, en el <b>CSS</b>, elige un color para el título.",
        crit: ['Cada pas diu la peça correcta: navegador, DNS, routers, servidor, HTML i CSS|Cada paso dice la pieza correcta: navegador, DNS, routers, servidor, HTML y CSS', "Hi ha un paràgraf nou amb una cosa que t'ha sorprès|Hay un párrafo nuevo con algo que te ha sorprendido", 'El títol té un color nou que es llegeix bé|El título tiene un color nuevo que se lee bien'],
        html: B("<h1>El mapa d'internet</h1>\n<img src=\"img/ic/map.webp\" alt=\"Un mapa amb camins\" width=\"110\">\n<p>Fet per: ___</p>\n<p>1. Escric el domini a la barra d'adreces del ___.</p>\n<p>2. El ___ tradueix el domini a una adreça IP.</p>\n<p>3. La petició viatja en paquets, i els ___ trien el camí.</p>\n<p>4. El ___ rep la petició i envia la pàgina.</p>\n<p>5. Arriben l'___ i el ___, i es dibuixa la pàgina.</p>",
          '<h1>El mapa de internet</h1>\n<img src="img/ic/map.webp" alt="Un mapa con caminos" width="110">\n<p>Hecho por: ___</p>\n<p>1. Escribo el dominio en la barra de direcciones del ___.</p>\n<p>2. El ___ traduce el dominio a una dirección IP.</p>\n<p>3. La petición viaja en paquetes, y los ___ eligen el camino.</p>\n<p>4. El ___ recibe la petición y envía la página.</p>\n<p>5. Llegan el ___ y el ___, y se dibuja la página.</p>'),
        css: 'h1 {\n  color: black;\n}\np {\n  color: #14204A;\n}',
        snips: ['<p>|</p>', 'navegador', 'DNS', 'routers', 'servidor', 'HTML', 'CSS'],
        checks: [{ k: 'tag', t: 'p', text: 'navegador', txt: 'Pas 1: el navegador|Paso 1: el navegador' }, { k: 'tag', t: 'p', text: 'DNS', txt: 'Pas 2: el DNS|Paso 2: el DNS' }, { k: 'tag', t: 'p', text: 'router', txt: 'Pas 3: els routers|Paso 3: los routers' },
          { k: 'tag', t: 'p', text: 'servidor', txt: 'Pas 4: el servidor|Paso 4: el servidor' }, { k: 'tag', t: 'p', text: 'HTML', txt: "Pas 5: l'HTML…|Paso 5: el HTML…" }, { k: 'tag', t: 'p', text: 'CSS', txt: '… i el CSS|… y el CSS' },
          { k: 'tag', t: 'p', text: '___', min: 0, max: 0, txt: 'Ja no queda cap buit ___|Ya no queda ningún hueco ___' }, { k: 'tag', t: 'p', min: 7, txt: "Hi ha un paràgraf nou (el que t'ha sorprès)|Hay un párrafo nuevo (lo que te ha sorprendido)" },
          { k: 'css', s: 'h1', p: 'color', v: colRx('black'), txt: 'El títol té un color nou|El título tiene un color nuevo' }, { k: 'clean' }],
        sol: { html: B("<h1>El mapa d'internet</h1>\n<img src=\"img/ic/map.webp\" alt=\"Un mapa amb camins\" width=\"110\">\n<p>Fet per: Llamp Blau</p>\n<p>1. Escric el domini a la barra d'adreces del navegador.</p>\n<p>2. El DNS tradueix el domini a una adreça IP.</p>\n<p>3. La petició viatja en paquets, i els routers trien el camí.</p>\n<p>4. El servidor rep la petició i envia la pàgina.</p>\n<p>5. Arriben l'HTML i el CSS, i es dibuixa la pàgina.</p>\n<p>M'ha sorprès que hi hagi cables de fibra sota el mar.</p>",
          '<h1>El mapa de internet</h1>\n<img src="img/ic/map.webp" alt="Un mapa con caminos" width="110">\n<p>Hecho por: Rayo Azul</p>\n<p>1. Escribo el dominio en la barra de direcciones del navegador.</p>\n<p>2. El DNS traduce el dominio a una dirección IP.</p>\n<p>3. La petición viaja en paquetes, y los routers eligen el camino.</p>\n<p>4. El servidor recibe la petición y envía la página.</p>\n<p>5. Llegan el HTML y el CSS, y se dibuja la página.</p>\n<p>Me ha sorprendido que haya cables de fibra bajo el mar.</p>'), css: 'h1 {\n  color: teal;\n}\np {\n  color: #14204A;\n}' },
        hint: "Repassa el mapa: qui fa servir la barra d'adreces? Qui té l'agenda d'adreces IP? Qui tria els camins? Qui guarda la web? Per al paràgraf nou, toca el botó &lt;p&gt;&lt;/p&gt; al final del codi.|Repasa el mapa: ¿quién usa la barra de direcciones? ¿Quién tiene la agenda de direcciones IP? ¿Quién elige los caminos? ¿Quién guarda la web? Para el párrafo nuevo, toca el botón &lt;p&gt;&lt;/p&gt; al final del código." },
      { k: 'quiz', ph: 'tanca', q: "Si haguessis d'explicar internet en una frase, quina triaries?|Si tuvieras que explicar internet en una frase, ¿cuál elegirías?",
        opts: ['Una xarxa de xarxes on els navegadors demanen pàgines als servidors|Una red de redes donde los navegadores piden páginas a los servidores', 'Un ordinador gegant que ho guarda tot|Un ordenador gigante que lo guarda todo', 'Un programa que fa servir el wifi|Un programa que usa el wifi'], a: 0,
        ex: "Internet no és un sol ordinador: són milions de xarxes connectades, amb servidors, routers i navegadors.|Internet no es un solo ordenador: son millones de redes conectadas, con servidores, routers y navegadores." },
      { k: 'quiz', ph: 'tanca', q: 'Quina parella és correcta?|¿Qué pareja es correcta?', opts: ['HTML → el contingut · CSS → l\'aspecte|HTML → el contenido · CSS → el aspecto', 'HTML → els colors · CSS → els títols|HTML → los colores · CSS → los títulos', 'HTML → el DNS · CSS → els routers|HTML → el DNS · CSS → los routers'], a: 0 },
      { k: 'feel', ph: 'tanca' }
    ] }
  ] });
})();

/* ── unitat 2 ── */
/* Tech Web · unitat 2 «HTML» (etiquetes, títols i paràgrafs, estructura, llistes, strong/em) · el receptari del poble
   El codi dels reptes i de les demos té text dins (noms, frases): per això es dona amb «get html() { return L(ca, es); }»,
   que el motor llegeix en el moment d'obrir el pas, en l'idioma de l'alumne/a. Les línies són les mateixes en tots dos idiomes. */
Object.assign(TBADGE, {
  w_etiquetes: { id: 'w_etiquetes', ico: '🧩', n: 'Obre i tanca|Abre y cierra', d: "Has escrit les teves primeres etiquetes d'HTML i les has tancat totes en l'ordre bo.|Has escrito tus primeras etiquetas de HTML y las has cerrado todas en el orden correcto." },
  w_titols: { id: 'w_titols', ico: '📚', n: 'Editor/a de titulars|Editor/a de titulares', d: "Has fet una pàgina completa, amb l'esquelet, l'idioma i els títols en ordre.|Has hecho una página completa, con el esqueleto, el idioma y los títulos en orden." },
  w_llistes: { id: 'w_llistes', ico: '✅', n: 'Mestre/a de llistes|Maestro/a de listas', d: 'Has fet llistes amb ordre, sense ordre i llistes dins de llistes.|Has hecho listas con orden, sin orden y listas dentro de listas.' },
  w_recepta: { id: 'w_recepta', ico: '🧁', n: "Xef de l'HTML|Chef del HTML", d: 'Has publicat la teva recepta al receptari del poble, amb tot l\'HTML de la unitat.|Has publicado tu receta en el recetario del pueblo, con todo el HTML de la unidad.' }
});
COURSE_UNITS[2] = { t: 'HTML|HTML', d: 'Títols, paràgrafs i llistes|Títulos, párrafos y listas', color: '#E4572E', s: [

  /* ---------- Sessió 1 · Etiquetes ---------- */
  { id: 'w2-1', t: 'Etiquetes|Etiquetas', min: 40, badge: 'w_etiquetes',
    learn: ["L'HTML és el llenguatge que <b>marca</b> què és cada tros d'una pàgina, amb etiquetes.|El HTML es el lenguaje que <b>marca</b> qué es cada trozo de una página, con etiquetas.",
      'Quasi totes les etiquetes s\'obren i es tanquen: <code>&lt;p&gt;</code> obre i <code>&lt;/p&gt;</code>, amb la barra, tanca.|Casi todas las etiquetas se abren y se cierran: <code>&lt;p&gt;</code> abre y <code>&lt;/p&gt;</code>, con la barra, cierra.',
      "Quan una etiqueta va dins d'una altra, l'última que obres és la primera que tanques.|Cuando una etiqueta va dentro de otra, la última que abres es la primera que cierras."],
    steps: [
      { k: 'quiz', ph: 'recorda', q: 'Recordes què hi ha dins una web? Quin llenguatge diu <b>què és</b> cada cosa: el títol, els paràgrafs, les llistes…?|¿Recuerdas qué hay dentro de una web? ¿Qué lenguaje dice <b>qué es</b> cada cosa: el título, los párrafos, las listas…?',
        opts: ["L'HTML|El HTML", 'El CSS|El CSS', 'Les imatges|Las imágenes'], a: 0,
        ex: "L'HTML fa l'estructura (què és cada cosa) i el CSS, l'aspecte (colors, lletres, mides).|El HTML hace la estructura (qué es cada cosa) y el CSS, el aspecto (colores, letras, tamaños)." },
      { k: 'quiz', ph: 'recorda', q: 'Quan obres una web, el servidor envia un fitxer HTML al teu navegador. Què en fa, el navegador?|Cuando abres una web, el servidor envía un archivo HTML a tu navegador. ¿Qué hace con él el navegador?',
        opts: ['El llegeix i dibuixa la pàgina|Lo lee y dibuja la página', 'Ensenya el codi tal com és, amb totes les lletres|Enseña el código tal cual, con todas las letras', 'El torna a enviar al servidor|Lo vuelve a enviar al servidor'], a: 0,
        ex: 'El navegador és un intèrpret: llegeix el codi i el converteix en la pàgina que veus.|El navegador es un intérprete: lee el código y lo convierte en la página que ves.' },
      { k: 'story', ph: 'missio', who: 'both', scene: 'poble', title: 'El receptari del poble|El recetario del pueblo',
        t: "El poble prepara la festa major i vol fer un <b>receptari digital</b>: una web amb les receptes de cada família. En aquesta unitat aprendràs l'<b>HTML</b>, el llenguatge amb què s'escriuen totes les webs, i al final hi publicaràs la teva recepta.|El pueblo prepara la fiesta mayor y quiere hacer un <b>recetario digital</b>: una web con las recetas de cada familia. En esta unidad aprenderás el <b>HTML</b>, el lenguaje con el que se escriben todas las webs, y al final publicarás en él tu receta." },
      { k: 'story', ph: 'missio', who: 'bit', mood: 'happy',
        t: "BIP! Jo llegeixo codi tot el dia. Però si em dones un text sense marques, per a mi és una sopa de lletres: no sé quin tros és el títol i quin és un paràgraf. Avui m'ensenyaràs a <b>marcar</b> el text!|¡BIP! Yo leo código todo el día. Pero si me das un texto sin marcas, para mí es una sopa de letras: no sé qué trozo es el título y cuál es un párrafo. ¡Hoy me enseñarás a <b>marcar</b> el texto!" },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'HTML|HTML', t: 'Un llenguatge de marques|Un lenguaje de marcas', anim: 'w2mark',
          x: "HTML vol dir <i>HyperText Markup Language</i>: llenguatge de <span class='hl'>marques</span>. No fa càlculs ni pren decisions: <b>marca</b> cada tros de text per dir què és. Això és el títol, això és un paràgraf… El navegador llegeix les marques i dibuixa la pàgina.|HTML quiere decir <i>HyperText Markup Language</i>: lenguaje de <span class='hl'>marcas</span>. No hace cálculos ni toma decisiones: <b>marca</b> cada trozo de texto para decir qué es. Esto es el título, esto es un párrafo… El navegador lee las marcas y dibuja la página.",
          tip: "És com quan subratlles uns apunts amb colors: el text és el mateix, però ara se sap què és cada cosa.|Es como cuando subrayas unos apuntes con colores: el texto es el mismo, pero ahora se sabe qué es cada cosa." },
        { k: 'Etiqueta|Etiqueta', t: 'Obrir i tancar|Abrir y cerrar', anim: 'w2tag',
          x: "Les marques es diuen <span class='hl'>etiquetes</span> i s'escriuen entre <code>&lt;</code> i <code>&gt;</code>. L'etiqueta d'obrir diu on comença el tros (<code>&lt;p&gt;</code>) i la de tancar, on s'acaba: és igual, però amb una <b>barra</b> (<code>&lt;/p&gt;</code>). Obertura, contingut i tancament, tot junt, és un <b>element</b>.|Las marcas se llaman <span class='hl'>etiquetas</span> y se escriben entre <code>&lt;</code> y <code>&gt;</code>. La etiqueta de abrir dice dónde empieza el trozo (<code>&lt;p&gt;</code>) y la de cerrar, dónde termina: es igual, pero con una <b>barra</b> (<code>&lt;/p&gt;</code>). Apertura, contenido y cierre, todo junto, es un <b>elemento</b>." },
        { k: 'El resultat|El resultado', t: 'El navegador no ensenya les etiquetes|El navegador no enseña las etiquetas',
          media: { k: 'web', get html() { return L('<h1>Fleca Bon Dia</h1>\n<p>Pa calent cada matí.</p>', '<h1>Panadería Buen Día</h1>\n<p>Pan caliente cada mañana.</p>'); } },
          x: "A l'esquerra hi ha el codi; a la dreta, el que dibuixa el navegador. Les etiquetes no surten: el navegador les fa servir per saber com és cada tros. <code>&lt;h1&gt;</code> és el <b>títol principal</b> i <code>&lt;p&gt;</code>, un <b>paràgraf</b>.|A la izquierda está el código; a la derecha, lo que dibuja el navegador. Las etiquetas no salen: el navegador las usa para saber cómo es cada trozo. <code>&lt;h1&gt;</code> es el <b>título principal</b> y <code>&lt;p&gt;</code>, un <b>párrafo</b>." },
        { k: 'Compte!|¡Cuidado!', t: 'Si oblides tancar…|Si olvidas cerrar…',
          media: { k: 'web', get html() { return L('<h1>Fleca Bon Dia\n<p>Pa calent cada matí.</p>\n<p>Obrim a les 7.</p>', '<h1>Panadería Buen Día\n<p>Pan caliente cada mañana.</p>\n<p>Abrimos a las 7.</p>'); } },
          x: "Aquí falta <code>&lt;/h1&gt;</code>. El navegador no sap on s'acaba el títol i <b>tot el que ve després</b> es converteix en títol: la pàgina sencera surt gegant.|Aquí falta <code>&lt;/h1&gt;</code>. El navegador no sabe dónde termina el título y <b>todo lo que viene después</b> se convierte en título: la página entera sale gigante.",
          bad: '<code>&lt;h1&gt;Hola&lt;h1&gt;</code> (sense barra: són dues obertures)|<code>&lt;h1&gt;Hola&lt;h1&gt;</code> (sin barra: son dos aperturas)', good: '<code>&lt;h1&gt;Hola&lt;/h1&gt;</code> (la segona porta la barra)|<code>&lt;h1&gt;Hola&lt;/h1&gt;</code> (la segunda lleva la barra)' },
        { k: 'Dins de dins|Dentro de dentro', t: "Etiquetes dins d'etiquetes|Etiquetas dentro de etiquetas", anim: 'w2nest',
          x: "Un element pot anar dins d'un altre, com capses dins de capses. Per exemple, dins d'un paràgraf pots marcar una cosa <b>important</b> amb <code>&lt;strong&gt;</code> o una paraula amb <b>èmfasi</b> amb <code>&lt;em&gt;</code>. La regla d'or: <b>l'última que obres és la primera que tanques</b>.|Un elemento puede ir dentro de otro, como cajas dentro de cajas. Por ejemplo, dentro de un párrafo puedes marcar algo <b>importante</b> con <code>&lt;strong&gt;</code> o una palabra con <b>énfasis</b> con <code>&lt;em&gt;</code>. La regla de oro: <b>la última que abres es la primera que cierras</b>.",
          tip: "<code>&lt;strong&gt;</code> es veu en negreta i <code>&lt;em&gt;</code> en cursiva, però el que compta és el que <b>volen dir</b>: important i èmfasi.|<code>&lt;strong&gt;</code> se ve en negrita y <code>&lt;em&gt;</code> en cursiva, pero lo que cuenta es lo que <b>quieren decir</b>: importante y énfasis.",
          bad: '<code>&lt;p&gt;Molt &lt;strong&gt;bo&lt;/p&gt;&lt;/strong&gt;</code>|<code>&lt;p&gt;Muy &lt;strong&gt;rico&lt;/p&gt;&lt;/strong&gt;</code>', good: '<code>&lt;p&gt;Molt &lt;strong&gt;bo&lt;/strong&gt;&lt;/p&gt;</code>|<code>&lt;p&gt;Muy &lt;strong&gt;rico&lt;/strong&gt;&lt;/p&gt;</code>' }
      ] },
      { k: 'seq', ph: 'mans', q: 'Ordena les peces perquè quedi un paràgraf amb un avís important, <b>ben niuat</b>.|Ordena las piezas para que quede un párrafo con un aviso importante, <b>bien anidado</b>.',
        items: ['<code>&lt;p&gt;</code>|<code>&lt;p&gt;</code>', 'Compte: el forn|Cuidado: el horno', '<code>&lt;strong&gt;</code>|<code>&lt;strong&gt;</code>', 'crema|quema', '<code>&lt;/strong&gt;</code>|<code>&lt;/strong&gt;</code>', '<code>&lt;/p&gt;</code>|<code>&lt;/p&gt;</code>'],
        ex: "El <code>&lt;strong&gt;</code> s'obre i es tanca <b>dins</b> del paràgraf: primer es tanca el de dins i després el de fora.|El <code>&lt;strong&gt;</code> se abre y se cierra <b>dentro</b> del párrafo: primero se cierra el de dentro y después el de fuera." },
      { k: 'unplug', ph: 'mans', ico: '🧩', title: 'Etiquetes humanes|Etiquetas humanas',
        t: "A classe, en grups de 5 o 6. Cada persona té una targeta: una etiqueta (<code>&lt;p&gt;</code>, <code>&lt;/strong&gt;</code>…) o un tros de text.|En clase, en grupos de 5 o 6. Cada persona tiene una tarjeta: una etiqueta (<code>&lt;p&gt;</code>, <code>&lt;/strong&gt;</code>…) o un trozo de texto.",
        steps: ["Feu una fila amb les targetes per formar un paràgraf que tingui una paraula important a dins.|Haced una fila con las tarjetas para formar un párrafo que tenga una palabra importante dentro.",
          "Una persona fa de <b>navegador</b>: llegeix la fila en veu alta i comprova que cada etiqueta oberta té la seva de tancar.|Una persona hace de <b>navegador</b>: lee la fila en voz alta y comprueba que cada etiqueta abierta tiene la suya de cerrar.",
          "Uniu amb els braços cada obertura amb el seu tancament. Si els braços s'encreuen, hi ha un error!|Unid con los brazos cada apertura con su cierre. ¡Si los brazos se cruzan, hay un error!",
          'Canvieu de paper i proveu les frases amb errors que dirà el professor/a.|Cambiad de papel y probad las frases con errores que dirá el profesor/a.'],
        tip: "Si els braços no s'encreuen, l'element està ben niuat.|Si los brazos no se cruzan, el elemento está bien anidado." },
      { k: 'wquiz', ph: 'prova', q: 'Quina vista prèvia fa aquest codi?|¿Qué vista previa hace este código?',
        code: { get html() { return L('<h1>Fleca Bon Dia</h1>\n<p>Pa calent cada matí.</p>', '<h1>Panadería Buen Día</h1>\n<p>Pan caliente cada mañana.</p>'); } },
        opts: [
          { get html() { return L('<h1>Fleca Bon Dia</h1>\n<p>Pa calent cada matí.</p>', '<h1>Panadería Buen Día</h1>\n<p>Pan caliente cada mañana.</p>'); } },
          { get html() { return L('<p>Fleca Bon Dia</p>\n<p>Pa calent cada matí.</p>', '<p>Panadería Buen Día</p>\n<p>Pan caliente cada mañana.</p>'); } },
          { get html() { return L('<p>&lt;h1&gt;Fleca Bon Dia&lt;/h1&gt;<br>&lt;p&gt;Pa calent cada matí.&lt;/p&gt;</p>', '<p>&lt;h1&gt;Panadería Buen Día&lt;/h1&gt;<br>&lt;p&gt;Pan caliente cada mañana.&lt;/p&gt;</p>'); }, css: 'p { font-family: monospace; }' }
        ], a: 0,
        ex: 'El navegador no ensenya les etiquetes: les llegeix. El <code>&lt;h1&gt;</code> fa un títol gran i el <code>&lt;p&gt;</code>, un paràgraf normal.|El navegador no enseña las etiquetas: las lee. El <code>&lt;h1&gt;</code> hace un título grande y el <code>&lt;p&gt;</code>, un párrafo normal.' },
      { k: 'wspot', ph: 'investiga', q: 'Tota la pàgina surt gegant. <b>Toca la línia que té l\'error.</b>|Toda la página sale gigante. <b>Toca la línea que tiene el error.</b>',
        get html() { return L('<h1>Fleca Bon Dia<h1>\n<p>Pa calent cada matí.</p>\n<p>Obrim a les 7.</p>', '<h1>Panadería Buen Día<h1>\n<p>Pan caliente cada mañana.</p>\n<p>Abrimos a las 7.</p>'); }, bad: 1,
        ex: "A la línia 1, la segona etiqueta no té barra: no tanca, obre un altre títol! Per això tot el que ve després surt gegant.|En la línea 1, la segunda etiqueta no tiene barra: ¡no cierra, abre otro título! Por eso todo lo que viene después sale gigante." },
      { k: 'wspot', ph: 'investiga', q: "Aquí les etiquetes s'encreuen. <b>Toca la línia que està mal niuada.</b>|Aquí las etiquetas se cruzan. <b>Toca la línea que está mal anidada.</b>",
        get html() { return L('<h1>Coca de recapte</h1>\n<p>És <strong>molt bona</p></strong>\n<p>La fem cada estiu.</p>', '<h1>Coca de recapte</h1>\n<p>Está <strong>muy buena</p></strong>\n<p>La hacemos cada verano.</p>'); }, bad: 2,
        ex: "A la línia 2 es tanca el <code>&lt;/p&gt;</code> abans que el <code>&lt;/strong&gt;</code>. L'últim que s'ha obert és el <code>&lt;strong&gt;</code>: és el primer que s'ha de tancar.|En la línea 2 se cierra el <code>&lt;/p&gt;</code> antes que el <code>&lt;/strong&gt;</code>. El último que se ha abierto es el <code>&lt;strong&gt;</code>: es el primero que hay que cerrar." },
      { k: 'move', ph: 'pausa', secs: 25, t: "Fes d'etiqueta amb els braços! Aixeca el braç dret: has obert un <code>&lt;p&gt;</code>. Aixeca l'esquerre: has obert un <code>&lt;strong&gt;</code>. Ara tanca'ls en l'ordre bo: primer baixa l'<b>esquerre</b> (l'últim que has obert) i després el dret. Fes-ho tres vegades, cada cop més de pressa!|¡Haz de etiqueta con los brazos! Levanta el brazo derecho: has abierto un <code>&lt;p&gt;</code>. Levanta el izquierdo: has abierto un <code>&lt;strong&gt;</code>. Ahora ciérralos en el orden correcto: primero baja el <b>izquierdo</b> (el último que has abierto) y después el derecho. ¡Hazlo tres veces, cada vez más deprisa!" },
      { k: 'web', ph: 'repte', url: 'receptari.numi',
        q: "El teu primer codi! Escriu el nom d'una fleca dins del <code>&lt;h1&gt;</code> i una frase dins del <code>&lt;p&gt;</code>. Mira com canvia la vista prèvia mentre escrius.|¡Tu primer código! Escribe el nombre de una panadería dentro del <code>&lt;h1&gt;</code> y una frase dentro del <code>&lt;p&gt;</code>. Mira cómo cambia la vista previa mientras escribes.",
        html: '<h1></h1>\n<p></p>',
        checks: [{ k: 'text', t: 'h1', min: 3, txt: "El <code>&lt;h1&gt;</code> té el nom de la fleca|El <code>&lt;h1&gt;</code> tiene el nombre de la panadería" },
          { k: 'text', t: 'p', min: 10, txt: 'El <code>&lt;p&gt;</code> té una frase (10 lletres o més)|El <code>&lt;p&gt;</code> tiene una frase (10 letras o más)' }, { k: 'clean' }],
        sol: { get html() { return L('<h1>Fleca Bon Dia</h1>\n<p>Pa calent cada matí.</p>', '<h1>Panadería Buen Día</h1>\n<p>Pan caliente cada mañana.</p>'); } },
        hint: "Escriu entre el <code>&gt;</code> de l'obertura i el <code>&lt;</code> del tancament. No esborris les etiquetes!|Escribe entre el <code>&gt;</code> de la apertura y el <code>&lt;</code> del cierre. ¡No borres las etiquetas!" },
      { k: 'web', ph: 'repte', url: 'receptari.numi',
        q: "Afegeix un <b>segon paràgraf</b> amb l'horari i marca l'hora d'obrir com a <b>important</b> amb <code>&lt;strong&gt;</code>. Els botons de sota l'editor escriuen les etiquetes per tu.|Añade un <b>segundo párrafo</b> con el horario y marca la hora de abrir como <b>importante</b> con <code>&lt;strong&gt;</code>. Los botones de debajo del editor escriben las etiquetas por ti.",
        get html() { return L('<h1>Fleca Bon Dia</h1>\n<p>Pa calent cada matí.</p>\n', '<h1>Panadería Buen Día</h1>\n<p>Pan caliente cada mañana.</p>\n'); },
        snips: ['<p>|</p>', '<strong>|</strong>'],
        checks: [{ k: 'tag', t: 'p', min: 2 }, { k: 'in', t: 'strong', p: 'p', txt: 'Hi ha un <code>&lt;strong&gt;</code> dins d\'un paràgraf|Hay un <code>&lt;strong&gt;</code> dentro de un párrafo' }, { k: 'clean' }],
        sol: { get html() { return L('<h1>Fleca Bon Dia</h1>\n<p>Pa calent cada matí.</p>\n<p>Obrim a les <strong>7 del matí</strong>.</p>', '<h1>Panadería Buen Día</h1>\n<p>Pan caliente cada mañana.</p>\n<p>Abrimos a las <strong>7 de la mañana</strong>.</p>'); } },
        hint: "Primer escriu el paràgraf sencer. Després, posa <code>&lt;strong&gt;</code> just abans de l'hora i <code>&lt;/strong&gt;</code> just després, encara dins del <code>&lt;p&gt;</code>.|Primero escribe el párrafo entero. Después, pon <code>&lt;strong&gt;</code> justo antes de la hora y <code>&lt;/strong&gt;</code> justo después, todavía dentro del <code>&lt;p&gt;</code>." },
      { k: 'web', ph: 'repte', url: 'receptari.numi',
        q: "Aquest codi té <b>dos errors</b> i la pàgina surt malament. Troba'ls i arregla'ls: el missatge taronja de sota l'editor et diu a quina línia mirar.|Este código tiene <b>dos errores</b> y la página sale mal. Encuéntralos y arréglalos: el mensaje naranja de debajo del editor te dice en qué línea mirar.",
        get html() { return L('<h1>Fleca Bon Dia<h1>\n<p>Pa calent cada matí.</p>\n<p>Avui tenim <em>coca de recapte</p></em>', '<h1>Panadería Buen Día<h1>\n<p>Pan caliente cada mañana.</p>\n<p>Hoy tenemos <em>coca de recapte</p></em>'); },
        checks: [{ k: 'tag', t: 'h1', max: 1, txt: 'Només hi ha un títol <code>&lt;h1&gt;</code>|Solo hay un título <code>&lt;h1&gt;</code>' }, { k: 'in', t: 'em', p: 'p', txt: 'El <code>&lt;em&gt;</code> és dins del paràgraf|El <code>&lt;em&gt;</code> está dentro del párrafo' }, { k: 'clean' }],
        sol: { get html() { return L('<h1>Fleca Bon Dia</h1>\n<p>Pa calent cada matí.</p>\n<p>Avui tenim <em>coca de recapte</em></p>', '<h1>Panadería Buen Día</h1>\n<p>Pan caliente cada mañana.</p>\n<p>Hoy tenemos <em>coca de recapte</em></p>'); } },
        hint: "Línia 1: el segon <code>&lt;h1&gt;</code> hauria de ser un tancament. Línia 3: quina etiqueta s'ha obert l'última?|Línea 1: el segundo <code>&lt;h1&gt;</code> debería ser un cierre. Línea 3: ¿qué etiqueta se ha abierto la última?" },
      { k: 'wcreate', ph: 'crea', url: 'botiga.numi', name: 'El rètol de la botiga|El rótulo de la tienda',
        q: "Ara tu! Inventa't una botiga del poble (una fleca, una llibreria, un taller de bicis…) i fes-ne la primera pàgina: el nom, què hi fan i un avís important.|¡Ahora tú! Invéntate una tienda del pueblo (una panadería, una librería, un taller de bicis…) y haz su primera página: el nombre, qué hacen y un aviso importante.",
        crit: ['Un <code>&lt;h1&gt;</code> amb el nom de la botiga|Un <code>&lt;h1&gt;</code> con el nombre de la tienda', 'Almenys dos paràgrafs|Al menos dos párrafos', 'Un avís amb <code>&lt;strong&gt;</code> i una paraula amb èmfasi amb <code>&lt;em&gt;</code>|Un aviso con <code>&lt;strong&gt;</code> y una palabra con énfasis con <code>&lt;em&gt;</code>', 'Totes les etiquetes ben tancades|Todas las etiquetas bien cerradas'],
        html: '', snips: ['<h1>|</h1>', '<p>|</p>', '<strong>|</strong>', '<em>|</em>'],
        checks: [{ k: 'text', t: 'h1', min: 3, txt: 'Un <code>&lt;h1&gt;</code> amb el nom|Un <code>&lt;h1&gt;</code> con el nombre' }, { k: 'tag', t: 'p', min: 2 }, { k: 'in', t: 'strong', p: 'p', txt: 'Un avís important amb <code>&lt;strong&gt;</code>|Un aviso importante con <code>&lt;strong&gt;</code>' }, { k: 'in', t: 'em', p: 'p', txt: 'Una paraula amb èmfasi amb <code>&lt;em&gt;</code>|Una palabra con énfasis con <code>&lt;em&gt;</code>' }, { k: 'clean' }],
        sol: { get html() { return L('<h1>Bicis Roda Feliç</h1>\n<p>Arreglem bicis de totes les mides.</p>\n<p><strong>El dilluns és tancat.</strong></p>\n<p>Les rodes punxades, <em>en una hora</em>!</p>', '<h1>Bicis Rueda Feliz</h1>\n<p>Arreglamos bicis de todos los tamaños.</p>\n<p><strong>El lunes está cerrado.</strong></p>\n<p>¡Las ruedas pinchadas, <em>en una hora</em>!</p>'); } },
        hint: 'Comença pel títol i ves afegint els paràgrafs d\'un en un. Mira com es marquen les comprovacions.|Empieza por el título y ve añadiendo los párrafos de uno en uno. Mira cómo se marcan las comprobaciones.' },
      { k: 'quiz', ph: 'tanca', q: 'Quina etiqueta <b>tanca</b> un paràgraf?|¿Qué etiqueta <b>cierra</b> un párrafo?', opts: ['<code>&lt;/p&gt;</code>|<code>&lt;/p&gt;</code>', '<code>&lt;p&gt;</code>|<code>&lt;p&gt;</code>', '<code>&lt;p/&gt;</code>|<code>&lt;p/&gt;</code>'], a: 0,
        ex: "La de tancar és com la d'obrir, amb la barra just després del <code>&lt;</code>.|La de cerrar es como la de abrir, con la barra justo después del <code>&lt;</code>." },
      { k: 'quiz', ph: 'tanca', q: "Quin d'aquests codis està <b>ben niuat</b>?|¿Cuál de estos códigos está <b>bien anidado</b>?",
        opts: ['<code>&lt;p&gt;&lt;em&gt;Sí&lt;/em&gt;&lt;/p&gt;</code>|<code>&lt;p&gt;&lt;em&gt;Sí&lt;/em&gt;&lt;/p&gt;</code>', '<code>&lt;p&gt;&lt;em&gt;Sí&lt;/p&gt;&lt;/em&gt;</code>|<code>&lt;p&gt;&lt;em&gt;Sí&lt;/p&gt;&lt;/em&gt;</code>', '<code>&lt;em&gt;&lt;p&gt;Sí&lt;/em&gt;&lt;/p&gt;</code>|<code>&lt;em&gt;&lt;p&gt;Sí&lt;/em&gt;&lt;/p&gt;</code>'], a: 0,
        ex: "L'<code>&lt;em&gt;</code> s'obre l'últim i es tanca el primer: no s'encreuen.|El <code>&lt;em&gt;</code> se abre el último y se cierra el primero: no se cruzan." },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 2 · Títols i paràgrafs ---------- */
  { id: 'w2-2', t: 'Títols i paràgrafs|Títulos y párrafos', min: 40, badge: 'w_titols',
    learn: ['Hi ha sis nivells de títol, de <code>&lt;h1&gt;</code> (el principal) a <code>&lt;h6&gt;</code>; es fan servir en ordre, sense saltar-se\'n cap.|Hay seis niveles de título, de <code>&lt;h1&gt;</code> (el principal) a <code>&lt;h6&gt;</code>; se usan en orden, sin saltarse ninguno.',
      "El navegador converteix els espais i els salts de línia del codi en un sol espai: cada paràgraf va dins del seu <code>&lt;p&gt;</code>.|El navegador convierte los espacios y los saltos de línea del código en un solo espacio: cada párrafo va dentro de su <code>&lt;p&gt;</code>.",
      'Una pàgina completa té <code>&lt;head&gt;</code> (la informació, com el <code>&lt;title&gt;</code> de la pestanya) i <code>&lt;body&gt;</code> (el que es veu), i <code>lang</code> diu l\'idioma.|Una página completa tiene <code>&lt;head&gt;</code> (la información, como el <code>&lt;title&gt;</code> de la pestaña) y <code>&lt;body&gt;</code> (lo que se ve), y <code>lang</code> dice el idioma.'],
    steps: [
      { k: 'quiz', ph: 'recorda', q: "Recordes com es tanca una etiqueta? Quin d'aquests elements està ben escrit?|¿Recuerdas cómo se cierra una etiqueta? ¿Cuál de estos elementos está bien escrito?",
        opts: ['<code>&lt;h1&gt;Receptes&lt;/h1&gt;</code>|<code>&lt;h1&gt;Recetas&lt;/h1&gt;</code>', '<code>&lt;h1&gt;Receptes&lt;h1&gt;</code>|<code>&lt;h1&gt;Recetas&lt;h1&gt;</code>', '<code>&lt;h1&gt;Receptes&lt;/p&gt;</code>|<code>&lt;h1&gt;Recetas&lt;/p&gt;</code>'], a: 0 },
      { k: 'quiz', ph: 'recorda', q: 'Què vol dir que una paraula és dins de <code>&lt;strong&gt;</code>?|¿Qué quiere decir que una palabra está dentro de <code>&lt;strong&gt;</code>?',
        opts: ['Que és important|Que es importante', 'Que és un títol|Que es un título', 'Que és més petita|Que es más pequeña'], a: 0,
        ex: 'Es veu en negreta, però el que compta és el sentit: <b>important</b>.|Se ve en negrita, pero lo que cuenta es el sentido: <b>importante</b>.' },
      { k: 'story', ph: 'missio', who: 'numi', scene: 'poble', title: "L'índex del receptari|El índice del recetario",
        t: "El receptari tindrà moltes receptes, agrupades en seccions: primers plats, segons, postres… Com s'organitza un llibre així? Amb <b>títols de diferents nivells</b>: el del llibre, el de cada capítol, el de cada recepta. Avui faràs la portada completa del receptari.|El recetario tendrá muchas recetas, agrupadas en secciones: primeros platos, segundos, postres… ¿Cómo se organiza un libro así? Con <b>títulos de diferentes niveles</b>: el del libro, el de cada capítulo, el de cada receta. Hoy harás la portada completa del recetario." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Sis nivells|Seis niveles', t: 'De <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>|De <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>',
          media: { k: 'web', get html() { return L('<h1>Títol 1</h1>\n<h2>Títol 2</h2>\n<h3>Títol 3</h3>\n<h4>Títol 4</h4>\n<h5>Títol 5</h5>\n<h6>Títol 6</h6>', '<h1>Título 1</h1>\n<h2>Título 2</h2>\n<h3>Título 3</h3>\n<h4>Título 4</h4>\n<h5>Título 5</h5>\n<h6>Título 6</h6>'); } },
          x: "La <b>h</b> ve de <i>heading</i> (títol). <code>&lt;h1&gt;</code> és el títol principal de la pàgina: normalment n'hi ha <b>un</b>. <code>&lt;h2&gt;</code> són les seccions, <code>&lt;h3&gt;</code> els apartats d'una secció… i així fins a <code>&lt;h6&gt;</code>. El número diu el <b>nivell</b>.|La <b>h</b> viene de <i>heading</i> (título). <code>&lt;h1&gt;</code> es el título principal de la página: normalmente hay <b>uno</b>. <code>&lt;h2&gt;</code> son las secciones, <code>&lt;h3&gt;</code> los apartados de una sección… y así hasta <code>&lt;h6&gt;</code>. El número dice el <b>nivel</b>." },
        { k: 'Esquema|Esquema', t: "Com l'índex d'un llibre|Como el índice de un libro", anim: 'w2heads',
          x: "Els títols fan l'<span class='hl'>esquema</span> de la pàgina. Els cercadors el fan servir per entendre de què va, i les persones que fan servir un lector de pantalla poden saltar de títol en títol per trobar el que busquen. Per això van <b>en ordre</b>: després d'un <code>&lt;h2&gt;</code> ve un <code>&lt;h3&gt;</code>, no un <code>&lt;h4&gt;</code>.|Los títulos hacen el <span class='hl'>esquema</span> de la página. Los buscadores lo usan para entender de qué va, y las personas que usan un lector de pantalla pueden saltar de título en título para encontrar lo que buscan. Por eso van <b>en orden</b>: después de un <code>&lt;h2&gt;</code> viene un <code>&lt;h3&gt;</code>, no un <code>&lt;h4&gt;</code>.",
          bad: 'Triar <code>&lt;h4&gt;</code> perquè la mida m\'agrada més.|Elegir <code>&lt;h4&gt;</code> porque el tamaño me gusta más.', good: 'Triar el nivell segons l\'esquema. La mida, ja la canviarem amb CSS.|Elegir el nivel según el esquema. El tamaño ya lo cambiaremos con CSS.' },
        { k: 'Espais|Espacios', t: "El navegador s'empassa els espais|El navegador se traga los espacios",
          media: { k: 'web', get html() { return L('<p>Barreja    la farina\n      amb el sucre.</p>\n<p>Després,\n\n\nafegeix-hi els ous.</p>', '<p>Mezcla    la harina\n      con el azúcar.</p>\n<p>Después,\n\n\nañade los huevos.</p>'); } },
          x: 'Al codi pots posar molts espais o línies en blanc: el navegador els converteix en <b>un sol espai</b>. Per això, per separar els textos, cada paràgraf ha d\'anar dins del seu <code>&lt;p&gt;</code>.|En el código puedes poner muchos espacios o líneas en blanco: el navegador los convierte en <b>un solo espacio</b>. Por eso, para separar los textos, cada párrafo tiene que ir dentro de su <code>&lt;p&gt;</code>.',
          tip: "Si de veritat necessites un salt de línia dins d'un paràgraf (una adreça, un poema), hi ha <code>&lt;br&gt;</code>. És d'aquelles etiquetes que <b>no es tanquen</b>, perquè no tenen res a dins.|Si de verdad necesitas un salto de línea dentro de un párrafo (una dirección, un poema), existe <code>&lt;br&gt;</code>. Es de esas etiquetas que <b>no se cierran</b>, porque no tienen nada dentro." },
        { k: 'Estructura|Estructura', t: "L'esquelet d'una pàgina|El esqueleto de una página", anim: 'w2page',
          x: "Una pàgina completa comença amb <code>&lt;!DOCTYPE html&gt;</code>, que avisa que és HTML. Després, <code>&lt;html&gt;</code> ho embolica tot i té dues parts: <code>&lt;head&gt;</code> (el cap), amb la informació per al navegador, i <code>&lt;body&gt;</code> (el cos), amb tot el que es veu.|Una página completa empieza con <code>&lt;!DOCTYPE html&gt;</code>, que avisa de que es HTML. Después, <code>&lt;html&gt;</code> lo envuelve todo y tiene dos partes: <code>&lt;head&gt;</code> (la cabeza), con la información para el navegador, y <code>&lt;body&gt;</code> (el cuerpo), con todo lo que se ve.",
          tip: "<code>&lt;html lang=\"ca\"&gt;</code> diu en quin idioma és la pàgina. Així el navegador, els cercadors i els lectors de pantalla saben com s'ha de llegir. <code>lang</code> és un <b>atribut</b>: informació extra que va dins de l'etiqueta d'obrir.|<code>&lt;html lang=\"es\"&gt;</code> dice en qué idioma está la página. Así el navegador, los buscadores y los lectores de pantalla saben cómo hay que leerla. <code>lang</code> es un <b>atributo</b>: información extra que va dentro de la etiqueta de abrir." },
        { k: 'Compte!|¡Cuidado!', t: '<code>&lt;title&gt;</code> o <code>&lt;h1&gt;</code>?|¿<code>&lt;title&gt;</code> o <code>&lt;h1&gt;</code>?',
          media: { k: 'web', get html() { return L('<!DOCTYPE html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <title>Receptari</title>\n</head>\n<body>\n  <h1>Receptari del poble</h1>\n  <p>Receptes de tota la vida.</p>\n</body>\n</html>', '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>Recetario</title>\n</head>\n<body>\n  <h1>Recetario del pueblo</h1>\n  <p>Recetas de toda la vida.</p>\n</body>\n</html>'); } },
          x: "El <code>&lt;title&gt;</code> va al <code>&lt;head&gt;</code> i surt a la <b>pestanya</b> del navegador (i als resultats dels cercadors). El <code>&lt;h1&gt;</code> va al <code>&lt;body&gt;</code> i surt <b>dins</b> de la pàgina. Mira el resultat: el title no hi és! I el <code>&lt;meta charset=\"utf-8\"&gt;</code> fa que els accents i la ç es vegin bé.|El <code>&lt;title&gt;</code> va en el <code>&lt;head&gt;</code> y sale en la <b>pestaña</b> del navegador (y en los resultados de los buscadores). El <code>&lt;h1&gt;</code> va en el <code>&lt;body&gt;</code> y sale <b>dentro</b> de la página. Mira el resultado: ¡el title no está! Y el <code>&lt;meta charset=\"utf-8\"&gt;</code> hace que los acentos y la ñ se vean bien.",
          bad: 'Posar el <code>&lt;title&gt;</code> dins del <code>&lt;body&gt;</code>.|Poner el <code>&lt;title&gt;</code> dentro del <code>&lt;body&gt;</code>.', good: 'El <code>&lt;title&gt;</code> dins del <code>&lt;head&gt;</code>, el <code>&lt;h1&gt;</code> dins del <code>&lt;body&gt;</code>.|El <code>&lt;title&gt;</code> dentro del <code>&lt;head&gt;</code>, el <code>&lt;h1&gt;</code> dentro del <code>&lt;body&gt;</code>.' }
      ] },
      { k: 'seq', ph: 'mans', q: "Ordena les línies de l'<b>esquelet</b> d'una pàgina.|Ordena las líneas del <b>esqueleto</b> de una página.",
        items: ['<code>&lt;!DOCTYPE html&gt;</code>|<code>&lt;!DOCTYPE html&gt;</code>', '<code>&lt;html lang="ca"&gt;</code>|<code>&lt;html lang="es"&gt;</code>', '<code>&lt;head&gt;</code>|<code>&lt;head&gt;</code>', '<code>&lt;title&gt;Receptari&lt;/title&gt;</code>|<code>&lt;title&gt;Recetario&lt;/title&gt;</code>', '<code>&lt;/head&gt;</code>|<code>&lt;/head&gt;</code>', '<code>&lt;body&gt;</code>|<code>&lt;body&gt;</code>', '<code>&lt;/body&gt;</code>|<code>&lt;/body&gt;</code>', '<code>&lt;/html&gt;</code>|<code>&lt;/html&gt;</code>'],
        ex: "El <code>&lt;head&gt;</code> es tanca abans d'obrir el <code>&lt;body&gt;</code>, i el <code>&lt;/html&gt;</code> és l'últim de tots: és la capsa més gran.|El <code>&lt;head&gt;</code> se cierra antes de abrir el <code>&lt;body&gt;</code>, y el <code>&lt;/html&gt;</code> es el último de todos: es la caja más grande." },
      { k: 'unplug', ph: 'mans', ico: '📚', title: "L'esquema de la revista|El esquema de la revista",
        t: "A classe, en grups de 3. Teniu les tires retallades d'una pàgina de la revista del poble, totes barrejades.|En clase, en grupos de 3. Tenéis las tiras recortadas de una página de la revista del pueblo, todas mezcladas.",
        steps: ['Separeu els títols dels paràgrafs.|Separad los títulos de los párrafos.', "Decidiu el nivell de cada títol: quin és el <code>&lt;h1&gt;</code>? Quins són seccions (<code>&lt;h2&gt;</code>) i quins, apartats (<code>&lt;h3&gt;</code>)?|Decidid el nivel de cada título: ¿cuál es el <code>&lt;h1&gt;</code>? ¿Cuáles son secciones (<code>&lt;h2&gt;</code>) y cuáles, apartados (<code>&lt;h3&gt;</code>)?",
          "Poseu les tires en ordre a la taula i escriviu l'etiqueta al costat de cada una.|Poned las tiras en orden en la mesa y escribid la etiqueta al lado de cada una.", "Compareu el vostre esquema amb el d'un altre grup: coincideix?|Comparad vuestro esquema con el de otro grupo: ¿coincide?"],
        tip: "Truc: llegiu només els títols, de dalt a baix. Si s'entén de què va la pàgina, l'esquema és bo.|Truco: leed solo los títulos, de arriba abajo. Si se entiende de qué va la página, el esquema es bueno." },
      { k: 'wquiz', ph: 'prova', q: 'Aquest codi té molts espais i salts de línia. Com el dibuixarà el navegador?|Este código tiene muchos espacios y saltos de línea. ¿Cómo lo dibujará el navegador?',
        code: { get html() { return L('<p>Farina,\n      sucre\n\n   i ous.</p>', '<p>Harina,\n      azúcar\n\n   y huevos.</p>'); } },
        opts: [
          { get html() { return L('<p>Farina, sucre i ous.</p>', '<p>Harina, azúcar y huevos.</p>'); } },
          { get html() { return L('<p>Farina,<br>sucre<br><br>i ous.</p>', '<p>Harina,<br>azúcar<br><br>y huevos.</p>'); } },
          { get html() { return L('<p>Farina,\n      sucre\n\n   i ous.</p>', '<p>Harina,\n      azúcar\n\n   y huevos.</p>'); }, css: 'p { white-space: pre; }' }
        ], a: 0,
        ex: 'Tots els espais i salts de línia es converteixen en un sol espai: queda tot en una línia.|Todos los espacios y saltos de línea se convierten en un solo espacio: queda todo en una línea.' },
      { k: 'wquiz', ph: 'prova', q: 'Quina vista prèvia fa aquest codi?|¿Qué vista previa hace este código?',
        code: { get html() { return L('<h1>Receptari</h1>\n<h2>Postres</h2>\n<h3>Crema catalana</h3>', '<h1>Recetario</h1>\n<h2>Postres</h2>\n<h3>Crema catalana</h3>'); } },
        opts: [
          { get html() { return L('<h1>Receptari</h1>\n<h2>Postres</h2>\n<h3>Crema catalana</h3>', '<h1>Recetario</h1>\n<h2>Postres</h2>\n<h3>Crema catalana</h3>'); } },
          { get html() { return L('<h3>Receptari</h3>\n<h2>Postres</h2>\n<h1>Crema catalana</h1>', '<h3>Recetario</h3>\n<h2>Postres</h2>\n<h1>Crema catalana</h1>'); } },
          { get html() { return L('<p>Receptari</p>\n<p>Postres</p>\n<p>Crema catalana</p>', '<p>Recetario</p>\n<p>Postres</p>\n<p>Crema catalana</p>'); } }
        ], a: 0,
        ex: "Com més petit és el número, més important és el títol: el <code>&lt;h1&gt;</code> és el més gran.|Cuanto más pequeño es el número, más importante es el título: el <code>&lt;h1&gt;</code> es el más grande." },
      { k: 'wspot', ph: 'investiga', q: "En aquest esquema, un títol <b>se salta un nivell</b>. Toca'l.|En este esquema, un título <b>se salta un nivel</b>. Tócalo.",
        get html() { return L('<h1>Receptari del poble</h1>\n<h2>Primers plats</h2>\n<p>Per començar el dinar.</p>\n<h4>Sopa de galets</h4>\n<p>Calenta i bona.</p>', '<h1>Recetario del pueblo</h1>\n<h2>Primeros platos</h2>\n<p>Para empezar la comida.</p>\n<h4>Sopa de galets</h4>\n<p>Caliente y buena.</p>'); }, bad: 4,
        ex: "Després d'un <code>&lt;h2&gt;</code>, un apartat és un <code>&lt;h3&gt;</code>. El <code>&lt;h4&gt;</code> se salta un nivell, i l'esquema queda coix.|Después de un <code>&lt;h2&gt;</code>, un apartado es un <code>&lt;h3&gt;</code>. El <code>&lt;h4&gt;</code> se salta un nivel, y el esquema queda cojo." },
      { k: 'wspot', ph: 'investiga', q: "Aquesta pàgina té una etiqueta <b>fora de lloc</b>. Toca la línia.|Esta página tiene una etiqueta <b>fuera de lugar</b>. Toca la línea.",
        get html() { return L('<!DOCTYPE html>\n<html lang="ca">\n<head>\n</head>\n<body>\n  <title>Receptari</title>\n  <h1>Receptari del poble</h1>\n</body>\n</html>', '<!DOCTYPE html>\n<html lang="es">\n<head>\n</head>\n<body>\n  <title>Recetario</title>\n  <h1>Recetario del pueblo</h1>\n</body>\n</html>'); }, bad: 6,
        ex: "El <code>&lt;title&gt;</code> és informació per al navegador: va dins del <code>&lt;head&gt;</code>, no del <code>&lt;body&gt;</code>.|El <code>&lt;title&gt;</code> es información para el navegador: va dentro del <code>&lt;head&gt;</code>, no del <code>&lt;body&gt;</code>." },
      { k: 'move', ph: 'pausa', secs: 25, t: "Fes de títol! Quan llegeixis <b>h1</b>, posa't dret amb els braços ben amunt. <b>h2</b>: dret, braços en creu. <b>h3</b>: mans a les espatlles. <b>p</b>: assegut. Ara: h1, h2, p, h3, p, h2, h1!|¡Haz de título! Cuando leas <b>h1</b>, ponte de pie con los brazos bien arriba. <b>h2</b>: de pie, brazos en cruz. <b>h3</b>: manos en los hombros. <b>p</b>: sentado. Ahora: ¡h1, h2, p, h3, p, h2, h1!" },
      { k: 'web', ph: 'repte', url: 'receptari.numi',
        q: "El receptari té seccions. Escriu el nom de les dues seccions dins dels <code>&lt;h2&gt;</code> (per exemple, «Primers plats» i «Postres») i una frase a cada paràgraf.|El recetario tiene secciones. Escribe el nombre de las dos secciones dentro de los <code>&lt;h2&gt;</code> (por ejemplo, «Primeros platos» y «Postres») y una frase en cada párrafo.",
        get html() { return L('<h1>Receptari del poble</h1>\n<h2></h2>\n<p></p>\n<h2></h2>\n<p></p>', '<h1>Recetario del pueblo</h1>\n<h2></h2>\n<p></p>\n<h2></h2>\n<p></p>'); },
        checks: [{ k: 'text', t: 'h2', min: 4, txt: 'Els <code>&lt;h2&gt;</code> tenen el nom de les seccions|Los <code>&lt;h2&gt;</code> tienen el nombre de las secciones' }, { k: 'text', t: 'p', min: 10, txt: 'Els paràgrafs tenen una frase|Los párrafos tienen una frase' }, { k: 'tag', t: 'h2', min: 2 }, { k: 'clean' }],
        sol: { get html() { return L('<h1>Receptari del poble</h1>\n<h2>Primers plats</h2>\n<p>Sopes, amanides i verdures.</p>\n<h2>Postres</h2>\n<p>Coques, cremes i pastissos.</p>', '<h1>Recetario del pueblo</h1>\n<h2>Primeros platos</h2>\n<p>Sopas, ensaladas y verduras.</p>\n<h2>Postres</h2>\n<p>Cocas, cremas y pasteles.</p>'); } },
        hint: "Escriu entre l'etiqueta d'obrir i la de tancar de cada línia.|Escribe entre la etiqueta de abrir y la de cerrar de cada línea." },
      { k: 'web', ph: 'repte', url: 'receptari.numi',
        q: "Dins de la secció «Postres» hi haurà receptes. Afegeix-hi, al final, un <b>apartat</b> amb un <code>&lt;h3&gt;</code> (el nom d'unes postres) i un paràgraf que les expliqui.|Dentro de la sección «Postres» habrá recetas. Añade, al final, un <b>apartado</b> con un <code>&lt;h3&gt;</code> (el nombre de un postre) y un párrafo que lo explique.",
        get html() { return L('<h1>Receptari del poble</h1>\n<h2>Primers plats</h2>\n<p>Sopes, amanides i verdures.</p>\n<h2>Postres</h2>\n<p>Coques, cremes i pastissos.</p>\n', '<h1>Recetario del pueblo</h1>\n<h2>Primeros platos</h2>\n<p>Sopas, ensaladas y verduras.</p>\n<h2>Postres</h2>\n<p>Cocas, cremas y pasteles.</p>\n'); },
        snips: ['<h3>|</h3>', '<p>|</p>'],
        checks: [{ k: 'tag', t: 'h3' }, { k: 'text', t: 'h3', min: 3 }, { k: 'order', a: 'h2', b: 'h3', txt: 'El <code>&lt;h3&gt;</code> va després de les seccions|El <code>&lt;h3&gt;</code> va después de las secciones' }, { k: 'tag', t: 'p', min: 3 }, { k: 'clean' }],
        sol: { get html() { return L('<h1>Receptari del poble</h1>\n<h2>Primers plats</h2>\n<p>Sopes, amanides i verdures.</p>\n<h2>Postres</h2>\n<p>Coques, cremes i pastissos.</p>\n<h3>Crema catalana</h3>\n<p>Llet, ous i sucre cremat per sobre.</p>', '<h1>Recetario del pueblo</h1>\n<h2>Primeros platos</h2>\n<p>Sopas, ensaladas y verduras.</p>\n<h2>Postres</h2>\n<p>Cocas, cremas y pasteles.</p>\n<h3>Crema catalana</h3>\n<p>Leche, huevos y azúcar quemado por encima.</p>'); } },
        hint: "L'apartat va a sota de «Postres», que és la secció on pertany.|El apartado va debajo de «Postres», que es la sección a la que pertenece." },
      { k: 'web', ph: 'repte', url: 'receptari.numi',
        q: "Ara la pàgina completa. Afegeix l'idioma a l'etiqueta <code>&lt;html&gt;</code> amb l'atribut <code>lang</code> i escriu, dins del <code>&lt;head&gt;</code>, el <code>&lt;title&gt;</code> que sortirà a la pestanya.|Ahora la página completa. Añade el idioma a la etiqueta <code>&lt;html&gt;</code> con el atributo <code>lang</code> y escribe, dentro del <code>&lt;head&gt;</code>, el <code>&lt;title&gt;</code> que saldrá en la pestaña.",
        get html() { return L('<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n\n</head>\n<body>\n  <h1>Receptari del poble</h1>\n  <p>Receptes de família.</p>\n</body>\n</html>', '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n\n</head>\n<body>\n  <h1>Recetario del pueblo</h1>\n  <p>Recetas de familia.</p>\n</body>\n</html>'); },
        get snips() { return [L(' lang="ca"', ' lang="es"'), '<title>|</title>']; },
        checks: [{ k: 'lang' }, { k: 'title' }, { k: 'in', t: 'title', p: 'head', txt: 'El <code>&lt;title&gt;</code> és dins del <code>&lt;head&gt;</code>|El <code>&lt;title&gt;</code> está dentro del <code>&lt;head&gt;</code>' }, { k: 'clean' }],
        sol: { get html() { return L('<!DOCTYPE html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <title>Receptari</title>\n</head>\n<body>\n  <h1>Receptari del poble</h1>\n  <p>Receptes de família.</p>\n</body>\n</html>', '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>Recetario</title>\n</head>\n<body>\n  <h1>Recetario del pueblo</h1>\n  <p>Recetas de familia.</p>\n</body>\n</html>'); } },
        hint: "L'atribut va dins de l'etiqueta d'obrir: <code>&lt;html lang=\"ca\"&gt;</code>. El title, a la línia buida del head.|El atributo va dentro de la etiqueta de abrir: <code>&lt;html lang=\"es\"&gt;</code>. El title, en la línea vacía del head." },
      { k: 'web', ph: 'repte', url: 'receptari.numi',
        q: "La pàgina de les postres té <b>tres errors</b>: un títol que es tanca amb un altre número, un títol que se salta un nivell i un text que s'ha quedat sense paràgraf. Arregla-la!|La página de los postres tiene <b>tres errores</b>: un título que se cierra con otro número, un título que se salta un nivel y un texto que se ha quedado sin párrafo. ¡Arréglala!",
        get html() { return L('<h1>Postres de la festa</h1>\n<h2>Crema catalana</h3>\n<p>La fem per la festa.</p>\n<h4>Ingredients</h4>\nLlet, ous i sucre.', '<h1>Postres de la fiesta</h1>\n<h2>Crema catalana</h3>\n<p>La hacemos en la fiesta.</p>\n<h4>Ingredientes</h4>\nLeche, huevos y azúcar.'); },
        checks: [{ k: 'clean' }, { k: 'tag', t: 'h3', txt: "L'apartat és un <code>&lt;h3&gt;</code>|El apartado es un <code>&lt;h3&gt;</code>" }, { k: 'notag', t: 'h4', txt: 'Cap títol se salta un nivell|Ningún título se salta un nivel' }, { k: 'tag', t: 'p', min: 2, txt: 'Tot el text és dins de paràgrafs|Todo el texto está dentro de párrafos' }],
        sol: { get html() { return L('<h1>Postres de la festa</h1>\n<h2>Crema catalana</h2>\n<p>La fem per la festa.</p>\n<h3>Ingredients</h3>\n<p>Llet, ous i sucre.</p>', '<h1>Postres de la fiesta</h1>\n<h2>Crema catalana</h2>\n<p>La hacemos en la fiesta.</p>\n<h3>Ingredientes</h3>\n<p>Leche, huevos y azúcar.</p>'); } },
        hint: 'Mira la línia 2 (quin número té el tancament?), la línia 4 (quin nivell toca després d\'un h2?) i la línia 5 (on és el seu <code>&lt;p&gt;</code>?).|Mira la línea 2 (¿qué número tiene el cierre?), la línea 4 (¿qué nivel toca después de un h2?) y la línea 5 (¿dónde está su <code>&lt;p&gt;</code>?).' },
      { k: 'wcreate', ph: 'crea', url: 'receptari.numi', name: 'La portada del receptari|La portada del recetario',
        q: "Fes la portada completa del receptari: posa l'idioma i el títol de la pestanya, un <code>&lt;h1&gt;</code>, almenys <b>dues seccions</b> amb <code>&lt;h2&gt;</code> i un paràgraf a cada una. Si vols, afegeix-hi apartats amb <code>&lt;h3&gt;</code>.|Haz la portada completa del recetario: pon el idioma y el título de la pestaña, un <code>&lt;h1&gt;</code>, al menos <b>dos secciones</b> con <code>&lt;h2&gt;</code> y un párrafo en cada una. Si quieres, añade apartados con <code>&lt;h3&gt;</code>.",
        crit: ["L'idioma (<code>lang</code>) i el <code>&lt;title&gt;</code> de la pestanya|El idioma (<code>lang</code>) y el <code>&lt;title&gt;</code> de la pestaña", 'Un sol <code>&lt;h1&gt;</code> i almenys dues seccions <code>&lt;h2&gt;</code>|Un solo <code>&lt;h1&gt;</code> y al menos dos secciones <code>&lt;h2&gt;</code>', 'Un paràgraf a cada secció i els títols en ordre|Un párrafo en cada sección y los títulos en orden', 'Totes les etiquetes ben tancades|Todas las etiquetas bien cerradas'],
        html: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n\n</head>\n<body>\n\n</body>\n</html>',
        get snips() { return [L(' lang="ca"', ' lang="es"'), '<title>|</title>', '<h1>|</h1>', '<h2>|</h2>', '<h3>|</h3>', '<p>|</p>']; },
        checks: [{ k: 'lang' }, { k: 'title' }, { k: 'tag', t: 'h1', max: 1, txt: 'Un sol <code>&lt;h1&gt;</code>|Un solo <code>&lt;h1&gt;</code>' }, { k: 'tag', t: 'h2', min: 2 }, { k: 'tag', t: 'p', min: 2 }, { k: 'order', a: 'h1', b: 'h2' }, { k: 'clean' }],
        sol: { get html() { return L('<!DOCTYPE html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <title>Receptari del poble</title>\n</head>\n<body>\n  <h1>Receptari del poble</h1>\n  <p>Les receptes de les famílies per a la festa major.</p>\n  <h2>Primers plats</h2>\n  <p>Sopes, amanides i verdures de l\'hort.</p>\n  <h2>Postres</h2>\n  <p>Coques, cremes i pastissos.</p>\n  <h3>Coca de llardons</h3>\n  <p>La recepta de la iaia Rosa.</p>\n</body>\n</html>', '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>Recetario del pueblo</title>\n</head>\n<body>\n  <h1>Recetario del pueblo</h1>\n  <p>Las recetas de las familias para la fiesta mayor.</p>\n  <h2>Primeros platos</h2>\n  <p>Sopas, ensaladas y verduras del huerto.</p>\n  <h2>Postres</h2>\n  <p>Cocas, cremas y pasteles.</p>\n  <h3>Coca de chicharrones</h3>\n  <p>La receta de la abuela Rosa.</p>\n</body>\n</html>'); } },
        hint: "Primer l'idioma i el title, al head. Després, dins del body: h1, i per a cada secció, un h2 i un p.|Primero el idioma y el title, en el head. Después, dentro del body: h1, y para cada sección, un h2 y un p." },
      { k: 'quiz', ph: 'tanca', q: 'Quina etiqueta fa el text que surt a la <b>pestanya</b> del navegador?|¿Qué etiqueta hace el texto que sale en la <b>pestaña</b> del navegador?',
        opts: ['<code>&lt;title&gt;</code>, dins del head|<code>&lt;title&gt;</code>, dentro del head', '<code>&lt;h1&gt;</code>, dins del body|<code>&lt;h1&gt;</code>, dentro del body', '<code>&lt;head&gt;</code>, sense res més|<code>&lt;head&gt;</code>, sin nada más'], a: 0 },
      { k: 'quiz', ph: 'tanca', q: 'La pàgina té un <code>&lt;h1&gt;</code> i vols afegir-hi una <b>secció</b> nova. Quin títol li toca?|La página tiene un <code>&lt;h1&gt;</code> y quieres añadir una <b>sección</b> nueva. ¿Qué título le toca?',
        opts: ['<code>&lt;h2&gt;</code>|<code>&lt;h2&gt;</code>', '<code>&lt;h4&gt;</code>, que és més petit|<code>&lt;h4&gt;</code>, que es más pequeño', 'Un altre <code>&lt;h1&gt;</code>|Otro <code>&lt;h1&gt;</code>'], a: 0,
        ex: "Les seccions que pengen del títol principal són el nivell següent: h2.|Las secciones que cuelgan del título principal son el nivel siguiente: h2." },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 3 · Llistes ---------- */
  { id: 'w2-3', t: 'Llistes|Listas', min: 40, badge: 'w_llistes',
    learn: ['<code>&lt;ul&gt;</code> és una llista sense ordre (amb pics) i <code>&lt;ol&gt;</code>, una llista ordenada (amb números).|<code>&lt;ul&gt;</code> es una lista sin orden (con viñetas) y <code>&lt;ol&gt;</code>, una lista ordenada (con números).',
      'Cada element de la llista va dins d\'un <code>&lt;li&gt;</code>, i els <code>&lt;li&gt;</code> només poden anar dins d\'una <code>&lt;ul&gt;</code> o d\'una <code>&lt;ol&gt;</code>.|Cada elemento de la lista va dentro de un <code>&lt;li&gt;</code>, y los <code>&lt;li&gt;</code> solo pueden ir dentro de una <code>&lt;ul&gt;</code> o de una <code>&lt;ol&gt;</code>.',
      "Una llista pot anar dins d'un <code>&lt;li&gt;</code> d'una altra llista: és una llista niuada.|Una lista puede ir dentro de un <code>&lt;li&gt;</code> de otra lista: es una lista anidada."],
    steps: [
      { k: 'quiz', ph: 'recorda', q: 'Tens una secció <code>&lt;h2&gt;</code> i vols fer-hi un apartat a dins. Quin títol li toca?|Tienes una sección <code>&lt;h2&gt;</code> y quieres hacer un apartado dentro. ¿Qué título le toca?',
        opts: ['<code>&lt;h3&gt;</code>|<code>&lt;h3&gt;</code>', '<code>&lt;h1&gt;</code>|<code>&lt;h1&gt;</code>', '<code>&lt;h5&gt;</code>|<code>&lt;h5&gt;</code>'], a: 0 },
      { k: 'quiz', ph: 'recorda', q: 'Escrius al codi <code>Farina,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sucre</code> amb molts espais. Com surt a la pàgina?|Escribes en el código <code>Harina,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;azúcar</code> con muchos espacios. ¿Cómo sale en la página?',
        opts: ['Amb un sol espai|Con un solo espacio', 'Amb tots els espais|Con todos los espacios', 'En dues línies|En dos líneas'], a: 0,
        ex: 'El navegador ajunta els espais i els salts de línia en un de sol.|El navegador junta los espacios y los saltos de línea en uno solo.' },
      { k: 'story', ph: 'missio', who: 'both', scene: 'poble', title: 'Ingredients i passos|Ingredientes y pasos',
        t: "Totes les receptes tenen dues llistes: la dels <b>ingredients</b> i la dels <b>passos</b>. Però no són iguals! Tant fa si compres primer els ous o la farina, però si poses el pastís al forn abans de barrejar… desastre! Avui aprendràs a fer llistes de les dues menes.|Todas las recetas tienen dos listas: la de los <b>ingredientes</b> y la de los <b>pasos</b>. ¡Pero no son iguales! Da igual si compras primero los huevos o la harina, pero si metes el pastel en el horno antes de mezclar… ¡desastre! Hoy aprenderás a hacer listas de los dos tipos." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Llistes|Listas', t: 'Dues menes de llista|Dos tipos de lista', anim: 'w2lists',
          x: "<code>&lt;ul&gt;</code> (<i>unordered list</i>) és una llista <b>sense ordre</b>: surt amb pics i els elements es poden canviar de lloc. <code>&lt;ol&gt;</code> (<i>ordered list</i>) és una llista <b>ordenada</b>: surt amb números perquè l'ordre importa.|<code>&lt;ul&gt;</code> (<i>unordered list</i>) es una lista <b>sin orden</b>: sale con viñetas y los elementos se pueden cambiar de sitio. <code>&lt;ol&gt;</code> (<i>ordered list</i>) es una lista <b>ordenada</b>: sale con números porque el orden importa." },
        { k: 'Sense ordre|Sin orden', t: '<code>&lt;ul&gt;</code> i <code>&lt;li&gt;</code>|<code>&lt;ul&gt;</code> y <code>&lt;li&gt;</code>',
          media: { k: 'web', get html() { return L('<h2>Ingredients</h2>\n<ul>\n  <li>Farina</li>\n  <li>Ous</li>\n  <li>Sucre</li>\n</ul>', '<h2>Ingredientes</h2>\n<ul>\n  <li>Harina</li>\n  <li>Huevos</li>\n  <li>Azúcar</li>\n</ul>'); } },
          x: "La <code>&lt;ul&gt;</code> és la capsa de la llista i cada element va dins d'un <code>&lt;li&gt;</code> (<i>list item</i>). El navegador hi posa el pic sol: no l'has d'escriure tu. Els espais del davant dels <code>&lt;li&gt;</code> no surten a la pàgina, però fan el codi més fàcil de llegir.|La <code>&lt;ul&gt;</code> es la caja de la lista y cada elemento va dentro de un <code>&lt;li&gt;</code> (<i>list item</i>). El navegador pone la viñeta solo: no la tienes que escribir tú. Los espacios delante de los <code>&lt;li&gt;</code> no salen en la página, pero hacen el código más fácil de leer." },
        { k: 'Amb ordre|Con orden', t: "<code>&lt;ol&gt;</code>: quan l'ordre importa|<code>&lt;ol&gt;</code>: cuando el orden importa",
          media: { k: 'web', get html() { return L('<h2>Passos</h2>\n<ol>\n  <li>Bat els ous.</li>\n  <li>Afegeix-hi la farina.</li>\n  <li>Posa-ho al forn.</li>\n</ol>', '<h2>Pasos</h2>\n<ol>\n  <li>Bate los huevos.</li>\n  <li>Añade la harina.</li>\n  <li>Mételo en el horno.</li>\n</ol>'); } },
          x: "Amb <code>&lt;ol&gt;</code>, el navegador numera els elements sol. Si afegeixes un pas al mig, els números es tornen a posar bé. Els <code>&lt;li&gt;</code> són els mateixos que a la <code>&lt;ul&gt;</code>: només canvia la capsa.|Con <code>&lt;ol&gt;</code>, el navegador numera los elementos solo. Si añades un paso en medio, los números se vuelven a poner bien. Los <code>&lt;li&gt;</code> son los mismos que en la <code>&lt;ul&gt;</code>: solo cambia la caja." },
        { k: 'Dins de dins|Dentro de dentro', t: 'Llistes dins de llistes|Listas dentro de listas',
          media: { k: 'web', get html() { return L('<ul>\n  <li>Fruita\n    <ul>\n      <li>Poma</li>\n      <li>Pera</li>\n    </ul>\n  </li>\n  <li>Verdura</li>\n</ul>', '<ul>\n  <li>Fruta\n    <ul>\n      <li>Manzana</li>\n      <li>Pera</li>\n    </ul>\n  </li>\n  <li>Verdura</li>\n</ul>'); } },
          x: "Per fer subgrups, posa una llista nova <b>dins d'un <code>&lt;li&gt;</code></b>, abans de tancar-lo. És la regla de sempre: l'última capsa que obres és la primera que tanques.|Para hacer subgrupos, pon una lista nueva <b>dentro de un <code>&lt;li&gt;</code></b>, antes de cerrarlo. Es la regla de siempre: la última caja que abres es la primera que cierras.",
          tip: 'Les sagnies (els espais del principi de línia) t\'ajuden a veure què hi ha dins de què. Fes-les servir sempre!|Las sangrías (los espacios del principio de línea) te ayudan a ver qué hay dentro de qué. ¡Úsalas siempre!' },
        { k: 'Compte!|¡Cuidado!', t: 'La llista falsa|La lista falsa',
          media: { k: 'web', get html() { return L('<p>\n  - Farina\n  - Ous\n  - Sucre\n</p>', '<p>\n  - Harina\n  - Huevos\n  - Azúcar\n</p>'); } },
          x: "Una llista feta amb guions dins d'un paràgraf queda <b>tota en una línia</b> (recordes els espais?). I, a més, el navegador no sap que és una llista: un lector de pantalla no podrà dir «llista de 3 elements».|Una lista hecha con guiones dentro de un párrafo queda <b>toda en una línea</b> (¿recuerdas los espacios?). Y, además, el navegador no sabe que es una lista: un lector de pantalla no podrá decir «lista de 3 elementos».",
          bad: 'Fer la llista amb guions o números escrits a mà.|Hacer la lista con guiones o números escritos a mano.', good: 'Una <code>&lt;ul&gt;</code> o una <code>&lt;ol&gt;</code>, amb un <code>&lt;li&gt;</code> per a cada element.|Una <code>&lt;ul&gt;</code> o una <code>&lt;ol&gt;</code>, con un <code>&lt;li&gt;</code> para cada elemento.' }
      ] },
      { k: 'quiz', ph: 'mans', q: "Quina d'aquestes llistes ha de ser <b>ordenada</b> (<code>&lt;ol&gt;</code>)?|¿Cuál de estas listas tiene que ser <b>ordenada</b> (<code>&lt;ol&gt;</code>)?",
        opts: ['Els passos per plantar una llavor|Los pasos para plantar una semilla', 'Les fruites que més t\'agraden|Las frutas que más te gustan', 'Què cal portar a una excursió|Qué hay que llevar a una excursión'], a: 0,
        ex: "Per plantar, primer fas el forat, després hi poses la llavor i al final la regues: l'ordre importa.|Para plantar, primero haces el agujero, después pones la semilla y al final la riegas: el orden importa." },
      { k: 'unplug', ph: 'mans', ico: '✅', title: 'Ordenada o sense ordre?|¿Ordenada o sin orden?',
        t: 'A classe, en grups de 3, amb les targetes de llistes.|En clase, en grupos de 3, con las tarjetas de listas.',
        steps: ["Cada targeta és una llista de la vida real. Llegiu-la i decidiu: és <code>&lt;ul&gt;</code> o <code>&lt;ol&gt;</code>? Poseu-la a la pila que toca.|Cada tarjeta es una lista de la vida real. Leedla y decidid: ¿es <code>&lt;ul&gt;</code> u <code>&lt;ol&gt;</code>? Ponedla en el montón que toca.",
          "Per a cada targeta, digueu el perquè: què passaria si canviéssim l'ordre?|Para cada tarjeta, decid el porqué: ¿qué pasaría si cambiáramos el orden?",
          'Agafeu les targetes d\'ingredients i feu-ne grups (de la nevera, del rebost…): heu fet una llista niuada!|Coged las tarjetas de ingredientes y haced grupos (de la nevera, de la despensa…): ¡habéis hecho una lista anidada!',
          'Escriviu al paper el codi de la llista niuada, amb les sagnies.|Escribid en el papel el código de la lista anidada, con las sangrías.'],
        tip: "Pregunta màgica: «Si canvio l'ordre, el resultat canvia?» Si la resposta és sí, és una <code>&lt;ol&gt;</code>.|Pregunta mágica: «Si cambio el orden, ¿el resultado cambia?» Si la respuesta es sí, es una <code>&lt;ol&gt;</code>." },
      { k: 'wquiz', ph: 'prova', q: 'Quina vista prèvia fa aquest codi?|¿Qué vista previa hace este código?',
        code: { get html() { return L('<ol>\n  <li>Renta la fruita.</li>\n  <li>Talla-la a trossos.</li>\n  <li>Posa-la al bol.</li>\n</ol>', '<ol>\n  <li>Lava la fruta.</li>\n  <li>Córtala a trozos.</li>\n  <li>Ponla en el bol.</li>\n</ol>'); } },
        opts: [
          { get html() { return L('<ol>\n  <li>Renta la fruita.</li>\n  <li>Talla-la a trossos.</li>\n  <li>Posa-la al bol.</li>\n</ol>', '<ol>\n  <li>Lava la fruta.</li>\n  <li>Córtala a trozos.</li>\n  <li>Ponla en el bol.</li>\n</ol>'); } },
          { get html() { return L('<ul>\n  <li>Renta la fruita.</li>\n  <li>Talla-la a trossos.</li>\n  <li>Posa-la al bol.</li>\n</ul>', '<ul>\n  <li>Lava la fruta.</li>\n  <li>Córtala a trozos.</li>\n  <li>Ponla en el bol.</li>\n</ul>'); } },
          { get html() { return L('<p>Renta la fruita. Talla-la a trossos. Posa-la al bol.</p>', '<p>Lava la fruta. Córtala a trozos. Ponla en el bol.</p>'); } }
        ], a: 0,
        ex: "<code>&lt;ol&gt;</code> numera els passos: 1, 2, 3. Amb <code>&lt;ul&gt;</code> sortirien pics.|<code>&lt;ol&gt;</code> numera los pasos: 1, 2, 3. Con <code>&lt;ul&gt;</code> saldrían viñetas." },
      { k: 'wquiz', ph: 'prova', q: 'I aquest, amb una llista a dins d\'una altra?|¿Y este, con una lista dentro de otra?',
        code: { get html() { return L('<ul>\n  <li>Begudes\n    <ul>\n      <li>Aigua</li>\n      <li>Suc</li>\n    </ul>\n  </li>\n  <li>Pa</li>\n</ul>', '<ul>\n  <li>Bebidas\n    <ul>\n      <li>Agua</li>\n      <li>Zumo</li>\n    </ul>\n  </li>\n  <li>Pan</li>\n</ul>'); } },
        opts: [
          { get html() { return L('<ul>\n  <li>Begudes\n    <ul>\n      <li>Aigua</li>\n      <li>Suc</li>\n    </ul>\n  </li>\n  <li>Pa</li>\n</ul>', '<ul>\n  <li>Bebidas\n    <ul>\n      <li>Agua</li>\n      <li>Zumo</li>\n    </ul>\n  </li>\n  <li>Pan</li>\n</ul>'); } },
          { get html() { return L('<ul>\n  <li>Begudes</li>\n  <li>Aigua</li>\n  <li>Suc</li>\n  <li>Pa</li>\n</ul>', '<ul>\n  <li>Bebidas</li>\n  <li>Agua</li>\n  <li>Zumo</li>\n  <li>Pan</li>\n</ul>'); } },
          { get html() { return L('<ul>\n  <li>Begudes</li>\n  <li>Pa\n    <ul>\n      <li>Aigua</li>\n      <li>Suc</li>\n    </ul>\n  </li>\n</ul>', '<ul>\n  <li>Bebidas</li>\n  <li>Pan\n    <ul>\n      <li>Agua</li>\n      <li>Zumo</li>\n    </ul>\n  </li>\n</ul>'); } }
        ], a: 0,
        ex: "La llista de dins és dins del <code>&lt;li&gt;</code> «Begudes»: surt més endins i just a sota.|La lista de dentro está dentro del <code>&lt;li&gt;</code> «Bebidas»: sale más hacia dentro y justo debajo." },
      { k: 'wspot', ph: 'investiga', q: "Un element de la llista no està tancat. <b>Toca la línia.</b>|Un elemento de la lista no está cerrado. <b>Toca la línea.</b>",
        get html() { return L('<h2>Ingredients</h2>\n<ul>\n  <li>4 ous</li>\n  <li>2 patates\n  <li>1 ceba</li>\n</ul>', '<h2>Ingredientes</h2>\n<ul>\n  <li>4 huevos</li>\n  <li>2 patatas\n  <li>1 cebolla</li>\n</ul>'); }, bad: 4,
        ex: "A la línia 4 falta <code>&lt;/li&gt;</code>. Cada element de la llista s'obre i es tanca.|En la línea 4 falta <code>&lt;/li&gt;</code>. Cada elemento de la lista se abre y se cierra." },
      { k: 'wspot', ph: 'investiga', q: "Un pas s'ha quedat fora de lloc i no surt numerat. <b>Toca'l.</b>|Un paso se ha quedado fuera de lugar y no sale numerado. <b>Tócalo.</b>",
        get html() { return L('<ol>\n  <li>Bat els ous.</li>\n  Afegeix-hi sal.\n  <li>Cou-ho a la paella.</li>\n</ol>', '<ol>\n  <li>Bate los huevos.</li>\n  Añade sal.\n  <li>Cuécelo en la sartén.</li>\n</ol>'); }, bad: 3,
        ex: "Dins d'una llista, tot va dins de <code>&lt;li&gt;</code>. El pas de la sal no en té i el navegador no el numera.|Dentro de una lista, todo va dentro de <code>&lt;li&gt;</code>. El paso de la sal no lo tiene y el navegador no lo numera." },
      { k: 'move', ph: 'pausa', secs: 25, t: "Llista sense ordre: toca't el cap, el nas i els genolls… en l'ordre que vulguis! Llista ordenada: 1. aixeca't, 2. fes una volta, 3. salta, 4. seu. Ara fes-la al revés: funciona igual?|Lista sin orden: tócate la cabeza, la nariz y las rodillas… ¡en el orden que quieras! Lista ordenada: 1. levántate, 2. da una vuelta, 3. salta, 4. siéntate. Ahora hazla al revés: ¿funciona igual?" },
      { k: 'web', ph: 'repte', url: 'receptari.numi',
        q: "Completa la llista de la compra del pa amb tomàquet: afegeix-hi <b>tres ingredients més</b>, cadascun dins del seu <code>&lt;li&gt;</code>.|Completa la lista de la compra del pan con tomate: añade <b>tres ingredientes más</b>, cada uno dentro de su <code>&lt;li&gt;</code>.",
        get html() { return L('<h2>Llista de la compra</h2>\n<ul>\n  <li>Pa</li>\n  \n</ul>', '<h2>Lista de la compra</h2>\n<ul>\n  <li>Pan</li>\n  \n</ul>'); },
        snips: ['<li>|</li>'],
        checks: [{ k: 'in', t: 'li', p: 'ul', min: 4, txt: 'La llista té almenys 4 elements|La lista tiene al menos 4 elementos' }, { k: 'clean' }],
        sol: { get html() { return L('<h2>Llista de la compra</h2>\n<ul>\n  <li>Pa</li>\n  <li>Tomàquets</li>\n  <li>Oli</li>\n  <li>Sal</li>\n</ul>', '<h2>Lista de la compra</h2>\n<ul>\n  <li>Pan</li>\n  <li>Tomates</li>\n  <li>Aceite</li>\n  <li>Sal</li>\n</ul>'); } },
        hint: "Els <code>&lt;li&gt;</code> nous van <b>dins</b> de la <code>&lt;ul&gt;</code>, abans del <code>&lt;/ul&gt;</code>.|Los <code>&lt;li&gt;</code> nuevos van <b>dentro</b> de la <code>&lt;ul&gt;</code>, antes del <code>&lt;/ul&gt;</code>." },
      { k: 'web', ph: 'repte', url: 'receptari.numi',
        q: "Ara els passos! Escriu com es fa el pa amb tomàquet en una llista <b>ordenada</b>, amb almenys 4 passos, a sota del títol «Passos».|¡Ahora los pasos! Escribe cómo se hace el pan con tomate en una lista <b>ordenada</b>, con al menos 4 pasos, debajo del título «Pasos».",
        get html() { return L('<h1>Pa amb tomàquet</h1>\n<h2>Passos</h2>\n', '<h1>Pan con tomate</h1>\n<h2>Pasos</h2>\n'); },
        snips: ['<ol>\n  <li>|</li>\n</ol>', '<li>|</li>'],
        checks: [{ k: 'tag', t: 'ol' }, { k: 'in', t: 'li', p: 'ol', min: 4, txt: 'La llista ordenada té almenys 4 passos|La lista ordenada tiene al menos 4 pasos' }, { k: 'order', a: 'h2', b: 'ol', txt: 'La llista va després del títol «Passos»|La lista va después del título «Pasos»' }, { k: 'clean' }],
        sol: { get html() { return L('<h1>Pa amb tomàquet</h1>\n<h2>Passos</h2>\n<ol>\n  <li>Talla una llesca de pa.</li>\n  <li>Parteix el tomàquet per la meitat.</li>\n  <li>Frega el tomàquet sobre el pa.</li>\n  <li>Tira-hi oli i una mica de sal.</li>\n</ol>', '<h1>Pan con tomate</h1>\n<h2>Pasos</h2>\n<ol>\n  <li>Corta una rebanada de pan.</li>\n  <li>Parte el tomate por la mitad.</li>\n  <li>Frota el tomate sobre el pan.</li>\n  <li>Échale aceite y un poco de sal.</li>\n</ol>'); } },
        hint: "Toca el botó de la <code>&lt;ol&gt;</code>: escriu la capsa i el primer pas. Per als altres, el botó del <code>&lt;li&gt;</code>.|Toca el botón de la <code>&lt;ol&gt;</code>: escribe la caja y el primer paso. Para los demás, el botón del <code>&lt;li&gt;</code>." },
      { k: 'web', ph: 'repte', url: 'receptari.numi',
        q: "La llista de l'excursió té <b>tres errors</b>. Arregla-la perquè tingui 4 elements ben tancats!|La lista de la excursión tiene <b>tres errores</b>. ¡Arréglala para que tenga 4 elementos bien cerrados!",
        get html() { return L('<h2>Què cal portar</h2>\n<ul>\n  <li>Aigua</li>\n  <li>Entrepà\n  <li>Gorra</li>\n  Crema solar\n</ol>', '<h2>Qué hay que llevar</h2>\n<ul>\n  <li>Agua</li>\n  <li>Bocadillo\n  <li>Gorra</li>\n  Crema solar\n</ol>'); },
        checks: [{ k: 'clean' }, { k: 'in', t: 'li', p: 'ul', min: 4, txt: 'Els 4 elements són dins de <code>&lt;li&gt;</code>|Los 4 elementos están dentro de <code>&lt;li&gt;</code>' }, { k: 'notag', t: 'ol', txt: 'La llista es tanca amb la mateixa etiqueta amb què s\'obre|La lista se cierra con la misma etiqueta con la que se abre' }],
        sol: { get html() { return L('<h2>Què cal portar</h2>\n<ul>\n  <li>Aigua</li>\n  <li>Entrepà</li>\n  <li>Gorra</li>\n  <li>Crema solar</li>\n</ul>', '<h2>Qué hay que llevar</h2>\n<ul>\n  <li>Agua</li>\n  <li>Bocadillo</li>\n  <li>Gorra</li>\n  <li>Crema solar</li>\n</ul>'); } },
        hint: "Revisa la línia 4 (es tanca?), la línia 6 (on és el seu <code>&lt;li&gt;</code>?) i la línia 7 (s'obre amb ul… i es tanca amb?).|Revisa la línea 4 (¿se cierra?), la línea 6 (¿dónde está su <code>&lt;li&gt;</code>?) y la línea 7 (se abre con ul… ¿y se cierra con?)." },
      { k: 'web', ph: 'repte', url: 'receptari.numi',
        q: "Organitza els ingredients en dos grups: <b>de la nevera</b> i <b>del rebost</b>. Cada grup és un <code>&lt;li&gt;</code> amb una altra <code>&lt;ul&gt;</code> a dins. Posa-hi almenys 5 ingredients en total.|Organiza los ingredientes en dos grupos: <b>de la nevera</b> y <b>de la despensa</b>. Cada grupo es un <code>&lt;li&gt;</code> con otra <code>&lt;ul&gt;</code> dentro. Pon al menos 5 ingredientes en total.",
        get html() { return L('<h2>Ingredients</h2>\n<ul>\n  <li>De la nevera\n    <ul>\n      <li>Ous</li>\n    </ul>\n  </li>\n  <li>Del rebost</li>\n</ul>', '<h2>Ingredientes</h2>\n<ul>\n  <li>De la nevera\n    <ul>\n      <li>Huevos</li>\n    </ul>\n  </li>\n  <li>De la despensa</li>\n</ul>'); },
        snips: ['<li>|</li>', '<ul>\n  <li>|</li>\n</ul>'],
        checks: [{ k: 'in', t: 'ul', p: 'li', min: 2, txt: 'Els dos grups tenen una llista a dins|Los dos grupos tienen una lista dentro' }, { k: 'in', t: 'li', p: 'li', min: 5, txt: 'Hi ha almenys 5 ingredients dins dels grups|Hay al menos 5 ingredientes dentro de los grupos' }, { k: 'clean' }],
        sol: { get html() { return L('<h2>Ingredients</h2>\n<ul>\n  <li>De la nevera\n    <ul>\n      <li>Ous</li>\n      <li>Llet</li>\n      <li>Mantega</li>\n    </ul>\n  </li>\n  <li>Del rebost\n    <ul>\n      <li>Farina</li>\n      <li>Sucre</li>\n    </ul>\n  </li>\n</ul>', '<h2>Ingredientes</h2>\n<ul>\n  <li>De la nevera\n    <ul>\n      <li>Huevos</li>\n      <li>Leche</li>\n      <li>Mantequilla</li>\n    </ul>\n  </li>\n  <li>De la despensa\n    <ul>\n      <li>Harina</li>\n      <li>Azúcar</li>\n    </ul>\n  </li>\n</ul>'); } },
        hint: "Copia l'estructura del primer grup: la <code>&lt;ul&gt;</code> de dins va entre «Del rebost» i el <code>&lt;/li&gt;</code>.|Copia la estructura del primer grupo: la <code>&lt;ul&gt;</code> de dentro va entre «De la despensa» y el <code>&lt;/li&gt;</code>." },
      { k: 'wcreate', ph: 'crea', url: 'excursio.numi', name: "La pàgina de l'excursió|La página de la excursión",
        q: "El poble fa una excursió a la muntanya i tu en prepares la pàgina: un títol, una llista del que cal portar (<b>sense ordre</b>, almenys 4 coses) i el programa del dia (<b>amb ordre</b>, almenys 3 passos). Marca amb <code>&lt;strong&gt;</code> l'avís més important.|El pueblo hace una excursión a la montaña y tú preparas su página: un título, una lista de lo que hay que llevar (<b>sin orden</b>, al menos 4 cosas) y el programa del día (<b>con orden</b>, al menos 3 pasos). Marca con <code>&lt;strong&gt;</code> el aviso más importante.",
        crit: ['Un títol <code>&lt;h1&gt;</code>|Un título <code>&lt;h1&gt;</code>', 'Una <code>&lt;ul&gt;</code> amb almenys 4 coses per portar|Una <code>&lt;ul&gt;</code> con al menos 4 cosas para llevar', 'Una <code>&lt;ol&gt;</code> amb almenys 3 passos del dia|Una <code>&lt;ol&gt;</code> con al menos 3 pasos del día', 'Un avís amb <code>&lt;strong&gt;</code> i tot ben tancat|Un aviso con <code>&lt;strong&gt;</code> y todo bien cerrado'],
        get html() { return L('<h1>Excursió a la muntanya</h1>\n', '<h1>Excursión a la montaña</h1>\n'); },
        snips: ['<h2>|</h2>', '<ul>\n  <li>|</li>\n</ul>', '<ol>\n  <li>|</li>\n</ol>', '<li>|</li>', '<p>|</p>', '<strong>|</strong>'],
        checks: [{ k: 'tag', t: 'h1' }, { k: 'in', t: 'li', p: 'ul', min: 4, txt: 'Una <code>&lt;ul&gt;</code> amb almenys 4 elements|Una <code>&lt;ul&gt;</code> con al menos 4 elementos' }, { k: 'in', t: 'li', p: 'ol', min: 3, txt: 'Una <code>&lt;ol&gt;</code> amb almenys 3 passos|Una <code>&lt;ol&gt;</code> con al menos 3 pasos' }, { k: 'tag', t: 'strong' }, { k: 'clean' }],
        sol: { get html() { return L('<h1>Excursió a la muntanya</h1>\n<p><strong>Sortim a les 9 en punt de la plaça.</strong></p>\n<h2>Què cal portar</h2>\n<ul>\n  <li>Aigua</li>\n  <li>Entrepà</li>\n  <li>Gorra</li>\n  <li>Calçat còmode</li>\n</ul>\n<h2>Programa del dia</h2>\n<ol>\n  <li>Pugem fins a la font.</li>\n  <li>Dinem al prat.</li>\n  <li>Tornem al poble.</li>\n</ol>', '<h1>Excursión a la montaña</h1>\n<p><strong>Salimos a las 9 en punto de la plaza.</strong></p>\n<h2>Qué hay que llevar</h2>\n<ul>\n  <li>Agua</li>\n  <li>Bocadillo</li>\n  <li>Gorra</li>\n  <li>Calzado cómodo</li>\n</ul>\n<h2>Programa del día</h2>\n<ol>\n  <li>Subimos hasta la fuente.</li>\n  <li>Comemos en el prado.</li>\n  <li>Volvemos al pueblo.</li>\n</ol>'); } },
        hint: "Fes-ho a trossos: primer la llista del que cal portar, després el programa i, al final, l'avís.|Hazlo a trozos: primero la lista de lo que hay que llevar, después el programa y, al final, el aviso." },
      { k: 'quiz', ph: 'tanca', q: 'Per als <b>passos</b> d\'una recepta, quina llista fas servir?|Para los <b>pasos</b> de una receta, ¿qué lista usas?',
        opts: ['<code>&lt;ol&gt;</code>, perquè l\'ordre importa|<code>&lt;ol&gt;</code>, porque el orden importa', '<code>&lt;ul&gt;</code>, perquè queda més bonica|<code>&lt;ul&gt;</code>, porque queda más bonita', 'Paràgrafs amb números escrits a mà|Párrafos con números escritos a mano'], a: 0 },
      { k: 'quiz', ph: 'tanca', q: 'On ha d\'anar cada <code>&lt;li&gt;</code>?|¿Dónde tiene que ir cada <code>&lt;li&gt;</code>?',
        opts: ['Dins d\'una <code>&lt;ul&gt;</code> o d\'una <code>&lt;ol&gt;</code>|Dentro de una <code>&lt;ul&gt;</code> o de una <code>&lt;ol&gt;</code>', 'Dins d\'un <code>&lt;p&gt;</code>|Dentro de un <code>&lt;p&gt;</code>', 'On vulguis, no importa|Donde quieras, no importa'], a: 0,
        ex: "El <code>&lt;li&gt;</code> és un element d'una llista: sempre va dins de la seva capsa.|El <code>&lt;li&gt;</code> es un elemento de una lista: siempre va dentro de su caja." },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 4 · Projecte: la recepta ---------- */
  { id: 'w2-4', t: 'Projecte: la recepta|Proyecto: la receta', min: 45, proj: true, badge: 'w_recepta',
    learn: ["Abans d'escriure codi, planifica: quines parts té la pàgina i quina etiqueta li toca a cada una.|Antes de escribir código, planifica: qué partes tiene la página y qué etiqueta le toca a cada una.",
      'Una recepta fa servir tot l\'HTML de la unitat: l\'esquelet, els títols, els paràgrafs, les llistes i <code>&lt;strong&gt;</code>/<code>&lt;em&gt;</code> amb sentit.|Una receta usa todo el HTML de la unidad: el esqueleto, los títulos, los párrafos, las listas y <code>&lt;strong&gt;</code>/<code>&lt;em&gt;</code> con sentido.',
      'Revisar és part de la feina: etiquetes tancades, títols en ordre, el text sense faltes i la pàgina mirada al mòbil.|Revisar es parte del trabajo: etiquetas cerradas, títulos en orden, el texto sin faltas y la página mirada en el móvil.'],
    steps: [
      { k: 'quiz', ph: 'recorda', q: "Per a la llista d'<b>ingredients</b> d'una recepta, quina etiqueta fas servir?|Para la lista de <b>ingredientes</b> de una receta, ¿qué etiqueta usas?",
        opts: ["<code>&lt;ul&gt;</code>: tant fa l'ordre|<code>&lt;ul&gt;</code>: da igual el orden", "<code>&lt;ol&gt;</code>: l'ordre importa|<code>&lt;ol&gt;</code>: el orden importa", '<code>&lt;h2&gt;</code>|<code>&lt;h2&gt;</code>'], a: 0,
        ex: "Tant fa si poses primer els ous o la farina a la llista: és una <code>&lt;ul&gt;</code>. Els passos, en canvi, són una <code>&lt;ol&gt;</code>.|Da igual si pones primero los huevos o la harina en la lista: es una <code>&lt;ul&gt;</code>. Los pasos, en cambio, son una <code>&lt;ol&gt;</code>." },
      { k: 'quiz', ph: 'recorda', q: "En una llista niuada, on va la llista de dins?|En una lista anidada, ¿dónde va la lista de dentro?",
        opts: ["Dins d'un <code>&lt;li&gt;</code>, abans del <code>&lt;/li&gt;</code>|Dentro de un <code>&lt;li&gt;</code>, antes del <code>&lt;/li&gt;</code>", 'Després del <code>&lt;/ul&gt;</code>|Después del <code>&lt;/ul&gt;</code>', 'Dins del <code>&lt;head&gt;</code>|Dentro del <code>&lt;head&gt;</code>'], a: 0 },
      { k: 'story', ph: 'missio', who: 'both', scene: 'poble', title: 'El gran dia|El gran día',
        t: "Avui és el gran dia: el receptari del poble necessita <b>la teva recepta</b>! Pot ser un plat de casa teva, un que t'agradi molt o un que t'inventis. Primer la planificaràs, després farem junts la d'en Bit i, al final, faràs la teva.|Hoy es el gran día: ¡el recetario del pueblo necesita <b>tu receta</b>! Puede ser un plato de tu casa, uno que te guste mucho o uno que te inventes. Primero la planificarás, después haremos juntos la de Bit y, al final, harás la tuya." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Les parts|Las partes', t: "Les parts d'una recepta|Las partes de una receta", anim: 'w2recipe',
          x: "Una recepta sempre té les mateixes parts, i cada una té la seva etiqueta: el nom (<code>&lt;h1&gt;</code>), una presentació (<code>&lt;p&gt;</code>), els ingredients (<code>&lt;h2&gt;</code> i <code>&lt;ul&gt;</code>), els passos (<code>&lt;h2&gt;</code> i <code>&lt;ol&gt;</code>) i, si vols, un consell final (<code>&lt;p&gt;</code>).|Una receta siempre tiene las mismas partes, y cada una tiene su etiqueta: el nombre (<code>&lt;h1&gt;</code>), una presentación (<code>&lt;p&gt;</code>), los ingredientes (<code>&lt;h2&gt;</code> y <code>&lt;ul&gt;</code>), los pasos (<code>&lt;h2&gt;</code> y <code>&lt;ol&gt;</code>) y, si quieres, un consejo final (<code>&lt;p&gt;</code>)." },
        { k: 'Planificar|Planificar', t: "Primer, l'esbós|Primero, el boceto", pic: 'img/ment/lli.webp',
          x: "Els desenvolupadors web no comencen escrivint codi: primer fan un <span class='hl'>esbós</span> en paper. Dibuixa la pàgina amb caixes, escriu al costat de cada una quina etiqueta li toca i apunta els ingredients i els passos. Després, passar-ho a codi és molt més fàcil.|Los desarrolladores web no empiezan escribiendo código: primero hacen un <span class='hl'>boceto</span> en papel. Dibuja la página con cajas, escribe al lado de cada una qué etiqueta le toca y apunta los ingredientes y los pasos. Después, pasarlo a código es mucho más fácil.",
          tip: "Si no saps quina etiqueta toca, pregunta't: què és aquest tros? Un títol, un paràgraf, una llista?|Si no sabes qué etiqueta toca, pregúntate: ¿qué es este trozo? ¿Un título, un párrafo, una lista?" },
        { k: 'Comentaris|Comentarios', t: 'Notes que no surten|Notas que no salen',
          media: { k: 'web', get html() { return L('<!-- Això és una nota: no surt -->\n<h1>Batut de plàtan</h1>\n<!-- Aquí aniran els ingredients -->\n<p>Fresc i ràpid.</p>', '<!-- Esto es una nota: no sale -->\n<h1>Batido de plátano</h1>\n<!-- Aquí irán los ingredientes -->\n<p>Fresco y rápido.</p>'); } },
          x: "Tot el que escrius entre <code>&lt;!--</code> i <code>--&gt;</code> és un <span class='hl'>comentari</span>: el navegador no el mostra. Serveix per deixar notes a qui llegeix el codi (o a tu mateix/a). La plantilla del projecte en té: et diuen què va a cada lloc.|Todo lo que escribes entre <code>&lt;!--</code> y <code>--&gt;</code> es un <span class='hl'>comentario</span>: el navegador no lo muestra. Sirve para dejar notas a quien lee el código (o a ti mismo/a). La plantilla del proyecto tiene: te dicen qué va en cada sitio." },
        { k: 'Amb sentit|Con sentido', t: '<code>&lt;strong&gt;</code> i <code>&lt;em&gt;</code>, quan toca|<code>&lt;strong&gt;</code> y <code>&lt;em&gt;</code>, cuando toca', anim: 'w2strong',
          x: "<code>&lt;strong&gt;</code> és per als avisos <b>importants</b> (compte, que crema!). <code>&lt;em&gt;</code> és per a la paraula que diries amb més força, i pot canviar el sentit de la frase: no és el mateix «<em>Jo</em> faig el pastís» que «Jo faig el <em>pastís</em>».|<code>&lt;strong&gt;</code> es para los avisos <b>importantes</b> (¡cuidado, que quema!). <code>&lt;em&gt;</code> es para la palabra que dirías con más fuerza, y puede cambiar el sentido de la frase: no es lo mismo «<em>Yo</em> hago el pastel» que «Yo hago el <em>pastel</em>».",
          bad: 'Posar tota la recepta dins de <code>&lt;strong&gt;</code>: si tot és important, res no ho és.|Poner toda la receta dentro de <code>&lt;strong&gt;</code>: si todo es importante, nada lo es.', good: 'Un o dos avisos importants, on de veritat calen.|Uno o dos avisos importantes, donde de verdad hacen falta.' },
        { k: 'Exemple|Ejemplo', t: "La recepta d'en Bit|La receta de Bit",
          media: { k: 'web', get html() { return L('<h1>Batut de plàtan</h1>\n<p>Fresc i ràpid.</p>\n<h2>Ingredients</h2>\n<ul>\n  <li>1 plàtan</li>\n  <li>1 got de llet</li>\n</ul>\n<h2>Passos</h2>\n<ol>\n  <li>Pela el plàtan.</li>\n  <li>Bat-ho tot.</li>\n</ol>', '<h1>Batido de plátano</h1>\n<p>Fresco y rápido.</p>\n<h2>Ingredientes</h2>\n<ul>\n  <li>1 plátano</li>\n  <li>1 vaso de leche</li>\n</ul>\n<h2>Pasos</h2>\n<ol>\n  <li>Pela el plátano.</li>\n  <li>Bátelo todo.</li>\n</ol>'); } },
          x: "Aquí tens una recepta curta sencera. Fixa't que cada part té la seva etiqueta i que les sagnies ajuden a veure les llistes. La teva serà més llarga… i més bona!|Aquí tienes una receta corta entera. Fíjate en que cada parte tiene su etiqueta y en que las sangrías ayudan a ver las listas. La tuya será más larga… ¡y más rica!" }
      ] },
      { k: 'seq', ph: 'mans', q: "Ordena les parts de la pàgina d'una recepta, de dalt a baix.|Ordena las partes de la página de una receta, de arriba abajo.",
        items: ['<code>&lt;h1&gt;</code> El nom de la recepta|<code>&lt;h1&gt;</code> El nombre de la receta', '<code>&lt;p&gt;</code> La presentació|<code>&lt;p&gt;</code> La presentación', '<code>&lt;h2&gt;</code> Ingredients|<code>&lt;h2&gt;</code> Ingredientes', '<code>&lt;ul&gt;</code> La llista d\'ingredients|<code>&lt;ul&gt;</code> La lista de ingredientes', '<code>&lt;h2&gt;</code> Passos|<code>&lt;h2&gt;</code> Pasos', '<code>&lt;ol&gt;</code> Els passos numerats|<code>&lt;ol&gt;</code> Los pasos numerados'],
        ex: 'Cada títol <code>&lt;h2&gt;</code> va just abans de la seva llista.|Cada título <code>&lt;h2&gt;</code> va justo antes de su lista.' },
      { k: 'unplug', ph: 'mans', ico: '✏️', title: "L'esbós de la recepta|El boceto de la receta",
        t: 'A classe, amb la fitxa del projecte i un llapis.|En clase, con la ficha del proyecto y un lápiz.',
        steps: ['Tria la recepta que publicaràs. Si no te\'n saps cap, inventa-te-la!|Elige la receta que publicarás. Si no te sabes ninguna, ¡invéntatela!', "Dibuixa la pàgina amb caixes i escriu al costat de cada caixa l'etiqueta que li toca.|Dibuja la página con cajas y escribe al lado de cada caja la etiqueta que le toca.",
          'Apunta els ingredients (almenys 3) i els passos (almenys 3), i marca amb una estrella l\'avís important.|Apunta los ingredientes (al menos 3) y los pasos (al menos 3), y marca con una estrella el aviso importante.', "Ensenya l'esbós a un company/a: entén la recepta? Hi falta alguna part?|Enseña el boceto a un compañero/a: ¿entiende la receta? ¿Falta alguna parte?"],
        tip: "Un bon esbós estalvia molta feina: quan te'l miris, sabràs exactament què has d'escriure.|Un buen boceto ahorra mucho trabajo: cuando lo mires, sabrás exactamente qué tienes que escribir." },
      { k: 'quiz', ph: 'prova', q: 'Quina frase fa servir <code>&lt;strong&gt;</code> <b>amb sentit</b>?|¿Qué frase usa <code>&lt;strong&gt;</code> <b>con sentido</b>?',
        opts: ['<code>&lt;strong&gt;Compte: la batedora talla.&lt;/strong&gt;</code>|<code>&lt;strong&gt;Cuidado: la batidora corta.&lt;/strong&gt;</code>', '<code>&lt;strong&gt;</code> a tots els passos, perquè es llegeixin millor|<code>&lt;strong&gt;</code> en todos los pasos, para que se lean mejor', '<code>&lt;strong&gt;</code> al nom de la recepta, perquè sigui més gran|<code>&lt;strong&gt;</code> en el nombre de la receta, para que sea más grande'], a: 0,
        ex: "És un avís important de veritat. Per fer un títol hi ha el <code>&lt;h1&gt;</code>, i si tot va en negreta, res no destaca.|Es un aviso importante de verdad. Para hacer un título está el <code>&lt;h1&gt;</code>, y si todo va en negrita, nada destaca." },
      { k: 'wspot', ph: 'investiga', q: "En Bit ha fet la primera prova de la seva recepta i hi ha un error. <b>Toca la línia.</b>|Bit ha hecho la primera prueba de su receta y hay un error. <b>Toca la línea.</b>",
        get html() { return L('<h2>Ingredients</h2>\n<ul>\n  <li>2 plàtans</li>\n  <li>6 maduixes</li>\n</ol>\n<h2>Passos</h2>', '<h2>Ingredientes</h2>\n<ul>\n  <li>2 plátanos</li>\n  <li>6 fresas</li>\n</ol>\n<h2>Pasos</h2>'); }, bad: 5,
        ex: "La llista s'obre amb <code>&lt;ul&gt;</code> però es tanca amb <code>&lt;/ol&gt;</code>. S'ha de tancar amb la mateixa: <code>&lt;/ul&gt;</code>.|La lista se abre con <code>&lt;ul&gt;</code> pero se cierra con <code>&lt;/ol&gt;</code>. Hay que cerrarla con la misma: <code>&lt;/ul&gt;</code>." },
      { k: 'move', ph: 'pausa', secs: 25, t: "Fes de xef! Renta't les mans (de veritat no, de mentida!), pela un plàtan imaginari, bat-ho tot fent voltes amb el braç durant 5 segons i serveix el batut amb una reverència.|¡Haz de chef! Lávate las manos (de verdad no, ¡de mentira!), pela un plátano imaginario, bátelo todo dando vueltas con el brazo durante 5 segundos y sirve el batido con una reverencia." },
      { k: 'web', ph: 'repte', url: 'receptari.numi/batut',
        q: "Primer fem junts la recepta d'en Bit, a trossos. <b>Tros 1</b>: posa l'idioma i el títol de la pestanya i, dins del <code>&lt;body&gt;</code>, el nom de la recepta (<code>&lt;h1&gt;</code>) i una presentació (<code>&lt;p&gt;</code>).|Primero hacemos juntos la receta de Bit, a trozos. <b>Trozo 1</b>: pon el idioma y el título de la pestaña y, dentro del <code>&lt;body&gt;</code>, el nombre de la receta (<code>&lt;h1&gt;</code>) y una presentación (<code>&lt;p&gt;</code>).",
        html: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n\n</head>\n<body>\n\n</body>\n</html>',
        get snips() { return [L(' lang="ca"', ' lang="es"'), '<title>|</title>', '<h1>|</h1>', '<p>|</p>']; },
        checks: [{ k: 'lang' }, { k: 'title' }, { k: 'text', t: 'h1', min: 3 }, { k: 'text', t: 'p', min: 8 }, { k: 'clean' }],
        sol: { get html() { return L('<!DOCTYPE html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <title>El batut d\'en Bit</title>\n</head>\n<body>\n  <h1>Batut de fruita</h1>\n  <p>Fresc i ràpid.</p>\n</body>\n</html>', '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>El batido de Bit</title>\n</head>\n<body>\n  <h1>Batido de fruta</h1>\n  <p>Fresco y rápido.</p>\n</body>\n</html>'); } },
        hint: "Pots dir-li com vulguis, per exemple «Batut de fruita». El title, al head; l'h1 i el p, al body.|Puedes llamarla como quieras, por ejemplo «Batido de fruta». El title, en el head; el h1 y el p, en el body." },
      { k: 'web', ph: 'repte', url: 'receptari.numi/batut',
        q: "<b>Tros 2</b>: els ingredients. Abans del <code>&lt;/body&gt;</code>, afegeix un títol <code>&lt;h2&gt;</code> «Ingredients» i, a sota, una <code>&lt;ul&gt;</code> amb almenys 4 ingredients.|<b>Trozo 2</b>: los ingredientes. Antes del <code>&lt;/body&gt;</code>, añade un título <code>&lt;h2&gt;</code> «Ingredientes» y, debajo, una <code>&lt;ul&gt;</code> con al menos 4 ingredientes.",
        get html() { return L('<!DOCTYPE html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <title>El batut d\'en Bit</title>\n</head>\n<body>\n  <h1>Batut de fruita</h1>\n  <p>Fresc i ràpid.</p>\n\n</body>\n</html>', '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>El batido de Bit</title>\n</head>\n<body>\n  <h1>Batido de fruta</h1>\n  <p>Fresco y rápido.</p>\n\n</body>\n</html>'); },
        snips: ['<h2>|</h2>', '<ul>\n  <li>|</li>\n</ul>', '<li>|</li>'],
        checks: [{ k: 'tag', t: 'h2' }, { k: 'in', t: 'li', p: 'ul', min: 4, txt: 'La <code>&lt;ul&gt;</code> té almenys 4 ingredients|La <code>&lt;ul&gt;</code> tiene al menos 4 ingredientes' }, { k: 'order', a: 'h2', b: 'ul', txt: 'El títol va abans de la llista|El título va antes de la lista' }, { k: 'clean' }],
        sol: { get html() { return L('<!DOCTYPE html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <title>El batut d\'en Bit</title>\n</head>\n<body>\n  <h1>Batut de fruita</h1>\n  <p>Fresc i ràpid.</p>\n  <h2>Ingredients</h2>\n  <ul>\n    <li>2 plàtans</li>\n    <li>6 maduixes</li>\n    <li>1 got de llet</li>\n    <li>1 cullerada de mel</li>\n  </ul>\n</body>\n</html>', '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>El batido de Bit</title>\n</head>\n<body>\n  <h1>Batido de fruta</h1>\n  <p>Fresco y rápido.</p>\n  <h2>Ingredientes</h2>\n  <ul>\n    <li>2 plátanos</li>\n    <li>6 fresas</li>\n    <li>1 vaso de leche</li>\n    <li>1 cucharada de miel</li>\n  </ul>\n</body>\n</html>'); } },
        hint: "Escriu-ho a la línia buida que hi ha abans del <code>&lt;/body&gt;</code>: primer el h2 i després la llista.|Escríbelo en la línea vacía que hay antes del <code>&lt;/body&gt;</code>: primero el h2 y después la lista." },
      { k: 'web', ph: 'repte', url: 'receptari.numi/batut',
        q: "<b>Tros 3</b>: els passos. Afegeix un altre <code>&lt;h2&gt;</code> «Passos» i una <code>&lt;ol&gt;</code> amb almenys 4 passos. En un dels passos, posa un avís important amb <code>&lt;strong&gt;</code>.|<b>Trozo 3</b>: los pasos. Añade otro <code>&lt;h2&gt;</code> «Pasos» y una <code>&lt;ol&gt;</code> con al menos 4 pasos. En uno de los pasos, pon un aviso importante con <code>&lt;strong&gt;</code>.",
        get html() { return L('<!DOCTYPE html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <title>El batut d\'en Bit</title>\n</head>\n<body>\n  <h1>Batut de fruita</h1>\n  <p>Fresc i ràpid.</p>\n  <h2>Ingredients</h2>\n  <ul>\n    <li>2 plàtans</li>\n    <li>6 maduixes</li>\n    <li>1 got de llet</li>\n    <li>1 cullerada de mel</li>\n  </ul>\n\n</body>\n</html>', '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>El batido de Bit</title>\n</head>\n<body>\n  <h1>Batido de fruta</h1>\n  <p>Fresco y rápido.</p>\n  <h2>Ingredientes</h2>\n  <ul>\n    <li>2 plátanos</li>\n    <li>6 fresas</li>\n    <li>1 vaso de leche</li>\n    <li>1 cucharada de miel</li>\n  </ul>\n\n</body>\n</html>'); },
        snips: ['<h2>|</h2>', '<ol>\n  <li>|</li>\n</ol>', '<li>|</li>', '<strong>|</strong>'],
        checks: [{ k: 'tag', t: 'h2', min: 2 }, { k: 'in', t: 'li', p: 'ol', min: 4, txt: 'La <code>&lt;ol&gt;</code> té almenys 4 passos|La <code>&lt;ol&gt;</code> tiene al menos 4 pasos' }, { k: 'in', t: 'strong', p: 'ol', txt: 'Un pas té un avís amb <code>&lt;strong&gt;</code>|Un paso tiene un aviso con <code>&lt;strong&gt;</code>' }, { k: 'clean' }],
        sol: { get html() { return L('<!DOCTYPE html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <title>El batut d\'en Bit</title>\n</head>\n<body>\n  <h1>Batut de fruita</h1>\n  <p>Fresc i ràpid.</p>\n  <h2>Ingredients</h2>\n  <ul>\n    <li>2 plàtans</li>\n    <li>6 maduixes</li>\n    <li>1 got de llet</li>\n    <li>1 cullerada de mel</li>\n  </ul>\n  <h2>Passos</h2>\n  <ol>\n    <li>Pela els plàtans.</li>\n    <li>Renta les maduixes i treu-los les fulles.</li>\n    <li>Posa-ho tot al got de la batedora.</li>\n    <li>Bat-ho un minut. <strong>Compte: la batedora talla!</strong></li>\n  </ol>\n</body>\n</html>', '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>El batido de Bit</title>\n</head>\n<body>\n  <h1>Batido de fruta</h1>\n  <p>Fresco y rápido.</p>\n  <h2>Ingredientes</h2>\n  <ul>\n    <li>2 plátanos</li>\n    <li>6 fresas</li>\n    <li>1 vaso de leche</li>\n    <li>1 cucharada de miel</li>\n  </ul>\n  <h2>Pasos</h2>\n  <ol>\n    <li>Pela los plátanos.</li>\n    <li>Lava las fresas y quítales las hojas.</li>\n    <li>Ponlo todo en el vaso de la batidora.</li>\n    <li>Bátelo un minuto. <strong>¡Cuidado: la batidora corta!</strong></li>\n  </ol>\n</body>\n</html>'); } },
        hint: "El <code>&lt;strong&gt;</code> va dins d'un <code>&lt;li&gt;</code>, abans del <code>&lt;/li&gt;</code>.|El <code>&lt;strong&gt;</code> va dentro de un <code>&lt;li&gt;</code>, antes del <code>&lt;/li&gt;</code>." },
      { k: 'story', ph: 'crea', who: 'numi', title: 'Ara, la teva!|¡Ahora, la tuya!',
        t: "Ja saps fer-ho. Fes la teva recepta seguint l'esbós i, quan totes les comprovacions estiguin en verd, revisa-la com un/a professional:|Ya sabes hacerlo. Haz tu receta siguiendo el boceto y, cuando todas las comprobaciones estén en verde, revísala como un/a profesional:",
        box: "<ol><li>Llegeix-la en veu alta: hi ha alguna falta?</li><li>Llegeix només els títols: s'entén l'esquema?</li><li>Mira-la amb el botó del mòbil 📱 i amb el de l'ordinador 💻.</li><li>Demana a un company/a que la llegeixi: entén com es fa?</li></ol>|<ol><li>Léela en voz alta: ¿hay alguna falta?</li><li>Lee solo los títulos: ¿se entiende el esquema?</li><li>Mírala con el botón del móvil 📱 y con el del ordenador 💻.</li><li>Pide a un compañero/a que la lea: ¿entiende cómo se hace?</li></ol>" },
      { k: 'wcreate', ph: 'crea', url: 'receptari.numi/la-meva-recepta', name: 'La meva recepta|Mi receta',
        q: "<b>Projecte final de la unitat!</b> Escriu la teva recepta per al receptari del poble. La plantilla té comentaris que et diuen què va a cada lloc.|<b>¡Proyecto final de la unidad!</b> Escribe tu receta para el recetario del pueblo. La plantilla tiene comentarios que te dicen qué va en cada sitio.",
        crit: ["L'esquelet complet, amb l'idioma i el title de la pestanya|El esqueleto completo, con el idioma y el title de la pestaña", 'Un <code>&lt;h1&gt;</code> amb el nom i almenys dues seccions <code>&lt;h2&gt;</code>|Un <code>&lt;h1&gt;</code> con el nombre y al menos dos secciones <code>&lt;h2&gt;</code>', 'Els ingredients en una <code>&lt;ul&gt;</code> i els passos en una <code>&lt;ol&gt;</code> (almenys 3 de cada)|Los ingredientes en una <code>&lt;ul&gt;</code> y los pasos en una <code>&lt;ol&gt;</code> (al menos 3 de cada)', 'Un avís amb <code>&lt;strong&gt;</code>, dos paràgrafs i tot ben tancat|Un aviso con <code>&lt;strong&gt;</code>, dos párrafos y todo bien cerrado'],
        get html() { return L('<!DOCTYPE html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <title></title>\n</head>\n<body>\n  <!-- 1. Nom: h1 -->\n\n  <!-- 2. Presentació: p -->\n\n  <!-- 3. Ingredients: h2+ul -->\n\n  <!-- 4. Passos: h2+ol -->\n\n  <!-- 5. Consell final: p -->\n\n</body>\n</html>', '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title></title>\n</head>\n<body>\n  <!-- 1. Nombre: h1 -->\n\n  <!-- 2. Presentación: p -->\n\n  <!-- 3. Ingredientes: h2+ul -->\n\n  <!-- 4. Pasos: h2+ol -->\n\n  <!-- 5. Consejo final: p -->\n\n</body>\n</html>'); },
        snips: ['<h1>|</h1>', '<p>|</p>', '<h2>|</h2>', '<ul>\n  <li>|</li>\n</ul>', '<ol>\n  <li>|</li>\n</ol>', '<li>|</li>', '<strong>|</strong>', '<em>|</em>'],
        checks: [{ k: 'lang' }, { k: 'title' }, { k: 'tag', t: 'h1', max: 1, txt: 'Un sol <code>&lt;h1&gt;</code> amb el nom|Un solo <code>&lt;h1&gt;</code> con el nombre' }, { k: 'tag', t: 'h2', min: 2 }, { k: 'in', t: 'li', p: 'ul', min: 3, txt: 'Almenys 3 ingredients a la <code>&lt;ul&gt;</code>|Al menos 3 ingredientes en la <code>&lt;ul&gt;</code>' }, { k: 'in', t: 'li', p: 'ol', min: 3, txt: 'Almenys 3 passos a la <code>&lt;ol&gt;</code>|Al menos 3 pasos en la <code>&lt;ol&gt;</code>' }, { k: 'tag', t: 'p', min: 2 }, { k: 'tag', t: 'strong', txt: 'Un avís important amb <code>&lt;strong&gt;</code>|Un aviso importante con <code>&lt;strong&gt;</code>' }, { k: 'order', a: 'h1', b: 'h2', txt: 'Els títols van en ordre|Los títulos van en orden' }, { k: 'clean' }],
        sol: { get html() { return L('<!DOCTYPE html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <title>Truita de patates</title>\n</head>\n<body>\n  <!-- 1. Nom: h1 -->\n  <h1>Truita de patates</h1>\n  <!-- 2. Presentació: p -->\n  <p>La recepta de casa, per a 4 persones.</p>\n  <!-- 3. Ingredients: h2+ul -->\n  <h2>Ingredients</h2>\n  <ul>\n    <li>4 patates</li>\n    <li>5 ous</li>\n    <li>Oli i sal</li>\n  </ul>\n  <!-- 4. Passos: h2+ol -->\n  <h2>Passos</h2>\n  <ol>\n    <li>Pela i talla les patates.</li>\n    <li>Fregeix-les amb oli. <strong>Amb un adult: l\'oli crema!</strong></li>\n    <li>Bat els ous i barreja-ho tot.</li>\n    <li>Cou la truita per les dues bandes.</li>\n  </ol>\n  <!-- 5. Consell final: p -->\n  <p>És <em>molt</em> més bona l\'endemà.</p>\n</body>\n</html>', '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>Tortilla de patatas</title>\n</head>\n<body>\n  <!-- 1. Nombre: h1 -->\n  <h1>Tortilla de patatas</h1>\n  <!-- 2. Presentación: p -->\n  <p>La receta de casa, para 4 personas.</p>\n  <!-- 3. Ingredientes: h2+ul -->\n  <h2>Ingredientes</h2>\n  <ul>\n    <li>4 patatas</li>\n    <li>5 huevos</li>\n    <li>Aceite y sal</li>\n  </ul>\n  <!-- 4. Pasos: h2+ol -->\n  <h2>Pasos</h2>\n  <ol>\n    <li>Pela y corta las patatas.</li>\n    <li>Fríelas con aceite. <strong>Con un adulto: ¡el aceite quema!</strong></li>\n    <li>Bate los huevos y mézclalo todo.</li>\n    <li>Cuaja la tortilla por los dos lados.</li>\n  </ol>\n  <!-- 5. Consejo final: p -->\n  <p>Está <em>mucho</em> más buena al día siguiente.</p>\n</body>\n</html>'); } },
        hint: "Segueix els comentaris de la plantilla, d'un en un, i mira com es van posant en verd les comprovacions.|Sigue los comentarios de la plantilla, de uno en uno, y mira cómo se van poniendo en verde las comprobaciones." },
      { k: 'quiz', ph: 'tanca', q: 'Què és el primer que fas abans d\'escriure el codi d\'una pàgina?|¿Qué es lo primero que haces antes de escribir el código de una página?',
        opts: ["Un esbós: quines parts té i quina etiqueta li toca a cada una|Un boceto: qué partes tiene y qué etiqueta le toca a cada una", 'Escriure etiquetes a veure què surt|Escribir etiquetas a ver qué sale', 'Triar els colors|Elegir los colores'], a: 0 },
      { k: 'quiz', ph: 'tanca', q: 'Un comentari <code>&lt;!-- … --&gt;</code>, surt a la pàgina?|Un comentario <code>&lt;!-- … --&gt;</code>, ¿sale en la página?',
        opts: ['No: és una nota per a qui llegeix el codi|No: es una nota para quien lee el código', 'Sí, en petit|Sí, en pequeño', 'Només al mòbil|Solo en el móvil'], a: 0 },
      { k: 'feel', ph: 'tanca' }
    ] }
] };

/* ── unitat 3 ── */
/* ===== Numi Tech · Tech Web · Unitat 3 «Imatges i enllaços» =====
   L'Animalari de l'illa: el club de naturalistes estrena una web amb una fitxa per a cada animal. L'alumne/a hi posa
   imatges (img, src, alt i per què l'alt importa, width), connecta pàgines amb enllaços (a, href, enllaços interns amb
   #id), aprèn de qui són les imatges i els textos (drets d'autor, citar les fonts, figure i figcaption) i acaba fent la
   fitxa completa d'un animal. Construeix sobre les unitats 1 (com arriba una pàgina, servidor, URL) i 2 (etiquetes,
   títols, paràgrafs, llistes, strong i em). Encara no hi ha CSS (unitat 4). Material propi de Numi.
   El codi dels reptes i de les demos es veu en la llengua de l'alumne/a: C('codi en català', 'código en castellano')
   es converteix en una propietat que dona el codi de la llengua actual (el motor el llegeix com un text normal). */
Object.assign(TBADGE, {
  w_alt: { id: 'w_alt', ico: '👁', n: 'Ulls per a tothom|Ojos para todos', d: "Has posat imatges amb un alt que les descriu per a qui no les pot veure.|Has puesto imágenes con un alt que las describe para quien no puede verlas." },
  w_link: { id: 'w_link', ico: '🔗', n: "Teixidor/a d'enllaços|Tejedor/a de enlaces", d: "Has connectat pàgines amb enllaços i has fet salts dins d'una mateixa pàgina.|Has conectado páginas con enlaces y has hecho saltos dentro de una misma página." },
  w_font: { id: 'w_font', ico: '📚', n: 'Detectiu/iva de fonts|Detective de fuentes', d: "Respectes la feina dels altres: dius de qui són les imatges i d'on has tret la informació.|Respetas el trabajo de los demás: dices de quién son las imágenes y de dónde has sacado la información." },
  w_fitxa: { id: 'w_fitxa', ico: '🦉', n: 'Naturalista digital|Naturalista digital', d: "Projecte acabat: la fitxa d'un animal amb imatge, llegenda, dades, índex i fonts.|Proyecto terminado: la ficha de un animal con imagen, leyenda, datos, índice y fuentes." }
});
COURSE_UNITS[3] = (() => {
  // ---------- codi en dues llengües ----------
  const C = (ca, es) => ({ __bi: [ca, es] });
  const bi = o => { if (Array.isArray(o)) { o.forEach(bi); return o; }
    if (o && typeof o === 'object') for (const k of Object.keys(o)) { const v = o[k];
      if (v && v.__bi) { const [ca, es] = v.__bi; Object.defineProperty(o, k, { get: () => (typeof L === 'function' ? L(ca, es) : ca), enumerable: true, configurable: true }); }
      // a les comprovacions, «t» és el nom d'una etiqueta (h1, img…), no un text per traduir: el validador no l'ha de llegir com a text
      else if (k === 'checks' && Array.isArray(v)) v.forEach(c => { if (c && c.t != null) Object.defineProperty(c, 't', { value: c.t, enumerable: false, writable: true, configurable: true }); });
      else bi(v); }
    return o; };
  const IM = 'img/tech/web/';
  // comprovacions que es repeteixen
  const ALT = (min = 1) => ({ k: 'attr', t: 'img', a: 'alt', v: '/\\S.{6,}\\S/', min, txt: min > 1 ? `Les ${min} imatges tenen un <code>alt</code> que les descriu|Las ${min} imágenes tienen un <code>alt</code> que las describe` : "La imatge té un <code>alt</code> que la descriu (almenys 8 lletres)|La imagen tiene un <code>alt</code> que la describe (al menos 8 letras)" });
  const CLEAN = { k: 'clean', txt: 'Totes les etiquetes estan ben tancades|Todas las etiquetas están bien cerradas' };
  const SN_IMG = ['<img src="|" alt="">', 'width="150"'];
  const LIST = C(`<!-- Imatges que pots fer servir (carpeta img/tech/web/):
     balena.svg drac.svg gat.svg gos.svg guineu.svg lloro.svg
     ocell.svg papallona.svg peix.svg tortuga.svg
     I també (carpeta img/ic/): owl.webp (mussol) lion.webp (lleó)
     octopus.webp (pop) rabbit.webp (conill) eagle.webp (àliga) -->`, `<!-- Imágenes que puedes usar (carpeta img/tech/web/):
     balena.svg (ballena) drac.svg (dragón) gat.svg (gato) gos.svg (perro)
     guineu.svg (zorro) lloro.svg (loro) ocell.svg (pájaro)
     papallona.svg (mariposa) peix.svg (pez) tortuga.svg (tortuga)
     Y también (carpeta img/ic/): owl.webp (búho) lion.webp (león)
     octopus.webp (pulpo) rabbit.webp (conejo) eagle.webp (águila) -->`);

  // ---------- la fitxa del lloro (solució de referència de la sessió 4) ----------
  const LLORO = C(`<h1>El lloro</h1>
<p><a href="#on-viu">On viu</a> · <a href="#menja">Què menja</a> · <a href="#fonts">Fonts</a></p>
<figure>
  <img src="img/tech/web/lloro.svg" alt="Un lloro vermell, verd i blau posat en una branca" width="200">
  <figcaption>Un lloro a la selva. Dibuix: Numi.</figcaption>
</figure>
<ul>
  <li><strong>Menja:</strong> fruita i llavors</li>
  <li><strong>Viu:</strong> als boscos càlids</li>
  <li><strong>Curiositat:</strong> pot imitar sons</li>
</ul>
<h2 id="on-viu">On viu</h2>
<p>La majoria de lloros viuen en boscos de llocs càlids, en grups que fan molt de soroll.</p>
<h2 id="menja">Què menja</h2>
<p>Menja fruita i llavors, i amb el bec fort pot obrir closques dures.</p>
<h2 id="fonts">Fonts</h2>
<ul>
  <li><a href="https://exemple.numi/lloros">Club de Naturalistes: Els lloros</a> (consultat el 3 d'octubre)</li>
</ul>`, `<h1>El loro</h1>
<p><a href="#donde-vive">Dónde vive</a> · <a href="#come">Qué come</a> · <a href="#fuentes">Fuentes</a></p>
<figure>
  <img src="img/tech/web/lloro.svg" alt="Un loro rojo, verde y azul posado en una rama" width="200">
  <figcaption>Un loro en la selva. Dibujo: Numi.</figcaption>
</figure>
<ul>
  <li><strong>Come:</strong> fruta y semillas</li>
  <li><strong>Vive:</strong> en bosques cálidos</li>
  <li><strong>Curiosidad:</strong> puede imitar sonidos</li>
</ul>
<h2 id="donde-vive">Dónde vive</h2>
<p>La mayoría de loros viven en bosques de lugares cálidos, en grupos que hacen mucho ruido.</p>
<h2 id="come">Qué come</h2>
<p>Come fruta y semillas, y con el pico fuerte puede abrir cáscaras duras.</p>
<h2 id="fuentes">Fuentes</h2>
<ul>
  <li><a href="https://exemple.numi/loros">Club de Naturalistas: Los loros</a> (consultado el 3 de octubre)</li>
</ul>`);

  return bi({ t: 'Imatges i enllaços|Imágenes y enlaces', d: 'Connectar pàgines|Conectar páginas', color: '#F08A24', s: [

    /* =========================== Sessió 1 · Imatges =========================== */
    { id: 'w3-1', t: 'Imatges|Imágenes', min: 45, badge: 'w_alt',
      learn: ["Les imatges es posen amb <code>&lt;img&gt;</code>: <code>src</code> diu on és el fitxer i l'etiqueta no es tanca.|Las imágenes se ponen con <code>&lt;img&gt;</code>: <code>src</code> dice dónde está el archivo y la etiqueta no se cierra.",
        "L'<code>alt</code> descriu la imatge per a qui no la pot veure: lectors de pantalla, connexions lentes i cercadors.|El <code>alt</code> describe la imagen para quien no puede verla: lectores de pantalla, conexiones lentas y buscadores.",
        "Amb <code>width</code> dius l'amplada en píxels i l'alçada s'ajusta sola.|Con <code>width</code> dices el ancho en píxeles y la altura se ajusta sola."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Recordes la unitat 2? Quin paràgraf està ben escrit?|¿Recuerdas la unidad 2? ¿Qué párrafo está bien escrito?',
          opts: ['<code>&lt;p&gt;Hola!&lt;/p&gt;</code>|<code>&lt;p&gt;¡Hola!&lt;/p&gt;</code>', '<code>&lt;p&gt;Hola!&lt;p&gt;</code>|<code>&lt;p&gt;¡Hola!&lt;p&gt;</code>', '<code>p&gt;Hola!&lt;/p</code>|<code>p&gt;¡Hola!&lt;/p</code>'], a: 0,
          ex: "L'etiqueta s'obre amb <code>&lt;p&gt;</code> i es tanca amb <code>&lt;/p&gt;</code>, amb la barra.|La etiqueta se abre con <code>&lt;p&gt;</code> y se cierra con <code>&lt;/p&gt;</code>, con la barra." },
        { k: 'story', ph: 'missio', who: 'both', scene: 'illa', title: "L'Animalari de l'illa|El Animalario de la isla",
          t: "El club de naturalistes de l'illa vol estrenar una web: <b>l'Animalari</b>, amb una fitxa per a cada animal. De moment, les pàgines són només text… i una fitxa d'animals sense imatges no la mira ningú! En aquesta unitat hi posarem <b>imatges</b> i <b>enllaços</b>, i ho farem bé: pensant en <b>totes</b> les persones que la visitaran.|El club de naturalistas de la isla quiere estrenar una web: <b>el Animalario</b>, con una ficha para cada animal. De momento, las páginas son solo texto… ¡y una ficha de animales sin imágenes no la mira nadie! En esta unidad pondremos <b>imágenes</b> y <b>enlaces</b>, y lo haremos bien: pensando en <b>todas</b> las personas que la visitarán." },
        { k: 'story', ph: 'missio', who: 'bit', mood: 'happy', t: "BIP! Un secret: jo no veig les imatges com tu. Jo llegeixo el <b>codi</b>. Si una imatge no diu què hi ha, per a mi és un forat buit. I no soc l'únic: hi ha persones que naveguen sense veure la pantalla. Avui aprendràs a fer imatges que <b>tothom</b> pugui entendre.|¡BIP! Un secreto: yo no veo las imágenes como tú. Yo leo el <b>código</b>. Si una imagen no dice qué hay, para mí es un agujero vacío. Y no soy el único: hay personas que navegan sin ver la pantalla. Hoy aprenderás a hacer imágenes que <b>todo el mundo</b> pueda entender." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Atributs|Atributos', t: 'Una etiqueta amb informació extra|Una etiqueta con información extra', anim: 'w3attr',
            x: "Fins ara les etiquetes només tenien text a dins. Algunes necessiten <b>dades extra</b>: per exemple, quina imatge cal posar. Aquestes dades són els <span class='hl'>atributs</span>, i s'escriuen dins de l'etiqueta d'obertura així: <code>nom=\"valor\"</code>.|Hasta ahora las etiquetas solo tenían texto dentro. Algunas necesitan <b>datos extra</b>: por ejemplo, qué imagen hay que poner. Estos datos son los <span class='hl'>atributos</span>, y se escriben dentro de la etiqueta de apertura así: <code>nombre=\"valor\"</code>.",
            tip: "El valor va sempre entre cometes rectes <code>\" \"</code>, i entre un atribut i el següent hi ha un espai.|El valor va siempre entre comillas rectas <code>\" \"</code>, y entre un atributo y el siguiente hay un espacio." },
          { k: '&lt;img&gt;', t: "L'etiqueta de les imatges|La etiqueta de las imágenes",
            media: { k: 'web', html: C(`<h1>La guineu</h1>
<img src="img/tech/web/guineu.svg" alt="Una guineu taronja asseguda" width="160">
<p>Té la cua molt peluda.</p>`, `<h1>El zorro</h1>
<img src="img/tech/web/guineu.svg" alt="Un zorro naranja sentado" width="160">
<p>Tiene la cola muy peluda.</p>`) },
            x: "<code>&lt;img&gt;</code> posa una imatge. L'atribut <code>src</code> (de l'anglès <i>source</i>, «origen») diu <b>on és el fitxer</b>: la carpeta i el nom. Fixa't que <code>&lt;img&gt;</code> <b>no es tanca</b>: és una etiqueta buida, perquè no té res a dins.|<code>&lt;img&gt;</code> pone una imagen. El atributo <code>src</code> (del inglés <i>source</i>, «origen») dice <b>dónde está el archivo</b>: la carpeta y el nombre. Fíjate en que <code>&lt;img&gt;</code> <b>no se cierra</b>: es una etiqueta vacía, porque no tiene nada dentro." },
          { k: 'src|src', t: 'El navegador va a buscar la imatge|El navegador va a buscar la imagen', anim: 'w3src',
            x: "La imatge no és dins de l'HTML: és un <b>fitxer a part</b>. Quan el navegador troba <code>src</code>, demana aquest fitxer al servidor (com a la unitat 1) i el dibuixa a la pàgina. Si la carpeta o el nom estan malament, no el troba i la imatge surt trencada.|La imagen no está dentro del HTML: es un <b>archivo aparte</b>. Cuando el navegador encuentra <code>src</code>, pide ese archivo al servidor (como en la unidad 1) y lo dibuja en la página. Si la carpeta o el nombre están mal, no lo encuentra y la imagen sale rota.",
            tip: "Compte amb les lletres: per a molts servidors, <code>Gat.svg</code> i <code>gat.svg</code> són fitxers diferents.|Cuidado con las letras: para muchos servidores, <code>Gat.svg</code> y <code>gat.svg</code> son archivos diferentes." },
          { k: 'alt|alt', t: "Per què l'alt és tan important|Por qué el alt es tan importante", anim: 'w3alt',
            x: "L'atribut <code>alt</code> és un text que <b>descriu la imatge</b>. El llegeixen en veu alta els <b>lectors de pantalla</b> (programes que fan servir persones cegues o que hi veuen poc), surt quan la imatge no es pot carregar i ajuda els cercadors a entendre la pàgina. Si una imatge és només un adorn, es deixa buit: <code>alt=\"\"</code>.|El atributo <code>alt</code> es un texto que <b>describe la imagen</b>. Lo leen en voz alta los <b>lectores de pantalla</b> (programas que usan personas ciegas o que ven poco), sale cuando la imagen no se puede cargar y ayuda a los buscadores a entender la página. Si una imagen es solo un adorno, se deja vacío: <code>alt=\"\"</code>.",
            bad: "<code>alt=\"imatge\"</code> o <code>alt=\"gat.svg\"</code>: no expliquen res.|<code>alt=\"imagen\"</code> o <code>alt=\"gato.svg\"</code>: no explican nada.", good: "<code>alt=\"Un gat taronja estirat al sol\"</code>: diu què es veu.|<code>alt=\"Un gato naranja tumbado al sol\"</code>: dice qué se ve." },
          { k: 'width|width', t: 'La mida de la imatge|El tamaño de la imagen',
            media: { k: 'web', html: C(`<img src="img/tech/web/tortuga.svg" alt="Una tortuga petita" width="60">
<img src="img/tech/web/tortuga.svg" alt="Una tortuga gran" width="150">`, `<img src="img/tech/web/tortuga.svg" alt="Una tortuga pequeña" width="60">
<img src="img/tech/web/tortuga.svg" alt="Una tortuga grande" width="150">`) },
            x: "Amb l'atribut <code>width</code> (amplada) dius quants <b>píxels</b> d'ample fa la imatge. Posa només l'amplada: l'alçada s'ajusta sola i el dibuix no queda aixafat.|Con el atributo <code>width</code> (ancho) dices cuántos <b>píxeles</b> de ancho mide la imagen. Pon solo el ancho: la altura se ajusta sola y el dibujo no queda aplastado.",
            tip: "Un píxel és un puntet de la pantalla. Una pantalla de mòbil fa uns 400 píxels d'ample.|Un píxel es un puntito de la pantalla. Una pantalla de móvil mide unos 400 píxeles de ancho." }
        ] },
        { k: 'seq', ph: 'mans', q: "Què fa el navegador quan troba una imatge? <b>Ordena els passos.</b>|¿Qué hace el navegador cuando encuentra una imagen? <b>Ordena los pasos.</b>",
          items: ["Llegeix l'HTML de dalt a baix|Lee el HTML de arriba abajo", "Troba l'etiqueta <code>&lt;img&gt;</code>|Encuentra la etiqueta <code>&lt;img&gt;</code>", "Mira el <code>src</code> per saber quin fitxer és|Mira el <code>src</code> para saber qué archivo es",
            'Demana el fitxer al servidor|Pide el archivo al servidor', 'Dibuixa la imatge a la pàgina|Dibuja la imagen en la página'],
          ex: "Per això, si el <code>src</code> està malament, el navegador demana un fitxer que no existeix i no pot dibuixar res.|Por eso, si el <code>src</code> está mal, el navegador pide un archivo que no existe y no puede dibujar nada." },
        { k: 'unplug', ph: 'mans', ico: '👁', title: "L'alt en veu alta|El alt en voz alta", t: "Amb algú de casa (o amb un company/a):|Con alguien de casa (o con un compañero/a):",
          steps: ["Una persona tria una foto o un dibuix (d'un llibre, de la nevera, del mòbil) i <b>no l'ensenya</b>.|Una persona elige una foto o un dibujo (de un libro, de la nevera, del móvil) y <b>no lo enseña</b>.",
            "N'escriu un <b>alt</b>: una sola frase que expliqui què s'hi veu.|Escribe un <b>alt</b>: una sola frase que explique qué se ve.",
            "L'altra persona llegeix la frase i dibuixa el que s'imagina.|La otra persona lee la frase y dibuja lo que se imagina.",
            "Compareu el dibuix amb la imatge: què faltava a l'alt? Milloreu-lo i canvieu els papers.|Comparad el dibujo con la imagen: ¿qué faltaba en el alt? Mejoradlo y cambiad los papeles."],
          tip: "Així se sent qui fa servir un lector de pantalla: només té les paraules de l'alt.|Así se siente quien usa un lector de pantalla: solo tiene las palabras del alt." },
        { k: 'wquiz', ph: 'prova', q: 'Quina vista prèvia fa aquest codi?|¿Qué vista previa hace este código?',
          code: { html: C(`<h3>El peix</h3>
<img src="img/tech/web/peix.svg" alt="Un peix taronja" width="70">
<p>Viu al mar.</p>`, `<h3>El pez</h3>
<img src="img/tech/web/peix.svg" alt="Un pez naranja" width="70">
<p>Vive en el mar.</p>`) },
          opts: [{ html: C('<h3>El peix</h3><img src="img/tech/web/peix.svg" alt="" width="70"><p>Viu al mar.</p>', '<h3>El pez</h3><img src="img/tech/web/peix.svg" alt="" width="70"><p>Vive en el mar.</p>') },
            { html: C('<img src="img/tech/web/peix.svg" alt="" width="70"><h3>El peix</h3><p>Viu al mar.</p>', '<img src="img/tech/web/peix.svg" alt="" width="70"><h3>El pez</h3><p>Vive en el mar.</p>') },
            { html: C('<h3>El peix</h3><img src="img/tech/web/peix.svg" alt="" width="20"><p>Viu al mar.</p>', '<h3>El pez</h3><img src="img/tech/web/peix.svg" alt="" width="20"><p>Vive en el mar.</p>') }], a: 0,
          ex: "L'HTML es dibuixa en ordre: primer el títol, després la imatge (de 70 píxels d'ample, no de 20) i després el paràgraf.|El HTML se dibuja en orden: primero el título, después la imagen (de 70 píxeles de ancho, no de 20) y después el párrafo." },
        { k: 'wspot', ph: 'investiga', q: "Una de les dues imatges no surt. <b>Toca la línia amb l'error.</b>|Una de las dos imágenes no sale. <b>Toca la línea con el error.</b>",
          html: C(`<h1>Ocells de l'illa</h1>
<img src="img/tech/web/lloro.svg" alt="Un lloro vermell en una branca" width="110">
<p>Els lloros poden imitar sons.</p>
<img src="img/tech/web/ocel.svg" alt="Un ocell blau" width="110">
<p>Aquest ocell és el seu veí.</p>`, `<h1>Pájaros de la isla</h1>
<img src="img/tech/web/lloro.svg" alt="Un loro rojo en una rama" width="110">
<p>Los loros pueden imitar sonidos.</p>
<img src="img/tech/web/ocel.svg" alt="Un pájaro azul" width="110">
<p>Este pájaro es su vecino.</p>`), bad: 4,
          ex: "El fitxer es diu <code>ocell.svg</code>, amb dues eles. Amb <code>ocel.svg</code> el navegador no el troba i només mostra l'alt.|El archivo se llama <code>ocell.svg</code>, con dos eles. Con <code>ocel.svg</code> el navegador no lo encuentra y solo muestra el alt." },
        { k: 'quiz', ph: 'investiga', q: "Aquesta imatge va a la fitxa de la tortuga. Quin és el <b>millor alt</b>?|Esta imagen va en la ficha de la tortuga. ¿Cuál es el <b>mejor alt</b>?", art: `<img src="${IM}tortuga.svg" alt="" width="150">`,
          opts: ['«Una tortuga verda caminant, amb dibuixos a la closca»|«Una tortuga verde caminando, con dibujos en el caparazón»', '«imatge»|«imagen»', '«tortuga.svg»|«tortuga.svg»', '«Mira quina imatge més xula!»|«¡Mira qué imagen más chula!»'], a: 0,
          ex: "Un bon alt diu <b>què es veu</b>, curt i clar. «imatge» o el nom del fitxer no ajuden gens a qui no la pot veure.|Un buen alt dice <b>qué se ve</b>, corto y claro. «imagen» o el nombre del archivo no ayudan nada a quien no puede verla." },
        { k: 'move', ph: 'pausa', secs: 30, t: "Pausa d'animals! Estira't amunt com una <b>girafa</b>, fes-te petit/a com una <b>tortuga</b> dins la closca i obre els braços com un <b>ocell</b>. Repeteix-ho tres vegades, cada cop més a poc a poc.|¡Pausa de animales! Estírate hacia arriba como una <b>jirafa</b>, hazte pequeño/a como una <b>tortuga</b> dentro del caparazón y abre los brazos como un <b>pájaro</b>. Repítelo tres veces, cada vez más despacio." },
        { k: 'web', ph: 'repte', url: 'animalari.numi/tortuga.html', q: "La fitxa de la tortuga ja té la imatge, però l'<code>alt</code> és buit. <b>Escriu-hi una descripció</b> del dibuix.|La ficha de la tortuga ya tiene la imagen, pero el <code>alt</code> está vacío. <b>Escribe una descripción</b> del dibujo.",
          html: C(`<h1>La tortuga</h1>
<img src="img/tech/web/tortuga.svg" alt="" width="180">
<p>Porta la closca a sobre tota la vida.</p>`, `<h1>La tortuga</h1>
<img src="img/tech/web/tortuga.svg" alt="" width="180">
<p>Lleva el caparazón encima toda la vida.</p>`),
          checks: [ALT(), { k: 'attr', t: 'img', a: 'src', v: '/tortuga\\.svg$/', txt: 'La imatge continua sent la tortuga|La imagen sigue siendo la tortuga' }, CLEAN],
          sol: { html: C(`<h1>La tortuga</h1>
<img src="img/tech/web/tortuga.svg" alt="Una tortuga verda caminant" width="180">
<p>Porta la closca a sobre tota la vida.</p>`, `<h1>La tortuga</h1>
<img src="img/tech/web/tortuga.svg" alt="Una tortuga verde caminando" width="180">
<p>Lleva el caparazón encima toda la vida.</p>`) },
          hint: "Escriu entre les dues cometes de <code>alt=\"\"</code> què es veu: quin animal és, de quin color, què fa…|Escribe entre las dos comillas de <code>alt=\"\"</code> qué se ve: qué animal es, de qué color, qué hace…" },
        { k: 'web', ph: 'repte', url: 'animalari.numi/guineu.html', q: "Ara tu sol/a: <b>sota el títol</b>, posa la imatge de la guineu (<code>img/tech/web/guineu.svg</code>) amb un bon <code>alt</code> i <b>200 píxels</b> d'amplada.|Ahora tú solo/a: <b>debajo del título</b>, pon la imagen del zorro (<code>img/tech/web/guineu.svg</code>) con un buen <code>alt</code> y <b>200 píxeles</b> de ancho.",
          html: C(`<h1>La guineu</h1>

<p>La guineu té la cua molt peluda.</p>`, `<h1>El zorro</h1>

<p>El zorro tiene la cola muy peluda.</p>`),
          checks: [{ k: 'tag', t: 'img' }, { k: 'attr', t: 'img', a: 'src', v: '/^img\\/tech\\/web\\/guineu\\.svg$/', txt: '<code>src</code> porta a <code>img/tech/web/guineu.svg</code>|<code>src</code> lleva a <code>img/tech/web/guineu.svg</code>' }, ALT(),
            { k: 'attr', t: 'img', a: 'width', v: '200', txt: 'La imatge fa 200 píxels d\'ample|La imagen mide 200 píxeles de ancho' }, { k: 'order', a: 'h1', b: 'img', txt: 'La imatge va després del títol|La imagen va después del título' }, { k: 'order', a: 'img', b: 'p', txt: 'La imatge va abans del paràgraf|La imagen va antes del párrafo' }],
          snips: SN_IMG,
          sol: { html: C(`<h1>La guineu</h1>
<img src="img/tech/web/guineu.svg" alt="Una guineu taronja asseguda" width="200">
<p>La guineu té la cua molt peluda.</p>`, `<h1>El zorro</h1>
<img src="img/tech/web/guineu.svg" alt="Un zorro naranja sentado" width="200">
<p>El zorro tiene la cola muy peluda.</p>`) },
          hint: "Escriu la imatge a la línia buida: <code>&lt;img src=\"…\" alt=\"…\" width=\"200\"&gt;</code>. Copia la ruta del fitxer amb compte.|Escribe la imagen en la línea vacía: <code>&lt;img src=\"…\" alt=\"…\" width=\"200\"&gt;</code>. Copia la ruta del archivo con cuidado." },
        { k: 'web', ph: 'repte', url: 'animalari.numi/ocell.html', q: "En Bit ha escrit aquesta imatge, però té <b>dos errors</b> i l'ocell no surt. Troba'ls i arregla'ls.|Bit ha escrito esta imagen, pero tiene <b>dos errores</b> y el pájaro no sale. Encuéntralos y arréglalos.",
          html: C(`<h1>L'ocell blau</h1>
<img scr="img/tech/web/ocell.svg" alt="Un ocell blau que canta" width="160"></img>
<p>Tots els ocells tenen el cos cobert de plomes.</p>`, `<h1>El pájaro azul</h1>
<img scr="img/tech/web/ocell.svg" alt="Un pájaro azul que canta" width="160"></img>
<p>Todos los pájaros tienen el cuerpo cubierto de plumas.</p>`),
          checks: [{ k: 'attr', t: 'img', a: 'src', v: '/ocell\\.svg$/', txt: "La imatge té l'atribut <code>src</code> ben escrit|La imagen tiene el atributo <code>src</code> bien escrito" }, ALT(),
            { k: 'clean', txt: "No hi ha cap etiqueta tancada de més|No hay ninguna etiqueta cerrada de más" }],
          sol: { html: C(`<h1>L'ocell blau</h1>
<img src="img/tech/web/ocell.svg" alt="Un ocell blau que canta" width="160">
<p>Tots els ocells tenen el cos cobert de plomes.</p>`, `<h1>El pájaro azul</h1>
<img src="img/tech/web/ocell.svg" alt="Un pájaro azul que canta" width="160">
<p>Todos los pájaros tienen el cuerpo cubierto de plumas.</p>`) },
          hint: "Llegeix el nom de cada atribut lletra a lletra. I recorda que <code>&lt;img&gt;</code> és una etiqueta buida.|Lee el nombre de cada atributo letra a letra. Y recuerda que <code>&lt;img&gt;</code> es una etiqueta vacía." },
        { k: 'web', ph: 'repte', url: 'animalari.numi/bosc.html', q: "Una mini galeria: afegeix <b>dos animals més</b> del bosc, cadascun amb un <code>&lt;h2&gt;</code> amb el nom i la seva imatge amb <code>alt</code>. Les imatges que pots fer servir són al comentari.|Una mini galería: añade <b>dos animales más</b> del bosque, cada uno con un <code>&lt;h2&gt;</code> con el nombre y su imagen con <code>alt</code>. Las imágenes que puedes usar están en el comentario.",
          html: C(`<h1>Animals del bosc</h1>
<!-- Imatges: gos.svg guineu.svg papallona.svg ocell.svg -->
<h2>El gat</h2>
<img src="img/tech/web/gat.svg" alt="Un gat taronja amb ratlles" width="120">
`, `<h1>Animales del bosque</h1>
<!-- Imágenes: gos.svg (perro) guineu.svg (zorro) papallona.svg (mariposa) ocell.svg (pájaro) -->
<h2>El gato</h2>
<img src="img/tech/web/gat.svg" alt="Un gato naranja con rayas" width="120">
`),
          checks: [{ k: 'tag', t: 'h2', min: 3, txt: 'Hi ha 3 animals amb el seu <code>&lt;h2&gt;</code>|Hay 3 animales con su <code>&lt;h2&gt;</code>' }, { k: 'tag', t: 'img', min: 3, txt: 'Hi ha 3 imatges|Hay 3 imágenes' }, ALT(3), CLEAN],
          snips: ['<h2>|</h2>', ...SN_IMG],
          sol: { html: C(`<h1>Animals del bosc</h1>
<h2>El gat</h2>
<img src="img/tech/web/gat.svg" alt="Un gat taronja amb ratlles" width="120">
<h2>La papallona</h2>
<img src="img/tech/web/papallona.svg" alt="Una papallona amb les ales blaves i roses" width="120">
<h2>El gos</h2>
<img src="img/tech/web/gos.svg" alt="Un gos marró amb les orelles caigudes" width="120">`, `<h1>Animales del bosque</h1>
<h2>El gato</h2>
<img src="img/tech/web/gat.svg" alt="Un gato naranja con rayas" width="120">
<h2>La mariposa</h2>
<img src="img/tech/web/papallona.svg" alt="Una mariposa con las alas azules y rosas" width="120">
<h2>El perro</h2>
<img src="img/tech/web/gos.svg" alt="Un perro marrón con las orejas caídas" width="120">`) },
          hint: "Copia el bloc del gat (el <code>&lt;h2&gt;</code> i la imatge) i canvia el nom, el fitxer i l'alt.|Copia el bloque del gato (el <code>&lt;h2&gt;</code> y la imagen) y cambia el nombre, el archivo y el alt." },
        { k: 'wcreate', ph: 'crea', name: 'El meu animal preferit|Mi animal preferido', url: 'animalari.numi/preferit.html',
          q: "Crea la pàgina del teu <b>animal preferit</b>: un títol, la seva imatge (tria-la del comentari) amb un bon <code>alt</code> i una amplada, i un paràgraf amb una cosa que en sàpigues.|Crea la página de tu <b>animal preferido</b>: un título, su imagen (elígela del comentario) con un buen <code>alt</code> y un ancho, y un párrafo con algo que sepas de él.",
          crit: ["Un títol <code>&lt;h1&gt;</code> amb el nom de l'animal|Un título <code>&lt;h1&gt;</code> con el nombre del animal", "Una imatge amb un <code>alt</code> que la descriu|Una imagen con un <code>alt</code> que la describe", "La imatge té <code>width</code>|La imagen tiene <code>width</code>", "Un paràgraf amb una cosa que saps de l'animal|Un párrafo con algo que sabes del animal"],
          html: LIST,
          checks: [{ k: 'text', t: 'h1', min: 3, txt: "Hi ha un <code>&lt;h1&gt;</code> amb el nom de l'animal|Hay un <code>&lt;h1&gt;</code> con el nombre del animal" }, { k: 'attr', t: 'img', a: 'src', v: '/^img\\/[a-z\\/]+\\/[\\w-]+\\.(svg|webp)$/', txt: "La imatge és d'una de les carpetes del comentari|La imagen es de una de las carpetas del comentario" }, ALT(),
            { k: 'attr', t: 'img', a: 'width', v: '/^\\d+$/', txt: 'La imatge té <code>width</code> (un número)|La imagen tiene <code>width</code> (un número)' }, { k: 'text', t: 'p', min: 20, txt: 'Un paràgraf amb una cosa que saps (almenys 20 lletres)|Un párrafo con algo que sabes (al menos 20 letras)' }, CLEAN],
          snips: ['<h1>|</h1>', ...SN_IMG, '<p>|</p>'],
          sol: { html: C(`<h1>El mussol</h1>
<img src="img/ic/owl.webp" alt="Un mussol marró amb els ulls grossos i grocs" width="180">
<p>Els mussols poden girar el cap molt més que nosaltres per mirar enrere.</p>`, `<h1>El búho</h1>
<img src="img/ic/owl.webp" alt="Un búho marrón con los ojos grandes y amarillos" width="180">
<p>Los búhos pueden girar la cabeza mucho más que nosotros para mirar hacia atrás.</p>`) },
          hint: "Comença pel títol, després la imatge i al final el paràgraf. Copia la ruta exacta de la imatge del comentari.|Empieza por el título, después la imagen y al final el párrafo. Copia la ruta exacta de la imagen del comentario." },
        { k: 'quiz', ph: 'tanca', q: "Per a què serveix l'atribut <code>alt</code>?|¿Para qué sirve el atributo <code>alt</code>?",
          opts: ['Per descriure la imatge a qui no la pot veure|Para describir la imagen a quien no puede verla', 'Per fer la imatge més gran|Para hacer la imagen más grande', 'Per dir on és el fitxer|Para decir dónde está el archivo'], a: 0,
          ex: "On és el fitxer ho diu <code>src</code>, i la mida, <code>width</code>.|Dónde está el archivo lo dice <code>src</code>, y el tamaño, <code>width</code>." },
        { k: 'quiz', ph: 'tanca', q: 'Quin codi és correcte?|¿Qué código es correcto?',
          opts: [`<code>&lt;img src="gos.svg" alt="Un gos marró"&gt;</code>|<code>&lt;img src="gos.svg" alt="Un perro marrón"&gt;</code>`, '<code>&lt;img&gt;gos.svg&lt;/img&gt;</code>|<code>&lt;img&gt;gos.svg&lt;/img&gt;</code>', `<code>&lt;img src=gos.svg alt=Un gos marró&gt;</code>|<code>&lt;img src=gos.svg alt=Un perro marrón&gt;</code>`], a: 0,
          ex: "<code>&lt;img&gt;</code> no es tanca, i els valors van entre cometes: sense cometes, l'alt es talla al primer espai.|<code>&lt;img&gt;</code> no se cierra, y los valores van entre comillas: sin comillas, el alt se corta en el primer espacio." },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* =========================== Sessió 2 · Enllaços =========================== */
    { id: 'w3-2', t: 'Enllaços|Enlaces', min: 45, badge: 'w_link',
      learn: ["Un enllaç és <code>&lt;a href=\"adreça\"&gt;text&lt;/a&gt;</code>: <code>href</code> diu on porta i el text és el que es toca.|Un enlace es <code>&lt;a href=\"dirección\"&gt;texto&lt;/a&gt;</code>: <code>href</code> dice adónde lleva y el texto es lo que se toca.",
        "<code>tortuga.html</code> porta a una pàgina de la teva web; <code>https://…</code>, a una altra web; <code>#id</code>, a un lloc de la mateixa pàgina.|<code>tortuga.html</code> lleva a una página de tu web; <code>https://…</code>, a otra web; <code>#id</code>, a un sitio de la misma página.",
        "El text de l'enllaç ha de dir on porta: res de «clica aquí».|El texto del enlace tiene que decir adónde lleva: nada de «haz clic aquí»."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Què passa si el <code>src</code> d'una imatge té el nom del fitxer mal escrit?|¿Qué pasa si el <code>src</code> de una imagen tiene el nombre del archivo mal escrito?",
          opts: ["No surt: el navegador no troba el fitxer i mostra l'alt|No sale: el navegador no encuentra el archivo y muestra el alt", 'Surt igualment|Sale igualmente', "Surt una altra imatge a l'atzar|Sale otra imagen al azar"], a: 0 },
        { k: 'quiz', ph: 'recorda', q: "Quin és un bon <code>alt</code> per a la foto d'un gos que corre per la platja?|¿Cuál es un buen <code>alt</code> para la foto de un perro que corre por la playa?",
          opts: ['«Un gos marró corrent per la sorra de la platja»|«Un perro marrón corriendo por la arena de la playa»', '«foto»|«foto»', '«gos.jpg»|«perro.jpg»'], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'poble', title: "Ponts entre pàgines|Puentes entre páginas",
          t: "L'Animalari ja té fitxes amb imatges, però cada fitxa és una pàgina sola, com una illa sense ponts: si entres a la portada, no hi ha manera d'arribar a la tortuga! Avui construirem els <b>ponts</b>: els <b>enllaços</b>. Amb un toc, podràs anar de la portada a una fitxa, d'una fitxa a una altra… o a una altra web.|El Animalario ya tiene fichas con imágenes, pero cada ficha es una página sola, como una isla sin puentes: si entras en la portada, ¡no hay manera de llegar a la tortuga! Hoy construiremos los <b>puentes</b>: los <b>enlaces</b>. Con un toque, podrás ir de la portada a una ficha, de una ficha a otra… o a otra web." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Enllaç|Enlace', t: "La «H» d'HTML|La «H» de HTML", anim: 'w3link',
            x: "HTML vol dir <i>HyperText Markup Language</i>. L'<b>hipertext</b> és text amb <span class='hl'>enllaços</span>: paraules que, si les toques, et porten a una altra pàgina. Els enllaços converteixen milions de pàgines soltes en una <b>xarxa</b>: la web.|HTML quiere decir <i>HyperText Markup Language</i>. El <b>hipertexto</b> es texto con <span class='hl'>enlaces</span>: palabras que, si las tocas, te llevan a otra página. Los enlaces convierten millones de páginas sueltas en una <b>red</b>: la web." },
          { k: '&lt;a href&gt;', t: "Com s'escriu un enllaç|Cómo se escribe un enlace",
            media: { k: 'web', html: C(`<p>Vull conèixer la <a href="tortuga.html">tortuga</a>
i la <a href="guineu.html">guineu</a>.</p>`, `<p>Quiero conocer la <a href="tortuga.html">tortuga</a>
y el <a href="guineu.html">zorro</a>.</p>`) },
            x: "L'etiqueta és <code>&lt;a&gt;</code> (de l'anglès <i>anchor</i>, «àncora»). L'atribut <code>href</code> diu <b>on porta</b> l'enllaç, i el text de dins és el que es veu i es toca. El navegador el pinta blau i subratllat perquè se sàpiga que és un enllaç.|La etiqueta es <code>&lt;a&gt;</code> (del inglés <i>anchor</i>, «ancla»). El atributo <code>href</code> dice <b>adónde lleva</b> el enlace, y el texto de dentro es lo que se ve y se toca. El navegador lo pinta azul y subrayado para que se sepa que es un enlace.",
            tip: "A la vista prèvia dels reptes, els enllaços porten a adreces inventades: si en toques un, la vista prèvia es buida fins que tornis a escriure.|En la vista previa de los retos, los enlaces llevan a direcciones inventadas: si tocas uno, la vista previa se vacía hasta que vuelvas a escribir." },
          { k: 'Adreces|Direcciones', t: 'Dins de la teva web o a una altra|Dentro de tu web o a otra',
            media: { k: 'web', html: C(`<p>A la meva web:
  <a href="tortuga.html">la tortuga</a></p>
<p>A una altra web:
  <a href="https://exemple.numi/ocells">la web dels ocells</a></p>`, `<p>En mi web:
  <a href="tortuga.html">la tortuga</a></p>
<p>En otra web:
  <a href="https://exemple.numi/pajaros">la web de los pájaros</a></p>`) },
            x: "<code>href=\"tortuga.html\"</code> porta a una pàgina de <b>la teva web</b>: un fitxer de la mateixa carpeta. <code>href=\"https://exemple.numi/ocells\"</code> porta a <b>una altra web</b>: és una adreça completa, amb <code>https://</code> i el domini, com les URL de la unitat 1.|<code>href=\"tortuga.html\"</code> lleva a una página de <b>tu web</b>: un archivo de la misma carpeta. <code>href=\"https://exemple.numi/pajaros\"</code> lleva a <b>otra web</b>: es una dirección completa, con <code>https://</code> y el dominio, como las URL de la unidad 1.",
            tip: "Si t'oblides el <code>https://</code>, el navegador creu que és un fitxer de la teva web… i no el troba.|Si te olvidas el <code>https://</code>, el navegador cree que es un archivo de tu web… y no lo encuentra." },
          { k: 'Enllaços interns|Enlaces internos', t: 'Saltar dins de la mateixa pàgina|Saltar dentro de la misma página', anim: 'w3jump',
            x: "Si la pàgina és llarga, fes-hi un índex. Posa un <code>id</code> (un nom únic) a l'element on vols arribar, <code>&lt;h2 id=\"menja\"&gt;</code>, i fes l'enllaç amb un coixinet: <code>&lt;a href=\"#menja\"&gt;</code>. En tocar-lo, la pàgina hi salta.|Si la página es larga, hazle un índice. Pon un <code>id</code> (un nombre único) al elemento al que quieres llegar, <code>&lt;h2 id=\"come\"&gt;</code>, y haz el enlace con una almohadilla: <code>&lt;a href=\"#come\"&gt;</code>. Al tocarlo, la página salta hasta allí.",
            tip: "Escriu els id sense espais ni accents i no en repeteixis cap a la mateixa pàgina: <code>que-menja</code>, i no <code>què menja</code>.|Escribe los id sin espacios ni acentos y no repitas ninguno en la misma página: <code>que-come</code>, y no <code>qué come</code>." },
          { k: 'Compte!|¡Cuidado!', t: "El text de l'enllaç diu on porta|El texto del enlace dice adónde lleva",
            media: { k: 'web', html: C(`<p>Per veure la balena, <a href="balena.html">clica aquí</a>.</p>
<p>Llegeix la <a href="balena.html">fitxa de la balena</a>.</p>`, `<p>Para ver la ballena, <a href="balena.html">haz clic aquí</a>.</p>
<p>Lee la <a href="balena.html">ficha de la ballena</a>.</p>`) },
            x: "Moltes persones (i els lectors de pantalla) <b>només llegeixen els enllaços</b> per decidir on anar. Si tots diuen «clica aquí», no se sap on porta cap.|Muchas personas (y los lectores de pantalla) <b>solo leen los enlaces</b> para decidir adónde ir. Si todos dicen «haz clic aquí», no se sabe adónde lleva ninguno.",
            bad: "«Per veure la balena, <u>clica aquí</u>.»|«Para ver la ballena, <u>haz clic aquí</u>.»", good: "«Llegeix la <u>fitxa de la balena</u>.»|«Lee la <u>ficha de la ballena</u>.»" }
        ] },
        { k: 'seq', ph: 'mans', q: "Ordena les peces per fer un enllaç a la fitxa del gos.|Ordena las piezas para hacer un enlace a la ficha del perro.",
          items: ['<code>&lt;a</code>|<code>&lt;a</code>', '<code>href="gos.html"</code>|<code>href="perro.html"</code>', '<code>&gt;</code>|<code>&gt;</code>', 'El gos|El perro', '<code>&lt;/a&gt;</code>|<code>&lt;/a&gt;</code>'],
          ex: "Primer l'etiqueta d'obertura amb l'atribut, després el text que es tocarà i al final el tancament.|Primero la etiqueta de apertura con el atributo, después el texto que se tocará y al final el cierre." },
        { k: 'unplug', ph: 'mans', ico: '🗺', title: 'La web de paper|La web de papel', t: "Amb algú de casa, feu una web… sense ordinador!|Con alguien de casa, haced una web… ¡sin ordenador!",
          steps: ["Agafeu 4 fulls: cada full és una pàgina (la portada i tres animals). Escriviu el títol a dalt de cada un.|Coged 4 hojas: cada hoja es una página (la portada y tres animales). Escribid el título arriba de cada una.",
            "A la portada, escriviu tres enllaços, un per animal, i subratlleu-los.|En la portada, escribid tres enlaces, uno por animal, y subrayadlos.",
            "A cada animal, afegiu un enllaç «Torna a la portada». Dibuixeu una fletxa des de cada enllaç fins al full on porta.|En cada animal, añadid un enlace «Vuelve a la portada». Dibujad una flecha desde cada enlace hasta la hoja a la que lleva.",
            "Una persona «navega»: diu en veu alta un enllaç i l'altra li dona el full on porta. Hi ha cap pàgina on no es pugui arribar?|Una persona «navega»: dice en voz alta un enlace y la otra le da la hoja a la que lleva. ¿Hay alguna página a la que no se pueda llegar?"],
          tip: "Una pàgina sense cap enllaç que hi porti és una pàgina perduda: ningú no la trobarà.|Una página sin ningún enlace que lleve a ella es una página perdida: nadie la encontrará." },
        { k: 'wquiz', ph: 'prova', q: 'Quina vista prèvia fa aquest codi?|¿Qué vista previa hace este código?',
          code: { html: C('<p>Mira la <a href="tortuga.html">tortuga</a> i el gat.</p>', '<p>Mira la <a href="tortuga.html">tortuga</a> y el gato.</p>') },
          opts: [{ html: C('<p>Mira la <a href="#">tortuga</a> i el gat.</p>', '<p>Mira la <a href="#">tortuga</a> y el gato.</p>') },
            { html: C('<p>Mira la <a href="#">tortuga i el gat.</a></p>', '<p>Mira la <a href="#">tortuga y el gato.</a></p>') },
            { html: C('<p>Mira la <strong>tortuga</strong> i el gat.</p>', '<p>Mira la <strong>tortuga</strong> y el gato.</p>') }], a: 0,
          ex: "Només el text que hi ha entre <code>&lt;a&gt;</code> i <code>&lt;/a&gt;</code> és l'enllaç: surt blau i subratllat.|Solo el texto que hay entre <code>&lt;a&gt;</code> y <code>&lt;/a&gt;</code> es el enlace: sale azul y subrayado." },
        { k: 'wspot', ph: 'investiga', q: "A partir d'un punt, <b>tot</b> el text s'ha tornat enllaç. <b>Toca la línia amb l'error.</b>|A partir de un punto, <b>todo</b> el texto se ha vuelto enlace. <b>Toca la línea con el error.</b>",
          html: C(`<h1>Animals de l'illa</h1>
<p>Llegeix la <a href="tortuga.html">fitxa de la tortuga</a>.</p>
<p>Llegeix la <a href="guineu.html">fitxa de la guineu.</p>
<p>La fitxa del gat arribarà aviat.</p>
<p>Web feta pel club de naturalistes.</p>`, `<h1>Animales de la isla</h1>
<p>Lee la <a href="tortuga.html">ficha de la tortuga</a>.</p>
<p>Lee la <a href="guineu.html">ficha del zorro.</p>
<p>La ficha del gato llegará pronto.</p>
<p>Web hecha por el club de naturalistas.</p>`), bad: 3,
          ex: "Falta tancar l'enllaç amb <code>&lt;/a&gt;</code>. Sense el tancament, el navegador continua l'enllaç fins al final de la pàgina.|Falta cerrar el enlace con <code>&lt;/a&gt;</code>. Sin el cierre, el navegador continúa el enlace hasta el final de la página." },
        { k: 'quiz', ph: 'investiga', q: "Quin és el millor text per a un enllaç a la fitxa de la balena?|¿Cuál es el mejor texto para un enlace a la ficha de la ballena?",
          opts: ['«Fitxa de la balena»|«Ficha de la ballena»', '«Clica aquí»|«Haz clic aquí»', '«Aquí»|«Aquí»', '«https://exemple.numi/balena»|«https://exemple.numi/ballena»'], a: 0,
          ex: "El text ha de dir on porta. Una adreça sencera funciona, però costa de llegir (i un lector de pantalla la llegeix lletra a lletra).|El texto tiene que decir adónde lleva. Una dirección entera funciona, pero cuesta leerla (y un lector de pantalla la lee letra a letra)." },
        { k: 'move', ph: 'pausa', secs: 30, t: "Fes de pàgina web! Ajup-te i toca't els peus (el <b>final</b> de la pàgina), aixeca't amb els braços enlaire (el <b>principi</b>) i fes un salt de costat (un <b>enllaç</b> a una altra pàgina). Cinc vegades, cada cop més ràpid!|¡Haz de página web! Agáchate y tócate los pies (el <b>final</b> de la página), levántate con los brazos en alto (el <b>principio</b>) y da un salto de lado (un <b>enlace</b> a otra página). ¡Cinco veces, cada vez más rápido!" },
        { k: 'web', ph: 'repte', url: 'animalari.numi/ocells.html', q: "Completa l'enllaç perquè porti a la web dels ocells: <code>https://exemple.numi/ocells</code>.|Completa el enlace para que lleve a la web de los pájaros: <code>https://exemple.numi/pajaros</code>.",
          html: C(`<h1>Ocells de l'illa</h1>
<img src="img/tech/web/ocell.svg" alt="Un ocell blau" width="120">
<p>Vols saber-ne més? Visita la <a href="">web dels ocells</a>.</p>`, `<h1>Pájaros de la isla</h1>
<img src="img/tech/web/ocell.svg" alt="Un pájaro azul" width="120">
<p>¿Quieres saber más? Visita la <a href="">web de los pájaros</a>.</p>`),
          checks: [{ k: 'link', href: '/^https:\\/\\/exemple\\.numi\\/(ocells|pajaros)\\/?$/', txt: "L'enllaç porta a l'adreça completa de la web dels ocells|El enlace lleva a la dirección completa de la web de los pájaros" }, CLEAN],
          sol: { html: C(`<h1>Ocells de l'illa</h1>
<img src="img/tech/web/ocell.svg" alt="Un ocell blau" width="120">
<p>Vols saber-ne més? Visita la <a href="https://exemple.numi/ocells">web dels ocells</a>.</p>`, `<h1>Pájaros de la isla</h1>
<img src="img/tech/web/ocell.svg" alt="Un pájaro azul" width="120">
<p>¿Quieres saber más? Visita la <a href="https://exemple.numi/pajaros">web de los pájaros</a>.</p>`) },
          hint: "L'adreça va entre les cometes de <code>href=\"\"</code>, sencera i amb <code>https://</code> al davant.|La dirección va entre las comillas de <code>href=\"\"</code>, entera y con <code>https://</code> delante." },
        { k: 'web', ph: 'repte', url: 'animalari.numi', q: "Fes el <b>menú</b> de la portada: una llista <code>&lt;ul&gt;</code> amb tres enllaços, a <code>tortuga.html</code>, <code>guineu.html</code> i <code>gat.html</code>.|Haz el <b>menú</b> de la portada: una lista <code>&lt;ul&gt;</code> con tres enlaces, a <code>tortuga.html</code>, <code>guineu.html</code> y <code>gat.html</code>.",
          html: C(`<h1>L'Animalari</h1>
<p>Tria un animal:</p>
`, `<h1>El Animalario</h1>
<p>Elige un animal:</p>
`),
          checks: [{ k: 'in', t: 'li', p: 'ul', min: 3, txt: 'Una llista <code>&lt;ul&gt;</code> amb 3 elements|Una lista <code>&lt;ul&gt;</code> con 3 elementos' }, { k: 'in', t: 'a', p: 'li', min: 3, txt: 'Cada element de la llista és un enllaç|Cada elemento de la lista es un enlace' },
            { k: 'link', href: '/^tortuga\\.html$/', txt: 'Un enllaç a <code>tortuga.html</code>|Un enlace a <code>tortuga.html</code>' }, { k: 'link', href: '/^guineu\\.html$/', txt: 'Un enllaç a <code>guineu.html</code>|Un enlace a <code>guineu.html</code>' }, { k: 'link', href: '/^gat\\.html$/', txt: 'Un enllaç a <code>gat.html</code>|Un enlace a <code>gat.html</code>' }, CLEAN],
          snips: ['<ul>|</ul>', '<li>|</li>', '<a href="|"></a>'],
          sol: { html: C(`<h1>L'Animalari</h1>
<p>Tria un animal:</p>
<ul>
  <li><a href="tortuga.html">La tortuga</a></li>
  <li><a href="guineu.html">La guineu</a></li>
  <li><a href="gat.html">El gat</a></li>
</ul>`, `<h1>El Animalario</h1>
<p>Elige un animal:</p>
<ul>
  <li><a href="tortuga.html">La tortuga</a></li>
  <li><a href="guineu.html">El zorro</a></li>
  <li><a href="gat.html">El gato</a></li>
</ul>`) },
          hint: "Com a la unitat 2: <code>&lt;ul&gt;</code> i un <code>&lt;li&gt;</code> per a cada animal. Dins de cada <code>&lt;li&gt;</code>, un <code>&lt;a href=\"…\"&gt;</code>.|Como en la unidad 2: <code>&lt;ul&gt;</code> y un <code>&lt;li&gt;</code> para cada animal. Dentro de cada <code>&lt;li&gt;</code>, un <code>&lt;a href=\"…\"&gt;</code>." },
        { k: 'web', ph: 'repte', url: 'animalari.numi/balena.html', q: "Aquesta fitxa té un índex, però els enllaços no saben on saltar. <b>Posa un <code>id</code> a cada <code>&lt;h2&gt;</code></b> que coincideixi amb el seu enllaç.|Esta ficha tiene un índice, pero los enlaces no saben adónde saltar. <b>Pon un <code>id</code> a cada <code>&lt;h2&gt;</code></b> que coincida con su enlace.",
          html: C(`<h1>La balena</h1>
<p>Índex: <a href="#on-viu">On viu</a> · <a href="#que-menja">Què menja</a></p>
<img src="img/tech/web/balena.svg" alt="Una balena blava que treu aigua pel cap" width="200">
<h2>On viu</h2>
<p>N'hi ha a tots els oceans del món.</p>
<h2>Què menja</h2>
<p>Moltes balenes mengen krill: uns animalons petits com gambetes.</p>`, `<h1>La ballena</h1>
<p>Índice: <a href="#donde-vive">Dónde vive</a> · <a href="#que-come">Qué come</a></p>
<img src="img/tech/web/balena.svg" alt="Una ballena azul que echa agua por la cabeza" width="200">
<h2>Dónde vive</h2>
<p>Las hay en todos los océanos del mundo.</p>
<h2>Qué come</h2>
<p>Muchas ballenas comen kril: unos animalitos pequeños como gambitas.</p>`),
          checks: [{ k: 'attr', t: 'h2', a: 'id', v: '/^(on-viu|donde-vive)$/', txt: 'El primer <code>&lt;h2&gt;</code> té l\'id del primer enllaç|El primer <code>&lt;h2&gt;</code> tiene el id del primer enlace' }, { k: 'attr', t: 'h2', a: 'id', v: '/^que-(menja|come)$/', txt: 'El segon <code>&lt;h2&gt;</code> té l\'id del segon enllaç|El segundo <code>&lt;h2&gt;</code> tiene el id del segundo enlace' }, CLEAN],
          sol: { html: C(`<h1>La balena</h1>
<p>Índex: <a href="#on-viu">On viu</a> · <a href="#que-menja">Què menja</a></p>
<img src="img/tech/web/balena.svg" alt="Una balena blava que treu aigua pel cap" width="200">
<h2 id="on-viu">On viu</h2>
<p>N'hi ha a tots els oceans del món.</p>
<h2 id="que-menja">Què menja</h2>
<p>Moltes balenes mengen krill: uns animalons petits com gambetes.</p>`, `<h1>La ballena</h1>
<p>Índice: <a href="#donde-vive">Dónde vive</a> · <a href="#que-come">Qué come</a></p>
<img src="img/tech/web/balena.svg" alt="Una ballena azul que echa agua por la cabeza" width="200">
<h2 id="donde-vive">Dónde vive</h2>
<p>Las hay en todos los océanos del mundo.</p>
<h2 id="que-come">Qué come</h2>
<p>Muchas ballenas comen kril: unos animalitos pequeños como gambitas.</p>`) },
          hint: "L'id s'escriu <b>sense</b> el coixinet: <code>&lt;h2 id=\"on-viu\"&gt;</code>. El coixinet només va a l'enllaç.|El id se escribe <b>sin</b> la almohadilla: <code>&lt;h2 id=\"donde-vive\"&gt;</code>. La almohadilla solo va en el enlace." },
        { k: 'web', ph: 'repte', url: 'animalari.numi/pop.html', q: "Aquesta pàgina té <b>dos errors</b>: un enllaç a una altra web que no funcionarà i un enllaç sense tancar. Arregla'ls.|Esta página tiene <b>dos errores</b>: un enlace a otra web que no funcionará y un enlace sin cerrar. Arréglalos.",
          html: C(`<h1>El pop</h1>
<img src="img/ic/octopus.webp" alt="Un pop rosa que somriu" width="120">
<p>El pop té vuit braços.</p>
<p>Més informació a la <a href="exemple.numi/pops">web dels pops</a>.</p>
<p><a href="index.html">Torna a la portada</p>`, `<h1>El pulpo</h1>
<img src="img/ic/octopus.webp" alt="Un pulpo rosa que sonríe" width="120">
<p>El pulpo tiene ocho brazos.</p>
<p>Más información en la <a href="exemple.numi/pulpos">web de los pulpos</a>.</p>
<p><a href="index.html">Vuelve a la portada</p>`),
          checks: [{ k: 'link', href: '/^https:\\/\\/exemple\\.numi\\/(pops|pulpos)\\/?$/', txt: "L'enllaç a l'altra web té l'adreça completa, amb <code>https://</code>|El enlace a la otra web tiene la dirección completa, con <code>https://</code>" },
            { k: 'link', href: 'index.html', txt: 'Hi ha l\'enllaç a la portada|Está el enlace a la portada' }, CLEAN],
          sol: { html: C(`<h1>El pop</h1>
<img src="img/ic/octopus.webp" alt="Un pop rosa que somriu" width="120">
<p>El pop té vuit braços.</p>
<p>Més informació a la <a href="https://exemple.numi/pops">web dels pops</a>.</p>
<p><a href="index.html">Torna a la portada</a></p>`, `<h1>El pulpo</h1>
<img src="img/ic/octopus.webp" alt="Un pulpo rosa que sonríe" width="120">
<p>El pulpo tiene ocho brazos.</p>
<p>Más información en la <a href="https://exemple.numi/pulpos">web de los pulpos</a>.</p>
<p><a href="index.html">Vuelve a la portada</a></p>`) },
          hint: "Llegeix l'avís taronja de sota l'editor: et diu quina etiqueta no està tancada. I recorda què passa sense <code>https://</code>.|Lee el aviso naranja de debajo del editor: te dice qué etiqueta no está cerrada. Y recuerda qué pasa sin <code>https://</code>." },
        { k: 'wcreate', ph: 'crea', name: 'La fitxa amb índex|La ficha con índice', url: 'animalari.numi/mussol.html',
          q: "Acaba la fitxa del mussol (o canvia-la pel teu animal): un <b>índex</b> al principi que salti a <b>dues seccions</b> (<code>&lt;h2&gt;</code> amb <code>id</code>) i, al final, un enllaç a una altra web (inventada) per saber-ne més.|Termina la ficha del búho (o cámbiala por tu animal): un <b>índice</b> al principio que salte a <b>dos secciones</b> (<code>&lt;h2&gt;</code> con <code>id</code>) y, al final, un enlace a otra web (inventada) para saber más.",
          crit: ["Un índex amb dos enllaços interns (#)|Un índice con dos enlaces internos (#)", "Dues seccions amb <code>&lt;h2 id&gt;</code> i un paràgraf cadascuna|Dos secciones con <code>&lt;h2 id&gt;</code> y un párrafo cada una", "Un enllaç a una altra web amb <code>https://</code>|Un enlace a otra web con <code>https://</code>", "Els textos dels enllaços diuen on porten|Los textos de los enlaces dicen adónde llevan"],
          html: C(`<h1>El mussol</h1>
<!-- 1. L'índex: dos enllaços que comencin per # -->

<img src="img/ic/owl.webp" alt="Un mussol marró amb els ulls grossos" width="150">
<!-- 2. Dues seccions: <h2 id="..."> i un paràgraf cadascuna -->

<!-- 3. Un enllaç a una web inventada: https://exemple.numi/... -->
`, `<h1>El búho</h1>
<!-- 1. El índice: dos enlaces que empiecen por # -->

<img src="img/ic/owl.webp" alt="Un búho marrón con los ojos grandes" width="150">
<!-- 2. Dos secciones: <h2 id="..."> y un párrafo cada una -->

<!-- 3. Un enlace a una web inventada: https://exemple.numi/... -->
`),
          checks: [{ k: 'link', href: '/^#./', min: 2, txt: 'Un índex amb 2 enllaços interns (que comencen per #)|Un índice con 2 enlaces internos (que empiezan por #)' }, { k: 'attr', t: 'h2', a: 'id', min: 2, txt: '2 seccions <code>&lt;h2&gt;</code> amb <code>id</code>|2 secciones <code>&lt;h2&gt;</code> con <code>id</code>' },
            { k: 'tag', t: 'p', min: 2, txt: 'Almenys dos paràgrafs|Al menos dos párrafos' }, { k: 'link', href: '/^https:\\/\\/\\S+\\.\\S+/', txt: 'Un enllaç a una altra web amb <code>https://</code>|Un enlace a otra web con <code>https://</code>' }, ALT(), CLEAN],
          snips: ['<a href="#|"></a>', '<h2 id="|"></h2>', '<p>|</p>'],
          sol: { html: C(`<h1>El mussol</h1>
<p><a href="#nit">De nit</a> · <a href="#cap">El cap</a></p>
<img src="img/ic/owl.webp" alt="Un mussol marró amb els ulls grossos" width="150">
<h2 id="nit">De nit</h2>
<p>La majoria de mussols caça de nit i hi veu molt bé amb poca llum.</p>
<h2 id="cap">El cap</h2>
<p>Pot girar el cap molt més que nosaltres per mirar enrere.</p>
<p>Per saber-ne més: <a href="https://exemple.numi/mussols">la web dels mussols</a>.</p>`, `<h1>El búho</h1>
<p><a href="#noche">De noche</a> · <a href="#cabeza">La cabeza</a></p>
<img src="img/ic/owl.webp" alt="Un búho marrón con los ojos grandes" width="150">
<h2 id="noche">De noche</h2>
<p>La mayoría de búhos cazan de noche y ven muy bien con poca luz.</p>
<h2 id="cabeza">La cabeza</h2>
<p>Puede girar la cabeza mucho más que nosotros para mirar hacia atrás.</p>
<p>Para saber más: <a href="https://exemple.numi/buhos">la web de los búhos</a>.</p>`) },
          hint: "Primer decideix el nom de les dues seccions (per exemple <code>nit</code> i <code>cap</code>). Fes servir el mateix nom a l'<code>id</code> i a l'enllaç, amb el coixinet.|Primero decide el nombre de las dos secciones (por ejemplo <code>noche</code> y <code>cabeza</code>). Usa el mismo nombre en el <code>id</code> y en el enlace, con la almohadilla." },
        { k: 'quiz', ph: 'tanca', q: `Què fa aquest enllaç? <code>&lt;a href="#fonts"&gt;Fonts&lt;/a&gt;</code>|¿Qué hace este enlace? <code>&lt;a href="#fuentes"&gt;Fuentes&lt;/a&gt;</code>`,
          opts: [`Salta a l'element amb <code>id="fonts"</code> de la mateixa pàgina|Salta al elemento con <code>id="fuentes"</code> de la misma página`, "Obre una web que es diu «fonts»|Abre una web que se llama «fuentes»", "Res: li falta el <code>https://</code>|Nada: le falta el <code>https://</code>"], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Quin <code>href</code> porta a <b>una altra web</b>?|¿Qué <code>href</code> lleva a <b>otra web</b>?",
          opts: ['<code>https://exemple.numi</code>|<code>https://exemple.numi</code>', '<code>ocells.html</code>|<code>pajaros.html</code>', '<code>#ocells</code>|<code>#pajaros</code>'], a: 0,
          ex: "Amb <code>https://</code> i el domini és una altra web; <code>ocells.html</code> és una pàgina de la teva web, i <code>#ocells</code>, un lloc de la mateixa pàgina.|Con <code>https://</code> y el dominio es otra web; <code>pajaros.html</code> es una página de tu web, y <code>#pajaros</code>, un sitio de la misma página." },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* =========================== Sessió 3 · Citar les fonts =========================== */
    { id: 'w3-3', t: 'Citar les fonts|Citar las fuentes', min: 45, badge: 'w_font',
      learn: ["El que algú crea (fotos, dibuixos, textos) és seu: que es vegi a internet no vol dir que es pugui agafar.|Lo que alguien crea (fotos, dibujos, textos) es suyo: que se vea en internet no quiere decir que se pueda coger.",
        "Citar la font és dir qui, què, on i quan: així respectes l'autor/a i qui llegeix ho pot comprovar.|Citar la fuente es decir quién, qué, dónde y cuándo: así respetas al autor/a y quien lee lo puede comprobar.",
        "<code>&lt;figure&gt;</code> agrupa una imatge amb la seva llegenda, <code>&lt;figcaption&gt;</code>, on va l'autor/a.|<code>&lt;figure&gt;</code> agrupa una imagen con su leyenda, <code>&lt;figcaption&gt;</code>, donde va el autor/a."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: `Vols un enllaç que salti a <code>&lt;h2 id="menja"&gt;</code>. Què hi poses?|Quieres un enlace que salte a <code>&lt;h2 id="come"&gt;</code>. ¿Qué pones?`,
          opts: ['<code>href="#menja"</code>|<code>href="#come"</code>', '<code>href="menja"</code>|<code>href="come"</code>', '<code>href="id=menja"</code>|<code>href="id=come"</code>'], a: 0 },
        { k: 'story', ph: 'missio', who: 'numi', scene: 'taller', title: 'De qui és aquesta foto?|¿De quién es esta foto?',
          t: "En Bit ha trobat en una web una foto preciosa d'una tortuga i l'ha posada a l'Animalari. Però… de qui és? Qui l'ha feta? Ens deixa fer-la servir? Avui aprendrem una cosa que fan totes les persones que creen webs amb cura: <b>respectar la feina dels altres</b> i <b>dir d'on traiem les coses</b>.|Bit ha encontrado en una web una foto preciosa de una tortuga y la ha puesto en el Animalario. Pero… ¿de quién es? ¿Quién la ha hecho? ¿Nos deja usarla? Hoy aprenderemos algo que hacen todas las personas que crean webs con cuidado: <b>respetar el trabajo de los demás</b> y <b>decir de dónde sacamos las cosas</b>." },
        { k: 'story', ph: 'missio', who: 'bit', t: "BIP… Jo pensava que, si una cosa és a internet, és de tothom. No és així?|BIP… Yo pensaba que, si una cosa está en internet, es de todo el mundo. ¿No es así?" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: "Drets d'autor|Derechos de autor", t: "Tot el que algú crea té un autor/a|Todo lo que alguien crea tiene un autor/a", anim: 'w3copy',
            x: "Una foto, un dibuix, un text, una cançó o un vídeo són de la persona que els ha creat. Els <span class='hl'>drets d'autor</span> fan que sigui ella qui decideix qui els pot copiar, fer servir o canviar. Que una imatge es vegi a internet <b>no vol dir</b> que la puguis agafar.|Una foto, un dibujo, un texto, una canción o un vídeo son de la persona que los ha creado. Los <span class='hl'>derechos de autor</span> hacen que sea ella quien decide quién puede copiarlos, usarlos o cambiarlos. Que una imagen se vea en internet <b>no quiere decir</b> que la puedas coger.",
            tip: "El símbol © recorda que una obra té autor/a. Però encara que no hi surti, l'obra també en té.|El símbolo © recuerda que una obra tiene autor/a. Pero aunque no aparezca, la obra también lo tiene." },
          { k: 'Què puc fer servir?|¿Qué puedo usar?', t: 'El semàfor de les imatges|El semáforo de las imágenes', pic: 'img/ment/atu.webp',
            x: "🟢 <b>Verd</b>: el que has fet tu, o el que t'han deixat fer servir (com els dibuixos de Numi d'aquest curs). 🟡 <b>Groc</b>: obres amb <b>llicència lliure</b>: l'autor/a deixa que tothom les faci servir si se'n compleixen les condicions, sovint dir-ne el nom. 🔴 <b>Vermell</b>: si no saps de qui és ni si es pot fer servir, no l'agafis: demana permís o busca'n una altra.|🟢 <b>Verde</b>: lo que has hecho tú, o lo que te han dejado usar (como los dibujos de Numi de este curso). 🟡 <b>Amarillo</b>: obras con <b>licencia libre</b>: el autor/a deja que todo el mundo las use si se cumplen las condiciones, a menudo decir su nombre. 🔴 <b>Rojo</b>: si no sabes de quién es ni si se puede usar, no la cojas: pide permiso o busca otra.",
            tip: "Quan fa molts anys que l'autor/a ha mort (a Espanya, en general, 70 anys), l'obra passa a ser de <b>domini públic</b> i tothom la pot fer servir.|Cuando hace muchos años que el autor/a ha muerto (en España, en general, 70 años), la obra pasa a ser de <b>dominio público</b> y todo el mundo la puede usar." },
          { k: 'Citar|Citar', t: "Digues sempre d'on ho has tret|Di siempre de dónde lo has sacado", anim: 'w3cite',
            x: "<span class='hl'>Citar la font</span> és dir d'on surt una imatge o una informació: <b>qui</b> l'ha feta, <b>què</b> és (el títol), <b>on</b> l'has trobada (amb un enllaç) i <b>quan</b> la vas consultar. Així respectes l'autor/a i qui et llegeix pot comprovar que és veritat.|<span class='hl'>Citar la fuente</span> es decir de dónde sale una imagen o una información: <b>quién</b> la ha hecho, <b>qué</b> es (el título), <b>dónde</b> la has encontrado (con un enlace) y <b>cuándo</b> la consultaste. Así respetas al autor/a y quien te lee puede comprobar que es verdad." },
          { k: '&lt;figure&gt;', t: 'Imatge i llegenda, juntes|Imagen y leyenda, juntas',
            media: { k: 'web', html: C(`<figure>
  <img src="img/tech/web/guineu.svg" alt="Una guineu taronja asseguda" width="140">
  <figcaption>La guineu de l'illa. Dibuix: Numi.</figcaption>
</figure>`, `<figure>
  <img src="img/tech/web/guineu.svg" alt="Un zorro naranja sentado" width="140">
  <figcaption>El zorro de la isla. Dibujo: Numi.</figcaption>
</figure>`) },
            x: "<code>&lt;figure&gt;</code> agrupa una imatge amb el seu text, i <code>&lt;figcaption&gt;</code> és la <b>llegenda</b>: explica la imatge i és el lloc ideal per dir-ne l'autor/a. Així el navegador (i els lectors de pantalla) saben que aquell text va amb aquella imatge.|<code>&lt;figure&gt;</code> agrupa una imagen con su texto, y <code>&lt;figcaption&gt;</code> es la <b>leyenda</b>: explica la imagen y es el lugar ideal para decir su autor/a. Así el navegador (y los lectores de pantalla) saben que ese texto va con esa imagen.",
            tip: "L'alt i la llegenda no són el mateix: l'alt descriu què es veu i la llegenda hi afegeix informació, com l'autor/a.|El alt y la leyenda no son lo mismo: el alt describe qué se ve y la leyenda añade información, como el autor/a." },
          { k: 'Compte!|¡Cuidado!', t: 'Amb les teves paraules|Con tus palabras', pic: 'img/ment/sin.webp',
            x: "Si copies un text sencer, no aprens res i el text no és teu. Llegeix dues o tres fonts, tanca-les i escriu el que has entès. Si vols fer servir una frase exacta, posa-la entre «cometes» i digues de qui és.|Si copias un texto entero, no aprendes nada y el texto no es tuyo. Lee dos o tres fuentes, ciérralas y escribe lo que has entendido. Si quieres usar una frase exacta, ponla entre «comillas» y di de quién es.",
            bad: "Copiar i enganxar un text d'una web com si fos teu.|Copiar y pegar un texto de una web como si fuera tuyo.", good: "Explicar-ho amb les teves paraules i posar la font al final.|Explicarlo con tus palabras y poner la fuente al final." }
        ] },
        { k: 'seq', ph: 'mans', q: "Ordena les línies d'una imatge amb llegenda.|Ordena las líneas de una imagen con leyenda.",
          items: ['<code>&lt;figure&gt;</code>|<code>&lt;figure&gt;</code>', '<code>&lt;img src="…" alt="…"&gt;</code>|<code>&lt;img src="…" alt="…"&gt;</code>', '<code>&lt;figcaption&gt;…&lt;/figcaption&gt;</code>|<code>&lt;figcaption&gt;…&lt;/figcaption&gt;</code>', '<code>&lt;/figure&gt;</code>|<code>&lt;/figure&gt;</code>'],
          ex: "La imatge i la llegenda van <b>dins</b> de <code>&lt;figure&gt;</code>. La llegenda pot anar abans o després de la imatge: on la posis, sortirà.|La imagen y la leyenda van <b>dentro</b> de <code>&lt;figure&gt;</code>. La leyenda puede ir antes o después de la imagen: donde la pongas, saldrá." },
        { k: 'unplug', ph: 'mans', ico: '🔍', title: 'Detectius de fonts|Detectives de fuentes', t: "Agafa un llibre de casa (de contes, de ciència, el que vulguis) i fes de detectiu/iva:|Coge un libro de casa (de cuentos, de ciencia, el que quieras) y haz de detective:",
          steps: ["Busca qui l'ha escrit i, si en té, qui n'ha fet les il·lustracions.|Busca quién lo ha escrito y, si tiene, quién ha hecho las ilustraciones.", "Busca l'editorial i l'any (normalment a les primeres pàgines).|Busca la editorial y el año (normalmente en las primeras páginas).",
            "Escriu la cita en un paper: <i>Autor/a. Títol. Editorial, any.</i>|Escribe la cita en un papel: <i>Autor/a. Título. Editorial, año.</i>", "Hi ha el símbol ©? Qui té els drets del llibre?|¿Está el símbolo ©? ¿Quién tiene los derechos del libro?"],
          tip: "Molts llibres de ciència també citen les seves fonts: mira si al final hi ha una llista de llibres (una bibliografia).|Muchos libros de ciencia también citan sus fuentes: mira si al final hay una lista de libros (una bibliografía)." },
        { k: 'wquiz', ph: 'prova', q: 'Quina vista prèvia fa aquest codi?|¿Qué vista previa hace este código?',
          code: { html: C(`<figure>
  <img src="img/tech/web/peix.svg" alt="Un peix taronja" width="70">
  <figcaption>Peix de l'escull. Dibuix: Numi.</figcaption>
</figure>`, `<figure>
  <img src="img/tech/web/peix.svg" alt="Un pez naranja" width="70">
  <figcaption>Pez del arrecife. Dibujo: Numi.</figcaption>
</figure>`) },
          opts: [{ html: C(`<figure style="margin:8px 0"><img src="img/tech/web/peix.svg" alt="" width="70"><figcaption>Peix de l'escull. Dibuix: Numi.</figcaption></figure>`, '<figure style="margin:8px 0"><img src="img/tech/web/peix.svg" alt="" width="70"><figcaption>Pez del arrecife. Dibujo: Numi.</figcaption></figure>') },
            { html: C(`<figure style="margin:8px 0"><figcaption>Peix de l'escull. Dibuix: Numi.</figcaption><img src="img/tech/web/peix.svg" alt="" width="70"></figure>`, '<figure style="margin:8px 0"><figcaption>Pez del arrecife. Dibujo: Numi.</figcaption><img src="img/tech/web/peix.svg" alt="" width="70"></figure>') },
            { html: '<figure style="margin:8px 0"><img src="img/tech/web/peix.svg" alt="" width="70"></figure>' }], a: 0,
          ex: "La llegenda surt on la poses: aquí va després de la imatge, i per això surt a sota.|La leyenda sale donde la pones: aquí va después de la imagen, y por eso sale debajo." },
        { k: 'wspot', ph: 'investiga', q: "Aquesta imatge té llegenda, però <b>una línia no cita bé la font</b>. Toca-la.|Esta imagen tiene leyenda, pero <b>una línea no cita bien la fuente</b>. Tócala.",
          html: C(`<figure>
  <img src="img/tech/web/papallona.svg" alt="Una papallona blava i rosa" width="140">
  <figcaption>Una papallona del jardí. Imatge: internet.</figcaption>
</figure>`, `<figure>
  <img src="img/tech/web/papallona.svg" alt="Una mariposa azul y rosa" width="140">
  <figcaption>Una mariposa del jardín. Imagen: internet.</figcaption>
</figure>`), bad: 3,
          ex: "«Internet» no és ningú: és on l'has trobada, però no qui l'ha feta. Cal dir l'autor/a (o la web, amb l'enllaç). Per exemple: «Dibuix: Numi».|«Internet» no es nadie: es donde la has encontrado, pero no quién la ha hecho. Hay que decir el autor/a (o la web, con el enlace). Por ejemplo: «Dibujo: Numi»." },
        { k: 'quiz', ph: 'investiga', q: 'Quina és la cita més completa?|¿Cuál es la cita más completa?',
          opts: ["Club de Naturalistes. «Les tortugues de l'illa». exemple.numi/tortugues (consultat el 3 d'octubre)|Club de Naturalistas. «Las tortugas de la isla». exemple.numi/tortugas (consultado el 3 de octubre)",
            "Ho he trobat a internet.|Lo he encontrado en internet.", "«Les tortugues de l'illa»|«Las tortugas de la isla»", "Una web de tortugues.|Una web de tortugas."], a: 0,
          ex: "Té les quatre parts: qui, què, on i quan.|Tiene las cuatro partes: quién, qué, dónde y cuándo." },
        { k: 'quiz', ph: 'investiga', q: "Has trobat un dibuix molt bonic en una web, però no diu de qui és ni si es pot fer servir. Què fas?|Has encontrado un dibujo muy bonito en una web, pero no dice de quién es ni si se puede usar. ¿Qué haces?",
          opts: ["No el faig servir: en busco un que es pugui fer servir o en faig un jo|No lo uso: busco uno que se pueda usar o hago uno yo", "El copio: si és a internet, és de tothom|Lo copio: si está en internet, es de todo el mundo", "El copio i hi poso el meu nom|Lo copio y pongo mi nombre"], a: 0,
          ex: "És el semàfor vermell: sense saber de qui és ni tenir permís, millor no fer-lo servir.|Es el semáforo rojo: sin saber de quién es ni tener permiso, mejor no usarlo." },
        { k: 'move', ph: 'pausa', secs: 30, t: "Semàfor en moviment! Imagina que el professor/a diu colors: 🟢 <b>verd</b>, camina al teu lloc; 🟡 <b>groc</b>, camina molt a poc a poc; 🔴 <b>vermell</b>, queda't quiet/a com una estàtua. Fes-ho tu sol/a: verd, groc, vermell… tres vegades!|¡Semáforo en movimiento! Imagina que el profesor/a dice colores: 🟢 <b>verde</b>, camina en tu sitio; 🟡 <b>amarillo</b>, camina muy despacio; 🔴 <b>rojo</b>, quédate quieto/a como una estatua. Hazlo tú solo/a: verde, amarillo, rojo… ¡tres veces!" },
        { k: 'web', ph: 'repte', url: 'animalari.numi/tortuga.html', q: "Converteix aquesta imatge i el seu text en una <code>&lt;figure&gt;</code> amb <code>&lt;figcaption&gt;</code>.|Convierte esta imagen y su texto en una <code>&lt;figure&gt;</code> con <code>&lt;figcaption&gt;</code>.",
          html: C(`<h1>La tortuga</h1>
<img src="img/tech/web/tortuga.svg" alt="Una tortuga verda caminant" width="180">
<p>Una tortuga de terra. Dibuix: Numi.</p>`, `<h1>La tortuga</h1>
<img src="img/tech/web/tortuga.svg" alt="Una tortuga verde caminando" width="180">
<p>Una tortuga de tierra. Dibujo: Numi.</p>`),
          checks: [{ k: 'in', t: 'img', p: 'figure', txt: 'La imatge és dins de <code>&lt;figure&gt;</code>|La imagen está dentro de <code>&lt;figure&gt;</code>' }, { k: 'in', t: 'figcaption', p: 'figure', txt: 'La llegenda <code>&lt;figcaption&gt;</code> és dins de la figura|La leyenda <code>&lt;figcaption&gt;</code> está dentro de la figura' },
            { k: 'tag', t: 'figcaption', text: 'Numi', txt: "La llegenda diu qui ha fet el dibuix|La leyenda dice quién ha hecho el dibujo" }, { k: 'notag', t: 'p', txt: 'El text ja no és un paràgraf solt|El texto ya no es un párrafo suelto' }, CLEAN],
          snips: ['<figure>|</figure>', '<figcaption>|</figcaption>'],
          sol: { html: C(`<h1>La tortuga</h1>
<figure>
  <img src="img/tech/web/tortuga.svg" alt="Una tortuga verda caminant" width="180">
  <figcaption>Una tortuga de terra. Dibuix: Numi.</figcaption>
</figure>`, `<h1>La tortuga</h1>
<figure>
  <img src="img/tech/web/tortuga.svg" alt="Una tortuga verde caminando" width="180">
  <figcaption>Una tortuga de tierra. Dibujo: Numi.</figcaption>
</figure>`) },
          hint: "Embolica la imatge i el text amb <code>&lt;figure&gt;</code> … <code>&lt;/figure&gt;</code>, i canvia el <code>&lt;p&gt;</code> per <code>&lt;figcaption&gt;</code>.|Envuelve la imagen y el texto con <code>&lt;figure&gt;</code> … <code>&lt;/figure&gt;</code>, y cambia el <code>&lt;p&gt;</code> por <code>&lt;figcaption&gt;</code>." },
        { k: 'web', ph: 'repte', url: 'animalari.numi/drac.html', q: "A aquesta figura li falten dues coses: l'<code>alt</code> de la imatge i, a la llegenda, <b>qui ha fet el dibuix</b> (Numi). Afegeix-les.|A esta figura le faltan dos cosas: el <code>alt</code> de la imagen y, en la leyenda, <b>quién ha hecho el dibujo</b> (Numi). Añádelas.",
          html: C(`<h1>El drac</h1>
<figure>
  <img src="img/tech/web/drac.svg" width="180">
  <figcaption>El drac, l'animal fantàstic de les llegendes.</figcaption>
</figure>`, `<h1>El dragón</h1>
<figure>
  <img src="img/tech/web/drac.svg" width="180">
  <figcaption>El dragón, el animal fantástico de las leyendas.</figcaption>
</figure>`),
          checks: [ALT(), { k: 'tag', t: 'figcaption', text: 'Numi', txt: 'La llegenda diu qui ha fet el dibuix (Numi)|La leyenda dice quién ha hecho el dibujo (Numi)' }, CLEAN],
          sol: { html: C(`<h1>El drac</h1>
<figure>
  <img src="img/tech/web/drac.svg" alt="Un drac verd amb ales i banyes" width="180">
  <figcaption>El drac, l'animal fantàstic de les llegendes. Dibuix: Numi.</figcaption>
</figure>`, `<h1>El dragón</h1>
<figure>
  <img src="img/tech/web/drac.svg" alt="Un dragón verde con alas y cuernos" width="180">
  <figcaption>El dragón, el animal fantástico de las leyendas. Dibujo: Numi.</figcaption>
</figure>`) },
          hint: "L'alt descriu què es veu; la llegenda acaba amb l'autor/a: «Dibuix: Numi».|El alt describe qué se ve; la leyenda termina con el autor/a: «Dibujo: Numi»." },
        { k: 'web', ph: 'repte', url: 'animalari.numi/gos.html', q: "Al final de la fitxa del gos, afegeix la secció <b>Fonts</b>: un <code>&lt;h2&gt;</code> i una llista amb <b>dos enllaços</b> a les webs (inventades) d'on has tret la informació. Les adreces són al comentari.|Al final de la ficha del perro, añade la sección <b>Fuentes</b>: un <code>&lt;h2&gt;</code> y una lista con <b>dos enlaces</b> a las webs (inventadas) de donde has sacado la información. Las direcciones están en el comentario.",
          html: C(`<h1>El gos</h1>
<figure>
  <img src="img/tech/web/gos.svg" alt="Un gos marró amb les orelles caigudes" width="150">
  <figcaption>Un gos de la masia. Dibuix: Numi.</figcaption>
</figure>
<p>Els gossos tenen un olfacte molt més fi que el nostre.</p>
<!-- Fonts: https://exemple.numi/gossos i https://exemple.numi/olfacte -->
`, `<h1>El perro</h1>
<figure>
  <img src="img/tech/web/gos.svg" alt="Un perro marrón con las orejas caídas" width="150">
  <figcaption>Un perro de la granja. Dibujo: Numi.</figcaption>
</figure>
<p>Los perros tienen un olfato mucho más fino que el nuestro.</p>
<!-- Fuentes: https://exemple.numi/perros y https://exemple.numi/olfato -->
`),
          checks: [{ k: 'tag', t: 'h2', txt: 'Un <code>&lt;h2&gt;</code> per a la secció de fonts|Un <code>&lt;h2&gt;</code> para la sección de fuentes' }, { k: 'order', a: 'p', b: 'h2', txt: 'Les fonts van al final|Las fuentes van al final' }, { k: 'in', t: 'a', p: 'li', min: 2, txt: 'Una llista amb 2 enllaços|Una lista con 2 enlaces' },
            { k: 'link', href: '/^https:\\/\\/exemple\\.numi\\/\\w+/', min: 2, txt: 'Els 2 enllaços porten a les adreces completes|Los 2 enlaces llevan a las direcciones completas' }, CLEAN],
          snips: ['<h2>|</h2>', '<ul>|</ul>', '<li><a href="|"></a></li>'],
          sol: { html: C(`<h1>El gos</h1>
<figure>
  <img src="img/tech/web/gos.svg" alt="Un gos marró amb les orelles caigudes" width="150">
  <figcaption>Un gos de la masia. Dibuix: Numi.</figcaption>
</figure>
<p>Els gossos tenen un olfacte molt més fi que el nostre.</p>
<h2>Fonts</h2>
<ul>
  <li><a href="https://exemple.numi/gossos">Club de Naturalistes: Els gossos</a></li>
  <li><a href="https://exemple.numi/olfacte">Com funciona l'olfacte</a></li>
</ul>`, `<h1>El perro</h1>
<figure>
  <img src="img/tech/web/gos.svg" alt="Un perro marrón con las orejas caídas" width="150">
  <figcaption>Un perro de la granja. Dibujo: Numi.</figcaption>
</figure>
<p>Los perros tienen un olfato mucho más fino que el nuestro.</p>
<h2>Fuentes</h2>
<ul>
  <li><a href="https://exemple.numi/perros">Club de Naturalistas: Los perros</a></li>
  <li><a href="https://exemple.numi/olfato">Cómo funciona el olfato</a></li>
</ul>`) },
          hint: "Primer el <code>&lt;h2&gt;</code>, després <code>&lt;ul&gt;</code> amb dos <code>&lt;li&gt;</code>. A cada <code>&lt;li&gt;</code>, un enllaç amb un text que digui de quina web és.|Primero el <code>&lt;h2&gt;</code>, después <code>&lt;ul&gt;</code> con dos <code>&lt;li&gt;</code>. En cada <code>&lt;li&gt;</code>, un enlace con un texto que diga de qué web es." },
        { k: 'web', ph: 'repte', url: 'animalari.numi/balena.html', q: "Aquesta figura té <b>tres errors</b>: la imatge no té alt, la llegenda no està tancada i la font no és un enllaç. Arregla'ls.|Esta figura tiene <b>tres errores</b>: la imagen no tiene alt, la leyenda no está cerrada y la fuente no es un enlace. Arréglalos.",
          html: C(`<h1>La balena blava</h1>
<figure>
  <img src="img/tech/web/balena.svg" width="200">
  <figcaption>Una balena blava. Dibuix: Numi.
</figure>
<p>És l'animal més gran que existeix.</p>
<p>Font: exemple.numi/balenes</p>`, `<h1>La ballena azul</h1>
<figure>
  <img src="img/tech/web/balena.svg" width="200">
  <figcaption>Una ballena azul. Dibujo: Numi.
</figure>
<p>Es el animal más grande que existe.</p>
<p>Fuente: exemple.numi/ballenas</p>`),
          checks: [ALT(), CLEAN, { k: 'link', href: '/^https:\\/\\/exemple\\.numi\\/(balenes|ballenas)\\/?$/', txt: 'La font és un enllaç amb l\'adreça completa|La fuente es un enlace con la dirección completa' }],
          sol: { html: C(`<h1>La balena blava</h1>
<figure>
  <img src="img/tech/web/balena.svg" alt="Una balena blava que treu aigua pel cap" width="200">
  <figcaption>Una balena blava. Dibuix: Numi.</figcaption>
</figure>
<p>És l'animal més gran que existeix.</p>
<p>Font: <a href="https://exemple.numi/balenes">Club de Naturalistes: Les balenes</a></p>`, `<h1>La ballena azul</h1>
<figure>
  <img src="img/tech/web/balena.svg" alt="Una ballena azul que echa agua por la cabeza" width="200">
  <figcaption>Una ballena azul. Dibujo: Numi.</figcaption>
</figure>
<p>Es el animal más grande que existe.</p>
<p>Fuente: <a href="https://exemple.numi/ballenas">Club de Naturalistas: Las ballenas</a></p>`) },
          hint: "Ves d'un en un: primer l'alt, després el <code>&lt;/figcaption&gt;</code> i al final converteix l'adreça en un enllaç <code>&lt;a href=\"https://…\"&gt;</code>.|Ve de uno en uno: primero el alt, después el <code>&lt;/figcaption&gt;</code> y al final convierte la dirección en un enlace <code>&lt;a href=\"https://…\"&gt;</code>." },
        { k: 'wcreate', ph: 'crea', name: "La notícia de l'Animalari|La noticia del Animalario", url: 'animalari.numi/noticia.html',
          q: "Escriu una petita <b>notícia</b> per a l'Animalari sobre un animal: un títol, la imatge en una <code>&lt;figure&gt;</code> amb llegenda i autor/a, un paràgraf <b>amb les teves paraules</b> i la secció <b>Fonts</b> amb almenys un enllaç.|Escribe una pequeña <b>noticia</b> para el Animalario sobre un animal: un título, la imagen en una <code>&lt;figure&gt;</code> con leyenda y autor/a, un párrafo <b>con tus palabras</b> y la sección <b>Fuentes</b> con al menos un enlace.",
          crit: ["Una <code>&lt;figure&gt;</code> amb imatge, alt i llegenda amb l'autor/a|Una <code>&lt;figure&gt;</code> con imagen, alt y leyenda con el autor/a", "Un paràgraf escrit amb les teves paraules|Un párrafo escrito con tus palabras", "La secció Fonts amb almenys un enllaç|La sección Fuentes con al menos un enlace"],
          html: LIST,
          checks: [{ k: 'text', t: 'h1', min: 3, txt: 'Un títol <code>&lt;h1&gt;</code>|Un título <code>&lt;h1&gt;</code>' }, { k: 'in', t: 'img', p: 'figure', txt: 'La imatge és dins d\'una <code>&lt;figure&gt;</code>|La imagen está dentro de una <code>&lt;figure&gt;</code>' }, ALT(),
            { k: 'text', t: 'figcaption', min: 10, txt: 'La figura té una llegenda <code>&lt;figcaption&gt;</code>|La figura tiene una leyenda <code>&lt;figcaption&gt;</code>' }, { k: 'text', t: 'p', min: 40, txt: 'Un paràgraf amb la notícia (almenys 40 lletres)|Un párrafo con la noticia (al menos 40 letras)' },
            { k: 'tag', t: 'h2', txt: 'Un <code>&lt;h2&gt;</code> per a les fonts|Un <code>&lt;h2&gt;</code> para las fuentes' }, { k: 'link', href: '/^https?:\\/\\/\\S+/', txt: 'Almenys un enllaç a una font|Al menos un enlace a una fuente' }, CLEAN],
          snips: ['<figure>|</figure>', ...SN_IMG, '<figcaption>|</figcaption>', '<p>|</p>', '<a href="|"></a>'],
          sol: { html: C(`<h1>Una papallona nova al jardí</h1>
<figure>
  <img src="img/tech/web/papallona.svg" alt="Una papallona amb les ales blaves i roses" width="160">
  <figcaption>La papallona del jardí de l'escola. Dibuix: Numi.</figcaption>
</figure>
<p>Aquesta setmana hem vist una papallona al jardí. Abans de ser papallona, era una eruga que es va tancar dins d'un capoll.</p>
<h2>Fonts</h2>
<ul>
  <li><a href="https://exemple.numi/papallones">Club de Naturalistes: Les papallones</a></li>
</ul>`, `<h1>Una mariposa nueva en el jardín</h1>
<figure>
  <img src="img/tech/web/papallona.svg" alt="Una mariposa con las alas azules y rosas" width="160">
  <figcaption>La mariposa del jardín de la escuela. Dibujo: Numi.</figcaption>
</figure>
<p>Esta semana hemos visto una mariposa en el jardín. Antes de ser mariposa, era una oruga que se encerró dentro de un capullo.</p>
<h2>Fuentes</h2>
<ul>
  <li><a href="https://exemple.numi/mariposas">Club de Naturalistas: Las mariposas</a></li>
</ul>`) },
          hint: "Fes-ho en quatre trossos: el títol, la figura, el paràgraf i les fonts. Comprova la llista de sota la vista prèvia després de cada tros.|Hazlo en cuatro trozos: el título, la figura, el párrafo y las fuentes. Comprueba la lista de debajo de la vista previa después de cada trozo." },
        { k: 'quiz', ph: 'tanca', q: 'Per a què serveix <code>&lt;figcaption&gt;</code>?|¿Para qué sirve <code>&lt;figcaption&gt;</code>?',
          opts: ["Per escriure la llegenda d'una imatge dins de <code>&lt;figure&gt;</code>|Para escribir la leyenda de una imagen dentro de <code>&lt;figure&gt;</code>", 'Per posar un marc de colors a la imatge|Para poner un marco de colores a la imagen', 'Per fer la imatge més petita|Para hacer la imagen más pequeña'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Una imatge es pot veure a internet. Vol dir que la pots posar a la teva web?|Una imagen se puede ver en internet. ¿Quiere decir que la puedes poner en tu web?",
          opts: ["No necessàriament: cal saber de qui és i si es pot fer servir|No necesariamente: hay que saber de quién es y si se puede usar", 'Sí, sempre|Sí, siempre', "Sí, si li canvio el nom al fitxer|Sí, si le cambio el nombre al archivo"], a: 0,
          ex: "La imatge continua sent de qui l'ha feta. Mira si té una llicència lliure o demana permís, i cita sempre l'autor/a.|La imagen sigue siendo de quien la ha hecho. Mira si tiene una licencia libre o pide permiso, y cita siempre al autor/a." },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* =========================== Sessió 4 · Projecte: la fitxa d'un animal =========================== */
    { id: 'w3-4', t: "Projecte: la fitxa d'un animal|Proyecto: la ficha de un animal", min: 45, proj: true, badge: 'w_fitxa',
      learn: ["Abans d'escriure codi, un esbós en paper diu què hi haurà i en quin ordre.|Antes de escribir código, un boceto en papel dice qué habrá y en qué orden.",
        "Una fitxa completa té títol, imatge amb alt i llegenda, dades en una llista, seccions amb índex i fonts.|Una ficha completa tiene título, imagen con alt y leyenda, datos en una lista, secciones con índice y fuentes.",
        "Revisar la pàgina amb una llista (alt, enllaços, títols, fonts) és part de la feina.|Revisar la página con una lista (alt, enlaces, títulos, fuentes) es parte del trabajo."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "On poses qui ha fet un dibuix que surt a la teva web?|¿Dónde pones quién ha hecho un dibujo que sale en tu web?",
          opts: ["A la llegenda, dins de <code>&lt;figcaption&gt;</code>|En la leyenda, dentro de <code>&lt;figcaption&gt;</code>", "A l'atribut <code>src</code>|En el atributo <code>src</code>", 'Enlloc: no cal|En ningún sitio: no hace falta'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: "Quina etiqueta marca una paraula com a <b>important</b> (i es veu en negreta)?|¿Qué etiqueta marca una palabra como <b>importante</b> (y se ve en negrita)?",
          opts: ['<code>&lt;strong&gt;</code>|<code>&lt;strong&gt;</code>', '<code>&lt;img&gt;</code>|<code>&lt;img&gt;</code>', '<code>&lt;a&gt;</code>|<code>&lt;a&gt;</code>'], a: 0, ex: "Ho vas aprendre a la unitat 2. Avui el farem servir per a les dades de la fitxa.|Lo aprendiste en la unidad 2. Hoy lo usaremos para los datos de la ficha." },
        { k: 'story', ph: 'missio', who: 'both', scene: 'moll', title: "L'Animalari obre les portes!|¡El Animalario abre sus puertas!",
          t: "Gran dia: l'Animalari ja es pot visitar! El club necessita una fitxa per a cada animal de l'illa, i tu en faràs una de <b>completa</b>. Hi posaràs tot el que has après: una imatge amb un bon <b>alt</b>, una <b>llegenda</b> amb l'autor/a, les <b>dades</b> en una llista, un <b>índex</b> amb enllaços interns i les <b>fonts</b>.|Gran día: ¡el Animalario ya se puede visitar! El club necesita una ficha para cada animal de la isla, y tú harás una <b>completa</b>. Pondrás todo lo que has aprendido: una imagen con un buen <b>alt</b>, una <b>leyenda</b> con el autor/a, los <b>datos</b> en una lista, un <b>índice</b> con enlaces internos y las <b>fuentes</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Planificar|Planificar', t: "Primer l'esbós, després el codi|Primero el boceto, después el código", anim: 'w3plan',
            x: "Les persones que dissenyen webs no comencen escrivint codi: primer fan un <span class='hl'>esbós</span>, un dibuix ràpid de què hi haurà i en quin ordre. Una bona fitxa té: el <b>nom</b> (h1), la <b>imatge amb llegenda</b>, un <b>índex</b>, les <b>dades</b>, les <b>seccions</b> i les <b>fonts</b> al final.|Las personas que diseñan webs no empiezan escribiendo código: primero hacen un <span class='hl'>boceto</span>, un dibujo rápido de qué habrá y en qué orden. Una buena ficha tiene: el <b>nombre</b> (h1), la <b>imagen con leyenda</b>, un <b>índice</b>, los <b>datos</b>, las <b>secciones</b> y las <b>fuentes</b> al final.",
            tip: "A l'esbós, les imatges es dibuixen com un rectangle amb una creu a dins.|En el boceto, las imágenes se dibujan como un rectángulo con una cruz dentro." },
          { k: 'Les dades|Los datos', t: 'Dades curtes en una llista|Datos cortos en una lista',
            media: { k: 'web', html: C(`<ul>
  <li><strong>Menja:</strong> fruita i llavors</li>
  <li><strong>Viu:</strong> als boscos càlids</li>
  <li><strong>Curiositat:</strong> pot imitar sons</li>
</ul>`, `<ul>
  <li><strong>Come:</strong> fruta y semillas</li>
  <li><strong>Vive:</strong> en bosques cálidos</li>
  <li><strong>Curiosidad:</strong> puede imitar sonidos</li>
</ul>`) },
            x: "Les dades ràpides (què menja, on viu, una curiositat) es llegeixen millor en una <b>llista</b>. Amb <code>&lt;strong&gt;</code> marques el nom de cada dada: és la part important i es veu en negreta.|Los datos rápidos (qué come, dónde vive, una curiosidad) se leen mejor en una <b>lista</b>. Con <code>&lt;strong&gt;</code> marcas el nombre de cada dato: es la parte importante y se ve en negrita." },
          { k: 'Revisar|Revisar', t: 'La llista de revisió|La lista de revisión', pic: 'img/ment/lli.webp',
            x: "Abans de donar una web per acabada, es revisa. Repassa: totes les imatges tenen un <b>alt</b> que les descriu? Els <b>enllaços</b> porten on diuen? Els títols van en ordre (primer h1, després h2)? Hi ha les <b>fonts</b>? Està escrit amb <b>les teves paraules</b>?|Antes de dar una web por terminada, se revisa. Repasa: ¿todas las imágenes tienen un <b>alt</b> que las describe? ¿Los <b>enlaces</b> llevan adonde dicen? ¿Los títulos van en orden (primero h1, después h2)? ¿Están las <b>fuentes</b>? ¿Está escrito con <b>tus palabras</b>?",
            bad: "Donar-la per acabada perquè «es veu bé».|Darla por terminada porque «se ve bien».", good: "Revisar-la amb la llista, punt per punt.|Revisarla con la lista, punto por punto." }
        ] },
        { k: 'seq', ph: 'mans', q: "Ordena les parts de la fitxa tal com les farem avui, de dalt a baix.|Ordena las partes de la ficha tal como las haremos hoy, de arriba abajo.",
          items: ["El nom de l'animal (<code>&lt;h1&gt;</code>)|El nombre del animal (<code>&lt;h1&gt;</code>)", "L'índex amb enllaços interns|El índice con enlaces internos", "La imatge amb la llegenda (<code>&lt;figure&gt;</code>)|La imagen con la leyenda (<code>&lt;figure&gt;</code>)",
            "Les dades ràpides (<code>&lt;ul&gt;</code>)|Los datos rápidos (<code>&lt;ul&gt;</code>)", "Les seccions (<code>&lt;h2 id&gt;</code>)|Las secciones (<code>&lt;h2 id&gt;</code>)", 'Les fonts|Las fuentes'],
          ex: "Primer el que identifica la fitxa (nom, índex i imatge), després el contingut i, al final, d'on l'has tret.|Primero lo que identifica la ficha (nombre, índice e imagen), después el contenido y, al final, de dónde lo has sacado." },
        { k: 'unplug', ph: 'mans', ico: '✏', title: "L'esbós de la fitxa|El boceto de la ficha", t: "Abans d'escriure codi, agafa un full i un llapis:|Antes de escribir código, coge una hoja y un lápiz:",
          steps: ["Tria l'animal de la teva fitxa (mira quines imatges hi ha a la llista del codi).|Elige el animal de tu ficha (mira qué imágenes hay en la lista del código).",
            "Dibuixa l'esbós: un rectangle per a cada part, en ordre (nom, índex, imatge, dades, seccions, fonts).|Dibuja el boceto: un rectángulo para cada parte, en orden (nombre, índice, imagen, datos, secciones, fuentes).",
            "Al costat de la imatge, escriu l'<b>alt</b> que hi posaràs.|Al lado de la imagen, escribe el <b>alt</b> que pondrás.",
            "Pensa dues seccions i tres dades curtes. Si n'has de buscar alguna, apunta d'on la treus.|Piensa dos secciones y tres datos cortos. Si tienes que buscar alguno, apunta de dónde lo sacas."],
          tip: "Apunta les fonts mentre busques: al final costa molt recordar on ho havies llegit.|Apunta las fuentes mientras buscas: al final cuesta mucho recordar dónde lo habías leído." },
        { k: 'web', ph: 'repte', url: 'animalari.numi/lloro.html', q: "<b>Peça 1:</b> el capçal. Escriu el nom de l'animal en un <code>&lt;h1&gt;</code> i, a sota, una <code>&lt;figure&gt;</code> amb la imatge del lloro (<code>img/tech/web/lloro.svg</code>), el seu alt i una llegenda amb l'autor/a (Numi).|<b>Pieza 1:</b> la cabecera. Escribe el nombre del animal en un <code>&lt;h1&gt;</code> y, debajo, una <code>&lt;figure&gt;</code> con la imagen del loro (<code>img/tech/web/lloro.svg</code>), su alt y una leyenda con el autor/a (Numi).",
          html: C(`<!-- La fitxa del lloro -->
`, `<!-- La ficha del loro -->
`),
          checks: [{ k: 'text', t: 'h1', min: 3, txt: 'Un <code>&lt;h1&gt;</code> amb el nom|Un <code>&lt;h1&gt;</code> con el nombre' }, { k: 'order', a: 'h1', b: 'figure', txt: 'La figura va després del títol|La figura va después del título' }, { k: 'in', t: 'img', p: 'figure', txt: 'La imatge és dins de <code>&lt;figure&gt;</code>|La imagen está dentro de <code>&lt;figure&gt;</code>' },
            { k: 'attr', t: 'img', a: 'src', v: '/lloro\\.svg$/', txt: 'És la imatge del lloro|Es la imagen del loro' }, ALT(), { k: 'tag', t: 'figcaption', text: 'Numi', txt: 'La llegenda diu qui ha fet el dibuix|La leyenda dice quién ha hecho el dibujo' }, CLEAN],
          snips: ['<h1>|</h1>', '<figure>|</figure>', ...SN_IMG, '<figcaption>|</figcaption>'],
          sol: { html: C(`<!-- La fitxa del lloro -->
<h1>El lloro</h1>
<figure>
  <img src="img/tech/web/lloro.svg" alt="Un lloro vermell, verd i blau posat en una branca" width="200">
  <figcaption>Un lloro a la selva. Dibuix: Numi.</figcaption>
</figure>`, `<!-- La ficha del loro -->
<h1>El loro</h1>
<figure>
  <img src="img/tech/web/lloro.svg" alt="Un loro rojo, verde y azul posado en una rama" width="200">
  <figcaption>Un loro en la selva. Dibujo: Numi.</figcaption>
</figure>`) },
          hint: "És com a la sessió anterior: <code>&lt;figure&gt;</code>, a dins la imatge i la <code>&lt;figcaption&gt;</code>, i tanca la figura.|Es como en la sesión anterior: <code>&lt;figure&gt;</code>, dentro la imagen y la <code>&lt;figcaption&gt;</code>, y cierra la figura." },
        { k: 'web', ph: 'repte', url: 'animalari.numi/lloro.html', q: "<b>Peça 2:</b> les dades ràpides. Sota la figura, afegeix una llista amb <b>tres dades</b> del lloro i el nom de cada dada en <code>&lt;strong&gt;</code>.|<b>Pieza 2:</b> los datos rápidos. Debajo de la figura, añade una lista con <b>tres datos</b> del loro y el nombre de cada dato en <code>&lt;strong&gt;</code>.",
          html: C(`<h1>El lloro</h1>
<figure>
  <img src="img/tech/web/lloro.svg" alt="Un lloro vermell, verd i blau posat en una branca" width="200">
  <figcaption>Un lloro a la selva. Dibuix: Numi.</figcaption>
</figure>
<!-- Les dades: Menja fruita i llavors · Viu als boscos càlids · Pot imitar sons -->
`, `<h1>El loro</h1>
<figure>
  <img src="img/tech/web/lloro.svg" alt="Un loro rojo, verde y azul posado en una rama" width="200">
  <figcaption>Un loro en la selva. Dibujo: Numi.</figcaption>
</figure>
<!-- Los datos: Come fruta y semillas · Vive en bosques cálidos · Puede imitar sonidos -->
`),
          checks: [{ k: 'in', t: 'li', p: 'ul', min: 3, txt: 'Una llista <code>&lt;ul&gt;</code> amb 3 dades|Una lista <code>&lt;ul&gt;</code> con 3 datos' }, { k: 'in', t: 'strong', p: 'li', min: 3, txt: 'Cada dada té el nom en <code>&lt;strong&gt;</code>|Cada dato tiene el nombre en <code>&lt;strong&gt;</code>' }, { k: 'order', a: 'figure', b: 'ul', txt: 'La llista va després de la figura|La lista va después de la figura' }, CLEAN],
          snips: ['<ul>|</ul>', '<li>|</li>', '<strong>|</strong>'],
          sol: { html: C(`<h1>El lloro</h1>
<figure>
  <img src="img/tech/web/lloro.svg" alt="Un lloro vermell, verd i blau posat en una branca" width="200">
  <figcaption>Un lloro a la selva. Dibuix: Numi.</figcaption>
</figure>
<ul>
  <li><strong>Menja:</strong> fruita i llavors</li>
  <li><strong>Viu:</strong> als boscos càlids</li>
  <li><strong>Curiositat:</strong> pot imitar sons</li>
</ul>`, `<h1>El loro</h1>
<figure>
  <img src="img/tech/web/lloro.svg" alt="Un loro rojo, verde y azul posado en una rama" width="200">
  <figcaption>Un loro en la selva. Dibujo: Numi.</figcaption>
</figure>
<ul>
  <li><strong>Come:</strong> fruta y semillas</li>
  <li><strong>Vive:</strong> en bosques cálidos</li>
  <li><strong>Curiosidad:</strong> puede imitar sonidos</li>
</ul>`) },
          hint: "Cada dada és un <code>&lt;li&gt;</code>. Dins, primer el nom en negreta, <code>&lt;strong&gt;Menja:&lt;/strong&gt;</code>, i després la dada.|Cada dato es un <code>&lt;li&gt;</code>. Dentro, primero el nombre en negrita, <code>&lt;strong&gt;Come:&lt;/strong&gt;</code>, y después el dato." },
        { k: 'move', ph: 'pausa', secs: 30, t: "Fes de lloro! Mou el cap a un costat i a l'altre, obre les ales (els braços) i bat-les deu vegades. Després fes de mussol: queda't quiet/a i gira el cap a poc a poc a la dreta i a l'esquerra.|¡Haz de loro! Mueve la cabeza a un lado y al otro, abre las alas (los brazos) y bátelas diez veces. Después haz de búho: quédate quieto/a y gira la cabeza despacio a la derecha y a la izquierda." },
        { k: 'web', ph: 'repte', url: 'animalari.numi/lloro.html', q: "<b>Peça 3:</b> dues seccions amb <code>&lt;h2 id=\"…\"&gt;</code> i un paràgraf cadascuna, i l'<b>índex</b> a dalt, sota el títol, que hi salti.|<b>Pieza 3:</b> dos secciones con <code>&lt;h2 id=\"…\"&gt;</code> y un párrafo cada una, y el <b>índice</b> arriba, debajo del título, que salte hasta ellas.",
          html: C(`<h1>El lloro</h1>
<!-- L'índex -->

<figure>
  <img src="img/tech/web/lloro.svg" alt="Un lloro vermell, verd i blau posat en una branca" width="200">
  <figcaption>Un lloro a la selva. Dibuix: Numi.</figcaption>
</figure>
<!-- Les seccions: On viu (la majoria de lloros viuen en boscos de llocs càlids)
     i Què menja (fruita i llavors; amb el bec fort obre closques dures) -->
`, `<h1>El loro</h1>
<!-- El índice -->

<figure>
  <img src="img/tech/web/lloro.svg" alt="Un loro rojo, verde y azul posado en una rama" width="200">
  <figcaption>Un loro en la selva. Dibujo: Numi.</figcaption>
</figure>
<!-- Las secciones: Dónde vive (la mayoría de loros viven en bosques de lugares cálidos)
     y Qué come (fruta y semillas; con el pico fuerte abre cáscaras duras) -->
`),
          checks: [{ k: 'attr', t: 'h2', a: 'id', min: 2, txt: 'Dues seccions <code>&lt;h2&gt;</code> amb <code>id</code>|Dos secciones <code>&lt;h2&gt;</code> con <code>id</code>' }, { k: 'tag', t: 'p', min: 3, txt: 'Un paràgraf a cada secció (i l\'índex)|Un párrafo en cada sección (y el índice)' },
            { k: 'link', href: '/^#./', min: 2, txt: "Un índex amb 2 enllaços interns|Un índice con 2 enlaces internos" }, { k: 'order', a: 'a', b: 'h2', txt: "L'índex va abans de les seccions|El índice va antes de las secciones" }, CLEAN],
          snips: ['<a href="#|"></a>', '<h2 id="|"></h2>', '<p>|</p>'],
          sol: { html: C(`<h1>El lloro</h1>
<p><a href="#on-viu">On viu</a> · <a href="#menja">Què menja</a></p>
<figure>
  <img src="img/tech/web/lloro.svg" alt="Un lloro vermell, verd i blau posat en una branca" width="200">
  <figcaption>Un lloro a la selva. Dibuix: Numi.</figcaption>
</figure>
<h2 id="on-viu">On viu</h2>
<p>La majoria de lloros viuen en boscos de llocs càlids.</p>
<h2 id="menja">Què menja</h2>
<p>Menja fruita i llavors, i amb el bec fort obre closques dures.</p>`, `<h1>El loro</h1>
<p><a href="#donde-vive">Dónde vive</a> · <a href="#come">Qué come</a></p>
<figure>
  <img src="img/tech/web/lloro.svg" alt="Un loro rojo, verde y azul posado en una rama" width="200">
  <figcaption>Un loro en la selva. Dibujo: Numi.</figcaption>
</figure>
<h2 id="donde-vive">Dónde vive</h2>
<p>La mayoría de loros viven en bosques de lugares cálidos.</p>
<h2 id="come">Qué come</h2>
<p>Come fruta y semillas, y con el pico fuerte abre cáscaras duras.</p>`) },
          hint: "Escriu primer les seccions amb el seu <code>id</code>. Després, a l'índex, fes un enllaç <code>href=\"#…\"</code> amb el mateix nom per a cada secció.|Escribe primero las secciones con su <code>id</code>. Después, en el índice, haz un enlace <code>href=\"#…\"</code> con el mismo nombre para cada sección." },
        { k: 'wspot', ph: 'investiga', q: "En Bit ha revisat la seva fitxa i hi ha trobat un problema d'<b>accessibilitat</b>. Toca la línia.|Bit ha revisado su ficha y ha encontrado un problema de <b>accesibilidad</b>. Toca la línea.",
          html: C(`<h1>La papallona</h1>
<p><a href="#menja">Què menja</a></p>
<figure>
  <img src="img/tech/web/papallona.svg" alt="imatge" width="160">
  <figcaption>Papallona del jardí. Dibuix: Numi.</figcaption>
</figure>
<h2 id="menja">Què menja</h2>`, `<h1>La mariposa</h1>
<p><a href="#come">Qué come</a></p>
<figure>
  <img src="img/tech/web/papallona.svg" alt="imagen" width="160">
  <figcaption>Mariposa del jardín. Dibujo: Numi.</figcaption>
</figure>
<h2 id="come">Qué come</h2>`), bad: 4,
          ex: "<code>alt=\"imatge\"</code> no descriu res: un lector de pantalla diria només «imatge». Millor: «Una papallona amb les ales blaves i roses».|<code>alt=\"imagen\"</code> no describe nada: un lector de pantalla diría solo «imagen». Mejor: «Una mariposa con las alas azules y rosas»." },
        { k: 'web', ph: 'repte', url: 'animalari.numi/guineu.html', q: "Revisa la fitxa de la guineu amb la llista de revisió: hi ha <b>tres problemes</b> (una imatge, un enllaç de l'índex i una font). Arregla'ls.|Revisa la ficha del zorro con la lista de revisión: hay <b>tres problemas</b> (una imagen, un enlace del índice y una fuente). Arréglalos.",
          html: C(`<h1>La guineu</h1>
<p><a href="#on-viu">On viu</a> · <a href="#menja">Què menja</a></p>
<figure>
  <img src="img/tech/web/guineu.svg" width="160">
  <figcaption>Una guineu al bosc. Dibuix: Numi.</figcaption>
</figure>
<h2 id="on-viu">On viu</h2>
<p>Als boscos i als camps, i de vegades a prop dels pobles.</p>
<h2>Què menja</h2>
<p>Menja de tot: animals petits, fruita i insectes.</p>
<h2>Fonts</h2>
<ul>
  <li><a href="exemple.numi/guineus">Club de Naturalistes: Les guineus</a></li>
</ul>`, `<h1>El zorro</h1>
<p><a href="#donde-vive">Dónde vive</a> · <a href="#come">Qué come</a></p>
<figure>
  <img src="img/tech/web/guineu.svg" width="160">
  <figcaption>Un zorro en el bosque. Dibujo: Numi.</figcaption>
</figure>
<h2 id="donde-vive">Dónde vive</h2>
<p>En los bosques y en los campos, y a veces cerca de los pueblos.</p>
<h2>Qué come</h2>
<p>Come de todo: animales pequeños, fruta e insectos.</p>
<h2>Fuentes</h2>
<ul>
  <li><a href="exemple.numi/zorros">Club de Naturalistas: Los zorros</a></li>
</ul>`),
          checks: [ALT(), { k: 'attr', t: 'h2', a: 'id', v: '/^(menja|come)$/', txt: "L'enllaç «Què menja» de l'índex té on saltar|El enlace «Qué come» del índice tiene adónde saltar" },
            { k: 'link', href: '/^https:\\/\\/exemple\\.numi\\/(guineus|zorros)\\/?$/', txt: 'La font té l\'adreça completa, amb <code>https://</code>|La fuente tiene la dirección completa, con <code>https://</code>' }, CLEAN],
          sol: { html: C(`<h1>La guineu</h1>
<p><a href="#on-viu">On viu</a> · <a href="#menja">Què menja</a></p>
<figure>
  <img src="img/tech/web/guineu.svg" alt="Una guineu taronja asseguda" width="160">
  <figcaption>Una guineu al bosc. Dibuix: Numi.</figcaption>
</figure>
<h2 id="on-viu">On viu</h2>
<p>Als boscos i als camps, i de vegades a prop dels pobles.</p>
<h2 id="menja">Què menja</h2>
<p>Menja de tot: animals petits, fruita i insectes.</p>
<h2>Fonts</h2>
<ul>
  <li><a href="https://exemple.numi/guineus">Club de Naturalistes: Les guineus</a></li>
</ul>`, `<h1>El zorro</h1>
<p><a href="#donde-vive">Dónde vive</a> · <a href="#come">Qué come</a></p>
<figure>
  <img src="img/tech/web/guineu.svg" alt="Un zorro naranja sentado" width="160">
  <figcaption>Un zorro en el bosque. Dibujo: Numi.</figcaption>
</figure>
<h2 id="donde-vive">Dónde vive</h2>
<p>En los bosques y en los campos, y a veces cerca de los pueblos.</p>
<h2 id="come">Qué come</h2>
<p>Come de todo: animales pequeños, fruta e insectos.</p>
<h2>Fuentes</h2>
<ul>
  <li><a href="https://exemple.numi/zorros">Club de Naturalistas: Los zorros</a></li>
</ul>`) },
          hint: "Ves punt per punt: la imatge té alt? Cada enllaç de l'índex té un <code>id</code> on saltar? La font comença per <code>https://</code>?|Ve punto por punto: ¿la imagen tiene alt? ¿Cada enlace del índice tiene un <code>id</code> adonde saltar? ¿La fuente empieza por <code>https://</code>?" },
        { k: 'wcreate', ph: 'crea', name: "La fitxa del meu animal|La ficha de mi animal", url: 'animalari.numi/fitxa.html',
          q: "<b>Projecte final de la unitat!</b> Fes la fitxa completa de l'animal del teu esbós. L'esquelet té un comentari per a cada part: omple'l. Pots tornar a llegir les peces del lloro si et cal.|<b>¡Proyecto final de la unidad!</b> Haz la ficha completa del animal de tu boceto. El esqueleto tiene un comentario para cada parte: rellénalo. Puedes volver a leer las piezas del loro si lo necesitas.",
          crit: ["Títol, índex i una <code>&lt;figure&gt;</code> amb imatge, alt i llegenda amb l'autor/a|Título, índice y una <code>&lt;figure&gt;</code> con imagen, alt y leyenda con el autor/a", "Tres dades en una llista, amb <code>&lt;strong&gt;</code>|Tres datos en una lista, con <code>&lt;strong&gt;</code>", "Dues seccions amb <code>id</code>, escrites amb les teves paraules|Dos secciones con <code>id</code>, escritas con tus palabras", "Les fonts al final, amb enllaç|Las fuentes al final, con enlace"],
          html: C(`<!-- 1. El nom de l'animal: <h1> -->

<!-- 2. L'índex: enllaços que comencin per # -->

<!-- 3. La imatge: <figure> amb <img> (src, alt i width) i <figcaption> amb l'autor/a
     Imatges (img/tech/web/): balena.svg drac.svg gat.svg gos.svg guineu.svg
     lloro.svg ocell.svg papallona.svg peix.svg tortuga.svg
     i (img/ic/): owl.webp lion.webp octopus.webp rabbit.webp eagle.webp -->

<!-- 4. Les dades ràpides: <ul> amb tres <li> i <strong> -->

<!-- 5. Dues seccions: <h2 id="..."> i un paràgraf amb les teves paraules -->

<!-- 6. Les fonts: <h2> i enllaços a les webs o llibres on ho has trobat -->
`, `<!-- 1. El nombre del animal: <h1> -->

<!-- 2. El índice: enlaces que empiecen por # -->

<!-- 3. La imagen: <figure> con <img> (src, alt y width) y <figcaption> con el autor/a
     Imágenes (img/tech/web/): balena.svg drac.svg gat.svg gos.svg guineu.svg
     lloro.svg ocell.svg papallona.svg peix.svg tortuga.svg
     y (img/ic/): owl.webp lion.webp octopus.webp rabbit.webp eagle.webp -->

<!-- 4. Los datos rápidos: <ul> con tres <li> y <strong> -->

<!-- 5. Dos secciones: <h2 id="..."> y un párrafo con tus palabras -->

<!-- 6. Las fuentes: <h2> y enlaces a las webs o libros donde lo has encontrado -->
`),
          checks: [{ k: 'text', t: 'h1', min: 3, txt: "Un <code>&lt;h1&gt;</code> amb el nom de l'animal|Un <code>&lt;h1&gt;</code> con el nombre del animal" }, { k: 'link', href: '/^#./', min: 2, txt: 'Un índex amb almenys 2 enllaços interns|Un índice con al menos 2 enlaces internos' },
            { k: 'in', t: 'img', p: 'figure', txt: 'La imatge és dins d\'una <code>&lt;figure&gt;</code>|La imagen está dentro de una <code>&lt;figure&gt;</code>' }, ALT(), { k: 'attr', t: 'img', a: 'width', v: '/^\\d+$/', txt: 'La imatge té <code>width</code>|La imagen tiene <code>width</code>' },
            { k: 'text', t: 'figcaption', min: 10, txt: 'Una llegenda <code>&lt;figcaption&gt;</code> amb l\'autor/a|Una leyenda <code>&lt;figcaption&gt;</code> con el autor/a' }, { k: 'in', t: 'strong', p: 'li', min: 3, txt: 'Tres dades en una llista, amb <code>&lt;strong&gt;</code>|Tres datos en una lista, con <code>&lt;strong&gt;</code>' },
            { k: 'attr', t: 'h2', a: 'id', min: 2, txt: 'Dues seccions <code>&lt;h2&gt;</code> amb <code>id</code>|Dos secciones <code>&lt;h2&gt;</code> con <code>id</code>' }, { k: 'text', t: 'p', min: 30, txt: 'Un paràgraf escrit per tu (almenys 30 lletres)|Un párrafo escrito por ti (al menos 30 letras)' },
            { k: 'link', href: '/^https?:\\/\\/\\S+/', txt: 'Una font amb enllaç a una web|Una fuente con enlace a una web' }, CLEAN],
          snips: ['<h1>|</h1>', '<a href="#|"></a>', '<figure>|</figure>', ...SN_IMG, '<figcaption>|</figcaption>', '<li><strong>|</strong></li>', '<h2 id="|"></h2>', '<p>|</p>'],
          sol: { html: LLORO },
          hint: "Ves comentari per comentari i mira la llista de comprovacions després de cada part. Si et perds, recorda les tres peces del lloro.|Ve comentario por comentario y mira la lista de comprobaciones después de cada parte. Si te pierdes, recuerda las tres piezas del loro." },
        { k: 'unplug', ph: 'crea', ico: '🤝', title: 'Revisió en parella|Revisión en pareja', t: "Ensenya la fitxa a un company/a o a algú de casa i demana-li que la revisi amb aquesta llista:|Enseña la ficha a un compañero/a o a alguien de casa y pídele que la revise con esta lista:",
          steps: ["Si tanca els ulls i li llegeixes l'alt, s'imagina la imatge?|Si cierra los ojos y le lees el alt, ¿se imagina la imagen?", "Els enllaços de l'índex salten a la secció bona?|¿Los enlaces del índice saltan a la sección buena?",
            "La imatge té llegenda amb l'autor/a?|¿La imagen tiene leyenda con el autor/a?", "Hi ha les fonts al final? Està escrita amb les teves paraules?|¿Están las fuentes al final? ¿Está escrita con tus palabras?"],
          tip: "Qui revisa diu primer una cosa que li agrada i després una que milloraria.|Quien revisa dice primero algo que le gusta y después algo que mejoraría." },
        { k: 'quiz', ph: 'tanca', q: "Per què és important que les imatges de la fitxa tinguin un bon <code>alt</code>?|¿Por qué es importante que las imágenes de la ficha tengan un buen <code>alt</code>?",
          opts: ["Perquè les persones que fan servir un lector de pantalla també sàpiguen què hi ha|Para que las personas que usan un lector de pantalla también sepan qué hay", 'Perquè la imatge carregui més de pressa|Para que la imagen cargue más deprisa', 'Perquè surti més gran|Para que salga más grande'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Què no pot faltar a la secció <b>Fonts</b>?|¿Qué no puede faltar en la sección <b>Fuentes</b>?",
          opts: ["D'on has tret la informació, amb l'enllaç o el nom del llibre|De dónde has sacado la información, con el enlace o el nombre del libro", 'Una imatge més|Una imagen más', 'El teu color preferit|Tu color preferido'], a: 0,
          ex: "Les fonts permeten que qui llegeix la fitxa comprovi la informació i sàpiga de qui és.|Las fuentes permiten que quien lee la ficha compruebe la información y sepa de quién es." },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] });
})();

/* ── unitat 4 ── */
/* Tech Web · unitat 4 «CSS» (sessions w4-1 … w4-4)
   Donar estil a les pàgines: regles (selector { propietat: valor; }), colors (noms, hex i rgb), el contrast, les
   classes, els tipus i les mides de lletra, l'id i, al projecte, un pòster d'una activitat amb la paleta i la lletra
   triades per l'alumne/a. Errors típics treballats: el punt i coma, la clau que falta, el punt de la classe, la unitat px. */
Object.assign(TBADGE, {
  w_estil: { id: 'w_estil', ico: '🖍', n: 'Primeres regles|Primeras reglas', d: "Has escrit les teves primeres regles de CSS i has arreglat punts i comes i claus que faltaven.|Has escrito tus primeras reglas de CSS y has arreglado puntos y comas y llaves que faltaban." },
  w_color: { id: 'w_color', ico: '🎈', n: 'Mestre/a del color|Maestro/a del color', d: "Fas servir colors amb nom, en hex i en rgb(), amb bon contrast, i destaques coses amb classes.|Usas colores con nombre, en hex y en rgb(), con buen contraste, y destacas cosas con clases." },
  w_lletra: { id: 'w_lletra', ico: '✏', n: 'Tipògraf/a|Tipógrafo/a', d: "Tries la lletra i la mida amb criteri i saps quan cal una classe i quan un id.|Eliges la letra y el tamaño con criterio y sabes cuándo hace falta una clase y cuándo un id." },
  w_poster: { id: 'w_poster', ico: '🎉', n: 'Cartellista|Cartelista', d: "Has dissenyat i construït el teu pòster amb HTML i CSS: jerarquia, paleta i lletra pròpies.|Has diseñado y construido tu póster con HTML y CSS: jerarquía, paleta y letra propias." }
});
COURSE_UNITS[4] = (() => {
  const J = (...l) => l.join('\n');
  // valors que han de complir les comprovacions (expressions regulars del motor: «/…/», sense distingir majúscules)
  const GEN = '/(^|,)\\s*(serif|sans-serif|monospace|cursive)\\s*$/';   // la llista de lletres acaba en una família genèrica
  const PX16 = '/^(1[6-9]|[2-9][0-9])px$/', PX18 = '/^(1[89]|[2-9][0-9])px$/', PX30 = '/^[3-9][0-9]px$/';
  const HEX6 = '/^#[0-9a-f]{6}$/';
  const DARK3 = '/^#[0-3][0-9a-f][0-3][0-9a-f][0-3][0-9a-f]$/', DARK5 = '/^#[0-5][0-9a-f][0-5][0-9a-f][0-5][0-9a-f]$/';
  const LIGHT = '/^(#[c-f][0-9a-f][c-f][0-9a-f][c-f][0-9a-f]|white)$/';
  const sn = t => ({ t, tab: 'css' }), snh = t => ({ t, tab: 'html' });
  // la imatge té alt: { k: 'attr', t: 'img', a: 'alt' }. La «t» (el nom de l'etiqueta) va com a propietat no enumerable perquè
  // el validador de textos no la confongui amb un text sense traduir (el motor la llegeix igual: c.t)
  const ALT = txt => Object.defineProperty({ k: 'attr', a: 'alt', txt }, 't', { value: 'img', enumerable: false });
  // pàgines que es repeteixen
  const FESTA = J('<h1>Festa de la tardor</h1>', '<p>Dissabte, a la plaça del poble.</p>', '<ul>', '  <li>Castanyes</li>', '  <li>Música</li>', '  <li>Tallers</li>', '</ul>');
  const HORT = J("<h1>L'hort del poble</h1>", '<p>Cada dissabte plantem, reguem i collim.</p>', '<h2>Aquest mes</h2>', '<ul>', '  <li>Tomàquets</li>', '  <li>Enciams</li>', '  <li>Carbasses</li>', '</ul>');
  const REVISTA = J("<h1>Revista de l'escola</h1>", '<h2>Notícies de la tardor</h2>', "<p>Aquest mes hem estrenat l'hort i hem fet la cursa solidària.</p>", '<h2>Entrevista</h2>', '<p>Parlem amb la cuinera sobre el menú de cada dia.</p>');
  const REVISTA_ID = REVISTA.replace('<h1>', '<h1 id="portada">');
  const VOLCA = J('<h1>Taller de volcans</h1>', '<img src="img/ic/volcano.webp" width="120">', '<p>Dimecres 18, a les 5 de la tarda</p>', "<p>Al laboratori de l'escola</p>", '<p>Farem esclatar un volcà de bicarbonat!</p>');
  const VOLCA_OK = J('<h1 id="titol">Taller de volcans</h1>', '<img src="img/ic/volcano.webp" alt="Un volcà en erupció" width="120">', '<p class="info">Dimecres 18, a les 5 de la tarda</p>', "<p class=\"info\">Al laboratori de l'escola</p>", '<p>Farem esclatar un volcà de bicarbonat!</p>');
  // el pòster d'exemple (targeta de teoria del projecte)
  const NIT_H = J('<h1 id="titol">Nit d\'estrelles</h1>', '<p class="info">Divendres 20 · 21 h · Pati de l\'escola</p>', '<img src="img/ic/moon.webp" alt="La Lluna" width="90">', '<p>Mirarem la Lluna i els planetes amb telescopis.</p>', "<p class=\"nota\">Porta roba d'abric!</p>");
  const NIT_C = J('body {', '  font-family: sans-serif;', '  background-color: #14204A;', '  color: #FFFFFF;', '  text-align: center;', '}', '#titol {', '  font-family: serif;', '  font-size: 44px;', '  color: #FFD54A;', '}', '.info {', '  font-weight: bold;', '  font-size: 20px;', '}', '.nota {', '  font-style: italic;', '  color: #C5CAE9;', '}');
  return { t: 'CSS|CSS', d: 'Colors i lletres|Colores y letras', color: '#C2185B', s: [
    /* ---------- Sessió 1 · Donar estil ---------- */
    { id: 'w4-1', t: 'Donar estil|Dar estilo', min: 45, badge: 'w_estil',
      learn: ["L'HTML diu què hi ha a la pàgina i el CSS diu com es veu: colors, mides, lletres.|El HTML dice qué hay en la página y el CSS dice cómo se ve: colores, tamaños, letras.",
        'Una regla de CSS té un selector i, entre claus, declaracions «propietat: valor;».|Una regla de CSS tiene un selector y, entre llaves, declaraciones «propiedad: valor;».',
        "Cada declaració acaba amb punt i coma i cada regla es tanca amb }: si en falta un, el navegador no aplica l'estil.|Cada declaración acaba con punto y coma y cada regla se cierra con }: si falta uno, el navegador no aplica el estilo."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Recordes la unitat passada? Per què és important l'atribut <code>alt</code> d'una imatge?|¿Recuerdas la unidad pasada? ¿Por qué es importante el atributo <code>alt</code> de una imagen?",
          opts: ["Descriu la imatge per a qui no la pot veure i surt si la imatge no es carrega|Describe la imagen para quien no puede verla y sale si la imagen no se carga", 'Fa la imatge més gran|Hace la imagen más grande', 'Posa un marc de color a la imatge|Pone un marco de color a la imagen'], a: 0,
          ex: "Els lectors de pantalla llegeixen l'<code>alt</code> en veu alta. Avui veurem que l'aspecte (marcs, colors, mides) és cosa del CSS.|Los lectores de pantalla leen el <code>alt</code> en voz alta. Hoy veremos que el aspecto (marcos, colores, tamaños) es cosa del CSS." },
        { k: 'quiz', ph: 'recorda', q: 'I quina etiqueta fa un enllaç a una altra pàgina?|¿Y qué etiqueta hace un enlace a otra página?',
          opts: ['<code>&lt;a href="…"&gt;</code>|<code>&lt;a href="…"&gt;</code>', '<code>&lt;img src="…"&gt;</code>|<code>&lt;img src="…"&gt;</code>', '<code>&lt;p&gt;</code>|<code>&lt;p&gt;</code>'], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'poble', t: "Al poble preparen la <b>Festa de la tardor</b> i ens han demanat la web. L'HTML ja el tenim: títols, paràgrafs, llistes i imatges. Però… tot és negre sobre blanc i sembla un document avorrit! Avui aprendràs <b>CSS</b>, el llenguatge que dona estil a les webs.|En el pueblo preparan la <b>Fiesta de otoño</b> y nos han pedido la web. El HTML ya lo tenemos: títulos, párrafos, listas e imágenes. Pero… ¡todo es negro sobre blanco y parece un documento aburrido! Hoy aprenderás <b>CSS</b>, el lenguaje que da estilo a las webs." },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'poble', mood: 'think', t: "BIP! Jo volia el títol vermell i he escrit «posa'l vermell, si us plau». El navegador no m'ha fet ni cas! Diu que només entén <b>regles</b>, escrites d'una manera molt exacta…|¡BIP! Yo quería el título rojo y he escrito «ponlo rojo, por favor». ¡El navegador no me ha hecho ni caso! Dice que solo entiende <b>reglas</b>, escritas de una manera muy exacta…" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'HTML i CSS|HTML y CSS', t: 'Dos llenguatges, dues feines|Dos lenguajes, dos trabajos', anim: 'w4split',
            x: "L'<b>HTML</b> diu <b>què hi ha</b> a la pàgina: un títol, un paràgraf, una llista. El <span class='hl'>CSS</span> diu <b>com es veu</b>: de quin color, de quina mida, amb quina lletra. És com una casa: l'HTML són les parets i els mobles; el CSS, la pintura i la decoració.|El <b>HTML</b> dice <b>qué hay</b> en la página: un título, un párrafo, una lista. El <span class='hl'>CSS</span> dice <b>cómo se ve</b>: de qué color, de qué tamaño, con qué letra. Es como una casa: el HTML son las paredes y los muebles; el CSS, la pintura y la decoración.",
            tip: "Normalment el CSS va en un fitxer a part, <code>estil.css</code>, que l'HTML enllaça amb <code>&lt;link rel=\"stylesheet\" href=\"estil.css\"&gt;</code>. Al nostre editor ja està enllaçat: escriu-lo a la pestanya <b>CSS</b>.|Normalmente el CSS va en un archivo aparte, <code>estil.css</code>, que el HTML enlaza con <code>&lt;link rel=\"stylesheet\" href=\"estil.css\"&gt;</code>. En nuestro editor ya está enlazado: escríbelo en la pestaña <b>CSS</b>." },
          { k: 'La primera regla|La primera regla', t: 'Pinta el títol|Pinta el título', media: { k: 'web', html: J('<h1>Festa de la tardor</h1>', '<p>Dissabte, a la plaça del poble.</p>'), css: J('h1 {', '  color: crimson;', '}') },
            x: "Aquesta <span class='hl'>regla</span> diu: «a tots els <code>&lt;h1&gt;</code>, posa'ls el text de color carmesí». Mira el resultat: només canvia el títol, el paràgraf es queda igual.|Esta <span class='hl'>regla</span> dice: «a todos los <code>&lt;h1&gt;</code>, ponles el texto de color carmesí». Mira el resultado: solo cambia el título, el párrafo se queda igual." },
          { k: 'Les parts|Las partes', t: "Com s'escriu una regla|Cómo se escribe una regla", anim: 'w4rule',
            x: "Primer el <b>selector</b> (a qui va dirigida), després unes <b>claus</b> <code>{ }</code> i, a dins, les <b>declaracions</b>: una <b>propietat</b>, dos punts, un <b>valor</b> i un punt i coma. Els noms de propietats i de valors són en anglès: <code>color</code>, <code>red</code>, <code>center</code>…|Primero el <b>selector</b> (a quién va dirigida), después unas <b>llaves</b> <code>{ }</code> y, dentro, las <b>declaraciones</b>: una <b>propiedad</b>, dos puntos, un <b>valor</b> y un punto y coma. Los nombres de propiedades y de valores son en inglés: <code>color</code>, <code>red</code>, <code>center</code>…",
            tip: "Aprèn-te el patró: <code>selector { propietat: valor; }</code>. Totes les regles de CSS tenen aquesta forma.|Apréndete el patrón: <code>selector { propiedad: valor; }</code>. Todas las reglas de CSS tienen esta forma." },
          { k: 'Més d\'una|Más de una', t: 'Moltes declaracions, moltes regles|Muchas declaraciones, muchas reglas', media: { k: 'web', html: J('<h1>Festa de la tardor</h1>', '<p>Castanyes, música i tallers.</p>'), css: J('h1 {', '  color: crimson;', '  text-align: center;', '}', 'p {', '  color: dimgray;', '  font-size: 20px;', '}') },
            x: "Dins d'una regla hi pots posar totes les declaracions que vulguis, una a cada línia. I pots escriure una regla per a cada etiqueta. <code>text-align: center</code> centra el text i <code>font-size</code> canvia la mida de la lletra (en píxels, <code>px</code>).|Dentro de una regla puedes poner todas las declaraciones que quieras, una en cada línea. Y puedes escribir una regla para cada etiqueta. <code>text-align: center</code> centra el texto y <code>font-size</code> cambia el tamaño de la letra (en píxeles, <code>px</code>)." },
          { k: 'Compte!|¡Cuidado!', t: 'El punt i coma que falta|El punto y coma que falta', media: { k: 'web', html: '<h1>Festa de la tardor</h1>', css: J('h1 {', '  color: crimson', '  text-align: center;', '}') },
            x: "Aquí falta el <b>;</b> després de <code>crimson</code>. El navegador llegeix «crimson text-align: center» com si fos un sol valor, no l'entén i… no aplica cap de les dues declaracions! Per això el títol surt negre i a l'esquerra.|Aquí falta el <b>;</b> después de <code>crimson</code>. El navegador lee «crimson text-align: center» como si fuera un solo valor, no lo entiende y… ¡no aplica ninguna de las dos declaraciones! Por eso el título sale negro y a la izquierda.",
            bad: "Deixar-se el ; perquè «ja es veu que canvio de línia».|Olvidar el ; porque «ya se ve que cambio de línea».", good: "Acabar cada declaració amb ;, també l'última: així, si n'afegeixes una altra, no s'espatlla res.|Acabar cada declaración con ;, también la última: así, si añades otra, no se estropea nada." }
        ] },
        { k: 'seq', ph: 'mans', q: "Ordena les peces per escriure la regla que posa el títol de color blau marí (<code>navy</code>).|Ordena las piezas para escribir la regla que pone el título de color azul marino (<code>navy</code>).",
          items: ['<code>h1</code> · el selector|<code>h1</code> · el selector', '<code>{</code> · obre la regla|<code>{</code> · abre la regla', '<code>color</code> · la propietat|<code>color</code> · la propiedad', '<code>:</code> · dos punts|<code>:</code> · dos puntos', '<code>navy</code> · el valor|<code>navy</code> · el valor', '<code>;</code> · punt i coma|<code>;</code> · punto y coma', '<code>}</code> · tanca la regla|<code>}</code> · cierra la regla'],
          ex: "Ho has construït: <code>h1 { color: navy; }</code>.|Lo has construido: <code>h1 { color: navy; }</code>." },
        { k: 'unplug', ph: 'mans', ico: '🖍', title: 'Fes de navegador|Haz de navegador',
          t: "El navegador llegeix l'HTML i el CSS i <b>pinta</b> la pàgina. Ara el navegador ets tu, amb llapis de colors!|El navegador lee el HTML y el CSS y <b>pinta</b> la página. ¡Ahora el navegador eres tú, con lápices de colores!",
          steps: ["Agafa la fitxa «Fes de navegador»: cada exercici té una mica d'HTML i unes regles de CSS.|Coge la ficha «Haz de navegador»: cada ejercicio tiene un poco de HTML y unas reglas de CSS.",
            "Llegeix cada regla: el selector et diu <b>què</b> has de pintar i les declaracions, <b>com</b>.|Lee cada regla: el selector te dice <b>qué</b> tienes que pintar y las declaraciones, <b>cómo</b>.",
            "Dibuixa i pinta el resultat al requadre. Fes només el que diuen les regles: un navegador no s'inventa res.|Dibuja y pinta el resultado en el recuadro. Haz solo lo que dicen las reglas: un navegador no se inventa nada.",
            "Compara-ho amb el company/a: si els dibuixos són diferents, qui ha llegit malament una regla?|Compáralo con el compañero/a: si los dibujos son diferentes, ¿quién ha leído mal una regla?"],
          tip: "Hi ha una regla amb un error amagat. Si una declaració està mal escrita, el navegador no l'aplica: tu tampoc!|Hay una regla con un error escondido. Si una declaración está mal escrita, el navegador no la aplica: ¡tú tampoco!" },
        { k: 'wquiz', ph: 'prova', q: 'Aquest CSS, com deixarà la pàgina?|Este CSS, ¿cómo dejará la página?',
          code: { html: J('<h1>Mercat</h1>', '<p>Fruita fresca cada dia.</p>'), css: J('p {', '  color: green;', '}') },
          opts: [{ html: '<h1>Mercat</h1><p>Fruita fresca cada dia.</p>', css: 'p{color:green}' }, { html: '<h1>Mercat</h1><p>Fruita fresca cada dia.</p>', css: 'h1{color:green}' }, { html: '<h1>Mercat</h1><p>Fruita fresca cada dia.</p>', css: 'h1,p{color:green}' }], a: 0,
          ex: "El selector és <code>p</code>: la regla només s'aplica als paràgrafs. El títol <code>&lt;h1&gt;</code> es queda negre.|El selector es <code>p</code>: la regla solo se aplica a los párrafos. El título <code>&lt;h1&gt;</code> se queda negro." },
        { k: 'wspot', ph: 'investiga', q: "Aquesta regla havia de centrar el títol i fer-lo gran, però no funciona. <b>Toca la línia que té l'error.</b>|Esta regla tenía que centrar el título y hacerlo grande, pero no funciona. <b>Toca la línea que tiene el error.</b>",
          css: J('h1 {', '  color: navy;', '  text-align: center', '  font-size: 40px;', '}'), bad: 3, preview: false,
          ex: "A la línia 3 falta el punt i coma: <code>text-align: center;</code>. Sense ell, el navegador ajunta aquesta línia amb la següent i no entén cap de les dues.|En la línea 3 falta el punto y coma: <code>text-align: center;</code>. Sin él, el navegador junta esta línea con la siguiente y no entiende ninguna de las dos." },
        { k: 'quiz', ph: 'investiga', q: "Quina d'aquestes regles està ben escrita?|¿Cuál de estas reglas está bien escrita?",
          opts: ['<code>p { color: purple; }</code>|<code>p { color: purple; }</code>', '<code>p { color purple; }</code>|<code>p { color purple; }</code>', '<code>p ( color: purple; )</code>|<code>p ( color: purple; )</code>', '<code>{ p color: purple; }</code>|<code>{ p color: purple; }</code>'], a: 0,
          ex: "El selector va fora, les declaracions entre claus <code>{ }</code> (no parèntesis) i, entre la propietat i el valor, dos punts.|El selector va fuera, las declaraciones entre llaves <code>{ }</code> (no paréntesis) y, entre la propiedad y el valor, dos puntos." },
        { k: 'move', ph: 'pausa', secs: 30, t: "Fes una regla de CSS amb el cos! <b>Selector</b>: assenyala't. <b>{</b>: obre els braços. <b>propietat</b>: mans al cap. <b>:</b> dos copets a les espatlles. <b>valor</b>: mans a la cintura. <b>;</b> un salt. <b>}</b>: tanca els braços. Tres vegades, cada cop més ràpid!|¡Haz una regla de CSS con el cuerpo! <b>Selector</b>: señálate. <b>{</b>: abre los brazos. <b>propiedad</b>: manos a la cabeza. <b>:</b> dos toques en los hombros. <b>valor</b>: manos a la cintura. <b>;</b> un salto. <b>}</b>: cierra los brazos. ¡Tres veces, cada vez más rápido!" },
        { k: 'web', ph: 'repte', url: 'festa-tardor.numi', tab: 'css',
          q: "La teva primera regla! Fes que el títol <code>&lt;h1&gt;</code> sigui de color <code>crimson</code> (o un altre color en anglès que t'agradi). Escriu a la pestanya <b>CSS</b>, dins de les claus.|¡Tu primera regla! Haz que el título <code>&lt;h1&gt;</code> sea de color <code>crimson</code> (u otro color en inglés que te guste). Escribe en la pestaña <b>CSS</b>, dentro de las llaves.",
          html: FESTA, css: J('h1 {', '  ', '}'), snips: [sn('color: |;')],
          checks: [{ k: 'css', s: 'h1', p: 'color', txt: 'La regla <code>h1</code> té <code>color</code>|La regla <code>h1</code> tiene <code>color</code>' }, { k: 'cssclean' }],
          sol: { css: J('h1 {', '  color: crimson;', '}') }, hint: "Dins de les claus escriu <code>color: crimson;</code>: propietat, dos punts, valor i punt i coma.|Dentro de las llaves escribe <code>color: crimson;</code>: propiedad, dos puntos, valor y punto y coma." },
        { k: 'web', ph: 'repte', url: 'festa-tardor.numi', tab: 'css',
          q: "Ara el paràgraf: escriu una regla <b>nova</b> per a <code>p</code> amb la lletra de <code>20px</code> i de color gris fosc (<code>dimgray</code>).|Ahora el párrafo: escribe una regla <b>nueva</b> para <code>p</code> con la letra de <code>20px</code> y de color gris oscuro (<code>dimgray</code>).",
          html: FESTA, css: J('h1 {', '  color: crimson;', '}', ''), snips: [sn('p {\n  |\n}'), sn('font-size: |px;'), sn('color: |;')],
          checks: [{ k: 'css', s: 'p', p: 'font-size', v: '20px', txt: 'Una regla <code>p</code> amb <code>font-size: 20px</code>|Una regla <code>p</code> con <code>font-size: 20px</code>' }, { k: 'css', s: 'p', p: 'color', txt: 'La regla <code>p</code> té <code>color</code>|La regla <code>p</code> tiene <code>color</code>' }, { k: 'cssclean' }],
          sol: { css: J('h1 {', '  color: crimson;', '}', 'p {', '  font-size: 20px;', '  color: dimgray;', '}') },
          hint: "Sota la regla de l'<code>h1</code>, escriu el selector <code>p</code>, obre les claus i posa-hi dues declaracions, cadascuna amb el seu punt i coma.|Debajo de la regla del <code>h1</code>, escribe el selector <code>p</code>, abre las llaves y pon dos declaraciones, cada una con su punto y coma." },
        { k: 'web', ph: 'repte', url: 'festa-tardor.numi', tab: 'css',
          q: "Ui! En Bit ha escrit aquest CSS i la pàgina no fa cas de la meitat de les regles: el títol no es centra i la llista no té color. Hi ha <b>dos errors</b>. Troba'ls i arregla'ls (llegeix l'avís de sota l'editor).|¡Uy! Bit ha escrito este CSS y la página no hace caso de la mitad de las reglas: el título no se centra y la lista no tiene color. Hay <b>dos errores</b>. Encuéntralos y arréglalos (lee el aviso de debajo del editor).",
          html: FESTA, css: J('h1 {', '  color: darkgreen', '  text-align: center;', '}', 'p {', '  font-size: 18px;', '', 'li {', '  color: darkgreen;', '}'),
          checks: [{ k: 'css', s: 'h1', p: 'text-align', v: 'center', txt: 'El títol queda centrat|El título queda centrado' }, { k: 'css', s: 'li', p: 'color', txt: 'Els elements de la llista tenen color|Los elementos de la lista tienen color' }, { k: 'cssclean' }],
          sol: { css: J('h1 {', '  color: darkgreen;', '  text-align: center;', '}', 'p {', '  font-size: 18px;', '}', 'li {', '  color: darkgreen;', '}') },
          hint: "Mira el final de cada declaració (hi ha d'haver un <code>;</code>) i comprova que cada <code>{</code> té la seva <code>}</code>.|Mira el final de cada declaración (tiene que haber un <code>;</code>) y comprueba que cada <code>{</code> tiene su <code>}</code>." },
        { k: 'web', ph: 'repte', url: 'club-lectura.numi', tab: 'css',
          q: "Ara tot sol/a, des de zero! Escriu <b>tres regles</b>: els subtítols <code>h2</code> centrats, els paràgrafs <code>p</code> de <code>18px</code> i els elements de la llista <code>li</code> de color <code>teal</code>.|¡Ahora tú solo/a, desde cero! Escribe <b>tres reglas</b>: los subtítulos <code>h2</code> centrados, los párrafos <code>p</code> de <code>18px</code> y los elementos de la lista <code>li</code> de color <code>teal</code>.",
          html: J('<h1>Club de lectura</h1>', '<h2>Ens trobem cada dimecres</h2>', '<p>Llegim, parlem dels llibres i en triem un de nou cada mes.</p>', '<h2>Què fem</h2>', '<ul>', '  <li>Lectures en veu alta</li>', '  <li>Recomanacions</li>', '  <li>Un concurs de portades</li>', '</ul>'),
          css: '/* Escriu aquí les teves regles */\n',
          checks: [{ k: 'css', s: 'h2', p: 'text-align', v: 'center', txt: 'Els <code>h2</code> estan centrats|Los <code>h2</code> están centrados' }, { k: 'css', s: 'p', p: 'font-size', v: '18px', txt: 'Els paràgrafs fan <code>18px</code>|Los párrafos miden <code>18px</code>' }, { k: 'css', s: 'li', p: 'color', v: 'teal', txt: 'Els <code>li</code> són de color <code>teal</code>|Los <code>li</code> son de color <code>teal</code>' }, { k: 'rules', min: 3 }, { k: 'cssclean' }],
          sol: { css: J('h2 {', '  text-align: center;', '}', 'p {', '  font-size: 18px;', '}', 'li {', '  color: teal;', '}') },
          hint: "Una regla per a cada etiqueta: <code>h2 { … }</code>, <code>p { … }</code> i <code>li { … }</code>. A dins, <code>text-align</code>, <code>font-size</code> i <code>color</code>.|Una regla para cada etiqueta: <code>h2 { … }</code>, <code>p { … }</code> y <code>li { … }</code>. Dentro, <code>text-align</code>, <code>font-size</code> y <code>color</code>." },
        { k: 'wcreate', ph: 'crea', name: 'La web del meu club|La web de mi club', url: 'el-meu-club.numi', tab: 'css',
          q: "Crea l'estil de la web d'un club (de l'escola, d'esports, de música…). Si vols, canvia els textos de l'HTML. Després dona-li l'estil que t'agradi, <b>sense errors</b>.|Crea el estilo de la web de un club (del cole, de deportes, de música…). Si quieres, cambia los textos del HTML. Después dale el estilo que te guste, <b>sin errores</b>.",
          crit: ['Almenys 4 regles de CSS|Al menos 4 reglas de CSS', 'El títol té color i està centrat|El título tiene color y está centrado', 'Els paràgrafs fan 16px o més, perquè es llegeixin bé|Los párrafos miden 16px o más, para que se lean bien', 'El CSS no té cap error|El CSS no tiene ningún error'],
          html: J('<h1>Club de lectura</h1>', '<h2>Ens trobem cada dimecres</h2>', '<p>Llegim, parlem dels llibres i en triem un de nou cada mes.</p>', '<h2>Què fem</h2>', '<ul>', '  <li>Lectures en veu alta</li>', '  <li>Recomanacions</li>', '  <li>Un concurs de portades</li>', '</ul>'),
          css: J('h1 {', '  ', '}', ''),
          checks: [{ k: 'rules', min: 4 }, { k: 'css', s: 'h1', p: 'color', txt: 'El títol té <code>color</code>|El título tiene <code>color</code>' }, { k: 'css', s: 'h1', p: 'text-align', v: 'center', txt: 'El títol està centrat|El título está centrado' }, { k: 'css', s: 'p', p: 'font-size', v: PX16, txt: 'Els paràgrafs fan <code>16px</code> o més|Los párrafos miden <code>16px</code> o más' }, { k: 'cssclean' }],
          sol: { css: J('h1 {', '  color: darkslateblue;', '  text-align: center;', '}', 'h2 {', '  color: teal;', '}', 'p {', '  font-size: 18px;', '}', 'li {', '  color: dimgray;', '  font-size: 18px;', '}') } },
        { k: 'quiz', ph: 'tanca', q: 'Per acabar: quina part de la regla diu <b>a quins elements</b> s\'aplica?|Para terminar: ¿qué parte de la regla dice <b>a qué elementos</b> se aplica?',
          opts: ['El selector|El selector', 'La propietat|La propiedad', 'El valor|El valor'], a: 0, ex: "A <code>h1 { color: navy; }</code>, el selector és <code>h1</code>: s'aplica a tots els títols <code>&lt;h1&gt;</code>.|En <code>h1 { color: navy; }</code>, el selector es <code>h1</code>: se aplica a todos los títulos <code>&lt;h1&gt;</code>." },
        { k: 'quiz', ph: 'tanca', q: 'Quin signe ha d\'acabar cada declaració?|¿Qué signo tiene que acabar cada declaración?', opts: ['<code>;</code> el punt i coma|<code>;</code> el punto y coma', '<code>:</code> els dos punts|<code>:</code> los dos puntos', '<code>}</code> la clau|<code>}</code> la llave'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ---------- Sessió 2 · Colors ---------- */
    { id: 'w4-2', t: 'Colors|Colores', min: 45, badge: 'w_color',
      learn: ['Els colors es poden escriure amb nom (navy), en hex (#14204A) o amb rgb(20, 32, 74): la pantalla barreja llum vermella, verda i blava.|Los colores se pueden escribir con nombre (navy), en hex (#14204A) o con rgb(20, 32, 74): la pantalla mezcla luz roja, verde y azul.',
        'color pinta el text i background-color, el fons: han de contrastar perquè tothom ho pugui llegir.|color pinta el texto y background-color, el fondo: tienen que contrastar para que todo el mundo lo pueda leer.',
        'Una classe (class="avis" a l\'HTML i .avis al CSS) dona el mateix estil només als elements que la porten.|Una clase (class="avis" en el HTML y .avis en el CSS) da el mismo estilo solo a los elementos que la llevan.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Recordes la sessió passada? Quina regla posa els paràgrafs de color blau?|¿Recuerdas la sesión pasada? ¿Qué regla pone los párrafos de color azul?',
          opts: ['<code>p { color: blue; }</code>|<code>p { color: blue; }</code>', '<code>p { blue: color; }</code>|<code>p { blue: color; }</code>', '<code>blue { p: color; }</code>|<code>blue { p: color; }</code>'], a: 0,
          ex: 'Selector, claus i, a dins, <b>propietat: valor;</b>.|Selector, llaves y, dentro, <b>propiedad: valor;</b>.' },
        { k: 'wspot', ph: 'recorda', q: "I aquí, on és l'error?|Y aquí, ¿dónde está el error?", css: J('h2 {', '  color: teal;', '  font-size 28px;', '}'), bad: 3, preview: false,
          ex: "Falten els dos punts entre la propietat i el valor: <code>font-size: 28px;</code>.|Faltan los dos puntos entre la propiedad y el valor: <code>font-size: 28px;</code>." },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'lab', mood: 'happy', t: "BIP BIP! He pintat la web de l'hort del poble amb els meus colors preferits: text groc clar sobre fons blanc. Preciós… però ningú no ho pot llegir! Avui aprendrem a triar colors com els dissenyadors: amb <b>noms</b>, amb <b>codis</b> i amb bon <b>contrast</b>.|¡BIP BIP! He pintado la web del huerto del pueblo con mis colores preferidos: texto amarillo claro sobre fondo blanco. Precioso… ¡pero nadie lo puede leer! Hoy aprenderemos a elegir colores como los diseñadores: con <b>nombres</b>, con <b>códigos</b> y con buen <b>contraste</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Noms|Nombres', t: 'Colors amb nom|Colores con nombre', media: { k: 'web', html: J('<h1>crimson</h1>', '<h2>seagreen</h2>', '<h3>royalblue</h3>', '<h4>chocolate</h4>'), css: J('h1 {', '  color: crimson;', '}', 'h2 {', '  color: seagreen;', '}', 'h3 {', '  color: royalblue;', '}', 'h4 {', '  color: chocolate;', '}') },
            x: "El CSS coneix més de cent colors pel seu nom en anglès: <code>red</code>, <code>navy</code>, <code>gold</code>, <code>tomato</code>, <code>seagreen</code>… Són fàcils de recordar, però són pocs comparats amb tots els colors que pot fer una pantalla.|El CSS conoce más de cien colores por su nombre en inglés: <code>red</code>, <code>navy</code>, <code>gold</code>, <code>tomato</code>, <code>seagreen</code>… Son fáciles de recordar, pero son pocos comparados con todos los colores que puede hacer una pantalla." },
          { k: 'rgb()|rgb()', t: 'La pantalla barreja llum|La pantalla mezcla luz', anim: 'w4rgb',
            x: "Cada puntet de la pantalla (un <b>píxel</b>) té tres llumetes: <b>vermella</b>, <b>verda</b> i <b>blava</b>. Amb <code>rgb(vermell, verd, blau)</code> dius quanta llum fa cadascuna, de 0 (apagada) a 255 (al màxim). <code>rgb(255, 0, 0)</code> és vermell i <code>rgb(255, 255, 0)</code>… groc!|Cada puntito de la pantalla (un <b>píxel</b>) tiene tres lucecitas: <b>roja</b>, <b>verde</b> y <b>azul</b>. Con <code>rgb(rojo, verde, azul)</code> dices cuánta luz hace cada una, de 0 (apagada) a 255 (al máximo). <code>rgb(255, 0, 0)</code> es rojo y <code>rgb(255, 255, 0)</code>… ¡amarillo!",
            tip: "Amb llum, vermell i verd fan groc, i les tres llums al màxim fan blanc. Amb pintura no passa el mateix: és una altra manera de barrejar.|Con luz, rojo y verde hacen amarillo, y las tres luces al máximo hacen blanco. Con pintura no pasa lo mismo: es otra manera de mezclar." },
          { k: 'Hex|Hex', t: 'Els colors en codi hex|Los colores en código hex', anim: 'w4hex',
            x: "El codi <span class='hl'>hex</span> (hexadecimal) és la manera més habitual d'escriure colors: un <code>#</code> i sis xifres, dues per a cada llum (vermell, verd i blau). Va de <code>00</code> (apagada) a <code>FF</code> (al màxim): <code>#FF8800</code> és molt de vermell, una mica de verd i gens de blau → taronja.|El código <span class='hl'>hex</span> (hexadecimal) es la manera más habitual de escribir colores: un <code>#</code> y seis cifras, dos para cada luz (rojo, verde y azul). Va de <code>00</code> (apagada) a <code>FF</code> (al máximo): <code>#FF8800</code> es mucho rojo, un poco de verde y nada de azul → naranja.",
            tip: "Les xifres hex són 0-9 i A-F (la A val 10 i la F, 15). Truc: com més petites són les xifres, més fosc és el color.|Las cifras hex son 0-9 y A-F (la A vale 10 y la F, 15). Truco: cuanto más pequeñas son las cifras, más oscuro es el color." },
          { k: 'Text i fons|Texto y fondo', t: 'color i background-color|color y background-color', media: { k: 'web', html: J("<h1>L'hort del poble</h1>", '<p>Tomàquets, enciams i carbasses.</p>'), css: J('body {', '  background-color: #FFF4D6;', '}', 'h1 {', '  color: #2E7D32;', '}', 'p {', '  color: #3E2723;', '}') },
            x: "<code>color</code> pinta <b>el text</b> i <code>background-color</code> pinta <b>el fons</b>. Si poses el fons a <code>body</code>, el cos de la pàgina, es pinta tota la pàgina.|<code>color</code> pinta <b>el texto</b> y <code>background-color</code> pinta <b>el fondo</b>. Si pones el fondo en <code>body</code>, el cuerpo de la página, se pinta toda la página." },
          { k: 'Compte!|¡Cuidado!', t: 'Que es pugui llegir|Que se pueda leer', anim: 'w4contrast',
            x: "El text ha de <span class='hl'>contrastar</span> amb el fons: fosc sobre clar o clar sobre fosc. Groc clar sobre blanc o gris sobre gris cansen la vista, i hi ha persones que no ho poden llegir gens. I no expliquis res <b>només</b> amb el color: no tothom veu els colors de la mateixa manera.|El texto tiene que <span class='hl'>contrastar</span> con el fondo: oscuro sobre claro o claro sobre oscuro. Amarillo claro sobre blanco o gris sobre gris cansan la vista, y hay personas que no lo pueden leer en absoluto. Y no expliques nada <b>solo</b> con el color: no todo el mundo ve los colores de la misma manera.",
            bad: 'Triar els colors només perquè són bonics, encara que no es llegeixin.|Elegir los colores solo porque son bonitos, aunque no se lean.', good: 'Comprovar que el text es llegeix bé, també de lluny i al mòbil.|Comprobar que el texto se lee bien, también de lejos y en el móvil.' }
        ] },
        { k: 'seq', ph: 'mans', q: "Ordena aquests grisos de <b>més fosc</b> a <b>més clar</b>. Pista: com més petites són les xifres, menys llum.|Ordena estos grises de <b>más oscuro</b> a <b>más claro</b>. Pista: cuanto más pequeñas son las cifras, menos luz.",
          items: ['<code>#000000</code>|<code>#000000</code>', '<code>#444444</code>|<code>#444444</code>', '<code>#999999</code>|<code>#999999</code>', '<code>#DDDDDD</code>|<code>#DDDDDD</code>', '<code>#FFFFFF</code>|<code>#FFFFFF</code>'],
          ex: "Quan les tres parelles són iguals, la llum vermella, la verda i la blava fan el mateix: surt un gris. De <code>00</code> (negre) a <code>FF</code> (blanc).|Cuando las tres parejas son iguales, la luz roja, la verde y la azul hacen lo mismo: sale un gris. De <code>00</code> (negro) a <code>FF</code> (blanco)." },
        { k: 'unplug', ph: 'mans', ico: '🔍', title: 'Descodificadors de colors|Descodificadores de colores',
          t: "Cada grup rep unes targetes amb codis hex. Sense ordinador, sabreu quin color amaga cada codi?|Cada grupo recibe unas tarjetas con códigos hex. Sin ordenador, ¿sabréis qué color esconde cada código?",
          steps: ["Per a cada targeta, mireu les tres parelles: quines llums estan enceses (FF), a mitges (88) o apagades (00)?|Para cada tarjeta, mirad las tres parejas: ¿qué luces están encendidas (FF), a medias (88) o apagadas (00)?",
            "Escriviu el nom del color que creieu i pinteu un quadradet amb els llapis de colors.|Escribid el nombre del color que creéis y pintad un cuadradito con los lápices de colores.",
            "A la fitxa, decidiu quines parelles de text i fons es llegirien bé i quines no.|En la ficha, decidid qué parejas de texto y fondo se leerían bien y cuáles no.",
            "Al final, ho comprovem tots junts a la pantalla gran.|Al final, lo comprobamos todos juntos en la pantalla grande."],
          tip: "Comenceu pels fàcils: <code>#FF0000</code>, <code>#00FF00</code> i <code>#0000FF</code> només tenen una llum encesa.|Empezad por los fáciles: <code>#FF0000</code>, <code>#00FF00</code> y <code>#0000FF</code> solo tienen una luz encendida." },
        { k: 'wquiz', ph: 'prova', q: 'De quin color serà aquest títol?|¿De qué color será este título?', code: { html: '<h1>Hort</h1>', css: J('h1 {', '  color: #0000FF;', '}') },
          opts: [{ html: '<h1>Hort</h1>', css: 'h1{color:#0000FF}' }, { html: '<h1>Hort</h1>', css: 'h1{color:#FF0000}' }, { html: '<h1>Hort</h1>', css: 'h1{color:#00AA00}' }], a: 0,
          ex: "<code>#0000FF</code>: vermell <code>00</code>, verd <code>00</code> i blau <code>FF</code>. Només la llum blava encesa: blau.|<code>#0000FF</code>: rojo <code>00</code>, verde <code>00</code> y azul <code>FF</code>. Solo la luz azul encendida: azul." },
        { k: 'wquiz', ph: 'prova', q: 'I de quin color serà el fons de la pàgina?|¿Y de qué color será el fondo de la página?', code: { css: J('body {', '  background-color: rgb(255, 255, 0);', '}') },
          opts: [{ html: '', css: 'body{background-color:rgb(255,255,0)}' }, { html: '', css: 'body{background-color:rgb(0,255,255)}' }, { html: '', css: 'body{background-color:rgb(255,0,255)}' }], a: 0,
          ex: "Vermell i verd al màxim (255) i el blau apagat (0): amb llum, això fa <b>groc</b>.|Rojo y verde al máximo (255) y el azul apagado (0): con luz, eso hace <b>amarillo</b>." },
        { k: 'web', ph: 'repte', url: 'hort-del-poble.numi', tab: 'css',
          q: "Dona color a la web de l'hort amb <b>noms</b>: el fons de la pàgina (<code>body</code>) de color <code>honeydew</code> i el títol de color <code>darkgreen</code>.|Da color a la web del huerto con <b>nombres</b>: el fondo de la página (<code>body</code>) de color <code>honeydew</code> y el título de color <code>darkgreen</code>.",
          html: HORT, css: J('body {', '  ', '}', 'h1 {', '  ', '}'), snips: [sn('background-color: |;'), sn('color: |;')],
          checks: [{ k: 'css', s: 'body', p: 'background-color', txt: 'La pàgina (<code>body</code>) té <code>background-color</code>|La página (<code>body</code>) tiene <code>background-color</code>' }, { k: 'css', s: 'h1', p: 'color', txt: 'El títol té <code>color</code>|El título tiene <code>color</code>' }, { k: 'cssclean' }],
          sol: { css: J('body {', '  background-color: honeydew;', '}', 'h1 {', '  color: darkgreen;', '}') },
          hint: "A <code>body</code>: <code>background-color: honeydew;</code>. A <code>h1</code>: <code>color: darkgreen;</code>.|En <code>body</code>: <code>background-color: honeydew;</code>. En <code>h1</code>: <code>color: darkgreen;</code>." },
        { k: 'web', ph: 'repte', url: 'hort-del-poble.numi', tab: 'css',
          q: "Ara amb <b>codis hex</b>, com els professionals. Posa al títol el verd <code>#2E7D32</code> i dona als subtítols <code>h2</code> un color hex que triïs tu (que es llegeixi bé!). Recorda: <code>#</code> i sis xifres.|Ahora con <b>códigos hex</b>, como los profesionales. Pon en el título el verde <code>#2E7D32</code> y da a los subtítulos <code>h2</code> un color hex que elijas tú (¡que se lea bien!). Recuerda: <code>#</code> y seis cifras.",
          html: HORT, css: J('body {', '  background-color: honeydew;', '}', 'h1 {', '  color: darkgreen;', '}', ''),
          checks: [{ k: 'css', s: 'h1', p: 'color', v: HEX6, txt: 'El títol té un color hex (com <code>#2E7D32</code>)|El título tiene un color hex (como <code>#2E7D32</code>)' }, { k: 'css', s: 'h2', p: 'color', v: HEX6, txt: 'Els <code>h2</code> tenen un color hex|Los <code>h2</code> tienen un color hex' }, { k: 'cssclean' }],
          sol: { css: J('body {', '  background-color: honeydew;', '}', 'h1 {', '  color: #2E7D32;', '}', 'h2 {', '  color: #6D4C41;', '}') },
          hint: "Canvia <code>darkgreen</code> per <code>#2E7D32</code> i escriu una regla nova <code>h2 { color: #…; }</code> amb sis xifres (0-9 i A-F).|Cambia <code>darkgreen</code> por <code>#2E7D32</code> y escribe una regla nueva <code>h2 { color: #…; }</code> con seis cifras (0-9 y A-F)." },
        { k: 'web', ph: 'repte', url: 'mercat-tardor.numi', tab: 'css',
          q: "En Bit ha fet el cartell del mercat amb text clar sobre fons blanc. No es llegeix! Arregla-ho: posa al <code>body</code> un fons <b>fosc</b> en hex i deixa el text clar. Un hex és fosc si cada parella comença per 0, 1, 2 o 3 (com <code>#1D2433</code>).|Bit ha hecho el cartel del mercado con texto claro sobre fondo blanco. ¡No se lee! Arréglalo: pon en el <code>body</code> un fondo <b>oscuro</b> en hex y deja el texto claro. Un hex es oscuro si cada pareja empieza por 0, 1, 2 o 3 (como <code>#1D2433</code>).",
          html: J('<h1>Mercat de la tardor</h1>', '<p>Diumenge, de 10 a 14 h, a la plaça.</p>', '<p>Fruita, verdura i formatges dels pobles del voltant.</p>'), css: J('body {', '  background-color: #FFFFFF;', '}', 'h1 {', '  color: #FFD54A;', '}', 'p {', '  color: #EEEEEE;', '}'),
          checks: [{ k: 'css', s: 'body', p: 'background-color', v: DARK3, txt: 'El fons és fosc (cada parella del hex comença per 0, 1, 2 o 3)|El fondo es oscuro (cada pareja del hex empieza por 0, 1, 2 o 3)' }, { k: 'css', s: 'p', p: 'color', v: LIGHT, txt: 'El text dels paràgrafs continua sent clar|El texto de los párrafos sigue siendo claro' }, { k: 'cssclean' }],
          sol: { css: J('body {', '  background-color: #1D2433;', '}', 'h1 {', '  color: #FFD54A;', '}', 'p {', '  color: #EEEEEE;', '}') },
          hint: "Només cal canviar una línia: el <code>background-color</code> del <code>body</code>. Prova <code>#1D2433</code> o inventa't un hex amb xifres petites.|Solo hay que cambiar una línea: el <code>background-color</code> del <code>body</code>. Prueba <code>#1D2433</code> o invéntate un hex con cifras pequeñas." },
        { k: 'move', ph: 'pausa', secs: 30, t: "Fes de píxel! Quan diguis <b>vermell</b>, aixeca el braç dret; <b>verd</b>, l'esquerre; <b>blau</b>, una cama. Ara fes <b>groc</b> (vermell + verd), <b>blanc</b> (tots tres) i <b>negre</b> (cap: quiet/a com una estàtua)!|¡Haz de píxel! Cuando digas <b>rojo</b>, levanta el brazo derecho; <b>verde</b>, el izquierdo; <b>azul</b>, una pierna. ¡Ahora haz <b>amarillo</b> (rojo + verde), <b>blanco</b> (los tres) y <b>negro</b> (ninguno: quieto/a como una estatua)!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Classes|Clases', t: 'Pintar només alguns elements|Pintar solo algunos elementos', anim: 'w4class',
            x: "Amb <code>p { … }</code> canvien <b>tots</b> els paràgrafs. I si només en vols destacar alguns? Posa'ls una <span class='hl'>classe</span> a l'HTML, <code>class=\"avis\"</code>, i escriu la regla amb un <b>punt</b> davant: <code>.avis { … }</code>.|Con <code>p { … }</code> cambian <b>todos</b> los párrafos. ¿Y si solo quieres destacar algunos? Ponles una <span class='hl'>clase</span> en el HTML, <code>class=\"avis\"</code>, y escribe la regla con un <b>punto</b> delante: <code>.avis { … }</code>.",
            tip: "El nom de la classe l'inventes tu. Millor que digui <b>per a què</b> serveix (<code>avis</code>, <code>preu</code>, <code>destacat</code>) que no pas com es veu (<code>groc</code>): si un dia canvies el color, el nom continua tenint sentit.|El nombre de la clase lo inventas tú. Mejor que diga <b>para qué</b> sirve (<code>avis</code>, <code>precio</code>, <code>destacado</code>) que no cómo se ve (<code>amarillo</code>): si un día cambias el color, el nombre sigue teniendo sentido." },
          { k: 'Exemple|Ejemplo', t: 'La classe en acció|La clase en acción', media: { k: 'web', html: J('<h1>Mercat de la tardor</h1>', '<p>Diumenge, a la plaça.</p>', '<p class="avis">Porta la teva bossa!</p>', '<p>Hi haurà música.</p>', '<p class="avis">No es pot aparcar a la plaça.</p>'), css: J('.avis {', '  background-color: #FFE082;', '  color: #4E342E;', '}') },
            x: "Només els dos paràgrafs amb <code>class=\"avis\"</code> tenen el fons groc. La mateixa classe es pot posar a tants elements com vulguis, i fins i tot a etiquetes diferents (un <code>&lt;p&gt;</code>, un <code>&lt;li&gt;</code>…).|Solo los dos párrafos con <code>class=\"avis\"</code> tienen el fondo amarillo. La misma clase se puede poner en tantos elementos como quieras, e incluso en etiquetas diferentes (un <code>&lt;p&gt;</code>, un <code>&lt;li&gt;</code>…)." },
          { k: 'Compte!|¡Cuidado!', t: 'El punt només va al CSS|El punto solo va en el CSS', media: { k: 'web', html: J('<p class="avis">Porta la teva bossa!</p>', '<p>Hi haurà música.</p>'), css: J('avis {', '  background-color: #FFE082;', '}') },
            x: "A l'HTML s'escriu <code>class=\"avis\"</code>, sense punt. Al CSS, <code>.avis</code>, amb punt. Aquí s'ha oblidat el punt: el navegador busca una etiqueta <code>&lt;avis&gt;</code>, que no existeix… i no pinta res.|En el HTML se escribe <code>class=\"avis\"</code>, sin punto. En el CSS, <code>.avis</code>, con punto. Aquí se ha olvidado el punto: el navegador busca una etiqueta <code>&lt;avis&gt;</code>, que no existe… y no pinta nada.",
            bad: '<code>avis { … }</code> al CSS, o <code>class=".avis"</code> a l\'HTML.|<code>avis { … }</code> en el CSS, o <code>class=".avis"</code> en el HTML.', good: '<code>.avis { … }</code> al CSS i <code>class="avis"</code> a l\'HTML.|<code>.avis { … }</code> en el CSS y <code>class="avis"</code> en el HTML.' }
        ] },
        { k: 'web', ph: 'repte', url: 'mercat-tardor.numi', tab: 'html',
          q: "Al cartell hi ha tres <b>avisos</b> importants: la bossa, els gossos i l'aparcament. Posa'ls la classe <code>avis</code> a l'HTML perquè la regla <code>.avis</code> els destaqui. Els altres paràgrafs, deixa'ls com estan.|En el cartel hay tres <b>avisos</b> importantes: la bolsa, los perros y el aparcamiento. Ponles la clase <code>avis</code> en el HTML para que la regla <code>.avis</code> los destaque. Los otros párrafos, déjalos como están.",
          html: J('<h1>Mercat de la tardor</h1>', '<p>Diumenge, de 10 a 14 h.</p>', '<p>Porta la teva bossa de roba.</p>', '<p>Hi haurà música i castanyes.</p>', '<p>Els gossos, sempre lligats.</p>', '<p>No es pot aparcar a la plaça.</p>'), css: J('.avis {', '  background-color: #FFE082;', '  color: #4E342E;', '}'),
          checks: [{ k: 'class', c: 'avis', min: 3, txt: 'Hi ha 3 elements amb la classe <code>avis</code>|Hay 3 elementos con la clase <code>avis</code>' }, { k: 'tag', t: 'p', min: 5, txt: 'Continuen havent-hi els 5 paràgrafs|Siguen estando los 5 párrafos' }, { k: 'clean' }],
          sol: { html: J('<h1>Mercat de la tardor</h1>', '<p>Diumenge, de 10 a 14 h.</p>', '<p class="avis">Porta la teva bossa de roba.</p>', '<p>Hi haurà música i castanyes.</p>', '<p class="avis">Els gossos, sempre lligats.</p>', '<p class="avis">No es pot aparcar a la plaça.</p>') },
          hint: "Dins de l'etiqueta d'obertura: <code>&lt;p class=\"avis\"&gt;</code>. Sense punt!|Dentro de la etiqueta de apertura: <code>&lt;p class=\"avis\"&gt;</code>. ¡Sin punto!" },
        { k: 'wspot', ph: 'investiga', q: "Un dels avisos no surt destacat. <b>Toca la línia que té l'error.</b>|Uno de los avisos no sale destacado. <b>Toca la línea que tiene el error.</b>",
          html: J('<h1>Mercat</h1>', '<p class="avis">Porta la bossa!</p>', '<p>Hi haurà música.</p>', '<p class=".avis">Gossos lligats.</p>'), css: '.avis { background-color: #FFE082; }', bad: 4,
          ex: "A l'HTML la classe s'escriu sense punt: <code>class=\"avis\"</code>. El punt només va al CSS.|En el HTML la clase se escribe sin punto: <code>class=\"avis\"</code>. El punto solo va en el CSS." },
        { k: 'wcreate', ph: 'crea', name: 'La meva paleta|Mi paleta', url: 'concert-tardor.numi', tab: 'css',
          q: "Crea el cartell d'una activitat amb <b>la teva paleta</b>: tria 3 colors que combinin i que es llegeixin bé (un per al fons, un per al text i un per destacar) i destaca les coses importants amb la classe <code>destacat</code>.|Crea el cartel de una actividad con <b>tu paleta</b>: elige 3 colores que combinen y que se lean bien (uno para el fondo, uno para el texto y uno para destacar) y destaca las cosas importantes con la clase <code>destacat</code>.",
          crit: ['El fons de la pàgina té color|El fondo de la página tiene color', 'Fas servir almenys un color en hex o en rgb()|Usas al menos un color en hex o en rgb()', 'La classe destacat és a 2 elements o més i té la seva regla|La clase destacat está en 2 elementos o más y tiene su regla', 'Tot es llegeix bé: bon contrast entre el text i el fons|Todo se lee bien: buen contraste entre el texto y el fondo'],
          html: J('<h1>Concert de tardor</h1>', '<p>Divendres a les 7 de la tarda, al pavelló.</p>', '<p>Entrada lliure.</p>', '<h2>Qui toca?</h2>', '<ul>', "  <li>La coral de l'escola</li>", '  <li>El grup de percussió</li>', '  <li>La banda del poble</li>', '</ul>'),
          css: J('/* La meva paleta:', '   fons:', '   text:', '   destacat:', '*/', ''),
          checks: [{ k: 'css', s: 'body', p: 'background-color', txt: 'La pàgina (<code>body</code>) té <code>background-color</code>|La página (<code>body</code>) tiene <code>background-color</code>' }, { k: 'prop', p: 'color', v: '/#[0-9a-f]{3,6}|rgb\\(/', txt: 'Un <code>color</code> en hex o en <code>rgb()</code>|Un <code>color</code> en hex o en <code>rgb()</code>' }, { k: 'class', c: 'destacat', min: 2 }, { k: 'css', s: '.destacat', txt: 'Hi ha la regla <code>.destacat { … }</code>|Está la regla <code>.destacat { … }</code>' }, { k: 'cssclean' }, { k: 'clean' }],
          sol: { html: J('<h1>Concert de tardor</h1>', '<p class="destacat">Divendres a les 7 de la tarda, al pavelló.</p>', '<p class="destacat">Entrada lliure.</p>', '<h2>Qui toca?</h2>', '<ul>', "  <li>La coral de l'escola</li>", '  <li>El grup de percussió</li>', '  <li>La banda del poble</li>', '</ul>'),
            css: J('/* La meva paleta: fons #FFF8E1, text #4E342E, destacat #BF360C */', 'body {', '  background-color: #FFF8E1;', '  color: #4E342E;', '}', 'h1 {', '  color: #BF360C;', '}', '.destacat {', '  background-color: #BF360C;', '  color: #FFFFFF;', '}') } },
        { k: 'quiz', ph: 'tanca', q: 'Quin color és <code>#FFFFFF</code>?|¿Qué color es <code>#FFFFFF</code>?', opts: ['Blanc|Blanco', 'Negre|Negro', 'Vermell|Rojo'], a: 0, ex: 'Les tres llums al màxim (<code>FF</code>) fan blanc.|Las tres luces al máximo (<code>FF</code>) hacen blanco.' },
        { k: 'quiz', ph: 'tanca', q: 'Vols que tres paràgrafs, i només aquests, tinguin el mateix estil especial. Què fas?|Quieres que tres párrafos, y solo esos, tengan el mismo estilo especial. ¿Qué haces?',
          opts: ['Els poso <code>class="nom"</code> i escric la regla <code>.nom { … }</code>|Les pongo <code>class="nom"</code> y escribo la regla <code>.nom { … }</code>', 'Escric la regla <code>p { … }</code>|Escribo la regla <code>p { … }</code>', 'Escric la regla <code>nom { … }</code>, sense punt|Escribo la regla <code>nom { … }</code>, sin punto'], a: 0,
          ex: '<code>p { … }</code> canviaria tots els paràgrafs; la classe només els que la porten.|<code>p { … }</code> cambiaría todos los párrafos; la clase solo los que la llevan.' },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ---------- Sessió 3 · Tipus de lletra ---------- */
    { id: 'w4-3', t: 'Tipus de lletra|Tipos de letra', min: 45, badge: 'w_lletra',
      learn: ['font-family tria la lletra i la llista acaba sempre amb una família genèrica (serif, sans-serif, monospace o cursive).|font-family elige la letra y la lista acaba siempre con una familia genérica (serif, sans-serif, monospace o cursive).',
        'font-size canvia la mida: el títol més gran, els subtítols menys i el text de 16px o més; i, com a molt, dues lletres per pàgina.|font-size cambia el tamaño: el título más grande, los subtítulos menos y el texto de 16px o más; y, como mucho, dos letras por página.',
        'Una classe (.nom) es pot repetir; un id (#nom) és únic: només el pot tenir un element de la pàgina.|Una clase (.nom) se puede repetir; un id (#nom) es único: solo lo puede tener un elemento de la página.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Recordes la sessió dels colors? Quin d'aquests colors és el més fosc?|¿Recuerdas la sesión de los colores? ¿Cuál de estos colores es el más oscuro?",
          opts: ['<code>#1A1A1A</code>|<code>#1A1A1A</code>', '<code>#AAAAAA</code>|<code>#AAAAAA</code>', '<code>#F5F5F5</code>|<code>#F5F5F5</code>'], a: 0, ex: 'Com més petites són les xifres, menys llum: més fosc.|Cuanto más pequeñas son las cifras, menos luz: más oscuro.' },
        { k: 'quiz', ph: 'recorda', q: 'Al CSS hi ha la regla <code>.preu { color: crimson; }</code>. Com ho escrius a l\'HTML?|En el CSS está la regla <code>.preu { color: crimson; }</code>. ¿Cómo lo escribes en el HTML?',
          opts: ['<code>&lt;p class="preu"&gt;</code>|<code>&lt;p class="preu"&gt;</code>', '<code>&lt;p class=".preu"&gt;</code>|<code>&lt;p class=".preu"&gt;</code>', '<code>&lt;preu&gt;</code>|<code>&lt;preu&gt;</code>'], a: 0, ex: 'El punt només va al CSS.|El punto solo va en el CSS.' },
        { k: 'story', ph: 'missio', who: 'both', scene: 'taller', t: "En Bit ha fet la revista digital de l'escola i hi ha posat… cinc tipus de lletra diferents! I el text és tan petit que s'ha de llegir amb lupa. Avui aprendràs a triar la <b>lletra</b> i la <b>mida</b> amb criteri, i a fer servir l'<b>id</b> per a l'element que és únic a la pàgina.|Bit ha hecho la revista digital del cole y ha puesto… ¡cinco tipos de letra diferentes! Y el texto es tan pequeño que hay que leerlo con lupa. Hoy aprenderás a elegir la <b>letra</b> y el <b>tamaño</b> con criterio, y a usar el <b>id</b> para el elemento que es único en la página." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Famílies|Familias', t: 'Quatre famílies de lletra|Cuatro familias de letra', anim: 'w4font',
            x: "Amb <code>font-family</code> tries la lletra. Hi ha quatre famílies que tenen tots els ordinadors: <code>serif</code> (amb «peuets», com als llibres), <code>sans-serif</code> (sense peuets, molt clara a la pantalla), <code>monospace</code> (totes les lletres igual d'amples, com al codi) i <code>cursive</code> (com escrita a mà).|Con <code>font-family</code> eliges la letra. Hay cuatro familias que tienen todos los ordenadores: <code>serif</code> (con «pies», como en los libros), <code>sans-serif</code> (sin pies, muy clara en la pantalla), <code>monospace</code> (todas las letras igual de anchas, como en el código) y <code>cursive</code> (como escrita a mano).",
            tip: "La lletra exacta de cada família canvia una mica d'un ordinador a un altre, però l'estil és el mateix.|La letra exacta de cada familia cambia un poco de un ordenador a otro, pero el estilo es el mismo." },
          { k: 'El pla B|El plan B', t: 'Una llista de lletres|Una lista de letras', media: { k: 'web', html: J("<h1>Revista de l'escola</h1>", '<p>Número 1 · Tardor</p>'), css: J('h1 {', '  font-family: "Pissarra", cursive;', '}', 'p {', '  font-family: sans-serif;', '}') },
            x: "Pots demanar una lletra concreta pel seu nom, entre cometes, i posar-ne una altra de reserva després d'una coma. Si l'ordinador no té la lletra «Pissarra» (i no la té: ens l'hem inventat!), fa servir la següent de la llista, <code>cursive</code>. Per això la llista sempre acaba amb una família genèrica.|Puedes pedir una letra concreta por su nombre, entre comillas, y poner otra de reserva después de una coma. Si el ordenador no tiene la letra «Pissarra» (y no la tiene: ¡nos la hemos inventado!), usa la siguiente de la lista, <code>cursive</code>. Por eso la lista siempre acaba con una familia genérica." },
          { k: 'Mida|Tamaño', t: 'font-size i la jerarquia|font-size y la jerarquía', media: { k: 'web', html: J('<h1>Revista</h1>', '<h2>Entrevista a la cuinera</h2>', '<p>Ens explica com prepara el menú de cada dia.</p>'), css: J('h1 {', '  font-size: 40px;', '}', 'h2 {', '  font-size: 26px;', '}', 'p {', '  font-size: 18px;', '}') },
            x: "<code>font-size</code> canvia la mida, normalment en píxels (<code>px</code>). Una bona pàgina té <span class='hl'>jerarquia</span>: el títol és el més gran, els subtítols una mica menys i el text, prou gran per llegir-lo còmodament.|<code>font-size</code> cambia el tamaño, normalmente en píxeles (<code>px</code>). Una buena página tiene <span class='hl'>jerarquía</span>: el título es el más grande, los subtítulos un poco menos y el texto, lo bastante grande para leerlo cómodamente.",
            tip: "Els navegadors fan servir 16px per al text normal. Per al text de lectura, no baixis d'aquí.|Los navegadores usan 16px para el texto normal. Para el texto de lectura, no bajes de ahí." },
          { k: 'Més estil|Más estilo', t: 'Negreta, cursiva i alineació|Negrita, cursiva y alineación', media: { k: 'web', html: J('<h2>Cursa solidària</h2>', '<p class="data">Dissabte 15, a les 10 h</p>', '<p class="nota">Inscripcions a la consergeria.</p>'), css: J('h2 {', '  text-align: center;', '}', '.data {', '  font-weight: bold;', '}', '.nota {', '  font-style: italic;', '  color: dimgray;', '}') },
            x: "<code>font-weight: bold</code> fa la lletra gruixuda, <code>font-style: italic</code> la inclina i <code>text-align</code> la posa a l'esquerra (<code>left</code>), al centre (<code>center</code>) o a la dreta (<code>right</code>).|<code>font-weight: bold</code> hace la letra gruesa, <code>font-style: italic</code> la inclina y <code>text-align</code> la pone a la izquierda (<code>left</code>), en el centro (<code>center</code>) o a la derecha (<code>right</code>).",
            tip: "Si una cosa és important de veritat (no només per l'aspecte), a l'HTML fes servir <code>&lt;strong&gt;</code> o <code>&lt;em&gt;</code>: el CSS només canvia com es veu.|Si algo es importante de verdad (no solo por el aspecto), en el HTML usa <code>&lt;strong&gt;</code> o <code>&lt;em&gt;</code>: el CSS solo cambia cómo se ve." },
          { k: 'Compte!|¡Cuidado!', t: "Massa lletres fan mal d'ulls|Demasiadas letras hacen daño a la vista", media: { k: 'web', html: J("<h1>Revista de l'escola</h1>", '<h2>Notícies</h2>', "<p>Aquest mes estrenem l'hort.</p>"), css: J('body {', '  font-family: sans-serif;', '}', 'h1 {', '  font-family: serif;', '}') },
            x: "Una pàgina amb cinc lletres diferents sembla desordenada i costa de llegir. Tria'n <b>una</b> per al text i, com a molt, <b>una altra</b> per als títols. Posa la principal a <code>body</code>: tota la pàgina l'<b>hereta</b> (aquí, l'<code>h2</code> i el <code>p</code>).|Una página con cinco letras diferentes parece desordenada y cuesta de leer. Elige <b>una</b> para el texto y, como mucho, <b>otra</b> para los títulos. Pon la principal en <code>body</code>: toda la página la <b>hereda</b> (aquí, el <code>h2</code> y el <code>p</code>).",
            bad: 'Una lletra diferent per a cada títol i cada paràgraf.|Una letra diferente para cada título y cada párrafo.', good: 'Una lletra per a tot (a <code>body</code>) i, si vols, una altra per als títols.|Una letra para todo (en <code>body</code>) y, si quieres, otra para los títulos.' }
        ] },
        { k: 'seq', ph: 'mans', q: "En un pòster, ordena els textos del que ha de ser <b>més gran</b> al que ha de ser <b>més petit</b>.|En un póster, ordena los textos de lo que tiene que ser <b>más grande</b> a lo que tiene que ser <b>más pequeño</b>.",
          items: ["El nom de l'activitat: «Cursa solidària» (<code>h1</code>)|El nombre de la actividad: «Carrera solidaria» (<code>h1</code>)", "Quan i on: «Dissabte a les 10 h, al parc» (<code>h2</code>)|Cuándo y dónde: «Sábado a las 10 h, en el parque» (<code>h2</code>)", "L'explicació: «Recorregut de 3 km per a tota la família» (<code>p</code>)|La explicación: «Recorrido de 3 km para toda la familia» (<code>p</code>)", "Qui l'organitza: «Organitza: l'AFA de l'escola» (una nota)|Quién la organiza: «Organiza: el AMPA del cole» (una nota)"],
          ex: "La mida marca l'ordre de lectura: primer es veu què és, després quan i on, i al final els detalls.|El tamaño marca el orden de lectura: primero se ve qué es, después cuándo y dónde, y al final los detalles." },
        { k: 'wquiz', ph: 'prova', q: 'Amb quina lletra sortirà el títol?|¿Con qué letra saldrá el título?', code: { html: '<h1>Revista</h1>', css: J('h1 {', '  font-family: monospace;', '}') },
          opts: [{ html: '<h1>Revista</h1>', css: 'h1{font-family:monospace}' }, { html: '<h1>Revista</h1>', css: 'h1{font-family:serif}' }, { html: '<h1>Revista</h1>', css: 'h1{font-family:sans-serif;font-style:italic}' }], a: 0,
          ex: "<code>monospace</code>: totes les lletres ocupen el mateix, com al codi de l'editor.|<code>monospace</code>: todas las letras ocupan lo mismo, como en el código del editor." },
        { k: 'web', ph: 'repte', url: 'revista-escola.numi', tab: 'css',
          q: "Tria la lletra de <b>tota</b> la revista: escriu una regla per a <code>body</code> amb <code>font-family</code>. Acaba la llista amb una família genèrica (<code>sans-serif</code>, <code>serif</code>…).|Elige la letra de <b>toda</b> la revista: escribe una regla para <code>body</code> con <code>font-family</code>. Acaba la lista con una familia genérica (<code>sans-serif</code>, <code>serif</code>…).",
          html: REVISTA, css: '', snips: [sn('body {\n  |\n}'), sn('font-family: |;')],
          checks: [{ k: 'css', s: 'body', p: 'font-family', v: GEN, txt: '<code>body</code> té <code>font-family</code>, acabada en una família genèrica|<code>body</code> tiene <code>font-family</code>, acabada en una familia genérica' }, { k: 'cssclean' }],
          sol: { css: J('body {', '  font-family: sans-serif;', '}') },
          hint: "<code>body { font-family: sans-serif; }</code>. Si vols, abans hi pots posar el nom d'una lletra entre cometes i una coma.|<code>body { font-family: sans-serif; }</code>. Si quieres, antes puedes poner el nombre de una letra entre comillas y una coma." },
        { k: 'web', ph: 'repte', url: 'revista-escola.numi', tab: 'css',
          q: "Ara la jerarquia: el títol <code>h1</code> ben gran (30px o més), els subtítols <code>h2</code> amb una mida en px més petita i el text dels paràgrafs de <b>16px o més</b>.|Ahora la jerarquía: el título <code>h1</code> bien grande (30px o más), los subtítulos <code>h2</code> con un tamaño en px más pequeño y el texto de los párrafos de <b>16px o más</b>.",
          html: REVISTA, css: J('body {', '  font-family: sans-serif;', '}', ''), snips: [sn('font-size: |px;')],
          checks: [{ k: 'css', s: 'h1', p: 'font-size', v: PX30, txt: 'El títol <code>h1</code> fa 30px o més|El título <code>h1</code> mide 30px o más' }, { k: 'css', s: 'h2', p: 'font-size', v: '/^[1-9][0-9]px$/', txt: 'Els <code>h2</code> tenen una mida en px|Los <code>h2</code> tienen un tamaño en px' }, { k: 'css', s: 'p', p: 'font-size', v: PX16, txt: 'Els paràgrafs fan 16px o més|Los párrafos miden 16px o más' }, { k: 'cssclean' }],
          sol: { css: J('body {', '  font-family: sans-serif;', '}', 'h1 {', '  font-size: 40px;', '}', 'h2 {', '  font-size: 26px;', '}', 'p {', '  font-size: 18px;', '}') },
          hint: "Tres regles noves: <code>h1</code>, <code>h2</code> i <code>p</code>, cadascuna amb <code>font-size</code> i el número seguit de <code>px</code>.|Tres reglas nuevas: <code>h1</code>, <code>h2</code> y <code>p</code>, cada una con <code>font-size</code> y el número seguido de <code>px</code>." },
        { k: 'wspot', ph: 'investiga', q: "El títol no es fa gran. <b>Toca la línia que té l'error.</b>|El título no se hace grande. <b>Toca la línea que tiene el error.</b>", css: J('h1 {', '  font-family: serif;', '  font-size: 40;', '  color: #1A237E;', '}'), bad: 3, preview: false,
          ex: "A <code>font-size: 40</code> li falta la unitat: <code>40px</code>. Sense unitat, el navegador no sap si són píxels o una altra mesura i no l'aplica.|A <code>font-size: 40</code> le falta la unidad: <code>40px</code>. Sin unidad, el navegador no sabe si son píxeles u otra medida y no la aplica." },
        { k: 'move', ph: 'pausa', secs: 30, t: "Escriu el teu nom a l'aire amb el dit… en <b>monospace</b> (lletres quadrades i separades), en <b>cursive</b> (lligada i ondulada), en <b>bold</b> (amb tot el braç i molta força) i en <b>italic</b> (tot inclinat cap a un costat)!|Escribe tu nombre en el aire con el dedo… ¡en <b>monospace</b> (letras cuadradas y separadas), en <b>cursive</b> (ligada y ondulada), en <b>bold</b> (con todo el brazo y mucha fuerza) y en <b>italic</b> (todo inclinado hacia un lado)!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'id|id', t: "L'element únic|El elemento único", anim: 'w4id',
            x: "Una <b>classe</b> és com la samarreta d'un equip: la poden portar molts. Un <span class='hl'>id</span> és com el braçalet de capità: <b>només un</b> element de la pàgina el pot tenir. A l'HTML s'escriu <code>id=\"portada\"</code> i, al CSS, amb un coixinet: <code>#portada { … }</code>.|Una <b>clase</b> es como la camiseta de un equipo: la pueden llevar muchos. Un <span class='hl'>id</span> es como el brazalete de capitán: <b>solo un</b> elemento de la página lo puede tener. En el HTML se escribe <code>id=\"portada\"</code> y, en el CSS, con una almohadilla: <code>#portada { … }</code>.",
            tip: "L'id també és el que fan servir els enllaços interns: <code>&lt;a href=\"#portada\"&gt;</code> porta just a aquest element.|El id también es lo que usan los enlaces internos: <code>&lt;a href=\"#portada\"&gt;</code> lleva justo a este elemento." },
          { k: 'Exemple|Ejemplo', t: 'Classe i id junts|Clase e id juntos', media: { k: 'web', html: J('<h1 id="portada">Revista de l\'escola</h1>', '<p class="seccio">Notícies</p>', "<p>Hem estrenat l'hort.</p>", '<p class="seccio">Entrevista</p>', '<p>Parlem amb la cuinera.</p>'), css: J('#portada {', '  font-family: serif;', '  font-size: 40px;', '  color: #B71C1C;', '}', '.seccio {', '  font-weight: bold;', '  color: #1565C0;', '}') },
            x: "El títol de la portada només hi és una vegada: <b>id</b>. Les etiquetes de secció es repeteixen: <b>classe</b>.|El título de la portada solo está una vez: <b>id</b>. Las etiquetas de sección se repiten: <b>clase</b>." },
          { k: 'Compte!|¡Cuidado!', t: 'Classe o id?|¿Clase o id?', pic: 'img/ment/igu.webp',
            x: "Pregunta't: <b>es pot repetir?</b> Si es pot repetir, classe (<code>.</code>). Si és únic a la pàgina, id (<code>#</code>). En cas de dubte, fes servir una classe: és més flexible.|Pregúntate: <b>¿se puede repetir?</b> Si se puede repetir, clase (<code>.</code>). Si es único en la página, id (<code>#</code>). En caso de duda, usa una clase: es más flexible.",
            bad: 'Posar el mateix id a tres elements.|Poner el mismo id a tres elementos.', good: "Una classe per als tres, i l'id només per a l'element únic.|Una clase para los tres, y el id solo para el elemento único." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🎯', title: 'El navegador crida|El navegador llama',
          t: "Cada alumne/a té una targeta amb una <b>classe</b> (el color del seu equip) i un <b>id</b> (únic). El professor/a fa de navegador i llegeix regles en veu alta.|Cada alumno/a tiene una tarjeta con una <b>clase</b> (el color de su equipo) y un <b>id</b> (único). El profesor/a hace de navegador y lee reglas en voz alta.",
          steps: ["Penja't la targeta on es vegi bé.|Cuélgate la tarjeta donde se vea bien.",
            "Si el navegador diu <code>.blau { aixecar-se; }</code>, s'aixequen tots els que tenen la classe blau.|Si el navegador dice <code>.blau { levantarse; }</code>, se levantan todos los que tienen la clase blau.",
            "Si diu <code>#p3 { saludar; }</code>, només saluda una persona: la que té l'id p3.|Si dice <code>#p3 { saludar; }</code>, solo saluda una persona: la que tiene el id p3.",
            "Després, per torns, escriviu vosaltres les regles a la pissarra i la resta les segueix.|Después, por turnos, escribid vosotros las reglas en la pizarra y el resto las sigue."],
          tip: "Què passaria si dues persones tinguessin el mateix id? Per això l'id ha de ser únic!|¿Qué pasaría si dos personas tuvieran el mismo id? ¡Por eso el id tiene que ser único!" },
        { k: 'quiz', ph: 'investiga', q: 'En una botiga en línia hi ha 12 preus i un sol logotip a dalt de tot. Què fas servir?|En una tienda en línea hay 12 precios y un solo logotipo arriba del todo. ¿Qué usas?',
          opts: ['La classe <code>.preu</code> per als preus i l\'id <code>#logotip</code> per al logotip|La clase <code>.precio</code> para los precios y el id <code>#logotipo</code> para el logotipo', 'L\'id <code>#preu</code> per als 12 preus|El id <code>#precio</code> para los 12 precios', 'Una classe per al logotip i un id per a cada preu|Una clase para el logotipo y un id para cada precio'], a: 0,
          ex: 'Els preus es repeteixen: classe. El logotip és únic: id.|Los precios se repiten: clase. El logotipo es único: id.' },
        { k: 'web', ph: 'repte', url: 'revista-escola.numi', tab: 'html',
          q: "Dona l'id <code>portada</code> al títol <code>&lt;h1&gt;</code> (a l'HTML) i, a la pestanya CSS, escriu la regla <code>#portada</code> amb una lletra <code>serif</code> i una mida de <code>44px</code>.|Da el id <code>portada</code> al título <code>&lt;h1&gt;</code> (en el HTML) y, en la pestaña CSS, escribe la regla <code>#portada</code> con una letra <code>serif</code> y un tamaño de <code>44px</code>.",
          html: REVISTA, css: J('body {', '  font-family: sans-serif;', '}', ''), snips: [snh('id="|"'), sn('#portada {\n  |\n}')],
          checks: [{ k: 'id', id: 'portada' }, { k: 'css', s: '#portada', p: 'font-family', v: '/serif\\s*$/', txt: 'La regla <code>#portada</code> té <code>font-family</code>|La regla <code>#portada</code> tiene <code>font-family</code>' }, { k: 'css', s: '#portada', p: 'font-size', v: '44px', txt: 'La regla <code>#portada</code> fa <code>44px</code>|La regla <code>#portada</code> mide <code>44px</code>' }, { k: 'cssclean' }, { k: 'clean' }],
          sol: { html: REVISTA_ID, css: J('body {', '  font-family: sans-serif;', '}', '#portada {', '  font-family: serif;', '  font-size: 44px;', '}') },
          hint: "A l'HTML: <code>&lt;h1 id=\"portada\"&gt;</code>. Al CSS: <code>#portada { font-family: serif; font-size: 44px; }</code>.|En el HTML: <code>&lt;h1 id=\"portada\"&gt;</code>. En el CSS: <code>#portada { font-family: serif; font-size: 44px; }</code>." },
        { k: 'wcreate', ph: 'crea', name: 'La portada de la revista|La portada de la revista', url: 'la-meva-revista.numi', tab: 'html',
          q: "Dissenya la portada de la teva revista (de l'escola, d'un club, del barri…). Canvia els textos, tria una lletra per a tot i una mida per a cada nivell, fes servir l'id <code>portada</code> per al títol i la classe <code>seccio</code> per als noms de les seccions.|Diseña la portada de tu revista (del cole, de un club, del barrio…). Cambia los textos, elige una letra para todo y un tamaño para cada nivel, usa el id <code>portada</code> para el título y la clase <code>seccio</code> para los nombres de las secciones.",
          crit: ['<code>body</code> té una lletra acabada en una família genèrica|<code>body</code> tiene una letra acabada en una familia genérica', 'El títol té l\'id portada i la seva regla|El título tiene el id portada y su regla', 'Hi ha almenys 2 elements amb la classe seccio|Hay al menos 2 elementos con la clase seccio', 'El text dels paràgrafs fa 16px o més|El texto de los párrafos mide 16px o más', 'Com a molt, dues lletres diferents|Como mucho, dos letras diferentes'],
          html: J('<h1>La meva revista</h1>', '<p>Número 1 · Tardor</p>', '<h2>Notícies</h2>', '<p>Escriu aquí una notícia.</p>', '<h2>Entrevista</h2>', "<p>Escriu aquí l'entrevista.</p>"), css: '',
          checks: [{ k: 'css', s: 'body', p: 'font-family', v: GEN, txt: '<code>body</code> té <code>font-family</code> amb una família genèrica|<code>body</code> tiene <code>font-family</code> con una familia genérica' }, { k: 'id', id: 'portada' }, { k: 'css', s: '#portada', txt: 'Hi ha la regla <code>#portada { … }</code>|Está la regla <code>#portada { … }</code>' }, { k: 'class', c: 'seccio', min: 2 }, { k: 'css', s: '.seccio', txt: 'Hi ha la regla <code>.seccio { … }</code>|Está la regla <code>.seccio { … }</code>' }, { k: 'css', s: 'p', p: 'font-size', v: PX16, txt: 'Els paràgrafs fan 16px o més|Los párrafos miden 16px o más' }, { k: 'cssclean' }, { k: 'clean' }],
          sol: { html: J('<h1 id="portada">Revista del Club de Ciència</h1>', '<p>Número 1 · Tardor</p>', '<h2 class="seccio">Notícies</h2>', "<p>Hem fet créixer cristalls de sal al laboratori.</p>", '<h2 class="seccio">Entrevista</h2>', "<p>Parlem amb la persona que cuida l'hort de l'escola.</p>"),
            css: J('body {', '  font-family: sans-serif;', '}', '#portada {', '  font-family: serif;', '  font-size: 42px;', '  color: #0D47A1;', '}', '.seccio {', '  font-size: 24px;', '  color: #C2185B;', '}', 'p {', '  font-size: 18px;', '}') } },
        { k: 'quiz', ph: 'tanca', q: 'Per què acabem <code>font-family</code> amb <code>sans-serif</code>, <code>serif</code>…?|¿Por qué acabamos <code>font-family</code> con <code>sans-serif</code>, <code>serif</code>…?',
          opts: ["Perquè, si l'ordinador no té la lletra que demanem, en faci servir una de semblant|Para que, si el ordenador no tiene la letra que pedimos, use una parecida", 'Perquè és obligatori posar dues lletres|Porque es obligatorio poner dos letras', 'Perquè la lletra sigui més gran|Para que la letra sea más grande'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Quants elements de la pàgina poden tenir <code>id="portada"</code>?|¿Cuántos elementos de la página pueden tener <code>id="portada"</code>?', opts: ['Només un|Solo uno', 'Tots els que vulguis|Todos los que quieras', 'Només els títols|Solo los títulos'], a: 0, ex: "L'id és únic. Si s'ha de repetir, és una classe.|El id es único. Si se tiene que repetir, es una clase." },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ---------- Sessió 4 · Projecte: el pòster ---------- */
    { id: 'w4-4', t: 'Projecte: el pòster|Proyecto: el póster', min: 45, proj: true, badge: 'w_poster',
      learn: ['Un bon pòster té jerarquia: un títol que es veu de lluny, la informació clau (què, quan, on) i els detalls més petits.|Un buen póster tiene jerarquía: un título que se ve de lejos, la información clave (qué, cuándo, dónde) y los detalles más pequeños.',
        'Es tria una paleta de pocs colors amb bon contrast i una o dues lletres, i es fan servir a tot el pòster.|Se elige una paleta de pocos colores con buen contraste y una o dos letras, y se usan en todo el póster.',
        "Primer es planifica en paper, després es construeix (HTML i CSS) i, al final, es revisa amb una llista i amb l'opinió d'un company/a.|Primero se planifica en papel, después se construye (HTML y CSS) y, al final, se revisa con una lista y con la opinión de un compañero/a."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Quina diferència hi ha entre <code>.titol</code> i <code>#titol</code> al CSS?|¿Qué diferencia hay entre <code>.titol</code> y <code>#titol</code> en el CSS?',
          opts: ['<code>.titol</code> és una classe (es pot repetir) i <code>#titol</code>, un id (és únic)|<code>.titol</code> es una clase (se puede repetir) y <code>#titol</code>, un id (es único)', 'Cap: són el mateix|Ninguna: son lo mismo', '<code>#titol</code> és un color hex|<code>#titol</code> es un color hex'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: 'Quina declaració està ben escrita?|¿Qué declaración está bien escrita?', opts: ['<code>font-size: 20px;</code>|<code>font-size: 20px;</code>', '<code>font-size: 20;</code>|<code>font-size: 20;</code>', '<code>font size: 20px;</code>|<code>font size: 20px;</code>'], a: 0,
          ex: 'Cal la unitat (<code>px</code>) i el nom de la propietat amb el guionet.|Hace falta la unidad (<code>px</code>) y el nombre de la propiedad con el guion.' },
        { k: 'story', ph: 'missio', who: 'both', scene: 'poble', t: "Arriba la <b>Setmana de la ciència</b> del poble i cada activitat necessita el seu pòster: l'observació d'estrelles, el taller de volcans, l'exposició de robots… Avui fas de <b>dissenyador/a</b>: triaràs una activitat (o te n'inventaràs una) i en faràs el pòster amb HTML i CSS.|Llega la <b>Semana de la ciencia</b> del pueblo y cada actividad necesita su póster: la observación de estrellas, el taller de volcanes, la exposición de robots… Hoy haces de <b>diseñador/a</b>: elegirás una actividad (o te inventarás una) y harás su póster con HTML y CSS." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El pòster|El póster', t: 'Què fa que un pòster funcioni?|¿Qué hace que un póster funcione?', media: { k: 'web', html: NIT_H, css: NIT_C },
            x: "Un pòster es mira de lluny i en pocs segons. Per això té <span class='hl'>jerarquia</span>: un títol que es veu de seguida, la informació clau (<b>què, quan, on</b>) ben clara i els detalls més petits. Pocs colors, bon contrast i una o dues lletres.|Un póster se mira de lejos y en pocos segundos. Por eso tiene <span class='hl'>jerarquía</span>: un título que se ve enseguida, la información clave (<b>qué, cuándo, dónde</b>) bien clara y los detalles más pequeños. Pocos colores, buen contraste y una o dos letras." },
          { k: 'Paleta|Paleta', t: 'Tria tres colors i repeteix-los|Elige tres colores y repítelos', media: { k: 'web', html: J('<p class="c1">#14204A · fons</p>', '<p class="c2">#FFFFFF · text</p>', '<p class="c3">#FFD54A · destacat</p>'), css: J('p {', '  font-size: 20px;', '  font-weight: bold;', '}', '.c1 {', '  background-color: #14204A;', '  color: #FFFFFF;', '}', '.c2 {', '  background-color: #FFFFFF;', '  color: #14204A;', '}', '.c3 {', '  background-color: #FFD54A;', '  color: #14204A;', '}') },
            x: "Abans de començar, els dissenyadors trien una <b>paleta</b>: un color per al fons, un per al text i un per destacar. Apunta'n els codis hex i fes servir sempre els mateixos: així el pòster sembla fet d'una peça.|Antes de empezar, los diseñadores eligen una <b>paleta</b>: un color para el fondo, uno para el texto y uno para destacar. Apunta sus códigos hex y usa siempre los mismos: así el póster parece hecho de una pieza.",
            tip: "Comprova cada parella: el text es llegeix bé sobre el fons? I sobre el color de destacar?|Comprueba cada pareja: ¿el texto se lee bien sobre el fondo? ¿Y sobre el color de destacar?" },
          { k: 'Primer, en paper|Primero, en papel', t: "L'esbós|El boceto", pic: 'img/ment/lli.webp',
            x: "Abans d'escriure codi, fes un <b>esbós</b>: dibuixa on va cada cosa, decideix què és el títol, què és la informació clau i què són els detalls, i apunta la paleta i la lletra. Així, quan obris l'editor, ja saps què has de fer.|Antes de escribir código, haz un <b>boceto</b>: dibuja dónde va cada cosa, decide qué es el título, qué es la información clave y qué son los detalles, y apunta la paleta y la letra. Así, cuando abras el editor, ya sabes qué tienes que hacer." },
          { k: 'Revisa|Revisa', t: 'La llista de revisió|La lista de revisión', media: { k: 'web', html: J('<h2>Abans de desar</h2>', '<ul>', '  <li>Es llegeix de lluny?</li>', '  <li>El contrast és bo?</li>', '  <li>Dues lletres com a molt?</li>', '  <li>Les imatges tenen alt?</li>', '  <li>Sense faltes ni errors?</li>', '</ul>'), css: J('body {', '  font-family: sans-serif;', '  background-color: #E8F5E9;', '}', 'h2 {', '  color: #1B5E20;', '}', 'li {', '  font-size: 18px;', '  color: #263238;', '}') },
            x: "Quan acabis, revisa'l com un professional: es llegeix de lluny? El contrast és bo? Hi ha com a molt dues lletres? Les imatges tenen <code>alt</code>? Hi ha faltes d'ortografia? El CSS té errors? I, sobretot, ensenya'l a algú: entén de què va en cinc segons?|Cuando termines, revísalo como un profesional: ¿se lee de lejos? ¿El contraste es bueno? ¿Hay como mucho dos letras? ¿Las imágenes tienen <code>alt</code>? ¿Hay faltas de ortografía? ¿El CSS tiene errores? Y, sobre todo, enséñaselo a alguien: ¿entiende de qué va en cinco segundos?" }
        ] },
        { k: 'seq', ph: 'mans', q: 'Ordena les fases per fer un pòster.|Ordena las fases para hacer un póster.',
          items: ["Triar l'activitat i què ha de dir el pòster|Elegir la actividad y qué tiene que decir el póster", "Fer l'esbós en paper i triar la paleta i la lletra|Hacer el boceto en papel y elegir la paleta y la letra", "Escriure l'HTML: el contingut|Escribir el HTML: el contenido", 'Afegir el CSS: l\'estil|Añadir el CSS: el estilo', 'Revisar-lo amb la llista i amb un company/a, i millorar-lo|Revisarlo con la lista y con un compañero/a, y mejorarlo'],
          ex: 'Primer pensar, després construir i, al final, revisar. Així treballen els dissenyadors web.|Primero pensar, después construir y, al final, revisar. Así trabajan los diseñadores web.' },
        { k: 'unplug', ph: 'mans', ico: '✏', title: "L'esbós del pòster|El boceto del póster",
          t: "Abans de tocar l'ordinador, planifica el teu pòster en paper amb la fitxa «L'esbós del pòster».|Antes de tocar el ordenador, planifica tu póster en papel con la ficha «El boceto del póster».",
          steps: ["Tria l'activitat: pot ser una de l'escola o una d'inventada.|Elige la actividad: puede ser una del cole o una inventada.",
            "Escriu el títol, la informació clau (què, quan, on) i un detall.|Escribe el título, la información clave (qué, cuándo, dónde) y un detalle.",
            "Dibuixa l'esbós: on va el títol, la imatge i el text.|Dibuja el boceto: dónde va el título, la imagen y el texto.",
            "Tria la paleta (3 colors amb el codi) i la lletra, i marca què tindrà l'id i què la classe.|Elige la paleta (3 colores con el código) y la letra, y marca qué tendrá el id y qué la clase.",
            "Ensenya-ho a un company/a: entén de què va el pòster en cinc segons?|Enséñaselo a un compañero/a: ¿entiende de qué va el póster en cinco segundos?"],
          tip: "No cal dibuixar bé: n'hi ha prou amb rectangles i fletxes.|No hace falta dibujar bien: basta con rectángulos y flechas." },
        { k: 'wquiz', ph: 'prova', q: "Quin d'aquests pòsters es llegeix millor de lluny?|¿Cuál de estos pósters se lee mejor de lejos?",
          opts: [{ html: '<h1>Nit d\'estrelles</h1><p>Divendres · 21 h · Pati</p>', css: 'body{background-color:#14204A;color:#FFFFFF;font-family:sans-serif;text-align:center}h1{color:#FFD54A;font-size:26px}p{font-size:18px;font-weight:bold}' },
            { html: '<h1>Nit d\'estrelles</h1><p>Divendres · 21 h · Pati</p>', css: 'body{background-color:#FFFFFF;color:#FFF59D;font-family:sans-serif}h1{font-size:16px}p{font-size:11px}' },
            { html: '<h1>Nit d\'estrelles</h1><p>Divendres · 21 h · Pati</p>', css: 'body{background-color:#9E9E9E;color:#BDBDBD;font-family:cursive}h1{font-family:monospace;font-size:20px}p{font-family:serif;font-size:12px}' }], a: 0,
          ex: 'Té un títol gran, la informació clau en negreta, només dues lletres i bon contrast: es llegeix de seguida.|Tiene un título grande, la información clave en negrita, solo dos letras y buen contraste: se lee enseguida.' },
        { k: 'wspot', ph: 'investiga', q: "El títol d'aquest pòster no agafa el color. <b>Toca la línia que té l'error.</b>|El título de este póster no coge el color. <b>Toca la línea que tiene el error.</b>",
          css: J('body {', '  font-family: sans-serif;', '  background-color: #FFF8E1;', '}', '#titol {', '  color: #B3261;', '  font-size: 48px;', '}'), bad: 6, preview: false,
          ex: "Un codi hex té 6 xifres (o 3, en la versió curta): <code>#B3261</code> en té 5 i el navegador l'ignora. Seria <code>#B3261E</code>.|Un código hex tiene 6 cifras (o 3, en la versión corta): <code>#B3261</code> tiene 5 y el navegador lo ignora. Sería <code>#B3261E</code>." },
        { k: 'wspot', ph: 'investiga', q: "Aquest pòster es veu bé, però l'HTML té un error de bones pràctiques. <b>Toca la línia.</b>|Este póster se ve bien, pero el HTML tiene un error de buenas prácticas. <b>Toca la línea.</b>",
          html: J('<h1 id="titol">Taller de volcans</h1>', '<p class="info">Dimecres a les 5 h</p>', '<p id="titol">Al laboratori</p>'), css: '#titol { color: #B3261E; } .info { font-weight: bold; }', bad: 3,
          ex: "L'id <code>titol</code> ja el té l'<code>&lt;h1&gt;</code>: no es pot repetir. Per al lloc, millor la classe <code>info</code>. Que una pàgina es vegi bé no vol dir que el codi sigui correcte!|El id <code>titol</code> ya lo tiene el <code>&lt;h1&gt;</code>: no se puede repetir. Para el lugar, mejor la clase <code>info</code>. ¡Que una página se vea bien no quiere decir que el código sea correcto!" },
        { k: 'move', ph: 'pausa', secs: 30, t: "Fes de pòster vivent! El <b>títol</b>: estira't ben amunt, tan alt com puguis. La <b>informació clau</b>: braços oberts, ben ample. Els <b>detalls</b>: ajupeix-te i fes-te petit/a. Canvia de postura cada cop que soni un pic de mans!|¡Haz de póster viviente! El <b>título</b>: estírate bien arriba, tan alto como puedas. La <b>información clave</b>: brazos abiertos, bien ancho. Los <b>detalles</b>: agáchate y hazte pequeño/a. ¡Cambia de postura cada vez que suene una palmada!" },
        { k: 'web', ph: 'repte', url: 'taller-volcans.numi', tab: 'html',
          q: "Assaja amb el pòster del taller de volcans. Primer, l'HTML: dona l'id <code>titol</code> a l'<code>&lt;h1&gt;</code>, la classe <code>info</code> als dos paràgrafs del dia i el lloc, i escriu l'<code>alt</code> de la imatge.|Ensaya con el póster del taller de volcanes. Primero, el HTML: da el id <code>titol</code> al <code>&lt;h1&gt;</code>, la clase <code>info</code> a los dos párrafos del día y el lugar, y escribe el <code>alt</code> de la imagen.",
          html: VOLCA, css: '', tabs: ['html', 'css'],
          checks: [{ k: 'id', id: 'titol' }, { k: 'class', c: 'info', min: 2 }, ALT("La imatge té un <code>alt</code> que la descriu|La imagen tiene un <code>alt</code> que la describe"), { k: 'clean' }],
          sol: { html: VOLCA_OK },
          hint: "<code>&lt;h1 id=\"titol\"&gt;</code>, <code>&lt;p class=\"info\"&gt;</code> (dues vegades) i, a la imatge, <code>alt=\"Un volcà en erupció\"</code>.|<code>&lt;h1 id=\"titol\"&gt;</code>, <code>&lt;p class=\"info\"&gt;</code> (dos veces) y, en la imagen, <code>alt=\"Un volcán en erupción\"</code>." },
        { k: 'web', ph: 'repte', url: 'taller-volcans.numi', tab: 'css',
          q: "Ara l'estil del mateix pòster: una lletra i un fons clar per a <code>body</code>, el títol <code>#titol</code> gran (30px o més) i d'un color fosc, i la classe <code>.info</code> en negreta.|Ahora el estilo del mismo póster: una letra y un fondo claro para <code>body</code>, el título <code>#titol</code> grande (30px o más) y de un color oscuro, y la clase <code>.info</code> en negrita.",
          html: VOLCA_OK, css: '', snips: [sn('body {\n  |\n}'), sn('#titol {\n  |\n}'), sn('.info {\n  |\n}')],
          checks: [{ k: 'css', s: 'body', p: 'font-family' }, { k: 'css', s: 'body', p: 'background-color' }, { k: 'css', s: '#titol', p: 'font-size', v: PX30, txt: 'El títol fa 30px o més|El título mide 30px o más' }, { k: 'css', s: '#titol', p: 'color' }, { k: 'css', s: '.info', p: 'font-weight', v: 'bold', txt: 'La classe <code>.info</code> va en negreta|La clase <code>.info</code> va en negrita' }, { k: 'cssclean' }],
          sol: { css: J('body {', '  font-family: sans-serif;', '  background-color: #FFF3E0;', '}', '#titol {', '  font-size: 40px;', '  color: #BF360C;', '}', '.info {', '  font-weight: bold;', '}') },
          hint: "Tres regles: <code>body</code>, <code>#titol</code> i <code>.info</code>. Recorda el coixinet de l'id i el punt de la classe.|Tres reglas: <code>body</code>, <code>#titol</code> y <code>.info</code>. Recuerda la almohadilla del id y el punto de la clase." },
        { k: 'web', ph: 'repte', url: 'cursa-barri.numi', tab: 'css',
          q: "En Bit ha fet el pòster de la cursa, però el text costa molt de llegir: és gris clar i petitíssim. Arregla la regla <code>p</code>: lletra de <b>18px o més</b> i un color <b>fosc</b> en hex (cada parella començant per 0-5, com <code>#333333</code>).|Bit ha hecho el póster de la carrera, pero el texto cuesta mucho de leer: es gris claro y pequeñísimo. Arregla la regla <code>p</code>: letra de <b>18px o más</b> y un color <b>oscuro</b> en hex (cada pareja empezando por 0-5, como <code>#333333</code>).",
          html: J('<h1 id="titol">Cursa del barri</h1>', '<p class="info">Diumenge a les 10 h</p>', '<p>Sortida i arribada a la plaça. Hi haurà aigua i fruita per a tothom.</p>'),
          css: J('body {', '  font-family: sans-serif;', '  background-color: #FFFFFF;', '}', '#titol {', '  color: #0D47A1;', '  font-size: 44px;', '}', 'p {', '  font-size: 11px;', '  color: #DDDDDD;', '}'),
          checks: [{ k: 'css', s: 'p', p: 'font-size', v: PX18, txt: 'Els paràgrafs fan 18px o més|Los párrafos miden 18px o más' }, { k: 'css', s: 'p', p: 'color', v: DARK5, txt: 'El text és fosc (cada parella del hex comença per 0-5)|El texto es oscuro (cada pareja del hex empieza por 0-5)' }, { k: 'cssclean' }],
          sol: { css: J('body {', '  font-family: sans-serif;', '  background-color: #FFFFFF;', '}', '#titol {', '  color: #0D47A1;', '  font-size: 44px;', '}', 'p {', '  font-size: 18px;', '  color: #333333;', '}') },
          hint: "Només cal canviar dues línies de la regla <code>p</code>: el <code>font-size</code> i el <code>color</code>.|Solo hay que cambiar dos líneas de la regla <code>p</code>: el <code>font-size</code> y el <code>color</code>." },
        { k: 'wcreate', ph: 'crea', name: 'El meu pòster|Mi póster', url: 'el-meu-poster.numi', tab: 'html',
          q: "Ara el <b>teu</b> pòster! Segueix el teu esbós: canvia els textos, tria una imatge de Numi (<code>img/ic/…</code>, com <code>rocket</code>, <code>star</code>, <code>robot</code>, <code>volcano</code>, <code>flask</code>…) i aplica la teva paleta i la teva lletra.|¡Ahora <b>tu</b> póster! Sigue tu boceto: cambia los textos, elige una imagen de Numi (<code>img/ic/…</code>, como <code>rocket</code>, <code>star</code>, <code>robot</code>, <code>volcano</code>, <code>flask</code>…) y aplica tu paleta y tu letra.",
          crit: ["Un títol <code>&lt;h1&gt;</code> amb l'id titol i una regla que el fa gran|Un título <code>&lt;h1&gt;</code> con el id titol y una regla que lo hace grande", 'Almenys 2 elements amb la classe info (què, quan, on)|Al menos 2 elementos con la clase info (qué, cuándo, dónde)', 'Una imatge amb un alt que la descriu|Una imagen con un alt que la describe', 'Lletra i color de fons a body, amb bon contrast|Letra y color de fondo en body, con buen contraste', 'Com a mínim 5 regles i cap error|Como mínimo 5 reglas y ningún error'],
          html: J('<!-- El títol: què és? -->', '<h1>Títol del pòster</h1>', '', '<!-- Una imatge de Numi -->', '<img src="img/ic/star.webp" width="100">', '', '<!-- Quan i on -->', '<p>Quan?</p>', '<p>On?</p>', '', '<!-- Un detall -->', '<p>Escriu aquí un detall.</p>'),
          css: J('/* La meva paleta', '   fons:', '   text:', '   destacat:', '   lletra:', '*/', ''),
          checks: [{ k: 'id', id: 'titol' }, { k: 'css', s: '#titol', p: 'font-size', txt: 'La regla <code>#titol</code> té <code>font-size</code>|La regla <code>#titol</code> tiene <code>font-size</code>' }, { k: 'class', c: 'info', min: 2 }, ALT('La imatge té <code>alt</code>|La imagen tiene <code>alt</code>'), { k: 'css', s: 'body', p: 'font-family' }, { k: 'css', s: 'body', p: 'background-color' }, { k: 'rules', min: 5 }, { k: 'cssclean' }, { k: 'clean' }],
          sol: { html: J('<h1 id="titol">Exposició de robots</h1>', '<img src="img/ic/robot.webp" alt="Un robot blanc somrient" width="110">', '<p class="info">Dissabte 21, de 10 a 13 h</p>', "<p class=\"info\">Al gimnàs de l'escola</p>", '<p class="nota">Els robots els han programat els alumnes de 6è.</p>'),
            css: J('/* Paleta: fons #E3F2FD, text #0D2240, destacat #C2185B · lletra: sans-serif */', 'body {', '  font-family: sans-serif;', '  background-color: #E3F2FD;', '  color: #0D2240;', '  text-align: center;', '}', '#titol {', '  font-family: serif;', '  font-size: 46px;', '  color: #C2185B;', '}', '.info {', '  font-size: 22px;', '  font-weight: bold;', '}', '.nota {', '  font-style: italic;', '}', 'p {', '  font-size: 18px;', '}') } },
        { k: 'story', ph: 'crea', who: 'numi', t: "Ja tens el pòster desat! Abans d'acabar, ensenya'l a un company/a i fes-li la <b>prova dels cinc segons</b>: mira'l cinc segons i amaga'l. Sap dir què és, quan i on? Si no, què destacaries més?|¡Ya tienes el póster guardado! Antes de terminar, enséñaselo a un compañero/a y hazle la <b>prueba de los cinco segundos</b>: que lo mire cinco segundos y escóndelo. ¿Sabe decir qué es, cuándo y dónde? Si no, ¿qué destacarías más?",
          box: "Quan valoris el pòster d'un company/a, comença per una cosa que t'agradi i després proposa una millora concreta.|Cuando valores el póster de un compañero/a, empieza por algo que te guste y después propón una mejora concreta." },
        { k: 'quiz', ph: 'tanca', q: 'Un company/a ha fet el pòster amb text groc clar sobre fons blanc. Què li dius?|Un compañero/a ha hecho el póster con texto amarillo claro sobre fondo blanco. ¿Qué le dices?',
          opts: ["«M'agrada la imatge que has triat! Potser el text es llegiria millor més fosc, o amb un fons fosc.»|«¡Me gusta la imagen que has elegido! Quizás el texto se leería mejor más oscuro, o con un fondo oscuro.»", '«Està malament, torna a començar.»|«Está mal, vuelve a empezar.»', 'Res: els colors no importen.|Nada: los colores no importan.'], a: 0,
          ex: 'Una cosa bona i una millora concreta: així el comentari ajuda de veritat.|Una cosa buena y una mejora concreta: así el comentario ayuda de verdad.' },
        { k: 'quiz', ph: 'tanca', q: 'Per què és bona idea posar <code>font-family</code> a <code>body</code>?|¿Por qué es buena idea poner <code>font-family</code> en <code>body</code>?',
          opts: ['Perquè tota la pàgina l\'hereta i la lletra és la mateixa a tot arreu|Porque toda la página la hereda y la letra es la misma en todas partes', "Perquè és l'única etiqueta que accepta lletres|Porque es la única etiqueta que acepta letras", 'Perquè la pàgina es carrega més ràpid|Porque la página se carga más rápido'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] };
})();

/* ── unitat 5 ── */
/* Tech Web · unitat 5 «Caixes»: tot és una caixa (div, width), padding i margin, vores, cantonades rodones i ombres;
   projecte «La targeta del videojoc» per a la Fira de Videojocs de l'escola */
Object.assign(TBADGE, {
  w_caixa: { id: 'w_caixa', ico: '📐', n: 'Arquitecte/a de caixes|Arquitecto/a de cajas', d: "Has descobert que tot és una caixa i has fet les teves primeres caixes amb div i width.|Has descubierto que todo es una caja y has hecho tus primeras cajas con div y width." },
  w_espai: { id: 'w_espai', ico: '📏', n: 'Mestre/a dels espais|Maestro/a de los espacios', d: 'Has fet servir padding i margin per deixar respirar les caixes i n\'has centrat una.|Has usado padding y margin para dejar respirar las cajas y has centrado una.' },
  w_ombra: { id: 'w_ombra', ico: '✨', n: 'Vores i ombres|Bordes y sombras', d: 'Has posat vores, cantonades rodones i ombres a les teves caixes.|Has puesto bordes, esquinas redondas y sombras a tus cajas.' },
  w_targeta: { id: 'w_targeta', ico: '🎴', n: 'Dissenyador/a de targetes|Diseñador/a de tarjetas', d: 'Projecte acabat: la targeta del teu videojoc per a la Fira de Videojocs.|Proyecto terminado: la tarjeta de tu videojuego para la Feria de Videojuegos.' }
});
COURSE_UNITS[5] = { t: 'Caixes|Cajas', d: 'Marges, vores i espais|Márgenes, bordes y espacios', color: '#F08A24', s: [
  /* ---------------------------------------------------------------- Sessió 1 · Tot és una caixa */
  { id: 'w5-1', t: 'Tot és una caixa|Todo es una caja', min: 45, badge: 'w_caixa',
    learn: ["Al navegador, cada element (un títol, un paràgraf, una imatge) és una caixa rectangular, encara que no la vegis.|En el navegador, cada elemento (un título, un párrafo, una imagen) es una caja rectangular, aunque no la veas.",
      "<code>&lt;div&gt;</code> és una caixa per agrupar coses; amb <code>background-color</code> i <code>width</code> decideixes com es veu i quant ocupa.|<code>&lt;div&gt;</code> es una caja para agrupar cosas; con <code>background-color</code> y <code>width</code> decides cómo se ve y cuánto ocupa.",
      "Cada caixa té quatre capes: el contingut, el padding, el border i el margin.|Cada caja tiene cuatro capas: el contenido, el padding, el border y el margin."],
    steps: [
      { k: 'quiz', ph: 'recorda', q: "Recordes com s'escriu una regla de CSS? Quina d'aquestes fa que el títol <code>&lt;h1&gt;</code> sigui blau?|¿Recuerdas cómo se escribe una regla de CSS? ¿Cuál de estas hace que el título <code>&lt;h1&gt;</code> sea azul?",
        opts: ['<code>h1 { color: blue; }</code>|<code>h1 { color: blue; }</code>', '<code>h1 { blue: color; }</code>|<code>h1 { blue: color; }</code>', '<code>h1 ( color = blue )</code>|<code>h1 ( color = blue )</code>'], a: 0,
        ex: "Primer el selector, després les claus i, a dins, <code>propietat: valor;</code>. Avui aprendràs propietats noves que segueixen exactament la mateixa forma.|Primero el selector, después las llaves y, dentro, <code>propiedad: valor;</code>. Hoy aprenderás propiedades nuevas que siguen exactamente la misma forma." },
      { k: 'quiz', ph: 'recorda', q: "Vols donar el mateix estil a <b>tres</b> paràgrafs de la pàgina. Què fas servir?|Quieres dar el mismo estilo a <b>tres</b> párrafos de la página. ¿Qué usas?",
        opts: ["Una classe: <code>class=\"destacat\"</code> i <code>.destacat { … }</code>|Una clase: <code>class=\"destacat\"</code> y <code>.destacat { … }</code>", "Un id: <code>id=\"destacat\"</code> als tres paràgrafs|Un id: <code>id=\"destacat\"</code> en los tres párrafos", "No es pot: cada paràgraf necessita la seva regla|No se puede: cada párrafo necesita su regla"], a: 0,
        ex: "Una classe es pot repetir tantes vegades com vulguis; un id és únic, només per a un element. Avui farem servir moltes classes!|Una clase se puede repetir tantas veces como quieras; un id es único, solo para un elemento. ¡Hoy usaremos muchas clases!" },
      { k: 'story', ph: 'missio', who: 'both', scene: 'poble', title: 'La Fira de Videojocs|La Feria de Videojuegos',
        t: "Gran notícia: l'escola del poble organitza la <b>Fira de Videojocs</b>! Cada equip presentarà el videojoc que ha creat, i la web de la fira tindrà una <b>targeta</b> per a cada videojoc. Al final de la unitat, en dissenyaràs una tu.|¡Gran noticia: la escuela del pueblo organiza la <b>Feria de Videojuegos</b>! Cada equipo presentará el videojuego que ha creado, y la web de la feria tendrá una <b>tarjeta</b> para cada videojuego. Al final de la unidad, diseñarás una tú." },
      { k: 'story', ph: 'missio', who: 'bit', scene: 'poble', mood: 'think',
        t: "BIP! He mirat la web de la fira amb les meves ulleres de raigs X i he descobert un secret: <b>tot són caixes</b>! El títol, els paràgrafs, les imatges… Si vols fer targetes boniques, primer has d'entendre les caixes.|¡BIP! He mirado la web de la feria con mis gafas de rayos X y he descubierto un secreto: ¡<b>todo son cajas</b>! El título, los párrafos, las imágenes… Si quieres hacer tarjetas bonitas, primero tienes que entender las cajas." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Caixes|Cajas', t: 'Tot és una caixa|Todo es una caja', anim: 'w5box',
          x: "El navegador dibuixa cada element dins d'una <span class='hl'>caixa</span> rectangular invisible. Els títols, els paràgrafs i les llistes són caixes que ocupen <b>tota la fila</b> i es posen una sota l'altra. Les negretes, les cursives i els enllaços viatgen dins de la línia del text.|El navegador dibuja cada elemento dentro de una <span class='hl'>caja</span> rectangular invisible. Los títulos, los párrafos y las listas son cajas que ocupan <b>toda la fila</b> y se colocan una debajo de la otra. Las negritas, las cursivas y los enlaces viajan dentro de la línea del texto.",
          tip: "Els dissenyadors web pensen en caixes: abans de fer una pàgina, dibuixen rectangles en un paper.|Los diseñadores web piensan en cajas: antes de hacer una página, dibujan rectángulos en un papel." },
        { k: 'Veure-les|Verlas', t: 'Un color de fons per veure la caixa|Un color de fondo para ver la caja',
          media: { k: 'web', html: `<h1>Fira de Videojocs</h1>\n<p>Vine a provar els videojocs de l'escola!</p>`, css: `h1 {\n  background-color: gold;\n}\np {\n  background-color: lightblue;\n}` },
          x: "<code>background-color</code> pinta <b>tota la caixa</b>, no només les lletres. Fixa't que la caixa del títol arriba fins a la dreta, encara que el text sigui curt: la caixa ocupa tota la fila.|<code>background-color</code> pinta <b>toda la caja</b>, no solo las letras. Fíjate en que la caja del título llega hasta la derecha, aunque el texto sea corto: la caja ocupa toda la fila." },
        { k: '&lt;div&gt;|&lt;div&gt;', t: 'La caixa per agrupar: &lt;div&gt;|La caja para agrupar: &lt;div&gt;',
          media: { k: 'web', html: `<div class="targeta">\n  <h2>Drac Volador</h2>\n  <p>Un videojoc de dracs i núvols.</p>\n</div>`, css: `.targeta {\n  background-color: #FFE9C7;\n}` },
          x: "<code>&lt;div&gt;</code> ve de <i>division</i>: és una caixa que no vol dir res per si sola, només <b>agrupa</b> altres caixes. Li posem una classe (<code>class=\"targeta\"</code>) per poder-li donar estil amb <code>.targeta { … }</code>.|<code>&lt;div&gt;</code> viene de <i>division</i>: es una caja que no significa nada por sí sola, solo <b>agrupa</b> otras cajas. Le ponemos una clase (<code>class=\"targeta\"</code>) para poder darle estilo con <code>.targeta { … }</code>.",
          bad: "Faig servir <code>&lt;div&gt;</code> per a tot, també per als títols i els paràgrafs.|Uso <code>&lt;div&gt;</code> para todo, también para los títulos y los párrafos.", good: "Els títols amb <code>&lt;h2&gt;</code>, el text amb <code>&lt;p&gt;</code> i el <code>&lt;div&gt;</code> només per agrupar.|Los títulos con <code>&lt;h2&gt;</code>, el texto con <code>&lt;p&gt;</code> y el <code>&lt;div&gt;</code> solo para agrupar." },
        { k: 'Caixes dins de caixes|Cajas dentro de cajas', t: 'Com els ous a la capsa|Como los huevos en la caja', pic: 'img/ment/int.webp',
          x: "Una caixa pot tenir caixes a dins, com una capsa d'ous. A la targeta, el <code>&lt;div&gt;</code> és la capsa i el <code>&lt;h2&gt;</code> i el <code>&lt;p&gt;</code> són els ous: si mous la capsa, tot el que hi ha a dins es mou amb ella.|Una caja puede tener cajas dentro, como una caja de huevos. En la tarjeta, el <code>&lt;div&gt;</code> es la caja y el <code>&lt;h2&gt;</code> y el <code>&lt;p&gt;</code> son los huevos: si mueves la caja, todo lo que hay dentro se mueve con ella.",
          tip: "Per això és important tancar bé el <code>&lt;/div&gt;</code>: diu on acaba la capsa.|Por eso es importante cerrar bien el <code>&lt;/div&gt;</code>: dice dónde termina la caja." },
        { k: 'Les capes|Las capas', t: 'Les quatre capes de cada caixa|Las cuatro capas de cada caja', anim: 'w5layers',
          x: "Totes les caixes tenen quatre capes, de dins cap a fora: el <b>contingut</b> (el text o la imatge), el <b>padding</b> (l'espai de dins), el <b>border</b> (la vora) i el <b>margin</b> (l'espai de fora, que la separa de les altres). A les sessions que vénen les farem servir totes.|Todas las cajas tienen cuatro capas, de dentro hacia fuera: el <b>contenido</b> (el texto o la imagen), el <b>padding</b> (el espacio de dentro), el <b>border</b> (el borde) y el <b>margin</b> (el espacio de fuera, que la separa de las demás). En las próximas sesiones las usaremos todas." },
        { k: 'Com un quadre|Como un cuadro', t: 'Un quadre penjat a la paret|Un cuadro colgado en la pared', anim: 'w5frame',
          x: "Pensa en un quadre: la pintura és el <b>contingut</b>, el cartró blanc del voltant (el paspartú) és el <b>padding</b>, el marc és el <b>border</b> i l'espai de paret fins al quadre del costat és el <b>margin</b>.|Piensa en un cuadro: la pintura es el <b>contenido</b>, el cartón blanco de alrededor (el paspartú) es el <b>padding</b>, el marco es el <b>border</b> y el espacio de pared hasta el cuadro de al lado es el <b>margin</b>." }
      ] },
      { k: 'seq', ph: 'mans', q: "Ordena les quatre capes d'una caixa, <b>de dins cap a fora</b>.|Ordena las cuatro capas de una caja, <b>de dentro hacia fuera</b>.",
        items: ['Contingut (el text o la imatge)|Contenido (el texto o la imagen)', 'Padding (espai de dins)|Padding (espacio de dentro)', 'Border (la vora)|Border (el borde)', 'Margin (espai de fora)|Margin (espacio de fuera)'],
        ex: "Com el quadre: pintura, paspartú, marc i paret.|Como el cuadro: pintura, paspartú, marco y pared." },
      { k: 'unplug', ph: 'mans', ico: '🔍', title: 'Caça caixes a casa|Caza cajas en casa',
        t: "Les caixes també són fora de la pantalla! Busca a casa un quadre, una foto amb marc o un llibre amb la tapa dura.|¡Las cajas también están fuera de la pantalla! Busca en casa un cuadro, una foto con marco o un libro con tapa dura.",
        steps: ["Dibuixa'l en un paper, gran.|Dibújalo en un papel, grande.", "Pinta cada capa d'un color: el contingut, el padding (l'espai fins a la vora), el border (el marc) i el margin (l'espai de fora).|Pinta cada capa de un color: el contenido, el padding (el espacio hasta el borde), el border (el marco) y el margin (el espacio de fuera).", "Escriu al costat el nom de cada capa.|Escribe al lado el nombre de cada capa.", "Ensenya-ho a algú de casa i explica-li què és cada capa.|Enséñaselo a alguien de casa y explícale qué es cada capa."],
        tip: "Una finestra, un mòbil amb funda o un rètol del carrer també són caixes. Quantes en trobes?|Una ventana, un móvil con funda o un cartel de la calle también son cajas. ¿Cuántas encuentras?" },
      { k: 'wquiz', ph: 'prova', q: "Pensa abans de mirar: quina vista prèvia fa aquest codi?|Piensa antes de mirar: ¿qué vista previa da este código?",
        code: { html: `<h1>Fira</h1>\n<p>Hola!</p>`, css: `p {\n  background-color: gold;\n}` },
        opts: [{ html: `<h1>Fira</h1><p>Hola!</p>`, css: `p { background-color: gold; }` }, { html: `<h1>Fira</h1><p>Hola!</p>`, css: `p { background-color: gold; width: 52px; }` }, { html: `<h1>Fira</h1><p>Hola!</p>`, css: `h1 { background-color: gold; }` }], a: 0,
        ex: "El paràgraf és una caixa que ocupa <b>tota la fila</b>: el color de fons arriba fins a la dreta, encara que la paraula sigui curta.|El párrafo es una caja que ocupa <b>toda la fila</b>: el color de fondo llega hasta la derecha, aunque la palabra sea corta." },
      { k: 'web', ph: 'repte', url: 'fira.numi', q: "Fes visibles les caixes! Dona un <b>color de fons</b> al títol <code>&lt;h1&gt;</code> i un altre al paràgraf <code>&lt;p&gt;</code>.|¡Haz visibles las cajas! Da un <b>color de fondo</b> al título <code>&lt;h1&gt;</code> y otro al párrafo <code>&lt;p&gt;</code>.",
        html: `<h1>Fira de Videojocs</h1>\n<p>Dissabte, a la plaça de l'escola.</p>`, css: `h1 {\n  \n}\n`,
        snips: [{ t: 'background-color: |;', tab: 'css' }, { t: 'p {\n  |\n}', tab: 'css' }],
        checks: [{ k: 'styled', t: 'h1', p: 'background-color', txt: "El <code>&lt;h1&gt;</code> té color de fons|El <code>&lt;h1&gt;</code> tiene color de fondo" }, { k: 'styled', t: 'p', p: 'background-color', txt: "El <code>&lt;p&gt;</code> té color de fons|El <code>&lt;p&gt;</code> tiene color de fondo" }, { k: 'cssclean' }],
        sol: { css: `h1 {\n  background-color: gold;\n}\np {\n  background-color: lightblue;\n}` },
        hint: "Dins de les claus de <code>h1</code> escriu <code>background-color: gold;</code>. Després fes una regla nova per a <code>p</code>.|Dentro de las llaves de <code>h1</code> escribe <code>background-color: gold;</code>. Después haz una regla nueva para <code>p</code>." },
      { k: 'web', ph: 'repte', url: 'fira.numi', q: "Posa el títol i el text del videojoc <b>dins d'una caixa</b> <code>&lt;div class=\"targeta\"&gt;</code> i dona-li un color de fons amb la regla <code>.targeta</code>.|Pon el título y el texto del videojuego <b>dentro de una caja</b> <code>&lt;div class=\"targeta\"&gt;</code> y dale un color de fondo con la regla <code>.targeta</code>.",
        html: `<h2>Drac Volador</h2>\n<p>Vola entre els núvols i esquiva els llamps.</p>`, css: `.targeta {\n  \n}`,
        snips: ['<div class="targeta">', '</div>', { t: 'background-color: |;', tab: 'css' }],
        checks: [{ k: 'class', c: 'targeta' }, { k: 'in', t: 'h2', p: 'div', txt: "El <code>&lt;h2&gt;</code> és dins del <code>&lt;div&gt;</code>|El <code>&lt;h2&gt;</code> está dentro del <code>&lt;div&gt;</code>" }, { k: 'in', t: 'p', p: 'div', txt: "El <code>&lt;p&gt;</code> és dins del <code>&lt;div&gt;</code>|El <code>&lt;p&gt;</code> está dentro del <code>&lt;div&gt;</code>" }, { k: 'css', s: '.targeta', p: 'background-color' }, { k: 'clean' }],
        sol: { html: `<div class="targeta">\n  <h2>Drac Volador</h2>\n  <p>Vola entre els núvols i esquiva els llamps.</p>\n</div>`, css: `.targeta {\n  background-color: #FFE9C7;\n}` },
        hint: "Escriu <code>&lt;div class=\"targeta\"&gt;</code> a la primera línia i <code>&lt;/div&gt;</code> a l'última: el títol i el paràgraf queden al mig.|Escribe <code>&lt;div class=\"targeta\"&gt;</code> en la primera línea y <code>&lt;/div&gt;</code> en la última: el título y el párrafo quedan en medio." },
      { k: 'move', ph: 'pausa', secs: 30, t: "Fes de caixa! Posa els braços en rodona davant del pit: ets una caixa amb <b>padding</b>. Obre'ls molt: més padding! Ara fes un pas al costat per allunyar-te del company/a: això és el <b>margin</b>.|¡Haz de caja! Pon los brazos en círculo delante del pecho: eres una caja con <b>padding</b>. Ábrelos mucho: ¡más padding! Ahora da un paso al lado para alejarte del compañero/a: eso es el <b>margin</b>." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'width|width', t: 'Quant ocupa? La propietat width|¿Cuánto ocupa? La propiedad width',
          media: { k: 'web', html: `<div class="petita">width: 160px</div>\n<div class="meitat">width: 50%</div>`, css: `.petita {\n  background-color: gold;\n  width: 160px;\n}\n.meitat {\n  background-color: lightblue;\n  width: 50%;\n}` },
          x: "Si no li dius res, una caixa com el <code>&lt;div&gt;</code> ocupa tota l'amplada. Amb <code>width</code> tu decideixes: en <b>px</b> (píxels) fa sempre la mateixa mida; en <b>%</b> és una part de l'espai que té, i canvia si la pantalla és més gran o més petita.|Si no le dices nada, una caja como el <code>&lt;div&gt;</code> ocupa toda la anchura. Con <code>width</code> tú decides: en <b>px</b> (píxeles) mide siempre lo mismo; en <b>%</b> es una parte del espacio que tiene, y cambia si la pantalla es más grande o más pequeña.",
          tip: "Prova els botons 📱 i 💻 de la vista prèvia: la caixa en % canvia de mida i la de px, no.|Prueba los botones 📱 y 💻 de la vista previa: la caja en % cambia de tamaño y la de px, no." },
        { k: 'Compte!|¡Cuidado!', t: 'Els números necessiten la unitat|Los números necesitan la unidad',
          media: { k: 'web', html: `<div class="a">width: 200;</div>\n<div class="b">width: 200px;</div>`, css: `.a {\n  background-color: tomato;\n  width: 200;\n}\n.b {\n  background-color: gold;\n  width: 200px;\n}` },
          x: "Si escrius <code>width: 200;</code>, el navegador no sap si són píxels, centímetres o elefants, i <b>s'ignora la línia</b> sense avisar. Mira la caixa vermella: continua ocupant tota la fila.|Si escribes <code>width: 200;</code>, el navegador no sabe si son píxeles, centímetros o elefantes, e <b>ignora la línea</b> sin avisar. Mira la caja roja: sigue ocupando toda la fila.",
          bad: "<code>width: 200;</code> o <code>width: 200 px;</code>|<code>width: 200;</code> o <code>width: 200 px;</code>", good: "<code>width: 200px;</code> (el número i la unitat junts)|<code>width: 200px;</code> (el número y la unidad juntos)" },
        { k: 'height|height', t: "I l'alçada? Millor que la decideixi el contingut|¿Y la altura? Mejor que la decida el contenido",
          media: { k: 'web', html: `<div class="baixa">Aquesta caixa fa 40px d'alçada, però el text és massa llarg i se n'escapa per baix.</div>`, css: `.baixa {\n  background-color: #FFD6E5;\n  width: 180px;\n  height: 40px;\n}` },
          x: "També existeix <code>height</code> (l'alçada), però si el text no hi cap, <b>se n'escapa</b>. Normalment deixem que la caixa creixi tant com calgui segons el que hi ha a dins, i només fem servir <code>height</code> per a coses de mida fixa, com una xapa rodona.|También existe <code>height</code> (la altura), pero si el texto no cabe, <b>se escapa</b>. Normalmente dejamos que la caja crezca tanto como haga falta según lo que haya dentro, y solo usamos <code>height</code> para cosas de tamaño fijo, como una chapa redonda." }
      ] },
      { k: 'web', ph: 'repte', url: 'fira.numi/drac-volador', q: "La targeta del Drac Volador ocupa massa. Dona-li una amplada entre <b>150px i 300px</b> amb <code>width</code>.|La tarjeta del Drac Volador ocupa demasiado. Dale una anchura entre <b>150px y 300px</b> con <code>width</code>.",
        html: `<div class="targeta">\n  <img src="img/tech/web/drac.svg" alt="Un drac verd que vola">\n  <h2>Drac Volador</h2>\n  <p>Vola entre els núvols i esquiva els llamps.</p>\n</div>`, css: `.targeta {\n  background-color: #FFE9C7;\n  \n}`,
        snips: [{ t: 'width: |px;', tab: 'css' }],
        checks: [{ k: 'css', s: '.targeta', p: 'width', v: '/^(1[5-9]\\d|2\\d\\d|300)px$/', txt: "<code>.targeta</code> fa entre 150px i 300px d'amplada|<code>.targeta</code> mide entre 150px y 300px de anchura" }, { k: 'cssclean' }],
        sol: { css: `.targeta {\n  background-color: #FFE9C7;\n  width: 220px;\n}` },
        hint: "Afegeix una línia dins de <code>.targeta</code>: <code>width: 220px;</code>. No t'oblidis del <b>px</b>!|Añade una línea dentro de <code>.targeta</code>: <code>width: 220px;</code>. ¡No te olvides del <b>px</b>!" },
      { k: 'web', ph: 'repte', url: 'fira.numi/avisos', q: "Aquest avís fa sempre 300px. Canvia l'amplada perquè ocupi el <b>80 %</b> de l'espai i compara-ho amb els botons 📱 i 💻.|Este aviso mide siempre 300px. Cambia la anchura para que ocupe el <b>80 %</b> del espacio y compáralo con los botones 📱 y 💻.",
        html: `<div class="avis">\n  <h2>Inscripcions obertes</h2>\n  <p>Apunta el teu equip a la fira abans de divendres.</p>\n</div>`, css: `.avis {\n  background-color: #FFD6E5;\n  width: 300px;\n}`,
        checks: [{ k: 'css', s: '.avis', p: 'width', v: '/^80%$/', txt: "<code>.avis</code> fa el 80 % d'amplada|<code>.avis</code> mide el 80 % de anchura" }, { k: 'cssclean' }],
        sol: { css: `.avis {\n  background-color: #FFD6E5;\n  width: 80%;\n}` },
        hint: "Canvia <code>300px</code> per <code>80%</code>: el número i el símbol <b>%</b> junts.|Cambia <code>300px</code> por <code>80%</code>: el número y el símbolo <b>%</b> juntos." },
      { k: 'wspot', ph: 'investiga', q: "Aquesta targeta havia de fer 250 píxels d'amplada, però ocupa tota la fila. <b>Toca la línia</b> que té l'error.|Esta tarjeta tenía que medir 250 píxeles de anchura, pero ocupa toda la fila. <b>Toca la línea</b> que tiene el error.",
        css: `.targeta {\n  background-color: lightgreen;\n  width: 250;\n}`, bad: 3, page: `<div class="targeta">\n  <h2>Robot Saltador</h2>\n  <p>Salta de plataforma en plataforma.</p>\n</div>`,
        ex: "Falta la unitat: <code>width: 250px;</code>. Sense <b>px</b>, el navegador no entén el número i s'ignora la línia.|Falta la unidad: <code>width: 250px;</code>. Sin <b>px</b>, el navegador no entiende el número e ignora la línea." },
      { k: 'wspot', ph: 'investiga', q: "Aquí la segona targeta queda <b>dins</b> de la primera, com una capsa dins d'una altra. Quina línia s'ha d'arreglar?|Aquí la segunda tarjeta queda <b>dentro</b> de la primera, como una caja dentro de otra. ¿Qué línea hay que arreglar?",
        html: `<div class="targeta">\n  <h2>Robot Saltador</h2>\n  <p>Salta de plataforma en plataforma.</p>\n<div>\n<div class="targeta">\n  <h2>Coet Lunar</h2>\n  <p>Viatja fins a la Lluna.</p>\n</div>`, bad: 4,
        ex: "A la línia 4 hi ha <code>&lt;div&gt;</code> i hi havia d'anar <code>&lt;/div&gt;</code>: sense la barra, en lloc de tancar la capsa se n'obre una altra.|En la línea 4 hay <code>&lt;div&gt;</code> y tenía que ir <code>&lt;/div&gt;</code>: sin la barra, en lugar de cerrar la caja se abre otra." },
      { k: 'wcreate', ph: 'crea', url: 'fira.numi', name: 'El cartell de la fira|El cartel de la feria',
        q: "Ara tu! Fes el <b>cartell</b> que anuncia la Fira de Videojocs: una caixa <code>&lt;div class=\"cartell\"&gt;</code> amb un títol i un text, amb color de fons i amplada.|¡Ahora tú! Haz el <b>cartel</b> que anuncia la Feria de Videojuegos: una caja <code>&lt;div class=\"cartell\"&gt;</code> con un título y un texto, con color de fondo y anchura.",
        crit: ["Una caixa <code>&lt;div class=\"cartell\"&gt;</code> amb un <code>&lt;h2&gt;</code> i un <code>&lt;p&gt;</code> a dins|Una caja <code>&lt;div class=\"cartell\"&gt;</code> con un <code>&lt;h2&gt;</code> y un <code>&lt;p&gt;</code> dentro", "La regla <code>.cartell</code> té <code>background-color</code> i <code>width</code> (amb px o %)|La regla <code>.cartell</code> tiene <code>background-color</code> y <code>width</code> (con px o %)", "Extra: una imatge amb <code>alt</code>, per exemple <code>img/tech/web/consola.svg</code>|Extra: una imagen con <code>alt</code>, por ejemplo <code>img/tech/web/consola.svg</code>"],
        html: `<!-- El cartell de la fira: una caixa amb un títol i un text -->\n`, css: ``,
        snips: ['<div class="cartell">\n  |\n</div>', '<h2>|</h2>', '<p>|</p>', '<img src="img/tech/web/consola.svg" alt="|">', { t: '.cartell {\n  |\n}', tab: 'css' }],
        checks: [{ k: 'class', c: 'cartell' }, { k: 'in', t: 'h2', p: 'div', txt: "Dins de la caixa hi ha un títol <code>&lt;h2&gt;</code>|Dentro de la caja hay un título <code>&lt;h2&gt;</code>" }, { k: 'in', t: 'p', p: 'div', txt: "Dins de la caixa hi ha un paràgraf <code>&lt;p&gt;</code>|Dentro de la caja hay un párrafo <code>&lt;p&gt;</code>" }, { k: 'css', s: '.cartell', p: 'background-color' }, { k: 'css', s: '.cartell', p: 'width', v: '/^\\d+(px|%)$/', txt: "<code>.cartell</code> té una amplada amb px o %|<code>.cartell</code> tiene una anchura con px o %" }, { k: 'clean' }, { k: 'cssclean' }],
        sol: { html: `<div class="cartell">\n  <img src="img/tech/web/consola.svg" alt="Un comandament de videoconsola">\n  <h2>Fira de Videojocs</h2>\n  <p>Dissabte a les 11, a la plaça. Vine a provar els videojocs que hem creat a l'escola!</p>\n</div>`, css: `.cartell {\n  background-color: #E0F4FF;\n  width: 280px;\n}\nh2 {\n  color: #1C3FB8;\n}` },
        hint: "Comença per l'HTML: el <code>&lt;div class=\"cartell\"&gt;</code> i, a dins, el <code>&lt;h2&gt;</code> i el <code>&lt;p&gt;</code>. Després, a la pestanya CSS, la regla <code>.cartell { … }</code>.|Empieza por el HTML: el <code>&lt;div class=\"cartell\"&gt;</code> y, dentro, el <code>&lt;h2&gt;</code> y el <code>&lt;p&gt;</code>. Después, en la pestaña CSS, la regla <code>.cartell { … }</code>." },
      { k: 'quiz', ph: 'tanca', q: "Per acabar: quina és la capa <b>de dins de tot</b> d'una caixa?|Para terminar: ¿cuál es la capa <b>de dentro del todo</b> de una caja?",
        opts: ['El contingut|El contenido', 'El margin|El margin', 'El border|El border'], a: 0, ex: "El contingut (el text o la imatge) és al centre; a fora hi ha el padding, el border i el margin.|El contenido (el texto o la imagen) está en el centro; fuera están el padding, el border y el margin." },
      { k: 'quiz', ph: 'tanca', q: "Què passa si escrius <code>width: 300;</code>?|¿Qué pasa si escribes <code>width: 300;</code>?",
        opts: ["El navegador ignora la línia: falta la unitat (px o %)|El navegador ignora la línea: falta la unidad (px o %)", 'La caixa fa 300 píxels|La caja mide 300 píxeles', 'La caixa fa el 300 % de la pantalla|La caja mide el 300 % de la pantalla'], a: 0 },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------------------------------------------------------------- Sessió 2 · Marges i farciment */
  { id: 'w5-2', t: 'Marges i farciment|Márgenes y relleno', min: 45, badge: 'w_espai',
    learn: ["El <code>padding</code> és l'espai de dins, entre el contingut i la vora: el color de fons s'hi veu.|El <code>padding</code> es el espacio de dentro, entre el contenido y el borde: el color de fondo se ve en él.",
      "El <code>margin</code> és l'espai de fora, que separa la caixa de les altres, i sempre és transparent.|El <code>margin</code> es el espacio de fuera, que separa la caja de las demás, y siempre es transparente.",
      "Amb quatre valors, l'ordre és el del rellotge (dalt, dreta, baix, esquerra), i <code>margin: 0 auto</code> centra una caixa que té amplada.|Con cuatro valores, el orden es el del reloj (arriba, derecha, abajo, izquierda), y <code>margin: 0 auto</code> centra una caja que tiene anchura."],
    steps: [
      { k: 'quiz', ph: 'recorda', q: "Recordes les capes de la caixa? Quina és <b>entre el contingut i la vora</b>?|¿Recuerdas las capas de la caja? ¿Cuál está <b>entre el contenido y el borde</b>?",
        opts: ['El padding|El padding', 'El margin|El margin', 'El width|El width'], a: 0, ex: "El padding és l'espai de dins. Avui aprendràs a fer-lo servir, i també el margin, l'espai de fora.|El padding es el espacio de dentro. Hoy aprenderás a usarlo, y también el margin, el espacio de fuera." },
      { k: 'quiz', ph: 'recorda', q: "Per què <code>width: 200;</code> no fa res?|¿Por qué <code>width: 200;</code> no hace nada?",
        opts: ['Perquè falta la unitat, com px o %|Porque falta la unidad, como px o %', 'Perquè 200 és massa gran|Porque 200 es demasiado grande', 'Perquè width només funciona amb imatges|Porque width solo funciona con imágenes'], a: 0, ex: "Sense unitat, el navegador ignora la línia. Avui també posarem sempre px als espais.|Sin unidad, el navegador ignora la línea. Hoy también pondremos siempre px en los espacios." },
      { k: 'story', ph: 'missio', who: 'both', scene: 'taller', title: 'Targetes enganxades|Tarjetas pegadas',
        t: "Els equips de la fira ja tenen les primeres targetes, però hi ha un problema: el text <b>toca les vores</b> i les targetes estan <b>enganxades</b> les unes a les altres. Costa molt de llegir! Avui donarem aire a les caixes.|Los equipos de la feria ya tienen las primeras tarjetas, pero hay un problema: el texto <b>toca los bordes</b> y las tarjetas están <b>pegadas</b> unas a otras. ¡Cuesta mucho leerlas! Hoy daremos aire a las cajas." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'padding|padding', t: "Dins i fora: padding i margin|Dentro y fuera: padding y margin", anim: 'w5pad',
          x: "El <span class='hl'>padding</span> (farciment) és l'espai <b>de dins</b>: separa el contingut de la vora i la caixa creix amb el color de fons. El <span class='hl'>margin</span> (marge) és l'espai <b>de fora</b>: separa la caixa de les seves veïnes i és transparent.|El <span class='hl'>padding</span> (relleno) es el espacio <b>de dentro</b>: separa el contenido del borde y la caja crece con el color de fondo. El <span class='hl'>margin</span> (margen) es el espacio <b>de fuera</b>: separa la caja de sus vecinas y es transparente." },
        { k: 'padding|padding', t: 'Deixa respirar el text|Deja respirar el texto',
          media: { k: 'web', html: `<div class="sense">Sense padding: el text toca la vora.</div>\n<div class="amb">Amb padding: el text respira.</div>`, css: `.sense {\n  background-color: #FFF3B0;\n}\n.amb {\n  background-color: #C9F0D8;\n  padding: 20px;\n}` },
          x: "Amb <code>padding: 20px;</code> hi ha 20 píxels d'espai a cada costat del text, per dins de la caixa. El text es llegeix molt millor quan no toca la vora.|Con <code>padding: 20px;</code> hay 20 píxeles de espacio a cada lado del texto, por dentro de la caja. El texto se lee mucho mejor cuando no toca el borde." },
        { k: 'margin|margin', t: 'Separa les caixes|Separa las cajas',
          media: { k: 'web', html: `<div class="nota">Nota 1</div>\n<div class="nota">Nota 2</div>\n<div class="nota">Nota 3</div>`, css: `.nota {\n  background-color: #9FD0FF;\n  padding: 10px;\n  margin: 16px;\n}` },
          x: "Amb <code>margin: 16px;</code> cada nota deixa 16 píxels d'aire al seu voltant. Fixa't que l'espai entre les notes és transparent: s'hi veu el fons de la pàgina.|Con <code>margin: 16px;</code> cada nota deja 16 píxeles de aire a su alrededor. Fíjate en que el espacio entre las notas es transparente: se ve el fondo de la página." },
        { k: 'Compte!|¡Cuidado!', t: 'Padding o margin?|¿Padding o margin?',
          media: { k: 'web', html: `<div class="p">padding: 20px</div>\n<div class="p">padding: 20px</div>\n<div class="m">margin: 20px</div>\n<div class="m">margin: 20px</div>`, css: `.p {\n  background-color: #FFB8D2;\n  padding: 20px;\n}\n.m {\n  background-color: #C9F0D8;\n  margin: 20px;\n}` },
          x: "Amb padding, les caixes roses es fan més grosses però continuen enganxades. Amb margin, les verdes se separen. Pregunta't: vull espai <b>dins</b> de la caixa o <b>entre</b> caixes?|Con padding, las cajas rosas se hacen más grandes pero siguen pegadas. Con margin, las verdes se separan. Pregúntate: ¿quiero espacio <b>dentro</b> de la caja o <b>entre</b> cajas?",
          bad: "Per separar dues targetes, els poso padding.|Para separar dos tarjetas, les pongo padding.", good: "Padding perquè el text no toqui la vora; margin per separar les targetes.|Padding para que el texto no toque el borde; margin para separar las tarjetas." }
      ] },
      { k: 'quiz', ph: 'mans', q: "Al cartell de l'equip, les lletres <b>toquen la vora</b> de la caixa. Què hi afegeixes?|En el cartel del equipo, las letras <b>tocan el borde</b> de la caja. ¿Qué le añades?",
        opts: ['<code>padding</code>|<code>padding</code>', '<code>margin</code>|<code>margin</code>', '<code>width</code>|<code>width</code>'], a: 0, ex: "El padding fa espai per dins, entre el text i la vora.|El padding hace espacio por dentro, entre el texto y el borde." },
      { k: 'unplug', ph: 'mans', ico: '📏', title: 'El tauler de casa|El tablero de casa',
        t: "Necessites tres papers petits (o tres pòstits) i algú de casa. Fareu de navegador!|Necesitas tres papeles pequeños (o tres pósits) y a alguien de casa. ¡Haréis de navegador!",
        steps: ["Escriu un missatge curt a cada paper, deixant <b>un dit</b> d'espai fins a la vora: aquest és el padding.|Escribe un mensaje corto en cada papel, dejando <b>un dedo</b> de espacio hasta el borde: ese es el padding.", "Posa'ls a la taula, l'un sota l'altre, amb <b>dos dits</b> d'espai entre ells: aquest és el margin.|Ponlos en la mesa, uno debajo del otro, con <b>dos dedos</b> de espacio entre ellos: ese es el margin.", "Ara l'altra persona et dona ordres de CSS: «margin: 0!», «margin: quatre dits!». Tu els mous.|Ahora la otra persona te da órdenes de CSS: «¡margin: 0!», «¡margin: cuatro dedos!». Tú los mueves.", "Canvieu els papers: ara mana l'altra persona.|Cambiad los papeles: ahora manda la otra persona."],
        tip: "Fixa't que el padding no es pot canviar sense tornar a escriure el paper, però el margin, sí: només cal moure'l.|Fíjate en que el padding no se puede cambiar sin volver a escribir el papel, pero el margin sí: solo hay que moverlo." },
      { k: 'web', ph: 'repte', url: 'fira.numi/equips', q: "El text de la nota toca la vora. Afegeix <code>padding</code> a <code>.nota</code> (un sol valor en px, per exemple <code>15px</code>).|El texto de la nota toca el borde. Añade <code>padding</code> a <code>.nota</code> (un solo valor en px, por ejemplo <code>15px</code>).",
        html: `<div class="nota">\n  <h2>Equip Dracs</h2>\n  <p>Hem creat un videojoc de dracs que volen entre els núvols.</p>\n</div>`, css: `.nota {\n  background-color: #FFF3B0;\n  width: 260px;\n  \n}`,
        snips: [{ t: 'padding: |px;', tab: 'css' }],
        checks: [{ k: 'css', s: '.nota', p: 'padding', v: '/^\\d+px$/', txt: "<code>.nota</code> té <code>padding</code> (un valor en px)|<code>.nota</code> tiene <code>padding</code> (un valor en px)" }, { k: 'cssclean' }],
        sol: { css: `.nota {\n  background-color: #FFF3B0;\n  width: 260px;\n  padding: 15px;\n}` },
        hint: "Escriu <code>padding: 15px;</code> a la línia buida de dins de <code>.nota</code>.|Escribe <code>padding: 15px;</code> en la línea vacía de dentro de <code>.nota</code>." },
      { k: 'web', ph: 'repte', url: 'fira.numi/equips', q: "Ara hi ha dues notes enganxades. Separa-les amb <code>margin</code> (un sol valor en px).|Ahora hay dos notas pegadas. Sepáralas con <code>margin</code> (un solo valor en px).",
        html: `<div class="nota">\n  <h2>Equip Dracs</h2>\n  <p>Un videojoc de dracs que volen entre els núvols.</p>\n</div>\n<div class="nota">\n  <h2>Equip Coets</h2>\n  <p>Un videojoc de coets que viatgen per l'espai.</p>\n</div>`, css: `.nota {\n  background-color: #FFF3B0;\n  width: 260px;\n  padding: 15px;\n}`,
        snips: [{ t: 'margin: |px;', tab: 'css' }],
        checks: [{ k: 'css', s: '.nota', p: 'margin', v: '/^\\d+px$/', txt: "<code>.nota</code> té <code>margin</code> (un valor en px)|<code>.nota</code> tiene <code>margin</code> (un valor en px)" }, { k: 'class', c: 'nota', min: 2 }, { k: 'cssclean' }],
        sol: { css: `.nota {\n  background-color: #FFF3B0;\n  width: 260px;\n  padding: 15px;\n  margin: 16px;\n}` },
        hint: "Afegeix <code>margin: 16px;</code> a <code>.nota</code>. Com que les dues notes tenen la classe, totes dues se separen.|Añade <code>margin: 16px;</code> a <code>.nota</code>. Como las dos notas tienen la clase, las dos se separan." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Un costat|Un lado', t: 'Només per un costat|Solo por un lado',
          media: { k: 'web', html: `<p class="cita">El millor videojoc de la fira!</p>`, css: `.cita {\n  background-color: #EEF2FD;\n  padding-left: 40px;\n  margin-top: 30px;\n}` },
          x: "Pots posar espai només a un costat: <code>padding-top</code> (dalt), <code>padding-right</code> (dreta), <code>padding-bottom</code> (baix) i <code>padding-left</code> (esquerra). Amb el margin, igual: <code>margin-top</code>, <code>margin-left</code>…|Puedes poner espacio solo en un lado: <code>padding-top</code> (arriba), <code>padding-right</code> (derecha), <code>padding-bottom</code> (abajo) y <code>padding-left</code> (izquierda). Con el margin, igual: <code>margin-top</code>, <code>margin-left</code>…" },
        { k: 'El rellotge|El reloj', t: "Quatre valors en una línia|Cuatro valores en una línea", anim: 'w5clock',
          x: "<code>margin: 10px 20px 30px 40px;</code> posa els quatre costats d'una vegada, en l'ordre de les agulles del rellotge: <b>dalt, dreta, baix i esquerra</b>. Amb dos valors, <code>padding: 10px 30px;</code>, el primer és per a dalt i baix i el segon, per als costats.|<code>margin: 10px 20px 30px 40px;</code> pone los cuatro lados de una vez, en el orden de las agujas del reloj: <b>arriba, derecha, abajo e izquierda</b>. Con dos valores, <code>padding: 10px 30px;</code>, el primero es para arriba y abajo y el segundo, para los lados.",
          tip: "Per recordar l'ordre, comença a les 12 del rellotge i ves girant.|Para recordar el orden, empieza en las 12 del reloj y ve girando." },
        { k: 'Centrar|Centrar', t: 'Una caixa al mig: margin: 0 auto|Una caja en medio: margin: 0 auto',
          media: { k: 'web', html: `<div class="targeta">Soc al mig!</div>`, css: `.targeta {\n  background-color: #C9F0D8;\n  width: 160px;\n  padding: 10px;\n  margin: 0 auto;\n}` },
          x: "Amb <code>margin: 0 auto;</code>, dalt i baix hi ha 0 i els costats són <code>auto</code>: el navegador reparteix l'espai que sobra a parts iguals i la caixa queda <b>centrada</b>.|Con <code>margin: 0 auto;</code>, arriba y abajo hay 0 y los lados son <code>auto</code>: el navegador reparte el espacio que sobra a partes iguales y la caja queda <b>centrada</b>.",
          bad: "Poso <code>margin: 0 auto;</code> a una caixa sense <code>width</code>.|Pongo <code>margin: 0 auto;</code> a una caja sin <code>width</code>.", good: "Primer <code>width</code> i després <code>margin: 0 auto;</code>: si ocupa tota la fila, no hi ha espai per repartir.|Primero <code>width</code> y después <code>margin: 0 auto;</code>: si ocupa toda la fila, no hay espacio que repartir." }
      ] },
      { k: 'wquiz', ph: 'prova', q: "Pensa abans de mirar: quina vista prèvia fa aquest codi?|Piensa antes de mirar: ¿qué vista previa da este código?",
        code: { html: `<div class="caixa">Hola!</div>`, css: `.caixa {\n  background-color: gold;\n  padding: 10px 40px;\n}` },
        opts: [{ html: `<div class="caixa">Hola!</div>`, css: `.caixa { background-color: gold; padding: 10px 40px; }` }, { html: `<div class="caixa">Hola!</div>`, css: `.caixa { background-color: gold; padding: 40px 10px; }` }, { html: `<div class="caixa">Hola!</div>`, css: `.caixa { background-color: gold; margin: 10px 40px; }` }], a: 0,
        ex: "Amb dos valors, el primer (10px) és per a dalt i baix i el segon (40px), per als costats: la caixa és baixeta i el text s'aparta de l'esquerra.|Con dos valores, el primero (10px) es para arriba y abajo y el segundo (40px), para los lados: la caja es bajita y el texto se aparta de la izquierda." },
      { k: 'quiz', ph: 'investiga', q: "Amb <code>margin: 5px 10px 15px 20px;</code>, quin és el marge de l'<b>esquerra</b>?|Con <code>margin: 5px 10px 15px 20px;</code>, ¿cuál es el margen de la <b>izquierda</b>?",
        opts: ['20px|20px', '5px|5px', '10px|10px'], a: 0, ex: "Dalt 5px, dreta 10px, baix 15px i esquerra 20px: l'esquerra és l'últim, com les 9 al rellotge.|Arriba 5px, derecha 10px, abajo 15px e izquierda 20px: la izquierda es el último, como las 9 en el reloj." },
      { k: 'move', ph: 'pausa', secs: 30, t: "Fes de rellotge! Braç dret amunt (dalt), després cap a la dreta, avall i cap a l'esquerra. Fes-ho tres vegades dient en veu alta: «dalt, dreta, baix, esquerra».|¡Haz de reloj! Brazo derecho arriba (arriba), después hacia la derecha, abajo y hacia la izquierda. Hazlo tres veces diciendo en voz alta: «arriba, derecha, abajo, izquierda»." },
      { k: 'web', ph: 'repte', url: 'fira.numi/coets', q: "Canvia el padding de la targeta perquè tingui <b>10px a dalt i a baix</b> i <b>30px als costats</b>, amb una sola línia de dos valors.|Cambia el padding de la tarjeta para que tenga <b>10px arriba y abajo</b> y <b>30px a los lados</b>, con una sola línea de dos valores.",
        html: `<div class="targeta">\n  <h2>Coet Lunar</h2>\n  <p>Pilota el coet fins a la Lluna i esquiva els meteorits.</p>\n</div>`, css: `.targeta {\n  background-color: #E0F4FF;\n  width: 240px;\n  padding: 10px;\n}`,
        checks: [{ k: 'css', s: '.targeta', p: 'padding', v: '/^10px\\s+30px$/', txt: "<code>padding: 10px 30px;</code>|<code>padding: 10px 30px;</code>" }, { k: 'cssclean' }],
        sol: { css: `.targeta {\n  background-color: #E0F4FF;\n  width: 240px;\n  padding: 10px 30px;\n}` },
        hint: "El primer valor és per a dalt i baix, i el segon, per a la dreta i l'esquerra: <code>padding: 10px 30px;</code>.|El primer valor es para arriba y abajo, y el segundo, para la derecha y la izquierda: <code>padding: 10px 30px;</code>." },
      { k: 'web', ph: 'repte', url: 'fira.numi/coets', q: "Posa la targeta <b>al mig</b> de la pàgina amb <code>margin</code> i <code>auto</code>. Mira-ho al mòbil 📱 i a l'ordinador 💻.|Pon la tarjeta <b>en medio</b> de la página con <code>margin</code> y <code>auto</code>. Míralo en el móvil 📱 y en el ordenador 💻.",
        html: `<div class="targeta">\n  <h2>Coet Lunar</h2>\n  <p>Pilota el coet fins a la Lluna i esquiva els meteorits.</p>\n</div>`, css: `.targeta {\n  background-color: #E0F4FF;\n  width: 240px;\n  padding: 10px 30px;\n}`,
        snips: [{ t: 'margin: 0 auto|;', tab: 'css' }],
        checks: [{ k: 'css', s: '.targeta', p: 'margin', v: '/^\\S+\\s+auto$/', txt: "<code>.targeta</code> té <code>margin</code> amb <code>auto</code> als costats|<code>.targeta</code> tiene <code>margin</code> con <code>auto</code> a los lados" }, { k: 'css', s: '.targeta', p: 'width', txt: "<code>.targeta</code> continua tenint <code>width</code>|<code>.targeta</code> sigue teniendo <code>width</code>" }, { k: 'cssclean' }],
        sol: { css: `.targeta {\n  background-color: #E0F4FF;\n  width: 240px;\n  padding: 10px 30px;\n  margin: 0 auto;\n}` },
        hint: "Afegeix <code>margin: 0 auto;</code>: 0 a dalt i a baix, i <code>auto</code> als costats.|Añade <code>margin: 0 auto;</code>: 0 arriba y abajo, y <code>auto</code> a los lados." },
      { k: 'wspot', ph: 'investiga', q: "Aquesta nota no té gens de padding, i hauria de tenir-ne. <b>Toca la línia</b> amb l'error.|Esta nota no tiene nada de padding, y debería tenerlo. <b>Toca la línea</b> con el error.",
        css: `.nota {\n  background-color: #FFF3B0;\n  padding: 10px, 20px;\n  width: 250px;\n}`, bad: 3, page: `<div class="nota">\n  <h2>Equip Coets</h2>\n  <p>Un videojoc de coets que viatgen per l'espai.</p>\n</div>`,
        ex: "Els valors se separen amb <b>espais</b>, no amb comes: <code>padding: 10px 20px;</code>. Amb la coma, el navegador no ho entén i s'ignora la línia.|Los valores se separan con <b>espacios</b>, no con comas: <code>padding: 10px 20px;</code>. Con la coma, el navegador no lo entiende e ignora la línea." },
      { k: 'wspot', ph: 'investiga', q: "Aquesta targeta havia de quedar centrada, però s'enganxa a l'esquerra. Quina línia està malament?|Esta tarjeta tenía que quedar centrada, pero se pega a la izquierda. ¿Qué línea está mal?",
        css: `.targeta {\n  background-color: #E0F4FF;\n  width: 240px;\n  margin: auto 0;\n}`, bad: 4, page: `<div class="targeta">\n  <h2>Coet Lunar</h2>\n  <p>Pilota el coet fins a la Lluna.</p>\n</div>`,
        ex: "L'ordre està girat: el primer valor és per a dalt i baix, i el segon, per als costats. Ha de ser <code>margin: 0 auto;</code>.|El orden está al revés: el primer valor es para arriba y abajo, y el segundo, para los lados. Tiene que ser <code>margin: 0 auto;</code>." },
      { k: 'wcreate', ph: 'crea', url: 'fira.numi/avisos', name: "El tauler d'avisos|El tablón de anuncios",
        q: "Fes el <b>tauler d'avisos</b> de la fira: almenys dues caixes <code>&lt;div class=\"avis\"&gt;</code> amb padding perquè el text respiri, margin perquè no s'enganxin i una amplada, centrades al mig.|Haz el <b>tablón de anuncios</b> de la feria: al menos dos cajas <code>&lt;div class=\"avis\"&gt;</code> con padding para que el texto respire, margin para que no se peguen y una anchura, centradas en medio.",
        crit: ["Almenys dos avisos <code>&lt;div class=\"avis\"&gt;</code> amb títol i text|Al menos dos avisos <code>&lt;div class=\"avis\"&gt;</code> con título y texto", "La regla <code>.avis</code> té <code>background-color</code>, <code>width</code>, <code>padding</code> i <code>margin</code>|La regla <code>.avis</code> tiene <code>background-color</code>, <code>width</code>, <code>padding</code> y <code>margin</code>", "Extra: els avisos queden centrats amb <code>auto</code>|Extra: los avisos quedan centrados con <code>auto</code>"],
        html: `<h1>Tauler de la fira</h1>\n<!-- Afegeix aquí almenys dos avisos amb la classe "avis" -->\n`, css: `.avis {\n  \n}`,
        snips: ['<div class="avis">\n  <h2>|</h2>\n  <p></p>\n</div>', { t: 'padding: |;', tab: 'css' }, { t: 'margin: |;', tab: 'css' }],
        checks: [{ k: 'class', c: 'avis', min: 2 }, { k: 'css', s: '.avis', p: 'background-color' }, { k: 'css', s: '.avis', p: 'width' }, { k: 'css', s: '.avis', p: 'padding' }, { k: 'css', s: '.avis', p: 'margin' }, { k: 'clean' }, { k: 'cssclean' }],
        sol: { html: `<h1>Tauler de la fira</h1>\n<div class="avis">\n  <h2>Horari</h2>\n  <p>La fira obre dissabte de 11 a 14 h.</p>\n</div>\n<div class="avis">\n  <h2>On és?</h2>\n  <p>A la plaça de l'escola, al costat de la font.</p>\n</div>\n<div class="avis">\n  <h2>Premis</h2>\n  <p>Hi haurà un premi per al videojoc més original.</p>\n</div>`, css: `.avis {\n  background-color: #FFF3B0;\n  width: 260px;\n  padding: 12px 18px;\n  margin: 16px auto;\n}\nh1 {\n  color: #B4501A;\n}` },
        hint: "Primer l'HTML: copia el <code>&lt;div class=\"avis\"&gt;</code> amb el seu títol i el seu text dues o tres vegades. Després omple la regla <code>.avis</code>.|Primero el HTML: copia el <code>&lt;div class=\"avis\"&gt;</code> con su título y su texto dos o tres veces. Después rellena la regla <code>.avis</code>." },
      { k: 'quiz', ph: 'tanca', q: "Quin dels dos espais es pinta amb el <b>color de fons</b> de la caixa?|¿Cuál de los dos espacios se pinta con el <b>color de fondo</b> de la caja?",
        opts: ['El padding|El padding', 'El margin|El margin', 'Tots dos|Los dos'], a: 0, ex: "El padding és dins de la caixa i agafa el seu color; el margin és fora i és transparent.|El padding está dentro de la caja y coge su color; el margin está fuera y es transparente." },
      { k: 'quiz', ph: 'tanca', q: "Què fa <code>margin: 0 auto;</code> en una caixa que té <code>width</code>?|¿Qué hace <code>margin: 0 auto;</code> en una caja que tiene <code>width</code>?",
        opts: ['La centra a la pàgina|La centra en la página', 'Li treu tot el color|Le quita todo el color', 'La fa ocupar tota la fila|La hace ocupar toda la fila'], a: 0 },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------------------------------------------------------------- Sessió 3 · Vores i ombres */
  { id: 'w5-3', t: 'Vores i ombres|Bordes y sombras', min: 45, badge: 'w_ombra',
    learn: ["<code>border</code> necessita tres coses: el gruix, l'estil i el color (<code>border: 3px solid navy;</code>); sense l'estil, no es veu.|<code>border</code> necesita tres cosas: el grosor, el estilo y el color (<code>border: 3px solid navy;</code>); sin el estilo, no se ve.",
      "<code>border-radius</code> arrodoneix les cantonades i, amb <code>50%</code>, una caixa quadrada es torna rodona.|<code>border-radius</code> redondea las esquinas y, con <code>50%</code>, una caja cuadrada se vuelve redonda.",
      "<code>box-shadow</code> posa una ombra (dreta, avall, difuminat i color), i l'amplada total d'una caixa és width + padding + border.|<code>box-shadow</code> pone una sombra (derecha, abajo, difuminado y color), y la anchura total de una caja es width + padding + border."],
    steps: [
      { k: 'quiz', ph: 'recorda', q: "Què vol dir <code>padding: 10px 20px;</code>?|¿Qué significa <code>padding: 10px 20px;</code>?",
        opts: ['10px a dalt i a baix, i 20px als costats|10px arriba y abajo, y 20px a los lados', '10px a l\'esquerra i 20px a la dreta|10px a la izquierda y 20px a la derecha', 'Entre 10 i 20 píxels, el navegador tria|Entre 10 y 20 píxeles, el navegador elige'], a: 0, ex: "Amb dos valors, el primer és per a dalt i baix i el segon, per als costats.|Con dos valores, el primero es para arriba y abajo y el segundo, para los lados." },
      { k: 'quiz', ph: 'recorda', q: "Quin espai és <b>transparent</b> i separa una caixa de les altres?|¿Qué espacio es <b>transparente</b> y separa una caja de las demás?",
        opts: ['El margin|El margin', 'El padding|El padding', 'El contingut|El contenido'], a: 0, ex: "Molt bé! Avui ens falta l'última capa: el border, la vora que hi ha entre el padding i el margin.|¡Muy bien! Hoy nos falta la última capa: el border, el borde que hay entre el padding y el margin." },
      { k: 'story', ph: 'missio', who: 'both', scene: 'lab', title: 'Targetes de col·leccionista|Tarjetas de coleccionista',
        t: "Les targetes de la fira ja respiren, però semblen paper pla. Els equips volen que s'assemblin a les <b>targetes de col·leccionista</b>: amb una vora de colors, les cantonades rodones i una mica d'ombra, com si sortissin de la pantalla.|Las tarjetas de la feria ya respiran, pero parecen papel plano. Los equipos quieren que se parezcan a las <b>tarjetas de coleccionista</b>: con un borde de colores, las esquinas redondas y un poco de sombra, como si salieran de la pantalla." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'border|border', t: 'La vora: gruix, estil i color|El borde: grosor, estilo y color',
          media: { k: 'web', html: `<div class="a">solid</div>\n<div class="b">dashed</div>\n<div class="c">dotted</div>\n<div class="d">double</div>`, css: `div {\n  padding: 8px;\n  margin: 8px;\n}\n.a { border: 4px solid #2F5BEA; }\n.b { border: 4px dashed #E5489A; }\n.c { border: 4px dotted #1FA463; }\n.d { border: 6px double #F08A24; }` },
          x: "<code>border: 4px solid blue;</code> diu tres coses: el <b>gruix</b> (4px), l'<b>estil</b> (<code>solid</code> és una línia contínua, <code>dashed</code> fa ratlles, <code>dotted</code> fa punts i <code>double</code> fa dues línies) i el <b>color</b>.|<code>border: 4px solid blue;</code> dice tres cosas: el <b>grosor</b> (4px), el <b>estilo</b> (<code>solid</code> es una línea continua, <code>dashed</code> hace rayas, <code>dotted</code> hace puntos y <code>double</code> hace dos líneas) y el <b>color</b>." },
        { k: 'Compte!|¡Cuidado!', t: "Sense l'estil, no hi ha vora|Sin el estilo, no hay borde",
          media: { k: 'web', html: `<div class="no">border: 4px red;</div>\n<div class="si">border: 4px solid red;</div>`, css: `div {\n  padding: 8px;\n  margin: 8px;\n}\n.no {\n  border: 4px red;\n}\n.si {\n  border: 4px solid red;\n}` },
          x: "Si t'oblides de l'estil, el navegador entén que la vora és invisible i no en dibuixa cap. És l'error més típic amb les vores!|Si te olvidas del estilo, el navegador entiende que el borde es invisible y no dibuja ninguno. ¡Es el error más típico con los bordes!",
          bad: "<code>border: 4px red;</code>|<code>border: 4px red;</code>", good: "<code>border: 4px solid red;</code>|<code>border: 4px solid red;</code>" },
        { k: 'Un costat|Un lado', t: 'Una vora només a un costat|Un borde solo en un lado',
          media: { k: 'web', html: `<p class="cita">«El videojoc més divertit de la fira!»</p>\n<h2 class="ratlla">Nivells</h2>`, css: `.cita {\n  border-left: 6px solid tomato;\n  padding-left: 12px;\n}\n.ratlla {\n  border-bottom: 3px dashed #8B5CF6;\n}` },
          x: "Com amb el padding i el margin, pots posar la vora només en un costat: <code>border-left</code>, <code>border-right</code>, <code>border-top</code> o <code>border-bottom</code>. Queda molt bé per destacar una cita o subratllar un títol.|Como con el padding y el margin, puedes poner el borde solo en un lado: <code>border-left</code>, <code>border-right</code>, <code>border-top</code> o <code>border-bottom</code>. Queda muy bien para destacar una cita o subrayar un título." },
        { k: 'Amplada total|Anchura total', t: 'Quant ocupa de debò una caixa?|¿Cuánto ocupa de verdad una caja?', anim: 'w5total',
          x: "Compte: <code>width</code> és només el contingut. El padding i el border se sumen a cada costat: <b>8 + 20 + 160 + 20 + 8 = 216px</b>. Si vols que la caixa faci exactament el que diu <code>width</code>, afegeix <code>box-sizing: border-box;</code>.|Cuidado: <code>width</code> es solo el contenido. El padding y el border se suman a cada lado: <b>8 + 20 + 160 + 20 + 8 = 216px</b>. Si quieres que la caja mida exactamente lo que dice <code>width</code>, añade <code>box-sizing: border-box;</code>.",
          tip: "Molts dissenyadors posen <code>box-sizing: border-box;</code> a totes les caixes perquè els comptes siguin fàcils.|Muchos diseñadores ponen <code>box-sizing: border-box;</code> en todas las cajas para que las cuentas sean fáciles." }
      ] },
      { k: 'quiz', ph: 'mans', q: "Fes els comptes! Una caixa té <code>width: 150px;</code>, <code>padding: 10px;</code> i <code>border: 5px solid black;</code>. Quant fa d'amplada <b>en total</b>?|¡Haz las cuentas! Una caja tiene <code>width: 150px;</code>, <code>padding: 10px;</code> y <code>border: 5px solid black;</code>. ¿Cuánto mide de anchura <b>en total</b>?",
        opts: ['180px|180px', '165px|165px', '150px|150px'], a: 0, ex: "5 + 10 + 150 + 10 + 5 = 180px. El padding i el border hi són dues vegades: a l'esquerra i a la dreta.|5 + 10 + 150 + 10 + 5 = 180px. El padding y el border están dos veces: a la izquierda y a la derecha." },
      { k: 'unplug', ph: 'mans', ico: '🔦', title: 'Caça vores i ombres|Caza bordes y sombras',
        t: "Les vores i les ombres són a tot arreu. Busca-les a casa amb una llanterna o un llum!|Los bordes y las sombras están por todas partes. ¡Búscalos en casa con una linterna o una lámpara!",
        steps: ["Troba tres coses amb les cantonades rodones (el mòbil, una tauleta, un plat…) i una amb les cantonades rectes.|Encuentra tres cosas con las esquinas redondas (el móvil, una tableta, un plato…) y una con las esquinas rectas.", "Posa un llibre a la taula i il·lumina'l des de dalt a l'esquerra: on cau l'ombra?|Pon un libro en la mesa e ilumínalo desde arriba a la izquierda: ¿dónde cae la sombra?", "Mou la llum: com més lluny, més llarga i difuminada és l'ombra.|Mueve la luz: cuanto más lejos, más larga y difuminada es la sombra.", "Dibuixa una de les coses i escriu-hi al costat el seu CSS: <code>border-radius</code> i <code>box-shadow</code>.|Dibuja una de las cosas y escribe al lado su CSS: <code>border-radius</code> y <code>box-shadow</code>."],
        tip: "A les webs, la llum gairebé sempre ve de dalt a l'esquerra: per això les ombres van cap a la dreta i avall.|En las webs, la luz casi siempre viene de arriba a la izquierda: por eso las sombras van hacia la derecha y abajo." },
      { k: 'web', ph: 'repte', url: 'fira.numi/castell', q: "Posa una <b>vora</b> a la targeta del Castell Encantat: tria el gruix (en px), l'estil (<code>solid</code>, <code>dashed</code>, <code>dotted</code> o <code>double</code>) i el color.|Pon un <b>borde</b> a la tarjeta del Castell Encantat: elige el grosor (en px), el estilo (<code>solid</code>, <code>dashed</code>, <code>dotted</code> o <code>double</code>) y el color.",
        html: `<div class="targeta">\n  <img src="img/tech/web/castell.svg" alt="Un castell amb dues torres i banderes">\n  <h2>Castell Encantat</h2>\n  <p>Troba les claus amagades a cada torre del castell.</p>\n</div>`, css: `.targeta {\n  background-color: #FFF8E6;\n  width: 240px;\n  padding: 12px;\n  margin: 0 auto;\n  \n}`,
        snips: [{ t: 'border: |px solid ;', tab: 'css' }],
        checks: [{ k: 'css', s: '.targeta', p: 'border', v: '/^(?=.*\\d+px)(?=.*\\b(solid|dashed|dotted|double)\\b).+$/', txt: "<code>.targeta</code> té una vora amb gruix i estil|<code>.targeta</code> tiene un borde con grosor y estilo" }, { k: 'cssclean' }],
        sol: { css: `.targeta {\n  background-color: #FFF8E6;\n  width: 240px;\n  padding: 12px;\n  margin: 0 auto;\n  border: 4px solid #8B5CF6;\n}` },
        hint: "Escriu <code>border: 4px solid #8B5CF6;</code>: gruix, estil i color, separats per espais.|Escribe <code>border: 4px solid #8B5CF6;</code>: grosor, estilo y color, separados por espacios." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'border-radius|border-radius', t: 'Cantonades rodones|Esquinas redondas', anim: 'w5radius',
          x: "<code>border-radius: 20px;</code> arrodoneix les quatre cantonades. Com més gran és el número, més rodones. I amb <code>50%</code>, una caixa quadrada (amb la mateixa amplada i alçada) es converteix en un <b>cercle</b>.|<code>border-radius: 20px;</code> redondea las cuatro esquinas. Cuanto más grande es el número, más redondas. Y con <code>50%</code>, una caja cuadrada (con la misma anchura y altura) se convierte en un <b>círculo</b>." },
        { k: 'Rodó|Redondo', t: 'Imatges i xapes rodones|Imágenes y chapas redondas',
          media: { k: 'web', html: `<img class="foto" src="img/tech/web/castell.svg" alt="Un castell">\n<div class="xapa"></div>`, css: `.foto {\n  width: 200px;\n  border-radius: 16px;\n}\n.xapa {\n  width: 90px;\n  height: 90px;\n  background-color: gold;\n  border-radius: 50%;\n}` },
          x: "<code>border-radius</code> també funciona amb les imatges: les cantonades es retallen i la foto queda més suau. La xapa groga és un quadrat de 90 × 90 amb <code>border-radius: 50%</code>.|<code>border-radius</code> también funciona con las imágenes: las esquinas se recortan y la foto queda más suave. La chapa amarilla es un cuadrado de 90 × 90 con <code>border-radius: 50%</code>." },
        { k: 'box-shadow|box-shadow', t: 'Una ombra sota la caixa|Una sombra bajo la caja', anim: 'w5shadow',
          x: "<code>box-shadow: 6px 8px 12px gray;</code> dibuixa una ombra: 6px <b>a la dreta</b>, 8px <b>avall</b>, 12px de <b>difuminat</b> i el <b>color</b>. Si el difuminat és 0, l'ombra té la vora dura.|<code>box-shadow: 6px 8px 12px gray;</code> dibuja una sombra: 6px <b>a la derecha</b>, 8px <b>abajo</b>, 12px de <b>difuminado</b> y el <b>color</b>. Si el difuminado es 0, la sombra tiene el borde duro." },
        { k: 'Ombra suau|Sombra suave', t: 'Les ombres suaus queden millor|Las sombras suaves quedan mejor',
          media: { k: 'web', html: `<div class="dura">Ombra negra i dura</div>\n<div class="suau">Ombra suau</div>`, css: `div {\n  width: 180px;\n  padding: 14px;\n  margin: 20px;\n  background-color: white;\n  border-radius: 12px;\n}\n.dura {\n  box-shadow: 8px 8px 0 black;\n}\n.suau {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);\n}` },
          x: "Amb <code>rgba(0, 0, 0, 0.25)</code> l'ombra és negra però <b>transparent</b>: el quart número va de 0 (invisible) a 1 (opac). Les ombres suaus i difuminades fan que la caixa sembli que flota, sense fer mal als ulls.|Con <code>rgba(0, 0, 0, 0.25)</code> la sombra es negra pero <b>transparente</b>: el cuarto número va de 0 (invisible) a 1 (opaco). Las sombras suaves y difuminadas hacen que la caja parezca que flota, sin hacer daño a la vista.",
          bad: "Una ombra negra, gruixuda i sense difuminat a tot arreu.|Una sombra negra, gruesa y sin difuminado en todas partes.", good: "Una ombra suau: poc desplaçament, difuminada i transparent.|Una sombra suave: poco desplazamiento, difuminada y transparente." }
      ] },
      { k: 'wquiz', ph: 'prova', q: "Aquesta caixa fa 100 × 100. Quina vista prèvia fa el codi?|Esta caja mide 100 × 100. ¿Qué vista previa da el código?",
        code: { html: `<div class="xapa"></div>`, css: `.xapa {\n  width: 100px;\n  height: 100px;\n  background-color: gold;\n  border-radius: 50%;\n}` },
        opts: [{ html: `<div class="xapa"></div>`, css: `.xapa { width: 100px; height: 100px; background-color: gold; border-radius: 50%; }` }, { html: `<div class="xapa"></div>`, css: `.xapa { width: 100px; height: 100px; background-color: gold; border-radius: 16px; }` }, { html: `<div class="xapa"></div>`, css: `.xapa { width: 100px; height: 100px; background-color: gold; }` }], a: 0,
        ex: "Amb <code>50%</code> les cantonades s'arrodoneixen fins al mig de cada costat: un quadrat es torna un cercle.|Con <code>50%</code> las esquinas se redondean hasta la mitad de cada lado: un cuadrado se vuelve un círculo." },
      { k: 'quiz', ph: 'investiga', q: "Amb <code>box-shadow: 10px 0 8px gray;</code>, cap on cau l'ombra?|Con <code>box-shadow: 10px 0 8px gray;</code>, ¿hacia dónde cae la sombra?",
        opts: ['Només cap a la dreta|Solo hacia la derecha', 'Només cap avall|Solo hacia abajo', 'Cap a la dreta i avall|Hacia la derecha y abajo'], a: 0, ex: "El primer número (10px) és cap a la dreta i el segon (0) és cap avall: com que és 0, no baixa gens.|El primer número (10px) es hacia la derecha y el segundo (0) es hacia abajo: como es 0, no baja nada." },
      { k: 'move', ph: 'pausa', secs: 30, t: "Fes d'ombra! Posa't dret/a al costat del company/a. Quan digui «box-shadow dreta», fes un pas a la dreta; «avall», ajup-te una mica; «difuminat», mou els braços com si fossis de fum.|¡Haz de sombra! Ponte de pie al lado del compañero/a. Cuando diga «box-shadow derecha», da un paso a la derecha; «abajo», agáchate un poco; «difuminado», mueve los brazos como si fueras de humo." },
      { k: 'web', ph: 'repte', url: 'fira.numi/castell', q: "Arrodoneix les cantonades de la <b>targeta</b> (en px) i també les de la <b>imatge</b>, amb una regla per a <code>img</code>.|Redondea las esquinas de la <b>tarjeta</b> (en px) y también las de la <b>imagen</b>, con una regla para <code>img</code>.",
        html: `<div class="targeta">\n  <img src="img/tech/web/castell.svg" alt="Un castell amb dues torres i banderes">\n  <h2>Castell Encantat</h2>\n  <p>Troba les claus amagades a cada torre del castell.</p>\n</div>`, css: `.targeta {\n  background-color: #FFF8E6;\n  width: 240px;\n  padding: 12px;\n  margin: 0 auto;\n  border: 4px solid #8B5CF6;\n  \n}`,
        snips: [{ t: 'border-radius: |px;', tab: 'css' }, { t: 'img {\n  border-radius: |px;\n}', tab: 'css' }],
        checks: [{ k: 'css', s: '.targeta', p: 'border-radius', v: '/^\\d+px$/', txt: "<code>.targeta</code> té les cantonades rodones (px)|<code>.targeta</code> tiene las esquinas redondas (px)" }, { k: 'styled', t: 'img', p: 'border-radius', txt: "La imatge té les cantonades rodones|La imagen tiene las esquinas redondas" }, { k: 'cssclean' }],
        sol: { css: `.targeta {\n  background-color: #FFF8E6;\n  width: 240px;\n  padding: 12px;\n  margin: 0 auto;\n  border: 4px solid #8B5CF6;\n  border-radius: 18px;\n}\nimg {\n  border-radius: 10px;\n}` },
        hint: "A <code>.targeta</code> afegeix <code>border-radius: 18px;</code>. Després fes una regla nova: <code>img { border-radius: 10px; }</code>.|En <code>.targeta</code> añade <code>border-radius: 18px;</code>. Después haz una regla nueva: <code>img { border-radius: 10px; }</code>." },
      { k: 'web', ph: 'repte', url: 'fira.numi/castell', q: "Ara fes que la targeta floti: posa-li una <b>ombra</b> amb <code>box-shadow</code> (dreta, avall, difuminat i color).|Ahora haz que la tarjeta flote: ponle una <b>sombra</b> con <code>box-shadow</code> (derecha, abajo, difuminado y color).",
        html: `<div class="targeta">\n  <img src="img/tech/web/castell.svg" alt="Un castell amb dues torres i banderes">\n  <h2>Castell Encantat</h2>\n  <p>Troba les claus amagades a cada torre del castell.</p>\n</div>`, css: `.targeta {\n  background-color: #FFF8E6;\n  width: 240px;\n  padding: 12px;\n  margin: 0 auto;\n  border: 4px solid #8B5CF6;\n  border-radius: 18px;\n  \n}\nimg {\n  border-radius: 10px;\n}`,
        snips: [{ t: 'box-shadow: 4px 6px 12px |;', tab: 'css' }, { t: 'rgba(0, 0, 0, 0.|3)', tab: 'css' }],
        checks: [{ k: 'css', s: '.targeta', p: 'box-shadow', v: '/^-?\\d+(px)?\\s+-?\\d+(px)?/', txt: "<code>.targeta</code> té una ombra (<code>box-shadow</code>)|<code>.targeta</code> tiene una sombra (<code>box-shadow</code>)" }, { k: 'cssclean' }],
        sol: { css: `.targeta {\n  background-color: #FFF8E6;\n  width: 240px;\n  padding: 12px;\n  margin: 0 auto;\n  border: 4px solid #8B5CF6;\n  border-radius: 18px;\n  box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.3);\n}\nimg {\n  border-radius: 10px;\n}` },
        hint: "Prova <code>box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.3);</code> i després canvia els números per veure què passa.|Prueba <code>box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.3);</code> y después cambia los números para ver qué pasa." },
      { k: 'web', ph: 'repte', url: 'fira.numi/robot', q: "Aquesta targeta té <b>dos errors</b>: la vora no es veu i les cantonades no s'arrodoneixen. Troba'ls i arregla'ls.|Esta tarjeta tiene <b>dos errores</b>: el borde no se ve y las esquinas no se redondean. Encuéntralos y arréglalos.",
        html: `<div class="targeta">\n  <img src="img/tech/web/robot.svg" alt="Un robot blanc amb ulls blaus">\n  <h2>Robot Saltador</h2>\n  <p>Salta de plataforma en plataforma sense caure.</p>\n</div>`, css: `.targeta {\n  background-color: #EEF2FD;\n  width: 220px;\n  padding: 12px;\n  margin: 0 auto;\n  border: 3px #2F5BEA;\n  border-radius 16px;\n}`,
        checks: [{ k: 'css', s: '.targeta', p: 'border', v: '/^(?=.*\\d+px)(?=.*\\b(solid|dashed|dotted|double)\\b).+$/', txt: "La vora es veu: té gruix, estil i color|El borde se ve: tiene grosor, estilo y color" }, { k: 'css', s: '.targeta', p: 'border-radius', txt: "Les cantonades són rodones (<code>border-radius</code>)|Las esquinas son redondas (<code>border-radius</code>)" }, { k: 'cssclean' }],
        sol: { css: `.targeta {\n  background-color: #EEF2FD;\n  width: 220px;\n  padding: 12px;\n  margin: 0 auto;\n  border: 3px solid #2F5BEA;\n  border-radius: 16px;\n}` },
        hint: "A la vora li falta l'estil (<code>solid</code>) i a <code>border-radius</code> li falten els dos punts.|Al borde le falta el estilo (<code>solid</code>) y a <code>border-radius</code> le faltan los dos puntos." },
      { k: 'wspot', ph: 'investiga', q: "Aquesta targeta havia de tenir una vora vermella, però no se'n veu cap. <b>Toca la línia</b> que té l'error.|Esta tarjeta tenía que tener un borde rojo, pero no se ve ninguno. <b>Toca la línea</b> que tiene el error.",
        css: `.targeta {\n  background-color: #FFF8E6;\n  border: 4px tomato;\n  border-radius: 12px;\n}`, bad: 3, page: `<div class="targeta">\n  <h2>Castell Encantat</h2>\n  <p>Troba les claus amagades a cada torre.</p>\n</div>`,
        ex: "Falta l'estil: <code>border: 4px solid tomato;</code>. Sense estil, el navegador no dibuixa la vora.|Falta el estilo: <code>border: 4px solid tomato;</code>. Sin estilo, el navegador no dibuja el borde." },
      { k: 'wcreate', ph: 'crea', url: 'club.numi', name: 'La xapa del club|La chapa del club',
        q: "Dissenya la <b>xapa rodona</b> del club de videojocs de l'escola: una caixa <code>&lt;div class=\"xapa\"&gt;</code> amb la mateixa amplada i alçada, rodona, amb vora i ombra. Truc: <code>text-align: center;</code> centra el text a dins.|Diseña la <b>chapa redonda</b> del club de videojuegos de la escuela: una caja <code>&lt;div class=\"xapa\"&gt;</code> con la misma anchura y altura, redonda, con borde y sombra. Truco: <code>text-align: center;</code> centra el texto dentro.",
        crit: ["Una caixa <code>&lt;div class=\"xapa\"&gt;</code> amb el nom del club a dins|Una caja <code>&lt;div class=\"xapa\"&gt;</code> con el nombre del club dentro", "<code>width</code> i <code>height</code> iguals i <code>border-radius: 50%</code>|<code>width</code> y <code>height</code> iguales y <code>border-radius: 50%</code>", "Una vora (<code>border</code>) i una ombra (<code>box-shadow</code>)|Un borde (<code>border</code>) y una sombra (<code>box-shadow</code>)"],
        html: `<!-- La xapa del club: una caixa amb la classe "xapa" i el nom del club -->\n`, css: `.xapa {\n  \n}`,
        snips: ['<div class="xapa">\n  |\n</div>', { t: 'border-radius: 50|%;', tab: 'css' }, { t: 'box-shadow: |;', tab: 'css' }, { t: 'text-align: center|;', tab: 'css' }],
        checks: [{ k: 'class', c: 'xapa' }, { k: 'css', s: '.xapa', p: 'width' }, { k: 'css', s: '.xapa', p: 'height' }, { k: 'css', s: '.xapa', p: 'border-radius', v: '/50%/', txt: "<code>.xapa</code> és rodona (<code>border-radius: 50%</code>)|<code>.xapa</code> es redonda (<code>border-radius: 50%</code>)" }, { k: 'css', s: '.xapa', p: 'border', v: '/^(?=.*\\d+px)(?=.*\\b(solid|dashed|dotted|double)\\b).+$/', txt: "<code>.xapa</code> té una vora amb gruix i estil|<code>.xapa</code> tiene un borde con grosor y estilo" }, { k: 'prop', p: 'box-shadow' }, { k: 'clean' }, { k: 'cssclean' }],
        sol: { html: `<div class="xapa">\n  <h2>Club Píxel</h2>\n  <p>Programadors i programadores</p>\n</div>`, css: `.xapa {\n  width: 170px;\n  height: 170px;\n  background-color: #FFC531;\n  border: 6px dashed #E5489A;\n  border-radius: 50%;\n  box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.3);\n  margin: 20px auto;\n  text-align: center;\n}\n.xapa h2 {\n  margin-top: 46px;\n  margin-bottom: 0;\n}` },
        hint: "Comença amb <code>width: 170px;</code>, <code>height: 170px;</code>, un color de fons i <code>border-radius: 50%;</code>. Després afegeix la vora i l'ombra.|Empieza con <code>width: 170px;</code>, <code>height: 170px;</code>, un color de fondo y <code>border-radius: 50%;</code>. Después añade el borde y la sombra." },
      { k: 'quiz', ph: 'tanca', q: "Per què no es veu la vora <code>border: 2px blue;</code>?|¿Por qué no se ve el borde <code>border: 2px blue;</code>?",
        opts: ["Perquè falta l'estil, com <code>solid</code>|Porque falta el estilo, como <code>solid</code>", 'Perquè 2px és massa prim|Porque 2px es demasiado fino', 'Perquè el blau no es pot fer servir a les vores|Porque el azul no se puede usar en los bordes'], a: 0 },
      { k: 'quiz', ph: 'tanca', q: "Quin valor converteix una caixa quadrada en un <b>cercle</b>?|¿Qué valor convierte una caja cuadrada en un <b>círculo</b>?",
        opts: ['<code>border-radius: 50%;</code>|<code>border-radius: 50%;</code>', '<code>border: 50px;</code>|<code>border: 50px;</code>', '<code>box-shadow: 50%;</code>|<code>box-shadow: 50%;</code>'], a: 0 },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------------------------------------------------------------- Sessió 4 · Projecte: la targeta del videojoc */
  { id: 'w5-4', t: 'Projecte: la targeta del videojoc|Proyecto: la tarjeta del videojuego', min: 45, proj: true, badge: 'w_targeta',
    learn: ["Abans d'escriure codi, fem un esbós en paper: quines caixes hi ha, una dins de l'altra, i quins espais tenen.|Antes de escribir código, hacemos un boceto en papel: qué cajas hay, una dentro de la otra, y qué espacios tienen.",
      "Una targeta és una caixa amb amplada, centrada, amb padding, vora, cantonades rodones i ombra.|Una tarjeta es una caja con anchura, centrada, con padding, borde, esquinas redondas y sombra.",
      "Abans d'acabar, revisem: el text es llegeix bé, les imatges tenen alt i es veu bé al mòbil i a l'ordinador.|Antes de terminar, revisamos: el texto se lee bien, las imágenes tienen alt y se ve bien en el móvil y en el ordenador."],
    steps: [
      { k: 'quiz', ph: 'recorda', q: "Quines tres coses necessita <code>border</code> per veure's?|¿Qué tres cosas necesita <code>border</code> para verse?",
        opts: ['Gruix, estil i color|Grosor, estilo y color', 'Amplada, alçada i color|Anchura, altura y color', 'Dreta, avall i difuminat|Derecha, abajo y difuminado'], a: 0, ex: "Per exemple, <code>border: 4px solid gold;</code>. «Dreta, avall i difuminat» són de l'ombra, <code>box-shadow</code>.|Por ejemplo, <code>border: 4px solid gold;</code>. «Derecha, abajo y difuminado» son de la sombra, <code>box-shadow</code>." },
      { k: 'quiz', ph: 'recorda', q: "Quina propietat <b>arrodoneix</b> les cantonades d'una caixa?|¿Qué propiedad <b>redondea</b> las esquinas de una caja?",
        opts: ['<code>border-radius</code>|<code>border-radius</code>', '<code>box-shadow</code>|<code>box-shadow</code>', '<code>padding</code>|<code>padding</code>'], a: 0 },
      { k: 'story', ph: 'missio', who: 'both', scene: 'illa', title: 'Dissabte obre la fira!|¡El sábado abre la feria!',
        t: "Tot està a punt per a la <b>Fira de Videojocs</b>. Només falta una cosa: la <b>targeta del teu videojoc</b>. Inventa un videojoc (el nom, de què va i com es controla) i fes-ne la targeta amb tot el que saps de les caixes.|Todo está listo para la <b>Feria de Videojuegos</b>. Solo falta una cosa: la <b>tarjeta de tu videojuego</b>. Inventa un videojuego (el nombre, de qué va y cómo se controla) y haz su tarjeta con todo lo que sabes de las cajas." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: "L'esbós|El boceto", t: 'Primer, en paper|Primero, en papel', pic: 'img/ment/lli.webp',
          x: "Els dissenyadors web no comencen pel codi: primer fan un <span class='hl'>esbós</span>. Dibuixa la targeta, marca cada caixa amb un rectangle (la imatge, el títol, el gènere, el text) i escriu-hi els espais: on va el padding, quina vora tindrà, si porta ombra…|Los diseñadores web no empiezan por el código: primero hacen un <span class='hl'>boceto</span>. Dibuja la tarjeta, marca cada caja con un rectángulo (la imagen, el título, el género, el texto) y escribe los espacios: dónde va el padding, qué borde tendrá, si lleva sombra…",
          tip: "Un esbós de cinc minuts t'estalvia molta estona provant coses a l'atzar.|Un boceto de cinco minutos te ahorra mucho rato probando cosas al azar." },
        { k: "L'HTML|El HTML", t: 'Les caixes de la targeta|Las cajas de la tarjeta',
          media: { k: 'web', html: `<div class="targeta">\n  <img src="img/tech/web/coet.svg" alt="Un coet que surt cap a l'espai">\n  <h2>Coet Lunar</h2>\n  <p class="genere">Aventura</p>\n  <p>Pilota el coet fins a la Lluna i esquiva els meteorits.</p>\n</div>` },
          x: "La targeta és un <code>&lt;div class=\"targeta\"&gt;</code> amb quatre caixes a dins: la imatge (amb el seu <code>alt</code>), el títol <code>&lt;h2&gt;</code>, el gènere i la descripció. Sense CSS ja hi ha tot el contingut, en ordre.|La tarjeta es un <code>&lt;div class=\"targeta\"&gt;</code> con cuatro cajas dentro: la imagen (con su <code>alt</code>), el título <code>&lt;h2&gt;</code>, el género y la descripción. Sin CSS ya está todo el contenido, en orden." },
        { k: 'El CSS|El CSS', t: 'La mateixa targeta, amb estil|La misma tarjeta, con estilo',
          media: { k: 'web', html: `<div class="targeta">\n  <img src="img/tech/web/coet.svg" alt="Un coet que surt cap a l'espai">\n  <h2>Coet Lunar</h2>\n  <p class="genere">Aventura</p>\n  <p>Pilota el coet fins a la Lluna i esquiva els meteorits.</p>\n</div>`, css: `.targeta {\n  width: 240px;\n  margin: 0 auto;\n  padding: 14px;\n  background-color: #1B2B6B;\n  color: white;\n  border: 4px solid #FFC531;\n  border-radius: 18px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n}\nimg {\n  border-radius: 12px;\n}\n.genere {\n  width: 80px;\n  padding: 3px 10px;\n  background-color: #E5489A;\n  border-radius: 20px;\n}` },
          x: "Amb el CSS de la unitat, la targeta canvia del tot: amplada i centrada, padding, vora, cantonades rodones, ombra i una etiqueta per al gènere. Tot són caixes!|Con el CSS de la unidad, la tarjeta cambia del todo: anchura y centrada, padding, borde, esquinas redondas, sombra y una etiqueta para el género. ¡Todo son cajas!" },
        { k: 'Bones pràctiques|Buenas prácticas', t: 'Que tothom la pugui llegir|Que todo el mundo pueda leerla',
          media: { k: 'web', html: `<p class="mal">Text gris clar sobre groc: costa de llegir.</p>\n<p class="be">Text fosc sobre un fons clar: es llegeix bé.</p>`, css: `p {\n  padding: 10px;\n}\n.mal {\n  color: #CCCCCC;\n  background-color: #FFF3B0;\n}\n.be {\n  color: #14204A;\n  background-color: #FFF3B0;\n}` },
          x: "Una targeta bonica que no es llegeix no serveix! Tria colors amb <b>contrast</b> (fosc sobre clar o clar sobre fosc), posa <code>alt</code> a la imatge per a qui no la pot veure i comprova que es vegi bé al mòbil.|¡Una tarjeta bonita que no se lee no sirve! Elige colores con <b>contraste</b> (oscuro sobre claro o claro sobre oscuro), pon <code>alt</code> a la imagen para quien no puede verla y comprueba que se vea bien en el móvil.",
          bad: "Lletra clara sobre un fons clar, o una imatge sense <code>alt</code>.|Letra clara sobre un fondo claro, o una imagen sin <code>alt</code>.", good: "Bon contraste, <code>alt</code> a totes les imatges i una amplada que hi capi al mòbil.|Buen contraste, <code>alt</code> en todas las imágenes y una anchura que quepa en el móvil." }
      ] },
      { k: 'unplug', ph: 'mans', ico: '✏️', title: "L'esbós de la targeta|El boceto de la tarjeta",
        t: "Agafa un paper i un llapis. Abans de tocar el codi, inventa el teu videojoc i dibuixa'n la targeta.|Coge un papel y un lápiz. Antes de tocar el código, inventa tu videojuego y dibuja su tarjeta.",
        steps: ["Inventa el nom del videojoc, el gènere (aventura, curses, trencaclosques…) i una frase que expliqui de què va.|Inventa el nombre del videojuego, el género (aventura, carreras, rompecabezas…) y una frase que explique de qué va.", "Dibuixa la targeta: un rectangle gran i, a dins, els rectangles de la imatge, el títol, el gènere i el text.|Dibuja la tarjeta: un rectángulo grande y, dentro, los rectángulos de la imagen, el título, el género y el texto.", "Escriu els colors i els espais: el padding, la vora (gruix, estil i color), les cantonades i l'ombra.|Escribe los colores y los espacios: el padding, el borde (grosor, estilo y color), las esquinas y la sombra.", "Tria la imatge de la targeta: <code>coet</code>, <code>drac</code>, <code>castell</code>, <code>robot</code>, <code>planeta</code>, <code>consola</code>…|Elige la imagen de la tarjeta: <code>coet</code>, <code>drac</code>, <code>castell</code>, <code>robot</code>, <code>planeta</code>, <code>consola</code>…"],
        tip: "Si ja l'has fet a classe, toca «Ho hem fet!» i tingues l'esbós a prop de l'ordinador.|Si ya lo has hecho en clase, toca «¡Lo hemos hecho!» y ten el boceto cerca del ordenador." },
      { k: 'seq', ph: 'mans', q: "Ordena els passos per fer la targeta com ho fan els dissenyadors web.|Ordena los pasos para hacer la tarjeta como lo hacen los diseñadores web.",
        items: ["Fer l'esbós en paper|Hacer el boceto en papel", "Escriure l'HTML: les caixes i el contingut|Escribir el HTML: las cajas y el contenido", 'Donar mida i espais: width, padding i margin|Dar tamaño y espacios: width, padding y margin', 'Afegir la vora, les cantonades i l\'ombra|Añadir el borde, las esquinas y la sombra', "Revisar-la al mòbil i a l'ordinador|Revisarla en el móvil y en el ordenador"],
        ex: "Primer el contingut i l'estructura (HTML), després l'aspecte (CSS) i, al final, revisar.|Primero el contenido y la estructura (HTML), después el aspecto (CSS) y, al final, revisar." },
      { k: 'web', ph: 'repte', url: 'fira.numi/coet-lunar', tabs: ['html'], q: "Pas 1: l'HTML. Dins de la targeta posa-hi una <b>imatge</b> amb <code>alt</code>, un títol <code>&lt;h2&gt;</code> i <b>dos</b> paràgrafs: el gènere i la descripció.|Paso 1: el HTML. Dentro de la tarjeta pon una <b>imagen</b> con <code>alt</code>, un título <code>&lt;h2&gt;</code> y <b>dos</b> párrafos: el género y la descripción.",
        html: `<div class="targeta">\n  \n</div>`,
        snips: ['<img src="img/tech/web/coet.svg" alt="|">', '<h2>|</h2>', '<p class="genere">|</p>', '<p>|</p>'],
        checks: [{ k: 'in', t: 'img', p: 'div', txt: "Hi ha una imatge dins de la targeta|Hay una imagen dentro de la tarjeta" }, { k: 'attr', t: 'img', a: 'alt', txt: "La imatge té un <code>alt</code> que la descriu|La imagen tiene un <code>alt</code> que la describe" }, { k: 'in', t: 'h2', p: 'div', txt: "Hi ha un títol <code>&lt;h2&gt;</code> dins de la targeta|Hay un título <code>&lt;h2&gt;</code> dentro de la tarjeta" }, { k: 'in', t: 'p', p: 'div', min: 2, txt: "Hi ha dos paràgrafs <code>&lt;p&gt;</code> dins de la targeta|Hay dos párrafos <code>&lt;p&gt;</code> dentro de la tarjeta" }, { k: 'clean' }],
        sol: { html: `<div class="targeta">\n  <img src="img/tech/web/coet.svg" alt="Un coet que surt cap a l'espai">\n  <h2>Coet Lunar</h2>\n  <p class="genere">Aventura</p>\n  <p>Pilota el coet fins a la Lluna i esquiva els meteorits.</p>\n</div>` },
        hint: "Fes servir els botons de sota l'editor: primer la imatge (escriu l'alt), després el títol i els dos paràgrafs.|Usa los botones de debajo del editor: primero la imagen (escribe el alt), después el título y los dos párrafos." },
      { k: 'web', ph: 'repte', url: 'fira.numi/coet-lunar', q: "Pas 2: la caixa. Dona a <code>.targeta</code> una amplada (<code>width</code>), centra-la amb <code>margin</code> i <code>auto</code>, posa-hi <code>padding</code> i un color de fons.|Paso 2: la caja. Da a <code>.targeta</code> una anchura (<code>width</code>), céntrala con <code>margin</code> y <code>auto</code>, ponle <code>padding</code> y un color de fondo.",
        html: `<div class="targeta">\n  <img src="img/tech/web/coet.svg" alt="Un coet que surt cap a l'espai">\n  <h2>Coet Lunar</h2>\n  <p class="genere">Aventura</p>\n  <p>Pilota el coet fins a la Lluna i esquiva els meteorits.</p>\n</div>`, css: `.targeta {\n  \n}`,
        snips: [{ t: 'width: |px;', tab: 'css' }, { t: 'margin: 20px auto|;', tab: 'css' }, { t: 'padding: |px;', tab: 'css' }, { t: 'background-color: |;', tab: 'css' }],
        checks: [{ k: 'css', s: '.targeta', p: 'width' }, { k: 'css', s: '.targeta', p: 'margin', v: '/auto/', txt: "<code>.targeta</code> està centrada (<code>margin</code> amb <code>auto</code>)|<code>.targeta</code> está centrada (<code>margin</code> con <code>auto</code>)" }, { k: 'css', s: '.targeta', p: 'padding' }, { k: 'css', s: '.targeta', p: 'background-color' }, { k: 'cssclean' }],
        sol: { css: `.targeta {\n  width: 250px;\n  margin: 20px auto;\n  padding: 16px;\n  background-color: #1B2B6B;\n  color: white;\n}` },
        hint: "Quatre línies: <code>width: 250px;</code>, <code>margin: 20px auto;</code>, <code>padding: 16px;</code> i un <code>background-color</code>. Si el fons és fosc, posa <code>color: white;</code> perquè el text es llegeixi.|Cuatro líneas: <code>width: 250px;</code>, <code>margin: 20px auto;</code>, <code>padding: 16px;</code> y un <code>background-color</code>. Si el fondo es oscuro, pon <code>color: white;</code> para que el texto se lea." },
      { k: 'move', ph: 'pausa', secs: 30, t: "Estira't com una caixa amb molt de padding: braços amunt i ben oberts! Després fes-te petit/a com una caixa amb <code>width: 10px</code>. Repeteix-ho tres vegades.|¡Estírate como una caja con mucho padding: brazos arriba y bien abiertos! Después hazte pequeño/a como una caja con <code>width: 10px</code>. Repítelo tres veces." },
      { k: 'web', ph: 'repte', url: 'fira.numi/coet-lunar', q: "Pas 3: el toc de col·leccionista. Afegeix a <code>.targeta</code> una <b>vora</b>, les <b>cantonades rodones</b> i una <b>ombra</b>, i arrodoneix també la imatge.|Paso 3: el toque de coleccionista. Añade a <code>.targeta</code> un <b>borde</b>, las <b>esquinas redondas</b> y una <b>sombra</b>, y redondea también la imagen.",
        html: `<div class="targeta">\n  <img src="img/tech/web/coet.svg" alt="Un coet que surt cap a l'espai">\n  <h2>Coet Lunar</h2>\n  <p class="genere">Aventura</p>\n  <p>Pilota el coet fins a la Lluna i esquiva els meteorits.</p>\n</div>`, css: `.targeta {\n  width: 250px;\n  margin: 20px auto;\n  padding: 16px;\n  background-color: #1B2B6B;\n  color: white;\n  \n}`,
        snips: [{ t: 'border: 4px solid |;', tab: 'css' }, { t: 'border-radius: |px;', tab: 'css' }, { t: 'box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3)|;', tab: 'css' }, { t: 'img {\n  border-radius: |px;\n}', tab: 'css' }],
        checks: [{ k: 'css', s: '.targeta', p: 'border', v: '/^(?=.*\\d+px)(?=.*\\b(solid|dashed|dotted|double)\\b).+$/', txt: "<code>.targeta</code> té una vora amb gruix i estil|<code>.targeta</code> tiene un borde con grosor y estilo" }, { k: 'css', s: '.targeta', p: 'border-radius' }, { k: 'css', s: '.targeta', p: 'box-shadow' }, { k: 'styled', t: 'img', p: 'border-radius', txt: "La imatge té les cantonades rodones|La imagen tiene las esquinas redondas" }, { k: 'cssclean' }],
        sol: { css: `.targeta {\n  width: 250px;\n  margin: 20px auto;\n  padding: 16px;\n  background-color: #1B2B6B;\n  color: white;\n  border: 4px solid #FFC531;\n  border-radius: 18px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n}\nimg {\n  border-radius: 12px;\n}` },
        hint: "Tres línies noves a <code>.targeta</code> (<code>border</code>, <code>border-radius</code> i <code>box-shadow</code>) i una regla nova per a <code>img</code>.|Tres líneas nuevas en <code>.targeta</code> (<code>border</code>, <code>border-radius</code> y <code>box-shadow</code>) y una regla nueva para <code>img</code>." },
      { k: 'web', ph: 'repte', url: 'fira.numi/coet-lunar', q: "Pas 4: l'etiqueta del gènere. Fes que <code>.genere</code> sembli una etiqueta: color de fons, una amplada petita, <code>padding</code> i cantonades molt rodones.|Paso 4: la etiqueta del género. Haz que <code>.genere</code> parezca una etiqueta: color de fondo, una anchura pequeña, <code>padding</code> y esquinas muy redondas.",
        html: `<div class="targeta">\n  <img src="img/tech/web/coet.svg" alt="Un coet que surt cap a l'espai">\n  <h2>Coet Lunar</h2>\n  <p class="genere">Aventura</p>\n  <p>Pilota el coet fins a la Lluna i esquiva els meteorits.</p>\n</div>`, css: `.targeta {\n  width: 250px;\n  margin: 20px auto;\n  padding: 16px;\n  background-color: #1B2B6B;\n  color: white;\n  border: 4px solid #FFC531;\n  border-radius: 18px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n}\nimg {\n  border-radius: 12px;\n}\n.genere {\n  \n}`,
        checks: [{ k: 'css', s: '.genere', p: 'background-color' }, { k: 'css', s: '.genere', p: 'width' }, { k: 'css', s: '.genere', p: 'padding' }, { k: 'css', s: '.genere', p: 'border-radius' }, { k: 'cssclean' }],
        sol: { css: `.targeta {\n  width: 250px;\n  margin: 20px auto;\n  padding: 16px;\n  background-color: #1B2B6B;\n  color: white;\n  border: 4px solid #FFC531;\n  border-radius: 18px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n}\nimg {\n  border-radius: 12px;\n}\n.genere {\n  background-color: #E5489A;\n  width: 80px;\n  padding: 3px 10px;\n  border-radius: 20px;\n}` },
        hint: "Prova <code>width: 80px;</code>, <code>padding: 3px 10px;</code> i <code>border-radius: 20px;</code>, i tria un color de fons que contrasti amb el de la targeta.|Prueba <code>width: 80px;</code>, <code>padding: 3px 10px;</code> y <code>border-radius: 20px;</code>, y elige un color de fondo que contraste con el de la tarjeta." },
      { k: 'wspot', ph: 'investiga', q: "Aquesta targeta ocupa tota la fila i no queda centrada. Hi ha una paraula mal escrita: <b>toca la línia</b>.|Esta tarjeta ocupa toda la fila y no queda centrada. Hay una palabra mal escrita: <b>toca la línea</b>.",
        css: `.targeta {\n  widht: 250px;\n  margin: 0 auto;\n  padding: 16px;\n  border: 4px solid gold;\n}`, bad: 2, page: `<div class="targeta">\n  <h2>Coet Lunar</h2>\n  <p>Pilota el coet fins a la Lluna.</p>\n</div>`,
        ex: "<code>widht</code> no existeix: és <code>width</code>. El navegador no avisa dels errors, simplement s'ignora la línia. Sense amplada, la caixa ocupa tota la fila i <code>auto</code> no té espai per centrar-la.|<code>widht</code> no existe: es <code>width</code>. El navegador no avisa de los errores, simplemente ignora la línea. Sin anchura, la caja ocupa toda la fila y <code>auto</code> no tiene espacio para centrarla." },
      { k: 'wquiz', ph: 'prova', q: "Quina vista prèvia fa aquest codi?|¿Qué vista previa da este código?",
        code: { html: `<div class="t">Nivell 1</div>`, css: `.t {\n  padding: 10px;\n  border: 3px dashed purple;\n  border-radius: 16px;\n}` },
        opts: [{ html: `<div class="t">Nivell 1</div>`, css: `.t { padding: 10px; border: 3px dashed purple; border-radius: 16px; }` }, { html: `<div class="t">Nivell 1</div>`, css: `.t { padding: 10px; border: 3px dotted purple; border-radius: 16px; }` }, { html: `<div class="t">Nivell 1</div>`, css: `.t { padding: 10px; border: 3px dashed purple; }` }], a: 0,
        ex: "<code>dashed</code> fa ratlles (no punts) i <code>border-radius: 16px</code> arrodoneix les cantonades.|<code>dashed</code> hace rayas (no puntos) y <code>border-radius: 16px</code> redondea las esquinas." },
      { k: 'wcreate', ph: 'crea', url: 'fira.numi/el-meu-videojoc', name: 'La targeta del meu videojoc|La tarjeta de mi videojuego',
        q: "El gran projecte! Fes la targeta del <b>teu</b> videojoc, la que has dibuixat a l'esbós. Pots copiar l'estructura dels passos d'abans, però el nom, el text, la imatge i els colors són teus.|¡El gran proyecto! Haz la tarjeta de <b>tu</b> videojuego, la que has dibujado en el boceto. Puedes copiar la estructura de los pasos anteriores, pero el nombre, el texto, la imagen y los colores son tuyos.",
        crit: ["Una imatge amb <code>alt</code>, un títol <code>&lt;h2&gt;</code> i almenys dos paràgrafs dins de la targeta|Una imagen con <code>alt</code>, un título <code>&lt;h2&gt;</code> y al menos dos párrafos dentro de la tarjeta", "<code>.targeta</code> té amplada, padding i està centrada|<code>.targeta</code> tiene anchura, padding y está centrada", "Vora, cantonades rodones i una ombra|Borde, esquinas redondas y una sombra", "Els colors tenen bon contrast i es veu bé al mòbil|Los colores tienen buen contraste y se ve bien en el móvil"],
        html: `<div class="targeta">\n  <!-- La imatge, el títol, el gènere i la descripció del TEU videojoc -->\n</div>`, css: `.targeta {\n  \n}`,
        snips: ['<img src="img/tech/web/|.svg" alt="">', '<h2>|</h2>', '<p class="genere">|</p>', '<p>|</p>', { t: '.genere {\n  |\n}', tab: 'css' }, { t: 'img {\n  border-radius: |px;\n}', tab: 'css' }],
        checks: [{ k: 'in', t: 'img', p: 'div', txt: "Hi ha una imatge dins de la targeta|Hay una imagen dentro de la tarjeta" }, { k: 'attr', t: 'img', a: 'alt', txt: "La imatge té <code>alt</code>|La imagen tiene <code>alt</code>" }, { k: 'in', t: 'h2', p: 'div', txt: "Hi ha un títol <code>&lt;h2&gt;</code> a la targeta|Hay un título <code>&lt;h2&gt;</code> en la tarjeta" }, { k: 'in', t: 'p', p: 'div', min: 2, txt: "Hi ha almenys dos paràgrafs a la targeta|Hay al menos dos párrafos en la tarjeta" },
          { k: 'css', s: '.targeta', p: 'width' }, { k: 'css', s: '.targeta', p: 'padding' }, { k: 'css', s: '.targeta', p: 'margin', v: '/auto/', txt: "<code>.targeta</code> està centrada amb <code>auto</code>|<code>.targeta</code> está centrada con <code>auto</code>" }, { k: 'css', s: '.targeta', p: 'border', v: '/^(?=.*\\d+px)(?=.*\\b(solid|dashed|dotted|double)\\b).+$/', txt: "<code>.targeta</code> té una vora amb gruix i estil|<code>.targeta</code> tiene un borde con grosor y estilo" }, { k: 'css', s: '.targeta', p: 'border-radius' }, { k: 'prop', p: 'box-shadow' }, { k: 'clean' }, { k: 'cssclean' }],
        sol: { html: `<div class="targeta">\n  <img src="img/tech/web/drac.svg" alt="Un drac verd amb ales grans">\n  <h2>El Castell del Drac</h2>\n  <p class="genere">Trencaclosques</p>\n  <p>Ajuda el drac a obrir les portes del castell resolent enigmes de colors.</p>\n  <p>Es controla amb les fletxes i la barra d'espai.</p>\n</div>`, css: `.targeta {\n  width: 260px;\n  margin: 24px auto;\n  padding: 16px;\n  background-color: #E9F8E4;\n  color: #14204A;\n  border: 5px double #2FA35A;\n  border-radius: 20px;\n  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);\n}\nimg {\n  border-radius: 14px;\n}\n.genere {\n  width: 120px;\n  padding: 3px 10px;\n  background-color: #2FA35A;\n  color: white;\n  border-radius: 20px;\n}` },
        hint: "Mira el teu esbós i ves pas a pas: primer l'HTML i després el CSS de la caixa, la vora, les cantonades i l'ombra. Ves marcant les comprovacions de la llista.|Mira tu boceto y ve paso a paso: primero el HTML y después el CSS de la caja, el borde, las esquinas y la sombra. Ve marcando las comprobaciones de la lista." },
      { k: 'review', ph: 'crea', q: "Ara fes de revisor/a de la teva targeta (o de la d'un company/a). Mira-la amb els botons 📱 i 💻 abans de respondre, i sigues sincer/a: és per millorar-la.|Ahora haz de revisor/a de tu tarjeta (o de la de un compañero/a). Mírala con los botones 📱 y 💻 antes de responder, y sé sincero/a: es para mejorarla.",
        items: [
          { q: 'El text es llegeix bé (hi ha contrast entre la lletra i el fons)?|¿El texto se lee bien (hay contraste entre la letra y el fondo)?', opts: ['Sí, molt bé|Sí, muy bien', 'Més o menys|Más o menos', 'Costa de llegir|Cuesta leerlo'] },
          { q: 'El text té prou espai i no toca la vora?|¿El texto tiene suficiente espacio y no toca el borde?', opts: ['Sí|Sí', 'Una mica just|Un poco justo', 'No, toca la vora|No, toca el borde'] },
          { q: 'Es veu bé al mòbil, sense sortir de la pantalla?|¿Se ve bien en el móvil, sin salirse de la pantalla?', opts: ['Sí|Sí', 'Més o menys|Más o menos', 'No|No'] },
          { q: 'Què milloraries?|¿Qué mejorarías?', opts: ['Els colors|Los colores', 'Els espais|Los espacios', "La vora o l'ombra|El borde o la sombra", 'El text|El texto', 'Ja està molt bé|Ya está muy bien'] }
        ] },
      { k: 'quiz', ph: 'tanca', q: "A la fira hi ha moltes targetes una al costat de l'altra. Quina capa les separa?|En la feria hay muchas tarjetas una al lado de la otra. ¿Qué capa las separa?",
        opts: ['El margin|El margin', 'El padding|El padding', 'El border|El border'], a: 0 },
      { k: 'quiz', ph: 'tanca', q: "Per què posem <code>alt</code> a la imatge de la targeta?|¿Por qué ponemos <code>alt</code> en la imagen de la tarjeta?",
        opts: ["Perquè qui no la pot veure (o si no es carrega) sàpiga què hi ha|Para que quien no puede verla (o si no se carga) sepa qué hay", 'Perquè la imatge surti més gran|Para que la imagen salga más grande', 'Perquè la imatge tingui vora|Para que la imagen tenga borde'], a: 0, ex: "Els lectors de pantalla llegeixen l'alt en veu alta: així la targeta és per a tothom.|Los lectores de pantalla leen el alt en voz alta: así la tarjeta es para todo el mundo." },
      { k: 'feel', ph: 'tanca' }
    ] }
] };

/* ── unitat 6 ── */
/* Tech Web · unitat 6 «Disposició» (w6-1 … w6-4)
   Contingut propi de Numi. El Club Foto del poble vol una web per ensenyar les fotos de les seves sortides i l'alumne/a
   n'és el dissenyador/a: posa caixes en fila i en columna amb flexbox (display: flex, gap, flex-direction,
   justify-content, align-items), fa galeries amb grid (grid-template-columns, fr, repeat) i fa servir taules només per
   a dades (table, tr, td, th, caption). Projecte: l'àlbum de fotos.
   · Dins del codi (html/css), «{{català|castellano}}» es tria en el moment de mostrar-lo, segons l'idioma de l'alumne/a.
   · Les comprovacions es fan amb petits ajudants (tag, inn, css…); el nom de l'etiqueta hi va com a propietat no
     enumerable perquè no es confongui amb un text per traduir. */
Object.assign(TBADGE, {
  w_fila: { id: 'w_fila', ico: '📏', n: 'Mestre/a del flex|Maestro/a del flex', d: 'Has posat caixes en fila i en columna amb flexbox.|Has puesto cajas en fila y en columna con flexbox.' },
  w_graella: { id: 'w_graella', ico: '🧩', n: 'Arquitecte/a de graelles|Arquitecto/a de rejillas', d: 'Has construït galeries de fotos amb display: grid i columnes fr.|Has construido galerías de fotos con display: grid y columnas fr.' },
  w_taula: { id: 'w_taula', ico: '📅', n: 'Organitzador/a de dades|Organizador/a de datos', d: 'Has fet taules amb capçaleres que tothom pot entendre, també amb un lector de pantalla.|Has hecho tablas con cabeceras que todo el mundo puede entender, también con un lector de pantalla.' },
  w_album: { id: 'w_album', ico: '🏆', n: "Dissenyador/a de l'àlbum|Diseñador/a del álbum", d: "Projecte acabat: el teu àlbum de fotos amb flex, grid i una taula de dades.|Proyecto terminado: tu álbum de fotos con flex, grid y una tabla de datos." }
});

COURSE_UNITS[6] = (() => {
  // «{{ca|es}}» dins del codi: es resol en llegir-lo (getter), així el codi canvia d'idioma amb l'app
  const LG = s => s.replace(/\{\{([^{}|]*)\|([^{}]*)\}\}/g, (_, ca, es) => (typeof LANG !== 'undefined' && LANG === 'es') ? es : ca);
  const BI = o => { if (Array.isArray(o)) { o.forEach(BI); return o; } if (!o || typeof o !== 'object') return o;
    for (const k of Object.keys(o)) { const v = o[k]; if ((k === 'html' || k === 'css') && typeof v === 'string' && v.includes('{{')) Object.defineProperty(o, k, { get: () => LG(v), enumerable: true, configurable: true }); else if (v && typeof v === 'object') BI(v); }
    return o; };
  // comprovacions
  const ne = (o, t) => Object.defineProperty(o, 't', { value: t, enumerable: false, writable: true, configurable: true });
  const tag = (t, o = {}) => ne({ k: 'tag', ...o }, t);
  const inn = (t, p, o = {}) => ne({ k: 'in', p, ...o }, t);
  const alt = (min, o = {}) => ne({ k: 'attr', a: 'alt', min, ...o }, 'img');
  const notag = (t, o = {}) => ne({ k: 'notag', ...o }, t);
  const sty = (t, p, v, o = {}) => ne({ k: 'styled', p, ...(v ? { v } : {}), ...o }, t);
  const css = (s, p, v, o = {}) => ({ k: 'css', s, p, ...(v ? { v } : {}), ...o });
  const prop = (p, v, o = {}) => ({ k: 'prop', p, ...(v ? { v } : {}), ...o });
  const CLEAN = { k: 'clean' }, CSSOK = { k: 'cssclean' };
  const FLEX = '/^flex$/', GRID = '/^grid$/', COL3 = '/^\\s*(repeat\\(\\s*3\\s*,[^)]+\\)|[^\\s,]+\\s+[^\\s,]+\\s+[^\\s,]+)\\s*$/', COL4 = '/^\\s*(repeat\\(\\s*4\\s*,[^)]+\\)|([^\\s,]+\\s+){3}[^\\s,]+)\\s*$/';
  const cs = t => ne({ tab: 'css' }, t);   // fragment per inserir a la pestanya CSS
  // les fotos del club (dibuixos de Numi) amb el seu text alternatiu
  const F = {
    platja: ['platja', 'Platja amb una palmera i el sol|Playa con una palmera y el sol'], muntanya: ['muntanya', 'Dues muntanyes amb neu al cim|Dos montañas con nieve en la cima'],
    bosc: ['bosc', 'Turons verds amb arbres|Colinas verdes con árboles'], pont: ['pont', 'Un pont de pedra sobre el riu|Un puente de piedra sobre el río'],
    castell: ['castell', 'Un castell amb dues torres|Un castillo con dos torres'], ciutat: ['ciutat', 'Edificis de la ciutat al vespre|Edificios de la ciudad al atardecer'],
    espai: ['espai', "Planetes a l'espai|Planetas en el espacio"], seu: ['seu-vella', "Una catedral antiga dalt d'un turó|Una catedral antigua en lo alto de una colina"]
  };
  const img = (n, ind = '  ') => `${ind}<img src="img/tech/web/${F[n][0]}.svg" alt="{{${F[n][1]}}}">`;
  const fig = (n, cap, ind = '  ') => `${ind}<figure>\n${img(n, ind + '  ')}\n${ind}  <figcaption>{{${cap}}}</figcaption>\n${ind}</figure>`;
  const foto = (n, cap) => `  <div class="foto">\n${img(n, '    ')}\n    <p>{{${cap}}}</p>\n  </div>`;

  /* ---------- codi de la sessió 1 ---------- */
  const S1_FOTOS = (n = 3) => `<h1>{{Les sortides del Club Foto|Las salidas del Club Foto}}</h1>\n<div class="fila">\n${[foto('platja', 'La platja|La playa'), foto('bosc', 'El bosc|El bosque'), foto('pont', 'El pont|El puente'), foto('castell', 'El castell|El castillo')].slice(0, n).join('\n')}\n</div>`;
  const S1_CSS = `body {\n  background: #EAF6F8;\n}\n.foto {\n  background: white;\n  padding: 6px;\n  border-radius: 10px;\n  text-align: center;\n}\nimg {\n  width: 64px;\n}`;
  const BOX3 = `<div class="fila">\n  <div class="c">A</div>\n  <div class="c">B</div>\n  <div class="c">C</div>\n</div>`;
  const BOXC = `.c {\n  background: #E0538F;\n  color: white;\n  padding: 8px;\n}`;
  const NAV = `<nav>\n  <a href="#inici">{{Inici|Inicio}}</a>\n  <a href="#fotos">{{Fotos|Fotos}}</a>\n  <a href="#sortides">{{Sortides|Salidas}}</a>\n  <a href="#club">{{El club|El club}}</a>\n</nav>\n<h1>Club Foto</h1>`;
  const NAV_CSS = `nav {\n  background: #14A3B8;\n  padding: 12px;\n}\nnav a {\n  color: white;\n  font-weight: bold;\n  text-decoration: none;\n}`;
  const COLS = `<h2>{{Properes sortides|Próximas salidas}}</h2>\n<div class="columna">\n  <p class="sortida">{{Dissabte: el moll|Sábado: el muelle}}</p>\n  <p class="sortida">{{Diumenge: el bosc|Domingo: el bosque}}</p>\n  <p class="sortida">{{Dimecres: la platja|Miércoles: la playa}}</p>\n</div>`;
  const COLS_CSS = `.sortida {\n  background: #FFE3B3;\n  padding: 10px;\n  border-radius: 8px;\n  margin: 0;\n}`;

  /* ---------- codi de la sessió 2 ---------- */
  const NUM = (n, c = 'c') => Array.from({ length: n }, (_, i) => `  <div class="${c}">${i + 1}</div>`).join('\n');
  const NUMC = `.c {\n  background: #6C5CE7;\n  color: white;\n  padding: 8px;\n  text-align: center;\n}`;
  const HEAD = `<header>\n  <img src="img/ic/star.webp" alt="{{Logo del Club Foto|Logo del Club Foto}}">\n  <h1>Club Foto</h1>\n  <a href="#apunta">{{Apunta't|Apúntate}}</a>\n</header>`;
  const HEAD_CSS = `header {\n  display: flex;\n  background: #14204A;\n  padding: 10px;\n}\nheader img {\n  width: 56px;\n}\nh1 {\n  color: white;\n  font-size: 22px;\n  margin: 0;\n}\nheader a {\n  background: #FFC531;\n  color: #14204A;\n  padding: 6px 10px;\n  border-radius: 8px;\n}`;
  const GAL6 = `<h2>{{Fotos de l'estiu|Fotos del verano}}</h2>\n<div class="galeria">\n${['platja', 'pont', 'castell', 'ciutat', 'muntanya', 'bosc'].map(n => img(n)).join('\n')}\n</div>`;
  const GAL_IMG = `img {\n  width: 100%;\n  border-radius: 8px;\n}`;
  const PETS = [['cat', 'Gat|Gato'], ['dog', 'Gos|Perro'], ['fox', 'Guineu|Zorro'], ['owl', 'Mussol|Búho'], ['turtle', 'Tortuga|Tortuga'], ['rabbit', 'Conill|Conejo'], ['lion', 'Lleó|León'], ['octopus', 'Pop|Pulpo']];
  const ANIM = n => `<h2>{{Les mascotes del club|Las mascotas del club}}</h2>\n<div class="animals">\n${PETS.slice(0, n).map(([f, a]) => `  <img src="img/ic/${f}.webp" alt="{{${a}}}">`).join('\n')}\n</div>`;
  const ANIM_CSS = `.animals img {\n  width: 100%;\n  background: #FFF3D6;\n  border-radius: 12px;\n}`;

  /* ---------- codi de la sessió 3 ---------- */
  const T_CSS = `table {\n  border-collapse: collapse;\n}\nth, td {\n  border: 1px solid #9AA6C8;\n  padding: 6px;\n}\nth {\n  background-color: #14A3B8;\n  color: white;\n}`;
  const R = (...c) => `  <tr>${c.map(x => `<td>${x}</td>`).join('')}</tr>`;
  const RH = (...c) => `  <tr>${c.map(x => `<th>${x}</th>`).join('')}</tr>`;
  const SORT = [['{{Dissabte|Sábado}}', '{{El moll|El muelle}}', '10:00'], ['{{Diumenge|Domingo}}', '{{El bosc|El bosque}}', '9:30'], ['{{Dimecres|Miércoles}}', '{{La platja|La playa}}', '18:00']];
  const SORT_T = n => `<table>\n  <caption>{{Sortides del club|Salidas del club}}</caption>\n${RH('{{Dia|Día}}', '{{Lloc|Lugar}}', '{{Hora|Hora}}')}\n${SORT.slice(0, n).map(r => R(...r)).join('\n')}\n</table>`;
  const VOTS = [['{{El far|El faro}}', 'Laia', '12'], ['{{La gavina|La gaviota}}', 'Pau', '9'], ['{{La tempesta|La tormenta}}', 'Nil', '15']];
  const VOTS_FAKE = `<table>\n  <tr>\n    <td><b>{{Foto|Foto}}</b></td>\n    <td><b>{{Autor/a|Autor/a}}</b></td>\n    <td><b>{{Vots|Votos}}</b></td>\n  </tr>\n${VOTS.map(r => R(...r)).join('\n')}\n</table>`;
  const VOTS_OK = `<table>\n  <caption>{{Concurs de fotos: els vots|Concurso de fotos: los votos}}</caption>\n${RH('{{Foto|Foto}}', '{{Autor/a|Autor/a}}', '{{Vots|Votos}}')}\n${VOTS.map(r => R(...r)).join('\n')}\n</table>`;

  /* ---------- codi de la sessió 4 ---------- */
  const ALB_HEAD = `<header>\n  <h1>{{L'àlbum del Club Foto|El álbum del Club Foto}}</h1>\n  <nav>\n    <a href="#galeria">{{Galeria|Galería}}</a>\n    <a href="#dades">{{Dades|Datos}}</a>\n    <a href="#club">{{El club|El club}}</a>\n  </nav>\n</header>`;
  const ALB_HEAD_CSS = `header {\n  background: #14204A;\n  padding: 10px 14px;\n}\nh1 {\n  color: white;\n  font-size: 20px;\n  margin: 0;\n}\nnav a {\n  color: #FFC531;\n  font-weight: bold;\n}`;
  const FIGS = [['platja', "La platja, a l'estiu|La playa, en verano"], ['muntanya', 'Excursió a la muntanya|Excursión a la montaña'], ['pont', 'El pont vell|El puente viejo'], ['castell', 'Visita al castell|Visita al castillo'], ['bosc', 'Pícnic al bosc|Pícnic en el bosque'], ['espai', "Nit d'estrelles|Noche de estrellas"]];
  const ALB_GAL = n => `<h2 id="galeria">{{Galeria|Galería}}</h2>\n<div class="galeria">\n${FIGS.slice(0, n).map(([f, c]) => fig(f, c)).join('\n')}\n</div>`;
  const FIG_CSS = `body {\n  background: #EAF6F8;\n}\nfigure {\n  margin: 0;\n  background: white;\n  padding: 6px;\n  border-radius: 10px;\n}\nimg {\n  width: 100%;\n}\nfigcaption {\n  font-size: 14px;\n  text-align: center;\n}`;
  const BUG_HTML = `<header>\n  <h1>{{Àlbum|Álbum}}</h1>\n  <nav>\n    <a href="#galeria">{{Galeria|Galería}}</a>\n    <a href="#dades">{{Dades|Datos}}</a>\n  </nav>\n</header>\n<div class="galeria">\n  <figure>\n${img('castell', '    ')}\n    <figcaption>{{El castell|El castillo}}</figcaption>\n  <figure>\n${img('ciutat', '    ')}\n    <figcaption>{{La ciutat|La ciudad}}</figcaption>\n  </figure>\n</div>`;
  const BUG_CSS = `header {\n  display: flex;\n  justify-content: space between;\n  align-items: center;\n  background: #14204A;\n  color: white;\n  padding: 10px;\n}\nnav a {\n  display: flex;\n  color: #FFC531;\n}\n.galeria {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  width: 100%;\n}`;
  const ALBUM_CSS = `body {\n  background: #F5F8FF;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  width: 100%;\n  border-radius: 8px;\n}`;

  return BI({ t: 'Disposició|Disposición', d: 'Files, columnes i graelles|Filas, columnas y rejillas', color: '#6C5CE7', s: [
  /* ---------- Sessió 1 · Una al costat de l'altra ---------- */
  { id: 'w6-1', t: "Una al costat de l'altra|Una al lado de la otra", min: 40, badge: 'w_fila',
    learn: ["Amb display: flex al contenidor, els elements de dins es posen en fila, l'un al costat de l'altre.|Con display: flex en el contenedor, los elementos de dentro se ponen en fila, uno al lado del otro.",
      'gap separa els elements, i flex-direction: column els posa en columna.|gap separa los elementos, y flex-direction: column los pone en columna.',
      "justify-content decideix on van dins la fila: a l'inici, al centre, al final o repartits.|justify-content decide dónde van dentro de la fila: al inicio, en el centro, al final o repartidos."],
    steps: [
      { k: 'quiz', ph: 'recorda', q: "Recordes les caixes? Quina propietat posa espai <b>a dins</b> de la caixa, entre el contingut i la vora?|¿Recuerdas las cajas? ¿Qué propiedad pone espacio <b>dentro</b> de la caja, entre el contenido y el borde?",
        opts: ['<code>padding</code>|<code>padding</code>', '<code>margin</code>|<code>margin</code>', '<code>border</code>|<code>border</code>'], a: 0,
        ex: "El <code>padding</code> és el farciment de dins. El <code>margin</code> és l'espai de fora, entre una caixa i les altres.|El <code>padding</code> es el relleno de dentro. El <code>margin</code> es el espacio de fuera, entre una caja y las demás." },
      { k: 'wquiz', ph: 'recorda', q: "Tres <code>&lt;div&gt;</code> seguits, sense res més de CSS que el color. <b>Com es veuen?</b>|Tres <code>&lt;div&gt;</code> seguidos, sin nada más de CSS que el color. <b>¿Cómo se ven?</b>",
        code: { html: NUM(3).replace(/^  /gm, ''), css: NUMC },
        opts: [{ html: NUM(3), css: NUMC }, { html: `<div style="display:flex;gap:4px">${NUM(3)}</div>`, css: NUMC }, { html: NUM(3), css: NUMC + '\n.c { width: 30px; margin: 4px auto; }' }], a: 0,
        ex: "Un <code>&lt;div&gt;</code> és una caixa de <b>bloc</b>: ocupa tota l'amplada i la següent comença a sota. Les caixes fan <b>pila</b>.|Un <code>&lt;div&gt;</code> es una caja de <b>bloque</b>: ocupa todo el ancho y la siguiente empieza debajo. Las cajas hacen <b>pila</b>." },
      { k: 'story', ph: 'missio', who: 'numi', scene: 'poble', title: 'El Club Foto|El Club Foto',
        t: "El <b>Club Foto</b> del poble surt cada setmana a fer fotos: a la platja, al bosc, al pont vell… Volen una web per ensenyar-les, però tenen un problema: tot surt <b>una cosa sota l'altra</b>, com una torre llarguíssima. Ens han demanat ajuda!|El <b>Club Foto</b> del pueblo sale cada semana a hacer fotos: a la playa, al bosque, al puente viejo… Quieren una web para enseñarlas, pero tienen un problema: todo sale <b>una cosa debajo de la otra</b>, como una torre larguísima. ¡Nos han pedido ayuda!" },
      { k: 'story', ph: 'missio', who: 'bit', mood: 'happy',
        t: "BIP! En aquesta unitat seràs el dissenyador/a de la web del club. Avui aprendràs a dir-li al navegador <b>on va cada caixa</b>: en fila, en columna, al centre… Això es diu la <b>disposició</b> d'una pàgina (en anglès, <i>layout</i>).|¡BIP! En esta unidad serás el diseñador/a de la web del club. Hoy aprenderás a decirle al navegador <b>dónde va cada caja</b>: en fila, en columna, en el centro… Esto se llama la <b>disposición</b> de una página (en inglés, <i>layout</i>)." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Caixes en pila|Cajas en pila', t: "Per defecte, una sota l'altra|Por defecto, una debajo de la otra", anim: 'w6stack',
          x: "Ja saps que tot és una caixa. Les caixes de bloc com <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code> o <code>&lt;h1&gt;</code> ocupen tota l'amplada i fan <b>pila</b>. Per posar-les l'una al costat de l'altra, el CSS té una eina: <span class='hl'>flexbox</span>.|Ya sabes que todo es una caja. Las cajas de bloque como <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code> o <code>&lt;h1&gt;</code> ocupan todo el ancho y hacen <b>pila</b>. Para ponerlas una al lado de la otra, el CSS tiene una herramienta: <span class='hl'>flexbox</span>." },
        { k: 'Flexbox|Flexbox', t: 'display: flex|display: flex',
          media: { k: 'web', html: `<div class="fila">\n  <div class="foto">{{Platja|Playa}}</div>\n  <div class="foto">{{Bosc|Bosque}}</div>\n  <div class="foto">{{Pont|Puente}}</div>\n</div>`, css: `.fila {\n  display: flex;\n}\n.foto {\n  background: #FFC531;\n  padding: 10px;\n}` },
          x: "Posa les caixes dins d'una caixa més gran, el <span class='hl'>contenidor</span>, i escriu-hi <code>display: flex;</code>. Les caixes de dins, els <span class='hl'>elements</span>, es posen en fila. Mira-ho a la dreta: tres <code>&lt;div&gt;</code> en fila!|Pon las cajas dentro de una caja más grande, el <span class='hl'>contenedor</span>, y escribe en ella <code>display: flex;</code>. Las cajas de dentro, los <span class='hl'>elementos</span>, se ponen en fila. Míralo: ¡tres <code>&lt;div&gt;</code> en fila!" },
        { k: 'Espai|Espacio', t: "gap: l'espai entre elements|gap: el espacio entre elementos",
          media: { k: 'web', html: `<div class="fila">\n  <div class="foto">{{Platja|Playa}}</div>\n  <div class="foto">{{Bosc|Bosque}}</div>\n  <div class="foto">{{Pont|Puente}}</div>\n</div>`, css: `.fila {\n  display: flex;\n  gap: 16px;\n}\n.foto {\n  background: #FFC531;\n  padding: 10px;\n}` },
          x: "<code>gap</code> (que vol dir «forat») posa el mateix espai <b>entre</b> tots els elements, i no en deixa als extrems. És més fàcil que posar un marge a cada caixa.|<code>gap</code> (que quiere decir «hueco») pone el mismo espacio <b>entre</b> todos los elementos, y no deja en los extremos. Es más fácil que poner un margen a cada caja.",
          tip: "<code>gap</code> també funciona amb la graella que veurem a la sessió següent.|<code>gap</code> también funciona con la rejilla que veremos en la sesión siguiente." },
        { k: 'Compte!|¡Cuidado!', t: 'Al pare, no als fills|Al padre, no a los hijos', anim: 'w6parent',
          x: "Flexbox es posa al <b>contenidor</b>: és el pare qui col·loca els seus fills. Si poses <code>display: flex</code> a cada foto, les fotos no es mouen de lloc.|Flexbox se pone en el <b>contenedor</b>: es el padre quien coloca a sus hijos. Si pones <code>display: flex</code> en cada foto, las fotos no se mueven de sitio.",
          bad: '<code>.foto { display: flex; }</code>: ho poso a cada element.|<code>.foto { display: flex; }</code>: lo pongo en cada elemento.', good: '<code>.fila { display: flex; }</code>: ho poso a la caixa que els conté.|<code>.fila { display: flex; }</code>: lo pongo en la caja que los contiene.' }
      ] },
      { k: 'seq', ph: 'mans', q: "<b>Ordena els passos</b> per posar tres fotos en fila.|<b>Ordena los pasos</b> para poner tres fotos en fila.",
        items: [`A l'HTML, posa les fotos dins d'un contenidor: <code>&lt;div class="fila"&gt;</code>|En el HTML, pon las fotos dentro de un contenedor: <code>&lt;div class="fila"&gt;</code>`,
          'Al CSS, escriu una regla per al contenidor: <code>.fila { }</code>|En el CSS, escribe una regla para el contenedor: <code>.fila { }</code>',
          'A dins de la regla, escriu <code>display: flex;</code>|Dentro de la regla, escribe <code>display: flex;</code>',
          'Afegeix <code>gap: 10px;</code> perquè no quedin enganxades|Añade <code>gap: 10px;</code> para que no queden pegadas'],
        ex: "Primer l'estructura (HTML) i després la disposició (CSS). Sense contenidor, no hi ha ningú que posi les fotos en fila!|Primero la estructura (HTML) y después la disposición (CSS). Sin contenedor, ¡no hay nadie que ponga las fotos en fila!" },
      { k: 'unplug', ph: 'mans', ico: '📦', title: 'Caixes de veritat|Cajas de verdad',
        t: "Amb algú de casa i una safata (o una tapa de capsa) i 4 objectes petits: gots, llibres, fruites…|Con alguien de casa y una bandeja (o una tapa de caja) y 4 objetos pequeños: vasos, libros, frutas…",
        steps: ["La safata és el <b>contenidor</b> i els objectes, els <b>elements</b>. Al principi, posa'ls en pila, l'un darrere l'altre.|La bandeja es el <b>contenedor</b> y los objetos, los <b>elementos</b>. Al principio, ponlos en pila, uno detrás del otro.",
          "L'altra persona diu regles de CSS: <code>display: flex</code>, <code>gap: dos dits</code>, <code>justify-content: center</code>…|La otra persona dice reglas de CSS: <code>display: flex</code>, <code>gap: dos dedos</code>, <code>justify-content: center</code>…",
          'Tu col·loques els objectes com ho faria el navegador. Recorda: la regla és per a la safata, i la safata mou tots els objectes alhora.|Tú colocas los objetos como lo haría el navegador. Recuerda: la regla es para la bandeja, y la bandeja mueve todos los objetos a la vez.',
          "Canvieu els papers i inventeu una regla nova: qui l'endevina?|Cambiad los papeles e inventad una regla nueva: ¿quién la adivina?"],
        tip: "Truc: abans de moure res, digues en veu alta què creus que passarà.|Truco: antes de mover nada, di en voz alta qué crees que pasará." },
      { k: 'wquiz', ph: 'prova', q: "Prediu: <b>quina vista prèvia</b> fa aquest codi?|Predice: <b>¿qué vista previa</b> hace este código?",
        code: { html: BOX3, css: `.fila {\n  display: flex;\n  gap: 20px;\n}\n${BOXC}` },
        opts: [{ html: BOX3, css: `.fila { display: flex; gap: 20px; }\n${BOXC}` }, { html: BOX3, css: `.fila { display: flex; }\n${BOXC}` }, { html: BOX3, css: `.fila { display: flex; flex-direction: column; gap: 20px; }\n${BOXC}` }], a: 0,
        ex: "<code>display: flex</code> les posa en fila i <code>gap: 20px</code> deixa 20 píxels entre l'una i l'altra.|<code>display: flex</code> las pone en fila y <code>gap: 20px</code> deja 20 píxeles entre una y otra." },
      { k: 'wspot', ph: 'investiga', q: "Aquest codi hauria de posar les fotos en fila, però surten en pila. <b>Toca la línia amb l'error.</b>|Este código debería poner las fotos en fila, pero salen en pila. <b>Toca la línea con el error.</b>",
        html: `<div class="fila"></div>\n  <div class="foto">{{Platja|Playa}}</div>\n  <div class="foto">{{Bosc|Bosque}}</div>\n  <div class="foto">{{Pont|Puente}}</div>`,
        css: `.fila { display: flex; gap: 10px; }\n.foto { background: #FFC531; padding: 10px; }`, bad: 1,
        ex: "El contenidor es tanca a la línia 1, abans de les fotos: queda buit i les fotos són fora. El <code>&lt;/div&gt;</code> ha d'anar al final, després de l'última foto.|El contenedor se cierra en la línea 1, antes de las fotos: queda vacío y las fotos están fuera. El <code>&lt;/div&gt;</code> tiene que ir al final, después de la última foto." },
      { k: 'move', ph: 'pausa', secs: 25, t: "Dempeus! Fes de caixa flex: quan diguis <b>row</b>, estira els braços als costats; quan diguis <b>column</b>, aixeca'ls ben amunt; quan diguis <b>center</b>, fes un pas cap al centre. Tres vegades, cada cop més de pressa!|¡De pie! Haz de caja flex: cuando digas <b>row</b>, estira los brazos a los lados; cuando digas <b>column</b>, levántalos bien arriba; cuando digas <b>center</b>, da un paso hacia el centro. ¡Tres veces, cada vez más deprisa!" },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi/sortides', tab: 'css', q: "El Club Foto té tres fotos, però surten en pila. Al CSS, escriu una regla perquè el contenidor <code>.fila</code> les posi <b>en fila</b>.|El Club Foto tiene tres fotos, pero salen en pila. En el CSS, escribe una regla para que el contenedor <code>.fila</code> las ponga <b>en fila</b>.",
        html: S1_FOTOS(3), css: S1_CSS, checks: [css('.fila', 'display', FLEX, { txt: 'Una regla <code>.fila { display: flex; }</code>|Una regla <code>.fila { display: flex; }</code>' }), CSSOK],
        snips: [cs('.fila {\n  |\n}'), cs('display: flex;')],
        sol: { css: S1_CSS + '\n.fila {\n  display: flex;\n}' }, hint: "Afegeix al final del CSS una regla nova amb el selector <code>.fila</code> i, a dins, <code>display: flex;</code>|Añade al final del CSS una regla nueva con el selector <code>.fila</code> y, dentro, <code>display: flex;</code>" },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi/sortides', q: "Les fotos estan massa enganxades. Afegeix un <code>gap</code> al contenidor i, a l'HTML, posa una <b>quarta foto</b> dins de la fila (per exemple, <code>castell.svg</code>), amb el seu <code>alt</code>.|Las fotos están demasiado pegadas. Añade un <code>gap</code> al contenedor y, en el HTML, pon una <b>cuarta foto</b> dentro de la fila (por ejemplo, <code>castell.svg</code>), con su <code>alt</code>.",
        html: S1_FOTOS(3), css: S1_CSS + '\n.fila {\n  display: flex;\n}',
        checks: [css('.fila', 'gap', null, { txt: 'El contenidor <code>.fila</code> té <code>gap</code>|El contenedor <code>.fila</code> tiene <code>gap</code>' }), { k: 'class', c: 'foto', min: 4, txt: 'Hi ha 4 fotos <code>.foto</code>|Hay 4 fotos <code>.foto</code>' }, alt(4, { txt: 'Les 4 imatges tenen <code>alt</code>|Las 4 imágenes tienen <code>alt</code>' }), CLEAN],
        snips: [`<div class="foto">\n    <img src="img/tech/web/castell.svg" alt="|">\n    <p></p>\n  </div>`, cs('gap: 10px;')],
        sol: { html: S1_FOTOS(4), css: S1_CSS + '\n.fila {\n  display: flex;\n  gap: 10px;\n}' }, hint: "Copia un dels blocs <code>&lt;div class=\"foto\"&gt;…&lt;/div&gt;</code> i enganxa'l just abans del <code>&lt;/div&gt;</code> que tanca la fila. Canvia-hi la imatge, l'<code>alt</code> i el text.|Copia uno de los bloques <code>&lt;div class=\"foto\"&gt;…&lt;/div&gt;</code> y pégalo justo antes del <code>&lt;/div&gt;</code> que cierra la fila. Cambia la imagen, el <code>alt</code> y el texto." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Direcció|Dirección', t: 'flex-direction: row o column|flex-direction: row o column',
          media: { k: 'web', html: `<div class="columna">\n  <div class="c">{{Inici|Inicio}}</div>\n  <div class="c">{{Fotos|Fotos}}</div>\n  <div class="c">{{Sortides|Salidas}}</div>\n</div>`, css: `.columna {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.c {\n  background: #14A3B8;\n  color: white;\n  padding: 8px;\n}` },
          x: "Flex fa una fila (<code>row</code>) si no li dius res. Amb <code>flex-direction: column</code>, els elements van en <b>columna</b>, de dalt a baix. És molt útil per a menús laterals i per a pantalles de mòbil.|Flex hace una fila (<code>row</code>) si no le dices nada. Con <code>flex-direction: column</code>, los elementos van en <b>columna</b>, de arriba abajo. Es muy útil para menús laterales y para pantallas de móvil.",
          tip: "Sembla com al principi? No ben bé: ara hi ha <code>gap</code> i les pots alinear com vulguis.|¿Parece como al principio? No del todo: ahora hay <code>gap</code> y las puedes alinear como quieras." },
        { k: 'On van?|¿Dónde van?', t: 'justify-content|justify-content', anim: 'w6justify',
          x: "<code>justify-content</code> diu on es col·loquen els elements al llarg de la fila: <code>flex-start</code> (a l'inici), <code>center</code> (al centre), <code>flex-end</code> (al final) o <code>space-between</code> (repartits: el primer i l'últim toquen les vores).|<code>justify-content</code> dice dónde se colocan los elementos a lo largo de la fila: <code>flex-start</code> (al inicio), <code>center</code> (en el centro), <code>flex-end</code> (al final) o <code>space-between</code> (repartidos: el primero y el último tocan los bordes)." },
        { k: 'Un menú|Un menú', t: 'Un menú en fila|Un menú en fila',
          media: { k: 'web', html: `<nav>\n  <a href="#">{{Inici|Inicio}}</a>\n  <a href="#">{{Fotos|Fotos}}</a>\n  <a href="#">{{Club|Club}}</a>\n</nav>`, css: `nav {\n  display: flex;\n  justify-content: space-between;\n  background: #14204A;\n  padding: 10px;\n}\nnav a {\n  color: #FFC531;\n}` },
          x: "Molts menús de navegació són això: un <code>&lt;nav&gt;</code> amb enllaços i una regla flex. Amb <code>space-between</code>, els enllaços es reparteixen per tota la barra, sigui ampla o estreta.|Muchos menús de navegación son esto: un <code>&lt;nav&gt;</code> con enlaces y una regla flex. Con <code>space-between</code>, los enlaces se reparten por toda la barra, sea ancha o estrecha." }
      ] },
      { k: 'wquiz', ph: 'prova', q: "I aquest? Fixa't en <code>justify-content</code>.|¿Y este? Fíjate en <code>justify-content</code>.",
        code: { html: BOX3, css: `.fila {\n  display: flex;\n  justify-content: space-between;\n}\n${BOXC}` },
        opts: [{ html: BOX3, css: `.fila { display: flex; }\n${BOXC}` }, { html: BOX3, css: `.fila { display: flex; justify-content: center; }\n${BOXC}` }, { html: BOX3, css: `.fila { display: flex; justify-content: space-between; }\n${BOXC}` }], a: 2,
        ex: "Amb <code>space-between</code>, el primer element toca l'esquerra, l'últim toca la dreta i l'espai que sobra es reparteix entre ells.|Con <code>space-between</code>, el primer elemento toca la izquierda, el último toca la derecha y el espacio que sobra se reparte entre ellos." },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi', q: "Ara tu sol/a: fes el <b>menú del club</b>. Al CSS, fes que el <code>nav</code> sigui flex, que els enllaços es <b>reparteixin</b> per tota la barra (<code>space-between</code>) i que tinguin un <code>gap</code> de 10px.|Ahora tú solo/a: haz el <b>menú del club</b>. En el CSS, haz que el <code>nav</code> sea flex, que los enlaces se <b>repartan</b> por toda la barra (<code>space-between</code>) y que tengan un <code>gap</code> de 10px.",
        html: NAV, css: NAV_CSS, tab: 'css',
        checks: [css('nav', 'display', FLEX), css('nav', 'justify-content', '/^space-between$/', { txt: '<code>nav</code> té <code>justify-content: space-between</code>|<code>nav</code> tiene <code>justify-content: space-between</code>' }), css('nav', 'gap'), CSSOK],
        snips: [cs('display: flex;'), cs('justify-content: |;'), cs('gap: 10px;')],
        sol: { css: `nav {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  background: #14A3B8;\n  padding: 12px;\n}\nnav a {\n  color: white;\n  font-weight: bold;\n  text-decoration: none;\n}` },
        hint: "Escriu les tres propietats dins de la regla <code>nav { … }</code> que ja hi ha, cadascuna amb els seus dos punts i el seu punt i coma.|Escribe las tres propiedades dentro de la regla <code>nav { … }</code> que ya hay, cada una con sus dos puntos y su punto y coma." },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi/sortides', tab: 'css', q: "Caça els errors! Aquesta llista de sortides havia d'anar <b>en columna</b> amb 12px d'espai, però el CSS té <b>tres errors</b>. Troba'ls i arregla'ls.|¡Caza los errores! Esta lista de salidas tenía que ir <b>en columna</b> con 12px de espacio, pero el CSS tiene <b>tres errores</b>. Encuéntralos y arréglalos.",
        html: COLS, css: `.columna {\n  display: flexbox;\n  flex-direction: colum;\n  gap 12px;\n}\n${COLS_CSS}`,
        checks: [css('.columna', 'display', FLEX), css('.columna', 'flex-direction', '/^column$/', { txt: '<code>.columna</code> té <code>flex-direction: column</code>|<code>.columna</code> tiene <code>flex-direction: column</code>' }), css('.columna', 'gap'), CSSOK],
        sol: { css: `.columna {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n${COLS_CSS}` },
        hint: "Mira bé cada paraula: el valor és <code>flex</code> (no <code>flexbox</code>), <code>column</code> s'escriu amb una <b>n</b> al final, i entre la propietat i el valor sempre hi ha <b>dos punts</b>.|Mira bien cada palabra: el valor es <code>flex</code> (no <code>flexbox</code>), <code>column</code> se escribe con una <b>n</b> al final, y entre la propiedad y el valor siempre hay <b>dos puntos</b>." },
      { k: 'wcreate', ph: 'crea', url: 'clubfoto.numi', name: 'La capçalera del Club Foto|La cabecera del Club Foto',
        q: "Ara decideixes tu! Fes la part de dalt de la web del club: un títol, un <b>menú en fila</b> i una fila de <b>3 fotos</b> o més, amb el seu nom. Tria els colors, les fotos i on van.|¡Ahora decides tú! Haz la parte de arriba de la web del club: un título, un <b>menú en fila</b> y una fila de <b>3 fotos</b> o más, con su nombre. Elige los colores, las fotos y dónde van.",
        crit: ['El menú és una fila flex amb gap|El menú es una fila flex con gap', 'Una fila flex amb almenys 3 fotos, totes amb alt|Una fila flex con al menos 3 fotos, todas con alt', 'Fas servir justify-content|Usas justify-content'],
        html: `<h1>Club Foto</h1>\n<nav>\n  <a href="#fotos">{{Fotos|Fotos}}</a>\n  <a href="#sortides">{{Sortides|Salidas}}</a>\n</nav>\n<h2>{{Les millors fotos|Las mejores fotos}}</h2>\n<div class="fila">\n${foto('muntanya', 'La muntanya|La montaña')}\n</div>`,
        css: S1_CSS,
        checks: [tag('h1'), css('nav', 'display', FLEX), css('.fila', 'display', FLEX), prop('gap', null, { txt: 'Fas servir <code>gap</code>|Usas <code>gap</code>' }), prop('justify-content', null, { txt: 'Fas servir <code>justify-content</code>|Usas <code>justify-content</code>' }), alt(3, { txt: 'Almenys 3 imatges amb <code>alt</code>|Al menos 3 imágenes con <code>alt</code>' }), CLEAN],
        snips: [`<div class="foto">\n    <img src="img/tech/web/|.svg" alt="">\n    <p></p>\n  </div>`, '<a href="#">|</a>', cs('display: flex;'), cs('justify-content: |;'), cs('gap: 10px;')],
        sol: { html: `<h1>Club Foto</h1>\n<nav>\n  <a href="#fotos">{{Fotos|Fotos}}</a>\n  <a href="#sortides">{{Sortides|Salidas}}</a>\n  <a href="#club">{{El club|El club}}</a>\n</nav>\n<h2>{{Les millors fotos|Las mejores fotos}}</h2>\n<div class="fila">\n${foto('muntanya', 'La muntanya|La montaña')}\n${foto('platja', 'La platja|La playa')}\n${foto('ciutat', 'La ciutat|La ciudad')}\n</div>`,
          css: S1_CSS + `\nnav {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  background: #14204A;\n  padding: 10px;\n}\nnav a {\n  color: #FFC531;\n}\n.fila {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}` } },
      { k: 'quiz', ph: 'tanca', q: "On s'escriu <code>display: flex</code> per posar unes fotos en fila?|¿Dónde se escribe <code>display: flex</code> para poner unas fotos en fila?",
        opts: ['A la caixa que conté les fotos (el contenidor)|En la caja que contiene las fotos (el contenedor)', 'A cada foto|En cada foto', 'Al títol <code>&lt;h1&gt;</code>|En el título <code>&lt;h1&gt;</code>'], a: 0,
        ex: 'El pare (el contenidor) és qui col·loca els fills.|El padre (el contenedor) es quien coloca a los hijos.' },
      { k: 'quiz', ph: 'tanca', q: "Quina propietat posa <b>el mateix espai</b> entre tots els elements d'una fila flex?|¿Qué propiedad pone <b>el mismo espacio</b> entre todos los elementos de una fila flex?",
        opts: ['<code>gap</code>|<code>gap</code>', '<code>padding</code>|<code>padding</code>', '<code>flex-direction</code>|<code>flex-direction</code>'], a: 0 },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 2 · Graelles ---------- */
  { id: 'w6-2', t: 'Graelles|Rejillas', min: 40, badge: 'w_graella',
    learn: ["align-items col·loca els elements de dalt a baix: amb center, queden centrats.|align-items coloca los elementos de arriba abajo: con center, quedan centrados.",
      'Amb display: grid i grid-template-columns, tu dius les columnes i la graella fa les files sola.|Con display: grid y grid-template-columns, tú dices las columnas y la rejilla hace las filas sola.',
      "1fr és un tros de l'espai que queda: repeat(3, 1fr) fa tres columnes iguals.|1fr es un trozo del espacio que queda: repeat(3, 1fr) hace tres columnas iguales."],
    steps: [
      { k: 'wquiz', ph: 'recorda', q: "Recordes <code>justify-content</code>? Quina vista prèvia fa <code>justify-content: center</code>?|¿Recuerdas <code>justify-content</code>? ¿Qué vista previa hace <code>justify-content: center</code>?",
        code: { html: BOX3, css: `.fila {\n  display: flex;\n  justify-content: center;\n}\n${BOXC}` },
        opts: [{ html: BOX3, css: `.fila { display: flex; justify-content: flex-end; }\n${BOXC}` }, { html: BOX3, css: `.fila { display: flex; justify-content: center; }\n${BOXC}` }, { html: BOX3, css: `.fila { display: flex; justify-content: space-between; }\n${BOXC}` }], a: 1,
        ex: "<code>center</code> ajunta els elements al mig de la fila.|<code>center</code> junta los elementos en el medio de la fila." },
      { k: 'story', ph: 'missio', who: 'numi', scene: 'moll', title: '9 fotos del moll|9 fotos del muelle',
        t: "El Club Foto ha tornat de la sortida al moll amb <b>9 fotos</b> i les vol penjar totes. En una sola fila no hi caben, i en columna la pàgina fa quilòmetres! Necessiten una <b>graella</b>: files i columnes, com una capsa d'ous.|El Club Foto ha vuelto de la salida al muelle con <b>9 fotos</b> y las quiere colgar todas. En una sola fila no caben, ¡y en columna la página mide kilómetros! Necesitan una <b>rejilla</b>: filas y columnas, como una caja de huevos." },
      { k: 'story', ph: 'missio', who: 'bit', mood: 'happy',
        t: "BIP! Primer arreglarem la capçalera del club, que té el logo i el títol desquadrats. Després, la gran eina d'avui: <b>grid</b>, la graella del CSS.|¡BIP! Primero arreglaremos la cabecera del club, que tiene el logo y el título descuadrados. Después, la gran herramienta de hoy: <b>grid</b>, la rejilla del CSS." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Alinear|Alinear', t: 'align-items: de dalt a baix|align-items: de arriba abajo', anim: 'w6align',
          x: "<code>justify-content</code> mou els elements <b>al llarg de la fila</b> (↔). <code>align-items</code> els mou en l'<b>altra direcció</b> (↕): a dalt (<code>flex-start</code>), al mig (<code>center</code>) o a baix (<code>flex-end</code>). Amb <code>center</code>, un logo gran i un títol petit queden ben alineats.|<code>justify-content</code> mueve los elementos <b>a lo largo de la fila</b> (↔). <code>align-items</code> los mueve en la <b>otra dirección</b> (↕): arriba (<code>flex-start</code>), en medio (<code>center</code>) o abajo (<code>flex-end</code>). Con <code>center</code>, un logo grande y un título pequeño quedan bien alineados." },
        { k: 'Graella|Rejilla', t: 'display: grid|display: grid',
          media: { k: 'web', html: `<div class="galeria">\n${NUM(6)}\n</div>`, css: `.galeria {\n  display: grid;\n  grid-template-columns: 80px 80px 80px;\n  gap: 6px;\n}\n${NUMC}` },
          x: "Amb <code>display: grid</code>, el contenidor es converteix en una <span class='hl'>graella</span>. A <code>grid-template-columns</code> escrius una mida per a cada columna: aquí, 3 columnes de 80px. Tu només dius les columnes: les <b>files es fan soles</b>.|Con <code>display: grid</code>, el contenedor se convierte en una <span class='hl'>rejilla</span>. En <code>grid-template-columns</code> escribes un tamaño para cada columna: aquí, 3 columnas de 80px. Tú solo dices las columnas: las <b>filas se hacen solas</b>." },
        { k: 'La unitat fr|La unidad fr', t: "fr: un tros de l'espai|fr: un trozo del espacio", anim: 'w6fr',
          x: "<code>fr</code> vol dir «fracció»: un tros de l'espai que queda. <code>1fr 2fr 1fr</code> parteix l'amplada en 4 trossos i la columna del mig se n'emporta 2. Com que són trossos i no píxels, la graella s'adapta a qualsevol pantalla.|<code>fr</code> quiere decir «fracción»: un trozo del espacio que queda. <code>1fr 2fr 1fr</code> parte el ancho en 4 trozos y la columna del medio se lleva 2. Como son trozos y no píxeles, la rejilla se adapta a cualquier pantalla." },
        { k: 'repeat()|repeat()', t: 'repeat(): sense repetir-te|repeat(): sin repetirte',
          media: { k: 'web', html: `<div class="galeria">\n${NUM(7)}\n</div>`, css: `.galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n${NUMC}` },
          x: "<code>repeat(3, 1fr)</code> és el mateix que <code>1fr 1fr 1fr</code>: tres columnes iguals. Fixa't: hi ha 7 caixes i 3 columnes, i la graella fa <b>3 files</b> ella sola (l'última, amb una caixa).|<code>repeat(3, 1fr)</code> es lo mismo que <code>1fr 1fr 1fr</code>: tres columnas iguales. Fíjate: hay 7 cajas y 3 columnas, y la rejilla hace <b>3 filas</b> ella sola (la última, con una caja)." },
        { k: 'Flex o grid?|¿Flex o grid?', t: 'Una direcció o dues|Una dirección o dos', anim: 'w6grid',
          x: "<b>Flex</b> és per a una sola direcció: una fila (un menú, una capçalera) o una columna. <b>Grid</b> és per a dues direccions alhora: files i columnes, com una galeria de fotos.|<b>Flex</b> es para una sola dirección: una fila (un menú, una cabecera) o una columna. <b>Grid</b> es para dos direcciones a la vez: filas y columnas, como una galería de fotos.",
          bad: 'Per fer una graella de 3 × 3, faig 3 contenidors flex, un per fila.|Para hacer una rejilla de 3 × 3, hago 3 contenedores flex, uno por fila.', good: 'Poso les 9 fotos dins d\'un sol contenidor grid i ell les reparteix en files.|Pongo las 9 fotos dentro de un solo contenedor grid y él las reparte en filas.' }
      ] },
      { k: 'quiz', ph: 'mans', q: "Una galeria té <code>grid-template-columns: repeat(4, 1fr)</code> i <b>10 fotos</b>. Quantes files tindrà?|Una galería tiene <code>grid-template-columns: repeat(4, 1fr)</code> y <b>10 fotos</b>. ¿Cuántas filas tendrá?",
        opts: ['3 files: 4, 4 i 2 fotos|3 filas: 4, 4 y 2 fotos', '4 files de 4 fotos|4 filas de 4 fotos', '10 files, una foto a cada fila|10 filas, una foto en cada fila'], a: 0,
        ex: "La graella omple les files d'esquerra a dreta, i quan una s'acaba en comença una altra. 4 + 4 + 2 = 10.|La rejilla llena las filas de izquierda a derecha, y cuando una se acaba empieza otra. 4 + 4 + 2 = 10." },
      { k: 'unplug', ph: 'mans', ico: '🔍', title: 'Caçadors de graelles|Cazadores de rejillas',
        t: "Les graelles són a tot arreu! Busca'n a casa amb algú de la família.|¡Las rejillas están por todas partes! Busca en casa con alguien de la familia.",
        steps: ["Troba 3 coses que siguin una graella: una capsa d'ous, un calendari, les rajoles de la paret, un teclat, una prestatgeria…|Encuentra 3 cosas que sean una rejilla: una caja de huevos, un calendario, los azulejos de la pared, un teclado, una estantería…",
          "Per a cadascuna, compta quantes <b>columnes</b> i quantes <b>files</b> té.|Para cada una, cuenta cuántas <b>columnas</b> y cuántas <b>filas</b> tiene.",
          "Escriu la regla de CSS que la faria: per exemple, un calendari és <code>repeat(7, 1fr)</code>.|Escribe la regla de CSS que la haría: por ejemplo, un calendario es <code>repeat(7, 1fr)</code>.",
          "Hi ha alguna columna més ampla que les altres? Com ho escriuries amb <code>fr</code>?|¿Hay alguna columna más ancha que las demás? ¿Cómo lo escribirías con <code>fr</code>?"],
        tip: "Una capsa de 12 ous en 2 files de 6 seria grid-template-columns: repeat(6, 1fr).|Una caja de 12 huevos en 2 filas de 6 sería grid-template-columns: repeat(6, 1fr)." },
      { k: 'wquiz', ph: 'prova', q: "Prediu: <b>quina vista prèvia</b> fa aquest codi?|Predice: <b>¿qué vista previa</b> hace este código?",
        code: { html: `<div class="galeria">\n${NUM(4)}\n</div>`, css: `.galeria {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 6px;\n}\n${NUMC}` },
        opts: [{ html: `<div class="galeria">\n${NUM(4)}\n</div>`, css: `.galeria { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }\n${NUMC}` }, { html: `<div class="galeria">\n${NUM(4)}\n</div>`, css: `.galeria { display: grid; grid-template-columns: 1fr 2fr; gap: 6px; }\n${NUMC}` }, { html: `<div class="galeria">\n${NUM(4)}\n</div>`, css: `.galeria { display: grid; grid-template-columns: 2fr 1fr; gap: 6px; }\n${NUMC}` }], a: 1,
        ex: "Dues columnes: la primera s'emporta 1 tros i la segona, 2. Per això la de la dreta és el doble d'ampla.|Dos columnas: la primera se lleva 1 trozo y la segunda, 2. Por eso la de la derecha es el doble de ancha." },
      { k: 'wspot', ph: 'investiga', preview: false, q: "Aquesta galeria hauria de tenir 3 columnes, però totes les fotos surten en una sola columna. <b>Toca la línia amb l'error.</b>|Esta galería debería tener 3 columnas, pero todas las fotos salen en una sola columna. <b>Toca la línea con el error.</b>",
        css: `.galeria {\n  display: grid;\n  grid-template-columns: 1fr, 1fr, 1fr;\n  gap: 8px;\n}\nimg {\n  width: 100%;\n}`, bad: 3,
        ex: "A <code>grid-template-columns</code>, les columnes se separen amb <b>espais</b>, no amb comes. Amb comes, el navegador no entén la línia i se la salta.|En <code>grid-template-columns</code>, las columnas se separan con <b>espacios</b>, no con comas. Con comas, el navegador no entiende la línea y se la salta." },
      { k: 'move', ph: 'pausa', secs: 25, t: "Fes de graella amb el cos: 3 columnes! Toca l'espatlla esquerra, el pit i l'espatlla dreta (fila 1); després els genolls, la panxa i el cap (fila 2). Ara més de pressa!|Haz de rejilla con el cuerpo: ¡3 columnas! Toca el hombro izquierdo, el pecho y el hombro derecho (fila 1); después las rodillas, la barriga y la cabeza (fila 2). ¡Ahora más deprisa!" },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi', tab: 'css', q: "La capçalera ja és flex, però el logo, el títol i el botó estan desquadrats. Centra'ls <b>de dalt a baix</b> amb <code>align-items</code> i reparteix-los per la barra amb <code>justify-content</code>.|La cabecera ya es flex, pero el logo, el título y el botón están descuadrados. Céntralos <b>de arriba abajo</b> con <code>align-items</code> y repártelos por la barra con <code>justify-content</code>.",
        html: HEAD, css: HEAD_CSS,
        checks: [css('header', 'align-items', '/^center$/', { txt: '<code>header</code> té <code>align-items: center</code>|<code>header</code> tiene <code>align-items: center</code>' }), css('header', 'justify-content', '/^space-between$/', { txt: '<code>header</code> té <code>justify-content: space-between</code>|<code>header</code> tiene <code>justify-content: space-between</code>' }), CSSOK],
        snips: [cs('align-items: center;'), cs('justify-content: space-between;')],
        sol: { css: HEAD_CSS.replace('  display: flex;\n', '  display: flex;\n  justify-content: space-between;\n  align-items: center;\n') },
        hint: "Les dues propietats van dins de la regla <code>header { … }</code>, perquè la capçalera és el contenidor.|Las dos propiedades van dentro de la regla <code>header { … }</code>, porque la cabecera es el contenedor." },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi/galeria', tab: 'css', q: "Sis fotos de l'estiu, enormes i en pila. Converteix <code>.galeria</code> en una <b>graella de 3 columnes iguals</b>.|Seis fotos del verano, enormes y en pila. Convierte <code>.galeria</code> en una <b>rejilla de 3 columnas iguales</b>.",
        html: GAL6, css: `.galeria {\n  gap: 8px;\n}\n${GAL_IMG}`,
        checks: [css('.galeria', 'display', GRID), css('.galeria', 'grid-template-columns', COL3, { txt: '<code>.galeria</code> té <code>grid-template-columns</code> amb 3 columnes|<code>.galeria</code> tiene <code>grid-template-columns</code> con 3 columnas' }), CSSOK],
        snips: [cs('display: grid;'), cs('grid-template-columns: |;'), cs('repeat(3, 1fr)')],
        sol: { css: `.galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n${GAL_IMG}` },
        hint: "Dins de <code>.galeria</code> escriu <code>display: grid;</code> i, a sota, <code>grid-template-columns: repeat(3, 1fr);</code>|Dentro de <code>.galeria</code> escribe <code>display: grid;</code> y, debajo, <code>grid-template-columns: repeat(3, 1fr);</code>" },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi/mascotes', q: "Les mascotes del club! Afegeix-ne <b>2 més</b> a l'HTML (en tens a <code>img/ic/</code>: <code>lion</code>, <code>octopus</code>, <code>eagle</code>, <code>chick</code>…) i escriu tu sol/a la graella: <b>4 columnes iguals</b> i un <code>gap</code>.|¡Las mascotas del club! Añade <b>2 más</b> en el HTML (tienes en <code>img/ic/</code>: <code>lion</code>, <code>octopus</code>, <code>eagle</code>, <code>chick</code>…) y escribe tú solo/a la rejilla: <b>4 columnas iguales</b> y un <code>gap</code>.",
        html: ANIM(6), css: ANIM_CSS,
        checks: [inn('img', 'div', { min: 8, txt: 'Hi ha 8 mascotes a la graella|Hay 8 mascotas en la rejilla' }), alt(8, { txt: 'Les 8 imatges tenen <code>alt</code>|Las 8 imágenes tienen <code>alt</code>' }), css('.animals', 'display', GRID), css('.animals', 'grid-template-columns', COL4, { txt: '<code>.animals</code> té 4 columnes|<code>.animals</code> tiene 4 columnas' }), css('.animals', 'gap'), CLEAN],
        snips: ['<img src="img/ic/|.webp" alt="">', cs('.animals {\n  |\n}'), cs('display: grid;'), cs('grid-template-columns: |;'), cs('gap: 10px;')],
        sol: { html: ANIM(8), css: `.animals {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n}\n${ANIM_CSS}` },
        hint: "Fes una regla nova <code>.animals { … }</code> (sense <code>img</code>: és el contenidor) amb <code>display</code>, <code>grid-template-columns</code> i <code>gap</code>.|Haz una regla nueva <code>.animals { … }</code> (sin <code>img</code>: es el contenedor) con <code>display</code>, <code>grid-template-columns</code> y <code>gap</code>." },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi/galeria', tab: 'css', q: "Caça els errors! Aquesta graella té <b>tres errors</b> al CSS i no funciona. Arregla'ls perquè surtin 3 columnes amb espai entre les fotos.|¡Caza los errores! Esta rejilla tiene <b>tres errores</b> en el CSS y no funciona. Arréglalos para que salgan 3 columnas con espacio entre las fotos.",
        html: GAL6, css: `.galeria {\n  display: grip;\n  grid-template-columns: 1fr, 1fr, 1fr;\n  gap: 10;\n}\n${GAL_IMG}`,
        checks: [css('.galeria', 'display', GRID), css('.galeria', 'grid-template-columns', '/^[^,]*fr[^,]*$/', { txt: 'Les columnes amb <code>fr</code> i separades amb espais (sense comes)|Las columnas con <code>fr</code> y separadas con espacios (sin comas)' }), css('.galeria', 'gap', '/^\\d+(\\.\\d+)?[a-z%]+$/', { txt: 'El <code>gap</code> té unitat (per exemple, <code>10px</code>)|El <code>gap</code> tiene unidad (por ejemplo, <code>10px</code>)' })],
        sol: { css: `.galeria {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n}\n${GAL_IMG}` },
        hint: "Un error és una lletra, un altre són unes comes que sobren i l'últim és una unitat que falta. Els números de mida, si no són 0, sempre porten unitat: <code>px</code>.|Un error es una letra, otro son unas comas que sobran y el último es una unidad que falta. Los números de tamaño, si no son 0, siempre llevan unidad: <code>px</code>." },
      { k: 'wcreate', ph: 'crea', url: 'clubfoto.numi/la-meva-sortida', name: 'La meva galeria|Mi galería',
        q: "Inventa't una sortida del club i fes-ne la <b>galeria</b>: un títol, unes línies explicant-la i una graella amb <b>almenys 6 fotos</b>. Tu tries quantes columnes i com d'amples (amb <code>fr</code>).|Invéntate una salida del club y haz su <b>galería</b>: un título, unas líneas explicándola y una rejilla con <b>al menos 6 fotos</b>. Tú eliges cuántas columnas y cómo de anchas (con <code>fr</code>).",
        crit: ['Una graella amb display: grid|Una rejilla con display: grid', 'Columnes amb fr i un gap|Columnas con fr y un gap', 'Almenys 6 fotos, totes amb alt|Al menos 6 fotos, todas con alt'],
        html: `<h1>{{La meva sortida|Mi salida}}</h1>\n<p>{{Explica on vau anar i què vau veure.|Explica adónde fuisteis y qué visteis.}}</p>\n<div class="galeria">\n${img('platja')}\n</div>`,
        css: `body {\n  background: #F5F8FF;\n}\nimg {\n  width: 100%;\n  border-radius: 10px;\n}`,
        checks: [tag('h1'), prop('display', GRID, { txt: 'Hi ha un contenidor amb <code>display: grid</code>|Hay un contenedor con <code>display: grid</code>' }), prop('grid-template-columns', '/fr/', { txt: 'Les columnes fan servir <code>fr</code>|Las columnas usan <code>fr</code>' }), prop('gap', null, { txt: 'Fas servir <code>gap</code>|Usas <code>gap</code>' }), alt(6, { txt: 'Almenys 6 fotos amb <code>alt</code>|Al menos 6 fotos con <code>alt</code>' }), CLEAN],
        snips: ['<img src="img/tech/web/|.svg" alt="">', cs('display: grid;'), cs('grid-template-columns: |;'), cs('gap: 8px;')],
        sol: { html: `<h1>{{Excursió a la muntanya|Excursión a la montaña}}</h1>\n<p>{{Vam pujar fins al castell i vam tornar pel pont.|Subimos hasta el castillo y volvimos por el puente.}}</p>\n<div class="galeria">\n${['platja', 'muntanya', 'bosc', 'castell', 'pont', 'seu'].map(n => img(n)).join('\n')}\n</div>`,
          css: `body {\n  background: #F5F8FF;\n}\nimg {\n  width: 100%;\n  border-radius: 10px;\n}\n.galeria {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 8px;\n}` } },
      { k: 'quiz', ph: 'tanca', q: "Què fa <code>grid-template-columns: repeat(3, 1fr)</code>?|¿Qué hace <code>grid-template-columns: repeat(3, 1fr)</code>?",
        opts: ['Tres columnes iguals que es reparteixen l\'amplada|Tres columnas iguales que se reparten el ancho', 'Tres files d\'un píxel|Tres filas de un píxel', 'Repeteix tres vegades cada foto|Repite tres veces cada foto'], a: 0 },
      { k: 'quiz', ph: 'tanca', q: "Vols centrar el logo i el títol d'una capçalera flex <b>de dalt a baix</b>. Quina propietat fas servir?|Quieres centrar el logo y el título de una cabecera flex <b>de arriba abajo</b>. ¿Qué propiedad usas?",
        opts: ['<code>align-items: center</code>|<code>align-items: center</code>', '<code>justify-content: center</code>|<code>justify-content: center</code>', '<code>text-align: center</code>|<code>text-align: center</code>'], a: 0,
        ex: "<code>justify-content</code> va al llarg de la fila (↔) i <code>align-items</code>, de dalt a baix (↕).|<code>justify-content</code> va a lo largo de la fila (↔) y <code>align-items</code>, de arriba abajo (↕)." },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 3 · Taules ---------- */
  { id: 'w6-3', t: 'Taules|Tablas', min: 40, badge: 'w_taula',
    learn: ['Una taula és per a dades en files i columnes, com un horari o uns resultats; no per col·locar fotos.|Una tabla es para datos en filas y columnas, como un horario o unos resultados; no para colocar fotos.',
      '<code>&lt;table&gt;</code> té files <code>&lt;tr&gt;</code>; cada fila té cel·les <code>&lt;td&gt;</code>, i les capçaleres són <code>&lt;th&gt;</code>.|<code>&lt;table&gt;</code> tiene filas <code>&lt;tr&gt;</code>; cada fila tiene celdas <code>&lt;td&gt;</code>, y las cabeceras son <code>&lt;th&gt;</code>.',
      'Amb <code>&lt;caption&gt;</code> i <code>&lt;th&gt;</code>, un lector de pantalla pot explicar la taula a qui no la veu.|Con <code>&lt;caption&gt;</code> y <code>&lt;th&gt;</code>, un lector de pantalla puede explicar la tabla a quien no la ve.'],
    steps: [
      { k: 'quiz', ph: 'recorda', q: "Tens 8 fotos en una graella amb <code>grid-template-columns: repeat(4, 1fr)</code>. Quantes files surten?|Tienes 8 fotos en una rejilla con <code>grid-template-columns: repeat(4, 1fr)</code>. ¿Cuántas filas salen?",
        opts: ['2 files de 4|2 filas de 4', '4 files de 2|4 filas de 2', '1 fila de 8|1 fila de 8'], a: 0, ex: 'Tu dius les columnes (4) i la graella fa les files que calguin: 8 ÷ 4 = 2.|Tú dices las columnas (4) y la rejilla hace las filas que hagan falta: 8 ÷ 4 = 2.' },
      { k: 'story', ph: 'missio', who: 'numi', scene: 'taller', title: 'La llibreta del club|La libreta del club',
        t: "El Club Foto apunta les sortides en una llibreta: «dissabte al moll a les 10, diumenge al bosc a les 9 i mitja, dimecres a la platja…». Tot seguit, sense ordre. Ningú no ho troba! Cada sortida té tres dades: el <b>dia</b>, el <b>lloc</b> i l'<b>hora</b>.|El Club Foto apunta las salidas en una libreta: «sábado en el muelle a las 10, domingo en el bosque a las 9 y media, miércoles en la playa…». Todo seguido, sin orden. ¡Nadie lo encuentra! Cada salida tiene tres datos: el <b>día</b>, el <b>lugar</b> y la <b>hora</b>." },
      { k: 'story', ph: 'missio', who: 'bit', mood: 'happy',
        t: "BIP! Quan la informació té <b>files i columnes</b> (cada fila és una sortida i cada columna, un tipus de dada), no és una galeria: és una <b>taula</b>. L'HTML té etiquetes especials per fer-ne.|¡BIP! Cuando la información tiene <b>filas y columnas</b> (cada fila es una salida y cada columna, un tipo de dato), no es una galería: es una <b>tabla</b>. El HTML tiene etiquetas especiales para hacerlas." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Dades en taula|Datos en tabla', t: 'Quan cal una taula?|¿Cuándo hace falta una tabla?', pic: 'img/ment/com.webp',
          x: "El tiquet de la compra, l'horari de classe o la classificació d'una lliga són <span class='hl'>taules</span>: cada <b>fila</b> és una cosa (un producte, un dia, un equip) i cada <b>columna</b> és un tipus de dada (el nom, el preu, els punts).|El tique de la compra, el horario de clase o la clasificación de una liga son <span class='hl'>tablas</span>: cada <b>fila</b> es una cosa (un producto, un día, un equipo) y cada <b>columna</b> es un tipo de dato (el nombre, el precio, los puntos).",
          bad: "Faig servir una taula per col·locar les fotos d'una galeria.|Uso una tabla para colocar las fotos de una galería.", good: 'Taula per a dades; grid o flex per col·locar fotos i caixes.|Tabla para datos; grid o flex para colocar fotos y cajas.' },
        { k: 'Etiquetes|Etiquetas', t: 'table, tr i td|table, tr y td', anim: 'w6table',
          x: "<code>&lt;table&gt;</code> és la taula sencera. A dins, cada <code>&lt;tr&gt;</code> (<i>table row</i>) és una <b>fila</b>, i cada <code>&lt;td&gt;</code> (<i>table data</i>) és una <b>cel·la</b> d'aquella fila. Totes les files han de tenir el mateix nombre de cel·les.|<code>&lt;table&gt;</code> es la tabla entera. Dentro, cada <code>&lt;tr&gt;</code> (<i>table row</i>) es una <b>fila</b>, y cada <code>&lt;td&gt;</code> (<i>table data</i>) es una <b>celda</b> de esa fila. Todas las filas tienen que tener el mismo número de celdas." },
        { k: 'Capçaleres|Cabeceras', t: 'th i caption|th y caption',
          media: { k: 'web', html: SORT_T(2), css: T_CSS },
          x: "La primera fila diu què hi ha a cada columna: les seves cel·les són <code>&lt;th&gt;</code> (<i>table header</i>), i el navegador les posa en negreta. <code>&lt;caption&gt;</code> és el títol de la taula i va just després de <code>&lt;table&gt;</code>.|La primera fila dice qué hay en cada columna: sus celdas son <code>&lt;th&gt;</code> (<i>table header</i>), y el navegador las pone en negrita. <code>&lt;caption&gt;</code> es el título de la tabla y va justo después de <code>&lt;table&gt;</code>." },
        { k: 'Accessibilitat|Accesibilidad', t: "Taules que s'entenen sense veure-les|Tablas que se entienden sin verlas", anim: 'w6reader',
          x: "Algunes persones naveguen amb un <span class='hl'>lector de pantalla</span>, un programa que llegeix la web en veu alta. Gràcies als <code>&lt;th&gt;</code>, pot dir «Lloc: el bosc» i no només «el bosc». Per això les capçaleres han de ser <code>th</code>, i no <code>td</code> amb negreta.|Algunas personas navegan con un <span class='hl'>lector de pantalla</span>, un programa que lee la web en voz alta. Gracias a los <code>&lt;th&gt;</code>, puede decir «Lugar: el bosque» y no solo «el bosque». Por eso las cabeceras tienen que ser <code>th</code>, y no <code>td</code> con negrita." },
        { k: 'Estil|Estilo', t: 'Vores i espais a la taula|Bordes y espacios en la tabla',
          media: { k: 'web', html: SORT_T(2), css: T_CSS },
          x: "Les taules no tenen vores per defecte. Fes servir el que ja saps de les caixes: <code>border</code> i <code>padding</code> a <code>th, td</code>. I <code>border-collapse: collapse</code> ajunta les vores dobles de les cel·les en una de sola.|Las tablas no tienen bordes por defecto. Usa lo que ya sabes de las cajas: <code>border</code> y <code>padding</code> en <code>th, td</code>. Y <code>border-collapse: collapse</code> junta los bordes dobles de las celdas en uno solo.",
          tip: "<code>th, td { … }</code> és una regla per a dos selectors alhora: la coma vol dir «i també».|<code>th, td { … }</code> es una regla para dos selectores a la vez: la coma quiere decir «y también»." }
      ] },
      { k: 'seq', ph: 'mans', q: "<b>Ordena les línies</b> d'aquesta taula, de dalt a baix.|<b>Ordena las líneas</b> de esta tabla, de arriba abajo.",
        items: ['<code>&lt;table&gt;</code>|<code>&lt;table&gt;</code>', '<code>&lt;caption&gt;Sortides&lt;/caption&gt;</code>|<code>&lt;caption&gt;Salidas&lt;/caption&gt;</code>',
          '<code>&lt;tr&gt;&lt;th&gt;Dia&lt;/th&gt;&lt;th&gt;Lloc&lt;/th&gt;&lt;/tr&gt;</code>|<code>&lt;tr&gt;&lt;th&gt;Día&lt;/th&gt;&lt;th&gt;Lugar&lt;/th&gt;&lt;/tr&gt;</code>',
          '<code>&lt;tr&gt;&lt;td&gt;Dissabte&lt;/td&gt;&lt;td&gt;El moll&lt;/td&gt;&lt;/tr&gt;</code>|<code>&lt;tr&gt;&lt;td&gt;Sábado&lt;/td&gt;&lt;td&gt;El muelle&lt;/td&gt;&lt;/tr&gt;</code>', '<code>&lt;/table&gt;</code>|<code>&lt;/table&gt;</code>'],
        ex: "Primer s'obre la taula, després el títol, la fila de capçaleres, les files de dades i, al final, es tanca.|Primero se abre la tabla, después el título, la fila de cabeceras, las filas de datos y, al final, se cierra." },
      { k: 'quiz', ph: 'investiga', q: "Quina d'aquestes coses <b>sí</b> que hauria de ser una taula?|¿Cuál de estas cosas <b>sí</b> debería ser una tabla?",
        opts: ['Els resultats del concurs: foto, autor/a i vots de cada foto|Los resultados del concurso: foto, autor/a y votos de cada foto', 'La galeria de fotos de la sortida|La galería de fotos de la salida', 'El menú de navegació de la web|El menú de navegación de la web'], a: 0,
        ex: "Els resultats es llegeixen per files (cada foto) i per columnes (cada dada): són dades de taula. La galeria es fa amb grid i el menú, amb flex.|Los resultados se leen por filas (cada foto) y por columnas (cada dato): son datos de tabla. La galería se hace con grid y el menú, con flex." },
      { k: 'unplug', ph: 'mans', ico: '📅', title: 'Taules amagades|Tablas escondidas',
        t: "A casa hi ha moltes taules que no semblen taules. Busca-les amb algú de la família.|En casa hay muchas tablas que no parecen tablas. Búscalas con alguien de la familia.",
        steps: ["Troba 3 taules de veritat: un tiquet de la compra, un horari, un calendari, la informació nutricional d'un paquet de galetes…|Encuentra 3 tablas de verdad: un tique de la compra, un horario, un calendario, la información nutricional de un paquete de galletas…",
          'Per a cadascuna, digues què és cada <b>fila</b> i què és cada <b>columna</b>.|Para cada una, di qué es cada <b>fila</b> y qué es cada <b>columna</b>.',
          'Quines són les capçaleres (els <code>th</code>)? Té títol (<code>caption</code>)?|¿Cuáles son las cabeceras (los <code>th</code>)? ¿Tiene título (<code>caption</code>)?',
          "Llegeix-ne una fila en veu alta com un lector de pantalla: «Producte: pomes. Preu: 2 euros».|Lee una fila en voz alta como un lector de pantalla: «Producto: manzanas. Precio: 2 euros»."] },
      { k: 'wquiz', ph: 'prova', q: "Prediu: <b>quina vista prèvia</b> fa aquesta taula?|Predice: <b>¿qué vista previa</b> hace esta tabla?",
        code: { html: `<table>\n${RH('{{Foto|Foto}}', '{{Vots|Votos}}')}\n${R('{{El far|El faro}}', '12')}\n${R('{{La gavina|La gaviota}}', '9')}\n</table>`, css: T_CSS },
        opts: [{ html: `<table>\n${RH('{{Foto|Foto}}', '{{Vots|Votos}}')}\n${R('{{El far|El faro}}', '12')}\n${R('{{La gavina|La gaviota}}', '9')}\n</table>`, css: T_CSS },
          { html: `<table>\n  <tr><th>{{Foto|Foto}}</th><td>{{El far|El faro}}</td><td>{{La gavina|La gaviota}}</td></tr>\n  <tr><th>{{Vots|Votos}}</th><td>12</td><td>9</td></tr>\n</table>`, css: T_CSS },
          { html: `<table>\n  <tr><th>{{Foto|Foto}}</th><th>{{Vots|Votos}}</th><td>{{El far|El faro}}</td><td>12</td><td>{{La gavina|La gaviota}}</td><td>9</td></tr>\n</table>`, css: T_CSS }], a: 0,
        ex: "Cada <code>&lt;tr&gt;</code> és una fila, de dalt a baix: primer la de capçaleres i després una fila per a cada foto.|Cada <code>&lt;tr&gt;</code> es una fila, de arriba abajo: primero la de cabeceras y después una fila para cada foto." },
      { k: 'wspot', ph: 'investiga', q: "A la vista prèvia, «9:30» surt a la columna del lloc! <b>Toca la línia amb l'error.</b>|En la vista previa, ¡«9:30» sale en la columna del lugar! <b>Toca la línea con el error.</b>",
        html: `<table>\n${RH('{{Dia|Día}}', '{{Lloc|Lugar}}', '{{Hora|Hora}}')}\n${R(...SORT[0])}\n${R(SORT[1][0], SORT[1][2])}\n${R(...SORT[2])}\n</table>`, css: T_CSS, bad: 4,
        ex: "A la fila de la línia 4 falta la cel·la del lloc: només té dues <code>&lt;td&gt;</code>, i les cel·les s'omplen per ordre. Cada fila ha de tenir una cel·la per a cada columna.|En la fila de la línea 4 falta la celda del lugar: solo tiene dos <code>&lt;td&gt;</code>, y las celdas se llenan por orden. Cada fila tiene que tener una celda para cada columna." },
      { k: 'move', ph: 'pausa', secs: 25, t: "Taula humana! Imagina que ets una cel·la: aixeca el braç dret si ets de la fila de capçaleres, el braç esquerre si ets d'una fila de dades, i salta si ets el <code>caption</code>. Fes-ho 3 vegades canviant de paper.|¡Tabla humana! Imagina que eres una celda: levanta el brazo derecho si eres de la fila de cabeceras, el brazo izquierdo si eres de una fila de datos, y salta si eres el <code>caption</code>. Hazlo 3 veces cambiando de papel." },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi/sortides', q: "Falta una sortida a la taula! Afegeix una <b>fila nova</b> al final: <b>dimecres, a la platja, a les 18:00</b>.|¡Falta una salida en la tabla! Añade una <b>fila nueva</b> al final: <b>miércoles, en la playa, a las 18:00</b>.",
        html: SORT_T(2), css: T_CSS,
        checks: [tag('tr', { min: 4, txt: 'Hi ha 4 files <code>&lt;tr&gt;</code>|Hay 4 filas <code>&lt;tr&gt;</code>' }), inn('td', 'tr', { min: 9, txt: 'Hi ha 9 cel·les <code>&lt;td&gt;</code> dins de files|Hay 9 celdas <code>&lt;td&gt;</code> dentro de filas' }), CLEAN],
        snips: ['<tr><td>|</td><td></td><td></td></tr>', '<td>|</td>'],
        sol: { html: SORT_T(3) },
        hint: "Copia l'última fila <code>&lt;tr&gt;…&lt;/tr&gt;</code>, enganxa-la just abans de <code>&lt;/table&gt;</code> i canvia'n les tres dades.|Copia la última fila <code>&lt;tr&gt;…&lt;/tr&gt;</code>, pégala justo antes de <code>&lt;/table&gt;</code> y cambia sus tres datos." },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi/concurs', q: "Aquesta taula fa trampa: les capçaleres són <code>&lt;td&gt;</code> amb <code>&lt;b&gt;</code>, i un lector de pantalla no les reconeix. Canvia-les per <code>&lt;th&gt;</code> (sense <code>&lt;b&gt;</code>) i posa-hi un títol amb <code>&lt;caption&gt;</code>.|Esta tabla hace trampa: las cabeceras son <code>&lt;td&gt;</code> con <code>&lt;b&gt;</code>, y un lector de pantalla no las reconoce. Cámbialas por <code>&lt;th&gt;</code> (sin <code>&lt;b&gt;</code>) y ponle un título con <code>&lt;caption&gt;</code>.",
        html: VOTS_FAKE, css: T_CSS,
        checks: [tag('th', { min: 3, txt: 'Hi ha 3 capçaleres <code>&lt;th&gt;</code>|Hay 3 cabeceras <code>&lt;th&gt;</code>' }), notag('b', { txt: 'Ja no hi ha cap <code>&lt;b&gt;</code>|Ya no hay ningún <code>&lt;b&gt;</code>' }), tag('caption', { txt: 'La taula té <code>&lt;caption&gt;</code>|La tabla tiene <code>&lt;caption&gt;</code>' }), { k: 'order', a: 'caption', b: 'tr', txt: 'El <code>&lt;caption&gt;</code> va abans de les files|El <code>&lt;caption&gt;</code> va antes de las filas' }, CLEAN],
        snips: ['<th>|</th>', '<caption>|</caption>'],
        sol: { html: VOTS_OK },
        hint: "Canvia <code>&lt;td&gt;&lt;b&gt;Foto&lt;/b&gt;&lt;/td&gt;</code> per <code>&lt;th&gt;Foto&lt;/th&gt;</code>, i el mateix amb les altres dues. El <code>&lt;caption&gt;</code> va just després de <code>&lt;table&gt;</code>.|Cambia <code>&lt;td&gt;&lt;b&gt;Foto&lt;/b&gt;&lt;/td&gt;</code> por <code>&lt;th&gt;Foto&lt;/th&gt;</code>, y lo mismo con las otras dos. El <code>&lt;caption&gt;</code> va justo después de <code>&lt;table&gt;</code>." },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi/concurs', tab: 'css', q: "Ara, l'estil, tu sol/a: ajunta les vores de la taula (<code>border-collapse</code>), posa vora i <code>padding</code> a les cel·les (<code>th, td</code>) i un color de fons a les capçaleres amb <code>background-color</code>.|Ahora, el estilo, tú solo/a: junta los bordes de la tabla (<code>border-collapse</code>), pon borde y <code>padding</code> a las celdas (<code>th, td</code>) y un color de fondo a las cabeceras con <code>background-color</code>.",
        html: VOTS_OK, css: `body {\n  font-family: sans-serif;\n}`,
        checks: [css('table', 'border-collapse', '/^collapse$/', { txt: '<code>table</code> té <code>border-collapse: collapse</code>|<code>table</code> tiene <code>border-collapse: collapse</code>' }), sty('td', 'border', null, { txt: 'Les cel·les <code>td</code> tenen <code>border</code>|Las celdas <code>td</code> tienen <code>border</code>' }), sty('td', 'padding', null, { txt: 'Les cel·les <code>td</code> tenen <code>padding</code>|Las celdas <code>td</code> tienen <code>padding</code>' }), sty('th', 'background-color', null, { txt: 'Les capçaleres <code>th</code> tenen <code>background-color</code>|Las cabeceras <code>th</code> tienen <code>background-color</code>' }), CSSOK],
        snips: [cs('table {\n  |\n}'), cs('th, td {\n  |\n}'), cs('border: 1px solid |;'), cs('padding: 6px;'), cs('background-color: |;')],
        sol: { css: `body {\n  font-family: sans-serif;\n}\n${T_CSS}` },
        hint: "Tres regles: <code>table { … }</code> per a <code>border-collapse</code>, <code>th, td { … }</code> per a la vora i el farciment, i <code>th { … }</code> per al color de fons.|Tres reglas: <code>table { … }</code> para <code>border-collapse</code>, <code>th, td { … }</code> para el borde y el relleno, y <code>th { … }</code> para el color de fondo." },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi/concurs', q: "Caça els errors! Aquesta taula té <b>dues etiquetes mal tancades</b>. Llegeix el missatge d'avís, troba-les i arregla-les.|¡Caza los errores! Esta tabla tiene <b>dos etiquetas mal cerradas</b>. Lee el mensaje de aviso, encuéntralas y arréglalas.",
        html: `<table>\n  <caption>{{Punts del concurs de fotos|Puntos del concurso de fotos}}</caption>\n  <tr>\n    <th>{{Foto|Foto}}</th>\n    <th>{{Autor/a|Autor/a}}</th>\n    <th>{{Punts|Puntos}}</td>\n  </tr>\n  <tr>\n    <td>{{El far|El faro}}</td>\n    <td>Laia</td>\n    <td>8</td>\n  <tr>\n    <td>{{La gavina|La gaviota}}</td>\n    <td>Pau</td>\n    <td>9</td>\n  </tr>\n</table>`, css: T_CSS,
        checks: [CLEAN, tag('th', { min: 3 }), inn('td', 'tr', { min: 6 }), tag('tr', { min: 3 })],
        sol: { html: `<table>\n  <caption>{{Punts del concurs de fotos|Puntos del concurso de fotos}}</caption>\n  <tr>\n    <th>{{Foto|Foto}}</th>\n    <th>{{Autor/a|Autor/a}}</th>\n    <th>{{Punts|Puntos}}</th>\n  </tr>\n  <tr>\n    <td>{{El far|El faro}}</td>\n    <td>Laia</td>\n    <td>8</td>\n  </tr>\n  <tr>\n    <td>{{La gavina|La gaviota}}</td>\n    <td>Pau</td>\n    <td>9</td>\n  </tr>\n</table>` },
        hint: "Una cel·la <code>&lt;th&gt;</code> es tanca amb <code>&lt;/th&gt;</code>, no amb <code>&lt;/td&gt;</code>. I cada <code>&lt;tr&gt;</code> s'ha de tancar amb <code>&lt;/tr&gt;</code> abans d'obrir la fila següent.|Una celda <code>&lt;th&gt;</code> se cierra con <code>&lt;/th&gt;</code>, no con <code>&lt;/td&gt;</code>. Y cada <code>&lt;tr&gt;</code> se tiene que cerrar con <code>&lt;/tr&gt;</code> antes de abrir la fila siguiente." },
      { k: 'wcreate', ph: 'crea', url: 'clubfoto.numi/la-meva-taula', name: 'La meva taula|Mi tabla',
        q: "Fes una taula amb dades de veritat: el teu horari de la setmana, els resultats d'un concurs de la classe, les fotos que faries en una sortida… Ha de tenir títol (<code>caption</code>), capçaleres (<code>th</code>), <b>almenys 3 files de dades</b> i estil.|Haz una tabla con datos de verdad: tu horario de la semana, los resultados de un concurso de la clase, las fotos que harías en una salida… Tiene que tener título (<code>caption</code>), cabeceras (<code>th</code>), <b>al menos 3 filas de datos</b> y estilo.",
        crit: ['Un caption amb el títol de la taula|Un caption con el título de la tabla', 'Una fila de capçaleres th i almenys 3 files de dades|Una fila de cabeceras th y al menos 3 filas de datos', 'Estil: vores juntes i padding a les cel·les|Estilo: bordes juntos y padding en las celdas'],
        html: `<h2>{{La meva taula|Mi tabla}}</h2>\n<table>\n  <caption>{{Escriu aquí el títol|Escribe aquí el título}}</caption>\n  <tr><th></th><th></th><th></th></tr>\n</table>`, css: `body {\n  font-family: sans-serif;\n}`,
        checks: [ne({ k: 'text', min: 3, txt: 'El <code>&lt;caption&gt;</code> té un títol|El <code>&lt;caption&gt;</code> tiene un título' }, 'caption'), tag('th', { min: 3 }), tag('tr', { min: 4, txt: 'Almenys 4 files (capçaleres + 3 de dades)|Al menos 4 filas (cabeceras + 3 de datos)' }), inn('td', 'tr', { min: 9, txt: 'Almenys 9 cel·les de dades|Al menos 9 celdas de datos' }), prop('border-collapse', '/^collapse$/', { txt: 'Fas servir <code>border-collapse: collapse</code>|Usas <code>border-collapse: collapse</code>' }), sty('td', 'padding', null, { txt: 'Les cel·les tenen <code>padding</code>|Las celdas tienen <code>padding</code>' }), CLEAN],
        snips: ['<tr><td>|</td><td></td><td></td></tr>', '<th>|</th>', cs('table {\n  border-collapse: collapse;|\n}'), cs('th, td {\n  border: 1px solid #9AA6C8;\n  padding: 6px;|\n}')],
        sol: { html: `<h2>{{La meva setmana|Mi semana}}</h2>\n<table>\n  <caption>{{Les meves activitats|Mis actividades}}</caption>\n${RH('{{Dia|Día}}', '{{Activitat|Actividad}}', '{{Hora|Hora}}')}\n${R('{{Dilluns|Lunes}}', '{{Bàsquet|Baloncesto}}', '17:30')}\n${R('{{Dimecres|Miércoles}}', '{{Música|Música}}', '18:00')}\n${R('{{Dijous|Jueves}}', '{{Club Foto|Club Foto}}', '17:00')}\n</table>`,
          css: `body {\n  font-family: sans-serif;\n}\n${T_CSS}` } },
      { k: 'quiz', ph: 'tanca', q: 'Quina etiqueta fa una <b>fila</b> en una taula?|¿Qué etiqueta hace una <b>fila</b> en una tabla?',
        opts: ['<code>&lt;tr&gt;</code>|<code>&lt;tr&gt;</code>', '<code>&lt;td&gt;</code>|<code>&lt;td&gt;</code>', '<code>&lt;th&gt;</code>|<code>&lt;th&gt;</code>'], a: 0,
        ex: '<code>tr</code> és la fila (<i>row</i>); <code>td</code> i <code>th</code> són les cel·les de dins.|<code>tr</code> es la fila (<i>row</i>); <code>td</code> y <code>th</code> son las celdas de dentro.' },
      { k: 'quiz', ph: 'tanca', q: "Per què les capçaleres han de ser <code>&lt;th&gt;</code> i no <code>&lt;td&gt;</code> amb negreta?|¿Por qué las cabeceras tienen que ser <code>&lt;th&gt;</code> y no <code>&lt;td&gt;</code> con negrita?",
        opts: ['Perquè així un lector de pantalla sap què vol dir cada dada|Porque así un lector de pantalla sabe qué quiere decir cada dato', 'Perquè els th són més grans|Porque los th son más grandes', 'Perquè sense th la taula no té vores|Porque sin th la tabla no tiene bordes'], a: 0 },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 4 · Projecte: l'àlbum de fotos ---------- */
  { id: 'w6-4', t: "Projecte: l'àlbum de fotos|Proyecto: el álbum de fotos", min: 45, proj: true, badge: 'w_album',
    learn: ["Abans de programar una pàgina, un esbós en paper t'ajuda a decidir les caixes i com es col·loquen.|Antes de programar una página, un boceto en papel te ayuda a decidir las cajas y cómo se colocan.",
      'Cada eina per a la seva feina: flex per a files (capçalera, menú), grid per a la galeria i taula per a les dades.|Cada herramienta para su trabajo: flex para filas (cabecera, menú), grid para la galería y tabla para los datos.',
      "Has fet el teu àlbum de fotos amb una disposició de veritat i l'has revisat al mòbil i a l'ordinador.|Has hecho tu álbum de fotos con una disposición de verdad y lo has revisado en el móvil y en el ordenador."],
    steps: [
      { k: 'quiz', ph: 'recorda', q: 'Quina etiqueta posa el <b>títol</b> d\'una taula?|¿Qué etiqueta pone el <b>título</b> de una tabla?',
        opts: ['<code>&lt;caption&gt;</code>|<code>&lt;caption&gt;</code>', '<code>&lt;th&gt;</code>|<code>&lt;th&gt;</code>', '<code>&lt;title&gt;</code>|<code>&lt;title&gt;</code>'], a: 0,
        ex: "<code>caption</code> és el títol de la taula. <code>th</code> són les capçaleres de les columnes i <code>title</code>, el nom de la pestanya.|<code>caption</code> es el título de la tabla. <code>th</code> son las cabeceras de las columnas y <code>title</code>, el nombre de la pestaña." },
      { k: 'story', ph: 'missio', who: 'numi', scene: 'illa', title: "L'exposició del club|La exposición del club",
        t: "Gran dia! El Club Foto prepara l'<b>exposició de final de curs</b> i vol un <b>àlbum web</b> perquè les famílies puguin veure les fotos des de casa. Tu en seràs el dissenyador/a: hauràs de fer servir tot el que has après en aquesta unitat.|¡Gran día! El Club Foto prepara la <b>exposición de final de curso</b> y quiere un <b>álbum web</b> para que las familias puedan ver las fotos desde casa. Tú serás el diseñador/a: tendrás que usar todo lo que has aprendido en esta unidad." },
      { k: 'story', ph: 'missio', who: 'bit', mood: 'happy', t: "BIP! Això és el que demana el club:|¡BIP! Esto es lo que pide el club:",
        box: "<ol><li>Una <b>capçalera</b> amb el títol i un menú (flex).</li><li>Una <b>galeria</b> de 6 fotos o més, cada una amb el seu peu de foto (grid, <code>figure</code> i <code>figcaption</code>).</li><li>Una <b>taula</b> amb les dades de les fotos (<code>caption</code> i <code>th</code>).</li><li>Un <b>peu de pàgina</b> amb qui l'ha fet.</li></ol>|<ol><li>Una <b>cabecera</b> con el título y un menú (flex).</li><li>Una <b>galería</b> de 6 fotos o más, cada una con su pie de foto (grid, <code>figure</code> y <code>figcaption</code>).</li><li>Una <b>tabla</b> con los datos de las fotos (<code>caption</code> y <code>th</code>).</li><li>Un <b>pie de página</b> con quién la ha hecho.</li></ol>" },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Planificar|Planificar', t: "Primer, l'esbós|Primero, el boceto", pic: 'img/ment/lli.webp',
          x: "Els dissenyadors web fan un <span class='hl'>esbós</span> (en anglès, <i>wireframe</i>): un dibuix amb caixes i fletxes, sense colors ni detalls. Així decideixen on va cada cosa abans d'escriure codi, i és molt més fàcil canviar un dibuix que cent línies de CSS.|Los diseñadores web hacen un <span class='hl'>boceto</span> (en inglés, <i>wireframe</i>): un dibujo con cajas y flechas, sin colores ni detalles. Así deciden dónde va cada cosa antes de escribir código, y es mucho más fácil cambiar un dibujo que cien líneas de CSS." },
        { k: 'Cada eina…|Cada herramienta…', t: 'Flex, grid o taula?|¿Flex, grid o tabla?',
          media: { k: 'web', html: `<header>\n  <b>Club Foto</b>\n  <nav><a href="#">{{Fotos|Fotos}}</a> <a href="#">{{Dades|Datos}}</a></nav>\n</header>\n<div class="galeria">\n${img('platja')}\n${img('bosc')}\n${img('pont')}\n</div>\n<table>\n${RH('{{Foto|Foto}}', '{{Lloc|Lugar}}')}\n${R('1', '{{La platja|La playa}}')}\n</table>`,
            css: `header {\n  display: flex;\n  justify-content: space-between;\n}\n.galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\nimg {\n  width: 100%;\n}\nth, td {\n  border: 1px solid #9AA6C8;\n}` },
          x: "Una sola pàgina, tres eines: <b>flex</b> per a la capçalera (una fila), <b>grid</b> per a la galeria (files i columnes) i <b>taula</b> per a les dades (informació que es llegeix per files i per columnes).|Una sola página, tres herramientas: <b>flex</b> para la cabecera (una fila), <b>grid</b> para la galería (filas y columnas) y <b>tabla</b> para los datos (información que se lee por filas y por columnas)." },
        { k: 'Peus de foto|Pies de foto', t: 'figure dins de la graella|figure dentro de la rejilla',
          media: { k: 'web', html: `<div class="galeria">\n${fig('platja', "La platja, a l'estiu|La playa, en verano")}\n${fig('castell', 'Visita al castell|Visita al castillo')}\n</div>`,
            css: `.galeria {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\nfigure {\n  margin: 0;\n  background: #FFF3D6;\n  padding: 6px;\n  border-radius: 8px;\n}\nimg {\n  width: 100%;\n}` },
          x: "Recordes <code>&lt;figure&gt;</code> i <code>&lt;figcaption&gt;</code>? Són perfectes per a l'àlbum: cada <code>figure</code> és una cel·la de la graella, amb la foto i el seu peu. Compte: <code>figure</code> porta marge per defecte; amb <code>margin: 0</code> queda ben encaixada.|¿Recuerdas <code>&lt;figure&gt;</code> y <code>&lt;figcaption&gt;</code>? Son perfectas para el álbum: cada <code>figure</code> es una celda de la rejilla, con la foto y su pie. Cuidado: <code>figure</code> lleva margen por defecto; con <code>margin: 0</code> queda bien encajada." },
        { k: 'Revisar|Revisar', t: 'Mira-ho amb ulls de visitant|Míralo con ojos de visitante', pic: 'img/ment/vel.webp',
          x: "Abans de donar l'àlbum per acabat, revisa'l: totes les fotos tenen <code>alt</code>? Els títols van en ordre (<code>h1</code>, <code>h2</code>)? El text es llegeix bé sobre el fons? I prova'l amb el botó del mòbil 📱 i el de l'ordinador 💻.|Antes de dar el álbum por terminado, revísalo: ¿todas las fotos tienen <code>alt</code>? ¿Los títulos van en orden (<code>h1</code>, <code>h2</code>)? ¿El texto se lee bien sobre el fondo? Y pruébalo con el botón del móvil 📱 y el del ordenador 💻.",
          tip: "Amb <code>fr</code> i <code>gap</code>, la graella ja s'adapta sola a pantalles petites. A la unitat següent aprendràs a canviar la disposició per al mòbil.|Con <code>fr</code> y <code>gap</code>, la rejilla ya se adapta sola a pantallas pequeñas. En la unidad siguiente aprenderás a cambiar la disposición para el móvil." }
      ] },
      { k: 'seq', ph: 'mans', q: "<b>Ordena el pla de treball</b> de l'àlbum.|<b>Ordena el plan de trabajo</b> del álbum.",
        items: ["Fer l'esbós en paper: on va cada caixa|Hacer el boceto en papel: dónde va cada caja", "Escriure l'HTML: capçalera, galeria, taula i peu|Escribir el HTML: cabecera, galería, tabla y pie", 'Escriure el CSS de la disposició: flex i grid|Escribir el CSS de la disposición: flex y grid', 'Afegir colors, vores i espais|Añadir colores, bordes y espacios', "Revisar-ho al mòbil i a l'ordinador|Revisarlo en el móvil y en el ordenador"],
        ex: 'De les grans decisions als detalls: primer on va cada cosa, després com es veu i, al final, comprovar-ho.|De las grandes decisiones a los detalles: primero dónde va cada cosa, después cómo se ve y, al final, comprobarlo.' },
      { k: 'quiz', ph: 'investiga', q: "Per a cada part de l'àlbum, quina eina és la bona?|Para cada parte del álbum, ¿qué herramienta es la buena?",
        opts: ['Capçalera: flex · Galeria: grid · Dades: taula|Cabecera: flex · Galería: grid · Datos: tabla', 'Capçalera: taula · Galeria: taula · Dades: taula|Cabecera: tabla · Galería: tabla · Datos: tabla', 'Capçalera: grid · Galeria: flex en columna · Dades: paràgrafs|Cabecera: grid · Galería: flex en columna · Datos: párrafos'], a: 0,
        ex: "Una fila → flex. Files i columnes de fotos → grid. Dades que es llegeixen per files i columnes → taula.|Una fila → flex. Filas y columnas de fotos → grid. Datos que se leen por filas y columnas → tabla." },
      { k: 'wquiz', ph: 'prova', q: "Prediu: quina vista prèvia fa aquest esquelet d'àlbum?|Predice: ¿qué vista previa hace este esqueleto de álbum?",
        code: { html: `<header>\n  <b>{{Àlbum|Álbum}}</b>\n  <b>{{Menú|Menú}}</b>\n</header>\n<div class="galeria">\n${NUM(4)}\n</div>`, css: `header {\n  display: flex;\n  justify-content: space-between;\n}\n.galeria {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6px;\n}\n${NUMC}` },
        opts: [{ html: `<header>\n  <b>{{Àlbum|Álbum}}</b>\n  <b>{{Menú|Menú}}</b>\n</header>\n<div class="galeria">\n${NUM(4)}\n</div>`, css: `header { display: flex; justify-content: space-between; }\n.galeria { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }\n${NUMC}` },
          { html: `<header>\n  <b>{{Àlbum|Álbum}}</b>\n  <b>{{Menú|Menú}}</b>\n</header>\n<div class="galeria">\n${NUM(4)}\n</div>`, css: `header { display: flex; flex-direction: column; }\n.galeria { display: flex; gap: 6px; }\n${NUMC}` },
          { html: `<header>\n  <b>{{Àlbum|Álbum}}</b>\n  <b>{{Menú|Menú}}</b>\n</header>\n<div class="galeria">\n${NUM(4)}\n</div>`, css: `header { display: flex; justify-content: center; gap: 6px; }\n.galeria { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 6px; }\n${NUMC}` }], a: 0,
        ex: "La capçalera reparteix les dues paraules als extrems (<code>space-between</code>) i la galeria fa 2 columnes iguals: 4 caixes, 2 files.|La cabecera reparte las dos palabras a los extremos (<code>space-between</code>) y la galería hace 2 columnas iguales: 4 cajas, 2 filas." },
      { k: 'move', ph: 'pausa', secs: 30, t: "Estira't com una foto panoràmica: braços ben oberts (fila!). Ara com una foto vertical: braços amunt (columna!). Ara fes un marc amb els dits i «fotografia» tres coses de l'aula.|Estírate como una foto panorámica: brazos bien abiertos (¡fila!). Ahora como una foto vertical: brazos arriba (¡columna!). Ahora haz un marco con los dedos y «fotografía» tres cosas del aula." },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi/album', tab: 'css', q: "Peça 1: la <b>capçalera</b>. Fes que <code>header</code> posi el títol i el menú als extrems i centrats de dalt a baix, i que el <code>nav</code> posi els enllaços en fila amb un <code>gap</code>.|Pieza 1: la <b>cabecera</b>. Haz que <code>header</code> ponga el título y el menú en los extremos y centrados de arriba abajo, y que el <code>nav</code> ponga los enlaces en fila con un <code>gap</code>.",
        html: ALB_HEAD, css: ALB_HEAD_CSS,
        checks: [css('header', 'display', FLEX), css('header', 'justify-content', '/^space-between$/', { txt: '<code>header</code> té <code>justify-content: space-between</code>|<code>header</code> tiene <code>justify-content: space-between</code>' }), css('header', 'align-items', '/^center$/', { txt: '<code>header</code> té <code>align-items: center</code>|<code>header</code> tiene <code>align-items: center</code>' }), css('nav', 'display', FLEX), css('nav', 'gap'), CSSOK],
        snips: [cs('nav {\n  |\n}'), cs('display: flex;'), cs('justify-content: space-between;'), cs('align-items: center;'), cs('gap: 12px;')],
        sol: { css: `header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #14204A;\n  padding: 10px 14px;\n}\nh1 {\n  color: white;\n  font-size: 20px;\n  margin: 0;\n}\nnav {\n  display: flex;\n  gap: 12px;\n}\nnav a {\n  color: #FFC531;\n  font-weight: bold;\n}` },
        hint: "Són dos contenidors: <code>header</code> (conté el títol i el menú) i <code>nav</code> (conté els enllaços). Cada un necessita el seu <code>display: flex</code>.|Son dos contenedores: <code>header</code> (contiene el título y el menú) y <code>nav</code> (contiene los enlaces). Cada uno necesita su <code>display: flex</code>." },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi/album', q: "Peça 2: la <b>galeria</b>. Afegeix <b>2 fotos més</b> amb el seu peu de foto (<code>figure</code> amb <code>img</code> i <code>figcaption</code>) i fes una graella de <b>2 columnes</b> amb <code>fr</code> i <code>gap</code>.|Pieza 2: la <b>galería</b>. Añade <b>2 fotos más</b> con su pie de foto (<code>figure</code> con <code>img</code> y <code>figcaption</code>) y haz una rejilla de <b>2 columnas</b> con <code>fr</code> y <code>gap</code>.",
        html: ALB_GAL(2), css: FIG_CSS,
        checks: [tag('figure', { min: 4, txt: 'Hi ha 4 <code>&lt;figure&gt;</code>|Hay 4 <code>&lt;figure&gt;</code>' }), inn('figcaption', 'figure', { min: 4, txt: 'Cada figura té el seu <code>&lt;figcaption&gt;</code>|Cada figura tiene su <code>&lt;figcaption&gt;</code>' }), alt(4, { txt: 'Les 4 fotos tenen <code>alt</code>|Las 4 fotos tienen <code>alt</code>' }), css('.galeria', 'display', GRID), css('.galeria', 'grid-template-columns', '/fr/', { txt: '<code>.galeria</code> té columnes amb <code>fr</code>|<code>.galeria</code> tiene columnas con <code>fr</code>' }), css('.galeria', 'gap'), CLEAN],
        snips: [`<figure>\n    <img src="img/tech/web/|.svg" alt="">\n    <figcaption></figcaption>\n  </figure>`, cs('.galeria {\n  |\n}'), cs('display: grid;'), cs('grid-template-columns: 1fr 1fr;'), cs('gap: 8px;')],
        sol: { html: ALB_GAL(4), css: FIG_CSS + `\n.galeria {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}` },
        hint: "Copia una <code>&lt;figure&gt;…&lt;/figure&gt;</code> sencera i enganxa-la abans del <code>&lt;/div&gt;</code>. Després fes la regla <code>.galeria { … }</code> amb <code>display</code>, <code>grid-template-columns</code> i <code>gap</code>.|Copia una <code>&lt;figure&gt;…&lt;/figure&gt;</code> entera y pégala antes del <code>&lt;/div&gt;</code>. Después haz la regla <code>.galeria { … }</code> con <code>display</code>, <code>grid-template-columns</code> y <code>gap</code>." },
      { k: 'web', ph: 'repte', url: 'clubfoto.numi/album', q: "Peça 3: una companya del club ha fet aquest tros de l'àlbum, però no queda bé. Hi ha <b>tres errors</b>: un a l'HTML i dos al CSS. Troba'ls i arregla'ls (mira els dos fitxers!).|Pieza 3: una compañera del club ha hecho este trozo del álbum, pero no queda bien. Hay <b>tres errores</b>: uno en el HTML y dos en el CSS. Encuéntralos y arréglalos (¡mira los dos archivos!).",
        html: BUG_HTML, css: BUG_CSS,
        checks: [CLEAN, tag('figure', { min: 2 }), css('header', 'justify-content', '/^space-between$/', { txt: '<code>justify-content</code> de <code>header</code> ben escrit|<code>justify-content</code> de <code>header</code> bien escrito' }), css('nav', 'display', FLEX, { txt: 'El <code>display: flex</code> és al contenidor <code>nav</code>|El <code>display: flex</code> está en el contenedor <code>nav</code>' })],
        sol: { html: BUG_HTML.replace(`    <figcaption>{{El castell|El castillo}}</figcaption>\n`, `    <figcaption>{{El castell|El castillo}}</figcaption>\n  </figure>\n`), css: BUG_CSS.replace('space between', 'space-between').replace('nav a {\n  display: flex;\n', 'nav {\n  display: flex;\n  gap: 10px;\n}\nnav a {\n') },
        hint: "A l'HTML, compta les <code>&lt;figure&gt;</code> que s'obren i les que es tanquen. Al CSS, mira bé el guionet de <code>space-between</code> i a qui està posat el <code>display: flex</code> del menú: al pare o als fills?|En el HTML, cuenta las <code>&lt;figure&gt;</code> que se abren y las que se cierran. En el CSS, mira bien el guion de <code>space-between</code> y a quién está puesto el <code>display: flex</code> del menú: ¿al padre o a los hijos?" },
      { k: 'wcreate', ph: 'crea', url: 'clubfoto.numi/el-meu-album', name: "El meu àlbum de fotos|Mi álbum de fotos",
        q: "<b>Projecte final de la unitat!</b> Construeix el teu àlbum seguint el teu esbós: capçalera amb menú (flex), galeria d'almenys <b>6 fotos amb peu</b> (grid), una <b>taula</b> amb les dades de les fotos i un peu de pàgina. Fes-lo teu: colors, fotos i textos.|<b>¡Proyecto final de la unidad!</b> Construye tu álbum siguiendo tu boceto: cabecera con menú (flex), galería de al menos <b>6 fotos con pie</b> (grid), una <b>tabla</b> con los datos de las fotos y un pie de página. Hazlo tuyo: colores, fotos y textos.",
        crit: ['Capçalera i menú amb flex|Cabecera y menú con flex', 'Galeria amb grid: almenys 6 fotos amb alt i peu de foto|Galería con grid: al menos 6 fotos con alt y pie de foto', 'Una taula de dades amb caption i th|Una tabla de datos con caption y th', 'Peu de pàgina, i revisat al mòbil i a l\'ordinador|Pie de página, y revisado en el móvil y en el ordenador'],
        html: `<header>\n  <h1>{{El meu àlbum|Mi álbum}}</h1>\n  <nav>\n    <a href="#galeria">{{Galeria|Galería}}</a>\n  </nav>\n</header>\n<main>\n  <h2 id="galeria">{{Galeria|Galería}}</h2>\n  <div class="galeria">\n${fig('espai', "Un viatge a l'espai|Un viaje al espacio", '    ')}\n  </div>\n  <h2 id="dades">{{Les dades de les fotos|Los datos de las fotos}}</h2>\n  <table>\n    <caption>{{Fitxa de cada foto|Ficha de cada foto}}</caption>\n  </table>\n</main>\n<footer>\n  <p>{{Fet per…|Hecho por…}}</p>\n</footer>`,
        css: ALBUM_CSS,
        checks: [sty('header', 'display', FLEX, { txt: 'La capçalera <code>header</code> és flex|La cabecera <code>header</code> es flex' }), sty('nav', 'display', FLEX, { txt: 'El menú <code>nav</code> és flex|El menú <code>nav</code> es flex' }), prop('display', GRID, { txt: 'La galeria és una graella (<code>display: grid</code>)|La galería es una rejilla (<code>display: grid</code>)' }), prop('grid-template-columns', null, { txt: 'La graella té <code>grid-template-columns</code>|La rejilla tiene <code>grid-template-columns</code>' }),
          tag('figure', { min: 6, txt: 'Almenys 6 <code>&lt;figure&gt;</code>|Al menos 6 <code>&lt;figure&gt;</code>' }), inn('figcaption', 'figure', { min: 6, txt: 'Cada foto té el seu <code>&lt;figcaption&gt;</code>|Cada foto tiene su <code>&lt;figcaption&gt;</code>' }), alt(6, { txt: 'Totes les fotos tenen <code>alt</code>|Todas las fotos tienen <code>alt</code>' }),
          tag('th', { min: 2, txt: 'La taula té capçaleres <code>&lt;th&gt;</code>|La tabla tiene cabeceras <code>&lt;th&gt;</code>' }), inn('td', 'tr', { min: 4, txt: 'La taula té dades: almenys 4 <code>&lt;td&gt;</code>|La tabla tiene datos: al menos 4 <code>&lt;td&gt;</code>' }), tag('footer'), CLEAN],
        snips: [`<figure>\n      <img src="img/tech/web/|.svg" alt="">\n      <figcaption></figcaption>\n    </figure>`, '<tr><td>|</td><td></td></tr>', '<th>|</th>', '<a href="#">|</a>', cs('display: flex;'), cs('display: grid;'), cs('grid-template-columns: |;'), cs('gap: 10px;')],
        sol: { html: `<header>\n  <h1>{{El meu àlbum|Mi álbum}}</h1>\n  <nav>\n    <a href="#galeria">{{Galeria|Galería}}</a>\n    <a href="#dades">{{Dades|Datos}}</a>\n  </nav>\n</header>\n<main>\n  <h2 id="galeria">{{Galeria|Galería}}</h2>\n  <div class="galeria">\n${FIGS.map(([f, c]) => fig(f, c, '    ')).join('\n')}\n  </div>\n  <h2 id="dades">{{Les dades de les fotos|Los datos de las fotos}}</h2>\n  <table>\n    <caption>{{Fitxa de cada foto|Ficha de cada foto}}</caption>\n  ${RH('{{Foto|Foto}}', '{{Lloc|Lugar}}', '{{Mes|Mes}}')}\n  ${R('{{La platja|La playa}}', '{{El moll|El muelle}}', '{{Juliol|Julio}}')}\n  ${R('{{La muntanya|La montaña}}', '{{El cim|La cima}}', '{{Octubre|Octubre}}')}\n  ${R('{{El pont|El puente}}', '{{El riu|El río}}', '{{Març|Marzo}}')}\n  </table>\n</main>\n<footer>\n  <p>{{Fet per l'equip del Club Foto|Hecho por el equipo del Club Foto}}</p>\n</footer>`,
          css: ALBUM_CSS + `\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #14204A;\n  color: white;\n  padding: 10px;\n}\nnav {\n  display: flex;\n  gap: 12px;\n}\nnav a {\n  color: #FFC531;\n}\n.galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\nfigcaption {\n  text-align: center;\n  font-size: 14px;\n}\ntable {\n  border-collapse: collapse;\n}\nth, td {\n  border: 1px solid #9AA6C8;\n  padding: 6px;\n}\nth {\n  background-color: #FFC531;\n}\nfooter {\n  text-align: center;\n  color: #555;\n}` } },
      { k: 'story', ph: 'crea', who: 'numi', t: "Abans de dir que està acabat, fes la <b>revisió</b> del teu àlbum, com un dissenyador/a de veritat:|Antes de decir que está terminado, haz la <b>revisión</b> de tu álbum, como un diseñador/a de verdad:",
        box: "<ol><li>Totes les fotos tenen un <code>alt</code> que les descriu?</li><li>Els títols van en ordre: un <code>h1</code> i després <code>h2</code>?</li><li>El text es llegeix bé sobre el color de fons?</li><li>Prova el botó 📱 i el 💻: es veu bé en totes dues pantalles?</li></ol>|<ol><li>¿Todas las fotos tienen un <code>alt</code> que las describe?</li><li>¿Los títulos van en orden: un <code>h1</code> y después <code>h2</code>?</li><li>¿El texto se lee bien sobre el color de fondo?</li><li>Prueba el botón 📱 y el 💻: ¿se ve bien en las dos pantallas?</li></ol>" },
      { k: 'quiz', ph: 'tanca', q: "Què és un <b>esbós</b> (<i>wireframe</i>) d'una web?|¿Qué es un <b>boceto</b> (<i>wireframe</i>) de una web?",
        opts: ['Un dibuix amb caixes que diu on va cada cosa, abans de programar|Un dibujo con cajas que dice dónde va cada cosa, antes de programar', 'La web acabada amb tots els colors|La web terminada con todos los colores', 'Un error del CSS|Un error del CSS'], a: 0 },
      { k: 'quiz', ph: 'tanca', q: "Vols ensenyar el <b>rànquing</b> del concurs de fotos (posició, foto i punts). Què fas servir?|Quieres enseñar el <b>ranking</b> del concurso de fotos (posición, foto y puntos). ¿Qué usas?",
        opts: ['Una taula amb th i td|Una tabla con th y td', 'Una graella grid de fotos|Una rejilla grid de fotos', 'Un menú flex|Un menú flex'], a: 0,
        ex: 'Són dades que es llegeixen per files i per columnes: és feina d\'una taula.|Son datos que se leen por filas y por columnas: es trabajo de una tabla.' },
      { k: 'feel', ph: 'tanca' }
    ] }
  ] });
})();

/* ── unitat 7 ── */
/* Tech Web · unitat 7 «Per al mòbil»
   Disseny adaptable: l'etiqueta viewport, les regles @media, amplades i imatges flexibles; botons amb :hover, :focus i
   transicions, i botons pensats per al dit; detectar webs falses (el domini de l'adreça, què vol dir el candau, les
   presses i els errors) amb calma i demanant ajuda a un adult; i el projecte: la guia de Lleida per al mòbil (només
   fets generals i coneguts de la ciutat, cap negoci real). Les webs, marques i adreces dels exemples són inventades
   (FotoNuvi, fotonuvi.numi, regals.xyz…). Material propi de Numi. */
Object.assign(TBADGE, {
  w_mobil: { id: 'w_mobil', ico: '📏', n: 'Web elàstica|Web elástica', d: "Has fet pàgines que s'adapten al mòbil amb viewport, @media i amplades flexibles.|Has hecho páginas que se adaptan al móvil con viewport, @media y anchos flexibles." },
  w_boto: { id: 'w_boto', ico: '✨', n: 'Mestre/a dels botons|Maestro/a de los botones', d: "Has creat botons que reaccionen amb :hover i canvien amb suavitat, i que van bé amb el dit.|Has creado botones que reaccionan con :hover y cambian con suavidad, y que van bien con el dedo." },
  w_detectiu: { id: 'w_detectiu', ico: '🕵️', n: 'Detectiu/iva de webs|Detective de webs', d: "Saps llegir una adreça, què vol dir el candau i quins senyals té una web falsa.|Sabes leer una dirección, qué significa el candado y qué señales tiene una web falsa." },
  w_guia: { id: 'w_guia', ico: '🗺️', n: 'Guia de Lleida|Guía de Lleida', d: "Projecte acabat: una guia de Lleida per al mòbil, amb menú de botons, targetes i @media.|Proyecto terminado: una guía de Lleida para el móvil, con menú de botones, tarjetas y @media." }
});
COURSE_UNITS[7] = (() => {
  /* ---------- codi en dues llengües ----------
     El codi dels reptes i de les demos es veu en la llengua de l'alumne/a. P('codi ca', 'código es') és una peça; J(…)
     enganxa peces i textos comuns; si el català i el castellà són diferents, en fa C(ca, es), que bi() converteix en una
     propietat que dona el codi de la llengua actual. Els noms de classes i ids (.targeta, .boto, #llocs…) són iguals
     a totes dues llengües, perquè les comprovacions els busquen. */
  const C = (ca, es) => ({ __bi: [ca, es] });
  const P = (ca, es) => ({ ca, es: es == null ? ca : es });
  const J = (...ps) => { const ca = ps.map(p => typeof p === 'string' ? p : p.ca).join(''), es = ps.map(p => typeof p === 'string' ? p : p.es).join(''); return ca === es ? ca : C(ca, es); };
  const bi = o => { if (Array.isArray(o)) { o.forEach((v, i) => { if (v && v.__bi) { const [ca, es] = v.__bi; Object.defineProperty(o, i, { get: () => (typeof L === 'function' ? L(ca, es) : ca), enumerable: true, configurable: true }); } else bi(v); }); return o; }
    if (o && typeof o === 'object') for (const k of Object.keys(o)) { const v = o[k];
      if (v && v.__bi) { const [ca, es] = v.__bi; Object.defineProperty(o, k, { get: () => (typeof L === 'function' ? L(ca, es) : ca), enumerable: true, configurable: true }); }
      // a les comprovacions, «t» és el nom d'una etiqueta (h1, img…), no un text per traduir: el validador no l'ha de llegir com a text
      else if (k === 'checks' && Array.isArray(v)) v.forEach(c => { if (c && c.t != null) Object.defineProperty(c, 't', { value: c.t, enumerable: false, writable: true, configurable: true }); });
      else bi(v); }
    return o; };
  /* ---------- codi que es fa servir en diversos passos ---------- */
  const CARDS = P('<h1>Llocs de Lleida</h1>\n<div class="targetes">\n  <div class="targeta">\n    <img src="img/tech/web/seu-vella.svg" alt="La Seu Vella dalt del turó">\n    <h2>La Seu Vella</h2>\n  </div>\n  <div class="targeta">\n    <img src="img/tech/web/pont.svg" alt="Un pont sobre el riu">\n    <h2>El riu Segre</h2>\n  </div>\n  <div class="targeta">\n    <img src="img/tech/web/castell.svg" alt="Un castell de pedra">\n    <h2>Gardeny</h2>\n  </div>\n</div>',
    '<h1>Lugares de Lleida</h1>\n<div class="targetes">\n  <div class="targeta">\n    <img src="img/tech/web/seu-vella.svg" alt="La Seu Vella en lo alto del cerro">\n    <h2>La Seu Vella</h2>\n  </div>\n  <div class="targeta">\n    <img src="img/tech/web/pont.svg" alt="Un puente sobre el río">\n    <h2>El río Segre</h2>\n  </div>\n  <div class="targeta">\n    <img src="img/tech/web/castell.svg" alt="Un castillo de piedra">\n    <h2>Gardeny</h2>\n  </div>\n</div>');
  const CARDS_CSS = '.targetes {\n  display: flex;\n  gap: 12px;\n}\n.targeta {\n  background: #FFF4D6;\n  padding: 10px;\n  border-radius: 12px;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}';
  const BTN = '.boto {\n  display: inline-block;\n  background: #2F6BFF;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n  cursor: pointer;\n}';
  const FESTA = P('<h1>Festes de Lleida</h1>\n<p>Al maig, la ciutat celebra la Festa Major.</p>\n<a class="boto" href="#maig">Descobreix-la</a>',
    '<h1>Fiestas de Lleida</h1>\n<p>En mayo, la ciudad celebra la Fiesta Mayor.</p>\n<a class="boto" href="#maig">Descúbrela</a>');
  const MENU = P('<nav class="menu">\n  <a class="boto" href="#llocs">Llocs per visitar</a>\n  <a class="boto" href="#festes">Festes</a>\n  <a class="boto" href="#menjar">Què menjar</a>\n</nav>',
    '<nav class="menu">\n  <a class="boto" href="#llocs">Lugares para visitar</a>\n  <a class="boto" href="#festes">Fiestas</a>\n  <a class="boto" href="#menjar">Qué comer</a>\n</nav>');
  const MENU_CSS = '.boto {\n  display: inline-block;\n  background: #1FA463;\n  color: white;\n  padding: 6px 10px;\n  margin: 2px;\n  font-size: 13px;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: background 0.3s;\n}\n.boto:hover, .boto:focus {\n  background: #147A47;\n}';
  const AVIS = P('<div class="avis">\n  <h2>Abans de fer clic, mira…</h2>\n  <ul>\n    <li>L\'adreça: quin és el domini de veritat?</li>\n    <li>El candau: hi és? (i recorda que no ho és tot)</li>\n    <li>Les presses: et fan decidir de pressa?</li>\n    <li>Els errors: hi ha faltes o coses estranyes?</li>\n  </ul>\n</div>',
    '<div class="avis">\n  <h2>Antes de hacer clic, mira…</h2>\n  <ul>\n    <li>La dirección: ¿cuál es el dominio de verdad?</li>\n    <li>El candado: ¿está? (y recuerda que no lo es todo)</li>\n    <li>Las prisas: ¿te hacen decidir deprisa?</li>\n    <li>Los errores: ¿hay faltas o cosas extrañas?</li>\n  </ul>\n</div>');
  const AVIS_BTN = P(AVIS.ca.replace('\n</div>', '\n  <a class="boto" href="#inici">Ho he entès</a>\n</div>'), AVIS.es.replace('\n</div>', '\n  <a class="boto" href="#inici">Lo he entendido</a>\n</div>'));
  const AVIS_CSS = '.avis {\n  background: #FFF8E1;\n  border: 3px solid #FFC531;\n  border-radius: 14px;\n  padding: 6px 14px;\n}';
  // guia de Lleida (w7-4): cada pas parteix del codi de l'anterior
  const G_HEAD = P('<header>\n  <h1>Guia de Lleida</h1>\n  <nav>\n    <a class="boto" href="#llocs">Llocs</a>\n    <a class="boto" href="#festes">Festes</a>\n    <a class="boto" href="#menjar">Menjar</a>\n  </nav>\n</header>',
    '<header>\n  <h1>Guía de Lleida</h1>\n  <nav>\n    <a class="boto" href="#llocs">Lugares</a>\n    <a class="boto" href="#festes">Fiestas</a>\n    <a class="boto" href="#menjar">Comida</a>\n  </nav>\n</header>');
  const G_CSS1 = 'header {\n  background: #2F6BFF;\n  color: white;\n  padding: 14px;\n  border-radius: 12px;\n}\n.boto {\n  display: inline-block;\n  background: white;\n  color: #1A3FB0;\n  padding: 8px 14px;\n  border-radius: 8px;\n  text-decoration: none;\n  margin: 4px 2px;\n}';
  const G_LLOCS = P('<section id="llocs">\n  <h2>Llocs per visitar</h2>\n  <div class="targetes">\n    <div class="targeta">\n      <img src="img/tech/web/seu-vella.svg" alt="La Seu Vella dalt del turó">\n      <h3>La Seu Vella</h3>\n      <p>La catedral antiga, dalt del turó.</p>\n    </div>\n    <div class="targeta">\n      <img src="img/tech/web/pont.svg" alt="Un pont sobre el riu Segre">\n      <h3>El riu Segre</h3>\n      <p>El riu que travessa la ciutat.</p>\n    </div>\n    <div class="targeta">\n      <img src="img/tech/web/castell.svg" alt="Un castell de pedra">\n      <h3>Gardeny</h3>\n      <p>Un turó amb un castell dels templers.</p>\n    </div>\n  </div>\n</section>',
    '<section id="llocs">\n  <h2>Lugares para visitar</h2>\n  <div class="targetes">\n    <div class="targeta">\n      <img src="img/tech/web/seu-vella.svg" alt="La Seu Vella en lo alto del cerro">\n      <h3>La Seu Vella</h3>\n      <p>La catedral antigua, en lo alto del cerro.</p>\n    </div>\n    <div class="targeta">\n      <img src="img/tech/web/pont.svg" alt="Un puente sobre el río Segre">\n      <h3>El río Segre</h3>\n      <p>El río que atraviesa la ciudad.</p>\n    </div>\n    <div class="targeta">\n      <img src="img/tech/web/castell.svg" alt="Un castillo de piedra">\n      <h3>Gardeny</h3>\n      <p>Un cerro con un castillo de los templarios.</p>\n    </div>\n  </div>\n</section>');
  const G_CSS2 = G_CSS1 + '\n.targeta {\n  background: #FFF4D6;\n  padding: 10px;\n  border-radius: 12px;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}';
  const G_CSS3 = G_CSS2 + '\n.targetes {\n  display: flex;\n  gap: 12px;\n}\n.boto {\n  transition: background 0.3s;\n}\n.boto:hover, .boto:focus {\n  background: #FFC531;\n}';
  const G_CSS4 = G_CSS3 + '\n@media (max-width: 600px) {\n  h1 {\n    font-size: 26px;\n  }\n  .targetes {\n    flex-direction: column;\n  }\n  .boto {\n    display: block;\n    text-align: center;\n  }\n}';
  const G_FESTES = P('<section id="festes">\n  <h2>Festes</h2>\n  <div class="targetes">\n    <div class="targeta">\n      <img src="img/tech/web/drac.svg" alt="Un drac verd">\n      <h3>La Festa Major</h3>\n      <p>Al maig. Hi surt Lo Marraco, el drac de la ciutat.</p>\n    </div>\n    <div class="targeta">\n      <h3>L\'Aplec del Caragol</h3>\n      <p>Una gran festa de primavera.</p>\n    </div>\n  </div>\n</section>\n<section id="menjar">\n  <h2>Què menjar</h2>\n  <div class="targetes">\n    <div class="targeta">\n      <img src="img/tech/web/fruita.svg" alt="Una fruitera plena de fruita">\n      <h3>Fruita dolça</h3>\n      <p>A l\'horta de Lleida es cullen préssecs, peres i pomes.</p>\n    </div>\n    <div class="targeta">\n      <h3>Caragols a la llauna</h3>\n      <p>Un plat molt típic de Lleida.</p>\n    </div>\n  </div>\n</section>\n<footer>\n  <p>Fonts: explicacions a classe i llibres de la biblioteca. Imatges: dibuixos de Numi.</p>\n</footer>',
    '<section id="festes">\n  <h2>Fiestas</h2>\n  <div class="targetes">\n    <div class="targeta">\n      <img src="img/tech/web/drac.svg" alt="Un dragón verde">\n      <h3>La Fiesta Mayor</h3>\n      <p>En mayo. Sale Lo Marraco, el dragón de la ciudad.</p>\n    </div>\n    <div class="targeta">\n      <h3>El Aplec del Caragol</h3>\n      <p>Una gran fiesta de primavera.</p>\n    </div>\n  </div>\n</section>\n<section id="menjar">\n  <h2>Qué comer</h2>\n  <div class="targetes">\n    <div class="targeta">\n      <img src="img/tech/web/fruita.svg" alt="Un frutero lleno de fruta">\n      <h3>Fruta dulce</h3>\n      <p>En la huerta de Lleida se recogen melocotones, peras y manzanas.</p>\n    </div>\n    <div class="targeta">\n      <h3>Caracoles a la llauna</h3>\n      <p>Un plato muy típico de Lleida.</p>\n    </div>\n  </div>\n</section>\n<footer>\n  <p>Fuentes: explicaciones en clase y libros de la biblioteca. Imágenes: dibujos de Numi.</p>\n</footer>');
  return bi({ t: 'Per al mòbil|Para el móvil', d: 'Disseny adaptable|Diseño adaptable', color: '#14A3B8', s: [
    /* =================================================================================================================
       Sessió 1 · Pantalles petites: viewport, @media, amplades i imatges flexibles
       ================================================================================================================= */
    { id: 'w7-1', t: 'Pantalles petites|Pantallas pequeñas', min: 45, badge: 'w_mobil',
      learn: ["Una web adaptable es veu bé a totes les pantalles: canvia la disposició, però no el contingut.|Una web adaptable se ve bien en todas las pantallas: cambia la disposición, pero no el contenido.",
        "L'etiqueta meta viewport fa que el mòbil faci servir la seva amplada de veritat.|La etiqueta meta viewport hace que el móvil use su anchura de verdad.",
        "Les regles de dins de @media (max-width: 600px) { … } només valen per a pantalles estretes.|Las reglas de dentro de @media (max-width: 600px) { … } solo valen para pantallas estrechas."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Recordes la unitat 6? En un contenidor amb <code>display: flex</code>, quina propietat posa les caixes <b>una sota l'altra</b>?|¿Recuerdas la unidad 6? En un contenedor con <code>display: flex</code>, ¿qué propiedad pone las cajas <b>una debajo de otra</b>?",
          opts: ['<code>flex-direction: column;</code>|<code>flex-direction: column;</code>', '<code>justify-content: center;</code>|<code>justify-content: center;</code>', '<code>gap: 10px;</code>|<code>gap: 10px;</code>'], a: 0,
          ex: "Per defecte, flex posa les caixes en fila (<code>row</code>). Amb <code>column</code>, van una sota l'altra. Avui ho farem servir per al mòbil!|Por defecto, flex pone las cajas en fila (<code>row</code>). Con <code>column</code>, van una debajo de otra. ¡Hoy lo usaremos para el móvil!" },
        { k: 'story', ph: 'missio', who: 'both', scene: 'poble', t: "La vostra classe prepara una <b>guia de Lleida</b> per a uns estudiants d'intercanvi que arribaran aviat. La miraran pel carrer, <b>amb el mòbil</b>. Però la primera prova ha anat malament: tot es veu petitíssim, i per llegir s'han de moure de costat amb el dit.|Vuestra clase prepara una <b>guía de Lleida</b> para unos estudiantes de intercambio que llegarán pronto. La mirarán por la calle, <b>con el móvil</b>. Pero la primera prueba ha ido mal: todo se ve pequeñísimo, y para leer tienen que moverse de lado con el dedo." },
        { k: 'story', ph: 'missio', who: 'numi', t: "Avui aprendràs a fer webs <b>adaptables</b>: la mateixa pàgina que a l'ordinador es veu en fila i, al mòbil, es reorganitza sola perquè es llegeixi bé. Ho faràs amb CSS de veritat, el mateix que fan servir els professionals.|Hoy aprenderás a hacer webs <b>adaptables</b>: la misma página que en el ordenador se ve en fila y, en el móvil, se reorganiza sola para que se lea bien. Lo harás con CSS de verdad, el mismo que usan los profesionales." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Disseny adaptable|Diseño adaptable', t: 'Una web, moltes pantalles|Una web, muchas pantallas', anim: 'w7resp',
            x: "Obrim les webs amb mòbils, tauletes i ordinadors. Una web <span class='hl'>adaptable</span> (en anglès, <i>responsive</i>) té el <b>mateix contingut</b> a totes les pantalles, però el <b>col·loca diferent</b>: a l'ordinador, tres targetes en fila; al mòbil, una sota l'altra.|Abrimos las webs con móviles, tabletas y ordenadores. Una web <span class='hl'>adaptable</span> (en inglés, <i>responsive</i>) tiene el <b>mismo contenido</b> en todas las pantallas, pero lo <b>coloca diferente</b>: en el ordenador, tres tarjetas en fila; en el móvil, una debajo de otra.",
            tip: "A l'editor, el botó 📱 de la vista prèvia et mostra la pàgina amb l'amplada d'un mòbil. Fes-lo servir sovint!|En el editor, el botón 📱 de la vista previa te muestra la página con la anchura de un móvil. ¡Úsalo a menudo!" },
          { k: 'Viewport|Viewport', t: "L'etiqueta viewport|La etiqueta viewport", anim: 'w7view',
            x: "Si no li diem res, el navegador del mòbil fa veure que la pantalla és ampla com la d'un ordinador i ho dibuixa tot petitíssim. Amb aquesta línia dins de <code>&lt;head&gt;</code> li diem «fes servir l'amplada de veritat del mòbil»:<br><code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"&gt;</code>|Si no le decimos nada, el navegador del móvil hace como si la pantalla fuera ancha como la de un ordenador y lo dibuja todo pequeñísimo. Con esta línea dentro de <code>&lt;head&gt;</code> le decimos «usa la anchura de verdad del móvil»:<br><code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"&gt;</code>",
            tip: "Aquesta línia s'escriu sempre igual. No cal saber-la de memòria, però sí saber per què hi és.|Esta línea se escribe siempre igual. No hace falta saberla de memoria, pero sí saber por qué está." },
          { k: '@media|@media', t: 'Regles només per a pantalles estretes|Reglas solo para pantallas estrechas', anim: 'w7media',
            x: "Una regla <code>@media</code> és com un «si…» del CSS. <code>@media (max-width: 600px) { … }</code> vol dir: «<b>si la pantalla fa 600 píxels d'amplada o menys</b>, fes servir les regles de dins». En una pantalla més ampla, el navegador les ignora.|Una regla <code>@media</code> es como un «si…» del CSS. <code>@media (max-width: 600px) { … }</code> quiere decir: «<b>si la pantalla mide 600 píxeles de ancho o menos</b>, usa las reglas de dentro». En una pantalla más ancha, el navegador las ignora." },
          { k: 'Exemple|Ejemplo', t: 'Claus dins de claus|Llaves dentro de llaves', media: { k: 'web', html: C('<h1>Lleida</h1>\n<p>Benvinguts a la guia!</p>', '<h1>Lleida</h1>\n<p>¡Bienvenidos a la guía!</p>'), css: 'body {\n  background: #E8F1FF;\n}\n@media (max-width: 600px) {\n  body {\n    background: #FFE9C7;\n  }\n  h1 {\n    font-size: 26px;\n  }\n}' },
            x: "El bloc <code>@media</code> té les seves claus <code>{ }</code> i, a dins, regles normals amb les seves claus. Aquesta vista fa menys de 600 píxels, com un mòbil: per això el fons és taronja. En una pantalla ampla, seria blau.|El bloque <code>@media</code> tiene sus llaves <code>{ }</code> y, dentro, reglas normales con sus llaves. Esta vista mide menos de 600 píxeles, como un móvil: por eso el fondo es naranja. En una pantalla ancha, sería azul.",
            tip: "Escriu primer les regles normals i, al final, el <code>@media</code> amb els canvis per al mòbil.|Escribe primero las reglas normales y, al final, el <code>@media</code> con los cambios para el móvil." },
          { k: 'Compte!|¡Cuidado!', t: 'Les amplades fixes|Los anchos fijos', anim: 'w7flex',
            x: "Una caixa amb <code>width: 700px</code> no cap en un mòbil i apareix una barra per moure's de costat. Amb <code>max-width: 100%</code>, la caixa pot ser ampla, però <b>mai més que la pantalla</b>. A les imatges, <code>img { max-width: 100%; height: auto; }</code> fa que s'encongeixin sense deformar-se.|Una caja con <code>width: 700px</code> no cabe en un móvil y aparece una barra para moverse de lado. Con <code>max-width: 100%</code>, la caja puede ser ancha, pero <b>nunca más que la pantalla</b>. En las imágenes, <code>img { max-width: 100%; height: auto; }</code> hace que se encojan sin deformarse.",
            bad: "<code>width: 700px;</code> → al mòbil, la caixa surt de la pantalla.|<code>width: 700px;</code> → en el móvil, la caja se sale de la pantalla.", good: "<code>max-width: 100%;</code> → la caixa s'encongeix fins que hi cap.|<code>max-width: 100%;</code> → la caja se encoge hasta que cabe." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '✏️', title: 'La web de paper|La web de papel',
          t: "Necessites un full gran (serà l'ordinador) i un paper petit i estret, com un pòsit (serà el mòbil).|Necesitas una hoja grande (será el ordenador) y un papel pequeño y estrecho, como un pósit (será el móvil).",
          steps: ["Al full gran, dibuixa una pàgina: un títol a dalt, un menú i <b>tres fotos amb text, en fila</b>.|En la hoja grande, dibuja una página: un título arriba, un menú y <b>tres fotos con texto, en fila</b>.",
            "Al paper estret, dibuixa <b>la mateixa pàgina</b>. Hi caben les tres fotos en fila? Posa-les una sota l'altra.|En el papel estrecho, dibuja <b>la misma página</b>. ¿Caben las tres fotos en fila? Ponlas una debajo de otra.",
            "Compara els dos dibuixos: què has canviat de lloc? Has hagut de treure res?|Compara los dos dibujos: ¿qué has cambiado de sitio? ¿Has tenido que quitar algo?",
            "Escriu al costat del mòbil què hauria de fer el CSS: «les fotos, en columna», «el títol, més petit»…|Escribe al lado del móvil qué debería hacer el CSS: «las fotos, en columna», «el título, más pequeño»…"],
          tip: "Els dissenyadors de webs fan aquests esbossos de veritat abans de programar: en diuen <i>wireframes</i>.|Los diseñadores de webs hacen estos bocetos de verdad antes de programar: los llaman <i>wireframes</i>." },
        { k: 'quiz', ph: 'prova', q: "Quina d'aquestes frases descriu una web <b>adaptable</b>?|¿Cuál de estas frases describe una web <b>adaptable</b>?",
          opts: ["Té el mateix contingut a totes les pantalles, però el col·loca diferent|Tiene el mismo contenido en todas las pantallas, pero lo coloca diferente", "Al mòbil amaga la meitat de la informació perquè no hi cap|En el móvil esconde la mitad de la información porque no cabe", "Té una adreça diferent per a cada mòbil|Tiene una dirección diferente para cada móvil"], a: 0,
          ex: "Adaptar no és retallar: tothom ha de poder llegir el mateix, tingui la pantalla que tingui.|Adaptar no es recortar: todo el mundo tiene que poder leer lo mismo, tenga la pantalla que tenga." },
        { k: 'wquiz', ph: 'prova', q: "En un <b>mòbil</b> (menys de 600 píxels d'amplada), com es veuran aquestes tres targetes?|En un <b>móvil</b> (menos de 600 píxeles de ancho), ¿cómo se verán estas tres tarjetas?",
          code: { html: '<div class="fila">\n  <div class="t">Seu Vella</div>\n  <div class="t">Segre</div>\n  <div class="t">Gardeny</div>\n</div>', css: '.fila {\n  display: flex;\n  gap: 8px;\n}\n.t {\n  background: #FFD54A;\n  padding: 10px;\n}\n@media (max-width: 600px) {\n  .fila {\n    flex-direction: column;\n  }\n}' },
          opts: [{ html: '<div class="fila"><div class="t">Seu Vella</div><div class="t">Segre</div><div class="t">Gardeny</div></div>', css: '.fila{display:flex;flex-direction:column;gap:8px}.t{background:#FFD54A;padding:10px}' },
            { html: '<div class="fila"><div class="t">Seu Vella</div><div class="t">Segre</div><div class="t">Gardeny</div></div>', css: '.fila{display:flex;gap:8px}.t{background:#FFD54A;padding:10px}' },
            { html: '<div class="fila"><div class="t">Seu Vella</div><div class="t">Segre</div><div class="t">Gardeny</div></div>', css: '.fila{display:flex;flex-wrap:wrap;gap:8px}.t{background:#FFD54A;padding:10px;width:38%}' }], a: 0,
          ex: "La pantalla fa menys de 600 píxels, així que s'aplica el <code>@media</code>: <code>.fila</code> passa a <code>column</code> i les targetes queden una sota l'altra.|La pantalla mide menos de 600 píxeles, así que se aplica el <code>@media</code>: <code>.fila</code> pasa a <code>column</code> y las tarjetas quedan una debajo de otra." },
        { k: 'wspot', ph: 'investiga', q: "Aquest <code>@media</code> no funciona mai, ni al mòbil. <b>Toca la línia que té l'error.</b>|Este <code>@media</code> no funciona nunca, ni en el móvil. <b>Toca la línea que tiene el error.</b>",
          css: 'h1 {\n  font-size: 40px;\n}\n@media max-width: 600px {\n  h1 {\n    font-size: 28px;\n  }\n}', bad: 4, preview: false,
          ex: "La condició va <b>entre parèntesis</b>: <code>@media (max-width: 600px) {</code>. Sense els parèntesis, el navegador no l'entén i se salta tot el bloc.|La condición va <b>entre paréntesis</b>: <code>@media (max-width: 600px) {</code>. Sin los paréntesis, el navegador no la entiende y se salta todo el bloque." },
        { k: 'move', ph: 'pausa', secs: 25, t: "Fes de web adaptable! Obre els braços ben amples: ets la pantalla d'un ordinador, amb tres fotos en fila. Ara junta't i posa els braços amunt, un sobre l'altre: ets el mòbil, en columna. Canvia 6 vegades, cada cop més de pressa!|¡Haz de web adaptable! Abre los brazos bien anchos: eres la pantalla de un ordenador, con tres fotos en fila. Ahora júntate y pon los brazos arriba, uno sobre otro: eres el móvil, en columna. ¡Cambia 6 veces, cada vez más rápido!" },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi', tabs: ['html'],
          q: "La guia encara no té l'etiqueta viewport. Afegeix-la <b>dins de <code>&lt;head&gt;</code></b>, just a sota de <code>&lt;meta charset&gt;</code>. Pots fer servir el botó de sota l'editor.|La guía todavía no tiene la etiqueta viewport. Añádela <b>dentro de <code>&lt;head&gt;</code></b>, justo debajo de <code>&lt;meta charset&gt;</code>. Puedes usar el botón de debajo del editor.",
          html: C('<!doctype html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <title>Guia de Lleida</title>\n</head>\n<body>\n  <h1>Guia de Lleida</h1>\n  <p>Una ciutat amb un turó, un riu i molta fruita.</p>\n</body>\n</html>', '<!doctype html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>Guía de Lleida</title>\n</head>\n<body>\n  <h1>Guía de Lleida</h1>\n  <p>Una ciudad con un cerro, un río y mucha fruta.</p>\n</body>\n</html>'),
          snips: ['<meta name="viewport" content="width=device-width, initial-scale=1">'],
          checks: [{ k: 'attr', t: 'meta', a: 'name', v: 'viewport', txt: 'Hi ha un <code>&lt;meta name="viewport"&gt;</code>|Hay un <code>&lt;meta name="viewport"&gt;</code>' },
            { k: 'attr', t: 'meta', a: 'content', v: '/width=device-width/', txt: 'El viewport diu <code>width=device-width</code>|El viewport dice <code>width=device-width</code>' },
            { k: 'title' }, { k: 'clean' }],
          sol: { html: C('<!doctype html>\n<html lang="ca">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Guia de Lleida</title>\n</head>\n<body>\n  <h1>Guia de Lleida</h1>\n  <p>Una ciutat amb un turó, un riu i molta fruita.</p>\n</body>\n</html>', '<!doctype html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Guía de Lleida</title>\n</head>\n<body>\n  <h1>Guía de Lleida</h1>\n  <p>Una ciudad con un cerro, un río y mucha fruta.</p>\n</body>\n</html>') },
          hint: "Posa el cursor al final de la línia <code>&lt;meta charset=\"utf-8\"&gt;</code>, prem Retorn i toca el botó amb el codi del viewport.|Pon el cursor al final de la línea <code>&lt;meta charset=\"utf-8\"&gt;</code>, pulsa Intro y toca el botón con el código del viewport." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi',
          q: "Al mòbil, la capçalera blava <b>surt de la pantalla</b> (mira la barra de baix de la vista prèvia). A la pestanya CSS: canvia <code>width: 700px</code> per <code>max-width: 100%</code> i afegeix la regla de les imatges flexibles: <code>img { max-width: 100%; height: auto; }</code>.|En el móvil, la cabecera azul <b>se sale de la pantalla</b> (mira la barra de abajo de la vista previa). En la pestaña CSS: cambia <code>width: 700px</code> por <code>max-width: 100%</code> y añade la regla de las imágenes flexibles: <code>img { max-width: 100%; height: auto; }</code>.",
          html: C('<div class="capcalera">\n  <h1>Guia de Lleida</h1>\n</div>\n<img src="img/tech/web/seu-vella.svg" alt="La Seu Vella dalt del turó">', '<div class="capcalera">\n  <h1>Guía de Lleida</h1>\n</div>\n<img src="img/tech/web/seu-vella.svg" alt="La Seu Vella en lo alto del cerro">'),
          css: '.capcalera {\n  width: 700px;\n  background: #2F6BFF;\n  color: white;\n  padding: 10px;\n  border-radius: 12px;\n}\n',
          tab: 'css', snips: ['max-width: 100%;', 'img {\n  max-width: 100%;\n  height: auto;\n}'],
          checks: [{ k: 'css', s: '.capcalera', p: 'max-width', v: '100%', txt: '<code>.capcalera</code> té <code>max-width: 100%</code>|<code>.capcalera</code> tiene <code>max-width: 100%</code>' },
            { k: 'css', s: 'img', p: 'max-width', v: '100%', txt: 'Una regla <code>img { max-width: 100%; }</code>|Una regla <code>img { max-width: 100%; }</code>' },
            { k: 'css', s: 'img', p: 'height', v: 'auto', txt: 'Les imatges tenen <code>height: auto</code>|Las imágenes tienen <code>height: auto</code>' }, { k: 'cssclean' }],
          sol: { css: '.capcalera {\n  max-width: 100%;\n  background: #2F6BFF;\n  color: white;\n  padding: 10px;\n  border-radius: 12px;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}' },
          hint: "<code>max-width</code> vol dir «com a màxim». <code>max-width: 100%</code>: com a màxim, tota l'amplada de la pantalla.|<code>max-width</code> quiere decir «como máximo». <code>max-width: 100%</code>: como máximo, todo el ancho de la pantalla." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi',
          q: "Al mòbil, els tres botons del menú queden estrets i el text es parteix. Escriu un <code>@media (max-width: 600px)</code> on <code>.menu</code> tingui <code>flex-direction: column</code>, perquè vagin un sota l'altre.|En el móvil, los tres botones del menú quedan estrechos y el texto se parte. Escribe un <code>@media (max-width: 600px)</code> donde <code>.menu</code> tenga <code>flex-direction: column</code>, para que vayan uno debajo del otro.",
          html: C('<nav class="menu">\n  <a href="#llocs">Llocs per visitar</a>\n  <a href="#festes">Festes i tradicions</a>\n  <a href="#menjar">Què menjar a Lleida</a>\n</nav>', '<nav class="menu">\n  <a href="#llocs">Lugares para visitar</a>\n  <a href="#festes">Fiestas y tradiciones</a>\n  <a href="#menjar">Qué comer en Lleida</a>\n</nav>'),
          css: '.menu {\n  display: flex;\n  gap: 10px;\n}\n.menu a {\n  background: #E8F1FF;\n  padding: 10px 16px;\n  border-radius: 8px;\n}\n', tab: 'css',
          snips: ['@media (max-width: 600px) {\n  |\n}', '.menu {\n    flex-direction: column;\n  }'],
          checks: [{ k: 'media', max: 600 }, { k: 'css', s: '.menu', p: 'flex-direction', v: 'column', media: true, txt: 'Dins del <code>@media</code>, <code>.menu</code> té <code>flex-direction: column</code>|Dentro del <code>@media</code>, <code>.menu</code> tiene <code>flex-direction: column</code>' }, { k: 'cssclean' }],
          sol: { css: '.menu {\n  display: flex;\n  gap: 10px;\n}\n.menu a {\n  background: #E8F1FF;\n  padding: 10px 16px;\n  border-radius: 8px;\n}\n@media (max-width: 600px) {\n  .menu {\n    flex-direction: column;\n  }\n}' },
          hint: "Dins de les claus del <code>@media</code> hi va una regla sencera: <code>.menu { flex-direction: column; }</code>. Compta les claus: n'hi ha d'haver dues d'obertes i dues de tancades.|Dentro de las llaves del <code>@media</code> va una regla entera: <code>.menu { flex-direction: column; }</code>. Cuenta las llaves: tiene que haber dos abiertas y dos cerradas." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi',
          q: "Ara tu sol/a: fes que al mòbil el títol <code>h1</code> sigui més petit (<code>font-size</code>) i que <code>.targetes</code> posi les targetes en columna. Les dues regles van dins del <b>mateix</b> <code>@media</code>.|Ahora tú solo/a: haz que en el móvil el título <code>h1</code> sea más pequeño (<code>font-size</code>) y que <code>.targetes</code> ponga las tarjetas en columna. Las dos reglas van dentro del <b>mismo</b> <code>@media</code>.",
          html: J(CARDS), css: 'h1 {\n  font-size: 44px;\n}\n' + CARDS_CSS + '\n', tab: 'css',
          checks: [{ k: 'media', max: 600 }, { k: 'css', s: 'h1', p: 'font-size', media: true, txt: 'Dins del <code>@media</code>, <code>h1</code> té <code>font-size</code>|Dentro del <code>@media</code>, <code>h1</code> tiene <code>font-size</code>' },
            { k: 'css', s: '.targetes', p: 'flex-direction', v: 'column', media: true, txt: 'Dins del <code>@media</code>, <code>.targetes</code> va en columna|Dentro del <code>@media</code>, <code>.targetes</code> va en columna' }, { k: 'cssclean' }],
          sol: { css: 'h1 {\n  font-size: 44px;\n}\n' + CARDS_CSS + '\n@media (max-width: 600px) {\n  h1 {\n    font-size: 28px;\n  }\n  .targetes {\n    flex-direction: column;\n  }\n}' },
          hint: "Primer escriu <code>@media (max-width: 600px) {</code> i la clau que el tanca. Després, a dins, una regla per a <code>h1</code> i una altra per a <code>.targetes</code>.|Primero escribe <code>@media (max-width: 600px) {</code> y la llave que lo cierra. Después, dentro, una regla para <code>h1</code> y otra para <code>.targetes</code>." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi',
          q: "Aquest CSS té <b>dos errors</b> i per això al mòbil les targetes no es posen en columna. Troba'ls i arregla'ls (llegeix l'avís groc de sota l'editor).|Este CSS tiene <b>dos errores</b> y por eso en el móvil las tarjetas no se ponen en columna. Encuéntralos y arréglalos (lee el aviso amarillo de debajo del editor).",
          html: J(CARDS), css: CARDS_CSS + '\n@media (max-width: 600px) {\n  .targetes {\n    flex-direction column;\n  }\n', tab: 'css',
          checks: [{ k: 'cssclean' }, { k: 'css', s: '.targetes', p: 'flex-direction', v: 'column', media: true, txt: 'Dins del <code>@media</code>, <code>.targetes</code> va en columna|Dentro del <code>@media</code>, <code>.targetes</code> va en columna' }],
          sol: { css: CARDS_CSS + '\n@media (max-width: 600px) {\n  .targetes {\n    flex-direction: column;\n  }\n}' },
          hint: "Una declaració sempre té la forma <code>propietat: valor;</code> (amb els dos punts). I cada clau que s'obre <code>{</code> s'ha de tancar <code>}</code>.|Una declaración siempre tiene la forma <code>propiedad: valor;</code> (con los dos puntos). Y cada llave que se abre <code>{</code> se tiene que cerrar <code>}</code>." },
        { k: 'wcreate', ph: 'crea', name: 'Lleida al mòbil|Lleida en el móvil', url: 'guia-lleida.numi',
          q: "Crea la portada de la teva guia! Un títol, un paràgraf de benvinguda i un <code>div.targetes</code> amb <b>almenys 3 targetes</b> (<code>div.targeta</code>), cadascuna amb una imatge i el seu nom. A l'ordinador, en fila; al mòbil, una sota l'altra.|¡Crea la portada de tu guía! Un título, un párrafo de bienvenida y un <code>div.targetes</code> con <b>al menos 3 tarjetas</b> (<code>div.targeta</code>), cada una con una imagen y su nombre. En el ordenador, en fila; en el móvil, una debajo de otra.",
          crit: ["Títol i paràgraf de benvinguda|Título y párrafo de bienvenida", "3 targetes o més, amb imatges amb alt|3 tarjetas o más, con imágenes con alt", "Targetes en fila amb flex|Tarjetas en fila con flex", "Al mòbil, en columna (@media)|En el móvil, en columna (@media)", "Imatges flexibles|Imágenes flexibles"],
          html: C('<h1>Guia de Lleida</h1>\n', '<h1>Guía de Lleida</h1>\n'), css: '',
          snips: ['<div class="targeta">\n  <img src="img/tech/web/|.svg" alt="">\n  <h2></h2>\n</div>', '@media (max-width: 600px) {\n  |\n}'],
          checks: [{ k: 'tag', t: 'h1' }, { k: 'tag', t: 'p' }, { k: 'class', c: 'targeta', min: 3 }, { k: 'attr', t: 'img', a: 'alt', min: 3, txt: 'Almenys 3 imatges amb <code>alt</code>|Al menos 3 imágenes con <code>alt</code>' },
            { k: 'css', s: '.targetes', p: 'display', v: 'flex' }, { k: 'css', s: '.targetes', p: 'flex-direction', v: 'column', media: true, txt: 'Al mòbil, <code>.targetes</code> va en columna|En el móvil, <code>.targetes</code> va en columna' },
            { k: 'css', s: 'img', p: 'max-width', v: '100%', txt: 'Imatges flexibles: <code>img { max-width: 100%; }</code>|Imágenes flexibles: <code>img { max-width: 100%; }</code>' }, { k: 'clean' }, { k: 'cssclean' }],
          sol: { html: C('<h1>Guia de Lleida</h1>\n<p>Benvinguts! Aquí trobaràs els llocs que no et pots perdre.</p>\n<div class="targetes">\n  <div class="targeta">\n    <img src="img/tech/web/seu-vella.svg" alt="La Seu Vella dalt del turó">\n    <h2>La Seu Vella</h2>\n  </div>\n  <div class="targeta">\n    <img src="img/tech/web/pont.svg" alt="Un pont sobre el riu">\n    <h2>El riu Segre</h2>\n  </div>\n  <div class="targeta">\n    <img src="img/tech/web/fruita.svg" alt="Una fruitera plena de fruita">\n    <h2>La fruita de l\'horta</h2>\n  </div>\n</div>', '<h1>Guía de Lleida</h1>\n<p>¡Bienvenidos! Aquí encontrarás los lugares que no te puedes perder.</p>\n<div class="targetes">\n  <div class="targeta">\n    <img src="img/tech/web/seu-vella.svg" alt="La Seu Vella en lo alto del cerro">\n    <h2>La Seu Vella</h2>\n  </div>\n  <div class="targeta">\n    <img src="img/tech/web/pont.svg" alt="Un puente sobre el río">\n    <h2>El río Segre</h2>\n  </div>\n  <div class="targeta">\n    <img src="img/tech/web/fruita.svg" alt="Un frutero lleno de fruta">\n    <h2>La fruta de la huerta</h2>\n  </div>\n</div>'),
            css: 'body {\n  background: #F3F7FF;\n}\nh1 {\n  color: #1A3FB0;\n}\n' + CARDS_CSS + '\n@media (max-width: 600px) {\n  h1 {\n    font-size: 26px;\n  }\n  .targetes {\n    flex-direction: column;\n  }\n}' } },
        { k: 'quiz', ph: 'tanca', q: "Què vol dir <code>@media (max-width: 600px) { … }</code>?|¿Qué quiere decir <code>@media (max-width: 600px) { … }</code>?",
          opts: ["Les regles de dins només valen si la pantalla fa 600 píxels o menys|Las reglas de dentro solo valen si la pantalla mide 600 píxeles o menos", "La pàgina fa sempre 600 píxels d'amplada|La página mide siempre 600 píxeles de ancho", "Les imatges fan com a màxim 600 píxels|Las imágenes miden como máximo 600 píxeles"], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Quina regla fa que una imatge <b>mai</b> surti de la pantalla?|¿Qué regla hace que una imagen <b>nunca</b> se salga de la pantalla?",
          opts: ['<code>img { max-width: 100%; height: auto; }</code>|<code>img { max-width: 100%; height: auto; }</code>', '<code>img { width: 900px; }</code>|<code>img { width: 900px; }</code>', '<code>img { margin: 100%; }</code>|<code>img { margin: 100%; }</code>'], a: 0,
          ex: "Com a màxim, tota l'amplada; i l'alçada s'ajusta sola perquè no es deformi.|Como máximo, todo el ancho; y la altura se ajusta sola para que no se deforme." },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* =================================================================================================================
       Sessió 2 · Botons i efectes: botons amb estil, :hover, :focus, transition i botons per al dit
       ================================================================================================================= */
    { id: 'w7-2', t: 'Botons i efectes|Botones y efectos', min: 45, badge: 'w_boto',
      learn: ["Un bon botó és un enllaç amb fons de color, farciment i vores arrodonides.|Un buen botón es un enlace con fondo de color, relleno y bordes redondeados.",
        ":hover canvia l'estil quan el ratolí hi passa per sobre, i transition fa que el canvi sigui suau.|:hover cambia el estilo cuando el ratón pasa por encima, y transition hace que el cambio sea suave.",
        "Al mòbil no hi ha ratolí: botons grans, separats i sense res important amagat darrere del :hover.|En el móvil no hay ratón: botones grandes, separados y sin nada importante escondido detrás del :hover."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Què fa aquesta regla?<br><code>@media (max-width: 600px) { h1 { font-size: 24px; } }</code>|¿Qué hace esta regla?<br><code>@media (max-width: 600px) { h1 { font-size: 24px; } }</code>",
          opts: ["Fa el títol més petit només a les pantalles estretes|Hace el título más pequeño solo en las pantallas estrechas", "Fa el títol més petit a totes les pantalles|Hace el título más pequeño en todas las pantallas", "Amaga el títol al mòbil|Esconde el título en el móvil"], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'taller', t: "La guia ja s'adapta al mòbil. Però en Bit l'ha provada i diu: «BIP! On he de tocar? Els enllaços semblen text normal!». Avui convertirem els enllaços en <b>botons</b> que conviden a tocar-los, que <b>reaccionen</b> quan hi passes per sobre i que canvien <b>amb suavitat</b>.|La guía ya se adapta al móvil. Pero Bit la ha probado y dice: «¡BIP! ¿Dónde tengo que tocar? ¡Los enlaces parecen texto normal!». Hoy convertiremos los enlaces en <b>botones</b> que invitan a tocarlos, que <b>reaccionan</b> cuando pasas por encima y que cambian <b>con suavidad</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Botons|Botones', t: "D'enllaç a botó|De enlace a botón", media: { k: 'web', html: C('<p>Un enllaç normal: <a href="#festes">Les festes</a></p>\n<p>Un enllaç amb estil de botó:</p>\n<a class="boto" href="#festes">Les festes</a>', '<p>Un enlace normal: <a href="#festes">Las fiestas</a></p>\n<p>Un enlace con estilo de botón:</p>\n<a class="boto" href="#festes">Las fiestas</a>'), css: BTN },
            x: "Molts botons de les webs són <b>enllaços</b> <code>&lt;a&gt;</code> amb estil: un color de fons, <b>farciment</b> (<code>padding</code>) perquè siguin grans, <b>vores arrodonides</b> i sense subratllat (<code>text-decoration: none</code>). Tot això ja ho saps de les unitats 4 i 5!|Muchos botones de las webs son <b>enlaces</b> <code>&lt;a&gt;</code> con estilo: un color de fondo, <b>relleno</b> (<code>padding</code>) para que sean grandes, <b>bordes redondeados</b> y sin subrayado (<code>text-decoration: none</code>). ¡Todo esto ya lo sabes de las unidades 4 y 5!",
            tip: "Fes servir <code>&lt;a&gt;</code> quan el botó porta a un altre lloc, i <code>&lt;button&gt;</code> quan fa una acció dins la pàgina (com enviar un formulari).|Usa <code>&lt;a&gt;</code> cuando el botón lleva a otro sitio, y <code>&lt;button&gt;</code> cuando hace una acción dentro de la página (como enviar un formulario)." },
          { k: ':hover|:hover', t: 'Quan el ratolí hi passa per sobre|Cuando el ratón pasa por encima', media: { k: 'web', html: C('<a class="boto" href="#festes">Passa-hi el ratolí</a>', '<a class="boto" href="#festes">Pasa el ratón</a>'), css: BTN + '\n.boto:hover {\n  background: #E5489A;\n}' },
            x: "<code>:hover</code> és una <span class='hl'>pseudoclasse</span>: <code>.boto:hover</code> vol dir «el botó, <b>mentre el ratolí hi és a sobre</b>». Prova-ho: passa el ratolí pel botó de la demo! I <code>cursor: pointer</code> converteix la fletxa en una mà.|<code>:hover</code> es una <span class='hl'>pseudoclase</span>: <code>.boto:hover</code> quiere decir «el botón, <b>mientras el ratón está encima</b>». Pruébalo: ¡pasa el ratón por el botón de la demo! Y <code>cursor: pointer</code> convierte la flecha en una mano." },
          { k: 'Transicions|Transiciones', t: 'Canvis suaus|Cambios suaves', anim: 'w7hover',
            x: "Sense res més, el color canvia <b>de cop</b>. Amb <code>transition: background 0.3s;</code> el navegador fa el canvi <b>a poc a poc</b>, en 0,3 segons. La transició es posa a la regla normal (<code>.boto</code>), no a la del <code>:hover</code>: així és suau quan el ratolí entra i quan surt.|Sin nada más, el color cambia <b>de golpe</b>. Con <code>transition: background 0.3s;</code> el navegador hace el cambio <b>poco a poco</b>, en 0,3 segundos. La transición se pone en la regla normal (<code>.boto</code>), no en la del <code>:hover</code>: así es suave cuando el ratón entra y cuando sale.",
            tip: "Les transicions curtes (entre 0,2 i 0,4 segons) queden millor: si són llargues, la web sembla lenta.|Las transiciones cortas (entre 0,2 y 0,4 segundos) quedan mejor: si son largas, la web parece lenta." },
          { k: 'Al mòbil|En el móvil', t: 'Un dit no és un ratolí|Un dedo no es un ratón', anim: 'w7tap',
            x: "Al mòbil no hi ha ratolí, i per tant el <code>:hover</code> no funciona com a l'ordinador. Per això: botons <b>grans</b> (com a mínim uns 44 píxels d'alt, més o menys la mida d'un dit), una mica de <b>separació</b> entre ells i <b>res important</b> que només aparegui amb el <code>:hover</code>.|En el móvil no hay ratón, y por eso el <code>:hover</code> no funciona como en el ordenador. Por eso: botones <b>grandes</b> (como mínimo unos 44 píxeles de alto, más o menos el tamaño de un dedo), un poco de <b>separación</b> entre ellos y <b>nada importante</b> que solo aparezca con el <code>:hover</code>.",
            bad: "Amagar el telèfon de contacte i que només surti amb el :hover.|Esconder el teléfono de contacto y que solo salga con el :hover.", good: "Tot visible sempre; el :hover només fa el botó més bonic.|Todo visible siempre; el :hover solo hace el botón más bonito." },
          { k: 'Accessibilitat|Accesibilidad', t: 'També amb el teclat|También con el teclado', media: { k: 'web', html: C('<a class="boto" href="#llocs">Llocs</a>\n<a class="boto" href="#festes">Festes</a>', '<a class="boto" href="#llocs">Lugares</a>\n<a class="boto" href="#festes">Fiestas</a>'), css: BTN + '\n.boto:hover, .boto:focus {\n  background: #FFC531;\n  color: #14204A;\n}' },
            x: "Hi ha persones que naveguen amb el <b>teclat</b> (la tecla de tabulació) en lloc del ratolí. <code>:focus</code> és l'estil del botó quan el teclat hi és a sobre. Truc: posa el mateix estil a tots dos, separats per una coma: <code>.boto:hover, .boto:focus { … }</code>.|Hay personas que navegan con el <b>teclado</b> (la tecla de tabulación) en lugar del ratón. <code>:focus</code> es el estilo del botón cuando el teclado está encima. Truco: pon el mismo estilo a los dos, separados por una coma: <code>.boto:hover, .boto:focus { … }</code>." }
        ] },
        { k: 'seq', ph: 'mans', q: "Ordena què passa quan el ratolí arriba a un botó que té <code>:hover</code> i <code>transition</code>.|Ordena qué pasa cuando el ratón llega a un botón que tiene <code>:hover</code> y <code>transition</code>.",
          items: ["El ratolí entra a sobre del botó|El ratón entra encima del botón", "El navegador comença a fer servir la regla <code>.boto:hover</code>|El navegador empieza a usar la regla <code>.boto:hover</code>", "La transició canvia el color a poc a poc, en 0,3 segons|La transición cambia el color poco a poco, en 0,3 segundos", "El ratolí surt i el botó torna, també a poc a poc, al color de sempre|El ratón sale y el botón vuelve, también poco a poco, al color de siempre"],
          ex: "El <code>:hover</code> només dura mentre el ratolí hi és a sobre; la <code>transition</code> fa suaus els dos canvis.|El <code>:hover</code> solo dura mientras el ratón está encima; la <code>transition</code> hace suaves los dos cambios." },
        { k: 'unplug', ph: 'mans', ico: '🔔', title: 'Caçadors de botons|Cazadores de botones',
          t: "Busca <b>3 botons de veritat</b> a casa: l'ascensor, el microones, el comandament de la tele, el timbre…|Busca <b>3 botones de verdad</b> en casa: el ascensor, el microondas, el mando de la tele, el timbre…",
          steps: ["Per a cada botó, fixa't: és gran o petit? Què et diu que és un botó (la forma, el color, el relleu)?|Para cada botón, fíjate: ¿es grande o pequeño? ¿Qué te dice que es un botón (la forma, el color, el relieve)?",
            "Quan el prems, com saps que ha funcionat? Fa clic, s'encén un llum, sona…?|Cuando lo pulsas, ¿cómo sabes que ha funcionado? ¿Hace clic, se enciende una luz, suena…?",
            "Hi ha algun botó massa petit o que costi d'encertar amb el dit?|¿Hay algún botón demasiado pequeño o que cueste acertar con el dedo?",
            "Pensa: com faries que un botó d'una web també avisi que l'has tocat?|Piensa: ¿cómo harías que un botón de una web también avise de que lo has tocado?"],
          tip: "El <code>:hover</code> i els canvis de color fan la mateixa feina que el clic o el llum dels botons de veritat: dir-te «t'he entès».|El <code>:hover</code> y los cambios de color hacen el mismo trabajo que el clic o la luz de los botones de verdad: decirte «te he entendido»." },
        { k: 'wquiz', ph: 'prova', q: "Quin botó dibuixa aquest codi?|¿Qué botón dibuja este código?",
          code: { html: '<a class="boto" href="#mapa">Mapa</a>', css: '.boto {\n  display: inline-block;\n  background: #1FA463;\n  color: white;\n  padding: 14px 26px;\n  border-radius: 30px;\n  text-decoration: none;\n}' },
          opts: [{ html: '<a class="boto" href="#mapa">Mapa</a>', css: '.boto{display:inline-block;background:#1FA463;color:white;padding:14px 26px;border-radius:30px;text-decoration:none}' },
            { html: '<a class="boto" href="#mapa">Mapa</a>', css: '.boto{display:inline-block;background:#1FA463;color:white;padding:14px 26px;text-decoration:none}' },
            { html: '<a class="boto" href="#mapa">Mapa</a>', css: '.boto{display:inline-block;color:#1FA463;padding:4px;text-decoration:underline}' }], a: 0,
          ex: "Fons verd, text blanc, molt de farciment i <code>border-radius: 30px</code>: les vores són tan arrodonides que sembla una pastilla.|Fondo verde, texto blanco, mucho relleno y <code>border-radius: 30px</code>: los bordes son tan redondeados que parece una pastilla." },
        { k: 'quiz', ph: 'prova', q: "On has de posar la <code>transition</code> perquè el canvi sigui suau quan el ratolí <b>entra i quan surt</b>?|¿Dónde tienes que poner la <code>transition</code> para que el cambio sea suave cuando el ratón <b>entra y cuando sale</b>?",
          opts: ["A la regla normal, <code>.boto { … }</code>|En la regla normal, <code>.boto { … }</code>", "Només a <code>.boto:hover { … }</code>|Solo en <code>.boto:hover { … }</code>", "A <code>body { … }</code>|En <code>body { … }</code>"], a: 0,
          ex: "Si només és al <code>:hover</code>, el canvi és suau en entrar, però en sortir torna de cop.|Si solo está en el <code>:hover</code>, el cambio es suave al entrar, pero al salir vuelve de golpe." },
        { k: 'wspot', ph: 'investiga', q: "Aquest botó no canvia mai de color quan hi passes el ratolí. <b>Toca la línia que té l'error.</b>|Este botón no cambia nunca de color cuando pasas el ratón. <b>Toca la línea que tiene el error.</b>",
          css: '.boto {\n  background: #2F6BFF;\n  color: white;\n  transition: background 0.3s;\n}\n.boto:hovre {\n  background: #1A3FB0;\n}', bad: 6, preview: false,
          ex: "Hi diu <code>:hovre</code> en lloc de <code>:hover</code>. El navegador no coneix <code>:hovre</code> i ignora tota la regla.|Pone <code>:hovre</code> en lugar de <code>:hover</code>. El navegador no conoce <code>:hovre</code> e ignora toda la regla." },
        { k: 'move', ph: 'pausa', secs: 25, t: "Ara ets un botó! Queda't quiet/a, ben dret/a. Compta fins a 3 i estira't <b>a poc a poc</b>, com si et passés un ratolí per sobre (una transició lenta!). Compta fins a 3 més i torna a poc a poc. Repeteix-ho 4 vegades.|¡Ahora eres un botón! Quédate quieto/a, bien recto/a. Cuenta hasta 3 y estírate <b>poco a poco</b>, como si te pasara un ratón por encima (¡una transición lenta!). Cuenta hasta 3 más y vuelve poco a poco. Repítelo 4 veces." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi/festes',
          q: "El text del botó és blanc i el fons també: no es veu! Completa la regla <code>.boto</code> amb un color de fons (<code>background</code>), farciment (<code>padding</code>) i vores arrodonides (<code>border-radius</code>).|El texto del botón es blanco y el fondo también: ¡no se ve! Completa la regla <code>.boto</code> con un color de fondo (<code>background</code>), relleno (<code>padding</code>) y bordes redondeados (<code>border-radius</code>).",
          html: J(FESTA), css: '.boto {\n  display: inline-block;\n  color: white;\n  text-decoration: none;\n  \n}', tab: 'css',
          snips: ['background: #E5489A;', 'padding: 12px 20px;', 'border-radius: 10px;'],
          checks: [{ k: 'css', s: '.boto', p: 'background', txt: '<code>.boto</code> té <code>background</code>|<code>.boto</code> tiene <code>background</code>' }, { k: 'css', s: '.boto', p: 'padding', txt: '<code>.boto</code> té <code>padding</code>|<code>.boto</code> tiene <code>padding</code>' }, { k: 'css', s: '.boto', p: 'border-radius', txt: '<code>.boto</code> té <code>border-radius</code>|<code>.boto</code> tiene <code>border-radius</code>' }, { k: 'cssclean' }],
          sol: { css: '.boto {\n  display: inline-block;\n  color: white;\n  text-decoration: none;\n  background: #E5489A;\n  padding: 12px 20px;\n  border-radius: 10px;\n}' },
          hint: "Les tres declaracions van dins de les claus de <code>.boto</code>, abans de la <code>}</code>. No t'oblidis del punt i coma al final de cada línia.|Las tres declaraciones van dentro de las llaves de <code>.boto</code>, antes de la <code>}</code>. No te olvides del punto y coma al final de cada línea." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi/festes',
          q: "Ara fes que el botó reaccioni: escriu una regla <code>.boto:hover</code> que li canviï el color de fons. I afegeix <code>cursor: pointer;</code> a <code>.boto</code>, perquè la fletxa del ratolí es converteixi en una mà.|Ahora haz que el botón reaccione: escribe una regla <code>.boto:hover</code> que le cambie el color de fondo. Y añade <code>cursor: pointer;</code> a <code>.boto</code>, para que la flecha del ratón se convierta en una mano.",
          html: J(FESTA), css: '.boto {\n  display: inline-block;\n  background: #E5489A;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n}\n', tab: 'css',
          snips: ['.boto:hover {\n  background: |;\n}', 'cursor: pointer;'],
          checks: [{ k: 'css', s: '.boto:hover', p: 'background', txt: 'Una regla <code>.boto:hover</code> amb <code>background</code>|Una regla <code>.boto:hover</code> con <code>background</code>' }, { k: 'css', s: '.boto', p: 'cursor', v: 'pointer', txt: '<code>.boto</code> té <code>cursor: pointer</code>|<code>.boto</code> tiene <code>cursor: pointer</code>' }, { k: 'cssclean' }],
          sol: { css: '.boto {\n  display: inline-block;\n  background: #E5489A;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.boto:hover {\n  background: #B02A6E;\n}' },
          hint: "<code>.boto:hover</code> s'escriu tot junt, sense espais, i és una regla nova, amb les seves claus.|<code>.boto:hover</code> se escribe todo junto, sin espacios, y es una regla nueva, con sus llaves." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi/festes',
          q: "El canvi de color és de cop. Afegeix <code>transition: background 0.3s;</code> a la regla <code>.boto</code>. I fes que el botó també canviï amb el teclat: canvia el selector <code>.boto:hover</code> per <code>.boto:hover, .boto:focus</code>.|El cambio de color es de golpe. Añade <code>transition: background 0.3s;</code> a la regla <code>.boto</code>. Y haz que el botón también cambie con el teclado: cambia el selector <code>.boto:hover</code> por <code>.boto:hover, .boto:focus</code>.",
          html: J(FESTA), css: '.boto {\n  display: inline-block;\n  background: #E5489A;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.boto:hover {\n  background: #B02A6E;\n}', tab: 'css',
          snips: ['transition: background 0.3s;', ', .boto:focus'],
          checks: [{ k: 'css', s: '.boto', p: 'transition', v: '/\\d/', txt: '<code>.boto</code> té una <code>transition</code> amb el temps|<code>.boto</code> tiene una <code>transition</code> con el tiempo' }, { k: 'css', s: '.boto:focus', p: 'background', txt: '<code>.boto:focus</code> té el mateix estil que el <code>:hover</code>|<code>.boto:focus</code> tiene el mismo estilo que el <code>:hover</code>' }, { k: 'cssclean' }],
          sol: { css: '.boto {\n  display: inline-block;\n  background: #E5489A;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.boto:hover, .boto:focus {\n  background: #B02A6E;\n}' },
          hint: "La <code>transition</code> va a la regla <code>.boto</code>, no a la del <code>:hover</code>. Per al teclat, escriu <code>, .boto:focus</code> just abans de la clau <code>{</code> del <code>:hover</code>.|La <code>transition</code> va en la regla <code>.boto</code>, no en la del <code>:hover</code>. Para el teclado, escribe <code>, .boto:focus</code> justo antes de la llave <code>{</code> del <code>:hover</code>." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi',
          q: "Al mòbil, els botons del menú són petits i costa encertar-los amb el dit. Escriu un <code>@media (max-width: 600px)</code> on <code>.boto</code> tingui <code>display: block</code> (cada botó ocupa tota l'amplada) i més <code>padding</code>.|En el móvil, los botones del menú son pequeños y cuesta acertarlos con el dedo. Escribe un <code>@media (max-width: 600px)</code> donde <code>.boto</code> tenga <code>display: block</code> (cada botón ocupa todo el ancho) y más <code>padding</code>.",
          html: J(MENU), css: MENU_CSS + '\n', tab: 'css',
          snips: ['@media (max-width: 600px) {\n  .boto {\n    |\n  }\n}', 'display: block;', 'padding: 14px;', 'text-align: center;'],
          checks: [{ k: 'media', max: 600 }, { k: 'css', s: '.boto', p: 'display', v: 'block', media: true, txt: 'Al mòbil, <code>.boto</code> té <code>display: block</code>|En el móvil, <code>.boto</code> tiene <code>display: block</code>' }, { k: 'css', s: '.boto', p: 'padding', media: true, txt: 'Al mòbil, <code>.boto</code> té més <code>padding</code>|En el móvil, <code>.boto</code> tiene más <code>padding</code>' }, { k: 'cssclean' }],
          sol: { css: MENU_CSS + '\n@media (max-width: 600px) {\n  .boto {\n    display: block;\n    padding: 14px;\n    margin-bottom: 8px;\n    font-size: 18px;\n    text-align: center;\n  }\n}' },
          hint: "Dins del <code>@media</code> torna a escriure <code>.boto { … }</code> només amb el que canvia al mòbil.|Dentro del <code>@media</code> vuelve a escribir <code>.boto { … }</code> solo con lo que cambia en el móvil." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi/festes',
          q: "Aquest botó té <b>dos errors</b>: el text no surt blanc i el canvi de color no és suau. Troba'ls i arregla'ls!|Este botón tiene <b>dos errores</b>: el texto no sale blanco y el cambio de color no es suave. ¡Encuéntralos y arréglalos!",
          html: J(FESTA), css: '.boto {\n  display: inline-block;\n  background: #E5489A\n  color: white;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n  trasition: background 0.3s;\n}\n.boto:hover {\n  background: #B02A6E;\n}', tab: 'css',
          checks: [{ k: 'css', s: '.boto', p: 'color', v: 'white', txt: 'El text del botó és blanc (<code>color: white</code>)|El texto del botón es blanco (<code>color: white</code>)' }, { k: 'css', s: '.boto', p: 'transition', txt: '<code>.boto</code> té <code>transition</code> ben escrit|<code>.boto</code> tiene <code>transition</code> bien escrito' }, { k: 'css', s: '.boto:hover', p: 'background' }, { k: 'cssclean' }],
          sol: { css: '.boto {\n  display: inline-block;\n  background: #E5489A;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n  transition: background 0.3s;\n}\n.boto:hover {\n  background: #B02A6E;\n}' },
          hint: "Mira el final de cada línia: falta algun punt i coma? I llegeix lletra a lletra el nom de cada propietat.|Mira el final de cada línea: ¿falta algún punto y coma? Y lee letra a letra el nombre de cada propiedad." },
        { k: 'wcreate', ph: 'crea', name: 'El menú de la guia|El menú de la guía', url: 'guia-lleida.numi',
          q: "Crea el menú de la teva guia: un títol i un <code>&lt;nav&gt;</code> amb <b>almenys 3 botons</b> (<code>a class=\"boto\"</code>) que portin a seccions (<code>#llocs</code>, <code>#festes</code>, <code>#menjar</code>…). Els botons han de reaccionar amb <code>:hover</code>, canviar amb suavitat i fer-se grans al mòbil.|Crea el menú de tu guía: un título y un <code>&lt;nav&gt;</code> con <b>al menos 3 botones</b> (<code>a class=\"boto\"</code>) que lleven a secciones (<code>#llocs</code>, <code>#festes</code>, <code>#menjar</code>…). Los botones tienen que reaccionar con <code>:hover</code>, cambiar con suavidad y hacerse grandes en el móvil.",
          crit: ["Títol i un nav amb 3 botons o més|Título y un nav con 3 botones o más", "Els botons porten a seccions (#…)|Los botones llevan a secciones (#…)", ":hover i transition|:hover y transition", "Al mòbil, botons grans (@media)|En el móvil, botones grandes (@media)"],
          html: C('<h1>Guia de Lleida</h1>\n', '<h1>Guía de Lleida</h1>\n'), css: '',
          snips: ['<nav>\n  |\n</nav>', '<a class="boto" href="#|"></a>', '.boto:hover {\n  |\n}', '@media (max-width: 600px) {\n  |\n}'],
          checks: [{ k: 'tag', t: 'h1' }, { k: 'in', t: 'a', p: 'nav', min: 3 }, { k: 'class', c: 'boto', min: 3 }, { k: 'link', href: '/^#./', min: 3, txt: 'Almenys 3 enllaços a seccions (<code>#…</code>)|Al menos 3 enlaces a secciones (<code>#…</code>)' },
            { k: 'css', s: '.boto:hover', txt: 'Una regla <code>.boto:hover</code>|Una regla <code>.boto:hover</code>' }, { k: 'css', s: '.boto', p: 'transition' }, { k: 'css', s: '.boto', media: true, txt: 'Una regla per a <code>.boto</code> dins del <code>@media</code>|Una regla para <code>.boto</code> dentro del <code>@media</code>' }, { k: 'clean' }, { k: 'cssclean' }],
          sol: { html: J(P('<h1>Guia de Lleida</h1>\n', '<h1>Guía de Lleida</h1>\n'), MENU), css: 'h1 {\n  color: #147A47;\n}\n' + MENU_CSS + '\n@media (max-width: 600px) {\n  .boto {\n    display: block;\n    padding: 14px;\n    font-size: 18px;\n    text-align: center;\n  }\n}' } },
        { k: 'quiz', ph: 'tanca', q: "Per què al mòbil no hem d'amagar res important darrere d'un <code>:hover</code>?|¿Por qué en el móvil no hay que esconder nada importante detrás de un <code>:hover</code>?",
          opts: ["Perquè al mòbil no hi ha un ratolí que passi per sobre|Porque en el móvil no hay un ratón que pase por encima", "Perquè el :hover gasta molta bateria|Porque el :hover gasta mucha batería", "Perquè al mòbil el CSS no funciona|Porque en el móvil el CSS no funciona"], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Quina declaració fa que el canvi de color d'un botó duri <b>mig segon</b>?|¿Qué declaración hace que el cambio de color de un botón dure <b>medio segundo</b>?",
          opts: ['<code>transition: background 0.5s;</code>|<code>transition: background 0.5s;</code>', '<code>hover: 0.5s;</code>|<code>hover: 0.5s;</code>', '<code>background: slow;</code>|<code>background: slow;</code>'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* =================================================================================================================
       Sessió 3 · Detecta la web falsa: l'adreça (el domini), el candau, les presses i els errors; què fer
       ================================================================================================================= */
    { id: 'w7-3', t: 'Detecta la web falsa|Detecta la web falsa', min: 45, badge: 'w_detectiu',
      learn: ["Per saber de qui és una web, mira el domini: s'acaba just abans de la primera barra «/».|Para saber de quién es una web, mira el dominio: termina justo antes de la primera barra «/».",
        "El candau vol dir que la connexió va xifrada, però no que la web sigui de confiança.|El candado quiere decir que la conexión va cifrada, pero no que la web sea de confianza.",
        "Presses, premis massa bons, errors i peticions de contrasenyes són senyals d'alerta: atura't i pregunta a un adult.|Prisas, premios demasiado buenos, errores y peticiones de contraseñas son señales de alerta: párate y pregunta a un adulto."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Què fa <code>transition: background 0.3s;</code> en un botó?|¿Qué hace <code>transition: background 0.3s;</code> en un botón?",
          opts: ["Fa que el canvi de color sigui suau, en 0,3 segons|Hace que el cambio de color sea suave, en 0,3 segundos", "Canvia el color del botó cada 0,3 segons|Cambia el color del botón cada 0,3 segundos", "Amaga el botó durant 0,3 segons|Esconde el botón durante 0,3 segundos"], a: 0 },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'lab', mood: 'happy', t: "BIP BIP! M'ha arribat un missatge: «🎁 <b>Has guanyat una consola!</b> Entra ara a <code>fotonuvi-regals.xyz</code> abans que s'acabi el temps!». Hi faig clic? Hi faig clic?|¡BIP BIP! Me ha llegado un mensaje: «🎁 <b>¡Has ganado una consola!</b> ¡Entra ahora en <code>fotonuvi-regals.xyz</code> antes de que se acabe el tiempo!». ¿Hago clic? ¿Hago clic?" },
        { k: 'story', ph: 'missio', who: 'numi', t: "Espera, Bit! Hi ha <b>webs falses</b> que imiten webs de veritat per aconseguir contrasenyes, dades o diners. Qui s'hi deixa enganyar no és ximple: estan fetes per semblar reals! Per això avui aprendràs un <b>mètode de detectiu/iva</b>: mirar l'adreça, el candau, les presses i els errors.|¡Espera, Bit! Hay <b>webs falsas</b> que imitan webs de verdad para conseguir contraseñas, datos o dinero. Quien se deja engañar no es tonto: ¡están hechas para parecer reales! Por eso hoy aprenderás un <b>método de detective</b>: mirar la dirección, el candado, las prisas y los errores." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: "L'adreça|La dirección", t: 'De qui és aquesta web?|¿De quién es esta web?', anim: 'w7url',
            x: "A la barra d'adreces, el <span class='hl'>domini</span> és el tros que s'acaba just abans de la primera barra <code>/</code>. I el que compta és el <b>final</b> del domini: a <code>fotonuvi.numi.regals.xyz/album</code>, la web és de <b>regals.xyz</b>, encara que al principi hi posi «fotonuvi».|En la barra de direcciones, el <span class='hl'>dominio</span> es el trozo que termina justo antes de la primera barra <code>/</code>. Y lo que cuenta es el <b>final</b> del dominio: en <code>fotonuvi.numi.regals.xyz/album</code>, la web es de <b>regals.xyz</b>, aunque al principio ponga «fotonuvi».",
            tip: "Compte amb les lletres que s'assemblen: <code>fotonuvi.numi</code> i <code>f0tonuvi.numi</code> (amb un zero) són webs diferents.|Cuidado con las letras que se parecen: <code>fotonuvi.numi</code> y <code>f0tonuvi.numi</code> (con un cero) son webs diferentes." },
          { k: 'El candau|El candado', t: 'Què vol dir el candau?|¿Qué significa el candado?', anim: 'w7lock',
            x: "Quan l'adreça comença per <code>https</code>, molts navegadors hi mostren un candau 🔒 (o una icona semblant): vol dir que el que envies <b>viatja xifrat</b> i ningú no ho pot llegir pel camí. Però <b>no</b> diu si la web és bona: una web falsa també pot tenir candau. I si no hi ha <code>https</code> (el navegador sovint hi posa «No segur»), no hi escriguis cap dada.|Cuando la dirección empieza por <code>https</code>, muchos navegadores muestran un candado 🔒 (o un icono parecido): quiere decir que lo que envías <b>viaja cifrado</b> y nadie lo puede leer por el camino. Pero <b>no</b> dice si la web es buena: una web falsa también puede tener candado. Y si no hay <code>https</code> (el navegador a menudo pone «No seguro»), no escribas ningún dato.",
            bad: "Té candau, per tant és de confiança.|Tiene candado, por lo tanto es de confianza.", good: "Té candau: el camí és xifrat. Ara miro també l'adreça i els altres senyals.|Tiene candado: el camino está cifrado. Ahora miro también la dirección y las otras señales." },
          { k: 'Les presses|Las prisas', t: 'Si et posen pressa, frena|Si te meten prisa, frena', pic: 'img/ment/rel.webp',
            x: "Les webs falses volen que decideixis <b>sense pensar</b>: comptes enrere, «només avui», «queden 2 unitats», «ets el visitant un milió»… Una web de veritat no t'obliga a decidir en 30 segons. Quan notis pressa, és el moment de parar.|Las webs falsas quieren que decidas <b>sin pensar</b>: cuentas atrás, «solo hoy», «quedan 2 unidades», «eres el visitante un millón»… Una web de verdad no te obliga a decidir en 30 segundos. Cuando notes prisa, es el momento de parar.",
            tip: "Si un premi sembla massa bo per ser veritat, segurament no ho és.|Si un premio parece demasiado bueno para ser verdad, seguramente no lo es." },
          { k: 'Els detalls|Los detalles', t: 'Errors i peticions estranyes|Errores y peticiones extrañas', media: { k: 'web', html: C('<h1>FotoNubi</h1>\n<p>Benvingut! Verifica la teva compte ara mateix.</p>\n<p>Escriu la contrasenya del correu:</p>\n<input>', '<h1>FotoNubi</h1>\n<p>¡Bienvenido! Berifica tu cuenta ahora mismo.</p>\n<p>Escribe la contraseña del correo:</p>\n<input>'), css: 'h1 {\n  color: #2F6BFF;\n  font-style: italic;\n}' },
            x: "Aquesta pàgina imita FotoNuvi, però el nom diu «FotoNu<b>b</b>i», té una falta («la teva compte») i et demana la contrasenya! Mira-ho com un/a detectiu/iva: <b>faltes d'ortografia</b>, logotips borrosos o una mica diferents, enllaços que no porten enlloc… I sobretot: <b>cap web no t'ha de demanar la contrasenya del correu</b>, ni la targeta dels pares, ni la teva adreça per enviar-te un premi que no has demanat.|Esta página imita FotoNuvi, pero el nombre dice «FotoNu<b>b</b>i», tiene una falta («Berifica») ¡y te pide la contraseña! Míralo como un/a detective: <b>faltas de ortografía</b>, logotipos borrosos o un poco diferentes, enlaces que no llevan a ninguna parte… Y sobre todo: <b>ninguna web te tiene que pedir la contraseña del correo</b>, ni la tarjeta de tus padres, ni tu dirección para enviarte un premio que no has pedido." },
          { k: 'Què fer?|¿Qué hacer?', t: "Atura't, pensa, pregunta|Párate, piensa, pregunta", pic: 'img/ment/atu.webp',
            x: "Si alguna cosa no et quadra: <b>1.</b> no escriguis ni descarreguis res; <b>2.</b> tanca la pestanya; <b>3.</b> explica-ho a un adult de confiança. I si ja havies fet clic o escrit alguna dada, <b>explica-ho igualment</b>: no t'hi has de sentir malament, i com més aviat ho sàpiga un adult, més aviat ho podreu arreglar junts (per exemple, canviant la contrasenya).|Si algo no te cuadra: <b>1.</b> no escribas ni descargues nada; <b>2.</b> cierra la pestaña; <b>3.</b> cuéntaselo a un adulto de confianza. Y si ya habías hecho clic o escrito algún dato, <b>cuéntalo igualmente</b>: no tienes que sentirte mal, y cuanto antes lo sepa un adulto, antes lo podréis arreglar juntos (por ejemplo, cambiando la contraseña).",
            tip: "Demanar ajuda no és de persones despistades: és el que fan els experts en seguretat.|Pedir ayuda no es de personas despistadas: es lo que hacen los expertos en seguridad." }
        ] },
        { k: 'seq', ph: 'mans', q: "Una web et sembla sospitosa. <b>Ordena què fas.</b>|Una web te parece sospechosa. <b>Ordena qué haces.</b>",
          items: ["M'aturo: no toco cap botó ni escric res|Me paro: no toco ningún botón ni escribo nada", "Miro l'adreça: quin és el domini de veritat?|Miro la dirección: ¿cuál es el dominio de verdad?", "Tanco la pestanya|Cierro la pestaña", "Ho explico a un adult de confiança|Se lo cuento a un adulto de confianza"],
          ex: "Primer frenar, després pensar i, sempre, compartir-ho amb un adult.|Primero frenar, después pensar y, siempre, compartirlo con un adulto." },
        { k: 'unplug', ph: 'mans', ico: '🕵️', title: 'Detectius de webs|Detectives de webs',
          t: "Amb un adult de casa, mireu juntes 2 webs que feu servir sovint (la de l'escola, la de la biblioteca…).|Con un adulto de casa, mirad juntos 2 webs que uséis a menudo (la del colegio, la de la biblioteca…).",
          steps: ["Busqueu el domini a la barra d'adreces: on s'acaba?|Buscad el dominio en la barra de direcciones: ¿dónde termina?",
            "Hi ha candau o la icona de l'<code>https</code>? Què diu el navegador si hi toqueu?|¿Hay candado o el icono del <code>https</code>? ¿Qué dice el navegador si lo tocáis?",
            "En un paper, inventeu una adreça falsa que s'assembli molt a la de veritat (canviant una lletra o afegint-hi paraules). Us costaria veure la diferència?|En un papel, inventad una dirección falsa que se parezca mucho a la de verdad (cambiando una letra o añadiendo palabras). ¿Os costaría ver la diferencia?",
            "Acordeu una norma de casa: què fem si una web ens demana dades o ens posa pressa?|Acordad una norma de casa: ¿qué hacemos si una web nos pide datos o nos mete prisa?"],
          tip: "No cal entrar a cap web estranya per practicar: n'hi ha prou amb inventar les adreces en un paper.|No hace falta entrar en ninguna web extraña para practicar: basta con inventar las direcciones en un papel." },
        { k: 'quiz', ph: 'prova', q: "FotoNuvi és una web (inventada) per desar fotos, i el seu domini és <code>fotonuvi.numi</code>. Quina d'aquestes adreces és <b>de veritat</b> de FotoNuvi?|FotoNuvi es una web (inventada) para guardar fotos, y su dominio es <code>fotonuvi.numi</code>. ¿Cuál de estas direcciones es <b>de verdad</b> de FotoNuvi?",
          opts: ['<code>https://fotonuvi.numi/album</code>|<code>https://fotonuvi.numi/album</code>', '<code>https://fotonuvi.numi.regals.xyz/album</code>|<code>https://fotonuvi.numi.regals.xyz/album</code>', '<code>https://f0tonuvi.numi/album</code>|<code>https://f0tonuvi.numi/album</code>'], a: 0,
          ex: "La segona és de <b>regals.xyz</b> (mira el final del domini) i la tercera té un zero en lloc de la «o».|La segunda es de <b>regals.xyz</b> (mira el final del dominio) y la tercera tiene un cero en lugar de la «o»." },
        { k: 'quiz', ph: 'prova', q: "Una web té el candau 🔒 i l'adreça comença per <code>https</code>. Què en saps <b>segur</b>?|Una web tiene el candado 🔒 y la dirección empieza por <code>https</code>. ¿Qué sabes <b>seguro</b>?",
          opts: ["Que el que hi enviï viatja xifrat, però no si la web és de confiança|Que lo que envíe viaja cifrado, pero no si la web es de confianza", "Que la web és segura i hi puc posar la contrasenya|Que la web es segura y puedo poner la contraseña", "Que la web és d'una empresa coneguda|Que la web es de una empresa conocida"], a: 0,
          ex: "El candau protegeix el camí, no et diu qui hi ha a l'altra banda.|El candado protege el camino, no te dice quién hay al otro lado." },
        { k: 'wspot', ph: 'investiga', q: "Aquesta pàgina és d'una web falsa. <b>Toca la línia que demana una cosa que MAI has de donar a cap web.</b>|Esta página es de una web falsa. <b>Toca la línea que pide algo que NUNCA tienes que dar a ninguna web.</b>",
          html: C('<h1>HAS GUANYAT UNA CONSOLA!!!</h1>\n<p>Ets el visitant número 1.000.000.</p>\n<p>Nomes queden 30 segons!</p>\n<p>Escriu la contrasenya del teu correu: <input></p>\n<button>Vull el premi</button>', '<h1>HAS GANADO UNA CONSOLA!!!</h1>\n<p>Eres el visitante número 1.000.000.</p>\n<p>Solo kedan 30 segundos!</p>\n<p>Escribe la contraseña de tu correo: <input></p>\n<button>Quiero el premio</button>'), bad: 4,
          ex: "La contrasenya del correu és només teva: cap web de premis no la necessita. A més, la pàgina té pressa («30 segons»), una falta («Nomes») i un premi massa bo.|La contraseña del correo es solo tuya: ninguna web de premios la necesita. Además, la página tiene prisa («30 segundos»), una falta («kedan») y un premio demasiado bueno." },
        { k: 'wspot', ph: 'investiga', q: "Aquesta web vol semblar la de la biblioteca. <b>Toca la línia on hi ha una falta d'ortografia i, a més, et posen pressa.</b>|Esta web quiere parecer la de la biblioteca. <b>Toca la línea donde hay una falta de ortografía y, además, te meten prisa.</b>",
          html: C('<h1>Biblioteca Municipal</h1>\n<p>Renova els teus llibres des de casa.</p>\n<p>Atenció: la teva targeta de la Bibloteca caduca avui!</p>\n<a href="#">Entra amb el correu i la contrasenya</a>', '<h1>Biblioteca Municipal</h1>\n<p>Renueva tus libros desde casa.</p>\n<p>Atención: ¡tu tarjeta de la Bibloteca caduca hoy!</p>\n<a href="#">Entra con el correo y la contraseña</a>'), bad: 3,
          ex: "«Bibloteca» està mal escrit (és «Biblioteca») i «caduca avui» et vol fer anar de pressa. Dos senyals en una sola línia!|«Bibloteca» está mal escrito (es «Biblioteca») y «caduca hoy» te quiere hacer ir deprisa. ¡Dos señales en una sola línea!" },
        { k: 'wquiz', ph: 'investiga', q: "Quina d'aquestes tres pàgines té <b>més senyals</b> de ser una web falsa?|¿Cuál de estas tres páginas tiene <b>más señales</b> de ser una web falsa?",
          opts: [{ html: C('<h2>Biblioteca</h2><p>Horari: de 9 a 20 h.</p><p>Novetats del mes</p>', '<h2>Biblioteca</h2><p>Horario: de 9 a 20 h.</p><p>Novedades del mes</p>'), css: 'body{background:#F3F7FF}h2{color:#1A3FB0;margin:0 0 6px}p{margin:4px 0}' },
            { html: C('<h2>HAS GUANYAT!!!</h2><p>Queden 00:29</p><p>Posa la contrasenya</p>', '<h2>HAS GANADO!!!</h2><p>Quedan 00:29</p><p>Pon la contraseña</p>'), css: 'body{background:#FFE600}h2{color:#E00000;margin:0 0 6px}p{margin:4px 0;font-weight:bold;color:#E00000}' },
            { html: C('<h2>Escola Numi</h2><p>Menú de la setmana</p><p>Excursió: dijous</p>', '<h2>Escuela Numi</h2><p>Menú de la semana</p><p>Excursión: jueves</p>'), css: 'body{background:#EFFAF3}h2{color:#147A47;margin:0 0 6px}p{margin:4px 0}' }], a: 1,
          ex: "Un premi que no has demanat, un compte enrere i una petició de contrasenya: tres senyals d'alerta alhora.|Un premio que no has pedido, una cuenta atrás y una petición de contraseña: tres señales de alerta a la vez." },
        { k: 'move', ph: 'pausa', secs: 30, t: "Semàfor detectiu! Llegeix cada frase en veu alta. Si és normal, <b>fes un salt</b>; si és sospitosa, <b>creua els braços i queda't quiet/a</b>: «Horari de la piscina» · «Has guanyat un mòbil!» · «Només queden 10 segons!» · «Menú de l'escola» · «Escriu aquí la teva contrasenya».|¡Semáforo detective! Lee cada frase en voz alta. Si es normal, <b>da un salto</b>; si es sospechosa, <b>cruza los brazos y quédate quieto/a</b>: «Horario de la piscina» · «¡Has ganado un móvil!» · «¡Solo quedan 10 segundos!» · «Menú del colegio» · «Escribe aquí tu contraseña»." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi/avis', tabs: ['html'],
          q: "La guia tindrà una targeta d'avís per als estudiants d'intercanvi. Dins del <code>div.avis</code>, escriu un títol <code>h2</code> («Abans de fer clic, mira…») i una llista <code>ul</code> amb els <b>4 senyals</b>: l'adreça, el candau, les presses i els errors.|La guía tendrá una tarjeta de aviso para los estudiantes de intercambio. Dentro del <code>div.avis</code>, escribe un título <code>h2</code> («Antes de hacer clic, mira…») y una lista <code>ul</code> con las <b>4 señales</b>: la dirección, el candado, las prisas y los errores.",
          html: '<div class="avis">\n  \n</div>', snips: ['<h2>|</h2>', '<ul>\n    |\n  </ul>', '<li>|</li>'],
          checks: [{ k: 'in', t: 'h2', p: 'div', txt: 'Hi ha un <code>&lt;h2&gt;</code> dins de la targeta|Hay un <code>&lt;h2&gt;</code> dentro de la tarjeta' }, { k: 'in', t: 'li', p: 'ul', min: 4 }, { k: 'clean' }],
          sol: { html: J(AVIS) }, hint: "Primer el <code>&lt;h2&gt;</code>; després <code>&lt;ul&gt;</code> i, a dins, un <code>&lt;li&gt;</code> per a cada senyal.|Primero el <code>&lt;h2&gt;</code>; después <code>&lt;ul&gt;</code> y, dentro, un <code>&lt;li&gt;</code> para cada señal." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi/avis',
          q: "Ara fes que es vegi que és un avís: a la regla <code>.avis</code>, posa-hi un fons de color suau (<code>background</code>), una vora (<code>border</code>) i vores arrodonides (<code>border-radius</code>).|Ahora haz que se vea que es un aviso: en la regla <code>.avis</code>, ponle un fondo de color suave (<code>background</code>), un borde (<code>border</code>) y bordes redondeados (<code>border-radius</code>).",
          html: J(AVIS), css: '.avis {\n  \n}', tab: 'css', snips: ['background: #FFF8E1;', 'border: 3px solid #FFC531;', 'border-radius: 14px;'],
          checks: [{ k: 'css', s: '.avis', p: 'background', txt: '<code>.avis</code> té <code>background</code>|<code>.avis</code> tiene <code>background</code>' }, { k: 'css', s: '.avis', p: 'border', txt: '<code>.avis</code> té <code>border</code>|<code>.avis</code> tiene <code>border</code>' }, { k: 'css', s: '.avis', p: 'border-radius', txt: '<code>.avis</code> té <code>border-radius</code>|<code>.avis</code> tiene <code>border-radius</code>' }, { k: 'cssclean' }],
          sol: { css: AVIS_CSS }, hint: "Una vora necessita tres coses: gruix, estil i color. Per exemple, <code>border: 3px solid #FFC531;</code>.|Un borde necesita tres cosas: grosor, estilo y color. Por ejemplo, <code>border: 3px solid #FFC531;</code>." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi/avis',
          q: "Afegeix sota la llista un botó «Ho he entès» (<code>&lt;a class=\"boto\" href=\"#inici\"&gt;</code>) amb estil, <code>:hover</code> i <code>transition</code>. I fes que al mòbil el text de la llista (<code>li</code>) sigui més gran, dins d'un <code>@media</code>.|Añade debajo de la lista un botón «Lo he entendido» (<code>&lt;a class=\"boto\" href=\"#inici\"&gt;</code>) con estilo, <code>:hover</code> y <code>transition</code>. Y haz que en el móvil el texto de la lista (<code>li</code>) sea más grande, dentro de un <code>@media</code>.",
          html: J(AVIS), css: AVIS_CSS + '\n',
          snips: [C('<a class="boto" href="#inici">Ho he entès</a>', '<a class="boto" href="#inici">Lo he entendido</a>'), '.boto:hover {\n  |\n}', '@media (max-width: 600px) {\n  li {\n    font-size: |;\n  }\n}'],
          checks: [{ k: 'class', c: 'boto' }, { k: 'css', s: '.boto:hover', txt: 'Una regla <code>.boto:hover</code>|Una regla <code>.boto:hover</code>' }, { k: 'css', s: '.boto', p: 'transition' }, { k: 'css', s: 'li', p: 'font-size', media: true, txt: 'Al mòbil, <code>li</code> té <code>font-size</code>|En el móvil, <code>li</code> tiene <code>font-size</code>' }, { k: 'clean' }, { k: 'cssclean' }],
          sol: { html: J(AVIS_BTN), css: AVIS_CSS + '\n' + BTN + '\n.boto {\n  transition: background 0.3s;\n}\n.boto:hover, .boto:focus {\n  background: #1A3FB0;\n}\n@media (max-width: 600px) {\n  li {\n    font-size: 18px;\n  }\n}' },
          hint: "El botó va a la pestanya HTML, abans de <code>&lt;/div&gt;</code>. L'estil, el <code>:hover</code> i el <code>@media</code>, a la pestanya CSS.|El botón va en la pestaña HTML, antes de <code>&lt;/div&gt;</code>. El estilo, el <code>:hover</code> y el <code>@media</code>, en la pestaña CSS." },
        { k: 'wcreate', ph: 'crea', name: 'El detector de webs falses|El detector de webs falsas', url: 'guia-lleida.numi/avis',
          q: "Crea una pàgina per explicar als companys/es com es detecta una web falsa: un títol, <b>almenys 4 consells</b> (cadascun dins d'un <code>div.consell</code>, amb un <code>h2</code> i un <code>p</code>) i un botó amb <code>:hover</code>. I s'ha de veure bé al mòbil!|Crea una página para explicar a los compañeros/as cómo se detecta una web falsa: un título, <b>al menos 4 consejos</b> (cada uno dentro de un <code>div.consell</code>, con un <code>h2</code> y un <code>p</code>) y un botón con <code>:hover</code>. ¡Y se tiene que ver bien en el móvil!",
          crit: ["Un títol i 4 consells amb h2 i p|Un título y 4 consejos con h2 y p", "Els consells tenen estil (.consell)|Los consejos tienen estilo (.consell)", "Un botó amb :hover|Un botón con :hover", "Una regla @media per al mòbil|Una regla @media para el móvil"],
          html: '<h1>Detecta la web falsa</h1>\n', css: '',
          snips: ['<div class="consell">\n  <h2>|</h2>\n  <p></p>\n</div>', '<a class="boto" href="#inici">|</a>', '@media (max-width: 600px) {\n  |\n}'],
          checks: [{ k: 'tag', t: 'h1' }, { k: 'class', c: 'consell', min: 4 }, { k: 'tag', t: 'h2', min: 4 }, { k: 'tag', t: 'p', min: 4 }, { k: 'css', s: '.consell', txt: 'Una regla per a <code>.consell</code>|Una regla para <code>.consell</code>' }, { k: 'class', c: 'boto' }, { k: 'css', s: '.boto:hover', txt: 'Una regla <code>.boto:hover</code>|Una regla <code>.boto:hover</code>' }, { k: 'media', max: 600 }, { k: 'clean' }, { k: 'cssclean' }],
          sol: { html: C('<h1>Detecta la web falsa</h1>\n<div class="consell">\n  <h2>1. Mira l\'adreça</h2>\n  <p>El domini s\'acaba a la primera barra. De qui és de veritat?</p>\n</div>\n<div class="consell">\n  <h2>2. El candau no ho és tot</h2>\n  <p>Vol dir que el camí és xifrat, no que la web sigui bona.</p>\n</div>\n<div class="consell">\n  <h2>3. Si et posen pressa, frena</h2>\n  <p>Comptes enrere i premis massa bons són senyals d\'alerta.</p>\n</div>\n<div class="consell">\n  <h2>4. Mai la contrasenya</h2>\n  <p>Si et demanen dades, tanca la pestanya i explica-ho a un adult.</p>\n</div>\n<a class="boto" href="#inici">Ho he entès</a>', '<h1>Detecta la web falsa</h1>\n<div class="consell">\n  <h2>1. Mira la dirección</h2>\n  <p>El dominio termina en la primera barra. ¿De quién es de verdad?</p>\n</div>\n<div class="consell">\n  <h2>2. El candado no lo es todo</h2>\n  <p>Quiere decir que el camino está cifrado, no que la web sea buena.</p>\n</div>\n<div class="consell">\n  <h2>3. Si te meten prisa, frena</h2>\n  <p>Cuentas atrás y premios demasiado buenos son señales de alerta.</p>\n</div>\n<div class="consell">\n  <h2>4. Nunca la contraseña</h2>\n  <p>Si te piden datos, cierra la pestaña y cuéntaselo a un adulto.</p>\n</div>\n<a class="boto" href="#inici">Lo he entendido</a>'),
            css: '.consell {\n  background: #FFF8E1;\n  border-left: 6px solid #FFC531;\n  padding: 4px 12px;\n  margin-bottom: 10px;\n  border-radius: 8px;\n}\n' + BTN + '\n.boto:hover {\n  background: #1A3FB0;\n}\n@media (max-width: 600px) {\n  h1 {\n    font-size: 26px;\n  }\n}' } },
        { k: 'quiz', ph: 'tanca', q: "Mires vídeos i surt una finestra: «Has guanyat un mòbil! Escriu les dades dels teus pares en 1 minut». Què fas?|Miras vídeos y sale una ventana: «¡Has ganado un móvil! Escribe los datos de tus padres en 1 minuto». ¿Qué haces?",
          opts: ["La tanco sense escriure res i ho explico a un adult|La cierro sin escribir nada y se lo cuento a un adulto", "Hi poso les dades de pressa, abans que s'acabi el temps|Pongo los datos deprisa, antes de que se acabe el tiempo", "La comparteixo amb els amics perquè també guanyin|La comparto con los amigos para que también ganen"], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "A l'adreça <code>https://fotonuvi.numi.regals.xyz/entra</code>, de qui és la web de veritat?|En la dirección <code>https://fotonuvi.numi.regals.xyz/entra</code>, ¿de quién es la web de verdad?",
          opts: ['<code>regals.xyz</code>|<code>regals.xyz</code>', '<code>fotonuvi.numi</code>|<code>fotonuvi.numi</code>', '<code>entra</code>|<code>entra</code>'], a: 0,
          ex: "El domini s'acaba a la primera <code>/</code>, i l'amo és el final del domini: <b>regals.xyz</b>.|El dominio termina en la primera <code>/</code>, y el dueño es el final del dominio: <b>regals.xyz</b>." },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* =================================================================================================================
       Sessió 4 · Projecte: la guia de Lleida (capçalera i menú, llocs, estil, mòbil i la guia completa)
       ================================================================================================================= */
    { id: 'w7-4', t: 'Projecte: la guia de Lleida|Proyecto: la guía de Lleida', min: 45, proj: true, badge: 'w_guia',
      learn: ["Abans de programar una web es planifica: per a qui és, quines seccions té i com es veurà al mòbil.|Antes de programar una web se planifica: para quién es, qué secciones tiene y cómo se verá en el móvil.",
        "Una guia de veritat només hi posa fets segurs i en cita les fonts.|Una guía de verdad solo pone hechos seguros y cita sus fuentes.",
        "Amb HTML ben ordenat, CSS, flex, @media i botons amb :hover es fa una web completa per al mòbil.|Con HTML bien ordenado, CSS, flex, @media y botones con :hover se hace una web completa para el móvil."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Quina etiqueta fa que el mòbil faci servir la seva amplada de veritat?|¿Qué etiqueta hace que el móvil use su anchura de verdad?",
          opts: ['<code>&lt;meta name="viewport" …&gt;</code>|<code>&lt;meta name="viewport" …&gt;</code>', '<code>&lt;title&gt;</code>|<code>&lt;title&gt;</code>', '<code>&lt;nav&gt;</code>|<code>&lt;nav&gt;</code>'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: "Una web et diu: «Només queden 20 segons per reclamar el premi!». Què és això?|Una web te dice: «¡Solo quedan 20 segundos para reclamar el premio!». ¿Qué es esto?",
          opts: ["Un senyal d'alerta: et volen fer decidir sense pensar|Una señal de alerta: te quieren hacer decidir sin pensar", "Una prova que la web és de confiança|Una prueba de que la web es de confianza", "Un error de l'ordinador|Un error del ordenador"], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'poble', t: "Ha arribat el dia: construireu <b>la guia de Lleida</b> per als estudiants d'intercanvi! Tindrà una capçalera amb un menú de botons, els llocs per visitar amb fotos, les festes i el menjar. I, és clar, s'ha de veure perfecta al mòbil, que és on la faran servir.|Ha llegado el día: ¡construiréis <b>la guía de Lleida</b> para los estudiantes de intercambio! Tendrá una cabecera con un menú de botones, los lugares para visitar con fotos, las fiestas y la comida. Y, claro, se tiene que ver perfecta en el móvil, que es donde la usarán." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El pla|El plan', t: 'Primer el pla, després el codi|Primero el plan, después el código', pic: 'img/ment/nom.webp',
            x: "Els bons dissenyadors no comencen escrivint codi. Primer responen tres preguntes: <b>per a qui</b> és la web (estudiants que no coneixen Lleida), <b>quines seccions</b> tindrà (llocs, festes, menjar) i <b>com es veurà al mòbil</b> (un esbós en paper).|Los buenos diseñadores no empiezan escribiendo código. Primero responden tres preguntas: <b>para quién</b> es la web (estudiantes que no conocen Lleida), <b>qué secciones</b> tendrá (lugares, fiestas, comida) y <b>cómo se verá en el móvil</b> (un boceto en papel)." },
          { k: 'Fets segurs|Hechos seguros', t: 'Una guia diu la veritat|Una guía dice la verdad', media: { k: 'web', html: C('<div class="targeta">\n  <img src="img/tech/web/seu-vella.svg" alt="La Seu Vella dalt del turó">\n  <h3>La Seu Vella</h3>\n  <p>La catedral antiga, dalt del turó.</p>\n</div>', '<div class="targeta">\n  <img src="img/tech/web/seu-vella.svg" alt="La Seu Vella en lo alto del cerro">\n  <h3>La Seu Vella</h3>\n  <p>La catedral antigua, en lo alto del cerro.</p>\n</div>'), css: '.targeta {\n  background: #FFF4D6;\n  padding: 10px;\n  border-radius: 12px;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}' },
            x: "En una guia només hi posem <b>fets que sabem segurs</b>. Si dubtes d'alguna cosa, busca-la amb un adult en una font fiable i <b>cita la font</b> al peu de la pàgina, com vas aprendre a la unitat 3. I no t'oblidis de l'<code>alt</code> de cada imatge: també és per als que no la poden veure.|En una guía solo ponemos <b>hechos que sabemos seguros</b>. Si dudas de algo, búscalo con un adulto en una fuente fiable y <b>cita la fuente</b> al pie de la página, como aprendiste en la unidad 3. Y no te olvides del <code>alt</code> de cada imagen: también es para quienes no la pueden ver." },
          { k: 'Les peces|Las piezas', t: 'Tot el que ja saps|Todo lo que ya sabes', anim: 'w7resp',
            x: "La guia fa servir tot el curs: <code>&lt;header&gt;</code> amb el títol i un <code>&lt;nav&gt;</code> de botons; <code>&lt;section id=\"llocs\"&gt;</code> perquè els botons hi portin; targetes en fila amb <code>flex</code>; <code>:hover</code> i <code>transition</code>; i un <code>@media</code> perquè al mòbil tot vagi en columna.|La guía usa todo el curso: <code>&lt;header&gt;</code> con el título y un <code>&lt;nav&gt;</code> de botones; <code>&lt;section id=\"llocs\"&gt;</code> para que los botones lleven allí; tarjetas en fila con <code>flex</code>; <code>:hover</code> y <code>transition</code>; y un <code>@media</code> para que en el móvil todo vaya en columna." },
          { k: 'Compte!|¡Cuidado!', t: 'Prova-la al mòbil sovint|Pruébala en el móvil a menudo', anim: 'w7flex',
            x: "No esperis al final: cada cop que afegeixis una peça, mira la vista 📱. Si surt una barra per moure's de costat, alguna cosa és massa ampla (busca un <code>width</code> amb píxels).|No esperes al final: cada vez que añadas una pieza, mira la vista 📱. Si sale una barra para moverse de lado, algo es demasiado ancho (busca un <code>width</code> con píxeles).",
            bad: "Fer tota la web i mirar el mòbil només al final.|Hacer toda la web y mirar el móvil solo al final.", good: "Construir a trossos i provar-la al mòbil després de cada tros.|Construir a trozos y probarla en el móvil después de cada trozo." }
        ] },
        { k: 'seq', ph: 'mans', q: "Ordena els passos per construir la guia, del primer a l'últim.|Ordena los pasos para construir la guía, del primero al último.",
          items: ["Pensar per a qui és i quines seccions tindrà|Pensar para quién es y qué secciones tendrá", "Fer l'esbós en paper: ordinador i mòbil|Hacer el boceto en papel: ordenador y móvil", "Escriure l'HTML de cada secció|Escribir el HTML de cada sección", "Donar-li estil amb CSS|Darle estilo con CSS", "Afegir el @media i provar-la al mòbil|Añadir el @media y probarla en el móvil", "Revisar: alt, ortografia i fonts|Revisar: alt, ortografía y fuentes"],
          ex: "Planificar, construir, provar i revisar: així treballen els equips que fan webs.|Planificar, construir, probar y revisar: así trabajan los equipos que hacen webs." },
        { k: 'unplug', ph: 'mans', ico: '🗺️', title: "L'esbós de la guia|El boceto de la guía",
          t: "Abans de programar, dibuixa la teva guia en un full.|Antes de programar, dibuja tu guía en una hoja.",
          steps: ["Divideix el full en dues parts: a l'esquerra, una pantalla d'ordinador; a la dreta, un mòbil.|Divide la hoja en dos partes: a la izquierda, una pantalla de ordenador; a la derecha, un móvil.",
            "Dibuixa a totes dues la capçalera, el menú, 3 llocs amb foto, les festes i el menjar.|Dibuja en las dos la cabecera, el menú, 3 lugares con foto, las fiestas y la comida.",
            "Al mòbil, posa-ho tot en una sola columna i fes els botons grans.|En el móvil, ponlo todo en una sola columna y haz los botones grandes.",
            "Amb fletxes, marca on porta cada botó del menú.|Con flechas, marca adónde lleva cada botón del menú."],
          tip: "Si ja l'has fet a classe, toca «Ho hem fet!».|Si ya lo has hecho en clase, toca «¡Lo hemos hecho!»." },
        { k: 'wquiz', ph: 'prova', q: "Quina targeta de la guia es llegeix <b>millor</b>?|¿Qué tarjeta de la guía se lee <b>mejor</b>?",
          opts: [{ html: C('<h3>El riu Segre</h3><p>El riu que travessa la ciutat.</p>', '<h3>El río Segre</h3><p>El río que atraviesa la ciudad.</p>'), css: 'body{background:#FFF4D6}h3{color:#14204A;margin:0 0 6px}p{color:#14204A;margin:0}' },
            { html: C('<h3>El riu Segre</h3><p>El riu que travessa la ciutat.</p>', '<h3>El río Segre</h3><p>El río que atraviesa la ciudad.</p>'), css: 'body{background:#FFFFFF}h3{color:#FFE066;margin:0 0 6px}p{color:#FFE066;margin:0}' },
            { html: C('<h3>El riu Segre</h3><p>El riu que travessa la ciutat.</p>', '<h3>El río Segre</h3><p>El río que atraviesa la ciudad.</p>'), css: 'body{background:#BFD4F2}h3{color:#A9B9D6;margin:0 0 6px}p{color:#A9B9D6;margin:0}' }], a: 0,
          ex: "Text fosc sobre un fons clar: molt <b>contrast</b>. Amb poc contrast, molta gent no pot llegir el text, sobretot al carrer, amb el sol a la pantalla.|Texto oscuro sobre un fondo claro: mucho <b>contraste</b>. Con poco contraste, mucha gente no puede leer el texto, sobre todo en la calle, con el sol en la pantalla." },
        { k: 'wspot', ph: 'investiga', q: "En aquesta secció de la guia hi ha una imatge sense text alternatiu. <b>Toca-la.</b>|En esta sección de la guía hay una imagen sin texto alternativo. <b>Tócala.</b>",
          html: C('<section id="llocs">\n  <h2>Llocs per visitar</h2>\n  <img src="img/tech/web/seu-vella.svg" alt="La Seu Vella dalt del turó">\n  <img src="img/tech/web/pont.svg">\n  <img src="img/tech/web/castell.svg" alt="Un castell de pedra">\n</section>', '<section id="llocs">\n  <h2>Lugares para visitar</h2>\n  <img src="img/tech/web/seu-vella.svg" alt="La Seu Vella en lo alto del cerro">\n  <img src="img/tech/web/pont.svg">\n  <img src="img/tech/web/castell.svg" alt="Un castillo de piedra">\n</section>'), bad: 4,
          ex: "Sense <code>alt</code>, les persones que fan servir un lector de pantalla no saben què hi ha a la imatge. Per exemple: <code>alt=\"Un pont sobre el riu Segre\"</code>.|Sin <code>alt</code>, las personas que usan un lector de pantalla no saben qué hay en la imagen. Por ejemplo: <code>alt=\"Un puente sobre el río Segre\"</code>." },
        { k: 'move', ph: 'pausa', secs: 25, t: "Passeig per la guia! Fes veure que puges al turó de la Seu Vella: 10 passos grans de pujada (genolls amunt!). Ara baixa fins al riu amb 10 passos petits, i estira els braços com si fossis un pont.|¡Paseo por la guía! Haz como si subieras al cerro de la Seu Vella: 10 pasos grandes de subida (¡rodillas arriba!). Ahora baja hasta el río con 10 pasos pequeños, y estira los brazos como si fueras un puente." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi',
          q: "<b>Pas 1: la capçalera.</b> Dins de <code>&lt;header&gt;</code>, posa el títol <code>h1</code> i un <code>&lt;nav&gt;</code> amb 3 botons (<code>a class=\"boto\"</code>) que portin a <code>#llocs</code>, <code>#festes</code> i <code>#menjar</code>. L'estil ja hi és!|<b>Paso 1: la cabecera.</b> Dentro de <code>&lt;header&gt;</code>, pon el título <code>h1</code> y un <code>&lt;nav&gt;</code> con 3 botones (<code>a class=\"boto\"</code>) que lleven a <code>#llocs</code>, <code>#festes</code> y <code>#menjar</code>. ¡El estilo ya está!",
          html: '<header>\n  \n</header>', css: G_CSS1, snips: ['<h1>|</h1>', '<nav>\n    |\n  </nav>', '<a class="boto" href="#|"></a>'],
          checks: [{ k: 'in', t: 'h1', p: 'header' }, { k: 'in', t: 'nav', p: 'header' }, { k: 'in', t: 'a', p: 'nav', min: 3 }, { k: 'class', c: 'boto', min: 3 }, { k: 'link', href: '/^#./', min: 3, txt: 'Els 3 botons porten a seccions (<code>#…</code>)|Los 3 botones llevan a secciones (<code>#…</code>)' }, { k: 'clean' }],
          sol: { html: J(G_HEAD) }, hint: "L'ordre és: <code>&lt;header&gt;</code> › <code>&lt;h1&gt;</code> i, a sota, <code>&lt;nav&gt;</code> › tres <code>&lt;a&gt;</code>. Cada enllaç amb <code>class=\"boto\"</code> i un <code>href</code> que comenci per <code>#</code>.|El orden es: <code>&lt;header&gt;</code> › <code>&lt;h1&gt;</code> y, debajo, <code>&lt;nav&gt;</code> › tres <code>&lt;a&gt;</code>. Cada enlace con <code>class=\"boto\"</code> y un <code>href</code> que empiece por <code>#</code>." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi',
          q: "<b>Pas 2: els llocs.</b> A sota de la capçalera, fes una <code>&lt;section id=\"llocs\"&gt;</code> amb un <code>h2</code> i un <code>div.targetes</code> amb <b>3 targetes</b> (<code>div.targeta</code>). Cada targeta: una imatge amb <code>alt</code>, un <code>h3</code> amb el nom i un <code>p</code>. Idees: la Seu Vella, el riu Segre, Gardeny.|<b>Paso 2: los lugares.</b> Debajo de la cabecera, haz una <code>&lt;section id=\"llocs\"&gt;</code> con un <code>h2</code> y un <code>div.targetes</code> con <b>3 tarjetas</b> (<code>div.targeta</code>). Cada tarjeta: una imagen con <code>alt</code>, un <code>h3</code> con el nombre y un <code>p</code>. Ideas: la Seu Vella, el río Segre, Gardeny.",
          html: J(G_HEAD, '\n'), css: G_CSS2,
          snips: ['<section id="llocs">\n  <h2>|</h2>\n  <div class="targetes">\n  </div>\n</section>', '<div class="targeta">\n  <img src="img/tech/web/|.svg" alt="">\n  <h3></h3>\n  <p></p>\n</div>'],
          checks: [{ k: 'id', id: 'llocs' }, { k: 'in', t: 'h2', p: 'section' }, { k: 'class', c: 'targeta', min: 3 }, { k: 'attr', t: 'img', a: 'alt', min: 3, txt: '3 imatges amb <code>alt</code>|3 imágenes con <code>alt</code>' }, { k: 'tag', t: 'h3', min: 3 }, { k: 'clean' }],
          sol: { html: J(G_HEAD, '\n', G_LLOCS) }, hint: "Les imatges que tens: <code>seu-vella.svg</code>, <code>pont.svg</code>, <code>castell.svg</code>… a la carpeta <code>img/tech/web/</code>. Recorda tancar cada <code>&lt;div&gt;</code>.|Las imágenes que tienes: <code>seu-vella.svg</code>, <code>pont.svg</code>, <code>castell.svg</code>… en la carpeta <code>img/tech/web/</code>. Recuerda cerrar cada <code>&lt;div&gt;</code>." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi',
          q: "<b>Pas 3: l'estil.</b> A la pestanya CSS, posa les targetes en fila (<code>.targetes</code> amb <code>display: flex</code> i <code>gap</code>), i fes que els botons del menú reaccionin amb <code>:hover</code> i canviïn amb una <code>transition</code>.|<b>Paso 3: el estilo.</b> En la pestaña CSS, pon las tarjetas en fila (<code>.targetes</code> con <code>display: flex</code> y <code>gap</code>), y haz que los botones del menú reaccionen con <code>:hover</code> y cambien con una <code>transition</code>.",
          html: J(G_HEAD, '\n', G_LLOCS), css: G_CSS2 + '\n', tab: 'css',
          snips: ['.targetes {\n  display: flex;\n  gap: 12px;\n}', '.boto:hover {\n  |\n}', 'transition: background 0.3s;'],
          checks: [{ k: 'css', s: '.targetes', p: 'display', v: 'flex' }, { k: 'css', s: '.targetes', p: 'gap' }, { k: 'css', s: '.boto:hover', txt: 'Una regla <code>.boto:hover</code>|Una regla <code>.boto:hover</code>' }, { k: 'css', s: '.boto', p: 'transition' }, { k: 'cssclean' }],
          sol: { css: G_CSS3 }, hint: "La <code>transition</code> la pots posar a la regla <code>.boto</code> que ja hi ha, o en una regla <code>.boto</code> nova al final.|La <code>transition</code> la puedes poner en la regla <code>.boto</code> que ya hay, o en una regla <code>.boto</code> nueva al final." },
        { k: 'web', ph: 'repte', url: 'guia-lleida.numi',
          q: "<b>Pas 4: el mòbil.</b> Escriu un <code>@media (max-width: 600px)</code> on: les targetes vagin en columna, el títol <code>h1</code> sigui més petit i els botons <code>.boto</code> ocupin tota l'amplada (<code>display: block</code>).|<b>Paso 4: el móvil.</b> Escribe un <code>@media (max-width: 600px)</code> donde: las tarjetas vayan en columna, el título <code>h1</code> sea más pequeño y los botones <code>.boto</code> ocupen todo el ancho (<code>display: block</code>).",
          html: J(G_HEAD, '\n', G_LLOCS), css: G_CSS3 + '\n', tab: 'css', snips: ['@media (max-width: 600px) {\n  |\n}'],
          checks: [{ k: 'media', max: 600 }, { k: 'css', s: '.targetes', p: 'flex-direction', v: 'column', media: true, txt: 'Al mòbil, <code>.targetes</code> va en columna|En el móvil, <code>.targetes</code> va en columna' }, { k: 'css', s: 'h1', p: 'font-size', media: true, txt: 'Al mòbil, <code>h1</code> té <code>font-size</code>|En el móvil, <code>h1</code> tiene <code>font-size</code>' }, { k: 'css', s: '.boto', p: 'display', v: 'block', media: true, txt: 'Al mòbil, <code>.boto</code> té <code>display: block</code>|En el móvil, <code>.boto</code> tiene <code>display: block</code>' }, { k: 'cssclean' }],
          sol: { css: G_CSS4 }, hint: "Un sol <code>@media</code> amb tres regles a dins: <code>h1 { … }</code>, <code>.targetes { … }</code> i <code>.boto { … }</code>.|Un solo <code>@media</code> con tres reglas dentro: <code>h1 { … }</code>, <code>.targetes { … }</code> y <code>.boto { … }</code>." },
        { k: 'wcreate', ph: 'crea', name: 'La guia de Lleida|La guía de Lleida', url: 'guia-lleida.numi',
          q: "Ara, la guia completa! Afegeix-hi una secció de festes (<code>id=\"festes\"</code>), una de menjar (<code>id=\"menjar\"</code>) i un <code>&lt;footer&gt;</code> amb les fonts. Fes-la teva: colors, textos i imatges. Només fets que sàpigues segurs!|¡Ahora, la guía completa! Añade una sección de fiestas (<code>id=\"festes\"</code>), una de comida (<code>id=\"menjar\"</code>) y un <code>&lt;footer&gt;</code> con las fuentes. Hazla tuya: colores, textos e imágenes. ¡Solo hechos que sepas seguros!",
          crit: ["Capçalera amb títol i menú de 3 botons|Cabecera con título y menú de 3 botones", "Seccions de llocs, festes i menjar|Secciones de lugares, fiestas y comida", "Imatges amb alt i fets certs|Imágenes con alt y hechos ciertos", "Botons amb :hover|Botones con :hover", "Al mòbil, en columna (@media)|En el móvil, en columna (@media)", "Un peu amb les fonts|Un pie con las fuentes"],
          html: J(G_HEAD, '\n', G_LLOCS, '\n'), css: G_CSS4,
          snips: ['<section id="|">\n  <h2></h2>\n</section>', '<div class="targeta">\n  <h3>|</h3>\n  <p></p>\n</div>', '<footer>\n  <p>Fonts: |</p>\n</footer>'],
          checks: [{ k: 'tag', t: 'header' }, { k: 'in', t: 'a', p: 'nav', min: 3 }, { k: 'id', id: 'llocs' }, { k: 'id', id: 'festes' }, { k: 'id', id: 'menjar' }, { k: 'tag', t: 'footer' }, { k: 'attr', t: 'img', a: 'alt', min: 3, txt: 'Almenys 3 imatges amb <code>alt</code>|Al menos 3 imágenes con <code>alt</code>' },
            { k: 'css', s: '.boto:hover', txt: 'Una regla <code>.boto:hover</code>|Una regla <code>.boto:hover</code>' }, { k: 'css', s: '.targetes', p: 'flex-direction', v: 'column', media: true, txt: 'Al mòbil, <code>.targetes</code> va en columna|En el móvil, <code>.targetes</code> va en columna' }, { k: 'clean' }, { k: 'cssclean' }],
          sol: { html: J(G_HEAD, '\n', G_LLOCS, '\n', G_FESTES), css: G_CSS4 + '\nh2 {\n  color: #1A3FB0;\n}\nfooter {\n  font-size: 14px;\n  color: #5A6585;\n}' } },
        { k: 'quiz', ph: 'tanca', q: "Has acabat la guia. Què és el <b>més important</b> revisar abans d'ensenyar-la?|Has terminado la guía. ¿Qué es lo <b>más importante</b> revisar antes de enseñarla?",
          opts: ["Que es vegi bé al mòbil, que les imatges tinguin alt i que els fets siguin certs|Que se vea bien en el móvil, que las imágenes tengan alt y que los hechos sean ciertos", "Que tingui moltes animacions|Que tenga muchas animaciones", "Que tingui tants colors com sigui possible|Que tenga tantos colores como sea posible"], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "A la teva guia, què fa <code>.targetes { flex-direction: column; }</code> de dins del <code>@media</code>?|En tu guía, ¿qué hace <code>.targetes { flex-direction: column; }</code> de dentro del <code>@media</code>?",
          opts: ["Al mòbil, posa les targetes una sota l'altra|En el móvil, pone las tarjetas una debajo de otra", "A l'ordinador, amaga les targetes|En el ordenador, esconde las tarjetas", "Fa les targetes més grans a totes les pantalles|Hace las tarjetas más grandes en todas las pantallas"], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] });
})();

/* ── unitat 8 ── */
/* Tech Web · unitat 8 «La meva web» (w8-1 … w8-4) · projecte final del curs
   Cada alumne/a tria el tema, el públic i els colors de la seva web (w8-1, pas «review») i en fa l'esquelet, que es desa
   al portafoli. Les sessions següents continuen sempre des de l'última versió desada d'aquesta unitat (w8-2 l'omple de
   contingut i estil, w8-3 la revisa i la millora, w8-4 la deixa a punt i es presenta).
   · El codi dels exemples i dels reptes porta text de pàgina en les dues llengües: per això els camps html/css són
     «getters» (es calculen en el moment, amb l'idioma de l'alumne/a).
   · La «solució» dels passos del projecte propi no esborra la feina de l'alumne/a: és el seu codi amb les peces que
     encara falten afegides (així, el botó «Mostra una solució» no fa perdre res). */
Object.assign(TBADGE, {
  w_u8pla: { id: 'w_u8pla', ico: '🗺️', n: 'Arquitecte/a web|Arquitecto/a web', d: "Has planificat la teva web: públic, seccions i esbós, i n'has fet l'esquelet.|Has planificado tu web: público, secciones y boceto, y has hecho su esqueleto." },
  w_u8build: { id: 'w_u8build', ico: '🧩', n: 'Constructor/a web|Constructor/a web', d: 'Has omplert la teva web de textos, imatges i estil.|Has llenado tu web de textos, imágenes y estilo.' },
  w_u8rev: { id: 'w_u8rev', ico: '🔍', n: 'Revisor/a web|Revisor/a web', d: "Has revisat l'accessibilitat, l'ortografia i el mòbil, i has millorat la teva web.|Has revisado la accesibilidad, la ortografía y el móvil, y has mejorado tu web." },
  w_u8grad: { id: 'w_u8grad', ico: '🎓', n: 'Creador/a web|Creador/a web', d: 'Has acabat el curs Tech Web i has presentat la teva pròpia web.|Has terminado el curso Tech Web y has presentado tu propia web.' }
});
COURSE_UNITS[8] = (() => {
  /* ---------- Els camps html/css que són funcions passen a ser getters (text en l'idioma de l'alumne/a) ---------- */
  const lz = o => {
    if (!o || typeof o !== 'object') return o;
    for (const k of ['html', 'css']) if (typeof o[k] === 'function') { const f = o[k]; Object.defineProperty(o, k, { get: f, enumerable: true, configurable: true }); }
    ['sol', 'code', 'media'].forEach(k => lz(o[k])); (o.opts || []).forEach(lz); (o.cards || []).forEach(lz);
    // a les comprovacions, «t» és el nom d'una etiqueta (h1, img…), no un text: no enumerable perquè no es confongui amb text visible
    (o.checks || []).forEach(c => { if (c && typeof c.t === 'string' && Object.getOwnPropertyDescriptor(c, 't').enumerable) { const v = c.t; Object.defineProperty(c, 't', { value: v, enumerable: false, writable: true, configurable: true }); }
      if (c && typeof c.v === 'string' && c.v.includes('|')) { const v = c.v; Object.defineProperty(c, 'v', { value: v, enumerable: false, writable: true, configurable: true }); } });
    return o;
  };

  /* ---------- La web de l'alumne/a: tema, públic i colors (w8-1) i l'última versió desada ---------- */
  const TOP = [
    { e: '🚀', t: "L'espai i les estrelles|El espacio y las estrellas", h1: 'El cel de nit|El cielo de noche', ids: ['planetes', 'estrelles', 'observar'], secs: ['Els planetes|Los planetas', 'Les estrelles|Las estrellas', 'Com observar el cel|Cómo observar el cielo'], img: 'img/tech/web/planeta.svg', alt: 'Un planeta amb anells|Un planeta con anillos' },
    { e: '🐢', t: 'Els animals|Los animales', h1: 'El món dels animals|El mundo de los animales', ids: ['com-son', 'on-viuen', 'curiositats'], secs: ['Com són|Cómo son', 'On viuen|Dónde viven', 'Curiositats|Curiosidades'], img: 'img/tech/web/tortuga.svg', alt: 'Una tortuga caminant|Una tortuga caminando' },
    { e: '🧁', t: 'La cuina|La cocina', h1: 'La meva cuina|Mi cocina', ids: ['receptes', 'ingredients', 'consells'], secs: ['Les meves receptes|Mis recetas', 'Ingredients|Ingredientes', 'Consells de cuina|Consejos de cocina'], img: 'img/tech/web/pastis.svg', alt: 'Un pastís amb una espelma|Un pastel con una vela' },
    { e: '⚽', t: "L'esport|El deporte", h1: 'Esport a fons|Deporte a fondo', ids: ['esport', 'entrenar', 'consells'], secs: ['El meu esport|Mi deporte', "Com s'entrena|Cómo se entrena", 'Consells|Consejos'], img: 'img/tech/web/pilota.svg', alt: 'Una pilota|Una pelota' },
    { e: '🎧', t: 'La música|La música', h1: 'La meva música|Mi música', ids: ['instruments', 'cancons', 'comencar'], secs: ['Instruments|Instrumentos', 'Les meves cançons|Mis canciones', 'Com començar|Cómo empezar'], img: 'img/tech/web/guitarra.svg', alt: 'Una guitarra|Una guitarra' },
    { e: '🏰', t: 'El meu poble o barri|Mi pueblo o barrio', h1: 'El meu poble|Mi pueblo', ids: ['llocs', 'festes', 'natura'], secs: ['Llocs per visitar|Lugares para visitar', 'Festes|Fiestas', 'Natura|Naturaleza'], img: 'img/tech/web/castell.svg', alt: 'Un castell dalt d\'un turó|Un castillo en lo alto de una colina' }
  ];
  const AUD = ['Nois i noies de la meva edat|Chicos y chicas de mi edad', 'Nens i nenes més petits|Niños y niñas más pequeños', 'Famílies i persones grans|Familias y personas mayores', 'Gent que no en sap res|Gente que no sabe nada del tema'];
  const PAL = [['Mar|Mar', '#0E7490', '#ECFEFF', '#F59E0B'], ['Bosc|Bosque', '#166534', '#F0FDF4', '#CA8A04'], ['Posta de sol|Puesta de sol', '#C2410C', '#FFF7ED', '#7C2D12'], ['Nit|Noche', '#3730A3', '#EEF2FF', '#DB2777']];
  const ts = () => { try { return typeof TS_ === 'function' ? TS_() : null; } catch (e) { return null; } };
  // el que va triar a w8-1 (respostes del pas «review»); si encara no hi ha res, el primer de cada llista
  const picks = () => { const t = ts(), r = t && t.rev && t.rev['w8-1'], a = r && Array.isArray(r.a) ? r.a : []; const g = (i, n) => (Number.isInteger(a[i]) && a[i] >= 0 && a[i] < n ? a[i] : 0); return { T: TOP[g(0, TOP.length)], A: AUD[g(1, AUD.length)], C: PAL[g(2, PAL.length)] }; };
  // l'última versió desada de la seva web (portafoli): el projecte de qualsevol sessió d'aquesta unitat
  const last = () => { const t = ts(); if (!t || !Array.isArray(t.port)) return null; for (let i = t.port.length - 1; i >= 0; i--) { const p = t.port[i]; if (p && p.kind === 'web' && /^w8-/.test(p.sid || '') && typeof p.html === 'string' && p.html.trim()) return p; } return null; };
  const ind = (s, n) => s.split('\n').map(l => l ? ' '.repeat(n) + l : l).join('\n');
  const secHTML = (id, h2, p) => `<section id="${id}">\n  <h2>${h2}</h2>\n  <p>${p}</p>\n</section>`;
  const TXT0 = () => L('Aquí hi aniran els teus textos.', 'Aquí irán tus textos.');
  // l'esquelet de partida (w8-1): capçalera, una secció i comentaris amb el pla
  const v1start = () => { const { T, A } = picks(), s = T.secs.map(tx);
    return { html: `<!--
  ${L('Tema', 'Tema')}: ${tx(T.t)}
  ${L('Per a', 'Para')}: ${tx(A).toLowerCase()}
-->
<header>
  <h1>${tx(T.h1)}</h1>
  <p>${L('Una web sobre', 'Una web sobre')} ${tx(T.t).toLowerCase()}.</p>
</header>

<!-- ${L('Pas 1: el menú (nav)', 'Paso 1: el menú (nav)')} -->

<main>
${ind(secHTML(T.ids[0], s[0], TXT0()), 2)}

  <!--
    ${L('Pas 2: dues seccions més', 'Paso 2: dos secciones más')}
    · ${s[1]} (id="${T.ids[1]}")
    · ${s[2]} (id="${T.ids[2]}")
  -->
</main>`, css: v1css() }; };
  const v1css = () => { const [, M, Lt, Ac] = picks().C; return `body {
  font-family: Verdana, sans-serif;
  background: ${Lt};
  color: #1d2433;
  margin: 0;
}
header {
  background: ${M};
  color: white;
  padding: 16px;
}
main {
  padding: 16px;
}
/* ${L('Color per destacar', 'Color para destacar')}: ${Ac} */`; };
  // l'esquelet acabat (per si algú no va fer la sessió 1): menú i tres seccions
  const v1full = () => { const { T } = picks(), s = T.secs.map(tx), [, M] = picks().C;
    return { html: `<header>
  <h1>${tx(T.h1)}</h1>
  <p>${L('Una web sobre', 'Una web sobre')} ${tx(T.t).toLowerCase()}.</p>
</header>
<nav>
${T.ids.map((id, i) => `  <a href="#${id}">${s[i]}</a>`).join('\n')}
</nav>
<main>
${T.ids.map((id, i) => ind(secHTML(id, s[i], TXT0()), 2)).join('\n')}
</main>`, css: v1css() + `\nnav {\n  padding: 12px 16px;\n  background: white;\n}\nnav a {\n  color: ${M};\n  margin-right: 12px;\n}` }; };
  const mine = () => { const p = last(); return p ? { html: p.html, css: p.css || '' } : v1full(); };
  // el codi que hi ha ara a l'editor (si l'alumne/a hi està treballant) o el de partida del pas
  const cur = st => (typeof WB !== 'undefined' && WB && WB.st === st) ? { html: WB.html, css: WB.css } : { html: st.html, css: st.css };
  const D = (h, c) => webDoc(h || '', c || ''), ok = (d, c) => !!webCheck(d, c), has = (h, t) => D(h, '').els.some(e => e.t === t);
  const before = (h, tag, add) => { const re = new RegExp(`</${tag}>`, 'i'); return re.test(h) ? h.replace(re, `${add}\n</${tag}>`) : `${h}\n${add}`; };
  const after = (h, tag, add) => { const re = new RegExp(`</${tag}>`, 'i'); return re.test(h) ? h.replace(re, `</${tag}>\n${add}`) : `${add}\n${h}`; };
  // un pas del projecte propi: comença des de start() i la solució completa el codi de l'alumne/a amb fix()
  const own = (o, start, fix) => { const st = { ...o }; Object.defineProperty(st, 'html', { get: () => start().html, enumerable: true }); Object.defineProperty(st, 'css', { get: () => start().css, enumerable: true });
    st.sol = { get html() { const c = cur(st); return fix(c.html || '', c.css || '').html; }, get css() { const c = cur(st); return fix(c.html || '', c.css || '').css; } }; return st; };
  // versió 1: menú amb 3 enllaços a seccions i 3 seccions amb h2
  const fix1 = (h, c) => { const { T } = picks(); let d = D(h, c);
    if (!ok(d, { k: 'text', t: 'h1', min: 3 })) h = `<header>\n  <h1>${tx(T.h1)}</h1>\n</header>\n` + h;
    const have = webAll(D(h, c).html.root).filter(e => e.t === 'section');
    const ids = have.map(e => e.attrs.id).filter(Boolean);
    let k = 0; while (have.length + k < 3) { const i = T.ids.findIndex(x => !ids.includes(x)); const id = i >= 0 ? T.ids[i] : `seccio${ids.length + 1}`; ids.push(id); h = before(h, 'main', ind(secHTML(id, i >= 0 ? tx(T.secs[i]) : L('Una secció nova', 'Una sección nueva'), TXT0()), 2)); k++; }
    d = D(h, c);
    if (!(ok(d, { k: 'in', t: 'a', p: 'nav', min: 3 }) && ok(d, { k: 'link', href: '/^#/', min: 3 }))) { const links = ids.slice(0, Math.max(3, ids.length)).map(id => { const i = T.ids.indexOf(id); return `  <a href="#${id}">${i >= 0 ? tx(T.secs[i]) : id}</a>`; }).join('\n');
      h = has(h, 'nav') ? before(h, 'nav', links) : after(h, 'header', `<nav>\n${links}\n</nav>`); }
    return { html: h, css: c }; };
  // versió 2: textos, una imatge amb alt, el peu de pàgina i més estil
  const fix2 = (h, c) => { const { T } = picks(), [, M, , Ac] = picks().C; let d = D(h, c);
    if (!ok(d, { k: 'attr', t: 'img', a: 'alt', v: '/.{3}/' }) || !ok(d, { k: 'tag', t: 'p', min: 3 }))
      h = before(h, 'main', ind(`<section id="galeria">\n  <h2>${L('Galeria', 'Galería')}</h2>\n  <img src="${T.img}" alt="${tx(T.alt)}" width="140">\n  <p>${L('Una imatge que explica el tema de la web.', 'Una imagen que explica el tema de la web.')}</p>\n  <p>${L('Aquí pots explicar què hi surt i per què és important.', 'Aquí puedes explicar qué sale y por qué es importante.')}</p>\n</section>`, 2));
    if (!ok(D(h, c), { k: 'tag', t: 'footer' })) h += `\n<footer>\n  <p>${L('Web feta a Numi Tech.', 'Web hecha en Numi Tech.')}</p>\n</footer>`;
    if (!ok(D(h, c), { k: 'rules', min: 5 })) c += `\nh2 {\n  color: ${M};\n}\nsection {\n  background: white;\n  padding: 12px;\n  border-radius: 12px;\n  margin-bottom: 12px;\n}\nfooter {\n  text-align: center;\n  padding: 12px;\n  border-top: 3px solid ${Ac};\n}`;
    return { html: h, css: c }; };
  // versió 3: imatges amb alt, títols en ordre i una regla per al mòbil
  const fix3 = (h, c) => { const { T } = picks(); const d = D(h, c);
    if (!ok(d, { k: 'attr', t: 'img', a: 'alt', v: '/.{3}/' })) h = before(h, 'main', `  <img src="${T.img}" alt="${tx(T.alt)}" width="140">`);
    if (!ok(D(h, c), { k: 'order', a: 'h1', b: 'h2' })) h = `<h1>${tx(T.h1)}</h1>\n` + h;
    if (!ok(D(h, c), { k: 'media' })) c += `\n@media (max-width: 600px) {\n  body {\n    font-size: 18px;\n  }\n  nav a {\n    display: block;\n    padding: 8px 0;\n  }\n}`;
    return { html: h, css: c }; };
  // versió final: «Torna a dalt» (id="inici") i un peu de pàgina amb els crèdits
  const fix4 = (h, c) => { if (!/id\s*=\s*["']?inici\b/i.test(h)) h = /<header(?![^>]*\bid=)/i.test(h) ? h.replace(/<header(?![^>]*\bid=)/i, '<header id="inici"') : /<h1(?![^>]*\bid=)/i.test(h) ? h.replace(/<h1(?![^>]*\bid=)/i, '<h1 id="inici"') : `<span id="inici"></span>\n${h}`;
    const link = `  <p><a href="#inici">${L('Torna a dalt', 'Vuelve arriba')}</a></p>`, cred = `  <p>${L('Web feta a Numi Tech. Imatges: Numi.', 'Web hecha en Numi Tech. Imágenes: Numi.')}</p>`;
    if (!has(h, 'footer')) h += `\n<footer>\n${cred}\n${link}\n</footer>`;
    else { const d = D(h, c); if (!ok(d, { k: 'text', t: 'footer', min: 10 })) h = before(h, 'footer', cred); if (!ok(D(h, c), { k: 'link', href: '#inici' })) h = before(h, 'footer', link); }
    return { html: h, css: c }; };
  const NAME = n => `La meva web (versió ${n})|Mi web (versión ${n})`;

  /* ---------- Miniatures per triar (pas «review») ---------- */
  const optTop = T => () => `<span style="font-size:26px;display:block;margin-bottom:4px">${T.e}</span>${tx(T.t)}`;
  const optPal = ([n, ...cs]) => () => `<span style="display:flex;gap:4px;justify-content:center;margin-bottom:6px">${cs.map(c => `<i style="display:inline-block;width:24px;height:24px;border-radius:7px;background:${c};border:1px solid rgba(0,0,0,.15)"></i>`).join('')}</span>${tx(n)}`;

  /* ---------- Codi dels exemples i dels reptes ---------- */
  const OK_DARK = '/^(#[0-5][0-9a-f]{2}([0-9a-f]{3})?|black|navy|darkblue|darkgreen|darkred|maroon|indigo|purple|darkslategray|rgb\\(\\s*[0-9]{1,2}\\s*,.*)$/';
  // l'esquelet d'una web (per a les demos)
  const SKEL = () => `<header>
  <h1>${L("L'hort de l'escola", 'El huerto de la escuela')}</h1>
</header>
<nav>
  <a href="#plantes">${L('Plantes', 'Plantas')}</a>
  <a href="#calendari">${L('Calendari', 'Calendario')}</a>
</nav>
<main>
  <section id="plantes">
    <h2>${L('Plantes', 'Plantas')}</h2>
    <p>${L('Tomàquets, enciams i maduixes.', 'Tomates, lechugas y fresas.')}</p>
  </section>
</main>
<footer>${L("Fet per la classe de l'hort", 'Hecho por la clase del huerto')}</footer>`;
  const SKEL_CSS = `header {
  background: #166534;
  color: white;
  padding: 10px;
}
nav a {
  margin-right: 10px;
}
footer {
  background: #E2E8F0;
  padding: 8px;
}`;
  // un esquelet en blocs de colors (es veu bé a les miniatures de les opcions)
  const BLK = order => order.map(k => ({ h: `<header>${L('Capçalera', 'Cabecera')}</header>`, n: `<nav>${L('Menú', 'Menú')}</nav>`, m: `<main>${L('Contingut', 'Contenido')}</main>`, f: `<footer>${L('Peu', 'Pie')}</footer>` })[k]).join('\n');
  const BLK_CSS = `body {
  font-size: 14px;
}
header {
  background: #166534;
  color: white;
  padding: 8px;
}
nav {
  background: #F59E0B;
  padding: 4px 8px;
}
main {
  background: #DCFCE7;
  height: 50px;
  padding: 8px;
}
footer {
  background: #94A3B8;
  padding: 4px 8px;
}`;
  const GATS = (nav) => `<header>
  <h1>${L('El racó dels gats', 'El rincón de los gatos')}</h1>
  <nav>
${nav}
  </nav>
</header>
<main>
  <section id="races">
    <h2>${L('Races de gats', 'Razas de gatos')}</h2>
    <p>${L('Hi ha gats de pèl llarg i gats de pèl curt.', 'Hay gatos de pelo largo y gatos de pelo corto.')}</p>
  </section>
  <section id="cures">
    <h2>${L('Com cuidar-los', 'Cómo cuidarlos')}</h2>
    <p>${L('Necessiten aigua neta, menjar i un lloc tranquil per dormir.', 'Necesitan agua limpia, comida y un sitio tranquilo para dormir.')}</p>
  </section>
  <section id="fotos">
    <h2>${L('Fotos', 'Fotos')}</h2>
    <img src="img/tech/web/gat.svg" alt="${L('Un gat assegut', 'Un gato sentado')}" width="110">
  </section>
</main>`;
  const GATS_CSS = `header {
  background: #0E7490;
  color: white;
  padding: 12px;
}
nav a {
  color: white;
  margin-right: 12px;
}`;
  const CLUB_NAV = () => `<header>
  <h1>${L('Club de lectura', 'Club de lectura')}</h1>
  <nav>
    <a href="#llibres">${L('Llibres', 'Libros')}</a>
    <a href="#trobades">${L('Trobades', 'Encuentros')}</a>
    <a href="#unir-te">${L("Uneix-t'hi", 'Únete')}</a>
  </nav>
</header>`;
  const CLUB_CSS = `header {
  background: #3730A3;
  color: white;
  padding: 12px;
}
nav a {
  color: white;
  margin-right: 12px;
}
section {
  border-bottom: 2px solid #C7D2FE;
}`;
  const ASTRO = (broken) => broken ? `<footer>
  <p>${L("Fet pel Club d'Astronomia", 'Hecho por el Club de Astronomía')}</p>
</footer>
<header>
  <h1>${L("Club d'Astronomia", 'Club de Astronomía')}</h1>
</header>
<main>
  <section id="sortides">
    <h2>${L('Sortides', 'Salidas')}</h2>
    <p>${L('Un cop al mes mirem les estrelles des de la muntanya.', 'Una vez al mes miramos las estrellas desde la montaña.')}</p>
  <section id="telescopis">
    <h2>${L('Telescopis', 'Telescopios')}</h2>
    <p>${L('Tenim dos telescopis per deixar als socis.', 'Tenemos dos telescopios para prestar a los socios.')}</p>
  </section>
</main>` : `<header>
  <h1>${L("Club d'Astronomia", 'Club de Astronomía')}</h1>
</header>
<main>
  <section id="sortides">
    <h2>${L('Sortides', 'Salidas')}</h2>
    <p>${L('Un cop al mes mirem les estrelles des de la muntanya.', 'Una vez al mes miramos las estrellas desde la montaña.')}</p>
  </section>
  <section id="telescopis">
    <h2>${L('Telescopis', 'Telescopios')}</h2>
    <p>${L('Tenim dos telescopis per deixar als socis.', 'Tenemos dos telescopios para prestar a los socios.')}</p>
  </section>
</main>
<footer>
  <p>${L("Fet pel Club d'Astronomia", 'Hecho por el Club de Astronomía')}</p>
</footer>`;
  const ASTRO_CSS = `header {
  background: #3730A3;
  color: white;
  padding: 12px;
}
footer {
  background: #E0E7FF;
  padding: 8px;
}`;
  // l'hort de l'escola (sessió 2)
  const HORT3 = (cls) => [['tomaqueres', L('Tomaqueres', 'Tomateras'), L('Les reguem cada dos dies.', 'Las regamos cada dos días.')], ['enciams', L('Enciams', 'Lechugas'), L('Creixen de pressa i es mengen frescos.', 'Crecen deprisa y se comen frescas.')], ['maduixes', L('Maduixes', 'Fresas'), L('Surten a la primavera.', 'Salen en primavera.')]]
    .map(([id, h, p]) => `<section id="${id}"${cls ? ' class="targeta"' : ''}>\n  <h2>${h}</h2>\n  <p>${p}</p>\n</section>`).join('\n');
  const TARG_CSS = `.targeta {
  background: #FFF7ED;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid #C2410C;
}
h2 {
  font-size: 18px;
  margin: 0;
}`;
  const TARG_HTML = () => `<div class="targeta">\n  <h2>${L('Maduixes', 'Fresas')}</h2>\n  <p>${L('Surten a la primavera.', 'Salen en primavera.')}</p>\n</div>`;
  const GAL = (alts) => `<h2>${L('Galeria', 'Galería')}</h2>
<div class="galeria">
  <img src="img/tech/web/tomaquet.svg" alt="${L('Un tomàquet vermell', 'Un tomate rojo')}" width="90">
  <img src="img/tech/web/poma.svg"${alts ? ` alt="${L('Una poma', 'Una manzana')}"` : ''} width="90">
  <img src="img/tech/web/platan.svg"${alts ? ` alt="${L('Un plàtan', 'Un plátano')}"` : ''} width="90">
</div>`;
  // el club de lectura amb problemes (sessió 3)
  const A11Y = (good) => `<h1>${L('Club de Lectura', 'Club de Lectura')}</h1>
<${good ? 'h2' : 'h4'}>${L('Què llegim', 'Qué leemos')}</${good ? 'h2' : 'h4'}>
<img src="img/tech/web/llibre.svg"${good ? ` alt="${L('Un llibre obert', 'Un libro abierto')}"` : ''} width="90">
<p>${L('Aquest mes llegim una novel·la de dracs.', 'Este mes leemos una novela de dragones.')}</p>
<${good ? 'h2' : 'h4'}>${L('On ens trobem', 'Dónde nos reunimos')}</${good ? 'h2' : 'h4'}>
<img src="img/tech/web/castell.svg"${good ? ` alt="${L('El castell on hi ha la biblioteca', 'El castillo donde está la biblioteca')}"` : ''} width="90">
<p>${L('A la biblioteca del castell, els dimecres.', 'En la biblioteca del castillo, los miércoles.')}</p>`;
  const CONTR_HTML = () => `<h2>${L('Trobades', 'Encuentros')}</h2>
<p>${L('Ens trobem cada dimecres a les sis de la tarda.', 'Nos reunimos cada miércoles a las seis de la tarde.')}</p>
<p>${L('Porta el teu llibre i ganes de parlar-ne!', '¡Trae tu libro y ganas de hablar de él!')}</p>`;
  const FILA_HTML = () => `<h2>${L('Els nostres llibres', 'Nuestros libros')}</h2>
<div class="fila">
  <div class="llibre">${L('Dracs del nord', 'Dragones del norte')}</div>
  <div class="llibre">${L('El misteri del far', 'El misterio del faro')}</div>
  <div class="llibre">${L('Viatge a la Lluna', 'Viaje a la Luna')}</div>
</div>`;
  const FILA_CSS = `.fila {
  display: flex;
  gap: 12px;
}
.llibre {
  flex: 1;
  background: #EEF2FF;
  padding: 16px;
  border-radius: 10px;
  font-weight: bold;
}`;
  // la web de mostra de l'Aina (sessió 4)
  const AINA = (top, foot) => `<header${top ? ' id="inici"' : ''}>
  <h1>${L('El cel de nit', 'El cielo de noche')}</h1>
</header>
<main>
  <section id="planetes">
    <h2>${L('Els planetes', 'Los planetas')}</h2>
    <img src="img/tech/web/planeta.svg" alt="${L('Un planeta amb anells', 'Un planeta con anillos')}" width="110">
    <p>${L('Al sistema solar hi ha vuit planetes.', 'En el sistema solar hay ocho planetas.')}</p>
  </section>
  <section id="estrelles">
    <h2>${L('Les estrelles', 'Las estrellas')}</h2>
    <p>${L('El Sol també és una estrella.', 'El Sol también es una estrella.')}</p>
  </section>
</main>
<footer>
  <p>${L("Web feta per l'Aina a Numi Tech.", 'Web hecha por Aina en Numi Tech.')}</p>${foot ? `\n  <p><a href="#inici">${L('Torna a dalt', 'Vuelve arriba')}</a></p>` : ''}
</footer>`;
  const AINA_CSS = `body {
  font-family: Verdana, sans-serif;
  background: #EEF2FF;
  margin: 0;
}
header {
  background: #3730A3;
  color: white;
  padding: 16px;
}
main {
  padding: 12px;
}
footer {
  background: #E0E7FF;
  padding: 12px;
}`;
  const DOCW = (full) => `<!doctype html>
<html${full ? ` lang="${L('ca', 'es')}"` : ''}>
<head>
  <meta charset="utf-8">${full ? `\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>${L('El cel de nit', 'El cielo de noche')}</title>` : ''}
</head>
<body>
  <h1>${L('El cel de nit', 'El cielo de noche')}</h1>
  <p>${L('Una web sobre planetes i estrelles.', 'Una web sobre planetas y estrellas.')}</p>
</body>
</html>`;

  const S = [
    /* ---------- Sessió 1 · Planificar ---------- */
    { id: 'w8-1', t: 'Planificar|Planificar', min: 45, badge: 'w_u8pla',
      learn: ['Una bona web comença pensant per a qui és i què hi ha de trobar el públic.|Una buena web empieza pensando para quién es y qué tiene que encontrar el público.',
        "L'esquelet d'una web és header, nav, main amb seccions i footer; l'esbós en paper ajuda a decidir-lo.|El esqueleto de una web es header, nav, main con secciones y footer; el boceto en papel ayuda a decidirlo.",
        "Un enllaç del menú href=\"#nom\" porta a l'element amb id=\"nom\": el nom ha de ser idèntic.|Un enlace del menú href=\"#nombre\" lleva al elemento con id=\"nombre\": el nombre tiene que ser idéntico."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Comencem l'última unitat! Una web es veu bé a l'ordinador, però al mòbil tot surt petit i cal fer zoom. Què li falta al <code>&lt;head&gt;</code>?|¡Empezamos la última unidad! Una web se ve bien en el ordenador, pero en el móvil todo sale pequeño y hay que hacer zoom. ¿Qué le falta al <code>&lt;head&gt;</code>?",
          opts: ['<code>&lt;meta name="viewport" …&gt;</code>|<code>&lt;meta name="viewport" …&gt;</code>', '<code>&lt;title&gt;</code>|<code>&lt;title&gt;</code>', '<code>&lt;footer&gt;</code>|<code>&lt;footer&gt;</code>'], a: 0,
          ex: "La metaetiqueta <b>viewport</b> diu al mòbil que faci servir l'amplada real de la pantalla.|La metaetiqueta <b>viewport</b> le dice al móvil que use el ancho real de la pantalla." },
        { k: 'quiz', ph: 'recorda', q: 'Quina regla de CSS canvia l\'estil <b>només a les pantalles petites</b>?|¿Qué regla de CSS cambia el estilo <b>solo en las pantallas pequeñas</b>?',
          opts: ['<code>@media (max-width: 600px) { … }</code>|<code>@media (max-width: 600px) { … }</code>', '<code>a:hover { … }</code>|<code>a:hover { … }</code>', '<code>.petita { … }</code>|<code>.petita { … }</code>'], a: 0,
          ex: 'El que hi ha dins de <code>@media</code> només s\'aplica quan la pantalla fa 600 px o menys.|Lo que hay dentro de <code>@media</code> solo se aplica cuando la pantalla mide 600 px o menos.' },
        { k: 'story', ph: 'missio', who: 'both', scene: 'taller', title: 'La Mostra de Webs|La Muestra de Webs',
          t: "Gran notícia a l'illa: d'aquí a quatre setmanes se celebra la <b>Mostra de Webs</b>! Cada creador/a hi presentarà <b>una web feta per ell o ella</b>, amb HTML i CSS de veritat, i el públic la podrà visitar al mòbil i a l'ordinador. I tu també hi seràs!|¡Gran noticia en la isla: dentro de cuatro semanas se celebra la <b>Muestra de Webs</b>! Cada creador/a presentará <b>una web hecha por él o ella</b>, con HTML y CSS de verdad, y el público podrá visitarla en el móvil y en el ordenador. ¡Y tú también estarás!" },
        { k: 'story', ph: 'missio', who: 'bit', mood: 'happy', title: 'El pla de les quatre setmanes|El plan de las cuatro semanas',
          t: "BIP BIP! Ja saps com viatja una pàgina, escriure HTML, posar imatges i enllaços, donar estil amb CSS, fer caixes, col·locar-les amb flexbox i adaptar-ho tot al mòbil. Ara ho ajuntaràs en una web teva!|¡BIP BIP! Ya sabes cómo viaja una página, escribir HTML, poner imágenes y enlaces, dar estilo con CSS, hacer cajas, colocarlas con flexbox y adaptarlo todo al móvil. ¡Ahora lo juntarás en una web tuya!",
          box: '<ol><li><b>Avui:</b> el pla i l\'esquelet.</li><li><b>Setmana 2:</b> la construeixes: textos, imatges i estil.</li><li><b>Setmana 3:</b> la revises i la millores.</li><li><b>Setmana 4:</b> la presentes a la Mostra.</li></ol>|<ol><li><b>Hoy:</b> el plan y el esqueleto.</li><li><b>Semana 2:</b> la construyes: textos, imágenes y estilo.</li><li><b>Semana 3:</b> la revisas y la mejoras.</li><li><b>Semana 4:</b> la presentas en la Muestra.</li></ol>' },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El públic|El público', t: 'Per a qui és la teva web?|¿Para quién es tu web?', anim: 'w8aud',
            x: "Abans d'escriure una sola etiqueta, els dissenyadors web es fan dues preguntes: <b>per a qui és?</b> (el <span class='hl'>públic</span>) i <b>què hi ha de trobar?</b> (l'objectiu). No és el mateix una web per a nens petits (frases curtes, imatges grans) que una per a famílies (horaris, adreces, preus).|Antes de escribir una sola etiqueta, los diseñadores web se hacen dos preguntas: <b>¿para quién es?</b> (el <span class='hl'>público</span>) y <b>¿qué tiene que encontrar?</b> (el objetivo). No es lo mismo una web para niños pequeños (frases cortas, imágenes grandes) que una para familias (horarios, direcciones, precios).",
            tip: 'Imagina una persona concreta del teu públic i pensa què li agradaria trobar-hi.|Imagina a una persona concreta de tu público y piensa qué le gustaría encontrar.' },
          { k: "L'esquelet|El esqueleto", t: 'Les parts d\'una pàgina|Las partes de una página', media: { k: 'web', html: SKEL, css: SKEL_CSS },
            x: "Gairebé totes les webs tenen el mateix esquelet: <code>&lt;header&gt;</code> (la capçalera, amb el títol), <code>&lt;nav&gt;</code> (el menú), <code>&lt;main&gt;</code> (el contingut, dividit en <code>&lt;section&gt;</code>) i <code>&lt;footer&gt;</code> (el peu). Aquestes etiquetes no canvien com es veu la pàgina, però diuen <b>què és cada part</b>: ho entenen els navegadors, els cercadors i els lectors de pantalla.|Casi todas las webs tienen el mismo esqueleto: <code>&lt;header&gt;</code> (la cabecera, con el título), <code>&lt;nav&gt;</code> (el menú), <code>&lt;main&gt;</code> (el contenido, dividido en <code>&lt;section&gt;</code>) y <code>&lt;footer&gt;</code> (el pie). Estas etiquetas no cambian cómo se ve la página, pero dicen <b>qué es cada parte</b>: lo entienden los navegadores, los buscadores y los lectores de pantalla." },
          { k: "L'esbós|El boceto", t: 'Primer, en paper|Primero, en papel', anim: 'w8wire',
            x: "Un <span class='hl'>esbós</span> (en anglès, <i>wireframe</i>) és un dibuix fet amb caixes: on va el títol, el menú, cada secció i el peu. No cal dibuixar bé ni posar-hi colors: serveix per decidir l'ordre i què hi haurà a cada part. Dibuixa'l en format mòbil, que és com el veurà més gent.|Un <span class='hl'>boceto</span> (en inglés, <i>wireframe</i>) es un dibujo hecho con cajas: dónde va el título, el menú, cada sección y el pie. No hace falta dibujar bien ni poner colores: sirve para decidir el orden y qué habrá en cada parte. Dibújalo en formato móvil, que es como lo verá más gente." },
          { k: 'El menú|El menú', t: 'Un menú que porta a cada secció|Un menú que lleva a cada sección', anim: 'w8map',
            x: "Si la web té diverses seccions, el menú ajuda a saltar-hi. Cada secció té un <code>id</code> i cada enllaç del menú hi apunta amb <code>href=\"#…\"</code>: <code>&lt;a href=\"#fotos\"&gt;</code> porta a <code>&lt;section id=\"fotos\"&gt;</code>.|Si la web tiene varias secciones, el menú ayuda a saltar a ellas. Cada sección tiene un <code>id</code> y cada enlace del menú apunta a ella con <code>href=\"#…\"</code>: <code>&lt;a href=\"#fotos\"&gt;</code> lleva a <code>&lt;section id=\"fotos\"&gt;</code>.",
            bad: '<code>href="#foto"</code> i <code>id="fotos"</code>: l\'enllaç no porta enlloc.|<code>href="#foto"</code> e <code>id="fotos"</code>: el enlace no lleva a ninguna parte.', good: '<code>href="#fotos"</code> i <code>id="fotos"</code>: exactament el mateix nom.|<code>href="#fotos"</code> e <code>id="fotos"</code>: exactamente el mismo nombre.' },
          { k: 'Compte!|¡Cuidado!', t: 'Primer l\'estructura, després els colors|Primero la estructura, después los colores', anim: 'w8layers',
            x: "Una web es construeix per capes: primer l'<b>estructura</b> (l'esquelet en HTML), després el <b>contingut</b> (textos i imatges), després l'<b>estil</b> (CSS) i, al final, la <b>revisió</b>. Si comences pels colors i els efectes, després hauràs de refer-ho tot quan canviïs l'estructura.|Una web se construye por capas: primero la <b>estructura</b> (el esqueleto en HTML), después el <b>contenido</b> (textos e imágenes), después el <b>estilo</b> (CSS) y, al final, la <b>revisión</b>. Si empiezas por los colores y los efectos, después tendrás que rehacerlo todo cuando cambies la estructura.",
            bad: 'Comencem per triar les ombres i les animacions.|Empezamos eligiendo las sombras y las animaciones.', good: 'Comencem per l\'esquelet i les seccions.|Empezamos por el esqueleto y las secciones.' }
        ] },
        { k: 'quiz', ph: 'mans', q: "L'Arnau vol fer una web sobre el seu equip de bàsquet perquè les <b>famílies</b> sàpiguen quan i on són els partits. Què és el més important que hi ha de trobar el públic?|Arnau quiere hacer una web sobre su equipo de baloncesto para que las <b>familias</b> sepan cuándo y dónde son los partidos. ¿Qué es lo más importante que tiene que encontrar el público?",
          opts: ['El calendari dels partits i on es fan|El calendario de los partidos y dónde son', "Una animació molt llarga a l'entrada|Una animación muy larga en la entrada", "La història de l'invent del bàsquet|La historia del invento del baloncesto"], a: 0,
          ex: "Pensar en el públic diu què ha d'anar primer: les famílies volen saber <b>quan</b> i <b>on</b>. La resta pot venir després.|Pensar en el público dice qué tiene que ir primero: las familias quieren saber <b>cuándo</b> y <b>dónde</b>. El resto puede venir después." },
        { k: 'seq', ph: 'mans', q: 'Ordena les parts de l\'esquelet d\'una web, <b>de dalt a baix</b>.|Ordena las partes del esqueleto de una web, <b>de arriba abajo</b>.',
          items: ['<code>&lt;header&gt;</code>: la capçalera amb el títol|<code>&lt;header&gt;</code>: la cabecera con el título', '<code>&lt;nav&gt;</code>: el menú amb els enllaços|<code>&lt;nav&gt;</code>: el menú con los enlaces', '<code>&lt;main&gt;</code>: el contingut, amb les seccions|<code>&lt;main&gt;</code>: el contenido, con las secciones', '<code>&lt;footer&gt;</code>: el peu, amb els crèdits|<code>&lt;footer&gt;</code>: el pie, con los créditos'],
          ex: 'Capçalera, menú, contingut i peu: així ho fan la majoria de webs, i així el públic ho troba tot on espera.|Cabecera, menú, contenido y pie: así lo hacen la mayoría de webs, y así el público lo encuentra todo donde espera.' },
        { k: 'unplug', ph: 'mans', ico: '✏️', title: "L'esbós de la teva web|El boceto de tu web", t: 'Amb paper i llapis (a classe o amb algú de casa).|Con papel y lápiz (en clase o con alguien de casa).',
          steps: ['Escriu a dalt del full el tema de la teva web, per a qui és i què hi ha de trobar el públic.|Escribe arriba de la hoja el tema de tu web, para quién es y qué tiene que encontrar el público.',
            "Dibuixa un mòbil gran i, a dins, les caixes de l'esquelet: capçalera, menú, tres seccions i peu.|Dibuja un móvil grande y, dentro, las cajas del esqueleto: cabecera, menú, tres secciones y pie.",
            "Posa un nom curt a cada secció (serà el seu id) i escriu què hi haurà: text, una imatge, una llista…|Pon un nombre corto a cada sección (será su id) y escribe qué habrá: texto, una imagen, una lista…",
            "Ensenya l'esbós a una altra persona: entén de què va la web? Sabria on clicar per trobar cada cosa?|Enseña el boceto a otra persona: ¿entiende de qué va la web? ¿Sabría dónde hacer clic para encontrar cada cosa?"],
          tip: "Guarda l'esbós: el faràs servir les quatre setmanes.|Guarda el boceto: lo usarás las cuatro semanas." },
        lz({ k: 'wquiz', ph: 'prova', q: 'Quina vista prèvia fa aquest codi?|¿Qué vista previa da este código?',
          code: { html: () => BLK(['h', 'n', 'm', 'f']), css: BLK_CSS },
          opts: [{ html: () => BLK(['h', 'n', 'm', 'f']), css: BLK_CSS }, { html: () => BLK(['f', 'h', 'n', 'm']), css: BLK_CSS }, { html: () => BLK(['h', 'm', 'n', 'f']), css: BLK_CSS }], a: 0,
          ex: 'El navegador dibuixa les parts en el mateix ordre que les escrius: capçalera, menú, contingut i peu.|El navegador dibuja las partes en el mismo orden en que las escribes: cabecera, menú, contenido y pie.' }),
        lz({ k: 'wspot', ph: 'investiga', q: "L'enllaç «Horaris» del menú no porta enlloc. El menú està bé: <b>toca la línia de la secció que té el nom equivocat</b>.|El enlace «Horarios» del menú no lleva a ninguna parte. El menú está bien: <b>toca la línea de la sección que tiene el nombre equivocado</b>.",
          html: () => `<nav>
  <a href="#horaris">${L('Horaris', 'Horarios')}</a>
  <a href="#preus">${L('Preus', 'Precios')}</a>
</nav>
<section id="horari">
  <h2>${L('Horaris', 'Horarios')}</h2>
</section>
<section id="preus">
  <h2>${L('Preus', 'Precios')}</h2>
</section>`, bad: 5,
          ex: "L'enllaç apunta a <code>#horaris</code>, però la secció es diu <code>horari</code>. El nom de l'<code>id</code> i el de l'<code>href</code> han de ser <b>idèntics</b> (sense el #).|El enlace apunta a <code>#horaris</code>, pero la sección se llama <code>horari</code>. El nombre del <code>id</code> y el del <code>href</code> tienen que ser <b>idénticos</b> (sin el #)." }),
        { k: 'move', ph: 'pausa', secs: 30, t: "Fes de web amb el cos! Mans al cap: <b>capçalera</b>. Braços estirats als costats: <b>menú</b>. Mans a la panxa: <b>contingut</b>. Toca't els peus: <b>peu de pàgina</b>! Ara més de pressa, i a l'inrevés.|¡Haz de web con el cuerpo! Manos en la cabeza: <b>cabecera</b>. Brazos estirados a los lados: <b>menú</b>. Manos en la barriga: <b>contenido</b>. Tócate los pies: <b>pie de página</b>! Ahora más deprisa, y al revés." },
        lz({ k: 'web', ph: 'repte', url: 'raco-gats.numi', q: "<b>Completa el menú.</b> La web del racó dels gats té tres seccions, però el menú només porta a la primera. Afegeix els enllaços que porten a <b>#cures</b> i a <b>#fotos</b>.|<b>Completa el menú.</b> La web del rincón de los gatos tiene tres secciones, pero el menú solo lleva a la primera. Añade los enlaces que llevan a <b>#cures</b> y a <b>#fotos</b>.",
          html: () => GATS(`    <a href="#races">${L('Races', 'Razas')}</a>`), css: GATS_CSS,
          snips: ['<a href="#|"></a>'],
          checks: [{ k: 'in', t: 'a', p: 'nav', min: 3, txt: 'El menú <code>&lt;nav&gt;</code> té 3 enllaços|El menú <code>&lt;nav&gt;</code> tiene 3 enlaces' }, { k: 'link', href: '#cures', txt: 'Un enllaç porta a <code>#cures</code>|Un enlace lleva a <code>#cures</code>' }, { k: 'link', href: '#fotos', txt: 'Un enllaç porta a <code>#fotos</code>|Un enlace lleva a <code>#fotos</code>' }, { k: 'clean' }],
          sol: { html: () => GATS(`    <a href="#races">${L('Races', 'Razas')}</a>\n    <a href="#cures">${L('Cures', 'Cuidados')}</a>\n    <a href="#fotos">${L('Fotos', 'Fotos')}</a>`) },
          hint: "Copia l'enllaç que ja hi ha i canvia l'href i el text. Mira l'id de cada secció: l'href és el mateix nom amb un # davant.|Copia el enlace que ya hay y cambia el href y el texto. Mira el id de cada sección: el href es el mismo nombre con un # delante." }),
        lz({ k: 'web', ph: 'repte', url: 'club-lectura.numi', q: "<b>Ara, les seccions.</b> El menú del club de lectura ja està fet, però el <code>&lt;main&gt;</code> és buit. Escriu-hi <b>tres seccions</b> amb l'<code>id</code> que demana cada enllaç, i un <code>&lt;h2&gt;</code> a cadascuna.|<b>Ahora, las secciones.</b> El menú del club de lectura ya está hecho, pero el <code>&lt;main&gt;</code> está vacío. Escribe <b>tres secciones</b> con el <code>id</code> que pide cada enlace, y un <code>&lt;h2&gt;</code> en cada una.",
          html: () => `${CLUB_NAV()}\n<main>\n  \n</main>`, css: CLUB_CSS,
          snips: ['<section id="|">\n  <h2></h2>\n</section>', '<h2>|</h2>', '<p>|</p>'],
          checks: [{ k: 'id', id: 'llibres' }, { k: 'id', id: 'trobades' }, { k: 'id', id: 'unir-te' }, { k: 'in', t: 'h2', p: 'section', min: 3, txt: 'Cada secció té un <code>&lt;h2&gt;</code>|Cada sección tiene un <code>&lt;h2&gt;</code>' }, { k: 'clean' }],
          sol: { html: () => `${CLUB_NAV()}\n<main>\n  <section id="llibres">\n    <h2>${L('Llibres', 'Libros')}</h2>\n    <p>${L('Aquest mes llegim una novel·la de misteri.', 'Este mes leemos una novela de misterio.')}</p>\n  </section>\n  <section id="trobades">\n    <h2>${L('Trobades', 'Encuentros')}</h2>\n    <p>${L('Cada dimecres a la biblioteca.', 'Cada miércoles en la biblioteca.')}</p>\n  </section>\n  <section id="unir-te">\n    <h2>${L("Uneix-t'hi", 'Únete')}</h2>\n    <p>${L('Només cal que portis un llibre.', 'Solo tienes que traer un libro.')}</p>\n  </section>\n</main>` },
          hint: "Fes servir el botó de la secció: escriu l'id entre les cometes (sense #) i el títol dins de l'<h2>. Tres vegades!|Usa el botón de la sección: escribe el id entre las comillas (sin #) y el título dentro del <h2>. ¡Tres veces!" }),
        lz({ k: 'web', ph: 'repte', url: 'club-astronomia.numi', q: "<b>Arregla l'esquelet.</b> Algú ha fet la web del Club d'Astronomia amb pressa: el peu de pàgina ha quedat a dalt de tot i una secció no està tancada. <b>Troba els dos errors i arregla'ls.</b>|<b>Arregla el esqueleto.</b> Alguien ha hecho la web del Club de Astronomía con prisas: el pie de página ha quedado arriba del todo y una sección no está cerrada. <b>Encuentra los dos errores y arréglalos.</b>",
          html: () => ASTRO(true), css: ASTRO_CSS,
          checks: [{ k: 'order', a: 'header', b: 'footer', txt: 'La capçalera va abans del peu|La cabecera va antes del pie' }, { k: 'order', a: 'main', b: 'footer', txt: 'El contingut va abans del peu|El contenido va antes del pie' }, { k: 'clean' }],
          sol: { html: () => ASTRO(false) },
          hint: "Talla les tres línies del <footer> i enganxa-les al final, després de </main>. I mira quina <section> no té el seu </section> abans que comenci la següent.|Corta las tres líneas del <footer> y pégalas al final, después de </main>. Y mira qué <section> no tiene su </section> antes de que empiece la siguiente." }),
        { k: 'review', ph: 'crea', who: 'numi', btn: 'Desa el pla|Guarda el plan', q: "<b>Ara, la teva web!</b> Tria el tema, el públic i els colors que has pensat al teu esbós. Quan ho tinguis, toca el botó de baix: ho faràs servir per començar l'esquelet.|<b>¡Ahora, tu web!</b> Elige el tema, el público y los colores que has pensado en tu boceto. Cuando lo tengas, toca el botón de abajo: lo usarás para empezar el esqueleto.",
          items: [
            { q: 'De què parlarà la teva web?|¿De qué hablará tu web?', opts: TOP.map(optTop) },
            { q: 'Per a qui és?|¿Para quién es?', opts: AUD },
            { q: 'Quins colors tindrà?|¿Qué colores tendrá?', opts: PAL.map(optPal) }
          ] },
        own({ k: 'wcreate', ph: 'crea', url: 'la-meva-web.numi', name: NAME(1),
          q: "<b>La versió 1 de la teva web: l'esquelet.</b> Ja tens la capçalera i una secció. Canvia el títol si vols, escriu el <b>menú</b> amb tres enllaços i afegeix <b>dues seccions més</b>, cada una amb el seu <code>id</code> i un <code>&lt;h2&gt;</code>. Encara no cal omplir-les: això ho farem la setmana que ve.|<b>La versión 1 de tu web: el esqueleto.</b> Ya tienes la cabecera y una sección. Cambia el título si quieres, escribe el <b>menú</b> con tres enlaces y añade <b>dos secciones más</b>, cada una con su <code>id</code> y un <code>&lt;h2&gt;</code>. Todavía no hace falta llenarlas: eso lo haremos la semana que viene.",
          crit: ['Un títol <code>&lt;h1&gt;</code> amb el nom de la web|Un título <code>&lt;h1&gt;</code> con el nombre de la web', 'Un menú <code>&lt;nav&gt;</code> amb 3 enllaços <code>#…</code>|Un menú <code>&lt;nav&gt;</code> con 3 enlaces <code>#…</code>', 'Tres seccions amb id i <code>&lt;h2&gt;</code>|Tres secciones con id y <code>&lt;h2&gt;</code>'],
          snips: ['<nav>\n  |\n</nav>', '<a href="#|"></a>', '<section id="|">\n  <h2></h2>\n  <p></p>\n</section>', '<h2>|</h2>'],
          checks: [{ k: 'text', t: 'h1', min: 3, txt: 'El títol <code>&lt;h1&gt;</code> té text|El título <code>&lt;h1&gt;</code> tiene texto' }, { k: 'in', t: 'a', p: 'nav', min: 3, txt: 'El menú <code>&lt;nav&gt;</code> té 3 enllaços|El menú <code>&lt;nav&gt;</code> tiene 3 enlaces' }, { k: 'link', href: '/^#./', min: 3, txt: 'Els enllaços porten a seccions (<code>#…</code>)|Los enlaces llevan a secciones (<code>#…</code>)' }, { k: 'tag', t: 'section', min: 3, txt: 'Hi ha 3 seccions|Hay 3 secciones' }, { k: 'in', t: 'h2', p: 'section', min: 3, txt: 'Cada secció té un <code>&lt;h2&gt;</code>|Cada sección tiene un <code>&lt;h2&gt;</code>' }, { k: 'clean' }],
          hint: "Escriu el menú entre </header> i <main>. Cada enllaç: <a href=\"#id-de-la-secció\">Nom</a>. Als comentaris de la plantilla tens idees per a les seccions.|Escribe el menú entre </header> y <main>. Cada enlace: <a href=\"#id-de-la-sección\">Nombre</a>. En los comentarios de la plantilla tienes ideas para las secciones." }, v1start, fix1),
        { k: 'quiz', ph: 'tanca', q: "Per què és bona idea fer l'esbós en paper abans d'escriure codi?|¿Por qué es buena idea hacer el boceto en papel antes de escribir código?",
          opts: ['Per decidir les parts i el seu ordre abans de picar etiquetes|Para decidir las partes y su orden antes de teclear etiquetas', 'Perquè el navegador necessita el dibuix|Porque el navegador necesita el dibujo', 'Per triar ja els colors exactes|Para elegir ya los colores exactos'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Un enllaç <code>&lt;a href="#contacte"&gt;</code> porta a…|Un enlace <code>&lt;a href="#contacte"&gt;</code> lleva a…',
          opts: ["L'element que té <code>id=\"contacte\"</code>|El elemento que tiene <code>id=\"contacte\"</code>", 'Els elements amb <code>class="contacte"</code>|Los elementos con <code>class="contacte"</code>', 'Una altra web que es diu contacte|Otra web que se llama contacte'], a: 0,
          ex: "El <b>#</b> vol dir «dins d'aquesta pàgina, l'element amb aquest id».|El <b>#</b> quiere decir «dentro de esta página, el elemento con este id»." },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ---------- Sessió 2 · Construir ---------- */
    { id: 'w8-2', t: 'Construir|Construir', min: 45, badge: 'w_u8build',
      learn: ['Els textos d\'una web són curts, clars i escrits amb les teves paraules.|Los textos de una web son cortos, claros y escritos con tus palabras.',
        "Cada imatge porta un alt que la descriu; només fem servir imatges que tenim permís per fer servir.|Cada imagen lleva un alt que la describe; solo usamos imágenes que tenemos permiso para usar.",
        'Una classe com .targeta dona el mateix estil a moltes seccions; una paleta de pocs colors fa la web més clara.|Una clase como .targeta da el mismo estilo a muchas secciones; una paleta de pocos colores hace la web más clara.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "La setmana passada vas fer l'esquelet de la teva web. Quin és l'ordre bo de les parts?|La semana pasada hiciste el esqueleto de tu web. ¿Cuál es el orden correcto de las partes?",
          opts: ['header, nav, main, footer|header, nav, main, footer', 'footer, main, nav, header|footer, main, nav, header', 'main, header, footer, nav|main, header, footer, nav'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: 'Quina diferència hi ha entre una <b>classe</b> i un <b>id</b>?|¿Qué diferencia hay entre una <b>clase</b> y un <b>id</b>?',
          opts: ["Una classe es pot repetir en molts elements; un id és únic a la pàgina|Una clase se puede repetir en muchos elementos; un id es único en la página", "Cap: són el mateix|Ninguna: son lo mismo", "L'id només serveix per als colors|El id solo sirve para los colores"], a: 0,
          ex: "Per això fem servir classes per a l'estil que es repeteix (<code>.targeta</code>) i ids per a coses úniques (<code>#fotos</code>).|Por eso usamos clases para el estilo que se repite (<code>.targeta</code>) e ids para cosas únicas (<code>#fotos</code>)." },
        { k: 'story', ph: 'missio', who: 'both', scene: 'lab', title: 'El taller de la Mostra|El taller de la Muestra',
          t: "L'esquelet ja aguanta la teva web. Avui toca omplir-la: <b>textos</b> que s'entenguin, <b>imatges</b> amb el seu alt i l'<b>estil</b> amb els colors que vas triar. Recorda el pla: primer el contingut i, després, que quedi bonic.|El esqueleto ya sostiene tu web. Hoy toca llenarla: <b>textos</b> que se entiendan, <b>imágenes</b> con su alt y el <b>estilo</b> con los colores que elegiste. Recuerda el plan: primero el contenido y, después, que quede bonito." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Textos|Textos', t: 'Escriure per a una pantalla|Escribir para una pantalla', pic: 'img/ment/lli.webp',
            x: "A la pantalla la gent no llegeix, <b>escaneja</b>: mira els títols i les primeres paraules. Per això els bons textos web tenen <b>títols clars</b>, <b>paràgrafs curts</b> (dues o tres frases) i, si hi ha una llista de coses, una <code>&lt;ul&gt;</code>. I sempre amb <b>les teves paraules</b>: si copies un text d'una altra web, no és teu.|En la pantalla la gente no lee, <b>escanea</b>: mira los títulos y las primeras palabras. Por eso los buenos textos web tienen <b>títulos claros</b>, <b>párrafos cortos</b> (dos o tres frases) y, si hay una lista de cosas, una <code>&lt;ul&gt;</code>. Y siempre con <b>tus palabras</b>: si copias un texto de otra web, no es tuyo." },
          { k: 'Imatges|Imágenes', t: 'Imatges amb alt i amb permís|Imágenes con alt y con permiso', media: { k: 'web', html: () => `<h2>${L('Tomaqueres', 'Tomateras')}</h2>\n<img src="img/tech/web/tomaquet.svg" alt="${L('Un tomàquet vermell i madur', 'Un tomate rojo y maduro')}" width="90">\n<p>${L('Les reguem cada dos dies.', 'Las regamos cada dos días.')}</p>`, css: 'img {\n  float: right;\n}' },
            x: "Cada <code>&lt;img&gt;</code> necessita un <code>alt</code> que digui què s'hi veu: el llegeixen els lectors de pantalla i surt si la imatge no carrega. A les teves webs fes servir imatges teves, de Numi o amb llicència lliure, i <b>cita'n la font</b>. Una foto trobada a internet no sempre es pot fer servir.|Cada <code>&lt;img&gt;</code> necesita un <code>alt</code> que diga qué se ve: lo leen los lectores de pantalla y sale si la imagen no carga. En tus webs usa imágenes tuyas, de Numi o con licencia libre, y <b>cita su fuente</b>. Una foto encontrada en internet no siempre se puede usar." },
          { k: 'Classes|Clases', t: 'Un estil, moltes seccions|Un estilo, muchas secciones', media: { k: 'web', html: TARG_HTML, css: TARG_CSS },
            x: "Si vols que totes les seccions semblin targetes, no cal repetir l'estil tres vegades: posa <code>class=\"targeta\"</code> a cada secció i escriu una sola regla <code>.targeta { … }</code> amb el farciment, la vora arrodonida i el fons. Si un dia la vols canviar, la canvies en un sol lloc.|Si quieres que todas las secciones parezcan tarjetas, no hace falta repetir el estilo tres veces: pon <code>class=\"targeta\"</code> en cada sección y escribe una sola regla <code>.targeta { … }</code> con el relleno, el borde redondeado y el fondo. Si un día la quieres cambiar, la cambias en un solo sitio." },
          { k: 'Paleta|Paleta', t: 'Pocs colors i una lletra|Pocos colores y una letra', media: { k: 'web', html: () => `<h1>${L('El cel de nit', 'El cielo de noche')}</h1>\n<p>${L('Dos colors i un de destacat.', 'Dos colores y uno para destacar.')}</p>\n<a href="#">${L('Veure els planetes', 'Ver los planetas')}</a>`, css: 'body {\n  font-family: Verdana, sans-serif;\n  background: #EEF2FF;\n}\nh1 {\n  color: #3730A3;\n}\na {\n  background: #DB2777;\n  color: white;\n  padding: 6px 12px;\n  border-radius: 8px;\n}' },
            x: "Les webs que es veuen més professionals fan servir <b>pocs colors</b>: un de principal, un de fons clar i un per destacar (els botons, per exemple), i <b>una sola família de lletra</b>. Ja vas triar la teva paleta: fes-la servir a tot arreu i la web semblarà una sola peça.|Las webs que se ven más profesionales usan <b>pocos colores</b>: uno principal, uno de fondo claro y uno para destacar (los botones, por ejemplo), y <b>una sola familia de letra</b>. Ya elegiste tu paleta: úsala en todas partes y la web parecerá una sola pieza." },
          { k: 'Compte!|¡Cuidado!', t: 'Copiar no és crear|Copiar no es crear', anim: 'w8layers',
            x: "És temptador copiar textos o imatges d'altres webs, però tenen autor i drets. A més, la teva web és interessant justament perquè hi expliques <b>el que tu saps i penses</b>. Si fas servir una dada o una idea d'una altra pàgina, escriu-la amb les teves paraules i posa'n la font al peu.|Es tentador copiar textos o imágenes de otras webs, pero tienen autor y derechos. Además, tu web es interesante justamente porque en ella explicas <b>lo que tú sabes y piensas</b>. Si usas un dato o una idea de otra página, escríbela con tus palabras y pon la fuente en el pie.",
            bad: 'Copio i enganxo tres paràgrafs d\'una altra web.|Copio y pego tres párrafos de otra web.', good: 'Ho explico amb les meves paraules i en cito la font.|Lo explico con mis palabras y cito la fuente.' }
        ] },
        { k: 'quiz', ph: 'mans', q: 'Quin d\'aquests textos està més ben escrit per a la secció «Com cuidar una tortuga» d\'una web per a nens i nenes?|¿Cuál de estos textos está mejor escrito para la sección «Cómo cuidar una tortuga» de una web para niños y niñas?',
          opts: ["Necessita aigua neta cada dia, sol una estona i menjar de tortuga. No la treguis al carrer.|Necesita agua limpia cada día, sol un rato y comida de tortuga. No la saques a la calle.", "Les tortugues, que són rèptils de l'ordre dels quelonis i que existeixen des de fa milions d'anys, tenen unes necessitats que convé conèixer amb detall abans de…|Las tortugas, que son reptiles del orden de los quelonios y que existen desde hace millones de años, tienen unas necesidades que conviene conocer con detalle antes de…", 'TORTUGA!!! MOLT IMPORTANT!!! LLEGEIX-HO TOT!!!|¡¡¡TORTUGA!!! ¡¡¡MUY IMPORTANTE!!! ¡¡¡LÉELO TODO!!!'], a: 0,
          ex: 'Frases curtes, directes i pensades per al públic: és el que fa que una web s\'entengui.|Frases cortas, directas y pensadas para el público: es lo que hace que una web se entienda.' },
        { k: 'seq', ph: 'mans', q: '<b>Ordena</b> com construiries una secció nova de la teva web.|<b>Ordena</b> cómo construirías una sección nueva de tu web.',
          items: ['Escric la <code>&lt;section&gt;</code> amb el seu id i el seu <code>&lt;h2&gt;</code>|Escribo la <code>&lt;section&gt;</code> con su id y su <code>&lt;h2&gt;</code>', 'Hi poso el text en paràgrafs curts|Pongo el texto en párrafos cortos', 'Hi afegeixo una imatge amb el seu alt|Añado una imagen con su alt', "Li dono estil amb la classe i el CSS|Le doy estilo con la clase y el CSS", 'La miro al mòbil i a l\'ordinador|La miro en el móvil y en el ordenador'],
          ex: 'Estructura, contingut, estil i comprovar: les mateixes capes que per a tota la web.|Estructura, contenido, estilo y comprobar: las mismas capas que para toda la web.' },
        lz({ k: 'wquiz', ph: 'prova', q: 'Quina vista prèvia fa aquesta targeta?|¿Qué vista previa da esta tarjeta?',
          code: { html: TARG_HTML, css: TARG_CSS },
          opts: [{ html: TARG_HTML, css: TARG_CSS }, { html: TARG_HTML, css: '.targeta {\n  background: #FFF7ED;\n  padding: 16px;\n}\nh2 {\n  font-size: 18px;\n  margin: 0;\n}' }, { html: TARG_HTML, css: '.targeta {\n  background: #7C2D12;\n  color: white;\n  padding: 16px;\n  border-radius: 12px;\n}\nh2 {\n  font-size: 18px;\n  margin: 0;\n}' }], a: 0,
          ex: 'Fons clar, farciment de 16 px, vores arrodonides i una vora taronja de 2 px.|Fondo claro, relleno de 16 px, bordes redondeados y un borde naranja de 2 px.' }),
        { k: 'wspot', ph: 'investiga', q: "La targeta no té ni fons ni farciment, i el CSS sembla ben escrit. <b>Toca la línia que té l'error.</b>|La tarjeta no tiene ni fondo ni relleno, y el CSS parece bien escrito. <b>Toca la línea que tiene el error.</b>",
          css: '.targeta {\n  background: #FFF7ED\n  padding: 16px;\n  border-radius: 12px;\n  border: 2px solid #C2410C;\n}', bad: 2, preview: false,
          ex: "Falta el <b>punt i coma</b> després de <code>#FFF7ED</code>. Sense ell, el navegador llegeix «#FFF7ED padding: 16px» com un sol valor, no l'entén i se salta les dues propietats.|Falta el <b>punto y coma</b> después de <code>#FFF7ED</code>. Sin él, el navegador lee «#FFF7ED padding: 16px» como un solo valor, no lo entiende y se salta las dos propiedades." },
        { k: 'move', ph: 'pausa', secs: 30, t: 'Estira\'t com una <b>imatge al 100 %</b> d\'amplada: braços ben oberts! Ara fes-te petit/a com una icona. Fes tres <b>salts flex</b> cap a la dreta i tres cap a l\'esquerra, i acaba amb una vora arrodonida: un cercle amb els braços!|¡Estírate como una <b>imagen al 100 %</b> de ancho: brazos bien abiertos! Ahora hazte pequeño/a como un icono. Haz tres <b>saltos flex</b> hacia la derecha y tres hacia la izquierda, y termina con un borde redondeado: ¡un círculo con los brazos!' },
        lz({ k: 'web', ph: 'repte', url: 'hort-escola.numi', q: "<b>Omple la secció.</b> A la web de l'hort de l'escola, la secció de les tomaqueres només té el títol. Afegeix-hi un <b>paràgraf</b> que expliqui alguna cosa i la <b>imatge del tomàquet</b> amb un <code>alt</code> que la descrigui.|<b>Llena la sección.</b> En la web del huerto de la escuela, la sección de las tomateras solo tiene el título. Añade un <b>párrafo</b> que explique algo y la <b>imagen del tomate</b> con un <code>alt</code> que la describa.",
          html: () => `<section id="tomaqueres">\n  <h2>${L('Les tomaqueres', 'Las tomateras')}</h2>\n  <!-- ${L('Afegeix aquí un paràgraf i la imatge', 'Añade aquí un párrafo y la imagen')} -->\n  \n</section>`, css: 'section {\n  background: #F0FDF4;\n  padding: 12px;\n  border-radius: 12px;\n}\nh2 {\n  color: #166534;\n}',
          snips: ['<p>|</p>', '<img src="img/tech/web/tomaquet.svg" alt="|" width="100">'],
          checks: [{ k: 'in', t: 'p', p: 'section', txt: 'Hi ha un <code>&lt;p&gt;</code> dins de la secció|Hay un <code>&lt;p&gt;</code> dentro de la sección' }, { k: 'text', t: 'p', min: 20, txt: 'El paràgraf té almenys 20 lletres|El párrafo tiene al menos 20 letras' }, { k: 'attr', t: 'img', a: 'src', v: '/tomaquet\\.svg/', txt: 'Hi ha la imatge <code>tomaquet.svg</code>|Está la imagen <code>tomaquet.svg</code>' }, { k: 'attr', t: 'img', a: 'alt', v: '/.{4}/', txt: "La imatge té un <code>alt</code> que la descriu|La imagen tiene un <code>alt</code> que la describe" }, { k: 'clean' }],
          sol: { html: () => `<section id="tomaqueres">\n  <h2>${L('Les tomaqueres', 'Las tomateras')}</h2>\n  <p>${L('Les vam plantar al març i ja fan tomàquets vermells.', 'Las plantamos en marzo y ya dan tomates rojos.')}</p>\n  <img src="img/tech/web/tomaquet.svg" alt="${L('Un tomàquet vermell i madur', 'Un tomate rojo y maduro')}" width="100">\n</section>` },
          hint: "L'alt descriu la imatge com si l'expliquessis per telèfon: «Un tomàquet vermell i madur». No cal posar «imatge de».|El alt describe la imagen como si la explicaras por teléfono: «Un tomate rojo y maduro». No hace falta poner «imagen de»." }),
        lz({ k: 'web', ph: 'repte', url: 'hort-escola.numi', q: '<b>Totes iguals amb una classe.</b> Posa <code>class="targeta"</code> a les <b>tres seccions</b> i, al CSS, completa la regla <code>.targeta</code> amb un <b>farciment</b> (padding) i <b>vores arrodonides</b> (border-radius).|<b>Todas iguales con una clase.</b> Pon <code>class="targeta"</code> en las <b>tres secciones</b> y, en el CSS, completa la regla <code>.targeta</code> con un <b>relleno</b> (padding) y <b>bordes redondeados</b> (border-radius).',
          html: () => HORT3(false), css: '.targeta {\n  background: #F0FDF4;\n  \n}',
          checks: [{ k: 'class', c: 'targeta', min: 3, txt: 'Les 3 seccions tenen la classe <code>.targeta</code>|Las 3 secciones tienen la clase <code>.targeta</code>' }, { k: 'css', s: '.targeta', p: 'padding' }, { k: 'css', s: '.targeta', p: 'border-radius' }, { k: 'cssclean' }],
          sol: { html: () => HORT3(true), css: '.targeta {\n  background: #F0FDF4;\n  padding: 16px;\n  border-radius: 12px;\n  margin-bottom: 12px;\n}' },
          hint: 'A l\'HTML, dins de cada <section …> afegeix class="targeta". Al CSS, dins de les claus: padding: 16px; i border-radius: 12px; (amb punt i coma!).|En el HTML, dentro de cada <section …> añade class="targeta". En el CSS, dentro de las llaves: padding: 16px; y border-radius: 12px; (¡con punto y coma!).' }),
        lz({ k: 'web', ph: 'repte', url: 'hort-escola.numi', q: "<b>Una galeria.</b> Les tres imatges surten una sota l'altra. Fes que la <code>.galeria</code> les posi <b>en fila</b> amb <code>display: flex</code> i un espai entre elles (<code>gap</code>). I, ja que hi ets: dues imatges no tenen <code>alt</code>!|<b>Una galería.</b> Las tres imágenes salen una debajo de la otra. Haz que la <code>.galeria</code> las ponga <b>en fila</b> con <code>display: flex</code> y un espacio entre ellas (<code>gap</code>). Y, ya que estás: ¡dos imágenes no tienen <code>alt</code>!",
          html: () => GAL(false), css: '.galeria {\n  \n}\nimg {\n  display: block;\n}',
          checks: [{ k: 'css', s: '.galeria', p: 'display', v: 'flex' }, { k: 'css', s: '.galeria', p: 'gap' }, { k: 'attr', t: 'img', a: 'alt', v: '/.{3}/', min: 3, txt: 'Les 3 imatges tenen <code>alt</code>|Las 3 imágenes tienen <code>alt</code>' }, { k: 'clean' }],
          sol: { html: () => GAL(true), css: '.galeria {\n  display: flex;\n  gap: 12px;\n}\nimg {\n  display: block;\n}' },
          hint: 'Al CSS: display: flex; i gap: 12px; dins de .galeria. A l\'HTML, afegeix alt="…" a la poma i al plàtan.|En el CSS: display: flex; y gap: 12px; dentro de .galeria. En el HTML, añade alt="…" a la manzana y al plátano.' }),
        { k: 'story', ph: 'crea', who: 'numi', t: "Ara, la teva web! T'hi espera l'última versió que vas desar. Omple <b>cada secció</b> amb textos teus i posa-hi <b>imatges</b> de Numi (són a <code>img/tech/web/</code> i <code>img/ic/</code>) amb el seu alt. Després, dona-li estil amb els teus colors i afegeix el <b>peu de pàgina</b>.|¡Ahora, tu web! Te espera la última versión que guardaste. Llena <b>cada sección</b> con textos tuyos y pon <b>imágenes</b> de Numi (están en <code>img/tech/web/</code> y <code>img/ic/</code>) con su alt. Después, dale estilo con tus colores y añade el <b>pie de página</b>.",
          box: "Imatges que pots fer servir: <code>planeta.svg</code>, <code>estrella.svg</code>, <code>coet.svg</code>, <code>tortuga.svg</code>, <code>gat.svg</code>, <code>gos.svg</code>, <code>pastis.svg</code>, <code>pizza.svg</code>, <code>fruita.svg</code>, <code>pilota.svg</code>, <code>guitarra.svg</code>, <code>castell.svg</code>, <code>muntanya.svg</code>… (totes a <code>img/tech/web/</code>).|Imágenes que puedes usar: <code>planeta.svg</code>, <code>estrella.svg</code>, <code>coet.svg</code>, <code>tortuga.svg</code>, <code>gat.svg</code>, <code>gos.svg</code>, <code>pastis.svg</code>, <code>pizza.svg</code>, <code>fruita.svg</code>, <code>pilota.svg</code>, <code>guitarra.svg</code>, <code>castell.svg</code>, <code>muntanya.svg</code>… (todas en <code>img/tech/web/</code>)." },
        own({ k: 'wcreate', ph: 'crea', url: 'la-meva-web.numi', name: NAME(2),
          q: "<b>La versió 2 de la teva web: el contingut i l'estil.</b> Escriu un paràgraf a cada secció, posa-hi almenys una imatge amb <code>alt</code>, afegeix un <code>&lt;footer&gt;</code> i dona estil a la web amb els teus colors (com a mínim cinc regles de CSS). Prova-la amb els botons 📱 i 💻.|<b>La versión 2 de tu web: el contenido y el estilo.</b> Escribe un párrafo en cada sección, pon al menos una imagen con <code>alt</code>, añade un <code>&lt;footer&gt;</code> y dale estilo a la web con tus colores (como mínimo cinco reglas de CSS). Pruébala con los botones 📱 y 💻.",
          crit: ['Un paràgraf amb text teu a cada secció|Un párrafo con texto tuyo en cada sección', 'Almenys una imatge amb un alt que la descriu|Al menos una imagen con un alt que la describe', 'Un peu de pàgina <code>&lt;footer&gt;</code>|Un pie de página <code>&lt;footer&gt;</code>', 'Estil amb la teva paleta: 5 regles de CSS o més|Estilo con tu paleta: 5 reglas de CSS o más'],
          snips: ['<p>|</p>', '<img src="img/tech/web/|.svg" alt="" width="140">', '<footer>\n  <p>|</p>\n</footer>', '<ul>\n  <li>|</li>\n</ul>', { t: 'section {\n  |\n}', tab: 'css' }, { t: '.targeta {\n  |\n}', tab: 'css' }],
          checks: [{ k: 'tag', t: 'p', min: 3, txt: 'Hi ha almenys 3 paràgrafs|Hay al menos 3 párrafos' }, { k: 'attr', t: 'img', a: 'alt', v: '/.{3}/', txt: 'Una imatge amb <code>alt</code>|Una imagen con <code>alt</code>' }, { k: 'tag', t: 'footer' }, { k: 'rules', min: 5 }, { k: 'clean' }],
          hint: "Ves secció per secció: canvia «Aquí hi aniran els teus textos» per un text teu. El footer va al final de tot, després de </main>. Al CSS pots afegir regles per a h2, section, nav a i footer.|Ve sección por sección: cambia «Aquí irán tus textos» por un texto tuyo. El footer va al final de todo, después de </main>. En el CSS puedes añadir reglas para h2, section, nav a y footer." }, mine, fix2),
        { k: 'quiz', ph: 'tanca', q: 'Per què val la pena fer servir una classe com <code>.targeta</code> en lloc de repetir l\'estil a cada secció?|¿Por qué vale la pena usar una clase como <code>.targeta</code> en lugar de repetir el estilo en cada sección?',
          opts: ['Perquè l\'estil s\'escriu una vegada i, si el canvies, canvia a totes|Porque el estilo se escribe una vez y, si lo cambias, cambia en todas', 'Perquè les classes fan la web més ràpida a internet|Porque las clases hacen la web más rápida en internet', 'Perquè sense classes no es pot posar color|Porque sin clases no se puede poner color'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Has trobat una foto preciosa en una altra web. Què fas?|Has encontrado una foto preciosa en otra web. ¿Qué haces?',
          opts: ['Miro si es pot fer servir (llicència) i, si és així, en cito la font; si no, en busco una altra o en faig una de meva|Miro si se puede usar (licencia) y, si es así, cito la fuente; si no, busco otra o hago una mía', 'La poso i ja està: és a internet, és de tothom|La pongo y ya está: está en internet, es de todos', 'La poso i hi escric que és meva|La pongo y escribo que es mía'], a: 0,
          ex: 'Que una imatge sigui a internet no vol dir que es pugui fer servir: té un autor/a.|Que una imagen esté en internet no quiere decir que se pueda usar: tiene un autor/a.' },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ---------- Sessió 3 · Revisar i millorar ---------- */
    { id: 'w8-3', t: 'Revisar i millorar|Revisar y mejorar', min: 45, badge: 'w_u8rev',
      learn: ['Una web accessible té alt a les imatges, títols en ordre, enllaços clars i bon contrast.|Una web accesible tiene alt en las imágenes, títulos en orden, enlaces claros y buen contraste.',
        "Abans de publicar, es revisa l'ortografia llegint en veu alta i es prova la web al mòbil.|Antes de publicar, se revisa la ortografía leyendo en voz alta y se prueba la web en el móvil.",
        "Una bona revisió d'un company/a diu què funciona i proposa una millora concreta, amb amabilitat.|Una buena revisión de un compañero/a dice qué funciona y propone una mejora concreta, con amabilidad."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Per què cal posar <code>alt</code> a les imatges?|¿Por qué hay que poner <code>alt</code> en las imágenes?',
          opts: ["Perquè el llegeix el lector de pantalla i surt si la imatge no carrega|Porque lo lee el lector de pantalla y sale si la imagen no carga", 'Perquè la imatge surti més gran|Para que la imagen salga más grande', 'Perquè la imatge tingui color|Para que la imagen tenga color'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: 'Quina propietat fa que els elements d\'un contenidor flex es posin <b>un sota l\'altre</b>?|¿Qué propiedad hace que los elementos de un contenedor flex se pongan <b>uno debajo del otro</b>?',
          opts: ['<code>flex-direction: column</code>|<code>flex-direction: column</code>', '<code>gap: 20px</code>|<code>gap: 20px</code>', '<code>display: block</code> al text|<code>display: block</code> en el texto'], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'poble', title: "L'equip de revisió|El equipo de revisión",
          t: "Abans d'obrir la Mostra, totes les webs passen per l'<b>equip de revisió</b>. A les empreses de veritat també ho fan: algú que no l'ha feta la prova al mòbil, la llegeix amb calma i comprova que tothom la pugui fer servir. Avui seràs revisor/a… i també revisaran la teva!|Antes de abrir la Muestra, todas las webs pasan por el <b>equipo de revisión</b>. En las empresas de verdad también lo hacen: alguien que no la ha hecho la prueba en el móvil, la lee con calma y comprueba que todo el mundo la pueda usar. ¡Hoy serás revisor/a… y también revisarán la tuya!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Accessibilitat|Accesibilidad', t: 'Una web per a tothom|Una web para todo el mundo', anim: 'w8a11y',
            x: "Hi ha persones que naveguen amb un <span class='hl'>lector de pantalla</span>, que llegeix la web en veu alta. Per a elles, l'<code>alt</code> de cada imatge és l'única manera de saber què hi ha, i els títols <b>en ordre</b> (h1, després h2, després h3) són com l'índex d'un llibre: si saltes de h1 a h4, s'hi perden.|Hay personas que navegan con un <span class='hl'>lector de pantalla</span>, que lee la web en voz alta. Para ellas, el <code>alt</code> de cada imagen es la única manera de saber qué hay, y los títulos <b>en orden</b> (h1, después h2, después h3) son como el índice de un libro: si saltas de h1 a h4, se pierden.",
            tip: "Tria el títol per la seva importància, no per la mida: la mida es canvia amb CSS.|Elige el título por su importancia, no por el tamaño: el tamaño se cambia con CSS." },
          { k: 'Contrast|Contraste', t: 'Que es llegeixi bé|Que se lea bien', media: { k: 'web', html: () => `<p class="mal">${L('Gris clar sobre blanc: costa de llegir.', 'Gris claro sobre blanco: cuesta leerlo.')}</p>\n<p class="be">${L('Gairebé negre sobre blanc: es llegeix bé.', 'Casi negro sobre blanco: se lee bien.')}</p>\n<p class="be2">${L('Blanc sobre blau fosc: també.', 'Blanco sobre azul oscuro: también.')}</p>`, css: '.mal {\n  color: #C8C8C8;\n}\n.be {\n  color: #1d2433;\n}\n.be2 {\n  color: white;\n  background: #3730A3;\n  padding: 6px;\n}' },
            x: "El <span class='hl'>contrast</span> és la diferència entre el color del text i el del fons. Text fosc sobre fons clar (o al revés) es llegeix bé fins i tot al sol o amb una pantalla vella. Text gris clar sobre blanc, o groc sobre blanc, costa molt de llegir, sobretot a les persones que hi veuen poc.|El <span class='hl'>contraste</span> es la diferencia entre el color del texto y el del fondo. Texto oscuro sobre fondo claro (o al revés) se lee bien incluso al sol o con una pantalla vieja. Texto gris claro sobre blanco, o amarillo sobre blanco, cuesta mucho de leer, sobre todo a las personas que ven poco." },
          { k: 'Ortografia|Ortografía', t: 'Llegeix-la en veu alta|Léela en voz alta', pic: 'img/ment/sin.webp',
            x: "Una falta d'ortografia fa que una web sembli feta amb pressa (i, com vas veure, és un dels senyals de les webs falses!). El truc dels professionals: <b>llegir el text en veu alta</b>, a poc a poc, o demanar a algú que el llegeixi. També cal revisar les majúscules, els accents i els noms propis.|Una falta de ortografía hace que una web parezca hecha con prisas (y, como viste, ¡es una de las señales de las webs falsas!). El truco de los profesionales: <b>leer el texto en voz alta</b>, despacio, o pedir a alguien que lo lea. También hay que revisar las mayúsculas, los acentos y los nombres propios." },
          { k: 'Mòbil|Móvil', t: 'Prova-la al mòbil|Pruébala en el móvil', media: { k: 'web', html: FILA_HTML, css: () => FILA_CSS + '\n@media (max-width: 600px) {\n  .fila {\n    flex-direction: column;\n  }\n}' },
            x: "La majoria de gent obrirà la teva web amb el mòbil. Toca el botó 📱 de la vista prèvia: hi ha coses massa amples, text massa petit o files que no hi caben? Amb una regla <code>@media (max-width: 600px)</code> pots posar les files en columna, fer la lletra més gran o amagar el que sobra.|La mayoría de gente abrirá tu web con el móvil. Toca el botón 📱 de la vista previa: ¿hay cosas demasiado anchas, texto demasiado pequeño o filas que no caben? Con una regla <code>@media (max-width: 600px)</code> puedes poner las filas en columna, hacer la letra más grande o esconder lo que sobra." },
          { k: 'Compte!|¡Cuidado!', t: 'Una revisió amable i útil|Una revisión amable y útil', anim: 'w8check',
            x: "Quan revises la web d'un company/a, fes-ho com t'agradaria que t'ho fessin a tu: digues primer <b>què funciona</b> i després proposa <b>una millora concreta</b>. «És lletja» no ajuda gens; «el text gris es llegeix malament, prova un color més fosc», sí.|Cuando revises la web de un compañero/a, hazlo como te gustaría que te lo hicieran a ti: di primero <b>qué funciona</b> y después propón <b>una mejora concreta</b>. «Es fea» no ayuda nada; «el texto gris se lee mal, prueba un color más oscuro», sí.",
            bad: '«No m\'agrada.»|«No me gusta.»', good: "«M'agrada el menú. Proposo posar alt a la foto del gos.»|«Me gusta el menú. Propongo poner alt a la foto del perro.»" }
        ] },
        { k: 'quiz', ph: 'mans', q: 'Quin text d\'enllaç és més <b>accessible</b>? (Pensa en algú que només escolta els enllaços, un darrere l\'altre.)|¿Qué texto de enlace es más <b>accesible</b>? (Piensa en alguien que solo escucha los enlaces, uno detrás de otro.)',
          opts: ['«Llegeix les normes del club»|«Lee las normas del club»', '«Clica aquí»|«Haz clic aquí»', '«Més»|«Más»'], a: 0,
          ex: "Si un lector de pantalla diu «clica aquí, clica aquí, clica aquí», no se sap on porta cada enllaç. El text de l'enllaç ha de dir on vas.|Si un lector de pantalla dice «haz clic aquí, haz clic aquí, haz clic aquí», no se sabe adónde lleva cada enlace. El texto del enlace tiene que decir adónde vas." },
        lz({ k: 'wquiz', ph: 'mans', q: 'Quina d\'aquestes targetes es llegeix <b>millor</b>?|¿Cuál de estas tarjetas se lee <b>mejor</b>?',
          opts: [{ html: () => `<p>${L('Trobades cada dimecres a les sis.', 'Encuentros cada miércoles a las seis.')}</p>`, css: 'p {\n  background: #FFF7ED;\n  color: #1d2433;\n  padding: 10px;\n  font-size: 18px;\n}' },
            { html: () => `<p>${L('Trobades cada dimecres a les sis.', 'Encuentros cada miércoles a las seis.')}</p>`, css: 'p {\n  background: white;\n  color: #FFE066;\n  padding: 10px;\n  font-size: 18px;\n}' },
            { html: () => `<p>${L('Trobades cada dimecres a les sis.', 'Encuentros cada miércoles a las seis.')}</p>`, css: 'p {\n  background: #3730A3;\n  color: #4F46E5;\n  padding: 10px;\n  font-size: 18px;\n}' }], a: 0,
          ex: 'Text gairebé negre sobre un fons clar: molt contrast. El groc sobre blanc i el blau sobre blau gairebé no es veuen.|Texto casi negro sobre un fondo claro: mucho contraste. El amarillo sobre blanco y el azul sobre azul casi no se ven.' }),
        lz({ k: 'wspot', ph: 'prova', q: "Revisa l'ortografia de la web del club. <b>Toca la línia que té una falta.</b>|Revisa la ortografía de la web del club. <b>Toca la línea que tiene una falta.</b>",
          html: () => `<h1>${L('Club de Lectura', 'Club de Lectura')}</h1>
<p>${L('Ens trobem cada dimecres a la biblioteca.', 'Nos reunimos cada miércoles en la biblioteca.')}</p>
<p>${L("Llegim llibres d'abentures i de misteri.", 'Leemos livros de aventuras y de misterio.')}</p>
<p>${L('Després en parlem i votem el següent.', 'Después hablamos de ellos y votamos el siguiente.')}</p>
<p>${L('Porta el teu llibre preferit!', '¡Trae tu libro favorito!')}</p>`, bad: 3,
          ex: "La línia 3 té una <b>b</b> que hauria de ser <b>v</b>. Per això cal llegir els textos a poc a poc, paraula per paraula: el corrector del navegador no sempre ho veu.|La línea 3 tiene una <b>v</b> que debería ser <b>b</b>. Por eso hay que leer los textos despacio, palabra por palabra: el corrector del navegador no siempre lo ve." }),
        lz({ k: 'wspot', ph: 'investiga', q: "Ara revisa els títols: un lector de pantalla s'hi perdria. <b>Toca la línia del títol que no segueix l'ordre.</b>|Ahora revisa los títulos: un lector de pantalla se perdería. <b>Toca la línea del título que no sigue el orden.</b>",
          html: () => `<h1>${L('Club de Lectura', 'Club de Lectura')}</h1>
<h2>${L('Qui som', 'Quiénes somos')}</h2>
<p>${L('Som vuit lectors i lectores.', 'Somos ocho lectores y lectoras.')}</p>
<h4>${L('Què llegim', 'Qué leemos')}</h4>
<p>${L('Novel·les, còmics i poesia.', 'Novelas, cómics y poesía.')}</p>`, bad: 4,
          ex: 'Després d\'un <code>&lt;h1&gt;</code> i un <code>&lt;h2&gt;</code> no pot venir un <code>&lt;h4&gt;</code>: «Què llegim» té la mateixa importància que «Qui som», així que també ha de ser un <code>&lt;h2&gt;</code>.|Después de un <code>&lt;h1&gt;</code> y un <code>&lt;h2&gt;</code> no puede venir un <code>&lt;h4&gt;</code>: «Qué leemos» tiene la misma importancia que «Quiénes somos», así que también tiene que ser un <code>&lt;h2&gt;</code>.' }),
        { k: 'move', ph: 'pausa', secs: 30, t: "Revisió de cos sencer! <b>Ulls</b>: mira lluny per la finestra i torna a mirar a prop, tres vegades. <b>Coll</b>: gira el cap a poc a poc a un costat i a l'altre. <b>Mans</b>: obre i tanca els dits deu vegades. A punt per revisar!|¡Revisión de cuerpo entero! <b>Ojos</b>: mira lejos por la ventana y vuelve a mirar cerca, tres veces. <b>Cuello</b>: gira la cabeza despacio a un lado y al otro. <b>Manos</b>: abre y cierra los dedos diez veces. ¡A punto para revisar!" },
        lz({ k: 'web', ph: 'repte', url: 'club-lectura.numi', q: "<b>Arregla l'accessibilitat.</b> Aquesta pàgina del club té dos problemes: les <b>imatges no tenen alt</b> i els títols salten de <code>&lt;h1&gt;</code> a <code>&lt;h4&gt;</code>. Posa un <code>alt</code> a cada imatge i canvia els <code>&lt;h4&gt;</code> per <code>&lt;h2&gt;</code>.|<b>Arregla la accesibilidad.</b> Esta página del club tiene dos problemas: las <b>imágenes no tienen alt</b> y los títulos saltan de <code>&lt;h1&gt;</code> a <code>&lt;h4&gt;</code>. Pon un <code>alt</code> a cada imagen y cambia los <code>&lt;h4&gt;</code> por <code>&lt;h2&gt;</code>.",
          html: () => A11Y(false), css: 'h4 {\n  color: #3730A3;\n}\nh2 {\n  color: #3730A3;\n}',
          checks: [{ k: 'attr', t: 'img', a: 'alt', v: '/.{4}/', min: 2, txt: 'Les 2 imatges tenen un <code>alt</code> que les descriu|Las 2 imágenes tienen un <code>alt</code> que las describe' }, { k: 'notag', t: 'h4' }, { k: 'tag', t: 'h2', min: 2 }, { k: 'clean' }],
          sol: { html: () => A11Y(true) },
          hint: "Recorda canviar també l'etiqueta de tancament: <h2>…</h2>. A l'alt, explica què hi ha a la imatge en poques paraules.|Recuerda cambiar también la etiqueta de cierre: <h2>…</h2>. En el alt, explica qué hay en la imagen en pocas palabras." }),
        lz({ k: 'web', ph: 'repte', url: 'club-lectura.numi', q: "<b>Millora el contrast.</b> El títol és groc i el text és gris clar, sobre fons blanc: gairebé no es llegeixen. Canvia el <code>color</code> del <code>h2</code> i del <code>p</code> per colors <b>foscos</b> (com <code>#1d2433</code>, <code>#3730A3</code> o <code>navy</code>).|<b>Mejora el contraste.</b> El título es amarillo y el texto es gris claro, sobre fondo blanco: casi no se leen. Cambia el <code>color</code> del <code>h2</code> y del <code>p</code> por colores <b>oscuros</b> (como <code>#1d2433</code>, <code>#3730A3</code> o <code>navy</code>).",
          html: CONTR_HTML, css: 'body {\n  background: white;\n}\nh2 {\n  color: #FFE066;\n}\np {\n  color: #C8C8C8;\n  font-size: 18px;\n}',
          checks: [{ k: 'styled', t: 'h2', p: 'color', v: OK_DARK, txt: 'El títol <code>&lt;h2&gt;</code> té un color fosc|El título <code>&lt;h2&gt;</code> tiene un color oscuro' }, { k: 'styled', t: 'p', p: 'color', v: OK_DARK, txt: 'El text <code>&lt;p&gt;</code> té un color fosc|El texto <code>&lt;p&gt;</code> tiene un color oscuro' }, { k: 'cssclean' }],
          sol: { css: 'body {\n  background: white;\n}\nh2 {\n  color: #3730A3;\n}\np {\n  color: #1d2433;\n  font-size: 18px;\n}' },
          hint: 'Un color en hexadecimal és fosc si comença per un número baix: #1d2433, #333, #3730A3. Els que comencen per C, D, E o F són clars.|Un color en hexadecimal es oscuro si empieza por un número bajo: #1d2433, #333, #3730A3. Los que empiezan por C, D, E o F son claros.' }),
        lz({ k: 'web', ph: 'repte', url: 'club-lectura.numi', q: "<b>Que es vegi bé al mòbil.</b> Toca 📱: els tres llibres queden massa estrets. Afegeix una regla <code>@media (max-width: 600px)</code> que posi la <code>.fila</code> en <b>columna</b>.|<b>Que se vea bien en el móvil.</b> Toca 📱: los tres libros quedan demasiado estrechos. Añade una regla <code>@media (max-width: 600px)</code> que ponga la <code>.fila</code> en <b>columna</b>.",
          html: FILA_HTML, css: FILA_CSS, tab: 'css',
          snips: [{ t: '@media (max-width: 600px) {\n  |\n}', tab: 'css' }, { t: '.fila {\n    flex-direction: |;\n  }', tab: 'css' }],
          checks: [{ k: 'media', max: 600 }, { k: 'css', s: '.fila', p: 'flex-direction', v: 'column', media: true, txt: 'Dins de <code>@media</code>, la <code>.fila</code> va en columna|Dentro de <code>@media</code>, la <code>.fila</code> va en columna' }, { k: 'cssclean' }],
          sol: { css: FILA_CSS + '\n@media (max-width: 600px) {\n  .fila {\n    flex-direction: column;\n  }\n}' },
          hint: "Dins de @media (max-width: 600px) { … } escriu una regla sencera: .fila { flex-direction: column; }. Compta bé les claus: n'hi ha dues de tancament al final.|Dentro de @media (max-width: 600px) { … } escribe una regla entera: .fila { flex-direction: column; }. Cuenta bien las llaves: hay dos de cierre al final." }),
        { k: 'review', ph: 'crea', who: 'numi', btn: 'Desa la revisió|Guarda la revisión', q: "<b>Revisa la web d'un company/a.</b> Seieu per parelles: obre la web de l'altra persona (a «Projectes» del seu ordinador) i respon amb sinceritat. Després digues-li en veu alta <b>una cosa que funciona</b> i <b>una millora concreta</b>.|<b>Revisa la web de un compañero/a.</b> Sentaos por parejas: abre la web de la otra persona (en «Proyectos» de su ordenador) y responde con sinceridad. Después dile en voz alta <b>algo que funciona</b> y <b>una mejora concreta</b>.",
          items: [
            { q: "S'entén de què va la web i per a qui és?|¿Se entiende de qué va la web y para quién es?", opts: ['Sí, del tot|Sí, del todo', 'Més o menys|Más o menos', 'No gaire|No mucho'] },
            { q: 'Les imatges tenen alt i els títols van en ordre?|¿Las imágenes tienen alt y los títulos van en orden?', opts: ['Sí, tot|Sí, todo', 'Alguna cosa no|Alguna cosa no', 'No|No'] },
            { q: 'Es llegeix bé (contrast i mida de la lletra)?|¿Se lee bien (contraste y tamaño de la letra)?', opts: ['Molt bé|Muy bien', 'Hi ha alguna part difícil|Hay alguna parte difícil', 'Costa de llegir|Cuesta leerla'] },
            { q: "Hi has trobat faltes d'ortografia?|¿Has encontrado faltas de ortografía?", opts: ['Cap|Ninguna', 'Una o dues|Una o dos', 'Bastantes|Bastantes'] },
            { q: 'Com es veu al mòbil (botó 📱)?|¿Cómo se ve en el móvil (botón 📱)?', opts: ['Molt bé|Muy bien', 'Alguna cosa és massa ampla|Algo es demasiado ancho', 'Malament|Mal'] }
          ] },
        own({ k: 'wcreate', ph: 'crea', url: 'la-meva-web.numi', name: NAME(3),
          q: "<b>La versió 3 de la teva web: revisada i millorada.</b> Fes servir la revisió del teu company/a i la llista: <b>alt</b> a totes les imatges, <b>títols en ordre</b>, bon <b>contrast</b>, <b>cap falta</b> (llegeix-la en veu alta) i una regla <code>@media</code> perquè es vegi bé al <b>mòbil</b>.|<b>La versión 3 de tu web: revisada y mejorada.</b> Usa la revisión de tu compañero/a y la lista: <b>alt</b> en todas las imágenes, <b>títulos en orden</b>, buen <b>contraste</b>, <b>ninguna falta</b> (léela en voz alta) y una regla <code>@media</code> para que se vea bien en el <b>móvil</b>.",
          crit: ['Totes les imatges tenen alt|Todas las imágenes tienen alt', 'Els títols van en ordre: primer h1, després h2|Los títulos van en orden: primero h1, después h2', 'Colors amb bon contrast i cap falta d\'ortografia|Colores con buen contraste y ninguna falta de ortografía', 'Una regla @media per al mòbil|Una regla @media para el móvil'],
          snips: [{ t: '@media (max-width: 600px) {\n  |\n}', tab: 'css' }, { t: 'img {\n  max-width: 100%;\n  height: auto;|\n}', tab: 'css' }, { t: 'a:hover {\n  |\n}', tab: 'css' }, 'alt="|"'],
          checks: [{ k: 'attr', t: 'img', a: 'alt', v: '/.{3}/', txt: 'Les imatges tenen <code>alt</code>|Las imágenes tienen <code>alt</code>' }, { k: 'order', a: 'h1', b: 'h2', txt: 'Els títols van en ordre (h1 abans que h2)|Los títulos van en orden (h1 antes que h2)' }, { k: 'media', txt: 'Hi ha una regla <code>@media</code> per al mòbil|Hay una regla <code>@media</code> para el móvil' }, { k: 'clean' }, { k: 'cssclean' }],
          hint: "Comença per la regla @media al CSS (per exemple, lletra més gran i enllaços del menú un sota l'altre). Després repassa cada <img> i llegeix tots els textos en veu alta.|Empieza por la regla @media en el CSS (por ejemplo, letra más grande y enlaces del menú uno debajo del otro). Después repasa cada <img> y lee todos los textos en voz alta." }, mine, fix3),
        { k: 'quiz', ph: 'tanca', q: 'Quina és la manera més útil de dir a un company/a com millorar la seva web?|¿Cuál es la manera más útil de decirle a un compañero/a cómo mejorar su web?',
          opts: ["«M'agrada la galeria. Proposo un color més fosc per al text, que costa de llegir.»|«Me gusta la galería. Propongo un color más oscuro para el texto, que cuesta de leer.»", '«Està malament.»|«Está mal.»', '«Fes-la de nou.»|«Hazla de nuevo.»'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Has acabat la teva web. Quin és el millor truc per trobar les faltes d\'ortografia?|Has terminado tu web. ¿Cuál es el mejor truco para encontrar las faltas de ortografía?',
          opts: ['Llegir-la en veu alta, a poc a poc, o que la llegeixi algú altre|Leerla en voz alta, despacio, o que la lea otra persona', 'Mirar-la molt de pressa|Mirarla muy deprisa', 'Fer la lletra més gran|Hacer la letra más grande'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ---------- Sessió 4 · Presentació i diploma ---------- */
    { id: 'w8-4', t: 'Presentació i diploma|Presentación y diploma', min: 45, proj: true, badge: 'w_u8grad',
      learn: ["Una web pública mai no porta dades personals: ni adreça, ni telèfon, ni escola.|Una web pública nunca lleva datos personales: ni dirección, ni teléfono, ni colegio.",
        'Per publicar-la, el document complet té lang, title i viewport, i un peu amb els crèdits.|Para publicarla, el documento completo tiene lang, title y viewport, y un pie con los créditos.',
        "Presentar una web és explicar per a qui és, com l'has feta i què n'has après.|Presentar una web es explicar para quién es, cómo la has hecho y qué has aprendido."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Quina d'aquestes coses <b>no</b> forma part de la revisió d'una web?|¿Cuál de estas cosas <b>no</b> forma parte de la revisión de una web?",
          opts: ['Posar-hi com més colors millor|Ponerle cuantos más colores mejor', 'Comprovar que les imatges tenen alt|Comprobar que las imágenes tienen alt', 'Provar-la al mòbil|Probarla en el móvil'], a: 0,
          ex: 'Al contrari: pocs colors, ben triats i amb bon contrast.|Al contrario: pocos colores, bien elegidos y con buen contraste.' },
        { k: 'story', ph: 'missio', who: 'both', scene: 'illa', mood: 'dance', title: "S'obre la Mostra!|¡Se abre la Muestra!",
          t: "Avui és el gran dia: s'obre la <b>Mostra de Webs</b>! Abans de presentar, deixarem la web a punt per publicar: un peu de pàgina amb els crèdits, un enllaç per tornar a dalt i <b>cap dada personal</b>. I al final, en Bit lliurarà els diplomes!|¡Hoy es el gran día: se abre la <b>Muestra de Webs</b>! Antes de presentar, dejaremos la web a punto para publicar: un pie de página con los créditos, un enlace para volver arriba y <b>ningún dato personal</b>. ¡Y al final, Bit entregará los diplomas!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El viatge|El viaje', t: 'Vuit unitats, una web teva|Ocho unidades, una web tuya', anim: 'w8journey',
            x: "Vas començar descobrint com viatja una pàgina per internet. Després vas aprendre l'<b>HTML</b>, les <b>imatges i els enllaços</b>, el <b>CSS</b>, les <b>caixes</b>, la <b>disposició</b> amb flexbox i graelles i el disseny per al <b>mòbil</b>. I ara ho has ajuntat tot en una web pensada i feta per tu.|Empezaste descubriendo cómo viaja una página por internet. Después aprendiste el <b>HTML</b>, las <b>imágenes y los enlaces</b>, el <b>CSS</b>, las <b>cajas</b>, la <b>disposición</b> con flexbox y rejillas y el diseño para el <b>móvil</b>. Y ahora lo has juntado todo en una web pensada y hecha por ti." },
          { k: 'Dades|Datos', t: 'El que no va mai a una web pública|Lo que nunca va en una web pública', anim: 'w8safe',
            x: "Una web publicada la pot veure <b>qualsevol persona del món</b>. Per això hi pots posar el teu nom de pila, però mai l'<b>adreça</b>, el <b>telèfon</b>, el <b>nom de l'escola</b>, el cognom complet ni fotos on se't vegi la cara. Si vols que et contactin, que sigui a través del professor/a o de la família.|Una web publicada la puede ver <b>cualquier persona del mundo</b>. Por eso puedes poner tu nombre, pero nunca la <b>dirección</b>, el <b>teléfono</b>, el <b>nombre del colegio</b>, el apellido completo ni fotos en las que se te vea la cara. Si quieres que te contacten, que sea a través del profesor/a o de la familia." },
          { k: 'Publicar|Publicar', t: 'A punt per publicar|A punto para publicar', media: { k: 'web', html: () => DOCW(true) },
            x: "Fins ara l'editor afegia sol l'estructura de la pàgina. Per publicar-la en un servidor de veritat, el document ha d'anar complet: <code>&lt;html lang&gt;</code> (l'idioma), <code>&lt;title&gt;</code> (el nom que surt a la pestanya i als cercadors) i el <code>viewport</code> per al mòbil. Després, es puja el fitxer a un servidor i el domini hi porta, com vas veure a la unitat 1.|Hasta ahora el editor añadía solo la estructura de la página. Para publicarla en un servidor de verdad, el documento tiene que ir completo: <code>&lt;html lang&gt;</code> (el idioma), <code>&lt;title&gt;</code> (el nombre que sale en la pestaña y en los buscadores) y el <code>viewport</code> para el móvil. Después, se sube el archivo a un servidor y el dominio lleva a él, como viste en la unidad 1." },
          { k: 'Presentar|Presentar', t: 'Tres preguntes per presentar|Tres preguntas para presentar', pic: 'img/ment/nom.webp',
            x: "Per presentar la teva web, respon tres preguntes: <b>Per a qui és i de què va?</b> (ensenya la portada), <b>Com l'has feta?</b> (ensenya una part del codi: el menú, una classe, la regla @media) i <b>Què n'has après?</b> (un error que vas arreglar, una millora que et va proposar un company/a). Acaba ensenyant-la al mòbil!|Para presentar tu web, responde tres preguntas: <b>¿Para quién es y de qué va?</b> (enseña la portada), <b>¿Cómo la has hecho?</b> (enseña una parte del código: el menú, una clase, la regla @media) y <b>¿Qué has aprendido?</b> (un error que arreglaste, una mejora que te propuso un compañero/a). ¡Termina enseñándola en el móvil!",
            tip: 'Parla a poc a poc i mira el públic. Dos minuts són suficients.|Habla despacio y mira al público. Dos minutos son suficientes.' },
          { k: 'Compte!|¡Cuidado!', t: 'Crèdits i «Torna a dalt»|Créditos y «Vuelve arriba»', media: { k: 'web', html: () => AINA(true, true), css: AINA_CSS },
            x: "Una web acabada té un <b>peu de pàgina</b> que diu qui l'ha feta i d'on surten les imatges, i un enllaç per <b>tornar a dalt</b>: posa <code>id=\"inici\"</code> a la capçalera i, al peu, <code>&lt;a href=\"#inici\"&gt;</code>. Al mòbil, on les webs són molt llargues, s'agraeix molt.|Una web terminada tiene un <b>pie de página</b> que dice quién la ha hecho y de dónde salen las imágenes, y un enlace para <b>volver arriba</b>: pon <code>id=\"inici\"</code> en la cabecera y, en el pie, <code>&lt;a href=\"#inici\"&gt;</code>. En el móvil, donde las webs son muy largas, se agradece mucho.",
            bad: 'Sense peu: no se sap qui l\'ha feta ni d\'on són les imatges.|Sin pie: no se sabe quién la ha hecho ni de dónde son las imágenes.', good: 'Peu amb els crèdits i un enllaç «Torna a dalt».|Pie con los créditos y un enlace «Vuelve arriba».' }
        ] },
        { k: 'seq', ph: 'mans', q: '<b>Ordena</b> la teva presentació a la Mostra.|<b>Ordena</b> tu presentación en la Muestra.',
          items: ['Dic el nom de la web, de què va i per a qui és|Digo el nombre de la web, de qué va y para quién es', 'Ensenyo les seccions amb el menú|Enseño las secciones con el menú', "Ensenyo una part del codi i l'explico|Enseño una parte del código y la explico", "Explico un error que vaig arreglar o una millora|Explico un error que arreglé o una mejora", "L'ensenyo al mòbil i responc preguntes|La enseño en el móvil y respondo preguntas"],
          ex: "De què va, com funciona, com l'has feta i què n'has après: amb aquest ordre, el públic t'entén de seguida.|De qué va, cómo funciona, cómo la has hecho y qué has aprendido: con este orden, el público te entiende enseguida." },
        { k: 'quiz', ph: 'prova', q: "La Júlia vol posar a la seva web pública un apartat «Sobre mi». Què hi pot posar?|Júlia quiere poner en su web pública un apartado «Sobre mí». ¿Qué puede poner?",
          opts: ["El seu nom de pila i les coses que li agraden|Su nombre y las cosas que le gustan", "L'adreça de casa per si algú li vol enviar una carta|La dirección de casa por si alguien le quiere enviar una carta", 'El seu telèfon i el nom de la seva escola|Su teléfono y el nombre de su colegio'], a: 0,
          ex: "El nom de pila i les aficions no diuen on trobar-la. L'adreça, el telèfon o l'escola, sí: no es posen mai a una web pública.|El nombre y las aficiones no dicen dónde encontrarla. La dirección, el teléfono o el colegio, sí: nunca se ponen en una web pública." },
        lz({ k: 'wspot', ph: 'prova', q: "Aquesta és la pàgina «Sobre mi» de l'Aina, que la publicarà avui. <b>Toca la línia que no hauria de ser en una web pública.</b>|Esta es la página «Sobre mí» de Aina, que la publicará hoy. <b>Toca la línea que no debería estar en una web pública.</b>",
          html: () => `<h1>${L("Hola! Soc l'Aina", '¡Hola! Soy Aina')}</h1>
<p>${L("M'agraden les estrelles i els planetes.", 'Me gustan las estrellas y los planetas.')}</p>
<p>${L('Visc al carrer dels Til·lers, 7, segon pis.', 'Vivo en la calle de los Tilos, 7, segundo piso.')}</p>
<p>${L('Aquesta web parla del cel de nit.', 'Esta web habla del cielo de noche.')}</p>`, bad: 3,
          ex: "L'<b>adreça</b> diu on viu l'Aina, i la web la pot veure qualsevol persona. La resta de línies parlen de les seves aficions i de la web: perfecte.|La <b>dirección</b> dice dónde vive Aina, y la web la puede ver cualquier persona. El resto de líneas hablan de sus aficiones y de la web: perfecto." }),
        { k: 'quiz', ph: 'investiga', q: 'Per a què serveix el <code>&lt;title&gt;</code> del <code>&lt;head&gt;</code>?|¿Para qué sirve el <code>&lt;title&gt;</code> del <code>&lt;head&gt;</code>?',
          opts: ['És el nom que surt a la pestanya del navegador i als resultats dels cercadors|Es el nombre que sale en la pestaña del navegador y en los resultados de los buscadores', 'És el títol gran de la pàgina, com un h1|Es el título grande de la página, como un h1', 'Fa que la pàgina sigui segura|Hace que la página sea segura'], a: 0 },
        { k: 'move', ph: 'pausa', secs: 30, t: "Assaig de presentació! Posa't dret/a, respira fondo tres vegades i saluda el públic imaginari. Ara digues en veu alta, a poc a poc: «La meva web es diu… i és per a…». Acaba amb una reverència!|¡Ensayo de presentación! Ponte de pie, respira hondo tres veces y saluda al público imaginario. Ahora di en voz alta, despacio: «Mi web se llama… y es para…». ¡Termina con una reverencia!" },
        lz({ k: 'web', ph: 'repte', url: 'cel-de-nit.numi', q: "<b>Torna a dalt.</b> La web de l'Aina ja té peu de pàgina. Posa <code>id=\"inici\"</code> a la <code>&lt;header&gt;</code> i afegeix al <code>&lt;footer&gt;</code> un enllaç que hi porti: <code>&lt;a href=\"#inici\"&gt;</code>.|<b>Vuelve arriba.</b> La web de Aina ya tiene pie de página. Pon <code>id=\"inici\"</code> en el <code>&lt;header&gt;</code> y añade al <code>&lt;footer&gt;</code> un enlace que lleve a él: <code>&lt;a href=\"#inici\"&gt;</code>.",
          html: () => AINA(false, false), css: AINA_CSS,
          snips: ['id="inici"', '<a href="#inici">|</a>'],
          checks: [{ k: 'id', id: 'inici' }, { k: 'in', t: 'a', p: 'footer', txt: 'Hi ha un enllaç dins del <code>&lt;footer&gt;</code>|Hay un enlace dentro del <code>&lt;footer&gt;</code>' }, { k: 'link', href: '#inici', txt: "L'enllaç porta a <code>#inici</code>|El enlace lleva a <code>#inici</code>" }, { k: 'clean' }],
          sol: { html: () => AINA(true, true) },
          hint: "L'id va dins de l'etiqueta d'obertura: <header id=\"inici\">. L'enllaç, dins del footer, amb un text que digui on porta: «Torna a dalt».|El id va dentro de la etiqueta de apertura: <header id=\"inici\">. El enlace, dentro del footer, con un texto que diga adónde lleva: «Vuelve arriba»." }),
        lz({ k: 'web', ph: 'repte', url: 'cel-de-nit.numi', q: "<b>El document complet.</b> Per publicar la web en un servidor, el document ha d'anar sencer. Afegeix l'idioma a <code>&lt;html lang=\"…\"&gt;</code> i, dins del <code>&lt;head&gt;</code>, el <code>&lt;title&gt;</code> i la metaetiqueta <b>viewport</b>.|<b>El documento completo.</b> Para publicar la web en un servidor, el documento tiene que ir entero. Añade el idioma a <code>&lt;html lang=\"…\"&gt;</code> y, dentro del <code>&lt;head&gt;</code>, el <code>&lt;title&gt;</code> y la metaetiqueta <b>viewport</b>.",
          html: () => DOCW(false),
          snips: ['<title>|</title>', '<meta name="viewport" content="width=device-width, initial-scale=1">', 'lang="|"'],
          checks: [{ k: 'lang' }, { k: 'title' }, { k: 'attr', t: 'meta', a: 'name', v: 'viewport', txt: 'Hi ha la metaetiqueta <code>viewport</code>|Está la metaetiqueta <code>viewport</code>' }, { k: 'clean' }],
          sol: { html: () => DOCW(true) },
          hint: "lang va dins de l'etiqueta <html>: <html lang=\"ca\"> (o \"es\"). El title i el meta van entre <head> i </head>.|lang va dentro de la etiqueta <html>: <html lang=\"es\"> (o \"ca\"). El title y el meta van entre <head> y </head>." }),
        own({ k: 'wcreate', ph: 'crea', url: 'la-meva-web.numi', name: 'La meva web (versió final)|Mi web (versión final)',
          q: "<b>La versió final de la teva web.</b> Repassa que no hi hagi cap dada personal, posa <code>id=\"inici\"</code> a la capçalera i fes un <b>peu de pàgina</b> amb els crèdits (qui l'ha feta, d'on són les imatges) i un enllaç <b>Torna a dalt</b>. Quan la desis, ja estarà a punt per a la Mostra!|<b>La versión final de tu web.</b> Repasa que no haya ningún dato personal, pon <code>id=\"inici\"</code> en la cabecera y haz un <b>pie de página</b> con los créditos (quién la ha hecho, de dónde son las imágenes) y un enlace <b>Vuelve arriba</b>. ¡Cuando la guardes, ya estará a punto para la Muestra!",
          crit: ["Cap dada personal: ni adreça, ni telèfon, ni escola|Ningún dato personal: ni dirección, ni teléfono, ni colegio", 'Un peu de pàgina amb els crèdits|Un pie de página con los créditos', 'Un enllaç «Torna a dalt» que porta a #inici|Un enlace «Vuelve arriba» que lleva a #inici'],
          snips: ['id="inici"', '<a href="#inici">|</a>', '<footer>\n  <p>|</p>\n</footer>'],
          checks: [{ k: 'text', t: 'footer', min: 10, txt: 'El peu de pàgina té els crèdits|El pie de página tiene los créditos' }, { k: 'id', id: 'inici' }, { k: 'link', href: '#inici', txt: 'Un enllaç porta a <code>#inici</code>|Un enlace lleva a <code>#inici</code>' }, { k: 'clean' }],
          hint: "<header id=\"inici\"> a dalt de tot. Al footer: un paràgraf amb «Web feta per… a Numi Tech. Imatges: Numi.» i <a href=\"#inici\">Torna a dalt</a>.|<header id=\"inici\"> arriba del todo. En el footer: un párrafo con «Web hecha por… en Numi Tech. Imágenes: Numi.» y <a href=\"#inici\">Vuelve arriba</a>." }, mine, fix4),
        { k: 'review', ph: 'crea', who: 'numi', btn: 'Desa i continua|Guarda y continúa', q: "<b>Prepara la presentació.</b> Respon aquestes preguntes: t'ajudaran a saber què vols explicar a la Mostra.|<b>Prepara la presentación.</b> Responde estas preguntas: te ayudarán a saber qué quieres explicar en la Muestra.",
          items: [
            { q: "De què n'estàs més orgullós/osa?|¿De qué estás más orgulloso/a?", opts: ['El disseny i els colors|El diseño y los colores', 'Els textos|Los textos', 'El menú i les seccions|El menú y las secciones', 'Com es veu al mòbil|Cómo se ve en el móvil'] },
            { q: "Què t'ha costat més?|¿Qué te ha costado más?", opts: ["L'HTML|El HTML", 'El CSS|El CSS', 'Trobar els errors|Encontrar los errores', 'Decidir el contingut|Decidir el contenido'] },
            { q: 'Què hi afegiries si tinguessis més temps?|¿Qué añadirías si tuvieras más tiempo?', opts: ['Més seccions|Más secciones', 'Una galeria|Una galería', 'Una pàgina nova|Una página nueva', 'Efectes amb :hover|Efectos con :hover'] }
          ] },
        { k: 'diploma', ph: 'tanca', skills: [
          'Explicar com viatja una pàgina per internet|Explicar cómo viaja una página por internet',
          'Escriure HTML: títols, paràgrafs i llistes|Escribir HTML: títulos, párrafos y listas',
          'Posar imatges amb alt i enllaços|Poner imágenes con alt y enlaces',
          'Donar estil amb CSS: colors, lletres i classes|Dar estilo con CSS: colores, letras y clases',
          'Fer caixes amb farciment, vores i ombres|Hacer cajas con relleno, bordes y sombras',
          'Col·locar elements amb flexbox i graelles|Colocar elementos con flexbox y rejillas',
          'Adaptar una web al mòbil i detectar webs falses|Adaptar una web al móvil y detectar webs falsas',
          'Planificar, construir, revisar i presentar una web pròpia|Planificar, construir, revisar y presentar una web propia'] },
        { k: 'story', ph: 'tanca', who: 'bit', mood: 'win', t: "BIP BIP BIP! Enhorabona, creador/a web! Has acabat el curs. Ara ja saps el que hi ha darrere de cada pàgina que obres: etiquetes, regles i molta feina pensada per a les persones que la faran servir. Continua creant!|¡BIP BIP BIP! ¡Enhorabuena, creador/a web! Has terminado el curso. Ahora ya sabes lo que hay detrás de cada página que abres: etiquetas, reglas y mucho trabajo pensado para las personas que la usarán. ¡Sigue creando!" },
        { k: 'quiz', ph: 'tanca', q: 'Ara ja ho saps: què fa un creador/a web quan alguna cosa no es veu com esperava?|Ahora ya lo sabes: ¿qué hace un creador/a web cuando algo no se ve como esperaba?',
          opts: ["Busca la línia que falla (una etiqueta sense tancar, un punt i coma…), l'arregla i ho torna a provar|Busca la línea que falla (una etiqueta sin cerrar, un punto y coma…), la arregla y lo vuelve a probar", 'Ho esborra tot|Lo borra todo', 'Diu que és culpa del navegador|Dice que es culpa del navegador'], a: 0,
          ex: 'Equivocar-se forma part de crear, i ho has fet molt bé durant tot el curs. Enhorabona!|Equivocarse forma parte de crear, y lo has hecho muy bien durante todo el curso. ¡Enhorabuena!' },
        { k: 'feel', ph: 'tanca' }
      ] }
  ];
  S.forEach(s => s.steps.forEach(lz));
  return { t: 'La meva web|Mi web', d: 'Projecte final: planificar, construir, revisar i presentar|Proyecto final: planificar, construir, revisar y presentar', color: '#0E7490', s: S };
})();

const c = TECH.find(x => x.id === 'web'); delete c.soon;
for (const [n, u] of Object.entries(COURSE_UNITS)) c.units[n - 1] = u;
})();
