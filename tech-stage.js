/* ===== Numi Tech · l'escenari de Tech Creadors (prefix stg) =====
   Un escenari de 480 × 360 amb personatges, fons i un llenguatge de blocs per esdeveniments, fet a mida per a Numi:
   · Els projectes són dades (JSON): fons, variables i personatges amb els seus programes. Cap «eval»: un intèrpret propi
     executa cada programa com un generador (multitasca cooperativa: cada bucle i cada espera cedeixen el torn un fotograma).
   · El nucli (definicions, analitzador del text dels programes, intèrpret i comprovador) no toca el DOM: es pot provar
     amb Node, i el mateix codi decideix si un repte està resolt (amb entrades simulades i llavor d'atzar fixa).
   · Coordenades com a matemàtiques: (0, 0) al centre, la x cap a la dreta (−240…240) i la y cap amunt (−180…180).
     La direcció: 90 = dreta, 0 = amunt, −90 = esquerra, 180 = avall.
   · Tot el contingut és propi de Numi: personatges, fons i textos s'han dibuixat i escrit per a aquesta app. */

const STG_W = 480, STG_H = 360, STG_DT = 1 / 30;
const stgT = v => (typeof tx === 'function' ? tx(v) : String(v).split('|')[0]);
const stgL = (ca, es) => (typeof L === 'function' ? L(ca, es) : ca);

/* ---------- Famílies de blocs ---------- */
const STG_CAT = {
  ev: { c: '#F2B21B', ink: '#3A2600', n: 'Esdeveniments|Eventos' },
  mov: { c: '#3D7BF4', n: 'Moviment|Movimiento' },
  look: { c: '#8B5CF6', n: 'Aspecte|Aspecto' },
  snd: { c: '#E5489A', n: 'So|Sonido' },
  ctl: { c: '#F08A24', n: 'Control|Control' },
  sns: { c: '#11A3BC', n: 'Sensors|Sensores' },
  op: { c: '#1FA463', n: 'Operadors|Operadores' },
  var: { c: '#EF5A5A', n: 'Variables|Variables' }
};
/* Cada bloc: [família, forma, 'text català|texto castellano', tipus dels forats, valors per defecte]
   formes: h capçalera (esdeveniment) · c ordre · l bucle (una boca) · e «si» (una o dues boques) · f per sempre
           x final (res no pot anar després) · r valor (rodó) · b condició (punxegut)
   tipus de forat: n nombre · t text · b condició · dir direcció · key tecla · msg missatge · bg fons · cos vestit
           touch (vora, ratolí o personatge) · tow (ratolí o personatge) · go (atzar, ratolí o personatge)
           col color · note nota · drum percussió · sfx so · var variable · stop · clone · rot manera de girar */
const STG_B = {
  start: ['ev', 'h', 'Quan es prem ▶|Al pulsar ▶'],
  key: ['ev', 'h', 'Quan es prem la tecla {0}|Al pulsar la tecla {0}', ['key'], ['right']],
  click: ['ev', 'h', 'Quan es toca aquest personatge|Al tocar este personaje'],
  msg: ['ev', 'h', 'Quan arriba el missatge {0}|Al llegar el mensaje {0}', ['msg'], ['hola']],
  bgis: ['ev', 'h', 'Quan el fons passa a ser {0}|Cuando el fondo pasa a ser {0}', ['bg'], [null]],
  send: ['ev', 'c', 'Envia el missatge {0}|Envía el mensaje {0}', ['msg'], ['hola']],
  sendw: ['ev', 'c', 'Envia {0} i espera|Envía {0} y espera', ['msg'], ['hola']],

  move: ['mov', 'c', 'Avança {0} passos|Avanza {0} pasos', ['n'], [10]],
  turnr: ['mov', 'c', 'Gira ↻ {0} graus|Gira ↻ {0} grados', ['n'], [15]],
  turnl: ['mov', 'c', 'Gira ↺ {0} graus|Gira ↺ {0} grados', ['n'], [15]],
  point: ['mov', 'c', 'Mira en direcció {0}|Mira en dirección {0}', ['dir'], [90]],
  pointto: ['mov', 'c', 'Mira cap a {0}|Mira hacia {0}', ['tow'], ['_mouse']],
  gotoxy: ['mov', 'c', 'Ves a x: {0} y: {1}|Ve a x: {0} y: {1}', ['n', 'n'], [0, 0]],
  goto: ['mov', 'c', 'Ves a {0}|Ve a {0}', ['go'], ['_random']],
  glidexy: ['mov', 'c', 'Llisca {0} s fins a x: {1} y: {2}|Desliza {0} s hasta x: {1} y: {2}', ['n', 'n', 'n'], [1, 0, 0]],
  glideto: ['mov', 'c', 'Llisca {0} s fins a {1}|Desliza {0} s hasta {1}', ['n', 'go'], [1, '_random']],
  chx: ['mov', 'c', 'Suma {0} a la x|Suma {0} a la x', ['n'], [10]],
  setx: ['mov', 'c', 'Posa la x a {0}|Pon la x a {0}', ['n'], [0]],
  chy: ['mov', 'c', 'Suma {0} a la y|Suma {0} a la y', ['n'], [10]],
  sety: ['mov', 'c', 'Posa la y a {0}|Pon la y a {0}', ['n'], [0]],
  bounce: ['mov', 'c', 'Si toques la vora, rebota|Si tocas el borde, rebota'],
  rotstyle: ['mov', 'c', 'Manera de girar: {0}|Forma de girar: {0}', ['rot'], ['lr']],
  x: ['mov', 'r', 'posició x|posición x'],
  y: ['mov', 'r', 'posició y|posición y'],
  dir: ['mov', 'r', 'direcció|dirección'],

  sayt: ['look', 'c', 'Digues {0} durant {1} s|Di {0} durante {1} s', ['t', 'n'], ['Hola!|¡Hola!', 2]],
  say: ['look', 'c', 'Digues {0}|Di {0}', ['t'], ['Hola!|¡Hola!']],
  thinkt: ['look', 'c', 'Pensa {0} durant {1} s|Piensa {0} durante {1} s', ['t', 'n'], ['Mmm…|Mmm…', 2]],
  think: ['look', 'c', 'Pensa {0}|Piensa {0}', ['t'], ['Mmm…|Mmm…']],
  cos: ['look', 'c', 'Posa’t el vestit {0}|Ponte el disfraz {0}', ['cos'], [1]],
  nextcos: ['look', 'c', 'Vestit següent|Disfraz siguiente'],
  bg: ['look', 'c', 'Canvia el fons a {0}|Cambia el fondo a {0}', ['bg'], [null]],
  nextbg: ['look', 'c', 'Fons següent|Fondo siguiente'],
  chsize: ['look', 'c', 'Suma {0} a la mida|Suma {0} al tamaño', ['n'], [10]],
  setsize: ['look', 'c', 'Posa la mida a {0} %|Pon el tamaño a {0} %', ['n'], [100]],
  chcol: ['look', 'c', 'Canvia el color {0}|Cambia el color {0}', ['n'], [25]],
  setcol: ['look', 'c', 'Posa el color a {0}|Pon el color a {0}', ['n'], [0]],
  setghost: ['look', 'c', 'Posa la transparència a {0} %|Pon la transparencia a {0} %', ['n'], [50]],
  clearfx: ['look', 'c', 'Treu els efectes|Quita los efectos'],
  show: ['look', 'c', 'Apareix|Aparece'],
  hide: ['look', 'c', 'Desapareix|Desaparece'],
  front: ['look', 'c', 'Passa al davant de tot|Pasa delante de todo'],
  cosn: ['look', 'r', 'número de vestit|número de disfraz'],
  size: ['look', 'r', 'mida|tamaño'],

  sfx: ['snd', 'c', 'Fes el so {0}|Haz el sonido {0}', ['sfx'], ['pop']],
  note: ['snd', 'c', 'Toca la nota {0} durant {1} s|Toca la nota {0} durante {1} s', ['note', 'n'], ['do', .5]],
  drum: ['snd', 'c', 'Toca {0} durant {1} s|Toca {0} durante {1} s', ['drum', 'n'], ['bombo', .25]],

  wait: ['ctl', 'c', 'Espera {0} s|Espera {0} s', ['n'], [1]],
  repeat: ['ctl', 'l', 'Repeteix {0} vegades|Repite {0} veces', ['n'], [10]],
  forever: ['ctl', 'f', 'Per sempre|Para siempre'],
  if: ['ctl', 'e', 'Si {0}|Si {0}', ['b'], [null]],
  waituntil: ['ctl', 'c', 'Espera fins que {0}|Espera hasta que {0}', ['b'], [null]],
  until: ['ctl', 'l', 'Repeteix fins que {0}|Repite hasta que {0}', ['b'], [null]],
  stop: ['ctl', 'x', 'Atura {0}|Para {0}', ['stop'], ['all']],
  cstart: ['ctl', 'h', 'Quan neix com a clon|Cuando nace como clon'],
  clone: ['ctl', 'c', 'Crea un clon de {0}|Crea un clon de {0}', ['clone'], ['_me']],
  delclone: ['ctl', 'x', 'Esborra aquest clon|Borra este clon'],

  touch: ['sns', 'b', 'toques {0}?|¿tocas {0}?', ['touch'], ['_edge']],
  touchcol: ['sns', 'b', 'toques el color {0}?|¿tocas el color {0}?', ['col'], ['vermell']],
  keyp: ['sns', 'b', 'es prem la tecla {0}?|¿se pulsa la tecla {0}?', ['key'], ['space']],
  mousedown: ['sns', 'b', 'es prem el ratolí?|¿se pulsa el ratón?'],
  mousex: ['sns', 'r', 'x del ratolí|x del ratón'],
  mousey: ['sns', 'r', 'y del ratolí|y del ratón'],
  timer: ['sns', 'r', 'cronòmetre|cronómetro'],
  resettimer: ['sns', 'c', 'Posa el cronòmetre a 0|Pon el cronómetro a 0'],
  dist: ['sns', 'r', 'distància a {0}|distancia a {0}', ['tow'], ['_mouse']],

  add: ['op', 'r', '{0} + {1}', ['n', 'n'], [1, 1]],
  sub: ['op', 'r', '{0} − {1}', ['n', 'n'], [5, 1]],
  mul: ['op', 'r', '{0} × {1}', ['n', 'n'], [2, 3]],
  div: ['op', 'r', '{0} ÷ {1}', ['n', 'n'], [10, 2]],
  rand: ['op', 'r', 'a l’atzar de {0} a {1}|al azar de {0} a {1}', ['n', 'n'], [1, 10]],
  join: ['op', 'r', 'uneix {0} {1}|une {0} {1}', ['t', 't'], ['Punts: |Puntos: ', 0]],
  round: ['op', 'r', 'arrodoneix {0}|redondea {0}', ['n'], [2.5]],
  lt: ['op', 'b', '{0} < {1}', ['n', 'n'], [0, 50]],
  eq: ['op', 'b', '{0} = {1}', ['n', 'n'], [0, 50]],
  gt: ['op', 'b', '{0} > {1}', ['n', 'n'], [0, 50]],
  and: ['op', 'b', '{0} i {1}|{0} y {1}', ['b', 'b'], [null, null]],
  or: ['op', 'b', '{0} o {1}|{0} o {1}', ['b', 'b'], [null, null]],
  not: ['op', 'b', 'no {0}|no {0}', ['b'], [null]],

  vset: ['var', 'c', 'Posa {0} a {1}|Pon {0} a {1}', ['var', 'n'], [null, 0]],
  vch: ['var', 'c', 'Suma {1} a {0}|Suma {1} a {0}', ['var', 'n'], [null, 1]],
  vshow: ['var', 'c', 'Mostra {0}|Muestra {0}', ['var'], [null]],
  vhide: ['var', 'c', 'Amaga {0}|Oculta {0}', ['var'], [null]],
  var: ['var', 'r', '{0}', ['var'], [null]]
};
const stgShape = k => (STG_B[k] || [])[1];
const stgCatOf = k => (STG_B[k] || [])[0] || 'ctl';
const STG_CAP = new Set(['forever', 'stop', 'delclone']);

/* opcions dels desplegables */
const STG_KEYS = { right: ['fletxa dreta →', 'flecha derecha →'], left: ['fletxa esquerra ←', 'flecha izquierda ←'], up: ['fletxa amunt ↑', 'flecha arriba ↑'], down: ['fletxa avall ↓', 'flecha abajo ↓'],
  space: ['espai', 'espacio'], a: ['a', 'a'], s: ['s', 's'], d: ['d', 'd'], w: ['w', 'w'], any: ['qualsevol tecla', 'cualquier tecla'] };
const STG_COL = { vermell: ['#EF4444', 'vermell', 'rojo'], verd: ['#22C55E', 'verd', 'verde'], blau: ['#3B6FF6', 'blau', 'azul'], groc: ['#FACC15', 'groc', 'amarillo'], lila: ['#A855F7', 'lila', 'lila'], taronja: ['#F97316', 'taronja', 'naranja'] };
const STG_NOTE = { do: 523.25, re: 587.33, mi: 659.25, fa: 698.46, sol: 783.99, la: 880, si: 987.77, 'do+': 1046.5 };
const STG_DRUM = { bombo: ['el bombo', 'el bombo'], caixa: ['la caixa', 'la caja'], plat: ['el plat', 'el platillo'], palmes: ['les palmes', 'las palmas'], xarles: ['el xarles', 'el charles'] };
const STG_SFX = { pop: ['pop', 'pop'], boing: ['boing', 'boing'], moneda: ['moneda', 'moneda'], laser: ['làser', 'láser'], salt: ['salt', 'salto'], magia: ['màgia', 'magia'], victoria: ['victòria', 'victoria'], ohno: ['oh, no!', '¡oh, no!'], bombolla: ['bombolla', 'burbuja'] };
const STG_STOP = { all: ['tot', 'todo'], this: ['aquest programa', 'este programa'] };
const STG_ROT = { lr: ['esquerra-dreta', 'izquierda-derecha'], all: ['tota la volta', 'toda la vuelta'], none: ['no giris', 'no gires'] };

/* ---------- Text dels programes (per escriure el contingut de pressa) ----------
   @start | @key right | @click | @msg hola | @bgis platja | @cstart   → comença un programa nou
   bloc arg arg …        (nombres, "text", paraules per als desplegables, (valor arg …) per encaixar blocs)
   repeat 10 {  …  }     if (touch Peix) { … } else { … }     forever { … }
   Una «!» al final de la línia marca el bloc que s'ha de trobar en un pas «Investiga». */
function stgTok(line) {
  const out = []; let i = 0;
  while (i < line.length) {
    const c = line[i];
    if (c === ' ' || c === '\t') { i++; continue; }
    if (c === '"') { const j = line.indexOf('"', i + 1); out.push({ s: line.slice(i + 1, j < 0 ? line.length : j) }); i = j < 0 ? line.length : j + 1; continue; }
    if ('(){}'.includes(c)) { out.push(c); i++; continue; }
    let j = i; while (j < line.length && !' \t(){}"'.includes(line[j])) j++;
    out.push(line.slice(i, j)); i = j;
  }
  return out;
}
const stgAtom = t => typeof t === 'object' ? t.s : /^-?\d+(\.\d+)?$/.test(t) ? +t : t;
function stgExpr(toks, p) {
  // toks[p] === '('
  const k = toks[p.i + 1], node = { k, a: [] }; p.i += 2;
  while (p.i < toks.length && toks[p.i] !== ')') {
    if (toks[p.i] === '(') node.a.push(stgExpr(toks, p)); else { node.a.push(stgAtom(toks[p.i])); p.i++; }
  }
  p.i++;
  stgFill(node);
  return node;
}
function stgFill(node) {
  const d = STG_B[node.k]; if (!d) throw new Error('bloc desconegut: ' + node.k);
  const def = d[4] || [];
  for (let i = node.a.length; i < (d[3] || []).length; i++) node.a.push(def[i] === undefined ? null : def[i]);
  return node;
}
function stgParse(src) {
  const scripts = [], stack = [];
  let cur = null;
  for (let raw of String(src || '').split('\n')) {
    let line = raw.trim(); if (!line || line.startsWith('//')) continue;
    let mark = false; if (line.endsWith('!')) { mark = true; line = line.slice(0, -1).trim(); }
    if (line.startsWith('@')) {
      const t = stgTok(line.slice(1)), h = { k: t[0], a: t.slice(1).map(stgAtom) };
      stgFill(h); cur = { h, b: [] }; scripts.push(cur); stack.length = 0; stack.push(cur.b); continue;
    }
    if (!cur) { cur = { h: stgFill({ k: 'start', a: [] }), b: [] }; scripts.push(cur); stack.push(cur.b); }
    if (line === '}') { stack.pop(); continue; }
    if (line === '} else {') { stack.pop(); const list = stack[stack.length - 1], b = list[list.length - 1]; b.e = []; stack.push(b.e); continue; }
    const toks = stgTok(line), open = toks[toks.length - 1] === '{'; if (open) toks.pop();
    const b = { k: toks[0], a: [] }, p = { i: 1 };
    while (p.i < toks.length) { if (toks[p.i] === '(') b.a.push(stgExpr(toks, p)); else { b.a.push(stgAtom(toks[p.i])); p.i++; } }
    stgFill(b);
    if (mark) b.x = 1;
    const sh = stgShape(b.k);
    if (sh === 'l' || sh === 'e' || sh === 'f') b.b = [];
    stack[stack.length - 1].push(b);
    if (open) stack.push(b.b);
  }
  return scripts;
}
// projecte a partir d'una descripció curta: { bg, bgs, vars:[['punts',0]], sprites:[{ ch, name, x, y, size, dir, cos, show, rot, code }] }
function stgProj(spec) {
  const used = {};
  const p = { v: 1, bg: spec.bg || 'parc', bgs: spec.bgs ? [...spec.bgs] : [spec.bg || 'parc'], vars: [], msgs: spec.msgs ? [...spec.msgs] : [], sprites: [] };
  if (!p.bgs.includes(p.bg)) p.bgs.unshift(p.bg);
  for (const v of spec.vars || []) p.vars.push(Array.isArray(v) ? { n: v[0], v: v[1] || 0, show: v[2] !== false } : { n: v.n, v: v.v || 0, show: v.show !== false });
  for (const s of spec.sprites || []) {
    const ch = STG_CH[s.ch] || STG_CH.bit, base = s.name || ch.n;
    used[base] = (used[base] || 0) + 1;
    p.sprites.push({ ch: s.ch, name: used[base] > 1 ? base + used[base] : base, label: s.label || (s.name ? null : ch.l || null), x: s.x || 0, y: s.y || 0, size: s.size || 100, dir: s.dir === undefined ? 90 : s.dir,
      cos: (s.cos || 1) - 1, show: s.show !== false, rot: s.rot || ch.rot || 'lr', scripts: typeof s.code === 'string' ? stgParse(s.code) : (s.scripts || []) });
  }
  return p;
}
const stgClone = o => JSON.parse(JSON.stringify(o, (k, v) => k === '_id' ? undefined : v));
// tots els blocs d'un projecte (o d'una llista), també els de dins dels forats
function stgWalk(list, fn) {
  for (const b of list || []) { fn(b); for (const a of b.a || []) if (a && typeof a === 'object') stgWalk([a], fn); stgWalk(b.b, fn); stgWalk(b.e, fn); }
}
function stgAll(p, who) {
  const out = [];
  for (const s of p.sprites) if (!who || s.name === who) for (const sc of s.scripts) { out.push(sc.h); stgWalk([sc.h], b => b !== sc.h && out.push(b)); stgWalk(sc.b, b => out.push(b)); }
  return out;
}
const stgCount = (p, who) => stgAll(p, who).filter(b => ['c', 'l', 'e', 'f', 'x', 'h'].includes(stgShape(b.k))).length;
const stgUses = (p, k, who) => stgAll(p, who).some(b => (Array.isArray(k) ? k : [k]).includes(b.k));

