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
