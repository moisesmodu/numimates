/* Numi Tech · Tech Spike · sessions de les unitats. Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */
(function () {
const COURSE_UNITS = {};

/* ── unitat 1 ── */
/* Tech Spike · unitat 1 «Missió Parc d'Atraccions» (s1-1 … s1-4). 7-9 anys, equips de 3, un ordinador i un kit per equip.
   Es treballa amb el kit LEGO® Education SPIKE™ Essential i la seva app: Numi guia la sessió i els passos «spk» són la feina
   amb el kit. Els models es munten amb les instruccions públiques de LEGO Education (enllaçades, no copiades). */
const SPK_PDF = 'https://assets.education.lego.com/v3/assets/blt293eea581807678a/';
// pas amb el kit real: què cal fer, les instruccions de muntatge si n'hi ha i, en acabar, «Ho hem aconseguit!»
if (typeof TSTEP !== 'undefined') TSTEP.spk = function (st) {
  $('#tsb').innerHTML = `<div class="tcol"><div class="tunp"><div class="tunph"><span class="tunpi">${st.ico || '🧩'}</span><div><small>${L('Amb el kit SPIKE', 'Con el kit SPIKE')}</small><h2>${tval(st.title)}</h2></div></div>
    <p class="tunpx">${tval(st.t)}</p>${st.steps ? `<ol>${st.steps.map(x => `<li>${tval(x)}</li>`).join('')}</ol>` : ''}${st.pdf ? `<p><a class="btn" style="text-decoration:none" href="${st.pdf}" target="_blank" rel="noopener">${L('Obre les instruccions de muntatge', 'Abre las instrucciones de montaje')}</a></p>` : ''}${st.tip ? `<p class="ttip">${tx(st.tip)}</p>` : ''}</div></div>`;
  tFoot(st.done ? tx(st.done) : L('Ho hem aconseguit!', '¡Lo hemos conseguido!'), () => { addXPsafe(5); tNext(); }, true);
};
if (typeof TKIND !== 'undefined') TKIND.spk = ['Amb el kit SPIKE', 'Con el kit SPIKE', 'Muntar i programar amb el kit de veritat.', 'Montar y programar con el kit de verdad.'];
Object.assign(TBADGE, {
  spk_motor: { id: 'spk_motor', ico: '🔧', n: 'Mestre del motor|Maestro del motor', d: 'Has fet girar un motor i has decidit cap on, com de ràpid i quanta estona.|Has hecho girar un motor y has decidido hacia dónde, cómo de rápido y cuánto tiempo.' },
  spk_seq: { id: 'spk_seq', ico: '🏁', n: 'Pilot de neu|Piloto de nieve', d: 'Has programat una anada i tornada posant les ordres en ordre.|Has programado una ida y vuelta poniendo las órdenes en orden.' },
  spk_si: { id: 'spk_si', ico: '🔍', n: 'Lector de colors|Lector de colores', d: 'Has fet que un robot miri un color i decideixi què fer.|Has hecho que un robot mire un color y decida qué hacer.' },
  spk_fira: { id: 'spk_fira', ico: '🏆', n: "Enginyer/a d'atraccions|Ingeniero/a de atracciones", d: 'Has dissenyat, construït i programat una atracció pròpia.|Has diseñado, construido y programado una atracción propia.' }
});
const SPK_ROLES = "Busca-peces, constructor/a i programador/a: us aneu canviant la feina.|Buscapiezas, constructor/a y programador/a: os vais cambiando el trabajo.";

COURSE_UNITS[1] = { t: "Missió Parc d'Atraccions|Misión Parque de Atracciones", d: 'Motors, ordres i sensors amb SPIKE Essential|Motores, órdenes y sensores con SPIKE Essential', color: '#E8772E', s: [

  /* ---------- Sessió 1 · El carrusel ---------- */
  { id: 's1-1', t: 'El carrusel de la Sofie|El carrusel de Sofie', min: 45, badge: 'spk_motor',
    learn: ['Un motor fa el que li diem: cap a quin costat gira, com de ràpid i quanta estona.|Un motor hace lo que le decimos: hacia qué lado gira, cómo de rápido y cuánto tiempo.',
      'El hub és el cervell del robot: rep el programa i dona les ordres al motor pel cable.|El hub es el cerebro del robot: recibe el programa y da las órdenes al motor por el cable.',
      'Els enginyers proven, miren què passa i ho milloren.|Los ingenieros prueban, miran qué pasa y lo mejoran.'],
    steps: [
      { k: 'story', ph: 'missio', who: 'both', scene: 'taller', title: 'Comença la missió!|¡Empieza la misión!', t: "El parc d'atraccions obre d'aquí a <b>quatre setmanes</b> i encara no té atraccions! Vosaltres sou l'equip d'enginyers. La primera: un <b>carrusel</b> per a la Sofie.|¡El parque de atracciones abre dentro de <b>cuatro semanas</b> y aún no tiene atracciones! Vosotros sois el equipo de ingenieros. La primera: un <b>carrusel</b> para Sofie." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'El motor|El motor', t: 'Un motor obeeix|Un motor obedece', anim: 'spkmotor', x: 'El <span class="hl">motor</span> fa girar les coses. El programa li diu tres coses: cap a on, com de ràpid i quanta estona.|El <span class="hl">motor</span> hace girar las cosas. El programa le dice tres cosas: hacia dónde, cómo de rápido y cuánto tiempo.' },
        { k: 'El hub|El hub', t: 'El cervell del robot|El cerebro del robot', anim: 'spkports', x: 'El <span class="hl">hub</span> és la caixa groga. Rep el programa de l\'ordinador i té <b>dos forats</b> per als cables.|El <span class="hl">hub</span> es la caja amarilla. Recibe el programa del ordenador y tiene <b>dos huecos</b> para los cables.', tip: 'Abans de res: encén el hub i busca el nom del vostre equip a l\'app.|Antes de nada: enciende el hub y busca el nombre de vuestro equipo en la app.' }
      ] },
      { k: 'spk', ph: 'mans', ico: '🧩', title: 'Construïm el carrusel|Construimos el carrusel', t: SPK_ROLES, pdf: SPK_PDF + 'blt27cf3aba3ebccf38/5f572f6c4b239959f43aa72a/U2L2.pdf', steps: ['Té 12 passos: mireu-los un a un.|Tiene 12 pasos: miradlos uno a uno.', 'Cada 5 passos, canvieu de feina.|Cada 5 pasos, cambiad de trabajo.', 'Connecteu el cable del motor al hub.|Conectad el cable del motor al hub.'], done: 'Ja està construït!|¡Ya está construido!' },
      { k: 'spk', ph: 'repte', ico: '🎯', title: 'Repte 1: fes-lo girar|Reto 1: hazlo girar', t: "A l'app SPIKE, crea un programa que faci girar el carrusel. Prova'l!|En la app SPIKE, crea un programa que haga girar el carrusel. ¡Pruébalo!", tip: "Si el motor no es mou, empeny bé el cable i mira quin port fa servir el programa.|Si el motor no se mueve, empuja bien el cable y mira qué puerto usa el programa." },
      { k: 'quiz', ph: 'prova', q: 'Vols que el carrusel giri cap a l\'altre costat. Què canvies?|Quieres que el carrusel gire hacia el otro lado. ¿Qué cambias?', opts: ['El sentit del motor al programa|El sentido del motor en el programa', 'El color de les peces|El color de las piezas', 'El lloc on és l\'ordinador|El sitio donde está el ordenador'], a: 0, ex: 'El programa decideix cap on gira el motor.|El programa decide hacia dónde gira el motor.' },
      { k: 'spk', ph: 'repte', ico: '🎯', title: 'Repte 2: la Sofie es mareja!|Reto 2: ¡Sofie se marea!', t: 'Fes que giri més a poc a poc. Després, cap a l\'altre costat.|Haz que gire más despacio. Después, hacia el otro lado.' },
      { k: 'spk', ph: 'crea', ico: '🚩', title: 'Repte 3: millora el carrusel|Reto 3: mejora el carrusel', t: 'Amb peces de la caixa, afegeix-hi el que vulguis: un seient, una bandera, un sostre…|Con piezas de la caja, añade lo que quieras: un asiento, una bandera, un techo…', tip: 'Prova\'l després de cada canvi: ha de continuar girant!|Pruébalo después de cada cambio: ¡tiene que seguir girando!' },
      { k: 'quiz', ph: 'tanca', q: 'Què és el hub?|¿Qué es el hub?', opts: ['El cervell del robot|El cerebro del robot', 'Una roda|Una rueda', 'Un cable|Un cable'], a: 0, ex: 'Rep el programa i dona les ordres.|Recibe el programa y da las órdenes.' },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 2 · La moto de neu ---------- */
  { id: 's1-2', t: 'La moto de neu del Leo|La moto de nieve de Leo', min: 45, badge: 'spk_seq',
    learn: ["Un programa és una llista d'ordres, i l'ordre importa.|Un programa es una lista de órdenes, y el orden importa.",
      'Com més temps funciona el motor, més lluny arriba la moto.|Cuanto más tiempo funciona el motor, más lejos llega la moto.',
      'Abans de provar, val la pena predir què passarà.|Antes de probar, vale la pena predecir qué pasará.'],
    steps: [
      { k: 'quiz', ph: 'recorda', q: 'Què decideix el programa del motor?|¿Qué decide el programa del motor?', opts: ['Cap on, com de ràpid i quanta estona|Hacia dónde, cómo de rápido y cuánto tiempo', 'De quin color és|De qué color es', 'Quant pesa|Cuánto pesa'], a: 0 },
      { k: 'story', ph: 'missio', who: 'both', scene: 'taller', title: 'Una atracció de neu|Una atracción de nieve', t: 'El Leo vol una <b>moto de neu</b> que vagi fins a un bloc de gel i <b>torni sola</b> a la sortida. Avui fem servir <b>dos motors</b>!|Leo quiere una <b>moto de nieve</b> que vaya hasta un bloque de hielo y <b>vuelva sola</b> a la salida. ¡Hoy usamos <b>dos motores</b>!' },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Seqüència|Secuencia', t: 'Primer una cosa, després l\'altra|Primero una cosa, después la otra', anim: 'spkseq', x: 'El robot fa les ordres <span class="hl">d\'una en una i en ordre</span>. Si les canvies de lloc, fa una altra cosa!|El robot hace las órdenes <span class="hl">de una en una y en orden</span>. Si las cambias de sitio, ¡hace otra cosa!' },
        { k: 'Temps|Tiempo', t: 'Més temps, més lluny|Más tiempo, más lejos', anim: 'spktemps', x: 'Com més temps funcionen els motors, més lluny arriba la moto. Aquest és el secret del repte d\'avui.|Cuanto más tiempo funcionan los motores, más lejos llega la moto. Este es el secreto del reto de hoy.' }
      ] },
      { k: 'spk', ph: 'mans', ico: '🧩', title: 'Construïm la moto de neu|Construimos la moto de nieve', t: SPK_ROLES, pdf: SPK_PDF + 'blt422ad72d05bae50b/5f572ef4d4365e467aa95f1d/U1L2.pdf', steps: ['Té 26 passos: aneu amb calma i canvieu de feina cada 5.|Tiene 26 pasos: id con calma y cambiad de trabajo cada 5.', 'Connecteu els dos motors al hub.|Conectad los dos motores al hub.', 'Connecteu el hub per Bluetooth, sense el cable USB: la moto s\'ha de moure!|Conectad el hub por Bluetooth, sin el cable USB: ¡la moto tiene que moverse!'], done: 'Ja està construïda!|¡Ya está construida!' },
      { k: 'spk', ph: 'repte', ico: '🏁', title: 'Repte 1: endavant!|Reto 1: ¡adelante!', t: 'Porta la moto a la sortida de la pista i fes-la avançar.|Lleva la moto a la salida de la pista y hazla avanzar.', tip: 'Si gira en rodó, un motor va al revés: canvia el sentit d\'un dels dos.|Si gira en círculo, un motor va al revés: cambia el sentido de uno de los dos.' },
      { k: 'quiz', ph: 'prova', q: 'Amb 2 segons, la moto arriba a mitja pista. Què proves per arribar al final?|Con 2 segundos, la moto llega a media pista. ¿Qué pruebas para llegar al final?', opts: ['Uns 4 segons|Unos 4 segundos', 'Uns 2 segons|Unos 2 segundos', '1 segon|1 segundo'], a: 0, ex: 'El doble de temps, més o menys el doble de lluny. Després, a provar i ajustar!|El doble de tiempo, más o menos el doble de lejos. Después, ¡a probar y ajustar!' },
      { k: 'spk', ph: 'repte', ico: '🧊', title: 'Repte 2: atura\'t al bloc de gel|Reto 2: párate en el bloque de hielo', t: 'Primer, predieu quant temps cal i apunteu-ho. Després proveu-ho i ajusteu.|Primero, predecid cuánto tiempo hace falta y apuntadlo. Después probadlo y ajustad.' },
      { k: 'seq', ph: 'investiga', q: 'Posa en ordre el programa d\'anar i tornar.|Pon en orden el programa de ir y volver.', items: ['Endavant fins al bloc de gel|Adelante hasta el bloque de hielo', 'Atura\'t un moment|Párate un momento', 'Enrere fins a la sortida|Atrás hasta la salida', 'Atura\'t a la sortida|Párate en la salida'] },
      { k: 'spk', ph: 'crea', ico: '🏁', title: 'Repte 3: torna a casa|Reto 3: vuelve a casa', t: 'Ara la moto ha d\'anar fins al bloc de gel i tornar a la sortida.|Ahora la moto tiene que ir hasta el bloque de hielo y volver a la salida.', tip: 'Al final, mini cursa: qui s\'atura més a prop de la línia?|Al final, minicarrera: ¿quién se para más cerca de la línea?' },
      { k: 'quiz', ph: 'tanca', q: 'Què passa si canvies l\'ordre de les ordres?|¿Qué pasa si cambias el orden de las órdenes?', opts: ['El robot fa una altra cosa|El robot hace otra cosa', 'No canvia res|No cambia nada', 'S\'apaga el hub|Se apaga el hub'], a: 0 },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 3 · L'entrada amb tiquets ---------- */
  { id: 's1-3', t: "L'entrada amb tiquets|La entrada con tiques", min: 45, badge: 'spk_si',
    learn: ['Un sensor és com un ull: li diu al robot què hi ha davant.|Un sensor es como un ojo: le dice al robot qué hay delante.',
      'Si passa això, fes allò: així decideix un robot.|Si pasa esto, haz aquello: así decide un robot.',
      'Perquè un programa continuï mirant, s\'ha de repetir.|Para que un programa siga mirando, tiene que repetirse.'],
    steps: [
      { k: 'quiz', ph: 'recorda', q: 'Per fer que la moto arribi més lluny, què canvies?|Para que la moto llegue más lejos, ¿qué cambias?', opts: ['Més temps de motor|Más tiempo de motor', 'Menys rodes|Menos ruedas', 'El color de la moto|El color de la moto'], a: 0 },
      { k: 'story', ph: 'missio', who: 'both', scene: 'taller', title: 'Hi ha cua!|¡Hay cola!', t: 'Al parc hi ha cua! Construirem una <b>entrada que llegeix el color del tiquet</b> i decideix qui pot passar.|¡En el parque hay cola! Vamos a construir una <b>entrada que lee el color de la tique</b> y decide quién puede pasar.' },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Sensor|Sensor', t: 'Si veu aquest color, fes això|Si ve este color, haz esto', anim: 'spksi', x: 'El <span class="hl">sensor de color</span> mira el tiquet. El programa diu què fer amb cada color.|El <span class="hl">sensor de color</span> mira la tique. El programa dice qué hacer con cada color.', tip: 'Avui connectem el sensor i la llum: ja tenim els 2 ports plens!|Hoy conectamos el sensor y la luz: ¡ya tenemos los 2 puertos llenos!' }
      ] },
      { k: 'spk', ph: 'mans', ico: '🧩', title: "Construïm l'entrada|Construimos la entrada", t: SPK_ROLES, pdf: SPK_PDF + 'blt9115adc81f968063/5f572fa44b239959f43aa72e/U2L1.pdf', steps: ['Té 22 passos. Canvieu de feina cada 5.|Tiene 22 pasos. Cambiad de trabajo cada 5.', 'Connecteu el sensor de color i la llum al hub.|Conectad el sensor de color y la luz al hub.', 'Prepareu els tres tiquets: groc, verd i vermell.|Preparad las tres tiques: amarilla, verde y roja.'], done: 'Ja està construïda!|¡Ya está construida!' },
      { k: 'spk', ph: 'repte', ico: '💡', title: 'Repte 1: el tiquet groc|Reto 1: la tique amarilla', t: 'Quan el Leo ensenya el tiquet groc, s\'encén la llum.|Cuando Leo enseña la tique amarilla, se enciende la luz.', tip: 'Acosta el tiquet ben a prop del sensor i no el tapis amb la mà.|Acerca la tique bien cerca del sensor y no la tapes con la mano.' },
      { k: 'quiz', ph: 'prova', q: 'Funciona una vegada i prou. Per què?|Funciona una vez y ya está. ¿Por qué?', opts: ['El programa s\'ha acabat: cal que es repeteixi|El programa se ha acabado: hay que hacer que se repita', 'El tiquet s\'ha gastat|La tique se ha gastado', 'El sensor està cansat|El sensor está cansado'], a: 0, ex: 'Si es repeteix, torna a mirar i a esperar un tiquet.|Si se repite, vuelve a mirar y a esperar una tique.' },
      { k: 'spk', ph: 'repte', ico: '🎯', title: 'Repte 2: cada tiquet, una cosa|Reto 2: cada tique, una cosa', t: 'Amb el verd es passa. Amb el vermell, no. Feu que la llum ho digui!|Con la verde se pasa. Con la roja, no. ¡Haced que la luz lo diga!' },
      { k: 'spk', ph: 'crea', ico: '✨', title: "Repte 3: l'entrada més divertida|Reto 3: la entrada más divertida", t: 'Decoreu l\'entrada. Després, un altre equip fa de públic amb els tiquets: funciona?|Decorad la entrada. Después, otro equipo hace de público con las tiques: ¿funciona?' },
      { k: 'quiz', ph: 'tanca', q: 'Què fa el sensor de color?|¿Qué hace el sensor de color?', opts: ['Mira de quin color és el que té davant|Mira de qué color es lo que tiene delante', 'Fa girar les rodes|Hace girar las ruedas', 'Guarda el programa|Guarda el programa'], a: 0 },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 4 · La gran fira ---------- */
  { id: 's1-4', t: 'La gran fira|La gran feria', min: 45, proj: true, badge: 'spk_fira',
    learn: ['Dissenyar és tenir una idea, provar-la i millorar-la.|Diseñar es tener una idea, probarla y mejorarla.',
      'Motors, ordres i sensors: ja sabem fer servir totes les peces del robot.|Motores, órdenes y sensores: ya sabemos usar todas las piezas del robot.',
      'Quan una cosa no surt, no és un error: és una pista per millorar.|Cuando algo no sale, no es un error: es una pista para mejorar.'],
    steps: [
      { k: 'quiz', ph: 'recorda', q: 'Quantes coses podem connectar a la vegada al hub?|¿Cuántas cosas podemos conectar a la vez al hub?', opts: ['2|2', '3|3', '10|10'], a: 0, ex: 'Té 2 ports. Tria bé!|Tiene 2 puertos. ¡Elige bien!' },
      { k: 'story', ph: 'missio', who: 'both', scene: 'taller', title: "Avui s'obre el parc!|¡Hoy se abre el parque!", t: "Avui s'obre el parc! Cada equip crea la seva <b>pròpia atracció</b>, i a la fira tothom la prova.|¡Hoy se abre el parque! Cada equipo crea su <b>propia atracción</b>, y en la feria todo el mundo la prueba." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Dissenyar|Diseñar', t: 'Idea, prova i millora|Idea, prueba y mejora', anim: 'spkidea', x: 'Els enginyers no ho encerten a la primera. Proven, miren què passa i ho <span class="hl">milloren</span>.|Los ingenieros no aciertan a la primera. Prueban, miran qué pasa y lo <span class="hl">mejoran</span>.', tip: 'Una hora passa de pressa: comenceu des del carrusel, la moto o l\'entrada i transformeu-los!|Una hora pasa rápido: ¡empezad desde el carrusel, la moto o la entrada y transformadlos!' }
      ] },
      { k: 'spk', ph: 'mans', ico: '🖍', title: 'Dibuixeu la vostra atracció|Dibujad vuestra atracción', t: 'Cadascú diu una idea en un minut. Trieu-ne una i dibuixeu-la a la fitxa. Com es diu?|Cada uno dice una idea en un minuto. Elegid una y dibujadla en la ficha. ¿Cómo se llama?', done: 'Ja la tenim dibuixada!|¡Ya la tenemos dibujada!' },
      { k: 'spk', ph: 'crea', ico: '✨', title: 'Construïu-la i programeu-la|Construidla y programadla', t: 'L\'atracció ha de fer servir almenys un motor o un sensor. Màxim, dues coses connectades.|La atracción tiene que usar al menos un motor o un sensor. Como máximo, dos cosas conectadas.', steps: ['Construïu.|Construid.', 'Programeu.|Programad.', 'Proveu i milloreu.|Probad y mejorad.'], done: 'La nostra atracció funciona!|¡Nuestra atracción funciona!' },
      { k: 'spk', ph: 'crea', ico: '🏆', title: 'Comença la fira!|¡Empieza la feria!', t: 'Cada equip presenta la seva atracció: com es diu, què fa i què ha estat el més difícil. Els altres la proven i diuen què els ha agradat.|Cada equipo presenta su atracción: cómo se llama, qué hace y qué ha sido lo más difícil. Los demás la prueban y dicen qué les ha gustado.', done: 'La fira ha estat un èxit!|¡La feria ha sido un éxito!' },
      { k: 'feel', ph: 'tanca', q: 'Com us ha anat la missió?|¿Cómo os ha ido la misión?' },
      { k: 'diploma', ph: 'tanca', skills: ['Fer girar un motor|Hacer girar un motor', 'Posar ordres en ordre|Poner órdenes en orden', 'Fer servir un sensor de color|Usar un sensor de color', 'Dissenyar una atracció pròpia|Diseñar una atracción propia'] }
    ] }
] };

const c = TECH.find(x => x.id === 'spike'); delete c.soon;
for (const [n, u] of Object.entries(COURSE_UNITS)) c.units[n - 1] = u;
})();