/* ---------- Intèrpret ---------- */
function stgRng(seed) { let a = (seed >>> 0) || 1; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const stgNum = v => { if (typeof v === 'number') return isFinite(v) ? v : 0; if (typeof v === 'boolean') return v ? 1 : 0; const n = parseFloat(v); return isNaN(n) ? 0 : n; };
const stgStr = v => v == null ? '' : typeof v === 'number' ? String(Math.round(v * 100) / 100) : typeof v === 'string' && v.includes('|') ? stgT(v) : String(v);
const stgDirN = d => { d = ((d + 180) % 360 + 360) % 360 - 180; return d === -180 ? 180 : Math.round(d * 1000) / 1000; };
function stgRT(proj, o = {}) {
  const rt = { proj, o, t: 0, t0: 0, f: 0, dt: STG_DT, spr: [], th: [], vars: {}, vshow: {}, bg: proj.bg, held: {}, mouse: { x: 0, y: 0, down: false }, rnd: stgRng(o.seed === undefined ? Math.floor(Math.random() * 1e9) : o.seed),
    uid: 0, layer: 0, over: false, started: false, sim: (o.sim || []).map(e => ({ ...e })), simKeys: {}, pairs: new Set(),
    log: { say: [], touch: {}, cos: {}, dist: {}, bgs: new Set([proj.bg]), clones: 0, maxClones: 0, notes: 0, sfx: 0, msgs: new Set(), clicks: 0, stop: 0, keys: 0, hid: new Set(), col: new Set(), vmax: {}, vmin: {}, size: {}, said: {}, tt: {}, shown: new Set() } };
  for (const v of proj.vars || []) { rt.vars[v.n] = v.v || 0; rt.vshow[v.n] = v.show !== false; rt.log.vmax[v.n] = rt.log.vmin[v.n] = stgNum(v.v); }
  for (const s of proj.sprites) rt.spr.push(stgInst(rt, s));
  return rt;
}
function stgInst(rt, s, from) {
  const ch = STG_CH[s.ch] || STG_CH.bit, f = from || s;
  return { id: ++rt.uid, name: s.name, src: s, ch, x: f.x || 0, y: f.y || 0, dir: f.dir === undefined ? 90 : f.dir, size: f.size || 100, cos: (f.cos || 0) % ch.cos.length, show: f.show !== false,
    rot: f.rot || 'lr', col: from ? from.col : 0, ghost: from ? from.ghost : 0, say: null, clone: !!from, dead: false, z: from ? from.z - .5 : ++rt.layer };
}
const stgOrig = (rt, name) => rt.spr.find(s => s.name === name && !s.clone && !s.dead);
function stgSpawn(rt, s, sc, mode) {
  // mode: 'restart' (torna a començar si ja corria) · 'skip' (no en comença un altre si ja corre) · res (sempre un de nou)
  const run = rt.th.find(t => !t.done && t.s === s && t.sc === sc);
  if (run && mode === 'skip') return run;
  if (run && mode === 'restart') run.done = true;
  const th = { s, sc, done: false, cur: null };
  th.gen = stgRun(rt, s, sc.b, th);
  rt.th.push(th);
  return th;
}
function stgHats(rt, k, test, mode, only) {
  const out = [];
  for (const s of rt.spr.slice()) { if (s.dead || (only && s !== only)) continue; for (const sc of s.src.scripts) if (sc.h.k === k && (!test || test(sc.h, s))) out.push(stgSpawn(rt, s, sc, mode)); }
  return out;
}
function stgStart(rt) { rt.started = true; stgHats(rt, 'start', null, 'restart', null); }
function* stgRun(rt, s, list, th) {
  for (const b of list || []) {
    if (th.done || s.dead || rt.over) return;
    th.cur = b;
    yield* stgDo(rt, s, b, th);
  }
}
function* stgWait(rt, th, secs) { const end = rt.t + Math.max(0, secs); do { yield; if (th.done) return; } while (rt.t < end - 1e-6); }
function stgBox(s) {
  const hb = s.ch.hb[s.cos] || s.ch.hb[0] || s.ch.hb, k = s.size / 100;
  let hw = hb[0] / 2 * k, hh = hb[1] / 2 * k;
  if (s.rot === 'all' && s.dir !== 90) { const a = (s.dir - 90) * Math.PI / 180, c = Math.abs(Math.cos(a)), n = Math.abs(Math.sin(a)); [hw, hh] = [c * hw + n * hh, n * hw + c * hh]; }
  const cy = s.y + (s.ch.hy || 0) * k;
  return { l: s.x - hw, r: s.x + hw, b: cy - hh, t: cy + hh, hw, hh };
}
const stgOver = (a, b) => a.l < b.r && a.r > b.l && a.b < b.t && a.t > b.b;
function stgMoveTo(rt, s, x, y) {
  const B = stgBox(s), mw = Math.min(15, B.hw), mh = Math.min(15, B.hh);
  x = Math.max(-240 - B.hw + mw, Math.min(240 + B.hw - mw, x));
  y = Math.max(-180 - B.hh + mh, Math.min(180 + B.hh - mh, y));
  if (!s.clone) rt.log.dist[s.name] = (rt.log.dist[s.name] || 0) + Math.hypot(x - s.x, y - s.y);
  s.x = Math.round(x * 1000) / 1000; s.y = Math.round(y * 1000) / 1000;
}
function stgBounce(rt, s) {
  const B = stgBox(s);
  let hit = false;
  if (B.r > 240) { s.dir = stgDirN(-s.dir); s.x -= B.r - 240; hit = true; } else if (B.l < -240) { s.dir = stgDirN(-s.dir); s.x += -240 - B.l; hit = true; }
  if (B.t > 180) { s.dir = stgDirN(180 - s.dir); s.y -= B.t - 180; hit = true; } else if (B.b < -180) { s.dir = stgDirN(180 - s.dir); s.y += -180 - B.b; hit = true; }
  if (hit && !s.clone) rt.log.bounce = (rt.log.bounce || 0) + 1;
}
function stgTarget(rt, s, v, rnd) {
  if (v === '_mouse') return { x: rt.mouse.x, y: rt.mouse.y };
  if (v === '_random' || (rnd && v == null)) return { x: Math.round(rt.rnd() * 440 - 220), y: Math.round(rt.rnd() * 320 - 160) };
  const o = stgOrig(rt, v); return o ? { x: o.x, y: o.y } : null;
}
function stgTouch(rt, s, v) {
  if (!s.show) return false;
  const B = stgBox(s);
  if (v === '_edge' || v == null) return B.l < -240 || B.r > 240 || B.b < -180 || B.t > 180;
  if (v === '_mouse') return rt.mouse.x >= B.l && rt.mouse.x <= B.r && rt.mouse.y >= B.b && rt.mouse.y <= B.t;
  return rt.spr.some(o => o !== s && !o.dead && o.show && o.name === v && stgOver(B, stgBox(o)));
}
function stgTouchCol(rt, s, c) {
  if (!s.show) return false;
  const bg = STG_BG[rt.bg]; if (!bg || !bg.reg) return false;
  const B = stgBox(s);
  return bg.reg.some(r => r.c === c && (r.r ? stgOver(B, { l: r.r[0], r: r.r[0] + r.r[2], b: r.r[1], t: r.r[1] + r.r[3] })
    : r.o ? (() => { const px = Math.max(B.l, Math.min(r.o[0], B.r)), py = Math.max(B.b, Math.min(r.o[1], B.t)); return Math.hypot(px - r.o[0], py - r.o[1]) < r.o[2]; })() : false));
}
function stgSetCos(rt, s, v) {
  const n = s.ch.cos.length; let i;
  if (typeof v === 'string' && isNaN(+v)) { i = s.ch.cos.findIndex(c => c.n.toLowerCase().split('|').includes(v.toLowerCase())); if (i < 0) return; }
  else i = ((Math.round(stgNum(v)) - 1) % n + n) % n;
  if (i !== s.cos) { s.cos = i; if (!s.clone) rt.log.cos[s.name] = (rt.log.cos[s.name] || 0) + 1; }
}
function stgSetBg(rt, v) {
  const list = rt.proj.bgs || [rt.bg];
  let id = typeof v === 'string' && STG_BG[v] ? v : list[((Math.round(stgNum(v)) - 1) % list.length + list.length) % list.length];
  if (!id) return;
  rt.bg = id; rt.log.bgs.add(id);
  stgHats(rt, 'bgis', h => h.a[0] === id, 'restart');
}
function stgSend(rt, m) { m = stgStr(m); rt.log.msgs.add(m); return stgHats(rt, 'msg', h => stgStr(h.a[0]) === m, 'restart'); }
function stgMkClone(rt, src) {
  if (rt.spr.filter(s => s.clone).length >= 80) return;
  const c = stgInst(rt, src.src, src); rt.spr.push(c); rt.log.clones++;
  const n = rt.spr.filter(s => s.clone && !s.dead).length; if (n > rt.log.maxClones) rt.log.maxClones = n;
  stgHats(rt, 'cstart', null, null, c);
}
function stgSetVar(rt, n, v) {
  if (n == null) return;
  if (typeof v === 'string' && v !== '' && !isNaN(+v)) v = +v;
  rt.vars[n] = v;
  const x = stgNum(v);
  if (!(n in rt.log.vmax) || x > rt.log.vmax[n]) rt.log.vmax[n] = x;
  if (!(n in rt.log.vmin) || x < rt.log.vmin[n]) rt.log.vmin[n] = x;
}
function* stgDo(rt, s, b, th) {
  const A = i => stgV(rt, s, b.a ? b.a[i] : undefined), N = i => stgNum(A(i));
  switch (b.k) {
    case 'move': { const d = N(0), r = (90 - s.dir) * Math.PI / 180; stgMoveTo(rt, s, s.x + Math.cos(r) * d, s.y + Math.sin(r) * d); return; }
    case 'turnr': s.dir = stgDirN(s.dir + N(0)); return;
    case 'turnl': s.dir = stgDirN(s.dir - N(0)); return;
    case 'point': s.dir = stgDirN(N(0)); return;
    case 'pointto': { const p = stgTarget(rt, s, A(0)); if (p && (p.x !== s.x || p.y !== s.y)) s.dir = stgDirN(90 - Math.atan2(p.y - s.y, p.x - s.x) * 180 / Math.PI); return; }
    case 'gotoxy': stgMoveTo(rt, s, N(0), N(1)); return;
    case 'goto': { const p = stgTarget(rt, s, A(0), true); if (p) stgMoveTo(rt, s, p.x, p.y); return; }
    case 'glidexy': case 'glideto': {
      const T = N(0); let gx, gy;
      if (b.k === 'glidexy') { gx = N(1); gy = N(2); } else { const p = stgTarget(rt, s, A(1), true); if (!p) return; gx = p.x; gy = p.y; }
      const x0 = s.x, y0 = s.y, t0 = rt.t;
      if (T <= 0) { stgMoveTo(rt, s, gx, gy); return; }
      for (;;) { const k = Math.min(1, (rt.t - t0) / T); stgMoveTo(rt, s, x0 + (gx - x0) * k, y0 + (gy - y0) * k); if (k >= 1 - 1e-9) return; yield; if (th.done) return; }
    }
    case 'chx': stgMoveTo(rt, s, s.x + N(0), s.y); return;
    case 'setx': stgMoveTo(rt, s, N(0), s.y); return;
    case 'chy': stgMoveTo(rt, s, s.x, s.y + N(0)); return;
    case 'sety': stgMoveTo(rt, s, s.x, N(0)); return;
    case 'bounce': stgBounce(rt, s); return;
    case 'rotstyle': s.rot = STG_ROT[A(0)] ? A(0) : 'lr'; return;
    case 'sayt': case 'thinkt': case 'say': case 'think': {
      const t = stgStr(A(0)), think = b.k[0] === 't';
      s.say = t === '' ? null : { t, think, id: ++rt.uid };
      if (t !== '') { rt.log.say.push({ w: s.name, t, at: rt.t }); }
      if (b.k.endsWith('t')) { const my = s.say && s.say.id; yield* stgWait(rt, th, N(1)); if (s.say && s.say.id === my) s.say = null; }
      return;
    }
    case 'cos': stgSetCos(rt, s, A(0)); return;
    case 'nextcos': stgSetCos(rt, s, s.cos + 2); return;
    case 'bg': stgSetBg(rt, A(0)); return;
    case 'nextbg': { const l = rt.proj.bgs || [rt.bg]; stgSetBg(rt, l.indexOf(rt.bg) + 2); return; }
    case 'chsize': s.size = Math.max(5, Math.min(400, s.size + N(0))); if (!s.clone) rt.log.size[s.name] = s.size; return;
    case 'setsize': s.size = Math.max(5, Math.min(400, N(0))); if (!s.clone) rt.log.size[s.name] = s.size; return;
    case 'chcol': s.col = ((s.col + N(0)) % 200 + 200) % 200; if (!s.clone) rt.log.col.add(s.name); return;
    case 'setcol': s.col = ((N(0)) % 200 + 200) % 200; if (!s.clone && s.col) rt.log.col.add(s.name); return;
    case 'setghost': s.ghost = Math.max(0, Math.min(100, N(0))); return;
    case 'clearfx': s.col = 0; s.ghost = 0; return;
    case 'show': s.show = true; return;
    case 'hide': s.show = false; if (!s.clone) rt.log.hid.add(s.name); return;
    case 'front': s.z = ++rt.layer; return;
    case 'sfx': rt.log.sfx++; rt.o.sound && rt.o.sound('sfx', A(0)); return;
    case 'note': case 'drum': rt.log.notes++; rt.o.sound && rt.o.sound(b.k, A(0), N(1)); yield* stgWait(rt, th, N(1)); return;
    case 'wait': yield* stgWait(rt, th, N(0)); return;
    case 'repeat': { const n = Math.round(N(0)); for (let i = 0; i < n; i++) { yield* stgRun(rt, s, b.b, th); if (th.done || rt.over || s.dead) return; yield; if (th.done) return; } return; }
    case 'forever': for (;;) { yield* stgRun(rt, s, b.b, th); if (th.done || rt.over || s.dead) return; yield; if (th.done) return; }
    case 'until': while (!stgBool(rt, s, b.a[0])) { yield* stgRun(rt, s, b.b, th); if (th.done || rt.over || s.dead) return; yield; if (th.done) return; } return;
    case 'if': if (stgBool(rt, s, b.a[0])) yield* stgRun(rt, s, b.b, th); else if (b.e) yield* stgRun(rt, s, b.e, th); return;
    case 'waituntil': while (!stgBool(rt, s, b.a[0])) { yield; if (th.done) return; } return;
    case 'stop': if (A(0) === 'this') { th.done = true; return; } rt.over = true; rt.log.stop++; return;
    case 'clone': { const src = A(0) === '_me' || A(0) == null ? s : stgOrig(rt, A(0)); if (src) stgMkClone(rt, src); return; }
    case 'delclone': if (s.clone) { s.dead = true; th.done = true; } return;
    case 'send': stgSend(rt, A(0)); return;
    case 'sendw': { const ths = stgSend(rt, A(0)); while (ths.some(t => !t.done)) { yield; if (th.done) return; } return; }
    case 'resettimer': rt.t0 = rt.t; return;
    case 'vset': stgSetVar(rt, b.a[0], A(1)); return;
    case 'vch': stgSetVar(rt, b.a[0], stgNum(rt.vars[b.a[0]]) + N(1)); return;
    case 'vshow': rt.vshow[b.a[0]] = true; return;
    case 'vhide': rt.vshow[b.a[0]] = false; return;
  }
}
function stgV(rt, s, v) {
  if (v == null || typeof v !== 'object') return v;
  const a = i => stgV(rt, s, v.a[i]), n = i => stgNum(a(i));
  switch (v.k) {
    case 'x': return Math.round(s.x * 100) / 100;
    case 'y': return Math.round(s.y * 100) / 100;
    case 'dir': return s.dir;
    case 'cosn': return s.cos + 1;
    case 'size': return Math.round(s.size);
    case 'mousex': return Math.round(rt.mouse.x);
    case 'mousey': return Math.round(rt.mouse.y);
    case 'timer': return Math.round((rt.t - rt.t0) * 100) / 100;
    case 'dist': { const p = stgTarget(rt, s, v.a[0]); return p ? Math.round(Math.hypot(p.x - s.x, p.y - s.y) * 100) / 100 : 10000; }
    case 'add': return n(0) + n(1);
    case 'sub': return n(0) - n(1);
    case 'mul': return n(0) * n(1);
    case 'div': return n(1) === 0 ? 0 : n(0) / n(1);
    case 'rand': { let lo = n(0), hi = n(1); if (lo > hi) [lo, hi] = [hi, lo]; return Number.isInteger(lo) && Number.isInteger(hi) ? lo + Math.floor(rt.rnd() * (hi - lo + 1)) : lo + rt.rnd() * (hi - lo); }
    case 'join': return stgStr(a(0)) + stgStr(a(1));
    case 'round': return Math.round(n(0));
    case 'var': return rt.vars[v.a[0]] === undefined ? 0 : rt.vars[v.a[0]];
    case 'touch': return stgTouch(rt, s, v.a[0]);
    case 'touchcol': return stgTouchCol(rt, s, v.a[0]);
    case 'keyp': return v.a[0] === 'any' ? Object.keys(rt.held).length > 0 : !!rt.held[v.a[0]];
    case 'mousedown': return rt.mouse.down;
    case 'lt': return stgCmp(a(0), a(1)) < 0;
    case 'gt': return stgCmp(a(0), a(1)) > 0;
    case 'eq': return stgCmp(a(0), a(1)) === 0;
    case 'and': return stgBool(rt, s, v.a[0]) && stgBool(rt, s, v.a[1]);
    case 'or': return stgBool(rt, s, v.a[0]) || stgBool(rt, s, v.a[1]);
    case 'not': return !stgBool(rt, s, v.a[0]);
  }
  return 0;
}
const stgBool = (rt, s, v) => v != null && !!stgV(rt, s, v);
function stgCmp(x, y) {
  const nx = typeof x === 'number' || (typeof x === 'string' && x.trim() !== '' && !isNaN(+x)), ny = typeof y === 'number' || (typeof y === 'string' && y.trim() !== '' && !isNaN(+y));
  if (nx && ny) { const a = +x, b = +y; return Math.abs(a - b) < 1e-9 ? 0 : a < b ? -1 : 1; }
  const a = stgStr(x).toLowerCase(), b = stgStr(y).toLowerCase(); return a === b ? 0 : a < b ? -1 : 1;
}

/* ---------- Entrades: tecles, clics i el ratolí (de veritat o simulades) ---------- */
function stgKeyDown(rt, k) {
  if (rt.held[k]) return;
  rt.held[k] = { next: rt.t + .35 }; rt.log.keys++;
  stgHats(rt, 'key', h => h.a[0] === k || h.a[0] === 'any', 'skip');
}
function stgKeyUp(rt, k) { delete rt.held[k]; }
function stgClick(rt, x, y) {
  rt.mouse.x = x; rt.mouse.y = y; rt.log.clicks++;
  const hit = rt.spr.filter(s => s.show && !s.dead).sort((a, b) => b.z - a.z).find(s => { const B = stgBox(s); return x >= B.l && x <= B.r && y >= B.b && y <= B.t; });
  if (hit) stgHats(rt, 'click', null, 'restart', hit);
  return hit;
}
// les entrades simulades d'un repte: {t, key, dur} · {t, click:'Nom'|[x,y]} · {t, mouse:[x,y]} · {t, down:true} · {auto:{who, to, axis, from, until}}
function stgInputs(rt) {
  for (const e of rt.sim) {
    if (e.auto) { stgAuto(rt, e.auto); continue; }
    if (e.done || rt.t + 1e-9 < e.t) continue;
    e.done = true;
    if (e.key) { stgKeyDown(rt, e.key); rt.simKeys[e.key] = rt.t + (e.dur || .1); }
    if (e.click !== undefined) { const p = Array.isArray(e.click) ? { x: e.click[0], y: e.click[1] } : stgTarget(rt, null, e.click); if (p) { rt.mouse.down = true; stgClick(rt, p.x, p.y); rt.simUp = rt.t + .1; rt.lastClick = { x: p.x, y: p.y, t: rt.t }; } }
    if (e.mouse) { rt.mouse.x = e.mouse[0]; rt.mouse.y = e.mouse[1]; }
    if (e.down !== undefined) rt.mouse.down = !!e.down;
  }
  for (const [k, end] of Object.entries(rt.simKeys)) if (rt.t >= end - 1e-9) { stgKeyUp(rt, k); delete rt.simKeys[k]; }
  if (rt.simUp && rt.t >= rt.simUp) { rt.mouse.down = false; rt.simUp = 0; }
  // les tecles que es mantenen premudes es repeteixen (com fa l'ordinador)
  for (const [k, h] of Object.entries(rt.held)) if (rt.t >= h.next) { h.next += .05; stgHats(rt, 'key', hh => hh.a[0] === k || hh.a[0] === 'any', 'skip'); }
}
// pilot automàtic: prem les fletxes perquè un personatge persegueixi (o esquivi) un altre
function stgAuto(rt, a) {
  if ((a.from !== undefined && rt.t < a.from) || (a.until !== undefined && rt.t > a.until)) { for (const k of ['left', 'right', 'up', 'down']) if (rt.held[k] && rt.autoK && rt.autoK[k]) { stgKeyUp(rt, k); rt.autoK[k] = 0; } return; }
  const me = stgOrig(rt, a.who); if (!me) return;
  const ts = rt.spr.filter(s => s.name === a.to && s.show && !s.dead);
  rt.autoK = rt.autoK || {};
  const want = {};
  if (ts.length) {
    const t = ts.reduce((m, s) => Math.hypot(s.x - me.x, s.y - me.y) < Math.hypot(m.x - me.x, m.y - me.y) ? s : m);
    const dx = t.x - me.x, dy = t.y - me.y, dz = a.dz || 8, flee = !!a.avoid;
    if ((a.axis || 'x').includes('x') && Math.abs(dx) > dz && (!flee || Math.abs(dx) < 80)) want[(dx > 0) !== flee ? 'right' : 'left'] = 1;
    if ((a.axis || 'x').includes('y') && Math.abs(dy) > dz && (!flee || Math.abs(dy) < 80)) want[(dy > 0) !== flee ? 'up' : 'down'] = 1;
  }
  for (const k of ['left', 'right', 'up', 'down']) {
    if (want[k] && !rt.held[k]) { stgKeyDown(rt, k); rt.autoK[k] = 1; }
    else if (!want[k] && rt.held[k] && rt.autoK[k]) { stgKeyUp(rt, k); rt.autoK[k] = 0; }
  }
}

/* ---------- Un fotograma ---------- */
function stgStep(rt) {
  if (rt.over) return;
  rt.t = Math.round((rt.t + rt.dt) * 1e6) / 1e6; rt.f++;
  stgInputs(rt);
  for (let i = 0; i < rt.th.length; i++) {
    const th = rt.th[i]; if (th.done) continue;
    if (th.s.dead) { th.done = true; continue; }
    let r; try { r = th.gen.next(); } catch (e) { th.done = true; rt.err = e; }
    if (r && r.done) th.done = true;
    if (rt.over) break;
  }
  if (rt.th.some(t => t.done)) rt.th = rt.th.filter(t => !t.done);
  if (rt.spr.some(s => s.dead)) rt.spr = rt.spr.filter(s => !s.dead);
  stgTrack(rt);
}
// què ha passat (per als objectius): xocs entre personatges (cada vegada que es comencen a tocar)
function stgTrack(rt) {
  const vis = rt.spr.filter(s => s.show && !s.dead), now = new Set();
  for (let i = 0; i < vis.length; i++) { const a = vis[i], A = stgBox(a);
    for (let j = i + 1; j < vis.length; j++) { const b = vis[j]; if (a.name === b.name) continue; if (stgOver(A, stgBox(b))) now.add([a.name, b.name].sort().join('|')); } }
  for (const p of now) if (!rt.pairs.has(p)) { rt.log.touch[p] = (rt.log.touch[p] || 0) + 1; if (!(p in rt.log.tt)) rt.log.tt[p] = rt.t; }
  for (const s of vis) if (!s.clone && !s.src.show) rt.log.shown.add(s.name);
  rt.pairs = now;
}
const stgBusy = rt => !rt.over && (rt.th.length > 0 || rt.sim.some(e => !e.done && !e.auto) || Object.keys(rt.simKeys).length > 0);

/* ---------- Objectius d'un repte ----------
   {g:'say', who?, txt?, n?, diff?}   ha dit alguna cosa (txt: un tros del text, en qualsevol idioma)
   {g:'touch', a, b, n?}             a i b s'han tocat (n vegades)
   {g:'var', n, op, v}               la variable compleix la comparació en algun moment
   {g:'pos', who, x:[a,b], y:[a,b]}  el personatge ha estat dins d'aquesta zona
   {g:'cos', who, n} · {g:'dist', who, d} · {g:'bg', bg} · {g:'bgs', n} · {g:'clones', n} · {g:'sound', n}
   {g:'msg', m?} · {g:'hide', who} · {g:'show', who} · {g:'size', who, op, v} · {g:'col', who} · {g:'stop'} · {g:'bounce', n}
   {g:'dir', who, v} · {g:'uses', k, who?} · {g:'blocks', n} · {g:'sprites', n} · {g:'vars', n} · {g:'scripts', n}
   {g:'appear', who} apareix (amagat al principi) · {g:'first', a:[x,y], b:[z,w]} el parell a es toca abans que el b
   {g:'order', seq:['Lia','Nil',…], only?} qui parla, en aquest ordre
   {g:'never', touch:[a,b]}          no ha passat mai (si passa, l'objectiu queda suspès)
   {g:'fn', f(rt)}                   qualsevol altra cosa
   Tots duen t: 'text català|texto castellano' per a la llista de l'alumne. end:true → només es mira al final. */
const stgOp = (x, op, v) => op === '>=' ? x >= v : op === '<=' ? x <= v : op === '>' ? x > v : op === '<' ? x < v : op === '!=' ? x !== v : Math.abs(x - v) < 1e-6;
const stgHas = (txt, want) => { const t = String(txt).toLowerCase(); return String(want).toLowerCase().split('|').some(w => t.includes(w.trim())); };
function stgGoal(rt, g, proj) {
  const L_ = rt.log, who = g.who, S = () => stgOrig(rt, who);
  switch (g.g) {
    case 'say': { const ok = L_.say.filter(e => (!who || e.w === who) && (!g.txt || stgHas(e.t, g.txt))); return (g.diff ? new Set(ok.map(e => e.t)).size : ok.length) >= (g.n || 1); }
    case 'touch': return (L_.touch[[g.a, g.b].sort().join('|')] || 0) >= (g.n || 1);
    case 'var': return rt.vars[g.n] !== undefined && stgOp(stgNum(rt.vars[g.n]), g.op || '>=', g.v);
    case 'pos': { const s = S(); return !!s && (!g.x || (s.x >= g.x[0] && s.x <= g.x[1])) && (!g.y || (s.y >= g.y[0] && s.y <= g.y[1])); }
    case 'cos': return (L_.cos[who] || 0) >= (g.n || 1);
    case 'dist': return (L_.dist[who] || 0) >= (g.d || 1);
    case 'bg': return g.bg ? L_.bgs.has(g.bg) : rt.bg !== proj.bg;
    case 'bgs': return L_.bgs.size >= (g.n || 2);
    case 'clones': return L_.maxClones >= (g.n || 1);
    case 'sound': return L_.notes + L_.sfx >= (g.n || 1);
    case 'msg': return g.m ? L_.msgs.has(g.m) : L_.msgs.size >= (g.n || 1);
    case 'hide': return L_.hid.has(who);
    case 'show': { const s = S(); return !!s && s.show && L_.hid.has(who); }
    case 'appear': return L_.shown.has(who);
    case 'first': { const ta = L_.tt[g.a.slice().sort().join('|')], tb = L_.tt[g.b.slice().sort().join('|')]; return ta !== undefined && (tb === undefined || ta < tb); }
    case 'order': { const seq = L_.say.filter(e => !g.only || g.only.includes(e.w)).map(e => e.w); return g.seq.every((w, i) => seq[i] === w); }
    case 'size': { const s = S(); return !!s && stgOp(s.size, g.op || '>=', g.v); }
    case 'col': return L_.col.has(who);
    case 'stop': return L_.stop > 0;
    case 'bounce': return (L_.bounce || 0) >= (g.n || 1);
    case 'dir': { const s = S(); return !!s && Math.abs(stgDirN(s.dir - g.v)) < 1; }
    case 'clicks': return L_.clicks >= (g.n || 1);
    case 'uses': return stgUses(proj, g.k, who);
    case 'blocks': return stgCount(proj, who) >= (g.n || 1);
    case 'sprites': return proj.sprites.filter(s => s.scripts.some(sc => sc.b.length)).length >= (g.n || 1);
    case 'vars': return (proj.vars || []).length >= (g.n || 1);
    case 'scripts': return proj.sprites.reduce((n, s) => n + s.scripts.filter(sc => sc.b.length).length, 0) >= (g.n || 1);
    case 'never': return !(L_.touch[g.touch.slice().sort().join('|')]);
    case 'fn': return !!g.f(rt, proj);
  }
  return false;
}
const STG_STATIC = new Set(['uses', 'blocks', 'sprites', 'vars', 'scripts']);
const stgSticky = g => !(g.g === 'never' || g.end || STG_STATIC.has(g.g));
// estat dels objectius ara: els «en algun moment» queden complerts per sempre (st); els «never», «end» i estàtics es miren cada vegada
function stgGoalsNow(rt, goals, proj, st) {
  return goals.map((g, i) => stgSticky(g) ? (st[i] = st[i] || stgGoal(rt, g, proj)) : stgGoal(rt, g, proj));
}
// el comprovador: executa el projecte amb les entrades simulades i diu quins objectius es compleixen
function stgCheck(proj, step, seed = 7) {
  const rt = stgRT(proj, { seed, sim: step.sim || [] });
  const goals = step.goals || [], st = goals.map(() => false), dur = step.dur || 6;
  stgStart(rt);
  let now = stgGoalsNow(rt, goals, proj, st);
  while (rt.t < dur - 1e-9 && !rt.over) {
    stgStep(rt); now = stgGoalsNow(rt, goals, proj, st);
    if (goals.length && now.every(Boolean)) return { ok: true, st: now, rt };
    if (!stgBusy(rt) && !rt.sim.some(e => e.auto)) break;
  }
  return { ok: goals.length > 0 && now.every(Boolean), st: now, rt };
}

/* ---------- Personatges (dibuixos propis, SVG) ----------
   Cada vestit es dibuixa centrat a (0, 0) i mirant a la dreta (direcció 90). hb: mida de la caixa de xoc [amplada, alçada]
   per vestit (o una per a tots), hy: on és el centre de la caixa respecte del punt (0, 0). */
const STG_GR = `
  <linearGradient id="sgPink" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD3E2"/><stop offset="1" stop-color="#F27AA6"/></linearGradient>
  <linearGradient id="sgPinkD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF7FB0"/><stop offset="1" stop-color="#C92F6C"/></linearGradient>
  <linearGradient id="sgGreen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9BE86A"/><stop offset="1" stop-color="#3FA34A"/></linearGradient>
  <linearGradient id="sgCream" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF6D5"/><stop offset="1" stop-color="#F7D88A"/></linearGradient>
  <linearGradient id="sgWing" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#C9A6FF"/><stop offset="1" stop-color="#7B4BE0"/></linearGradient>
  <linearGradient id="sgOrange" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFC170"/><stop offset="1" stop-color="#F26B21"/></linearGradient>
  <linearGradient id="sgTeal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FF0E6"/><stop offset="1" stop-color="#159C9C"/></linearGradient>
  <linearGradient id="sgBlue" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FC2FF"/><stop offset="1" stop-color="#2F6BE0"/></linearGradient>
  <linearGradient id="sgRed" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF8A80"/><stop offset="1" stop-color="#D62F3A"/></linearGradient>
  <linearGradient id="sgYellow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF19A"/><stop offset="1" stop-color="#FFB61E"/></linearGradient>
  <linearGradient id="sgPurple" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E3B8FF"/><stop offset="1" stop-color="#9B4DE0"/></linearGradient>
  <linearGradient id="sgSkinA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C98B5E"/><stop offset="1" stop-color="#9C6238"/></linearGradient>
  <linearGradient id="sgSkinB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE0C7"/><stop offset="1" stop-color="#F2B98F"/></linearGradient>
  <linearGradient id="sgWood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9B06C"/><stop offset="1" stop-color="#A9672F"/></linearGradient>
  <linearGradient id="sgGray" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C9CDD8"/><stop offset="1" stop-color="#7A8194"/></linearGradient>
  <linearGradient id="sgSteel" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#C6D2EA"/><stop offset=".5" stop-color="#FFFFFF"/><stop offset="1" stop-color="#9FB0D6"/></linearGradient>
  <linearGradient id="sgFire" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#FFF4A8"/><stop offset=".45" stop-color="#FFB42E"/><stop offset="1" stop-color="#FF4B1F" stop-opacity=".1"/></linearGradient>
  <linearGradient id="sgFurB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9FE3FF"/><stop offset="1" stop-color="#4A8FF0"/></linearGradient>
  <radialGradient id="sgBall" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".25" stop-color="#FFE7A1"/><stop offset="1" stop-color="#F2A21B"/></radialGradient>
  <radialGradient id="sgBubble" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".9"/><stop offset=".45" stop-color="#CFF4FF" stop-opacity=".25"/><stop offset="1" stop-color="#6FD3FF" stop-opacity=".55"/></radialGradient>
  <radialGradient id="sgGlow"><stop offset="0" stop-color="#FFF3A0" stop-opacity=".9"/><stop offset="1" stop-color="#FFF3A0" stop-opacity="0"/></radialGradient>
  <radialGradient id="sgRock" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#B08A74"/><stop offset=".6" stop-color="#6E4E3E"/><stop offset="1" stop-color="#3F2A22"/></radialGradient>
  <radialGradient id="sgJelly" cx=".5" cy=".3" r=".8"><stop offset="0" stop-color="#FFE3FF" stop-opacity=".95"/><stop offset=".6" stop-color="#E08BFF" stop-opacity=".8"/><stop offset="1" stop-color="#9B4DE0" stop-opacity=".75"/></radialGradient>
  <radialGradient id="sgCoin" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#FFF8C4"/><stop offset=".55" stop-color="#FFD23F"/><stop offset="1" stop-color="#E09B0B"/></radialGradient>
  <filter id="sgSoft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3"/></filter>`;
// ulls amb brillantor (cx, cy, mida, mirada)
const sEye = (x, y, r = 6, lx = 1) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 1.15}" fill="#fff" stroke="#2B2140" stroke-width="2"/><circle cx="${x + lx * r * .3}" cy="${y + r * .1}" r="${r * .62}" fill="#2B2140"/><circle cx="${x + lx * r * .3 + r * .22}" cy="${y - r * .25}" r="${r * .24}" fill="#fff"/>`;
const sHappyEye = (x, y, r = 6) => `<path d="M${x - r} ${y + 2}q${r} -${r * 1.5} ${r * 2} 0" fill="none" stroke="#2B2140" stroke-width="3" stroke-linecap="round"/>`;
const sBlush = (x, y, r = 5) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * .6}" fill="#FF6B8B" opacity=".45"/>`;
const sShine = (x, y, rx, ry, rot = -20) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#fff" opacity=".55" transform="rotate(${rot} ${x} ${y})"/>`;
const OUT = 'stroke="#2B2140" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';

