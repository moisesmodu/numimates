/* Tech IA · unitat 4 · guies del professor (mateix esquema que tech-guide-c1.js).
   El generador d'imatges de l'app és simulat (dibuixos propis que milloren segons el prompt): no cal cap compte ni servei
   extern. Fets amb data, comprovats l'octubre de 2026: Reglament europeu d'IA, article 50 (transparència dels deepfakes i
   marcatge, des del 2 d'agost de 2026; període de gràcia del marcatge fins al 2 de desembre de 2026 per als sistemes ja
   comercialitzats); codi de bones pràctiques sobre marcatge i etiquetatge (Comissió Europea, juny de 2026); Thaler contra
   Perlmutter (Tribunal d'Apel·lacions de Washington DC, 2025; el Tribunal Suprem en va denegar la revisió el 2 de març de
   2026); GEMA contra OpenAI (Munic, novembre de 2025) i Getty Images contra Stability AI (Londres, novembre de 2025). */
Object.assign(TGUIDE, {

  /* ---------- Sessió 1 · Del soroll a la imatge ---------- */
  'i4-1': {
    intro: "L'alumnat descobreix com es genera una imatge amb IA: el model aprèn de moltíssimes parelles d'imatge i text i, en el cas de la difusió, parteix de soroll a l'atzar i el treu pas a pas guiat pel prompt. Escriu prompts d'imatge amb tema, escena, estil, llum, enquadrament i límits en un generador simulat que respon amb imatges millors o pitjors segons el prompt, caça errors típics en un cartell generat, parla d'estereotips i del debat amb els artistes, i escriu el prompt d'una il·lustració pròpia.|El alumnado descubre cómo se genera una imagen con IA: el modelo aprende de muchísimas parejas de imagen y texto y, en el caso de la difusión, parte de ruido al azar y lo quita paso a paso guiado por el prompt. Escribe prompts de imagen con tema, escena, estilo, luz, encuadre y límites en un generador simulado que responde con imágenes mejores o peores según el prompt, caza errores típicos en un cartel generado, habla de estereotipos y del debate con los artistas, y escribe el prompt de una ilustración propia.",
    claus: [
      "Aprenen de parelles imatge-text: relacionen paraules amb formes, colors i estils (i, de vegades, poden reproduir imatges que han vist molt).|Aprenden de parejas imagen-texto: relacionan palabras con formas, colores y estilos (y, a veces, pueden reproducir imágenes que han visto mucho).",
      "Difusió: del soroll a la imatge en molts passos, guiats pel text. Mateix prompt i un altre soroll (llavor) → una altra imatge.|Difusión: del ruido a la imagen en muchos pasos, guiados por el texto. Mismo prompt y otro ruido (semilla) → otra imagen.",
      "Un bon prompt d'imatge: tema, escena, estil, llum, enquadrament i el que no hi vols («sense text»).|Un buen prompt de imagen: tema, escena, estilo, luz, encuadre y lo que no quieres («sin texto»).",
      "Errors (mans, lletres, ombres), estereotips i estils d'artistes: revisar, demanar diversitat i descriure la tècnica en lloc d'imitar algú.|Errores (manos, letras, sombras), estereotipos y estilos de artistas: revisar, pedir diversidad y describir la técnica en lugar de imitar a alguien."
    ],
    prev: ["Unitat 3: les peces d'un bon prompt i iterar. Unitat 2: el biaix de les dades.|Unidad 3: las piezas de un buen prompt e iterar. Unidad 2: el sesgo de los datos."],
    obj: [
      "L'alumne/a explica de manera conceptual com un generador crea una imatge a partir de soroll i d'un prompt.|El alumno/a explica de manera conceptual cómo un generador crea una imagen a partir de ruido y de un prompt.",
      "L'alumne/a escriu prompts d'imatge complets i els millora iterant.|El alumno/a escribe prompts de imagen completos y los mejora iterando.",
      "L'alumne/a identifica errors típics i estereotips en imatges generades.|El alumno/a identifica errores típicos y estereotipos en imágenes generadas.",
      "L'alumne/a argumenta per què cal respectar l'estil i l'obra dels artistes.|El alumno/a argumenta por qué hay que respetar el estilo y la obra de los artistas."
    ],
    comp: [
      "Competència digital (CD2, CD5): creació de continguts i funcionament de la IA generativa|Competencia digital (CD2, CD5): creación de contenidos y funcionamiento de la IA generativa",
      "Competència en consciència i expressions culturals (CCEC3): estils, tècniques i autoria|Competencia en conciencia y expresiones culturales (CCEC3): estilos, técnicas y autoría",
      "Competència ciutadana (CC3): estereotips i diversitat|Competencia ciudadana (CC3): estereotipos y diversidad"
    ],
    vocab: [
      ["Generador d'imatges|Generador de imágenes", "Model d'IA que crea imatges noves a partir d'un text (prompt).|Modelo de IA que crea imágenes nuevas a partir de un texto (prompt)."],
      ["Difusió|Difusión", "Tècnica que crea una imatge partint de soroll i traient-lo pas a pas, guiada pel text.|Técnica que crea una imagen partiendo de ruido y quitándolo paso a paso, guiada por el texto."],
      ["Soroll|Ruido", "Píxels a l'atzar, sense cap forma; és el punt de partida de la difusió.|Píxeles al azar, sin ninguna forma; es el punto de partida de la difusión."],
      ["Llavor (seed)|Semilla (seed)", "Número que decideix el soroll de partida: amb la mateixa llavor i el mateix prompt, la mateixa imatge.|Número que decide el ruido de partida: con la misma semilla y el mismo prompt, la misma imagen."],
      ["Estereotip|Estereotipo", "Imatge simplificada i repetida d'un grup de persones que les dades poden reproduir.|Imagen simplificada y repetida de un grupo de personas que los datos pueden reproducir."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Del soroll a la imatge»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Del ruido a la imagen»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Llapis de colors i goma per parella|Lápices de colores y goma por pareja"],
      imprimir: ["La quadrícula de soroll (imprimible 1): una per parella|La cuadrícula de ruido (imprimible 1): una por pareja", "Prompts secrets (imprimible 2): un full de targetes per a la classe|Prompts secretos (imprimible 2): una hoja de tarjetas para la clase"],
      prep: ["Imprimir les quadrícules i retallar les targetes de prompts (dues parelles han de tenir el mateix prompt).|Imprimir las cuadrículas y recortar las tarjetas de prompts (dos parejas tienen que tener el mismo prompt).", "Provar el generador simulat: la imatge millora quan s'hi afegeixen les peces del prompt.|Probar el generador simulado: la imagen mejora cuando se añaden las piezas del prompt.", "Pensar un exemple d'estil descrit amb paraules (aquarel·la, línia clara) per a la conversa sobre artistes.|Pensar un ejemplo de estilo descrito con palabras (acuarela, línea clara) para la conversación sobre artistas."]
    },
    plan: [
      { min: 5, t: 'La portada de tardor|La portada de otoño', fase: 'inici',
        fa: "Explica el problema de l'Ona: «tardor» dona un arbre verd qualsevol. Pregunta com creuen que «pinta» una IA.|Explica el problema de Ona: «otoño» da un árbol verde cualquiera. Pregunta cómo creen que «pinta» una IA.",
        diu: ["Una IA d'imatges retalla fotos d'internet?|¿Una IA de imágenes recorta fotos de internet?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: 'Parelles, difusió, prompts, errors i artistes|Parejas, difusión, prompts, errores y artistas', fase: 'teoria',
        fa: "Amb les animacions: com aprèn de parelles imatge-text, la difusió (del soroll a la imatge), les peces d'un prompt d'imatge, els errors i els estereotips, i el debat amb els artistes.|Con las animaciones: cómo aprende de parejas imagen-texto, la difusión (del ruido a la imagen), las piezas de un prompt de imagen, los errores y los estereotipos, y el debate con los artistas.",
        diu: ["Per què amb el mateix prompt surt una imatge diferent?|¿Por qué con el mismo prompt sale una imagen distinta?", "És just imitar l'estil d'una il·lustradora viva?|¿Es justo imitar el estilo de una ilustradora viva?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'Difusió amb llapis|Difusión con lápiz', fase: 'desconnectat',
        fa: "En parelles, omplen la quadrícula de soroll i, en 4 rondes, la transformen segons el prompt de la targeta. Comparen amb la parella que tenia el mateix prompt.|En parejas, rellenan la cuadrícula de ruido y, en 4 rondas, la transforman según el prompt de la tarjeta. Comparan con la pareja que tenía el mismo prompt.",
        diu: ["Per què les dues imatges del mateix prompt són diferents?|¿Por qué las dos imágenes del mismo prompt son distintas?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 25, t: "A l'ordinador: el generador simulat|En el ordenador: el generador simulado", fase: 'ordinador',
        fa: "Fan la sessió de l'app: la llavor, la portada de l'Ona, els errors del cartell generat, el cartell del concert, l'ordre de la difusió, artistes i estereotips, i el prompt del barri del futur. Fes la pausa activa amb tothom.|Hacen la sesión de la app: la semilla, la portada de Ona, los errores del cartel generado, el cartel del concierto, el orden de la difusión, artistas y estereotipos, y el prompt del barrio del futuro. Haz la pausa activa con todo el mundo.",
        diu: ["Què ha canviat a la imatge quan heu afegit «sense text»?|¿Qué ha cambiado en la imagen cuando habéis añadido «sin texto»?", "Quins errors heu trobat al cartell?|¿Qué errores habéis encontrado en el cartel?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (el barri del futur).|De «Recuerda» hasta el paso «Crea» (el barrio del futuro).", org: "Individual|Individual" },
      { min: 8, t: 'Tancament: crear amb respecte|Cierre: crear con respeto', fase: 'tancament',
        fa: "Repassa com es genera una imatge i les bones pràctiques (descriure la tècnica, revisar errors i estereotips). Anuncia la sessió següent: deepfakes. Tiquet de sortida i com s'han sentit.|Repasa cómo se genera una imagen y las buenas prácticas (describir la técnica, revisar errores y estereotipos). Anuncia la sesión siguiente: deepfakes. Tique de salida y cómo se han sentido.",
        diu: ["Què passa quan aquesta tecnologia fa una imatge d'una persona real?|¿Qué pasa cuando esta tecnología hace una imagen de una persona real?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Creu que el generador retalla i enganxa fotos d'internet.|Cree que el generador recorta y pega fotos de internet.", "Recorda la difusió: parteix de soroll i genera píxels nous. Per això cada imatge és diferent.|Recuerda la difusión: parte de ruido y genera píxeles nuevos. Por eso cada imagen es distinta."],
      ["Escriu prompts d'una sola paraula i s'estranya del resultat.|Escribe prompts de una sola palabra y se extraña del resultado.", "Fes-li dir les sis peces: tema, escena, estil, llum, enquadrament i límits.|Hazle decir las seis piezas: tema, escena, estilo, luz, encuadre y límites."],
      ["Demana «a l'estil de» artistes coneguts.|Pide «al estilo de» artistas conocidos.", "Proposa descriure la tècnica: aquarel·la, línia clara, colors pastel, geomètric.|Propón describir la técnica: acuarela, línea clara, colores pastel, geométrico."],
      ["Pensa que si no veu errors, la imatge és real.|Piensa que si no ve errores, la imagen es real.", "Els generadors milloren de pressa: les pistes ajuden però no demostren res. Sessió següent: verificar.|Los generadores mejoran deprisa: las pistas ayudan pero no demuestran nada. Sesión siguiente: verificar."],
      ["Posa al prompt noms de persones reals o de companys.|Pone en el prompt nombres de personas reales o de compañeros.", "Res de persones reals: personatges inventats i descrits.|Nada de personas reales: personajes inventados y descritos."]
    ],
    diff: {
      mes: "Nivell PRO: com canviar només un detall (mateix prompt i llavor) i prompts d'imatge amb 5 peces (també un exemple). Debat: el model ha de saber dibuixar en l'estil d'algú?|Nivel PRO: cómo cambiar solo un detalle (mismo prompt y semilla) y prompts de imagen con 5 piezas (también un ejemplo). Debate: ¿el modelo debe saber dibujar en el estilo de alguien?",
      menys: "Fer servir els botons de peces a la portada de l'Ona i tenir a la pissarra les sis peces del prompt d'imatge.|Usar los botones de piezas en la portada de Ona y tener en la pizarra las seis piezas del prompt de imagen."
    },
    aval: {
      ticket: ["Explica amb dues frases com es genera una imatge per difusió.|Explica con dos frases cómo se genera una imagen por difusión.", "Escriu un prompt d'imatge amb almenys 4 peces.|Escribe un prompt de imagen con al menos 4 piezas."],
      rubric: [
        ["Com es genera|Cómo se genera", "Explica el soroll, els passos i el paper del prompt.|Explica el ruido, los pasos y el papel del prompt.", "Diu que «busca fotos».|Dice que «busca fotos»."],
        ["Prompt d'imatge|Prompt de imagen", "Fa servir tema, estil, format, llum i límits.|Usa tema, estilo, formato, luz y límites.", "Només escriu el tema.|Solo escribe el tema."],
        ["Mirada crítica|Mirada crítica", "Detecta errors i estereotips.|Detecta errores y estereotipos.", "No veu cap problema.|No ve ningún problema."],
        ["Respecte|Respeto", "Descriu la tècnica i no imita persones concretes.|Describe la técnica y no imita a personas concretas.", "Copia o imita artistes vius.|Copia o imita a artistas vivos."]
      ]
    },
    casa: "A casa, mireu junts imatges d'anuncis o de xarxes i feu de detectius de prompts: com descriuríeu l'estil, la llum i l'enquadrament de cada imatge? Hi veieu algun estereotip?|En casa, mirad juntos imágenes de anuncios o de redes y haced de detectives de prompts: ¿cómo describiríais el estilo, la luz y el encuadre de cada imagen? ¿Veis algún estereotipo?",
    faq: [
      ["Tots els generadors d'imatges fan servir la difusió?|¿Todos los generadores de imágenes usan la difusión?", "No tots: la difusió és molt habitual, però alguns models generen la imatge per parts, de manera semblant als models de llenguatge, i n'hi ha que combinen tècniques. La idea clau és la mateixa: aprenen patrons de moltes imatges amb text i en generen una de nova a partir del prompt.|No todos: la difusión es muy habitual, pero algunos modelos generan la imagen por partes, de forma parecida a los modelos de lenguaje, y hay otros que combinan técnicas. La idea clave es la misma: aprenden patrones de muchas imágenes con texto y generan una nueva a partir del prompt."],
      ["Les imatges de l'app són generades per una IA de veritat?|¿Las imágenes de la app están generadas por una IA de verdad?", "No: el generador és simulat. Són dibuixos propis de Numi que milloren segons les peces del prompt (amb la mateixa rúbrica de la unitat 3). Així es treballa sense comptes ni serveis externs.|No: el generador es simulado. Son dibujos propios de Numi que mejoran según las piezas del prompt (con la misma rúbrica de la unidad 3). Así se trabaja sin cuentas ni servicios externos."],
      ["Què és la llavor (seed)?|¿Qué es la semilla (seed)?", "El número que decideix el soroll de partida. Amb el mateix prompt i la mateixa llavor, moltes eines tornen a fer la mateixa imatge; si la llavor canvia, la imatge també.|El número que decide el ruido de partida. Con el mismo prompt y la misma semilla, muchas herramientas vuelven a hacer la misma imagen; si la semilla cambia, la imagen también."]
    ],
    tec: [
      ["La imatge no canvia en enviar el prompt.|La imagen no cambia al enviar el prompt.", "El nivell depèn de les peces detectades: mireu quines s'il·luminen (per exemple, «en forma de…» per al format i «sense…» per als límits).|El nivel depende de las piezas detectadas: mirad cuáles se iluminan (por ejemplo, «en forma de…» para el formato y «sin…» para los límites)."],
      ["Al mòbil no es veu la imatge.|En el móvil no se ve la imagen.", "La resposta surt a sota del prompt: cal desplaçar-se dins del requadre.|La respuesta sale debajo del prompt: hay que desplazarse dentro del recuadro."]
    ],
    seg: ["Res de persones reals ni de companys als prompts, ni a les activitats ni a casa. El generador simulat no envia res fora de l'app.|Nada de personas reales ni de compañeros en los prompts, ni en las actividades ni en casa. El generador simulado no envía nada fuera de la app."],
    extra: [
      "Visual i plàstica: fer la mateixa escena amb tres tècniques (aquarel·la, línia clara, collage) i descriure-les amb paraules de prompt.|Visual y plástica: hacer la misma escena con tres técnicas (acuarela, línea clara, collage) y describirlas con palabras de prompt.",
      "Matemàtiques: quantes imatges diferents de 10 × 10 caselles es poden fer amb 2 colors? (2 elevat a 100).|Matemáticas: ¿cuántas imágenes distintas de 10 × 10 casillas se pueden hacer con 2 colores? (2 elevado a 100)."
    ],
    trans: ["Sessió i4-2: deepfakes i veus clonades. Sessió i4-4: el projecte del còmic amb autoria declarada.|Sesión i4-2: deepfakes y voces clonadas. Sesión i4-4: el proyecto del cómic con autoría declarada."],
    slides: [
      { id: 's1', k: 'portada', t: 'Del soroll a la imatge|Del ruido a la imagen', x: 'Imatge, veu i vídeo generats|Imagen, voz y vídeo generados', nota: "Primera sessió de la unitat 4.|Primera sesión de la unidad 4." },
      { id: 's2', k: 'pregunta', t: 'Com «pinta» una IA?|¿Cómo «pinta» una IA?', x: "L'Ona escriu «tardor» i li surt un arbre verd qualsevol.|Ona escribe «otoño» y le sale un árbol verde cualquiera.", nota: "Recull hipòtesis: «busca fotos», «les barreja»…|Recoge hipótesis: «busca fotos», «las mezcla»…" },
      { id: 's3', k: 'anim', t: 'Parelles imatge-text|Parejas imagen-texto', anim: 'i41pairs', x: "Aprèn com es relacionen paraules i imatges.|Aprende cómo se relacionan palabras e imágenes.", nota: "Com el model de text aprenia patrons de paraules.|Como el modelo de texto aprendía patrones de palabras." },
      { id: 's4', k: 'anim', t: 'Del soroll a la imatge|Del ruido a la imagen', anim: 'i41noise', x: "A cada pas treu una mica de soroll, guiat pel prompt.|En cada paso quita un poco de ruido, guiado por el prompt.", nota: "El vídeo, igual però amb molts fotogrames.|El vídeo, igual pero con muchos fotogramas." },
      { id: 's5', k: 'anim', t: "Les peces d'un prompt d'imatge|Las piezas de un prompt de imagen", anim: 'i41prompt', x: "Tema, escena, estil, llum, enquadrament i el que no vols.|Tema, escena, estilo, luz, encuadre y lo que no quieres.", nota: "Deixa-ho a la pissarra.|Déjalo en la pizarra." },
      { id: 's6', k: 'anim', t: 'Errors i estereotips|Errores y estereotipos', anim: 'i41bias', x: "Mans, lletres, ombres… i el mateix tipus de persona.|Manos, letras, sombras… y el mismo tipo de persona.", nota: "Connecta-ho amb el biaix de la unitat 2.|Conéctalo con el sesgo de la unidad 2." },
      { id: 's7', k: 'anim', t: 'Estils i artistes|Estilos y artistas', anim: 'i41style', x: "Descriu la tècnica; no imitis artistes vius.|Describe la técnica; no imites a artistas vivos.", nota: "Obre el debat: per què s'hi queixen?|Abre el debate: ¿por qué se quejan?" },
      { id: 's8', k: 'activitat', t: 'Difusió amb llapis|Difusión con lápiz', timer: 10, punts: ["Ompliu la quadrícula de soroll.|Rellenad la cuadrícula de ruido.", "4 rondes de 10 caselles.|4 rondas de 10 casillas.", "Compareu-ho amb el mateix prompt.|Comparadlo con el mismo prompt."], nota: "Quadrícula i targetes de prompts.|Cuadrícula y tarjetas de prompts." },
      { id: 's9', k: 'pregunta', t: 'Mateix prompt, imatges diferents?|¿Mismo prompt, imágenes distintas?', x: "Què ha canviat entre les dues parelles?|¿Qué ha cambiado entre las dos parejas?", nota: "El soroll de partida: la llavor.|El ruido de partida: la semilla." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 25, punts: ["La portada de l'Ona.|La portada de Ona.", "Els errors del cartell.|Los errores del cartel.", "El concert i el barri del futur.|El concierto y el barrio del futuro."], nota: "Fes la pausa activa amb tothom.|Haz la pausa activa con todo el mundo." },
      { id: 's11', k: 'repte', t: "La portada de l'Ona|La portada de Ona", punts: ["Afegeix peces al prompt.|Añade piezas al prompt.", "Mira com millora la imatge.|Mira cómo mejora la imagen."], nota: "«Sense text» evita les lletres inventades.|«Sin texto» evita las letras inventadas." },
      { id: 's12', k: 'repte', t: 'Caça els errors|Caza los errores', punts: ["Mans, lletres, objectes fosos i potes.|Manos, letras, objetos fundidos y patas.", "Els 4 errors.|Los 4 errores."], nota: "Les pistes ajuden, però no demostren res.|Las pistas ayudan, pero no demuestran nada." },
      { id: 's13', k: 'concepte', t: 'Estil propi, no copiat|Estilo propio, no copiado', punts: ["Geomètric, aquarel·la, línia clara…|Geométrico, acuarela, línea clara…", "Sense cares de famosos.|Sin caras de famosos.", "Sense imitar ningú.|Sin imitar a nadie."], nota: "És el cartell del concert solidari.|Es el cartel del concierto solidario." },
      { id: 's14', k: 'concepte', t: 'I si és una persona real?|¿Y si es una persona real?', punts: ["La mateixa tecnologia fa vídeos i veus.|La misma tecnología hace vídeos y voces.", "Propera sessió: deepfakes.|Próxima sesión: deepfakes."], nota: "Deixa la pregunta oberta.|Deja la pregunta abierta." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ["Del soroll a la imatge, guiat pel prompt.|Del ruido a la imagen, guiado por el prompt.", "Un bon prompt d'imatge té sis peces.|Un buen prompt de imagen tiene seis piezas.", "Revisar errors, estereotips i respectar els artistes.|Revisar errores, estereotipos y respetar a los artistas."], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Com funciona la difusió?|¿Cómo funciona la difusión?", "Un prompt d'imatge amb 4 peces.|Un prompt de imagen con 4 piezas."], nota: "Respostes en un paper.|Respuestas en un papel." }
    ],
    print: [
      { id: 'p1', t: 'La quadrícula de soroll|La cuadrícula de ruido', k: 'graella', w: 10, h: 10,
        intro: "Una per parella. 1) Ompliu les caselles amb punts de colors a l'atzar. 2) Llegiu el prompt de la targeta. 3) A cada ronda, esborreu o repinteu 10 caselles perquè s'assemblin més al prompt. Feu 4 rondes.|Una por pareja. 1) Rellenad las casillas con puntos de colores al azar. 2) Leed el prompt de la tarjeta. 3) En cada ronda, borrad o repintad 10 casillas para que se parezcan más al prompt. Haced 4 rondas.",
        legend: [['🟡', 'Groc|Amarillo'], ['🔵', 'Blau|Azul'], ['🟢', 'Verd|Verde'], ['🔴', 'Vermell|Rojo'], ['⚪', 'Blanc o esborrat|Blanco o borrado']],
        items: [{ q: 'El nostre prompt era:|Nuestro prompt era:' }, { q: "Què s'hi veu després de la ronda 4? S'assembla a la de l'altra parella?|¿Qué se ve después de la ronda 4? ¿Se parece a la de la otra pareja?", big: true }] },
      { id: 'p2', t: 'Prompts secrets|Prompts secretos', k: 'targetes',
        intro: "Retalleu les targetes. Doneu el mateix prompt a dues parelles diferents.|Recortad las tarjetas. Dad el mismo prompt a dos parejas distintas.",
        items: [{ t: 'Un sol groc sobre el mar blau ☀️|Un sol amarillo sobre el mar azul ☀️', n: 2 }, { t: 'Un arbre verd en un turó 🌳|Un árbol verde en una colina 🌳', n: 2 }, { t: 'Una casa vermella amb teulada 🏠|Una casa roja con tejado 🏠', n: 2 }, { t: 'Un cor vermell al mig ❤️|Un corazón rojo en el centro ❤️', n: 2 }, { t: 'Una lluna groga de nit 🌙|Una luna amarilla de noche 🌙', n: 2 }, { t: 'Una bandera de tres colors 🏳️|Una bandera de tres colores 🏳️', n: 2 }] }
    ]
  },

  /* ---------- Sessió 2 · Deepfakes i veus clonades ---------- */
  'i4-2': {
    intro: "L'alumnat aprèn què és un deepfake (canvi de cara, llavis sincronitzats, veu clonada o escena inventada) i com es fan servir en estafes amb veus clonades. Practica el protocol davant d'una trucada urgent (penjar i tornar a trucar, paraula clau de la família), analitza un vídeo fals que circula pel xat del curs, aprèn a verificar (qui ho publica, altres fonts, l'original, les marques i etiquetes) i què diu la llei europea des del 2 d'agost de 2026. Treballa el consentiment amb una conversa en què algú proposa un deepfake «de broma» i acaba amb el cartell d'una campanya.|El alumnado aprende qué es un deepfake (cambio de cara, labios sincronizados, voz clonada o escena inventada) y cómo se usan en estafas con voces clonadas. Practica el protocolo ante una llamada urgente (colgar y volver a llamar, palabra clave de la familia), analiza un vídeo falso que circula por el chat del curso, aprende a verificar (quién lo publica, otras fuentes, el original, las marcas y etiquetas) y qué dice la ley europea desde el 2 de agosto de 2026. Trabaja el consentimiento con una conversación en la que alguien propone un deepfake «de broma» y termina con el cartel de una campaña.",
    claus: [
      "Deepfake: contingut generat o manipulat amb IA perquè sembli que una persona real diu o fa el que no ha passat.|Deepfake: contenido generado o manipulado con IA para que parezca que una persona real dice o hace lo que no ha pasado.",
      "Veus clonades: amb pocs segons de veu. Senyals d'estafa: pressa, secret i diners. Defensa: penjar i trucar al número de sempre, paraula clau.|Voces clonadas: con pocos segundos de voz. Señales de estafa: prisa, secreto y dinero. Defensa: colgar y llamar al número de siempre, palabra clave.",
      "Les pistes visuals fallen cada vegada més; verificar no: qui ho publica, altres fonts, l'original, marques i etiquetes.|Las pistas visuales fallan cada vez más; verificar no: quién lo publica, otras fuentes, el original, marcas y etiquetas.",
      "UE (art. 50, des del 2-8-2026): cal etiquetar els deepfakes; els generadors marquen el contingut. Sense etiqueta no vol dir real. Persones reals: mai sense permís.|UE (art. 50, desde el 2-8-2026): hay que etiquetar los deepfakes; los generadores marcan el contenido. Sin etiqueta no quiere decir real. Personas reales: nunca sin permiso."
    ],
    prev: ["Sessió i4-1: com es genera una imatge. Unitat 3: lectura lateral i fonts fiables.|Sesión i4-1: cómo se genera una imagen. Unidad 3: lectura lateral y fuentes fiables."],
    obj: [
      "L'alumne/a explica què és un deepfake i en reconeix els tipus.|El alumno/a explica qué es un deepfake y reconoce sus tipos.",
      "L'alumne/a aplica un protocol davant de trucades o missatges urgents amb veus conegudes.|El alumno/a aplica un protocolo ante llamadas o mensajes urgentes con voces conocidas.",
      "L'alumne/a verifica un contingut sospitós amb fonts i l'original, sense dependre només de pistes visuals.|El alumno/a verifica un contenido sospechoso con fuentes y el original, sin depender solo de pistas visuales.",
      "L'alumne/a defensa el consentiment i sap on demanar ajuda.|El alumno/a defiende el consentimiento y sabe dónde pedir ayuda."
    ],
    comp: [
      "Competència digital (CD1, CD4): avaluació de continguts i seguretat|Competencia digital (CD1, CD4): evaluación de contenidos y seguridad",
      "Competència ciutadana (CC1, CC2): desinformació, drets i convivència|Competencia ciudadana (CC1, CC2): desinformación, derechos y convivencia",
      "Competència personal, social i d'aprendre a aprendre (CPSAA3): benestar i relacions saludables|Competencia personal, social y de aprender a aprender (CPSAA3): bienestar y relaciones saludables"
    ],
    vocab: [
      ["Deepfake|Deepfake", "Vídeo, imatge o àudio fet o manipulat amb IA perquè sembli real.|Vídeo, imagen o audio hecho o manipulado con IA para que parezca real."],
      ["Veu clonada|Voz clonada", "Imitació d'una veu real generada amb IA a partir de pocs segons d'àudio.|Imitación de una voz real generada con IA a partir de pocos segundos de audio."],
      ["Paraula clau familiar|Palabra clave familiar", "Paraula secreta pactada per comprovar que una trucada és de veritat.|Palabra secreta pactada para comprobar que una llamada es de verdad."],
      ["Cerca inversa d'imatges|Búsqueda inversa de imágenes", "Buscar a partir d'una imatge on més apareix i quin és l'original.|Buscar a partir de una imagen dónde más aparece y cuál es el original."],
      ["Credencials de contingut|Credenciales de contenido", "Metadades verificables que diuen com s'ha creat i editat una imatge o un vídeo.|Metadatos verificables que dicen cómo se ha creado y editado una imagen o un vídeo."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Deepfakes i veus clonades»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Deepfakes y voces clonadas»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "El protocol del centre per a casos de ciberassetjament a mà|El protocolo del centro para casos de ciberacoso a mano"],
      imprimir: ["Trucades sospitoses (imprimible 1): un full de targetes per a la classe|Llamadas sospechosas (imprimible 1): una hoja de tarjetas para la clase", "El pla de la família (imprimible 2): un per alumne/a, per a casa|El plan de la familia (imprimible 2): uno por alumno/a, para casa"],
      prep: ["Imprimir i retallar les targetes de trucades.|Imprimir y recortar las tarjetas de llamadas.", "Revisar el protocol del centre i els telèfons d'ajuda (017 i 116 111) per si surt algun cas real.|Revisar el protocolo del centro y los teléfonos de ayuda (017 y 116 111) por si sale algún caso real.", "Preveure que el tema pot remoure experiències personals: deixar clar que es pot parlar després amb el docent.|Prever que el tema puede remover experiencias personales: dejar claro que se puede hablar después con el docente."]
    },
    plan: [
      { min: 5, t: 'El vídeo del divendres|El vídeo del viernes', fase: 'inici',
        fa: "Explica la història del vídeo del director i la trucada a l'avi d'en Marc. Pregunta si n'han vist mai d'aquests (sense noms ni casos de l'aula).|Explica la historia del vídeo del director y la llamada al abuelo de Marc. Pregunta si han visto alguna vez casos así (sin nombres ni casos del aula).",
        diu: ["Com sabríeu si el vídeo és fals?|¿Cómo sabríais si el vídeo es falso?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: 'Deepfakes, veus, verificar, etiquetes i consentiment|Deepfakes, voces, verificar, etiquetas y consentimiento', fase: 'teoria',
        fa: "Amb les animacions: tipus de deepfakes, com funcionen les estafes amb veus clonades, per què les pistes visuals ja no basten i com es verifica, què diu la llei europea i el consentiment.|Con las animaciones: tipos de deepfakes, cómo funcionan las estafas con voces clonadas, por qué las pistas visuales ya no bastan y cómo se verifica, qué dice la ley europea y el consentimiento.",
        diu: ["Pressa, secret i diners: per què funcionen tan bé en una estafa?|Prisa, secreto y dinero: ¿por qué funcionan tan bien en una estafa?", "Si un vídeo no té etiqueta, vol dir que és real?|Si un vídeo no tiene etiqueta, ¿quiere decir que es real?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: 'La trucada sospitosa|La llamada sospechosa', fase: 'desconnectat',
        fa: "En parelles, una persona llegeix una targeta de trucada i l'altra aplica el protocol (no donar dades, paraula clau, penjar i tornar a trucar). Canvien.|En parejas, una persona lee una tarjeta de llamada y la otra aplica el protocolo (no dar datos, palabra clave, colgar y volver a llamar). Cambian.",
        diu: ["Què us ha costat més: penjar o no donar cap dada?|¿Qué os ha costado más: colgar o no dar ningún dato?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 27, t: "A l'ordinador: detectar, verificar i decidir|En el ordenador: detectar, verificar y decidir", fase: 'ordinador',
        fa: "Fan la sessió de l'app: la trucada de la germana, el vídeo fals del director (pistes), l'etiqueta que no hi és, què ajuda a verificar, la conversa del deepfake «de broma», què fer si circula un muntatge i el cartell de la campanya. Fes la pausa activa amb tothom.|Hacen la sesión de la app: la llamada de la hermana, el vídeo falso del director (pistas), la etiqueta que no está, qué ayuda a verificar, la conversación del deepfake «de broma», qué hacer si circula un montaje y el cartel de la campaña. Haz la pausa activa con todo el mundo.",
        diu: ["Quina pista us ha semblat més fiable? I quina menys?|¿Qué pista os ha parecido más fiable? ¿Y cuál menos?", "Què heu respost a l'Àlex? Per què?|¿Qué habéis respondido a Álex? ¿Por qué?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (el cartell de la campanya).|De «Recuerda» hasta el paso «Crea» (el cartel de la campaña).", org: "Individual|Individual" },
      { min: 8, t: 'Tancament: el protocol de la classe|Cierre: el protocolo de la clase', fase: 'tancament',
        fa: "Feu entre tots el protocol: davant d'un vídeo (atura't, verifica, no reenviïs), d'una trucada (penja, truca, paraula clau) i d'un deepfake d'algú (no el comparteixis, proves, adult, denúncia). Tiquet de sortida i com s'han sentit.|Haced entre todos el protocolo: ante un vídeo (detente, verifica, no reenvíes), una llamada (cuelga, llama, palabra clave) y un deepfake de alguien (no lo compartas, pruebas, adulto, denuncia). Tique de salida y cómo se han sentido.",
        diu: ["A qui podeu demanar ajuda si us passa?|¿A quién podéis pedir ayuda si os pasa?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Creu que sempre es pot saber si un vídeo és fals mirant-lo bé.|Cree que siempre se puede saber si un vídeo es falso mirándolo bien.", "Les pistes visuals ajuden, però els generadors milloren: la verificació es fa fora del vídeo (font oficial, altres fonts, original).|Las pistas visuales ayudan, pero los generadores mejoran: la verificación se hace fuera del vídeo (fuente oficial, otras fuentes, original)."],
      ["Pensa que si no té etiqueta d'IA, és real.|Piensa que si no tiene etiqueta de IA, es real.", "Les marques es poden treure i no tothom les posa: l'absència d'etiqueta no demostra res.|Las marcas se pueden quitar y no todo el mundo las pone: la ausencia de etiqueta no demuestra nada."],
      ["Minimitza un deepfake «de broma».|Minimiza un deepfake «de broma».", "Qui decideix si fa mal és qui el rep. Sense permís, mai; i pot ser delicte.|Quien decide si hace daño es quien lo recibe. Sin permiso, nunca; y puede ser delito."],
      ["Reenvia un muntatge «per avisar».|Reenvía un montaje «para avisar».", "Cada reenviament el multiplica. Millor: captura com a prova, avisa un adult i denuncia-ho a la plataforma.|Cada reenvío lo multiplica. Mejor: captura como prueba, avisa a un adulto y denúncialo en la plataforma."],
      ["Proposa una paraula clau fàcil d'endevinar (el nom de la mascota).|Propone una palabra clave fácil de adivinar (el nombre de la mascota).", "Ha de ser una paraula que no surti mai a les xarxes ni sigui fàcil de deduir.|Tiene que ser una palabra que no salga nunca en las redes ni sea fácil de deducir."]
    ],
    diff: {
      mes: "Nivell PRO: el cas del codi per SMS des del número de sempre i un prompt amb 5 peces per al cartell. Recerca: què diu l'article 50 de la llei europea d'IA sobre les obres artístiques i satíriques?|Nivel PRO: el caso del código por SMS desde el número de siempre y un prompt con 5 piezas para el cartel. Investigación: ¿qué dice el artículo 50 de la ley europea de IA sobre las obras artísticas y satíricas?",
      menys: "Fer el vídeo fals en parella i donar la pista: «mira el compte, el text, la imatge i l'àudio». A la trucada, fer servir les targetes amb les respostes escrites.|Hacer el vídeo falso en pareja y dar la pista: «mira la cuenta, el texto, la imagen y el audio». En la llamada, usar las tarjetas con las respuestas escritas."
    },
    aval: {
      ticket: ["Què faries si et truca una veu coneguda demanant diners amb pressa?|¿Qué harías si te llama una voz conocida pidiendo dinero con prisa?", "Digues dues maneres de verificar un vídeo sospitós.|Di dos maneras de verificar un vídeo sospechoso."],
      rubric: [
        ["Concepte|Concepto", "Explica què és un deepfake i en coneix els tipus.|Explica qué es un deepfake y conoce sus tipos.", "No el distingeix d'un vídeo editat qualsevol.|No lo distingue de un vídeo editado cualquiera."],
        ["Protocol de trucades|Protocolo de llamadas", "Penja, torna a trucar o demana la paraula clau; no dona dades.|Cuelga, vuelve a llamar o pide la palabra clave; no da datos.", "Actua amb pressa i dona dades.|Actúa con prisa y da datos."],
        ["Verificació|Verificación", "Busca la font, altres fonts i l'original.|Busca la fuente, otras fuentes y el original.", "Es fia de l'aspecte o de la popularitat.|Se fía del aspecto o de la popularidad."],
        ["Consentiment|Consentimiento", "Rebutja els deepfakes de persones reals i sap on demanar ajuda.|Rechaza los deepfakes de personas reales y sabe dónde pedir ayuda.", "Ho veu com una broma sense conseqüències.|Lo ve como una broma sin consecuencias."]
      ]
    },
    casa: "A casa, feu el pla de la família contra les veus clonades: trieu una paraula clau que no surti mai a les xarxes, decidiu a quin número trucareu sempre per comprovar-ho i recordeu que cap banc ni cap familiar no us demanarà mai un codi per SMS.|En casa, haced el plan de la familia contra las voces clonadas: elegid una palabra clave que no salga nunca en las redes, decidid a qué número llamaréis siempre para comprobarlo y recordad que ningún banco ni ningún familiar os pedirá nunca un código por SMS.",
    faq: [
      ["Què diu exactament la llei europea sobre els deepfakes?|¿Qué dice exactamente la ley europea sobre los deepfakes?", "El Reglament europeu d'IA (article 50) obliga, des del 2 d'agost de 2026, que qui publica un deepfake indiqui que és generat o manipulat amb IA; si forma part d'una obra evidentment artística, satírica o de ficció, n'hi ha prou amb un avís que no n'espatlli el gaudi. Els proveïdors de generadors han de marcar el contingut en un format llegible per màquina (per als sistemes que ja eren al mercat abans d'aquella data, hi ha temps fins al 2 de desembre de 2026). El juny de 2026, la Comissió Europea va publicar un codi de bones pràctiques voluntari sobre el marcatge i l'etiquetatge.|El Reglamento europeo de IA (artículo 50) obliga, desde el 2 de agosto de 2026, a que quien publica un deepfake indique que está generado o manipulado con IA; si forma parte de una obra evidentemente artística, satírica o de ficción, basta con un aviso que no estropee su disfrute. Los proveedores de generadores tienen que marcar el contenido en un formato legible por máquina (para los sistemas que ya estaban en el mercado antes de esa fecha, hay plazo hasta el 2 de diciembre de 2026). En junio de 2026, la Comisión Europea publicó un código de buenas prácticas voluntario sobre el marcado y el etiquetado."],
      ["És veritat que es pot clonar una veu amb pocs segons d'àudio?|¿Es verdad que se puede clonar una voz con pocos segundos de audio?", "Sí: agències de seguretat com l'FBI (en un avís del desembre de 2024) i empreses de ciberseguretat ho alerten, i recomanen pactar una paraula clau amb la família i tornar a trucar al número de sempre davant de qualsevol petició urgent. A Espanya, el 017 (INCIBE) atén consultes sobre aquestes estafes.|Sí: agencias de seguridad como el FBI (en un aviso de diciembre de 2024) y empresas de ciberseguridad lo alertan, y recomiendan pactar una palabra clave con la familia y volver a llamar al número de siempre ante cualquier petición urgente. En España, el 017 (INCIBE) atiende consultas sobre estas estafas."],
      ["Un deepfake d'un company és delicte?|¿Un deepfake de un compañero es delito?", "Pot ser-ho. Segons el contingut, pot vulnerar el dret a la pròpia imatge, a l'honor o a la intimitat, i els muntatges sexuals poden constituir delictes greus, també quan qui els fa és menor. A Espanya hi ha lleis en tràmit per castigar específicament els deepfakes sexuals. Davant d'un cas, activeu el protocol del centre.|Puede serlo. Según el contenido, puede vulnerar el derecho a la propia imagen, al honor o a la intimidad, y los montajes sexuales pueden constituir delitos graves, también cuando quien los hace es menor. En España hay leyes en trámite para castigar específicamente los deepfakes sexuales. Ante un caso, activad el protocolo del centro."]
    ],
    tec: [
      ["Al vídeo fals no troben les pistes de la imatge.|En el vídeo falso no encuentran las pistas de la imagen.", "Al fotograma, la zona tàctil és la vora de la cara; les altres pistes són textos que es poden tocar. La llum de la finestra, que no quadra amb la de la cara, i la font («m'ho ha passat un cosí») són pistes extra per comentar a classe.|En el fotograma, la zona táctil es el borde de la cara; las otras pistas son textos que se pueden tocar. La luz de la ventana, que no cuadra con la de la cara, y la fuente («me lo ha pasado un primo») son pistas extra para comentar en clase."],
      ["La conversa del grup s'acaba de seguida.|La conversación del grupo termina enseguida.", "És normal: segons el que triïn, té finals diferents. Poden tornar a obrir el pas per provar l'altre camí.|Es normal: según lo que elijan, tiene finales distintos. Pueden volver a abrir el paso para probar el otro camino."]
    ],
    seg: ["Si durant la sessió surt un cas real (un muntatge d'algú de l'aula o del centre), atureu l'activitat, no se n'ensenya res i s'activa el protocol del centre. Telèfons: 017 (ciberseguretat) i 116 111 (infància i adolescència).|Si durante la sesión sale un caso real (un montaje de alguien del aula o del centro), parad la actividad, no se enseña nada y se activa el protocolo del centro. Teléfonos: 017 (ciberseguridad) y 116 111 (infancia y adolescencia).", "Cap exemple amb persones reals: tots els personatges de l'app són inventats.|Ningún ejemplo con personas reales: todos los personajes de la app son inventados."],
    extra: [
      "Tutoria: preparar una xerrada per a les famílies sobre les estafes amb veus clonades i la paraula clau.|Tutoría: preparar una charla para las familias sobre las estafas con voces clonadas y la palabra clave.",
      "Llengua: analitzar les estratègies de persuasió dels missatges falsos (pressa, autoritat, emoció) i reescriure'ls com a avisos.|Lengua: analizar las estrategias de persuasión de los mensajes falsos (prisa, autoridad, emoción) y reescribirlos como avisos."
    ],
    trans: ["Sessió i4-3: drets d'autor, llicències i autoria. Unitat 7: desinformació i la llei europea d'IA.|Sesión i4-3: derechos de autor, licencias y autoría. Unidad 7: desinformación y la ley europea de IA."],
    slides: [
      { id: 's1', k: 'portada', t: 'Deepfakes i veus clonades|Deepfakes y voces clonadas', x: 'Imatge, veu i vídeo generats|Imagen, voz y vídeo generados', nota: "Sessió 2 de la unitat 4.|Sesión 2 de la unidad 4." },
      { id: 's2', k: 'pregunta', t: 'És de veritat?|¿Es de verdad?', x: "Un vídeo del director i una trucada amb la veu d'un net.|Un vídeo del director y una llamada con la voz de un nieto.", nota: "Sense casos reals de l'aula.|Sin casos reales del aula." },
      { id: 's3', k: 'anim', t: 'Tipus de deepfakes|Tipos de deepfakes', anim: 'i42what', x: "Cara, llavis, veu o escena inventada.|Cara, labios, voz o escena inventada.", nota: "Avui es poden fer amb un mòbil.|Hoy se pueden hacer con un móvil." },
      { id: 's4', k: 'anim', t: 'Veus clonades|Voces clonadas', anim: 'i42voice', x: "Pressa + secret + diners = 🚩|Prisa + secreto + dinero = 🚩", nota: "Penja i truca; paraula clau.|Cuelga y llama; palabra clave." },
      { id: 's5', k: 'anim', t: 'Verificar|Verificar', anim: 'i42verify', x: "Atura't, qui ho publica, altres fonts, l'original.|Detente, quién lo publica, otras fuentes, el original.", nota: "Les pistes visuals cada vegada fallen més.|Las pistas visuales fallan cada vez más." },
      { id: 's6', k: 'anim', t: 'Etiquetes, marques i llei|Etiquetas, marcas y ley', anim: 'i42label', x: "UE, des del 2-8-2026: cal etiquetar els deepfakes.|UE, desde el 2-8-2026: hay que etiquetar los deepfakes.", nota: "Sense etiqueta no vol dir real.|Sin etiqueta no quiere decir real." },
      { id: 's7', k: 'anim', t: 'Consentiment|Consentimiento', anim: 'i42consent', x: "Persones reals: mai sense permís.|Personas reales: nunca sin permiso.", nota: "Recorda els telèfons 017 i 116 111.|Recuerda los teléfonos 017 y 116 111." },
      { id: 's8', k: 'activitat', t: 'La trucada sospitosa|La llamada sospechosa', timer: 8, punts: ["Una «veu» llegeix la targeta.|Una «voz» lee la tarjeta.", "No donis dades; paraula clau.|No des datos; palabra clave.", "Penja i torna a trucar.|Cuelga y vuelve a llamar."], nota: "Targetes «Trucades sospitoses».|Tarjetas «Llamadas sospechosas»." },
      { id: 's9', k: 'pregunta', t: 'Una bona paraula clau?|¿Una buena palabra clave?', x: "Que no surti a les xarxes ni es pugui endevinar.|Que no salga en las redes ni se pueda adivinar.", nota: "Que ho pactin a casa (imprimible 2).|Que lo pacten en casa (imprimible 2)." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 27, punts: ["El vídeo fals del director.|El vídeo falso del director.", "La conversa del deepfake «de broma».|La conversación del deepfake «de broma».", "El cartell de la campanya.|El cartel de la campaña."], nota: "Fes la pausa activa amb tothom.|Haz la pausa activa con todo el mundo." },
      { id: 's11', k: 'repte', t: 'El vídeo del director|El vídeo del director', punts: ["Compte, imatge, àudio i text.|Cuenta, imagen, audio y texto.", "Les 4 pistes: compte, cara, àudio i pressa.|Las 4 pistas: cuenta, cara, audio y prisa."], nota: "La prova de veritat és a la web de l'institut.|La prueba de verdad está en la web del instituto." },
      { id: 's12', k: 'repte', t: 'Un deepfake «de broma»?|¿Un deepfake «de broma»?', punts: ["Què respons a l'Àlex?|¿Qué respondes a Álex?", "Hi ha alternatives que no fan mal.|Hay alternativas que no hacen daño."], nota: "Debat breu després del pas.|Debate breve después del paso." },
      { id: 's13', k: 'concepte', t: 'Si circula un muntatge|Si circula un montaje', punts: ["No el reenviïs.|No lo reenvíes.", "Guarda'n proves.|Guarda pruebas.", "Adult de confiança i denúncia.|Adulto de confianza y denuncia."], nota: "017 (INCIBE) i 116 111 (ANAR).|017 (INCIBE) y 116 111 (ANAR)." },
      { id: 's14', k: 'concepte', t: 'El protocol de la classe|El protocolo de la clase', punts: ["Vídeo: atura't, verifica, no reenviïs.|Vídeo: detente, verifica, no reenvíes.", "Trucada: penja, truca, paraula clau.|Llamada: cuelga, llama, palabra clave.", "Deepfake d'algú: proves, adult, denúncia.|Deepfake de alguien: pruebas, adulto, denuncia."], nota: "Feu-lo entre tots i pengeu-lo.|Hacedlo entre todos y colgadlo." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ["Què és un deepfake i una veu clonada.|Qué es un deepfake y una voz clonada.", "Verificar fora del vídeo.|Verificar fuera del vídeo.", "Persones reals: mai sense permís.|Personas reales: nunca sin permiso."], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Què fas amb una trucada urgent?|¿Qué haces con una llamada urgente?", "Dues maneres de verificar un vídeo.|Dos maneras de verificar un vídeo."], nota: "Respostes en un paper.|Respuestas en un papel." }
    ],
    print: [
      { id: 'p1', t: 'Trucades sospitoses|Llamadas sospechosas', k: 'targetes',
        intro: "Retalleu-les. Qui fa de «veu» llegeix la targeta; la segona part diu què passa quan es torna a trucar al número de sempre.|Recortadlas. Quien hace de «voz» lee la tarjeta; la segunda parte dice qué pasa cuando se vuelve a llamar al número de siempre.",
        items: [{ t: "«Avi, envia'm diners ara!» · El net és a classe 📞|«¡Abuelo, mándame dinero ya!» · El nieto está en clase 📞", n: 2 }, { t: "«Dona'm el codi de l'SMS» · La tieta no ha enviat res 🔐|«Dame el código del SMS» · La tía no ha enviado nada 🔐", n: 2 },
          { t: "«He perdut el mòbil, fes-me un bizum» · La germana és a casa 💸|«He perdido el móvil, hazme un bizum» · La hermana está en casa 💸", n: 2 }, { t: "«Soc del banc: digues-me la clau» · El banc no truca mai així 🏦|«Soy del banco: dime la clave» · El banco nunca llama así 🏦", n: 2 },
          { t: "«No ho diguis a ningú, és un secret» · Senyal d'estafa 🤫|«No se lo digas a nadie, es un secreto» · Señal de estafa 🤫", n: 2 }, { t: "«Sóc jo, l'entrenador: canvi d'horari» · Era de veritat ✅|«Soy yo, el entrenador: cambio de horario» · Era de verdad ✅", n: 2 }] },
      { id: 'p2', t: 'El pla de la família|El plan de la familia', k: 'fitxa',
        intro: "Per fer a casa amb la família. No escriviu la paraula clau en aquest full!|Para hacer en casa con la familia. ¡No escribáis la palabra clave en esta hoja!",
        items: [
          { q: 'Com triarem la paraula clau (sense escriure-la aquí)?|¿Cómo elegiremos la palabra clave (sin escribirla aquí)?', sol: "Una paraula que no surti mai a les xarxes ni es pugui endevinar.|Una palabra que no salga nunca en las redes ni se pueda adivinar." },
          { q: 'A quin número trucarem sempre per comprovar una petició urgent?|¿A qué número llamaremos siempre para comprobar una petición urgente?', sol: "Al número de sempre, guardat a l'agenda.|Al número de siempre, guardado en la agenda." },
          { q: 'Què no donarem mai per telèfon o per missatge?|¿Qué no daremos nunca por teléfono o por mensaje?', sol: "Codis per SMS, contrasenyes, dades del banc.|Códigos por SMS, contraseñas, datos del banco." },
          { q: 'A qui demanarem ajuda si passa alguna cosa?|¿A quién pediremos ayuda si pasa algo?', big: true, sol: "Un adult de confiança, el 017 (ciberseguretat) i, si hi ha perill, el 112.|Un adulto de confianza, el 017 (ciberseguridad) y, si hay peligro, el 112." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Drets d'autor, llicències i autoria ---------- */
  'i4-3': {
    intro: "L'alumnat aprèn que tota obra té drets d'autor des que es crea, com funcionen les llicències Creative Commons (BY, SA, NC, ND i CC0) i com s'escriu un crèdit correcte. Debat qui és l'autor d'una imatge generada amb IA (en molts llocs, sense autoria humana no hi ha drets; la part creativa humana, sí) i l'entrenament amb obres d'artistes (judicis oberts i el dret de dir que no a la UE). Caça mites sobre drets d'autor en un xat simulat, escriu el prompt d'una il·lustració original amb el seu crèdit i tria la llicència de les seves obres.|El alumnado aprende que toda obra tiene derechos de autor desde que se crea, cómo funcionan las licencias Creative Commons (BY, SA, NC, ND y CC0) y cómo se escribe un crédito correcto. Debate quién es el autor de una imagen generada con IA (en muchos sitios, sin autoría humana no hay derechos; la parte creativa humana, sí) y el entrenamiento con obras de artistas (juicios abiertos y el derecho a decir que no en la UE). Caza mitos sobre derechos de autor en un chat simulado, escribe el prompt de una ilustración original con su crédito y elige la licencia de sus obras.",
    claus: [
      "Drets d'autor: neixen amb l'obra, sense registre; a la UE duren tota la vida de l'autor/a i 70 anys més. A internet no vol dir lliure.|Derechos de autor: nacen con la obra, sin registro; en la UE duran toda la vida del autor/a y 70 años más. En internet no quiere decir libre.",
      "Creative Commons: BY (cita), SA (comparteix igual), NC (no comercial), ND (sense derivades) i CC0 (domini públic).|Creative Commons: BY (cita), SA (comparte igual), NC (no comercial), ND (sin derivadas) y CC0 (dominio público).",
      "Imatges generades: en molts llocs, el que fa sola una màquina no té drets; la contribució creativa humana, sí. Les condicions de l'app també compten.|Imágenes generadas: en muchos sitios, lo que hace sola una máquina no tiene derechos; la contribución creativa humana, sí. Las condiciones de la app también cuentan.",
      "Transparència: dir què ha fet la IA i què has fet tu, respectar llicències i no esborrar marques.|Transparencia: decir qué ha hecho la IA y qué has hecho tú, respetar licencias y no borrar marcas."
    ],
    prev: ["Sessions i4-1 i i4-2: imatges generades, estils d'artistes i etiquetes.|Sesiones i4-1 e i4-2: imágenes generadas, estilos de artistas y etiquetas."],
    obj: [
      "L'alumne/a explica què són els drets d'autor i que neixen amb l'obra.|El alumno/a explica qué son los derechos de autor y que nacen con la obra.",
      "L'alumne/a interpreta llicències Creative Commons i escriu crèdits correctes.|El alumno/a interpreta licencias Creative Commons y escribe créditos correctos.",
      "L'alumne/a argumenta el debat sobre l'autoria de les imatges generades i l'entrenament amb obres d'altres.|El alumno/a argumenta el debate sobre la autoría de las imágenes generadas y el entrenamiento con obras de otros.",
      "L'alumne/a declara l'ús de la IA i tria una llicència per a les seves obres.|El alumno/a declara el uso de la IA y elige una licencia para sus obras."
    ],
    comp: [
      "Competència digital (CD2, CD3): drets d'autor i llicències dels continguts|Competencia digital (CD2, CD3): derechos de autor y licencias de los contenidos",
      "Competència en consciència i expressions culturals (CCEC2): respecte per la creació|Competencia en conciencia y expresiones culturales (CCEC2): respeto por la creación",
      "Competència ciutadana (CC1): drets, lleis i debat democràtic|Competencia ciudadana (CC1): derechos, leyes y debate democrático"
    ],
    vocab: [
      ["Drets d'autor|Derechos de autor", "Drets que té qui crea una obra per decidir com es copia, es comparteix o es transforma.|Derechos que tiene quien crea una obra para decidir cómo se copia, se comparte o se transforma."],
      ["Llicència|Licencia", "Permís que dona l'autor/a perquè altres facin servir l'obra amb unes condicions.|Permiso que da el autor/a para que otros usen la obra con unas condiciones."],
      ["Creative Commons|Creative Commons", "Família de llicències (BY, SA, NC, ND) i l'eina CC0 per compartir obres.|Familia de licencias (BY, SA, NC, ND) y la herramienta CC0 para compartir obras."],
      ["Obra derivada|Obra derivada", "Obra nova feta a partir d'una altra (retallar, acolorir, adaptar).|Obra nueva hecha a partir de otra (recortar, colorear, adaptar)."],
      ["Domini públic|Dominio público", "Obres que es poden fer servir lliurement perquè no tenen drets o l'autor/a hi ha renunciat.|Obras que se pueden usar libremente porque no tienen derechos o el autor/a ha renunciado a ellos."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Drets d'autor, llicències i autoria»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Derechos de autor, licencias y autoría»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión"],
      imprimir: ["Les 8 imatges (imprimible 1): un per grup de tres|Las 8 imágenes (imprimible 1): uno por grupo de tres"],
      prep: ["Imprimir el full «Les 8 imatges».|Imprimir la hoja «Las 8 imágenes».", "Tenir a mà les normes del centre sobre l'ús d'imatges en treballs i a la web.|Tener a mano las normas del centro sobre el uso de imágenes en trabajos y en la web.", "Opcional: buscar abans un banc d'imatges amb llicències CC per ensenyar-lo.|Opcional: buscar antes un banco de imágenes con licencias CC para enseñarlo."]
    },
    plan: [
      { min: 5, t: 'Els personatges de la Lúa|Los personajes de Lúa', fase: 'inici',
        fa: "Explica el cas de la Lúa: algú ven samarretes «a l'estil Lúa» generades amb IA. Pregunta què en pensen i què podria fer.|Explica el caso de Lúa: alguien vende camisetas «al estilo Lúa» generadas con IA. Pregunta qué piensan y qué podría hacer.",
        diu: ["És just? Per què?|¿Es justo? ¿Por qué?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: 'Drets, llicències, autoria, entrenament i transparència|Derechos, licencias, autoría, entrenamiento y transparencia', fase: 'teoria',
        fa: "Amb les animacions: els drets d'autor, les llicències CC, qui és l'autor d'una imatge generada, el debat sobre l'entrenament i la fitxa de transparència.|Con las animaciones: los derechos de autor, las licencias CC, quién es el autor de una imagen generada, el debate sobre el entrenamiento y la ficha de transparencia.",
        diu: ["Si hi poso un prompt, la imatge és meva?|Si pongo un prompt, ¿la imagen es mía?", "Hauria de cobrar un artista si s'entrena una IA amb la seva obra?|¿Debería cobrar un artista si se entrena una IA con su obra?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'Detectius de llicències|Detectives de licencias', fase: 'desconnectat',
        fa: "En grups de tres, decideixen per a cada imatge del full si es pot fer servir en un treball, en un cartell d'una festa amb entrades i en samarretes per vendre, i escriuen el crèdit quan cal.|En grupos de tres, deciden para cada imagen de la hoja si se puede usar en un trabajo, en un cartel de una fiesta con entradas y en camisetas para vender, y escriben el crédito cuando hace falta.",
        diu: ["Quin cas us ha fet discutir?|¿Qué caso os ha hecho discutir?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3|Grupos de 3" },
      { min: 25, t: "A l'ordinador: llicències, mites i crèdits|En el ordenador: licencias, mitos y créditos", fase: 'ordinador',
        fa: "Fan la sessió de l'app: la CC BY, classificar usos, qui té els drets d'una imatge generada, protegir l'obra de la Lúa, el crèdit correcte, els mites de CopyBot, la il·lustració original i la llicència de les seves obres. Fes la pausa activa amb tothom.|Hacen la sesión de la app: la CC BY, clasificar usos, quién tiene los derechos de una imagen generada, proteger la obra de Lúa, el crédito correcto, los mitos de CopyBot, la ilustración original y la licencia de sus obras. Haz la pausa activa con todo el mundo.",
        diu: ["Quin mite de CopyBot us havíeu cregut alguna vegada?|¿Qué mito de CopyBot os habíais creído alguna vez?", "Quina llicència heu triat per a les vostres obres? Per què?|¿Qué licencia habéis elegido para vuestras obras? ¿Por qué?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (la llicència de les meves obres).|De «Recuerda» hasta el paso «Crea» (la licencia de mis obras).", org: "Individual|Individual" },
      { min: 8, t: 'Tancament: el debat obert|Cierre: el debate abierto', fase: 'tancament',
        fa: "Debat breu: com hauria de ser una llei justa per als artistes i per a qui crea amb IA? Recull 3 idees. Tiquet de sortida i com s'han sentit.|Debate breve: ¿cómo debería ser una ley justa para los artistas y para quien crea con IA? Recoge 3 ideas. Tique de salida y cómo se han sentido.",
        diu: ["Què proposaríeu vosaltres?|¿Qué propondríais vosotros?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Pensa que si és a internet, es pot fer servir.|Piensa que si está en internet, se puede usar.", "Tota obra té drets des que es crea; busca la llicència o fes servir bancs d'imatges amb CC.|Toda obra tiene derechos desde que se crea; busca la licencia o usa bancos de imágenes con CC."],
      ["Creu que si canvia una part de la imatge ja és seva.|Cree que si cambia una parte de la imagen ya es suya.", "No hi ha cap percentatge màgic: és una obra derivada i cal permís o una llicència que ho permeti.|No hay ningún porcentaje mágico: es una obra derivada y hace falta permiso o una licencia que lo permita."],
      ["Confon citar amb tenir permís per a tot.|Confunde citar con tener permiso para todo.", "Citar és obligatori amb BY, però NC i ND limiten què pots fer.|Citar es obligatorio con BY, pero NC y ND limitan lo que puedes hacer."],
      ["Diu que les imatges de la IA «són de la IA».|Dice que las imágenes de la IA «son de la IA».", "Les màquines no són autores: es debat si hi ha drets i de qui; les condicions de l'app diuen com es poden fer servir.|Las máquinas no son autoras: se debate si hay derechos y de quién; las condiciones de la app dicen cómo se pueden usar."]
    ],
    diff: {
      mes: "Nivell PRO: la BY-NC-SA i les samarretes, el crèdit d'una obra derivada amb SA, els 3 mites de CopyBot i un prompt amb 5 peces. Recerca: quins casos judicials sobre IA i drets d'autor hi ha oberts ara mateix?|Nivel PRO: la BY-NC-SA y las camisetas, el crédito de una obra derivada con SA, los 3 mitos de CopyBot y un prompt con 5 piezas. Investigación: ¿qué casos judiciales sobre IA y derechos de autor hay abiertos ahora mismo?",
      menys: "Tenir a la pissarra què vol dir cada lletra (BY, SA, NC, ND, CC0) amb un dibuix. Al full de les 8 imatges, fer-ne només 4.|Tener en la pizarra qué quiere decir cada letra (BY, SA, NC, ND, CC0) con un dibujo. En la hoja de las 8 imágenes, hacer solo 4."
    },
    aval: {
      ticket: ["Què vol dir una llicència CC BY-NC?|¿Qué quiere decir una licencia CC BY-NC?", "Escriu el crèdit d'una foto amb llicència CC BY.|Escribe el crédito de una foto con licencia CC BY."],
      rubric: [
        ["Drets d'autor|Derechos de autor", "Sap que neixen amb l'obra i que internet no vol dir lliure.|Sabe que nacen con la obra y que internet no quiere decir libre.", "Creu que tot el que és a internet és lliure.|Cree que todo lo que está en internet es libre."],
        ["Llicències|Licencias", "Interpreta BY, SA, NC, ND i CC0 en casos concrets.|Interpreta BY, SA, NC, ND y CC0 en casos concretos.", "Les confon.|Las confunde."],
        ["Crèdits|Créditos", "Escriu títol, autor/a, llicència i enllaç.|Escribe título, autor/a, licencia y enlace.", "Escriu «d'internet».|Escribe «de internet»."],
        ["Debat sobre la IA|Debate sobre la IA", "Argumenta l'autoria i l'entrenament amb matisos.|Argumenta la autoría y el entrenamiento con matices.", "Respon «és de la IA» o «és meu» sense raonar.|Responde «es de la IA» o «es mío» sin razonar."]
      ]
    },
    casa: "A casa, mireu junts on surt la llicència d'una foto o d'una cançó que us agradi (a la web de l'autor/a o del banc d'imatges). Expliqueu a la família què vol dir cada lletra de les Creative Commons.|En casa, mirad juntos dónde aparece la licencia de una foto o de una canción que os guste (en la web del autor/a o del banco de imágenes). Explicad a la familia qué quiere decir cada letra de las Creative Commons.",
    faq: [
      ["Qui té els drets d'una imatge generada amb IA?|¿Quién tiene los derechos de una imagen generada con IA?", "Es debat i depèn del país. Als Estats Units, el Tribunal d'Apel·lacions de Washington DC va confirmar el 2025 que una obra creada només per una IA no té drets d'autor (cas Thaler contra Perlmutter), i el Tribunal Suprem en va denegar la revisió el 2 de març de 2026. La contribució creativa humana sí que pot estar protegida. A la UE, la protecció també es basa en la creació intel·lectual d'una persona.|Se debate y depende del país. En Estados Unidos, el Tribunal de Apelaciones de Washington DC confirmó en 2025 que una obra creada solo por una IA no tiene derechos de autor (caso Thaler contra Perlmutter), y el Tribunal Supremo denegó su revisión el 2 de marzo de 2026. La contribución creativa humana sí puede estar protegida. En la UE, la protección también se basa en la creación intelectual de una persona."],
      ["Es pot entrenar una IA amb obres amb drets?|¿Se puede entrenar una IA con obras con derechos?", "És objecte de judicis. Per exemple, el novembre de 2025 un tribunal de Munic va considerar que guardar i reproduir lletres de cançons amb un model de llenguatge sense llicència vulnerava els drets d'autor, i un tribunal de Londres va concloure que un model d'imatges no contenia còpies de les fotos amb què s'havia entrenat. A la UE, els titulars de drets poden reservar-se l'ús de les obres per a la mineria de textos i dades, i els proveïdors de models d'ús general han de respectar-ho i publicar un resum de les dades d'entrenament (des de l'agost de 2025).|Es objeto de juicios. Por ejemplo, en noviembre de 2025 un tribunal de Múnich consideró que guardar y reproducir letras de canciones con un modelo de lenguaje sin licencia vulneraba los derechos de autor, y un tribunal de Londres concluyó que un modelo de imágenes no contenía copias de las fotos con las que se había entrenado. En la UE, los titulares de derechos pueden reservarse el uso de sus obras para la minería de textos y datos, y los proveedores de modelos de uso general tienen que respetarlo y publicar un resumen de los datos de entrenamiento (desde agosto de 2025)."],
      ["Què és exactament CC0?|¿Qué es exactamente CC0?", "Una eina de Creative Commons perquè l'autor/a renunciï als seus drets tant com permeti la llei: l'obra queda pràcticament com de domini públic.|Una herramienta de Creative Commons para que el autor/a renuncie a sus derechos tanto como permita la ley: la obra queda prácticamente como de dominio público."]
    ],
    tec: [
      ["El xat de CopyBot no es tanca.|El chat de CopyBot no se cierra.", "Cal arribar al final i marcar almenys 2 mites (3 amb PRO). Si marquen la frase certa de CC0, el xat ho explica.|Hay que llegar al final y marcar al menos 2 mitos (3 con PRO). Si marcan la frase cierta de CC0, el chat lo explica."],
      ["Volen ensenyar la llicència triada.|Quieren enseñar la licencia elegida.", "La tria es desa al perfil; per a una exposició, que l'escriguin al costat de la signatura dels seus dibuixos.|La elección se guarda en el perfil; para una exposición, que la escriban junto a la firma de sus dibujos."]
    ],
    seg: ["Si a l'aula es pengen obres de l'alumnat a la web del centre, demaneu els permisos que calguin i deixeu que cada alumne/a triï la llicència.|Si en el aula se cuelgan obras del alumnado en la web del centro, pedid los permisos necesarios y dejad que cada alumno/a elija la licencia."],
    extra: [
      "Visual i plàstica: muntar una exposició d'obres de la classe, cadascuna amb la seva llicència i el seu crèdit.|Visual y plástica: montar una exposición de obras de la clase, cada una con su licencia y su crédito.",
      "Ciutadania: debat formal (a favor i en contra) sobre si les empreses han de pagar els artistes per entrenar models.|Ciudadanía: debate formal (a favor y en contra) sobre si las empresas deben pagar a los artistas por entrenar modelos."
    ],
    trans: ["Sessió i4-4: el projecte del còmic amb la fitxa de transparència. Unitat 7: IA i societat.|Sesión i4-4: el proyecto del cómic con la ficha de transparencia. Unidad 7: IA y sociedad."],
    slides: [
      { id: 's1', k: 'portada', t: "Drets d'autor, llicències i autoria|Derechos de autor, licencias y autoría", x: 'Imatge, veu i vídeo generats|Imagen, voz y vídeo generados', nota: "Sessió 3 de la unitat 4.|Sesión 3 de la unidad 4." },
      { id: 's2', k: 'pregunta', t: "Samarretes «a l'estil Lúa»?|¿Camisetas «al estilo Lúa»?", x: "Algú ven imatges generades que copien els personatges d'una dibuixant.|Alguien vende imágenes generadas que copian los personajes de una dibujante.", nota: "Recull opinions sense jutjar.|Recoge opiniones sin juzgar." },
      { id: 's3', k: 'anim', t: "Drets d'autor|Derechos de autor", anim: 'i43rights', x: "Neixen amb l'obra; a la UE, vida + 70 anys.|Nacen con la obra; en la UE, vida + 70 años.", nota: "A internet no vol dir lliure.|En internet no quiere decir libre." },
      { id: 's4', k: 'anim', t: 'Creative Commons|Creative Commons', anim: 'i43cc', x: "BY, SA, NC, ND i CC0.|BY, SA, NC, ND y CC0.", nota: "Feu els gestos de la pausa activa.|Haced los gestos de la pausa activa." },
      { id: 's5', k: 'anim', t: "Qui és l'autor?|¿Quién es el autor?", anim: 'i43who', x: "Depèn de quanta feina creativa hi posa una persona.|Depende de cuánto trabajo creativo pone una persona.", nota: "Als EUA, sense autoria humana no hi ha drets (2025-2026).|En EE. UU., sin autoría humana no hay derechos (2025-2026)." },
      { id: 's6', k: 'anim', t: "Entrenar amb obres d'altres|Entrenar con obras de otros", anim: 'i43train', x: "Judicis oberts; a la UE es pot dir que no.|Juicios abiertos; en la UE se puede decir que no.", nota: "Sentències diferents a cada país.|Sentencias distintas en cada país." },
      { id: 's7', k: 'anim', t: 'La fitxa de transparència|La ficha de transparencia', anim: 'i43declare', x: "Eina, què ha fet la IA, què has fet tu, fonts i etiqueta.|Herramienta, qué ha hecho la IA, qué has hecho tú, fuentes y etiqueta.", nota: "La faran al projecte.|La harán en el proyecto." },
      { id: 's8', k: 'activitat', t: 'Detectius de llicències|Detectives de licencias', timer: 10, punts: ["Llegiu la llicència de cada imatge.|Leed la licencia de cada imagen.", "Treball, festa amb entrades, samarretes.|Trabajo, fiesta con entradas, camisetas.", "Escriviu el crèdit.|Escribid el crédito."], nota: "Full «Les 8 imatges».|Hoja «Las 8 imágenes»." },
      { id: 's9', k: 'pregunta', t: 'Quin cas era dubtós?|¿Qué caso era dudoso?', x: "Per exemple: una il·lustració amb © en un treball.|Por ejemplo: una ilustración con © en un trabajo.", nota: "Una cita breu amb finalitat educativa pot ser possible; en cas de dubte, millor una obra amb llicència.|Una cita breve con finalidad educativa puede ser posible; en caso de duda, mejor una obra con licencia." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 25, punts: ["Llicències i usos.|Licencias y usos.", "Els mites de CopyBot.|Los mitos de CopyBot.", "La il·lustració original i la teva llicència.|La ilustración original y tu licencia."], nota: "Fes la pausa activa amb tothom.|Haz la pausa activa con todo el mundo." },
      { id: 's11', k: 'repte', t: 'El crèdit correcte|El crédito correcto', punts: ["Títol, autor/a, llicència i enllaç.|Título, autor/a, licencia y enlace.", "PRO: obra derivada amb SA.|PRO: obra derivada con SA."], nota: "«Adaptada per…» si l'has modificada.|«Adaptada por…» si la has modificado." },
      { id: 's12', k: 'repte', t: 'Els mites de CopyBot|Los mitos de CopyBot', punts: ["«Tot el que és a internet és lliure.»|«Todo lo que está en internet es libre.»", "«Si canvies un 30 %, és teu.»|«Si cambias un 30 %, es tuyo.»", "«Si cites, pots vendre.»|«Si citas, puedes vender.»"], nota: "Tots tres, falsos.|Los tres, falsos." },
      { id: 's13', k: 'concepte', t: 'La teva llicència|Tu licencia', punts: ["Vols que et citin?|¿Quieres que te citen?", "Ús comercial? Modificacions?|¿Uso comercial? ¿Modificaciones?", "Entrenar IA amb la teva obra?|¿Entrenar IA con tu obra?"], nota: "Es desa al perfil.|Se guarda en el perfil." },
      { id: 's14', k: 'pregunta', t: 'Una llei justa?|¿Una ley justa?', x: "Per als artistes i per a qui crea amb IA.|Para los artistas y para quien crea con IA.", nota: "Recull 3 idees de la classe.|Recoge 3 ideas de la clase." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ["Tota obra té drets des que es crea.|Toda obra tiene derechos desde que se crea.", "Les llicències CC diuen què pots fer.|Las licencias CC dicen qué puedes hacer.", "Amb IA: declara què has fet tu.|Con IA: declara qué has hecho tú."], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Què vol dir CC BY-NC?|¿Qué quiere decir CC BY-NC?", "El crèdit d'una foto CC BY.|El crédito de una foto CC BY."], nota: "Respostes en un paper.|Respuestas en un papel." }
    ],
    print: [
      { id: 'p1', t: 'Les 8 imatges|Las 8 imágenes', k: 'fitxa',
        intro: "Un per grup de tres. Per a cada imatge, decidiu si la podeu fer servir: A) en un treball de classe, B) al cartell d'una festa amb entrades de pagament, C) en samarretes per vendre. Escriviu el crèdit quan calgui. (Obres i autors inventats.)|Uno por grupo de tres. Para cada imagen, decidid si la podéis usar: A) en un trabajo de clase, B) en el cartel de una fiesta con entradas de pago, C) en camisetas para vender. Escribid el crédito cuando haga falta. (Obras y autores inventados.)",
        items: [
          { q: "«Riu al capvespre», foto de Marta Vila · CC BY 4.0|«Río al atardecer», foto de Marta Vila · CC BY 4.0", sol: "A, B i C: sí, citant-la (títol, autora, llicència i enllaç).|A, B y C: sí, citándola (título, autora, licencia y enlace)." },
          { q: "«Gat a la finestra», foto de Jordi Pons · CC BY-NC 4.0|«Gato en la ventana», foto de Jordi Pons · CC BY-NC 4.0", sol: "A: sí, citant-la. B i C: no, és ús comercial (cal permís).|A: sí, citándola. B y C: no, es uso comercial (hace falta permiso)." },
          { q: "«Mapa del barri», d'un ajuntament inventat · CC BY-SA 4.0|«Mapa del barrio», de un ayuntamiento inventado · CC BY-SA 4.0", sol: "A, B i C: sí, citant-lo; si el modifiqueu, compartiu el resultat amb la mateixa llicència.|A, B y C: sí, citándolo; si lo modificáis, compartid el resultado con la misma licencia." },
          { q: "«Robot de colors», il·lustració de Laia Riera · CC BY-ND 4.0|«Robot de colores», ilustración de Laia Riera · CC BY-ND 4.0", sol: "A, B i C: sí, citant-la, però sense modificar-la (ni retallar-la ni acolorir-la).|A, B y C: sí, citándola, pero sin modificarla (ni recortarla ni colorearla)." },
          { q: "«Muntanya nevada», foto · CC0|«Montaña nevada», foto · CC0", sol: "A, B i C: sí, lliurement (citar-la és un bon detall).|A, B y C: sí, libremente (citarla es un buen detalle)." },
          { q: "Una vinyeta d'un còmic famós · Tots els drets reservats (©)|Una viñeta de un cómic famoso · Todos los derechos reservados (©)", sol: "A: només com a cita breu per analitzar-la, citant l'autor/a (pregunteu al docent). B i C: no.|A: solo como cita breve para analizarla, citando al autor/a (preguntad al docente). B y C: no." },
          { q: "Una imatge generada amb IA per una companya, que us ha donat permís|Una imagen generada con IA por una compañera, que os ha dado permiso", sol: "A: sí, amb el crèdit i l'etiqueta d'IA. B i C: depèn de les condicions de l'app i del que digui ella.|A: sí, con el crédito y la etiqueta de IA. B y C: depende de las condiciones de la app y de lo que diga ella." },
          { q: "Una foto trobada al cercador, sense cap llicència|Una foto encontrada en el buscador, sin ninguna licencia", sol: "A, B i C: no (tots els drets reservats). Busqueu-ne una amb llicència o feu-la vosaltres.|A, B y C: no (todos los derechos reservados). Buscad una con licencia o hacedla vosotros." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: crea amb autoria declarada ---------- */
  'i4-4': {
    intro: "Projecte de la unitat 4. En grups de tres, l'alumnat crea un còmic de 4 vinyetes per a una campanya de l'institut («Abans de compartir, pensa»): escriu el guió en paper, defineix la fitxa del personatge perquè sigui coherent a totes les vinyetes, genera les imatges amb el generador simulat (prompts complets, iteració i revisió d'errors, estereotips, marques i persones reals), escriu els textos i en declara l'autoria amb una etiqueta visible i una fitxa de transparència. Acaba amb una galeria on els altres grups revisen el missatge i la fitxa.|Proyecto de la unidad 4. En grupos de tres, el alumnado crea un cómic de 4 viñetas para una campaña del instituto («Antes de compartir, piensa»): escribe el guion en papel, define la ficha del personaje para que sea coherente en todas las viñetas, genera las imágenes con el generador simulado (prompts completos, iteración y revisión de errores, estereotipos, marcas y personas reales), escribe los textos y declara su autoría con una etiqueta visible y una ficha de transparencia. Termina con una galería donde los otros grupos revisan el mensaje y la ficha.",
    claus: [
      "La idea, la història i els textos són de l'equip; la IA fa esborranys d'imatge.|La idea, la historia y los textos son del equipo; la IA hace borradores de imagen.",
      "Coherència: la mateixa descripció del personatge (i el mateix estil) a cada prompt; si l'eina ho permet, llavor o imatge de referència.|Coherencia: la misma descripción del personaje (y el mismo estilo) en cada prompt; si la herramienta lo permite, semilla o imagen de referencia.",
      "Revisió: errors, estereotips, marques i persones reals; els textos, escrits per l'equip.|Revisión: errores, estereotipos, marcas y personas reales; los textos, escritos por el equipo.",
      "Transparència: etiqueta visible i fitxa (autoria, eines, què ha fet la IA, què heu fet, fonts, llicència).|Transparencia: etiqueta visible y ficha (autoría, herramientas, qué ha hecho la IA, qué habéis hecho, fuentes, licencia)."
    ],
    prev: ["Sessions i4-1 a i4-3: generar imatges, deepfakes i drets d'autor.|Sesiones i4-1 a i4-3: generar imágenes, deepfakes y derechos de autor."],
    obj: [
      "L'alumne/a planifica una obra creativa (guió i fitxa del personatge) abans de generar.|El alumno/a planifica una obra creativa (guion y ficha del personaje) antes de generar.",
      "L'alumne/a escriu prompts coherents i els millora iterant.|El alumno/a escribe prompts coherentes y los mejora iterando.",
      "L'alumne/a revisa les imatges generades (errors, estereotips, persones reals, marques).|El alumno/a revisa las imágenes generadas (errores, estereotipos, personas reales, marcas).",
      "L'alumne/a declara l'autoria amb una etiqueta i una fitxa de transparència.|El alumno/a declara la autoría con una etiqueta y una ficha de transparencia."
    ],
    comp: [
      "Competència emprenedora (CE3): de la idea al producte creatiu|Competencia emprendedora (CE3): de la idea al producto creativo",
      "Competència digital (CD2, CD3): creació de continguts i drets|Competencia digital (CD2, CD3): creación de contenidos y derechos",
      "Competència en comunicació lingüística (CCL1): narrativa i guió|Competencia en comunicación lingüística (CCL1): narrativa y guion"
    ],
    vocab: [
      ["Guió (storyboard)|Guion (storyboard)", "Pla de l'obra vinyeta a vinyeta: què passa, què diuen i com es veu.|Plan de la obra viñeta a viñeta: qué pasa, qué dicen y cómo se ve."],
      ["Fitxa del personatge|Ficha del personaje", "Descripció fixa (edat, cabells, roba, colors) que es copia a tots els prompts.|Descripción fija (edad, pelo, ropa, colores) que se copia en todos los prompts."],
      ["Coherència visual|Coherencia visual", "Que el personatge i l'estil es mantinguin iguals a totes les imatges.|Que el personaje y el estilo se mantengan iguales en todas las imágenes."],
      ["Etiqueta visible|Etiqueta visible", "Text a l'obra que diu que s'hi ha fet servir IA.|Texto en la obra que dice que se ha usado IA."],
      ["Fitxa de transparència|Ficha de transparencia", "Document que explica com s'ha fet l'obra i qui ha fet cada part.|Documento que explica cómo se ha hecho la obra y quién ha hecho cada parte."]
    ],
    mat: {
      aula: ["Un ordinador per grup amb Numi Tech obert a la sessió del projecte|Un ordenador por grupo con Numi Tech abierto en la sesión del proyecto", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Fulls DIN A3, retoladors i, si es vol, una impressora per a la galeria|Hojas DIN A3, rotuladores y, si se quiere, una impresora para la galería"],
      imprimir: ["Guió de 4 vinyetes (imprimible 1): un per grup|Guion de 4 viñetas (imprimible 1): uno por grupo", "Fitxa de transparència (imprimible 2): una per grup|Ficha de transparencia (imprimible 2): una por grupo"],
      prep: ["Imprimir els dos fulls i preparar l'espai de la galeria.|Imprimir las dos hojas y preparar el espacio de la galería.", "Decidir el format final: còmic en paper (dibuixant les vinyetes a partir de les imatges simulades) o a la pantalla.|Decidir el formato final: cómic en papel (dibujando las viñetas a partir de las imágenes simuladas) o en la pantalla.", "Si el centre fa servir alguna eina real de generació, comprovar-ne l'edat mínima i la protecció de dades (opcional: tot es pot fer amb el simulador).|Si el centro usa alguna herramienta real de generación, comprobar su edad mínima y la protección de datos (opcional: todo se puede hacer con el simulador)."]
    },
    plan: [
      { min: 5, t: 'La campanya|La campaña', fase: 'inici',
        fa: "Presenta el projecte i la protagonista, la Kira. Pregunta quin missatge hauria de transmetre un bon còmic sobre compartir vídeos.|Presenta el proyecto y la protagonista, Kira. Pregunta qué mensaje debería transmitir un buen cómic sobre compartir vídeos.",
        diu: ["Què ha d'entendre qui llegeixi el vostre còmic?|¿Qué tiene que entender quien lea vuestro cómic?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 7, t: 'Pla, coherència, autoria i transparència|Plan, coherencia, autoría y transparencia', fase: 'teoria',
        fa: "Amb les animacions: del guió a les vinyetes, la fitxa del personatge, qui fa què i l'etiqueta i la fitxa.|Con las animaciones: del guion a las viñetas, la ficha del personaje, quién hace qué y la etiqueta y la ficha.",
        diu: ["Per què a cada vinyeta sortiria una Kira diferent?|¿Por qué en cada viñeta saldría una Kira distinta?"],
        slides: ['s3', 's4', 's5', 's6'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: 'El guió en paper|El guion en papel', fase: 'desconnectat',
        fa: "Els grups omplen el guió: missatge, fitxa del personatge i, per a cada vinyeta, què passa, què diuen i el prompt.|Los grupos rellenan el guion: mensaje, ficha del personaje y, para cada viñeta, qué pasa, qué dicen y el prompt.",
        diu: ["Qui escriu els textos dels globus?|¿Quién escribe los textos de los globos?"],
        slides: ['s7'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3|Grupos de 3" },
      { min: 22, t: "A l'ordinador: les vinyetes|En el ordenador: las viñetas", fase: 'ordinador',
        fa: "Fan la sessió de l'app: coherència del personatge, la vinyeta 1, qui fa què, la vinyeta 3 (copiant la fitxa), què fer amb marques reals i lletres inventades, la vinyeta final i la fitxa de transparència.|Hacen la sesión de la app: coherencia del personaje, la viñeta 1, quién hace qué, la viñeta 3 (copiando la ficha), qué hacer con marcas reales y letras inventadas, la viñeta final y la ficha de transparencia.",
        diu: ["La Kira és la mateixa a totes les vinyetes?|¿Kira es la misma en todas las viñetas?", "Què heu revisat abans de donar per bona una imatge?|¿Qué habéis revisado antes de dar por buena una imagen?"],
        slides: ['s8', 's9', 's10', 's11'], app: "Fins al pas «Crea» (la vinyeta final i la fitxa de transparència).|Hasta el paso «Crea» (la viñeta final y la ficha de transparencia).", org: "Grups de 3|Grupos de 3" },
      { min: 12, t: 'La galeria de la campanya|La galería de la campaña', fase: 'crea',
        fa: "Cada grup exposa el còmic amb l'etiqueta i la fitxa. La resta en visiten dos, comproven el missatge, la coherència i la fitxa, i deixen una nota. Voteu el missatge més clar i la fitxa més honesta.|Cada grupo expone el cómic con la etiqueta y la ficha. El resto visitan dos, comprueban el mensaje, la coherencia y la ficha, y dejan una nota. Votad el mensaje más claro y la ficha más honesta.",
        diu: ["La fitxa explica clarament què ha fet la IA?|¿La ficha explica claramente qué ha hecho la IA?"],
        slides: ['s12', 's13'], app: "El pas «La galeria de la campanya».|El paso «La galería de la campaña».", org: "Tota l'aula en rotació|Toda el aula en rotación" },
      { min: 6, t: 'Tancament de la unitat|Cierre de la unidad', fase: 'tancament',
        fa: "Repassa la unitat: generar imatges, deepfakes, drets i autoria declarada. Tiquet de sortida i com s'han sentit.|Repasa la unidad: generar imágenes, deepfakes, derechos y autoría declarada. Tique de salida y cómo se han sentido.",
        diu: ["Què és el més important quan creeu amb IA?|¿Qué es lo más importante cuando creáis con IA?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Comencen a generar sense guió.|Empiezan a generar sin guion.", "Primer el paper: missatge, fitxa del personatge i vinyetes. Generar sense pla dona imatges boniques però sense història.|Primero el papel: mensaje, ficha del personaje y viñetas. Generar sin plan da imágenes bonitas pero sin historia."],
      ["La protagonista canvia a cada vinyeta.|La protagonista cambia en cada viñeta.", "Copieu la fitxa del personatge exactament igual a tots els prompts.|Copiad la ficha del personaje exactamente igual en todos los prompts."],
      ["Deixen els textos inventats pel generador.|Dejan los textos inventados por el generador.", "Demaneu «sense text» i escriviu vosaltres els globus.|Pedid «sin texto» y escribid vosotros los globos."],
      ["La fitxa diu només «fet amb IA».|La ficha dice solo «hecho con IA».", "Ha de dir qui ha fet cada part, amb quines eines, fonts i llicència.|Tiene que decir quién ha hecho cada parte, con qué herramientas, fuentes y licencia."],
      ["Volen fer sortir companys o famosos al còmic.|Quieren sacar a compañeros o famosos en el cómic.", "Personatges inventats sempre: és el que hem après a la sessió dels deepfakes.|Personajes inventados siempre: es lo que hemos aprendido en la sesión de los deepfakes."]
    ],
    diff: {
      mes: "Nivell PRO: com mantenir el personatge amb llavor o imatge de referència i prompts de vinyeta amb 5 peces (també exemple). Fer una versió del còmic en un altre format (cartell o guió il·lustrat) i comparar-ne la fitxa.|Nivel PRO: cómo mantener el personaje con semilla o imagen de referencia y prompts de viñeta con 5 piezas (también ejemplo). Hacer una versión del cómic en otro formato (cartel o guion ilustrado) y comparar su ficha.",
      menys: "Donar el guió parcialment fet (les vinyetes 1 i 4) i usar els botons de peces a la vinyeta 1. Fitxa amb frases per completar.|Dar el guion parcialmente hecho (las viñetas 1 y 4) y usar los botones de piezas en la viñeta 1. Ficha con frases para completar."
    },
    aval: {
      ticket: ["Què heu fet vosaltres i què ha fet la IA al vostre còmic?|¿Qué habéis hecho vosotros y qué ha hecho la IA en vuestro cómic?", "Escriu l'etiqueta visible del vostre còmic.|Escribe la etiqueta visible de vuestro cómic."],
      rubric: [
        ["Guió|Guion", "Missatge clar i 4 vinyetes amb sentit.|Mensaje claro y 4 viñetas con sentido.", "Sense missatge o vinyetes inconnexes.|Sin mensaje o viñetas inconexas."],
        ["Prompts i coherència|Prompts y coherencia", "Prompts complets i el mateix personatge a totes les vinyetes.|Prompts completos y el mismo personaje en todas las viñetas.", "Prompts vagues; el personatge canvia.|Prompts vagos; el personaje cambia."],
        ["Revisió|Revisión", "Revisa errors, estereotips, marques i persones reals.|Revisa errores, estereotipos, marcas y personas reales.", "Accepta la primera imatge.|Acepta la primera imagen."],
        ["Transparència|Transparencia", "Etiqueta visible i fitxa completa.|Etiqueta visible y ficha completa.", "Sense etiqueta o fitxa incompleta.|Sin etiqueta o ficha incompleta."],
        ["Treball en equip|Trabajo en equipo", "Cada rol fa la seva part i se'n parla.|Cada rol hace su parte y se habla.", "Una sola persona ho fa tot.|Una sola persona lo hace todo."]
      ]
    },
    casa: "A casa, ensenyeu el còmic i la fitxa de transparència a la família. Pregunteu-los si han vist mai un vídeo que semblava real i no ho era, i expliqueu-los què fa la Kira.|En casa, enseñad el cómic y la ficha de transparencia a la familia. Preguntadles si han visto alguna vez un vídeo que parecía real y no lo era, y explicadles qué hace Kira.",
    faq: [
      ["És obligatori etiquetar un còmic fet amb IA?|¿Es obligatorio etiquetar un cómic hecho con IA?", "La llei europea obliga a etiquetar els deepfakes (continguts que semblen reals i poden confondre) i alguns textos d'interès públic. Un còmic de ficció evident no sempre ho necessita, però etiquetar-lo i fer-ne la fitxa és la bona pràctica que proposem, i moltes plataformes ho demanen.|La ley europea obliga a etiquetar los deepfakes (contenidos que parecen reales y pueden confundir) y algunos textos de interés público. Un cómic de ficción evidente no siempre lo necesita, pero etiquetarlo y hacer su ficha es la buena práctica que proponemos, y muchas plataformas lo piden."],
      ["Què són les credencials de contingut?|¿Qué son las credenciales de contenido?", "Un estàndard obert (C2PA) que afegeix a una imatge o un vídeo informació verificable sobre com s'ha creat i editat. Algunes càmeres, mòbils i generadors ja les fan servir, però moltes plataformes les esborren en pujar el fitxer: per això no són una prova definitiva.|Un estándar abierto (C2PA) que añade a una imagen o un vídeo información verificable sobre cómo se ha creado y editado. Algunas cámaras, móviles y generadores ya las usan, pero muchas plataformas las borran al subir el archivo: por eso no son una prueba definitiva."],
      ["Es poden fer servir eines reals de generació d'imatges?|¿Se pueden usar herramientas reales de generación de imágenes?", "Només si el centre ho decideix, amb eines que compleixin la protecció de dades i l'edat mínima, i sense pujar-hi fotos de l'alumnat. Aquesta sessió es pot fer sencera amb el generador simulat de l'app.|Solo si el centro lo decide, con herramientas que cumplan la protección de datos y la edad mínima, y sin subir fotos del alumnado. Esta sesión se puede hacer entera con el generador simulado de la app."]
    ],
    tec: [
      ["La imatge simulada no és exactament el que han escrit.|La imagen simulada no es exactamente lo que han escrito.", "El simulador té imatges fixes per a cada vinyeta que milloren segons les peces del prompt; per a la galeria, poden redibuixar-les en paper amb els seus detalls.|El simulador tiene imágenes fijas para cada viñeta que mejoran según las piezas del prompt; para la galería, pueden redibujarlas en papel con sus detalles."],
      ["La fitxa de transparència no es desa.|La ficha de transparencia no se guarda.", "Cal respondre les 6 preguntes; el botó «Desa la fitxa» s'activa al final. Completeu-la també en paper (imprimible 2).|Hay que responder las 6 preguntas; el botón «Guarda la ficha» se activa al final. Completadla también en papel (imprimible 2)."]
    ],
    seg: ["Cap persona real, cap company ni cap famós al còmic. Si es fa servir una eina real, sense fotos de l'alumnat.|Ninguna persona real, ningún compañero ni ningún famoso en el cómic. Si se usa una herramienta real, sin fotos del alumnado.", "A la galeria, respecte per la feina dels altres: les notes busquen millorar.|En la galería, respeto por el trabajo de los demás: las notas buscan mejorar."],
    extra: [
      "Llengua: escriure els diàlegs del còmic amb registres diferents (formal, col·loquial) i comparar l'efecte.|Lengua: escribir los diálogos del cómic con registros distintos (formal, coloquial) y comparar el efecto.",
      "Visual i plàstica: redibuixar a mà una vinyeta a partir de l'esborrany generat i comparar l'autoria de cadascuna.|Visual y plástica: redibujar a mano una viñeta a partir del borrador generado y comparar la autoría de cada una."
    ],
    trans: ["Unitat 5: crear programes amb IA (vibe coding). Unitat 8: una IA per al centre, amb la seva fitxa de riscos.|Unidad 5: crear programas con IA (vibe coding). Unidad 8: una IA para el centro, con su ficha de riesgos."],
    slides: [
      { id: 's1', k: 'portada', t: 'Projecte: crea amb autoria declarada|Proyecto: crea con autoría declarada', x: "Un còmic per a la campanya de l'institut|Un cómic para la campaña del instituto", nota: "Projecte final de la unitat 4.|Proyecto final de la unidad 4." },
      { id: 's2', k: 'pregunta', t: 'Abans de compartir, pensa|Antes de compartir, piensa', x: "Què ha d'entendre qui llegeixi el vostre còmic?|¿Qué tiene que entender quien lea vuestro cómic?", nota: "Presenta la Kira (inventada).|Presenta a Kira (inventada)." },
      { id: 's3', k: 'anim', t: 'Del guió a les vinyetes|Del guion a las viñetas', anim: 'i44board', x: "Idea → guió → imatges → retoc → fitxa.|Idea → guion → imágenes → retoque → ficha.", nota: "Primer el paper.|Primero el papel." },
      { id: 's4', k: 'anim', t: 'El mateix personatge|El mismo personaje', anim: 'i44consist', x: "Fitxa del personatge copiada a cada prompt.|Ficha del personaje copiada en cada prompt.", nota: "El model no recorda la vinyeta anterior.|El modelo no recuerda la viñeta anterior." },
      { id: 's5', k: 'anim', t: 'Qui fa què?|¿Quién hace qué?', anim: 'i44human', x: "L'equip decideix; la IA fa esborranys.|El equipo decide; la IA hace borradores.", nota: "Els textos, sempre de l'equip.|Los textos, siempre del equipo." },
      { id: 's6', k: 'anim', t: "L'etiqueta i la fitxa|La etiqueta y la ficha", anim: 'i44card', x: "Etiqueta visible i fitxa de transparència.|Etiqueta visible y ficha de transparencia.", nota: "És el que fan els creadors honestos.|Es lo que hacen los creadores honestos." },
      { id: 's7', k: 'activitat', t: 'El guió en paper|El guion en papel', timer: 8, punts: ["Missatge en una frase.|Mensaje en una frase.", "Fitxa del personatge.|Ficha del personaje.", "4 vinyetes: què passa, què diuen, prompt.|4 viñetas: qué pasa, qué dicen, prompt."], nota: "Full «Guió de 4 vinyetes».|Hoja «Guion de 4 viñetas»." },
      { id: 's8', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 22, punts: ["Vinyetes 1, 3 i 4.|Viñetas 1, 3 y 4.", "Revisió de cada imatge.|Revisión de cada imagen.", "La fitxa de transparència.|La ficha de transparencia."], nota: "Fes la pausa activa amb tothom.|Haz la pausa activa con todo el mundo." },
      { id: 's9', k: 'repte', t: 'Vinyeta 1|Viñeta 1', punts: ["Fitxa de la Kira al prompt.|Ficha de Kira en el prompt.", "Format, estil i límits.|Formato, estilo y límites."], nota: "Sense text: el globus el feu vosaltres.|Sin texto: el globo lo hacéis vosotros." },
      { id: 's10', k: 'repte', t: 'Vinyeta 3: coherència|Viñeta 3: coherencia', punts: ["Copia la fitxa de la Kira.|Copia la ficha de Kira.", "PRO: 5 peces, també exemple.|PRO: 5 piezas, también ejemplo."], nota: "Compareu-la amb la vinyeta 1.|Comparadla con la viñeta 1." },
      { id: 's11', k: 'concepte', t: 'Revisa abans de donar-la per bona|Revisa antes de darla por buena', punts: ["Errors (mans, lletres, objectes).|Errores (manos, letras, objetos).", "Estereotips.|Estereotipos.", "Marques i persones reals.|Marcas y personas reales."], nota: "Si cal, refeu el prompt.|Si hace falta, rehaced el prompt." },
      { id: 's12', k: 'activitat', t: 'La galeria de la campanya|La galería de la campaña', timer: 12, punts: ["Còmic, etiqueta i fitxa visibles.|Cómic, etiqueta y ficha visibles.", "Visiteu dos còmics.|Visitad dos cómics.", "Una cosa que agrada i una millora.|Una cosa que gusta y una mejora."], nota: "Notes adhesives per a cada grup.|Notas adhesivas para cada grupo." },
      { id: 's13', k: 'pregunta', t: 'Quina fitxa és més honesta?|¿Qué ficha es más honesta?', x: "La que diu més clarament qui ha fet cada part.|La que dice más claramente quién ha hecho cada parte.", nota: "Voteu el missatge més clar i la fitxa més honesta.|Votad el mensaje más claro y la ficha más honesta." },
      { id: 's14', k: 'concepte', t: 'Crear amb IA, amb cap|Crear con IA, con cabeza', punts: ["La idea és vostra.|La idea es vuestra.", "Persones reals: mai sense permís.|Personas reales: nunca sin permiso.", "Declara-ho sempre.|Declaralo siempre."], nota: "Connecta-ho amb la unitat 5 (vibe coding).|Conéctalo con la unidad 5 (vibe coding)." },
      { id: 's15', k: 'resum', t: 'Unitat 4: imatge, veu i vídeo generats|Unidad 4: imagen, voz y vídeo generados', punts: ["Del soroll a la imatge.|Del ruido a la imagen.", "Deepfakes: verificar i consentiment.|Deepfakes: verificar y consentimiento.", "Drets, llicències i autoria declarada.|Derechos, licencias y autoría declarada."], nota: "Repàs de la unitat.|Repaso de la unidad." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Què heu fet vosaltres i què la IA?|¿Qué habéis hecho vosotros y qué la IA?", "L'etiqueta del vostre còmic.|La etiqueta de vuestro cómic."], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'Guió de 4 vinyetes|Guion de 4 viñetas', k: 'fitxa',
        intro: "Un per grup. Ompliu-lo abans de generar cap imatge.|Uno por grupo. Rellenadlo antes de generar ninguna imagen.",
        items: [
          { q: 'El missatge del còmic en una frase:|El mensaje del cómic en una frase:', sol: "Per exemple: «Abans de compartir un vídeo sorprenent, comprova'l».|Por ejemplo: «Antes de compartir un vídeo sorprendente, compruébalo»." },
          { q: 'Fitxa del personatge (edat, cabells, roba, colors, estil):|Ficha del personaje (edad, pelo, ropa, colores, estilo):', sol: "Per exemple: «la Kira, 14 anys, cabells curts blaus, dessuadora groga; estil còmic de línia clara».|Por ejemplo: «Kira, 14 años, pelo corto azul, sudadera amarilla; estilo cómic de línea clara»." },
          { q: 'Vinyeta 1 i 2: què passa, què diuen i el prompt:|Viñeta 1 y 2: qué pasa, qué dicen y el prompt:', big: true, sol: "Per exemple: 1) rep el vídeo; 2) dubta: «I si és fals?».|Por ejemplo: 1) recibe el vídeo; 2) duda: «¿Y si es falso?»." },
          { q: 'Vinyeta 3 i 4: què passa, què diuen i el prompt:|Viñeta 3 y 4: qué pasa, qué dicen y el prompt:', big: true, sol: "Per exemple: 3) ho comprova a la web de l'institut; 4) avisa la classe i no el comparteix.|Por ejemplo: 3) lo comprueba en la web del instituto; 4) avisa a la clase y no lo comparte." }
        ] },
      { id: 'p2', t: 'Fitxa de transparència|Ficha de transparencia', k: 'fitxa',
        intro: "Una per grup. Es penja al costat del còmic a la galeria.|Una por grupo. Se cuelga al lado del cómic en la galería.",
        items: [
          { q: 'Títol del còmic i equip (noms de pila o nom de l\'equip):|Título del cómic y equipo (nombres de pila o nombre del equipo):', sol: "Per exemple: «Abans de compartir» · Equip Lupa.|Por ejemplo: «Antes de compartir» · Equipo Lupa." },
          { q: 'Eines que hem fet servir:|Herramientas que hemos usado:', sol: "Per exemple: el generador d'imatges simulat de Numi, llapis i retoladors.|Por ejemplo: el generador de imágenes simulado de Numi, lápices y rotuladores." },
          { q: 'Què ha fet la IA? Què hem fet nosaltres?|¿Qué ha hecho la IA? ¿Qué hemos hecho nosotros?', big: true, sol: "La IA: esborranys de les imatges. Nosaltres: idea, guió, textos, triar, retocar i revisar.|La IA: borradores de las imágenes. Nosotros: idea, guion, textos, elegir, retocar y revisar." },
          { q: 'Revisió (errors, estereotips, marques, persones reals) i fonts:|Revisión (errores, estereotipos, marcas, personas reales) y fuentes:', sol: "Per exemple: hem refet una vinyeta amb un logotip real; no hi ha persones reals.|Por ejemplo: hemos rehecho una viñeta con un logotipo real; no hay personas reales." },
          { q: 'Etiqueta visible i llicència:|Etiqueta visible y licencia:', sol: "Per exemple: «Imatges generades amb IA i editades per l'equip» · CC BY.|Por ejemplo: «Imágenes generadas con IA y editadas por el equipo» · CC BY." }
        ] }
    ]
  }
});
