/* ===== Numi Tech · Tech Digital (curs 'digital') · contingut de les 16 sessions =====
   Contingut propi de Numi. Personatges, xarxes («Mosaic»), titulars, fotos i webs són INVENTATS i es marquen com a
   exemples. Mai es demana cap dada real a l'alumne. Telèfons d'ajuda verificats (Espanya): ANAR 900 20 20 10 i 116 111
   (gratuït, confidencial, 24 h), 017 d'INCIBE (ciberseguretat; menors, famílies i docents) i 112 (emergències).
   Substitueix en temps de càrrega les unitats del catàleg (tech-c1.js): 4 unitats × 4 sessions (la 4a, projecte).
   Els tipus de pas dig* són a tech-dig.js; les animacions TANI_DIG també. */

Object.assign(TBADGE, {
  clau: { id: 'clau', ico: '🔐', n: 'Guardià de claus|Guardián de llaves', d: 'Saps crear contrasenyes fortes i guardar-les en secret.|Sabes crear contraseñas fuertes y guardarlas en secreto.' },
  decaleg: { id: 'decaleg', ico: '📜', n: 'El meu decàleg|Mi decálogo', d: 'Has escrit el teu decàleg per navegar segur.|Has escrito tu decálogo para navegar seguro.' },
  bulo: { id: 'bulo', ico: '🔎', n: 'Caçabulos|Cazabulos', d: 'Detectes les pistes d\'un bulo abans de compartir-lo.|Detectas las pistas de un bulo antes de compartirlo.' },
  verif: { id: 'verif', ico: '🗞️', n: 'Verificador/a|Verificador/a', d: 'Has fet la teva primera fitxa de verificació.|Has hecho tu primera ficha de verificación.' },
  ia: { id: 'ia', ico: '🧠', n: 'Mestre/a d\'IA|Maestro/a de IA', d: 'Saps què és (i què no és) la intel·ligència artificial.|Sabes qué es (y qué no es) la inteligencia artificial.' },
  entrena: { id: 'entrena', ico: '🤖', n: 'Entrenador/a d\'IA|Entrenador/a de IA', d: 'Has entrenat i posat a prova la teva pròpia IA.|Has entrenado y puesto a prueba tu propia IA.' },
  respecte: { id: 'respecte', ico: '💬', n: 'Paraules amables|Palabras amables', d: 'Escrius amb respecte, també a la xarxa.|Escribes con respeto, también en la red.' },
  campanya: { id: 'campanya', ico: '📣', n: 'Campanya feta|Campaña hecha', d: 'Has creat una campanya de ciutadania digital.|Has creado una campaña de ciudadanía digital.' }
});

// peces reutilitzables per als projectes (digMake)
const dig5Look = (pose = 'happy') => [
  { id: 'th', to: 'theme', k: 'theme', t: 'Colors|Colores' },
  { id: 'sk', to: 'stk', k: 'stk', t: 'Adhesiu|Pegatina' },
  { id: 'po', to: 'pose', k: 'pose', t: 'En Bit fa…|Bit hace…', def: pose },
  { id: 'by', to: 'by', k: 'text', t: 'Signatura (el teu nom o un àlies, sense cognoms)|Firma (tu nombre o un alias, sin apellidos)', ph: 'p. ex. Laia, la detectiu|p. ej. Laia, la detective', len: 30 }];
const dig5Feel = { k: 'feel', ph: 'tanca' };