function stgAxo(k) {
  const tail = k === 1 ? 'M-30 14Q-52 26 -66 8Q-52 18 -36 4Z' : 'M-30 10Q-54 -6 -66 6Q-50 0 -36 18Z';
  const fin = k === 1 ? 'M-34 8Q-50 22 -64 10Q-50 4 -36 2Z' : 'M-34 12Q-52 -2 -64 6Q-50 14 -36 16Z';
  const face = k === 2 ? `${sHappyEye(14, -12, 6)}${sHappyEye(32, -12, 6)}<path d="M16 2q8 9 16 0" fill="#C92F6C" stroke="#2B2140" stroke-width="2.4"/>`
    : k === 3 ? `${sEye(14, -12, 6.5)}${sEye(32, -12, 6.5)}<ellipse cx="24" cy="4" rx="4" ry="5" fill="#8A1F48" stroke="#2B2140" stroke-width="2"/>`
      : `${sEye(14, -12, 6)}${sEye(32, -12, 6)}<path d="M18 2q6 5 12 0" fill="none" stroke="#2B2140" stroke-width="2.6" stroke-linecap="round"/>`;
  const gill = (x, y, a) => `<g transform="translate(${x} ${y}) rotate(${a})"><path d="M0 0Q-6 -14 4 -20Q6 -10 10 -4Z" fill="url(#sgPinkD)" ${OUT}/></g>`;
  return `<path d="${tail}" fill="url(#sgPink)" ${OUT}/><path d="${fin}" fill="#FFB3CE" opacity=".8"/>
    <ellipse cx="-6" cy="12" rx="32" ry="17" fill="url(#sgPink)" ${OUT}/><ellipse cx="-4" cy="20" rx="20" ry="6" fill="#FFE6EF"/>
    <path d="M-20 26l-4 9h8zM6 26l-3 9h8z" fill="url(#sgPink)" ${OUT}/>
    ${gill(6, -20, -40)}${gill(4, -10, -75)}${gill(8, -28, -10)}${gill(40, -22, 30)}${gill(44, -12, 70)}${gill(36, -30, 5)}
    <circle cx="24" cy="-8" r="25" fill="url(#sgPink)" ${OUT}/>${sShine(14, -24, 9, 5)}
    ${face}${sBlush(9, 0)}${sBlush(40, 0)}<circle cx="-14" cy="6" r="2.2" fill="#E05A8A"/><circle cx="-2" cy="2" r="1.8" fill="#E05A8A"/>`;
}
function stgDrac(k) {
  const wing = k === 1 ? 'M-6 -10Q-30 22 -52 10Q-40 6 -44 -2Q-30 0 -30 -8Q-18 -2 -6 -10Z' : 'M-6 -12Q-26 -52 -50 -46Q-40 -38 -42 -30Q-30 -34 -28 -24Q-18 -26 -6 -12Z';
  const fire = k === 2 ? `<g transform="translate(58 -8)"><path d="M0 0Q20 -14 44 -6Q30 0 46 8Q24 10 0 4Z" fill="url(#sgFire)" stroke="#F26B21" stroke-width="2"/><path d="M2 1Q16 -6 30 -2Q20 2 30 6Q16 6 2 3Z" fill="#FFF4A8"/></g>` : '';
  const mouth = k === 2 ? '<ellipse cx="52" cy="-2" rx="5" ry="4" fill="#5B1E1E" stroke="#2B2140" stroke-width="2"/>' : '<path d="M40 2q8 4 14 -2" fill="none" stroke="#2B2140" stroke-width="2.6" stroke-linecap="round"/>';
  return `<path d="M-24 22Q-56 30 -58 8Q-60 -4 -50 -6Q-50 14 -24 10Z" fill="url(#sgGreen)" ${OUT}/><path d="M-56 -4l-6 -8l10 2z" fill="#F7D88A" ${OUT}/>
    <path d="${wing}" fill="url(#sgWing)" ${OUT}/><path d="M-10 -10L-38 ${k === 1 ? 8 : -36}M-10 -10L-30 ${k === 1 ? 2 : -26}" stroke="#5B2FB8" stroke-width="2" opacity=".6"/>
    <ellipse cx="-4" cy="10" rx="30" ry="24" fill="url(#sgGreen)" ${OUT}/><ellipse cx="2" cy="16" rx="17" ry="15" fill="url(#sgCream)"/>
    <path d="M-10 6h22M-12 14h26M-10 22h22" stroke="#E5B85B" stroke-width="2" stroke-linecap="round"/>
    <path d="M-18 30l-3 8h10zM8 30l-2 8h10z" fill="url(#sgGreen)" ${OUT}/>
    <path d="M10 -26l-4 -14l10 8zM26 -30l2 -14l7 11z" fill="url(#sgCream)" ${OUT}/>
    <path d="M2 -14Q4 -36 28 -34Q48 -32 56 -16Q62 -4 54 4Q40 12 20 6Q2 2 2 -14Z" fill="url(#sgGreen)" ${OUT}/>${sShine(18, -26, 9, 4)}
    <circle cx="52" cy="-12" r="1.8" fill="#2B2140"/>${sEye(30, -18, 6.5)}${mouth}${sBlush(24, -2, 4.5)}
    <path d="M-30 -18l6 -6l3 8M-40 -12l6 -6l3 8" fill="#F7D88A" ${OUT} stroke-width="2"/>${fire}`;
}
// nens: de cara, amb la mà dreta que saluda en un dels vestits
function stgKid(skin, hair, shirt, pants, k, girl) {
  const arm = (x, up) => up ? `<path d="M${x} -14Q${x + 18} -26 ${x + 20} -46" fill="none" stroke="${shirt}" stroke-width="10" stroke-linecap="round"/><circle cx="${x + 20}" cy="-50" r="6.5" fill="url(#${skin})" stroke="#2B2140" stroke-width="2.4"/>`
    : `<path d="M${x} -14Q${x + (x > 0 ? 8 : -8)} 0 ${x + (x > 0 ? 6 : -6)} 12" fill="none" stroke="${shirt}" stroke-width="10" stroke-linecap="round"/><circle cx="${x + (x > 0 ? 6 : -6)}" cy="15" r="6" fill="url(#${skin})" stroke="#2B2140" stroke-width="2.4"/>`;
  const mouth = k === 1 ? '<ellipse cx="0" cy="-42" rx="6" ry="5" fill="#7A2335" stroke="#2B2140" stroke-width="2"/><path d="M-4 -40q4 3 8 0" fill="#FF8A9A"/>'
    : k === 3 ? '<path d="M-4 -41h8" stroke="#2B2140" stroke-width="2.6" stroke-linecap="round"/>' : '<path d="M-7 -43q7 7 14 0" fill="#fff" stroke="#2B2140" stroke-width="2.4" stroke-linejoin="round"/>';
  const eyes = k === 3 ? `${sEye(-9, -58, 5, .6)}${sEye(9, -58, 5, .6)}<path d="M-15 -68l10 -3M5 -71l10 3" stroke="#2B2140" stroke-width="2.4" stroke-linecap="round"/>` : `${sEye(-9, -57, 5)}${sEye(9, -57, 5)}`;
  const hairBack = girl ? `<circle cx="-24" cy="-60" r="13" fill="${hair}"/><circle cx="24" cy="-60" r="13" fill="${hair}"/><circle cx="-22" cy="-42" r="11" fill="${hair}"/><circle cx="22" cy="-42" r="11" fill="${hair}"/>` : '';
  const hairTop = girl ? `<path d="M-24 -62Q-26 -88 0 -88Q26 -88 24 -62Q14 -76 -2 -72Q-14 -78 -24 -62Z" fill="${hair}" stroke="#2B2140" stroke-width="2.6"/><circle cx="-12" cy="-82" r="5" fill="#fff" opacity=".18"/><circle cx="20" cy="-78" r="6" fill="#FFC531" stroke="#2B2140" stroke-width="2"/>`
    : `<path d="M-23 -60Q-26 -90 2 -88Q26 -86 23 -62Q16 -72 6 -70Q8 -78 -4 -74Q-12 -70 -23 -60Z" fill="${hair}" stroke="#2B2140" stroke-width="2.6"/>`;
  const think = k === 3 ? '<g transform="translate(26 -96)"><circle r="3" fill="#fff" stroke="#2B2140" stroke-width="1.6"/><circle cx="7" cy="-8" r="4.5" fill="#fff" stroke="#2B2140" stroke-width="1.6"/></g>' : '';
  return `<ellipse cx="0" cy="56" rx="24" ry="5" fill="#000" opacity=".12"/>
    <path d="M-12 22v28M12 22v28" stroke="${pants}" stroke-width="12" stroke-linecap="round"/><path d="M-19 52h13M6 52h13" stroke="#2B2140" stroke-width="8" stroke-linecap="round"/>
    ${arm(-18, false)}${arm(18, k === 2)}
    <path d="M-20 -16Q-20 -24 -10 -24H10Q20 -24 20 -16V22Q0 28 -20 22Z" fill="${shirt}" stroke="#2B2140" stroke-width="2.6"/><path d="M-20 22Q0 28 20 22V26Q0 32 -20 26Z" fill="${pants}"/>
    ${girl ? '<path d="M-6 -6l6 6l6 -6l-6 -6z" fill="#fff" opacity=".85"/>' : '<path d="M-8 -24q8 8 16 0" fill="none" stroke="#fff" stroke-width="2.4" opacity=".7"/><rect x="-6" y="0" width="12" height="9" rx="3" fill="#fff" opacity=".25"/>'}
    <rect x="-6" y="-30" width="12" height="9" fill="url(#${skin})"/>${hairBack}
    <circle cx="-23" cy="-55" r="5.5" fill="url(#${skin})" stroke="#2B2140" stroke-width="2.2"/><circle cx="23" cy="-55" r="5.5" fill="url(#${skin})" stroke="#2B2140" stroke-width="2.2"/>
    <ellipse cx="0" cy="-56" rx="22" ry="24" fill="url(#${skin})" stroke="#2B2140" stroke-width="2.6"/>${hairTop}
    ${eyes}${sBlush(-14, -46, 4)}${sBlush(14, -46, 4)}${mouth}${think}`;
}
function stgFish(k) {
  const tail = k ? 'M-26 0Q-46 -20 -50 -12Q-42 0 -50 12Q-46 20 -26 0Z' : 'M-26 0Q-48 -14 -52 -4Q-44 2 -46 16Q-40 18 -26 0Z';
  return `<path d="${tail}" fill="url(#sgOrange)" ${OUT}/><path d="M-4 -20Q6 -38 20 -22Z" fill="url(#sgOrange)" ${OUT}/>
    <ellipse cx="0" cy="0" rx="30" ry="22" fill="url(#sgOrange)" ${OUT}/><path d="M-8 -20Q-14 0 -8 20M8 -21Q2 0 8 21" fill="none" stroke="#fff" stroke-width="5" opacity=".9"/><path d="M-8 -20Q-14 0 -8 20M8 -21Q2 0 8 21" fill="none" stroke="#2B2140" stroke-width="1.4" opacity=".35"/>
    <path d="M-2 8Q6 ${k ? 22 : 18} 14 10" fill="url(#sgOrange)" ${OUT} stroke-width="2"/>${sShine(-4, -12, 10, 4)}
    ${sEye(16, -5, 5.5)}<path d="M24 8q4 2 6 -1" fill="none" stroke="#2B2140" stroke-width="2.2" stroke-linecap="round"/>${k === 2 ? '' : ''}`;
}
function stgJelly(k) {
  const bell = k ? 'M-30 4Q-32 -34 0 -36Q32 -34 30 4Q20 -2 10 4Q0 -2 -10 4Q-20 -2 -30 4Z' : 'M-24 6Q-26 -30 0 -32Q26 -30 24 6Q16 0 8 6Q0 0 -8 6Q-16 0 -24 6Z';
  const ten = (x, d) => `<path d="M${x} 6q${d} 10 0 20t0 20" fill="none" stroke="#C77BFF" stroke-width="3.4" stroke-linecap="round" opacity=".85"/>`;
  return `${ten(-14, k ? 6 : -6)}${ten(-4, k ? -6 : 6)}${ten(6, k ? 6 : -6)}${ten(15, k ? -6 : 6)}
    <path d="${bell}" fill="url(#sgJelly)" stroke="#7A2FB8" stroke-width="2.6" stroke-linejoin="round"/>${sShine(-10, -20, 10, 5, -30)}
    ${sHappyEye(-8, -8, 4)}${sHappyEye(8, -8, 4)}${sBlush(-15, -2, 3.5)}${sBlush(15, -2, 3.5)}`;
}
function stgCrab(k) {
  const claw = (s) => `<g transform="scale(${s} 1)"><path d="M18 0Q30 -4 34 -14" fill="none" stroke="#C62828" stroke-width="5" stroke-linecap="round"/><g transform="translate(36 -20) rotate(${k ? -20 : 0})"><path d="M0 0Q-4 -14 8 -16Q16 -14 12 -6Z" fill="url(#sgRed)" ${OUT} stroke-width="2.4"/><path d="M2 2Q14 4 16 -6Q10 -2 4 -2Z" fill="url(#sgRed)" ${OUT} stroke-width="2.4" transform="rotate(${k ? 20 : 0})"/></g></g>`;
  const legs = [-1, 1].map(s => [0, 1, 2].map(i => `<path d="M${s * 12} ${6 + i * 3}l${s * (14 + i * 2)} ${8 + i * 2}" stroke="#C62828" stroke-width="3.4" stroke-linecap="round"/>`).join('')).join('');
  return `${legs}${claw(1)}${claw(-1)}<ellipse cx="0" cy="4" rx="24" ry="15" fill="url(#sgRed)" ${OUT}/>${sShine(-8, -2, 8, 3.5)}
    <path d="M-7 -10v-10M7 -10v-10" stroke="#2B2140" stroke-width="2.6"/>${sEye(-7, -22, 4.5)}${sEye(7, -22, 4.5)}<path d="M-6 8q6 5 12 0" fill="none" stroke="#2B2140" stroke-width="2.4" stroke-linecap="round"/>`;
}
function stgButterfly(k) {
  const sx = k ? .45 : 1;
  const wing = `<path d="M0 0Q18 -40 40 -30Q46 -10 4 2Z" fill="url(#sgOrange)" ${OUT} stroke-width="2.4"/><path d="M0 2Q30 6 30 26Q16 36 2 6Z" fill="url(#sgYellow)" ${OUT} stroke-width="2.4"/><circle cx="26" cy="-20" r="5" fill="#fff" opacity=".85"/><circle cx="18" cy="18" r="4" fill="#fff" opacity=".7"/>`;
  return `<g transform="scale(${sx} 1)">${wing}</g><g transform="scale(${-sx} 1)">${wing}</g>
    <ellipse cx="0" cy="2" rx="5" ry="20" fill="#3B2A55" stroke="#2B2140" stroke-width="2"/><circle cx="0" cy="-20" r="6" fill="#3B2A55"/>
    <path d="M-2 -24q-6 -12 -12 -12M2 -24q6 -12 12 -12" fill="none" stroke="#2B2140" stroke-width="2" stroke-linecap="round"/><circle cx="-14" cy="-36" r="2.4" fill="#2B2140"/><circle cx="14" cy="-36" r="2.4" fill="#2B2140"/>`;
}
const stgStarPath = (r, r2) => Array.from({ length: 10 }, (_, i) => { const a = -Math.PI / 2 + i * Math.PI / 5, q = i % 2 ? r2 : r; return `${i ? 'L' : 'M'}${(Math.cos(a) * q).toFixed(1)} ${(Math.sin(a) * q).toFixed(1)}`; }).join('') + 'Z';
function stgStar(k) {
  return `${k ? '<circle r="40" fill="url(#sgGlow)"/>' : '<circle r="30" fill="url(#sgGlow)" opacity=".7"/>'}<path d="${stgStarPath(28, 13)}" fill="url(#sgYellow)" stroke="#C9780E" stroke-width="3" stroke-linejoin="round"/>
    ${sShine(-7, -9, 6, 3, -35)}${sHappyEye(-6, 0, 3)}${sHappyEye(6, 0, 3)}<path d="M-3 5q3 3 6 0" fill="none" stroke="#2B2140" stroke-width="2" stroke-linecap="round"/>
    ${k ? '<path d="M30 -26l3 -8l3 8l8 3l-8 3l-3 8l-3 -8l-8 -3zM-34 18l2 -5l2 5l5 2l-5 2l-2 5l-2 -5l-5 -2z" fill="#fff"/>' : ''}`;
}
function stgFruit(k) {
  if (k === 0) return `<path d="M0 -18Q-22 -30 -26 -4Q-28 22 -8 24Q0 20 8 24Q28 22 26 -4Q22 -30 0 -18Z" fill="url(#sgRed)" ${OUT}/><path d="M0 -18q2 -10 6 -14" fill="none" stroke="#6B3F20" stroke-width="3.4" stroke-linecap="round"/><path d="M4 -26q12 -10 18 -2q-10 6 -18 2z" fill="url(#sgGreen)" stroke="#2B2140" stroke-width="2"/>${sShine(-12, -8, 6, 4)}`;
  if (k === 1) return `<path d="M0 -26Q-10 -24 -10 -10Q-24 2 -18 16Q-10 28 0 26Q10 28 18 16Q24 2 10 -10Q10 -24 0 -26Z" fill="url(#sgGreen)" ${OUT}/><path d="M0 -26v-8" stroke="#6B3F20" stroke-width="3.4" stroke-linecap="round"/>${sShine(-8, -2, 5, 7, 10)}`;
  if (k === 2) return `<path d="M-22 -10Q-24 18 0 28Q24 18 22 -10Q12 -18 0 -14Q-12 -18 -22 -10Z" fill="url(#sgRed)" ${OUT}/>${[[-10, -2], [2, -4], [12, 2], [-6, 10], [6, 12], [0, 20], [-14, 6]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="1.6" ry="2.4" fill="#FFE27A"/>`).join('')}<path d="M-14 -14l6 -10l6 8l6 -8l6 10l-12 2z" fill="url(#sgGreen)" stroke="#2B2140" stroke-width="2.2" stroke-linejoin="round"/>`;
  return `<path d="M-26 -14Q-30 18 4 22Q28 20 30 -4Q20 10 0 10Q-18 8 -20 -14Z" fill="url(#sgYellow)" ${OUT}/><path d="M-26 -14l-4 -6l6 1z" fill="#6B3F20" ${OUT} stroke-width="2"/>${sShine(10, 12, 9, 2.5, -10)}`;
}
function stgBasket() {
  return `<ellipse cx="0" cy="26" rx="42" ry="6" fill="#000" opacity=".15"/><path d="M-40 -8Q-38 -34 0 -34Q38 -34 40 -8" fill="none" stroke="#8A5A33" stroke-width="5" stroke-linecap="round"/>
    <path d="M-44 -8H44L36 22Q0 30 -36 22Z" fill="url(#sgWood)" ${OUT}/>${[-26, -10, 6, 22].map(x => `<path d="M${x} -6l4 26" stroke="#8A5A33" stroke-width="2.4" opacity=".6"/>`).join('')}<path d="M-40 4h80M-38 14h76" stroke="#8A5A33" stroke-width="2.4" opacity=".55"/>
    <rect x="-46" y="-12" width="92" height="9" rx="4.5" fill="#E9B06C" stroke="#2B2140" stroke-width="2.6"/>`;
}
function stgShip(k) {
  return `<g transform="translate(0 30)"><path d="M-9 0Q0 ${k ? 34 : 20} 9 0Z" fill="url(#sgFire)" stroke="#F26B21" stroke-width="2"/><path d="M-4 0Q0 ${k ? 20 : 12} 4 0Z" fill="#FFF4A8"/></g>
    <path d="M-14 6L-28 30L-12 24Z" fill="url(#sgRed)" ${OUT}/><path d="M14 6L28 30L12 24Z" fill="url(#sgRed)" ${OUT}/>
    <path d="M0 -42Q18 -22 16 14Q14 28 0 30Q-14 28 -16 14Q-18 -22 0 -42Z" fill="url(#sgSteel)" ${OUT}/><path d="M0 -42Q8 -32 11 -22H-11Q-8 -32 0 -42Z" fill="url(#sgRed)" stroke="#2B2140" stroke-width="2.4"/>
    <circle cx="0" cy="-6" r="8" fill="url(#sgBlue)" stroke="#2B2140" stroke-width="2.6"/><circle cx="-3" cy="-9" r="2.6" fill="#fff" opacity=".8"/><path d="M-8 22H8" stroke="#2B2140" stroke-width="2.4"/>`;
}
function stgMeteor(k) {
  return `<path d="M-12 -14Q-16 ${k ? -60 : -52} 0 -70Q2 -50 8 ${k ? -58 : -64}Q14 -40 14 -14Z" fill="url(#sgFire)" opacity=".95"/><path d="M-6 -16Q-6 -40 2 -50Q4 -34 8 -16Z" fill="#FFF4A8" opacity=".9"/>
    <path d="M-20 -4Q-24 -20 -8 -24Q8 -28 18 -16Q26 -4 18 12Q8 24 -6 20Q-22 16 -20 -4Z" fill="url(#sgRock)" ${OUT}/>
    <circle cx="-6" cy="-4" r="5" fill="#4A3229" opacity=".7"/><circle cx="8" cy="8" r="3.5" fill="#4A3229" opacity=".7"/><circle cx="9" cy="-12" r="2.5" fill="#4A3229" opacity=".7"/>${sShine(-10, -14, 5, 2.5)}`;
}
function stgBall() {
  return `<circle r="24" fill="url(#sgBall)" ${OUT}/><path d="M-24 0Q0 -12 24 0M-6 -23Q-14 0 -6 23M8 -22Q16 0 8 22" fill="none" stroke="#E5489A" stroke-width="3.4" opacity=".85"/>${sShine(-9, -10, 7, 4)}`;
}
function stgHeart(k) {
  return `<path d="M0 22Q-34 0 -30 -14Q-26 -30 -10 -26Q-2 -24 0 -14Q2 -24 10 -26Q26 -30 30 -14Q34 0 0 22Z" fill="url(#sgRed)" ${OUT} transform="scale(${k ? 1.12 : 1})"/>${sShine(-14, -14, 7, 4, -30)}`;
}
function stgDie(k) {
  const pips = [[[0, 0]], [[-11, -11], [11, 11]], [[-11, -11], [0, 0], [11, 11]], [[-11, -11], [11, -11], [-11, 11], [11, 11]], [[-11, -11], [11, -11], [0, 0], [-11, 11], [11, 11]], [[-11, -12], [11, -12], [-11, 0], [11, 0], [-11, 12], [11, 12]]][k];
  return `<rect x="-26" y="-24" width="52" height="52" rx="12" fill="#C9CDE0" ${OUT}/><rect x="-26" y="-28" width="52" height="52" rx="12" fill="#fff" ${OUT}/>
    ${pips.map(([x, y]) => `<circle cx="${x}" cy="${y - 2}" r="5.2" fill="${k === 0 ? '#EF4444' : '#2B2140'}"/>`).join('')}<path d="M-18 -22h14" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>`;
}
function stgButton(k) {
  return `<ellipse cx="0" cy="${k ? 22 : 24}" rx="44" ry="8" fill="#000" opacity=".15"/><rect x="-46" y="-20" width="92" height="44" rx="22" fill="#15803D" ${OUT}/>
    <rect x="-46" y="${k ? -16 : -24}" width="92" height="40" rx="20" fill="url(#sgGreen)" ${OUT}/><path d="M-8 ${k ? -11 : -15}l18 11l-18 11z" fill="#fff" stroke="#14532D" stroke-width="2" stroke-linejoin="round"/>${sShine(-24, k ? -9 : -14, 12, 3.5, 0)}`;
}
function stgChest(k) {
  return `<ellipse cx="0" cy="28" rx="40" ry="6" fill="#000" opacity=".15"/><rect x="-36" y="-4" width="72" height="32" rx="5" fill="url(#sgWood)" ${OUT}/><path d="M-36 8h72" stroke="#8A5A33" stroke-width="2.4"/>
    ${k ? '<path d="M-36 -4L-30 -40H30L36 -4Z" fill="url(#sgWood)" stroke="#2B2140" stroke-width="3" stroke-linejoin="round"/><path d="M-28 -6Q0 -24 28 -6" fill="url(#sgCoin)" stroke="#C9780E" stroke-width="2"/><circle cx="-10" cy="-14" r="5" fill="url(#sgCoin)" stroke="#C9780E" stroke-width="1.6"/><circle cx="12" cy="-16" r="4" fill="#7FF0E6" stroke="#159C9C" stroke-width="1.6"/><circle r="30" cy="-16" fill="url(#sgGlow)" opacity=".6"/>'
    : '<path d="M-36 -4Q-36 -26 0 -26Q36 -26 36 -4Z" fill="url(#sgWood)" stroke="#2B2140" stroke-width="3" stroke-linejoin="round"/><path d="M-36 -8h72" stroke="#8A5A33" stroke-width="2"/>'}
    <path d="M-30 -4v32M30 -4v32" stroke="#FFC531" stroke-width="5"/><rect x="-7" y="-4" width="14" height="14" rx="3" fill="url(#sgYellow)" stroke="#2B2140" stroke-width="2.4"/><circle cy="3" r="2.4" fill="#2B2140"/>`;
}
function stgKey() {
  return `<circle cx="-16" cy="0" r="14" fill="url(#sgYellow)" ${OUT}/><circle cx="-16" cy="0" r="5.5" fill="#FFF6D5" stroke="#2B2140" stroke-width="2.4"/><path d="M-2 -5H30V5H24V13H18V5H12V11H6V5H-2Z" fill="url(#sgYellow)" ${OUT}/>${sShine(-22, -7, 4, 2)}`;
}
function stgBat(k) {
  const w = k ? 'M8 -2Q24 -26 46 -18Q40 -10 44 -2Q34 -6 30 2Q22 -4 8 6Z' : 'M8 0Q26 10 46 30Q36 30 34 22Q28 26 24 18Q16 20 8 8Z';
  return `<path d="${w}" fill="#4B3B78" ${OUT}/><path d="${w}" fill="#4B3B78" ${OUT} transform="scale(-1 1)"/>
    <ellipse cx="0" cy="2" rx="15" ry="16" fill="#5E4A92" ${OUT}/><path d="M-11 -8l-3 -14l9 8zM11 -8l3 -14l-9 8z" fill="#5E4A92" ${OUT} stroke-width="2.4"/>
    ${sEye(-6, -1, 4.5)}${sEye(6, -1, 4.5)}<path d="M-4 9l2 4l2 -4M2 9l2 4l2 -4" fill="#fff" stroke="#2B2140" stroke-width="1.4"/>`;
}
function stgBlub(k) {
  const face = k === 1 ? `${sEye(-12, -10, 6)}${sEye(12, -10, 6)}<path d="M-8 10q8 -7 16 0" fill="none" stroke="#2B2140" stroke-width="3" stroke-linecap="round"/><path d="M-20 -2q-2 8 2 10" fill="none" stroke="#6FD3FF" stroke-width="3" stroke-linecap="round"/>`
    : k === 2 ? `${sHappyEye(-12, -10, 6)}${sHappyEye(12, -10, 6)}<ellipse cx="0" cy="8" rx="9" ry="7" fill="#7A2335" stroke="#2B2140" stroke-width="2.4"/><path d="M-5 6q5 4 10 0" fill="#FF8A9A"/>`
      : k === 3 ? `<path d="M-18 -10h12M6 -10h12" stroke="#2B2140" stroke-width="3" stroke-linecap="round"/><path d="M-4 8q4 3 8 0" fill="none" stroke="#2B2140" stroke-width="2.6" stroke-linecap="round"/><text x="22" y="-28" font-size="15" font-weight="900" fill="#fff" stroke="#2B2140" stroke-width="3" paint-order="stroke" font-family="Lexend,system-ui,sans-serif">z</text><text x="32" y="-40" font-size="11" font-weight="900" fill="#fff" stroke="#2B2140" stroke-width="2.6" paint-order="stroke" font-family="Lexend,system-ui,sans-serif">z</text>`
        : `${sEye(-12, -10, 6.5)}${sEye(12, -10, 6.5)}<path d="M-9 6q9 9 18 0" fill="#fff" stroke="#2B2140" stroke-width="2.6" stroke-linejoin="round"/>`;
  const sq = k === 2 ? 'scale(1.06 .95)' : k === 3 ? 'scale(1.04 .92) translate(0 3)' : '';
  return `<ellipse cx="0" cy="34" rx="30" ry="6" fill="#000" opacity=".14"/><g transform="${sq}"><path d="M-14 -30l-6 -14l12 8zM14 -30l6 -14l-12 8z" fill="url(#sgPurple)" ${OUT} stroke-width="2.4"/>
    <path d="M0 -36Q30 -36 32 0Q34 26 22 32Q10 36 0 32Q-10 36 -22 32Q-34 26 -32 0Q-30 -36 0 -36Z" fill="url(#sgFurB)" ${OUT}/><ellipse cx="0" cy="14" rx="18" ry="14" fill="#E2F6FF" opacity=".8"/>
    ${sShine(-14, -22, 9, 5)}<path d="M-26 22l-8 4M26 22l8 4" stroke="#2B2140" stroke-width="3" stroke-linecap="round"/>${face}${sBlush(-20, 2, 4.5)}${sBlush(20, 2, 4.5)}</g>`;
}
function stgFlake() {
  return `<g stroke="#fff" stroke-width="3.4" stroke-linecap="round">${[0, 60, 120].map(a => `<path d="M0 -16V16M-5 -11l5 5l5 -5M-5 11l5 -5l5 5" transform="rotate(${a})" fill="none"/>`).join('')}</g><g stroke="#9FD8FF" stroke-width="1.4" stroke-linecap="round">${[0, 60, 120].map(a => `<path d="M0 -16V16" transform="rotate(${a})"/>`).join('')}</g>`;
}
function stgCoin(k) {
  return k ? `<ellipse rx="8" ry="20" fill="url(#sgCoin)" ${OUT}/><path d="M0 -14v28" stroke="#C9780E" stroke-width="3"/>` : `<circle r="20" fill="url(#sgCoin)" ${OUT}/><circle r="13" fill="none" stroke="#C9780E" stroke-width="2.4"/><path d="M-3 -7h6v14h-6z" fill="#E09B0B"/>${sShine(-7, -8, 5, 3)}`;
}
function stgFlag() {
  return `<ellipse cx="0" cy="38" rx="18" ry="4" fill="#000" opacity=".15"/><rect x="-14" y="-40" width="5" height="78" rx="2.5" fill="#6B4A36" stroke="#2B2140" stroke-width="2"/><circle cx="-11.5" cy="-42" r="4.5" fill="url(#sgYellow)" stroke="#2B2140" stroke-width="2"/>
    <path d="M-9 -38Q8 -44 26 -36Q16 -28 28 -18Q10 -24 -9 -16Z" fill="url(#sgGreen)" ${OUT}/><path d="M2 -34l3 6l6 1l-4 4l1 6l-6 -3" fill="#fff" opacity=".85"/>`;
}
function stgDrum(k) {
  return `<ellipse cx="0" cy="30" rx="36" ry="6" fill="#000" opacity=".15"/><path d="M-30 -8V18Q0 32 30 18V-8Z" fill="url(#sgRed)" ${OUT}/><path d="M-30 -2L-15 22M-15 -4L0 26M0 -4L15 24M15 -2L30 18" stroke="#FFC531" stroke-width="2.6"/>
    <ellipse cx="0" cy="-8" rx="30" ry="10" fill="${k ? '#FFF8E1' : '#F3EEDF'}" ${OUT}/>${k ? '<ellipse cx="0" cy="-8" rx="18" ry="5" fill="none" stroke="#F2B21B" stroke-width="2"/>' : ''}
    <path d="M${k ? 6 : 14} ${k ? -14 : -40}L${k ? 30 : 34} ${k ? -36 : -56}" stroke="#8A5A33" stroke-width="5" stroke-linecap="round"/><circle cx="${k ? 5 : 13}" cy="${k ? -13 : -39}" r="4.5" fill="#FFF6D5" stroke="#2B2140" stroke-width="2"/>`;
}
function stgBell(k) {
  return `<g transform="rotate(${k ? 14 : 0} 0 -30)"><path d="M0 -36v-8" stroke="#8A5A33" stroke-width="4" stroke-linecap="round"/><path d="M-24 18Q-24 -34 0 -34Q24 -34 24 18Q30 24 -30 24Q-30 24 -24 18Z" fill="url(#sgYellow)" ${OUT}/><circle cx="0" cy="28" r="6" fill="#C9780E" stroke="#2B2140" stroke-width="2.4"/>${sShine(-10, -14, 5, 10, 10)}</g>
    ${k ? '<path d="M30 -20q8 6 0 14M38 -26q12 10 0 26" fill="none" stroke="#FFC531" stroke-width="3" stroke-linecap="round"/>' : ''}`;
}
function stgDog(k) {
  const tail = k === 1 ? 'M-30 0Q-46 -20 -40 -30' : 'M-30 0Q-48 -6 -50 -18';
  const head = k === 2 ? `${sHappyEye(16, -26, 5)}${sHappyEye(32, -26, 5)}<path d="M18 -10q8 10 16 0" fill="#7A2335" stroke="#2B2140" stroke-width="2.2"/><path d="M22 -6q4 8 8 0" fill="#FF8A9A"/>` : `${sEye(16, -26, 5)}${sEye(32, -26, 5)}<path d="M20 -12q5 5 10 0" fill="none" stroke="#2B2140" stroke-width="2.4" stroke-linecap="round"/>`;
  const legs = k === 1 ? '<path d="M-20 18l-6 18M-8 18l4 18M10 18l-4 18M22 18l6 18" stroke="#B5763C" stroke-width="8" stroke-linecap="round"/>' : '<path d="M-20 18v18M-8 18v18M10 18v18M22 18v18" stroke="#B5763C" stroke-width="8" stroke-linecap="round"/>';
  return `<ellipse cx="0" cy="38" rx="34" ry="5" fill="#000" opacity=".14"/><path d="${tail}" fill="none" stroke="#B5763C" stroke-width="8" stroke-linecap="round"/>${legs}
    <ellipse cx="0" cy="8" rx="32" ry="17" fill="url(#sgOrange)" ${OUT}/><ellipse cx="-6" cy="4" rx="12" ry="9" fill="#FFF0D6" opacity=".8"/>
    <path d="M4 -24Q6 -48 26 -46Q46 -48 46 -24Q46 -4 26 -2Q6 -2 4 -24Z" fill="url(#sgOrange)" ${OUT}/><path d="M6 -40Q-6 -40 -4 -20Q4 -22 10 -30Z" fill="#8A4A1F" ${OUT} stroke-width="2.4"/><path d="M44 -40Q56 -40 54 -20Q46 -22 40 -30Z" fill="#8A4A1F" ${OUT} stroke-width="2.4"/>
    ${head}<ellipse cx="24" cy="-16" rx="5" ry="3.6" fill="#2B2140"/>${sBlush(12, -16, 3.5)}${sBlush(38, -16, 3.5)}<rect x="10" y="-4" width="30" height="5" rx="2.5" fill="#3B82F6" stroke="#2B2140" stroke-width="1.6"/>`;
}
const stgImg = pose => `<image href="img/tech/bit-${pose}.webp" x="-46" y="-56" width="92" height="112" preserveAspectRatio="xMidYMid meet"/>`;
const STG_CH = {
  axo: { n: 'Axo', l: 'Axo|Axo', hb: [[110, 64]], hy: -4, cos: [{ n: 'neda 1|nada 1', d: () => stgAxo(0) }, { n: 'neda 2|nada 2', d: () => stgAxo(1) }, { n: 'content|contento', d: () => stgAxo(2) }, { n: 'sorpresa|sorpresa', d: () => stgAxo(3) }] },
  drac: { n: 'Drac', l: 'Drac|Draco', hb: [[100, 70]], cos: [{ n: 'ales amunt|alas arriba', d: () => stgDrac(0) }, { n: 'ales avall|alas abajo', d: () => stgDrac(1) }, { n: 'foc|fuego', d: () => stgDrac(2) }] },
  lia: { n: 'Lia', hb: [[54, 140]], hy: -14, cos: [{ n: 'somriu|sonríe', d: () => stgKid('sgSkinA', '#2B1A12', '#FFC531', '#3B6FF6', 0, 1) }, { n: 'parla|habla', d: () => stgKid('sgSkinA', '#2B1A12', '#FFC531', '#3B6FF6', 1, 1) }, { n: 'saluda|saluda', d: () => stgKid('sgSkinA', '#2B1A12', '#FFC531', '#3B6FF6', 2, 1) }, { n: 'pensa|piensa', d: () => stgKid('sgSkinA', '#2B1A12', '#FFC531', '#3B6FF6', 3, 1) }] },
  nil: { n: 'Nil', hb: [[54, 140]], hy: -14, cos: [{ n: 'somriu|sonríe', d: () => stgKid('sgSkinB', '#D9622B', '#22A06B', '#2B3A67', 0, 0) }, { n: 'parla|habla', d: () => stgKid('sgSkinB', '#D9622B', '#22A06B', '#2B3A67', 1, 0) }, { n: 'saluda|saluda', d: () => stgKid('sgSkinB', '#D9622B', '#22A06B', '#2B3A67', 2, 0) }, { n: 'pensa|piensa', d: () => stgKid('sgSkinB', '#D9622B', '#22A06B', '#2B3A67', 3, 0) }] },
  peix: { n: 'Peix', l: 'Peix|Pez', hb: [[80, 44]], cos: [{ n: 'neda 1|nada 1', d: () => stgFish(0) }, { n: 'neda 2|nada 2', d: () => stgFish(1) }] },
  medusa: { n: 'Medusa', hb: [[54, 70]], hy: 4, cos: [{ n: 'tancada|cerrada', d: () => stgJelly(0) }, { n: 'oberta|abierta', d: () => stgJelly(1) }] },
  cranc: { n: 'Cranc', l: 'Cranc|Cangrejo', hb: [[90, 44]], cos: [{ n: 'pinces obertes|pinzas abiertas', d: () => stgCrab(0) }, { n: 'pinces tancades|pinzas cerradas', d: () => stgCrab(1) }] },
  bombolla: { n: 'Bombolla', l: 'Bombolla|Burbuja', hb: [[36, 36]], cos: [{ n: 'bombolla|burbuja', d: () => `<circle r="17" fill="url(#sgBubble)" stroke="#BFF0FF" stroke-width="2.4"/><ellipse cx="-6" cy="-7" rx="5" ry="3" fill="#fff" opacity=".9" transform="rotate(-30 -6 -7)"/>` }] },
  papallona: { n: 'Papallona', l: 'Papallona|Mariposa', hb: [[70, 60]], cos: [{ n: 'ales obertes|alas abiertas', d: () => stgButterfly(0) }, { n: 'ales plegades|alas plegadas', d: () => stgButterfly(1) }] },
  estrella: { n: 'Estrella', hb: [[54, 52]], cos: [{ n: 'estrella|estrella', d: () => stgStar(0) }, { n: 'brilla|brilla', d: () => stgStar(1) }] },
  fruita: { n: 'Fruita', l: 'Fruita|Fruta', hb: [[52, 52]], cos: [{ n: 'poma|manzana', d: () => stgFruit(0) }, { n: 'pera|pera', d: () => stgFruit(1) }, { n: 'maduixa|fresa', d: () => stgFruit(2) }, { n: 'plàtan|plátano', d: () => stgFruit(3) }] },
  cistella: { n: 'Cistella', l: 'Cistella|Cesta', hb: [[92, 40]], hy: 6, cos: [{ n: 'cistella|cesta', d: stgBasket }] },
  nau: { n: 'Nau', l: 'Nau|Nave', hb: [[44, 70]], hy: -6, rot: 'none', cos: [{ n: 'motor fort|motor fuerte', d: () => stgShip(1) }, { n: 'motor fluix|motor suave', d: () => stgShip(0) }] },
  meteorit: { n: 'Meteorit', l: 'Meteorit|Meteorito', hb: [[40, 40]], rot: 'none', cos: [{ n: 'cau 1|cae 1', d: () => stgMeteor(0) }, { n: 'cau 2|cae 2', d: () => stgMeteor(1) }] },
  pilota: { n: 'Pilota', l: 'Pilota|Pelota', hb: [[48, 48]], rot: 'all', cos: [{ n: 'pilota|pelota', d: stgBall }] },
  cor: { n: 'Cor', l: 'Cor|Corazón', hb: [[60, 50]], cos: [{ n: 'cor|corazón', d: () => stgHeart(0) }, { n: 'batega|late', d: () => stgHeart(1) }] },
  dau: { n: 'Dau', l: 'Dau|Dado', hb: [[54, 54]], cos: [1, 2, 3, 4, 5, 6].map(i => ({ n: `${i}|${i}`, d: () => stgDie(i - 1) })) },
  boto: { n: 'Boto', l: 'Botó|Botón', hb: [[92, 44]], cos: [{ n: 'normal|normal', d: () => stgButton(0) }, { n: 'premut|pulsado', d: () => stgButton(1) }] },
  cofre: { n: 'Cofre', hb: [[76, 56]], hy: 4, cos: [{ n: 'tancat|cerrado', d: () => stgChest(0) }, { n: 'obert|abierto', d: () => stgChest(1) }] },
  clau: { n: 'Clau', l: 'Clau|Llave', hb: [[64, 30]], cos: [{ n: 'clau|llave', d: stgKey }] },
  ratpenat: { n: 'Ratpenat', l: 'Ratpenat|Murciélago', hb: [[70, 40]], cos: [{ n: 'ales amunt|alas arriba', d: () => stgBat(1) }, { n: 'ales avall|alas abajo', d: () => stgBat(0) }] },
  blub: { n: 'Blub', hb: [[64, 70]], hy: 0, cos: [{ n: 'content|contento', d: () => stgBlub(0) }, { n: 'trist|triste', d: () => stgBlub(1) }, { n: 'menja|come', d: () => stgBlub(2) }, { n: 'dorm|duerme', d: () => stgBlub(3) }] },
  floc: { n: 'Floc', l: 'Floc|Copo', hb: [[34, 34]], rot: 'all', cos: [{ n: 'floc|copo', d: stgFlake }] },
  moneda: { n: 'Moneda', hb: [[40, 40]], cos: [{ n: 'cara|cara', d: () => stgCoin(0) }, { n: 'de costat|de lado', d: () => stgCoin(1) }] },
  bandera: { n: 'Bandera', hb: [[44, 80]], cos: [{ n: 'bandera|bandera', d: stgFlag }] },
  tambor: { n: 'Tambor', hb: [[64, 50]], hy: 6, cos: [{ n: 'quiet|quieto', d: () => stgDrum(0) }, { n: 'cop|golpe', d: () => stgDrum(1) }] },
  campana: { n: 'Campana', hb: [[52, 64]], cos: [{ n: 'quieta|quieta', d: () => stgBell(0) }, { n: 'sona|suena', d: () => stgBell(1) }] },
  gos: { n: 'Rufus', hb: [[92, 70]], cos: [{ n: 'quiet|quieto', d: () => stgDog(0) }, { n: 'camina|camina', d: () => stgDog(1) }, { n: 'content|contento', d: () => stgDog(2) }] },
  bit: { n: 'Bit', hb: [[60, 100]], img: 1, cos: ['idle', 'happy', 'wave', 'think', 'dance', 'win', 'sad'].map((p, i) => ({ n: ['quiet|quieto', 'content|contento', 'saluda|saluda', 'pensa|piensa', 'balla|baila', 'guanya|gana', 'trist|triste'][i], d: () => stgImg(p) })) }
};
for (const c of Object.values(STG_CH)) if (c.hb.length && !Array.isArray(c.hb[0])) c.hb = [c.hb];
// personatges que es poden afegir a un projecte, per temes
const STG_LIB = [['bit', 'axo', 'drac', 'lia', 'nil', 'gos', 'blub'], ['peix', 'medusa', 'cranc', 'bombolla', 'papallona', 'ratpenat'], ['estrella', 'moneda', 'fruita', 'cor', 'cofre', 'clau', 'bandera'], ['nau', 'meteorit', 'pilota', 'cistella', 'dau', 'boto', 'floc', 'tambor', 'campana']];

/* ---------- Fons (480 × 360, coordenades de pantalla) ----------
   reg: zones de color per al bloc «toques el color…?» (en coordenades de l'escenari: x −240…240, y −180…180) */
const bgCloud = (x, y, s = 1, o = 1) => `<g transform="translate(${x} ${y}) scale(${s})" opacity="${o}"><ellipse rx="40" ry="14" fill="#fff"/><ellipse cx="-18" cy="-8" rx="20" ry="14" fill="#fff"/><ellipse cx="12" cy="-12" rx="22" ry="17" fill="#fff"/><ellipse cx="0" cy="6" rx="38" ry="6" fill="#DCEBFF" opacity=".6"/></g>`;
const bgTree = (x, y, s = 1, c1 = '#5DBB46', c2 = '#3E9A36') => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cy="2" rx="26" ry="6" fill="#1E4D1A" opacity=".25"/><path d="M-5 0V-30h10V0z" fill="#8A5A33"/><circle cx="-14" cy="-40" r="18" fill="${c2}"/><circle cx="14" cy="-42" r="18" fill="${c2}"/><circle cy="-58" r="22" fill="${c1}"/><circle cx="-8" cy="-64" r="7" fill="#fff" opacity=".18"/></g>`;
const bgPine = (x, y, s = 1, snow) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-4" y="-10" width="8" height="12" fill="#6B4A36"/><path d="M0 -70L-22 -34H-12L-28 -10H28L12 -34H22Z" fill="#2E7D4F"/><path d="M0 -70L-22 -34H-12L-28 -10H0Z" fill="#3A9963"/>${snow ? '<path d="M0 -70L-10 -54Q0 -50 10 -54Z M-18 -36Q-6 -30 6 -34L18 -36Z" fill="#fff"/>' : ''}</g>`;
const bgFlower = (x, y, c) => `<g transform="translate(${x} ${y})"><path d="M0 0v-10" stroke="#3E8E3A" stroke-width="2"/><circle cy="-13" r="3" cx="-3" fill="${c}"/><circle cy="-13" r="3" cx="3" fill="${c}"/><circle cy="-16" r="3" fill="${c}"/><circle cy="-10" r="3" fill="${c}"/><circle cy="-13" r="2" fill="#FFD54A"/></g>`;
const stgStars = (n, seed, h = 360) => { const r = stgRng(seed); return Array.from({ length: n }, () => { const x = r() * 480, y = r() * h, s = r(); return s > .85 ? `<path d="M${x} ${y - 4}l1.2 2.8l2.8 1.2l-2.8 1.2l-1.2 2.8l-1.2 -2.8l-2.8 -1.2l2.8 -1.2z" fill="#fff" class="stg-tw" style="--d:${(r() * 3).toFixed(2)}s"/>` : `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(.6 + s * 1.3).toFixed(1)}" fill="#fff" opacity="${(.4 + s * .6).toFixed(2)}"/>`; }).join(''); };
// laberint: parets en coordenades de l'escenari [x, y, amplada, alçada] (x,y = cantonada de baix a l'esquerra)
const STG_MAZE = [[-240, 160, 480, 20], [-240, -180, 480, 20], [-240, -180, 20, 360], [220, -180, 20, 360],
  [-160, -100, 20, 260], [-80, -160, 20, 220], [-80, 40, 140, 20], [0, -100, 20, 120], [0, -100, 120, 20], [80, -40, 20, 100], [140, 40, 20, 120], [140, -180, 20, 120]];
