/* ===== Numi Ment: entrenament mental per a adults =====
   Mateixa app i mateix compte que Numi Mates; la variant la marca el perfil (P.variant = 'ment').
   Cada dia, una sessió de ~10 minuts amb 3 jocs (velocitat/atenció · memòria · càlcul/lògica/llenguatge),
   un hàbit fora de la pantalla i el progrés per capacitats. La dificultat s'adapta a cada persona.
   Honestedat: mai diem que prevé el deteriorament ni cap malaltia (RD 1907/1996); vegeu mentCiencia(). */

const MCAP = { vel: 'Velocitat|Velocidad', ate: 'Atenció|Atención', mem: 'Memòria|Memoria', cal: 'Càlcul|Cálculo', log: 'Lògica|Lógica', llg: 'Llenguatge|Lenguaje' };
const MG = {
  vel: { ic: '👁️', cap: 'vel', n: 'Mirada ràpida|Mirada rápida', d: "Què has vist al centre i on era l'estrella?|¿Qué has visto en el centro y dónde estaba la estrella?", low: true, unit: 'ms' },
  ate: { ic: '🎨', cap: 'ate', n: 'Colors|Colores', d: 'Toca el color de la tinta, no la paraula.|Toca el color de la tinta, no la palabra.' },
  mem: { ic: '🔷', cap: 'mem', n: 'Seqüències|Secuencias', d: "Repeteix l'ordre en què s'encenen les caselles.|Repite el orden en que se encienden las casillas." },
  par: { ic: '🃏', cap: 'mem', n: 'Parelles|Parejas', d: 'Troba les parelles amb els menys intents possibles.|Encuentra las parejas con los menos intentos posibles.', unit: '%' },
  cal: { ic: '➕', cap: 'cal', n: 'Càlcul ràpid|Cálculo rápido', d: 'Un minut de comptes de cap.|Un minuto de cuentas de cabeza.' },
  sud: { ic: '🔢', cap: 'log', n: 'Sudoku|Sudoku', d: 'Cada número una sola vegada per fila, columna i quadre.|Cada número una sola vez por fila, columna y cuadro.' },
  pal: { ic: '🔤', cap: 'llg', n: 'Paraules|Palabras', d: 'Ordena les lletres i troba la paraula.|Ordena las letras y encuentra la palabra.' },
  int: { ic: '🔎', cap: 'ate', n: "L'intrús|El intruso", d: 'Troba el signe diferent tan ràpid com puguis.|Encuentra el signo diferente lo más rápido que puedas.' },
  lli: { ic: '📝', cap: 'mem', n: 'Llista de la compra|Lista de la compra', d: 'Memoritza la llista i després reconeix-la entre altres productes.|Memoriza la lista y después reconócela entre otros productos.' },
  dir: { ic: '🧭', cap: 'mem', n: 'Direccions|Direcciones', d: 'Segueix les indicacions i troba on acabes.|Sigue las indicaciones y encuentra dónde acabas.' },
  com: { ic: '🛍', cap: 'cal', n: 'La compra|La compra', d: 'Preus, canvi i ofertes: les mates de cada dia.|Precios, cambio y ofertas: las mates de cada día.' },
  ref: { ic: '📖', cap: 'llg', n: 'Refranys|Refranes', d: 'Completa el refrany.|Completa el refrán.' },
  rel: { ic: '🕐', cap: 'log', n: 'El rellotge|El reloj', d: "Llegeix l'hora i calcula quina hora serà.|Lee la hora y calcula qué hora será." }
};
const MHAB = ['Camina 20 minuts a bon pas.|Camina 20 minutos a buen paso.', 'Truca o queda amb algú que fa temps que no veus.|Llama o queda con alguien a quien hace tiempo que no ves.',
  'Llegeix 15 minuts: un llibre, una revista o el diari.|Lee 15 minutos: un libro, una revista o el periódico.', 'Aprèn alguna cosa nova: una paraula, una recepta, una cançó.|Aprende algo nuevo: una palabra, una receta, una canción.',
  'Balla o fes estiraments amb música.|Baila o haz estiramientos con música.', 'Fes un trajecte conegut per un camí diferent.|Haz un trayecto conocido por un camino diferente.',
  "Explica a algú una cosa que hagis après avui.|Cuéntale a alguien algo que hayas aprendido hoy.", 'Surt una estona a prendre la llum del sol.|Sal un rato a tomar la luz del sol.',
  'Fes de cap les sumes de la compra abans de pagar.|Haz de cabeza las sumas de la compra antes de pagar.', 'Intenta dormir 7 o 8 hores aquesta nit.|Intenta dormir 7 u 8 horas esta noche.'];
