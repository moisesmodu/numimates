/* Tech Digital · unitat 6 «Consumidors digitals» · guia del professorat (d6-1 … d6-4)
   Material propi de Numi. Classe de 60 minuts; marques, creadors, videojocs i apps (Llamp, @Laia_Patins, Xuxes Galàctiques,
   Granja Nuvi, VideoNuvi…) són inventats. Sense jutjar els hàbits de consum de cap família: no es pregunta què tenen, què
   compren ni quants diners gasten. Les xifres dels exercicis (preus, probabilitats) són exemples inventats per fer números.
   La sessió d6-4 tanca el curs: diploma a l'app i en paper. */
{
  const LAIA = { k: 'dig', kind: 'post', from: '@Laia_Patins|@Laia_Patins', av: '🛼', when: 'fa 1 h|hace 1 h', html: `<div style="font-size:40px;text-align:center;background:#E6FAF7;border-radius:12px;padding:6px">🛼👟⚡</div><p>Avui patino amb les meves bambes Llamp ⚡ (enllaç a la descripció!). Amb el codi LAIA10 tens un 10% de descompte! Són les millors del món!</p><p><small>Gràcies a Llamp pel regal 💛</small></p>|<div style="font-size:40px;text-align:center;background:#E6FAF7;border-radius:12px;padding:6px">🛼👟⚡</div><p>Hoy patino con mis zapatillas Llamp ⚡ (¡enlace en la descripción!). ¡Con el código LAIA10 tienes un 10% de descuento! ¡Son las mejores del mundo!</p><p><small>Gracias a Llamp por el regalo 💛</small></p>` };
  const XUXES = { k: 'dig', kind: 'game', from: 'La cursa de les Xuxes Galàctiques|La carrera de las Xuxes Galàctiques', av: '🍬', html: `<p>Recull 20 xuxes i guanya un cupó! 🍬🍬🍬</p><div class="gbox"><span class="ge">🛒</span><div>Compra Xuxes Galàctiques i desbloqueja nivells nous!</div></div>|<p>¡Recoge 20 chuches y gana un cupón! 🍬🍬🍬</p><div class="gbox"><span class="ge">🛒</span><div>¡Compra Xuxes Galàctiques y desbloquea niveles nuevos!</div></div>` };
  const GRANJA = { k: 'dig', kind: 'game', from: 'Granja Nuvi · Botiga|Granja Nuvi · Tienda', av: '🥕', when: '💎 20|💎 20', html: `<p><span class="gtag">⏳ Oferta: 59:59!</span></p><div class="gbox"><span class="ge">⏱️</span><div>Collita en 8 hores… o ara mateix per <span class="gbtn">💎 50</span></div></div><div class="gbox"><span class="ge">🎫</span><div>Passi Granger d'Or: 4,99 €/mes · es renova sol</div></div><p><small>Paquet més petit: 💎 500. Vestit d'espantaocells: 💎 600.</small></p>|<p><span class="gtag">⏳ ¡Oferta: 59:59!</span></p><div class="gbox"><span class="ge">⏱️</span><div>Cosecha en 8 horas… o ahora mismo por <span class="gbtn">💎 50</span></div></div><div class="gbox"><span class="ge">🎫</span><div>Pase Granjero de Oro: 4,99 €/mes · se renueva solo</div></div><p><small>Paquete más pequeño: 💎 500. Traje de espantapájaros: 💎 600.</small></p>` };
  const FEED = { k: 'dig', kind: 'web', url: 'videonuvi.xyz/inici|videonuvi.xyz/inicio', html: `<p><b>▶️ Per a tu</b></p><p>⚽ Gols 1 · ⚽ Gols 2 · ⚽ Gols 3 · ⚽ Gols 4</p><p>⏭️ El vídeo següent comença en 3…</p><p>⬇️ Llisca per veure'n més (sempre n'hi ha més)</p><p>🔍 Cerca</p>|<p><b>▶️ Para ti</b></p><p>⚽ Goles 1 · ⚽ Goles 2 · ⚽ Goles 3 · ⚽ Goles 4</p><p>⏭️ El vídeo siguiente empieza en 3…</p><p>⬇️ Desliza para ver más (siempre hay más)</p><p>🔍 Buscar</p>` };
  const GALETES = { k: 'dig', kind: 'post', from: '@FiraSuper_Vilaplana|@FeriaSuper_Vilaplana', av: '🍪', when: 'avui|hoy', html: `<div style="font-size:40px;text-align:center;background:#FFF3D6;border-radius:12px;padding:6px">🍪✨</div><p>Les MILLORS galetes de l'univers!!! Només queden 5 minuts per reservar-les! Tothom ja n'ha comprat: no et quedis sense!</p><p><small>Preu: pregunta per privat</small></p>|<div style="font-size:40px;text-align:center;background:#FFF3D6;border-radius:12px;padding:6px">🍪✨</div><p>¡¡¡Las MEJORES galletas del universo!!! ¡Solo quedan 5 minutos para reservarlas! Todo el mundo ya ha comprado: ¡no te quedes sin!</p><p><small>Precio: pregunta por privado</small></p>` };
  const HELP = { k: 'dig', kind: 'help' };

  Object.assign(TGUIDE, {

    /* ---------- Sessió 1 · Publicitat amagada ---------- */
    'd6-1': {
      intro: "Primera sessió de la unitat 6, «Consumidors digitals». L'alumnat descobreix que la publicitat no sempre es nota: creadors de contingut que cobren o reben productes, codis de descompte, vídeos d'obrir caixes regalades, resultats patrocinats, «notícies» pagades i videojocs fets per una marca (videojocs-anunci). Aprèn que, quan algú cobra o rep regals per parlar d'un producte, ho ha de dir clarament (per exemple, «#publi»), distingeix informació de tècniques per convèncer i practica les tres preguntes davant d'un anunci: qui el paga, què vol que faci i què no em diu. El missatge no és «la publicitat és dolenta», sinó «saber-la veure per decidir amb calma».|Primera sesión de la unidad 6, «Consumidores digitales». El alumnado descubre que la publicidad no siempre se nota: creadores de contenido que cobran o reciben productos, códigos de descuento, vídeos de abrir cajas regaladas, resultados patrocinados, «noticias» pagadas y videojuegos hechos por una marca (videojuegos-anuncio). Aprende que, cuando alguien cobra o recibe regalos por hablar de un producto, lo tiene que decir claramente (por ejemplo, «#publi»), distingue información de técnicas para convencer y practica las tres preguntas ante un anuncio: quién lo paga, qué quiere que haga y qué no me dice. El mensaje no es «la publicidad es mala», sino «saber verla para decidir con calma».",
      claus: [
        "La publicitat pot estar amagada: creadors que cobren, caixes regalades, patrocinats, «notícies» pagades i videojocs-anunci.|La publicidad puede estar escondida: creadores que cobran, cajas regaladas, patrocinados, «noticias» pagadas y videojuegos-anuncio.",
        "Qui cobra o rep regals per parlar d'un producte ho ha de dir clarament: «#publi», «publicitat», «col·laboració».|Quien cobra o recibe regalos por hablar de un producto lo tiene que decir claramente: «#publi», «publicidad», «colaboración».",
        "La informació (preu, talles, materials) ajuda a decidir; les tècniques per convèncer (presses, «tothom ho té», exageracions) volen que decidim de pressa.|La información (precio, tallas, materiales) ayuda a decidir; las técnicas para convencer (prisas, «todo el mundo lo tiene», exageraciones) quieren que decidamos deprisa.",
        "Tres preguntes: qui el paga, què vol que faci, què no em diu. I decidir amb calma, en família.|Tres preguntas: quién lo paga, qué quiere que haga, qué no me dice. Y decidir con calma, en familia."
      ],
      prev: [
        "Sessió d3-3: els resultats de cerca amb l'etiqueta «Anunci».|Sesión d3-3: los resultados de búsqueda con la etiqueta «Anuncio».",
        "Sessió d2-1: les emocions fortes i les presses com a pistes.|Sesión d2-1: las emociones fuertes y las prisas como pistas."
      ],
      obj: [
        "L'alumne/a distingeix publicitat de continguts que no ho són, també quan està amagada.|El alumno/a distingue publicidad de contenidos que no lo son, también cuando está escondida.",
        "L'alumne/a troba pistes de publicitat en una publicació d'un creador de contingut.|El alumno/a encuentra pistas de publicidad en una publicación de un creador de contenido.",
        "L'alumne/a diferencia informació de tècniques per convèncer.|El alumno/a diferencia información de técnicas para convencer.",
        "L'alumne/a aplica les tres preguntes davant d'un anunci i en parla amb respecte.|El alumno/a aplica las tres preguntas ante un anuncio y habla de ello con respeto."
      ],
      comp: [
        "Competència digital (CD2): anàlisi crítica de continguts i publicitat|Competencia digital (CD2): análisis crítico de contenidos y publicidad",
        "Competència ciutadana: consum responsable i drets de les persones consumidores|Competencia ciudadana: consumo responsable y derechos de las personas consumidoras",
        "Competència en comunicació lingüística: intencions dels missatges i persuasió|Competencia en comunicación lingüística: intenciones de los mensajes y persuasión"
      ],
      vocab: [
        ["Publicitat|Publicidad", "Missatge pagat perquè compris o perquè t'agradi una marca.|Mensaje pagado para que compres o para que te guste una marca."],
        ["Creador/a de contingut (influencer)|Creador/a de contenido (influencer)", "Persona que publica vídeos o fotos i té molts seguidors.|Persona que publica vídeos o fotos y tiene muchos seguidores."],
        ["#publi|#publi", "Etiqueta que avisa que un contingut és publicitat.|Etiqueta que avisa de que un contenido es publicidad."],
        ["Patrocinat|Patrocinado", "Contingut que una empresa ha pagat perquè surti.|Contenido que una empresa ha pagado para que salga."],
        ["Videojoc-anunci (advergame)|Videojuego-anuncio (advergame)", "Videojoc fet per una marca per fer-se publicitat.|Videojuego hecho por una marca para hacerse publicidad."],
        ["Tècnica per convèncer|Técnica para convencer", "Truc d'un anunci per fer-te voler una cosa de pressa.|Truco de un anuncio para hacerte querer algo deprisa."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Publicitat amagada»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Publicidad escondida»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Les targetes d'anuncis (un paquet per grup de 4) i la fitxa de les tres preguntes|Las tarjetas de anuncios (un paquete por grupo de 4) y la ficha de las tres preguntas"
        ],
        imprimir: ["Caçadors d'anuncis (imprimible 1): un paquet per grup|Cazadores de anuncios (imprimible 1): un paquete por grupo", "Les tres preguntes (imprimible 2): una per alumne/a|Las tres preguntas (imprimible 2): una por alumno/a"],
        prep: [
          "Imprimir i retallar les targetes d'anuncis (10 per grup).|Imprimir y recortar las tarjetas de anuncios (10 por grupo).",
          "Si voleu, portar envasos o revistes amb publicitat (sense fer servir creadors reals coneguts per l'alumnat).|Si queréis, traer envases o revistas con publicidad (sin usar creadores reales conocidos por el alumnado).",
          "Evitar preguntar què tenen, què volen comprar o què compren a casa: es parla dels anuncis, no de les famílies.|Evitar preguntar qué tienen, qué quieren comprar o qué compran en casa: se habla de los anuncios, no de las familias."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: les bambes de la Jana|Bienvenida: las zapatillas de Jana", fase: 'inici',
          fa: "Presenta la unitat 6. Explica la història de la Jana i les bambes de la @Laia_Patins. Pregunta per què creuen que la Laia porta aquelles bambes, sense demanar quins creadors miren.|Presenta la unidad 6. Explica la historia de Jana y las zapatillas de @Laia_Patins. Pregunta por qué creen que Laia lleva esas zapatillas, sin preguntar qué creadores ven.",
          diu: ["Per què creieu que la Laia porta les bambes Llamp?|¿Por qué creéis que Laia lleva las zapatillas Llamp?",
            "Com es guanyen la vida els creadors de contingut?|¿Cómo se ganan la vida los creadores de contenido?",
            "Avui aprendrem a veure la publicitat amagada.|Hoy aprenderemos a ver la publicidad escondida."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Anuncis visibles i amagats|Anuncios visibles y escondidos", fase: 'teoria',
          fa: "Amb les animacions, presenta la publicitat visible i la disfressada. Projecta la publicació de la Laia i el videojoc de les xuxes, i explica que qui cobra o rep regals ho ha de dir clarament. Acaba amb les tres preguntes.|Con las animaciones, presenta la publicidad visible y la disfrazada. Proyecta la publicación de Laia y el videojuego de las chuches, y explica que quien cobra o recibe regalos lo tiene que decir claramente. Termina con las tres preguntas.",
          diu: ["On heu vist anuncis avui (al carrer, a la tele, a l'esmorzar)?|¿Dónde habéis visto anuncios hoy (en la calle, en la tele, en el desayuno)?",
            "Si la Laia ha rebut les bambes de regal, què hauria de posar?|Si Laia ha recibido las zapatillas de regalo, ¿qué debería poner?",
            "Un videojoc pot ser un anunci? Com?|¿Un videojuego puede ser un anuncio? ¿Cómo?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Caçadors d'anuncis|Cazadores de anuncios", fase: 'desconnectat',
          fa: "En grups de 4, reparteix les targetes. Primer les separen en «Publicitat» i «No és publicitat». Després, en trien dues de publicitat i hi apliquen les tres preguntes a la fitxa. Posada en comú: quina era més ben amagada?|En grupos de 4, reparte las tarjetas. Primero las separan en «Publicidad» y «No es publicidad». Después, eligen dos de publicidad y les aplican las tres preguntas en la ficha. Puesta en común: ¿cuál estaba mejor escondida?",
          diu: ["Quina targeta us ha fet dubtar?|¿Qué tarjeta os ha hecho dudar?",
            "Què no diu aquest anunci?|¿Qué no dice este anuncio?",
            "Que una cosa t'agradi està bé: com decideixes si la vols de veritat?|Que algo te guste está bien: ¿cómo decides si lo quieres de verdad?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: la pregunta de repàs, la història, les cinc targetes, publicitat o no, la publicació de la Laia, el «#publi» i la conversa amb la Jana. Pausa activa tots junts.|Cada alumno/a hace la sesión hasta la pausa activa: la pregunta de repaso, la historia, las cinco tarjetas, publicidad o no, la publicación de Laia, el «#publi» y la conversación con Jana. Pausa activa todos juntos.",
          diu: ["Quina pista de la publicació de la Laia era a la lletra petita?|¿Qué pista de la publicación de Laia estaba en la letra pequeña?",
            "Com li heu dit a la Jana sense fer-la enfadar?|¿Cómo se lo habéis dicho a Jana sin hacerla enfadar?",
            "Ara, tots: passarel·la o estàtua!|Ahora, todos: ¡pasarela o estatua!"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 10, t: "Reptes i la meva lupa|Retos y mi lupa", fase: 'ordinador',
          fa: "Continuen amb els reptes: informació o tècnica per convèncer, el videojoc de les xuxes, la «notícia» del iogurt i els resultats de cerca. Després trien la seva lupa d'anuncis.|Siguen con los retos: información o técnica para convencer, el videojuego de las chuches, la «noticia» del yogur y los resultados de búsqueda. Después eligen su lupa de anuncios.",
          diu: ["«Edició limitada» és informació o una tècnica? Per què?|«Edición limitada», ¿es información o una técnica? ¿Por qué?",
            "Quines fonts de la cerca no venien bambes?|¿Qué fuentes de la búsqueda no vendían zapatillas?",
            "Quina pregunta de la lupa us costarà més de fer-vos?|¿Qué pregunta de la lupa os costará más haceros?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: la meva lupa d'anuncis (i «Caçadors d'anuncis», per a casa).|«Retos» y el paso «Crea»: mi lupa de anuncios (y «Cazadores de anuncios», para casa).", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu les idees clau amb el resum. Tiquet de sortida, preguntes finals i com s'han sentit. Explica la proposta per a casa: caçar anuncis durant un dia en família.|Repasad las ideas clave con el resumen. Ticket de salida, preguntas finales y cómo se han sentido. Explica la propuesta para casa: cazar anuncios durante un día en familia.",
          diu: ["Digueu una disfressa de la publicitat.|Decid un disfraz de la publicidad.",
            "Quines són les tres preguntes?|¿Cuáles son las tres preguntas?",
            "Qui caçarà més anuncis a casa?|¿Quién cazará más anuncios en casa?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que si un creador fa publicitat, menteix.|Piensa que si un creador hace publicidad, miente.",
          "Fer publicitat és legal i és una feina; el que no està bé és amagar-la. La clau és saber-ho.|Hacer publicidad es legal y es un trabajo; lo que no está bien es esconderla. La clave es saberlo."],
        ["Creu que només és publicitat si hi ha diners pel mig.|Cree que solo es publicidad si hay dinero de por medio.",
          "Si l'empresa regala el producte perquè en parlin, també és una col·laboració i s'ha de dir.|Si la empresa regala el producto para que hablen de él, también es una colaboración y se tiene que decir."],
        ["Confon informació amb exageració («les millors del món»).|Confunde información con exageración («las mejores del mundo»).",
          "Pregunta: «Es pot comprovar? Amb què?». Si no es pot, és una frase per convèncer.|Pregunta: «¿Se puede comprobar? ¿Con qué?». Si no se puede, es una frase para convencer."],
        ["Se sent malament perquè li agrada un producte d'un anunci.|Se siente mal porque le gusta un producto de un anuncio.",
          "Que t'agradi està bé! Es tracta de decidir amb calma i en família, no de prohibir-se res.|¡Que te guste está bien! Se trata de decidir con calma y en familia, no de prohibirse nada."],
        ["Pensa que els resultats primers del cercador són els millors.|Piensa que los primeros resultados del buscador son los mejores.",
          "Alguns hi són perquè han pagat («Patrocinat»). Mira l'etiqueta i compara fonts.|Algunos están porque han pagado («Patrocinado»). Mira la etiqueta y compara fuentes."]
      ],
      diff: {
        mes: "Per anar més enllà: reescriure la publicació de la Laia perquè sigui una col·laboració ben indicada; o analitzar un anunci d'una revista amb les tres preguntes i presentar-lo a la classe.|Para ir más allá: reescribir la publicación de Laia para que sea una colaboración bien indicada; o analizar un anuncio de una revista con las tres preguntas y presentarlo a la clase.",
        menys: "Treballar amb sis targetes i només la primera pregunta (qui el paga?). A l'app, fer en parella la publicació de la Laia i la conversa amb la Jana.|Trabajar con seis tarjetas y solo la primera pregunta (¿quién lo paga?). En la app, hacer en pareja la publicación de Laia y la conversación con Jana."
      },
      aval: {
        ticket: ["Digues una disfressa de la publicitat i com la descobreixes.|Di un disfraz de la publicidad y cómo lo descubres.",
          "Digues les tres preguntes davant d'un anunci.|Di las tres preguntas ante un anuncio."],
        rubric: [
          ["Detectar publicitat|Detectar publicidad", "Reconeix publicitat amagada i les seves pistes (#publi, codis, patrocinat, regals).|Reconoce publicidad escondida y sus pistas (#publi, códigos, patrocinado, regalos).", "Només reconeix la publicitat evident.|Solo reconoce la publicidad evidente."],
          ["Informació o persuasió|Información o persuasión", "Distingeix dades de tècniques per convèncer i ho explica.|Distingue datos de técnicas para convencer y lo explica.", "Les confon sovint.|Las confunde a menudo."],
          ["Decidir amb calma|Decidir con calma", "Aplica les tres preguntes i proposa decidir en família.|Aplica las tres preguntas y propone decidir en familia.", "Decideix pel que diu l'anunci.|Decide por lo que dice el anuncio."]
        ]
      },
      casa: "A casa, feu «Caçadors d'anuncis» durant un dia: apunteu els anuncis que veieu (a la tele, al carrer, al mòbil, als envasos), marqueu els que estaven una mica amagats i feu-vos les tres preguntes amb un d'ells: qui el paga, què vol que fem i què no ens diu. Al vespre, compteu-los. No es tracta de prohibir res, sinó d'aprendre a veure'ls.|En casa, haced «Cazadores de anuncios» durante un día: apuntad los anuncios que veis (en la tele, en la calle, en el móvil, en los envases), marcad los que estaban un poco escondidos y haceos las tres preguntas con uno de ellos: quién lo paga, qué quiere que hagamos y qué no nos dice. Por la noche, contadlos. No se trata de prohibir nada, sino de aprender a verlos.",
      faq: [
        ["Els creadors de contingut estan obligats a dir que fan publicitat?|¿Los creadores de contenido están obligados a decir que hacen publicidad?", "Sí: la publicitat s'ha d'identificar com a tal, i a Espanya hi ha normes i codis de conducta que demanen que els creadors indiquin clarament les col·laboracions (per exemple, amb «#publi» o «publicitat»).|Sí: la publicidad se tiene que identificar como tal, y en España hay normas y códigos de conducta que piden que los creadores indiquen claramente las colaboraciones (por ejemplo, con «#publi» o «publicidad»)."],
        ["Un alumne diu que el seu creador preferit no fa mai publicitat.|Un alumno dice que su creador favorito no hace nunca publicidad.", "No cal discutir-ho: proposa que miri les pistes la propera vegada (codis, enllaços, regals) i ho decideixi ell.|No hace falta discutirlo: propón que mire las pistas la próxima vez (códigos, enlaces, regalos) y lo decida él."],
        ["Per què parlem de videojocs-anunci?|¿Por qué hablamos de videojuegos-anuncio?", "Perquè són habituals en marques adreçades a infants i és difícil veure-hi la publicitat: tot el videojoc és l'anunci.|Porque son habituales en marcas dirigidas a niños y es difícil ver la publicidad: todo el videojuego es el anuncio."],
        ["La publicitat és dolenta?|¿La publicidad es mala?", "No: informa de productes i paga molts continguts gratuïts. El problema és quan s'amaga o pressiona. Per això ensenyem a veure-la.|No: informa de productos y paga muchos contenidos gratuitos. El problema es cuando se esconde o presiona. Por eso enseñamos a verla."]
      ],
      tec: [
        ["A la publicació de la Laia no troben la quarta pista.|En la publicación de Laia no encuentran la cuarta pista.", "És a la lletra petita: «Gràcies a Llamp pel regal».|Está en la letra pequeña: «Gracias a Llamp por el regalo»."],
        ["A la cerca toquen la revista o el club i no passa res.|En la búsqueda tocan la revista o el club y no pasa nada.", "És correcte: no són publicitat. Les pistes són els tres resultats pagats.|Es correcto: no son publicidad. Las pistas son los tres resultados pagados."],
        ["Volen tornar a la conversa amb la Jana.|Quieren volver a la conversación con Jana.", "Poden tornar enrere amb la fletxa del pas: tots els camins acaben decidint amb calma.|Pueden volver atrás con la flecha del paso: todos los caminos terminan decidiendo con calma."]
      ],
      seg: [
        "No demanis quins creadors segueixen, què volen comprar ni què tenen a casa.|No preguntes qué creadores siguen, qué quieren comprar ni qué tienen en casa.",
        "No facis servir creadors reals coneguts per l'alumnat com a exemple negatiu.|No uses creadores reales conocidos por el alumnado como ejemplo negativo.",
        "Si surten comentaris sobre qui té o no té una cosa, recorda que cadascú decideix i que no es compara.|Si salen comentarios sobre quién tiene o no tiene algo, recuerda que cada uno decide y que no se compara."
      ],
      extra: [
        "Llengua: escriure dos textos sobre el mateix producte, un informatiu i un publicitari, i comparar-los.|Lengua: escribir dos textos sobre el mismo producto, uno informativo y uno publicitario, y compararlos.",
        "Plàstica: dissenyar l'etiqueta «#publi» perfecta: que es vegi clara i no s'amagui.|Plástica: diseñar la etiqueta «#publi» perfecta: que se vea clara y no se esconda.",
        "Per als grans: per què algunes marques paguen creadors i no anuncis a la tele? Què en guanyen?|Para los mayores: ¿por qué algunas marcas pagan a creadores y no anuncios en la tele? ¿Qué ganan?"
      ],
      trans: [
        "Sessió d3-3: els anuncis del cercador. Aquí, la publicitat amagada a vídeos i videojocs.|Sesión d3-3: los anuncios del buscador. Aquí, la publicidad escondida en vídeos y videojuegos.",
        "Sessió d6-2: les compres dins dels videojocs. Sessió d6-4: farem un anunci honest.|Sesión d6-2: las compras dentro de los videojuegos. Sesión d6-4: haremos un anuncio honesto.",
        "Llengua (text persuasiu), plàstica (imatge publicitària) i ciutadania (consum responsable).|Lengua (texto persuasivo), plástica (imagen publicitaria) y ciudadanía (consumo responsable)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Publicitat amagada|Publicidad escondida", x: "Saber-la veure per decidir amb calma.|Saber verla para decidir con calma.",
          nota: "Presenta la unitat 6: consumidors digitals.|Presenta la unidad 6: consumidores digitales." },
        { id: 's2', k: 'pregunta', t: "Les bambes de la Jana|Las zapatillas de Jana", punts: ["La @Laia_Patins porta bambes Llamp…|@Laia_Patins lleva zapatillas Llamp…", "…i la Jana també les vol.|…y Jana también las quiere.", "Per què les porta la Laia?|¿Por qué las lleva Laia?"],
          nota: "Recull hipòtesis sense demanar quins creadors miren.|Recoge hipótesis sin preguntar qué creadores ven." },
        { id: 's3', k: 'anim', t: "Anuncis per tot arreu|Anuncios por todas partes", anim: 'd6anuncis', x: "Uns es veuen… i d'altres s'amaguen.|Unos se ven… y otros se esconden.",
          nota: "Pregunta on han vist anuncis avui.|Pregunta dónde han visto anuncios hoy." },
        { id: 's4', k: 'media', t: "La publicació de la Laia|La publicación de Laia", x: "Quines pistes de publicitat hi veieu?|¿Qué pistas de publicidad veis?", media: LAIA,
          nota: "Marca, enllaç, codi de descompte, exageració i regal a la lletra petita.|Marca, enlace, código de descuento, exageración y regalo en la letra pequeña." },
        { id: 's5', k: 'anim', t: "Anuncis disfressats|Anuncios disfrazados", anim: 'd6disfressa', x: "Caixes regalades, la marca a la sèrie, patrocinats i «notícies».|Cajas regaladas, la marca en la serie, patrocinados y «noticias».",
          nota: "Mira la lletra petita: «Patrocinat», «Anunci», «#publi».|Mira la letra pequeña: «Patrocinado», «Anuncio», «#publi»." },
        { id: 's6', k: 'media', t: "Un videojoc-anunci|Un videojuego-anuncio", x: "Tot el videojoc és l'anunci.|Todo el videojuego es el anuncio.", media: XUXES,
          nota: "Pot ser divertit; saber què és ajuda a decidir.|Puede ser divertido; saber qué es ayuda a decidir." },
        { id: 's7', k: 'anim', t: "Les tres preguntes|Las tres preguntas", anim: 'd6lupa', x: "Qui el paga? Què vol que faci? Què no em diu?|¿Quién lo paga? ¿Qué quiere que haga? ¿Qué no me dice?",
          nota: "Que les repeteixin amb gestos: diners, diana, mans als ulls.|Que las repitan con gestos: dinero, diana, manos en los ojos." },
        { id: 's8', k: 'activitat', t: "Caçadors d'anuncis|Cazadores de anuncios", timer: 12,
          punts: ["Separeu publicitat i no publicitat.|Separad publicidad y no publicidad.", "Trieu dues de publicitat.|Elegid dos de publicidad.", "Feu-vos les tres preguntes a la fitxa.|Haceos las tres preguntas en la ficha."],
          nota: "Passa per les taules: «Qui ha pagat això?».|Pasa por las mesas: «¿Quién ha pagado esto?»." },
        { id: 's9', k: 'concepte', t: "Informació o per convèncer?|¿Información o para convencer?", pic: 'img/ment/vel.webp',
          punts: ["Informació: preu, talles, materials.|Información: precio, tallas, materiales.", "Per convèncer: presses, «tothom ho té», exageracions.|Para convencer: prisas, «todo el mundo lo tiene», exageraciones.", "Es pot comprovar? Llavors és informació.|¿Se puede comprobar? Entonces es información."],
          nota: "Deixa-la projectada durant l'activitat.|Déjala proyectada durante la actividad." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Publicitat amagada».|Abre la sesión «Publicidad escondida».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "A la pausa: passarel·la o estàtua!|En la pausa: ¡pasarela o estatua!"],
          nota: "Avisa quan arribin a la pausa activa.|Avisa cuando lleguen a la pausa activa." },
        { id: 's11', k: 'repte', t: "Reptes: la lupa en acció|Retos: la lupa en acción", timer: 8,
          punts: ["Informació o tècnica per convèncer?|¿Información o técnica para convencer?", "El videojoc de les xuxes i el iogurt.|El videojuego de las chuches y el yogur.", "Els resultats pagats de la cerca.|Los resultados pagados de la búsqueda."],
          nota: "Pregunta quines fonts eren independents a la cerca.|Pregunta qué fuentes eran independientes en la búsqueda." },
        { id: 's12', k: 'activitat', t: "Crea: la meva lupa d'anuncis|Crea: mi lupa de anuncios", timer: 2,
          punts: ["Tria què faràs a cada moment.|Elige qué harás en cada momento.", "Desa la teva lupa.|Guarda tu lupa.", "A casa: caçadors d'anuncis.|En casa: cazadores de anuncios."],
          nota: "Que comparteixin la idea que faran servir primer.|Que compartan la idea que usarán primero." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["La publicitat pot estar amagada.|La publicidad puede estar escondida.", "Qui cobra o rep regals ho ha de dir: #publi.|Quien cobra o recibe regalos lo tiene que decir: #publi.", "Informació no és el mateix que convèncer.|Información no es lo mismo que convencer.", "Tres preguntes i decidir amb calma.|Tres preguntas y decidir con calma."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Una disfressa de la publicitat.|Un disfraz de la publicidad.", "Les tres preguntes.|Las tres preguntas."],
          nota: "Pot ser oral, per torns.|Puede ser oral, por turnos." },
        { id: 's15', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["Caçadors d'anuncis durant un dia.|Cazadores de anuncios durante un día.", "Marqueu els amagats.|Marcad los escondidos.", "Les tres preguntes amb un d'ells.|Las tres preguntas con uno de ellos."],
          nota: "Proposta per fer en família, sense jutjar ningú.|Propuesta para hacer en familia, sin juzgar a nadie." }
      ],
      print: [
        { id: 'p1', t: "Caçadors d'anuncis|Cazadores de anuncios", k: 'targetes',
          intro: "Un paquet per grup de 4. Separeu les targetes en «Publicitat» i «No és publicitat». Tot és inventat.|Un paquete por grupo de 4. Separad las tarjetas en «Publicidad» y «No es publicidad». Todo es inventado.",
          items: [
            { t: "🛼 Una patinadora ensenya unes bambes i posa «#publi»|🛼 Una patinadora enseña unas zapatillas y pone «#publi»", n: 1 },
            { t: "📦 Un vídeo obrint una caixa de joguines regalades per la marca|📦 Un vídeo abriendo una caja de juguetes regalados por la marca", n: 1 },
            { t: "📖 Una amiga et recomana un llibre que ha llegit|📖 Una amiga te recomienda un libro que ha leído", n: 1 },
            { t: "🔍 Un resultat de cerca amb l'etiqueta «Patrocinat»|🔍 Un resultado de búsqueda con la etiqueta «Patrocinado»", n: 1 },
            { t: "🍬 Un videojoc de xuxes on guanyes cupons per comprar xuxes|🍬 Un videojuego de chuches donde ganas cupones para comprar chuches", n: 1 },
            { t: "🏊 La web de l'ajuntament amb l'horari de la piscina|🏊 La web del ayuntamiento con el horario de la piscina", n: 1 },
            { t: "🥤 En una sèrie, el protagonista sempre beu la mateixa beguda i se'n veu la marca|🥤 En una serie, el protagonista siempre bebe la misma bebida y se ve la marca", n: 1 },
            { t: "📰 «Notícia»: un iogurt «fa créixer el doble» · Contingut patrocinat|📰 «Noticia»: un yogur «hace crecer el doble» · Contenido patrocinado", n: 1 },
            { t: "✈️ Un tutorial per fer un avió de paper, sense cap marca|✈️ Un tutorial para hacer un avión de papel, sin ninguna marca", n: 1 },
            { t: "🎟️ «Amb el codi MARC5 tens un 5% de descompte!»|🎟️ «¡Con el código MARC5 tienes un 5% de descuento!»", n: 1 }
          ] },
        { id: 'p2', t: "Les tres preguntes|Las tres preguntas", k: 'fitxa',
          intro: "Tria dos anuncis de les targetes i fes-te les tres preguntes.|Elige dos anuncios de las tarjetas y hazte las tres preguntas.",
          items: [
            { q: "Anunci 1: ______ · Qui el paga?|Anuncio 1: ______ · ¿Quién lo paga?", sol: "La marca del producte (o la botiga).|La marca del producto (o la tienda)." },
            { q: "Què vol que faci?|¿Qué quiere que haga?", sol: "Per exemple: que el compri, que el demani a casa o que segueixi la marca.|Por ejemplo: que lo compre, que lo pida en casa o que siga la marca." },
            { q: "Què no em diu?|¿Qué no me dice?", sol: "Per exemple: el preu, que la creadora ha rebut un regal, el que no fa bé.|Por ejemplo: el precio, que la creadora ha recibido un regalo, lo que no hace bien." },
            { q: "Anunci 2: ______ · Qui el paga? Què vol que faci? Què no em diu?|Anuncio 2: ______ · ¿Quién lo paga? ¿Qué quiere que haga? ¿Qué no me dice?", big: true, sol: "Resposta oberta amb les tres preguntes.|Respuesta abierta con las tres preguntas." }
          ] }
      ]
    },

    /* ---------- Sessió 2 · Compres dins dels videojocs ---------- */
    'd6-2': {
      intro: "Segona sessió de la unitat 6. A la unitat 3 (d3-2) l'alumnat va veure que les gemmes costen diners de veritat i que les caixes sorpresa són com una loteria. Ara hi aprofundeix amb números: entén com guanyen diners els videojocs «gratis» (compres, anuncis i dades), passa monedes virtuals a euros, descobreix els paquets que no quadren, les esperes que es salten pagant, els passis i les subscripcions que es renoven soles, i calcula què vol dir «1 de cada 100» en una caixa sorpresa. Tot acaba en una regla senzilla: para, calcula i pregunta a un adult. Les xifres són exemples inventats de videojocs inventats.|Segunda sesión de la unidad 6. En la unidad 3 (d3-2) el alumnado vio que las gemas cuestan dinero de verdad y que las cajas sorpresa son como una lotería. Ahora profundiza con números: entiende cómo ganan dinero los videojuegos «gratis» (compras, anuncios y datos), pasa monedas virtuales a euros, descubre los paquetes que no cuadran, las esperas que se saltan pagando, los pases y las suscripciones que se renuevan solas, y calcula qué quiere decir «1 de cada 100» en una caja sorpresa. Todo termina en una regla sencilla: para, calcula y pregunta a un adulto. Las cifras son ejemplos inventados de videojuegos inventados.",
      claus: [
        "Un videojoc gratis per descarregar guanya diners amb compres, anuncis i dades: està pensat perquè vulguem pagar.|Un videojuego gratis para descargar gana dinero con compras, anuncios y datos: está pensado para que queramos pagar.",
        "Les monedes virtuals amaguen el preu: cal passar-les a euros i mirar si els paquets quadren.|Las monedas virtuales esconden el precio: hay que pasarlas a euros y mirar si los paquetes cuadran.",
        "Esperes que es salten pagant, comptes enrere, passis i subscripcions que es renoven soles són trucs de botiga.|Esperas que se saltan pagando, cuentas atrás, pases y suscripciones que se renuevan solas son trucos de tienda.",
        "«1 de cada 100» vol dir que, de mitjana, cal obrir-ne 100. Regla: para, calcula i pregunta a un adult.|«1 de cada 100» quiere decir que, de media, hay que abrir 100. Regla: para, calcula y pregunta a un adulto."
      ],
      prev: [
        "Sessió d3-2: gemmes, caixes sorpresa i comprar amb un adult.|Sesión d3-2: gemas, cajas sorpresa y comprar con un adulto.",
        "Sessió d6-1: la publicitat i les tècniques per convèncer.|Sesión d6-1: la publicidad y las técnicas para convencer."
      ],
      obj: [
        "L'alumne/a explica com guanya diners un videojoc gratis.|El alumno/a explica cómo gana dinero un videojuego gratis.",
        "L'alumne/a passa preus de monedes virtuals a euros i detecta paquets que no quadren.|El alumno/a pasa precios de monedas virtuales a euros y detecta paquetes que no cuadran.",
        "L'alumne/a reconeix trucs de botiga (esperes, comptes enrere, subscripcions) i calcula el cost d'una subscripció en un any.|El alumno/a reconoce trucos de tienda (esperas, cuentas atrás, suscripciones) y calcula el coste de una suscripción en un año.",
        "L'alumne/a interpreta una probabilitat senzilla i aplica «para, calcula, pregunta».|El alumno/a interpreta una probabilidad sencilla y aplica «para, calcula, pregunta»."
      ],
      comp: [
        "Competència matemàtica: proporcions, multiplicació i probabilitat en contextos reals|Competencia matemática: proporciones, multiplicación y probabilidad en contextos reales",
        "Competència digital (CD4): consum responsable i protecció davant de pràctiques comercials|Competencia digital (CD4): consumo responsable y protección ante prácticas comerciales",
        "Competència ciutadana: drets de les persones consumidores|Competencia ciudadana: derechos de las personas consumidoras"
      ],
      vocab: [
        ["Gratis per descarregar|Gratis para descargar", "Que no es paga per tenir el videojoc, però sí potser per coses de dins.|Que no se paga por tener el videojuego, pero sí quizá por cosas de dentro."],
        ["Moneda virtual|Moneda virtual", "Diamants, gemmes o monedes del videojoc que es compren amb euros.|Diamantes, gemas o monedas del videojuego que se compran con euros."],
        ["Subscripció|Suscripción", "Un pagament que es repeteix cada mes fins que es cancel·la.|Un pago que se repite cada mes hasta que se cancela."],
        ["Passi de temporada|Pase de temporada", "Compra que dona coses durant un temps i després caduca.|Compra que da cosas durante un tiempo y después caduca."],
        ["Probabilitat|Probabilidad", "Com de fàcil és que passi una cosa: «1 de cada 100».|Lo fácil que es que pase algo: «1 de cada 100»."],
        ["Atzar|Azar", "Quan el resultat no depèn de tu, com en una loteria.|Cuando el resultado no depende de ti, como en una lotería."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Compres dins dels videojocs»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Compras dentro de los videojuegos»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Per grup: una bossa opaca amb 20 papers (19 blancs i 1 daurat) i la fitxa de la botiga de diamants|Por grupo: una bolsa opaca con 20 papeles (19 blancos y 1 dorado) y la ficha de la tienda de diamantes"
        ],
        imprimir: ["La botiga de diamants (imprimible 1): una per parella|La tienda de diamantes (imprimible 1): una por pareja"],
        prep: [
          "Preparar una bossa per grup amb 20 papers: 19 blancs i 1 daurat (o marcat amb una estrella).|Preparar una bolsa por grupo con 20 papeles: 19 blancos y 1 dorado (o marcado con una estrella).",
          "Tenir a mà calculadores per a qui les necessiti.|Tener a mano calculadoras para quien las necesite.",
          "No preguntar quants diners gasten ni si a casa compren dins dels videojocs: es treballa amb videojocs inventats.|No preguntar cuánto dinero gastan ni si en casa compran dentro de los videojuegos: se trabaja con videojuegos inventados."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: gratis… de veritat?|Bienvenida: gratis… ¿de verdad?", fase: 'inici',
          fa: "Explica la història d'en Bit i Granja Nuvi: gratis, però 8 hores d'espera o 50 diamants. Pregunta com pot ser que un videojoc gratis guanyi diners.|Explica la historia de Bit y Granja Nuvi: gratis, pero 8 horas de espera o 50 diamantes. Pregunta cómo puede ser que un videojuego gratis gane dinero.",
          diu: ["Qui paga la gent que fa un videojoc gratis?|¿Quién paga a la gente que hace un videojuego gratis?",
            "Què recordeu de les gemmes de Galàxia Blocs?|¿Qué recordáis de las gemas de Galàxia Blocs?",
            "Avui farem números de veritat.|Hoy haremos números de verdad."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Gratis, monedes, trucs i atzar|Gratis, monedas, trucos y azar", fase: 'teoria',
          fa: "Amb les animacions, explica com guanya diners un videojoc gratis i com les monedes amaguen els euros. Projecta la botiga de Granja Nuvi i comenta els trucs. Explica l'atzar amb la graella de 100 caixes i acaba amb «para, calcula, pregunta».|Con las animaciones, explica cómo gana dinero un videojuego gratis y cómo las monedas esconden los euros. Proyecta la tienda de Granja Nuvi y comenta los trucos. Explica el azar con la cuadrícula de 100 cajas y termina con «para, calcula, pregunta».",
          diu: ["Si 500 diamants són 5 €, quant és un diamant? (1 cèntim.)|Si 500 diamantes son 5 €, ¿cuánto es un diamante? (1 céntimo.)",
            "Què vol dir «es renova sol»?|¿Qué quiere decir «se renueva solo»?",
            "Si el drac surt 1 de cada 100, quantes caixes caldria obrir de mitjana?|Si el dragón sale 1 de cada 100, ¿cuántas cajas habría que abrir de media?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "La bossa de l'atzar i la botiga de diamants|La bolsa del azar y la tienda de diamantes", fase: 'desconnectat',
          fa: "Primer, en grups: cada persona treu un paper de la bossa (i el torna a posar) fins que algú treu el daurat; apunten quants intents han calgut. Compareu els grups: a uns els surt aviat i a d'altres molt tard. Després, en parelles, fan la fitxa de la botiga de diamants (passar a euros, paquets i subscripció).|Primero, en grupos: cada persona saca un papel de la bolsa (y lo vuelve a poner) hasta que alguien saca el dorado; apuntan cuántos intentos han hecho falta. Comparad los grupos: a unos les sale pronto y a otros muy tarde. Después, en parejas, hacen la ficha de la tienda de diamantes (pasar a euros, paquetes y suscripción).",
          diu: ["Quants intents ha necessitat cada grup? Per què és tan diferent?|¿Cuántos intentos ha necesitado cada grupo? ¿Por qué es tan diferente?",
            "I si cada intent costés 1 €?|¿Y si cada intento costara 1 €?",
            "Quant costa el passi en un any?|¿Cuánto cuesta el pase en un año?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 i parelles|Grupos de 4 y parejas" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: la pregunta de repàs, la història, les cinc targetes, com guanya diners Granja Nuvi, els dos càlculs de diamants i la botiga de les trampes. Pausa activa tots junts.|Cada alumno/a hace la sesión hasta la pausa activa: la pregunta de repaso, la historia, las cinco tarjetas, cómo gana dinero Granja Nuvi, los dos cálculos de diamantes y la tienda de las trampas. Pausa activa todos juntos.",
          diu: ["Quant costava el barret en euros?|¿Cuánto costaba el sombrero en euros?",
            "Per què sobraven 400 diamants?|¿Por qué sobraban 400 diamantes?",
            "Ara, tots: para, calcula, pregunta!|Ahora, todos: ¡para, calcula, pregunta!"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 10, t: "Reptes i el meu pla de compres|Retos y mi plan de compras", fase: 'ordinador',
          fa: "Continuen amb els reptes: el drac 1 de cada 100, la conversa del passi d'or (4,99 × 12), bona idea o trampa i la compra sense voler. Després fan el seu pla de compres.|Siguen con los retos: el dragón 1 de cada 100, la conversación del pase de oro (4,99 × 12), buena idea o trampa y la compra sin querer. Después hacen su plan de compras.",
          diu: ["Quant costava el passi en un any?|¿Cuánto costaba el pase en un año?",
            "Què ha de fer la Mia si ha comprat sense voler?|¿Qué debe hacer Mia si ha comprado sin querer?",
            "Quin pas del vostre pla és el més important?|¿Qué paso de vuestro plan es el más importante?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: el meu pla de compres (i «La calculadora de diamants», per a casa).|«Retos» y el paso «Crea»: mi plan de compras (y «La calculadora de diamantes», para casa).", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu les idees clau amb el resum. Tiquet de sortida, preguntes finals i com s'han sentit. Explica la calculadora de diamants per fer a casa.|Repasad las ideas clave con el resumen. Ticket de salida, preguntas finales y cómo se han sentido. Explica la calculadora de diamantes para hacer en casa.",
          diu: ["Com guanya diners un videojoc gratis?|¿Cómo gana dinero un videojuego gratis?",
            "Quins són els tres passos abans de comprar?|¿Cuáles son los tres pasos antes de comprar?",
            "Si mai compreu sense voler, què fareu?|Si alguna vez compráis sin querer, ¿qué haréis?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que els diamants no són diners.|Piensa que los diamantes no son dinero.",
          "Fes el camí invers: quants euros han calgut per tenir-los? Els diamants són euros disfressats.|Haz el camino inverso: ¿cuántos euros han hecho falta para tenerlos? Los diamantes son euros disfrazados."],
        ["Creu que «1 de cada 100» vol dir que a la caixa 100 surt segur.|Cree que «1 de cada 100» quiere decir que en la caja 100 sale seguro.",
          "Recorda la bossa: a cada intent es torna a començar. De mitjana en calen 100, però pot sortir abans o molt després.|Recuerda la bolsa: en cada intento se vuelve a empezar. De media hacen falta 100, pero puede salir antes o mucho después."],
        ["No veu el problema d'una subscripció de 4,99 €.|No ve el problema de una suscripción de 4,99 €.",
          "Multipliqueu per 12: gairebé 60 € l'any. I continua fins que algú la cancel·la.|Multiplicad por 12: casi 60 € al año. Y sigue hasta que alguien la cancela."],
        ["Té por d'explicar a casa una compra feta sense voler.|Tiene miedo de contar en casa una compra hecha sin querer.",
          "Explicar-ho aviat és el que ho arregla; de vegades es pot demanar que tornin els diners. Ningú no ha d'amagar un error.|Contarlo pronto es lo que lo arregla; a veces se puede pedir que devuelvan el dinero. Nadie tiene que esconder un error."],
        ["Pensa que si un videojoc és gratis, no hi ha cap truc.|Piensa que si un videojuego es gratis, no hay ningún truco.",
          "Gratis per descarregar: es paga amb compres, anuncis o dades. No és dolent, però cal saber-ho.|Gratis para descargar: se paga con compras, anuncios o datos. No es malo, pero hay que saberlo."]
      ],
      diff: {
        mes: "Per anar més enllà: inventar una botiga de videojoc «justa» on els preus surtin en euros i els paquets quadrin; o calcular quant costarien 3 subscripcions de 2,99 € en un any.|Para ir más allá: inventar una tienda de videojuego «justa» donde los precios salgan en euros y los paquetes cuadren; o calcular cuánto costarían 3 suscripciones de 2,99 € en un año.",
        menys: "Fer els càlculs amb nombres rodons (100 diamants = 1 €) i calculadora. A l'app, fer en parella la conversa del passi d'or.|Hacer los cálculos con números redondos (100 diamantes = 1 €) y calculadora. En la app, hacer en pareja la conversación del pase de oro."
      },
      aval: {
        ticket: ["Digues com guanya diners un videojoc gratis.|Di cómo gana dinero un videojuego gratis.",
          "Digues els tres passos abans de comprar.|Di los tres pasos antes de comprar."],
        rubric: [
          ["Model «gratis»|Modelo «gratis»", "Explica que es guanya diners amb compres, anuncis i dades.|Explica que se gana dinero con compras, anuncios y datos.", "Pensa que gratis vol dir sense cap cost.|Piensa que gratis quiere decir sin ningún coste."],
          ["Fer números|Hacer números", "Passa monedes a euros, detecta paquets que no quadren i calcula el cost anual d'una subscripció.|Pasa monedas a euros, detecta paquetes que no cuadran y calcula el coste anual de una suscripción.", "Ho fa amb ajuda o amb errors.|Lo hace con ayuda o con errores."],
          ["Decidir amb calma|Decidir con calma", "Aplica «para, calcula, pregunta» i entén l'atzar de les caixes.|Aplica «para, calcula, pregunta» y entiende el azar de las cajas.", "Decideix per les presses o pels amics.|Decide por las prisas o por los amigos."]
        ]
      },
      casa: "A casa, feu «La calculadora de diamants»: inventeu una botiga (1.000 diamants = 10 €), poseu preus en diamants a cinc objectes i passeu-los a euros; després, compareu-los amb coses de veritat (un llibre, una entrada al cinema). Si feu servir algun videojoc amb botiga, mireu junts si té activat el permís de compra d'un adult i acordeu una norma de compres per a casa.|En casa, haced «La calculadora de diamantes»: inventad una tienda (1.000 diamantes = 10 €), poned precios en diamantes a cinco objetos y pasadlos a euros; después, comparadlos con cosas de verdad (un libro, una entrada al cine). Si usáis algún videojuego con tienda, mirad juntos si tiene activado el permiso de compra de un adulto y acordad una norma de compras para casa.",
      faq: [
        ["Les caixes sorpresa estan prohibides?|¿Las cajas sorpresa están prohibidas?", "Depèn del país i és un tema en debat; en molts llocs són legals. Algunes botigues d'apps obliguen a mostrar les probabilitats. A classe no entrem en la llei: treballem que funcionen per atzar i com decidir.|Depende del país y es un tema en debate; en muchos sitios son legales. Algunas tiendas de apps obligan a mostrar las probabilidades. En clase no entramos en la ley: trabajamos que funcionan por azar y cómo decidir."],
        ["Es poden recuperar els diners d'una compra sense voler?|¿Se puede recuperar el dinero de una compra sin querer?", "De vegades: les botigues d'apps tenen un procediment per demanar-ho. Per això és important explicar-ho de seguida.|A veces: las tiendas de apps tienen un procedimiento para pedirlo. Por eso es importante contarlo enseguida."],
        ["Com es configura el permís de compra?|¿Cómo se configura el permiso de compra?", "Els dispositius i les botigues d'apps tenen opcions familiars perquè cada compra necessiti l'aprovació d'un adult o una contrasenya. Cada sistema ho anomena d'una manera.|Los dispositivos y las tiendas de apps tienen opciones familiares para que cada compra necesite la aprobación de un adulto o una contraseña. Cada sistema lo llama de una manera."],
        ["Les xifres de l'app són reals?|¿Las cifras de la app son reales?", "No: són exemples inventats perquè els números siguin fàcils. El que és real és el mecanisme (monedes, paquets, subscripcions, atzar).|No: son ejemplos inventados para que los números sean fáciles. Lo que es real es el mecanismo (monedas, paquetes, suscripciones, azar)."]
      ],
      tec: [
        ["A la botiga de Granja Nuvi toquen la regadora i no passa res.|En la tienda de Granja Nuvi tocan la regadera y no pasa nada.", "És correcte: és gratis i no és una trampa.|Es correcto: es gratis y no es una trampa."],
        ["Al pas de classificar en tres calaixos, al mòbil, surten un sota l'altre.|En el paso de clasificar en tres cajas, en el móvil, salen una debajo de otra.", "És normal: la targeta surt a dalt i es toca el calaix.|Es normal: la tarjeta sale arriba y se toca la caja."],
        ["Volen fer servir la calculadora de l'ordinador.|Quieren usar la calculadora del ordenador.", "Millor amb paper o calculadora de mà: així no surten de l'app.|Mejor con papel o calculadora de mano: así no salen de la app."]
      ],
      seg: [
        "No preguntis quants diners gasten ni què compren: es treballa amb videojocs inventats.|No preguntes cuánto dinero gastan ni qué compran: se trabaja con videojuegos inventados.",
        "Si algun infant explica que ha gastat molts diners en un videojoc o que se sent enganxat a les caixes sorpresa, escolta'l sense jutjar i parla-ho amb la família.|Si algún niño o niña cuenta que ha gastado mucho dinero en un videojuego o que se siente enganchado a las cajas sorpresa, escúchale sin juzgar y háblalo con la familia.",
        "Evita comparacions entre famílies (qui té més o menys).|Evita comparaciones entre familias (quién tiene más o menos)."
      ],
      extra: [
        "Matemàtiques: més experiments d'atzar amb daus (quantes tirades calen per treure un 6?).|Matemáticas: más experimentos de azar con dados (¿cuántas tiradas hacen falta para sacar un 6?).",
        "Educació financera: fer un pressupost setmanal inventat i decidir com repartir-lo.|Educación financiera: hacer un presupuesto semanal inventado y decidir cómo repartirlo.",
        "Per als grans: debat «Les caixes sorpresa s'assemblen a les apostes?».|Para los mayores: debate «¿Las cajas sorpresa se parecen a las apuestas?»."
      ],
      trans: [
        "Sessió d3-2: les gemmes i les caixes sorpresa. Aquí, fer números i entendre l'atzar.|Sesión d3-2: las gemas y las cajas sorpresa. Aquí, hacer números y entender el azar.",
        "Sessió d6-3: les apps també volen que hi passem estona (algoritmes). Sessió d6-4: l'anunci honest amb preus clars.|Sesión d6-3: las apps también quieren que pasemos rato (algoritmos). Sesión d6-4: el anuncio honesto con precios claros.",
        "Matemàtiques (proporcions, multiplicació, probabilitat) i educació financera.|Matemáticas (proporciones, multiplicación, probabilidad) y educación financiera."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Compres dins dels videojocs|Compras dentro de los videojuegos", x: "Para, calcula i pregunta.|Para, calcula y pregunta.",
          nota: "Avui farem números amb videojocs inventats.|Hoy haremos números con videojuegos inventados." },
        { id: 's2', k: 'pregunta', t: "Gratis… de veritat?|Gratis… ¿de verdad?", punts: ["Granja Nuvi diu «GRATIS!»…|Granja Nuvi dice «¡GRATIS!»…", "…però collir costa 8 hores o 50 diamants.|…pero recoger cuesta 8 horas o 50 diamantes.", "Com guanya diners?|¿Cómo gana dinero?"],
          nota: "Recull hipòtesis: compres, anuncis, dades.|Recoge hipótesis: compras, anuncios, datos." },
        { id: 's3', k: 'anim', t: "Com guanya diners un videojoc gratis|Cómo gana dinero un videojuego gratis", anim: 'd6gratis', x: "Compres, anuncis i dades.|Compras, anuncios y datos.",
          nota: "No és dolent: fer un videojoc costa diners. Cal saber-ho.|No es malo: hacer un videojuego cuesta dinero. Hay que saberlo." },
        { id: 's4', k: 'anim', t: "Diamants que amaguen euros|Diamantes que esconden euros", anim: 'd6moneda', x: "Passa-ho sempre a euros.|Pásalo siempre a euros.",
          nota: "Fes el càlcul en veu alta amb tota la classe.|Haz el cálculo en voz alta con toda la clase." },
        { id: 's5', k: 'media', t: "La botiga de Granja Nuvi|La tienda de Granja Nuvi", x: "Quins trucs hi veieu?|¿Qué trucos veis?", media: GRANJA,
          nota: "Compte enrere, espera, subscripció que es renova i paquets que no quadren.|Cuenta atrás, espera, suscripción que se renueva y paquetes que no cuadran." },
        { id: 's6', k: 'anim', t: "L'atzar: 1 de cada 100|El azar: 1 de cada 100", anim: 'd6atzar', x: "De mitjana, cal obrir-ne 100… i potser més.|De media, hay que abrir 100… y quizá más.",
          nota: "Prepara l'experiment de la bossa.|Prepara el experimento de la bolsa." },
        { id: 's7', k: 'anim', t: "Para, calcula, pregunta|Para, calcula, pregunta", anim: 'd6stop', x: "Abans de comprar res.|Antes de comprar nada.",
          nota: "És la regla de la sessió: que la repeteixin.|Es la regla de la sesión: que la repitan." },
        { id: 's8', k: 'activitat', t: "La bossa de l'atzar|La bolsa del azar", timer: 6,
          punts: ["Traieu un paper i torneu-lo a la bossa.|Sacad un papel y devolvedlo a la bolsa.", "Fins que surti el daurat.|Hasta que salga el dorado.", "Apunteu quants intents han calgut.|Apuntad cuántos intentos han hecho falta."],
          nota: "Compara els resultats dels grups a la pissarra.|Compara los resultados de los grupos en la pizarra." },
        { id: 's9', k: 'activitat', t: "La botiga de diamants|La tienda de diamantes", timer: 6,
          punts: ["Passeu els preus a euros.|Pasad los precios a euros.", "Mireu si els paquets quadren.|Mirad si los paquetes cuadran.", "Quant costa la subscripció en un any?|¿Cuánto cuesta la suscripción en un año?"],
          nota: "Deixa calculadores a qui les necessiti.|Deja calculadoras a quien las necesite." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Compres dins dels videojocs».|Abre la sesión «Compras dentro de los videojuegos».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "A la pausa: para, calcula, pregunta!|En la pausa: ¡para, calcula, pregunta!"],
          nota: "Avisa quan arribin a la pausa activa.|Avisa cuando lleguen a la pausa activa." },
        { id: 's11', k: 'repte', t: "Reptes: fem números|Retos: hacemos números", timer: 8,
          punts: ["El drac 1 de cada 100.|El dragón 1 de cada 100.", "El passi d'or: 4,99 × 12.|El pase de oro: 4,99 × 12.", "Bona idea o trampa?|¿Buena idea o trampa?"],
          nota: "Fes el càlcul de 4,99 × 12 a la pissarra.|Haz el cálculo de 4,99 × 12 en la pizarra." },
        { id: 's12', k: 'activitat', t: "Crea: el meu pla de compres|Crea: mi plan de compras", timer: 2,
          punts: ["Para, calcula, pregunta i atzar.|Para, calcula, pregunta y azar.", "Desa el teu pla.|Guarda tu plan.", "A casa: la calculadora de diamants.|En casa: la calculadora de diamantes."],
          nota: "Que comparteixin una idea del seu pla.|Que compartan una idea de su plan." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Gratis: compres, anuncis i dades.|Gratis: compras, anuncios y datos.", "Diamants = euros disfressats.|Diamantes = euros disfrazados.", "Subscripcions que es renoven i comptes enrere.|Suscripciones que se renuevan y cuentas atrás.", "Atzar: 1 de cada 100 vol dir moltes caixes.|Azar: 1 de cada 100 quiere decir muchas cajas."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Com guanya diners un videojoc gratis?|¿Cómo gana dinero un videojuego gratis?", "Els tres passos abans de comprar.|Los tres pasos antes de comprar."],
          nota: "Pot ser oral, per torns.|Puede ser oral, por turnos." },
        { id: 's15', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["La calculadora de diamants.|La calculadora de diamantes.", "Permís de compra activat?|¿Permiso de compra activado?", "Una norma de compres per a casa.|Una norma de compras para casa."],
          nota: "Proposta per fer en família.|Propuesta para hacer en familia." }
      ],
      print: [
        { id: 'p1', t: "La botiga de diamants|La tienda de diamantes", k: 'fitxa',
          intro: "Botiga inventada: 500 diamants = 5 €. Fes els càlculs.|Tienda inventada: 500 diamantes = 5 €. Haz los cálculos.",
          items: [
            { q: "Un barret costa 💎 100. Quants euros són?|Un sombrero cuesta 💎 100. ¿Cuántos euros son?", sol: "1 €.|1 €." },
            { q: "Un drac costa 💎 1.500. Quants euros són?|Un dragón cuesta 💎 1.500. ¿Cuántos euros son?", sol: "15 €.|15 €." },
            { q: "El paquet més petit és de 💎 500 i el vestit en costa 600. Quants paquets has de comprar i quants diamants et sobren?|El paquete más pequeño es de 💎 500 y el traje cuesta 600. ¿Cuántos paquetes tienes que comprar y cuántos diamantes te sobran?", sol: "2 paquets (10 €) i sobren 💎 400.|2 paquetes (10 €) y sobran 💎 400." },
            { q: "Un passi costa 4,99 € al mes i es renova sol. Quant costa en un any?|Un pase cuesta 4,99 € al mes y se renueva solo. ¿Cuánto cuesta en un año?", sol: "4,99 × 12 = 59,88 €.|4,99 × 12 = 59,88 €." },
            { q: "Una caixa costa 1 € i el premi surt 1 de cada 100. Quant pot costar, de mitjana, tenir el premi?|Una caja cuesta 1 € y el premio sale 1 de cada 100. ¿Cuánto puede costar, de media, tener el premio?", sol: "Uns 100 €, i amb mala sort, més.|Unos 100 €, y con mala suerte, más." }
          ] }
      ]
    },

    /* ---------- Sessió 3 · Què em recomana l'algoritme? ---------- */
    'd6-3': {
      intro: "Tercera sessió de la unitat 6. L'alumnat entén què és un algoritme de recomanació (una recepta de passos, sovint amb IA, que decideix què ens mostra una app), quines pistes fa servir (què mirem i quanta estona, què busquem, què ens agrada, l'hora i què miren persones semblants) i per què a moltes apps els interessa que hi passem estona (anuncis i dades). Connecta amb la reproducció automàtica de la unitat 3 i amb el desplaçament infinit, descobreix la bombolla de filtre i, sobretot, aprèn a guiar l'algoritme: buscar coses variades, dir «no m'interessa», configurar amb un adult el vídeo següent i decidir quan parar.|Tercera sesión de la unidad 6. El alumnado entiende qué es un algoritmo de recomendación (una receta de pasos, a menudo con IA, que decide qué nos muestra una app), qué pistas usa (qué miramos y cuánto rato, qué buscamos, qué nos gusta, la hora y qué miran personas parecidas) y por qué a muchas apps les interesa que pasemos rato (anuncios y datos). Conecta con la reproducción automática de la unidad 3 y con el desplazamiento infinito, descubre la burbuja de filtro y, sobre todo, aprende a guiar el algoritmo: buscar cosas variadas, decir «no me interesa», configurar con un adulto el vídeo siguiente y decidir cuándo parar.",
      claus: [
        "Un algoritme de recomanació tria què ens mostra una app a partir de moltes pistes del que fem.|Un algoritmo de recomendación elige qué nos muestra una app a partir de muchas pistas de lo que hacemos.",
        "A moltes apps els interessa que hi passem estona: més anuncis i més dades. Per això hi ha el vídeo següent i el desplaçament infinit.|A muchas apps les interesa que pasemos rato: más anuncios y más datos. Por eso existen el vídeo siguiente y el desplazamiento infinito.",
        "La bombolla de filtre: veure sempre el mateix fa pensar que el món és així. El nostre inici no és el món.|La burbuja de filtro: ver siempre lo mismo hace pensar que el mundo es así. Nuestro inicio no es el mundo.",
        "Es pot guiar l'algoritme: buscar coses variades, «no m'interessa», configurar amb un adult i decidir quan parar.|Se puede guiar el algoritmo: buscar cosas variadas, «no me interesa», configurar con un adulto y decidir cuándo parar."
      ],
      prev: [
        "Sessió d3-1: les trampes per no parar (vídeo següent, notificacions, ratxes).|Sesión d3-1: las trampas para no parar (vídeo siguiente, notificaciones, rachas).",
        "Sessió d2-2: la IA aprèn d'exemples (ara, dels nostres clics).|Sesión d2-2: la IA aprende de ejemplos (ahora, de nuestros clics)."
      ],
      obj: [
        "L'alumne/a explica què és un algoritme de recomanació i quines pistes fa servir.|El alumno/a explica qué es un algoritmo de recomendación y qué pistas usa.",
        "L'alumne/a relaciona el temps que passem a una app amb els anuncis i les dades.|El alumno/a relaciona el tiempo que pasamos en una app con los anuncios y los datos.",
        "L'alumne/a reconeix una bombolla de filtre i accions que l'obren o la tanquen.|El alumno/a reconoce una burbuja de filtro y acciones que la abren o la cierran.",
        "L'alumne/a tria maneres concretes de guiar l'algoritme i decidir quan parar.|El alumno/a elige maneras concretas de guiar el algoritmo y decidir cuándo parar."
      ],
      comp: [
        "Competència digital (CD2): comprensió del funcionament dels sistemes de recomanació|Competencia digital (CD2): comprensión del funcionamiento de los sistemas de recomendación",
        "Competència digital (CD4): benestar i autoregulació|Competencia digital (CD4): bienestar y autorregulación",
        "Competència ciutadana: diversitat d'opinions i pensament crític|Competencia ciudadana: diversidad de opiniones y pensamiento crítico"
      ],
      vocab: [
        ["Algoritme|Algoritmo", "Llista de passos per resoldre una cosa, com una recepta.|Lista de pasos para resolver algo, como una receta."],
        ["Recomanació|Recomendación", "El que una app et proposa que miris, escoltis o compris.|Lo que una app te propone que mires, escuches o compres."],
        ["Inici (feed)|Inicio (feed)", "La pantalla de l'app amb les coses triades per a tu.|La pantalla de la app con las cosas elegidas para ti."],
        ["Desplaçament infinit|Desplazamiento infinito", "Una pantalla que no s'acaba mai: sempre hi ha més.|Una pantalla que no se acaba nunca: siempre hay más."],
        ["Bombolla de filtre|Burbuja de filtro", "Quan només veus el mateix tipus de coses i d'opinions.|Cuando solo ves el mismo tipo de cosas y de opiniones."],
        ["«No m'interessa»|«No me interesa»", "Botó per dir a l'app que no vols veure una cosa.|Botón para decirle a la app que no quieres ver algo."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Què em recomana l'algoritme?»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «¿Qué me recomienda el algoritmo?»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Les targetes de temes (un paquet per grup de 4)|Las tarjetas de temas (un paquete por grupo de 4)"
        ],
        imprimir: ["L'algoritme humà: targetes de temes (imprimible 1): un paquet per grup|El algoritmo humano: tarjetas de temas (imprimible 1): un paquete por grupo"],
        prep: [
          "Imprimir i retallar les targetes de temes: 6 temes amb 5 targetes cada un.|Imprimir y recortar las tarjetas de temas: 6 temas con 5 tarjetas cada uno.",
          "Pensar un exemple propi (sense dades personals) d'una vegada que una app us ha mostrat sempre el mateix.|Pensar un ejemplo propio (sin datos personales) de una vez que una app os ha mostrado siempre lo mismo.",
          "No demanar quines apps fan servir ni què hi miren.|No preguntar qué apps usan ni qué ven en ellas."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: dos inicis diferents|Bienvenida: dos inicios diferentes", fase: 'inici',
          fa: "Explica la història d'en Pau i la Nora, que tenen la mateixa app però veuen coses diferents. Recorda la reproducció automàtica de la unitat 3 i pregunta qui decideix el vídeo següent.|Explica la historia de Pau y Nora, que tienen la misma app pero ven cosas diferentes. Recuerda la reproducción automática de la unidad 3 y pregunta quién decide el vídeo siguiente.",
          diu: ["Per què creieu que a en Pau i a la Nora els surten coses diferents?|¿Por qué creéis que a Pau y a Nora les salen cosas diferentes?",
            "Qui tria el vídeo següent?|¿Quién elige el vídeo siguiente?",
            "Avui aprendrem a agafar el volant.|Hoy aprenderemos a coger el volante."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Algoritme, pistes, bombolla i volant|Algoritmo, pistas, burbuja y volante", fase: 'teoria',
          fa: "Amb les animacions, explica què és un algoritme (connecta amb els programes que han fet), quines pistes fa servir i per què les apps volen que hi passem estona. Projecta l'inici d'en Pau i presenta la bombolla de filtre. Acaba amb com guiar-lo.|Con las animaciones, explica qué es un algoritmo (conecta con los programas que han hecho), qué pistas usa y por qué las apps quieren que pasemos rato. Proyecta el inicio de Pau y presenta la burbuja de filtro. Termina con cómo guiarlo.",
          diu: ["Quin algoritme heu programat vosaltres en algun curs?|¿Qué algoritmo habéis programado vosotros en algún curso?",
            "Mirar un vídeo fins al final, és una pista? (Sí, molt forta.)|Ver un vídeo hasta el final, ¿es una pista? (Sí, muy fuerte.)",
            "Què hi falta, a l'inici d'en Pau?|¿Qué falta en el inicio de Pau?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "L'algoritme humà|El algoritmo humano", fase: 'desconnectat',
          fa: "En grups de 4: una persona fa d'algoritme amb el munt de targetes; una altra «mira»: si li agrada, rep una targeta del mateix tema; si no, d'un altre. Al cap de 10 torns, compten quants temes té. Després ho repeteixen, però ara la persona demana un tema nou cada tres torns. Comparen.|En grupos de 4: una persona hace de algoritmo con el montón de tarjetas; otra «mira»: si le gusta, recibe una tarjeta del mismo tema; si no, de otro. Al cabo de 10 turnos, cuentan cuántos temas tiene. Después lo repiten, pero ahora la persona pide un tema nuevo cada tres turnos. Comparan.",
          diu: ["Quants temes teníeu la primera vegada? I la segona?|¿Cuántos temas teníais la primera vez? ¿Y la segunda?",
            "Què ha fet que la bombolla s'obrís?|¿Qué ha hecho que la burbuja se abriera?",
            "Com es pot fer això a una app de veritat?|¿Cómo se puede hacer esto en una app de verdad?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: la pregunta de repàs, la història, les cinc targetes, per què li surt cada cosa a en Pau, la simulació de VideoNuvi, la pregunta dels dos inicis i l'inici d'en Pau. Pausa activa tots junts.|Cada alumno/a hace la sesión hasta la pausa activa: la pregunta de repaso, la historia, las cinco tarjetas, por qué le sale cada cosa a Pau, la simulación de VideoNuvi, la pregunta de los dos inicios y el inicio de Pau. Pausa activa todos juntos.",
          diu: ["A la simulació, com ha canviat el vostre inici?|En la simulación, ¿cómo ha cambiado vuestro inicio?",
            "Quina era la sortida de l'inici d'en Pau? (La lupa.)|¿Cuál era la salida del inicio de Pau? (La lupa.)",
            "Ara, tots: rebentem la bombolla!|Ahora, todos: ¡reventamos la burbuja!"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 10, t: "Reptes i el meu volant|Retos y mi volante", fase: 'ordinador',
          fa: "Continuen amb els reptes: obrir o tancar la bombolla, per què volen que hi passem estona, el menjar «màgic» de l'inici de la Jana i com agafa el volant la Nora. Després fan el seu volant de l'algoritme.|Siguen con los retos: abrir o cerrar la burbuja, por qué quieren que pasemos rato, la comida «mágica» del inicio de Jana y cómo coge el volante Nora. Después hacen su volante del algoritmo.",
          diu: ["Si una cosa surt molt al vostre inici, vol dir que és veritat?|Si algo sale mucho en vuestro inicio, ¿quiere decir que es verdad?",
            "Quin és el primer pas de la Nora? (Adonar-se'n.)|¿Cuál es el primer paso de Nora? (Darse cuenta.)",
            "Quina idea del vostre volant fareu aquesta setmana?|¿Qué idea de vuestro volante haréis esta semana?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: el meu volant de l'algoritme (i «L'algoritme humà», per a casa).|«Retos» y el paso «Crea»: mi volante del algoritmo (y «El algoritmo humano», para casa).", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu les idees clau amb el resum. Tiquet de sortida, preguntes finals i com s'han sentit. Proposa repetir l'algoritme humà a casa.|Repasad las ideas clave con el resumen. Ticket de salida, preguntas finales y cómo se han sentido. Propón repetir el algoritmo humano en casa.",
          diu: ["Digueu dues pistes que fa servir l'algoritme.|Decid dos pistas que usa el algoritmo.",
            "Què és la bombolla de filtre?|¿Qué es la burbuja de filtro?",
            "Com guiareu el vostre algoritme?|¿Cómo guiaréis vuestro algoritmo?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que les recomanacions són a l'atzar.|Piensa que las recomendaciones son al azar.",
          "Recorda les pistes: tot el que fas (i quanta estona) l'ajuda a decidir.|Recuerda las pistas: todo lo que haces (y cuánto rato) le ayuda a decidir."],
        ["Creu que només compta el «m'agrada».|Cree que solo cuenta el «me gusta».",
          "Mirar un vídeo fins al final, o tornar-lo a mirar, és una pista molt forta encara que no hi posis «m'agrada».|Ver un vídeo hasta el final, o volver a verlo, es una pista muy fuerte aunque no pongas «me gusta»."],
        ["Pensa que el que surt molt al seu inici és el que pensa tothom.|Piensa que lo que sale mucho en su inicio es lo que piensa todo el mundo.",
          "El teu inici és només teu. El d'una altra persona és diferent. Compara fonts.|Tu inicio es solo tuyo. El de otra persona es diferente. Compara fuentes."],
        ["Creu que no es pot fer res contra l'algoritme.|Cree que no se puede hacer nada contra el algoritmo.",
          "Mostra la simulació: buscar coses noves i dir «no m'interessa» canvia l'inici.|Muestra la simulación: buscar cosas nuevas y decir «no me interesa» cambia el inicio."],
        ["Es culpa per haver passat molta estona a una app.|Se culpa por haber pasado mucho rato en una app.",
          "Com a la unitat 3: estan fetes perquè costi parar. No és culpa seva; ara té eines per decidir.|Como en la unidad 3: están hechas para que cueste parar. No es culpa suya; ahora tiene herramientas para decidir."]
      ],
      diff: {
        mes: "Per anar més enllà: dissenyar (en paper) l'algoritme d'una app de música «que obri bombolles»: quins passos seguiria?; o comparar amb un adult els inicis de dues apps de la família.|Para ir más allá: diseñar (en papel) el algoritmo de una app de música «que abra burbujas»: ¿qué pasos seguiría?; o comparar con un adulto los inicios de dos apps de la familia.",
        menys: "A l'algoritme humà, fer només 6 torns i tres temes. A l'app, fer en parella la simulació de VideoNuvi.|En el algoritmo humano, hacer solo 6 turnos y tres temas. En la app, hacer en pareja la simulación de VideoNuvi."
      },
      aval: {
        ticket: ["Digues dues pistes que fa servir l'algoritme.|Di dos pistas que usa el algoritmo.",
          "Digues una manera de sortir de la bombolla.|Di una manera de salir de la burbuja."],
        rubric: [
          ["Entendre l'algoritme|Entender el algoritmo", "Explica què fa i quines pistes fa servir.|Explica qué hace y qué pistas usa.", "Ho explica amb ajuda.|Lo explica con ayuda."],
          ["Bombolla i temps|Burbuja y tiempo", "Relaciona l'estona a l'app amb anuncis i dades i reconeix la bombolla.|Relaciona el rato en la app con anuncios y datos y reconoce la burbuja.", "No veu per què les apps volen que hi passem estona.|No ve por qué las apps quieren que pasemos rato."],
          ["Guiar-lo|Guiarlo", "Tria accions concretes (buscar, «no m'interessa», configurar, parar).|Elige acciones concretas (buscar, «no me interesa», configurar, parar).", "Proposa idees generals.|Propone ideas generales."]
        ]
      },
      casa: "A casa, podeu fer «L'algoritme humà» amb dibuixos o retalls de revistes de temes diferents: una persona fa d'algoritme i l'altra «mira». Primer, l'algoritme només dona més del mateix; després, la persona demana temes nous. Compteu quants temes hi ha al final. Si feu servir apps de vídeos, mireu junts com desactivar el vídeo següent i com dir «no m'interessa».|En casa, podéis hacer «El algoritmo humano» con dibujos o recortes de revistas de temas diferentes: una persona hace de algoritmo y la otra «mira». Primero, el algoritmo solo da más de lo mismo; después, la persona pide temas nuevos. Contad cuántos temas hay al final. Si usáis apps de vídeos, mirad juntos cómo desactivar el vídeo siguiente y cómo decir «no me interesa».",
      faq: [
        ["Els algoritmes de recomanació són IA?|¿Los algoritmos de recomendación son IA?", "Molts fan servir IA per aprendre del que fem i predir què ens agradarà, com a la unitat 2. Però «algoritme» és més general: qualsevol recepta de passos.|Muchos usan IA para aprender de lo que hacemos y predecir qué nos gustará, como en la unidad 2. Pero «algoritmo» es más general: cualquier receta de pasos."],
        ["La bombolla de filtre és sempre dolenta?|¿La burbuja de filtro es siempre mala?", "Rebre coses que t'agraden pot estar bé. El problema és no veure res més i creure que el món és així, sobretot amb notícies i opinions.|Recibir cosas que te gustan puede estar bien. El problema es no ver nada más y creer que el mundo es así, sobre todo con noticias y opiniones."],
        ["Es pot apagar l'algoritme?|¿Se puede apagar el algoritmo?", "Algunes apps permeten veure les coses per ordre o només de qui segueixes, o desactivar el vídeo següent. Depèn de cada app.|Algunas apps permiten ver las cosas por orden o solo de quien sigues, o desactivar el vídeo siguiente. Depende de cada app."],
        ["Un alumne diu que no fa servir apps de vídeos.|Un alumno dice que no usa apps de vídeos.", "Cap problema: els algoritmes també són a les botigues en línia, la música o els cercadors. I l'algoritme humà li servirà per entendre-ho.|Ningún problema: los algoritmos también están en las tiendas en línea, la música o los buscadores. Y el algoritmo humano le servirá para entenderlo."]
      ],
      tec: [
        ["A la simulació de VideoNuvi volen provar l'altre camí.|En la simulación de VideoNuvi quieren probar el otro camino.", "Poden tornar enrere amb la fletxa del pas: cada camí mostra un inici diferent.|Pueden volver atrás con la flecha del paso: cada camino muestra un inicio diferente."],
        ["A l'inici d'en Pau toquen «Cerca» i no passa res.|En el inicio de Pau tocan «Buscar» y no pasa nada.", "És correcte: la cerca no és una trampa, és la sortida!|Es correcto: la búsqueda no es una trampa, ¡es la salida!"],
        ["Al pas de classificar en tres calaixos, al mòbil, surten un sota l'altre.|En el paso de clasificar en tres cajas, en el móvil, salen una debajo de otra.", "És normal: la targeta surt a dalt i es toca el calaix.|Es normal: la tarjeta sale arriba y se toca la caja."]
      ],
      seg: [
        "No demanis quines apps fan servir ni quantes hores hi passen.|No preguntes qué apps usan ni cuántas horas pasan.",
        "Si algun infant explica que el seu inici li mostra coses que el fan sentir malament o li fan por, escolta'l i parla-ho amb la família: es poden bloquejar i dir «no m'interessa».|Si algún niño o niña cuenta que su inicio le muestra cosas que le hacen sentir mal o le dan miedo, escúchale y háblalo con la familia: se pueden bloquear y decir «no me interesa».",
        "Si apareix contingut inadequat a l'edat, recorda la norma d'or: explicar-ho a un adult de confiança.|Si aparece contenido inadecuado para la edad, recuerda la norma de oro: contarlo a un adulto de confianza."
      ],
      extra: [
        "Matemàtiques: fer un gràfic de barres amb els temes de l'algoritme humà, abans i després.|Matemáticas: hacer un gráfico de barras con los temas del algoritmo humano, antes y después.",
        "Programació: escriure l'algoritme humà com a passos (si li agrada… si no…) i, a Creadors, programar-lo amb un escenari.|Programación: escribir el algoritmo humano como pasos (si le gusta… si no…) y, en Creadors, programarlo con un escenario.",
        "Per als grans: debat «Si tothom té un inici diferent, com ens posem d'acord sobre què passa al món?».|Para los mayores: debate «Si todo el mundo tiene un inicio diferente, ¿cómo nos ponemos de acuerdo sobre qué pasa en el mundo?»."
      ],
      trans: [
        "Sessió d3-1: el vídeo següent i les trampes per no parar. Aquí, qui el tria i per què.|Sesión d3-1: el vídeo siguiente y las trampas para no parar. Aquí, quién lo elige y por qué.",
        "Sessió d5-3: la IA aprèn de nosaltres. Sessió d6-4: l'anunci honest i el final del curs.|Sesión d5-3: la IA aprende de nosotros. Sesión d6-4: el anuncio honesto y el final del curso.",
        "Matemàtiques (gràfics), programació (algoritmes) i tutoria (benestar i diversitat d'opinions).|Matemáticas (gráficos), programación (algoritmos) y tutoría (bienestar y diversidad de opiniones)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Què em recomana l'algoritme?|¿Qué me recomienda el algoritmo?", x: "Per què veus el que veus… i com agafar el volant.|Por qué ves lo que ves… y cómo coger el volante.",
          nota: "Connecta amb el vídeo següent de la unitat 3.|Conecta con el vídeo siguiente de la unidad 3." },
        { id: 's2', k: 'pregunta', t: "Dos inicis diferents|Dos inicios diferentes", punts: ["En Pau: futbol, futbol, futbol…|Pau: fútbol, fútbol, fútbol…", "La Nora: gats i manualitats.|Nora: gatos y manualidades.", "Per què, si és la mateixa app?|¿Por qué, si es la misma app?"],
          nota: "Recull hipòtesis sobre qui tria.|Recoge hipótesis sobre quién elige." },
        { id: 's3', k: 'anim', t: "Una recepta de passos|Una receta de pasos", anim: 'd6algo', x: "Mira, busca semblants, ordena i mostra.|Mira, busca parecidos, ordena y muestra.",
          nota: "Recorda els programes que han fet: també eren algoritmes.|Recuerda los programas que han hecho: también eran algoritmos." },
        { id: 's4', k: 'anim', t: "Les pistes|Las pistas", anim: 'd6pistes', x: "Què mires, quanta estona, què t'agrada, què busques, l'hora i gent com tu.|Qué miras, cuánto rato, qué te gusta, qué buscas, la hora y gente como tú.",
          nota: "Remarca que mirar fins al final ja és una pista.|Remarca que ver hasta el final ya es una pista." },
        { id: 's5', k: 'concepte', t: "Per què volen que hi passem estona?|¿Por qué quieren que pasemos rato?", pic: 'img/ment/cad.webp',
          punts: ["Com més estona, més anuncis.|Cuanto más rato, más anuncios.", "I més dades sobre nosaltres.|Y más datos sobre nosotros.", "Vídeo següent i pantalla infinita.|Vídeo siguiente y pantalla infinita."],
          nota: "Sense culpes: estan fetes perquè costi parar.|Sin culpas: están hechas para que cueste parar." },
        { id: 's6', k: 'media', t: "L'inici d'en Pau|El inicio de Pau", x: "Què hi veieu? Què hi falta?|¿Qué veis? ¿Qué falta?", media: FEED,
          nota: "Tot del mateix tema, vídeo següent i pantalla infinita. La sortida: la cerca.|Todo del mismo tema, vídeo siguiente y pantalla infinita. La salida: la búsqueda." },
        { id: 's7', k: 'anim', t: "La bombolla de filtre|La burbuja de filtro", anim: 'd6bombolla', x: "El teu inici no és el món sencer.|Tu inicio no es el mundo entero.",
          nota: "Acaba amb com guiar l'algoritme: buscar, dir que no, configurar i parar.|Termina con cómo guiar el algoritmo: buscar, decir que no, configurar y parar." },
        { id: 's8', k: 'activitat', t: "L'algoritme humà|El algoritmo humano", timer: 12,
          punts: ["Si li agrada: un altre del mateix tema.|Si le gusta: otro del mismo tema.", "Si no: un d'un tema diferent.|Si no: uno de un tema diferente.", "Després: demaneu temes nous. Què canvia?|Después: pedid temas nuevos. ¿Qué cambia?"],
          nota: "Que apuntin quants temes tenen cada vegada.|Que apunten cuántos temas tienen cada vez." },
        { id: 's9', k: 'concepte', t: "Agafa el volant|Coge el volante", pic: 'img/ment/dir.webp',
          punts: ["Busca coses variades.|Busca cosas variadas.", "«No m'interessa».|«No me interesa».", "Vídeo següent desactivat, amb un adult.|Vídeo siguiente desactivado, con un adulto.", "Tu decideixes quan parar.|Tú decides cuándo parar."],
          nota: "Deixa-la projectada durant l'activitat.|Déjala proyectada durante la actividad." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Què em recomana l'algoritme?».|Abre la sesión «¿Qué me recomienda el algoritmo?».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "A la pausa: rebentem la bombolla!|En la pausa: ¡reventamos la burbuja!"],
          nota: "Avisa quan arribin a la pausa activa.|Avisa cuando lleguen a la pausa activa." },
        { id: 's11', k: 'repte', t: "Reptes: obre la bombolla|Retos: abre la burbuja", timer: 8,
          punts: ["Obre o tanca la bombolla?|¿Abre o cierra la burbuja?", "El menjar «màgic» de la Jana.|La comida «mágica» de Jana.", "La Nora agafa el volant.|Nora coge el volante."],
          nota: "Pregunta: surt molt vol dir que és veritat?|Pregunta: ¿sale mucho quiere decir que es verdad?" },
        { id: 's12', k: 'activitat', t: "Crea: el meu volant|Crea: mi volante", timer: 2,
          punts: ["Buscar, dir que no, vídeo següent i bombolla.|Buscar, decir que no, vídeo siguiente y burbuja.", "Desa el teu volant.|Guarda tu volante.", "A casa: l'algoritme humà.|En casa: el algoritmo humano."],
          nota: "Que comparteixin una idea per a aquesta setmana.|Que compartan una idea para esta semana." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["L'algoritme tria segons les nostres pistes.|El algoritmo elige según nuestras pistas.", "Més estona = més anuncis i dades.|Más rato = más anuncios y datos.", "El nostre inici no és el món: bombolla.|Nuestro inicio no es el mundo: burbuja.", "Podem guiar-lo i decidir quan parar.|Podemos guiarlo y decidir cuándo parar."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Dues pistes que fa servir l'algoritme.|Dos pistas que usa el algoritmo.", "Una manera de sortir de la bombolla.|Una manera de salir de la burbuja."],
          nota: "Pot ser oral, per torns.|Puede ser oral, por turnos." },
        { id: 's15', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["L'algoritme humà en família.|El algoritmo humano en familia.", "Com desactivar el vídeo següent.|Cómo desactivar el vídeo siguiente.", "Busqueu junts un tema nou.|Buscad juntos un tema nuevo."],
          nota: "Proposta per fer en família.|Propuesta para hacer en familia." }
      ],
      print: [
        { id: 'p1', t: "L'algoritme humà: targetes de temes|El algoritmo humano: tarjetas de temas", k: 'targetes',
          intro: "Un paquet per grup de 4. Retalleu les targetes (5 de cada tema) i ordeneu-les per temes en sis munts.|Un paquete por grupo de 4. Recortad las tarjetas (5 de cada tema) y ordenadlas por temas en seis montones.",
          items: [
            { t: "🐱 Animals|🐱 Animales", n: 5 },
            { t: "⚽ Esports|⚽ Deportes", n: 5 },
            { t: "🎵 Música|🎵 Música", n: 5 },
            { t: "🔭 Ciència|🔭 Ciencia", n: 5 },
            { t: "🎨 Manualitats|🎨 Manualidades", n: 5 },
            { t: "🍳 Cuina|🍳 Cocina", n: 5 }
          ] }
      ]
    },

    /* ---------- Sessió 4 · Projecte: l'anunci honest (final del curs) ---------- */
    'd6-4': {
      intro: "Sessió de projecte que tanca la unitat 6 i tot el curs Tech Digital. La classe organitza una fira solidària (real o imaginada) i cada equip ha de fer l'anunci del seu producte fet a mà, però un anunci honest: diu què és, quant costa, qui el fa i per a què són els diners, sense presses falses, exageracions, lletra petita ni cares sense permís. Primer analitzen un anunci tramposo, decideixen què hi va i què no, i practiquen en una conversa com defensar l'honestedat a l'equip. Després repassen el curs en tres grans idees (protegir-se, pensar abans de creure i decidir amb calma), trien les parts del seu anunci (es desa) i el fan en paper. La sessió acaba amb el diploma del curs.|Sesión de proyecto que cierra la unidad 6 y todo el curso Tech Digital. La clase organiza una feria solidaria (real o imaginada) y cada equipo tiene que hacer el anuncio de su producto hecho a mano, pero un anuncio honesto: dice qué es, cuánto cuesta, quién lo hace y para qué es el dinero, sin prisas falsas, exageraciones, letra pequeña ni caras sin permiso. Primero analizan un anuncio tramposo, deciden qué va y qué no, y practican en una conversación cómo defender la honestidad en el equipo. Después repasan el curso en tres grandes ideas (protegerse, pensar antes de creer y decidir con calma), eligen las partes de su anuncio (se guarda) y lo hacen en papel. La sesión termina con el diploma del curso.",
      claus: [
        "Un anunci honest diu què és, quant costa, qui el fa i per a què, i no amaga res.|Un anuncio honesto dice qué es, cuánto cuesta, quién lo hace y para qué, y no esconde nada.",
        "Fora trucs: presses falses, «tothom ho té», exageracions, lletra petita i cares sense permís.|Fuera trucos: prisas falsas, «todo el mundo lo tiene», exageraciones, letra pequeña y caras sin permiso.",
        "Tot el curs en tres idees: protegir-se, pensar abans de creure i decidir amb calma.|Todo el curso en tres ideas: protegerse, pensar antes de creer y decidir con calma.",
        "La norma d'or continua: si alguna cosa d'internet et fa sentir malament, explica-ho a un adult de confiança.|La norma de oro sigue: si algo de internet te hace sentir mal, cuéntaselo a un adulto de confianza."
      ],
      prev: [
        "Sessions d6-1 a d6-3: publicitat amagada, compres i algoritmes.|Sesiones d6-1 a d6-3: publicidad escondida, compras y algoritmos.",
        "Sessió d2-4: la campanya (eslògan, cartell i pla).|Sesión d2-4: la campaña (eslogan, cartel y plan)."
      ],
      obj: [
        "L'alumne/a analitza un anunci i n'identifica els trucs.|El alumno/a analiza un anuncio e identifica sus trucos.",
        "L'alumne/a decideix què va i què no va en un anunci honest.|El alumno/a decide qué va y qué no va en un anuncio honesto.",
        "L'alumne/a crea, en equip, un anunci honest amb eslògan, imatge i informació clara.|El alumno/a crea, en equipo, un anuncio honesto con eslogan, imagen e información clara.",
        "L'alumne/a relaciona el que ha après al curs amb tres grans idees.|El alumno/a relaciona lo que ha aprendido en el curso con tres grandes ideas."
      ],
      comp: [
        "Competència digital (CD3): creació de continguts responsables|Competencia digital (CD3): creación de contenidos responsables",
        "Competència emprenedora: dissenyar una campanya per a una causa|Competencia emprendedora: diseñar una campaña para una causa",
        "Competència ciutadana: consum responsable, honestedat i respecte|Competencia ciudadana: consumo responsable, honestidad y respeto"
      ],
      vocab: [
        ["Anunci honest|Anuncio honesto", "Anunci que convenç amb la veritat i no amaga res.|Anuncio que convence con la verdad y no esconde nada."],
        ["Eslògan|Eslogan", "Frase curta i fàcil de recordar.|Frase corta y fácil de recordar."],
        ["Fira solidària|Feria solidaria", "Venda per recollir diners per a una causa.|Venta para recoger dinero para una causa."],
        ["Persona consumidora|Persona consumidora", "Qui compra o fa servir productes i serveis, i té drets.|Quien compra o usa productos y servicios, y tiene derechos."],
        ["Truc|Truco", "Recurs d'un anunci per pressionar o confondre.|Recurso de un anuncio para presionar o confundir."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: l'anunci honest»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el anuncio honesto»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Cartolines DIN A3, retoladors, colors i, si es vol, els productes de la fira (o fotos dels productes, sense persones)|Cartulinas DIN A3, rotuladores, colores y, si se quiere, los productos de la feria (o fotos de los productos, sin personas)"
        ],
        imprimir: ["Plantilla de l'anunci honest (imprimible 1): una per equip|Plantilla del anuncio honesto (imprimible 1): una por equipo", "Diploma del curs (imprimible 2): un per alumne/a|Diploma del curso (imprimible 2): uno por alumno/a"],
        prep: [
          "Fer equips de 3 o 4 i decidir si la fira serà real o imaginada (i per a quina causa).|Hacer equipos de 3 o 4 y decidir si la feria será real o imaginada (y para qué causa).",
          "Imprimir els diplomes amb el nom de cada alumne/a.|Imprimir los diplomas con el nombre de cada alumno/a.",
          "Si es grava un anunci, fer-ho sense cares (només mans i productes) i amb permís del centre.|Si se graba un anuncio, hacerlo sin caras (solo manos y productos) y con permiso del centro."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: la fira solidària|Bienvenida: la feria solidaria", fase: 'inici',
          fa: "Explica l'últim repte del curs: l'anunci honest per a la fira solidària. Fes el repàs ràpid de la unitat 6 i forma els equips.|Explica el último reto del curso: el anuncio honesto para la feria solidaria. Haz el repaso rápido de la unidad 6 y forma los equipos.",
          diu: ["Quines tres preguntes fem davant d'un anunci?|¿Qué tres preguntas hacemos ante un anuncio?",
            "Es pot convèncer sense enganyar? Com?|¿Se puede convencer sin engañar? ¿Cómo?",
            "Què vendrà el vostre equip?|¿Qué venderá vuestro equipo?"],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 5, t: "Què té un anunci honest|Qué tiene un anuncio honesto", fase: 'teoria',
          fa: "Amb l'animació, presenta què hi va i què no. Projecta l'anunci tramposo de les galetes i deixa que trobin els trucs. Recorda les parts d'un bon anunci (eslògan, imatge i informació).|Con la animación, presenta qué va y qué no. Proyecta el anuncio tramposo de las galletas y deja que encuentren los trucos. Recuerda las partes de un buen anuncio (eslogan, imagen e información).",
          diu: ["Quins trucs té l'anunci de les galetes?|¿Qué trucos tiene el anuncio de las galletas?",
            "Com el faríeu honest?|¿Cómo lo haríais honesto?",
            "Quina informació no pot faltar?|¿Qué información no puede faltar?"],
          slides: ['s3', 's4', 's5'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 20, t: "A l'ordinador: anunci honest i repàs del curs|En el ordenador: anuncio honesto y repaso del curso", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió: el repàs, la història, les targetes, l'anunci tramposo, què hi va i què no, l'eslògan, la conversa amb l'equip, la pausa activa, el repte del curs en tres idees, l'etiqueta de l'anunci i el pas «Crea» (les parts del seu anunci).|Cada alumno/a hace la sesión: el repaso, la historia, las tarjetas, el anuncio tramposo, qué va y qué no, el eslogan, la conversación con el equipo, la pausa activa, el reto del curso en tres ideas, la etiqueta del anuncio y el paso «Crea» (las partes de su anuncio).",
          diu: ["Com heu convençut la Mia de no posar «Només en queden 3»?|¿Cómo habéis convencido a Mia de no poner «Solo quedan 3»?",
            "A quina gran idea anava cada cosa del curs?|¿A qué gran idea iba cada cosa del curso?",
            "Quin eslògan heu triat?|¿Qué eslogan habéis elegido?"],
          slides: ['s6', 's7', 's8'], app: "De «Recorda» fins al pas «Crea»: el nostre anunci honest.|De «Recuerda» hasta el paso «Crea»: nuestro anuncio honesto.", org: "Individual|Individual" },
        { min: 17, t: "L'anunci en paper|El anuncio en papel", fase: 'desconnectat',
          fa: "Cada equip fa el cartell: eslògan, imatge gran i informació clara (què, quant, on, quan, per a què) i l'etiqueta «Anunci de la fira». Repassen el cartell amb la llista de l'anunci honest. Presenten-lo a la classe i cada equip rep una millora.|Cada equipo hace el cartel: eslogan, imagen grande e información clara (qué, cuánto, dónde, cuándo, para qué) y la etiqueta «Anuncio de la feria». Repasan el cartel con la lista del anuncio honesto. Lo presentan a la clase y cada equipo recibe una mejora.",
          diu: ["Hi ha cap truc amagat al vostre cartell?|¿Hay algún truco escondido en vuestro cartel?",
            "Es veu el preu de lluny?|¿Se ve el precio de lejos?",
            "Una cosa que funciona i una millora per a cada equip.|Una cosa que funciona y una mejora para cada equipo."],
          slides: ['s9', 's10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Equips de 3 o 4|Equipos de 3 o 4" },
        { min: 13, t: "Tancament, diploma i tiquet de sortida|Cierre, diploma y ticket de salida", fase: 'tancament',
          fa: "Repasseu el curs amb el resum i la diapositiva dels telèfons d'ajuda. Que facin les preguntes finals, el diploma de l'app i com s'han sentit. Lliura els diplomes en paper un a un, dient a cada alumne/a una cosa concreta que ha fet bé durant el curs.|Repasad el curso con el resumen y la diapositiva de los teléfonos de ayuda. Que hagan las preguntas finales, el diploma de la app y cómo se han sentido. Entrega los diplomas en papel uno a uno, diciendo a cada alumno/a una cosa concreta que ha hecho bien durante el curso.",
          diu: ["Quina és la cosa més important que us emporteu del curs?|¿Qué es lo más importante que os lleváis del curso?",
            "Quina és la norma d'or?|¿Cuál es la norma de oro?",
            "A qui ajudareu amb el que heu après?|¿A quién ayudaréis con lo que habéis aprendido?"],
          slides: ['s12', 's13', 's14', 's15', 's16'], app: "«Tancament»: la pregunta final, el diploma i com m'he sentit.|«Cierre»: la pregunta final, el diploma y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que un anunci honest ha de ser avorrit.|Piensa que un anuncio honesto tiene que ser aburrido.",
          "Pot ser bonic, divertit i creatiu: el que no fa és enganyar ni amagar.|Puede ser bonito, divertido y creativo: lo que no hace es engañar ni esconder."],
        ["Vol posar «el millor del món» perquè «tots ho diuen».|Quiere poner «lo mejor del mundo» porque «todos lo dicen».",
          "Pregunta: es pot comprovar? Proposa dir una cosa certa i bonica: «fet a mà amb paper reciclat».|Pregunta: ¿se puede comprobar? Propón decir algo cierto y bonito: «hecho a mano con papel reciclado»."],
        ["Oblida el preu o el posa petit.|Olvida el precio o lo pone pequeño.",
          "El preu és informació clau: ha de ser clar i es pot llegir de lluny.|El precio es información clave: tiene que ser claro y se tiene que poder leer de lejos."],
        ["Vol posar fotos de companys al cartell.|Quiere poner fotos de compañeros en el cartel.",
          "Sense permís, no. El protagonista és el producte.|Sin permiso, no. El protagonista es el producto."],
        ["Al repàs del curs, no recorda les primeres unitats.|En el repaso del curso, no recuerda las primeras unidades.",
          "Fes servir la diapositiva de repàs i les insígnies de l'app com a pistes.|Usa la diapositiva de repaso y las insignias de la app como pistas."]
      ],
      diff: {
        mes: "Per anar més enllà: fer també l'anunci en format de vídeo curt sense cares o en format de publicació, amb l'etiqueta clara; o escriure la versió «tramposa» del mateix anunci i comparar-les.|Para ir más allá: hacer también el anuncio en formato de vídeo corto sin caras o en formato de publicación, con la etiqueta clara; o escribir la versión «tramposa» del mismo anuncio y compararlas.",
        menys: "Donar la plantilla amb les caselles (què, quant, on, quan, per a què) i tres eslògans per triar. A l'app, fer en parella la conversa amb l'equip.|Dar la plantilla con las casillas (qué, cuánto, dónde, cuándo, para qué) y tres eslóganes para elegir. En la app, hacer en pareja la conversación con el equipo."
      },
      aval: {
        ticket: ["Digues què ha de tenir un anunci honest.|Di qué debe tener un anuncio honesto.",
          "Digues la cosa més important que t'emportes del curs.|Di lo más importante que te llevas del curso."],
        rubric: [
          ["Anunci honest|Anuncio honesto", "El cartell té què, quant, qui, on, quan i per a què, sense trucs.|El cartel tiene qué, cuánto, quién, dónde, cuándo y para qué, sin trucos.", "Hi falta informació o hi ha algun truc.|Falta información o hay algún truco."],
          ["Comunicació|Comunicación", "Eslògan curt, imatge clara i etiqueta sincera.|Eslogan corto, imagen clara y etiqueta sincera.", "El missatge no es llegeix bé de lluny.|El mensaje no se lee bien de lejos."],
          ["Visió del curs|Visión del curso", "Relaciona el que ha après amb protegir-se, pensar abans de creure i decidir amb calma.|Relaciona lo aprendido con protegerse, pensar antes de creer y decidir con calma.", "En recorda idees soltes.|Recuerda ideas sueltas."]
        ]
      },
      casa: "A casa, l'infant us pot ensenyar el cartell de l'anunci honest i explicar-vos què hi va i què no. Ha acabat el curs Tech Digital: podeu repassar junts el diploma i les idees del curs (contrasenyes, privadesa, bulos, IA, benestar, ciberseguretat i consum) i tenir a la vista la targeta d'ajuda: primer, un adult de confiança; i si no, 116 111, 017 i 112.|En casa, el niño o la niña os puede enseñar el cartel del anuncio honesto y explicaros qué va y qué no. Ha terminado el curso Tech Digital: podéis repasar juntos el diploma y las ideas del curso (contraseñas, privacidad, bulos, IA, bienestar, ciberseguridad y consumo) y tener a la vista la tarjeta de ayuda: primero, un adulto de confianza; y si no, 116 111, 017 y 112.",
      faq: [
        ["Cal fer la fira de veritat?|¿Hay que hacer la feria de verdad?", "No: el projecte funciona amb una fira imaginada. Si el centre ho permet, fer-la de veritat és una manera molt bona de tancar el curs.|No: el proyecto funciona con una feria imaginada. Si el centro lo permite, hacerla de verdad es una manera muy buena de cerrar el curso."],
        ["El curs també tenia un diploma a la unitat 3?|¿El curso también tenía un diploma en la unidad 3?", "El curs ara té sis unitats; el diploma final és el d'aquesta sessió, que recull totes les unitats.|El curso ahora tiene seis unidades; el diploma final es el de esta sesión, que recoge todas las unidades."],
        ["Com s'avalua el projecte?|¿Cómo se evalúa el proyecto?", "Amb la rúbrica (anunci honest, comunicació i visió del curs) i el que han triat al pas «Crea», que queda desat.|Con la rúbrica (anuncio honesto, comunicación y visión del curso) y lo que han elegido en el paso «Crea», que queda guardado."],
        ["I si un equip vol fer un anunci d'un producte real d'una marca?|¿Y si un equipo quiere hacer un anuncio de un producto real de una marca?", "Millor un producte propi de la fira: així no fan publicitat de cap marca i treballen la idea de l'honestedat.|Mejor un producto propio de la feria: así no hacen publicidad de ninguna marca y trabajan la idea de la honestidad."]
      ],
      tec: [
        ["Al pas «Crea» no es pot continuar.|En el paso «Crea» no se puede continuar.", "Cal respondre totes les preguntes (els punts de dalt); el botó «Desa» s'activa al final.|Hay que responder todas las preguntas (los puntos de arriba); el botón «Guardar» se activa al final."],
        ["El diploma de l'app no surt amb el nom complet.|El diploma de la app no sale con el nombre completo.", "Surt el nom del perfil. El diploma imprimible de la guia té espai per escriure el nom.|Sale el nombre del perfil. El diploma imprimible de la guía tiene espacio para escribir el nombre."],
        ["Al repte del curs, al mòbil, els tres calaixos surten un sota l'altre.|En el reto del curso, en el móvil, las tres cajas salen una debajo de otra.", "És normal: la targeta surt a dalt i es toca el calaix.|Es normal: la tarjeta sale arriba y se toca la caja."]
      ],
      seg: [
        "Els cartells i els vídeos no han de portar cares ni noms complets de l'alumnat.|Los carteles y los vídeos no deben llevar caras ni nombres completos del alumnado.",
        "Si la fira és de veritat, seguiu les normes del centre per a les vendes i els diners.|Si la feria es de verdad, seguid las normas del centro para las ventas y el dinero.",
        "En acabar el curs, recorda a tothom la targeta d'ajuda: primer un adult de confiança; i si no, 116 111, 017 i 112.|Al terminar el curso, recuerda a todo el mundo la tarjeta de ayuda: primero un adulto de confianza; y si no, 116 111, 017 y 112."
      ],
      extra: [
        "Llengua: escriure la carta de presentació de la fira per a les famílies, també honesta.|Lengua: escribir la carta de presentación de la feria para las familias, también honesta.",
        "Matemàtiques: fer el pressupost de la fira (materials, preus i diners per a la causa).|Matemáticas: hacer el presupuesto de la feria (materiales, precios y dinero para la causa).",
        "Per als grans: preparar una mini-exposició «Tech Digital» per a alumnes més petits amb el millor de cada unitat.|Para los mayores: preparar una mini-exposición «Tech Digital» para alumnos más pequeños con lo mejor de cada unidad."
      ],
      trans: [
        "Sessions d6-1 a d6-3: publicitat, compres i algoritmes, aplicats a un anunci propi.|Sesiones d6-1 a d6-3: publicidad, compras y algoritmos, aplicados a un anuncio propio.",
        "Final del curs: Tech Digital (sis unitats). Itinerari recomanat: Robòtica i, després, Web.|Final del curso: Tech Digital (seis unidades). Itinerario recomendado: Robótica y, después, Web.",
        "Llengua (text persuasiu honest), plàstica (cartell), matemàtiques (preus) i tutoria (valors i comiat).|Lengua (texto persuasivo honesto), plástica (cartel), matemáticas (precios) y tutoría (valores y despedida)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "L'anunci honest|El anuncio honesto", x: "L'últim projecte del curs.|El último proyecto del curso.",
          nota: "Projecte final de la unitat 6 i de Tech Digital.|Proyecto final de la unidad 6 y de Tech Digital." },
        { id: 's2', k: 'repas', t: "Què hem après a la unitat 6?|¿Qué hemos aprendido en la unidad 6?",
          punts: ["La publicitat amagada i les tres preguntes.|La publicidad escondida y las tres preguntas.", "Compres: para, calcula, pregunta.|Compras: para, calcula, pregunta.", "Algoritmes: la bombolla i el volant.|Algoritmos: la burbuja y el volante."],
          nota: "Que cada equip digui una idea de cada sessió.|Que cada equipo diga una idea de cada sesión." },
        { id: 's3', k: 'anim', t: "Hi va i no hi va|Va y no va", anim: 'd6honest', x: "Què, quant, qui i per a què. Sense trucs.|Qué, cuánto, quién y para qué. Sin trucos.",
          nota: "Fes que llegeixin les dues columnes en veu alta.|Haz que lean las dos columnas en voz alta." },
        { id: 's4', k: 'media', t: "Un anunci tramposo|Un anuncio tramposo", x: "Quins trucs hi veieu?|¿Qué trucos veis?", media: GALETES,
          nota: "Exageració, presses falses, «tothom» i el preu amagat.|Exageración, prisas falsas, «todo el mundo» y el precio escondido." },
        { id: 's5', k: 'concepte', t: "Les parts de l'anunci|Las partes del anuncio", pic: 'img/ment/ate.webp',
          punts: ["Eslògan curt.|Eslogan corto.", "Imatge que es veu de lluny.|Imagen que se ve de lejos.", "Informació clara i etiqueta sincera.|Información clara y etiqueta sincera."],
          nota: "Recorda la campanya de la unitat 2.|Recuerda la campaña de la unidad 2." },
        { id: 's6', k: 'activitat', t: "A l'ordinador: l'anunci honest|En el ordenador: el anuncio honesto", timer: 20,
          punts: ["Analitza, decideix què hi va i tria l'eslògan.|Analiza, decide qué va y elige el eslogan.", "Ajuda l'equip a fer-lo honest.|Ayuda al equipo a hacerlo honesto.", "Tria les parts del teu anunci.|Elige las partes de tu anuncio."],
          nota: "Fes la pausa activa tots junts quan hi arribin.|Haz la pausa activa todos juntos cuando lleguen." },
        { id: 's7', k: 'repte', t: "El curs en tres idees|El curso en tres ideas", timer: 3,
          punts: ["Protegir-me.|Protegerme.", "Pensar abans de creure.|Pensar antes de creer.", "Decidir amb calma.|Decidir con calma."],
          nota: "Que posin un exemple de cada unitat.|Que pongan un ejemplo de cada unidad." },
        { id: 's8', k: 'concepte', t: "Convèncer amb la veritat|Convencer con la verdad", pic: 'img/ment/cor.webp',
          punts: ["«Fet a mà per 5è B»|«Hecho a mano por 5.º B»", "«2 €, per a la protectora»|«2 €, para la protectora»", "«Dijous a les 5, al pati»|«Jueves a las 5, en el patio»"],
          nota: "Exemples d'informació que convenç sense trucs.|Ejemplos de información que convence sin trucos." },
        { id: 's9', k: 'activitat', t: "Feu el cartell|Haced el cartel", timer: 10,
          punts: ["Eslògan, imatge i informació.|Eslogan, imagen e información.", "Etiqueta: «Anunci de la fira».|Etiqueta: «Anuncio de la feria».", "Repasseu-lo amb la llista.|Repasadlo con la lista."],
          nota: "Passa pels equips i pregunta: «Es veu el preu?».|Pasa por los equipos y pregunta: «¿Se ve el precio?»." },
        { id: 's10', k: 'activitat', t: "Presentació i millores|Presentación y mejoras", timer: 7,
          punts: ["Cada equip presenta el seu anunci.|Cada equipo presenta su anuncio.", "La resta: una cosa que funciona…|El resto: una cosa que funciona…", "…i una millora.|…y una mejora."],
          nota: "Un minut per equip.|Un minuto por equipo." },
        { id: 's11', k: 'concepte', t: "La llista de l'anunci honest|La lista del anuncio honesto", pic: 'img/ment/lli.webp',
          punts: ["Què és i qui el fa.|Qué es y quién lo hace.", "Quant costa i per a què.|Cuánto cuesta y para qué.", "On i quan.|Dónde y cuándo.", "Sense trucs ni cares sense permís.|Sin trucos ni caras sin permiso."],
          nota: "Deixa-la projectada mentre fan el cartell.|Déjala proyectada mientras hacen el cartel." },
        { id: 's12', k: 'resum', t: "Tot el curs|Todo el curso",
          punts: ["Protegir-me: contrasenyes, dades, permisos i dispositius.|Protegerme: contraseñas, datos, permisos y dispositivos.", "Pensar abans de creure: bulos, imatges i IA.|Pensar antes de creer: bulos, imágenes e IA.", "Decidir amb calma: pantalles, compres, anuncis i algoritmes.|Decidir con calma: pantallas, compras, anuncios y algoritmos.", "I tractar bé els altres i demanar ajuda.|Y tratar bien a los demás y pedir ayuda."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's13', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Què ha de tenir un anunci honest?|¿Qué debe tener un anuncio honesto?", "La cosa més important que t'emportes del curs.|Lo más importante que te llevas del curso."],
          nota: "Fes el tiquet mentre lliures els diplomes.|Haz el ticket mientras entregas los diplomas." },
        { id: 's14', k: 'media', t: "Sempre hi ha algú que t'ajuda|Siempre hay alguien que te ayuda", x: "Explicar-ho no és xivar-se: és cuidar-te.|Contarlo no es chivarse: es cuidarte.", media: HELP,
          nota: "Deixa-la projectada mentre lliures els diplomes.|Déjala proyectada mientras entregas los diplomas." },
        { id: 's15', k: 'concepte', t: "Enhorabona: curs acabat!|¡Enhorabuena: curso terminado!", pic: 'img/chars/numi-medalla.webp',
          punts: ["Has acabat les sis unitats de Tech Digital.|Has terminado las seis unidades de Tech Digital.", "Ara pots ajudar la teva família i la teva escola.|Ahora puedes ayudar a tu familia y a tu escuela.", "Si dubtes, pregunta a un adult de confiança.|Si dudas, pregunta a un adulto de confianza."],
          nota: "Lliura els diplomes un a un, dient a cada alumne/a una cosa concreta que ha fet bé.|Entrega los diplomas uno a uno, diciendo a cada alumno/a algo concreto que ha hecho bien." },
        { id: 's16', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["Ensenya l'anunci honest a casa.|Enseña el anuncio honesto en casa.", "Repasseu junts el diploma.|Repasad juntos el diploma.", "La targeta d'ajuda, a la vista.|La tarjeta de ayuda, a la vista."],
          nota: "Darrera diapositiva del curs.|Última diapositiva del curso." }
      ],
      print: [
        { id: 'p1', t: "Plantilla de l'anunci honest|Plantilla del anuncio honesto", k: 'fitxa',
          intro: "Una per equip. Ompliu-la abans de fer el cartell i repasseu-la al final.|Una por equipo. Rellenadla antes de hacer el cartel y repasadla al final.",
          items: [
            { q: "📦 Què venem i qui ho fa:|📦 Qué vendemos y quién lo hace:", sol: "Per exemple: «Punts de llibre fets a mà per 5è B, amb paper reciclat».|Por ejemplo: «Puntos de libro hechos a mano por 5.º B, con papel reciclado»." },
            { q: "💶 Preu (en euros, ben clar):|💶 Precio (en euros, bien claro):", sol: "Per exemple: «2 € cada un».|Por ejemplo: «2 € cada uno»." },
            { q: "📍 On i quan:|📍 Dónde y cuándo:", sol: "Per exemple: «Dijous a les 5, al pati».|Por ejemplo: «Jueves a las 5, en el patio»." },
            { q: "💛 Per a què són els diners:|💛 Para qué es el dinero:", sol: "Per exemple: «Per a la protectora d'animals».|Por ejemplo: «Para la protectora de animales»." },
            { q: "💬 Eslògan (curt i sense exageracions):|💬 Eslogan (corto y sin exageraciones):", sol: "Per exemple: «Llegeix amb estil, ajuda amb cor».|Por ejemplo: «Lee con estilo, ayuda con corazón»." },
            { q: "✅ Repàs: sense presses falses · sense «tothom ho té» · sense lletra petita · sense cares sense permís · etiqueta «Anunci de la fira»|✅ Repaso: sin prisas falsas · sin «todo el mundo lo tiene» · sin letra pequeña · sin caras sin permiso · etiqueta «Anuncio de la feria»", sol: "Totes marcades.|Todas marcadas." }
          ] },
        { id: 'p2', t: "Diploma del curs|Diploma del curso", k: 'diploma',
          intro: "ha completat el curs Tech Digital de Numi Tech: es protegeix i protegeix els altres a la xarxa, pensa abans de creure, fa servir la IA amb cap i decideix amb calma com a persona consumidora digital.|ha completado el curso Tech Digital de Numi Tech: se protege y protege a los demás en la red, piensa antes de creer, usa la IA con cabeza y decide con calma como persona consumidora digital.",
          items: [
            "Protegeix les seves dades, els comptes i els dispositius.|Protege sus datos, las cuentas y los dispositivos.",
            "Pensa abans de publicar i tracta bé els altres.|Piensa antes de publicar y trata bien a los demás.",
            "Caça bulos, missatges trampa i imatges falses.|Caza bulos, mensajes trampa e imágenes falsas.",
            "Parla amb una IA amb cap i sap què aprèn de nosaltres.|Habla con una IA con cabeza y sabe qué aprende de nosotros.",
            "Cuida el seu temps amb pantalles i les seves partides.|Cuida su tiempo con pantallas y sus partidas.",
            "Detecta la publicitat, fa números abans de comprar i guia l'algoritme.|Detecta la publicidad, hace números antes de comprar y guía el algoritmo.",
            "Sap demanar ajuda: adults de confiança, 116 111, 017 i 112.|Sabe pedir ayuda: adultos de confianza, 116 111, 017 y 112."
          ] }
      ]
    }
  });
}
