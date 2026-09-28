/* ===== Mates amb Numi · variació, cromos, missions diàries i lliga (CA/ES) ===== */

/* ---------- 1. Formats variats (remix d'exercicis) ---------- */
function numDis(a) {
  const s = new Set(), rev = +String(Math.abs(a)).split('').reverse().join('');
  [a + 1, a - 1, a + 10, a - 10, a + 2, a - 2, rev, a * 2, Math.round(a / 2)].forEach(v => { if (v >= 0 && v !== a && Number.isInteger(v)) s.add(v); });
  return shuffle([...s]).slice(0, 3);
}
const unitOf = e => e.unit ? ' ' + e.unit : '';
function remix(e) {
  if (e.type !== 'input' || e.dec || e.neg || !Number.isInteger(e.ans)) return e;
  const r = Math.random(), hasBox = e.vis && e.vis.includes(BOX);
  if (r < .16 && hasBox) {
    const good = Math.random() < .5, cand = good ? e.ans : numDis(e.ans)[0];
    const ans = good ? 0 : 1;
    return { ...e, type: 'choice', tf: true, q: L('És <b>correcte</b>?', '¿Es <b>correcto</b>?'), vis: e.vis.replace(BOX, `<span class="tfv">${fmt(cand)}${unitOf(e)}</span>`),
      opts: [L('✔ Sí', '✔ Sí'), L('✖ No', '✖ No')], ans, ex: (good ? '' : L(`No: la resposta és ${fmt(e.ans)}. `, `No: la respuesta es ${fmt(e.ans)}. `)) + (e.ex || '') };
  }
  if (r < .30) {
    const opts = shuffle([e.ans, ...numDis(e.ans)]).map(v => fmt(v) + unitOf(e));
    return { ...e, type: 'choice', balloon: true, opts, ans: opts.indexOf(fmt(e.ans) + unitOf(e)), q: e.q + ` <span class="hint">🎈 ${L('Explota el globus correcte!', '¡Explota el globo correcto!')}</span>` };
  }
  if (r < .46) {
    const opts = shuffle([e.ans, ...numDis(e.ans)]).map(v => fmt(v) + unitOf(e));
    return { ...e, type: 'choice', big: true, opts, ans: opts.indexOf(fmt(e.ans) + unitOf(e)) };
  }
  return e;
}

