/* Tech Robòtica · unitat 5 «Llum, so i LED» · guia del professorat (k5-1…k5-4)
   Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. Fase «robot»: activitat amb el Maqueen Lite V5 de veritat.
   Material propi de Numi. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · El robot papallona ---------- */
  'k5-1': {
    intro: "Primera sessió de la unitat de la llum: l'alumnat coneix els dos sensors de llum del Maqueen (un número de 0 a 1023), aprèn a triar un llindar mesurant i programa un robot «papallona» que compara l'esquerra i la dreta per girar cap al focus. És la primera vegada que el robot decideix comparant dos sensors entre si, no un sensor amb un número fix. La classe va de la pregunta inicial a la teoria amb demos, la papallona humana sense pantalla, l'app, la mesura amb el robot real i els reptes.|Primera sesión de la unidad de la luz: el alumnado conoce los dos sensores de luz del Maqueen (un número de 0 a 1023), aprende a elegir un umbral midiendo y programa un robot «mariposa» que compara la izquierda y la derecha para girar hacia el foco. Es la primera vez que el robot decide comparando dos sensores entre sí, no un sensor con un número fijo. La clase va de la pregunta inicial a la teoría con demos, la mariposa humana sin pantalla, la app, la medida con el robot real y los retos.",
    claus: [
      "El sensor de llum dona un número: 0 és foscor total i 1023, molta llum; de dia, uns 260, i a les fosques, uns 25.|El sensor de luz da un número: 0 es oscuridad total y 1023, mucha luz; de día, unos 260, y a oscuras, unos 25.",
      "Un llindar és el número frontera entre «poca» i «molta» llum, i es tria mesurant, no endevinant.|Un umbral es el número frontera entre «poca» y «mucha» luz, y se elige midiendo, no adivinando.",
      "Si la llum esquerra és més gran que la dreta, el focus és a l'esquerra: el robot gira cap allà (motor esquerre més lent).|Si la luz izquierda es mayor que la derecha, el foco está a la izquierda: el robot gira hacia allí (motor izquierdo más lento).",
      "Repetint «mesurar, decidir, moure» dins del «per sempre», el robot corregeix el camí i troba el focus encara que el canviem de lloc.|Repitiendo «medir, decidir, mover» dentro del «para siempre», el robot corrige el camino y encuentra el foco aunque lo cambiemos de sitio."
    ],
    prev: [
      "El «si… si no» dins del «per sempre» per reaccionar a un sensor (unitats 3 i 4).|El «si… si no» dentro del «para siempre» para reaccionar a un sensor (unidades 3 y 4).",
      "Girar amb els motors a velocitats diferents: el motor més lent és el del costat cap on gira (unitats 1 i 2).|Girar con los motores a velocidades diferentes: el motor más lento es el del lado hacia el que gira (unidades 1 y 2).",
      "Comparar números amb > i < (matemàtiques; condicions de la unitat 3).|Comparar números con > y < (matemáticas; condiciones de la unidad 3)."
    ],
    faq: [
      ["Per què el número arriba a 1023 i no a 1000?|¿Por qué el número llega a 1023 y no a 1000?",
        "Perquè el robot mesura la llum amb 1024 graons, del 0 al 1023. És la mateixa escala que el valor ADC dels sensors de línia.|Porque el robot mide la luz con 1024 escalones, del 0 al 1023. Es la misma escala que el valor ADC de los sensores de línea."],
      ["Si poso el llindar a 1000, no és més segur que pari?|Si pongo el umbral en 1000, ¿no es más seguro que pare?",
        "Al contrari: si el focus mai arriba a 1000, la condició no es compleix mai i el robot no para. El llindar ha de quedar entre la llum normal i la que marca a prop del focus.|Al contrario: si el foco nunca llega a 1000, la condición no se cumple nunca y el robot no para. El umbral tiene que quedar entre la luz normal y la que marca cerca del foco."],
      ["Per què el robot fa zig-zag i no va recte cap al focus?|¿Por qué el robot hace zigzag y no va recto hacia el foco?",
        "Perquè a cada volta només sap quin costat té més llum i gira una mica cap allà; quan es passa, corregeix cap a l'altre costat. Les papallones de veritat també fan camins així.|Porque en cada vuelta solo sabe qué lado tiene más luz y gira un poco hacia allí; cuando se pasa, corrige hacia el otro lado. Las mariposas de verdad también hacen caminos así."],
      ["Els sensors de llum són les càmeres del robot?|¿Los sensores de luz son las cámaras del robot?",
        "No: no fan fotos ni veuen formes. Cadascun només diu quanta llum li arriba, amb un sol número.|No: no hacen fotos ni ven formas. Cada uno solo dice cuánta luz le llega, con un solo número."],
      ["Per què al robot de veritat els números no són iguals que al simulador?|¿Por qué en el robot de verdad los números no son iguales que en el simulador?",
        "La llum de l'aula, les finestres i la llanterna són diferents a cada lloc, i cada sensor és una mica diferent. Per això mesurem abans de triar el llindar.|La luz del aula, las ventanas y la linterna son diferentes en cada sitio, y cada sensor es un poco diferente. Por eso medimos antes de elegir el umbral."],
      ["Totes les papallones van cap a la llum?|¿Todas las mariposas van hacia la luz?",
        "Moltes papallones de nit hi volen, però no totes, i els científics encara estudien per què. El nostre robot imita aquest comportament amb una regla molt senzilla.|Muchas mariposas nocturnas vuelan hacia ella, pero no todas, y los científicos todavía estudian por qué. Nuestro robot imita este comportamiento con una regla muy sencilla."]
    ],
    tec: [
      ["A MakeCode no apareixen els blocs del Maqueen (o el codi enganxat surt en vermell).|En MakeCode no aparecen los bloques del Maqueen (o el código pegado sale en rojo).",
        "Falta l'extensió: Extensions → busqueu «maqueen» → trieu «maqueen» (DFRobot). Els blocs surten a la categoria «Maqueen v5». Si el codi fa servir les llums de sota, afegiu també «neopixel».|Falta la extensión: Extensiones → buscad «maqueen» → elegid «maqueen» (DFRobot). Los bloques salen en la categoría «Maqueen v5». Si el código usa las luces de abajo, añadid también «neopixel»."],
      ["Després de descarregar, la micro:bit mostra una creu (X) que parpelleja i el robot no fa res.|Después de descargar, la micro:bit muestra una cruz (X) que parpadea y el robot no hace nada.",
        "És el bloc «initialize via I2C until success» (el primer del codi; en castellà, «Inicializar MaqueenV5 hasta éxito»): la micro:bit no troba el Maqueen. Comproveu l'interruptor del robot, les 3 piles AA i que la micro:bit estigui ben endollada fins al fons. Quan el troba, mostra un ✓.|Es el bloque «Inicializar MaqueenV5 hasta éxito» («initialize via I2C until success» en inglés), el primero del código: la micro:bit no encuentra el Maqueen. Comprobad el interruptor del robot, las 3 pilas AA y que la micro:bit esté bien enchufada hasta el fondo. Cuando lo encuentra, muestra un ✓."],
      ["El botó «Descarrega» no envia res a la micro:bit.|El botón «Descargar» no envía nada a la micro:bit.",
        "Amb Chrome o Edge, connecteu la micro:bit amb «Connecta el dispositiu» (WebUSB) i torneu a descarregar. Si no, arrossegueu el fitxer .hex descarregat a la unitat MICROBIT. Proveu un altre cable: alguns cables USB només carreguen.|Con Chrome o Edge, conectad la micro:bit con «Conectar dispositivo» (WebUSB) y volved a descargar. Si no, arrastrad el archivo .hex descargado a la unidad MICROBIT. Probad otro cable: algunos cables USB solo cargan."],
      ["Al robot real, la llum no canvia gaire quan s'hi acosta la llanterna.|En el robot real, la luz no cambia mucho cuando se acerca la linterna.",
        "Els sensors són a les cantonades del davant: apunteu-hi la llanterna de cara i a 10-30 cm, i enfosquiu el racó. La llanterna d'un mòbil sovint és més feble que una de piles.|Los sensores están en las esquinas de delante: apuntad la linterna de cara y a 10-30 cm, y oscureced el rincón. La linterna de un móvil a menudo es más débil que una de pilas."],
      ["El robot gira sempre cap al mateix costat, encara que la llum sigui a l'altre.|El robot gira siempre hacia el mismo lado, aunque la luz esté en el otro.",
        "Mireu el codi: al bloc del motor, «left» (M1) és l'esquerre i «right» (M2) el dret. A MakeCode en castellà, «endavant» surt com a «Sentido horario». Comproveu que els dos «si» no estiguin intercanviats.|Mirad el código: en el bloque del motor, «left» (M1) es el izquierdo y «right» (M2) el derecho. En MakeCode en castellano, «adelante» sale como «Sentido horario». Comprobad que los dos «si» no estén intercambiados."]
    ],
    seg: [
      "Robot: 3 piles AA del mateix tipus i carregades; no barregeu piles noves i velles. Interruptor apagat mentre es munta, s'endolla la micro:bit o es canvien les piles.|Robot: 3 pilas AA del mismo tipo y cargadas; no mezcléis pilas nuevas y viejas. Interruptor apagado mientras se monta, se enchufa la micro:bit o se cambian las pilas.",
      "En descarregar, el programa comença tot sol: el robot ha d'estar a terra o amb les rodes enlaire a la mà, mai a la vora d'una taula ni estirant el cable USB.|Al descargar, el programa empieza solo: el robot tiene que estar en el suelo o con las ruedas en el aire en la mano, nunca en el borde de una mesa ni tirando del cable USB.",
      "Llanternes: mai directament als ulls de ningú; el sol i les bombetes no s'han de mirar de prop.|Linternas: nunca directamente a los ojos de nadie; el sol y las bombillas no se deben mirar de cerca.",
      "Racó fosc: deixeu prou llum per caminar sense ensopegar i cap cable a terra.|Rincón oscuro: dejad suficiente luz para caminar sin tropezar y ningún cable en el suelo."
    ],
    extra: [
      "Papallona «covard»: canvieu el programa perquè el robot fugi de la llum i s'amagui al racó més fosc (motors al revés i llindar de foscor).|Mariposa «cobarde»: cambiad el programa para que el robot huya de la luz y se esconda en el rincón más oscuro (motores al revés y umbral de oscuridad).",
      "Mapa de llum de l'aula: amb el robot real i el codi de mesurar, apunteu la llum de 6 punts de l'aula en un plànol i acoloriu-lo de fosc a clar.|Mapa de luz del aula: con el robot real y el código de medir, apuntad la luz de 6 puntos del aula en un plano y coloreadlo de oscuro a claro.",
      "Dues llanternes: poseu-ne dues a distàncies diferents i prediu cap a quina anirà la papallona abans de provar-ho.|Dos linternas: poned dos a distancias diferentes y predecid hacia cuál irá la mariposa antes de probarlo."
    ],
    trans: [
      "Unitats 3 i 4: el «si» dins del «per sempre» amb ultrasons i sensors de línia; avui el sensor és nou, però l'estructura és la mateixa.|Unidades 3 y 4: el «si» dentro del «para siempre» con ultrasonidos y sensores de línea; hoy el sensor es nuevo, pero la estructura es la misma.",
      "Ciències naturals: la llum i com disminueix amb la distància; els animals que s'orienten amb la llum (fototaxi).|Ciencias naturales: la luz y cómo disminuye con la distancia; los animales que se orientan con la luz (fototaxis).",
      "Sessió següent: els avisos (so, llums i icones) faran que la papallona i les alarmes es facin notar.|Sesión siguiente: los avisos (sonido, luces e iconos) harán que la mariposa y las alarmas se hagan notar."
    ],
    obj: [
      "L'alumne/a explica que el Maqueen té dos sensors de llum que donen un número de 0 a 1023 i diu quins valors hi ha a les fosques, de dia i a prop d'un focus.|El alumno/a explica que el Maqueen tiene dos sensores de luz que dan un número de 0 a 1023 y dice qué valores hay a oscuras, de día y cerca de un foco.",
      "L'alumne/a tria un llindar mesurant els valors reals i el fa servir en un «si» per aturar el robot quan hi ha molta llum.|El alumno/a elige un umbral midiendo los valores reales y lo usa en un «si» para parar el robot cuando hay mucha luz.",
      "L'alumne/a compara la llum esquerra i la dreta per decidir cap on gira el robot i programa una papallona que troba el focus a diverses pistes.|El alumno/a compara la luz izquierda y la derecha para decidir hacia dónde gira el robot y programa una mariposa que encuentra el foco en varias pistas.",
      "L'alumne/a mesura la llum amb el Maqueen de veritat i compara els números amb els del simulador.|El alumno/a mide la luz con el Maqueen de verdad y compara los números con los del simulador."
    ],
    comp: [
      "Competència digital (CD5): programar un robot que reacciona a un sensor|Competencia digital (CD5): programar un robot que reacciona a un sensor",
      "Pensament computacional: condicions amb comparacions (>, <), llindars i bucles|Pensamiento computacional: condiciones con comparaciones (>, <), umbrales y bucles",
      "Ciències: la llum, la distància a la font i la direcció; comportament dels animals (fototaxi)|Ciencias: la luz, la distancia a la fuente y la dirección; comportamiento de los animales (fototaxis)",
      "Matemàtiques: comparar i ordenar nombres fins a 1023; mesurar i registrar dades|Matemáticas: comparar y ordenar números hasta 1023; medir y registrar datos"
    ],
    vocab: [
      ["Sensor de llum|Sensor de luz", "Part del robot que mesura quanta llum li arriba i la converteix en un número de 0 a 1023.|Parte del robot que mide cuánta luz le llega y la convierte en un número de 0 a 1023."],
      ["Llindar|Umbral", "El número que fa de frontera: per sobre, «molta llum»; per sota, «poca».|El número que hace de frontera: por encima, «mucha luz»; por debajo, «poca»."],
      ["Comparar|Comparar", "Mirar quin de dos números és més gran (llum esquerra > llum dreta).|Mirar cuál de dos números es mayor (luz izquierda > luz derecha)."],
      ["Calibrar|Calibrar", "Mesurar al robot de veritat per triar bé els números del programa.|Medir en el robot de verdad para elegir bien los números del programa."],
      ["Fototaxi|Fototaxis", "Moure's cap a la llum (o fugir-ne), com fan moltes papallones de nit.|Moverse hacia la luz (o huir de ella), como hacen muchas mariposas nocturnas."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «El robot papallona»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «El robot mariposa»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit per grup de 3-4: Maqueen Lite V5 amb micro:bit V2, piles carregades i cable USB|Un kit por grupo de 3-4: Maqueen Lite V5 con micro:bit V2, pilas cargadas y cable USB",
        "Una llanterna (o el llum d'un mòbil) per grup i un racó de l'aula que es pugui enfosquir (persianes o una caixa gran de cartró)|Una linterna (o la luz de un móvil) por grupo y un rincón del aula que se pueda oscurecer (persianas o una caja grande de cartón)"
      ],
      imprimir: ["Targetes de la papallona humana|Tarjetas de la mariposa humana", "Codi MakeCode: mesurar la llum i la papallona|Código MakeCode: medir la luz y la mariposa"],
      prep: [
        "Imprimir i retallar un paquet de targetes de la papallona per grup.|Imprimir y recortar un paquete de tarjetas de la mariposa por grupo.",
        "Comprovar que les llanternes funcionen i preparar el racó fosc on provar la papallona real (una zona de terra de 1 × 1 m com a mínim).|Comprobar que las linternas funcionan y preparar el rincón oscuro donde probar la mariposa real (una zona de suelo de 1 × 1 m como mínimo).",
        "Tenir el codi de «mesurar la llum» preparat a MakeCode en un ordinador, per projectar-lo.|Tener el código de «medir la luz» preparado en MakeCode en un ordenador, para proyectarlo.",
        "Provar abans les demos de les diapositives 6, 8 i 9 per saber què faran.|Probar antes las demos de las diapositivas 6, 8 y 9 para saber qué harán."
      ]
    },
    plan: [
      { min: 4, t: "Benvinguda: la Nit de les Llanternes|Bienvenida: la Noche de los Farolillos", fase: 'inici',
        fa: "Presenta el context de la unitat: el poble prepara una festa de nit i ens fa quatre encàrrecs. Pregunta com creuen que una papallona de nit sap on és el fanal i recull idees sense corregir-les. Recorda breument el «per sempre» + «si» de les unitats 3 i 4.|Presenta el contexto de la unidad: el pueblo prepara una fiesta de noche y nos hace cuatro encargos. Pregunta cómo creen que una mariposa nocturna sabe dónde está la farola y recoge ideas sin corregirlas. Recuerda brevemente el «para siempre» + «si» de las unidades 3 y 4.",
        diu: ["Com sap una papallona on és la llum, si no té mapa?|¿Cómo sabe una mariposa dónde está la luz, si no tiene mapa?", "Fins ara el robot sentia distàncies i línies. Avui sentirà la llum.|Hasta ahora el robot sentía distancias y líneas. Hoy sentirá la luz.", "Quins sensors coneixem ja? (ultrasons i línia) I què ens diuen? (distància; negre o blanc)|¿Qué sensores conocemos ya? (ultrasonidos y línea) ¿Y qué nos dicen? (distancia; negro o blanco)"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Els sensors de llum i el llindar|Los sensores de luz y el umbral", fase: 'teoria',
        fa: "Ensenya on són els dos sensors de llum (a les cantonades del davant) amb un robot a la mà. Explica l'escala 0-1023 i els valors típics. Executa la demo del llindar: abans, la classe prediu on s'aturarà. Després mostra la comparació esquerra-dreta i la demo de la papallona, i acaba amb el «compte!» del llindar massa alt (la classe ha de dir per què no para).|Enseña dónde están los dos sensores de luz (en las esquinas de delante) con un robot en la mano. Explica la escala 0-1023 y los valores típicos. Ejecuta la demo del umbral: antes, la clase predice dónde se parará. Después muestra la comparación izquierda-derecha y la demo de la mariposa, y acaba con el «¡cuidado!» del umbral demasiado alto (la clase tiene que decir por qué no para).",
        diu: ["Si tapo el sensor amb el dit, el número puja o baixa?|Si tapo el sensor con el dedo, ¿el número sube o baja?", "El focus és a l'esquerra: quin sensor marcarà més?|El foco está a la izquierda: ¿qué sensor marcará más?", "Per què aquest robot no para mai? Quin número canviaríeu?|¿Por qué este robot no para nunca? ¿Qué número cambiaríais?", "De dia marca 260 i a prop del focus, 450. Quin llindar triaríeu? (un número entremig, com 400)|De día marca 260 y cerca del foco, 450. ¿Qué umbral elegiríais? (un número intermedio, como 400)"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "La papallona humana|La mariposa humana", fase: 'desconnectat',
        fa: "Grups de 4: una papallona, dos sensors (esquerre i dret) i un focus. El focus es col·loca en un lloc de l'aula amb la llanterna apagada (o un full groc). Els sensors, a banda i banda de la papallona, aixequen una targeta de número segons com de prop i de cara tenen el focus. La papallona aplica la regla de la diapositiva: si algun número passa de 600, para; si l'esquerre és més gran, gira a l'esquerra; si no, a la dreta. Fa un pas petit i tornen a mesurar. Després de cada arribada, roten els papers. Al final, ordenen les targetes de decisió amb la regla.|Grupos de 4: una mariposa, dos sensores (izquierdo y derecho) y un foco. El foco se coloca en un sitio del aula con la linterna apagada (o una hoja amarilla). Los sensores, a ambos lados de la mariposa, levantan una tarjeta de número según lo cerca y de cara que tienen el foco. La mariposa aplica la regla de la diapositiva: si algún número pasa de 600, para; si el izquierdo es mayor, gira a la izquierda; si no, a la derecha. Da un paso pequeño y vuelven a medir. Después de cada llegada, rotan los papeles. Al final, ordenan las tarjetas de decisión con la regla.",
        diu: ["Papallona, un sol pas cada vegada: primer mesurem, després ens movem.|Mariposa, un solo paso cada vez: primero medimos, después nos movemos.", "Sensors, si el focus és darrere vostre, quin número aixequeu?|Sensores, si el foco está detrás de vosotros, ¿qué número levantáis?", "Heu arribat? Quin número ha fet parar la papallona?|¿Habéis llegado? ¿Qué número ha hecho parar a la mariposa?"],
        slides: ['s10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 amb papers que roten|Grupos de 4 con papeles que rotan" },
      { min: 10, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. A «Detectiu/a de la llum» poden tocar «Ho he fet» i deixar-lo per a casa. Al pas de predir, demana que expliquin la tria a un company/a abans de comprovar-la.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En «Detective de la luz» pueden tocar «Lo he hecho» y dejarlo para casa. En el paso de predecir, pide que expliquen la elección a un compañero/a antes de comprobarla.",
        diu: ["Abans de triar A, B o C, digues-me per què.|Antes de elegir A, B o C, dime por qué.", "Quin bloc fa parar la papallona? Per què només de vegades?|¿Qué bloque hace parar a la mariposa? ¿Por qué solo a veces?", "A la papallona, quin bloc la fa parar? (l'«atura» del primer «si»)|En la mariposa, ¿qué bloque la hace parar? (el «para» del primer «si»)"],
        slides: ['s11'], app: "Del «Recorda» a la «Pausa activa»: preguntes de repàs, la missió, les 5 targetes de «Descobreix», la pregunta del 25, ordenar la papallona, «Detectiu/a de la llum», «On acabarà?» i «Toca el bloc».|Del «Recuerda» a la «Pausa activa»: preguntas de repaso, la misión, las 5 tarjetas de «Descubre», la pregunta del 25, ordenar la mariposa, «Detective de la luz», «¿Dónde terminará?» y «Toca el bloque».", org: "Individual|Individual" },
      { min: 12, t: "Mesurem la llum amb el Maqueen|Medimos la luz con el Maqueen", fase: 'robot',
        fa: "Grups de 3-4 per kit, amb papers: programador/a (MakeCode), pilot (encén i agafa el robot), mesurador/a (llanterna i regle) i secretari/ària (apunta). A MakeCode, carregueu el codi «mesurar la llum» de l'imprimible: el botó A mostra la llum esquerra i el B, la dreta. Mesureu i apunteu: de dia a la taula, amb la mà fent ombra, amb la llanterna a 30 cm i a 10 cm, de cara i de costat. Trieu el vostre llindar (més alt que la llum de l'aula, més baix que la llanterna a 10 cm). Si queda temps, carregueu la papallona amb el vostre llindar i proveu-la al racó fosc: robot a terra, llanterna fixa en un lloc i ningú no la mou mentre el robot avança. Seguretat: robot sempre a terra, no enlluerneu ningú amb la llanterna.|Grupos de 3-4 por kit, con papeles: programador/a (MakeCode), piloto (enciende y coge el robot), medidor/a (linterna y regla) y secretario/a (apunta). En MakeCode, cargad el código «medir la luz» del imprimible: el botón A muestra la luz izquierda y el B, la derecha. Medid y apuntad: de día en la mesa, con la mano haciendo sombra, con la linterna a 30 cm y a 10 cm, de cara y de lado. Elegid vuestro umbral (más alto que la luz del aula, más bajo que la linterna a 10 cm). Si queda tiempo, cargad la mariposa con vuestro umbral y probadla en el rincón oscuro: robot en el suelo, linterna fija en un sitio y nadie la mueve mientras el robot avanza. Seguridad: robot siempre en el suelo, no deslumbréis a nadie con la linterna.",
        diu: ["Els vostres números són iguals que els del simulador? Per què creieu que canvien?|¿Vuestros números son iguales que los del simulador? ¿Por qué creéis que cambian?", "Quin llindar heu triat? Expliqueu-me per què aquest i no un altre.|¿Qué umbral habéis elegido? Explicadme por qué este y no otro.", "Llanterna quieta: si la moveu, el robot no pot arribar mai.|Linterna quieta: si la movéis, el robot no puede llegar nunca."],
        slides: ['s12', 's13'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers|Grupos de 3-4 por kit con papeles" },
      { min: 8, t: "Reptes de la papallona|Retos de la mariposa", fase: 'ordinador',
        fa: "De tornada a l'ordinador, fan la pausa activa i els quatre reptes. Al repte 2, que llegeixin el programa en veu alta abans de canviar res: «si l'esquerra té més llum, el motor esquerre va…». Recorda que el programa ha de funcionar a totes les pistes.|De vuelta al ordenador, hacen la pausa activa y los cuatro retos. En el reto 2, que lean el programa en voz alta antes de cambiar nada: «si la izquierda tiene más luz, el motor izquierdo va…». Recuerda que el programa tiene que funcionar en todas las pistas.",
        diu: ["Per girar a l'esquerra, quin motor ha d'anar més lent?|Para girar a la izquierda, ¿qué motor tiene que ir más lento?", "Funciona a la pista 1 però no a la 3? Mira el tauler: quant marca la llum quan s'hi acosta?|¿Funciona en la pista 1 pero no en la 3? Mira el panel: ¿cuánto marca la luz cuando se acerca?", "Al repte 2 la papallona fuig: què hi ha al revés? (les velocitats dels motors)|En el reto 2 la mariposa huye: ¿qué está al revés? (las velocidades de los motores)"],
        slides: ['s14'], app: "«Pausa activa» i els reptes 1 a 4: fins a la flor, la papallona despistada, la papallona de la cercavila i l'arribada amb festa.|«Pausa activa» y los retos 1 a 4: hasta la flor, la mariposa despistada, la mariposa del pasacalles y la llegada con fiesta.", org: "Individual|Individual" },
      { min: 3, t: "Crea: la meva papallona|Crea: mi mariposa", fase: 'crea',
        fa: "Cada alumne/a personalitza la seva papallona (velocitats, llindar, celebració) i la desa. Qui no hi arribi la pot acabar a casa.|Cada alumno/a personaliza su mariposa (velocidades, umbral, celebración) y la guarda. Quien no llegue la puede terminar en casa.",
        diu: ["Com celebra la teva papallona que ha trobat la llum?|¿Cómo celebra tu mariposa que ha encontrado la luz?", "Quin llindar has triat i per què?|¿Qué umbral has elegido y por qué?", "Has provat la papallona a les dues pistes? (ha de funcionar a totes dues)|¿Has probado la mariposa en las dos pistas? (tiene que funcionar en las dos)"],
        slides: ['s15'], app: "Pas «Crea»: La meva papallona.|Paso «Crea»: Mi mariposa.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals de l'app i fes una pregunta del tiquet a cada alumne/a a la porta.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales de la app y haz una pregunta del ticket a cada alumno/a en la puerta.",
        diu: ["Qui em diu un bon llindar per a una sala fosca amb un focus?|¿Quién me dice un buen umbral para una sala oscura con un foco?", "Si llum esquerra és més gran, cap a on gira la papallona?|Si luz izquierda es mayor, ¿hacia dónde gira la mariposa?", "Per què el programa funciona encara que movem el focus? (perquè mira la llum, no el temps)|¿Por qué el programa funciona aunque movamos el foco? (porque mira la luz, no el tiempo)"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa un llindar molt alt (900 o 1000) «per assegurar-se» i el robot no para mai.|Pone un umbral muy alto (900 o 1000) «para asegurarse» y el robot no para nunca.",
        "Que executi el programa i miri el tauler: quin és el número més gran que arriba a marcar a prop del focus? Que triï un llindar una mica més baix.|Que ejecute el programa y mire el panel: ¿cuál es el número más grande que llega a marcar cerca del foco? Que elija un umbral un poco más bajo."],
      ["Confon cap on ha de girar: quan l'esquerra té més llum, fa anar més ràpid el motor esquerre.|Confunde hacia dónde tiene que girar: cuando la izquierda tiene más luz, hace ir más rápido el motor izquierdo.",
        "Demana-li que es posi dret/a i camini fent un arc cap a l'esquerra: quin peu fa passes més llargues? El de fora, el dret.|Pídele que se ponga de pie y camine haciendo un arco hacia la izquierda: ¿qué pie da pasos más largos? El de fuera, el derecho."],
      ["Fa servir «llum esquerra > 600» sol i la papallona fa voltes sobre el focus sense parar.|Usa «luz izquierda > 600» solo y la mariposa da vueltas sobre el foco sin parar.",
        "Pregunta: si el focus queda just a la dreta, el sensor esquerre el veu? Que afegeixi «o llum dreta > 600».|Pregunta: si el foco queda justo a la derecha, ¿el sensor izquierdo lo ve? Que añada «o luz derecha > 600»."],
      ["Programa la papallona amb temps fixos per a una pista i no entén per què falla a les altres.|Programa la mariposa con tiempos fijos para una pista y no entiende por qué falla en las otras.",
        "Que miri les pistes una a una: el focus és al mateix lloc? Què pot saber el robot del focus que no depengui del temps?|Que mire las pistas una a una: ¿el foco está en el mismo sitio? ¿Qué puede saber el robot del foco que no dependa del tiempo?"],
      ["Al robot real, la papallona no troba la llanterna perquè l'aula és massa clara.|En el robot real, la mariposa no encuentra la linterna porque el aula es demasiado clara.",
        "Que torni a mesurar la llum de l'aula i la de la llanterna: hi ha prou diferència? Enfosquiu el racó o acosteu la llanterna.|Que vuelva a medir la luz del aula y la de la linterna: ¿hay suficiente diferencia? Oscureced el rincón o acercad la linterna."],
      ["Fa girar la papallona amb un motor a velocitat 20 o 25 i, al robot real, aquella roda no gira i el robot fa cercles petits al voltant d'ella.|Hace girar la mariposa con un motor a velocidad 20 o 25 y, en el robot real, esa rueda no gira y el robot hace círculos pequeños a su alrededor.",
        "Recorda la zona morta de la unitat 1: per sota de ~30 el motor no té prou força. Que triï un motor lent de 40-60, no de 20.|Recuerda la zona muerta de la unidad 1: por debajo de ~30 el motor no tiene suficiente fuerza. Que elija un motor lento de 40-60, no de 20."]
    ],
    diff: {
      mes: "Fer una papallona «tímida» que s'acosta al focus però para abans (llindar més baix) i una d'«atrevida» que hi arriba; comparar on paren. Al robot real, provar dues llanternes i explicar cap a quina va i per què.|Hacer una mariposa «tímida» que se acerca al foco pero para antes (umbral más bajo) y una «atrevida» que llega; comparar dónde paran. En el robot real, probar dos linternas y explicar hacia cuál va y por qué.",
      menys: "Fer primer el repte 1 amb el tauler a la vista i anotar en un paper la llum a diferents distàncies. Al repte 3, partir del programa arreglat del repte 2 (és el mateix).|Hacer primero el reto 1 con el panel a la vista y anotar en un papel la luz a diferentes distancias. En el reto 3, partir del programa arreglado del reto 2 (es el mismo)."
    },
    aval: {
      ticket: ["Quin número dona el sensor de llum a les fosques i quin a prop d'un focus?|¿Qué número da el sensor de luz a oscuras y cuál cerca de un foco?",
        "Llum esquerra 500, llum dreta 200: cap a on gira la papallona i quin motor va més lent?|Luz izquierda 500, luz derecha 200: ¿hacia dónde gira la mariposa y qué motor va más lento?"],
      rubric: [
        ["Valors de llum i llindar|Valores de luz y umbral", "Tria un llindar entre la llum normal i la del focus i explica per què.|Elige un umbral entre la luz normal y la del foco y explica por qué.", "Fa servir un llindar, però l'escull a l'atzar i el canvia fins que funciona.|Usa un umbral, pero lo elige al azar y lo cambia hasta que funciona."],
        ["Comparar esquerra i dreta|Comparar izquierda y derecha", "Relaciona «esquerra > dreta» amb girar a l'esquerra i ajusta els motors correctament.|Relaciona «izquierda > derecha» con girar a la izquierda y ajusta los motores correctamente.", "Sap que cal comparar, però confon quin motor ha d'anar més lent.|Sabe que hay que comparar, pero confunde qué motor tiene que ir más lento."],
        ["Robot de veritat|Robot de verdad", "Mesura i apunta valors reals i els compara amb el simulador.|Mide y apunta valores reales y los compara con el simulador.", "Fa les mesures amb ajuda, però encara no les fa servir per triar el llindar.|Hace las medidas con ayuda, pero todavía no las usa para elegir el umbral."],
        ["Explicar el que fa el robot|Explicar lo que hace el robot", "Explica en veu alta, pas a pas, què fa la papallona a cada volta (mesura, decideix, mou).|Explica en voz alta, paso a paso, qué hace la mariposa en cada vuelta (mide, decide, mueve).", "Sap que el robot va cap a la llum, però encara no explica com ho decideix.|Sabe que el robot va hacia la luz, pero todavía no explica cómo lo decide."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir els reptes i fer «Detectiu/a de la llum»: un mapa de la llum de casa amb notes de fosc, normal i molta llum, a dues hores diferents del dia.|En casa, con el móvil, podéis repetir los retos y hacer «Detective de la luz»: un mapa de la luz de casa con notas de oscuro, normal y mucha luz, a dos horas diferentes del día.",
    slides: [
      { id: 's1', k: 'portada', t: "El robot papallona|El robot mariposa", x: "Unitat 5 · Llum, so i LED. Avui el Maqueen aprendrà a notar la llum i a anar-hi tot sol.|Unidad 5 · Luz, sonido y LED. Hoy el Maqueen aprenderá a notar la luz y a ir hacia ella él solo.",
        nota: "Presenta l'objectiu: al final de la classe tindreu una papallona que troba el focus, encara que el canviem de lloc.|Presenta el objetivo: al final de la clase tendréis una mariposa que encuentra el foco, aunque lo cambiemos de sitio." },
      { id: 's2', k: 'pregunta', t: "Com sap la papallona on és la llum?|¿Cómo sabe la mariposa dónde está la luz?", x: "Moltes papallones de nit volen cap als fanals. No tenen mapa: què deuen fer?|Muchas mariposas nocturnas vuelan hacia las farolas. No tienen mapa: ¿qué deben de hacer?",
        nota: "Recull idees sense corregir. Torna-hi després de la diapositiva 7: comparen la llum de cada costat i giren.|Recoge ideas sin corregir. Vuelve a ello después de la diapositiva 7: comparan la luz de cada lado y giran." },
      { id: 's3', k: 'repas', t: "Recordem: «per sempre» + «si»|Recordemos: «para siempre» + «si»", punts: ["El sensor de línia dona 0 (blanc) o 1 (negre).|El sensor de línea da 0 (blanco) o 1 (negro).", "Els ultrasons donen centímetres; 500 si no veuen res.|Los ultrasonidos dan centímetros; 500 si no ven nada.", "El «si» dins del «per sempre» pregunta al sensor una vegada i una altra.|El «si» dentro del «para siempre» pregunta al sensor una y otra vez."],
        nota: "Pregunta què tenen en comú els tres sensors: tots donen un número que el programa compara.|Pregunta qué tienen en común los tres sensores: todos dan un número que el programa compara." },
      { id: 's4', k: 'anim', t: "Dos ulls per a la llum|Dos ojos para la luz", anim: 'k5eyes', x: "Llum esquerra i llum dreta: de 0 (fosc) a 1023 (molta llum).|Luz izquierda y luz derecha: de 0 (oscuro) a 1023 (mucha luz).",
        nota: "Assenyala els sensors en un robot real: són a les cantonades del davant. Fes notar que el focus fa pujar més el sensor del costat on és.|Señala los sensores en un robot real: están en las esquinas de delante. Haz notar que el foco hace subir más el sensor del lado donde está." },
      { id: 's5', k: 'anim', t: "Quanta llum?|¿Cuánta luz?", anim: 'k5meter', x: "A les fosques, uns 25; de dia, uns 260; amb un focus a prop, molt més.|A oscuras, unos 25; de día, unos 260; con un foco cerca, mucho más.",
        nota: "Aclareix que són els valors del simulador: al robot real canviaran una mica segons l'aula. Per això avui mesurarem.|Aclara que son los valores del simulador: en el robot real cambiarán un poco según el aula. Por eso hoy mediremos." },
      { id: 's6', k: 'robo', t: "El llindar: arribar a la flor|El umbral: llegar a la flor", x: "Si llum esquerra > 400, atura; si no, endavant. On s'aturarà?|Si luz izquierda > 400, para; si no, adelante. ¿Dónde se parará?",
        robo: { w: { w: 120, h: 50, dark: true, bot: [15, 25, 90], lamp: { x: 100, y: 25 }, walls: [[103, 17, 6, 16]], zones: [{ id: 'f', r: [68, 13, 24, 24], col: 'yellow', label: 'FLOR|FLOR' }], time: 12 }, prog: 'forever{ if:lL>400{ stop:all } else{ run:all,fwd,120 } }' },
        tip: "Mireu el tauler: la llum puja a mesura que s'acosta.|Mirad el panel: la luz sube a medida que se acerca.", nota: "Que prediguin amb el dit on s'aturarà. Després de l'execució, pregunta què passaria amb un llindar de 300 (para abans) i de 450 (més a prop).|Que predigan con el dedo dónde se parará. Después de la ejecución, pregunta qué pasaría con un umbral de 300 (para antes) y de 450 (más cerca)." },
      { id: 's7', k: 'anim', t: "Comparar esquerra i dreta|Comparar izquierda y derecha", anim: 'k5two', x: "Si llum esquerra > llum dreta, el focus és a l'esquerra: gira a l'esquerra.|Si luz izquierda > luz derecha, el foco está a la izquierda: gira a la izquierda.",
        nota: "Torna a la pregunta de la diapositiva 2. Recorda com es gira amb els motors (unitat 1): per girar a l'esquerra, el motor esquerre més lent.|Vuelve a la pregunta de la diapositiva 2. Recuerda cómo se gira con los motores (unidad 1): para girar a la izquierda, el motor izquierdo más lento." },
      { id: 's8', k: 'robo', t: "La papallona en directe|La mariposa en directo", x: "Compara els dos sensors a cada volta i para quan la llum passa de 600.|Compara los dos sensores en cada vuelta y para cuando la luz pasa de 600.",
        robo: { w: { w: 120, h: 80, dark: true, bot: [18, 58, 90], lamp: { x: 98, y: 16 }, zones: [{ id: 'f', c: [98, 16, 22], col: 'yellow', label: 'LLUM|LUZ' }], time: 20 }, prog: 'forever{ if:lL>600||lR>600{ stop:all } else{ if:lL>lR{ run:L,fwd,50 run:R,fwd,130 } else{ run:L,fwd,130 run:R,fwd,50 } } }' },
        blocks: ["per sempre|para siempre", "si llum esquerra > 600 o llum dreta > 600 → atura|si luz izquierda > 600 o luz derecha > 600 → para", "si no, si llum esquerra > llum dreta → gira a l'esquerra|si no, si luz izquierda > luz derecha → gira a la izquierda", "si no → gira a la dreta|si no → gira a la derecha"],
        nota: "Fes notar el camí en zig-zag: el robot corregeix a cada volta, com la papallona humana que farem després.|Haz notar el camino en zigzag: el robot corrige en cada vuelta, como la mariposa humana que haremos después." },
      { id: 's9', k: 'robo', t: "Compte: un llindar massa alt|Cuidado: un umbral demasiado alto", x: "Llindar 900. S'aturarà a la flor?|Umbral 900. ¿Se parará en la flor?",
        robo: { w: { w: 120, h: 50, dark: true, bot: [15, 25, 90], lamp: { x: 100, y: 25 }, walls: [[103, 17, 6, 16]], zones: [{ id: 'f', r: [68, 13, 24, 24], col: 'yellow', label: 'FLOR|FLOR' }], time: 9 }, prog: 'forever{ if:lL>900{ stop:all } else{ run:all,fwd,120 } }' },
        nota: "No para: aquest focus no passa de 450. Conclusió: el llindar es tria mesurant, no endevinant.|No para: este foco no pasa de 450. Conclusión: el umbral se elige midiendo, no adivinando." },
      { id: 's10', k: 'activitat', t: "La papallona humana|La mariposa humana", timer: 10, punts: ["Papallona, sensor esquerre, sensor dret i focus.|Mariposa, sensor izquierdo, sensor derecho y foco.", "Els sensors aixequen una targeta de número.|Los sensores levantan una tarjeta de número.", "Algun > 600 → para. Esquerre més gran → gira a l'esquerra. Si no → a la dreta.|Alguno > 600 → para. Izquierdo mayor → gira a la izquierda. Si no → a la derecha.", "Un pas i tornem a mesurar. Després, canvieu els papers.|Un paso y volvemos a medir. Después, cambiad los papeles."],
        nota: "Deixa la regla projectada. Si un sensor té el focus darrere, ha d'aixecar el número baix: els sensors miren endavant.|Deja la regla proyectada. Si un sensor tiene el foco detrás, tiene que levantar el número bajo: los sensores miran hacia delante." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre «El robot papallona».|Abre «El robot mariposa».", "Fes fins a «Toca el bloc».|Haz hasta «Toca el bloque».", "Para a la «Pausa activa»: anirem als robots.|Para en la «Pausa activa»: iremos a los robots."],
        nota: "Passeja i pregunta pels números de la llum: què marcava a la sala fosca?|Pasea y pregunta por los números de la luz: ¿qué marcaba en la sala oscura?" },
      { id: 's12', k: 'activitat', t: "Mesurem la llum de veritat|Medimos la luz de verdad", timer: 12, punts: ["Carregueu el codi: A = llum esquerra, B = llum dreta.|Cargad el código: A = luz izquierda, B = luz derecha.", "Mesureu: aula, ombra, llanterna a 30 cm i a 10 cm.|Medid: aula, sombra, linterna a 30 cm y a 10 cm.", "Trieu el vostre llindar i apunteu-lo.|Elegid vuestro umbral y apuntadlo.", "Robot a terra; no enlluerneu ningú.|Robot en el suelo; no deslumbréis a nadie."],
        blocks: ["en prémer el botó A → mostra el número llum esquerra|al pulsar el botón A → muestra el número luz izquierda", "en prémer el botó B → mostra el número llum dreta|al pulsar el botón B → muestra el número luz derecha"],
        nota: "Escriu a la pissarra una taula amb les mesures de cada grup: es veurà que els números canvien d'un robot a l'altre. Per això cal calibrar.|Escribe en la pizarra una tabla con las medidas de cada grupo: se verá que los números cambian de un robot a otro. Por eso hay que calibrar." },
      { id: 's13', k: 'robo', t: "La papallona al robot real|La mariposa en el robot real", x: "Canvieu el 600 pel vostre llindar abans de descarregar-la.|Cambiad el 600 por vuestro umbral antes de descargarla.",
        robo: { w: { w: 120, h: 80, dark: true, bot: [18, 58, 90], lamp: { x: 98, y: 16 }, zones: [{ id: 'f', c: [98, 16, 22], col: 'yellow', label: 'LLUM|LUZ' }], time: 20 }, prog: 'forever{ if:lL>600||lR>600{ stop:all } else{ if:lL>lR{ run:L,fwd,50 run:R,fwd,130 } else{ run:L,fwd,130 run:R,fwd,50 } } }' },
        nota: "Racó fosc, llanterna fixa a terra o en una cadira, de cara al robot. Si el robot gira sempre cap al mateix costat, que comprovin quin motor és M1 (esquerre) i M2 (dret).|Rincón oscuro, linterna fija en el suelo o en una silla, de cara al robot. Si el robot gira siempre hacia el mismo lado, que comprueben qué motor es M1 (izquierdo) y M2 (derecho)." },
      { id: 's14', k: 'repte', t: "Reptes de la papallona|Retos de la mariposa", timer: 8, punts: ["1. Fins a la flor|1. Hasta la flor", "2. La papallona despistada|2. La mariposa despistada", "3. La papallona de la cercavila (4 pistes)|3. La mariposa del pasacalles (4 pistas)", "4. Arribada amb festa|4. Llegada con fiesta"],
        nota: "Al repte 2, l'error és que els motors giren al revés: fuig de la llum. Pregunta: cap a on gira quan l'esquerra té més llum?|En el reto 2, el error es que los motores giran al revés: huye de la luz. Pregunta: ¿hacia dónde gira cuando la izquierda tiene más luz?" },
      { id: 's15', k: 'activitat', t: "Crea: la meva papallona|Crea: mi mariposa", timer: 3, x: "Tria velocitats, llindar i una celebració pròpia.|Elige velocidades, umbral y una celebración propia.",
        nota: "Que l'ensenyin a un company/a: la seva celebració és diferent?|Que se la enseñen a un compañero/a: ¿su celebración es diferente?" },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Els sensors de llum donen de 0 a 1023.|Los sensores de luz dan de 0 a 1023.", "El llindar separa poca llum de molta, i es tria mesurant.|El umbral separa poca luz de mucha, y se elige midiendo.", "Comparant esquerra i dreta, el robot gira cap a la llum.|Comparando izquierda y derecha, el robot gira hacia la luz."],
        nota: "Anuncia la propera sessió: farem alarmes per al museu amb so, llums i botons.|Anuncia la próxima sesión: haremos alarmas para el museo con sonido, luces y botones." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quant marca el sensor a les fosques? I a prop del focus?|¿Cuánto marca el sensor a oscuras? ¿Y cerca del foco?", "Esquerra 500, dreta 200: cap a on gira?|Izquierda 500, derecha 200: ¿hacia dónde gira?"],
        nota: "Anota qui confon el sentit del gir: a la sessió 2 hi tornarem amb l'alarma.|Anota quién confunde el sentido del giro: en la sesión 2 volveremos a ello con la alarma." }
    ],
    print: [
      { id: 'p1', t: "Targetes de la papallona humana|Tarjetas de la mariposa humana", k: 'targetes',
        intro: "Un paquet per grup de 4. Els dos sensors en tenen un cadascun: aixequen el número que s'assembla més a la llum que reben (focus darrere = 25; lluny de cara = 260; a prop = 700; tocant = 900). Les targetes de decisió són per a la papallona.|Un paquete por grupo de 4. Los dos sensores tienen uno cada uno: levantan el número que se parece más a la luz que reciben (foco detrás = 25; lejos de cara = 260; cerca = 700; tocando = 900). Las tarjetas de decisión son para la mariposa.",
        items: [
          { t: "25 🌙 fosc|25 🌙 oscuro", n: 2 }, { t: "260 ☁️ normal|260 ☁️ normal", n: 2 }, { t: "700 🔆 molt a prop|700 🔆 muy cerca", n: 2 }, { t: "900 ☀️ tocant|900 ☀️ tocando", n: 2 },
          { t: "Gira a l'esquerra ↰|Gira a la izquierda ↰", n: 1 }, { t: "Gira a la dreta ↱|Gira a la derecha ↱", n: 1 }, { t: "Para: he arribat! 🦋|Para: ¡he llegado! 🦋", n: 1 }
        ] },
      { id: 'p2', t: "Codi MakeCode: la llum i la papallona|Código MakeCode: la luz y la mariposa", k: 'codi',
        intro: "A makecode.microbit.org: nou projecte → Extensions → «maqueen» → JavaScript → enganxeu el codi → Descarrega. Apunteu les vostres mesures al costat.|En makecode.microbit.org: nuevo proyecto → Extensiones → «maqueen» → JavaScript → pegad el código → Descarga. Apuntad vuestras medidas al lado.",
        items: [
          { t: "Mesurar la llum (A = esquerra, B = dreta)|Medir la luz (A = izquierda, B = derecha)", prog: 'A{ num:lL } B{ num:lR }' },
          { t: "La papallona (canvieu el 600 pel vostre llindar)|La mariposa (cambiad el 600 por vuestro umbral)", prog: 'forever{ if:lL>600||lR>600{ stop:all } else{ if:lL>lR{ run:L,fwd,50 run:R,fwd,130 } else{ run:L,fwd,130 run:R,fwd,50 } } }' }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Alarmes ---------- */
  'k5-2': {
    intro: "Sessió dels avisos: l'alumnat coneix els actuadors que avisen (brunzidor, llums del cotxe, llums de sota i matriu de LEDs), calcula quant tarden les notes i les icones, i programa alarmes amb sensor + condició + avisos. També estrena el guió «en prémer el botó A», que deixa que una persona doni ordres al robot. És important perquè és la primera vegada que tenen en compte el temps que tarden els blocs i que diversos guions funcionen alhora. La classe combina demos, una activitat de «partitures» per parelles, l'app, la prova amb el robot real a la taula i quatre reptes.|Sesión de los avisos: el alumnado conoce los actuadores que avisan (zumbador, luces del coche, luces de abajo y matriz de LEDs), calcula cuánto tardan las notas y los iconos, y programa alarmas con sensor + condición + avisos. También estrena el guion «al pulsar el botón A», que deja que una persona dé órdenes al robot. Es importante porque es la primera vez que tienen en cuenta el tiempo que tardan los bloques y que varios guiones funcionan a la vez. La clase combina demos, una actividad de «partituras» por parejas, la app, la prueba con el robot real en la mesa y cuatro retos.",
    claus: [
      "Els actuadors fan coses: per avisar, el Maqueen té brunzidor, llums del cotxe, 4 llums de sota i la matriu de 5 × 5 LEDs.|Los actuadores hacen cosas: para avisar, el Maqueen tiene zumbador, luces del coche, 4 luces de abajo y la matriz de 5 × 5 LEDs.",
      "Les notes tarden: 1 temps = 0,5 s; mentre sonen (i mentre surt una icona, 0,4 s), el programa espera.|Las notas tardan: 1 tiempo = 0,5 s; mientras suenan (y mientras sale un icono, 0,4 s), el programa espera.",
      "Una alarma és sensor + condició + avisos, i el «si no» la torna a la calma.|Una alarma es sensor + condición + avisos, y el «si no» la devuelve a la calma.",
      "El guió «en prémer el botó A» s'executa cada vegada que algú prem A, alhora que els altres guions.|El guion «al pulsar el botón A» se ejecuta cada vez que alguien pulsa A, a la vez que los otros guiones."
    ],
    prev: [
      "Els sensors de llum i el llindar (sessió 1 d'aquesta unitat).|Los sensores de luz y el umbral (sesión 1 de esta unidad).",
      "Els ultrasons: distància en cm i 500 si no veuen res (unitat 3).|Los ultrasonidos: distancia en cm y 500 si no ven nada (unidad 3).",
      "El bloc «repeteix» per no copiar blocs (unitat 2).|El bloque «repite» para no copiar bloques (unidad 2).",
      "Fraccions senzilles: 1/2 i 1/4 (matemàtiques).|Fracciones sencillas: 1/2 y 1/4 (matemáticas)."
    ],
    faq: [
      ["Per què les notes van en «temps» i no en segons?|¿Por qué las notas van en «tiempos» y no en segundos?",
        "Com a la música: el temps és el pols de la cançó. A MakeCode, si no canvieu el tempo, 1 temps = 0,5 s (120 pulsacions per minut).|Como en la música: el tiempo es el pulso de la canción. En MakeCode, si no cambiáis el tempo, 1 tiempo = 0,5 s (120 pulsaciones por minuto)."],
      ["Què vol dir el ′ de do′?|¿Qué quiere decir el ′ de do′?",
        "Que és la nota de l'octava de dalt, més aguda: do′ sona més agut que do.|Que es la nota de la octava de arriba, más aguda: do′ suena más agudo que do."],
      ["Si premo A dues vegades molt ràpid, sona dues vegades?|Si pulso A dos veces muy rápido, ¿suena dos veces?",
        "El guió s'executa cada vegada que es prem, però si encara està sonant, la segona pulsació pot esperar o perdre's. Proveu-ho al robot real!|El guion se ejecuta cada vez que se pulsa, pero si todavía está sonando, la segunda pulsación puede esperar o perderse. ¡Probadlo en el robot real!"],
      ["Per què l'alarma necessita llums i so?|¿Por qué la alarma necesita luces y sonido?",
        "Perquè no tothom sent o veu igual, i no sempre mirem o escoltem: un avís doble arriba a més persones.|Porque no todo el mundo oye o ve igual, y no siempre miramos o escuchamos: un aviso doble llega a más personas."],
      ["El sensor de distància pot veure algú que arriba de costat?|¿El sensor de distancia puede ver a alguien que llega de lado?",
        "No gaire: els ultrasons miren endavant en un con estret. Per vigilar una porta, el robot ha de mirar cap a la porta.|No mucho: los ultrasonidos miran hacia delante en un cono estrecho. Para vigilar una puerta, el robot tiene que mirar hacia la puerta."],
      ["Podem fer una cançó sencera?|¿Podemos hacer una canción entera?",
        "Sí, amb moltes notes una darrere l'altra; recordeu que el programa espera que acabi cada nota.|Sí, con muchas notas una detrás de otra; recordad que el programa espera a que acabe cada nota."]
    ],
    tec: [
      ["A MakeCode no apareixen els blocs del Maqueen (o el codi enganxat surt en vermell).|En MakeCode no aparecen los bloques del Maqueen (o el código pegado sale en rojo).",
        "Falta l'extensió: Extensions → busqueu «maqueen» → trieu «maqueen» (DFRobot). Els blocs surten a la categoria «Maqueen v5». Si el codi fa servir les llums de sota, afegiu també «neopixel».|Falta la extensión: Extensiones → buscad «maqueen» → elegid «maqueen» (DFRobot). Los bloques salen en la categoría «Maqueen v5». Si el código usa las luces de abajo, añadid también «neopixel»."],
      ["Després de descarregar, la micro:bit mostra una creu (X) que parpelleja i el robot no fa res.|Después de descargar, la micro:bit muestra una cruz (X) que parpadea y el robot no hace nada.",
        "És el bloc «initialize via I2C until success» (el primer del codi; en castellà, «Inicializar MaqueenV5 hasta éxito»): la micro:bit no troba el Maqueen. Comproveu l'interruptor del robot, les 3 piles AA i que la micro:bit estigui ben endollada fins al fons. Quan el troba, mostra un ✓.|Es el bloque «Inicializar MaqueenV5 hasta éxito» («initialize via I2C until success» en inglés), el primero del código: la micro:bit no encuentra el Maqueen. Comprobad el interruptor del robot, las 3 pilas AA y que la micro:bit esté bien enchufada hasta el fondo. Cuando lo encuentra, muestra un ✓."],
      ["El robot real no sona o sona massa fluix.|El robot real no suena o suena muy flojo.",
        "Comproveu que les piles estiguin carregades. Amb la micro:bit V2, el so també surt pel seu altaveu. A MakeCode, el bloc de volum de la categoria Música («set volume», de 0 a 255), posat a «en iniciar», el puja o l'abaixa.|Comprobad que las pilas estén cargadas. Con la micro:bit V2, el sonido también sale por su altavoz. En MakeCode, el bloque de volumen de la categoría Música («set volume», de 0 a 255), puesto en «al iniciar», lo sube o lo baja."],
      ["A l'aula hi ha massa soroll quan tots els robots sonen alhora.|En el aula hay demasiado ruido cuando todos los robots suenan a la vez.",
        "Acordeu un volum baix per a tothom (bloc de volum a 50-80), notes curtes (1/4) i torns per provar la sirena.|Acordad un volumen bajo para todos (bloque de volumen a 50-80), notas cortas (1/4) y turnos para probar la sirena."],
      ["Al simulador, els botons A i B no fan res.|En el simulador, los botones A y B no hacen nada.",
        "Cal tenir el guió «en prémer el botó A» amb blocs a dins i el programa en marxa (▶). A les proves de la missió, els botons es premen sols en un moment fix.|Hay que tener el guion «al pulsar el botón A» con bloques dentro y el programa en marcha (▶). En las pruebas de la misión, los botones se pulsan solos en un momento fijo."]
    ],
    seg: [
      "Robot: 3 piles AA del mateix tipus i carregades; no barregeu piles noves i velles. Interruptor apagat mentre es munta, s'endolla la micro:bit o es canvien les piles.|Robot: 3 pilas AA del mismo tipo y cargadas; no mezcléis pilas nuevas y viejas. Interruptor apagado mientras se monta, se enchufa la micro:bit o se cambian las pilas.",
      "Volum moderat: notes curtes i volum baix protegeixen les orelles de tothom; qui sigui sensible al soroll pot fer de secretari/ària lluny dels robots.|Volumen moderado: notas cortas y volumen bajo protegen los oídos de todos; quien sea sensible al ruido puede hacer de secretario/a lejos de los robots.",
      "Llums que parpellegen: eviteu parpelleigs molt ràpids i llargs; si algú té molèsties amb llums intermitents, que s'ho miri de lluny o de costat.|Luces que parpadean: evitad parpadeos muy rápidos y largos; si alguien tiene molestias con luces intermitentes, que lo mire de lejos o de lado.",
      "A la taula, el robot sempre al centre i lluny de la vora, encara que el programa no el faci moure.|En la mesa, el robot siempre en el centro y lejos del borde, aunque el programa no lo haga moverse."
    ],
    extra: [
      "Alarma amb contrasenya: l'alarma sona fins que algú prem A i després B (pista: un guió per a cada botó i una icona que diu en quin pas sou).|Alarma con contraseña: la alarma suena hasta que alguien pulsa A y después B (pista: un guion para cada botón y un icono que dice en qué paso estáis).",
      "Melodia del museu: componeu una melodia de 4 segons exactes i escriviu-ne la partitura amb notes i durades.|Melodía del museo: componed una melodía de 4 segundos exactos y escribid su partitura con notas y duraciones.",
      "Alarma de dos nivells: groc i nota suau a menys de 40 cm; vermell i sirena a menys de 20 cm.|Alarma de dos niveles: amarillo y nota suave a menos de 40 cm; rojo y sirena a menos de 20 cm."
    ],
    trans: [
      "Sessió 1: el sensor de llum torna a sortir a la caixa forta; unitat 3: els ultrasons vigilen la vitrina.|Sesión 1: el sensor de luz vuelve a salir en la caja fuerte; unidad 3: los ultrasonidos vigilan la vitrina.",
      "Música: notes, agut i greu, figures i durades (temps, mig temps).|Música: notas, agudo y grave, figuras y duraciones (tiempo, medio tiempo).",
      "Matemàtiques: sumar fraccions i decimals per calcular la durada d'una sirena (6 × 0,25 s = 1,5 s).|Matemáticas: sumar fracciones y decimales para calcular la duración de una sirena (6 × 0,25 s = 1,5 s)."
    ],
    obj: [
      "L'alumne/a identifica els actuadors que fan servir les alarmes del Maqueen (brunzidor, llums del cotxe, llums de sota i matriu) i els combina.|El alumno/a identifica los actuadores que usan las alarmas del Maqueen (zumbador, luces del coche, luces de abajo y matriz) y los combina.",
      "L'alumne/a calcula quant tarden les notes (1 temps = 0,5 s) i les icones (0,4 s) i ho té en compte en un programa.|El alumno/a calcula cuánto tardan las notas (1 tiempo = 0,5 s) y los iconos (0,4 s) y lo tiene en cuenta en un programa.",
      "L'alumne/a programa una alarma amb un sensor, una condició i avisos, que torna a la calma amb el «si no».|El alumno/a programa una alarma con un sensor, una condición y avisos, que vuelve a la calma con el «si no».",
      "L'alumne/a fa servir el guió «en prémer el botó A» perquè una persona doni ordres al robot.|El alumno/a usa el guion «al pulsar el botón A» para que una persona dé órdenes al robot."
    ],
    comp: [
      "Competència digital (CD5): programar respostes a esdeveniments i a sensors|Competencia digital (CD5): programar respuestas a eventos y a sensores",
      "Pensament computacional: esdeveniments, bucles amb repeteix i condicions amb «si… si no»|Pensamiento computacional: eventos, bucles con repite y condiciones con «si… si no»",
      "Educació musical: notes, agut i greu, durada en temps|Educación musical: notas, agudo y grave, duración en tiempos",
      "Ciutadania: senyals d'avís i seguretat (sirenes, alarmes accessibles amb so i llum)|Ciudadanía: señales de aviso y seguridad (sirenas, alarmas accesibles con sonido y luz)"
    ],
    vocab: [
      ["Actuador|Actuador", "Part del robot que fa alguna cosa: motors, llums, brunzidor, pantalla.|Parte del robot que hace algo: motores, luces, zumbador, pantalla."],
      ["Brunzidor|Zumbador", "Altaveu petit del Maqueen que fa notes.|Altavoz pequeño del Maqueen que hace notas."],
      ["Temps (de nota)|Tiempo (de nota)", "Durada d'una nota: 1 temps = 0,5 segons.|Duración de una nota: 1 tiempo = 0,5 segundos."],
      ["Esdeveniment|Evento", "Una cosa que passa (prémer el botó A) i que posa en marxa un guió.|Algo que pasa (pulsar el botón A) y que pone en marcha un guion."],
      ["Alarma|Alarma", "Programa que vigila un sensor i avisa quan passa alguna cosa.|Programa que vigila un sensor y avisa cuando pasa algo."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Alarmes»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Alarmas»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit Maqueen per grup de 3-4 amb piles carregades i cable USB|Un kit Maqueen por grupo de 3-4 con pilas cargadas y cable USB",
        "Una «obra d'art» per grup (un got, una figureta o una llanterna de paper) i un llibre que faci de visitant|Una «obra de arte» por grupo (un vaso, una figurita o un farolillo de papel) y un libro que haga de visitante"
      ],
      imprimir: ["Fitxa: partitures d'alarma|Ficha: partituras de alarma", "Codi MakeCode: timbre i alarma del museu|Código MakeCode: timbre y alarma del museo"],
      prep: [
        "Imprimir una fitxa de partitures per parella.|Imprimir una ficha de partituras por pareja.",
        "Comprovar que el so de les micro:bit V2 funciona (el brunzidor és a la placa del Maqueen) i acordar un volum raonable.|Comprobar que el sonido de las micro:bit V2 funciona (el zumbador está en la placa del Maqueen) y acordar un volumen razonable.",
        "Preparar a cada taula de robots un espai de 60 cm: el robot mira cap a on arribarà el visitant (el llibre).|Preparar en cada mesa de robots un espacio de 60 cm: el robot mira hacia donde llegará el visitante (el libro).",
        "Provar abans les demos de les diapositives 6, 7 i 8.|Probar antes las demos de las diapositivas 6, 7 y 8."
      ]
    },
    plan: [
      { min: 4, t: "Benvinguda: el museu obre de nit|Bienvenida: el museo abre de noche", fase: 'inici',
        fa: "Presenta l'encàrrec del museu. Pregunta quins avisos coneixen (sirenes, el timbre de l'escola, l'alarma d'un cotxe) i què tenen en comú. Repassa la papallona amb la pregunta de la diapositiva 3.|Presenta el encargo del museo. Pregunta qué avisos conocen (sirenas, el timbre del cole, la alarma de un coche) y qué tienen en común. Repasa la mariposa con la pregunta de la diapositiva 3.",
        diu: ["Quins avisos sentiu o veieu cada dia?|¿Qué avisos oís o veis cada día?", "Per què les ambulàncies porten sirena i llums alhora?|¿Por qué las ambulancias llevan sirena y luces a la vez?", "Si una alarma només fes llum, qui no se n'assabentaria? (qui no la mira o no hi veu bé)|Si una alarma solo hiciera luz, ¿quién no se enteraría? (quien no la mira o no ve bien)"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Actuadors, notes, botons i alarmes|Actuadores, notas, botones y alarmas", fase: 'teoria',
        fa: "Presenta els quatre actuadors que avisen. Explica les notes i la durada en temps amb la línia de temps i fes que piquin de mans 1 temps (0,5 s) i 2 temps (1 s). Executa la sirena i la demo dels botons. Acaba amb l'alarma de la vitrina: abans d'executar-la, que diguin què passarà quan el visitant se'n vagi.|Presenta los cuatro actuadores que avisan. Explica las notas y la duración en tiempos con la línea de tiempo y haz que den palmas de 1 tiempo (0,5 s) y 2 tiempos (1 s). Ejecuta la sirena y la demo de los botones. Acaba con la alarma de la vitrina: antes de ejecutarla, que digan qué pasará cuando el visitante se vaya.",
        diu: ["Piquem: un temps, un temps, dos temps… Quant dura cada cop?|Palmeamos: un tiempo, un tiempo, dos tiempos… ¿Cuánto dura cada golpe?", "El guió del botó A espera que acabi el «per sempre»? No: funcionen alhora.|¿El guion del botón A espera a que acabe el «para siempre»? No: funcionan a la vez.", "Quina part del programa posa el verd quan el visitant marxa?|¿Qué parte del programa pone el verde cuando el visitante se va?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Partitures d'alarma|Partituras de alarma", fase: 'desconnectat',
        fa: "Per parelles, amb la fitxa: llegeixen cada partitura d'alarma (notes amb durades i colors de llum), calculen quant dura i la «interpreten»: un/a fa les notes (agut = «niii», greu = «nooo») i l'altre/a aixeca la targeta del color. Al final, cada parella inventa la seva alarma de 2 segons exactes i la presenta a la parella del costat, que n'ha de calcular la durada.|Por parejas, con la ficha: leen cada partitura de alarma (notas con duraciones y colores de luz), calculan cuánto dura y la «interpretan»: uno/a hace las notas (agudo = «niii», grave = «nooo») y el otro/a levanta la tarjeta del color. Al final, cada pareja inventa su alarma de 2 segundos exactos y la presenta a la pareja de al lado, que tiene que calcular su duración.",
        diu: ["Si la nota és de 1/2 temps, quant dura en segons?|Si la nota es de 1/2 tiempo, ¿cuánto dura en segundos?", "La vostra alarma dura exactament 2 segons? Sumeu-ho.|¿Vuestra alarma dura exactamente 2 segundos? Sumadlo.", "Una nota d'1 temps i dues d'1/2: quant dura tot? (0,5 + 0,25 + 0,25 = 1 s)|Una nota de 1 tiempo y dos de 1/2: ¿cuánto dura todo? (0,5 + 0,25 + 0,25 = 1 s)"],
        slides: ['s9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 10, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. A «On s'aturarà?», demana que calculin els segons abans de triar. El pas «Dissenya el codi d'avisos» és per a casa: poden tocar «Ho he fet».|Avanzan hasta la pausa activa. En «¿Dónde se parará?», pide que calculen los segundos antes de elegir. El paso «Diseña el código de avisos» es para casa: pueden tocar «Lo he hecho».",
        diu: ["Quant tarden 4 notes d'1 temps? I quants centímetres fa el robot mentrestant?|¿Cuánto tardan 4 notas de 1 tiempo? ¿Y cuántos centímetros hace el robot mientras tanto?", "Si les notes no tardessin, on s'hauria quedat el robot? (a la A, gairebé sense moure's)|Si las notas no tardaran, ¿dónde se habría quedado el robot? (en la A, casi sin moverse)", "A l'alarma de la vitrina, quin bloc torna el verd? (el de la part «si no»)|En la alarma de la vitrina, ¿qué bloque devuelve el verde? (el de la parte «si no»)"],
        slides: ['s10'], app: "Del «Recorda» a la «Pausa activa»: repàs, la missió, «Descobreix», la nota de 2 temps, «On s'aturarà?», ordenar l'alarma, el codi d'avisos (casa) i «Toca el bloc».|Del «Recuerda» a la «Pausa activa»: repaso, la misión, «Descubre», la nota de 2 tiempos, «¿Dónde se parará?», ordenar la alarma, el código de avisos (casa) y «Toca el bloque».", org: "Individual|Individual" },
      { min: 12, t: "El timbre i la vitrina al Maqueen|El timbre y la vitrina en el Maqueen", fase: 'robot',
        fa: "Grups de 3-4 per kit (programador/a, pilot, visitant, secretari/ària). Primer, el timbre: carregueu el codi de l'imprimible i comproveu que en prémer A sona el «ding-dong» i surt la casa. Després, l'alarma de la vitrina: robot a la taula, lluny de la vora, mirant cap a l'obra d'art; el visitant hi acosta un llibre a poc a poc. Mesureu amb un regle a quina distància salta l'alarma i ajusteu el número del «si» perquè salti a uns 10 cm. Proveu també què passa si el visitant arriba de costat (els ultrasons miren endavant!). Seguretat: el robot quiet al centre de la taula; volum moderat.|Grupos de 3-4 por kit (programador/a, piloto, visitante, secretario/a). Primero, el timbre: cargad el código del imprimible y comprobad que al pulsar A suena el «ding-dong» y sale la casa. Después, la alarma de la vitrina: robot en la mesa, lejos del borde, mirando hacia la obra de arte; el visitante acerca un libro despacio. Medid con una regla a qué distancia salta la alarma y ajustad el número del «si» para que salte a unos 10 cm. Probad también qué pasa si el visitante llega de lado (¡los ultrasonidos miran hacia delante!). Seguridad: el robot quieto en el centro de la mesa; volumen moderado.",
        diu: ["A quina distància salta la vostra alarma? És la que diu el programa?|¿A qué distancia salta vuestra alarma? ¿Es la que dice el programa?", "Si el visitant arriba de costat, el robot el veu? Com ho arreglaríeu?|Si el visitante llega de lado, ¿el robot lo ve? ¿Cómo lo arreglaríais?", "Quan premeu A, el «per sempre» s'atura? (no, tots dos guions funcionen alhora)|Cuando pulsáis A, ¿el «para siempre» se para? (no, los dos guiones funcionan a la vez)"],
        slides: ['s11', 's12'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers|Grupos de 3-4 por kit con papeles" },
      { min: 8, t: "Reptes de les alarmes|Retos de las alarmas", fase: 'ordinador',
        fa: "Pausa activa tots junts i, després, els quatre reptes. Al repte 2 (5 blocs), recorda el «repeteix» de la unitat 2. Al 4, que llegeixin el tauler: quant marca la llum dins la caixa i quan s'obre?|Pausa activa todos juntos y, después, los cuatro retos. En el reto 2 (5 bloques), recuerda el «repite» de la unidad 2. En el 4, que lean el panel: ¿cuánto marca la luz dentro de la caja y cuando se abre?",
        diu: ["Si només pots fer servir 5 blocs, quin bloc repeteix els altres?|Si solo puedes usar 5 bloques, ¿qué bloque repite los otros?", "Dins la caixa la llum és 25 i oberta, 260. Quin llindar triaries?|Dentro de la caja la luz es 25 y abierta, 260. ¿Qué umbral elegirías?", "Al timbre, cal algun «espera»? (no: el botó ja diu quan)|En el timbre, ¿hace falta algún «espera»? (no: el botón ya dice cuándo)"],
        slides: ['s13'], app: "«Pausa activa» i els reptes 1 a 4: el timbre, la sirena, la vitrina i la caixa forta.|«Pausa activa» y los retos 1 a 4: el timbre, la sirena, la vitrina y la caja fuerte.", org: "Individual|Individual" },
      { min: 3, t: "Crea: la meva alarma|Crea: mi alarma", fase: 'crea',
        fa: "Cada alumne/a inventa la seva alarma per a la sala de les llanternes i la desa.|Cada alumno/a inventa su alarma para la sala de los farolillos y la guarda.",
        diu: ["La teva alarma es veu i se sent? Torna a la calma?|¿Tu alarma se ve y se oye? ¿Vuelve a la calma?", "Quin sensor fa servir la teva alarma i per què?|¿Qué sensor usa tu alarma y por qué?", "Què fa quan el visitant se'n va? (torna a la calma amb el «si no»)|¿Qué hace cuando el visitante se va? (vuelve a la calma con el «si no»)"],
        slides: ['s14'], app: "Pas «Crea»: La meva alarma.|Paso «Crea»: Mi alarma.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Resum de la sessió, preguntes finals de l'app i tiquet a la porta.|Resumen de la sesión, preguntas finales de la app y ticket en la puerta.",
        diu: ["Quant dura una nota de 2 temps?|¿Cuánto dura una nota de 2 tiempos?", "Quan s'executa el guió del botó A?|¿Cuándo se ejecuta el guion del botón A?", "Digues un actuador que avisi amb llum i un que avisi amb so. (llums del cotxe o de sota; brunzidor)|Di un actuador que avise con luz y uno que avise con sonido. (luces del coche o de abajo; zumbador)"],
        slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el vermell al «si», però no posa res al «si no» i l'alarma es queda vermella per sempre.|Pone el rojo en el «si», pero no pone nada en el «si no» y la alarma se queda roja para siempre.",
        "Pregunta: què vols que facin els llums quan NO hi ha ningú? On ho has escrit?|Pregunta: ¿qué quieres que hagan las luces cuando NO hay nadie? ¿Dónde lo has escrito?"],
      ["Creu que les notes no tarden i no entén per què el robot va més lluny (o més tard) del que esperava.|Cree que las notas no tardan y no entiende por qué el robot va más lejos (o más tarde) de lo que esperaba.",
        "Que compti en veu alta els temps del programa: quants segons passen entre l'«engega» i l'«atura»?|Que cuente en voz alta los tiempos del programa: ¿cuántos segundos pasan entre el «arranca» y el «para»?"],
      ["Posa el timbre a «en iniciar» amb un «espera» i funciona a una pista però no a l'altra.|Pone el timbre en «al iniciar» con un «espera» y funciona en una pista pero no en la otra.",
        "Pregunta: qui decideix quan sona el timbre, el rellotge o la persona? Quin guió espera la persona?|Pregunta: ¿quién decide cuándo suena el timbre, el reloj o la persona? ¿Qué guion espera a la persona?"],
      ["A la sirena, fa servir més de 5 blocs copiant la seqüència tres vegades.|En la sirena, usa más de 5 bloques copiando la secuencia tres veces.",
        "Que encercli en el paper la part que es repeteix. Quin bloc de la unitat 2 la fa repetir?|Que rodee en el papel la parte que se repite. ¿Qué bloque de la unidad 2 la hace repetir?"],
      ["Al robot real, l'alarma no salta quan el visitant s'acosta de costat.|En el robot real, la alarma no salta cuando el visitante se acerca de lado.",
        "Recorda el con estret dels ultrasons (unitat 3): què veu el robot i què no? On posaries el robot?|Recuerda el cono estrecho de los ultrasonidos (unidad 3): ¿qué ve el robot y qué no? ¿Dónde pondrías el robot?"],
      ["Al repte de la caixa forta, fa servir «llum > 900» perquè «obrir la caixa fa molta llum», i l'alarma no salta mai.|En el reto de la caja fuerte, usa «luz > 900» porque «abrir la caja da mucha luz», y la alarma no salta nunca.",
        "Que miri el tauler quan s'obre la caixa: quant marca? (uns 260) Llavors, el llindar ha d'estar entre 25 i 260.|Que mire el panel cuando se abre la caja: ¿cuánto marca? (unos 260) Entonces, el umbral tiene que estar entre 25 y 260."]
    ],
    diff: {
      mes: "Fer una alarma de dos nivells: a menys de 40 cm, avís groc i una nota suau; a menys de 20, vermell i sirena. Al robot real, provar-la i mesurar on canvia cada nivell.|Hacer una alarma de dos niveles: a menos de 40 cm, aviso amarillo y una nota suave; a menos de 20, rojo y sirena. En el robot real, probarla y medir dónde cambia cada nivel.",
      menys: "Començar pel repte del timbre i la sirena, que no tenen sensors. A la vitrina, partir del programa de la demo i canviar només els colors.|Empezar por el reto del timbre y la sirena, que no tienen sensores. En la vitrina, partir del programa de la demo y cambiar solo los colores."
    },
    aval: {
      ticket: ["Quant dura una nota de 2 temps? I 4 notes d'1/2 temps?|¿Cuánto dura una nota de 2 tiempos? ¿Y 4 notas de 1/2 tiempo?",
        "Explica per què l'alarma de la vitrina necessita la part «si no».|Explica por qué la alarma de la vitrina necesita la parte «si no»."],
      rubric: [
        ["Actuadors i durades|Actuadores y duraciones", "Combina so i llum i calcula quant tarda una seqüència de notes i icones.|Combina sonido y luz y calcula cuánto tarda una secuencia de notas e iconos.", "Fa servir els actuadors, però encara no té en compte que les notes tarden.|Usa los actuadores, pero todavía no tiene en cuenta que las notas tardan."],
        ["Alarma amb sensor|Alarma con sensor", "Programa sensor + condició + avisos i fa tornar la calma amb el «si no».|Programa sensor + condición + avisos y hace volver la calma con el «si no».", "L'alarma salta, però no torna a la calma sense ajuda.|La alarma salta, pero no vuelve a la calma sin ayuda."],
        ["Botons|Botones", "Fa servir el guió del botó A per a una acció que decideix una persona.|Usa el guion del botón A para una acción que decide una persona.", "Programa el botó, però barreja el guió del botó amb «en iniciar».|Programa el botón, pero mezcla el guion del botón con «al iniciar»."],
        ["Comunicar amb avisos|Comunicar con avisos", "Dissenya avisos diferents i fàcils de reconèixer per a situacions diferents (calma, compte, perill).|Diseña avisos diferentes y fáciles de reconocer para situaciones diferentes (calma, cuidado, peligro).", "Fa un sol tipus d'avís per a tot o avisos que es confonen.|Hace un solo tipo de aviso para todo o avisos que se confunden."]
      ]
    },
    casa: "A casa, podeu repetir els reptes i fer «Dissenya el codi d'avisos» amb algú de la família: tres missatges amb sons i llums, sense paraules.|En casa, podéis repetir los retos y hacer «Diseña el código de avisos» con alguien de la familia: tres mensajes con sonidos y luces, sin palabras.",
    slides: [
      { id: 's1', k: 'portada', t: "Alarmes|Alarmas", x: "El museu del poble obre de nit i necessita robots vigilants que avisin amb so i llum.|El museo del pueblo abre de noche y necesita robots vigilantes que avisen con sonido y luz.",
        nota: "Objectiu: al final tindreu un timbre, una sirena i una alarma que vigila la vitrina.|Objetivo: al final tendréis un timbre, una sirena y una alarma que vigila la vitrina." },
      { id: 's2', k: 'pregunta', t: "Quins avisos coneixes?|¿Qué avisos conoces?", x: "Sirenes, timbres, alarmes de cotxe, el microones… Com ens avisen?|Sirenas, timbres, alarmas de coche, el microondas… ¿Cómo nos avisan?",
        nota: "Classifica a la pissarra: avisos de so, de llum i de tots dos. Els més importants solen fer servir tots dos.|Clasifica en la pizarra: avisos de sonido, de luz y de los dos. Los más importantes suelen usar los dos." },
      { id: 's3', k: 'repas', t: "Recordem la papallona|Recordemos la mariposa", punts: ["Llum esquerra 90, llum dreta 410: cap a on gira?|Luz izquierda 90, luz derecha 410: ¿hacia dónde gira?", "Quin llindar posaries en una sala fosca amb un focus?|¿Qué umbral pondrías en una sala oscura con un foco?"],
        nota: "Respostes: a la dreta; un número entre 25 i el que marca a prop del focus (per exemple 400-600).|Respuestas: a la derecha; un número entre 25 y lo que marca cerca del foco (por ejemplo 400-600)." },
      { id: 's4', k: 'anim', t: "Quatre maneres d'avisar|Cuatro maneras de avisar", anim: 'k5alarm', x: "Brunzidor, llums del cotxe, llums de sota i matriu de LEDs.|Zumbador, luces del coche, luces de abajo y matriz de LEDs.",
        nota: "Ensenya cada actuador en un robot real. Recorda la paraula «actuador» de la unitat 1.|Enseña cada actuador en un robot real. Recuerda la palabra «actuador» de la unidad 1." },
      { id: 's5', k: 'anim', t: "Les notes també tarden|Las notas también tardan", anim: 'k5beat', x: "1 temps = 0,5 s · 1/2 temps = 0,25 s · 2 temps = 1 s · icona = 0,4 s|1 tiempo = 0,5 s · 1/2 tiempo = 0,25 s · 2 tiempos = 1 s · icono = 0,4 s",
        nota: "Feu picar de mans tots junts: un temps, un temps, dos temps. El programa no passa al bloc següent fins que s'acaba la nota.|Haced palmas todos juntos: un tiempo, un tiempo, dos tiempos. El programa no pasa al bloque siguiente hasta que se acaba la nota." },
      { id: 's6', k: 'robo', t: "La sirena|La sirena", x: "3 vegades: vermell + do′, blau + sol. Quant durarà en total?|3 veces: rojo + do′, azul + sol. ¿Cuánto durará en total?",
        robo: { w: { w: 100, h: 50, bot: [50, 25, 90], time: 5 }, prog: 'start{ rep:3{ car:all,red note:C5,1/2 car:all,blue note:G4,1/2 } car:all,black }' },
        nota: "6 notes de 1/2 temps = 6 × 0,25 s = 1,5 s. Fes notar el «repeteix»: 4 blocs fan tota la sirena.|6 notas de 1/2 tiempo = 6 × 0,25 s = 1,5 s. Haz notar el «repite»: 4 bloques hacen toda la sirena." },
      { id: 's7', k: 'robo', t: "Els botons A i B|Los botones A y B", x: "En prémer A: casa i «ding-dong». En prémer B: «no».|Al pulsar A: casa y «ding-dong». Al pulsar B: «no».",
        robo: { w: { w: 100, h: 50, bot: [50, 25, 90], press: [{ t: 1.5, b: 'A' }, { t: 4, b: 'B' }], time: 6 }, prog: 'start{ icon:asleep } A{ icon:house note:E5,1/2 note:C5,1 } B{ icon:no }' },
        nota: "A la demo els botons es premen sols; al simulador de l'app, els alumnes poden prémer A i B del tauler. Remarca que el guió del botó s'executa cada vegada que es prem.|En la demo los botones se pulsan solos; en el simulador de la app, los alumnos pueden pulsar A y B del panel. Remarca que el guion del botón se ejecuta cada vez que se pulsa." },
      { id: 's8', k: 'robo', t: "L'alarma de la vitrina|La alarma de la vitrina", x: "Si distància < 25: vermell, sorpresa i nota. Si no: verd. Què passarà quan el visitant marxi?|Si distancia < 25: rojo, sorpresa y nota. Si no: verde. ¿Qué pasará cuando el visitante se vaya?",
        robo: { w: { w: 120, h: 60, bot: [18, 30, 90], walls: [[4, 18, 4, 24]], zones: [{ id: 'o', r: [4, 16, 8, 28], col: 'purple' }], leader: { path: [[112, 30], [44, 30], [50, 30], [44, 30], [50, 30], [44, 30], [112, 30]], speed: 10, wait: 1 }, time: 16 }, prog: 'forever{ if:dist<25{ car:all,red icon:surprised note:C5,1/2 } else{ car:all,green clear } }' },
        blocks: ["sensor: distància|sensor: distancia", "condició: < 25|condición: < 25", "avisos: vermell + icona + nota|avisos: rojo + icono + nota", "si no: verd|si no: verde"],
        nota: "Sensor + condició + avisos. Sense el «si no», l'alarma quedaria vermella per sempre.|Sensor + condición + avisos. Sin el «si no», la alarma quedaría roja para siempre." },
      { id: 's9', k: 'activitat', t: "Partitures d'alarma|Partituras de alarma", timer: 10, punts: ["Llegiu la partitura i calculeu quant dura.|Leed la partitura y calculad cuánto dura.", "Un/a fa les notes, l'altre/a els colors.|Uno/a hace las notas, el otro/a los colores.", "Inventeu una alarma de 2 segons exactes.|Inventad una alarma de 2 segundos exactos.", "La parella del costat en calcula la durada.|La pareja de al lado calcula su duración."],
        nota: "Recorda la regla: 1 temps = 0,5 s. Agut = do′, re′… sol′; greu = do, re, mi.|Recuerda la regla: 1 tiempo = 0,5 s. Agudo = do′, re′… sol′; grave = do, re, mi." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre «Alarmes».|Abre «Alarmas».", "A «On s'aturarà?», calcula els segons abans de triar.|En «¿Dónde se parará?», calcula los segundos antes de elegir.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Resposta de «On s'aturarà?»: B (4 notes = 2 s, uns 31 cm).|Respuesta de «¿Dónde se parará?»: B (4 notas = 2 s, unos 31 cm)." },
      { id: 's11', k: 'activitat', t: "El timbre i la vitrina de veritat|El timbre y la vitrina de verdad", timer: 12, punts: ["Carregueu el timbre i proveu el botó A.|Cargad el timbre y probad el botón A.", "Carregueu l'alarma: robot al centre, mirant l'obra.|Cargad la alarma: robot en el centro, mirando la obra.", "Acosteu el llibre a poc a poc i mesureu on salta.|Acercad el libro despacio y medid dónde salta.", "Ajusteu el número perquè salti a uns 10 cm.|Ajustad el número para que salte a unos 10 cm."],
        nota: "Al robot real, l'alarma es pot provar a la taula perquè el robot no es mou. Volum moderat: si n'hi ha massa, que facin notes curtes (1/4).|En el robot real, la alarma se puede probar en la mesa porque el robot no se mueve. Volumen moderado: si hay demasiado, que hagan notas cortas (1/4)." },
      { id: 's12', k: 'robo', t: "El codi de la vitrina|El código de la vitrina", x: "Mateix programa que al simulador, amb el llindar de 10 cm per a la taula.|Mismo programa que en el simulador, con el umbral de 10 cm para la mesa.",
        robo: { w: { w: 120, h: 60, bot: [18, 30, 90], walls: [[4, 18, 4, 24]], leader: { path: [[112, 30], [36, 30], [112, 30]], speed: 10, wait: 1 }, time: 18 }, prog: 'forever{ if:dist<10{ car:all,red icon:surprised note:C5,1/2 } else{ car:all,green clear } }' },
        nota: "Projecta el codi JavaScript de l'imprimible si cal. Que comparin: el visitant s'atura a la mateixa distància al simulador i a la taula?|Proyecta el código JavaScript del imprimible si hace falta. Que comparen: ¿el visitante se para a la misma distancia en el simulador y en la mesa?" },
      { id: 's13', k: 'repte', t: "Reptes de les alarmes|Retos de las alarmas", timer: 8, punts: ["1. El timbre del museu (botó A)|1. El timbre del museo (botón A)", "2. La sirena (5 blocs)|2. La sirena (5 bloques)", "3. La vitrina (distància)|3. La vitrina (distancia)", "4. La caixa forta (llum)|4. La caja fuerte (luz)"],
        nota: "La caixa forta fa servir el sensor de llum de la sessió 1: dins, 25; oberta, 260.|La caja fuerte usa el sensor de luz de la sesión 1: dentro, 25; abierta, 260." },
      { id: 's14', k: 'activitat', t: "Crea: la meva alarma|Crea: mi alarma", timer: 3, x: "Tria sensor, llindar i avisos. Ha d'avisar i tornar a la calma.|Elige sensor, umbral y avisos. Tiene que avisar y volver a la calma.",
        nota: "Valora que facin servir so i llum alhora i que el «si no» torni a la calma.|Valora que usen sonido y luz a la vez y que el «si no» vuelva a la calma." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Brunzidor, llums i matriu: quatre maneres d'avisar.|Zumbador, luces y matriz: cuatro maneras de avisar.", "1 temps = 0,5 s: les notes i les icones tarden.|1 tiempo = 0,5 s: las notas y los iconos tardan.", "Alarma = sensor + condició + avisos; el botó A espera una persona.|Alarma = sensor + condición + avisos; el botón A espera a una persona."],
        nota: "Propera sessió: el fanal automàtic, que s'encén quan es fa fosc.|Próxima sesión: la farola automática, que se enciende cuando oscurece." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quant duren 4 notes de 1/2 temps?|¿Cuánto duran 4 notas de 1/2 tiempo?", "Per què l'alarma necessita el «si no»?|¿Por qué la alarma necesita el «si no»?"],
        nota: "Resposta: 1 segon. Anota qui encara confon temps i segons.|Respuesta: 1 segundo. Anota quién todavía confunde tiempos y segundos." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: partitures d'alarma|Ficha: partituras de alarma", k: 'fitxa',
        intro: "Recordeu: 1 temps = 0,5 s · 1/2 temps = 0,25 s · 2 temps = 1 s. Una icona tarda 0,4 s.|Recordad: 1 tiempo = 0,5 s · 1/2 tiempo = 0,25 s · 2 tiempos = 1 s. Un icono tarda 0,4 s.",
        items: [
          { q: "Sirena: 3 vegades (vermell + do′ 1/2 temps, blau + sol 1/2 temps). Quant dura?|Sirena: 3 veces (rojo + do′ 1/2 tiempo, azul + sol 1/2 tiempo). ¿Cuánto dura?", rprog: 'start{ rep:3{ car:all,red note:C5,1/2 car:all,blue note:G4,1/2 } }', sol: "6 notes × 0,25 s = 1,5 segons.|6 notas × 0,25 s = 1,5 segundos." },
          { q: "Timbre: icona casa, mi′ 1/2 temps i do′ 1 temps. Quant dura des que premen A?|Timbre: icono casa, mi′ 1/2 tiempo y do′ 1 tiempo. ¿Cuánto dura desde que pulsan A?", rprog: 'A{ icon:house note:E5,1/2 note:C5,1 }', sol: "0,4 + 0,25 + 0,5 = 1,15 segons.|0,4 + 0,25 + 0,5 = 1,15 segundos." },
          { q: "El robot avança a 150 mentre sonen 4 notes d'1 temps i després para. Quants segons avança? Quants centímetres, aproximadament?|El robot avanza a 150 mientras suenan 4 notas de 1 tiempo y después para. ¿Cuántos segundos avanza? ¿Cuántos centímetros, aproximadamente?", rprog: 'start{ run:all,fwd,150 rep:4{ note:C5,1 } stop:all }', sol: "2 segons; a uns 15,6 cm/s, uns 31 cm.|2 segundos; a unos 15,6 cm/s, unos 31 cm." },
          { q: "Inventeu la vostra alarma de 2 segons exactes. Escriviu les notes, les durades i els colors.|Inventad vuestra alarma de 2 segundos exactos. Escribid las notas, las duraciones y los colores.", sol: "Hi ha moltes respostes. Per exemple: 4 notes d'1 temps, o 8 notes de 1/2 temps, alternant vermell i blau.|Hay muchas respuestas. Por ejemplo: 4 notas de 1 tiempo, u 8 notas de 1/2 tiempo, alternando rojo y azul." }
        ] },
      { id: 'p2', t: "Codi MakeCode: timbre i alarma del museu|Código MakeCode: timbre y alarma del museo", k: 'codi',
        intro: "A makecode.microbit.org: nou projecte → Extensions → «maqueen» → JavaScript → enganxeu el codi → Descarrega.|En makecode.microbit.org: nuevo proyecto → Extensiones → «maqueen» → JavaScript → pegad el código → Descarga.",
        items: [
          { t: "El timbre (botó A)|El timbre (botón A)", prog: 'start{ icon:asleep } A{ icon:house note:E5,1/2 note:C5,1 }' },
          { t: "L'alarma de la vitrina (ajusteu el 10)|La alarma de la vitrina (ajustad el 10)", prog: 'forever{ if:dist<10{ car:all,red icon:surprised note:C5,1/2 } else{ car:all,green clear } }' }
        ] }
    ]
  },

  /* ---------- Sessió 3 · El fanal automàtic ---------- */
  'k5-3': {
    intro: "Sessió del fanal automàtic: l'alumnat programa un fanal que s'encén quan la llum baixa del llindar i s'apaga quan torna a pujar, fent servir les 4 llums de sota del Maqueen. La idea clau és que el «si no» és el que apaga el fanal: sense ell, es queda encès per sempre. També combinen dues decisions independents en un mateix «per sempre» (llums amb la llum, motors amb la distància). La classe passa per la gràfica d'un dia, el carrer de fanals humà, l'app, el túnel de cartró amb el robot real i els reptes.|Sesión de la farola automática: el alumnado programa una farola que se enciende cuando la luz baja del umbral y se apaga cuando vuelve a subir, usando las 4 luces de abajo del Maqueen. La idea clave es que el «si no» es lo que apaga la farola: sin él, se queda encendida para siempre. También combinan dos decisiones independientes en un mismo «para siempre» (luces con la luz, motores con la distancia). La clase pasa por la gráfica de un día, la calle de farolas humana, la app, el túnel de cartón con el robot real y los retos.",
    claus: [
      "«És de nit» s'escriu «llum < llindar»: de nit el número és petit.|«Es de noche» se escribe «luz < umbral»: de noche el número es pequeño.",
      "El «si no» és el que apaga el fanal de dia: els llums es queden com estan fins que un bloc els canvia.|El «si no» es lo que apaga la farola de día: las luces se quedan como están hasta que un bloque las cambia.",
      "Les 4 llums de sota s'encenen totes o una a una (1-4), de molts colors (RGB).|Las 4 luces de abajo se encienden todas o una a una (1-4), de muchos colores (RGB).",
      "Dues decisions que no depenen l'una de l'altra van una darrere l'altra dins del «per sempre», no una dins de l'altra.|Dos decisiones que no dependen la una de la otra van una detrás de la otra dentro del «para siempre», no una dentro de la otra."
    ],
    prev: [
      "El sensor de llum i el llindar (sessió 1).|El sensor de luz y el umbral (sesión 1).",
      "L'alarma que torna a la calma amb el «si no» (sessió 2).|La alarma que vuelve a la calma con el «si no» (sesión 2).",
      "Parar a una distància de la paret amb els ultrasons (unitat 3).|Parar a una distancia de la pared con los ultrasonidos (unidad 3)."
    ],
    faq: [
      ["Els fanals del carrer funcionen de veritat així?|¿Las farolas de la calle funcionan de verdad así?",
        "Molts tenen un sensor de llum (una fotocèl·lula) i d'altres, un rellotge programat. La idea és la mateixa: una condició decideix quan s'encenen.|Muchas tienen un sensor de luz (una fotocélula) y otras, un reloj programado. La idea es la misma: una condición decide cuándo se encienden."],
      ["Per què el fanal fa servir < i la papallona feia servir >?|¿Por qué la farola usa < y la mariposa usaba >?",
        "Perquè el fanal vol saber si hi ha POCA llum (número petit) i la papallona, si n'hi ha MOLTA (número gran).|Porque la farola quiere saber si hay POCA luz (número pequeño) y la mariposa, si hay MUCHA (número grande)."],
      ["Què vol dir RGB?|¿Qué quiere decir RGB?",
        "Vermell, verd i blau en anglès (red, green, blue): cada llum de sota té tres llumetes i, barrejant-les, fa molts colors.|Rojo, verde y azul en inglés (red, green, blue): cada luz de abajo tiene tres lucecitas y, mezclándolas, hace muchos colores."],
      ["Per què el repte 2 funciona sense «si no» i el 3, no?|¿Por qué el reto 2 funciona sin «si no» y el 3, no?",
        "Al repte 2 la prova només es fa fosca; al 3 també torna el dia, i llavors algú ha d'apagar el fanal.|En el reto 2 la prueba solo se hace oscura; en el 3 también vuelve el día, y entonces alguien tiene que apagar la farola."],
      ["Si poso dos «si», el robot fa primer un i després l'altre?|Si pongo dos «si», ¿el robot hace primero uno y después el otro?",
        "Sí, però tan ràpid (cada 20 ms) que sembla que ho faci tot alhora: a cada volta mira la llum i després la distància.|Sí, pero tan rápido (cada 20 ms) que parece que lo haga todo a la vez: en cada vuelta mira la luz y después la distancia."]
    ],
    tec: [
      ["A MakeCode no apareixen els blocs del Maqueen (o el codi enganxat surt en vermell).|En MakeCode no aparecen los bloques del Maqueen (o el código pegado sale en rojo).",
        "Falta l'extensió: Extensions → busqueu «maqueen» → trieu «maqueen» (DFRobot). Els blocs surten a la categoria «Maqueen v5». Si el codi fa servir les llums de sota, afegiu també «neopixel».|Falta la extensión: Extensiones → buscad «maqueen» → elegid «maqueen» (DFRobot). Los bloques salen en la categoría «Maqueen v5». Si el código usa las luces de abajo, añadid también «neopixel»."],
      ["Al robot real, les llums de sota no s'encenen, però la resta del programa funciona.|En el robot real, las luces de abajo no se encienden, pero el resto del programa funciona.",
        "Les llums de sota necessiten l'extensió «neopixel» i el bloc que crea la tira de 4 llums al pin P15 (el codi del botó &lt;/&gt; ja el porta). Comproveu també que les piles no estiguin gastades.|Las luces de abajo necesitan la extensión «neopixel» y el bloque que crea la tira de 4 luces en el pin P15 (el código del botón &lt;/&gt; ya lo lleva). Comprobad también que las pilas no estén gastadas."],
      ["Després de descarregar, la micro:bit mostra una creu (X) que parpelleja i el robot no fa res.|Después de descargar, la micro:bit muestra una cruz (X) que parpadea y el robot no hace nada.",
        "És el bloc «initialize via I2C until success» (el primer del codi; en castellà, «Inicializar MaqueenV5 hasta éxito»): la micro:bit no troba el Maqueen. Comproveu l'interruptor del robot, les 3 piles AA i que la micro:bit estigui ben endollada fins al fons. Quan el troba, mostra un ✓.|Es el bloque «Inicializar MaqueenV5 hasta éxito» («initialize via I2C until success» en inglés), el primero del código: la micro:bit no encuentra el Maqueen. Comprobad el interruptor del robot, las 3 pilas AA y que la micro:bit esté bien enchufada hasta el fondo. Cuando lo encuentra, muestra un ✓."],
      ["Dins la caixa-túnel el fanal no s'encén.|Dentro de la caja-túnel la farola no se enciende.",
        "Hi entra massa llum per la boca del túnel: mesureu la llum dins i fora (codi de la sessió 1), poseu el llindar entremig o tapeu la caixa amb un drap.|Entra demasiada luz por la boca del túnel: medid la luz dentro y fuera (código de la sesión 1), poned el umbral en medio o tapad la caja con un trapo."],
      ["El robot no cap pel túnel o en surt de biaix.|El robot no cabe por el túnel o sale torcido.",
        "Feu els forats una mica més grans que el robot (uns 12 × 8 cm) i comproveu-ho amb el robot apagat abans de començar. Poseu la caixa recta sobre el carrer de cinta.|Haced los agujeros un poco más grandes que el robot (unos 12 × 8 cm) y comprobadlo con el robot apagado antes de empezar. Poned la caja recta sobre la calle de cinta."]
    ],
    seg: [
      "Robot: 3 piles AA del mateix tipus i carregades; no barregeu piles noves i velles. Interruptor apagat mentre es munta, s'endolla la micro:bit o es canvien les piles.|Robot: 3 pilas AA del mismo tipo y cargadas; no mezcléis pilas nuevas y viejas. Interruptor apagado mientras se monta, se enchufa la micro:bit o se cambian las pilas.",
      "En descarregar, el programa comença tot sol: el robot ha d'estar a terra o amb les rodes enlaire a la mà, mai a la vora d'una taula ni estirant el cable USB.|Al descargar, el programa empieza solo: el robot tiene que estar en el suelo o con las ruedas en el aire en la mano, nunca en el borde de una mesa ni tirando del cable USB.",
      "Tisores o cúter per obrir les caixes: ho prepara el professor/a abans de la classe.|Tijeras o cúter para abrir las cajas: lo prepara el profesor/a antes de la clase.",
      "Carrer a terra lluny de portes i passos; el pilot recull el robot si es desvia i ningú no s'asseu al carrer.|Calle en el suelo lejos de puertas y pasos; el piloto recoge el robot si se desvía y nadie se sienta en la calle."
    ],
    extra: [
      "Fanal de tres nivells: apagat de dia, una sola llum de sota a la posta de sol (llum entre 100 i 200) i totes de nit.|Farola de tres niveles: apagada de día, una sola luz de abajo en la puesta de sol (luz entre 100 y 200) y todas de noche.",
      "Gràfica del dia: apunteu la llum que marca el robot al costat de la finestra cada 10 minuts durant una tarda i dibuixeu-ne la gràfica amb el llindar.|Gráfica del día: apuntad la luz que marca el robot junto a la ventana cada 10 minutos durante una tarde y dibujad su gráfica con el umbral.",
      "Cotxe amb intermitents: quan el cotxe para davant la paret, fa parpellejar els llums del cotxe 3 vegades.|Coche con intermitentes: cuando el coche para delante de la pared, hace parpadear las luces del coche 3 veces."
    ],
    trans: [
      "Sessió 2: el «si no» que torna l'alarma a la calma és el mateix que apaga el fanal.|Sesión 2: el «si no» que devuelve la alarma a la calma es el mismo que apaga la farola.",
      "Ciències: el dia i la nit, les estacions (a l'hivern es fa fosc abans) i l'estalvi d'energia.|Ciencias: el día y la noche, las estaciones (en invierno oscurece antes) y el ahorro de energía.",
      "Matemàtiques: llegir una gràfica d'un valor que canvia amb el temps i on creua una línia horitzontal.|Matemáticas: leer una gráfica de un valor que cambia con el tiempo y dónde cruza una línea horizontal."
    ],
    obj: [
      "L'alumne/a programa un fanal que s'encén quan la llum és menor que un llindar i s'apaga quan torna la llum.|El alumno/a programa una farola que se enciende cuando la luz es menor que un umbral y se apaga cuando vuelve la luz.",
      "L'alumne/a explica per què cal la part «si no» perquè el fanal s'apagui de dia.|El alumno/a explica por qué hace falta la parte «si no» para que la farola se apague de día.",
      "L'alumne/a fa servir les 4 llums de sota (totes o una a una) i les combina amb els llums del cotxe.|El alumno/a usa las 4 luces de abajo (todas o una a una) y las combina con las luces del coche.",
      "L'alumne/a combina dos «si» independents en un mateix «per sempre» (llums amb la llum i motors amb la distància).|El alumno/a combina dos «si» independientes en un mismo «para siempre» (luces con la luz y motores con la distancia)."
    ],
    comp: [
      "Competència digital (CD5): automatitzar un objecte quotidià amb un sensor|Competencia digital (CD5): automatizar un objeto cotidiano con un sensor",
      "Pensament computacional: condicions amb «si… si no» i diverses decisions dins d'un bucle|Pensamiento computacional: condiciones con «si… si no» y varias decisiones dentro de un bucle",
      "Ciències: el dia i la nit, la llum natural i artificial; estalvi d'energia|Ciencias: el día y la noche, la luz natural y artificial; ahorro de energía",
      "Matemàtiques: llegir una gràfica d'un valor que canvia amb el temps|Matemáticas: leer una gráfica de un valor que cambia con el tiempo"
    ],
    vocab: [
      ["Fanal automàtic|Farola automática", "Llum que s'encén i s'apaga sola segons la llum que hi ha.|Luz que se enciende y se apaga sola según la luz que hay."],
      ["Llindar|Umbral", "Número que separa el dia de la nit al programa (per exemple, 100).|Número que separa el día de la noche en el programa (por ejemplo, 100)."],
      ["Llums de sota (RGB)|Luces de abajo (RGB)", "Les 4 llums de colors de sota del Maqueen, numerades de l'1 al 4.|Las 4 luces de colores de debajo del Maqueen, numeradas del 1 al 4."],
      ["Si no|Si no", "La part del «si» que es fa quan la condició no es compleix.|La parte del «si» que se hace cuando la condición no se cumple."],
      ["Automatitzar|Automatizar", "Fer que una màquina faci una feina sola, sense que ningú l'hi digui cada vegada.|Hacer que una máquina haga un trabajo sola, sin que nadie se lo diga cada vez."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «El fanal automàtic»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «La farola automática»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit Maqueen per grup de 3-4 i una caixa de sabates per grup (amb un forat a cada costat curt, prou gran perquè hi passi el robot)|Un kit Maqueen por grupo de 3-4 y una caja de zapatos por grupo (con un agujero en cada lado corto, lo bastante grande para que pase el robot)",
        "Cinta aïllant negra per fer el carrer i un llibre o una caixa que faci de paret final|Cinta aislante negra para hacer la calle y un libro o una caja que haga de pared final"
      ],
      imprimir: ["Targetes del carrer de fanals|Tarjetas de la calle de farolas", "Pista: el carrer amb el túnel|Pista: la calle con el túnel"],
      prep: [
        "Imprimir i retallar les targetes (un paquet per a tota la classe).|Imprimir y recortar las tarjetas (un paquete para toda la clase).",
        "Preparar les caixes-túnel: obrir un forat a cada costat curt (uns 12 × 8 cm).|Preparar las cajas-túnel: abrir un agujero en cada lado corto (unos 12 × 8 cm).",
        "Marcar a terra un carrer d'1 m amb la pista de l'imprimible (dues tires de cinta i la paret final).|Marcar en el suelo una calle de 1 m con la pista del imprimible (dos tiras de cinta y la pared final).",
        "Provar les demos de les diapositives 6, 7 i 8.|Probar las demos de las diapositivas 6, 7 y 8."
      ]
    },
    plan: [
      { min: 4, t: "Benvinguda: els fanals de la plaça|Bienvenida: las farolas de la plaza", fase: 'inici',
        fa: "Presenta l'encàrrec de l'electricista. Pregunta qui encén els fanals del seu carrer i a quina hora. Recull respostes i deixa la pregunta oberta fins a la diapositiva 4.|Presenta el encargo del electricista. Pregunta quién enciende las farolas de su calle y a qué hora. Recoge respuestas y deja la pregunta abierta hasta la diapositiva 4.",
        diu: ["Algú encén els fanals un a un cada vespre?|¿Alguien enciende las farolas una a una cada tarde?", "A l'estiu i a l'hivern s'encenen a la mateixa hora?|¿En verano y en invierno se encienden a la misma hora?", "Si un fanal només s'encengués a les 8 del vespre, què passaria a l'hivern? (s'encendria tard: ja seria fosc)|Si una farola solo se encendiera a las 8 de la tarde, ¿qué pasaría en invierno? (se encendería tarde: ya sería de noche)"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El fanal: llindar, llums de sota i «si no»|La farola: umbral, luces de abajo y «si no»", fase: 'teoria',
        fa: "Explica la gràfica de la llum d'un dia amb el llindar. Ensenya les 4 llums de sota en un robot real. Executa el fanal complet i, després, el que no té «si no»: que la classe digui què falla abans que torni la llum. Acaba amb el cotxe de la cercavila: dos «si» seguits dins el «per sempre».|Explica la gráfica de la luz de un día con el umbral. Enseña las 4 luces de abajo en un robot real. Ejecuta la farola completa y, después, la que no tiene «si no»: que la clase diga qué falla antes de que vuelva la luz. Acaba con el coche del pasacalles: dos «si» seguidos dentro del «para siempre».",
        diu: ["On creua la línia vermella la gràfica? Què fa el fanal en aquell moment?|¿Dónde cruza la línea roja la gráfica? ¿Qué hace la farola en ese momento?", "Aquest fanal s'apagarà quan torni la llum? Per què?|¿Esta farola se apagará cuando vuelva la luz? ¿Por qué?", "Quina condició escriuríeu per dir «és de nit»? (llum < 100)|¿Qué condición escribiríais para decir «es de noche»? (luz < 100)", "Al cotxe, el «si» de la distància ha d'anar dins del de la llum? (no: un darrere l'altre)|En el coche, ¿el «si» de la distancia tiene que ir dentro del de la luz? (no: uno detrás del otro)"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El carrer de fanals|La calle de farolas", fase: 'desconnectat',
        fa: "La classe fa un carrer: 6-8 alumnes drets en fila són fanals i cadascú rep una targeta de llindar (50, 100, 150, 200). El professor/a fa de «cel» i va ensenyant targetes de llum que baixen (260, 200, 120, 25) i després pugen. Cada fanal aixeca els braços (encès) quan la llum és menor que el seu llindar i els abaixa quan no. Pregunteu: qui s'encén primer? Qui s'apaga l'últim? Quin llindar estalvia més llum? Torneu-ho a fer amb un fanal sense «si no» (un cop aixeca els braços, ja no els pot abaixar).|La clase hace una calle: 6-8 alumnos de pie en fila son farolas y cada uno recibe una tarjeta de umbral (50, 100, 150, 200). El profesor/a hace de «cielo» y va enseñando tarjetas de luz que bajan (260, 200, 120, 25) y después suben. Cada farola levanta los brazos (encendida) cuando la luz es menor que su umbral y los baja cuando no. Preguntad: ¿quién se enciende primero? ¿Quién se apaga el último? ¿Qué umbral ahorra más luz? Volvedlo a hacer con una farola sin «si no» (una vez levanta los brazos, ya no los puede bajar).",
        diu: ["Llum 120: quins fanals estan encesos?|Luz 120: ¿qué farolas están encendidas?", "Quin és el fanal que gasta menys? I el que s'encén massa d'hora?|¿Cuál es la farola que gasta menos? ¿Y la que se enciende demasiado pronto?", "I quan la llum torna a pujar, qui s'apaga primer? (el fanal de llindar més baix)|¿Y cuando la luz vuelve a subir, quién se apaga primero? (la farola de umbral más bajo)"],
        slides: ['s9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Tot el grup: 6-8 fanals i la resta d'observadors, que després canvien|Todo el grupo: 6-8 farolas y el resto de observadores, que después cambian" },
      { min: 10, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. A «On acabarà?», que expliquin quan és fosc i quan no. «Fanals del meu carrer» és per a casa.|Avanzan hasta la pausa activa. En «¿Dónde terminará?», que expliquen cuándo está oscuro y cuándo no. «Farolas de mi calle» es para casa.",
        diu: ["Quants segons és fosc a la prova? Quants centímetres fa el robot?|¿Cuántos segundos está oscuro en la prueba? ¿Cuántos centímetros hace el robot?", "Quin bloc apaga el fanal de dia? (el de la part «si no»)|¿Qué bloque apaga la farola de día? (el de la parte «si no»)", "Al «On acabarà?», per què para quan torna la llum? (perquè la condició ja no es compleix)|En el «¿Dónde terminará?», ¿por qué para cuando vuelve la luz? (porque la condición ya no se cumple)"],
        slides: ['s10'], app: "Del «Recorda» a la «Pausa activa»: repàs, la missió, «Descobreix», la condició de nit, «On acabarà?», ordenar el dia del fanal, «Fanals del meu carrer» (casa) i «Toca el bloc».|Del «Recuerda» a la «Pausa activa»: repaso, la misión, «Descubre», la condición de noche, «¿Dónde terminará?», ordenar el día de la farola, «Farolas de mi calle» (casa) y «Toca el bloque».", org: "Individual|Individual" },
      { min: 13, t: "El túnel del carrer|El túnel de la calle", fase: 'robot',
        fa: "Grups de 3-4 per kit. Primer, el fanal: carregueu el codi del fanal i poseu la caixa de sabates damunt el robot: les llums de sota s'han d'encendre; traieu la caixa i s'han d'apagar. Si no funciona, mesureu la llum amb el codi de la sessió 1 (dins la caixa i fora) i canvieu el 100. Després, el cotxe de la cercavila: carrer de cinta d'1 m, la caixa fa de túnel a la meitat i un llibre fa de paret al final. Carregueu el programa del cotxe: ha d'encendre els llums del cotxe dins el túnel, apagar-los en sortir i parar davant la paret. Seguretat: carrer a terra, el pilot recull el robot si es desvia. El codi es treu de l'app (botó &lt;/&gt; del repte del fanal o del cotxe) i a MakeCode cal afegir l'extensió «maqueen» i, per a les llums de sota, «neopixel». Abans de començar, comproveu amb el robot apagat que passa pel túnel sense fregar.|Grupos de 3-4 por kit. Primero, la farola: cargad el código de la farola y poned la caja de zapatos encima del robot: las luces de abajo se tienen que encender; quitad la caja y se tienen que apagar. Si no funciona, medid la luz con el código de la sesión 1 (dentro de la caja y fuera) y cambiad el 100. Después, el coche del pasacalles: calle de cinta de 1 m, la caja hace de túnel en el medio y un libro hace de pared al final. Cargad el programa del coche: tiene que encender las luces del coche dentro del túnel, apagarlas al salir y parar delante de la pared. Seguridad: calle en el suelo, el piloto recoge el robot si se desvía. El código se saca de la app (botón &lt;/&gt; del reto de la farola o del coche) y en MakeCode hay que añadir la extensión «maqueen» y, para las luces de abajo, «neopixel». Antes de empezar, comprobad con el robot apagado que pasa por el túnel sin rozar.",
        diu: ["Quant marca la llum dins la caixa? I a fora? On posaríeu el llindar?|¿Cuánto marca la luz dentro de la caja? ¿Y fuera? ¿Dónde pondríais el umbral?", "Dins el túnel s'encenen els llums? I en sortir, s'apaguen? Quina part del programa ho fa?|¿Dentro del túnel se encienden las luces? ¿Y al salir, se apagan? ¿Qué parte del programa lo hace?", "El robot para davant la paret encara que sigui de nit? (sí: les dues decisions són independents)|¿El robot para delante de la pared aunque sea de noche? (sí: las dos decisiones son independientes)"],
        slides: ['s11', 's12'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers|Grupos de 3-4 por kit con papeles" },
      { min: 7, t: "Reptes del fanal|Retos de la farola", fase: 'ordinador',
        fa: "Pausa activa i els quatre reptes. Al repte 1 (5 blocs), el «repeteix». Al 3, han de veure que sense «si no» falla al matí. Al 4, que comparin amb el túnel que acaben de provar.|Pausa activa y los cuatro retos. En el reto 1 (5 bloques), el «repite». En el 3, tienen que ver que sin «si no» falla por la mañana. En el 4, que comparen con el túnel que acaban de probar.",
        diu: ["Per què el fanal del repte 2 funciona sense «si no» i el del 3, no?|¿Por qué la farola del reto 2 funciona sin «si no» y la del 3, no?", "Al repte 1, quin bloc fa les 4 vegades? (el «repeteix»)|En el reto 1, ¿qué bloque hace las 4 veces? (el «repite»)", "Al repte 4, quants «si» hi ha i què mira cadascun? (dos: la llum i la distància)|En el reto 4, ¿cuántos «si» hay y qué mira cada uno? (dos: la luz y la distancia)"],
        slides: ['s13'], app: "«Pausa activa» i els reptes 1 a 4: el llum intermitent, el fanal de la plaça, de la nit al dia i el cotxe de la cercavila.|«Pausa activa» y los retos 1 a 4: la luz intermitente, la farola de la plaza, de la noche al día y el coche del pasacalles.", org: "Individual|Individual" },
      { min: 3, t: "Crea: el meu fanal de festa|Crea: mi farola de fiesta", fase: 'crea',
        fa: "Cada alumne/a dissenya el seu fanal de festa i el desa.|Cada alumno/a diseña su farola de fiesta y la guarda.",
        diu: ["Quins colors tindrà el teu fanal? Fa alguna cosa amb el botó A?|¿Qué colores tendrá tu farola? ¿Hace algo con el botón A?", "El teu fanal s'apaga quan torna el dia? Prova-ho a la pista.|¿Tu farola se apaga cuando vuelve el día? Pruébalo en la pista.", "Quina llum de sota has posat de cada color?|¿Qué luz de abajo has puesto de cada color?"],
        slides: ['s14'], app: "Pas «Crea»: El meu fanal de festa.|Paso «Crea»: Mi farola de fiesta.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Resum, preguntes finals de l'app i tiquet a la porta.|Resumen, preguntas finales de la app y ticket en la puerta.",
        diu: ["Què li falta a un fanal que no s'apaga mai?|¿Qué le falta a una farola que no se apaga nunca?", "Per què el fanal mira la llum i no el rellotge? (cada dia es fa fosc a una hora diferent)|¿Por qué la farola mira la luz y no el reloj? (cada día oscurece a una hora diferente)", "Quan s'apaga el fanal? (quan la llum torna a ser més gran que el llindar)|¿Cuándo se apaga la farola? (cuando la luz vuelve a ser mayor que el umbral)"],
        slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir «llum > 100» i el fanal s'encén de dia.|Usa «luz > 100» y la farola se enciende de día.",
        "Pregunta: de nit, la llum és un número gran o petit? Llavors, quin signe vols?|Pregunta: de noche, ¿la luz es un número grande o pequeño? Entonces, ¿qué signo quieres?"],
      ["No posa «si no» i el fanal es queda encès quan torna la llum.|No pone «si no» y la farola se queda encendida cuando vuelve la luz.",
        "Que miri el tauler quan torna el dia: quin bloc s'executa ara? N'hi ha cap que apagui?|Que mire el panel cuando vuelve el día: ¿qué bloque se ejecuta ahora? ¿Hay alguno que apague?"],
      ["Al cotxe de la cercavila, posa el «si» de la distància dins del «si» de la llum, i el robot només es mou de nit.|En el coche del pasacalles, pone el «si» de la distancia dentro del «si» de la luz, y el robot solo se mueve de noche.",
        "Que digui en veu alta les dues preguntes: depenen l'una de l'altra? Que posi els dos «si» un darrere l'altre.|Que diga en voz alta las dos preguntas: ¿dependen la una de la otra? Que ponga los dos «si» uno detrás del otro."],
      ["Programa el fanal amb un «espera» fins a la nit i a la segona pista falla.|Programa la farola con un «espera» hasta la noche y en la segunda pista falla.",
        "Pregunta: el fanal de veritat sap a quina hora es farà fosc demà? Què pot mirar en lloc del rellotge?|Pregunta: ¿la farola de verdad sabe a qué hora oscurecerá mañana? ¿Qué puede mirar en lugar del reloj?"],
      ["Al robot real, el fanal no s'encén dins la caixa perquè hi entra massa llum.|En el robot real, la farola no se enciende dentro de la caja porque entra demasiada luz.",
        "Que mesuri dins i fora amb el codi de la sessió 1 i triï un llindar entre els dos números.|Que mida dentro y fuera con el código de la sesión 1 y elija un umbral entre los dos números."],
      ["Posa el «si» del fanal fora del «per sempre» (a «en iniciar») i el fanal no canvia mai.|Pone el «si» de la farola fuera del «para siempre» (en «al iniciar») y la farola no cambia nunca.",
        "Pregunta: quantes vegades mira la llum aquest programa? (una, en començar) Què cal perquè ho miri sempre?|Pregunta: ¿cuántas veces mira la luz este programa? (una, al empezar) ¿Qué hace falta para que lo mire siempre?"]
    ],
    diff: {
      mes: "Fer un fanal de tres nivells: llum > 200 apagat; entre 100 i 200, una sola llum de sota (posta de sol); menys de 100, totes. Al robot real, fer que dins el túnel també soni un avís curt.|Hacer una farola de tres niveles: luz > 200 apagada; entre 100 y 200, una sola luz de abajo (puesta de sol); menos de 100, todas. En el robot real, hacer que dentro del túnel también suene un aviso corto.",
      menys: "Començar pel fanal del repte 2 (només encendre) i afegir el «si no» amb la pista del repte 3. Al robot real, provar només el fanal amb la caixa.|Empezar por la farola del reto 2 (solo encender) y añadir el «si no» con la pista del reto 3. En el robot real, probar solo la farola con la caja."
    },
    aval: {
      ticket: ["Escriu la condició que diu «és de nit» amb un llindar de 100.|Escribe la condición que dice «es de noche» con un umbral de 100.",
        "Per què el fanal necessita el «si no»?|¿Por qué la farola necesita el «si no»?"],
      rubric: [
        ["Condició de nit|Condición de noche", "Escriu «llum < llindar» i tria el llindar entre els valors de dia i de nit.|Escribe «luz < umbral» y elige el umbral entre los valores de día y de noche.", "Fa servir la llum, però confon el signe o tria el llindar a l'atzar.|Usa la luz, pero confunde el signo o elige el umbral al azar."],
        ["Encendre i apagar|Encender y apagar", "Fa servir el «si no» perquè el fanal s'apagui quan torna la llum.|Usa el «si no» para que la farola se apague cuando vuelve la luz.", "El fanal s'encén, però necessita ajuda per apagar-lo.|La farola se enciende, pero necesita ayuda para apagarla."],
        ["Diverses decisions|Varias decisiones", "Combina dos «si» independents (llums i motors) al mateix «per sempre».|Combina dos «si» independientes (luces y motores) en el mismo «para siempre».", "Programa cada decisió per separat, però encara no les sap ajuntar.|Programa cada decisión por separado, pero todavía no las sabe juntar."],
        ["Robot de veritat|Robot de verdad", "Mesura la llum dins i fora del túnel, ajusta el llindar i explica la diferència amb el simulador.|Mide la luz dentro y fuera del túnel, ajusta el umbral y explica la diferencia con el simulador.", "Prova el programa al robot, però no sap què canviar quan no funciona.|Prueba el programa en el robot, pero no sabe qué cambiar cuando no funciona."]
      ]
    },
    casa: "A casa, feu «Fanals del meu carrer»: mireu a quina hora s'encenen els fanals dos dies diferents i busqueu altres llums automàtics. Quin sensor deuen tenir?|En casa, haced «Farolas de mi calle»: mirad a qué hora se encienden las farolas dos días diferentes y buscad otras luces automáticas. ¿Qué sensor deben de tener?",
    slides: [
      { id: 's1', k: 'portada', t: "El fanal automàtic|La farola automática", x: "Fanals que s'encenen sols quan es fa fosc… i que s'apaguen sols al matí.|Farolas que se encienden solas cuando oscurece… y que se apagan solas por la mañana.",
        nota: "Objectiu: un fanal automàtic al simulador i un cotxe que encén els llums dins un túnel de veritat.|Objetivo: una farola automática en el simulador y un coche que enciende las luces dentro de un túnel de verdad." },
      { id: 's2', k: 'pregunta', t: "Qui encén els fanals?|¿Quién enciende las farolas?", x: "Algú passa cada vespre a encendre'ls? Com saben quan s'han d'encendre?|¿Alguien pasa cada tarde a encenderlas? ¿Cómo saben cuándo se tienen que encender?",
        nota: "Molts fanals tenen un sensor de llum (fotocèl·lula) o un rellotge programat. Avui farem servir el sensor.|Muchas farolas tienen un sensor de luz (fotocélula) o un reloj programado. Hoy usaremos el sensor." },
      { id: 's3', k: 'repas', t: "Recordem les alarmes|Recordemos las alarmas", punts: ["Quant dura una nota d'1 temps?|¿Cuánto dura una nota de 1 tiempo?", "Què passava si l'alarma no tenia «si no»?|¿Qué pasaba si la alarma no tenía «si no»?"],
        nota: "Respostes: 0,5 s; es quedava vermella per sempre. Avui el «si no» tornarà a ser clau.|Respuestas: 0,5 s; se quedaba roja para siempre. Hoy el «si no» volverá a ser clave." },
      { id: 's4', k: 'anim', t: "La llum d'un dia i el llindar|La luz de un día y el umbral", anim: 'k5lamp', x: "Quan la llum baixa de 100, el fanal s'encén; quan torna a pujar, s'apaga.|Cuando la luz baja de 100, la farola se enciende; cuando vuelve a subir, se apaga.",
        nota: "Assenyala els dos punts on la corba creua el llindar: al vespre (s'encén) i al matí (s'apaga).|Señala los dos puntos donde la curva cruza el umbral: por la tarde (se enciende) y por la mañana (se apaga)." },
      { id: 's5', k: 'robo', t: "Les 4 llums de sota|Las 4 luces de abajo", x: "Numerades de l'1 al 4: totes alhora o una a una.|Numeradas del 1 al 4: todas a la vez o una a una.",
        robo: { w: { w: 100, h: 50, dark: true, bot: [50, 25, 90], time: 5 }, prog: 'start{ under:1,red under:2,yellow under:3,green under:4,blue wait:1500 under:all,purple wait:1500 under:all,black }' },
        tip: "Quins colors veurem? RGB: vermell, verd i blau barrejats.|¿Qué colores veremos? RGB: rojo, verde y azul mezclados.",
        nota: "Ensenya-les en un robot real amb un programa de colors. Al MakeCode real, a més de l'extensió «maqueen», cal afegir l'extensió «neopixel»: les 4 llums són al pin P15 i el codi del botó &lt;/&gt; ja les prepara.|Enséñalas en un robot real con un programa de colores. En el MakeCode real, además de la extensión «maqueen», hay que añadir la extensión «neopixel»: las 4 luces están en el pin P15 y el código del botón &lt;/&gt; ya las prepara." },
      { id: 's6', k: 'robo', t: "El fanal complet|La farola completa", x: "Als 2 s es fa fosc i als 5 torna la llum. Què faran les llums de sota?|A los 2 s oscurece y a los 5 vuelve la luz. ¿Qué harán las luces de abajo?",
        robo: { w: { w: 100, h: 50, bot: [50, 25, 90], env: [{ t: 2, dark: true }, { t: 5, dark: false }], time: 7 }, prog: 'forever{ if:lL<100{ under:all,white } else{ under:all,black } }' },
        nota: "Que mirin el tauler: la llum passa de 260 a 25 i torna a 260.|Que miren el panel: la luz pasa de 260 a 25 y vuelve a 260." },
      { id: 's7', k: 'robo', t: "Compte: sense «si no»|Cuidado: sin «si no»", x: "Mateixa prova, sense «si no». S'apagarà a l'últim segon?|Misma prueba, sin «si no». ¿Se apagará en el último segundo?",
        robo: { w: { w: 100, h: 50, bot: [50, 25, 90], env: [{ t: 2, dark: true }, { t: 5, dark: false }], time: 7 }, prog: 'forever{ if:lL<100{ under:all,white } }' },
        nota: "No s'apaga: els llums es queden com estan fins que un bloc els canvia. Relaciona-ho amb l'alarma de la sessió 2.|No se apaga: las luces se quedan como están hasta que un bloque las cambia. Relaciónalo con la alarma de la sesión 2." },
      { id: 's8', k: 'robo', t: "El cotxe de la cercavila|El coche del pasacalles", x: "Dos «si» seguits: un per als llums (llum) i un per als motors (distància).|Dos «si» seguidos: uno para las luces (luz) y uno para los motores (distancia).",
        robo: { w: { w: 120, h: 50, bot: [12, 25, 90], walls: [[104, 8, 6, 34]], env: [{ t: 2.5, dark: true }], time: 11 }, prog: 'forever{ if:lL<100{ car:all,white } else{ car:all,black } if:dist<10{ stop:all } else{ run:all,fwd,120 } }' },
        blocks: ["si llum < 100 → llums blancs; si no → apagats|si luz < 100 → luces blancas; si no → apagadas", "si distància < 10 → atura; si no → endavant|si distancia < 10 → para; si no → adelante"],
        nota: "Les dues decisions no depenen l'una de l'altra: per això van una darrere l'altra, no una dins l'altra.|Las dos decisiones no dependen la una de la otra: por eso van una detrás de la otra, no una dentro de la otra." },
      { id: 's9', k: 'activitat', t: "El carrer de fanals|La calle de farolas", timer: 10, punts: ["Cada fanal té un llindar (50, 100, 150 o 200).|Cada farola tiene un umbral (50, 100, 150 o 200).", "Llum menor que el teu llindar → braços amunt.|Luz menor que tu umbral → brazos arriba.", "Si no → braços avall.|Si no → brazos abajo.", "Ronda 2: un fanal sense «si no».|Ronda 2: una farola sin «si no»."],
        nota: "Ves ensenyant targetes de llum a poc a poc. Pregunta qui s'encén primer (el llindar més alt) i quin estalvia més (el més baix).|Ve enseñando tarjetas de luz despacio. Pregunta quién se enciende primero (el umbral más alto) y cuál ahorra más (el más bajo)." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre «El fanal automàtic».|Abre «La farola automática».", "Fes fins a «Toca el bloc».|Haz hasta «Toca el bloque».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Resposta de «On acabarà?»: A (només avança els 2 s de foscor, uns 23 cm).|Respuesta de «¿Dónde terminará?»: A (solo avanza los 2 s de oscuridad, unos 23 cm)." },
      { id: 's11', k: 'activitat', t: "El túnel del carrer|El túnel de la calle", timer: 13, punts: ["Fanal: caixa damunt → llums encesos; sense caixa → apagats.|Farola: caja encima → luces encendidas; sin caja → apagadas.", "Si no va, mesureu la llum i canvieu el 100.|Si no va, medid la luz y cambiad el 100.", "Cotxe: carrer amb túnel i paret final.|Coche: calle con túnel y pared final.", "Llums dins el túnel, apagats a fora, para a la paret.|Luces dentro del túnel, apagadas fuera, para en la pared."],
        nota: "La caixa ha de tapar bé el sensor: si hi entra massa llum, que hi posin un drap a sobre.|La caja tiene que tapar bien el sensor: si entra demasiada luz, que pongan un trapo encima." },
      { id: 's12', k: 'robo', t: "El cotxe i el túnel|El coche y el túnel", x: "Al simulador es fa fosc amb el temps; a l'aula, la caixa fa la foscor.|En el simulador oscurece con el tiempo; en el aula, la caja hace la oscuridad.",
        robo: { w: { w: 120, h: 50, bot: [12, 25, 90], walls: [[104, 8, 6, 34]], env: [{ t: 2.5, dark: true }, { t: 5.5, dark: false }], time: 11 }, prog: 'forever{ if:lL<100{ car:all,white } else{ car:all,black } if:dist<10{ stop:all } else{ run:all,fwd,120 } }' },
        nota: "Aquí la foscor dura de 2,5 a 5,5 s, com si el robot travessés el túnel. Al robot real passa el mateix quan entra i surt de la caixa.|Aquí la oscuridad dura de 2,5 a 5,5 s, como si el robot atravesara el túnel. En el robot real pasa lo mismo cuando entra y sale de la caja." },
      { id: 's13', k: 'repte', t: "Reptes del fanal|Retos de la farola", timer: 7, punts: ["1. El llum intermitent (5 blocs)|1. La luz intermitente (5 bloques)", "2. El fanal de la plaça|2. La farola de la plaza", "3. De la nit al dia|3. De la noche al día", "4. El cotxe de la cercavila|4. El coche del pasacalles"],
        nota: "Al 3, el programa de partida ja encén el fanal: només cal afegir el «si no».|En el 3, el programa de partida ya enciende la farola: solo hay que añadir el «si no»." },
      { id: 's14', k: 'activitat', t: "Crea: el meu fanal de festa|Crea: mi farola de fiesta", timer: 3, x: "S'encén de nit com tu vulguis i s'apaga de dia. I el botó A?|Se enciende de noche como tú quieras y se apaga de día. ¿Y el botón A?",
        nota: "Anima'ls a fer servir les llums de sota una a una, de colors diferents.|Anímalos a usar las luces de abajo una a una, de colores diferentes." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Fanal: si llum < llindar, encès; si no, apagat.|Farola: si luz < umbral, encendida; si no, apagada.", "Sense «si no», no s'apaga mai.|Sin «si no», no se apaga nunca.", "Dos «si» seguits fan dues feines alhora.|Dos «si» seguidos hacen dos trabajos a la vez."],
        nota: "Propera sessió: el projecte de la casa intel·ligent, que ho junta tot.|Próxima sesión: el proyecto de la casa inteligente, que lo junta todo." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Escriu la condició «és de nit».|Escribe la condición «es de noche».", "Per què cal el «si no»?|¿Por qué hace falta el «si no»?"],
        nota: "Respostes: llum < 100; perquè s'apagui quan torna la llum.|Respuestas: luz < 100; para que se apague cuando vuelve la luz." }
    ],
    print: [
      { id: 'p1', t: "Targetes del carrer de fanals|Tarjetas de la calle de farolas", k: 'targetes',
        intro: "Targetes de llindar per als fanals (una per alumne/a que fa de fanal) i targetes de llum per al professor/a, que fa de cel.|Tarjetas de umbral para las farolas (una por alumno/a que hace de farola) y tarjetas de luz para el profesor/a, que hace de cielo.",
        items: [
          { t: "Llindar 50 🏮|Umbral 50 🏮", n: 2 }, { t: "Llindar 100 🏮|Umbral 100 🏮", n: 2 }, { t: "Llindar 150 🏮|Umbral 150 🏮", n: 2 }, { t: "Llindar 200 🏮|Umbral 200 🏮", n: 2 },
          { t: "Llum 260 ☀️|Luz 260 ☀️", n: 1 }, { t: "Llum 200 🌤️|Luz 200 🌤️", n: 1 }, { t: "Llum 120 🌇|Luz 120 🌇", n: 1 }, { t: "Llum 25 🌙|Luz 25 🌙", n: 1 }
        ] },
      { id: 'p2', t: "Pista: el carrer amb el túnel|Pista: la calle con el túnel", k: 'pista',
        intro: "Carrer d'1 m: dues tires de cinta negra separades 20 cm, la caixa de sabates a la meitat fent de túnel i un llibre dret al final fent de paret. El robot surt de l'esquerra.|Calle de 1 m: dos tiras de cinta negra separadas 20 cm, la caja de zapatos en el medio haciendo de túnel y un libro de pie al final haciendo de pared. El robot sale de la izquierda.",
        w: { w: 100, h: 30, bot: [8, 15, 90], lines: [{ p: [[2, 5], [98, 5]] }, { p: [[2, 25], [98, 25]] }], zones: [{ id: 't', r: [38, 6, 24, 18], col: 'grey', label: 'TÚNEL|TÚNEL' }], walls: [[92, 7, 4, 16]] },
        items: [
          { q: "Llum fora del túnel: ______ · dins del túnel: ______ · el nostre llindar: ______|Luz fuera del túnel: ______ · dentro del túnel: ______ · nuestro umbral: ______" },
          { q: "S'encenen els llums dins el túnel? S'apaguen en sortir?|¿Se encienden las luces dentro del túnel? ¿Se apagan al salir?" },
          { q: "A quina distància de la paret s'ha aturat? ______ cm|¿A qué distancia de la pared se ha parado? ______ cm" }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: la casa intel·ligent ---------- */
  'k5-4': {
    intro: "Projecte final de la unitat: l'alumnat planifica, programa per parts i prova una casa intel·ligent on el Maqueen fa de llum de nit, timbre, vigilant i majordom. S'hi ajunta tot el que han après (sensors de llum, ultrasons, avisos, botons) i dues idees noves: diversos guions treballant alhora i les condicions dobles amb «i». El més important és el mètode: planificar amb una taula, programar una funció cada vegada i provar-la abans d'afegir-ne una altra. La classe va de la planificació en paper a l'app, la casa de cartró amb el robot real i unes presentacions breus.|Proyecto final de la unidad: el alumnado planifica, programa por partes y prueba una casa inteligente donde el Maqueen hace de luz de noche, timbre, vigilante y mayordomo. Se junta todo lo que han aprendido (sensores de luz, ultrasonidos, avisos, botones) y dos ideas nuevas: varios guiones trabajando a la vez y las condiciones dobles con «y». Lo más importante es el método: planificar con una tabla, programar una función cada vez y probarla antes de añadir otra. La clase va de la planificación en papel a la app, la casa de cartón con el robot real y unas presentaciones breves.",
    claus: [
      "Un projecte gran es planifica: per a cada funció, quin sensor o botó, quina condició i què fa.|Un proyecto grande se planifica: para cada función, qué sensor o botón, qué condición y qué hace.",
      "Es programa i es prova una funció cada vegada: si falla, és l'última que has afegit.|Se programa y se prueba una función cada vez: si falla, es la última que has añadido.",
      "Els guions funcionen alhora; cada actuador l'ha de manar un sol guió perquè no es barallin.|Los guiones funcionan a la vez; cada actuador lo tiene que mandar un solo guion para que no se peleen.",
      "Amb «i», la condició és certa només si ho són les dues parts; amb «o», n'hi ha prou amb una.|Con «y», la condición es cierta solo si lo son las dos partes; con «o», basta con una."
    ],
    prev: [
      "Sensors de llum i llindar (sessió 1), alarmes i botó A (sessió 2), fanal amb «si no» (sessió 3).|Sensores de luz y umbral (sesión 1), alarmas y botón A (sesión 2), farola con «si no» (sesión 3).",
      "Parar a una distància amb els ultrasons (unitat 3).|Parar a una distancia con los ultrasonidos (unidad 3).",
      "La condició «o» de la papallona (sessió 1).|La condición «o» de la mariposa (sesión 1)."
    ],
    faq: [
      ["Les cases intel·ligents de veritat també tenen un robot a dins?|¿Las casas inteligentes de verdad también tienen un robot dentro?",
        "Normalment no: tenen sensors i actuadors repartits per la casa (llums, persianes, alarmes) i un programa que els connecta. El nostre Maqueen ho fa tot en una sola màquina.|Normalmente no: tienen sensores y actuadores repartidos por la casa (luces, persianas, alarmas) y un programa que los conecta. Nuestro Maqueen lo hace todo en una sola máquina."],
      ["Per què no puc posar el mateix llum al botó A i al «per sempre»?|¿Por qué no puedo poner la misma luz en el botón A y en el «para siempre»?",
        "Perquè el «per sempre» el torna a canviar cada 20 ms i el botó gairebé no es veu. Cada actuador, un sol guió.|Porque el «para siempre» la vuelve a cambiar cada 20 ms y el botón casi no se ve. Cada actuador, un solo guion."],
      ["Quina diferència hi ha entre «i» i «o»?|¿Qué diferencia hay entre «y» y «o»?",
        "Amb «i» s'han de complir les dues coses (de nit I algú a prop); amb «o», n'hi ha prou amb una (llum esquerra O dreta).|Con «y» se tienen que cumplir las dos cosas (de noche Y alguien cerca); con «o», basta con una (luz izquierda O derecha)."],
      ["Per què la pregunta doble ha d'anar primer?|¿Por qué la pregunta doble tiene que ir primero?",
        "Perquè el «si» respon la primera pregunta que és certa. Si «algú a prop» va primer, de nit també diria «benvinguda» i l'alarma no sortiria mai.|Porque el «si» responde la primera pregunta que es cierta. Si «alguien cerca» va primero, de noche también diría «bienvenida» y la alarma no saldría nunca."],
      ["Puc afegir més funcions de les tres?|¿Puedo añadir más funciones de las tres?",
        "Sí, però una cada vegada i provant-la abans de passar a la següent.|Sí, pero una cada vez y probándola antes de pasar a la siguiente."],
      ["Si al robot real no funciona, he fet malament el programa?|Si en el robot real no funciona, ¿he hecho mal el programa?",
        "No necessàriament: sovint només cal ajustar un número (llindar de llum o distància) a la vostra aula. Mesureu i canvieu-lo.|No necesariamente: a menudo solo hay que ajustar un número (umbral de luz o distancia) a vuestra aula. Medid y cambiadlo."]
    ],
    tec: [
      ["A MakeCode no apareixen els blocs del Maqueen (o el codi enganxat surt en vermell).|En MakeCode no aparecen los bloques del Maqueen (o el código pegado sale en rojo).",
        "Falta l'extensió: Extensions → busqueu «maqueen» → trieu «maqueen» (DFRobot). Els blocs surten a la categoria «Maqueen v5». Si el codi fa servir les llums de sota, afegiu també «neopixel».|Falta la extensión: Extensiones → buscad «maqueen» → elegid «maqueen» (DFRobot). Los bloques salen en la categoría «Maqueen v5». Si el código usa las luces de abajo, añadid también «neopixel»."],
      ["Després de descarregar, la micro:bit mostra una creu (X) que parpelleja i el robot no fa res.|Después de descargar, la micro:bit muestra una cruz (X) que parpadea y el robot no hace nada.",
        "És el bloc «initialize via I2C until success» (el primer del codi; en castellà, «Inicializar MaqueenV5 hasta éxito»): la micro:bit no troba el Maqueen. Comproveu l'interruptor del robot, les 3 piles AA i que la micro:bit estigui ben endollada fins al fons. Quan el troba, mostra un ✓.|Es el bloque «Inicializar MaqueenV5 hasta éxito» («initialize via I2C until success» en inglés), el primero del código: la micro:bit no encuentra el Maqueen. Comprobad el interruptor del robot, las 3 pilas AA y que la micro:bit esté bien enchufada hasta el fondo. Cuando lo encuentra, muestra un ✓."],
      ["El programa del simulador és massa llarg per copiar-lo a mà a MakeCode.|El programa del simulador es demasiado largo para copiarlo a mano en MakeCode.",
        "Feu servir el botó &lt;/&gt; del simulador: copia el JavaScript, enganxeu-lo a la pestanya JavaScript de MakeCode i torneu a «Blocs» per veure'l en blocs.|Usad el botón &lt;/&gt; del simulador: copia el JavaScript, pegadlo en la pestaña JavaScript de MakeCode y volved a «Bloques» para verlo en bloques."],
      ["El vigilant salta tota l'estona dins la casa de cartró.|El vigilante salta todo el rato dentro de la casa de cartón.",
        "Els ultrasons veuen la paret de la caixa: el robot ha de mirar cap a la porta retallada i el llindar ha de ser més petit que la distància fins a la porta.|Los ultrasonidos ven la pared de la caja: el robot tiene que mirar hacia la puerta recortada y el umbral tiene que ser menor que la distancia hasta la puerta."],
      ["El botó «Descarrega» no envia res a la micro:bit.|El botón «Descargar» no envía nada a la micro:bit.",
        "Amb Chrome o Edge, connecteu la micro:bit amb «Connecta el dispositiu» (WebUSB) i torneu a descarregar. Si no, arrossegueu el fitxer .hex descarregat a la unitat MICROBIT. Proveu un altre cable: alguns cables USB només carreguen.|Con Chrome o Edge, conectad la micro:bit con «Conectar dispositivo» (WebUSB) y volved a descargar. Si no, arrastrad el archivo .hex descargado a la unidad MICROBIT. Probad otro cable: algunos cables USB solo cargan."]
    ],
    seg: [
      "Robot: 3 piles AA del mateix tipus i carregades; no barregeu piles noves i velles. Interruptor apagat mentre es munta, s'endolla la micro:bit o es canvien les piles.|Robot: 3 pilas AA del mismo tipo y cargadas; no mezcléis pilas nuevas y viejas. Interruptor apagado mientras se monta, se enchufa la micro:bit o se cambian las pilas.",
      "En aquesta prova el robot no es mou: la casa a terra o al centre de la taula. Si proveu el majordom, feu-ho a terra.|En esta prueba el robot no se mueve: la casa en el suelo o en el centro de la mesa. Si probáis el mayordomo, hacedlo en el suelo.",
      "Retalls de cartró: les portes les retalla el professor/a abans; l'alumnat només decora amb retoladors.|Recortes de cartón: las puertas las recorta el profesor/a antes; el alumnado solo decora con rotuladores.",
      "Presentacions: tothom aplaudeix i fa una pregunta amable; cap grup no és millor ni pitjor per un error al robot.|Presentaciones: todo el mundo aplaude y hace una pregunta amable; ningún grupo es mejor ni peor por un error en el robot."
    ],
    extra: [
      "Mode festa amb el botó B: colors diferents a cada llum de sota i una melodia; el botó A torna al mode normal.|Modo fiesta con el botón B: colores diferentes en cada luz de abajo y una melodía; el botón A vuelve al modo normal.",
      "Persiana automàtica: si hi ha molta llum (llanterna a prop), la icona de la fletxa avall; si no, la fletxa amunt.|Persiana automática: si hay mucha luz (linterna cerca), el icono de la flecha abajo; si no, la flecha arriba.",
      "Manual d'instruccions: cada grup escriu un full per a una persona que no ha vist mai la casa: què fa cada botó i què passa de nit.|Manual de instrucciones: cada grupo escribe una hoja para una persona que no ha visto nunca la casa: qué hace cada botón y qué pasa de noche."
    ],
    trans: [
      "Sessions 1-3: la casa junta el sensor de llum, les alarmes, el timbre i el fanal de la unitat.|Sesiones 1-3: la casa junta el sensor de luz, las alarmas, el timbre y la farola de la unidad.",
      "Unitat 6: les variables i el control intel·ligent faran que el robot recordi i compti (per exemple, quants visitants han vingut).|Unidad 6: las variables y el control inteligente harán que el robot recuerde y cuente (por ejemplo, cuántos visitantes han venido).",
      "Llengua: explicar oralment un projecte i escriure'n instruccions clares; tecnologia: la domòtica i l'estalvi d'energia.|Lengua: explicar oralmente un proyecto y escribir instrucciones claras; tecnología: la domótica y el ahorro de energía."
    ],
    obj: [
      "L'alumne/a planifica un projecte amb una taula de funcions (sensor o botó, condició i acció) abans de programar-lo.|El alumno/a planifica un proyecto con una tabla de funciones (sensor o botón, condición y acción) antes de programarlo.",
      "L'alumne/a fa servir diversos guions alhora («en iniciar», «per sempre», «en prémer A / B») i evita que dos guions manin el mateix actuador.|El alumno/a usa varios guiones a la vez («al iniciar», «para siempre», «al pulsar A / B») y evita que dos guiones manden el mismo actuador.",
      "L'alumne/a fa servir condicions dobles amb «i» per combinar la llum i la distància.|El alumno/a usa condiciones dobles con «y» para combinar la luz y la distancia.",
      "L'alumne/a programa, prova i presenta una casa intel·ligent amb llum de nit, timbre i vigilant, al simulador i al robot real.|El alumno/a programa, prueba y presenta una casa inteligente con luz de noche, timbre y vigilante, en el simulador y en el robot real."
    ],
    comp: [
      "Competència digital (CD5): dissenyar i depurar un sistema automàtic per parts|Competencia digital (CD5): diseñar y depurar un sistema automático por partes",
      "Pensament computacional: descomposició, esdeveniments en paral·lel i condicions compostes|Pensamiento computacional: descomposición, eventos en paralelo y condiciones compuestas",
      "Tecnologia: la domòtica i l'estalvi d'energia a casa|Tecnología: la domótica y el ahorro de energía en casa",
      "Comunicació oral: presentar un projecte i explicar com funciona|Comunicación oral: presentar un proyecto y explicar cómo funciona"
    ],
    vocab: [
      ["Domòtica|Domótica", "Tecnologia que fa que una casa faci coses sola (llums, persianes, alarmes).|Tecnología que hace que una casa haga cosas sola (luces, persianas, alarmas)."],
      ["Planificar|Planificar", "Decidir què farà el projecte i com, abans de programar-lo.|Decidir qué hará el proyecto y cómo, antes de programarlo."],
      ["Guions en paral·lel|Guiones en paralelo", "Diversos guions que funcionen alhora, cadascun amb la seva feina.|Varios guiones que funcionan a la vez, cada uno con su trabajo."],
      ["Condició doble («i»)|Condición doble («y»)", "Una pregunta que només és certa si ho són les dues parts.|Una pregunta que solo es cierta si lo son las dos partes."],
      ["Provar per parts|Probar por partes", "Programar una funció, comprovar-la i, després, afegir-ne una altra.|Programar una función, comprobarla y, después, añadir otra."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a «Projecte: la casa intel·ligent»|Un ordenador por alumno/a con Numi Tech abierto en «Proyecto: la casa inteligente»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit Maqueen per grup de 3-4 i una caixa de cartró gran per grup per fer la casa (amb una porta retallada)|Un kit Maqueen por grupo de 3-4 y una caja de cartón grande por grupo para hacer la casa (con una puerta recortada)",
        "Una llanterna per grup, un llibre que faci de visitant i retoladors per decorar la casa|Una linterna por grupo, un libro que haga de visitante y rotuladores para decorar la casa"
      ],
      imprimir: ["Fitxa: el plànol i la taula del projecte|Ficha: el plano y la tabla del proyecto", "Codi MakeCode: la casa intel·ligent|Código MakeCode: la casa inteligente"],
      prep: [
        "Imprimir una fitxa del projecte per alumne/a.|Imprimir una ficha del proyecto por alumno/a.",
        "Retallar una porta a cada caixa (uns 15 × 10 cm) perquè el robot pugui vigilar l'entrada des de dins.|Recortar una puerta en cada caja (unos 15 × 10 cm) para que el robot pueda vigilar la entrada desde dentro.",
        "Preparar un racó per a la presentació final, amb un robot muntat a dins d'una casa de prova.|Preparar un rincón para la presentación final, con un robot montado dentro de una casa de prueba.",
        "Provar les demos de les diapositives 6 i 8.|Probar las demos de las diapositivas 6 y 8."
      ]
    },
    plan: [
      { min: 4, t: "Benvinguda: la casa d'exposició|Bienvenida: la casa de exposición", fase: 'inici',
        fa: "Presenta el projecte final de la unitat. Pregunta què fa una casa intel·ligent i recull idees. Repassa el fanal i el timbre amb les preguntes de la diapositiva 3.|Presenta el proyecto final de la unidad. Pregunta qué hace una casa inteligente y recoge ideas. Repasa la farola y el timbre con las preguntas de la diapositiva 3.",
        diu: ["Quines coses podria fer sola una casa?|¿Qué cosas podría hacer sola una casa?", "Quins sensors i quins avisos ja sabem fer servir?|¿Qué sensores y qué avisos ya sabemos usar?", "Quin projecte de la unitat us ha agradat més: la papallona, l'alarma o el fanal?|¿Qué proyecto de la unidad os ha gustado más: la mariposa, la alarma o la farola?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Planificar, guions alhora i «i»|Planificar, guiones a la vez e «y»", fase: 'teoria',
        fa: "Mostra la taula del projecte i omple'n una fila amb la classe. Executa la demo dels guions alhora i la dels guions que es barallen: que la classe expliqui per què el vermell no es veu. Explica la condició doble amb «i» amb els quatre casos.|Muestra la tabla del proyecto y rellena una fila con la clase. Ejecuta la demo de los guiones a la vez y la de los guiones que se pelean: que la clase explique por qué el rojo no se ve. Explica la condición doble con «y» con los cuatro casos.",
        diu: ["Per a la llum de nit: quin sensor, quina condició, què fa?|Para la luz de noche: ¿qué sensor, qué condición, qué hace?", "Per què el botó A no aconsegueix posar el vermell?|¿Por qué el botón A no consigue poner el rojo?", "De dia i amb algú a prop: sona l'alarma?|De día y con alguien cerca: ¿suena la alarma?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El plànol de la casa|El plano de la casa", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa: dibuixa el plànol (rebedor, porta, on és el robot) i completa la taula amb tres funcions com a mínim. Després, per parelles, intercanvien la fitxa i el company/a busca dos problemes: un actuador manat per dos guions o una funció sense sensor. Corregeixen la seva taula.|Cada alumno/a rellena la ficha: dibuja el plano (recibidor, puerta, dónde está el robot) y completa la tabla con tres funciones como mínimo. Después, por parejas, intercambian la ficha y el compañero/a busca dos problemas: un actuador mandado por dos guiones o una función sin sensor. Corrigen su tabla.",
        diu: ["Cada funció té el seu sensor o botó?|¿Cada función tiene su sensor o botón?", "Hi ha algun llum manat per dos guions?|¿Hay alguna luz mandada por dos guiones?", "Quina funció fa servir el botó A i quina la distància? (el timbre; el vigilant)|¿Qué función usa el botón A y cuál la distancia? (el timbre; el vigilante)"],
        slides: ['s9'], app: "Cap: activitat sense pantalla (la fitxa servirà per al projecte).|Ninguna: actividad sin pantalla (la ficha servirá para el proyecto).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 12, t: "A l'ordinador: les tres parts|En el ordenador: las tres partes", fase: 'ordinador',
        fa: "Fan el principi de la sessió (repàs, missió, «Descobreix», ordenar els passos, «Toca el bloc» i la pausa) i les tres parts: la porta amb dos botons, benvinguda o alarma, i el majordom. El pas «El plànol de la meva casa» ja l'han fet en paper: poden tocar «Ho he fet».|Hacen el principio de la sesión (repaso, misión, «Descubre», ordenar los pasos, «Toca el bloque» y la pausa) y las tres partes: la puerta con dos botones, bienvenida o alarma, y el mayordomo. El paso «El plano de mi casa» ya lo han hecho en papel: pueden tocar «Lo he hecho».",
        diu: ["A la part 2, quina pregunta va primer, la doble o la simple? Per què?|En la parte 2, ¿qué pregunta va primero, la doble o la simple? ¿Por qué?", "Al majordom, qui engega els motors i qui els atura?|En el mayordomo, ¿quién arranca los motores y quién los para?", "A la part 1, cal algun «espera»? (no: cada botó té el seu guió)|En la parte 1, ¿hace falta algún «espera»? (no: cada botón tiene su guion)"],
        slides: ['s10', 's11'], app: "Del «Recorda» a la part 3: repàs, la missió, «Descobreix», ordenar els passos, el plànol (ja fet), «Toca el bloc», la pausa i les parts 1, 2 i 3.|Del «Recuerda» a la parte 3: repaso, la misión, «Descubre», ordenar los pasos, el plano (ya hecho), «Toca el bloque», la pausa y las partes 1, 2 y 3.", org: "Individual|Individual" },
      { min: 14, t: "La casa de cartró amb el Maqueen|La casa de cartón con el Maqueen", fase: 'robot',
        fa: "Grups de 3-4 per kit. Munten la casa amb la caixa: el robot a dins, mirant la porta. Carreguen el codi de la casa de l'imprimible (o el que hagin fet, passant-lo amb el botó del codi MakeCode del simulador) i proven les tres funcions una a una: tapar la casa (o apagar el llum del racó) per a la llum de nit; prémer A per al timbre; acostar el llibre a la porta per al vigilant. El secretari/ària apunta a la fitxa què funciona i què han hagut de canviar (llindars, distàncies). Seguretat: la casa a terra o al centre de la taula; el robot no es mou en aquesta prova.|Grupos de 3-4 por kit. Montan la casa con la caja: el robot dentro, mirando la puerta. Cargan el código de la casa del imprimible (o el que hayan hecho, pasándolo con el botón del código MakeCode del simulador) y prueban las tres funciones una a una: tapar la casa (o apagar la luz del rincón) para la luz de noche; pulsar A para el timbre; acercar el libro a la puerta para el vigilante. El secretario/a apunta en la ficha qué funciona y qué han tenido que cambiar (umbrales, distancias). Seguridad: la casa en el suelo o en el centro de la mesa; el robot no se mueve en esta prueba.",
        diu: ["Proveu una funció cada vegada: quina falla? Quin número hi canviaríeu?|Probad una función cada vez: ¿cuál falla? ¿Qué número cambiaríais?", "Funciona igual que al simulador? Què ha canviat?|¿Funciona igual que en el simulador? ¿Qué ha cambiado?", "Quina funció heu provat primer i per què?|¿Qué función habéis probado primero y por qué?"],
        slides: ['s12', 's13'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers|Grupos de 3-4 por kit con papeles" },
      { min: 8, t: "Crea: la meva casa intel·ligent|Crea: mi casa inteligente", fase: 'crea',
        fa: "Cada alumne/a programa al simulador la casa del seu plànol (llum de nit, timbre i vigilant com a mínim) i la desa. Qui acabi, hi afegeix una funció extra (botó B, colors, melodia).|Cada alumno/a programa en el simulador la casa de su plano (luz de noche, timbre y vigilante como mínimo) y la guarda. Quien termine, añade una función extra (botón B, colores, melodía).",
        diu: ["Comprova cada criteri: la llum de nit, el timbre, el vigilant.|Comprueba cada criterio: la luz de noche, el timbre, el vigilante.", "Quina funció extra hi has afegit?|¿Qué función extra has añadido?", "Si la funció extra fa fallar el projecte, què fas? (la treus i la tornes a afegir a poc a poc)|Si la función extra hace fallar el proyecto, ¿qué haces? (la quitas y la vuelves a añadir poco a poco)"],
        slides: ['s14'], app: "Pas «Crea»: La meva casa intel·ligent.|Paso «Crea»: Mi casa inteligente.", org: "Individual|Individual" },
      { min: 4, t: "Presentacions i tiquet|Presentaciones y ticket", fase: 'tancament',
        fa: "Dos o tres grups presenten la seva casa de cartró en un minut: quines funcions té i què van haver de canviar. Repassa el resum, deixa fer les preguntes finals de l'app i fes el tiquet a la porta.|Dos o tres grupos presentan su casa de cartón en un minuto: qué funciones tiene y qué tuvieron que cambiar. Repasa el resumen, deja hacer las preguntas finales de la app y haz el ticket en la puerta.",
        diu: ["Quina funció us ha costat més? Com l'heu arreglada?|¿Qué función os ha costado más? ¿Cómo la habéis arreglado?", "Què és el més important per fer un projecte gran sense perdre's? (planificar i provar per parts)|¿Qué es lo más importante para hacer un proyecto grande sin perderse? (planificar y probar por partes)", "Si haguéssiu de vendre la vostra casa, quina funció ensenyaríeu primer?|Si tuvierais que vender vuestra casa, ¿qué función enseñaríais primero?"],
        slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Ho programa tot de cop i, quan falla, no sap quina part és.|Lo programa todo de golpe y, cuando falla, no sabe qué parte es.",
        "Que esborri (o desactivi) totes les funcions menys una i la provi sola. Funciona? Llavors, la següent.|Que borre (o desactive) todas las funciones menos una y la pruebe sola. ¿Funciona? Entonces, la siguiente."],
      ["Posa el mateix llum al botó A i al «per sempre», i el botó sembla que no faci res.|Pone la misma luz en el botón A y en el «para siempre», y parece que el botón no hace nada.",
        "Recorda la demo dels guions que es barallen: qui guanya? Que el botó faci servir un altre actuador (una nota, una icona).|Recuerda la demo de los guiones que se pelean: ¿quién gana? Que el botón use otro actuador (una nota, un icono)."],
      ["A «benvinguda o alarma», posa primer el «si distància < 25» i l'alarma de nit no surt mai.|En «bienvenida o alarma», pone primero el «si distancia < 25» y la alarma de noche no sale nunca.",
        "Pregunta: de nit i amb algú a prop, quina pregunta respon sí primer? Que posi la pregunta doble al davant.|Pregunta: de noche y con alguien cerca, ¿qué pregunta responde sí primero? Que ponga la pregunta doble delante."],
      ["Al majordom, posa un «espera» per arribar a la porta i a l'altra pista xoca.|En el mayordomo, pone un «espera» para llegar a la puerta y en la otra pista choca.",
        "Pregunta: el robot sap a quina distància és la porta? Quin sensor li ho pot dir mentre avança?|Pregunta: ¿el robot sabe a qué distancia está la puerta? ¿Qué sensor se lo puede decir mientras avanza?"],
      ["Al robot real, la llum de nit no s'encén perquè la caixa deixa entrar llum per la porta.|En el robot real, la luz de noche no se enciende porque la caja deja entrar luz por la puerta.",
        "Que mesuri la llum dins la casa (codi de la sessió 1) i ajusti el llindar, o que enfosqueixi el racó.|Que mida la luz dentro de la casa (código de la sesión 1) y ajuste el umbral, o que oscurezca el rincón."],
      ["Fa servir «o» en lloc d'«i» a l'alarma de nit i l'alarma sona de dia quan arriba algú.|Usa «o» en lugar de «y» en la alarma de noche y la alarma suena de día cuando llega alguien.",
        "Que llegeixi la condició en veu alta amb el cas «de dia i algú a prop»: és certa? Amb «i», han de ser certes les dues parts.|Que lea la condición en voz alta con el caso «de día y alguien cerca»: ¿es cierta? Con «y», tienen que ser ciertas las dos partes."]
    ],
    diff: {
      mes: "Afegir un mode festa amb el botó B (colors de sota diferents i una melodia) i una alarma de dos nivells; presentar-ho explicant quin guió fa cada feina.|Añadir un modo fiesta con el botón B (colores de abajo diferentes y una melodía) y una alarma de dos niveles; presentarlo explicando qué guion hace cada trabajo.",
      menys: "Fer el projecte amb dues funcions (llum de nit i timbre) i afegir el vigilant amb el programa de la vitrina de la sessió 2 com a model.|Hacer el proyecto con dos funciones (luz de noche y timbre) y añadir el vigilante con el programa de la vitrina de la sesión 2 como modelo."
    },
    aval: {
      ticket: ["Digues una funció de la teva casa amb el seu sensor, la condició i el que fa.|Di una función de tu casa con su sensor, la condición y lo que hace.",
        "Quan és certa la condició «llum < 100 i distància < 25»?|¿Cuándo es cierta la condición «luz < 100 y distancia < 25»?"],
      rubric: [
        ["Planificació|Planificación", "Omple la taula amb tres funcions completes i detecta actuadors repetits.|Rellena la tabla con tres funciones completas y detecta actuadores repetidos.", "Fa la llista de funcions, però li falten sensors o condicions.|Hace la lista de funciones, pero le faltan sensores o condiciones."],
        ["Guions i condicions|Guiones y condiciones", "Reparteix les feines en guions diferents i fa servir «i» quan cal.|Reparte los trabajos en guiones diferentes y usa «y» cuando hace falta.", "Ho posa gairebé tot en un sol guió i necessita ajuda amb la condició doble.|Lo pone casi todo en un solo guion y necesita ayuda con la condición doble."],
        ["Provar i presentar|Probar y presentar", "Prova per parts al simulador i al robot real i explica què ha canviat.|Prueba por partes en el simulador y en el robot real y explica qué ha cambiado.", "Prova el projecte sencer al final i costa saber què falla.|Prueba el proyecto entero al final y cuesta saber qué falla."],
        ["Robot real i presentació|Robot real y presentación", "Prova la casa al robot real funció per funció i la presenta explicant què ha ajustat.|Prueba la casa en el robot real función por función y la presenta explicando qué ha ajustado.", "Prova la casa al robot real, però li costa explicar què ha canviat i per què.|Prueba la casa en el robot real, pero le cuesta explicar qué ha cambiado y por qué."]
      ]
    },
    casa: "A casa, ensenyeu el projecte a la família i busqueu a casa coses que podrien ser intel·ligents: quin sensor farien servir i què farien? Feu-ne la taula com a classe.|En casa, enseñad el proyecto a la familia y buscad en casa cosas que podrían ser inteligentes: ¿qué sensor usarían y qué harían? Haced la tabla como en clase.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: la casa intel·ligent|Proyecto: la casa inteligente", x: "El Maqueen serà el cervell d'una casa: llum de nit, timbre, vigilant i majordom.|El Maqueen será el cerebro de una casa: luz de noche, timbre, vigilante y mayordomo.",
        nota: "Explica que avui es planifica, es programa per parts, es prova al robot real i es presenta.|Explica que hoy se planifica, se programa por partes, se prueba en el robot real y se presenta." },
      { id: 's2', k: 'pregunta', t: "Què fa una casa intel·ligent?|¿Qué hace una casa inteligente?", x: "Llums que s'encenen soles, persianes que baixen, alarmes… Quins sensors necessiten?|Luces que se encienden solas, persianas que bajan, alarmas… ¿Qué sensores necesitan?",
        nota: "Apunta les idees a la pissarra i encercla les que podem fer amb el Maqueen.|Apunta las ideas en la pizarra y rodea las que podemos hacer con el Maqueen." },
      { id: 's3', k: 'repas', t: "Recordem|Recordemos", punts: ["Quina part apaga el fanal quan torna la llum?|¿Qué parte apaga la farola cuando vuelve la luz?", "Quin guió fas servir per al timbre?|¿Qué guion usas para el timbre?", "Alarma = sensor + … + …|Alarma = sensor + … + …"],
        nota: "Respostes: el «si no»; «en prémer el botó A»; condició i avisos.|Respuestas: el «si no»; «al pulsar el botón A»; condición y avisos." },
      { id: 's4', k: 'anim', t: "La taula del projecte|La tabla del proyecto", anim: 'k5plan', x: "Funció · sensor o botó · condició · què fa.|Función · sensor o botón · condición · qué hace.",
        nota: "Omple'n una fila nova amb la classe, per exemple «persiana: llum > 600 → icona fletxa avall».|Rellena una fila nueva con la clase, por ejemplo «persiana: luz > 600 → icono flecha abajo»." },
      { id: 's5', k: 'concepte', t: "Provar per parts|Probar por partes", pic: 'img/ic/puzzle.webp', punts: ["1. Fes la llista del que ha de fer.|1. Haz la lista de lo que tiene que hacer.", "2. Programa una sola funció.|2. Programa una sola función.", "3. Prova-la fins que funcioni.|3. Pruébala hasta que funcione.", "4. Afegeix la següent i torna-ho a provar tot.|4. Añade la siguiente y vuelve a probarlo todo."],
        nota: "Així treballen els enginyers: si falla, saps que és l'última cosa que has afegit.|Así trabajan los ingenieros: si falla, sabes que es lo último que has añadido." },
      { id: 's6', k: 'robo', t: "Tres guions alhora|Tres guiones a la vez", x: "En iniciar: casa. En prémer A: timbre i endavant. Per sempre: para a la porta.|Al iniciar: casa. Al pulsar A: timbre y adelante. Para siempre: para en la puerta.",
        robo: { w: { w: 120, h: 80, bot: [24, 40, 90], walls: [[4, 6, 58, 3], [4, 71, 58, 3], [4, 6, 3, 68], [59, 6, 3, 22], [59, 52, 3, 22]], zones: [{ id: 'r', r: [8, 10, 50, 60], col: 'grey' }, { id: 'p', r: [62, 28, 16, 24], col: 'orange', label: 'PORTA|PUERTA' }], press: [{ t: 2, b: 'A' }], time: 8 }, prog: 'start{ icon:house } forever{ if:dist<12{ stop:all icon:happy } } A{ note:E5,1/2 note:C5,1 run:all,fwd,110 }' },
        nota: "Remarca que cap guió espera els altres: el «per sempre» vigila mentre el botó engega els motors.|Remarca que ningún guion espera a los otros: el «para siempre» vigila mientras el botón arranca los motores." },
      { id: 's7', k: 'robo', t: "Compte: guions que es barallen|Cuidado: guiones que se pelean", x: "El botó A posa vermell; el «per sempre» posa verd. Quin color veurem?|El botón A pone rojo; el «para siempre» pone verde. ¿Qué color veremos?",
        robo: { w: { w: 100, h: 50, bot: [50, 25, 90], press: [{ t: 1.5, b: 'A' }], time: 5 }, prog: 'forever{ car:all,green } A{ car:all,red note:C5,2 }' },
        nota: "Gairebé sempre verd: el «per sempre» el torna a posar cada 20 ms. Solució: un actuador, un sol guió.|Casi siempre verde: el «para siempre» lo vuelve a poner cada 20 ms. Solución: un actuador, un solo guion." },
      { id: 's8', k: 'anim', t: "Dues condicions amb «i»|Dos condiciones con «y»", anim: 'k5and', x: "L'alarma només sona si és de nit I hi ha algú a prop.|La alarma solo suena si es de noche Y hay alguien cerca.",
        nota: "Feu els quatre casos amb els braços: un braç per condició; l'alarma només si els dos són amunt.|Haced los cuatro casos con los brazos: un brazo por condición; la alarma solo si los dos están arriba." },
      { id: 's9', k: 'activitat', t: "El plànol de la casa|El plano de la casa", timer: 10, punts: ["Dibuixa el plànol: rebedor, porta i robot.|Dibuja el plano: recibidor, puerta y robot.", "Omple la taula amb tres funcions.|Rellena la tabla con tres funciones.", "Intercanvia la fitxa: el company/a busca problemes.|Intercambia la ficha: el compañero/a busca problemas.", "Corregeix la teva taula.|Corrige tu tabla."],
        nota: "Problemes típics: un llum manat per dos guions, una funció sense sensor, condicions que no es poden complir.|Problemas típicos: una luz mandada por dos guiones, una función sin sensor, condiciones que no se pueden cumplir." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre «Projecte: la casa intel·ligent».|Abre «Proyecto: la casa inteligente».", "Fes les parts 1, 2 i 3, una a una.|Haz las partes 1, 2 y 3, una a una.", "Prova cada part abans de passar a la següent.|Prueba cada parte antes de pasar a la siguiente."],
        nota: "Si algú s'encalla a la part 2, recorda l'ordre: primer la pregunta doble, després la simple.|Si alguien se atasca en la parte 2, recuerda el orden: primero la pregunta doble, después la simple." },
      { id: 's11', k: 'repte', t: "Les tres parts|Las tres partes", punts: ["1. La porta amb dos botons (A i B)|1. La puerta con dos botones (A y B)", "2. Benvinguda o alarma (llum i distància)|2. Bienvenida o alarma (luz y distancia)", "3. El majordom (botó A + distància)|3. El mayordomo (botón A + distancia)"],
        nota: "Cada part és una funció de la casa: al projecte final les ajuntaran.|Cada parte es una función de la casa: en el proyecto final las juntarán." },
      { id: 's12', k: 'activitat', t: "La casa de cartró|La casa de cartón", timer: 14, punts: ["Robot dins la casa, mirant la porta.|Robot dentro de la casa, mirando la puerta.", "Carregueu el codi i proveu una funció cada vegada.|Cargad el código y probad una función cada vez.", "Llum de nit: tapeu la casa. Timbre: A. Vigilant: el llibre a la porta.|Luz de noche: tapad la casa. Timbre: A. Vigilante: el libro en la puerta.", "Apunteu què heu canviat.|Apuntad qué habéis cambiado."],
        nota: "Passa per les cases preguntant quina funció estan provant. Si en proven dues alhora, que tornin a una.|Pasa por las casas preguntando qué función están probando. Si prueban dos a la vez, que vuelvan a una." },
      { id: 's13', k: 'robo', t: "El codi de la casa|El código de la casa", x: "Llum de nit, vigilant i timbre: tres funcions, tres feines diferents.|Luz de noche, vigilante y timbre: tres funciones, tres trabajos diferentes.",
        robo: { w: { w: 120, h: 80, bot: [24, 40, 90], walls: [[4, 6, 58, 3], [4, 71, 58, 3], [4, 6, 3, 68], [59, 6, 3, 22], [59, 52, 3, 22]], zones: [{ id: 'r', r: [8, 10, 50, 60], col: 'grey' }], leader: { path: [[112, 40], [64, 40], [64, 40], [112, 40]], speed: 9, wait: 3 }, env: [{ t: 6, dark: true }], press: [{ t: 2, b: 'A' }], time: 16 }, prog: 'start{ icon:house } forever{ if:lL<100{ under:all,white } else{ under:all,black } if:dist<25{ car:all,red } else{ car:all,green } } A{ note:E5,1/2 note:C5,1 note:G4,1/2 }' },
        blocks: ["llums de sota ← llum|luces de abajo ← luz", "llums del cotxe ← distància|luces del coche ← distancia", "brunzidor ← botó A|zumbador ← botón A"],
        nota: "Fes notar que cada actuador el mana un sol guió: no es barallen.|Haz notar que cada actuador lo manda un solo guion: no se pelean." },
      { id: 's14', k: 'activitat', t: "Crea: la meva casa intel·ligent|Crea: mi casa inteligente", timer: 8, x: "Programa la casa del teu plànol: llum de nit, timbre i vigilant. I una funció extra?|Programa la casa de tu plano: luz de noche, timbre y vigilante. ¿Y una función extra?",
        nota: "L'app comprova que hi hagi el sensor de llum, el timbre amb el botó A i la distància. La funció extra és lliure.|La app comprueba que estén el sensor de luz, el timbre con el botón A y la distancia. La función extra es libre." },
      { id: 's15', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["Sensors de llum, llindar i comparar esquerra i dreta.|Sensores de luz, umbral y comparar izquierda y derecha.", "Avisos amb so, llums i icones; botons A i B.|Avisos con sonido, luces e iconos; botones A y B.", "Fanals amb «si no» i projectes planificats per parts.|Farolas con «si no» y proyectos planificados por partes."],
        nota: "Felicita la classe: han fet la papallona, les alarmes, el fanal i la casa. A la unitat 6 aprendran les variables i el control intel·ligent.|Felicita a la clase: han hecho la mariposa, las alarmas, la farola y la casa. En la unidad 6 aprenderán las variables y el control inteligente." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Una funció de la teva casa: sensor, condició i acció.|Una función de tu casa: sensor, condición y acción.", "Quan és certa «llum < 100 i distància < 25»?|¿Cuándo es cierta «luz < 100 y distancia < 25»?"],
        nota: "Recull les fitxes del projecte: serveixen per avaluar la planificació.|Recoge las fichas del proyecto: sirven para evaluar la planificación." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: el plànol i la taula del projecte|Ficha: el plano y la tabla del proyecto", k: 'fitxa',
        intro: "Dibuixa la teva casa i omple la taula abans de programar. Després apunta què has provat al robot de veritat.|Dibuja tu casa y rellena la tabla antes de programar. Después apunta qué has probado en el robot de verdad.",
        items: [
          { q: "Dibuixa el plànol: el rebedor, la porta i on serà el robot (mirant cap a la porta).|Dibuja el plano: el recibidor, la puerta y dónde estará el robot (mirando hacia la puerta).", sol: "Lliure. Comproveu que els ultrasons del robot miren cap a la porta.|Libre. Comprobad que los ultrasonidos del robot miran hacia la puerta." },
          { q: "Funció 1 · Llum de nit: sensor ______ · condició ______ · fa ______|Función 1 · Luz de noche: sensor ______ · condición ______ · hace ______", sol: "Sensor de llum · llum < 100 · llums de sota blanques (i, si no, apagades).|Sensor de luz · luz < 100 · luces de abajo blancas (y, si no, apagadas)." },
          { q: "Funció 2 · Timbre: botó ______ · fa ______|Función 2 · Timbre: botón ______ · hace ______", rprog: 'A{ note:E5,1/2 note:C5,1 }', sol: "Botó A · una melodia (per exemple mi′ i do′).|Botón A · una melodía (por ejemplo mi′ y do′)." },
          { q: "Funció 3 · Vigilant: sensor ______ · condició ______ · fa ______|Función 3 · Vigilante: sensor ______ · condición ______ · hace ______", sol: "Ultrasons · distància < 25 · llums del cotxe vermells (i, si no, verds).|Ultrasonidos · distancia < 25 · luces del coche rojas (y, si no, verdes)." },
          { q: "Hi ha algun actuador manat per dos guions? Quin? Com ho arreglaràs?|¿Hay algún actuador mandado por dos guiones? ¿Cuál? ¿Cómo lo arreglarás?", sol: "Cada actuador ha de dependre d'un sol guió; si no, es barallen.|Cada actuador tiene que depender de un solo guion; si no, se pelean." },
          { q: "Al robot de veritat: què funciona? Quins números heu hagut de canviar?|En el robot de verdad: ¿qué funciona? ¿Qué números habéis tenido que cambiar?", sol: "Respostes de cada grup (llindar de llum, distància del vigilant…).|Respuestas de cada grupo (umbral de luz, distancia del vigilante…)." }
        ] },
      { id: 'p2', t: "Codi MakeCode: la casa intel·ligent|Código MakeCode: la casa inteligente", k: 'codi',
        intro: "Codi de partida per a la casa de cartró. A MakeCode afegiu dues extensions: «maqueen» i «neopixel» (per a les llums de sota). Canvieu el 100 (llum) i el 25 (distància) segons les vostres mesures.|Código de partida para la casa de cartón. En MakeCode añadid dos extensiones: «maqueen» y «neopixel» (para las luces de abajo). Cambiad el 100 (luz) y el 25 (distancia) según vuestras medidas.",
        items: [
          { t: "La casa: llum de nit, vigilant i timbre|La casa: luz de noche, vigilante y timbre", prog: 'start{ icon:house } forever{ if:lL<100{ under:all,white } else{ under:all,black } if:dist<25{ car:all,red } else{ car:all,green } } A{ note:E5,1/2 note:C5,1 note:G4,1/2 }' }
        ] }
    ]
  }
});
