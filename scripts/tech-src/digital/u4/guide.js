/* Tech Digital · unitat 4 «Ciberseguretat» · guia del professorat (d4-1 … d4-4)
   Material propi de Numi. Classe de 60 minuts; tots els exemples (Vilabit, Paquets Exprés, CalcuBit, FiltreMàgic, Galàxia
   Blocs…) són inventats. Ciberseguretat sense por: els enganys estan fets per enganyar tothom, també els adults; el missatge
   és «atura't, comprova-ho per un altre camí i explica-ho». Mai no es demanen ni es miren dispositius o comptes reals dels
   infants a classe. Si algú explica que ha caigut en un engany, s'escolta sense renyar i s'avisa la família. */
{
  // les demos de les diapositives (els mateixos artefactes de l'app, sense pistes clicables)
  const SMS = { k: 'dig', kind: 'sms', from: 'Paquets Exprés|Paquetes Exprés', av: '📦', html: `El teu paquet no s'ha pogut entregar. Si no pagues avui, es retornarà. Paga 1,99 € de despeses a paquets-expres.entrega-ara.xyz|Tu paquete no se ha podido entregar. Si no pagas hoy, se devolverá. Paga 1,99 € de gastos en paquetes-expres.entrega-ya.xyz` };
  const PAU = { k: 'dig', kind: 'chat', from: 'Número desconegut|Número desconocido', av: '📱', html: `<div class="dm them">Ei! Soc en Pau 🦊 He canviat de número</div><div class="dm them">T'arribarà un codi al mòbil per error. Me'l passes? És urgent!</div>|<div class="dm them">¡Ey! Soy Pau 🦊 He cambiado de número</div><div class="dm them">Te llegará un código al móvil por error. ¿Me lo pasas? ¡Es urgente!</div>` };
  const SUPORT = { k: 'dig', kind: 'game', from: 'Galàxia Blocs · missatges|Galàxia Blocs · mensajes', av: '🪐', html: `<p><b>🛠️ Suport_0ficial_GB</b></p><p>El teu compte serà esborrat en 30 minuts. Per salvar-lo, escriu aquí l'usuari, la contrasenya i el codi que t'arribarà. I de regal, 2.000 gemmes 💎!</p>|<p><b>🛠️ Soporte_0ficial_GB</b></p><p>Tu cuenta será borrada en 30 minutos. Para salvarla, escribe aquí el usuario, la contraseña y el código que te llegará. ¡Y de regalo, 2.000 gemas 💎!</p>` };
  const CALCU = { k: 'dig', kind: 'web', url: "Botiga d'apps · CalcuBit|Tienda de apps · CalcuBit", html: `<p><b>🧮 CalcuBit</b> · Calculadora</p><p>Aquesta app vol:</p><p>➗ Fer càlculs · 📍 Saber on ets sempre · 🎙️ Fer servir el micròfon · 👥 Llegir els contactes · 🖼️ Veure totes les fotos</p>|<p><b>🧮 CalcuBit</b> · Calculadora</p><p>Esta app quiere:</p><p>➗ Hacer cálculos · 📍 Saber dónde estás siempre · 🎙️ Usar el micrófono · 👥 Leer los contactos · 🖼️ Ver todas las fotos</p>` };
  const WIFI = { k: 'dig', kind: 'web', url: 'Configuració · Wifi|Configuración · Wifi', html: `<p><b>📶 Xarxes disponibles</b></p><p>🔒 Biblioteca_Vilabit</p><p>🔓 Biblioteca_Vilabit_FREE</p><p>🔓 WIFI_GRATIS_SUPER_RAPIDA</p><p>🔒 Bib1ioteca_Vilabit</p>|<p><b>📶 Redes disponibles</b></p><p>🔒 Biblioteca_Vilabit</p><p>🔓 Biblioteca_Vilabit_FREE</p><p>🔓 WIFI_GRATIS_SUPER_RAPIDA</p><p>🔒 Bib1ioteca_Vilabit</p>` };
  const VIRUS = { k: 'dig', kind: 'web', url: 'super-netejador-gratis.xyz|super-limpiador-gratis.xyz', html: `<div style="background:#FDEBEB;border:3px solid #EF5A5A;border-radius:12px;padding:10px;text-align:center"><b>⚠️ ALERTA! El teu dispositiu té 5 VIRUS!</b><br>Descarrega ara el netejador per salvar les fotos!</div>|<div style="background:#FDEBEB;border:3px solid #EF5A5A;border-radius:12px;padding:10px;text-align:center"><b>⚠️ ¡ALERTA! ¡Tu dispositivo tiene 5 VIRUS!</b><br>¡Descarga ahora el limpiador para salvar las fotos!</div>` };
  const MAIL = { k: 'dig', kind: 'mail', from: 'premis@ga1axia-blocs.xyz|premios@ga1axia-blocs.xyz', subj: '🎁 Últim avís: el premi caduca en 10 minuts!|🎁 ¡Último aviso: el premio caduca en 10 minutos!', html: `<p>Has estat triat/da per rebre el drac daurat i 10.000 gemmes gratis. Escriu l'usuari, la contrasenya i el codi a l'enllaç.</p>|<p>Has sido elegido/a para recibir el dragón dorado y 10.000 gemas gratis. Escribe el usuario, la contraseña y el código en el enlace.</p>` };

  Object.assign(TGUIDE, {

    /* ---------- Sessió 1 · Missatges trampa ---------- */
    'd4-1': {
      intro: "Primera sessió de la unitat 4, dedicada a la ciberseguretat. L'alumnat ja va conèixer el phishing a la unitat 2; ara descobreix les disfresses més habituals dels missatges trampa (SMS de paquets que no arriben, premis, «amics» amb un número nou, fals suport d'un videojoc) i, sobretot, practica què cal fer: aturar-se, comprovar-ho per un altre camí, explicar-ho a un adult i denunciar. També treballa què fer si ja s'ha caigut, sense culpa. La classe combina una activitat de classificar missatges en paper, la conversa i les simulacions de l'app.|Primera sesión de la unidad 4, dedicada a la ciberseguridad. El alumnado ya conoció el phishing en la unidad 2; ahora descubre los disfraces más habituales de los mensajes trampa (SMS de paquetes que no llegan, premios, «amigos» con un número nuevo, falso soporte de un videojuego) y, sobre todo, practica qué hay que hacer: pararse, comprobarlo por otro camino, contárselo a un adulto y denunciar. También trabaja qué hacer si ya se ha caído, sin culpa. La clase combina una actividad de clasificar mensajes en papel, la conversación y las simulaciones de la app.",
      claus: [
        "Els missatges trampa canvien de disfressa (paquet, premi, amic, suport), però sempre busquen que actuem de pressa.|Los mensajes trampa cambian de disfraz (paquete, premio, amigo, soporte), pero siempre buscan que actuemos deprisa.",
        "Ningú de veritat no demana per missatge la contrasenya, el codi de verificació ni pagar per rebre un premi.|Nadie de verdad pide por mensaje la contraseña, el código de verificación ni pagar para recibir un premio.",
        "Comprovar «per un altre camí» vol dir no fer servir res del missatge: l'app o la web de sempre, una trucada, preguntar en persona.|Comprobar «por otro camino» quiere decir no usar nada del mensaje: la app o la web de siempre, una llamada, preguntar en persona.",
        "Si ja s'ha caigut, no és culpa de l'infant: explicar-ho de seguida, canviar la contrasenya i activar els dos passos.|Si ya se ha caído, no es culpa del niño o la niña: contarlo enseguida, cambiar la contraseña y activar los dos pasos."
      ],
      prev: [
        "Sessió d1-1: la contrasenya i la verificació en dos passos.|Sesión d1-1: la contraseña y la verificación en dos pasos.",
        "Sessió d2-1: el phishing i les seves pistes (premis, presses, por).|Sesión d2-1: el phishing y sus pistas (premios, prisas, miedo)."
      ],
      obj: [
        "L'alumne/a reconeix les disfresses habituals dels missatges trampa: paquets, premis, suplantació i fals suport.|El alumno/a reconoce los disfraces habituales de los mensajes trampa: paquetes, premios, suplantación y falso soporte.",
        "L'alumne/a troba pistes d'engany en un SMS i en un missatge dins d'un videojoc.|El alumno/a encuentra pistas de engaño en un SMS y en un mensaje dentro de un videojuego.",
        "L'alumne/a explica què vol dir comprovar-ho per un altre camí i ho aplica en una conversa simulada.|El alumno/a explica qué quiere decir comprobarlo por otro camino y lo aplica en una conversación simulada.",
        "L'alumne/a ordena què cal fer si ja ha caigut en un engany, sense culpa.|El alumno/a ordena qué hay que hacer si ya ha caído en un engaño, sin culpa."
      ],
      comp: [
        "Competència digital (CD4): protecció de dispositius, dades personals i privadesa|Competencia digital (CD4): protección de dispositivos, datos personales y privacidad",
        "Competència personal, social i d'aprendre a aprendre: pensament crític i demanar ajuda|Competencia personal, social y de aprender a aprender: pensamiento crítico y pedir ayuda",
        "Competència en comunicació lingüística: llegir amb atenció i detectar intencions|Competencia en comunicación lingüística: leer con atención y detectar intenciones"
      ],
      vocab: [
        ["Estafa|Estafa", "Engany per treure diners o dades a una persona.|Engaño para sacar dinero o datos a una persona."],
        ["Smishing|Smishing", "Missatge trampa que arriba per SMS.|Mensaje trampa que llega por SMS."],
        ["Suplantar|Suplantar", "Fer-se passar per una altra persona o empresa.|Hacerse pasar por otra persona o empresa."],
        ["Esquer|Cebo", "El que fa servir l'engany per atraure't: un premi, una por, una urgència.|Lo que usa el engaño para atraerte: un premio, un miedo, una urgencia."],
        ["Codi de verificació|Código de verificación", "Números que arriben al mòbil per entrar a un compte: el segon pany. No es donen mai.|Números que llegan al móvil para entrar en una cuenta: el segundo candado. No se dan nunca."],
        ["Denunciar|Denunciar", "Avisar l'app o el servei que un missatge o un compte fa enganys.|Avisar a la app o al servicio de que un mensaje o una cuenta hace engaños."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Missatges trampa»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Mensajes trampa»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Les targetes de missatges (un paquet per grup de 4) i retoladors de colors|Las tarjetas de mensajes (un paquete por grupo de 4) y rotuladores de colores"
        ],
        imprimir: ["Missatges per classificar (imprimible 1): un paquet per grup|Mensajes para clasificar (imprimible 1): un paquete por grupo", "Comprova-ho per un altre camí (imprimible 2): una per alumne/a|Compruébalo por otro camino (imprimible 2): una por alumno/a"],
        prep: [
          "Imprimir i retallar les targetes de missatges (12 per grup) i preparar tres rètols: «Trampa», «Normal» i «Ho comprovo».|Imprimir y recortar las tarjetas de mensajes (12 por grupo) y preparar tres carteles: «Trampa», «Normal» y «Lo compruebo».",
          "Pensar un exemple real (sense dades de ningú) d'un missatge trampa que us hagi arribat: ajuda a treure por i culpa.|Pensar un ejemplo real (sin datos de nadie) de un mensaje trampa que os haya llegado: ayuda a quitar miedo y culpa.",
          "Recordar que no es demana a ningú que ensenyi el seu mòbil ni els missatges reals de casa.|Recordar que no se pide a nadie que enseñe su móvil ni los mensajes reales de casa."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: missatges disfressats|Bienvenida: mensajes disfrazados", fase: 'inici',
          fa: "Presenta la unitat 4. Pregunta què recorden del phishing de la unitat 2 i si han vist mai un missatge estrany a casa (sense detalls personals). Explica la idea del dia: els enganys es disfressen, però el truc és sempre el mateix.|Presenta la unidad 4. Pregunta qué recuerdan del phishing de la unidad 2 y si han visto alguna vez un mensaje raro en casa (sin detalles personales). Explica la idea del día: los engaños se disfrazan, pero el truco es siempre el mismo.",
          diu: ["D'on venia la paraula phishing? (De pescar: volen pescar les nostres dades.)|¿De dónde venía la palabra phishing? (De pescar: quieren pescar nuestros datos.)",
            "De què es pot disfressar un missatge trampa?|¿De qué se puede disfrazar un mensaje trampa?",
            "Avui aprendrem què fer, pas a pas, i que mai no és culpa nostra si ens enganyen.|Hoy aprenderemos qué hacer, paso a paso, y que nunca es culpa nuestra si nos engañan."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Disfresses i els quatre passos|Disfraces y los cuatro pasos", fase: 'teoria',
          fa: "Amb l'animació de les disfresses, mostra que el truc és sempre la pressa. Projecta l'SMS del paquet, el xat de l'«amic» amb número nou i el missatge de fals suport, i fes que trobin les pistes en veu alta. Acaba amb els quatre passos.|Con la animación de los disfraces, muestra que el truco es siempre la prisa. Proyecta el SMS del paquete, el chat del «amigo» con número nuevo y el mensaje de falso soporte, y haz que encuentren las pistas en voz alta. Termina con los cuatro pasos.",
          diu: ["Si a casa ningú no espera cap paquet, què ens diu aquest SMS? (Que és un esquer.)|Si en casa nadie espera ningún paquete, ¿qué nos dice este SMS? (Que es un cebo.)",
            "Com ho podríeu comprovar sense fer servir res del missatge?|¿Cómo lo podríais comprobar sin usar nada del mensaje?",
            "Posar-se «Oficial» al nom, ho pot fer qualsevol? (Sí.)|Ponerse «Oficial» en el nombre, ¿lo puede hacer cualquiera? (Sí.)"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Trampa, normal o ho comprovo?|¿Trampa, normal o lo compruebo?", fase: 'desconnectat',
          fa: "En grups de 4, reparteix les targetes de missatges. Les classifiquen en tres piles: «Trampa», «Normal» i «Ho comprovo». A les trampes, subratllen les pistes; a les de «Ho comprovo», escriuen quin seria l'altre camí (trucar, obrir l'app de sempre, preguntar a casa). Posada en comú de dues targetes per grup.|En grupos de 4, reparte las tarjetas de mensajes. Las clasifican en tres montones: «Trampa», «Normal» y «Lo compruebo». En las trampas, subrayan las pistas; en las de «Lo compruebo», escriben cuál sería el otro camino (llamar, abrir la app de siempre, preguntar en casa). Puesta en común de dos tarjetas por grupo.",
          diu: ["Quina targeta us ha fet dubtar? Per què?|¿Qué tarjeta os ha hecho dudar? ¿Por qué?",
            "Quin altre camí faríeu servir per comprovar el missatge de l'àvia?|¿Qué otro camino usaríais para comprobar el mensaje de la abuela?",
            "Hi ha cap missatge normal que demani la contrasenya? (No.)|¿Hay algún mensaje normal que pida la contraseña? (No.)"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: la pregunta de repàs, la història, les cinc targetes, classificar missatges, l'SMS del paquet, la pregunta de les presses i la conversa amb el número desconegut. Feu la pausa activa tots junts.|Cada alumno/a hace la sesión hasta la pausa activa: la pregunta de repaso, la historia, las cinco tarjetas, clasificar mensajes, el SMS del paquete, la pregunta de las prisas y la conversación con el número desconocido. Haced la pausa activa todos juntos.",
          diu: ["A la conversa, quin camí heu triat per comprovar si era en Pau?|En la conversación, ¿qué camino habéis elegido para comprobar si era Pau?",
            "Per què preguntar «com es diu el meu gos» no és prou bo?|¿Por qué preguntar «cómo se llama mi perro» no es suficiente?",
            "Ara, tots: fem de peixos que no es deixen pescar!|Ahora, todos: ¡hacemos de peces que no se dejan pescar!"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 10, t: "Reptes i el meu escut|Retos y mi escudo", fase: 'ordinador',
          fa: "Continuen amb els reptes: el fals suport, què fer si ja has caigut, què pot demanar una empresa i què mai, i com es comprova un premi. Després trien el seu escut antiham. Remarca que el repte «si ja has caigut» és el més important: explicar-ho aviat ho arregla.|Siguen con los retos: el falso soporte, qué hacer si ya has caído, qué puede pedir una empresa y qué nunca, y cómo se comprueba un premio. Después eligen su escudo antianzuelo. Remarca que el reto «si ya has caído» es el más importante: contarlo pronto lo arregla.",
          diu: ["Quin és el primer pas si ja has escrit la contrasenya en una web trampa?|¿Cuál es el primer paso si ya has escrito la contraseña en una web trampa?",
            "Per què un codi que has demanat tu és normal, però no el pots donar?|¿Por qué un código que has pedido tú es normal, pero no lo puedes dar?",
            "Quin pas del vostre escut us costarà més?|¿Qué paso de vuestro escudo os costará más?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: el meu escut antiham (i «El museu de les trampes», per a casa).|«Retos» y el paso «Crea»: mi escudo antianzuelo (y «El museo de las trampas», para casa).", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu les idees clau amb el resum. Fes el tiquet de sortida i que facin les preguntes finals i com s'han sentit. Explica la proposta per a casa: el museu de les trampes, sempre amb un adult i sense tocar enllaços.|Repasad las ideas clave con el resumen. Haz el ticket de salida y que hagan las preguntas finales y cómo se han sentido. Explica la propuesta para casa: el museo de las trampas, siempre con un adulto y sin tocar enlaces.",
          diu: ["Digueu una disfressa i la pista que la delata.|Decid un disfraz y la pista que lo delata.",
            "Què vol dir comprovar-ho per un altre camí?|¿Qué quiere decir comprobarlo por otro camino?",
            "Si us enganyen, de qui és la culpa? (De qui enganya. Ho expliquem.)|Si os engañan, ¿de quién es la culpa? (De quien engaña. Lo contamos.)"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que si el missatge ve d'un amic és segur.|Piensa que si el mensaje viene de un amigo es seguro.",
          "Recorda la suplantació: el número pot ser nou o el compte, robat. Si demana codis o diners, es comprova per un altre camí.|Recuerda la suplantación: el número puede ser nuevo o la cuenta, robada. Si pide códigos o dinero, se comprueba por otro camino."],
        ["Vol comprovar-ho responent al mateix missatge.|Quiere comprobarlo respondiendo al mismo mensaje.",
          "Si és un engany, et dirà que sí. L'altre camí no fa servir res del missatge: ni l'enllaç, ni el número, ni respondre.|Si es un engaño, te dirá que sí. El otro camino no usa nada del mensaje: ni el enlace, ni el número, ni responder."],
        ["Creu que un import petit (1,99 €) no pot ser una estafa.|Cree que un importe pequeño (1,99 €) no puede ser una estafa.",
          "L'import és l'esquer: el que volen són les dades de la targeta, que serveixen per a molt més.|El importe es el cebo: lo que quieren son los datos de la tarjeta, que sirven para mucho más."],
        ["Té por que el renyin si explica que ha tocat un enllaç.|Tiene miedo de que le riñan si cuenta que ha tocado un enlace.",
          "Repeteix que no és culpa seva i que explicar-ho aviat és el que ho arregla. Felicita qui ho explica.|Repite que no es culpa suya y que contarlo pronto es lo que lo arregla. Felicita a quien lo cuenta."],
        ["Pensa que «Oficial» o «Suport» al nom vol dir que és de veritat.|Piensa que «Oficial» o «Soporte» en el nombre quiere decir que es de verdad.",
          "Qualsevol es pot posar aquest nom. L'equip de veritat no demana mai la contrasenya per xat.|Cualquiera se puede poner ese nombre. El equipo de verdad no pide nunca la contraseña por chat."]
      ],
      diff: {
        mes: "Per anar més enllà: inventar un missatge trampa nou (en paper) amb quatre pistes amagades i intercanviar-lo amb un altre grup perquè les trobi; o escriure la resposta educada que faríeu a un amic que us diu «he canviat de número».|Para ir más allá: inventar un mensaje trampa nuevo (en papel) con cuatro pistas escondidas e intercambiarlo con otro grupo para que las encuentre; o escribir la respuesta educada que haríais a un amigo que os dice «he cambiado de número».",
        menys: "Classificar només en dues piles (trampa o normal) i treballar amb sis targetes. A l'app, fer els reptes en parella i llegir en veu alta els missatges abans de buscar les pistes.|Clasificar solo en dos montones (trampa o normal) y trabajar con seis tarjetas. En la app, hacer los retos en pareja y leer en voz alta los mensajes antes de buscar las pistas."
      },
      aval: {
        ticket: ["Digues una disfressa dels missatges trampa i una pista que la delata.|Di un disfraz de los mensajes trampa y una pista que lo delata.",
          "Digues què faries primer si ja haguessis escrit la contrasenya en una web trampa.|Di qué harías primero si ya hubieras escrito la contraseña en una web trampa."],
        rubric: [
          ["Detectar trampes|Detectar trampas", "Reconeix diverses disfresses i les pistes (presses, premis, demanar codis o pagar).|Reconoce varios disfraces y las pistas (prisas, premios, pedir códigos o pagar).", "En reconeix alguna amb ajuda.|Reconoce alguno con ayuda."],
          ["Comprovar|Comprobar", "Explica i aplica què vol dir comprovar-ho per un altre camí.|Explica y aplica qué quiere decir comprobarlo por otro camino.", "Vol comprovar-ho pel mateix missatge o enllaç.|Quiere comprobarlo por el mismo mensaje o enlace."],
          ["Demanar ajuda|Pedir ayuda", "Sap què fer si ha caigut i no se'n culpa: explicar-ho, canviar la contrasenya, dos passos.|Sabe qué hacer si ha caído y no se culpa: contarlo, cambiar la contraseña, dos pasos.", "Sap que cal explicar-ho, però no els passos següents.|Sabe que hay que contarlo, pero no los pasos siguientes."]
        ]
      },
      casa: "A casa, podeu fer junts «El museu de les trampes»: busqueu missatges estranys que hagin arribat als mòbils o als correus de la família, sense tocar cap enllaç, i apunteu de què es disfressen i quines pistes tenen. Després, esborreu-los i bloquegeu els números. També podeu acordar una norma familiar: «Cap codi ni contrasenya per missatge, mai».|En casa, podéis hacer juntos «El museo de las trampas»: buscad mensajes raros que hayan llegado a los móviles o a los correos de la familia, sin tocar ningún enlace, y apuntad de qué se disfrazan y qué pistas tienen. Después, borradlos y bloquead los números. También podéis acordar una norma familiar: «Ningún código ni contraseña por mensaje, nunca».",
      faq: [
        ["Els infants d'aquesta edat reben missatges trampa?|¿Los niños de esta edad reciben mensajes trampa?", "Sí: dins dels videojocs, als xats i als mòbils de casa que fan servir. Per això treballem la conducta (aturar-se i preguntar) més que no pas la tècnica.|Sí: dentro de los videojuegos, en los chats y en los móviles de casa que usan. Por eso trabajamos la conducta (pararse y preguntar) más que la técnica."],
        ["Què és exactament l'smishing?|¿Qué es exactamente el smishing?", "És el phishing que arriba per SMS (la paraula barreja SMS i phishing). Els exemples de paquets retinguts són dels més habituals.|Es el phishing que llega por SMS (la palabra mezcla SMS y phishing). Los ejemplos de paquetes retenidos son de los más habituales."],
        ["Un alumne diu que el seu germà gran va pagar un d'aquests missatges.|Un alumno dice que su hermano mayor pagó uno de estos mensajes.", "Agraeix que ho expliqui i recorda que li pot passar a qualsevol. La família pot trucar al banc i, si cal, al 017, el telèfon d'ajuda en ciberseguretat.|Agradece que lo cuente y recuerda que le puede pasar a cualquiera. La familia puede llamar al banco y, si hace falta, al 017, el teléfono de ayuda en ciberseguridad."],
        ["Per què insistim tant en «no és culpa teva»?|¿Por qué insistimos tanto en «no es culpa tuya»?", "Perquè la vergonya fa que els infants amaguin el que ha passat, i amagar-ho empitjora les coses. Si saben que no els renyarem, ho expliquen abans.|Porque la vergüenza hace que los niños escondan lo que ha pasado, y esconderlo empeora las cosas. Si saben que no les reñiremos, lo cuentan antes."]
      ],
      tec: [
        ["A l'SMS del paquet no troben la quarta pista.|En el SMS del paquete no encuentran la cuarta pista.", "Que toquin cada frase per separat: la primera («no s'ha pogut entregar») també és una pista, perquè ningú no espera cap paquet.|Que toquen cada frase por separado: la primera («no se ha podido entregar») también es una pista, porque nadie espera ningún paquete."],
        ["Volen tornar a la conversa per provar un altre camí.|Quieren volver a la conversación para probar otro camino.", "Poden tornar enrere amb la fletxa del pas o tornar a obrir la sessió: tots els camins acaben amb una idea per aprendre.|Pueden volver atrás con la flecha del paso o volver a abrir la sesión: todos los caminos terminan con una idea para aprender."],
        ["Al mòbil, les targetes de classificar surten d'una en una.|En el móvil, las tarjetas de clasificar salen de una en una.", "És normal: es poden arrossegar o tocar el calaix.|Es normal: se pueden arrastrar o tocar la caja."]
      ],
      seg: [
        "No demanis mai que ensenyin missatges reals ni números de telèfon de ningú.|No pidas nunca que enseñen mensajes reales ni números de teléfono de nadie.",
        "Si algun infant explica que ha donat una contrasenya o un codi, felicita'l per explicar-ho i avisa la família perquè la canviïn.|Si algún niño o niña cuenta que ha dado una contraseña o un código, felicítale por contarlo y avisa a la familia para que la cambien.",
        "Si apareix una situació de pressió o de xantatge (fotos, amenaces), escolta amb calma, no prometis guardar el secret i segueix el protocol del centre.|Si aparece una situación de presión o de chantaje (fotos, amenazas), escucha con calma, no prometas guardar el secreto y sigue el protocolo del centro."
      ],
      extra: [
        "Llengua: escriure un conte curt on un personatge descobreix un missatge trampa i fa els quatre passos.|Lengua: escribir un cuento corto donde un personaje descubre un mensaje trampa y hace los cuatro pasos.",
        "Plàstica: dibuixar el «carnet de disfresses» dels enganys, amb la pista de cada un.|Plástica: dibujar el «carné de disfraces» de los engaños, con la pista de cada uno.",
        "Per als grans: per què els estafadors canvien de disfressa segons l'època de l'any (rebaixes, vacances, Nadal)?|Para los mayores: ¿por qué los estafadores cambian de disfraz según la época del año (rebajas, vacaciones, Navidad)?"
      ],
      trans: [
        "Sessió d2-1: el phishing (premis, presses, por). Aquí, disfresses noves i què fer pas a pas.|Sesión d2-1: el phishing (premios, prisas, miedo). Aquí, disfraces nuevos y qué hacer paso a paso.",
        "Sessió d4-2: les apps també poden demanar més del que necessiten (els permisos). Sessió d4-4: la sala 1 de l'escape room és un correu trampa.|Sesión d4-2: las apps también pueden pedir más de lo que necesitan (los permisos). Sesión d4-4: la sala 1 de la escape room es un correo trampa.",
        "Llengua (llegir amb atenció i intencions), tutoria (demanar ajuda) i matemàtiques (imports i preus).|Lengua (leer con atención e intenciones), tutoría (pedir ayuda) y matemáticas (importes y precios)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Missatges trampa|Mensajes trampa", x: "Les disfresses dels enganys i què fer, pas a pas.|Los disfraces de los engaños y qué hacer, paso a paso.",
          nota: "Presenta la unitat 4: ciberseguretat. Avui, els missatges trampa.|Presenta la unidad 4: ciberseguridad. Hoy, los mensajes trampa." },
        { id: 's2', k: 'pregunta', t: "De què es disfressa un engany?|¿De qué se disfraza un engaño?", punts: ["Un paquet que no arriba…|Un paquete que no llega…", "Un premi que no has demanat…|Un premio que no has pedido…", "Un amic amb un número nou…|Un amigo con un número nuevo…"],
          nota: "Recull idees sense demanar missatges reals. Guarda-les per a l'activitat de classificar.|Recoge ideas sin pedir mensajes reales. Guárdalas para la actividad de clasificar." },
        { id: 's3', k: 'anim', t: "Les disfresses de l'engany|Los disfraces del engaño", anim: 'd4disfressa', x: "La disfressa canvia; el truc és sempre el mateix: de pressa.|El disfraz cambia; el truco es siempre el mismo: deprisa.",
          nota: "Insisteix que les presses són la pista més clara de totes.|Insiste en que las prisas son la pista más clara de todas." },
        { id: 's4', k: 'media', t: "Un SMS del paquet|Un SMS del paquete", x: "Ningú de casa no espera cap paquet. Quines pistes hi veieu?|Nadie en casa espera ningún paquete. ¿Qué pistas veis?", media: SMS,
          nota: "Pistes: no hi ha paquet, presses, un import petit i una adreça estranya. El que volen és la targeta.|Pistas: no hay paquete, prisas, un importe pequeño y una dirección rara. Lo que quieren es la tarjeta." },
        { id: 's5', k: 'media', t: "«He canviat de número»|«He cambiado de número»", x: "Com comprovaríeu que és en Pau de veritat?|¿Cómo comprobaríais que es Pau de verdad?", media: PAU,
          nota: "Resposta: escrivint o trucant al número de sempre, o preguntant-li a l'escola. Mai pel mateix xat.|Respuesta: escribiendo o llamando al número de siempre, o preguntándole en el cole. Nunca por el mismo chat." },
        { id: 's6', k: 'media', t: "El fals suport|El falso soporte", x: "«Oficial» amb un zero, por, contrasenya i regal.|«Oficial» con un cero, miedo, contraseña y regalo.", media: SUPORT,
          nota: "L'equip de veritat no demana mai la contrasenya per xat. El compte es mira des de l'app de sempre.|El equipo de verdad no pide nunca la contraseña por chat. La cuenta se mira desde la app de siempre." },
        { id: 's7', k: 'anim', t: "Els quatre passos|Los cuatro pasos", anim: 'd4passos', x: "Atura't, comprova-ho, explica-ho i denuncia.|Para, compruébalo, cuéntalo y denuncia.",
          nota: "Que els repeteixin amb gestos: mà alçada, lupa, boca, bandera.|Que los repitan con gestos: mano alzada, lupa, boca, bandera." },
        { id: 's8', k: 'activitat', t: "Trampa, normal o ho comprovo?|¿Trampa, normal o lo compruebo?", timer: 12,
          punts: ["Classifiqueu les targetes en tres piles.|Clasificad las tarjetas en tres montones.", "A les trampes, subratlleu les pistes.|En las trampas, subrayad las pistas.", "A «Ho comprovo», escriviu l'altre camí.|En «Lo compruebo», escribid el otro camino."],
          nota: "Passa per les taules i pregunta: «Què demana aquest missatge?».|Pasa por las mesas y pregunta: «¿Qué pide este mensaje?»." },
        { id: 's9', k: 'concepte', t: "L'altre camí|El otro camino", pic: 'img/ment/dir.webp',
          punts: ["L'app o la web de sempre.|La app o la web de siempre.", "Una trucada al número de sempre.|Una llamada al número de siempre.", "Preguntar en persona o a casa.|Preguntar en persona o en casa."],
          nota: "Deixa-la projectada mentre classifiquen.|Déjala proyectada mientras clasifican." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Missatges trampa».|Abre la sesión «Mensajes trampa».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "A la pausa, ens movem tots junts.|En la pausa, nos movemos todos juntos."],
          nota: "Avisa quan arribin a la pausa activa per fer-la amb tot el grup.|Avisa cuando lleguen a la pausa activa para hacerla con todo el grupo." },
        { id: 's11', k: 'repte', t: "Reptes: no em pesquen|Retos: no me pescan", timer: 8,
          punts: ["El fals suport del videojoc.|El falso soporte del videojuego.", "Si ja has caigut: què fas?|Si ya has caído: ¿qué haces?", "Què et pot demanar una empresa… i què mai.|Qué te puede pedir una empresa… y qué nunca."],
          nota: "Comenta el repte de «si ja has caigut»: és el més important de la sessió.|Comenta el reto de «si ya has caído»: es el más importante de la sesión." },
        { id: 's12', k: 'activitat', t: "Crea: el meu escut antiham|Crea: mi escudo antianzuelo", timer: 2,
          punts: ["Tria què faràs a cada moment.|Elige qué harás en cada momento.", "Desa el teu escut.|Guarda tu escudo.", "A casa: el museu de les trampes.|En casa: el museo de las trampas."],
          nota: "Que diguin en veu alta el pas que els costarà més.|Que digan en voz alta el paso que les costará más." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Els enganys es disfressen, però sempre tenen presses.|Los engaños se disfrazan, pero siempre tienen prisas.", "Contrasenya, codis i pagaments: mai per missatge.|Contraseña, códigos y pagos: nunca por mensaje.", "Es comprova per un altre camí.|Se comprueba por otro camino.", "Si has caigut, explica-ho: no és culpa teva.|Si has caído, cuéntalo: no es culpa tuya."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues una disfressa i la seva pista.|Di un disfraz y su pista.", "Què faries primer si ja haguessis caigut?|¿Qué harías primero si ya hubieras caído?"],
          nota: "Pot ser oral, per torns, o en un paper.|Puede ser oral, por turnos, o en un papel." },
        { id: 's15', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["El museu de les trampes, amb un adult.|El museo de las trampas, con un adulto.", "Sense tocar cap enllaç.|Sin tocar ningún enlace.", "Una norma: cap codi per missatge.|Una norma: ningún código por mensaje."],
          nota: "Recorda que és una proposta: cada família l'adapta.|Recuerda que es una propuesta: cada familia la adapta." }
      ],
      print: [
        { id: 'p1', t: "Missatges per classificar|Mensajes para clasificar", k: 'targetes',
          intro: "Un paquet per grup de 4. Retalleu les targetes i classifiqueu-les en tres piles: «Trampa», «Normal» i «Ho comprovo». Tots els missatges són inventats.|Un paquete por grupo de 4. Recortad las tarjetas y clasificadlas en tres montones: «Trampa», «Normal» y «Lo compruebo». Todos los mensajes son inventados.",
          items: [
            { t: "📦 «El teu paquet està retingut. Paga 1,99 € aquí: paquets-entrega.xyz»|📦 «Tu paquete está retenido. Paga 1,99 € aquí: paquetes-entrega.xyz»", n: 1 },
            { t: "🎁 «Has guanyat un mòbil! Escriu l'adreça i la contrasenya»|🎁 «¡Has ganado un móvil! Escribe la dirección y la contraseña»", n: 1 },
            { t: "👵 «Soc l'àvia amb un número nou. Envia'm el codi que t'arribarà»|👵 «Soy la abuela con un número nuevo. Envíame el código que te llegará»", n: 1 },
            { t: "🏫 «Demà, sortida al museu. Porteu l'esmorzar»|🏫 «Mañana, salida al museo. Traed el almuerzo»", n: 1 },
            { t: "🛠️ «Som el suport del videojoc: envia'ns la contrasenya»|🛠️ «Somos el soporte del videojuego: envíanos la contraseña»", n: 1 },
            { t: "⚽ «L'entrenament de dijous és a les 5»|⚽ «El entrenamiento del jueves es a las 5»", n: 1 },
            { t: "💎 «Generador de gemmes GRATIS: només cal el teu usuari i contrasenya»|💎 «Generador de gemas GRATIS: solo hace falta tu usuario y contraseña»", n: 1 },
            { t: "📚 «El llibre que vas reservar ja és a punt»|📚 «El libro que reservaste ya está listo»", n: 1 },
            { t: "🦊 Un amic: «Mira quin vídeo més divertit! 😂» i un enllaç estrany|🦊 Un amigo: «¡Mira qué vídeo más divertido! 😂» y un enlace raro", n: 1 },
            { t: "🎂 «La festa de la Mia és dissabte a les 5»|🎂 «La fiesta de Mia es el sábado a las 5»", n: 1 },
            { t: "⚠️ «El teu compte s'esborrarà en 1 hora si no entres aquí»|⚠️ «Tu cuenta se borrará en 1 hora si no entras aquí»", n: 1 },
            { t: "📱 «Has demanat entrar? El teu codi és 482913» (just després d'entrar tu)|📱 «¿Has pedido entrar? Tu código es 482913» (justo después de entrar tú)", n: 1 }
          ] },
        { id: 'p2', t: "Comprova-ho per un altre camí|Compruébalo por otro camino", k: 'fitxa',
          intro: "Per a cada missatge, escriu l'altre camí que faries servir per comprovar-lo.|Para cada mensaje, escribe el otro camino que usarías para comprobarlo.",
          items: [
            { q: "«Soc en Pau amb número nou. Passa'm el codi.»|«Soy Pau con número nuevo. Pásame el código.»", sol: "Escriure o trucar al número de sempre d'en Pau, o preguntar-li a l'escola.|Escribir o llamar al número de siempre de Pau, o preguntarle en el cole." },
            { q: "«El teu paquet està retingut. Paga aquí.»|«Tu paquete está retenido. Paga aquí.»", sol: "Preguntar a casa si s'espera cap paquet i, si cal, mirar-ho a l'app o la web de sempre.|Preguntar en casa si se espera algún paquete y, si hace falta, mirarlo en la app o la web de siempre." },
            { q: "«Som el suport del videojoc. El teu compte s'esborrarà.»|«Somos el soporte del videojuego. Tu cuenta se borrará.»", sol: "Obrir el videojoc pel camí de sempre amb un adult i mirar-hi el compte. No donar mai la contrasenya.|Abrir el videojuego por el camino de siempre con un adulto y mirar la cuenta. No dar nunca la contraseña." },
            { q: "Si ja has escrit la contrasenya en una web trampa, quins són els passos?|Si ya has escrito la contraseña en una web trampa, ¿cuáles son los pasos?", sol: "Explicar-ho a un adult, canviar la contrasenya des de l'app de sempre, activar els dos passos i avisar els amics.|Contarlo a un adulto, cambiar la contraseña desde la app de siempre, activar los dos pasos y avisar a los amigos." }
          ] }
      ]
    },

    /* ---------- Sessió 2 · Permisos de les apps ---------- */
    'd4-2': {
      intro: "Segona sessió de la unitat 4. L'alumnat descobreix què són els permisos de les apps (càmera, micròfon, ubicació, contactes, fotos), aprèn a fer-se la pregunta clau («per a què ho necessita aquesta app?»), coneix les opcions més petites («mentre faig servir l'app», «només aquesta vegada», només les fotos que trio) i sap que els permisos es poden treure a la configuració, amb un adult. També entén, sense alarmisme, per què algunes apps gratis demanen més dades de les que necessiten. L'activitat sense pantalla és una botiga d'apps de paper amb fitxes de permís.|Segunda sesión de la unidad 4. El alumnado descubre qué son los permisos de las apps (cámara, micrófono, ubicación, contactos, fotos), aprende a hacerse la pregunta clave («¿para qué lo necesita esta app?»), conoce las opciones más pequeñas («mientras uso la app», «solo esta vez», solo las fotos que elijo) y sabe que los permisos se pueden quitar en la configuración, con un adulto. También entiende, sin alarmismo, por qué algunas apps gratis piden más datos de los que necesitan. La actividad sin pantalla es una tienda de apps de papel con fichas de permiso.",
      claus: [
        "Un permís és una clau que deixem a una app per fer servir una part del dispositiu.|Un permiso es una llave que dejamos a una app para usar una parte del dispositivo.",
        "La pregunta clau: per a què ho necessita? Si no té sentit, no es permet.|La pregunta clave: ¿para qué lo necesita? Si no tiene sentido, no se permite.",
        "Triar l'opció més petita que serveixi: «mentre faig servir l'app», «només aquesta vegada», només les fotos triades.|Elegir la opción más pequeña que sirva: «mientras uso la app», «solo esta vez», solo las fotos elegidas.",
        "Els permisos es poden revisar i treure a la configuració, sempre amb un adult.|Los permisos se pueden revisar y quitar en la configuración, siempre con un adulto."
      ],
      prev: [
        "Sessió d1-2: les dades personals i la ubicació.|Sesión d1-2: los datos personales y la ubicación.",
        "Sessió d4-1: no donar mai codis ni contrasenyes per missatge.|Sesión d4-1: no dar nunca códigos ni contraseñas por mensaje."
      ],
      obj: [
        "L'alumne/a anomena els permisos més habituals i explica què permeten fer a una app.|El alumno/a nombra los permisos más habituales y explica qué permiten hacer a una app.",
        "L'alumne/a decideix si un permís té sentit segons el que fa l'app.|El alumno/a decide si un permiso tiene sentido según lo que hace la app.",
        "L'alumne/a tria entre «sempre», «mentre la faig servir» i «no permetre» amb criteri.|El alumno/a elige entre «siempre», «mientras la uso» y «no permitir» con criterio.",
        "L'alumne/a sap que els permisos es poden treure i ordena els passos per instal·lar una app amb seguretat.|El alumno/a sabe que los permisos se pueden quitar y ordena los pasos para instalar una app con seguridad."
      ],
      comp: [
        "Competència digital (CD4): protecció de dispositius, dades personals i privadesa|Competencia digital (CD4): protección de dispositivos, datos personales y privacidad",
        "Competència personal, social i d'aprendre a aprendre: prendre decisions argumentades|Competencia personal, social y de aprender a aprender: tomar decisiones argumentadas",
        "Competència ciutadana: drets sobre les pròpies dades i les dels altres|Competencia ciudadana: derechos sobre los propios datos y los de los demás"
      ],
      vocab: [
        ["Permís|Permiso", "Autorització perquè una app faci servir una part del dispositiu (càmera, micròfon, ubicació…).|Autorización para que una app use una parte del dispositivo (cámara, micrófono, ubicación…)."],
        ["Ubicació|Ubicación", "On és el dispositiu (i, per tant, on ets tu).|Dónde está el dispositivo (y, por tanto, dónde estás tú)."],
        ["Contactes|Contactos", "Els noms i números de les persones que tens guardades: són dades d'altres.|Los nombres y números de las personas que tienes guardadas: son datos de otros."],
        ["Configuració|Configuración", "L'app del dispositiu on es canvien les opcions, també els permisos.|La app del dispositivo donde se cambian las opciones, también los permisos."],
        ["Botiga oficial|Tienda oficial", "La botiga d'apps del dispositiu, d'on és més segur instal·lar-les.|La tienda de apps del dispositivo, de donde es más seguro instalarlas."],
        ["Desinstal·lar|Desinstalar", "Treure una app del dispositiu.|Quitar una app del dispositivo."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Permisos de les apps»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Permisos de las apps»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Les targetes de la botiga d'apps de paper (un paquet per grup de 4) i tisores|Las tarjetas de la tienda de apps de papel (un paquete por grupo de 4) y tijeras"
        ],
        imprimir: ["La botiga d'apps de paper (imprimible 1): un paquet per grup|La tienda de apps de papel (imprimible 1): un paquete por grupo"],
        prep: [
          "Imprimir i retallar les targetes: 6 apps i 18 fitxes de permís per grup (cada permís, repetit).|Imprimir y recortar las tarjetas: 6 apps y 18 fichas de permiso por grupo (cada permiso, repetido).",
          "Mirar a la configuració d'un dispositiu de l'escola on es troben els permisos, per poder-ho ensenyar si ho pregunten.|Mirar en la configuración de un dispositivo del centro dónde se encuentran los permisos, para poder enseñarlo si lo preguntan.",
          "No fer servir mai dispositius personals dels infants ni demanar-los quines apps tenen instal·lades.|No usar nunca dispositivos personales de los niños ni pedirles qué apps tienen instaladas."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: la calculadora xafardera|Bienvenida: la calculadora cotilla", fase: 'inici',
          fa: "Explica la història de CalcuBit, la calculadora que demana la ubicació, el micròfon i els contactes. Pregunta per què creuen que ho fa. Recull hipòtesis sense corregir-les encara.|Explica la historia de CalcuBit, la calculadora que pide la ubicación, el micrófono y los contactos. Pregunta por qué creen que lo hace. Recoge hipótesis sin corregirlas todavía.",
          diu: ["Per què una calculadora voldria saber on ets?|¿Por qué una calculadora querría saber dónde estás?",
            "Us ha sortit mai una finestra que demana «permís»?|¿Os ha salido alguna vez una ventana que pide «permiso»?",
            "Avui aprendrem a decidir quan dir que sí.|Hoy aprenderemos a decidir cuándo decir que sí."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Permisos, sentit i opcions|Permisos, sentido y opciones", fase: 'teoria',
          fa: "Amb l'animació de les claus, explica què és un permís. Després, amb la de «té sentit?», practiqueu la pregunta clau amb tres apps. Mostra el diàleg de permís i les opcions més petites, la pantalla de CalcuBit i explica, sense alarmisme, per què algunes apps volen dades.|Con la animación de las llaves, explica qué es un permiso. Después, con la de «¿tiene sentido?», practicad la pregunta clave con tres apps. Muestra el diálogo de permiso y las opciones más pequeñas, la pantalla de CalcuBit y explica, sin alarmismo, por qué algunas apps quieren datos.",
          diu: ["Per a què necessita la ubicació una app de mapes? I una calculadora?|¿Para qué necesita la ubicación una app de mapas? ¿Y una calculadora?",
            "Quina és l'opció més petita que serveix per a una app del temps?|¿Cuál es la opción más pequeña que sirve para una app del tiempo?",
            "Els contactes, de qui són les dades? (De les altres persones.)|Los contactos, ¿de quién son los datos? (De las otras personas.)"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "La botiga d'apps de paper|La tienda de apps de papel", fase: 'desconnectat',
          fa: "Cada grup rep 6 targetes d'app i fitxes de permís. Per a cada app, han de decidir quines fitxes li donen i amb quina opció (sempre, mentre la faig servir, no). Han de justificar cada «sí» amb una frase («per guiar-me pel carrer»). Posada en comú: dues apps per grup.|Cada grupo recibe 6 tarjetas de app y fichas de permiso. Para cada app, deben decidir qué fichas le dan y con qué opción (siempre, mientras la uso, no). Deben justificar cada «sí» con una frase («para guiarme por la calle»). Puesta en común: dos apps por grupo.",
          diu: ["Quina app s'ha quedat sense cap fitxa? Per què?|¿Qué app se ha quedado sin ninguna ficha? ¿Por qué?",
            "Heu fet servir mai «sempre»? Per a quina app tindria sentit?|¿Habéis usado alguna vez «siempre»? ¿Para qué app tendría sentido?",
            "Si dubteu, quina opció és la més prudent?|Si dudáis, ¿qué opción es la más prudente?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: les preguntes de repàs, la història, les cinc targetes, «té sentit?», la pantalla de CalcuBit, l'opció per als mapes i la conversa amb la Jana i FiltreMàgic. Pausa activa tots junts.|Cada alumno/a hace la sesión hasta la pausa activa: las preguntas de repaso, la historia, las cinco tarjetas, «¿tiene sentido?», la pantalla de CalcuBit, la opción para los mapas y la conversación con Jana y FiltreMàgic. Pausa activa todos juntos.",
          diu: ["Quins permisos de FiltreMàgic tenien sentit?|¿Qué permisos de FiltreMàgic tenían sentido?",
            "Què ha passat al camí de dir que sí a tot? Com s'arregla?|¿Qué ha pasado en el camino de decir que sí a todo? ¿Cómo se arregla?",
            "Ara, tots: toqueu-vos els ulls, les orelles, els peus i les mans!|Ahora, todos: ¡tocaos los ojos, las orejas, los pies y las manos!"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 10, t: "Reptes i les meves normes|Retos y mis normas", fase: 'ordinador',
          fa: "Continuen amb els reptes: l'opció d'ubicació per a cada app, per què les apps gratis volen dades, ordenar com s'instal·la una app i treure un permís antic. Després trien les seves normes de permisos.|Siguen con los retos: la opción de ubicación para cada app, por qué las apps gratis quieren datos, ordenar cómo se instala una app y quitar un permiso antiguo. Después eligen sus normas de permisos.",
          diu: ["Per què l'app per trobar el mòbil sí que pot tenir «sempre»?|¿Por qué la app para encontrar el móvil sí puede tener «siempre»?",
            "Quin és el primer pas abans d'instal·lar una app?|¿Cuál es el primer paso antes de instalar una app?",
            "Quina norma vostra proposareu a casa?|¿Qué norma vuestra propondréis en casa?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: les normes dels meus permisos (i «Inspecció de permisos», per a casa).|«Retos» y el paso «Crea»: las normas de mis permisos (y «Inspección de permisos», para casa).", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu les idees clau amb el resum. Fes el tiquet de sortida, les preguntes finals i com s'han sentit. Explica la inspecció de permisos per a casa, sempre amb un adult.|Repasad las ideas clave con el resumen. Haz el ticket de salida, las preguntas finales y cómo se han sentido. Explica la inspección de permisos para casa, siempre con un adulto.",
          diu: ["Quina pregunta us feu abans de dir que sí a un permís?|¿Qué pregunta os hacéis antes de decir que sí a un permiso?",
            "On es treuen els permisos?|¿Dónde se quitan los permisos?",
            "Amb qui ho fareu?|¿Con quién lo haréis?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que, si diu que no a un permís, l'app no funcionarà mai.|Piensa que, si dice que no a un permiso, la app no funcionará nunca.",
          "Moltes apps funcionen igual sense els permisos que no necessiten. I si en falta un d'útil, es pot donar després.|Muchas apps funcionan igual sin los permisos que no necesitan. Y si falta uno útil, se puede dar después."],
        ["Dona «sempre» a tot «per si de cas».|Da «siempre» a todo «por si acaso».",
          "Recorda l'opció més petita que serveixi: «sempre» és per a molt poques apps.|Recuerda la opción más pequeña que sirva: «siempre» es para muy pocas apps."],
        ["Creu que els contactes són dades seves.|Cree que los contactos son datos suyos.",
          "Són dades d'altres persones: donar-les a una app és decidir per elles.|Son datos de otras personas: darlos a una app es decidir por ellas."],
        ["Pensa que un permís, un cop donat, ja no es pot treure.|Piensa que un permiso, una vez dado, ya no se puede quitar.",
          "Mostra la targeta «Canviar d'opinió»: a la configuració es poden treure quan vulguis.|Muestra la tarjeta «Cambiar de opinión»: en la configuración se pueden quitar cuando quieras."],
        ["Vol prohibir totes les apps per seguretat.|Quiere prohibir todas las apps por seguridad.",
          "Les apps poden ser molt útils. La clau és decidir amb criteri i amb un adult, no dir que no a tot.|Las apps pueden ser muy útiles. La clave es decidir con criterio y con un adulto, no decir que no a todo."]
      ],
      diff: {
        mes: "Per anar més enllà: inventar una app (dibuixada) i escriure'n la fitxa de la botiga amb els permisos que necessita i per què; o comparar dues apps semblants (dues llanternes inventades) i triar la que demana menys.|Para ir más allá: inventar una app (dibujada) y escribir su ficha de la tienda con los permisos que necesita y por qué; o comparar dos apps parecidas (dos linternas inventadas) y elegir la que pide menos.",
        menys: "A la botiga de paper, treballar només amb tres apps i dues opcions (sí o no). A l'app, fer en parella el repte de les tres opcions d'ubicació.|En la tienda de papel, trabajar solo con tres apps y dos opciones (sí o no). En la app, hacer en pareja el reto de las tres opciones de ubicación."
      },
      aval: {
        ticket: ["Digues un permís que té sentit per a una app i un que no.|Di un permiso que tiene sentido para una app y uno que no.",
          "Digues on es treuen els permisos i amb qui.|Di dónde se quitan los permisos y con quién."],
        rubric: [
          ["Conèixer els permisos|Conocer los permisos", "Anomena els permisos habituals i explica què permeten.|Nombra los permisos habituales y explica qué permiten.", "N'anomena alguns sense explicar-los.|Nombra algunos sin explicarlos."],
          ["Decidir amb criteri|Decidir con criterio", "Justifica cada «sí» amb el que fa l'app i tria l'opció més petita.|Justifica cada «sí» con lo que hace la app y elige la opción más pequeña.", "Decideix sense justificar o tria sempre «sí» o sempre «no».|Decide sin justificar o elige siempre «sí» o siempre «no»."],
          ["Revisar i demanar ajuda|Revisar y pedir ayuda", "Sap que els permisos es treuen a la configuració, amb un adult.|Sabe que los permisos se quitan en la configuración, con un adulto.", "No sap que es poden canviar.|No sabe que se pueden cambiar."]
        ]
      },
      casa: "A casa, feu junts la «Inspecció de permisos»: obriu la configuració de la tauleta o del mòbil de la família, busqueu l'apartat de permisos o de privadesa, trieu tres apps i mireu quins permisos tenen. Per a cada un, pregunteu-vos «per a què ho necessita?» i traieu els que no tinguin sentit. Aprofiteu per desinstal·lar les apps que ja no feu servir.|En casa, haced juntos la «Inspección de permisos»: abrid la configuración de la tablet o del móvil de la familia, buscad el apartado de permisos o de privacidad, elegid tres apps y mirad qué permisos tienen. Para cada uno, preguntaos «¿para qué lo necesita?» y quitad los que no tengan sentido. Aprovechad para desinstalar las apps que ya no usáis.",
      faq: [
        ["Totes les apps pregunten els permisos?|¿Todas las apps preguntan los permisos?", "Als dispositius actuals, els permisos més delicats (ubicació, càmera, micròfon, contactes, fotos) es demanen quan l'app els vol fer servir. Altres coses s'accepten en instal·lar-la; per això convé mirar la fitxa de la botiga.|En los dispositivos actuales, los permisos más delicados (ubicación, cámara, micrófono, contactos, fotos) se piden cuando la app los quiere usar. Otras cosas se aceptan al instalarla; por eso conviene mirar la ficha de la tienda."],
        ["És veritat que les apps venen dades?|¿Es verdad que las apps venden datos?", "Algunes comparteixen dades amb altres empreses, sovint per a publicitat; ho diuen a la política de privadesa. No cal espantar-se: cal decidir què donem i revisar-ho.|Algunas comparten datos con otras empresas, a menudo para publicidad; lo dicen en la política de privacidad. No hay que asustarse: hay que decidir qué damos y revisarlo."],
        ["Un alumne diu que el seu mòbil no té aquestes opcions.|Un alumno dice que su móvil no tiene esas opciones.", "Cada dispositiu i versió és diferent. La idea és la mateixa: a la configuració hi ha un lloc per veure i canviar els permisos.|Cada dispositivo y versión es diferente. La idea es la misma: en la configuración hay un sitio para ver y cambiar los permisos."],
        ["Per què l'app per trobar el mòbil té «sempre»?|¿Por qué la app para encontrar el móvil tiene «siempre»?", "Perquè, si es perd, ha de poder dir on és encara que ningú no l'obri. És un dels pocs casos en què té sentit, i el configura un adult.|Porque, si se pierde, tiene que poder decir dónde está aunque nadie la abra. Es uno de los pocos casos en que tiene sentido, y lo configura un adulto."]
      ],
      tec: [
        ["A CalcuBit toquen «Fer càlculs» i no passa res.|En CalcuBit tocan «Hacer cálculos» y no pasa nada.", "És correcte: aquest permís sí que té sentit. Només són pistes els quatre que no en tenen.|Es correcto: ese permiso sí tiene sentido. Solo son pistas los cuatro que no lo tienen."],
        ["Al repte de les tres opcions, al mòbil, els calaixos surten un sota l'altre.|En el reto de las tres opciones, en el móvil, las cajas salen una debajo de otra.", "És normal: la targeta surt a dalt i es toca el calaix que toca.|Es normal: la tarjeta sale arriba y se toca la caja que corresponde."],
        ["Volen tornar a la conversa de la Jana per provar un altre camí.|Quieren volver a la conversación de Jana para probar otro camino.", "Poden tornar enrere amb la fletxa del pas: tots els camins acaben amb una idea per aprendre.|Pueden volver atrás con la flecha del paso: todos los caminos terminan con una idea para aprender."]
      ],
      seg: [
        "No demanis quines apps tenen instal·lades ni que ensenyin els seus dispositius.|No preguntes qué apps tienen instaladas ni que enseñen sus dispositivos.",
        "Si algun infant explica que una app li ha enviat missatges als contactes o fa coses estranyes, recomana que ho mirin a casa i, si cal, que la desinstal·lin.|Si algún niño o niña cuenta que una app ha enviado mensajes a sus contactos o hace cosas raras, recomienda que lo miren en casa y, si hace falta, que la desinstalen.",
        "Recorda que les edats mínimes de les apps són per protegir: no jutgis cap família, però no animis a saltar-les.|Recuerda que las edades mínimas de las apps son para proteger: no juzgues a ninguna familia, pero no animes a saltarlas."
      ],
      extra: [
        "Ciències: com sap el mòbil on és? (Senyals de satèl·lits, de les antenes i de les wifis properes.)|Ciencias: ¿cómo sabe el móvil dónde está? (Señales de satélites, de las antenas y de las wifis cercanas.)",
        "Plàstica: dissenyar la icona d'una app inventada i la seva fitxa de permisos.|Plástica: diseñar el icono de una app inventada y su ficha de permisos.",
        "Per als grans: debat «Si una app és gratis, com guanya diners?».|Para los mayores: debate «Si una app es gratis, ¿cómo gana dinero?»."
      ],
      trans: [
        "Sessió d1-2: les dades personals i la ubicació. Aquí, com les demanen les apps.|Sesión d1-2: los datos personales y la ubicación. Aquí, cómo los piden las apps.",
        "Sessió d4-3: més escuts per als dispositius (wifi, actualitzacions, còpies). Sessió d6-2: com guanyen diners les apps gratis.|Sesión d4-3: más escudos para los dispositivos (wifi, actualizaciones, copias). Sesión d6-2: cómo ganan dinero las apps gratis.",
        "Ciències (localització), tutoria (decidir i argumentar) i educació en valors (les dades dels altres).|Ciencias (localización), tutoría (decidir y argumentar) y educación en valores (los datos de los demás)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Permisos de les apps|Permisos de las apps", x: "Les claus del teu dispositiu: a qui les deixes?|Las llaves de tu dispositivo: ¿a quién se las dejas?",
          nota: "Avui, decidir quan dir que sí i quan dir que no.|Hoy, decidir cuándo decir que sí y cuándo decir que no." },
        { id: 's2', k: 'pregunta', t: "Una calculadora molt xafardera|Una calculadora muy cotilla", punts: ["CalcuBit demana la ubicació…|CalcuBit pide la ubicación…", "…el micròfon i els contactes.|…el micrófono y los contactos.", "Per què?|¿Por qué?"],
          nota: "Recull hipòtesis. Les recuperaràs a la targeta «Per què en volen tant?».|Recoge hipótesis. Las recuperarás en la tarjeta «¿Por qué quieren tanto?»." },
        { id: 's3', k: 'anim', t: "Les claus del dispositiu|Las llaves del dispositivo", anim: 'd4permis', x: "Càmera, micròfon, ubicació, contactes i fotos.|Cámara, micrófono, ubicación, contactos y fotos.",
          nota: "Un permís és com deixar una clau: a qui la deixaríeu?|Un permiso es como dejar una llave: ¿a quién se la dejaríais?" },
        { id: 's4', k: 'anim', t: "Té sentit?|¿Tiene sentido?", anim: 'd4sentit', x: "Per a què ho necessita aquesta app?|¿Para qué lo necesita esta app?",
          nota: "Practiqueu la pregunta amb més exemples: la càmera per a una app de videotrucades? El micròfon per a un trencaclosques?|Practicad la pregunta con más ejemplos: ¿la cámara para una app de videollamadas? ¿El micrófono para un rompecabezas?" },
        { id: 's5', k: 'anim', t: "No tot és sí o no|No todo es sí o no", anim: 'd4dialeg', x: "Tria la més petita que serveixi.|Elige la más pequeña que sirva.",
          nota: "Explica «només aquesta vegada» i les fotos «només les que triï».|Explica «solo esta vez» y las fotos «solo las que elija»." },
        { id: 's6', k: 'media', t: "La fitxa de CalcuBit|La ficha de CalcuBit", x: "Quins permisos no tenen sentit per a una calculadora?|¿Qué permisos no tienen sentido para una calculadora?", media: CALCU,
          nota: "Quatre no tenen sentit: ubicació, micròfon, contactes i fotos.|Cuatro no tienen sentido: ubicación, micrófono, contactos y fotos." },
        { id: 's7', k: 'concepte', t: "Per què en volen tant?|¿Por qué quieren tanto?", pic: 'img/ment/vel.webp',
          punts: ["Les dades serveixen per fer anuncis a mida.|Los datos sirven para hacer anuncios a medida.", "Algunes apps les comparteixen amb altres empreses.|Algunas apps los comparten con otras empresas.", "Els permisos es poden treure a la configuració.|Los permisos se pueden quitar en la configuración."],
          nota: "Sense alarmisme: no és dolent fer servir apps, però sí decidir què hi donem.|Sin alarmismo: no es malo usar apps, pero sí decidir qué damos." },
        { id: 's8', k: 'activitat', t: "La botiga d'apps de paper|La tienda de apps de papel", timer: 12,
          punts: ["Per a cada app, decidiu quines fitxes de permís li doneu.|Para cada app, decidid qué fichas de permiso le dais.", "Sempre, mentre la faig servir o no?|¿Siempre, mientras la uso o no?", "Justifiqueu cada «sí» amb una frase.|Justificad cada «sí» con una frase."],
          nota: "Passa per les taules i fes la pregunta clau: «Per a què ho necessita?».|Pasa por las mesas y haz la pregunta clave: «¿Para qué lo necesita?»." },
        { id: 's9', k: 'concepte', t: "La pregunta clau|La pregunta clave", pic: 'img/ment/rfx.webp',
          punts: ["Per a què ho necessita?|¿Para qué lo necesita?", "Si no té sentit: no.|Si no tiene sentido: no.", "Si té sentit: l'opció més petita.|Si tiene sentido: la opción más pequeña."],
          nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Permisos de les apps».|Abre la sesión «Permisos de las apps».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "A la pausa, ens movem tots junts.|En la pausa, nos movemos todos juntos."],
          nota: "Avisa quan arribin a la pausa activa.|Avisa cuando lleguen a la pausa activa." },
        { id: 's11', k: 'repte', t: "Reptes: decideixo jo|Retos: decido yo", timer: 8,
          punts: ["Sempre, mentre la faig servir o no permetre?|¿Siempre, mientras la uso o no permitir?", "Instal·lar una app, pas a pas.|Instalar una app, paso a paso.", "Treure un permís antic.|Quitar un permiso antiguo."],
          nota: "Pregunta per què «sempre» té sentit per a l'app de trobar el mòbil.|Pregunta por qué «siempre» tiene sentido para la app de encontrar el móvil." },
        { id: 's12', k: 'activitat', t: "Crea: les meves normes|Crea: mis normas", timer: 2,
          punts: ["Tria una norma per a cada tema.|Elige una norma para cada tema.", "Desa-les.|Guárdalas.", "A casa: inspecció de permisos.|En casa: inspección de permisos."],
          nota: "Que comparteixin una norma en veu alta.|Que compartan una norma en voz alta." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Un permís és una clau per a una app.|Un permiso es una llave para una app.", "Per a què ho necessita? Si no té sentit, no.|¿Para qué lo necesita? Si no tiene sentido, no.", "L'opció més petita que serveixi.|La opción más pequeña que sirva.", "Els permisos es treuen a la configuració, amb un adult.|Los permisos se quitan en la configuración, con un adulto."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Un permís que té sentit i un que no.|Un permiso que tiene sentido y uno que no.", "On es treuen els permisos i amb qui?|¿Dónde se quitan los permisos y con quién?"],
          nota: "Pot ser oral, per torns.|Puede ser oral, por turnos." },
        { id: 's15', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["Inspecció de permisos amb un adult.|Inspección de permisos con un adulto.", "Tres apps, una pregunta: per a què?|Tres apps, una pregunta: ¿para qué?", "Desinstal·leu el que no feu servir.|Desinstalad lo que no uséis."],
          nota: "És una proposta: cada família decideix com la fa.|Es una propuesta: cada familia decide cómo la hace." }
      ],
      print: [
        { id: 'p1', t: "La botiga d'apps de paper|La tienda de apps de papel", k: 'targetes',
          intro: "Un paquet per grup de 4. Retalleu les 6 apps i les fitxes de permís. Per a cada app, decidiu quines fitxes li doneu i amb quina opció (sempre, mentre la faig servir, no). Les apps són inventades.|Un paquete por grupo de 4. Recortad las 6 apps y las fichas de permiso. Para cada app, decidid qué fichas le dais y con qué opción (siempre, mientras la uso, no). Las apps son inventadas.",
          items: [
            { t: "🗺️ App: MapaNuvi (mapes per anar pel poble)|🗺️ App: MapaNuvi (mapas para ir por el pueblo)", n: 1 },
            { t: "🧮 App: CalcuBit (calculadora)|🧮 App: CalcuBit (calculadora)", n: 1 },
            { t: "📹 App: VideoÀvia (videotrucades amb la família)|📹 App: VideoÀvia (videollamadas con la familia)", n: 1 },
            { t: "🎨 App: PintaNuvi (dibuixar)|🎨 App: PintaNuvi (dibujar)", n: 1 },
            { t: "⛅ App: TempsNuvi (el temps)|⛅ App: TiempoNuvi (el tiempo)", n: 1 },
            { t: "🔎 App: TrobaMòbil (trobar el mòbil si es perd)|🔎 App: EncuentraMóvil (encontrar el móvil si se pierde)", n: 1 },
            { t: "📍 Permís: ubicació|📍 Permiso: ubicación", n: 3 },
            { t: "📷 Permís: càmera|📷 Permiso: cámara", n: 3 },
            { t: "🎙️ Permís: micròfon|🎙️ Permiso: micrófono", n: 3 },
            { t: "👥 Permís: contactes|👥 Permiso: contactos", n: 3 },
            { t: "🖼️ Permís: fotos|🖼️ Permiso: fotos", n: 3 },
            { t: "🔔 Permís: notificacions|🔔 Permiso: notificaciones", n: 3 }
          ] }
      ]
    },

    /* ---------- Sessió 3 · Wifi, actualitzacions i còpies ---------- */
    'd4-3': {
      intro: "Tercera sessió de la unitat 4. A partir del viatge complicat de la tauleta de la Nora, l'alumnat coneix els escuts bàsics dels dispositius: fer servir la wifi pública amb cap (i reconèixer les xarxes que imiten noms), instal·lar les actualitzacions aviat i pel camí de sempre (i no fer cas dels avisos falsos de les webs), tenir còpies de seguretat, posar un bloqueig de pantalla difícil d'endevinar i recordar la verificació en dos passos de la unitat 1. Tot es planteja com a hàbits de família, sense tecnicismes ni por.|Tercera sesión de la unidad 4. A partir del viaje complicado de la tablet de Nora, el alumnado conoce los escudos básicos de los dispositivos: usar la wifi pública con cabeza (y reconocer las redes que imitan nombres), instalar las actualizaciones pronto y por el camino de siempre (y no hacer caso de los avisos falsos de las webs), tener copias de seguridad, poner un bloqueo de pantalla difícil de adivinar y recordar la verificación en dos pasos de la unidad 1. Todo se plantea como hábitos de familia, sin tecnicismos ni miedo.",
      claus: [
        "A la wifi pública, res de comptes importants ni compres; compte amb les xarxes que imiten el nom de la de veritat.|En la wifi pública, nada de cuentas importantes ni compras; cuidado con las redes que imitan el nombre de la de verdad.",
        "Les actualitzacions tapen forats: s'instal·len aviat, amb bateria i des de la configuració. Una web no pot saber si tens virus.|Las actualizaciones tapan agujeros: se instalan pronto, con batería y desde la configuración. Una web no puede saber si tienes virus.",
        "Una còpia de seguretat guarda les coses en un altre lloc (núvol o disc extern): si el dispositiu es perd, no es perd tot.|Una copia de seguridad guarda las cosas en otro sitio (nube o disco externo): si el dispositivo se pierde, no se pierde todo.",
        "Bloqueig de pantalla difícil d'endevinar i verificació en dos passos als comptes.|Bloqueo de pantalla difícil de adivinar y verificación en dos pasos en las cuentas."
      ],
      prev: [
        "Sessió d1-1: contrasenyes fortes i verificació en dos passos.|Sesión d1-1: contraseñas fuertes y verificación en dos pasos.",
        "Sessió d4-2: els permisos i la configuració del dispositiu.|Sesión d4-2: los permisos y la configuración del dispositivo."
      ],
      obj: [
        "L'alumne/a distingeix què es pot fer i què és millor deixar per a casa en una wifi pública.|El alumno/a distingue qué se puede hacer y qué es mejor dejar para casa en una wifi pública.",
        "L'alumne/a reconeix xarxes que imiten noms i avisos falsos de virus o d'actualitzacions.|El alumno/a reconoce redes que imitan nombres y avisos falsos de virus o de actualizaciones.",
        "L'alumne/a explica per a què serveixen les actualitzacions i les còpies de seguretat.|El alumno/a explica para qué sirven las actualizaciones y las copias de seguridad.",
        "L'alumne/a tria hàbits per protegir els dispositius de casa (bloqueig, còpies, dos passos).|El alumno/a elige hábitos para proteger los dispositivos de casa (bloqueo, copias, dos pasos)."
      ],
      comp: [
        "Competència digital (CD4): protecció de dispositius i de dades|Competencia digital (CD4): protección de dispositivos y de datos",
        "Competència digital (CD5): resolució de problemes tècnics senzills|Competencia digital (CD5): resolución de problemas técnicos sencillos",
        "Competència personal, social i d'aprendre a aprendre: hàbits i prevenció|Competencia personal, social y de aprender a aprender: hábitos y prevención"
      ],
      vocab: [
        ["Wifi pública|Wifi pública", "Xarxa sense fil d'un lloc públic, on es pot connectar molta gent.|Red inalámbrica de un lugar público, donde se puede conectar mucha gente."],
        ["Xifrat|Cifrado", "Informació barrejada perquè només la pugui llegir qui ha de llegir-la (el cadenat 🔒).|Información mezclada para que solo la pueda leer quien debe leerla (el candado 🔒)."],
        ["Actualització|Actualización", "Una versió nova d'un programa que tapa forats i porta millores.|Una versión nueva de un programa que tapa agujeros y trae mejoras."],
        ["Còpia de seguretat|Copia de seguridad", "Una còpia de les teves coses guardada en un altre lloc.|Una copia de tus cosas guardada en otro sitio."],
        ["Núvol|Nube", "Ordinadors d'empreses on es guarden coses i als quals arribes per internet.|Ordenadores de empresas donde se guardan cosas y a los que llegas por internet."],
        ["Bloqueig de pantalla|Bloqueo de pantalla", "PIN, patró o empremta que cal per obrir el dispositiu.|PIN, patrón o huella que hace falta para abrir el dispositivo."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Wifi, actualitzacions i còpies»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Wifi, actualizaciones y copias»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Les targetes de situacions (un paquet per grup de 4) i dos rètols: «Escut» i «Forat»|Las tarjetas de situaciones (un paquete por grupo de 4) y dos carteles: «Escudo» y «Agujero»"
        ],
        imprimir: ["Escuts i forats (imprimible 1): un paquet per grup|Escudos y agujeros (imprimible 1): un paquete por grupo", "La revisió de la tauleta (imprimible 2): una per alumne/a, per a casa|La revisión de la tablet (imprimible 2): una por alumno/a, para casa"],
        prep: [
          "Imprimir i retallar les targetes de situacions (12 per grup).|Imprimir y recortar las tarjetas de situaciones (12 por grupo).",
          "Si podeu, tenir a mà un dispositiu de l'escola per ensenyar on hi ha les actualitzacions a la configuració (sense instal·lar-ne cap a classe).|Si podéis, tener a mano un dispositivo del centro para enseñar dónde están las actualizaciones en la configuración (sin instalar ninguna en clase).",
          "Saber el nom de la wifi de l'escola per fer-la servir d'exemple de xarxa «de veritat» (sense donar-ne la contrasenya).|Saber el nombre de la wifi del centro para usarla de ejemplo de red «de verdad» (sin dar su contraseña)."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: el viatge de la tauleta|Bienvenida: el viaje de la tablet", fase: 'inici',
          fa: "Explica la història de la tauleta de la Nora: la wifi «gratis», l'avís de virus i la caiguda al tren. Pregunta quin dels tres problemes els faria més por i què es podria haver fet abans.|Explica la historia de la tablet de Nora: la wifi «gratis», el aviso de virus y la caída en el tren. Pregunta cuál de los tres problemas les daría más miedo y qué se podría haber hecho antes.",
          diu: ["Us heu connectat mai a una wifi d'un bar o d'una estació?|¿Os habéis conectado alguna vez a una wifi de un bar o de una estación?",
            "Si una tauleta es trenca, què es perd?|Si una tablet se rompe, ¿qué se pierde?",
            "Avui coneixerem quatre escuts per als dispositius.|Hoy conoceremos cuatro escudos para los dispositivos."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Wifi, actualitzacions, còpies i bloqueig|Wifi, actualizaciones, copias y bloqueo", fase: 'teoria',
          fa: "Amb les animacions, presenta cada escut: la wifi de l'estació i les que n'imiten el nom (i el cadenat, que vol dir xifrat però no «de fiar»), els forats que tapen les actualitzacions, l'avís fals de virus, la còpia de seguretat i el bloqueig de pantalla amb els dos panys.|Con las animaciones, presenta cada escudo: la wifi de la estación y las que imitan su nombre (y el candado, que quiere decir cifrado pero no «de fiar»), los agujeros que tapan las actualizaciones, el aviso falso de virus, la copia de seguridad y el bloqueo de pantalla con los dos candados.",
          diu: ["Quina wifi triaríeu? Per què les altres fan sospitar?|¿Qué wifi elegiríais? ¿Por qué las otras hacen sospechar?",
            "Una web pot saber si el vostre dispositiu té virus? (No.)|¿Una web puede saber si vuestro dispositivo tiene virus? (No.)",
            "On són les vostres fotos si la tauleta cau al riu?|¿Dónde están vuestras fotos si la tablet cae al río?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Escuts i forats|Escudos y agujeros", fase: 'desconnectat',
          fa: "En grups de 4, reparteix les targetes de situacions. Les classifiquen en «Escut» o «Forat» i, per a cada forat, escriuen a la mateixa targeta l'escut que el taparia. Posada en comú: cada grup llegeix un forat i el seu escut.|En grupos de 4, reparte las tarjetas de situaciones. Las clasifican en «Escudo» o «Agujero» y, para cada agujero, escriben en la misma tarjeta el escudo que lo taparía. Puesta en común: cada grupo lee un agujero y su escudo.",
          diu: ["Quin forat és el més fàcil de tapar?|¿Qué agujero es el más fácil de tapar?",
            "Quin escut necessita un adult?|¿Qué escudo necesita un adulto?",
            "Quin escut ja teniu a casa?|¿Qué escudo ya tenéis en casa?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: les preguntes de repàs, la història, les cinc targetes, la wifi pública, les xarxes de la biblioteca, l'avís de virus i què fer si es perd la tauleta. Pausa activa tots junts.|Cada alumno/a hace la sesión hasta la pausa activa: las preguntas de repaso, la historia, las cinco tarjetas, la wifi pública, las redes de la biblioteca, el aviso de virus y qué hacer si se pierde la tablet. Pausa activa todos juntos.",
          diu: ["Quina xarxa de la biblioteca us ha costat més de descobrir?|¿Qué red de la biblioteca os ha costado más descubrir?",
            "Per què «Casa_Puig_5G» no era una trampa?|¿Por qué «Casa_Puig_5G» no era una trampa?",
            "Ara, tots: ens actualitzem del 25% al 100%!|Ahora, todos: ¡nos actualizamos del 25% al 100%!"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 10, t: "Reptes i el meu dispositiu blindat|Retos y mi dispositivo blindado", fase: 'ordinador',
          fa: "Continuen amb els reptes: escut o forat, la conversa amb en Bit sobre l'actualització, què és el núvol i quin PIN és millor. Després trien el seu pla de dispositiu blindat.|Siguen con los retos: escudo o agujero, la conversación con Bit sobre la actualización, qué es la nube y qué PIN es mejor. Después eligen su plan de dispositivo blindado.",
          diu: ["Per què convé carregar la bateria abans d'actualitzar?|¿Por qué conviene cargar la batería antes de actualizar?",
            "Si les fotos són al núvol, cal protegir-ne el compte? Com?|Si las fotos están en la nube, ¿hay que proteger la cuenta? ¿Cómo?",
            "Quin hàbit del vostre pla fareu aquesta setmana?|¿Qué hábito de vuestro plan haréis esta semana?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: el meu dispositiu blindat (i «La revisió de la tauleta», per a casa).|«Retos» y el paso «Crea»: mi dispositivo blindado (y «La revisión de la tablet», para casa).", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu les idees clau amb el resum. Tiquet de sortida, preguntes finals i com s'han sentit. Lliura la fitxa de la revisió de la tauleta per fer-la a casa amb un adult.|Repasad las ideas clave con el resumen. Ticket de salida, preguntas finales y cómo se han sentido. Entrega la ficha de la revisión de la tablet para hacerla en casa con un adulto.",
          diu: ["Digueu un escut i el forat que tapa.|Decid un escudo y el agujero que tapa.",
            "Què no feu en una wifi pública?|¿Qué no hacéis en una wifi pública?",
            "Qui us ajudarà a fer la revisió de la tauleta?|¿Quién os ayudará a hacer la revisión de la tablet?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que una wifi és bona perquè és gratis i ràpida.|Piensa que una wifi es buena porque es gratis y rápida.",
          "Que sigui gratis no diu qui hi ha darrere. La bona és la que et diu el lloc (el taulell, un cartell).|Que sea gratis no dice quién hay detrás. La buena es la que te dice el sitio (el mostrador, un cartel)."],
        ["Creu que el cadenat 🔒 vol dir que la web és segura i de fiar.|Cree que el candado 🔒 quiere decir que la web es segura y de fiar.",
          "El cadenat diu que la connexió va xifrada; una web trampa també el pot tenir.|El candado dice que la conexión va cifrada; una web trampa también lo puede tener."],
        ["Deixa sempre les actualitzacions per a «demà».|Deja siempre las actualizaciones para «mañana».",
          "Mentre no s'actualitza, el forat queda obert. Millor triar un moment (al vespre, carregant) i fer-ho.|Mientras no se actualiza, el agujero queda abierto. Mejor elegir un momento (por la noche, cargando) y hacerlo."],
        ["Es creu l'avís «Tens 5 virus!» d'una web.|Se cree el aviso «¡Tienes 5 virus!» de una web.",
          "Una web no pot mirar dins del dispositiu. És un avís fals per espantar: es tanca la pestanya.|Una web no puede mirar dentro del dispositivo. Es un aviso falso para asustar: se cierra la pestaña."],
        ["Pensa que tenir les fotos a la tauleta ja és tenir-les guardades.|Piensa que tener las fotos en la tablet ya es tenerlas guardadas.",
          "Si la tauleta es perd, es perden. Una còpia vol dir un segon lloc.|Si la tablet se pierde, se pierden. Una copia quiere decir un segundo sitio."]
      ],
      diff: {
        mes: "Per anar més enllà: fer un còmic de quatre vinyetes amb el viatge de la tauleta de la Nora «ben fet» (amb tots els escuts); o investigar amb la família quantes còpies tenen de les fotos importants i on.|Para ir más allá: hacer un cómic de cuatro viñetas con el viaje de la tablet de Nora «bien hecho» (con todos los escudos); o investigar con la familia cuántas copias tienen de las fotos importantes y dónde.",
        menys: "A l'activitat de paper, treballar només amb sis targetes i sense escriure l'escut (només classificar). A l'app, fer en parella el repte de la conversa amb en Bit.|En la actividad de papel, trabajar solo con seis tarjetas y sin escribir el escudo (solo clasificar). En la app, hacer en pareja el reto de la conversación con Bit."
      },
      aval: {
        ticket: ["Digues un escut del dispositiu i el forat que tapa.|Di un escudo del dispositivo y el agujero que tapa.",
          "Digues una cosa que no faries en una wifi pública.|Di una cosa que no harías en una wifi pública."],
        rubric: [
          ["Wifi i avisos|Wifi y avisos", "Reconeix xarxes que imiten noms i avisos falsos, i diu què fer.|Reconoce redes que imitan nombres y avisos falsos, y dice qué hacer.", "En reconeix algun amb ajuda.|Reconoce alguno con ayuda."],
          ["Actualitzacions i còpies|Actualizaciones y copias", "Explica per a què serveixen i com es fan bé (aviat, des de la configuració, en un altre lloc).|Explica para qué sirven y cómo se hacen bien (pronto, desde la configuración, en otro sitio).", "Sap que existeixen però no per a què serveixen.|Sabe que existen pero no para qué sirven."],
          ["Hàbits de protecció|Hábitos de protección", "Tria hàbits concrets (bloqueig, PIN difícil, dos passos) i els vol provar a casa.|Elige hábitos concretos (bloqueo, PIN difícil, dos pasos) y quiere probarlos en casa.", "Proposa idees generals sense concretar.|Propone ideas generales sin concretar."]
        ]
      },
      casa: "A casa, feu junts «La revisió de la tauleta»: mireu si hi ha actualitzacions pendents i instal·leu-les amb la bateria carregada; comproveu que la pantalla es bloqueja sola i que el PIN no és fàcil d'endevinar; busqueu si les fotos tenen una còpia de seguretat i on es guarda; i mireu que la wifi de casa tingui contrasenya. Si hi ha l'eina per localitzar el dispositiu, activeu-la.|En casa, haced juntos «La revisión de la tablet»: mirad si hay actualizaciones pendientes e instaladlas con la batería cargada; comprobad que la pantalla se bloquea sola y que el PIN no es fácil de adivinar; buscad si las fotos tienen una copia de seguridad y dónde se guarda; y mirad que la wifi de casa tenga contraseña. Si existe la herramienta para localizar el dispositivo, activadla.",
      faq: [
        ["És perillós connectar-se a una wifi pública?|¿Es peligroso conectarse a una wifi pública?", "Per mirar un mapa o llegir notícies, normalment no. El risc és entrar a comptes importants o comprar, o connectar-se a una xarxa falsa. Per això diem «res de contrasenyes ni compres» i «la xarxa que diu el lloc».|Para mirar un mapa o leer noticias, normalmente no. El riesgo es entrar en cuentas importantes o comprar, o conectarse a una red falsa. Por eso decimos «nada de contraseñas ni compras» y «la red que dice el lugar»."],
        ["Les actualitzacions fan anar més lent el dispositiu?|¿Las actualizaciones hacen ir más lento el dispositivo?", "De vegades un dispositiu molt antic va més lent amb programes nous, però les actualitzacions de seguretat són importants. Si un dispositiu ja no en rep, convé fer-lo servir per a coses sense comptes importants.|A veces un dispositivo muy antiguo va más lento con programas nuevos, pero las actualizaciones de seguridad son importantes. Si un dispositivo ya no las recibe, conviene usarlo para cosas sin cuentas importantes."],
        ["El núvol és segur?|¿La nube es segura?", "És un compte d'una empresa: és tan segur com la contrasenya que el protegeix. Amb una bona contrasenya i dos passos, és una bona còpia.|Es una cuenta de una empresa: es tan segura como la contraseña que la protege. Con una buena contraseña y dos pasos, es una buena copia."],
        ["Què és millor, PIN, patró o empremta?|¿Qué es mejor, PIN, patrón o huella?", "Qualsevol és millor que res. L'important és que no sigui fàcil d'endevinar (ni 1234, ni l'aniversari, ni una L amb el patró).|Cualquiera es mejor que nada. Lo importante es que no sea fácil de adivinar (ni 1234, ni el cumpleaños, ni una L con el patrón)."]
      ],
      tec: [
        ["A la llista de wifis toquen «Biblioteca_Vilabit» i no passa res.|En la lista de wifis tocan «Biblioteca_Vilabit» y no pasa nada.", "És correcte: és la bona. Només són pistes les tres que imiten o que són obertes.|Es correcto: es la buena. Solo son pistas las tres que imitan o que son abiertas."],
        ["A l'ordre de la tauleta perduda, dubten entre canviar contrasenyes i esborrar-la.|En el orden de la tablet perdida, dudan entre cambiar contraseñas y borrarla.", "L'ordre de l'app: primer mirar on és, si no apareix bloquejar-la i esborrar-la, després canviar contrasenyes i, al final, recuperar les fotos.|El orden de la app: primero mirar dónde está, si no aparece bloquearla y borrarla, después cambiar contraseñas y, al final, recuperar las fotos."],
        ["No volen fer cap actualització real a classe.|No quieren hacer ninguna actualización real en clase.", "Correcte: a classe només es mostra on és. Les actualitzacions les fa la família a casa o el responsable TIC del centre.|Correcto: en clase solo se muestra dónde está. Las actualizaciones las hace la familia en casa o el responsable TIC del centro."]
      ],
      seg: [
        "No demanis el PIN ni cap contrasenya de ningú, ni com a exemple.|No pidas el PIN ni ninguna contraseña de nadie, ni como ejemplo.",
        "No donis la contrasenya de la wifi de l'escola a l'alumnat.|No des la contraseña de la wifi del centro al alumnado.",
        "Si algun infant explica que ha perdut un dispositiu o que li han entrat al compte, tranquil·litza'l i avisa la família perquè canviïn contrasenyes.|Si algún niño o niña cuenta que ha perdido un dispositivo o que le han entrado en la cuenta, tranquilízale y avisa a la familia para que cambien contraseñas."
      ],
      extra: [
        "Ciències: com viatja la informació per una wifi? (Ones, com la ràdio.)|Ciencias: ¿cómo viaja la información por una wifi? (Ondas, como la radio.)",
        "Matemàtiques: amb 4 xifres hi ha 10.000 PIN possibles; amb 6, un milió. Per què un PIN llarg és més difícil d'endevinar?|Matemáticas: con 4 cifras hay 10.000 PIN posibles; con 6, un millón. ¿Por qué un PIN largo es más difícil de adivinar?",
        "Per als grans: per què els programes tenen errors? Parlar dels errors com a part normal de programar (ho van viure als cursos de Robot o Creadors).|Para los mayores: ¿por qué los programas tienen errores? Hablar de los errores como parte normal de programar (lo vivieron en los cursos de Robot o Creadors)."
      ],
      trans: [
        "Sessió d1-1: els dos panys dels comptes. Aquí, també el pany de la pantalla.|Sesión d1-1: los dos candados de las cuentas. Aquí, también el candado de la pantalla.",
        "Sessió d4-4: les sales 3 i 4 de l'escape room són l'actualització i els escuts i forats.|Sesión d4-4: las salas 3 y 4 de la escape room son la actualización y los escudos y agujeros.",
        "Ciències (ones i xarxes), matemàtiques (combinacions) i tutoria (hàbits de família).|Ciencias (ondas y redes), matemáticas (combinaciones) y tutoría (hábitos de familia)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Wifi, actualitzacions i còpies|Wifi, actualizaciones y copias", x: "Quatre escuts per als teus dispositius.|Cuatro escudos para tus dispositivos.",
          nota: "Avui no parlem de persones que enganyen, sinó de cuidar els aparells.|Hoy no hablamos de personas que engañan, sino de cuidar los aparatos." },
        { id: 's2', k: 'pregunta', t: "Un viatge complicat|Un viaje complicado", punts: ["Una wifi «GRATIS_SUPER_RAPIDA»…|Una wifi «GRATIS_SUPER_RAPIDA»…", "«Tens 5 virus!»…|«¡Tienes 5 virus!»…", "La tauleta cau i no s'encén. I les fotos?|La tablet se cae y no se enciende. ¿Y las fotos?"],
          nota: "Pregunta quin problema els fa més por i què es podria haver fet abans.|Pregunta qué problema les da más miedo y qué se podría haber hecho antes." },
        { id: 's3', k: 'anim', t: "La wifi de l'estació|La wifi de la estación", anim: 'd4wifi', x: "La bona és la que diu el lloc. El cadenat vol dir xifrat, no «de fiar».|La buena es la que dice el lugar. El candado quiere decir cifrado, no «de fiar».",
          nota: "Remarca: a la wifi pública, res de contrasenyes ni compres.|Remarca: en la wifi pública, nada de contraseñas ni compras." },
        { id: 's4', k: 'anim', t: "Tapar els forats|Tapar los agujeros", anim: 'd4forat', x: "Totes les apps tenen errors; les actualitzacions els tapen.|Todas las apps tienen errores; las actualizaciones los tapan.",
          nota: "Connecta amb els errors que van trobar programant: és normal i s'arregla.|Conecta con los errores que encontraron programando: es normal y se arregla." },
        { id: 's5', k: 'media', t: "«Tens 5 virus!»|«¡Tienes 5 virus!»", x: "Una web no pot saber si tens virus.|Una web no puede saber si tienes virus.", media: VIRUS,
          nota: "Tanquem la pestanya. Igual amb «Actualitza el reproductor per veure el vídeo».|Cerramos la pestaña. Igual con «Actualiza el reproductor para ver el vídeo»." },
        { id: 's6', k: 'anim', t: "En dos llocs|En dos sitios", anim: 'd4copia', x: "Una còpia de seguretat: núvol o disc extern.|Una copia de seguridad: nube o disco externo.",
          nota: "Pregunta: on són les fotos de casa? Sense jutjar: només idees.|Pregunta: ¿dónde están las fotos de casa? Sin juzgar: solo ideas." },
        { id: 's7', k: 'anim', t: "El pany de la pantalla|El candado de la pantalla", anim: 'd4pany', x: "PIN difícil, bloqueig automàtic i dos passos als comptes.|PIN difícil, bloqueo automático y dos pasos en las cuentas.",
          nota: "Recorda la verificació en dos passos de la unitat 1.|Recuerda la verificación en dos pasos de la unidad 1." },
        { id: 's8', k: 'activitat', t: "Escuts i forats|Escudos y agujeros", timer: 12,
          punts: ["Classifiqueu les situacions: escut o forat?|Clasificad las situaciones: ¿escudo o agujero?", "A cada forat, escriviu l'escut que el tapa.|En cada agujero, escribid el escudo que lo tapa.", "Llegiu-ne un a la classe.|Leed uno a la clase."],
          nota: "Passa per les taules: «Què passaria si…?».|Pasa por las mesas: «¿Qué pasaría si…?»." },
        { id: 's9', k: 'concepte', t: "Els quatre escuts|Los cuatro escudos", pic: 'img/ment/sim.webp',
          punts: ["Wifi amb cap.|Wifi con cabeza.", "Actualitzacions aviat.|Actualizaciones pronto.", "Còpies en un altre lloc.|Copias en otro sitio.", "Bloqueig i dos passos.|Bloqueo y dos pasos."],
          nota: "Deixa-la projectada mentre classifiquen.|Déjala proyectada mientras clasifican." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Wifi, actualitzacions i còpies».|Abre la sesión «Wifi, actualizaciones y copias».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "A la pausa, ens actualitzem tots junts.|En la pausa, nos actualizamos todos juntos."],
          nota: "Avisa quan arribin a la pausa activa.|Avisa cuando lleguen a la pausa activa." },
        { id: 's11', k: 'repte', t: "Reptes: dispositiu blindat|Retos: dispositivo blindado", timer: 8,
          punts: ["Escut o forat?|¿Escudo o agujero?", "En Bit no vol actualitzar.|Bit no quiere actualizar.", "El núvol i el millor PIN.|La nube y el mejor PIN."],
          nota: "Pregunta per què cal la bateria carregada abans d'actualitzar.|Pregunta por qué hace falta la batería cargada antes de actualizar." },
        { id: 's12', k: 'activitat', t: "Crea: el meu dispositiu blindat|Crea: mi dispositivo blindado", timer: 2,
          punts: ["Tria un hàbit per a cada escut.|Elige un hábito para cada escudo.", "Desa el teu pla.|Guarda tu plan.", "A casa: la revisió de la tauleta.|En casa: la revisión de la tablet."],
          nota: "Lliura la fitxa per a casa.|Entrega la ficha para casa." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Wifi pública: res de comptes importants ni compres.|Wifi pública: nada de cuentas importantes ni compras.", "Actualitzacions aviat, des de la configuració.|Actualizaciones pronto, desde la configuración.", "Còpies en un altre lloc.|Copias en otro sitio.", "Bloqueig difícil i dos passos.|Bloqueo difícil y dos pasos."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Un escut i el forat que tapa.|Un escudo y el agujero que tapa.", "Una cosa que no faries en una wifi pública.|Una cosa que no harías en una wifi pública."],
          nota: "Pot ser oral, per torns.|Puede ser oral, por turnos." },
        { id: 's15', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["La revisió de la tauleta, amb un adult.|La revisión de la tablet, con un adulto.", "Actualitzacions, bloqueig, còpies i wifi.|Actualizaciones, bloqueo, copias y wifi.", "I activeu l'eina per trobar-la si es perd.|Y activad la herramienta para encontrarla si se pierde."],
          nota: "És una proposta: cada família la fa com pot.|Es una propuesta: cada familia la hace como puede." }
      ],
      print: [
        { id: 'p1', t: "Escuts i forats|Escudos y agujeros", k: 'targetes',
          intro: "Un paquet per grup de 4. Classifiqueu cada situació en «Escut» o «Forat». A cada forat, escriviu l'escut que el taparia.|Un paquete por grupo de 4. Clasificad cada situación en «Escudo» o «Agujero». En cada agujero, escribid el escudo que lo taparía.",
          items: [
            { t: "📶 Entrar al correu des de la wifi oberta d'un bar|📶 Entrar en el correo desde la wifi abierta de un bar", n: 1 },
            { t: "🔒 Connectar-se a la wifi que diu el cartell de la biblioteca|🔒 Conectarse a la wifi que dice el cartel de la biblioteca", n: 1 },
            { t: "⬆️ Instal·lar l'actualització el mateix dia que arriba|⬆️ Instalar la actualización el mismo día que llega", n: 1 },
            { t: "⏰ Tocar «Recorda-m'ho demà» durant mesos|⏰ Tocar «Recuérdamelo mañana» durante meses", n: 1 },
            { t: "⚠️ Descarregar el «netejador» que diu una web d'alerta|⚠️ Descargar el «limpiador» que dice una web de alerta", n: 1 },
            { t: "☁️ Les fotos es copien soles al núvol de la família|☁️ Las fotos se copian solas en la nube de la familia", n: 1 },
            { t: "📸 Totes les fotos, només a la tauleta|📸 Todas las fotos, solo en la tablet", n: 1 },
            { t: "🔢 PIN: 1234|🔢 PIN: 1234", n: 1 },
            { t: "⏱️ La pantalla es bloqueja sola als 2 minuts|⏱️ La pantalla se bloquea sola a los 2 minutos", n: 1 },
            { t: "🔑 Verificació en dos passos al compte del videojoc|🔑 Verificación en dos pasos en la cuenta del videojuego", n: 1 },
            { t: "🔎 L'eina per trobar el dispositiu, activada|🔎 La herramienta para encontrar el dispositivo, activada", n: 1 },
            { t: "📥 Baixar una app d'una web estranya|📥 Descargar una app de una web rara", n: 1 }
          ] },
        { id: 'p2', t: "La revisió de la tauleta|La revisión de la tablet", k: 'fitxa',
          intro: "Per fer a casa amb un adult. Marqueu cada escut quan el tingueu.|Para hacer en casa con un adulto. Marcad cada escudo cuando lo tengáis.",
          items: [
            { q: "⬆️ Hem mirat les actualitzacions pendents i les hem instal·lat (amb bateria).|⬆️ Hemos mirado las actualizaciones pendientes y las hemos instalado (con batería).", sol: "Sí / Ho farem el dia: ____|Sí / Lo haremos el día: ____" },
            { q: "🔐 La pantalla es bloqueja sola i el PIN no és fàcil d'endevinar.|🔐 La pantalla se bloquea sola y el PIN no es fácil de adivinar.", sol: "Sí / L'hem canviat|Sí / Lo hemos cambiado" },
            { q: "💾 Les fotos tenen una còpia a: ____|💾 Las fotos tienen una copia en: ____", sol: "Per exemple: el núvol de la família o un disc extern.|Por ejemplo: la nube de la familia o un disco externo." },
            { q: "📶 La wifi de casa té contrasenya.|📶 La wifi de casa tiene contraseña.", sol: "Sí / L'hem posada|Sí / La hemos puesto" },
            { q: "🔎 L'eina per trobar el dispositiu està activada.|🔎 La herramienta para encontrar el dispositivo está activada.", sol: "Sí / No en té / Ho mirarem|Sí / No tiene / Lo miraremos" }
          ] }
      ]
    },

    /* ---------- Sessió 4 · Projecte: l'escape room de la ciberseguretat ---------- */
    'd4-4': {
      intro: "Sessió de projecte que tanca la unitat 4. Primer, l'alumnat surt d'una escape room a l'app: quatre sales (un correu trampa, els permisos d'una app de receptes, una actualització i escuts o forats) que donen les quatre xifres del codi. Després, en equips, dissenya la seva pròpia escape room de ciberseguretat en paper, amb una prova per sala, per fer-la amb la família o amb una altra classe. El valor és repassar tota la unitat amb un repte motivador i aprendre a fer bones proves: un tema, una situació curta, una pista que ajuda i una idea per aprendre.|Sesión de proyecto que cierra la unidad 4. Primero, el alumnado sale de una escape room en la app: cuatro salas (un correo trampa, los permisos de una app de recetas, una actualización y escudos o agujeros) que dan las cuatro cifras del código. Después, en equipos, diseña su propia escape room de ciberseguridad en papel, con una prueba por sala, para hacerla con la familia o con otra clase. El valor es repasar toda la unidad con un reto motivador y aprender a hacer buenas pruebas: un tema, una situación corta, una pista que ayuda y una idea para aprender.",
      claus: [
        "L'escape room de l'app repassa tota la unitat: missatges trampa, permisos, actualitzacions i escuts dels dispositius.|La escape room de la app repasa toda la unidad: mensajes trampa, permisos, actualizaciones y escudos de los dispositivos.",
        "Una bona prova té tema, situació curta, pista que ajuda sense dir la resposta, solució comprovable i una idea per aprendre.|Una buena prueba tiene tema, situación corta, pista que ayuda sin decir la respuesta, solución comprobable y una idea para aprender.",
        "El treball és en equip: cada persona prepara una sala i les proves es revisen entre equips.|El trabajo es en equipo: cada persona prepara una sala y las pruebas se revisan entre equipos.",
        "Fer de guia (ajudar sense dir la resposta) és una manera d'ensenyar el que s'ha après.|Hacer de guía (ayudar sin decir la respuesta) es una manera de enseñar lo que se ha aprendido."
      ],
      prev: [
        "Sessions d4-1, d4-2 i d4-3: missatges trampa, permisos, wifi, actualitzacions, còpies i bloqueig.|Sesiones d4-1, d4-2 y d4-3: mensajes trampa, permisos, wifi, actualizaciones, copias y bloqueo.",
        "Sessió d2-4: treballar en equip en un projecte i revisar-lo amb sinceritat.|Sesión d2-4: trabajar en equipo en un proyecto y revisarlo con sinceridad."
      ],
      obj: [
        "L'alumne/a resol proves de ciberseguretat de tota la unitat i n'obté el codi.|El alumno/a resuelve pruebas de ciberseguridad de toda la unidad y obtiene el código.",
        "L'alumne/a dissenya una prova amb tema, situació, pista, solució i idea per aprendre.|El alumno/a diseña una prueba con tema, situación, pista, solución e idea para aprender.",
        "L'alumne/a col·labora en equip per muntar una escape room de quatre sales.|El alumno/a colabora en equipo para montar una escape room de cuatro salas.",
        "L'alumne/a dona i rep propostes de millora de manera respectuosa.|El alumno/a da y recibe propuestas de mejora de manera respetuosa."
      ],
      comp: [
        "Competència digital (CD4): seguretat i protecció, aplicada a situacions noves|Competencia digital (CD4): seguridad y protección, aplicada a situaciones nuevas",
        "Competència emprenedora: dissenyar un repte per a altres persones|Competencia emprendedora: diseñar un reto para otras personas",
        "Competència personal, social i d'aprendre a aprendre: treball en equip i coavaluació|Competencia personal, social y de aprender a aprender: trabajo en equipo y coevaluación"
      ],
      vocab: [
        ["Escape room|Escape room", "Repte en equip on cal resoldre proves per trobar el codi que obre una porta.|Reto en equipo donde hay que resolver pruebas para encontrar el código que abre una puerta."],
        ["Sala|Sala", "Cada una de les proves de l'escape room.|Cada una de las pruebas de la escape room."],
        ["Pista|Pista", "Ajuda que fa pensar sense donar la resposta.|Ayuda que hace pensar sin dar la respuesta."],
        ["Codi|Código", "La combinació final (xifres, lletres o un dibuix) que s'aconsegueix sala a sala.|La combinación final (cifras, letras o un dibujo) que se consigue sala a sala."],
        ["Guia|Guía", "Qui coneix l'escape room i ajuda els altres sense resoldre-la per ells.|Quien conoce la escape room y ayuda a los demás sin resolverla por ellos."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: l'escape room de la ciberseguretat»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la escape room de la ciberseguridad»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "La plantilla de sales (una per equip), cartolines, colors i sobres per guardar les proves|La plantilla de salas (una por equipo), cartulinas, colores y sobres para guardar las pruebas"
        ],
        imprimir: ["Plantilla de l'escape room (imprimible 1): una per equip|Plantilla de la escape room (imprimible 1): una por equipo"],
        prep: [
          "Fer equips de 4 i imprimir una plantilla per equip.|Hacer equipos de 4 e imprimir una plantilla por equipo.",
          "Preparar quatre sobres per equip (un per sala) i una cartolina per a la porta amb el codi.|Preparar cuatro sobres por equipo (uno por sala) y una cartulina para la puerta con el código.",
          "Pensar on es podran provar les escape rooms: una altra classe, el dia de portes obertes o a casa.|Pensar dónde se podrán probar las escape rooms: otra clase, el día de puertas abiertas o en casa."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: tancats al laboratori!|Bienvenida: ¡encerrados en el laboratorio!", fase: 'inici',
          fa: "Explica la història: en Bit s'ha quedat tancat al laboratori i cal resoldre quatre sales per trobar el codi. Fes el repàs ràpid de la unitat amb la diapositiva de repàs i explica que, després, cada equip en dissenyarà una de pròpia.|Explica la historia: Bit se ha quedado encerrado en el laboratorio y hay que resolver cuatro salas para encontrar el código. Haz el repaso rápido de la unidad con la diapositiva de repaso y explica que, después, cada equipo diseñará una propia.",
          diu: ["Quins temes hem treballat aquesta unitat?|¿Qué temas hemos trabajado esta unidad?",
            "Algú ha fet mai una escape room? Com funcionava?|¿Alguien ha hecho alguna vez una escape room? ¿Cómo funcionaba?",
            "Avui sortirem d'una i en farem una de nostra.|Hoy saldremos de una y haremos una nuestra."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 5, t: "Com funciona i com es fa una bona prova|Cómo funciona y cómo se hace una buena prueba", fase: 'teoria',
          fa: "Amb l'animació de la porta, explica les sales i el codi. Amb la de la prova, mostra les parts d'una bona prova. Llegiu junts els consells de treball en equip.|Con la animación de la puerta, explica las salas y el código. Con la de la prueba, muestra las partes de una buena prueba. Leed juntos los consejos de trabajo en equipo.",
          diu: ["Com ha de ser una pista? (Que ajudi, però que no digui la resposta.)|¿Cómo debe ser una pista? (Que ayude, pero que no diga la respuesta.)",
            "Una prova molt difícil és una bona prova? (No sempre: ha d'ensenyar alguna cosa.)|¿Una prueba muy difícil es una buena prueba? (No siempre: tiene que enseñar algo.)",
            "Com ens repartirem la feina?|¿Cómo nos repartiremos el trabajo?"],
          slides: ['s3', 's4', 's5'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 20, t: "A l'ordinador: l'escape room|En el ordenador: la escape room", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la porta: les preguntes de repàs, la història, les targetes, les quatre sales (amb la pausa activa al mig) i el codi. Han d'apuntar les xifres en un paper. Després fan el repte extra del conserge.|Cada alumno/a hace la sesión hasta la puerta: las preguntas de repaso, la historia, las tarjetas, las cuatro salas (con la pausa activa en medio) y el código. Deben apuntar las cifras en un papel. Después hacen el reto extra del conserje.",
          diu: ["Quina sala us ha costat més? Per què?|¿Qué sala os ha costado más? ¿Por qué?",
            "Quin era el codi? (7 2 9 4.)|¿Cuál era el código? (7 2 9 4.)",
            "Per què el missatge del conserge era una suplantació?|¿Por qué el mensaje del conserje era una suplantación?"],
          slides: ['s6', 's7', 's8'], app: "De «Recorda» fins al repte extra del conserge.|De «Recuerda» hasta el reto extra del conserje.", org: "Individual|Individual" },
        { min: 5, t: "Crea: tria les proves|Crea: elige las pruebas", fase: 'crea',
          fa: "A l'app, cada alumne/a tria una prova per a cada sala i el tipus de codi, i ho desa. Després, ajunten les idees amb el seu equip i decideixen quina prova farà cada persona.|En la app, cada alumno/a elige una prueba para cada sala y el tipo de código, y lo guarda. Después, juntan las ideas con su equipo y deciden qué prueba hará cada persona.",
          diu: ["Quines proves heu triat? Coincidiu amb el vostre equip?|¿Qué pruebas habéis elegido? ¿Coincidís con vuestro equipo?",
            "Quin codi fareu servir?|¿Qué código usaréis?",
            "Qui farà cada sala?|¿Quién hará cada sala?"],
          slides: ['s9'], app: "El pas «Crea»: la meva escape room.|El paso «Crea»: mi escape room.", org: "Individual i després en equip|Individual y después en equipo" },
        { min: 17, t: "L'escape room en paper|La escape room en papel", fase: 'desconnectat',
          fa: "Cada persona prepara la seva sala en una targeta de la plantilla: situació, pregunta, pista i part del codi. Després, intercanvien l'escape room amb un altre equip, la resolen i es donen una cosa que funciona i una que es pot millorar. Fes-los fer de guies: ajudar sense dir la resposta.|Cada persona prepara su sala en una tarjeta de la plantilla: situación, pregunta, pista y parte del código. Después, intercambian la escape room con otro equipo, la resuelven y se dan una cosa que funciona y una que se puede mejorar. Haz que hagan de guías: ayudar sin decir la respuesta.",
          diu: ["La pista ajuda sense dir la resposta?|¿La pista ayuda sin decir la respuesta?",
            "Què ha après l'altre equip resolent la vostra sala?|¿Qué ha aprendido el otro equipo resolviendo vuestra sala?",
            "Una cosa que funciona i una que es pot millorar.|Una cosa que funciona y una que se puede mejorar."],
          slides: ['s10', 's11', 's12'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Equips de 4|Equipos de 4" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu la unitat amb el resum. Fes el tiquet de sortida i que facin les preguntes finals i com s'han sentit. Acordeu on provareu les escape rooms (a casa, amb una altra classe…).|Repasad la unidad con el resumen. Haz el ticket de salida y que hagan las preguntas finales y cómo se han sentido. Acordad dónde probaréis las escape rooms (en casa, con otra clase…).",
          diu: ["Quin consell de la unitat us emporteu?|¿Qué consejo de la unidad os lleváis?",
            "Què ha fet bé el vostre equip?|¿Qué ha hecho bien vuestro equipo?",
            "A qui ensenyareu la vostra escape room?|¿A quién enseñaréis vuestra escape room?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["No apunta les xifres i, a la porta, no recorda el codi.|No apunta las cifras y, en la puerta, no recuerda el código.",
          "Cada sala torna a mostrar la xifra si es repeteix el pas. Recorda apuntar-les en un paper des del principi.|Cada sala vuelve a mostrar la cifra si se repite el paso. Recuerda apuntarlas en un papel desde el principio."],
        ["Fa una prova que només té una resposta impossible d'endevinar.|Hace una prueba que solo tiene una respuesta imposible de adivinar.",
          "Una bona prova es pot resoldre pensant amb el que s'ha après. Afegiu una pista.|Una buena prueba se puede resolver pensando con lo que se ha aprendido. Añadid una pista."],
        ["La pista diu directament la resposta.|La pista dice directamente la respuesta.",
          "Proposa una pista que faci pensar: «Mira bé les lletres del nom de la xarxa».|Propón una pista que haga pensar: «Mira bien las letras del nombre de la red»."],
        ["Un membre de l'equip vol fer-ho tot.|Un miembro del equipo quiere hacerlo todo.",
          "Recorda que cada persona fa una sala i que la nota és de l'equip. Proposa que ajudi qui s'encalla.|Recuerda que cada persona hace una sala y que la nota es del equipo. Propón que ayude a quien se atasca."],
        ["Es frustra quan l'altre equip no resol la seva sala.|Se frustra cuando el otro equipo no resuelve su sala.",
          "És informació valuosa: potser la prova necessita una pista millor. Millorar-la és part del projecte.|Es información valiosa: quizá la prueba necesita una pista mejor. Mejorarla es parte del proyecto."]
      ],
      diff: {
        mes: "Per anar més enllà: afegir una cinquena sala amb un tema d'una altra unitat (contrasenyes, bulos…) o fer un codi en forma de paraula; preparar la versió per a alumnes més petits, amb pistes més fàcils.|Para ir más allá: añadir una quinta sala con un tema de otra unidad (contraseñas, bulos…) o hacer un código en forma de palabra; preparar la versión para alumnos más pequeños, con pistas más fáciles.",
        menys: "Fer l'escape room de l'app en parella i, en paper, fer només dues sales per equip, partint dels exemples de l'app.|Hacer la escape room de la app en pareja y, en papel, hacer solo dos salas por equipo, partiendo de los ejemplos de la app."
      },
      aval: {
        ticket: ["Digues un consell de ciberseguretat que hagis fet servir a l'escape room.|Di un consejo de ciberseguridad que hayas usado en la escape room.",
          "Digues com ha de ser una bona pista.|Di cómo debe ser una buena pista."],
        rubric: [
          ["Resoldre les sales|Resolver las salas", "Resol les quatre sales i explica per què cada resposta és correcta.|Resuelve las cuatro salas y explica por qué cada respuesta es correcta.", "Resol algunes sales amb ajuda.|Resuelve algunas salas con ayuda."],
          ["Dissenyar una prova|Diseñar una prueba", "La seva prova té tema, situació, pista útil, solució i idea per aprendre.|Su prueba tiene tema, situación, pista útil, solución e idea para aprender.", "La prova és incompleta o la pista dona la resposta.|La prueba está incompleta o la pista da la respuesta."],
          ["Treball en equip|Trabajo en equipo", "Col·labora, fa la seva part i dona i rep propostes amb respecte.|Colabora, hace su parte y da y recibe propuestas con respeto.", "Participa poc o costa acceptar propostes.|Participa poco o le cuesta aceptar propuestas."]
        ]
      },
      casa: "A casa, l'infant pot portar l'escape room que ha fet el seu equip (o fer-ne una de petita) i ser-ne el guia: la família resol les sales i ell o ella ajuda sense dir la resposta. És una manera divertida de repassar en família com reconèixer missatges trampa, com decidir els permisos i com protegir els dispositius.|En casa, el niño o la niña puede llevar la escape room que ha hecho su equipo (o hacer una pequeña) y ser su guía: la familia resuelve las salas y él o ella ayuda sin decir la respuesta. Es una manera divertida de repasar en familia cómo reconocer mensajes trampa, cómo decidir los permisos y cómo proteger los dispositivos.",
      faq: [
        ["Quant de temps cal per fer l'escape room de paper?|¿Cuánto tiempo hace falta para hacer la escape room de papel?", "En aquesta sessió hi ha temps per preparar una sala per persona i provar-la amb un altre equip. Si voleu decorar-la o fer-la més llarga, es pot acabar en una altra sessió de tutoria.|En esta sesión hay tiempo para preparar una sala por persona y probarla con otro equipo. Si queréis decorarla o hacerla más larga, se puede terminar en otra sesión de tutoría."],
        ["I si un equip acaba molt abans?|¿Y si un equipo termina mucho antes?", "Poden fer la cinquena sala, preparar la versió per a petits o fer de guies d'un altre equip.|Pueden hacer la quinta sala, preparar la versión para pequeños o hacer de guías de otro equipo."],
        ["Com s'avalua el projecte?|¿Cómo se evalúa el proyecto?", "Amb la rúbrica: resoldre les sales, dissenyar una bona prova i treballar en equip. Les respostes desades a l'app ajuden a veure què ha triat cada alumne/a.|Con la rúbrica: resolver las salas, diseñar una buena prueba y trabajar en equipo. Las respuestas guardadas en la app ayudan a ver qué ha elegido cada alumno/a."],
        ["Es pot fer l'escape room amb una altra classe?|¿Se puede hacer la escape room con otra clase?", "És una molt bona idea: fer de guies consolida el que han après. Adapteu les pistes a l'edat dels qui la faran.|Es una muy buena idea: hacer de guías consolida lo que han aprendido. Adaptad las pistas a la edad de quienes la harán."]
      ],
      tec: [
        ["No veuen la xifra després d'una sala.|No ven la cifra después de una sala.", "La xifra surt al missatge final quan la sala està ben resolta. Si cal, que tornin al pas amb la fletxa i el resolguin de nou.|La cifra sale en el mensaje final cuando la sala está bien resuelta. Si hace falta, que vuelvan al paso con la flecha y lo resuelvan de nuevo."],
        ["A la sala 3 dubten entre dir-ho a un adult i comprovar l'avís.|En la sala 3 dudan entre decirlo a un adulto y comprobar el aviso.", "L'ordre de l'app és: primer dir-ho a un adult i, junts, comprovar que l'avís surt a la configuració.|El orden de la app es: primero decirlo a un adulto y, juntos, comprobar que el aviso sale en la configuración."],
        ["Al pas «Crea» no es pot continuar.|En el paso «Crea» no se puede continuar.", "Cal respondre totes les preguntes (els punts de dalt); el botó «Desa» s'activa al final.|Hay que responder todas las preguntas (los puntos de arriba); el botón «Guardar» se activa al final."]
      ],
      seg: [
        "Les proves en paper no han de portar números de telèfon, adreces ni noms complets de persones reals.|Las pruebas en papel no deben llevar números de teléfono, direcciones ni nombres completos de personas reales.",
        "Si una prova reprodueix un engany real que ha viscut algú, comprova que la persona hi està d'acord i que no s'hi pot reconèixer.|Si una prueba reproduce un engaño real que ha vivido alguien, comprueba que la persona está de acuerdo y que no se la puede reconocer.",
        "Vetlla perquè els comentaris entre equips siguin amables: primer el que funciona i després el que es pot millorar.|Vela por que los comentarios entre equipos sean amables: primero lo que funciona y después lo que se puede mejorar."
      ],
      extra: [
        "Matemàtiques: quants codis diferents de 4 xifres hi ha? (10.000.) Per què les portes de veritat demanen codis llargs?|Matemáticas: ¿cuántos códigos diferentes de 4 cifras hay? (10.000.) ¿Por qué las puertas de verdad piden códigos largos?",
        "Plàstica: decorar la porta i els sobres de cada sala amb el tema de la prova.|Plástica: decorar la puerta y los sobres de cada sala con el tema de la prueba.",
        "Per als grans: fer una escape room digital senzilla amb el que van aprendre a Creadors (un escenari per sala).|Para los mayores: hacer una escape room digital sencilla con lo que aprendieron en Creadors (un escenario por sala)."
      ],
      trans: [
        "Sessions d4-1 a d4-3: cada sala repassa una sessió de la unitat.|Sesiones d4-1 a d4-3: cada sala repasa una sesión de la unidad.",
        "Sessió d5-1: comença la unitat 5, la IA a fons: com es parla amb una IA.|Sesión d5-1: empieza la unidad 5, la IA a fondo: cómo se habla con una IA.",
        "Matemàtiques (codis i combinacions), plàstica (disseny) i tutoria (treball en equip).|Matemáticas (códigos y combinaciones), plástica (diseño) y tutoría (trabajo en equipo)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "L'escape room de la ciberseguretat|La escape room de la ciberseguridad", x: "Quatre sales, quatre xifres… i una porta.|Cuatro salas, cuatro cifras… y una puerta.",
          nota: "Projecte final de la unitat 4.|Proyecto final de la unidad 4." },
        { id: 's2', k: 'repas', t: "Què hem après a la unitat 4?|¿Qué hemos aprendido en la unidad 4?",
          punts: ["Missatges trampa i les seves disfresses.|Mensajes trampa y sus disfraces.", "Permisos de les apps: té sentit?|Permisos de las apps: ¿tiene sentido?", "Wifi, actualitzacions, còpies i bloqueig.|Wifi, actualizaciones, copias y bloqueo."],
          nota: "Que cada equip digui una idea de cada tema.|Que cada equipo diga una idea de cada tema." },
        { id: 's3', k: 'anim', t: "Com funciona l'escape room|Cómo funciona la escape room", anim: 'd4escape', x: "Cada sala dona una xifra del codi.|Cada sala da una cifra del código.",
          nota: "Insisteix: apunteu les xifres en un paper.|Insiste: apuntad las cifras en un papel." },
        { id: 's4', k: 'anim', t: "Una bona prova|Una buena prueba", anim: 'd4prova', x: "Tema, situació, pista, solució… i una idea per aprendre.|Tema, situación, pista, solución… y una idea para aprender.",
          nota: "Posa un exemple de pista bona i una de dolenta.|Pon un ejemplo de pista buena y uno de mala." },
        { id: 's5', k: 'concepte', t: "En equip|En equipo", pic: 'img/ment/cor.webp',
          punts: ["Cada persona, una sala.|Cada persona, una sala.", "Escoltem totes les idees.|Escuchamos todas las ideas.", "Ajudem qui s'encalla.|Ayudamos a quien se atasca."],
          nota: "Feu els equips abans de passar a l'ordinador.|Haced los equipos antes de pasar al ordenador." },
        { id: 's6', k: 'media', t: "Sala 1: el correu trampa|Sala 1: el correo trampa", x: "Quatre pistes per obrir la sala.|Cuatro pistas para abrir la sala.", media: MAIL,
          nota: "No resolguis la sala: només mostra-la abans de començar.|No resuelvas la sala: solo muéstrala antes de empezar." },
        { id: 's7', k: 'activitat', t: "A l'ordinador: l'escape room|En el ordenador: la escape room", timer: 20,
          punts: ["Obre el projecte de l'escape room.|Abre el proyecto de la escape room.", "Resol les quatre sales i apunta les xifres.|Resuelve las cuatro salas y apunta las cifras.", "Obre la porta amb el codi.|Abre la puerta con el código."],
          nota: "Fes la pausa activa tots junts quan la majoria hi arribi.|Haz la pausa activa todos juntos cuando la mayoría llegue." },
        { id: 's8', k: 'repte', t: "Repte extra: el conserge|Reto extra: el conserje", timer: 2,
          punts: ["Un missatge diu que és el conserge…|Un mensaje dice que es el conserje…", "…i demana el codi del laboratori.|…y pide el código del laboratorio.", "Què ha de fer en Bit?|¿Qué debe hacer Bit?"],
          nota: "Suplantació: un codi no es dona per missatge; es comprova en persona.|Suplantación: un código no se da por mensaje; se comprueba en persona." },
        { id: 's9', k: 'activitat', t: "Crea: tria les proves|Crea: elige las pruebas", timer: 5,
          punts: ["Tria una prova per a cada sala.|Elige una prueba para cada sala.", "Tria el tipus de codi.|Elige el tipo de código.", "Desa-ho i ajunta-ho amb el teu equip.|Guárdalo y júntalo con tu equipo."],
          nota: "Que decideixin qui fa cada sala.|Que decidan quién hace cada sala." },
        { id: 's10', k: 'activitat', t: "L'escape room en paper|La escape room en papel", timer: 10,
          punts: ["Cada persona fa la seva sala a la plantilla.|Cada persona hace su sala en la plantilla.", "Situació, pregunta, pista i part del codi.|Situación, pregunta, pista y parte del código.", "Poseu cada sala en un sobre.|Poned cada sala en un sobre."],
          nota: "Passa per les taules i revisa les pistes.|Pasa por las mesas y revisa las pistas." },
        { id: 's11', k: 'activitat', t: "Intercanvi entre equips|Intercambio entre equipos", timer: 7,
          punts: ["Resoleu l'escape room d'un altre equip.|Resolved la escape room de otro equipo.", "Els autors fan de guies: ajuden sense dir la resposta.|Los autores hacen de guías: ayudan sin decir la respuesta.", "Una cosa que funciona i una per millorar.|Una cosa que funciona y una para mejorar."],
          nota: "Controla el temps: 7 minuts i canvi.|Controla el tiempo: 7 minutos y cambio." },
        { id: 's12', k: 'concepte', t: "Fer de guia|Hacer de guía", pic: 'img/ment/dir.webp',
          punts: ["Pregunta: «Què has mirat?»|Pregunta: «¿Qué has mirado?»", "Dona una pista, no la resposta.|Da una pista, no la respuesta.", "Celebra quan ho resolen.|Celebra cuando lo resuelven."],
          nota: "Deixa-la projectada durant l'intercanvi.|Déjala proyectada durante el intercambio." },
        { id: 's13', k: 'resum', t: "Què hem après a la unitat|Qué hemos aprendido en la unidad",
          punts: ["Els enganys tenen presses: atura't i comprova-ho.|Los engaños tienen prisas: para y compruébalo.", "Permisos: només els que tenen sentit.|Permisos: solo los que tienen sentido.", "Wifi amb cap, actualitzacions, còpies i bloqueig.|Wifi con cabeza, actualizaciones, copias y bloqueo.", "Si alguna cosa va malament, explica-ho.|Si algo va mal, cuéntalo."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Un consell que has fet servir a l'escape room.|Un consejo que has usado en la escape room.", "Com ha de ser una bona pista?|¿Cómo debe ser una buena pista?"],
          nota: "Pot ser oral, per equips.|Puede ser oral, por equipos." },
        { id: 's15', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["Porta l'escape room a casa.|Lleva la escape room a casa.", "Fes de guia de la família.|Haz de guía de la familia.", "Repasseu junts la unitat.|Repasad juntos la unidad."],
          nota: "Si es fa amb una altra classe, acordeu el dia.|Si se hace con otra clase, acordad el día." }
      ],
      print: [
        { id: 'p1', t: "Plantilla de l'escape room|Plantilla de la escape room", k: 'fitxa',
          intro: "Una per equip. Cada persona omple una sala. Retalleu-les i poseu cada sala en un sobre.|Una por equipo. Cada persona rellena una sala. Recortadlas y poned cada sala en un sobre.",
          items: [
            { q: "🎣 Sala 1 · Missatges trampa — Situació, pregunta, pista i part del codi:|🎣 Sala 1 · Mensajes trampa — Situación, pregunta, pista y parte del código:", big: true, sol: "Per exemple: un SMS de paquet fals amb 4 pistes per trobar; la pista: «Mira què demana i amb quantes presses»; la xifra s'aconsegueix en trobar-les totes.|Por ejemplo: un SMS de paquete falso con 4 pistas para encontrar; la pista: «Mira qué pide y con cuántas prisas»; la cifra se consigue al encontrarlas todas." },
            { q: "📲 Sala 2 · Permisos — Situació, pregunta, pista i part del codi:|📲 Sala 2 · Permisos — Situación, pregunta, pista y parte del código:", big: true, sol: "Per exemple: una app inventada amb sis permisos; cal trobar els que no tenen sentit. Pista: «Per a què ho necessita?».|Por ejemplo: una app inventada con seis permisos; hay que encontrar los que no tienen sentido. Pista: «¿Para qué lo necesita?»." },
            { q: "📶 Sala 3 · Wifi i actualitzacions — Situació, pregunta, pista i part del codi:|📶 Sala 3 · Wifi y actualizaciones — Situación, pregunta, pista y parte del código:", big: true, sol: "Per exemple: una llista de wifis i trobar la que imita el nom. Pista: «Mira bé les lletres».|Por ejemplo: una lista de wifis y encontrar la que imita el nombre. Pista: «Mira bien las letras»." },
            { q: "🔐 Sala 4 · Còpies i bloqueig — Situació, pregunta, pista i part del codi:|🔐 Sala 4 · Copias y bloqueo — Situación, pregunta, pista y parte del código:", big: true, sol: "Per exemple: sis hàbits per classificar en escut o forat. Pista: «Què passaria si es perd la tauleta?».|Por ejemplo: seis hábitos para clasificar en escudo o agujero. Pista: «¿Qué pasaría si se pierde la tablet?»." },
            { q: "🗝️ El codi de la porta i la idea que s'emporten els qui la resolen:|🗝️ El código de la puerta y la idea que se llevan quienes la resuelven:", sol: "Resposta oberta: un codi de quatre parts i una frase com «Atura't, comprova-ho i explica-ho».|Respuesta abierta: un código de cuatro partes y una frase como «Para, compruébalo y cuéntalo»." }
          ] }
      ]
    }
  });
}
