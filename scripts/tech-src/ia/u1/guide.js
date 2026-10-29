/* Tech IA · unitat 1 · guies del professor (mateix esquema que tech-guide-c1.js).
   Diapositives «media» amb TMEDIA.ia (tech-ia.js): la demo del model que compta parelles. A i1-1…i1-4, tot el que fa
   l'alumnat és dins de l'app i amb models simulats: no cal cap compte ni cap servei d'IA extern. El taller i1-5 fa servir
   Quick, Draw! (sense compte) i el xat d'IA de la classe (compte del centre o el docent a la pissarra). Fet citat: el conjunt
   públic de Quick, Draw! té més de 50 milions de dibuixos de 345 categories (Google Creative Lab, «The Quick, Draw! Dataset»). */
Object.assign(TGUIDE, {

  /* ---------- Sessió 1 · Endevina la paraula següent ---------- */
  'i1-1': {
    intro: "Primera sessió de Tech IA. L'alumnat obre una IA «per dins»: un model de llenguatge és un programa que calcula quina paraula (fitxa) és més probable que vingui després, l'afegeix i repeteix. Es construeix un model de bigrames dins de l'app (compta quina paraula ve després de cada paraula), s'hi afegeixen dades per canviar-ne el comportament i es fa generar amb diferents temperatures. Es distingeix entre programes fets amb regles i programes que aprenen de dades.|Primera sesión de Tech IA. El alumnado abre una IA «por dentro»: un modelo de lenguaje es un programa que calcula qué palabra (ficha) es más probable que venga después, la añade y repite. Se construye un modelo de bigramas dentro de la app (cuenta qué palabra viene después de cada palabra), se le añaden datos para cambiar su comportamiento y se le hace generar con distintas temperaturas. Se distingue entre programas hechos con reglas y programas que aprenden de datos.",
    claus: [
      "Un model de llenguatge prediu la fitxa següent; no entén ni sap si el que diu és veritat.|Un modelo de lenguaje predice la ficha siguiente; no entiende ni sabe si lo que dice es verdad.",
      "Regles (les escriu una persona) o dades (el programa troba els patrons): les IA d'avui aprenen sobretot de dades.|Reglas (las escribe una persona) o datos (el programa encuentra los patrones): las IA de hoy aprenden sobre todo de datos.",
      "Probabilitat = vegades que passa ÷ total. Més dades i més variades → millors prediccions.|Probabilidad = veces que pasa ÷ total. Más datos y más variados → mejores predicciones.",
      "La temperatura regula l'atzar: baixa és previsible; alta és original o absurda.|La temperatura regula el azar: baja es previsible; alta es original o absurda."
    ],
    prev: ["Cap: és la primera sessió del curs. Va bé que sàpiguen calcular percentatges senzills.|Ninguna: es la primera sesión del curso. Va bien que sepan calcular porcentajes sencillos."],
    obj: [
      "L'alumne/a explica que un model de llenguatge prediu la paraula següent a partir de dades.|El alumno/a explica que un modelo de lenguaje predice la palabra siguiente a partir de datos.",
      "L'alumne/a distingeix un programa amb regles d'un que aprèn de dades.|El alumno/a distingue un programa con reglas de uno que aprende de datos.",
      "L'alumne/a calcula i interpreta probabilitats a partir de recomptes.|El alumno/a calcula e interpreta probabilidades a partir de recuentos.",
      "L'alumne/a canvia el comportament d'un model afegint dades i ajusta la temperatura.|El alumno/a cambia el comportamiento de un modelo añadiendo datos y ajusta la temperatura."
    ],
    comp: [
      "Competència digital (CD5): pensament computacional i funcionament de la IA|Competencia digital (CD5): pensamiento computacional y funcionamiento de la IA",
      "Competència matemàtica (STEM1): probabilitat i recompte|Competencia matemática (STEM1): probabilidad y recuento",
      "Competència en comunicació lingüística: patrons de la llengua|Competencia en comunicación lingüística: patrones de la lengua"
    ],
    vocab: [
      ["Model de llenguatge|Modelo de lenguaje", "Programa que calcula quina fitxa és més probable que vingui després.|Programa que calcula qué ficha es más probable que venga después."],
      ["Fitxa (token)|Ficha (token)", "Tros de text que el model fa servir: una paraula, una part de paraula o un signe.|Trozo de texto que usa el modelo: una palabra, una parte de palabra o un signo."],
      ["Bigrama|Bigrama", "Parella de fitxes seguides; un model de bigrames mira només l'última paraula.|Pareja de fichas seguidas; un modelo de bigramas mira solo la última palabra."],
      ["Dades d'entrenament|Datos de entrenamiento", "Els textos o exemples dels quals aprèn el model.|Los textos o ejemplos de los que aprende el modelo."],
      ["Temperatura|Temperatura", "Com s'arrisca el model en triar: baixa, la més probable; alta, més variada.|Cuánto se arriesga el modelo al elegir: baja, la más probable; alta, más variada."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Endevina la paraula següent»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Adivina la palabra siguiente»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Un dau per grup de tres i llapis|Un dado por grupo de tres y lápices"],
      imprimir: ["Comptem parelles (imprimible 1): un per grup de tres|Contamos parejas (imprimible 1): uno por grupo de tres"],
      prep: ["Imprimir el full «Comptem parelles».|Imprimir la hoja «Contamos parejas».", "Provar abans el repte de «el gat dorm» per saber on són els botons «＋» de les dades.|Probar antes el reto de «el gato duerme» para saber dónde están los botones «＋» de los datos.", "Decidir si el grup farà el nivell PRO (3r-4t d'ESO): el botó PRO de la barra de dalt canvia els reptes que el tenen.|Decidir si el grupo hará el nivel PRO (3.º-4.º de ESO): el botón PRO de la barra superior cambia los retos que lo tienen."]
    },
    plan: [
      { min: 5, t: 'Benvinguda: com sap el mòbil la paraula següent?|Bienvenida: ¿cómo sabe el móvil la palabra siguiente?', fase: 'inici',
        fa: "Presenta el curs i la pregunta: com sap el teclat del mòbil la paraula següent? Recull hipòtesis sense corregir-les.|Presenta el curso y la pregunta: ¿cómo sabe el teclado del móvil la palabra siguiente? Recoge hipótesis sin corregirlas.",
        diu: ["Què creieu que hi ha dins d'un xat d'IA?|¿Qué creéis que hay dentro de un chat de IA?", "Avui en construirem un de minúscul i ho comprovarem.|Hoy construiremos uno minúsculo y lo comprobaremos."],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: 'Prediccions, regles i dades, probabilitat i temperatura|Predicciones, reglas y datos, probabilidad y temperatura', fase: 'teoria',
        fa: "Amb les animacions, explica que el model calcula probabilitats i afegeix la fitxa més probable. Compara regles i dades. Fes calcular en veu alta la probabilitat de «dorm» a la demo i acaba amb la temperatura.|Con las animaciones, explica que el modelo calcula probabilidades y añade la ficha más probable. Compara reglas y datos. Haz calcular en voz alta la probabilidad de «duerme» en la demo y termina con la temperatura.",
        diu: ["Si després de «gat» hi ha «dorm» 2 cops i «menja» 1, quina probabilitat té «dorm»? (2 de 3, un 67 %.)|Si después de «gato» hay «duerme» 2 veces y «come» 1, ¿qué probabilidad tiene «duerme»? (2 de 3, un 67 %.)", "Un filtre d'spam: regles o dades?|Un filtro de spam: ¿reglas o datos?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'El model humà|El modelo humano', fase: 'desconnectat',
        fa: "En grups de tres, compten amb ratlletes quina paraula ve després de «el», «la» i «un» al text del full. Un fa de model i genera una frase; després repeteixen amb el dau (temperatura).|En grupos de tres, cuentan con rayitas qué palabra viene después de «el», «la» y «un» en el texto de la hoja. Uno hace de modelo y genera una frase; luego repiten con el dado (temperatura).",
        diu: ["El model entén el text? (No: només compta.)|¿El modelo entiende el texto? (No: solo cuenta.)", "Què ha canviat amb el dau?|¿Qué ha cambiado con el dado?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3|Grupos de 3" },
      { min: 25, t: "A l'ordinador: el model de bigrames|En el ordenador: el modelo de bigramas", fase: 'ordinador',
        fa: "Fan la sessió de l'app des de «Recorda» fins al pas «Crea»: exploren el model de la nau, fan guanyar «dorm», fan baixar «plou» i escriuen el seu propi text. Passa per les taules i pregunta què han afegit i per què.|Hacen la sesión de la app desde «Recuerda» hasta el paso «Crea»: exploran el modelo de la nave, hacen ganar «duerme», hacen bajar «llueve» y escriben su propio texto. Pasa por las mesas y pregunta qué han añadido y por qué.",
        diu: ["Per què ara guanya «dorm»?|¿Por qué ahora gana «duerme»?", "Quina temperatura faries servir per a un resum? I per a un títol original?|¿Qué temperatura usarías para un resumen? ¿Y para un título original?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (el meu mini model).|De «Recuerda» hasta el paso «Crea» (mi mini modelo).", org: "Individual|Individual" },
      { min: 8, t: 'Tancament: el que fan els models grans|Cierre: lo que hacen los modelos grandes', fase: 'tancament',
        fa: "Connecta el model de l'aula amb els xats d'IA: fan el mateix amb xarxes neuronals i molts més textos. Per això poden dir coses falses amb seguretat. Tiquet de sortida i com s'han sentit.|Conecta el modelo del aula con los chats de IA: hacen lo mismo con redes neuronales y muchos más textos. Por eso pueden decir cosas falsas con seguridad. Tique de salida y cómo se han sentido.",
        diu: ["Un model tria el que és probable o el que és veritat?|¿Un modelo elige lo que es probable o lo que es verdad?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Pensa que el model «entén» el text perquè les frases tenen sentit.|Piensa que el modelo «entiende» el texto porque las frases tienen sentido.", "Fes-li generar amb temperatura alta: surten frases absurdes. Només compta parelles.|Hazle generar con temperatura alta: salen frases absurdas. Solo cuenta parejas."],
      ["Calcula la probabilitat sobre el total de paraules del text.|Calcula la probabilidad sobre el total de palabras del texto.", "El total és només el de les vegades que apareix la paraula d'abans: 2 de 3 vegades després de «gat».|El total es solo el de las veces que aparece la palabra de antes: 2 de 3 veces después de «gato»."],
      ["Afegeix frases a l'atzar per fer guanyar «dorm».|Añade frases al azar para hacer ganar «duerme».", "Pregunta què ha de passar a les dades: més vegades «gat dorm» que «gat menja».|Pregunta qué tiene que pasar en los datos: más veces «gato duerme» que «gato come»."],
      ["Creu que temperatura alta vol dir «més intel·ligent».|Cree que temperatura alta significa «más inteligente».", "Alta vol dir més atzar, no més saber. Per a dades fiables, baixa.|Alta significa más azar, no más saber. Para datos fiables, baja."],
      ["Al seu text escriu dades personals (noms complets, adreces).|En su texto escribe datos personales (nombres completos, direcciones).", "Recorda que les dades d'entrenament no han de tenir dades personals: canvia-les per noms inventats.|Recuerda que los datos de entrenamiento no deben tener datos personales: cámbialos por nombres inventados."]
    ],
    diff: {
      mes: "Nivell PRO: el model mira dues paraules enrere (trigrames). Compareu el text generat amb 1 i 2 paraules de context, i el repte extra de les lletres.|Nivel PRO: el modelo mira dos palabras atrás (trigramas). Comparad el texto generado con 1 y 2 palabras de contexto, y el reto extra de las letras.",
      menys: "Fer els reptes en parella i donar la pista: «Toca els botons ＋ de les dades i mira com canvien les barres».|Hacer los retos en pareja y dar la pista: «Toca los botones ＋ de los datos y mira cómo cambian las barras»."
    },
    aval: {
      ticket: ["Explica en una frase què fa un model de llenguatge.|Explica en una frase qué hace un modelo de lenguaje.", "Digues quina temperatura triaries per a un resum i per què.|Di qué temperatura elegirías para un resumen y por qué."],
      rubric: [
        ["Què és un model de llenguatge|Qué es un modelo de lenguaje", "Explica que prediu la fitxa següent a partir de dades.|Explica que predice la ficha siguiente a partir de datos.", "Diu que «pensa» o «ho sap tot».|Dice que «piensa» o «lo sabe todo»."],
        ["Probabilitat|Probabilidad", "Calcula probabilitats a partir de recomptes.|Calcula probabilidades a partir de recuentos.", "Confon el total o no sap calcular-les.|Confunde el total o no sabe calcularlas."],
        ["Dades|Datos", "Canvia el comportament del model afegint dades pensades.|Cambia el comportamiento del modelo añadiendo datos pensados.", "Afegeix dades a l'atzar.|Añade datos al azar."],
        ["Temperatura|Temperatura", "Tria la temperatura segons la tasca.|Elige la temperatura según la tarea.", "No relaciona temperatura i atzar.|No relaciona temperatura y azar."]
      ]
    },
    casa: "A casa, mireu junts les paraules que proposa el teclat del mòbil: escriviu «Bon» i aneu tocant sempre la primera proposta. Quina frase surt? Per què creieu que el teclat proposa aquestes paraules?|En casa, mirad juntos las palabras que propone el teclado del móvil: escribid «Buen» y tocad siempre la primera propuesta. ¿Qué frase sale? ¿Por qué creéis que el teclado propone esas palabras?",
    faq: [
      ["Els xats d'IA de veritat són bigrames?|¿Los chats de IA de verdad son bigramas?", "No: fan servir xarxes neuronals (transformadors) que tenen en compte molt de context. Però la tasca de fons és la mateixa: predir la fitxa següent.|No: usan redes neuronales (transformadores) que tienen en cuenta mucho contexto. Pero la tarea de fondo es la misma: predecir la ficha siguiente."],
      ["Cal connexió a internet?|¿Hace falta conexión a internet?", "No: el model de l'app funciona dins del navegador i no envia res enlloc.|No: el modelo de la app funciona dentro del navegador y no envía nada a ningún sitio."],
      ["Què és el botó PRO?|¿Qué es el botón PRO?", "Canvia alguns reptes per una versió més exigent per a 3r-4t d'ESO. Cada alumne/a el pot activar.|Cambia algunos retos por una versión más exigente para 3.º-4.º de ESO. Cada alumno/a lo puede activar."]
    ],
    tec: [
      ["El botó «Continua» no s'activa al repte de «dorm».|El botón «Continúa» no se activa en el reto de «duerme».", "Cal que «dorm» sigui la més probable i també haver tocat «Genera» un cop.|Hace falta que «duerme» sea la más probable y también haber tocado «Genera» una vez."],
      ["Al mòbil no veuen les dades i el model alhora.|En el móvil no ven los datos y el modelo a la vez.", "Hi ha dues pestanyes a dalt: «Dades» i «Model».|Hay dos pestañas arriba: «Datos» y «Modelo»."]
    ],
    seg: ["El text propi del pas «Crea» es desa al portafoli de l'alumne/a: recordeu que no ha de tenir dades personals.|El texto propio del paso «Crea» se guarda en el portafolio del alumno/a: recordad que no debe tener datos personales."],
    extra: [
      "Matemàtiques: fer una taula de freqüències de les paraules d'una cançó i calcular-ne probabilitats.|Matemáticas: hacer una tabla de frecuencias de las palabras de una canción y calcular sus probabilidades.",
      "Llengua: comparar els textos generats amb temperatura baixa i alta i comentar-ne la coherència.|Lengua: comparar los textos generados con temperatura baja y alta y comentar su coherencia."
    ],
    trans: ["Sessió i1-2: regles o dades, a fons. Sessió i1-4: el projecte del mini model de llenguatge.|Sesión i1-2: reglas o datos, a fondo. Sesión i1-4: el proyecto del mini modelo de lenguaje."],
    slides: [
      { id: 's1', k: 'portada', t: 'Endevina la paraula següent|Adivina la palabra siguiente', x: 'Què hi ha dins una IA?|¿Qué hay dentro de una IA?', nota: "Primera sessió del curs. Presenta Tech IA.|Primera sesión del curso. Presenta Tech IA." },
      { id: 's2', k: 'pregunta', t: 'Com sap el teclat la paraula següent?|¿Cómo sabe el teclado la palabra siguiente?', x: "Escriu «Bon…» al mòbil i mira què et proposa.|Escribe «Buen…» en el móvil y mira qué te propone.", nota: "Recull hipòtesis a la pissarra.|Recoge hipótesis en la pizarra." },
      { id: 's3', k: 'anim', t: 'Una IA no pensa: prediu|Una IA no piensa: predice', anim: 'i1pred', x: "Calcula la fitxa més probable, l'afegeix i torna a començar.|Calcula la ficha más probable, la añade y vuelve a empezar.", nota: "Remarca la paraula «probable».|Remarca la palabra «probable»." },
      { id: 's4', k: 'anim', t: 'Regles o dades?|¿Reglas o datos?', anim: 'i1regles', x: "Les IA d'avui aprenen sobretot de dades.|Las IA de hoy aprenden sobre todo de datos.", nota: "Demana exemples de cada tipus.|Pide ejemplos de cada tipo." },
      { id: 's5', k: 'media', t: 'Comptar parelles|Contar parejas', x: "Després de «gat»: «dorm» 2 cops, «menja» 1 cop.|Después de «gato»: «duerme» 2 veces, «come» 1 vez.", media: { k: 'ia', demo: 'ngram', text: 'el gat menja. el gat dorm. el gat dorm. el gos corre.|el gato come. el gato duerme. el gato duerme. el perro corre.', ctx: 'el gat|el gato' }, nota: "Que calculin el 67 % abans d'ensenyar-lo.|Que calculen el 67 % antes de enseñarlo." },
      { id: 's6', k: 'anim', t: 'Més dades, millors prediccions|Más datos, mejores predicciones', anim: 'i1prob', x: "Amb 3 frases, una sola paraula ho és tot.|Con 3 frases, una sola palabra lo es todo.", nota: "Connecta-ho amb el repte de «plou».|Conéctalo con el reto de «llueve»." },
      { id: 's7', k: 'anim', t: 'La temperatura|La temperatura', anim: 'i1temp', x: "Baixa: previsible. Alta: original… o absurd.|Baja: previsible. Alta: original… o absurdo.", nota: "Pregunta quan farien servir cadascuna.|Pregunta cuándo usarían cada una." },
      { id: 's8', k: 'activitat', t: 'El model humà|El modelo humano', timer: 8, punts: ["Compteu amb ratlletes què ve després de «el», «la» i «un».|Contad con rayitas qué viene después de «el», «la» y «un».", "Un fa de model: només la paraula amb més ratlletes.|Uno hace de modelo: solo la palabra con más rayitas.", "Després, amb el dau.|Después, con el dado."], nota: "Grups de tres amb el full «Comptem parelles».|Grupos de tres con la hoja «Contamos parejas»." },
      { id: 's9', k: 'pregunta', t: 'El model entén el text?|¿El modelo entiende el texto?', x: "Què ha canviat quan heu tirat el dau?|¿Qué ha cambiado cuando habéis tirado el dado?", nota: "Resposta: no entén; només compta. El dau és l'atzar de la temperatura.|Respuesta: no entiende; solo cuenta. El dado es el azar de la temperatura." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 25, punts: ["Explora el model de la nau.|Explora el modelo de la nave.", "Fes guanyar «dorm» i fes baixar «plou».|Haz ganar «duerme» y haz bajar «llueve».", "Escriu el teu mini model.|Escribe tu mini modelo."], nota: "Fes la pausa activa amb tot el grup quan hi arribin.|Haz la pausa activa con todo el grupo cuando lleguen." },
      { id: 's11', k: 'repte', t: 'Fes guanyar «dorm»|Haz ganar «duerme»', punts: ["Quines frases afegeixes?|¿Qué frases añades?", "Mira com canvien les barres.|Mira cómo cambian las barras."], nota: "Que expliquin per què funciona.|Que expliquen por qué funciona." },
      { id: 's12', k: 'concepte', t: 'Fitxes i context|Fichas y contexto', punts: ["Un bigrama mira 1 paraula enrere.|Un bigrama mira 1 palabra atrás.", "Amb PRO, en mira 2: frases més coherents.|Con PRO, mira 2: frases más coherentes.", "Els models grans en miren milers.|Los modelos grandes miran miles."], nota: "Per als que van ràpid: activeu PRO.|Para los que van rápido: activad PRO." },
      { id: 's13', k: 'repte', t: 'El meu mini model|Mi mini modelo', punts: ["Un text propi d'almenys 40 paraules.|Un texto propio de al menos 40 palabras.", "Sense dades personals.|Sin datos personales.", "Genera amb temperatura baixa i alta.|Genera con temperatura baja y alta."], nota: "Es desa al portafoli.|Se guarda en el portafolio." },
      { id: 's14', k: 'concepte', t: 'I els xats d\'IA grans?|¿Y los chats de IA grandes?', punts: ["També prediuen fitxa a fitxa.|También predicen ficha a ficha.", "Amb xarxes neuronals i molts textos.|Con redes neuronales y muchos textos.", "Tria el probable, no el veritable.|Elige lo probable, no lo verdadero."], nota: "Anuncia la unitat 3: les al·lucinacions.|Anuncia la unidad 3: las alucinaciones." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ["Un model de llenguatge prediu la paraula següent.|Un modelo de lenguaje predice la palabra siguiente.", "Aprèn de dades: més i més variades, millor.|Aprende de datos: más y más variados, mejor.", "La temperatura regula l'atzar.|La temperatura regula el azar."], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Què fa un model de llenguatge?|¿Qué hace un modelo de lenguaje?", "Quina temperatura per a un resum?|¿Qué temperatura para un resumen?"], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'Comptem parelles|Contamos parejas', k: 'fitxa',
        intro: "Un per grup de tres. Text: «el gat dorm. la nena llegeix. el gat menja. un gos corre. la nena dibuixa. el gat dorm. un gos dorm. la nena llegeix.»|Uno por grupo de tres. Texto: «el gato duerme. la niña lee. el gato come. un perro corre. la niña dibuja. el gato duerme. un perro duerme. la niña lee.»",
        items: [
          { q: "Després de «el», quines paraules vénen i quantes vegades?|Después de «el», ¿qué palabras vienen y cuántas veces?", sol: "«gat» 3 vegades (100 %).|«gato» 3 veces (100 %)." },
          { q: "Després de «la»?|¿Después de «la»?", sol: "«nena» 3 vegades (100 %).|«niña» 3 veces (100 %)." },
          { q: "Després de «nena»? Calcula les probabilitats.|¿Después de «niña»? Calcula las probabilidades.", sol: "«llegeix» 2 de 3 (67 %) i «dibuixa» 1 de 3 (33 %).|«lee» 2 de 3 (67 %) y «dibuja» 1 de 3 (33 %)." },
          { q: "Genereu una frase fent de model (sempre la més probable):|Generad una frase haciendo de modelo (siempre la más probable):", big: true, sol: "Per exemple: «la nena llegeix».|Por ejemplo: «la niña lee»." }
        ] }
    ]
  }
});

Object.assign(TGUIDE, {

  /* ---------- Sessió 2 · Regles o exemples? ---------- */
  'i1-2': {
    intro: "L'alumnat compara les dues maneres de fer un programa «llest»: escriure regles (si… llavors…) o aprendre d'exemples etiquetats. Ho viu amb un filtre de missatges trampa, una activitat desconnectada amb criatures inventades, un xatbot de regles que s'equivoca (CantinaBot) i entrenant classificadors de dibuixos i de sons amb el mètode dels k veïns més propers. Acaba veient que les IA d'avui combinen les dues coses.|El alumnado compara las dos maneras de hacer un programa «listo»: escribir reglas (si… entonces…) o aprender de ejemplos etiquetados. Lo vive con un filtro de mensajes trampa, una actividad desconectada con criaturas inventadas, un chatbot de reglas que se equivoca (CantinaBot) y entrenando clasificadores de dibujos y de sonidos con el método de los k vecinos más cercanos. Termina viendo que las IA de hoy combinan las dos cosas.",
    claus: [
      "Regles: previsibles i fàcils d'explicar; fallen amb els casos nous i amb el que és difícil de descriure (imatges, veus, llengua).|Reglas: previsibles y fáciles de explicar; fallan con los casos nuevos y con lo que es difícil de describir (imágenes, voces, lengua).",
      "Exemples: el programa troba els patrons sol; depèn de la quantitat i la qualitat de les dades, i costa saber per què decideix.|Ejemplos: el programa encuentra los patrones solo; depende de la cantidad y la calidad de los datos, y cuesta saber por qué decide.",
      "k veïns més propers: el cas nou es compara amb tots els exemples i voten els 5 més semblants.|k vecinos más cercanos: el caso nuevo se compara con todos los ejemplos y votan los 5 más parecidos.",
      "Els sistemes reals combinen models apresos i regles: filtres d'spam amb llistes de bloqueig, xats d'IA amb normes.|Los sistemas reales combinan modelos aprendidos y reglas: filtros de spam con listas de bloqueo, chats de IA con normas."
    ],
    prev: ["Sessió i1-1: un model aprèn de dades comptant què ve després de cada paraula.|Sesión i1-1: un modelo aprende de datos contando qué viene después de cada palabra."],
    obj: [
      "L'alumne/a distingeix un programa de regles d'un model après d'exemples.|El alumno/a distingue un programa de reglas de un modelo aprendido de ejemplos.",
      "L'alumne/a decideix quina manera va millor per a un problema concret i ho justifica.|El alumno/a decide qué manera va mejor para un problema concreto y lo justifica.",
      "L'alumne/a explica com decideix un classificador de k veïns més propers.|El alumno/a explica cómo decide un clasificador de k vecinos más cercanos.",
      "L'alumne/a entrena un classificador de dibuixos o sons i en comprova l'encert.|El alumno/a entrena un clasificador de dibujos o sonidos y comprueba su acierto."
    ],
    comp: [
      "Competència digital (CD5): pensament computacional i funcionament de la IA|Competencia digital (CD5): pensamiento computacional y funcionamiento de la IA",
      "Competència STEM (STEM2): formular hipòtesis i comprovar-les amb proves|Competencia STEM (STEM2): formular hipótesis y comprobarlas con pruebas",
      "Competència personal, social i d'aprendre a aprendre (CPSAA): pensament crític davant la tecnologia|Competencia personal, social y de aprender a aprender (CPSAA): pensamiento crítico ante la tecnología"
    ],
    vocab: [
      ["Regla|Regla", "Instrucció escrita per una persona: «si passa això, fes allò».|Instrucción escrita por una persona: «si pasa esto, haz aquello»."],
      ["Aprenentatge automàtic|Aprendizaje automático", "Fer que un programa trobi patrons a partir d'exemples, en lloc d'escriure'n les regles.|Hacer que un programa encuentre patrones a partir de ejemplos, en lugar de escribir sus reglas."],
      ["Exemple etiquetat|Ejemplo etiquetado", "Una dada amb la resposta correcta: aquest missatge és trampa.|Un dato con la respuesta correcta: este mensaje es trampa."],
      ["Classificador|Clasificador", "Programa que posa cada cas en una classe (trampa o normal, cor o estrella).|Programa que pone cada caso en una clase (trampa o normal, corazón o estrella)."],
      ["k veïns més propers|k vecinos más cercanos", "Mètode que classifica un cas nou segons els k exemples que més s'hi assemblen.|Método que clasifica un caso nuevo según los k ejemplos que más se le parecen."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Regles o exemples?»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «¿Reglas o ejemplos?»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Les targetes «Criatures de Zorix» retallades (un paquet per grup de quatre)|Las tarjetas «Criaturas de Zorix» recortadas (un paquete por grupo de cuatro)", "Opcional: micròfon o auriculars amb micròfon|Opcional: micrófono o auriculares con micrófono"],
      imprimir: ["Criatures de Zorix (imprimible 1): un paquet per grup|Criaturas de Zorix (imprimible 1): un paquete por grupo", "Full de resultats (imprimible 2): un per grup|Hoja de resultados (imprimible 2): una por grupo"],
      prep: ["Imprimir i retallar les targetes; separar les 8 etiquetades de les 6 noves (A-F).|Imprimir y recortar las tarjetas; separar las 8 etiquetadas de las 6 nuevas (A-F).", "Provar si el micròfon dels ordinadors funciona; si no, el repte de sons es fa amb «Exemples».|Probar si el micrófono de los ordenadores funciona; si no, el reto de sonidos se hace con «Ejemplos».", "Decidir si el grup fa el nivell PRO (botó PRO de la barra de dalt).|Decidir si el grupo hace el nivel PRO (botón PRO de la barra superior)."]
    },
    plan: [
      { min: 5, t: 'Missatges trampa|Mensajes trampa', fase: 'inici',
        fa: "Projecta un missatge trampa inventat i pregunta com farien un filtre. Apunta les idees en dues columnes sense dir-ne el nom: les que són regles i les que són «mirar molts exemples».|Proyecta un mensaje trampa inventado y pregunta cómo harían un filtro. Apunta las ideas en dos columnas sin decir su nombre: las que son reglas y las que son «mirar muchos ejemplos».",
        diu: ["Com sabríeu, sense obrir-lo, que un missatge és una trampa?|¿Cómo sabríais, sin abrirlo, que un mensaje es una trampa?", "I si demà canvien les paraules?|¿Y si mañana cambian las palabras?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: 'Regles, exemples i veïns|Reglas, ejemplos y vecinos', fase: 'teoria',
        fa: "Amb les animacions, compara regles i exemples, mostra com decideixen els 5 veïns més propers i fes la taula de punts forts i febles. Acaba amb la idea que els sistemes reals combinen totes dues coses.|Con las animaciones, compara reglas y ejemplos, muestra cómo deciden los 5 vecinos más cercanos y haz la tabla de puntos fuertes y débiles. Termina con la idea de que los sistemas reales combinan las dos cosas.",
        diu: ["Per què «GR4TIS» passa la regla?|¿Por qué «GR4TIS» pasa la regla?", "Si 3 dels 5 veïns són «trampa», quina confiança té?|Si 3 de los 5 vecinos son «trampa», ¿qué confianza tiene?", "Com escriuríeu les regles per reconèixer una cara?|¿Cómo escribiríais las reglas para reconocer una cara?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'Glimps o Blorbs?|¿Glimps o Blorbs?', fase: 'desconnectat',
        fa: "Grups de quatre: dues persones fan d'equip Regles i dues d'equip Exemples. Tots dos equips miren les 8 targetes etiquetades; després classifiquen les 6 noves amb el seu mètode i ho comproveu amb la solució.|Grupos de cuatro: dos personas hacen de equipo Reglas y dos de equipo Ejemplos. Los dos equipos miran las 8 tarjetas etiquetadas; después clasifican las 6 nuevas con su método y lo comprobáis con la solución.",
        diu: ["Quina regla heu escrit? Ha funcionat amb les criatures estranyes?|¿Qué regla habéis escrito? ¿Ha funcionado con las criaturas raras?", "Les antenes eren una bona pista?|¿Las antenas eran una buena pista?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 25, t: "A l'ordinador: regles contra exemples|En el ordenador: reglas contra ejemplos", fase: 'ordinador',
        fa: "Fan la sessió de l'app des de «Recorda» fins al pas «Crea»: classifiquen tasques, caçen l'error del CantinaBot, entrenen les reaccions dibuixades i el comandament de sons, i inventen els seus símbols secrets. Fes la pausa activa amb tot el grup quan hi arribin.|Hacen la sesión de la app desde «Recuerda» hasta el paso «Crea»: clasifican tareas, cazan el error del CantinaBot, entrenan las reacciones dibujadas y el mando de sonidos, e inventan sus símbolos secretos. Haz la pausa activa con todo el grupo cuando lleguen.",
        diu: ["Per què el CantinaBot no entén «no m'agrada»?|¿Por qué el CantinaBot no entiende «no me gusta»?", "Mira els 5 veïns del teu dibuix: per què ha decidit això?|Mira los 5 vecinos de tu dibujo: ¿por qué ha decidido eso?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (els meus símbols secrets).|De «Recuerda» hasta el paso «Crea» (mis símbolos secretos).", org: "Individual|Individual" },
      { min: 8, t: "Tancament: les IA d'avui fan les dues coses|Cierre: las IA de hoy hacen las dos cosas", fase: 'tancament',
        fa: "Torna al filtre de l'inici: com el faríeu ara? Model après d'exemples, reentrenat sovint, i algunes regles fixes. Tiquet de sortida i com s'han sentit.|Vuelve al filtro del inicio: ¿cómo lo haríais ahora? Modelo aprendido de ejemplos, reentrenado a menudo, y algunas reglas fijas. Tique de salida y cómo se han sentido.",
        diu: ["Quina part del filtre faríeu amb regles i quina amb exemples?|¿Qué parte del filtro haríais con reglas y cuál con ejemplos?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Creu que la IA «entén» el dibuix perquè l'encerta.|Cree que la IA «entiende» el dibujo porque lo acierta.", "Fes-li mirar els 5 veïns: compara números (on hi ha traç), no sap què és un cor.|Hazle mirar los 5 vecinos: compara números (dónde hay trazo), no sabe qué es un corazón."],
      ["A l'activitat desconnectada, l'equip Regles fa excepcions «perquè es veu clar».|En la actividad desconectada, el equipo Reglas hace excepciones «porque se ve claro».", "Un ordinador no fa excepcions que no estiguin escrites: cal aplicar la regla tal com és.|Un ordenador no hace excepciones que no estén escritas: hay que aplicar la regla tal como es."],
      ["Dibuixa els 5 exemples exactament iguals i després la IA falla amb dibuixos nous.|Dibuja los 5 ejemplos exactamente iguales y luego la IA falla con dibujos nuevos.", "Demana variació: més grans, més petits, una mica girats. Els exemples han de semblar-se al que vindrà.|Pide variación: más grandes, más pequeños, un poco girados. Los ejemplos tienen que parecerse a lo que vendrá."],
      ["Pensa que aprendre d'exemples és sempre millor.|Piensa que aprender de ejemplos es siempre mejor.", "Torna al pas de classificar tasques: per calcular un preu, una regla no s'equivoca mai.|Vuelve al paso de clasificar tareas: para calcular un precio, una regla no se equivoca nunca."],
      ["Al CantinaBot, marca amb la 🚩 la primera resposta (que és correcta).|En el CantinaBot, marca con la 🚩 la primera respuesta (que es correcta).", "Que llegeixi la pregunta i la resposta en veu alta: respon el que s'ha preguntat?|Que lea la pregunta y la respuesta en voz alta: ¿responde lo que se ha preguntado?"]
    ],
    diff: {
      mes: "Nivell PRO: quatre reaccions dibuixades (85 %) i un comandament de quatre sons amb soroll de fons (90 %). Repte extra de l'app de deures. Debat: com combinaríeu regles i exemples en un filtre de comentaris d'odi?|Nivel PRO: cuatro reacciones dibujadas (85 %) y un mando de cuatro sonidos con ruido de fondo (90 %). Reto extra de la app de deberes. Debate: ¿cómo combinaríais reglas y ejemplos en un filtro de comentarios de odio?",
      menys: "Fer els reptes amb «Exemples» (+5) en lloc de dibuixar o gravar, i en parella. A l'activitat desconnectada, donar la pista «mireu les taques i les ratlles».|Hacer los retos con «Ejemplos» (+5) en lugar de dibujar o grabar, y en pareja. En la actividad desconectada, dar la pista «mirad las manchas y las rayas»."
    },
    aval: {
      ticket: ["Digues un problema per resoldre amb regles i un altre amb exemples.|Di un problema para resolver con reglas y otro con ejemplos.", "Per què s'ha equivocat el CantinaBot?|¿Por qué se ha equivocado el CantinaBot?"],
      rubric: [
        ["Regles i exemples|Reglas y ejemplos", "Explica la diferència amb un exemple propi.|Explica la diferencia con un ejemplo propio.", "Les confon o no posa exemples.|Las confunde o no pone ejemplos."],
        ["Triar el mètode|Elegir el método", "Justifica quin va millor per a cada tasca.|Justifica cuál va mejor para cada tarea.", "Tria a l'atzar o sempre el mateix.|Elige al azar o siempre el mismo."],
        ["k veïns més propers|k vecinos más cercanos", "Explica que voten els exemples més semblants.|Explica que votan los ejemplos más parecidos.", "Diu que la IA «sap» què és.|Dice que la IA «sabe» qué es."],
        ["Entrenar|Entrenar", "Dona exemples variats i arriba a l'encert demanat.|Da ejemplos variados y llega al acierto pedido.", "Dona exemples iguals o pocs.|Da ejemplos iguales o pocos."]
      ]
    },
    casa: "A casa, busqueu tres aparells o apps: quins funcionen amb regles (un temporitzador, un despertador) i quins aprenen de dades (el teclat del mòbil, les recomanacions de vídeos)? Com ho sabeu?|En casa, buscad tres aparatos o apps: ¿cuáles funcionan con reglas (un temporizador, un despertador) y cuáles aprenden de datos (el teclado del móvil, las recomendaciones de vídeos)? ¿Cómo lo sabéis?",
    faq: [
      ["Els filtres d'spam de veritat fan servir IA?|¿Los filtros de spam de verdad usan IA?", "Sí: aprenen de molts missatges marcats com a correu brossa i es tornen a entrenar perquè els trucs canvien. També fan servir regles i llistes d'adreces perilloses.|Sí: aprenden de muchos mensajes marcados como correo basura y se vuelven a entrenar porque los trucos cambian. También usan reglas y listas de direcciones peligrosas."],
      ["Els xats d'IA també tenen regles?|¿Los chats de IA también tienen reglas?", "Sí. Aprenen de dades, però després persones els entrenen amb exemples i valoracions, i se'ls afegeixen normes (per exemple, no ajudar a fer mal).|Sí. Aprenden de datos, pero después personas los entrenan con ejemplos y valoraciones, y se les añaden normas (por ejemplo, no ayudar a hacer daño)."],
      ["Es desen els dibuixos o els sons?|¿Se guardan los dibujos o los sonidos?", "No: es queden a la memòria del navegador mentre dura el pas. Al portafoli només hi va el nom de les classes i quants exemples hi havia.|No: se quedan en la memoria del navegador mientras dura el paso. En el portafolio solo va el nombre de las clases y cuántos ejemplos había."]
    ],
    tec: [
      ["El micròfon no funciona o no hi ha permís.|El micrófono no funciona o no hay permiso.", "L'app passa sola a «Exemples»: el repte es pot fer igual amb el conjunt de sons de Numi.|La app pasa sola a «Ejemplos»: el reto se puede hacer igual con el conjunto de sonidos de Numi."],
      ["La IA no reconeix bé els dibuixos.|La IA no reconoce bien los dibujos.", "Dibuixa gran i al mig del llenç, i afegeix més exemples variats. També es pot fer amb «Exemples».|Dibuja grande y en el centro del lienzo, y añade más ejemplos variados. También se puede hacer con «Ejemplos»."]
    ],
    seg: ["Els dibuixos i els sons no surten del dispositiu. Al pas «Crea» es desa al portafoli només el nom dels símbols i el nombre d'exemples.|Los dibujos y los sonidos no salen del dispositivo. En el paso «Crea» se guarda en el portafolio solo el nombre de los símbolos y el número de ejemplos."],
    extra: [
      "Matemàtiques: calcular la distància entre punts en un pla i fer un k veïns més propers amb paper quadriculat.|Matemáticas: calcular la distancia entre puntos en un plano y hacer un k vecinos más cercanos con papel cuadriculado.",
      "Llengua: intentar escriure regles per detectar la ironia en un missatge i comprovar per què és tan difícil.|Lengua: intentar escribir reglas para detectar la ironía en un mensaje y comprobar por qué es tan difícil."
    ],
    trans: ["Sessió i1-3: probabilitats, context i temperatura. Unitat 2: entrenar, provar i millorar classificadors.|Sesión i1-3: probabilidades, contexto y temperatura. Unidad 2: entrenar, probar y mejorar clasificadores."],
    slides: [
      { id: 's1', k: 'portada', t: 'Regles o exemples?|¿Reglas o ejemplos?', x: 'Què hi ha dins una IA?|¿Qué hay dentro de una IA?', nota: "Segona sessió de la unitat 1.|Segunda sesión de la unidad 1." },
      { id: 's2', k: 'pregunta', t: 'Com faries un filtre de missatges trampa?|¿Cómo harías un filtro de mensajes trampa?', x: "«Has guanyat un mòbil! Clica aquí»|«¡Has ganado un móvil! Pulsa aquí»", nota: "Apunta les idees en dues columnes: regles i exemples.|Apunta las ideas en dos columnas: reglas y ejemplos." },
      { id: 's3', k: 'anim', t: 'Regles: si passa això, fes allò|Reglas: si pasa esto, haz aquello', anim: 'i12rule', x: "Un canvi petit i la regla ja no serveix.|Un cambio pequeño y la regla ya no sirve.", nota: "Pregunta quantes regles caldrien per a tots els trucs.|Pregunta cuántas reglas harían falta para todos los trucos." },
      { id: 's4', k: 'anim', t: 'Exemples: aprendre mirant molts casos|Ejemplos: aprender mirando muchos casos', anim: 'i12data', x: "La IA troba el patró sense regles escrites.|La IA encuentra el patrón sin reglas escritas.", nota: "Remarca la paraula «etiquetat».|Remarca la palabra «etiquetado»." },
      { id: 's5', k: 'media', t: 'Els 5 veïns més propers|Los 5 vecinos más cercanos', x: "El punt nou pren la classe que més surt entre els 5 més semblants.|El punto nuevo toma la clase que más sale entre los 5 más parecidos.", media: { k: 'ia', demo: 'knn' }, nota: "Que calculin la confiança: 4 de 5 = 80 %.|Que calculen la confianza: 4 de 5 = 80 %." },
      { id: 's6', k: 'anim', t: 'On falla cadascú|Dónde falla cada uno', anim: 'i12when', x: "Regles: casos nous. Exemples: dades dolentes.|Reglas: casos nuevos. Ejemplos: datos malos.", nota: "Demana un exemple de cada fila.|Pide un ejemplo de cada fila." },
      { id: 's7', k: 'anim', t: "Les IA d'avui fan les dues coses|Las IA de hoy hacen las dos cosas", anim: 'i12mix', x: "Dades, exemples de persones i normes.|Datos, ejemplos de personas y normas.", nota: "Connecta-ho amb els xats d'IA que coneixen.|Conéctalo con los chats de IA que conocen." },
      { id: 's8', k: 'activitat', t: 'Glimps o Blorbs?|¿Glimps o Blorbs?', timer: 10, punts: ["Mireu les 8 targetes etiquetades.|Mirad las 8 tarjetas etiquetadas.", "Equip Regles: 2 regles al peu de la lletra.|Equipo Reglas: 2 reglas al pie de la letra.", "Equip Exemples: les 3 més semblants voten.|Equipo Ejemplos: las 3 más parecidas votan."], nota: "Grups de quatre amb les targetes de Zorix.|Grupos de cuatro con las tarjetas de Zorix." },
      { id: 's9', k: 'pregunta', t: 'Quin equip ha fallat més?|¿Qué equipo ha fallado más?', x: "Les antenes eren una bona pista?|¿Las antenas eran una buena pista?", nota: "La pista bona eren les taques (Glimp) i les ratlles (Blorb).|La pista buena eran las manchas (Glimp) y las rayas (Blorb)." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 25, punts: ["Regles o exemples? Classifica les tasques.|¿Reglas o ejemplos? Clasifica las tareas.", "Caça l'error del CantinaBot.|Caza el error del CantinaBot.", "Entrena reaccions i sons.|Entrena reacciones y sonidos."], nota: "Fes la pausa activa quan la majoria hi arribi.|Haz la pausa activa cuando la mayoría llegue." },
      { id: 's11', k: 'repte', t: 'El CantinaBot|El CantinaBot', punts: ["Respon el que has preguntat?|¿Responde lo que has preguntado?", "Marca-ho amb la 🚩.|Márcalo con la 🚩."], nota: "Les regles de paraules clau no entenen el «no».|Las reglas de palabras clave no entienden el «no»." },
      { id: 's12', k: 'repte', t: 'Reaccions i sons|Reacciones y sonidos', punts: ["Dibuixa exemples variats.|Dibuja ejemplos variados.", "Mira els 5 veïns de cada predicció.|Mira los 5 vecinos de cada predicción.", "Arriba a l'encert demanat.|Llega al acierto pedido."], nota: "Si no hi ha micròfon, «Exemples».|Si no hay micrófono, «Ejemplos»." },
      { id: 's13', k: 'repte', t: 'Els teus símbols secrets|Tus símbolos secretos', punts: ["Inventa 3 símbols i posa'ls nom.|Inventa 3 símbolos y ponles nombre.", "6 exemples de cada.|6 ejemplos de cada.", "Prova-ho amb dibuixos nous.|Pruébalo con dibujos nuevos."], nota: "Es desa al portafoli.|Se guarda en el portafolio." },
      { id: 's14', k: 'concepte', t: 'El filtre ideal|El filtro ideal', punts: ["Un model après d'exemples recents.|Un modelo aprendido de ejemplos recientes.", "Reentrenat sovint.|Reentrenado a menudo.", "Més algunes regles fixes.|Más algunas reglas fijas."], nota: "Torna a la pregunta de l'inici.|Vuelve a la pregunta del inicio." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ["Regles: previsibles, però fallen amb el que és nou.|Reglas: previsibles, pero fallan con lo nuevo.", "Exemples: troben patrons, però depenen de les dades.|Ejemplos: encuentran patrones, pero dependen de los datos.", "Les IA d'avui combinen totes dues coses.|Las IA de hoy combinan las dos cosas."], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Un problema per a regles i un per a exemples.|Un problema para reglas y uno para ejemplos.", "Per què s'ha equivocat el CantinaBot?|¿Por qué se ha equivocado el CantinaBot?"], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'Criatures de Zorix|Criaturas de Zorix', k: 'targetes',
        intro: "Un paquet per grup de quatre. Retalleu-les i separeu les 8 etiquetades (Glimp o Blorb) de les 6 noves (A-F).|Un paquete por grupo de cuatro. Recortadlas y separad las 8 etiquetadas (Glimp o Blorb) de las 6 nuevas (A-F).",
        items: [
          { t: 'Glimp: antenes, taques, 3 ulls 👾|Glimp: antenas, manchas, 3 ojos 👾' }, { t: 'Glimp: antenes, taques, 2 ulls 👾|Glimp: antenas, manchas, 2 ojos 👾' },
          { t: 'Glimp: antenes, taques, cua 👾|Glimp: antenas, manchas, cola 👾' }, { t: 'Glimp: sense antenes, taques, 3 ulls 👾|Glimp: sin antenas, manchas, 3 ojos 👾' },
          { t: 'Blorb: ratlles, 2 ulls, cua 🟢|Blorb: rayas, 2 ojos, cola 🟢' }, { t: 'Blorb: ratlles, 3 ulls 🟢|Blorb: rayas, 3 ojos 🟢' },
          { t: 'Blorb: antenes, ratlles, cua 🟢|Blorb: antenas, rayas, cola 🟢' }, { t: 'Blorb: ratlles, 2 ulls 🟢|Blorb: rayas, 2 ojos 🟢' },
          { t: 'A: sense antenes, taques, cua ❓|A: sin antenas, manchas, cola ❓' }, { t: 'B: antenes, ratlles, 2 ulls ❓|B: antenas, rayas, 2 ojos ❓' },
          { t: 'C: antenes, taques, 2 ulls ❓|C: antenas, manchas, 2 ojos ❓' }, { t: 'D: ratlles, 3 ulls, cua ❓|D: rayas, 3 ojos, cola ❓' },
          { t: 'E: sense antenes, taques, 2 ulls ❓|E: sin antenas, manchas, 2 ojos ❓' }, { t: 'F: antenes, ratlles, 3 ulls ❓|F: antenas, rayas, 3 ojos ❓' }
        ] },
      { id: 'p2', t: 'Full de resultats|Hoja de resultados', k: 'fitxa',
        intro: "Un per grup. Apunteu què diu cada equip per a les criatures noves i, al final, compareu-ho amb la solució.|Una por grupo. Apuntad qué dice cada equipo para las criaturas nuevas y, al final, comparadlo con la solución.",
        items: [
          { q: "Les regles de l'equip Regles (com a molt 2):|Las reglas del equipo Reglas (como mucho 2):", big: true, sol: "Per exemple: «si té antenes → Glimp». Falla amb A, B, E i F.|Por ejemplo: «si tiene antenas → Glimp». Falla con A, B, E y F." },
          { q: "Criatures A, B i C: què diu cada equip?|Criaturas A, B y C: ¿qué dice cada equipo?", sol: "A Glimp · B Blorb · C Glimp.|A Glimp · B Blorb · C Glimp." },
          { q: "Criatures D, E i F: què diu cada equip?|Criaturas D, E y F: ¿qué dice cada equipo?", sol: "D Blorb · E Glimp · F Blorb.|D Blorb · E Glimp · F Blorb." },
          { q: "Quina pista separava de veritat els Glimps dels Blorbs?|¿Qué pista separaba de verdad a los Glimps de los Blorbs?", sol: "Les taques (Glimp) i les ratlles (Blorb). Les antenes eren una pista falsa.|Las manchas (Glimp) y las rayas (Blorb). Las antenas eran una pista falsa." },
          { q: "Quin equip ha encertat més? Per què?|¿Qué equipo ha acertado más? ¿Por qué?", big: true, sol: "Depèn de la regla: si mirava les antenes, guanya l'equip Exemples; si mirava les taques, l'equip Regles. Una regla només és tan bona com la pista que tria.|Depende de la regla: si miraba las antenas, gana el equipo Ejemplos; si miraba las manchas, el equipo Reglas. Una regla solo es tan buena como la pista que elige." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Probabilitats i prediccions ---------- */
  'i1-3': {
    intro: "L'alumnat entén com un model de llenguatge escriu un text sencer: calcula probabilitats, tria una fitxa, l'afegeix i repeteix. Descobreix el paper del context (quantes paraules mira enrere), com la temperatura afila o aplana les probabilitats i per què el mateix xat pot respondre diferent. Coneix, a grans trets, com s'entrenen els models grans (preentrenament, exemples de persones, valoracions) i comprova amb un mini model que un text fluid pot ser fals.|El alumnado entiende cómo un modelo de lenguaje escribe un texto entero: calcula probabilidades, elige una ficha, la añade y repite. Descubre el papel del contexto (cuántas palabras mira atrás), cómo la temperatura afila o aplana las probabilidades y por qué el mismo chat puede responder distinto. Conoce, a grandes rasgos, cómo se entrenan los modelos grandes (preentrenamiento, ejemplos de personas, valoraciones) y comprueba con un mini modelo que un texto fluido puede ser falso.",
    claus: [
      "Generar és un bucle: probabilitats → triar una fitxa → afegir-la → tornar a calcular.|Generar es un bucle: probabilidades → elegir una ficha → añadirla → volver a calcular.",
      "Més context (més paraules enrere) dona prediccions més encertades, però demana més dades.|Más contexto (más palabras atrás) da predicciones más acertadas, pero pide más datos.",
      "La temperatura transforma les probabilitats abans del sorteig: baixa les afila, alta les aplana.|La temperatura transforma las probabilidades antes del sorteo: baja las afila, alta las aplana.",
      "Un model gran: preentrenament amb molt de text, exemples de persones i valoracions de persones.|Un modelo grande: preentrenamiento con mucho texto, ejemplos de personas y valoraciones de personas.",
      "Probable no vol dir cert: el model pot enganxar trossos i fer frases fluides i falses.|Probable no quiere decir cierto: el modelo puede pegar trozos y hacer frases fluidas y falsas."
    ],
    prev: ["Sessió i1-1: bigrames i temperatura. Sessió i1-2: aprendre d'exemples.|Sesión i1-1: bigramas y temperatura. Sesión i1-2: aprender de ejemplos."],
    obj: [
      "L'alumne/a descriu el bucle amb què un model de llenguatge genera un text.|El alumno/a describe el bucle con el que un modelo de lenguaje genera un texto.",
      "L'alumne/a explica l'efecte del context i el comprova canviant les paraules que mira el model.|El alumno/a explica el efecto del contexto y lo comprueba cambiando las palabras que mira el modelo.",
      "L'alumne/a prediu com canvia el text amb la temperatura i tria la temperatura segons la tasca.|El alumno/a predice cómo cambia el texto con la temperatura y elige la temperatura según la tarea.",
      "L'alumne/a detecta una frase fluida però falsa i explica per què es produeix.|El alumno/a detecta una frase fluida pero falsa y explica por qué se produce."
    ],
    comp: [
      "Competència digital (CD5): funcionament dels models de llenguatge|Competencia digital (CD5): funcionamiento de los modelos de lenguaje",
      "Competència matemàtica (STEM1): probabilitat i freqüència relativa|Competencia matemática (STEM1): probabilidad y frecuencia relativa",
      "Competència digital (CD1): contrastar la informació que dona una IA|Competencia digital (CD1): contrastar la información que da una IA"
    ],
    vocab: [
      ["Context|Contexto", "Les fitxes anteriors que el model té en compte per predir la següent.|Las fichas anteriores que el modelo tiene en cuenta para predecir la siguiente."],
      ["Temperatura|Temperatura", "Paràmetre que afila (baixa) o aplana (alta) les probabilitats abans de triar.|Parámetro que afila (baja) o aplana (alta) las probabilidades antes de elegir."],
      ["Preentrenament|Preentrenamiento", "Primera fase d'un model gran: aprendre a predir la fitxa següent amb moltíssim text.|Primera fase de un modelo grande: aprender a predecir la ficha siguiente con muchísimo texto."],
      ["Paràmetres|Parámetros", "Els números de la xarxa neuronal que s'ajusten durant l'entrenament.|Los números de la red neuronal que se ajustan durante el entrenamiento."],
      ["Al·lucinació|Alucinación", "Resposta fluida i segura que conté una dada falsa o inventada.|Respuesta fluida y segura que contiene un dato falso o inventado."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Probabilitats i prediccions»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Probabilidades y predicciones»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Un full en blanc per fila i bolígrafs|Una hoja en blanco por fila y bolígrafos"],
      imprimir: ["Probabilitats i temperatura (imprimible 1): un per alumne/a, per al final o per a casa|Probabilidades y temperatura (imprimible 1): uno por alumno/a, para el final o para casa"],
      prep: ["Preparar fulls en blanc per a «Paraules plegades».|Preparar hojas en blanco para «Palabras dobladas».", "Provar el repte del porter blau: cal canviar el selector «mira» a 2.|Probar el reto del portero azul: hay que cambiar el selector «mira» a 2.", "Decidir si el grup fa el nivell PRO.|Decidir si el grupo hace el nivel PRO."]
    },
    plan: [
      { min: 5, t: 'Per què el xat respon diferent?|¿Por qué el chat responde distinto?', fase: 'inici',
        fa: "Planteja la pregunta: si feu dues vegades la mateixa pregunta a un xat d'IA, la resposta canvia. Per què? Recull hipòtesis sense corregir-les.|Plantea la pregunta: si hacéis dos veces la misma pregunta a un chat de IA, la respuesta cambia. ¿Por qué? Recoge hipótesis sin corregirlas.",
        diu: ["Ha après coses noves? S'ha enfadat? O és una altra cosa?|¿Ha aprendido cosas nuevas? ¿Se ha enfadado? ¿O es otra cosa?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: 'El bucle, el context i la temperatura|El bucle, el contexto y la temperatura', fase: 'teoria',
        fa: "Explica el bucle de generació, el context amb l'exemple del porter blau i la temperatura amb les tres columnes de barres. Resumeix com s'entrenen els models grans i acaba amb «probable ≠ veritat».|Explica el bucle de generación, el contexto con el ejemplo del portero azul y la temperatura con las tres columnas de barras. Resume cómo se entrenan los modelos grandes y termina con «probable ≠ verdad».",
        diu: ["Amb 1 paraula, el model diu «marca». Per què?|Con 1 palabra, el modelo dice «marca». ¿Por qué?", "Amb temperatura 0,2, quina probabilitat té «gol»? I amb 2?|Con temperatura 0,2, ¿qué probabilidad tiene «gol»? ¿Y con 2?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: 'Paraules plegades|Palabras dobladas', fase: 'desconnectat',
        fa: "En files, cada persona escriu una paraula veient només l'última del full plegat. Després es repeteix veient-ne tres. Llegiu les dues frases i compareu-les.|En filas, cada persona escribe una palabra viendo solo la última de la hoja doblada. Después se repite viendo tres. Leed las dos frases y comparadlas.",
        diu: ["Quina frase té més sentit? Per què?|¿Qué frase tiene más sentido? ¿Por qué?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Files de 5 o 6|Filas de 5 o 6" },
      { min: 27, t: "A l'ordinador: el comentarista robòtic|En el ordenador: el comentarista robótico", fase: 'ordinador',
        fa: "Fan la sessió de l'app des de «Recorda» fins al pas «Crea»: generen cròniques amb diferents temperatures, troben una frase fluida però falsa, fan que el model miri 2 paraules enrere i creen el seu comentarista. Fes la pausa activa amb tot el grup.|Hacen la sesión de la app desde «Recuerda» hasta el paso «Crea»: generan crónicas con distintas temperaturas, encuentran una frase fluida pero falsa, hacen que el modelo mire 2 palabras atrás y crean su comentarista. Haz la pausa activa con todo el grupo.",
        diu: ["Quina crònica és falsa? D'on ha tret cada tros?|¿Qué crónica es falsa? ¿De dónde ha sacado cada trozo?", "Què canvia quan el model mira 2 paraules?|¿Qué cambia cuando el modelo mira 2 palabras?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (el meu comentarista).|De «Recuerda» hasta el paso «Crea» (mi comentarista).", org: "Individual|Individual" },
      { min: 8, t: 'Tancament: comprova sempre|Cierre: comprueba siempre', fase: 'tancament',
        fa: "Torna a la pregunta de l'inici (l'atzar de la temperatura) i insisteix: una resposta fluida pot ser falsa, per això les dades importants es comproven. Tiquet de sortida i com s'han sentit.|Vuelve a la pregunta del inicio (el azar de la temperatura) e insiste: una respuesta fluida puede ser falsa, por eso los datos importantes se comprueban. Tique de salida y cómo se han sentido.",
        diu: ["On comprovaríeu una dada que us dona una IA?|¿Dónde comprobaríais un dato que os da una IA?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Creu que amb temperatura alta el model «sap més» o és més intel·ligent.|Cree que con temperatura alta el modelo «sabe más» o es más inteligente.", "La temperatura no hi afegeix coneixement: només canvia com sorteja entre les opcions que ja té.|La temperatura no añade conocimiento: solo cambia cómo sortea entre las opciones que ya tiene."],
      ["Pensa que el model va aprenent mentre el fem servir.|Piensa que el modelo va aprendiendo mientras lo usamos.", "Mentre el fas servir no canvia: el que canvia és l'atzar. Només aprèn quan l'entrenen.|Mientras lo usas no cambia: lo que cambia es el azar. Solo aprende cuando lo entrenan."],
      ["No troba el selector «mira 1 / 2» al repte del porter.|No encuentra el selector «mira 1 / 2» en el reto del portero.", "És a la capçalera del panell «Model», al costat de «mira … enrere».|Está en la cabecera del panel «Modelo», junto a «mira … atrás»."],
      ["Accepta la frase falsa perquè «està ben escrita».|Acepta la frase falsa porque «está bien escrita».", "Fes-li buscar cada tros a les dues cròniques: on diu que l'equip verd ha guanyat?|Hazle buscar cada trozo en las dos crónicas: ¿dónde dice que el equipo verde ha ganado?"],
      ["Al seu comentarista hi posa noms de companys reals.|En su comentarista pone nombres de compañeros reales.", "Recorda que el corpus es desa al portafoli: noms inventats.|Recuerda que el corpus se guarda en el portafolio: nombres inventados."]
    ],
    diff: {
      mes: "Nivell PRO: calcular quantes vegades sortirà una paraula a temperatura 1, generar mirant 2 i 3 paraules enrere i un comentarista amb context de 2 paraules. Repte extra: noms de grups de música amb un model de lletres. Investigació: per què els models grans necessiten tantes dades?|Nivel PRO: calcular cuántas veces saldrá una palabra a temperatura 1, generar mirando 2 y 3 palabras atrás y un comentarista con contexto de 2 palabras. Reto extra: nombres de grupos de música con un modelo de letras. Investigación: ¿por qué los modelos grandes necesitan tantos datos?",
      menys: "Treballar en parella i fer primer els passos de generar. Pista per al porter: «toca el número 2 de dalt del model».|Trabajar en pareja y hacer primero los pasos de generar. Pista para el portero: «toca el número 2 de arriba del modelo»."
    },
    aval: {
      ticket: ["Explica en una frase per què un xat pot respondre diferent a la mateixa pregunta.|Explica en una frase por qué un chat puede responder distinto a la misma pregunta.", "Per què una frase fluida pot ser falsa?|¿Por qué una frase fluida puede ser falsa?"],
      rubric: [
        ["El bucle|El bucle", "Descriu els passos de generar fitxa a fitxa.|Describe los pasos de generar ficha a ficha.", "Diu que el model «té la resposta guardada».|Dice que el modelo «tiene la respuesta guardada»."],
        ["Context|Contexto", "Relaciona més context amb millors prediccions.|Relaciona más contexto con mejores predicciones.", "No veu per què canvia la predicció.|No ve por qué cambia la predicción."],
        ["Temperatura|Temperatura", "Prediu l'efecte i la tria segons la tasca.|Predice el efecto y la elige según la tarea.", "La confon amb intel·ligència o velocitat.|La confunde con inteligencia o velocidad."],
        ["Comprovar|Comprobar", "Detecta la frase falsa i explica d'on surt.|Detecta la frase falsa y explica de dónde sale.", "Accepta el text perquè sona bé.|Acepta el texto porque suena bien."]
      ]
    },
    casa: "A casa, si teniu accés a un xat d'IA amb una persona adulta, feu-li dues vegades la mateixa pregunta i compareu les respostes. Comproveu una de les dades que doni en una font fiable (una enciclopèdia, una web oficial).|En casa, si tenéis acceso a un chat de IA con una persona adulta, hacedle dos veces la misma pregunta y comparad las respuestas. Comprobad uno de los datos que dé en una fuente fiable (una enciclopedia, una web oficial).",
    faq: [
      ["Els xats d'IA tenen temperatura?|¿Los chats de IA tienen temperatura?", "Sí: és un paràmetre del sorteig. Les apps de xat en fan servir una de fixa; algunes eines per a programadors la deixen canviar.|Sí: es un parámetro del sorteo. Las apps de chat usan una fija; algunas herramientas para programadores dejan cambiarla."],
      ["Quant de text llegeixen els models grans?|¿Cuánto texto leen los modelos grandes?", "Una quantitat enorme, molt més del que una persona podria llegir en tota la vida. Les xifres exactes canvien cada any i no sempre es publiquen.|Una cantidad enorme, mucho más de lo que una persona podría leer en toda su vida. Las cifras exactas cambian cada año y no siempre se publican."],
      ["Si la temperatura és 0, la resposta és sempre igual?|Si la temperatura es 0, ¿la respuesta es siempre igual?", "Gairebé sempre, però no del tot: hi ha detalls tècnics dels ordinadors que poden fer variar algun càlcul.|Casi siempre, pero no del todo: hay detalles técnicos de los ordenadores que pueden hacer variar algún cálculo."]
    ],
    tec: [
      ["El botó «Continua» no s'activa al repte del porter.|El botón «Continúa» no se activa en el reto del portero.", "Cal que el model miri 2 paraules (selector de dalt) i que el començament sigui «el porter blau».|Hace falta que el modelo mire 2 palabras (selector de arriba) y que el comienzo sea «el portero azul»."],
      ["Al pas «Crea» no surt el comptador de fitxes.|En el paso «Crea» no sale el contador de fichas.", "És a la capçalera de «Dades»: al mòbil, toca la pestanya «Dades».|Está en la cabecera de «Datos»: en el móvil, toca la pestaña «Datos»."]
    ],
    seg: ["El comentarista del pas «Crea» es desa al portafoli: noms inventats i cap dada personal.|El comentarista del paso «Crea» se guarda en el portafolio: nombres inventados y ningún dato personal."],
    extra: [
      "Matemàtiques: simular la temperatura amb un dau i comparar les freqüències amb les probabilitats.|Matemáticas: simular la temperatura con un dado y comparar las frecuencias con las probabilidades.",
      "Educació física o ràdio escolar: gravar una crònica real d'un partit del pati i comparar-la amb la del model.|Educación física o radio escolar: grabar una crónica real de un partido del patio y compararla con la del modelo."
    ],
    trans: ["Sessió i1-4: el projecte del mini model amb estil. Unitat 3: al·lucinacions i comprovar el que diu una IA.|Sesión i1-4: el proyecto del mini modelo con estilo. Unidad 3: alucinaciones y comprobar lo que dice una IA."],
    slides: [
      { id: 's1', k: 'portada', t: 'Probabilitats i prediccions|Probabilidades y predicciones', x: 'Què hi ha dins una IA?|¿Qué hay dentro de una IA?', nota: "Tercera sessió de la unitat 1.|Tercera sesión de la unidad 1." },
      { id: 's2', k: 'pregunta', t: 'Per què el xat respon diferent cada vegada?|¿Por qué el chat responde distinto cada vez?', x: "Mateixa pregunta, paraules diferents.|Misma pregunta, palabras distintas.", nota: "Recull hipòtesis: hi tornareu al final.|Recoge hipótesis: volveréis al final." },
      { id: 's3', k: 'anim', t: 'Una fitxa, i una altra…|Una ficha, y otra…', anim: 'i13loop', x: "Mira, calcula, tria, afegeix… i torna a començar.|Mira, calcula, elige, añade… y vuelve a empezar.", nota: "Que ho expliquin amb les seves paraules.|Que lo expliquen con sus palabras." },
      { id: 's4', k: 'anim', t: 'El context|El contexto', anim: 'i13ctx', x: "Amb «porter blau», encerta.|Con «portero azul», acierta.", nota: "Connecta-ho amb «Paraules plegades».|Conéctalo con «Palabras dobladas»." },
      { id: 's5', k: 'anim', t: 'La temperatura|La temperatura', anim: 'i13temp2', x: "Baixa afila, alta aplana.|Baja afila, alta aplana.", nota: "Pregunta quina temperatura per a un resum.|Pregunta qué temperatura para un resumen." },
      { id: 's6', k: 'anim', t: "Com s'entrena un model gran|Cómo se entrena un modelo grande", anim: 'i13train', x: "Preentrenament, exemples de persones, valoracions.|Preentrenamiento, ejemplos de personas, valoraciones.", nota: "Sense xifres: el que importa és la idea.|Sin cifras: lo que importa es la idea." },
      { id: 's7', k: 'anim', t: 'Fluid no vol dir cert|Fluido no quiere decir cierto', anim: 'i13fluent', x: "El model tria el probable, no el veritable.|El modelo elige lo probable, no lo verdadero.", nota: "Anuncia la unitat 3: les al·lucinacions.|Anuncia la unidad 3: las alucinaciones." },
      { id: 's8', k: 'activitat', t: 'Paraules plegades|Palabras dobladas', timer: 8, punts: ["Escriu una paraula veient només l'última.|Escribe una palabra viendo solo la última.", "Plega i passa el full.|Dobla y pasa la hoja.", "Repetiu-ho veient-ne tres.|Repetidlo viendo tres."], nota: "Files de 5 o 6, un full per fila.|Filas de 5 o 6, una hoja por fila." },
      { id: 's9', k: 'pregunta', t: 'Què ha canviat amb 3 paraules?|¿Qué ha cambiado con 3 palabras?', x: "Quina frase té més sentit?|¿Qué frase tiene más sentido?", nota: "Més context, més coherència.|Más contexto, más coherencia." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 27, punts: ["Genera amb temperatura baixa i alta.|Genera con temperatura baja y alta.", "Troba la crònica falsa.|Encuentra la crónica falsa.", "Crea el teu comentarista.|Crea tu comentarista."], nota: "Fes la pausa activa a la meitat.|Haz la pausa activa a la mitad." },
      { id: 's11', k: 'media', t: 'Després de «blau»…|Después de «azul»…', x: "Si només mira una paraula, guanya «marca».|Si solo mira una palabra, gana «marca».", media: { k: 'ia', demo: 'ngram', text: 'el porter blau atura. el porter blau atura la pilota. el porter blau salta. el davanter blau marca. el davanter blau marca un gol. el davanter blau marca de cap. el davanter blau xuta.|el portero azul para. el portero azul para el balón. el portero azul salta. el delantero azul marca. el delantero azul marca un gol. el delantero azul marca de cabeza. el delantero azul chuta.', ctx: 'el porter blau|el portero azul' }, nota: "Repte: fer-lo mirar 2 paraules perquè guanyi «atura».|Reto: hacerlo mirar 2 palabras para que gane «para»." },
      { id: 's12', k: 'repte', t: 'Fluid però fals|Fluido pero falso', punts: ["Genera 3 cròniques des de «l'equip verd».|Genera 3 crónicas desde «el equipo verde».", "Busca'n una de falsa.|Busca una falsa.", "D'on surt cada tros?|¿De dónde sale cada trozo?"], nota: "Després de «ha» pot venir «perdut» o «guanyat».|Después de «ha» puede venir «perdido» o «ganado»." },
      { id: 's13', k: 'repte', t: 'El teu comentarista|Tu comentarista', punts: ["Tria un esport.|Elige un deporte.", "Afegeix-hi frases teves.|Añade frases tuyas.", "Genera amb temperatura baixa i alta.|Genera con temperatura baja y alta."], nota: "Es desa al portafoli.|Se guarda en el portafolio." },
      { id: 's14', k: 'concepte', t: 'Comprova sempre|Comprueba siempre', punts: ["Una IA pot dir coses falses amb seguretat.|Una IA puede decir cosas falsas con seguridad.", "Les dades importants, en una font fiable.|Los datos importantes, en una fuente fiable.", "Temperatura baixa per a tasques precises.|Temperatura baja para tareas precisas."], nota: "Torna a la pregunta de l'inici.|Vuelve a la pregunta del inicio." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ["Un model escriu fitxa a fitxa.|Un modelo escribe ficha a ficha.", "El context i la temperatura canvien el que tria.|El contexto y la temperatura cambian lo que elige.", "Probable no vol dir cert.|Probable no quiere decir cierto."], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Per què el xat respon diferent?|¿Por qué el chat responde distinto?", "Per què una frase fluida pot ser falsa?|¿Por qué una frase fluida puede ser falsa?"], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'Probabilitats i temperatura|Probabilidades y temperatura', k: 'fitxa',
        intro: "Un per alumne/a. Després de «la pilota» un model ha vist: «entra» 6 vegades, «surt» 3 vegades i «toca» 1 vegada.|Uno por alumno/a. Después de «el balón» un modelo ha visto: «entra» 6 veces, «sale» 3 veces y «toca» 1 vez.",
        items: [
          { q: "Calcula la probabilitat de cada paraula.|Calcula la probabilidad de cada palabra.", sol: "entra 60 %, surt 30 %, toca 10 %.|entra 60 %, sale 30 %, toca 10 %." },
          { q: "Amb temperatura 0, què escriurà sempre?|Con temperatura 0, ¿qué escribirá siempre?", sol: "«entra», la més probable.|«entra», la más probable." },
          { q: "Si genera 50 textos a temperatura 1, quantes vegades sortirà «surt», més o menys?|Si genera 50 textos a temperatura 1, ¿cuántas veces saldrá «sale», más o menos?", sol: "Unes 15 (el 30 % de 50).|Unas 15 (el 30 % de 50)." },
          { q: "I a temperatura 2, «toca» sortirà més o menys que a temperatura 1?|¿Y a temperatura 2, «toca» saldrá más o menos que a temperatura 1?", sol: "Més: la temperatura alta aplana les probabilitats i les paraules rares tenen més opcions.|Más: la temperatura alta aplana las probabilidades y las palabras raras tienen más opciones." },
          { q: "Inventa una frase fluida però falsa que podria escriure un model amb aquestes dues dades: «l'equip lila ha perdut» i «l'equip groc ha guanyat».|Inventa una frase fluida pero falsa que podría escribir un modelo con estos dos datos: «el equipo lila ha perdido» y «el equipo amarillo ha ganado».", big: true, sol: "Per exemple: «l'equip lila ha guanyat» (barreja les dues frases després de «ha»).|Por ejemplo: «el equipo lila ha ganado» (mezcla las dos frases después de «ha»)." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: un model amb el teu estil ---------- */
  'i1-4': {
    intro: "Projecte de la unitat 1. En parelles, l'alumnat planifica i escriu un corpus amb un estil (el xat d'una classe inventada, una cançó pròpia, un comentarista, un narrador de receptes…), l'entrena a l'app, l'avalua amb diferents començaments, contextos i temperatures, i el presenta en un minut explicant què ha après i quins límits té. Es treballen la memorització contra la generalització i l'autoria dels textos.|Proyecto de la unidad 1. En parejas, el alumnado planifica y escribe un corpus con un estilo (el chat de una clase inventada, una canción propia, un comentarista, un narrador de recetas…), lo entrena en la app, lo evalúa con distintos comienzos, contextos y temperaturas, y lo presenta en un minuto explicando qué ha aprendido y qué límites tiene. Se trabajan la memorización frente a la generalización y la autoría de los textos.",
    claus: [
      "El model imita el corpus: un estil clar i expressions repetides fan un model amb «personalitat».|El modelo imita el corpus: un estilo claro y expresiones repetidas hacen un modelo con «personalidad».",
      "Poques dades → copia (memoritza); més dades i variades → combina (generalitza).|Pocos datos → copia (memoriza); más datos y variados → combina (generaliza).",
      "Avaluar és provar de manera sistemàtica i apuntar-ho: sentit, estil i originalitat.|Evaluar es probar de forma sistemática y apuntarlo: sentido, estilo y originalidad.",
      "Els textos tenen autoria: al projecte, corpus propi i cap dada personal.|Los textos tienen autoría: en el proyecto, corpus propio y ningún dato personal."
    ],
    prev: ["Sessions i1-1 i i1-3: bigrames, context i temperatura.|Sesiones i1-1 e i1-3: bigramas, contexto y temperatura."],
    obj: [
      "L'alumne/a escriu un corpus coherent amb un estil i sense dades personals.|El alumno/a escribe un corpus coherente con un estilo y sin datos personales.",
      "L'alumne/a entrena el model i el millora afegint dades i canviant el context.|El alumno/a entrena el modelo y lo mejora añadiendo datos y cambiando el contexto.",
      "L'alumne/a avalua el model amb criteris (sentit, estil, originalitat).|El alumno/a evalúa el modelo con criterios (sentido, estilo, originalidad).",
      "L'alumne/a presenta el model explicant-ne els punts forts i els límits.|El alumno/a presenta el modelo explicando sus puntos fuertes y sus límites."
    ],
    comp: [
      "Competència digital (CD2 i CD5): crear continguts i entendre la IA|Competencia digital (CD2 y CD5): crear contenidos y entender la IA",
      "Competència en comunicació lingüística (CCL1): registres i estils de la llengua|Competencia en comunicación lingüística (CCL1): registros y estilos de la lengua",
      "Competència ciutadana (CC3): autoria i ús responsable dels textos|Competencia ciudadana (CC3): autoría y uso responsable de los textos"
    ],
    vocab: [
      ["Corpus|Corpus", "Conjunt de textos amb què s'entrena un model.|Conjunto de textos con el que se entrena un modelo."],
      ["Memoritzar|Memorizar", "Quan el model repeteix frases senceres de les dades en lloc de combinar-les.|Cuando el modelo repite frases enteras de los datos en lugar de combinarlas."],
      ["Generalitzar|Generalizar", "Fer servir el que s'ha après en combinacions noves.|Usar lo aprendido en combinaciones nuevas."],
      ["Avaluació|Evaluación", "Proves sistemàtiques per saber com funciona un model.|Pruebas sistemáticas para saber cómo funciona un modelo."],
      ["Autoria|Autoría", "Qui ha creat un text i quins drets en té.|Quién ha creado un texto y qué derechos tiene sobre él."]
    ],
    mat: {
      aula: ["Un ordinador per parella amb Numi Tech obert a la sessió del projecte|Un ordenador por pareja con Numi Tech abierto en la sesión del proyecto", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Rellotge o temporitzador visible per a les presentacions|Reloj o temporizador visible para las presentaciones"],
      imprimir: ["Pla del meu model (imprimible 1): un per parella|Plan de mi modelo (imprimible 1): uno por pareja", "La meva avaluació (imprimible 2): un per parella|Mi evaluación (imprimible 2): uno por pareja"],
      prep: ["Imprimir els dos fulls.|Imprimir las dos hojas.", "Preparar un exemple de corpus propi per ensenyar (per exemple, un narrador de receptes).|Preparar un ejemplo de corpus propio para enseñar (por ejemplo, un narrador de recetas).", "Formar les parelles i decidir l'ordre de les presentacions.|Formar las parejas y decidir el orden de las presentaciones."]
    },
    plan: [
      { min: 5, t: 'El repte del projecte|El reto del proyecto', fase: 'inici',
        fa: "Presenta el projecte: un mini model amb estil propi. Ensenya un exemple curt i el resultat que genera.|Presenta el proyecto: un mini modelo con estilo propio. Enseña un ejemplo corto y el resultado que genera.",
        diu: ["Quin estil triaríeu? Qui parla d'una manera tan reconeixible que un model la podria imitar?|¿Qué estilo elegiríais? ¿Quién habla de una manera tan reconocible que un modelo la podría imitar?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: 'Corpus, memoritzar, avaluar i autoria|Corpus, memorizar, evaluar y autoría', fase: 'teoria',
        fa: "Amb les animacions, explica què fa un bon corpus, la diferència entre copiar i combinar, una avaluació senzilla i per què el corpus ha de ser propi.|Con las animaciones, explica qué hace un buen corpus, la diferencia entre copiar y combinar, una evaluación sencilla y por qué el corpus debe ser propio.",
        diu: ["Per què un model amb poques dades copia?|¿Por qué un modelo con pocos datos copia?", "Si una cançó és a internet, la podem fer servir com vulguem?|Si una canción está en internet, ¿la podemos usar como queramos?"],
        slides: ['s3', 's4', 's5', 's6'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'El corpus en paper|El corpus en papel', fase: 'desconnectat',
        fa: "Les parelles trien l'estil i escriuen 10 frases al full «Pla del meu model». Prediuen les paraules més freqüents i revisen que no hi hagi dades personals.|Las parejas eligen el estilo y escriben 10 frases en la hoja «Plan de mi modelo». Predicen las palabras más frecuentes y revisan que no haya datos personales.",
        diu: ["Quina és l'expressió típica del vostre personatge?|¿Cuál es la expresión típica de vuestro personaje?"],
        slides: ['s7', 's8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 22, t: "A l'ordinador: entrenar i avaluar|En el ordenador: entrenar y evaluar", fase: 'ordinador',
        fa: "Fan la sessió de l'app fins al pas «Crea»: el repte de la cançó que copia, la mescla d'estils (opcional) i el seu model amb el corpus del full. Omplen el full «La meva avaluació» amb tres proves.|Hacen la sesión de la app hasta el paso «Crea»: el reto de la canción que copia, la mezcla de estilos (opcional) y su modelo con el corpus de la hoja. Rellenan la hoja «Mi evaluación» con tres pruebas.",
        diu: ["Quantes frases generades són còpies exactes?|¿Cuántas frases generadas son copias exactas?", "Què passa si el feu mirar 3 paraules enrere?|¿Qué pasa si lo hacéis mirar 3 palabras atrás?"],
        slides: ['s9', 's10', 's11', 's12'], app: "Fins al pas «Crea» (el meu model amb estil) i la fitxa.|Hasta el paso «Crea» (mi modelo con estilo) y la ficha.", org: "Parelles|Parejas" },
      { min: 10, t: 'Presentacions de 60 segons|Presentaciones de 60 segundos', fase: 'crea',
        fa: "Cada parella presenta el model a un altre grup: corpus, dues generacions en directe, què ha après i un límit. L'altre grup diu una cosa bona i una millora.|Cada pareja presenta el modelo a otro grupo: corpus, dos generaciones en directo, qué ha aprendido y un límite. El otro grupo dice una cosa buena y una mejora.",
        diu: ["Quin límit heu trobat? Com el podríeu millorar?|¿Qué límite habéis encontrado? ¿Cómo lo podríais mejorar?"],
        slides: ['s13', 's14'], app: "El pas «Presentació en 60 segons».|El paso «Presentación en 60 segundos».", org: "Grups de 4 (dues parelles)|Grupos de 4 (dos parejas)" },
      { min: 5, t: 'Tancament de la unitat|Cierre de la unidad', fase: 'tancament',
        fa: "Repassa les quatre sessions: prediccions, regles i exemples, probabilitat i temperatura, i el model propi. Tiquet de sortida i com s'han sentit.|Repasa las cuatro sesiones: predicciones, reglas y ejemplos, probabilidad y temperatura, y el modelo propio. Tique de salida y cómo se han sentido.",
        diu: ["Què us emporteu d'aquesta unitat?|¿Qué os lleváis de esta unidad?"],
        slides: ['s15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu un corpus molt curt i el model només copia.|Escribe un corpus muy corto y el modelo solo copia.", "Demana més frases i que facin servir paraules compartides (cruïlles): «quin gol», «quin xut»…|Pide más frases y que usen palabras compartidas (cruces): «qué gol», «qué chut»…"],
      ["Copia la lletra d'una cançó famosa.|Copia la letra de una canción famosa.", "Recorda l'autoria: que n'escriguin una de pròpia inspirada en l'estil.|Recuerda la autoría: que escriban una propia inspirada en el estilo."],
      ["Posa noms reals de companys al xat inventat.|Pone nombres reales de compañeros en el chat inventado.", "Noms inventats sempre: el corpus es desa al portafoli.|Nombres inventados siempre: el corpus se guarda en el portafolio."],
      ["A la presentació només ensenya el millor text.|En la presentación solo enseña el mejor texto.", "Demana també un text dolent i que n'expliquin el perquè: és part de l'avaluació.|Pide también un texto malo y que expliquen el porqué: es parte de la evaluación."]
    ],
    diff: {
      mes: "Nivell PRO: corpus de 120 fitxes i 55 paraules diferents, context de 2 o més paraules i comparar quant copia el model amb 1, 2 i 3 paraules enrere. Repte extra de la mescla d'estils.|Nivel PRO: corpus de 120 fichas y 55 palabras distintas, contexto de 2 o más palabras y comparar cuánto copia el modelo con 1, 2 y 3 palabras atrás. Reto extra de la mezcla de estilos.",
      menys: "Partir del corpus d'exemple del docent i canviar-ne només el personatge. Presentar en parella amb un guió de tres frases.|Partir del corpus de ejemplo del docente y cambiar solo el personaje. Presentar en pareja con un guion de tres frases."
    },
    aval: {
      ticket: ["Què vol dir que un model «memoritza»?|¿Qué quiere decir que un modelo «memoriza»?", "Digues un límit del teu model.|Di un límite de tu modelo."],
      rubric: [
        ["Corpus|Corpus", "Té un estil clar, prou varietat i cap dada personal.|Tiene un estilo claro, bastante variedad y ningún dato personal.", "És curt, sense estil o amb dades personals.|Es corto, sin estilo o con datos personales."],
        ["Entrenar i millorar|Entrenar y mejorar", "Afegeix dades i canvia el context amb intenció.|Añade datos y cambia el contexto con intención.", "No canvia res o ho fa a l'atzar.|No cambia nada o lo hace al azar."],
        ["Avaluar|Evaluar", "Fa diverses proves i les apunta amb criteris.|Hace varias pruebas y las apunta con criterios.", "Només fa una prova o no l'apunta.|Solo hace una prueba o no la apunta."],
        ["Presentar|Presentar", "Explica què ha après i almenys un límit.|Explica qué ha aprendido y al menos un límite.", "Només ensenya el resultat.|Solo enseña el resultado."],
        ["Autoria|Autoría", "Fa servir textos propis i ho diu.|Usa textos propios y lo dice.", "Copia textos amb drets.|Copia textos con derechos."]
      ]
    },
    casa: "A casa, expliqueu a la família el vostre model i ensenyeu-los dos textos que hagi generat. Endevinen quin estil imita? Quina frase els sembla més «humana»?|En casa, explicad a la familia vuestro modelo y enseñadles dos textos que haya generado. ¿Adivinan qué estilo imita? ¿Qué frase les parece más «humana»?",
    faq: [
      ["Els models grans també copien textos?|¿Los modelos grandes también copian textos?", "De vegades sí: poden reproduir fragments que han vist moltes vegades. Per això hi ha debats i judicis sobre els drets d'autor de les dades d'entrenament.|A veces sí: pueden reproducir fragmentos que han visto muchas veces. Por eso hay debates y juicios sobre los derechos de autor de los datos de entrenamiento."],
      ["Podem fer servir la lletra d'una cançó si la canviem una mica?|¿Podemos usar la letra de una canción si la cambiamos un poco?", "Per al projecte, millor que no: escriviu-ne una de pròpia inspirada en l'estil. Així no hi ha dubtes d'autoria.|Para el proyecto, mejor que no: escribid una propia inspirada en el estilo. Así no hay dudas de autoría."],
      ["Es pot exportar el model?|¿Se puede exportar el modelo?", "Es desa al portafoli amb el corpus; es pot tornar a obrir i ensenyar.|Se guarda en el portafolio con el corpus; se puede volver a abrir y enseñar."]
    ],
    tec: [
      ["El comptador de fitxes no arriba a 80.|El contador de fichas no llega a 80.", "Compten també els punts: cal més text. Que afegeixin frases curtes amb el mateix estil.|Cuentan también los puntos: hace falta más texto. Que añadan frases cortas con el mismo estilo."],
      ["Les presentacions s'allarguen.|Las presentaciones se alargan.", "Feu servir el temporitzador de la diapositiva: un minut exacte per parella.|Usad el temporizador de la diapositiva: un minuto exacto por pareja."]
    ],
    seg: ["El corpus es desa al portafoli: noms inventats, cap adreça, telèfon ni conversa real.|El corpus se guarda en el portafolio: nombres inventados, ninguna dirección, teléfono ni conversación real.", "A les presentacions, respecte pels estils i els textos dels altres.|En las presentaciones, respeto por los estilos y los textos de los demás."],
    extra: [
      "Llengua: analitzar els trets d'estil d'un narrador o un comentarista (expressions, registre, repeticions).|Lengua: analizar los rasgos de estilo de un narrador o un comentarista (expresiones, registro, repeticiones).",
      "Música: escriure la lletra d'una cançó en grup i entrenar-hi un model per inventar versos nous.|Música: escribir la letra de una canción en grupo y entrenar un modelo con ella para inventar versos nuevos."
    ],
    trans: ["Unitat 2: entrenar classificadors amb imatges, dibuixos i sons, provar-los i detectar biaixos.|Unidad 2: entrenar clasificadores con imágenes, dibujos y sonidos, probarlos y detectar sesgos."],
    slides: [
      { id: 's1', k: 'portada', t: 'Projecte: un model amb el teu estil|Proyecto: un modelo con tu estilo', x: 'Què hi ha dins una IA?|¿Qué hay dentro de una IA?', nota: "Projecte final de la unitat 1.|Proyecto final de la unidad 1." },
      { id: 's2', k: 'pregunta', t: 'Quin estil triaríeu?|¿Qué estilo elegiríais?', x: "Un xat inventat, una cançó, un comentarista, un narrador…|Un chat inventado, una canción, un comentarista, un narrador…", nota: "Ensenya el teu exemple de corpus.|Enseña tu ejemplo de corpus." },
      { id: 's3', k: 'anim', t: 'Un bon corpus|Un buen corpus', anim: 'i14corpus', x: "Estil clar, expressions repetides, varietat i cap dada personal.|Estilo claro, expresiones repetidas, variedad y ningún dato personal.", nota: "Pregunta quina expressió faria servir el seu personatge.|Pregunta qué expresión usaría su personaje." },
      { id: 's4', k: 'anim', t: 'Copiar o combinar|Copiar o combinar', anim: 'i14memo', x: "Poques dades: còpia. Més dades: frases noves.|Pocos datos: copia. Más datos: frases nuevas.", nota: "Connecta-ho amb el repte de la cançó.|Conéctalo con el reto de la canción." },
      { id: 's5', k: 'anim', t: 'Avaluar el model|Evaluar el modelo', anim: 'i14eval', x: "Sentit, estil i originalitat.|Sentido, estilo y originalidad.", nota: "És el que omplen al full 2.|Es lo que rellenan en la hoja 2." },
      { id: 's6', k: 'anim', t: 'Els textos tenen autor|Los textos tienen autor', anim: 'i14rights', x: "Corpus propi i digues d'on surt.|Corpus propio y di de dónde sale.", nota: "Hi ha debats i judicis oberts sobre les dades d'entrenament.|Hay debates y juicios abiertos sobre los datos de entrenamiento." },
      { id: 's7', k: 'activitat', t: 'El corpus en paper|El corpus en papel', timer: 10, punts: ["Trieu un estil.|Elegid un estilo.", "Escriviu 10 frases.|Escribid 10 frases.", "Prediu les paraules més freqüents.|Predecid las palabras más frecuentes."], nota: "Full «Pla del meu model».|Hoja «Plan de mi modelo»." },
      { id: 's8', k: 'concepte', t: "Idees d'estil|Ideas de estilo", punts: ["El narrador de receptes: «ara afegim…».|El narrador de recetas: «ahora añadimos…».", "El comentarista: «quin gol!».|El comentarista: «¡qué gol!».", "El xat inventat: «bon dia, classe!».|El chat inventado: «¡buenos días, clase!»."], nota: "Que en trobin una de pròpia.|Que encuentren una propia." },
      { id: 's9', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 22, punts: ["La cançó que copia.|La canción que copia.", "El vostre model amb estil.|Vuestro modelo con estilo.", "La fitxa de la presentació.|La ficha de la presentación."], nota: "Que omplin el full d'avaluació mentre proven.|Que rellenen la hoja de evaluación mientras prueban." },
      { id: 's10', k: 'repte', t: 'La cançó que copia|La canción que copia', punts: ["Després de «ballem» sempre ve «fins».|Después de «bailamos» siempre viene «hasta».", "Afegeix versos variats.|Añade versos variados."], nota: "Més cruïlles, menys còpia.|Más cruces, menos copia." },
      { id: 's11', k: 'repte', t: 'El vostre model|Vuestro modelo', punts: ["Almenys 80 fitxes i 40 paraules diferents.|Al menos 80 fichas y 40 palabras distintas.", "3 generacions.|3 generaciones.", "Temperatura baixa i alta.|Temperatura baja y alta."], nota: "PRO: 120 fitxes i context de 2 paraules.|PRO: 120 fichas y contexto de 2 palabras." },
      { id: 's12', k: 'concepte', t: 'La fitxa del model|La ficha del modelo', punts: ["Estil i temperatura preferida.|Estilo y temperatura preferida.", "Un límit que heu trobat.|Un límite que habéis encontrado.", "Com el milloraríeu.|Cómo lo mejoraríais."], nota: "És el pas de l'app abans de presentar.|Es el paso de la app antes de presentar." },
      { id: 's13', k: 'activitat', t: 'Presentació en 60 segons|Presentación en 60 segundos', timer: 10, punts: ["Corpus i estil.|Corpus y estilo.", "Dues generacions en directe.|Dos generaciones en directo.", "Què ha après i un límit.|Qué ha aprendido y un límite."], nota: "Un minut per parella; l'altre grup dona retorn.|Un minuto por pareja; el otro grupo da retorno." },
      { id: 's14', k: 'pregunta', t: 'Què heu après dels altres models?|¿Qué habéis aprendido de los otros modelos?', x: "Quin estil s'ha imitat millor? Per què?|¿Qué estilo se ha imitado mejor? ¿Por qué?", nota: "Relaciona-ho amb el corpus de cada parella.|Relaciónalo con el corpus de cada pareja." },
      { id: 's15', k: 'resum', t: 'Unitat 1: què hi ha dins una IA|Unidad 1: qué hay dentro de una IA', punts: ["Prediu la fitxa següent amb probabilitats.|Predice la ficha siguiente con probabilidades.", "Aprèn de dades (i també porta regles).|Aprende de datos (y también lleva reglas).", "El context i la temperatura canvien el que escriu.|El contexto y la temperatura cambian lo que escribe."], nota: "Repàs de la unitat.|Repaso de la unidad." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Què vol dir que un model memoritza?|¿Qué quiere decir que un modelo memoriza?", "Un límit del teu model.|Un límite de tu modelo."], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'Pla del meu model|Plan de mi modelo', k: 'fitxa',
        intro: "Un per parella. Planifiqueu el corpus abans d'escriure'l a l'app. Recordeu: noms inventats i cap dada personal.|Uno por pareja. Planificad el corpus antes de escribirlo en la app. Recordad: nombres inventados y ningún dato personal.",
        items: [
          { q: "Quin estil o personatge imitarà el model?|¿Qué estilo o personaje imitará el modelo?", sol: "Per exemple: un narrador de receptes que parla amb calma.|Por ejemplo: un narrador de recetas que habla con calma." },
          { q: "Escriviu 10 frases curtes amb aquest estil:|Escribid 10 frases cortas con ese estilo:", big: true, sol: "Frases curtes, amb expressions que es repeteixen («ara afegim…», «amb calma»).|Frases cortas, con expresiones que se repiten («ahora añadimos…», «con calma»)." },
          { q: "Quines 3 paraules creieu que sortiran més?|¿Qué 3 palabras creéis que saldrán más?", sol: "Normalment articles i l'expressió típica del personatge.|Normalmente artículos y la expresión típica del personaje." },
          { q: "Revisió: hi ha noms reals, adreces, telèfons o textos copiats?|Revisión: ¿hay nombres reales, direcciones, teléfonos o textos copiados?", sol: "No n'hi ha d'haver cap.|No tiene que haber ninguno." }
        ] },
      { id: 'p2', t: 'La meva avaluació|Mi evaluación', k: 'fitxa',
        intro: "Un per parella. Feu tres proves amb començaments o temperatures diferents i marqueu cada criteri: té sentit, s'assembla a l'estil, és una frase nova (no copiada).|Uno por pareja. Haced tres pruebas con comienzos o temperaturas distintos y marcad cada criterio: tiene sentido, se parece al estilo, es una frase nueva (no copiada).",
        items: [
          { q: "Prova 1 (començament i temperatura). Sentit / Estil / Nova:|Prueba 1 (comienzo y temperatura). Sentido / Estilo / Nueva:", sol: "Amb temperatura baixa sol tenir sentit però pot copiar.|Con temperatura baja suele tener sentido pero puede copiar." },
          { q: "Prova 2. Sentit / Estil / Nova:|Prueba 2. Sentido / Estilo / Nueva:", sol: "Amb temperatura al voltant d'1 sol haver-hi més frases noves.|Con temperatura alrededor de 1 suele haber más frases nuevas." },
          { q: "Prova 3. Sentit / Estil / Nova:|Prueba 3. Sentido / Estilo / Nueva:", sol: "Amb temperatura alta hi ha més frases sense sentit.|Con temperatura alta hay más frases sin sentido." },
          { q: "Resultat total (de 9) i un límit que heu trobat:|Resultado total (de 9) y un límite que habéis encontrado:", big: true, sol: "Per exemple: 6 de 9; copia frases quan mira 3 paraules enrere.|Por ejemplo: 6 de 9; copia frases cuando mira 3 palabras atrás." }
        ] }
    ]
  }
});
