/* Tech Digital · unitat 2 «Pensar abans de creure» · guia del professorat (d2-1 … d2-4)
   Material propi de Numi. Classe de 60 minuts; tots els exemples (Vilabit, XatAmics, FotoNuvi, AjudaBot…) són inventats. */
{
  // les demos de les diapositives (els mateixos artefactes de l'app, sense pistes clicables)
  const NEWS = { k: 'dig', kind: 'news', url: 'noticies-flash-24.xyz/ultima-hora|noticias-flash-24.xyz/ultima-hora',
    html: `<h3>ÚLTIMA HORA!!! DEMÀ TANQUEN TOTES LES ESCOLES!!!</h3><p style="font-size:30px;text-align:center">❄️❄️❄️</p><p>Segons fonts secretes, demà cauran dos metres de neu a Vilabit i no hi haurà classe enlloc.</p><p><small>Publicat el 14 de gener de 2019 · Sense autor</small></p><p><b>Comparteix-ho ara, abans que ho esborrin!</b></p>|<h3>¡¡¡ÚLTIMA HORA!!! ¡¡¡MAÑANA CIERRAN TODAS LAS ESCUELAS!!!</h3><p style="font-size:30px;text-align:center">❄️❄️❄️</p><p>Según fuentes secretas, mañana caerán dos metros de nieve en Vilabit y no habrá clase en ningún sitio.</p><p><small>Publicado el 14 de enero de 2019 · Sin autor</small></p><p><b>¡Compártelo ya, antes de que lo borren!</b></p>` };
  const PHOTO = { k: 'dig', kind: 'post', from: 'MeteoBrutal_88|MeteoBrutal_88', av: '❄️', when: '3 de juliol · ara mateix|3 de julio · ahora mismo',
    html: `<p>Increïble! Mireu com està la plaça de Vilabit ARA MATEIX!</p><div style="font-size:42px;text-align:center;background:#EAF4FF;border-radius:12px;padding:8px">❄️⛄❄️</div><p><small>Foto: arxiu, gener de 2017</small></p><p>Compartiu-ho amb tothom!!</p>|<p>¡Increíble! ¡Mirad cómo está la plaza de Vilabit AHORA MISMO!</p><div style="font-size:42px;text-align:center;background:#EAF4FF;border-radius:12px;padding:8px">❄️⛄❄️</div><p><small>Foto: archivo, enero de 2017</small></p><p>¡¡Compartidlo con todo el mundo!!</p>` };
  const SPIDER = { k: 'dig', kind: 'chat', from: 'AjudaBot (una IA de mentida)|AjudaBot (una IA de mentira)', av: '🤖',
    html: `<div class="dm me">Quantes potes té una aranya?</div><div class="dm them">Bona pregunta! Una aranya té 6 potes.</div><div class="dm me">Segur?</div><div class="dm them">Sí, segur! Totes les aranyes en tenen 6.</div>|<div class="dm me">¿Cuántas patas tiene una araña?</div><div class="dm them">¡Buena pregunta! Una araña tiene 6 patas.</div><div class="dm me">¿Seguro?</div><div class="dm them">¡Sí, seguro! Todas las arañas tienen 6.</div>` };
  const DRAC = { k: 'dig', kind: 'post', from: 'Iu|Iu', av: '🦊', when: 'fa 5 minuts|hace 5 minutos',
    html: `<div style="font-size:44px;text-align:center;background:#FFF4E5;border-radius:12px;padding:6px">🐉🌸</div><p>He dibuixat un drac! Què us sembla?</p><p><small>💬 <b>Pau:</b> ok.</small></p><p><small>💬 <b>Nora:</b> M'encanta com li has fet les ales! Me l'ensenyes demà? 😍</small></p>|<div style="font-size:44px;text-align:center;background:#FFF4E5;border-radius:12px;padding:6px">🐉🌸</div><p>¡He dibujado un dragón! ¿Qué os parece?</p><p><small>💬 <b>Pau:</b> ok.</small></p><p><small>💬 <b>Nora:</b> ¡Me encanta cómo le has hecho las alas! ¿Me lo enseñas mañana? 😍</small></p>` };
  const GRUP = { k: 'dig', kind: 'chat', from: 'Grup de 5è B|Grupo de 5.º B', av: '🏫',
    html: `<div class="dm them"><b>Joan:</b> Mireu quina foto més ridícula de l'Àlex</div><div class="dm them"><b>Mia:</b> 😂😂😂</div><div class="dm them"><b>Joan:</b> I que no vingui a la festa, eh?</div><div class="dm them"><b>Nora:</b> Prou, això no mola. Àlex, estic amb tu 💛</div>|<div class="dm them"><b>Joan:</b> Mirad qué foto más ridícula de Álex</div><div class="dm them"><b>Mia:</b> 😂😂😂</div><div class="dm them"><b>Joan:</b> Y que no venga a la fiesta, ¿eh?</div><div class="dm them"><b>Nora:</b> Basta, esto no mola. Álex, estoy contigo 💛</div>` };
  const CAMP = { k: 'dig', kind: 'post', from: 'Escola de Vilabit|Escuela de Vilabit', av: '🏫', when: 'Campanya de 6è|Campaña de 6.º',
    html: `<h3 style="text-align:center;margin:4px 0">Abans de compartir, PENSA! 🧠</h3><p style="text-align:center">Qui ho diu? · De quan és? · Qui més ho diu?</p><p style="text-align:center"><b>Si dubtes, pregunta a un adult.</b></p>|<h3 style="text-align:center;margin:4px 0">Antes de compartir, ¡PIENSA! 🧠</h3><p style="text-align:center">¿Quién lo dice? · ¿De cuándo es? · ¿Quién más lo dice?</p><p style="text-align:center"><b>Si dudas, pregunta a un adulto.</b></p>` };

  Object.assign(TGUIDE, {

    /* ---------- Sessió 1 · Caçadors de bulos ---------- */
    'd2-1': {
      obj: [
        "L'alumne/a explica què és un bulo i per què corre tan de pressa quan el compartim sense comprovar-lo.|El alumno/a explica qué es un bulo y por qué corre tan deprisa cuando lo compartimos sin comprobarlo.",
        "L'alumne/a fa servir les tres preguntes (qui ho diu, de quan és, qui més ho diu) per valorar si una notícia és de fiar.|El alumno/a usa las tres preguntas (quién lo dice, de cuándo es, quién más lo dice) para valorar si una noticia es de fiar.",
        "L'alumne/a reconeix una foto fora de context i les pistes d'un missatge trampa: premis, presses, por, adreces estranyes i peticions de dades.|El alumno/a reconoce una foto fuera de contexto y las pistas de un mensaje trampa: premios, prisas, miedo, direcciones raras y peticiones de datos.",
        "L'alumne/a sap què fer davant d'un engany (no tocar res, no compartir i explicar-ho a un adult de confiança) i que caure-hi no és culpa seva.|El alumno/a sabe qué hacer ante un engaño (no tocar nada, no compartir y contárselo a un adulto de confianza) y que caer en él no es culpa suya."
      ],
      comp: [
        "Competència digital (CD1): cercar informació i valorar-ne la fiabilitat|Competencia digital (CD1): buscar información y valorar su fiabilidad",
        "Competència digital (CD4): seguretat, protecció de dades i prevenció d'enganys en línia|Competencia digital (CD4): seguridad, protección de datos y prevención de engaños en línea",
        "Competència ciutadana: pensament crític davant la informació i responsabilitat en compartir-la|Competencia ciudadana: pensamiento crítico ante la información y responsabilidad al compartirla",
        "Comunicació oral: argumentar per què una informació és o no és de fiar|Comunicación oral: argumentar por qué una información es o no es de fiar"
      ],
      vocab: [
        ["Bulo|Bulo", "Una informació falsa que es fa passar per veritat.|Una información falsa que se hace pasar por verdad."],
        ["Font|Fuente", "D'on ve una informació: qui la diu i on l'ha publicada.|De dónde viene una información: quién la dice y dónde la ha publicado."],
        ["Context|Contexto", "El lloc i el moment on va passar una cosa o es va fer una foto.|El lugar y el momento en que pasó algo o se hizo una foto."],
        ["Comprovar|Comprobar", "Buscar en altres fonts fiables si una cosa és certa.|Buscar en otras fuentes fiables si algo es cierto."],
        ["Phishing|Phishing", "Un missatge trampa per robar dades o contrasenyes.|Un mensaje trampa para robar datos o contraseñas."],
        ["Enllaç|Enlace", "Un text o botó que, en tocar-lo, obre una altra pàgina.|Un texto o botón que, al tocarlo, abre otra página."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Caçadors de bulos»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Cazadores de bulos»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Un paquet de targetes de titulars per grup i tres fulls amb els rètols «Fiable», «Cal comprovar» i «Bulo»|Un paquete de tarjetas de titulares por grupo y tres hojas con los rótulos «Fiable», «Hay que comprobar» y «Bulo»",
          "La fitxa «Investiga una notícia» (una per grup) i llapis|La ficha «Investiga una noticia» (una por grupo) y lápices",
          "Fulls o cartolines i colors per al detector de bulos|Hojas o cartulinas y colores para el detector de bulos"
        ],
        imprimir: ["Titulars de la redacció de Vilabit|Titulares de la redacción de Vilabit", "Investiga una notícia|Investiga una noticia"],
        prep: [
          "Imprimir i retallar un paquet de titulars per grup de 3 o 4, i preparar els tres rètols de cada grup.|Imprimir y recortar un paquete de titulares por grupo de 3 o 4, y preparar los tres rótulos de cada grupo.",
          "Mirar abans la demo de la diapositiva 3 (la notícia de la nevada) i la 7 (la foto fora de context).|Mirar antes la demo de la diapositiva 3 (la noticia de la nevada) y la 7 (la foto fuera de contexto).",
          "Pensar un exemple proper i sense marques reals (un rumor de l'escola, una cadena de missatges) per explicar-lo a l'inici.|Pensar un ejemplo cercano y sin marcas reales (un rumor de la escuela, una cadena de mensajes) para contarlo al principio.",
          "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: un missatge al xat|Bienvenida: un mensaje en el chat", fase: 'inici',
          fa: "Projecta la «notícia» de la nevada sense dir res i fes votar a mà alçada: me la crec, no me la crec o no ho sé. No donis la resposta. Pregunta qui ha rebut mai una cosa que després era falsa i escolta dues o tres experiències sense demanar noms ni marques. Remarca que a tothom ens ha passat, també als adults, i que avui seran caçadors/es de bulos.|Proyecta la «noticia» de la nevada sin decir nada y haz votar a mano alzada: me la creo, no me la creo o no lo sé. No des la respuesta. Pregunta quién ha recibido alguna vez algo que después era falso y escucha dos o tres experiencias sin pedir nombres ni marcas. Remarca que a todos nos ha pasado, también a los adultos, y que hoy serán cazadores/as de bulos.",
          diu: ["Us la creieu? La reenviaríeu al xat de la classe?|¿Os la creéis? ¿La reenviaríais al chat de la clase?",
            "Que t'enganyin no vol dir que siguis tonto/a: aquests missatges estan fets per enganyar a tothom.|Que te engañen no quiere decir que seas tonto/a: estos mensajes están hechos para engañar a todo el mundo.",
            "Avui aprendrem a fer les preguntes que descobreixen un bulo.|Hoy aprenderemos a hacer las preguntas que descubren un bulo."],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Com corre un bulo i com es caça|Cómo corre un bulo y cómo se caza", fase: 'teoria',
          fa: "Amb l'animació, mostra com un missatge passa d'un mòbil a tres i de tres a nou, i pregunta on es podria aturar. Presenta la lupa de les tres preguntes i aplica-la junts a la notícia de la nevada. Explica les fonts més i menys fiables, ensenya la foto fora de context (que llegeixin el peu de foto i la data) i acaba amb el phishing: premis, presses i por. Insisteix que davant d'un missatge trampa no es toca res i es pregunta a un adult.|Con la animación, muestra cómo un mensaje pasa de un móvil a tres y de tres a nueve, y pregunta dónde se podría parar. Presenta la lupa de las tres preguntas y aplicadla juntos a la noticia de la nevada. Explica las fuentes más y menos fiables, enseña la foto fuera de contexto (que lean el pie de foto y la fecha) y termina con el phishing: premios, prisas y miedo. Insiste en que ante un mensaje trampa no se toca nada y se pregunta a un adulto.",
          diu: ["Si cadascú l'envia a tres persones, quanta gent el rep a la tercera volta?|Si cada uno lo envía a tres personas, ¿cuánta gente lo recibe en la tercera vuelta?",
            "Qui ho diu? De quan és? Qui més ho diu? Provem-ho amb la nevada.|¿Quién lo dice? ¿De cuándo es? ¿Quién más lo dice? Probémoslo con la nevada.",
            "La foto és real… però de quan és? Té sentit una nevada el juliol?|La foto es real… pero ¿de cuándo es? ¿Tiene sentido una nevada en julio?",
            "Quan un missatge et posa presses, és el moment d'anar a poc a poc.|Cuando un mensaje te mete prisa, es el momento de ir despacio."],
          slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "La redacció de Vilabit|La redacción de Vilabit", fase: 'desconnectat',
          fa: "Fes grups de 3 o 4 amb quatre papers: lector/a, detectiu/a de fonts, detectiu/a de dates i portaveu. Cada grup llegeix els titulars en veu alta, s'hi fa les tres preguntes i els reparteix en tres piles: «Fiable», «Cal comprovar» i «Bulo». Al final, cada portaveu explica una targeta i per què l'han posat on l'han posat. Orientació: el de la biblioteca, la festa de la tardor, la tortuga i el museu tenen font i data (fiables); la nevada i el gat que parla són per comprovar; les tauletes regalades, la xocolata que fa volar, el tauró sense data i la cadena són bulos. Accepta altres piles si les argumenten bé. Si sobra temps, cada grup omple la fitxa «Investiga una notícia» amb un titular de la pila «Cal comprovar».|Haz grupos de 3 o 4 con cuatro papeles: lector/a, detective de fuentes, detective de fechas y portavoz. Cada grupo lee los titulares en voz alta, se hace las tres preguntas y los reparte en tres montones: «Fiable», «Hay que comprobar» y «Bulo». Al final, cada portavoz explica una tarjeta y por qué la han puesto donde la han puesto. Orientación: el de la biblioteca, la fiesta de otoño, la tortuga y el museo tienen fuente y fecha (fiables); la nevada y el gato que habla son para comprobar; las tabletas regaladas, el chocolate que hace volar, el tiburón sin fecha y la cadena son bulos. Acepta otros montones si los argumentan bien. Si sobra tiempo, cada grupo rellena la ficha «Investiga una noticia» con un titular del montón «Hay que comprobar».",
          diu: ["Detectius de fonts: qui ho diu? Detectius de dates: de quan és?|Detectives de fuentes: ¿quién lo dice? Detectives de fechas: ¿de cuándo es?",
            "Si no ho sabeu segur, la pila bona és «Cal comprovar». No passa res per dubtar!|Si no lo sabéis seguro, el montón bueno es «Hay que comprobar». ¡No pasa nada por dudar!",
            "On ho podríeu comprovar? A qui ho preguntaríeu?|¿Dónde lo podríais comprobar? ¿A quién se lo preguntaríais?"],
          slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4 amb papers|Grupos de 3 o 4 con papeles" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a obre la sessió i avança al seu ritme. A les dues activitats de pistes (la notícia i la foto), passeja i demana a qui toca a l'atzar que expliqui per què cada pista és sospitosa abans de tocar-ne una altra. Als més petits, llegeix-los en veu alta l'artefacte si cal.|Cada alumno/a abre la sesión y avanza a su ritmo. En las dos actividades de pistas (la noticia y la foto), pasea y pide a quien toca al azar que explique por qué cada pista es sospechosa antes de tocar otra. A los más pequeños, léeles en voz alta el artefacto si hace falta.",
          diu: ["Abans de tocar, digues-me per què et sembla una pista.|Antes de tocar, dime por qué te parece una pista.",
            "Mira també la part de dalt: l'adreça i qui ho publica.|Mira también la parte de arriba: la dirección y quién lo publica.",
            "Quines fonts has posat a «poc fiable»? Per què?|¿Qué fuentes has puesto en «poco fiable»? ¿Por qué?"],
          slides: ['s11'], app: "De «Recorda» fins a «Investiga»: la pregunta de la contrasenya, la missió, les targetes de «Descobreix», ordenar els passos del caçador/a, classificar les fonts, la pregunta de les emocions, les pistes de la notícia i les de la foto.|De «Recuerda» hasta «Investiga»: la pregunta de la contraseña, la misión, las tarjetas de «Descubre», ordenar los pasos del cazador/a, clasificar las fuentes, la pregunta de las emociones, las pistas de la noticia y las de la foto.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: els missatges trampa|Retos: los mensajes trampa", fase: 'ordinador',
          fa: "Feu la pausa activa tots junts. Després deixa'ls fer els quatre reptes: el missatge del premi, el correu de XatAmics, classificar què fer amb cada missatge i la conversa amb la Nora. Abans de començar, projecta la diapositiva «I si ja hi he caigut?» i deixa-la a la vista: és el missatge més important de la sessió.|Haced la pausa activa todos juntos. Después déjales hacer los cuatro retos: el mensaje del premio, el correo de XatAmics, clasificar qué hacer con cada mensaje y la conversación con Nora. Antes de empezar, proyecta la diapositiva «¿Y si ya he caído?» y déjala a la vista: es el mensaje más importante de la sesión.",
          diu: ["Quin és el truc que fan servir tots dos missatges per enganyar?|¿Cuál es el truco que usan los dos mensajes para engañar?",
            "A la conversa amb la Nora, prova també una resposta equivocada: què passa?|En la conversación con Nora, prueba también una respuesta equivocada: ¿qué pasa?",
            "Si mai caieu en un engany, què fareu? Exacte: explicar-ho, sense por.|Si alguna vez caéis en un engaño, ¿qué haréis? Exacto: contarlo, sin miedo."],
          slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: el meu detector de bulos|Crea: mi detector de bulos", fase: 'crea',
          fa: "Reparteix fulls i colors. Cada alumne/a comença el seu detector: la lupa amb les tres preguntes, tres pistes d'engany i «Si dubto, pregunto a…» amb el nom d'un adult de confiança. L'acabaran a casa. A l'app, el pas «Crea» es pot marcar com a fet quan l'acabin.|Reparte hojas y colores. Cada alumno/a empieza su detector: la lupa con las tres preguntas, tres pistas de engaño y «Si dudo, pregunto a…» con el nombre de un adulto de confianza. Lo terminarán en casa. En la app, el paso «Crea» se puede marcar como hecho cuando lo terminen.",
          diu: ["Quina pista d'engany us ha sorprès més avui?|¿Qué pista de engaño os ha sorprendido más hoy?",
            "Qui és el vostre adult de confiança? Escriviu-ne el nom.|¿Quién es vuestro adulto de confianza? Escribid su nombre."],
          slides: ['s14'], app: "Pas «Crea»: el meu detector de bulos (es pot tocar «Ara no» i fer-lo a casa).|Paso «Crea»: mi detector de bulos (se puede tocar «Ahora no» y hacerlo en casa).", org: "Individual|Individual" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
          diu: ["Quines són les tres preguntes del caçador/a de bulos?|¿Cuáles son las tres preguntas del cazador/a de bulos?",
            "I ara: la notícia de la nevada, era un bulo? Com ho sabem?|Y ahora: la noticia de la nevada, ¿era un bulo? ¿Cómo lo sabemos?"],
          slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Creu que una cosa és certa perquè l'ha compartit molta gent.|Cree que algo es cierto porque lo ha compartido mucha gente.",
          "Pregunta-li: si deu persones repeteixen el que diu un desconegut, ara és més cert? Que busqui d'on va sortir la primera vegada.|Pregúntale: si diez personas repiten lo que dice un desconocido, ¿ahora es más cierto? Que busque de dónde salió la primera vez."],
        ["Pensa que tot el que surt en una web o en un vídeo és de fiar perquè «ho diu internet».|Piensa que todo lo que sale en una web o en un vídeo es de fiar porque «lo dice internet».",
          "Compara-ho amb el carrer: et creuries un paper enganxat en un fanal igual que un llibre de la biblioteca? A internet també cal mirar qui ho escriu.|Compáralo con la calle: ¿te creerías un papel pegado en una farola igual que un libro de la biblioteca? En internet también hay que mirar quién lo escribe."],
        ["Desconfia de tot, també de les fonts fiables, i diu que «tot és mentida».|Desconfía de todo, también de las fuentes fiables, y dice que «todo es mentira».",
          "Comprovar no és desconfiar de tot. Ajuda'l a trobar quines fonts tenen nom, data i algú responsable, i a contrastar-les entre elles.|Comprobar no es desconfiar de todo. Ayúdale a encontrar qué fuentes tienen nombre, fecha y alguien responsable, y a contrastarlas entre ellas."],
        ["Se sent culpable o té por perquè una vegada va tocar un enllaç estrany o va reenviar un bulo.|Se siente culpable o tiene miedo porque una vez tocó un enlace raro o reenvió un bulo.",
          "Tranquil·litza'l: no és culpa seva, li passa a molta gent i té solució. Anima'l a explicar-ho a casa per canviar la contrasenya si cal, i agraeix-li que ho hagi explicat.|Tranquilízale: no es culpa suya, le pasa a mucha gente y tiene solución. Anímale a contarlo en casa para cambiar la contraseña si hace falta, y agradécele que lo haya contado."],
        ["Només troba la pista més evident (les majúscules) i no mira l'adreça, el remitent ni la data.|Solo encuentra la pista más evidente (las mayúsculas) y no mira la dirección, el remitente ni la fecha.",
          "Recorda-li la lupa de les tres preguntes i demana-li que miri a poc a poc la part de dalt (adreça, remitent) i la de baix (data, signatura).|Recuérdale la lupa de las tres preguntas y pídele que mire despacio la parte de arriba (dirección, remitente) y la de abajo (fecha, firma)."]
      ],
      diff: {
        mes: "Inventar un titular fals i un de cert sobre l'escola i fer que un company/a descobreixi quin és quin explicant-ne les pistes. Per anar més enllà: debatre per què hi ha gent que fa bulos (per tenir clics, per diners, per fer broma, per confondre) i quin mal poden fer.|Inventar un titular falso y uno cierto sobre la escuela y hacer que un compañero/a descubra cuál es cuál explicando las pistas. Para ir más allá: debatir por qué hay gente que hace bulos (para tener clics, por dinero, por broma, para confundir) y qué daño pueden hacer.",
        menys: "Treballar només la primera pregunta (qui ho diu?) i les pistes de presses i premis. Fer les activitats de pistes en parella, amb un company/a que llegeixi l'artefacte en veu alta.|Trabajar solo la primera pregunta (¿quién lo dice?) y las pistas de prisas y premios. Hacer las actividades de pistas en pareja, con un compañero/a que lea el artefacto en voz alta."
      },
      aval: {
        ticket: ["Digues les tres preguntes del caçador/a de bulos.|Di las tres preguntas del cazador/a de bulos.",
          "Digues una pista d'un missatge trampa i què faries si te l'enviessin.|Di una pista de un mensaje trampa y qué harías si te lo enviaran."],
        rubric: [
          ["Valorar una notícia|Valorar una noticia", "Fa servir les tres preguntes i explica per què una notícia és o no és de fiar.|Usa las tres preguntas y explica por qué una noticia es o no es de fiar.", "Detecta alguna pista, però encara es guia per si la notícia sembla sorprenent o no.|Detecta alguna pista, pero todavía se guía por si la noticia parece sorprendente o no."],
          ["Missatges trampa|Mensajes trampa", "Reconeix premis, presses, por, adreces estranyes i peticions de dades, i diu què faria.|Reconoce premios, prisas, miedo, direcciones raras y peticiones de datos, y dice qué haría.", "Reconeix una o dues pistes, sobretot les més evidents.|Reconoce una o dos pistas, sobre todo las más evidentes."],
          ["Actitud davant l'engany|Actitud ante el engaño", "Diu que no tocaria res, no compartiria i ho explicaria a un adult, sense culpar ningú.|Dice que no tocaría nada, no compartiría y se lo contaría a un adulto, sin culpar a nadie.", "Sap que cal demanar ajuda, però dubta o creu que el renyaran.|Sabe que hay que pedir ayuda, pero duda o cree que le reñirán."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió i acabar junts el «detector de bulos». Proposta per a la família: la propera vegada que us arribi una notícia sorprenent o un missatge amb premis, mireu-lo junts i feu-vos les tres preguntes (qui ho diu, de quan és, qui més ho diu). I recordeu-li que, si mai cau en un engany, ho pot explicar sense por: és la millor manera d'arreglar-ho.|En casa, con el móvil, podéis repetir la sesión y terminar juntos el «detector de bulos». Propuesta para la familia: la próxima vez que os llegue una noticia sorprendente o un mensaje con premios, miradlo juntos y haceos las tres preguntas (quién lo dice, de cuándo es, quién más lo dice). Y recordadle que, si alguna vez cae en un engaño, lo puede contar sin miedo: es la mejor manera de arreglarlo.",
      slides: [
        { id: 's1', k: 'portada', t: "Caçadors de bulos|Cazadores de bulos", x: "Avui aprendrem a descobrir si una notícia és de fiar abans de creure-la i de compartir-la.|Hoy aprenderemos a descubrir si una noticia es de fiar antes de creerla y de compartirla.",
          nota: "Presenta l'objectiu: al final de la classe, tothom sabrà fer les tres preguntes del caçador/a de bulos i reconèixer un missatge trampa.|Presenta el objetivo: al final de la clase, todo el mundo sabrá hacer las tres preguntas del cazador/a de bulos y reconocer un mensaje trampa." },
        { id: 's2', k: 'pregunta', t: "Tot el que arriba al mòbil és veritat?|¿Todo lo que llega al móvil es verdad?", punts: ["Has rebut mai una notícia que després era falsa?|¿Has recibido alguna vez una noticia que después era falsa?", "Com ho vas saber?|¿Cómo lo supiste?"],
          nota: "Escolta experiències sense demanar noms de persones, apps ni webs. Remarca que a tothom ens ha passat.|Escucha experiencias sin pedir nombres de personas, apps ni webs. Remarca que a todos nos ha pasado." },
        { id: 's3', k: 'media', t: "Ha arribat aquest missatge…|Ha llegado este mensaje…", x: "Te'l creus? El reenviaries?|¿Te lo crees? ¿Lo reenviarías?", media: NEWS,
          nota: "Votació a mà alçada: me'l crec, no me'l crec, no ho sé. No donis la resposta: la descobriran a l'ordinador, on podran tocar les pistes.|Votación a mano alzada: me lo creo, no me lo creo, no lo sé. No des la respuesta: la descubrirán en el ordenador, donde podrán tocar las pistas." },
        { id: 's4', k: 'anim', t: "Com corre un bulo|Cómo corre un bulo", anim: 'd2bulo', x: "D'un mòbil a tres, de tres a nou… si ningú no s'atura a comprovar-ho.|De un móvil a tres, de tres a nueve… si nadie se para a comprobarlo.",
          nota: "Feu el càlcul junts: 3, 9, 27… Pregunta on es podria aturar el bulo: a qualsevol mòbil on algú comprovi abans de compartir.|Haced el cálculo juntos: 3, 9, 27… Pregunta dónde se podría parar el bulo: en cualquier móvil donde alguien compruebe antes de compartir." },
        { id: 's5', k: 'anim', t: "La lupa: tres preguntes|La lupa: tres preguntas", anim: 'd2lupa', x: "Qui ho diu? De quan és? Qui més ho diu?|¿Quién lo dice? ¿De cuándo es? ¿Quién más lo dice?",
          nota: "Apliqueu-la a la nevada: no té autor, és del 2019 i cap font oficial no ho diu. Afegeix el truc de les emocions: si et fa molta por o ràbia de cop, atura't.|Aplicadla a la nevada: no tiene autor, es de 2019 y ninguna fuente oficial lo dice. Añade el truco de las emociones: si te da mucho miedo o rabia de golpe, para." },
        { id: 's6', k: 'concepte', t: "Fonts més fiables i poc fiables|Fuentes más fiables y poco fiables", pic: 'img/ment/vel.webp',
          punts: ["Més fiables: tenen nom, data i algú responsable (escola, ajuntament, diari, museu).|Más fiables: tienen nombre, fecha y alguien responsable (escuela, ayuntamiento, periódico, museo).", "Poc fiables: «m'ho ha dit un amic d'un amic», comptes sense nom, missatges reenviats.|Poco fiables: «me lo ha dicho un amigo de un amigo», cuentas sin nombre, mensajes reenviados.", "Fins i tot les fiables es poden equivocar: contrasta-ho.|Incluso las fiables se pueden equivocar: contrástalo."],
          nota: "Demana exemples de fonts fiables properes: la web de l'escola, l'agenda, el diari local, la biblioteca.|Pide ejemplos de fuentes fiables cercanas: la web de la escuela, la agenda, el periódico local, la biblioteca." },
        { id: 's7', k: 'media', t: "Una foto real que enganya|Una foto real que engaña", x: "Llegiu el peu de foto i la data de la publicació.|Leed el pie de foto y la fecha de la publicación.", media: PHOTO,
          nota: "La foto és de veritat, però del 2017, i la publicació és del juliol. Explica que un adult els pot ajudar a buscar una foto a internet per veure on va aparèixer primer.|La foto es de verdad, pero de 2017, y la publicación es de julio. Explica que un adulto les puede ayudar a buscar una foto en internet para ver dónde apareció primero." },
        { id: 's8', k: 'anim', t: "Phishing: no et deixis pescar|Phishing: no te dejes pescar", anim: 'd2ham', x: "Premis, presses i por: les pistes dels missatges trampa.|Premios, prisas y miedo: las pistas de los mensajes trampa.",
          nota: "Remarca la regla d'or: cap servei ni premi de veritat no et demana mai la contrasenya. I si algú hi cau, no és culpa seva.|Remarca la regla de oro: ningún servicio ni premio de verdad te pide nunca la contraseña. Y si alguien cae, no es culpa suya." },
        { id: 's9', k: 'activitat', t: "La redacció de Vilabit|La redacción de Vilabit", timer: 12,
          punts: ["Repartiu els papers: lector/a, detectiu/a de fonts, detectiu/a de dates i portaveu.|Repartid los papeles: lector/a, detective de fuentes, detective de fechas y portavoz.", "Llegiu cada titular en veu alta.|Leed cada titular en voz alta.", "Feu-vos les tres preguntes i poseu-lo a «Fiable», «Cal comprovar» o «Bulo».|Haceos las tres preguntas y ponedlo en «Fiable», «Hay que comprobar» o «Bulo».", "El portaveu explicarà una targeta a la classe.|El portavoz explicará una tarjeta a la clase."],
          nota: "Passa pels grups i pregunta per què han posat cada targeta on és. Valora més l'argument que l'encert.|Pasa por los grupos y pregunta por qué han puesto cada tarjeta donde está. Valora más el argumento que el acierto." },
        { id: 's10', k: 'activitat', t: "Les regles dels detectius|Las reglas de los detectives",
          punts: ["Comprovar no és acusar: busquem pistes, no culpables.|Comprobar no es acusar: buscamos pistas, no culpables.", "Si no ho sabem segur, la pila bona és «Cal comprovar».|Si no lo sabemos seguro, el montón bueno es «Hay que comprobar».", "Tothom parla; el portaveu resumeix.|Todo el mundo habla; el portavoz resume."],
          nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
        { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Caçadors de bulos».|Abre la sesión «Cazadores de bulos».", "Fes la missió, «Descobreix» i «Mans a l'obra».|Haz la misión, «Descubre» y «Manos a la obra».", "A «Prediu i prova» i «Investiga», toca les pistes de la notícia i de la foto.|En «Predice y prueba» e «Investiga», toca las pistas de la noticia y de la foto.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
          nota: "Qui acabi abans pot ajudar un company/a amb preguntes, sense tocar-li el ratolí.|Quien termine antes puede ayudar a un compañero/a con preguntas, sin tocarle el ratón." },
        { id: 's12', k: 'repte', t: "Reptes: els missatges trampa|Retos: los mensajes trampa", timer: 10,
          punts: ["1. El missatge del premi|1. El mensaje del premio", "2. El correu de XatAmics|2. El correo de XatAmics", "3. Què fas amb cada missatge?|3. ¿Qué haces con cada mensaje?", "4. La Nora i la nevada|4. Nora y la nevada"],
          nota: "Al repte 4, anima'ls a provar també una resposta equivocada: la conversa explica per què i deixa rectificar.|En el reto 4, anímales a probar también una respuesta equivocada: la conversación explica por qué y deja rectificar." },
        { id: 's13', k: 'pregunta', t: "I si ja hi he caigut?|¿Y si ya he caído?",
          punts: ["No és culpa teva: aquests enganys estan fets per enganyar a tothom.|No es culpa tuya: estos engaños están hechos para engañar a todo el mundo.", "Explica-ho de seguida a un adult de confiança.|Cuéntaselo enseguida a un adulto de confianza.", "Junts, canvieu la contrasenya si l'has escrita.|Juntos, cambiad la contraseña si la has escrito.", "Si has compartit un bulo, avisa que era fals.|Si has compartido un bulo, avisa de que era falso."],
          nota: "És la diapositiva més important per al benestar: deixa clar que demanar ajuda no comporta cap càstig.|Es la diapositiva más importante para el bienestar: deja claro que pedir ayuda no conlleva ningún castigo." },
        { id: 's14', k: 'activitat', t: "Crea: el meu detector de bulos|Crea: mi detector de bulos", timer: 5,
          punts: ["Una lupa amb les tres preguntes.|Una lupa con las tres preguntas.", "Tres pistes d'engany al voltant.|Tres pistas de engaño alrededor.", "«Si dubto, pregunto a…» i el nom d'un adult.|«Si dudo, pregunto a…» y el nombre de un adulto."],
          nota: "No cal acabar-lo a classe: el poden completar a casa i ensenyar-lo a la família.|No hace falta terminarlo en clase: lo pueden completar en casa y enseñarlo a la familia." },
        { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Un bulo corre quan el compartim sense comprovar-lo.|Un bulo corre cuando lo compartimos sin comprobarlo.", "Qui ho diu? De quan és? Qui més ho diu?|¿Quién lo dice? ¿De cuándo es? ¿Quién más lo dice?", "Premis, presses i por: no toquis res i pregunta a un adult.|Premios, prisas y miedo: no toques nada y pregunta a un adulto."],
          nota: "Torna a la votació de l'inici: algú canviaria ara el seu vot sobre la nevada?|Vuelve a la votación del principio: ¿alguien cambiaría ahora su voto sobre la nevada?" },
        { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues les tres preguntes del caçador/a de bulos.|Di las tres preguntas del cazador/a de bulos.", "Digues una pista d'un missatge trampa i què faries.|Di una pista de un mensaje trampa y qué harías."],
          nota: "Fes una pregunta a cada alumne/a a la porta i anota qui necessita més suport.|Haz una pregunta a cada alumno/a en la puerta y anota quién necesita más apoyo." }
      ],
      print: [
        { id: 'p1', t: "Titulars de la redacció de Vilabit|Titulares de la redacción de Vilabit", k: 'targetes',
          intro: "Un paquet per grup. Retalleu les targetes i prepareu tres fulls amb els rètols «Fiable», «Cal comprovar» i «Bulo». Tots els titulars, mitjans i comptes són inventats.|Un paquete por grupo. Recortad las tarjetas y preparad tres hojas con los rótulos «Fiable», «Hay que comprobar» y «Bulo». Todos los titulares, medios y cuentas son inventados.",
          items: [
            { t: "«Regalen tauletes a qui comparteixi això!!!» · sense autor ni data 📨|«¡¡¡Regalan tabletas a quien comparta esto!!!» · sin autor ni fecha 📨", n: 1 },
            { t: "«La biblioteca obrirà els dissabtes» · Web de l'Ajuntament de Vilabit, 2 d'octubre 📚|«La biblioteca abrirá los sábados» · Web del Ayuntamiento de Vilabit, 2 de octubre 📚", n: 1 },
            { t: "«Un gat parla en català en un vídeo» · compte @gatsbojos99, sense data 🐱|«Un gato habla en castellano en un vídeo» · cuenta @gatoslocos99, sin fecha 🐱", n: 1 },
            { t: "«Demà no hi ha escola per la neu» · missatge reenviat moltes vegades ❄|«Mañana no hay cole por la nieve» · mensaje reenviado muchas veces ❄", n: 1 },
            { t: "«La festa de la tardor serà el divendres 20» · Agenda de l'escola 🏫|«La fiesta de otoño será el viernes 20» · Agenda de la escuela 🏫", n: 1 },
            { t: "«Uns científics diuen que la xocolata fa volar» · no diu quins científics 🍪|«Unos científicos dicen que el chocolate hace volar» · no dice qué científicos 🍪", n: 1 },
            { t: "«Neix una tortuga a l'aquari de Vilabit» · Diari de Vilabit, per Marta Soler, avui 🐢|«Nace una tortuga en el acuario de Vilabit» · Diario de Vilabit, por Marta Soler, hoy 🐢", n: 1 },
            { t: "«FOTO: un tauró al riu de Vilabit!» · foto sense data ni lloc 🔎|«¡FOTO: un tiburón en el río de Vilabit!» · foto sin fecha ni lugar 🔎", n: 1 },
            { t: "«El museu de ciències obre una sala nova» · Web del museu, 1 d'octubre 🧪|«El museo de ciencias abre una sala nueva» · Web del museo, 1 de octubre 🧪", n: 1 },
            { t: "«Si no reenvies això, el mòbil s'esborrarà» · cadena sense autor 🔒|«Si no reenvías esto, el móvil se borrará» · cadena sin autor 🔒", n: 1 }
          ] },
        { id: 'p2', t: "Investiga una notícia|Investiga una noticia", k: 'fitxa',
          intro: "Trieu un titular de la pila «Cal comprovar» i investigueu-lo amb la lupa de les tres preguntes.|Elegid un titular del montón «Hay que comprobar» e investigadlo con la lupa de las tres preguntas.",
          items: [
            { q: "Copia el titular que heu triat.|Copia el titular que habéis elegido.", sol: "Resposta oberta.|Respuesta abierta." },
            { q: "1. Qui ho diu? Hi ha autor/a o una font amb nom?|1. ¿Quién lo dice? ¿Hay autor/a o una fuente con nombre?", sol: "Valoreu que distingeixin una font amb nom (ajuntament, diari, escola) d'un compte anònim o un missatge reenviat.|Valorad que distingan una fuente con nombre (ayuntamiento, periódico, escuela) de una cuenta anónima o un mensaje reenviado." },
            { q: "2. De quan és? Té data?|2. ¿De cuándo es? ¿Tiene fecha?", sol: "Si no té data o és vella, cal desconfiar-ne.|Si no tiene fecha o es vieja, hay que desconfiar." },
            { q: "3. Qui més ho diu? On ho podríeu comprovar?|3. ¿Quién más lo dice? ¿Dónde lo podríais comprobar?", sol: "Per exemple: la web de l'escola o de l'ajuntament, un diari amb nom o preguntant a un adult.|Por ejemplo: la web de la escuela o del ayuntamiento, un periódico con nombre o preguntando a un adulto." },
            { q: "Com us fa sentir el titular? (por, ràbia, sorpresa, alegria…)|¿Cómo os hace sentir el titular? (miedo, rabia, sorpresa, alegría…)", sol: "Si provoca una emoció molt forta, és un motiu més per aturar-se i comprovar.|Si provoca una emoción muy fuerte, es un motivo más para pararse y comprobar." },
            { q: "Decisió: fiable, cal comprovar o bulo? Per què?|Decisión: ¿fiable, hay que comprobar o bulo? ¿Por qué?", sol: "Resposta oberta, argumentada amb les tres preguntes.|Respuesta abierta, argumentada con las tres preguntas." }
          ] }
      ]
    },

    /* ---------- Sessió 2 · Què és la intel·ligència artificial? ---------- */
    'd2-2': {
      obj: [
        "L'alumne/a explica amb les seves paraules que una IA és un programa que aprèn d'exemples i fa prediccions.|El alumno/a explica con sus palabras que una IA es un programa que aprende de ejemplos y hace predicciones.",
        "L'alumne/a entrena una IA senzilla etiquetant exemples i comprova com encerta o falla amb exemples nous.|El alumno/a entrena una IA sencilla etiquetando ejemplos y comprueba cómo acierta o falla con ejemplos nuevos.",
        "L'alumne/a explica què és un biaix i com es pot reduir amb exemples més variats.|El alumno/a explica qué es un sesgo y cómo se puede reducir con ejemplos más variados.",
        "L'alumne/a aplica normes d'ús responsable: no posar-hi dades personals, comprovar el que diu i no fer passar per propi el que fa una IA.|El alumno/a aplica normas de uso responsable: no poner datos personales, comprobar lo que dice y no hacer pasar por propio lo que hace una IA."
      ],
      comp: [
        "Competència digital (CD5): entendre com funcionen les tecnologies digitals, també la intel·ligència artificial|Competencia digital (CD5): entender cómo funcionan las tecnologías digitales, también la inteligencia artificial",
        "Competència digital (CD4): protecció de les dades personals i ús segur de les eines digitals|Competencia digital (CD4): protección de los datos personales y uso seguro de las herramientas digitales",
        "Pensament científic: classificar, fer hipòtesis i comprovar-les amb proves|Pensamiento científico: clasificar, hacer hipótesis y comprobarlas con pruebas",
        "Competència ciutadana: ús ètic i honest de la tecnologia i sensibilitat davant la injustícia (biaix)|Competencia ciudadana: uso ético y honesto de la tecnología y sensibilidad ante la injusticia (sesgo)"
      ],
      vocab: [
        ["Intel·ligència artificial (IA)|Inteligencia artificial (IA)", "Un programa que aprèn de molts exemples i després fa prediccions.|Un programa que aprende de muchos ejemplos y después hace predicciones."],
        ["Exemple (dades d'entrenament)|Ejemplo (datos de entrenamiento)", "Cada cas que li ensenyem a la IA amb la seva resposta.|Cada caso que le enseñamos a la IA con su respuesta."],
        ["Etiqueta|Etiqueta", "La resposta que posem a cada exemple: «gat», «gos»…|La respuesta que ponemos a cada ejemplo: «gato», «perro»…"],
        ["Patró|Patrón", "Una cosa que es repeteix en molts exemples.|Algo que se repite en muchos ejemplos."],
        ["Predicció|Predicción", "El que la IA endevina davant d'un cas nou.|Lo que la IA adivina ante un caso nuevo."],
        ["Biaix|Sesgo", "Un error que ve d'uns exemples poc variats o desequilibrats.|Un error que viene de unos ejemplos poco variados o desequilibrados."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Què és la intel·ligència artificial?»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «¿Qué es la inteligencia artificial?»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Un paquet de targetes «Blips i Blops» per grup, amb la ronda 1 i la ronda 2 en sobres separats|Un paquete de tarjetas «Blips y Blops» por grupo, con la ronda 1 y la ronda 2 en sobres separados",
          "La fitxa «Pensem com una IA» (una per grup) i llapis|La ficha «Pensemos como una IA» (una por grupo) y lápices"
        ],
        imprimir: ["Blips i Blops|Blips y Blops", "Pensem com una IA|Pensemos como una IA"],
        prep: [
          "Imprimir i retallar les targetes; posar les de la ronda 1 (i les de prova) en un sobre i les de la ronda 2 en un altre.|Imprimir y recortar las tarjetas; poner las de la ronda 1 (y las de prueba) en un sobre y las de la ronda 2 en otro.",
          "Recordar la regla secreta: els Blips tenen 3 ulls i els Blops, 1. A la ronda 1 el color coincideix (tots els Blips són blaus) i enganya.|Recordar la regla secreta: los Blips tienen 3 ojos y los Blops, 1. En la ronda 1 el color coincide (todos los Blips son azules) y engaña.",
          "Mirar la demo de l'AjudaBot (diapositiva 9) i conèixer les normes del centre sobre l'ús d'eines d'IA.|Mirar la demo de AjudaBot (diapositiva 9) y conocer las normas del centro sobre el uso de herramientas de IA.",
          "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: una màquina pot aprendre?|Bienvenida: ¿una máquina puede aprender?", fase: 'inici',
          fa: "Pregunta on creuen que hi ha intel·ligència artificial a la seva vida i si una IA pensa, sent o s'equivoca. Apunta les respostes a la pissarra en dues columnes, «crec que sí» i «crec que no», sense corregir. Recorda en Bit: seguia les nostres ordres una a una i no aprenia res.|Pregunta dónde creen que hay inteligencia artificial en su vida y si una IA piensa, siente o se equivoca. Apunta las respuestas en la pizarra en dos columnas, «creo que sí» y «creo que no», sin corregir. Recuerda a Bit: seguía nuestras órdenes una a una y no aprendía nada.",
          diu: ["On creieu que hi ha IA? Al mòbil? A la tele? A casa?|¿Dónde creéis que hay IA? ¿En el móvil? ¿En la tele? ¿En casa?",
            "Una IA pensa com nosaltres? Al final de la classe ho tornarem a votar.|¿Una IA piensa como nosotros? Al final de la clase lo volveremos a votar.",
            "En Bit feia el que li dèiem. Avui coneixerem programes que aprenen d'exemples.|Bit hacía lo que le decíamos. Hoy conoceremos programas que aprenden de ejemplos."],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 8, t: "Què és una IA?|¿Qué es una IA?", fase: 'teoria',
          fa: "Amb l'animació, explica que una IA rep molts exemples amb la seva etiqueta, hi busca patrons i després fa una predicció davant d'un cas nou. Posa exemples quotidians sense marques: el mòbil que reconeix una cara, un traductor, les recomanacions de vídeos. Remarca la diferència amb en Bit: ningú no li escriu una ordre per a cada cas.|Con la animación, explica que una IA recibe muchos ejemplos con su etiqueta, busca patrones y después hace una predicción ante un caso nuevo. Pon ejemplos cotidianos sin marcas: el móvil que reconoce una cara, un traductor, las recomendaciones de vídeos. Remarca la diferencia con Bit: nadie le escribe una orden para cada caso.",
          diu: ["Si us ensenyo deu fotos de gats i deu de gossos, aprendríeu a distingir-los? Doncs una IA fa una cosa semblant… però sense saber què és un gat.|Si os enseño diez fotos de gatos y diez de perros, ¿aprenderíais a distinguirlos? Pues una IA hace algo parecido… pero sin saber qué es un gato.",
            "Què és un patró? Una cosa que es repeteix. Quins patrons té un gat?|¿Qué es un patrón? Algo que se repite. ¿Qué patrones tiene un gato?"],
          slides: ['s4', 's5'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Sóc una IA: Blips i Blops|Soy una IA: Blips y Blops", fase: 'desconnectat',
          fa: "Grups de 3 o 4. Cada grup fa de IA: rep el sobre de la ronda 1 amb sis exemples (tres Blips i tres Blops) i ha d'escriure una regla per reconèixer-los. Després classifiquen les dues targetes de prova i expliquen la decisió. Molts grups faran servir el color i dubtaran amb la criatura verda de 3 ulls: és el moment clau. Reparteix llavors el sobre de la ronda 2 (exemples variats) i deixa que canviïn la regla. Tanca preguntant què ha passat: amb exemples poc variats, no podien saber quina característica importava. Això és un biaix.|Grupos de 3 o 4. Cada grupo hace de IA: recibe el sobre de la ronda 1 con seis ejemplos (tres Blips y tres Blops) y tiene que escribir una regla para reconocerlos. Después clasifican las dos tarjetas de prueba y explican la decisión. Muchos grupos usarán el color y dudarán con la criatura verde de 3 ojos: es el momento clave. Reparte entonces el sobre de la ronda 2 (ejemplos variados) y deja que cambien la regla. Cierra preguntando qué ha pasado: con ejemplos poco variados, no podían saber qué característica importaba. Eso es un sesgo.",
          diu: ["Sou una IA: no sabeu què és un Blip, només teniu exemples. Quina regla en traieu?|Sois una IA: no sabéis qué es un Blip, solo tenéis ejemplos. ¿Qué regla sacáis?",
            "La criatura verda de 3 ulls, és un Blip o un Blop? Per què dubteu?|La criatura verde de 3 ojos, ¿es un Blip o un Blop? ¿Por qué dudáis?",
            "Si us heu equivocat, no és culpa vostra: és culpa dels exemples!|Si os habéis equivocado, no es culpa vuestra: ¡es culpa de los ejemplos!"],
          slides: ['s6', 's7'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4|Grupos de 3 o 4" },
        { min: 7, t: "Biaix, errors i què no és una IA|Sesgo, errores y qué no es una IA", fase: 'teoria',
          fa: "Relaciona l'activitat amb l'animació del biaix: si tots els gats eren en un sofà, la IA aprèn «sofà = gat». Explica que amb persones un biaix pot ser injust. Després projecta l'AjudaBot de les aranyes i pregunta si és veritat: una IA pot dir coses falses amb molta seguretat. Acaba amb el que NO és una IA.|Relaciona la actividad con la animación del sesgo: si todos los gatos estaban en un sofá, la IA aprende «sofá = gato». Explica que con personas un sesgo puede ser injusto. Después proyecta a AjudaBot de las arañas y pregunta si es verdad: una IA puede decir cosas falsas con mucha seguridad. Termina con lo que NO es una IA.",
          diu: ["Quantes potes té una aranya? I què ha dit l'AjudaBot?|¿Cuántas patas tiene una araña? ¿Y qué ha dicho AjudaBot?",
            "Una IA no menteix a posta: tria paraules que solen anar juntes, i de vegades s'equivoca.|Una IA no miente a propósito: elige palabras que suelen ir juntas, y a veces se equivoca.",
            "Mireu la pissarra de l'inici: què canviaríeu ara?|Mirad la pizarra del principio: ¿qué cambiaríais ahora?"],
          slides: ['s8', 's9', 's10'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 13, t: "A l'ordinador: entrena la teva IA|En el ordenador: entrena tu IA", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al primer entrenament (fruita o llaminadura), anima'ls a tornar a ensenyar-li i etiquetar malament una fruita a propòsit per veure què passa. Al dels gats i gossos, si algú s'enfada perquè la IA falla, recorda-li la ronda 1 dels Blips.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el primer entrenamiento (fruta o golosina), anímales a volver a enseñarle y etiquetar mal una fruta a propósito para ver qué pasa. En el de gatos y perros, si alguien se enfada porque la IA falla, recuérdale la ronda 1 de los Blips.",
          diu: ["Què passa si li ensenyes una poma com si fos una llaminadura?|¿Qué pasa si le enseñas una manzana como si fuera una golosina?",
            "On són els gats a les fotos d'exemple? I els gossos?|¿Dónde están los gatos en las fotos de ejemplo? ¿Y los perros?",
            "La IA ha fallat: és culpa teva o dels exemples?|La IA ha fallado: ¿es culpa tuya o de los ejemplos?"],
          slides: ['s11'], app: "De «Recorda» fins a «Investiga»: la pregunta dels bulos, les dues històries, les targetes de «Descobreix», classificar màquines (IA o ordres fixes), entrenar la IA de fruites, entrenar la IA de gats i gossos i com l'arreglaries.|De «Recuerda» hasta «Investiga»: la pregunta de los bulos, las dos historias, las tarjetas de «Descubre», clasificar máquinas (IA u órdenes fijas), entrenar la IA de frutas, entrenar la IA de gatos y perros y cómo la arreglarías.", org: "Individual|Individual" },
        { min: 7, t: "Reptes: la IA, amb cap|Retos: la IA, con cabeza", fase: 'ordinador',
          fa: "Feu la pausa activa tots junts. Projecta les normes d'ús responsable i deixa-les a la vista mentre fan els reptes: arreglar el biaix amb exemples variats, el treball dels volcans, classificar bones i males idees i trobar els errors de l'AjudaBot.|Haced la pausa activa todos juntos. Proyecta las normas de uso responsable y déjalas a la vista mientras hacen los retos: arreglar el sesgo con ejemplos variados, el trabajo de los volcanes, clasificar buenas y malas ideas y encontrar los errores de AjudaBot.",
          diu: ["Ara que els exemples són variats, encerta més? Per què?|Ahora que los ejemplos son variados, ¿acierta más? ¿Por qué?",
            "Si l'AjudaBot et demana el nom i on vius, què fas?|Si AjudaBot te pide el nombre y dónde vives, ¿qué haces?"],
          slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: la teva IA|Crea: tu IA", fase: 'crea',
          fa: "Cada alumne/a entrena la seva IA dels animals que volen o neden i mira què fa amb el pingüí i el ratpenat. Després, en parelles, s'expliquen per què la IA ha encertat o fallat.|Cada alumno/a entrena su IA de los animales que vuelan o nadan y mira qué hace con el pingüino y el murciélago. Después, por parejas, se explican por qué la IA ha acertado o fallado.",
          diu: ["El pingüí té ales: per què la IA no diu que vola?|El pingüino tiene alas: ¿por qué la IA no dice que vuela?",
            "Explica al company/a com ha après la teva IA.|Explica al compañero/a cómo ha aprendido tu IA."],
          slides: ['s14'], app: "Pas «Crea»: la teva IA (vola o neda).|Paso «Crea»: tu IA (vuela o nada).", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Torna a la pissarra de l'inici i torneu a votar: una IA pensa? sent? s'equivoca? Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Vuelve a la pizarra del principio y volved a votar: ¿una IA piensa? ¿siente? ¿se equivoca? Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
          diu: ["Què és una IA, en una frase?|¿Qué es una IA, en una frase?",
            "Una cosa que no faríeu mai amb una IA?|¿Una cosa que no haríais nunca con una IA?"],
          slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Creu que la IA «pensa», «sap» o «sent» com una persona.|Cree que la IA «piensa», «sabe» o «siente» como una persona.",
          "Torna als Blips: ells han fet de IA sense saber què és un Blip, només comparant exemples. Pregunta: la IA sap què és un gat o compara amb el que ha vist?|Vuelve a los Blips: ellos han hecho de IA sin saber qué es un Blip, solo comparando ejemplos. Pregunta: ¿la IA sabe qué es un gato o compara con lo que ha visto?"],
        ["Pensa que si la IA falla és perquè ell o ella ho ha fet malament.|Piensa que si la IA falla es porque él o ella lo ha hecho mal.",
          "Separa culpa i causa: els errors vénen dels exemples. Mireu junts quins exemples tenia la IA i què hi faltava.|Separa culpa y causa: los errores vienen de los ejemplos. Mirad juntos qué ejemplos tenía la IA y qué faltaba."],
        ["Creu que el que diu un xat d'IA és sempre cert perquè sona segur.|Cree que lo que dice un chat de IA es siempre cierto porque suena seguro.",
          "Recorda l'AjudaBot de les aranyes. Pregunta-li com ho comprovaria i que busqui la dada en un llibre o una web fiable.|Recuerda a AjudaBot de las arañas. Pregúntale cómo lo comprobaría y que busque el dato en un libro o una web fiable."],
        ["Etiqueta a correcuita i després no entén per què la IA s'equivoca.|Etiqueta a toda prisa y después no entiende por qué la IA se equivoca.",
          "Anima'l a tornar a ensenyar-li amb calma i a comparar els resultats: és un experiment, no un examen.|Anímale a volver a enseñarle con calma y a comparar los resultados: es un experimento, no un examen."],
        ["No veu cap problema a escriure el seu nom, l'escola o a pujar fotos en una eina d'IA.|No ve ningún problema en escribir su nombre, la escuela o en subir fotos a una herramienta de IA.",
          "Relaciona-ho amb la unitat 1: qui pot veure les dades que posem a internet? No sabem on es guarden ni qui les fa servir.|Relaciónalo con la unidad 1: ¿quién puede ver los datos que ponemos en internet? No sabemos dónde se guardan ni quién los usa."]
      ],
      diff: {
        mes: "Per anar més enllà: pensar en IA que fan servir cada dia (recomanacions de vídeos, traductors, filtres de fotos) i debatre quins biaixos podrien tenir i a qui afectarien. Dissenyar a la fitxa una IA que ajudaria l'escola: què aprendria, de quins exemples i quins errors podria fer.|Para ir más allá: pensar en IA que usan cada día (recomendaciones de vídeos, traductores, filtros de fotos) y debatir qué sesgos podrían tener y a quién afectarían. Diseñar en la ficha una IA que ayudaría a la escuela: qué aprendería, de qué ejemplos y qué errores podría cometer.",
        menys: "Fer l'activitat dels Blips en petit grup amb el professor/a, llegint les targetes en veu alta. A l'app, centrar-se en l'entrenament de fruites i en el de gats i gossos, i fer servir la paraula «exemples» en lloc de «dades».|Hacer la actividad de los Blips en pequeño grupo con el profesor/a, leyendo las tarjetas en voz alta. En la app, centrarse en el entrenamiento de frutas y en el de gatos y perros, y usar la palabra «ejemplos» en lugar de «datos»."
      },
      aval: {
        ticket: ["Explica amb una frase què és una IA.|Explica con una frase qué es una IA.",
          "Digues una cosa que no faries mai amb una IA i per què.|Di una cosa que no harías nunca con una IA y por qué."],
        rubric: [
          ["Què és una IA|Qué es una IA", "Explica que aprèn d'exemples i fa prediccions, i que no pensa ni sent com una persona.|Explica que aprende de ejemplos y hace predicciones, y que no piensa ni siente como una persona.", "Sap que aprèn d'exemples, però encara creu que «entén» les coses.|Sabe que aprende de ejemplos, pero todavía cree que «entiende» las cosas."],
          ["Biaix|Sesgo", "Explica per què la IA ha fallat amb el gos del sofà i com s'arregla amb exemples variats.|Explica por qué la IA ha fallado con el perro del sofá y cómo se arregla con ejemplos variados.", "Veu que la IA falla, però no n'explica la causa.|Ve que la IA falla, pero no explica la causa."],
          ["Ús responsable|Uso responsable", "Diu les normes (dades, comprovar, honestedat) i les aplica als exemples de l'app.|Dice las normas (datos, comprobar, honestidad) y las aplica a los ejemplos de la app.", "En coneix una o dues, sobretot la de no posar-hi dades personals.|Conoce una o dos, sobre todo la de no poner datos personales."]
        ]
      },
      casa: "A casa, podeu repetir la sessió i entrenar junts la IA dels animals que volen o neden. Proposta per a la família: busqueu on hi ha IA a casa (el mòbil, el televisor, un assistent de veu…) i parleu de les vostres normes per fer-la servir: amb permís, sense dades personals, comprovant el que diu i dient sempre quan us ha ajudat.|En casa, podéis repetir la sesión y entrenar juntos la IA de los animales que vuelan o nadan. Propuesta para la familia: buscad dónde hay IA en casa (el móvil, el televisor, un asistente de voz…) y hablad de vuestras normas para usarla: con permiso, sin datos personales, comprobando lo que dice y diciendo siempre cuándo os ha ayudado.",
      slides: [
        { id: 's1', k: 'portada', t: "Què és la intel·ligència artificial?|¿Qué es la inteligencia artificial?", x: "Avui entrenarem una IA i descobrirem què sap fer… i què no.|Hoy entrenaremos una IA y descubriremos qué sabe hacer… y qué no.",
          nota: "Presenta l'objectiu: entendre la IA per dins per fer-la servir amb cap.|Presenta el objetivo: entender la IA por dentro para usarla con cabeza." },
        { id: 's2', k: 'pregunta', t: "Una màquina pot aprendre?|¿Una máquina puede aprender?", punts: ["On creieu que hi ha IA a la vostra vida?|¿Dónde creéis que hay IA en vuestra vida?", "Una IA pensa? Sent? S'equivoca?|¿Una IA piensa? ¿Siente? ¿Se equivoca?"],
          nota: "Apunta les respostes a la pissarra en dues columnes. Hi tornareu al final de la classe.|Apunta las respuestas en la pizarra en dos columnas. Volveréis a ellas al final de la clase." },
        { id: 's3', k: 'repas', t: "Recordeu en Bit?|¿Recordáis a Bit?", punts: ["En Bit seguia les nostres ordres, una a una.|Bit seguía nuestras órdenes, una a una.", "No aprenia res: si l'ordre era equivocada, xocava.|No aprendía nada: si la orden era equivocada, chocaba.", "Avui: programes que aprenen d'exemples.|Hoy: programas que aprenden de ejemplos."],
          nota: "Si el grup no ha fet el curs Robot, explica-ho com un programa que segueix una recepta pas a pas.|Si el grupo no ha hecho el curso Robot, explícalo como un programa que sigue una receta paso a paso." },
        { id: 's4', k: 'anim', t: "Una IA aprèn d'exemples|Una IA aprende de ejemplos", anim: 'd2ia', x: "Exemples amb la resposta → patrons → una predicció davant d'un cas nou.|Ejemplos con la respuesta → patrones → una predicción ante un caso nuevo.",
          nota: "Remarca la paraula «predicció»: la IA no sap segur què és la foto nova, endevina segons el que ha vist.|Remarca la palabra «predicción»: la IA no sabe seguro qué es la foto nueva, adivina según lo que ha visto." },
        { id: 's5', k: 'concepte', t: "Etiquetes i patrons|Etiquetas y patrones", pic: 'img/ment/igu.webp',
          punts: ["Li donem molts exemples amb l'etiqueta: «gat», «gos».|Le damos muchos ejemplos con la etiqueta: «gato», «perro».", "Busca patrons: coses que es repeteixen.|Busca patrones: cosas que se repiten.", "Davant d'un exemple nou, fa una predicció.|Ante un ejemplo nuevo, hace una predicción."],
          nota: "Demana patrons que distingeixin un gat d'un gos: orelles, nas, mida… Així entendran què «mira» una IA.|Pide patrones que distingan un gato de un perro: orejas, nariz, tamaño… Así entenderán qué «mira» una IA." },
        { id: 's6', k: 'activitat', t: "Sóc una IA: Blips i Blops|Soy una IA: Blips y Blops", timer: 12,
          punts: ["Ronda 1: mireu els exemples. Què té un Blip? I un Blop?|Ronda 1: mirad los ejemplos. ¿Qué tiene un Blip? ¿Y un Blop?", "Escriviu la vostra regla.|Escribid vuestra regla.", "Classifiqueu les targetes de prova: Blip o Blop?|Clasificad las tarjetas de prueba: ¿Blip o Blop?", "Ronda 2: arriben exemples nous. Canvia la vostra regla?|Ronda 2: llegan ejemplos nuevos. ¿Cambia vuestra regla?"],
          nota: "Regla secreta: Blips = 3 ulls; Blops = 1 ull. A la ronda 1 tots els Blips són blaus i tots els Blops verds: el color enganya. No la revelis fins al final.|Regla secreta: Blips = 3 ojos; Blops = 1 ojo. En la ronda 1 todos los Blips son azules y todos los Blops verdes: el color engaña. No la reveles hasta el final." },
        { id: 's7', k: 'activitat', t: "Què ha passat?|¿Qué ha pasado?",
          punts: ["A la ronda 1, quina regla heu fet servir: el color o els ulls?|En la ronda 1, ¿qué regla habéis usado: el color o los ojos?", "Per què dubtàveu amb les targetes de prova?|¿Por qué dudabais con las tarjetas de prueba?", "Què ha canviat amb exemples variats?|¿Qué ha cambiado con ejemplos variados?"],
          nota: "Conclusió per escriure a la pissarra: una IA aprèn el que hi ha als exemples, també els seus defectes.|Conclusión para escribir en la pizarra: una IA aprende lo que hay en los ejemplos, también sus defectos." },
        { id: 's8', k: 'anim', t: "Biaix: quan els exemples enganyen|Sesgo: cuando los ejemplos engañan", anim: 'd2biaix', x: "Tots els gats en un sofà… i la IA aprèn «sofà = gat».|Todos los gatos en un sofá… y la IA aprende «sofá = gato».",
          nota: "Per als grans: amb persones, si gairebé tots els exemples són d'un sol tipus de gent, la IA pot funcionar pitjor amb els altres. Per això cal revisar els exemples.|Para los mayores: con personas, si casi todos los ejemplos son de un solo tipo de gente, la IA puede funcionar peor con los demás. Por eso hay que revisar los ejemplos." },
        { id: 's9', k: 'media', t: "La IA també s'equivoca|La IA también se equivoca", x: "Respon molt segura… però les aranyes tenen 8 potes!|Responde muy segura… ¡pero las arañas tienen 8 patas!", media: SPIDER,
          nota: "Pregunta com ho podrien comprovar. Remarca que la IA no menteix a posta: no sap si el que diu és cert.|Pregunta cómo lo podrían comprobar. Remarca que la IA no miente a propósito: no sabe si lo que dice es cierto." },
        { id: 's10', k: 'concepte', t: "Què NO és una IA|Qué NO es una IA",
          punts: ["No pensa ni sent com una persona.|No piensa ni siente como una persona.", "No ho sap tot: només el que ha après dels exemples.|No lo sabe todo: solo lo que ha aprendido de los ejemplos.", "Es pot equivocar amb molta seguretat.|Se puede equivocar con mucha seguridad.", "No és màgia: la fan persones, amb exemples.|No es magia: la hacen personas, con ejemplos."],
          nota: "Torna a la pissarra de l'inici i marca les idees que ara canviarien.|Vuelve a la pizarra del principio y marca las ideas que ahora cambiarían." },
        { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13,
          punts: ["Obre la sessió «Què és la intel·ligència artificial?».|Abre la sesión «¿Qué es la inteligencia artificial?».", "Entrena la IA de fruites i prova d'etiquetar-ne una malament.|Entrena la IA de frutas y prueba a etiquetar una mal.", "Entrena la IA de gats i gossos: on són els animals?|Entrena la IA de gatos y perros: ¿dónde están los animales?", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
          nota: "Si algú s'enfada perquè la IA falla, recorda-li la ronda 1 dels Blips.|Si alguien se enfada porque la IA falla, recuérdale la ronda 1 de los Blips." },
        { id: 's12', k: 'repte', t: "Reptes: la IA, amb cap|Retos: la IA, con cabeza", timer: 7,
          punts: ["1. Arreglem el biaix|1. Arreglemos el sesgo", "2. El treball dels volcans|2. El trabajo de los volcanes", "3. Bona idea o millor no?|3. ¿Buena idea o mejor no?", "4. Els errors de l'AjudaBot|4. Los errores de AjudaBot"],
          nota: "Al repte 4, fes notar que hi ha dos tipus de problemes: dades falses i coses que no s'han de fer.|En el reto 4, haz notar que hay dos tipos de problemas: datos falsos y cosas que no se deben hacer." },
        { id: 's13', k: 'concepte', t: "La IA, amb cap|La IA, con cabeza", pic: 'img/ment/lli.webp',
          punts: ["Dades personals, fora.|Datos personales, fuera.", "Comprova el que diu.|Comprueba lo que dice.", "Si t'ajuda, digues-ho: no ho facis passar per teu.|Si te ayuda, dilo: no lo hagas pasar por tuyo.", "Amb un adult i seguint les normes de casa i de l'escola.|Con un adulto y siguiendo las normas de casa y de la escuela."],
          nota: "Explica que moltes eines d'IA tenen una edat mínima o demanen el permís de la família, i comenta les normes del centre.|Explica que muchas herramientas de IA tienen una edad mínima o piden el permiso de la familia, y comenta las normas del centro." },
        { id: 's14', k: 'activitat', t: "Crea: la teva IA|Crea: tu IA", timer: 5, x: "Entrena una IA que sàpiga si un animal vola o neda. Compte amb el pingüí!|Entrena una IA que sepa si un animal vuela o nada. ¡Cuidado con el pingüino!",
          nota: "En parelles, que s'expliquin per què la seva IA ha encertat o fallat.|Por parejas, que se expliquen por qué su IA ha acertado o fallado." },
        { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Una IA aprèn de molts exemples i fa prediccions.|Una IA aprende de muchos ejemplos y hace predicciones.", "No pensa ni sent; es pot equivocar i tenir biaix.|No piensa ni siente; se puede equivocar y tener sesgo.", "Dades fora, comprova i sigues honest/a.|Datos fuera, comprueba y sé honesto/a."],
          nota: "Torneu a votar les preguntes de l'inici i compareu-ho amb la pissarra.|Volved a votar las preguntas del principio y comparadlo con la pizarra." },
        { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Explica amb una frase què és una IA.|Explica con una frase qué es una IA.", "Digues una cosa que no faries mai amb una IA.|Di una cosa que no harías nunca con una IA."],
          nota: "Anota qui encara creu que la IA «pensa»: hi podeu tornar a la propera sessió.|Anota quién todavía cree que la IA «piensa»: podéis volver a ello en la próxima sesión." }
      ],
      print: [
        { id: 'p1', t: "Blips i Blops|Blips y Blops", k: 'targetes',
          intro: "Un paquet per grup. Retalleu-les i poseu en un sobre la ronda 1 i les proves, i en un altre la ronda 2. Si voleu, abans de començar, dibuixeu cada criatura a la seva targeta.|Un paquete por grupo. Recortadlas y poned en un sobre la ronda 1 y las pruebas, y en otro la ronda 2. Si queréis, antes de empezar, dibujad cada criatura en su tarjeta.",
          items: [
            { t: "Ronda 1 · BLIP · blau · 3 ulls · rodó ⭐|Ronda 1 · BLIP · azul · 3 ojos · redondo ⭐", n: 1 },
            { t: "Ronda 1 · BLIP · blau · 3 ulls · quadrat ⭐|Ronda 1 · BLIP · azul · 3 ojos · cuadrado ⭐", n: 1 },
            { t: "Ronda 1 · BLIP · blau · 3 ulls · triangular ⭐|Ronda 1 · BLIP · azul · 3 ojos · triangular ⭐", n: 1 },
            { t: "Ronda 1 · BLOP · verd · 1 ull · rodó ⭐|Ronda 1 · BLOP · verde · 1 ojo · redondo ⭐", n: 1 },
            { t: "Ronda 1 · BLOP · verd · 1 ull · quadrat ⭐|Ronda 1 · BLOP · verde · 1 ojo · cuadrado ⭐", n: 1 },
            { t: "Ronda 1 · BLOP · verd · 1 ull · triangular ⭐|Ronda 1 · BLOP · verde · 1 ojo · triangular ⭐", n: 1 },
            { t: "Prova A · Blip o Blop? · verd · 3 ulls · rodó ❓|Prueba A · ¿Blip o Blop? · verde · 3 ojos · redondo ❓", n: 1 },
            { t: "Prova B · Blip o Blop? · blau · 1 ull · quadrat ❓|Prueba B · ¿Blip o Blop? · azul · 1 ojo · cuadrado ❓", n: 1 },
            { t: "Ronda 2 · BLIP · verd · 3 ulls · quadrat ⭐|Ronda 2 · BLIP · verde · 3 ojos · cuadrado ⭐", n: 1 },
            { t: "Ronda 2 · BLIP · groc · 3 ulls · rodó ⭐|Ronda 2 · BLIP · amarillo · 3 ojos · redondo ⭐", n: 1 },
            { t: "Ronda 2 · BLOP · blau · 1 ull · triangular ⭐|Ronda 2 · BLOP · azul · 1 ojo · triangular ⭐", n: 1 },
            { t: "Ronda 2 · BLOP · vermell · 1 ull · rodó ⭐|Ronda 2 · BLOP · rojo · 1 ojo · redondo ⭐", n: 1 },
            { t: "Prova C · Blip o Blop? · vermell · 3 ulls · triangular ❓|Prueba C · ¿Blip o Blop? · rojo · 3 ojos · triangular ❓", n: 1 }
          ] },
        { id: 'p2', t: "Pensem com una IA|Pensemos como una IA", k: 'fitxa',
          intro: "Responeu en grup després de les dues rondes dels Blips i Blops.|Responded en grupo después de las dos rondas de los Blips y Blops.",
          items: [
            { q: "Ronda 1: quina regla vau fer servir per reconèixer un Blip?|Ronda 1: ¿qué regla usasteis para reconocer un Blip?", sol: "Molts grups diran «són blaus». És una regla raonable amb aquells exemples: el problema eren els exemples, no el grup.|Muchos grupos dirán «son azules». Es una regla razonable con esos ejemplos: el problema eran los ejemplos, no el grupo." },
            { q: "Per què dubtàveu amb la prova A (verda i amb 3 ulls)?|¿Por qué dudabais con la prueba A (verde y con 3 ojos)?", sol: "Perquè als exemples el color i els ulls anaven sempre junts: no es podia saber quina de les dues coses importava.|Porque en los ejemplos el color y los ojos iban siempre juntos: no se podía saber cuál de las dos cosas importaba." },
            { q: "Ronda 2: quina és la regla de veritat? Com són les proves A, B i C?|Ronda 2: ¿cuál es la regla de verdad? ¿Cómo son las pruebas A, B y C?", sol: "Els Blips tenen 3 ulls i els Blops, 1; el color no hi importa. A i C són Blips; B és un Blop.|Los Blips tienen 3 ojos y los Blops, 1; el color no importa. A y C son Blips; B es un Blop." },
            { q: "Què ha de fer qui crea una IA perquè no tingui biaix?|¿Qué tiene que hacer quien crea una IA para que no tenga sesgo?", sol: "Donar-li exemples variats, de tota mena, i provar-la amb casos diferents abans de fer-la servir.|Darle ejemplos variados, de todo tipo, y probarla con casos diferentes antes de usarla." },
            { q: "Per anar més enllà: inventeu una IA que ajudaria la vostra escola. Què aprendria i de quins exemples? Quins errors podria fer?|Para ir más allá: inventad una IA que ayudaría a vuestra escuela. ¿Qué aprendería y de qué ejemplos? ¿Qué errores podría cometer?", sol: "Resposta oberta. Valoreu que pensin en els exemples, en els errors possibles i en no fer servir dades personals.|Respuesta abierta. Valorad que piensen en los ejemplos, en los errores posibles y en no usar datos personales." }
          ] }
      ]
    },

    /* ---------- Sessió 3 · Respecte a la xarxa ---------- */
    'd2-3': {
      obj: [
        "L'alumne/a explica que darrere de cada pantalla hi ha una persona i escriu missatges amables i concrets.|El alumno/a explica que detrás de cada pantalla hay una persona y escribe mensajes amables y concretos.",
        "L'alumne/a distingeix el ciberassetjament (fer mal de manera repetida) d'una discussió puntual i sap que mai no és culpa de qui el pateix.|El alumno/a distingue el ciberacoso (hacer daño de manera repetida) de una discusión puntual y sabe que nunca es culpa de quien lo sufre.",
        "L'alumne/a proposa accions d'espectador/a actiu/va: donar suport, no sumar-s'hi i explicar-ho a un adult.|El alumno/a propone acciones de espectador/a activo/a: dar apoyo, no sumarse y contárselo a un adulto.",
        "L'alumne/a coneix els passos si alguna cosa li fa mal: no respondre amb més mal, guardar una prova, bloquejar i demanar ajuda a un adult de confiança.|El alumno/a conoce los pasos si algo le hace daño: no responder con más daño, guardar una prueba, bloquear y pedir ayuda a un adulto de confianza."
      ],
      comp: [
        "Competència digital (CD2): comunicar-se a la xarxa amb respecte|Competencia digital (CD2): comunicarse en la red con respeto",
        "Competència digital (CD4): benestar digital i protecció davant del ciberassetjament|Competencia digital (CD4): bienestar digital y protección ante el ciberacoso",
        "Competència personal, social i d'aprendre a aprendre: empatia, gestió de les emocions i demanar ajuda|Competencia personal, social y de aprender a aprender: empatía, gestión de las emociones y pedir ayuda",
        "Competència ciutadana: convivència, respecte i rebuig de qualsevol forma de violència|Competencia ciudadana: convivencia, respeto y rechazo de cualquier forma de violencia"
      ],
      vocab: [
        ["Ciberassetjament|Ciberacoso", "Fer mal a algú a través de la xarxa una vegada i una altra.|Hacer daño a alguien a través de la red una y otra vez."],
        ["Espectador/a actiu/va|Espectador/a activo/a", "Qui veu que algú ho passa malament i l'ajuda de manera segura.|Quien ve que alguien lo pasa mal y le ayuda de manera segura."],
        ["Empatia|Empatía", "Posar-se al lloc de l'altre i imaginar com se sent.|Ponerse en el lugar del otro e imaginar cómo se siente."],
        ["Bloquejar|Bloquear", "Fer que una persona ja no et pugui escriure.|Hacer que una persona ya no te pueda escribir."],
        ["Denunciar (a l'app)|Denunciar (en la app)", "Avisar l'app que algú fa mal, amb el botó que hi ha per fer-ho.|Avisar a la app de que alguien hace daño, con el botón que hay para hacerlo."],
        ["Captura de pantalla|Captura de pantalla", "Una foto del que es veu a la pantalla, que serveix de prova.|Una foto de lo que se ve en la pantalla, que sirve de prueba."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Respecte a la xarxa»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Respeto en la red»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Un paquet de targetes de situacions per grup i la fitxa «Reescriu el missatge»|Un paquete de tarjetas de situaciones por grupo y la ficha «Reescribe el mensaje»",
          "Papers petits o notes adhesives i una capsa per al banc de missatges amables|Papeles pequeños o notas adhesivas y una caja para el banco de mensajes amables"
        ],
        imprimir: ["Situacions: què faria un espectador/a actiu/va?|Situaciones: ¿qué haría un espectador/a activo/a?", "Reescriu el missatge|Reescribe el mensaje"],
        prep: [
          "Llegir les situacions i canviar qualsevol nom que coincideixi amb el d'un alumne/a de la classe.|Leer las situaciones y cambiar cualquier nombre que coincida con el de un alumno/a de la clase.",
          "Conèixer el protocol del centre per si algun alumne/a explica un cas real: agrair la confiança, no prometre secret, informar la tutoria i la família.|Conocer el protocolo del centro por si algún alumno/a cuenta un caso real: agradecer la confianza, no prometer secreto, informar a la tutoría y a la familia.",
          "Tenir a mà el telèfon d'ajuda a la infància i l'adolescència: 116 111 (gratuït i confidencial).|Tener a mano el teléfono de ayuda a la infancia y la adolescencia: 116 111 (gratuito y confidencial).",
          "Preparar papers amb el nom de cada alumne/a per sortejar a qui escriu cadascú el missatge amable.|Preparar papeles con el nombre de cada alumno/a para sortear a quién escribe cada uno el mensaje amable."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: com et sents quan…?|Bienvenida: ¿cómo te sientes cuando…?", fase: 'inici',
          fa: "Comença amb tres preguntes d'emocions i deixa que responguin amb el cos (polze amunt, al mig o avall). Projecta la publicació del drac i compara els dos comentaris: un «ok.» sec i un comentari concret. Pregunta com se sentiria l'Iu amb cadascun.|Empieza con tres preguntas de emociones y deja que respondan con el cuerpo (pulgar arriba, en medio o abajo). Proyecta la publicación del dragón y compara los dos comentarios: un «ok.» seco y un comentario concreto. Pregunta cómo se sentiría Iu con cada uno.",
          diu: ["Com et sents quan algú et respon només «ok.»?|¿Cómo te sientes cuando alguien te responde solo «ok.»?",
            "A la xarxa no veiem la cara de l'altre. Què ens perdem?|En la red no vemos la cara del otro. ¿Qué nos perdemos?",
            "Abans d'enviar: ho diria si el tingués al davant?|Antes de enviar: ¿lo diría si lo tuviera delante?"],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Ciberassetjament i espectadors actius|Ciberacoso y espectadores activos", fase: 'teoria',
          fa: "Projecta el xat de grup (sense llegir-lo amb to de burla) i pregunta com se sent l'Àlex. Explica què és el ciberassetjament i què no ho és (una discussió d'un dia). Deixa molt clar que mai no és culpa de qui el pateix. Presenta l'espectador/a actiu/va amb l'animació i fixa't en la Nora del xat: ha fet les tres coses?|Proyecta el chat de grupo (sin leerlo con tono de burla) y pregunta cómo se siente Álex. Explica qué es el ciberacoso y qué no lo es (una discusión de un día). Deja muy claro que nunca es culpa de quien lo sufre. Presenta al espectador/a activo/a con la animación y fijaos en Nora del chat: ¿ha hecho las tres cosas?",
          diu: ["Com creieu que se sent l'Àlex quan veu els 😂?|¿Cómo creéis que se siente Álex cuando ve los 😂?",
            "Riure també és sumar-s'hi. Què podria fer la resta del grup?|Reírse también es sumarse. ¿Qué podría hacer el resto del grupo?",
            "No cal enfrontar-se a ningú: explicar-ho a un adult ja és ser valent/a.|No hace falta enfrentarse a nadie: contárselo a un adulto ya es ser valiente."],
          slides: ['s4', 's5', 's6'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Què faries? Escenes d'espectadors actius|¿Qué harías? Escenas de espectadores activos", fase: 'desconnectat',
          fa: "Grups de 3 o 4. Cada grup rep una targeta de situació, pensa tres coses que podria fer un espectador/a actiu/va i prepara una escena de 30 segons on algú dona suport (ningú no fa d'agressor amb insults de veritat). Els papers són voluntaris. Cada grup representa l'escena i la resta endevina les accions: suport, no sumar-s'hi, avisar un adult. Si queda temps, completeu la fitxa «Reescriu el missatge» en parelles.|Grupos de 3 o 4. Cada grupo recibe una tarjeta de situación, piensa tres cosas que podría hacer un espectador/a activo/a y prepara una escena de 30 segundos donde alguien da apoyo (nadie hace de agresor con insultos de verdad). Los papeles son voluntarios. Cada grupo representa la escena y el resto adivina las acciones: apoyo, no sumarse, avisar a un adulto. Si queda tiempo, completad la ficha «Reescribe el mensaje» por parejas.",
          diu: ["Quines tres coses podria fer el qui ho veu?|¿Qué tres cosas podría hacer quien lo ve?",
            "A qui ho explicaríeu? I com ho diríeu?|¿A quién se lo contaríais? ¿Y cómo lo diríais?",
            "Si alguna situació us recorda una cosa real, en podem parlar en privat després.|Si alguna situación os recuerda algo real, podemos hablarlo en privado después."],
          slides: ['s7', 's8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4 i després tot el grup|Grupos de 3 o 4 y después todo el grupo" },
        { min: 5, t: "El semàfor i els passos per demanar ajuda|El semáforo y los pasos para pedir ayuda", fase: 'teoria',
          fa: "Explica el semàfor del missatge (vermell, groc, verd) amb un exemple de la fitxa. Després presenta els quatre passos si alguna cosa fa mal: atura't, guarda una prova, bloqueja i denuncia, explica-ho a un adult. Remarca la diferència entre explicar-ho i «xivar-se», i dona el telèfon 116 111.|Explica el semáforo del mensaje (rojo, amarillo, verde) con un ejemplo de la ficha. Después presenta los cuatro pasos si algo hace daño: para, guarda una prueba, bloquea y denuncia, cuéntaselo a un adulto. Remarca la diferencia entre contarlo y «chivarse», y da el teléfono 116 111.",
          diu: ["Quan estàs enfadat/da, és bon moment per escriure? Semàfor vermell!|Cuando estás enfadado/a, ¿es buen momento para escribir? ¡Semáforo rojo!",
            "Explicar-ho no és xivar-se: és cuidar-te o cuidar algú.|Contarlo no es chivarse: es cuidarte o cuidar a alguien."],
          slides: ['s9', 's10'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Fixa't en qui dubta a l'activitat «Fa sentir bé o pot fer mal?» i en qui tria «segur que alguna cosa has fet» a la pregunta de l'Àlex: parla-hi amb calma.|Cada alumno/a avanza a su ritmo hasta la pausa activa. Fíjate en quién duda en la actividad «¿Hace sentir bien o puede hacer daño?» y en quién elige «seguro que algo has hecho» en la pregunta de Álex: habla con él o ella con calma.",
          diu: ["Llegeix-lo en veu baixa posant-te al lloc de qui el rep.|Léelo en voz baja poniéndote en el lugar de quien lo recibe.",
            "Al xat de la classe, quin és el missatge que ajuda?|En el chat de la clase, ¿cuál es el mensaje que ayuda?"],
          slides: ['s11'], app: "De «Recorda» fins a «Investiga»: la pregunta de la IA, la missió, les targetes de «Descobreix», classificar missatges, la pregunta del ciberassetjament, els missatges del xat de la classe i què li diries a l'Àlex.|De «Recuerda» hasta «Investiga»: la pregunta de la IA, la misión, las tarjetas de «Descubre», clasificar mensajes, la pregunta del ciberacoso, los mensajes del chat de la clase y qué le dirías a Álex.", org: "Individual|Individual" },
        { min: 8, t: "Reptes: actua!|Retos: ¡actúa!", fase: 'ordinador',
          fa: "Feu junts la respiració del globus de la pausa activa. Després, els tres reptes: la conversa privada amb l'Àlex, ordenar els passos i el missatge del desconegut a FotoNuvi. Anima'ls a provar també respostes equivocades per veure què passa: les converses expliquen per què i deixen rectificar.|Haced juntos la respiración del globo de la pausa activa. Después, los tres retos: la conversación privada con Álex, ordenar los pasos y el mensaje del desconocido en FotoNuvi. Anímales a probar también respuestas equivocadas para ver qué pasa: las conversaciones explican por qué y dejan rectificar.",
          diu: ["Respirar abans de respondre també és una eina.|Respirar antes de responder también es una herramienta.",
            "Què li ha dit la mare al final? Per què és important?|¿Qué le ha dicho la madre al final? ¿Por qué es importante?"],
          slides: ['s12', 's13'], app: "«Pausa activa» i els tres reptes de «Reptes».|«Pausa activa» y los tres retos de «Retos».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: el banc de missatges amables|Crea: el banco de mensajes amables", fase: 'crea',
          fa: "Cada alumne/a treu un nom a l'atzar i escriu a aquella persona un missatge amable i concret, passant-lo pel semàfor. Els missatges van a la capsa; revisa'ls abans de repartir-los al final de la classe o a la propera sessió. Així tothom en rep un. A l'app, el pas «Crea» proposa fer-ne més a casa.|Cada alumno/a saca un nombre al azar y escribe a esa persona un mensaje amable y concreto, pasándolo por el semáforo. Los mensajes van a la caja; revísalos antes de repartirlos al final de la clase o en la próxima sesión. Así todo el mundo recibe uno. En la app, el paso «Crea» propone hacer más en casa.",
          diu: ["No només «ets guai»: què t'agrada d'aquesta persona?|No solo «eres guay»: ¿qué te gusta de esta persona?",
            "Si no la coneixes gaire, pensa en una cosa que li hagis vist fer bé.|Si no la conoces mucho, piensa en algo que le hayas visto hacer bien."],
          slides: ['s14'], app: "Pas «Crea»: el banc de missatges amables (es pot tocar «Ara no» i fer-lo a casa).|Paso «Crea»: el banco de mensajes amables (se puede tocar «Ahora no» y hacerlo en casa).", org: "Individual|Individual" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa el resum, deixa que facin les preguntes finals de l'app i fes el tiquet a la porta. Recorda'ls que la teva porta és oberta si mai necessiten parlar d'alguna cosa.|Repasa el resumen, deja que hagan las preguntas finales de la app y haz el ticket en la puerta. Recuérdales que tu puerta está abierta si alguna vez necesitan hablar de algo.",
          diu: ["Què fa un espectador/a actiu/va?|¿Qué hace un espectador/a activo/a?",
            "Si alguna cosa a la xarxa us fa mal, a qui ho explicaríeu?|Si algo en la red os hace daño, ¿a quién se lo contaríais?"],
          slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Diu que «només era una broma» quan algú s'ha sentit malament.|Dice que «solo era una broma» cuando alguien se ha sentido mal.",
          "Pregunta: ha rigut tothom, també la persona de qui es parlava? Una broma només ho és si riu tothom.|Pregunta: ¿se ha reído todo el mundo, también la persona de quien se hablaba? Una broma solo lo es si se ríe todo el mundo."],
        ["Pensa que explicar-ho a un adult és «xivar-se» o que empitjorarà les coses.|Piensa que contárselo a un adulto es «chivarse» o que empeorará las cosas.",
          "Diferencia xivar-se (voler que castiguin algú) d'explicar-ho (cuidar). Explica que els adults poden ajudar amb discreció.|Diferencia chivarse (querer que castiguen a alguien) de contarlo (cuidar). Explica que los adultos pueden ayudar con discreción."],
        ["Proposa respondre amb insults o venjar-se.|Propone responder con insultos o vengarse.",
          "Valida l'emoció (és normal sentir ràbia) i pregunta què passaria després. Torneu junts a la respiració del globus.|Valida la emoción (es normal sentir rabia) y pregunta qué pasaría después. Volved juntos a la respiración del globo."],
        ["Creu que qui pateix ciberassetjament «alguna cosa haurà fet».|Cree que quien sufre ciberacoso «algo habrá hecho».",
          "Sigues ferm/a i amable: ningú no es mereix que el tractin malament i mai no és culpa de qui ho pateix.|Sé firme y amable: nadie se merece que lo traten mal y nunca es culpa de quien lo sufre."],
        ["Durant les escenes, algú explica o insinua un cas real de la classe.|Durante las escenas, alguien cuenta o insinúa un caso real de la clase.",
          "Atura l'escena amb calma, agraeix la confiança, no en parlis davant de tothom i segueix el protocol del centre (tutoria i família).|Para la escena con calma, agradece la confianza, no hables de ello delante de todos y sigue el protocolo del centro (tutoría y familia)."]
      ],
      diff: {
        mes: "Per anar més enllà: escriure cinc normes de respecte per al grup de xat de la classe, o pensar com hauria de ser el botó de denunciar d'una app perquè fos fàcil i segur de fer servir. Debatre per què a la xarxa costa més posar-se al lloc de l'altre.|Para ir más allá: escribir cinco normas de respeto para el grupo de chat de la clase, o pensar cómo debería ser el botón de denunciar de una app para que fuera fácil y seguro de usar. Debatir por qué en la red cuesta más ponerse en el lugar del otro.",
        menys: "Treballar una sola situació en parella amb el professor/a, triant entre tres targetes d'acció (dono suport, no m'hi sumo, ho dic a un adult). A l'app, llegir en veu alta les converses amb un company/a.|Trabajar una sola situación en pareja con el profesor/a, eligiendo entre tres tarjetas de acción (doy apoyo, no me sumo, se lo digo a un adulto). En la app, leer en voz alta las conversaciones con un compañero/a."
      },
      aval: {
        ticket: ["Digues què fa un espectador/a actiu/va.|Di qué hace un espectador/a activo/a.",
          "Digues a qui demanaries ajuda si alguna cosa a la xarxa et fes mal.|Di a quién pedirías ayuda si algo en la red te hiciera daño."],
        rubric: [
          ["Respecte i empatia|Respeto y empatía", "Escriu missatges amables i concrets i sap reescriure un missatge que fa mal.|Escribe mensajes amables y concretos y sabe reescribir un mensaje que hace daño.", "Reconeix els missatges que fan mal, però li costa reescriure'ls.|Reconoce los mensajes que hacen daño, pero le cuesta reescribirlos."],
          ["Espectador/a actiu/va|Espectador/a activo/a", "Proposa accions segures: donar suport, no sumar-s'hi i explicar-ho a un adult.|Propone acciones seguras: dar apoyo, no sumarse y contárselo a un adulto.", "Proposa una sola acció o tendeix a «no ficar-s'hi».|Propone una sola acción o tiende a «no meterse»."],
          ["Demanar ajuda|Pedir ayuda", "Sap els passos (no respondre, prova, bloquejar, adult) i diu que no és culpa de qui ho pateix.|Sabe los pasos (no responder, prueba, bloquear, adulto) y dice que no es culpa de quien lo sufre.", "Sap que ho ha de dir a un adult, però no coneix els altres passos.|Sabe que tiene que decírselo a un adulto, pero no conoce los otros pasos."]
        ]
      },
      casa: "A casa, podeu repetir la sessió i fer junts el «banc de missatges amables» amb la família. Proposta: parleu de qui són els adults de confiança de l'infant (dins i fora de casa) i deixeu clar que pot explicar qualsevol cosa que li passi a la xarxa sense por de perdre el mòbil ni de ser renyat. Si mai ho necessiteu, el telèfon d'ajuda a la infància i l'adolescència és el 116 111 (gratuït i confidencial).|En casa, podéis repetir la sesión y hacer juntos el «banco de mensajes amables» con la familia. Propuesta: hablad de quiénes son los adultos de confianza del niño o la niña (dentro y fuera de casa) y dejad claro que puede contar cualquier cosa que le pase en la red sin miedo a perder el móvil ni a que le riñan. Si alguna vez lo necesitáis, el teléfono de ayuda a la infancia y la adolescencia es el 116 111 (gratuito y confidencial).",
      slides: [
        { id: 's1', k: 'portada', t: "Respecte a la xarxa|Respeto en la red", x: "Avui aprendrem a fer que a la xarxa tothom estigui bé, i què fer si alguna cosa fa mal.|Hoy aprenderemos a hacer que en la red todo el mundo esté bien, y qué hacer si algo hace daño.",
          nota: "Crea un clima tranquil: avui parlarem d'emocions i ningú no ha d'explicar res que no vulgui.|Crea un clima tranquilo: hoy hablaremos de emociones y nadie tiene que contar nada que no quiera." },
        { id: 's2', k: 'pregunta', t: "Com et sents quan…|Cómo te sientes cuando…", punts: ["…algú et respon només «ok.»?|…alguien te responde solo «ok.»?", "…algú et diu una cosa bonica i concreta?|…alguien te dice algo bonito y concreto?", "…et deixen fora d'un grup?|…te dejan fuera de un grupo?"],
          nota: "Que responguin amb el polze (amunt, al mig, avall). No cal que expliquin per què.|Que respondan con el pulgar (arriba, en medio, abajo). No hace falta que expliquen por qué." },
        { id: 's3', k: 'media', t: "«ok.» o «m'encanta»?|¿«ok.» o «me encanta»?", x: "Com se sentiria l'Iu amb cada comentari?|¿Cómo se sentiría Iu con cada comentario?", media: DRAC,
          nota: "Fes notar que el «ok.» potser no volia fer mal, però sense cara ni to sembla sec. Un comentari concret es nota molt.|Haz notar que el «ok.» quizá no quería hacer daño, pero sin cara ni tono parece seco. Un comentario concreto se nota mucho." },
        { id: 's4', k: 'media', t: "Quan fer mal es repeteix|Cuando hacer daño se repite", x: "Com se sent l'Àlex? Qui l'ajuda?|¿Cómo se siente Álex? ¿Quién le ayuda?", media: GRUP,
          nota: "No llegeixis els missatges amb to de burla. Busqueu junts el missatge de la Nora.|No leas los mensajes con tono de burla. Buscad juntos el mensaje de Nora." },
        { id: 's5', k: 'concepte', t: "Ciberassetjament: què és i què no és|Ciberacoso: qué es y qué no es",
          punts: ["És fer mal a algú a la xarxa una vegada i una altra.|Es hacer daño a alguien en la red una y otra vez.", "Burles, insults, fotos sense permís, deixar fora a posta…|Burlas, insultos, fotos sin permiso, dejar fuera a propósito…", "Una discussió d'un dia no ho és (però també cal respecte).|Una discusión de un día no lo es (pero también hace falta respeto).", "Mai no és culpa de qui ho pateix.|Nunca es culpa de quien lo sufre."],
          nota: "Insisteix en l'última frase: és la que més pot ajudar un infant que ho estigui passant malament.|Insiste en la última frase: es la que más puede ayudar a un niño o niña que lo esté pasando mal." },
        { id: 's6', k: 'anim', t: "Espectador/a actiu/va|Espectador/a activo/a", anim: 'd2esp', x: "Dona suport, no s'hi suma i ho explica a un adult.|Da apoyo, no se suma y se lo cuenta a un adulto.",
          nota: "Pregunta quina de les tres accions els sembla més fàcil i quina més difícil, i per què.|Pregunta cuál de las tres acciones les parece más fácil y cuál más difícil, y por qué." },
        { id: 's7', k: 'activitat', t: "Què faries?|¿Qué harías?", timer: 12,
          punts: ["Llegiu la situació de la targeta.|Leed la situación de la tarjeta.", "Penseu tres coses que podria fer un espectador/a actiu/va.|Pensad tres cosas que podría hacer un espectador/a activo/a.", "Prepareu una escena de 30 segons on algú dona suport.|Preparad una escena de 30 segundos donde alguien da apoyo.", "La resta de la classe endevina les accions.|El resto de la clase adivina las acciones."],
          nota: "Els papers són voluntaris i de mentida, amb noms inventats. Ningú no fa de víctima si no vol.|Los papeles son voluntarios y de mentira, con nombres inventados. Nadie hace de víctima si no quiere." },
        { id: 's8', k: 'activitat', t: "Les regles de les escenes|Las reglas de las escenas",
          punts: ["Res d'insults de veritat, ni en broma.|Nada de insultos de verdad, ni en broma.", "Parlem de les accions, no de persones de la classe.|Hablamos de las acciones, no de personas de la clase.", "Si alguna cosa et recorda un cas real, en pots parlar amb mi després.|Si algo te recuerda un caso real, puedes hablarlo conmigo después."],
          nota: "Deixa-la projectada mentre preparen i representen les escenes.|Déjala proyectada mientras preparan y representan las escenas." },
        { id: 's9', k: 'concepte', t: "El semàfor del missatge|El semáforo del mensaje", pic: 'img/ment/atu.webp',
          punts: ["Vermell: estàs enfadat/da? Atura't.|Rojo: ¿estás enfadado/a? Para.", "Groc: és cert? és amable? cal dir-ho?|Amarillo: ¿es cierto? ¿es amable? ¿hace falta decirlo?", "Verd: ara sí, envia'l.|Verde: ahora sí, envíalo."],
          nota: "Fes passar pel semàfor un missatge de la fitxa «Reescriu el missatge» tots junts.|Haced pasar por el semáforo un mensaje de la ficha «Reescribe el mensaje» todos juntos." },
        { id: 's10', k: 'anim', t: "Si alguna cosa et fa mal|Si algo te hace daño", anim: 'd2ajuda', x: "Atura't, guarda una prova, bloqueja i explica-ho a un adult. Mai no és culpa teva.|Para, guarda una prueba, bloquea y cuéntaselo a un adulto. Nunca es culpa tuya.",
          nota: "Explica que totes les apps tenen opcions per bloquejar i denunciar, i que es fan millor amb un adult.|Explica que todas las apps tienen opciones para bloquear y denunciar, y que se hacen mejor con un adulto." },
        { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12,
          punts: ["Obre la sessió «Respecte a la xarxa».|Abre la sesión «Respeto en la red».", "Fes la missió, «Descobreix» i «Mans a l'obra».|Haz la misión, «Descubre» y «Manos a la obra».", "A «Investiga», troba els missatges del xat de la classe.|En «Investiga», encuentra los mensajes del chat de la clase.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
          nota: "Passeja i fixa't en les respostes que culpabilitzen la víctima per parlar-ne amb calma.|Pasea y fíjate en las respuestas que culpabilizan a la víctima para hablarlo con calma." },
        { id: 's12', k: 'repte', t: "Reptes: actua!|Retos: ¡actúa!", timer: 8,
          punts: ["1. L'Àlex t'escriu en privat|1. Álex te escribe en privado", "2. Els passos, en ordre|2. Los pasos, en orden", "3. Un desconegut a FotoNuvi|3. Un desconocido en FotoNuvi"],
          nota: "Anima'ls a provar també una resposta equivocada: la conversa explica per què i deixa rectificar.|Anímales a probar también una respuesta equivocada: la conversación explica por qué y deja rectificar." },
        { id: 's13', k: 'pregunta', t: "Explicar-ho no és xivar-se|Contarlo no es chivarse",
          punts: ["Xivar-se és voler que castiguin algú.|Chivarse es querer que castiguen a alguien.", "Explicar-ho és cuidar-te o cuidar algú que ho passa malament.|Contarlo es cuidarte o cuidar a alguien que lo pasa mal.", "Adults de confiança: família, tutor/a, monitor/a…|Adultos de confianza: familia, tutor/a, monitor/a…", "Telèfon d'ajuda a la infància: 116 111 (gratuït).|Teléfono de ayuda a la infancia: 116 111 (gratuito)."],
          nota: "Que cadascú pensi en silenci en dos adults de confiança. No cal que els diguin en veu alta.|Que cada uno piense en silencio en dos adultos de confianza. No hace falta que los digan en voz alta." },
        { id: 's14', k: 'activitat', t: "Crea: el banc de missatges amables|Crea: el banco de mensajes amables", timer: 5,
          punts: ["Treu un nom de la capsa.|Saca un nombre de la caja.", "Escriu-li un missatge amable i concret.|Escríbele un mensaje amable y concreto.", "Passa'l pel semàfor i posa'l a la capsa.|Pásalo por el semáforo y ponlo en la caja."],
          nota: "Revisa els missatges abans de repartir-los. Si algú ha tret el seu propi nom, que en tregui un altre.|Revisa los mensajes antes de repartirlos. Si alguien ha sacado su propio nombre, que saque otro." },
        { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Darrere de cada pantalla hi ha una persona.|Detrás de cada pantalla hay una persona.", "Espectador/a actiu/va: suport, no sumar-s'hi i avisar un adult.|Espectador/a activo/a: apoyo, no sumarse y avisar a un adulto.", "Si alguna cosa fa mal, demana ajuda: mai no és culpa teva.|Si algo hace daño, pide ayuda: nunca es culpa tuya."],
          nota: "Acaba amb un missatge positiu: la majoria de la gent vol una xarxa amable, i ells en poden ser part.|Termina con un mensaje positivo: la mayoría de la gente quiere una red amable, y ellos pueden ser parte de ella." },
        { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues què fa un espectador/a actiu/va.|Di qué hace un espectador/a activo/a.", "Digues a qui demanaries ajuda.|Di a quién pedirías ayuda."],
          nota: "Si algun alumne/a no sap a qui demanar ajuda, parla-hi en privat i informa la tutoria.|Si algún alumno/a no sabe a quién pedir ayuda, habla con él o ella en privado e informa a la tutoría." }
      ],
      print: [
        { id: 'p1', t: "Situacions: què faria un espectador/a actiu/va?|Situaciones: ¿qué haría un espectador/a activo/a?", k: 'targetes',
          intro: "Una targeta per grup. Totes les situacions i els noms són inventats. Penseu tres coses que podria fer un espectador/a actiu/va i prepareu una escena curta on algú dona suport.|Una tarjeta por grupo. Todas las situaciones y los nombres son inventados. Pensad tres cosas que podría hacer un espectador/a activo/a y preparad una escena corta donde alguien da apoyo.",
          items: [
            { t: "Al xat de la classe pengen la foto d'un company fent una ganyota i molts hi posen rialles 📱|En el chat de la clase cuelgan la foto de un compañero haciendo una mueca y muchos ponen risas 📱", n: 1 },
            { t: "En una app de dibuixos, algú escriu cada dia a una nena que els seus dibuixos fan pena ✏|En una app de dibujos, alguien escribe cada día a una niña que sus dibujos dan pena ✏", n: 1 },
            { t: "Han fet un grup per a una festa i hi són tots menys una companya, a posta 💬|Han hecho un grupo para una fiesta y están todos menos una compañera, a propósito 💬", n: 1 },
            { t: "Algú ha creat un perfil fals amb el nom d'un company per riure-se'n 🎭|Alguien ha creado un perfil falso con el nombre de un compañero para reírse de él 🎭", n: 1 },
            { t: "Un company rep missatges que diuen que ningú no el vol a l'equip 😟|Un compañero recibe mensajes que dicen que nadie lo quiere en el equipo 😟", n: 1 },
            { t: "Al grup de l'equip de bàsquet es burlen d'una nena perquè ha fallat un tir 🏀|En el grupo del equipo de baloncesto se burlan de una niña porque ha fallado un tiro 🏀", n: 1 },
            { t: "Algú reenvia un àudio d'una companya cantant per riure-se'n 🎧|Alguien reenvía un audio de una compañera cantando para reírse de ella 🎧", n: 1 },
            { t: "Un amic t'ensenya un missatge que insulta algú i et demana que el comparteixis 🛡|Un amigo te enseña un mensaje que insulta a alguien y te pide que lo compartas 🛡", n: 1 }
          ] },
        { id: 'p2', t: "Reescriu el missatge|Reescribe el mensaje", k: 'fitxa',
          intro: "Passa cada missatge pel semàfor i reescriu-lo perquè no faci mal i, si pot ser, perquè sigui amable i concret.|Pasa cada mensaje por el semáforo y reescríbelo para que no haga daño y, si puede ser, para que sea amable y concreto.",
          items: [
            { q: "«Quin dibuix més lleig.»|«Qué dibujo más feo.»", sol: "Per exemple: «M'agraden els colors. Les mans potser les podries fer més grans?»|Por ejemplo: «Me gustan los colores. ¿Las manos quizá las podrías hacer más grandes?»" },
            { q: "«No vinguis, ets un pesat.»|«No vengas, eres un pesado.»", sol: "Per exemple: «Avui ja som molts, però la propera vegada t'avisem.»|Por ejemplo: «Hoy ya somos muchos, pero la próxima vez te avisamos.»" },
            { q: "«Has fallat el gol, ets un desastre.»|«Has fallado el gol, eres un desastre.»", sol: "Per exemple: «Ànims! Tothom en falla algun. El pròxim entrarà.»|Por ejemplo: «¡Ánimo! Todo el mundo falla alguno. El próximo entrará.»" },
            { q: "«ok.» (a algú que t'ensenya amb il·lusió una cosa que ha fet)|«ok.» (a alguien que te enseña con ilusión algo que ha hecho)", sol: "Per exemple: «Que xulo! M'encanta com ho has fet.»|Por ejemplo: «¡Qué chulo! Me encanta cómo lo has hecho.»" },
            { q: "Escriu un missatge amable i concret per a algú de la classe.|Escribe un mensaje amable y concreto para alguien de la clase.", sol: "Resposta oberta: valoreu que sigui concret i sincer.|Respuesta abierta: valorad que sea concreto y sincero." }
          ] }
      ]
    },

    /* ---------- Sessió 4 · Projecte: la campanya (final del curs) ---------- */
    'd2-4': {
      obj: [
        "L'alumne/a tria, en equip, un tema del curs i un públic per a una campanya a l'escola.|El alumno/a elige, en equipo, un tema del curso y un público para una campaña en la escuela.",
        "L'alumne/a escriu un missatge curt i positiu que diu què fer.|El alumno/a escribe un mensaje corto y positivo que dice qué hacer.",
        "L'alumne/a dissenya un cartell llegible (títol, imatge i acció) i un pla (on, qui, quan i com sabran si funciona).|El alumno/a diseña un cartel legible (título, imagen y acción) y un plan (dónde, quién, cuándo y cómo sabrán si funciona).",
        "L'alumne/a dona i rep comentaris amables per millorar la campanya i la presenta a la classe.|El alumno/a da y recibe comentarios amables para mejorar la campaña y la presenta a la clase."
      ],
      comp: [
        "Competència digital (CD3): crear contingut per informar i sensibilitzar|Competencia digital (CD3): crear contenido para informar y sensibilizar",
        "Competència ciutadana: participar en la vida de l'escola i promoure la convivència digital|Competencia ciudadana: participar en la vida de la escuela y promover la convivencia digital",
        "Comunicació oral i escrita: escriure un missatge eficaç i presentar-lo en públic|Comunicación oral y escrita: escribir un mensaje eficaz y presentarlo en público",
        "Competència emprenedora: planificar, decidir en equip i avaluar el resultat|Competencia emprendedora: planificar, decidir en equipo y evaluar el resultado"
      ],
      vocab: [
        ["Campanya|Campaña", "Un conjunt d'accions per convèncer molta gent de fer una cosa.|Un conjunto de acciones para convencer a mucha gente de hacer algo."],
        ["Públic|Público", "Les persones a qui va dirigida la campanya.|Las personas a quienes va dirigida la campaña."],
        ["Eslògan|Eslogan", "Una frase curta i fàcil de recordar que resumeix el missatge.|Una frase corta y fácil de recordar que resume el mensaje."],
        ["Cartell|Cartel", "Un full gran que es penja perquè tothom el vegi.|Una hoja grande que se cuelga para que todo el mundo la vea."],
        ["Pla|Plan", "On, qui, quan i com sabrem si la campanya funciona.|Dónde, quién, cuándo y cómo sabremos si la campaña funciona."],
        ["Esborrany|Borrador", "La primera versió d'una feina, que encara es pot millorar.|La primera versión de un trabajo, que todavía se puede mejorar."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la campanya»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la campaña»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Fulls A3 o cartolines, retoladors i colors (per equip)|Hojas A3 o cartulinas, rotuladores y colores (por equipo)",
          "La fitxa de la campanya (una per equip) i cinta adhesiva per a la galeria|La ficha de la campaña (una por equipo) y cinta adhesiva para la galería",
          "Els diplomes del curs impresos, un per alumne/a|Los diplomas del curso impresos, uno por alumno/a"
        ],
        imprimir: ["La fitxa de la campanya|La ficha de la campaña", "Diploma del curs|Diploma del curso"],
        prep: [
          "Imprimir una fitxa per equip i els diplomes amb el nom de cada alumne/a.|Imprimir una ficha por equipo y los diplomas con el nombre de cada alumno/a.",
          "Parlar amb la direcció per saber on es podran penjar els cartells i a quines classes es podrà explicar la campanya.|Hablar con la dirección para saber dónde se podrán colgar los carteles y en qué clases se podrá explicar la campaña.",
          "Escriure a la pissarra la llista de temes del curs: contrasenyes, privadesa, empremta digital, bulos, IA, respecte, descans de pantalles.|Escribir en la pizarra la lista de temas del curso: contraseñas, privacidad, huella digital, bulos, IA, respeto, descanso de pantallas.",
          "Preparar una paret o un espai per a la galeria de campanyes.|Preparar una pared o un espacio para la galería de campañas."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: què hem après?|Bienvenida: ¿qué hemos aprendido?", fase: 'inici',
          fa: "Repasseu ràpidament els temes del curs amb la diapositiva de repàs: cada alumne/a diu una cosa que recorda. Després pregunta què voldrien que canviés a l'escola en l'ús d'internet i presenta el repte: una campanya feta per ells per a tota l'escola.|Repasad rápidamente los temas del curso con la diapositiva de repaso: cada alumno/a dice una cosa que recuerda. Después pregunta qué querrían que cambiara en la escuela en el uso de internet y presenta el reto: una campaña hecha por ellos para toda la escuela.",
          diu: ["Digueu-me una cosa que hàgiu après al curs i que us sembli important.|Decidme una cosa que hayáis aprendido en el curso y que os parezca importante.",
            "Què us hauria agradat saber abans? A qui li aniria bé saber-ho?|¿Qué os habría gustado saber antes? ¿A quién le iría bien saberlo?"],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 7, t: "Les tres parts d'una campanya|Las tres partes de una campaña", fase: 'teoria',
          fa: "Amb l'animació, presenta el cartell, el missatge i el pla. Ensenya l'exemple de l'escola de Vilabit i pregunta què el fa bo. Explica què fa que un cartell es llegeixi de lluny i les quatre preguntes del pla. Remarca que una bona campanya dona eines en lloc de fer por.|Con la animación, presenta el cartel, el mensaje y el plan. Enseña el ejemplo de la escuela de Vilabit y pregunta qué lo hace bueno. Explica qué hace que un cartel se lea de lejos y las cuatro preguntas del plan. Remarca que una buena campaña da herramientas en lugar de dar miedo.",
          diu: ["Què diu el cartell que hem de fer?|¿Qué dice el cartel que tenemos que hacer?",
            "Un cartell que fa por, ajuda o espanta?|Un cartel que da miedo, ¿ayuda o asusta?"],
          slides: ['s4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Equips: tema, públic i eslògan|Equipos: tema, público y eslogan", fase: 'desconnectat',
          fa: "Forma equips de 3 o 4 i reparteix papers: coordinador/a, escriptor/a, dissenyador/a i portaveu. Cada equip tria un tema i un públic, fa una pluja d'idees d'almenys cinc eslògans i en tria un. Ho escriuen a la fitxa de la campanya. Vigila que no hi hagi dos equips amb el mateix tema i públic.|Forma equipos de 3 o 4 y reparte papeles: coordinador/a, escritor/a, diseñador/a y portavoz. Cada equipo elige un tema y un público, hace una lluvia de ideas de al menos cinco eslóganes y elige uno. Lo escriben en la ficha de la campaña. Vigila que no haya dos equipos con el mismo tema y público.",
          diu: ["Primer moltes idees, després triem. Cap idea no és ximple!|Primero muchas ideas, después elegimos. ¡Ninguna idea es tonta!",
            "El vostre eslògan es pot dir d'una alenada? Diu què fer?|¿Vuestro eslogan se puede decir de un tirón? ¿Dice qué hacer?",
            "Per a qui és? Ho entendrien els de 1r?|¿Para quién es? ¿Lo entenderían los de 1.º?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Equips de 3 o 4 amb papers|Equipos de 3 o 4 con papeles" },
        { min: 13, t: "A l'ordinador: prepara la campanya|En el ordenador: prepara la campaña", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins al repte 3 (la conversa amb l'Iu). Són activitats curtes que preparen les decisions de l'equip: les parts de la campanya, el públic, revisar un esborrany, eslògans que funcionen, l'ordre del pla i les decisions sobre fotos, IA i to. Si un equip acaba abans, que comenci l'esbós del cartell.|Cada alumno/a hace la sesión hasta el reto 3 (la conversación con Iu). Son actividades cortas que preparan las decisiones del equipo: las partes de la campaña, el público, revisar un borrador, eslóganes que funcionan, el orden del plan y las decisiones sobre fotos, IA y tono. Si un equipo termina antes, que empiece el boceto del cartel.",
          diu: ["Quina millora proposaríeu a l'esborrany de l'equip de la Mia?|¿Qué mejora propondríais al borrador del equipo de Mia?",
            "Podem posar la foto d'un company al cartell? Per què?|¿Podemos poner la foto de un compañero en el cartel? ¿Por qué?"],
          slides: ['s10'], app: "De «Recorda» fins al repte 3: les dues preguntes de repàs, la missió, les targetes de «Descobreix», cartell, missatge o pla, el públic de 1r, l'esborrany de la Mia, la pausa activa, els eslògans, ordenar el pla i la conversa amb l'Iu.|De «Recuerda» hasta el reto 3: las dos preguntas de repaso, la misión, las tarjetas de «Descubre», cartel, mensaje o plan, el público de 1.º, el borrador de Mia, la pausa activa, los eslóganes, ordenar el plan y la conversación con Iu.", org: "Individual|Individual" },
        { min: 15, t: "Crea: el cartell i el pla|Crea: el cartel y el plan", fase: 'crea',
          fa: "Els equips dibuixen el cartell en A3 i omplen el pla a la fitxa. Als 10 minuts, cada equip ensenya l'esborrany a un altre equip, que li diu una cosa que funciona i una millora concreta. Després, cada alumne/a toca «Ho hem fet!» al pas «La nostra campanya» i fa la revisió de l'app amb el seu equip.|Los equipos dibujan el cartel en A3 y rellenan el plan en la ficha. A los 10 minutos, cada equipo enseña el borrador a otro equipo, que le dice algo que funciona y una mejora concreta. Después, cada alumno/a toca «¡Lo hemos hecho!» en el paso «Nuestra campaña» y hace la revisión de la app con su equipo.",
          diu: ["Es llegeix des de l'altra punta de la classe? Proveu-ho!|¿Se lee desde la otra punta de la clase? ¡Probadlo!",
            "Comenceu per una cosa que funciona i després proposeu una millora.|Empezad por algo que funciona y después proponed una mejora.",
            "On el penjareu? Qui l'explicarà? Com sabreu si ha funcionat?|¿Dónde lo colgaréis? ¿Quién lo explicará? ¿Cómo sabréis si ha funcionado?"],
          slides: ['s11', 's12'], app: "Passos «La nostra campanya» (Ho hem fet!) i la revisió de la campanya.|Pasos «Nuestra campaña» (¡Lo hemos hecho!) y la revisión de la campaña.", org: "Equips i després revisió entre equips|Equipos y después revisión entre equipos" },
        { min: 8, t: "Galeria, tiquet i diploma|Galería, ticket y diploma", fase: 'tancament',
          fa: "Pengeu els cartells i feu la galeria: cada portaveu explica en 30 segons el missatge i el pla, i la resta diu una cosa que li ha agradat. Deixa que facin les preguntes finals i el diploma de l'app, fes el tiquet i lliura els diplomes impresos. Acordeu quan es penjaran els cartells a l'escola.|Colgad los carteles y haced la galería: cada portavoz explica en 30 segundos el mensaje y el plan, y el resto dice algo que le ha gustado. Deja que hagan las preguntas finales y el diploma de la app, haz el ticket y entrega los diplomas impresos. Acordad cuándo se colgarán los carteles en la escuela.",
          diu: ["Què us ha agradat de la campanya d'aquest equip?|¿Qué os ha gustado de la campaña de este equipo?",
            "Ara sou experts en ciutadania digital: ho podeu explicar a casa i a l'escola!|Ahora sois expertos en ciudadanía digital: ¡lo podéis explicar en casa y en la escuela!"],
          slides: ['s13', 's14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals, el diploma del curs i com m'he sentit.|«Cierre»: las dos preguntas finales, el diploma del curso y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Fa un eslògan llarg que ho vol explicar tot.|Hace un eslogan largo que lo quiere explicar todo.",
          "Demana-li que el digui d'una alenada. Si no pot, que triï la idea més important i la resti la posi al pla (qui ho explicarà).|Pídele que lo diga de un tirón. Si no puede, que elija la idea más importante y el resto lo ponga en el plan (quién lo explicará)."],
        ["Tria un missatge que fa por («internet és perillós») en lloc de donar eines.|Elige un mensaje que da miedo («internet es peligroso») en lugar de dar herramientas.",
          "Pregunta: després de llegir-lo, què sabrà fer un nen de 1r? Ajuda'l a convertir la por en una acció («Si dubtes, pregunta»).|Pregunta: después de leerlo, ¿qué sabrá hacer un niño de 1.º? Ayúdale a convertir el miedo en una acción («Si dudas, pregunta»)."],
        ["Vol posar fotos de companys o imatges trobades a internet sense pensar-hi.|Quiere poner fotos de compañeros o imágenes encontradas en internet sin pensarlo.",
          "Recorda la conversa amb l'Iu: la imatge de cadascú és seva. Proposa dibuixos propis o icones.|Recuerda la conversación con Iu: la imagen de cada uno es suya. Propón dibujos propios o iconos."],
        ["A l'equip, una persona ho fa tot i les altres miren.|En el equipo, una persona lo hace todo y las otras miran.",
          "Torna als papers: què fa el coordinador/a? I l'escriptor/a? Que cadascú tingui una part visible al cartell o al pla.|Vuelve a los papeles: ¿qué hace el coordinador/a? ¿Y el escritor/a? Que cada uno tenga una parte visible en el cartel o en el plan."],
        ["Es pren malament els comentaris d'un altre equip.|Se toma mal los comentarios de otro equipo.",
          "Recorda que és un esborrany i que totes les campanyes es milloren provant-les. Valora que l'altre equip hagi començat per una cosa que funciona.|Recuerda que es un borrador y que todas las campañas se mejoran probándolas. Valora que el otro equipo haya empezado por algo que funciona."]
      ],
      diff: {
        mes: "Per anar més enllà: preparar una enquesta curta (tres preguntes) per passar abans i després de la campanya i comparar-ne els resultats, o fer una segona versió del cartell per a un altre públic (les famílies, per exemple).|Para ir más allá: preparar una encuesta corta (tres preguntas) para pasar antes y después de la campaña y comparar los resultados, o hacer una segunda versión del cartel para otro público (las familias, por ejemplo).",
        menys: "Donar a l'equip tres eslògans per triar i un esquema de cartell amb tres caixes (títol, dibuix, acció). Que la persona que ho necessiti faci de dissenyador/a, amb un paper concret i visible.|Dar al equipo tres eslóganes para elegir y un esquema de cartel con tres cajas (título, dibujo, acción). Que la persona que lo necesite haga de diseñador/a, con un papel concreto y visible."
      },
      aval: {
        ticket: ["Digues les tres parts d'una campanya.|Di las tres partes de una campaña.",
          "Digues el teu eslògan i per què funciona.|Di tu eslogan y por qué funciona."],
        rubric: [
          ["Missatge|Mensaje", "És curt, positiu, diu què fer i s'adapta al públic.|Es corto, positivo, dice qué hacer y se adapta al público.", "Es entén, però és llarg, vague o fa una mica de por.|Se entiende, pero es largo, vago o da un poco de miedo."],
          ["Cartell i pla|Cartel y plan", "El cartell es llegeix de lluny i el pla respon on, qui, quan i com sabran si funciona.|El cartel se lee de lejos y el plan responde dónde, quién, cuándo y cómo sabrán si funciona.", "Té cartell, però el pla està incomplet o el cartell té massa text.|Tiene cartel, pero el plan está incompleto o el cartel tiene demasiado texto."],
          ["Treball en equip i comentaris|Trabajo en equipo y comentarios", "Fa la seva part, dona comentaris amables i concrets i en fa servir per millorar.|Hace su parte, da comentarios amables y concretos y los usa para mejorar.", "Participa, però li costa donar o acceptar comentaris.|Participa, pero le cuesta dar o aceptar comentarios."]
        ]
      },
      casa: "A casa, l'infant pot ensenyar el diploma i explicar la campanya del seu equip. Proposta per a la família: feu junts una «campanya de casa» amb tres normes digitals per a tota la família (per exemple, les hores sense pantalles, comprovar abans de compartir i explicar-nos les coses que ens fan sentir malament) i pengeu-la a la nevera.|En casa, el niño o la niña puede enseñar el diploma y explicar la campaña de su equipo. Propuesta para la familia: haced juntos una «campaña de casa» con tres normas digitales para toda la familia (por ejemplo, las horas sin pantallas, comprobar antes de compartir y contarnos las cosas que nos hacen sentir mal) y colgadla en la nevera.",
      slides: [
        { id: 's1', k: 'portada', t: "Projecte: la campanya|Proyecto: la campaña", x: "Avui el vostre equip crearà una campanya perquè tota l'escola faci servir internet amb seny.|Hoy vuestro equipo creará una campaña para que toda la escuela use internet con cabeza.",
          nota: "És l'última sessió del curs: presenta-la com una celebració del que han après.|Es la última sesión del curso: preséntala como una celebración de lo que han aprendido." },
        { id: 's2', k: 'repas', t: "Què hem après al curs?|¿Qué hemos aprendido en el curso?",
          punts: ["Contrasenyes fortes i secretes|Contraseñas fuertes y secretas", "Què compartim i qui ho veu|Qué compartimos y quién lo ve", "L'empremta digital|La huella digital", "Caçar bulos i missatges trampa|Cazar bulos y mensajes trampa", "Què és (i què no és) una IA|Qué es (y qué no es) una IA", "Respecte a la xarxa i demanar ajuda|Respeto en la red y pedir ayuda"],
          nota: "Que cada alumne/a digui una cosa concreta que recordi d'algun tema.|Que cada alumno/a diga una cosa concreta que recuerde de algún tema." },
        { id: 's3', k: 'pregunta', t: "Què voldríeu que canviés a l'escola?|¿Qué querríais que cambiara en la escuela?",
          punts: ["Què veieu que passa sovint al mòbil o a l'ordinador?|¿Qué veis que pasa a menudo en el móvil o en el ordenador?", "Què us hauria agradat saber abans?|¿Qué os habría gustado saber antes?", "A qui li aniria bé saber-ho?|¿A quién le iría bien saberlo?"],
          nota: "Apunta idees a la pissarra: seran la base per triar els temes de les campanyes.|Apunta ideas en la pizarra: serán la base para elegir los temas de las campañas." },
        { id: 's4', k: 'anim', t: "Les tres parts d'una campanya|Las tres partes de una campaña", anim: 'd2camp', x: "El cartell es veu, el missatge es recorda i el pla fa que arribi a tothom.|El cartel se ve, el mensaje se recuerda y el plan hace que llegue a todo el mundo.",
          nota: "Pregunta si recorden alguna campanya de l'escola o del barri (sense marques) i quina part els va arribar més.|Pregunta si recuerdan alguna campaña de la escuela o del barrio (sin marcas) y qué parte les llegó más." },
        { id: 's5', k: 'media', t: "Un exemple de missatge|Un ejemplo de mensaje", x: "Curt, positiu i diu què fer.|Corto, positivo y dice qué hacer.", media: CAMP,
          nota: "Analitzeu-lo junts: té una acció? Es pot dir d'una alenada? Per a quin públic serviria?|Analizadlo juntos: ¿tiene una acción? ¿Se puede decir de un tirón? ¿Para qué público serviría?" },
        { id: 's6', k: 'concepte', t: "Un bon cartell|Un buen cartel", pic: 'img/ment/ate.webp',
          punts: ["Títol gran que es llegeix de lluny.|Título grande que se lee de lejos.", "Una imatge o icona clara, feta per vosaltres.|Una imagen o icono claro, hecho por vosotros.", "Poques paraules i una acció concreta.|Pocas palabras y una acción concreta.", "Colors que contrastin.|Colores que contrasten."],
          nota: "Recorda que no s'hi poden posar fotos de persones sense permís.|Recuerda que no se pueden poner fotos de personas sin permiso." },
        { id: 's7', k: 'concepte', t: "El pla|El plan", pic: 'img/ment/nom.webp',
          punts: ["On el penjareu?|¿Dónde lo colgaréis?", "Qui l'explicarà?|¿Quién lo explicará?", "Quan?|¿Cuándo?", "Com sabreu si ha funcionat?|¿Cómo sabréis si ha funcionado?"],
          nota: "Per a l'última pregunta, proposa preguntar a una classe abans i després què farien davant d'un bulo o d'un missatge que fa mal.|Para la última pregunta, propón preguntar a una clase antes y después qué harían ante un bulo o un mensaje que hace daño." },
        { id: 's8', k: 'activitat', t: "Equips: tema, públic i eslògan|Equipos: tema, público y eslogan", timer: 12,
          punts: ["Feu equips de 3 o 4 i repartiu papers: coordinador/a, escriptor/a, dissenyador/a i portaveu.|Haced equipos de 3 o 4 y repartid papeles: coordinador/a, escritor/a, diseñador/a y portavoz.", "Trieu el tema i el públic.|Elegid el tema y el público.", "Pluja d'idees: almenys 5 eslògans.|Lluvia de ideas: al menos 5 eslóganes.", "Trieu-ne un i escriviu-lo a la fitxa.|Elegid uno y escribidlo en la ficha."],
          nota: "Passa pels equips i ajuda a convertir els eslògans que fan por en accions.|Pasa por los equipos y ayuda a convertir los eslóganes que dan miedo en acciones." },
        { id: 's9', k: 'activitat', t: "Regles de la pluja d'idees|Reglas de la lluvia de ideas",
          punts: ["Primer moltes idees, després triem.|Primero muchas ideas, después elegimos.", "Cap idea no és ximple.|Ninguna idea es tonta.", "Un bon eslògan: curt, positiu i diu què fer.|Un buen eslogan: corto, positivo y dice qué hacer."],
          nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13,
          punts: ["Obre la sessió «Projecte: la campanya».|Abre la sesión «Proyecto: la campaña».", "Fes fins al repte 3: la conversa amb l'Iu.|Haz hasta el reto 3: la conversación con Iu.", "Apunta a la fitxa les idees que et serveixin per al vostre cartell.|Apunta en la ficha las ideas que te sirvan para vuestro cartel."],
          nota: "Si algun equip acaba abans, que comenci l'esbós del cartell.|Si algún equipo termina antes, que empiece el boceto del cartel." },
        { id: 's11', k: 'activitat', t: "Crea: el cartell i el pla|Crea: el cartel y el plan", timer: 15,
          punts: ["Dibuixeu el cartell en A3: títol gran, dibuix vostre i acció.|Dibujad el cartel en A3: título grande, dibujo vuestro y acción.", "Ompliu el pla a la fitxa.|Rellenad el plan en la ficha.", "Ensenyeu-lo a un altre equip: una cosa que funciona i una millora.|Enseñádselo a otro equipo: algo que funciona y una mejora.", "A l'app: «Ho hem fet!» i la revisió de la campanya.|En la app: «¡Lo hemos hecho!» y la revisión de la campaña."],
          nota: "Avisa als 10 minuts per fer la revisió entre equips.|Avisa a los 10 minutos para hacer la revisión entre equipos." },
        { id: 's12', k: 'activitat', t: "Com donar comentaris|Cómo dar comentarios",
          punts: ["Comença per una cosa que funciona.|Empieza por algo que funciona.", "Proposa una millora concreta.|Propón una mejora concreta.", "Parla del cartell, no de les persones.|Habla del cartel, no de las personas."],
          nota: "És el mateix respecte de la sessió anterior, aplicat al treball en equip.|Es el mismo respeto de la sesión anterior, aplicado al trabajo en equipo." },
        { id: 's13', k: 'activitat', t: "Galeria de campanyes|Galería de campañas", timer: 5,
          punts: ["Pengeu els cartells.|Colgad los carteles.", "Cada portaveu explica el missatge i el pla en 30 segons.|Cada portavoz explica el mensaje y el plan en 30 segundos.", "La resta diu una cosa que li ha agradat.|El resto dice algo que le ha gustado."],
          nota: "Fes fotos dels cartells (sense alumnes) per recordar-los i per ensenyar-los a la direcció.|Haz fotos de los carteles (sin alumnos) para recordarlos y para enseñarlos a la dirección." },
        { id: 's14', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Una campanya té cartell, missatge i pla.|Una campaña tiene cartel, mensaje y plan.", "Un bon missatge és curt, positiu i diu què fer.|Un buen mensaje es corto, positivo y dice qué hacer.", "Podem ajudar la nostra escola a fer servir internet amb seny.|Podemos ayudar a nuestra escuela a usar internet con cabeza."],
          nota: "Acordeu la data per penjar les campanyes a l'escola.|Acordad la fecha para colgar las campañas en la escuela." },
        { id: 's15', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues les tres parts d'una campanya.|Di las tres partes de una campaña.", "Digues el teu eslògan i per què funciona.|Di tu eslogan y por qué funciona."],
          nota: "Fes el tiquet mentre lliures els diplomes.|Haz el ticket mientras entregas los diplomas." },
        { id: 's16', k: 'concepte', t: "Enhorabona: curs acabat!|¡Enhorabuena: curso terminado!",
          punts: ["Has acabat el curs Tech Digital.|Has terminado el curso Tech Digital.", "Ara pots ajudar la teva escola i la teva família.|Ahora puedes ayudar a tu escuela y a tu familia.", "Recorda: si dubtes, pregunta a un adult de confiança.|Recuerda: si dudas, pregunta a un adulto de confianza."],
          nota: "Lliura els diplomes impresos un a un, dient a cada alumne/a una cosa concreta que ha fet bé durant el curs.|Entrega los diplomas impresos uno a uno, diciendo a cada alumno/a algo concreto que ha hecho bien durante el curso." }
      ],
      print: [
        { id: 'p1', t: "La fitxa de la campanya|La ficha de la campaña", k: 'fitxa',
          intro: "Una per equip. Ompliu-la mentre prepareu la campanya i guardeu-la amb el cartell.|Una por equipo. Rellenadla mientras preparáis la campaña y guardadla con el cartel.",
          items: [
            { q: "Equip i papers (coordinador/a, escriptor/a, dissenyador/a i portaveu):|Equipo y papeles (coordinador/a, escritor/a, diseñador/a y portavoz):", sol: "Resposta oberta.|Respuesta abierta." },
            { q: "Tema de la campanya:|Tema de la campaña:", sol: "Per exemple: bulos, IA, respecte a la xarxa, contrasenyes, privadesa, empremta digital o descans de pantalles.|Por ejemplo: bulos, IA, respeto en la red, contraseñas, privacidad, huella digital o descanso de pantallas." },
            { q: "Públic: per a qui és?|Público: ¿para quién es?", sol: "Valoreu que el missatge i el cartell s'adaptin a l'edat del públic triat.|Valorad que el mensaje y el cartel se adapten a la edad del público elegido." },
            { q: "El nostre eslògan (màxim 8 paraules):|Nuestro eslogan (máximo 8 palabras):", sol: "Valoreu que sigui curt, positiu i que digui què fer.|Valorad que sea corto, positivo y que diga qué hacer." },
            { q: "Esbós del cartell (títol, dibuix i acció):|Boceto del cartel (título, dibujo y acción):", big: true, sol: "Resposta oberta: títol gran, imatge pròpia, poques paraules i una acció.|Respuesta abierta: título grande, imagen propia, pocas palabras y una acción." },
            { q: "El pla: on el penjarem? Qui l'explicarà? Quan?|El plan: ¿dónde lo colgaremos? ¿Quién lo explicará? ¿Cuándo?", sol: "Resposta oberta, amb llocs i dates concrets.|Respuesta abierta, con lugares y fechas concretos." },
            { q: "Com sabrem si ha funcionat?|¿Cómo sabremos si ha funcionado?", sol: "Per exemple, preguntant a una classe abans i després què farien davant d'un bulo o d'un missatge que fa mal.|Por ejemplo, preguntando a una clase antes y después qué harían ante un bulo o un mensaje que hace daño." },
            { q: "Una millora que ens ha proposat un altre equip:|Una mejora que nos ha propuesto otro equipo:", sol: "Resposta oberta.|Respuesta abierta." }
          ] },
        { id: 'p2', t: "Diploma del curs|Diploma del curso", k: 'diploma',
          intro: "ha completat el curs Tech Digital de Numi Tech: sap cuidar-se i cuidar els altres a la xarxa i ha creat una campanya per a la seva escola.|ha completado el curso Tech Digital de Numi Tech: sabe cuidarse y cuidar a los demás en la red y ha creado una campaña para su escuela.",
          items: [
            "Crea contrasenyes fortes i protegeix les seves dades.|Crea contraseñas fuertes y protege sus datos.",
            "Pensa abans de publicar i cuida la seva empremta digital.|Piensa antes de publicar y cuida su huella digital.",
            "Comprova les notícies i detecta els missatges trampa.|Comprueba las noticias y detecta los mensajes trampa.",
            "Entén què és una IA i la fa servir amb responsabilitat.|Entiende qué es una IA y la usa con responsabilidad.",
            "Tracta bé els altres a la xarxa i sap demanar ajuda.|Trata bien a los demás en la red y sabe pedir ayuda."
          ] }
      ]
    }
  });
}
