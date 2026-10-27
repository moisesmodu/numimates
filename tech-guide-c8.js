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

/* ── unitat 3 ── */
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

/* ── unitat 4 ── */
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