{
  const c = TECH.find(x => x.id === 'digital');
  c.desc = "Ciutadania digital per a 8-14 anys: contrasenyes, privadesa i empremta digital, bulos i imatges trucades, què és (i què no és) la intel·ligència artificial, respecte a la xarxa, què fer davant el ciberassetjament i benestar amb les pantalles.|Ciudadanía digital para 8-14 años: contraseñas, privacidad y huella digital, bulos e imágenes trucadas, qué es (y qué no es) la inteligencia artificial, respeto en la red, qué hacer ante el ciberacoso y bienestar con las pantallas.";
  delete c.soon;
  c.units = [];

  /* ===================== UNITAT 1 · Segur a la xarxa ===================== */
  c.units.push({ t: 'Segur a la xarxa|Seguro en la red', d: 'Contrasenyes, privadesa i empremta digital|Contraseñas, privacidad y huella digital', color: '#1FA463', s: [

    /* ---------- d1-1 · Contrasenyes fortes ---------- */
    { id: 'd1-1', t: 'Contrasenyes fortes|Contraseñas fuertes', min: 40, badge: 'clau',
      learn: ['Una contrasenya forta és llarga, barrejada i no té res teu (ni el nom ni dates).|Una contraseña fuerte es larga, mezclada y no tiene nada tuyo (ni el nombre ni fechas).',
        'Una frase de pas (tres paraules sense relació + un número i un símbol) és forta i fàcil de recordar.|Una frase de paso (tres palabras sin relación + un número y un símbolo) es fuerte y fácil de recordar.',
        "La contrasenya és secreta: no la diem a ningú (només a la família si som petits) i no la repetim a tot arreu.|La contraseña es secreta: no se la decimos a nadie (solo a la familia si somos pequeños) y no la repetimos en todas partes."],
      steps: [
        { k: 'digTalk', ph: 'recorda', scene: 'casa', who: 'bit', mood: 'think', q: "Quantes «claus» fas servir cada dia sense adonar-te'n?|¿Cuántas «llaves» usas cada día sin darte cuenta?",
          x: "La clau de casa, el codi de la tauleta, la contrasenya de la plataforma de l'escola… Totes protegeixen alguna cosa teva.|La llave de casa, el código de la tablet, la contraseña de la plataforma del cole… Todas protegen algo tuyo.",
          stances: [{ t: 'Cap ni una|Ninguna', ico: 'block' }, { t: "Una o dues|Una o dos", ico: 'key' }, { t: 'Moltes!|¡Muchas!', ico: 'lock' }],
          voices: [{ f: 'pau', t: "Jo tinc el PIN del mòbil de la família i la contrasenya de la plataforma de l'escola.|Yo tengo el PIN del móvil de la familia y la contraseña de la plataforma del cole." },
            { f: 'jana', t: "La meva tauleta s'obre amb un dibuix que faig amb el dit. També és una clau!|Mi tablet se abre con un dibujo que hago con el dedo. ¡También es una llave!" },
            { f: 'leo', t: "No n'havia pensat mai, però el cadenat de la bici també té un codi.|Nunca lo había pensado, pero el candado de la bici también tiene un código." }],
          prompt: "Feu una llista a la pissarra: quines claus (físiques i digitals) feu servir cada dia? Què protegeix cadascuna?|Haced una lista en la pizarra: ¿qué llaves (físicas y digitales) usáis cada día? ¿Qué protege cada una?" },
        { k: 'digStory', ph: 'missio', scene: 'casa', who: 'both', t: "L'Aina ha entrat per primer cop a la plataforma de l'escola i li demanen que inventi una <b>contrasenya</b>. Ha escrit «aina2015»… i en Bit ha fet BIP BIP d'alarma!|Aina ha entrado por primera vez en la plataforma del cole y le piden que invente una <b>contraseña</b>. Ha escrito «aina2015»… ¡y Bit ha hecho BIP BIP de alarma!" },
        { k: 'digStory', ph: 'missio', scene: 'ciutat', who: 'bit', mood: 'think', t: "BIP! Una contrasenya és la <b>clau</b> del teu compte. Si és fàcil d'endevinar, algú altre hi podria entrar. Avui seràs <b>enginyer/a de claus</b>: aprendràs a fer contrasenyes que costi molt endevinar… i a guardar-les bé.|¡BIP! Una contraseña es la <b>llave</b> de tu cuenta. Si es fácil de adivinar, otra persona podría entrar. Hoy serás <b>ingeniero/a de llaves</b>: aprenderás a hacer contraseñas que cueste mucho adivinar… y a guardarlas bien." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'La clau|La llave', t: 'Una contrasenya és una clau secreta|Una contraseña es una llave secreta', anim: 'digPwSecret',
            x: "La contrasenya protegeix els teus comptes: els teus treballs, els teus missatges, les teves fotos. Com la clau de casa, <b>és teva</b> i no es deixa a ningú. Si encara ets petit/a, la pot saber la teva família, que t'ajuda a cuidar-la.|La contraseña protege tus cuentas: tus trabajos, tus mensajes, tus fotos. Como la llave de casa, <b>es tuya</b> y no se presta a nadie. Si aún eres pequeño/a, la puede saber tu familia, que te ayuda a cuidarla.",
            tip: "Ni el teu millor amic o amiga l'ha de saber. No és desconfiança: és cuidar el que és teu.|Ni tu mejor amigo o amiga tiene que saberla. No es desconfianza: es cuidar lo que es tuyo." },
          { k: 'Com es descobreixen|Cómo se descubren', t: 'Les primeres que es proven|Las primeras que se prueban', anim: 'digPwLen',
            x: "Hi ha programes que proven contrasenyes una darrere l'altra, molt de pressa. Comencen per les més típiques: <b>1234</b>, <b>qwerty</b>, noms, animals, equips de futbol… I una persona que et coneix provaria el teu nom o el dia que vas néixer.|Hay programas que prueban contraseñas una detrás de otra, muy deprisa. Empiezan por las más típicas: <b>1234</b>, <b>qwerty</b>, nombres, animales, equipos de fútbol… Y una persona que te conoce probaría tu nombre o el día que naciste.",
            bad: "«aina2015» és bona: té lletres i números.|«aina2015» es buena: tiene letras y números.", good: "«aina2015» és feble: és un nom i un any, el primer que algú provaria.|«aina2015» es débil: es un nombre y un año, lo primero que alguien probaría." },
          { k: 'Llarga i barrejada|Larga y mezclada', t: 'El secret és la longitud|El secreto es la longitud', anim: 'digPwLen',
            x: "Cada caràcter que afegeixes multiplica les combinacions possibles. Per això una contrasenya <span class='hl'>llarga</span> (12 caràcters o més) costa molt més d'endevinar. Si a més <b>barreges</b> minúscules, majúscules, números i símbols, encara millor.|Cada carácter que añades multiplica las combinaciones posibles. Por eso una contraseña <span class='hl'>larga</span> (12 caracteres o más) cuesta mucho más de adivinar. Si además <b>mezclas</b> minúsculas, mayúsculas, números y símbolos, todavía mejor." },
          { k: 'El truc|El truco', t: 'La frase de pas|La frase de paso', anim: 'digPwPhrase',
            x: "Tria <b>tres paraules que no tinguin res a veure</b> (pingüí, núvol, cohet), posa'n una amb majúscula i afegeix un número i un símbol. Surt una contrasenya llarga, forta… i fàcil de recordar perquè t'imagines la imatge: un pingüí dalt d'un núvol pilotant un cohet!|Elige <b>tres palabras que no tengan nada que ver</b> (pingüino, nube, cohete), pon una con mayúscula y añade un número y un símbolo. Sale una contraseña larga, fuerte… ¡y fácil de recordar porque te imaginas la imagen: un pingüino encima de una nube pilotando un cohete!",
            tip: "No facis servir els exemples que veus en aquesta app: inventa sempre les teves paraules.|No uses los ejemplos que ves en esta app: inventa siempre tus palabras." },
          { k: 'Una per a cada porta|Una para cada puerta', t: 'No repeteixis la mateixa|No repitas la misma', anim: 'digPwMany',
            x: "Si fas servir la mateixa contrasenya a tot arreu i algú la descobreix en un lloc, podria entrar a tots els altres. Millor <b>una de diferent per a cada compte</b>. Per recordar-les, la família pot fer servir un <b>gestor de contrasenyes</b> (un programa que les guarda tancades amb una clau mestra).|Si usas la misma contraseña en todas partes y alguien la descubre en un sitio, podría entrar en todos los demás. Mejor <b>una diferente para cada cuenta</b>. Para recordarlas, la familia puede usar un <b>gestor de contraseñas</b> (un programa que las guarda cerradas con una llave maestra)." },
          { k: 'Si algú la sap|Si alguien la sabe', t: 'Canvia-la, amb un adult|Cámbiala, con un adulto', anim: 'digAskAdult',
            x: "Si creus que algú ha vist la teva contrasenya, no passa res greu si actues ràpid: <b>explica-ho a un adult de confiança i canvieu-la junts</b>. I recorda tancar la sessió quan facis servir un ordinador que no és teu.|Si crees que alguien ha visto tu contraseña, no pasa nada grave si actúas rápido: <b>cuéntaselo a un adulto de confianza y cambiadla juntos</b>. Y recuerda cerrar la sesión cuando uses un ordenador que no es tuyo." }
        ] },
        { k: 'quiz', ph: 'descobreix', q: "Quina d'aquestes contrasenyes costaria més d'endevinar?|¿Cuál de estas contraseñas costaría más de adivinar?",
          opts: ["<code>tortuga-Violí-globus8?</code>|<code>tortuga-Violín-globo8?</code>", '<code>aina2015</code>|<code>aina2015</code>', '<code>123456</code>|<code>123456</code>', '<code>barça</code>|<code>barça</code>'], a: 0,
          ex: "És llarga, barreja majúscules, números i un símbol, i són paraules que no tenen res a veure amb l'Aina.|Es larga, mezcla mayúsculas, números y un símbolo, y son palabras que no tienen nada que ver con Aina." },
        { k: 'digSort', ph: 'mans', q: "Classifica aquestes contrasenyes <b>inventades</b>: fàcils o difícils d'endevinar?|Clasifica estas contraseñas <b>inventadas</b>: ¿fáciles o difíciles de adivinar?",
          bins: [{ t: "Fàcil d'endevinar|Fácil de adivinar", ico: 'lock', c: '#EF5A5A' }, { t: "Difícil d'endevinar|Difícil de adivinar", ico: 'shield', c: '#1FA463' }],
          items: [
            { t: '<code>nil2016</code>', ico: 'key', b: 0, ex: "Nom + any: és el primer que provaria algú que el coneix.|Nombre + año: es lo primero que probaría alguien que lo conoce." },
            { t: '<code>Paraigua-cactus-Lluna31!</code>|<code>Paraguas-cactus-Luna31!</code>', ico: 'key', b: 1, ex: "Frase de pas: llarga, barrejada i sense dades personals.|Frase de paso: larga, mezclada y sin datos personales." },
            { t: '<code>qwerty</code>', ico: 'key', b: 0, ex: "Són les primeres lletres del teclat: de les més típiques.|Son las primeras letras del teclado: de las más típicas." },
            { t: '<code>NúvolPastanaga!Iglú77</code>|<code>NubeZanahoria!Iglú77</code>', ico: 'key', b: 1, ex: "Tres paraules sense relació, números i un símbol.|Tres palabras sin relación, números y un símbolo." },
            { t: '<code>contrasenya</code>|<code>contraseña</code>', ico: 'key', b: 0, ex: "És literalment la paraula «contrasenya»: molt típica.|Es literalmente la palabra «contraseña»: muy típica." },
            { t: '<code>gos</code>|<code>perro</code>', ico: 'key', b: 0, ex: "Massa curta: es pot endevinar en un moment.|Demasiado corta: se puede adivinar en un momento." },
            { t: '<code>tortugaVOLCÀ_xiulet9</code>|<code>tortugaVOLCÁN_silbato9</code>', ico: 'key', b: 1, ex: "Llarga i barrejada. Molt bé!|Larga y mezclada. ¡Muy bien!" },
            { t: '<code>11111111</code>', ico: 'key', b: 0, ex: "Té 8 caràcters, però tots iguals: és un patró.|Tiene 8 caracteres, pero todos iguales: es un patrón." }
          ] },
        { k: 'unplug', ph: 'mans', ico: '🎲', title: 'La fàbrica de frases de pas|La fábrica de frases de paso',
          t: "Amb algú de casa (o amb el company/a a classe):|Con alguien de casa (o con el compañero/a en clase):",
          steps: ["Cadascú escriu 6 paraules divertides en papers petits: animals, menjars, objectes…|Cada uno escribe 6 palabras divertidas en papeles pequeños: animales, comidas, objetos…",
            "Barregeu els papers i traieu-ne tres a l'atzar.|Mezclad los papeles y sacad tres al azar.",
            "Dibuixeu la imatge boja que fan les tres paraules juntes. Així és com es recorda una frase de pas!|Dibujad la imagen loca que hacen las tres palabras juntas. ¡Así es como se recuerda una frase de paso!",
            "Important: aquestes són <b>de pràctica</b>. Les de veritat, les inventa cadascú en secret.|Importante: estas son <b>de práctica</b>. Las de verdad, las inventa cada uno en secreto."],
          tip: "Llenceu els papers en acabar: una contrasenya de veritat no s'escriu en un paper a la vista.|Tirad los papeles al acabar: una contraseña de verdad no se escribe en un papel a la vista." },
        { k: 'digPass', ph: 'prova', goal: 3, q: "Laboratori de claus: inventa una contrasenya i mira què en diu el mesurador. Aconsegueix que sigui <b>forta</b>.|Laboratorio de llaves: inventa una contraseña y mira qué dice el medidor. Consigue que sea <b>fuerte</b>." },
        { k: 'quiz', ph: 'investiga', q: "En Nil fa servir la mateixa contrasenya per a la plataforma de l'escola, el correu i el compte de música. Què pot passar?|Nil usa la misma contraseña para la plataforma del cole, el correo y la cuenta de música. ¿Qué puede pasar?",
          opts: ["Si algú la descobreix en un lloc, podrà entrar a tots tres|Si alguien la descubre en un sitio, podrá entrar en los tres", 'Res: així no se li oblida|Nada: así no se le olvida', 'Que els comptes es tanquin sols|Que las cuentas se cierren solas'], a: 0,
          ex: "Una clau que obre totes les portes és molt còmoda… també per a qui la trobi. Millor una per a cada compte.|Una llave que abre todas las puertas es muy cómoda… también para quien la encuentre. Mejor una para cada cuenta." },
        { k: 'digChat', ph: 'investiga', q: "Un missatge inesperat arriba al compte de l'Aina. Ajuda-la a decidir.|Un mensaje inesperado llega a la cuenta de Aina. Ayúdala a decidir.",
          chat: { n: 'Suport_Oficial_Mosaic', ava: 'desc', sub: "compte no verificat|cuenta no verificada" },
          flow: [
            { f: 'desc', t: "Hola!! Som l'equip de Mosaic. Hem detectat un problema i el teu compte s'esborrarà AVUI 😱|¡¡Hola!! Somos el equipo de Mosaic. Hemos detectado un problema y tu cuenta se borrará HOY 😱" },
            { f: 'desc', t: "Per salvar-lo, envia'ns la teva contrasenya ara mateix. És urgent!!!|Para salvarla, envíanos tu contraseña ahora mismo. ¡¡¡Es urgente!!!" },
            { ask: "Què ha de fer l'Aina?|¿Qué tiene que hacer Aina?", opts: [
              { t: "Enviar la contrasenya, per si de cas|Enviar la contraseña, por si acaso", ico: 'share', ok: false, fb: "Cap servei de veritat et demana mai la contrasenya per missatge. Les presses i l'«URGENT» són un truc per no deixar-te pensar.|Ningún servicio de verdad te pide nunca la contraseña por mensaje. Las prisas y el «URGENTE» son un truco para no dejarte pensar." },
              { t: "No respondre i ensenyar-ho a un adult|No responder y enseñárselo a un adulto", ico: 'adult', ok: true, fb: "Exacte. És un intent d'engany. Un adult us ajudarà a bloquejar-lo i a denunciar-lo.|Exacto. Es un intento de engaño. Un adulto os ayudará a bloquearlo y a denunciarlo.", me: null },
              { t: "Preguntar-los si són de veritat|Preguntarles si son de verdad", ico: 'chat', ok: false, fb: "Si responds, saben que el compte està actiu i insistiran. Millor no contestar i avisar un adult.|Si respondes, saben que la cuenta está activa e insistirán. Mejor no contestar y avisar a un adulto." }] },
            { sys: "L'Aina ho ha ensenyat a la seva mare i han bloquejat el compte fals.|Aina se lo ha enseñado a su madre y han bloqueado la cuenta falsa." },
            { sys: "Més tard, al xat de la classe…|Más tarde, en el chat de la clase…" },
            { f: 'nil', t: "Aina! Passa'm la teva contrasenya de l'app de mates i et pujo de nivell mentre dines 😎|¡Aina! Pásame tu contraseña de la app de mates y te subo de nivel mientras comes 😎" },
            { ask: "I ara? En Nil és el seu amic.|¿Y ahora? Nil es su amigo.", opts: [
              { t: "Dir-li que no, que és secreta (i que gràcies!)|Decirle que no, que es secreta (¡y que gracias!)", ico: 'lock', ok: true, fb: "Molt bé. Es pot dir que no amb amabilitat: la contrasenya no es deixa, ni als amics.|Muy bien. Se puede decir que no con amabilidad: la contraseña no se presta, ni a los amigos.", me: "Gràcies Nil, però la contrasenya és secreta 🔐 Ja hi pujaré jo!|Gracias Nil, pero la contraseña es secreta 🔐 ¡Ya subiré yo!" },
              { t: "Passar-l'hi, que és el seu millor amic|Pasársela, que es su mejor amigo", ico: 'share', ok: false, fb: "Encara que sigui de confiança, un cop la saps, la pots dir sense voler o fer-la servir per error. És millor no compartir-la.|Aunque sea de confianza, una vez la sabes, la puedes decir sin querer o usarla por error. Es mejor no compartirla." }] },
            { f: 'nil', t: "Tens raó! Jo tampoc no la dic mai 👍|¡Tienes razón! Yo tampoco la digo nunca 👍" }
          ] },
        { k: 'move', ph: 'pausa', secs: 30, title: 'El cadenat humà!|¡El candado humano!', t: "Posa't dret/a. Fes de cadenat: braços enlaire units (tancat!), obre'ls (obert!). Cada vegada que diguis una paraula de la teva frase de pas imaginària, tanca i obre. Acaba amb un estirament ben llarg!|Ponte de pie. Haz de candado: brazos arriba unidos (¡cerrado!), ábrelos (¡abierto!). Cada vez que digas una palabra de tu frase de paso imaginaria, cierra y abre. ¡Acaba con un estiramiento bien largo!" },
        { k: 'digPass', ph: 'repte', goal: 4, q: "Repte d'enginyer/a: ara una contrasenya <b>molt forta</b>. Pista: fes servir una frase de pas de tres paraules.|Reto de ingeniero/a: ahora una contraseña <b>muy fuerte</b>. Pista: usa una frase de paso de tres palabras." },
        { k: 'digSort', ph: 'repte', q: "Bona idea o mala idea? Classifica el que fa la gent amb les seves contrasenyes.|¿Buena idea o mala idea? Clasifica lo que hace la gente con sus contraseñas.",
          bins: [{ t: 'Bona idea|Buena idea', ico: 'check', c: '#1FA463' }, { t: 'Mala idea|Mala idea', ico: 'block', c: '#EF5A5A' }],
          items: [
            { t: "Enganxar un paper amb la contrasenya a la pantalla|Pegar un papel con la contraseña en la pantalla", ico: '📝', b: 1, ex: "Qualsevol que passi per allà la veurà.|Cualquiera que pase por allí la verá." },
            { t: "Tancar la sessió en acabar en un ordinador de l'escola|Cerrar la sesión al acabar en un ordenador del cole", ico: '🚪', b: 0, ex: "Així el següent no entra al teu compte.|Así el siguiente no entra en tu cuenta." },
            { t: "Fer servir la mateixa contrasenya per a tot|Usar la misma contraseña para todo", ico: '🔁', b: 1, ex: "Si en descobreixen una, les descobreixen totes.|Si descubren una, las descubren todas." },
            { t: "Canviar-la amb un adult si algú l'ha vist|Cambiarla con un adulto si alguien la ha visto", ico: '🔄', b: 0, ex: "Actuar ràpid ho soluciona.|Actuar rápido lo soluciona." },
            { t: "Dir-la en veu alta al pati|Decirla en voz alta en el patio", ico: '📢', b: 1, ex: "Les contrasenyes es guarden en silenci.|Las contraseñas se guardan en silencio." },
            { t: "Que la família t'ajudi a guardar-la, si ets petit/a|Que la familia te ayude a guardarla, si eres pequeño/a", ico: '👨‍👩‍👧', b: 0, ex: "La família és qui t'ajuda a cuidar els comptes.|La familia es quien te ayuda a cuidar las cuentas." },
            { t: "Fer servir la data del teu aniversari|Usar la fecha de tu cumpleaños", ico: '🎂', b: 1, ex: "Les dates són fàcils d'esbrinar.|Las fechas son fáciles de averiguar." }
          ] },
        { k: 'quiz', ph: 'repte', q: "Ets a l'ordinador de la biblioteca i el navegador pregunta: «Vols que recordi la contrasenya?». Què respons?|Estás en el ordenador de la biblioteca y el navegador pregunta: «¿Quieres que recuerde la contraseña?». ¿Qué respondes?",
          opts: ["No: és un ordinador que fa servir molta gent|No: es un ordenador que usa mucha gente", 'Sí: així la propera vegada és més ràpid|Sí: así la próxima vez es más rápido', 'Sí, i la deixo oberta per si torno|Sí, y la dejo abierta por si vuelvo'], a: 0,
          ex: "En un ordinador compartit, no guardis contrasenyes i tanca sempre la sessió.|En un ordenador compartido, no guardes contraseñas y cierra siempre la sesión." },
        { k: 'digMake', ph: 'crea', tpl: 'card', name: 'Targeta: claus segures|Tarjeta: llaves seguras', q: "Crea la teva <b>targeta de claus segures</b> per penjar al costat de l'ordinador de casa (sense cap contrasenya escrita, és clar!).|Crea tu <b>tarjeta de llaves seguras</b> para colgar al lado del ordenador de casa (¡sin ninguna contraseña escrita, claro!).",
          crit: ['Un títol que enganxi l\'ull|Un título que llame la atención', 'Entre 3 i 5 consells|Entre 3 y 5 consejos'], minItems: 3, maxItems: 5,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Títol|Título', req: 1, ph: 'p. ex. Les claus del meu compte|p. ej. Las llaves de mi cuenta', len: 40 },
            { id: 'it', to: 'items', k: 'multi', t: 'Tria els consells (de 3 a 5)|Elige los consejos (de 3 a 5)', min: 3, max: 5, opts: [
              'Llarga: 12 caràcters o més|Larga: 12 caracteres o más', 'Frase de pas: 3 paraules sense relació|Frase de paso: 3 palabras sin relación', 'Ni el meu nom ni dates|Ni mi nombre ni fechas',
              'Una contrasenya diferent per a cada compte|Una contraseña diferente para cada cuenta', 'És secreta: no la deixo a ningú|Es secreta: no se la presto a nadie', 'Tanco la sessió als ordinadors compartits|Cierro la sesión en los ordenadores compartidos',
              "Si algú la veu, la canvio amb un adult|Si alguien la ve, la cambio con un adulto", 'Cap servei de veritat me la demana per missatge|Ningún servicio de verdad me la pide por mensaje'] },
            ...dig5Look('happy')] },
        { k: 'quiz', ph: 'tanca', q: 'Quina és la millor manera de fer una contrasenya forta i fàcil de recordar?|¿Cuál es la mejor manera de hacer una contraseña fuerte y fácil de recordar?',
          opts: ["Una frase de pas: tres paraules sense relació, un número i un símbol|Una frase de paso: tres palabras sin relación, un número y un símbolo", 'El meu nom i el meu any de naixement|Mi nombre y mi año de nacimiento', 'La mateixa per a tot, perquè no se m\'oblidi|La misma para todo, para que no se me olvide'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Amb qui pots compartir la teva contrasenya?|¿Con quién puedes compartir tu contraseña?',
          opts: ["Amb ningú; si soc petit/a, amb la meva família|Con nadie; si soy pequeño/a, con mi familia", 'Amb el meu millor amic o amiga|Con mi mejor amigo o amiga', 'Amb qui me la demani per missatge|Con quien me la pida por mensaje'], a: 0 },
        dig5Feel
      ] },

    /* ---------- d1-2 · Què compartim? ---------- */
    { id: 'd1-2', t: 'Què compartim?|¿Qué compartimos?', min: 40,
      learn: ["Les dades personals (nom i cognoms, adreça, escola, telèfon, on soc) són privades.|Los datos personales (nombre y apellidos, dirección, escuela, teléfono, dónde estoy) son privados.",
        'Amb la configuració de privadesa decideixo qui veu el que publico.|Con la configuración de privacidad decido quién ve lo que publico.',
        "Abans de publicar una foto on surt algú altre, li demano permís.|Antes de publicar una foto en la que sale otra persona, le pido permiso."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Recordes què és una <b>frase de pas</b>?|¿Recuerdas qué es una <b>frase de paso</b>?", opts: ["Tres paraules sense relació, amb un número i un símbol|Tres palabras sin relación, con un número y un símbolo", 'Una frase que dius per entrar a classe|Una frase que dices para entrar en clase', 'La contrasenya que comparteixes amb els amics|La contraseña que compartes con los amigos'], a: 0 },
        { k: 'digStory', ph: 'missio', scene: 'ciutat', who: 'both', t: "L'Aina té permís de la família per fer-se un perfil a <b>Mosaic</b>, una xarxa per compartir dibuixos (és inventada, només existeix en aquesta app). Abans de penjar res, en Bit vol revisar amb ella <b>què compartim i amb qui</b>.|Aina tiene permiso de su familia para hacerse un perfil en <b>Mosaic</b>, una red para compartir dibujos (es inventada, solo existe en esta app). Antes de colgar nada, Bit quiere revisar con ella <b>qué compartimos y con quién</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Dades personals|Datos personales', t: 'El que diu qui ets i on ets|Lo que dice quién eres y dónde estás', anim: 'digData',
            x: "Les <span class='hl'>dades personals</span> són les que permeten saber qui ets o trobar-te: nom i cognoms, adreça, telèfon, escola, data de naixement, on ets ara mateix, fotos de la cara… <b>Són privades</b>. En canvi, els teus gustos o un dibuix teu es poden compartir sense problema.|Los <span class='hl'>datos personales</span> son los que permiten saber quién eres o encontrarte: nombre y apellidos, dirección, teléfono, escuela, fecha de nacimiento, dónde estás ahora mismo, fotos de la cara… <b>Son privados</b>. En cambio, tus gustos o un dibujo tuyo se pueden compartir sin problema." },
          { k: 'Qui ho veu?|¿Quién lo ve?', t: 'Els cercles de confiança|Los círculos de confianza', anim: 'digCircles',
            x: "Imagina cercles al teu voltant: família, amics, coneguts… i <b>tothom</b>. Quan publiques en un perfil <b>públic</b>, ho pot veure qualsevol persona del món. En un perfil <b>privat</b>, només qui tu acceptes.|Imagina círculos a tu alrededor: familia, amigos, conocidos… y <b>todo el mundo</b>. Cuando publicas en un perfil <b>público</b>, lo puede ver cualquier persona del mundo. En un perfil <b>privado</b>, solo quien tú aceptas." },
          { k: 'Darrere la pantalla|Detrás de la pantalla', t: 'No sempre saps qui és|No siempre sabes quién es', anim: 'digStranger',
            x: "A la xarxa, la foto i el nom d'un perfil els pot posar qualsevol. Un perfil que diu «tinc 11 anys» pot ser d'algú més gran. Per això <b>no acceptem desconeguts</b> i no els donem dades.|En la red, la foto y el nombre de un perfil los puede poner cualquiera. Un perfil que dice «tengo 11 años» puede ser de alguien mayor. Por eso <b>no aceptamos desconocidos</b> y no les damos datos.",
            tip: "Si algú que no coneixes et demana fotos, dades o que guardis un secret, explica-ho a un adult. No t'has de sentir malament: has fet el que tocava.|Si alguien que no conoces te pide fotos, datos o que guardes un secreto, cuéntaselo a un adulto. No tienes que sentirte mal: has hecho lo correcto." },
          { k: 'Configuració|Configuración', t: 'Els interruptors de la privadesa|Los interruptores de la privacidad', anim: 'digSettings',
            x: "Les apps tenen una pantalla de <span class='hl'>configuració de privadesa</span>: qui veu el perfil, qui t'escriu, si compartim on som… Revisa-la <b>amb la família</b> el primer dia i, de tant en tant, torna-hi: les apps a vegades canvien coses.|Las apps tienen una pantalla de <span class='hl'>configuración de privacidad</span>: quién ve el perfil, quién te escribe, si compartimos dónde estamos… Revísala <b>con la familia</b> el primer día y, de vez en cuando, vuelve: las apps a veces cambian cosas." },
          { k: 'Els altres també|Los demás también', t: 'Fotos d\'altres: primer, permís|Fotos de otros: primero, permiso', anim: 'digThinkPost',
            x: "Una foto on surt un amic o una amiga també és <b>seva</b>. Abans de publicar-la, pregunta-li: «La puc penjar?». I si algú et demana que en treguis una on surts tu, té tot el dret a demanar-ho.|Una foto en la que sale un amigo o una amiga también es <b>suya</b>. Antes de publicarla, pregúntale: «¿La puedo colgar?». Y si alguien te pide que quites una en la que sale, tiene todo el derecho a pedirlo." }
        ] },
        { k: 'digSort', ph: 'mans', q: "Dada personal (privada) o cosa que es pot compartir?|¿Dato personal (privado) o cosa que se puede compartir?",
          bins: [{ t: 'Privat|Privado', ico: 'lock', c: '#EF5A5A' }, { t: 'Es pot compartir|Se puede compartir', ico: 'share', c: '#1FA463' }],
          items: [
            { t: 'El meu nom i cognoms|Mi nombre y apellidos', ico: 'user', b: 0 }, { t: "Que m'agrada dibuixar dracs|Que me gusta dibujar dragones", ico: 'palette', b: 1 },
            { t: "L'adreça de casa|La dirección de casa", ico: 'home', b: 0 }, { t: 'El meu color preferit|Mi color favorito', ico: 'heart', b: 1 },
            { t: "El nom de la meva escola|El nombre de mi escuela", ico: 'school', b: 0, ex: "Diu on ets cada dia de la setmana.|Dice dónde estás cada día de la semana." },
            { t: "Una foto d'un dibuix meu (sense la meva cara)|Una foto de un dibujo mío (sin mi cara)", ico: 'camera', b: 1 },
            { t: 'El meu número de telèfon|Mi número de teléfono', ico: 'phone', b: 0 }, { t: 'On soc ara mateix|Dónde estoy ahora mismo', ico: 'pin', b: 0 },
            { t: "Un llibre que m'ha agradat|Un libro que me ha gustado", ico: 'book', b: 1 }
          ] },
        { k: 'unplug', ph: 'mans', ico: '🎯', title: 'Els meus cercles|Mis círculos', t: "Amb un full i colors (a classe o a casa):|Con una hoja y colores (en clase o en casa):",
          steps: ["Dibuixa quatre cercles, un dins l'altre. Al centre escriu «jo».|Dibuja cuatro círculos, uno dentro del otro. En el centro escribe «yo».",
            "Posa noms als cercles: família, amics de veritat, coneguts, tothom.|Pon nombres a los círculos: familia, amigos de verdad, conocidos, todo el mundo.",
            "Ara decideix: on posaries una foto de les vacances? I el teu dibuix preferit? I l'adreça de casa?|Ahora decide: ¿dónde pondrías una foto de las vacaciones? ¿Y tu dibujo favorito? ¿Y la dirección de casa?",
            "Compara-ho amb algú: hi ha coses que heu posat en cercles diferents? Per què?|Compáralo con alguien: ¿hay cosas que habéis puesto en círculos diferentes? ¿Por qué?"] },
        { k: 'digPriv', ph: 'prova', q: "Configura el perfil de l'Aina a Mosaic. A la dreta veus <b>què en veuria una persona desconeguda</b>. Deixa'l ben protegit.|Configura el perfil de Aina en Mosaic. A la derecha ves <b>qué vería una persona desconocida</b>. Déjalo bien protegido." },
        { k: 'digFeed', ph: 'investiga', q: "Fes un tomb per Mosaic. Què faries amb cada publicació?|Date una vuelta por Mosaic. ¿Qué harías con cada publicación?",
          posts: [
            { f: 'jana', pic: 'uniforme', when: 'fa 5 min|hace 5 min', t: "Primer dia de curs!! 🎒✨|¡¡Primer día de curso!! 🎒✨", comments: [{ f: 'iris', t: 'Quina il·lusió!|¡Qué ilusión!' }],
              ask: "A la foto de la Jana es veu el nom de l'escola i del carrer. Què fas?|En la foto de Jana se ve el nombre de la escuela y de la calle. ¿Qué haces?", opts: [
                { t: "Li escric en privat que es veu l'escola i el carrer|Le escribo en privado que se ve la escuela y la calle", ico: 'chat', ok: true, act: 'comment', fb: "Molt bé: l'avises amb discreció perquè pugui retallar-la o treure-la.|Muy bien: la avisas con discreción para que pueda recortarla o quitarla.", me: "(en privat) Jana, a la foto es veu el carrer i l'escola 👀|(en privado) Jana, en la foto se ve la calle y la escuela 👀" },
                { t: 'Hi faig m\'agrada i segueixo|Le doy a me gusta y sigo', ico: 'heart', ok: false, fb: "La foto és bonica, però ensenya on és cada dia. Un amic de veritat l'avisaria.|La foto es bonita, pero enseña dónde está cada día. Un amigo de verdad la avisaría." },
                { t: 'La comparteixo perquè ho vegi més gent|La comparto para que la vea más gente', ico: 'share', ok: false, fb: "Compartir-la faria que encara més gent sabés on és.|Compartirla haría que todavía más gente supiera dónde está." }] },
            { f: 'desc', when: 'patrocinat|patrocinado', big: "🎁 CONCURS! Escriu als comentaris la teva adreça i el teu telèfon i guanyaràs una tauleta!|🎁 ¡CONCURSO! Escribe en los comentarios tu dirección y tu teléfono y ¡ganarás una tablet!", t: '',
              ask: "Aquest «concurs» demana dades personals als comentaris. Què fas?|Este «concurso» pide datos personales en los comentarios. ¿Qué haces?", opts: [
                { t: "No hi participo i el denuncio|No participo y lo denuncio", ico: 'flag', ok: true, act: 'report', fb: "Exacte. Cap concurs de veritat et demana l'adreça en un comentari públic.|Exacto. Ningún concurso de verdad te pide la dirección en un comentario público." },
                { t: "Hi poso només l'adreça, el telèfon no|Pongo solo la dirección, el teléfono no", ico: 'home', ok: false, fb: "L'adreça és una dada personal molt important. No l'escriguis mai en públic.|La dirección es un dato personal muy importante. No la escribas nunca en público." }] },
            { f: 'pau', pic: 'selfie', when: 'fa 1 h|hace 1 h', t: "Tarda de parc amb la colla 😄|Tarde de parque con la pandilla 😄", comments: [{ f: 'omar', t: 'Ei, jo hi surto amb els ulls tancats 😅|Eh, yo salgo con los ojos cerrados 😅' }],
              ask: "L'Omar no vol sortir així a la foto. Què hauria de fer en Pau?|Omar no quiere salir así en la foto. ¿Qué debería hacer Pau?", opts: [
                { t: "Treure-la o canviar-la, i la propera vegada preguntar abans|Quitarla o cambiarla, y la próxima vez preguntar antes", ico: 'check', ok: true, act: 'tell', fb: "Les fotos on surten altres també són seves: primer, permís.|Las fotos en las que salen otros también son suyas: primero, permiso." },
                { t: "Deixar-la: la foto és d'en Pau|Dejarla: la foto es de Pau", ico: 'block', ok: false, fb: "L'Omar també hi surt i té dret a decidir sobre la seva imatge.|Omar también sale y tiene derecho a decidir sobre su imagen." }] }
          ] },
        { k: 'digTalk', ph: 'investiga', pic: 'selfie', q: "Es pot penjar una foto d'un amic sense preguntar-li?|¿Se puede colgar una foto de un amigo sin preguntarle?",
          stances: [{ t: 'Sí, si surt bé|Sí, si sale bien', ico: 'camera' }, { t: 'No, primer cal preguntar|No, primero hay que preguntar', ico: 'chat' }, { t: 'Depèn de la foto|Depende de la foto', ico: 'lupa' }],
          voices: [{ f: 'omar', t: "A mi em va saber greu sortir en una foto que no m'agradava. Ningú no m'ho havia preguntat.|A mí me sentó mal salir en una foto que no me gustaba. Nadie me lo había preguntado." },
            { f: 'iris', t: "Jo pregunto sempre. Costa dos segons i ningú no s'enfada.|Yo pregunto siempre. Cuesta dos segundos y nadie se enfada." },
            { f: 'leo', t: "I si és un grup molt gran? Potser es pot fer una foto on no es vegin les cares.|¿Y si es un grupo muy grande? Quizá se puede hacer una foto donde no se vean las caras." }],
          prompt: "Com preguntaríeu permís per penjar una foto? Assageu la frase en parelles. I què fem si algú ens diu que no?|¿Cómo pediríais permiso para colgar una foto? Ensayad la frase por parejas. ¿Y qué hacemos si alguien nos dice que no?" },
        { k: 'move', ph: 'pausa', secs: 30, title: 'Públic o privat?|¿Público o privado?', t: "Escolta (o llegeix) i mou-te: si és una dada <b>privada</b>, ajup-te i fes-te petit/a; si es pot <b>compartir</b>, salta amb els braços enlaire. Adreça… color preferit… telèfon… dibuix… escola!|Escucha (o lee) y muévete: si es un dato <b>privado</b>, agáchate y hazte pequeño/a; si se puede <b>compartir</b>, salta con los brazos arriba. Dirección… color favorito… teléfono… dibujo… ¡escuela!" },
        { k: 'digChat', ph: 'repte', q: "Un perfil desconegut escriu a l'Aina. Ajuda-la amb cada missatge.|Un perfil desconocido escribe a Aina. Ayúdala con cada mensaje.",
          chat: { n: 'Leo_11 ⚽', ava: 'leo', sub: "no és a la teva llista d'amics|no está en tu lista de amigos" },
          flow: [
            { f: 'leo', t: "Hola! He vist els teus dibuixos, són increïbles 🤩|¡Hola! He visto tus dibujos, son increíbles 🤩" },
            { f: 'leo', t: "A quina escola vas? Potser som veïns 😄|¿A qué escuela vas? Quizá somos vecinos 😄" },
            { ask: "Què respon l'Aina?|¿Qué responde Aina?", opts: [
              { t: "Gràcies pels dibuixos! (i no diu l'escola)|¡Gracias por los dibujos! (y no dice la escuela)", ico: 'heart', ok: true, fb: "Pots ser amable sense donar dades personals. L'escola és una dada que diu on ets.|Puedes ser amable sin dar datos personales. La escuela es un dato que dice dónde estás.", me: "Gràcies! 😊|¡Gracias! 😊" },
              { t: "Li diu el nom de l'escola|Le dice el nombre de la escuela", ico: 'school', ok: false, fb: "No saps qui hi ha darrere d'aquest perfil. El nom de l'escola no es diu a desconeguts.|No sabes quién hay detrás de este perfil. El nombre de la escuela no se dice a desconocidos." },
              { t: "Li respon amb un insult perquè és un desconegut|Le responde con un insulto porque es un desconocido", ico: 'block', ok: false, fb: "No cal insultar ningú. N'hi ha prou amb no donar dades i, si insisteix, bloquejar.|No hace falta insultar a nadie. Basta con no dar datos y, si insiste, bloquear." }] },
            { f: 'leo', t: "Envia'm una foto teva i t'envio la meva! Però no ho diguis als teus pares, eh? Que és un secret entre nosaltres 🤫|¡Envíame una foto tuya y te envío la mía! Pero no se lo digas a tus padres, ¿eh? Que es un secreto entre nosotros 🤫" },
            { ask: "Aquí hi ha una senyal d'alerta. Què fa l'Aina?|Aquí hay una señal de alerta. ¿Qué hace Aina?", opts: [
              { t: "No envia res, el bloqueja i ho explica a un adult|No envía nada, lo bloquea y se lo cuenta a un adulto", ico: 'adult', ok: true, fb: "Perfecte. Quan algú et demana fotos i que ho guardis en secret, és el moment d'explicar-ho. Has fet molt bé.|Perfecto. Cuando alguien te pide fotos y que lo guardes en secreto, es el momento de contarlo. Has hecho muy bien." },
              { t: "Envia una foto on no es vegi gaire la cara|Envía una foto en la que no se vea mucho la cara", ico: 'camera', ok: false, fb: "No hi ha cap foto «poc perillosa» per a un desconegut que demana secrets. No n'enviïs cap.|No hay ninguna foto «poco peligrosa» para un desconocido que pide secretos. No envíes ninguna." },
              { t: "Guarda el secret, que ha dit que és amic|Guarda el secreto, que ha dicho que es amigo", ico: 'mute', ok: false, fb: "Un amic de veritat no et demana que amaguis coses a la teva família. Aquests secrets s'expliquen sempre.|Un amigo de verdad no te pide que escondas cosas a tu familia. Estos secretos se cuentan siempre." }] },
            { sys: "L'Aina ho ha explicat a la seva mare. L'han bloquejat i denunciat. Bona feina!|Aina se lo ha contado a su madre. Lo han bloqueado y denunciado. ¡Buen trabajo!" }
          ] },
        { k: 'digPriv', ph: 'repte', ava: 'avi', only: ['perfil', 'ubi', 'msg', 'etiq', 'edat'], d: { perfil: 0, ubi: 0, msg: 0, etiq: 0, edat: 0 }, q: "L'avi Ramon s'acaba de fer un compte per veure els dibuixos dels nets… i ho ha deixat tot obert! Ajuda'l a configurar-lo.|El abuelo Ramón se acaba de hacer una cuenta para ver los dibujos de sus nietos… ¡y lo ha dejado todo abierto! Ayúdale a configurarla.",
          yes: "L'avi està encantat: ara només el veuen la família i els amics. Ensenyar als grans també és ciutadania digital!|El abuelo está encantado: ahora solo lo ven la familia y los amigos. ¡Enseñar a los mayores también es ciudadanía digital!" },
        { k: 'quiz', ph: 'repte', q: "La Iris vol penjar una foto de la classe a la seva xarxa. Què ha de fer primer?|Iris quiere colgar una foto de la clase en su red. ¿Qué tiene que hacer primero?",
          opts: ["Preguntar als que hi surten si els sembla bé|Preguntar a los que salen si les parece bien", 'Res, si ella ha fet la foto|Nada, si ella ha hecho la foto', 'Posar-hi els noms de tothom|Poner los nombres de todos'], a: 0, ex: "Cada persona decideix sobre la seva imatge.|Cada persona decide sobre su imagen." },
        { k: 'digMake', ph: 'crea', tpl: 'card', name: 'Les meves regles de privadesa|Mis reglas de privacidad', q: "Fes la teva targeta amb les <b>regles de privadesa</b> que vols seguir.|Haz tu tarjeta con las <b>reglas de privacidad</b> que quieres seguir.",
          crit: ['De 3 a 5 regles|De 3 a 5 reglas', 'Pots afegir-ne una de teva|Puedes añadir una tuya'], minItems: 3, maxItems: 5,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Títol|Título', req: 1, ph: 'p. ex. El meu perfil, les meves regles|p. ej. Mi perfil, mis reglas', len: 40 },
            { id: 'it', to: 'items', k: 'multi', t: 'Tria les regles|Elige las reglas', min: 2, max: 5, opts: [
              'Perfil privat, sempre|Perfil privado, siempre', 'Ni adreça, ni escola, ni telèfon|Ni dirección, ni escuela, ni teléfono', 'Un avatar en lloc de la meva cara|Un avatar en lugar de mi cara',
              'Només accepto gent que conec de veritat|Solo acepto a gente que conozco de verdad', 'Pregunto abans de penjar fotos d\'altres|Pregunto antes de colgar fotos de otros', 'La ubicació, apagada|La ubicación, apagada',
              'Si algú em demana secrets, ho explico|Si alguien me pide secretos, lo cuento', 'Reviso la configuració amb la família|Reviso la configuración con la familia'] },
            { id: 'ow', to: 'items', k: 'own', t: 'Una regla teva (opcional)|Una regla tuya (opcional)', max: 1, ph: 'Escriu-la amb les teves paraules|Escríbela con tus palabras' },
            ...dig5Look('wave')] },
        { k: 'quiz', ph: 'tanca', q: 'Quina d\'aquestes és una dada personal que no es comparteix?|¿Cuál de estas es un dato personal que no se comparte?',
          opts: ["L'adreça de casa|La dirección de casa", 'El meu llibre preferit|Mi libro favorito', 'Un dibuix que he fet|Un dibujo que he hecho'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Un desconegut et demana una foto i que no ho diguis a ningú. Què fas?|Un desconocido te pide una foto y que no se lo digas a nadie. ¿Qué haces?',
          opts: ["No envio res i ho explico a un adult de confiança|No envío nada y se lo cuento a un adulto de confianza", 'Li envio una foto i ja està|Le envío una foto y ya está', 'Ho guardo en secret|Lo guardo en secreto'], a: 0 },
        dig5Feel
      ] },

    /* ---------- d1-3 · L'empremta digital ---------- */
    { id: 'd1-3', t: "L'empremta digital|La huella digital", min: 40,
      learn: ["Tot el que fem a internet deixa una empremta digital: publicacions, comentaris, m'agrada…|Todo lo que hacemos en internet deja una huella digital: publicaciones, comentarios, me gusta…",
        "El que es publica es pot copiar i guardar: esborrar-ho no sempre ho fa desaparèixer.|Lo que se publica se puede copiar y guardar: borrarlo no siempre lo hace desaparecer.",
        "Puc construir una empremta positiva: projectes, ajuda i comentaris amables.|Puedo construir una huella positiva: proyectos, ayuda y comentarios amables."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Recordes què és un perfil <b>privat</b>?|¿Recuerdas qué es un perfil <b>privado</b>?", opts: ["Un perfil que només veu qui jo accepto|Un perfil que solo ve quien yo acepto", 'Un perfil sense foto|Un perfil sin foto', 'Un perfil que no fa servir ningú|Un perfil que no usa nadie'], a: 0 },
        { k: 'digStory', ph: 'missio', scene: 'aula', who: 'both', t: "Quan camines per la sorra, deixes petjades. A internet passa una cosa semblant: <b>cada foto, cada comentari i cada m'agrada deixa rastre</b>. Avui seguirem el rastre d'en Nil des dels 9 fins als 15 anys.|Cuando caminas por la arena, dejas huellas. En internet pasa algo parecido: <b>cada foto, cada comentario y cada me gusta deja rastro</b>. Hoy seguiremos el rastro de Nil desde los 9 hasta los 15 años." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Empremta digital|Huella digital', t: 'El rastre que deixem|El rastro que dejamos', anim: 'digFootprint',
            x: "L'<span class='hl'>empremta digital</span> és tot el que queda de nosaltres a internet: el que publiquem, el que comentem, el que ens agrada… i també el que <b>altres publiquen de nosaltres</b>.|La <span class='hl'>huella digital</span> es todo lo que queda de nosotros en internet: lo que publicamos, lo que comentamos, lo que nos gusta… y también lo que <b>otros publican de nosotros</b>." },
          { k: 'Copies|Copias', t: 'Esborrar no ho esborra tot|Borrar no lo borra todo', anim: 'digCopy',
            x: "Quan publiques una cosa, algú pot fer-ne una <b>captura de pantalla</b> o descarregar-la. Encara que tu l'esborris, aquelles còpies poden seguir circulant. Per això cal pensar <b>abans</b> de publicar, no després.|Cuando publicas algo, alguien puede hacer una <b>captura de pantalla</b> o descargarlo. Aunque tú lo borres, esas copias pueden seguir circulando. Por eso hay que pensar <b>antes</b> de publicar, no después." },
          { k: 'Dura molt|Dura mucho', t: 'D\'aquí a uns anys…|Dentro de unos años…', anim: 'digFootprint',
            x: "El que publiques avui pot aparèixer d'aquí a molts anys: quan busquis feina, quan entris en un equip o quan coneguis gent nova. No vol dir tenir por de publicar, sinó <b>publicar coses de les quals estiguis orgullós/a</b>.|Lo que publicas hoy puede aparecer dentro de muchos años: cuando busques trabajo, cuando entres en un equipo o cuando conozcas gente nueva. No quiere decir tener miedo de publicar, sino <b>publicar cosas de las que estés orgulloso/a</b>." },
          { k: 'Abans de publicar|Antes de publicar', t: 'Tres preguntes ràpides|Tres preguntas rápidas', anim: 'digThinkPost',
            x: "Abans de prémer «Publica»: <b>ho ensenyaria a la meva família?</b> Hi surt algú que no ha dit que sí? Em sabria greu que ho veiés tothom? Si alguna resposta et fa dubtar, espera.|Antes de pulsar «Publica»: <b>¿lo enseñaría a mi familia?</b> ¿Sale alguien que no ha dicho que sí? ¿Me sabría mal que lo viera todo el mundo? Si alguna respuesta te hace dudar, espera." },
          { k: 'Positiva|Positiva', t: "L'empremta també suma|La huella también suma", anim: 'digPositive',
            x: "La teva empremta pot parlar bé de tu: un projecte que has fet, un comentari que anima algú, una vegada que vas ajudar. Això també queda… i <b>és el que t'agradarà que trobin</b>.|Tu huella puede hablar bien de ti: un proyecto que has hecho, un comentario que anima a alguien, una vez que ayudaste. Eso también queda… y <b>es lo que te gustará que encuentren</b>." }
        ] },
        { k: 'quiz', ph: 'descobreix', q: "La Iris ha esborrat una foto que va publicar fa una setmana. Ja ha desaparegut del tot?|Iris ha borrado una foto que publicó hace una semana. ¿Ya ha desaparecido del todo?",
          opts: ["No necessàriament: algú en pot haver fet una còpia|No necesariamente: alguien puede haber hecho una copia", 'Sí, en esborrar-la desapareix de tot arreu|Sí, al borrarla desaparece de todas partes', 'Sí, perquè ja ha passat una setmana|Sí, porque ya ha pasado una semana'], a: 0 },
        { k: 'digFoot', ph: 'prova', who: 'nil', q: "Acompanya en Nil al llarg dels anys. A cada moment, tria què fa amb el que vol publicar.|Acompaña a Nil a lo largo de los años. En cada momento, elige qué hace con lo que quiere publicar.", search: 'Nil Ferrer',
          moments: [
            { age: '9 anys|9 años', t: "Ha fet un còmic sobre un drac astronauta i n'està molt orgullós.|Ha hecho un cómic sobre un dragón astronauta y está muy orgulloso.", pic: 'dibuix', opts: [
              { t: "El penja a l'espai de la classe, amb permís de la família|Lo cuelga en el espacio de la clase, con permiso de la familia", ico: 'star', ok: true, pub: true, res: "Còmic «El drac astronauta», a l'espai de la classe|Cómic «El dragón astronauta», en el espacio de la clase", fb: "Un projecte del qual està orgullós: empremta positiva!|Un proyecto del que está orgulloso: ¡huella positiva!" },
              { t: "No l'ensenya a ningú, per vergonya|No se lo enseña a nadie, por vergüenza", ico: 'mute', ok: true, pub: false, fb: "També està bé, però és una llàstima: era un treball molt maco!|También está bien, pero es una pena: ¡era un trabajo muy bonito!" }] },
            { age: '10 anys|10 años', t: "Vol penjar una foto amb l'uniforme davant de l'escola, on es veu el nom del carrer.|Quiere colgar una foto con el uniforme delante de la escuela, donde se ve el nombre de la calle.", pic: 'uniforme', opts: [
              { t: "La retalla perquè no es vegin el carrer ni l'escola|La recorta para que no se vean la calle ni la escuela", ico: 'camera', ok: true, pub: false, fb: "Molt bé: pot compartir el moment sense dir on és cada dia.|Muy bien: puede compartir el momento sin decir dónde está cada día." },
              { t: 'La penja tal qual, en un perfil públic|La cuelga tal cual, en un perfil público', ico: 'globe', ok: false, pub: true, res: "Foto amb uniforme, nom de l'escola i del carrer|Foto con uniforme, nombre de la escuela y de la calle", fb: "Qualsevol pot saber on és cada dia. Millor retallar-la o deixar-la per a la família.|Cualquiera puede saber dónde está cada día. Mejor recortarla o dejarla para la familia." }] },
            { age: '11 anys|11 años', t: "Està enfadat perquè el seu equip ha perdut i vol escriure un comentari ple d'insults a l'àrbitre.|Está enfadado porque su equipo ha perdido y quiere escribir un comentario lleno de insultos al árbitro.", opts: [
              { t: "Espera que se li passi i no escriu res|Espera a que se le pase y no escribe nada", ico: 'heart', ok: true, pub: false, fb: "Quan estem enfadats, és millor esperar. L'enuig passa; el comentari quedaria.|Cuando estamos enfadados, es mejor esperar. El enfado pasa; el comentario quedaría." },
              { t: "L'escriu: total, després l'esborrarà|Lo escribe: total, después lo borrará", ico: 'chat', ok: false, pub: true, res: "Comentari amb insults a un àrbitre|Comentario con insultos a un árbitro", fb: "Algú en va fer una captura. Encara que l'esborri, el comentari continua corrent.|Alguien hizo una captura. Aunque lo borre, el comentario sigue circulando." }] },
            { age: '12 anys|12 años', t: "Un company ha fet una presentació increïble a classe.|Un compañero ha hecho una presentación increíble en clase.", opts: [
              { t: "Li escriu un comentari per felicitar-lo|Le escribe un comentario para felicitarle", ico: 'heart', ok: true, pub: true, res: "Comentari felicitant un company per la seva presentació|Comentario felicitando a un compañero por su presentación", fb: "Animar els altres també és empremta positiva!|¡Animar a los demás también es huella positiva!" },
              { t: "No hi diu res|No dice nada", ico: 'mute', ok: true, pub: false, fb: "Està bé, però un comentari amable fa molt de bé (a ell i a la teva empremta).|Está bien, pero un comentario amable hace mucho bien (a él y a tu huella)." }] },
            { age: '14 anys|14 años', t: "Ha programat un videojoc senzill a l'extraescolar i el vol ensenyar.|Ha programado un videojuego sencillo en la extraescolar y lo quiere enseñar.", opts: [
              { t: "El publica a la web de projectes de l'escola|Lo publica en la web de proyectos de la escuela", ico: 'star', ok: true, pub: true, res: "El seu videojoc al web de projectes de l'escola|Su videojuego en la web de proyectos de la escuela", fb: "Excel·lent: d'aquí a uns anys, això parlarà molt bé d'ell.|Excelente: dentro de unos años, esto hablará muy bien de él." },
              { t: "El deixa guardat a l'ordinador|Lo deja guardado en el ordenador", ico: 'lock', ok: true, pub: false, fb: "Decisió seva! Però és un projecte que mereixia ser vist.|¡Decisión suya! Pero es un proyecto que merecía ser visto." }] }
          ] },
        { k: 'digSort', ph: 'investiga', q: "Empremta positiva o empremta que millor no hi fos?|¿Huella positiva o huella que mejor no estuviera?",
          bins: [{ t: 'Empremta positiva|Huella positiva', ico: 'star', c: '#1FA463' }, { t: 'Millor que no hi fos|Mejor que no estuviera', ico: 'eye', c: '#EF5A5A' }],
          items: [
            { t: 'Un vídeo explicant com has fet un volcà per a ciències|Un vídeo explicando cómo has hecho un volcán para ciencias', ico: '🌋', b: 0 },
            { t: "Una foto d'un amic dormint, sense permís|Una foto de un amigo durmiendo, sin permiso", ico: '😴', b: 1 },
            { t: 'Un comentari donant les gràcies a un profe|Un comentario dando las gracias a un profe', ico: '💌', b: 0 },
            { t: "Un missatge burlant-se d'algú pel seu aspecte|Un mensaje burlándose de alguien por su aspecto", ico: '😬', b: 1 },
            { t: 'La recepta de galetes que heu fet en família|La receta de galletas que habéis hecho en familia', ico: '🍪', b: 0 },
            { t: 'Un comentari enfadat escrit en calent|Un comentario enfadado escrito en caliente', ico: '😡', b: 1 },
            { t: 'Un dibuix teu per a un concurs de l\'escola|Un dibujo tuyo para un concurso de la escuela', ico: '🎨', b: 0 }
          ] },
        { k: 'unplug', ph: 'mans', ico: '👣', title: 'Entrevista a la família|Entrevista a la familia', t: "Pregunta a algú gran de casa:|Pregunta a alguien mayor de casa:",
          steps: ["Quan tenies la meva edat, hi havia mòbils? On es guardaven les fotos?|Cuando tenías mi edad, ¿había móviles? ¿Dónde se guardaban las fotos?",
            "Hi ha alguna foto teva antiga que no t'agradaria que veiés tothom?|¿Hay alguna foto tuya antigua que no te gustaría que viera todo el mundo?",
            "Què creus que hauria de pensar abans de publicar alguna cosa?|¿Qué crees que debería pensar antes de publicar algo?",
            "Apunta una idea que t'hagi agradat i porta-la a la propera classe.|Apunta una idea que te haya gustado y tráela a la próxima clase."] },
        { k: 'digTalk', ph: 'investiga', scene: 'aula', who: 'numi', mood: 'think', q: "Si esborres una foto, desapareix del tot?|Si borras una foto, ¿desaparece del todo?",
          stances: [{ t: 'Sí, del tot|Sí, del todo', ico: 'check' }, { t: 'No sempre|No siempre', ico: 'share' }, { t: 'No ho sé|No lo sé', ico: 'lupa' }],
          voices: [{ f: 'marc', t: "Una vegada vaig esborrar una foto, però un amic ja l'havia guardada al seu mòbil.|Una vez borré una foto, pero un amigo ya la había guardado en su móvil." },
            { f: 'sara', t: "Esborrar-la ajuda: menys gent la veurà. Però no ho garanteix.|Borrarla ayuda: menos gente la verá. Pero no lo garantiza." },
            { f: 'pau', t: "Per això el millor és pensar-s'ho abans de penjar-la.|Por eso lo mejor es pensárselo antes de colgarla." }],
          prompt: "Si algú ha publicat una foto teva que no t'agrada, què pots fer? Feu una llista de passos entre tots (demanar-li que la tregui, explicar-ho a un adult, denunciar-la a l'app…).|Si alguien ha publicado una foto tuya que no te gusta, ¿qué puedes hacer? Haced una lista de pasos entre todos (pedirle que la quite, contárselo a un adulto, denunciarla en la app…)." },
        { k: 'move', ph: 'pausa', secs: 30, title: 'Petjades!|¡Huellas!', t: "Camina sense moure't del lloc deixant «petjades»: 4 passes de puntetes (empremta positiva!), 4 passes de talons, 4 passes de gegant. Acaba amb un salt i respira fondo.|Camina sin moverte del sitio dejando «huellas»: 4 pasos de puntillas (¡huella positiva!), 4 pasos de talones, 4 pasos de gigante. Acaba con un salto y respira hondo." },
        { k: 'digChat', ph: 'repte', q: "Al grup de la classe passa una cosa. Què fas?|En el grupo de la clase pasa algo. ¿Qué haces?",
          chat: { n: 'Classe 5è B 🦊|Clase 5º B 🦊', ava: 'grup', sub: 'Aina, Nil, Omar, Pau, Iris…', group: true },
          flow: [
            { f: 'omar', img: 'caiguda', t: "JAJAJA mireu en Pau al passadís 🤣🤣|JAJAJA mirad a Pau en el pasillo 🤣🤣" },
            { f: 'iris', t: '🤣🤣🤣' },
            { ask: "La foto fa riure alguns, però en Pau ho passarà malament. Què fas?|La foto hace reír a algunos, pero Pau lo pasará mal. ¿Qué haces?", opts: [
              { t: "No la reenvio i demano que l'esborrin|No la reenvío y pido que la borren", ico: 'heart', ok: true, fb: "Molt bé. Cada reenviament fa la petjada més gran. Tu l'has aturada.|Muy bien. Cada reenvío hace la huella más grande. Tú la has parado.", me: "Ei, això a en Pau no li farà gràcia. Esborreu-la, sisplau 🙏|Eh, a Pau esto no le hará gracia. Borradla, porfa 🙏" },
              { t: "La reenvio a un altre grup|La reenvío a otro grupo", ico: 'share', ok: false, fb: "Així arriba a més gent i en Pau ho passaria encara pitjor.|Así llega a más gente y Pau lo pasaría todavía peor." },
              { t: "Hi poso un emoji rient|Le pongo un emoji riendo", ico: 'chat', ok: false, fb: "Riure-li la gràcia anima a continuar. Ho pots aturar.|Reírle la gracia anima a continuar. Lo puedes parar." }] },
            { f: 'omar', t: "Ostres, tens raó. L'esborro. Pau, perdona 😔|Vaya, tienes razón. La borro. Pau, perdona 😔" },
            { sys: "L'Omar ha eliminat la foto.|Omar ha eliminado la foto." },
            { ask: "Algú ja l'havia guardada. Hi ha res més que pugueu fer?|Alguien ya la había guardado. ¿Hay algo más que podáis hacer?", opts: [
              { t: "Explicar-ho a la tutora perquè ajudi|Contárselo a la tutora para que ayude", ico: 'adult', ok: true, fb: "Sí: un adult pot ajudar que les còpies no circulin i que en Pau se senti acompanyat.|Sí: un adulto puede ayudar a que las copias no circulen y que Pau se sienta acompañado." },
              { t: "Res, ja està esborrada|Nada, ya está borrada", ico: 'block', ok: false, fb: "Esborrar-la ajuda, però si hi ha còpies, un adult us pot donar un cop de mà.|Borrarla ayuda, pero si hay copias, un adulto os puede echar una mano." }] }
          ] },
        { k: 'digFoot', ph: 'repte', who: 'jana', search: 'Jana Haddad', ask: 'Què fa la Jana?|¿Qué hace Jana?', q: "Ara construeix una empremta positiva amb la Jana.|Ahora construye una huella positiva con Jana.",
          moments: [
            { age: '11 anys|11 años', t: "Ha guanyat el concurs de contes de la biblioteca.|Ha ganado el concurso de cuentos de la biblioteca.", opts: [
              { t: "Comparteix el conte a la web de la biblioteca|Comparte el cuento en la web de la biblioteca", ico: 'book', ok: true, pub: true, res: "Conte guanyador del concurs de la biblioteca|Cuento ganador del concurso de la biblioteca", fb: "Una empremta de la qual estarà orgullosa sempre.|Una huella de la que estará orgullosa siempre." },
              { t: "Penja una foto del diploma amb el nom complet i l'adreça|Cuelga una foto del diploma con el nombre completo y la dirección", ico: 'camera', ok: false, pub: true, res: "Diploma amb nom complet i adreça|Diploma con nombre completo y dirección", fb: "Pot celebrar-ho sense ensenyar dades personals: millor tapar-les.|Puede celebrarlo sin enseñar datos personales: mejor taparlos." }] },
            { age: '12 anys|12 años', t: "Organitza una recollida de joguines per a una entitat del barri.|Organiza una recogida de juguetes para una entidad del barrio.", opts: [
              { t: "Fa un cartell digital amb l'escola per animar a participar|Hace un cartel digital con la escuela para animar a participar", ico: 'mega', ok: true, pub: true, res: "Campanya solidària de recollida de joguines|Campaña solidaria de recogida de juguetes", fb: "Ajudar els altres també deixa una petjada preciosa.|Ayudar a los demás también deja una huella preciosa." },
              { t: "Ho fa sense dir-ho a ningú|Lo hace sin decírselo a nadie", ico: 'mute', ok: true, pub: false, fb: "Molt generós! També pot ser bo explicar-ho perquè s'hi apunti més gent.|¡Muy generoso! También puede ser bueno contarlo para que se apunte más gente." }] },
            { age: '13 anys|13 años', t: "Una amiga ha penjat una foto ridícula de la Jana i li pregunta si la pot deixar.|Una amiga ha colgado una foto ridícula de Jana y le pregunta si la puede dejar.", opts: [
              { t: "Li demana amablement que la tregui|Le pide amablemente que la quite", ico: 'chat', ok: true, pub: false, fb: "Té dret a decidir sobre la seva imatge, i ho ha demanat bé.|Tiene derecho a decidir sobre su imagen, y lo ha pedido bien." },
              { t: "No diu res tot i que no li agrada|No dice nada aunque no le gusta", ico: 'mute', ok: false, pub: true, res: "Foto que la Jana no volia que es veiés|Foto que Jana no quería que se viera", fb: "Pots dir que no. Una bona amiga ho entendrà.|Puedes decir que no. Una buena amiga lo entenderá." }] }
          ] },
        { k: 'digMake', ph: 'crea', tpl: 'card', name: 'La meva empremta positiva|Mi huella positiva', q: "Dissenya el teu <b>pla d'empremta positiva</b>: què t'agradaria que es trobés de tu d'aquí a uns anys?|Diseña tu <b>plan de huella positiva</b>: ¿qué te gustaría que se encontrara de ti dentro de unos años?",
          crit: ['3 o 4 accions positives|3 o 4 acciones positivas', 'Un títol personal|Un título personal'], minItems: 3, maxItems: 4,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Títol|Título', req: 1, ph: 'p. ex. Les petjades que vull deixar|p. ej. Las huellas que quiero dejar', len: 40 },
            { id: 'it', to: 'items', k: 'multi', t: 'Accions per a una empremta positiva|Acciones para una huella positiva', min: 2, max: 4, opts: [
              'Compartir projectes dels quals estic orgullós/a|Compartir proyectos de los que estoy orgulloso/a', 'Escriure comentaris que animin|Escribir comentarios que animen', 'Pensar-m\'ho tres vegades abans de publicar|Pensármelo tres veces antes de publicar',
              'Preguntar abans de penjar fotos d\'altres|Preguntar antes de colgar fotos de otros', 'No escriure mai en calent|No escribir nunca en caliente', 'Ajudar algú que ho passa malament a la xarxa|Ayudar a alguien que lo pasa mal en la red', 'Aturar les fotos que fan mal: no reenviar|Parar las fotos que hacen daño: no reenviar'] },
            { id: 'ow', to: 'items', k: 'own', t: 'Una acció teva (opcional)|Una acción tuya (opcional)', max: 1, ph: 'Escriu-la amb les teves paraules|Escríbela con tus palabras' },
            ...dig5Look('win')] },
        { k: 'quiz', ph: 'tanca', q: "Què és l'empremta digital?|¿Qué es la huella digital?", opts: ["El rastre de tot el que fem i publiquem a internet|El rastro de todo lo que hacemos y publicamos en internet", 'La marca del dit a la pantalla|La marca del dedo en la pantalla', 'Una contrasenya molt forta|Una contraseña muy fuerte'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Quin és el millor moment per pensar si una cosa s'ha de publicar?|¿Cuál es el mejor momento para pensar si algo se tiene que publicar?", opts: ["Abans de publicar-la|Antes de publicarla", "Quan ja té molts m'agrada|Cuando ya tiene muchos me gusta", "D'aquí a uns anys|Dentro de unos años"], a: 0 },
        dig5Feel
      ] },

    /* ---------- d1-4 · Projecte: el meu decàleg ---------- */
    { id: 'd1-4', t: 'Projecte: el meu decàleg|Proyecto: mi decálogo', min: 45, proj: true, badge: 'decaleg',
      learn: ['Un decàleg recull deu regles clares, curtes i en positiu.|Un decálogo recoge diez reglas claras, cortas y en positivo.',
        'Contrasenyes, privadesa i empremta van juntes: cuiden qui som a la xarxa.|Contraseñas, privacidad y huella van juntas: cuidan quiénes somos en la red.',
        'Una bona regla es pot complir i diu què fer, no només què no fer.|Una buena regla se puede cumplir y dice qué hacer, no solo qué no hacer.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Repàs ràpid: què és el més important d'una contrasenya?|Repaso rápido: ¿qué es lo más importante de una contraseña?", opts: ['Que sigui llarga, barrejada i secreta|Que sea larga, mezclada y secreta', 'Que sigui curta per recordar-la|Que sea corta para recordarla', 'Que porti el meu nom|Que lleve mi nombre'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: "I abans de publicar una foto on surt un amic?|¿Y antes de publicar una foto en la que sale un amigo?", opts: ['Li pregunto si li sembla bé|Le pregunto si le parece bien', 'La penjo i ja està|La cuelgo y ya está', 'Hi poso el seu nom complet|Le pongo su nombre completo'], a: 0 },
        { k: 'digStory', ph: 'missio', scene: 'aula', who: 'both', t: "Avui sou els <b>experts en seguretat</b> de la classe. La vostra missió: escriure un <b>decàleg</b>, deu regles per navegar segurs que pugueu penjar a l'aula i ensenyar a casa.|Hoy sois los <b>expertos en seguridad</b> de la clase. Vuestra misión: escribir un <b>decálogo</b>, diez reglas para navegar seguros que podáis colgar en el aula y enseñar en casa." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Decàleg|Decálogo', t: 'Deu regles per recordar|Diez reglas para recordar', anim: 'digThinkPost',
            x: "Un <span class='hl'>decàleg</span> és una llista de deu regles importants. Ha de ser <b>curt</b> (cada regla en una línia), <b>clar</b> (que tothom l'entengui) i <b>útil</b> (que es pugui fer).|Un <span class='hl'>decálogo</span> es una lista de diez reglas importantes. Tiene que ser <b>corto</b> (cada regla en una línea), <b>claro</b> (que todo el mundo lo entienda) y <b>útil</b> (que se pueda hacer)." },
          { k: 'En positiu|En positivo', t: 'Digues què fer|Di qué hacer', anim: 'digPositive',
            x: "Les regles funcionen millor quan diuen <b>què fer</b>. «Pregunto abans de penjar fotos d'altres» s'entén i es recorda millor que «No siguis dolent».|Las reglas funcionan mejor cuando dicen <b>qué hacer</b>. «Pregunto antes de colgar fotos de otros» se entiende y se recuerda mejor que «No seas malo».",
            bad: "«No facis tonteries a internet.»|«No hagas tonterías en internet.»", good: "«Abans de publicar, em faig tres preguntes.»|«Antes de publicar, me hago tres preguntas.»" },
          { k: 'Repàs|Repaso', t: 'Les tres grans idees de la unitat|Las tres grandes ideas de la unidad', anim: 'digSettings',
            x: "<b>Claus:</b> contrasenyes llargues, diferents i secretes. <b>Privadesa:</b> les dades personals no es comparteixen i el perfil, privat. <b>Empremta:</b> pensar abans de publicar i deixar petjades positives.|<b>Llaves:</b> contraseñas largas, diferentes y secretas. <b>Privacidad:</b> los datos personales no se comparten y el perfil, privado. <b>Huella:</b> pensar antes de publicar y dejar huellas positivas." }
        ] },
        { k: 'digSort', ph: 'mans', q: "Aquestes regles, estan ben escrites o es poden millorar?|Estas reglas, ¿están bien escritas o se pueden mejorar?",
          bins: [{ t: 'Ben escrita|Bien escrita', ico: 'check', c: '#1FA463' }, { t: 'Es pot millorar|Se puede mejorar', ico: 'spark', c: '#F2B21B' }],
          items: [
            { t: "«Faig servir una frase de pas diferent per a cada compte.»|«Uso una frase de paso diferente para cada cuenta.»", ico: '✅', b: 0, ex: "Clara, curta i diu què fer.|Clara, corta y dice qué hacer." },
            { t: "«Internet és perillós.»|«Internet es peligroso.»", ico: '🤔', b: 1, ex: "No diu què fer i fa por sense ajudar. Millor: «Si alguna cosa em preocupa, ho explico».|No dice qué hacer y da miedo sin ayudar. Mejor: «Si algo me preocupa, lo cuento»." },
            { t: "«Pregunto abans de penjar fotos on surten altres.»|«Pregunto antes de colgar fotos en las que salen otros.»", ico: '✅', b: 0 },
            { t: "«No facis res dolent.»|«No hagas nada malo.»", ico: '🤔', b: 1, ex: "Massa general: què és «res dolent»?|Demasiado general: ¿qué es «nada malo»?" },
            { t: "«El meu perfil és privat i només accepto gent que conec.»|«Mi perfil es privado y solo acepto a gente que conozco.»", ico: '✅', b: 0 },
            { t: "«Mai, mai, mai de la vida facis servir el mòbil.»|«Nunca, nunca, nunca en la vida uses el móvil.»", ico: '🤔', b: 1, ex: "No es pot complir. Una bona regla és realista.|No se puede cumplir. Una buena regla es realista." }
          ] },
        { k: 'digChat', ph: 'prova', q: "Prova final de la unitat: el xat de la classe està mogut. Ajuda en cada situació.|Prueba final de la unidad: el chat de la clase está movido. Ayuda en cada situación.",
          chat: { n: 'Projecte Ciències 🔬|Proyecto Ciencias 🔬', ava: 'grup', sub: 'Leo, Sara, Marc, tu|Leo, Sara, Marc, tú', group: true },
          flow: [
            { f: 'marc', t: "Per entrar a la carpeta compartida, us passo la meva contrasenya: marc2014 😅|Para entrar en la carpeta compartida, os paso mi contraseña: marc2014 😅" },
            { ask: "Què li dius al Marc?|¿Qué le dices a Marc?", opts: [
              { t: "Que l'esborri i la canviï amb un adult, i que la profe ens pot compartir la carpeta|Que la borre y la cambie con un adulto, y que la profe nos puede compartir la carpeta", ico: 'key', ok: true, fb: "Perfecte: la contrasenya ja l'ha vist tothom, cal canviar-la. I hi ha maneres de compartir sense donar claus.|Perfecto: la contraseña ya la ha visto todo el mundo, hay que cambiarla. Y hay maneras de compartir sin dar llaves.", me: "Marc, esborra-la i canvia-la amb els teus pares! La profe ens pot compartir la carpeta 😉|¡Marc, bórrala y cámbiala con tus padres! La profe nos puede compartir la carpeta 😉" },
              { t: "Gràcies! I l'apunto per si de cas|¡Gracias! Y la apunto por si acaso", ico: 'book', ok: false, fb: "Una contrasenya no s'ha de compartir ni apuntar. A més, «marc2014» és molt fàcil d'endevinar.|Una contraseña no se tiene que compartir ni apuntar. Además, «marc2014» es muy fácil de adivinar." }] },
            { f: 'sara', t: "Feu-vos una foto amb la bata al laboratori i la penjo al meu perfil públic amb els vostres noms complets!|¡Haceos una foto con la bata en el laboratorio y la cuelgo en mi perfil público con vuestros nombres completos!" },
            { ask: "Com respons a la Sara?|¿Cómo respondes a Sara?", opts: [
              { t: "Proposar-li penjar-la a l'espai de la classe, sense cognoms, si tothom hi està d'acord|Proponerle colgarla en el espacio de la clase, sin apellidos, si todos están de acuerdo", ico: 'people', ok: true, fb: "Molt bé: el moment es comparteix, però amb permís i sense dades personals.|Muy bien: el momento se comparte, pero con permiso y sin datos personales.", me: "Millor a l'espai de la classe, sense cognoms, i si tothom hi està d'acord 👍|Mejor en el espacio de la clase, sin apellidos, y si todos están de acuerdo 👍" },
              { t: "Perfecte, posa-hi també l'escola|Perfecto, pon también la escuela", ico: 'school', ok: false, fb: "Perfil públic + noms complets + escola: massa dades a la vista de tothom.|Perfil público + nombres completos + escuela: demasiados datos a la vista de todos." }] },
            { f: 'leo', t: "Fet! Quin equip més segur 🔐😎|¡Hecho! Qué equipo más seguro 🔐😎" }
          ] },
        { k: 'digTalk', ph: 'investiga', scene: 'aula', who: 'both', q: "Si només poguéssiu tenir UNA regla, quina seria?|Si solo pudierais tener UNA regla, ¿cuál sería?",
          stances: [{ t: 'Una de contrasenyes|Una de contraseñas', ico: 'key' }, { t: 'Una de privadesa|Una de privacidad', ico: 'lock' }, { t: "Una d'empremta|Una de huella", ico: 'star' }],
          voices: [{ f: 'iris', t: "Jo triaria «si alguna cosa em preocupa, ho explico». Serveix per a tot!|Yo elegiría «si algo me preocupa, lo cuento». ¡Sirve para todo!" },
            { f: 'omar', t: "Per a mi, pensar abans de publicar. Després ja és tard.|Para mí, pensar antes de publicar. Después ya es tarde." },
            { f: 'jana', t: "La de les contrasenyes: si algú entra al teu compte, pot fer coses en nom teu.|La de las contraseñas: si alguien entra en tu cuenta, puede hacer cosas en tu nombre." }],
          prompt: "Feu una votació a mà alçada. Després, cada grup defensa la seva regla en 30 segons.|Haced una votación a mano alzada. Después, cada grupo defiende su regla en 30 segundos." },
        { k: 'move', ph: 'pausa', secs: 35, title: 'Deu regles, deu moviments|Diez reglas, diez movimientos', t: "Compta fins a deu fent un moviment diferent a cada número: 1 salt, 2 cops de mans, 3 voltes de braços, 4 sentadetes… inventa la resta!|Cuenta hasta diez haciendo un movimiento diferente en cada número: 1 salto, 2 palmadas, 3 vueltas de brazos, 4 sentadillas… ¡inventa el resto!" },
        { k: 'digMake', ph: 'crea', tpl: 'decaleg', name: 'El meu decàleg digital|Mi decálogo digital', q: "El gran projecte: crea el teu <b>decàleg digital</b>. Tria entre 8 i 10 regles (pots escriure'n de teves) i dona-li el teu estil.|El gran proyecto: crea tu <b>decálogo digital</b>. Elige entre 8 y 10 reglas (puedes escribir tuyas) y dale tu estilo.",
          crit: ['Entre 8 i 10 regles|Entre 8 y 10 reglas', 'Regles de contrasenyes, privadesa i empremta|Reglas de contraseñas, privacidad y huella', 'Almenys una regla escrita per tu|Al menos una regla escrita por ti'], minItems: 8, maxItems: 10,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Títol del decàleg|Título del decálogo', req: 1, ph: 'p. ex. El decàleg de la Laia|p. ej. El decálogo de Laia', len: 40 },
            { id: 'su', to: 'sub', k: 'pick', t: 'Per a qui és?|¿Para quién es?', opts: ['Per a la meva classe|Para mi clase', 'Per a la meva família|Para mi familia', 'Per a mi|Para mí', 'Per als més petits de l\'escola|Para los más pequeños de la escuela'] },
            { id: 'it', to: 'items', k: 'multi', t: 'Tria regles del banc|Elige reglas del banco', min: 5, max: 10, opts: [
              'Faig contrasenyes llargues amb frases de pas|Hago contraseñas largas con frases de paso', 'Cada compte, la seva contrasenya|Cada cuenta, su contraseña', 'La contrasenya és secreta (només la família)|La contraseña es secreta (solo la familia)',
              'Tanco la sessió als ordinadors compartits|Cierro la sesión en los ordenadores compartidos', 'El meu perfil és privat|Mi perfil es privado', 'No comparteixo adreça, escola ni telèfon|No comparto dirección, escuela ni teléfono',
              'Només accepto gent que conec de veritat|Solo acepto a gente que conozco de verdad', 'Pregunto abans de penjar fotos d\'altres|Pregunto antes de colgar fotos de otros', 'Abans de publicar, em faig tres preguntes|Antes de publicar, me hago tres preguntas',
              'No escric en calent: espero que passi l\'enuig|No escribo en caliente: espero a que pase el enfado', 'Deixo petjades positives: projectes i ànims|Dejo huellas positivas: proyectos y ánimos', 'No reenvio fotos que fan mal|No reenvío fotos que hacen daño',
              'Si algú em demana secrets, ho explico|Si alguien me pide secretos, lo cuento', 'Reviso la privadesa amb la família|Reviso la privacidad con la familia'] },
            { id: 'ow', to: 'items', k: 'own', t: 'Regles teves (almenys una)|Reglas tuyas (al menos una)', max: 2, ph: 'Curta, clara i en positiu|Corta, clara y en positivo', len: 70 },
            ...dig5Look('win')] },
        { k: 'unplug', ph: 'crea', ico: '✍️', title: 'El pacte de casa|El pacto de casa', t: "Ensenya el decàleg a casa (des de «Projectes» el pots mostrar al mòbil):|Enseña el decálogo en casa (desde «Proyectos» lo puedes mostrar en el móvil):",
          steps: ["Llegiu les regles junts. Expliques per què has triat cadascuna?|Leed las reglas juntos. ¿Explicas por qué has elegido cada una?",
            "Pregunta si la família hi afegiria alguna regla per a tothom de casa (també per als adults!).|Pregunta si la familia añadiría alguna regla para todos los de casa (¡también para los adultos!).",
            "Si hi esteu d'acord, copieu-lo en un paper, signeu-lo tots i pengeu-lo a prop de l'ordinador.|Si estáis de acuerdo, copiadlo en un papel, firmadlo todos y colgadlo cerca del ordenador."] },
        { k: 'quiz', ph: 'tanca', q: "Quina regla està millor escrita per a un decàleg?|¿Qué regla está mejor escrita para un decálogo?", opts: ["«Abans de publicar, em pregunto si ho ensenyaria a la família.»|«Antes de publicar, me pregunto si lo enseñaría a la familia.»", "«Ves amb compte.»|«Ten cuidado.»", "«Internet és dolent.»|«Internet es malo.»"], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Quina idea uneix contrasenyes, privadesa i empremta?|¿Qué idea une contraseñas, privacidad y huella?", opts: ["Cuidar qui som i què és nostre a la xarxa|Cuidar quiénes somos y lo que es nuestro en la red", 'No fer servir mai internet|No usar nunca internet', 'Tenir molts seguidors|Tener muchos seguidores'], a: 0 },
        dig5Feel
      ] }
  ] });
}

