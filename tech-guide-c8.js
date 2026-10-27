/* Numi Tech · Tech IA · guies del professor. Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */

/* ── unitat 1 ── */
/* Tech IA · unitat 1 · guies del professor (mateix esquema que tech-guide-c1.js).
   Diapositives «media» amb TMEDIA.ia (tech-ia.js): la demo del model que compta parelles. Tot el que fa l'alumnat és
   dins de l'app i amb models simulats: no cal cap compte ni cap servei d'IA extern. */
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

/* ── unitat 2 ── */
/* Tech IA · unitat 2 · guies del professor (mateix esquema que tech-guide-c1.js i que i1-1).
   Tot el que fa l'alumnat és dins de l'app: classificadors k-NN al navegador, sense comptes ni serveis externs. Fonts dels
   fets reals citats: Buolamwini i Gebru, «Gender Shades» (PMLR 81, 2018); Mitchell et al., «Model Cards for Model
   Reporting» (2019); Ribeiro, Singh i Guestrin, «Why Should I Trust You?» (KDD 2016); Reglament (UE) 2024/1689, art. 5.1.f. */
Object.assign(TGUIDE, {

  /* ---------- Sessió 1 · Dades, etiquetes i prova ---------- */
  'i2-1': {
    intro: "L'alumnat fa per primera vegada tot el procés d'entrenar un classificador: decidir les classes, recollir exemples, etiquetar-los, separar entrenament i prova, entrenar, provar i millorar. Descobreix que la IA converteix cada exemple en números (característiques) i que decideix comparant-los amb els exemples més semblants. Amb una activitat desconnectada viu la feina real d'etiquetar dades i per què calen criteris clars.|El alumnado hace por primera vez todo el proceso de entrenar un clasificador: decidir las clases, recoger ejemplos, etiquetarlos, separar entrenamiento y prueba, entrenar, probar y mejorar. Descubre que la IA convierte cada ejemplo en números (características) y que decide comparándolos con los ejemplos más parecidos. Con una actividad desconectada vive el trabajo real de etiquetar datos y por qué hacen falta criterios claros.",
    claus: [
      "Exemple = dada + etiqueta. Les respostes possibles són les classes.|Ejemplo = dato + etiqueta. Las respuestas posibles son las clases.",
      "La IA compara característiques (números), no «veu» com nosaltres.|La IA compara características (números), no «ve» como nosotros.",
      "Entrenament i prova separats: la prova, amb exemples que la IA no ha vist mai.|Entrenamiento y prueba separados: la prueba, con ejemplos que la IA no ha visto nunca.",
      "Etiquetar és una feina humana: sense criteris clars, les etiquetes no coincideixen.|Etiquetar es un trabajo humano: sin criterios claros, las etiquetas no coinciden."
    ],
    prev: ["Unitat 1: aprendre d'exemples i els k veïns més propers (sessió i1-2).|Unidad 1: aprender de ejemplos y los k vecinos más cercanos (sesión i1-2)."],
    obj: [
      "L'alumne/a descriu i ordena els passos per crear un classificador.|El alumno/a describe y ordena los pasos para crear un clasificador.",
      "L'alumne/a explica què són les dades, les etiquetes i les classes.|El alumno/a explica qué son los datos, las etiquetas y las clases.",
      "L'alumne/a justifica per què la prova es fa amb exemples nous.|El alumno/a justifica por qué la prueba se hace con ejemplos nuevos.",
      "L'alumne/a entrena i prova un classificador amb exemples, dibuixos o càmera.|El alumno/a entrena y prueba un clasificador con ejemplos, dibujos o cámara."
    ],
    comp: [
      "Competència digital (CD5): entrenar i avaluar models d'IA senzills|Competencia digital (CD5): entrenar y evaluar modelos de IA sencillos",
      "Competència STEM (STEM2): mètode experimental, dades i proves|Competencia STEM (STEM2): método experimental, datos y pruebas",
      "Competència personal, social i d'aprendre a aprendre (CPSAA): acordar criteris en equip|Competencia personal, social y de aprender a aprender (CPSAA): acordar criterios en equipo"
    ],
    vocab: [
      ["Classe|Clase", "Cadascuna de les respostes que pot donar un classificador.|Cada una de las respuestas que puede dar un clasificador."],
      ["Etiqueta|Etiqueta", "La resposta correcta que acompanya un exemple d'entrenament.|La respuesta correcta que acompaña un ejemplo de entrenamiento."],
      ["Característiques|Características", "Els números que extreu la IA de cada exemple per comparar-los.|Los números que extrae la IA de cada ejemplo para compararlos."],
      ["Conjunt de prova|Conjunto de prueba", "Exemples reservats que la IA no ha vist en l'entrenament.|Ejemplos reservados que la IA no ha visto en el entrenamiento."],
      ["Aprenentatge supervisat|Aprendizaje supervisado", "Entrenar una IA amb exemples que ja porten la resposta correcta.|Entrenar una IA con ejemplos que ya llevan la respuesta correcta."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Dades, etiquetes i prova»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Datos, etiquetas y prueba»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Les targetes «Fruita o verdura?» retallades (un paquet per grup)|Las tarjetas «¿Fruta o verdura?» recortadas (un paquete por grupo)", "Objectes de la taula per al pas «Crea» (llapis, goma, estoig…)|Objetos de la mesa para el paso «Crea» (lápiz, goma, estuche…)"],
      imprimir: ["Fruita o verdura? (imprimible 1): un paquet per grup|¿Fruta o verdura? (imprimible 1): un paquete por grupo", "Full de l'etiquetador (imprimible 2): un per grup|Hoja del etiquetador (imprimible 2): una por grupo"],
      prep: ["Imprimir i retallar les targetes.|Imprimir y recortar las tarjetas.", "Comprovar si les càmeres dels ordinadors funcionen; si no, el pas «Crea» passa sol al dibuix.|Comprobar si las cámaras de los ordenadores funcionan; si no, el paso «Crea» pasa solo al dibujo.", "Decidir si el grup fa el nivell PRO.|Decidir si el grupo hace el nivel PRO."]
    },
    plan: [
      { min: 5, t: "La caixa que reconeix la fruita|La caja que reconoce la fruta", fase: 'inici',
        fa: "Planteja el cas: una caixa d'autopagament que reconeix la fruita amb una càmera. Què hauríem de fer perquè aprengués? Apunta els passos que proposin.|Plantea el caso: una caja de autopago que reconoce la fruta con una cámara. ¿Qué tendríamos que hacer para que aprendiera? Apunta los pasos que propongan.",
        diu: ["Quantes fotos li caldrien? De quines fruites? Qui les etiquetaria?|¿Cuántas fotos le harían falta? ¿De qué frutas? ¿Quién las etiquetaría?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: 'Exemples, característiques, veïns i prova|Ejemplos, características, vecinos y prueba', fase: 'teoria',
        fa: "Amb les animacions: dada + etiqueta, la quadrícula de colors que veu la IA, els 5 veïns més propers, la separació entre entrenament i prova i qui posa les etiquetes.|Con las animaciones: dato + etiqueta, la cuadrícula de colores que ve la IA, los 5 vecinos más cercanos, la separación entre entrenamiento y prueba y quién pone las etiquetas.",
        diu: ["Si la IA veu números, com distingeix una poma d'un plàtan?|Si la IA ve números, ¿cómo distingue una manzana de un plátano?", "Per què no la provem amb les mateixes fotos?|¿Por qué no la probamos con las mismas fotos?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'Etiquetadors humans|Etiquetadores humanos', fase: 'desconnectat',
        fa: "En grups de quatre, cada persona classifica en silenci les 12 targetes (fruita o verdura). Comparen, apunten els desacords, acorden un criteri i tornen a classificar.|En grupos de cuatro, cada persona clasifica en silencio las 12 tarjetas (fruta o verdura). Comparan, apuntan los desacuerdos, acuerdan un criterio y vuelven a clasificar.",
        diu: ["El tomàquet, què és? I el carbassó? Qui té raó?|El tomate, ¿qué es? ¿Y la calabaza? ¿Quién tiene razón?", "Amb el criteri, coincidiu més?|Con el criterio, ¿coincidís más?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 25, t: "A l'ordinador: entrenar i provar|En el ordenador: entrenar y probar", fase: 'ordinador',
        fa: "Fan la sessió de l'app des de «Recorda» fins al pas «Crea»: l'escàner de fruita, ordenar els passos, l'escàner de 4 productes (90 %), els senyals dibuixats i el seu escàner amb la càmera. Fes la pausa activa amb tot el grup.|Hacen la sesión de la app desde «Recuerda» hasta el paso «Crea»: el escáner de fruta, ordenar los pasos, el escáner de 4 productos (90 %), las señales dibujadas y su escáner con la cámara. Haz la pausa activa con todo el grupo.",
        diu: ["Mira els 5 veïns: per què ha dit «raïm»?|Mira los 5 vecinos: ¿por qué ha dicho «uva»?", "Els teus exemples de prova, s'assemblen als d'entrenament?|Tus ejemplos de prueba, ¿se parecen a los de entrenamiento?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (el meu escàner).|De «Recuerda» hasta el paso «Crea» (mi escáner).", org: "Individual|Individual" },
      { min: 8, t: "Tancament: el cicle d'una IA|Cierre: el ciclo de una IA", fase: 'tancament',
        fa: "Repassa el cicle (recollir, etiquetar, separar, entrenar, provar, millorar) i pregunta on s'ha equivocat més la seva IA i per què. Tiquet de sortida i com s'han sentit.|Repasa el ciclo (recoger, etiquetar, separar, entrenar, probar, mejorar) y pregunta dónde se ha equivocado más su IA y por qué. Tique de salida y cómo se han sentido.",
        diu: ["Què milloraríeu primer: més exemples o més variats?|¿Qué mejoraríais primero: más ejemplos o más variados?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Prova la IA amb els mateixos objectes, en la mateixa posició, i creu que és perfecta.|Prueba la IA con los mismos objetos, en la misma posición, y cree que es perfecta.", "Demana una prova amb una altra posició, distància o llum: és la prova que compta.|Pide una prueba con otra posición, distancia o luz: es la prueba que cuenta."],
      ["Mantén premut el botó de la càmera i grava 40 exemples idèntics.|Mantiene pulsado el botón de la cámara y graba 40 ejemplos idénticos.", "Que mogui l'objecte mentre grava: exemples variats valen més que molts d'iguals.|Que mueva el objeto mientras graba: ejemplos variados valen más que muchos iguales."],
      ["Pensa que la IA «sap» què és una poma.|Piensa que la IA «sabe» qué es una manzana.", "Ensenya la quadrícula de colors: compara números. Un objecte vermell i rodó podria ser «poma».|Enseña la cuadrícula de colores: compara números. Un objeto rojo y redondo podría ser «manzana»."],
      ["A l'activitat desconnectada, discuteix qui té raó en lloc d'acordar un criteri.|En la actividad desconectada, discute quién tiene razón en lugar de acordar un criterio.", "No hi ha una resposta única: el que importa és que el criteri sigui clar i que tothom l'apliqui igual.|No hay una respuesta única: lo que importa es que el criterio sea claro y que todo el mundo lo aplique igual."]
    ],
    diff: {
      mes: "Nivell PRO: l'escàner de sis productes (90 %) i un escàner propi de tres objectes amb 10 exemples variats. Repte extra del timbre (veu, aplaudiment i xiulet). Pregunta d'investigació: per què les caixes reals també pesen la fruita?|Nivel PRO: el escáner de seis productos (90 %) y un escáner propio de tres objetos con 10 ejemplos variados. Reto extra del timbre (voz, aplauso y silbido). Pregunta de investigación: ¿por qué las cajas reales también pesan la fruta?",
      menys: "Fer els reptes amb «Exemples» (+5) i en parella. Al pas «Crea», dos objectes molt diferents (de color i forma).|Hacer los retos con «Ejemplos» (+5) y en pareja. En el paso «Crea», dos objetos muy distintos (de color y forma)."
    },
    aval: {
      ticket: ["Què és una etiqueta?|¿Qué es una etiqueta?", "Per què es prova amb exemples nous?|¿Por qué se prueba con ejemplos nuevos?"],
      rubric: [
        ["El procés|El proceso", "Ordena i explica els passos per crear un classificador.|Ordena y explica los pasos para crear un clasificador.", "Se salta passos o els desordena.|Se salta pasos o los desordena."],
        ["Dades i etiquetes|Datos y etiquetas", "Explica què són i per què importen.|Explica qué son y por qué importan.", "Les confon.|Los confunde."],
        ["La prova|La prueba", "Prova amb exemples nous i variats.|Prueba con ejemplos nuevos y variados.", "Prova amb els mateixos exemples.|Prueba con los mismos ejemplos."],
        ["Entrenar|Entrenar", "Arriba a l'encert demanat amb exemples variats.|Llega al acierto pedido con ejemplos variados.", "Necessita ajuda per arribar-hi.|Necesita ayuda para llegar."]
      ]
    },
    casa: "A casa, busqueu quines apps o aparells reconeixen coses (cares, plantes, cançons, text en fotos). Quines classes deuen tenir? Qui creieu que va posar les etiquetes de les dades?|En casa, buscad qué apps o aparatos reconocen cosas (caras, plantas, canciones, texto en fotos). ¿Qué clases deben de tener? ¿Quién creéis que puso las etiquetas de los datos?",
    faq: [
      ["Les IA de veritat també funcionen amb veïns?|¿Las IA de verdad también funcionan con vecinos?", "Algunes sí, però les més potents fan servir xarxes neuronals que aprenen les seves pròpies característiques. La idea de fons és la mateixa: exemples etiquetats i prova amb exemples nous.|Algunas sí, pero las más potentes usan redes neuronales que aprenden sus propias características. La idea de fondo es la misma: ejemplos etiquetados y prueba con ejemplos nuevos."],
      ["Qui etiqueta les dades de les IA grans?|¿Quién etiqueta los datos de las IA grandes?", "Sovint, moltes persones contractades per fer-ho, i també usuaris sense saber-ho (quan marquem un correu com a spam, per exemple).|A menudo, muchas personas contratadas para hacerlo, y también usuarios sin saberlo (cuando marcamos un correo como spam, por ejemplo)."],
      ["Es desen les fotos de la càmera?|¿Se guardan las fotos de la cámara?", "No: es queden a la memòria del navegador mentre dura el pas i s'esborren en sortir. Al portafoli només hi van els noms de les classes i quants exemples hi havia.|No: se quedan en la memoria del navegador mientras dura el paso y se borran al salir. En el portafolio solo van los nombres de las clases y cuántos ejemplos había."]
    ],
    tec: [
      ["La càmera no s'activa.|La cámara no se activa.", "Cal donar permís al navegador. Si no n'hi ha, l'app passa sola al dibuix o als exemples.|Hay que dar permiso al navegador. Si no lo hay, la app pasa sola al dibujo o a los ejemplos."],
      ["Al mòbil no es veuen alhora l'entrenament i la prova.|En el móvil no se ven a la vez el entrenamiento y la prueba.", "Hi ha dues pestanyes a dalt: «Entrena» i «Prova».|Hay dos pestañas arriba: «Entrena» y «Prueba»."]
    ],
    seg: ["Al pas «Crea» la càmera enfoca objectes, no persones. Les imatges no surten del dispositiu.|En el paso «Crea» la cámara enfoca objetos, no personas. Las imágenes no salen del dispositivo."],
    extra: [
      "Ciències: classificar éssers vius amb claus dicotòmiques (regles) i comparar-ho amb aprendre d'exemples.|Ciencias: clasificar seres vivos con claves dicotómicas (reglas) y compararlo con aprender de ejemplos.",
      "Matemàtiques: calcular percentatges d'encert i representar-los en gràfics.|Matemáticas: calcular porcentajes de acierto y representarlos en gráficos."
    ],
    trans: ["Sessió i2-2: mesurar els errors amb la matriu de confusió. Sessió i2-3: el biaix.|Sesión i2-2: medir los errores con la matriz de confusión. Sesión i2-3: el sesgo."],
    slides: [
      { id: 's1', k: 'portada', t: 'Dades, etiquetes i prova|Datos, etiquetas y prueba', x: 'Entrena la teva IA|Entrena tu IA', nota: "Primera sessió de la unitat 2.|Primera sesión de la unidad 2." },
      { id: 's2', k: 'pregunta', t: "Com sap la caixa quina fruita és?|¿Cómo sabe la caja qué fruta es?", x: "Sense codis de barres, només amb una càmera.|Sin códigos de barras, solo con una cámara.", nota: "Apunta els passos que proposin.|Apunta los pasos que propongan." },
      { id: 's3', k: 'anim', t: 'Dada + etiqueta = exemple|Dato + etiqueta = ejemplo', anim: 'i21label', x: "Cada resposta possible és una classe.|Cada respuesta posible es una clase.", nota: "Introdueix «aprenentatge supervisat».|Introduce «aprendizaje supervisado»." },
      { id: 's4', k: 'anim', t: 'El que «veu» la IA|Lo que «ve» la IA', anim: 'i21feat', x: "Una quadrícula de colors: números.|Una cuadrícula de colores: números.", nota: "Pregunta què passaria amb un tomàquet.|Pregunta qué pasaría con un tomate." },
      { id: 's5', k: 'media', t: 'Els 5 veïns més propers|Los 5 vecinos más cercanos', x: "La classe que més surt guanya.|La clase que más sale gana.", media: { k: 'ia', demo: 'knn' }, nota: "Relaciona-ho amb la confiança (%).|Relaciónalo con la confianza (%)." },
      { id: 's6', k: 'anim', t: 'Entrenament i prova|Entrenamiento y prueba', anim: 'i21split', x: "La prova, amb exemples mai vistos.|La prueba, con ejemplos nunca vistos.", nota: "L'examen amb les respostes davant no compta.|El examen con las respuestas delante no cuenta." },
      { id: 's7', k: 'anim', t: 'Qui posa les etiquetes?|¿Quién pone las etiquetas?', anim: 'i21who', x: "Sense criteri, no hi ha acord.|Sin criterio, no hay acuerdo.", nota: "Connecta-ho amb l'activitat següent.|Conéctalo con la actividad siguiente." },
      { id: 's8', k: 'activitat', t: 'Etiquetadors humans|Etiquetadores humanos', timer: 10, punts: ["Classifica en silenci les 12 targetes.|Clasifica en silencio las 12 tarjetas.", "Compareu i trobeu els desacords.|Comparad y encontrad los desacuerdos.", "Acordeu un criteri i torneu-hi.|Acordad un criterio y volved a empezar."], nota: "Grups de quatre amb les targetes.|Grupos de cuatro con las tarjetas." },
      { id: 's9', k: 'pregunta', t: 'Tomàquet: fruita o verdura?|Tomate: ¿fruta o verdura?', x: "Qui té raó? Depèn del criteri.|¿Quién tiene razón? Depende del criterio.", nota: "Per a la botànica és un fruit; a la cuina, se sol tractar com a verdura.|Para la botánica es un fruto; en la cocina, se suele tratar como verdura." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 25, punts: ["L'escàner de fruita.|El escáner de fruta.", "Ordena els passos.|Ordena los pasos.", "4 productes al 90 %.|4 productos al 90 %."], nota: "Fes la pausa activa quan la majoria hi arribi.|Haz la pausa activa cuando la mayoría llegue." },
      { id: 's11', k: 'repte', t: 'Quatre productes al 90 %|Cuatro productos al 90 %', punts: ["Afegeix exemples de cada classe.|Añade ejemplos de cada clase.", "Fes la prova i mira la taula.|Haz la prueba y mira la tabla."], nota: "PRO: sis productes.|PRO: seis productos." },
      { id: 's12', k: 'repte', t: 'Senyals dibuixats|Señales dibujadas', punts: ["Triangle: perill. Cercle: prohibit. Quadrat: informació.|Triángulo: peligro. Círculo: prohibido. Cuadrado: información.", "5 dibuixos de cada.|5 dibujos de cada."], nota: "Dibuixos grans i al mig.|Dibujos grandes y en el centro." },
      { id: 's13', k: 'repte', t: 'El teu escàner|Tu escáner', punts: ["2 objectes de la taula.|2 objetos de la mesa.", "8 exemples variats de cada.|8 ejemplos variados de cada.", "Prova amb exemples nous.|Prueba con ejemplos nuevos."], nota: "Es desa al portafoli (sense imatges).|Se guarda en el portafolio (sin imágenes)." },
      { id: 's14', k: 'concepte', t: "El cicle d'una IA|El ciclo de una IA", punts: ["Recollir i etiquetar.|Recoger y etiquetar.", "Separar, entrenar i provar.|Separar, entrenar y probar.", "Millorar les dades i tornar-hi.|Mejorar los datos y volver a empezar."], nota: "Que ho relacionin amb el que han fet.|Que lo relacionen con lo que han hecho." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ["Exemple = dada + etiqueta.|Ejemplo = dato + etiqueta.", "La IA compara números.|La IA compara números.", "Es prova amb exemples nous.|Se prueba con ejemplos nuevos."], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Què és una etiqueta?|¿Qué es una etiqueta?", "Per què es prova amb exemples nous?|¿Por qué se prueba con ejemplos nuevos?"], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'Fruita o verdura?|¿Fruta o verdura?', k: 'targetes',
        intro: "Un paquet per grup de quatre. Cada persona classifica les targetes en silenci; després compareu-ho.|Un paquete por grupo de cuatro. Cada persona clasifica las tarjetas en silencio; después comparadlo.",
        items: [{ t: 'Poma 🍎|Manzana 🍎' }, { t: 'Pastanaga 🥕|Zanahoria 🥕' }, { t: 'Tomàquet 🍅|Tomate 🍅' }, { t: 'Bitxo 🌶️|Guindilla 🌶️' }, { t: 'Carbassa 🎃|Calabaza 🎃' }, { t: 'Plàtan 🍌|Plátano 🍌' },
          { t: 'Cogombre 🥒|Pepino 🥒' }, { t: 'Alvocat 🥑|Aguacate 🥑' }, { t: 'Maduixa 🍓|Fresa 🍓' }, { t: 'Patata 🥔|Patata 🥔' }, { t: 'Blat de moro 🌽|Maíz 🌽' }, { t: 'Albergínia 🍆|Berenjena 🍆' }] },
      { id: 'p2', t: "Full de l'etiquetador|Hoja del etiquetador", k: 'fitxa',
        intro: "Un per grup. Apunteu els desacords i el criteri que acordeu.|Una por grupo. Apuntad los desacuerdos y el criterio que acordéis.",
        items: [
          { q: "En quines targetes no us heu posat d'acord?|¿En qué tarjetas no os habéis puesto de acuerdo?", sol: "Sovint: tomàquet, bitxo, carbassa, cogombre, alvocat, albergínia i blat de moro.|A menudo: tomate, guindilla, calabaza, pepino, aguacate, berenjena y maíz." },
          { q: 'El vostre criteri per als casos dubtosos:|Vuestro criterio para los casos dudosos:', big: true, sol: "Per exemple: «si té llavors a dins, és fruita» (criteri botànic) o «si es menja en amanides o guisats, és verdura» (criteri de cuina). Tots dos valen si s'apliquen sempre igual.|Por ejemplo: «si tiene semillas dentro, es fruta» (criterio botánico) o «si se come en ensaladas o guisos, es verdura» (criterio de cocina). Los dos valen si se aplican siempre igual." },
          { q: 'Amb el criteri, en quantes targetes coincidiu tots?|Con el criterio, ¿en cuántas tarjetas coincidís todos?', sol: "Haurien de ser totes o gairebé totes.|Deberían ser todas o casi todas." },
          { q: 'Què passaria amb una IA entrenada amb les vostres primeres etiquetes?|¿Qué pasaría con una IA entrenada con vuestras primeras etiquetas?', sol: "Aprendria etiquetes contradictòries i s'equivocaria més amb els casos dubtosos.|Aprendería etiquetas contradictorias y se equivocaría más con los casos dudosos." }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Encerts, errors i conseqüències ---------- */
  'i2-2': {
    intro: "L'alumnat aprèn a mesurar com s'equivoca una IA: l'encert, la matriu de confusió i els dos tipus d'error (fals positiu i fals negatiu). Ho relaciona amb situacions reals (desbloqueig facial, filtres d'spam, alarmes, proves mèdiques) i descobreix que no tots els errors fan el mateix mal i que l'encert pot enganyar quan una classe és rara. Fa de detector humà en una activitat desconnectada i llegeix la matriu dels seus classificadors.|El alumnado aprende a medir cómo se equivoca una IA: el acierto, la matriz de confusión y los dos tipos de error (falso positivo y falso negativo). Lo relaciona con situaciones reales (desbloqueo facial, filtros de spam, alarmas, pruebas médicas) y descubre que no todos los errores hacen el mismo daño y que el acierto puede engañar cuando una clase es rara. Hace de detector humano en una actividad desconectada y lee la matriz de sus clasificadores.",
    claus: [
      "Encert = proves bones ÷ total de proves.|Acierto = pruebas buenas ÷ total de pruebas.",
      "Matriu de confusió: files, el que era; columnes, el que diu la IA; la diagonal, els encerts.|Matriz de confusión: filas, lo que era; columnas, lo que dice la IA; la diagonal, los aciertos.",
      "Fals positiu: diu que sí i era que no. Fals negatiu: diu que no i era que sí.|Falso positivo: dice que sí y era que no. Falso negativo: dice que no y era que sí.",
      "Quin error és pitjor depèn del cas; amb classes rares, l'encert enganya.|Qué error es peor depende del caso; con clases raras, el acierto engaña."
    ],
    prev: ["Sessió i2-1: entrenament i prova separats.|Sesión i2-1: entrenamiento y prueba separados."],
    obj: [
      "L'alumne/a calcula l'encert d'una IA a partir dels resultats d'una prova.|El alumno/a calcula el acierto de una IA a partir de los resultados de una prueba.",
      "L'alumne/a llegeix una matriu de confusió i hi troba les confusions.|El alumno/a lee una matriz de confusión y encuentra en ella las confusiones.",
      "L'alumne/a distingeix falsos positius de falsos negatius en situacions reals.|El alumno/a distingue falsos positivos de falsos negativos en situaciones reales.",
      "L'alumne/a argumenta quin error és més greu en cada cas.|El alumno/a argumenta qué error es más grave en cada caso."
    ],
    comp: [
      "Competència matemàtica (STEM1): percentatges i taules de doble entrada|Competencia matemática (STEM1): porcentajes y tablas de doble entrada",
      "Competència digital (CD5): avaluar models d'IA|Competencia digital (CD5): evaluar modelos de IA",
      "Competència ciutadana (CC3): conseqüències dels errors de la tecnologia|Competencia ciudadana (CC3): consecuencias de los errores de la tecnología"
    ],
    vocab: [
      ["Encert (accuracy)|Acierto (accuracy)", "Percentatge de proves que la IA fa bé.|Porcentaje de pruebas que la IA hace bien."],
      ["Matriu de confusió|Matriz de confusión", "Taula que compara el que era cada exemple amb el que ha dit la IA.|Tabla que compara lo que era cada ejemplo con lo que ha dicho la IA."],
      ["Fals positiu|Falso positivo", "La IA diu que sí (alarma, spam, «ets tu») i era que no.|La IA dice que sí (alarma, spam, «eres tú») y era que no."],
      ["Fals negatiu|Falso negativo", "La IA diu que no i era que sí: no ho detecta.|La IA dice que no y era que sí: no lo detecta."],
      ["Precisió i sensibilitat (PRO)|Precisión y sensibilidad (PRO)", "De tots els «sí», quants ho són; de tots els casos reals, quants en troba.|De todos los «sí», cuántos lo son; de todos los casos reales, cuántos encuentra."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Encerts, errors i conseqüències»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Aciertos, errores y consecuencias»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Llapis i el full «La meva matriu»|Lápices y la hoja «Mi matriz»"],
      imprimir: ["La meva matriu (imprimible 1): un per alumne/a|Mi matriz (imprimible 1): uno por alumno/a"],
      prep: ["Imprimir el full «La meva matriu».|Imprimir la hoja «Mi matriz».", "Tenir a mà la llista de 20 paraules del bloc desconnectat.|Tener a mano la lista de 20 palabras del bloque desconectado.", "Decidir si el grup fa el nivell PRO (precisió i sensibilitat).|Decidir si el grupo hace el nivel PRO (precisión y sensibilidad)."]
    },
    plan: [
      { min: 5, t: 'Quin error és pitjor?|¿Qué error es peor?', fase: 'inici',
        fa: "Planteja dos errors: el mòbil que es desbloqueja amb la cara d'un altre i el que no et reconeix a tu. Quin és pitjor? Fes votar i demana arguments.|Plantea dos errores: el móvil que se desbloquea con la cara de otro y el que no te reconoce a ti. ¿Cuál es peor? Haz votar y pide argumentos.",
        diu: ["Quin us faria més por? I quin us molestaria més?|¿Cuál os daría más miedo? ¿Y cuál os molestaría más?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: 'Encert, matriu i dos tipus d\'error|Acierto, matriz y dos tipos de error', fase: 'teoria',
        fa: "Amb les animacions: l'encert (8 de 10), la matriu de confusió casella a casella, l'alarma i la torrada, quin error és pitjor en tres casos i la IA mandrosa del 95 %.|Con las animaciones: el acierto (8 de 10), la matriz de confusión casilla a casilla, la alarma y la tostada, qué error es peor en tres casos y la IA perezosa del 95 %.",
        diu: ["On són els encerts a la matriu?|¿Dónde están los aciertos en la matriz?", "Una IA que encerta el 95 % pot ser inútil?|¿Una IA que acierta el 95 % puede ser inútil?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'Detectors humans|Detectores humanos', fase: 'desconnectat',
        fa: "Llegeix les 20 paraules ràpid (una per segon). L'alumnat marca les que creu que són animals. Després llegeix la solució i omplen la matriu i l'encert. Llista: gat, taula, llop, gatell, cavall, núvol, dofí, cadira, abella, llapis, pop, tren, àguila, sabata, cargol, pinya, ós, pilota, guineu, rellotge (10 animals).|Lee las 20 palabras rápido (una por segundo). El alumnado marca las que cree que son animales. Después lee la solución y rellenan la matriz y el acierto. Lista: gato, mesa, lobo, gatillo, caballo, nube, delfín, silla, abeja, lápiz, pulpo, tren, águila, zapato, caracol, piña, oso, pelota, zorro, reloj (10 animales).",
        diu: ["Qui ha marcat «gatell»? Quin error és?|¿Quién ha marcado «gatillo»? ¿Qué error es?", "Amb més temps, faríeu menys errors?|Con más tiempo, ¿haríais menos errores?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i tot el grup|Individual y todo el grupo" },
      { min: 25, t: "A l'ordinador: la matriu de la teva IA|En el ordenador: la matriz de tu IA", fase: 'ordinador',
        fa: "Fan la sessió de l'app des de «Recorda» fins al pas «Crea»: calcular l'encert, classificar falsos positius i negatius, la matriu dels objectes, la matriu de l'spam, la IA del terratrèmol, la piga i el repte final de tres classes.|Hacen la sesión de la app desde «Recuerda» hasta el paso «Crea»: calcular el acierto, clasificar falsos positivos y negativos, la matriz de los objetos, la matriz del spam, la IA del terremoto, el lunar y el reto final de tres clases.",
        diu: ["Quina casella fora de la diagonal té més errors? Per què?|¿Qué casilla fuera de la diagonal tiene más errores? ¿Por qué?", "En aquest cas, quin error és pitjor?|En este caso, ¿qué error es peor?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (la meva IA amb matriu).|De «Recuerda» hasta el paso «Crea» (mi IA con matriz).", org: "Individual|Individual" },
      { min: 8, t: "Tancament: tria quin error vols evitar|Cierre: elige qué error quieres evitar", fase: 'tancament',
        fa: "Torna a la votació de l'inici amb el vocabulari nou. Remarca que qui dissenya una IA decideix quin error vol evitar més. Tiquet de sortida i com s'han sentit.|Vuelve a la votación del inicio con el vocabulario nuevo. Remarca que quien diseña una IA decide qué error quiere evitar más. Tique de salida y cómo se han sentido.",
        diu: ["El mòbil que s'obre amb una altra cara: fals positiu o negatiu?|El móvil que se abre con otra cara: ¿falso positivo o negativo?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Confon fals positiu i fals negatiu.|Confunde falso positivo y falso negativo.", "Primer, quina cosa buscava el detector? Després: ha dit que sí o que no? «Positiu» és el que diu la IA.|Primero, ¿qué buscaba el detector? Después: ¿ha dicho que sí o que no? «Positivo» es lo que dice la IA."],
      ["Llegeix la matriu al revés (files i columnes).|Lee la matriz al revés (filas y columnas).", "Les files són la veritat; les columnes, el que diu la IA. Ho posa a la mateixa taula de l'app.|Las filas son la verdad; las columnas, lo que dice la IA. Lo pone en la misma tabla de la app."],
      ["Calcula l'encert dividint per una sola classe.|Calcula el acierto dividiendo por una sola clase.", "Encerts de totes les classes ÷ total de proves.|Aciertos de todas las clases ÷ total de pruebas."],
      ["Pensa que un encert alt sempre vol dir que la IA és bona.|Piensa que un acierto alto siempre quiere decir que la IA es buena.", "Recorda la IA mandrosa: el 95 % sense detectar cap frau.|Recuerda la IA perezosa: el 95 % sin detectar ningún fraude."]
    ],
    diff: {
      mes: "Nivell PRO: precisió i sensibilitat a la matriu de l'spam, quatre objectes al 90 % i un repte final del 85 %. Repte extra de l'alarma de quatre sons. Debat: a una IA de detecció mèdica, quina sensibilitat demanaríeu?|Nivel PRO: precisión y sensibilidad en la matriz del spam, cuatro objetos al 90 % y un reto final del 85 %. Reto extra de la alarma de cuatro sonidos. Debate: a una IA de detección médica, ¿qué sensibilidad pediríais?",
      menys: "Fer l'activitat desconnectada amb 10 paraules. A l'app, fer els reptes amb «Exemples» i en parella. Pista per a la matriu: «busca la casella fila Normal, columna Spam».|Hacer la actividad desconectada con 10 palabras. En la app, hacer los retos con «Ejemplos» y en pareja. Pista para la matriz: «busca la casilla fila Normal, columna Spam»."
    },
    aval: {
      ticket: ["Què és un fals negatiu? Posa'n un exemple.|¿Qué es un falso negativo? Pon un ejemplo.", "Per què no n'hi ha prou amb l'encert?|¿Por qué no basta con el acierto?"],
      rubric: [
        ["Encert|Acierto", "Calcula l'encert correctament.|Calcula el acierto correctamente.", "S'equivoca en el total o en els encerts.|Se equivoca en el total o en los aciertos."],
        ["Matriu|Matriz", "Llegeix files i columnes i troba les confusions.|Lee filas y columnas y encuentra las confusiones.", "Llegeix la taula al revés.|Lee la tabla al revés."],
        ["Tipus d'error|Tipos de error", "Distingeix falsos positius i negatius en casos reals.|Distingue falsos positivos y negativos en casos reales.", "Els confon.|Los confunde."],
        ["Conseqüències|Consecuencias", "Argumenta quin error és pitjor en cada cas.|Argumenta qué error es peor en cada caso.", "No relaciona l'error amb les conseqüències.|No relaciona el error con las consecuencias."]
      ]
    },
    casa: "A casa, busqueu un aparell que avisi d'alguna cosa (alarma, detector, app del temps…). Quins falsos positius i falsos negatius pot tenir? Quin us preocupa més?|En casa, buscad un aparato que avise de algo (alarma, detector, app del tiempo…). ¿Qué falsos positivos y falsos negativos puede tener? ¿Cuál os preocupa más?",
    faq: [
      ["Per què es diu «positiu» si és una cosa dolenta (spam, foc)?|¿Por qué se dice «positivo» si es algo malo (spam, fuego)?", "«Positiu» vol dir que el detector diu «sí, ho he trobat», no que sigui bo. Com una prova mèdica «positiva».|«Positivo» quiere decir que el detector dice «sí, lo he encontrado», no que sea bueno. Como una prueba médica «positiva»."],
      ["Es pot tenir zero falsos positius i zero falsos negatius?|¿Se puede tener cero falsos positivos y cero falsos negativos?", "Gairebé mai. Normalment, si fas el detector més prudent, tens menys falsos negatius però més falses alarmes, i al revés.|Casi nunca. Normalmente, si haces el detector más prudente, tienes menos falsos negativos pero más falsas alarmas, y al revés."],
      ["Les IA mèdiques decideixen soles?|¿Las IA médicas deciden solas?", "No haurien de fer-ho: ajuden a detectar, però decideix una persona experta. A Europa, la llei d'IA en demana supervisió humana.|No deberían: ayudan a detectar, pero decide una persona experta. En Europa, la ley de IA pide supervisión humana."]
    ],
    tec: [
      ["No es veu la matriu de confusió.|No se ve la matriz de confusión.", "Surt després de tocar «Fes la prova», a la pestanya «Prova» (al mòbil).|Sale después de tocar «Haz la prueba», en la pestaña «Prueba» (en el móvil)."],
      ["Al repte final, la prova demana dibuixar o fer la foto de cada classe.|En el reto final, la prueba pide dibujar o hacer la foto de cada clase.", "És la prova amb exemples nous: segueix el que diu a dalt («Prova 3/12: dibuixa…»).|Es la prueba con ejemplos nuevos: sigue lo que dice arriba («Prueba 3/12: dibuja…»)."]
    ],
    seg: ["Els exemples de càmera i so no es desen. Al portafoli només hi va el nom de les classes, el nombre d'exemples i l'encert.|Los ejemplos de cámara y sonido no se guardan. En el portafolio solo va el nombre de las clases, el número de ejemplos y el acierto."],
    extra: [
      "Matemàtiques: taules de doble entrada i percentatges; calcular precisió i sensibilitat.|Matemáticas: tablas de doble entrada y porcentajes; calcular precisión y sensibilidad.",
      "Ciències: proves de detecció en medicina i per què es confirmen amb una segona prova.|Ciencias: pruebas de detección en medicina y por qué se confirman con una segunda prueba."
    ],
    trans: ["Sessió i2-3: errors que es repeteixen amb un grup (el biaix). Sessió i2-4: el projecte i la seva fitxa.|Sesión i2-3: errores que se repiten con un grupo (el sesgo). Sesión i2-4: el proyecto y su ficha."],
    slides: [
      { id: 's1', k: 'portada', t: 'Encerts, errors i conseqüències|Aciertos, errores y consecuencias', x: 'Entrena la teva IA|Entrena tu IA', nota: "Segona sessió de la unitat 2.|Segunda sesión de la unidad 2." },
      { id: 's2', k: 'pregunta', t: 'Quin error és pitjor?|¿Qué error es peor?', x: "El mòbil s'obre amb una altra cara, o no et reconeix a tu?|¿El móvil se abre con otra cara, o no te reconoce a ti?", nota: "Feu votar i apunteu els arguments.|Haced votar y apuntad los argumentos." },
      { id: 's3', k: 'anim', t: "L'encert|El acierto", anim: 'i22acc', x: "Proves bones ÷ total.|Pruebas buenas ÷ total.", nota: "Que el calculin abans d'ensenyar-lo.|Que lo calculen antes de enseñarlo." },
      { id: 's4', k: 'anim', t: 'La matriu de confusió|La matriz de confusión', anim: 'i22cm', x: "Files: el que era. Columnes: el que diu la IA.|Filas: lo que era. Columnas: lo que dice la IA.", nota: "Assenyala la diagonal.|Señala la diagonal." },
      { id: 's5', k: 'anim', t: 'Fals positiu i fals negatiu|Falso positivo y falso negativo', anim: 'i22fpfn', x: "Sona sense foc · hi ha foc i no sona.|Suena sin fuego · hay fuego y no suena.", nota: "«Positiu» és el que diu el detector.|«Positivo» es lo que dice el detector." },
      { id: 's6', k: 'anim', t: 'Quin error fa més mal?|¿Qué error hace más daño?', anim: 'i22cost', x: "Depèn de cada cas.|Depende de cada caso.", nota: "Demana un quart exemple a la classe.|Pide un cuarto ejemplo a la clase." },
      { id: 's7', k: 'anim', t: "Quan l'encert enganya|Cuando el acierto engaña", anim: 'i22trap', x: "95 % d'encert i cap frau detectat.|95 % de acierto y ningún fraude detectado.", nota: "Introdueix la sensibilitat (PRO).|Introduce la sensibilidad (PRO)." },
      { id: 's8', k: 'activitat', t: 'Detectors humans|Detectores humanos', timer: 10, punts: ["Escolta 20 paraules molt ràpid.|Escucha 20 palabras muy rápido.", "Marca les que són animals.|Marca las que son animales.", "Omple la teva matriu.|Rellena tu matriz."], nota: "Llista a la guia (bloc desconnectat).|Lista en la guía (bloque desconectado)." },
      { id: 's9', k: 'pregunta', t: 'Quin error heu fet més?|¿Qué error habéis hecho más?', x: "Falses alarmes o animals no detectats?|¿Falsas alarmas o animales no detectados?", nota: "Amb pressa, solen sortir més falses alarmes.|Con prisa, suelen salir más falsas alarmas." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 25, punts: ["Fals positiu o negatiu?|¿Falso positivo o negativo?", "La matriu dels objectes.|La matriz de los objetos.", "El repte final de tres classes.|El reto final de tres clases."], nota: "Fes la pausa activa a la meitat.|Haz la pausa activa a la mitad." },
      { id: 's11', k: 'anim', t: "La matriu de l'spam|La matriz del spam", anim: 'i22spam', x: "Quants falsos positius hi ha?|¿Cuántos falsos positivos hay?", nota: "Resposta: 5 (fila Normal, columna Spam). PRO: precisió 18 ÷ 23 ≈ 78 %.|Respuesta: 5 (fila Normal, columna Spam). PRO: precisión 18 ÷ 23 ≈ 78 %." },
      { id: 's12', k: 'repte', t: 'La matriu dels objectes|La matriz de los objetos', punts: ["Poma, tassa i pilota.|Manzana, taza y pelota.", "Quins confon? Per què?|¿Cuáles confunde? ¿Por qué?"], nota: "Colors semblants, més confusions.|Colores parecidos, más confusiones." },
      { id: 's13', k: 'repte', t: 'Repte final|Reto final', punts: ["3 classes, 8 exemples de cada.|3 clases, 8 ejemplos de cada.", "Prova amb 4 exemples nous de cada.|Prueba con 4 ejemplos nuevos de cada.", "Almenys un 75 %.|Al menos un 75 %."], nota: "Es desa al portafoli amb l'encert.|Se guarda en el portafolio con el acierto." },
      { id: 's14', k: 'concepte', t: 'Tria quin error vols evitar|Elige qué error quieres evitar', punts: ["Desbloqueig facial: evitar falsos positius.|Desbloqueo facial: evitar falsos positivos.", "Detecció mèdica: evitar falsos negatius.|Detección médica: evitar falsos negativos.", "I sempre, una persona que revisa.|Y siempre, una persona que revisa."], nota: "Torna a la votació de l'inici.|Vuelve a la votación del inicio." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ["L'encert no ho diu tot.|El acierto no lo dice todo.", "La matriu mostra les confusions.|La matriz muestra las confusiones.", "Fals positiu i fals negatiu.|Falso positivo y falso negativo."], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Un exemple de fals negatiu.|Un ejemplo de falso negativo.", "Per què no n'hi ha prou amb l'encert?|¿Por qué no basta con el acierto?"], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'La meva matriu|Mi matriz', k: 'fitxa',
        intro: "Un per alumne/a. Sou detectors d'animals: el docent dirà 20 paraules ràpid. Marqueu amb una creu els números de les paraules que creieu que són animals. Després ompliu la matriu.|Uno por alumno/a. Sois detectores de animales: el docente dirá 20 palabras rápido. Marcad con una cruz los números de las palabras que creáis que son animales. Después rellenad la matriz.",
        items: [
          { q: 'Paraules 1-20 (marca amb una creu les que són animals): 1 · 2 · 3 · 4 · 5 · 6 · 7 · 8 · 9 · 10 · 11 · 12 · 13 · 14 · 15 · 16 · 17 · 18 · 19 · 20|Palabras 1-20 (marca con una cruz las que son animales): 1 · 2 · 3 · 4 · 5 · 6 · 7 · 8 · 9 · 10 · 11 · 12 · 13 · 14 · 15 · 16 · 17 · 18 · 19 · 20', sol: "Animals: 1, 3, 5, 7, 9, 11, 13, 15, 17 i 19.|Animales: 1, 3, 5, 7, 9, 11, 13, 15, 17 y 19." },
          { q: 'Animals que has detectat (encerts):|Animales que has detectado (aciertos):', sol: "Els números senars que has marcat.|Los números impares que has marcado." },
          { q: 'Animals que no has detectat (falsos negatius):|Animales que no has detectado (falsos negativos):', sol: "Els números senars que no has marcat.|Los números impares que no has marcado." },
          { q: 'Falses alarmes (falsos positius):|Falsas alarmas (falsos positivos):', sol: "Els números parells que has marcat (per exemple, el 4, «gatell»).|Los números pares que has marcado (por ejemplo, el 4, «gatillo»)." },
          { q: 'El teu encert = (animals detectats + no animals bé ignorats) ÷ 20 =|Tu acierto = (animales detectados + no animales bien ignorados) ÷ 20 =', big: true, sol: "Per exemple: (9 + 8) ÷ 20 = 0,85, és a dir, un 85 %.|Por ejemplo: (9 + 8) ÷ 20 = 0,85, es decir, un 85 %." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · El biaix: qui queda fora? ---------- */
  'i2-3': {
    intro: "L'alumnat descobreix el biaix: errors que es repeteixen amb un grup o una situació perquè les dades no els representen bé. Entrena una IA que aprèn una drecera (el fons de la foto) i l'arregla amb exemples variats, coneix un estudi real sobre sistemes de cares (Gender Shades, 2018), veu com un model de llenguatge repeteix estereotips del text i els equilibra, i aprèn com es mesura i es redueix el biaix.|El alumnado descubre el sesgo: errores que se repiten con un grupo o una situación porque los datos no los representan bien. Entrena una IA que aprende un atajo (el fondo de la foto) y la arregla con ejemplos variados, conoce un estudio real sobre sistemas de caras (Gender Shades, 2018), ve cómo un modelo de lenguaje repite estereotipos del texto y los equilibra, y aprende cómo se mide y se reduce el sesgo.",
    claus: [
      "Una IA aprèn la pista més fàcil, encara que sigui falsa (drecera).|Una IA aprende la pista más fácil, aunque sea falsa (atajo).",
      "Qui surt poc a les dades, pateix més errors.|Quien sale poco en los datos, sufre más errores.",
      "Els models de llenguatge aprenen els estereotips dels textos.|Los modelos de lenguaje aprenden los estereotipos de los textos.",
      "Es redueix amb dades variades i equilibrades, encert per grups, equips diversos i fitxes amb els límits.|Se reduce con datos variados y equilibrados, acierto por grupos, equipos diversos y fichas con los límites."
    ],
    prev: ["Sessió i2-2: encert, matriu de confusió i tipus d'error.|Sesión i2-2: acierto, matriz de confusión y tipos de error."],
    obj: [
      "L'alumne/a explica què és un biaix i d'on prové.|El alumno/a explica qué es un sesgo y de dónde proviene.",
      "L'alumne/a detecta una drecera en un classificador i la corregeix amb dades variades.|El alumno/a detecta un atajo en un clasificador y lo corrige con datos variados.",
      "L'alumne/a reconeix estereotips en les dades d'un model de llenguatge i els equilibra.|El alumno/a reconoce estereotipos en los datos de un modelo de lenguaje y los equilibra.",
      "L'alumne/a proposa mesures per reduir el biaix d'una IA.|El alumno/a propone medidas para reducir el sesgo de una IA."
    ],
    comp: [
      "Competència ciutadana (CC2 i CC3): igualtat, diversitat i ètica de la tecnologia|Competencia ciudadana (CC2 y CC3): igualdad, diversidad y ética de la tecnología",
      "Competència digital (CD4 i CD5): ús responsable i funcionament de la IA|Competencia digital (CD4 y CD5): uso responsable y funcionamiento de la IA",
      "Competència personal, social i d'aprendre a aprendre (CPSAA): reconèixer els propis biaixos|Competencia personal, social y de aprender a aprender (CPSAA): reconocer los propios sesgos"
    ],
    vocab: [
      ["Biaix|Sesgo", "Error sistemàtic d'una IA amb un grup o una situació, normalment per culpa de les dades.|Error sistemático de una IA con un grupo o una situación, normalmente por culpa de los datos."],
      ["Drecera|Atajo", "Pista falsa i fàcil que la IA aprèn en lloc de la important (el fons en lloc de l'objecte).|Pista falsa y fácil que la IA aprende en lugar de la importante (el fondo en lugar del objeto)."],
      ["Dades equilibrades|Datos equilibrados", "Dades amb una quantitat semblant d'exemples de cada classe i grup.|Datos con una cantidad parecida de ejemplos de cada clase y grupo."],
      ["Estereotip|Estereotipo", "Idea simplificada i repetida sobre un grup de persones.|Idea simplificada y repetida sobre un grupo de personas."],
      ["Encert per grups|Acierto por grupos", "Mesurar l'encert per separat amb cada grup per descobrir diferències.|Medir el acierto por separado con cada grupo para descubrir diferencias."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «El biaix: qui queda fora?»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «El sesgo: ¿quién se queda fuera?»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Fulls petits i retoladors per dibuixar; cinta per penjar-los|Hojas pequeñas y rotuladores para dibujar; cinta para colgarlas"],
      imprimir: ["Auditoria de dades (imprimible 1): un per grup|Auditoría de datos (imprimible 1): una por grupo"],
      prep: ["Imprimir el full d'auditoria i preparar fulls per dibuixar.|Imprimir la hoja de auditoría y preparar hojas para dibujar.", "Llegir la diapositiva de Gender Shades i preparar-ne la conversa amb respecte i sense fer-la personal.|Leer la diapositiva de Gender Shades y preparar la conversación con respeto y sin hacerla personal.", "Decidir si el grup fa el nivell PRO.|Decidir si el grupo hace el nivel PRO."]
    },
    plan: [
      { min: 5, t: 'Una app que no et veu|Una app que no te ve', fase: 'inici',
        fa: "Explica el cas inventat de l'app de filtres que no troba algunes cares. Pregunta de qui és la culpa si ningú ho ha programat a propòsit.|Explica el caso inventado de la app de filtros que no encuentra algunas caras. Pregunta de quién es la culpa si nadie lo ha programado a propósito.",
        diu: ["Pot ser injusta una màquina que no té intencions?|¿Puede ser injusta una máquina que no tiene intenciones?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: 'Dreceres, qui falta i estereotips|Atajos, quién falta y estereotipos', fase: 'teoria',
        fa: "Amb les animacions: la drecera del fons, els grups que surten poc a les dades, l'estudi Gender Shades (dades reals, verificades), els estereotips als textos i com es redueix el biaix.|Con las animaciones: el atajo del fondo, los grupos que salen poco en los datos, el estudio Gender Shades (datos reales, verificados), los estereotipos en los textos y cómo se reduce el sesgo.",
        diu: ["Per què la IA aprèn el fons i no la pilota?|¿Por qué la IA aprende el fondo y no la pelota?", "Què van fer les investigadores per demostrar el problema?|¿Qué hicieron las investigadoras para demostrar el problema?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'Dibuixa en 20 segons i auditoria|Dibuja en 20 segundos y auditoría', fase: 'desconnectat',
        fa: "Tothom dibuixa en 20 segons «una persona que programa robots». Pengeu-los i compteu trets (gènere, edat, ulleres). Després, en grups, fan l'auditoria de l'app inventada GestosYa.|Todo el mundo dibuja en 20 segundos «una persona que programa robots». Colgadlos y contad rasgos (género, edad, gafas). Después, en grupos, hacen la auditoría de la app inventada GestosYa.",
        diu: ["Si una IA aprengués dels nostres dibuixos, què pensaria?|Si una IA aprendiera de nuestros dibujos, ¿qué pensaría?", "A GestosYa, qui hi falta?|En GestosYa, ¿quién falta?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i grups de 3|Individual y grupos de 3" },
      { min: 25, t: "A l'ordinador: detectiu del biaix|En el ordenador: detective del sesgo", fase: 'ordinador',
        fa: "Fan la sessió de l'app des de «Recorda» fins al pas «Crea»: la drecera de les pilotes i les tasses (i l'arreglen), Gender Shades, els estereotips del model de llenguatge, decisions que augmenten o redueixen el biaix i la seva IA sense dreceres.|Hacen la sesión de la app desde «Recuerda» hasta el paso «Crea»: el atajo de las pelotas y las tazas (y lo arreglan), Gender Shades, los estereotipos del modelo de lenguaje, decisiones que aumentan o reducen el sesgo y su IA sin atajos.",
        diu: ["Què ha canviat a la prova després d'afegir exemples variats?|¿Qué ha cambiado en la prueba después de añadir ejemplos variados?", "Quines frases heu afegit al model de llenguatge?|¿Qué frases habéis añadido al modelo de lenguaje?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (la meva IA sense dreceres).|De «Recuerda» hasta el paso «Crea» (mi IA sin atajos).", org: "Individual|Individual" },
      { min: 8, t: 'Tancament: abans de publicar una IA|Cierre: antes de publicar una IA', fase: 'tancament',
        fa: "Fes una llista de preguntes que hauria de fer-se un equip abans de publicar una IA (qui hi falta, com ho hem provat, amb quins grups). Tiquet de sortida i com s'han sentit.|Haz una lista de preguntas que debería hacerse un equipo antes de publicar una IA (quién falta, cómo lo hemos probado, con qué grupos). Tique de salida y cómo se han sentido.",
        diu: ["Quina pregunta afegiríeu a la llista?|¿Qué pregunta añadiríais a la lista?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Creu que la IA és «racista» o «masclista» com una persona.|Cree que la IA es «racista» o «machista» como una persona.", "La IA no té opinions: repeteix els patrons de les dades. Però l'efecte és injust igual, i és responsabilitat de qui la fa.|La IA no tiene opiniones: repite los patrones de los datos. Pero el efecto es injusto igual, y es responsabilidad de quien la hace."],
      ["Per arreglar la drecera, afegeix més exemples al mateix fons.|Para arreglar el atajo, añade más ejemplos en el mismo fondo.", "Mira els errors: tots tenen el mateix fons? Calen exemples de cada objecte a tots els fons.|Mira los errores: ¿todos tienen el mismo fondo? Hacen falta ejemplos de cada objeto en todos los fondos."],
      ["Al model de llenguatge, esborra les frases en lloc d'afegir-ne de variades.|En el modelo de lenguaje, borra las frases en lugar de añadir otras variadas.", "Al repte només es poden afegir dades: com al món real, el que funciona és ampliar i equilibrar.|En el reto solo se pueden añadir datos: como en el mundo real, lo que funciona es ampliar y equilibrar."],
      ["Fa comentaris personals sobre companys durant l'activitat del dibuix.|Hace comentarios personales sobre compañeros durante la actividad del dibujo.", "Recorda que analitzem dibuixos i dades, no persones. Ningú no ha de parlar del cos dels altres.|Recuerda que analizamos dibujos y datos, no personas. Nadie debe hablar del cuerpo de los demás."]
    ],
    diff: {
      mes: "Nivell PRO: el biaix de tres fruites amb tres fons, equilibrar les dues frases del model de llenguatge i calcular l'encert total amb grups de mides diferents. Investigació: buscar notícies sobre biaix en IA i explicar-les amb el vocabulari de la sessió.|Nivel PRO: el sesgo de tres frutas con tres fondos, equilibrar las dos frases del modelo de lenguaje y calcular el acierto total con grupos de tamaños distintos. Investigación: buscar noticias sobre sesgo en IA y explicarlas con el vocabulario de la sesión.",
      menys: "Fer la drecera de les pilotes en parella i donar la pista: «mira el fons de les fotos que falla». Al model de llenguatge, afegir les frases una a una mirant com baixa la barra.|Hacer el atajo de las pelotas en pareja y dar la pista: «mira el fondo de las fotos que falla». En el modelo de lenguaje, añadir las frases una a una mirando cómo baja la barra."
    },
    aval: {
      ticket: ["Explica amb un exemple què és un biaix.|Explica con un ejemplo qué es un sesgo.", "Digues una manera de reduir-lo.|Di una manera de reducirlo."],
      rubric: [
        ["Què és el biaix|Qué es el sesgo", "Explica que ve de les dades i afecta més un grup.|Explica que viene de los datos y afecta más a un grupo.", "Ho atribueix a la mala intenció de la màquina.|Lo atribuye a la mala intención de la máquina."],
        ["Detectar|Detectar", "Troba la drecera i explica què ha après la IA.|Encuentra el atajo y explica qué ha aprendido la IA.", "No relaciona els errors amb el fons.|No relaciona los errores con el fondo."],
        ["Corregir|Corregir", "Afegeix dades variades i comprova la millora.|Añade datos variados y comprueba la mejora.", "Afegeix més dades iguals.|Añade más datos iguales."],
        ["Actitud crítica|Actitud crítica", "Proposa mesures concretes (encert per grups, dades diverses).|Propone medidas concretas (acierto por grupos, datos diversos).", "No proposa cap mesura.|No propone ninguna medida."]
      ]
    },
    casa: "A casa, escriviu al cercador d'imatges «una persona que programa» o «una persona que cuida infants». Quines imatges surten més? Les dades d'una IA s'assemblarien a això?|En casa, escribid en el buscador de imágenes «una persona que programa» o «una persona que cuida niños». ¿Qué imágenes salen más? ¿Los datos de una IA se parecerían a eso?",
    faq: [
      ["L'estudi Gender Shades és real?|¿El estudio Gender Shades es real?", "Sí: el van publicar Joy Buolamwini i Timnit Gebru el 2018. Van provar tres sistemes comercials i van crear un conjunt de cares equilibrat per gènere i to de pell. Les xifres de l'app (0,8 % i 34,7 %) són les de l'estudi.|Sí: lo publicaron Joy Buolamwini y Timnit Gebru en 2018. Probaron tres sistemas comerciales y crearon un conjunto de caras equilibrado por género y tono de piel. Las cifras de la app (0,8 % y 34,7 %) son las del estudio."],
      ["L'experiment dels llops i la neu va passar de veritat?|¿El experimento de los lobos y la nieve pasó de verdad?", "Sí, en un article de 2016 sobre com explicar les decisions d'una IA. Els investigadors van entrenar el classificador amb dades esbiaixades a propòsit per veure si les explicacions ho detectaven.|Sí, en un artículo de 2016 sobre cómo explicar las decisiones de una IA. Los investigadores entrenaron el clasificador con datos sesgados a propósito para ver si las explicaciones lo detectaban."],
      ["Es pot fer una IA sense cap biaix?|¿Se puede hacer una IA sin ningún sesgo?", "No del tot, perquè les dades sempre són una part del món. Però es pot mesurar, reduir i explicar a la fitxa del model.|No del todo, porque los datos siempre son una parte del mundo. Pero se puede medir, reducir y explicar en la ficha del modelo."]
    ],
    tec: [
      ["No surt el botó «Afegeix exemples variats».|No sale el botón «Añade ejemplos variados».", "Primer cal fer la prova i respondre bé la pregunta de per què falla.|Primero hay que hacer la prueba y responder bien la pregunta de por qué falla."],
      ["Després d'arreglar-ho, «Continua» no s'activa.|Después de arreglarlo, «Continúa» no se activa.", "Cal tornar a fer la prova: el resultat anterior era amb les dades velles.|Hay que volver a hacer la prueba: el resultado anterior era con los datos viejos."]
    ],
    seg: ["Tema sensible: parleu de dades i sistemes, no de persones concretes de la classe. Cap comentari sobre el físic de ningú.|Tema sensible: hablad de datos y sistemas, no de personas concretas de la clase. Ningún comentario sobre el físico de nadie.", "Al pas «Crea», la càmera enfoca objectes, no cares.|En el paso «Crea», la cámara enfoca objetos, no caras."],
    extra: [
      "Ciutadania: drets d'igualtat i no discriminació aplicats a la tecnologia.|Ciudadanía: derechos de igualdad y no discriminación aplicados a la tecnología.",
      "Llengua: analitzar estereotips en anuncis o titulars i reescriure'ls.|Lengua: analizar estereotipos en anuncios o titulares y reescribirlos."
    ],
    trans: ["Sessió i2-4: el projecte, amb una prova honesta i una fitxa que en digui els límits. Unitat 7: IA i societat.|Sesión i2-4: el proyecto, con una prueba honesta y una ficha que diga sus límites. Unidad 7: IA y sociedad."],
    slides: [
      { id: 's1', k: 'portada', t: 'El biaix: qui queda fora?|El sesgo: ¿quién se queda fuera?', x: 'Entrena la teva IA|Entrena tu IA', nota: "Tercera sessió de la unitat 2.|Tercera sesión de la unidad 2." },
      { id: 's2', k: 'pregunta', t: "Una app que no et veu: de qui és la culpa?|Una app que no te ve: ¿de quién es la culpa?", x: "Ningú no l'ha programada per ser injusta.|Nadie la ha programado para ser injusta.", nota: "Recull opinions sense jutjar-les.|Recoge opiniones sin juzgarlas." },
      { id: 's3', k: 'anim', t: 'La drecera del fons|El atajo del fondo', anim: 'i23short', x: "La IA aprèn la pista més fàcil.|La IA aprende la pista más fácil.", nota: "Explica l'experiment dels llops a la neu (2016).|Explica el experimento de los lobos en la nieve (2016)." },
      { id: 's4', k: 'anim', t: 'Qui surt poc, més errors|Quien sale poco, más errores', anim: 'i23miss', x: "Exemple inventat: la idea, no les xifres.|Ejemplo inventado: la idea, no las cifras.", nota: "Pregunta quins grups podrien sortir poc.|Pregunta qué grupos podrían salir poco." },
      { id: 's5', k: 'concepte', t: 'Un cas real: Gender Shades (2018)|Un caso real: Gender Shades (2018)', punts: ["Tres sistemes comercials que endevinaven el gènere per la cara.|Tres sistemas comerciales que adivinaban el género por la cara.", "Homes de pell clara: com a molt un 0,8 % d'errors.|Hombres de piel clara: como mucho un 0,8 % de errores.", "Dones de pell fosca: fins a un 34,7 % d'errors.|Mujeres de piel oscura: hasta un 34,7 % de errores."], nota: "Font: Buolamwini i Gebru (2018). Els conjunts d'avaluació tenien sobretot pell clara.|Fuente: Buolamwini y Gebru (2018). Los conjuntos de evaluación tenían sobre todo piel clara." },
      { id: 's6', k: 'anim', t: 'Estereotips al text|Estereotipos en el texto', anim: 'i23text', x: "El model repeteix el que diuen les dades.|El modelo repite lo que dicen los datos.", nota: "Connecta-ho amb el repte del model de llenguatge.|Conéctalo con el reto del modelo de lenguaje." },
      { id: 's7', k: 'anim', t: 'Com es redueix|Cómo se reduce', anim: 'i23fix', x: "Variades, equilibrades, per grups, equip divers.|Variados, equilibrados, por grupos, equipo diverso.", nota: "Que en proposin una més.|Que propongan una más." },
      { id: 's8', k: 'activitat', t: 'Dibuixa en 20 segons|Dibuja en 20 segundos', timer: 10, punts: ["«Una persona que programa robots».|«Una persona que programa robots».", "Pengeu-los i compteu.|Colgadlos y contad.", "Auditoria de GestosYa.|Auditoría de GestosYa."], nota: "Parlem dels dibuixos, no de les persones.|Hablamos de los dibujos, no de las personas." },
      { id: 's9', k: 'pregunta', t: 'Què diuen els nostres dibuixos?|¿Qué dicen nuestros dibujos?', x: "Si fossin dades, quin biaix tindrien?|Si fueran datos, ¿qué sesgo tendrían?", nota: "Tots tenim biaixos: la clau és detectar-los.|Todos tenemos sesgos: la clave es detectarlos." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 25, punts: ["Pilotes i tasses: troba la drecera.|Pelotas y tazas: encuentra el atajo.", "Equilibra el model de llenguatge.|Equilibra el modelo de lenguaje.", "La teva IA sense dreceres.|Tu IA sin atajos."], nota: "Fes la pausa activa a la meitat.|Haz la pausa activa a la mitad." },
      { id: 's11', k: 'repte', t: 'Pilotes i tasses|Pelotas y tazas', punts: ["Entrena i fes la prova.|Entrena y haz la prueba.", "Què ha après de veritat?|¿Qué ha aprendido de verdad?", "Arregla-ho i torna a provar.|Arréglalo y vuelve a probar."], nota: "Del 50 % a més del 80 %.|Del 50 % a más del 80 %." },
      { id: 's12', k: 'repte', t: 'Estereotips al model|Estereotipos en el modelo', punts: ["Després de «les noies són», «maques» 67 %.|Después de «las chicas son», «guapas» 67 %.", "Afegeix frases variades fins al 30 %.|Añade frases variadas hasta el 30 %."], nota: "PRO: equilibra també «els nois són».|PRO: equilibra también «los chicos son»." },
      { id: 's13', k: 'repte', t: 'La teva IA sense dreceres|Tu IA sin atajos', punts: ["10 exemples variats de cada classe.|10 ejemplos variados de cada clase.", "Prova-la en un altre lloc.|Pruébala en otro sitio.", "Almenys un 75 %.|Al menos un 75 %."], nota: "Es desa al portafoli.|Se guarda en el portafolio." },
      { id: 's14', k: 'concepte', t: 'Abans de publicar una IA|Antes de publicar una IA', punts: ["Qui hi falta a les dades?|¿Quién falta en los datos?", "L'hem provada amb cada grup?|¿La hemos probado con cada grupo?", "Ho expliquem a la fitxa?|¿Lo explicamos en la ficha?"], nota: "Prepara la sessió del projecte.|Prepara la sesión del proyecto." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ["La IA aprèn dreceres i estereotips de les dades.|La IA aprende atajos y estereotipos de los datos.", "Qui surt poc a les dades, més errors.|Quien sale poco en los datos, más errores.", "El biaix es mesura i es redueix.|El sesgo se mide y se reduce."], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Un exemple de biaix.|Un ejemplo de sesgo.", "Una manera de reduir-lo.|Una manera de reducirlo."], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'Auditoria de dades|Auditoría de datos', k: 'fitxa',
        intro: "Un per grup. App inventada «GestosYa»: reconeix gestos de la mà per controlar un altaveu. Dades d'entrenament: 600 fotos; 540 de persones adultes, 60 d'adolescents i cap d'infants; 570 de mans de pell clara; totes fetes de dia, amb fons blanc i amb la mà dreta.|Una por grupo. App inventada «GestosYa»: reconoce gestos de la mano para controlar un altavoz. Datos de entrenamiento: 600 fotos; 540 de personas adultas, 60 de adolescentes y ninguna de niños; 570 de manos de piel clara; todas hechas de día, con fondo blanco y con la mano derecha.",
        items: [
          { q: 'Qui o què hi falta a les dades?|¿Quién o qué falta en los datos?', sol: "Infants (i pocs adolescents), pells fosques, mans esquerres, fons i llums diferents (de nit, a fora).|Niños (y pocos adolescentes), pieles oscuras, manos izquierdas, fondos y luces distintos (de noche, fuera)." },
          { q: 'Amb qui o quan creieu que fallarà més?|¿Con quién o cuándo creéis que fallará más?', sol: "Amb infants, mans de pell fosca, la mà esquerra i amb poca llum o fons de colors.|Con niños, manos de piel oscura, la mano izquierda y con poca luz o fondos de colores." },
          { q: 'Quines 3 coses afegiríeu a les dades?|¿Qué 3 cosas añadiríais a los datos?', big: true, sol: "Per exemple: fotos d'infants i adolescents; mans de tots els tons de pell; mà esquerra, fons i llums variats.|Por ejemplo: fotos de niños y adolescentes; manos de todos los tonos de piel; mano izquierda, fondos y luces variados." },
          { q: 'Com comprovaríeu que funciona per a tothom?|¿Cómo comprobaríais que funciona para todo el mundo?', sol: "Mesurant l'encert per separat amb cada grup (edat, to de pell, mà, llum) i publicant-ho a la fitxa del model.|Midiendo el acierto por separado con cada grupo (edad, tono de piel, mano, luz) y publicándolo en la ficha del modelo." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: un classificador útil per a la classe ---------- */
  'i2-4': {
    intro: "Projecte de la unitat 2. En grups de tres, l'alumnat tria un problema petit i real de la classe, el resol amb un classificador (càmera, dibuix o so), en fa una prova honesta amb exemples nous i persones diferents, i n'escriu la fitxa del model: per a què serveix, amb quines dades, quins resultats i quins límits. Acaba amb una fira on els altres grups proven els classificadors i en completen els límits.|Proyecto de la unidad 2. En grupos de tres, el alumnado elige un problema pequeño y real de la clase, lo resuelve con un clasificador (cámara, dibujo o sonido), hace una prueba honesta con ejemplos nuevos y personas distintas, y escribe la ficha del modelo: para qué sirve, con qué datos, qué resultados y qué límites. Termina con una feria donde los otros grupos prueban los clasificadores y completan sus límites.",
    claus: [
      "Del problema a la IA: classes, dades, prova i fitxa.|Del problema a la IA: clases, datos, prueba y ficha.",
      "Una prova honesta: exemples nous, persones i llocs diferents, i errors apuntats.|Una prueba honesta: ejemplos nuevos, personas y lugares distintos, y errores apuntados.",
      "La fitxa del model (proposta el 2019) explica usos, dades, resultats i límits.|La ficha del modelo (propuesta en 2019) explica usos, datos, resultados y límites.",
      "Privadesa i ètica: sense dades de persones sense permís; endevinar emocions a l'escola està prohibit a la UE des del 2025.|Privacidad y ética: sin datos de personas sin permiso; adivinar emociones en la escuela está prohibido en la UE desde 2025."
    ],
    prev: ["Sessions i2-1 a i2-3: entrenar, mesurar errors i biaix.|Sesiones i2-1 a i2-3: entrenar, medir errores y sesgo."],
    obj: [
      "L'alumne/a defineix un problema i el tradueix en classes, dades i una prova.|El alumno/a define un problema y lo traduce en clases, datos y una prueba.",
      "L'alumne/a entrena un classificador amb exemples variats i el prova de manera honesta.|El alumno/a entrena un clasificador con ejemplos variados y lo prueba de forma honesta.",
      "L'alumne/a redacta la fitxa del model amb resultats i límits.|El alumno/a redacta la ficha del modelo con resultados y límites.",
      "L'alumne/a valora la privadesa i l'ètica del seu projecte.|El alumno/a valora la privacidad y la ética de su proyecto."
    ],
    comp: [
      "Competència emprenedora (CE3): de la idea al prototip|Competencia emprendedora (CE3): de la idea al prototipo",
      "Competència digital (CD2, CD4 i CD5): crear, protegir dades i entendre la IA|Competencia digital (CD2, CD4 y CD5): crear, proteger datos y entender la IA",
      "Competència en comunicació lingüística (CCL1): documentar i presentar un producte|Competencia en comunicación lingüística (CCL1): documentar y presentar un producto"
    ],
    vocab: [
      ["Prototip|Prototipo", "Primera versió d'una idea, prou bona per provar-la.|Primera versión de una idea, lo bastante buena para probarla."],
      ["Fitxa del model|Ficha del modelo", "Document curt amb usos, dades, resultats i límits d'un model.|Documento corto con usos, datos, resultados y límites de un modelo."],
      ["Prova honesta|Prueba honesta", "Prova amb exemples nous, de persones i llocs diferents.|Prueba con ejemplos nuevos, de personas y lugares distintos."],
      ["Ús previst|Uso previsto", "Per a què s'ha pensat el model (i per a què no).|Para qué se ha pensado el modelo (y para qué no)."],
      ["Consentiment|Consentimiento", "Permís explícit d'una persona per fer servir les seves dades.|Permiso explícito de una persona para usar sus datos."]
    ],
    mat: {
      aula: ["Un ordinador per grup (millor amb càmera i micròfon) amb Numi Tech obert a la sessió del projecte|Un ordenador por grupo (mejor con cámara y micrófono) con Numi Tech abierto en la sesión del proyecto", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Objectes de l'aula per als projectes de càmera|Objetos del aula para los proyectos de cámara"],
      imprimir: ["Fitxa del model (imprimible 1): una per grup|Ficha del modelo (imprimible 1): una por grupo", "Full de la fira (imprimible 2): un per alumne/a|Hoja de la feria (imprimible 2): una por alumno/a"],
      prep: ["Imprimir els dos fulls.|Imprimir las dos hojas.", "Pensar dues o tres idees de projecte d'exemple per als grups que no en trobin.|Pensar dos o tres ideas de proyecto de ejemplo para los grupos que no encuentren.", "Preparar l'aula per a la fira (ordinadors oberts i fitxes al costat).|Preparar el aula para la feria (ordenadores abiertos y fichas al lado)."]
    },
    plan: [
      { min: 5, t: 'El repte del projecte|El reto del proyecto', fase: 'inici',
        fa: "Presenta el projecte i pregunta quins problemes petits de la classe podria resoldre un classificador. Apunta idees i descarta les que necessitin dades personals.|Presenta el proyecto y pregunta qué problemas pequeños de la clase podría resolver un clasificador. Apunta ideas y descarta las que necesiten datos personales.",
        diu: ["Què us molesta o us fa perdre temps a classe?|¿Qué os molesta o os hace perder tiempo en clase?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: 'Idea, fitxa, prova i privadesa|Idea, ficha, prueba y privacidad', fase: 'teoria',
        fa: "Amb les animacions: el camí del problema a la fitxa, què diu una fitxa del model, què és una prova honesta i què fem amb les dades de les persones (i què prohibeix la llei europea d'IA).|Con las animaciones: el camino del problema a la ficha, qué dice una ficha del modelo, qué es una prueba honesta y qué hacemos con los datos de las personas (y qué prohíbe la ley europea de IA).",
        diu: ["Per què 3 proves no són prou?|¿Por qué 3 pruebas no son suficientes?", "Quina idea de projecte no faríeu? Per què?|¿Qué idea de proyecto no haríais? ¿Por qué?"],
        slides: ['s3', 's4', 's5', 's6'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 7, t: 'Disseny en paper|Diseño en papel', fase: 'desconnectat',
        fa: "Els grups omplen la primera part de la fitxa: problema, classes, quants exemples i d'on, com faran la prova i un límit possible.|Los grupos rellenan la primera parte de la ficha: problema, clases, cuántos ejemplos y de dónde, cómo harán la prueba y un límite posible.",
        diu: ["Qui farà els exemples de la prova? No pot ser qui l'entrena!|¿Quién hará los ejemplos de la prueba? ¡No puede ser quien lo entrena!"],
        slides: ['s7'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3|Grupos de 3" },
      { min: 22, t: "A l'ordinador: el prototip|En el ordenador: el prototipo", fase: 'ordinador',
        fa: "Fan la sessió de l'app fins al pas «Crea»: el prototip del semàfor del soroll, el codi del cofre, les preguntes de prova i privadesa, el seu classificador i la fitxa a l'app. Una persona d'un altre grup fa els exemples de prova.|Hacen la sesión de la app hasta el paso «Crea»: el prototipo del semáforo del ruido, el código del cofre, las preguntas de prueba y privacidad, su clasificador y la ficha en la app. Una persona de otro grupo hace los ejemplos de prueba.",
        diu: ["Quin error fa més el vostre classificador?|¿Qué error hace más vuestro clasificador?", "Amb qui o on pot fallar?|¿Con quién o dónde puede fallar?"],
        slides: ['s8', 's9', 's10', 's11'], app: "Fins al pas «Crea» (el nostre classificador) i la fitxa.|Hasta el paso «Crea» (nuestro clasificador) y la ficha.", org: "Grups de 3|Grupos de 3" },
      { min: 13, t: 'Fira de classificadors|Feria de clasificadores', fase: 'crea',
        fa: "Cada grup deixa el classificador obert i la fitxa al costat. L'alumnat visita dos projectes, en llegeix la fitxa, fa 5 proves i apunta encerts i errors al full de la fira. Després, cada grup afegeix els límits trobats i es voten el més útil i la fitxa més honesta.|Cada grupo deja el clasificador abierto y la ficha al lado. El alumnado visita dos proyectos, lee su ficha, hace 5 pruebas y apunta aciertos y errores en la hoja de la feria. Después, cada grupo añade los límites encontrados y se votan el más útil y la ficha más honesta.",
        diu: ["Què han trobat els altres que vosaltres no havíeu vist?|¿Qué han encontrado los demás que vosotros no habíais visto?"],
        slides: ['s12', 's13'], app: "El pas «Fira de classificadors».|El paso «Feria de clasificadores».", org: "Tota l'aula en rotació|Toda el aula en rotación" },
      { min: 5, t: 'Tancament de la unitat|Cierre de la unidad', fase: 'tancament',
        fa: "Repassa la unitat: dades i etiquetes, matriu i errors, biaix i fitxa. Recorda les idees que no farem i per què. Tiquet de sortida i com s'han sentit.|Repasa la unidad: datos y etiquetas, matriz y errores, sesgo y ficha. Recuerda las ideas que no haremos y por qué. Tique de salida y cómo se han sentido.",
        diu: ["Què és el que més us ha sorprès de com s'entrena una IA?|¿Qué es lo que más os ha sorprendido de cómo se entrena una IA?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Tria un projecte massa gran (reconèixer qualsevol objecte).|Elige un proyecto demasiado grande (reconocer cualquier objeto).", "Redueix-lo a 2-4 classes clares i un ús concret.|Redúcelo a 2-4 clases claras y un uso concreto."],
      ["Fa la prova amb els mateixos exemples o la mateixa persona que l'ha entrenat.|Hace la prueba con los mismos ejemplos o la misma persona que lo ha entrenado.", "La prova la fa algú d'un altre grup, en un altre lloc de l'aula.|La prueba la hace alguien de otro grupo, en otro sitio del aula."],
      ["A la fitxa només hi posa l'encert més alt.|En la ficha solo pone el acierto más alto.", "Demana el resultat de la prova honesta i almenys un límit.|Pide el resultado de la prueba honesta y al menos un límite."],
      ["Proposa reconèixer companys per la cara o la veu.|Propone reconocer a compañeros por la cara o la voz.", "Busqueu una alternativa sense dades personals: gestos, objectes, dibuixos o sons.|Buscad una alternativa sin datos personales: gestos, objetos, dibujos o sonidos."]
    ],
    diff: {
      mes: "Nivell PRO: classificador de 3 classes o més amb 15 exemples de cada i un 80 % a la prova; el codi del cofre al 95 %. Afegir a la fitxa l'encert per grups (persones o llocs diferents).|Nivel PRO: clasificador de 3 clases o más con 15 ejemplos de cada y un 80 % en la prueba; el código del cofre al 95 %. Añadir a la ficha el acierto por grupos (personas o lugares distintos).",
      menys: "Partir d'una idea de la llista del docent i treballar amb dues classes. Fitxa amb frases per completar.|Partir de una idea de la lista del docente y trabajar con dos clases. Ficha con frases para completar."
    },
    aval: {
      ticket: ["Què ha de dir una fitxa del model?|¿Qué tiene que decir una ficha del modelo?", "Un límit del vostre classificador.|Un límite de vuestro clasificador."],
      rubric: [
        ["Idea|Idea", "Problema real i petit, amb classes clares.|Problema real y pequeño, con clases claras.", "Idea massa àmplia o poc útil.|Idea demasiado amplia o poco útil."],
        ["Dades|Datos", "Exemples variats i suficients de cada classe.|Ejemplos variados y suficientes de cada clase.", "Pocs exemples o tots iguals.|Pocos ejemplos o todos iguales."],
        ["Prova|Prueba", "Prova honesta amb exemples nous i errors apuntats.|Prueba honesta con ejemplos nuevos y errores apuntados.", "Prova amb els mateixos exemples.|Prueba con los mismos ejemplos."],
        ["Fitxa|Ficha", "Completa: ús, dades, resultats i límits.|Completa: uso, datos, resultados y límites.", "Incompleta o sense límits.|Incompleta o sin límites."],
        ["Responsabilitat|Responsabilidad", "Respecta la privadesa i explica què no s'ha de fer.|Respeta la privacidad y explica qué no se debe hacer.", "No té en compte la privadesa.|No tiene en cuenta la privacidad."]
      ]
    },
    casa: "A casa, ensenyeu a la família la fitxa del vostre model. Expliqueu-los un límit que heu trobat i pregunteu-los: quina IA que fan servir voldrien que tingués una fitxa així?|En casa, enseñad a la familia la ficha de vuestro modelo. Explicadles un límite que habéis encontrado y preguntadles: ¿qué IA que usan querrían que tuviera una ficha así?",
    faq: [
      ["Les fitxes de model existeixen de veritat?|¿Las fichas de modelo existen de verdad?", "Sí: les va proposar el 2019 un equip d'investigació (l'article «Model Cards for Model Reporting») i avui molts models es publiquen amb la seva fitxa.|Sí: las propuso en 2019 un equipo de investigación (el artículo «Model Cards for Model Reporting») y hoy muchos modelos se publican con su ficha."],
      ["És veritat que la llei europea prohibeix detectar emocions a l'escola?|¿Es verdad que la ley europea prohíbe detectar emociones en la escuela?", "Sí: el Reglament europeu d'IA prohibeix, des del 2 de febrer de 2025, els sistemes que infereixen emocions a la feina i als centres educatius, llevat de motius mèdics o de seguretat.|Sí: el Reglamento europeo de IA prohíbe, desde el 2 de febrero de 2025, los sistemas que infieren emociones en el trabajo y en los centros educativos, salvo por motivos médicos o de seguridad."],
      ["Es pot fer servir el classificador fora de l'app?|¿Se puede usar el clasificador fuera de la app?", "No: viu dins del navegador mentre dura el pas. Al portafoli es desa el resum (classes, exemples i encert).|No: vive dentro del navegador mientras dura el paso. En el portafolio se guarda el resumen (clases, ejemplos y acierto)."]
    ],
    tec: [
      ["No hi ha prou ordinadors amb càmera.|No hay suficientes ordenadores con cámara.", "Els projectes de dibuix funcionen a tots els ordinadors; reserveu la càmera per als grups que la necessitin.|Los proyectos de dibujo funcionan en todos los ordenadores; reservad la cámara para los grupos que la necesiten."],
      ["A la fira, els sons de diversos grups es barregen.|En la feria, los sonidos de varios grupos se mezclan.", "Separeu els projectes de so als extrems de l'aula o feu-los per torns.|Separad los proyectos de sonido en los extremos del aula o hacedlos por turnos."]
    ],
    seg: ["Cap projecte amb cares o veus identificables de companys. Les imatges i els sons no surten del dispositiu.|Ningún proyecto con caras o voces identificables de compañeros. Las imágenes y los sonidos no salen del dispositivo.", "A la fira, respecte pel treball dels altres: les proves busquen millorar, no ridiculitzar.|En la feria, respeto por el trabajo de los demás: las pruebas buscan mejorar, no ridiculizar."],
    extra: [
      "Emprenedoria: convertir el millor projecte en una proposta per al centre amb un pressupost senzill.|Emprendimiento: convertir el mejor proyecto en una propuesta para el centro con un presupuesto sencillo.",
      "Llengua: redactar la fitxa del model com un text instructiu clar per a algú que no sap res d'IA.|Lengua: redactar la ficha del modelo como un texto instructivo claro para alguien que no sabe nada de IA."
    ],
    trans: ["Unitat 3: parlar amb models de llenguatge, al·lucinacions i bons prompts. Unitat 8: una IA per al nostre centre, amb la seva fitxa de riscos.|Unidad 3: hablar con modelos de lenguaje, alucinaciones y buenos prompts. Unidad 8: una IA para nuestro centro, con su ficha de riesgos."],
    slides: [
      { id: 's1', k: 'portada', t: 'Projecte: un classificador útil per a la classe|Proyecto: un clasificador útil para la clase', x: 'Entrena la teva IA|Entrena tu IA', nota: "Projecte final de la unitat 2.|Proyecto final de la unidad 2." },
      { id: 's2', k: 'pregunta', t: 'Quin problema de la classe resoldríeu?|¿Qué problema de la clase resolveríais?', x: "Soroll, material, votacions, diapositives…|Ruido, material, votaciones, diapositivas…", nota: "Descarta les idees amb dades personals.|Descarta las ideas con datos personales." },
      { id: 's3', k: 'anim', t: 'Del problema a la fitxa|Del problema a la ficha', anim: 'i24flow', x: "Problema, classes, dades, prova i fitxa.|Problema, clases, datos, prueba y ficha.", nota: "Fes servir l'exemple del semàfor.|Usa el ejemplo del semáforo." },
      { id: 's4', k: 'anim', t: 'La fitxa del model|La ficha del modelo', anim: 'i24card', x: "Proposada el 2019; avui molts models en tenen.|Propuesta en 2019; hoy muchos modelos tienen una.", nota: "Remarca el camp «No és per a».|Remarca el campo «No es para»." },
      { id: 's5', k: 'anim', t: 'Una prova honesta|Una prueba honesta', anim: 'i24test', x: "3 proves meves no diuen res; 20 de variades, molt.|3 pruebas mías no dicen nada; 20 variadas, mucho.", nota: "Qui entrena no fa la prova.|Quien entrena no hace la prueba." },
      { id: 's6', k: 'anim', t: 'Dades de persones, amb cura|Datos de personas, con cuidado', anim: 'i24priv', x: "Res surt del dispositiu. I hi ha usos prohibits.|Nada sale del dispositivo. Y hay usos prohibidos.", nota: "Llei europea d'IA: emocions a l'escola, prohibit des del febrer de 2025.|Ley europea de IA: emociones en la escuela, prohibido desde febrero de 2025." },
      { id: 's7', k: 'activitat', t: 'Disseny en paper|Diseño en papel', timer: 7, punts: ["Problema en una frase.|Problema en una frase.", "Classes i exemples.|Clases y ejemplos.", "Prova i un límit.|Prueba y un límite."], nota: "Full «Fitxa del model».|Hoja «Ficha del modelo»." },
      { id: 's8', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 22, punts: ["Prototip del semàfor.|Prototipo del semáforo.", "El vostre classificador.|Vuestro clasificador.", "La fitxa a l'app.|La ficha en la app."], nota: "Una persona d'un altre grup fa la prova.|Una persona de otro grupo hace la prueba." },
      { id: 's9', k: 'repte', t: 'El semàfor del soroll|El semáforo del ruido', punts: ["Silenci, veu i aplaudiment.|Silencio, voz y aplauso.", "Almenys un 80 %.|Al menos un 80 %."], nota: "Si no hi ha micròfon, «Exemples».|Si no hay micrófono, «Ejemplos»." },
      { id: 's10', k: 'repte', t: 'El vostre classificador|Vuestro clasificador', punts: ["2-4 classes amb nom.|2-4 clases con nombre.", "10 exemples variats de cada.|10 ejemplos variados de cada.", "Prova honesta: 75 % o més.|Prueba honesta: 75 % o más."], nota: "PRO: 3 classes, 15 exemples, 80 %.|PRO: 3 clases, 15 ejemplos, 80 %." },
      { id: 's11', k: 'concepte', t: "La fitxa a l'app|La ficha en la app", punts: ["Per a què serveix i d'on surten les dades.|Para qué sirve y de dónde salen los datos.", "Encert i error més freqüent.|Acierto y error más frecuente.", "Amb qui pot fallar i què no s'ha de fer.|Con quién puede fallar y qué no se debe hacer."], nota: "Després, la completen en paper.|Después, la completan en papel." },
      { id: 's12', k: 'activitat', t: 'Fira de classificadors|Feria de clasificadores', timer: 13, punts: ["Llegiu la fitxa.|Leed la ficha.", "Feu 5 proves i apunteu-les.|Haced 5 pruebas y apuntadlas.", "Afegiu els límits trobats.|Añadid los límites encontrados."], nota: "Full de la fira, un per alumne/a.|Hoja de la feria, una por alumno/a." },
      { id: 's13', k: 'pregunta', t: 'Quina fitxa és més honesta?|¿Qué ficha es más honesta?', x: "La que diu més clarament on falla.|La que dice más claramente dónde falla.", nota: "Voteu el projecte més útil i la fitxa més honesta.|Votad el proyecto más útil y la ficha más honesta." },
      { id: 's14', k: 'concepte', t: 'Idees que no farem|Ideas que no haremos', punts: ["Endevinar emocions per la cara.|Adivinar emociones por la cara.", "Reconèixer companys sense permís.|Reconocer compañeros sin permiso.", "Decidir coses importants sense una persona.|Decidir cosas importantes sin una persona."], nota: "Connecta-ho amb la unitat 7 (IA i societat).|Conéctalo con la unidad 7 (IA y sociedad)." },
      { id: 's15', k: 'resum', t: 'Unitat 2: entrena la teva IA|Unidad 2: entrena tu IA', punts: ["Dades, etiquetes i prova separada.|Datos, etiquetas y prueba separada.", "Matriu, falsos positius i negatius.|Matriz, falsos positivos y negativos.", "Biaix i fitxa del model.|Sesgo y ficha del modelo."], nota: "Repàs de la unitat.|Repaso de la unidad." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Què ha de dir una fitxa del model?|¿Qué tiene que decir una ficha del modelo?", "Un límit del vostre classificador.|Un límite de vuestro clasificador."], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'Fitxa del model|Ficha del modelo', k: 'fitxa',
        intro: "Una per grup. Ompliu la primera part abans d'entrenar i la resta després de la prova i de la fira.|Una por grupo. Rellenad la primera parte antes de entrenar y el resto después de la prueba y de la feria.",
        items: [
          { q: 'Nom del model i problema que resol («Volem una IA que…»):|Nombre del modelo y problema que resuelve («Queremos una IA que…»):', sol: "Per exemple: «Semàfor v1: volem una IA que avisi quan hi ha massa soroll».|Por ejemplo: «Semáforo v1: queremos una IA que avise cuando hay demasiado ruido»." },
          { q: 'Per a què NO s\'ha de fer servir:|Para qué NO se debe usar:', sol: "Per exemple: per posar notes o castigar ningú.|Por ejemplo: para poner notas o castigar a nadie." },
          { q: 'Classes i dades (quants exemples, de qui, on i amb quina llum):|Clases y datos (cuántos ejemplos, de quién, dónde y con qué luz):', big: true, sol: "Per exemple: 3 classes; 10 sons de cada, de 3 persones, a l'aula.|Por ejemplo: 3 clases; 10 sonidos de cada, de 3 personas, en el aula." },
          { q: 'Resultats de la prova honesta (encert, falsos positius, falsos negatius):|Resultados de la prueba honesta (acierto, falsos positivos, falsos negativos):', sol: "Per exemple: 10 de 12 (83 %); 1 fals positiu i 1 fals negatiu.|Por ejemplo: 10 de 12 (83 %); 1 falso positivo y 1 falso negativo." },
          { q: 'Límits (amb qui o quan falla) i privadesa:|Límites (con quién o cuándo falla) y privacidad:', big: true, sol: "Per exemple: es confon amb música; no desa cap so i no fa servir veus identificables.|Por ejemplo: se confunde con música; no guarda ningún sonido y no usa voces identificables." }
        ] },
      { id: 'p2', t: 'Full de la fira|Hoja de la feria', k: 'fitxa',
        intro: "Un per alumne/a. Visiteu dos projectes: llegiu-ne la fitxa i feu 5 proves a cadascun.|Una por alumno/a. Visitad dos proyectos: leed su ficha y haced 5 pruebas en cada uno.",
        items: [
          { q: 'Projecte 1: nom i què fa.|Proyecto 1: nombre y qué hace.', sol: "El que digui la seva fitxa.|Lo que diga su ficha." },
          { q: 'Projecte 1: encerts, falsos positius i falsos negatius (de 5).|Proyecto 1: aciertos, falsos positivos y falsos negativos (de 5).', sol: "Per exemple: 4 encerts, 1 fals positiu.|Por ejemplo: 4 aciertos, 1 falso positivo." },
          { q: 'Projecte 2: nom i què fa.|Proyecto 2: nombre y qué hace.', sol: "El que digui la seva fitxa.|Lo que diga su ficha." },
          { q: 'Projecte 2: encerts, falsos positius i falsos negatius (de 5).|Proyecto 2: aciertos, falsos positivos y falsos negativos (de 5).', sol: "Per exemple: 3 encerts, 2 falsos negatius.|Por ejemplo: 3 aciertos, 2 falsos negativos." },
          { q: 'Un límit que has trobat i que la fitxa no deia:|Un límite que has encontrado y que la ficha no decía:', big: true, sol: "Per exemple: falla si l'objecte és lluny de la càmera.|Por ejemplo: falla si el objeto está lejos de la cámara." }
        ] }
    ]
  }
});