const STG_MAZE_GOAL = [160, -160, 60, 60];
const STG_BG = {
  parc: { n: 'Parc|Parque', d: () => `<defs><linearGradient id="bgSkyP" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7CC8FF"/><stop offset="1" stop-color="#DDF3FF"/></linearGradient></defs>
    <rect width="480" height="360" fill="url(#bgSkyP)"/><circle cx="400" cy="62" r="56" fill="url(#sgGlow)"/><circle cx="400" cy="62" r="26" fill="#FFE066"/>
    <g class="stg-drift">${bgCloud(90, 70, 1)}${bgCloud(290, 46, .8, .9)}</g>
    <path d="M0 230Q90 170 190 214Q290 160 380 200Q440 180 480 196V360H0Z" fill="#9ED77A"/><path d="M0 252Q120 214 240 246Q360 220 480 240V360H0Z" fill="#7CC456"/>
    ${bgTree(54, 262, .95)}${bgTree(420, 258, 1.1)}${bgTree(330, 236, .7, '#6CCB52', '#4FA83E')}
    <path d="M150 360Q210 300 250 268Q262 258 290 256" fill="none" stroke="#F2DDA9" stroke-width="40" stroke-linecap="round" opacity=".95"/>
    ${[[30, 330, '#FF8FB1'], [100, 300, '#fff'], [380, 320, '#FFD54A'], [450, 300, '#B79CFF'], [200, 340, '#fff'], [330, 352, '#FF8FB1']].map(f => bgFlower(...f)).join('')}` },
  platja: { n: 'Platja|Playa', reg: [{ c: 'blau', r: [-240, -40, 480, 60] }], d: () => `<defs><linearGradient id="bgSkyB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFB88A"/><stop offset=".55" stop-color="#FFE3B3"/></linearGradient><linearGradient id="bgSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3FB4E8"/><stop offset="1" stop-color="#1D7FC2"/></linearGradient></defs>
    <rect width="480" height="200" fill="url(#bgSkyB)"/><circle cx="130" cy="150" r="70" fill="url(#sgGlow)"/><circle cx="130" cy="150" r="32" fill="#FFD166"/>${bgCloud(360, 60, .9)}
    <rect y="160" width="480" height="60" fill="url(#bgSea)"/><path class="stg-wave" d="M-40 176 ${'q10 -6 20 0t20 0 '.repeat(14)}" fill="none" stroke="#BFEFFF" stroke-width="2.4" opacity=".8"/><path d="M60 168h60M300 184h80" stroke="#fff" stroke-width="2" opacity=".6"/>
    <path d="M0 214Q120 200 240 212T480 210V360H0Z" fill="#F7DFA3"/><path d="M0 214Q120 200 240 212T480 210" fill="none" stroke="#fff" stroke-width="5" opacity=".8"/>
    <g transform="translate(410 300)"><path d="M0 0Q-6 -70 10 -130" fill="none" stroke="#8A5A33" stroke-width="10" stroke-linecap="round"/><g class="stg-sway"><path d="M10 -130q-40 -10 -60 16M10 -130q36 -18 64 6M10 -130q-14 -30 -46 -30M10 -130q20 -32 52 -26" stroke="#2E9A4A" stroke-width="12" fill="none" stroke-linecap="round"/></g><circle cx="4" cy="-124" r="6" fill="#7A4A1E"/><circle cx="16" cy="-122" r="6" fill="#7A4A1E"/></g>
    <g transform="translate(90 300)"><path d="M0 0V-80" stroke="#6B4A36" stroke-width="4"/><path d="M-60 -70Q0 -110 60 -70Z" fill="#EF5A5A"/><path d="M-60 -70Q-30 -100 0 -106V-70Z" fill="#fff"/><path d="M0 -106Q30 -100 60 -70H30Z" fill="#fff"/></g>
    <ellipse cx="250" cy="320" rx="40" ry="10" fill="#E9C27A" opacity=".6"/>` },
  mar: { n: 'Fons marí|Fondo marino', d: () => `<defs><linearGradient id="bgDeep" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3CC2EE"/><stop offset=".6" stop-color="#1A79C8"/><stop offset="1" stop-color="#0E4C96"/></linearGradient></defs>
    <rect width="480" height="360" fill="url(#bgDeep)"/>${[60, 170, 300, 400].map((x, i) => `<path d="M${x} 0L${x - 40} 360H${x + 10}L${x + 40} 0Z" fill="#fff" opacity=".07" class="stg-ray" style="--d:${i * .9}s"/>`).join('')}
    <path d="M0 320Q120 296 240 316T480 306V360H0Z" fill="#E8CF8F"/><path d="M0 334Q160 318 320 336T480 330V360H0Z" fill="#D9B86C"/>
    ${[[40, 330, 0], [90, 336, 1], [380, 326, 2], [440, 334, 0], [250, 340, 1]].map(([x, y, k]) => `<g class="stg-sway" style="--d:${k * .7}s" transform="translate(${x} ${y})"><path d="M0 0Q-12 -30 0 -60Q12 -90 0 -${110 - k * 20}" fill="none" stroke="${['#2BB673', '#21A05F', '#3CCB7F'][k]}" stroke-width="9" stroke-linecap="round"/></g>`).join('')}
    <g transform="translate(160 330)"><path d="M0 0Q-6 -30 -20 -36M0 0Q4 -34 16 -44M0 0Q10 -20 30 -24" stroke="#FF7A9A" stroke-width="8" fill="none" stroke-linecap="round"/></g>
    <path d="M300 340Q310 300 350 306Q380 316 372 340Z" fill="#6E7F99" stroke="#4E5D78" stroke-width="2"/>
    ${[[70, 200, 6], [86, 150, 4], [420, 120, 5], [432, 80, 3], [230, 90, 4]].map(([x, y, r], i) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#CFF4FF" stroke-width="2" opacity=".8" class="stg-rise" style="--d:${i * .8}s"/>`).join('')}` },
  espai: { n: 'Espai|Espacio', d: () => `<defs><radialGradient id="bgSpace" cx=".3" cy=".2" r="1.1"><stop offset="0" stop-color="#3A2A8C"/><stop offset=".55" stop-color="#16124A"/><stop offset="1" stop-color="#070A22"/></radialGradient><radialGradient id="bgNeb" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FF6BD5" stop-opacity=".45"/><stop offset="1" stop-color="#FF6BD5" stop-opacity="0"/></radialGradient><linearGradient id="bgPlan" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFB86B"/><stop offset="1" stop-color="#C2410C"/></linearGradient></defs>
    <rect width="480" height="360" fill="url(#bgSpace)"/><ellipse cx="330" cy="120" rx="170" ry="90" fill="url(#bgNeb)"/><ellipse cx="90" cy="250" rx="140" ry="70" fill="url(#bgNeb)" opacity=".6"/>${stgStars(90, 5)}
    <g transform="translate(380 90)"><ellipse rx="70" ry="16" fill="none" stroke="#FFE3B8" stroke-width="5" opacity=".55" transform="rotate(-18)"/><circle r="38" fill="url(#bgPlan)"/><path d="M-34 -10Q0 -20 34 -6M-36 8Q0 0 36 12" stroke="#fff" stroke-width="4" opacity=".2" fill="none"/><path d="M-66 18Q0 4 66 -22" stroke="#FFE3B8" stroke-width="5" opacity=".8" fill="none" transform="rotate(-2)"/></g>
    <circle cx="70" cy="70" r="16" fill="#E6E9F5"/><circle cx="64" cy="66" r="4" fill="#C3C9DD"/><circle cx="76" cy="76" r="3" fill="#C3C9DD"/>` },
  ciutat: { n: 'Ciutat|Ciudad', d: () => { const r = stgRng(3); let b = ''; let x = -10; while (x < 480) { const w = 44 + r() * 40, h = 90 + r() * 150; b += `<rect x="${x}" y="${300 - h}" width="${w}" height="${h + 10}" fill="${r() > .5 ? '#3B2F6B' : '#2A2456'}"/>`; for (let yy = 300 - h + 12; yy < 290; yy += 20) for (let xx = x + 8; xx < x + w - 10; xx += 14) if (r() > .35) b += `<rect x="${xx}" y="${yy}" width="7" height="10" rx="1.5" fill="${r() > .3 ? '#FFD58A' : '#7C6FC9'}" opacity=".9"/>`; x += w + 4; }
      return `<defs><linearGradient id="bgDusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5B3FA8"/><stop offset=".5" stop-color="#F0709A"/><stop offset="1" stop-color="#FFC47A"/></linearGradient></defs><rect width="480" height="360" fill="url(#bgDusk)"/><circle cx="240" cy="250" r="80" fill="#FFE29A" opacity=".55"/>${stgStars(25, 9, 120)}
      <path d="M0 260L30 200L60 230L100 170L140 230L170 210L200 250H0Z" fill="#7B5BC2" opacity=".5"/>${b}<rect y="300" width="480" height="60" fill="#3A3A4F"/><path d="M0 330h480" stroke="#F2E6B8" stroke-width="4" stroke-dasharray="26 18"/>`; } },
  bosc: { n: 'Bosc|Bosque', d: () => `<defs><linearGradient id="bgFor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#BDEBC7"/><stop offset="1" stop-color="#E9F7D6"/></linearGradient></defs><rect width="480" height="360" fill="url(#bgFor)"/>
    ${[40, 130, 220, 310, 400, 470].map((x, i) => bgPine(x, 230 + (i % 2) * 10, 1.3, 0)).join('')}<path d="M0 240Q240 220 480 244V360H0Z" fill="#7FBF5A"/>
    ${[[-10, 330, 1.4], [90, 350, 1.6], [400, 340, 1.5], [480, 350, 1.3]].map(([x, y, s]) => bgTree(x, y, s, '#4FA83E', '#2F7C2C')).join('')}
    <path d="M200 360Q230 300 250 250" stroke="#E2C48A" stroke-width="44" fill="none" stroke-linecap="round" opacity=".9"/>
    ${[[150, 300], [330, 310]].map(([x, y]) => `<g transform="translate(${x} ${y})"><rect x="-4" y="-12" width="8" height="12" rx="2" fill="#FFF3E0"/><path d="M-14 -10Q0 -30 14 -10Z" fill="#EF4444"/><circle cx="-5" cy="-16" r="2" fill="#fff"/><circle cx="5" cy="-14" r="2" fill="#fff"/></g>`).join('')}
    ${[0, 1, 2].map(i => `<path d="M${120 + i * 110} 0L${80 + i * 110} 260H${130 + i * 110}Z" fill="#FFFBE0" opacity=".25"/>`).join('')}` },
  teatre: { n: 'Teatre|Teatro', d: () => `<defs><linearGradient id="bgCur" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8E1B2E"/><stop offset=".5" stop-color="#D93A4E"/><stop offset="1" stop-color="#8E1B2E"/></linearGradient><radialGradient id="bgSpot" cx=".5" cy=".9" r=".6"><stop offset="0" stop-color="#FFF6D0" stop-opacity=".9"/><stop offset="1" stop-color="#FFF6D0" stop-opacity="0"/></radialGradient></defs>
    <rect width="480" height="360" fill="#2A1638"/><rect x="40" y="40" width="400" height="230" fill="#3B2350"/><ellipse cx="240" cy="270" rx="200" ry="120" fill="url(#bgSpot)"/>
    <path d="M0 280H480V360H0Z" fill="#9A5B2E"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<path d="M${i * 60} 280L${i * 60 - 20} 360" stroke="#7A4521" stroke-width="2"/>`).join('')}<rect y="276" width="480" height="8" fill="#C98A4B"/>
    ${[0, 1, 2, 3].map(i => `<rect x="${i * 22}" y="0" width="22" height="300" fill="url(#bgCur)"/>`).join('')}${[0, 1, 2, 3].map(i => `<rect x="${392 + i * 22}" y="0" width="22" height="300" fill="url(#bgCur)"/>`).join('')}
    <path d="M0 0H480V44Q420 60 360 44Q300 60 240 44Q180 60 120 44Q60 60 0 44Z" fill="url(#bgCur)"/><path d="M0 44Q60 60 120 44Q180 60 240 44Q300 60 360 44Q420 60 480 44" fill="none" stroke="#FFC531" stroke-width="4"/>
    ${[80, 240, 400].map(x => `<g transform="translate(${x} 10)"><rect x="-10" y="0" width="20" height="16" rx="4" fill="#333"/><path d="M-10 16L-40 360H40L10 16Z" fill="#FFF8D6" opacity=".08"/></g>`).join('')}` },
  habitacio: { n: 'Habitació|Habitación', d: () => `<rect width="480" height="260" fill="#FFE9D6"/>${Array.from({ length: 13 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="260" fill="#FFDCC2" opacity=".6"/>`).join('')}
    <rect y="250" width="480" height="110" fill="#C98A4B"/>${[0, 1, 2, 3, 4, 5].map(i => `<path d="M0 ${262 + i * 18}H480" stroke="#A86A33" stroke-width="2" opacity=".5"/>`).join('')}<rect y="246" width="480" height="10" fill="#fff"/>
    <g transform="translate(300 50)"><rect width="130" height="110" rx="8" fill="#9ED7FF" stroke="#fff" stroke-width="8"/><path d="M65 0V110M0 55H130" stroke="#fff" stroke-width="6"/>${bgCloud(40, 34, .5)}<circle cx="100" cy="30" r="12" fill="#FFE066"/><path d="M-10 -8H140" stroke="#8A5A33" stroke-width="6" stroke-linecap="round"/><path d="M-6 -6Q10 60 -4 120M136 -6Q120 60 134 120" fill="#F28AA8" stroke="#E0607F" stroke-width="2"/></g>
    <g transform="translate(40 90)"><rect width="150" height="12" rx="4" fill="#A86A33"/><rect x="10" y="-30" width="18" height="30" rx="3" fill="#3B82F6"/><rect x="30" y="-36" width="14" height="36" rx="3" fill="#EF4444"/><rect x="46" y="-26" width="16" height="26" rx="3" fill="#22C55E"/><circle cx="110" cy="-14" r="14" fill="#FFC531"/><path d="M104 -16l4 4l8 -8" stroke="#fff" stroke-width="3" fill="none"/></g>
    <ellipse cx="200" cy="320" rx="150" ry="26" fill="#7C5CC4" opacity=".85"/><ellipse cx="200" cy="320" rx="120" ry="18" fill="none" stroke="#B79CFF" stroke-width="4" opacity=".7"/>
    <g transform="translate(440 250)"><path d="M0 0V-110" stroke="#555" stroke-width="5"/><path d="M-26 -110L-14 -150H14L26 -110Z" fill="#FFC531" stroke="#C99400" stroke-width="2"/><ellipse cy="-6" rx="20" ry="6" fill="#555"/></g>` },
  castell: { n: 'Castell|Castillo', d: () => `<defs><linearGradient id="bgSkyC" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8EC5FF"/><stop offset="1" stop-color="#E8D5FF"/></linearGradient></defs><rect width="480" height="360" fill="url(#bgSkyC)"/>${bgCloud(80, 60, .9)}${bgCloud(400, 40, .7)}
    <path d="M0 270Q240 190 480 270V360H0Z" fill="#8CCB6A"/>
    <g transform="translate(240 236)"><rect x="-90" y="-100" width="180" height="100" fill="#C9C3D9" stroke="#8F86A8" stroke-width="3"/>${[-90, -60, -30, 0, 30, 60].map(x => `<rect x="${x}" y="-112" width="18" height="14" fill="#C9C3D9" stroke="#8F86A8" stroke-width="3"/>`).join('')}
      ${[-110, 90].map(x => `<rect x="${x}" y="-150" width="40" height="150" fill="#D8D2E6" stroke="#8F86A8" stroke-width="3"/><path d="M${x - 6} -150L${x + 20} -196L${x + 46} -150Z" fill="#7C5CC4" stroke="#5B3FA8" stroke-width="3"/><path d="M${x + 20} -196V-216" stroke="#555" stroke-width="2"/><path d="M${x + 20} -216l18 5l-18 5z" fill="#EF4444"/><rect x="${x + 14}" y="-120" width="12" height="18" rx="6" fill="#4B3B78"/>`).join('')}
      <path d="M-26 0V-46Q0 -70 26 -46V0Z" fill="#6B4A36" stroke="#4A3229" stroke-width="3"/><path d="M-26 -30H26M-26 -16H26" stroke="#4A3229" stroke-width="2"/></g>
    <path d="M200 360Q220 300 240 238" stroke="#E2C48A" stroke-width="34" fill="none"/>${bgTree(40, 300, 1)}${bgTree(440, 310, 1.1)}` },
  quadricula: { n: 'Quadrícula|Cuadrícula', d: () => { let g = ''; for (let x = 0; x <= 480; x += 20) g += `<path d="M${x} 0V360" stroke="${x % 100 === 40 ? '#B9C8EE' : '#DCE4FA'}" stroke-width="${x === 240 ? 0 : x % 100 === 40 ? 1.6 : 1}"/>`; for (let y = 0; y <= 360; y += 20) g += `<path d="M0 ${y}H480" stroke="${(y - 180) % 100 === 0 ? '#B9C8EE' : '#DCE4FA'}" stroke-width="${(y - 180) % 100 === 0 ? 1.6 : 1}"/>`;
      const lab = [-200, -100, 100, 200].map(v => `<text x="${240 + v}" y="196" text-anchor="middle" class="stg-gl">${v}</text>`).join('') + [-100, 100].map(v => `<text x="248" y="${184 - v}" class="stg-gl">${v}</text>`).join('');
      return `<rect width="480" height="360" fill="#F7F9FF"/>${g}<path d="M0 180H480" stroke="#EF4444" stroke-width="3"/><path d="M470 174l10 6l-10 6z" fill="#EF4444"/><path d="M240 360V0" stroke="#22A06B" stroke-width="3"/><path d="M234 10l6 -10l6 10z" fill="#22A06B"/>
        <text x="462" y="170" class="stg-gl b" fill="#EF4444">x</text><text x="250" y="18" class="stg-gl b" fill="#22A06B">y</text>${lab}<circle cx="240" cy="180" r="5" fill="#14204A"/><text x="246" y="196" class="stg-gl">0</text>`; } },
  laberint: { n: 'Laberint|Laberinto', reg: [...STG_MAZE.map(r => ({ c: 'blau', r })), { c: 'verd', r: STG_MAZE_GOAL }], d: () => `<rect width="480" height="360" fill="#FFF4DC"/>${Array.from({ length: 24 }, (_, i) => Array.from({ length: 18 }, (_, j) => (i + j) % 2 ? `<rect x="${i * 20}" y="${j * 20}" width="20" height="20" fill="#FBE7BE" opacity=".6"/>` : '').join('')).join('')}
    <rect x="${240 + STG_MAZE_GOAL[0]}" y="${180 - STG_MAZE_GOAL[1] - STG_MAZE_GOAL[3]}" width="${STG_MAZE_GOAL[2]}" height="${STG_MAZE_GOAL[3]}" rx="10" fill="#22C55E"/><path d="M${240 + STG_MAZE_GOAL[0] + 18} ${180 - STG_MAZE_GOAL[1] - 14}v-30l22 8l-22 8" fill="#fff" stroke="#14532D" stroke-width="2"/>
    ${STG_MAZE.map(([x, y, w, h]) => `<rect x="${240 + x}" y="${180 - y - h}" width="${w}" height="${h}" rx="5" fill="#3B6FF6" stroke="#1E40AF" stroke-width="2.5"/><rect x="${240 + x + 3}" y="${180 - y - h + 3}" width="${Math.max(0, w - 6)}" height="${Math.min(5, h - 6)}" rx="2" fill="#fff" opacity=".3"/>`).join('')}` },
  volca: { n: 'Volcà|Volcán', reg: [{ c: 'vermell', r: [-240, -180, 480, 40] }, { c: 'vermell', r: [-60, -140, 120, 30] }], d: () => `<defs><linearGradient id="bgVol" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A1F4F"/><stop offset=".6" stop-color="#B4405A"/><stop offset="1" stop-color="#F59E5B"/></linearGradient><linearGradient id="bgLava" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD24A"/><stop offset=".5" stop-color="#FF6B2C"/><stop offset="1" stop-color="#D62F3A"/></linearGradient></defs>
    <rect width="480" height="360" fill="url(#bgVol)"/>${stgStars(20, 4, 100)}<path d="M120 300L210 110H270L360 300Z" fill="#4A2A3A"/><path d="M210 110Q240 128 270 110L280 130Q240 150 200 130Z" fill="url(#bgLava)"/><path d="M228 116Q236 170 214 230" stroke="url(#bgLava)" stroke-width="10" fill="none" stroke-linecap="round"/>
    <g class="stg-rise">${[0, 1, 2].map(i => `<circle cx="${230 + i * 12}" cy="${90 - i * 18}" r="${10 - i * 2}" fill="#6B5A6E" opacity=".6"/>`).join('')}</g>
    <path d="M0 280H160L180 300H300L320 280H480V320H0Z" fill="#5A3A4A"/><rect y="320" width="480" height="40" fill="url(#bgLava)"/><rect x="180" y="290" width="120" height="30" fill="url(#bgLava)"/><path class="stg-wave" d="M-40 326 ${'q10 -5 20 0t20 0 '.repeat(14)}" stroke="#FFE7A0" stroke-width="2.4" fill="none" opacity=".8"/>
    ${[[60, 270], [400, 266]].map(([x, y]) => `<path d="M${x - 40} ${y + 10}Q${x - 30} ${y - 20} ${x} ${y - 18}Q${x + 30} ${y - 20} ${x + 40} ${y + 10}Z" fill="#6B4A5A"/>`).join('')}` },
  neu: { n: 'Neu|Nieve', d: () => `<defs><linearGradient id="bgSnow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9CC9F5"/><stop offset="1" stop-color="#E6F3FF"/></linearGradient></defs><rect width="480" height="360" fill="url(#bgSnow)"/>
    <path d="M0 220L80 120L150 200L230 90L320 210L400 130L480 200V360H0Z" fill="#C9DDF5"/><path d="M80 120L100 146L88 150L70 136ZM230 90L254 124L236 128L214 112ZM400 130L418 152L404 156L388 144Z" fill="#fff"/>
    <path d="M0 260Q240 220 480 262V360H0Z" fill="#fff"/>${[30, 110, 380, 450].map((x, i) => bgPine(x, 268 + (i % 2) * 8, 1.1, 1)).join('')}
    <g transform="translate(250 300)"><circle r="26" fill="#fff" stroke="#C9DDF5" stroke-width="3"/><circle cy="-36" r="18" fill="#fff" stroke="#C9DDF5" stroke-width="3"/><circle cx="-6" cy="-40" r="2.5" fill="#2B2140"/><circle cx="6" cy="-40" r="2.5" fill="#2B2140"/><path d="M0 -34l10 3l-10 2z" fill="#F97316"/><path d="M-16 -22Q0 -16 16 -22" stroke="#EF4444" stroke-width="6" fill="none"/></g>` },
  cel: { n: 'Cel|Cielo', d: () => `<defs><linearGradient id="bgSky2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4FA8FF"/><stop offset="1" stop-color="#CDEBFF"/></linearGradient></defs><rect width="480" height="360" fill="url(#bgSky2)"/>
    <circle cx="70" cy="60" r="60" fill="url(#sgGlow)"/><circle cx="70" cy="60" r="26" fill="#FFE066"/><g class="stg-drift">${bgCloud(220, 80, 1.2)}${bgCloud(400, 150, .9)}${bgCloud(110, 210, 1)}${bgCloud(330, 280, 1.3)}${bgCloud(40, 320, .8)}</g>
    <path d="M0 340Q120 320 240 336T480 330V360H0Z" fill="#9ED77A"/>` },
  nit: { n: 'Nit|Noche', d: () => `<defs><linearGradient id="bgNight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0F1446"/><stop offset="1" stop-color="#3A3F8F"/></linearGradient></defs><rect width="480" height="360" fill="url(#bgNight)"/>${stgStars(60, 12, 230)}
    <circle cx="380" cy="70" r="34" fill="#FFF6C9"/><circle cx="394" cy="60" r="30" fill="#24296B" opacity=".9"/>
    <path d="M0 250Q120 200 240 240T480 230V360H0Z" fill="#283070"/><path d="M0 290Q160 250 320 286T480 280V360H0Z" fill="#1B2258"/>
    ${[[60, 290], [420, 300]].map(([x, y]) => bgPine(x, y, 1.2)).join('').replace(/#2E7D4F|#3A9963/g, '#162050')}
    <g transform="translate(260 270)"><rect x="-30" y="-40" width="60" height="40" fill="#2A2F6B"/><path d="M-36 -38L0 -66L36 -38Z" fill="#20255A"/><rect x="-8" y="-28" width="16" height="16" fill="#FFD58A"/></g>` },
  pista: { n: 'Pista|Pista', d: () => `<rect width="480" height="360" fill="#2E8BD9"/><rect x="20" y="20" width="440" height="320" rx="6" fill="#3B9BEA" stroke="#fff" stroke-width="5"/><path d="M240 20V340" stroke="#fff" stroke-width="5"/><circle cx="240" cy="180" r="50" fill="none" stroke="#fff" stroke-width="5"/><circle cx="240" cy="180" r="6" fill="#fff"/>
    <rect x="20" y="110" width="60" height="140" fill="none" stroke="#fff" stroke-width="5"/><rect x="400" y="110" width="60" height="140" fill="none" stroke="#fff" stroke-width="5"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect x="${i * 60}" y="0" width="30" height="360" fill="#fff" opacity=".04"/>`).join('')}` },
  estudi: { n: 'Estudi|Estudio', d: () => `<defs><radialGradient id="bgStu" cx=".5" cy=".4" r=".8"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E4E9FF"/></radialGradient></defs><rect width="480" height="360" fill="url(#bgStu)"/>
    ${[[60, 60, '#FFD9E6'], [420, 90, '#D9F5E6'], [380, 300, '#FFF1C2'], [90, 290, '#DDE7FF']].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="70" fill="${c}" opacity=".7"/>`).join('')}<path d="M0 290Q240 270 480 290" stroke="#C9D6FB" stroke-width="3" fill="none"/>` }
};
const STG_BGS = Object.keys(STG_BG);

/* ---------- Dibuix de l'escenari (navegador) ---------- */
STG_B.ifelse = ['ctl', 'e', 'Si {0}|Si {0}', ['b'], [null]];   // només a la paleta: crea un «si» amb «si no»
const STG_ICO = {
  ev: '<svg viewBox="0 0 24 24"><path d="M6 3v18" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M7 4h11l-2.5 4L18 12H7z" fill="currentColor"/></svg>',
  mov: '<svg viewBox="0 0 24 24"><path d="M12 2l3.5 4h-2.3v4.8H18V8.5l4 3.5-4 3.5v-2.3h-4.8V18h2.3L12 22l-3.5-4h2.3v-4.8H6v2.3L2 12l4-3.5v2.3h4.8V6H8.5z" fill="currentColor"/></svg>',
  look: '<svg viewBox="0 0 24 24"><path d="M12 2l2.2 6.3L21 9l-5.2 4.2L17.6 20 12 16.3 6.4 20l1.8-6.8L3 9l6.8-.7z" fill="currentColor"/></svg>',
  snd: '<svg viewBox="0 0 24 24"><path d="M9 3v12.3A3.5 3.5 0 1 0 11 18V8h8V3z" fill="currentColor"/></svg>',
  ctl: '<svg viewBox="0 0 24 24"><path d="M17 3l4 4-4 4V8H8a3 3 0 0 0-3 3v1H2v-1a6 6 0 0 1 6-6h9zM7 21l-4-4 4-4v3h9a3 3 0 0 0 3-3v-1h3v1a6 6 0 0 1-6 6H7z" fill="currentColor"/></svg>',
  sns: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg>',
  op: '<svg viewBox="0 0 24 24"><path d="M7 3v8M3 7h8M14 7h7M14 16l6 6M20 16l-6 6M3 18h8" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
  var: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M8 9l3 3-3 3M13 15h3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>',
  stop: '<svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="3" fill="currentColor"/></svg>',
  fs: '<svg viewBox="0 0 24 24"><path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  test: '<svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M7.5 15h9" stroke="currentColor" stroke-width="2.4"/></svg>',
  undo: '<svg viewBox="0 0 24 24"><path d="M9 5L4 10l5 5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 10h10a6 6 0 0 1 0 12h-3" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm8.4 5l1.6 1.2-2 3.4-1.9-.7a8 8 0 0 1-2 1.2L15.8 21h-3.6l-.4-2.1a8 8 0 0 1-2-1.2l-1.9.7-2-3.4 1.6-1.2a8 8 0 0 1 0-2.6L5.9 10l2-3.4 1.9.7a8 8 0 0 1 2-1.2L12.2 3h3.6l.4 2.1a8 8 0 0 1 2 1.2l1.9-.7 2 3.4-1.6 1.2a8 8 0 0 1 0 2.6z" fill="currentColor" transform="translate(-2 0)"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',
  ok: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  reset: '<svg viewBox="0 0 24 24"><path d="M12 5V2L7 6l5 4V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z" fill="currentColor"/></svg>'
};
const stgDom = typeof document !== 'undefined';
const stgEsc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const stgCosId = (ch, i) => `stgc-${ch}-${i}`;
// les definicions (degradats i vestits) viuen en un sol SVG amagat: tots els escenaris i miniatures hi apunten amb <use>
function stgNeed(ids) {
  if (!stgDom) return;
  let d = document.getElementById('stg-defs');
  if (!d) {
    document.body.insertAdjacentHTML('beforeend', `<svg id="stg-defs" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden"><defs>${STG_GR}
      <filter id="stgSh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="3" stdDeviation="2.4" flood-color="#14204A" flood-opacity=".3"/></filter></defs></svg>`);
    d = document.getElementById('stg-defs'); stgNeed.has = new Set();
  }
  const defs = d.querySelector('defs'); let h = '';
  for (const id of ids) { if (stgNeed.has.has(id) || !STG_CH[id]) continue; stgNeed.has.add(id); STG_CH[id].cos.forEach((c, i) => { h += `<g id="${stgCosId(id, i)}">${c.d()}</g>`; }); }
  if (h) defs.insertAdjacentHTML('beforeend', h);
}
const stgThumb = (ch, cos = 0, cls = '') => { stgNeed([ch]); return `<svg class="stg-th ${cls}" viewBox="-62 -62 124 124" aria-hidden="true"><use href="#${stgCosId(ch, cos)}"/></svg>`; };
const stgBgThumb = id => `<svg class="stg-bgth" viewBox="0 0 480 360" aria-hidden="true">${(STG_BG[id] || STG_BG.estudi).d()}</svg>`;
const stgName = s => s.label ? stgT(s.label) : s.name;
// dibuix estàtic d'un projecte (miniatures i escenes)
function stgStill(p, cls = '') {
  stgNeed(p.sprites.map(s => s.ch));
  return `<svg class="stg-still ${cls}" viewBox="0 0 480 360" aria-hidden="true">${(STG_BG[p.bg] || STG_BG.estudi).d()}<g filter="url(#stgSh)">${p.sprites.filter(s => s.show !== false).map(s => `<g transform="${stgXf({ x: s.x, y: s.y, dir: s.dir, size: s.size, rot: s.rot })}"><use href="#${stgCosId(s.ch, s.cos || 0)}"/></g>`).join('')}</g></svg>`;
}
const stgXf = s => { const k = (s.size || 100) / 100, rot = s.rot || 'lr', d = s.dir === undefined ? 90 : s.dir; return `translate(${(240 + s.x).toFixed(1)} ${(180 - s.y).toFixed(1)}) rotate(${rot === 'all' ? (d - 90).toFixed(1) : 0}) scale(${(rot === 'lr' && d < 0 ? -k : k).toFixed(3)} ${k.toFixed(3)})`; };