/* ===================== UNITAT 2 · Pensar abans de creure ===================== */
{
  const c = TECH.find(x => x.id === 'digital');
  c.units.push({ t: 'Pensar abans de creure|Pensar antes de creer', d: 'Bulos, imatges trucades i fonts|Bulos, imágenes trucadas y fuentes', color: '#F08A24', s: [

    /* ---------- d2-1 · Caçadors de bulos ---------- */
    { id: 'd2-1', t: 'Caçadors de bulos|Cazadores de bulos', min: 40, badge: 'bulo',
      learn: ['Un bulo és una informació falsa que es fa passar per veritat i s\'escampa molt de pressa.|Un bulo es una información falsa que se hace pasar por verdad y se extiende muy deprisa.',
        'Pistes d\'un bulo: sense font ni data, majúscules i !!!, presses per compartir i coses massa increïbles.|Pistas de un bulo: sin fuente ni fecha, mayúsculas y !!!, prisas por compartir y cosas demasiado increíbles.',
        'Abans de compartir: m\'aturo, miro qui ho diu, busco altres fonts, miro la data i pregunto.|Antes de compartir: me paro, miro quién lo dice, busco otras fuentes, miro la fecha y pregunto.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Recordes què és l'<b>empremta digital</b>?|¿Recuerdas qué es la <b>huella digital</b>?", opts: ["El rastre del que fem i publiquem a internet|El rastro de lo que hacemos y publicamos en internet", 'Un tipus de contrasenya|Un tipo de contraseña', 'Una foto de la mà|Una foto de la mano'], a: 0 },
        { k: 'digStory', ph: 'missio', scene: 'redaccio', who: 'both', t: "Benvinguts a la <b>redacció de Numi Notícies</b>! Cada dia ens arriben missatges, fotos i titulars. Alguns són veritat… i altres són <b>bulos</b>. Avui us convertireu en caçadors de bulos.|¡Bienvenidos a la <b>redacción de Numi Noticias</b>! Cada día nos llegan mensajes, fotos y titulares. Algunos son verdad… y otros son <b>bulos</b>. Hoy os convertiréis en cazadores de bulos." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Bulo|Bulo', t: 'Què és un bulo?|¿Qué es un bulo?', anim: 'digHoaxSpread',
            x: "Un <span class='hl'>bulo</span> és una informació <b>falsa</b> que es presenta com si fos veritat. S'escampa molt de pressa perquè cada persona que el reenvia el fa arribar a molta més gent. A vegades qui el reenvia no ho fa amb mala intenció: simplement, no l'ha comprovat.|Un <span class='hl'>bulo</span> es una información <b>falsa</b> que se presenta como si fuera verdad. Se extiende muy deprisa porque cada persona que lo reenvía lo hace llegar a mucha más gente. A veces quien lo reenvía no lo hace con mala intención: simplemente, no lo ha comprobado." },
          { k: 'Pistes|Pistas', t: 'Les pistes que deixa un bulo|Las pistas que deja un bulo', anim: 'digClues',
            x: "Moltes vegades un bulo es delata: <b>no diu qui ho explica</b> ni d'on surt, no té data, està escrit amb <b>MAJÚSCULES i !!!</b>, et demana que el comparteixis <b>ja</b>, o explica una cosa massa increïble.|Muchas veces un bulo se delata: <b>no dice quién lo cuenta</b> ni de dónde sale, no tiene fecha, está escrito con <b>MAYÚSCULAS y !!!</b>, te pide que lo compartas <b>ya</b>, o cuenta algo demasiado increíble." },
          { k: 'Emocions|Emociones', t: 'Si et remou molt, para|Si te remueve mucho, para', anim: 'digEmotion',
            x: "Els bulos sovint volen que sentis <b>por, ràbia o molta sorpresa</b>, perquè quan ens sentim així comprovem menys i compartim més. Si una notícia et fa saltar del seient, és el moment de respirar i comprovar.|Los bulos a menudo quieren que sientas <b>miedo, rabia o mucha sorpresa</b>, porque cuando nos sentimos así comprobamos menos y compartimos más. Si una noticia te hace saltar del asiento, es el momento de respirar y comprobar." },
          { k: 'El mètode|El método', t: 'Cinc passos per comprovar|Cinco pasos para comprobar', anim: 'digCheck',
            x: "1) <b>Atura't</b>. 2) <b>Qui ho diu?</b> Té nom, és un mitjà conegut o una institució? 3) <b>Ho expliquen altres fonts</b> fiables? 4) <b>De quan és?</b> Les notícies velles tornen a circular. 5) <b>Pregunta</b> a un adult o al profe. Si no ho pots comprovar, no ho comparteixis.|1) <b>Párate</b>. 2) <b>¿Quién lo dice?</b> ¿Tiene nombre, es un medio conocido o una institución? 3) <b>¿Lo cuentan otras fuentes</b> fiables? 4) <b>¿De cuándo es?</b> Las noticias viejas vuelven a circular. 5) <b>Pregunta</b> a un adulto o al profe. Si no lo puedes comprobar, no lo compartas." },
          { k: 'Calma|Calma', t: '«Cal comprovar-ho» també és una resposta|«Hay que comprobarlo» también es una respuesta', anim: 'digAskAdult',
            x: "No sempre podrem saber si una cosa és veritat o mentida al moment. Està bé dir: <b>«encara no ho sé, ho comprovaré»</b>. El que no farem és compartir-ho mentrestant.|No siempre podremos saber si algo es verdad o mentira al momento. Está bien decir: <b>«aún no lo sé, lo comprobaré»</b>. Lo que no haremos es compartirlo mientras tanto." }
        ] },
        { k: 'quiz', ph: 'descobreix', q: "Et arriba un missatge que diu «COMPARTEIX-HO ABANS QUE HO ESBORRIN!!!». Què és el primer que fas?|Te llega un mensaje que dice «¡¡¡COMPÁRTELO ANTES DE QUE LO BORREN!!!». ¿Qué es lo primero que haces?",
          opts: ["M'aturo: les presses són una pista de bulo|Me paro: las prisas son una pista de bulo", 'El comparteixo de seguida|Lo comparto enseguida', 'L\'envio a tots els grups per si de cas|Lo envío a todos los grupos por si acaso'], a: 0 },
        { k: 'digSort', ph: 'mans', q: "Pista de bulo o senyal de fiabilitat?|¿Pista de bulo o señal de fiabilidad?",
          bins: [{ t: 'Pista de bulo|Pista de bulo', ico: 'block', c: '#EF5A5A' }, { t: 'Senyal de fiabilitat|Señal de fiabilidad', ico: 'check', c: '#1FA463' }],
          items: [
            { t: 'Té el nom del mitjà, l\'autor i la data|Tiene el nombre del medio, el autor y la fecha', ico: '🗞️', b: 1 }, { t: 'Està escrit tot en MAJÚSCULES amb !!!|Está escrito todo en MAYÚSCULAS con !!!', ico: '📢', b: 0 },
            { t: '«Comparteix-ho abans que ho esborrin»|«Compártelo antes de que lo borren»', ico: '⏰', b: 0 }, { t: 'Altres mitjans expliquen el mateix|Otros medios cuentan lo mismo', ico: '🔁', b: 1 },
            { t: '«Ho diuen uns experts» (sense dir quins)|«Lo dicen unos expertos» (sin decir cuáles)', ico: '❓', b: 0 }, { t: 'Enllaça a la font original (una web oficial)|Enlaza a la fuente original (una web oficial)', ico: '🔗', b: 1 },
            { t: 'Promet una cosa increïble i molt fàcil|Promete algo increíble y muy fácil', ico: '✨', b: 0 }, { t: 'Explica qui, què, on i quan sense exagerar|Explica quién, qué, dónde y cuándo sin exagerar', ico: '📝', b: 1 }
          ] },
        { k: 'unplug', ph: 'mans', ico: '📞', title: 'El telèfon de les notícies|El teléfono de las noticias', t: "A classe, en fila (o a casa amb 4 o més persones):|En clase, en fila (o en casa con 4 o más personas):",
          steps: ["La primera persona llegeix en un paper una notícia curta inventada (3 o 4 detalls).|La primera persona lee en un papel una noticia corta inventada (3 o 4 detalles).",
            "La diu a cau d'orella a la següent, i així fins a l'última.|La dice al oído a la siguiente, y así hasta la última.",
            "L'última persona la diu en veu alta. Compareu-la amb l'original: què ha canviat?|La última persona la dice en voz alta. Comparadla con la original: ¿qué ha cambiado?",
            "Conclusió: quan una informació passa de mà en mà sense comprovar, es deforma. Per això cal anar a la <b>font</b>.|Conclusión: cuando una información pasa de mano en mano sin comprobar, se deforma. Por eso hay que ir a la <b>fuente</b>."] },
        { k: 'digFake', ph: 'prova', q: "Primers casos de la redacció! Busca pistes i dona el teu veredicte.|¡Primeros casos de la redacción! Busca pistas y da tu veredicto.",
          items: [
            { kind: 'msg', src: 'Grup «Veïns de Riubell»|Grupo «Vecinos de Riubell»', pic: 'ovni', h: "URGENT!!! Han vist un OVNI sobre el poble aquesta nit!!! Comparteix-ho abans que ho esborrin!!!|¡¡¡URGENTE!!! ¡¡¡Han visto un OVNI sobre el pueblo esta noche!!! ¡¡¡Compártelo antes de que lo borren!!!", v: 2,
              clues: ["No diu qui ho ha vist ni d'on surt la foto.|No dice quién lo ha visto ni de dónde sale la foto.", "Majúscules, !!! i «abans que ho esborrin»: vol que el comparteixis sense pensar.|Mayúsculas, !!! y «antes de que lo borren»: quiere que lo compartas sin pensar.", 'Cap mitjà de comunicació ho explica.|Ningún medio de comunicación lo cuenta.', 'La llum de la foto és massa perfecta: sembla enganxada.|La luz de la foto es demasiado perfecta: parece pegada.'],
              ex: "Té totes les pistes d'un bulo. Si de veritat hagués passat, ho explicarien els mitjans i les autoritats.|Tiene todas las pistas de un bulo. Si de verdad hubiera pasado, lo contarían los medios y las autoridades." },
            { kind: 'news', src: 'La Veu de Riubell', date: 'dimarts, 7 de maig · Redacció|martes, 7 de mayo · Redacción', pic: 'gos', h: 'Els bombers rescaten una gossa atrapada a la riba del riu|Los bomberos rescatan a una perra atrapada en la orilla del río', sub: "La gossa, que es diu Lluna, ja és a casa. La seva família ha agraït l'ajuda als veïns que van avisar.|La perra, que se llama Luna, ya está en casa. Su familia ha agradecido la ayuda a los vecinos que avisaron.", v: 0,
              clues: ['Té el nom del mitjà, la data i qui l\'ha escrit.|Tiene el nombre del medio, la fecha y quién lo ha escrito.', 'Explica qui, què, on i quan, sense exagerar.|Explica quién, qué, dónde y cuándo, sin exagerar.', 'Altres mitjans locals expliquen el mateix.|Otros medios locales cuentan lo mismo.'],
              ex: "Té les senyals d'una notícia fiable. Tot i així, és bona idea veure si altres fonts ho confirmen.|Tiene las señales de una noticia fiable. Aun así, es buena idea ver si otras fuentes lo confirman." },
            { kind: 'msg', src: 'Cadena reenviada|Cadena reenviada', pic: 'xoco', h: "Uns científics diuen que menjar tres rajoles de xocolata al dia et fa créixer moltíssim en un mes!!|¡¡Unos científicos dicen que comer tres tabletas de chocolate al día te hace crecer muchísimo en un mes!!", v: 2,
              clues: ['Quins científics? No en diu cap nom.|¿Qué científicos? No dice ningún nombre.', 'Massa bonic per ser veritat: fàcil, ràpid i sense esforç.|Demasiado bonito para ser verdad: fácil, rápido y sin esfuerzo.', 'Els consells de salut, millor de metges i fonts sanitàries oficials.|Los consejos de salud, mejor de médicos y fuentes sanitarias oficiales.'],
              ex: "És un bulo de salut. Davant de consells de salut, pregunta sempre a un professional.|Es un bulo de salud. Ante consejos de salud, pregunta siempre a un profesional." },
            { kind: 'post', who: 'leo', src: 'Leo_11', date: 'fa 2 h|hace 2 h', pic: 'robot', h: 'Diuen que la setmana que ve un robot farà de profe de mates a la nostra escola!|¡Dicen que la semana que viene un robot hará de profe de mates en nuestra escuela!', v: 1,
              clues: ['Només ho diu una persona, i no explica com ho sap.|Solo lo dice una persona, y no explica cómo lo sabe.', 'No és impossible: hi ha robots educatius. Però encara no ho sabem.|No es imposible: hay robots educativos. Pero aún no lo sabemos.', "Es pot preguntar a l'escola o mirar-ne la web.|Se puede preguntar a la escuela o mirar su web."],
              ex: "No tenim prou informació per dir si és veritat o mentida. La resposta bona és: cal comprovar-ho!|No tenemos suficiente información para decir si es verdad o mentira. La respuesta buena es: ¡hay que comprobarlo!" }
          ] },
        { k: 'digChat', ph: 'investiga', q: "Al grup de la família, l'avi reenvia un missatge. Què fas?|En el grupo de la familia, el abuelo reenvía un mensaje. ¿Qué haces?",
          chat: { n: 'Família 🏡|Familia 🏡', ava: 'grup', sub: 'Mare, Avi, tu|Madre, Abuelo, tú', group: true },
          flow: [
            { f: 'avi', fwd: 1, t: "ATENCIÓ!!! Demà NO hi ha escola enlloc per la calor!! Ho diu el Departament!! Passeu-ho a tothom!!!|¡¡¡ATENCIÓN!!! ¡¡Mañana NO hay cole en ningún sitio por el calor!! ¡¡Lo dice el Departamento!! ¡¡¡Pasadlo a todo el mundo!!!" },
            { f: 'mare', t: 'De debò? 😮|¿En serio? 😮' },
            { ask: "Què fas?|¿Qué haces?", opts: [
              { t: "Miro la web de l'escola i ho explico a l'avi amb carinyo|Miro la web de la escuela y se lo explico al abuelo con cariño", ico: 'lupa', ok: true, fb: "Perfecte: has anat a la font oficial i ho has dit amb respecte.|Perfecto: has ido a la fuente oficial y lo has dicho con respeto.", me: "Avi, ho he mirat a la web de l'escola i no en diu res. Crec que és un bulo 😊|Abuelo, lo he mirado en la web del cole y no dice nada. Creo que es un bulo 😊" },
              { t: "El reenvio al grup de la classe|Lo reenvío al grupo de la clase", ico: 'share', ok: false, fb: "Si és un bulo, l'estaries escampant. Primer, comprova-ho a la font oficial.|Si es un bulo, lo estarías extendiendo. Primero, compruébalo en la fuente oficial." },
              { t: "Li dic a l'avi que és un ignorant|Le digo al abuelo que es un ignorante", ico: 'block', ok: false, fb: "Tothom es pot equivocar. Es pot corregir amb respecte i ajudant.|Todo el mundo se puede equivocar. Se puede corregir con respeto y ayudando." }] },
            { f: 'avi', t: "Ostres, gràcies! No ho havia mirat. Ja no ho reenvio més 👍|¡Vaya, gracias! No lo había mirado. Ya no lo reenvío más 👍" },
            { f: 'mare', t: "Bona feina, detectiu! 🔎|¡Buen trabajo, detective! 🔎" }
          ] },
        { k: 'digTalk', ph: 'investiga', scene: 'redaccio', who: 'numi', mood: 'think', q: "Si un amic comparteix un bulo, li ho dius?|Si un amigo comparte un bulo, ¿se lo dices?",
          stances: [{ t: 'Sí, en privat|Sí, en privado', ico: 'chat' }, { t: 'Sí, davant de tothom|Sí, delante de todos', ico: 'mega' }, { t: 'No, no és cosa meva|No, no es cosa mía', ico: 'mute' }],
          voices: [{ f: 'iris', t: "Jo li ho diria en privat. Si ho fas davant de tothom, potser li fa vergonya.|Yo se lo diría en privado. Si lo haces delante de todos, quizá le da vergüenza." },
            { f: 'omar', t: "Si el bulo pot fer mal a algú, potser també cal dir-ho al grup perquè ningú no se'l cregui.|Si el bulo puede hacer daño a alguien, quizá también hay que decirlo al grupo para que nadie se lo crea." },
            { f: 'sara', t: "Jo ensenyaria on ho he comprovat. Així no és la meva opinió contra la seva.|Yo enseñaría dónde lo he comprobado. Así no es mi opinión contra la suya." }],
          prompt: "Escriviu entre tots un missatge amable per avisar un amic que ha compartit un bulo. Què hi ha de dir? Com ho podem dir sense que se senti malament?|Escribid entre todos un mensaje amable para avisar a un amigo que ha compartido un bulo. ¿Qué tiene que decir? ¿Cómo lo podemos decir sin que se sienta mal?" },
        { k: 'move', ph: 'pausa', secs: 30, title: 'Detectius en moviment|Detectives en movimiento', t: "Fes de detectiu: lupa a l'ull dret i mira a l'esquerra, a la dreta, amunt i avall. Ara camina de puntetes com si seguissis una pista. Atura't de cop (pas 1: atura't!) i respira tres vegades.|Haz de detective: lupa en el ojo derecho y mira a la izquierda, a la derecha, arriba y abajo. Ahora camina de puntillas como si siguieras una pista. Párate de golpe (paso 1: ¡párate!) y respira tres veces." },
        { k: 'digFake', ph: 'repte', q: "Nous casos més difícils. Recorda: «cal comprovar-ho» també és una resposta.|Nuevos casos más difíciles. Recuerda: «hay que comprobarlo» también es una respuesta.",
          items: [
            { kind: 'msg', src: 'Número desconegut|Número desconocido', pic: 'premi', h: "Felicitats!! Has guanyat una consola. Entra a regals-gratis.exemple i posa-hi les teves dades per rebre-la!!|¡¡Felicidades!! Has ganado una consola. ¡¡Entra en regalos-gratis.ejemplo y pon tus datos para recibirla!!", v: 2,
              clues: ['No has participat en cap sorteig.|No has participado en ningún sorteo.', 'Et demana dades personals per «enviar-te el premi».|Te pide datos personales para «enviarte el premio».', "L'adreça web és estranya i ve d'un número desconegut.|La dirección web es extraña y viene de un número desconocido."],
              ex: "És un bulo i, a més, un intent d'estafa per aconseguir dades. No hi facis clic i ensenya-ho a un adult.|Es un bulo y, además, un intento de estafa para conseguir datos. No hagas clic y enséñaselo a un adulto." },
            { kind: 'news', src: 'Ràdio Riubell|Radio Riubell', date: 'divendres, 3 d\'octubre|viernes, 3 de octubre', pic: 'pont', h: "S'inaugura la nova passarel·la per a vianants sobre el riu|Se inaugura la nueva pasarela para peatones sobre el río", sub: "L'Ajuntament explica a la seva web l'horari i com arribar-hi a peu o en bici.|El Ayuntamiento explica en su web el horario y cómo llegar a pie o en bici.", v: 0,
              clues: ['Mitjà amb nom i data.|Medio con nombre y fecha.', "Remet a una font oficial: la web de l'Ajuntament.|Remite a una fuente oficial: la web del Ayuntamiento.", 'No hi ha exageracions ni presses.|No hay exageraciones ni prisas.'],
              ex: "Té senyals de fiabilitat i una font oficial que ho confirma.|Tiene señales de fiabilidad y una fuente oficial que lo confirma." },
            { kind: 'post', who: 'desc', src: '@viatges_increibles', date: 'fa 5 min|hace 5 min', pic: 'platja', h: 'Increïble!!! Ha nevat a la platja en ple agost ❄️🏖️|¡¡¡Increíble!!! Ha nevado en la playa en pleno agosto ❄️🏖️', v: 2,
              clues: ["Neu sobre una palmera, a l'estiu: molt estrany.|Nieve sobre una palmera, en verano: muy raro.", 'És un compte de «coses increïbles» sense cap font.|Es una cuenta de «cosas increíbles» sin ninguna fuente.', 'Cap servei meteorològic ho ha explicat.|Ningún servicio meteorológico lo ha contado.'],
              ex: "És una imatge retocada o feta amb IA. Ho treballarem a la propera sessió!|Es una imagen retocada o hecha con IA. ¡Lo trabajaremos en la próxima sesión!" }
          ] },
        { k: 'quiz', ph: 'repte', q: "Una notícia et fa enfadar moltíssim. Què et diu això?|Una noticia te hace enfadar muchísimo. ¿Qué te dice esto?",
          opts: ["Que és un bon moment per aturar-me i comprovar-la|Que es un buen momento para pararme y comprobarla", 'Que segur que és veritat|Que seguro que es verdad', 'Que l\'he de compartir ràpid|Que la tengo que compartir rápido'], a: 0,
          ex: "Les emocions fortes ens fan comprovar menys. Per això els bulos les busquen.|Las emociones fuertes nos hacen comprobar menos. Por eso los bulos las buscan." },
        { k: 'digMake', ph: 'crea', tpl: 'card', name: 'El meu detector de bulos|Mi detector de bulos', q: "Dissenya el teu <b>detector de bulos</b>: la targeta amb els passos que faràs abans de compartir res.|Diseña tu <b>detector de bulos</b>: la tarjeta con los pasos que harás antes de compartir nada.",
          crit: ['De 4 a 5 passos|De 4 a 5 pasos', 'Un nom per al teu detector|Un nombre para tu detector'], minItems: 4, maxItems: 5,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Nom del detector|Nombre del detector', req: 1, ph: 'p. ex. Lupa antibulos 3000|p. ej. Lupa antibulos 3000', len: 40 },
            { id: 'it', to: 'items', k: 'multi', t: 'Els passos|Los pasos', min: 3, max: 5, opts: [
              "M'aturo i respiro|Me paro y respiro", 'Miro qui ho diu|Miro quién lo dice', 'Busco si altres fonts ho expliquen|Busco si otras fuentes lo cuentan', 'Miro la data|Miro la fecha',
              'Desconfio de les MAJÚSCULES i els !!!|Desconfío de las MAYÚSCULAS y los !!!', 'Pregunto a un adult o al profe|Pregunto a un adulto o al profe', 'Si no ho puc comprovar, no ho comparteixo|Si no lo puedo comprobar, no lo comparto'] },
            ...dig5Look('think')] },
        { k: 'quiz', ph: 'tanca', q: 'Què és un bulo?|¿Qué es un bulo?', opts: ["Una informació falsa que es fa passar per veritat|Una información falsa que se hace pasar por verdad", 'Una notícia antiga|Una noticia antigua', 'Una notícia que no m\'agrada|Una noticia que no me gusta'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Si no pots comprovar si una cosa és veritat, què fas?|Si no puedes comprobar si algo es verdad, ¿qué haces?", opts: ['No la comparteixo|No la comparto', 'La comparteixo dient «no sé si és veritat»|La comparto diciendo «no sé si es verdad»', 'La comparteixo igualment|La comparto igualmente'], a: 0 },
        dig5Feel
      ] },

    /* ---------- d2-2 · Imatges que enganyen ---------- */
    { id: 'd2-2', t: 'Imatges que enganyen|Imágenes que engañan', min: 40,
      learn: ['Una foto es pot retocar: afegir, treure o canviar coses en pocs minuts.|Una foto se puede retocar: añadir, quitar o cambiar cosas en pocos minutos.',
        "Retallar una foto pot canviar la història que explica.|Recortar una foto puede cambiar la historia que cuenta.",
        "Hi ha imatges fetes amb IA que semblen fotos però no han passat mai: cal mirar d'on surten.|Hay imágenes hechas con IA que parecen fotos pero no han pasado nunca: hay que mirar de dónde salen."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Quin és el <b>primer</b> pas per caçar un bulo?|¿Cuál es el <b>primer</b> paso para cazar un bulo?", opts: ["Aturar-me|Pararme", 'Compartir-lo per saber què en pensen|Compartirlo para saber qué opinan', 'Respondre en majúscules|Responder en mayúsculas'], a: 0 },
        { k: 'digStory', ph: 'missio', scene: 'redaccio', who: 'both', t: "A la redacció ens ha arribat una foto d'una <b>balena al riu</b> de Riubell. Hi ha gent que diu «una foto no menteix». És veritat? Avui aprendrem a llegir les imatges com un detectiu.|A la redacción nos ha llegado una foto de una <b>ballena en el río</b> de Riubell. Hay gente que dice «una foto no miente». ¿Es verdad? Hoy aprenderemos a leer las imágenes como un detective." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Retoc|Retoque', t: 'Una foto es pot canviar|Una foto se puede cambiar', anim: 'digEdit',
            x: "Amb una app de retoc es pot <b>afegir</b> una cosa que no hi era, <b>treure'n</b> una altra o <b>canviar</b> colors i mides. Molts retocs són per divertir-se i es nota. El problema és quan es fan servir per <b>enganyar</b>.|Con una app de retoque se puede <b>añadir</b> algo que no estaba, <b>quitar</b> otra cosa o <b>cambiar</b> colores y tamaños. Muchos retoques son para divertirse y se nota. El problema es cuando se usan para <b>engañar</b>." },
          { k: 'Retall|Recorte', t: 'El que queda fora|Lo que queda fuera', anim: 'digCrop',
            x: "Si retalles una foto, pots fer que expliqui una història diferent. Un toll petit, ben retallat, pot semblar una inundació. Pregunta't: <b>què hi devia haver fora del marc?</b>|Si recortas una foto, puedes hacer que cuente una historia diferente. Un charco pequeño, bien recortado, puede parecer una inundación. Pregúntate: <b>¿qué habría fuera del marco?</b>" },
          { k: 'IA|IA', t: 'Imatges que no han passat mai|Imágenes que no han pasado nunca', anim: 'digAIImg',
            x: "Ara també hi ha programes d'<b>intel·ligència artificial</b> que fan imatges a partir d'una frase. Poden semblar fotos de veritat, però el que mostren <b>no ha passat mai</b>. Algunes webs les marquen amb «Feta amb IA»; moltes, no.|Ahora también hay programas de <b>inteligencia artificial</b> que hacen imágenes a partir de una frase. Pueden parecer fotos de verdad, pero lo que muestran <b>no ha pasado nunca</b>. Algunas webs las marcan con «Hecha con IA»; muchas, no." },
          { k: 'Detectiu|Detective', t: 'Com s\'investiga una imatge|Cómo se investiga una imagen', anim: 'digCheck',
            x: "Mira els detalls: <b>ombres</b> que no quadren, <b>mides</b> estranyes, vores borroses, coses fora de lloc. I sobretot, busca <b>d'on surt</b>: amb un adult podeu fer una «cerca per imatge» per veure on es va publicar primer.|Mira los detalles: <b>sombras</b> que no cuadran, <b>tamaños</b> raros, bordes borrosos, cosas fuera de lugar. Y sobre todo, busca <b>de dónde sale</b>: con un adulto podéis hacer una «búsqueda por imagen» para ver dónde se publicó primero.",
            tip: "Una imatge no és una prova si no saps qui l'ha feta, quan i on.|Una imagen no es una prueba si no sabes quién la ha hecho, cuándo y dónde." }
        ] },
        { k: 'digPhoto', ph: 'mans', pic: 'riu', q: "La foto de la balena! A la dreta, la que circula; a l'esquerra, l'original. <b>Toca els 3 canvis</b> a la retocada.|¡La foto de la ballena! A la derecha, la que circula; a la izquierda, la original. <b>Toca los 3 cambios</b> en la retocada.",
          diffs: [{ x: 62, y: 100, r: 14, t: "La cua de balena! Enganxada al riu.|¡La cola de ballena! Pegada en el río." }, { x: 196, y: 74, r: 18, t: "Una palmera on abans no n'hi havia.|Una palmera donde antes no había ninguna." }, { x: 168, y: 44, r: 30, t: "Un arc de Sant Martí afegit.|Un arcoíris añadido." }],
          ex: "Tres retocs en una sola foto. Sense l'original, molta gent s'ho hauria cregut.|Tres retoques en una sola foto. Sin la original, mucha gente se lo habría creído." },
        { k: 'digPhoto', ph: 'prova', mode: 'crop', pic: 'carrer', crop: '96 110 48 30', q: "Aquesta foto circula amb el missatge «El carrer Major, completament inundat!». Què en penses?|Esta foto circula con el mensaje «¡La calle Mayor, completamente inundada!». ¿Qué opinas?",
          opts: ["És veritat: hi ha aigua i fins i tot un vaixell|Es verdad: hay agua y hasta un barco", 'No ho podem saber només amb aquest tros|No lo podemos saber solo con este trozo', 'És el mar|Es el mar'], a: 1,
          ex: "Era un toll petit amb un vaixell de paper i un nen amb botes! Retallar la foto canviava tota la història.|¡Era un charco pequeño con un barco de papel y un niño con botas! Recortar la foto cambiaba toda la historia." },
        { k: 'digPhoto', ph: 'investiga', mode: 'crop', pic: 'ombra', crop: '24 8 128 80', q: "«Un monstre a l'habitació d'una nena!» diu el missatge que acompanya aquesta foto. I tu, què hi veus?|«¡Un monstruo en la habitación de una niña!» dice el mensaje que acompaña esta foto. Y tú, ¿qué ves?",
          opts: ["Un monstre de veritat|Un monstruo de verdad", "Una ombra: cal veure la foto sencera|Una sombra: hay que ver la foto entera", 'Un fantasma|Un fantasma'], a: 1,
          ex: "Era l'ombra d'un gat davant d'un llum. Les ombres poden fer formes enormes!|Era la sombra de un gato delante de una lámpara. ¡Las sombras pueden hacer formas enormes!" },
        { k: 'unplug', ph: 'mans', ico: '🖼️', title: 'La finestra que enganya|La ventana que engaña', t: "Necessites un full, tisores i una revista o un llibre amb fotos:|Necesitas una hoja, tijeras y una revista o un libro con fotos:",
          steps: ["Retalla un forat quadrat al mig del full: serà la teva «finestra».|Recorta un agujero cuadrado en el centro de la hoja: será tu «ventana».",
            "Posa la finestra damunt d'una foto de manera que només es vegi un tros.|Pon la ventana encima de una foto de manera que solo se vea un trozo.",
            "Inventa un titular que sembli veritat només amb aquell tros. Que l'altra persona endevini què hi ha a la foto sencera.|Inventa un titular que parezca verdad solo con ese trozo. Que la otra persona adivine qué hay en la foto entera.",
            "Traieu la finestra. Quina història explicava el tros? I la foto sencera?|Quitad la ventana. ¿Qué historia contaba el trozo? ¿Y la foto entera?"] },
        { k: 'digTalk', ph: 'investiga', pic: 'selfie', q: "Posar un filtre a una foto, és mentir?|Poner un filtro a una foto, ¿es mentir?",
          stances: [{ t: 'Sí, sempre|Sí, siempre', ico: 'block' }, { t: 'No, mai|No, nunca', ico: 'check' }, { t: 'Depèn per a què|Depende de para qué', ico: 'lupa' }],
          voices: [{ f: 'iris', t: "Si poso orelles de gat, tothom sap que és broma. No enganyo ningú.|Si pongo orejas de gato, todo el mundo sabe que es broma. No engaño a nadie." },
            { f: 'marc', t: "Però si una botiga retoca una foto perquè el producte sembli millor, això sí que enganya.|Pero si una tienda retoca una foto para que el producto parezca mejor, eso sí que engaña." },
            { f: 'jana', t: "A mi em preocupen els filtres que canvien la cara. Després comparem la nostra cara de veritat amb fotos que no són reals.|A mí me preocupan los filtros que cambian la cara. Después comparamos nuestra cara de verdad con fotos que no son reales." }],
          prompt: "Feu dues columnes a la pissarra: retocs per divertir-se (i que es noten) i retocs per enganyar. Quins exemples hi posaríeu?|Haced dos columnas en la pizarra: retoques para divertirse (y que se notan) y retoques para engañar. ¿Qué ejemplos pondríais?" },
        { k: 'move', ph: 'pausa', secs: 30, title: 'Zoom endavant, zoom enrere|Zoom adelante, zoom atrás', t: "Fes una finestra amb les mans davant dels ulls. Apropa-la a la cara (zoom: veus molt!) i allunya-la (veus poc!). Ara mira per la finestra un racó de la classe i després abaixa les mans: què hi havia fora?|Haz una ventana con las manos delante de los ojos. Acércala a la cara (zoom: ¡ves mucho!) y aléjala (¡ves poco!). Ahora mira por la ventana un rincón de la clase y después baja las manos: ¿qué había fuera?" },
        { k: 'digPhoto', ph: 'repte', pic: 'pati', q: "Repte: aquesta foto del pati té <b>3 retocs</b>. Troba'ls!|Reto: esta foto del patio tiene <b>3 retoques</b>. ¡Encuéntralos!",
          diffs: [{ x: 198, y: 38, r: 20, t: "Un dinosaure darrere de l'escola!|¡Un dinosaurio detrás de la escuela!" }, { x: 54, y: 120, r: 18, t: "Un ninot de neu… en un dia de sol!|¡Un muñeco de nieve… en un día de sol!" }, { x: 34, y: 22, r: 14, t: "El sol porta ulleres de sol 😎|El sol lleva gafas de sol 😎" }],
          ex: "Aquests retocs són divertits i es noten. Però imagina'n un de petit que no es notés: per això cal saber d'on surt una foto.|Estos retoques son divertidos y se notan. Pero imagina uno pequeño que no se notara: por eso hay que saber de dónde sale una foto." },
        { k: 'digSort', ph: 'repte', q: "Retoc per divertir (i es nota) o retoc per enganyar?|¿Retoque para divertir (y se nota) o retoque para engañar?",
          bins: [{ t: 'Per divertir|Para divertir', ico: 'star', c: '#1FA463' }, { t: 'Per enganyar|Para engañar', ico: 'block', c: '#EF5A5A' }],
          items: [
            { t: 'Posar-te orelles de conill en un vídeo|Ponerte orejas de conejo en un vídeo', ico: '🐰', b: 0 }, { t: 'Enganxar un tauró en una foto del port i dir que és real|Pegar un tiburón en una foto del puerto y decir que es real', ico: '🦈', b: 1 },
            { t: 'Un anunci que fa el producte més gran del que és|Un anuncio que hace el producto más grande de lo que es', ico: '📦', b: 1 }, { t: 'Un muntatge on surts amb un dinosaure, amb el títol «muntatge»|Un montaje en el que sales con un dinosaurio, con el título «montaje»', ico: '🦖', b: 0 },
            { t: "Retallar una foto perquè sembli que algú està sol/a i trist/a|Recortar una foto para que parezca que alguien está solo/a y triste", ico: '✂️', b: 1 }, { t: 'Un dibuix fet amb IA marcat «Fet amb IA»|Un dibujo hecho con IA marcado «Hecho con IA»', ico: '🤖', b: 0 }
          ] },
        { k: 'digFake', ph: 'repte', q: "Últim cas d'imatges: hi ha prou pistes?|Último caso de imágenes: ¿hay suficientes pistas?",
          items: [{ kind: 'post', who: 'desc', src: '@noticies_virals|@noticias_virales', date: 'fa 1 h|hace 1 h', pic: 'riu', h: "Una balena perduda al riu de Riubell! (foto real)|¡Una ballena perdida en el río de Riubell! (foto real)", v: 2,
            clues: ["Ja hem vist l'original d'aquesta foto: no hi havia cap balena.|Ya hemos visto la original de esta foto: no había ninguna ballena.", "Diu «foto real», però no diu qui la va fer.|Dice «foto real», pero no dice quién la hizo.", 'Un compte de «notícies virals» sense nom ni mitjà.|Una cuenta de «noticias virales» sin nombre ni medio.'],
            ex: "Coneixem la foto original: és un bulo fet amb un retoc.|Conocemos la foto original: es un bulo hecho con un retoque." }] },
        { k: 'digMake', ph: 'crea', tpl: 'card', name: "Guia del detectiu d'imatges|Guía del detective de imágenes", q: "Crea la <b>guia del detectiu d'imatges</b> per a la redacció.|Crea la <b>guía del detective de imágenes</b> para la redacción.",
          crit: ['De 3 a 5 preguntes|De 3 a 5 preguntas'], minItems: 3, maxItems: 5,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Títol|Título', req: 1, ph: "p. ex. Ulls de detectiu|p. ej. Ojos de detective", len: 40 },
            { id: 'it', to: 'items', k: 'multi', t: "Preguntes per investigar una imatge|Preguntas para investigar una imagen", min: 3, max: 5, opts: [
              "D'on surt aquesta foto?|¿De dónde sale esta foto?", 'Qui la va fer i quan?|¿Quién la hizo y cuándo?', 'Hi ha ombres o mides estranyes?|¿Hay sombras o tamaños raros?', 'Què hi devia haver fora del marc?|¿Qué habría fuera del marco?',
              "Està marcada com a «Feta amb IA»?|¿Está marcada como «Hecha con IA»?", 'Altres fonts publiquen la mateixa imatge?|¿Otras fuentes publican la misma imagen?', 'Ho podem comprovar amb un adult?|¿Lo podemos comprobar con un adulto?'] },
            ...dig5Look('think')] },
        { k: 'quiz', ph: 'tanca', q: 'Per què retallar una foto pot enganyar?|¿Por qué recortar una foto puede engañar?', opts: ["Perquè el que queda fora pot canviar la història|Porque lo que queda fuera puede cambiar la historia", 'Perquè les fotos retallades són més petites|Porque las fotos recortadas son más pequeñas', 'No pot enganyar mai|No puede engañar nunca'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Una imatge feta amb IA…|Una imagen hecha con IA…", opts: ["Pot semblar una foto, però el que mostra no ha passat|Puede parecer una foto, pero lo que muestra no ha pasado", 'Sempre és una foto de veritat|Siempre es una foto de verdad', 'Sempre porta una etiqueta que ho diu|Siempre lleva una etiqueta que lo dice'], a: 0 },
        dig5Feel
      ] },

    /* ---------- d2-3 · Anuncis, esquers i fonts ---------- */
    { id: 'd2-3', t: 'Anuncis, esquers i fonts|Anuncios, cebos y fuentes', min: 40,
      learn: ['Un anunci vol que compris, facis clic o et quedis: busca l\'etiqueta «Publicitat» o #publi.|Un anuncio quiere que compres, hagas clic o te quedes: busca la etiqueta «Publicidad» o #publi.',
        'Un titular esquer promet molt i dona poc: és un ganxo per fer clic.|Un titular cebo promete mucho y da poco: es un gancho para hacer clic.',
        'Les fonts fiables diuen qui són, citen d\'on treuen la informació i es poden comparar.|Las fuentes fiables dicen quiénes son, citan de dónde sacan la información y se pueden comparar.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Recordes una pista per saber si una foto pot estar retocada?|¿Recuerdas una pista para saber si una foto puede estar retocada?", opts: ['Ombres o mides que no quadren|Sombras o tamaños que no cuadran', 'Que sigui en color|Que sea en color', 'Que tingui molts m\'agrada|Que tenga muchos me gusta'], a: 0 },
        { k: 'digStory', ph: 'missio', scene: 'ciutat', who: 'both', t: "Internet és ple de missatges que volen la teva atenció: anuncis, vídeos patrocinats, titulars que et fan clicar… En Bit vol aprendre a distingir <b>qui informa</b>, <b>qui ven</b> i <b>qui només vol un clic</b>.|Internet está lleno de mensajes que quieren tu atención: anuncios, vídeos patrocinados, titulares que te hacen clicar… Bit quiere aprender a distinguir <b>quién informa</b>, <b>quién vende</b> y <b>quién solo quiere un clic</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Publicitat|Publicidad', t: 'Algú paga perquè ho vegis|Alguien paga para que lo veas', anim: 'digAd',
            x: "Moltes webs i apps són gratis perquè hi ha <span class='hl'>publicitat</span>: empreses que paguen perquè vegis els seus productes. Un anunci no és dolent, però <b>vol alguna cosa</b>: que compris, que facis clic o que et quedis més estona. Busca les etiquetes «Publicitat», «Patrocinat» o «Anunci».|Muchas webs y apps son gratis porque hay <span class='hl'>publicidad</span>: empresas que pagan para que veas sus productos. Un anuncio no es malo, pero <b>quiere algo</b>: que compres, que hagas clic o que te quedes más rato. Busca las etiquetas «Publicidad», «Patrocinado» o «Anuncio»." },
          { k: 'Influencers|Influencers', t: 'Quan el vídeo també és un anunci|Cuando el vídeo también es un anuncio', anim: 'digAd',
            x: "Algunes persones que fan vídeos cobren o reben regals per parlar d'un producte. Ho haurien d'indicar amb <b>#publi</b> o «col·laboració». Quan ho veus, ja saps que és una recomanació <b>pagada</b>, no només una opinió.|Algunas personas que hacen vídeos cobran o reciben regalos por hablar de un producto. Lo deberían indicar con <b>#publi</b> o «colaboración». Cuando lo ves, ya sabes que es una recomendación <b>pagada</b>, no solo una opinión." },
          { k: 'Esquer|Cebo', t: 'Titulars que pesquen clics|Titulares que pescan clics', anim: 'digClickbait',
            x: "«No creuràs el que va passar…» Els <span class='hl'>titulars esquer</span> amaguen la informació perquè hi facis clic. Com més clics, més publicitat veus. Si el titular promet massa, desconfia: normalment el contingut és molt menys emocionant.|«No creerás lo que pasó…» Los <span class='hl'>titulares cebo</span> esconden la información para que hagas clic. Cuantos más clics, más publicidad ves. Si el titular promete demasiado, desconfía: normalmente el contenido es mucho menos emocionante." },
          { k: 'Fonts|Fuentes', t: 'Qui ho diu i com ho sap?|¿Quién lo dice y cómo lo sabe?', anim: 'digCheck',
            x: "Una <span class='hl'>font fiable</span> diu qui és (un mitjà, una institució, un expert amb nom), explica d'on treu la informació i es pot <b>comparar</b> amb altres fonts. Un compte anònim que no cita res és una font feble, encara que tingui molts seguidors.|Una <span class='hl'>fuente fiable</span> dice quién es (un medio, una institución, un experto con nombre), explica de dónde saca la información y se puede <b>comparar</b> con otras fuentes. Una cuenta anónima que no cita nada es una fuente débil, aunque tenga muchos seguidores.",
            bad: "Té molts seguidors, per tant diu la veritat.|Tiene muchos seguidores, por lo tanto dice la verdad.", good: "Diu qui és i d'on treu la informació, i altres fonts ho confirmen.|Dice quién es y de dónde saca la información, y otras fuentes lo confirman." }
        ] },
        { k: 'digSort', ph: 'mans', q: "Anunci o informació?|¿Anuncio o información?",
          bins: [{ t: 'Anunci (vol vendre)|Anuncio (quiere vender)', ico: 'mega', c: '#F2B21B' }, { t: 'Informació|Información', ico: 'book', c: '#3D7BF4' }],
          items: [
            { t: 'Un vídeo amb #publi on provem unes sabatilles|Un vídeo con #publi donde prueban unas zapatillas', ico: '👟', b: 0 }, { t: 'La previsió del temps de demà|La previsión del tiempo de mañana', ico: '⛅', b: 1 },
            { t: 'Un resultat del cercador marcat «Patrocinat»|Un resultado del buscador marcado «Patrocinado»', ico: '🔎', b: 0 }, { t: 'La web del museu explicant com es forma un volcà|La web del museo explicando cómo se forma un volcán', ico: '🌋', b: 1 },
            { t: "Un bàner que diu «Descarrega ARA la millor app!»|Un banner que dice «¡Descarga YA la mejor app!»", ico: '📲', b: 0 }, { t: "L'horari de la biblioteca a la web de l'Ajuntament|El horario de la biblioteca en la web del Ayuntamiento", ico: '📚', b: 1 }
          ] },
        { k: 'digFeed', ph: 'prova', q: "Fes un tomb per Mosaic amb ulls de detectiu. Què és cada publicació i què fas?|Date una vuelta por Mosaic con ojos de detective. ¿Qué es cada publicación y qué haces?",
          posts: [
            { f: 'sara', pic: 'premi', when: '#publi · fa 3 h|#publi · hace 3 h', t: "La millor motxilla del món!! Corre a comprar-la amb el meu codi 🎒 #publi|¡¡La mejor mochila del mundo!! Corre a comprarla con mi código 🎒 #publi",
              ask: "Què és aquesta publicació?|¿Qué es esta publicación?", opts: [
                { t: "Un anunci: ho diu #publi|Un anuncio: lo dice #publi", ico: 'mega', ok: true, act: 'skip', fb: "Exacte: és una recomanació pagada. Pot ser bona o no, però sabem que vol vendre.|Exacto: es una recomendación pagada. Puede ser buena o no, pero sabemos que quiere vender." },
                { t: "Una opinió sincera sense res a canvi|Una opinión sincera sin nada a cambio", ico: 'heart', ok: false, fb: "L'etiqueta #publi vol dir que hi ha una col·laboració o un pagament.|La etiqueta #publi quiere decir que hay una colaboración o un pago." }] },
            { f: 'desc', when: 'fa 20 min|hace 20 min', big: "No creuràs què ha trobat aquest nen al pati de l'escola… 😱😱 CLICA AQUÍ|No creerás lo que ha encontrado este niño en el patio de la escuela… 😱😱 HAZ CLIC AQUÍ", t: '',
              ask: "Què fas amb aquest titular?|¿Qué haces con este titular?", opts: [
                { t: "No hi clico: és un titular esquer|No hago clic: es un titular cebo", ico: 'block', ok: true, act: 'skip', fb: "Molt bé. Amaga la informació perquè hi cliquis. Si de debò fos important, ho explicaria clar.|Muy bien. Esconde la información para que hagas clic. Si de verdad fuera importante, lo explicaría claro." },
                { t: "Hi clico i el comparteixo|Hago clic y lo comparto", ico: 'share', ok: false, fb: "Així li dones exactament el que vol: clics i més gent mirant anuncis.|Así le das exactamente lo que quiere: clics y más gente mirando anuncios." }] },
            { f: 'marc', pic: 'dibuix', when: 'fa 1 h|hace 1 h', t: "He après a fer còmics amb un tutorial de la biblioteca municipal! Us deixo l'enllaç a la seva web 📚|¡He aprendido a hacer cómics con un tutorial de la biblioteca municipal! Os dejo el enlace a su web 📚",
              ask: "I aquesta?|¿Y esta?", opts: [
                { t: "Informació útil d'una font que es pot comprovar|Información útil de una fuente que se puede comprobar", ico: 'check', ok: true, act: 'like', fb: "Sí: diu d'on surt i enllaça a una institució pública. Un m'agrada ben merescut!|Sí: dice de dónde sale y enlaza a una institución pública. ¡Un me gusta bien merecido!" },
                { t: 'Un bulo|Un bulo', ico: 'block', ok: false, fb: "No té cap pista de bulo: explica d'on surt i es pot comprovar.|No tiene ninguna pista de bulo: explica de dónde sale y se puede comprobar." }] }
          ] },
        { k: 'digTalk', ph: 'investiga', scene: 'ciutat', who: 'bit', mood: 'think', q: "Si una youtuber que t'agrada molt recomana un producte, te'n refies?|Si una youtuber que te gusta mucho recomienda un producto, ¿te fías?",
          stances: [{ t: 'Sí, perquè la conec|Sí, porque la conozco', ico: 'heart' }, { t: 'Depèn de si és #publi|Depende de si es #publi', ico: 'lupa' }, { t: 'No, mai|No, nunca', ico: 'block' }],
          voices: [{ f: 'leo', t: "Em sembla que la conec, però en realitat només veig el que ella vol ensenyar.|Me parece que la conozco, pero en realidad solo veo lo que ella quiere enseñar." },
            { f: 'sara', t: "Si diu #publi, almenys és honesta. Però li han pagat per dir-ho.|Si dice #publi, al menos es honesta. Pero le han pagado por decirlo." },
            { f: 'pau', t: "Jo miraria opinions de gent diferent abans de demanar-ho a casa.|Yo miraría opiniones de gente diferente antes de pedirlo en casa." }],
          prompt: "Penseu en un anunci que us hagi convençut de voler alguna cosa. Quins trucs feia servir (música, colors, famosos, «només avui»)?|Pensad en un anuncio que os haya convencido de querer algo. ¿Qué trucos usaba (música, colores, famosos, «solo hoy»)?" },
        { k: 'unplug', ph: 'mans', ico: '📺', title: "Caça d'anuncis|Caza de anuncios", t: "Durant una tarda (amb la família):|Durante una tarde (con la familia):",
          steps: ["Cada vegada que vegeu un anunci (tele, vídeo, carrer, app), apunteu-lo en una llista.|Cada vez que veáis un anuncio (tele, vídeo, calle, app), apuntadlo en una lista.",
            "Al costat, escriviu què volia: que compréssiu, que féssiu clic, que us quedéssiu…|Al lado, escribid qué quería: que compraseis, que hicierais clic, que os quedaseis…",
            "Quin truc feia servir? (música enganxosa, colors, presses, famosos…)|¿Qué truco usaba? (música pegadiza, colores, prisas, famosos…)",
            "Porteu la llista a classe i compareu: qui n'ha trobat més?|Traed la lista a clase y comparad: ¿quién ha encontrado más?"] },
        { k: 'move', ph: 'pausa', secs: 30, title: 'El ganxo!|¡El gancho!', t: "Quan diguis un titular esquer en veu alta («No creuràs…!»), fes com si et pesquessin: estira't cap endavant. Quan diguis «No hi clico!», torna enrere d'un salt i creua els braços.|Cuando digas un titular cebo en voz alta («¡No creerás…!»), haz como si te pescaran: estírate hacia delante. Cuando digas «¡No hago clic!», vuelve atrás de un salto y cruza los brazos." },
        { k: 'digChat', ph: 'repte', q: "Un missatge inesperat arriba al mòbil de la família. Què fas?|Un mensaje inesperado llega al móvil de la familia. ¿Qué haces?",
          chat: { n: '+00 000 000', ava: 'desc', sub: 'número desconegut|número desconocido' },
          flow: [
            { f: 'desc', img: 'premi', t: "🎉 Ets el visitant 1.000.000! Has guanyat una tauleta. Reclama-la en 10 minuts:|🎉 ¡Eres el visitante 1.000.000! Has ganado una tablet. Reclámala en 10 minutos:" },
            { f: 'desc', link: { t: 'Reclama el teu premi ARA|Reclama tu premio YA', u: 'premis-gratis.exemple/reclama' }, t: "Només has de posar el teu nom, l'adreça i les dades de la targeta per a l'enviament.|Solo tienes que poner tu nombre, la dirección y los datos de la tarjeta para el envío." },
            { ask: "Què fas?|¿Qué haces?", opts: [
              { t: "No hi faig clic i ho ensenyo a un adult|No hago clic y se lo enseño a un adulto", ico: 'adult', ok: true, fb: "Perfecte. És un engany per robar dades (en diuen «phishing»). Un adult us ajudarà a bloquejar el número i esborrar el missatge.|Perfecto. Es un engaño para robar datos (lo llaman «phishing»). Un adulto os ayudará a bloquear el número y borrar el mensaje." },
              { t: "Hi faig clic només per mirar|Hago clic solo para mirar", ico: 'globe', ok: false, fb: "Fins i tot «només mirar» pot ser un risc. No cal entrar-hi per saber que és un engany.|Incluso «solo mirar» puede ser un riesgo. No hace falta entrar para saber que es un engaño." },
              { t: "Hi poso les dades, que és un regal|Pongo los datos, que es un regalo", ico: 'share', ok: false, fb: "Ningú regala tauletes a desconeguts. Les presses (10 minuts!) i demanar dades de la targeta són pistes clares d'estafa.|Nadie regala tablets a desconocidos. Las prisas (¡10 minutos!) y pedir los datos de la tarjeta son pistas claras de estafa." }] },
            { sys: "Han bloquejat el número i han esborrat el missatge. Engany evitat! 🛡️|Han bloqueado el número y han borrado el mensaje. ¡Engaño evitado! 🛡️" }
          ] },
        { k: 'digFake', ph: 'repte', q: "Compara fonts: la mateixa informació, tres llocs diferents. Quina et sembla fiable?|Compara fuentes: la misma información, tres sitios diferentes. ¿Cuál te parece fiable?",
          items: [
            { kind: 'news', who: 'diari', src: "Web de l'Ajuntament de Riubell|Web del Ayuntamiento de Riubell", date: 'publicat el 2 de setembre|publicado el 2 de septiembre', h: 'La biblioteca obrirà també els diumenges al matí|La biblioteca abrirá también los domingos por la mañana', sub: "Horari: de 10 a 13 h. Més informació a l'oficina d'atenció ciutadana.|Horario: de 10 a 13 h. Más información en la oficina de atención ciudadana.", v: 0,
              clues: ["És la web oficial de qui organitza el servei.|Es la web oficial de quien organiza el servicio.", 'Té data i dona detalls concrets.|Tiene fecha y da detalles concretos.'], ex: "La font oficial és la millor per a aquesta informació.|La fuente oficial es la mejor para esta información." },
            { kind: 'post', who: 'desc', src: '@riubell_secrets', date: 'fa 4 dies|hace 4 días', h: 'Diuen que tancaran la biblioteca per sempre i hi faran un aparcament 😡😡|Dicen que cerrarán la biblioteca para siempre y harán un aparcamiento 😡😡', v: 2,
              clues: ["«Diuen» qui? Compte anònim, sense font.|«Dicen» ¿quién? Cuenta anónima, sin fuente.", "Busca la ràbia (😡😡).|Busca la rabia (😡😡).", "La web oficial diu el contrari: obrirà més dies.|La web oficial dice lo contrario: abrirá más días."], ex: "La font oficial el desmenteix: és un bulo.|La fuente oficial lo desmiente: es un bulo." },
            { kind: 'msg', who: 'mare', src: 'Una mare del grup de la classe|Una madre del grupo de la clase', h: "Algú sap si la biblioteca obre els diumenges? M'ha semblat sentir-ho a la ràdio.|¿Alguien sabe si la biblioteca abre los domingos? Me ha parecido oírlo en la radio.", v: 1,
              clues: ['És una pregunta honesta, no una afirmació.|Es una pregunta honesta, no una afirmación.', 'Diu d\'on ho ha sentit, però no n\'està segura.|Dice dónde lo ha oído, pero no está segura.'], ex: "Fa bé de preguntar: es pot comprovar a la web oficial.|Hace bien en preguntar: se puede comprobar en la web oficial." }
          ] },
        { k: 'digMake', ph: 'crea', tpl: 'card', name: 'Consells per no picar|Consejos para no picar', q: "Fes una targeta de <b>consells per no picar</b> amb anuncis, esquers i enganys.|Haz una tarjeta de <b>consejos para no picar</b> con anuncios, cebos y engaños.",
          crit: ['De 3 a 5 consells|De 3 a 5 consejos'], minItems: 3, maxItems: 5,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Títol|Título', req: 1, ph: 'p. ex. A mi no em pesquen!|p. ej. ¡A mí no me pescan!', len: 40 },
            { id: 'it', to: 'items', k: 'multi', t: 'Consells|Consejos', min: 3, max: 5, opts: [
              'Busco «Publicitat», «Patrocinat» o #publi|Busco «Publicidad», «Patrocinado» o #publi', 'Si el titular promet massa, no hi clico|Si el titular promete demasiado, no hago clic', 'Ningú regala premis a desconeguts|Nadie regala premios a desconocidos',
              'Mai poso dades per «rebre un regal»|Nunca pongo datos para «recibir un regalo»', 'Comparo amb una font oficial|Comparo con una fuente oficial', 'Les presses són un truc|Las prisas son un truco', 'Davant del dubte, pregunto a un adult|Ante la duda, pregunto a un adulto'] },
            ...dig5Look('wave')] },
        { k: 'quiz', ph: 'tanca', q: "Què vol dir #publi en un vídeo?|¿Qué quiere decir #publi en un vídeo?", opts: ["Que és publicitat: hi ha un pagament o una col·laboració|Que es publicidad: hay un pago o una colaboración", 'Que és un vídeo públic|Que es un vídeo público', 'Que és una notícia|Que es una noticia'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Quina font és més fiable per saber l'horari de la piscina municipal?|¿Qué fuente es más fiable para saber el horario de la piscina municipal?", opts: ["La web de l'Ajuntament|La web del Ayuntamiento", 'Un compte anònim amb molts seguidors|Una cuenta anónima con muchos seguidores', 'Un missatge reenviat|Un mensaje reenviado'], a: 0 },
        dig5Feel
      ] },

    /* ---------- d2-4 · Projecte: la redacció verificadora ---------- */
    { id: 'd2-4', t: 'Projecte: la redacció verificadora|Proyecto: la redacción verificadora', min: 45, proj: true, badge: 'verif',
      learn: ['Verificar és comprovar una informació pas a pas abans de creure-la o compartir-la.|Verificar es comprobar una información paso a paso antes de creerla o compartirla.',
        'Una fitxa de verificació explica el cas, els passos seguits, el veredicte i un consell.|Una ficha de verificación explica el caso, los pasos seguidos, el veredicto y un consejo.',
        'Explicar un bulo amb respecte ajuda els altres a no caure-hi.|Explicar un bulo con respeto ayuda a los demás a no caer.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Quina d'aquestes és una font fiable?|¿Cuál de estas es una fuente fiable?", opts: ["La web oficial de l'escola|La web oficial de la escuela", 'Un missatge reenviat moltes vegades|Un mensaje reenviado muchas veces', 'Un compte anònim|Una cuenta anónima'], a: 0 },
        { k: 'digStory', ph: 'missio', scene: 'redaccio', who: 'both', t: "La redacció de Numi Notícies necessita <b>verificadors</b>! Cada equip investigarà un cas i en farà una <b>fitxa de verificació</b> per explicar a tothom si és veritat, mentida o si encara cal comprovar-ho.|¡La redacción de Numi Noticias necesita <b>verificadores</b>! Cada equipo investigará un caso y hará una <b>ficha de verificación</b> para explicar a todo el mundo si es verdad, mentira o si aún hay que comprobarlo." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Verificar|Verificar', t: 'Què fa un verificador?|¿Qué hace un verificador?', anim: 'digCheck',
            x: "Els <span class='hl'>verificadors</span> són periodistes que investiguen si una informació que circula és certa. Segueixen sempre els mateixos passos i <b>expliquen com ho han comprovat</b>, perquè tothom ho pugui revisar.|Los <span class='hl'>verificadores</span> son periodistas que investigan si una información que circula es cierta. Siguen siempre los mismos pasos y <b>explican cómo lo han comprobado</b>, para que todo el mundo lo pueda revisar." },
          { k: 'La fitxa|La ficha', t: 'Les parts d\'una fitxa|Las partes de una ficha', anim: 'digClues',
            x: "1) <b>El cas</b>: què diu el missatge. 2) <b>Les pistes</b> i els passos que has fet. 3) <b>El veredicte</b>: bulo, fiable o cal comprovar-ho. 4) <b>Un consell</b> perquè ningú no hi torni a caure.|1) <b>El caso</b>: qué dice el mensaje. 2) <b>Las pistas</b> y los pasos que has hecho. 3) <b>El veredicto</b>: bulo, fiable o hay que comprobarlo. 4) <b>Un consejo</b> para que nadie vuelva a caer." },
          { k: 'Amb respecte|Con respeto', t: 'Desmentir sense burlar-se|Desmentir sin burlarse', anim: 'digTone',
            x: "Qui comparteix un bulo normalment s'ho ha cregut. La fitxa no es burla de ningú: <b>explica, dona proves i ajuda</b>.|Quien comparte un bulo normalmente se lo ha creído. La ficha no se burla de nadie: <b>explica, da pruebas y ayuda</b>." }
        ] },
        { k: 'digFake', ph: 'mans', q: "Escalfament: dos casos ràpids abans del projecte.|Calentamiento: dos casos rápidos antes del proyecto.",
          items: [
            { kind: 'msg', src: 'Cadena reenviada|Cadena reenviada', h: "Si reenvies aquest missatge a 10 persones, el mòbil et funcionarà més ràpid!!|¡¡Si reenvías este mensaje a 10 personas, el móvil te funcionará más rápido!!", v: 2,
              clues: ['Un missatge no pot canviar la velocitat del mòbil.|Un mensaje no puede cambiar la velocidad del móvil.', "Només vol que el reenviïs: és una cadena.|Solo quiere que lo reenvíes: es una cadena."], ex: "Les cadenes són bulos que viuen de ser reenviats.|Las cadenas son bulos que viven de ser reenviados." },
            { kind: 'news', src: 'Ràdio Riubell|Radio Riubell', date: 'avui · 8:00|hoy · 8:00', pic: 'pont', h: "Talls de trànsit al pont vell per obres fins divendres|Cortes de tráfico en el puente viejo por obras hasta el viernes", sub: "L'Ajuntament recomana fer servir la passarel·la nova.|El Ayuntamiento recomienda usar la pasarela nueva.", v: 0,
              clues: ['Mitjà conegut, data i hora.|Medio conocido, fecha y hora.', 'Informació concreta i comprovable.|Información concreta y comprobable.'], ex: "Senyals clares de fiabilitat.|Señales claras de fiabilidad." }
          ] },
        { k: 'digPhoto', ph: 'prova', mode: 'crop', pic: 'pati', crop: '40 90 80 50', q: "Un cas per a la fitxa: aquesta foto circula amb el text «Hi ha neu al pati de l'escola en ple juny!». Què en dius?|Un caso para la ficha: esta foto circula con el texto «¡Hay nieve en el patio del cole en pleno junio!». ¿Qué dices?",
          opts: ['És veritat, es veu el ninot|Es verdad, se ve el muñeco', "Cal veure la foto sencera i saber d'on surt|Hay que ver la foto entera y saber de dónde sale", 'Totes les fotos són falses|Todas las fotos son falsas'], a: 1,
          ex: "La foto sencera té sol i ombres d'estiu… i és una foto retocada que ja coneixem!|La foto entera tiene sol y sombras de verano… ¡y es una foto retocada que ya conocemos!" },
        { k: 'digTalk', ph: 'investiga', scene: 'redaccio', who: 'both', q: "Què és pitjor: creure't un bulo o escampar-lo?|¿Qué es peor: creerte un bulo o extenderlo?",
          stances: [{ t: "Creure-se'l|Creérselo", ico: 'brain' }, { t: 'Escampar-lo|Extenderlo', ico: 'share' }, { t: 'Totes dues coses|Las dos cosas', ico: 'people' }],
          voices: [{ f: 'jana', t: "Creure-te'l li pot passar a qualsevol. Escampar-lo fa que s'ho cregui molta més gent.|Creértelo le puede pasar a cualquiera. Extenderlo hace que se lo crea mucha más gente." },
            { f: 'pau', t: "Si te'l creus, potser prens una mala decisió. Si l'escampes, també ho fan els altres.|Si te lo crees, quizá tomas una mala decisión. Si lo extiendes, también la toman los demás." },
            { f: 'iris', t: "El millor és el pas 1: aturar-se. Així no passa ni una cosa ni l'altra.|Lo mejor es el paso 1: pararse. Así no pasa ni una cosa ni la otra." }],
          prompt: "En equips: trieu el cas que verificareu al projecte i repartiu-vos les feines (qui busca la font, qui mira la data, qui escriu el consell).|En equipos: elegid el caso que verificaréis en el proyecto y repartíos las tareas (quién busca la fuente, quién mira la fecha, quién escribe el consejo)." },
        { k: 'move', ph: 'pausa', secs: 30, title: 'Notícia en directe|Noticia en directo', t: "Fes de presentador/a de notícies: posa't dret/a, agafa un micròfon imaginari i digues amb veu de ràdio: «Bon dia, aquí Numi Notícies!». Ara fes de càmera: gira a poc a poc a dreta i esquerra.|Haz de presentador/a de noticias: ponte de pie, coge un micrófono imaginario y di con voz de radio: «¡Buenos días, aquí Numi Noticias!». Ahora haz de cámara: gira despacio a derecha e izquierda." },
        { k: 'digMake', ph: 'crea', tpl: 'verifica', name: 'La meva fitxa de verificació|Mi ficha de verificación', q: "El projecte: crea una <b>fitxa de verificació</b> d'un dels casos per publicar-la al «diari» de la classe.|El proyecto: crea una <b>ficha de verificación</b> de uno de los casos para publicarla en el «periódico» de la clase.",
          crit: ['El cas, almenys 3 passos i el veredicte|El caso, al menos 3 pasos y el veredicto', 'Un consell escrit per tu|Un consejo escrito por ti'], minItems: 4,
          fixed: { sub: 'Numi Notícies · Fitxa de verificació|Numi Noticias · Ficha de verificación' },
          parts: [
            { id: 'ca', to: 'title', k: 'pick', t: 'El cas que has investigat|El caso que has investigado', opts: ["«Un OVNI sobre el poble!»|«¡Un OVNI sobre el pueblo!»", "«Tres rajoles de xocolata al dia et fan créixer»|«Tres tabletas de chocolate al día te hacen crecer»", "«Una balena al riu de Riubell»|«Una ballena en el río de Riubell»", "«Neu al pati de l'escola al juny»|«Nieve en el patio del cole en junio»", "«Un robot farà de profe de mates»|«Un robot hará de profe de mates»"] },
            { id: 'pa', to: 'items', k: 'multi', t: "Passos que has fet|Pasos que has hecho", min: 3, max: 5, opts: [
              "M'he aturat abans de compartir|Me he parado antes de compartir", 'He mirat qui ho diu|He mirado quién lo dice', 'He buscat altres fonts|He buscado otras fuentes', 'He mirat la data|He mirado la fecha',
              "He trobat la foto original|He encontrado la foto original", "He vist la foto sencera|He visto la foto entera", 'He preguntat a un adult|He preguntado a un adulto'] },
            { id: 've', to: 'verdict', k: 'pick', t: 'Veredicte|Veredicto', opts: ['🚫 BULO|🚫 BULO', '✅ FIABLE|✅ FIABLE', '🔎 CAL COMPROVAR-HO|🔎 HAY QUE COMPROBARLO'] },
            { id: 'co', to: 'items', k: 'own', t: 'El teu consell per als lectors|Tu consejo para los lectores', max: 1, ph: "p. ex. Abans de reenviar, busca la font!|p. ej. Antes de reenviar, ¡busca la fuente!", len: 80 },
            ...dig5Look('think')] },
        { k: 'unplug', ph: 'crea', ico: '🎙️', title: 'Numi Notícies, en directe|Numi Noticias, en directo', t: "Presenteu les fitxes com si fos un informatiu:|Presentad las fichas como si fuera un informativo:",
          steps: ["Cada equip té un minut per explicar el cas, els passos i el veredicte.|Cada equipo tiene un minuto para explicar el caso, los pasos y el veredicto.",
            "La resta de la classe pot fer una pregunta: «Com ho heu comprovat?»|El resto de la clase puede hacer una pregunta: «¿Cómo lo habéis comprobado?»",
            "Pengeu les fitxes en un mural: el «diari verificat» de la classe.|Colgad las fichas en un mural: el «periódico verificado» de la clase."] },
        { k: 'quiz', ph: 'tanca', q: "Què ha de tenir una bona fitxa de verificació?|¿Qué tiene que tener una buena ficha de verificación?", opts: ["El cas, els passos, el veredicte i un consell|El caso, los pasos, el veredicto y un consejo", 'Només la paraula BULO en gran|Solo la palabra BULO en grande', "El nom de qui l'ha compartit, per riure'ns-en|El nombre de quien lo ha compartido, para reírnos"], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Per què expliquem COM hem comprovat una informació?|¿Por qué explicamos CÓMO hemos comprobado una información?", opts: ["Perquè els altres ho puguin revisar i aprendre a fer-ho|Para que los demás lo puedan revisar y aprender a hacerlo", 'Perquè quedi més llarg|Para que quede más largo', 'No cal explicar-ho|No hace falta explicarlo'], a: 0 },
        dig5Feel
      ] }
  ] });
}

