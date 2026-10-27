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