let STG_VID = 0;
function stgView(el, proj, o = {}) {
  const V = { el, proj, o, id: ++STG_VID, rt: null, run: false, els: new Map(), bub: new Map(), mon: '', bgCur: null, speed: 1, seen: {} };
  el.innerHTML = `<svg class="stg-svg" viewBox="0 0 480 360" role="img" aria-label="${stgL("L'escenari", 'El escenario')}"><defs class="stg-ldefs"></defs><g class="stg-bgl"></g><g class="stg-sl" filter="url(#stgSh)"></g><g class="stg-fx"></g><g class="stg-bl"></g><g class="stg-mon"></g></svg>`;
  V.svg = el.querySelector('svg'); V.bgl = V.svg.querySelector('.stg-bgl'); V.sl = V.svg.querySelector('.stg-sl'); V.fx = V.svg.querySelector('.stg-fx'); V.bl = V.svg.querySelector('.stg-bl'); V.ml = V.svg.querySelector('.stg-mon'); V.ld = V.svg.querySelector('.stg-ldefs');
  stgReset(V);
  return V;
}
function stgReset(V, seed) {
  stgHalt(V);
  stgNeed(V.proj.sprites.map(s => s.ch));
  V.rt = stgRT(V.proj, { seed, sound: stgSound });
  V.sl.innerHTML = ''; V.bl.innerHTML = ''; V.fx.innerHTML = ''; V.ld.innerHTML = ''; V.els.clear(); V.bub.clear(); V.mon = ''; V.seen = {}; V.order = '';
  stgPaint(V);
}
function stgPaint(V) {
  const rt = V.rt;
  if (V.bgCur !== rt.bg) { if (V.bgCur) { V.bgl.classList.remove('stg-bgin'); void V.bgl.getBoundingClientRect(); V.bgl.classList.add('stg-bgin'); } V.bgl.innerHTML = (STG_BG[rt.bg] || STG_BG.estudi).d(); V.bgCur = rt.bg; }
  const live = new Set(), sorted = rt.spr.slice().sort((a, b) => a.z - b.z);
  for (const s of sorted) {
    live.add(s.id);
    let e = V.els.get(s.id);
    if (!e) { e = document.createElementNS('http://www.w3.org/2000/svg', 'g'); e.innerHTML = `<use href="#${stgCosId(s.src.ch, s.cos)}"/>`; e._c = s.cos; e.setAttribute('data-n', s.name); V.els.set(s.id, e); V.sl.appendChild(e); if (s.clone) e.classList.add('stg-born'); }
    const xf = stgXf(s); if (e._x !== xf) { e.setAttribute('transform', xf); e._x = xf; }
    if (e._c !== s.cos) { e.firstChild.setAttribute('href', `#${stgCosId(s.src.ch, s.cos)}`); e._c = s.cos; }
    const vis = s.show ? '' : 'none'; if (e._v !== vis) { e.style.display = vis; e._v = vis; }
    const op = s.ghost ? String(1 - s.ghost / 100) : ''; if (e._o !== op) { e.style.opacity = op; e._o = op; }
    if (e._h !== s.col) {
      e._h = s.col; const fid = `stgf${V.id}-${s.id}`;
      let f = V.ld.querySelector('#' + fid);
      if (s.col) { if (!f) { V.ld.insertAdjacentHTML('beforeend', `<filter id="${fid}" color-interpolation-filters="sRGB"><feColorMatrix type="hueRotate" values="0"/></filter>`); f = V.ld.querySelector('#' + fid); } f.firstChild.setAttribute('values', (s.col * 1.8).toFixed(1)); e.setAttribute('filter', `url(#${fid})`); }
      else e.removeAttribute('filter');
    }
  }
  for (const [id, e] of V.els) if (!live.has(id)) { e.remove(); V.els.delete(id); }
  const ord = sorted.map(s => s.id).join(','); if (ord !== V.order) { for (const s of sorted) V.sl.appendChild(V.els.get(s.id)); V.order = ord; }
  stgBubbles(V, sorted); stgMonitors(V);
  // efectes: espurnes quan dos personatges es comencen a tocar
  for (const [p, n] of Object.entries(rt.log.touch)) if ((V.seen[p] || 0) < n) { V.seen[p] = n; const [a, b] = p.split('|'), A = rt.spr.find(s => s.name === a && s.show), B = rt.spr.find(s => s.name === b && s.show); if (A && B && V.run) stgBurst(V, (A.x + B.x) / 2, (A.y + B.y) / 2, 'star'); }
}
function stgBurst(V, x, y, kind = 'star') {
  if (typeof REDUCED !== 'undefined' && REDUCED) return;
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g'); g.setAttribute('transform', `translate(${240 + x} ${180 - y})`); g.setAttribute('class', 'stg-burst ' + kind);
  const n = kind === 'ring' ? 0 : 9;
  g.innerHTML = (kind === 'ring' ? '<circle r="16" class="stg-ring"/>' : '') + Array.from({ length: n }, (_, i) => { const a = i / n * Math.PI * 2, r = 34 + (i % 3) * 8;
    return `<g class="stg-p" style="--x:${(Math.cos(a) * r).toFixed(1)}px;--y:${(Math.sin(a) * r).toFixed(1)}px"><path d="${stgStarPath(6, 2.6)}" fill="${['#FFE16B', '#fff', '#FF8FB1', '#7DF3FF'][i % 4]}"/></g>`; }).join('');
  V.fx.appendChild(g); setTimeout(() => g.remove(), 900);
}
function stgWrap(t, n = 22) { const w = String(t).split(/\s+/), out = []; let cur = ''; for (const x of w) { if ((cur + ' ' + x).trim().length > n && cur) { out.push(cur); cur = x; } else cur = (cur + ' ' + x).trim(); } if (cur) out.push(cur); return out.slice(0, 6); }
function stgBubbles(V, sorted) {
  const live = new Set();
  for (const s of sorted) {
    if (!s.say || !s.show) continue;
    live.add(s.id);
    const B = stgBox(s);
    let b = V.bub.get(s.id);
    if (!b || b._id !== s.say.id) {
      if (b) b.remove();
      const lines = stgWrap(s.say.t), w = Math.max(44, Math.max(...lines.map(l => l.length)) * 7.6 + 24), h = lines.length * 17 + 16;
      b = document.createElementNS('http://www.w3.org/2000/svg', 'g'); b._id = s.say.id; b._w = w; b._h = h; b.setAttribute('class', 'stg-bub' + (s.say.think ? ' think' : ''));
      b.innerHTML = `<g class="stg-bubi">${s.say.think ? `<circle cx="10" cy="${h + 8}" r="5" class="bb"/><circle cx="2" cy="${h + 18}" r="3" class="bb"/>` : `<path d="M14 ${h - 2}L8 ${h + 12}L28 ${h - 2}Z" class="bb"/>`}<rect width="${w}" height="${h}" rx="${s.say.think ? h / 2.2 : 13}" class="bb"/>${s.say.think ? '' : `<path d="M15 ${h - 3}L10 ${h + 8}L26 ${h - 3}" fill="#fff"/>`}
        ${lines.map((l, i) => `<text x="${w / 2}" y="${24 + i * 17}" text-anchor="middle">${stgEsc(l)}</text>`).join('')}</g>`;
      V.bl.appendChild(b); V.bub.set(s.id, b);
    }
    const bx = Math.max(4, Math.min(476 - b._w, 240 + B.r - 14)), by = Math.max(4, Math.min(340 - b._h, 180 - B.t - b._h - 10));
    const xf = `translate(${bx.toFixed(1)} ${by.toFixed(1)})`; if (b._x !== xf) { b.setAttribute('transform', xf); b._x = xf; }
  }
  for (const [id, b] of V.bub) if (!live.has(id)) { b.remove(); V.bub.delete(id); }
}
function stgMonitors(V) {
  const rt = V.rt, vs = Object.keys(rt.vars).filter(n => rt.vshow[n]);
  const sig = vs.map(n => n + '=' + stgStr(rt.vars[n])).join(';'); if (sig === V.mon) return;
  const old = {}; V.mon.split(';').forEach(x => { const [a, b] = x.split('='); old[a] = b; }); V.mon = sig;
  V.ml.innerHTML = vs.map((n, i) => { const v = stgStr(rt.vars[n]), nw = n.length * 7.4 + 16, vw = Math.max(26, v.length * 8.4 + 14);
    return `<g transform="translate(8 ${8 + i * 30})" class="stg-mn${old[n] !== undefined && old[n] !== v ? ' bump' : ''}"><rect width="${nw + vw + 8}" height="26" rx="13" fill="#fff" fill-opacity=".94" stroke="#14204A" stroke-opacity=".14" stroke-width="2"/><text x="10" y="17.5" class="stg-mnn">${stgEsc(n)}</text><rect x="${nw}" y="3" width="${vw}" height="20" rx="10" fill="${STG_CAT.var.c}"/><text x="${nw + vw / 2}" y="17.5" text-anchor="middle" class="stg-mnv">${stgEsc(v)}</text></g>`; }).join('');
}
// bucle d'animació: 30 fotogrames per segon de temps del projecte (o més ràpid en les proves)
let STG_ACT = null;
function stgPlay(V, o = {}) {
  stgReset(V, o.seed);
  if (o.sim) V.rt.sim = o.sim.map(e => ({ ...e }));
  V.run = true; V.speed = o.speed || 1; V.po = o; STG_ACT = V;
  V.el.classList.add('on'); V.el.classList.remove('stg-flash'); void V.el.offsetWidth; V.el.classList.add('stg-flash');
  if (!o.noStart) stgStart(V.rt); stgPaint(V);
  let last = performance.now(), acc = 0;
  const tick = now => {
    if (!V.run) return;
    if (!document.body.contains(V.el)) { V.run = false; return; }
    acc += Math.min(.25, (now - last) / 1000) * V.speed; last = now;
    let n = 0;
    while (acc >= STG_DT && n < 6) { acc -= STG_DT; n++; stgStep(V.rt); o.onFrame && o.onFrame(V.rt); if (!V.run) return; if (V.rt.over || (o.dur && V.rt.t >= o.dur - 1e-9) || (o.untilIdle && !stgBusy(V.rt))) break; }
    stgPaint(V);
    if (V.rt.over || (o.dur && V.rt.t >= o.dur - 1e-9) || (o.untilIdle && !stgBusy(V.rt))) { V.run = false; V.el.classList.remove('on'); o.onEnd && o.onEnd(V.rt); return; }
    V.raf = requestAnimationFrame(tick);
  };
  V.raf = requestAnimationFrame(tick);
}
function stgHalt(V) { if (!V) return; V.run = false; cancelAnimationFrame(V.raf); V.el && V.el.classList.remove('on'); if (STG_ACT === V) STG_ACT = null; }
// coordenades de l'escenari a partir d'un punt de la pantalla
function stgPt(V, e) { const r = V.svg.getBoundingClientRect(); return { x: Math.round((e.clientX - r.left) / r.width * 480 - 240), y: Math.round(180 - (e.clientY - r.top) / r.height * 360) }; }

/* ---------- So: tot sintetitzat amb Web Audio (sense fitxers) ---------- */
let STG_AC = null;
function stgSound(kind, a, dur = .3) {
  if (!stgDom || (typeof P !== 'undefined' && P && P.sound === false)) return;
  try {
    const ctx = STG_AC = STG_AC || new (window.AudioContext || window.webkitAudioContext)(); if (ctx.state === 'suspended') ctx.resume();
    const t = ctx.currentTime, out = ctx.createGain(); out.gain.value = .22; out.connect(ctx.destination);
    const osc = (type, f, t0, t1, v = 1, f2) => { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.setValueAtTime(f, t0); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t1); g.gain.setValueAtTime(.0001, t0); g.gain.exponentialRampToValueAtTime(v, t0 + .012); g.gain.exponentialRampToValueAtTime(.0001, t1); o.connect(g).connect(out); o.start(t0); o.stop(t1 + .05); };
    const noise = (t0, t1, hp, v = 1) => { const n = ctx.sampleRate * (t1 - t0), b = ctx.createBuffer(1, n, ctx.sampleRate), d = b.getChannelData(0); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1; const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain(); s.buffer = b; f.type = 'highpass'; f.frequency.value = hp; g.gain.setValueAtTime(v, t0); g.gain.exponentialRampToValueAtTime(.0001, t1); s.connect(f).connect(g).connect(out); s.start(t0); };
    if (kind === 'note') { const f = STG_NOTE[a] || stgNum(a) || 523; const e = t + Math.max(.12, Math.min(2, dur)); osc('triangle', f, t, e, .9); osc('sine', f * 2, t, t + Math.min(.4, dur), .25); }
    else if (kind === 'drum') {
      if (a === 'bombo') osc('sine', 150, t, t + .35, 1, 40);
      else if (a === 'caixa') { noise(t, t + .2, 1200, .8); osc('triangle', 220, t, t + .12, .5, 120); }
      else if (a === 'plat') noise(t, t + .7, 5000, .5);
      else if (a === 'xarles') noise(t, t + .08, 7000, .6);
      else { noise(t, t + .05, 1500, .8); noise(t + .03, t + .1, 1500, .6); noise(t + .06, t + .2, 1500, .5); }
    } else {
      const S = { pop: () => osc('sine', 400, t, t + .12, .9, 900), boing: () => osc('triangle', 180, t, t + .45, .9, 520), moneda: () => { osc('square', 988, t, t + .08, .35); osc('square', 1319, t + .08, t + .35, .35); },
        laser: () => osc('sawtooth', 1400, t, t + .25, .35, 180), salt: () => osc('square', 300, t, t + .22, .3, 700), magia: () => [0, 1, 2, 3, 4].forEach(i => osc('sine', [784, 988, 1175, 1568, 1976][i], t + i * .06, t + i * .06 + .3, .5)),
        victoria: () => [523, 659, 784, 1047].forEach((f, i) => osc('triangle', f, t + i * .11, t + i * .11 + (i === 3 ? .5 : .16), .7)), ohno: () => { osc('triangle', 392, t, t + .2, .7); osc('triangle', 330, t + .2, t + .5, .7, 260); },
        bombolla: () => osc('sine', 300, t, t + .15, .8, 1200) };
      (S[a] || S.pop)();
    }
  } catch (e) { }
}

/* ---------- Editor de blocs per tocs (sense arrossegar): paleta per famílies, programes per personatge ---------- */
let STG_E = null, STG_PV = null;
const STG_KS = Object.keys(STG_B);
const stgCan = (E, k) => E.pal.includes(k);
function stgEditor(root, o = {}) {
  const E = STG_E = { root, o, proj: o.proj, si: 0, cur: null, sel: null, move: null, arm: null, ids: {}, lists: [], mode: o.mode || 'edit', hist: [], gst: [], tries: 0, won: false, now: new Set() };
  E.goals = o.goals || []; E.bonus = o.bonus || []; E.bst = E.bonus.map(() => false);
  E.pal = (o.pal || STG_KS).filter(k => STG_B[k]);
  E.cats = Object.keys(STG_CAT).filter(c => E.pal.some(k => stgCatOf(k) === c) || (c === 'var' && (o.vars || (E.proj.vars.length && E.pal.includes('var')))));
  E.cat = o.cat && E.cats.includes(o.cat) ? o.cat : E.cats[0];
  if (o.sel) { const i = E.proj.sprites.findIndex(s => s.name === o.sel); if (i >= 0) E.si = i; }
  else { const i = E.proj.sprites.findIndex(s => s.scripts.length); if (i >= 0) E.si = i; }
  root.innerHTML = stgLayout(E);
  E.V = stgView(root.querySelector('.stg-box'), E.proj);
  stgBindStage(E);
  stgDrawAll(E);
  return E;
}
const stgUsesKeys = p => p.sprites.some(s => s.scripts.some(sc => sc.h.k === 'key' || JSON.stringify(sc.b).includes('"keyp"')));
const stgPad = cls => `<div class="stg-pad ${cls}" aria-label="${stgL('Tecles', 'Teclas')}"><button data-k="left" aria-label="←">◀</button><div class="stg-pud"><button data-k="up" aria-label="↑">▲</button><button data-k="down" aria-label="↓">▼</button></div><button data-k="right" aria-label="→">▶</button><button data-k="space" class="sp">${stgL('espai', 'espacio')}</button></div>`;
function stgLayout(E) {
  const ed = E.mode === 'edit', code = E.o.code !== false;
  return `<div class="stg m-${E.mode}${code ? '' : ' nocode'}">
    <section class="stg-left">
      <div class="stg-frame"><div class="stg-box"></div><div class="stg-hud" id="stgHud"></div><div class="stg-xy" id="stgXY"></div>
        <button class="stg-fsb" onclick="STGU.fs()" aria-label="${stgL('Pantalla completa', 'Pantalla completa')}" title="${stgL('Pantalla completa', 'Pantalla completa')}">${STG_ICO.fs}</button>${stgPad('inf')}</div>
      <div class="stg-ctl"><button class="stg-go" id="stgGo" onclick="STGU.go()">${STG_ICO.play}<span>${stgL('Comença', 'Empieza')}</span></button>
        ${E.goals.length && ed ? `<button class="stg-test" id="stgTest" onclick="STGU.test()">${STG_ICO.test}<span>${stgL('Comprova', 'Comprueba')}</span></button>` : ''}
        <button class="stg-rst" onclick="STGU.stop(1)" aria-label="${stgL("Torna a l'inici", 'Vuelve al inicio')}" title="${stgL("Torna a l'inici", 'Vuelve al inicio')}">${STG_ICO.reset}</button></div>
      ${stgPad('out' + (stgUsesKeys(E.proj) ? ' need' : ''))}
      ${E.goals.length ? `<div class="stg-goals" id="stgGoals"></div>` : ''}
      <div class="stg-sprs" id="stgSprs"></div>
    </section>
    ${code ? `<section class="stg-right">${ed ? `<div class="stg-cats" id="stgCats"></div><div class="stg-pal" id="stgPal"></div>` : ''}<div class="stg-code" id="stgCode"></div></section>` : ''}
    <div class="stg-sheet" id="stgSheet" hidden></div></div>`;
}
function stgDrawAll(E) { stgDrawSprites(E); stgDrawCats(E); stgDrawPal(E); stgDrawCode(E); stgDrawGoals(E); }
const $s = (E, q) => E.root.querySelector(q);

/* ids per a cada bloc i cada llista (es refan a cada dibuix) */
let STG_NID = 0;
function stgIndex(E) {
  E.ids = {}; E.lists = [];
  const args = (n, si) => { for (const a of n.a || []) if (a && typeof a === 'object') { if (!a._id) a._id = ++STG_NID; E.ids[a._id] = { n: a, rep: true, s: si }; args(a, si); } };
  const walk = (list, par, si, sc) => { E.lists.push(list); for (const b of list) { if (!b._id) b._id = ++STG_NID; E.ids[b._id] = { n: b, l: list, par, s: si, sc }; args(b, si); if (b.b) walk(b.b, b, si, sc); if (b.e) walk(b.e, b, si, sc); } };
  E.proj.sprites.forEach((s, si) => s.scripts.forEach(sc => { if (!sc.h._id) sc.h._id = ++STG_NID; E.ids[sc.h._id] = { n: sc.h, hat: true, s: si, sc }; args(sc.h, si); walk(sc.b, null, si, sc); }));
}
const stgLid = (E, l) => E.lists.indexOf(l);