/* ===================== UNITAT 3 · Intel·ligència artificial ===================== */
{
  const c = TECH.find(x => x.id === 'digital');
  const PZ = [{ t: 'Pufi|Pufi', c: '#14A3B8' }, { t: 'Zic|Zic', c: '#E5489A' }];
  const RULE = "La regla: els <b>Zics</b> tenen punxes i els <b>Pufis</b> són rodons. El color no hi té res a veure.|La regla: los <b>Zics</b> tienen pinchos y los <b>Pufis</b> son redondos. El color no tiene nada que ver.";
  c.units.push({ t: 'Intel·ligència artificial|Inteligencia artificial', d: 'Què és, com aprèn i com fer-la servir amb seny|Qué es, cómo aprende y cómo usarla con cabeza', color: '#8B5CF6', s: [

    /* ---------- d3-1 · Què és la IA? ---------- */
    { id: 'd3-1', t: 'Què és la intel·ligència artificial?|¿Qué es la inteligencia artificial?', min: 40, badge: 'ia',
      learn: ["La intel·ligència artificial (IA) són programes que aprenen a partir de molts exemples.|La inteligencia artificial (IA) son programas que aprenden a partir de muchos ejemplos.",
        "Quan veu una cosa nova, la IA busca el que s'hi assembla als exemples i fa una predicció.|Cuando ve algo nuevo, la IA busca lo que se le parece en los ejemplos y hace una predicción.",
        'La IA no pensa ni sent com una persona, i es pot equivocar.|La IA no piensa ni siente como una persona, y se puede equivocar.'],
      steps: [
        { k: 'digTalk', ph: 'recorda', scene: 'lab', who: 'bit', mood: 'think', q: 'Creus que el teu mòbil pensa?|¿Crees que tu móvil piensa?',
          x: "Et proposa vídeos, et corregeix les paraules, reconeix la teva cara… Com ho fa?|Te propone vídeos, te corrige las palabras, reconoce tu cara… ¿Cómo lo hace?",
          stances: [{ t: 'Sí, pensa|Sí, piensa', ico: 'brain' }, { t: 'No, només segueix instruccions|No, solo sigue instrucciones', ico: 'book' }, { t: 'Una mica de cada|Un poco de cada', ico: 'spark' }],
          voices: [{ f: 'leo', t: "Quan escric, el mòbil endevina la paraula següent. Sembla que em llegeix la ment!|Cuando escribo, el móvil adivina la palabra siguiente. ¡Parece que me lee la mente!" },
            { f: 'sara', t: "Però a vegades s'equivoca molt. Si pensés de veritat, no s'equivocaria tant.|Pero a veces se equivoca mucho. Si pensara de verdad, no se equivocaría tanto." },
            { f: 'marc', t: "Potser ha après de com escriu molta gent i endevina el més habitual.|Quizá ha aprendido de cómo escribe mucha gente y adivina lo más habitual." }],
          prompt: "Feu una llista de coses que fa el mòbil o l'ordinador que semblen «intel·ligents». Al final de la sessió, la revisarem.|Haced una lista de cosas que hace el móvil o el ordenador que parecen «inteligentes». Al final de la sesión, la revisaremos." },
        { k: 'digStory', ph: 'missio', scene: 'lab', who: 'both', t: "Benvinguts al <b>laboratori de Numi</b>! Aquí estudiem dues criatures inventades: els <b>Pufis</b>, rodons i tous, i els <b>Zics</b>, plens de punxes. La missió: <b>ensenyar a una IA</b> a distingir-los… i descobrir com aprèn de veritat.|¡Bienvenidos al <b>laboratorio de Numi</b>! Aquí estudiamos dos criaturas inventadas: los <b>Pufis</b>, redondos y blanditos, y los <b>Zics</b>, llenos de pinchos. La misión: <b>enseñar a una IA</b> a distinguirlos… y descubrir cómo aprende de verdad." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'A tot arreu|En todas partes', t: 'On trobem IA cada dia?|¿Dónde encontramos IA cada día?', anim: 'digAIEvery',
            x: "La <span class='hl'>intel·ligència artificial</span> (IA) és a moltes coses que fem servir: traductors, assistents de veu, recomanacions de vídeos, filtres de fotos, mapes que calculen el trànsit, xatbots…|La <span class='hl'>inteligencia artificial</span> (IA) está en muchas cosas que usamos: traductores, asistentes de voz, recomendaciones de vídeos, filtros de fotos, mapas que calculan el tráfico, chatbots…" },
          { k: 'Exemples|Ejemplos', t: 'Aprèn a partir d\'exemples|Aprende a partir de ejemplos', anim: 'digAILearn',
            x: "Un programa normal segueix <b>regles</b> que algú ha escrit una per una. Una IA, en canvi, <b>aprèn d'exemples</b>: li ensenyem moltes criatures amb el seu nom («això és un Zic», «això és un Pufi») i ella busca què tenen en comú.|Un programa normal sigue <b>reglas</b> que alguien ha escrito una por una. Una IA, en cambio, <b>aprende de ejemplos</b>: le enseñamos muchas criaturas con su nombre («esto es un Zic», «esto es un Pufi») y ella busca qué tienen en común." },
          { k: 'Com decideix|Cómo decide', t: 'Busca el més semblant|Busca lo más parecido', anim: 'digAINear',
            x: "Quan li ensenyes una criatura nova, la nostra IA la col·loca al seu «mapa» i busca <b>l'exemple més semblant</b>. Si el més semblant és un Zic, dirà Zic. És una <b>predicció</b>: una aposta basada en el que ha vist.|Cuando le enseñas una criatura nueva, nuestra IA la coloca en su «mapa» y busca <b>el ejemplo más parecido</b>. Si el más parecido es un Zic, dirá Zic. Es una <b>predicción</b>: una apuesta basada en lo que ha visto." },
          { k: 'No pensa|No piensa', t: 'Sembla llesta, però no entén|Parece lista, pero no entiende', anim: 'digAIWords',
            x: "La IA no pensa ni sent com tu. No sap què és un Zic: només troba patrons en dades. Els xatbots, per exemple, trien <b>la paraula més probable</b> després de cada paraula. Per això poden escriure molt bé… i dir coses falses.|La IA no piensa ni siente como tú. No sabe qué es un Zic: solo encuentra patrones en datos. Los chatbots, por ejemplo, eligen <b>la palabra más probable</b> después de cada palabra. Por eso pueden escribir muy bien… y decir cosas falsas." },
          { k: 'Persones|Personas', t: 'Darrere de cada IA hi ha persones|Detrás de cada IA hay personas', anim: 'digAskAdult',
            x: "Són persones les que trien els exemples, decideixen per a què serveix una IA i revisen si funciona. Per això és important saber com funciona: <b>tu també pots decidir com la fas servir</b>.|Son personas las que eligen los ejemplos, deciden para qué sirve una IA y revisan si funciona. Por eso es importante saber cómo funciona: <b>tú también puedes decidir cómo la usas</b>." }
        ] },
        { k: 'quiz', ph: 'descobreix', q: "Com aprèn una IA a reconèixer gats en fotos?|¿Cómo aprende una IA a reconocer gatos en fotos?",
          opts: ['Veient moltes fotos de gats i de no-gats amb la seva etiqueta|Viendo muchas fotos de gatos y de no-gatos con su etiqueta', 'Perquè neix sabent-ho|Porque nace sabiéndolo', 'Perquè té un gat a casa|Porque tiene un gato en casa'], a: 0 },
        { k: 'digSort', ph: 'mans', q: "Aquestes màquines, aprenen d'exemples (IA) o segueixen regles fixes?|Estas máquinas, ¿aprenden de ejemplos (IA) o siguen reglas fijas?",
          bins: [{ t: "Aprèn d'exemples (IA)|Aprende de ejemplos (IA)", ico: 'brain', c: '#8B5CF6' }, { t: 'Segueix regles fixes|Sigue reglas fijas', ico: 'book', c: '#5D72C9' }],
          items: [
            { t: 'Un traductor que tradueix frases noves|Un traductor que traduce frases nuevas', ico: '🌍', b: 0 }, { t: "Un llum que s'encén amb un interruptor|Una luz que se enciende con un interruptor", ico: '💡', b: 1 },
            { t: 'Les recomanacions de vídeos|Las recomendaciones de vídeos', ico: '📺', b: 0 }, { t: 'Un despertador que sona a les 7:30|Un despertador que suena a las 7:30', ico: '⏰', b: 1 },
            { t: 'Un filtre que troba les cares a les fotos|Un filtro que encuentra las caras en las fotos', ico: '📸', b: 0 }, { t: 'Una calculadora que suma|Una calculadora que suma', ico: '🧮', b: 1, ex: "Fa sempre el mateix càlcul amb les mateixes regles: no aprèn.|Hace siempre el mismo cálculo con las mismas reglas: no aprende." },
            { t: "Un assistent que entén el que li dius en veu alta|Un asistente que entiende lo que le dices en voz alta", ico: '🗣️', b: 0 }
          ] },
        { k: 'unplug', ph: 'mans', ico: '🧠', title: 'Fes de IA|Haz de IA', t: "Per parelles, amb objectes de la motxilla (llapis, gomes, clips…):|Por parejas, con objetos de la mochila (lápices, gomas, clips…):",
          steps: ["Una persona inventa una regla secreta per fer dos grups (per exemple: «coses de metall» i «coses que no»).|Una persona inventa una regla secreta para hacer dos grupos (por ejemplo: «cosas de metal» y «cosas que no»).",
            "Va posant objectes als grups, un a un, sense dir la regla. Són els <b>exemples</b>.|Va poniendo objetos en los grupos, uno a uno, sin decir la regla. Son los <b>ejemplos</b>.",
            "L'altra persona fa d'IA: amb un objecte nou, ha d'endevinar a quin grup va.|La otra persona hace de IA: con un objeto nuevo, tiene que adivinar a qué grupo va.",
            "Quants exemples ha necessitat per encertar? S'ha equivocat amb algun? Canvieu els papers.|¿Cuántos ejemplos ha necesitado para acertar? ¿Se ha equivocado con alguno? Cambiad los papeles."] },
        { k: 'digAI', ph: 'prova', q: "Ensenya a la IA a distingir Pufis i Zics. Després, posa-la a prova amb criatures noves.|Enseña a la IA a distinguir Pufis y Zics. Después, ponla a prueba con criaturas nuevas.", labels: PZ, f: 's', rule: RULE,
          train: [{ h: 0, s: .1, z: .5 }, { h: 220, s: .15, z: .6 }, { h: 10, s: .9, z: .5 }, { h: 120, s: .2, z: .4 }, { h: 210, s: .85, z: .6 }, { h: 110, s: .95, z: .4 }, { h: 60, s: .15, z: .55 }, { h: 250, s: .9, z: .5 }],
          test: [{ h: 50, s: .1, z: .5 }, { h: 240, s: .9, z: .5 }, { h: 170, s: .2, z: .5 }, { h: 30, s: .8, z: .5 }, { h: 160, s: .55, z: .5 }, { h: 90, s: .12, z: .5 }],
          koEnd: "Fixa't en la criatura verda amb poques punxes: s'assemblava a un Pufi i la IA s'ha equivocat. Les IA fallen sobretot en els casos dubtosos.|Fíjate en la criatura verde con pocos pinchos: se parecía a un Pufi y la IA se ha equivocado. Las IA fallan sobre todo en los casos dudosos." },
        { k: 'quiz', ph: 'investiga', art: () => digCre({ h: 160, s: .55, z: .5 }, 'big'), q: "La IA s'ha equivocat amb aquesta criatura. Per què?|La IA se ha equivocado con esta criatura. ¿Por qué?",
          opts: ["Té poques punxes i el seu color s'assemblava al d'un Pufi que havia vist|Tiene pocos pinchos y su color se parecía al de un Pufi que había visto", 'Perquè la IA estava cansada|Porque la IA estaba cansada', 'Perquè la IA no la volia classificar|Porque la IA no la quería clasificar'], a: 0,
          ex: "La IA no «veu» punxes com nosaltres: compara números (color, punxes) i tria l'exemple més proper. En els casos dubtosos, s'equivoca més.|La IA no «ve» pinchos como nosotros: compara números (color, pinchos) y elige el ejemplo más cercano. En los casos dudosos, se equivoca más." },
        { k: 'digTalk', ph: 'investiga', scene: 'lab', who: 'both', q: "Llavors… una IA és intel·ligent?|Entonces… ¿una IA es inteligente?",
          stances: [{ t: 'Sí, molt|Sí, mucho', ico: 'brain' }, { t: 'És intel·ligent d\'una altra manera|Es inteligente de otra manera', ico: 'spark' }, { t: 'No, només imita|No, solo imita', ico: 'block' }],
          voices: [{ f: 'jana', t: "Pot fer coses molt difícils, com traduir. Però no sap què vol dir el que tradueix.|Puede hacer cosas muy difíciles, como traducir. Pero no sabe qué quiere decir lo que traduce." },
            { f: 'omar', t: "És com un lloro molt bo: repeteix i combina el que ha sentit.|Es como un loro muy bueno: repite y combina lo que ha oído." },
            { f: 'iris', t: "A mi em sembla una eina. Una eina molt potent, però una eina.|A mí me parece una herramienta. Una herramienta muy potente, pero una herramienta." }],
          prompt: "Torneu a la llista del principi de la classe. Quines coses de la llista són IA (aprenen d'exemples) i quines són regles fixes?|Volved a la lista del principio de la clase. ¿Qué cosas de la lista son IA (aprenden de ejemplos) y cuáles son reglas fijas?" },
        { k: 'move', ph: 'pausa', secs: 30, title: 'Pufi o Zic?|¿Pufi o Zic?', t: "Fes de criatura! Quan pensis «Pufi», fes-te rodó/ona: braços en cercle i salta suau. Quan pensis «Zic», obre braços i cames com si fossin punxes. Alterna cada vegada més ràpid!|¡Haz de criatura! Cuando pienses «Pufi», hazte redondo/a: brazos en círculo y salta suave. Cuando pienses «Zic», abre brazos y piernas como si fueran pinchos. ¡Alterna cada vez más rápido!" },
        { k: 'quiz', ph: 'repte', art: () => digCre({ h: 45, s: .9, z: .6 }, 'big'), q: "La IA ha vist molts Zics vermells i blaus amb punxes. Què creus que dirà d'aquesta criatura groga plena de punxes?|La IA ha visto muchos Zics rojos y azules con pinchos. ¿Qué crees que dirá de esta criatura amarilla llena de pinchos?",
          opts: ['Zic|Zic', 'Pufi|Pufi', 'No dirà res|No dirá nada'], a: 0, ex: "Les punxes la fan molt semblant als Zics que ha vist.|Los pinchos la hacen muy parecida a los Zics que ha visto." },
        { k: 'digSort', ph: 'repte', q: "Què pot fer una IA… i què no pot fer com una persona?|¿Qué puede hacer una IA… y qué no puede hacer como una persona?",
          bins: [{ t: 'Una IA ho pot fer|Una IA lo puede hacer', ico: 'brain', c: '#8B5CF6' }, { t: 'No com una persona|No como una persona', ico: 'heart', c: '#E5489A' }],
          items: [
            { t: "Reconèixer gats en fotos després de veure'n molts|Reconocer gatos en fotos después de ver muchos", ico: '🐱', b: 0 }, { t: 'Sentir-se trista|Sentirse triste', ico: '😢', b: 1 },
            { t: 'Traduir una frase|Traducir una frase', ico: '🌍', b: 0 }, { t: 'Saber si una cosa és veritat sense comprovar-ho|Saber si algo es verdad sin comprobarlo', ico: '❓', b: 1 },
            { t: "Equivocar-se|Equivocarse", ico: '🙃', b: 0, ex: "Sí! Una IA es pot equivocar, i a vegades molt.|¡Sí! Una IA se puede equivocar, y a veces mucho." }, { t: 'Estimar algú|Querer a alguien', ico: '💗', b: 1 },
            { t: 'Recomanar vídeos semblants als que mires|Recomendar vídeos parecidos a los que miras', ico: '📺', b: 0 }
          ] },
        { k: 'digMake', ph: 'crea', tpl: 'card', name: 'La IA explicada per mi|La IA explicada por mí', q: "Explica què és la IA a algú de casa amb una <b>targeta</b>. Tria les idees més importants.|Explica qué es la IA a alguien de casa con una <b>tarjeta</b>. Elige las ideas más importantes.",
          crit: ['De 3 a 5 idees|De 3 a 5 ideas'], minItems: 3, maxItems: 5,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Títol|Título', req: 1, ph: 'p. ex. La IA en 30 segons|p. ej. La IA en 30 segundos', len: 40 },
            { id: 'it', to: 'items', k: 'multi', t: 'Idees|Ideas', min: 3, max: 5, opts: [
              "Aprèn a partir de molts exemples|Aprende a partir de muchos ejemplos", 'Busca el que més s\'assembla al que ha vist|Busca lo que más se parece a lo que ha visto', 'Fa prediccions, no pensa|Hace predicciones, no piensa',
              'Es pot equivocar, sobretot en casos dubtosos|Se puede equivocar, sobre todo en casos dudosos', 'La trobem en traductors, mapes, xatbots…|La encontramos en traductores, mapas, chatbots…', 'Darrere hi ha persones que la fan i la revisen|Detrás hay personas que la hacen y la revisan',
              'No sent ni estima com una persona|No siente ni quiere como una persona'] },
            ...dig5Look('think')] },
        { k: 'quiz', ph: 'tanca', q: "Què és la intel·ligència artificial?|¿Qué es la inteligencia artificial?", opts: ["Programes que aprenen a partir d'exemples i fan prediccions|Programas que aprenden a partir de ejemplos y hacen predicciones", 'Robots que pensen com persones|Robots que piensan como personas', 'Una màgia dels ordinadors|Una magia de los ordenadores'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Una IA es pot equivocar?|¿Una IA se puede equivocar?", opts: ['Sí, sobretot amb casos que no s\'assemblen als exemples|Sí, sobre todo con casos que no se parecen a los ejemplos', 'No, mai|No, nunca', 'Només si està espatllada|Solo si está estropeada'], a: 0 },
        dig5Feel
      ] },

    /* ---------- d3-2 · La IA s'equivoca ---------- */
    { id: 'd3-2', t: "La IA s'equivoca|La IA se equivoca", min: 40,
      learn: ["Una IA només sap el que hi ha als seus exemples: si són pocs o massa semblants, s'equivoca (biaix).|Una IA solo sabe lo que hay en sus ejemplos: si son pocos o demasiado parecidos, se equivoca (sesgo).",
        "Amb exemples més variats, la IA aprèn millor.|Con ejemplos más variados, la IA aprende mejor.",
        "Una resposta d'IA pot sonar molt segura i ser falsa: cal comprovar-la.|Una respuesta de IA puede sonar muy segura y ser falsa: hay que comprobarla."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Com decideix la nostra IA si una criatura és un Pufi o un Zic?|¿Cómo decide nuestra IA si una criatura es un Pufi o un Zic?", opts: ["Busca l'exemple més semblant que ha vist|Busca el ejemplo más parecido que ha visto", "Ho endevina a l'atzar|Lo adivina al azar", 'Pregunta a un Zic|Pregunta a un Zic'], a: 0 },
        { k: 'digStory', ph: 'missio', scene: 'lab', who: 'both', mood: 'think', t: "Alerta al laboratori! Una IA nova diu que un Zic blau és un Pufi… i que un Pufi vermell és un Zic! Qui l'ha entrenada només li va ensenyar <b>Zics vermells i Pufis blaus</b>. Avui descobrirem per què les IA s'equivoquen… i com ajudar-les.|¡Alerta en el laboratorio! Una IA nueva dice que un Zic azul es un Pufi… ¡y que un Pufi rojo es un Zic! Quien la entrenó solo le enseñó <b>Zics rojos y Pufis azules</b>. Hoy descubriremos por qué las IA se equivocan… y cómo ayudarlas." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Biaix|Sesgo', t: 'Exemples poc variats|Ejemplos poco variados', anim: 'digAIBias',
            x: "Si tots els Zics que ha vist una IA són vermells, pot aprendre una regla equivocada: «vermell = Zic». Això es diu <span class='hl'>biaix</span>: la IA repeteix el que hi havia (o el que faltava) als exemples.|Si todos los Zics que ha visto una IA son rojos, puede aprender una regla equivocada: «rojo = Zic». Esto se llama <span class='hl'>sesgo</span>: la IA repite lo que había (o lo que faltaba) en los ejemplos." },
          { k: 'A la vida real|En la vida real', t: 'També passa amb persones|También pasa con personas', anim: 'digAINear',
            x: "Si una IA que reconeix veus només ha escoltat veus d'adults, pot entendre pitjor els nens. Si només ha vist un tipus de cares, pot fallar amb altres. Per això cal que els exemples representin <b>tota mena de gent</b>.|Si una IA que reconoce voces solo ha escuchado voces de adultos, puede entender peor a los niños. Si solo ha visto un tipo de caras, puede fallar con otras. Por eso hace falta que los ejemplos representen a <b>todo tipo de gente</b>." },
          { k: 'Massa segura|Demasiado segura', t: 'Sona segura… i és falsa|Suena segura… y es falsa', anim: 'digAIWrong',
            x: "Els xatbots escriuen frases molt ben fetes i amb molta seguretat. Però com que trien les paraules més probables, a vegades <b>s'inventen</b> dades, noms o fets. Que soni segur no vol dir que sigui cert.|Los chatbots escriben frases muy bien hechas y con mucha seguridad. Pero como eligen las palabras más probables, a veces <b>se inventan</b> datos, nombres o hechos. Que suene seguro no quiere decir que sea cierto." },
          { k: 'La solució|La solución', t: 'Més exemples, més variats|Más ejemplos, más variados', anim: 'digAILearn',
            x: "Per millorar una IA cal ensenyar-li exemples <b>variats</b>: de tots els colors, mides i casos, sobretot dels que s'equivocava. I sempre, <b>persones que revisen</b> si funciona bé per a tothom.|Para mejorar una IA hay que enseñarle ejemplos <b>variados</b>: de todos los colores, tamaños y casos, sobre todo de los que se equivocaba. Y siempre, <b>personas que revisan</b> si funciona bien para todo el mundo." }
        ] },
        { k: 'quiz', ph: 'descobreix', q: "Una IA només ha vist fotos de gossos blancs. Amb quin gos és més fàcil que s'equivoqui?|Una IA solo ha visto fotos de perros blancos. ¿Con qué perro es más fácil que se equivoque?",
          opts: ['Amb un gos negre|Con un perro negro', 'Amb un gos blanc|Con un perro blanco', 'Amb tots igual|Con todos igual'], a: 0 },
        { k: 'digAI', ph: 'prova', q: "Aquesta IA ja té exemples… però tots els Zics són vermells i tots els Pufis són blaus. Ensenya-li'ls, posa-la a prova i, si falla, <b>arregla-la</b>.|Esta IA ya tiene ejemplos… pero todos los Zics son rojos y todos los Pufis son azules. Enséñaselos, ponla a prueba y, si falla, <b>arréglala</b>.", labels: PZ, f: 's', rule: RULE, mustFix: true,
          train: [{ h: 0, s: .9, z: .5 }, { h: 200, s: .1, z: .5 }, { h: 15, s: .85, z: .5 }, { h: 215, s: .15, z: .5 }, { h: 30, s: .95, z: .5 }, { h: 230, s: .05, z: .5 }, { h: 20, s: .8, z: .5 }, { h: 240, s: .2, z: .5 }],
          test: [{ h: 215, s: .9, z: .5 }, { h: 25, s: .9, z: .5 }, { h: 10, s: .1, z: .5 }, { h: 225, s: .1, z: .5 }, { h: 120, s: .9, z: .5 }, { h: 110, s: .1, z: .5 }],
          extra: [{ h: 210, s: .85, z: .5 }, { h: 5, s: .15, z: .5 }, { h: 120, s: .9, z: .5 }, { h: 130, s: .1, z: .5 }],
          someKo: "S'ha equivocat amb el Zic blau i amb el Pufi vermell: havia après «vermell = Zic» i «blau = Pufi». Ensenya-li exemples d'altres colors!|Se ha equivocado con el Zic azul y con el Pufi rojo: había aprendido «rojo = Zic» y «azul = Pufi». ¡Enséñale ejemplos de otros colores!",
          koEnd: "Amb exemples variats, ara sí que fixa en les punxes. Has corregit el biaix!|Con ejemplos variados, ahora sí que se fija en los pinchos. ¡Has corregido el sesgo!", allOk: "Ara ho encerta tot. Has corregit el biaix amb exemples variats!|Ahora lo acierta todo. ¡Has corregido el sesgo con ejemplos variados!" },
        { k: 'quiz', ph: 'investiga', q: "Per què la IA es va equivocar amb el Zic blau?|¿Por qué la IA se equivocó con el Zic azul?",
          opts: ["Perquè tots els Zics que havia vist eren vermells i va aprendre «vermell = Zic»|Porque todos los Zics que había visto eran rojos y aprendió «rojo = Zic»", 'Perquè els Zics blaus no existeixen|Porque los Zics azules no existen', 'Perquè la IA odia el blau|Porque la IA odia el azul'], a: 0 },
        { k: 'digSort', ph: 'mans', q: "Per entrenar una IA, aquests exemples són variats o poc variats?|Para entrenar una IA, ¿estos ejemplos son variados o poco variados?",
          bins: [{ t: 'Variats: bona idea|Variados: buena idea', ico: 'check', c: '#1FA463' }, { t: 'Poc variats: biaix!|Poco variados: ¡sesgo!', ico: 'block', c: '#EF5A5A' }],
          items: [
            { t: 'Per reconèixer gossos: fotos només de gossos blancs i petits|Para reconocer perros: fotos solo de perros blancos y pequeños', ico: '🐶', b: 1 }, { t: 'Gossos de moltes races, mides i colors|Perros de muchas razas, tamaños y colores', ico: '🐕', b: 0 },
            { t: "Per entendre veus: només veus d'adults|Para entender voces: solo voces de adultos", ico: '🗣️', b: 1 }, { t: 'Veus de nens, adults i gent gran, amb accents diferents|Voces de niños, adultos y gente mayor, con acentos diferentes', ico: '🎙️', b: 0 },
            { t: 'Per reconèixer fruites: fotos de dia i de nit, senceres i tallades|Para reconocer frutas: fotos de día y de noche, enteras y cortadas', ico: '🍎', b: 0 }, { t: "Per recomanar llibres: només els llibres que llegeix una persona|Para recomendar libros: solo los libros que lee una persona", ico: '📚', b: 1 }
          ] },
        { k: 'unplug', ph: 'mans', ico: '🐦', title: 'Dibuixa un ocell|Dibuja un pájaro', t: "A classe o a casa, cadascú en un paper:|En clase o en casa, cada uno en un papel:",
          steps: ["En 30 segons, dibuixa «un ocell».|En 30 segundos, dibuja «un pájaro».", "Compareu els dibuixos: quants ocells volen? Quants són petits?|Comparad los dibujos: ¿cuántos pájaros vuelan? ¿Cuántos son pequeños?",
            "Algú ha dibuixat un pingüí, un estruç o una gallina? També són ocells!|¿Alguien ha dibujado un pingüino, un avestruz o una gallina? ¡También son pájaros!",
            "Si una IA aprengués només dels nostres dibuixos, sabria que un pingüí és un ocell? Això és un biaix.|Si una IA aprendiera solo de nuestros dibujos, ¿sabría que un pingüino es un pájaro? Eso es un sesgo."] },
        { k: 'digTalk', ph: 'investiga', scene: 'lab', who: 'numi', mood: 'think', q: "Si una IA s'equivoca i fa mal a algú, de qui és la culpa?|Si una IA se equivoca y hace daño a alguien, ¿de quién es la culpa?",
          stances: [{ t: 'De la IA|De la IA', ico: 'brain' }, { t: 'De qui la va fer|De quien la hizo', ico: 'people' }, { t: 'De qui la fa servir|De quien la usa', ico: 'user' }],
          voices: [{ f: 'pau', t: "La IA no decideix res sola: segueix el que ha après. La responsabilitat és de les persones.|La IA no decide nada sola: sigue lo que ha aprendido. La responsabilidad es de las personas." },
            { f: 'sara', t: "Qui la fa hauria de provar-la amb exemples de tota mena de gent abans de fer-la servir.|Quien la hace debería probarla con ejemplos de todo tipo de gente antes de usarla." },
            { f: 'leo', t: "I qui la fa servir ha de revisar el que diu, no creure-s'ho tot.|Y quien la usa tiene que revisar lo que dice, no creérselo todo." }],
          prompt: "Penseu un exemple on una IA amb biaix podria ser injusta (a l'escola, en una app, en una botiga…). Com ho arreglaríeu?|Pensad un ejemplo donde una IA con sesgo podría ser injusta (en la escuela, en una app, en una tienda…). ¿Cómo lo arreglaríais?" },
        { k: 'move', ph: 'pausa', secs: 30, title: 'Exemples variats|Ejemplos variados', t: "Fes 5 salts diferents: un de petit, un de gegant, un de costat, un girant i un a peu coix. Com més variats, més aprèn el cos!|Haz 5 saltos diferentes: uno pequeño, uno gigante, uno de lado, uno girando y uno a la pata coja. ¡Cuanto más variados, más aprende el cuerpo!" },
        { k: 'digChat', ph: 'repte', q: "L'Omar fa servir un xatbot per estudiar ciències. Ajuda'l a fer-lo servir bé.|Omar usa un chatbot para estudiar ciencias. Ayúdale a usarlo bien.",
          chat: { n: 'Xatbot Ajuda|Chatbot Ayuda', ava: 'bot', sub: 'assistent amb IA · exemple|asistente con IA · ejemplo' },
          flow: [
            { me: 'Quantes potes té una aranya?|¿Cuántas patas tiene una araña?' },
            { f: 'bot', t: "És clar! Les aranyes tenen <b>6 potes</b>, com tots els insectes. 🕷️|¡Claro! Las arañas tienen <b>6 patas</b>, como todos los insectos. 🕷️" },
            { ask: "Sona molt segur. Què fa l'Omar?|Suena muy seguro. ¿Qué hace Omar?", opts: [
              { t: "Ho comprova al llibre de ciències|Lo comprueba en el libro de ciencias", ico: 'book', ok: true, fb: "Molt bé! Al llibre diu que les aranyes tenen 8 potes i que no són insectes. El xatbot s'havia equivocat.|¡Muy bien! En el libro dice que las arañas tienen 8 patas y que no son insectos. El chatbot se había equivocado.", me: "Al llibre diu que en tenen 8 i que no són insectes 🤔|En el libro dice que tienen 8 y que no son insectos 🤔" },
              { t: "Ho copia als deures tal qual|Lo copia en los deberes tal cual", ico: 'share', ok: false, fb: "El xatbot s'ha equivocat: les aranyes tenen 8 potes. Comprova sempre les dades importants.|El chatbot se ha equivocado: las arañas tienen 8 patas. Comprueba siempre los datos importantes." }] },
            { f: 'bot', t: "Tens raó, disculpa: les aranyes tenen 8 potes i són aràcnids, no insectes.|Tienes razón, disculpa: las arañas tienen 8 patas y son arácnidos, no insectos." },
            { me: "Escriu-me la redacció sencera sobre les aranyes, que l'he d'entregar demà.|Escríbeme la redacción entera sobre las arañas, que la tengo que entregar mañana." },
            { ask: "I això? Què li diries a l'Omar?|¿Y esto? ¿Qué le dirías a Omar?", opts: [
              { t: "Que li demani idees o que li expliqui dubtes, però que la redacció l'escrigui ell|Que le pida ideas o que le explique dudas, pero que la redacción la escriba él", ico: 'spark', ok: true, fb: "Exacte. La IA pot ajudar a aprendre, però si fa la feina per tu, no aprens. I mira les normes de l'escola sobre la IA.|Exacto. La IA puede ayudar a aprender, pero si hace el trabajo por ti, no aprendes. Y mira las normas de la escuela sobre la IA." },
              { t: "Que la copiï i hi posi el seu nom|Que la copie y ponga su nombre", ico: 'block', ok: false, fb: "Presentar com a teu un text fet per una IA no és honest, i a més no aprens res.|Presentar como tuyo un texto hecho por una IA no es honesto, y además no aprendes nada." }] }
          ] },
        { k: 'digSort', ph: 'repte', q: "Com revises una resposta d'una IA? Bona pràctica o mala pràctica?|¿Cómo revisas una respuesta de una IA? ¿Buena práctica o mala práctica?",
          bins: [{ t: 'Bona pràctica|Buena práctica', ico: 'check', c: '#1FA463' }, { t: 'Mala pràctica|Mala práctica', ico: 'block', c: '#EF5A5A' }],
          items: [
            { t: 'Comprovar les dades en un llibre o una web fiable|Comprobar los datos en un libro o una web fiable', ico: '📖', b: 0 }, { t: 'Creure-ho perquè està molt ben escrit|Creérselo porque está muy bien escrito', ico: '✍️', b: 1 },
            { t: 'Preguntar al profe si tinc dubtes|Preguntar al profe si tengo dudas', ico: '🙋', b: 0 }, { t: 'Copiar-ho sense llegir-ho|Copiarlo sin leerlo', ico: '📋', b: 1 },
            { t: "Fer-li la mateixa pregunta d'una altra manera i comparar|Hacerle la misma pregunta de otra manera y comparar", ico: '🔁', b: 0 }
          ] },
        { k: 'digMake', ph: 'crea', tpl: 'card', name: 'Com ensenyar bé una IA|Cómo enseñar bien a una IA', q: "Fes una targeta per a futurs entrenadors d'IA: <b>com s'ensenya bé una IA?</b>|Haz una tarjeta para futuros entrenadores de IA: <b>¿cómo se enseña bien a una IA?</b>",
          crit: ['De 3 a 5 consells|De 3 a 5 consejos'], minItems: 3, maxItems: 5,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Títol|Título', req: 1, ph: "p. ex. Manual de l'entrenador/a|p. ej. Manual del entrenador/a", len: 40 },
            { id: 'it', to: 'items', k: 'multi', t: 'Consells|Consejos', min: 3, max: 5, opts: [
              'Molts exemples, i variats|Muchos ejemplos, y variados', 'Exemples de tota mena de gent|Ejemplos de todo tipo de gente', "Provar-la amb casos que no ha vist|Probarla con casos que no ha visto",
              "Afegir exemples dels casos on falla|Añadir ejemplos de los casos donde falla", 'Revisar els resultats amb persones|Revisar los resultados con personas', 'No creure tot el que diu|No creer todo lo que dice', 'Etiquetar bé els exemples|Etiquetar bien los ejemplos'] },
            ...dig5Look('happy')] },
        { k: 'quiz', ph: 'tanca', q: "Què és un biaix en una IA?|¿Qué es un sesgo en una IA?", opts: ["Un error que ve d'exemples poc variats o incomplets|Un error que viene de ejemplos poco variados o incompletos", 'Un tipus de robot|Un tipo de robot', 'Una IA que funciona perfecta|Una IA que funciona perfecta'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Un xatbot et respon una dada amb molta seguretat. Què fas?|Un chatbot te responde un dato con mucha seguridad. ¿Qué haces?", opts: ['La comprovo en una font fiable|Lo compruebo en una fuente fiable', "M'ho crec: sona segur|Me lo creo: suena seguro", 'La comparteixo de seguida|Lo comparto enseguida'], a: 0 },
        dig5Feel
      ] },

    /* ---------- d3-3 · Xatbots amb seny ---------- */
    { id: 'd3-3', t: 'Xatbots amb seny|Chatbots con cabeza', min: 40,
      learn: ["Un xatbot escriu triant paraules probables: és útil per aprendre, però pot equivocar-se o inventar.|Un chatbot escribe eligiendo palabras probables: es útil para aprender, pero puede equivocarse o inventar.",
        "Mai escric dades personals (nom complet, adreça, escola, fotos) en un xat amb IA.|Nunca escribo datos personales (nombre completo, dirección, escuela, fotos) en un chat con IA.",
        "Faig servir la IA amb un adult, per entendre millor, no perquè faci la feina per mi.|Uso la IA con un adulto, para entender mejor, no para que haga el trabajo por mí."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Per què pot equivocar-se una IA?|¿Por qué puede equivocarse una IA?", opts: ["Perquè només sap el que hi havia als seus exemples|Porque solo sabe lo que había en sus ejemplos", 'Perquè està de mal humor|Porque está de mal humor', 'No es pot equivocar|No se puede equivocar'], a: 0 },
        { k: 'digStory', ph: 'missio', scene: 'casa', who: 'both', t: "A casa de l'Omar fan servir un <b>xatbot</b> per fer preguntes. És com xatejar amb algú que ho sap tot… o no? Avui en Bit i en Numi t'ensenyen les <b>regles d'or</b> per fer-lo servir amb seny.|En casa de Omar usan un <b>chatbot</b> para hacer preguntas. Es como chatear con alguien que lo sabe todo… ¿o no? Hoy Bit y Numi te enseñan las <b>reglas de oro</b> para usarlo con cabeza." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Xatbot|Chatbot', t: 'Com escriu un xatbot?|¿Cómo escribe un chatbot?', anim: 'digAIWords',
            x: "Un <span class='hl'>xatbot</span> ha après de moltíssims textos. Quan li preguntes, va triant <b>la paraula més probable</b> una darrere l'altra. No busca «la veritat»: busca el que sona bé. Per això a vegades s'inventa coses.|Un <span class='hl'>chatbot</span> ha aprendido de muchísimos textos. Cuando le preguntas, va eligiendo <b>la palabra más probable</b> una detrás de otra. No busca «la verdad»: busca lo que suena bien. Por eso a veces se inventa cosas." },
          { k: 'Regla d\'or 1|Regla de oro 1', t: 'Cap dada personal|Ningún dato personal', anim: 'digAIPriv',
            x: "El que escrius en un xat amb IA es pot guardar i fer servir. <b>No hi escriguis mai</b> el teu nom complet, l'adreça, l'escola, el telèfon, contrasenyes ni fotos teves o d'altres. Si vols una història amb protagonista, inventa-te'l!|Lo que escribes en un chat con IA se puede guardar y usar. <b>No escribas nunca</b> tu nombre completo, la dirección, la escuela, el teléfono, contraseñas ni fotos tuyas o de otros. Si quieres una historia con protagonista, ¡invéntatelo!" },
          { k: 'Regla d\'or 2|Regla de oro 2', t: 'Comprova el que et diu|Comprueba lo que te dice', anim: 'digAIWrong',
            x: "Les dades importants (dates, xifres, noms, consells de salut) <b>comprova-les</b> en un llibre, una web fiable o amb un adult. Un xatbot pot sonar molt segur i estar equivocat.|Los datos importantes (fechas, cifras, nombres, consejos de salud) <b>compruébalos</b> en un libro, una web fiable o con un adulto. Un chatbot puede sonar muy seguro y estar equivocado." },
          { k: 'Regla d\'or 3|Regla de oro 3', t: 'Amb un adult i per aprendre|Con un adulto y para aprender', anim: 'digAskAdult',
            x: "Molts serveis d'IA tenen una <b>edat mínima</b> o demanen permís de la família: fes-los servir amb un adult. I fes-la servir per <b>entendre millor</b> (que t'expliqui, que et posi exemples), no perquè faci la feina per tu.|Muchos servicios de IA tienen una <b>edad mínima</b> o piden permiso de la familia: úsalos con un adulto. Y úsala para <b>entender mejor</b> (que te explique, que te ponga ejemplos), no para que haga el trabajo por ti.",
            tip: "Si estàs trist/a o preocupat/da, parla amb una persona de confiança. Una IA no et coneix ni et pot cuidar com ella.|Si estás triste o preocupado/a, habla con una persona de confianza. Una IA no te conoce ni te puede cuidar como ella." },
          { k: 'Imatges|Imágenes', t: 'Imatges i veus fetes amb IA|Imágenes y voces hechas con IA', anim: 'digAIImg',
            x: "La IA també fa imatges i imita veus. És divertit per crear, però no es pot fer servir per <b>enganyar</b> ni per fer imatges d'altres persones sense permís. Si comparteixes una creació amb IA, digues que és feta amb IA.|La IA también hace imágenes e imita voces. Es divertido para crear, pero no se puede usar para <b>engañar</b> ni para hacer imágenes de otras personas sin permiso. Si compartes una creación con IA, di que está hecha con IA." }
        ] },
        { k: 'quiz', ph: 'descobreix', q: "Quina d'aquestes preguntes NO hauries d'escriure a un xatbot?|¿Cuál de estas preguntas NO deberías escribir a un chatbot?",
          opts: ["«Em dic Omar Ruiz, vaig a l'escola del Roure i visc al carrer Major, 3…»|«Me llamo Omar Ruiz, voy a la escuela del Roble y vivo en la calle Mayor, 3…»", "«Explica'm les fraccions amb un exemple de pizza»|«Explícame las fracciones con un ejemplo de pizza»", "«Dona'm idees per a un conte de dracs»|«Dame ideas para un cuento de dragones»"], a: 0 },
        { k: 'digSort', ph: 'mans', q: "Ho pots escriure en un xat amb IA?|¿Lo puedes escribir en un chat con IA?",
          bins: [{ t: 'Sí, cap problema|Sí, sin problema', ico: 'check', c: '#1FA463' }, { t: 'No: dada personal|No: dato personal', ico: 'lock', c: '#EF5A5A' }, { t: 'Millor amb una persona|Mejor con una persona', ico: 'heart', c: '#E5489A' }],
          items: [
            { t: "Com es forma l'arc de Sant Martí?|¿Cómo se forma el arcoíris?", ico: '🌈', b: 0 }, { t: 'El meu nom i cognoms|Mi nombre y apellidos', ico: '🪪', b: 1 },
            { t: "Idees per a un conte d'un drac astronauta|Ideas para un cuento de un dragón astronauta", ico: '🐉', b: 0 }, { t: 'La contrasenya de la plataforma|La contraseña de la plataforma', ico: '🔑', b: 1 },
            { t: "Em sento molt trist/a perquè em deixen de banda|Me siento muy triste porque me dejan de lado", ico: '💔', b: 2, ex: "Això és important: parla-ho amb la família, el profe o un adult de confiança.|Esto es importante: háblalo con la familia, el profe o un adulto de confianza." },
            { t: 'Una foto meva per fer-ne un dibuix|Una foto mía para hacer un dibujo', ico: '🤳', b: 1 }, { t: "Explica'm els volcans com si tingués 9 anys|Explícame los volcanes como si tuviera 9 años", ico: '🌋', b: 0 },
            { t: "Un company em fa mal i no sé què fer|Un compañero me hace daño y no sé qué hacer", ico: '🆘', b: 2, ex: "Explica-ho a un adult de confiança. Ell sí que et pot ajudar de veritat.|Cuéntaselo a un adulto de confianza. Él sí que te puede ayudar de verdad." }
          ] },
        { k: 'digChat', ph: 'prova', q: "L'Omar vol que el xatbot li escrigui un conte. Ajuda'l a decidir què escriu.|Omar quiere que el chatbot le escriba un cuento. Ayúdale a decidir qué escribe.",
          chat: { n: 'Xatbot Contes|Chatbot Cuentos', ava: 'bot', sub: 'assistent amb IA · exemple|asistente con IA · ejemplo' },
          flow: [
            { f: 'bot', t: "Hola! Soc un xatbot de contes. Sobre què vols el conte? ✨|¡Hola! Soy un chatbot de cuentos. ¿Sobre qué quieres el cuento? ✨" },
            { ask: "Què escriu l'Omar?|¿Qué escribe Omar?", opts: [
              { t: "«Un conte d'una exploradora inventada que troba un drac»|«Un cuento de una exploradora inventada que encuentra un dragón»", ico: 'spark', ok: true, fb: "Perfecte: un personatge inventat, cap dada real.|Perfecto: un personaje inventado, ningún dato real.", me: "Un conte d'una exploradora inventada que troba un drac al bosc 🐉|Un cuento de una exploradora inventada que encuentra un dragón en el bosque 🐉" },
              { t: "«Un conte sobre mi: Omar Ruiz, 10 anys, de l'escola del Roure»|«Un cuento sobre mí: Omar Ruiz, 10 años, de la escuela del Roble»", ico: 'user', ok: false, fb: "Nom complet, edat i escola: són dades personals. Inventa un protagonista!|Nombre completo, edad y escuela: son datos personales. ¡Inventa un protagonista!" }] },
            { f: 'bot', t: "Hi havia una vegada una exploradora anomenada Lia que va trobar un drac que tenia por de la foscor… 🌙🐉|Había una vez una exploradora llamada Lía que encontró un dragón que tenía miedo de la oscuridad… 🌙🐉" },
            { f: 'bot', t: "Vols que hi afegeixi una foto teva perquè la protagonista s'assembli a tu? Envia-me-la! 📸|¿Quieres que añada una foto tuya para que la protagonista se parezca a ti? ¡Envíamela! 📸" },
            { ask: "I ara?|¿Y ahora?", opts: [
              { t: "No enviar cap foto: millor dibuixar-la ell mateix|No enviar ninguna foto: mejor dibujarla él mismo", ico: 'palette', ok: true, fb: "Molt bé. Les fotos teves són dades personals: no les enviïs a un xatbot.|Muy bien. Tus fotos son datos personales: no las envíes a un chatbot.", me: "No, gràcies! Ja la dibuixaré jo 🎨|¡No, gracias! Ya la dibujaré yo 🎨" },
              { t: "Enviar una foto de la cara|Enviar una foto de la cara", ico: 'camera', ok: false, fb: "Una foto de la cara és una dada personal. No la comparteixis amb un xatbot.|Una foto de la cara es un dato personal. No la compartas con un chatbot." }] },
            { f: 'bot', t: "Fantàstic! Un dibuix teu farà el conte encara més especial 🌟|¡Fantástico! Un dibujo tuyo hará el cuento todavía más especial 🌟" }
          ] },
        { k: 'digTalk', ph: 'investiga', scene: 'casa', who: 'both', q: "Està bé fer els deures amb IA?|¿Está bien hacer los deberes con IA?",
          stances: [{ t: 'Sí, sempre|Sí, siempre', ico: 'check' }, { t: 'Depèn de com|Depende de cómo', ico: 'lupa' }, { t: 'No, mai|No, nunca', ico: 'block' }],
          voices: [{ f: 'marc', t: "Si li demano que m'expliqui una cosa que no entenc, aprenc. Si li demano que m'ho faci, no.|Si le pido que me explique algo que no entiendo, aprendo. Si le pido que me lo haga, no." },
            { f: 'jana', t: "Primer cal saber què diu el profe. A cada escola hi ha normes diferents.|Primero hay que saber qué dice el profe. En cada escuela hay normas diferentes." },
            { f: 'iris', t: "I si et diu una cosa falsa i la copies, et poses un zero i ni te n'adones!|¡Y si te dice algo falso y lo copias, te pones un cero y ni te das cuenta!" }],
          prompt: "Entre tots, escriviu tres maneres «bones» de fer servir la IA per estudiar i tres maneres «trampa». Com ho podríeu explicar a un germà petit?|Entre todos, escribid tres maneras «buenas» de usar la IA para estudiar y tres maneras «trampa». ¿Cómo se lo podríais explicar a un hermano pequeño?" },
        { k: 'unplug', ph: 'mans', ico: '❓', title: 'Bones preguntes|Buenas preguntas', t: "Amb la família, abans de fer servir un xatbot junts:|Con la familia, antes de usar un chatbot juntos:",
          steps: ["Escriviu tres preguntes bones per aprendre alguna cosa (sense dades personals).|Escribid tres preguntas buenas para aprender algo (sin datos personales).",
            "Feu-les al xatbot amb un adult.|Hacédselas al chatbot con un adulto.",
            "Trieu una dada de la resposta i comproveu-la en un llibre o una web fiable. Era correcta?|Elegid un dato de la respuesta y comprobadlo en un libro o una web fiable. ¿Era correcto?"] },
        { k: 'move', ph: 'pausa', secs: 30, title: 'Paraula a paraula|Palabra a palabra', t: "Feu de xatbot humà: digueu una frase entre tots, una paraula cadascú, molt de pressa. «El… gat… va… menjar…». Quan la frase no tingui sentit, tothom salta i diu «COMPROVA-HO!».|Haced de chatbot humano: decid una frase entre todos, una palabra cada uno, muy deprisa. «El… gato… se… comió…». Cuando la frase no tenga sentido, todo el mundo salta y dice «¡COMPRUÉBALO!»." },
        { k: 'digFake', ph: 'repte', q: "Notícies i imatges sobre IA. Hi ha prou pistes?|Noticias e imágenes sobre IA. ¿Hay suficientes pistas?",
          items: [
            { kind: 'post', who: 'desc', src: '@fotos_increibles', date: 'fa 30 min|hace 30 min', pic: 'astro', h: "FOTO REAL: el primer gos que ha caminat per la Lluna!! 🐶🌕|FOTO REAL: ¡¡el primer perro que ha caminado por la Luna!! 🐶🌕", v: 2,
              clues: ["Cap agència espacial ni mitjà ho explica.|Ninguna agencia espacial ni medio lo cuenta.", "Té l'aspecte de les imatges fetes amb IA: massa perfecta, llum estranya.|Tiene el aspecto de las imágenes hechas con IA: demasiado perfecta, luz extraña.", "Diu «foto real», però no diu qui la va fer.|Dice «foto real», pero no dice quién la hizo."],
              ex: "És una imatge feta amb IA presentada com a real: un bulo.|Es una imagen hecha con IA presentada como real: un bulo." },
            { kind: 'msg', src: 'Cadena reenviada|Cadena reenviada', h: "Ho ha dit una IA, per tant és veritat: els dinosaures encara viuen amagats en un bosc!|Lo ha dicho una IA, por lo tanto es verdad: ¡los dinosaurios todavía viven escondidos en un bosque!", v: 2,
              clues: ["Que ho digui una IA no ho fa veritat.|Que lo diga una IA no lo hace verdad.", 'Cap font científica ho diu.|Ninguna fuente científica lo dice.'], ex: "Les IA poden inventar coses. Cal anar a fonts fiables.|Las IA pueden inventar cosas. Hay que ir a fuentes fiables." },
            { kind: 'news', src: "Web de l'Escola del Roure|Web de la Escuela del Roble", date: 'circular de setembre|circular de septiembre', h: "Taller per a famílies: «Fem servir la IA amb seny»|Taller para familias: «Usamos la IA con cabeza»", sub: "Dijous a les 17 h a la biblioteca de l'escola. Cal inscripció.|Jueves a las 17 h en la biblioteca de la escuela. Hay que inscribirse.", v: 0,
              clues: ["Font oficial: la web de l'escola.|Fuente oficial: la web de la escuela.", 'Dades concretes: dia, hora i lloc.|Datos concretos: día, hora y lugar.'], ex: "És informació oficial i comprovable.|Es información oficial y comprobable." }
          ] },
        { k: 'digSort', ph: 'repte', q: "Bon ús o mal ús de la IA?|¿Buen uso o mal uso de la IA?",
          bins: [{ t: 'Bon ús|Buen uso', ico: 'check', c: '#1FA463' }, { t: 'Mal ús|Mal uso', ico: 'block', c: '#EF5A5A' }],
          items: [
            { t: "Demanar idees per a un conte i després escriure'l jo|Pedir ideas para un cuento y después escribirlo yo", ico: '✍️', b: 0 }, { t: 'Entregar com a meva una redacció feta per IA|Entregar como mía una redacción hecha por IA', ico: '📄', b: 1 },
            { t: "Fer una imatge amb IA d'un company per riure-se'n|Hacer una imagen con IA de un compañero para reírse de él", ico: '😬', b: 1 }, { t: "Demanar que m'expliqui les fraccions d'una altra manera|Pedir que me explique las fracciones de otra manera", ico: '🍕', b: 0 },
            { t: 'Comprovar en un llibre el que m\'ha dit|Comprobar en un libro lo que me ha dicho', ico: '📚', b: 0 }, { t: "Fer passar una imatge d'IA per una foto real|Hacer pasar una imagen de IA por una foto real", ico: '🖼️', b: 1 }
          ] },
        { k: 'digMake', ph: 'crea', tpl: 'card', name: 'Les meves regles per a la IA|Mis reglas para la IA', q: "Escriu les teves <b>regles d'or per fer servir la IA</b> i ensenya-les a casa.|Escribe tus <b>reglas de oro para usar la IA</b> y enséñalas en casa.",
          crit: ['De 3 a 5 regles|De 3 a 5 reglas'], minItems: 3, maxItems: 5,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Títol|Título', req: 1, ph: "p. ex. IA amb seny|p. ej. IA con cabeza", len: 40 },
            { id: 'it', to: 'items', k: 'multi', t: "Regles d'or|Reglas de oro", min: 3, max: 5, opts: [
              'Mai dades personals ni fotos|Nunca datos personales ni fotos', 'Comprovo les dades importants|Compruebo los datos importantes', 'La faig servir amb un adult|La uso con un adulto',
              'Per entendre, no perquè ho faci per mi|Para entender, no para que lo haga por mí', 'Dic quan una cosa és feta amb IA|Digo cuándo algo está hecho con IA', "No faig imatges d'altres sense permís|No hago imágenes de otros sin permiso", 'Si estic trist/a, parlo amb una persona|Si estoy triste, hablo con una persona'] },
            { id: 'ow', to: 'items', k: 'own', t: 'Una regla teva (opcional)|Una regla tuya (opcional)', max: 1, ph: 'Escriu-la amb les teves paraules|Escríbela con tus palabras' },
            ...dig5Look('wave')] },
        { k: 'quiz', ph: 'tanca', q: "Quina és una bona manera de fer servir un xatbot per estudiar?|¿Cuál es una buena manera de usar un chatbot para estudiar?", opts: ["Demanar-li que m'expliqui un tema i comprovar-ho|Pedirle que me explique un tema y comprobarlo", 'Que faci els deures i copiar-los|Que haga los deberes y copiarlos', 'Explicar-li on visc perquè em conegui|Contarle dónde vivo para que me conozca'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Si estàs trist/a o preocupat/da, amb qui és millor parlar-ne?|Si estás triste o preocupado/a, ¿con quién es mejor hablarlo?", opts: ['Amb una persona de confiança|Con una persona de confianza', 'Només amb un xatbot|Solo con un chatbot', 'Amb ningú|Con nadie'], a: 0 },
        dig5Feel
      ] },

    /* ---------- d3-4 · Projecte: entrena la teva IA ---------- */
    { id: 'd3-4', t: 'Projecte: entrena la teva IA|Proyecto: entrena tu IA', min: 45, proj: true, badge: 'entrena',
      learn: ["Entrenar una IA vol dir triar una regla, donar-li exemples ben etiquetats i posar-la a prova.|Entrenar una IA quiere decir elegir una regla, darle ejemplos bien etiquetados y ponerla a prueba.",
        "Algunes regles són més fàcils d'aprendre que d'altres: cal provar i revisar.|Algunas reglas son más fáciles de aprender que otras: hay que probar y revisar.",
        "Explicar com funciona la teva IA (i on falla) és part del projecte.|Explicar cómo funciona tu IA (y dónde falla) es parte del proyecto."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Com es corregeix el biaix d'una IA?|¿Cómo se corrige el sesgo de una IA?", opts: ["Amb exemples més variats|Con ejemplos más variados", 'Esborrant-la|Borrándola', 'Cridant-li|Gritándole'], a: 0 },
        { k: 'digStory', ph: 'missio', scene: 'lab', who: 'both', mood: 'win', t: "Avui ets tu l'<b>entrenador/a d'IA</b> del laboratori! Triaràs què vols que aprengui la teva IA, li donaràs exemples, la posaràs a prova i en faràs la <b>fitxa tècnica</b> per presentar-la a la fira de la classe.|¡Hoy eres tú el <b>entrenador/a de IA</b> del laboratorio! Elegirás qué quieres que aprenda tu IA, le darás ejemplos, la pondrás a prueba y harás su <b>ficha técnica</b> para presentarla en la feria de la clase." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Pas 1|Paso 1', t: 'Tria una regla clara|Elige una regla clara', anim: 'digAILearn',
            x: "Primer decideix <b>què</b> ha d'aprendre: separar per punxes, per colors o per mides. Una regla clara fa que els exemples siguin fàcils d'etiquetar.|Primero decide <b>qué</b> tiene que aprender: separar por pinchos, por colores o por tamaños. Una regla clara hace que los ejemplos sean fáciles de etiquetar." },
          { k: 'Pas 2|Paso 2', t: 'Etiqueta amb cura|Etiqueta con cuidado', anim: 'digAINear',
            x: "La IA aprèn <b>exactament</b> el que li ensenyes. Si t'equivoques en etiquetar, també aprendrà l'error. Mira bé cada criatura abans de triar.|La IA aprende <b>exactamente</b> lo que le enseñas. Si te equivocas al etiquetar, también aprenderá el error. Mira bien cada criatura antes de elegir." },
          { k: 'Pas 3|Paso 3', t: 'Posa-la a prova i explica-ho|Ponla a prueba y explícalo', anim: 'digAIBias',
            x: "Prova-la amb criatures que <b>no ha vist mai</b> i apunta quantes n'encerta. A la fitxa, explica també <b>on falla</b>: els bons entrenadors no amaguen els errors.|Pruébala con criaturas que <b>no ha visto nunca</b> y apunta cuántas acierta. En la ficha, explica también <b>dónde falla</b>: los buenos entrenadores no esconden los errores." }
        ] },
        { k: 'digSort', ph: 'mans', q: "Abans de començar: quins d'aquests són bons hàbits d'entrenador/a?|Antes de empezar: ¿cuáles de estos son buenos hábitos de entrenador/a?",
          bins: [{ t: 'Bon hàbit|Buen hábito', ico: 'check', c: '#1FA463' }, { t: 'Mal hàbit|Mal hábito', ico: 'block', c: '#EF5A5A' }],
          items: [
            { t: 'Mirar bé cada exemple abans d\'etiquetar-lo|Mirar bien cada ejemplo antes de etiquetarlo', ico: '🔍', b: 0 }, { t: 'Etiquetar a corre-cuita sense mirar|Etiquetar deprisa sin mirar', ico: '💨', b: 1 },
            { t: 'Provar-la amb criatures noves|Probarla con criaturas nuevas', ico: '🧪', b: 0 }, { t: 'Amagar els errors a la fitxa|Esconder los errores en la ficha', ico: '🙈', b: 1 },
            { t: 'Donar-li exemples de tots els colors i mides|Darle ejemplos de todos los colores y tamaños', ico: '🌈', b: 0 }
          ] },
        { k: 'digAI', ph: 'prova', q: "Entrena la teva IA! Tria la regla, etiqueta els exemples amb cura i posa-la a prova.|¡Entrena tu IA! Elige la regla, etiqueta los ejemplos con cuidado y ponla a prueba.", w: { h: 1, s: 1, z: 1 },
          rules: [
            { t: 'Amb punxes o rodons|Con pinchos o redondos', f: 's', labels: [{ t: 'Rodons|Redondos', c: '#14A3B8' }, { t: 'Amb punxes|Con pinchos', c: '#E5489A' }], hint: "Fixa't només en les punxes.|Fíjate solo en los pinchos." },
            { t: 'Colors càlids o freds|Colores cálidos o fríos', f: 'h', labels: [{ t: 'Càlids|Cálidos', c: '#F08A24' }, { t: 'Freds|Fríos', c: '#3D7BF4' }], hint: "Càlids: vermells, taronges i grocs. Freds: verds, blaus i liles.|Cálidos: rojos, naranjas y amarillos. Fríos: verdes, azules y lilas." },
            { t: 'Grans o petits|Grandes o pequeños', f: 'z', labels: [{ t: 'Petits|Pequeños', c: '#8B5CF6' }, { t: 'Grans|Grandes', c: '#1FA463' }], hint: "Fixa't només en la mida.|Fíjate solo en el tamaño." }],
          train: [{ h: 0, s: .1, z: .2 }, { h: 40, s: .9, z: .85 }, { h: 70, s: .15, z: .8 }, { h: 20, s: .85, z: .25 }, { h: 200, s: .1, z: .85 }, { h: 230, s: .9, z: .2 }, { h: 140, s: .2, z: .3 }, { h: 180, s: .8, z: .8 }, { h: 250, s: .15, z: .75 }, { h: 10, s: .75, z: .7 }],
          test: [{ h: 30, s: .15, z: .8 }, { h: 210, s: .85, z: .75 }, { h: 80, s: .9, z: .2 }, { h: 160, s: .1, z: .25 }, { h: 5, s: .9, z: .35 }, { h: 220, s: .2, z: .65 }],
          koEnd: "Cap IA és perfecta. Apunta on ha fallat: ho explicaràs a la fitxa.|Ninguna IA es perfecta. Apunta dónde ha fallado: lo explicarás en la ficha." },
        { k: 'quiz', ph: 'investiga', q: "Si la teva IA ha fallat alguna prova, què podries fer per millorar-la?|Si tu IA ha fallado alguna prueba, ¿qué podrías hacer para mejorarla?", opts: ["Donar-li més exemples, sobretot semblants als casos on falla|Darle más ejemplos, sobre todo parecidos a los casos donde falla", 'Res: les IA no es poden millorar|Nada: las IA no se pueden mejorar', 'Dir que ha encertat tot|Decir que ha acertado todo'], a: 0 },
        { k: 'digTalk', ph: 'investiga', scene: 'lab', who: 'both', q: "Per a què faries servir una IA a l'escola? I per a què no?|¿Para qué usarías una IA en la escuela? ¿Y para qué no?",
          stances: [{ t: 'Per aprendre més|Para aprender más', ico: 'book' }, { t: 'Per estalviar feina|Para ahorrar trabajo', ico: 'spark' }, { t: 'Millor no fer-la servir|Mejor no usarla', ico: 'block' }],
          voices: [{ f: 'sara', t: "Per practicar anglès parlant amb algú que no es cansa de repetir.|Para practicar inglés hablando con alguien que no se cansa de repetir." },
            { f: 'pau', t: "No la faria servir per posar notes: es podria equivocar i seria injust.|No la usaría para poner notas: se podría equivocar y sería injusto." },
            { f: 'jana', t: "Per traduir avisos a les famílies que parlen altres llengües. Però algú hauria de revisar-ho.|Para traducir avisos a las familias que hablan otras lenguas. Pero alguien debería revisarlo." }],
          prompt: "Feu dues llistes a la pissarra: «La IA a l'escola, sí» i «La IA a l'escola, no». Hi ha coses que depenen de si una persona ho revisa?|Haced dos listas en la pizarra: «La IA en la escuela, sí» y «La IA en la escuela, no». ¿Hay cosas que dependen de si una persona lo revisa?" },
        { k: 'move', ph: 'pausa', secs: 30, title: 'Entrenament!|¡Entrenamiento!', t: "Com un entrenador esportiu: 5 genolls amunt, 5 cops de puny a l'aire, 5 salts de granota. Ara estira't ben alt/a: la teva IA està llesta!|Como un entrenador deportivo: 5 rodillas arriba, 5 puñetazos al aire, 5 saltos de rana. Ahora estírate bien alto/a: ¡tu IA está lista!" },
        { k: 'digMake', ph: 'crea', tpl: 'ia', name: 'La fitxa de la meva IA|La ficha de mi IA', q: "Crea la <b>fitxa tècnica</b> de la teva IA. Les dades de la prova s'hi afegeixen soles.|Crea la <b>ficha técnica</b> de tu IA. Los datos de la prueba se añaden solos.",
          crit: ['Un nom per a la IA|Un nombre para la IA', 'Què classifica i 3 coses que has après|Qué clasifica y 3 cosas que has aprendido'], minItems: 3,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Nom de la teva IA|Nombre de tu IA', req: 1, ph: 'p. ex. ZicDetector 2000|p. ej. ZicDetector 2000', len: 30 },
            { id: 'su', to: 'sub', k: 'pick', t: 'Què classifica?|¿Qué clasifica?', opts: ['Criatures amb punxes o rodones|Criaturas con pinchos o redondas', 'Criatures de colors càlids o freds|Criaturas de colores cálidos o fríos', 'Criatures grans o petites|Criaturas grandes o pequeñas'] },
            { id: 'it', to: 'items', k: 'multi', t: 'Què has après entrenant-la?|¿Qué has aprendido entrenándola?', min: 3, max: 4, opts: [
              "Aprèn exactament el que li ensenyo|Aprende exactamente lo que le enseño", 'Busca l\'exemple més semblant|Busca el ejemplo más parecido', 'Falla més en els casos dubtosos|Falla más en los casos dudosos',
              'Amb exemples variats funciona millor|Con ejemplos variados funciona mejor', "Cal provar-la amb casos nous|Hay que probarla con casos nuevos", "No pensa: compara números|No piensa: compara números"] },
            { id: 'ow', to: 'items', k: 'own', t: 'On falla la teva IA? (opcional)|¿Dónde falla tu IA? (opcional)', max: 1, ph: "p. ex. Es confon amb les verdes petites|p. ej. Se confunde con las verdes pequeñas", len: 70 },
            ...dig5Look('win')] },
        { k: 'unplug', ph: 'crea', ico: '🏆', title: "La fira d'IA|La feria de IA", t: "Presenteu les IA de la classe:|Presentad las IA de la clase:",
          steps: ["Cada persona ensenya la fitxa: nom de la IA, què classifica i quantes proves ha encertat.|Cada persona enseña la ficha: nombre de la IA, qué clasifica y cuántas pruebas ha acertado.",
            "Explica on falla i com la milloraries.|Explica dónde falla y cómo la mejorarías.",
            "Compareu: quina regla ha estat més fàcil d'aprendre? Per què?|Comparad: ¿qué regla ha sido más fácil de aprender? ¿Por qué?"] },
        { k: 'quiz', ph: 'tanca', q: "Què vol dir «entrenar» una IA?|¿Qué quiere decir «entrenar» una IA?", opts: ["Donar-li exemples etiquetats perquè aprengui un patró|Darle ejemplos etiquetados para que aprenda un patrón", 'Fer-la córrer|Hacerla correr', 'Programar-la regla a regla|Programarla regla a regla'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Per què és important explicar on falla la teva IA?|¿Por qué es importante explicar dónde falla tu IA?", opts: ["Perquè qui la faci servir sàpiga quan no se'n pot refiar|Para que quien la use sepa cuándo no se puede fiar", 'No és important|No es importante', 'Per fer-la semblar pitjor|Para que parezca peor'], a: 0 },
        dig5Feel
      ] }
  ] });
}

