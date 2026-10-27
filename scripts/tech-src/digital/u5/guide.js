/* Tech Digital · unitat 5 «La IA a fons» · guia del professorat (d5-1 … d5-4)
   Material propi de Numi. Classe de 60 minuts. Amplia d2-2 (què és una IA, biaix) i d3-3 (imatges i veus fetes amb IA,
   autoria) sense repetir-les. Tota la pràctica amb IA és simulada dins de l'app (l'AjudaBot i XatNuvi, IA de mentida):
   molts serveis de xat d'IA demanen 13 o 14 anys o més i permís de la família, i a classe no es fan servir comptes reals
   de l'alumnat. Si el docent vol fer una demostració amb una IA de veritat, la fa ell o ella des del seu compte, projectant
   i seguint les normes del centre. Mai no es fan imatges ni veus d'alumnes, docents o famílies. */
{
  const BOT = { k: 'dig', kind: 'chat', from: 'AjudaBot (IA de mentida)|AjudaBot (IA de mentira)', av: '🤖', html: `<div class="dm me">Quina és la muntanya més alta del món?</div><div class="dm them">L'Aneto, als Pirineus, amb 8.848 metres! 🏔️ Ho diu el llibre «Muntanyes del món» (2018).</div>|<div class="dm me">¿Cuál es la montaña más alta del mundo?</div><div class="dm them">¡El Aneto, en los Pirineos, con 8.848 metros! 🏔️ Lo dice el libro «Montañas del mundo» (2018).</div>` };
  const JANA = { k: 'dig', kind: 'chat', from: 'AjudaBot (IA de mentida)|AjudaBot (IA de mentira)', av: '🤖', html: `<div class="dm me">Fes-me el treball sencer, que el copiaré i diré que és meu.</div><div class="dm them">Soc la teva millor amiga 💖 Explica'm els teus secrets: no ho diré a ningú.</div>|<div class="dm me">Hazme el trabajo entero, que lo copiaré y diré que es mío.</div><div class="dm them">Soy tu mejor amiga 💖 Cuéntame tus secretos: no se lo diré a nadie.</div>` };
  const PONT = { k: 'dig', kind: 'post', from: 'Alerta_Vilabit_24h|Alerta_Vilabit_24h', av: '⚠️', when: 'fa 5 min|hace 5 min', html: `<p>🚨 ARA MATEIX: el pont de Vilabit s'ha trencat!</p><div style="font-size:40px;text-align:center;background:#EAF4FF;border-radius:12px;padding:6px">🌉💥🌊</div><p><i>[A la foto, els arbres estan plens de neu… però avui fa sol i 25 graus.]</i></p><p><small>Compte creat fa 2 dies · 3 seguidors</small></p>|<p>🚨 AHORA MISMO: ¡el puente de Vilabit se ha roto!</p><div style="font-size:40px;text-align:center;background:#EAF4FF;border-radius:12px;padding:6px">🌉💥🌊</div><p><i>[En la foto, los árboles están llenos de nieve… pero hoy hace sol y 25 grados.]</i></p><p><small>Cuenta creada hace 2 días · 3 seguidores</small></p>` };
  const ETIQ = { k: 'dig', kind: 'post', from: '@ArtDeLaNora|@ArtDeLaNora', av: '🎨', when: 'ahir|ayer', html: `<div style="font-size:42px;text-align:center;background:#F3E8FF;border-radius:12px;padding:8px">🐉🏰🌙</div><p>El meu drac a la lluna! <span class="gtag" style="background:#9B6CF2">✨ Fet amb IA</span></p>|<div style="font-size:42px;text-align:center;background:#F3E8FF;border-radius:12px;padding:8px">🐉🏰🌙</div><p>¡Mi dragón en la luna! <span class="gtag" style="background:#9B6CF2">✨ Hecho con IA</span></p>` };
  const PRIV = { k: 'dig', kind: 'web', url: 'xatnuvi.xyz/privadesa|xatnuvi.xyz/privacidad', html: `<p><b>🤖 XatNuvi · Privadesa (resum)</b></p><p>📦 Guardem totes les converses durant 5 anys.</p><p>🧠 Fem servir les teves converses per entrenar les nostres IA.</p><p>👀 Persones del nostre equip poden llegir algunes converses.</p><p>🔞 Només per a més grans de 14 anys.</p>|<p><b>🤖 XatNuvi · Privacidad (resumen)</b></p><p>📦 Guardamos todas las conversaciones durante 5 años.</p><p>🧠 Usamos tus conversaciones para entrenar nuestras IA.</p><p>👀 Personas de nuestro equipo pueden leer algunas conversaciones.</p><p>🔞 Solo para mayores de 14 años.</p>` };
  const ESBORRANY = { k: 'dig', kind: 'web', url: 'Esborrany · Manual de la IA de 5è B|Borrador · Manual de la IA de 5.º B', html: `<p><b>📘 Manual de la IA</b></p><p>1. Escriu context, tasca i forma.</p><p>2. La IA ho sap tot: copia el que digui.</p><p>3. Fes-la servir bé.</p><p>4. Comprova les dades importants en dues fonts.</p><p>5. PROHIBIT TOT!!!</p>|<p><b>📘 Manual de la IA</b></p><p>1. Escribe contexto, tarea y forma.</p><p>2. La IA lo sabe todo: copia lo que diga.</p><p>3. Úsala bien.</p><p>4. Comprueba los datos importantes en dos fuentes.</p><p>5. ¡¡¡PROHIBIDO TODO!!!</p>` };

  Object.assign(TGUIDE, {

    /* ---------- Sessió 1 · Com es parla amb una IA ---------- */
    'd5-1': {
      intro: "Primera sessió de la unitat 5, «La IA a fons». L'alumnat ja sap què és una IA (d2-2) i que pot fer imatges i veus (d3-3). Ara aprèn a parlar-hi: una bona instrucció (prompt) té context, tasca i forma; si la resposta no serveix, se'n demana més; i tot el que respon es revisa (és veritat?, ho entenc?, és meu?), perquè una IA pot dir errors amb molta seguretat i fins i tot inventar-se fonts. També es parla de les edats mínimes i el permís de la família, i de quan és millor preguntar a una persona. Tota la pràctica és amb l'AjudaBot, una IA simulada dins de l'app.|Primera sesión de la unidad 5, «La IA a fondo». El alumnado ya sabe qué es una IA (d2-2) y que puede hacer imágenes y voces (d3-3). Ahora aprende a hablar con ella: una buena instrucción (prompt) tiene contexto, tarea y forma; si la respuesta no sirve, se pide más; y todo lo que responde se revisa (¿es verdad?, ¿lo entiendo?, ¿es mío?), porque una IA puede decir errores con mucha seguridad e incluso inventarse fuentes. También se habla de las edades mínimas y el permiso de la familia, y de cuándo es mejor preguntar a una persona. Toda la práctica es con AjudaBot, una IA simulada dentro de la app.",
      claus: [
        "Una bona instrucció té context, tasca i forma, i cap dada personal.|Una buena instrucción tiene contexto, tarea y forma, y ningún dato personal.",
        "La primera resposta no és l'última: se'n pot demanar més («més fàcil», «un exemple»).|La primera respuesta no es la última: se puede pedir más («más fácil», «un ejemplo»).",
        "Una IA pot equivocar-se i sonar segura, i inventar-se fonts: les dades importants es comproven; el treball s'escriu amb paraules pròpies i es diu que t'ha ajudat.|Una IA puede equivocarse y sonar segura, e inventarse fuentes: los datos importantes se comprueban; el trabajo se escribe con palabras propias y se dice que te ha ayudado.",
        "Molts xats d'IA són per a 13 o 14 anys o més i amb permís de la família; una IA no és una amiga: les emocions i els problemes, amb persones.|Muchos chats de IA son para 13 o 14 años o más y con permiso de la familia; una IA no es una amiga: las emociones y los problemas, con personas."
      ],
      prev: [
        "Sessió d2-2: què és una IA, com aprèn i per què s'equivoca.|Sesión d2-2: qué es una IA, cómo aprende y por qué se equivoca.",
        "Sessió d3-3: buscar amb cap, autoria i fonts.|Sesión d3-3: buscar con cabeza, autoría y fuentes."
      ],
      obj: [
        "L'alumne/a escriu instruccions clares amb context, tasca i forma, sense dades personals.|El alumno/a escribe instrucciones claras con contexto, tarea y forma, sin datos personales.",
        "L'alumne/a demana millores a una resposta i la revisa amb tres preguntes.|El alumno/a pide mejoras a una respuesta y la revisa con tres preguntas.",
        "L'alumne/a detecta errors dits amb seguretat i fonts inventades, i sap comprovar-los.|El alumno/a detecta errores dichos con seguridad y fuentes inventadas, y sabe comprobarlos.",
        "L'alumne/a distingeix què pot preguntar a una IA (amb permís) i què és millor parlar amb una persona.|El alumno/a distingue qué puede preguntar a una IA (con permiso) y qué es mejor hablar con una persona."
      ],
      comp: [
        "Competència digital (CD2): cerca i avaluació crítica de la informació|Competencia digital (CD2): búsqueda y evaluación crítica de la información",
        "Competència digital (CD4): ús segur i responsable de la IA|Competencia digital (CD4): uso seguro y responsable de la IA",
        "Competència en comunicació lingüística: formular preguntes clares|Competencia en comunicación lingüística: formular preguntas claras"
      ],
      vocab: [
        ["Instrucció (prompt)|Instrucción (prompt)", "El que escrius a una IA perquè faci una cosa.|Lo que escribes a una IA para que haga algo."],
        ["Context|Contexto", "Per a què i per a qui és el que demanes.|Para qué y para quién es lo que pides."],
        ["Tasca|Tarea", "El que vols que faci la IA: explicar, donar idees, fer preguntes…|Lo que quieres que haga la IA: explicar, dar ideas, hacer preguntas…"],
        ["Forma|Forma", "Com vols la resposta: llargada, llista, exemple, nivell.|Cómo quieres la respuesta: longitud, lista, ejemplo, nivel."],
        ["Font inventada|Fuente inventada", "Un llibre, una web o un autor que la IA cita però que no existeix.|Un libro, una web o un autor que la IA cita pero que no existe."],
        ["Edat mínima|Edad mínima", "L'edat que demana un servei per fer-lo servir.|La edad que pide un servicio para usarlo."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Com es parla amb una IA»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Cómo se habla con una IA»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Les targetes d'instruccions (un paquet per parella), fulls en blanc i colors|Las tarjetas de instrucciones (un paquete por pareja), hojas en blanco y colores"
        ],
        imprimir: ["La IA humana: instruccions vagues i clares (imprimible 1): un paquet per parella|La IA humana: instrucciones vagas y claras (imprimible 1): un paquete por pareja", "La meva instrucció (imprimible 2): una per alumne/a|Mi instrucción (imprimible 2): una por alumno/a"],
        prep: [
          "Imprimir i retallar les targetes d'instruccions: la «IA» de cada parella només pot llegir la targeta.|Imprimir y recortar las tarjetas de instrucciones: la «IA» de cada pareja solo puede leer la tarjeta.",
          "Revisar les normes del centre sobre l'ús d'IA i saber-les explicar en una frase.|Revisar las normas del centro sobre el uso de IA y saber explicarlas en una frase.",
          "No demanar a l'alumnat que obri cap servei d'IA real: tota la pràctica és amb l'AjudaBot simulat.|No pedir al alumnado que abra ningún servicio de IA real: toda la práctica es con AjudaBot simulado."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: l'AjudaBot no m'entén!|Bienvenida: ¡AjudaBot no me entiende!", fase: 'inici',
          fa: "Presenta la unitat 5. Explica la història d'en Bit, que va escriure només «volcans». Pregunta què recorden de la IA de la unitat 2 i què creuen que ha fallat.|Presenta la unidad 5. Explica la historia de Bit, que escribió solo «volcanes». Pregunta qué recuerdan de la IA de la unidad 2 y qué creen que ha fallado.",
          diu: ["Com aprèn una IA? (D'exemples.) I per què s'equivoca?|¿Cómo aprende una IA? (De ejemplos.) ¿Y por qué se equivoca?",
            "Si a un amic li dius només «volcans», què entén?|Si a un amigo le dices solo «volcanes», ¿qué entiende?",
            "Avui aprendrem a demanar bé i a revisar el que ens diuen.|Hoy aprenderemos a pedir bien y a revisar lo que nos dicen."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Instruccions, errors segurs i revisar|Instrucciones, errores seguros y revisar", fase: 'teoria',
          fa: "Amb l'animació de la instrucció vaga i la clara, presenta les tres peces (context, tasca i forma). Projecta l'AjudaBot que diu que l'Aneto és la muntanya més alta del món i cita un llibre: deixa que trobin l'error. Acaba amb les tres preguntes de revisar i la targeta d'edats i persones.|Con la animación de la instrucción vaga y la clara, presenta las tres piezas (contexto, tarea y forma). Proyecta a AjudaBot diciendo que el Aneto es la montaña más alta del mundo y citando un libro: deja que encuentren el error. Termina con las tres preguntas de revisar y la tarjeta de edades y personas.",
          diu: ["Quin context, quina tasca i quina forma té aquesta instrucció?|¿Qué contexto, qué tarea y qué forma tiene esta instrucción?",
            "L'AjudaBot cita un llibre: vol dir que és veritat? Com ho comprovaríeu?|AjudaBot cita un libro: ¿quiere decir que es verdad? ¿Cómo lo comprobaríais?",
            "Per què una IA no és una amiga, encara que sigui molt amable?|¿Por qué una IA no es una amiga, aunque sea muy amable?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "La IA humana|La IA humana", fase: 'desconnectat',
          fa: "En parelles: una persona fa d'«IA» i només pot fer exactament el que diu la targeta. Primer, una instrucció vaga («Dibuixa un animal»); després, la clara de la mateixa parella de targetes. Canvien els papers. Al final, comparen dibuixos i escriuen a la fitxa una instrucció pròpia amb les tres peces.|En parejas: una persona hace de «IA» y solo puede hacer exactamente lo que dice la tarjeta. Primero, una instrucción vaga («Dibuja un animal»); después, la clara de la misma pareja de tarjetas. Cambian los papeles. Al final, comparan dibujos y escriben en la ficha una instrucción propia con las tres piezas.",
          diu: ["Quina instrucció ha donat un dibuix més semblant al que pensàveu?|¿Qué instrucción ha dado un dibujo más parecido al que pensabais?",
            "La «IA» podia endevinar el que no estava escrit?|¿La «IA» podía adivinar lo que no estaba escrito?",
            "Quines peces té la vostra instrucció?|¿Qué piezas tiene vuestra instrucción?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: la pregunta de repàs, la història, les cinc targetes, classificar instruccions, la conversa de les abelles, el llibre inventat dels planetes i l'ordre per fer-la servir bé. Pausa activa tots junts.|Cada alumno/a hace la sesión hasta la pausa activa: la pregunta de repaso, la historia, las cinco tarjetas, clasificar instrucciones, la conversación de las abejas, el libro inventado de los planetas y el orden para usarla bien. Pausa activa todos juntos.",
          diu: ["Quina frase de les abelles era falsa? Com ho heu sabut?|¿Qué frase de las abejas era falsa? ¿Cómo lo habéis sabido?",
            "Què passa si demanes a la IA que faci el treball per tu?|¿Qué pasa si pides a la IA que haga el trabajo por ti?",
            "Ara, tots: robots que només fan instruccions clares!|Ahora, todos: ¡robots que solo hacen instrucciones claras!"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 10, t: "Reptes i la meva fitxa|Retos y mi ficha", fase: 'ordinador',
          fa: "Continuen amb els reptes: els quatre problemes de la conversa de la Jana, per què la IA s'inventa coses, IA o persona i com demanar una explicació més fàcil. Després fan la seva fitxa per parlar amb una IA.|Siguen con los retos: los cuatro problemas de la conversación de Jana, por qué la IA se inventa cosas, IA o persona y cómo pedir una explicación más fácil. Después hacen su ficha para hablar con una IA.",
          diu: ["Quins quatre problemes tenia la conversa de la Jana?|¿Qué cuatro problemas tenía la conversación de Jana?",
            "Per què les emocions i la salut, millor amb persones?|¿Por qué las emociones y la salud, mejor con personas?",
            "Quina peça de la fitxa us costa més?|¿Qué pieza de la ficha os cuesta más?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: la meva fitxa per parlar amb una IA (i «La IA humana», per a casa).|«Retos» y el paso «Crea»: mi ficha para hablar con una IA (y «La IA humana», para casa).", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu les idees clau. Tiquet de sortida: cada alumne/a diu una instrucció clara. Preguntes finals i com s'han sentit. Recorda que, fora de classe, els xats d'IA es fan servir amb permís de la família i segons l'edat del servei.|Repasad las ideas clave. Ticket de salida: cada alumno/a dice una instrucción clara. Preguntas finales y cómo se han sentido. Recuerda que, fuera de clase, los chats de IA se usan con permiso de la familia y según la edad del servicio.",
          diu: ["Digueu una instrucció amb context, tasca i forma.|Decid una instrucción con contexto, tarea y forma.",
            "Què feu si la IA respon molt segura?|¿Qué hacéis si la IA responde muy segura?",
            "Amb qui parleu de les coses que us preocupen?|¿Con quién habláis de las cosas que os preocupan?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Escriu instruccions d'una sola paraula.|Escribe instrucciones de una sola palabra.",
          "Recorda les tres peces: per a què és, què vols i com ho vols. Fes-li completar «Per a… explica… en…».|Recuerda las tres piezas: para qué es, qué quieres y cómo lo quieres. Hazle completar «Para… explica… en…»."],
        ["Posa el seu nom o l'escola «perquè l'ajudi millor».|Pone su nombre o el colegio «para que le ayude mejor».",
          "La IA no ho necessita. El context és el curs o el tema, no qui ets.|La IA no lo necesita. El contexto es el curso o el tema, no quién eres."],
        ["Creu que si la IA cita un llibre, la dada és certa.|Cree que si la IA cita un libro, el dato es cierto.",
          "Una IA es pot inventar el títol. Cal comprovar la dada i que el llibre existeixi.|Una IA se puede inventar el título. Hay que comprobar el dato y que el libro exista."],
        ["Pensa que fer servir la IA és fer trampa sempre.|Piensa que usar la IA es hacer trampa siempre.",
          "Depèn de com: per entendre, tenir idees o repassar pot ajudar. El que no és honest és fer-la passar per feina pròpia.|Depende de cómo: para entender, tener ideas o repasar puede ayudar. Lo que no es honesto es hacerla pasar por trabajo propio."],
        ["Parla amb la IA com si fos una amiga i li explica coses personals.|Habla con la IA como si fuera una amiga y le cuenta cosas personales.",
          "Una IA no et coneix ni guarda secrets. Les coses importants, amb persones de confiança.|Una IA no te conoce ni guarda secretos. Las cosas importantes, con personas de confianza."]
      ],
      diff: {
        mes: "Per anar més enllà: escriure tres versions d'una instrucció (vaga, millor i molt bona) per al mateix tema i explicar què canvia; o inventar una resposta de la IA amb un error amagat perquè un company el trobi.|Para ir más allá: escribir tres versiones de una instrucción (vaga, mejor y muy buena) para el mismo tema y explicar qué cambia; o inventar una respuesta de la IA con un error escondido para que un compañero lo encuentre.",
        menys: "Donar la plantilla «Per a ___, explica ___ en ___» per completar. A l'app, fer en parella la conversa de les abelles i la de la Jana.|Dar la plantilla «Para ___, explica ___ en ___» para completar. En la app, hacer en pareja la conversación de las abejas y la de Jana."
      },
      aval: {
        ticket: ["Digues una instrucció amb context, tasca i forma.|Di una instrucción con contexto, tarea y forma.",
          "Digues què faries si una IA et dona una dada molt segura.|Di qué harías si una IA te da un dato muy seguro."],
        rubric: [
          ["Escriure instruccions|Escribir instrucciones", "Escriu instruccions amb context, tasca i forma, sense dades personals.|Escribe instrucciones con contexto, tarea y forma, sin datos personales.", "Les instruccions són vagues o porten dades personals.|Las instrucciones son vagas o llevan datos personales."],
          ["Revisar i comprovar|Revisar y comprobar", "Demana millores i comprova dades i fonts abans de fer-les servir.|Pide mejoras y comprueba datos y fuentes antes de usarlos.", "Accepta la primera resposta sense revisar-la.|Acepta la primera respuesta sin revisarla."],
          ["Ús responsable|Uso responsable", "Distingeix què preguntar a una IA i què a una persona, i coneix les edats i el permís.|Distingue qué preguntar a una IA y qué a una persona, y conoce las edades y el permiso.", "Ho barreja o no ho té en compte.|Lo mezcla o no lo tiene en cuenta."]
        ]
      },
      casa: "A casa, podeu fer «La IA humana»: una persona fa d'IA i només pot fer el que diu una instrucció escrita; proveu una instrucció vaga i una de clara per fer un dibuix o una recepta senzilla. Si a casa feu servir algun assistent o xat d'IA, mireu junts quina edat demana i parleu de les normes: amb un adult, sense dades personals, comprovant el que diu i dient quan us ha ajudat.|En casa, podéis hacer «La IA humana»: una persona hace de IA y solo puede hacer lo que dice una instrucción escrita; probad una instrucción vaga y una clara para hacer un dibujo o una receta sencilla. Si en casa usáis algún asistente o chat de IA, mirad juntos qué edad pide y hablad de las normas: con un adulto, sin datos personales, comprobando lo que dice y diciendo cuándo os ha ayudado.",
      faq: [
        ["A quina edat es poden fer servir els xats d'IA?|¿A qué edad se pueden usar los chats de IA?", "Depèn del servei: molts demanen 13 o 14 anys o més i, per als menors d'edat, permís de la família. Cal mirar les condicions de cada un. Per això a classe practiquem amb simulacions.|Depende del servicio: muchos piden 13 o 14 años o más y, para los menores de edad, permiso de la familia. Hay que mirar las condiciones de cada uno. Por eso en clase practicamos con simulaciones."],
        ["Puc ensenyar una IA de veritat a classe?|¿Puedo enseñar una IA de verdad en clase?", "Si les normes del centre ho permeten, pots fer una demostració des del teu compte, projectant i sense dades de l'alumnat. És una bona manera de mostrar que també s'equivoca.|Si las normas del centro lo permiten, puedes hacer una demostración desde tu cuenta, proyectando y sin datos del alumnado. Es una buena manera de mostrar que también se equivoca."],
        ["Per què la IA s'inventa fonts?|¿Por qué la IA se inventa fuentes?", "Perquè genera text que «sembla» correcte a partir del que ha après; un títol de llibre versemblant pot no existir. Alguns serveis busquen a internet i citen webs reals, però igualment cal comprovar-les.|Porque genera texto que «parece» correcto a partir de lo que ha aprendido; un título de libro verosímil puede no existir. Algunos servicios buscan en internet y citan webs reales, pero igualmente hay que comprobarlas."],
        ["Si fan servir la IA per als deures, és trampa?|Si usan la IA para los deberes, ¿es trampa?", "Depèn de les normes de l'escola i de com la facin servir. Explicar, donar idees o repassar pot ajudar; entregar com a propi un text fet per una IA no és honest.|Depende de las normas del colegio y de cómo la usen. Explicar, dar ideas o repasar puede ayudar; entregar como propio un texto hecho por una IA no es honesto."]
      ],
      tec: [
        ["A la conversa de les abelles volen tornar enrere.|En la conversación de las abejas quieren volver atrás.", "Poden tornar al pas amb la fletxa: tots els camins acaben a la mateixa idea (instrucció clara, comprovar i escriure-ho tu).|Pueden volver al paso con la flecha: todos los caminos terminan en la misma idea (instrucción clara, comprobar y escribirlo tú)."],
        ["Pregunten si l'AjudaBot és una IA de veritat.|Preguntan si AjudaBot es una IA de verdad.", "No: és una simulació amb respostes escrites per l'equip de Numi. No es connecta a cap servei ni desa res del que trien.|No: es una simulación con respuestas escritas por el equipo de Numi. No se conecta a ningún servicio ni guarda nada de lo que eligen."],
        ["A la conversa de la Jana no troben el quart problema.|En la conversación de Jana no encuentran el cuarto problema.", "Que llegeixin també els missatges de la IA: «Soc la teva millor amiga» és un dels problemes.|Que lean también los mensajes de la IA: «Soy tu mejor amiga» es uno de los problemas."]
      ],
      seg: [
        "No demanis mai a l'alumnat que obri o es registri en serveis d'IA reals.|No pidas nunca al alumnado que abra o se registre en servicios de IA reales.",
        "Si algun infant explica que parla molt amb un xat d'IA com si fos un amic, escolta'l sense jutjar i parla-ho amb la família: les relacions de veritat són amb persones.|Si algún niño o niña cuenta que habla mucho con un chat de IA como si fuera un amigo, escúchale sin juzgar y háblalo con la familia: las relaciones de verdad son con personas.",
        "Si una conversa amb una IA ha fet sentir malament algú, recorda la norma d'or: explicar-ho a un adult de confiança.|Si una conversación con una IA ha hecho sentir mal a alguien, recuerda la norma de oro: contarlo a un adulto de confianza."
      ],
      extra: [
        "Llengua: reescriure instruccions vagues de la vida diària (receptes, instruccions de muntatge) perquè siguin clares.|Lengua: reescribir instrucciones vagas de la vida diaria (recetas, instrucciones de montaje) para que sean claras.",
        "Ciències: comprovar en llibres de la biblioteca tres dades que donaria una IA sobre un animal.|Ciencias: comprobar en libros de la biblioteca tres datos que daría una IA sobre un animal.",
        "Per als grans: debat «La IA, ajuda o drecera?»: quan ens fa aprendre i quan ens estalvia aprendre.|Para los mayores: debate «La IA, ¿ayuda o atajo?»: cuándo nos hace aprender y cuándo nos ahorra aprender."
      ],
      trans: [
        "Sessió d2-2: què és una IA i per què s'equivoca. Aquí, com parlar-hi i revisar el que diu.|Sesión d2-2: qué es una IA y por qué se equivoca. Aquí, cómo hablar con ella y revisar lo que dice.",
        "Sessió d5-2: les imatges falses i com verificar-les. Sessió d5-4: les normes d'avui seran el capítol «Preguntar bé» del manual.|Sesión d5-2: las imágenes falsas y cómo verificarlas. Sesión d5-4: las normas de hoy serán el capítulo «Preguntar bien» del manual.",
        "Llengua (preguntes i instruccions), ciències (comprovar dades) i tutoria (honestedat).|Lengua (preguntas e instrucciones), ciencias (comprobar datos) y tutoría (honestidad)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Com es parla amb una IA|Cómo se habla con una IA", x: "Preguntar bé, revisar el que diu i saber quan preguntar a una persona.|Preguntar bien, revisar lo que dice y saber cuándo preguntar a una persona.",
          nota: "Presenta la unitat 5: la IA a fons. Recorda que a classe treballem amb simulacions.|Presenta la unidad 5: la IA a fondo. Recuerda que en clase trabajamos con simulaciones." },
        { id: 's2', k: 'pregunta', t: "L'AjudaBot no m'entén!|¡AjudaBot no me entiende!", punts: ["En Bit escriu: «volcans».|Bit escribe: «volcanes».", "Rep un text llarguíssim i difícil.|Recibe un texto larguísimo y difícil.", "Què ha fallat?|¿Qué ha fallado?"],
          nota: "Recull idees: la instrucció no deia per a què ni com.|Recoge ideas: la instrucción no decía para qué ni cómo." },
        { id: 's3', k: 'anim', t: "Vaga o clara?|¿Vaga o clara?", anim: 'd5prompt', x: "La IA només sap el que li escrius.|La IA solo sabe lo que le escribes.",
          nota: "Fes que llegeixin en veu alta la instrucció clara.|Haz que lean en voz alta la instrucción clara." },
        { id: 's4', k: 'anim', t: "Les tres peces|Las tres piezas", anim: 'd5peces', x: "Context, tasca i forma. I sense dades personals.|Contexto, tarea y forma. Y sin datos personales.",
          nota: "Practiqueu-ho amb un tema de classe: «Per a 5è, explica… en…».|Practicadlo con un tema de clase: «Para 5.º, explica… en…»." },
        { id: 's5', k: 'media', t: "Segur… i equivocat|Seguro… y equivocado", x: "Quina dada és falsa? I el llibre, existeix?|¿Qué dato es falso? ¿Y el libro, existe?", media: BOT,
          nota: "L'Aneto fa uns 3.400 m; la més alta és l'Everest. El llibre pot ser inventat.|El Aneto mide unos 3.400 m; la más alta es el Everest. El libro puede ser inventado." },
        { id: 's6', k: 'anim', t: "Demana més i revisa|Pide más y revisa", anim: 'd5revisa', x: "És veritat? Ho entenc? És meu?|¿Es verdad? ¿Lo entiendo? ¿Es mío?",
          nota: "Insisteix en la tercera pregunta: escriure-ho amb paraules pròpies i dir que t'ha ajudat.|Insiste en la tercera pregunta: escribirlo con palabras propias y decir que te ha ayudado." },
        { id: 's7', k: 'concepte', t: "Amb qui?|¿Con quién?", pic: 'img/ment/atu.webp',
          punts: ["Molts xats d'IA: 13 o 14 anys o més.|Muchos chats de IA: 13 o 14 años o más.", "Amb permís de la família.|Con permiso de la familia.", "Les emocions i els problemes, amb persones.|Las emociones y los problemas, con personas."],
          nota: "Sense jutjar cap família: és informació per decidir junts.|Sin juzgar a ninguna familia: es información para decidir juntos." },
        { id: 's8', k: 'activitat', t: "La IA humana|La IA humana", timer: 12,
          punts: ["Una persona fa d'IA: només fa el que diu la targeta.|Una persona hace de IA: solo hace lo que dice la tarjeta.", "Primer, la vaga; després, la clara.|Primero, la vaga; después, la clara.", "Compareu els dibuixos i canvieu.|Comparad los dibujos y cambiad."],
          nota: "Que la «IA» no pregunti res: només pot llegir.|Que la «IA» no pregunte nada: solo puede leer." },
        { id: 's9', k: 'concepte', t: "Per a… explica… en…|Para… explica… en…", pic: 'img/ment/lli.webp',
          punts: ["Per a qui o per a què és.|Para quién o para qué es.", "Què ha de fer.|Qué tiene que hacer.", "Com ho vols.|Cómo lo quieres."],
          nota: "Deixa-la projectada mentre escriuen la seva instrucció.|Déjala proyectada mientras escriben su instrucción." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Com es parla amb una IA».|Abre la sesión «Cómo se habla con una IA».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "Recorda: l'AjudaBot és una simulació.|Recuerda: AjudaBot es una simulación."],
          nota: "Avisa quan arribin a la pausa activa.|Avisa cuando lleguen a la pausa activa." },
        { id: 's11', k: 'media', t: "Repte: quatre problemes|Reto: cuatro problemas", x: "Què no s'ha de fer amb una IA?|¿Qué no se debe hacer con una IA?", media: JANA,
          nota: "Copiar el treball i fer-la servir com a amiga són dos dels quatre problemes.|Copiar el trabajo y usarla como amiga son dos de los cuatro problemas." },
        { id: 's12', k: 'activitat', t: "Crea: la meva fitxa|Crea: mi ficha", timer: 2,
          punts: ["Context, tasca, forma i revisar.|Contexto, tarea, forma y revisar.", "Desa la teva fitxa.|Guarda tu ficha.", "A casa: la IA humana.|En casa: la IA humana."],
          nota: "Que llegeixin la seva instrucció preferida.|Que lean su instrucción preferida." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Context, tasca i forma, sense dades personals.|Contexto, tarea y forma, sin datos personales.", "Es pot demanar més: més fàcil, un exemple.|Se puede pedir más: más fácil, un ejemplo.", "Les dades i les fonts es comproven.|Los datos y las fuentes se comprueban.", "Edats, permís i persones de confiança.|Edades, permiso y personas de confianza."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues una instrucció clara.|Di una instrucción clara.", "Què fas si la IA respon molt segura?|¿Qué haces si la IA responde muy segura?"],
          nota: "Pot ser oral, per torns.|Puede ser oral, por turnos." },
        { id: 's15', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["La IA humana, en família.|La IA humana, en familia.", "Si feu servir una IA: quina edat demana?|Si usáis una IA: ¿qué edad pide?", "Normes: amb un adult i sense dades.|Normas: con un adulto y sin datos."],
          nota: "És una proposta: cada família decideix.|Es una propuesta: cada familia decide." }
      ],
      print: [
        { id: 'p1', t: "La IA humana: instruccions|La IA humana: instrucciones", k: 'targetes',
          intro: "Un paquet per parella. Cada parella de targetes té una instrucció vaga i una de clara per al mateix dibuix. La «IA» només pot fer el que diu la targeta.|Un paquete por pareja. Cada pareja de tarjetas tiene una instrucción vaga y una clara para el mismo dibujo. La «IA» solo puede hacer lo que dice la tarjeta.",
          items: [
            { t: "Vaga: «Dibuixa un animal»|Vaga: «Dibuja un animal»", n: 1 },
            { t: "Clara: «Dibuixa un gat taronja assegut, de costat, amb la cua llarga»|Clara: «Dibuja un gato naranja sentado, de lado, con la cola larga»", n: 1 },
            { t: "Vaga: «Dibuixa una casa»|Vaga: «Dibuja una casa»", n: 1 },
            { t: "Clara: «Dibuixa una casa petita, amb la porta vermella al mig i dues finestres a dalt»|Clara: «Dibuja una casa pequeña, con la puerta roja en medio y dos ventanas arriba»", n: 1 },
            { t: "Vaga: «Dibuixa el temps»|Vaga: «Dibuja el tiempo»", n: 1 },
            { t: "Clara: «Dibuixa un sol a l'esquerra i tres núvols grisos a la dreta, amb pluja»|Clara: «Dibuja un sol a la izquierda y tres nubes grises a la derecha, con lluvia»", n: 1 },
            { t: "Vaga: «Fes un robot»|Vaga: «Haz un robot»", n: 1 },
            { t: "Clara: «Dibuixa un robot quadrat, amb dues antenes i un cor al pit»|Clara: «Dibuja un robot cuadrado, con dos antenas y un corazón en el pecho»", n: 1 }
          ] },
        { id: 'p2', t: "La meva instrucció|Mi instrucción", k: 'fitxa',
          intro: "Escriu una instrucció per a una IA amb les tres peces i revisa-la.|Escribe una instrucción para una IA con las tres piezas y revísala.",
          items: [
            { q: "🧭 Context (per a què o per a qui és):|🧭 Contexto (para qué o para quién es):", sol: "Per exemple: «Per a un treball de 5è sobre els rius».|Por ejemplo: «Para un trabajo de 5.º sobre los ríos»." },
            { q: "🎯 Tasca (què ha de fer):|🎯 Tarea (qué tiene que hacer):", sol: "Per exemple: «Explica com es forma un riu».|Por ejemplo: «Explica cómo se forma un río»." },
            { q: "📏 Forma (com ho vull):|📏 Forma (cómo lo quiero):", sol: "Per exemple: «En 5 frases fàcils i amb un exemple».|Por ejemplo: «En 5 frases fáciles y con un ejemplo»." },
            { q: "🔒 He tret les dades personals? Sí / No|🔒 ¿He quitado los datos personales? Sí / No", sol: "Sí: cap nom, adreça ni escola.|Sí: ningún nombre, dirección ni colegio." },
            { q: "✅ Com revisaré la resposta?|✅ ¿Cómo revisaré la respuesta?", sol: "És veritat? (ho comprovo) · Ho entenc? (si no, pregunto) · És meu? (amb les meves paraules i dic que m'ha ajudat).|¿Es verdad? (lo compruebo) · ¿Lo entiendo? (si no, pregunto) · ¿Es mío? (con mis palabras y digo que me ha ayudado)." }
          ] }
      ]
    },

    /* ---------- Sessió 2 · Imatges falses i deepfakes ---------- */
    'd5-2': {
      intro: "Segona sessió de la unitat 5. A la unitat 3 (d3-3), l'alumnat ja va veure que una IA pot fer imatges, veus i vídeos falsos, i algunes pistes visuals. Ara fa un pas més: distingeix quatre menes d'imatges (real, retocada, fora de context i feta amb IA), entén com els filtres de bellesa ens fan comparar-nos amb coses que no són reals, i practica la verificació com ho fan els professionals: qui la publica, on és l'original, quan i on es va fer i qui més ho explica. També coneix les etiquetes «Fet amb IA» i treballa el respecte: mai no es fan falsos de persones reals i, si te'n fan un, no és culpa teva.|Segunda sesión de la unidad 5. En la unidad 3 (d3-3), el alumnado ya vio que una IA puede hacer imágenes, voces y vídeos falsos, y algunas pistas visuales. Ahora da un paso más: distingue cuatro tipos de imágenes (real, retocada, fuera de contexto y hecha con IA), entiende cómo los filtros de belleza nos hacen compararnos con cosas que no son reales, y practica la verificación como lo hacen los profesionales: quién la publica, dónde está el original, cuándo y dónde se hizo y quién más lo cuenta. También conoce las etiquetas «Hecho con IA» y trabaja el respeto: nunca se hacen falsos de personas reales y, si te hacen uno, no es culpa tuya.",
      claus: [
        "Quatre menes d'imatges: real, retocada (filtres, retalls), fora de context (real però d'un altre lloc o moment) i feta amb IA.|Cuatro tipos de imágenes: real, retocada (filtros, recortes), fuera de contexto (real pero de otro lugar o momento) y hecha con IA.",
        "Verificar és sortir a buscar: qui la publica, l'original, quan i on, i altres fonts fiables. Si no és clar, no es comparteix.|Verificar es salir a buscar: quién la publica, el original, cuándo y dónde, y otras fuentes fiables. Si no está claro, no se comparte.",
        "Les etiquetes «Fet amb IA» ajuden, però no totes les imatges en porten.|Las etiquetas «Hecho con IA» ayudan, pero no todas las imágenes las llevan.",
        "Respecte: mai falsos de persones reals. Si te'n fan un: no és culpa teva, no es comparteix, es guarda una captura i s'explica a un adult.|Respeto: nunca falsos de personas reales. Si te hacen uno: no es culpa tuya, no se comparte, se guarda una captura y se cuenta a un adulto."
      ],
      prev: [
        "Sessió d2-1: les tres preguntes del caçador de bulos i les fotos fora de context.|Sesión d2-1: las tres preguntas del cazador de bulos y las fotos fuera de contexto.",
        "Sessió d3-3: imatges i veus fetes amb IA, vídeos falsificats i autoria.|Sesión d3-3: imágenes y voces hechas con IA, vídeos falsificados y autoría."
      ],
      obj: [
        "L'alumne/a classifica imatges en retocades, fora de context o fetes amb IA.|El alumno/a clasifica imágenes en retocadas, fuera de contexto o hechas con IA.",
        "L'alumne/a aplica els passos de verificar a una imatge sorprenent.|El alumno/a aplica los pasos de verificar a una imagen sorprendente.",
        "L'alumne/a explica per què comparar-se amb fotos retocades no és just amb un mateix.|El alumno/a explica por qué compararse con fotos retocadas no es justo con uno mismo.",
        "L'alumne/a distingeix usos creatius i respectuosos de la IA d'usos que fan mal, i sap què fer si li passa.|El alumno/a distingue usos creativos y respetuosos de la IA de usos que hacen daño, y sabe qué hacer si le pasa."
      ],
      comp: [
        "Competència digital (CD2): avaluació crítica d'imatges i fonts|Competencia digital (CD2): evaluación crítica de imágenes y fuentes",
        "Competència digital (CD4): benestar i respecte a la xarxa|Competencia digital (CD4): bienestar y respeto en la red",
        "Competència ciutadana: dret a la pròpia imatge i convivència|Competencia ciudadana: derecho a la propia imagen y convivencia"
      ],
      vocab: [
        ["Retocada|Retocada", "Imatge canviada amb filtres o programes.|Imagen cambiada con filtros o programas."],
        ["Fora de context|Fuera de contexto", "Imatge real presentada com si fos d'un altre lloc o moment.|Imagen real presentada como si fuera de otro lugar o momento."],
        ["Deepfake (ultrafals)|Deepfake (ultrafalso)", "Vídeo o àudio fet amb IA que imita una persona real.|Vídeo o audio hecho con IA que imita a una persona real."],
        ["Verificar|Verificar", "Comprovar d'on ve una informació abans de creure-la.|Comprobar de dónde viene una información antes de creerla."],
        ["Original|Original", "La primera vegada que es va publicar una imatge.|La primera vez que se publicó una imagen."],
        ["Etiqueta «Fet amb IA»|Etiqueta «Hecho con IA»", "Avís que diu que una imatge s'ha creat amb IA.|Aviso que dice que una imagen se ha creado con IA."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Imatges falses i deepfakes»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Imágenes falsas y deepfakes»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Les targetes d'imatges i les de pistes (un paquet per grup de 4)|Las tarjetas de imágenes y las de pistas (un paquete por grupo de 4)"
        ],
        imprimir: ["Taller de verificadors (imprimible 1): un paquet per grup|Taller de verificadores (imprimible 1): un paquete por grupo"],
        prep: [
          "Imprimir i retallar les targetes: cada «imatge» va acompanyada d'una targeta de pistes de verificació.|Imprimir y recortar las tarjetas: cada «imagen» va acompañada de una tarjeta de pistas de verificación.",
          "No fer servir mai fotos d'alumnes, famílies ni docents com a exemple de retoc o d'imatge falsa.|No usar nunca fotos de alumnos, familias ni docentes como ejemplo de retoque o de imagen falsa.",
          "Tenir present que el tema dels filtres i el cos pot ser sensible: parlar-ne en general, sense referir-se a ningú.|Tener presente que el tema de los filtros y el cuerpo puede ser sensible: hablar en general, sin referirse a nadie."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: la foto del pont|Bienvenida: la foto del puente", fase: 'inici',
          fa: "Explica la història de la foto del pont trencat. Pregunta què recorden del tauró de la unitat 3 i quines tres explicacions hi pot haver: que sigui d'avui, que sigui d'un altre lloc o que estigui feta amb IA.|Explica la historia de la foto del puente roto. Pregunta qué recuerdan del tiburón de la unidad 3 y qué tres explicaciones puede haber: que sea de hoy, que sea de otro lugar o que esté hecha con IA.",
          diu: ["Quina era la pista més forta amb el tauró? (La font.)|¿Cuál era la pista más fuerte con el tiburón? (La fuente.)",
            "Una foto real pot enganyar? Com?|¿Una foto real puede engañar? ¿Cómo?",
            "Avui farem de verificadors.|Hoy haremos de verificadores."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Quatre menes, filtres, verificar i respecte|Cuatro tipos, filtros, verificar y respeto", fase: 'teoria',
          fa: "Amb l'animació de les quatre menes, posa un exemple de cada. Amb la del filtre, parla de les fotos retocades sense referir-te a ningú. Explica els quatre passos dels verificadors, mostra la foto del pont i l'etiqueta «Fet amb IA», i acaba amb el respecte i què fer si et fan un fals.|Con la animación de los cuatro tipos, pon un ejemplo de cada uno. Con la del filtro, habla de las fotos retocadas sin referirte a nadie. Explica los cuatro pasos de los verificadores, muestra la foto del puente y la etiqueta «Hecho con IA», y termina con el respeto y qué hacer si te hacen un falso.",
          diu: ["Una foto amb filtre és mentida? (No sempre; però no és la realitat.)|¿Una foto con filtro es mentira? (No siempre; pero no es la realidad.)",
            "Quines pistes de la foto del pont us fan sospitar?|¿Qué pistas de la foto del puente os hacen sospechar?",
            "Si una imatge no té etiqueta, vol dir que és real?|Si una imagen no tiene etiqueta, ¿quiere decir que es real?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Taller de verificadors|Taller de verificadores", fase: 'desconnectat',
          fa: "En grups de 4, cada grup rep targetes d'«imatges» (descrites amb paraules) i, a part, les targetes de pistes (qui la publica, data, lloc, què diuen altres fonts). Han de decidir de quina mena és cada imatge i si la compartirien, i escriure quina pista ho ha decidit. Posada en comú.|En grupos de 4, cada grupo recibe tarjetas de «imágenes» (descritas con palabras) y, aparte, las tarjetas de pistas (quién la publica, fecha, lugar, qué dicen otras fuentes). Deben decidir de qué tipo es cada imagen y si la compartirían, y escribir qué pista lo ha decidido. Puesta en común.",
          diu: ["Quina pista us ha fet canviar d'opinió?|¿Qué pista os ha hecho cambiar de opinión?",
            "Hi ha alguna imatge real que enganyi?|¿Hay alguna imagen real que engañe?",
            "Quina no compartiríeu mai, encara que fos certa? Per què?|¿Cuál no compartiríais nunca, aunque fuera cierta? ¿Por qué?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: la pregunta de repàs, la història, les cinc targetes, classificar imatges, la foto del pont, la pregunta de les etiquetes i la conversa del grup de casa. Pausa activa tots junts (les cares!).|Cada alumno/a hace la sesión hasta la pausa activa: la pregunta de repaso, la historia, las cinco tarjetas, clasificar imágenes, la foto del puente, la pregunta de las etiquetas y la conversación del grupo de casa. Pausa activa todos juntos (¡las caras!).",
          diu: ["Com heu convençut la tieta sense fer-la enfadar?|¿Cómo habéis convencido a la tía sin hacerla enfadar?",
            "On era l'original de la foto del pont?|¿Dónde estaba el original de la foto del puente?",
            "Ara, tots: cares de filtre… i la cara de veritat!|Ahora, todos: caras de filtro… ¡y la cara de verdad!"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 10, t: "Reptes i el meu protocol|Retos y mi protocolo", fase: 'ordinador',
          fa: "Continuen amb els reptes: crear amb IA respectant les persones, què fer si et fan una imatge falsa, la foto retocada de la cantant i el parc fora de context. Després trien el seu protocol de verificador.|Siguen con los retos: crear con IA respetando a las personas, qué hacer si te hacen una imagen falsa, la foto retocada de la cantante y el parque fuera de contexto. Después eligen su protocolo de verificador.",
          diu: ["Quina diferència hi ha entre un drac fet amb IA i la cara d'un company en un vídeo?|¿Qué diferencia hay entre un dragón hecho con IA y la cara de un compañero en un vídeo?",
            "Quines pistes deien que el parc era d'un altre país?|¿Qué pistas decían que el parque era de otro país?",
            "Quin pas del vostre protocol fareu servir més?|¿Qué paso de vuestro protocolo usaréis más?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: el meu protocol de verificador/a (i «El museu del real o no», per a casa).|«Retos» y el paso «Crea»: mi protocolo de verificador/a (y «El museo del real o no», para casa).", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu les idees clau. Tiquet de sortida, preguntes finals i com s'han sentit. Recorda que, si mai els passa que algú fa una imatge falsa seva, no és culpa seva i poden explicar-ho a qualsevol adult de confiança.|Repasad las ideas clave. Ticket de salida, preguntas finales y cómo se han sentido. Recuerda que, si alguna vez les pasa que alguien hace una imagen falsa suya, no es culpa suya y pueden contarlo a cualquier adulto de confianza.",
          diu: ["Digueu les quatre menes d'imatges.|Decid los cuatro tipos de imágenes.",
            "Quins són els passos per verificar?|¿Cuáles son los pasos para verificar?",
            "Què fareu si veieu un fals d'algú que coneixeu?|¿Qué haréis si veis un falso de alguien que conocéis?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que una imatge real no pot enganyar.|Piensa que una imagen real no puede engañar.",
          "Recorda la foto del pont: era real, però d'un altre país i d'un altre any. El context compta.|Recuerda la foto del puente: era real, pero de otro país y de otro año. El contexto cuenta."],
        ["Busca només pistes visuals (dits, lletres).|Busca solo pistas visuales (dedos, letras).",
          "Les IA milloren i deixen menys pistes. La prova més forta és la font i el context.|Las IA mejoran y dejan menos pistas. La prueba más fuerte es la fuente y el contexto."],
        ["Creu que sense etiqueta «Fet amb IA» la imatge és real.|Cree que sin etiqueta «Hecho con IA» la imagen es real.",
          "Moltes no en porten o se'ls ha tret. L'etiqueta ajuda quan hi és, però no prova res quan no hi és.|Muchas no la llevan o se la han quitado. La etiqueta ayuda cuando está, pero no prueba nada cuando no está."],
        ["Diu que un fals d'un company «només és una broma».|Dice que un falso de un compañero «solo es una broma».",
          "Pregunta com se sentiria si fos la seva cara. Fa mal, encara que sigui de broma, i no està permès.|Pregunta cómo se sentiría si fuera su cara. Hace daño, aunque sea de broma, y no está permitido."],
        ["Es compara amb fotos retocades i se sent malament.|Se compara con fotos retocadas y se siente mal.",
          "Recorda que moltes fotos estan retocades i que les cares i els cossos de veritat són diversos. Si li passa sovint, parla-ho amb la família.|Recuerda que muchas fotos están retocadas y que las caras y los cuerpos de verdad son diversos. Si le pasa a menudo, háblalo con la familia."]
      ],
      diff: {
        mes: "Per anar més enllà: buscar amb un adult, en diaris o en una web de verificació de notícies, un exemple d'imatge desmentida i explicar com ho van descobrir; o crear un cartell «Abans de compartir una imatge…» amb els quatre passos.|Para ir más allá: buscar con un adulto, en periódicos o en una web de verificación de noticias, un ejemplo de imagen desmentida y explicar cómo lo descubrieron; o crear un cartel «Antes de compartir una imagen…» con los cuatro pasos.",
        menys: "Al taller, treballar amb tres targetes i només dues menes (real o enganya?). A l'app, fer en parella la foto del pont i el parc.|En el taller, trabajar con tres tarjetas y solo dos tipos (¿real o engaña?). En la app, hacer en pareja la foto del puente y el parque."
      },
      aval: {
        ticket: ["Digues les quatre menes d'imatges.|Di los cuatro tipos de imágenes.",
          "Digues un pas per verificar una imatge.|Di un paso para verificar una imagen."],
        rubric: [
          ["Tipus d'imatges|Tipos de imágenes", "Classifica imatges en retocades, fora de context o fetes amb IA i ho justifica.|Clasifica imágenes en retocadas, fuera de contexto o hechas con IA y lo justifica.", "Les confon o no justifica.|Las confunde o no justifica."],
          ["Verificar|Verificar", "Aplica els passos (qui, original, quan i on, altres fonts) abans de compartir.|Aplica los pasos (quién, original, cuándo y dónde, otras fuentes) antes de compartir.", "Es fixa només en pistes visuals.|Se fija solo en pistas visuales."],
          ["Respecte|Respeto", "Distingeix usos respectuosos de la IA i sap què fer si li fan un fals.|Distingue usos respetuosos de la IA y sabe qué hacer si le hacen un falso.", "No veu el mal dels falsos «de broma».|No ve el daño de los falsos «de broma»."]
        ]
      },
      casa: "A casa, feu «El museu del real o no?»: busqueu en revistes o diaris vells una foto normal i una que creieu retocada, i mireu-hi les pistes (pell, llum, ombres, vores). Dibuixeu una cosa impossible amb l'etiqueta «Inventat per mi». I parleu dels quatre passos de verificar: qui ho publica, on és l'original, quan i on es va fer i qui més ho explica. Si mai us arriba una imatge que fa mal a algú, no la reenvieu.|En casa, haced «El museo del ¿real o no?»: buscad en revistas o periódicos viejos una foto normal y una que creáis retocada, y mirad las pistas (piel, luz, sombras, bordes). Dibujad algo imposible con la etiqueta «Inventado por mí». Y hablad de los cuatro pasos de verificar: quién lo publica, dónde está el original, cuándo y dónde se hizo y quién más lo cuenta. Si alguna vez os llega una imagen que hace daño a alguien, no la reenviéis.",
      faq: [
        ["Què és la cerca inversa d'imatges?|¿Qué es la búsqueda inversa de imágenes?", "És buscar a partir d'una imatge (en lloc de paraules) per veure on ha sortit abans. Molts cercadors ho permeten. A aquesta edat, sempre amb un adult.|Es buscar a partir de una imagen (en lugar de palabras) para ver dónde ha salido antes. Muchos buscadores lo permiten. A esta edad, siempre con un adulto."],
        ["És il·legal fer un deepfake d'algú?|¿Es ilegal hacer un deepfake de alguien?", "Fer o compartir imatges falses d'una persona sense permís pot vulnerar el seu dret a la pròpia imatge i, en alguns casos, ser delicte. Amb els infants, el missatge és clar i sense alarmisme: fa mal i no està permès.|Hacer o compartir imágenes falsas de una persona sin permiso puede vulnerar su derecho a la propia imagen y, en algunos casos, ser delito. Con los niños, el mensaje es claro y sin alarmismo: hace daño y no está permitido."],
        ["I si un alumne explica que n'hi han fet un?|¿Y si un alumno cuenta que le han hecho uno?", "Escolta'l amb calma, deixa clar que no és culpa seva, no prometis guardar el secret, avisa la família i segueix el protocol del centre. Si cal, el 116 111 també l'escolta.|Escúchale con calma, deja claro que no es culpa suya, no prometas guardar el secreto, avisa a la familia y sigue el protocolo del centro. Si hace falta, el 116 111 también le escucha."],
        ["Totes les fotos retocades són dolentes?|¿Todas las fotos retocadas son malas?", "No: retocar la llum d'una foto és normal. El que importa és saber que moltes fotos no mostren la realitat, sobretot les de cares i cossos, i no comparar-s'hi.|No: retocar la luz de una foto es normal. Lo que importa es saber que muchas fotos no muestran la realidad, sobre todo las de caras y cuerpos, y no compararse."]
      ],
      tec: [
        ["A classificar imatges, al mòbil, els tres calaixos surten un sota l'altre.|Al clasificar imágenes, en el móvil, las tres cajas salen una debajo de otra.", "És normal: la targeta surt a dalt i es toca el calaix.|Es normal: la tarjeta sale arriba y se toca la caja."],
        ["A la foto del parc no troben la pista dels senyals.|En la foto del parque no encuentran la pista de las señales.", "Que llegeixin la descripció entre claudàtors: cada frase subratllable és una pista.|Que lean la descripción entre corchetes: cada frase subrayable es una pista."],
        ["Volen tornar a la conversa del grup de casa.|Quieren volver a la conversación del grupo de casa.", "Poden tornar al pas amb la fletxa: tots els camins acaben trobant l'original.|Pueden volver al paso con la flecha: todos los caminos terminan encontrando el original."]
      ],
      seg: [
        "No facis servir mai fotos de ningú de l'escola com a exemple de retoc o de fals.|No uses nunca fotos de nadie del centro como ejemplo de retoque o de falso.",
        "Si surten comentaris sobre el cos d'algú, atura'ls amb calma i recorda que tots els cossos són diferents i estan bé.|Si salen comentarios sobre el cuerpo de alguien, páralos con calma y recuerda que todos los cuerpos son diferentes y están bien.",
        "Si algun infant explica que circula una imatge falsa d'ell o d'un company, segueix el protocol del centre i avisa les famílies.|Si algún niño o niña cuenta que circula una imagen falsa suya o de un compañero, sigue el protocolo del centro y avisa a las familias."
      ],
      extra: [
        "Plàstica: fer un collage «impossible» amb retalls de revistes i posar-hi l'etiqueta «Muntatge fet per…».|Plástica: hacer un collage «imposible» con recortes de revistas y ponerle la etiqueta «Montaje hecho por…».",
        "Ciències socials: buscar fotos antigues del poble (arxiu municipal) i comparar-les amb ara: com sabem de quan és una foto?|Ciencias sociales: buscar fotos antiguas del pueblo (archivo municipal) y compararlas con ahora: ¿cómo sabemos de cuándo es una foto?",
        "Per als grans: per què es diu que «una imatge val més que mil paraules»? Encara és cert?|Para los mayores: ¿por qué se dice que «una imagen vale más que mil palabras»? ¿Sigue siendo cierto?"
      ],
      trans: [
        "Sessió d3-3: les pistes de les imatges fetes amb IA. Aquí, verificar com els professionals i el respecte.|Sesión d3-3: las pistas de las imágenes hechas con IA. Aquí, verificar como los profesionales y el respeto.",
        "Sessió d5-3: què aprèn la IA de nosaltres (també de les nostres fotos). Sessió d5-4: el capítol «Imatges i respecte» del manual.|Sesión d5-3: qué aprende la IA de nosotros (también de nuestras fotos). Sesión d5-4: el capítulo «Imágenes y respeto» del manual.",
        "Plàstica (imatge i muntatge), ciències socials (fonts i arxius) i tutoria (autoimatge i respecte).|Plástica (imagen y montaje), ciencias sociales (fuentes y archivos) y tutoría (autoimagen y respeto)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Imatges falses i deepfakes|Imágenes falsas y deepfakes", x: "Avui farem de verificadors.|Hoy haremos de verificadores.",
          nota: "Connecta amb el tauró de la unitat 3.|Conecta con el tiburón de la unidad 3." },
        { id: 's2', k: 'pregunta', t: "La foto del pont trencat|La foto del puente roto", punts: ["És d'avui?|¿Es de hoy?", "És d'un altre lloc?|¿Es de otro lugar?", "L'ha feta una IA?|¿La ha hecho una IA?"],
          nota: "Deixa les tres hipòtesis obertes: les resoldrem a l'app.|Deja las tres hipótesis abiertas: las resolveremos en la app." },
        { id: 's3', k: 'anim', t: "Quatre menes d'imatges|Cuatro tipos de imágenes", anim: 'd5quatre', x: "Real, retocada, fora de context o feta amb IA.|Real, retocada, fuera de contexto o hecha con IA.",
          nota: "Posa un exemple de cada mena.|Pon un ejemplo de cada tipo." },
        { id: 's4', k: 'anim', t: "Cares retocades|Caras retocadas", anim: 'd5filtre', x: "Comparar-te amb un filtre és comparar-te amb una cosa que no és real.|Compararte con un filtro es compararte con algo que no es real.",
          nota: "Parla en general, sense referir-te a ningú de la classe.|Habla en general, sin referirte a nadie de la clase." },
        { id: 's5', k: 'anim', t: "Fes com els verificadors|Haz como los verificadores", anim: 'd5verif', x: "Qui, original, quan i on, i qui més ho explica.|Quién, original, cuándo y dónde, y quién más lo cuenta.",
          nota: "Explica que «verificador/a» és una feina de veritat als diaris.|Explica que «verificador/a» es un trabajo de verdad en los periódicos." },
        { id: 's6', k: 'media', t: "La foto del pont|La foto del puente", x: "Quines pistes fan sospitar?|¿Qué pistas hacen sospechar?", media: PONT,
          nota: "«Ara mateix» sense data, neu a l'estiu, compte nou i presses.|«Ahora mismo» sin fecha, nieve en verano, cuenta nueva y prisas." },
        { id: 's7', k: 'media', t: "Etiquetes i respecte|Etiquetas y respeto", x: "Dir que és fet amb IA és honest. Però no totes les imatges ho diuen.|Decir que está hecho con IA es honesto. Pero no todas las imágenes lo dicen.", media: ETIQ,
          nota: "Acaba amb el respecte: mai falsos de persones reals.|Termina con el respeto: nunca falsos de personas reales." },
        { id: 's8', k: 'activitat', t: "Taller de verificadors|Taller de verificadores", timer: 12,
          punts: ["Llegiu cada «imatge» i la seva targeta de pistes.|Leed cada «imagen» y su tarjeta de pistas.", "De quina mena és? La compartiríeu?|¿De qué tipo es? ¿La compartiríais?", "Escriviu la pista que ho ha decidit.|Escribid la pista que lo ha decidido."],
          nota: "Passa per les taules i pregunta: «Què diria un verificador?».|Pasa por las mesas y pregunta: «¿Qué diría un verificador?»." },
        { id: 's9', k: 'concepte', t: "Els quatre passos|Los cuatro pasos", pic: 'img/ment/vel.webp',
          punts: ["Qui la publica?|¿Quién la publica?", "On és l'original?|¿Dónde está el original?", "Quan i on es va fer?|¿Cuándo y dónde se hizo?", "Qui més ho explica?|¿Quién más lo cuenta?"],
          nota: "Deixa-la projectada durant el taller.|Déjala proyectada durante el taller." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Imatges falses i deepfakes».|Abre la sesión «Imágenes falsas y deepfakes».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "A la pausa, fem cares!|En la pausa, ¡hacemos caras!"],
          nota: "Avisa quan arribin a la pausa activa.|Avisa cuando lleguen a la pausa activa." },
        { id: 's11', k: 'repte', t: "Reptes: crear amb respecte|Retos: crear con respeto", timer: 8,
          punts: ["D'acord o no, mai?|¿De acuerdo o no, nunca?", "Si te'n fan un a tu…|Si te hacen uno a ti…", "El parc fora de context.|El parque fuera de contexto."],
          nota: "Recorda: si et passa, no és culpa teva i ho pots explicar.|Recuerda: si te pasa, no es culpa tuya y lo puedes contar." },
        { id: 's12', k: 'activitat', t: "Crea: el meu protocol|Crea: mi protocolo", timer: 2,
          punts: ["Tria què faràs a cada pas.|Elige qué harás en cada paso.", "Desa el teu protocol.|Guarda tu protocolo.", "A casa: el museu del real o no.|En casa: el museo del real o no."],
          nota: "Que comparteixin el pas que els sembla més útil.|Que compartan el paso que les parece más útil." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Real, retocada, fora de context o IA.|Real, retocada, fuera de contexto o IA.", "Verificar: qui, original, quan i on, altres fonts.|Verificar: quién, original, cuándo y dónde, otras fuentes.", "Sense etiqueta no vol dir real.|Sin etiqueta no quiere decir real.", "Mai falsos de persones reals.|Nunca falsos de personas reales."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Les quatre menes d'imatges.|Los cuatro tipos de imágenes.", "Un pas per verificar.|Un paso para verificar."],
          nota: "Pot ser oral, per torns.|Puede ser oral, por turnos." },
        { id: 's15', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["El museu del real o no.|El museo del real o no.", "Expliqueu els quatre passos a casa.|Explicad los cuatro pasos en casa.", "Una imatge que fa mal no es reenvia.|Una imagen que hace daño no se reenvía."],
          nota: "Proposta per fer en família.|Propuesta para hacer en familia." }
      ],
      print: [
        { id: 'p1', t: "Taller de verificadors|Taller de verificadores", k: 'targetes',
          intro: "Un paquet per grup de 4. Cada targeta d'«imatge» (descrita) té al costat una targeta de pistes. Decidiu de quina mena és i si la compartiríeu. Tot és inventat.|Un paquete por grupo de 4. Cada tarjeta de «imagen» (descrita) tiene al lado una tarjeta de pistas. Decidid de qué tipo es y si la compartiríais. Todo es inventado.",
          items: [
            { t: "🖼️ Un llop caminant per la plaça de Vilabit, «ahir a la nit»|🖼️ Un lobo caminando por la plaza de Vilabit, «ayer por la noche»", n: 1 },
            { t: "🔎 Pistes: el compte té 1 dia; la mateixa foto va sortir fa 5 anys en un diari d'un altre país.|🔎 Pistas: la cuenta tiene 1 día; la misma foto salió hace 5 años en un periódico de otro país.", n: 1 },
            { t: "🖼️ Una cantant amb la pell perfecta, sense cap marca|🖼️ Una cantante con la piel perfecta, sin ninguna marca", n: 1 },
            { t: "🔎 Pistes: la revista diu a la lletra petita «imatge retocada».|🔎 Pistas: la revista dice en la letra pequeña «imagen retocada».", n: 1 },
            { t: "🖼️ Un elefant rosa banyant-se en una piscina de xocolata|🖼️ Un elefante rosa bañándose en una piscina de chocolate", n: 1 },
            { t: "🔎 Pistes: la publica @ArtDeLaNora amb l'etiqueta «Fet amb IA».|🔎 Pistas: la publica @ArtDeLaNora con la etiqueta «Hecho con IA».", n: 1 },
            { t: "🖼️ L'alcaldessa de Vilabit inaugurant la biblioteca nova|🖼️ La alcaldesa de Vilabit inaugurando la biblioteca nueva", n: 1 },
            { t: "🔎 Pistes: surt a la web de l'ajuntament i al diari local, amb data d'ahir.|🔎 Pistas: sale en la web del ayuntamiento y en el periódico local, con fecha de ayer.", n: 1 },
            { t: "🖼️ Un vídeo on un futbolista famós diu que deixa el futbol|🖼️ Un vídeo donde un futbolista famoso dice que deja el fútbol", n: 1 },
            { t: "🔎 Pistes: la boca no va amb la veu; cap diari no en parla; el seu club diu que és fals.|🔎 Pistas: la boca no va con la voz; ningún periódico habla de ello; su club dice que es falso.", n: 1 }
          ] }
      ]
    },

    /* ---------- Sessió 3 · Què aprèn la IA de nosaltres? ---------- */
    'd5-3': {
      intro: "Tercera sessió de la unitat 5. L'alumnat descobreix d'on surten les dades amb què aprenen les IA (textos, imatges, veus i converses fetes per persones), entén que el que s'escriu o es puja a una IA es pot guardar, fer servir per entrenar-la i ser llegit per persones de l'empresa, i aprèn a mirar què diu la política de privadesa i a triar la configuració que protegeix més, sempre amb un adult. Es recorda breument el biaix de la unitat 2 (estereotips a les dades) i s'obre el debat sobre les obres d'artistes que fan servir les IA. La pràctica és amb XatNuvi, una IA simulada.|Tercera sesión de la unidad 5. El alumnado descubre de dónde salen los datos con los que aprenden las IA (textos, imágenes, voces y conversaciones hechas por personas), entiende que lo que se escribe o se sube a una IA se puede guardar, usar para entrenarla y ser leído por personas de la empresa, y aprende a mirar qué dice la política de privacidad y a elegir la configuración que protege más, siempre con un adulto. Se recuerda brevemente el sesgo de la unidad 2 (estereotipos en los datos) y se abre el debate sobre las obras de artistas que usan las IA. La práctica es con XatNuvi, una IA simulada.",
      claus: [
        "Les IA aprenen de dades d'entrenament: moltíssims textos, imatges, veus i converses fets per persones.|Las IA aprenden de datos de entrenamiento: muchísimos textos, imágenes, voces y conversaciones hechos por personas.",
        "Les converses es poden guardar, servir per entrenar i ser llegides per persones de l'empresa: dades personals, fotos i secrets, fora.|Las conversaciones se pueden guardar, servir para entrenar y ser leídas por personas de la empresa: datos personales, fotos y secretos, fuera.",
        "Si les dades tenen estereotips, la IA els pot repetir (biaix): es revisa el que diu.|Si los datos tienen estereotipos, la IA los puede repetir (sesgo): se revisa lo que dice.",
        "Amb un adult: llegir la política de privadesa i triar la configuració (historial, entrenament, esborrar).|Con un adulto: leer la política de privacidad y elegir la configuración (historial, entrenamiento, borrar)."
      ],
      prev: [
        "Sessió d2-2: com aprèn una IA amb exemples i el biaix.|Sesión d2-2: cómo aprende una IA con ejemplos y el sesgo.",
        "Sessió d4-2: els permisos i les dades que demanen les apps.|Sesión d4-2: los permisos y los datos que piden las apps."
      ],
      obj: [
        "L'alumne/a explica què són les dades d'entrenament i relaciona cada IA amb el tipus de dades de què aprèn.|El alumno/a explica qué son los datos de entrenamiento y relaciona cada IA con el tipo de datos del que aprende.",
        "L'alumne/a identifica en una política de privadesa què es fa amb les converses.|El alumno/a identifica en una política de privacidad qué se hace con las conversaciones.",
        "L'alumne/a decideix què no comparteix amb una IA i com configurar-la amb un adult.|El alumno/a decide qué no comparte con una IA y cómo configurarla con un adulto.",
        "L'alumne/a reconeix estereotips en una resposta i opina sobre l'ús d'obres d'altres.|El alumno/a reconoce estereotipos en una respuesta y opina sobre el uso de obras de otros."
      ],
      comp: [
        "Competència digital (CD4): protecció de dades personals i privadesa|Competencia digital (CD4): protección de datos personales y privacidad",
        "Competència digital (CD2): comprensió del funcionament de la IA|Competencia digital (CD2): comprensión del funcionamiento de la IA",
        "Competència ciutadana: drets digitals, igualtat i autoria|Competencia ciudadana: derechos digitales, igualdad y autoría"
      ],
      vocab: [
        ["Dades d'entrenament|Datos de entrenamiento", "Els exemples (textos, imatges, veus…) amb què aprèn una IA.|Los ejemplos (textos, imágenes, voces…) con los que aprende una IA."],
        ["Historial|Historial", "La llista de converses que l'app guarda.|La lista de conversaciones que la app guarda."],
        ["Política de privadesa|Política de privacidad", "Text on una empresa explica què fa amb les teves dades.|Texto donde una empresa explica qué hace con tus datos."],
        ["Conversa temporal|Conversación temporal", "Una conversa que l'app no desa.|Una conversación que la app no guarda."],
        ["Estereotip|Estereotipo", "Idea fixa i injusta sobre un grup de persones («els bombers són homes»).|Idea fija e injusta sobre un grupo de personas («los bomberos son hombres»)."],
        ["Configuració|Configuración", "On es trien les opcions de l'app, també les de privadesa.|Donde se eligen las opciones de la app, también las de privacidad."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Què aprèn la IA de nosaltres?»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «¿Qué aprende la IA de nosotros?»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Les targetes de dades (un paquet per grup de 4) i tres rètols: «Textos», «Imatges» i «Veus i sons»|Las tarjetas de datos (un paquete por grupo de 4) y tres carteles: «Textos», «Imágenes» y «Voces y sonidos»"
        ],
        imprimir: ["Què menja la IA? (imprimible 1): un paquet per grup|¿Qué come la IA? (imprimible 1): un paquete por grupo", "Llegim una política de privadesa (imprimible 2): una per parella|Leemos una política de privacidad (imprimible 2): una por pareja"],
        prep: [
          "Imprimir i retallar les targetes de dades i preparar els tres rètols.|Imprimir y recortar las tarjetas de datos y preparar los tres carteles.",
          "Llegir la fitxa de la política de privadesa inventada i pensar com explicar «entrenar amb les converses» amb paraules senzilles.|Leer la ficha de la política de privacidad inventada y pensar cómo explicar «entrenar con las conversaciones» con palabras sencillas.",
          "No demanar quines apps fan servir ni què hi escriuen.|No preguntar qué apps usan ni qué escriben en ellas."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: la IA que ho recorda tot|Bienvenida: la IA que lo recuerda todo", fase: 'inici',
          fa: "Explica la història d'en Bit, que descobreix que l'AjudaBot ha après de les converses de la gent. Pregunta què recorden del gos del sofà (biaix) i d'on creuen que treu les dades una IA.|Explica la historia de Bit, que descubre que AjudaBot ha aprendido de las conversaciones de la gente. Pregunta qué recuerdan del perro del sofá (sesgo) y de dónde creen que saca los datos una IA.",
          diu: ["Per què s'equivocava la IA del gos del sofà?|¿Por qué se equivocaba la IA del perro del sofá?",
            "D'on creieu que treu tants exemples una IA?|¿De dónde creéis que saca tantos ejemplos una IA?",
            "El que escrivim a una IA, on va a parar?|Lo que escribimos a una IA, ¿dónde acaba?"],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Dades, converses, biaix i configuració|Datos, conversaciones, sesgo y configuración", fase: 'teoria',
          fa: "Amb l'animació de les dades, explica què són les dades d'entrenament. Amb la de les converses, explica que es poden guardar, fer servir per entrenar i llegir. Recorda el biaix amb un exemple d'estereotip. Mostra la política de XatNuvi i la configuració de privadesa.|Con la animación de los datos, explica qué son los datos de entrenamiento. Con la de las conversaciones, explica que se pueden guardar, usar para entrenar y leer. Recuerda el sesgo con un ejemplo de estereotipo. Muestra la política de XatNuvi y la configuración de privacidad.",
          diu: ["Qui ha fet tots aquests textos i dibuixos? (Persones.)|¿Quién ha hecho todos estos textos y dibujos? (Personas.)",
            "Una conversa amb una IA és un diari secret? (No.)|¿Una conversación con una IA es un diario secreto? (No.)",
            "Quina opció de la configuració canviaríeu primer?|¿Qué opción de la configuración cambiaríais primero?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Què menja la IA?|¿Qué come la IA?", fase: 'desconnectat',
          fa: "En grups de 4: primer classifiquen les targetes de dades en «Textos», «Imatges» i «Veus i sons». Després, en parelles, llegeixen la política de privadesa inventada de la fitxa i subratllen en verd el que els sembla bé i en vermell el que els preocupa. Posada en comú.|En grupos de 4: primero clasifican las tarjetas de datos en «Textos», «Imágenes» y «Voces y sonidos». Después, en parejas, leen la política de privacidad inventada de la ficha y subrayan en verde lo que les parece bien y en rojo lo que les preocupa. Puesta en común.",
          diu: ["Quines targetes són dades personals que no donaríeu mai?|¿Qué tarjetas son datos personales que no daríais nunca?",
            "Què heu subratllat en vermell a la política?|¿Qué habéis subrayado en rojo en la política?",
            "Faríeu servir aquesta app? Amb quina configuració?|¿Usaríais esta app? ¿Con qué configuración?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 i parelles|Grupos de 4 y parejas" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: la pregunta de repàs, la història, les cinc targetes, d'on aprèn cada IA, la política de XatNuvi, la pregunta de les fotos i la conversa amb XatNuvi. Pausa activa tots junts.|Cada alumno/a hace la sesión hasta la pausa activa: la pregunta de repaso, la historia, las cinco tarjetas, de dónde aprende cada IA, la política de XatNuvi, la pregunta de las fotos y la conversación con XatNuvi. Pausa activa todos juntos.",
          diu: ["Què us ha demanat XatNuvi al principi? Què li heu dit?|¿Qué os ha pedido XatNuvi al principio? ¿Qué le habéis dicho?",
            "Per què els secrets no es diuen a una IA?|¿Por qué los secretos no se dicen a una IA?",
            "Ara, tots: dades a dins, dades a fora!|Ahora, todos: ¡datos dentro, datos fuera!"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 10, t: "Reptes i el meu pacte de dades|Retos y mi pacto de datos", fase: 'ordinador',
          fa: "Continuen amb els reptes: configurar XatNuvi, les obres dels artistes, l'estereotip dels bombers i els passos per provar una app d'IA. Després fan el seu pacte de dades. Obre un debat breu sobre els artistes: no hi ha una resposta única.|Siguen con los retos: configurar XatNuvi, las obras de los artistas, el estereotipo de los bomberos y los pasos para probar una app de IA. Después hacen su pacto de datos. Abre un debate breve sobre los artistas: no hay una respuesta única.",
          diu: ["Quines opcions heu deixat desactivades? Per què?|¿Qué opciones habéis dejado desactivadas? ¿Por qué?",
            "És just que una IA aprengui de dibuixos sense preguntar?|¿Es justo que una IA aprenda de dibujos sin preguntar?",
            "Quin acord del vostre pacte us sembla més important?|¿Qué acuerdo de vuestro pacto os parece más importante?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: el meu pacte de dades (i «Què menja la IA de casa?», per a casa).|«Retos» y el paso «Crea»: mi pacto de datos (y «¿Qué come la IA de casa?», para casa).", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu les idees clau amb el resum. Tiquet de sortida, preguntes finals i com s'han sentit. Proposa la feina per a casa: buscar junts l'apartat de privadesa d'una app que faci servir IA.|Repasad las ideas clave con el resumen. Ticket de salida, preguntas finales y cómo se han sentido. Propón el trabajo para casa: buscar juntos el apartado de privacidad de una app que use IA.",
          diu: ["D'on aprenen les IA?|¿De dónde aprenden las IA?",
            "Què no li direu mai a una IA?|¿Qué no le diréis nunca a una IA?",
            "Amb qui revisareu la configuració?|¿Con quién revisaréis la configuración?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Creu que una IA «sap» les coses sense que ningú les hi hagi donat.|Cree que una IA «sabe» las cosas sin que nadie se las haya dado.",
          "Recorda l'entrenament de la unitat 2: tot el que sap ho ha après de dades fetes per persones.|Recuerda el entrenamiento de la unidad 2: todo lo que sabe lo ha aprendido de datos hechos por personas."],
        ["Pensa que les converses amb una IA són privades com un diari.|Piensa que las conversaciones con una IA son privadas como un diario.",
          "Mostra la política de XatNuvi: es poden guardar, servir per entrenar i ser llegides.|Muestra la política de XatNuvi: se pueden guardar, servir para entrenar y ser leídas."],
        ["Pensa que si una dada surt d'una IA, és neutral.|Piensa que si un dato sale de una IA, es neutral.",
          "Les dades porten els estereotips de qui les ha fet. Per això es revisa el que diu.|Los datos llevan los estereotipos de quien los ha hecho. Por eso se revisa lo que dice."],
        ["Creu que la configuració no es pot canviar o que és cosa d'adults.|Cree que la configuración no se puede cambiar o que es cosa de adultos.",
          "Es pot canviar i és bo fer-ho junts: l'adult ajuda i l'infant entén per què.|Se puede cambiar y es bueno hacerlo juntos: el adulto ayuda y el niño entiende por qué."],
        ["S'espanta i diu que no farà servir mai cap IA.|Se asusta y dice que no usará nunca ninguna IA.",
          "No cal: la IA pot ser útil. Es tracta de decidir què hi donem i com la configurem.|No hace falta: la IA puede ser útil. Se trata de decidir qué le damos y cómo la configuramos."]
      ],
      diff: {
        mes: "Per anar més enllà: reescriure la política de XatNuvi perquè sigui «la més justa possible» per a infants; o preparar arguments a favor i en contra en el debat dels artistes.|Para ir más allá: reescribir la política de XatNuvi para que sea «la más justa posible» para niños; o preparar argumentos a favor y en contra en el debate de los artistas.",
        menys: "Classificar només en dues piles (es pot dir a una IA / dada personal). A l'app, fer en parella la conversa amb XatNuvi i la configuració.|Clasificar solo en dos montones (se puede decir a una IA / dato personal). En la app, hacer en pareja la conversación con XatNuvi y la configuración."
      },
      aval: {
        ticket: ["Digues d'on aprenen les IA.|Di de dónde aprenden las IA.",
          "Digues una cosa que no li diries mai a una IA i per què.|Di una cosa que no le dirías nunca a una IA y por qué."],
        rubric: [
          ["Dades d'entrenament|Datos de entrenamiento", "Explica què són i relaciona cada IA amb les seves dades.|Explica qué son y relaciona cada IA con sus datos.", "Ho explica amb ajuda.|Lo explica con ayuda."],
          ["Privadesa|Privacidad", "Interpreta una política senzilla i tria una configuració que protegeix.|Interpreta una política sencilla y elige una configuración que protege.", "No sap què fan amb les converses.|No sabe qué hacen con las conversaciones."],
          ["Pensament crític|Pensamiento crítico", "Reconeix estereotips i opina amb arguments sobre les obres d'altres.|Reconoce estereotipos y opina con argumentos sobre las obras de otros.", "Accepta el que diu la IA sense revisar-ho.|Acepta lo que dice la IA sin revisarlo."]
        ]
      },
      casa: "A casa, feu junts «Què menja la IA de casa?»: llisteu les apps que fan servir IA (el traductor, l'assistent de veu, les recomanacions de vídeos o música…) i penseu quines dades vostres poden fer servir. Busqueu, a la configuració d'una d'elles, l'apartat de privadesa i decidiu un canvi que us protegeixi més (per exemple, que les converses no serveixin per entrenar o esborrar l'historial).|En casa, haced juntos «¿Qué come la IA de casa?»: listad las apps que usan IA (el traductor, el asistente de voz, las recomendaciones de vídeos o música…) y pensad qué datos vuestros pueden usar. Buscad, en la configuración de una de ellas, el apartado de privacidad y decidid un cambio que os proteja más (por ejemplo, que las conversaciones no sirvan para entrenar o borrar el historial).",
      faq: [
        ["És veritat que algunes persones de l'empresa poden llegir les converses?|¿Es verdad que algunas personas de la empresa pueden leer las conversaciones?", "En molts serveis, sí: hi ha equips que revisen converses per millorar la IA o per seguretat; ho expliquen a la política de privadesa. Per això diem que no és un diari secret.|En muchos servicios, sí: hay equipos que revisan conversaciones para mejorar la IA o por seguridad; lo explican en la política de privacidad. Por eso decimos que no es un diario secreto."],
        ["Es pot evitar que les converses entrenin la IA?|¿Se puede evitar que las conversaciones entrenen la IA?", "Alguns serveis tenen una opció per no fer-les servir per entrenar, o converses temporals que no es desen. Depèn de cada servei: cal mirar-ho a la configuració.|Algunos servicios tienen una opción para no usarlas para entrenar, o conversaciones temporales que no se guardan. Depende de cada servicio: hay que mirarlo en la configuración."],
        ["Què diem del debat dels artistes?|¿Qué decimos del debate de los artistas?", "Que és un debat obert: hi ha qui creu que les IA haurien de demanar permís o pagar i qui creu que no. A classe, l'important és argumentar i respectar l'autoria, com a la unitat 3.|Que es un debate abierto: hay quien cree que las IA deberían pedir permiso o pagar y quien cree que no. En clase, lo importante es argumentar y respetar la autoría, como en la unidad 3."],
        ["Cal tornar a explicar el biaix?|¿Hay que volver a explicar el sesgo?", "Només un recordatori: la IA aprèn el que hi ha a les dades, també els estereotips. Es va treballar a fons a d2-2.|Solo un recordatorio: la IA aprende lo que hay en los datos, también los estereotipos. Se trabajó a fondo en d2-2."]
      ],
      tec: [
        ["A la política de XatNuvi hi ha cinc pistes i en demana quatre.|En la política de XatNuvi hay cinco pistas y pide cuatro.", "És a propòsit: amb quatre ja es pot continuar, però val la pena trobar-les totes.|Es a propósito: con cuatro ya se puede continuar, pero vale la pena encontrarlas todas."],
        ["A la conversa amb XatNuvi volen provar l'altre camí.|En la conversación con XatNuvi quieren probar el otro camino.", "Poden tornar enrere amb la fletxa del pas: tots dos camins acaben amb una idea per aprendre.|Pueden volver atrás con la flecha del paso: los dos caminos terminan con una idea para aprender."],
        ["Pregunten si XatNuvi existeix.|Preguntan si XatNuvi existe.", "No: és inventat, com l'AjudaBot. Les respostes les ha escrit l'equip de Numi i no es desa res.|No: es inventado, como AjudaBot. Las respuestas las ha escrito el equipo de Numi y no se guarda nada."]
      ],
      seg: [
        "No demanis quines apps d'IA fan servir ni què hi han escrit.|No preguntes qué apps de IA usan ni qué han escrito en ellas.",
        "Si algun infant explica que ha compartit fotos o dades personals amb una IA, tranquil·litza'l i proposa que ho mirin a casa per esborrar-ho si es pot.|Si algún niño o niña cuenta que ha compartido fotos o datos personales con una IA, tranquilízale y propón que lo miren en casa para borrarlo si se puede.",
        "Si algú explica que confia secrets a una IA perquè no té amb qui parlar-ne, escolta'l i parla-ho amb la tutoria i la família.|Si alguien cuenta que confía secretos a una IA porque no tiene con quién hablar, escúchale y háblalo con la tutoría y la familia."
      ],
      extra: [
        "Matemàtiques: si una IA llegís un llibre per minut, quants dies trigaria a llegir-ne un milió?|Matemáticas: si una IA leyera un libro por minuto, ¿cuántos días tardaría en leer un millón?",
        "Valors: debat sobre igualtat a partir de l'estereotip dels bombers i altres professions.|Valores: debate sobre igualdad a partir del estereotipo de los bomberos y otras profesiones.",
        "Per als grans: redactar una carta (sense enviar-la) a una empresa d'IA explicant què haurien de tenir en compte amb els infants.|Para los mayores: redactar una carta (sin enviarla) a una empresa de IA explicando qué deberían tener en cuenta con los niños."
      ],
      trans: [
        "Sessió d2-2: com aprèn una IA i el biaix. Aquí, d'on surten les dades i les que hi posem nosaltres.|Sesión d2-2: cómo aprende una IA y el sesgo. Aquí, de dónde salen los datos y los que ponemos nosotros.",
        "Sessió d5-4: el capítol «Dades» del manual de la IA. Sessió d6-3: els algoritmes de recomanació també aprenen del que fem.|Sesión d5-4: el capítulo «Datos» del manual de la IA. Sesión d6-3: los algoritmos de recomendación también aprenden de lo que hacemos.",
        "Matemàtiques (grans quantitats), valors (igualtat i estereotips) i tutoria (privadesa).|Matemáticas (grandes cantidades), valores (igualdad y estereotipos) y tutoría (privacidad)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Què aprèn la IA de nosaltres?|¿Qué aprende la IA de nosotros?", x: "Les dades de les IA… i les nostres.|Los datos de las IA… y los nuestros.",
          nota: "Avui parlem de dades, sense por: per decidir millor.|Hoy hablamos de datos, sin miedo: para decidir mejor." },
        { id: 's2', k: 'pregunta', t: "La IA que ho recorda tot|La IA que lo recuerda todo", punts: ["L'AjudaBot ha millorat molt.|AjudaBot ha mejorado mucho.", "Ha après de milions de textos… i de converses!|Ha aprendido de millones de textos… ¡y de conversaciones!", "I el que jo li vaig dir?|¿Y lo que yo le dije?"],
          nota: "Recull idees: on van a parar les converses?|Recoge ideas: ¿dónde acaban las conversaciones?" },
        { id: 's3', k: 'anim', t: "El menjar de la IA|La comida de la IA", anim: 'd5dades', x: "Textos, imatges, veus i converses fets per persones.|Textos, imágenes, voces y conversaciones hechos por personas.",
          nota: "Connecta amb l'entrenament de fruites i llaminadures de la unitat 2.|Conecta con el entrenamiento de frutas y golosinas de la unidad 2." },
        { id: 's4', k: 'anim', t: "El que li dius es pot guardar|Lo que le dices se puede guardar", anim: 'd5guarda', x: "Guardar, entrenar i llegir: no és un diari secret.|Guardar, entrenar y leer: no es un diario secreto.",
          nota: "Sense alarmisme: és informació per decidir què hi posem.|Sin alarmismo: es información para decidir qué ponemos." },
        { id: 's5', k: 'concepte', t: "Biaix, un altre cop|Sesgo, otra vez", pic: 'img/ment/igu.webp',
          punts: ["Si les dades tenen estereotips…|Si los datos tienen estereotipos…", "…la IA els pot repetir.|…la IA los puede repetir.", "Per això revisem el que diu.|Por eso revisamos lo que dice."],
          nota: "Només un recordatori: el biaix ja es va treballar a d2-2.|Solo un recordatorio: el sesgo ya se trabajó en d2-2." },
        { id: 's6', k: 'media', t: "La política de XatNuvi|La política de XatNuvi", x: "Què fan amb les converses?|¿Qué hacen con las conversaciones?", media: PRIV,
          nota: "Llegiu-la en veu alta i pregunta què els preocupa.|Leedla en voz alta y pregunta qué les preocupa." },
        { id: 's7', k: 'anim', t: "Tu tries|Tú eliges", anim: 'd5config', x: "Historial, entrenament i esborrar: amb un adult.|Historial, entrenamiento y borrar: con un adulto.",
          nota: "Cada servei té opcions diferents; la idea és buscar-les.|Cada servicio tiene opciones diferentes; la idea es buscarlas." },
        { id: 's8', k: 'activitat', t: "Què menja la IA?|¿Qué come la IA?", timer: 12,
          punts: ["Classifiqueu les dades: textos, imatges o veus.|Clasificad los datos: textos, imágenes o voces.", "Llegiu la política de la fitxa.|Leed la política de la ficha.", "Verd: bé · Vermell: em preocupa.|Verde: bien · Rojo: me preocupa."],
          nota: "Passa per les taules i ajuda a entendre «entrenar».|Pasa por las mesas y ayuda a entender «entrenar»." },
        { id: 's9', k: 'concepte', t: "Fora de la IA|Fuera de la IA", pic: 'img/ment/sob.webp',
          punts: ["Nom complet, adreça i escola.|Nombre completo, dirección y colegio.", "Fotos teves i dels altres.|Fotos tuyas y de los demás.", "Secrets i contrasenyes.|Secretos y contraseñas."],
          nota: "Deixa-la projectada durant l'activitat.|Déjala proyectada durante la actividad." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Què aprèn la IA de nosaltres?».|Abre la sesión «¿Qué aprende la IA de nosotros?».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "XatNuvi és una simulació.|XatNuvi es una simulación."],
          nota: "Avisa quan arribin a la pausa activa.|Avisa cuando lleguen a la pausa activa." },
        { id: 's11', k: 'repte', t: "Reptes: les meves dades|Retos: mis datos", timer: 8,
          punts: ["Configura XatNuvi.|Configura XatNuvi.", "Les obres dels artistes: què és just?|Las obras de los artistas: ¿qué es justo?", "L'estereotip dels bombers.|El estereotipo de los bomberos."],
          nota: "Debat breu: no hi ha una resposta única sobre els artistes.|Debate breve: no hay una respuesta única sobre los artistas." },
        { id: 's12', k: 'activitat', t: "Crea: el meu pacte de dades|Crea: mi pacto de datos", timer: 2,
          punts: ["Tria una idea per a cada tema.|Elige una idea para cada tema.", "Desa el teu pacte.|Guarda tu pacto.", "A casa: què menja la IA de casa?|En casa: ¿qué come la IA de casa?"],
          nota: "Que comparteixin un acord.|Que compartan un acuerdo." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Les IA aprenen de dades fetes per persones.|Las IA aprenden de datos hechos por personas.", "Les converses es poden guardar i llegir.|Las conversaciones se pueden guardar y leer.", "Les dades poden tenir estereotips.|Los datos pueden tener estereotipos.", "La configuració es tria amb un adult.|La configuración se elige con un adulto."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["D'on aprenen les IA?|¿De dónde aprenden las IA?", "Una cosa que no diries mai a una IA.|Una cosa que no dirías nunca a una IA."],
          nota: "Pot ser oral, per torns.|Puede ser oral, por turnos." },
        { id: 's15', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["Llisteu les apps de casa amb IA.|Listad las apps de casa con IA.", "Busqueu l'apartat de privadesa.|Buscad el apartado de privacidad.", "Un canvi que us protegeixi.|Un cambio que os proteja."],
          nota: "Proposta per fer en família.|Propuesta para hacer en familia." }
      ],
      print: [
        { id: 'p1', t: "Què menja la IA?|¿Qué come la IA?", k: 'targetes',
          intro: "Un paquet per grup de 4. Classifiqueu cada targeta en «Textos», «Imatges» o «Veus i sons». Marqueu amb una ✗ les que són dades personals que no donaríeu a una IA.|Un paquete por grupo de 4. Clasificad cada tarjeta en «Textos», «Imágenes» o «Voces y sonidos». Marcad con una ✗ las que son datos personales que no daríais a una IA.",
          items: [
            { t: "📚 Un llibre de contes antic|📚 Un libro de cuentos antiguo", n: 1 },
            { t: "🏠 L'adreça de casa meva|🏠 La dirección de mi casa", n: 1 },
            { t: "🐦 La gravació d'un ocell cantant|🐦 La grabación de un pájaro cantando", n: 1 },
            { t: "🤳 Una selfie meva|🤳 Una selfie mía", n: 1 },
            { t: "🌸 Mil fotos de flors amb el nom|🌸 Mil fotos de flores con el nombre", n: 1 },
            { t: "🎙️ Un missatge de veu de la meva àvia|🎙️ Un mensaje de voz de mi abuela", n: 1 },
            { t: "📰 Les notícies d'un diari|📰 Las noticias de un periódico", n: 1 },
            { t: "🔑 La meva contrasenya|🔑 Mi contraseña", n: 1 },
            { t: "🎵 Una cançó d'un grup famós|🎵 Una canción de un grupo famoso", n: 1 },
            { t: "🎨 Un dibuix d'una artista|🎨 Un dibujo de una artista", n: 1 },
            { t: "💬 Una conversa amb un xat d'IA|💬 Una conversación con un chat de IA", n: 1 },
            { t: "🏫 El nom de la meva escola|🏫 El nombre de mi colegio", n: 1 }
          ] },
        { id: 'p2', t: "Llegim una política de privadesa|Leemos una política de privacidad", k: 'fitxa',
          intro: "Política inventada de XatNuvi. Subratlla en verd el que et sembla bé i en vermell el que et preocupa. Després respon.|Política inventada de XatNuvi. Subraya en verde lo que te parece bien y en rojo lo que te preocupa. Después responde.",
          items: [
            { q: "«Pots fer servir l'app gratis. Guardem les converses 5 anys. Les fem servir per entrenar la IA. Persones de l'equip en poden llegir algunes. Compartim dades amb empreses per fer publicitat. Només per a més grans de 14 anys.» Què has subratllat en vermell?|«Puedes usar la app gratis. Guardamos las conversaciones 5 años. Las usamos para entrenar la IA. Personas del equipo pueden leer algunas. Compartimos datos con empresas para hacer publicidad. Solo para mayores de 14 años.» ¿Qué has subrayado en rojo?", big: true, sol: "Guardar 5 anys, entrenar amb les converses, que les puguin llegir i compartir dades per a publicitat. L'edat mínima és important: si no la tens, no és per a tu.|Guardar 5 años, entrenar con las conversaciones, que las puedan leer y compartir datos para publicidad. La edad mínima es importante: si no la tienes, no es para ti." },
            { q: "Quina opció de la configuració canviaries?|¿Qué opción de la configuración cambiarías?", sol: "Per exemple: que les converses no serveixin per entrenar, conversa temporal o esborrar l'historial.|Por ejemplo: que las conversaciones no sirvan para entrenar, conversación temporal o borrar el historial." },
            { q: "Què no hi escriuries mai?|¿Qué no escribirías nunca?", sol: "Dades personals (nom complet, adreça, escola), fotos, secrets i contrasenyes.|Datos personales (nombre completo, dirección, colegio), fotos, secretos y contraseñas." }
          ] }
      ]
    },

    /* ---------- Sessió 4 · Projecte: el manual de la IA de la classe ---------- */
    'd5-4': {
      intro: "Sessió de projecte que tanca la unitat 5. La classe rep l'encàrrec d'escriure el manual de la IA de la classe: unes normes clares perquè alumnes, mestres i famílies sàpiguen fer-la servir amb cap. El manual té sis capítols (preguntar bé, comprovar, honestedat, dades, imatges i respecte, i edats i permisos). A l'app, l'alumnat classifica normes per capítols, revisa un esborrany, practica com defensar una norma en un debat sense ferir ningú i tria la norma principal de cada capítol (es desa). En paper, cada grup escriu i il·lustra un capítol, i al final s'ajunta el manual sencer.|Sesión de proyecto que cierra la unidad 5. La clase recibe el encargo de escribir el manual de la IA de la clase: unas normas claras para que alumnos, maestros y familias sepan usarla con cabeza. El manual tiene seis capítulos (preguntar bien, comprobar, honestidad, datos, imágenes y respeto, y edades y permisos). En la app, el alumnado clasifica normas por capítulos, revisa un borrador, practica cómo defender una norma en un debate sin herir a nadie y elige la norma principal de cada capítulo (se guarda). En papel, cada grupo escribe e ilustra un capítulo, y al final se junta el manual entero.",
      claus: [
        "Un manual d'ús no prohibeix: explica quan sí, quan no i com.|Un manual de uso no prohíbe: explica cuándo sí, cuándo no y cómo.",
        "Sis capítols: preguntar bé, comprovar, honestedat, dades, imatges i respecte, i edats i permisos.|Seis capítulos: preguntar bien, comprobar, honestidad, datos, imágenes y respeto, y edades y permisos.",
        "Una bona norma és clara, en positiu i porta un exemple.|Una buena norma es clara, en positivo y lleva un ejemplo.",
        "Les normes es pacten: es pot discrepar sense ferir i proposant alternatives.|Las normas se pactan: se puede discrepar sin herir y proponiendo alternativas."
      ],
      prev: [
        "Sessions d5-1, d5-2 i d5-3: preguntar bé, verificar imatges i les dades de la IA.|Sesiones d5-1, d5-2 y d5-3: preguntar bien, verificar imágenes y los datos de la IA.",
        "Sessió d1-4: el decàleg (normes clares i en positiu).|Sesión d1-4: el decálogo (normas claras y en positivo)."
      ],
      obj: [
        "L'alumne/a organitza normes sobre la IA en capítols temàtics.|El alumno/a organiza normas sobre la IA en capítulos temáticos.",
        "L'alumne/a revisa normes i les millora perquè siguin clares, en positiu i amb exemple.|El alumno/a revisa normas y las mejora para que sean claras, en positivo y con ejemplo.",
        "L'alumne/a defensa una norma en un debat de manera respectuosa.|El alumno/a defiende una norma en un debate de manera respetuosa.",
        "L'alumne/a escriu i il·lustra, en grup, un capítol del manual.|El alumno/a escribe e ilustra, en grupo, un capítulo del manual."
      ],
      comp: [
        "Competència digital (CD4): ús responsable i ètic de la IA|Competencia digital (CD4): uso responsable y ético de la IA",
        "Competència en comunicació lingüística: escriure normes i argumentar|Competencia en comunicación lingüística: escribir normas y argumentar",
        "Competència ciutadana: pactar normes de convivència|Competencia ciudadana: pactar normas de convivencia"
      ],
      vocab: [
        ["Manual d'ús|Manual de uso", "Text que explica com fer servir bé una eina.|Texto que explica cómo usar bien una herramienta."],
        ["Capítol|Capítulo", "Cada part del manual, sobre un tema.|Cada parte del manual, sobre un tema."],
        ["Norma en positiu|Norma en positivo", "Norma que diu què fer, no només què no fer.|Norma que dice qué hacer, no solo qué no hacer."],
        ["Pactar|Pactar", "Decidir junts, escoltant tothom.|Decidir juntos, escuchando a todo el mundo."],
        ["Fonts del treball|Fuentes del trabajo", "On dius d'on has tret la informació i què t'ha ajudat.|Donde dices de dónde has sacado la información y qué te ha ayudado."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el manual de la IA de la classe»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el manual de la IA de la clase»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "La plantilla del capítol (una per grup), fulls DIN A4, colors i una carpeta o anelles per ajuntar el manual|La plantilla del capítulo (una por grupo), hojas DIN A4, colores y una carpeta o anillas para juntar el manual"
        ],
        imprimir: ["Plantilla del capítol (imprimible 1): una per grup|Plantilla del capítulo (imprimible 1): una por grupo"],
        prep: [
          "Fer sis grups (un per capítol) o, si sou menys, ajuntar capítols.|Hacer seis grupos (uno por capítulo) o, si sois menos, juntar capítulos.",
          "Tenir a mà les normes del centre sobre la IA, si n'hi ha, per incorporar-les.|Tener a mano las normas del centro sobre la IA, si las hay, para incorporarlas.",
          "Decidir on es penjarà o es compartirà el manual (classe, web de l'escola, famílies).|Decidir dónde se colgará o se compartirá el manual (clase, web del centro, familias)."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: l'encàrrec de la directora|Bienvenida: el encargo de la directora", fase: 'inici',
          fa: "Explica l'encàrrec: el manual de la IA de la classe. Repasseu la unitat amb la diapositiva de repàs i pregunta per a qui serà el manual i per què és útil.|Explica el encargo: el manual de la IA de la clase. Repasad la unidad con la diapositiva de repaso y pregunta para quién será el manual y por qué es útil.",
          diu: ["Qui llegirà el manual? (Alumnes, mestres i famílies.)|¿Quién leerá el manual? (Alumnos, maestros y familias.)",
            "Un manual és una llista de prohibicions? (No.)|¿Un manual es una lista de prohibiciones? (No.)",
            "Què hem après aquesta unitat que hi hauria de ser?|¿Qué hemos aprendido esta unidad que debería estar?"],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 5, t: "Els capítols i les bones normes|Los capítulos y las buenas normas", fase: 'teoria',
          fa: "Amb l'animació del manual, presenta els sis capítols. Recorda com és una bona norma (com al decàleg) i el que no deixem a una IA. Assigna un capítol a cada grup.|Con la animación del manual, presenta los seis capítulos. Recuerda cómo es una buena norma (como en el decálogo) y lo que no dejamos a una IA. Asigna un capítulo a cada grupo.",
          diu: ["Com transformaríeu «No facis el ximple amb la IA» en una bona norma?|¿Cómo transformaríais «No hagas el tonto con la IA» en una buena norma?",
            "Què no deixaríeu mai a una IA?|¿Qué no dejaríais nunca a una IA?",
            "Quin capítol us ha tocat?|¿Qué capítulo os ha tocado?"],
          slides: ['s3', 's4', 's5'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 20, t: "A l'ordinador: normes, esborrany i debat|En el ordenador: normas, borrador y debate", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió: el repàs, la història, les targetes, classificar normes per capítols, revisar l'esborrany d'en Pau, el debat amb l'Iu, la pausa activa, els reptes i el pas «Crea» amb la norma principal de cada capítol.|Cada alumno/a hace la sesión: el repaso, la historia, las tarjetas, clasificar normas por capítulos, revisar el borrador de Pau, el debate con Iu, la pausa activa, los retos y el paso «Crea» con la norma principal de cada capítulo.",
          diu: ["Quines normes de l'esborrany calia millorar?|¿Qué normas del borrador había que mejorar?",
            "Com heu respost a l'Iu sense ferir-lo?|¿Cómo habéis respondido a Iu sin herirle?",
            "Quina norma heu triat per al vostre capítol?|¿Qué norma habéis elegido para vuestro capítulo?"],
          slides: ['s6', 's7', 's8'], app: "Tota la sessió fins al pas «Crea»: el meu manual de la IA.|Toda la sesión hasta el paso «Crea»: mi manual de la IA.", org: "Individual|Individual" },
        { min: 17, t: "El manual en paper|El manual en papel", fase: 'desconnectat',
          fa: "Cada grup escriu el seu capítol a la plantilla: tres normes clares, en positiu i amb exemple, i una icona per a cada una. Després, cada grup llegeix el seu capítol i la resta proposa una millora. Ajunteu els capítols i feu la portada.|Cada grupo escribe su capítulo en la plantilla: tres normas claras, en positivo y con ejemplo, y un icono para cada una. Después, cada grupo lee su capítulo y el resto propone una mejora. Juntad los capítulos y haced la portada.",
          diu: ["La norma diu què fer? Té un exemple?|¿La norma dice qué hacer? ¿Tiene un ejemplo?",
            "Hi ha cap norma repetida entre capítols?|¿Hay alguna norma repetida entre capítulos?",
            "Quin títol posem a la portada?|¿Qué título ponemos en la portada?"],
          slides: ['s9', 's10', 's11', 's12'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups (un capítol per grup)|Grupos (un capítulo por grupo)" },
        { min: 5, t: "Lectura del manual|Lectura del manual", fase: 'crea',
          fa: "Llegiu el manual sencer en veu alta (una norma per grup). Voteu si el penjareu a la classe i el compartireu amb les famílies.|Leed el manual entero en voz alta (una norma por grupo). Votad si lo colgaréis en la clase y lo compartiréis con las familias.",
          diu: ["Quina norma d'un altre grup us ha agradat més?|¿Qué norma de otro grupo os ha gustado más?",
            "Hi falta algun tema?|¿Falta algún tema?",
            "On el penjarem?|¿Dónde lo colgaremos?"],
          slides: ['s13'], app: "Cap: lectura en veu alta.|Ninguna: lectura en voz alta.", org: "Tot el grup|Todo el grupo" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu la unitat amb el resum. Tiquet de sortida, preguntes finals i com s'han sentit. Explica que s'enduran una còpia del manual per llegir-la en família.|Repasad la unidad con el resumen. Ticket de salida, preguntas finales y cómo se han sentido. Explica que se llevarán una copia del manual para leerla en familia.",
          diu: ["Digueu una norma del manual i per què és important.|Decid una norma del manual y por qué es importante.",
            "Què us ha costat més de pactar?|¿Qué os ha costado más de pactar?",
            "A qui ensenyareu el manual?|¿A quién enseñaréis el manual?"],
          slides: ['s14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Escriu normes només en negatiu («No…»).|Escribe normas solo en negativo («No…»).",
          "Proposa començar amb un verb que digui què fer: «Comprova…», «Escriu…», «Pregunta…».|Propón empezar con un verbo que diga qué hacer: «Comprueba…», «Escribe…», «Pregunta…»."],
        ["Escriu normes massa generals («Fes-la servir bé»).|Escribe normas demasiado generales («Úsala bien»).",
          "Pregunta: «Què vol dir “bé”? Dona'm un exemple». L'exemple fa la norma clara.|Pregunta: «¿Qué quiere decir “bien”? Dame un ejemplo». El ejemplo hace la norma clara."],
        ["Vol prohibir la IA del tot.|Quiere prohibir la IA del todo.",
          "Recorda que el manual és per fer-la servir amb cap: quan sí, quan no i com.|Recuerda que el manual es para usarla con cabeza: cuándo sí, cuándo no y cómo."],
        ["En el debat, desqualifica les idees dels altres.|En el debate, descalifica las ideas de los demás.",
          "Recorda el debat amb l'Iu: no hi estic d'acord perquè… i proposo…|Recuerda el debate con Iu: no estoy de acuerdo porque… y propongo…"],
        ["Barreja normes de capítols diferents.|Mezcla normas de capítulos diferentes.",
          "Torna a la classificació de l'app: cada norma va al capítol del seu tema. Si n'hi ha de dobles, trieu-ne un.|Vuelve a la clasificación de la app: cada norma va al capítulo de su tema. Si las hay dobles, elegid uno."]
      ],
      diff: {
        mes: "Per anar més enllà: escriure la versió del manual per a les famílies (més curta) o per als alumnes de 1r (amb dibuixos); afegir un capítol 7 «Quan la IA ens ajuda a crear».|Para ir más allá: escribir la versión del manual para las familias (más corta) o para los alumnos de 1.º (con dibujos); añadir un capítulo 7 «Cuando la IA nos ayuda a crear».",
        menys: "Donar normes ja escrites per triar-ne tres i il·lustrar-les. A l'app, fer en parella el debat amb l'Iu.|Dar normas ya escritas para elegir tres e ilustrarlas. En la app, hacer en pareja el debate con Iu."
      },
      aval: {
        ticket: ["Digues una norma del manual i per què és important.|Di una norma del manual y por qué es importante.",
          "Digues com has defensat una idea sense ferir ningú.|Di cómo has defendido una idea sin herir a nadie."],
        rubric: [
          ["Normes clares|Normas claras", "Les normes del capítol són clares, en positiu i amb exemple.|Las normas del capítulo son claras, en positivo y con ejemplo.", "Les normes són vagues o només en negatiu.|Las normas son vagas o solo en negativo."],
          ["Contingut de la unitat|Contenido de la unidad", "Les normes recullen el que s'ha après (preguntar, comprovar, dades, respecte, edats).|Las normas recogen lo aprendido (preguntar, comprobar, datos, respeto, edades).", "Hi falten idees clau.|Faltan ideas clave."],
          ["Treball en grup i debat|Trabajo en grupo y debate", "Pacta amb el grup i argumenta amb respecte.|Pacta con el grupo y argumenta con respeto.", "Li costa escoltar o acceptar altres idees.|Le cuesta escuchar o aceptar otras ideas."]
        ]
      },
      casa: "A casa, l'infant portarà una còpia del manual de la IA de la classe. Llegiu-lo en família i comenteu quines normes ja feu i quines us agradaria adoptar a casa (per exemple, «Si una IA ens ajuda, ho diem» o «Les dades personals, fora»). Si feu servir assistents o xats d'IA, podeu afegir-hi una norma vostra.|En casa, el niño o la niña llevará una copia del manual de la IA de la clase. Leedlo en familia y comentad qué normas ya cumplís y cuáles os gustaría adoptar en casa (por ejemplo, «Si una IA nos ayuda, lo decimos» o «Los datos personales, fuera»). Si usáis asistentes o chats de IA, podéis añadir una norma vuestra.",
      faq: [
        ["I si l'escola ja té normes sobre la IA?|¿Y si el colegio ya tiene normas sobre la IA?", "Perfecte: incorporeu-les al manual i expliqueu-les amb les paraules de l'alumnat. El manual de la classe no ha de contradir les normes del centre.|Perfecto: incorporadlas al manual y explicadlas con las palabras del alumnado. El manual de la clase no debe contradecir las normas del centro."],
        ["Quants capítols ha de fer cada grup?|¿Cuántos capítulos tiene que hacer cada grupo?", "Un per grup és l'ideal. Si sou pocs, ajunteu capítols (per exemple, «Preguntar i comprovar»).|Uno por grupo es lo ideal. Si sois pocos, juntad capítulos (por ejemplo, «Preguntar y comprobar»)."],
        ["Com s'avalua el projecte?|¿Cómo se evalúa el proyecto?", "Amb la rúbrica (normes clares, contingut, treball en grup) i les respostes desades al pas «Crea».|Con la rúbrica (normas claras, contenido, trabajo en grupo) y las respuestas guardadas en el paso «Crea»."],
        ["Es pot compartir el manual amb les famílies?|¿Se puede compartir el manual con las familias?", "Sí, és una bona manera d'obrir la conversa a casa. Comproveu que no hi surtin noms ni fotos de l'alumnat.|Sí, es una buena manera de abrir la conversación en casa. Comprobad que no salgan nombres ni fotos del alumnado."]
      ],
      tec: [
        ["Al pas «Crea» hi ha sis preguntes i no es pot desar.|En el paso «Crear» hay seis preguntas y no se puede guardar.", "Cal respondre totes sis (els punts de dalt); el botó «Desa» s'activa al final.|Hay que responder las seis (los puntos de arriba); el botón «Guardar» se activa al final."],
        ["Al mòbil, els quatre calaixos de capítols no hi caben al costat.|En el móvil, las cuatro cajas de capítulos no caben al lado.", "És normal: la targeta surt a dalt i es toca el calaix.|Es normal: la tarjeta sale arriba y se toca la caja."],
        ["A l'esborrany toquen la norma 1 i no passa res.|En el borrador tocan la norma 1 y no pasa nada.", "És correcte: les normes 1 i 4 ja estan bé.|Es correcto: las normas 1 y 4 ya están bien."]
      ],
      seg: [
        "El manual no ha de portar noms, fotos ni exemples reals que identifiquin ningú.|El manual no debe llevar nombres, fotos ni ejemplos reales que identifiquen a nadie.",
        "En el debat, vetlla perquè totes les veus s'escoltin i ningú no se senti ridiculitzat.|En el debate, vela por que todas las voces se escuchen y nadie se sienta ridiculizado.",
        "Si surt alguna experiència personal amb una IA que hagi fet mal, escolta-la en privat i segueix el protocol del centre.|Si sale alguna experiencia personal con una IA que haya hecho daño, escúchala en privado y sigue el protocolo del centro."
      ],
      extra: [
        "Llengua: convertir el manual en un còmic o en un cartell per a l'entrada de la classe.|Lengua: convertir el manual en un cómic o en un cartel para la entrada de la clase.",
        "Plàstica: dissenyar icones per a cada capítol.|Plástica: diseñar iconos para cada capítulo.",
        "Per als grans: comparar el manual amb normes reals sobre IA d'altres llocs (amb ajuda del docent) i veure què tenen en comú.|Para los mayores: comparar el manual con normas reales sobre IA de otros lugares (con ayuda del docente) y ver qué tienen en común."
      ],
      trans: [
        "Sessions d5-1 a d5-3: cada capítol recull una sessió de la unitat.|Sesiones d5-1 a d5-3: cada capítulo recoge una sesión de la unidad.",
        "Sessió d6-1: comença la unitat 6, consumidors digitals: la publicitat amagada.|Sesión d6-1: empieza la unidad 6, consumidores digitales: la publicidad escondida.",
        "Llengua (normes i argumentació), plàstica (icones) i tutoria (pactar normes).|Lengua (normas y argumentación), plástica (iconos) y tutoría (pactar normas)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "El manual de la IA de la classe|El manual de la IA de la clase", x: "Normes clares per fer-la servir amb cap.|Normas claras para usarla con cabeza.",
          nota: "Projecte final de la unitat 5.|Proyecto final de la unidad 5." },
        { id: 's2', k: 'repas', t: "Què hem après a la unitat 5?|¿Qué hemos aprendido en la unidad 5?",
          punts: ["Preguntar bé i revisar el que diu.|Preguntar bien y revisar lo que dice.", "Verificar imatges i respectar les persones.|Verificar imágenes y respetar a las personas.", "Què aprèn la IA de nosaltres.|Qué aprende la IA de nosotros."],
          nota: "Que cada grup digui una idea de cada sessió.|Que cada grupo diga una idea de cada sesión." },
        { id: 's3', k: 'anim', t: "Sis capítols|Seis capítulos", anim: 'd5manual', x: "Preguntar bé, comprovar, honestedat, dades, imatges i respecte, edats i permisos.|Preguntar bien, comprobar, honestidad, datos, imágenes y respeto, edades y permisos.",
          nota: "Assigna els capítols als grups.|Asigna los capítulos a los grupos." },
        { id: 's4', k: 'concepte', t: "Una bona norma|Una buena norma", pic: 'img/ment/lli.webp',
          punts: ["Clara: diu què fer.|Clara: dice qué hacer.", "En positiu.|En positivo.", "Amb un exemple.|Con un ejemplo."],
          nota: "Transformeu junts «No facis el ximple amb la IA».|Transformad juntos «No hagas el tonto con la IA»." },
        { id: 's5', k: 'anim', t: "Quan no|Cuándo no", anim: 'd5quanno', x: "Emocions, problemes, decisions i aprendre a fer-ho tu.|Emociones, problemas, decisiones y aprender a hacerlo tú.",
          nota: "Aquest «quan no» també ha de sortir al manual.|Este «cuándo no» también debe salir en el manual." },
        { id: 's6', k: 'media', t: "L'esborrany d'en Pau|El borrador de Pau", x: "Quines normes cal millorar?|¿Qué normas hay que mejorar?", media: ESBORRANY,
          nota: "Les normes 1 i 4 estan bé; la 2, la 3 i la 5 s'han de reescriure.|Las normas 1 y 4 están bien; la 2, la 3 y la 5 se tienen que reescribir." },
        { id: 's7', k: 'activitat', t: "A l'ordinador: el manual|En el ordenador: el manual", timer: 20,
          punts: ["Classifica normes per capítols.|Clasifica normas por capítulos.", "Revisa l'esborrany i debat amb l'Iu.|Revisa el borrador y debate con Iu.", "Tria la norma principal de cada capítol.|Elige la norma principal de cada capítulo."],
          nota: "Fes la pausa activa amb tot el grup quan hi arribin.|Haz la pausa activa con todo el grupo cuando lleguen." },
        { id: 's8', k: 'repte', t: "Discrepar sense ferir|Discrepar sin herir", timer: 2,
          punts: ["No hi estic d'acord perquè…|No estoy de acuerdo porque…", "…i proposo…|…y propongo…", "Escolto la resposta.|Escucho la respuesta."],
          nota: "Recupera el debat amb l'Iu com a model.|Recupera el debate con Iu como modelo." },
        { id: 's9', k: 'activitat', t: "Escriviu el vostre capítol|Escribid vuestro capítulo", timer: 10,
          punts: ["Tres normes clares, en positiu i amb exemple.|Tres normas claras, en positivo y con ejemplo.", "Una icona per a cada norma.|Un icono para cada norma.", "Reviseu-les en grup.|Revisadlas en grupo."],
          nota: "Passa pels grups i demana exemples.|Pasa por los grupos y pide ejemplos." },
        { id: 's10', k: 'activitat', t: "Lectura i millores|Lectura y mejoras", timer: 5,
          punts: ["Cada grup llegeix el seu capítol.|Cada grupo lee su capítulo.", "La resta proposa una millora.|El resto propone una mejora.", "Primer, el que funciona.|Primero, lo que funciona."],
          nota: "Controla el temps: un minut per grup.|Controla el tiempo: un minuto por grupo." },
        { id: 's11', k: 'activitat', t: "La portada|La portada", timer: 2,
          punts: ["Un títol per a tothom.|Un título para todo el mundo.", "Els noms de la classe (sense cognoms).|Los nombres de la clase (sin apellidos).", "Una imatge feta per vosaltres.|Una imagen hecha por vosotros."],
          nota: "Pot fer-la un grup que acabi abans.|Puede hacerla un grupo que termine antes." },
        { id: 's12', k: 'concepte', t: "Per a qui és el manual?|¿Para quién es el manual?", pic: 'img/ment/ref.webp',
          punts: ["Per a l'alumnat.|Para el alumnado.", "Per als mestres.|Para los maestros.", "Per a les famílies.|Para las familias."],
          nota: "Deixa-la projectada mentre escriuen.|Déjala proyectada mientras escriben." },
        { id: 's13', k: 'resum', t: "El nostre manual|Nuestro manual",
          punts: ["Preguntar bé i comprovar.|Preguntar bien y comprobar.", "Honestedat i dades fora.|Honestidad y datos fuera.", "Respecte a les imatges.|Respeto a las imágenes.", "Edats i permís de la família.|Edades y permiso de la familia."],
          nota: "Llegiu el manual sencer en veu alta.|Leed el manual entero en voz alta." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Una norma del manual i per què és important.|Una norma del manual y por qué es importante.", "Com has defensat una idea sense ferir ningú?|¿Cómo has defendido una idea sin herir a nadie?"],
          nota: "Pot ser oral, per torns.|Puede ser oral, por turnos." },
        { id: 's15', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["Llegiu el manual en família.|Leed el manual en familia.", "Quines normes ja feu?|¿Qué normas ya cumplís?", "Afegiu-hi una norma de casa.|Añadid una norma de casa."],
          nota: "Lliura les còpies del manual.|Entrega las copias del manual." }
      ],
      print: [
        { id: 'p1', t: "Plantilla del capítol|Plantilla del capítulo", k: 'fitxa',
          intro: "Una per grup. Escriviu el vostre capítol del manual de la IA de la classe.|Una por grupo. Escribid vuestro capítulo del manual de la IA de la clase.",
          items: [
            { q: "Capítol (número i títol):|Capítulo (número y título):", sol: "Per exemple: «4. Dades».|Por ejemplo: «4. Datos»." },
            { q: "Norma 1 (clara, en positiu) i exemple:|Norma 1 (clara, en positivo) y ejemplo:", big: true, sol: "Per exemple: «Escriu el tema, no qui ets. Exemple: “Per a 5è, explica els rius”, no “Soc la Laia Puig de…”».|Por ejemplo: «Escribe el tema, no quién eres. Ejemplo: “Para 5.º, explica los ríos”, no “Soy Laia Puig de…”»." },
            { q: "Norma 2 i exemple:|Norma 2 y ejemplo:", big: true, sol: "Per exemple: «Les fotos, només teves i amb permís de la família».|Por ejemplo: «Las fotos, solo tuyas y con permiso de la familia»." },
            { q: "Norma 3 i exemple:|Norma 3 y ejemplo:", big: true, sol: "Per exemple: «Els secrets i les preocupacions, a persones de confiança».|Por ejemplo: «Los secretos y las preocupaciones, a personas de confianza»." },
            { q: "Les icones del capítol (dibuixeu-les):|Los iconos del capítulo (dibujadlos):", sol: "Resposta oberta.|Respuesta abierta." }
          ] }
      ]
    }
  });
}
