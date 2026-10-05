/* Tech Digital · unitat 3 «Benestar i vida digital» · guia del professorat (d3-1 … d3-4)
   Material propi de Numi. Classe de 60 minuts; tots els exemples (Vilabit, Galàxia Blocs, VideoNuvi, Cercanuvi…) són inventats.
   Benestar: mai no es jutgen els hàbits de cap família; es parla d'idees que ajuden. Els telèfons d'ajuda (116 111, 017 i 112)
   es presenten sempre després de l'adult de confiança. Si un infant explica una situació real, s'escolta amb calma, no es
   promet guardar el secret i se segueix el protocol del centre. */
{
  // les demos de les diapositives (els mateixos artefactes de l'app, sense pistes clicables)
  const LOCK = { k: 'dig', kind: 'lock', from: 'Dilluns · tauleta de la Jana|Lunes · tablet de Jana', when: '21:47|21:47',
    html: `<div class="dn"><span class="ne">▶️</span><div><small>VideoNuvi</small>El següent vídeo comença en 5 segons…</div></div><div class="dn"><span class="ne">🔥</span><div><small>Galàxia Blocs</small>Perdràs la ratxa de 12 dies si no entres avui!</div></div><div class="dn"><span class="ne">🎁</span><div><small>Galàxia Blocs</small>Premi sorpresa només durant 10 minuts! ⏳</div></div>|<div class="dn"><span class="ne">▶️</span><div><small>VideoNuvi</small>El siguiente vídeo empieza en 5 segundos…</div></div><div class="dn"><span class="ne">🔥</span><div><small>Galàxia Blocs</small>¡Perderás la racha de 12 días si no entras hoy!</div></div><div class="dn"><span class="ne">🎁</span><div><small>Galàxia Blocs</small>¡Premio sorpresa solo durante 10 minutos! ⏳</div></div>` };
  const SHOP = { k: 'dig', kind: 'game', from: 'Galàxia Blocs · Botiga|Galàxia Blocs · Tienda', av: '🪐', when: '💎 40|💎 40',
    html: `<p><span class="gtag">⏳ Oferta: només queden 4:59 minuts!</span></p><div class="gbox"><span class="ge">🎁</span><div><b>Caixa sorpresa llegendària</b><br>Pot tenir un drac daurat… o no! <span class="gbtn">💎 500</span></div></div><p><small>👥 8 amics teus ja tenen el drac daurat!</small></p>|<p><span class="gtag">⏳ Oferta: ¡solo quedan 4:59 minutos!</span></p><div class="gbox"><span class="ge">🎁</span><div><b>Caja sorpresa legendaria</b><br>Puede tener un dragón dorado… ¡o no! <span class="gbtn">💎 500</span></div></div><p><small>👥 ¡8 amigos tuyos ya tienen el dragón dorado!</small></p>` };
  const OMBRA = { k: 'dig', kind: 'chat', from: 'xX_Ombra_Xx|xX_Ombra_Xx', av: '🌑',
    html: `<div class="dm them">Ets el millor constructor de la partida! 🏆</div><div class="dm them">Et regalo 1.000 gemmes 💎 Però parlem per una altra app, que aquí ens vigilen 🤫</div>|<div class="dm them">¡Eres el mejor constructor de la partida! 🏆</div><div class="dm them">Te regalo 1.000 gemas 💎 Pero hablemos por otra app, que aquí nos vigilan 🤫</div>` };
  const SHARK = { k: 'dig', kind: 'post', from: 'Notícies_Xocants_99|Noticias_Chocantes_99', av: '🦈', when: 'ara mateix|ahora mismo',
    html: `<p>🚨 URGENT!!! Compartiu-ho abans que ho esborrin!</p><div style="font-size:42px;text-align:center;background:#EAF4FF;border-radius:12px;padding:8px">🦈⛲🏛️</div><p><i>[Una senyora el mira amb sis dits a la mà. Al fons, un rètol diu «FRAMCÀIA».]</i></p>|<p>🚨 ¡¡¡URGENTE!!! ¡Compartidlo antes de que lo borren!</p><div style="font-size:42px;text-align:center;background:#EAF4FF;border-radius:12px;padding:8px">🦈⛲🏛️</div><p><i>[Una señora lo mira con seis dedos en la mano. Al fondo, un letrero dice «FRAMACIA».]</i></p>` };
  const HELP = { k: 'dig', kind: 'help' };

  Object.assign(TGUIDE, {

    /* ---------- Sessió 1 · El meu temps amb pantalles ---------- */
    'd3-1': {
      intro: "Primera sessió de la unitat 3. L'alumnat reflexiona sobre el temps que passa amb pantalles sense culpes: descobreix que algunes apps estan dissenyades perquè no parem (el vídeo següent que comença sol, les notificacions, les ratxes), aprèn a escoltar els senyals del cos (ulls cansats, mal de cap, mal humor), entén per què les pantalles s'apaguen abans de dormir i fa un primer pla personal. El missatge central és que es pot decidir i que els acords es fan en família, també amb els adults. La classe combina conversa, l'activitat del «dia en blocs» al paper i les simulacions de l'app.|Primera sesión de la unidad 3. El alumnado reflexiona sobre el tiempo que pasa con pantallas sin culpas: descubre que algunas apps están diseñadas para que no paremos (el vídeo siguiente que empieza solo, las notificaciones, las rachas), aprende a escuchar las señales del cuerpo (ojos cansados, dolor de cabeza, mal humor), entiende por qué las pantallas se apagan antes de dormir y hace un primer plan personal. El mensaje central es que se puede decidir y que los acuerdos se hacen en familia, también con los adultos. La clase combina conversación, la actividad del «día en bloques» en papel y las simulaciones de la app.",
      claus: [
        "Les pantalles són útils, però el dia també necessita moviment, son, temps amb la gent i una mica d'avorriment.|Las pantallas son útiles, pero el día también necesita movimiento, sueño, tiempo con la gente y un poco de aburrimiento.",
        "Algunes apps tenen trucs de disseny perquè no parem: si costa parar, no és culpa de l'infant, i hi ha trucs que ajuden (temporitzador, notificacions apagades, desactivar el vídeo següent amb un adult).|Algunas apps tienen trucos de diseño para que no paremos: si cuesta parar, no es culpa del niño o la niña, y hay trucos que ayudan (temporizador, notificaciones apagadas, desactivar el vídeo siguiente con un adulto).",
        "A aquesta edat calen entre 9 i 12 hores de son: les pantalles s'apaguen una estona abans (millor una hora) i dormen fora de l'habitació.|A esta edad hacen falta entre 9 y 12 horas de sueño: las pantallas se apagan un rato antes (mejor una hora) y duermen fuera de la habitación.",
        "Els acords es fan en família i valen per a tothom: concrets, possibles de complir i revisables.|Los acuerdos se hacen en familia y valen para todo el mundo: concretos, posibles de cumplir y revisables."
      ],
      prev: [
        "Sessió d1-4: escriure normes concretes i en positiu (el decàleg).|Sesión d1-4: escribir normas concretas y en positivo (el decálogo).",
        "Sessió d2-1: les presses i les emocions fortes són pistes d'engany (ara, de disseny).|Sesión d2-1: las prisas y las emociones fuertes son pistas de engaño (ahora, de diseño)."
      ],
      obj: [
        "L'alumne/a explica, amb exemples, què vol dir tenir un dia equilibrat amb pantalles i sense.|El alumno/a explica, con ejemplos, qué quiere decir tener un día equilibrado con pantallas y sin ellas.",
        "L'alumne/a reconeix trucs de disseny que fan difícil parar (vídeo següent automàtic, notificacions, ratxes, premis amb presses).|El alumno/a reconoce trucos de diseño que hacen difícil parar (vídeo siguiente automático, notificaciones, rachas, premios con prisas).",
        "L'alumne/a identifica senyals del cos que demanen una pausa i hàbits que ajuden a dormir bé.|El alumno/a identifica señales del cuerpo que piden una pausa y hábitos que ayudan a dormir bien.",
        "L'alumne/a tria idees per al seu pla de pantalles i distingeix un bon acord familiar d'un que cal millorar.|El alumno/a elige ideas para su plan de pantallas y distingue un buen acuerdo familiar de uno que hay que mejorar."
      ],
      comp: [
        "Competència digital (CD4): salut i benestar en l'ús de les tecnologies digitals|Competencia digital (CD4): salud y bienestar en el uso de las tecnologías digitales",
        "Competència personal, social i d'aprendre a aprendre: autoregulació i hàbits saludables|Competencia personal, social y de aprender a aprender: autorregulación y hábitos saludables",
        "Coneixement del medi: hàbits saludables (son, activitat física) i ús responsable de la tecnologia|Conocimiento del medio: hábitos saludables (sueño, actividad física) y uso responsable de la tecnología",
        "Competència ciutadana: acords i convivència a casa|Competencia ciudadana: acuerdos y convivencia en casa"
      ],
      vocab: [
        ["Temps de pantalla|Tiempo de pantalla", "L'estona que passem davant d'un mòbil, una tauleta, un ordinador o la tele.|El rato que pasamos delante de un móvil, una tablet, un ordenador o la tele."],
        ["Reproducció automàtica|Reproducción automática", "Quan el vídeo següent comença sol, sense que l'hagis triat.|Cuando el vídeo siguiente empieza solo, sin que lo hayas elegido."],
        ["Notificació|Notificación", "Un avís que apareix a la pantalla perquè obris una app.|Un aviso que aparece en la pantalla para que abras una app."],
        ["Ratxa|Racha", "Els dies seguits que has entrat a una app; et fa por perdre-la i tornes.|Los días seguidos que has entrado en una app; te da miedo perderla y vuelves."],
        ["Pausa|Pausa", "Una estona per parar, moure't i descansar els ulls.|Un rato para parar, moverte y descansar los ojos."],
        ["Acord|Acuerdo", "Una norma que decidim junts i que val per a tothom.|Una norma que decidimos juntos y que vale para todo el mundo."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «El meu temps amb pantalles»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Mi tiempo con pantallas»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "La fitxa «El meu dia en blocs» (una per alumne/a) i colors|La ficha «Mi día en bloques» (una por alumno/a) y colores"
        ],
        imprimir: ["El meu dia en blocs (imprimible 1): una per alumne/a|Mi día en bloques (imprimible 1): una por alumno/a"],
        prep: [
          "Imprimir una fitxa per alumne/a i preparar colors (verd, vermell, blau i groc).|Imprimir una ficha por alumno/a y preparar colores (verde, rojo, azul y amarillo).",
          "Pensar un exemple propi (sense detalls personals) d'una vegada que una app t'ha costat de deixar: ajuda a treure culpes.|Pensar un ejemplo propio (sin detalles personales) de una vez que una app te ha costado dejar: ayuda a quitar culpas.",
          "Tenir present que hi ha famílies amb realitats molt diferents (horaris, dispositius, germans): les preguntes no han de servir per comparar.|Tener presente que hay familias con realidades muy diferentes (horarios, dispositivos, hermanos): las preguntas no deben servir para comparar."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: on ha anat la tarda?|Bienvenida: ¿adónde se ha ido la tarde?", fase: 'inici',
          fa: "Explica la història d'en Bit, que volia mirar un vídeo i se li va fer fosc. Pregunta si els ha passat alguna cosa semblant, sense demanar quantes hores fan servir pantalles. Recull idees: per què costa parar?|Explica la historia de Bit, que quería ver un vídeo y se le hizo de noche. Pregunta si les ha pasado algo parecido, sin pedir cuántas horas usan pantallas. Recoge ideas: ¿por qué cuesta parar?",
          diu: ["Us ha passat mai que una estona curta s'ha fet molt llarga?|¿Os ha pasado alguna vez que un rato corto se ha hecho muy largo?",
            "Per què creieu que costa tant deixar algunes apps?|¿Por qué creéis que cuesta tanto dejar algunas apps?",
            "Avui no comptarem hores: aprendrem a decidir nosaltres.|Hoy no contaremos horas: aprenderemos a decidir nosotros."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Trampes de disseny, el cos i el son|Trampas de diseño, el cuerpo y el sueño", fase: 'teoria',
          fa: "Amb l'animació i la pantalla de la Jana, mostra els trucs que fan que no parem. Remarca que no és culpa de ningú: estan fets així. Després parla dels senyals del cos i del son (9-12 hores) amb l'animació de la nit, i acaba amb la idea dels acords en família.|Con la animación y la pantalla de Jana, muestra los trucos que hacen que no paremos. Remarca que no es culpa de nadie: están hechos así. Después habla de las señales del cuerpo y del sueño (9-12 horas) con la animación de la noche, y termina con la idea de los acuerdos en familia.",
          diu: ["Quina d'aquestes notificacions us faria obrir l'app ara mateix? Per què?|¿Cuál de estas notificaciones os haría abrir la app ahora mismo? ¿Por qué?",
            "Què us diu el cos quan porteu massa estona amb la pantalla?|¿Qué os dice el cuerpo cuando lleváis demasiado rato con la pantalla?",
            "On dorm la tauleta, a casa vostra? (Sense jutjar: només idees.)|¿Dónde duerme la tablet en vuestra casa? (Sin juzgar: solo ideas.)"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "El meu dia en blocs|Mi día en bloques", fase: 'desconnectat',
          fa: "Cada alumne/a pinta a la fitxa un dia d'escola inventat o real, per blocs de mitja hora: son (blau), escola i deures (groc), moviment i amics (verd), pantalles (vermell). Després, en parelles, comparen idees: hi ha prou blau i prou verd? Quins blocs vermells canviarien de lloc? No es comparen famílies ni hores.|Cada alumno/a pinta en la ficha un día de colegio inventado o real, por bloques de media hora: sueño (azul), colegio y deberes (amarillo), movimiento y amigos (verde), pantallas (rojo). Después, en parejas, comparan ideas: ¿hay bastante azul y bastante verde? ¿Qué bloques rojos cambiarían de sitio? No se comparan familias ni horas.",
          diu: ["Comenceu pel son: quants blocs blaus calen per a 9-12 hores?|Empezad por el sueño: ¿cuántos bloques azules hacen falta para 9-12 horas?",
            "On posaríeu la pantalla perquè no toqui el son ni el moviment?|¿Dónde pondríais la pantalla para que no toque el sueño ni el movimiento?",
            "No hi ha un dia perfecte: busquem idees que ajudin.|No hay un día perfecto: buscamos ideas que ayuden."],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: la pregunta de repàs, la història d'en Bit, les cinc targetes, «M'ajuda a parar o m'enganxa?», la pantalla de la Jana, la pregunta de la força de voluntat i ordenar una bona nit. Feu la pausa activa tots junts.|Cada alumno/a hace la sesión hasta la pausa activa: la pregunta de repaso, la historia de Bit, las cinco tarjetas, «¿Me ayuda a parar o me engancha?», la pantalla de Jana, la pregunta de la fuerza de voluntad y ordenar una buena noche. Haced la pausa activa todos juntos.",
          diu: ["Quina trampa de la pantalla de la Jana us ha costat més de trobar?|¿Qué trampa de la pantalla de Jana os ha costado más encontrar?",
            "Per què el missatge d'en Pau no és una trampa?|¿Por qué el mensaje de Pau no es una trampa?",
            "Ara, tots: mireu lluny i compteu fins a 20!|Ahora, todos: ¡mirad lejos y contad hasta 20!"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 10, t: "Reptes i el meu pla|Retos y mi plan", fase: 'ordinador',
          fa: "Continuen amb els reptes: la conversa amb en Bit a les 21:40, els acords de la família de la Jana, el mal de cap de la Nora i la reproducció automàtica. Després trien el seu pla de pantalles. Comenta en veu alta que el camí de «parar tard» també té final bo: parar sempre té sentit.|Siguen con los retos: la conversación con Bit a las 21:40, los acuerdos de la familia de Jana, el dolor de cabeza de Nora y la reproducción automática. Después eligen su plan de pantallas. Comenta en voz alta que el camino de «parar tarde» también tiene final bueno: parar siempre tiene sentido.",
          diu: ["Què li heu respost a en Bit? Com ho heu dit perquè no s'enfadi?|¿Qué le habéis respondido a Bit? ¿Cómo se lo habéis dicho para que no se enfade?",
            "Per què «Prohibit tot, per sempre» no és un bon acord?|¿Por qué «Prohibido todo, para siempre» no es un buen acuerdo?",
            "Quina idea del vostre pla provareu primer?|¿Qué idea de vuestro plan probaréis primero?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: el meu pla de pantalles (i «La meva setmana de pantalles», per a casa).|«Retos» y el paso «Crea»: mi plan de pantallas (y «Mi semana de pantallas», para casa).", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu les idees clau amb el resum. Fes el tiquet de sortida oralment o en un paper, i que facin les preguntes finals i com s'han sentit. Explica la proposta per a casa: la setmana de pantalles en família, sense renyar ningú.|Repasad las ideas clave con el resumen. Haz el ticket de salida oralmente o en un papel, y que hagan las preguntas finales y cómo se han sentido. Explica la propuesta para casa: la semana de pantallas en familia, sin reñir a nadie.",
          diu: ["Digueu una trampa que fa que no parem i un truc per decidir vosaltres.|Decid una trampa que hace que no paremos y un truco para decidir vosotros.",
            "On dorm la tauleta per dormir bé?|¿Dónde duerme la tablet para dormir bien?",
            "Si us costa molt parar, a qui ho podeu explicar?|Si os cuesta mucho parar, ¿a quién se lo podéis contar?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que, si li costa parar, és culpa seva o que «té un problema».|Piensa que, si le cuesta parar, es culpa suya o que «tiene un problema».",
          "Recorda la targeta de les trampes: estan fetes perquè costi. El que compta és conèixer-les i fer servir trucs.|Recuerda la tarjeta de las trampas: están hechas para que cueste. Lo que cuenta es conocerlas y usar trucos."],
        ["Creu que la solució és prohibir totes les pantalles.|Cree que la solución es prohibir todas las pantallas.",
          "Les pantalles també serveixen per aprendre i crear. Pregunta: què faria que fossin una bona estona i no massa?|Las pantallas también sirven para aprender y crear. Pregunta: ¿qué haría que fueran un buen rato y no demasiado?"],
        ["Compara el seu temps amb el dels companys («jo en faig menys que tu»).|Compara su tiempo con el de los compañeros («yo hago menos que tú»).",
          "Torna al pla personal: cadascú busca idees per a ell o ella. No hi ha competició.|Vuelve al plan personal: cada uno busca ideas para él o ella. No hay competición."],
        ["Diu que la tauleta al llit no el desperta perquè «la té en silenci».|Dice que la tablet en la cama no le despierta porque «la tiene en silencio».",
          "La llum i les ganes de mirar-la «un moment» també compten. Fora de l'habitació és més fàcil descansar.|La luz y las ganas de mirarla «un momento» también cuentan. Fuera de la habitación es más fácil descansar."],
        ["Pensa que els acords són només per als infants.|Piensa que los acuerdos son solo para los niños.",
          "Mostra la targeta dels acords: els millors valen per a tothom, també per als adults (per exemple, cap mòbil a taula).|Muestra la tarjeta de los acuerdos: los mejores valen para todo el mundo, también para los adultos (por ejemplo, ningún móvil en la mesa)."]
      ],
      diff: {
        mes: "Per anar més enllà: buscar a la configuració d'una app inventada (dibuixada) on hi hauria els botons per desactivar el vídeo següent i les notificacions, i explicar-ho a la família; o fer un gràfic de barres amb els colors del «dia en blocs».|Para ir más allá: buscar en la configuración de una app inventada (dibujada) dónde estarían los botones para desactivar el vídeo siguiente y las notificaciones, y explicárselo a la familia; o hacer un gráfico de barras con los colores del «día en bloques».",
        menys: "Donar la fitxa del dia en blocs amb el son i l'escola ja pintats, perquè només hagin de decidir on van les pantalles i el moviment. A l'app, fer els reptes en parella.|Dar la ficha del día en bloques con el sueño y el colegio ya pintados, para que solo tengan que decidir dónde van las pantallas y el movimiento. En la app, hacer los retos en pareja."
      },
      aval: {
        ticket: ["Digues una trampa que fa que no paris i un truc per decidir tu.|Di una trampa que hace que no pares y un truco para decidir tú.",
          "Digues una cosa que ajuda a dormir bé.|Di algo que ayuda a dormir bien."],
        rubric: [
          ["Trampes de disseny|Trampas de diseño", "Reconeix diverses trampes (vídeo següent, notificacions, ratxes) i explica per què funcionen.|Reconoce varias trampas (vídeo siguiente, notificaciones, rachas) y explica por qué funcionan.", "En reconeix alguna amb ajuda.|Reconoce alguna con ayuda."],
          ["Cos i son|Cuerpo y sueño", "Identifica senyals del cos i hàbits per dormir bé (apagar abans, fora de l'habitació).|Identifica señales del cuerpo y hábitos para dormir bien (apagar antes, fuera de la habitación).", "Coneix algun hàbit, però no el relaciona amb el son.|Conoce algún hábito, pero no lo relaciona con el sueño."],
          ["Pla i acords|Plan y acuerdos", "Tria idees concretes per al seu pla i distingeix bons acords familiars.|Elige ideas concretas para su plan y distingue buenos acuerdos familiares.", "Proposa idees generals («menys pantalles») sense concretar.|Propone ideas generales («menos pantallas») sin concretar."]
        ]
      },
      casa: "A casa, podeu fer junts «La meva setmana de pantalles»: tres dies apuntant quanta estona i per a què, i pintant de verd el que us ha fet bé i de vermell el que ha estat massa. Després, sense renyar ningú, escriviu un acord per a tota la família (també per als adults) i proveu-lo una setmana. Si voleu, desactiveu junts la reproducció automàtica i les notificacions que no calen.|En casa, podéis hacer juntos «Mi semana de pantallas»: tres días apuntando cuánto rato y para qué, y pintando de verde lo que os ha hecho bien y de rojo lo que ha sido demasiado. Después, sin reñir a nadie, escribid un acuerdo para toda la familia (también para los adultos) y probadlo una semana. Si queréis, desactivad juntos la reproducción automática y las notificaciones que no hacen falta.",
      faq: [
        ["Quantes hores de pantalla són massa?|¿Cuántas horas de pantalla son demasiadas?", "No hi ha una xifra màgica per a tothom: els pediatres recomanen poca estona d'oci, amb pauses, i que no prengui temps al son, al moviment ni a la família. Més que comptar, mireu com us sentiu i si queda temps per a tot.|No hay una cifra mágica para todo el mundo: los pediatras recomiendan poco rato de ocio, con pausas, y que no quite tiempo al sueño, al movimiento ni a la familia. Más que contar, mirad cómo os sentís y si queda tiempo para todo."],
        ["Els deures amb l'ordinador també compten?|¿Los deberes con el ordenador también cuentan?", "Compten per als ulls i per al cos (cal fer pauses), però no són el mateix que l'oci. Al «dia en blocs» es poden pintar de groc.|Cuentan para los ojos y para el cuerpo (hay que hacer pausas), pero no son lo mismo que el ocio. En el «día en bloques» se pueden pintar de amarillo."],
        ["I si a casa no hi ha cap norma?|¿Y si en casa no hay ninguna norma?", "Cap problema: aquesta sessió és per tenir idees. L'infant pot proposar a casa una sola idea, la que li sembli més fàcil.|Ningún problema: esta sesión es para tener ideas. El niño o la niña puede proponer en casa una sola idea, la que le parezca más fácil."],
        ["Per què parlem de trampes de disseny? No és exagerat?|¿Por qué hablamos de trampas de diseño? ¿No es exagerado?", "Moltes apps es fan perquè hi passem el màxim de temps possible. Explicar-ho sense alarmisme treu culpes i ajuda a fer servir trucs.|Muchas apps se hacen para que pasemos en ellas el máximo tiempo posible. Explicarlo sin alarmismo quita culpas y ayuda a usar trucos."],
        ["Un alumne diu que es queda despert fins molt tard cada nit.|Un alumno dice que se queda despierto hasta muy tarde cada noche.", "Escolta'l sense jutjar i, en privat, parla-ho amb la tutoria i la família: pot haver-hi moltes causes i val la pena ajudar-lo.|Escúchale sin juzgar y, en privado, háblalo con la tutoría y la familia: puede haber muchas causas y vale la pena ayudarle."]
      ],
      tec: [
        ["Es pot desactivar el vídeo següent a totes les apps?|¿Se puede desactivar el vídeo siguiente en todas las apps?", "A moltes, sí, a la configuració (sovint es diu «reproducció automàtica»). Ho ha de fer un adult amb l'infant.|En muchas, sí, en la configuración (a menudo se llama «reproducción automática»). Lo tiene que hacer un adulto con el niño o la niña."],
        ["Al pas «M'ajuda a parar» les targetes surten d'una en una.|En el paso «Me ayuda a parar» las tarjetas salen de una en una.", "És normal al mòbil o quan n'hi ha moltes: es poden arrossegar o tocar el calaix.|Es normal en el móvil o cuando hay muchas: se pueden arrastrar o tocar la caja."],
        ["A la pantalla de la Jana no saben on tocar.|En la pantalla de Jana no saben dónde tocar.", "Que toquin la frase de cada notificació, no la icona. El missatge d'en Pau no és una pista.|Que toquen la frase de cada notificación, no el icono. El mensaje de Pau no es una pista."],
        ["Volen tornar a la conversa amb en Bit per provar un altre camí.|Quieren volver a la conversación con Bit para probar otro camino.", "Poden tornar enrere amb la fletxa del pas o tornar a obrir la sessió: tots els camins acaben amb una idea per aprendre.|Pueden volver atrás con la flecha del paso o volver a abrir la sesión: todos los caminos terminan con una idea para aprender."]
      ],
      seg: [
        "No demanis quantes hores fa servir pantalles cada alumne/a ni facis rànquings: és fàcil que algú se senti jutjat o jutjada.|No preguntes cuántas horas usa pantallas cada alumno/a ni hagas rankings: es fácil que alguien se sienta juzgado o juzgada.",
        "Parla sempre d'idees que ajuden, mai de famílies que ho fan bé o malament.|Habla siempre de ideas que ayudan, nunca de familias que lo hacen bien o mal.",
        "Si algun infant explica que no dorm, que passa molta estona sol/a amb pantalles o que alguna cosa li fa por a la nit, escolta'l amb calma i comenta-ho amb la tutoria i la família.|Si algún niño o niña cuenta que no duerme, que pasa mucho rato solo/a con pantallas o que algo le da miedo por la noche, escúchale con calma y coméntalo con la tutoría y la familia."
      ],
      extra: [
        "Educació física: inventar una «pausa de pantalla» de dos minuts per a la classe i fer-la cada dia després de l'ordinador.|Educación física: inventar una «pausa de pantalla» de dos minutos para la clase y hacerla cada día después del ordenador.",
        "Matemàtiques: amb el «dia en blocs», calcular quantes hores són 20 blocs de mitja hora i fer un gràfic de sectors senzill.|Matemáticas: con el «día en bloques», calcular cuántas horas son 20 bloques de media hora y hacer un gráfico de sectores sencillo.",
        "Per als grans: debat sobre per què les apps volen que hi passem temps (com guanyen diners?) i què podríem fer per decidir nosaltres.|Para los mayores: debate sobre por qué las apps quieren que pasemos tiempo en ellas (¿cómo ganan dinero?) y qué podríamos hacer para decidir nosotros."
      ],
      trans: [
        "Sessió d2-1: les presses i les emocions fortes eren pistes de bulo; aquí són trucs de disseny.|Sesión d2-1: las prisas y las emociones fuertes eran pistas de bulo; aquí son trucos de diseño.",
        "Sessió d3-2: les ratxes i els premis amb presses tornen a la botiga del videojoc. Sessió d3-4: el pla d'avui és la base del pacte digital de casa.|Sesión d3-2: las rachas y los premios con prisas vuelven en la tienda del videojuego. Sesión d3-4: el plan de hoy es la base del pacto digital de casa.",
        "Educació física i salut (son, moviment), matemàtiques (temps i gràfics) i tutoria (acords i convivència).|Educación física y salud (sueño, movimiento), matemáticas (tiempo y gráficos) y tutoría (acuerdos y convivencia)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "El meu temps amb pantalles|Mi tiempo con pantallas", x: "Avui descobrirem per què de vegades costa tant parar i com podem decidir nosaltres.|Hoy descubriremos por qué a veces cuesta tanto parar y cómo podemos decidir nosotros.",
          nota: "Presenta la unitat 3: benestar, videojocs i IA. Avui, el temps i el son.|Presenta la unidad 3: bienestar, videojuegos e IA. Hoy, el tiempo y el sueño." },
        { id: 's2', k: 'pregunta', t: "On ha anat la tarda?|¿Adónde se ha ido la tarde?", punts: ["En Bit volia mirar un vídeo… i se li va fer fosc.|Bit quería ver un vídeo… y se le hizo de noche.", "Us ha passat mai?|¿Os ha pasado alguna vez?", "Per què costa tant parar?|¿Por qué cuesta tanto parar?"],
          nota: "Recull idees sense demanar hores. Guarda les respostes per a la diapositiva de les trampes.|Recoge ideas sin pedir horas. Guarda las respuestas para la diapositiva de las trampas." },
        { id: 's3', k: 'anim', t: "Fetes perquè no paris|Hechas para que no pares", anim: 'd3trampa', x: "El vídeo següent, les notificacions, les ratxes i els premis amb presses.|El vídeo siguiente, las notificaciones, las rachas y los premios con prisas.",
          nota: "Remarca: si costa parar, no és culpa de ningú. Saber-ho és el primer pas.|Remarca: si cuesta parar, no es culpa de nadie. Saberlo es el primer paso." },
        { id: 's4', k: 'media', t: "La tauleta de la Jana a les 21:47|La tablet de Jana a las 21:47", x: "Quines notificacions volen que obri l'app ara?|¿Qué notificaciones quieren que abra la app ahora?", media: LOCK,
          nota: "Totes tres són trampes: presses, por de perdre i premis. A aquesta hora, el millor és dormir.|Las tres son trampas: prisas, miedo a perder y premios. A esta hora, lo mejor es dormir." },
        { id: 's5', k: 'concepte', t: "Escolta el teu cos|Escucha tu cuerpo", pic: 'img/ment/sob.webp',
          punts: ["Ulls cansats, mal de cap, mal humor: el cos demana una pausa.|Ojos cansados, dolor de cabeza, mal humor: el cuerpo pide una pausa.", "Mira lluny, estira't, beu aigua.|Mira lejos, estírate, bebe agua.", "Un temporitzador t'ajuda a parar.|Un temporizador te ayuda a parar."],
          nota: "Proposa fer ara mateix una mini pausa: mirar per la finestra comptant fins a 10.|Propón hacer ahora mismo una mini pausa: mirar por la ventana contando hasta 10." },
        { id: 's6', k: 'anim', t: "Les pantalles també van a dormir|Las pantallas también se van a dormir", anim: 'd3son', x: "Entre 9 i 12 hores de son. Pantalles apagades una estona abans i fora de l'habitació.|Entre 9 y 12 horas de sueño. Pantallas apagadas un rato antes y fuera de la habitación.",
          nota: "Explica que la llum i els vídeos emocionants fan que costi adormir-se. Sense jutjar cap casa.|Explica que la luz y los vídeos emocionantes hacen que cueste dormirse. Sin juzgar ninguna casa." },
        { id: 's7', k: 'concepte', t: "Els acords, en família|Los acuerdos, en familia", pic: 'img/ment/rel.webp',
          punts: ["Quanta estona, quan i on.|Cuánto rato, cuándo y dónde.", "Valen per a tothom, també per als adults.|Valen para todo el mundo, también para los adultos.", "Si no funcionen, se'n torna a parlar.|Si no funcionan, se vuelve a hablar."],
          nota: "Dona exemples d'acords per a tothom: cap mòbil a taula, tauletes a la cuina a la nit.|Da ejemplos de acuerdos para todo el mundo: ningún móvil en la mesa, tablets en la cocina por la noche." },
        { id: 's8', k: 'activitat', t: "El meu dia en blocs|Mi día en bloques", timer: 12,
          punts: ["Pinta un dia d'escola per blocs de mitja hora.|Pinta un día de colegio por bloques de media hora.", "Blau: son · Groc: escola i deures · Verd: moviment i amics · Vermell: pantalles.|Azul: sueño · Amarillo: colegio y deberes · Verde: movimiento y amigos · Rojo: pantallas.", "En parella: quins blocs canviaríeu de lloc?|En pareja: ¿qué bloques cambiaríais de sitio?"],
          nota: "Passa per les taules: ajuda a començar pel son (9-12 hores) i no deixis que es comparin entre ells.|Pasa por las mesas: ayuda a empezar por el sueño (9-12 horas) y no dejes que se comparen entre ellos." },
        { id: 's9', k: 'concepte', t: "Sense comparar|Sin comparar", pic: 'img/chars/numi-think.webp',
          punts: ["No hi ha un dia perfecte.|No hay un día perfecto.", "Cada casa és diferent.|Cada casa es diferente.", "Busquem idees que ajudin.|Buscamos ideas que ayuden."],
          nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «El meu temps amb pantalles».|Abre la sesión «Mi tiempo con pantallas».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "A la pausa, ens movem tots junts.|En la pausa, nos movemos todos juntos."],
          nota: "Avisa quan arribin a la pausa activa per fer-la amb tot el grup.|Avisa cuando lleguen a la pausa activa para hacerla con todo el grupo." },
        { id: 's11', k: 'repte', t: "Reptes: decideixo jo|Retos: decido yo", timer: 8,
          punts: ["La conversa amb en Bit a les 21:40.|La conversación con Bit a las 21:40.", "Bons acords per a la família de la Jana.|Buenos acuerdos para la familia de Jana.", "El mal de cap de la Nora i la reproducció automàtica.|El dolor de cabeza de Nora y la reproducción automática."],
          nota: "Pregunta com han dit que no a en Bit sense enfadar-se: és el mateix que dir que no a la contrasenya.|Pregunta cómo le han dicho que no a Bit sin enfadarse: es lo mismo que decir que no a la contraseña." },
        { id: 's12', k: 'activitat', t: "Crea: el meu pla de pantalles|Crea: mi plan de pantallas", timer: 2,
          punts: ["Tria una idea per a cada moment.|Elige una idea para cada momento.", "Pensa quina provaràs primer.|Piensa cuál probarás primero.", "A casa: la setmana de pantalles en família.|En casa: la semana de pantallas en familia."],
          nota: "Que diguin en veu alta una idea del seu pla; així se'n recorden més.|Que digan en voz alta una idea de su plan; así se acuerdan más." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Algunes apps estan fetes perquè no parem: no és culpa nostra.|Algunas apps están hechas para que no paremos: no es culpa nuestra.", "El cos ens avisa: pausa, moviment i son.|El cuerpo nos avisa: pausa, movimiento y sueño.", "Les pantalles dormen fora de l'habitació.|Las pantallas duermen fuera de la habitación.", "Els acords es fan en família.|Los acuerdos se hacen en familia."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues una trampa que fa que no paris i un truc per decidir tu.|Di una trampa que hace que no pares y un truco para decidir tú.", "Digues una cosa que ajuda a dormir bé.|Di algo que ayuda a dormir bien."],
          nota: "Pot ser oral, per torns, o en un paper.|Puede ser oral, por turnos, o en un papel." },
        { id: 's15', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["La meva setmana de pantalles, en família.|Mi semana de pantallas, en familia.", "Verd: m'ha fet bé · Vermell: ha estat massa.|Verde: me ha hecho bien · Rojo: ha sido demasiado.", "Un acord per a tothom, sense renyar ningú.|Un acuerdo para todo el mundo, sin reñir a nadie."],
          nota: "Recorda que és una proposta, no una obligació: cada família l'adapta.|Recuerda que es una propuesta, no una obligación: cada familia la adapta." }
      ],
      print: [
        { id: 'p1', t: "El meu dia en blocs|Mi día en bloques", k: 'fitxa',
          intro: "Pinta un dia d'escola per blocs de mitja hora. Blau: son. Groc: escola i deures. Verd: moviment i amics. Vermell: pantalles.|Pinta un día de colegio por bloques de media hora. Azul: sueño. Amarillo: colegio y deberes. Verde: movimiento y amigos. Rojo: pantallas.",
          items: [
            { q: "El meu dia (de les 7 del matí a les 9 del vespre), per blocs:|Mi día (de las 7 de la mañana a las 9 de la noche), por bloques:", big: true, sol: "Resposta oberta. Valoreu que hi hagi son suficient (9-12 hores comptant la nit), moviment i estones sense pantalles.|Respuesta abierta. Valorad que haya sueño suficiente (9-12 horas contando la noche), movimiento y ratos sin pantallas." },
            { q: "Quants blocs blaus (son) calen per a 10 hores?|¿Cuántos bloques azules (sueño) hacen falta para 10 horas?", sol: "20 blocs de mitja hora.|20 bloques de media hora." },
            { q: "Una trampa que fa que no pari:|Una trampa que hace que no pare:", sol: "Per exemple: el vídeo següent que comença sol, les notificacions, les ratxes o els premis amb presses.|Por ejemplo: el vídeo siguiente que empieza solo, las notificaciones, las rachas o los premios con prisas." },
            { q: "Un truc per decidir jo:|Un truco para decidir yo:", sol: "Per exemple: un temporitzador, decidir abans què miraré o treure les notificacions amb un adult.|Por ejemplo: un temporizador, decidir antes qué veré o quitar las notificaciones con un adulto." },
            { q: "Un acord que proposaré a casa (per a tothom):|Un acuerdo que propondré en casa (para todo el mundo):", sol: "Resposta oberta: valoreu que sigui concret i possible de complir.|Respuesta abierta: valorad que sea concreto y posible de cumplir." }
          ] }
      ]
    },

    /* ---------- Sessió 2 · Videojocs en línia ---------- */
    'd3-2': {
      intro: "Segona sessió de la unitat 3. Molts infants d'aquesta edat ja fan partides en línia, sovint amb xat de text o de veu. L'alumnat aprèn que a la partida hi pot haver desconeguts, que amb ells no es comparteixen dades ni fotos i que «parlem per una altra app», els regals i els secrets són senyals d'alarma. També descobreix que les gemmes es paguen amb diners de veritat, que les caixes sorpresa (caixes de botí) funcionen com una loteria i que l'etiqueta PEGI diu l'edat recomanada. El to és positiu: les partides poden ser una bona estona, i cal saber protegir-se i demanar ajuda.|Segunda sesión de la unidad 3. Muchos niños y niñas de esta edad ya hacen partidas en línea, a menudo con chat de texto o de voz. El alumnado aprende que en la partida puede haber desconocidos, que con ellos no se comparten datos ni fotos y que «hablemos por otra app», los regalos y los secretos son señales de alarma. También descubre que las gemas se pagan con dinero de verdad, que las cajas sorpresa (cajas de botín) funcionan como una lotería y que la etiqueta PEGI dice la edad recomendada. El tono es positivo: las partidas pueden ser un buen rato, y hay que saber protegerse y pedir ayuda.",
      claus: [
        "A la partida en línia hi pot haver desconeguts: es parla només de la partida, sense dades personals, fotos ni càmera.|En la partida en línea puede haber desconocidos: se habla solo de la partida, sin datos personales, fotos ni cámara.",
        "Regals, «parlem per una altra app» i secrets són senyals d'alarma: bloquejar, denunciar i explicar-ho a un adult. Mai no és culpa de l'infant.|Regalos, «hablemos por otra app» y secretos son señales de alarma: bloquear, denunciar y contárselo a un adulto. Nunca es culpa del niño o la niña.",
        "Les monedes i gemmes costen diners de veritat; les caixes sorpresa són com una loteria i poden enganxar. Les compres, sempre amb un adult (i amb bloqueig de compres).|Las monedas y gemas cuestan dinero de verdad; las cajas sorpresa son como una lotería y pueden enganchar. Las compras, siempre con un adulto (y con bloqueo de compras).",
        "L'etiqueta PEGI (3, 7, 12, 16 o 18) diu l'edat mínima recomanada i avisa de les compres dins del videojoc.|La etiqueta PEGI (3, 7, 12, 16 o 18) dice la edad mínima recomendada y avisa de las compras dentro del videojuego."
      ],
      prev: [
        "Sessió d1-2: desconeguts, senyals d'alarma i el xat de l'Estel_Blau_11 a Galàxia Blocs.|Sesión d1-2: desconocidos, señales de alarma y el chat de Estel_Blau_11 en Galàxia Blocs.",
        "Sessió d3-1: les trampes de disseny (presses, ratxes i premis).|Sesión d3-1: las trampas de diseño (prisas, rachas y premios)."
      ],
      obj: [
        "L'alumne/a distingeix missatges normals i senyals d'alarma en el xat d'una partida en línia.|El alumno/a distingue mensajes normales y señales de alarma en el chat de una partida en línea.",
        "L'alumne/a sap què fer si algú el molesta o li demana dades, fotos o passar a una altra app: silenciar, bloquejar, denunciar i explicar-ho.|El alumno/a sabe qué hacer si alguien le molesta o le pide datos, fotos o pasar a otra app: silenciar, bloquear, denunciar y contarlo.",
        "L'alumne/a reconeix les trampes de la botiga d'un videojoc i explica que les gemmes i les caixes sorpresa costen diners de veritat.|El alumno/a reconoce las trampas de la tienda de un videojuego y explica que las gemas y las cajas sorpresa cuestan dinero de verdad.",
        "L'alumne/a interpreta l'etiqueta PEGI i configura un perfil de partida segur.|El alumno/a interpreta la etiqueta PEGI y configura un perfil de partida seguro."
      ],
      comp: [
        "Competència digital (CD4): seguretat, protecció de dades i benestar en entorns en línia|Competencia digital (CD4): seguridad, protección de datos y bienestar en entornos en línea",
        "Competència digital (CD3): interactuar amb respecte i seguretat en plataformes en línia|Competencia digital (CD3): interactuar con respeto y seguridad en plataformas en línea",
        "Competència matemàtica i consum responsable: el valor real dels diners virtuals|Competencia matemática y consumo responsable: el valor real del dinero virtual",
        "Competència personal i social: demanar ajuda i dir que no|Competencia personal y social: pedir ayuda y decir que no"
      ],
      vocab: [
        ["Partida en línia|Partida en línea", "Una partida d'un videojoc on hi ha altres persones connectades des d'altres llocs.|Una partida de un videojuego donde hay otras personas conectadas desde otros sitios."],
        ["Xat de veu|Chat de voz", "Parlar en directe amb la gent de la partida.|Hablar en directo con la gente de la partida."],
        ["Gemmes o monedes|Gemas o monedas", "Diners del videojoc que es compren amb diners de veritat.|Dinero del videojuego que se compra con dinero de verdad."],
        ["Caixa sorpresa (caixa de botí)|Caja sorpresa (caja de botín)", "Un premi que es paga sense saber què hi haurà a dins.|Un premio que se paga sin saber qué habrá dentro."],
        ["PEGI|PEGI", "L'etiqueta europea que diu l'edat mínima recomanada d'un videojoc.|La etiqueta europea que dice la edad mínima recomendada de un videojuego."],
        ["Control parental|Control parental", "Opcions perquè un adult limiti compres, xats o temps.|Opciones para que un adulto limite compras, chats o tiempo."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Videojocs en línia»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Videojuegos en línea»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Les targetes «Què fem a la partida?» (un paquet per grup de 4)|Las tarjetas «¿Qué hacemos en la partida?» (un paquete por grupo de 4)"
        ],
        imprimir: ["Què fem a la partida? (imprimible 1): un paquet de targetes per grup|¿Qué hacemos en la partida? (imprimible 1): un paquete de tarjetas por grupo"],
        prep: [
          "Imprimir i retallar un paquet de targetes per grup i preparar tres rètols: «Normal», «Alarma» i «Pregunto a un adult».|Imprimir y recortar un paquete de tarjetas por grupo y preparar tres carteles: «Normal», «Alarma» y «Pregunto a un adulto».",
          "Revisar el protocol del centre per si algun alumne/a explica un contacte real amb un adult desconegut a la xarxa.|Revisar el protocolo del centro por si algún alumno/a cuenta un contacto real con un adulto desconocido en la red.",
          "Tenir a mà els telèfons 116 111 (ajuda a la infància i l'adolescència) i 017 (ajuda en ciberseguretat).|Tener a mano los teléfonos 116 111 (ayuda a la infancia y la adolescencia) y 017 (ayuda en ciberseguridad)."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: Galàxia Blocs|Bienvenida: Galàxia Blocs", fase: 'inici',
          fa: "Presenta Galàxia Blocs, un videojoc en línia inventat. Pregunta, sense marques, què els agrada de les partides en línia i amb qui les fan. Valora el que tenen de bo (crear, col·laborar) abans de parlar de riscos.|Presenta Galàxia Blocs, un videojuego en línea inventado. Pregunta, sin marcas, qué les gusta de las partidas en línea y con quién las hacen. Valora lo que tienen de bueno (crear, colaborar) antes de hablar de riesgos.",
          diu: ["Què us agrada de fer partides amb altra gent?|¿Qué os gusta de hacer partidas con otra gente?",
            "Amb qui parleu quan feu una partida en línia?|¿Con quién habláis cuando hacéis una partida en línea?",
            "Avui aprendrem a gaudir-ne sense que ningú se n'aprofiti.|Hoy aprenderemos a disfrutarlas sin que nadie se aproveche."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Desconeguts, compres i caixes sorpresa|Desconocidos, compras y cajas sorpresa", fase: 'teoria',
          fa: "Amb el xat de l'xX_Ombra_Xx, explica els senyals d'alarma (regals, una altra app, secrets). Després mostra la botiga de Galàxia Blocs i l'animació de la caixa sorpresa: les gemmes són diners de veritat i la caixa és com una loteria. Acaba amb l'etiqueta PEGI.|Con el chat de xX_Ombra_Xx, explica las señales de alarma (regalos, otra app, secretos). Después muestra la tienda de Galàxia Blocs y la animación de la caja sorpresa: las gemas son dinero de verdad y la caja es como una lotería. Termina con la etiqueta PEGI.",
          diu: ["Per què creieu que vol parlar per una altra app?|¿Por qué creéis que quiere hablar por otra app?",
            "Una gemma, quants diners de veritat deu costar? Com ho podríem saber?|Una gema, ¿cuánto dinero de verdad debe de costar? ¿Cómo lo podríamos saber?",
            "Què vol dir el número de l'etiqueta PEGI?|¿Qué quiere decir el número de la etiqueta PEGI?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Què fem a la partida?|¿Qué hacemos en la partida?", fase: 'desconnectat',
          fa: "En grups de 4, reparteix el paquet de targetes. Per torns, cadascú en treu una, la llegeix i el grup decideix si és «Normal», «Alarma» o «Pregunto a un adult», i què faria. Al final, cada grup explica una targeta difícil.|En grupos de 4, reparte el paquete de tarjetas. Por turnos, cada uno saca una, la lee y el grupo decide si es «Normal», «Alarma» o «Pregunto a un adulto», y qué haría. Al final, cada grupo explica una tarjeta difícil.",
          diu: ["Si és alarma, què fem? (Silenciar, bloquejar, denunciar i explicar-ho.)|Si es alarma, ¿qué hacemos? (Silenciar, bloquear, denunciar y contarlo.)",
            "Comprar gemmes és dolent? (No, però es fa amb un adult.)|¿Comprar gemas es malo? (No, pero se hace con un adulto.)",
            "I si ja has contestat? (Sempre pots parar i demanar ajuda.)|¿Y si ya has contestado? (Siempre puedes parar y pedir ayuda.)"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
        { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: el repàs, la història, les cinc targetes, «Normal o alarma?», la botiga de Galàxia Blocs, la pregunta de les gemmes i el xat amb l'xX_Ombra_Xx. Fixa't en qui tria camins arriscats al xat i, sense assenyalar, comenta després el final.|Cada alumno/a hace la sesión hasta la pausa activa: el repaso, la historia, las cinco tarjetas, «¿Normal o alarma?», la tienda de Galàxia Blocs, la pregunta de las gemas y el chat con xX_Ombra_Xx. Fíjate en quién elige caminos arriesgados en el chat y, sin señalar, comenta después el final.",
          diu: ["Quina trampa de la botiga us ha sorprès més?|¿Qué trampa de la tienda os ha sorprendido más?",
            "Què ha passat quan heu dit que no a l'xX_Ombra_Xx?|¿Qué ha pasado cuando le habéis dicho que no a xX_Ombra_Xx?",
            "Si mai us passa de veritat, a qui ho explicareu?|Si alguna vez os pasa de verdad, ¿a quién se lo contaréis?"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 12, t: "Reptes i el perfil segur|Retos y el perfil seguro", fase: 'ordinador',
          fa: "Continuen amb els reptes (ho faig o pregunto?, ordenar què fer si t'insulten al xat de veu, PEGI 16 i la caixa sorpresa) i configuren el perfil de la Lluna. En el perfil, el xat de veu i els missatges privats poden anar a «Amics» o a «Només jo»: totes dues respostes són bones.|Siguen con los retos (¿lo hago o pregunto?, ordenar qué hacer si te insultan en el chat de voz, PEGI 16 y la caja sorpresa) y configuran el perfil de Lluna. En el perfil, el chat de voz y los mensajes privados pueden ir a «Amigos» o a «Solo yo»: las dos respuestas son buenas.",
          diu: ["Per què instal·lar un videojoc nou és de «pregunto abans»?|¿Por qué instalar un videojuego nuevo es de «pregunto antes»?",
            "Què fem primer si algú ens insulta? (Protegir-nos: silenciar.)|¿Qué hacemos primero si alguien nos insulta? (Protegernos: silenciar.)",
            "Qui ha de poder parlar-vos al xat de veu?|¿Quién tiene que poder hablaros en el chat de voz?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: el perfil de la Lluna (i «El pacte de la partida», per a casa).|«Retos» y el paso «Crea»: el perfil de Lluna (y «El pacto de la partida», para casa).", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu el resum i fes el tiquet de sortida. Que facin les preguntes finals i com s'han sentit. Explica «El pacte de la partida» per fer a casa i proposa'ls ensenyar el seu videojoc preferit a la família.|Repasad el resumen y haz el ticket de salida. Que hagan las preguntas finales y cómo se han sentido. Explica «El pacto de la partida» para hacer en casa y propónles enseñar su videojuego favorito a la familia.",
          diu: ["Digueu un senyal d'alarma al xat d'una partida.|Decid una señal de alarma en el chat de una partida.",
            "Per què les compres es fan amb un adult?|¿Por qué las compras se hacen con un adulto?",
            "I recordeu: no és culpa vostra, i explicar-ho sempre ajuda.|Y recordad: no es culpa vuestra, y contarlo siempre ayuda."],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que, si algú fa molt de temps que el coneix a la partida, ja no és un desconegut.|Piensa que, si hace mucho tiempo que alguien le conoce en la partida, ya no es un desconocido.",
          "Recorda la regla de d1-2: si ni tu ni la teva família el coneixeu en persona, continua sent un desconegut.|Recuerda la regla de d1-2: si ni tú ni tu familia lo conocéis en persona, sigue siendo un desconocido."],
        ["Creu que les gemmes són «de mentida» i no costen res.|Cree que las gemas son «de mentira» y no cuestan nada.",
          "Fes el càlcul amb un exemple inventat: si 100 gemmes costen 1 euro, quant costa la caixa de 500?|Haz el cálculo con un ejemplo inventado: si 100 gemas cuestan 1 euro, ¿cuánto cuesta la caja de 500?"],
        ["Pensa que la propera caixa sorpresa «segur» que li sortirà el que vol.|Piensa que la próxima caja sorpresa «seguro» que le saldrá lo que quiere.",
          "Com en una loteria, cada caixa és una sorpresa nova: haver-ne obert moltes no fa que la següent sigui millor.|Como en una lotería, cada caja es una sorpresa nueva: haber abierto muchas no hace que la siguiente sea mejor."],
        ["Respon als insults amb més insults «per defensar-se».|Responde a los insultos con más insultos «para defenderse».",
          "Torna a l'ordre del repte 2: primer protegir-se (silenciar), després guardar una prova, bloquejar, denunciar i explicar-ho.|Vuelve al orden del reto 2: primero protegerse (silenciar), después guardar una prueba, bloquear, denunciar y contarlo."],
        ["Té por d'explicar-ho a casa perquè li prendran el videojoc.|Tiene miedo de contarlo en casa porque le quitarán el videojuego.",
          "Valida la por i explica que els adults volen ajudar. Proposa el pacte de la partida: si s'explica, es busca una solució junts.|Valida el miedo y explica que los adultos quieren ayudar. Propón el pacto de la partida: si se cuenta, se busca una solución juntos."]
      ],
      diff: {
        mes: "Per anar més enllà: amb preus inventats (100 gemmes = 1 euro), calcular quants diners de veritat costarien cinc caixes sorpresa i comparar-ho amb una cosa del món real; o dissenyar una botiga de videojoc «honesta», sense trampes.|Para ir más allá: con precios inventados (100 gemas = 1 euro), calcular cuánto dinero de verdad costarían cinco cajas sorpresa y compararlo con algo del mundo real; o diseñar una tienda de videojuego «honesta», sin trampas.",
        menys: "A les targetes en grup, donar només dues categories (Normal / Alarma) i fer la de «Pregunto a un adult» tots junts. A l'app, fer el xat en parella llegint les opcions en veu alta.|En las tarjetas en grupo, dar solo dos categorías (Normal / Alarma) y hacer la de «Pregunto a un adulto» todos juntos. En la app, hacer el chat en pareja leyendo las opciones en voz alta."
      },
      aval: {
        ticket: ["Digues un senyal d'alarma al xat d'una partida i què fas.|Di una señal de alarma en el chat de una partida y qué haces.",
          "Explica per què una caixa sorpresa s'assembla a una loteria.|Explica por qué una caja sorpresa se parece a una lotería."],
        rubric: [
          ["Desconeguts i senyals d'alarma|Desconocidos y señales de alarma", "Reconeix regals, «una altra app», secrets i peticions de dades com a alarma i sap què fer.|Reconoce regalos, «otra app», secretos y peticiones de datos como alarma y sabe qué hacer.", "En reconeix alguns, però dubta què fer.|Reconoce algunos, pero duda qué hacer."],
          ["Compres i caixes sorpresa|Compras y cajas sorpresa", "Explica que les gemmes són diners de veritat, detecta les trampes de la botiga i pregunta abans de comprar.|Explica que las gemas son dinero de verdad, detecta las trampas de la tienda y pregunta antes de comprar.", "Sap que cal preguntar, però no detecta les trampes.|Sabe que hay que preguntar, pero no detecta las trampas."],
          ["Configuració i PEGI|Configuración y PEGI", "Configura un perfil segur i interpreta l'etiqueta PEGI.|Configura un perfil seguro e interpreta la etiqueta PEGI.", "Configura part del perfil amb ajuda.|Configura parte del perfil con ayuda."]
        ]
      },
      casa: "A casa, podeu fer junts «El pacte de la partida»: trieu els videojocs mirant l'etiqueta PEGI, configureu qui pot parlar a l'infant al xat (millor només amics de veritat), activeu el bloqueig de compres i acordeu què fareu si algú el molesta. I feu una partida en família: que l'infant us ensenyi el seu videojoc preferit. Si alguna vegada us explica alguna cosa que li ha passat, agraïu-li la confiança i busqueu la solució junts, sense treure-li de cop el videojoc.|En casa, podéis hacer juntos «El pacto de la partida»: elegid los videojuegos mirando la etiqueta PEGI, configurad quién puede hablar al niño o la niña en el chat (mejor solo amigos de verdad), activad el bloqueo de compras y acordad qué haréis si alguien le molesta. Y haced una partida en familia: que os enseñe su videojuego favorito. Si alguna vez os cuenta algo que le ha pasado, agradecedle la confianza y buscad la solución juntos, sin quitarle de golpe el videojuego.",
      faq: [
        ["Les caixes sorpresa són il·legals?|¿Las cajas sorpresa son ilegales?", "Depèn del país i la normativa canvia. A la sessió no en parlem com a una qüestió de lleis, sinó d'entendre que es paga sense saber què hi haurà i que poden enganxar.|Depende del país y la normativa cambia. En la sesión no hablamos de ello como una cuestión de leyes, sino de entender que se paga sin saber qué habrá dentro y que pueden enganchar."],
        ["Què vol dir l'etiqueta PEGI?|¿Qué quiere decir la etiqueta PEGI?", "És el sistema europeu d'edats per a videojocs: 3, 7, 12, 16 o 18, i unes icones que avisen del contingut (violència, por, llenguatge…) i de les compres dins del videojoc.|Es el sistema europeo de edades para videojuegos: 3, 7, 12, 16 o 18, y unos iconos que avisan del contenido (violencia, miedo, lenguaje…) y de las compras dentro del videojuego."],
        ["Un alumne diu que ja fa partides amb desconeguts cada dia.|Un alumno dice que ya hace partidas con desconocidos cada día.", "No el renyis: valora que ho expliqui i dona-li les eines (parlar només de la partida, sense dades, i explicar-ho si passa alguna cosa). Si et preocupa, parla-ho amb la família.|No le riñas: valora que lo cuente y dale las herramientas (hablar solo de la partida, sin datos, y contarlo si pasa algo). Si te preocupa, háblalo con la familia."],
        ["Per què no posem el nom de videojocs reals?|¿Por qué no ponemos el nombre de videojuegos reales?", "Perquè la sessió serveix per a qualsevol videojoc i no fa publicitat de cap. Galàxia Blocs és inventat.|Porque la sesión sirve para cualquier videojuego y no hace publicidad de ninguno. Galàxia Blocs es inventado."],
        ["I si un alumne/a ha gastat diners sense permís?|¿Y si un alumno/a ha gastado dinero sin permiso?", "Que ho expliqui a casa: no és culpa seva, les botigues estan fetes perquè sigui fàcil. La família pot activar el bloqueig de compres.|Que lo cuente en casa: no es culpa suya, las tiendas están hechas para que sea fácil. La familia puede activar el bloqueo de compras."]
      ],
      tec: [
        ["A la botiga de Galàxia Blocs no troben la quarta trampa.|En la tienda de Galàxia Blocs no encuentran la cuarta trampa.", "Que mirin a sota de tot: la frase dels amics que ja tenen el drac també és una trampa.|Que miren abajo del todo: la frase de los amigos que ya tienen el dragón también es una trampa."],
        ["Al perfil de la Lluna, el xat de veu surt en vermell.|En el perfil de Lluna, el chat de voz sale en rojo.", "«Tothom» no és una bona opció: que triïn «Amics» o «Només jo» i ho tornin a comprovar.|«Todo el mundo» no es una buena opción: que elijan «Amigos» o «Solo yo» y lo vuelvan a comprobar."],
        ["Al xat amb l'xX_Ombra_Xx han triat un camí arriscat.|En el chat con xX_Ombra_Xx han elegido un camino arriesgado.", "El final explica què fer i que no és culpa seva. Poden tornar a fer el pas per provar el camí segur.|El final explica qué hacer y que no es culpa suya. Pueden volver a hacer el paso para probar el camino seguro."],
        ["Volen saber on es configura el control parental del seu videojoc.|Quieren saber dónde se configura el control parental de su videojuego.", "Cada consola i app ho té en un lloc diferent: que ho busquin a casa amb un adult, al menú de configuració o de família.|Cada consola y app lo tiene en un sitio diferente: que lo busquen en casa con un adulto, en el menú de configuración o de familia."]
      ],
      seg: [
        "Si un infant explica que un adult desconegut li ha demanat fotos, li ha fet regals o li ha proposat parlar en privat, agraeix-li la confiança, digues-li que no és culpa seva, no li demanis detalls davant del grup i segueix el protocol del centre.|Si un niño o niña cuenta que un adulto desconocido le ha pedido fotos, le ha hecho regalos o le ha propuesto hablar en privado, agradécele la confianza, dile que no es culpa suya, no le pidas detalles delante del grupo y sigue el protocolo del centro.",
        "No demanis a l'alumnat noms d'usuari, contrasenyes ni captures dels seus videojocs reals.|No pidas al alumnado nombres de usuario, contraseñas ni capturas de sus videojuegos reales.",
        "Evita el to alarmista: les partides en línia poden ser una bona estona. L'objectiu és saber protegir-se i demanar ajuda.|Evita el tono alarmista: las partidas en línea pueden ser un buen rato. El objetivo es saber protegerse y pedir ayuda.",
        "Tingues a mà el 116 111 (ajuda a la infància, gratuït i confidencial) i el 017 (ajuda en ciberseguretat, també per a famílies i docents).|Ten a mano el 116 111 (ayuda a la infancia, gratuito y confidencial) y el 017 (ayuda en ciberseguridad, también para familias y docentes)."
      ],
      extra: [
        "Matemàtiques: amb preus inventats, convertir gemmes en euros i calcular quant costen diverses caixes sorpresa.|Matemáticas: con precios inventados, convertir gemas en euros y calcular cuánto cuestan varias cajas sorpresa.",
        "Llengua: escriure les «normes de bona partida» d'un videojoc inventat de la classe (com parlem, com ens ajudem, què fem si algú molesta).|Lengua: escribir las «normas de buena partida» de un videojuego inventado de la clase (cómo hablamos, cómo nos ayudamos, qué hacemos si alguien molesta).",
        "Per als grans: debat sobre per què els videojocs gratuïts posen botigues i caixes sorpresa (com guanyen diners?).|Para los mayores: debate sobre por qué los videojuegos gratuitos ponen tiendas y cajas sorpresa (¿cómo ganan dinero?)."
      ],
      trans: [
        "Sessió d1-2: el xat de l'Estel_Blau_11 era a Galàxia Blocs; aquí s'hi afegeixen el xat de veu i «una altra app».|Sesión d1-2: el chat de Estel_Blau_11 era en Galàxia Blocs; aquí se añaden el chat de voz y «otra app».",
        "Sessió d2-3: silenciar, bloquejar, denunciar i explicar-ho ja eren els passos davant del ciberassetjament. Sessió d3-1: les presses i les ratxes tornen a la botiga.|Sesión d2-3: silenciar, bloquear, denunciar y contarlo ya eran los pasos ante el ciberacoso. Sesión d3-1: las prisas y las rachas vuelven en la tienda.",
        "Matemàtiques (el valor dels diners), tutoria (dir que no i demanar ajuda) i consum responsable.|Matemáticas (el valor del dinero), tutoría (decir que no y pedir ayuda) y consumo responsable."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Videojocs en línia|Videojuegos en línea", x: "Avui aprendrem a gaudir de les partides en línia sense que ningú se n'aprofiti.|Hoy aprenderemos a disfrutar de las partidas en línea sin que nadie se aproveche.",
          nota: "Comença pel que té de bo: crear, col·laborar, passar-ho bé amb amics.|Empieza por lo que tiene de bueno: crear, colaborar, pasarlo bien con amigos." },
        { id: 's2', k: 'pregunta', t: "Què us agrada de les partides en línia?|¿Qué os gusta de las partidas en línea?", punts: ["Amb qui les feu?|¿Con quién las hacéis?", "Parleu amb altra gent mentre feu la partida?|¿Habláis con otra gente mientras hacéis la partida?", "Heu vist mai una botiga dins un videojoc?|¿Habéis visto alguna vez una tienda dentro de un videojuego?"],
          nota: "Sense marques ni noms d'usuari: només idees.|Sin marcas ni nombres de usuario: solo ideas." },
        { id: 's3', k: 'media', t: "Senyals d'alarma al xat|Señales de alarma en el chat", x: "Regals, «parlem per una altra app» i «no ho diguis».|Regalos, «hablemos por otra app» y «no lo digas».", media: OMBRA,
          nota: "Pregunta per què vol canviar d'app: on ningú no ho veu, ningú no pot ajudar. Bloquejar i explicar-ho.|Pregunta por qué quiere cambiar de app: donde nadie lo ve, nadie puede ayudar. Bloquear y contarlo." },
        { id: 's4', k: 'concepte', t: "A la partida, es parla de la partida|En la partida, se habla de la partida", pic: 'img/ment/rfx.webp',
          punts: ["Ni el nom complet, ni l'escola, ni on vius.|Ni el nombre completo, ni el colegio, ni dónde vives.", "Ni fotos, ni càmera, ni una altra app.|Ni fotos, ni cámara, ni otra app.", "Silenciar, bloquejar, denunciar i explicar-ho.|Silenciar, bloquear, denunciar y contarlo."],
          nota: "Recorda que no és culpa de l'infant si algú l'enganya: hi ha persones que saben fer-ho molt bé.|Recuerda que no es culpa del niño o la niña si alguien le engaña: hay personas que saben hacerlo muy bien." },
        { id: 's5', k: 'media', t: "La botiga de Galàxia Blocs|La tienda de Galàxia Blocs", x: "Quines trampes hi veieu?|¿Qué trampas veis?", media: SHOP,
          nota: "El compte enrere, la caixa sorpresa i «els teus amics ja el tenen». A l'app hi haurà una quarta trampa.|La cuenta atrás, la caja sorpresa y «tus amigos ya lo tienen». En la app habrá una cuarta trampa." },
        { id: 's6', k: 'anim', t: "Com una loteria|Como una lotería", anim: 'd3caixa', x: "Les gemmes costen diners de veritat i no saps què hi haurà.|Las gemas cuestan dinero de verdad y no sabes qué habrá dentro.",
          nota: "Fes el càlcul amb preus inventats: si 100 gemmes són 1 euro, la caixa de 500 són 5 euros.|Haz el cálculo con precios inventados: si 100 gemas son 1 euro, la caja de 500 son 5 euros." },
        { id: 's7', k: 'concepte', t: "L'etiqueta PEGI|La etiqueta PEGI", pic: 'img/ment/sim.webp',
          punts: ["3, 7, 12, 16 o 18: l'edat mínima recomanada.|3, 7, 12, 16 o 18: la edad mínima recomendada.", "Icones: violència, por, llenguatge… i compres dins del videojoc.|Iconos: violencia, miedo, lenguaje… y compras dentro del videojuego.", "Es mira en família abans d'instal·lar.|Se mira en familia antes de instalar."],
          nota: "Pots dibuixar a la pissarra un requadre amb un número gran, com les etiquetes de les capses.|Puedes dibujar en la pizarra un recuadro con un número grande, como las etiquetas de las cajas." },
        { id: 's8', k: 'activitat', t: "Què fem a la partida?|¿Qué hacemos en la partida?", timer: 12,
          punts: ["En grups de 4, traieu una targeta per torns.|En grupos de 4, sacad una tarjeta por turnos.", "Decidiu: Normal, Alarma o Pregunto a un adult.|Decidid: Normal, Alarma o Pregunto a un adulto.", "I què faríeu?|¿Y qué haríais?"],
          nota: "Passa pels grups i demana sempre el «què faríeu», no només la categoria.|Pasa por los grupos y pide siempre el «qué haríais», no solo la categoría." },
        { id: 's9', k: 'concepte', t: "Els quatre botons|Los cuatro botones", pic: 'img/chars/numi-ulleres.webp',
          punts: ["🔇 Silenciar|🔇 Silenciar", "🚫 Bloquejar|🚫 Bloquear", "🚩 Denunciar|🚩 Denunciar", "🤝 Explicar-ho a un adult|🤝 Contárselo a un adulto"],
          nota: "Deixa-la projectada mentre treballen en grup.|Déjala proyectada mientras trabajan en grupo." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13,
          punts: ["Obre la sessió «Videojocs en línia».|Abre la sesión «Videojuegos en línea».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "Al xat, pensa abans de tocar.|En el chat, piensa antes de tocar."],
          nota: "Avisa quan arribin a la pausa activa per fer-la amb tot el grup.|Avisa cuando lleguen a la pausa activa para hacerla con todo el grupo." },
        { id: 's11', k: 'repte', t: "Reptes: partida segura|Retos: partida segura", timer: 9,
          punts: ["Ho faig o pregunto abans?|¿Lo hago o pregunto antes?", "Si t'insulten al xat de veu.|Si te insultan en el chat de voz.", "PEGI 16 i la caixa sorpresa.|PEGI 16 y la caja sorpresa."],
          nota: "Comenteu per què «bloquejar algú que em molesta» és de «ho faig»: protegir-se sempre es pot fer.|Comentad por qué «bloquear a alguien que me molesta» es de «lo hago»: protegerse siempre se puede." },
        { id: 's12', k: 'activitat', t: "Crea: el perfil de la Lluna|Crea: el perfil de Lluna", timer: 3,
          punts: ["Qui la pot sentir al xat de veu?|¿Quién la puede oír en el chat de voz?", "Qui li pot enviar missatges privats?|¿Quién le puede enviar mensajes privados?", "El nom real, l'edat i la ubicació, per a ningú.|El nombre real, la edad y la ubicación, para nadie."],
          nota: "Les opcions «Amics» i «Només jo» són bones per al xat de veu.|Las opciones «Amigos» y «Solo yo» son buenas para el chat de voz." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["A la partida, es parla de la partida.|En la partida, se habla de la partida.", "Regals, una altra app i secrets: alarma.|Regalos, otra app y secretos: alarma.", "Les gemmes són diners de veritat: compres, amb un adult.|Las gemas son dinero de verdad: compras, con un adulto.", "PEGI: l'edat recomanada.|PEGI: la edad recomendada."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues un senyal d'alarma al xat d'una partida i què fas.|Di una señal de alarma en el chat de una partida y qué haces.", "Explica per què una caixa sorpresa s'assembla a una loteria.|Explica por qué una caja sorpresa se parece a una lotería."],
          nota: "Pot ser oral, per torns, o en un paper.|Puede ser oral, por turnos, o en un papel." },
        { id: 's15', k: 'concepte', t: "Per a casa: el pacte de la partida|Para casa: el pacto de la partida", pic: 'img/ment/cor.webp',
          punts: ["Trieu els videojocs mirant l'etiqueta PEGI.|Elegid los videojuegos mirando la etiqueta PEGI.", "Configureu el xat i el bloqueig de compres.|Configurad el chat y el bloqueo de compras.", "I feu una partida en família!|¡Y haced una partida en familia!"],
          nota: "Insisteix que explicar un problema no ha de voler dir quedar-se sense videojoc.|Insiste en que contar un problema no tiene que querer decir quedarse sin videojuego." }
      ],
      print: [
        { id: 'p1', t: "Què fem a la partida?|¿Qué hacemos en la partida?", k: 'targetes',
          intro: "Un paquet per grup de 4. Retalleu les targetes i poseu tres rètols a la taula: «Normal», «Alarma» i «Pregunto a un adult». Totes les situacions són inventades.|Un paquete por grupo de 4. Recortad las tarjetas y poned tres carteles en la mesa: «Normal», «Alarma» y «Pregunto a un adulto». Todas las situaciones son inventadas.",
          items: [
            { t: "«Bona partida! Fins demà» 👋|«¡Buena partida! Hasta mañana» 👋", n: 1 },
            { t: "«Quants anys tens? On vius?» 🏠|«¿Cuántos años tienes? ¿Dónde vives?» 🏠", n: 1 },
            { t: "«Et regalo gemmes si encens la càmera» 📷|«Te regalo gemas si enciendes la cámara» 📷", n: 1 },
            { t: "«Parlem per una altra app, que aquí ens vigilen» 📲|«Hablemos por otra app, que aquí nos vigilan» 📲", n: 1 },
            { t: "Vols comprar un paquet de gemmes 💎|Quieres comprar un paquete de gemas 💎", n: 1 },
            { t: "Una caixa sorpresa costa 500 gemmes 🎁|Una caja sorpresa cuesta 500 gemas 🎁", n: 1 },
            { t: "Algú t'insulta al xat de veu 🎙️|Alguien te insulta en el chat de voz 🎙️", n: 1 },
            { t: "Un company de classe t'ajuda a fer un pont 🌉|Un compañero de clase te ayuda a hacer un puente 🌉", n: 1 },
            { t: "Vols instal·lar un videojoc PEGI 16 🔞|Quieres instalar un videojuego PEGI 16 🔞", n: 1 },
            { t: "«No ho diguis als de casa, eh?» 🤫|«No se lo digas a los de casa, ¿eh?» 🤫", n: 1 },
            { t: "Et demanen amistat des d'un perfil desconegut 👤|Te piden amistad desde un perfil desconocido 👤", n: 1 },
            { t: "L'equip et felicita perquè heu guanyat 🏆|El equipo te felicita porque habéis ganado 🏆", n: 1 }
          ] }
      ]
    },

    /* ---------- Sessió 3 · Qui ho ha fet? ---------- */
    'd3-3': {
      intro: "Tercera sessió de la unitat 3. Després de veure a la unitat 2 què és una IA i com corren els bulos, l'alumnat descobreix que una IA també pot fer imatges i veus que semblen reals: aprèn a buscar pistes, però sobretot a mirar la font i a comprovar-ho per un altre camí (per exemple, trucant a la persona). Entén que fer vídeos falsificats d'algú real fa mal. Després treballa l'autoria: tot el que algú ha creat té autor o autora, i per fer-ho servir cal permís o una llicència (com Creative Commons) i dir de qui és. Acaba amb la cerca guiada: paraules clau, anuncis als resultats i comparar fonts.|Tercera sesión de la unidad 3. Después de ver en la unidad 2 qué es una IA y cómo corren los bulos, el alumnado descubre que una IA también puede hacer imágenes y voces que parecen reales: aprende a buscar pistas, pero sobre todo a mirar la fuente y a comprobarlo por otro camino (por ejemplo, llamando a la persona). Entiende que hacer vídeos falsos de alguien real hace daño. Después trabaja la autoría: todo lo que alguien ha creado tiene autor o autora, y para usarlo hace falta permiso o una licencia (como Creative Commons) y decir de quién es. Termina con la búsqueda guiada: palabras clave, anuncios en los resultados y comparar fuentes.",
      claus: [
        "Una IA pot crear imatges, vídeos i veus que semblen reals; de vegades hi ha pistes (mans, lletres), però la millor pista és la font: qui ho diu i qui més ho explica.|Una IA puede crear imágenes, vídeos y voces que parecen reales; a veces hay pistas (manos, letras), pero la mejor pista es la fuente: quién lo dice y quién más lo cuenta.",
        "Si un àudio o missatge de «la família» demana codis, diners o secrets amb presses, es comprova per un altre camí (trucant al telèfon de sempre). Fer vídeos falsificats d'algú real fa mal.|Si un audio o mensaje de «la familia» pide códigos, dinero o secretos con prisas, se comprueba por otro camino (llamando al teléfono de siempre). Hacer vídeos falsos de alguien real hace daño.",
        "Tot el que algú ha creat té autor o autora: cal permís o una llicència que ho permeti (Creative Commons) i dir de qui és. Les fotos on surten persones necessiten el seu permís.|Todo lo que alguien ha creado tiene autor o autora: hace falta permiso o una licencia que lo permita (Creative Commons) y decir de quién es. Las fotos donde salen personas necesitan su permiso.",
        "Per buscar: poques paraules clau, saltar els anuncis, comparar dues o tres fonts fiables i apuntar-les. Moltes apps d'IA tenen una edat mínima (sovint 13 anys o més).|Para buscar: pocas palabras clave, saltarse los anuncios, comparar dos o tres fuentes fiables y apuntarlas. Muchas apps de IA tienen una edad mínima (a menudo 13 años o más)."
      ],
      prev: [
        "Sessió d2-1: les tres preguntes del caçador/a de bulos i les fonts fiables.|Sesión d2-1: las tres preguntas del cazador/a de bulos y las fuentes fiables.",
        "Sessió d2-2: una IA aprèn d'exemples i les seves respostes es comproven.|Sesión d2-2: una IA aprende de ejemplos y sus respuestas se comprueban.",
        "Sessió d1-3: la foto és de qui hi surt (demanar permís).|Sesión d1-3: la foto es de quien sale (pedir permiso)."
      ],
      obj: [
        "L'alumne/a explica que una IA pot fer imatges i veus que semblen reals i aplica pistes i preguntes per decidir si s'hi pot fiar.|El alumno/a explica que una IA puede hacer imágenes y voces que parecen reales y aplica pistas y preguntas para decidir si se puede fiar.",
        "L'alumne/a sap comprovar per un altre camí un missatge o àudio estrany que sembla de la família.|El alumno/a sabe comprobar por otro camino un mensaje o audio raro que parece de la familia.",
        "L'alumne/a decideix si pot fer servir una obra (meva, amb llicència o amb permís) i cita correctament l'autor o autora.|El alumno/a decide si puede usar una obra (mía, con licencia o con permiso) y cita correctamente al autor o autora.",
        "L'alumne/a fa una cerca amb paraules clau, reconeix els anuncis i tria fonts fiables.|El alumno/a hace una búsqueda con palabras clave, reconoce los anuncios y elige fuentes fiables."
      ],
      comp: [
        "Competència digital (CD1): buscar informació amb paraules clau i valorar-ne la fiabilitat|Competencia digital (CD1): buscar información con palabras clave y valorar su fiabilidad",
        "Competència digital (CD2): crear contingut respectant l'autoria, les llicències i citant les fonts|Competencia digital (CD2): crear contenido respetando la autoría, las licencias y citando las fuentes",
        "Competència digital (CD4): protegir-se d'enganys fets amb IA (imatges i veus falses)|Competencia digital (CD4): protegerse de engaños hechos con IA (imágenes y voces falsas)",
        "Competència ciutadana: respecte per la imatge i la feina dels altres|Competencia ciudadana: respeto por la imagen y el trabajo de los demás"
      ],
      vocab: [
        ["Imatge generada amb IA|Imagen generada con IA", "Una imatge que no és una foto: l'ha feta un programa a partir d'una descripció.|Una imagen que no es una foto: la ha hecho un programa a partir de una descripción."],
        ["Veu clonada|Voz clonada", "Una veu feta amb IA que imita la d'una persona real.|Una voz hecha con IA que imita la de una persona real."],
        ["Vídeo falsificat (deepfake)|Ultrafalso (deepfake)", "Un vídeo, foto o àudio fet amb IA perquè sembli que algú diu o fa el que no ha fet.|Un vídeo, foto o audio hecho con IA para que parezca que alguien dice o hace lo que no ha hecho."],
        ["Autor o autora|Autor o autora", "La persona que ha creat una obra (un dibuix, una foto, una cançó, un text).|La persona que ha creado una obra (un dibujo, una foto, una canción, un texto)."],
        ["Llicència Creative Commons|Licencia Creative Commons", "Un permís que l'autor/a dona per fer servir la seva obra amb unes condicions, com dir de qui és (CC BY).|Un permiso que el autor/a da para usar su obra con unas condiciones, como decir de quién es (CC BY)."],
        ["Paraula clau|Palabra clave", "Una paraula important que escrivim al cercador per trobar el que busquem.|Una palabra importante que escribimos en el buscador para encontrar lo que buscamos."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Qui ho ha fet?»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «¿Quién lo ha hecho?»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "La fitxa «Detectius de fonts» (una per parella), fulls blancs i colors|La ficha «Detectives de fuentes» (una por pareja), hojas blancas y colores"
        ],
        imprimir: ["Detectius de fonts (imprimible 1): una fitxa per parella|Detectives de fuentes (imprimible 1): una ficha por pareja"],
        prep: [
          "Imprimir una fitxa per parella.|Imprimir una ficha por pareja.",
          "Si l'escola ho permet, preparar una cerca projectada amb un cercador per a infants i un tema de ciències (per exemple, els ocells del riu).|Si el colegio lo permite, preparar una búsqueda proyectada con un buscador para niños y un tema de ciencias (por ejemplo, las aves del río).",
          "Revisar les normes del centre sobre l'ús d'eines d'IA a l'aula i les edats mínimes de les apps.|Revisar las normas del centro sobre el uso de herramientas de IA en el aula y las edades mínimas de las apps."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: un tauró a la plaça?|Bienvenida: ¿un tiburón en la plaza?", fase: 'inici',
          fa: "Projecta la publicació del tauró i pregunta si s'ho creuen. Recull les pistes que diuen i recorda les tres preguntes del caçador/a de bulos. Explica que avui veurem que una IA pot fer imatges i veus que semblen reals.|Proyecta la publicación del tiburón y pregunta si se lo creen. Recoge las pistas que dicen y recuerda las tres preguntas del cazador/a de bulos. Explica que hoy veremos que una IA puede hacer imágenes y voces que parecen reales.",
          diu: ["Us ho creieu? Per què?|¿Os lo creéis? ¿Por qué?",
            "Quines preguntes ens fèiem davant d'un bulo?|¿Qué preguntas nos hacíamos ante un bulo?",
            "I si la foto no l'ha feta ningú amb una càmera?|¿Y si la foto no la ha hecho nadie con una cámara?"],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Imatges i veus amb IA, i qui és l'autor|Imágenes y voces con IA, y quién es el autor", fase: 'teoria',
          fa: "Amb l'animació de la veu, explica que una IA pot imitar la veu d'una persona i que es comprova trucant al telèfon de sempre. Parla dels vídeos falsificats: fer-ne d'algú real fa mal. Després presenta l'autoria i les llicències Creative Commons amb l'animació del dibuix de la Laia, i com se cita una obra.|Con la animación de la voz, explica que una IA puede imitar la voz de una persona y que se comprueba llamando al teléfono de siempre. Habla de los vídeos falsos: hacerlos de alguien real hace daño. Después presenta la autoría y las licencias Creative Commons con la animación del dibujo de Laia, y cómo se cita una obra.",
          diu: ["Com podríeu saber si un àudio és de veritat de l'àvia?|¿Cómo podríais saber si un audio es de verdad de la abuela?",
            "Per què fer un vídeo fals d'un company no és una broma?|¿Por qué hacer un vídeo falso de un compañero no es una broma?",
            "Si una cosa és a internet, és de tothom? (No: té autor o autora.)|Si algo está en internet, ¿es de todo el mundo? (No: tiene autor o autora.)"],
          slides: ['s4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Detectius de fonts|Detectives de fuentes", fase: 'desconnectat',
          fa: "En parelles, amb la fitxa: primer escriuen les paraules clau per a tres preguntes (com trobarien la informació?); després decideixen, per a quatre obres, si les poden fer servir i com les citarien. Si podeu, feu una cerca projectada amb tot el grup: senyaleu l'anunci, compareu dos resultats fiables i apunteu la font.|En parejas, con la ficha: primero escriben las palabras clave para tres preguntas (¿cómo encontrarían la información?); después deciden, para cuatro obras, si las pueden usar y cómo las citarían. Si podéis, haced una búsqueda proyectada con todo el grupo: señalad el anuncio, comparad dos resultados fiables y apuntad la fuente.",
          diu: ["Quines són les paraules importants d'aquesta pregunta?|¿Cuáles son las palabras importantes de esta pregunta?",
            "Aquest resultat és un anunci? Com ho sabem?|¿Este resultado es un anuncio? ¿Cómo lo sabemos?",
            "Com escriuríeu el crèdit d'aquesta foto?|¿Cómo escribiríais el crédito de esta foto?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla (o una cerca projectada pel docent).|Ninguna: actividad sin pantalla (o una búsqueda proyectada por el docente).", org: "Per parelles|Por parejas" },
        { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: les preguntes de repàs, la història, les cinc targetes, «Ho pots fer servir?», la foto del tauró, la pregunta de la foto sense pistes i el missatge de veu de l'àvia Rosa.|Cada alumno/a hace la sesión hasta la pausa activa: las preguntas de repaso, la historia, las cinco tarjetas, «¿Lo puedes usar?», la foto del tiburón, la pregunta de la foto sin pistas y el mensaje de voz de la abuela Rosa.",
          diu: ["Quina pista de la foto del tauró us ha costat més?|¿Qué pista de la foto del tiburón os ha costado más?",
            "Per què no serveix preguntar per aquell mateix xat si és l'àvia?|¿Por qué no sirve preguntar por ese mismo chat si es la abuela?",
            "Una foto on surt un amic: per què cal el seu permís?|Una foto donde sale un amigo: ¿por qué hace falta su permiso?"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 12, t: "Reptes i la meva obra amb crèdits|Retos y mi obra con créditos", fase: 'ordinador',
          fa: "Continuen amb els reptes: els resultats de la cerca de la Mia, ordenar els passos per buscar amb cap, com se cita una foto amb llicència, l'edat de les apps d'IA i el vídeo falsificat d'un company. Després, a paper, fan «La meva obra, amb crèdits» (o la deixen per a casa si no hi ha temps).|Siguen con los retos: los resultados de la búsqueda de Mia, ordenar los pasos para buscar con cabeza, cómo se cita una foto con licencia, la edad de las apps de IA y el vídeo falso de un compañero. Después, en papel, hacen «Mi obra, con créditos» (o la dejan para casa si no hay tiempo).",
          diu: ["Per què el museu i l'ajuntament són bones fonts?|¿Por qué el museo y el ayuntamiento son buenas fuentes?",
            "Què li heu dit a la Jana sobre el xat d'IA?|¿Qué le habéis dicho a Jana sobre el chat de IA?",
            "Quina llicència posaríeu al vostre dibuix?|¿Qué licencia pondríais a vuestro dibujo?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: la meva obra, amb crèdits.|«Retos» y el paso «Crea»: mi obra, con créditos.", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu el resum, fes el tiquet de sortida i deixa que facin les preguntes finals i com s'han sentit. Si hi ha temps, alguns alumnes ensenyen la seva obra amb els crèdits.|Repasad el resumen, haz el ticket de salida y deja que hagan las preguntas finales y cómo se han sentido. Si hay tiempo, algunos alumnos enseñan su obra con los créditos.",
          diu: ["Què feu si veieu una foto increïble i no sabeu si és d'una IA?|¿Qué hacéis si veis una foto increíble y no sabéis si es de una IA?",
            "Com es diu de qui és una foto?|¿Cómo se dice de quién es una foto?",
            "Quines tres coses fem per buscar amb cap?|¿Qué tres cosas hacemos para buscar con cabeza?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que, si una imatge no té cap pista estranya, segur que és real.|Piensa que, si una imagen no tiene ninguna pista rara, seguro que es real.",
          "Les IA milloren cada dia. Torna a les tres preguntes: qui ho diu, de quan és i qui més ho explica.|Las IA mejoran cada día. Vuelve a las tres preguntas: quién lo dice, de cuándo es y quién más lo cuenta."],
        ["Creu que tot el que és a internet es pot fer servir lliurement.|Cree que todo lo que está en internet se puede usar libremente.",
          "Recorda la targeta de l'autoria: hi ha un autor o autora. Busqueu junts una imatge amb llicència lliure i com es cita.|Recuerda la tarjeta de la autoría: hay un autor o autora. Buscad juntos una imagen con licencia libre y cómo se cita."],
        ["Escriu una pregunta llarga al cercador («quins ocells hi ha al riu del meu poble i què mengen»).|Escribe una pregunta larga en el buscador («qué pájaros hay en el río de mi pueblo y qué comen»).",
          "Demana-li que subratlli les paraules importants i que en provi només tres o quatre.|Pídele que subraye las palabras importantes y que pruebe solo tres o cuatro."],
        ["Fa clic al primer resultat sense mirar si és un anunci.|Hace clic en el primer resultado sin mirar si es un anuncio.",
          "Mireu junts l'etiqueta «Anunci» o «Patrocinat»: algú ha pagat perquè surti primer.|Mirad juntos la etiqueta «Anuncio» o «Patrocinado»: alguien ha pagado para que salga primero."],
        ["Diu que fer un vídeo fals d'un amic és «només una broma».|Dice que hacer un vídeo falso de un amigo es «solo una broma».",
          "Pregunta com se sentiria si el vídeo fos d'ell o d'ella i corregués per tota l'escola. Recorda el respecte de d2-3.|Pregunta cómo se sentiría si el vídeo fuera de él o de ella y corriera por todo el colegio. Recuerda el respeto de d2-3."]
      ],
      diff: {
        mes: "Per anar més enllà: buscar en una web de recursos lliures (amb un adult) una imatge amb llicència Creative Commons i escriure'n el crèdit complet; o comparar dues fonts sobre un mateix tema i explicar quina és més fiable i per què.|Para ir más allá: buscar en una web de recursos libres (con un adulto) una imagen con licencia Creative Commons y escribir su crédito completo; o comparar dos fuentes sobre un mismo tema y explicar cuál es más fiable y por qué.",
        menys: "A la fitxa, donar ja subratllades les paraules clau de la primera pregunta i fer la part de les obres amb només dues opcions (la puc fer servir / cal permís). A l'app, fer la cerca de la Mia en parella.|En la ficha, dar ya subrayadas las palabras clave de la primera pregunta y hacer la parte de las obras con solo dos opciones (la puedo usar / hace falta permiso). En la app, hacer la búsqueda de Mia en pareja."
      },
      aval: {
        ticket: ["Digues què fas si t'arriba un àudio estrany que sembla de la família.|Di qué haces si te llega un audio raro que parece de la familia.",
          "Escriu el crèdit d'una foto amb llicència: «Foto: … · llicència …».|Escribe el crédito de una foto con licencia: «Foto: … · licencia …»."],
        rubric: [
          ["Imatges i veus amb IA|Imágenes y voces con IA", "Aplica pistes i, sobretot, la font; comprova per un altre camí i no comparteix.|Aplica pistas y, sobre todo, la fuente; comprueba por otro camino y no comparte.", "Busca pistes a la imatge, però no pensa en la font.|Busca pistas en la imagen, pero no piensa en la fuente."],
          ["Autoria i llicències|Autoría y licencias", "Decideix si pot fer servir una obra i la cita correctament.|Decide si puede usar una obra y la cita correctamente.", "Sap que cal permís, però no sap com citar.|Sabe que hace falta permiso, pero no sabe cómo citar."],
          ["Cerca guiada|Búsqueda guiada", "Fa servir paraules clau, salta els anuncis i compara fonts fiables.|Usa palabras clave, se salta los anuncios y compara fuentes fiables.", "Busca amb frases llargues o es queda amb el primer resultat.|Busca con frases largas o se queda con el primer resultado."]
        ]
      },
      casa: "A casa, podeu parlar de les veus i imatges fetes amb IA: si mai arriba un àudio o missatge estrany «de la família» que demana codis o diners amb presses, es comprova trucant al telèfon de sempre. Algunes famílies acorden una paraula clau per a les emergències. També podeu fer junts una cerca sobre un tema que us agradi: poques paraules clau, saltar els anuncis i comparar dues fonts.|En casa, podéis hablar de las voces e imágenes hechas con IA: si alguna vez llega un audio o mensaje raro «de la familia» que pide códigos o dinero con prisas, se comprueba llamando al teléfono de siempre. Algunas familias acuerdan una palabra clave para las emergencias. También podéis hacer juntos una búsqueda sobre un tema que os guste: pocas palabras clave, saltarse los anuncios y comparar dos fuentes.",
      faq: [
        ["Com sabem segur si una imatge l'ha feta una IA?|¿Cómo sabemos seguro si una imagen la ha hecho una IA?", "Sovint no es pot saber segur només mirant-la. Per això el més important és la font: qui la publica, si altres fonts fiables ho expliquen i si té sentit.|A menudo no se puede saber seguro solo mirándola. Por eso lo más importante es la fuente: quién la publica, si otras fuentes fiables lo cuentan y si tiene sentido."],
        ["Què és una llicència Creative Commons?|¿Qué es una licencia Creative Commons?", "Un permís que l'autor/a dona per avançat perquè la seva obra es pugui fer servir amb unes condicions. La més senzilla, CC BY, només demana dir de qui és.|Un permiso que el autor/a da por adelantado para que su obra se pueda usar con unas condiciones. La más sencilla, CC BY, solo pide decir de quién es."],
        ["L'alumnat pot fer servir apps d'IA a classe?|¿El alumnado puede usar apps de IA en clase?", "Segons les normes del centre. Moltes apps d'IA tenen una edat mínima (sovint 13 anys o més) i demanen el permís de la família; per sota d'aquesta edat, es fan servir guiades per un adult.|Según las normas del centro. Muchas apps de IA tienen una edad mínima (a menudo 13 años o más) y piden el permiso de la familia; por debajo de esa edad, se usan guiadas por un adulto."],
        ["Una imatge feta amb IA té autor?|¿Una imagen hecha con IA tiene autor?", "És un tema que encara es debat. A classe, la regla és senzilla: si una IA t'ha ajudat, ho dius als crèdits.|Es un tema que aún se debate. En clase, la regla es sencilla: si una IA te ha ayudado, lo dices en los créditos."],
        ["I si ja han compartit una imatge falsa?|¿Y si ya han compartido una imagen falsa?", "No passa res: es pot avisar el grup que era falsa i, si feia mal a algú, demanar perdó i explicar-ho a un adult.|No pasa nada: se puede avisar al grupo de que era falsa y, si hacía daño a alguien, pedir perdón y contárselo a un adulto."]
      ],
      tec: [
        ["A la foto del tauró no troben la pista del rètol.|En la foto del tiburón no encuentran la pista del letrero.", "Que llegeixin a poc a poc la paraula entre cometes: les lletres estan barrejades.|Que lean despacio la palabra entre comillas: las letras están mezcladas."],
        ["Al pas «Ho pots fer servir?» hi ha tres calaixos i al mòbil es veuen petits.|En el paso «¿Lo puedes usar?» hay tres cajas y en el móvil se ven pequeñas.", "Es pot tocar el calaix en lloc d'arrossegar: la targeta hi va sola.|Se puede tocar la caja en lugar de arrastrar: la tarjeta va sola."],
        ["Volen fer una cerca real a l'ordinador.|Quieren hacer una búsqueda real en el ordenador.", "Si el centre ho permet, amb un cercador per a infants i guiada pel docent. L'app no surt a internet: la cerca de la Mia és una simulació.|Si el centro lo permite, con un buscador para niños y guiada por el docente. La app no sale a internet: la búsqueda de Mia es una simulación."],
        ["Al missatge de veu de l'àvia algú ha enviat el codi.|En el mensaje de voz de la abuela alguien ha enviado el código.", "El final explica què fer (explicar-ho, canviar la contrasenya, el 017) i que no és culpa seva. Comenteu-ho sense assenyalar.|El final explica qué hacer (contarlo, cambiar la contraseña, el 017) y que no es culpa suya. Comentadlo sin señalar."]
      ],
      seg: [
        "No facis cap demostració de crear imatges o veus d'una persona real (ni de l'alumnat, ni de docents, ni de famosos).|No hagas ninguna demostración de crear imágenes o voces de una persona real (ni del alumnado, ni de docentes, ni de famosos).",
        "Si algun infant explica que han fet una imatge o vídeo fals seu o d'un company, agraeix-li la confiança, no el facis circular i segueix el protocol del centre davant del ciberassetjament.|Si algún niño o niña cuenta que han hecho una imagen o vídeo falso suyo o de un compañero, agradécele la confianza, no lo hagas circular y sigue el protocolo del centro ante el ciberacoso.",
        "Les cerques reals, sempre amb un cercador adequat a l'edat i guiades per un adult.|Las búsquedas reales, siempre con un buscador adecuado a la edad y guiadas por un adulto."
      ],
      extra: [
        "Educació visual i plàstica: fer una exposició de dibuixos de la classe, cadascun amb el seu crèdit i la seva llicència.|Educación visual y plástica: hacer una exposición de dibujos de la clase, cada uno con su crédito y su licencia.",
        "Coneixement del medi: fer una cerca guiada sobre un tema de ciències i comparar dues fonts fiables.|Conocimiento del medio: hacer una búsqueda guiada sobre un tema de ciencias y comparar dos fuentes fiables.",
        "Per als grans: debat sobre si una imatge feta amb IA hauria de portar sempre un avís i qui és responsable si fa mal.|Para los mayores: debate sobre si una imagen hecha con IA debería llevar siempre un aviso y quién es responsable si hace daño."
      ],
      trans: [
        "Sessió d2-1: les tres preguntes del caçador/a de bulos ara serveixen per a les imatges fetes amb IA. Sessió d2-2: com aprèn una IA.|Sesión d2-1: las tres preguntas del cazador/a de bulos ahora sirven para las imágenes hechas con IA. Sesión d2-2: cómo aprende una IA.",
        "Sessió d1-3 i d2-3: la imatge de cadascú és seva i el respecte a la xarxa. Sessió d3-4: el cartell i el pacte porten crèdits.|Sesión d1-3 y d2-3: la imagen de cada uno es suya y el respeto en la red. Sesión d3-4: el cartel y el pacto llevan créditos.",
        "Llengua (citar fonts), coneixement del medi (cercar informació) i educació visual i plàstica (autoria).|Lengua (citar fuentes), conocimiento del medio (buscar información) y educación visual y plástica (autoría)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Qui ho ha fet?|¿Quién lo ha hecho?", x: "Imatges i veus fetes amb IA, l'autoria i com buscar amb cap.|Imágenes y voces hechas con IA, la autoría y cómo buscar con cabeza.",
          nota: "Presenta els tres temes amb una pregunta: qui ha fet el que veiem a internet?|Presenta los tres temas con una pregunta: ¿quién ha hecho lo que vemos en internet?" },
        { id: 's2', k: 'media', t: "Un tauró a la plaça?|¿Un tiburón en la plaza?", x: "Us ho creieu? Quines pistes hi veieu?|¿Os lo creéis? ¿Qué pistas veis?", media: SHARK,
          nota: "Presses, sis dits, un rètol amb lletres barrejades i cap font: és feta amb IA.|Prisas, seis dedos, un letrero con letras mezcladas y ninguna fuente: está hecha con IA." },
        { id: 's3', k: 'concepte', t: "La millor pista: la font|La mejor pista: la fuente", pic: 'img/ment/vel.webp',
          punts: ["Qui ho diu?|¿Quién lo dice?", "De quan és?|¿De cuándo es?", "Qui més ho explica?|¿Quién más lo cuenta?"],
          nota: "Les mateixes preguntes de la unitat 2. Les pistes de la imatge ajuden, però no sempre hi són.|Las mismas preguntas de la unidad 2. Las pistas de la imagen ayudan, pero no siempre están." },
        { id: 's4', k: 'anim', t: "Una veu també es pot copiar|Una voz también se puede copiar", anim: 'd3veu', x: "Si és estrany o amb presses, es comprova trucant a la persona.|Si es raro o con prisas, se comprueba llamando a la persona.",
          nota: "Explica que n'hi ha prou amb pocs segons de veu. La clau és comprovar-ho per un altre camí.|Explica que bastan pocos segundos de voz. La clave es comprobarlo por otro camino." },
        { id: 's5', k: 'concepte', t: "Vídeos falsificats|Ultrafalsos", pic: 'img/ment/par.webp',
          punts: ["Fets amb IA perquè sembli que algú diu o fa el que no ha fet.|Hechos con IA para que parezca que alguien dice o hace lo que no ha hecho.", "Fer-ne un d'algú real fa molt de mal.|Hacer uno de alguien real hace mucho daño.", "Si en veus un: no el comparteixis i explica-ho.|Si ves uno: no lo compartas y cuéntalo."],
          nota: "Connecta-ho amb l'espectador/a actiu/va de d2-3.|Conéctalo con el espectador/a activo/a de d2-3." },
        { id: 's6', k: 'anim', t: "Tot té un autor o autora|Todo tiene un autor o autora", anim: 'd3autor', x: "Permís o llicència, i dir de qui és.|Permiso o licencia, y decir de quién es.",
          nota: "Escriu a la pissarra un exemple de crèdit: «Foto: Laia Puig · llicència CC BY».|Escribe en la pizarra un ejemplo de crédito: «Foto: Laia Puig · licencia CC BY»." },
        { id: 's7', k: 'anim', t: "Buscar amb cap|Buscar con cabeza", anim: 'd3cerca', x: "Poques paraules clau, salta els anuncis i compara fonts.|Pocas palabras clave, sáltate los anuncios y compara fuentes.",
          nota: "Si podeu, mostra una cerca real en un cercador per a infants i senyala l'etiqueta d'anunci.|Si podéis, muestra una búsqueda real en un buscador para niños y señala la etiqueta de anuncio." },
        { id: 's8', k: 'activitat', t: "Detectius de fonts|Detectives de fuentes", timer: 12,
          punts: ["Subratlla les paraules clau de cada pregunta.|Subraya las palabras clave de cada pregunta.", "Per a cada obra: la puc fer servir? Com la cito?|Para cada obra: ¿la puedo usar? ¿Cómo la cito?", "Compareu les respostes amb una altra parella.|Comparad las respuestas con otra pareja."],
          nota: "Passa per les taules i demana que llegeixin en veu alta les paraules clau.|Pasa por las mesas y pide que lean en voz alta las palabras clave." },
        { id: 's9', k: 'concepte', t: "Com es fa un crèdit|Cómo se hace un crédito", pic: 'img/ment/sin.webp',
          punts: ["Què és: Foto, Dibuix, Música, Text…|Qué es: Foto, Dibujo, Música, Texto…", "De qui és: el nom de l'autor/a.|De quién es: el nombre del autor/a.", "La llicència, si en té.|La licencia, si tiene."],
          nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13,
          punts: ["Obre la sessió «Qui ho ha fet?».|Abre la sesión «¿Quién lo ha hecho?».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "Al missatge de veu, pensa abans de tocar.|En el mensaje de voz, piensa antes de tocar."],
          nota: "Avisa quan arribin a la pausa activa per fer-la amb tot el grup.|Avisa cuando lleguen a la pausa activa para hacerla con todo el grupo." },
        { id: 's11', k: 'repte', t: "Reptes: detectius de fonts|Retos: detectives de fuentes", timer: 8,
          punts: ["La cerca de la Mia: anuncis, IA i blogs sense autor.|La búsqueda de Mia: anuncios, IA y blogs sin autor.", "Els passos per buscar amb cap.|Los pasos para buscar con cabeza.", "Crèdits, l'edat de les apps d'IA i el vídeo falsificat.|Créditos, la edad de las apps de IA y el vídeo falso."],
          nota: "Comenta que moltes apps d'IA tenen edat mínima i que a l'escola se segueixen les normes del centre.|Comenta que muchas apps de IA tienen edad mínima y que en el colegio se siguen las normas del centro." },
        { id: 's12', k: 'activitat', t: "Crea: la meva obra, amb crèdits|Crea: mi obra, con créditos", timer: 4,
          punts: ["Un dibuix d'un animal, signat amb el teu àlies.|Un dibujo de un animal, firmado con tu alias.", "Dues dades buscades amb paraules clau.|Dos datos buscados con palabras clave.", "Els crèdits i la teva llicència.|Los créditos y tu licencia."],
          nota: "Si no hi ha temps, que l'acabin a casa i el porteu a la propera sessió.|Si no hay tiempo, que lo terminen en casa y lo traigáis a la próxima sesión." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Una IA pot fer imatges i veus que semblen reals: la font és la millor pista.|Una IA puede hacer imágenes y voces que parecen reales: la fuente es la mejor pista.", "Un àudio estrany es comprova trucant a la persona.|Un audio raro se comprueba llamando a la persona.", "Tot té autor o autora: permís o llicència, i dir de qui és.|Todo tiene autor o autora: permiso o licencia, y decir de quién es.", "Poques paraules clau, sense anuncis i comparant fonts.|Pocas palabras clave, sin anuncios y comparando fuentes."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Què fas si t'arriba un àudio estrany que sembla de la família?|¿Qué haces si te llega un audio raro que parece de la familia?", "Escriu el crèdit d'una foto amb llicència.|Escribe el crédito de una foto con licencia."],
          nota: "Pot ser oral o en un paper.|Puede ser oral o en un papel." },
        { id: 's15', k: 'media', t: "Recordeu: el 017|Recordad: el 017", x: "Si un engany us ha arribat a casa, el 017 us ajuda.|Si un engaño os ha llegado a casa, el 017 os ayuda.", media: HELP,
          nota: "Presenta els tres números: a la propera sessió els posarem a la targeta d'ajuda.|Presenta los tres números: en la próxima sesión los pondremos en la tarjeta de ayuda." }
      ],
      print: [
        { id: 'p1', t: "Detectius de fonts|Detectives de fuentes", k: 'fitxa',
          intro: "Per parelles. Primer, les paraules clau; després, les obres: la podeu fer servir? Com la citaríeu?|Por parejas. Primero, las palabras clave; después, las obras: ¿la podéis usar? ¿Cómo la citaríais?",
          items: [
            { q: "«Quins animals viuen al riu del meu poble i què mengen?» Paraules clau:|«¿Qué animales viven en el río de mi pueblo y qué comen?» Palabras clave:", sol: "Per exemple: animals riu [nom del poble] alimentació.|Por ejemplo: animales río [nombre del pueblo] alimentación." },
            { q: "«Quant fa de llarg la balena més gran del món?» Paraules clau:|«¿Cuánto mide de largo la ballena más grande del mundo?» Palabras clave:", sol: "Per exemple: balena blava llargada.|Por ejemplo: ballena azul longitud." },
            { q: "Per què no et quedes amb el primer resultat si diu «Anunci»?|¿Por qué no te quedas con el primer resultado si dice «Anuncio»?", sol: "Perquè algú ha pagat perquè surti primer: vol vendre, no informar.|Porque alguien ha pagado para que salga primero: quiere vender, no informar." },
            { q: "Una foto de la Maria Soler amb llicència CC BY. La puc fer servir? Com la cito?|Una foto de Maria Soler con licencia CC BY. ¿La puedo usar? ¿Cómo la cito?", sol: "Sí: «Foto: Maria Soler · llicència CC BY».|Sí: «Foto: Maria Soler · licencia CC BY»." },
            { q: "El dibuix d'un company per al meu cartell. Què faig?|El dibujo de un compañero para mi cartel. ¿Qué hago?", sol: "Li demano permís i escric que és seu.|Le pido permiso y escribo que es suyo." },
            { q: "Una cançó famosa per al vídeo de la classe. Què faig?|Una canción famosa para el vídeo de la clase. ¿Qué hago?", sol: "No la faig servir sense permís: busco música amb llicència lliure i la cito.|No la uso sin permiso: busco música con licencia libre y la cito." },
            { q: "Una imatge que m'ha fet una IA. Què hi escric?|Una imagen que me ha hecho una IA. ¿Qué escribo?", sol: "Per exemple: «Imatge: feta amb ajuda d'una IA».|Por ejemplo: «Imagen: hecha con ayuda de una IA»." }
          ] }
      ]
    },

    /* ---------- Sessió 4 · Projecte: el meu pla digital (final del curs) ---------- */
    'd3-4': {
      intro: "Projecte final del curs. Cada alumne/a prepara el seu pla de benestar digital, en dues parts: la targeta d'ajuda (els noms dels seus tres adults de confiança i els telèfons 116 111, 017 i 112) i el pacte digital de casa, uns acords concrets per a tota la família sobre temps, llocs sense pantalles, partides, compres i què fer si alguna cosa va malament. A classe es fan els esborranys i a casa s'acaba el pacte amb la família. La sessió tanca el curs amb un repàs de tot el que han après i el diploma.|Proyecto final del curso. Cada alumno/a prepara su plan de bienestar digital, en dos partes: la tarjeta de ayuda (los nombres de sus tres adultos de confianza y los teléfonos 116 111, 017 y 112) y el pacto digital de casa, unos acuerdos concretos para toda la familia sobre tiempo, lugares sin pantallas, partidas, compras y qué hacer si algo va mal. En clase se hacen los borradores y en casa se termina el pacto con la familia. La sesión cierra el curso con un repaso de todo lo que han aprendido y el diploma.",
      claus: [
        "Un pacte digital són acords concrets que fa tota la família junta i que valen per a tothom, també per als adults.|Un pacto digital son acuerdos concretos que hace toda la familia junta y que valen para todo el mundo, también para los adultos.",
        "Un bon acord diu què, quan i on, és en positiu i es pot complir; si no funciona, se'n torna a parlar.|Un buen acuerdo dice qué, cuándo y dónde, es en positivo y se puede cumplir; si no funciona, se vuelve a hablar.",
        "Primer, sempre, un adult de confiança. Si no n'hi ha cap a prop: 116 111 (ajuda a la infància i l'adolescència, gratuït, confidencial i 24 hores), 017 (ajuda en ciberseguretat) i 112 (emergències).|Primero, siempre, un adulto de confianza. Si no hay ninguno cerca: 116 111 (ayuda a la infancia y la adolescencia, gratuito, confidencial y 24 horas), 017 (ayuda en ciberseguridad) y 112 (emergencias).",
        "Explicar-ho no és xivar-se, és cuidar-se: aquesta és la norma d'or de tot el curs.|Contarlo no es chivarse, es cuidarse: esta es la norma de oro de todo el curso."
      ],
      prev: [
        "Tot el curs: unitat 1 (contrasenyes, privadesa, empremta), unitat 2 (bulos, IA, respecte) i unitat 3 (pantalles, videojocs, IA i autoria).|Todo el curso: unidad 1 (contraseñas, privacidad, huella), unidad 2 (bulos, IA, respeto) y unidad 3 (pantallas, videojuegos, IA y autoría).",
        "Sessió d1-4: normes concretes i en positiu (el decàleg) i els tres adults de confiança.|Sesión d1-4: normas concretas y en positivo (el decálogo) y los tres adultos de confianza.",
        "Sessions d3-1 i d3-2: el pla de pantalles i el pacte de la partida.|Sesiones d3-1 y d3-2: el plan de pantallas y el pacto de la partida."
      ],
      obj: [
        "L'alumne/a escriu acords concrets, en positiu i per a tothom per al pacte digital de casa.|El alumno/a escribe acuerdos concretos, en positivo y para todo el mundo para el pacto digital de casa.",
        "L'alumne/a identifica els seus tres adults de confiança i sap per a què serveixen el 116 111, el 017 i el 112.|El alumno/a identifica sus tres adultos de confianza y sabe para qué sirven el 116 111, el 017 y el 112.",
        "L'alumne/a negocia acords amb respecte, escoltant les propostes dels altres.|El alumno/a negocia acuerdos con respeto, escuchando las propuestas de los demás.",
        "L'alumne/a fa un repàs del curs i presenta el seu pla de benestar digital.|El alumno/a hace un repaso del curso y presenta su plan de bienestar digital."
      ],
      comp: [
        "Competència digital (CD4): salut, benestar i seguretat; saber on demanar ajuda|Competencia digital (CD4): salud, bienestar y seguridad; saber dónde pedir ayuda",
        "Competència digital (CD2): crear un document propi i útil (el pacte i la targeta)|Competencia digital (CD2): crear un documento propio y útil (el pacto y la tarjeta)",
        "Competència personal, social i d'aprendre a aprendre: autoregulació i xarxa de suport|Competencia personal, social y de aprender a aprender: autorregulación y red de apoyo",
        "Competència ciutadana: acords i convivència a casa|Competencia ciudadana: acuerdos y convivencia en casa"
      ],
      vocab: [
        ["Pacte digital|Pacto digital", "Una llista d'acords sobre pantalles que fa tota la família junta.|Una lista de acuerdos sobre pantallas que hace toda la familia junta."],
        ["Adult de confiança|Adulto de confianza", "Una persona gran que t'escolta i t'ajuda sense renyar-te.|Una persona mayor que te escucha y te ayuda sin reñirte."],
        ["116 111|116 111", "Telèfon d'ajuda a la infància i l'adolescència: gratuït, confidencial i obert les 24 hores.|Teléfono de ayuda a la infancia y la adolescencia: gratuito, confidencial y abierto las 24 horas."],
        ["017|017", "Telèfon gratuït i confidencial d'ajuda en ciberseguretat (INCIBE), també per a famílies i docents.|Teléfono gratuito y confidencial de ayuda en ciberseguridad (INCIBE), también para familias y docentes."],
        ["112|112", "Telèfon d'emergències, quan hi ha un perill ara mateix.|Teléfono de emergencias, cuando hay un peligro ahora mismo."],
        ["Confidencial|Confidencial", "Que el que expliques no es diu a ningú més.|Que lo que cuentas no se dice a nadie más."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el meu pla digital»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: mi plan digital»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "La fitxa del pacte i la targeta d'ajuda (una per alumne/a), tisores i colors|La ficha del pacto y la tarjeta de ayuda (una por alumno/a), tijeras y colores",
          "Els diplomes del curs impresos, un per alumne/a, amb el nom escrit|Los diplomas del curso impresos, uno por alumno/a, con el nombre escrito"
        ],
        imprimir: ["El pacte digital i la targeta d'ajuda (imprimible 1): una per alumne/a|El pacto digital y la tarjeta de ayuda (imprimible 1): una por alumno/a", "Diploma del curs (imprimible 2): un per alumne/a|Diploma del curso (imprimible 2): uno por alumno/a"],
        prep: [
          "Imprimir una fitxa per alumne/a i els diplomes amb el nom de cada alumne/a.|Imprimir una ficha por alumno/a y los diplomas con el nombre de cada alumno/a.",
          "Comprovar els telèfons d'ajuda vigents (116 111, 017 i 112) i, si en voleu afegir, el telèfon de referència del centre.|Comprobar los teléfonos de ayuda vigentes (116 111, 017 y 112) y, si queréis añadirlo, el teléfono de referencia del centro.",
          "Preparar una nota per a les famílies que expliqui el pacte digital i que és una proposta, no una obligació.|Preparar una nota para las familias que explique el pacto digital y que es una propuesta, no una obligación."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: què hem après?|Bienvenida: ¿qué hemos aprendido?", fase: 'inici',
          fa: "Repasseu el curs amb la diapositiva de repàs: cada alumne/a diu una cosa que recorda d'alguna de les tres unitats. Presenta el repte final: el pla de benestar digital, amb la targeta d'ajuda i el pacte de casa.|Repasad el curso con la diapositiva de repaso: cada alumno/a dice una cosa que recuerda de alguna de las tres unidades. Presenta el reto final: el plan de bienestar digital, con la tarjeta de ayuda y el pacto de casa.",
          diu: ["Digueu una cosa del curs que ensenyaríeu a la vostra família.|Decid una cosa del curso que enseñaríais a vuestra familia.",
            "Quina és la norma d'or?|¿Cuál es la norma de oro?",
            "Avui farem el pla que us acompanyarà quan s'acabi el curs.|Hoy haremos el plan que os acompañará cuando termine el curso."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 8, t: "El pacte i els telèfons d'ajuda|El pacto y los teléfonos de ayuda", fase: 'teoria',
          fa: "Amb l'animació, presenta el pacte digital: acords per a tota la família. Recorda què fa bo un acord (com al decàleg). Després presenta els telèfons d'ajuda amb la diapositiva: sempre, primer, un adult de confiança; i, si no n'hi ha cap a prop, el 116 111, el 017 i el 112. Feu servir exemples senzills de quan es truca a cadascun.|Con la animación, presenta el pacto digital: acuerdos para toda la familia. Recuerda qué hace bueno un acuerdo (como en el decálogo). Después presenta los teléfonos de ayuda con la diapositiva: siempre, primero, un adulto de confianza; y, si no hay ninguno cerca, el 116 111, el 017 y el 112. Usad ejemplos sencillos de cuándo se llama a cada uno.",
          diu: ["Per què un pacte ha de valer també per als adults?|¿Por qué un pacto tiene que valer también para los adultos?",
            "Quan trucaríeu al 112? I al 116 111?|¿Cuándo llamaríais al 112? ¿Y al 116 111?",
            "Què vol dir «confidencial»?|¿Qué quiere decir «confidencial»?"],
          slides: ['s3', 's4', 's5', 's6'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "A l'ordinador: prepara el pla|En el ordenador: prepara el plan", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la conversa de la família de la Jana: les preguntes de repàs, la història, les quatre targetes, els bons acords, els telèfons d'ajuda i quin número ajuda en cada cas. Feu la pausa activa tots junts per aprendre els números.|Cada alumno/a hace la sesión hasta la conversación de la familia de Jana: las preguntas de repaso, la historia, las cuatro tarjetas, los buenos acuerdos, los teléfonos de ayuda y qué número ayuda en cada caso. Haced la pausa activa todos juntos para aprender los números.",
          diu: ["Quin acord de la família de la Jana us ha agradat més?|¿Qué acuerdo de la familia de Jana os ha gustado más?",
            "Algú ha entrat al compte de la família: quin número ajuda? (El 017, amb un adult.)|Alguien ha entrado en la cuenta de la familia: ¿qué número ayuda? (El 017, con un adulto.)",
            "Ara, tots: u, u, sis, u, u, u!|Ahora, todos: ¡uno, uno, seis, uno, uno, uno!"],
          slides: ['s7', 's8'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 20, t: "Crea: el pacte i la targeta d'ajuda|Crea: el pacto y la tarjeta de ayuda", fase: 'crea',
          fa: "Cada alumne/a tria els acords a l'app i després omple la fitxa: escriu cinc acords del pacte (un per tema) i retalla i omple la targeta d'ajuda amb els noms dels seus tres adults de confiança i els tres telèfons. Als 12 minuts, en parelles, es revisen els acords: són concrets? valen per a tothom? A casa s'acabarà el pacte amb la família.|Cada alumno/a elige los acuerdos en la app y después rellena la ficha: escribe cinco acuerdos del pacto (uno por tema) y recorta y rellena la tarjeta de ayuda con los nombres de sus tres adultos de confianza y los tres teléfonos. A los 12 minutos, en parejas, se revisan los acuerdos: ¿son concretos? ¿valen para todo el mundo? En casa se terminará el pacto con la familia.",
          diu: ["Aquest acord diu què, quan i on?|¿Este acuerdo dice qué, cuándo y dónde?",
            "Qui són els teus tres adults de confiança? Un de casa, un de l'escola i un altre.|¿Quiénes son tus tres adultos de confianza? Uno de casa, uno del colegio y otro.",
            "On guardaràs la targeta? (A la motxilla, a la funda de la tauleta…)|¿Dónde guardarás la tarjeta? (En la mochila, en la funda de la tablet…)"],
          slides: ['s9', 's10', 's11'], app: "Pas «Crea»: el meu pacte digital i «La targeta d'ajuda i el pacte» (Ho he fet!).|Paso «Crea»: mi pacto digital y «La tarjeta de ayuda y el pacto» (¡Lo he hecho!).", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 15, t: "Presentació, tiquet i diploma|Presentación, ticket y diploma", fase: 'tancament',
          fa: "Uns quants voluntaris presenten el seu pacte en 30 segons i la resta diu una cosa que li agrada. Fes el tiquet, deixa que facin les preguntes finals i el diploma de l'app, i lliura els diplomes impresos. Acaba recordant la norma d'or i els tres números.|Unos cuantos voluntarios presentan su pacto en 30 segundos y el resto dice algo que le gusta. Haz el ticket, deja que hagan las preguntas finales y el diploma de la app, y entrega los diplomas impresos. Termina recordando la norma de oro y los tres números.",
          diu: ["Quin acord del pacte us sembla més fàcil de complir?|¿Qué acuerdo del pacto os parece más fácil de cumplir?",
            "Ara sou experts i expertes en ciutadania digital!|¡Ahora sois expertos y expertas en ciudadanía digital!",
            "I recordeu, ara i sempre: si dubteu, pregunteu a un adult de confiança.|Y recordad, ahora y siempre: si dudáis, preguntad a un adulto de confianza."],
          slides: ['s12', 's13', 's14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals, el diploma del curs i com m'he sentit.|«Cierre»: las dos preguntas finales, el diploma del curso y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Escriu acords només per a ell o ella, o només per als adults.|Escribe acuerdos solo para él o ella, o solo para los adultos.",
          "Recorda la conversa de la Jana: el pacte val per a tota la família. Pregunta: aquest acord el pot complir tothom de casa?|Recuerda la conversación de Jana: el pacto vale para toda la familia. Pregunta: ¿este acuerdo lo puede cumplir todo el mundo en casa?"],
        ["Fa acords massa generals («menys pantalles») o impossibles («mai més videojocs»).|Hace acuerdos demasiado generales («menos pantallas») o imposibles («nunca más videojuegos»).",
          "Demana que digui què, quan i on, i que pensi si el podria complir una setmana sencera.|Pide que diga qué, cuándo y dónde, y que piense si lo podría cumplir una semana entera."],
        ["Confon els telèfons (truca al 112 per a una cosa que no és urgent).|Confunde los teléfonos (llama al 112 para algo que no es urgente).",
          "Repasseu el dsort dels números: 112 si hi ha un perill ara mateix; 116 111 per parlar; 017 per a problemes d'internet.|Repasad la clasificación de los números: 112 si hay un peligro ahora mismo; 116 111 para hablar; 017 para problemas de internet."],
        ["No sap a qui posar com a adult de confiança.|No sabe a quién poner como adulto de confianza.",
          "Ajuda'l a pensar en persones concretes (tutor/a, monitor/a, algú de la família extensa). Tu també pots ser-ne un/a.|Ayúdale a pensar en personas concretas (tutor/a, monitor/a, alguien de la familia extensa). Tú también puedes ser uno/a."],
        ["Creu que trucar a un telèfon d'ajuda vol dir que ha fet alguna cosa malament.|Cree que llamar a un teléfono de ayuda quiere decir que ha hecho algo mal.",
          "Explica que aquests telèfons són per ajudar, no per renyar, i que demanar ajuda és de valents.|Explica que estos teléfonos son para ayudar, no para reñir, y que pedir ayuda es de valientes."]
      ],
      diff: {
        mes: "Per anar més enllà: preparar una versió del pacte per a una altra classe o per a germans petits, amb dibuixos; o escriure una carta curta a la família explicant per què proposen cada acord.|Para ir más allá: preparar una versión del pacto para otra clase o para hermanos pequeños, con dibujos; o escribir una carta corta a la familia explicando por qué proponen cada acuerdo.",
        menys: "Donar la fitxa del pacte amb l'inici de cada acord escrit («A taula…», «A la nit…») perquè només l'hagin d'acabar, i la targeta d'ajuda amb els tres números ja impresos.|Dar la ficha del pacto con el inicio de cada acuerdo escrito («En la mesa…», «Por la noche…») para que solo lo tengan que terminar, y la tarjeta de ayuda con los tres números ya impresos."
      },
      aval: {
        ticket: ["Digues un acord del teu pacte i per què és bo.|Di un acuerdo de tu pacto y por qué es bueno.",
          "Digues un telèfon d'ajuda i quan el faries servir.|Di un teléfono de ayuda y cuándo lo usarías."],
        rubric: [
          ["Acords del pacte|Acuerdos del pacto", "Són concrets, en positiu, possibles i per a tota la família.|Son concretos, en positivo, posibles y para toda la familia.", "N'hi ha de generals o només per a una persona.|Los hay generales o solo para una persona."],
          ["Targeta d'ajuda|Tarjeta de ayuda", "Té tres adults de confiança i sap per a què serveix cada telèfon.|Tiene tres adultos de confianza y sabe para qué sirve cada teléfono.", "La té completa, però confon algun telèfon.|La tiene completa, pero confunde algún teléfono."],
          ["Negociació i respecte|Negociación y respeto", "Escolta, proposa acords per a tothom i accepta millores.|Escucha, propone acuerdos para todo el mundo y acepta mejoras.", "Proposa idees, però li costa escoltar les dels altres.|Propone ideas, pero le cuesta escuchar las de los demás."],
          ["Repàs del curs|Repaso del curso", "Relaciona els acords amb el que ha après (son, partides, compres, ajuda).|Relaciona los acuerdos con lo que ha aprendido (sueño, partidas, compras, ayuda).", "Recorda alguns temes amb ajuda.|Recuerda algunos temas con ayuda."]
        ]
      },
      casa: "Avui l'infant porta a casa l'esborrany del pacte digital i la targeta d'ajuda. Proposta per a la família: seieu junts, llegiu els acords que ha triat, que cada persona n'afegeixi un (també els adults) i signeu-lo. Pengeu-lo en un lloc on es vegi i, d'aquí a unes setmanes, reviseu-lo. Repasseu també la targeta d'ajuda: qui són els seus adults de confiança i els telèfons 116 111 (ajuda a la infància i l'adolescència, gratuït, confidencial i 24 hores), 017 (ajuda en ciberseguretat, també per a famílies) i 112 (emergències).|Hoy el niño o la niña lleva a casa el borrador del pacto digital y la tarjeta de ayuda. Propuesta para la familia: sentaos juntos, leed los acuerdos que ha elegido, que cada persona añada uno (también los adultos) y firmadlo. Colgadlo en un sitio donde se vea y, dentro de unas semanas, revisadlo. Repasad también la tarjeta de ayuda: quiénes son sus adultos de confianza y los teléfonos 116 111 (ayuda a la infancia y la adolescencia, gratuito, confidencial y 24 horas), 017 (ayuda en ciberseguridad, también para familias) y 112 (emergencias).",
      faq: [
        ["Què és exactament el 116 111?|¿Qué es exactamente el 116 111?", "És el número europeu d'ajuda a la infància i l'adolescència. A Espanya l'atén la Fundació ANAR: és gratuït, confidencial i obert les 24 hores. Hi poden trucar infants i adolescents que necessiten parlar amb algú.|Es el número europeo de ayuda a la infancia y la adolescencia. En España lo atiende la Fundación ANAR: es gratuito, confidencial y abierto las 24 horas. Pueden llamar niños, niñas y adolescentes que necesitan hablar con alguien."],
        ["I el 017?|¿Y el 017?", "És «Tu Ayuda en Ciberseguridad», de l'INCIBE (Institut Nacional de Ciberseguretat): gratuït i confidencial, per a dubtes i problemes a internet (enganys, comptes robats, ciberassetjament). També hi poden trucar famílies i docents.|Es «Tu Ayuda en Ciberseguridad», del INCIBE (Instituto Nacional de Ciberseguridad): gratuito y confidencial, para dudas y problemas en internet (engaños, cuentas robadas, ciberacoso). También pueden llamar familias y docentes."],
        ["I si una família no vol fer el pacte?|¿Y si una familia no quiere hacer el pacto?", "És una proposta, no una obligació. L'infant pot quedar-se amb el seu pla personal i la targeta d'ajuda.|Es una propuesta, no una obligación. El niño o la niña puede quedarse con su plan personal y la tarjeta de ayuda."],
        ["Un alumne no vol escriure el nom d'un adult de casa a la targeta.|Un alumno no quiere escribir el nombre de un adulto de casa en la tarjeta.", "Respecta-ho: pot posar adults de l'escola o d'altres llocs. Si et sembla que hi ha alguna cosa que el preocupa, parla-hi en privat i segueix el protocol del centre.|Respétalo: puede poner adultos del colegio o de otros sitios. Si te parece que hay algo que le preocupa, habla con él en privado y sigue el protocolo del centro."],
        ["Què passa quan s'acaba el curs?|¿Qué pasa cuando termina el curso?", "Que ja saben cuidar-se i cuidar els altres a la xarxa, i tenen un pla. Podeu revisar el pacte i el decàleg a mig curs.|Que ya saben cuidarse y cuidar a los demás en la red, y tienen un plan. Podéis revisar el pacto y el decálogo a mitad de curso."]
      ],
      tec: [
        ["Al pas dels números hi ha tres calaixos i alguna situació els fa dubtar.|En el paso de los números hay tres cajas y alguna situación les hace dudar.", "És normal: comenteu que, abans de tot, sempre un adult de confiança. Si hi ha un perill ara mateix, 112.|Es normal: comentad que, antes de nada, siempre un adulto de confianza. Si hay un peligro ahora mismo, 112."],
        ["No es poden imprimir els diplomes a temps.|No se pueden imprimir los diplomas a tiempo.", "L'app també mostra el diploma en acabar (es pot imprimir des d'allà). Els impresos es poden lliurar la setmana vinent.|La app también muestra el diploma al terminar (se puede imprimir desde allí). Los impresos se pueden entregar la semana que viene."],
        ["Volen tornar a la conversa de la Jana per provar un altre camí.|Quieren volver a la conversación de Jana para probar otro camino.", "Poden tornar enrere amb la fletxa o reobrir la sessió: tots els camins acaben amb el pacte signat.|Pueden volver atrás con la flecha o reabrir la sesión: todos los caminos terminan con el pacto firmado."],
        ["No queda temps per a les presentacions.|No queda tiempo para las presentaciones.", "Feu-les al principi de la sessió següent o en una tutoria; també poden presentar el pacte a casa.|Hacedlas al principio de la sesión siguiente o en una tutoría; también pueden presentar el pacto en casa."]
      ],
      seg: [
        "La targeta d'ajuda és personal: no la recullis ni la pengis a la classe amb noms.|La tarjeta de ayuda es personal: no la recojas ni la cuelgues en la clase con nombres.",
        "No llegeixis en veu alta els pactes sense permís: hi pot haver informació de cada casa. Les presentacions són voluntàries.|No leas en voz alta los pactos sin permiso: puede haber información de cada casa. Las presentaciones son voluntarias.",
        "Si un infant explica una situació real que el preocupa, segueix el protocol del centre: escolta amb calma, digues-li que no és culpa seva, no prometis guardar el secret, apunta-ho i avisa la persona de referència. Si hi ha un perill imminent, truca al 112.|Si un niño o niña cuenta una situación real que le preocupa, sigue el protocolo del centro: escucha con calma, dile que no es culpa suya, no prometas guardar el secreto, apúntalo y avisa a la persona de referencia. Si hay un peligro inminente, llama al 112.",
        "Recorda a l'alumnat i a les famílies, a la nota de casa, qui són els adults de confiança i els telèfons 116 111, 017 i 112.|Recuerda al alumnado y a las familias, en la nota de casa, quiénes son los adultos de confianza y los teléfonos 116 111, 017 y 112."
      ],
      extra: [
        "Llengua: escriure una carta a la família explicant el pacte i per què és important.|Lengua: escribir una carta a la familia explicando el pacto y por qué es importante.",
        "Educació visual i plàstica: decorar la targeta d'ajuda i fer un pòster de la classe amb els tres números (sense noms).|Educación visual y plástica: decorar la tarjeta de ayuda y hacer un póster de la clase con los tres números (sin nombres).",
        "Tutoria: revisar el pacte i el decàleg al cap d'un mes i comentar què ha funcionat.|Tutoría: revisar el pacto y el decálogo al cabo de un mes y comentar qué ha funcionado."
      ],
      trans: [
        "Tot el curs: cada tema del pacte ve d'una sessió (contrasenyes i privadesa a la unitat 1, respecte a la 2, pantalles, partides i IA a la 3).|Todo el curso: cada tema del pacto viene de una sesión (contraseñas y privacidad en la unidad 1, respeto en la 2, pantallas, partidas e IA en la 3).",
        "Sessió d1-4: el decàleg va ser la primera llista de normes; el pacte n'és la versió de família. Sessió d2-4: la campanya va portar el que vam aprendre a l'escola.|Sesión d1-4: el decálogo fue la primera lista de normas; el pacto es su versión de familia. Sesión d2-4: la campaña llevó lo que aprendimos a la escuela.",
        "Tutoria (xarxa de suport), llengua (escriure acords) i educació per a la salut (son, pantalles).|Tutoría (red de apoyo), lengua (escribir acuerdos) y educación para la salud (sueño, pantallas)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Projecte: el meu pla digital|Proyecto: mi plan digital", x: "Avui fareu el pacte digital de casa i la vostra targeta d'ajuda.|Hoy haréis el pacto digital de casa y vuestra tarjeta de ayuda.",
          nota: "És l'última sessió del curs: presenta-la com una celebració del que han après.|Es la última sesión del curso: preséntala como una celebración de lo que han aprendido." },
        { id: 's2', k: 'repas', t: "Què hem après al curs?|¿Qué hemos aprendido en el curso?",
          punts: ["Unitat 1: contrasenyes, privadesa i empremta digital|Unidad 1: contraseñas, privacidad y huella digital", "Unitat 2: bulos, IA i respecte a la xarxa|Unidad 2: bulos, IA y respeto en la red", "Unitat 3: pantalles, videojocs, IA i autoria|Unidad 3: pantallas, videojuegos, IA y autoría", "La norma d'or: demanar ajuda|La norma de oro: pedir ayuda"],
          nota: "Que cada alumne/a digui una cosa concreta que recordi d'algun tema.|Que cada alumno/a diga una cosa concreta que recuerde de algún tema." },
        { id: 's3', k: 'anim', t: "Un pacte per a tothom|Un pacto para todos", anim: 'd3pacte', x: "Temps, llocs sense pantalles, partides, compres i ajuda.|Tiempo, lugares sin pantallas, partidas, compras y ayuda.",
          nota: "Remarca que els adults també el signen i el compleixen.|Remarca que los adultos también lo firman y lo cumplen." },
        { id: 's4', k: 'concepte', t: "Acords que funcionen|Acuerdos que funcionan", pic: 'img/ment/lli.webp',
          punts: ["Concrets: què, quan i on.|Concretos: qué, cuándo y dónde.", "En positiu i possibles de complir.|En positivo y posibles de cumplir.", "Per a tota la família.|Para toda la familia.", "Si no funciona, se'n torna a parlar.|Si no funciona, se vuelve a hablar."],
          nota: "Compara «Menys pantalles» amb «La tauleta dorm a la cuina».|Compara «Menos pantallas» con «La tablet duerme en la cocina»." },
        { id: 's5', k: 'media', t: "Tres números per recordar|Tres números para recordar", x: "Primer, un adult de confiança. I si no n'hi ha cap a prop…|Primero, un adulto de confianza. Y si no hay ninguno cerca…", media: HELP,
          nota: "Explica cada número amb un exemple: 116 111 per parlar, 017 per a problemes d'internet, 112 si hi ha un perill ara mateix.|Explica cada número con un ejemplo: 116 111 para hablar, 017 para problemas de internet, 112 si hay un peligro ahora mismo." },
        { id: 's6', k: 'pregunta', t: "Qui són els teus adults de confiança?|¿Quiénes son tus adultos de confianza?",
          punts: ["Algú de casa.|Alguien de casa.", "Algú de l'escola.|Alguien del colegio.", "Un altre: un monitor, una tieta, una veïna…|Otro: un monitor, una tía, una vecina…"],
          nota: "Que hi pensin en silenci: no cal dir els noms en veu alta.|Que lo piensen en silencio: no hace falta decir los nombres en voz alta." },
        { id: 's7', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12,
          punts: ["Obre la sessió «Projecte: el meu pla digital».|Abre la sesión «Proyecto: mi plan digital».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "Apunta els acords que t'agradin.|Apunta los acuerdos que te gusten."],
          nota: "Avisa quan arribin a la pausa activa per aprendre els números tots junts.|Avisa cuando lleguen a la pausa activa para aprender los números todos juntos." },
        { id: 's8', k: 'repte', t: "Quin número t'ajuda?|¿Qué número te ayuda?", timer: 3,
          punts: ["Et sents malament i no saps a qui dir-ho: 116 111.|Te sientes mal y no sabes a quién decírselo: 116 111.", "Un compte robat o un engany: 017.|Una cuenta robada o un engaño: 017.", "Un perill ara mateix: 112.|Un peligro ahora mismo: 112."],
          nota: "Fes-ne dos o tres exemples més en veu alta i que responguin a cor.|Haz dos o tres ejemplos más en voz alta y que respondan a coro." },
        { id: 's9', k: 'activitat', t: "Crea: el pacte i la targeta|Crea: el pacto y la tarjeta", timer: 20,
          punts: ["Tria els acords a l'app.|Elige los acuerdos en la app.", "Escriu cinc acords a la fitxa: un per tema.|Escribe cinco acuerdos en la ficha: uno por tema.", "Omple la targeta d'ajuda i retalla-la.|Rellena la tarjeta de ayuda y recórtala.", "Revisa els acords amb un company/a.|Revisa los acuerdos con un compañero/a."],
          nota: "Avisa als 12 minuts per fer la revisió en parelles.|Avisa a los 12 minutos para hacer la revisión en parejas." },
        { id: 's10', k: 'concepte', t: "Com revisar un acord|Cómo revisar un acuerdo", pic: 'img/chars/tuga-happy.webp',
          punts: ["Diu què, quan i on?|¿Dice qué, cuándo y dónde?", "El pot complir tothom de casa?|¿Lo puede cumplir todo el mundo en casa?", "És en positiu?|¿Es en positivo?"],
          nota: "Que comencin pel que funciona i després proposin una millora, com a la campanya.|Que empiecen por lo que funciona y después propongan una mejora, como en la campaña." },
        { id: 's11', k: 'concepte', t: "La targeta d'ajuda|La tarjeta de ayuda", pic: 'img/ment/cor.webp',
          punts: ["Els noms dels teus tres adults de confiança.|Los nombres de tus tres adultos de confianza.", "116 111 · 017 · 112|116 111 · 017 · 112", "A la motxilla o a la funda de la tauleta.|En la mochila o en la funda de la tablet."],
          nota: "La targeta és personal: no cal ensenyar-la a ningú.|La tarjeta es personal: no hace falta enseñarla a nadie." },
        { id: 's12', k: 'activitat', t: "Presentem els pactes|Presentamos los pactos", timer: 5,
          punts: ["Voluntaris: el vostre pacte en 30 segons.|Voluntarios: vuestro pacto en 30 segundos.", "La resta diu una cosa que li agrada.|El resto dice algo que le gusta."],
          nota: "Només voluntaris i sense detalls de cap casa.|Solo voluntarios y sin detalles de ninguna casa." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Un pacte digital és per a tota la família.|Un pacto digital es para toda la familia.", "Un bon acord és concret, en positiu i possible.|Un buen acuerdo es concreto, en positivo y posible.", "Primer, un adult de confiança; i si no: 116 111, 017 i 112.|Primero, un adulto de confianza; y si no: 116 111, 017 y 112."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues un acord del teu pacte i per què és bo.|Di un acuerdo de tu pacto y por qué es bueno.", "Digues un telèfon d'ajuda i quan el faries servir.|Di un teléfono de ayuda y cuándo lo usarías."],
          nota: "Fes el tiquet mentre lliures els diplomes.|Haz el ticket mientras entregas los diplomas." },
        { id: 's15', k: 'media', t: "Sempre hi ha algú que t'ajuda|Siempre hay alguien que te ayuda", x: "Explicar-ho no és xivar-se: és cuidar-te.|Contarlo no es chivarse: es cuidarte.", media: HELP,
          nota: "Deixa-la projectada mentre lliures els diplomes.|Déjala proyectada mientras entregas los diplomas." },
        { id: 's16', k: 'concepte', t: "Enhorabona: curs acabat!|¡Enhorabuena: curso terminado!", pic: 'img/chars/numi-medalla.webp',
          punts: ["Has acabat el curs Tech Digital.|Has terminado el curso Tech Digital.", "Ara pots ajudar la teva família i la teva escola.|Ahora puedes ayudar a tu familia y a tu escuela.", "Recorda: si dubtes, pregunta a un adult de confiança.|Recuerda: si dudas, pregunta a un adulto de confianza."],
          nota: "Lliura els diplomes impresos un a un, dient a cada alumne/a una cosa concreta que ha fet bé durant el curs.|Entrega los diplomas impresos uno a uno, diciendo a cada alumno/a algo concreto que ha hecho bien durante el curso." }
      ],
      print: [
        { id: 'p1', t: "El pacte digital i la targeta d'ajuda|El pacto digital y la tarjeta de ayuda", k: 'fitxa',
          intro: "Escriu un acord per a cada tema i omple la targeta d'ajuda. Retalla-la i guarda-la. El pacte l'acabareu a casa amb la família.|Escribe un acuerdo para cada tema y rellena la tarjeta de ayuda. Recórtala y guárdala. El pacto lo terminaréis en casa con la familia.",
          items: [
            { q: "⏰ Temps de pantalles:|⏰ Tiempo de pantallas:", sol: "Per exemple: «Pantalles després dels deures i amb temporitzador».|Por ejemplo: «Pantallas después de los deberes y con temporizador»." },
            { q: "🛏️ Llocs i moments sense pantalles:|🛏️ Lugares y momentos sin pantallas:", sol: "Per exemple: «A taula, cap mòbil, tampoc els adults» o «La tauleta dorm fora de l'habitació».|Por ejemplo: «En la mesa, ningún móvil, tampoco los adultos» o «La tablet duerme fuera de la habitación»." },
            { q: "🎮 Partides en línia:|🎮 Partidas en línea:", sol: "Per exemple: «Només amb amics de veritat i mirant l'etiqueta PEGI».|Por ejemplo: «Solo con amigos de verdad y mirando la etiqueta PEGI»." },
            { q: "💎 Compres:|💎 Compras:", sol: "Per exemple: «Cap compra sense un adult».|Por ejemplo: «Ninguna compra sin un adulto»." },
            { q: "🤝 La norma d'or de casa:|🤝 La norma de oro de casa:", sol: "Per exemple: «Si alguna cosa ens fa sentir malament, ho expliquem a casa i ningú no renya».|Por ejemplo: «Si algo nos hace sentir mal, lo contamos en casa y nadie riñe»." },
            { q: "✂️ La meva targeta d'ajuda · Els meus tres adults de confiança: 1. ____ 2. ____ 3. ____ · 116 111 (ajuda a la infància i l'adolescència) · 017 (ajuda en ciberseguretat) · 112 (emergències)|✂️ Mi tarjeta de ayuda · Mis tres adultos de confianza: 1. ____ 2. ____ 3. ____ · 116 111 (ayuda a la infancia y la adolescencia) · 017 (ayuda en ciberseguridad) · 112 (emergencias)", big: true, sol: "Tres adults de confiança (de casa, de l'escola i un altre) i els tres telèfons.|Tres adultos de confianza (de casa, del colegio y otro) y los tres teléfonos." },
            { q: "Signatures de tota la família:|Firmas de toda la familia:", sol: "Resposta oberta.|Respuesta abierta." }
          ] },
        { id: 'p2', t: "Diploma del curs|Diploma del curso", k: 'diploma',
          intro: "ha completat el curs Tech Digital de Numi Tech: sap cuidar-se i cuidar els altres a la xarxa i té el seu pla de benestar digital.|ha completado el curso Tech Digital de Numi Tech: sabe cuidarse y cuidar a los demás en la red y tiene su plan de bienestar digital.",
          items: [
            "Crea contrasenyes fortes i protegeix les seves dades.|Crea contraseñas fuertes y protege sus datos.",
            "Pensa abans de publicar i cuida la seva empremta digital.|Piensa antes de publicar y cuida su huella digital.",
            "Comprova les notícies i detecta els missatges trampa i les imatges fetes amb IA.|Comprueba las noticias y detecta los mensajes trampa y las imágenes hechas con IA.",
            "Entén què és una IA i la fa servir amb responsabilitat.|Entiende qué es una IA y la usa con responsabilidad.",
            "Tracta bé els altres a la xarxa i respecta la seva feina.|Trata bien a los demás en la red y respeta su trabajo.",
            "Cuida el seu temps amb pantalles i les seves partides en línia.|Cuida su tiempo con pantallas y sus partidas en línea.",
            "Sap demanar ajuda: adults de confiança, 116 111, 017 i 112.|Sabe pedir ayuda: adultos de confianza, 116 111, 017 y 112."
          ] }
      ]
    }
  });
}
