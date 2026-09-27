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

/* ---------- 2. Àlbum de cromos ---------- */
const RAR = { c: ['Comú', 'Común', '#9AA5B1', 70], r: ['Rar', 'Raro', '#36A9E1', 22], e: ['Èpic', 'Épico', '#8A4FB0', 7], l: ['Llegendari', 'Legendario', '#F0A500', 1] };
const STK = [
  ['zero', '0️⃣', 'c', 'Zero|Cero', "El zero el van inventar a l'Índia fa uns 1.500 anys.|El cero lo inventaron en la India hace unos 1.500 años."],
  ['set', '7️⃣', 'c', 'Set|Siete', "Hi ha 7 dies a la setmana i 7 colors a l'arc de Sant Martí.|Hay 7 días en la semana y 7 colores en el arcoíris."],
  ['deu', '🔟', 'c', 'Deu|Diez', 'Comptem de 10 en 10 perquè tenim 10 dits a les mans.|Contamos de 10 en 10 porque tenemos 10 dedos en las manos.'],
  ['tri', '🔺', 'c', 'Triangle|Triángulo', 'El triangle és la figura més forta: per això surt a molts ponts.|El triángulo es la figura más fuerte: por eso aparece en muchos puentes.'],
  ['quad', '🟪', 'c', 'Quadrat|Cuadrado', 'Un quadrat té 4 costats iguals i 4 angles rectes.|Un cuadrado tiene 4 lados iguales y 4 ángulos rectos.'],
  ['cerc', '⚪', 'c', 'Cercle|Círculo', 'Un cercle no té cap vèrtex… ni cap costat recte!|Un círculo no tiene ningún vértice… ¡ni ningún lado recto!'],
  ['dau', '🎲', 'c', 'Dau|Dado', "Les cares oposades d'un dau sempre sumen 7.|Las caras opuestas de un dado siempre suman 7."],
  ['rell', '🕐', 'c', 'Rellotge|Reloj', 'El rellotge compta de 60 en 60: 60 segons fan un minut i 60 minuts, una hora.|El reloj cuenta de 60 en 60: 60 segundos son un minuto y 60 minutos, una hora.'],
  ['regle', '📏', 'c', 'Regle|Regla', 'Un metre són 100 centímetres.|Un metro son 100 centímetros.'],
  ['mon', '🪙', 'c', 'Moneda|Moneda', "Hi ha 8 monedes d'euro diferents: d'1 cèntim fins a 2 euros.|Hay 8 monedas de euro diferentes: de 1 céntimo hasta 2 euros."],
  ['pizza', '🍕', 'c', 'Pizza|Pizza', 'Si talles una pizza en 8 trossos iguals, cada tros és 1/8.|Si cortas una pizza en 8 trozos iguales, cada trozo es 1/8.'],
  ['ous', '🥚', 'c', 'Dotzena|Docena', 'Una dotzena són 12. Mitja dotzena, 6.|Una docena son 12. Media docena, 6.'],
  ['mari', '🐞', 'c', 'Marieta|Mariquita', 'La marieta més famosa té 7 punts a la closca.|La mariquita más famosa tiene 7 puntos en el caparazón.'],
  ['abac', '🧮', 'c', 'Àbac|Ábaco', "L'àbac és una de les calculadores més antigues del món.|El ábaco es una de las calculadoras más antiguas del mundo."],
  ['cal', '🗓️', 'c', 'Calendari|Calendario', 'Un any té 365 dies i, cada 4 anys, 366.|Un año tiene 365 días y, cada 4 años, 366.'],
  ['pilota', '⚽', 'c', 'Pilota|Pelota', 'La pilota de futbol clàssica té 12 pentàgons i 20 hexàgons.|La pelota de fútbol clásica tiene 12 pentágonos y 20 hexágonos.'],
  ['xoco', '🍫', 'c', 'Xocolata|Chocolate', 'Una rajola de xocolata és una multiplicació: files × columnes!|Una tableta de chocolate es una multiplicación: ¡filas × columnas!'],
  ['piano', '🎹', 'c', 'Piano|Piano', 'Un piano té 88 tecles.|Un piano tiene 88 teclas.'],
  ['peu', '🦶', 'c', 'Peu|Pie', 'Cada peu té 26 ossos.|Cada pie tiene 26 huesos.'],
  ['sindria', '🍉', 'c', 'Síndria|Sandía', 'Una síndria és gairebé tota aigua: més del 90%!|Una sandía es casi toda agua: ¡más del 90%!'],
  ['abella', '🐝', 'r', 'Abella|Abeja', "Les abelles fan les cel·les en forma d'hexàgon: és la forma que aprofita més l'espai.|Las abejas hacen las celdas en forma de hexágono: es la forma que mejor aprovecha el espacio."],
  ['cargol', '🐌', 'r', 'Cargol|Caracol', "La closca del cargol és una espiral. I a Lleida en fem l'Aplec!|La concha del caracol es una espiral. ¡Y en Lleida hacemos el Aplec!"],
  ['pop', '🐙', 'r', 'Pop|Pulpo', 'Un pop té 8 braços i 3 cors.|Un pulpo tiene 8 brazos y 3 corazones.'],
  ['aranya', '🕷️', 'r', 'Aranya|Araña', 'Les aranyes tenen 8 potes; els insectes, només 6.|Las arañas tienen 8 patas; los insectos, solo 6.'],
  ['gira', '🌻', 'r', 'Gira-sol|Girasol', 'Les llavors del gira-sol dibuixen espirals perfectes.|Las semillas del girasol dibujan espirales perfectas.'],
  ['neu', '❄️', 'r', 'Floc de neu|Copo de nieve', 'Els flocs de neu tenen 6 puntes.|Los copos de nieve tienen 6 puntas.'],
  ['tortuga', '🐢', 'r', 'Tortuga|Tortuga', 'Algunes tortugues viuen més de 100 anys.|Algunas tortugas viven más de 100 años.'],
  ['girafa', '🦒', 'r', 'Girafa|Jirafa', 'El coll de la girafa té 7 vèrtebres, les mateixes que el nostre!|El cuello de la jirafa tiene 7 vértebras, ¡las mismas que el nuestro!'],
  ['terra', '🌍', 'r', 'La Terra|La Tierra', 'La Terra fa una volta al Sol cada 365 dies i un quart.|La Tierra da una vuelta al Sol cada 365 días y un cuarto.'],
  ['papa', '🦋', 'r', 'Papallona|Mariposa', 'Les papallones són simètriques: les dues ales són iguals.|Las mariposas son simétricas: las dos alas son iguales.'],
  ['cub', '🧊', 'r', 'Cub|Cubo', 'Un cub té 6 cares, 8 vèrtexs i 12 arestes.|Un cubo tiene 6 caras, 8 vértices y 12 aristas.'],
  ['ping', '🐧', 'r', 'Pingüí|Pingüino', "El pingüí emperador pot fer més d'1 metre d'alçada.|El pingüino emperador puede medir más de 1 metro de alto."],
  ['pi', '🥧', 'e', 'El número π|El número π', 'π val 3,14159… i els seus decimals no s\'acaben mai!|π vale 3,14159… ¡y sus decimales no se acaban nunca!'],
  ['inf', '♾️', 'e', 'Infinit|Infinito', 'Sempre pots sumar 1 a qualsevol número: els números no s\'acaben mai.|Siempre puedes sumar 1 a cualquier número: los números no se acaban nunca.'],
  ['seu', '🏰', 'e', 'Seu Vella|Seu Vella', 'El campanar de la Seu Vella de Lleida fa uns 60 metres.|El campanario de la Seu Vella de Lleida mide unos 60 metros.'],
  ['estrelles', '🔭', 'e', 'Cel estrellat|Cielo estrellado', 'En una nit fosca, a simple vista es veuen unes 2.500 estrelles.|En una noche oscura, a simple vista se ven unas 2.500 estrellas.'],
  ['adn', '🧬', 'e', 'ADN|ADN', 'El teu ADN té forma de doble espiral.|Tu ADN tiene forma de doble espiral.'],
  ['roma', '💯', 'e', 'Números romans|Números romanos', 'Els romans escrivien el 100 amb la lletra C.|Los romanos escribían el 100 con la letra C.'],
  ['cavaller', '⚔️', 'l', 'Cavaller del Codi|Caballero del Código', 'Els programadors fan servir la lògica i les mates cada dia.|Los programadores usan la lógica y las mates cada día.'],
  ['numid', '🤖', 'l', 'Numi daurat|Numi dorado', "En Numi ha comptat fins a un milió… i encara no s'ha cansat!|Numi ha contado hasta un millón… ¡y todavía no se ha cansado!"],
  ['fugac', '🌠', 'l', 'Estel fugaç|Estrella fugaz', "Els estels fugaços són trossets de pols de l'espai que cremen.|Las estrellas fugaces son trocitos de polvo del espacio que se queman."],
  ['mestre', '🎓', 'l', 'Mestre de les mates|Maestro de las mates', 'Només els més constants aconsegueixen aquest cromo!|¡Solo los más constantes consiguen este cromo!']
];
function drawSticker() {
  let r = Math.random() * 100, t = 'c';
  for (const k of ['l', 'e', 'r', 'c']) { if (r < RAR[k][3]) { t = k; break; } r -= RAR[k][3]; }
  return pick(STK.filter(s => s[2] === t));
}
function openPack(n = 1) {
  P.album = P.album || {};
  const got = [];
  for (let i = 0; i < n; i++) {
    const s = drawSticker(), dup = !!P.album[s[0]];
    P.album[s[0]] = (P.album[s[0]] || 0) + 1;
    if (dup) P.gems += 3;
    got.push({ s, dup });
  }
  return got;
}
const stickerHTML = (s, cls = '') => `<div class="stk r-${s[2]} ${cls}"><div class="stke">${s[1]}</div><b>${tx(s[3])}</b><span class="stkr">${tx(RAR[s[2]])}</span></div>`;
function scrPack(got) {
  app.innerHTML = `<div class="scr"><div class="burst gold"></div><h1>${got.length > 1 ? L('Sobre de cromos!', '¡Sobre de cromos!') : L('Nou cromo!', '¡Nuevo cromo!')}</h1><p class="sub">${L('Toca el sobre per obrir-lo', 'Toca el sobre para abrirlo')}</p>
    <button class="pack wiggle" id="pack" onclick="revealPack()"><span>🎴</span><small>MATES</small></button>
    <div id="packOut" class="packout" hidden>${got.map((g, i) => `<div class="stkwrap" style="animation-delay:${i * 250}ms">${stickerHTML(g.s)}<p class="fact">💡 ${tx(g.s[4])}</p>${g.dup ? `<p class="dup">${L('Repetit: +3 💎', 'Repetido: +3 💎')}</p>` : `<p class="newst">${L('NOU!', '¡NUEVO!')}</p>`}</div>`).join('')}
    <button class="btn big" onclick="flowNext()">${L('CONTINUA', 'CONTINÚA')}</button></div></div>`;
  SCR_PACK = got;
}
let SCR_PACK = null;
function revealPack() {
  const p = $('#pack'); if (!p || p.classList.contains('open')) return;
  p.classList.add('shake'); SFX.tap();
  setTimeout(() => { p.classList.remove('shake'); p.classList.add('open'); SFX.win(); }, 500);
  const best = Math.max(...SCR_PACK.map(g => 'cre l'.indexOf(g.s[2])));
  confetti(best >= 2 ? 220 : 90);
  setTimeout(() => { p.style.display = 'none'; $('#packOut').hidden = false; }, 950);
}
function renderAlbum(tab) {
  VIEW = 'album';
  const A = P.album || {}, have = STK.filter(s => A[s[0]]).length;
  const t = tab || 'cromos';
  const tabs = `<div class="tabs"><button class="${t === 'cromos' ? 'on' : ''}" onclick="renderAlbum('cromos')">🎴 ${L('Cromos', 'Cromos')}</button><button class="${t === 'medals' ? 'on' : ''}" onclick="renderAlbum('medals')">🏅 ${L('Medalles', 'Medallas')}</button></div>`;
  if (t === 'medals') { renderBadges(tabs); return; }
  app.innerHTML = shell(`<h1 class="ph1">${L('La meva col·lecció', 'Mi colección')}</h1>${tabs}
    <p class="lead">${L(`Tens <b>${have}</b> de ${STK.length} cromos. Cada lliçó que acabes t'obre un sobre!`, `Tienes <b>${have}</b> de ${STK.length} cromos. ¡Cada lección que acabes te abre un sobre!`)}</p>
    <div class="abar"><div style="width:${have / STK.length * 100}%"></div></div>
    ${['l', 'e', 'r', 'c'].map(k => `<h2 class="h2"><span class="rdotb" style="background:${RAR[k][2]}"></span>${tx(RAR[k])} <small>${STK.filter(s => s[2] === k && A[s[0]]).length}/${STK.filter(s => s[2] === k).length}</small></h2>
      <div class="agrid">${STK.filter(s => s[2] === k).map(s => A[s[0]] ? `<button class="stkbtn" onclick="stickerModal('${s[0]}')">${stickerHTML(s)}${A[s[0]] > 1 ? `<i class="cnt">×${A[s[0]]}</i>` : ''}</button>` : `<div class="stk empty r-${k}"><div class="stke">❔</div><b>???</b></div>`).join('')}</div>`).join('')}`, 'album');
}
function stickerModal(id) {
  const s = STK.find(x => x[0] === id);
  modal(`<div class="sheet card cent">${stickerHTML(s, 'bigstk')}<p class="fact">💡 ${tx(s[4])}</p><button class="btn big" onclick="closeModal()">${L('GENIAL!', '¡GENIAL!')}</button></div>`, true);
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