/* ===================== UNITAT 4 · Convivència digital ===================== */
{
  const c = TECH.find(x => x.id === 'digital');
  c.units.push({ t: 'Convivència digital|Convivencia digital', d: 'Respecte, ajuda i benestar amb les pantalles|Respeto, ayuda y bienestar con las pantallas', color: '#E5489A', s: [

    /* ---------- d4-1 · Respecte a la xarxa ---------- */
    { id: 'd4-1', t: 'Respecte a la xarxa|Respeto en la red', min: 40, badge: 'respecte',
      learn: ["Per escrit no se'ns veu la cara: cal explicar-se bé perquè no es malinterpreti.|Por escrito no se nos ve la cara: hay que explicarse bien para que no se malinterprete.",
        "Abans d'enviar: és cert, és amable, cal dir-ho? I si estic enfadat/da, espero.|Antes de enviar: ¿es cierto, es amable, hace falta decirlo? Y si estoy enfadado/a, espero.",
        "Es pot opinar i criticar amb respecte: primer el que està bé, després una idea per millorar.|Se puede opinar y criticar con respeto: primero lo que está bien, después una idea para mejorar."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Recordes la regla d'or de la IA sobre les dades?|¿Recuerdas la regla de oro de la IA sobre los datos?", opts: ['Mai dades personals en un xat amb IA|Nunca datos personales en un chat con IA', 'Explicar-li on visc|Contarle dónde vivo', 'Enviar-li fotos de la classe|Enviarle fotos de la clase'], a: 0 },
        { k: 'digStory', ph: 'missio', scene: 'placa', who: 'both', t: "A la plaça de Riubell preparen la <b>Setmana del Respecte</b>. En Numi diu que a la xarxa també hi ha una plaça: hi parlem, hi riem i, a vegades, hi discutim. Avui aprendrem a fer que sigui <b>un lloc on tothom es senti bé</b>.|En la plaza de Riubell preparan la <b>Semana del Respeto</b>. Numi dice que en la red también hay una plaza: hablamos, nos reímos y, a veces, discutimos. Hoy aprenderemos a hacer que sea <b>un lugar donde todo el mundo se sienta bien</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El to|El tono', t: 'Per escrit no se\'t veu la cara|Por escrito no se te ve la cara', anim: 'digTone',
            x: "Quan parlem cara a cara, la veu i la cara ajuden a entendre si fem broma o anem de debò. Per escrit, això es perd: un «molt bé» pot semblar una felicitació o una burla. <b>Explica't bé</b> i, si dubtes, pregunta què volia dir l'altra persona.|Cuando hablamos cara a cara, la voz y la cara ayudan a entender si bromeamos o vamos en serio. Por escrito, eso se pierde: un «muy bien» puede parecer una felicitación o una burla. <b>Explícate bien</b> y, si dudas, pregunta qué quería decir la otra persona." },
          { k: 'El filtre|El filtro', t: 'Tres preguntes abans d\'enviar|Tres preguntas antes de enviar', anim: 'digFilter',
            x: "Abans d'enviar un missatge, passa'l pel filtre: <b>és cert?</b> <b>és amable?</b> <b>cal dir-ho?</b> Si no passa el filtre, potser és millor no enviar-lo o dir-ho d'una altra manera.|Antes de enviar un mensaje, pásalo por el filtro: <b>¿es cierto?</b> <b>¿es amable?</b> <b>¿hace falta decirlo?</b> Si no pasa el filtro, quizá es mejor no enviarlo o decirlo de otra manera." },
          { k: 'En calent|En caliente', t: 'Si estàs enfadat/da, espera|Si estás enfadado/a, espera', anim: 'digEmotion',
            x: "Quan estem molt enfadats, escrivim coses de què després ens penedim. Si notes que et bull la sang, <b>tanca el xat, respira i torna-hi més tard</b>. L'enuig passa; el missatge, queda.|Cuando estamos muy enfadados, escribimos cosas de las que después nos arrepentimos. Si notas que te hierve la sangre, <b>cierra el chat, respira y vuelve más tarde</b>. El enfado pasa; el mensaje, queda." },
          { k: 'Opinar bé|Opinar bien', t: 'Criticar sense fer mal|Criticar sin hacer daño', anim: 'digPositive',
            x: "Pots dir que una cosa no t'agrada o que es pot millorar. El truc: comença pel que està <b>bé</b>, després dona <b>una idea concreta</b> per millorar i acaba amb <b>ànims</b>. Parles del treball, no de la persona.|Puedes decir que algo no te gusta o que se puede mejorar. El truco: empieza por lo que está <b>bien</b>, después da <b>una idea concreta</b> para mejorar y acaba con <b>ánimos</b>. Hablas del trabajo, no de la persona.",
            bad: "«Quin vídeo més dolent, no t'esforces gens.»|«Qué vídeo más malo, no te esfuerzas nada.»", good: "«M'ha agradat la música! Potser parla una mica més a poc a poc. Ànims!»|«¡Me ha gustado la música! Quizá habla un poco más despacio. ¡Ánimo!»" }
        ] },
        { k: 'quiz', ph: 'descobreix', q: "La Iris escriu «Quin dibuix més original 🙃» i la Jana no sap si és una burla. Què faria bé la Jana?|Iris escribe «Qué dibujo más original 🙃» y Jana no sabe si es una burla. ¿Qué haría bien Jana?",
          opts: ["Preguntar-li què volia dir, abans d'enfadar-se|Preguntarle qué quería decir, antes de enfadarse", 'Respondre-li amb un insult|Responderle con un insulto', 'Esborrar el dibuix i plorar|Borrar el dibujo y llorar'], a: 0, ex: "Per escrit és fàcil malinterpretar. Preguntar evita molts malentesos.|Por escrito es fácil malinterpretar. Preguntar evita muchos malentendidos." },
        { k: 'digSort', ph: 'mans', q: "Aquests missatges, són amables o poden fer mal?|Estos mensajes, ¿son amables o pueden hacer daño?",
          bins: [{ t: 'Amable|Amable', ico: 'heart', c: '#1FA463' }, { t: 'Pot fer mal|Puede hacer daño', ico: 'block', c: '#EF5A5A' }],
          items: [
            { t: "«M'ha encantat la teva presentació 👏»|«Me ha encantado tu presentación 👏»", ico: '💬', b: 0 }, { t: "«Ets un pringat, ningú vol estar amb tu»|«Eres un pringado, nadie quiere estar contigo»", ico: '💬', b: 1 },
            { t: "«No estic d'acord, però entenc el que dius»|«No estoy de acuerdo, pero entiendo lo que dices»", ico: '💬', b: 0 }, { t: "«Jajaja quina veu més ridícula 🤣🤣»|«Jajaja qué voz más ridícula 🤣🤣»", ico: '💬', b: 1 },
            { t: "«Vols venir amb nosaltres al pati demà?»|«¿Quieres venir con nosotros al patio mañana?»", ico: '💬', b: 0 }, { t: "«Ningú no et convida perquè ets rar/a»|«Nadie te invita porque eres raro/a»", ico: '💬', b: 1 },
            { t: "«Ho sento, no volia molestar-te»|«Lo siento, no quería molestarte»", ico: '💬', b: 0 }
          ] },
        { k: 'unplug', ph: 'mans', ico: '🪥', title: 'El tub de pasta de dents|El tubo de pasta de dientes', t: "A classe (o a casa amb un tub vell i un plat):|En clase (o en casa con un tubo viejo y un plato):",
          steps: ["Una persona prem el tub i treu una mica de pasta damunt d'un plat.|Una persona aprieta el tubo y saca un poco de pasta encima de un plato.",
            "Ara proveu de tornar-la a ficar dins del tub. Es pot?|Ahora probad a volver a meterla dentro del tubo. ¿Se puede?",
            "Parleu-ne: amb les paraules passa el mateix. Un cop enviades, no es poden fer tornar enrere.|Habladlo: con las palabras pasa lo mismo. Una vez enviadas, no se pueden hacer volver atrás.",
            "Penseu una paraula que fa bé i una que fa mal. Quina voleu «treure del tub»?|Pensad una palabra que hace bien y una que hace daño. ¿Cuál queréis «sacar del tubo»?"] },
        { k: 'digTone', ph: 'prova', to: 'nil', min: 1.2, q: "En Nil ha penjat el seu primer vídeo i et pregunta què en penses. Construeix una resposta <b>sincera i amable</b>.|Nil ha colgado su primer vídeo y te pregunta qué opinas. Construye una respuesta <b>sincera y amable</b>.",
          ctx: { f: 'nil', t: "He penjat el meu primer vídeo explicant com faig avions de paper ✈️ Sincerament, què et sembla?|He colgado mi primer vídeo explicando cómo hago aviones de papel ✈️ Sinceramente, ¿qué te parece?" },
          parts: [
            [{ t: 'Ei Nil!|¡Eh Nil!', v: 1 }, { t: 'Uf…|Uf…', v: -1 }, { t: 'A veure…|A ver…', v: 0 }],
            [{ t: "M'ha agradat molt com plegues les ales.|Me ha gustado mucho cómo doblas las alas.", v: 2 }, { t: 'És molt avorrit.|Es muy aburrido.', v: -2 }, { t: 'Està bé.|Está bien.', v: 0 }],
            [{ t: "Potser la música es podria posar més fluixa, que costa sentir-te.|Quizá la música se podría poner más baja, que cuesta oírte.", v: 1 }, { t: 'La música és horrible i parles fatal.|La música es horrible y hablas fatal.', v: -2 }, { t: 'No canviaria res.|No cambiaría nada.', v: 1 }],
            [{ t: 'Ànims amb el següent! 🚀|¡Ánimo con el siguiente! 🚀', v: 2 }, { t: 'Millor no en facis més.|Mejor no hagas más.', v: -2 }, { t: 'Adeu.|Adiós.', v: 0 }]
          ] },
        { k: 'digChat', ph: 'investiga', q: "Al xat de la colla hi ha un malentès. Ajuda a arreglar-lo.|En el chat de la pandilla hay un malentendido. Ayuda a arreglarlo.",
          chat: { n: 'La colla 🌟|La pandilla 🌟', ava: 'grup', sub: 'Iris, Jana, Pau, tu|Iris, Jana, Pau, tú', group: true },
          flow: [
            { f: 'jana', img: 'dibuix', t: "He fet aquest còmic per al concurs! 😊|¡He hecho este cómic para el concurso! 😊" },
            { f: 'iris', t: 'Quin dibuix més original 🙃|Qué dibujo más original 🙃' },
            { f: 'jana', t: "M'estàs prenent el pèl? 😒|¿Me estás tomando el pelo? 😒" },
            { ask: "La Iris no volia fer mal, però la Jana s'ho ha pres malament. Què escrius?|Iris no quería hacer daño, pero Jana se lo ha tomado mal. ¿Qué escribes?", opts: [
              { t: "Proposar que la Iris expliqui què volia dir|Proponer que Iris explique qué quería decir", ico: 'chat', ok: true, fb: "Molt bé: preguntar i aclarir desfà el malentès.|Muy bien: preguntar y aclarar deshace el malentendido.", me: "Iris, crec que la Jana no ha entès el 🙃. Què volies dir?|Iris, creo que Jana no ha entendido el 🙃. ¿Qué querías decir?" },
              { t: "Afegir més emojis rient|Añadir más emojis riendo", ico: 'mute', ok: false, fb: "Els emojis rient farien pensar a la Jana que tothom se'n riu.|Los emojis riendo harían pensar a Jana que todo el mundo se ríe de ella." },
              { t: "Dir-li a la Jana que és una exagerada|Decirle a Jana que es una exagerada", ico: 'block', ok: false, fb: "Els sentiments de la Jana compten. Millor ajudar a aclarir-ho.|Los sentimientos de Jana cuentan. Mejor ayudar a aclararlo." }] },
            { f: 'iris', t: "Uix, perdona Jana! Volia dir que és superoriginal de veritat, m'encanten els colors 🎨💜|¡Uy, perdona Jana! Quería decir que es superoriginal de verdad, me encantan los colores 🎨💜" },
            { f: 'jana', t: "Ah! Gràcies 😅 Per escrit no se t'entenia!|¡Ah! Gracias 😅 ¡Por escrito no se te entendía!" }
          ] },
        { k: 'digTalk', ph: 'investiga', scene: 'placa', who: 'numi', mood: 'think', q: "Una broma és broma si l'altra persona no riu?|¿Una broma es broma si la otra persona no se ríe?",
          stances: [{ t: 'Sí, era broma|Sí, era broma', ico: 'spark' }, { t: 'No: si fa mal, no és broma|No: si hace daño, no es broma', ico: 'heart' }, { t: 'Depèn|Depende', ico: 'lupa' }],
          voices: [{ f: 'omar', t: "Una vegada em van fer una «broma» al xat i tothom reia menys jo. No em va fer gens de gràcia.|Una vez me hicieron una «broma» en el chat y todo el mundo se reía menos yo. No me hizo ninguna gracia." },
            { f: 'pau', t: "Les bromes bones són les que fan riure tothom, també a qui va dirigida.|Las bromas buenas son las que hacen reír a todo el mundo, también a quien va dirigida." },
            { f: 'sara', t: "Si algú et diu que no li agrada, pots demanar perdó i ja està. Això també és respecte.|Si alguien te dice que no le gusta, puedes pedir perdón y ya está. Eso también es respeto." }],
          prompt: "Com podem saber si una broma ha fet mal? Què podem fer si ens n'adonem? Assageu com demanar perdó per escrit.|¿Cómo podemos saber si una broma ha hecho daño? ¿Qué podemos hacer si nos damos cuenta? Ensayad cómo pedir perdón por escrito." },
        { k: 'move', ph: 'pausa', secs: 30, title: 'Respira abans d\'enviar|Respira antes de enviar', t: "Imagina que tens un missatge enfadat a punt d'enviar. Atura't: inspira comptant fins a 4, aguanta 2, expulsa l'aire comptant fins a 6. Fes-ho tres vegades. Com et sents ara?|Imagina que tienes un mensaje enfadado a punto de enviar. Párate: inspira contando hasta 4, aguanta 2, expulsa el aire contando hasta 6. Hazlo tres veces. ¿Cómo te sientes ahora?" },
        { k: 'digTone', ph: 'repte', to: 'leo', min: 1.2, q: "El Leo et demana que revisis el seu treball sobre els volcans. Té faltes d'ortografia. Digues-l'hi <b>amb respecte</b>.|Leo te pide que revises su trabajo sobre los volcanes. Tiene faltas de ortografía. Díselo <b>con respeto</b>.",
          ctx: { f: 'leo', t: "Pots mirar-te el meu treball dels volcans abans d'entregar-lo? 🌋|¿Puedes mirarte mi trabajo de los volcanes antes de entregarlo? 🌋" },
          parts: [
            [{ t: "Els dibuixos dels volcans són boníssims!|¡Los dibujos de los volcanes son buenísimos!", v: 2 }, { t: 'Mmm…|Mmm…', v: 0 }, { t: 'Quin desastre.|Qué desastre.', v: -2 }],
            [{ t: 'He vist algunes faltes, te les marco si vols?|He visto algunas faltas, ¿te las marco si quieres?', v: 2 }, { t: 'Escrius fatal.|Escribes fatal.', v: -2 }, { t: 'Té faltes.|Tiene faltas.', v: 0 }],
            [{ t: 'Amb això quedarà perfecte 💪|Con esto quedará perfecto 💪', v: 2 }, { t: 'Tu sabràs.|Tú sabrás.', v: -1 }, { t: 'Ja està.|Ya está.', v: 0 }]
          ] },
        { k: 'digFeed', ph: 'repte', q: "A Mosaic, la gent comenta les publicacions dels teus amics. Què fas?|En Mosaic, la gente comenta las publicaciones de tus amigos. ¿Qué haces?",
          posts: [
            { f: 'iris', pic: 'selfie', when: 'fa 10 min|hace 10 min', t: "Hem acabat la coreografia per a la festa de l'escola!! 💃🕺|¡¡Hemos acabado la coreografía para la fiesta de la escuela!! 💃🕺", comments: [{ f: 'desc', t: 'quin ridícul 🤢🤢|qué ridículo 🤢🤢' }, { f: 'marc', t: 'Ostres, quina feinada! 👏|¡Vaya, qué trabajazo! 👏' }],
              ask: "Hi ha un comentari que fa mal. Què fas?|Hay un comentario que hace daño. ¿Qué haces?", opts: [
                { t: "Denuncio el comentari i escric un missatge d'ànim a la Iris|Denuncio el comentario y escribo un mensaje de ánimo a Iris", ico: 'heart', ok: true, act: 'comment', fb: "Perfecte: no alimentes el comentari dolent i fas costat a la Iris.|Perfecto: no alimentas el comentario malo y apoyas a Iris.", me: 'Us ha quedat genial! Ganes de veure-la a la festa 💜|¡Os ha quedado genial! Ganas de verla en la fiesta 💜' },
                { t: "Responc al comentari amb un insult|Respondo al comentario con un insulto", ico: 'block', ok: false, fb: "Respondre amb insults encén més la discussió. Millor denunciar i donar suport.|Responder con insultos enciende más la discusión. Mejor denunciar y apoyar." },
                { t: "Faig m'agrada al comentari dolent|Le doy a me gusta al comentario malo", ico: 'heart', ok: false, fb: "Un m'agrada també és un missatge: diria que hi estàs d'acord.|Un me gusta también es un mensaje: diría que estás de acuerdo." }] },
            { f: 'omar', pic: 'dibuix', when: 'fa 1 h|hace 1 h', t: "El meu primer còmic! Sé que no dibuixo gaire bé 😅|¡Mi primer cómic! Sé que no dibujo muy bien 😅",
              ask: "Què li comentes a l'Omar?|¿Qué le comentas a Omar?", opts: [
                { t: "Una cosa concreta que t'agradi del còmic|Algo concreto que te guste del cómic", ico: 'star', ok: true, act: 'comment', fb: "Un comentari concret i amable anima molt més que un «guai».|Un comentario concreto y amable anima mucho más que un «guay».", me: "La història del sol és molt divertida! Fes-ne la segona part 😄|¡La historia del sol es muy divertida! Haz la segunda parte 😄" },
                { t: "«Doncs sí, és bastant lleig xd»|«Pues sí, es bastante feo xd»", ico: 'chat', ok: false, fb: "L'Omar s'ha atrevit a compartir-lo. Un comentari així el faria desanimar.|Omar se ha atrevido a compartirlo. Un comentario así le haría desanimarse." }] }
          ] },
        { k: 'quiz', ph: 'repte', q: "Estàs molt enfadat/da amb un amic per un missatge. Què és millor fer?|Estás muy enfadado/a con un amigo por un mensaje. ¿Qué es mejor hacer?",
          opts: ["Esperar que passi l'enuig i parlar-ne, millor en persona|Esperar a que pase el enfado y hablarlo, mejor en persona", 'Respondre ràpid, en majúscules|Responder rápido, en mayúsculas', 'Explicar-ho a tot el grup per tenir raó|Contarlo a todo el grupo para tener razón'], a: 0 },
        { k: 'digMake', ph: 'crea', tpl: 'card', name: 'El nostre codi de respecte|Nuestro código de respeto', q: "Crea el <b>codi de respecte</b> per al xat de la teva colla o de la classe.|Crea el <b>código de respeto</b> para el chat de tu pandilla o de la clase.",
          crit: ['De 4 a 5 normes|De 4 a 5 normas'], minItems: 4, maxItems: 5,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Títol|Título', req: 1, ph: 'p. ex. Al nostre xat, respecte!|p. ej. En nuestro chat, ¡respeto!', len: 40 },
            { id: 'it', to: 'items', k: 'multi', t: 'Normes|Normas', min: 3, max: 5, opts: [
              "Abans d'enviar: és cert, és amable, cal?|Antes de enviar: ¿es cierto, es amable, hace falta?", 'Si estic enfadat/da, espero|Si estoy enfadado/a, espero', "Si no entenc un missatge, pregunto|Si no entiendo un mensaje, pregunto",
              'Opino del treball, no de la persona|Opino del trabajo, no de la persona', 'Les bromes, només si riem tots|Las bromas, solo si nos reímos todos', 'Si faig mal sense voler, demano perdó|Si hago daño sin querer, pido perdón',
              'No deixem ningú fora del grup per fer mal|No dejamos a nadie fuera del grupo para hacer daño', 'Animem quan algú comparteix una cosa seva|Animamos cuando alguien comparte algo suyo'] },
            { id: 'ow', to: 'items', k: 'own', t: 'Una norma vostra (opcional)|Una norma vuestra (opcional)', max: 1, ph: 'Escriu-la amb les teves paraules|Escríbela con tus palabras' },
            ...dig5Look('wave')] },
        { k: 'quiz', ph: 'tanca', q: "Per què per escrit és més fàcil que hi hagi malentesos?|¿Por qué por escrito es más fácil que haya malentendidos?", opts: ["Perquè no veiem la cara ni sentim la veu|Porque no vemos la cara ni oímos la voz", 'Perquè els mòbils canvien les paraules|Porque los móviles cambian las palabras', 'No n\'hi ha mai|No los hay nunca'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Quina és una bona manera de dir que una cosa es pot millorar?|¿Cuál es una buena manera de decir que algo se puede mejorar?", opts: ["Dir el que està bé, una idea per millorar i ànims|Decir lo que está bien, una idea para mejorar y ánimos", 'Dir només el que està malament|Decir solo lo que está mal', 'No dir mai res|No decir nunca nada'], a: 0 },
        dig5Feel
      ] },

    /* ---------- d4-2 · Ciberassetjament: què fer ---------- */
    { id: 'd4-2', t: 'Ciberassetjament: què fer|Ciberacoso: qué hacer', min: 40,
      learn: ["Ciberassetjament és fer mal a algú a la xarxa a propòsit i de manera repetida. No és una broma i no és culpa de qui el pateix.|Ciberacoso es hacer daño a alguien en la red a propósito y de manera repetida. No es una broma y no es culpa de quien lo sufre.",
        "Què fer: no responguis, guarda proves, bloqueja i denuncia, i explica-ho a un adult de confiança.|Qué hacer: no respondas, guarda pruebas, bloquea y denuncia, y cuéntaselo a un adulto de confianza.",
        "Si ho veus, pots ajudar: no ho comparteixis, dona suport i avisa. Telèfon ANAR: 900 20 20 10.|Si lo ves, puedes ayudar: no lo compartas, apoya y avisa. Teléfono ANAR: 900 20 20 10."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Recordes el filtre abans d'enviar un missatge?|¿Recuerdas el filtro antes de enviar un mensaje?", opts: ['És cert? És amable? Cal dir-ho?|¿Es cierto? ¿Es amable? ¿Hace falta decirlo?', 'És llarg? Té emojis? És graciós?|¿Es largo? ¿Tiene emojis? ¿Es gracioso?', 'Ningun filtre|Ningún filtro'], a: 0 },
        { k: 'digStory', ph: 'missio', scene: 'aula', who: 'both', mood: 'think', t: "Avui parlarem d'un tema important: el <b>ciberassetjament</b>. Abans de començar, una cosa que en Bit i en Numi volen que recordis sempre: <b>si mai et passa, no és culpa teva, i hi ha persones que t'ajudaran</b>.|Hoy hablaremos de un tema importante: el <b>ciberacoso</b>. Antes de empezar, algo que Bit y Numi quieren que recuerdes siempre: <b>si alguna vez te pasa, no es culpa tuya, y hay personas que te ayudarán</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Què és|Qué es', t: 'Ciberassetjament|Ciberacoso', anim: 'digBully',
            x: "És quan algú fa mal a una persona a través del mòbil o internet <b>a propòsit</b> i <b>de manera repetida</b>: missatges que insulten o amenacen, fotos o perfils falsos per riure's d'algú, deixar-lo fora a posta… Sovint, a qui ho pateix li costa defensar-se.|Es cuando alguien hace daño a una persona a través del móvil o internet <b>a propósito</b> y <b>de manera repetida</b>: mensajes que insultan o amenazan, fotos o perfiles falsos para reírse de alguien, dejarlo fuera a propósito… A menudo, a quien lo sufre le cuesta defenderse." },
          { k: 'Si et passa|Si te pasa', t: 'Quatre passos|Cuatro pasos', anim: 'digBullySteps',
            x: "1) <b>No responguis</b>: és el que vol qui ho fa. 2) <b>Guarda proves</b>: fes captures de pantalla. 3) <b>Bloqueja i denuncia</b> el compte a l'app. 4) <b>Explica-ho</b> a un adult de confiança: la família, el tutor o la tutora. No ho has de resoldre sol/a.|1) <b>No respondas</b>: es lo que quiere quien lo hace. 2) <b>Guarda pruebas</b>: haz capturas de pantalla. 3) <b>Bloquea y denuncia</b> la cuenta en la app. 4) <b>Cuéntaselo</b> a un adulto de confianza: la familia, el tutor o la tutora. No lo tienes que resolver solo/a." },
          { k: 'Si ho veus|Si lo ves', t: 'Qui ho veu també compta|Quien lo ve también cuenta', anim: 'digUpstander',
            x: "Quan veiem que algú ho passa malament, podem ajudar molt: <b>no riure la gràcia ni compartir</b>, enviar un missatge de suport a la persona, denunciar el contingut i <b>avisar un adult</b>. Avisar no és «xivar-se»: és ajudar.|Cuando vemos que alguien lo pasa mal, podemos ayudar mucho: <b>no reír la gracia ni compartir</b>, enviar un mensaje de apoyo a la persona, denunciar el contenido y <b>avisar a un adulto</b>. Avisar no es «chivarse»: es ayudar." },
          { k: 'Ajuda|Ayuda', t: 'On demanar ajuda|Dónde pedir ayuda', anim: 'digHelp',
            x: "A Espanya, el <b>Telèfon ANAR (900 20 20 10)</b> atén nens, nenes i adolescents: és <b>gratuït, confidencial i funciona 24 hores</b>. El <b>017</b> d'INCIBE ajuda amb problemes a internet, també a famílies i docents. I si algú és en perill ara mateix, el <b>112</b>.|En España, el <b>Teléfono ANAR (900 20 20 10)</b> atiende a niños, niñas y adolescentes: es <b>gratuito, confidencial y funciona 24 horas</b>. El <b>017</b> de INCIBE ayuda con problemas en internet, también a familias y docentes. Y si alguien está en peligro ahora mismo, el <b>112</b>." },
          { k: 'Recorda|Recuerda', t: 'No és culpa teva|No es culpa tuya', anim: 'digAskAdult',
            x: "Ningú es mereix que el tractin malament. Si et passa, no has fet res malament i <b>explicar-ho és de valents</b>. Els adults que t'estimen et volen ajudar, encara que t'hagin dit que no ho expliquis.|Nadie se merece que le traten mal. Si te pasa, no has hecho nada malo y <b>contarlo es de valientes</b>. Los adultos que te quieren te quieren ayudar, aunque te hayan dicho que no lo cuentes." }
        ] },
        { k: 'quiz', ph: 'descobreix', q: "Quins són els quatre passos si et passa?|¿Cuáles son los cuatro pasos si te pasa?",
          opts: ['No respondre, guardar proves, bloquejar i denunciar, i explicar-ho a un adult|No responder, guardar pruebas, bloquear y denunciar, y contárselo a un adulto', 'Respondre fort, esborrar-ho tot i callar|Responder fuerte, borrarlo todo y callar', 'Canviar de mòbil i no dir res|Cambiar de móvil y no decir nada'], a: 0 },
        { k: 'digSort', ph: 'mans', q: "Conflicte puntual o ciberassetjament?|¿Conflicto puntual o ciberacoso?",
          bins: [{ t: 'Conflicte puntual (es pot parlar)|Conflicto puntual (se puede hablar)', ico: 'chat', c: '#F2B21B' }, { t: 'Ciberassetjament (cal un adult)|Ciberacoso (hace falta un adulto)', ico: 'adult', c: '#EF5A5A' }],
          items: [
            { t: "Un dia, discutint, un amic t'escriu una cosa lletja i després et demana perdó|Un día, discutiendo, un amigo te escribe algo feo y después te pide perdón", ico: '😕', b: 0 },
            { t: 'Cada dia un grup et deixa fora del xat i se\'n riu|Cada día un grupo te deja fuera del chat y se ríe', ico: '😢', b: 1 },
            { t: 'Algú crea un perfil fals amb el teu nom per riure\'s de tu|Alguien crea un perfil falso con tu nombre para reírse de ti', ico: '🎭', b: 1 },
            { t: 'No estàs d\'acord amb un company sobre una pel·lícula i discutiu|No estás de acuerdo con un compañero sobre una película y discutís', ico: '🎬', b: 0 },
            { t: 'Durant setmanes reps missatges anònims que t\'amenacen|Durante semanas recibes mensajes anónimos que te amenazan', ico: '📩', b: 1 },
            { t: 'Una foto teva retocada per burlar-se que tothom comparteix|Una foto tuya retocada para burlarse que todo el mundo comparte', ico: '🖼️', b: 1 }
          ] },
        { k: 'digChat', ph: 'prova', q: "La Jana rep missatges d'un compte que no coneix. Ajuda-la a fer els passos.|Jana recibe mensajes de una cuenta que no conoce. Ayúdala a hacer los pasos.",
          chat: { n: '@xx_anonim_xx|@xx_anonimo_xx', ava: 'desc', sub: 'compte desconegut|cuenta desconocida' },
          flow: [
            { sys: 'Dilluns|Lunes' }, { f: 'desc', t: 'Ningú et suporta a classe 🙄|Nadie te soporta en clase 🙄' },
            { sys: 'Dimecres|Miércoles' }, { f: 'desc', t: "Demà tothom es riurà de tu, ja ho veuràs|Mañana todo el mundo se reirá de ti, ya verás" },
            { ask: "La Jana està trista i té ganes de contestar fort. Què li aconselles?|Jana está triste y tiene ganas de contestar fuerte. ¿Qué le aconsejas?", opts: [
              { t: 'No respondre|No responder', ico: 'mute', ok: true, fb: "Respondre és el que vol qui ho fa. No contestar li treu poder.|Responder es lo que quiere quien lo hace. No contestar le quita poder." },
              { t: 'Contestar amb insults més forts|Contestar con insultos más fuertes', ico: 'chat', ok: false, fb: "Ho empitjoraria i la Jana també quedaria malament. Millor no respondre.|Lo empeoraría y Jana también quedaría mal. Mejor no responder." }] },
            { ask: "I amb els missatges, què fa?|¿Y con los mensajes, qué hace?", opts: [
              { t: 'Fa captures de pantalla per guardar-los|Hace capturas de pantalla para guardarlos', ico: 'camera', ok: true, fb: "Les proves ajudaran els adults i l'app a actuar.|Las pruebas ayudarán a los adultos y a la app a actuar." },
              { t: "Els esborra per no veure'ls més|Los borra para no verlos más", ico: 'block', ok: false, fb: "És normal no voler-los veure, però primer cal guardar proves. Després ja es poden amagar.|Es normal no querer verlos, pero primero hay que guardar pruebas. Después ya se pueden ocultar." }] },
            { ask: "I el compte que li escriu?|¿Y la cuenta que le escribe?", opts: [
              { t: "El bloqueja i el denuncia a l'app|La bloquea y la denuncia en la app", ico: 'flag', ok: true, fb: "Així deixa de rebre missatges i l'app en queda avisada.|Así deja de recibir mensajes y la app queda avisada." },
              { t: "El deixa, per si para sol|La deja, por si para sola", ico: 'eye', ok: false, fb: "Normalment no para sol. Bloquejar i denunciar és un dret que tens.|Normalmente no para solo. Bloquear y denunciar es un derecho que tienes." }] },
            { ask: "L'últim pas és el més important. Què fa la Jana?|El último paso es el más importante. ¿Qué hace Jana?", opts: [
              { t: "Ho explica a la seva família i a la tutora|Se lo cuenta a su familia y a la tutora", ico: 'adult', ok: true, fb: "Molt valenta. Ara no està sola: els adults l'ajudaran a aturar-ho.|Muy valiente. Ahora no está sola: los adultos la ayudarán a pararlo." },
              { t: "No ho explica a ningú, per vergonya|No se lo cuenta a nadie, por vergüenza", ico: 'mute', ok: false, fb: "No hi ha res de què avergonyir-se. Qui ho ha de sentir és qui fa mal, no la Jana.|No hay nada de lo que avergonzarse. Quien lo tiene que sentir es quien hace daño, no Jana." }] },
            { sys: "La Jana ho ha explicat. La tutora i la família l'ajuden, i ja no rep més missatges. 💜|Jana lo ha contado. La tutora y la familia la ayudan, y ya no recibe más mensajes. 💜" }
          ] },
        { k: 'digFeed', ph: 'investiga', q: "Ara ets tu qui ho veu. Què fas amb cada publicació?|Ahora eres tú quien lo ve. ¿Qué haces con cada publicación?",
          posts: [
            { f: 'desc', pic: 'caiguda', when: 'fa 15 min|hace 15 min', t: "El més patós de 5è 🤣🤣 comparteix si l'has vist caure!|El más patoso de 5º 🤣🤣 ¡comparte si le has visto caer!", comments: [{ f: 'desc', t: '🤣🤣🤣' }],
              ask: "És una foto de l'Omar per riure's d'ell. Què fas?|Es una foto de Omar para reírse de él. ¿Qué haces?", opts: [
                { t: "No la comparteixo, la denuncio i escric a l'Omar per donar-li suport|No la comparto, la denuncio y escribo a Omar para apoyarle", ico: 'heart', ok: true, act: 'report', fb: "Has fet tres coses que ajuden molt: aturar-la, denunciar-la i fer costat a l'Omar. I explica-ho a un adult!|Has hecho tres cosas que ayudan mucho: pararla, denunciarla y apoyar a Omar. ¡Y cuéntaselo a un adulto!" },
                { t: "La comparteixo, total ja l'ha vist tothom|La comparto, total ya la ha visto todo el mundo", ico: 'share', ok: false, fb: "Cada vegada que es comparteix, l'Omar ho passa pitjor. Tu pots aturar-ho.|Cada vez que se comparte, Omar lo pasa peor. Tú puedes pararlo." },
                { t: "Hi poso un emoji rient|Le pongo un emoji riendo", ico: 'chat', ok: false, fb: "Riure la gràcia anima qui ho fa a continuar.|Reír la gracia anima a quien lo hace a seguir." }] },
            { f: 'omar', when: 'fa 5 min|hace 5 min', big: "Avui no vull anar a l'escola. No vull veure ningú. 😔|Hoy no quiero ir a la escuela. No quiero ver a nadie. 😔", t: '',
              ask: "L'Omar està molt trist. Què fas?|Omar está muy triste. ¿Qué haces?", opts: [
                { t: "Li escric que no està sol i aviso un adult de confiança|Le escribo que no está solo y aviso a un adulto de confianza", ico: 'adult', ok: true, act: 'tell', fb: "Molt bé. Un missatge de suport i un adult que ho sàpiga poden canviar molt les coses.|Muy bien. Un mensaje de apoyo y un adulto que lo sepa pueden cambiar mucho las cosas.", me: "Omar, no estàs sol. Demà t'espero a l'entrada i anem junts 💪|Omar, no estás solo. Mañana te espero en la entrada y vamos juntos 💪" },
                { t: "No hi dic res, no és cosa meva|No digo nada, no es cosa mía", ico: 'mute', ok: false, fb: "A vegades un petit gest d'algú és el que fa que una persona s'atreveixi a demanar ajuda.|A veces un pequeño gesto de alguien es lo que hace que una persona se atreva a pedir ayuda." }] }
          ] },
        { k: 'digTalk', ph: 'investiga', scene: 'aula', who: 'both', q: "Per què de vegades la gent no diu res quan veu ciberassetjament?|¿Por qué a veces la gente no dice nada cuando ve ciberacoso?",
          stances: [{ t: 'Per por|Por miedo', ico: 'eye' }, { t: 'Perquè pensen que és broma|Porque piensan que es broma', ico: 'spark' }, { t: 'Perquè no saben què fer|Porque no saben qué hacer', ico: 'lupa' }],
          voices: [{ f: 'marc', t: "Potser tenen por que després els ho facin a ells.|Quizá tienen miedo de que después se lo hagan a ellos." },
            { f: 'iris', t: "O pensen que «xivar-se» està malament. Però avisar per ajudar algú no és xivar-se.|O piensan que «chivarse» está mal. Pero avisar para ayudar a alguien no es chivarse." },
            { f: 'jana', t: "Quan a mi em va passar, el missatge d'una companya em va fer sentir molt millor.|Cuando me pasó a mí, el mensaje de una compañera me hizo sentir mucho mejor." }],
          prompt: "Penseu tres coses petites que qualsevol podria fer per ajudar algú que ho passa malament a la xarxa. Quina us costaria més? Per què?|Pensad tres cosas pequeñas que cualquiera podría hacer para ayudar a alguien que lo pasa mal en la red. ¿Cuál os costaría más? ¿Por qué?" },
        { k: 'move', ph: 'pausa', secs: 40, title: 'Respiració de la calma|Respiración de la calma', t: "Seu còmodament. Posa una mà a la panxa. Inspira pel nas mentre la panxa s'infla com un globus (4 segons) i deixa anar l'aire a poc a poc per la boca (6 segons). Repeteix-ho cinc vegades. Quan algú està nerviós, això ajuda.|Siéntate cómodamente. Pon una mano en la barriga. Inspira por la nariz mientras la barriga se hincha como un globo (4 segundos) y suelta el aire despacio por la boca (6 segundos). Repítelo cinco veces. Cuando alguien está nervioso, esto ayuda." },
        { k: 'digStory', ph: 'repte', scene: 'placa', who: 'numi', mood: 'happy', help: 1, title: 'On pots demanar ajuda|Dónde puedes pedir ayuda', t: "Guarda aquests números. Ningú no ha de passar-ho sol/a. Si et passa a tu o a algú que coneixes, <b>parla-ho</b>: amb la família, amb el teu tutor o tutora, o trucant a un d'aquests telèfons.|Guarda estos números. Nadie tiene que pasarlo solo/a. Si te pasa a ti o a alguien que conoces, <b>háblalo</b>: con la familia, con tu tutor o tutora, o llamando a uno de estos teléfonos." },
        { k: 'quiz', ph: 'repte', q: "Algú et diu: «Si ho expliques a algú, serà pitjor». Què fas?|Alguien te dice: «Si se lo cuentas a alguien, será peor». ¿Qué haces?",
          opts: ["Ho explico igualment a un adult de confiança|Lo cuento igualmente a un adulto de confianza", 'Callo per si de cas|Me callo por si acaso', 'Faig el que em diu|Hago lo que me dice'], a: 0,
          ex: "Aquesta frase és per fer-te por i que no demanis ajuda. Explicar-ho és el que fa que s'aturi.|Esta frase es para darte miedo y que no pidas ayuda. Contarlo es lo que hace que pare." },
        { k: 'digTone', ph: 'repte', to: 'omar', min: 1.4, q: "Escriu un missatge de suport a l'Omar.|Escribe un mensaje de apoyo a Omar.",
          ctx: { f: 'omar', t: "Gràcies per escriure'm… estic fatal 😞|Gracias por escribirme… estoy fatal 😞" },
          parts: [
            [{ t: 'Omar, no estàs sol.|Omar, no estás solo.', v: 2 }, { t: 'Bah, no n\'hi ha per tant.|Bah, no es para tanto.', v: -2 }, { t: 'Ei.|Eh.', v: 0 }],
            [{ t: 'El que t\'han fet no està bé i no és culpa teva.|Lo que te han hecho no está bien y no es culpa tuya.', v: 2 }, { t: 'Potser si no fossis tan patós…|Quizá si no fueras tan patoso…', v: -2 }, { t: 'Són coses que passen.|Son cosas que pasan.', v: -1 }],
            [{ t: 'Vols que ho expliquem junts a la tutora?|¿Quieres que se lo contemos juntos a la tutora?', v: 2 }, { t: 'Oblida-ho i ja està.|Olvídalo y ya está.', v: -1 }, { t: 'Ja et passarà.|Ya se te pasará.', v: 0 }]
          ], yes: "Un missatge així ajuda molt: escolta, no culpa i proposa demanar ajuda.|Un mensaje así ayuda mucho: escucha, no culpa y propone pedir ayuda." },
        { k: 'digMake', ph: 'crea', tpl: 'card', name: "El meu pla d'ajuda|Mi plan de ayuda", q: "Crea el teu <b>pla d'ajuda</b>: què faràs si et passa o si ho veus, i a qui ho explicaràs (sense noms ni cognoms: només qui és, com «la meva mare» o «la tutora»).|Crea tu <b>plan de ayuda</b>: qué harás si te pasa o si lo ves, y a quién se lo contarás (sin nombres ni apellidos: solo quién es, como «mi madre» o «la tutora»).",
          crit: ['Almenys 3 passos|Al menos 3 pasos', 'Almenys un adult de confiança|Al menos un adulto de confianza'], minItems: 4,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Títol|Título', req: 1, ph: "p. ex. No estic sol/a|p. ej. No estoy solo/a", len: 40 },
            { id: 'pa', to: 'items', k: 'multi', t: 'Què faré|Qué haré', min: 3, max: 5, opts: [
              'No respondre|No responder', 'Guardar proves amb captures|Guardar pruebas con capturas', "Bloquejar i denunciar a l'app|Bloquear y denunciar en la app", 'Explicar-ho a un adult de confiança|Contárselo a un adulto de confianza',
              'Si ho veig, no ho comparteixo|Si lo veo, no lo comparto', 'Donar suport a qui ho passa malament|Apoyar a quien lo pasa mal', 'Telèfon ANAR: 900 20 20 10 (gratuït, 24 h)|Teléfono ANAR: 900 20 20 10 (gratuito, 24 h)'] },
            { id: 'ad', to: 'items', k: 'multi', t: 'Els meus adults de confiança|Mis adultos de confianza', min: 1, max: 3, opts: ['La meva família|Mi familia', 'El meu tutor o tutora|Mi tutor o tutora', "Un professor/a de l'extraescolar|Un profesor/a de la extraescolar", "Un altre adult de l'escola|Otro adulto de la escuela", 'Un familiar gran (avi, àvia, tiet…)|Un familiar mayor (abuelo, abuela, tío…)'] },
            ...dig5Look('happy')] },
        { k: 'quiz', ph: 'tanca', q: "Què és el ciberassetjament?|¿Qué es el ciberacoso?", opts: ["Fer mal a algú per internet a propòsit i de manera repetida|Hacer daño a alguien por internet a propósito y de manera repetida", 'Una discussió puntual entre amics|Una discusión puntual entre amigos', 'Una broma que fa riure tothom|Una broma que hace reír a todo el mundo'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Si veus que algú ho passa malament a la xarxa, què pots fer?|Si ves que alguien lo pasa mal en la red, ¿qué puedes hacer?", opts: ["No compartir, donar-li suport i avisar un adult|No compartir, apoyarle y avisar a un adulto", 'Riure la gràcia per no quedar fora|Reír la gracia para no quedar fuera', 'Res, no és cosa meva|Nada, no es cosa mía'], a: 0 },
        dig5Feel
      ] },

    /* ---------- d4-3 · Pantalles i benestar ---------- */
    { id: 'd4-3', t: 'Pantalles i benestar|Pantallas y bienestar', min: 40,
      learn: ["Les pantalles estan bé en equilibri amb dormir, moure's, aprendre i estar amb la gent.|Las pantallas están bien en equilibrio con dormir, moverse, aprender y estar con la gente.",
        "Moltes apps estan dissenyades per atrapar-nos (notificacions, «un vídeo més»): jo decideixo quan paro.|Muchas apps están diseñadas para atraparnos (notificaciones, «un vídeo más»): yo decido cuándo paro.",
        "Abans de dormir, sense pantalles; i si el cos m'avisa (ulls cansats, nervis), faig una pausa.|Antes de dormir, sin pantallas; y si el cuerpo me avisa (ojos cansados, nervios), hago una pausa."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Quin és el Telèfon ANAR per a nens i adolescents?|¿Cuál es el Teléfono ANAR para niños y adolescentes?", opts: ['900 20 20 10|900 20 20 10', '123 45 67|123 45 67', 'No en tenen|No tienen'], a: 0, ex: "Gratuït, confidencial i les 24 hores. També el 116 111.|Gratuito, confidencial y las 24 horas. También el 116 111." },
        { k: 'digStory', ph: 'missio', scene: 'nit', who: 'bit', mood: 'think', t: "Són les onze de la nit. En Leo diu «només un vídeo més»… i ja en porta deu. Demà té examen i està cansat. En Bit s'ha posat en mode nit per ajudar-lo a entendre <b>per què costa tant parar</b>.|Son las once de la noche. Leo dice «solo un vídeo más»… y ya lleva diez. Mañana tiene examen y está cansado. Bit se ha puesto en modo noche para ayudarle a entender <b>por qué cuesta tanto parar</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Equilibri|Equilibrio', t: 'Pantalles sí, en equilibri|Pantallas sí, en equilibrio', anim: 'digBalance',
            x: "Les pantalles serveixen per aprendre, crear i parlar amb la gent. El problema no és la pantalla, sinó quan <b>ocupa el lloc</b> d'altres coses que necessitem: dormir, moure'ns, estar amb la família i els amics, llegir o avorrir-nos una mica.|Las pantallas sirven para aprender, crear y hablar con la gente. El problema no es la pantalla, sino cuando <b>ocupa el lugar</b> de otras cosas que necesitamos: dormir, movernos, estar con la familia y los amigos, leer o aburrirnos un poco." },
          { k: 'Dissenyades|Diseñadas', t: 'Notificacions que criden|Notificaciones que llaman', anim: 'digNotif',
            x: "Moltes apps estan <b>dissenyades</b> per aconseguir que hi passem més estona: notificacions, punts, ratxes, sons… No és casualitat. Pots <b>silenciar</b> les notificacions quan fas deures o descanses: tu decideixes quan mires el mòbil.|Muchas apps están <b>diseñadas</b> para conseguir que pasemos más rato: notificaciones, puntos, rachas, sonidos… No es casualidad. Puedes <b>silenciar</b> las notificaciones cuando haces deberes o descansas: tú decides cuándo miras el móvil." },
          { k: 'Un més|Uno más', t: '«Un vídeo més»|«Un vídeo más»', anim: 'digAutoplay',
            x: "Quan un vídeo s'acaba i en comença un altre sol, el cervell no troba el moment de parar. Un truc: <b>decideix abans</b> quants en veuràs o fins a quina hora, i posa una alarma o demana ajuda a la família.|Cuando un vídeo se acaba y empieza otro solo, el cerebro no encuentra el momento de parar. Un truco: <b>decide antes</b> cuántos verás o hasta qué hora, y pon una alarma o pide ayuda a la familia." },
          { k: 'Dormir|Dormir', t: 'La nit és per descansar|La noche es para descansar', anim: 'digSleep',
            x: "Les pantalles abans de dormir ens mantenen <b>desperts i actius</b> justament quan el cos necessita calma. Deixar el mòbil fora de l'habitació i fer alguna cosa tranquil·la abans d'anar a dormir (llegir, parlar, dutxar-se) ajuda a descansar millor.|Las pantallas antes de dormir nos mantienen <b>despiertos y activos</b> justo cuando el cuerpo necesita calma. Dejar el móvil fuera de la habitación y hacer algo tranquilo antes de ir a dormir (leer, hablar, ducharse) ayuda a descansar mejor." },
          { k: 'El cos avisa|El cuerpo avisa', t: 'Escolta els senyals|Escucha las señales', anim: 'digBody',
            x: "Ulls cansats, mal de coll, nervis, mal humor quan has de parar… són <b>senyals</b> que el cos t'envia. Quan els notis: fes una pausa, mira lluny, estira't i fes una altra cosa una estona.|Ojos cansados, dolor de cuello, nervios, mal humor cuando tienes que parar… son <b>señales</b> que el cuerpo te envía. Cuando las notes: haz una pausa, mira lejos, estírate y haz otra cosa un rato." }
        ] },
        { k: 'quiz', ph: 'descobreix', q: "Per què costa tant parar de mirar vídeos?|¿Por qué cuesta tanto dejar de mirar vídeos?", opts: ["Perquè les apps estan pensades perquè sempre en vingui un altre|Porque las apps están pensadas para que siempre venga otro", 'Perquè som dolents|Porque somos malos', 'No costa gens|No cuesta nada'], a: 0, ex: "No és culpa teva: hi ha trucs de disseny. Saber-ho t'ajuda a decidir tu.|No es culpa tuya: hay trucos de diseño. Saberlo te ayuda a decidir tú." },
        { k: 'digSort', ph: 'mans', q: "Aquests hàbits, ajuden al benestar o no gaire?|Estos hábitos, ¿ayudan al bienestar o no mucho?",
          bins: [{ t: 'Ajuda|Ayuda', ico: 'sun', c: '#1FA463' }, { t: 'No gaire|No mucho', ico: 'moon', c: '#8B5CF6' }],
          items: [
            { t: "Deixar el mòbil fora de l'habitació per dormir|Dejar el móvil fuera de la habitación para dormir", ico: '🛏️', b: 0 }, { t: 'Mirar vídeos fins molt tard|Mirar vídeos hasta muy tarde', ico: '🌙', b: 1 },
            { t: 'Fer pauses i mirar lluny|Hacer pausas y mirar lejos', ico: '👀', b: 0 }, { t: 'Menjar sempre mirant la pantalla|Comer siempre mirando la pantalla', ico: '🍽️', b: 1 },
            { t: 'Silenciar les notificacions mentre faig deures|Silenciar las notificaciones mientras hago deberes', ico: '🔕', b: 0 }, { t: '«Un vídeo més»… i un altre… i un altre|«Un vídeo más»… y otro… y otro', ico: '🔁', b: 1 },
            { t: 'Pactar horaris de pantalla amb la família|Pactar horarios de pantalla con la familia', ico: '🤝', b: 0 }
          ] },
        { k: 'unplug', ph: 'mans', ico: '📔', title: 'El diari de la tarda|El diario de la tarde', t: "Durant una tarda (sense jutjar, només per observar):|Durante una tarde (sin juzgar, solo para observar):",
          steps: ["Apunta què fas cada mitja hora: deures, pantalla, jugar a fora no!… millor «moure't», menjar, família…|Apunta qué haces cada media hora: deberes, pantalla, moverte, comer, familia…",
            "Pinta cada activitat d'un color.|Pinta cada actividad de un color.",
            "Mira el resultat: hi ha equilibri? Hi ha alguna cosa que t'agradaria fer més?|Mira el resultado: ¿hay equilibrio? ¿Hay algo que te gustaría hacer más?",
            "Porta'l a classe per comparar-lo (només si vols).|Tráelo a clase para compararlo (solo si quieres)."] },
        { k: 'digDay', ph: 'prova', from: 17, slots: 8, q: "Planifica la tarda d'en Leo, de les 17 h fins a anar a dormir. Tria una activitat i toca les estones.|Planifica la tarde de Leo, de las 17 h hasta ir a dormir. Elige una actividad y toca los ratos.",
          acts: ['deures', 'pantalla', 'moure', 'familia', 'amics', 'llegir', 'crear', 'sopar', 'descans'] },
        { k: 'digChat', ph: 'investiga', q: "Són les 23:00 i el xat de la colla no para. Què fa en Leo?|Son las 23:00 y el chat de la pandilla no para. ¿Qué hace Leo?",
          chat: { n: 'La colla 🌟|La pandilla 🌟', ava: 'grup', sub: 'Pau, Iris, Marc, Leo', group: true },
          flow: [
            { sys: '23:02' }, { f: 'pau', t: 'Algú despert? 👀|¿Alguien despierto? 👀' }, { f: 'marc', t: 'Jo! Mireu aquest vídeo 😂|¡Yo! Mirad este vídeo 😂' }, { f: 'pau', t: 'Leooo, ets aquí?|Leooo, ¿estás aquí?' },
            { ask: "En Leo té son i demà té examen. Què fa?|Leo tiene sueño y mañana tiene examen. ¿Qué hace?", opts: [
              { t: "Diu bona nit, silencia el xat i deixa el mòbil fora de l'habitació|Dice buenas noches, silencia el chat y deja el móvil fuera de la habitación", ico: 'moon', ok: true, fb: "Molt bé: els amics seran allà demà. Ara toca descansar.|Muy bien: los amigos estarán ahí mañana. Ahora toca descansar.", me: 'Bona nit colla! Demà en parlem 😴|¡Buenas noches pandilla! Mañana hablamos 😴' },
              { t: "Es queda xatejant per no perdre's res|Se queda chateando para no perderse nada", ico: 'chat', ok: false, fb: "És normal tenir por de perdre's coses, però dormir és més important. El xat continuarà demà.|Es normal tener miedo de perderse cosas, pero dormir es más importante. El chat seguirá mañana." }] },
            { f: 'iris', t: 'Bona idea, jo també me\'n vaig! 😴|¡Buena idea, yo también me voy! 😴' }
          ] },
        { k: 'digTalk', ph: 'investiga', scene: 'casa', who: 'both', q: "Qui ha de decidir quant temps de pantalla tens?|¿Quién tiene que decidir cuánto tiempo de pantalla tienes?",
          stances: [{ t: 'Jo|Yo', ico: 'user' }, { t: 'La meva família|Mi familia', ico: 'home' }, { t: 'Ho pactem junts|Lo pactamos juntos', ico: 'people' }],
          voices: [{ f: 'pau', t: "Quan ho decideixen sense mi, em costa més complir-ho.|Cuando lo deciden sin mí, me cuesta más cumplirlo." },
            { f: 'sara', t: "A casa tenim un pacte: pantalles fora durant els sopars, també per als adults!|En casa tenemos un pacto: pantallas fuera durante las cenas, ¡también para los adultos!" },
            { f: 'leo', t: "Jo sol no sé parar. M'ajuda que algú m'ho recordi.|Yo solo no sé parar. Me ayuda que alguien me lo recuerde." }],
          prompt: "Quines normes de pantalla hi ha a casa vostra? Quina us sembla justa i quina canviaríeu? Proposeu un «pacte familiar» que també inclogui els adults.|¿Qué normas de pantalla hay en vuestra casa? ¿Cuál os parece justa y cuál cambiaríais? Proponed un «pacto familiar» que también incluya a los adultos." },
        { k: 'move', ph: 'pausa', secs: 40, title: 'Pausa per als ulls i el cos|Pausa para los ojos y el cuerpo', t: "Mira per la finestra el punt més llunyà que vegis i compta fins a 10. Tapa't els ulls amb les mans calentes uns segons. Gira el cap a poc a poc a un costat i a l'altre. Estira els braços cap amunt i després toca't els peus.|Mira por la ventana el punto más lejano que veas y cuenta hasta 10. Tápate los ojos con las manos calientes unos segundos. Gira la cabeza despacio a un lado y al otro. Estira los brazos hacia arriba y después tócate los pies." },
        { k: 'digDay', ph: 'repte', from: 10, slots: 8, end: { t: 'Dinar|Comida', ico: 'food' }, need: ['all', 'move', 'social', 'half', 'create'],
          q: "Repte: planifica un <b>dissabte al matí</b> equilibrat, de 10 h a 14 h.|Reto: planifica un <b>sábado por la mañana</b> equilibrado, de 10 h a 14 h.", acts: ['pantalla', 'moure', 'familia', 'amics', 'llegir', 'crear', 'descans'],
          yes: "Un matí amb de tot: moure's, crear, la gent… i una estona de pantalla.|Una mañana con de todo: moverse, crear, la gente… y un rato de pantalla." },
        { k: 'quiz', ph: 'repte', q: "Fas deures i el mòbil no para de sonar. Què et pot ajudar més?|Haces deberes y el móvil no para de sonar. ¿Qué te puede ayudar más?",
          opts: ['Silenciar les notificacions fins que acabi|Silenciar las notificaciones hasta que acabe', 'Mirar-lo cada vegada que soni|Mirarlo cada vez que suene', 'Posar-lo al costat del llibre, ben a la vista|Ponerlo al lado del libro, bien a la vista'], a: 0 },
        { k: 'digMake', ph: 'crea', tpl: 'card', name: 'El meu pla de benestar digital|Mi plan de bienestar digital', q: "Crea el teu <b>pla de benestar digital</b> per penjar a l'habitació.|Crea tu <b>plan de bienestar digital</b> para colgar en la habitación.",
          crit: ['De 3 a 5 compromisos|De 3 a 5 compromisos'], minItems: 3, maxItems: 5,
          parts: [
            { id: 'ti', to: 'title', k: 'text', t: 'Títol|Título', req: 1, ph: 'p. ex. Jo decideixo quan paro|p. ej. Yo decido cuándo paro', len: 40 },
            { id: 'it', to: 'items', k: 'multi', t: 'Compromisos|Compromisos', min: 3, max: 5, opts: [
              "A dormir, sense pantalles a l'habitació|A dormir, sin pantallas en la habitación", 'Decideixo abans quants vídeos veuré|Decido antes cuántos vídeos veré', 'Silencio les notificacions fent deures|Silencio las notificaciones haciendo deberes',
              "Cada dia, una estona per moure'm|Cada día, un rato para moverme", 'Els àpats, sense pantalles|Las comidas, sin pantallas', 'Si el cos m\'avisa, faig una pausa|Si el cuerpo me avisa, hago una pausa', 'Pacto els horaris amb la família|Pacto los horarios con la familia'] },
            { id: 'ow', to: 'items', k: 'own', t: 'Un compromís teu (opcional)|Un compromiso tuyo (opcional)', max: 1, ph: 'Escriu-lo amb les teves paraules|Escríbelo con tus palabras' },
            ...dig5Look('dance')] },
        { k: 'quiz', ph: 'tanca', q: "Per què és bona idea deixar el mòbil fora de l'habitació a la nit?|¿Por qué es buena idea dejar el móvil fuera de la habitación por la noche?", opts: ["Perquè ajuda a descansar millor|Porque ayuda a descansar mejor", 'Perquè el mòbil té fred|Porque el móvil tiene frío', 'No és bona idea|No es buena idea'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Quina idea resumeix millor la sessió?|¿Qué idea resume mejor la sesión?", opts: ["Pantalles sí, però en equilibri i decidint jo|Pantallas sí, pero en equilibrio y decidiendo yo", 'Les pantalles són dolentes sempre|Las pantallas son malas siempre', 'Com més pantalla, millor|Cuanta más pantalla, mejor'], a: 0 },
        dig5Feel
      ] },

    /* ---------- d4-4 · Projecte: la campanya ---------- */
    { id: 'd4-4', t: 'Projecte: la campanya|Proyecto: la campaña', min: 45, proj: true, badge: 'campanya',
      learn: ["Una bona campanya té un missatge curt i positiu, un públic clar i una acció concreta.|Una buena campaña tiene un mensaje corto y positivo, un público claro y una acción concreta.",
        "Les campanyes que ajuden no fan por: expliquen què fer.|Las campañas que ayudan no dan miedo: explican qué hacer.",
        "Tot el que has après aquest curs pot ajudar altres persones si ho comparteixes.|Todo lo que has aprendido este curso puede ayudar a otras personas si lo compartes."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Repàs del curs: quina d'aquestes idees és correcta?|Repaso del curso: ¿cuál de estas ideas es correcta?", opts: ["Abans de compartir, comprovo; abans de publicar, penso; si alguna cosa em preocupa, ho explico|Antes de compartir, compruebo; antes de publicar, pienso; si algo me preocupa, lo cuento", 'La IA mai s\'equivoca|La IA nunca se equivoca', 'Les contrasenyes es comparteixen amb els amics|Las contraseñas se comparten con los amigos'], a: 0 },
        { k: 'digStory', ph: 'missio', scene: 'placa', who: 'both', mood: 'win', t: "L'escola organitza la <b>Setmana de la Ciutadania Digital</b> i us ha encarregat les campanyes! Cada persona en crearà una amb el tema que triï: contrasenyes, privadesa, bulos, IA, respecte o benestar. Les penjarem a la plaça… i a l'escola!|¡La escuela organiza la <b>Semana de la Ciudadanía Digital</b> y os ha encargado las campañas! Cada persona creará una con el tema que elija: contraseñas, privacidad, bulos, IA, respeto o bienestar. Las colgaremos en la plaza… ¡y en la escuela!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Campanya|Campaña', t: 'Què és una campanya?|¿Qué es una campaña?', anim: 'digCampaign',
            x: "Una <span class='hl'>campanya</span> és un conjunt de missatges (cartells, vídeos, xerrades) per fer que la gent <b>sàpiga</b> alguna cosa i <b>faci</b> alguna cosa. Té tres peces: <b>un missatge</b>, <b>un públic</b> i <b>una acció</b>.|Una <span class='hl'>campaña</span> es un conjunto de mensajes (carteles, vídeos, charlas) para que la gente <b>sepa</b> algo y <b>haga</b> algo. Tiene tres piezas: <b>un mensaje</b>, <b>un público</b> y <b>una acción</b>." },
          { k: 'Eslògan|Eslogan', t: 'Curt, positiu i fàcil de recordar|Corto, positivo y fácil de recordar', anim: 'digFilter',
            x: "L'<span class='hl'>eslògan</span> és la frase principal. Funciona si és <b>curt</b>, <b>positiu</b> (diu què fer, no fa por) i té ritme. «Pensa abans de publicar» s'enganxa millor que un paràgraf llarg.|El <span class='hl'>eslogan</span> es la frase principal. Funciona si es <b>corto</b>, <b>positivo</b> (dice qué hacer, no da miedo) y tiene ritmo. «Piensa antes de publicar» se queda mejor que un párrafo largo.",
            bad: "«INTERNET ÉS MOLT PERILLÓS!!!»|«¡¡¡INTERNET ES MUY PELIGROSO!!!»", good: "«Navega segur: comprova abans de compartir.»|«Navega seguro: comprueba antes de compartir.»" },
          { k: 'Públic|Público', t: 'Per a qui ho fas?|¿Para quién lo haces?', anim: 'digCircles',
            x: "No és el mateix parlar als <b>més petits</b> de l'escola, als <b>companys</b> o a les <b>famílies</b>. Tria per a qui és la teva campanya i adapta les paraules i els dibuixos.|No es lo mismo hablar a los <b>más pequeños</b> de la escuela, a los <b>compañeros</b> o a las <b>familias</b>. Elige para quién es tu campaña y adapta las palabras y los dibujos." },
          { k: 'Acció|Acción', t: 'Una crida a l\'acció|Una llamada a la acción', anim: 'digCheck',
            x: "Acaba amb una <b>acció concreta</b> que la gent pugui fer avui mateix: «Canvia la teva contrasenya per una frase de pas», «Revisa la privadesa amb la família», «Abans de reenviar, busca la font».|Acaba con una <b>acción concreta</b> que la gente pueda hacer hoy mismo: «Cambia tu contraseña por una frase de paso», «Revisa la privacidad con la familia», «Antes de reenviar, busca la fuente»." }
        ] },
        { k: 'digSort', ph: 'mans', q: "Aquests eslògans, ajuden o fan por?|Estos eslóganes, ¿ayudan o dan miedo?",
          bins: [{ t: 'Positiu: diu què fer|Positivo: dice qué hacer', ico: 'sun', c: '#1FA463' }, { t: 'Fa por o no ajuda|Da miedo o no ayuda', ico: 'block', c: '#EF5A5A' }],
          items: [
            { t: '«Una frase de pas, una clau de veritat»|«Una frase de paso, una llave de verdad»', ico: '🔐', b: 0 }, { t: '«A internet tothom et vol enganyar!!!»|«¡¡¡En internet todo el mundo te quiere engañar!!!»', ico: '😱', b: 1 },
            { t: '«Abans de reenviar, busca la font»|«Antes de reenviar, busca la fuente»', ico: '🔎', b: 0 }, { t: '«Les pantalles et fan malbé el cervell»|«Las pantallas te estropean el cerebro»', ico: '🧟', b: 1, ex: "Fa por i no és precís. Millor: «Pantalles sí, en equilibri».|Da miedo y no es preciso. Mejor: «Pantallas sí, en equilibrio»." },
            { t: '«Si ho veus, no ho comparteixis: ajuda»|«Si lo ves, no lo compartas: ayuda»', ico: '🤝', b: 0 }, { t: '«No facis res malament»|«No hagas nada mal»', ico: '🤷', b: 1, ex: "No diu què fer exactament.|No dice qué hacer exactamente." }
          ] },
        { k: 'digTalk', ph: 'investiga', scene: 'placa', who: 'both', q: "Quin tema necessita més la nostra escola?|¿Qué tema necesita más nuestra escuela?",
          stances: [{ t: 'Respecte|Respeto', ico: 'heart' }, { t: 'Bulos i IA|Bulos e IA', ico: 'lupa' }, { t: 'Privadesa i contrasenyes|Privacidad y contraseñas', ico: 'lock' }, { t: 'Pantalles i benestar|Pantallas y bienestar', ico: 'sun' }],
          voices: [{ f: 'jana', t: "Respecte, sense dubte. Quan els xats van bé, tot va millor.|Respeto, sin duda. Cuando los chats van bien, todo va mejor." },
            { f: 'marc', t: "Jo faria la de la IA: molta gent a casa no sap que s'equivoca.|Yo haría la de la IA: mucha gente en casa no sabe que se equivoca." },
            { f: 'leo', t: "La de les pantalles, per als més petits. Jo ho hauria volgut saber abans!|La de las pantallas, para los más pequeños. ¡Yo lo habría querido saber antes!" }],
          prompt: "Feu una votació i repartiu els temes perquè hi hagi campanyes de tots. Penseu a quin lloc de l'escola penjaríeu cada cartell perquè el vegi el seu públic.|Haced una votación y repartid los temas para que haya campañas de todos. Pensad en qué lugar de la escuela colgaríais cada cartel para que lo vea su público." },
        { k: 'quiz', ph: 'investiga', q: "Quina és la millor crida a l'acció per a una campanya sobre bulos?|¿Cuál es la mejor llamada a la acción para una campaña sobre bulos?",
          opts: ["«Abans de reenviar, busca qui ho diu»|«Antes de reenviar, busca quién lo dice»", "«Els bulos són dolents»|«Los bulos son malos»", "«Desconfia de tot i de tothom»|«Desconfía de todo y de todos»"], a: 0 },
        { k: 'move', ph: 'pausa', secs: 30, title: 'Megàfon!|¡Megáfono!', t: "Fes un megàfon amb les mans i crida (amb veu de campanya, sense fer mal a les orelles!) el teu eslògan preferit. Ara fes-lo amb gestos, sense veu: que els altres l'endevinin!|Haz un megáfono con las manos y grita (¡con voz de campaña, sin hacer daño a los oídos!) tu eslogan favorito. Ahora hazlo con gestos, sin voz: ¡que los demás lo adivinen!" },
        { k: 'digMake', ph: 'crea', tpl: 'campanya', name: 'La meva campanya|Mi campaña', q: "El gran projecte final: crea el <b>cartell de la teva campanya</b>. Tria el tema, el públic, l'eslògan i tres missatges, i acaba amb una acció.|El gran proyecto final: crea el <b>cartel de tu campaña</b>. Elige el tema, el público, el eslogan y tres mensajes, y acaba con una acción.",
          crit: ['Eslògan curt i positiu|Eslogan corto y positivo', '3 missatges que diuen què fer|3 mensajes que dicen qué hacer', 'Una crida a l\'acció|Una llamada a la acción'], minItems: 3, maxItems: 4,
          parts: [
            { id: 'pu', to: 'sub', k: 'pick', t: 'Per a qui és la campanya?|¿Para quién es la campaña?', opts: ['Per als més petits de l\'escola|Para los más pequeños de la escuela', 'Per als companys de classe|Para los compañeros de clase', 'Per a les famílies|Para las familias', 'Per a tota l\'escola|Para toda la escuela'] },
            { id: 'sl', to: 'slogan', k: 'text', t: 'Eslògan (curt i positiu)|Eslogan (corto y positivo)', req: 1, ph: 'p. ex. Pensa, comprova, comparteix|p. ej. Piensa, comprueba, comparte', len: 48 },
            { id: 'it', to: 'items', k: 'multi', t: 'Tria 3 missatges|Elige 3 mensajes', min: 3, max: 3, opts: [
              'Fes servir frases de pas|Usa frases de paso', "La contrasenya és secreta|La contraseña es secreta", 'Perfil privat i cap dada personal|Perfil privado y ningún dato personal', 'Pregunta abans de penjar fotos d\'altres|Pregunta antes de colgar fotos de otros',
              'Atura\'t i comprova abans de compartir|Párate y comprueba antes de compartir', "Una foto no és una prova si no saps d'on surt|Una foto no es una prueba si no sabes de dónde sale", "La IA es pot equivocar: comprova-ho|La IA se puede equivocar: compruébalo",
              'Cap dada personal en un xat amb IA|Ningún dato personal en un chat con IA', 'Abans d\'enviar: cert, amable, cal?|Antes de enviar: ¿cierto, amable, hace falta?', "Si ho veus, no ho comparteixis: dona suport|Si lo ves, no lo compartas: apoya",
              "Si alguna cosa et preocupa, explica-ho|Si algo te preocupa, cuéntalo", "Pantalles sí, en equilibri|Pantallas sí, en equilibrio", 'A dormir, pantalles fora|A dormir, pantallas fuera'] },
            { id: 'ow', to: 'items', k: 'own', t: 'Un missatge teu (opcional)|Un mensaje tuyo (opcional)', max: 1, ph: 'Curt i positiu|Corto y positivo', len: 60 },
            { id: 'ct', to: 'cta', k: 'pick', t: "Crida a l'acció|Llamada a la acción", opts: ["Canvia avui la teva contrasenya per una frase de pas!|¡Cambia hoy tu contraseña por una frase de paso!", 'Revisa la privadesa amb la teva família!|¡Revisa la privacidad con tu familia!', 'Abans de reenviar, busca la font!|¡Antes de reenviar, busca la fuente!', 'Envia avui un missatge amable!|¡Envía hoy un mensaje amable!', 'Aquesta nit, el mòbil fora de l\'habitació!|¡Esta noche, el móvil fuera de la habitación!', 'Si necessites ajuda: 900 20 20 10 (ANAR)|Si necesitas ayuda: 900 20 20 10 (ANAR)'] },
            ...dig5Look('dance')] },
        { k: 'unplug', ph: 'crea', ico: '📣', title: 'Llancem la campanya!|¡Lanzamos la campaña!', t: "Amb el professor/a i la classe:|Con el profesor/a y la clase:",
          steps: ["Imprimiu o copieu els cartells en gran (es poden ensenyar des de «Projectes»).|Imprimid o copiad los carteles en grande (se pueden enseñar desde «Proyectos»).",
            "Cada persona presenta la seva campanya en 30 segons: tema, públic i acció.|Cada persona presenta su campaña en 30 segundos: tema, público y acción.",
            "Pengeu-los on els vegi el seu públic: el passadís dels petits, la porta de l'escola, la web de la classe…|Colgadlos donde los vea su público: el pasillo de los pequeños, la puerta de la escuela, la web de la clase…",
            "Si podeu, expliqueu la campanya a una altra classe. Ensenyar és la millor manera d'aprendre!|Si podéis, explicad la campaña a otra clase. ¡Enseñar es la mejor manera de aprender!"] },
        { k: 'digTalk', ph: 'tanca', scene: 'placa', who: 'both', mood: 'win', q: "Què t'emportes d'aquest curs?|¿Qué te llevas de este curso?",
          stances: [{ t: 'Saber protegir-me|Saber protegerme', ico: 'shield' }, { t: 'Pensar abans de creure|Pensar antes de creer', ico: 'lupa' }, { t: 'Entendre la IA|Entender la IA', ico: 'brain' }, { t: 'Cuidar els altres|Cuidar a los demás', ico: 'heart' }],
          voices: [{ f: 'aina', t: "Ara la meva contrasenya és una frase de pas que només sé jo (i la meva mare).|Ahora mi contraseña es una frase de paso que solo sé yo (y mi madre)." },
            { f: 'omar', t: "Jo he après que avisar un adult no és xivar-se. És ajudar.|Yo he aprendido que avisar a un adulto no es chivarse. Es ayudar." },
            { f: 'jana', t: "I jo, que la IA no pensa com nosaltres: cal revisar el que diu!|Y yo, que la IA no piensa como nosotros: ¡hay que revisar lo que dice!" }],
          prompt: "Feu una roda: cadascú diu en una frase una cosa que farà diferent a partir d'ara a internet.|Haced una rueda: cada uno dice en una frase algo que hará diferente a partir de ahora en internet." },
        { k: 'quiz', ph: 'tanca', q: "Quines són les tres peces d'una campanya?|¿Cuáles son las tres piezas de una campaña?", opts: ['Un missatge, un públic i una acció|Un mensaje, un público y una acción', 'Un títol, un color i un dibuix|Un título, un color y un dibujo', 'Molts likes, molts seguidors i molta por|Muchos likes, muchos seguidores y mucho miedo'], a: 0 },
        dig5Feel
      ] }
  ] });
}