/* ---------- Text dels blocs amb els forats ---------- */
function stgOptLabel(E, type, v, si) {
  const p = E ? E.proj : null, sp = p && p.sprites[si];
  const nm = n => { const s = p && p.sprites.find(x => x.name === n); return s ? stgName(s) : String(n); };
  switch (type) {
    case 'key': return STG_KEYS[v] ? stgL(...STG_KEYS[v]) : String(v);
    case 'touch': case 'tow': case 'go': return v === '_edge' ? stgL('la vora', 'el borde') : v === '_mouse' ? stgL('el ratolí', 'el ratón') : v === '_random' ? stgL('un lloc a l’atzar', 'un lugar al azar') : nm(v);
    case 'clone': return v === '_me' ? stgL('mi mateix', 'mí mismo') : nm(v);
    case 'col': return STG_COL[v] ? `<i class="stg-sw" style="background:${STG_COL[v][0]}"></i>${stgL(STG_COL[v][1], STG_COL[v][2])}` : String(v);
    case 'note': return String(v).replace('+', '′');
    case 'drum': return STG_DRUM[v] ? stgL(...STG_DRUM[v]) : String(v);
    case 'sfx': return STG_SFX[v] ? stgL(...STG_SFX[v]) : String(v);
    case 'stop': return STG_STOP[v] ? stgL(...STG_STOP[v]) : String(v);
    case 'rot': return STG_ROT[v] ? stgL(...STG_ROT[v]) : String(v);
    case 'bg': return v && STG_BG[v] ? stgT(STG_BG[v].n) : stgL('?', '?');
    case 'cos': { const ch = sp && STG_CH[sp.ch], c = ch && ch.cos[Math.round(stgNum(v)) - 1]; return c ? stgT(c.n) : String(v); }
    case 'var': return v == null ? '?' : String(v);
    case 'msg': return v == null ? '?' : stgStr(v);
    case 'dir': return String(v);
  }
  return stgStr(v);
}
const STG_DD = new Set(['key', 'touch', 'tow', 'go', 'clone', 'col', 'note', 'drum', 'sfx', 'stop', 'rot', 'bg', 'cos', 'var', 'msg']);
// el text d'un bloc amb els seus forats; act: es pot tocar (editor)
function stgLabel(E, node, act, si) {
  const d = STG_B[node.k], tpl = stgT(d[2]).replace('▶', `<span class="stg-pl">${STG_ICO.play}</span>`), types = d[3] || [];
  return tpl.split(/(\{\d\})/).map(part => { const m = /^\{(\d)\}$/.exec(part); return m ? stgArg(E, node, +m[1], types[+m[1]], act, si) : part; }).join('');
}
function stgArg(E, node, i, type, act, si) {
  const v = node.a ? node.a[i] : null, on = act && node._id ? ` onclick="event.stopPropagation();STGU.slot(${node._id},${i})"` : '';
  if (v && typeof v === 'object') { const sh = stgShape(v.k); return `<span class="srep c-${stgCatOf(v.k)}${sh === 'b' ? ' bool' : ''}${v.k === 'var' ? ' var' : ''}"${on} ${act ? 'role="button"' : ''}>${v.k === 'var' ? stgEsc(v.a[0]) : stgLabel(E, v, act, si)}</span>`; }
  const tag = act ? 'button' : 'span';
  if (type === 'b') return `<${tag} class="sarg sbool"${on}></${tag}>`;
  if (STG_DD.has(type)) return `<${tag} class="sarg dd t-${type}"${on}>${stgOptLabel(E, type, v, si)}<i>▾</i></${tag}>`;
  return `<${tag} class="sarg ${type === 't' ? 'txt' : 'num'}"${on}>${stgEsc(stgStr(v))}</${tag}>`;
}
// un bloc (i el que té a dins)
function stgBlock(E, b, ro, si, dead) {
  const d = STG_B[b.k], sh = d[1], cat = d[0], cont = sh === 'l' || sh === 'e' || sh === 'f';
  const act = !ro && E.mode === 'edit';
  const click = E.mode === 'spot' ? `STGU.spot(${b._id})` : act ? `STGU.selB(${b._id})` : '';
  let h = `<div class="sb c-${cat}${cont ? ' cont' : ''}${sh === 'f' ? ' fev' : ''}${E.sel === b ? ' sel' : ''}${dead ? ' dead' : ''}${E.move === b ? ' moving' : ''}${E.now.has(b._id) ? ' now' : ''}" id="sb${b._id}">
    <div class="sbh"${click ? ` role="button" tabindex="0" onclick="${click}"` : ''}><span class="sbi">${STG_ICO[cat]}</span><span class="sbl">${stgLabel(E, b, act, si)}</span>${dead ? `<em class="sbdead">${stgL('no arriba mai', 'nunca llega')}</em>` : ''}</div>`;
  if (cont) h += `<div class="sbin">${stgList(E, b.b, ro, si)}</div>${b.e ? `<div class="sbelse">${stgL('si no', 'si no')}</div><div class="sbin">${stgList(E, b.e, ro, si)}</div>` : ''}<div class="sbend">${sh === 'f' ? '<span>↻</span>' : ''}</div>`;
  h += '</div>';
  if (E.sel === b && act) h += stgTools(E, b);
  return h;
}
function stgList(E, list, ro, si) {
  let dead = false, h = '';
  const ed = !ro && E.mode === 'edit';
  list.forEach((b, i) => { if (ed) h += stgSlot(E, list, i); h += stgBlock(E, b, ro, si, dead); if (STG_CAP.has(b.k)) dead = true; });
  if (ed) h += stgSlot(E, list, list.length);
  return h || (ro ? '' : '');
}
function stgSlot(E, l, i) {
  const on = E.cur && E.cur.l === l && E.cur.i === i;
  return `<button class="sslot${on ? ' on' : ''}${E.move ? ' tgt' : ''}" onclick="STGU.cur(${stgLid(E, l)},${i})" aria-label="${stgL('Posa els blocs aquí', 'Pon los bloques aquí')}">${on ? `<span>${E.move ? stgL('el bloc anirà aquí', 'el bloque irá aquí') : stgL('els blocs nous van aquí', 'los bloques nuevos van aquí')}</span>` : E.move ? `<span>${stgL('deixa’l aquí', 'déjalo aquí')}</span>` : ''}</button>`;
}
function stgTools(E, b) {
  const ix = E.ids[b._id];
  if (ix.hat) return `<div class="stools"><button class="del wide" onclick="STGU.delScript()">${stgL('Esborra tot aquest programa', 'Borra todo este programa')}</button></div>`;
  return `<div class="stools"><button onclick="STGU.mv(-1)" aria-label="${stgL('Puja', 'Sube')}">↑</button><button onclick="STGU.mv(1)" aria-label="${stgL('Baixa', 'Baja')}">↓</button>
    <button class="wide" onclick="STGU.moveMode()">${stgL('Mou-lo a…', 'Muévelo a…')}</button><button onclick="STGU.dup()">${stgL('Duplica', 'Duplica')}</button><button class="del" onclick="STGU.del()">${stgL('Esborra', 'Borra')}</button></div>`;
}
function stgScript(E, sc, si, ro) {
  const h = sc.h, sel = E.sel === h && !ro && E.mode === 'edit', d = STG_B[h.k];
  return `<div class="ss"><div class="sb hat c-${d[0]}${sel ? ' sel' : ''}${E.now.has(h._id) ? ' now' : ''}" id="sb${h._id}"><div class="sbh"${!ro && E.mode === 'edit' ? ` role="button" tabindex="0" onclick="STGU.selB(${h._id})"` : ''}><span class="sbi">${STG_ICO[d[0]]}</span><span class="sbl">${stgLabel(E, h, !ro && E.mode === 'edit', si)}</span></div></div>
    ${sel ? stgTools(E, h) : ''}<div class="ssb">${stgList(E, sc.b, ro, si)}</div></div>`;
}

/* ---------- Parts de la pantalla ---------- */
function stgDrawCode(E) {
  const c = $s(E, '#stgCode'); if (!c) return;
  stgIndex(E);
  const sc0 = c.scrollTop;
  if (E.mode === 'edit') {
    const s = E.proj.sprites[E.si], n = stgCount(E.proj), max = E.o.max;
    c.innerHTML = `<div class="stg-ch"><span class="stg-chn">${stgThumb(s.ch, s.cos)}<b>${stgEsc(stgName(s))}</b></span><span class="stg-chr"><span class="stg-cnt${max && n >= max ? ' full' : ''}">${max ? `${n}/${max}` : n} ${stgL('blocs', 'bloques')}</span>
      <button class="stg-ib" onclick="STGU.undo()" ${E.hist.length ? '' : 'disabled'} aria-label="${stgL('Desfés', 'Deshacer')}" title="${stgL('Desfés', 'Deshacer')}">${STG_ICO.undo}</button></span></div>
      ${E.move ? `<div class="stg-movebar">${stgL('Toca la ratlla on vols posar el bloc', 'Toca la raya donde quieres poner el bloque')}<button onclick="STGU.moveMode(1)">${stgL('Cancel·la', 'Cancela')}</button></div>` : ''}
      <div class="stg-scripts">${s.scripts.length ? s.scripts.map(sc => stgScript(E, sc, E.si)).join('') : `<div class="stg-empty">${stgThumb(s.ch, s.cos)}<p>${stgL(`<b>${stgEsc(stgName(s))}</b> encara no té cap programa. Tria un bloc de la paleta i toca'l: començarà amb «Quan es prem ▶».`, `<b>${stgEsc(stgName(s))}</b> aún no tiene ningún programa. Elige un bloque de la paleta y tócalo: empezará con «Al pulsar ▶».`)}</p></div>`}</div>`;
  } else {
    const list = E.proj.sprites.map((s, si) => [s, si]).filter(([s]) => s.scripts.length && (!E.o.who || s.name === E.o.who));
    c.innerHTML = `<div class="stg-ch"><span class="stg-chn"><b>${E.mode === 'spot' ? stgL('Toca el bloc', 'Toca el bloque') : stgL('El programa', 'El programa')}</b></span></div>
      <div class="stg-scripts">${list.map(([s, si]) => `${list.length > 1 || E.o.whoHead ? `<div class="stg-sph">${stgThumb(s.ch, s.cos)}<b>${stgEsc(stgName(s))}</b></div>` : ''}${s.scripts.map(sc => stgScript(E, sc, si, E.mode !== 'spot')).join('')}`).join('')}</div>`;
  }
  c.scrollTop = sc0;
}
function stgDrawCats(E) {
  const c = $s(E, '#stgCats'); if (!c) return;
  c.innerHTML = E.cats.map(k => `<button class="stg-cat c-${k}${k === E.cat ? ' on' : ''}" onclick="STGU.cat('${k}')"><span class="ci">${STG_ICO[k]}</span><span>${stgT(STG_CAT[k].n)}</span></button>`).join('');
}
function stgPalLabel(E, k) { const n = stgFill({ k, a: [] }); if (k === 'var') return 'var'; return stgLabel(E, n, false, E.si); }
function stgDrawPal(E) {
  const c = $s(E, '#stgPal'); if (!c) return;
  const ks = E.pal.filter(k => stgCatOf(k) === E.cat && k !== 'var'), full = E.o.max && stgCount(E.proj) >= E.o.max;
  const cmds = ks.filter(k => !'rb'.includes(stgShape(k))), reps = ks.filter(k => 'rb'.includes(stgShape(k)));
  let h = cmds.map(k => { const sh = stgShape(k); return `<button class="pb c-${stgCatOf(k)}${sh === 'h' ? ' hat' : ''}${'lef'.includes(sh) ? ' cblk' : ''}" onclick="STGU.ins('${k}')" ${full ? 'disabled' : ''}><span class="sbi">${STG_ICO[stgCatOf(k)]}</span><span class="sbl">${k === 'ifelse' ? stgPalLabel(E, 'if') + ` <small>· ${stgL('si no', 'si no')}</small>` : stgPalLabel(E, k)}</span></button>`; }).join('');
  if (E.cat === 'var') {
    h += (E.proj.vars || []).map(v => `<button class="pr c-var var${E.arm && E.arm.k === 'var' && E.arm.n === v.n ? ' armed' : ''}" onclick="STGU.arm('var','${stgEsc(v.n)}')">${stgEsc(v.n)}</button>`).join('');
    if (E.o.vars) h += `<button class="pnew" onclick="STGU.newVar()">${STG_ICO.plus}${stgL('Nova variable', 'Nueva variable')}</button>`;
  }
  if (reps.length) h += `<p class="pl-h">${stgL('Per posar dins dels forats', 'Para poner dentro de los huecos')}</p>` + reps.map(k => `<button class="pr c-${stgCatOf(k)}${stgShape(k) === 'b' ? ' bool' : ''}${E.arm && E.arm.k === k ? ' armed' : ''}" onclick="STGU.arm('${k}')">${stgPalLabel(E, k)}</button>`).join('');
  c.innerHTML = h;
  c.classList.toggle('arming', !!E.arm);
}
function stgDrawSprites(E) {
  const c = $s(E, '#stgSprs'); if (!c) return;
  const ed = E.mode === 'edit';
  c.innerHTML = `<div class="stg-sl">${E.proj.sprites.map((s, i) => `<button class="spc${i === E.si && ed ? ' on' : ''}${s.scripts.length ? ' hasc' : ''}" onclick="STGU.spr(${i})">${stgThumb(s.ch, s.cos)}<b>${stgEsc(stgName(s))}</b></button>`).join('')}
    ${ed && E.o.add ? `<button class="spc add" onclick="STGU.lib()">${STG_ICO.plus}<b>${stgL('Afegeix', 'Añade')}</b></button>` : ''}</div>
    ${ed ? `<div class="stg-sr"><button class="stg-bgc" onclick="STGU.bgs()">${stgBgThumb(E.proj.bg)}<span><small>${stgL('Fons', 'Fondo')}</small><b>${stgT((STG_BG[E.proj.bg] || STG_BG.estudi).n)}</b></span></button>
      <button class="stg-props" onclick="STGU.props()">${STG_ICO.gear}<span>${stgL('Personatge', 'Personaje')}</span></button></div>` : ''}`;
}
function stgDrawGoals(E) {
  const c = $s(E, '#stgGoals'); if (!c) return;
  c.innerHTML = `<b class="stg-gh">${stgL('El repte està superat quan…', 'El reto está superado cuando…')}</b><ul>${E.goals.map((g, i) => `<li class="${E.gst[i] ? 'ok' : ''}"><span class="gi">${STG_ICO.ok}</span><span>${stgT(g.t)}</span></li>`).join('')}</ul>
    ${E.bonus.length ? `<b class="stg-gh x">${stgL('Reptes extra (si en vols més)', 'Retos extra (si quieres más)')}</b><ul class="xb">${E.bonus.map((g, i) => `<li class="${E.bst[i] ? 'ok' : ''}"><span class="gi">★</span><span>${stgT(g.t)}</span></li>`).join('')}</ul>` : ''}`;
}
function stgHud(E, html, cls = '', ms) {
  const h = $s(E, '#stgHud'); if (!h) return;
  clearTimeout(E.hudT);
  h.className = 'stg-hud ' + cls; h.innerHTML = html;
  if (ms) E.hudT = setTimeout(() => { h.className = 'stg-hud'; h.innerHTML = ''; }, ms);
}

