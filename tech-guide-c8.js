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
