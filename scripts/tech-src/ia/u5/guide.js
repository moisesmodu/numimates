/* Tech IA · unitat 5 · guies del professor (mateix esquema que tech-guide-c1.js).
   L'alumnat fa vibe coding amb la IA simulada de l'app (iavibe): descriu una app, la IA escriu el codi amb plantilles pròpies i
   hi posa un error típic, i les proves automàtiques («run») el destapen a l'editor de Tech Web (index.html, estil.css, app.js).
   La IA en directe només surt si el docent ha activat l'assistent al grup. Fets amb data: el risc dels paquets inventats per la
   IA («slopsquatting») i la injecció de prompts com a primer risc de la llista OWASP per a apps amb
   models de llenguatge (2025); vegeu les fonts a l'informe de la unitat. */
Object.assign(TGUIDE, {

  /* ---------- Sessió 1 · Vibe coding: de la idea a l'app ---------- */
  'i5-1': {
    intro: "L'alumnat descobreix el vibe coding: descriure una app amb paraules perquè una IA n'escrigui el codi i, després, llegir-lo, provar-lo i arreglar-lo. Veu on ajuda de veritat la IA (prototips, codi habitual, explicacions) i on falla (errors petits, casos oblidats, funcions i paquets inventats), i aprèn tres normes: no publicar codi que no s'entén ni s'ha provat, no posar mai claus ni dades personals als prompts i declarar l'ús de la IA respectant les llicències. A l'app fa un comptador i un dau amb errors plantats i crea la seva primera app.|El alumnado descubre el vibe coding: describir una app con palabras para que una IA escriba su código y, después, leerlo, probarlo y arreglarlo. Ve dónde ayuda de verdad la IA (prototipos, código habitual, explicaciones) y dónde falla (errores pequeños, casos olvidados, funciones y paquetes inventados), y aprende tres normas: no publicar código que no se entiende ni se ha probado, no poner nunca claves ni datos personales en los prompts y declarar el uso de la IA respetando las licencias. En la app hace un contador y un dado con errores plantados y crea su primera app.",
    claus: [
      "Vibe coding = descriure → la IA genera → llegir → provar → arreglar o demanar canvis, en bucle. La IA només és un pas del cicle.|Vibe coding = describir → la IA genera → leer → probar → arreglar o pedir cambios, en bucle. La IA solo es un paso del ciclo.",
      "La IA escriu el codi probable, no el comprovat: «sembla que funciona» no vol dir «funciona».|La IA escribe el código probable, no el comprobado: «parece que funciona» no quiere decir «funciona».",
      "Seguretat: res de claus ni dades personals als prompts; comprovar que funcions i paquets existeixen abans de fer-los servir.|Seguridad: nada de claves ni datos personales en los prompts; comprobar que funciones y paquetes existen antes de usarlos.",
      "Autoria: qui publica és responsable; cal declarar l'ús de la IA i respectar les llicències del codi.|Autoría: quien publica es responsable; hay que declarar el uso de la IA y respetar las licencias del código."
    ],
    prev: ["Unitat 3: un bon prompt té context, tasca, format, exemple, límits i comprovació. No cal saber JavaScript: l'app explica el que cal.|Unidad 3: un buen prompt tiene contexto, tarea, formato, ejemplo, límites y comprobación. No hace falta saber JavaScript: la app explica lo necesario."],
    obj: [
      "L'alumne/a explica què és el vibe coding i quin paper hi té la persona.|El alumno/a explica qué es el vibe coding y qué papel tiene la persona.",
      "L'alumne/a descriu una app petita perquè la IA en generi el codi i el prova amb les comprovacions de l'editor.|El alumno/a describe una app pequeña para que la IA genere su código y lo prueba con las comprobaciones del editor.",
      "L'alumne/a troba i arregla un error en codi generat per una IA.|El alumno/a encuentra y arregla un error en código generado por una IA.",
      "L'alumne/a coneix els riscos de seguretat i de llicències del codi generat i sap declarar l'ús de la IA.|El alumno/a conoce los riesgos de seguridad y de licencias del código generado y sabe declarar el uso de la IA."
    ],
    comp: [
      "Competència digital (CD3): creació de continguts digitals i programació|Competencia digital (CD3): creación de contenidos digitales y programación",
      "Competència digital (CD4): seguretat i protecció de dades|Competencia digital (CD4): seguridad y protección de datos",
      "Competència ciutadana (CC): ús ètic i responsable de la IA|Competencia ciudadana (CC): uso ético y responsable de la IA"
    ],
    vocab: [
      ["Vibe coding|Vibe coding", "Crear programari descrivint-lo amb llenguatge natural perquè una IA escrigui el codi, que després es prova i es corregeix.|Crear software describiéndolo con lenguaje natural para que una IA escriba el código, que después se prueba y se corrige."],
      ["Prototip|Prototipo", "Primera versió ràpida d'una app per provar una idea.|Primera versión rápida de una app para probar una idea."],
      ["Bug|Bug", "Error en un programa que fa que no faci el que s'esperava.|Error en un programa que hace que no haga lo que se esperaba."],
      ["Paquet (llibreria)|Paquete (librería)", "Codi fet per altres que es pot instal·lar i fer servir dins d'un programa.|Código hecho por otros que se puede instalar y usar dentro de un programa."],
      ["Llicència|Licencia", "Normes que posa l'autor/a sobre com es pot fer servir el seu codi (citar, compartir igual…).|Normas que pone el autor/a sobre cómo se puede usar su código (citar, compartir igual…)."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Vibe coding: de la idea a l'app»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Vibe coding: de la idea a la app»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Fulls i llapis per a l'app de paper|Hojas y lápices para la app de papel"],
      imprimir: ["L'app de paper (imprimible 1): un per parella|La app de papel (imprimible 1): uno por pareja"],
      prep: ["Fer abans el repte del comptador: descriure'l, generar-lo i trobar l'error (suma 2).|Hacer antes el reto del contador: describirlo, generarlo y encontrar el error (suma 2).", "Recordar on és la pestanya app.js de l'editor i la barra d'estat on surten els errors.|Recordar dónde está la pestaña app.js del editor y la barra de estado donde salen los errores.", "Decidir si es farà servir la IA en directe (només amb l'assistent activat) o la simulada (recomanat).|Decidir si se usará la IA en directo (solo con el asistente activado) o la simulada (recomendado)."]
    },
    plan: [
      { min: 5, t: 'Una app en trenta segons?|¿Una app en treinta segundos?', fase: 'inici',
        fa: "Explica el cas d'en Pau: una app generada en mig minut que suma dos per cada encert. Pregunta qui ha fet servir mai una IA per programar i què en pensa.|Explica el caso de Pau: una app generada en medio minuto que suma dos por cada acierto. Pregunta quién ha usado alguna vez una IA para programar y qué piensa.",
        diu: ["Si la IA escriu el codi, de qui és la culpa si l'app falla?|Si la IA escribe el código, ¿de quién es la culpa si la app falla?", "Com sabríeu que una app funciona bé?|¿Cómo sabríais que una app funciona bien?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: 'El cicle, els punts forts i els límits|El ciclo, los puntos fuertes y los límites', fase: 'teoria',
        fa: "Amb les animacions: el cicle del vibe coding, on ajuda la IA, «sembla que funciona ≠ funciona», seguretat (claus i paquets inventats) i llicències. Fes que l'alumnat digui on és la persona a cada pas.|Con las animaciones: el ciclo del vibe coding, dónde ayuda la IA, «parece que funciona ≠ funciona», seguridad (claves y paquetes inventados) y licencias. Haz que el alumnado diga dónde está la persona en cada paso.",
        diu: ["En quin pas del cicle hi ha la IA? I en quins, tu?|¿En qué paso del ciclo está la IA? ¿Y en cuáles, tú?", "Per què és perillós instal·lar un paquet que «ha recomanat la IA» sense mirar-lo?|¿Por qué es peligroso instalar un paquete que «ha recomendado la IA» sin mirarlo?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "L'app de paper|La app de papel", fase: 'desconnectat',
        fa: "Per parelles: el client/a descriu una app en tres frases i la IA, d'esquena, la dibuixa sense preguntar. Comparen, canvien els rols i milloren la descripció amb les tres preguntes.|Por parejas: el cliente describe una app en tres frases y la IA, de espaldas, la dibuja sin preguntar. Comparan, cambian los roles y mejoran la descripción con las tres preguntas.",
        diu: ["Què s'ha hagut d'inventar la IA?|¿Qué se ha tenido que inventar la IA?", "Què heu afegit a la segona descripció?|¿Qué habéis añadido a la segunda descripción?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 25, t: "A l'ordinador: comptador, dau i la primera app|En el ordenador: contador, dado y la primera app", fase: 'ordinador',
        fa: "Fan la sessió de l'app: classifiquen qui fa cada feina, la funció inventada, el comptador d'en Pau i el dau (amb errors plantats que destapen les proves), l'ordre del cicle i la primera app pròpia, que es desa. Fes la pausa activa amb tothom.|Hacen la sesión de la app: clasifican quién hace cada tarea, la función inventada, el contador de Pau y el dado (con errores plantados que destapan las pruebas), el orden del ciclo y la primera app propia, que se guarda. Haz la pausa activa con todo el mundo.",
        diu: ["Quina prova fallava? Quina línia ho feia?|¿Qué prueba fallaba? ¿Qué línea lo hacía?", "Com t'has adonat que el dau podia treure un 0?|¿Cómo te has dado cuenta de que el dado podía sacar un 0?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (la primera app amb IA).|De «Recuerda» hasta el paso «Crea» (la primera app con IA).", org: "Individual|Individual" },
      { min: 8, t: 'Tancament: qui mana?|Cierre: ¿quién manda?', fase: 'tancament',
        fa: "Resumeix el cicle i les tres normes. Anuncia la sessió següent: com descriure millor perquè la IA faci el que vols, i com llegir codi que no has escrit. Tiquet de sortida i com s'han sentit.|Resume el ciclo y las tres normas. Anuncia la sesión siguiente: cómo describir mejor para que la IA haga lo que quieres, y cómo leer código que no has escrito. Tique de salida y cómo se han sentido.",
        diu: ["Quina norma del vibe coding us sembla més important?|¿Qué norma del vibe coding os parece más importante?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Dona l'app per bona perquè «ja surt a la pantalla».|Da la app por buena porque «ya sale en la pantalla».", "Fes-li fer la prova a mà: tres clics, quant diu? Les comprovacions de l'editor són proves de veritat.|Hazle hacer la prueba a mano: tres clics, ¿cuánto dice? Las comprobaciones del editor son pruebas de verdad."],
      ["Torna a generar el codi una vegada i una altra esperant que surti bé.|Vuelve a generar el código una y otra vez esperando que salga bien.", "La IA simulada sempre hi posa l'error: cal trobar-lo a app.js. Ajuda'l a llegir la línia de la pista.|La IA simulada siempre pone el error: hay que encontrarlo en app.js. Ayúdale a leer la línea de la pista."],
      ["La descripció fa sortir una altra app (per exemple, una llista en lloc d'un comptador).|La descripción hace salir otra app (por ejemplo, una lista en lugar de un contador).", "Mira «La IA ha entès…»: les paraules que fa servir canvien l'app. Treu les que confonen.|Mira «La IA ha entendido…»: las palabras que usa cambian la app. Quita las que confunden."],
      ["Pensa que la IA no es pot equivocar perquè «és un ordinador».|Piensa que la IA no se puede equivocar porque «es un ordenador».", "Recorda la unitat 1: tria el que és probable. Un ordinador executa; la IA, endevina el codi.|Recuerda la unidad 1: elige lo que es probable. Un ordenador ejecuta; la IA adivina el código."],
      ["Escriu dades personals a la descripció (el seu nom complet, el centre…).|Escribe datos personales en la descripción (su nombre completo, el centro…).", "Aquí és simulat, però en una app real sortirien del dispositiu. L'hàbit és el que compta.|Aquí es simulado, pero en una app real saldrían del dispositivo. El hábito es lo que cuenta."]
    ],
    diff: {
      mes: "Nivell PRO: la pregunta del paquet inventat («slopsquatting»), el comptador amb reinici i missatge a 10 (descripció completa), el dau amb la cara (⚀…⚅) i el comptador de tirades, i el cicle amb els passos de seguretat. Repte extra: canviar el color del botó a estil.css.|Nivel PRO: la pregunta del paquete inventado («slopsquatting»), el contador con reinicio y mensaje a 10 (descripción completa), el dado con la cara (⚀…⚅) y el contador de tiradas, y el ciclo con los pasos de seguridad. Reto extra: cambiar el color del botón en estil.css.",
      menys: "Fer el comptador tots junts a la projecció i deixar el dau per parelles. Donar la descripció escrita a la pissarra perquè la copiïn i se centrin a trobar l'error.|Hacer el contador todos juntos en la proyección y dejar el dado por parejas. Dar la descripción escrita en la pizarra para que la copien y se centren en encontrar el error."
    },
    aval: {
      ticket: ["Explica el cicle del vibe coding en una frase.|Explica el ciclo del vibe coding en una frase.", "Digues una cosa que no posaries mai en un prompt per programar.|Di algo que no pondrías nunca en un prompt para programar."],
      rubric: [
        ["Cicle|Ciclo", "Explica el cicle i què hi fa la persona a cada pas.|Explica el ciclo y qué hace la persona en cada paso.", "Creu que la IA ho fa tot sola.|Cree que la IA lo hace todo sola."],
        ["Provar|Probar", "Prova l'app amb casos i troba l'error.|Prueba la app con casos y encuentra el error.", "Dona l'app per bona sense provar-la.|Da la app por buena sin probarla."],
        ["Seguretat|Seguridad", "No posa claus ni dades i desconfia de paquets desconeguts.|No pone claves ni datos y desconfía de paquetes desconocidos.", "No veu el risc de les claus o dels paquets.|No ve el riesgo de las claves o de los paquetes."],
        ["Autoria|Autoría", "Declara l'ús de la IA i respecta les llicències.|Declara el uso de la IA y respeta las licencias.", "Presenta el codi generat com a seu sense dir res.|Presenta el código generado como suyo sin decir nada."]
      ]
    },
    casa: "Ensenya a casa la teva primera app (és al portafoli) i explica-hi l'error que hi va posar la IA i com l'has arreglat. Pregunteu-vos: quines apps que feu servir cada dia podrien estar fetes, en part, amb IA?|Enseña en casa tu primera app (está en el portafolio) y explica el error que puso la IA y cómo lo has arreglado. Preguntaos: ¿qué apps que usáis cada día podrían estar hechas, en parte, con IA?",
    faq: [
      ["Llavors, ja no caldrà aprendre a programar?|Entonces, ¿ya no hará falta aprender a programar?", "Caldrà entendre el codi encara més: per descriure bé, llegir el que fa la IA, trobar-ne els errors i decidir si es pot publicar. La IA canvia com s'escriu el codi, no qui se'n fa responsable.|Hará falta entender el código todavía más: para describir bien, leer lo que hace la IA, encontrar sus errores y decidir si se puede publicar. La IA cambia cómo se escribe el código, no quién se responsabiliza de él."],
      ["La IA de l'app és de veritat?|¿La IA de la app es de verdad?", "Per defecte és simulada: plantilles pròpies de Numi que posen un error típic perquè l'alumnat el trobi. Si el grup té activat l'assistent, es pot provar la IA en directe amb un límit de preguntes.|Por defecto es simulada: plantillas propias de Numi que ponen un error típico para que el alumnado lo encuentre. Si el grupo tiene activado el asistente, se puede probar la IA en directo con un límite de preguntas."],
      ["És legal fer servir codi generat per IA?|¿Es legal usar código generado por IA?", "En general sí, però el codi pot assemblar-se a codi amb llicència. Cal seguir les condicions de l'eina, les llicències del codi que es reconegui i les normes del centre, i declarar-ne l'ús.|En general sí, pero el código puede parecerse a código con licencia. Hay que seguir las condiciones de la herramienta, las licencias del código que se reconozca y las normas del centro, y declarar su uso."]
    ],
    tec: [
      ["El botó «Genera el codi» no s'activa.|El botón «Genera el código» no se activa.", "La descripció ha de tenir almenys dos indicadors (què es veu, què passa quan…, detalls) i fer sortir la plantilla del repte. Mireu el quadre «La IA ha entès…».|La descripción debe tener al menos dos indicadores (qué se ve, qué pasa cuando…, detalles) y hacer salir la plantilla del reto. Mirad el cuadro «La IA ha entendido…»."],
      ["Les proves triguen a marcar-se.|Las pruebas tardan en marcarse.", "Les proves automàtiques s'executen en una pàgina amagada mig segon després de cada canvi. Espereu un moment després d'escriure.|Las pruebas automáticas se ejecutan en una página oculta medio segundo después de cada cambio. Esperad un momento después de escribir."]
    ],
    seg: ["No s'escriu cap dada personal ni cap clau a les descripcions. Si s'activa la IA en directe, el text surt del dispositiu: recordeu-ho abans de començar.|No se escribe ningún dato personal ni ninguna clave en las descripciones. Si se activa la IA en directo, el texto sale del dispositivo: recordadlo antes de empezar."],
    extra: [
      "Llengua: escriure la descripció d'una app com un text instructiu i comparar-ne dues versions.|Lengua: escribir la descripción de una app como un texto instructivo y comparar dos versiones.",
      "Matemàtiques: per què Math.random() * 6 dona de 0 a 5,99… i com es converteix en un dau de l'1 al 6.|Matemáticas: por qué Math.random() * 6 da de 0 a 5,99… y cómo se convierte en un dado del 1 al 6."
    ],
    trans: ["Unitat 3 (prompts) i sessió i5-2: descriure bé i llegir codi que no has escrit.|Unidad 3 (prompts) y sesión i5-2: describir bien y leer código que no has escrito."],
    slides: [
      { id: 's1', k: 'portada', t: "Vibe coding: de la idea a l'app|Vibe coding: de la idea a la app", x: 'Crea amb IA|Crea con IA', nota: "Primera sessió de la unitat 5.|Primera sesión de la unidad 5." },
      { id: 's2', k: 'pregunta', t: 'Una app en trenta segons?|¿Una app en treinta segundos?', x: "La IA d'en Pau fa l'app… i cada encert en suma dos.|La IA de Pau hace la app… y cada acierto suma dos.", nota: "Recull opinions: de qui és la culpa? com ho hauria vist?|Recoge opiniones: ¿de quién es la culpa? ¿cómo lo habría visto?" },
      { id: 's3', k: 'anim', t: 'El cicle del vibe coding|El ciclo del vibe coding', anim: 'i51loop', x: 'Descriu, genera, llegeix, prova, arregla.|Describe, genera, lee, prueba, arregla.', nota: "La IA només és un pas: la resta, la persona.|La IA solo es un paso: el resto, la persona." },
      { id: 's4', k: 'anim', t: 'On ajuda de veritat|Dónde ayuda de verdad', anim: 'i51good', x: "Ràpida amb el que és habitual; fluixa amb el que és nou o molt teu.|Rápida con lo habitual; floja con lo que es nuevo o muy tuyo.", nota: "Demana exemples d'apps «habituals».|Pide ejemplos de apps «habituales»." },
      { id: 's5', k: 'anim', t: 'Sembla que funciona ≠ funciona|Parece que funciona ≠ funciona', anim: 'i51limit', x: 'Regla d\'or: no publiquis codi que no entens ni has provat.|Regla de oro: no publiques código que no entiendes ni has probado.', nota: "Llegiu junts la línia «count + 2».|Leed juntos la línea «count + 2»." },
      { id: 's6', k: 'anim', t: 'El que no li has de donar mai|Lo que no le tienes que dar nunca', anim: 'i51sec', x: 'Claus fora; paquets, comprovats.|Claves fuera; paquetes, comprobados.', nota: "Explica el «slopsquatting» sense fer por: és comprovar abans d'instal·lar.|Explica el «slopsquatting» sin dar miedo: es comprobar antes de instalar." },
      { id: 's7', k: 'anim', t: 'De qui és el codi?|¿De quién es el código?', anim: 'i51lic', x: 'Llicències i declarar l\'ús de la IA.|Licencias y declarar el uso de la IA.', nota: "Connecta-ho amb els drets d'autor de la unitat 4.|Conéctalo con los derechos de autor de la unidad 4." },
      { id: 's8', k: 'activitat', t: "L'app de paper|La app de papel", timer: 10, punts: ["Client/a: descriu l'app en tres frases.|Cliente: describe la app en tres frases.", "IA: la dibuixa d'esquena, sense preguntar.|IA: la dibuja de espaldas, sin preguntar.", 'Compareu i milloreu la descripció.|Comparad y mejorad la descripción.'], nota: "Full «L'app de paper», un per parella.|Hoja «La app de papel», una por pareja." },
      { id: 's9', k: 'pregunta', t: "Què s'ha hagut d'inventar la IA?|¿Qué se ha tenido que inventar la IA?", x: 'Què es veu, què passa quan… i detalls.|Qué se ve, qué pasa cuando… y detalles.', nota: "Les tres preguntes tornaran a la sessió següent.|Las tres preguntas volverán en la sesión siguiente." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 25, punts: ['Qui fa cada feina?|¿Quién hace cada tarea?', "El comptador d'en Pau i el dau.|El contador de Pau y el dado.", 'La teva primera app amb IA.|Tu primera app con IA.'], nota: "Fes la pausa activa quan hi arribin.|Haz la pausa activa cuando lleguen." },
      { id: 's11', k: 'repte', t: 'Troba l\'error de la IA|Encuentra el error de la IA', punts: ["Llegeix la prova que falla.|Lee la prueba que falla.", "Busca la línia a app.js i arregla-la.|Busca la línea en app.js y arréglala."], nota: "No els donis la línia: pregunta quina prova falla.|No les des la línea: pregunta qué prueba falla." },
      { id: 's12', k: 'concepte', t: 'Nivell PRO|Nivel PRO', punts: ['Paquets inventats: comprova abans d\'instal·lar.|Paquetes inventados: comprueba antes de instalar.', 'Comptador complet i dau amb cares.|Contador completo y dado con caras.', 'El cicle amb seguretat.|El ciclo con seguridad.'], nota: "Per a 3r-4t d'ESO o qui vagi ràpid.|Para 3.º-4.º de ESO o quien vaya rápido." },
      { id: 's13', k: 'repte', t: 'La teva primera app amb IA|Tu primera app con IA', punts: ["Descriu-la amb detalls.|Descríbela con detalles.", "Passa les proves i desa-la.|Pasa las pruebas y guárdala."], nota: "Es desa al portafoli.|Se guarda en el portafolio." },
      { id: 's14', k: 'concepte', t: 'I si la descripció és vaga?|¿Y si la descripción es vaga?', punts: ["La IA s'ho inventa.|La IA se lo inventa.", "Propera sessió: especificacions i proves.|Próxima sesión: especificaciones y pruebas."], nota: "Deixa la pregunta oberta.|Deja la pregunta abierta." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ['Vibe coding: tu descrius, la IA escriu, tu proves.|Vibe coding: tú describes, la IA escribe, tú pruebas.', "Sembla que funciona ≠ funciona.|Parece que funciona ≠ funciona.", 'Res de claus; llicències i declarar.|Nada de claves; licencias y declarar.'], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ['El cicle en una frase.|El ciclo en una frase.', 'Què no posaries mai en un prompt?|¿Qué no pondrías nunca en un prompt?'], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: "L'app de paper|La app de papel", k: 'fitxa',
        intro: "Per parelles. El client/a descriu una app en tres frases; la IA, d'esquena, la dibuixa al quadre de sota sense fer preguntes. Després, canvieu els rols.|Por parejas. El cliente describe una app en tres frases; la IA, de espaldas, la dibuja en el cuadro de abajo sin hacer preguntas. Después, cambiad los roles.",
        items: [
          { q: "Primera descripció (tres frases):|Primera descripción (tres frases):", sol: "Resposta oberta. Per exemple: «Una app per al pati. Té un marcador. Suma punts.»|Respuesta abierta. Por ejemplo: «Una app para el patio. Tiene un marcador. Suma puntos.»" },
          { q: "Dibuix de la IA (la pantalla del mòbil):|Dibujo de la IA (la pantalla del móvil):", big: true, sol: "Resposta oberta: el dibuix sol deixar fora detalls que no s'han dit.|Respuesta abierta: el dibujo suele dejar fuera detalles que no se han dicho." },
          { q: "Què s'ha hagut d'inventar la IA?|¿Qué se ha tenido que inventar la IA?", sol: "Per exemple: quants botons, què fa cada un, els colors, què passa en arribar a un número.|Por ejemplo: cuántos botones, qué hace cada uno, los colores, qué pasa al llegar a un número." },
          { q: "Segona descripció amb les tres preguntes (què es veu, què passa quan…, detalls):|Segunda descripción con las tres preguntas (qué se ve, qué pasa cuando…, detalles):", big: true, sol: "Per exemple: «Es veu un número gran i dos botons, +1 i Reinicia. Quan toco +1, suma 1; quan toco Reinicia, torna a 0. El fons és blau i a 10 surt un missatge.»|Por ejemplo: «Se ve un número grande y dos botones, +1 y Reinicia. Cuando toco +1, suma 1; cuando toco Reinicia, vuelve a 0. El fondo es azul y a 10 sale un mensaje.»" }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Descriu bé, llegeix el codi ---------- */
  'i5-2': {
    intro: "L'alumnat aprèn a escriure especificacions perquè la IA faci el que vol: què es veu, què passa quan…, detalls, per a qui i per a què. Hi afegeix exemples concrets i proves d'acceptació («l'app està bé si…»), que es poden comprovar, i distingeix les proves bones dels desitjos vagues. També aprèn a llegir codi que no ha escrit: dels id de l'HTML als addEventListener de l'app.js, predient què farà abans d'executar-lo i demanant explicacions a la IA que després comprova.|El alumnado aprende a escribir especificaciones para que la IA haga lo que quiere: qué se ve, qué pasa cuando…, detalles, para quién y para qué. Añade ejemplos concretos y pruebas de aceptación («la app está bien si…»), que se pueden comprobar, y distingue las pruebas buenas de los deseos vagos. También aprende a leer código que no ha escrito: de los id del HTML a los addEventListener del app.js, prediciendo qué hará antes de ejecutarlo y pidiendo explicaciones a la IA que después comprueba.",
    claus: [
      "Especificació: què es veu, què passa quan…, detalls, i per a qui i per a què.|Especificación: qué se ve, qué pasa cuando…, detalles, y para quién y para qué.",
      "Un exemple concret («si escric llet i toco Afegeix, surt llet i el comptador diu 1») aclareix i es converteix en prova.|Un ejemplo concreto («si escribo leche y toco Añade, sale leche y el contador dice 1») aclara y se convierte en prueba.",
      "Una prova d'acceptació diu què fas i què ha de passar; «que sigui bonica» no es pot comprovar.|Una prueba de aceptación dice qué haces y qué tiene que pasar; «que sea bonita» no se puede comprobar.",
      "Llegir codi: id de l'HTML → addEventListener → seguir les variables; predir i executar.|Leer código: id del HTML → addEventListener → seguir las variables; predecir y ejecutar."
    ],
    prev: ["Sessió i5-1: el cicle del vibe coding i la regla d'or (no publicar codi que no s'entén ni s'ha provat).|Sesión i5-1: el ciclo del vibe coding y la regla de oro (no publicar código que no se entiende ni se ha probado)."],
    obj: [
      "L'alumne/a escriu la descripció d'una app amb els tres indicadors i per a qui és.|El alumno/a escribe la descripción de una app con los tres indicadores y para quién es.",
      "L'alumne/a escriu proves d'acceptació comprovables i les distingeix de desitjos vagues.|El alumno/a escribe pruebas de aceptación comprobables y las distingue de deseos vagos.",
      "L'alumne/a llegeix codi JavaScript senzill que no ha escrit i en prediu el resultat.|El alumno/a lee código JavaScript sencillo que no ha escrito y predice su resultado.",
      "L'alumne/a demana a la IA que li expliqui codi i en comprova l'explicació.|El alumno/a pide a la IA que le explique código y comprueba la explicación."
    ],
    comp: [
      "Competència digital (CD3): programació i pensament computacional|Competencia digital (CD3): programación y pensamiento computacional",
      "Competència en comunicació lingüística (CCL): textos instructius precisos|Competencia en comunicación lingüística (CCL): textos instructivos precisos",
      "Competència personal i d'aprendre a aprendre (CPSAA): predir i comprovar|Competencia personal y de aprender a aprender (CPSAA): predecir y comprobar"
    ],
    vocab: [
      ["Especificació|Especificación", "Descripció precisa del que ha de fer una app i per a qui.|Descripción precisa de lo que debe hacer una app y para quién."],
      ["Prova d'acceptació|Prueba de aceptación", "Frase comprovable que diu quan l'app està bé: «si faig X, passa Y».|Frase comprobable que dice cuándo la app está bien: «si hago X, pasa Y»."],
      ["id|id", "Nom únic d'un element de l'HTML, que el JavaScript fa servir per trobar-lo.|Nombre único de un elemento del HTML, que el JavaScript usa para encontrarlo."],
      ["addEventListener|addEventListener", "Ordre de JavaScript que diu què passa quan es fa alguna cosa (un clic, escriure…).|Orden de JavaScript que dice qué pasa cuando se hace algo (un clic, escribir…)."],
      ["Variable|Variable", "Nom que guarda un valor que pot canviar (per exemple, els punts).|Nombre que guarda un valor que puede cambiar (por ejemplo, los puntos)."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Descriu bé, llegeix el codi»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Describe bien, lee el código»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Notes adhesives (unes 15 per grup)|Notas adhesivas (unas 15 por grupo)"],
      imprimir: ["Especificació a cegues (imprimible 1): un per grup de tres|Especificación a ciegas (imprimible 1): uno por grupo de tres"],
      prep: ["Fer abans el repte de la llista de l'excursió amb la descripció completa (cal que tingui les tres coses).|Hacer antes el reto de la lista de la excursión con la descripción completa (debe tener las tres cosas).", "Preparar notes adhesives per a l'especificació a cegues.|Preparar notas adhesivas para la especificación a ciegas.", "Repassar el codi de la pregunta «què dirà el marcador?» per explicar-lo a la pissarra.|Repasar el código de la pregunta «¿qué dirá el marcador?» para explicarlo en la pizarra."]
    },
    plan: [
      { min: 5, t: '«Fes-me una app de tasques»|«Hazme una app de tareas»', fase: 'inici',
        fa: "Explica el cas de la Júlia: una descripció de sis paraules i una app que no fa el que volia. Demana què hi falta.|Explica el caso de Júlia: una descripción de seis palabras y una app que no hace lo que quería. Pide qué falta.",
        diu: ["Què hauria d'haver dit la Júlia?|¿Qué debería haber dicho Júlia?", "Com sabria que l'app nova és la bona?|¿Cómo sabría que la app nueva es la buena?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: 'Especificar, provar i llegir codi|Especificar, probar y leer código', fase: 'teoria',
        fa: "Amb les animacions: les tres preguntes, els exemples, les proves d'acceptació, llegir codi dels id als addEventListener i «explica-m'ho… i comprova-ho». Fes una predicció en veu alta amb el codi de la diapositiva.|Con las animaciones: las tres preguntas, los ejemplos, las pruebas de aceptación, leer código de los id a los addEventListener y «explícamelo… y compruébalo». Haz una predicción en voz alta con el código de la diapositiva.",
        diu: ["És una prova o un desig: «que sigui ràpida»?|¿Es una prueba o un deseo: «que sea rápida»?", "Si toco el botó 3 vegades, què dirà el marcador?|Si toco el botón 3 veces, ¿qué dirá el marcador?"],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'Especificació a cegues|Especificación a ciegas', fase: 'desconnectat',
        fa: "En grups de tres (client/a, IA, provador/a): especificació d'una app de torns de la pissarra, tres proves, pantalla amb notes adhesives i comprovació en veu alta. Canvien els rols.|En grupos de tres (cliente, IA, probador/a): especificación de una app de turnos de la pizarra, tres pruebas, pantalla con notas adhesivas y comprobación en voz alta. Cambian los roles.",
        diu: ["Quina prova no sabíeu com comprovar?|¿Qué prueba no sabíais cómo comprobar?", "Què ha hagut d'interpretar la IA?|¿Qué ha tenido que interpretar la IA?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3|Grupos de 3" },
      { min: 25, t: "A l'ordinador: llegir, especificar i provar|En el ordenador: leer, especificar y probar", fase: 'ordinador',
        fa: "Fan la sessió de l'app: trobar la línia que ratlla una tasca, predir el marcador, la llista de l'excursió (amb descripció completa), proves bones o vagues, la pregunta ràpida, el prompt per demanar explicacions i la fitxa d'especificació, que es desa. Fes la pausa activa amb tothom.|Hacen la sesión de la app: encontrar la línea que tacha una tarea, predecir el marcador, la lista de la excursión (con descripción completa), pruebas buenas o vagas, la pregunta rápida, el prompt para pedir explicaciones y la ficha de especificación, que se guarda. Haz la pausa activa con todo el mundo.",
        diu: ["Quina línia evita les tasques buides?|¿Qué línea evita las tareas vacías?", "Quina prova d'acceptació has escrit a la fitxa?|¿Qué prueba de aceptación has escrito en la ficha?"],
        slides: ['s11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (la fitxa d'especificació).|De «Recuerda» hasta el paso «Crea» (la ficha de especificación).", org: "Individual|Individual" },
      { min: 8, t: 'Tancament: el que es pot comprovar|Cierre: lo que se puede comprobar', fase: 'tancament',
        fa: "Resumeix: especificació + exemples + proves; per llegir codi, id i addEventListener. Anuncia la sessió següent: depurar i iterar. Tiquet de sortida i com s'han sentit.|Resume: especificación + ejemplos + pruebas; para leer código, id y addEventListener. Anuncia la sesión siguiente: depurar e iterar. Tique de salida y cómo se han sentido.",
        diu: ["Quina és la vostra millor prova d'acceptació d'avui?|¿Cuál es vuestra mejor prueba de aceptación de hoy?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["La descripció només diu què es veu, sense què passa quan es toca.|La descripción solo dice qué se ve, sin qué pasa cuando se toca.", "Fes-li dir una frase amb «quan…»: «quan toco Afegeix, …».|Hazle decir una frase con «cuando…»: «cuando toco Añade, …»."],
      ["Escriu proves vagues («que funcioni bé»).|Escribe pruebas vagas («que funcione bien»).", "Pregunta: què faries per comprovar-ho? Si no ho saps, concreta-la: «si faig X, passa Y».|Pregunta: ¿qué harías para comprobarlo? Si no lo sabes, concrétala: «si hago X, pasa Y»."],
      ["Llegeix el codi de dalt a baix sense saber què busca.|Lee el código de arriba abajo sin saber qué busca.", "Primer els id de l'HTML; després, qui els fa servir. Marca'ls amb el dit a la pantalla.|Primero los id del HTML; después, quién los usa. Márcalos con el dedo en la pantalla."],
      ["Creu l'explicació de la IA sense provar-la.|Cree la explicación de la IA sin probarla.", "Demana una predicció i executa: si l'app fa una altra cosa, l'explicació no era bona.|Pide una predicción y ejecuta: si la app hace otra cosa, la explicación no era buena."],
      ["A la pregunta del marcador respon 3 (no ha llegit el «+ 2»).|En la pregunta del marcador responde 3 (no ha leído el «+ 2»).", "Fes-li seguir la variable punts en una taula: clic 1, clic 2, clic 3.|Hazle seguir la variable puntos en una tabla: clic 1, clic 2, clic 3."]
    ],
    diff: {
      mes: "Nivell PRO: la pregunta de les vides (arriba a -1), la llista amb quatre proves (espais i ratllar), la pregunta ràpida amb els missatges i el prompt amb les sis peces. Repte extra: escriure dues proves noves per a l'app de la fitxa.|Nivel PRO: la pregunta de las vidas (llega a -1), la lista con cuatro pruebas (espacios y tachar), la pregunta rápida con los mensajes y el prompt con las seis piezas. Reto extra: escribir dos pruebas nuevas para la app de la ficha.",
      menys: "Donar l'especificació de la llista mig feta per completar-la. Fer la lectura del codi en parella, amb un/a que llegeix i l'altre/a que segueix la variable.|Dar la especificación de la lista medio hecha para completarla. Hacer la lectura del código en pareja, con uno que lee y otro que sigue la variable."
    },
    aval: {
      ticket: ["Escriu una prova d'acceptació per a un comptador.|Escribe una prueba de aceptación para un contador.", "Què busques primer quan llegeixes codi que no has escrit?|¿Qué buscas primero cuando lees código que no has escrito?"],
      rubric: [
        ["Especificació|Especificación", "Descriu què es veu, què passa quan… i detalls, i per a qui.|Describe qué se ve, qué pasa cuando… y detalles, y para quién.", "Una frase genèrica («una app de tasques»).|Una frase genérica («una app de tareas»)."],
        ["Proves|Pruebas", "Escriu proves comprovables amb «si faig X, passa Y».|Escribe pruebas comprobables con «si hago X, pasa Y».", "Escriu desitjos vagues.|Escribe deseos vagos."],
        ["Llegir codi|Leer código", "Prediu el resultat seguint les variables.|Predice el resultado siguiendo las variables.", "Endevina sense llegir.|Adivina sin leer."],
        ["Comprovar|Comprobar", "Comprova les explicacions de la IA executant.|Comprueba las explicaciones de la IA ejecutando.", "Es creu l'explicació sense mirar.|Se cree la explicación sin mirar."]
      ]
    },
    casa: "Tria una app que facis servir a casa i escriu-ne tres proves d'acceptació (per exemple, per a l'alarma del mòbil). Comproveu-les junts: les passa?|Elige una app que uses en casa y escribe tres pruebas de aceptación (por ejemplo, para la alarma del móvil). Comprobadlas juntos: ¿las pasa?",
    faq: [
      ["Per què tantes proves si l'app és petita?|¿Por qué tantas pruebas si la app es pequeña?", "Perquè les proves diuen quan has acabat i avisen si un canvi espatlla alguna cosa. En apps grans, són imprescindibles; en petites, són un bon hàbit.|Porque las pruebas dicen cuándo has terminado y avisan si un cambio estropea algo. En apps grandes, son imprescindibles; en pequeñas, son un buen hábito."],
      ["Cal saber tot el JavaScript per llegir aquest codi?|¿Hace falta saber todo el JavaScript para leer este código?", "No: n'hi ha prou de reconèixer quatre peces (id, addEventListener, variables i textContent) i de seguir-les. La resta es pot preguntar i comprovar.|No: basta con reconocer cuatro piezas (id, addEventListener, variables y textContent) y seguirlas. El resto se puede preguntar y comprobar."],
      ["La IA de veritat també fa servir proves?|¿La IA de verdad también usa pruebas?", "Alguns assistents de programar poden escriure proves i executar-les, però cal revisar que les proves comprovin el que importa: una prova mal feta també pot passar.|Algunos asistentes de programar pueden escribir pruebas y ejecutarlas, pero hay que revisar que las pruebas comprueben lo que importa: una prueba mal hecha también puede pasar."]
    ],
    tec: [
      ["La llista no deixa generar el codi.|La lista no deja generar el código.", "En aquest repte la descripció ha de tenir els tres indicadors (què es veu, què passa quan…, detalls). Mireu quins estan marcats a sota del quadre.|En este reto la descripción debe tener los tres indicadores (qué se ve, qué pasa cuando…, detalles). Mirad cuáles están marcados debajo del cuadro."],
      ["A «Toca la línia» no passa res en tocar.|En «Toca la línea» no pasa nada al tocar.", "Només es pot respondre una vegada: si ja s'ha tocat, surt la resposta i el botó Continua.|Solo se puede responder una vez: si ya se ha tocado, sale la respuesta y el botón Continúa."]
    ],
    extra: [
      "Llengua: transformar una descripció vaga en una especificació precisa (connectors de causa i condició).|Lengua: transformar una descripción vaga en una especificación precisa (conectores de causa y condición).",
      "Tecnologia: comparar l'especificació d'una app amb el plec de condicions d'un projecte del taller.|Tecnología: comparar la especificación de una app con el pliego de condiciones de un proyecto del taller."
    ],
    trans: ["Sessió i5-3: les proves serviran per caçar bugs. Sessió i5-4: la fitxa d'especificació és el primer pas del projecte.|Sesión i5-3: las pruebas servirán para cazar bugs. Sesión i5-4: la ficha de especificación es el primer paso del proyecto."],
    slides: [
      { id: 's1', k: 'portada', t: 'Descriu bé, llegeix el codi|Describe bien, lee el código', x: 'Crea amb IA|Crea con IA', nota: "Segona sessió de la unitat 5.|Segunda sesión de la unidad 5." },
      { id: 's2', k: 'pregunta', t: '«Fes-me una app de tasques»|«Hazme una app de tareas»', x: 'Sis paraules… i una app que no era la que volia.|Seis palabras… y una app que no era la que quería.', nota: "Demana què hi falta.|Pide qué falta." },
      { id: 's3', k: 'anim', t: 'Les tres preguntes (i una més)|Las tres preguntas (y una más)', anim: 'i52spec', x: 'Què es veu, què passa quan…, detalls, per a qui.|Qué se ve, qué pasa cuando…, detalles, para quién.', nota: "Relaciona-ho amb l'app de paper.|Relaciónalo con la app de papel." },
      { id: 's4', k: 'anim', t: 'Dona-li casos concrets|Dale casos concretos', anim: 'i52ex', x: 'Un exemple aclareix i es converteix en prova.|Un ejemplo aclara y se convierte en prueba.', nota: "Demana un exemple per a un comptador.|Pide un ejemplo para un contador." },
      { id: 's5', k: 'anim', t: "L'app està bé si…|La app está bien si…", anim: 'i52test', x: 'Frases comprovables, no desitjos.|Frases comprobables, no deseos.', nota: "Joc de mans: llegiu-ne una i que diguin si es pot comprovar.|Dinámica: leed una y que digan si se puede comprobar." },
      { id: 's6', k: 'anim', t: 'Codi que no has escrit tu|Código que no has escrito tú', anim: 'i52read', x: 'id → addEventListener → variables.|id → addEventListener → variables.', nota: "Assenyala els id i qui els fa servir.|Señala los id y quién los usa." },
      { id: 's7', k: 'concepte', t: 'Prediu abans d\'executar|Predice antes de ejecutar', punts: ['Toques el botó 3 vegades.|Tocas el botón 3 veces.', 'Què dirà el marcador?|¿Qué dirá el marcador?'], code: "let punts = 0;\nboto.addEventListener('click', () => {\n  punts = punts + 2;\n  marcador.textContent = punts;\n});", nota: "Resposta: 6. Seguiu la variable en una taula.|Respuesta: 6. Seguid la variable en una tabla." },
      { id: 's8', k: 'anim', t: "Que t'ho expliqui… i comprova-ho|Que te lo explique… y compruébalo", anim: 'i52explain', x: 'Predir, executar, comparar.|Predecir, ejecutar, comparar.', nota: "L'explicació de la IA també pot fallar.|La explicación de la IA también puede fallar." },
      { id: 's9', k: 'activitat', t: 'Especificació a cegues|Especificación a ciegas', timer: 10, punts: ["Client/a: especificació i 3 proves.|Cliente: especificación y 3 pruebas.", 'IA: la pantalla amb notes adhesives.|IA: la pantalla con notas adhesivas.', 'Provador/a: comprova cada prova.|Probador/a: comprueba cada prueba.'], nota: "Full «Especificació a cegues», un per grup.|Hoja «Especificación a ciegas», una por grupo." },
      { id: 's10', k: 'pregunta', t: 'Quina prova no sabíeu comprovar?|¿Qué prueba no sabíais comprobar?', x: 'Si no es pot comprovar, cal concretar-la.|Si no se puede comprobar, hay que concretarla.', nota: "Reescriviu-ne una entre tots.|Reescribid una entre todos." },
      { id: 's11', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 25, punts: ['Llegir codi i predir.|Leer código y predecir.', "La llista de l'excursió i la pregunta ràpida.|La lista de la excursión y la pregunta rápida.", "La fitxa d'especificació.|La ficha de especificación."], nota: "Fes la pausa activa quan hi arribin.|Haz la pausa activa cuando lleguen." },
      { id: 's12', k: 'concepte', t: 'Nivell PRO|Nivel PRO', punts: ['Les vides que arriben a -1.|Las vidas que llegan a -1.', 'Quatre proves per a la llista.|Cuatro pruebas para la lista.', 'El prompt amb les sis peces.|El prompt con las seis piezas.'], nota: "Per a 3r-4t d'ESO o qui vagi ràpid.|Para 3.º-4.º de ESO o quien vaya rápido." },
      { id: 's13', k: 'repte', t: "La fitxa d'especificació|La ficha de especificación", punts: ['Per a qui i per a què.|Para quién y para qué.', "Proves d'acceptació.|Pruebas de aceptación."], nota: "Es desa al portafoli i servirà per al projecte.|Se guarda en el portafolio y servirá para el proyecto." },
      { id: 's14', k: 'concepte', t: 'I quan una prova falla?|¿Y cuando una prueba falla?', punts: ['Hi ha un bug.|Hay un bug.', 'Propera sessió: depurar i iterar.|Próxima sesión: depurar e iterar.'], nota: "Anuncia el detectiu de bugs.|Anuncia el detective de bugs." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ['Especificació: tres preguntes i per a qui.|Especificación: tres preguntas y para quién.', "Proves d'acceptació comprovables.|Pruebas de aceptación comprobables.", 'Llegir codi: id, addEventListener, predir.|Leer código: id, addEventListener, predecir.'], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Una prova d'acceptació per a un comptador.|Una prueba de aceptación para un contador.", 'Què busques primer en un codi?|¿Qué buscas primero en un código?'], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'Especificació a cegues|Especificación a ciegas', k: 'fitxa',
        intro: "Un per grup de tres. L'app: un tauler per apuntar qui neteja la pissarra cada dia de la setmana. La IA només pot fer servir el que digui aquest full.|Uno por grupo de tres. La app: un tablero para apuntar quién limpia la pizarra cada día de la semana. La IA solo puede usar lo que diga esta hoja.",
        items: [
          { q: "Per a qui és i per a què serveix:|Para quién es y para qué sirve:", sol: "Per a la classe i la tutoria: saber a qui li toca cada dia.|Para la clase y la tutoría: saber a quién le toca cada día." },
          { q: "Què es veu:|Qué se ve:", sol: "Per exemple: els cinc dies, una casella amb el nom (o el número de llista) i un botó per marcar «fet».|Por ejemplo: los cinco días, una casilla con el nombre (o el número de lista) y un botón para marcar «hecho»." },
          { q: "Què passa quan…|Qué pasa cuando…", big: true, sol: "Per exemple: quan toco «fet», el dia es posa verd; quan acaba la setmana, torna a començar.|Por ejemplo: cuando toco «hecho», el día se pone verde; cuando acaba la semana, vuelve a empezar." },
          { q: "Tres proves d'acceptació (l'app està bé si…):|Tres pruebas de aceptación (la app está bien si…):", big: true, sol: "1) Si toco «fet» el dilluns, el dilluns es posa verd. 2) Sense tocar res, cap dia no és verd. 3) Hi ha exactament cinc dies.|1) Si toco «hecho» el lunes, el lunes se pone verde. 2) Sin tocar nada, ningún día está verde. 3) Hay exactamente cinco días." },
          { q: "Provador/a: quines proves han passat? Quina no s'ha pogut comprovar i per què?|Probador/a: ¿qué pruebas han pasado? ¿Cuál no se ha podido comprobar y por qué?", sol: "Resposta oberta: les proves vagues no es poden comprovar.|Respuesta abierta: las pruebas vagas no se pueden comprobar." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Depura i itera ---------- */
  'i5-3': {
    intro: "L'alumnat fa de detectiu de bugs: reprodueix l'error, l'aïlla fins a la línia que hi té a veure, l'arregla amb un canvi petit i torna a passar totes les proves. Aprèn a llegir els missatges d'error de l'editor (i que molts bugs no en tenen), a demanar canvis a la IA d'un en un, a desar versions amb missatges que expliquen què canvia i a detectar regressions (quan un arreglo n'espatlla una altra cosa). A l'app arregla un test de reflexos, un mode fosc i, com a extra, un personatge que surt del camp.|El alumnado hace de detective de bugs: reproduce el error, lo aísla hasta la línea que tiene que ver, lo arregla con un cambio pequeño y vuelve a pasar todas las pruebas. Aprende a leer los mensajes de error del editor (y que muchos bugs no tienen), a pedir cambios a la IA de uno en uno, a guardar versiones con mensajes que explican qué cambia y a detectar regresiones (cuando un arreglo estropea otra cosa). En la app arregla un test de reflejos, un modo oscuro y, como extra, un personaje que sale del campo.",
    claus: [
      "Depurar: reproduir → aïllar → arreglar amb un canvi petit → tornar a provar-ho tot.|Depurar: reproducir → aislar → arreglar con un cambio pequeño → volver a probarlo todo.",
      "Els missatges d'error diuen la línia i el nom; els bugs sense missatge només es troben provant.|Los mensajes de error dicen la línea y el nombre; los bugs sin mensaje solo se encuentran probando.",
      "Iterar amb la IA: un canvi petit cada vegada, dient què passa i què s'esperava.|Iterar con la IA: un cambio pequeño cada vez, diciendo qué pasa y qué se esperaba.",
      "Versions amb bons missatges i totes les proves després de cada canvi, per evitar regressions.|Versiones con buenos mensajes y todas las pruebas después de cada cambio, para evitar regresiones."
    ],
    prev: ["Sessions i5-1 i i5-2: el cicle del vibe coding, les proves d'acceptació i llegir codi (id i addEventListener).|Sesiones i5-1 e i5-2: el ciclo del vibe coding, las pruebas de aceptación y leer código (id y addEventListener)."],
    obj: [
      "L'alumne/a reprodueix un bug i el localitza al codi.|El alumno/a reproduce un bug y lo localiza en el código.",
      "L'alumne/a arregla errors en codi generat amb canvis petits i comprova que totes les proves passen.|El alumno/a arregla errores en código generado con cambios pequeños y comprueba que todas las pruebas pasan.",
      "L'alumne/a explica què és una versió i escriu un bon missatge de versió.|El alumno/a explica qué es una versión y escribe un buen mensaje de versión.",
      "L'alumne/a reconeix una regressió i sap com evitar-la.|El alumno/a reconoce una regresión y sabe cómo evitarla."
    ],
    comp: [
      "Competència digital (CD3): depuració i millora de programes|Competencia digital (CD3): depuración y mejora de programas",
      "Competència matemàtica i en ciència i tecnologia (STEM): resolució de problemes per passos|Competencia matemática y en ciencia y tecnología (STEM): resolución de problemas por pasos",
      "Competència personal i d'aprendre a aprendre (CPSAA): perseverança davant dels errors|Competencia personal y de aprender a aprender (CPSAA): perseverancia ante los errores"
    ],
    vocab: [
      ["Depurar|Depurar", "Trobar i arreglar els errors d'un programa.|Encontrar y arreglar los errores de un programa."],
      ["Reproduir un bug|Reproducir un bug", "Trobar els passos que fan sortir l'error sempre.|Encontrar los pasos que hacen salir el error siempre."],
      ["Versió|Versión", "Còpia desada del codi en un moment, amb un missatge que diu què ha canviat.|Copia guardada del código en un momento, con un mensaje que dice qué ha cambiado."],
      ["Control de versions|Control de versiones", "Sistema per desar versions, comparar-les i tornar enrere, sovint entre moltes persones.|Sistema para guardar versiones, compararlas y volver atrás, a menudo entre muchas personas."],
      ["Regressió|Regresión", "Error nou en una cosa que abans funcionava, causat per un canvi.|Error nuevo en algo que antes funcionaba, causado por un cambio."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Depura i itera»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Depura e itera»", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Notes adhesives per als missatges de versió|Notas adhesivas para los mensajes de versión"],
      imprimir: ["El bug amagat (imprimible 1): un per grup de tres|El bug escondido (imprimible 1): uno por grupo de tres"],
      prep: ["Imprimir «El bug amagat» i retallar-ne les targetes de prova.|Imprimir «El bug escondido» y recortar las tarjetas de prueba.", "Fer abans el test de reflexos: el bug és l'espera × 10 (cal esperar uns 3 segons perquè es comprovi).|Hacer antes el test de reflejos: el bug es la espera × 10 (hay que esperar unos 3 segundos para que se compruebe).", "Pensar un exemple de regressió de la vida real (arreglar una cosa i espatllar-ne una altra).|Pensar un ejemplo de regresión de la vida real (arreglar una cosa y estropear otra)."]
    },
    plan: [
      { min: 5, t: 'El quadre que no es posa mai verd|El cuadro que no se pone nunca verde', fase: 'inici',
        fa: "Explica el cas de 2n B: el test de reflexos triga massa i l'«arregla-ho» de la IA espatlla el millor temps. Demana com ho investigarien.|Explica el caso de 2.º B: el test de reflejos tarda demasiado y el «arréglalo» de la IA estropea el mejor tiempo. Pide cómo lo investigarían.",
        diu: ["Què faríeu primer per trobar el bug?|¿Qué haríais primero para encontrar el bug?", "Per què «arregla-ho» és mala petició?|¿Por qué «arréglalo» es mala petición?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: 'Depurar, iterar i versions|Depurar, iterar y versiones', fase: 'teoria',
        fa: "Amb les animacions: els quatre passos de depurar, llegir l'error, demanar canvis d'un en un, versions i regressions. Escriviu junts un bon missatge de versió.|Con las animaciones: los cuatro pasos de depurar, leer el error, pedir cambios de uno en uno, versiones y regresiones. Escribid juntos un buen mensaje de versión.",
        diu: ["Quin missatge de versió entendríeu d'aquí a un mes?|¿Qué mensaje de versión entenderíais dentro de un mes?", "Quan s'han de tornar a passar totes les proves?|¿Cuándo hay que volver a pasar todas las pruebas?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: 'El bug amagat|El bug escondido', fase: 'desconnectat',
        fa: "En grups de tres: executen a mà el programa en paper del marcador de pàdel amb les targetes de prova, troben la línia del bug, l'arreglen, escriuen el missatge de versió i tornen a passar totes les targetes.|En grupos de tres: ejecutan a mano el programa en papel del marcador de pádel con las tarjetas de prueba, encuentran la línea del bug, la arreglan, escriben el mensaje de versión y vuelven a pasar todas las tarjetas.",
        diu: ["Quina targeta us ha fet trobar el bug?|¿Qué tarjeta os ha hecho encontrar el bug?", "El vostre arreglo ha espatllat alguna altra prova?|¿Vuestro arreglo ha estropeado alguna otra prueba?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3|Grupos de 3" },
      { min: 25, t: "A l'ordinador: detectius de bugs|En el ordenador: detectives de bugs", fase: 'ordinador',
        fa: "Fan la sessió de l'app: trobar la línia del temps × 10, què fer davant d'una regressió, el test de reflexos, el mode fosc, l'ordre de depurar, el personatge que surt del camp (extra) i reparar una app pròpia, que es desa. Fes la pausa activa amb tothom.|Hacen la sesión de la app: encontrar la línea del tiempo × 10, qué hacer ante una regresión, el test de reflejos, el modo oscuro, el orden de depurar, el personaje que sale del campo (extra) y reparar una app propia, que se guarda. Haz la pausa activa con todo el mundo.",
        diu: ["Com has reproduït el bug del mode fosc?|¿Cómo has reproducido el bug del modo oscuro?", "Quin canvi petit l'ha arreglat?|¿Qué cambio pequeño lo ha arreglado?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins al pas «Crea» (repara una app).|De «Recuerda» hasta el paso «Crea» (repara una app).", org: "Individual|Individual" },
      { min: 8, t: "Tancament: l'error com a pista|Cierre: el error como pista", fase: 'tancament',
        fa: "Resumeix els passos de depurar i la importància de les versions i de totes les proves. Anuncia el projecte: una app per a una necessitat real. Tiquet de sortida i com s'han sentit.|Resume los pasos de depurar y la importancia de las versiones y de todas las pruebas. Anuncia el proyecto: una app para una necesidad real. Tique de salida y cómo se han sentido.",
        diu: ["Quin ha estat el bug més difícil d'avui? Per què?|¿Cuál ha sido el bug más difícil de hoy? ¿Por qué?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Canvia moltes línies a la vegada «a veure si va».|Cambia muchas líneas a la vez «a ver si va».", "Un canvi i una prova. Si n'has canviat cinc i va bé, no saps quin era el bo.|Un cambio y una prueba. Si has cambiado cinco y va bien, no sabes cuál era el bueno."],
      ["Al test de reflexos toca el quadre abans que es posi verd i creu que no funciona.|En el test de reflejos toca el cuadro antes de que se ponga verde y cree que no funciona.", "Primer cal reproduir bé: Comença, esperar que es posi verd i llavors tocar.|Primero hay que reproducir bien: Empieza, esperar a que se ponga verde y entonces tocar."],
      ["Esborra el codi i demana a la IA que ho refaci tot.|Borra el código y pide a la IA que lo rehaga todo.", "La IA simulada hi tornarà a posar l'error. Busca la línia: és més ràpid.|La IA simulada volverá a poner el error. Busca la línea: es más rápido."],
      ["Escriu missatges de versió com «canvis» o «ja està».|Escribe mensajes de versión como «cambios» o «ya está».", "Pregunta: què ha canviat i per què? Això és el missatge.|Pregunta: ¿qué ha cambiado y por qué? Eso es el mensaje."],
      ["Després d'arreglar el bug, només mira la prova del bug.|Después de arreglar el bug, solo mira la prueba del bug.", "Mireu totes les comprovacions de l'editor: si alguna s'ha apagat, és una regressió.|Mirad todas las comprobaciones del editor: si alguna se ha apagado, es una regresión."]
    ],
    diff: {
      mes: "Nivell PRO: el bon missatge de versió, el test de reflexos amb el millor temps i un comentari // que documenti l'arreglo. Repte extra: el personatge que no pot sortir del camp i provar-lo també amb les fletxes del teclat.|Nivel PRO: el buen mensaje de versión, el test de reflejos con el mejor tiempo y un comentario // que documente el arreglo. Reto extra: el personaje que no puede salir del campo y probarlo también con las flechas del teclado.",
      menys: "Fer el bug amagat amb el docent, en gran grup. A l'app, donar la pista de seguida i centrar-se en reproduir i comprovar.|Hacer el bug escondido con el docente, en gran grupo. En la app, dar la pista enseguida y centrarse en reproducir y comprobar."
    },
    aval: {
      ticket: ["Ordena els quatre passos per depurar un bug.|Ordena los cuatro pasos para depurar un bug.", "Escriu un bon missatge de versió per a l'arreglo del mode fosc.|Escribe un buen mensaje de versión para el arreglo del modo oscuro."],
      rubric: [
        ["Reproduir|Reproducir", "Descriu els passos que fan sortir el bug.|Describe los pasos que hacen salir el bug.", "No sap quan passa l'error.|No sabe cuándo pasa el error."],
        ["Arreglar|Arreglar", "Fa un canvi petit a la línia adequada.|Hace un cambio pequeño en la línea adecuada.", "Canvia coses a l'atzar.|Cambia cosas al azar."],
        ["Versions|Versiones", "Escriu missatges que diuen què ha canviat i per què.|Escribe mensajes que dicen qué ha cambiado y por qué.", "Missatges buits o genèrics.|Mensajes vacíos o genéricos."],
        ["Regressions|Regresiones", "Torna a passar totes les proves després d'un canvi.|Vuelve a pasar todas las pruebas después de un cambio.", "Només prova el que ha canviat.|Solo prueba lo que ha cambiado."]
      ]
    },
    casa: "Explica a casa què és una regressió amb un exemple de la vida real (arreglar la cadira i que ara balli la taula…). Trobeu-ne un altre junts.|Explica en casa qué es una regresión con un ejemplo de la vida real (arreglar la silla y que ahora baile la mesa…). Encontrad otro juntos.",
    faq: [
      ["Per què es diu «bug»?|¿Por qué se dice «bug»?", "És una paraula anglesa (insecte) que es fa servir en enginyeria per als errors des de fa molt de temps. Avui vol dir qualsevol error d'un programa.|Es una palabra inglesa (insecto) que se usa en ingeniería para los errores desde hace mucho tiempo. Hoy quiere decir cualquier error de un programa."],
      ["Com es desen les versions de veritat?|¿Cómo se guardan las versiones de verdad?", "Amb eines de control de versions: cada canvi es desa amb un missatge, es pot comparar i es pot tornar enrere. A l'app, el botó ↺ torna al codi inicial i el portafoli desa la versió final.|Con herramientas de control de versiones: cada cambio se guarda con un mensaje, se puede comparar y se puede volver atrás. En la app, el botón ↺ vuelve al código inicial y el portafolio guarda la versión final."],
      ["Una IA pot depurar el seu propi codi?|¿Una IA puede depurar su propio código?", "Pot ajudar-hi molt (llegir errors, proposar arreglos, fins i tot provar), però també pot «arreglar» una cosa i espatllar-ne una altra. Cal que algú comprovi el resultat amb proves.|Puede ayudar mucho (leer errores, proponer arreglos, incluso probar), pero también puede «arreglar» una cosa y estropear otra. Hace falta que alguien compruebe el resultado con pruebas."]
    ],
    tec: [
      ["La prova del test de reflexos no es marca mai.|La prueba del test de reflejos no se marca nunca.", "La prova espera uns 3 segons: si el bug continua (× 10), falla. Quan l'arregleu, espereu uns segons que es torni a executar.|La prueba espera unos 3 segundos: si el bug continúa (× 10), falla. Cuando lo arregléis, esperad unos segundos a que se vuelva a ejecutar."],
      ["La barra d'estat diu un error de JavaScript després d'editar.|La barra de estado dice un error de JavaScript después de editar.", "Sovint és un parèntesi o una clau oberta. Toqueu la barra: surt la línia d'app.js on mirar.|A menudo es un paréntesis o una llave abierta. Tocad la barra: sale la línea de app.js donde mirar."]
    ],
    extra: [
      "Ciències: el mètode científic i la depuració s'assemblen (hipòtesi, prova, resultat).|Ciencias: el método científico y la depuración se parecen (hipótesis, prueba, resultado).",
      "Educació física: mesurar temps de reacció amb el test de reflexos (sense desar cap dada personal).|Educación física: medir tiempos de reacción con el test de reflejos (sin guardar ningún dato personal)."
    ],
    trans: ["Sessió i5-4: el projecte farà servir el cicle sencer, de la necessitat a l'app provada.|Sesión i5-4: el proyecto usará el ciclo entero, de la necesidad a la app probada."],
    slides: [
      { id: 's1', k: 'portada', t: 'Depura i itera|Depura e itera', x: 'Crea amb IA|Crea con IA', nota: "Tercera sessió de la unitat 5.|Tercera sesión de la unidad 5." },
      { id: 's2', k: 'pregunta', t: 'El quadre que no es posa mai verd|El cuadro que no se pone nunca verde', x: "I l'«arregla-ho» de la IA n'espatlla una altra cosa.|Y el «arréglalo» de la IA estropea otra cosa.", nota: "Demana com ho investigarien.|Pide cómo lo investigarían." },
      { id: 's3', k: 'anim', t: 'Reprodueix, aïlla, arregla, comprova|Reproduce, aísla, arregla, comprueba', anim: 'i53debug', x: 'Els quatre passos del detectiu de bugs.|Los cuatro pasos del detective de bugs.', nota: "Relaciona-ho amb el cas de 2n B.|Relaciónalo con el caso de 2.º B." },
      { id: 's4', k: 'anim', t: "L'error et diu on mirar|El error te dice dónde mirar", anim: 'i53err', x: 'Amb missatge o sense: només provant.|Con mensaje o sin: solo probando.', nota: "Ensenya on és la barra d'estat a l'editor.|Enseña dónde está la barra de estado en el editor." },
      { id: 's5', k: 'anim', t: "Canvis d'un en un|Cambios de uno en uno", anim: 'i53iter', x: 'Què passa i què esperaves.|Qué pasa y qué esperabas.', nota: "Escriviu junts una bona petició a la IA.|Escribid juntos una buena petición a la IA." },
      { id: 's6', k: 'anim', t: 'Desa abans de canviar|Guarda antes de cambiar', anim: 'i53ver', x: 'v1, v2, v3… i tornar enrere.|v1, v2, v3… y volver atrás.', nota: "Bons i mals missatges de versió.|Buenos y malos mensajes de versión." },
      { id: 's7', k: 'anim', t: 'Regressions|Regresiones', anim: 'i53reg', x: 'Després de cada canvi, totes les proves.|Después de cada cambio, todas las pruebas.', nota: "Exemple de la vida real: arreglar la cadira i que balli la taula.|Ejemplo de la vida real: arreglar la silla y que baile la mesa." },
      { id: 's8', k: 'activitat', t: 'El bug amagat|El bug escondido', timer: 10, punts: ['Executeu el programa a mà.|Ejecutad el programa a mano.', 'Trobeu i arregleu la línia.|Encontrad y arreglad la línea.', 'Missatge de versió i totes les proves.|Mensaje de versión y todas las pruebas.'], nota: "Full «El bug amagat», un per grup.|Hoja «El bug escondido», una por grupo." },
      { id: 's9', k: 'pregunta', t: 'Quina targeta us ha delatat el bug?|¿Qué tarjeta os ha delatado el bug?', x: 'I el vostre arreglo ha espatllat res?|¿Y vuestro arreglo ha estropeado algo?', nota: "Comparteix dos o tres missatges de versió.|Comparte dos o tres mensajes de versión." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 25, punts: ['El temps × 10.|El tiempo × 10.', 'El test de reflexos i el mode fosc.|El test de reflejos y el modo oscuro.', 'Repara una app pròpia.|Repara una app propia.'], nota: "Fes la pausa activa quan hi arribin.|Haz la pausa activa cuando lleguen." },
      { id: 's11', k: 'concepte', t: 'El bug del mode fosc|El bug del modo oscuro', punts: ['Un toc: fosc. Dos tocs: hauria de tornar a clar.|Un toque: oscuro. Dos toques: debería volver a claro.', 'add només afegeix; toggle posa i treu.|add solo añade; toggle pone y quita.'], code: "btn.addEventListener('click', () => {\n  document.body.classList.add('dark');\n});", nota: "Que ho reprodueixin abans de llegir el codi.|Que lo reproduzcan antes de leer el código." },
      { id: 's12', k: 'concepte', t: 'Nivell PRO|Nivel PRO', punts: ['Missatges de versió.|Mensajes de versión.', 'Millor temps i comentari //.|Mejor tiempo y comentario //.', 'Extra: el personatge dins del camp.|Extra: el personaje dentro del campo.'], nota: "Per a 3r-4t d'ESO o qui vagi ràpid.|Para 3.º-4.º de ESO o quien vaya rápido." },
      { id: 's13', k: 'repte', t: 'Repara una app|Repara una app', punts: ['Reprodueix i arregla.|Reproduce y arregla.', 'Totes les proves en verd.|Todas las pruebas en verde.'], nota: "Es desa al portafoli.|Se guarda en el portafolio." },
      { id: 's14', k: 'concepte', t: 'I ara, una app de veritat|Y ahora, una app de verdad', punts: ['Una necessitat real del centre.|Una necesidad real del centro.', 'Propera sessió: el projecte.|Próxima sesión: el proyecto.'], nota: "Que pensin idees per a casa.|Que piensen ideas para casa." },
      { id: 's15', k: 'resum', t: 'Avui hem après…|Hoy hemos aprendido…', punts: ['Reproduir, aïllar, arreglar, comprovar.|Reproducir, aislar, arreglar, comprobar.', "Canvis d'un en un i versions.|Cambios de uno en uno y versiones.", 'Totes les proves: adeu, regressions.|Todas las pruebas: adiós, regresiones.'], nota: "Llegiu-ho junts.|Leedlo juntos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ['Els quatre passos, en ordre.|Los cuatro pasos, en orden.', 'Un bon missatge de versió.|Un buen mensaje de versión.'], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: 'El bug amagat|El bug escondido', k: 'fitxa',
        intro: "Un per grup de tres. Programa en paper d'un marcador de pàdel: dos equips, A i B. Executeu-lo a mà amb cada targeta de prova (la que fa de «ordinador» llegeix les línies en veu alta).|Uno por grupo de tres. Programa en papel de un marcador de pádel: dos equipos, A y B. Ejecutadlo a mano con cada tarjeta de prueba (quien hace de «ordenador» lee las líneas en voz alta).",
        items: [
          { q: "Programa: 1) A = 0 i B = 0. 2) Si guanya el punt A, A = A + 1. 3) Si guanya el punt B, A = A + 1. 4) Si A arriba a 3, escriu «Guanya A». 5) Si B arriba a 3, escriu «Guanya B». Executeu: guanya B, guanya B, guanya B. Què passa?|Programa: 1) A = 0 y B = 0. 2) Si gana el punto A, A = A + 1. 3) Si gana el punto B, A = A + 1. 4) Si A llega a 3, escribe «Gana A». 5) Si B llega a 3, escribe «Gana B». Ejecutad: gana B, gana B, gana B. ¿Qué pasa?", big: true, sol: "Escriu «Guanya A»: la línia 3 suma a A en lloc de B.|Escribe «Gana A»: la línea 3 suma a A en lugar de B." },
          { q: "Quina línia té el bug? Com l'arregleu?|¿Qué línea tiene el bug? ¿Cómo la arregláis?", sol: "La 3: «Si guanya el punt B, B = B + 1».|La 3: «Si gana el punto B, B = B + 1»." },
          { q: "Escriviu el missatge de versió del vostre arreglo:|Escribid el mensaje de versión de vuestro arreglo:", sol: "Per exemple: «Arreglat: els punts de B se sumaven a A (línia 3)».|Por ejemplo: «Arreglado: los puntos de B se sumaban a A (línea 3)»." },
          { q: "Torneu a passar aquestes proves: A, A, A (ha de dir «Guanya A») · B, A, B, B (ha de dir «Guanya B») · A, B, A, B (no ha de dir res). Passen totes?|Volved a pasar estas pruebas: A, A, A (debe decir «Gana A») · B, A, B, B (debe decir «Gana B») · A, B, A, B (no debe decir nada). ¿Pasan todas?", big: true, sol: "Amb l'arreglo, sí. Si algun grup ha canviat també la línia 2, la primera prova falla: és una regressió.|Con el arreglo, sí. Si algún grupo ha cambiado también la línea 2, la primera prueba falla: es una regresión." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: una app per a una necessitat real ---------- */
  'i5-4': {
    intro: "Projecte de la unitat: l'alumnat fa d'equip de producte. Entrevista un company/a per descobrir una necessitat real del centre, escriu l'especificació amb proves d'acceptació i el que l'app no farà mai (res de dades personals), la construeix amb vibe coding, en troba i arregla l'error amb les proves i omple una fitxa de transparència: què ha fet la IA, què ha fet ell o ella, com l'ha provada i què milloraria. Acaba amb una fira d'apps on els companys en comproven les proves.|Proyecto de la unidad: el alumnado hace de equipo de producto. Entrevista a un compañero/a para descubrir una necesidad real del centro, escribe la especificación con pruebas de aceptación y lo que la app no hará nunca (nada de datos personales), la construye con vibe coding, encuentra y arregla su error con las pruebas y rellena una ficha de transparencia: qué ha hecho la IA, qué ha hecho él o ella, cómo la ha probado y qué mejoraría. Termina con una feria de apps donde los compañeros comprueban sus pruebas.",
    claus: [
      "Una bona app petita resol una necessitat real i concreta, i no recull dades que no calen.|Una buena app pequeña resuelve una necesidad real y concreta, y no recoge datos que no hacen falta.",
      "Primer especificació i proves; després, generar, llegir, provar, arreglar i comentar els canvis.|Primero especificación y pruebas; después, generar, leer, probar, arreglar y comentar los cambios.",
      "La fitxa de transparència explica qui ha fet què i com s'ha provat: ni amagar la IA ni amagar la feina pròpia.|La ficha de transparencia explica quién ha hecho qué y cómo se ha probado: ni esconder la IA ni esconder el trabajo propio.",
      "Els usuaris són la millor prova: escoltar-los i reproduir el que els passa.|Los usuarios son la mejor prueba: escucharlos y reproducir lo que les pasa."
    ],
    prev: ["Sessions i5-1, i5-2 i i5-3: el cicle, l'especificació i les proves, llegir codi i depurar.|Sesiones i5-1, i5-2 e i5-3: el ciclo, la especificación y las pruebas, leer código y depurar."],
    obj: [
      "L'alumne/a identifica una necessitat real entrevistant un usuari/ària.|El alumno/a identifica una necesidad real entrevistando a un usuario/a.",
      "L'alumne/a especifica, construeix i prova una app amb ajuda d'una IA.|El alumno/a especifica, construye y prueba una app con ayuda de una IA.",
      "L'alumne/a declara amb honestedat què ha fet la IA i què ha fet ell o ella.|El alumno/a declara con honestidad qué ha hecho la IA y qué ha hecho él o ella.",
      "L'alumne/a presenta l'app i rep comentaris per millorar-la.|El alumno/a presenta la app y recibe comentarios para mejorarla."
    ],
    comp: [
      "Competència digital (CD3): creació d'aplicacions senzilles|Competencia digital (CD3): creación de aplicaciones sencillas",
      "Competència emprenedora (CE): de la necessitat al prototip|Competencia emprendedora (CE): de la necesidad al prototipo",
      "Competència ciutadana (CC): transparència i privadesa|Competencia ciudadana (CC): transparencia y privacidad"
    ],
    vocab: [
      ["Necessitat d'usuari|Necesidad de usuario", "Problema real d'una persona que una app pot ajudar a resoldre.|Problema real de una persona que una app puede ayudar a resolver."],
      ["Equip de producte|Equipo de producto", "Persones que decideixen què ha de fer una app, la creen i la proven.|Personas que deciden qué debe hacer una app, la crean y la prueban."],
      ["Minimització de dades|Minimización de datos", "Recollir només les dades imprescindibles (i millor cap de personal).|Recoger solo los datos imprescindibles (y mejor ninguno personal)."],
      ["Fitxa de transparència|Ficha de transparencia", "Document que explica com s'ha fet una obra o app i quin paper hi ha tingut la IA.|Documento que explica cómo se ha hecho una obra o app y qué papel ha tenido la IA."],
      ["Retroacció|Retroalimentación", "Comentaris dels usuaris per millorar la versió següent.|Comentarios de los usuarios para mejorar la versión siguiente."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió del projecte|Un ordenador por alumno/a con Numi Tech abierto en la sesión del proyecto", "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión", "Notes adhesives per a la fira d'apps|Notas adhesivas para la feria de apps"],
      imprimir: ["Entrevista d'usuari (imprimible 1): un per alumne/a|Entrevista de usuario (imprimible 1): uno por alumno/a", "Fitxa de transparència (imprimible 2): per a qui la vulgui en paper|Ficha de transparencia (imprimible 2): para quien la quiera en papel"],
      prep: ["Pensar tres o quatre necessitats reals del centre per si algú no en troba (cantina, excursió, tutoria, biblioteca).|Pensar tres o cuatro necesidades reales del centro por si alguien no encuentra ninguna (cantina, excursión, tutoría, biblioteca).", "Decidir com s'organitzarà la fira d'apps (taules, temps per visita).|Decidir cómo se organizará la feria de apps (mesas, tiempo por visita).", "Recordar la norma del centre sobre l'ús de la IA per citar-la a la fitxa de transparència.|Recordar la norma del centro sobre el uso de la IA para citarla en la ficha de transparencia."]
    },
    plan: [
      { min: 4, t: 'Apps per al centre|Apps para el centro', fase: 'inici',
        fa: "Presenta la crida del consell de delegats i el repte: una app útil, provada i explicada amb honestedat.|Presenta el llamamiento del consejo de delegados y el reto: una app útil, probada y explicada con honestidad.",
        diu: ["Quina cosa petita del centre es podria fer més fàcil amb una app?|¿Qué cosa pequeña del centro se podría hacer más fácil con una app?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: 'El pla del projecte|El plan del proyecto', fase: 'teoria',
        fa: "Amb les animacions: necessitat, pla (especificació i proves), construcció i transparència. Mostra els criteris d'avaluació.|Con las animaciones: necesidad, plan (especificación y pruebas), construcción y transparencia. Muestra los criterios de evaluación.",
        diu: ["Què no ha de fer mai la vostra app?|¿Qué no debe hacer nunca vuestra app?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "L'entrevista d'usuari|La entrevista de usuario", fase: 'desconnectat',
        fa: "Per parelles, s'entrevisten amb el full: necessitat, quan i on, què no ha de fer mai; en surten tres proves d'acceptació validades per l'entrevistat/da.|Por parejas, se entrevistan con la hoja: necesidad, cuándo y dónde, qué no debe hacer nunca; salen tres pruebas de aceptación validadas por el entrevistado/a.",
        diu: ["Què us ha sorprès de l'entrevista?|¿Qué os ha sorprendido de la entrevista?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 30, t: "A l'ordinador: construir, provar i declarar|En el ordenador: construir, probar y declarar", fase: 'ordinador',
        fa: "Fan la sessió de l'app: bona idea o no, com declarar l'ús de la IA, la fitxa d'especificació, la construcció de l'app amb proves, l'autoavaluació i la fitxa de transparència. Al final, la fira d'apps: cada visitant fa dues proves d'acceptació i deixa una nota.|Hacen la sesión de la app: buena idea o no, cómo declarar el uso de la IA, la ficha de especificación, la construcción de la app con pruebas, la autoevaluación y la ficha de transparencia. Al final, la feria de apps: cada visitante hace dos pruebas de aceptación y deja una nota.",
        diu: ["Quina prova us ha costat més de passar?|¿Qué prueba os ha costado más pasar?", "Què posareu a «què he fet jo»?|¿Qué pondréis en «qué he hecho yo»?"],
        slides: ['s10', 's11', 's12', 's13'], app: "De «Recorda» fins a la fira d'apps (inclou dues fitxes i l'app, que es desen).|De «Recuerda» hasta la feria de apps (incluye dos fichas y la app, que se guardan).", org: "Individual i tot el grup a la fira|Individual y todo el grupo en la feria" },
      { min: 8, t: 'Tancament: versió 2|Cierre: versión 2', fase: 'tancament',
        fa: "Cada persona diu el primer canvi de la versió 2 a partir de les notes de la fira. Resumeix la unitat i anuncia la següent: agents d'IA. Com s'han sentit.|Cada persona dice el primer cambio de la versión 2 a partir de las notas de la feria. Resume la unidad y anuncia la siguiente: agentes de IA. Cómo se han sentido.",
        diu: ["Què milloraríeu a la versió 2?|¿Qué mejoraríais en la versión 2?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les preguntes finals i com m'he sentit.|«Cierre»: las preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Tria una idea massa gran («una xarxa social del centre»).|Elige una idea demasiado grande («una red social del centro»).", "Una app, una cosa. Quina és la part més petita i útil? Comença per aquí.|Una app, una cosa. ¿Cuál es la parte más pequeña y útil? Empieza por ahí."],
      ["La idea demana dades personals (noms, notes, fotos).|La idea pide datos personales (nombres, notas, fotos).", "Repensa-la amb el consell de delegats: com es pot fer sense saber qui és qui?|Repiénsala con el consejo de delegados: ¿cómo se puede hacer sin saber quién es quién?"],
      ["A la fitxa de transparència escriu «tot ho ha fet la IA» (o «tot jo»).|En la ficha de transparencia escribe «todo lo ha hecho la IA» (o «todo yo»).", "Repassa el cicle: qui ha triat la idea, qui ha descrit, qui ha provat, qui ha arreglat?|Repasa el ciclo: ¿quién ha elegido la idea, quién ha descrito, quién ha probado, quién ha arreglado?"],
      ["La descripció de l'app no coincideix amb l'especificació.|La descripción de la app no coincide con la especificación.", "Que copiï les frases de «què es veu» i «què passa quan…» de la fitxa a la descripció.|Que copie las frases de «qué se ve» y «qué pasa cuando…» de la ficha en la descripción."],
      ["A la fira, ningú no prova res: només miren l'app.|En la feria, nadie prueba nada: solo miran la app.", "Cada visitant ha de fer dues proves de la fitxa i deixar una nota: és la seva feina.|Cada visitante tiene que hacer dos pruebas de la ficha y dejar una nota: es su trabajo."]
    ],
    diff: {
      mes: "Nivell PRO: la pregunta de publicar l'app (proves, privadesa, permisos i transparència) i l'app amb descripció completa i un comentari // que signa el canvi. Repte extra: afegir una millora de la fira (versió 2) i actualitzar la fitxa.|Nivel PRO: la pregunta de publicar la app (pruebas, privacidad, permisos y transparencia) y la app con descripción completa y un comentario // que firma el cambio. Reto extra: añadir una mejora de la feria (versión 2) y actualizar la ficha.",
      menys: "Oferir una llista de necessitats per triar. Fer l'entrevista en grup amb el docent com a «usuari». A la fitxa de transparència, donar frases per començar («La IA ha…», «Jo he…»).|Ofrecer una lista de necesidades para elegir. Hacer la entrevista en grupo con el docente como «usuario». En la ficha de transparencia, dar frases para empezar («La IA ha…», «Yo he…»)."
    },
    aval: {
      ticket: ["Quina necessitat resol la teva app i per a qui?|¿Qué necesidad resuelve tu app y para quién?", "Digues una cosa que ha fet la IA i una que has fet tu.|Di una cosa que ha hecho la IA y una que has hecho tú."],
      rubric: [
        ["Necessitat|Necesidad", "L'app resol una necessitat real d'algú, sense dades personals.|La app resuelve una necesidad real de alguien, sin datos personales.", "La idea és vaga o demana dades que no calen.|La idea es vaga o pide datos que no hacen falta."],
        ["Especificació i proves|Especificación y pruebas", "Especificació clara i proves comprovables que l'app passa.|Especificación clara y pruebas comprobables que la app pasa.", "Proves vagues o que l'app no passa.|Pruebas vagas o que la app no pasa."],
        ["Construcció|Construcción", "Llegeix el codi, troba i arregla l'error i ho comenta.|Lee el código, encuentra y arregla el error y lo comenta.", "No sap explicar què fa el codi.|No sabe explicar qué hace el código."],
        ["Transparència|Transparencia", "La fitxa diu de manera concreta qui ha fet què i com s'ha provat.|La ficha dice de forma concreta quién ha hecho qué y cómo se ha probado.", "La fitxa és genèrica o amaga la IA.|La ficha es genérica o esconde la IA."]
      ]
    },
    casa: "Ensenya l'app i la fitxa de transparència a casa. Demana a algú que hi faci les teves proves d'acceptació sense que tu l'ajudis: les passa?|Enseña la app y la ficha de transparencia en casa. Pide a alguien que haga tus pruebas de aceptación sin que tú le ayudes: ¿las pasa?",
    faq: [
      ["Es poden publicar aquestes apps de veritat?|¿Se pueden publicar estas apps de verdad?", "Des del portafoli es poden descarregar com a fitxer i, amb permís del centre, posar-les a la web de la classe. Abans: proves, privadesa i fitxa de transparència.|Desde el portafolio se pueden descargar como archivo y, con permiso del centro, ponerlas en la web de la clase. Antes: pruebas, privacidad y ficha de transparencia."],
      ["Si la IA ho ha fet gairebé tot, l'app és meva?|Si la IA lo ha hecho casi todo, ¿la app es mía?", "Teves són les decisions, les proves i la responsabilitat. Per això la fitxa ho explica tot: el treball que avaluem és el procés, no només el codi.|Tuyas son las decisiones, las pruebas y la responsabilidad. Por eso la ficha lo explica todo: el trabajo que evaluamos es el proceso, no solo el código."],
      ["Puc fer una app que no sigui de les plantilles?|¿Puedo hacer una app que no sea de las plantillas?", "Amb la IA simulada, l'app ha de ser d'un dels vuit tipus. Amb la IA en directe (si el grup la té activada), pot ser una altra, però sense proves automàtiques: cal fer les proves a mà.|Con la IA simulada, la app tiene que ser de uno de los ocho tipos. Con la IA en directo (si el grupo la tiene activada), puede ser otra, pero sin pruebas automáticas: hay que hacer las pruebas a mano."]
    ],
    tec: [
      ["L'app desada no es veu al portafoli.|La app guardada no se ve en el portafolio.", "Cal tocar «Desa-ho i continua» quan totes les proves estan en verd. Les fitxes es desen amb «Desa la fitxa i continua».|Hay que tocar «Guárdalo y continúa» cuando todas las pruebas están en verde. Las fichas se guardan con «Guarda la ficha y continúa»."],
      ["Vull canviar la fitxa després de desar-la.|Quiero cambiar la ficha después de guardarla.", "Torneu al pas de la fitxa: surt el que hi havia i, en desar-la, se substitueix. Des del portafoli també es pot imprimir.|Volved al paso de la ficha: sale lo que había y, al guardarla, se sustituye. Desde el portafolio también se puede imprimir."]
    ],
    seg: ["Cap app no ha de recollir noms, notes, fotos ni ubicacions de ningú. A la fira, les proves es fan amb dades inventades.|Ninguna app debe recoger nombres, notas, fotos ni ubicaciones de nadie. En la feria, las pruebas se hacen con datos inventados."],
    extra: [
      "Tutoria: presentar les apps al consell de delegats i triar-ne una per fer-la servir de veritat.|Tutoría: presentar las apps al consejo de delegados y elegir una para usarla de verdad.",
      "Llengua: escriure el text de presentació de l'app per a la fira (què fa, per a qui, com s'ha fet).|Lengua: escribir el texto de presentación de la app para la feria (qué hace, para quién, cómo se ha hecho)."
    ],
    trans: ["Unitat 6: els agents d'IA no només escriuen codi, també fan accions: permisos i seguretat.|Unidad 6: los agentes de IA no solo escriben código, también hacen acciones: permisos y seguridad."],
    slides: [
      { id: 's1', k: 'portada', t: 'Projecte: una app per a una necessitat real|Proyecto: una app para una necesidad real', x: 'Crea amb IA|Crea con IA', nota: "Sessió de projecte de la unitat 5.|Sesión de proyecto de la unidad 5." },
      { id: 's2', k: 'pregunta', t: 'Apps per al centre|Apps para el centro', x: 'Gots de la cantina, material de l\'excursió, repàs, sortejos…|Vasos de la cantina, material de la excursión, repaso, sorteos…', nota: "Recull idees a la pissarra.|Recoge ideas en la pizarra." },
      { id: 's3', k: 'anim', t: 'Comença pel problema|Empieza por el problema', anim: 'i54need', x: 'Una cosa, ben feta, sense dades personals.|Una cosa, bien hecha, sin datos personales.', nota: "Filtra les idees amb la privadesa.|Filtra las ideas con la privacidad." },
      { id: 's4', k: 'anim', t: 'Especificació i proves, primer|Especificación y pruebas, primero', anim: 'i54plan', x: 'Així sabràs quan has acabat.|Así sabrás cuándo has terminado.', nota: "Recorda la fitxa de la sessió i5-2.|Recuerda la ficha de la sesión i5-2." },
      { id: 's5', k: 'anim', t: 'Genera, llegeix, prova, arregla|Genera, lee, prueba, arregla', anim: 'i54build', x: 'I signa el teu canvi amb un comentari.|Y firma tu cambio con un comentario.', nota: "El comentari // és la signatura dins del codi.|El comentario // es la firma dentro del código." },
      { id: 's6', k: 'anim', t: 'Què ha fet la IA i què he fet jo|Qué ha hecho la IA y qué he hecho yo', anim: 'i54honest', x: 'Declarar és explicar com s\'ha fet.|Declarar es explicar cómo se ha hecho.', nota: "Llegiu la norma del centre sobre la IA.|Leed la norma del centro sobre la IA." },
      { id: 's7', k: 'concepte', t: 'Com ho avaluarem|Cómo lo evaluaremos', punts: ['Necessitat real i sense dades personals.|Necesidad real y sin datos personales.', 'Especificació i proves que passen.|Especificación y pruebas que pasan.', 'Codi entès i error arreglat.|Código entendido y error arreglado.', 'Fitxa de transparència concreta.|Ficha de transparencia concreta.'], nota: "Són les quatre files de la rúbrica.|Son las cuatro filas de la rúbrica." },
      { id: 's8', k: 'activitat', t: "L'entrevista d'usuari|La entrevista de usuario", timer: 10, punts: ['Què et costa ara? Quan i on?|¿Qué te cuesta ahora? ¿Cuándo y dónde?', 'Què no ha de fer mai?|¿Qué no debe hacer nunca?', "Tres proves d'acceptació amb ✓.|Tres pruebas de aceptación con ✓."], nota: "Full «Entrevista d'usuari», un per alumne/a.|Hoja «Entrevista de usuario», una por alumno/a." },
      { id: 's9', k: 'pregunta', t: "Què us ha sorprès de l'entrevista?|¿Qué os ha sorprendido de la entrevista?", x: "L'usuari sap què necessita.|El usuario sabe qué necesita.", nota: "Dos o tres exemples en veu alta.|Dos o tres ejemplos en voz alta." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 25, punts: ["La fitxa d'especificació.|La ficha de especificación.", "L'app, amb les proves en verd.|La app, con las pruebas en verde.", "L'autoavaluació i la fitxa de transparència.|La autoevaluación y la ficha de transparencia."], nota: "Fes la pausa activa quan hi arribin.|Haz la pausa activa cuando lleguen." },
      { id: 's11', k: 'repte', t: "Construeix l'app|Construye la app", punts: ['Descriu-la a partir de la fitxa.|Descríbela a partir de la ficha.', "Troba l'error amb les proves.|Encuentra el error con las pruebas."], nota: "L'app es desa al portafoli.|La app se guarda en el portafolio." },
      { id: 's12', k: 'concepte', t: 'Nivell PRO|Nivel PRO', punts: ['Publicar: proves, privadesa, permís, transparència.|Publicar: pruebas, privacidad, permiso, transparencia.', 'Descripció completa i comentari //.|Descripción completa y comentario //.'], nota: "Per a 3r-4t d'ESO o qui vagi ràpid.|Para 3.º-4.º de ESO o quien vaya rápido." },
      { id: 's13', k: 'activitat', t: "Fira d'apps|Feria de apps", timer: 8, punts: ['60 segons de presentació.|60 segundos de presentación.', 'Cada visitant: dues proves i una nota.|Cada visitante: dos pruebas y una nota.'], nota: "Organitza torns perquè tothom visiti tres taules.|Organiza turnos para que todo el mundo visite tres mesas." },
      { id: 's14', k: 'concepte', t: 'I la versió 2?|¿Y la versión 2?', punts: ['Llegiu les notes.|Leed las notas.', 'Trieu el primer canvi.|Elegid el primer cambio.'], nota: "Cada persona diu el seu en veu alta.|Cada persona dice el suyo en voz alta." },
      { id: 's15', k: 'resum', t: 'Hem après a…|Hemos aprendido a…', punts: ["Partir d'una necessitat real.|Partir de una necesidad real.", 'Especificar, construir i provar amb IA.|Especificar, construir y probar con IA.', 'Declarar qui ha fet què.|Declarar quién ha hecho qué.'], nota: "Propera unitat: agents d'IA.|Próxima unidad: agentes de IA." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ['Quina necessitat resol la teva app?|¿Qué necesidad resuelve tu app?', 'Una cosa de la IA i una de teva.|Una cosa de la IA y una tuya.'], nota: "Respostes orals o en un paper.|Respuestas orales o en un papel." }
    ],
    print: [
      { id: 'p1', t: "Entrevista d'usuari|Entrevista de usuario", k: 'fitxa',
        intro: "Un per alumne/a. Entrevista la teva parella com si fos qui farà servir l'app. Escolta més que no parlis.|Uno por alumno/a. Entrevista a tu pareja como si fuera quien usará la app. Escucha más que hablas.",
        items: [
          { q: "Què et costa ara? Quin problema tens?|¿Qué te cuesta ahora? ¿Qué problema tienes?", sol: "Resposta oberta: una necessitat concreta (per exemple, comptar els gots de la cantina).|Respuesta abierta: una necesidad concreta (por ejemplo, contar los vasos de la cantina)." },
          { q: "Quan i on la faries servir?|¿Cuándo y dónde la usarías?", sol: "Resposta oberta.|Respuesta abierta." },
          { q: "Què no hauria de fer mai l'app?|¿Qué no debería hacer nunca la app?", sol: "Per exemple: demanar noms, fer fotos, guardar notes.|Por ejemplo: pedir nombres, hacer fotos, guardar notas." },
          { q: "Tres proves d'acceptació (l'entrevistat/da hi posa ✓ si diuen el que necessita):|Tres pruebas de aceptación (el entrevistado/a pone ✓ si dicen lo que necesita):", big: true, sol: "Per exemple: 1) amb 3 tocs, el número diu 3; 2) Reinicia torna a 0; 3) a 20 surt un missatge.|Por ejemplo: 1) con 3 toques, el número dice 3; 2) Reinicia vuelve a 0; 3) a 20 sale un mensaje." }
        ] },
      { id: 'p2', t: 'Fitxa de transparència|Ficha de transparencia', k: 'fitxa',
        intro: "Per omplir a mà (la mateixa fitxa que a l'app) i deixar-la al costat de l'ordinador a la fira d'apps.|Para rellenar a mano (la misma ficha que en la app) y dejarla al lado del ordenador en la feria de apps.",
        items: [
          { q: "Nom de l'app i per a qui és:|Nombre de la app y para quién es:", sol: "Resposta oberta.|Respuesta abierta." },
          { q: "Què ha fet la IA:|Qué ha hecho la IA:", sol: "Per exemple: el codi de partida, l'estil, explicar línies.|Por ejemplo: el código de partida, el estilo, explicar líneas." },
          { q: "Què he fet jo:|Qué he hecho yo:", sol: "Per exemple: la idea, l'entrevista, la descripció, les proves, l'arreglo de l'error.|Por ejemplo: la idea, la entrevista, la descripción, las pruebas, el arreglo del error." },
          { q: "Un error que he trobat i com l'he arreglat:|Un error que he encontrado y cómo lo he arreglado:", sol: "Resposta oberta: la prova que fallava, la línia i el canvi.|Respuesta abierta: la prueba que fallaba, la línea y el cambio." },
          { q: "Com l'he provada i què milloraria:|Cómo la he probado y qué mejoraría:", big: true, sol: "Resposta oberta.|Respuesta abierta." }
        ] }
    ]
  },

  /* ---------- Sessió 5 · Taller: vibe coding amb un xat de veritat ---------- */
  'i5-5': {
    intro: "Taller pràctic de vibe coding amb un xat d'IA de veritat: el de la classe (Gemini o Copilot amb el compte del centre, o el del docent a la pissarra). L'alumnat tria una app petita per a una jornada de la tutoria (un marcador de punts, un dau o una pregunta ràpida), n'escriu l'especificació amb proves d'acceptació i demana al xat un sol fitxer HTML amb el CSS i el JavaScript a dins. L'enganxa a l'editor de Tech Web de Numi, que l'executa en un espai aïllat, en llegeix el codi i en fa les proves; després, amb un informe d'error clar, li demana que n'arregli un error (o que hi afegeixi una millora), torna a passar totes les proves i desa la v1 i la v2. Acaba amb una fitxa de transparència.|Taller práctico de vibe coding con un chat de IA de verdad: el de la clase (Gemini o Copilot con la cuenta del centro, o el del docente en la pizarra). El alumnado elige una app pequeña para una jornada de la tutoría (un marcador de puntos, un dado o una pregunta rápida), escribe su especificación con pruebas de aceptación y pide al chat un solo archivo HTML con el CSS y el JavaScript dentro. Lo pega en el editor de Tech Web de Numi, que lo ejecuta en un espacio aislado, lee su código y hace las pruebas; después, con un informe de error claro, le pide que arregle un error (o que añada una mejora), vuelve a pasar todas las pruebas y guarda la v1 y la v2. Termina con una ficha de transparencia.",
    claus: [
      "Especificació + normes (un sol fitxer, sense enllaços d'internet, amb id) = un codi que es pot enganxar, llegir i provar.|Especificación + normas (un solo archivo, sin enlaces de internet, con id) = un código que se puede pegar, leer y probar.",
      "El codi del xat no es dona per bo: es llegeix i es passen totes les proves d'acceptació, també els casos límit.|El código del chat no se da por bueno: se lee y se pasan todas las pruebas de aceptación, también los casos límite.",
      "Un bon informe d'error diu què he fet, què ha passat i què esperava, i demana un sol canvi.|Un buen informe de error dice qué he hecho, qué ha pasado y qué esperaba, y pide un solo cambio.",
      "Versions (v1, v2) i totes les proves després de cada canvi, per caçar regressions.|Versiones (v1, v2) y todas las pruebas después de cada cambio, para cazar regresiones."
    ],
    prev: ["Sessions i5-1 a i5-4: el cicle del vibe coding, l'especificació i les proves, llegir codi, depurar i versions.|Sesiones i5-1 a i5-4: el ciclo del vibe coding, la especificación y las pruebas, leer código, depurar y versiones."],
    obj: [
      "L'alumne/a converteix una especificació en un prompt clar per a un xat d'IA real.|El alumno/a convierte una especificación en un prompt claro para un chat de IA real.",
      "L'alumne/a enganxa i llegeix el codi generat i n'identifica les parts (HTML, CSS, JavaScript i id).|El alumno/a pega y lee el código generado e identifica sus partes (HTML, CSS, JavaScript e id).",
      "L'alumne/a prova l'app amb les seves proves d'acceptació, també els casos límit.|El alumno/a prueba la app con sus pruebas de aceptación, también los casos límite.",
      "L'alumne/a escriu un informe d'error concret i comprova la versió nova sense regressions.|El alumno/a escribe un informe de error concreto y comprueba la versión nueva sin regresiones."
    ],
    comp: [
      "Competència digital (CD3, CD5): crear programes senzills i resoldre problemes tècnics|Competencia digital (CD3, CD5): crear programas sencillos y resolver problemas técnicos",
      "Competència matemàtica i en ciència i tecnologia (STEM1): provar, mesurar i corregir|Competencia matemática y en ciencia y tecnología (STEM1): probar, medir y corregir",
      "Competència en comunicació lingüística (CCL1): explicar un problema amb precisió|Competencia en comunicación lingüística (CCL1): explicar un problema con precisión"
    ],
    vocab: [
      ["Un sol fitxer HTML|Un solo archivo HTML", "Pàgina que porta el CSS dins de <style> i el JavaScript dins de <script>, sense res de fora.|Página que lleva el CSS dentro de <style> y el JavaScript dentro de <script>, sin nada de fuera."],
      ["Cas límit|Caso límite", "Situació a la vora del que és normal (zero, la caixa buida, molts tocs seguits).|Situación en el borde de lo normal (cero, la caja vacía, muchos toques seguidos)."],
      ["Informe d'error|Informe de error", "Missatge que diu què has fet, què ha passat i què esperaves.|Mensaje que dice qué has hecho, qué ha pasado y qué esperabas."],
      ["Regressió|Regresión", "Quan un canvi espatlla una cosa que abans funcionava.|Cuando un cambio estropea algo que antes funcionaba."],
      ["Espai aïllat|Espacio aislado", "Lloc on el codi s'executa sense poder sortir a internet ni tocar res més.|Lugar donde el código se ejecuta sin poder salir a internet ni tocar nada más."]
    ],
    mat: {
      aula: ["Un ordinador per parella, amb Numi Tech obert a la sessió del taller i el xat del centre en una altra pestanya|Un ordenador por pareja, con Numi Tech abierto en la sesión del taller y el chat del centro en otra pestaña", "Projector per mostrar la primera missió|Proyector para mostrar la primera misión"],
      imprimir: ["Diari del taller (imprimible 1): un per parella (opcional: les respostes també queden a l'app)|Diario del taller (imprimible 1): uno por pareja (opcional: las respuestas también quedan en la app)"],
      prep: [
        "Comptes: el xat de la classe és Gemini (Google Workspace for Education) o Copilot Chat (Microsoft 365 Education), sempre amb el compte del centre; trieu-lo al panell (fitxa del grup → Tech IA → «Xat d'IA real dels tallers»). Gemini és per a alumnes de totes les edats si l'administrador del centre l'ha activat; Copilot Chat, per a alumnes de 13 anys o més. Si l'alumnat no té compte, o és de 1r d'ESO sense el consentiment de la família, trieu «Ho fa el docent»: feu servir el xat a la pissarra i passeu-los el codi.|Cuentas: el chat de la clase es Gemini (Google Workspace for Education) o Copilot Chat (Microsoft 365 Education), siempre con la cuenta del centro; elegidlo en el panel (ficha del grupo → Tech IA → «Chat de IA real de los talleres»). Gemini es para alumnos de todas las edades si el administrador del centro lo ha activado; Copilot Chat, para alumnos de 13 años o más. Si el alumnado no tiene cuenta, o es de 1.º de ESO sin el consentimiento de la familia, elegid «Lo hace el docente»: usad el chat en la pizarra y pasadles el código.",
        "Prova prèvia (el dia abans): demaneu al xat del centre el marcador de punts amb les normes de la missió 1, enganxeu-lo al pas «Enganxa el codi» de la sessió i comproveu que les quatre comprovacions passen i que la vista prèvia funciona. Així sabreu quant triga i si la xarxa deixa obrir el xat.|Prueba previa (el día antes): pedid al chat del centro el marcador de puntos con las normas de la misión 1, pegadlo en el paso «Pega el código» de la sesión y comprobad que las cuatro comprobaciones pasan y que la vista previa funciona. Así sabréis cuánto tarda y si la red deja abrir el chat.",
        "Si el xat el feu servir vosaltres, prepareu com passareu el codi a l'alumnat: una tasca de Classroom o de Teams, o un document compartit del centre. Si no hi ha manera, la solució de l'editor és una app d'exemple de Numi (amb l'error del −1) per poder fer igualment les proves i l'informe.|Si el chat lo usáis vosotros, preparad cómo pasaréis el código al alumnado: una tarea de Classroom o de Teams, o un documento compartido del centro. Si no hay manera, la solución del editor es una app de ejemplo de Numi (con el error del −1) para poder hacer igualmente las pruebas y el informe."
      ]
    },
    plan: [
      { min: 4, t: 'Una app amb un xat de veritat|Una app con un chat de verdad', fase: 'inici',
        fa: "Recorda l'especificació i les proves (i5-2) i presenta les tres apps de la tutoria. Avui la IA no és simulada: és el xat del centre.|Recuerda la especificación y las pruebas (i5-2) y presenta las tres apps de la tutoría. Hoy la IA no es simulada: es el chat del centro.",
        diu: ["Creieu que el xat encertarà l'app a la primera?|¿Creéis que el chat acertará la app a la primera?"],
        slides: ['s1', 's2'], app: "Els dos primers passos: la pregunta i la història.|Los dos primeros pasos: la pregunta y la historia.", org: "Tot el grup|Todo el grupo" },
      { min: 7, t: 'Normes, enganxar i informe|Normas, pegar e informe', fase: 'teoria',
        fa: "Amb les animacions: de l'especificació al prompt (normes), del xat a l'editor de Numi (enganxar i provar) i l'informe d'error. Repasseu les normes del taller.|Con las animaciones: de la especificación al prompt (normas), del chat al editor de Numi (pegar y probar) y el informe de error. Repasad las normas del taller.",
        diu: ["Per què demanem un sol fitxer i sense enllaços d'internet?|¿Por qué pedimos un solo archivo y sin enlaces de internet?"],
        slides: ['s3', 's4', 's5', 's6'], app: "Les targetes de teoria i la pregunta del fitxer únic.|Las tarjetas de teoría y la pregunta del archivo único.", org: "Tot el grup|Todo el grupo" },
      { min: 5, t: 'Pilot i copilot|Piloto y copiloto', fase: 'desconnectat',
        fa: "Cada parella tria l'app, es reparteix els rols i pensa tres proves d'acceptació, una de cas límit.|Cada pareja elige la app, se reparte los roles y piensa tres pruebas de aceptación, una de caso límite.",
        diu: ["Quin cas límit té la vostra app?|¿Qué caso límite tiene vuestra app?"],
        slides: ['s7'], app: "El pas «Pilot i copilot».|El paso «Piloto y copiloto».", org: "Parelles|Parejas" },
      { min: 7, t: "L'especificació|La especificación", fase: 'ordinador',
        fa: "Les parelles escriuen l'especificació a la fitxa: què es veu, què passa quan… i les proves. Mostra la plantilla de normes que copiaran al xat.|Las parejas escriben la especificación en la ficha: qué se ve, qué pasa cuando… y las pruebas. Muestra la plantilla de normas que copiarán al chat.",
        diu: ["Es pot comprovar aquesta prova? Com?|¿Se puede comprobar esta prueba? ¿Cómo?"],
        slides: ['s8'], app: "La fitxa «Especificació per al xat».|La ficha «Especificación para el chat».", org: "Parelles|Parejas" },
      { min: 15, t: 'Missió 1: el codi del xat (v1)|Misión 1: el código del chat (v1)', fase: 'ordinador',
        fa: "Les parelles demanen el codi al xat, l'enganxen a l'editor (v1), comproven que les quatre comprovacions passen i fan les seves proves a la vista prèvia. Després, la pregunta de llegir el codi i la pausa activa.|Las parejas piden el código al chat, lo pegan en el editor (v1), comprueban que las cuatro comprobaciones pasan y hacen sus pruebas en la vista previa. Después, la pregunta de leer el código y la pausa activa.",
        diu: ["On són els id? I els addEventListener?|¿Dónde están los id? ¿Y los addEventListener?", "Quantes proves passen?|¿Cuántas pruebas pasan?"],
        slides: ['s9', 's10'], app: "Missió 1, l'editor (v1), la pregunta del −1 i la pausa activa.|Misión 1, el editor (v1), la pregunta del −1 y la pausa activa.", org: "Parelles|Parejas" },
      { min: 12, t: "Missió 2: l'informe d'error (v2)|Misión 2: el informe de error (v2)", fase: 'ordinador',
        fa: "Les parelles escriuen l'informe d'error al xat (o demanen una millora petita si tot passava), enganxen la v2 amb el comentari «// v2: …» i tornen a passar totes les proves.|Las parejas escriben el informe de error al chat (o piden una mejora pequeña si todo pasaba), pegan la v2 con el comentario «// v2: …» y vuelven a pasar todas las pruebas.",
        diu: ["Què has fet, què ha passat i què esperaves?|¿Qué has hecho, qué ha pasado y qué esperabas?", "Hi ha alguna prova que abans passava i ara no?|¿Hay alguna prueba que antes pasaba y ahora no?"],
        slides: ['s11', 's12', 's13'], app: "Missió 2, la pregunta de la regressió i l'editor (v2).|Misión 2, la pregunta de la regresión y el editor (v2).", org: "Parelles|Parejas" },
      { min: 10, t: 'Transparència i tancament|Transparencia y cierre', fase: 'tancament',
        fa: "Cada parella omple la fitxa de transparència. Posada en comú: quins errors ha fet el xat i quins informes han funcionat millor. Tiquet de sortida.|Cada pareja rellena la ficha de transparencia. Puesta en común: qué errores ha hecho el chat y qué informes han funcionado mejor. Tique de salida.",
        diu: ["Què ha fet el xat i què heu fet vosaltres?|¿Qué ha hecho el chat y qué habéis hecho vosotros?"],
        slides: ['s14', 's15', 's16'], app: "La fitxa de transparència, la pregunta final i com m'he sentit.|La ficha de transparencia, la pregunta final y cómo me he sentido.", org: "Parelles i tot el grup|Parejas y todo el grupo" }
    ],
    errors: [
      ["Enganxa només un tros del codi o el posa al costat del que hi havia.|Pega solo un trozo del código o lo pone al lado de lo que había.", "A l'editor, Ctrl+A abans d'enganxar; el codi ha d'anar de <!DOCTYPE html> a </html>.|En el editor, Ctrl+A antes de pegar; el código tiene que ir de <!DOCTYPE html> a </html>."],
      ["El xat dona tres fitxers (HTML, CSS i JS) o moltes explicacions.|El chat da tres archivos (HTML, CSS y JS) o muchas explicaciones.", "Demanar-li: «Posa-ho tot en un sol fitxer HTML i dona'm només el codi».|Pedirle: «Ponlo todo en un solo archivo HTML y dame solo el código»."],
      ["La comprovació dels id no passa.|La comprobación de los id no pasa.", "Demanar al xat que posi un id a cada botó i que els faci servir amb getElementById.|Pedir al chat que ponga un id en cada botón y que los use con getElementById."],
      ["Escriu al xat «no funciona».|Escribe al chat «no funciona».", "L'informe: què he fet, què ha passat i què esperava. I un sol canvi cada vegada.|El informe: qué he hecho, qué ha pasado y qué esperaba. Y un solo cambio cada vez."],
      ["Després de la v2 només prova la prova que fallava.|Después de la v2 solo prueba la prueba que fallaba.", "Totes les proves, cada vegada: és l'única manera de veure una regressió.|Todas las pruebas, cada vez: es la única manera de ver una regresión."]
    ],
    diff: {
      mes: "Nivell PRO: l'especificació amb 4 proves (dues de casos límit) i el que l'app no farà mai, i la pregunta del paquet d'internet desconegut. Repte: una v3 amb una millora (per exemple, un missatge a 10), el seu comentari «// v3: …» i totes les proves una altra vegada.|Nivel PRO: la especificación con 4 pruebas (dos de casos límite) y lo que la app no hará nunca, y la pregunta del paquete de internet desconocido. Reto: una v3 con una mejora (por ejemplo, un mensaje en 10), su comentario «// v3: …» y todas las pruebas otra vez.",
      menys: "Tothom fa el marcador de punts, amb l'especificació mig feta a la pissarra. El docent fa la missió 1 al xat a la pissarra i comparteix el codi; l'alumnat l'enganxa, en fa les proves i escriu l'informe d'error.|Todo el mundo hace el marcador de puntos, con la especificación medio hecha en la pizarra. El docente hace la misión 1 en el chat en la pizarra y comparte el código; el alumnado lo pega, hace sus pruebas y escribe el informe de error."
    },
    aval: {
      ticket: ["Quines tres parts té un bon informe d'error?|¿Qué tres partes tiene un buen informe de error?", "Què ha fet el xat i què heu fet vosaltres?|¿Qué ha hecho el chat y qué habéis hecho vosotros?"],
      rubric: [
        ["Especificació|Especificación", "Clara, amb proves que es poden comprovar i un cas límit.|Clara, con pruebas que se pueden comprobar y un caso límite.", "Vaga o sense proves comprovables.|Vaga o sin pruebas comprobables."],
        ["Proves|Pruebas", "Fa totes les proves a la v1 i a la v2 i n'apunta el resultat.|Hace todas las pruebas en la v1 y en la v2 y apunta el resultado.", "Prova poc o només la prova que fallava.|Prueba poco o solo la prueba que fallaba."],
        ["Informe d'error|Informe de error", "Diu què ha fet, què ha passat i què esperava, i demana un sol canvi.|Dice qué ha hecho, qué ha pasado y qué esperaba, y pide un solo cambio.", "«No funciona» o massa canvis alhora.|«No funciona» o demasiados cambios a la vez."],
        ["Transparència|Transparencia", "Fitxa concreta: què ha fet el xat i què han fet ells.|Ficha concreta: qué ha hecho el chat y qué han hecho ellos.", "Fitxa vaga o que amaga la IA.|Ficha vaga o que esconde la IA."]
      ]
    },
    casa: "A casa, i només si la família vol: obriu l'app des del portafoli (es pot descarregar com un fitxer .html) i ensenyeu-los quines proves passa i quin error vau fer arreglar al xat. Si feu servir un xat d'IA a casa, que sigui amb un adult, amb el compte que toca i sense dades personals.|En casa, y solo si la familia quiere: abrid la app desde el portafolio (se puede descargar como un archivo .html) y enseñadles qué pruebas pasa y qué error hicisteis arreglar al chat. Si usáis un chat de IA en casa, que sea con un adulto, con la cuenta que toca y sin datos personales.",
    faq: [
      ["El xat sempre escriu el mateix codi?|¿El chat siempre escribe el mismo código?", "No: cada vegada surt una mica diferent, perquè tria les paraules amb probabilitats. Per això cada parella prova el seu codi.|No: cada vez sale un poco distinto, porque elige las palabras con probabilidades. Por eso cada pareja prueba su código."],
      ["Cal saber programar per fer el taller?|¿Hace falta saber programar para hacer el taller?", "Cal saber llegir codi senzill i provar-lo, que és el que han après a i5-1…i5-4. El xat escriu; l'alumnat decideix, llegeix, prova i demana canvis.|Hace falta saber leer código sencillo y probarlo, que es lo que han aprendido en i5-1…i5-4. El chat escribe; el alumnado decide, lee, prueba y pide cambios."],
      ["És segur enganxar codi del xat a Numi?|¿Es seguro pegar código del chat en Numi?", "La vista prèvia de Numi l'executa en un espai aïllat, sense internet. Tot i així, cal llegir-lo, no enganxar-hi mai contrasenyes ni dades personals i no fer servir biblioteques que no coneixem.|La vista previa de Numi lo ejecuta en un espacio aislado, sin internet. Aun así, hay que leerlo, no pegar nunca contraseñas ni datos personales y no usar bibliotecas que no conocemos."],
      ["Es pot publicar l'app?|¿Se puede publicar la app?", "Es pot descarregar des del portafoli. Per publicar-la, amb permís del centre, sense dades personals i dient que s'ha fet amb ajuda d'IA.|Se puede descargar desde el portafolio. Para publicarla, con permiso del centro, sin datos personales y diciendo que se ha hecho con ayuda de IA."]
    ],
    tec: [
      ["La vista prèvia queda en blanc o surt un error de JavaScript.|La vista previa se queda en blanco o sale un error de JavaScript.", "Sovint el xat ha tallat la resposta: mireu que el codi acabi amb </html> o demaneu-li «dona'm el fitxer sencer». Si l'error continua, és un bon informe per al xat.|A menudo el chat ha cortado la respuesta: mirad que el código acabe con </html> o pedidle «dame el archivo entero». Si el error sigue, es un buen informe para el chat."],
      ["L'app fa servir biblioteques o tipus de lletra d'internet i no funciona.|La app usa bibliotecas o tipos de letra de internet y no funciona.", "La vista prèvia no té internet. Demaneu-la «sense enllaços ni biblioteques d'internet».|La vista previa no tiene internet. Pedidla «sin enlaces ni bibliotecas de internet»."],
      ["No es pot copiar el codi del projector (el xat el fa el docent).|No se puede copiar el código del proyector (el chat lo hace el docente).", "Compartiu-lo per Classroom, Teams o un document del centre; o feu servir la solució de l'editor (l'app d'exemple de Numi).|Compartidlo por Classroom, Teams o un documento del centro; o usad la solución del editor (la app de ejemplo de Numi)."]
    ],
    seg: ["Només el compte del centre; cap nom, foto ni dada personal a l'especificació ni a l'app.|Solo la cuenta del centro; ningún nombre, foto ni dato personal en la especificación ni en la app.", "No es copia mai cap contrasenya ni clau al xat, i no s'enganxa codi que carregui coses d'internet.|No se copia nunca ninguna contraseña ni clave en el chat, y no se pega código que cargue cosas de internet.", "Si el xat respon alguna cosa estranya o que fa sentir malament, s'avisa el docent.|Si el chat responde algo raro o que hace sentir mal, se avisa al docente."],
    extra: [
      "Matemàtiques: un dau de 6 cares i 100 tirades per comparar les freqüències amb la probabilitat teòrica.|Matemáticas: un dado de 6 caras y 100 tiradas para comparar las frecuencias con la probabilidad teórica.",
      "Tutoria: el marcador de punts per a un concurs de preguntes de repàs, amb noms d'equip inventats.|Tutoría: el marcador de puntos para un concurso de preguntas de repaso, con nombres de equipo inventados."
    ],
    trans: ["Unitat 6: agents d'IA, que no només escriuen codi sinó que fan accions (i com donar-los els mínims permisos). Unitat 8: el prototip del centre també pot ser una app feta amb el xat i provada així.|Unidad 6: agentes de IA, que no solo escriben código sino que hacen acciones (y cómo darles los mínimos permisos). Unidad 8: el prototipo del centro también puede ser una app hecha con el chat y probada así."],
    slides: [
      { id: 's1', k: 'portada', t: 'Taller: vibe coding amb un xat de veritat|Taller: vibe coding con un chat de verdad', x: "El xat del centre i l'editor de Numi|El chat del centro y el editor de Numi", nota: "Taller pràctic de la unitat 5.|Taller práctico de la unidad 5." },
      { id: 's2', k: 'pregunta', t: "Encertarà l'app a la primera?|¿Acertará la app a la primera?", x: "Un xat de veritat, una especificació vostra.|Un chat de verdad, una especificación vuestra.", nota: "Apunteu les prediccions i compareu-les al final.|Apuntad las predicciones y comparadlas al final." },
      { id: 's3', k: 'anim', t: "De l'especificació al prompt|De la especificación al prompt", anim: 'i55spec', x: "Normes + especificació → un sol fitxer.|Normas + especificación → un solo archivo.", nota: "Les normes fan que el codi es pugui enganxar a Numi.|Las normas hacen que el código se pueda pegar en Numi." },
      { id: 's4', k: 'anim', t: 'Enganxa i prova|Pega y prueba', anim: 'i55paste', x: "Copia, enganxa a index.html i fes les proves.|Copia, pega en index.html y haz las pruebas.", nota: "La vista prèvia és un espai aïllat, sense internet.|La vista previa es un espacio aislado, sin internet." },
      { id: 's5', k: 'anim', t: "L'informe d'error|El informe de error", anim: 'i55bug', x: "Què he fet, què ha passat, què esperava.|Qué he hecho, qué ha pasado, qué esperaba.", nota: "I després, totes les proves una altra vegada.|Y después, todas las pruebas otra vez." },
      { id: 's6', k: 'concepte', t: 'Les normes del taller|Las normas del taller', punts: ["Compte del centre, mai el personal.|Cuenta del centro, nunca la personal.", "Cap dada personal a l'especificació.|Ningún dato personal en la especificación.", "Res de codi que carregui coses d'internet.|Nada de código que cargue cosas de internet."], nota: "Si el xat respon res estrany, aviseu.|Si el chat responde algo raro, avisad." },
      { id: 's7', k: 'activitat', t: 'Pilot i copilot|Piloto y copiloto', timer: 5, punts: ["Trieu l'app: marcador, dau o pregunta.|Elegid la app: marcador, dado o pregunta.", "Pilot escriu; copilot prova.|Piloto escribe; copiloto prueba.", "Tres proves, una de cas límit.|Tres pruebas, una de caso límite."], nota: "A la meitat, canvien els rols.|A la mitad, cambian los roles." },
      { id: 's8', k: 'concepte', t: 'Les normes per al xat|Las normas para el chat', code: "Fes-me una app web petita en un sol fitxer HTML,\namb el CSS dins de <style> i el JavaScript dins de <script>.\nSense enllaços ni biblioteques d'internet.\nPosa un id als botons i als textos que canvien.\nDona'm només el codi. L'app: …|Hazme una app web pequeña en un solo archivo HTML,\ncon el CSS dentro de <style> y el JavaScript dentro de <script>.\nSin enlaces ni bibliotecas de internet.\nPon un id a los botones y a los textos que cambian.\nDame solo el código. La app: …", punts: ["Després de les normes, l'especificació.|Después de las normas, la especificación."], nota: "El text exacte és a la missió 1, amb el botó «Copia».|El texto exacto está en la misión 1, con el botón «Copia»." },
      { id: 's9', k: 'activitat', t: 'Missió 1: el codi del xat|Misión 1: el código del chat', timer: 15, punts: ["Normes + especificació al xat.|Normas + especificación al chat.", "Enganxeu-lo a l'editor (v1).|Pegadlo en el editor (v1).", "Les vostres proves a la vista prèvia.|Vuestras pruebas en la vista previa."], nota: "Mostreu com es copia el codi sencer.|Mostrad cómo se copia el código entero." },
      { id: 's10', k: 'pregunta', t: 'A 0, toques −1. Què hi haurà?|En 0, tocas −1. ¿Qué habrá?', x: "Llegiu el codi abans d'executar-lo.|Leed el código antes de ejecutarlo.", nota: "Si cap línia diu «no baixis de 0», sortirà −1.|Si ninguna línea dice «no bajes de 0», saldrá −1." },
      { id: 's11', k: 'activitat', t: "Missió 2: l'informe d'error|Misión 2: el informe de error", timer: 12, punts: ["Què he fet, què ha passat, què esperava.|Qué he hecho, qué ha pasado, qué esperaba.", "Un sol canvi; el fitxer sencer.|Un solo cambio; el archivo entero.", "Enganxeu la v2 amb «// v2: …».|Pegad la v2 con «// v2: …»."], nota: "Si tot passava, una millora petita.|Si todo pasaba, una mejora pequeña." },
      { id: 's12', k: 'concepte', t: 'Un bon informe|Un buen informe', code: "He provat l'app. Quan [què he fet],\npassa que [què passa], però hauria de [què esperava].\nArregla només això, no canviïs res més\ni torna'm el fitxer sencer.|He probado la app. Cuando [qué he hecho],\npasa que [qué pasa], pero debería [qué esperaba].\nArregla solo esto, no cambies nada más\ny devuélveme el archivo entero.", punts: ["Concret, comprovable i d'un en un.|Concreto, comprobable y de uno en uno."], nota: "«No funciona» no ajuda ningú.|«No funciona» no ayuda a nadie." },
      { id: 's13', k: 'pregunta', t: 'Ara Reinicia no fa res. Què ha passat?|Ahora Reinicia no hace nada. ¿Qué ha pasado?', x: "El −1 ja anava bé…|El −1 ya iba bien…", nota: "Una regressió: totes les proves, cada vegada.|Una regresión: todas las pruebas, cada vez." },
      { id: 's14', k: 'concepte', t: 'Què ha fet el xat i què hem fet nosaltres|Qué ha hecho el chat y qué hemos hecho nosotros', punts: ["El xat: el codi de la v1 i l'arreglo.|El chat: el código de la v1 y el arreglo.", "Nosaltres: especificació, proves, informe i comentari v2.|Nosotros: especificación, pruebas, informe y comentario v2."], nota: "Ni amagar la IA ni amagar la feina pròpia.|Ni esconder la IA ni esconder el trabajo propio." },
      { id: 's15', k: 'resum', t: 'Vibe coding de veritat, amb cap|Vibe coding de verdad, con cabeza', punts: ["Normes + especificació.|Normas + especificación.", "Llegir i provar, també els casos límit.|Leer y probar, también los casos límite.", "Informe clar i totes les proves.|Informe claro y todas las pruebas."], nota: "Connecteu-ho amb els agents de la unitat 6.|Conectadlo con los agentes de la unidad 6." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Tique de salida', punts: ["Les tres parts d'un bon informe d'error.|Las tres partes de un buen informe de error.", "Què ha fet el xat i què heu fet vosaltres?|¿Qué ha hecho el chat y qué habéis hecho vosotros?"], nota: "Respostes orals o a la llibreta.|Respuestas orales o en la libreta." }
    ],
    print: [
      { id: 'p1', t: 'Diari del taller: vibe coding amb un xat|Diario del taller: vibe coding con un chat', k: 'fitxa',
        intro: "Un per parella (opcional: les respostes també queden a l'app).|Uno por pareja (opcional: las respuestas también quedan en la app).",
        items: [
          { q: "L'app i l'especificació (què es veu i què passa quan…):|La app y la especificación (qué se ve y qué pasa cuando…):", big: true, sol: "Per exemple: marcador de l'equip; un número gran i +1, −1 i Reinicia; +1 suma, −1 resta, Reinicia torna a 0.|Por ejemplo: marcador del equipo; un número grande y +1, −1 y Reinicia; +1 suma, −1 resta, Reinicia vuelve a 0." },
          { q: "Les proves d'acceptació (✓ o ✗ a la v1 i a la v2):|Las pruebas de aceptación (✓ o ✗ en la v1 y en la v2):", big: true, sol: "Per exemple: 3 tocs → 3 (✓ ✓); Reinicia → 0 (✓ ✓); a 0, −1 → 0 (✗ ✓).|Por ejemplo: 3 toques → 3 (✓ ✓); Reinicia → 0 (✓ ✓); en 0, −1 → 0 (✗ ✓)." },
          { q: "L'informe d'error que heu enviat al xat:|El informe de error que habéis enviado al chat:", big: true, sol: "Per exemple: «Quan el marcador és a 0 i toco −1, surt −1, però s'hauria de quedar a 0. Arregla només això.»|Por ejemplo: «Cuando el marcador está en 0 y toco −1, sale −1, pero se tendría que quedar en 0. Arregla solo esto.»" },
          { q: "Què ha fet el xat i què heu fet vosaltres?|¿Qué ha hecho el chat y qué habéis hecho vosotros?", sol: "Per exemple: el xat, el codi i l'arreglo; nosaltres, l'especificació, les proves, l'informe i el comentari v2.|Por ejemplo: el chat, el código y el arreglo; nosotros, la especificación, las pruebas, el informe y el comentario v2." }
        ] }
    ]
  }
});