/* ---------- Canvis al projecte ---------- */
function stgSnap(E) { E.hist.push(JSON.stringify(E.proj, (k, v) => k === '_id' ? undefined : v)); if (E.hist.length > 40) E.hist.shift(); }
function stgChanged(E, soft) {
  if (E.V.run) STGU.stop();
  stgReset(E.V);
  if (!soft) { stgDrawCode(E); stgDrawPal(E); }
  stgDrawSprites(E);
  E.o.onChange && E.o.onChange(E.proj);
}
function stgCurValid(E) {
  const s = E.proj.sprites[E.si];
  const inSpr = l => { let ok = false; s.scripts.forEach(sc => { if (sc.b === l) ok = true; stgWalk(sc.b, b => { if (b.b === l || b.e === l) ok = true; }); }); return ok; };
  if (E.cur && inSpr(E.cur.l)) { E.cur.i = Math.min(E.cur.i, E.cur.l.length); return true; }
  return false;
}
function stgContains(b, l) { let f = false; stgWalk([b], x => { if (x.b === l || x.e === l) f = true; }); return f; }
const STGU = {
  go() {
    const E = STG_E; if (!E) return;
    if (E.V.run) return STGU.stop();
    E.gst = E.goals.map(() => false); E.bst = E.bonus.map(() => false); E.testing = false; stgDrawGoals(E); stgHud(E, '');
    stgPlay(E.V, { onFrame: rt => stgEdFrame(E, rt), onEnd: () => stgEdEnd(E) });
    stgRunBtn(E, true);
  },
  stop(reset) {
    const E = STG_E; if (!E) return;
    stgHalt(E.V); E.testing = false; stgRunBtn(E, false); stgNowMark(E, new Set());
    E.root.querySelectorAll('.stg-pad button.on').forEach(b => b.classList.remove('on'));
    if (reset) { stgReset(E.V); stgHud(E, ''); }
  },
  test() {
    const E = STG_E; if (!E || !E.goals.length) return;
    if (E.V.run) STGU.stop();
    E.gst = E.goals.map(() => false); E.testing = true; stgDrawGoals(E);
    stgHud(E, `<span class="stg-tb">${STG_ICO.test} ${stgL('En Bit prova el teu projecte…', 'Bit prueba tu proyecto…')}</span>`, 'test');
    const sim = E.o.sim || [], auto = sim.some(e => e.auto);
    stgPlay(E.V, { sim, seed: 7, dur: E.o.dur || 6, speed: 1.5, untilIdle: !auto, onFrame: rt => stgEdFrame(E, rt), onEnd: () => stgEdEnd(E) });
    stgRunBtn(E, true);
  },
  cat(k) { const E = STG_E; E.cat = k; E.arm = null; stgDrawCats(E); stgDrawPal(E); },
  ins(k) {
    const E = STG_E; if (E.V.run) STGU.stop();
    if (E.o.max && stgCount(E.proj) >= E.o.max) return toast(stgL(`Només pots fer servir ${E.o.max} blocs.`, `Solo puedes usar ${E.o.max} bloques.`));
    stgSnap(E);
    const s = E.proj.sprites[E.si], sh = stgShape(k);
    if (sh === 'h') { const sc = { h: stgFill({ k, a: [] }), b: [] }; s.scripts.push(sc); E.cur = { l: sc.b, i: 0 }; E.sel = null; typeof SFX !== 'undefined' && SFX.tap && SFX.tap(); return stgChanged(E); }
    if (!stgCurValid(E)) {
      if (!s.scripts.length) s.scripts.push({ h: stgFill({ k: 'start', a: [] }), b: [] });
      const l = s.scripts[s.scripts.length - 1].b; E.cur = { l, i: l.length };
    }
    const b = k === 'ifelse' ? { k: 'if', a: [null], b: [], e: [] } : stgFill({ k, a: [] });
    if (['l', 'e', 'f'].includes(sh) && !b.b) b.b = [];
    b.a = b.a.map((v, i) => (STG_B[k][3] || [])[i] === 't' && typeof v === 'string' ? stgT(v) : v);
    if ((STG_B[k][3] || []).includes('var') && b.a[0] == null) b.a[0] = (E.proj.vars[0] || {}).n || null;
    if ((STG_B[k][3] || [])[0] === 'bg' && b.a[0] == null) b.a[0] = E.proj.bgs[1] || E.proj.bgs[0];
    if ((STG_B[k][3] || [])[0] === 'msg') b.a[0] = stgMsgs(E)[0] || b.a[0];
    E.cur.l.splice(E.cur.i, 0, b);
    E.cur = b.b ? { l: b.b, i: 0 } : { l: E.cur.l, i: E.cur.i + 1 };
    E.sel = null; typeof SFX !== 'undefined' && SFX.tap && SFX.tap();
    stgChanged(E);
    setTimeout(() => { const el = document.getElementById('sb' + b._id); if (el) { el.classList.add('pop'); el.scrollIntoView && el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } }, 0);
  },
  arm(k, n) {
    const E = STG_E;
    E.arm = E.arm && E.arm.k === k && E.arm.n === n ? null : { k, n };
    stgDrawPal(E); E.root.classList.toggle('stg-arming', !!E.arm);
    if (E.arm) toast(stgL('Ara toca un forat blanc d’un bloc per posar-l’hi.', 'Ahora toca un hueco blanco de un bloque para ponerlo.'));
  },
  selB(id) {
    const E = STG_E; if (E.V.run) STGU.stop();
    const ix = E.ids[id]; if (!ix) return;
    if (E.move) return;
    E.sel = E.sel === ix.n ? null : ix.n;
    E.cur = ix.hat ? { l: ix.sc.b, i: ix.sc.b.length } : { l: ix.l, i: ix.l.indexOf(ix.n) + 1 };
    stgDrawCode(E);
  },
  cur(li, i) {
    const E = STG_E, l = E.lists[li]; if (!l) return;
    if (E.move) {
      const b = E.move, ix = E.ids[b._id]; if (stgContains(b, l)) return toast(stgL('Un bloc no pot anar dins de si mateix.', 'Un bloque no puede ir dentro de sí mismo.'));
      stgSnap(E); const from = ix.l, k = from.indexOf(b); from.splice(k, 1); if (from === l && k < i) i--; l.splice(i, 0, b);
      E.move = null; E.sel = null; E.cur = { l, i: i + 1 }; return stgChanged(E);
    }
    E.cur = { l, i }; E.sel = null; stgDrawCode(E);
  },
  mv(d) {
    const E = STG_E, b = E.sel, ix = E.ids[b._id], l = ix.l, i = l.indexOf(b), j = i + d;
    stgSnap(E);
    if (j >= 0 && j < l.length) { l.splice(i, 1); l.splice(j, 0, b); }
    else if (ix.par) { const pix = E.ids[ix.par._id]; l.splice(i, 1); const pl = pix.l, pi = pl.indexOf(ix.par); pl.splice(d < 0 ? pi : pi + 1, 0, b); }
    else return;
    stgChanged(E);
  },
  moveMode(cancel) { const E = STG_E; E.move = cancel ? null : E.sel; if (!cancel) E.sel = E.move; stgDrawCode(E); },
  dup() { const E = STG_E, b = E.sel, ix = E.ids[b._id]; stgSnap(E); const c = stgClone(b); ix.l.splice(ix.l.indexOf(b) + 1, 0, c); E.sel = null; stgChanged(E); },
  del() { const E = STG_E, b = E.sel, ix = E.ids[b._id]; stgSnap(E); const i = ix.l.indexOf(b); ix.l.splice(i, 1); E.sel = null; E.cur = { l: ix.l, i }; stgChanged(E); },
  delScript() { const E = STG_E, ix = E.ids[E.sel._id]; stgSnap(E); const sp = E.proj.sprites[ix.s]; sp.scripts.splice(sp.scripts.indexOf(ix.sc), 1); E.sel = null; E.cur = null; stgChanged(E); },
  undo() { const E = STG_E; if (!E.hist.length) return; const p = JSON.parse(E.hist.pop()); Object.keys(E.proj).forEach(k => delete E.proj[k]); Object.assign(E.proj, p); E.sel = null; E.cur = null; E.move = null; stgChanged(E); },
  spr(i) { const E = STG_E; if (E.mode !== 'edit') return; E.si = i; E.sel = null; E.cur = null; E.move = null; stgDrawSprites(E); stgDrawCode(E); stgDrawPal(E); },
  fs() {
    const E = STG_E || STG_PV; const f = (E && E.root.querySelector('.stg-frame')); if (!f) return;
    const doc = document;
    if (doc.fullscreenElement || f.classList.contains('stg-max')) { if (doc.fullscreenElement) doc.exitFullscreen(); f.classList.remove('stg-max'); return; }
    if (f.requestFullscreen && !/iPhone|iPad/.test(navigator.userAgent)) f.requestFullscreen().catch(() => f.classList.add('stg-max')); else f.classList.add('stg-max');
  },
  slot(id, i) {
    const E = STG_E, ix = E.ids[id]; if (!ix) return;
    const node = ix.n, type = (STG_B[node.k][3] || [])[i];
    if (E.arm) {
      const sh = E.arm.k === 'var' ? 'r' : stgShape(E.arm.k);
      if ((type === 'b') !== (sh === 'b') || STG_DD.has(type)) return toast(type === 'b' ? stgL('Aquest forat és punxegut: hi va una condició.', 'Este hueco es puntiagudo: va una condición.') : stgL('Aquest bloc no hi encaixa: busca un forat rodó.', 'Este bloque no encaja: busca un hueco redondo.'));
      stgSnap(E); node.a[i] = E.arm.k === 'var' ? { k: 'var', a: [E.arm.n] } : stgFill({ k: E.arm.k, a: [] }); E.arm = null; E.root.classList.remove('stg-arming'); return stgChanged(E);
    }
    stgSlotSheet(E, id, i);
  },
  set(id, i, v, keep) {
    const E = STG_E, ix = E.ids[id]; if (!ix) return; stgSnap(E);
    const type = (STG_B[ix.n.k][3] || [])[i];
    if (type === 'n' || type === 'dir') v = stgNum(v);
    ix.n.a[i] = v; if (!keep) STGU.close(); stgChanged(E);
    if (type === 'sfx') stgSound('sfx', v); if (type === 'note') stgSound('note', v, .4); if (type === 'drum') stgSound('drum', v);
  },
  setInput(id, i) { const inp = document.getElementById('stgIn'); if (!inp) return; const ix = STG_E.ids[id], type = (STG_B[ix.n.k][3] || [])[i]; let v = inp.value; if (type !== 't') { v = v.replace(',', '.'); if (v.trim() === '' || isNaN(+v)) return toast(stgL('Escriu un nombre.', 'Escribe un número.')); } STGU.set(id, i, type === 't' ? v : +v); },
  rep(id, i, k, n) { const E = STG_E, ix = E.ids[id]; stgSnap(E); ix.n.a[i] = k === 'var' ? { k: 'var', a: [n] } : stgFill({ k, a: [] }); STGU.close(); stgChanged(E); },
  clr(id, i) { const E = STG_E, ix = E.ids[id]; stgSnap(E); const t = (STG_B[ix.n.k][3] || [])[i], d = (STG_B[ix.n.k][4] || [])[i]; ix.n.a[i] = t === 'b' ? null : (t === 't' && typeof d === 'string' ? stgT(d) : d === undefined ? 0 : d); STGU.close(); stgChanged(E); },
  close() { const E = STG_E || STG_PV; const s = E && E.root.querySelector('#stgSheet'); if (s) { s.hidden = true; s.innerHTML = ''; } },
  newVar() {
    stgSheet(STG_E, `<h3>${stgL('Nova variable', 'Nueva variable')}</h3><p class="mut">${stgL('Una variable és una capsa amb un nom on el projecte guarda un número (els punts, les vides…).', 'Una variable es una caja con un nombre donde el proyecto guarda un número (los puntos, las vidas…).')}</p>
      <input id="stgIn" class="stg-in" maxlength="14" placeholder="${stgL('p. ex. punts', 'p. ej. puntos')}" autocomplete="off"><button class="btn big" onclick="STGU.addVar()">${stgL('Crea-la', 'Créala')}</button>`);
    setTimeout(() => { const i = document.getElementById('stgIn'); i && i.focus(); }, 50);
  },
  addVar() { const E = STG_E, v = (document.getElementById('stgIn').value || '').trim().toLowerCase(); if (!v) return; if (E.proj.vars.some(x => x.n === v)) return toast(stgL('Ja tens una variable amb aquest nom.', 'Ya tienes una variable con este nombre.')); stgSnap(E); E.proj.vars.push({ n: v, v: 0, show: true }); STGU.close(); E.cat = 'var'; stgDrawCats(E); stgChanged(E); },
  newMsg(id, i) { const v = (document.getElementById('stgIn').value || '').trim().toLowerCase(); if (!v) return; const E = STG_E; if (!E.proj.msgs.includes(v)) E.proj.msgs.push(v); STGU.set(id, i, v); },
  lib() {
    stgSheet(STG_E, `<h3>${stgL('Tria un personatge', 'Elige un personaje')}</h3>${STG_LIB.map(g => `<div class="stg-lib">${g.map(ch => `<button onclick="STGU.addSpr('${ch}')">${stgThumb(ch, 0)}<b>${stgEsc(stgT(STG_CH[ch].l || STG_CH[ch].n))}</b></button>`).join('')}</div>`).join('')}`, 'wide');
  },
  addSpr(ch) {
    const E = STG_E; if (E.proj.sprites.length >= 12) return toast(stgL('Ja hi ha prou personatges!', '¡Ya hay suficientes personajes!'));
    stgSnap(E); const base = STG_CH[ch].n; let n = base, k = 2; while (E.proj.sprites.some(s => s.name === n)) n = base + k++;
    E.proj.sprites.push({ ch, name: n, label: n === base ? (STG_CH[ch].l || null) : null, x: Math.round(Math.random() * 200 - 100), y: Math.round(Math.random() * 120 - 60), size: 100, dir: 90, cos: 0, show: true, rot: STG_CH[ch].rot || 'lr', scripts: [], added: 1 });
    E.si = E.proj.sprites.length - 1; E.sel = null; E.cur = null; STGU.close(); stgChanged(E); typeof SFX !== 'undefined' && SFX.ok && SFX.ok();
  },
  props() {
    const E = STG_E, s = E.proj.sprites[E.si], ch = STG_CH[s.ch];
    stgSheet(E, `<div class="stg-ph">${stgThumb(s.ch, s.cos)}<div><h3>${stgEsc(stgName(s))}</h3><p class="mut">x: <b>${Math.round(s.x)}</b> · y: <b>${Math.round(s.y)}</b> · ${stgL('arrossega’l a l’escenari per canviar on comença', 'arrástralo en el escenario para cambiar dónde empieza')}</p></div></div>
      <h4>${stgL('Vestit del principi', 'Disfraz del principio')}</h4><div class="stg-cosl">${ch.cos.map((c, i) => `<button class="${i === s.cos ? 'on' : ''}" onclick="STGU.sp('cos',${i})">${stgThumb(s.ch, i)}<small>${i + 1}. ${stgEsc(stgT(c.n))}</small></button>`).join('')}</div>
      <h4>${stgL('Mida i direcció', 'Tamaño y dirección')}</h4><div class="stg-prow"><button onclick="STGU.sp('size',-10)">−</button><b>${s.size} %</b><button onclick="STGU.sp('size',10)">+</button>
        <span class="sep"></span>${[[90, '→'], [-90, '←'], [0, '↑'], [180, '↓']].map(([d, a]) => `<button class="${s.dir === d ? 'on' : ''}" onclick="STGU.sp('dir',${d})">${a}</button>`).join('')}</div>
      <div class="stg-prow"><button class="wide ${s.show ? 'on' : ''}" onclick="STGU.sp('show')">${s.show ? stgL('Es veu al principi', 'Se ve al principio') : stgL('Amagat al principi', 'Escondido al principio')}</button>
      ${E.o.add && E.proj.sprites.length > 1 ? `<button class="wide del" onclick="STGU.sp('del')">${stgL('Treu el personatge', 'Quita el personaje')}</button>` : ''}</div>`);
  },
  sp(k, v) {
    const E = STG_E, s = E.proj.sprites[E.si]; stgSnap(E);
    if (k === 'cos') s.cos = v; if (k === 'size') s.size = Math.max(20, Math.min(300, s.size + v)); if (k === 'dir') s.dir = v; if (k === 'show') s.show = !s.show;
    if (k === 'del') { E.proj.sprites.splice(E.si, 1); E.si = 0; STGU.close(); return stgChanged(E); }
    stgChanged(E); STGU.props();
  },
  bgs() {
    const E = STG_E, p = E.proj, all = E.o.bgs === true ? STG_BGS : Array.isArray(E.o.bgs) ? E.o.bgs : null;
    const list = all ? [...new Set([...p.bgs, ...all])] : p.bgs;
    stgSheet(E, `<h3>${stgL('Els fons del projecte', 'Los fondos del proyecto')}</h3><p class="mut">${all ? stgL('Toca un fons per afegir-lo o treure’l del projecte. L’estrella marca el del principi.', 'Toca un fondo para añadirlo o quitarlo del proyecto. La estrella marca el del principio.') : stgL('L’estrella marca el fons del principi.', 'La estrella marca el fondo del principio.')}</p>
      <div class="stg-bgl2">${list.map(id => { const inP = p.bgs.includes(id); return `<div class="stg-bgi${inP ? ' in' : ''}${p.bg === id ? ' first' : ''}"><button class="th" onclick="${all ? `STGU.bgT('${id}')` : `STGU.bg0('${id}')`}">${stgBgThumb(id)}<b>${stgEsc(stgT(STG_BG[id].n))}</b>${inP ? `<i>${p.bgs.indexOf(id) + 1}</i>` : ''}</button>${inP ? `<button class="st" onclick="STGU.bg0('${id}')" aria-label="${stgL('Fons del principi', 'Fondo del principio')}">${p.bg === id ? '★' : '☆'}</button>` : ''}</div>`; }).join('')}</div>`, 'wide');
  },
  bgT(id) { const E = STG_E, p = E.proj; stgSnap(E); if (p.bgs.includes(id)) { if (p.bgs.length > 1) { p.bgs.splice(p.bgs.indexOf(id), 1); if (p.bg === id) p.bg = p.bgs[0]; } } else p.bgs.push(id); stgChanged(E); STGU.bgs(); },
  bg0(id) { const E = STG_E, p = E.proj; stgSnap(E); if (!p.bgs.includes(id)) p.bgs.push(id); p.bg = id; stgChanged(E); STGU.bgs(); },
  spot(id) { const E = STG_E; E.o.onSpot && E.o.onSpot(id, E.ids[id] && E.ids[id].n); },
  key(k, down) { const V = STG_ACT; if (!V || !V.run || (V.po && V.po.sim)) return; down ? stgKeyDown(V.rt, k) : stgKeyUp(V.rt, k); }
};
function stgMsgs(E) { const s = new Set(E.proj.msgs || []); for (const b of stgAll(E.proj)) if (b.k === 'send' || b.k === 'sendw' || b.k === 'msg') if (typeof b.a[0] === 'string') s.add(b.a[0]); return [...s]; }
function stgSheet(E, html, cls = '') {
  const s = E.root.querySelector('#stgSheet'); if (!s) return;
  s.hidden = false; s.className = 'stg-sheet ' + cls;
  s.innerHTML = `<div class="stg-shb" onclick="STGU.close()"></div><div class="stg-shc"><button class="stg-shx" onclick="STGU.close()" aria-label="${stgL('Tanca', 'Cierra')}">✕</button>${html}</div>`;
}
const STG_CHIPS = { n: [1, 2, 5, 10, -10, 50, 100, 0], dir: [[90, '→ 90'], [-90, '← −90'], [0, '↑ 0'], [180, '↓ 180'], [45, '↗ 45'], [135, '↘ 135']] };
function stgSlotSheet(E, id, i) {
  const ix = E.ids[id], node = ix.n, d = STG_B[node.k], type = (d[3] || [])[i], v = node.a[i], si = ix.s, sp = E.proj.sprites[si];
  const isRep = v && typeof v === 'object';
  let h = `<div class="stg-shtop"><span class="sb c-${d[0]} mini"><span class="sbh"><span class="sbl">${stgLabel(E, node, false, si)}</span></span></span></div>`;
  const opt = (val, lab, on, extra = '') => `<button class="stg-opt${on ? ' on' : ''}" onclick='STGU.set(${id},${i},${JSON.stringify(val).replace(/'/g, '&#39;')})'>${extra}${lab}</button>`;
  if (type === 'b') {
    const bs = E.pal.filter(k => stgShape(k) === 'b');
    h += `<h4>${stgL('Tria una condició', 'Elige una condición')}</h4><div class="stg-reps">${bs.map(k => `<button class="pr c-${stgCatOf(k)} bool" onclick="STGU.rep(${id},${i},'${k}')">${stgPalLabel(E, k)}</button>`).join('') || `<p class="mut">${stgL('En aquest repte no hi ha condicions.', 'En este reto no hay condiciones.')}</p>`}</div>`;
    if (isRep) h += `<button class="btn ghost" onclick="STGU.clr(${id},${i})">${stgL('Treu la condició', 'Quita la condición')}</button>`;
  } else if (STG_DD.has(type)) {
    let os = [];
    const others = E.proj.sprites.filter((s, k) => k !== si).map(s => [s.name, stgName(s), s]);
    if (type === 'key') os = Object.keys(STG_KEYS).map(k => [k, stgL(...STG_KEYS[k])]);
    if (type === 'touch') os = [['_edge', stgL('la vora', 'el borde')], ['_mouse', stgL('el ratolí', 'el ratón')], ...others];
    if (type === 'tow') os = [['_mouse', stgL('el ratolí', 'el ratón')], ...others];
    if (type === 'go') os = [['_random', stgL('un lloc a l’atzar', 'un lugar al azar')], ['_mouse', stgL('el ratolí', 'el ratón')], ...others];
    if (type === 'clone') os = [['_me', stgL('mi mateix', 'mí mismo')], ...others];
    if (type === 'col') { const used = new Set(); E.proj.bgs.forEach(b => (STG_BG[b].reg || []).forEach(r => used.add(r.c))); os = Object.keys(STG_COL).filter(c => !used.size || used.has(c)).map(c => [c, stgOptLabel(E, 'col', c)]); }
    if (type === 'note') os = Object.keys(STG_NOTE).map(n => [n, n.replace('+', '′')]);
    if (type === 'drum') os = Object.keys(STG_DRUM).map(k => [k, stgL(...STG_DRUM[k])]);
    if (type === 'sfx') os = Object.keys(STG_SFX).map(k => [k, stgL(...STG_SFX[k])]);
    if (type === 'stop') os = Object.keys(STG_STOP).map(k => [k, stgL(...STG_STOP[k])]);
    if (type === 'rot') os = Object.keys(STG_ROT).map(k => [k, stgL(...STG_ROT[k])]);
    if (type === 'var') os = E.proj.vars.map(x => [x.n, x.n]);
    if (type === 'msg') os = stgMsgs(E).map(m => [m, m]);
    if (type === 'cos') os = STG_CH[sp.ch].cos.map((c, k) => [k + 1, `${k + 1}. ${stgEsc(stgT(c.n))}`, null, stgThumb(sp.ch, k)]);
    if (type === 'bg') os = E.proj.bgs.map(b => [b, stgEsc(stgT(STG_BG[b].n)), null, stgBgThumb(b)]);
    h += `<div class="stg-opts${type === 'cos' || type === 'bg' ? ' pics' : ''}">${os.map(([val, lab, s, pic]) => opt(val, lab, val === v, pic || (s ? stgThumb(s.ch, s.cos) : ''))).join('')}</div>`;
    if (type === 'msg') h += `<h4>${stgL('O un missatge nou', 'O un mensaje nuevo')}</h4><div class="stg-inrow"><input id="stgIn" class="stg-in" maxlength="16" placeholder="${stgL('p. ex. comença', 'p. ej. empieza')}" autocomplete="off"><button class="btn" onclick="STGU.newMsg(${id},${i})">${STG_ICO.ok}</button></div>`;
    if (type === 'var' && E.o.vars) h += `<button class="btn ghost" onclick="STGU.newVar()">${stgL('Nova variable', 'Nueva variable')}</button>`;
  } else {
    const num = type !== 't', chips = type === 'dir' ? STG_CHIPS.dir : num ? STG_CHIPS.n.map(n => [n, String(n)]) : [];
    h += `<div class="stg-inrow"><input id="stgIn" class="stg-in big" ${num ? 'inputmode="decimal"' : ''} maxlength="${num ? 8 : 60}" value="${isRep ? '' : stgEsc(stgStr(v))}" autocomplete="off" onkeydown="if(event.key==='Enter')STGU.setInput(${id},${i})"><button class="btn" onclick="STGU.setInput(${id},${i})">${STG_ICO.ok}</button></div>`;
    if (chips.length) h += `<div class="stg-chips">${chips.map(([val, lab]) => `<button onclick="STGU.set(${id},${i},${val})">${lab}</button>`).join('')}</div>`;
    const rs = E.pal.filter(k => stgShape(k) === 'r' && k !== 'var');
    const vs = E.pal.includes('var') ? E.proj.vars : [];
    if (rs.length || vs.length) h += `<h4>${stgL('O posa-hi un bloc', 'O pon un bloque')}</h4><div class="stg-reps">${rs.map(k => `<button class="pr c-${stgCatOf(k)}" onclick="STGU.rep(${id},${i},'${k}')">${stgPalLabel(E, k)}</button>`).join('')}${vs.map(x => `<button class="pr c-var var" onclick="STGU.rep(${id},${i},'var','${stgEsc(x.n)}')">${stgEsc(x.n)}</button>`).join('')}</div>`;
    if (isRep) h += `<button class="btn ghost" onclick="STGU.clr(${id},${i})">${stgL('Treu el bloc', 'Quita el bloque')}</button>`;
  }
  stgSheet(E, h);
  if (!STG_DD.has(type) && type !== 'b') setTimeout(() => { const inp = document.getElementById('stgIn'); if (inp && matchMedia('(pointer:fine)').matches) { inp.focus(); inp.select(); } }, 60);
}
function stgRunBtn(E, on) {
  const b = $s(E, '#stgGo'); if (b) b.innerHTML = on ? `${STG_ICO.stop}<span>${stgL('Atura', 'Para')}</span>` : `${STG_ICO.play}<span>${stgL('Comença', 'Empieza')}</span>`;
  b && b.classList.toggle('on', on); E.root.querySelector('.stg').classList.toggle('running', on);
}
// mentre corre: blocs que s'executen il·luminats, objectius, tecles simulades
function stgNowMark(E, ids) {
  for (const id of E.now) if (!ids.has(id)) { const e = document.getElementById('sb' + id); e && e.classList.remove('now'); }
  for (const id of ids) if (!E.now.has(id)) { const e = document.getElementById('sb' + id); e && e.classList.add('now'); }
  E.now = ids;
}
function stgEdFrame(E, rt) {
  const ids = new Set();
  for (const th of rt.th) if (!th.done && th.cur && th.cur._id && (E.mode !== 'edit' || th.s.src === E.proj.sprites[E.si])) { ids.add(th.cur._id); if (th.sc && th.sc.h._id) ids.add(th.sc.h._id); }
  stgNowMark(E, ids);
  if (E.testing) E.root.querySelectorAll('.stg-pad button').forEach(b => b.classList.toggle('on', !!rt.held[b.dataset.k]));
  if (E.testing && rt.lastClick && rt.lastClick.t === rt.t) stgBurst(E.V, rt.lastClick.x, rt.lastClick.y, 'ring');
  if (E.bonus.length) { const bn = stgGoalsNow(rt, E.bonus, E.proj, E.bst), lis = E.root.querySelectorAll('#stgGoals ul.xb li');
    bn.forEach((ok, i) => { if (ok && lis[i] && !lis[i].classList.contains('ok')) { lis[i].classList.add('ok', 'just'); E.bdone = E.bdone || {}; if (!E.bdone[i]) { E.bdone[i] = 1; typeof addXPsafe === 'function' && addXPsafe(5); toast(stgL('★ Repte extra aconseguit!', '★ ¡Reto extra conseguido!')); } } }); }
  if (!E.goals.length) return;
  const before = E.gst.join();
  const now = stgGoalsNow(rt, E.goals, E.proj, E.gst);
  const vis = now.map(Boolean);
  if (vis.join() !== (E.gvis || '') ) { E.gvis = vis.join(); const lis = E.root.querySelectorAll('#stgGoals li'); vis.forEach((ok, i) => { if (lis[i] && ok && !lis[i].classList.contains('ok')) { lis[i].classList.add('ok', 'just'); typeof SFX !== 'undefined' && SFX.tap && SFX.tap(); } else if (lis[i] && !ok) lis[i].classList.remove('ok'); }); }
  void before;
  if (now.every(Boolean) && !E.winning) { E.winning = true; setTimeout(() => { E.winning = false; stgWin(E); }, E.testing ? 500 : 250); }
}
function stgEdEnd(E) {
  stgRunBtn(E, false); stgNowMark(E, new Set());
  E.root.querySelectorAll('.stg-pad button.on').forEach(b => b.classList.remove('on'));
  if (!E.testing || E.winning) return;
  E.testing = false; E.tries++;
  const now = stgGoalsNow(E.V.rt, E.goals, E.proj, E.gst), miss = E.goals.find((g, i) => !now[i]);
  if (!miss) return stgWin(E);
  const err = E.V.rt.err ? stgL(' (el programa s’ha embolicat)', ' (el programa se ha liado)') : '';
  stgHud(E, `<div class="stg-msg bad"><img src="img/tech/bit-think.webp" alt=""><div><b>${stgL('Gairebé!', '¡Casi!')}</b> ${stgL('En Bit ha provat el projecte i encara falta:', 'Bit ha probado el proyecto y todavía falta:')} <em>${stgT(miss.t)}</em>${err}</div></div>`, 'msg', 6000);
  typeof SFX !== 'undefined' && SFX.ko && SFX.ko();
  E.o.onFail && E.o.onFail(E.tries);
}
function stgWin(E) {
  if (E.won && !E.o.again) { if (E.testing) STGU.stop(); return; }
  const first = !E.won; E.won = true;
  if (E.testing) { STGU.stop(); E.testing = false; }
  E.gst = E.goals.map(() => true); stgDrawGoals(E);
  stgHud(E, `<div class="stg-win"><div class="stg-wr"></div><img src="img/tech/bit-win.webp" alt=""><b>${E.o.winText ? stgT(E.o.winText) : stgL('Repte superat!', '¡Reto superado!')}</b></div>`, 'win', 3200);
  stgBurst(E.V, 0, 40, 'star'); stgBurst(E.V, -120, -20, 'star'); stgBurst(E.V, 120, -20, 'star');
  typeof SFX !== 'undefined' && SFX.win && SFX.win(); typeof confetti === 'function' && confetti(110);
  E.o.onWin && E.o.onWin(first);
}
function stgBindStage(E) {
  const V = E.V, svg = V.svg, xy = $s(E, '#stgXY');
  let down = null;
  svg.addEventListener('pointerdown', e => {
    const p = stgPt(V, e);
    if (V.run) { if (V.po && V.po.sim) return; V.rt.mouse.down = true; V.rt.mouse.x = p.x; V.rt.mouse.y = p.y; stgClick(V.rt, p.x, p.y); stgBurst(V, p.x, p.y, 'ring'); return; }
    const hit = V.rt.spr.filter(s => s.show).sort((a, b) => b.z - a.z).find(s => { const B = stgBox(s); return p.x >= B.l && p.x <= B.r && p.y >= B.b && p.y <= B.t; });
    if (!hit) return;
    const si = E.proj.sprites.indexOf(hit.src);
    down = { si, hit, x0: p.x, y0: p.y, dx: p.x - hit.x, dy: p.y - hit.y, moved: false };
    try { svg.setPointerCapture(e.pointerId); } catch (er) { }
  });
  svg.addEventListener('pointermove', e => {
    const p = stgPt(V, e);
    if (xy) { xy.textContent = `x: ${Math.max(-240, Math.min(240, p.x))}   y: ${Math.max(-180, Math.min(180, p.y))}`; xy.classList.add('on'); }
    if (V.run) { V.rt.mouse.x = p.x; V.rt.mouse.y = p.y; return; }
    if (!down || E.mode !== 'edit' || E.o.lockPos) return;
    if (!down.moved && Math.hypot(p.x - down.x0, p.y - down.y0) < 4) return;
    if (!down.moved) { stgSnap(E); down.moved = true; }
    const sp = E.proj.sprites[down.si];
    sp.x = Math.max(-240, Math.min(240, Math.round(p.x - down.dx))); sp.y = Math.max(-180, Math.min(180, Math.round(p.y - down.dy)));
    down.hit.x = sp.x; down.hit.y = sp.y; stgPaint(V);
    if (xy) xy.textContent = `${stgName(sp)} → x: ${sp.x}   y: ${sp.y}`;
  });
  const up = () => {
    if (V.run) { V.rt.mouse.down = false; return; }
    if (!down) return;
    const d = down; down = null;
    if (d.moved) { stgDrawSprites(E); E.o.onChange && E.o.onChange(E.proj); return; }
    if (E.mode === 'edit' && d.si >= 0 && d.si !== E.si) STGU.spr(d.si);
    // tocar un personatge amb «Quan es toca aquest personatge» l'engega encara que el projecte estigui aturat
    if (d.hit.src.scripts.some(sc => sc.h.k === 'click')) { E.gst = E.goals.map(() => false); stgPlay(V, { noStart: 1, onFrame: rt => stgEdFrame(E, rt), onEnd: () => stgEdEnd(E) }); V.rt.started = true; stgRunBtn(E, true); stgClick(V.rt, d.hit.x, d.hit.y); stgBurst(V, d.hit.x, d.hit.y, 'ring'); }
  };
  svg.addEventListener('pointerup', up); svg.addEventListener('pointercancel', up);
  svg.addEventListener('pointerleave', () => xy && xy.classList.remove('on'));
  stgBindPad(E.root);
}
function stgBindPad(root) {
  const keyOf = e => { const b = e.target.closest && e.target.closest('.stg-pad [data-k]'); return b ? b : null; };
  root.addEventListener('pointerdown', e => { const b = keyOf(e); if (!b) return; e.preventDefault(); b.classList.add('on'); STGU.key(b.dataset.k, true); });
  const up = e => { const b = keyOf(e); if (!b) return; b.classList.remove('on'); STGU.key(b.dataset.k, false); };
  root.addEventListener('pointerup', up); root.addEventListener('pointerout', up); root.addEventListener('pointercancel', up);
}
if (stgDom && !window.__stgKeys) {
  window.__stgKeys = 1;
  const KM = { ArrowRight: 'right', ArrowLeft: 'left', ArrowUp: 'up', ArrowDown: 'down', ' ': 'space' };
  const kOf = e => KM[e.key] || (/^[a-z]$/i.test(e.key) ? e.key.toLowerCase() : null);
  document.addEventListener('keydown', e => { const V = STG_ACT; if (!V || !V.run || (V.po && V.po.sim)) return; if (e.target.closest && e.target.closest('input,textarea,select')) return; const k = kOf(e); if (!k) return; e.preventDefault(); if (!e.repeat) stgKeyDown(V.rt, k); });
  document.addEventListener('keyup', e => { const V = STG_ACT; if (!V || !V.run) return; const k = kOf(e); if (k) stgKeyUp(V.rt, k); });
  window.addEventListener('blur', () => { const V = STG_ACT; if (V && V.rt) Object.keys(V.rt.held).forEach(k => stgKeyUp(V.rt, k)); });
  document.addEventListener('fullscreenchange', () => { document.querySelectorAll('.stg-frame').forEach(f => f.classList.toggle('isfs', document.fullscreenElement === f)); });
}

/* ---------- Tipus de pas de Tech Creadors ----------
   stage       repte a l'escenari: projecte inicial (proj), paleta (pal), objectius (goals) que es comproven executant el
               projecte amb entrades simulades (sim, dur); bonus: reptes extra opcionals; sol: una solució (es mostra com a ajuda)
               ph:'crea' o save:true → quan funciona es pot desar al portafoli (name)
               game:true → treballa sobre el videojoc de l'alumne (unitat 8), que es guarda a P.tech.stg.game
   stgpredict  llegir un programa i triar què passarà; després s'executa per comprovar-ho
   stgspot     trobar el bloc que falla (el bo porta x:1)
   stglearn    targetes de teoria amb animacions (TANI) o demostracions en directe a l'escenari (stg)
   stgstory    una escena il·lustrada (un projecte petit que es mou sol) amb en Bit o en Numi que parla
   stgplan     el document de disseny del videojoc (unitat 8)
   stgdiploma  el diploma final */
const stgTv = v => typeof tval === 'function' ? tval(v) : stgT(v);
// la solució d'un pas: un projecte sencer o {NomPersonatge: 'programa'} sobre el projecte inicial
function stgSolProj(st, base) {
  if (!st.sol) return null;
  if (st.sol.sprites) return stgClone(st.sol);
  const p = stgClone(base || st.proj);
  for (const [n, code] of Object.entries(st.sol)) { if (n === '$vars') { p.vars = code.map(v => Array.isArray(v) ? { n: v[0], v: v[1] || 0, show: true } : v); continue; } const s = p.sprites.find(x => x.name === n); if (s) s.scripts = stgParse(code); }
  return p;
}
function stgQ(st, mood = 'idle') {
  return st.q ? `<div class="stg-q"><img class="stg-qbit" src="img/tech/bit-${st.mood || mood}.webp" alt=""><div class="stg-qt"><p>${stgTv(st.q)}</p>${st.crit ? `<ul class="tcrit">${st.crit.map(c => `<li>${stgTv(c)}</li>`).join('')}</ul>` : ''}</div></div>` : '';
}
function stgSaveProj(st, proj) {
  const t = TS_();
  t.port.push({ id: 'pj' + Date.now().toString(36), sid: TSS ? TSS.id : '', kind: 'stage', t: st.name || (TSS ? TSS.s.t : 'Projecte|Proyecto'), proj: stgClone(proj), d: today() });
  if (t.port.length > 60) t.port.shift();
  save(); toast(stgL('Projecte desat a «Projectes»!', '¡Proyecto guardado en «Proyectos»!'));
}
// el videojoc de la unitat 8 (es guarda a P.tech.stg)
const stgS = () => { const t = TS_(); t.stg = t.stg || {}; return t.stg; };
function stgGameProj(st) { const g = stgS(); if (!g.game) g.game = stgGameFromPlan(g.plan || STG_PLAN0, st.proj); return g.game; }
function stgGameSave(now) { clearTimeout(stgGameSave.t); if (now) return save(); stgGameSave.t = setTimeout(save, 1200); }
function stgHintBtn(st) {
  const f = document.getElementById('tsf'); if (!f || document.getElementById('thint') || !(st.hint || st.sol)) return;
  const b = document.createElement('button'); b.className = 'btn ghost'; b.id = 'thint'; b.textContent = stgL('Una pista', 'Una pista');
  b.onclick = () => {
    if (st.hint && !b.dataset.k) { b.dataset.k = 1; stgHud(STG_E, `<div class="stg-msg"><img src="img/tech/bit-think.webp" alt=""><div>💡 ${stgTv(st.hint)}</div></div>`, 'msg', 9000); if (st.sol && !st.game) b.textContent = stgL('Mostra una solució', 'Muestra una solución'); else b.remove(); return; }
    const E = STG_E, p = stgSolProj(st, st.proj); if (!p) return;
    stgSnap(E); Object.keys(E.proj).forEach(k => delete E.proj[k]); Object.assign(E.proj, p); E.sel = null; E.cur = null; stgChanged(E);
    stgHud(E, `<div class="stg-msg"><img src="img/tech/bit-happy.webp" alt=""><div>${stgL('Aquí tens una solució. Prem <b>Comença</b> i mira què fa cada bloc.', 'Aquí tienes una solución. Pulsa <b>Empieza</b> y mira qué hace cada bloque.')}</div></div>`, 'msg', 7000); b.remove();
  };
  f.insertBefore(b, f.firstChild);
}
if (typeof TSTEP !== 'undefined') {
  TSTEP.stage = function (st) {
    const tsb = $('#tsb'); tsb.classList.add('wide', 'stgw');
    const proj = st.game ? stgGameProj(st) : stgClone(st.proj), crea = st.ph === 'crea' || st.save;
    tsb.innerHTML = `${stgQ(st, crea ? 'happy' : 'idle')}<div class="stg-mount"></div>`;
    const E = stgEditor(tsb.querySelector('.stg-mount'), { proj, pal: st.pal, goals: st.goals, bonus: st.bonus, sim: st.sim, dur: st.dur, add: st.add, bgs: st.bgs, vars: st.vars, max: st.max, sel: st.sel, cat: st.cat, again: true,
      onChange: st.game ? () => stgGameSave() : null,
      onWin: first => {
        if (first) TSS.ok++;
        if (st.game) stgGameSave(true);
        if (crea) tFoot(stgL('Desa-ho i continua', 'Guárdalo y continúa'), () => { stgSaveProj(st, E.proj); tNext(); }, true, `<button class="btn ghost" onclick="STGU.stop(1)">${stgL('El milloro', 'Lo mejoro')}</button>`);
        else tContinue();
        if (st.after) setTimeout(() => stgHud(E, `<div class="stg-msg good"><img src="img/tech/bit-happy.webp" alt=""><div>${stgTv(st.after)}</div></div>`, 'msg', 9000), 3300);
      },
      onFail: n => { if (n >= 2) stgHintBtn(st); } });
    tFoot(stgL('Continua', 'Continúa'), tNext, false);
  };
  TSTEP.stgpredict = function (st) {
    const tsb = $('#tsb'); tsb.classList.add('wide', 'stgw');
    tsb.innerHTML = `<div class="stg-q"><img class="stg-qbit" src="img/tech/bit-think.webp" alt=""><div class="stg-qt"><p>${stgTv(st.q)}</p><div class="stg-popts">${st.opts.map((o, i) => `<button class="topt" data-i="${i}"><span class="tol">${'ABCD'[i]}</span><span class="tot">${stgTv(o)}</span></button>`).join('')}</div><div id="tfb"></div></div></div><div class="stg-mount"></div>`;
    const E = stgEditor(tsb.querySelector('.stg-mount'), { proj: stgClone(st.proj), mode: 'view', who: st.who, whoHead: !!st.who });
    let pick = null;
    const go = $s(E, '#stgGo'); go.disabled = true; go.title = stgL('Primer tria una resposta', 'Primero elige una respuesta');
    tsb.querySelectorAll('.stg-popts .topt').forEach(b => b.onclick = () => { if (TSS.ready) return; pick = +b.dataset.i; tsb.querySelectorAll('.stg-popts .topt').forEach(x => x.classList.toggle('on', x === b)); SFX.tap && SFX.tap(); tFoot(stgL('Comprova-ho executant el programa', 'Compruébalo ejecutando el programa'), check); });
    const check = () => {
      if (pick === null || TSS.ready) return; TSS.ready = true;
      tFoot(stgL('Mira què passa…', 'Mira qué pasa…'), () => { }, false);
      stgPlay(E.V, { sim: st.sim, seed: 3, dur: st.dur || 6, untilIdle: !(st.sim || []).some(e => e.auto), onFrame: rt => stgEdFrame(E, rt), onEnd: () => {
        stgRunBtn(E, false); stgNowMark(E, new Set()); go.disabled = false; go.title = '';
        const ok = pick === st.a;
        tsb.querySelectorAll('.stg-popts .topt').forEach(b => { const i = +b.dataset.i; b.disabled = true; b.classList.add(i === st.a ? 'ok' : i === pick ? 'ko' : 'x'); });
        $('#tfb').innerHTML = `<div class="tfbox ${ok ? 'ok' : 'ko'}"><b>${ok ? stgL('Exacte!', '¡Exacto!') : stgL('No ben bé.', 'No exactamente.')}</b> ${st.ex ? stgTv(st.ex) : ''}</div>`;
        ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko();
        tContinue();
      } });
      stgRunBtn(E, true);
    };
    tFoot(stgL('Tria una resposta', 'Elige una respuesta'), check, false);
  };
  TSTEP.stgspot = function (st) {
    const tsb = $('#tsb'); tsb.classList.add('wide', 'stgw');
    tsb.innerHTML = `${stgQ(st, 'think')}<div id="tfb" class="stg-fb"></div><div class="stg-mount"></div>`;
    const E = stgEditor(tsb.querySelector('.stg-mount'), { proj: stgClone(st.proj), mode: 'spot', who: st.who,
      onSpot: (id, b) => {
        if (TSS.ready || !b) return; TSS.ready = true;
        const ok = !!b.x, e = document.getElementById('sb' + id); if (e) e.classList.add(ok ? 'good' : 'err');
        if (!ok) { const g = Object.values(E.ids).find(v => v.n.x); if (g) { const ge = document.getElementById('sb' + g.n._id); ge && ge.classList.add('good'); } }
        $('#tfb').innerHTML = `<div class="tfbox ${ok ? 'ok' : 'ko'}"><b>${ok ? stgL('Molt bé!', '¡Muy bien!') : stgL('No és aquest.', 'No es este.')}</b> ${ok ? (st.yes ? stgTv(st.yes) : '') : (st.ex ? stgTv(st.ex) : stgL('És el que està marcat en verd.', 'Es el que está marcado en verde.'))}</div>`;
        ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko();
        tContinue();
      } });
    tFoot(stgL('Toca un bloc del programa', 'Toca un bloque del programa'), () => { }, false);
  };
  TSTEP.stglearn = function (st) {
    let i = 0, seen = 0;
    const cards = st.cards;
    const draw = (dir = 0) => {
      if (STG_E && STG_E.V) stgHalt(STG_E.V);
      typeof tDemoStop === 'function' && tDemoStop();
      const c = cards[i], tani = typeof TANI !== 'undefined' && TANI[c.anim] ? TANI[c.anim] : TANI_STG[c.anim];
      const media = c.stg ? `<div class="stg-demo"></div>` : tani ? `<div class="tanibox">${tani()}</div>` : '';
      $('#tsb').innerHTML = `<div class="tlearn2 stg-learn ${dir > 0 ? 'fwd' : dir < 0 ? 'back' : ''}">
        <div class="tldots">${cards.map((_, k) => `<button class="${k === i ? 'on' : k <= seen ? 'seen' : ''}" onclick="STLRN.go(${k})" aria-label="${k + 1}"></button>`).join('')}</div>
        <article class="tlc">${c.k ? `<span class="tlk">${stgTv(c.k)}</span>` : ''}<h2>${stgTv(c.t)}</h2>${media}<div class="tlx">${stgTv(c.x)}</div>
          ${c.tip ? `<div class="tltip"><span>💡</span><div>${stgTv(c.tip)}</div></div>` : ''}
          ${c.bad ? `<div class="tlmist"><div class="bad"><b>✗</b><span>${stgTv(c.bad)}</span></div><div class="good"><b>✓</b><span>${stgTv(c.good)}</span></div></div>` : ''}</article>
        <div class="tlnav"><button class="btn ghost" ${i ? '' : 'disabled'} onclick="STLRN.go(${i - 1})" aria-label="${stgL('Anterior', 'Anterior')}">‹</button><span>${i + 1} / ${cards.length}</span><button class="btn ghost" ${i < cards.length - 1 ? '' : 'disabled'} onclick="STLRN.go(${i + 1})" aria-label="${stgL('Següent', 'Siguiente')}">›</button></div></div>`;
      if (c.stg) stgDemo($('#tsb').querySelector('.stg-demo'), c.stg);
      const last = i === cards.length - 1;
      tFoot(last ? stgL('Ho he entès!', '¡Lo he entendido!') : stgL('Següent', 'Siguiente'), last ? () => { if (STG_E && STG_E.V) stgHalt(STG_E.V); addXPsafe(3); tNext(); } : () => STLRN.go(i + 1));
      const b = document.querySelector('.tsbody'); if (b) b.scrollTop = 0;
    };
    window.STLRN = { go(k) { if (k < 0 || k >= cards.length) return; const d = k - i; i = k; seen = Math.max(seen, k); SFX.tap && SFX.tap(); draw(d); } };
    draw();
  };
  TSTEP.stgstory = function (st) {
    const sc = st.scene ? stgProj(st.scene) : null;
    const who = st.who === 'numi' ? `<span class="stg-spk numi">${typeof charSVG === 'function' ? charSVG('numi', st.mood || 'happy') : ''}</span>` : `<img class="stg-spk" src="img/tech/bit-${st.mood || 'happy'}.webp" alt="">`;
    $('#tsb').innerHTML = `<div class="tcol stg-story">${st.title ? `<h2 class="tsh">${stgTv(st.title)}</h2>` : ''}${sc ? `<div class="stg-scene"><div class="stg-box"></div></div>` : ''}
      <div class="stg-say">${who}<div class="bubble big">${stgTv(st.t)}</div></div>${st.box ? `<div class="tbox">${stgTv(st.box)}</div>` : ''}</div>`;
    if (sc) { const V = stgView($('#tsb').querySelector('.stg-scene .stg-box'), sc); STG_E = { V, root: $('#tsb'), mode: 'view', now: new Set(), goals: [] }; if (sc.sprites.some(s => s.scripts.length)) stgPlay(V, { dur: 600 }); }
    tContinue();
  };
}
// demostració en directe dins d'una targeta: escenari + programa que s'il·lumina, en bucle
function stgDemo(el, d) {
  const proj = d.proj.sprites ? stgClone(d.proj) : stgProj(d.proj);
  const E = stgEditor(el, { proj, mode: 'view', who: d.who, whoHead: true, code: d.code !== false });
  el.querySelector('.stg').classList.add('demo');
  const loop = () => { if (!document.body.contains(el) || STG_E !== E) return; stgPlay(E.V, { sim: d.sim, seed: d.seed || 5, dur: d.dur || 6, untilIdle: !(d.sim || []).some(e => e.auto), onFrame: rt => stgEdFrame(E, rt), onEnd: () => { stgRunBtn(E, false); stgNowMark(E, new Set()); setTimeout(loop, 1600); } }); stgRunBtn(E, true); };
  setTimeout(loop, 700);
  return E;
}