// atzar amb llavor: als reptes, tothom rep exactament les mateixes preguntes
let MRNG = Math.random;
const mrnd = () => MRNG(), mri = (a, b) => a + Math.floor(mrnd() * (b - a + 1)), mpick = a => a[Math.floor(mrnd() * a.length)];
const mshuf = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(mrnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const mSeed = seed => { let t = seed >>> 0; return () => { t += 0x6D2B79F5; let r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; }; };
const mDlv = g => MGA && MGA.duel ? MGA.duel.lv : mLvl(g);
const mDayN = d => Math.floor(new Date(d + 'T12:00') / 864e5);
const MS = () => { const m = P.ment = P.ment || {}; for (const k of ['lvl', 'best', 'hist', 'days', 'free']) m[k] = m[k] || {}; return m; };
const mDay = (d = today()) => { const m = MS(); return m.days[d] = m.days[d] || { s: [], hab: 0 }; };
// sessió del dia: un joc de cada grup, el que fa més dies que no es practica (es decideix un cop al dia i es guarda)
const MSLOT = [['vel', 'ate', 'int'], ['mem', 'par', 'lli', 'dir'], ['cal', 'sud', 'pal', 'com', 'ref', 'rel']];
function mSession(d = today()) {
  const m = MS(), dd = m.days[d];
  if (dd && Array.isArray(dd.ses) && dd.ses.length === 3) return dd.ses;
  const n = mDayN(d), last = g => { const h = m.hist[g]; return h && h.length ? h[h.length - 1][0] : ''; };
  const ses = MSLOT.map((sl, k) => [...sl].sort((a, b) => last(a).localeCompare(last(b)) || ((sl.indexOf(a) + n + k) % sl.length) - ((sl.indexOf(b) + n + k) % sl.length))[0]);
  if (d === today()) mDay(d).ses = ses;
  return ses;
}
const mLvl = g => MS().lvl[g] ?? (g === 'vel' ? 500 : g === 'mem' ? 3 : 1);
const mNice = (g, v) => v == null ? '—' : g === 'vel' ? `${v} ms` : g === 'par' ? `${v} %` : g === 'sud' ? `${Math.floor(v / 60)}:${pad(v % 60)}` : String(v);
const mHello = () => { const h = new Date().getHours(); return h < 13 ? L('Bon dia', 'Buenos días') : h < 20 ? L('Bona tarda', 'Buenas tardes') : L('Bona nit', 'Buenas noches'); };

/* ---------- Navegació ---------- */
let MGCUR = null, MGT = null, MGA = null, MGA_TK = null;
function mStop() { mHush(); MRNG = Math.random; clearTimeout(MGT); clearInterval(MGA_TK); MGT = MGA_TK = null; MGA = null; MGCUR = null; }
function mNav(t) {
  const it = [['home', '☀️', L('Avui', 'Hoy')], ['jocs', '🧩', L('Jocs', 'Juegos')], ['progres', '📈', L('Progrés', 'Progreso')], ['profile', '👤', L('Perfil', 'Perfil')]];
  return `<nav class="nav mnav">${it.map(([v, i, l]) => `<button class="${v === t ? 'on' : ''}" onclick="go('${v}')"><span class="ni">${i}</span><span>${l}</span></button>`).join('')}<button class="navxat" onclick="xatOpen()" aria-label="${L('Pregunta a en Numi', 'Pregunta a Numi')}"><span class="ni">${charSVG('numi', 'happy')}</span><span>${L('Pregunta', 'Pregunta')}</span></button></nav>`;
}
function mShell(t, body) {
  return `<div class="mpage"><header class="mtop"><img src="${VAR.logo}" alt="${VAR.name}"><span class="mstreak" title="${L('Dies seguits', 'Días seguidos')}">🔥 ${P.streak || 0}</span></header><main class="mmain">${body}</main>${mNav(t)}</div>`;
}
function mentGo(v) {
  mStop(); VIEW = ['home', 'jocs', 'progres', 'profile'].includes(v) ? v : 'home';
  ({ home: mentHome, jocs: mentJocs, progres: mentProgres, profile: mentProfile })[VIEW]();
  window.scrollTo(0, 0);
}
{
  const g0 = go;
  go = function (v) {
    if (P && P.id !== 'tmp' && varOf(P) === 'ment' && !appMismatch(P) && v !== 'profiles' && v !== 'onboard') { LS = null; closeModal(); setVariant('ment'); return mentGo(v); }
    return g0(v);
  };
}

/* ---------- Avui ---------- */
function mentHome() {
  const s = mSession(), dd = mDay(), fets = s.filter(g => dd.s.includes(g)).length, nxt = s.find(g => !dd.s.includes(g));
  const hab = MHAB[mDayN(today()) % MHAB.length];
  const week = [...Array(7).keys()].map(i => { const d = new Date(); d.setDate(d.getDate() - 6 + i); const k = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`, x = MS().days[k];
    return `<i class="${x && x.s.length >= 3 ? 'on' : x && x.s.length ? 'mid' : ''} ${k === today() ? 'today' : ''}"><b>${d.toLocaleDateString(LANG === 'es' ? 'es-ES' : 'ca-ES', { weekday: 'narrow' })}</b></i>`; }).join('');
  app.innerHTML = mShell('home', `<h1 class="mh1">${mHello()}, ${esc(P.name)}</h1>
    <section class="mtcard msess"><div class="mthead"><b>${L("Sessió d'avui", 'Sesión de hoy')}</b><span>${L('uns 10 minuts', 'unos 10 minutos')}</span></div>
      <div class="mgames">${s.map(g => `<button class="mg ${dd.s.includes(g) ? 'done' : ''}" onclick="mPlay('${g}',true)"><span class="mgi">${MG[g].ic}</span><b>${tx(MG[g].n)}</b><small>${tx(MCAP[MG[g].cap])}</small>${dd.s.includes(g) ? '<i class="mok">✓</i>' : ''}</button>`).join('')}</div>
      ${nxt ? `<button class="btn big mbtn" onclick="mPlay('${nxt}',true)">${fets ? L('CONTINUA', 'CONTINÚA') : L('COMENÇA', 'EMPIEZA')}</button>` : `<p class="mtdone">🎉 ${L('Sessió feta! Demà en tens una de nova.', '¡Sesión hecha! Mañana tienes una nueva.')}</p><button class="btn ghost big" onclick="go('jocs')">${L('JUGA UNA ESTONA MÉS', 'JUEGA UN RATO MÁS')}</button>`}</section>
    <section class="mtcard"><div class="mthead"><b>${L('Aquesta setmana', 'Esta semana')}</b><span>${L(`${P.streak || 0} ${P.streak === 1 ? 'dia seguit' : 'dies seguits'}`, `${P.streak || 0} ${P.streak === 1 ? 'día seguido' : 'días seguidos'}`)}</span></div><div class="mweek">${week}</div></section>
    <section class="mtcard mhab ${dd.hab ? 'on' : ''}"><div class="mthead"><b>🌿 ${L('Fora de la pantalla', 'Fuera de la pantalla')}</b></div><p>${tx(hab)}</p>
      <button class="btn ${dd.hab ? 'ghost' : ''}" onclick="mHab()">${dd.hab ? '✓ ' + L('FET!', '¡HECHO!') : L("HO FARÉ AVUI", 'LO HARÉ HOY')}</button></section>
    <button class="link mcien" onclick="mentCiencia()">${L('Què diu la ciència sobre entrenar la ment?', '¿Qué dice la ciencia sobre entrenar la mente?')}</button>`);
}
function mHab() { const d = mDay(); d.hab = d.hab ? 0 : 1; save(); if (d.hab) { SFX.ok && SFX.ok(); toast(L('Molt bé! La ment també s\'entrena fora de la pantalla.', '¡Muy bien! La mente también se entrena fuera de la pantalla.')); } mentHome(); }

/* ---------- Jocs ---------- */
function mentJocs() {
  const m = MS(), prem = isPremium(), fr = m.free[today()] || {};
  app.innerHTML = mShell('jocs', `<h1 class="mh1">${L('Jocs', 'Juegos')}</h1><p class="mlead">${prem ? L('Juga tant com vulguis. La dificultat s\'adapta a tu.', 'Juega tanto como quieras. La dificultad se adapta a ti.') : L("Fora de la sessió d'avui, una partida gratis de cada joc al dia. Amb Premium, sense límit.", 'Fuera de la sesión de hoy, una partida gratis de cada juego al día. Con Premium, sin límite.')}</p>
    <button class="mreptes" onclick="mentReptes()"><span class="mgi">🏆</span><span><b>${L('Reptes amb amics', 'Retos con amigos')}</b><small>${L("Repta algú o un grup al mateix joc, amb les mateixes preguntes.", 'Reta a alguien o a un grupo al mismo juego, con las mismas preguntas.')}</small></span><span class="mgo">›</span></button>
    <div class="mjocs">${Object.entries(MG).map(([g, o]) => `<button class="mjoc" onclick="mPlay('${g}',false)"><span class="mgi">${o.ic}</span><b>${tx(o.n)}</b><small>${tx(o.d)}</small><span class="mrec">${L('Millor', 'Mejor')}: <b>${mNice(g, m.best[g])}</b>${!prem && fr[g] && !mSession().includes(g) ? ` · <i>${L('demà més', 'mañana más')}</i>` : ''}</span></button>`).join('')}</div>`);
}
function mPlay(g, ses) {
  const prem = isPremium(), m = MS(), fr = m.free[today()] = m.free[today()] || {};
  const inSes = mSession().includes(g) && !mDay().s.includes(g);
  if (!ses && !inSes && !prem && fr[g]) return mPremium();
  if (!inSes && !prem) fr[g] = (fr[g] || 0) + 1;
  mStop(); MGCUR = g; MGA = null; VIEW = 'mgame';
  mIntro(g, inSes);
}
function mPremium() {
  modal(`<div class="sheet card cent"><h3>${VAR.name} Premium</h3><p>${L("Avui ja has fet la partida gratis d'aquest joc. Amb Premium pots jugar a tots els jocs tant com vulguis.", 'Hoy ya has hecho la partida gratis de este juego. Con Premium puedes jugar a todos los juegos tanto como quieras.')}</p>
    <button class="btn big gold" onclick="closeModal();buyPremium()">${L('VULL PREMIUM', 'QUIERO PREMIUM')}</button><button class="btn ghost big" onclick="closeModal()">${L('DEMÀ HO TORNO A PROVAR', 'MAÑANA LO VUELVO A PROBAR')}</button></div>`, true);
}
function mGameShell(g, top, body) {
  app.innerHTML = `<div class="mgame"><div class="mgtop"><button class="xbtn" onclick="mQuit()" aria-label="${L('Surt', 'Salir')}">✕</button><b>${MG[g].ic} ${tx(MG[g].n)}</b><span id="mgstat">${top || ''}</span></div><div class="mgbody" id="mgb">${body}</div></div>`;
}
function mQuit() { ask(L('Vols deixar aquesta partida?', '¿Quieres dejar esta partida?'), L('SURT', 'SALIR'), L('CONTINUA', 'SIGUE'), () => { mStop(); go('home'); }); }
function mIntro(g, inSes) {
  MGA = { ses: inSes };
  mGameShell(g, '', `<div class="mintro"><span class="mbig">${MG[g].ic}</span><h2>${tx(MG[g].n)}</h2><p>${tx(MG[g].d)}</p>${mHow(g)}${'speechSynthesis' in window ? `<button class="btn ghost mspeak" onclick="mSpeak('${g}')">🔊 ${L("Escolta-ho", 'Escúchalo')}</button>` : ''}<button class="btn big mbtn" onclick="mStart('${g}')">${L('JUGA', 'JUEGA')}</button></div>`);
}
function mHow(g) {
  const h = {
    vel: L("Mira el centre. Durant un instant veuràs un cotxe o un camió i, al voltant, una estrella. Després et preguntarem què hi havia i on era l'estrella. Si l'encertes, cada vegada anirà més ràpid.", 'Mira el centro. Durante un instante verás un coche o un camión y, alrededor, una estrella. Después te preguntaremos qué había y dónde estaba la estrella. Si aciertas, cada vez irá más rápido.'),
    ate: L('Surt una paraula de color escrita amb una tinta d\'un altre color. Toca el botó del color de la <b>tinta</b>. Tens 45 segons.', 'Sale una palabra de color escrita con una tinta de otro color. Toca el botón del color de la <b>tinta</b>. Tienes 45 segundos.'),
    mem: L("Les caselles s'encendran una darrere l'altra. Quan acabi, toca-les en el mateix ordre. Cada vegada que l'encertes, n'hi haurà una més.", 'Las casillas se encenderán una detrás de otra. Cuando acabe, tócalas en el mismo orden. Cada vez que aciertes, habrá una más.'),
    par: L('Gira dues cartes cada vegada. Si són iguals, es queden girades.', 'Gira dos cartas cada vez. Si son iguales, se quedan giradas.'),
    cal: L('Escriu el resultat amb el teclat. Quan és correcte, passa sol a la següent. Tens un minut.', 'Escribe el resultado con el teclado. Cuando es correcto, pasa solo a la siguiente. Tienes un minuto.'),
    sud: L('Toca una casella buida i després el número. Si ho necessites, pots demanar una pista.', 'Toca una casilla vacía y después el número. Si lo necesitas, puedes pedir una pista.'),
    pal: L('Toca les lletres en ordre per formar la paraula. La pista et diu de què va.', 'Toca las letras en orden para formar la palabra. La pista te dice de qué va.'),
    int: L('Totes les lletres són iguals menys una. Toca la diferent. Cada vegada n\'hi haurà més. Tens 45 segons.', 'Todas las letras son iguales menos una. Toca la diferente. Cada vez habrá más. Tienes 45 segundos.'),
    lli: L('Veuràs una llista de la compra durant uns segons. Després, entre molts productes, toca només els que hi eren.', 'Verás una lista de la compra durante unos segundos. Después, entre muchos productos, toca solo los que estaban.'),
    dir: L('Surts de la casella de la casa. Llegeix les indicacions (amunt, avall, dreta, esquerra) i toca la casella on acabes.', 'Sales de la casilla de la casa. Lee las indicaciones (arriba, abajo, derecha, izquierda) y toca la casilla donde acabas.'),
    com: L('Vuit preguntes de la compra de cada dia: quant costa tot, quant et tornen, quina oferta surt més a compte. Sense presses.', 'Ocho preguntas de la compra de cada día: cuánto cuesta todo, cuánto te devuelven, qué oferta sale más a cuenta. Sin prisas.'),
    ref: L('Vuit refranys de sempre. Tria com acaba cadascun.', 'Ocho refranes de siempre. Elige cómo acaba cada uno.'),
    rel: L("Vuit rellotges. Digues quina hora marquen i, més endavant, quina hora serà d'aquí a una estona.", 'Ocho relojes. Di qué hora marcan y, más adelante, qué hora será dentro de un rato.')
  }[g];
  return `<p class="mhow">${h}</p>`;
}
// instruccions en veu alta (útil per a qui hi veu poc o prefereix escoltar)
function mSpeak(g) {
  try {
    const t = `${tx(MG[g].n)}. ${xatPlain ? xatPlain(mHow(g)) : ''}`, u = new SpeechSynthesisUtterance(t);
    u.lang = LANG === 'es' ? 'es-ES' : 'ca-ES'; u.rate = .92;
    const v = speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith(LANG === 'es' ? 'es' : 'ca')); if (v) u.voice = v;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  } catch (e) { }
}
const mHush = () => { try { speechSynthesis.cancel(); } catch (e) { } };
function mStart(g) { mHush(); SFX.tap && SFX.tap(); ({ vel: velGo, ate: ateGo, mem: memGo, par: parGo, cal: calGo, sud: sudGo, pal: palGo, int: intGo, lli: lliGo, dir: dirGo, com: comGo, ref: refGo, rel: relGo })[g](); }

// resultat: guarda, adapta el nivell i marca la sessió
function mEnd(g, score, up, msg) {
  if (MGA && MGA.duel) return mDuelEnd(g);
  const m = MS(), was = m.best[g], lowB = MG[g].low || g === 'sud', ses = !!(MGA && MGA.ses);
  mStop();
  if (score != null) {
    const rec = was == null || (lowB ? score < was : score > was);
    if (rec) m.best[g] = score;
    (m.hist[g] = m.hist[g] || []).push([today(), score]); if (m.hist[g].length > 40) m.hist[g].shift();
    if (g !== 'vel' && g !== 'mem') m.lvl[g] = Math.max(1, Math.min(10, mLvl(g) + (up || 0)));
    const d = mDay(); if (ses && !d.s.includes(g) && mSession().includes(g)) d.s.push(g);
    touchStreak(); P.xp = (P.xp || 0) + 10; save(); syncNow();
    const s = mSession(), left = s.filter(x => !mDay().s.includes(x)), nx = left[0];
    app.innerHTML = `<div class="mgame"><div class="mres"><span class="mbig">${rec && was != null ? '🏆' : MG[g].ic}</span><h2>${rec && was != null ? L('Nou rècord!', '¡Nuevo récord!') : L('Ben fet!', '¡Bien hecho!')}</h2>
      <p class="mscore">${mNice(g, score)}</p><p>${msg || ''}</p>${was != null && !rec ? `<p class="mmut">${L('El teu millor resultat', 'Tu mejor resultado')}: ${mNice(g, was)}</p>` : ''}
      ${ses && nx ? `<p class="mmut">${L(`Sessió d'avui: ${3 - left.length} de 3`, `Sesión de hoy: ${3 - left.length} de 3`)}</p><button class="btn big mbtn" onclick="mPlay('${nx}',true)">${L('SEGÜENT JOC', 'SIGUIENTE JUEGO')} · ${tx(MG[nx].n)}</button>` : ''}
      ${ses && !nx ? `<p class="mtdone">🎉 ${L('Sessió d\'avui completada!', '¡Sesión de hoy completada!')}</p>` : ''}
      <button class="btn ${ses && nx ? 'ghost' : ''} big" onclick="go('home')">${L('TORNA A L\'INICI', 'VUELVE AL INICIO')}</button></div></div>`;
    SFX.win && SFX.win(); if (rec && was != null && typeof confetti === 'function') confetti(80);
  } else go('home');
}
const mSet = h => { const e = $('#mgstat'); if (e) e.innerHTML = h; };
const mSleep = ms => new Promise(r => { MGT = setTimeout(r, ms); });

/* ---------- 1. Mirada ràpida (velocitat de processament, com l'estudi ACTIVE) ---------- */
function velGo() { MGA = { ...MGA, T: mLvl('vel'), n: 0, ok: 0, g: MGCUR }; velTrial(); }
async function velTrial() {
  const A = MGA; if (!A || MGCUR !== 'vel') return;
  if (A.n >= 10) { MS().lvl.vel = A.T; return mEnd('vel', A.T, 0, L(`Has vist bé ${A.ok} de 10. Com més baix és el temps, més ràpid processes el que veus.`, `Has visto bien ${A.ok} de 10. Cuanto más bajo es el tiempo, más rápido procesas lo que ves.`)); }
  A.n++; mSet(`${A.n}/10 · ${A.T} ms`);
  const c = pick(['🚗', '🚚']), p = ri(0, 7), dis = A.T <= 300;
  const pos = i => { const a = i * Math.PI / 4 - Math.PI / 2; return `left:${50 + 40 * Math.cos(a)}%;top:${50 + 40 * Math.sin(a)}%`; };
  const box = inner => `<div class="velbox">${inner}</div>`;
  $('#mgb').innerHTML = box('<span class="velfix">+</span>'); await mSleep(700); if (MGA !== A) return;
  $('#mgb').innerHTML = box(`<span class="velc">${c}</span>${[...Array(8).keys()].map(i => i === p ? `<span class="velp" style="${pos(i)}">⭐</span>` : dis ? `<span class="velp dis" style="${pos(i)}">▲</span>` : '').join('')}`);
  await mSleep(A.T); if (MGA !== A) return;
  $('#mgb').innerHTML = box(`<span class="velmask"></span>${[...Array(8).keys()].map(i => `<span class="velp mk" style="${pos(i)}">▦</span>`).join('')}`); await mSleep(250); if (MGA !== A) return;
  $('#mgb').innerHTML = `<p class="mtq">${L('Què hi havia al centre?', '¿Qué había en el centro?')}</p><div class="velq"><button class="mopt" onclick="velA1('🚗')">🚗<small>${L('Cotxe', 'Coche')}</small></button><button class="mopt" onclick="velA1('🚚')">🚚<small>${L('Camió', 'Camión')}</small></button></div>`;
  A.c = c; A.p = p;
}
function velA1(x) {
  const A = MGA; A.a1 = x === A.c;
  const pos = i => { const a = i * Math.PI / 4 - Math.PI / 2; return `left:${50 + 40 * Math.cos(a)}%;top:${50 + 40 * Math.sin(a)}%`; };
  $('#mgb').innerHTML = `<p class="mtq">${L("On era l'estrella?", '¿Dónde estaba la estrella?')}</p><div class="velbox pick">${[...Array(8).keys()].map(i => `<button class="velpos" style="${pos(i)}" onclick="velA2(${i})" aria-label="${i + 1}"></button>`).join('')}<span class="velfix">+</span></div>`;
}
async function velA2(i) {
  const A = MGA, ok = A.a1 && i === A.p;
  if (ok) { A.ok++; A.T = Math.max(34, Math.round(A.T * .85)); SFX.ok && SFX.ok(); } else { A.T = Math.min(1000, Math.round(A.T * 1.2)); SFX.ko && SFX.ko(); }
  $('#mgb').innerHTML = `<div class="mfb ${ok ? 'ok' : 'ko'}">${ok ? '✓' : '✗'}<small>${ok ? L('Molt bé!', '¡Muy bien!') : !A.a1 ? L(`Al centre hi havia ${A.c === '🚗' ? 'un cotxe' : 'un camió'}`, `En el centro había ${A.c === '🚗' ? 'un coche' : 'un camión'}`) : L("L'estrella era en un altre lloc", 'La estrella estaba en otro sitio')}</small></div>`;
  await mSleep(900); if (MGA === A) velTrial();
}

/* ---------- 2. Colors (atenció i control, efecte Stroop) ---------- */
const MCOL = [['VERMELL', 'ROJO', '#D93A3A'], ['BLAU', 'AZUL', '#2166D1'], ['VERD', 'VERDE', '#2A9A4A'], ['GROC', 'AMARILLO', '#E0A800']];
function ateGo() {
  const lv = mDlv('ate'); MGA = { ...MGA, ok: 0, ko: 0, end: Date.now() + 45000, inc: Math.min(.9, .45 + lv * .05) };
  $('#mgb').innerHTML = `<div class="atew" id="atew"></div><div class="ateb">${MCOL.map((c, i) => `<button class="atebtn" style="--c:${c[2]}" onclick="ateA(${i})">${LANG === 'es' ? c[1] : c[0]}</button>`).join('')}</div>`;
  ateNext(); MGA_TK = setInterval(() => { const s = Math.max(0, Math.ceil((MGA.end - Date.now()) / 1000)); mSet(`⏱ ${s} s · ✓ ${MGA.ok}`); if (s <= 0) ateEnd(); }, 250);
}
function ateNext() { const A = MGA, w = mri(0, 3); let ink = w; if (mrnd() < A.inc) while (ink === w) ink = mri(0, 3); A.ink = ink; const el = $('#atew'); if (el) { el.textContent = LANG === 'es' ? MCOL[w][1] : MCOL[w][0]; el.style.color = MCOL[ink][2]; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); } }
function ateA(i) { const A = MGA; if (!A || A.ink == null) return; if (i === A.ink) { A.ok++; SFX.tap && SFX.tap(); } else { A.ko++; SFX.ko && SFX.ko(); const el = $('#atew'); el && el.classList.add('shake'); } ateNext(); }
function ateEnd() {
  clearInterval(MGA_TK); const A = MGA, acc = A.ok + A.ko ? A.ok / (A.ok + A.ko) : 0;
  mEnd('ate', A.ok, acc >= .9 && A.ok >= 20 ? 1 : acc < .7 ? -1 : 0, L(`${A.ok} encerts i ${A.ko} errors. La clau és no deixar-se enganyar per la paraula.`, `${A.ok} aciertos y ${A.ko} errores. La clave es no dejarse engañar por la palabra.`));
}

/* ---------- 3. Seqüències (memòria de treball visoespacial, tipus Corsi) ---------- */
function memGo() { const span = mLvl('mem'); MGA = { ...MGA, len: Math.max(3, span - 1), fails: 0, best: 0, n: span >= 6 ? 4 : 3 }; memRound(); }
async function memRound() {
  const A = MGA, N = A.n * A.n; if (!A || MGCUR !== 'mem') return;
  A.seq = []; while (A.seq.length < A.len) { const c = ri(0, N - 1); if (c !== A.seq[A.seq.length - 1]) A.seq.push(c); } A.inp = []; A.lock = true;
  mSet(`${L('Llargada', 'Longitud')}: ${A.len}`);
  $('#mgb').innerHTML = `<p class="mtq" id="memq">${L('Mira…', 'Mira…')}</p><div class="memg" style="--n:${A.n}">${[...Array(N).keys()].map(i => `<button class="memc" id="mc${i}" onclick="memTap(${i})"></button>`).join('')}</div>`;
  await mSleep(800);
  for (const c of A.seq) { if (MGA !== A) return; const b = $('#mc' + c); b && b.classList.add('on'); SFX.tap && SFX.tap(); await mSleep(650); b && b.classList.remove('on'); await mSleep(220); }
  if (MGA !== A) return; A.lock = false; const q = $('#memq'); if (q) q.textContent = L('Ara tu: toca-les en el mateix ordre', 'Ahora tú: tócalas en el mismo orden');
}
async function memTap(i) {
  const A = MGA; if (!A || A.lock) return;
  const b = $('#mc' + i); b.classList.add('tap'); setTimeout(() => b.classList.remove('tap'), 250);
  A.inp.push(i); const k = A.inp.length - 1;
  if (A.inp[k] !== A.seq[k]) {
    A.lock = true; A.fails++; SFX.ko && SFX.ko(); $('#memq').textContent = L('Oh! No era aquesta.', '¡Oh! No era esta.');
    await mSleep(900); if (MGA !== A) return;
    if (A.fails >= 2) { MS().lvl.mem = Math.max(3, A.best || A.len - 1); return mEnd('mem', A.best || A.len - 1, 0, L(`Has recordat seqüències de fins a ${A.best || A.len - 1} caselles.`, `Has recordado secuencias de hasta ${A.best || A.len - 1} casillas.`)); }
    return memRound();
  }
  if (A.inp.length === A.seq.length) { A.lock = true; A.best = A.len; A.fails = 0; A.len++; SFX.ok && SFX.ok(); $('#memq').textContent = L('Perfecte! Una més…', '¡Perfecto! Una más…'); await mSleep(900); if (MGA === A) { if (A.len > 12) { MS().lvl.mem = 12; return mEnd('mem', 12, 0, ''); } memRound(); } }
}

/* ---------- 4. Parelles (memòria visual) ---------- */
const MPIC = ['🍎', '🍐', '🍋', '🍇', '🍓', '🍒', '🥝', '🍑', '🥕', '🌽', '🌻', '🌷', '🐟', '🦋', '🐞', '🐢', '⚓', '🎈', '🎸', '⏰'];
function parGo() {
  const lv = mLvl('par'), np = lv <= 3 ? 6 : lv <= 6 ? 8 : 10, cols = np === 10 ? 5 : 4;
  const cards = shuffle(shuffle(MPIC).slice(0, np).flatMap(x => [x, x]));
  MGA = { ...MGA, cards, open: [], done: new Set(), moves: 0, np, t0: Date.now() };
  $('#mgb').innerHTML = `<div class="parg" style="--c:${cols}">${cards.map((x, i) => `<button class="parc" id="pc${i}" onclick="parTap(${i})"><span>${x}</span></button>`).join('')}</div>`;
  mSet(`${L('Intents', 'Intentos')}: 0`);
}
function parTap(i) {
  const A = MGA; if (!A || A.done.has(i) || A.open.includes(i) || A.open.length >= 2) return;
  $('#pc' + i).classList.add('up'); A.open.push(i); SFX.tap && SFX.tap();
  if (A.open.length < 2) return;
  A.moves++; mSet(`${L('Intents', 'Intentos')}: ${A.moves}`);
  const [a, b] = A.open;
  if (A.cards[a] === A.cards[b]) { A.done.add(a); A.done.add(b); A.open = []; $('#pc' + a).classList.add('ok'); $('#pc' + b).classList.add('ok'); SFX.ok && SFX.ok();
    if (A.done.size === A.cards.length) { const pct = Math.round(100 * A.np / A.moves); setTimeout(() => mEnd('par', pct, A.moves <= A.np * 1.6 ? 1 : A.moves > A.np * 2.6 ? -1 : 0, L(`${A.np} parelles en ${A.moves} intents (${Math.round((Date.now() - A.t0) / 1000)} s). El percentatge és la teva precisió: 100 % vol dir no fallar mai.`, `${A.np} parejas en ${A.moves} intentos (${Math.round((Date.now() - A.t0) / 1000)} s). El porcentaje es tu precisión: 100 % quiere decir no fallar nunca.`)), 600); }
  } else MGT = setTimeout(() => { $('#pc' + a) && $('#pc' + a).classList.remove('up'); $('#pc' + b) && $('#pc' + b).classList.remove('up'); A.open = []; }, 900);
}

/* ---------- 5. Càlcul ràpid ---------- */
function calQ(lv) {
  const K = lv >= 9 ? mpick(['add2', 'sub2', 'mul', 'div', 'pct', 'two']) : lv >= 7 ? mpick(['add2', 'sub2', 'mul', 'div', 'mul2']) : lv >= 5 ? mpick(['add', 'sub', 'mul', 'div']) : lv >= 3 ? mpick(['add', 'sub', 'mul']) : mpick(['add', 'sub']);
  let a, b;
  switch (K) {
    case 'add': a = mri(2, lv >= 3 ? 60 : 20); b = mri(2, lv >= 3 ? 39 : 10); return [`${a} + ${b}`, a + b];
    case 'sub': a = mri(10, lv >= 3 ? 99 : 20); b = mri(1, a - 1); return [`${a} − ${b}`, a - b];
    case 'add2': a = mri(25, 199); b = mri(15, 99); return [`${a} + ${b}`, a + b];
    case 'sub2': a = mri(60, 250); b = mri(15, a - 10); return [`${a} − ${b}`, a - b];
    case 'mul': a = mri(2, lv >= 5 ? 9 : 5); b = mri(2, 10); return [`${a} × ${b}`, a * b];
    case 'mul2': a = mri(11, 25); b = mri(2, 5); return [`${a} × ${b}`, a * b];
    case 'div': b = mri(2, 9); a = b * mri(2, 10); return [`${a} ÷ ${b}`, a / b];
    case 'pct': a = mpick([10, 25, 50]); b = mpick([40, 60, 80, 120, 200, 360]); return [`${a} % ${L('de', 'de')} ${b}`, b * a / 100];
    default: a = mri(2, 9); b = mri(2, 9); const c = mri(1, 9); return [`${a} × ${b} − ${c}`, a * b - c];
  }
}
function calGo() {
  const lv = mDlv('cal'); MGA = { ...MGA, lv, ok: 0, end: Date.now() + 60000, inp: '' };
  $('#mgb').innerHTML = `<p class="calq" id="calq"></p><div class="calin" id="calin">?</div><div class="mpad">${[1, 2, 3, 4, 5, 6, 7, 8, 9, '⌫', 0].map(k => `<button onclick="calK('${k}')">${k}</button>`).join('')}</div>`;
  calNext(); MGA_TK = setInterval(() => { const s = Math.max(0, Math.ceil((MGA.end - Date.now()) / 1000)); mSet(`⏱ ${s} s · ✓ ${MGA.ok}`); if (s <= 0) calEnd(); }, 250);
}
function calNext() { const A = MGA, [q, r] = calQ(A.lv); A.q = q; A.r = r; A.inp = ''; $('#calq').textContent = q + ' ='; $('#calin').textContent = '?'; $('#calin').className = 'calin'; }
function calK(k) {
  const A = MGA; if (!A || A.r == null) return;
  if (k === '⌫') A.inp = A.inp.slice(0, -1); else if (A.inp.length < 5) A.inp += k;
  const el = $('#calin'); el.textContent = A.inp || '?';
  if (A.inp === String(A.r)) { A.ok++; SFX.ok && SFX.ok(); el.className = 'calin ok'; A.r = null; setTimeout(() => MGA === A && calNext(), 250); }
  else if (A.inp.length >= String(A.r).length && A.inp !== String(A.r).slice(0, A.inp.length)) { A.ko = (A.ko || 0) + 1; SFX.ko && SFX.ko(); el.className = 'calin ko'; el.textContent = `${A.inp} → ${A.r}`; const r = A.r; A.r = null; setTimeout(() => MGA === A && calNext(), 1100); }
}
function calEnd() { clearInterval(MGA_TK); const A = MGA; mEnd('cal', A.ok, A.ok >= 14 ? 1 : A.ok <= 6 ? -1 : 0, L(`${A.ok} comptes en un minut.`, `${A.ok} cuentas en un minuto.`)); }

/* ---------- 6. Sudoku (4×4, 6×6 i 9×9) ---------- */
function sudMake(n, br, bc, holes) {
  const rg = k => [...Array(k).keys()];
  const rows = shuffle(rg(n / br)).flatMap(b => shuffle(rg(br)).map(r => b * br + r)), cols = shuffle(rg(n / bc)).flatMap(s => shuffle(rg(bc)).map(c => s * bc + c)), nums = shuffle(rg(n).map(x => x + 1));
  const sol = rows.map(r => cols.map(c => nums[(bc * (r % br) + Math.floor(r / br) + c) % n]));
  const g = sol.map(r => r.slice());
  const ok = (b, r, c, v) => { for (let i = 0; i < n; i++) if (b[r][i] === v || b[i][c] === v) return false; const r0 = r - r % br, c0 = c - c % bc; for (let i = 0; i < br; i++) for (let j = 0; j < bc; j++) if (b[r0 + i][c0 + j] === v) return false; return true; };
  const count = (b, lim) => { let best = null, bc2 = n + 1; for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (!b[r][c]) { let k = 0; for (let v = 1; v <= n; v++) if (ok(b, r, c, v)) k++; if (k < bc2) { bc2 = k; best = [r, c]; } }
    if (!best) return 1; let t = 0; const [r, c] = best; for (let v = 1; v <= n && t < lim; v++) if (ok(b, r, c, v)) { b[r][c] = v; t += count(b, lim - t); b[r][c] = 0; } return t; };
  let removed = 0;
  for (const k of shuffle(rg(n * n))) { if (removed >= holes) break; const r = Math.floor(k / n), c = k % n, v = g[r][c]; g[r][c] = 0; if (count(g.map(x => x.slice()), 2) !== 1) g[r][c] = v; else removed++; }
  return { n, br, bc, sol, g };
}
function sudGo() {
  const lv = mLvl('sud'), cfg = [[4, 2, 2, 6], [4, 2, 2, 9], [6, 2, 3, 14], [6, 2, 3, 18], [6, 2, 3, 22], [9, 3, 3, 36], [9, 3, 3, 40], [9, 3, 3, 44], [9, 3, 3, 48], [9, 3, 3, 52]][lv - 1];
  const S = sudMake(...cfg);
  MGA = { ...MGA, S, cur: S.g.map(r => r.slice()), fix: S.g.map(r => r.map(v => !!v)), sel: null, hints: 0, t0: Date.now() };
  sudDraw(); MGA_TK = setInterval(() => { const s = Math.floor((Date.now() - MGA.t0) / 1000); mSet(`⏱ ${Math.floor(s / 60)}:${pad(s % 60)}`); }, 1000);
}
function sudDraw() {
  const A = MGA, { n, br, bc } = A.S, cur = A.cur;
  const bad = (r, c) => { const v = cur[r][c]; if (!v) return false; for (let i = 0; i < n; i++) if ((i !== c && cur[r][i] === v) || (i !== r && cur[i][c] === v)) return true; const r0 = r - r % br, c0 = c - c % bc; for (let i = 0; i < br; i++) for (let j = 0; j < bc; j++) { const R = r0 + i, C = c0 + j; if ((R !== r || C !== c) && cur[R][C] === v) return true; } return false; };
  const [sr, sc] = A.sel || [-1, -1], sv = A.sel ? cur[sr][sc] : 0;
  $('#mgb').innerHTML = `<div class="sudg" style="--n:${n}">${cur.map((row, r) => row.map((v, c) => `<button class="sudc ${A.fix[r][c] ? 'fix' : ''} ${r === sr && c === sc ? 'sel' : ''} ${sv && v === sv ? 'same' : ''} ${bad(r, c) ? 'bad' : ''} ${(c + 1) % bc === 0 && c < n - 1 ? 'br' : ''} ${(r + 1) % br === 0 && r < n - 1 ? 'bb' : ''}" onclick="sudSel(${r},${c})">${v || ''}</button>`).join('')).join('')}</div>
    <div class="sudpad" style="--n:${Math.min(n, 5)}">${[...Array(n).keys()].map(i => `<button onclick="sudK(${i + 1})">${i + 1}</button>`).join('')}<button class="sud0" onclick="sudK(0)">⌫</button><button class="sudh" onclick="sudHint()">💡 ${L('Pista', 'Pista')}</button></div>`;
}
function sudSel(r, c) { MGA.sel = [r, c]; SFX.tap && SFX.tap(); sudDraw(); }
function sudK(v) {
  const A = MGA; if (!A.sel) return toast(L('Primer toca una casella buida.', 'Primero toca una casilla vacía.'));
  const [r, c] = A.sel; if (A.fix[r][c]) return; A.cur[r][c] = v; sudDraw(); sudCheck();
}
function sudHint() {
  const A = MGA, { n, sol } = A.S; let cell = A.sel && !A.fix[A.sel[0]][A.sel[1]] && A.cur[A.sel[0]][A.sel[1]] !== sol[A.sel[0]][A.sel[1]] ? A.sel : null;
  if (!cell) { const e = []; for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (A.cur[r][c] !== sol[r][c]) e.push([r, c]); cell = e.length ? pick(e) : null; }
  if (!cell) return; A.hints++; const [r, c] = cell; A.cur[r][c] = sol[r][c]; A.fix[r][c] = true; A.sel = cell; sudDraw(); sudCheck();
}
function sudCheck() {
  const A = MGA, { sol } = A.S; if (!A.cur.every((row, r) => row.every((v, c) => v === sol[r][c]))) return;
  clearInterval(MGA_TK); const s = Math.round((Date.now() - A.t0) / 1000), n = A.S.n;
  setTimeout(() => mEnd('sud', s, A.hints === 0 ? 1 : A.hints >= 3 ? -1 : 0, L(`Sudoku ${n}×${n} resolt${A.hints ? ` amb ${A.hints} ${A.hints === 1 ? 'pista' : 'pistes'}` : ' sense pistes'}.`, `Sudoku ${n}×${n} resuelto${A.hints ? ` con ${A.hints} ${A.hints === 1 ? 'pista' : 'pistas'}` : ' sin pistas'}.`)), 500);
}

/* ---------- 7. Paraules (anagrames amb pista) ---------- */
const MPAL = {
  ca: { 'Fruita': ['poma', 'figa', 'raïm', 'plàtan', 'cirera', 'préssec', 'síndria', 'maduixa', 'taronja'], 'Animal': ['vaca', 'tigre', 'zebra', 'panda', 'cavall', 'ovella', 'conill', 'girafa', 'elefant', 'tortuga', 'granota', 'cocodril'],
    'Transport': ['tren', 'moto', 'taxi', 'cotxe', 'camió', 'vaixell', 'autobús'], 'A casa': ['llit', 'taula', 'cuina', 'dutxa', 'cadira', 'mirall', 'nevera', 'teulada', 'finestra', 'escombra'],
    'El cos': ['dent', 'boca', 'orella', 'genoll', 'esquena', 'espatlla'], 'Natura': ['bosc', 'flor', 'arbre', 'platja', 'muntanya', 'estrella', 'lluna', 'núvol'], 'Menjar': ['galeta', 'enciam', 'mantega', 'formatge', 'xocolata', 'tomàquet'],
    'Roba': ['camisa', 'bufanda', 'sabates', 'jaqueta', 'mitjons'], 'Estacions': ['estiu', 'hivern', 'tardor'], 'Objectes': ['llibre', 'llapis', 'pinzell', 'rellotge', 'guitarra', 'paraigua'] },
  es: { 'Fruta': ['kiwi', 'lima', 'mango', 'melón', 'cereza', 'ciruela', 'naranja', 'plátano', 'manzana', 'sandía'], 'Animal': ['vaca', 'lobo', 'león', 'tigre', 'cebra', 'panda', 'conejo', 'jirafa', 'caballo', 'tortuga', 'elefante', 'cocodrilo'],
    'Transporte': ['tren', 'moto', 'taxi', 'coche', 'avión', 'camión', 'autobús'], 'En casa': ['cama', 'mesa', 'sofá', 'silla', 'cocina', 'espejo', 'nevera', 'escoba', 'ventana', 'tenedor', 'cuchara'],
    'El cuerpo': ['boca', 'dedo', 'nariz', 'oreja', 'rodilla', 'espalda'], 'Naturaleza': ['flor', 'árbol', 'playa', 'luna', 'montaña', 'estrella', 'bosque'], 'Comida': ['queso', 'tomate', 'patata', 'galleta', 'lechuga', 'chocolate'],
    'Ropa': ['camisa', 'zapato', 'bufanda', 'chaqueta', 'calcetín'], 'Estaciones': ['verano', 'otoño', 'invierno'], 'Objetos': ['libro', 'lápiz', 'reloj', 'pincel', 'guitarra', 'paraguas'] }
};
function palPick(lv, used) {
  const want = [4, 4, 5, 5, 6, 6, 7, 7, 8, 8][lv - 1], all = Object.entries(MPAL[LANG === 'es' ? 'es' : 'ca']).flatMap(([cat, ws]) => ws.map(w => [cat, w]));
  const len = w => [...w].length;
  let c = all.filter(([, w]) => Math.abs(len(w) - want) <= (lv >= 9 ? 2 : 0) && !used.has(w)); if (c.length < 3) c = all.filter(([, w]) => !used.has(w));
  return pick(c);
}
function palGo() { MGA = { ...MGA, lv: mLvl('pal'), ok: 0, n: 0, used: new Set(), end: Date.now() + 120000 }; palNext(); MGA_TK = setInterval(() => { const s = Math.max(0, Math.ceil((MGA.end - Date.now()) / 1000)); mSet(`⏱ ${Math.floor(s / 60)}:${pad(s % 60)} · ✓ ${MGA.ok}`); if (s <= 0) palEnd(); }, 250); }
function palNext() {
  const A = MGA; if (A.n >= 6) return palEnd();
  const [cat, w] = palPick(A.lv, A.used); A.used.add(w); A.n++;
  const ls = [...w.toUpperCase()]; let sh; do sh = shuffle(ls.map((l, i) => [l, i])); while (sh.map(x => x[0]).join('') === ls.join('') && ls.length > 1);
  A.w = ls; A.sh = sh; A.pos = []; A.cat = cat; palDraw();
}
function palDraw() {
  const A = MGA;
  $('#mgb').innerHTML = `<p class="palcat">${L('Pista', 'Pista')}: <b>${A.cat}</b> · ${A.w.length} ${L('lletres', 'letras')}</p>
    <div class="palslots">${A.w.map((_, i) => `<button class="pals ${A.pos[i] != null ? 'full' : ''}" onclick="palUndo(${i})">${A.pos[i] != null ? A.sh[A.pos[i]][0] : ''}</button>`).join('')}</div>
    <div class="paltiles">${A.sh.map(([l], i) => `<button class="palt" ${A.pos.includes(i) ? 'disabled' : ''} onclick="palTap(${i})">${l}</button>`).join('')}</div>
    <div class="palbtns"><button class="btn ghost" onclick="palHint()">💡 ${L('Primera lletra', 'Primera letra')}</button><button class="btn ghost" onclick="palSkip()">${L('Salta', 'Salta')} ›</button></div>`;
}
function palTap(i) { const A = MGA; if (A.pos.includes(i)) return; A.pos.push(i); SFX.tap && SFX.tap(); if (A.pos.length === A.w.length) return palCheck(); palDraw(); }
function palUndo(k) { const A = MGA; if (k < A.pos.length) { A.pos = A.pos.slice(0, k); palDraw(); } }
function palHint() { const A = MGA; const i = A.sh.findIndex(([l], j) => l === A.w[0] && !A.pos.includes(j)); A.pos = i >= 0 ? [i] : []; palDraw(); }
function palSkip() { const A = MGA; toast(L(`Era: ${A.w.join('')}`, `Era: ${A.w.join('')}`)); palNext(); }
function palCheck() {
  const A = MGA, got = A.pos.map(i => A.sh[i][0]).join('');
  if (got === A.w.join('')) { A.ok++; SFX.ok && SFX.ok(); palDraw(); $$('.pals').forEach(b => b.classList.add('ok')); setTimeout(() => MGA === A && palNext(), 700); }
  else { SFX.ko && SFX.ko(); palDraw(); const s = $('.palslots'); s && s.classList.add('shake'); setTimeout(() => { if (MGA === A) { A.pos = []; palDraw(); } }, 700); }
}
function palEnd() { clearInterval(MGA_TK); const A = MGA; mEnd('pal', A.ok, A.ok >= 5 ? 1 : A.ok <= 2 ? -1 : 0, L(`Has trobat ${A.ok} de ${A.n} paraules.`, `Has encontrado ${A.ok} de ${A.n} palabras.`)); }

/* ---------- 8. L'intrús (atenció visual: cerca del signe diferent) ---------- */
const MINT = [['O', 'Q'], ['E', 'F'], ['b', 'd'], ['6', '9'], ['M', 'N'], ['p', 'q'], ['C', 'G'], ['V', 'Y'], ['8', 'B'], ['u', 'n']];
function intGo() { MGA = { ...MGA, lv: mDlv('int'), ok: 0, ko: 0, end: Date.now() + 45000 }; intNext(); MGA_TK = setInterval(() => { const s = Math.max(0, Math.ceil((MGA.end - Date.now()) / 1000)); mSet(`⏱ ${s} s · ✓ ${MGA.ok}`); if (s <= 0) intEnd(); }, 250); }
function intNext() {
  const A = MGA, n = Math.min(8, 4 + Math.floor((A.lv - 1) / 2) + Math.floor(A.ok / 4)), pr = mpick(MINT.slice(0, Math.min(MINT.length, 3 + A.lv))), sw = mrnd() < .5;
  const [base, odd] = sw ? [pr[1], pr[0]] : pr; A.odd = mri(0, n * n - 1);
  $('#mgb').innerHTML = `<p class="mtq">${L('Toca el diferent', 'Toca el diferente')}</p><div class="intg" style="--n:${n}">${[...Array(n * n).keys()].map(i => `<button class="intc" onclick="intTap(${i})">${i === A.odd ? odd : base}</button>`).join('')}</div>`;
}
function intTap(i) { const A = MGA; if (!A) return; if (i === A.odd) { A.ok++; SFX.ok && SFX.ok(); intNext(); } else { A.ko++; SFX.ko && SFX.ko(); const g = $('.intg'); g && (g.classList.remove('shake'), void g.offsetWidth, g.classList.add('shake')); } }
function intEnd() { clearInterval(MGA_TK); const A = MGA; mEnd('int', A.ok, A.ok >= 14 && A.ko <= 2 ? 1 : A.ok <= 6 ? -1 : 0, L(`${A.ok} trobats${A.ko ? ` i ${A.ko} errors` : ''} en 45 segons.`, `${A.ok} encontrados${A.ko ? ` y ${A.ko} errores` : ''} en 45 segundos.`)); }

/* ---------- 9. Llista de la compra (memòria verbal: reconeixement) ---------- */
const MPROD = { ca: ['Pa', 'Llet', 'Ous', 'Formatge', 'Tomàquets', 'Pomes', 'Arròs', 'Oli', 'Sucre', 'Cafè', 'Iogurts', 'Pollastre', 'Peix', 'Enciam', 'Cebes', 'Patates', 'Taronges', 'Plàtans', 'Galetes', 'Pernil', 'Mantega', 'Farina', 'Pasta', 'Sal', 'Aigua', 'Suc', 'Xocolata', 'Mongetes', 'Pastanagues', 'Sabó'],
  es: ['Pan', 'Leche', 'Huevos', 'Queso', 'Tomates', 'Manzanas', 'Arroz', 'Aceite', 'Azúcar', 'Café', 'Yogures', 'Pollo', 'Pescado', 'Lechuga', 'Cebollas', 'Patatas', 'Naranjas', 'Plátanos', 'Galletas', 'Jamón', 'Mantequilla', 'Harina', 'Pasta', 'Sal', 'Agua', 'Zumo', 'Chocolate', 'Judías', 'Zanahorias', 'Jabón'] };
function lliGo() { MGA = { ...MGA, lv: mLvl('lli'), round: 0, hits: 0, fals: 0, tot: 0 }; lliRound(); }
async function lliRound() {
  const A = MGA; if (A.round >= 2) return lliEnd();
  A.round++; const N = Math.min(10, 3 + A.lv), all = shuffle([...MPROD[LANG === 'es' ? 'es' : 'ca']]);
  A.list = all.slice(0, N); A.grid = shuffle(all.slice(0, N * 2)); A.sel = new Set(); A.tot += N;
  mSet(`${L('Ronda', 'Ronda')} ${A.round}/2`);
  $('#mgb').innerHTML = `<p class="mtq">${L('Memoritza la llista', 'Memoriza la lista')}</p><div class="llilist">${A.list.map(x => `<span>${x}</span>`).join('')}</div><div class="llibar"><i style="animation-duration:${N * 2.2}s"></i></div>`;
  await mSleep(N * 2200); if (MGA !== A) return;
  $('#mgb').innerHTML = `<p class="mtq">${L(`Toca els ${N} productes que hi havia`, `Toca los ${N} productos que había`)}</p><div class="lligrid">${A.grid.map((x, i) => `<button class="llic" id="lc${i}" onclick="lliTap(${i})">${x}</button>`).join('')}</div><button class="btn big mbtn" onclick="lliCheck()">${L('JA ESTÀ', 'YA ESTÁ')}</button>`;
}
function lliTap(i) { const A = MGA; A.sel.has(i) ? A.sel.delete(i) : A.sel.add(i); $('#lc' + i).classList.toggle('on', A.sel.has(i)); SFX.tap && SFX.tap(); }
async function lliCheck() {
  const A = MGA; let h = 0, f = 0;
  A.grid.forEach((x, i) => { const inL = A.list.includes(x), s = A.sel.has(i), b = $('#lc' + i); if (inL && s) { h++; b.classList.add('okc'); } else if (!inL && s) { f++; b.classList.add('koc'); } else if (inL) b.classList.add('miss'); b.disabled = true; });
  A.hits += h; A.fals += f; (h === A.list.length && !f ? SFX.ok : SFX.ko) && (h === A.list.length && !f ? SFX.ok() : SFX.ko());
  await mSleep(2200); if (MGA === A) lliRound();
}
function lliEnd() { const A = MGA, pct = Math.max(0, Math.round(100 * (A.hits - A.fals) / A.tot)); mEnd('lli', pct, pct >= 90 ? 1 : pct < 60 ? -1 : 0, L(`Has recordat ${A.hits} de ${A.tot} productes${A.fals ? ` (i n'has marcat ${A.fals} que no hi eren)` : ''}.`, `Has recordado ${A.hits} de ${A.tot} productos${A.fals ? ` (y has marcado ${A.fals} que no estaban)` : ''}.`)); }

/* ---------- 10. Direccions (memòria i orientació espacial) ---------- */
function dirGo() { MGA = { ...MGA, lv: mLvl('dir'), q: 0, ok: 0 }; dirNext(); }
async function dirNext() {
  const A = MGA; if (A.q >= 6) return mEnd('dir', A.ok, A.ok >= 6 ? 1 : A.ok <= 3 ? -1 : 0, L(`${A.ok} de 6 recorreguts encertats.`, `${A.ok} de 6 recorridos acertados.`));
  A.q++; const N = 5, k = Math.min(6, 2 + Math.floor(A.lv / 2)), hide = A.lv >= 3;
  let x, y, moves;
  for (let t = 0; t < 200; t++) {
    x = ri(0, N - 1); y = ri(0, N - 1); const sx = x, sy = y; moves = []; let okp = true;
    for (let m = 0; m < k; m++) { const d = pick([[0, -1], [0, 1], [1, 0], [-1, 0]]), st = ri(1, 2); const nx = x + d[0] * st, ny = y + d[1] * st; if (nx < 0 || ny < 0 || nx >= N || ny >= N) { okp = false; break; } moves.push([d, st]); x = nx; y = ny; }
    if (okp && (x !== sx || y !== sy)) { A.start = [sx, sy]; break; }
  }
  A.end = [x, y]; A.lock = hide;
  const arrow = d => d[1] === -1 ? L('↑ amunt', '↑ arriba') : d[1] === 1 ? L('↓ avall', '↓ abajo') : d[0] === 1 ? L('→ dreta', '→ derecha') : L('← esquerra', '← izquierda');
  const steps = moves.map(([d, st]) => `<span>${arrow(d)} <b>${st}</b></span>`).join('');
  const grid = () => `<div class="dirg">${[...Array(N * N).keys()].map(i => { const cx = i % N, cy = Math.floor(i / N), home = cx === A.start[0] && cy === A.start[1]; return `<button class="dirc ${home ? 'home' : ''}" id="dc${i}" onclick="dirTap(${i})">${home ? '🏠' : ''}</button>`; }).join('')}</div>`;
  mSet(`${A.q}/6`);
  $('#mgb').innerHTML = `<p class="mtq">${hide ? L('Memoritza el camí', 'Memoriza el camino') : L('On acabes?', '¿Dónde acabas?')}</p><div class="dirsteps">${steps}</div>${grid()}`;
  if (hide) { await mSleep(2500 + k * 1300); if (MGA !== A) return; const s = $('.dirsteps'); if (s) s.innerHTML = `<span class="mmut">${L('Ara toca on acabes', 'Ahora toca dónde acabas')}</span>`; A.lock = false; }
}
async function dirTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true;
  const N = 5, ok = i === A.end[1] * N + A.end[0];
  $('#dc' + (A.end[1] * N + A.end[0])).classList.add('okc'); if (!ok) $('#dc' + i).classList.add('koc');
  ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  await mSleep(1200); if (MGA === A) dirNext();
}

/* ---------- 11. La compra (càlcul de la vida diària) ---------- */
const MPREU = { ca: [['Pa', 1.2], ['Llet', .95], ['Ous (dotzena)', 2.6], ['Formatge', 3.4], ['Pomes (kg)', 1.8], ['Cafè', 4.25], ['Oli', 6.5], ['Iogurts', 1.65], ['Galetes', 1.35], ['Arròs', 1.1], ['Pernil', 2.9], ['Taronges (kg)', 1.45]],
  es: [['Pan', 1.2], ['Leche', .95], ['Huevos (docena)', 2.6], ['Queso', 3.4], ['Manzanas (kg)', 1.8], ['Café', 4.25], ['Aceite', 6.5], ['Yogures', 1.65], ['Galletas', 1.35], ['Arroz', 1.1], ['Jamón', 2.9], ['Naranjas (kg)', 1.45]] };
const mEur = v => v.toFixed(2).replace('.', ',') + ' €';
function comQ(lv) {
  const P_ = mshuf([...MPREU[LANG === 'es' ? 'es' : 'ca']]), r2_ = v => Math.round(v * 100) / 100;
  const kind = lv <= 2 ? 'sum2' : lv <= 4 ? mpick(['sum3', 'change']) : lv <= 6 ? mpick(['sum3', 'change', 'pack']) : mpick(['change', 'pack', 'disc', 'best']);
  let items, q, ans, dis;
  if (kind === 'sum2' || kind === 'sum3') { items = P_.slice(0, kind === 'sum2' ? 2 : 3); ans = r2_(items.reduce((t, [, p]) => t + p, 0)); q = L('Quant pagues en total?', '¿Cuánto pagas en total?'); dis = [ans + .1, ans - .1, ans + 1, ans - 1, ans + .5]; }
  if (kind === 'change') { items = P_.slice(0, mri(2, 3)); const t = r2_(items.reduce((a, [, p]) => a + p, 0)), b = t < 5 ? 5 : t < 10 ? 10 : 20; ans = r2_(b - t); q = L(`Pagues amb un bitllet de ${b} €. Quant et tornen?`, `Pagas con un billete de ${b} €. ¿Cuánto te devuelven?`); dis = [ans + .1, ans - .1, ans + 1, ans - 1, r2_(t)]; }
  if (kind === 'pack') { const [n, p] = P_[0]; items = [[n, p]]; const k = mri(2, 4); ans = r2_(p * k); q = L(`Quant costen ${k} unitats de «${n}»?`, `¿Cuánto cuestan ${k} unidades de «${n}»?`); dis = [ans + p, ans - p, ans + .1, ans + 1]; }
  if (kind === 'disc') { const v = mpick([10, 20, 30, 40, 50]), pc = mpick([10, 20, 25, 50]); items = []; ans = r2_(v * (1 - pc / 100)); q = L(`Una jaqueta de ${v} € té un ${pc} % de descompte. Quant costa ara?`, `Una chaqueta de ${v} € tiene un ${pc} % de descuento. ¿Cuánto cuesta ahora?`); dis = [r2_(v * pc / 100), v - pc, ans + 1, ans - 1]; }
  if (kind === 'best') { const [n, p] = P_[0]; items = [[n, p]]; const a = r2_(p * 2 * mpick([.7, .8, .9])), bb = r2_(p * 3 * .75); ans = null;
    const good = bb / 3 < a / 2 ? 1 : 0; return { items, q: L(`«${n}» a ${mEur(p)}. Què surt més a compte per unitat?`, `«${n}» a ${mEur(p)}. ¿Qué sale más a cuenta por unidad?`), opts: [L(`2 per ${mEur(a)}`, `2 por ${mEur(a)}`), L(`3 amb un 25 % de descompte (${mEur(bb)})`, `3 con un 25 % de descuento (${mEur(bb)})`)], ans: good }; }
  const o = [...new Set([ans, ...shuffle(dis.map(r2_).filter(v => v > 0 && v !== ans))])].slice(0, 4);
  const opts = mshuf(o).map(mEur); return { items, q, opts, ans: opts.indexOf(mEur(ans)) };
}
function comGo() { MGA = { ...MGA, lv: mDlv('com'), q: 0, ok: 0 }; comNext(); }
function comNext() {
  const A = MGA; if (A.q >= 8) return mEnd('com', A.ok, A.ok >= 7 ? 1 : A.ok <= 4 ? -1 : 0, L(`${A.ok} de 8 encertades.`, `${A.ok} de 8 acertadas.`));
  A.q++; A.cur = comQ(A.lv); mSet(`${A.q}/8`);
  const it = A.cur.items.length ? `<div class="tiquet">${A.cur.items.map(([n, p]) => `<div><span>${n}</span><b>${mEur(p)}</b></div>`).join('')}</div>` : '';
  $('#mgb').innerHTML = `${it}<p class="mtq">${A.cur.q}</p><div class="copts">${A.cur.opts.map((o, i) => `<button class="mopt copt" onclick="comTap(${i})">${o}</button>`).join('')}</div>`;
}
async function comTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true; const b = $$('.copt'), ok = i === A.cur.ans;
  b[A.cur.ans].classList.add('okc'); if (!ok) b[i].classList.add('koc'); ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  await mSleep(1100); if (MGA === A) { A.lock = false; comNext(); }
}

/* ---------- 12. Refranys (llenguatge i memòria de sempre) ---------- */
const MREF = { ca: [['Qui matina', 'fa farina'], ['A cavall regalat', 'no li miris el dentat'], ['Qui no plora', 'no mama'], ['Més val un ocell a la mà', 'que cent volant'], ['De mica en mica', "s'omple la pica"], ['Qui dia passa', 'any empeny'], ['Qui la fa', 'la paga'], ['Val més prevenir', 'que curar'], ['Qui té un amic', 'té un tresor'], ['Qui sembra vents', 'recull tempestes'], ['Quan el riu sona', 'aigua porta'], ['Poc a poc', "s'hi va lluny"], ['Qui té boca', "s'equivoca"], ['Més val tard', 'que mai'], ['Parlant', "la gent s'entén"], ['Qui avisa', 'no és traïdor'], ['Qui molt abraça', 'poc estreny'], ['Casa on entra el sol', 'no hi entra el metge'], ['Una flor', 'no fa estiu'], ['No diguis blat', 'que no sigui al sac i ben lligat'], ['A la taula i al llit', 'al primer crit'], ['Tal faràs', 'tal trobaràs']],
  es: [['A quien madruga', 'Dios le ayuda'], ['Más vale pájaro en mano', 'que ciento volando'], ['A caballo regalado', 'no le mires el diente'], ['Camarón que se duerme', 'se lo lleva la corriente'], ['No por mucho madrugar', 'amanece más temprano'], ['Dime con quién andas', 'y te diré quién eres'], ['En casa de herrero', 'cuchillo de palo'], ['Perro ladrador', 'poco mordedor'], ['Ojos que no ven', 'corazón que no siente'], ['Más vale tarde', 'que nunca'], ['Quien mucho abarca', 'poco aprieta'], ['A buen entendedor', 'pocas palabras bastan'], ['Del dicho al hecho', 'hay mucho trecho'], ['Quien siembra vientos', 'recoge tempestades'], ['Cuando el río suena', 'agua lleva'], ['Poco a poco', 'se va lejos'], ['Agua que no has de beber', 'déjala correr'], ['Hablando', 'se entiende la gente'], ['Una golondrina', 'no hace verano'], ['Quien avisa', 'no es traidor'], ['Más vale prevenir', 'que curar'], ['Donde fueres', 'haz lo que vieres']] };
function refGo() { MGA = { ...MGA, q: 0, ok: 0, deck: mshuf([...MREF[LANG === 'es' ? 'es' : 'ca']]) }; refNext(); }
function refNext() {
  const A = MGA; if (A.q >= 8) return mEnd('ref', A.ok, A.ok >= 7 ? 1 : A.ok <= 4 ? -1 : 0, L(`${A.ok} de 8 refranys.`, `${A.ok} de 8 refranes.`));
  const [a, b] = A.deck[A.q]; A.q++; mSet(`${A.q}/8`);
  const others = mshuf(A.deck.filter(x => x[1] !== b)).slice(0, 3).map(x => x[1]), opts = mshuf([b, ...others]); A.ans = opts.indexOf(b);
  $('#mgb').innerHTML = `<p class="refq">«${a}…»</p><div class="copts list">${opts.map((o, i) => `<button class="mopt copt" onclick="refTap(${i})">…${o}</button>`).join('')}</div>`;
}
async function refTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true; const b = $$('.copt'), ok = i === A.ans;
  b[A.ans].classList.add('okc'); if (!ok) b[i].classList.add('koc'); ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  await mSleep(1200); if (MGA === A) { A.lock = false; refNext(); }
}

/* ---------- 13. El rellotge (lectura de l'hora i càlcul de temps) ---------- */
const hhmm = m => { m = ((m % 720) + 720) % 720; const h = Math.floor(m / 60) || 12; return `${h}:${pad(m % 60)}`; };
function mClock(m) {
  const h = (m / 60) % 12, mi = m % 60, ha = h * 30, ma = mi * 6;
  const tick = [...Array(12).keys()].map(i => { const a = i * 30 * Math.PI / 180; return `<line x1="${50 + 38 * Math.sin(a)}" y1="${50 - 38 * Math.cos(a)}" x2="${50 + 44 * Math.sin(a)}" y2="${50 - 44 * Math.cos(a)}" stroke="#1E2A2B" stroke-width="${i % 3 ? 1.6 : 3}" stroke-linecap="round"/>`; }).join('');
  const nums = [12, 3, 6, 9].map((n, i) => { const a = i * 90 * Math.PI / 180; return `<text x="${50 + 30 * Math.sin(a)}" y="${50 - 30 * Math.cos(a) + 4.5}" text-anchor="middle" font-size="12" font-weight="800" fill="#1E2A2B">${n}</text>`; }).join('');
  return `<svg class="relsvg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="47" fill="#fff" stroke="#1E2A2B" stroke-width="3"/>${tick}${nums}<line x1="50" y1="50" x2="${50 + 22 * Math.sin(ha * Math.PI / 180)}" y2="${50 - 22 * Math.cos(ha * Math.PI / 180)}" stroke="#1E2A2B" stroke-width="5" stroke-linecap="round"/><line x1="50" y1="50" x2="${50 + 34 * Math.sin(ma * Math.PI / 180)}" y2="${50 - 34 * Math.cos(ma * Math.PI / 180)}" stroke="#177E6E" stroke-width="3.2" stroke-linecap="round"/><circle cx="50" cy="50" r="3.5" fill="#1E2A2B"/></svg>`;
}
function relGo() { MGA = { ...MGA, lv: mDlv('rel'), q: 0, ok: 0 }; relNext(); }
function relNext() {
  const A = MGA; if (A.q >= 8) return mEnd('rel', A.ok, A.ok >= 7 ? 1 : A.ok <= 4 ? -1 : 0, L(`${A.ok} de 8 encertades.`, `${A.ok} de 8 acertadas.`));
  A.q++; mSet(`${A.q}/8`);
  const step = A.lv <= 1 ? 30 : A.lv <= 3 ? 15 : 5, m = mri(1, 12) * 60 + mri(0, 60 / step - 1) * step, calc = A.lv >= 5 && mrnd() < .6;
  const add = calc ? mpick([15, 20, 25, 30, 40, 45, 50, 75, 90]) : 0, ans = m + add;
  const d = [ans + 60, ans - 60, ans + 5 * (step > 5 ? 3 : 1), ans - 15, m + 30, (ans % 60) * 12 + Math.floor(ans / 60) * 5].map(v => hhmm(v)).filter(v => v !== hhmm(ans));
  const opts = mshuf([hhmm(ans), ...shuffle([...new Set(d)]).slice(0, 3)]); A.ans = opts.indexOf(hhmm(ans));
  $('#mgb').innerHTML = `${mClock(m)}<p class="mtq">${calc ? L(`Quina hora serà d'aquí a <b>${add} minuts</b>?`, `¿Qué hora será dentro de <b>${add} minutos</b>?`) : L('Quina hora és?', '¿Qué hora es?')}</p><div class="copts">${opts.map((o, i) => `<button class="mopt copt" onclick="relTap(${i})">${o}</button>`).join('')}</div>`;
}
async function relTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true; const b = $$('.copt'), ok = i === A.ans;
  b[A.ans].classList.add('okc'); if (!ok) b[i].classList.add('koc'); ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  await mSleep(1100); if (MGA === A) { A.lock = false; relNext(); }
}

/* ---------- Progrés ---------- */
function mSpark(h, low) {
  if (!h || h.length < 2) return '';
  const v = h.slice(-12).map(x => x[1]), mn = Math.min(...v), mx = Math.max(...v), W = 120, H = 34;
  const pts = v.map((y, i) => `${(i / (v.length - 1) * W).toFixed(1)},${(mx === mn ? H / 2 : low ? 4 + (y - mn) / (mx - mn) * (H - 8) : H - 4 - (y - mn) / (mx - mn) * (H - 8)).toFixed(1)}`).join(' ');
  return `<svg class="mspark" viewBox="0 0 ${W} ${H}" aria-hidden="true"><polyline points="${pts}" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function mentProgres() {
  const m = MS(), days = Object.entries(m.days), mes = today().slice(0, 7), dMes = days.filter(([d, x]) => d.startsWith(mes) && x.s.length).length, hab = days.filter(([, x]) => x.hab).length;
  app.innerHTML = mShell('progres', `<h1 class="mh1">${L('El teu progrés', 'Tu progreso')}</h1>
    <div class="mstats"><div><b>${P.streak || 0}</b><span>${L('dies seguits', 'días seguidos')}</span></div><div><b>${dMes}</b><span>${L('dies aquest mes', 'días este mes')}</span></div><div><b>${hab}</b><span>${L('hàbits fets', 'hábitos hechos')}</span></div></div>
    <div class="mprog">${Object.entries(MG).map(([g, o]) => { const h = m.hist[g] || [], last = h.length ? h[h.length - 1][1] : null;
      return `<div class="mpr"><span class="mgi">${o.ic}</span><div><b>${tx(o.n)}</b><small>${tx(MCAP[o.cap])}${g !== 'vel' && g !== 'mem' ? ` · ${L('nivell', 'nivel')} ${mLvl(g)}` : ''}</small></div><div class="mprv">${h.length ? `<b>${mNice(g, m.best[g])}</b><small>${L('últim', 'último')}: ${mNice(g, last)}</small>` : `<small>${L('encara no hi has jugat', 'aún no has jugado')}</small>`}</div>${mSpark(h, o.low || g === 'sud')}</div>`; }).join('')}</div>
    <p class="mnote">${L("Compara't només amb tu mateix: cada persona té el seu ritme. El que compta és la constància.", 'Compárate solo contigo: cada persona tiene su ritmo. Lo que cuenta es la constancia.')}</p>
    <button class="link mcien" onclick="mentCiencia()">${L('Què diu la ciència sobre entrenar la ment?', '¿Qué dice la ciencia sobre entrenar la mente?')}</button>`);
}
function mentCiencia() {
  modal(`<div class="sheet mcsheet"><h3>${L('Què en sabem?', '¿Qué sabemos?')}</h3>
    <p>${L('Els jocs mentals entrenen sobretot allò que practiques: si fas sudokus, et sortiran millor els sudokus. Que aquesta millora passi a la vida diària encara s\'està estudiant.', 'Los juegos mentales entrenan sobre todo lo que practicas: si haces sudokus, te saldrán mejor los sudokus. Que esa mejora pase a la vida diaria todavía se está estudiando.')}</p>
    <p>${L("En estudis amb gent gran, com l'estudi ACTIVE als Estats Units, entrenar la velocitat amb què processem el que veiem (com a «Mirada ràpida») ha donat resultats interessants a llarg termini, però la ciència encara no en treu conclusions definitives.", 'En estudios con personas mayores, como el estudio ACTIVE en Estados Unidos, entrenar la velocidad con la que procesamos lo que vemos (como en «Mirada rápida») ha dado resultados interesantes a largo plazo, pero la ciencia aún no saca conclusiones definitivas.')}</p>
    <p>${L("El que més s'associa a un envelliment saludable és la combinació de coses: moure's cada dia, tenir vida social, dormir bé, cuidar l'oïda i la tensió, i continuar aprenent. Per això cada dia et proposem també un hàbit fora de la pantalla.", 'Lo que más se asocia a un envejecimiento saludable es la combinación de cosas: moverse cada día, tener vida social, dormir bien, cuidar el oído y la tensión, y seguir aprendiendo. Por eso cada día te proponemos también un hábito fuera de la pantalla.')}</p>
    <p class="mwarn">${L("Numi Ment és una manera agradable de mantenir la ment activa. No és un tractament mèdic ni en substitueix cap. Si et preocupa la memòria, parla-ho amb el teu metge.", 'Numi Ment es una manera agradable de mantener la mente activa. No es un tratamiento médico ni sustituye a ninguno. Si te preocupa la memoria, háblalo con tu médico.')}</p>
    <button class="btn big" onclick="closeModal()">${L("D'ACORD", 'DE ACUERDO')}</button></div>`);
}

/* ---------- Perfil ---------- */
function mentProfile() {
  app.innerHTML = mShell('profile', `<h1 class="mh1">${esc(P.name)}</h1>
    <section class="mtcard"><div class="mthead"><b>${L('Idioma', 'Idioma')}</b></div>${langPill()}</section>
    ${P.code ? `<section class="mtcard"><div class="mthead"><b>${L('El meu compte', 'Mi cuenta')}</b></div>${P.username ? `<p>${L('Usuari', 'Usuario')}: <b>${esc(P.username)}</b></p>` : ''}<p>${L('Codi secret', 'Código secreto')}: <b class="mono">${P.code}</b></p><p class="mmut">${L("Amb l'usuari i la contrasenya, o amb el codi, pots entrar des de qualsevol mòbil o ordinador.", 'Con el usuario y la contraseña, o con el código, puedes entrar desde cualquier móvil u ordenador.')}</p>${P.username ? '' : `<button class="btn ghost" onclick="accountModal()">${L('CREA USUARI I CONTRASENYA', 'CREA USUARIO Y CONTRASEÑA')}</button>`}</section>` : ''}
    <section class="mtcard"><div class="mthead"><b>Premium</b></div>${typeof premiumBox === 'function' ? premiumBox() : ''}</section>
    <section class="mtcard"><div class="mthead"><b>${L('So', 'Sonido')}</b></div><button class="btn ghost" onclick="P.sound=!P.sound;save();mentProfile()">${P.sound ? '🔊 ' + L('ACTIVAT', 'ACTIVADO') : '🔇 ' + L('DESACTIVAT', 'DESACTIVADO')}</button></section>
    <div class="mprofb"><button class="btn ghost" onclick="renderProfiles()">${L('CANVIA DE PERFIL', 'CAMBIA DE PERFIL')}</button><button class="link" onclick="mentCiencia()">${L('Sobre Numi Ment', 'Sobre Numi Ment')}</button><a class="link" href="https://numimates.com/privacitat" target="_blank" rel="noopener">${L('Privadesa', 'Privacidad')}</a></div>`);
}

/* ---------- Alta: «Altres» a la pantalla de què estudies ---------- */
function onbMent() {
  setVariant('ment');
  app.innerHTML = `<div class="scr varsplash mentsplash"><img class="onb-logo" src="${VAR.logo}" alt="${VAR.name}"><h1>${L('Et donem la benvinguda a Numi Ment', 'Te damos la bienvenida a Numi Ment')}</h1>
    <p class="sub">${L("Cada dia, una sessió d'uns 10 minuts amb 3 jocs per mantenir la ment activa: memòria, atenció, càlcul, lògica i paraules. La dificultat s'adapta a tu.", 'Cada día, una sesión de unos 10 minutos con 3 juegos para mantener la mente activa: memoria, atención, cálculo, lógica y palabras. La dificultad se adapta a ti.')}</p>
    <button class="btn big" onclick="onbMentGo()">${L('COMENCEM', 'EMPECEMOS')}</button><button class="link" onclick="ONB.stage=null;ONB.variant=null;onb(1)">${L('Tornar', 'Volver')}</button></div>`;
}
function onbMentGo() {
  const id = 'p' + Date.now().toString(36);
  P = { id, name: ONB.name, goal: 20, sound: true, unlockAll: false, lang: LANG, ...freshProgress(), course: 0, baseCourse: 0, maxCourse: 0, holdReg: true, variant: 'ment', ment: {},
    survey: { curs: 'Numi Ment', age: 'adult', date: today() } };
  DB.profiles[id] = P; DB.current = id; saveLocal(); onbAccount();
}

// app.js ja ha pintat la primera pantalla abans que es carregués aquest fitxer
if (P && varOf(P) === 'ment' && !appMismatch(P) && VIEW !== 'onboard') go('home');

/* ---------- Reptes amb amics (duels de 2 o reptes de grup fins a 10, 48 hores) ----------
   Fan servir l'API de batalles de Numi Mates (api/battle.js) amb joc i dificultat fixos: tothom rep les mateixes
   preguntes (llavor comuna) i es classifica per encerts; en empat, menys errors o menys temps. És de Premium. */
const MDUEL = ['cal', 'com', 'ref', 'rel', 'ate', 'int'];
const MTIMED = ['ate', 'int', 'cal'];
let MD = null;
const mBat = async (action, extra = {}) => { const r = await fetch('/api/battle', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action, code: P.code, name: P.name, ment: true, ...extra }) }); const d = await r.json().catch(() => ({})); return { status: r.status, ...d }; };
const mDuelErr = e => e.status === 402 || e.error === 'premium' ? L('Els reptes amb amics són de Premium.', 'Los retos con amigos son de Premium.') : e.error === 'no-existeix' ? L('No trobem aquest codi. Revisa-ho.', 'No encontramos ese código. Revísalo.') : e.error === 'plena' ? L('Aquest repte ja és ple.', 'Este reto ya está lleno.') : e.error === 'caducada' ? L('Aquest repte ja ha acabat.', 'Este reto ya ha terminado.') : e.error === 'altra-app' ? L('Aquest codi és una batalla de Numi Mates, no un repte de Numi Ment.', 'Este código es una batalla de Numi Mates, no un reto de Numi Ment.') : L("No s'ha pogut fer. Comprova la connexió.", 'No se ha podido hacer. Comprueba la conexión.');
async function mentReptes() {
  mStop(); VIEW = 'reptes';
  app.innerHTML = mShell('jocs', `<button class="link mback" onclick="go('jocs')">‹ ${L('Jocs', 'Juegos')}</button><h1 class="mh1">${L('Reptes amb amics', 'Retos con amigos')}</h1>
    <p class="mlead">${L("Repta algú (o un grup de fins a 10) al mateix joc, amb les mateixes preguntes. Cadascú juga quan vol durant 48 hores i després veieu qui ho ha fet millor.", 'Reta a alguien (o a un grupo de hasta 10) al mismo juego, con las mismas preguntas. Cada uno juega cuando quiere durante 48 horas y después veis quién lo ha hecho mejor.')}</p>
    <div class="mdbtns"><button class="btn big mbtn" onclick="mDuelNew()">${L('CREA UN REPTE', 'CREA UN RETO')}</button><button class="btn ghost big" onclick="mDuelCode()">${L('TINC UN CODI', 'TENGO UN CÓDIGO')}</button></div>
    <h2 class="mh2">${L('Els teus reptes', 'Tus retos')}</h2><div id="mdlist" class="mdlist"><p class="mmut">${L('Carregant…', 'Cargando…')}</p></div>`);
  if (!P.code) { $('#mdlist').innerHTML = `<p class="mmut">${L('Primer cal que tinguis el compte creat.', 'Primero necesitas tener la cuenta creada.')}</p>`; return; }
  const r = await mBat('mine'); const el = $('#mdlist'); if (!el) return;
  const list = (r.list || []).filter(Boolean);
  el.innerHTML = list.length ? list.map(st => { const me = st.players.find(p => p.me) || {}, done = st.players.filter(p => p.finished).length;
    return `<button class="mdit" onclick="mDuelOpen('${st.code}')"><span class="mgi">${MG[st.joc] ? MG[st.joc].ic : '🏆'}</span><span><b>${MG[st.joc] ? tx(MG[st.joc].n) : ''} · ${st.kind === 'repte' ? L('grup', 'grupo') : L('duel', 'duelo')}</b><small>${st.players.length} ${L('participants', 'participantes')} · ${done} ${L('han jugat', 'han jugado')}${!st.over && !st.expired ? ` · ${L('queden', 'quedan')} ${st.hoursLeft} h` : ''}</small></span><span class="mdst ${me.finished ? '' : 'go'}">${me.finished ? (me.pos ? me.pos + 'r' : '✓') : L('JUGA', 'JUEGA')}</span></button>`; }).join('')
    : `<p class="mmut">${L('Encara no en tens cap. Crea el primer!', 'Aún no tienes ninguno. ¡Crea el primero!')}</p>`;
}
function mDuelNew() {
  if (!isPremium()) return mPremium();
  MD = { joc: 'cal', kind: 'duel', lv: 5 };
  mDuelForm();
}
function mDuelForm() {
  const lvs = [[2, L('Fàcil', 'Fácil')], [5, L('Normal', 'Normal')], [8, L('Difícil', 'Difícil')]];
  modal(`<div class="sheet mdform"><h3>${L('Nou repte', 'Nuevo reto')}</h3>
    <p class="mlab">${L('Joc', 'Juego')}</p><div class="mdgrid">${MDUEL.map(g => `<button class="${MD.joc === g ? 'on' : ''}" onclick="MD.joc='${g}';mDuelForm()"><span>${MG[g].ic}</span>${tx(MG[g].n)}</button>`).join('')}</div>
    <p class="mlab">${L('Amb qui', 'Con quién')}</p><div class="mdseg"><button class="${MD.kind === 'duel' ? 'on' : ''}" onclick="MD.kind='duel';mDuelForm()">${L('Una persona', 'Una persona')}</button><button class="${MD.kind === 'repte' ? 'on' : ''}" onclick="MD.kind='repte';mDuelForm()">${L('Un grup (fins a 10)', 'Un grupo (hasta 10)')}</button></div>
    <p class="mlab">${L('Dificultat', 'Dificultad')}</p><div class="mdseg">${lvs.map(([v, t]) => `<button class="${MD.lv === v ? 'on' : ''}" onclick="MD.lv=${v};mDuelForm()">${t}</button>`).join('')}</div>
    <p class="err" id="mderr"></p><button class="btn big mbtn" onclick="mDuelCreate()">${L('CREA EL REPTE', 'CREA EL RETO')}</button></div>`);
}
async function mDuelCreate() {
  const r = await mBat('create', { joc: MD.joc, kind: MD.kind, lv: MD.lv });
  if (!r.code) return $('#mderr').textContent = mDuelErr(r);
  closeModal(); mDuelShare(r);
}
let MD_MSG = '';
function mDuelShare(st) {
  const msg = MD_MSG = L(`Et repto a ${tx(MG[st.joc].n)} a Numi Ment! Entra a ment.numimates.com, ves a Jocs → Reptes amb amics i posa el codi ${st.code}. Tens 48 hores.`, `¡Te reto a ${tx(MG[st.joc].n)} en Numi Ment! Entra en ment.numimates.com, ve a Juegos → Retos con amigos y pon el código ${st.code}. Tienes 48 horas.`);
  modal(`<div class="sheet card cent"><h3>${L('Repte creat', 'Reto creado')}</h3><p>${L('Envia aquest codi a qui vulguis reptar:', 'Envía este código a quien quieras retar:')}</p>
    <div class="codecard big"><div><small>${tx(MG[st.joc].n)}</small><b>${st.code}</b></div></div>
    <a class="btn big mbtn" href="https://wa.me/?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">${L('ENVIA PER WHATSAPP', 'ENVIAR POR WHATSAPP')}</a>
    ${navigator.share ? `<button class="btn ghost big" onclick="navigator.share({text:MD_MSG}).catch(()=>{})">${L('ALTRES MANERES', 'OTRAS FORMAS')}</button>` : ''}
    <button class="btn ghost big" onclick="closeModal();mDuelPlay('${st.code}')">${L('JUGA ARA', 'JUEGA AHORA')}</button></div>`);
}
function mDuelCode() {
  if (!isPremium()) return mPremium();
  modal(`<div class="sheet card cent"><h3>${L('Entra a un repte', 'Entra en un reto')}</h3><p>${L("Escriu el codi que t'han enviat.", 'Escribe el código que te han enviado.')}</p>
    <input id="mdcode" class="nm" maxlength="14" placeholder="ZEUS-1234" autocapitalize="characters" autocomplete="off" style="text-transform:uppercase;text-align:center;letter-spacing:.08em">
    <p class="err" id="mderr"></p><button class="btn big mbtn" onclick="mDuelJoin()">${L('ENTRA', 'ENTRA')}</button></div>`);
  setTimeout(() => { const i = $('#mdcode'); i && i.focus(); }, 60);
}
async function mDuelJoin() {
  const c = ($('#mdcode').value || '').trim().toUpperCase(); if (!c) return;
  const r = await mBat('join', { bcode: c });
  if (!r.code) return $('#mderr').textContent = mDuelErr(r);
  closeModal(); mDuelOpen(r.code, r);
}
async function mDuelOpen(code, st) {
  st = st || await mBat('state', { bcode: code });
  if (!st.code) return toast(mDuelErr(st));
  const me = st.players.find(p => p.me);
  if (me && me.finished) return mDuelResult(st);
  mDuelPlay(code, st);
}
async function mDuelPlay(code, st) {
  st = st || await mBat('state', { bcode: code });
  if (!st.code || !MG[st.joc]) return toast(mDuelErr(st));
  if (st.over || st.expired) return mDuelResult(st);
  mStop(); MGCUR = st.joc; VIEW = 'mgame';
  const g = st.joc, rivals = st.players.filter(p => !p.me).map(p => esc(p.name)).join(', ');
  MGA = { ses: false, duel: { code: st.code, seed: st.seed, lv: st.lv || 5 } };
  mGameShell(g, '', `<div class="mintro"><span class="mbig">${MG[g].ic}</span><h2>${tx(MG[g].n)}</h2><p class="mdtag">${st.kind === 'repte' ? L('Repte de grup', 'Reto de grupo') : L('Duel', 'Duelo')}${rivals ? ' · ' + L('amb', 'con') + ' ' + rivals : ''}</p>${mHow(g)}
    <p class="mmut">${L('Només tens una oportunitat: quan comencis, compta.', 'Solo tienes una oportunidad: cuando empieces, cuenta.')}</p>
    <button class="btn big mbtn" onclick="mDuelGo()">${L('COMENÇA EL REPTE', 'EMPIEZA EL RETO')}</button></div>`);
}
async function mDuelGo() {
  const A = MGA; if (!A || !A.duel) return;
  // es marca com a començat perquè no es pugui repetir
  mBat('progress', { bcode: A.duel.code, done: 0, correct: 0, ms: 0, finished: false });
  MRNG = mSeed(A.duel.seed); A.duel.t0 = Date.now();
  mStart(MGCUR);
}
async function mDuelEnd(g) {
  const A = MGA; clearInterval(MGA_TK); const d = A.duel, timed = MTIMED.includes(g);
  const correct = A.ok | 0, errs = timed ? (A.ko | 0) : Math.max(0, (A.q | 0) - correct), done = correct + errs;
  const ms = timed ? errs * 1000 : Date.now() - d.t0;
  mStop(); VIEW = 'mgame';
  app.innerHTML = `<div class="mgame"><div class="mres"><span class="mbig">${MG[g].ic}</span><h2>${L('Repte fet!', '¡Reto hecho!')}</h2><p class="mscore">${correct}</p><p class="mmut">${L('Enviant el resultat…', 'Enviando el resultado…')}</p></div></div>`;
  let st = null;
  for (let t = 0; t < 3 && !(st && st.code); t++) { st = await mBat('progress', { bcode: d.code, done, correct, ms, finished: true }).catch(() => null); if (!(st && st.code)) await new Promise(r => setTimeout(r, 1500)); }
  touchStreak(); save(); syncNow();
  if (st && st.code) mDuelResult(st); else toast(L("No s'ha pogut enviar el resultat. Torna-ho a provar des de Reptes.", 'No se ha podido enviar el resultado. Vuelve a probarlo desde Retos.'));
}
function mDuelResult(st) {
  mStop(); VIEW = 'reptes';
  const timed = MTIMED.includes(st.joc), fin = st.players.filter(p => p.finished).sort((a, b) => b.correct - a.correct || a.ms - b.ms), wait = st.players.filter(p => !p.finished);
  const me = st.players.find(p => p.me) || {}, pos = fin.indexOf(me) + 1;
  const row = (p, i) => `<div class="mdrow ${p.me ? 'me' : ''}"><span class="mdpos">${i + 1}</span><b>${esc(p.name)}${p.me ? ' · ' + L('tu', 'tú') : ''}</b><span>${p.correct} ${L('encerts', 'aciertos')}${timed ? (p.done - p.correct ? ` · ${p.done - p.correct} ${L('errors', 'errores')}` : '') : ` · ${Math.round(p.ms / 1000)} s`}</span></div>`;
  app.innerHTML = mShell('jocs', `<button class="link mback" onclick="mentReptes()">‹ ${L('Reptes', 'Retos')}</button>
    <h1 class="mh1">${MG[st.joc] ? MG[st.joc].ic + ' ' + tx(MG[st.joc].n) : ''}</h1>
    <p class="mlead">${st.over || st.expired ? (pos === 1 ? L('Has guanyat el repte! 🏆', '¡Has ganado el reto! 🏆') : L('Repte acabat.', 'Reto terminado.')) : wait.length ? L(`Esperant ${wait.length === 1 ? 'una persona' : wait.length + ' persones'} · queden ${st.hoursLeft} h`, `Esperando a ${wait.length === 1 ? 'una persona' : wait.length + ' personas'} · quedan ${st.hoursLeft} h`) : L('Ja heu jugat tots.', 'Ya habéis jugado todos.')}</p>
    <section class="mtcard"><div class="mdrank">${fin.map(row).join('')}${wait.map(p => `<div class="mdrow wait"><span class="mdpos">·</span><b>${esc(p.name)}</b><span>${L('encara no ha jugat', 'aún no ha jugado')}</span></div>`).join('')}</div></section>
    ${!st.over && !st.expired && st.players.length < st.max ? `<button class="btn big mbtn" onclick="mDuelShare({ code: '${st.code}', joc: '${st.joc}' })">${L('CONVIDA ALGÚ MÉS', 'INVITA A ALGUIEN MÁS')}</button>` : ''}
    <button class="btn ghost big" onclick="mentReptes()">${L('TORNA ALS REPTES', 'VUELVE A LOS RETOS')}</button>`);
}
