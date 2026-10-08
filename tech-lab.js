/* ===== Numi Tech · Laboratori: projectes lliures amb els editors de l'app =====
   Tres eines, sense reptes ni correcció: el món d'en Bit (dissenya el mapa i programa'l), l'escenari (tria personatges i
   fons i fes una animació, un conte o un joc) i el Maqueen (dissenya la pista i programa el robot). Es desa al portafoli
   («Projectes») i no compta com a sessió feta. Es fa servir com una sessió sintètica (TSS.lab), igual que la teoria a part. */
const TLAB = {
  // personatges i fons de l'escenari (els mateixos dibuixos de Tech Creadors)
  hero: [['numi', 'lr'], ['gat', 'lr'], ['nau', 'none'], ['peix', 'lr'], ['drac', 'lr'], ['ocell', 'lr'], ['gos', 'lr'], ['guineu', 'lr']],
  thing: ['moneda', 'estrella', 'poma', 'cor', 'regal', 'platan', 'diamant', 'maduixa'],
  foe: [['meteorit', 'all'], ['cranc', 'lr'], ['medusa', 'none'], ['roca', 'none'], ['pilota', 'all'], ['cocodril', 'lr'], ['foc', 'none'], ['llamp', 'none']],
  bg: ['espai', 'aquari', 'bosc', 'ciutat', 'platja', 'parc', 'nit', 'laberint', 'cel', 'escenari'],
  stagePal: ['move', 'turn', 'goto', 'gotorand', 'glide', 'setx', 'sety', 'chx', 'chy', 'point', 'pointto', 'bounce', 'say', 'think', 'costume', 'next', 'size', 'chsize', 'show', 'hide', 'ghost', 'front', 'bg', 'nextbg', 'sound', 'send', 'wait', 'rep', 'forever', 'until', 'waitu', 'stop', 'clone', 'delclone', 'if', 'else', 'and', 'setv', 'chv', 'timer0', 'cond+'],
  stageHats: ['flag', 'key:left', 'key:right', 'key:up', 'key:down', 'key:space', 'click', 'clone', 'msg:fi'],
  bitPal: ['fwd', 'left', 'right', 'pick', 'drop', 'rep', 'until', 'if', 'else', 'paint', 'light', 'note'],
  bitConds: ['goal', 'wall', 'free', 'freeL', 'freeR', 'gem', 'box'],
  roboPal: ['run', 'stop', 'patrol', 'wait', 'car', 'under', 'note', 'icon', 'num', 'clear', 'set', 'change', 'calc', 'rep', 'while', 'until', 'if', 'else', 'and'],
  pick: { hero: 0, thing: 0, foe: 0, bg: 2 }
};
const tLabCourse = id => TECH.find(c => c.id === id);
// les eines del laboratori, segons els cursos de l'alumne/a (amb la vista de professor, totes)
function tLabTools() {
  const acc = typeof tAccess === 'function' ? tAccess() : { courses: new Set(TECH.map(c => c.id)) };
  return [
    { id: 'bit', c: 'robot', ico: '🤖', t: L("El món d'en Bit", 'El mundo de Bit'), d: L('Dibuixa una illa amb camins, roques i estrelles, i programa en Bit perquè la recorri.', 'Dibuja una isla con caminos, rocas y estrellas, y programa a Bit para que la recorra.') },
    { id: 'stage', c: 'creadors', ico: '🎭', t: L("L'escenari", 'El escenario'), d: L('Tria personatges i un fons, i crea una animació, un conte interactiu o un videojoc.', 'Elige personajes y un fondo, y crea una animación, un cuento interactivo o un videojuego.') },
    { id: 'robo', c: 'robotica', ico: '🚗', t: L('El taller del Maqueen', 'El taller del Maqueen'), d: L('Dissenya una pista amb parets, cinta i llaunes, i programa el robot Maqueen.', 'Diseña una pista con paredes, cinta y latas, y programa el robot Maqueen.') },
    { id: 'model', c: 'model', ico: '🧊', t: L('Taller 3D', 'Taller 3D'), d: L('Modela un objecte amb formes, mides i forats, i descarrega\'l en STL per imprimir-lo en 3D.', 'Modela un objeto con formas, medidas y agujeros, y descárgalo en STL para imprimirlo en 3D.') },
    { id: 'modelpro', c: 'modelpro', ico: '⚙️', t: L('Taller 3D amb codi', 'Taller 3D con código'), d: L('Programa una peça paramètrica amb blocs o amb codi i exporta-la en STL o en .scad.', 'Programa una pieza paramétrica con bloques o con código y expórtala en STL o en .scad.') }
  ].filter(x => typeof TECH === 'undefined' || TECH.some(c => c.id === x.c)).filter(x => acc.courses.has(x.c) || (P && P.unlockAll));
}
function tLabHTML() {
  const tools = tLabTools(); if (!tools.length) return '';
  return `<section class="tlab"><div class="tlabh"><span class="tlabi" aria-hidden="true">🧪</span><div><b>${L('Laboratori', 'Laboratorio')}</b><p>${L('Crea el teu propi projecte des de zero, sense reptes: el que vulguis, amb tots els blocs.', 'Crea tu propio proyecto desde cero, sin retos: lo que quieras, con todos los bloques.')}</p></div></div>
    <div class="tlabg">${tools.map(x => { const c = tLabCourse(x.c); return `<button class="tlabt" style="--cc:${c.color}" onclick="tLab('${x.id}')"><span class="tlabti">${x.ico}</span><span class="tlabtx"><b>${x.t}</b><small>${x.d}</small></span><span class="tlabgo">${L('Nou projecte', 'Nuevo proyecto')} ›</span></button>`; }).join('')}</div></section>`;
}
// obre una eina: una sessió sintètica de dos passos (preparar + programar)
function tLab(kind) {
  TLAB.name = '';
  const steps = (kind === 'model' || kind === 'modelpro') && typeof m3LabSteps === 'function' ? m3LabSteps(kind) : kind === 'bit' ? [
    { k: 'design', ph: 'crea', slot: 'lab', size: [8, 7], q: L("<b>Dibuixa el teu món.</b> Tria una eina i toca les caselles: camins, roques, aigua, estrelles, caixes, cases i la bandera. Posa-hi en Bit, dona-li un nom i desa'l.", '<b>Dibuja tu mundo.</b> Elige una herramienta y toca las casillas: caminos, rocas, agua, estrellas, cajas, casas y la bandera. Pon a Bit, dale un nombre y guárdalo.') },
    { k: 'mybuild', ph: 'crea', slot: 'lab', lab: 'bit', pal: TLAB.bitPal, conds: TLAB.bitConds, q: L('Programa <b>«{nom}»</b> com vulguis: tens tots els blocs. Quan t\'agradi, desa el projecte.', 'Programa <b>«{nom}»</b> como quieras: tienes todos los bloques. Cuando te guste, guarda el proyecto.') }
  ] : kind === 'stage' ? [
    { k: 'labpick', ph: 'crea' },
    { k: 'labstage', ph: 'crea', lab: 'stage' }
  ] : [
    { k: 'rdesign', ph: 'crea', slot: 'lab', q: L("<b>Dissenya la pista.</b> Tria una eina i toca les caselles: parets, cinta negra, llaunes, la llum i la meta. Posa-hi el robot, dona-li un nom i desa-la.", '<b>Diseña la pista.</b> Elige una herramienta y toca las casillas: paredes, cinta negra, latas, la luz y la meta. Pon el robot, dale un nombre y guárdala.') },
    { k: 'rmybuild', ph: 'crea', slot: 'lab', lab: 'robo', pal: TLAB.roboPal, vars: ['v', 'n'], varNames: { v: 'velocitat|velocidad', n: 'comptador|contador' }, q: L('Programa el Maqueen a <b>«{nom}»</b> com vulguis: tens tots els blocs. Quan t\'agradi, desa el projecte.', 'Programa el Maqueen en <b>«{nom}»</b> como quieras: tienes todos los bloques. Cuando te guste, guarda el proyecto.') }
  ];
  const cid = kind === 'model' || kind === 'modelpro' ? kind : kind === 'bit' ? 'robot' : kind === 'stage' ? 'creadors' : 'robotica', c = tLabCourse(cid);
  TSS = { c, s: { id: 'lab:' + cid, t: L('Laboratori', 'Laboratorio'), steps }, id: 'lab:' + cid, i: 0, ok: 0, n: 0, lab: kind };
  VIEW = 'tsess'; tStep(); tLabTop();
}
function tLabTop() {
  const ph = document.querySelector('.tstop .tsph'); if (ph) ph.textContent = '🧪 ' + L('Laboratori', 'Laboratorio');
  const bar = document.querySelector('.tstop .tphases'); if (bar) bar.style.visibility = 'hidden';
  const mn = document.querySelector('.tstop .tsmin'); if (mn) mn.textContent = `${TSS.i + 1}/${TSS.s.steps.length}`;
}
// desar el projecte del laboratori, en qualsevol moment
function tLabSave() {
  const t = TS_(), id = 'pj' + Date.now().toString(36), st = TSS.st;
  const mm = TSS.lab === 'bit' ? tMyMap('lab') : TSS.lab === 'robo' && typeof rdMine === 'function' ? rdMine('lab') : null;
  if (TSS.lab === 'bit' && TB) t.port.push({ id, sid: TSS.id, t: (mm && mm.name) || L('El meu món', 'Mi mundo'), w: mm ? { map: mm.map } : TB.spec, prog: bitClone(TB.prog), fns: TB.fns ? bitClone(TB.fns) : null, evs: TB.evs ? bitClone(TB.evs) : null, d: today(), lab: 1 });
  else if (TSS.lab === 'robo' && RB) t.port.push({ id, kind: 'robo', sid: TSS.id, t: (mm && mm.name) || L('La meva pista', 'Mi pista'), w: mm ? mm.spec : RB.spec, prog: rbClone(RB.prog), st: { scripts: st.scripts, vars: st.vars, varNames: st.varNames }, d: today(), lab: 1 });
  else if (TSS.lab === 'stage' && SG) t.port.push({ id, kind: 'stage', sid: TSS.id, t: (TLAB.name || '').trim() || L('El meu projecte', 'Mi proyecto'), w: st.w, progs: JSON.parse(JSON.stringify(SG.progs, (k, v) => k === '_id' ? undefined : v)), st: { edit: SG.edit, hats: SG.hats, varNames: st.varNames }, d: today(), lab: 1 });
  else return;
  if (t.port.length > 60) t.port.shift();
  save(); toast(L('Projecte desat a «Projectes»!', '¡Proyecto guardado en «Proyectos»!'));
  tStop(); TSS = null; TB = null; go('projectes');
}
// el peu sempre deixa desar (al laboratori no hi ha res a «resoldre»)
function tLabFoot() { tFoot(L('Desa el projecte', 'Guarda el proyecto'), tLabSave, true); }
// pas 1 de l'escenari: triar el protagonista, un objecte, un enemic i el fons
TSTEP.labpick = function () {
  const P0 = TLAB.pick, art = n => typeof STG_ART !== 'undefined' && STG_ART[n] ? `<span class="tlaba">${STG_ART[n].svg(0)}</span>` : `<span class="tlabn">${n}</span>`;
  const row = (key, list, label) => `<div class="tlabrow"><b>${label}</b><div class="tlabch">${list.map((x, i) => { const n = Array.isArray(x) ? x[0] : x; return `<button class="${P0[key] === i ? 'on' : ''}" onclick="TLAB.pick.${key}=${i};TSTEP.labpick()" aria-label="${n}">${art(n)}</button>`; }).join('')}</div></div>`;
  const bgs = `<div class="tlabrow"><b>${L('El fons', 'El fondo')}</b><div class="tlabch bg">${TLAB.bg.map((n, i) => `<button class="${P0.bg === i ? 'on' : ''}" onclick="TLAB.pick.bg=${i};TSTEP.labpick()">${typeof STG_BG !== 'undefined' && STG_BG[n] ? `<span class="tlabbg">${STG_BG[n].svg()}</span>` : n}</button>`).join('')}</div></div>`;
  $('#tsb').innerHTML = `<div class="tcol tlabpick"><div class="tqh"><span class="tqbit">${tHost('happy')}</span><h2 class="tsq">${L('Tria el repartiment del teu projecte: després el programaràs com vulguis.', 'Elige el reparto de tu proyecto: después lo programarás como quieras.')}</h2></div>
    <label class="tlabrow"><b>${L('Nom del projecte', 'Nombre del proyecto')}</b><input id="tlabname" class="tlabname" maxlength="28" value="${esc(TLAB.name || '')}" oninput="TLAB.name=this.value" placeholder="${L('p. ex. El drac viatger', 'p. ej. El dragón viajero')}"></label>${row('hero', TLAB.hero, L('El protagonista', 'El protagonista'))}${row('thing', TLAB.thing, L('Un objecte', 'Un objeto'))}${row('foe', TLAB.foe, L('Un altre personatge', 'Otro personaje'))}${bgs}</div>`;
  tFoot(L('Som-hi!', '¡Vamos!'), tNext, true); tLabTop();
};
// pas 2 de l'escenari: l'editor amb tots els blocs i els tres personatges
TSTEP.labstage = function (st) {
  const p = TLAB.pick, H = TLAB.hero[p.hero], F = TLAB.foe[p.foe];
  st.w = { bg: TLAB.bg[p.bg], bgs: TLAB.bg, vars: ['punts', 'vides'], keys: ['left', 'right', 'up', 'down', 'space'], goal: [], time: 30,
    sprites: [{ id: 'heroi', art: H[0], rot: H[1], x: -150, y: -100, size: 70 }, { id: 'premi', art: TLAB.thing[p.thing], x: 140, y: 80, size: 70 }, { id: 'enemic', art: F[0], rot: F[1], x: 20, y: 110, size: 70 }] };
  Object.assign(st, { edit: ['heroi', 'premi', 'enemic'], hats: TLAB.stageHats, pal: TLAB.stagePal, ops: ['x', 'y', 'rnd', 'timer', 'mx', 'my'], msgs: ['fi'], varNames: { punts: 'punts|puntos', vides: 'vides|vidas' },
    texts: ['Hola!|¡Hola!', 'Som-hi!|¡Vamos!', 'Has guanyat!|¡Has ganado!', 'Has perdut!|¡Has perdido!', 'Ai!|¡Ay!', 'Fes servir les fletxes!|¡Usa las flechas!'],
    q: L('Ara, el que vulguis: una <b>animació</b>, un <b>conte</b> o un <b>videojoc</b>. Tens tots els blocs i els tres personatges. Toca la bandera per provar-ho.', 'Ahora, lo que quieras: una <b>animación</b>, un <b>cuento</b> o un <b>videojuego</b>. Tienes todos los bloques y los tres personajes. Toca la bandera para probarlo.') });
  sgMake(st); SG.free = true; SG.onDone = () => { }; sgStage(st);
  tLabFoot(); tLabTop();
};
// els passos del món d'en Bit i del Maqueen fan servir els de la unitat 8; aquí només se'ls canvia el peu i la desada
{ const d0 = TSTEP.design, b0 = TSTEP.mybuild, rd0 = TSTEP.rdesign, rb0 = TSTEP.rmybuild;
  TSTEP.design = function (st) { d0.call(this, st); if (TSS && TSS.lab) tLabTop(); };
  TSTEP.rdesign = function (st) { rd0.call(this, st); if (TSS && TSS.lab) tLabTop(); };
  TSTEP.mybuild = function (st) { b0.call(this, st); if (TSS && TSS.lab && TB) { TB.onDone = () => tLabFoot(); TB.onFail = () => { }; TB.conds = st.conds; tLabFoot(); tLabTop(); } };
  TSTEP.rmybuild = function (st) { rb0.call(this, st); if (TSS && TSS.lab && typeof RB !== 'undefined' && RB) { RB.onDone = () => tLabFoot(); RB.onFail = () => { }; tLabFoot(); tLabTop(); } };
}
// sortir del laboratori: torna a «Projectes», sense desar temps ni sessions
{ const n0 = tNext, q0 = tQuit, f0 = tFinish, back = () => { tStop(); TSS = null; TB = null; go('projectes'); };
  tNext = function () { if (TSS && TSS.lab) { if (TSS.i < TSS.s.steps.length - 1) { TSS.i++; tStep(); return tLabTop(); } return back(); } return n0.apply(this, arguments); };
  tQuit = function () { if (TSS && TSS.lab) { if (TSS.i > 0 && !confirm(L('Vols sortir sense desar el projecte?', '¿Quieres salir sin guardar el proyecto?'))) return; return back(); } return q0.apply(this, arguments); };
  tFinish = function () { if (TSS && TSS.lab) return back(); return f0.apply(this, arguments); }; }