// un bloc o un tros de programa dibuixat (per a preguntes, històries i explicacions)
const STG_E0 = () => ({ proj: { sprites: [], vars: [], bgs: [], msgs: [] }, mode: 'view', now: new Set(), sel: null, move: null, ids: {}, lists: [], o: {} });
function stgChip(line) { const sc = stgParse(line.startsWith('@') ? line : '@start\n' + line)[0]; return `<span class="stg-chip">${line.startsWith('@') ? stgScript(STG_E0(), { h: sc.h, b: [] }, 0, true) : stgBlock(STG_E0(), sc.b[0], true, 0)}</span>`; }
function stgCode(src) { return `<div class="stg-snip">${stgParse(src).map(sc => stgScript(STG_E0(), sc, 0, true)).join('')}</div>`; }

/* ---------- Portafoli: projectes de l'escenari ---------- */
const STG_PORT = {
  card: p => `<button class="tport stgp" onclick="tPortOpen('${p.id}')"><span class="tpimg">${stgStill(p.proj)}</span><b>${stgEsc(stgTv(p.t))}</b><small>${typeof dayShort === 'function' ? dayShort(p.d) : p.d} · ${stgCount(p.proj)} ${stgL('blocs', 'bloques')}</small></button>`,
  open(p, edit) {
    VIEW = 'tport';
    app.innerHTML = `<div class="tsess stg-port"><div class="tstop"><button class="xbtn" onclick="go('projectes')" aria-label="${stgL('Tanca', 'Cierra')}">✕</button><b class="tsph">${stgEsc(stgTv(p.t))}</b><span></span></div>
      <div class="tsbody wide stgw" id="tsb"><div class="stg-mount"></div></div><div class="tsfoot" id="tsf">${edit ? `<button class="btn ghost" onclick="STG_PORT.open(TS_().port.find(x=>x.id==='${p.id}'))">${stgL('Cancel·la', 'Cancela')}</button><button class="btn big" onclick="STG_PORT.save('${p.id}')">${stgL('Desa els canvis', 'Guarda los cambios')}</button>`
        : `<button class="link" onclick="tPortDel('${p.id}')">${stgL('Esborra', 'Borra')}</button><button class="btn big" onclick="STG_PORT.open(TS_().port.find(x=>x.id==='${p.id}'),1)">${stgL('Continua’l programant', 'Sigue programándolo')}</button>`}</div></div>`;
    STG_PV = stgEditor($('#tsb .stg-mount'), edit ? { proj: stgClone(p.proj), add: true, bgs: true, vars: true } : { proj: stgClone(p.proj), mode: 'view', whoHead: true });
    if (!edit) setTimeout(() => STGU.go(), 400);
  },
  save(id) { const p = TS_().port.find(x => x.id === id); if (!p || !STG_E) return; p.proj = stgClone(STG_E.proj); p.d = today(); save(); toast(stgL('Canvis desats!', '¡Cambios guardados!')); STG_PORT.open(p); }
};
// la pantalla «Projectes» de tech.js només coneix els mons d'en Bit: s'hi afegeixen els projectes de l'escenari
if (typeof techProjectes === 'function' && !techProjectes.stg) {
  const tp0 = techProjectes, to0 = tPortOpen;
  techProjectes = function () {
    const t = TS_(), mine = t.port.filter(p => p.kind === 'stage');
    if (!mine.length) return tp0();
    const all = t.port; t.port = all.filter(p => p.kind !== 'stage');
    try { tp0(); } finally { t.port = all; }
    const cards = mine.slice().reverse().map(STG_PORT.card).join('');
    const box = document.querySelector('.tports');
    if (box) box.insertAdjacentHTML('afterbegin', cards);
    else { const e = document.querySelector('.tempty2'); if (e) e.outerHTML = `<div class="tports">${cards}</div>`; }
  };
  techProjectes.stg = 1;
  tPortOpen = function (id) { const p = TS_().port.find(x => x.id === id); if (p && p.kind === 'stage') return STG_PORT.open(p); return to0(id); };
}

/* ---------- El videojoc propi (unitat 8) ----------
   A «La idea i el pla» l'alumne tria el gènere, l'heroi, el premi, l'obstacle, el fons i el nom (pas stgplan).
   Amb això es crea el seu projecte (P.tech.stg.game) amb tres personatges de noms fixos —Heroi, Premi i Enemic—
   i les variables punts i vides; les sessions següents hi van afegint mecàniques i el guarden a cada canvi. */
const STG_MODES = {
  atrapa: { n: 'Atrapa-ho|Atrápalo', d: "L'heroi es mou a baix i atrapa els premis que cauen del cel.|El héroe se mueve abajo y atrapa los premios que caen del cielo.", hero: [0, -125], prize: [60, 150], enemy: [-120, 150] },
  esquiva: { n: 'Esquiva-ho|Esquívalo', d: "Cauen obstacles i l'heroi els ha d'esquivar tanta estona com pugui.|Caen obstáculos y el héroe tiene que esquivarlos tanto rato como pueda.", hero: [0, -125], prize: [150, 150], enemy: [-60, 150] },
  explora: { n: 'Explora|Explora', d: "L'heroi es mou per tot l'escenari buscant premis i fugint de l'obstacle.|El héroe se mueve por todo el escenario buscando premios y huyendo del obstáculo.", hero: [-150, -60], prize: [120, 80], enemy: [100, -100] }
};
const STG_PICK = { hero: ['drac', 'axo', 'nau', 'blub', 'gos', 'bit', 'lia', 'nil'], prize: ['estrella', 'moneda', 'fruita', 'cor', 'clau', 'bombolla'], enemy: ['meteorit', 'ratpenat', 'cranc', 'medusa', 'pilota', 'floc'], bg: ['espai', 'cel', 'mar', 'bosc', 'nit', 'volca', 'ciutat', 'parc', 'neu', 'castell', 'platja', 'estudi'] };
const STG_PLAN0 = { mode: 'explora', hero: 'drac', prize: 'estrella', enemy: 'meteorit', bg: 'cel', name: '', goal: 'punts', n: 10 };
function stgGameFromPlan(pl, base) {
  pl = { ...STG_PLAN0, ...(pl || {}) };
  const m = STG_MODES[pl.mode] || STG_MODES.explora, lab = ch => STG_CH[ch].l || STG_CH[ch].n;
  const p = base ? stgClone(base) : stgProj({ bg: pl.bg, bgs: [pl.bg], vars: [['punts', 0], ['vides', 3]], sprites: [
    { ch: pl.hero, name: 'Heroi', label: lab(pl.hero), x: m.hero[0], y: m.hero[1], size: pl.hero === 'lia' || pl.hero === 'nil' ? 70 : 90 },
    { ch: pl.prize, name: 'Premi', label: lab(pl.prize), x: m.prize[0], y: m.prize[1], size: 80 },
    { ch: pl.enemy, name: 'Enemic', label: lab(pl.enemy), x: m.enemy[0], y: m.enemy[1], size: 85 }] });
  p.plan = pl;
  return p;
}
if (typeof TSTEP !== 'undefined') {
  TSTEP.stgplan = function (st) {
    const g = stgS(), pl = { ...STG_PLAN0, ...(g.plan || {}) };
    if (!pl.name) pl.name = stgL(`El videojoc de ${P.name}`, `El videojuego de ${P.name}`);
    const tsb = $('#tsb'); tsb.classList.add('wide', 'stgw');
    const row = (k, title, items, lab, pic) => `<section class="stg-pls"><h3><span>${k}</span>${title}</h3><div class="stg-plr">${items.map(v => `<button class="stg-plo${pl[k === '1' ? 'mode' : k === '2' ? 'hero' : k === '3' ? 'prize' : k === '4' ? 'enemy' : 'bg'] === v ? ' on' : ''}" data-f="${k === '1' ? 'mode' : k === '2' ? 'hero' : k === '3' ? 'prize' : k === '4' ? 'enemy' : 'bg'}" data-v="${v}">${pic(v)}<b>${lab(v)}</b></button>`).join('')}</div></section>`;
    const draw = () => {
      tsb.innerHTML = `${stgQ(st, 'think')}<div class="stg-plan"><div class="stg-plp"><div class="stg-plst">${stgStill(stgGameFromPlan(pl))}</div><label class="stg-pll">${stgL('Nom del videojoc', 'Nombre del videojuego')}<input id="stgName" class="stg-in" maxlength="28" value="${stgEsc(pl.name)}"></label>
          <div class="stg-plg"><b>${stgL('Com es guanya?', '¿Cómo se gana?')}</b><div>${[['punts', stgL('Arribar a', 'Llegar a'), [5, 10, 20], stgL('punts', 'puntos')], ['temps', stgL('Aguantar', 'Aguantar'), [20, 30, 60], stgL('segons', 'segundos')]].map(([gk, a, ns, u]) => ns.map(n => `<button class="stg-plo sm${pl.goal === gk && pl.n === n ? ' on' : ''}" data-goal="${gk}" data-n="${n}">${a} <b>${n}</b> ${u}</button>`).join('')).join('')}</div></div>
          <p class="stg-plsum">${stgL('El teu pla', 'Tu plan')}: <b>${stgT(STG_MODES[pl.mode].n)}</b> · ${stgEsc(stgT(STG_CH[pl.hero].l || STG_CH[pl.hero].n))} ${stgL('busca', 'busca')} ${stgEsc(stgT(STG_CH[pl.prize].l || STG_CH[pl.prize].n)).toLowerCase()} ${stgL('i evita', 'y evita')} ${stgEsc(stgT(STG_CH[pl.enemy].l || STG_CH[pl.enemy].n)).toLowerCase()}.</p></div>
        <div class="stg-plc">${row('1', stgL('El gènere', 'El género'), Object.keys(STG_MODES), v => `${stgT(STG_MODES[v].n)}<small>${stgT(STG_MODES[v].d)}</small>`, v => `<span class="stg-plm m-${v}">${v === 'atrapa' ? '⬇️' : v === 'esquiva' ? '💨' : '🧭'}</span>`)}
          ${row('2', stgL("L'heroi (el controles tu)", 'El héroe (lo controlas tú)'), STG_PICK.hero, v => stgEsc(stgT(STG_CH[v].l || STG_CH[v].n)), v => stgThumb(v))}
          ${row('3', stgL('El premi (dona punts)', 'El premio (da puntos)'), STG_PICK.prize, v => stgEsc(stgT(STG_CH[v].l || STG_CH[v].n)), v => stgThumb(v))}
          ${row('4', stgL("L'obstacle (treu vides)", 'El obstáculo (quita vidas)'), STG_PICK.enemy, v => stgEsc(stgT(STG_CH[v].l || STG_CH[v].n)), v => stgThumb(v))}
          ${row('5', stgL('El fons', 'El fondo'), STG_PICK.bg, v => stgEsc(stgT(STG_BG[v].n)), v => stgBgThumb(v))}</div></div>`;
      tsb.querySelectorAll('.stg-plo[data-f]').forEach(b => b.onclick = () => { pl[b.dataset.f] = b.dataset.v; SFX.tap && SFX.tap(); keep(); draw(); });
      tsb.querySelectorAll('.stg-plo[data-goal]').forEach(b => b.onclick = () => { pl.goal = b.dataset.goal; pl.n = +b.dataset.n; SFX.tap && SFX.tap(); keep(); draw(); });
      const inp = tsb.querySelector('#stgName'); inp.oninput = () => { pl.name = inp.value; };
    };
    const keep = () => { const i = tsb.querySelector('#stgName'); if (i) pl.name = i.value; };
    draw();
    tFoot(stgL('Aquest és el meu pla!', '¡Este es mi plan!'), () => {
      keep(); pl.name = (pl.name || '').trim() || stgL('El meu videojoc', 'Mi videojuego');
      const old = g.plan; g.plan = { ...pl };
      if (!g.game || !old || ['mode', 'hero', 'prize', 'enemy', 'bg'].some(k => old[k] !== pl[k])) g.game = stgGameFromPlan(pl);
      else g.game.plan = { ...pl };
      save(); SFX.ok && SFX.ok(); addXPsafe(5); tNext();
    });
  };
  TSTEP.stgdiploma = function (st) {
    const g = stgS(), pl = g.plan || STG_PLAN0, game = g.game, c = TSS.c, done = tSessions(c).filter(s => tDone(s.id)).length;
    $('#tsb').innerHTML = `<div class="stg-dip"><div class="stg-dipc"><div class="stg-dipr"></div><img class="stg-dipb" src="img/tech/bit-win.webp" alt="">
      <p class="stg-dipk">Numi Tech · ${stgEsc(stgT(c.name))}</p><h1>${stgL('Diploma de creador/a de videojocs', 'Diploma de creador/a de videojuegos')}</h1>
      <p class="stg-dipn">${stgEsc(P.name)}</p><p class="stg-dipt">${stgL('ha programat i presentat el videojoc', 'ha programado y presentado el videojuego')}</p><p class="stg-dipg">«${stgEsc(pl.name || stgL('El meu videojoc', 'Mi videojuego'))}»</p>
      ${game ? `<div class="stg-dips">${stgStill(game)}</div><div class="stg-dipf"><span><b>${stgCount(game)}</b> ${stgL('blocs', 'bloques')}</span><span><b>${game.sprites.length}</b> ${stgL('personatges', 'personajes')}</span><span><b>${done + 1}</b> ${stgL('sessions', 'sesiones')}</span></div>` : ''}
      <p class="stg-dipd">${new Date().toLocaleDateString(LANG === 'es' ? 'es-ES' : 'ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p><div class="stg-seal">★</div></div></div>`;
    typeof confetti === 'function' && confetti(160); SFX.win && SFX.win();
    tFoot(stgL('Continua', 'Continúa'), tNext, true, `<button class="btn ghost" onclick="window.print()">${stgL('Imprimeix', 'Imprime')}</button>`);
  };
}

/* ---------- Animacions dels conceptes (TANI_STG) ----------
   SVG + CSS en bucle de 5,5 s, com les de tech-learn.js (classes .ta ta-pop/ta-in/ta-fade/ta-draw amb --t), més:
   · sta-hl: un bloc que s'il·lumina al seu moment (--t) · sta-mv: es desplaça (--dx, --dy) i torna · sta-bob: sura
   · sta-f2 / sta-f4: fotogrames d'un vestit que s'alternen (--i: número de fotograma) · sta-spin · sta-pulse
   Ajudes: sTst (un escenari en petit amb un fons), sTa (un personatge), sTb (un bloc), sTh (un bloc capçalera). */
const sTx = (s, n) => typeof tA === 'function' ? tA(s, n) : `class="ta ${n || 'ta-pop'}" style="--t:${s}s"`;
const sSvg = (h, body, cls = '') => { stgNeed(Object.keys(STG_CH).filter(k => body.includes('stgc-' + k + '-'))); return `<svg class="tani stani ${cls}" viewBox="0 0 320 ${h}" aria-hidden="true">${body}</svg>`; };
// un escenari en petit: x, y, amplada (l'alçada és 3/4), fons; inner fa servir coordenades de l'escenari de 480 × 360
const sTst = (x, y, w, bg, inner = '', id = '') => `<g transform="translate(${x} ${y})"><rect x="-5" y="-5" width="${w + 10}" height="${w * .75 + 10}" rx="12" fill="#1E2C70"/><svg x="0" y="0" width="${w}" height="${w * .75}" viewBox="0 0 480 360" ${id ? `id="${id}"` : ''}>${bg ? (STG_BG[bg] || STG_BG.estudi).d() : ''}${inner}</svg></g>`;
// un personatge (coordenades de l'escenari si és dins d'un sTst; si no, punt de l'animació)
const sTa = (x, y, ch, cos = 0, s = 1, stage = true, flip = false) => `<g transform="translate(${stage ? 240 + x : x} ${stage ? 180 - y : y}) scale(${flip ? -s : s} ${s})"><use href="#stgc-${ch}-${cos}"/></g>`;
const sCol = cat => (STG_CAT[cat] || STG_CAT.ctl).c;
const sTb = (x, y, w, cat, txt, t, extra = '') => `<g transform="translate(${x} ${y})"${t !== undefined ? ` class="sta-hl" style="--t:${t}s"` : ''} ${extra}><rect width="${w}" height="26" rx="8" fill="${sCol(cat)}"/><rect y="22" width="${w}" height="4" rx="2" fill="#000" opacity=".15"/><rect x="4" y="4" width="18" height="18" rx="5" fill="#fff" opacity=".28"/><text x="28" y="17.5" class="tat s" fill="${cat === 'ev' ? '#3A2600' : '#fff'}" style="fill:${cat === 'ev' ? '#3A2600' : '#fff'}">${txt}</text></g>`;
const sTh = (x, y, w, txt, t) => `<g transform="translate(${x} ${y})"${t !== undefined ? ` class="sta-hl" style="--t:${t}s"` : ''}><path d="M0 12Q0 0 14 0H${w - 10}Q${w} 0 ${w} 10V24Q${w} 30 ${w - 6} 30H6Q0 30 0 24Z" fill="${sCol('ev')}"/><rect x="5" y="7" width="18" height="18" rx="5" fill="#fff" opacity=".35"/><text x="29" y="21" class="tat s" style="fill:#3A2600">${txt}</text></g>`;
const sBub = (x, y, txt, t, w = 0) => { const W = w || txt.length * 7.2 + 18; return `<g ${sTx(t, 'ta-pop')}><g transform="translate(${x} ${y})"><rect width="${W}" height="26" rx="10" fill="#fff" stroke="#14204A" stroke-opacity=".25" stroke-width="2"/><path d="M10 25l-4 9l14 -9" fill="#fff" stroke="#14204A" stroke-opacity=".25" stroke-width="2"/><path d="M9 24l-3 8l12 -8z" fill="#fff"/><text x="${W / 2}" y="17.5" text-anchor="middle" class="tat s">${txt}</text></g></g>`; };
const sLab = (x, y, txt, t, col = '#2F5BEA') => `<g ${sTx(t, 'ta-in')}><rect x="${x - txt.length * 3.9 - 10}" y="${y - 15}" width="${txt.length * 7.8 + 20}" height="24" rx="12" fill="${col}"/><text x="${x}" y="${y + 2}" text-anchor="middle" class="tat w s">${txt}</text></g>`;
const sArr = (x1, y1, x2, y2, t, col = '#2F5BEA') => `<g ${sTx(t, 'ta-fade')}><path d="M${x1} ${y1}L${x2} ${y2}" stroke="${col}" stroke-width="3" stroke-dasharray="5 5" stroke-linecap="round"/><circle cx="${x2}" cy="${y2}" r="4" fill="${col}"/></g>`;
const sFinger = (x, y, t) => `<g class="sta-tap" style="--t:${t}s" transform="translate(${x} ${y})"><path d="M0 0v-18a5 5 0 0 1 10 0v12l8 2a5 5 0 0 1 4 6l-3 12H2L-8 4a4 4 0 0 1 6-5z" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2.4" stroke-linejoin="round"/></g>`;
const TANI_STG = {
  // l'escenari, els personatges, el fons i els programes
  stgEscenari() {
    return sSvg(220, `${sTst(14, 14, 200, 'parc', `<g ${sTx(.6)}>${sTa(-110, -40, 'axo', 0, 1.1)}</g><g ${sTx(1.1)}>${sTa(100, -10, 'drac', 0, 1)}</g><g ${sTx(1.6)}>${sTa(10, 90, 'estrella', 1, .8)}</g>`)}
      ${sLab(270, 34, stgL('escenari', 'escenario'), .3, '#1E2C70')}${sArr(240, 34, 214, 40, .4, '#1E2C70')}
      ${sLab(276, 98, stgL('personatges', 'personajes'), 1.9, '#F08A24')}${sArr(236, 98, 186, 110, 2, '#F08A24')}
      ${sLab(272, 160, stgL('fons', 'fondo'), 2.6, '#1FA463')}${sArr(248, 160, 200, 150, 2.7, '#1FA463')}
      <g ${sTx(3.3, 'ta-in')}>${sTh(20, 186, 132, stgL('Quan es prem ▶', 'Al pulsar ▶'))}${sTb(160, 188, 140, 'look', stgL('Digues Hola!', 'Di ¡Hola!'))}</g>`);
  },
  // un esdeveniment engega el programa: es prem ▶ i els blocs s'executen de dalt a baix
  stgEvent() {
    return sSvg(220, `<g transform="translate(18 22)"><rect width="96" height="44" rx="14" fill="#22A863"/><rect y="38" width="96" height="6" rx="3" fill="#157A45"/><path d="M36 10l26 12l-26 12z" fill="#fff"/></g>${sFinger(70, 78, .4)}
      ${sTh(14, 100, 150, stgL('Quan es prem ▶', 'Al pulsar ▶'), .9)}${sTb(14, 134, 150, 'look', stgL('Digues Hola!', 'Di ¡Hola!'), 1.5)}${sTb(14, 164, 150, 'mov', stgL('Avança 100 passos', 'Avanza 100 pasos'), 2.4)}
      ${sTst(180, 52, 128, 'estudi', `<g class="sta-mv" style="--t:2.4s;--dx:200px;--dy:0px">${sTa(-130, -20, 'axo', 0, 1.2)}</g>${sBub(-160 + 240, 60, stgL('Hola!', '¡Hola!'), 1.5, 90).replace(/class="tat s"/, 'class="tat" style="font-size:30px"').replace(/height="26"/, 'height="44"').replace(/y="17.5"/, 'y="31"')}`)}
      <path d="M8 104v86" stroke="#F2B21B" stroke-width="4" stroke-dasharray="4 6" class="ta-dash"/>`);
  },
  // l'ordre dels blocs: es fan d'un en un, de dalt a baix
  stgSeq() {
    const bl = [['look', stgL('Digues Hola! 1 s', 'Di ¡Hola! 1 s')], ['mov', stgL('Avança 80 passos', 'Avanza 80 pasos')], ['mov', stgL('Gira ↻ 90 graus', 'Gira ↻ 90 grados')], ['look', stgL('Digues Ja hi soc!', 'Di ¡Ya estoy!')]];
    return sSvg(220, `${sTh(10, 14, 150, stgL('Quan es prem ▶', 'Al pulsar ▶'), .3)}${bl.map(([c, t], i) => `<g transform="translate(0 ${i * 32})">${sTb(10, 48, 150, c, t, .9 + i * .9)}<text x="170" y="66" class="tat b" ${sTx(.9 + i * .9, 'ta-pop')} style="fill:#2F5BEA">${i + 1}</text></g>`).join('')}
      ${sTst(186, 40, 124, 'parc', `<g class="sta-mv" style="--t:1.8s;--dx:150px;--dy:0px"><g class="sta-rot" style="--t:2.7s">${sTa(-100, -40, 'drac', 0, 1.3)}</g></g>`)}`);
  },
  // esperar: sense «Espera» tot passa de cop; amb «Espera» es veu cada pas
  stgWait() {
    const lane = (y, title, wait, t0) => `<text x="12" y="${y}" class="tat b">${title}</text>
      ${sTst(12, y + 10, 112, 'estudi', `<g class="${wait ? 'sta-cos3' : 'sta-cos1'}">${[0, 1, 2].map(i => `<g class="sta-ci sta-i${i}">${sTa(-60 + i * 70, -20, 'axo', i === 2 ? 2 : 0, 1.3)}</g>`).join('')}</g>`)}
      ${[0, 1, 2].map(i => sTb(140, y + 10 + i * 26 + (wait ? i * 4 : 0), wait ? 120 : 150, 'mov', stgL('Avança 70', 'Avanza 70'), t0 + (wait ? i * 1.2 : 0))).join('')}${wait ? [0, 1].map(i => `<g transform="translate(266 ${y + 26 + i * 30})"><circle r="9" fill="#F08A24"/><path d="M0 -5v5l3 2" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></g>`).join('') : `<text x="296" y="${y + 52}" class="tat b" style="fill:#EF5A5A" ${sTx(t0 + .2)}>⚡</text>`}`;
    return sSvg(230, lane(18, stgL('Sense esperar: de cop!', 'Sin esperar: ¡de golpe!'), false, .6) + lane(128, stgL('Amb «Espera 1 s»: pas a pas', 'Con «Espera 1 s»: paso a paso'), true, 1.2));
  },
  // canviar de fons: l'escena canvia
  stgBackdrop() {
    return sSvg(214, `<g transform="translate(16 18)">${sTst(0, 0, 176, null, `<g class="sta-bga">${STG_BG.parc.d()}</g><g class="sta-bgb">${STG_BG.platja.d()}</g>${sTa(-40, -50, 'lia', 2, 1.2)}`)}</g>
      ${sTb(206, 40, 104, 'look', stgL('Canvia el fons a', 'Cambia el fondo a'), 2.2)}<g transform="translate(206 74)" ${sTx(2.4, 'ta-in')}><rect width="104" height="70" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><svg x="6" y="6" width="92" height="58" viewBox="0 0 480 360">${STG_BG.platja.d()}</svg></g>
      <text x="104" y="176" text-anchor="middle" class="tat b" ${sTx(3, 'ta-fade')}>${stgL('Escena 1 → escena 2', 'Escena 1 → escena 2')}</text>`);
  },
  // l'escena del principi: cada vegada que es prem ▶ tot torna a començar igual
  stgInicial() {
    return sSvg(214, `${sTst(14, 16, 190, 'quadricula', `<circle cx="${240 - 140}" cy="${180 + 30}" r="26" fill="none" stroke="#F08A24" stroke-width="5" stroke-dasharray="8 6"/><g class="sta-back" style="--dx:260px;--dy:-60px">${sTa(-140, -30, 'nau', 0, 1.1)}</g>`)}
      ${sLab(258, 46, stgL('lloc del principi', 'sitio del principio'), .4, '#F08A24')}<g transform="translate(220 80)"><rect width="84" height="38" rx="12" fill="#22A863"/><path d="M34 9l20 10l-20 10z" fill="#fff"/></g>${sFinger(268, 128, 3.6)}
      <text x="262" y="186" text-anchor="middle" class="tat s" ${sTx(3.9, 'ta-fade')}>${stgL('torna a començar', 'vuelve a empezar')}</text>`);
  }
};
// les animacions s'afegeixen a TANI (tech-learn.js) perquè també es puguin fer servir a les diapositives
if (typeof TANI !== 'undefined') Object.assign(TANI, TANI_STG);
