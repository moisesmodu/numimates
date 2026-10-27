/* Tech IA · unitat 3 · guies del professor (mateix esquema que tech-guide-c1.js).
   Tot el que fa l'alumnat és dins de l'app amb IA simulada (xats amb al·lucinacions marcades i un avaluador de prompts per
   regles). La IA en directe només surt si el docent ha activat l'assistent al grup, amb el límit de preguntes per sessió.
   Fets amb data: llei europea d'IA, article 50 (obligacions de transparència dels xatbots, des del 2 d'agost de 2026);
   LOPDGDD, article 7 (consentiment de la família per sota dels 14 anys). */
Object.assign(TGUIDE, {

  /* ---------- Sessió 1 · Dins d'un xatbot ---------- */
  'i3-1': {
    intro: "L'alumnat obre un xatbot per dins: un model de llenguatge gran que prediu la fitxa següent (com el mini model de la unitat 1, però a una escala enorme), ajustat amb exemples i valoracions de persones per fer d'assistent. Descobreix la finestra de context (què veu el model i què en queda fora), la diferència entre respondre «de memòria» i fer servir eines (cercador, calculadora) i per què un xatbot sense eines no pot saber res d'avui. Acaba entrevistant un xatbot simulat sobre com funciona.|El alumnado abre un chatbot por dentro: un modelo de lenguaje grande que predice la ficha siguiente (como el mini modelo de la unidad 1, pero a una escala enorme), ajustado con ejemplos y valoraciones de personas para hacer de asistente. Descubre la ventana de contexto (qué ve el modelo y qué se queda fuera), la diferencia entre responder «de memoria» y usar herramientas (buscador, calculadora) y por qué un chatbot sin herramientas no puede saber nada de hoy. Termina entrevistando a un chatbot simulado sobre cómo funciona.",
    claus: [
      "Un xatbot = un model que prediu fitxes + un ajust (exemples d'instruccions i valoracions) perquè respongui com un assistent.|Un chatbot = un modelo que predice fichas + un ajuste (ejemplos de instrucciones y valoraciones) para que responda como un asistente.",
      "Finestra de context: el model només veu les instruccions de l'app, la conversa i el que li donem; el que és antic en pot quedar fora i, en un xat nou, comença de zero.|Ventana de contexto: el modelo solo ve las instrucciones de la app, la conversación y lo que le damos; lo antiguo puede quedarse fuera y, en un chat nuevo, empieza de cero.",
      "Sense eines, respon amb el que va aprendre fins a la data de tall; amb eines, l'app hi afegeix resultats (que també cal comprovar).|Sin herramientas, responde con lo que aprendió hasta la fecha de corte; con herramientas, la app añade resultados (que también hay que comprobar).",
      "El text es parteix en fitxes (tokens) convertides en números: per això li costa comptar lletres i el context es mesura en fitxes.|El texto se parte en fichas (tokens) convertidas en números: por eso le cuesta contar letras y el contexto se mide en fichas."
    ],
    prev: ["Unitat 1: un model de llenguatge prediu la paraula següent; temperatura; fluid no vol dir cert.|Unidad 1: un modelo de lenguaje predice la palabra siguiente; temperatura; fluido no quiere decir cierto."],
    obj: [
      "L'alumne/a explica que un xatbot és un model que prediu fitxes, ajustat per fer d'assistent.|El alumno/a explica que un chatbot es un modelo que predice fichas, ajustado para hacer de asistente.",
      "L'alumne/a descriu què és la finestra de context i què passa quan una conversa és massa llarga o comença de nou.|El alumno/a describe qué es la ventana de contexto y qué pasa cuando una conversación es demasiado larga o empieza de nuevo.",
      "L'alumne/a distingeix les preguntes que un model pot respondre de memòria de les que necessiten una eina o una dada nova.|El alumno/a distingue las preguntas que un modelo puede responder de memoria de las que necesitan una herramienta o un dato nuevo.",
      "L'alumne/a protegeix les seves dades quan fa servir apps d'IA.|El alumno/a protege sus datos cuando usa apps de IA."
    ],
    comp: [
      "Competència digital (CD5): funcionament dels sistemes d'IA|Competencia digital (CD5): funcionamiento de los sistemas de IA",
      "Competència digital (CD4): privadesa i protecció de dades|Competencia digital (CD4): privacidad y protección de datos",
      "Competència personal i d'aprendre a aprendre (CPSAA): saber quan una eina és fiable|Competencia personal y de aprender a aprender (CPSAA): saber cuándo una herramienta es fiable"
    ],
    vocab: [
      ["Model de llenguatge gran|Modelo de lenguaje grande", "Xarxa neuronal enorme entrenada amb moltíssim text per predir la fitxa següent.|Red neuronal enorme entrenada con muchísimo texto para predecir la ficha siguiente."],
      ["Ajust (com a assistent)|Ajuste (como asistente)", "Entrenament extra amb exemples d'instruccions i valoracions de persones perquè respongui bé i amb seguretat.|Entrenamiento extra con ejemplos de instrucciones y valoraciones de personas para que responda bien y con seguridad."],
      ["Finestra de context|Ventana de contexto", "Tot el text que el model té en compte en un moment: instruccions, conversa i documents.|Todo el texto que el modelo tiene en cuenta en un momento: instrucciones, conversación y documentos."],
      ["Data de tall|Fecha de corte", "Moment fins on arriben les dades amb què es va entrenar el model.|Momento hasta donde llegan los datos con los que se entrenó el modelo."],
      ["Eina|Herramienta", "Capacitat extra que l'app dona al model (cercador, calculadora, executar codi).|Capacidad extra que la app da al modelo (buscador, calculadora, ejecutar código)."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Dins d'un xatbot»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Dentro de un chatbot»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Notes adhesives i un atles o el llibre de text per grup|Notas adhesivas y un atlas o el libro de texto por grupo"],
      imprimir: ["El xatbot de paper (imprimible 1): un per grup de quatre|El chatbot de papel (imprimible 1): uno por grupo de cuatro"],
      prep: ["Imprimir el full «El xatbot de paper» i preparar les notes adhesives.|Imprimir la hoja «El chatbot de papel» y preparar las notas adhesivas.", "Provar abans el repte del «model base» per saber on són els botons «＋» de les dades.|Probar antes el reto del «modelo base» para saber dónde están los botones «＋» de los datos.", "Decidir si es farà servir la IA en directe a l'entrevista final (només si l'assistent del grup està activat) o la simulada.|Decidir si se usará la IA en directo en la entrevista final (solo si el asistente del grupo está activado) o la simulada."]
    },
    plan: [
      { min: 5, t: 'Sap tant… i no sap quin dia és?|¿Sabe tanto… y no sabe qué día es?', fase: 'inici',
        fa: "Planteja la paradoxa de l'Aina: el xatbot explica la lava perfectament, però s'equivoca amb la data d'avui. Recull hipòtesis sense corregir-les.|Plantea la paradoja de Aina: el chatbot explica la lava perfectamente, pero se equivoca con la fecha de hoy. Recoge hipótesis sin corregirlas.",
        diu: ["Com pot ser que sàpiga tant i no sàpiga això?|¿Cómo puede ser que sepa tanto y no sepa eso?", "On creieu que «busca» les respostes?|¿Dónde creéis que «busca» las respuestas?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Escala, ajust, context, eines i fitxes|Escala, ajuste, contexto, herramientas y fichas", fase: 'teoria',
        fa: "Amb les animacions, connecta el mini model de la unitat 1 amb un model gran, explica l'ajust com a assistent, la finestra de context, les eines i les fitxes. Demana exemples de preguntes que necessitarien una eina.|Con las animaciones, conecta el mini modelo de la unidad 1 con un modelo grande, explica el ajuste como asistente, la ventana de contexto, las herramientas y las fichas. Pide ejemplos de preguntas que necesitarían una herramienta.",
        diu: ["Si el model base continua el text, què passa si li escrivim una pregunta?|Si el modelo base continúa el texto, ¿qué pasa si le escribimos una pregunta?", "Quina pregunta faríeu que segur que necessita un cercador?|¿Qué pregunta haríais que seguro que necesita un buscador?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'El xatbot de paper|El chatbot de papel', fase: 'desconnectat',
        fa: "En grups de quatre fan de model, app i usuàries. L'app només passa les 3 últimes notes (finestra de context); després, fa servir l'atles com a eina. Comenten què ha canviat.|En grupos de cuatro hacen de modelo, app y usuarias. La app solo pasa las 3 últimas notas (ventana de contexto); después, usa el atlas como herramienta. Comentan qué ha cambiado.",
        diu: ["Per què el model no sabia la primera pregunta?|¿Por qué el modelo no sabía la primera pregunta?", "Quan l'app ha fet servir l'atles, el model ho ha llegit bé?|Cuando la app ha usado el atlas, ¿el modelo lo ha leído bien?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 25, t: "A l'ordinador: un xatbot per dins|En el ordenador: un chatbot por dentro", fase: 'ordinador',
        fa: "Fan la sessió de l'app: classifiquen preguntes, caça d'errors en un xatbot sense eines, el repte del model base (afegir exemples de pregunta i resposta), l'ordre dels passos i l'entrevista final. Fes la pausa activa amb tothom.|Hacen la sesión de la app: clasifican preguntas, caza de errores en un chatbot sin herramientas, el reto del modelo base (añadir ejemplos de pregunta y respuesta), el orden de los pasos y la entrevista final. Haz la pausa activa con todo el mundo.",
        diu: ["Per què ara, després d'un «?», el model diu «resposta»?|¿Por qué ahora, después de un «?», el modelo dice «respuesta»?", "Què li heu preguntat al xatbot a l'entrevista?|¿Qué le habéis preguntado al chatbot en la entrevista?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (l'entrevista a un xatbot).|De «Recuerda» hasta el paso «Crea» (la entrevista a un chatbot).", org: "Individual|Individual" },
      { min: 8, t: 'Tancament: el que no pot saber|Cierre: lo que no puede saber', fase: 'tancament',
        fa: "Resumeix: prediu fitxes, veu el seu context i sense eines no sap res d'avui. Anuncia la sessió següent: quan no ho sap, sovint s'ho inventa. Tiquet de sortida i com s'han sentit.|Resume: predice fichas, ve su contexto y sin herramientas no sabe nada de hoy. Anuncia la sesión siguiente: cuando no lo sabe, a menudo se lo inventa. Tique de salida y cómo se han sentido.",
        diu: ["Què passa quan li preguntes una cosa que no pot saber?|¿Qué pasa cuando le preguntas algo que no puede saber?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Creu que el xatbot «busca» totes les respostes a internet.|Cree que el chatbot «busca» todas las respuestas en internet.", "Sense eines, no busca: genera a partir del que va aprendre. Recorda la data equivocada del xat simulat.|Sin herramientas, no busca: genera a partir de lo que aprendió. Recuerda la fecha equivocada del chat simulado."],
      ["Pensa que el model aprèn de cada conversa al moment.|Piensa que el modelo aprende de cada conversación al momento.", "Mentre el fas servir, el model no canvia: el que creix és el context. La «memòria» són notes que l'app torna a afegir.|Mientras lo usas, el modelo no cambia: lo que crece es el contexto. La «memoria» son notas que la app vuelve a añadir."],
      ["Confon finestra de context amb la pantalla del xat.|Confunde ventana de contexto con la pantalla del chat.", "La pantalla pot mostrar tota la conversa, però el model només en té en compte el que cap a la finestra.|La pantalla puede mostrar toda la conversación, pero el modelo solo tiene en cuenta lo que cabe en la ventana."],
      ["Al repte del model base, afegeix frases a l'atzar.|En el reto del modelo base, añade frases al azar.", "Pregunta: què ha de venir després de «?» perquè sembli un assistent? Cal que «resposta» guanyi «quina».|Pregunta: ¿qué tiene que venir después de «?» para que parezca un asistente? Hace falta que «respuesta» gane a «cuál»."],
      ["A l'entrevista escriu dades personals per «provar».|En la entrevista escribe datos personales para «probar».", "Recorda que en una app real sortirien del dispositiu. Aquí és simulat, però l'hàbit és el que compta.|Recuerda que en una app real saldrían del dispositivo. Aquí es simulado, pero el hábito es lo que cuenta."]
    ],
    diff: {
      mes: "Nivell PRO: la pregunta de la «memòria» entre xats, el repte del model base amb «resposta» al 60 % i l'ordre dels passos d'un xatbot amb cercador. Debat: avantatges i riscos que una app desi records de les converses.|Nivel PRO: la pregunta de la «memoria» entre chats, el reto del modelo base con «respuesta» al 60 % y el orden de los pasos de un chatbot con buscador. Debate: ventajas y riesgos de que una app guarde recuerdos de las conversaciones.",
      menys: "Fer el xatbot de paper amb el docent com a «app». A l'entrevista, donar 3 preguntes escrites a la pissarra per triar.|Hacer el chatbot de papel con el docente como «app». En la entrevista, dar 3 preguntas escritas en la pizarra para elegir."
    },
    aval: {
      ticket: ["Explica què és la finestra de context amb un exemple.|Explica qué es la ventana de contexto con un ejemplo.", "Digues una pregunta que un xatbot sense eines s'hauria d'inventar.|Di una pregunta que un chatbot sin herramientas se tendría que inventar."],
      rubric: [
        ["Com funciona|Cómo funciona", "Explica que prediu fitxes i que s'ha ajustat per fer d'assistent.|Explica que predice fichas y que se ha ajustado para hacer de asistente.", "Diu que «pensa» o «busca les respostes».|Dice que «piensa» o «busca las respuestas»."],
        ["Context|Contexto", "Explica què veu el model i què en queda fora.|Explica qué ve el modelo y qué se queda fuera.", "No relaciona context i «oblit».|No relaciona contexto y «olvido»."],
        ["Eines|Herramientas", "Distingeix el que sap del que li cal consultar.|Distingue lo que sabe de lo que necesita consultar.", "Creu que ho sap tot o que sempre busca.|Cree que lo sabe todo o que siempre busca."],
        ["Privadesa|Privacidad", "No posa dades personals i explica per què.|No pone datos personales y explica por qué.", "Hi escriu dades personals.|Escribe datos personales."]
      ]
    },
    casa: "A casa, si a la família feu servir algun assistent d'IA, mireu junts la configuració: desa les converses? Té «memòria»? Les fa servir per entrenar? Es poden esborrar? Comenteu què us convé.|En casa, si en la familia usáis algún asistente de IA, mirad juntos la configuración: ¿guarda las conversaciones? ¿Tiene «memoria»? ¿Las usa para entrenar? ¿Se pueden borrar? Comentad qué os conviene.",
    faq: [
      ["Els xatbots de veritat busquen a internet?|¿Los chatbots de verdad buscan en internet?", "Depèn de l'app i de la configuració: alguns només responen amb el que van aprendre (fins a una data de tall) i d'altres poden fer servir un cercador o altres eines. Encara que citin fonts, cal obrir-les i comprovar-les.|Depende de la app y de la configuración: algunos solo responden con lo que aprendieron (hasta una fecha de corte) y otros pueden usar un buscador u otras herramientas. Aunque citen fuentes, hay que abrirlas y comprobarlas."],
      ["És veritat que el model no aprèn mentre xategem?|¿Es verdad que el modelo no aprende mientras chateamos?", "Sí: mentre el fas servir, el model no canvia; canvia el context de la conversa. La «memòria» d'algunes apps són notes desades que es tornen a afegir al context. Segons la configuració, algunes empreses poden fer servir les converses per entrenar models futurs.|Sí: mientras lo usas, el modelo no cambia; cambia el contexto de la conversación. La «memoria» de algunas apps son notas guardadas que se vuelven a añadir al contexto. Según la configuración, algunas empresas pueden usar las conversaciones para entrenar modelos futuros."],
      ["La llei obliga els xatbots a dir que són una IA?|¿La ley obliga a los chatbots a decir que son una IA?", "A la UE, la llei europea d'IA (article 50) obliga, des del 2 d'agost de 2026, que les persones sàpiguen que parlen amb una IA, llevat que sigui evident.|En la UE, la ley europea de IA (artículo 50) obliga, desde el 2 de agosto de 2026, a que las personas sepan que hablan con una IA, salvo que sea evidente."]
    ],
    tec: [
      ["Al repte del model base, «resposta» no guanya.|En el reto del modelo base, «respuesta» no gana.", "Cal afegir com a mínim 3 exemples (els botons «＋»): així «resposta» supera «quina» després de «?». Amb PRO, cal arribar al 60 %.|Hay que añadir como mínimo 3 ejemplos (los botones «＋»): así «respuesta» supera a «cuál» después de «?». Con PRO, hay que llegar al 60 %."],
      ["L'entrevista no s'acaba.|La entrevista no termina.", "Cal enviar almenys 3 missatges. Si una pregunta no la reconeix, el xatbot simulat ho diu i proposa temes.|Hay que enviar al menos 3 mensajes. Si una pregunta no la reconoce, el chatbot simulado lo dice y propone temas."]
    ],
    seg: ["La IA de l'app és simulada i no envia res. Si el grup té activada la IA en directe, recordeu que el que s'hi escriu surt del dispositiu: res de dades personals.|La IA de la app es simulada y no envía nada. Si el grupo tiene activada la IA en directo, recordad que lo que se escribe sale del dispositivo: nada de datos personales."],
    extra: [
      "Llengua: escriure una «entrevista a un xatbot» amb les respostes de l'app i comentar quines frases sonen humanes.|Lengua: escribir una «entrevista a un chatbot» con las respuestas de la app y comentar qué frases suenan humanas.",
      "Matemàtiques: calcular percentatges del repte del model base (quantes vegades ve «resposta» després de «?»).|Matemáticas: calcular porcentajes del reto del modelo base (cuántas veces viene «respuesta» después de «?»)."
    ],
    trans: ["Sessió i3-2: al·lucinacions i com caçar-les. Unitat 6: agents que fan servir eines.|Sesión i3-2: alucinaciones y cómo cazarlas. Unidad 6: agentes que usan herramientas."],
    slides: [
      { id: 's1', k: 'portada', t: "Dins d'un xatbot|Dentro de un chatbot", x: 'Parlar amb models de llenguatge|Hablar con modelos de lenguaje', nota: "Primera sessió de la unitat 3.|Primera sesión de la unidad 3." },
      { id: 's2', k: 'pregunta', t: 'Sap tant… i no sap quin dia és?|¿Sabe tanto… y no sabe qué día es?', x: "El xatbot de l'Aina explica la lava perfectament i s'equivoca amb la data d'avui.|El chatbot de Aina explica la lava perfectamente y se equivoca con la fecha de hoy.", nota: "Recull hipòtesis: «busca a internet», «ho sap tot»…|Recoge hipótesis: «busca en internet», «lo sabe todo»…" },
      { id: 's3', k: 'anim', t: 'El teu mini model, però gegant|Tu mini modelo, pero gigante', anim: 'i31scale', x: "Mateixa tasca que a la unitat 1: predir la fitxa següent.|Misma tarea que en la unidad 1: predecir la ficha siguiente.", nota: "Connecta-ho amb el model de bigrames.|Conéctalo con el modelo de bigramas." },
      { id: 's4', k: 'anim', t: "D'un model que continua a un assistent|De un modelo que continúa a un asistente", anim: 'i31tune', x: "Exemples de bones respostes i valoracions de persones.|Ejemplos de buenas respuestas y valoraciones de personas.", nota: "Pregunta: què faria un model base amb una pregunta?|Pregunta: ¿qué haría un modelo base con una pregunta?" },
      { id: 's5', k: 'anim', t: 'La finestra de context|La ventana de contexto', anim: 'i31ctx', x: "Veu les instruccions, la conversa i el que li dones.|Ve las instrucciones, la conversación y lo que le das.", nota: "Xat nou → comença de zero (si l'app no desa notes).|Chat nuevo → empieza de cero (si la app no guarda notas)." },
      { id: 's6', k: 'anim', t: 'Sap o busca?|¿Sabe o busca?', anim: 'i31tools', x: "Sense eines: data de tall. Amb eines: dades noves que cal comprovar.|Sin herramientas: fecha de corte. Con herramientas: datos nuevos que hay que comprobar.", nota: "Demana exemples de preguntes que necessiten eines.|Pide ejemplos de preguntas que necesitan herramientas." },
      { id: 's7', k: 'anim', t: 'Fitxes, no lletres|Fichas, no letras', anim: 'i31tok', x: "El text es parteix en fitxes i cada fitxa és un número.|El texto se parte en fichas y cada ficha es un número.", nota: "Curiositat: per això li costa comptar lletres.|Curiosidad: por eso le cuesta contar letras." },
      { id: 's8', k: 'activitat', t: 'El xatbot de paper|El chatbot de papel', timer: 10, punts: ["Model, app i dues usuàries.|Modelo, app y dos usuarias.", "L'app passa només les 3 últimes notes.|La app pasa solo las 3 últimas notas.", "Després, l'app pot fer servir l'atles.|Después, la app puede usar el atlas."], nota: "Full «El xatbot de paper», un per grup.|Hoja «El chatbot de papel», una por grupo." },
      { id: 's9', k: 'pregunta', t: "Què ha canviat amb l'eina?|¿Qué ha cambiado con la herramienta?", x: "I què no sabia el model sense l'atles?|¿Y qué no sabía el modelo sin el atlas?", nota: "Les eines porten dades, però algú les ha de llegir bé.|Las herramientas traen datos, pero alguien tiene que leerlos bien." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 25, punts: ["Ho sap o li cal una eina?|¿Lo sabe o necesita una herramienta?", "Caça els errors del xatbot sense eines.|Caza los errores del chatbot sin herramientas.", "El model base i l'entrevista.|El modelo base y la entrevista."], nota: "Fes la pausa activa quan hi arribin.|Haz la pausa activa cuando lleguen." },
      { id: 's11', k: 'repte', t: 'Del model base a l\'assistent|Del modelo base al asistente', punts: ["Afegeix exemples de pregunta i resposta.|Añade ejemplos de pregunta y respuesta.", "Després d'un «?» ha de guanyar «resposta».|Después de un «?» tiene que ganar «respuesta»."], nota: "És l'ajust com a assistent, en miniatura.|Es el ajuste como asistente, en miniatura." },
      { id: 's12', k: 'concepte', t: 'Nivell PRO|Nivel PRO', punts: ["La «memòria» entre xats: notes al context.|La «memoria» entre chats: notas en el contexto.", "«Resposta» almenys al 60 %.|«Respuesta» al menos al 60 %.", "Els passos d'un xatbot amb cercador.|Los pasos de un chatbot con buscador."], nota: "Per a 3r-4t d'ESO o qui vagi ràpid.|Para 3.º-4.º de ESO o quien vaya rápido." },
      { id: 's13', k: 'repte', t: 'Entrevista un xatbot|Entrevista a un chatbot', punts: ["Almenys 3 preguntes sobre com funciona.|Al menos 3 preguntas sobre cómo funciona.", "Memòria, fitxes, data, internet…|Memoria, fichas, fecha, internet…"], nota: "Es desa al portafoli.|Se guarda en el portafolio." },
      { id: 's14', k: 'concepte', t: 'I quan no ho sap?|¿Y cuando no lo sabe?', punts: ["Sovint no diu «no ho sé».|A menudo no dice «no lo sé».", "Genera el que sona probable.|Genera lo que suena probable.", "Propera sessió: les al·lucinacions.|Próxima sesión: las alucinaciones."], nota: "Deixa la intriga per a la sessió següent.|Deja la intriga para la sesión siguiente." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ["Un xatbot prediu fitxes i s'ha ajustat per fer d'assistent.|Un chatbot predice fichas y se ha ajustado para hacer de asistente.", "Només veu el que hi ha al seu context.|Solo ve lo que hay en su contexto.", "Sense eines no sap res d'avui.|Sin herramientas no sabe nada de hoy."], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Què és la finestra de context?|¿Qué es la ventana de contexto?", "Una pregunta que s'hauria d'inventar.|Una pregunta que se tendría que inventar."], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'El xatbot de paper|El chatbot de papel', k: 'fitxa',
        intro: "Un per grup de quatre: model, app i dues usuàries. L'app només pot passar al model les 3 últimes notes.|Uno por grupo de cuatro: modelo, app y dos usuarias. La app solo puede pasar al modelo las 3 últimas notas.",
        items: [
          { q: "Escriviu aquí les 6 preguntes que heu fet (en ordre):|Escribid aquí las 6 preguntas que habéis hecho (en orden):", big: true, sol: "Per exemple: què és un volcà?, quin dia és avui?, quina és la capital del Perú?…|Por ejemplo: ¿qué es un volcán?, ¿qué día es hoy?, ¿cuál es la capital de Perú?…" },
          { q: "Quines podia respondre el model «de memòria» i quines necessitaven l'atles o una dada d'avui?|¿Cuáles podía responder el modelo «de memoria» y cuáles necesitaban el atlas o un dato de hoy?", sol: "De memòria: coneixement general. Amb eina: dades d'avui, horaris, dades exactes de l'atles.|De memoria: conocimiento general. Con herramienta: datos de hoy, horarios, datos exactos del atlas." },
          { q: "Quan l'app només passava les 3 últimes notes, què no podia saber el model?|Cuando la app solo pasaba las 3 últimas notas, ¿qué no podía saber el modelo?", sol: "Les primeres preguntes: ja no eren a la finestra de context.|Las primeras preguntas: ya no estaban en la ventana de contexto." },
          { q: "Què ha canviat quan l'app ha fet servir l'atles (l'eina)? Ho ha llegit bé el model?|¿Qué ha cambiado cuando la app ha usado el atlas (la herramienta)? ¿Lo ha leído bien el modelo?", big: true, sol: "Ha pogut respondre dades noves; cal comprovar que les ha copiat i entès bé.|Ha podido responder datos nuevos; hay que comprobar que los ha copiado y entendido bien." }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Al·lucinacions: caça l'error ---------- */
  'i3-2': {
    intro: "L'alumnat aprèn què és una al·lucinació d'una IA (una resposta falsa o inventada dita amb seguretat), per què passa (el model tria el que és probable, barreja trossos i omple buits) i on és més probable trobar-ne (xifres exactes, cites, noms, dates, fonts i enllaços, temes recents o molt locals). Caça al·lucinacions en dos xats simulats (un treball sobre les abelles i l'organització d'una excursió), practica la lectura lateral i escriu un prompt que faci les respostes fàcils de comprovar.|El alumnado aprende qué es una alucinación de una IA (una respuesta falsa o inventada dicha con seguridad), por qué pasa (el modelo elige lo probable, mezcla trozos y rellena huecos) y dónde es más probable encontrarlas (cifras exactas, citas, nombres, fechas, fuentes y enlaces, temas recientes o muy locales). Caza alucinaciones en dos chats simulados (un trabajo sobre las abejas y la organización de una excursión), practica la lectura lateral y escribe un prompt que haga las respuestas fáciles de comprobar.",
    claus: [
      "Al·lucinació: resposta falsa o inventada amb to segur. No és mala fe: el model genera el que sona probable.|Alucinación: respuesta falsa o inventada con tono seguro. No es mala fe: el modelo genera lo que suena probable.",
      "Senyals d'alerta: xifres molt exactes, cites literals, noms i dates, llibres i enllaços, temes molt recents o molt locals.|Señales de alerta: cifras muy exactas, citas literales, nombres y fechas, libros y enlaces, temas muy recientes o muy locales.",
      "Lectura lateral: comprovar en dues fonts fiables i independents. Preguntar «segur?» a la mateixa IA no és comprovar.|Lectura lateral: comprobar en dos fuentes fiables e independientes. Preguntar «¿seguro?» a la misma IA no es comprobar.",
      "Les eines (cercador, documents) redueixen els errors però no els eliminen: cal obrir les fonts.|Las herramientas (buscador, documentos) reducen los errores pero no los eliminan: hay que abrir las fuentes."
    ],
    prev: ["Sessió i3-1: sense eines, un xatbot no pot saber res d'avui; unitat 1: fluid no vol dir cert.|Sesión i3-1: sin herramientas, un chatbot no puede saber nada de hoy; unidad 1: fluido no quiere decir cierto."],
    obj: [
      "L'alumne/a defineix una al·lucinació i n'explica la causa.|El alumno/a define una alucinación y explica su causa.",
      "L'alumne/a identifica els senyals d'alerta en una resposta d'una IA.|El alumno/a identifica las señales de alerta en una respuesta de una IA.",
      "L'alumne/a comprova dades amb fonts fiables i independents (lectura lateral).|El alumno/a comprueba datos con fuentes fiables e independientes (lectura lateral).",
      "L'alumne/a escriu prompts que demanen respostes comprovables.|El alumno/a escribe prompts que piden respuestas comprobables."
    ],
    comp: [
      "Competència digital (CD1): cerca i avaluació crítica de la informació|Competencia digital (CD1): búsqueda y evaluación crítica de la información",
      "Competència ciutadana (CC): pensament crític davant la desinformació|Competencia ciudadana (CC): pensamiento crítico ante la desinformación",
      "Competència matemàtica (STEM1): comprovar càlculs|Competencia matemática (STEM1): comprobar cálculos"
    ],
    vocab: [
      ["Al·lucinació|Alucinación", "Resposta falsa o inventada que una IA dona amb seguretat.|Respuesta falsa o inventada que una IA da con seguridad."],
      ["Lectura lateral|Lectura lateral", "Comprovar una informació obrint altres fonts, en lloc de quedar-se dins de la mateixa.|Comprobar una información abriendo otras fuentes, en lugar de quedarse dentro de la misma."],
      ["Font fiable|Fuente fiable", "Font coneguda, amb autoria clara i que es pot verificar (enciclopèdia, entitat oficial, mitjà seriós).|Fuente conocida, con autoría clara y que se puede verificar (enciclopedia, entidad oficial, medio serio)."],
      ["Fonts independents|Fuentes independientes", "Fonts que no copien l'una de l'altra.|Fuentes que no se copian entre sí."],
      ["Cita mal atribuïda|Cita mal atribuida", "Frase que s'atribueix a algú que no la va dir mai.|Frase que se atribuye a alguien que no la dijo nunca."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Al·lucinacions: caça l'error»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Alucinaciones: caza el error»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Llibres de text de ciències o una enciclopèdia per grup|Libros de texto de ciencias o una enciclopedia por grupo"],
      imprimir: ["Les afirmacions de la IA (imprimible 1): un per grup de tres|Las afirmaciones de la IA (imprimible 1): uno por grupo de tres"],
      prep: ["Imprimir el full de les afirmacions i tenir les fonts a mà.|Imprimir la hoja de las afirmaciones y tener las fuentes a mano.", "Llegir les solucions del full (són al solucionari de l'imprimible).|Leer las soluciones de la hoja (están en el solucionario del imprimible).", "Pensar un exemple proper d'informació falsa que s'hagi escampat (sense persones reals de l'aula).|Pensar un ejemplo cercano de información falsa que se haya difundido (sin personas reales del aula)."]
    },
    plan: [
      { min: 5, t: 'El treball d\'en Pol|El trabajo de Pol', fase: 'inici',
        fa: "Explica la història d'en Pol: un treball amb un llibre, una xifra i una cita que no eren certs. Pregunta qui ha trobat mai una dada falsa en una resposta d'una IA.|Explica la historia de Pol: un trabajo con un libro, una cifra y una cita que no eran ciertos. Pregunta quién ha encontrado alguna vez un dato falso en una respuesta de una IA.",
        diu: ["Per què creieu que el xatbot s'ho va inventar?|¿Por qué creéis que el chatbot se lo inventó?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és, per què passa i on s'amaga|Qué es, por qué pasa y dónde se esconde", fase: 'teoria',
        fa: "Amb les animacions i la demo del xat: definició, causes, fonts inventades, lectura lateral i senyals d'alerta.|Con las animaciones y la demo del chat: definición, causas, fuentes inventadas, lectura lateral y señales de alerta.",
        diu: ["La IA menteix?|¿La IA miente?", "Quines dades d'una resposta comprovaríeu primer?|¿Qué datos de una respuesta comprobaríais primero?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'Veritat o invenció?|¿Verdad o invención?', fase: 'desconnectat',
        fa: "En grups de tres, marquen les afirmacions sospitoses del full, decideixen com les comprovarien i en comproven almenys 4 amb les fonts de l'aula.|En grupos de tres, marcan las afirmaciones sospechosas de la hoja, deciden cómo las comprobarían y comprueban al menos 4 con las fuentes del aula.",
        diu: ["Quina falsa sonava més bé?|¿Cuál falsa sonaba mejor?", "Quina font us ha servit més?|¿Qué fuente os ha servido más?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3|Grupos de 3" },
      { min: 27, t: "A l'ordinador: caça d'al·lucinacions|En el ordenador: caza de alucinaciones", fase: 'ordinador',
        fa: "Fan la sessió de l'app: el xat de les abelles, la comprovació de fonts, la classificació de maneres de verificar, el xat de l'excursió (amb un error de càlcul) i el prompt antial·lucinacions. Fes la pausa activa amb tothom.|Hacen la sesión de la app: el chat de las abejas, la comprobación de fuentes, la clasificación de maneras de verificar, el chat de la excursión (con un error de cálculo) y el prompt antialucinaciones. Haz la pausa activa con todo el mundo.",
        diu: ["Quina al·lucinació us ha costat més de trobar?|¿Qué alucinación os ha costado más encontrar?", "Per què «una altra IA diu el mateix» no serveix?|¿Por qué «otra IA dice lo mismo» no sirve?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (el prompt antial·lucinacions).|De «Recuerda» hasta el paso «Crea» (el prompt antialucinaciones).", org: "Individual|Individual" },
      { min: 8, t: 'Tancament: el protocol del caçador|Cierre: el protocolo del cazador', fase: 'tancament',
        fa: "Construïu junts un protocol de 3 passos (desconfia del to, busca en dues fonts, si no ho trobes no ho facis servir). Tiquet de sortida i com s'han sentit.|Construid juntos un protocolo de 3 pasos (desconfía del tono, busca en dos fuentes, si no lo encuentras no lo uses). Tique de salida y cómo se han sentido.",
        diu: ["Què fareu la propera vegada que una IA us doni una xifra?|¿Qué haréis la próxima vez que una IA os dé una cifra?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Pensa que la IA menteix a propòsit.|Piensa que la IA miente a propósito.", "No té intenció: genera el que és probable. Per això cal comprovar, no enfadar-se.|No tiene intención: genera lo probable. Por eso hay que comprobar, no enfadarse."],
      ["Marca com a falses totes les respostes «per si de cas».|Marca como falsas todas las respuestas «por si acaso».", "El xat avisa quan una frase és certa: l'objectiu és distingir, no desconfiar de tot igual.|El chat avisa cuando una frase es cierta: el objetivo es distinguir, no desconfiar de todo por igual."],
      ["Comprova preguntant-ho a la mateixa IA.|Comprueba preguntándolo a la misma IA.", "Cal una font independent: llibre, enciclopèdia, entitat oficial o una persona experta.|Hace falta una fuente independiente: libro, enciclopedia, entidad oficial o una persona experta."],
      ["No veu l'error de càlcul de l'excursió.|No ve el error de cálculo de la excursión.", "Fes que facin el càlcul a mà o amb la calculadora: 28 × 15 = 420.|Haz que hagan el cálculo a mano o con la calculadora: 28 × 15 = 420."],
      ["Creu que si hi ha un enllaç, la dada és certa.|Cree que si hay un enlace, el dato es cierto.", "L'enllaç pot no existir o dir una altra cosa: s'ha d'obrir i llegir.|El enlace puede no existir o decir otra cosa: hay que abrirlo y leerlo."]
    ],
    diff: {
      mes: "Nivell PRO: trobar les 4 al·lucinacions del xat de les abelles (també la subtil dels ulls), els 3 errors de l'excursió, la pregunta de la IA amb cercador i un prompt antial·lucinacions amb 5 peces.|Nivel PRO: encontrar las 4 alucinaciones del chat de las abejas (también la sutil de los ojos), los 3 errores de la excursión, la pregunta de la IA con buscador y un prompt antialucinaciones con 5 piezas.",
      menys: "Fer els xats en parella i, abans, repassar en veu alta els senyals d'alerta. Al full de les afirmacions, comprovar-ne només 2.|Hacer los chats en pareja y, antes, repasar en voz alta las señales de alerta. En la hoja de las afirmaciones, comprobar solo 2."
    },
    aval: {
      ticket: ["Escriu dos senyals d'alerta d'una al·lucinació.|Escribe dos señales de alerta de una alucinación.", "Com comprovaries un llibre que et cita una IA?|¿Cómo comprobarías un libro que te cita una IA?"],
      rubric: [
        ["Concepte|Concepto", "Defineix al·lucinació i n'explica la causa.|Define alucinación y explica su causa.", "Diu que la IA «menteix» o «està espatllada».|Dice que la IA «miente» o «está estropeada»."],
        ["Detecció|Detección", "Troba les al·lucinacions i distingeix les frases certes.|Encuentra las alucinaciones y distingue las frases ciertas.", "Marca a l'atzar.|Marca al azar."],
        ["Verificació|Verificación", "Fa servir fonts fiables i independents.|Usa fuentes fiables e independientes.", "Pregunta a la mateixa IA.|Pregunta a la misma IA."],
        ["Prompt|Prompt", "Demana respostes curtes, sense dades dubtoses i amb on comprovar-les.|Pide respuestas cortas, sin datos dudosos y con dónde comprobarlas.", "No demana cap comprovació.|No pide ninguna comprobación."]
      ]
    },
    casa: "A casa, trieu una dada curiosa que hàgiu vist a internet o en un vídeo (un rècord, una cita famosa, un «sabies que…?») i comproveu-la junts en dues fonts fiables. Era certa?|En casa, elegid un dato curioso que hayáis visto en internet o en un vídeo (un récord, una cita famosa, un «¿sabías que…?») y comprobadlo juntos en dos fuentes fiables. ¿Era cierto?",
    faq: [
      ["Per què les IA s'inventen fonts?|¿Por qué las IA se inventan fuentes?", "Perquè generen text probable: una referència bibliogràfica té un format molt repetit (autor, any, títol, editorial) i el model el pot reproduir encara que el llibre no existeixi. Amb cercador passa menys, però pot citar fonts reals i resumir-les malament.|Porque generan texto probable: una referencia bibliográfica tiene un formato muy repetido (autor, año, título, editorial) y el modelo lo puede reproducir aunque el libro no exista. Con buscador pasa menos, pero puede citar fuentes reales y resumirlas mal."],
      ["Hi ha IA que no al·lucinin?|¿Hay IA que no alucinen?", "No. Connectar-les a fonts fiables i demanar-los que diguin quan dubten redueix els errors, però cap no n'està lliure. Per això verificar és una competència clau.|No. Conectarlas a fuentes fiables y pedirles que digan cuándo dudan reduce los errores, pero ninguna está libre de ellos. Por eso verificar es una competencia clave."],
      ["La cita d'Einstein sobre les abelles és falsa?|¿La cita de Einstein sobre las abejas es falsa?", "No hi ha cap prova que Einstein la digués: és un exemple clàssic de cita mal atribuïda que circula per internet. Els models la repeteixen perquè l'han llegit moltes vegades.|No hay ninguna prueba de que Einstein la dijera: es un ejemplo clásico de cita mal atribuida que circula por internet. Los modelos la repiten porque la han leído muchas veces."]
    ],
    tec: [
      ["El xat de les abelles no s'acaba.|El chat de las abejas no termina.", "Cal arribar al final de la conversa i haver marcat almenys 3 al·lucinacions (4 amb PRO). Si s'han passat de llarg, poden tornar a obrir el pas.|Hay que llegar al final de la conversación y haber marcado al menos 3 alucinaciones (4 con PRO). Si se las han saltado, pueden volver a abrir el paso."],
      ["La 🚩 d'una frase certa queda en gris.|La 🚩 de una frase cierta queda en gris.", "És normal: el xat explica per què era certa. No resta punts.|Es normal: el chat explica por qué era cierta. No resta puntos."]
    ],
    seg: ["Cap exemple amb persones reals de l'entorn: les al·lucinacions sobre persones concretes poden fer mal. A l'app, les persones, els llibres i els instituts són inventats.|Ningún ejemplo con personas reales del entorno: las alucinaciones sobre personas concretas pueden hacer daño. En la app, las personas, los libros y los institutos son inventados."],
    extra: [
      "Ciències: fer una fitxa d'«animals amb dades sorprenents» comprovades en dues fonts.|Ciencias: hacer una ficha de «animales con datos sorprendentes» comprobados en dos fuentes.",
      "Llengua: analitzar com una resposta falsa «sona» segura (connectors, xifres, to) i reescriure-la amb prudència.|Lengua: analizar cómo una respuesta falsa «suena» segura (conectores, cifras, tono) y reescribirla con prudencia."
    ],
    trans: ["Sessió i3-3: escriure prompts que redueixin les al·lucinacions. Unitat 7: desinformació i societat.|Sesión i3-3: escribir prompts que reduzcan las alucinaciones. Unidad 7: desinformación y sociedad."],
    slides: [
      { id: 's1', k: 'portada', t: "Al·lucinacions: caça l'error|Alucinaciones: caza el error", x: 'Parlar amb models de llenguatge|Hablar con modelos de lenguaje', nota: "Sessió 2 de la unitat 3.|Sesión 2 de la unidad 3." },
      { id: 's2', k: 'pregunta', t: "D'on ho has tret, Pol?|¿De dónde lo has sacado, Pol?", x: "Un llibre que no existeix, una xifra inventada i una cita falsa.|Un libro que no existe, una cifra inventada y una cita falsa.", nota: "Pregunta qui ha trobat mai una dada falsa d'una IA.|Pregunta quién ha encontrado alguna vez un dato falso de una IA." },
      { id: 's3', k: 'media', t: 'Segura… i falsa|Segura… y falsa', x: "El llibre no existeix, però la resposta sona perfecta.|El libro no existe, pero la respuesta suena perfecta.", media: { k: 'ia', demo: 'chat', msgs: [['me', 'Qui va escriure «El far de les balenes»?|¿Quién escribió «El faro de las ballenas»?'], ['them', 'El va escriure Marta Riera el 1987 i va guanyar un premi de novel·la juvenil.|Lo escribió Marta Riera en 1987 y ganó un premio de novela juvenil.', true]] }, nota: "Defineix al·lucinació.|Define alucinación." },
      { id: 's4', k: 'anim', t: 'No menteix: prediu|No miente: predice', anim: 'i32why', x: "Tria el probable, barreja trossos i omple buits.|Elige lo probable, mezcla trozos y rellena huecos.", nota: "Connecta-ho amb «fluid no vol dir cert» de la unitat 1.|Conéctalo con «fluido no quiere decir cierto» de la unidad 1." },
      { id: 's5', k: 'anim', t: 'Fonts inventades|Fuentes inventadas', anim: 'i32src', x: "Busca el títol exacte i obre l'enllaç.|Busca el título exacto y abre el enlace.", nota: "Un format perfecte no és cap prova.|Un formato perfecto no es ninguna prueba." },
      { id: 's6', k: 'anim', t: 'La lectura lateral|La lectura lateral', anim: 'i32lateral', x: "Dues fonts fiables i independents.|Dos fuentes fiables e independientes.", nota: "Preguntar «segur?» a la mateixa IA no compta.|Preguntar «¿seguro?» a la misma IA no cuenta." },
      { id: 's7', k: 'anim', t: "On s'amaguen|Dónde se esconden", anim: 'i32flags', x: "Xifres, cites, noms i dates, fonts, temes recents i locals.|Cifras, citas, nombres y fechas, fuentes, temas recientes y locales.", nota: "Demana un exemple de cada.|Pide un ejemplo de cada." },
      { id: 's8', k: 'activitat', t: 'Veritat o invenció?|¿Verdad o invención?', timer: 10, punts: ["Marqueu les sospitoses abans de buscar.|Marcad las sospechosas antes de buscar.", "Decidiu com les comprovaríeu.|Decidid cómo las comprobaríais.", "Comproveu-ne almenys 4.|Comprobad al menos 4."], nota: "Full «Les afirmacions de la IA».|Hoja «Las afirmaciones de la IA»." },
      { id: 's9', k: 'pregunta', t: 'Quina falsa sonava més bé?|¿Cuál falsa sonaba mejor?', x: "Les més perilloses són les que sonen normals.|Las más peligrosas son las que suenan normales.", nota: "Comenteu la de la Gran Muralla: un mite molt repetit.|Comentad la de la Gran Muralla: un mito muy repetido." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 27, punts: ["El xat de les abelles.|El chat de las abejas.", "Com es comprova?|¿Cómo se comprueba?", "L'excursió i el prompt antial·lucinacions.|La excursión y el prompt antialucinaciones."], nota: "Fes la pausa activa amb tothom.|Haz la pausa activa con todo el mundo." },
      { id: 's11', k: 'repte', t: 'El xat de les abelles|El chat de las abejas', punts: ["Marca almenys 3 al·lucinacions.|Marca al menos 3 alucinaciones.", "Compte amb les frases certes!|¡Cuidado con las frases ciertas!"], nota: "PRO: les 4, també la dels ulls.|PRO: las 4, también la de los ojos." },
      { id: 's12', k: 'repte', t: "L'excursió|La excursión", punts: ["Un error de càlcul.|Un error de cálculo.", "Dades concretes que no pot saber.|Datos concretos que no puede saber."], nota: "28 × 15 = 420 €; total 740 €.|28 × 15 = 420 €; total 740 €." },
      { id: 's13', k: 'concepte', t: 'Prompt antial·lucinacions|Prompt antialucinaciones', punts: ["Resposta curta i concreta.|Respuesta corta y concreta.", "Sense dades dubtoses.|Sin datos dudosos.", "«Si no ho saps, digues-ho» i on comprovar-ho.|«Si no lo sabes, dilo» y dónde comprobarlo."], nota: "Es desa al portafoli.|Se guarda en el portafolio." },
      { id: 's14', k: 'concepte', t: 'El protocol del caçador|El protocolo del cazador', punts: ["1. Desconfia del to segur.|1. Desconfía del tono seguro.", "2. Busca-ho en dues fonts fiables.|2. Búscalo en dos fuentes fiables.", "3. Si no ho trobes, no ho facis servir.|3. Si no lo encuentras, no lo uses."], nota: "Pengeu-lo a l'aula.|Colgadlo en el aula." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ["Una al·lucinació és una invenció dita amb seguretat.|Una alucinación es una invención dicha con seguridad.", "Hi ha senyals d'alerta clars.|Hay señales de alerta claras.", "Es comprova amb fonts fiables i independents.|Se comprueba con fuentes fiables e independientes."], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Dos senyals d'alerta.|Dos señales de alerta.", "Com comprovaries un llibre citat per una IA?|¿Cómo comprobarías un libro citado por una IA?"], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'Les afirmacions de la IA|Las afirmaciones de la IA', k: 'fitxa',
        intro: "Un per grup de tres. Un xatbot inventat ha escrit aquestes 8 frases. Marqueu amb 🚩 les sospitoses, digueu com les comprovaríeu i comproveu-ne almenys 4.|Uno por grupo de tres. Un chatbot inventado ha escrito estas 8 frases. Marcad con 🚩 las sospechosas, decid cómo las comprobaríais y comprobad al menos 4.",
        items: [
          { q: "«L'aigua pura bull a 100 °C a nivell del mar.»|«El agua pura hierve a 100 °C al nivel del mar.»", sol: "Certa. Llibre de ciències.|Cierta. Libro de ciencias." },
          { q: "«Les abelles tenen cinc ulls.»|«Las abejas tienen cinco ojos.»", sol: "Certa: dos de grans i tres de petits.|Cierta: dos grandes y tres pequeños." },
          { q: "«Un estudi de la Universitat de Vall Clara (2019) va demostrar que els adolescents dormen exactament 6 h i 12 min.»|«Un estudio de la Universidad de Valle Claro (2019) demostró que los adolescentes duermen exactamente 6 h y 12 min.»", sol: "Inventada: universitat inexistent i xifra exactíssima.|Inventada: universidad inexistente y cifra exactísima." },
          { q: "«La Gran Muralla xinesa es veu a ull nu des de la Lluna.»|«La Gran Muralla china se ve a simple vista desde la Luna.»", sol: "Falsa: és un mite molt repetit.|Falsa: es un mito muy repetido." },
          { q: "«Els pops tenen tres cors.»|«Los pulpos tienen tres corazones.»", sol: "Certa. Enciclopèdia.|Cierta. Enciclopedia." },
          { q: "«Segons el llibre «Planetes oblidats» (Ed. Cosmos, 2016), Júpiter té un anell de diamants.»|«Según el libro «Planetas olvidados» (Ed. Cosmos, 2016), Júpiter tiene un anillo de diamantes.»", sol: "Inventada: el llibre no existeix i la dada és falsa.|Inventada: el libro no existe y el dato es falso." },
          { q: "«El cor humà té quatre cavitats: dues aurícules i dos ventricles.»|«El corazón humano tiene cuatro cavidades: dos aurículas y dos ventrículos.»", sol: "Certa. Llibre de ciències.|Cierta. Libro de ciencias." },
          { q: "«Einstein va dir: «Si les abelles desapareguessin, a la humanitat li quedarien quatre anys de vida».»|«Einstein dijo: «Si las abejas desaparecieran, a la humanidad le quedarían cuatro años de vida».»", sol: "Sense cap prova: cita mal atribuïda.|Sin ninguna prueba: cita mal atribuida." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · L'art del bon prompt ---------- */
  'i3-3': {
    intro: "L'alumnat aprèn a escriure bons prompts amb sis peces (context, tasca, format, exemple, límits i comprovació), a donar exemples perquè la IA n'imiti el patró, a iterar a partir de la resposta i a no posar-hi mai dades personals ni demanar que li facin la feina. Practica amb un avaluador de prompts per regles que dona una resposta simulada millor o pitjor segons el prompt, i acaba amb una plantilla mestra per estudiar qualsevol tema.|El alumnado aprende a escribir buenos prompts con seis piezas (contexto, tarea, formato, ejemplo, límites y comprobación), a dar ejemplos para que la IA imite el patrón, a iterar a partir de la respuesta y a no poner nunca datos personales ni pedir que le hagan el trabajo. Practica con un evaluador de prompts por reglas que da una respuesta simulada mejor o peor según el prompt, y termina con una plantilla maestra para estudiar cualquier tema.",
    claus: [
      "Les sis peces: context, tasca (verb clar), format, exemple, límits i comprovació.|Las seis piezas: contexto, tarea (verbo claro), formato, ejemplo, límites y comprobación.",
      "Un exemple al prompt fa que la IA n'imiti l'estructura, la llargada i el to.|Un ejemplo en el prompt hace que la IA imite su estructura, su longitud y su tono.",
      "Iterar: llegir, detectar què falla i demanar un canvi concret («més curt», «per a 2n d'ESO»).|Iterar: leer, detectar qué falla y pedir un cambio concreto («más corto», «para 2.º de ESO»).",
      "Sense dades personals i per aprendre: explica'm, pregunta'm, dona'm una pista, revisa el meu text.|Sin datos personales y para aprender: explícame, pregúntame, dame una pista, revisa mi texto."
    ],
    prev: ["Sessió i3-2: les al·lucinacions i la importància de demanar respostes comprovables.|Sesión i3-2: las alucinaciones y la importancia de pedir respuestas comprobables."],
    obj: [
      "L'alumne/a identifica les sis peces d'un bon prompt.|El alumno/a identifica las seis piezas de un buen prompt.",
      "L'alumne/a escriu prompts amb context, tasca, format i límits adequats a una tasca escolar.|El alumno/a escribe prompts con contexto, tarea, formato y límites adecuados a una tarea escolar.",
      "L'alumne/a millora un prompt iterant a partir de la resposta.|El alumno/a mejora un prompt iterando a partir de la respuesta.",
      "L'alumne/a evita les dades personals i fa servir la IA per aprendre.|El alumno/a evita los datos personales y usa la IA para aprender."
    ],
    comp: [
      "Competència en comunicació lingüística (CCL1, CCL2): escriure instruccions precises|Competencia en comunicación lingüística (CCL1, CCL2): escribir instrucciones precisas",
      "Competència digital (CD2, CD4): fer servir la IA amb criteri i protegir les dades|Competencia digital (CD2, CD4): usar la IA con criterio y proteger los datos",
      "Competència personal i d'aprendre a aprendre (CPSAA5): estratègies d'estudi|Competencia personal y de aprender a aprender (CPSAA5): estrategias de estudio"
    ],
    vocab: [
      ["Prompt|Prompt", "Instrucció o pregunta que s'escriu a una IA.|Instrucción o pregunta que se escribe a una IA."],
      ["Context|Contexto", "Per a qui i per a què és la resposta (curs, tema, objectiu).|Para quién y para qué es la respuesta (curso, tema, objetivo)."],
      ["Format|Formato", "Com ha de ser la resposta: llargada, llista, taula, pas a pas.|Cómo debe ser la respuesta: longitud, lista, tabla, paso a paso."],
      ["Exemple (al prompt)|Ejemplo (en el prompt)", "Mostra del que vols perquè la IA n'imiti el patró.|Muestra de lo que quieres para que la IA imite el patrón."],
      ["Iterar|Iterar", "Repetir millorant: llegir la resposta i ajustar el prompt.|Repetir mejorando: leer la respuesta y ajustar el prompt."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «L'art del bon prompt»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «El arte del buen prompt»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Fulls en blanc i llapis per parella|Hojas en blanco y lápices por pareja"],
      imprimir: ["Dibuixos secrets (imprimible 1): un full de targetes per parella|Dibujos secretos (imprimible 1): una hoja de tarjetas por pareja", "El meu prompt, de v1 a v3 (imprimible 2): un per alumne/a|Mi prompt, de v1 a v3 (imprimible 2): uno por alumno/a"],
      prep: ["Imprimir i retallar les targetes dels dibuixos secrets.|Imprimir y recortar las tarjetas de los dibujos secretos.", "Provar l'avaluador de prompts: les peces s'il·luminen quan es detecten i el missatge avisa de les dades personals.|Probar el evaluador de prompts: las piezas se iluminan cuando se detectan y el mensaje avisa de los datos personales.", "Si el grup té la IA en directe activada, decidir en quins reptes es farà servir (com a molt 8 preguntes per sessió).|Si el grupo tiene la IA en directo activada, decidir en qué retos se usará (como mucho 8 preguntas por sesión)."]
    },
    plan: [
      { min: 5, t: 'La Noa i en Jan|Noa y Jan', fase: 'inici',
        fa: "Explica la història: el mateix xatbot, dues respostes molt diferents. Pregunta què creuen que va escriure en Jan.|Explica la historia: el mismo chatbot, dos respuestas muy distintas. Pregunta qué creen que escribió Jan.",
        diu: ["Què li faltava al prompt de la Noa?|¿Qué le faltaba al prompt de Noa?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'Les sis peces, exemples i iterar|Las seis piezas, ejemplos e iterar', fase: 'teoria',
        fa: "Amb les animacions, presenta les sis peces, compara un prompt vague i un de precís, mostra l'efecte d'un exemple, la iteració i el que no s'hi ha de posar mai.|Con las animaciones, presenta las seis piezas, compara un prompt vago y uno preciso, muestra el efecto de un ejemplo, la iteración y lo que no se debe poner nunca.",
        diu: ["Quina peça us costa més de recordar?|¿Qué pieza os cuesta más recordar?", "Per què «fes-me els deures» no és un bon prompt?|¿Por qué «hazme los deberes» no es un buen prompt?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'El dibuixant literal|El dibujante literal', fase: 'desconnectat',
        fa: "En parelles, una persona escriu un prompt per a un dibuix secret i l'altra el dibuixa literalment. Milloren el prompt (v2) i tornen a provar.|En parejas, una persona escribe un prompt para un dibujo secreto y la otra lo dibuja literalmente. Mejoran el prompt (v2) y vuelven a probar.",
        diu: ["Què havíeu donat per fet?|¿Qué habíais dado por hecho?", "Quina peça ha millorat més el dibuix?|¿Qué pieza ha mejorado más el dibujo?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 27, t: "A l'ordinador: el taller de prompts|En el ordenador: el taller de prompts", fase: 'ordinador',
        fa: "Fan la sessió de l'app: el primer prompt amb peces, classificar prompts, el resum per estudiar, el prompt amb exemple, treure dades personals d'un prompt i la plantilla mestra. Fes la pausa activa amb tothom.|Hacen la sesión de la app: el primer prompt con piezas, clasificar prompts, el resumen para estudiar, el prompt con ejemplo, quitar datos personales de un prompt y la plantilla maestra. Haz la pausa activa con todo el mundo.",
        diu: ["Com ha canviat la resposta en afegir el format?|¿Cómo ha cambiado la respuesta al añadir el formato?", "Què heu fet amb les dades de la Marta?|¿Qué habéis hecho con los datos de Marta?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (la plantilla mestra).|De «Recuerda» hasta el paso «Crea» (la plantilla maestra).", org: "Individual|Individual" },
      { min: 8, t: 'Tancament: la plantilla de la classe|Cierre: la plantilla de la clase', fase: 'tancament',
        fa: "Comparteixen algunes plantilles mestres i en feu una de la classe a la pissarra. Tiquet de sortida i com s'han sentit.|Comparten algunas plantillas maestras y hacéis una de la clase en la pizarra. Tique de salida y cómo se han sentido.",
        diu: ["En quina assignatura faríeu servir la plantilla?|¿En qué asignatura usaríais la plantilla?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu prompts molt llargs però sense format ni context.|Escribe prompts muy largos pero sin formato ni contexto.", "La llargada no és el que compta: mira quines peces s'il·luminen a la rúbrica.|La longitud no es lo que cuenta: mira qué piezas se iluminan en la rúbrica."],
      ["Posa dades reals per «fer-ho realista».|Pone datos reales para «hacerlo realista».", "Fes servir marcadors com [nom] o [data] i omple'ls tu després, fora de la IA.|Usa marcadores como [nombre] o [fecha] y rellénalos tú después, fuera de la IA."],
      ["Copia les peces sense llegir la resposta.|Copia las piezas sin leer la respuesta.", "Demana-li què ha millorat de la resposta: iterar és llegir i decidir.|Pregúntale qué ha mejorado de la respuesta: iterar es leer y decidir."],
      ["Pensa que l'avaluador és una IA que ho entén tot.|Piensa que el evaluador es una IA que lo entiende todo.", "És una rúbrica per regles: busca paraules típiques de cada peça. Serveix per entrenar l'hàbit, no per jutjar.|Es una rúbrica por reglas: busca palabras típicas de cada pieza. Sirve para entrenar el hábito, no para juzgar."],
      ["Demana «fes-me l'exercici» i s'estranya que no passi.|Pide «hazme el ejercicio» y se extraña de que no pase.", "Transforma-ho: «explica'm l'error», «dona'm una pista», «pregunta'm».|Transfórmalo: «explícame el error», «dame una pista», «pregúntame»."]
    ],
    diff: {
      mes: "Nivell PRO: identificar dues peces que falten, un resum amb 5 peces (també comprovació) i una plantilla amb les 6 peces. Repte extra: prompts amb rol («fes de…»).|Nivel PRO: identificar dos piezas que faltan, un resumen con 5 piezas (también comprobación) y una plantilla con las 6 piezas. Reto extra: prompts con rol («haz de…»).",
      menys: "Fer servir els botons de peces al primer prompt i tenir a la pissarra les sis peces amb una paraula clau de cada.|Usar los botones de piezas en el primer prompt y tener en la pizarra las seis piezas con una palabra clave de cada una."
    },
    aval: {
      ticket: ["Escriu un prompt amb almenys 4 peces per estudiar un tema.|Escribe un prompt con al menos 4 piezas para estudiar un tema.", "Què faries si la resposta és massa llarga?|¿Qué harías si la respuesta es demasiado larga?"],
      rubric: [
        ["Peces del prompt|Piezas del prompt", "Fa servir context, tasca, format i límits.|Usa contexto, tarea, formato y límites.", "Només escriu el tema.|Solo escribe el tema."],
        ["Exemple|Ejemplo", "Dona un exemple que defineix el format.|Da un ejemplo que define el formato.", "No sap per a què serveix un exemple.|No sabe para qué sirve un ejemplo."],
        ["Iteració|Iteración", "Millora el prompt a partir de la resposta.|Mejora el prompt a partir de la respuesta.", "Repeteix el mateix prompt.|Repite el mismo prompt."],
        ["Privadesa i honestedat|Privacidad y honestidad", "Treu les dades personals i demana per aprendre.|Quita los datos personales y pide para aprender.", "Hi deixa dades o demana que li facin la feina.|Deja datos o pide que le hagan el trabajo."]
      ]
    },
    casa: "A casa, ensenyeu a algú de la família la vostra plantilla mestra. Penseu junts un tema que vulguin aprendre (una recepta, un esport, una afició) i adapteu-hi la plantilla.|En casa, enseñad a alguien de la familia vuestra plantilla maestra. Pensad juntos un tema que quieran aprender (una receta, un deporte, una afición) y adaptad la plantilla.",
    faq: [
      ["Cal escriure els prompts en anglès?|¿Hay que escribir los prompts en inglés?", "No: els models actuals entenen bé el català i el castellà. Escriviu-los en la llengua en què vulgueu la resposta.|No: los modelos actuales entienden bien el catalán y el castellano. Escribidlos en la lengua en la que queráis la respuesta."],
      ["L'avaluador de prompts de l'app és una IA?|¿El evaluador de prompts de la app es una IA?", "No: és una rúbrica per regles que busca les sis peces, els avisos de dades personals i el «fes-me els deures». Les respostes són simulades segons el nivell del prompt.|No: es una rúbrica por reglas que busca las seis piezas, los avisos de datos personales y el «hazme los deberes». Las respuestas son simuladas según el nivel del prompt."],
      ["Un prompt perfecte garanteix una resposta correcta?|¿Un prompt perfecto garantiza una respuesta correcta?", "No: millora molt la resposta, però la IA es pot continuar equivocant. Per això la peça de comprovació és tan important.|No: mejora mucho la respuesta, pero la IA se puede seguir equivocando. Por eso la pieza de comprobación es tan importante."]
    ],
    tec: [
      ["La rúbrica no detecta una peça que sí que hi ha.|La rúbrica no detecta una pieza que sí está.", "Busca paraules típiques: prova «en 5 punts» (format), «sense…» (límits), «per exemple» (exemple), «si no ho saps, digues-ho» (comprovar).|Busca palabras típicas: prueba «en 5 puntos» (formato), «sin…» (límites), «por ejemplo» (ejemplo), «si no lo sabes, dilo» (comprobar)."],
      ["El repte de les dades no passa encara que el prompt sigui bo.|El reto de los datos no pasa aunque el prompt sea bueno.", "Queda algun correu, nom o adreça: esborreu-los del tot.|Queda algún correo, nombre o dirección: borradlos del todo."]
    ],
    seg: ["Els prompts desats al portafoli no han de tenir dades personals. Feu servir marcadors com [nom] o [tema].|Los prompts guardados en el portafolio no deben tener datos personales. Usad marcadores como [nombre] o [tema]."],
    extra: [
      "Llengua: escriure instruccions precises (receptes, normes d'un esport) i provar-les amb un company que les segueixi literalment.|Lengua: escribir instrucciones precisas (recetas, normas de un deporte) y probarlas con un compañero que las siga literalmente.",
      "Qualsevol matèria: fer servir la plantilla mestra per preparar un examen i comparar-ne les preguntes amb les del llibre.|Cualquier materia: usar la plantilla maestra para preparar un examen y comparar sus preguntas con las del libro."
    ],
    trans: ["Sessió i3-4: el projecte de la IA com a tutora. Unitat 5: prompts per fer programes (vibe coding).|Sesión i3-4: el proyecto de la IA como tutora. Unidad 5: prompts para hacer programas (vibe coding)."],
    slides: [
      { id: 's1', k: 'portada', t: "L'art del bon prompt|El arte del buen prompt", x: 'Parlar amb models de llenguatge|Hablar con modelos de lenguaje', nota: "Sessió 3 de la unitat 3.|Sesión 3 de la unidad 3." },
      { id: 's2', k: 'pregunta', t: 'Mateix xatbot, dues respostes|Mismo chatbot, dos respuestas', x: "Què va escriure en Jan perquè li sortís tan bé?|¿Qué escribió Jan para que le saliera tan bien?", nota: "Recull idees: el curs, el format…|Recoge ideas: el curso, el formato…" },
      { id: 's3', k: 'anim', t: 'Les sis peces|Las seis piezas', anim: 'i33anat', x: "Context, tasca, format, exemple, límits i comprovació.|Contexto, tarea, formato, ejemplo, límites y comprobación.", nota: "Escriu-les a la pissarra per a tota la sessió.|Escríbelas en la pizarra para toda la sesión." },
      { id: 's4', k: 'anim', t: 'Vague o precís?|¿Vago o preciso?', anim: 'i33compare', x: "Si li dones poc, omple els buits amb el més habitual.|Si le das poco, rellena los huecos con lo más habitual.", nota: "Demana com milloraries «volcans».|Pide cómo mejorarías «volcanes»." },
      { id: 's5', k: 'anim', t: "Ensenya-li el patró|Enséñale el patrón", anim: 'i33few', x: "Un exemple fa que n'imiti l'estructura.|Un ejemplo hace que imite su estructura.", nota: "Recorda el model base de la sessió 1.|Recuerda el modelo base de la sesión 1." },
      { id: 's6', k: 'anim', t: 'Iterar|Iterar', anim: 'i33iter', x: "Llegeix, mira què falla i demana un canvi concret.|Lee, mira qué falla y pide un cambio concreto.", nota: "«Malament» no és una instrucció.|«Mal» no es una instrucción." },
      { id: 's7', k: 'anim', t: 'Amb cap|Con cabeza', anim: 'i33safe', x: "Cap dada personal; demana per aprendre.|Ningún dato personal; pide para aprender.", nota: "Connecta-ho amb el projecte de la sessió següent.|Conéctalo con el proyecto de la sesión siguiente." },
      { id: 's8', k: 'activitat', t: 'El dibuixant literal|El dibujante literal', timer: 10, punts: ["Fes un dibuix secret i escriu-ne el prompt.|Haz un dibujo secreto y escribe su prompt.", "El model dibuixa literalment.|El modelo dibuja literalmente.", "Milloreu-lo (v2) i torneu-hi.|Mejoradlo (v2) y volved a probar."], nota: "Targetes «Dibuixos secrets».|Tarjetas «Dibujos secretos»." },
      { id: 's9', k: 'pregunta', t: 'Què havíeu donat per fet?|¿Qué habíais dado por hecho?', x: "Mida, posició, colors… el model no ho sap.|Tamaño, posición, colores… el modelo no lo sabe.", nota: "Igual que una IA: no et llegeix la ment.|Igual que una IA: no te lee la mente." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 27, punts: ["El primer prompt amb peces.|El primer prompt con piezas.", "Resum, exemple i dades personals.|Resumen, ejemplo y datos personales.", "La plantilla mestra.|La plantilla maestra."], nota: "Fes la pausa activa amb tothom.|Haz la pausa activa con todo el mundo." },
      { id: 's11', k: 'repte', t: 'Resum per estudiar|Resumen para estudiar', punts: ["Context, tasca, format i límits.|Contexto, tarea, formato y límites.", "PRO: també comprovació.|PRO: también comprobación."], nota: "Mireu com canvia la resposta simulada.|Mirad cómo cambia la respuesta simulada." },
      { id: 's12', k: 'repte', t: 'Alerta, dades!|¡Alerta, datos!', punts: ["Treu el nom, l'adreça i el correu.|Quita el nombre, la dirección y el correo.", "Fes servir [nom] i [data].|Usa [nombre] y [fecha]."], nota: "La IA no necessita les teves dades per redactar.|La IA no necesita tus datos para redactar." },
      { id: 's13', k: 'concepte', t: 'Truc PRO: el rol|Truco PRO: el rol', punts: ["«Fes de dependent / de tutor / d'entrevistador…»|«Haz de dependiente / de tutor / de entrevistador…»", "Et fa practicar, no et fa la feina.|Te hace practicar, no te hace el trabajo."], nota: "Repte extra de l'app.|Reto extra de la app." },
      { id: 's14', k: 'concepte', t: 'La plantilla de la classe|La plantilla de la clase', punts: ["Estic estudiant [tema] de [curs].|Estoy estudiando [tema] de [curso].", "Explica'm… en 4 punts, amb un exemple.|Explícame… en 4 puntos, con un ejemplo.", "Pregunta'm 3 coses. Si dubtes, digues-ho.|Pregúntame 3 cosas. Si dudas, dilo."], nota: "Feu-la entre tots a la pissarra.|Hacedla entre todos en la pizarra." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ["Les sis peces d'un bon prompt.|Las seis piezas de un buen prompt.", "A iterar a partir de la resposta.|A iterar a partir de la respuesta.", "Sense dades i per aprendre.|Sin datos y para aprender."], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Un prompt amb 4 peces.|Un prompt con 4 piezas.", "Què fas si la resposta és massa llarga?|¿Qué haces si la respuesta es demasiado larga?"], nota: "Respostes en un paper.|Respuestas en un papel." }
    ],
    print: [
      { id: 'p1', t: 'Dibuixos secrets|Dibujos secretos', k: 'targetes',
        intro: "Retalleu les targetes. Qui escriu el prompt n'agafa una i fa en secret un dibuix senzill d'aquella idea (3 o 4 formes).|Recortad las tarjetas. Quien escribe el prompt coge una y hace en secreto un dibujo sencillo de esa idea (3 o 4 formas).",
        items: [{ t: 'Robot amb antena 🤖|Robot con antena 🤖', n: 2 }, { t: 'Illa amb palmera 🏝️|Isla con palmera 🏝️', n: 2 }, { t: 'Coet i lluna 🚀|Cohete y luna 🚀', n: 2 }, { t: 'Casa amb arbre 🏡|Casa con árbol 🏡', n: 2 }, { t: 'Peix dins una peixera 🐟|Pez en una pecera 🐟', n: 2 }, { t: 'Gelat de tres boles 🍨|Helado de tres bolas 🍨', n: 2 }] },
      { id: 'p2', t: 'El meu prompt, de v1 a v3|Mi prompt, de v1 a v3', k: 'fitxa',
        intro: "Un per alumne/a. Escriu un prompt per estudiar un tema que tinguis aquesta setmana i millora'l dues vegades.|Uno por alumno/a. Escribe un prompt para estudiar un tema que tengas esta semana y mejóralo dos veces.",
        items: [
          { q: 'Versió 1 (com l\'escriuries sense pensar-hi):|Versión 1 (cómo lo escribirías sin pensar):', sol: "Per exemple: «Explica'm les fraccions».|Por ejemplo: «Explícame las fracciones»." },
          { q: 'Versió 2: afegeix context i format.|Versión 2: añade contexto y formato.', sol: "Per exemple: «Estic a 1r d'ESO. Explica'm les fraccions equivalents en 3 passos».|Por ejemplo: «Estoy en 1.º de ESO. Explícame las fracciones equivalentes en 3 pasos»." },
          { q: 'Versió 3: afegeix un exemple, un límit i la comprovació.|Versión 3: añade un ejemplo, un límite y la comprobación.', big: true, sol: "Per exemple: «… amb un exemple de pizza, sense donar-me les solucions dels exercicis. Si dubtes, digues-ho».|Por ejemplo: «… con un ejemplo de pizza, sin darme las soluciones de los ejercicios. Si dudas, dilo»." },
          { q: 'Quina peça ha canviat més la resposta? Per què?|¿Qué pieza ha cambiado más la respuesta? ¿Por qué?', sol: "Resposta oberta: sovint el context i el format.|Respuesta abierta: a menudo el contexto y el formato." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: la IA com a tutora, no com a copiadora ---------- */
  'i3-4': {
    intro: "Projecte de la unitat 3. L'alumnat dissenya una rutina per estudiar amb IA que el faci pensar (prova-ho tu, demana una pista, respon preguntes sense mirar, comprova i explica-ho amb les teves paraules), la prova amb dos tutors simulats (un d'equacions que comet un error i un del cicle de l'aigua amb xat lliure), transforma prompts «copiadors» en prompts «tutors» i pacta les normes de la classe: honestedat i declaració d'ús, privadesa, i edat mínima i permís de la família per a serveis reals. Acaba amb un pòster de la rutina.|Proyecto de la unidad 3. El alumnado diseña una rutina para estudiar con IA que le haga pensar (inténtalo tú, pide una pista, responde preguntas sin mirar, comprueba y explícalo con tus palabras), la prueba con dos tutores simulados (uno de ecuaciones que comete un error y uno del ciclo del agua con chat libre), transforma prompts «copiadores» en prompts «tutores» y pacta las normas de la clase: honestidad y declaración de uso, privacidad, y edad mínima y permiso de la familia para servicios reales. Termina con un póster de la rutina.",
    claus: [
      "Tutora o copiadora: si qui pensa ets tu, la IA t'ajuda a aprendre; si et fa el resultat per entregar, no.|Tutora o copiadora: si quien piensa eres tú, la IA te ayuda a aprender; si te hace el resultado para entregar, no.",
      "Respondre preguntes sense mirar (i repartir-ho en dies) és de les maneres d'estudiar que més funcionen.|Responder preguntas sin mirar (y repartirlo en días) es de las maneras de estudiar que más funcionan.",
      "Honestedat: seguir les normes del centre i declarar l'ús de la IA en els treballs.|Honestidad: seguir las normas del centro y declarar el uso de la IA en los trabajos.",
      "Seguretat: cap dada personal; per a serveis reals, edat mínima de les condicions i permís de la família (a Espanya, consentiment familiar per sota dels 14 anys).|Seguridad: ningún dato personal; para servicios reales, edad mínima de las condiciones y permiso de la familia (en España, consentimiento familiar por debajo de los 14 años)."
    ],
    prev: ["Sessions i3-1 a i3-3: com funciona un xatbot, al·lucinacions i bons prompts.|Sesiones i3-1 a i3-3: cómo funciona un chatbot, alucinaciones y buenos prompts."],
    obj: [
      "L'alumne/a distingeix els usos de la IA que ajuden a aprendre dels que substitueixen l'aprenentatge.|El alumno/a distingue los usos de la IA que ayudan a aprender de los que sustituyen el aprendizaje.",
      "L'alumne/a dissenya i prova una rutina d'estudi amb IA.|El alumno/a diseña y prueba una rutina de estudio con IA.",
      "L'alumne/a comprova el que diu la IA, també quan fa de tutora.|El alumno/a comprueba lo que dice la IA, también cuando hace de tutora.",
      "L'alumne/a pacta i explica normes d'honestedat, privadesa i edat per fer servir IA.|El alumno/a pacta y explica normas de honestidad, privacidad y edad para usar IA."
    ],
    comp: [
      "Competència personal i d'aprendre a aprendre (CPSAA4, CPSAA5): estratègies d'estudi|Competencia personal y de aprender a aprender (CPSAA4, CPSAA5): estrategias de estudio",
      "Competència digital (CD4, CD5): ús segur i responsable de la IA|Competencia digital (CD4, CD5): uso seguro y responsable de la IA",
      "Competència ciutadana (CC2): normes de convivència i honestedat acadèmica|Competencia ciudadana (CC2): normas de convivencia y honestidad académica"
    ],
    vocab: [
      ["Tutora (IA)|Tutora (IA)", "Ús de la IA que et fa pensar: explica, pregunta, dona pistes i corregeix.|Uso de la IA que te hace pensar: explica, pregunta, da pistas y corrige."],
      ["Copiadora (IA)|Copiadora (IA)", "Ús de la IA que et fa la feina per entregar-la.|Uso de la IA que te hace el trabajo para entregarlo."],
      ["Pràctica de recuperació|Práctica de recuperación", "Estudiar responent preguntes de memòria, sense mirar.|Estudiar respondiendo preguntas de memoria, sin mirar."],
      ["Declaració d'ús|Declaración de uso", "Nota que explica com s'ha fet servir la IA en un treball.|Nota que explica cómo se ha usado la IA en un trabajo."],
      ["Edat mínima|Edad mínima", "Edat que demanen les condicions d'un servei per fer-lo servir.|Edad que piden las condiciones de un servicio para usarlo."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió del projecte|Un ordenador por alumno/a con Numi Tech abierto en la sesión del proyecto", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Fulls DIN A3 o cartolines i retoladors per grup|Hojas DIN A3 o cartulinas y rotuladores por grupo"],
      imprimir: ["La nostra rutina amb IA (imprimible 1): una per grup|Nuestra rutina con IA (imprimible 1): una por grupo", "Full de l'observador/a (imprimible 2): un per grup de tres|Hoja del observador/a (imprimible 2): una por grupo de tres"],
      prep: ["Imprimir els dos fulls i preparar el material del pòster.|Imprimir las dos hojas y preparar el material del póster.", "Tenir clares les normes del centre sobre la IA per poder-les explicar (o portar-ne una proposta).|Tener claras las normas del centro sobre la IA para poder explicarlas (o traer una propuesta).", "Preparar un espai a la paret per penjar els pòsters.|Preparar un espacio en la pared para colgar los pósters."]
    },
    plan: [
      { min: 5, t: 'Entrenadora, no substituta|Entrenadora, no sustituta', fase: 'inici',
        fa: "Presenta el projecte amb la metàfora de l'entrenadora. Pregunta per a què fan servir (o voldrien fer servir) la IA per estudiar.|Presenta el proyecto con la metáfora de la entrenadora. Pregunta para qué usan (o querrían usar) la IA para estudiar.",
        diu: ["Una entrenadora corre per tu?|¿Una entrenadora corre por ti?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: 'Copiadora o tutora, la rutina i les normes|Copiadora o tutora, la rutina y las normas', fase: 'teoria',
        fa: "Amb les animacions: dos usos de la IA, per què costa recordar i per això funciona, la rutina de cinc passos, les normes d'honestedat i l'edat i la privadesa.|Con las animaciones: dos usos de la IA, por qué cuesta recordar y por eso funciona, la rutina de cinco pasos, las normas de honestidad y la edad y la privacidad.",
        diu: ["Rellegir o fer-se preguntes: què us sembla més fàcil? I què funciona millor?|Releer o hacerse preguntas: ¿qué os parece más fácil? ¿Y qué funciona mejor?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 7, t: 'El tutor humà|El tutor humano', fase: 'desconnectat',
        fa: "En grups de tres (alumne/a, tutor/a i observador/a), el tutor només pot preguntar, donar pistes o posar exemples. L'observador apunta les estratègies al full. Canvien els papers si hi ha temps.|En grupos de tres (alumno/a, tutor/a y observador/a), el tutor solo puede preguntar, dar pistas o poner ejemplos. El observador apunta las estrategias en la hoja. Cambian los papeles si hay tiempo.",
        diu: ["Quina estratègia us ha fet pensar més?|¿Qué estrategia os ha hecho pensar más?"],
        slides: ['s8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3|Grupos de 3" },
      { min: 22, t: "A l'ordinador: provar la rutina|En el ordenador: probar la rutina", fase: 'ordinador',
        fa: "Fan la sessió de l'app: classificar tutora o copiadora, la declaració d'ús, el tutor d'equacions (amb un error per caçar), transformar un prompt copiador, l'edat mínima i la prova de la rutina amb el tutor del cicle de l'aigua.|Hacen la sesión de la app: clasificar tutora o copiadora, la declaración de uso, el tutor de ecuaciones (con un error por cazar), transformar un prompt copiador, la edad mínima y la prueba de la rutina con el tutor del ciclo del agua.",
        diu: ["Què ha passat quan heu demanat al tutor que us ho fes tot?|¿Qué ha pasado cuando habéis pedido al tutor que os lo hiciera todo?", "Heu vist l'error del tutor d'equacions?|¿Habéis visto el error del tutor de ecuaciones?"],
        slides: ['s9', 's10', 's11', 's12'], app: "Fins al pas «Crea» (la prova de la rutina i la rutina del grup).|Hasta el paso «Crea» (la prueba de la rutina y la rutina del grupo).", org: "Individual|Individual" },
      { min: 12, t: 'El pòster de la rutina|El póster de la rutina', fase: 'crea',
        fa: "En grups, fan el pòster: la rutina en cinc passos, tres normes i la frase de declaració. Cada grup el presenta en 60 segons i, entre tots, trieu les tres normes de la classe.|En grupos, hacen el póster: la rutina en cinco pasos, tres normas y la frase de declaración. Cada grupo lo presenta en 60 segundos y, entre todos, elegís las tres normas de la clase.",
        diu: ["Quina norma és la més important per a vosaltres?|¿Qué norma es la más importante para vosotros?"],
        slides: ['s13', 's14'], app: "El pas «El pòster de la rutina».|El paso «El póster de la rutina».", org: "Grups de 3|Grupos de 3" },
      { min: 6, t: 'Tancament de la unitat|Cierre de la unidad', fase: 'tancament',
        fa: "Repassa la unitat: com funciona un xatbot, al·lucinacions, prompts i tutoria. Pengeu els pòsters. Tiquet de sortida i com s'han sentit.|Repasa la unidad: cómo funciona un chatbot, alucinaciones, prompts y tutoría. Colgad los pósters. Tique de salida y cómo se han sentido.",
        diu: ["Què fareu diferent la propera vegada que estudieu amb IA?|¿Qué haréis distinto la próxima vez que estudiéis con IA?"],
        slides: ['s15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir el tutor simulat «per acabar abans» i tria sempre la solució.|Usa el tutor simulado «para acabar antes» y elige siempre la solución.", "Mira què passa: el tutor reconverteix la petició. Pregunta-li què ha après de l'equació.|Mira qué pasa: el tutor reconvierte la petición. Pregúntale qué ha aprendido de la ecuación."],
      ["No veu l'error del tutor (x = 3).|No ve el error del tutor (x = 3).", "Demana-li que faci la divisió a mà: 15 ÷ 3. Comprovar també és part de la rutina.|Pídele que haga la división a mano: 15 ÷ 3. Comprobar también es parte de la rutina."],
      ["Creu que declarar l'ús de la IA és «confessar» una cosa dolenta.|Cree que declarar el uso de la IA es «confesar» algo malo.", "Declarar és explicar com has treballat, com citar una font. És el que fan els professionals.|Declarar es explicar cómo has trabajado, como citar una fuente. Es lo que hacen los profesionales."],
      ["Pensa que si menteix a l'edat no passa res.|Piensa que si miente en la edad no pasa nada.", "Les edats mínimes protegeixen les dades i els continguts; parla-ho amb la família.|Las edades mínimas protegen los datos y los contenidos; háblalo con la familia."],
      ["Al pòster posa normes impossibles («no fer servir mai la IA»).|En el póster pone normas imposibles («no usar nunca la IA»).", "Busqueu normes concretes i realistes: quan sí, com, i com es declara.|Buscad normas concretas y realistas: cuándo sí, cómo, y cómo se declara."]
    ],
    diff: {
      mes: "Nivell PRO: el cas del paràgraf retocat i el prompt de tutor amb 5 peces (també comprovació). Proposar una norma del centre sobre IA i redactar-la com un article breu.|Nivel PRO: el caso del párrafo retocado y el prompt de tutor con 5 piezas (también comprobación). Proponer una norma del centro sobre IA y redactarla como un artículo breve.",
      menys: "Treballar el tutor d'equacions en parella i donar frases inici per al pòster («Primer…», «Si m'encallo…», «Per comprovar-ho…»).|Trabajar el tutor de ecuaciones en pareja y dar frases de inicio para el póster («Primero…», «Si me atasco…», «Para comprobarlo…»)."
    },
    aval: {
      ticket: ["Escriu els cinc passos de la rutina amb IA.|Escribe los cinco pasos de la rutina con IA.", "Com declararies que has fet servir IA en un treball?|¿Cómo declararías que has usado IA en un trabajo?"],
      rubric: [
        ["Rutina|Rutina", "Rutina completa i realista que fa pensar.|Rutina completa y realista que hace pensar.", "Rutina que deixa que la IA ho faci tot.|Rutina que deja que la IA lo haga todo."],
        ["Prova|Prueba", "Prova la rutina amb el tutor i en comprova les respostes.|Prueba la rutina con el tutor y comprueba sus respuestas.", "No comprova res.|No comprueba nada."],
        ["Prompt de tutor|Prompt de tutor", "Transforma el prompt copiador en un de tutor.|Transforma el prompt copiador en uno de tutor.", "Continua demanant la solució.|Sigue pidiendo la solución."],
        ["Normes|Normas", "Normes concretes d'honestedat, privadesa i edat.|Normas concretas de honestidad, privacidad y edad.", "Normes vagues o impossibles.|Normas vagas o imposibles."],
        ["Comunicació|Comunicación", "Presenta el pòster amb claredat.|Presenta el póster con claridad.", "Presentació confusa.|Presentación confusa."]
      ]
    },
    casa: "A casa, ensenyeu el pòster a la família i parleu de les apps d'IA que feu servir o voldríeu fer servir: quina edat demanen les condicions? Cal el seu permís? Pacteu junts com i per a què les fareu servir.|En casa, enseñad el póster a la familia y hablad de las apps de IA que usáis o querríais usar: ¿qué edad piden sus condiciones? ¿Hace falta su permiso? Pactad juntos cómo y para qué las usaréis.",
    faq: [
      ["Quina edat cal per fer servir un xatbot real?|¿Qué edad hace falta para usar un chatbot real?", "Depèn de cada servei: mireu-ne les condicions. Molts demanen 13 o 14 anys i el permís de la família per als menors, i alguns, 18. A Espanya, per sota de 14 anys cal el consentiment dels pares o tutors per tractar dades personals (LOPDGDD, art. 7).|Depende de cada servicio: mirad sus condiciones. Muchos piden 13 o 14 años y el permiso de la familia para los menores, y algunos, 18. En España, por debajo de 14 años hace falta el consentimiento de los padres o tutores para tratar datos personales (LOPDGDD, art. 7)."],
      ["Hem de prohibir la IA per fer els deures?|¿Debemos prohibir la IA para hacer los deberes?", "Cada centre decideix les seves normes. Aquesta sessió proposa un ús que fa pensar (preguntes, pistes, correccions), declarar-ne l'ús i pactar normes amb l'alumnat.|Cada centro decide sus normas. Esta sesión propone un uso que hace pensar (preguntas, pistas, correcciones), declarar su uso y pactar normas con el alumnado."],
      ["Per què el tutor d'equacions s'equivoca a propòsit?|¿Por qué el tutor de ecuaciones se equivoca a propósito?", "Per entrenar l'hàbit de comprovar: fins i tot un bon tutor d'IA pot fallar un càlcul. Si no el veuen, és una bona ocasió per parlar-ne.|Para entrenar el hábito de comprobar: incluso un buen tutor de IA puede fallar un cálculo. Si no lo ven, es una buena ocasión para hablarlo."]
    ],
    tec: [
      ["El tutor del cicle de l'aigua no entén una pregunta.|El tutor del ciclo del agua no entiende una pregunta.", "És simulat i reconeix peticions típiques: «explica'm», «fes-me preguntes», «dona'm una pista», «com ho comprovo?» i respostes amb paraules clau.|Es simulado y reconoce peticiones típicas: «explícame», «hazme preguntas», «dame una pista», «¿cómo lo compruebo?» y respuestas con palabras clave."],
      ["La rutina del grup no es desa.|La rutina del grupo no se guarda.", "Cal respondre les 5 preguntes; el botó «Desa la rutina» s'activa al final.|Hay que responder las 5 preguntas; el botón «Guarda la rutina» se activa al final."]
    ],
    seg: ["Als xats lliures, recordeu que no s'hi escriuen dades personals (el tutor simulat ho avisa). Si el grup té la IA en directe, el límit és de 8 preguntes per sessió.|En los chats libres, recordad que no se escriben datos personales (el tutor simulado lo avisa). Si el grupo tiene la IA en directo, el límite es de 8 preguntas por sesión.", "Els pòsters no han de tenir noms ni fotos de l'alumnat.|Los pósters no deben tener nombres ni fotos del alumnado."],
    extra: [
      "Tutoria: convertir les normes de la classe en una proposta per al claustre o el consell escolar.|Tutoría: convertir las normas de la clase en una propuesta para el claustro o el consejo escolar.",
      "Qualsevol matèria: fer servir la rutina per preparar el proper examen i comparar-ho amb com estudiaven abans.|Cualquier materia: usar la rutina para preparar el próximo examen y compararlo con cómo estudiaban antes."
    ],
    trans: ["Unitat 4: imatge, veu i vídeo generats, amb autoria declarada. Unitat 7: IA i societat (la llei europea d'IA).|Unidad 4: imagen, voz y vídeo generados, con autoría declarada. Unidad 7: IA y sociedad (la ley europea de IA)."],
    slides: [
      { id: 's1', k: 'portada', t: 'Projecte: la IA com a tutora|Proyecto: la IA como tutora', x: 'No com a copiadora|No como copiadora', nota: "Projecte final de la unitat 3.|Proyecto final de la unidad 3." },
      { id: 's2', k: 'pregunta', t: 'Una entrenadora corre per tu?|¿Una entrenadora corre por ti?', x: "Per a què feu servir la IA quan estudieu?|¿Para qué usáis la IA cuando estudiáis?", nota: "Escolta sense jutjar: el projecte busca millorar-ho.|Escucha sin juzgar: el proyecto busca mejorarlo." },
      { id: 's3', k: 'anim', t: 'Copiadora o tutora?|¿Copiadora o tutora?', anim: 'i34two', x: "La mateixa IA, dos usos molt diferents.|La misma IA, dos usos muy distintos.", nota: "Pregunta qui aprèn en cada camí.|Pregunta quién aprende en cada camino." },
      { id: 's4', k: 'anim', t: 'Recordar costa… i queda|Recordar cuesta… y se queda', anim: 'i34brain', x: "Respondre sense mirar és millor que rellegir.|Responder sin mirar es mejor que releer.", nota: "Per això la IA t'ha de preguntar.|Por eso la IA te tiene que preguntar." },
      { id: 's5', k: 'anim', t: 'La rutina en 5 passos|La rutina en 5 pasos', anim: 'i34loop', x: "Prova-ho tu, pista, preguntes, comprova i explica-ho.|Inténtalo tú, pista, preguntas, comprueba y explícalo.", nota: "La faran servir al pòster.|La usarán en el póster." },
      { id: 's6', k: 'anim', t: 'Normes i declaració|Normas y declaración', anim: 'i34rules', x: "«He fet servir IA per…»|«He usado IA para…»", nota: "Explica les normes del centre sobre la IA.|Explica las normas del centro sobre la IA." },
      { id: 's7', k: 'anim', t: 'Edat, família i privadesa|Edad, familia y privacidad', anim: 'i34age', x: "Mireu les condicions: edat mínima i permís de la família.|Mirad las condiciones: edad mínima y permiso de la familia.", nota: "A Espanya, consentiment familiar per sota dels 14 anys.|En España, consentimiento familiar por debajo de los 14 años." },
      { id: 's8', k: 'activitat', t: 'El tutor humà|El tutor humano', timer: 7, punts: ["Només preguntes, pistes i exemples.|Solo preguntas, pistas y ejemplos.", "L'observador/a apunta les estratègies.|El observador/a apunta las estrategias.", "Al final, l'alumne/a ho explica.|Al final, el alumno/a lo explica."], nota: "Full de l'observador/a.|Hoja del observador/a." },
      { id: 's9', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 22, punts: ["Tutora o copiadora?|¿Tutora o copiadora?", "El tutor d'equacions.|El tutor de ecuaciones.", "Prova la teva rutina.|Prueba tu rutina."], nota: "Fes la pausa activa amb tothom.|Haz la pausa activa con todo el mundo." },
      { id: 's10', k: 'repte', t: "El tutor d'equacions|El tutor de ecuaciones", punts: ["3x + 5 = 20, sense demanar la solució.|3x + 5 = 20, sin pedir la solución.", "Caça el seu error!|¡Caza su error!"], nota: "Error: diu x = 3; és x = 5.|Error: dice x = 3; es x = 5." },
      { id: 's11', k: 'repte', t: 'De copiadora a tutora|De copiadora a tutora', punts: ["Treu «fes-me els deures».|Quita «hazme los deberes».", "Que et pregunti i et doni pistes.|Que te pregunte y te dé pistas."], nota: "PRO: 5 peces, també comprovació.|PRO: 5 piezas, también comprobación." },
      { id: 's12', k: 'concepte', t: 'Prova la rutina|Prueba la rutina', punts: ["Explicació → preguntes → pista → comprovar.|Explicación → preguntas → pista → comprobar.", "Prova de demanar-li que t'ho faci tot.|Prueba a pedirle que te lo haga todo."], nota: "Es desa al portafoli.|Se guarda en el portafolio." },
      { id: 's13', k: 'activitat', t: 'El pòster de la rutina|El póster de la rutina', timer: 12, punts: ["La rutina en 5 passos.|La rutina en 5 pasos.", "3 normes de la classe.|3 normas de la clase.", "La frase de declaració.|La frase de declaración."], nota: "Full «La nostra rutina amb IA».|Hoja «Nuestra rutina con IA»." },
      { id: 's14', k: 'pregunta', t: 'Les 3 normes de la classe|Las 3 normas de la clase', x: "Quines normes triem entre tots?|¿Qué normas elegimos entre todos?", nota: "Voteu-les i pengeu-les a l'aula.|Votadlas y colgadlas en el aula." },
      { id: 's15', k: 'resum', t: 'Unitat 3: parlar amb models de llenguatge|Unidad 3: hablar con modelos de lenguaje', punts: ["Un xatbot prediu fitxes i veu el seu context.|Un chatbot predice fichas y ve su contexto.", "Les al·lucinacions es comproven.|Las alucinaciones se comprueban.", "Bons prompts i la IA com a tutora.|Buenos prompts y la IA como tutora."], nota: "Repàs de la unitat.|Repaso de la unidad." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Els cinc passos de la rutina.|Los cinco pasos de la rutina.", "Com declararies l'ús de la IA?|¿Cómo declararías el uso de la IA?"], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'La nostra rutina amb IA|Nuestra rutina con IA', k: 'fitxa',
        intro: "Una per grup. És l'esborrany del pòster: la rutina, les normes i la frase de declaració.|Una por grupo. Es el borrador del póster: la rutina, las normas y la frase de declaración.",
        items: [
          { q: 'Els 5 passos de la nostra rutina per estudiar amb IA:|Los 5 pasos de nuestra rutina para estudiar con IA:', big: true, sol: "Per exemple: 1) ho provo jo; 2) demano una pista; 3) que em pregunti; 4) ho comprovo al llibre; 5) ho explico amb les meves paraules.|Por ejemplo: 1) lo intento yo; 2) pido una pista; 3) que me pregunte; 4) lo compruebo en el libro; 5) lo explico con mis palabras." },
          { q: 'Un prompt de tutor que farem servir:|Un prompt de tutor que usaremos:', sol: "Per exemple: «Estic estudiant [tema] de 2n d'ESO. Pregunta'm 5 preguntes d'una en una, sense donar-me la solució».|Por ejemplo: «Estoy estudiando [tema] de 2.º de ESO. Hazme 5 preguntas de una en una, sin darme la solución»." },
          { q: 'Tres normes de la classe (honestedat, privadesa, comprovar):|Tres normas de la clase (honestidad, privacidad, comprobar):', big: true, sol: "Per exemple: declarem l'ús de la IA; cap dada personal; comprovem les dades en dues fonts.|Por ejemplo: declaramos el uso de la IA; ningún dato personal; comprobamos los datos en dos fuentes." },
          { q: "La frase per declarar l'ús: «He fet servir IA per…»|La frase para declarar el uso: «He usado IA para…»", sol: "Per exemple: «He fet servir IA per fer-me preguntes de repàs i revisar l'ortografia».|Por ejemplo: «He usado IA para hacerme preguntas de repaso y revisar la ortografía»." }
        ] },
      { id: 'p2', t: "Full de l'observador/a|Hoja del observador/a", k: 'fitxa',
        intro: "Un per grup de tres. Apunta amb ratlletes què fa el tutor/a humà durant 3 minuts.|Una por grupo de tres. Apunta con rayitas qué hace el tutor/a humano durante 3 minutos.",
        items: [
          { q: 'Preguntes que fa pensar:|Preguntas que hacen pensar:', sol: "Ratlletes: com més, millor.|Rayitas: cuantas más, mejor." },
          { q: 'Pistes (sense dir la solució):|Pistas (sin decir la solución):', sol: "Ratlletes.|Rayitas." },
          { q: 'Exemples semblants:|Ejemplos parecidos:', sol: "Ratlletes.|Rayitas." },
          { q: "S'ha escapat la solució? Quantes vegades?|¿Se ha escapado la solución? ¿Cuántas veces?", sol: "Idealment, cap.|Idealmente, ninguna." },
          { q: "Al final, l'alumne/a ho ha sabut explicar? Què l'ha ajudat més?|Al final, ¿el alumno/a lo ha sabido explicar? ¿Qué le ha ayudado más?", big: true, sol: "Resposta oberta.|Respuesta abierta." }
        ] }
    ]
  }
});