/* ---------- 2. Àlbum de cartes de mitologia ---------- */
const RAR = { c: ['Comuna', 'Común', '#C98A5B', 58], r: ['Rara', 'Rara', '#36A9E1', 27], e: ['Èpica', 'Épica', '#8A4FB0', 12], l: ['Llegendària', 'Legendaria', '#F0A500', 3] };
// [id, raresa, 'nom ca|es', 'nom romà ca|es', 'curiositat ca|es']
const STK = [
  ['zeus', 'l', 'Zeus|Zeus', 'Júpiter per als romans|Júpiter para los romanos', "Rei dels 12 déus de l'Olimp. El planeta més gran del sistema solar porta el seu nom romà.|Rey de los 12 dioses del Olimpo. El planeta más grande del sistema solar lleva su nombre romano."],
  ['hera', 'l', 'Hera|Hera', 'Juno per als romans|Juno para los romanos', 'Reina de l\'Olimp. El mes de juny es diu així per Juno: és el mes 6 de l\'any.|Reina del Olimpo. El mes de junio se llama así por Juno: es el mes 6 del año.'],
  ['hades', 'l', 'Hades|Hades', 'Plutó per als romans|Plutón para los romanos', 'Déu de l\'inframon. Plutó triga 248 anys a fer una volta al Sol!|Dios del inframundo. ¡Plutón tarda 248 años en dar una vuelta al Sol!'],
  ['cronos', 'l', 'Cronos|Cronos', 'Saturn per als romans|Saturno para los romanos', 'El tità del temps. Per això un cronòmetre es diu així: mesura el temps.|El titán del tiempo. Por eso un cronómetro se llama así: mide el tiempo.'],
  ['athena', 'e', 'Atena|Atenea', 'Minerva per als romans|Minerva para los romanos', 'Deessa de la saviesa. La seva òliba pot girar el cap 270°: tres quarts de volta.|Diosa de la sabiduría. Su búho puede girar la cabeza 270°: tres cuartos de vuelta.'],
  ['poseidon', 'e', 'Posidó|Poseidón', 'Neptú per als romans|Neptuno para los romanos', 'El seu trident té 3 puntes. Neptú és el planeta 8, el més llunyà del Sol.|Su tridente tiene 3 puntas. Neptuno es el planeta 8, el más lejano del Sol.'],
  ['hermes', 'e', 'Hermes|Hermes', 'Mercuri per als romans|Mercurio para los romanos', 'El missatger més ràpid. Mercuri fa la volta al Sol en només 88 dies.|El mensajero más rápido. Mercurio da la vuelta al Sol en solo 88 días.'],
  ['apollo', 'e', 'Apol·lo|Apolo', 'Apol·lo per als romans|Apolo para los romanos', 'Déu de la música. Les notes musicals es basen en fraccions: 1/2, 1/4, 1/8…|Dios de la música. Las notas musicales se basan en fracciones: 1/2, 1/4, 1/8…'],
  ['artemis', 'e', 'Àrtemis|Artemisa', 'Diana per als romans|Diana para los romanos', 'Deessa de la caça i de la Lluna. La Lluna fa una volta a la Terra cada 27 dies i escaig.|Diosa de la caza y de la Luna. La Luna da una vuelta a la Tierra cada 27 días y pico.'],
  ['ares', 'e', 'Ares|Ares', 'Mart per als romans|Marte para los romanos', 'Déu de la guerra. Un any a Mart dura 687 dies terrestres.|Dios de la guerra. Un año en Marte dura 687 días terrestres.'],
  ['aphrodite', 'e', 'Afrodita|Afrodita', 'Venus per als romans|Venus para los romanos', 'Deessa de la bellesa. A Venus, un dia dura més que un any!|Diosa de la belleza. ¡En Venus, un día dura más que un año!'],
  ['hephaestus', 'e', 'Hefest|Hefesto', 'Vulcà per als romans|Vulcano para los romanos', 'El ferrer dels déus. Els volcans porten el nom de Vulcà.|El herrero de los dioses. Los volcanes llevan el nombre de Vulcano.'],
  ['demeter', 'e', 'Demèter|Deméter', 'Ceres per als romans|Ceres para los romanos', 'Deessa de les collites. Les 4 estacions són 4 quarts de l\'any: 3 mesos cadascuna.|Diosa de las cosechas. Las 4 estaciones son 4 cuartos del año: 3 meses cada una.'],
  ['dionysus', 'e', 'Dionís|Dioniso', 'Bacus per als romans|Baco para los romanos', 'Déu de la festa i del teatre. Els teatres grecs eren semicercles perfectes.|Dios de la fiesta y del teatro. Los teatros griegos eran semicírculos perfectos.'],
  ['cerberus', 'e', 'Cèrber|Cerbero', 'Cerber per als romans|Cerbero para los romanos', "3 caps × 2 ulls = 6 ulls vigilant la porta de l'inframon.|3 cabezas × 2 ojos = 6 ojos vigilando la puerta del inframundo."],
  ['pegasus', 'r', 'Pègas|Pegaso', 'Pegàs per als romans|Pegaso para los romanos', 'Té una constel·lació al cel amb un gran quadrat de 4 estrelles.|Tiene una constelación en el cielo con un gran cuadrado de 4 estrellas.'],
  ['medusa', 'r', 'Medusa|Medusa', 'Medusa per als romans|Medusa para los romanos', 'Si la mires, et converteix en pedra. Perseu la va vèncer amb un mirall: simetria!|Si la miras, te convierte en piedra. Perseo la venció con un espejo: ¡simetría!'],
  ['minotaur', 'r', 'Minotaure|Minotauro', 'Minotaure per als romans|Minotauro para los romanos', 'Vivia en un laberint. Truc per sortir de molts laberints: toca sempre la paret amb la mà dreta.|Vivía en un laberinto. Truco para salir de muchos laberintos: toca siempre la pared con la mano derecha.'],
  ['hydra', 'r', 'Hidra|Hidra', 'Hidra per als romans|Hidra para los romanos', 'Per cada cap tallat en sortien 2: 1, 2, 4, 8, 16… creix el doble cada vegada!|Por cada cabeza cortada salían 2: 1, 2, 4, 8, 16… ¡crece el doble cada vez!'],
  ['cyclops', 'r', 'Cíclop|Cíclope', 'Cíclop per als romans|Cíclope para los romanos', 'Un sol ull al mig del front. Van forjar els llamps de Zeus.|Un solo ojo en medio de la frente. Forjaron los rayos de Zeus.'],
  ['sphinx', 'r', 'Esfinx|Esfinge', 'Esfinx per als romans|Esfinge para los romanos', 'Qui camina amb 4 potes, després amb 2 i després amb 3? La persona: gateja, camina i fa servir bastó.|¿Quién anda con 4 patas, luego con 2 y luego con 3? La persona: gatea, camina y usa bastón.'],
  ['centaur', 'r', 'Centaure|Centauro', 'Centaure per als romans|Centauro para los romanos', 'Mig humà, mig cavall: 2 braços + 4 potes = 6 extremitats.|Medio humano, medio caballo: 2 brazos + 4 patas = 6 extremidades.'],
  ['phoenix', 'r', 'Fènix|Fénix', 'Fènix per als romans|Fénix para los romanos', 'Renaix de les cendres cada 500 anys. Quantes vegades en 2.000 anys? 4!|Renace de sus cenizas cada 500 años. ¿Cuántas veces en 2.000 años? ¡4!'],
  ['argos', 'r', 'Argos|Argos', 'Argus per als romans|Argos para los romanos', 'El gegant dels 100 ulls. Mai no els tancava tots alhora.|El gigante de los 100 ojos. Nunca los cerraba todos a la vez.'],
  ['chimera', 'r', 'Quimera|Quimera', 'Quimera per als romans|Quimera para los romanos', 'Lleó, cabra i serp en un sol animal: 3 animals en 1.|León, cabra y serpiente en un solo animal: 3 animales en 1.'],
  ['griffin', 'r', 'Griu|Grifo', 'Griu per als romans|Grifo para los romanos', "Mig àguila, mig lleó. Guardava tresors d'or.|Medio águila, medio león. Guardaba tesoros de oro."],
  ['sirens', 'r', 'Sirenes|Sirenas', 'Sirenes per als romans|Sirenas para los romanos', 'Cantaven tan bé que els mariners perdien el rumb. Ulisses es va tapar les orelles amb cera.|Cantaban tan bien que los marineros perdían el rumbo. Ulises se tapó los oídos con cera.'],
  ['heracles', 'c', 'Hèracles|Heracles', 'Hèrcules per als romans|Hércules para los romanos', 'Va fer 12 treballs: una dotzena de reptes impossibles!|Hizo 12 trabajos: ¡una docena de retos imposibles!'],
  ['achilles', 'c', 'Aquil·les|Aquiles', 'Aquil·les per als romans|Aquiles para los romanos', 'El guerrer invencible… menys al taló. Per això parlem del «taló d\'Aquil·les».|El guerrero invencible… menos en el talón. Por eso hablamos del «talón de Aquiles».'],
  ['odysseus', 'c', 'Ulisses|Ulises', 'Ulisses per als romans|Ulises para los romanos', 'Va trigar 10 anys a tornar a casa després de 10 anys de guerra: 20 anys fora!|Tardó 10 años en volver a casa después de 10 años de guerra: ¡20 años fuera!'],
  ['perseus', 'c', 'Perseu|Perseo', 'Perseu per als romans|Perseo para los romanos', 'Cada agost, del cel cauen les Perseides: fins a 100 estels fugaços per hora.|Cada agosto caen del cielo las Perseidas: hasta 100 estrellas fugaces por hora.'],
  ['theseus', 'c', 'Teseu|Teseo', 'Teseu per als romans|Teseo para los romanos', "Va sortir del laberint seguint un fil. Els matemàtics encara estudien els laberints!|Salió del laberinto siguiendo un hilo. ¡Los matemáticos todavía estudian los laberintos!"],
  ['icarus', 'c', 'Ícar|Ícaro', 'Ícar per als romans|Ícaro para los romanos', "Va volar massa a prop del Sol i se li va fondre la cera. El Sol és a 150 milions de km!|Voló demasiado cerca del Sol y se le derritió la cera. ¡El Sol está a 150 millones de km!"],
  ['pandora', 'c', 'Pandora|Pandora', 'Pandora per als romans|Pandora para los romanos', "Va obrir la gerra i en van sortir tots els mals. Al fons només hi va quedar l'esperança.|Abrió la vasija y salieron todos los males. En el fondo solo quedó la esperanza."],
  ['prometheus', 'c', 'Prometeu|Prometeo', 'Prometeu per als romans|Prometeo para los romanos', 'Va regalar el foc als humans. Una espelma crema a uns 1.000 °C.|Regaló el fuego a los humanos. Una vela arde a unos 1.000 °C.'],
  ['orpheus', 'c', 'Orfeu|Orfeo', 'Orfeu per als romans|Orfeo para los romanos', 'La seva lira tenia 7 cordes. Pitàgores va descobrir que la música és pura proporció.|Su lira tenía 7 cuerdas. Pitágoras descubrió que la música es pura proporción.'],
  ['jason', 'c', 'Jàson|Jasón', 'Jàson per als romans|Jasón para los romanos', 'Va buscar el velló d\'or amb 50 herois: els argonautes.|Buscó el vellocino de oro con 50 héroes: los argonautas.'],
  ['atalanta', 'c', 'Atalanta|Atalanta', 'Atalanta per als romans|Atalanta para los romanos', 'La corredora més ràpida. Només la van guanyar amb 3 pomes d\'or.|La corredora más rápida. Solo le ganaron con 3 manzanas de oro.'],
  ['romulus', 'c', 'Ròmul i Rem|Rómulo y Remo', 'Fundadors de Roma|Fundadores de Roma', 'Roma es va fundar l\'any 753 aC. Els romans escrivien el 753 com DCCLIII.|Roma se fundó en el año 753 a. C. Los romanos escribían el 753 como DCCLIII.'],
  ['midas', 'c', 'Rei Mides|Rey Midas', 'Mides per als romans|Midas para los romanos', "Tot el que tocava es tornava d'or. L'or pesa tant que un cub de 10 cm fa gairebé 20 kg!|Todo lo que tocaba se volvía de oro. ¡El oro pesa tanto que un cubo de 10 cm pesa casi 20 kg!"],
  ['nike', 'l', 'Nike|Nike', 'Victòria per als romans|Victoria para los romanos', "Deessa de la victòria. És la carta dels campions: només es pot aconseguir a la botiga, amb els diamants que guanyes a les batalles.|Diosa de la victoria. Es la carta de los campeones: solo se consigue en la tienda, con los diamantes que ganas en las batallas."],
  // Temporada d'octubre 2026 (ruta de temporada)
  ['nyx', 'e', 'Nix|Nix', 'Nox per als romans|Nox para los romanos', "Deessa de la nit. En una nit fosca es poden veure unes 2.500 estrelles a ull nu.|Diosa de la noche. En una noche oscura se pueden ver unas 2.500 estrellas a simple vista."],
  ['selene', 'e', 'Selene|Selene', 'Luna per als romans|Luna para los romanos', "Deessa de la Lluna. La Lluna tarda uns 29 dies i mig a passar per totes les fases.|Diosa de la Luna. La Luna tarda unos 29 días y medio en pasar por todas sus fases."],
  ['hecate', 'l', 'Hècate|Hécate', 'Trivia per als romans|Trivia para los romanos', "Deessa de la màgia i de les cruïlles de 3 camins. Amb 3 camins i 2 cruïlles seguides, hi ha 3 × 3 = 9 rutes!|Diosa de la magia y de los cruces de 3 caminos. Con 3 caminos y 2 cruces seguidos, ¡hay 3 × 3 = 9 rutas!"],
  // Novembre 2026: El bosc de tardor
  ['dryad', 'e', 'Dríade|Dríade', 'Nimfa dels arbres|Ninfa de los árboles', "Les nimfes dels arbres. Si comptes els anells d'un tronc, saps quants anys té: 1 anell = 1 any.|Las ninfas de los árboles. Si cuentas los anillos de un tronco, sabes cuántos años tiene: 1 anillo = 1 año."],
  ['pan', 'e', 'Pan|Pan', 'Faune per als romans|Fauno para los romanos', "Déu dels boscos. La seva flauta té canyes de llargades diferents: com més curta és la canya, més aguda sona.|Dios de los bosques. Su flauta tiene cañas de longitudes diferentes: cuanto más corta es la caña, más aguda suena."],
  ['persephone', 'l', 'Persèfone|Perséfone', 'Prosèrpina per als romans|Proserpina para los romanos', "Passava 6 mesos sota terra i 6 mesos a la Terra: la meitat de l'any a cada lloc. Així explicaven els grecs les estacions.|Pasaba 6 meses bajo tierra y 6 meses en la Tierra: la mitad del año en cada sitio. Así explicaban los griegos las estaciones."],
  // Desembre 2026: El solstici d'hivern
  ['hestia', 'e', 'Hèstia|Hestia', 'Vesta per als romans|Vesta para los romanos', "Deessa de la llar. El seu foc era en una llar rodona: un cercle té infinits eixos de simetria.|Diosa del hogar. Su fuego estaba en un hogar redondo: un círculo tiene infinitos ejes de simetría."],
  ['boreas', 'e', 'Bòreas|Bóreas', 'Aquiló per als romans|Aquilón para los romanos', "El vent del nord i de l'hivern. Tots els flocs de neu tenen 6 puntes: són hexàgons perfectes.|El viento del norte y del invierno. Todos los copos de nieve tienen 6 puntas: son hexágonos perfectos."],
  ['helios', 'l', 'Hèlios|Helios', 'Sol per als romans|Sol para los romanos', "Déu del Sol. El 21 de desembre, el solstici d'hivern, és el dia més curt de l'any: a Lleida, unes 9 hores de llum.|Dios del Sol. El 21 de diciembre, el solsticio de invierno, es el día más corto del año: en Lleida, unas 9 horas de luz."],
  // Gener 2027: Janus i l'any nou
  ['eos', 'e', 'Eos|Eos', 'Aurora per als romans|Aurora para los romanos', "Deessa de l'alba. Cada dia té 24 hores, que són 1.440 minuts o 86.400 segons!|Diosa del alba. Cada día tiene 24 horas, que son 1.440 minutos u 86.400 segundos."],
  ['horae', 'e', 'Les Hores|Las Horas', 'Deesses de les estacions|Diosas de las estaciones', "Les deesses de les hores i les estacions. Els grecs ja dividien el dia en 12 hores, com el rellotge!|Las diosas de las horas y las estaciones. Los griegos ya dividían el día en 12 horas, ¡como el reloj!"],
  ['janus', 'l', 'Janus|Jano', 'Déu romà dels començaments|Dios romano de los comienzos', "El gener porta el seu nom (Ianuarius). Té dues cares: una mira l'any que acaba i l'altra el que comença.|Enero lleva su nombre (Ianuarius). Tiene dos caras: una mira el año que acaba y la otra el que empieza."],
  // Febrer 2027: Les Muses
  ['terpsichore', 'e', 'Terpsícore|Terpsícore', 'Musa de la dansa|Musa de la danza', "Musa de la dansa. Una volta sencera són 360°; mitja volta, 180°; un quart de volta, 90°.|Musa de la danza. Una vuelta entera son 360°; media vuelta, 180°; un cuarto de vuelta, 90°."],
  ['calliope', 'e', 'Cal·líope|Calíope', 'Musa de la poesia|Musa de la poesía', "Musa de la poesia èpica. L'Odissea té uns 12.000 versos: llegint-ne 10 per minut, trigaries 20 hores!|Musa de la poesía épica. La Odisea tiene unos 12.000 versos: leyendo 10 por minuto, ¡tardarías 20 horas!"],
  ['urania', 'l', 'Urània|Urania', "Musa de l'astronomia|Musa de la astronomía", "Musa de l'astronomia. La llum del Sol triga uns 8 minuts a arribar a la Terra.|Musa de la astronomía. La luz del Sol tarda unos 8 minutos en llegar a la Tierra."]
];
const BATTLE_ONLY = ['nike']; // només es guanyen a les batalles
const CARDNUM = id => String(STK.findIndex(s => s[0] === id) + 1).padStart(2, '0');
// Els cromos antics (emojis) passen a cartes de mitologia: ningú no perd res
function albumFix() {
  const A = P.album = P.album || {};
  for (const k of Object.keys(A)) if (!STK.some(s => s[0] === k)) {
    for (let i = 0; i < A[k]; i++) { const s = drawSticker(); A[s[0]] = (A[s[0]] || 0) + 1; }
    delete A[k];
  }
}
function drawSticker() {
  let r = Math.random() * 100, t = 'c';
  for (const k of ['l', 'e', 'r', 'c']) { if (r < RAR[k][3]) { t = k; break; } r -= RAR[k][3]; }
  return pick(STK.filter(s => s[1] === t && !BATTLE_ONLY.includes(s[0]) && !SEASON_ONLY.includes(s[0])));
}
function openPack(n = 1) {
  albumFix();
  const got = [];
  for (let i = 0; i < n; i++) {
    const s = drawSticker(), dup = !!P.album[s[0]];
    P.album[s[0]] = (P.album[s[0]] || 0) + 1;
    if (dup) P.gems += 3;
    got.push({ s, dup });
  }
  return got;
}
// full = amb la curiositat (sobre i fitxa); sense = versió petita de l'àlbum
const stickerHTML = (s, cls = '', full = false) => `<div class="mcardx r-${s[1]} ${cls}"><div class="min"><img src="img/myth/${s[0]}.jpg" alt="" loading="lazy"><span class="mnum">Nº ${CARDNUM(s[0])}</span><span class="mgem"></span><div class="mplate"><div class="mname">${tx(s[2])}</div>${full ? `<div class="mrom">${tx(s[3])}</div><div class="mmeander"></div><div class="mfact">${tx(s[4])}</div>` : ''}</div></div><span class="mrar">${tx(RAR[s[1]])}</span></div>`;
function scrPack(got) {
  app.innerHTML = `<div class="scr"><div class="burst gold"></div><h1>${got.length > 1 ? L('Sobre de cartes!', '¡Sobre de cartas!') : L('Nova carta!', '¡Nueva carta!')}</h1><p class="sub">${L('Toca el sobre per obrir-lo', 'Toca el sobre para abrirlo')}</p>
    <button class="pack wiggle" id="pack" onclick="revealPack()"><span>🏛️</span><small>OLIMP</small></button>
    <div id="packOut" class="packout" hidden>${got.map((g, i) => `<div class="stkwrap" style="animation-delay:${i * 250}ms">${stickerHTML(g.s, '', true)}${g.dup ? `<p class="dup">${L('Repetida: +3 💎', 'Repetida: +3 💎')}</p>` : `<p class="newst">${L('NOVA!', '¡NUEVA!')}</p>`}</div>`).join('')}
    <button class="btn big" onclick="flowNext()">${L('CONTINUA', 'CONTINÚA')}</button></div></div>`;
  SCR_PACK = got;
}
let SCR_PACK = null;
function revealPack() {
  const p = $('#pack'); if (!p || p.classList.contains('open')) return;
  p.classList.add('shake'); SFX.tap();
  setTimeout(() => { p.classList.remove('shake'); p.classList.add('open'); SFX.win(); }, 500);
  const best = Math.max(...SCR_PACK.map(g => 'crel'.indexOf(g.s[1])));
  confetti(best >= 2 ? 220 : 90);
  setTimeout(() => { p.style.display = 'none'; $('#packOut').hidden = false; }, 950);
}
function renderAlbum(tab) {
  VIEW = 'album';
  albumFix();
  const A = P.album, have = STK.filter(s => A[s[0]]).length;
  const t = tab || 'cromos';
  const tabs = `<div class="tabs"><button class="${t === 'cromos' ? 'on' : ''}" onclick="renderAlbum('cromos')">🏛️ ${L('Cartes', 'Cartas')}</button><button class="${t === 'trade' ? 'on' : ''}" onclick="renderAlbum('trade')">🔄 ${L('Canvis', 'Cambios')}</button><button class="${t === 'medals' ? 'on' : ''}" onclick="renderAlbum('medals')">🏅 ${L('Medalles', 'Medallas')}</button></div>`;
  if (t === 'medals') { renderBadges(tabs); return; }
  if (t === 'trade') { renderTrades(tabs); return; }
  app.innerHTML = shell(`<h1 class="ph1">${L('Déus i herois', 'Dioses y héroes')}</h1>${tabs}
    <p class="lead">${L(`Tens <b>${have}</b> de ${STK.length} cartes de la mitologia grega i romana. Cada lliçó que acabes t'obre un sobre!`, `Tienes <b>${have}</b> de ${STK.length} cartas de la mitología griega y romana. ¡Cada lección que acabes te abre un sobre!`)}</p>
    <div class="abar"><div style="width:${have / STK.length * 100}%"></div></div>
    ${['l', 'e', 'r', 'c'].map(k => `<h2 class="h2"><span class="rdotb" style="background:${RAR[k][2]}"></span>${tx(RAR[k])} <small>${STK.filter(s => s[1] === k && A[s[0]]).length}/${STK.filter(s => s[1] === k).length}</small></h2>
      <div class="agrid">${STK.filter(s => s[1] === k).map(s => A[s[0]] ? `<button class="stkbtn" onclick="stickerModal('${s[0]}')">${stickerHTML(s)}${A[s[0]] > 1 ? `<i class="cnt">×${A[s[0]]}</i>` : ''}</button>` : `<div class="mcardx empty r-${k}"><div class="min"><span class="mnum">Nº ${CARDNUM(s[0])}</span><div class="mq">${BATTLE_ONLY.includes(s[0]) ? '🛍️' : SEASON_ONLY.includes(s[0]) ? '🌙' : '?'}</div>${BATTLE_ONLY.includes(s[0]) ? `<div class="mhint">${L('A la botiga', 'En la tienda')}</div>` : SEASON_ONLY.includes(s[0]) ? `<div class="mhint">${L('Ruta de temporada', 'Ruta de temporada')}</div>` : ''}</div></div>`).join('')}</div>`).join('')}`, 'album');
}
function stickerModal(id) {
  const s = STK.find(x => x[0] === id);
  modal(`<div class="sheet card cent mythsheet">${stickerHTML(s, 'bigcard', true)}<button class="btn big" onclick="closeModal()">${L('GENIAL!', '¡GENIAL!')}</button></div>`, true);
}

/* ---------- 3. Missions diàries ---------- */
const MIS = [
  { id: 'les2', ev: 'lesson', goal: 2, t: 'Completa 2 lliçons|Completa 2 lecciones', gems: 15 },
  { id: 'les3', ev: 'lesson', goal: 3, t: 'Completa 3 lliçons|Completa 3 lecciones', gems: 20 },
  { id: 'perf', ev: 'perfect', goal: 1, t: 'Fes una lliçó perfecta|Haz una lección perfecta', gems: 20 },
  { id: 'combo', ev: 'combo', goal: 8, t: 'Encerta 8 respostes seguides|Acierta 8 respuestas seguidas', gems: 15, max: true },
  { id: 'game', ev: 'game', goal: 1, t: "Juga una partida d'agilitat mental|Juega una partida de agilidad mental", gems: 15 },
  { id: 'ans', ev: 'answer', goal: 25, t: 'Encerta 25 preguntes|Acierta 25 preguntas', gems: 15 },
  { id: 'gold', ev: 'gold', goal: 2, t: 'Encerta 2 preguntes daurades ⭐|Acierta 2 preguntas doradas ⭐', gems: 20 },
  { id: 'xp', ev: 'xp', goal: 40, t: 'Guanya 40 XP|Gana 40 XP', gems: 15 },
  { id: 'train', ev: 'train', goal: 1, t: 'Fes un entrenament|Haz un entrenamiento', gems: 10 }
];
function seededPick(seed, arr, n) { let h = 0; for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0; const a = [...arr], out = []; while (out.length < n && a.length) { h = (h * 1103515245 + 12345) >>> 0; out.push(a.splice(h % a.length, 1)[0]); } return out; }
function missions() {
  const d = today();
  if (!P.mis || P.mis.d !== d) P.mis = { d, list: seededPick(d + (P.code || P.id), MIS, 3).map(m => ({ id: m.id, p: 0, done: false })), chest: false };
  return P.mis;
}
function misEvent(ev, amount = 1) {
  const M = missions(), done = [];
  M.list.forEach(x => {
    const m = MIS.find(y => y.id === x.id); if (!m || x.done || m.ev !== ev) return;
    x.p = m.max ? Math.max(x.p, amount) : x.p + amount;
    if (x.p >= m.goal) { x.p = m.goal; x.done = true; P.gems += m.gems; done.push(m); }
  });
  done.forEach(m => setTimeout(() => toast(`🎯 ${L('Missió complerta', 'Misión cumplida')}: <b>${tx(m.t)}</b> (+${m.gems} 💎)`), 400));
  return done;
}
function missionsCard() {
  const M = missions(), all = M.list.every(x => x.done);
  return `<div class="mcard"><div class="mhead"><b>🎯 ${L("Missions d'avui", 'Misiones de hoy')}</b><small>${L('Es renoven cada dia', 'Se renuevan cada día')}</small></div>
    ${M.list.map(x => { const m = MIS.find(y => y.id === x.id); return `<div class="mrow ${x.done ? 'done' : ''}"><span class="mchk">${x.done ? '✔' : ''}</span><div class="mtxt"><span>${tx(m.t)}</span><div class="mbar"><div style="width:${x.p / m.goal * 100}%"></div></div></div><span class="mrew">${x.done ? '✓' : `+${m.gems}💎`}</span></div>`; }).join('')}
    ${all ? (M.chest ? `<div class="mdone">✅ ${L('Cofre diari obert. Torna demà!', 'Cofre diario abierto. ¡Vuelve mañana!')}</div>` : `<button class="btn gold big" onclick="dailyChest()">🎁 ${L('OBRE EL COFRE DIARI', 'ABRE EL COFRE DIARIO')}</button>`) : `<div class="mchest">🎁 ${L('Completa les 3 per obrir el cofre diari', 'Completa las 3 para abrir el cofre diario')}</div>`}</div>`;
}
function dailyChest() {
  const M = missions(); if (M.chest || !M.list.every(x => x.done)) return;
  M.chest = true; const g = ri(20, 50); P.gems += g; const got = openPack(3); save();
  FLOW = [() => scrPack(got)]; FLOW.back = 'home';
  toast(`🎁 +${g} 💎`); flowNext();
}

/* ---------- 4. Lliga setmanal ---------- */
function weekId(d = new Date()) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())), day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const y = t.getUTCFullYear(), w = Math.ceil(((t - Date.UTC(y, 0, 1)) / 864e5 + 1) / 7);
  return `${y}-W${String(w).padStart(2, '0')}`;
}
function weekXP(x) { const id = weekId(); if (!P.week || P.week.id !== id) P.week = { id, xp: 0 }; P.week.xp += x; }
const daysLeftWeek = () => { const d = new Date().getDay(); return d === 0 ? 1 : 8 - d; };
async function renderLeague(scope) {
  VIEW = 'league';
  scope = scope || 'all';
  const me = (P.week && P.week.id === weekId()) ? P.week.xp : 0;
  const head = `<h1 class="ph1">🏆 ${L('Lliga setmanal', 'Liga semanal')}</h1>
    <div class="tabs"><button class="${scope === 'all' ? 'on' : ''}" onclick="renderLeague('all')">${L("Tota l'acadèmia", 'Toda la academia')}</button><button class="${scope === 'course' ? 'on' : ''}" onclick="renderLeague('course')">${L('El meu curs', 'Mi curso')}</button></div>
    <p class="lead">${L(`Guanya XP aquesta setmana per pujar al rànquing. Queden <b>${daysLeftWeek()} ${dies(daysLeftWeek())}</b>. Els 3 primers reben un premi a l'acadèmia!`, `Gana XP esta semana para subir en el ranking. Quedan <b>${daysLeftWeek()} ${dies(daysLeftWeek())}</b>. ¡Los 3 primeros reciben un premio en la academia!`)}</p>`;
  app.innerHTML = shell(`${head}<div id="lg" class="lgload">⏳</div>`, 'league');
  let rows = [];
  try { const r = await api('league', { code: P.code, week: weekId(), course: scope === 'course' ? P.course : null }); rows = r.rows || []; } catch (e) { }
  if (VIEW !== 'league') return;
  if (P.code && !rows.some(r => r.me) && me > 0) rows.push({ name: P.name, companion: P.companion, xp: me, me: true });
  rows.sort((a, b) => b.xp - a.xp);
  const box = $('#lg'); if (!box) return;
  box.className = 'league';
  box.innerHTML = rows.length ? rows.map((r, i) => `<div class="lrow ${r.me ? 'me' : ''} ${i < 3 ? 'top' + (i + 1) : ''}" style="animation-delay:${i * 50}ms"><span class="lpos">${i < 3 ? ['🥇', '🥈', '🥉'][i] : i + 1}</span><span class="lav">${charSVG(CH[r.companion] ? r.companion : 'numi', 'idle')}</span><b>${esc(r.name)}${r.me ? ` <small>(${L('tu', 'tú')})</small>` : ''}</b><span class="lxp">${r.xp} XP</span></div>`).join('')
    : `<p class="empty">${L('Encara ningú ha guanyat XP aquesta setmana. Sigues el primer!', 'Todavía nadie ha ganado XP esta semana. ¡Sé el primero!')}</p>`;
  if (!P.code) box.insertAdjacentHTML('afterbegin', `<p class="empty">${L('Cal connexió per veure la lliga.', 'Hace falta conexión para ver la liga.')}</p>`);
}
