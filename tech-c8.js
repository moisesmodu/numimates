/* Numi Tech · Tech IA · sessions de les unitats. Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */
(function () {
const COURSE_UNITS = {};

/* ── unitat 1 ── */
/* Tech IA · unitat 1 «Què hi ha dins una IA?» (i1-1 … i1-4)
   Contingut propi de Numi. Mostra de referència per als agents de contingut (vegeu scripts/TECH-IA.md): la sessió i1-1
   és completa (pas iangram: un model de llenguatge de bigrames que es pot entrenar i fer generar); i1-2 … i1-4 encara
   són «en preparació» (sense steps). Exemples inventats: el conte de la nau, el gat que dorm, els planetes Zorix. */
Object.assign(TBADGE, {
  i_ngram: { id: 'i_ngram', ico: '🔮', n: 'Endevinaire de paraules|Adivinador de palabras', d: "Has construït un model de llenguatge que prediu la paraula següent i l'has fet generar.|Has construido un modelo de lenguaje que predice la palabra siguiente y lo has hecho generar." }
});

COURSE_UNITS[1] = { t: 'Què hi ha dins una IA?|¿Qué hay dentro de una IA?', d: 'Prediccions, dades i probabilitat|Predicciones, datos y probabilidad', color: '#A23BEA', s: [

  /* ---------- Sessió 1 · Endevina la paraula següent ---------- */
  { id: 'i1-1', t: 'Endevina la paraula següent|Adivina la palabra siguiente', min: 45, badge: 'i_ngram',
    learn: ["Un model de llenguatge no pensa: calcula quina paraula (o fitxa) és més probable que vingui després i la va afegint.|Un modelo de lenguaje no piensa: calcula qué palabra (o ficha) es más probable que venga después y la va añadiendo.",
      "Les IA d'avui aprenen de dades: el que no hi ha a les dades no ho poden predir, i amb més dades i més variades, prediuen millor.|Las IA de hoy aprenden de datos: lo que no está en los datos no lo pueden predecir, y con más datos y más variados, predicen mejor.",
      "La temperatura decideix si el model tria sempre la més probable (previsible) o s'arrisca (original, de vegades absurd).|La temperatura decide si el modelo elige siempre la más probable (previsible) o se arriesga (original, a veces absurdo)."],
    steps: [
      { k: 'quiz', ph: 'recorda', q: "Quan escrius al mòbil, el teclat et proposa la paraula següent. Com creus que ho fa?|Cuando escribes en el móvil, el teclado te propone la palabra siguiente. ¿Cómo crees que lo hace?",
        opts: ["Ha comptat quines paraules solen venir després en molts textos|Ha contado qué palabras suelen venir después en muchos textos", "Entén el que vols dir, com una persona|Entiende lo que quieres decir, como una persona", "Té guardades totes les frases que existeixen|Tiene guardadas todas las frases que existen"], a: 0,
        ex: "Avui ho comprovaràs construint el teu propi model.|Hoy lo comprobarás construyendo tu propio modelo." },
      { k: 'story', ph: 'missio', who: 'both', scene: 'estudi', title: 'Obrim una IA per dins|Abrimos una IA por dentro',
        t: "Benvinguts i benvingudes a <b>Tech IA</b>! Els xats d'IA escriuen, resumeixen i responen preguntes. Però què hi ha a dins? Avui en construirem un de minúscul que només fa una cosa: <b>endevinar la paraula següent</b>. És la mateixa idea que fan servir els models grans… a una escala molt més petita.|¡Bienvenidos y bienvenidas a <b>Tech IA</b>! Los chats de IA escriben, resumen y responden preguntas. Pero ¿qué hay dentro? Hoy construiremos uno minúsculo que solo hace una cosa: <b>adivinar la palabra siguiente</b>. Es la misma idea que usan los modelos grandes… a una escala mucho más pequeña." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Model de llenguatge|Modelo de lenguaje', t: 'Una IA no pensa: prediu|Una IA no piensa: predice', anim: 'i1pred',
          x: "Un <span class='hl'>model de llenguatge</span> rep un text i calcula quina <b>fitxa</b> (una paraula o un tros de paraula) és més probable que vingui després. L'afegeix i torna a començar. Fitxa a fitxa, surt un text sencer.|Un <span class='hl'>modelo de lenguaje</span> recibe un texto y calcula qué <b>ficha</b> (una palabra o un trozo de palabra) es más probable que venga después. La añade y vuelve a empezar. Ficha a ficha, sale un texto entero." },
        { k: 'Regles o dades?|¿Reglas o datos?', t: 'Dues maneres de fer un programa «llest»|Dos maneras de hacer un programa «listo»', anim: 'i1regles',
          x: "Amb <b>regles</b>, una persona escriu què cal fer en cada cas («si diu hola, respon hola»). Amb <b>dades</b>, el programa troba els patrons sol a partir de molts exemples. Les IA d'avui aprenen sobretot de dades.|Con <b>reglas</b>, una persona escribe qué hay que hacer en cada caso («si dice hola, responde hola»). Con <b>datos</b>, el programa encuentra los patrones solo a partir de muchos ejemplos. Las IA de hoy aprenden sobre todo de datos.",
          tip: "Un filtre d'spam amb regles falla quan l'spam canvia una paraula; un d'après amb dades se n'adona si ha vist prou exemples.|Un filtro de spam con reglas falla cuando el spam cambia una palabra; uno aprendido con datos se da cuenta si ha visto suficientes ejemplos." },
        { k: 'Comptar|Contar', t: 'El model més senzill: comptar parelles|El modelo más sencillo: contar parejas', media: { k: 'ia', demo: 'ngram', text: 'el gat menja. el gat dorm. el gat dorm. el gos corre.|el gato come. el gato duerme. el gato duerme. el perro corre.', ctx: 'el gat|el gato' },
          x: "Un <b>bigrama</b> compta quina paraula ve després de cada paraula. Després de «gat», a les dades hi ha «dorm» 2 cops i «menja» 1 cop: per això «dorm» té un 67 %.|Un <b>bigrama</b> cuenta qué palabra viene después de cada palabra. Después de «gato», en los datos hay «duerme» 2 veces y «come» 1 vez: por eso «duerme» tiene un 67 %." },
        { k: 'Probabilitat|Probabilidad', t: 'Més dades, millors prediccions|Más datos, mejores predicciones', anim: 'i1prob',
          x: "La probabilitat és quantes vegades passa una cosa dividit pel total de vegades. Si el model ha llegit poc, s'equivoca molt; si llegeix més textos i més variats, les prediccions s'assemblen més a com escrivim de veritat.|La probabilidad es cuántas veces pasa algo dividido por el total de veces. Si el modelo ha leído poco, se equivoca mucho; si lee más textos y más variados, las predicciones se parecen más a cómo escribimos de verdad." },
        { k: 'Temperatura|Temperatura', t: 'Previsible o sorprenent?|¿Previsible o sorprendente?', anim: 'i1temp',
          x: "En generar, la <b>temperatura</b> decideix com s'arrisca el model. Baixa: tria gairebé sempre la més probable (text previsible). Alta: tria també paraules poc probables (text original… o absurd).|Al generar, la <b>temperatura</b> decide cuánto se arriesga el modelo. Baja: elige casi siempre la más probable (texto previsible). Alta: elige también palabras poco probables (texto original… o absurdo)." }
      ] },
      { k: 'unplug', ph: 'mans', ico: '🧑‍🤝‍🧑', title: 'El model humà|El modelo humano', t: "En grups de tres, amb el full «Comptem parelles».|En grupos de tres, con la hoja «Contamos parejas».",
        steps: ["Llegiu el text curt del full.|Leed el texto corto de la hoja.", "Per a «el», «la» i «un», apunteu amb ratlletes quina paraula ve després cada vegada.|Para «el», «la» y «un», apuntad con rayitas qué palabra viene después cada vez.",
          "Ara un de vosaltres fa de model: només pot dir la paraula amb més ratlletes. Genereu una frase entre tots.|Ahora uno de vosotros hace de modelo: solo puede decir la palabra con más rayitas. Generad una frase entre todos.",
          "Repetiu-ho tirant un dau per triar entre les dues més votades: és com pujar la temperatura.|Repetidlo tirando un dado para elegir entre las dos más votadas: es como subir la temperatura."],
        tip: "Fixeu-vos-hi: el «model» no entén el text, només compta.|Fijaos: el «modelo» no entiende el texto, solo cuenta." },
      { k: 'quiz', ph: 'prova', q: "Després de «bon», unes dades tenen: «dia» 6 vegades, «any» 3 vegades i «viatge» 1 vegada. Quina probabilitat té «dia»?|Después de «buen», unos datos tienen: «día» 6 veces, «año» 3 veces y «viaje» 1 vez. ¿Qué probabilidad tiene «día»?",
        opts: ['60 %|60 %', '6 %|6 %', '33 %|33 %'], a: 0, ex: "6 de 10 vegades: 6 ÷ 10 = 0,6, és a dir, un 60 %.|6 de 10 veces: 6 ÷ 10 = 0,6, es decir, un 60 %." },
      { k: 'iangram', ph: 'prova', q: "Aquest model ha llegit un conte curt. <b>Escriu un començament</b> i mira quines paraules preveu. Toca una barra per afegir-la i després toca «Genera».|Este modelo ha leído un cuento corto. <b>Escribe un comienzo</b> y mira qué palabras prevé. Toca una barra para añadirla y luego toca «Genera».",
        text: "la nau va sortir de nit. la nau portava tres robots. el primer robot cantava. el segon robot dormia. el tercer robot mirava les estrelles. les estrelles eren blaves. la nau va arribar a un planeta blau. al planeta blau hi vivia una tortuga. la tortuga parlava amb els robots. els robots es van fer amics de la tortuga.|la nave salió de noche. la nave llevaba tres robots. el primer robot cantaba. el segundo robot dormía. el tercer robot miraba las estrellas. las estrellas eran azules. la nave llegó a un planeta azul. en el planeta azul vivía una tortuga. la tortuga hablaba con los robots. los robots se hicieron amigos de la tortuga.",
        ctx: 'la nau|la nave', checks: [{ k: 'gen' }] },
      { k: 'quiz', ph: 'investiga', q: "El model de la nau només fa frases amb paraules del conte. Per què?|El modelo de la nave solo hace frases con palabras del cuento. ¿Por qué?",
        opts: ["Només pot predir fitxes que ha vist a les dades|Solo puede predecir fichas que ha visto en los datos", "Perquè li agraden els contes|Porque le gustan los cuentos", "Perquè la temperatura és massa baixa|Porque la temperatura es demasiado baja"], a: 0,
        ex: "Un model només sap el que hi ha a les seves dades. Els models grans han llegit milers de milions de textos: per això semblen saber de tot.|Un modelo solo sabe lo que hay en sus datos. Los modelos grandes han leído miles de millones de textos: por eso parecen saber de todo." },
      { k: 'move', ph: 'pausa', title: 'Pausa activa: la cadena de paraules|Pausa activa: la cadena de palabras', secs: 45,
        t: "Dempeus! La primera persona diu una paraula i la següent n'ha de dir una que hi pugui anar darrere. Si la frase té sentit, tothom fa un salt.|¡De pie! La primera persona dice una palabra y la siguiente tiene que decir una que pueda ir detrás. Si la frase tiene sentido, todo el mundo da un salto." },
      { k: 'iangram', ph: 'repte', q: "Aquest model només ha llegit tres frases. <b>Afegeix-li dades</b> perquè després de «el gat» la paraula més probable sigui «dorm».|Este modelo solo ha leído tres frases. <b>Añádele datos</b> para que después de «el gato» la palabra más probable sea «duerme».",
        text: "el gat menja peix. el gat corre pel pati. el gos dorm al sofà.|el gato come pescado. el gato corre por el patio. el perro duerme en el sofá.", ctx: 'el gat|el gato',
        add: ['el gat dorm molt.|el gato duerme mucho.', 'el gat dorm a la cadira.|el gato duerme en la silla.', 'a la nit el gat dorm.|por la noche el gato duerme.'],
        checks: [{ k: 'top', ctx: 'el gat|el gato', next: 'dorm|duerme' }, { k: 'gen' }],
        pro: { n: 3, orders: [2, 3], q: "Ara el model pot mirar <b>dues paraules enrere</b>. Afegeix dades perquè després de «el gat» guanyi «dorm», posa'l a mirar 2 paraules i genera amb temperatura baixa i alta.|Ahora el modelo puede mirar <b>dos palabras atrás</b>. Añade datos para que después de «el gato» gane «duerme», ponlo a mirar 2 palabras y genera con temperatura baja y alta.",
          checks: [{ k: 'top', ctx: 'el gat|el gato', next: 'dorm|duerme' }, { k: 'order', min: 3 }, { k: 'temp' }] } },
      { k: 'iangram', ph: 'repte', q: "Aquest model creu que després de «avui» sempre ve «plou». <b>Afegeix-li frases</b> perquè «plou» baixi fins al 40 % o menys.|Este modelo cree que después de «hoy» siempre viene «llueve». <b>Añádele frases</b> para que «llueve» baje hasta el 40 % o menos.",
        text: "avui plou. avui plou molt. avui plou a la ciutat. demà fa sol.|hoy llueve. hoy llueve mucho. hoy llueve en la ciudad. mañana hace sol.", ctx: 'avui|hoy',
        add: ['avui fa sol.|hoy hace sol.', 'avui tenim examen.|hoy tenemos examen.', 'avui anem al parc.|hoy vamos al parque.', 'avui fa vent.|hoy hace viento.', 'avui toca natació.|hoy toca natación.'],
        checks: [{ k: 'prob', ctx: 'avui|hoy', next: 'plou|llueve', max: .4 }] },
      { k: 'iangram', ph: 'repte', extra: true, unit: 'char', n: 4, q: "⭐ Ara el model aprèn <b>lletres</b>, no paraules. Amb noms de planetes inventats, fes que després de «zor» la lletra més probable sigui la «a».|⭐ Ahora el modelo aprende <b>letras</b>, no palabras. Con nombres de planetas inventados, haz que después de «zor» la letra más probable sea la «a».",
        text: 'zorix zorup kelan zorup mirax|zorix zorup kelan zorup mirax', ctx: 'zor|zor', add: ['zoraki|zoraki', 'zorana|zorana', 'zorat|zorat'],
        checks: [{ k: 'top', ctx: 'zor|zor', next: 'a|a' }, { k: 'gen' }] },
      { k: 'quiz', ph: 'repte', q: "Vols que el model escrigui un títol original per a un conte, encara que de vegades surti estrany. Quina temperatura tries?|Quieres que el modelo escriba un título original para un cuento, aunque a veces salga raro. ¿Qué temperatura eliges?",
        opts: ['Alta (1,5)|Alta (1,5)', 'Zero (0)|Cero (0)', 'Baixa (0,2)|Baja (0,2)'], a: 0,
        ex: "Amb temperatura alta s'arrisca amb paraules poc probables: més original. Per a una resposta fiable (un resum, una dada), millor baixa.|Con temperatura alta se arriesga con palabras poco probables: más original. Para una respuesta fiable (un resumen, un dato), mejor baja." },
      { k: 'iangram', ph: 'crea', edit: true, orders: [2, 3], save: true, name: 'El meu mini model|Mi mini modelo',
        q: "<b>El teu mini model.</b> Esborra el text i escriu-ne un de teu (una cançó, frases típiques de la classe, un conte…) d'almenys 40 paraules. Després genera amb una temperatura baixa i una d'alta.|<b>Tu mini modelo.</b> Borra el texto y escribe uno tuyo (una canción, frases típicas de la clase, un cuento…) de al menos 40 palabras. Después genera con una temperatura baja y una alta.",
        text: 'Escriu aquí el teu text.|Escribe aquí tu texto.', ctx: '',
        sol: "a la classe de tecnologia fem robots i webs. a la classe de música cantem cançons. a l'hora del pati fem esport amb els amics. el dilluns fem dibuix i el dimarts fem ciències. a la tarda llegim llibres i escrivim contes curts sobre planetes i robots.|en la clase de tecnología hacemos robots y webs. en la clase de música cantamos canciones. a la hora del patio hacemos deporte con los amigos. el lunes hacemos dibujo y el martes hacemos ciencias. por la tarde leemos libros y escribimos cuentos cortos sobre planetas y robots.",
        checks: [{ k: 'words', min: 40 }, { k: 'vocab', min: 25 }, { k: 'temp' }] },
      { k: 'quiz', ph: 'tanca', q: "Els xats d'IA grans, en el fons, fan…|Los chats de IA grandes, en el fondo, hacen…",
        opts: ["El mateix que el nostre model, però amb una xarxa neuronal enorme i milers de milions de textos|Lo mismo que nuestro modelo, pero con una red neuronal enorme y miles de millones de textos", "Busquen la resposta en una base de dades de respostes correctes|Buscan la respuesta en una base de datos de respuestas correctas", "Pensen i entenen com les persones|Piensan y entienden como las personas"], a: 0,
        ex: "Prediuen fitxa a fitxa. No compten parelles com nosaltres, sinó que fan servir una xarxa neuronal, però la idea de fons és la mateixa.|Predicen ficha a ficha. No cuentan parejas como nosotros, sino que usan una red neuronal, pero la idea de fondo es la misma." },
      { k: 'quiz', ph: 'tanca', q: "Per què un model de llenguatge pot dir una cosa falsa amb molta seguretat?|¿Por qué un modelo de lenguaje puede decir algo falso con mucha seguridad?",
        opts: ["Perquè tria el que és probable, no el que és veritat|Porque elige lo que es probable, no lo que es verdad", "Perquè ens vol enganyar|Porque nos quiere engañar", "Perquè està espatllat|Porque está estropeado"], a: 0,
        ex: "Per això, a la unitat 3 aprendrem a comprovar el que diu: les famoses «al·lucinacions».|Por eso, en la unidad 3 aprenderemos a comprobar lo que dice: las famosas «alucinaciones»." },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessions 2-4: en preparació (sense steps) ---------- */
  { id: 'i1-2', t: 'Regles o dades?|¿Reglas o datos?' },
  { id: 'i1-3', t: 'Probabilitat i temperatura|Probabilidad y temperatura' },
  { id: 'i1-4', t: 'Projecte: el meu mini model de llenguatge|Proyecto: mi mini modelo de lenguaje', proj: true }
] };

const c = TECH.find(x => x.id === 'ia'); delete c.soon;
for (const [n, u] of Object.entries(COURSE_UNITS)) c.units[n - 1] = u;
})();
