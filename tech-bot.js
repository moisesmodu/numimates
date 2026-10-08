/* ===== Numi Tech · en Bit, el robot de l'illa =====
   Un món de caselles, un llenguatge de blocs i un editor per tocs pensat per al mòbil (sense arrossegar).
   · Sense eval (la CSP no ho deixa): els programes són arbres de blocs i els executa un intèrpret propi, pas a pas,
     perquè es vegi quin bloc fa cada moviment.
   · Els mons s'escriuen com un mapa de text (vegeu BIT_MAP) per poder crear-ne molts de pressa. */

const BIT_DX = [0, 1, 0, -1], BIT_DY = [-1, 0, 1, 0];   // 0 amunt · 1 dreta · 2 avall · 3 esquerra
const BIT_C = 60;                                       // mida d'una casella (unitats del dibuix)
const bitKey = (x, y) => x + ',' + y;
/* Mapa: una fila per línia
   .  herba         #  camí (només dibuix)   R  roca          ~  aigua         T  arbre (sempre)
   *  estrella      o  fruita (es recull com les estrelles)  F  bandera (meta)
   b  caixa         H  casa (on es deixa la caixa)
   r g y u  terra de color (vermell, verd, groc, blau)
   ^ > v <  en Bit (sobre camí) mirant amunt, dreta, avall, esquerra
   A B C    marques per a «on acabarà?» (sobre camí)
   Camps opcionals de l'especificació (a més de map): target {casella: color} (dibuix), pen (deixa rastre), tune ['do','mi'…]
   (melodia que cal tocar), leds (cal encendre el llum del color de cada terra de color), count N (el comptador ha d'acabar
   valent N), cnt (mostra el comptador), evNeed {a:{led,note,goal}, b:{…}} (què ha de passar en prémer cada botó),
   evOnly (en Bit només es pot moure amb els botons), need [...] (força els objectius), paths:false (el «.» és herba). */
function bitWorld(spec) {
  if (typeof spec === 'string' || (spec && spec.mine)) spec = bot2Mine(spec);
  const rows = spec.map, W = { w: rows[0].length, h: rows.length, trees: new Set(), rocks: new Set(), water: new Set(), gems: new Set(), fruits: new Set(), boxes: new Set(), homes: new Set(),
    path: new Set(), floor: {}, marks: {}, goal: null, bot: [0, 0, 1], target: spec.target || null, need: spec.need || null, pen: !!spec.pen, max: spec.max || 0,
    tune: spec.tune || null, leds: !!spec.leds, count: spec.count == null ? null : spec.count, cnt: !!(spec.cnt || spec.count != null), evNeed: spec.evNeed || null, evOnly: !!spec.evOnly, spec };
  rows.forEach((r, y) => [...r].forEach((ch, x) => {
    const c = bitKey(x, y);
    if (ch === 'R') W.rocks.add(c); else if (ch === '~') W.water.add(c); else if (ch === 'T') W.trees.add(c);
    else if (ch === '*') { W.gems.add(c); W.path.add(c); } else if (ch === 'o') { W.gems.add(c); W.fruits.add(c); W.path.add(c); } else if (ch === 'F') { W.goal = [x, y]; W.path.add(c); }
    else if (ch === 'b') { W.boxes.add(c); W.path.add(c); } else if (ch === 'H') { W.homes.add(c); W.path.add(c); }
    else if (ch === '#') W.path.add(c);
    else if ('rgyu'.includes(ch)) { W.floor[c] = ch; W.path.add(c); }
    else if ('^>v<'.includes(ch)) { W.bot = [x, y, '^>v<'.indexOf(ch)]; W.path.add(c); }
    else if ('ABC'.includes(ch)) { W.marks[ch] = [x, y]; W.path.add(c); }
  }));
  if (spec.goal) W.goal = spec.goal;
  // si el mapa dibuixa un camí, cal anar-hi per dins: la resta són arbres (spec.paths:false ho desactiva)
  if (spec.paths !== false && rows.some(r => r.includes('#'))) rows.forEach((r, y) => [...r].forEach((ch, x) => { if (ch === '.') W.trees.add(bitKey(x, y)); }));
  return W;
}
function bitSim(W) {
  const [x, y, d] = W.bot, S = { x, y, d, ang: d * 90, carry: 0, gems: new Set(), boxes: new Set(W.boxes), done: new Set(), paint: {}, led: null, notes: [], n: 0, crash: null, trail: [bitKey(x, y)], cnt: 0, lit: {}, pc: 'p', evOk: {} };
  if (W.pen) S.paint[bitKey(x, y)] = 'p';
  return S;
}
const bitAhead = (S) => [S.x + BIT_DX[S.d], S.y + BIT_DY[S.d]];
const bitBlocked = (W, x, y) => x < 0 || y < 0 || x >= W.w || y >= W.h || W.rocks.has(bitKey(x, y)) || W.water.has(bitKey(x, y)) || W.trees.has(bitKey(x, y));
// una ordre simple; si no es pot fer, S.crash diu per què
function bitDo(W, S, b) {
  const here = bitKey(S.x, S.y);
  switch (b.k) {
    case 'fwd': {
      const [nx, ny] = bitAhead(S), c = bitKey(nx, ny);
      if (nx < 0 || ny < 0 || nx >= W.w || ny >= W.h) { S.crash = 'edge'; return; }
      if (W.rocks.has(c)) { S.crash = 'rock'; return; }
      if (W.trees.has(c)) { S.crash = 'tree'; return; }
      if (W.water.has(c)) { S.crash = 'water'; return; }
      S.x = nx; S.y = ny; S.trail.push(c);
      if (W.gems.has(c)) S.gems.add(c);
      if (W.pen) S.paint[c] = S.pc || 'p';
      return;
    }
    case 'left': S.d = (S.d + 3) % 4; S.ang -= 90; return;
    case 'right': S.d = (S.d + 1) % 4; S.ang += 90; return;
    case 'pick': if (S.carry) { S.crash = 'full'; return; } if (!S.boxes.has(here)) { S.crash = 'nobox'; return; } S.boxes.delete(here); S.carry = 1; return;
    case 'drop': if (!S.carry) { S.crash = 'empty'; return; } if (!W.homes.has(here) || S.done.has(here)) { S.crash = 'nohome'; return; } S.done.add(here); S.carry = 0; return;
    case 'paint': S.paint[here] = b.c || 'r'; S.pc = b.c || 'r'; return;
    case 'light': S.led = b.c || 'r'; S.lit[here] = S.led; return;
    case 'note': S.notes.push(b.n || 'do'); return;
    case 'inc': S.cnt += b.n || 1; return;
    case 'zero': S.cnt = 0; return;
    case 'wait': return;
  }
}
function bitCond(W, S, c) {
  const [nx, ny] = bitAhead(S), here = bitKey(S.x, S.y);
  const side = k => { const d = (S.d + k) % 4; return !bitBlocked(W, S.x + BIT_DX[d], S.y + BIT_DY[d]); };
  if (c === 'wall') return bitBlocked(W, nx, ny);
  if (c === 'free') return !bitBlocked(W, nx, ny);
  if (c === 'freeR') return side(1);
  if (c === 'freeL') return side(3);
  if (c === 'goal') return !!W.goal && S.x === W.goal[0] && S.y === W.goal[1];
  if (c === 'gem') return W.gems.has(here) && !W.fruits.has(here);
  if (c === 'fruit') return W.fruits.has(here);
  if (c === 'box') return S.boxes.has(here);
  if (c === 'home') return W.homes.has(here);
  if (c.startsWith('floor:')) return W.floor[here] === c.slice(6);
  if (c.startsWith('cnt:')) return S.cnt === +c.slice(4);
  return false;
}
// intèrpret: cada «yield» és un pas que es dibuixa (el bloc que s'executa i si ha mogut alguna cosa).
// Els bucles diuen també quina volta fan (it/of), per ensenyar-ho mentre corre.
function* bitRun(W, S, list, fns, depth = 0) {
  for (const b of list || []) {
    if (S.crash) return;
    if (++S.n > 600) { S.crash = 'long'; return; }
    if (b.k === 'rep') {
      for (let i = 0; i < (b.n || 1); i++) { yield { b, it: i + 1, of: b.n || 1 }; yield* bitRun(W, S, b.b, fns, depth); if (S.crash) return; }
      continue;
    }
    if (b.k === 'until') {
      let g = 0;
      while (!bitCond(W, S, b.c)) { if (++g > 80) { S.crash = 'loop'; return; } yield { b, it: g }; yield* bitRun(W, S, b.b, fns, depth); if (S.crash) return; }
      yield { b, stop: true }; continue;
    }
    if (b.k === 'if') { const ok = bitCond(W, S, b.c); yield { b, yes: ok }; yield* bitRun(W, S, ok ? b.b : b.e, fns, depth); continue; }
    if (b.k === 'call') { if (depth > 8) { S.crash = 'deep'; return; } if (!fns || !fns[b.f] || !fns[b.f].length) { S.crash = 'nofn'; yield { b }; return; } yield { b }; yield* bitRun(W, S, fns[b.f], fns, depth + 1); continue; }
    bitDo(W, S, b); yield { b, act: true };
  }
}
// què demana el repte: arribar a la bandera, totes les estrelles, totes les caixes a casa, el dibuix, la melodia…
function bitNeeds(W) {
  if (W.need) return W.need;
  return ['goal', 'gems', 'deliver', 'paint', 'tune', 'leds', 'count', 'ev'].filter(n => n === 'goal' ? W.goal : n === 'gems' ? W.gems.size : n === 'deliver' ? W.homes.size : n === 'paint' ? W.target
    : n === 'tune' ? W.tune : n === 'leds' ? W.leds : n === 'count' ? W.count != null : W.evNeed);
}
function bitMiss(W, S) {
  if (S.crash) return S.crash;
  for (const n of bitNeeds(W)) {
    if (n === 'goal' && !bitCond(W, S, 'goal')) return 'nogoal';
    if (n === 'gems' && S.gems.size < W.gems.size) return W.fruits.size ? 'nofruit' : 'nogems';
    if (n === 'deliver' && S.done.size < W.homes.size) return 'nodeliver';
    if (n === 'paint' && W.target && (!Object.entries(W.target).every(([c, v]) => S.paint[c] === v) || Object.keys(S.paint).some(c => !W.target[c]))) return 'nopaint';
    if (n === 'tune' && W.tune && S.notes.join(' ') !== W.tune.join(' ')) return 'notune';
    if (n === 'leds' && Object.entries(W.floor).some(([c, v]) => S.lit[c] !== v)) return 'noleds';
    if (n === 'count' && W.count != null && S.cnt !== W.count) return 'nocount';
    if (n === 'ev' && W.evNeed && Object.keys(W.evNeed).some(k => !S.evOk[k])) return 'noev';
  }
  return null;
}
// després de prémer un botó (esdeveniment): ha passat el que el repte demana per a aquest botó?
function bitEvCheck(W, S, key, before) {
  const want = W.evNeed && W.evNeed[key]; if (!want) return null;
  if (want.led && S.led !== want.led) return 'evled';
  if (want.note && S.notes.slice(before.notes).join(' ') !== [].concat(want.note).join(' ')) return 'evnote';
  if (want.turn && S.d === before.d) return 'evturn';
  if (want.move && S.x === before.x && S.y === before.y) return 'evmove';
  S.evOk[key] = 1; return null;
}
const BIT_WHY = {
  edge: ["Ai! M'he sortit del mapa.", '¡Ay! Me he salido del mapa.'],
  rock: ['Pam! He xocat amb una roca.', '¡Pum! He chocado con una roca.'],
  tree: ['Pam! He xocat amb un arbre. Cal anar pel camí.', '¡Pum! He chocado con un árbol. Hay que ir por el camino.'],
  water: ["Xof! M'he ficat a l'aigua. Els robots i l'aigua no s'avenen…", '¡Plof! Me he metido en el agua. Los robots y el agua no se llevan bien…'],
  full: ['Ja porto una caixa: primer l\'he de deixar.', 'Ya llevo una caja: primero tengo que dejarla.'],
  nobox: ['Aquí no hi ha cap caixa per agafar.', 'Aquí no hay ninguna caja que coger.'],
  empty: ['No porto cap caixa per deixar.', 'No llevo ninguna caja que dejar.'],
  nohome: ['Aquí no hi ha cap casa que esperi una caixa.', 'Aquí no hay ninguna casa que espere una caja.'],
  long: ['Uf, quin programa més llarg! M\'he cansat.', '¡Uf, qué programa más largo! Me he cansado.'],
  loop: ['Estic donant voltes i no s\'acaba mai…', 'Estoy dando vueltas y no se acaba nunca…'],
  deep: ['Massa funcions dins de funcions!', '¡Demasiadas funciones dentro de funciones!'],
  nofn: ['Aquesta funció encara és buida: posa-hi blocs a la seva definició.', 'Esta función aún está vacía: ponle bloques en su definición.'],
  nogoal: ["El programa s'ha acabat, però no he arribat a la bandera.", 'El programa ha terminado, pero no he llegado a la bandera.'],
  nogems: ['Encara queden estrelles per recollir.', 'Aún quedan estrellas por recoger.'],
  nofruit: ['Encara queda fruita per recollir.', 'Aún queda fruta por recoger.'],
  nodeliver: ['Encara queden caixes per repartir.', 'Aún quedan cajas por repartir.'],
  nopaint: ['El dibuix no és ben bé igual que el model.', 'El dibujo no es igual que el modelo.'],
  notune: ['La melodia no sona ben bé com la del model. Escolta-la nota a nota.', 'La melodía no suena igual que la del modelo. Escúchala nota a nota.'],
  noleds: ['Hi ha algun terra de color on no he encès el llum del mateix color.', 'Hay algún suelo de color donde no he encendido la luz del mismo color.'],
  nocount: ['El comptador no marca el número que tocava.', 'El contador no marca el número que tocaba.'],
  noev: ['Encara has de provar algun botó: prem A o B.', 'Aún tienes que probar algún botón: pulsa A o B.'],
  evled: ['En prémer el botó, el llum no s\'ha posat del color que demana el repte.', 'Al pulsar el botón, la luz no se ha puesto del color que pide el reto.'],
  evnote: ['En prémer el botó, no ha sonat la nota que demana el repte.', 'Al pulsar el botón, no ha sonado la nota que pide el reto.'],
  evturn: ['En prémer el botó, havia de girar.', 'Al pulsar el botón, tenía que girar.'],
  evmove: ['En prémer el botó, m\'havia de moure.', 'Al pulsar el botón, me tenía que mover.'],
  evonly: ["En aquest repte em mous amb els botons: a «Quan comença» no hi posis moviments.", 'En este reto me mueves con los botones: en «Cuando empieza» no pongas movimientos.']
};

/* ---------- Dibuix: l'illa d'en Bit, en perspectiva 3/4 ----------
   Terra vist des de dalt i les coses dretes (arbres, roques, cases, en Bit), amb volum, ombres i animacions suaus.
   L'illa flota sobre el mar (onades animades) i té un penya-segat de terra a sota.
   Tot el que canvia mentre corre el programa (estrelles, caixes, cases, bandera, pintura) es marca amb classes
   (data-c="x,y"): així les animacions CSS no es reinicien a cada pas i en Bit llisca d'una casella a l'altra. */
const BIT_COL = { r: '#EF5A5A', g: '#3CC47C', y: '#FFC531', u: '#3D8BFF', p: '#8B5CF6' };
const BW_M = 30, BW_CL = 22, BW_TOP = 18;   // mar al voltant · gruix del penya-segat · marge de dalt per a les coses altes
// atzar fix per casella (decoració que no canvia entre dibuixos)
const bwRnd = (x, y, k = 0) => { let h = (x * 374761393 + y * 668265263 + k * 2246822519) >>> 0; h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
const bitDefs = () => `<defs>
  <linearGradient id="bwSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FD3F7"/><stop offset="1" stop-color="#2E97DA"/></linearGradient>
  <linearGradient id="bwGrass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9EDB73"/><stop offset="1" stop-color="#7CC456"/></linearGradient>
  <linearGradient id="bwCliff" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B9814E"/><stop offset=".55" stop-color="#9A6538"/><stop offset="1" stop-color="#7A4C29"/></linearGradient>
  <linearGradient id="bwSand" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FBE7B7"/><stop offset="1" stop-color="#EFCF8C"/></linearGradient>
  <linearGradient id="bwPond" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4CB8EE"/><stop offset="1" stop-color="#2A86CF"/></linearGradient>
  <radialGradient id="bwLeaf" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#7FD45F"/><stop offset=".6" stop-color="#4FA83E"/><stop offset="1" stop-color="#2F7C2C"/></radialGradient>
  <radialGradient id="bwLeaf2" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#95E06E"/><stop offset="1" stop-color="#4C9E3A"/></radialGradient>
  <radialGradient id="bwRock" cx=".32" cy=".28" r=".85"><stop offset="0" stop-color="#E3E6EE"/><stop offset=".55" stop-color="#A9B0C0"/><stop offset="1" stop-color="#737B90"/></radialGradient>
  <linearGradient id="bwBot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#C5D4F8"/></linearGradient>
  <linearGradient id="bwBot2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#D9E4FF"/><stop offset=".5" stop-color="#FFFFFF"/><stop offset="1" stop-color="#C2D1F6"/></linearGradient>
  <linearGradient id="bwVisor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B3F86"/><stop offset="1" stop-color="#16235A"/></linearGradient>
  <radialGradient id="bwStar" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#FFF6C2"/><stop offset=".5" stop-color="#FFD54A"/><stop offset="1" stop-color="#F29A12"/></radialGradient>
  <radialGradient id="bwGlow"><stop offset="0" stop-color="#FFE680" stop-opacity=".75"/><stop offset="1" stop-color="#FFE680" stop-opacity="0"/></radialGradient>
  <linearGradient id="bwWood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E0A866"/><stop offset="1" stop-color="#B57536"/></linearGradient>
  <linearGradient id="bwRoof" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F26B5B"/><stop offset="1" stop-color="#C9443A"/></linearGradient>
  <linearGradient id="bwWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF8E8"/><stop offset="1" stop-color="#F1E2C4"/></linearGradient>
  <filter id="bwSh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#0B2A12" flood-opacity=".28"/></filter>
</defs>`;
// en Bit dret, en les 4 vistes (0 d'esquena, 1 dreta, 2 de cara, 3 esquerra). L'origen són els peus.
function bitBot(d = 2, led, carry) {
  const ledc = led ? BIT_COL[led] : '#FFC531';
  const wheels = `<rect x="-17" y="-10" width="11" height="11" rx="4" fill="#2A3557"/><rect x="6" y="-10" width="11" height="11" rx="4" fill="#2A3557"/>`;
  const ant = `<path d="M0 -55V-63" stroke="#20306A" stroke-width="2.6" stroke-linecap="round"/><circle cy="-65" r="4.4" fill="${ledc}" stroke="#20306A" stroke-width="2.2" class="bant"/>`;
  const box = carry ? `<g class="bcarry" transform="translate(0 -78)"><rect x="-12" y="-10" width="24" height="18" rx="3" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2"/><path d="M0 -10V8M-12 -2H12" stroke="#F6DCA8" stroke-width="3"/></g>` : '';
  let v;
  if (d === 0) v = `${wheels}<rect x="-16" y="-31" width="32" height="24" rx="8" fill="url(#bwBot)" stroke="#20306A" stroke-width="2.6"/><path d="M-8 -24h16M-8 -19h16M-8 -14h16" stroke="#9FB2E6" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="-20" y="-55" width="40" height="27" rx="11" fill="url(#bwBot)" stroke="#20306A" stroke-width="2.6"/><circle cx="-8" cy="-42" r="2.2" fill="#9FB2E6"/><circle cx="0" cy="-42" r="2.2" fill="#9FB2E6"/><circle cx="8" cy="-42" r="2.2" fill="#9FB2E6"/>${ant}`;
  else if (d === 2) v = `${wheels}<path d="M-16 -24l-7 9" stroke="#20306A" stroke-width="4.5" stroke-linecap="round"/><path d="M16 -24l7 9" stroke="#20306A" stroke-width="4.5" stroke-linecap="round"/><circle cx="-23.5" cy="-14.5" r="3.6" fill="#FFC531" stroke="#20306A" stroke-width="2"/><circle cx="23.5" cy="-14.5" r="3.6" fill="#FFC531" stroke="#20306A" stroke-width="2"/>
      <rect x="-16" y="-31" width="32" height="24" rx="8" fill="url(#bwBot)" stroke="#20306A" stroke-width="2.6"/><circle cy="-19" r="5" fill="${ledc}" stroke="#20306A" stroke-width="2.2" class="bled"/>
      <rect x="-20" y="-55" width="40" height="27" rx="11" fill="url(#bwBot)" stroke="#20306A" stroke-width="2.6"/><rect x="-15" y="-51" width="30" height="18" rx="7" fill="url(#bwVisor)"/>
      <g class="beye"><ellipse cx="-6.5" cy="-43" rx="3.4" ry="4.4" fill="#7DF3FF"/><ellipse cx="6.5" cy="-43" rx="3.4" ry="4.4" fill="#7DF3FF"/><circle cx="-5.4" cy="-44.6" r="1.2" fill="#fff"/><circle cx="7.6" cy="-44.6" r="1.2" fill="#fff"/></g>
      <path d="M-4 -37q4 3 8 0" stroke="#7DF3FF" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M-15 -51q15 -6 30 0" stroke="#fff" stroke-width="2" fill="none" opacity=".25"/>${ant}`;
  else v = `<g transform="scale(${d === 3 ? -1 : 1} 1)"><circle cx="-4" cy="-6" r="7.5" fill="#2A3557"/><circle cx="-4" cy="-6" r="2.6" fill="#8796C4"/>
      <rect x="-14" y="-31" width="26" height="24" rx="8" fill="url(#bwBot2)" stroke="#20306A" stroke-width="2.6"/><circle cx="7" cy="-19" r="4" fill="${ledc}" stroke="#20306A" stroke-width="2" class="bled"/>
      <path d="M-2 -24l8 9" stroke="#20306A" stroke-width="4.5" stroke-linecap="round"/><circle cx="6.5" cy="-14.5" r="3.6" fill="#FFC531" stroke="#20306A" stroke-width="2"/>
      <rect x="-16" y="-55" width="32" height="27" rx="11" fill="url(#bwBot2)" stroke="#20306A" stroke-width="2.6"/><rect x="0" y="-51" width="15" height="18" rx="6" fill="url(#bwVisor)"/>
      <g class="beye"><ellipse cx="8.5" cy="-43" rx="3" ry="4.4" fill="#7DF3FF"/><circle cx="9.5" cy="-44.6" r="1.1" fill="#fff"/></g>${ant}</g>`;
  const glow = led ? `<circle cy="-34" r="34" fill="${ledc}" opacity=".22" class="bglow"/>` : '';
  return `<ellipse cx="0" cy="0" rx="20" ry="5.5" fill="#0B2A12" opacity=".25"/>${glow}<g class="bsp">${v}${box}</g>`;
}
// terra de cada casella (sense les coses dretes)
function bitGround(W, x, y) {
  const c = bitKey(x, y), X = x * BIT_C, Y = y * BIT_C;
  if (W.water.has(c)) return `<rect x="${X + 2}" y="${Y + 2}" width="${BIT_C - 4}" height="${BIT_C - 4}" rx="14" fill="url(#bwPond)"/><g class="bwrip"><path d="M${X + 12} ${Y + 26}q6 -5 12 0t12 0t12 0" fill="none" stroke="#BDEBFF" stroke-width="2.6" stroke-linecap="round"/><path d="M${X + 18} ${Y + 42}q6 -5 12 0t12 0" fill="none" stroke="#BDEBFF" stroke-width="2.6" stroke-linecap="round" opacity=".7"/></g>`;
  let h = (x + y) % 2 ? `<rect x="${X}" y="${Y}" width="${BIT_C}" height="${BIT_C}" fill="#000" opacity=".035"/>` : '';
  if (W.path.has(c)) {
    const f = W.floor[c];
    h += f ? `<rect x="${X + 4}" y="${Y + 4}" width="${BIT_C - 8}" height="${BIT_C - 8}" rx="12" fill="${BIT_COL[f]}" stroke="${exvMixT(BIT_COL[f], -.25)}" stroke-width="2.5"/><rect x="${X + 10}" y="${Y + 9}" width="${BIT_C - 20}" height="9" rx="4.5" fill="#fff" opacity=".35"/>`
      : `<rect x="${X + 3}" y="${Y + 3}" width="${BIT_C - 6}" height="${BIT_C - 6}" rx="12" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.5"/>` + [0, 1, 2].map(k => bwRnd(x, y, k) < .55 ? `<ellipse cx="${X + 12 + bwRnd(x, y, k + 3) * 40}" cy="${Y + 12 + bwRnd(x, y, k + 6) * 40}" rx="${2 + bwRnd(x, y, k + 9) * 2}" ry="1.6" fill="#D9B26A" opacity=".7"/>` : '').join('');
  } else if (!W.rocks.has(c) && !W.trees.has(c)) {
    // flors i brins d'herba (sempre els mateixos a cada casella)
    if (bwRnd(x, y) < .35) { const fx = X + 12 + bwRnd(x, y, 1) * 38, fy = Y + 14 + bwRnd(x, y, 2) * 36, col = ['#FF8FB1', '#FFFFFF', '#FFD54A', '#B79CFF'][Math.floor(bwRnd(x, y, 3) * 4)];
      h += `<g transform="translate(${fx} ${fy})"><circle r="2.6" cx="-3" fill="${col}"/><circle r="2.6" cx="3" fill="${col}"/><circle r="2.6" cy="-3" fill="${col}"/><circle r="2.6" cy="3" fill="${col}"/><circle r="1.9" fill="#F5A623"/></g>`; }
    if (bwRnd(x, y, 5) < .6) { const gx = X + 8 + bwRnd(x, y, 6) * 44, gy = Y + 20 + bwRnd(x, y, 7) * 36; h += `<path d="M${gx} ${gy}l-2 -6M${gx + 3} ${gy}l0 -8M${gx + 6} ${gy}l2 -6" stroke="#5FA841" stroke-width="2" stroke-linecap="round"/>`; }
  }
  if (W.target && W.target[c]) h += `<rect x="${X + 9}" y="${Y + 9}" width="${BIT_C - 18}" height="${BIT_C - 18}" rx="9" fill="${BIT_COL[W.target[c]]}" fill-opacity=".14" stroke="${BIT_COL[W.target[c]]}" stroke-width="3" stroke-dasharray="7 6"/>`;
  return h;
}
const exvMixT = (hex, t) => { const n = parseInt(hex.slice(1), 16), f = v => Math.max(0, Math.min(255, Math.round(t < 0 ? v * (1 + t) : v + (255 - v) * t))); return '#' + [n >> 16, (n >> 8) & 255, n & 255].map(f).map(v => v.toString(16).padStart(2, '0')).join(''); };
// les coses dretes de cada casella, ancorades a la part de baix
function bitThing(W, x, y) {
  const c = bitKey(x, y), cx = x * BIT_C + BIT_C / 2, by = y * BIT_C + BIT_C - 6, k = bwRnd(x, y, 11);
  if (W.trees.has(c)) {
    const s = .88 + k * .2;
    return `<g class="btree" style="--d:${(-k * 3).toFixed(2)}s" transform="translate(${cx} ${by}) scale(${s.toFixed(2)})"><ellipse cx="2" cy="0" rx="20" ry="6" fill="#0B2A12" opacity=".25"/><path d="M-3.5 0V-16h7V0z" fill="#8A5A33"/><g class="bsway">
      <circle cx="-9" cy="-24" r="13" fill="url(#bwLeaf)"/><circle cx="9" cy="-26" r="13" fill="url(#bwLeaf)"/><circle cx="0" cy="-38" r="15" fill="url(#bwLeaf2)"/><circle cx="-5" cy="-43" r="5" fill="#C9F2A6" opacity=".55"/>
      ${k < .3 ? `<circle cx="7" cy="-30" r="3" fill="#FF6B5B"/><circle cx="-8" cy="-22" r="3" fill="#FF6B5B"/>` : ''}</g></g>`;
  }
  if (W.rocks.has(c)) return `<g transform="translate(${cx} ${by})"><ellipse cx="2" cy="0" rx="22" ry="6" fill="#0B2A12" opacity=".25"/><path d="M-21 -2Q-24 -24 -6 -31Q12 -36 20 -18Q25 -4 16 -1L-14 0Q-20 0 -21 -2Z" fill="url(#bwRock)" stroke="#5E667A" stroke-width="2"/>
      <path d="M-11 -22q7 -7 15 -5" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>${k < .5 ? `<path d="M-18 -6q6 -6 14 -3" stroke="#7DBB55" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/>` : ''}</g>`;
  if (W.homes.has(c)) return `<g class="bhome" data-c="${c}" transform="translate(${cx} ${by})"><ellipse cx="2" cy="0" rx="24" ry="6" fill="#0B2A12" opacity=".25"/>
      <rect x="-19" y="-30" width="38" height="30" rx="3" fill="url(#bwWall)" stroke="#8E6A3A" stroke-width="2"/><path d="M-24 -28L0 -48L24 -28Z" fill="url(#bwRoof)" stroke="#8E2A22" stroke-width="2" stroke-linejoin="round"/>
      <rect x="9" y="-50" width="6" height="12" fill="#B05A3C"/><g class="bsmoke"><circle cx="12" cy="-56" r="4" fill="#fff" opacity=".8"/><circle cx="15" cy="-63" r="5" fill="#fff" opacity=".6"/></g>
      <rect x="-5" y="-17" width="10" height="17" rx="2" fill="#B07A3E"/><rect x="-15" y="-24" width="8" height="8" rx="1.5" class="bwin" fill="#9ED3F2" stroke="#8E6A3A" stroke-width="1.5"/><rect x="7" y="-24" width="8" height="8" rx="1.5" class="bwin" fill="#9ED3F2" stroke="#8E6A3A" stroke-width="1.5"/>
      <g class="bok" transform="translate(16 -52)"><circle r="10" fill="#3CC47C" stroke="#fff" stroke-width="2.5"/><path d="M-5 0l3 4l6 -7" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g></g>`;
  return '';
}
// coses que poden desaparèixer o canviar: estrelles, caixes, bandera
function bitItems(W) {
  let h = '';
  if (W.goal) { const [x, y] = W.goal, cx = x * BIT_C + BIT_C / 2, by = y * BIT_C + BIT_C - 8;
    h += `<g class="bflag" transform="translate(${cx - 6} ${by})"><ellipse cx="6" cy="1" rx="13" ry="4" fill="#0B2A12" opacity=".25"/><ellipse cx="2" cy="-1" rx="7" ry="3.5" fill="#8C93A6"/><rect x="0" y="-46" width="4" height="46" rx="2" fill="#5B4636"/><circle cx="2" cy="-47" r="3.5" fill="#FFC531"/>
      <path class="bfl" d="M4 -44 Q16 -48 28 -42 Q20 -36 30 -30 Q16 -34 4 -30Z" fill="#EF5A5A" stroke="#A9302A" stroke-width="1.6" stroke-linejoin="round"/></g>`; }
  for (const c of W.gems) { const [x, y] = c.split(',').map(Number), cx = x * BIT_C + BIT_C / 2, cy = y * BIT_C + BIT_C / 2;
    if (W.fruits.has(c)) { h += `<g class="bgem bfruit" data-c="${c}" transform="translate(${cx} ${cy})"><ellipse cy="20" rx="11" ry="3.5" fill="#0B2A12" opacity=".2"/><g class="bgf" style="--d:${(-bwRnd(x, y, 4) * 2).toFixed(2)}s"><g class="bgs"><path d="M0 -8C-6 -13 -16 -10 -16 1C-16 11 -8 17 0 14C8 17 16 11 16 1C16 -10 6 -13 0 -8Z" fill="#EF4B4B" stroke="#A82A2A" stroke-width="2"/><path d="M-8 -3q-3 5 0 10" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".7"/><path d="M0 -8q0 -6 3 -9" stroke="#6B3F20" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M2 -13q7 -6 11 -1q-6 4 -11 1z" fill="#4FAE45"/></g></g></g>`; continue; }
    h += `<g class="bgem" data-c="${c}" transform="translate(${cx} ${cy})"><ellipse cy="20" rx="11" ry="3.5" fill="#0B2A12" opacity=".2"/><g class="bgf" style="--d:${(-bwRnd(x, y, 4) * 2).toFixed(2)}s"><circle r="20" fill="url(#bwGlow)"/><g class="bgs"><path d="M0 -16L4.8 -6L16 -4.8L7.6 2.8L10 14L0 8.4L-10 14L-7.6 2.8L-16 -4.8L-4.8 -6Z" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2" stroke-linejoin="round"/><path d="M-3 -6l2.4 -5" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".8"/></g></g></g>`; }
  for (const c of W.boxes) { const [x, y] = c.split(',').map(Number), cx = x * BIT_C + BIT_C / 2, by = y * BIT_C + BIT_C - 10;
    h += `<g class="bbox" data-c="${c}" transform="translate(${cx} ${by})"><ellipse cx="2" cy="1" rx="18" ry="5" fill="#0B2A12" opacity=".25"/><path d="M-15 -26h30l0 26h-30z" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2" stroke-linejoin="round"/><path d="M-15 -26l5 -6h30l-5 6z" fill="#EDBB7A" stroke="#7A4A1E" stroke-width="2" stroke-linejoin="round"/><path d="M15 -26l5 -6v26l-5 6z" fill="#A86A33" stroke="#7A4A1E" stroke-width="2" stroke-linejoin="round"/><path d="M0 -26V0M-15 -13H15" stroke="#F6DCA8" stroke-width="3.2"/></g>`; }
  return h;
}
const bitXY = S => `translate(${S.x * BIT_C + BIT_C / 2}px,${S.y * BIT_C + BIT_C - 7}px)`;
// opts: marks (lletres per triar), still (sense animacions: miniatures)
function bitSVG(W, S, o = {}) {
  const w = W.w * BIT_C, h = W.h * BIT_C;
  let ground = '', things = '';
  for (let y = 0; y < W.h; y++) for (let x = 0; x < W.w; x++) { ground += bitGround(W, x, y); things += bitThing(W, x, y); }
  const waves = [0, 1, 2, 3].map(i => `<path class="bwave" style="--d:${-i * 1.1}s" d="M${-BW_M - 40} ${(i % 2 ? h + BW_CL + 14 : -BW_TOP - 6) + (i > 1 ? 10 : 0)} ${Array.from({ length: Math.ceil((w + 2 * BW_M + 80) / 28) }, () => 'q7 -5 14 0t14 0').join(' ')}" fill="none" stroke="#C9F1FF" stroke-width="2.4" stroke-linecap="round" opacity=".55"/>`).join('');
  const marks = o.marks ? Object.entries(W.marks).map(([k, [x, y]]) => `<g class="bmark" data-m="${k}" transform="translate(${x * BIT_C + BIT_C / 2} ${y * BIT_C + BIT_C / 2})"><circle r="19" fill="#fff" stroke="#20306A" stroke-width="3.2" filter="url(#bwSh)"/><text y="7.5" text-anchor="middle" font-size="21" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#20306A">${k}</text></g>`).join('') : '';
  // la pintura del llapis (s'hi afegeix mentre corre)
  const paint = Object.entries(S.paint || {}).map(([c, v]) => bitPaintCell(c, v)).join('');
  return `<svg class="bitw${o.still ? ' still' : ''}" viewBox="${-BW_M} ${-BW_M - BW_TOP} ${w + 2 * BW_M} ${h + 2 * BW_M + BW_TOP + BW_CL}" role="img" aria-label="${L("El món d'en Bit", 'El mundo de Bit')}">${bitDefs()}
    <rect x="${-BW_M}" y="${-BW_M - BW_TOP}" width="${w + 2 * BW_M}" height="${h + 2 * BW_M + BW_TOP + BW_CL}" rx="22" fill="url(#bwSea)"/>${waves}
    <rect x="-6" y="${h - 14}" width="${w + 12}" height="${BW_CL + 26}" rx="20" fill="#0B3A66" opacity=".22"/>
    <rect x="-3" y="${h - 16}" width="${w + 6}" height="${BW_CL + 18}" rx="18" fill="url(#bwCliff)"/><path d="M8 ${h + 8}h${w - 16}M20 ${h + 15}h${w - 40}" stroke="#6B3F20" stroke-width="2" stroke-dasharray="14 10" opacity=".35"/>
    <rect x="-4" y="-4" width="${w + 8}" height="${h + 8}" rx="18" fill="#6DB64A"/><rect x="0" y="0" width="${w}" height="${h}" rx="15" fill="url(#bwGrass)"/>
    <g class="bground">${ground}</g><g class="bpaint">${paint}</g><g class="bthings">${things}</g><g class="bitems">${bitItems(W)}</g><g class="bfx"></g>${marks}
    <g class="bbot d${S.d}" style="transform:${bitXY(S)}">${bitBot(S.d, S.led, S.carry)}</g></svg>`;
}
const bitPaintCell = (c, v) => { const [x, y] = c.split(',').map(Number); return `<rect class="bpc" data-c="${c}" x="${x * BIT_C + 7}" y="${y * BIT_C + 7}" width="${BIT_C - 14}" height="${BIT_C - 14}" rx="10" fill="${BIT_COL[v] || BIT_COL.p}" opacity=".92"/>`; };
// efecte d'una sola vegada (espurnes, pols, cor…) en una casella
function bitFx(svg, x, y, kind) {
  const fx = svg.querySelector('.bfx'); if (!fx || (typeof REDUCED !== 'undefined' && REDUCED)) return;
  const cx = x * BIT_C + BIT_C / 2, cy = y * BIT_C + BIT_C / 2, g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('transform', `translate(${cx} ${cy})`); g.setAttribute('class', 'bfx-' + kind);
  const n = kind === 'star' ? 10 : kind === 'dust' ? 7 : 8;
  g.innerHTML = Array.from({ length: n }, (_, i) => { const a = i / n * Math.PI * 2, r = kind === 'dust' ? 22 : 30;
    if (kind === 'note') return i < 3 ? `<g class="bp" style="--x:${(i - 1) * 18}px;--y:${-40 - i * 8}px"><path d="M-2 6V-10l10 -3V3" stroke="${['#14A3B8', '#8B5CF6', '#E5489A'][i]}" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="-5" cy="6" rx="4.5" ry="3.5" fill="${['#14A3B8', '#8B5CF6', '#E5489A'][i]}"/></g>` : '';
    const sh = kind === 'star' ? `<path d="M0 -5L1.5 -1.5L5 0L1.5 1.5L0 5L-1.5 1.5L-5 0L-1.5 -1.5Z" fill="${i % 2 ? '#FFE16B' : '#fff'}"/>` : kind === 'dust' ? `<circle r="${4 + (i % 3)}" fill="#E8E1D2"/>` : kind === 'heart' ? `<path d="M0 3C-6 -2 -4 -7 0 -4C4 -7 6 -2 0 3Z" fill="#FF6B8B"/>` : `<circle r="3.5" fill="${['#FFC531', '#3CC47C', '#3D8BFF', '#EF5A5A'][i % 4]}"/>`;
    return `<g class="bp" style="--x:${(Math.cos(a) * r).toFixed(1)}px;--y:${(Math.sin(a) * r - (kind === 'heart' ? 18 : 0)).toFixed(1)}px">${sh}</g>`; }).join('') + (kind === 'star' ? `<text class="bplus" y="-26" text-anchor="middle" font-size="16" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#fff" stroke="#C9780E" stroke-width="4" paint-order="stroke">+1</text>` : '');
  fx.appendChild(g); setTimeout(() => g.remove(), 1100);
}
// actualitza el món a l'estat actual sense refer-lo (així les transicions i les animacions continuen)
function bitPaintState(svg, W, S, prev) {
  svg.querySelectorAll('.bgem').forEach(e => { const got = S.gems.has(e.dataset.c); if (got && !e.classList.contains('got')) { const [x, y] = e.dataset.c.split(',').map(Number); bitFx(svg, x, y, 'star'); bitSnd('coin'); } e.classList.toggle('got', got); });
  svg.querySelectorAll('.bbox').forEach(e => e.classList.toggle('gone', !S.boxes.has(e.dataset.c)));
  svg.querySelectorAll('.bhome').forEach(e => { const ok = S.done.has(e.dataset.c); if (ok && !e.classList.contains('done')) { const [x, y] = e.dataset.c.split(',').map(Number); bitFx(svg, x, y, 'heart'); bitSnd('ok'); } e.classList.toggle('done', ok); });
  const fl = svg.querySelector('.bflag'); if (fl) fl.classList.toggle('ok', !!W.goal && S.x === W.goal[0] && S.y === W.goal[1]);
  const pl = svg.querySelector('.bpaint'); if (pl) { const have = new Set([...pl.children].map(e => e.dataset.c)); for (const [c, v] of Object.entries(S.paint)) if (!have.has(c)) pl.insertAdjacentHTML('beforeend', bitPaintCell(c, v)); [...pl.children].forEach(e => { if (!S.paint[e.dataset.c]) e.remove(); }); }
  const g = svg.querySelector('.bbot'); if (!g) return;
  const turned = !prev || prev.d !== S.d, moved = prev && (prev.x !== S.x || prev.y !== S.y);
  g.style.transform = bitXY(S);
  g.setAttribute('class', `bbot d${S.d}`);
  if (turned || !prev || prev.carry !== S.carry || prev.led !== S.led) g.innerHTML = bitBot(S.d, S.led, S.carry);
  const sp = g.querySelector('.bsp');
  if (sp) { sp.classList.remove('walk', 'turn', 'hit', 'yay'); void sp.getBoundingClientRect(); if (moved) sp.classList.add('walk'); else if (turned && prev) sp.classList.add('turn'); }
}

/* sons del robot (Web Audio, sense fitxers): motor, gir, xoc i notes; els d'encert/premi són els de Numi (SFX) */
let BSND = null;
function bitSnd(k, n) {
  if (typeof P !== 'undefined' && P && P.sound === false) return;
  if (k === 'coin' || k === 'ok' || k === 'win' || k === 'ko') return SFX[k] && SFX[k]();
  try {
    const ctx = BSND = BSND || new (window.AudioContext || window.webkitAudioContext)(); if (ctx.state === 'suspended') ctx.resume();
    const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain(); o.connect(g); g.connect(ctx.destination);
    const env = (a, d, v) => { g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(v, t + a); g.gain.exponentialRampToValueAtTime(.0001, t + a + d); o.start(t); o.stop(t + a + d + .05); };
    if (k === 'step') { o.type = 'triangle'; o.frequency.setValueAtTime(260, t); o.frequency.exponentialRampToValueAtTime(420, t + .16); env(.01, .18, .07); }
    else if (k === 'turn') { o.type = 'sine'; o.frequency.setValueAtTime(620, t); o.frequency.setValueAtTime(880, t + .07); env(.005, .14, .06); }
    else if (k === 'hit') { o.type = 'square'; o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(60, t + .25); env(.005, .28, .09); }
    else if (k === 'act') { o.type = 'sine'; o.frequency.setValueAtTime(520, t); o.frequency.exponentialRampToValueAtTime(1040, t + .12); env(.005, .16, .08); }
    else if (k === 'note') { const f = { do: 523.3, re: 587.3, mi: 659.3, fa: 698.5, sol: 784, la: 880, si: 987.8 }[n] || 523.3; o.type = 'triangle'; o.frequency.setValueAtTime(f, t); env(.01, .45, .12); }
  } catch (e) { }
}

/* ---------- Blocs ---------- */
const BIT_ICO = {
  fwd: '<svg viewBox="0 0 24 24"><path d="M12 3l7 9h-4.5v9h-5v-9H5z" fill="currentColor"/></svg>',
  left: '<svg viewBox="0 0 24 24"><path d="M9 4L3 10l6 6v-4h5a4 4 0 0 1 4 4v5h3v-5a7 7 0 0 0-7-7H9z" fill="currentColor"/></svg>',
  right: '<svg viewBox="0 0 24 24"><path d="M15 4l6 6-6 6v-4h-5a4 4 0 0 0-4 4v5H3v-5a7 7 0 0 1 7-7h5z" fill="currentColor"/></svg>',
  pick: '<svg viewBox="0 0 24 24"><path d="M4 9h16v11H4z" fill="currentColor" opacity=".35"/><path d="M4 9h16v11H4zM12 9v11M12 2v5M9 4l3-3 3 3" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/></svg>',
  drop: '<svg viewBox="0 0 24 24"><path d="M4 11h16v10H4z" fill="currentColor" opacity=".35"/><path d="M4 11h16v10H4zM12 11v10M12 1v6M9 5l3 3 3-3" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/></svg>',
  rep: '<svg viewBox="0 0 24 24"><path d="M17 3l4 4-4 4V8H8a3 3 0 0 0-3 3v1H2v-1a6 6 0 0 1 6-6h9zM7 21l-4-4 4-4v3h9a3 3 0 0 0 3-3v-1h3v1a6 6 0 0 1-6 6H7z" fill="currentColor"/></svg>',
  until: '<svg viewBox="0 0 24 24"><path d="M17 3l4 4-4 4V8H8a3 3 0 0 0-3 3v1H2v-1a6 6 0 0 1 6-6h9z" fill="currentColor"/><path d="M8 14h3v7H8zM13 14h3v7h-3z" fill="currentColor"/></svg>',
  if: '<svg viewBox="0 0 24 24"><path d="M12 2l10 10-10 10L2 12z" fill="none" stroke="currentColor" stroke-width="2.4"/><text x="12" y="16.5" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">?</text></svg>',
  paint: '<svg viewBox="0 0 24 24"><path d="M14 3l7 7-8 8-7-7z" fill="currentColor"/><path d="M6 13c-3 1-3 5-4 8 3-1 7-1 8-4" fill="currentColor" opacity=".6"/></svg>',
  light: '<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z" fill="currentColor"/><path d="M9 20h6v2H9z" fill="currentColor"/></svg>',
  note: '<svg viewBox="0 0 24 24"><path d="M9 3v12.3A3.5 3.5 0 1 0 11 18V8h8V3z" fill="currentColor"/></svg>',
  call: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M8 10h8M8 14h5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  inc: '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>',
  zero: '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="2.4"/><ellipse cx="12" cy="12" rx="3.4" ry="4.2" fill="none" stroke="currentColor" stroke-width="2.6"/></svg>',
  wait: '<svg viewBox="0 0 24 24"><path d="M6 2h12v4l-4 6 4 6v4H6v-4l4-6-4-6z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M9 19h6l-3-4z" fill="currentColor"/></svg>',
  start: '<svg viewBox="0 0 24 24"><path d="M5 3v18" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M6 4h12l-3 4 3 4H6z" fill="currentColor"/></svg>',
  btnA: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5" fill="currentColor"/><text x="12" y="16.6" text-anchor="middle" font-size="13" font-weight="900" fill="#fff" font-family="Lexend,system-ui,sans-serif">A</text></svg>',
  btnB: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5" fill="currentColor"/><text x="12" y="16.6" text-anchor="middle" font-size="13" font-weight="900" fill="#fff" font-family="Lexend,system-ui,sans-serif">B</text></svg>'
};
const BIT_CAT = { fwd: 'mov', left: 'mov', right: 'mov', pick: 'act', drop: 'act', rep: 'loop', until: 'loop', if: 'cond', paint: 'art', light: 'art', note: 'snd', wait: 'snd', call: 'fn', inc: 'var', zero: 'var' };
// condicions: [si…(ca), si…(es), fins que…(ca), hasta que…(es)]
const BIT_CONDS = {
  wall: ['hi ha un obstacle davant', 'hay un obstáculo delante', 'hi hagi un obstacle davant', 'haya un obstáculo delante'],
  free: ['el camí és lliure', 'el camino está libre', 'el camí sigui lliure', 'el camino esté libre'],
  freeR: ['hi ha camí a la dreta', 'hay camino a la derecha', 'hi hagi camí a la dreta', 'haya camino a la derecha'],
  freeL: ["hi ha camí a l'esquerra", 'hay camino a la izquierda', "hi hagi camí a l'esquerra", 'haya camino a la izquierda'],
  goal: ['és a la bandera', 'está en la bandera', 'arribi a la bandera', 'llegue a la bandera'],
  gem: ['hi ha una estrella', 'hay una estrella', 'trobi una estrella', 'encuentre una estrella'],
  fruit: ['hi ha fruita', 'hay fruta', 'trobi fruita', 'encuentre fruta'],
  box: ['hi ha una caixa', 'hay una caja', 'trobi una caixa', 'encuentre una caja'],
  home: ['és a una casa', 'está en una casa', 'arribi a una casa', 'llegue a una casa']
};
const BIT_CNAME = { r: ['vermell', 'rojo'], g: ['verd', 'verde'], y: ['groc', 'amarillo'], u: ['blau', 'azul'], p: ['lila', 'lila'] };
const BIT_NOTES = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si', 'do2'];
const bitNoteName = n => n === 'do2' ? "do'" : n || 'do';
// el text d'una condició, en forma de «si…» o de «fins que…»
function bitCondTxt(c, until) {
  c = c || 'wall';
  if (c.startsWith('floor:')) { const n = BIT_CNAME[c.slice(6)] || BIT_CNAME.r; return until ? L(`el terra sigui ${n[0]}`, `el suelo sea ${n[1]}`) : L(`el terra és ${n[0]}`, `el suelo es ${n[1]}`); }
  if (c.startsWith('cnt:')) { const v = c.slice(4); return until ? L(`el comptador sigui <b class="tnum">${v}</b>`, `el contador sea <b class="tnum">${v}</b>`) : L(`el comptador és <b class="tnum">${v}</b>`, `el contador es <b class="tnum">${v}</b>`); }
  const t = BIT_CONDS[c] || BIT_CONDS.wall; return until ? L(t[2], t[3]) : L(t[0], t[1]);
}
// el nom d'una funció (A, B o el que li hagi posat el repte o l'alumne)
const bitFnName = f => { const n = TB && TB.fnName && TB.fnName[f]; return n ? esc0(tx(n)) : f; };
const esc0 = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
function bitLabel(b) {
  switch (b.k) {
    case 'fwd': return L('Endavant', 'Adelante');
    case 'left': return L("Gira a l'esquerra", 'Gira a la izquierda');
    case 'right': return L('Gira a la dreta', 'Gira a la derecha');
    case 'pick': return L('Agafa la caixa', 'Coge la caja');
    case 'drop': return L('Deixa la caixa', 'Deja la caja');
    case 'rep': return L(`Repeteix <b class="tnum">${b.n || 2}</b> vegades`, `Repite <b class="tnum">${b.n || 2}</b> veces`);
    case 'until': return `${L('Repeteix fins que', 'Repite hasta que')} <b>${bitCondTxt(b.c || 'goal', true)}</b>`;
    case 'if': return `${L('Si', 'Si')} <b>${bitCondTxt(b.c || 'wall')}</b>`;
    case 'paint': return `${L('Pinta de', 'Pinta de')} <i class="tdot" style="background:${BIT_COL[b.c || 'r']}"></i>`;
    case 'light': return `${L('Encén el llum', 'Enciende la luz')} <i class="tdot" style="background:${BIT_COL[b.c || 'r']}"></i>`;
    case 'note': return `${L('Toca la nota', 'Toca la nota')} <b class="tnum">${bitNoteName(b.n)}</b>`;
    case 'wait': return L('Espera un moment', 'Espera un momento');
    case 'call': return `${L('Funció', 'Función')} <b class="tnum">${bitFnName(b.f || 'A')}</b>`;
    case 'inc': return L(`Suma <b class="tnum">${b.n || 1}</b> al comptador`, `Suma <b class="tnum">${b.n || 1}</b> al contador`);
    case 'zero': return L('Posa el comptador a 0', 'Pon el contador a 0');
  }
  return b.k;
}
// un bloc nou; k pot dur un paràmetre: 'light:g', 'note:mi', 'call:B', 'inc:5', 'rep:4'
function bitNew(k0) {
  const [k, p] = String(k0).split(':');
  const b = { k, ...(k === 'rep' ? { n: 2, b: [] } : k === 'until' ? { c: 'goal', b: [] } : k === 'if' ? { c: 'wall', b: [], e: null } : k === 'paint' || k === 'light' ? { c: 'r' } : k === 'note' ? { n: 'do' } : k === 'call' ? { f: 'A' } : k === 'inc' ? { n: 1 } : {}) };
  if (p != null && p !== '') { if (k === 'paint' || k === 'light') b.c = p; else if (k === 'note') b.n = p; else if (k === 'call') b.f = p; else if (k === 'inc' || k === 'rep') b.n = +p || 1; }
  return b;
}
const bitClone = p => JSON.parse(JSON.stringify(p, (k, v) => k === '_id' ? undefined : v));
const bitCount = list => (list || []).reduce((n, b) => n + 1 + bitCount(b.b) + bitCount(b.e), 0);
// tots els blocs d'un programa i de les seves funcions i esdeveniments
const bitCountAll = (prog, fns) => bitCount(prog) + Object.entries(fns || {}).reduce((n, [k, v]) => n + (Array.isArray(v) ? bitCount(v) : 0), 0);
// paraula «blocs» amb el nombre
const bitN = n => `${n} ${n === 1 ? L('bloc', 'bloque') : L('blocs', 'bloques')}`;
// un programa en text llegible (per a les guies i els imprimibles): «Repeteix 3 vegades: [Endavant, Gira a la dreta]»
function bitText(list) {
  const t = h => String(h).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  return (list || []).map(b => b.k === 'rep' || b.k === 'until' || b.k === 'if' ? `${t(bitLabel(b))}: [${bitText(b.b)}]${b.k === 'if' && b.e ? ` ${L('si no', 'si no')}: [${bitText(b.e)}]` : ''}` : t(bitLabel(b))).join(', ');
}

/* ---------- Escenari: món + programa + execució ----------
   Només n'hi ha un de visible alhora (TB). mode: 'edit' (editor amb paleta), 'view' (programa per llegir),
   'spot' (tocar un bloc), 'parsons' (ordenar blocs donats), 'hand' (moure en Bit amb botons).
   El programa pot tenir, a més del principal, «guions» amb nom a TB.fns:
     A, B…        funcions (definició que es crida amb el bloc «Funció A»)
     @a, @b       esdeveniments: «Quan premo el botó A / B» (en Bit escolta els botons quan acaba «Quan comença»)
   Els camps extra del pas (fns, fnLock, fnNames, notes, colors, conds) es llegeixen del pas actual (TSS.st). */
let TB = null, TB_ID = 0;
function tbMake(spec, o = {}) {
  const st = typeof TSS !== 'undefined' && TSS && TSS.st && TSS.st.w === spec ? TSS.st : null;
  if (st) o = { fns: st.fns, ...o, fns: o.fns || st.fns };
  const W = bitWorld(spec);
  const fns = o.fns ? bitClone(o.fns) : null;
  TB = { spec, W, S: bitSim(W), prog: o.prog ? bitClone(o.prog) : [], fns, pal: o.pal || ['fwd', 'left', 'right'], max: o.max || W.max || 0, mode: o.mode || 'edit',
    cur: null, sel: null, run: null, speed: 1, onDone: o.onDone || null, onFail: o.onFail || null, lists: [], ids: {}, pool: o.pool ? bitClone(o.pool) : null, lock: !!o.lock, marks: !!o.marks, solved: false, tries: 0,
    fnLock: (st && st.fnLock) || o.fnLock || [], fnName: { ...((fns && fns._names) || {}), ...((st && st.fnNames) || {}) }, notes: (st && st.notes) || null, nameable: !!(st && st.nameable), listen: false, queue: [] };
  if (fns) delete fns._names;
  if (st && st.conds) TB.conds = st.conds; if (st && st.colors) TB.colors = st.colors;
  TB.cur = { l: TB.prog, i: TB.prog.length };
  return TB;
}
// els guions que es veuen: el principal i, a sota, les funcions i els esdeveniments (amb el seu «barret»)
function tbScripts() {
  const out = [], f = TB.fns || {}, ev = Object.keys(f).some(k => k[0] === '@') || !!TB.W.evNeed;
  const fk = Object.keys(f).filter(k => k[0] !== '@' && k[0] !== '_').sort();
  out.push({ key: 'main', list: TB.prog, hat: ev ? 'start' : fk.length ? 'main' : null });
  for (const k of fk) out.push({ key: k, list: f[k], hat: 'fn', lock: TB.fnLock.includes(k) });
  for (const k of ['@a', '@b']) if (f[k]) out.push({ key: k, list: f[k], hat: k, lock: TB.fnLock.includes(k) });
  return out;
}
const tbHasEv = () => !!(TB.fns && (TB.fns['@a'] || TB.fns['@b'])) || !!TB.W.evNeed;
// ids per als blocs i les llistes (es refan a cada dibuix)
function tbIndex() {
  TB.lists = []; TB.ids = {};
  const walk = list => { TB.lists.push(list); for (const b of list) { if (!b._id) b._id = ++TB_ID; TB.ids[b._id] = { b, list }; if (b.b) walk(b.b); if (b.e) walk(b.e); } };
  walk(TB.prog); if (TB.fns) for (const [k, v] of Object.entries(TB.fns)) if (Array.isArray(v)) walk(v); if (TB.pool) walk(TB.pool);
}
const tbLid = l => TB.lists.indexOf(l);
function tbBlock(b, ro) {
  const cont = b.k === 'rep' || b.k === 'until' || b.k === 'if', sel = TB.sel === b;
  const click = TB.mode === 'spot' ? `tbSpot(${b._id})` : TB.mode === 'parsons' ? `tbPar(${b._id})` : ro ? '' : `tbSel(${b._id})`;
  return `<div class="tb c-${BIT_CAT[b.k]}${sel ? ' sel' : ''}${cont ? ' cont' : ''}" id="tb${b._id}">
    <button class="tbh" ${click ? `onclick="${click}"` : 'tabindex="-1"'}><span class="tbi">${BIT_ICO[b.k] || ''}</span><span class="tbl">${bitLabel(b)}</span></button>
    ${cont ? `<div class="tbin">${tbList(b.b, ro)}</div>${b.k === 'if' && b.e ? `<div class="tbelse">${L('Si no', 'Si no')}</div><div class="tbin">${tbList(b.e, ro)}</div>` : ''}<div class="tbend"></div>` : ''}
  </div>${sel && !ro ? tbTools(b) : ''}`;
}
function tbSlot(l, i) {
  const on = TB.cur && TB.cur.l === l && TB.cur.i === i && TB.mode === 'edit';
  return `<button class="tslot${on ? ' on' : ''}" onclick="tbCur(${tbLid(l)},${i})" aria-label="${L('Posa els blocs aquí', 'Pon los bloques aquí')}">${on ? `<span>${L('els blocs nous van aquí', 'los bloques nuevos van aquí')}</span>` : ''}</button>`;
}
function tbList(list, ro) {
  if (ro || TB.mode !== 'edit') return list.map(b => tbBlock(b, ro)).join('') || (TB.mode === 'parsons' ? `<p class="tempty">${L('Toca els blocs de sota en ordre', 'Toca los bloques de abajo en orden')}</p>` : '');
  if (!list.length && list !== TB.prog && !(TB.cur && TB.cur.l === list)) return `<button class="tslot e" onclick="tbCur(${tbLid(list)},0)"><span>${L('Toca aquí i posa-hi blocs', 'Toca aquí y pon bloques')}</span></button>`;
  return list.map((b, i) => tbSlot(list, i) + tbBlock(b)).join('') + tbSlot(list, list.length);
}
// el «barret» d'un guió: Quan comença, Funció A, Quan premo el botó A…
function tbHat(sc, ro) {
  if (!sc.hat) return '';
  if (sc.hat === 'start') return `<div class="thath h-ev"><span class="tbi">${BIT_ICO.start}</span>${L('Quan comença', 'Cuando empieza')}</div>`;
  if (sc.hat === 'main') return `<div class="thath h-main"><span class="tbi">${BIT_ICO.start}</span>${L('Programa principal', 'Programa principal')}</div>`;
  if (sc.hat === 'fn') return `<div class="thath h-fn"><span class="tbi">${BIT_ICO.call}</span>${L('Funció', 'Función')} <b class="tnum">${bitFnName(sc.key)}</b>${!ro && !sc.lock && TB.mode === 'edit' && TB.nameable ? `<button class="tren" onclick="tbRename('${sc.key}')" aria-label="${L('Posa-li nom', 'Ponle nombre')}">✎</button>` : ''}<small>${sc.lock ? L('ja feta', 'ya hecha') : L('defineix-la aquí', 'defínela aquí')}</small></div>`;
  const k = sc.key.slice(1).toUpperCase();
  return `<div class="thath h-ev"><span class="tbi">${BIT_ICO['btn' + k]}</span>${L(`Quan premo el botó ${k}`, `Cuando pulso el botón ${k}`)}</div>`;
}
function tbScriptsHTML(ro) {
  const scs = tbScripts();
  if (scs.length === 1 && !scs[0].hat) return tbList(TB.prog, ro);
  return scs.map(sc => `<div class="tscript s-${sc.hat}${sc.lock ? ' lock' : ''}" data-k="${sc.key}">${tbHat(sc, ro)}<div class="tsbod">${tbList(sc.list, ro || sc.lock) || `<p class="tempty sm">${L('(buit)', '(vacío)')}</p>`}</div></div>`).join('');
}
function tbTools(b) {
  const ix = TB.ids[b._id], i = ix.list.indexOf(b), cs = TB.conds || [];
  const num = (fn, v) => `<button onclick="${fn}(-1)" aria-label="${L('Menys', 'Menos')}">−</button><b>${v}</b><button onclick="${fn}(1)" aria-label="${L('Més', 'Más')}">+</button>`;
  const fk = Object.keys(TB.fns || {}).filter(k => k[0] !== '@' && k[0] !== '_');
  return `<div class="tbtools">
    <button onclick="tbMove(-1)" ${i === 0 ? 'disabled' : ''} aria-label="${L('Puja', 'Sube')}">↑</button><button onclick="tbMove(1)" ${i === ix.list.length - 1 ? 'disabled' : ''} aria-label="${L('Baixa', 'Baja')}">↓</button>
    ${b.k === 'rep' ? num('tbNum', b.n) : ''}${b.k === 'inc' ? num('tbNum', b.n || 1) : ''}
    ${(b.k === 'if' || b.k === 'until') && cs.length > 1 ? `<button class="wide" onclick="tbCond()">${L('Canvia la condició', 'Cambia la condición')}</button>` : ''}
    ${(b.k === 'if' || b.k === 'until') && String(b.c).startsWith('cnt:') ? num('tbCnt', b.c.slice(4)) : ''}
    ${b.k === 'if' && TB.pal.includes('else') ? `<button class="wide" onclick="tbElse()">${b.e ? L('Treu «si no»', 'Quita «si no»') : L('Afegeix «si no»', 'Añade «si no»')}</button>` : ''}
    ${(b.k === 'paint' || b.k === 'light') ? `<button class="wide" onclick="tbColor()">${L('Canvia el color', 'Cambia el color')}</button>` : ''}
    ${b.k === 'note' ? `<button class="wide" onclick="tbNote()">${L('Canvia la nota', 'Cambia la nota')}</button>` : ''}
    ${b.k === 'call' && fk.length > 1 ? `<button class="wide" onclick="tbFn()">${L('Canvia la funció', 'Cambia la función')}</button>` : ''}
    <button class="del" onclick="tbDel()" aria-label="${L('Esborra', 'Borra')}">${L('Esborra', 'Borra')}</button></div>`;
}
function tbPalette() {
  const used = bitCountAll(TB.prog, TB.fns), full = TB.max && used >= TB.max;
  return `<div class="tpal">${TB.pal.filter(k => k !== 'else').map(k => { const b = bitNew(k); if ((b.k === 'if' || b.k === 'until') && !k.includes(':') && TB.conds) b.c = TB.conds[0]; if ((b.k === 'paint' || b.k === 'light') && !k.includes(':') && TB.colors) b.c = TB.colors[0]; return `<button class="tb c-${BIT_CAT[b.k]} tpb" onclick="tbIns('${k}')" ${full ? 'disabled' : ''}><span class="tbi">${BIT_ICO[b.k] || ''}</span><span class="tbl">${bitLabel(b).replace(/<b class="tnum">\d+<\/b>( vegades| veces)/, 'N$1')}</span></button>`; }).join('')}</div>`;
}
// tot l'escenari: món a dalt (o a l'esquerra a l'ordinador) i programa + paleta a sota
function tbHTML(extra = '') {
  tbIndex();
  const used = bitCountAll(TB.prog, TB.fns);
  const clr = TB.mode === 'edit' && !TB.lock && used ? `<button class="tclr" onclick="tbClear()" aria-label="${L('Buida el programa', 'Vacía el programa')}"><svg viewBox="0 0 24 24"><path d="M6 7h12l-1 14H7zM9 3h6l1 2h4v2H4V5h4z" fill="currentColor"/></svg></button>` : '';
  const head = TB.mode === 'hand' ? '' : `<div class="tphead"><b>${TB.mode === 'parsons' ? L('El teu programa', 'Tu programa') : L('Programa', 'Programa')}</b><span class="tphr">${TB.max ? `<span class="tcount ${used >= TB.max ? 'full' : ''}">${used}/${TB.max} ${L('blocs', 'bloques')}</span>` : `<span class="tcount">${bitN(used)}</span>`}${clr}</span></div>`;
  const prog = TB.mode === 'hand' ? `<div class="thand"><button onclick="tbHand('left')" aria-label="${bitLabel({ k: 'left' })}">${BIT_ICO.left}</button><button class="big" onclick="tbHand('fwd')" aria-label="${bitLabel({ k: 'fwd' })}">${BIT_ICO.fwd}</button><button onclick="tbHand('right')" aria-label="${bitLabel({ k: 'right' })}">${BIT_ICO.right}</button></div>
      <div class="tprog mini">${TB.prog.length ? TB.prog.map(b => `<span class="tchip c-${BIT_CAT[b.k]}">${BIT_ICO[b.k]}</span>`).join('') : `<p class="tempty">${L('Els teus moviments apareixeran aquí', 'Tus movimientos aparecerán aquí')}</p>`}</div>`
    : `${head}<div class="tprog${tbScripts().length > 1 ? ' multi' : ''}" id="tprog">${TB.mode === 'parsons' ? tbList(TB.prog) : tbScriptsHTML(TB.mode === 'view' || TB.mode === 'spot')}</div>${TB.mode === 'edit' ? tbPalette() : ''}${TB.mode === 'parsons' ? `<div class="tpool"><small>${L('Blocs disponibles', 'Bloques disponibles')}</small><div>${TB.pool.map(b => tbBlock(b)).join('') || `<p class="tempty">${L('Ja els has posat tots', 'Ya los has puesto todos')}</p>`}</div></div>` : ''}`;
  const evb = TB.mode !== 'hand' && tbHasEv() ? `<div class="tevb${TB.listen ? ' on' : ''}" id="tevb">${['a', 'b'].map(k => `<button class="tevk" id="tev${k}" onclick="tbPress('${k}')" aria-label="${L('Botó', 'Botón')} ${k.toUpperCase()}"><span>${k.toUpperCase()}</span>${TB.S.evOk[k] ? '<i>✓</i>' : ''}</button>`).join('')}<small id="tevh">${TB.listen ? L('En Bit escolta: prem un botó!', 'Bit escucha: ¡pulsa un botón!') : L('Els botons funcionen quan executes el programa', 'Los botones funcionan cuando ejecutas el programa')}</small></div>` : '';
  const runbar = TB.mode !== 'hand' ? `${evb}<div class="trun">
      <button class="btn big trgo" onclick="tbGo()" id="tbgo">${TB.run || TB.listen ? L('Atura', 'Para') : `<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>${L('Executa', 'Ejecuta')}`}</button>
      ${TB.mode === 'edit' || TB.mode === 'parsons' ? `<button class="btn ghost" onclick="tbStep()" title="${L('Executa un sol bloc', 'Ejecuta un solo bloque')}">${L('Pas a pas', 'Paso a paso')}</button>` : ''}
      <button class="btn ghost ico" onclick="tbReset()" aria-label="${L('Torna en Bit al principi', 'Vuelve a poner a Bit al principio')}"><svg viewBox="0 0 24 24"><path d="M12 5V2L7 6l5 4V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z" fill="currentColor"/></svg></button>
      <button class="btn ghost ico" onclick="tbSpeed()" aria-label="${L('Velocitat', 'Velocidad')}" title="${L('Velocitat', 'Velocidad')}">${TB.speed === 2 ? '×2' : '×1'}</button></div>` : '';
  TB.runbar = runbar;
  bot2Css();
  return `<div class="tstage m-${TB.mode}">${tbWorldHTML()}<div class="tcode">${extra}${prog}</div></div>`;
}
// marcadors sobre el món: el comptador i la melodia que cal tocar
function tbHud() {
  const W = TB.W, S = TB.S;
  const cnt = W.cnt || bitHasK(TB.prog, TB.fns, ['inc', 'zero']) || (TB.pal || []).some(k => /^(inc|zero)/.test(k)) ? `<div class="tcnt" id="tcnt"><small>${L('Comptador', 'Contador')}</small><b>${S.cnt}</b>${W.count != null ? `<em>${L('cal', 'hace falta')}: ${W.count}</em>` : ''}</div>` : '';
  const tune = W.tune ? `<div class="ttune" id="ttune"><button class="ttl" onclick="tbListen()" aria-label="${L('Escolta la melodia', 'Escucha la melodía')}">${BIT_ICO.note}<span>${L('Escolta', 'Escucha')}</span></button>${W.tune.map((n, i) => `<span class="ttn n-${n}${S.notes[i] ? (S.notes[i] === n ? ' ok' : ' ko') : ''}">${bitNoteName(n)}</span>`).join('')}</div>` : '';
  return cnt + tune;
}
const bitHasK = (prog, fns, ks) => { const f = l => (l || []).some(b => ks.includes(b.k) || f(b.b) || f(b.e)); return f(prog) || Object.values(fns || {}).some(v => Array.isArray(v) && f(v)); };
// el món: en 3D si l'aparell ho permet (tech-3d.js); mentrestant, i si no hi ha WebGL, el dibuix 2D
function tbWorldHTML() {
  const ar = Math.max(.56, Math.min(1.05, (TB.W.h + 1.8) / (TB.W.w + 1.2) * .82));
  return `<div class="tworld" id="tworld"><div class="b3d" id="b3d" style="aspect-ratio:${(1 / ar).toFixed(3)}">${bitSVG(TB.W, TB.S, { marks: TB.marks })}</div><div class="thud" id="thud">${tbHud()}</div><p class="tsay" id="tsay" aria-live="polite"></p>${TB.runbar || ''}</div>`;
}
// la part del programa (es refà a cada canvi sense tocar el món 3D)
function tbCodeHTML() { const h = tbHTML(TB.extra || ''); const d = document.createElement('div'); d.innerHTML = h; const c = d.querySelector('.tcode'); return c ? c.innerHTML : ''; }
function tbDraw() {
  const st = document.querySelector('.tstage'); if (!st) return;
  const sc = document.getElementById('tprog'), top = sc ? sc.scrollTop : 0;
  const code = st.querySelector('.tcode'), w = st.querySelector('#tworld');
  if (code && w) { code.innerHTML = tbCodeHTML(); const rb = w.querySelector('.trun'), eb = w.querySelector('.tevb'); if (eb) eb.remove(); if (rb && TB.runbar) rb.outerHTML = TB.runbar; tbHudDraw(); if (TB.dirtyWorld) tbRedrawWorld(); }
  else { st.outerHTML = tbHTML(TB.extra || ''); tb3dMount(); }
  TB.dirtyWorld = false;
  const sc2 = document.getElementById('tprog'); if (sc2) sc2.scrollTop = top;
}
function tbHudDraw() { const h = document.getElementById('thud'); if (h) h.innerHTML = tbHud(); }
/* ---------- 3D ---------- */
let BIT3D = null, BIT3D_P = null;
const bit3dLoad = () => BIT3D_P || (BIT3D_P = import('./tech-3d.js').then(m => (BIT3D = m.ok() ? m : null)).catch(() => (BIT3D = null)));
function tb3dMount() {
  if (!TB || (typeof REDUCED !== 'undefined' && REDUCED === 'force2d')) return;
  const me = TB;
  bit3dLoad().then(M => {
    const box = document.getElementById('b3d'); if (!M || TB !== me || !box || box.querySelector('canvas')) return;
    try {
      me.b3 = M.create(box, me.W, me.S, { shot: !!window.__shot });
      box.classList.add('on');
      if (me.marks) me.b3.marks(true, me.pick);
      me.prevS = { x: me.S.x, y: me.S.y, d: me.S.d, ang: me.S.ang, carry: me.S.carry, led: me.S.led };
    } catch (e) { me.b3 = null; }
  });
}
// només el món (durant l'execució no es refà el programa: va més fluid)
function tbWorld() {
  const S = TB.S, prev = TB.prevS;
  if (TB.b3) TB.b3.step(S, prev);
  else { const w = document.querySelector('#tworld .bitw'); if (!w) return; bitPaintState(w, TB.W, S, prev); }
  // comptador i melodia
  const c = document.querySelector('#tcnt b'); if (c && c.textContent !== String(S.cnt)) { c.textContent = S.cnt; const p = c.parentNode; p.classList.remove('pop'); void p.offsetWidth; p.classList.add('pop'); }
  const tn = document.querySelectorAll('#ttune .ttn'); tn.forEach((e, i) => { e.classList.toggle('ok', !!S.notes[i] && S.notes[i] === TB.W.tune[i]); e.classList.toggle('ko', !!S.notes[i] && S.notes[i] !== TB.W.tune[i]); });
  TB.prevS = { x: S.x, y: S.y, d: S.d, ang: S.ang, carry: S.carry, led: S.led };
}
function tbSay(t, cls = '') { const e = document.getElementById('tsay'); if (e) { e.className = 'tsay ' + cls; e.innerHTML = t; } }
// escolta la melodia del model (sense moure en Bit)
function tbListen() { if (!TB || !TB.W.tune) return; TB.W.tune.forEach((n, i) => setTimeout(() => { bitSnd('note', n); const e = document.querySelectorAll('#ttune .ttn')[i]; if (e) { e.classList.remove('hear'); void e.offsetWidth; e.classList.add('hear'); } }, i * 420)); }

/* ---------- Editor ---------- */
function tbIns(k) {
  if (TB.run || TB.listen) tbStop();
  if (TB.max && bitCountAll(TB.prog, TB.fns) >= TB.max) return toast(L(`Només pots fer servir ${TB.max} blocs.`, `Solo puedes usar ${TB.max} bloques.`));
  const b = bitNew(k); if ((b.k === 'if' || b.k === 'until') && !k.includes(':')) b.c = (TB.conds || [b.c])[0];
  if ((b.k === 'paint' || b.k === 'light') && !k.includes(':') && TB.colors) b.c = TB.colors[0];
  // si el cursor és dins d'una funció bloquejada, els blocs van al programa principal
  if (!TB.lists.includes(TB.cur.l) || tbLocked(TB.cur.l)) TB.cur = { l: TB.prog, i: TB.prog.length };
  const { l, i } = TB.cur; l.splice(i, 0, b);
  // dins d'un bucle o d'un «si» nou, el cursor hi entra (és el que gairebé sempre es vol fer després)
  TB.cur = b.b ? { l: b.b, i: 0 } : { l, i: i + 1 };
  TB.sel = null; SFX.tap && SFX.tap(); tbFresh(); tbDraw();
}
// és una llista d'un guió bloquejat (una funció que ja ve feta)?
function tbLocked(l) { if (!TB.fns) return false; const inside = (list, t) => list === t || list.some(b => (b.b && inside(b.b, t)) || (b.e && inside(b.e, t))); return TB.fnLock.some(k => TB.fns[k] && inside(TB.fns[k], l)); }
function tbCur(li, i) { if (TB.run || TB.listen) tbStop(); TB.cur = { l: TB.lists[li], i }; TB.sel = null; tbDraw(); }
function tbSel(id) { if (TB.run || TB.listen) tbStop(); const ix = TB.ids[id]; if (!ix || tbLocked(ix.list)) return; TB.sel = TB.sel === ix.b ? null : ix.b; TB.cur = { l: ix.list, i: ix.list.indexOf(ix.b) + 1 }; tbDraw(); }
function tbMove(d) { const b = TB.sel, l = TB.ids[b._id].list, i = l.indexOf(b), j = i + d; if (j < 0 || j >= l.length) return; l.splice(i, 1); l.splice(j, 0, b); TB.cur = { l, i: j + 1 }; tbFresh(); tbDraw(); }
function tbDel() { const b = TB.sel, l = TB.ids[b._id].list, i = l.indexOf(b); l.splice(i, 1); TB.sel = null; TB.cur = { l, i }; tbFresh(); tbDraw(); }
function tbNum(d) { const b = TB.sel; if (b.k === 'inc') b.n = Math.max(1, Math.min(10, (b.n || 1) + d)); else b.n = Math.max(1, Math.min(20, (b.n || 2) + d)); tbFresh(); tbDraw(); }
function tbCnt(d) { const b = TB.sel; b.c = 'cnt:' + Math.max(0, Math.min(30, +b.c.slice(4) + d)); tbFresh(); tbDraw(); }
function tbCond() { const b = TB.sel, cs = TB.conds || ['wall']; const base = c => String(c).startsWith('cnt:') ? 'cnt' : c; const i = cs.findIndex(c => base(c) === base(b.c)); b.c = cs[(i + 1) % cs.length]; tbFresh(); tbDraw(); }
function tbElse() { const b = TB.sel; b.e = b.e ? null : []; tbFresh(); tbDraw(); }
function tbColor() { const b = TB.sel, cs = TB.colors || ['r', 'g', 'y', 'u']; b.c = cs[(cs.indexOf(b.c) + 1) % cs.length]; tbFresh(); tbDraw(); }
function tbNote() { const b = TB.sel, ns = TB.notes || BIT_NOTES; b.n = ns[(ns.indexOf(b.n) + 1) % ns.length]; bitSnd('note', b.n); tbFresh(); tbDraw(); }
function tbFn() { const b = TB.sel, fk = Object.keys(TB.fns || {}).filter(k => k[0] !== '@' && k[0] !== '_').sort(); b.f = fk[(fk.indexOf(b.f) + 1) % fk.length]; tbFresh(); tbDraw(); }
function tbRename(k) { const n = prompt(L('Quin nom li poses a la funció? (curt)', '¿Qué nombre le pones a la función? (corto)'), TB.fnName[k] ? tx(TB.fnName[k]) : ''); if (n == null) return; const v = n.trim().slice(0, 14); if (v) TB.fnName[k] = v; else delete TB.fnName[k]; tbDraw(); }
function tbClear() {
  if (!bitCountAll(TB.prog, TB.fns)) return;
  TB.prog.splice(0); if (TB.fns) for (const [k, v] of Object.entries(TB.fns)) if (Array.isArray(v) && !TB.fnLock.includes(k)) v.splice(0);
  TB.cur = { l: TB.prog, i: 0 }; TB.sel = null; tbFresh(); tbDraw();
}
// qualsevol canvi del programa: en Bit torna a la sortida
function tbFresh() { const moved = TB.S && (TB.S.n || TB.S.trail.length > 1 || TB.S.d !== TB.W.bot[2] || TB.S.led || TB.S.cnt); TB.listen = false; TB.queue = []; TB.S = bitSim(TB.W); TB.gen = null; if (moved) TB.dirtyWorld = true; }
// ordenar blocs donats (problema de Parsons): tocar els de sota els afegeix al final; tocar-ne un de dalt el torna a sota
function tbPar(id) {
  if (TB.run) tbStop();
  const ix = TB.ids[id]; if (!ix) return;
  if (TB.prog.includes(ix.b)) { TB.prog.splice(TB.prog.indexOf(ix.b), 1); TB.pool.push(ix.b); }
  else if (TB.pool.includes(ix.b)) { TB.pool.splice(TB.pool.indexOf(ix.b), 1); TB.prog.push(ix.b); }
  SFX.tap && SFX.tap(); tbFresh(); tbDraw();
}
function tbSpot(id) { if (TB.onSpot) TB.onSpot(id, TB.ids[id] && TB.ids[id].b); }
// moure en Bit directament: cada botó és una ordre que s'apunta al programa
function tbHand(k) {
  if (TB.S.crash || TB.solved) return;
  const b = { k }; TB.prog.push(b); bitDo(TB.W, TB.S, b); tbWorld(); if (!TB.S.crash) bitSnd(k === 'fwd' ? 'step' : 'turn');
  document.querySelector('.tprog.mini').innerHTML = TB.prog.map(x => `<span class="tchip c-${BIT_CAT[x.k]}">${BIT_ICO[x.k]}</span>`).join('');
  if (TB.S.crash) { bitSnd('hit'); tbBotFx('hit'); tbSay(tx(BIT_WHY[TB.S.crash].join('|')), 'bad'); setTimeout(() => { TB.prog = []; tbFresh(); tbDraw(); tbSay(L('Tornem-hi des del principi!', '¡Volvamos a empezar!')); }, 1500); return; }
  if (!bitMiss(TB.W, TB.S)) { TB.solved = true; SFX.win && SFX.win(); tbBotFx('yay'); typeof confetti === 'function' && confetti(90); tbSay(L('Ho has aconseguit!', '¡Lo has conseguido!'), 'ok'); TB.onDone && setTimeout(TB.onDone, 700); }
}

/* ---------- Execució ---------- */
// el món sencer de nou (quan en Bit torna a la sortida: estrelles i caixes al seu lloc)
function tbRedrawWorld() {
  if (TB.b3) TB.b3.reset(TB.W, TB.S);
  else { const w = document.querySelector('#tworld .bitw'); if (w) w.outerHTML = bitSVG(TB.W, TB.S, { marks: TB.marks }); }
  TB.prevS = { x: TB.S.x, y: TB.S.y, d: TB.S.d, ang: TB.S.ang, carry: 0, led: null };
  tbHudDraw();
}
const tbGoIco = () => `<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>${L('Executa', 'Ejecuta')}`;
function tbGo() {
  if (TB.run || TB.listen) { const q = TB.queue.length; tbStop(); if (!q) return; }
  if (!bitCountAll(TB.prog, TB.fns)) { tbSay(L('Primer posa algun bloc al programa.', 'Primero pon algún bloque en el programa.')); return; }
  if (TB.W.evOnly && bitHasK(TB.prog, null, ['fwd', 'left', 'right'])) { tbSay(tx(BIT_WHY.evonly.join('|')), 'bad'); TB.tries++; if (TB.onFail) TB.onFail('evonly'); return; }
  TB.S = bitSim(TB.W); tbRedrawWorld(); TB.sel = null; TB.listen = false; TB.evKey = null;
  TB.gen = bitRun(TB.W, TB.S, TB.prog, TB.fns); TB.run = true; TB.tries++;
  const btn = document.getElementById('tbgo'); if (btn) btn.innerHTML = L('Atura', 'Para');
  tbSay(''); document.querySelectorAll('.tb.err').forEach(e => e.classList.remove('err'));
  tbEvUI();
  tbTick();
}
function tbStop() { clearTimeout(TB.t); TB.run = null; TB.listen = false; TB.queue = []; TB.evKey = null; document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now')); tbBadges(); const btn = document.getElementById('tbgo'); if (btn) btn.innerHTML = tbGoIco(); tbEvUI(); }
// botons A i B (esdeveniments): actius només quan en Bit escolta
function tbEvUI() {
  const e = document.getElementById('tevb'); if (!e) return;
  e.classList.toggle('on', !!TB.listen); const h = document.getElementById('tevh');
  if (h) h.textContent = TB.listen ? L('En Bit escolta: prem un botó!', 'Bit escucha: ¡pulsa un botón!') : TB.run && TB.evKey ? L(`Botó ${TB.evKey.toUpperCase()}…`, `Botón ${TB.evKey.toUpperCase()}…`) : L('Els botons funcionen quan executes el programa', 'Los botones funcionan cuando ejecutas el programa');
  ['a', 'b'].forEach(k => { const b = document.getElementById('tev' + k); if (!b) return; b.classList.toggle('done', !!TB.S.evOk[k]); b.classList.toggle('now', TB.evKey === k && !!TB.run); });
}
function tbPress(k) {
  if (!TB || TB.mode === 'hand') return;
  SFX.tap && SFX.tap();
  if (TB.run) { if (TB.queue.length < 3) TB.queue.push(k); return; }
  if (!TB.listen) { TB.queue = [k]; return tbGo(); }
  tbRunEv(k);
}
function tbRunEv(k) {
  const S = TB.S; TB.listen = false; TB.evKey = k; S.n = 0;
  TB.before = { notes: S.notes.length, d: S.d, x: S.x, y: S.y, led: S.led };
  TB.gen = bitRun(TB.W, S, (TB.fns && TB.fns['@' + k]) || [], TB.fns); TB.run = true;
  const btn = document.getElementById('tbgo'); if (btn) btn.innerHTML = L('Atura', 'Para');
  tbEvUI(); tbTick();
}
// marca el bloc que s'executa (i, als bucles, quina volta fan; als «si», si s'ha complert)
function tbMark(b, info) {
  document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now'));
  if (!b || !b._id) return;
  const e = document.getElementById('tb' + b._id); if (!e) return;
  e.classList.add('now');
  if (info && (info.it || info.yes != null || info.stop)) {
    const h = e.querySelector(':scope>.tbh'); let g = h && h.querySelector('.tit'); if (h && !g) { g = document.createElement('span'); g.className = 'tit'; h.appendChild(g); }
    if (g) { g.className = 'tit' + (info.yes === false ? ' no' : info.yes ? ' yes' : ''); g.textContent = info.yes != null ? (info.yes ? L('sí', 'sí') : L('no', 'no')) : info.stop ? L('prou!', '¡basta!') : info.of ? `${info.it}/${info.of}` : `${info.it}`; }
  }
  const p = document.getElementById('tprog'); if (p && p.scrollHeight > p.clientHeight) { const r = e.getBoundingClientRect(), pr = p.getBoundingClientRect(); if (r.top < pr.top || r.bottom > pr.bottom) p.scrollTop += r.top - pr.top - 30; }
}
function tbBadges() { document.querySelectorAll('.tit').forEach(e => e.remove()); }
function tbTick() {
  const r = TB.gen.next();
  if (r.done) return tbEnd();
  tbMark(r.value.b, r.value);
  if (r.value.act) {
    tbWorld(); const k = r.value.b.k;
    if (!TB.S.crash && k !== 'wait') bitSnd(k === 'fwd' ? 'step' : k === 'left' || k === 'right' ? 'turn' : k === 'note' ? 'note' : 'act', r.value.b.n);
    if (k === 'note' && !TB.S.crash) tbFxHere('note');
  }
  if (TB.S.crash) return tbEnd(r.value.b);
  const k = r.value.b.k;
  TB.t = setTimeout(tbTick, (r.value.act ? (k === 'wait' ? 700 : k === 'note' ? 470 : 430) : 220) / TB.speed);
}
function tbFxHere(kind) { const w = document.querySelector('#tworld .bitw'); if (TB.b3 && TB.b3.fx) TB.b3.fx(kind, TB.S.x, TB.S.y); else if (w) bitFx(w, TB.S.x, TB.S.y, kind); }
// un sol bloc cada vegada (per depurar)
function tbStep() {
  if (TB.run) { clearTimeout(TB.t); TB.run = null; }
  if (!bitCountAll(TB.prog, TB.fns)) return tbSay(L('Primer posa algun bloc al programa.', 'Primero pon algún bloque en el programa.'));
  if (!TB.gen) { TB.S = bitSim(TB.W); tbRedrawWorld(); TB.listen = false; TB.evKey = null; TB.gen = bitRun(TB.W, TB.S, TB.prog, TB.fns); tbSay(''); tbBadges(); }
  let r; do { r = TB.gen.next(); if (!r.done && !r.value.act) tbMark(r.value.b, r.value); } while (!r.done && !r.value.act && !TB.S.crash && !r.value.b.k.match(/^(if|until|rep)$/));
  if (r.done) { TB.gen = null; return tbEnd(); }
  tbMark(r.value.b, r.value); tbWorld(); if (!TB.S.crash && r.value.act) { const k = r.value.b.k; bitSnd(k === 'fwd' ? 'step' : k === 'note' ? 'note' : 'turn', r.value.b.n); if (k === 'note') tbFxHere('note'); }
  if (TB.S.crash) { TB.gen = null; return tbEnd(r.value.b); }
}
function tbEnd(last) {
  TB.run = null; clearTimeout(TB.t); TB.gen = null;
  const btn = document.getElementById('tbgo'); if (btn) btn.innerHTML = tbGoIco();
  // ha acabat un botó: el repte demanava alguna cosa concreta per a aquest botó?
  let miss = null;
  if (TB.evKey && !TB.S.crash) { miss = bitEvCheck(TB.W, TB.S, TB.evKey, TB.before); if (!miss && TB.W.evNeed && TB.W.evNeed[TB.evKey]) { bitSnd('ok'); } }
  const evk = TB.evKey; TB.evKey = null;
  if (!miss) miss = bitMiss(TB.W, TB.S);
  if (!miss) {
    document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now'));
    const first = !TB.solved; TB.solved = true;
    if (first) { SFX.win && SFX.win(); tbBotFx('yay'); typeof confetti === 'function' && confetti(90); tbSay(L('Molt bé! Ho has aconseguit!', '¡Muy bien! ¡Lo has conseguido!'), 'ok'); if (TB.onDone) TB.onDone(); }
    // si hi ha botons, en Bit continua escoltant (per provar-los tant com es vulgui)
    if (tbHasEv() && TB.fns && (TB.fns['@a'] || TB.fns['@b'])) { TB.listen = true; tbEvUI(); if (!first) tbSay(L('Prem un altre botó o toca Atura.', 'Pulsa otro botón o toca Para.'), 'ok'); tbGoBtn(); if (TB.queue.length) { const k = TB.queue.shift(); setTimeout(() => TB && TB.listen && tbRunEv(k), 250); } }
    return;
  }
  // encara no ha acabat però no ha fallat: si hi ha botons, en Bit es queda escoltant
  const soft = !TB.S.crash && !['evled', 'evnote', 'evturn', 'evmove'].includes(miss);
  if (soft && tbHasEv()) {
    document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now'));
    TB.listen = true; tbEvUI(); tbGoBtn();
    if (evk && TB.S.evOk[evk]) tbSay(L(`El botó ${evk.toUpperCase()} funciona! Prova l'altre.`, `¡El botón ${evk.toUpperCase()} funciona! Prueba el otro.`), 'ok');
    else if (!evk) tbSay(L('En Bit escolta… Prem el botó A o el B!', 'Bit escucha… ¡Pulsa el botón A o el B!'));
    else tbSay('');
    if (TB.queue.length) { const k = TB.queue.shift(); setTimeout(() => TB && TB.listen && tbRunEv(k), 250); }
    return;
  }
  TB.listen = false; TB.queue = []; tbEvUI();
  if (TB.S.crash) { bitSnd('hit'); tbBotFx('hit'); const [ax, ay] = bitAhead(TB.S), w = document.querySelector('#tworld .bitw'); if (TB.b3) TB.b3.fx('dust', (TB.S.x + ax) / 2, (TB.S.y + ay) / 2); else if (w) bitFx(w, (TB.S.x + ax) / 2, (TB.S.y + ay) / 2, 'dust'); } else { SFX.ko && SFX.ko(); tbBotFx('sad'); }
  if (TB.S.crash && last && last._id) { const e = document.getElementById('tb' + last._id); if (e) { e.classList.remove('now'); e.classList.add('err'); } }
  else document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now'));
  tbSay(tx(BIT_WHY[miss].join('|')) + ' ' + L('Canvia el programa i torna-ho a provar.', 'Cambia el programa y vuelve a probar.'), 'bad');
  if (TB.onFail) TB.onFail(miss);
}
const tbGoBtn = () => { const btn = document.getElementById('tbgo'); if (btn) btn.innerHTML = TB.listen || TB.run ? L('Atura', 'Para') : tbGoIco(); };
// animació d'en Bit: salt d'alegria, xoc o tristesa
function tbBotFx(c) { if (TB && TB.b3) return TB.b3.react(c); const sp = document.querySelector('#tworld .bbot .bsp'); if (!sp) return; sp.classList.remove('walk', 'turn', 'hit', 'yay', 'sad'); void sp.getBoundingClientRect(); sp.classList.add(c); }
function tbReset() { if (TB.run || TB.listen) tbStop(); tbFresh(); tbRedrawWorld(); tbSay(''); tbBadges(); tbEvUI(); document.querySelectorAll('.tb.err,.tb.now').forEach(e => e.classList.remove('err', 'now')); }
function tbSpeed() { TB.speed = TB.speed === 2 ? 1 : 2; const b = document.querySelector('.trun .ico[aria-label="' + L('Velocitat', 'Velocidad') + '"]'); if (b) b.textContent = TB.speed === 2 ? '×2' : '×1'; }
// executa sense dibuixar (per saber on acaba un programa, per a les preguntes de «on acabarà?»); press: botons que es premen després
function bitFinal(spec, prog, fns, press) {
  const W = bitWorld(spec), S = bitSim(W); const g = bitRun(W, S, prog, fns); while (!g.next().done);
  let ev = null;
  for (const k of press || []) { if (S.crash || ev) break; const before = { notes: S.notes.length, d: S.d, x: S.x, y: S.y, led: S.led }; S.n = 0; const h = bitRun(W, S, (fns && fns['@' + k]) || [], fns); while (!h.next().done); if (!S.crash) ev = bitEvCheck(W, S, k, before); }
  return { W, S, ev };
}

/* ---------- En Bit, de cara (per a les històries) ---------- */
// en Bit de cos sencer: un render 3D (img/tech/bit-<posa>.webp, fet amb scripts/3d/portraits.mjs) dins d'un SVG,
// perquè encaixi a tots els llocs on abans hi havia el dibuix (mides, escenes i animacions)
const BIT_POSE = { idle: 'idle', happy: 'happy', win: 'win', sad: 'sad', dance: 'dance', think: 'think', wave: 'wave' };
function bitChar(mood = 'idle') {
  return `<svg class="bitc m-${mood}" viewBox="-64 -78 128 156" aria-hidden="true"><image href="img/tech/bit-${BIT_POSE[mood] || 'idle'}.webp" x="-64" y="-78" width="128" height="156" preserveAspectRatio="xMidYMax meet"/></svg>`;
}


/* ===== Tech Robot, unitats 2-8: el que s'hi afegeix =====
   · bot2Live(): demostració en directe (com les de Descobreix) però amb bucles, condicions, funcions, comptador i
     botons: el bloc que s'executa s'il·lumina i els bucles diuen quina volta fan. Es fa servir com una animació de TANI.
   · TANI_ROBOT: animacions de concepte de les unitats 2-8 (s'afegeixen a TANI quan es carrega tech-learn.js).
   · Passos nous: «design» (editor de mons de la unitat 8) i «diploma».
   · El món que dissenya l'alumne es desa a P.tech.bw i els reptes amb w:'mine' el fan servir. */

/* ---------- El món propi de l'alumne ---------- */
const BOT2_MINE0 = { map: ['>..R..*', '.T.R.T.', '...~...', '.R.~.R.', '*.....F'], paths: false };
function bot2Mine() { const t = typeof P !== 'undefined' && P && P.tech, m = t && t.bw; return m && Array.isArray(m.map) && m.map.length ? { ...m, paths: false } : BOT2_MINE0; }

/* ---------- Demostració en directe amb programes de veritat ---------- */
let BOT2_LV = 0, BOT2_FN = null;
function bot2LiveBlocks(list, map, ref) {
  return (list || []).map(b => { const k = 'x' + (++ref.n); map.set(b, k); const cont = b.k === 'rep' || b.k === 'until' || b.k === 'if';
    return `<div class="tb c-${BIT_CAT[b.k]}${cont ? ' cont' : ''}" data-k="${k}"><div class="tbh"><span class="tbi">${BIT_ICO[b.k] || ''}</span><span class="tbl">${bitLabel(b)}</span></div>${cont ? `<div class="tbin">${bot2LiveBlocks(b.b, map, ref)}</div>${b.k === 'if' && b.e ? `<div class="tbelse">${L('Si no', 'Si no')}</div><div class="tbin">${bot2LiveBlocks(b.e, map, ref)}</div>` : ''}<div class="tbend"></div>` : ''}</div>`; }).join('');
}
// d: {w, prog, fns?, fnNames?, press?: 'a b a', speed?, sound?}. Torna una funció com les de TANI.
function bot2Live(d) {
  return () => { const id = 'blv' + (++BOT2_LV); if (typeof setTimeout === 'function') setTimeout(() => bot2LiveRun(id, d), 80); return `<div class="blive" id="${id}"></div>`; };
}
function bot2LiveRun(id, d) {
  const el = typeof document !== 'undefined' && document.getElementById(id); if (!el) return;
  bot2Css();
  const prog = bitClone(d.prog), fns = d.fns ? bitClone(d.fns) : null, map = new Map(), ref = { n: 0 };
  BOT2_FN = d.fnNames || null;
  const hat = (k) => k === 'main' ? `<div class="thath h-${fns && Object.keys(fns).some(x => x[0] === '@') ? 'ev' : 'main'}"><span class="tbi">${BIT_ICO.start}</span>${fns && Object.keys(fns).some(x => x[0] === '@') ? L('Quan comença', 'Cuando empieza') : L('Programa principal', 'Programa principal')}</div>`
    : k[0] === '@' ? `<div class="thath h-ev"><span class="tbi">${BIT_ICO['btn' + k[1].toUpperCase()]}</span>${L(`Quan premo el botó ${k[1].toUpperCase()}`, `Cuando pulso el botón ${k[1].toUpperCase()}`)}</div>`
    : `<div class="thath h-fn"><span class="tbi">${BIT_ICO.call}</span>${L('Funció', 'Función')} <b class="tnum">${bitFnName(k)}</b></div>`;
  const code = fns ? `<div class="tscript s-main">${hat('main')}<div class="tsbod">${bot2LiveBlocks(prog, map, ref)}</div></div>` + Object.keys(fns).filter(k => k[0] !== '_').sort((a, b) => (a[0] === '@') - (b[0] === '@') || a.localeCompare(b)).map(k => `<div class="tscript s-${k[0] === '@' ? 'ev' : 'fn'}">${hat(k)}<div class="tsbod">${bot2LiveBlocks(fns[k], map, ref)}</div></div>`).join('') : bot2LiveBlocks(prog, map, ref);
  BOT2_FN = null;
  const press = (d.press || '').split(/\s+/).filter(Boolean);
  const W0 = bitWorld(d.w), ar = Math.max(.5, Math.min(1.05, (W0.h + 1.8) / (W0.w + 1.2) * .82));
  el.innerHTML = `<div class="blw"><div class="blsvg b3d" style="aspect-ratio:${(1 / ar).toFixed(3)}"></div><div class="blhud"></div>${press.length ? `<div class="blev">${['a', 'b'].map(k => `<span class="blk" data-b="${k}">${k.toUpperCase()}</span>`).join('')}</div>` : ''}</div><div class="blp">${code}</div>`;
  const me = { t: 0 }; el._me = me;
  const sp = d.speed || 650;
  const start = () => {
    if (!el.isConnected || el._me !== me) return;
    const W = W0, S = bitSim(W); me.W = W; me.S = S; me.prev = null;
    const box = el.querySelector('.blsvg');
    if (me.b3) me.b3.reset(W, S); else { box.innerHTML = bitSVG(W, S); if (!me.try3d) { me.try3d = 1; bit3dLoad().then(M => { if (!M || !el.isConnected || el._me !== me || (typeof REDUCED !== 'undefined' && REDUCED === 'force2d')) return; try { me.b3 = M.create(box, me.W, me.S, {}); box.classList.add('on'); } catch (e) { me.b3 = null; } }); } }
    el.querySelectorAll('.now').forEach(e => e.classList.remove('now')); el.querySelectorAll('.tit').forEach(e => e.remove());
    me.q = [bitRun(W, S, prog, fns)]; press.forEach(k => me.q.push(k)); me.gen = null;
    hud(); me.t = setTimeout(tick, 700);
  };
  const hud = () => { const W = me.W, S = me.S, h = el.querySelector('.blhud'); if (!h) return;
    h.innerHTML = `${W.cnt || bitHasK(prog, fns, ['inc', 'zero']) ? `<div class="tcnt sm"><small>${L('Comptador', 'Contador')}</small><b>${S.cnt}</b></div>` : ''}${W.tune ? `<div class="ttune sm">${W.tune.map((n, i) => `<span class="ttn n-${n}${S.notes[i] ? (S.notes[i] === n ? ' ok' : ' ko') : ''}">${bitNoteName(n)}</span>`).join('')}</div>` : ''}`; };
  const mark = (b, info) => {
    el.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now'));
    const e = el.querySelector(`[data-k="${map.get(b)}"]`); if (!e) return; e.classList.add('now');
    if (info && (info.it || info.yes != null || info.stop)) { const h = e.querySelector(':scope>.tbh'); let g = h.querySelector('.tit'); if (!g) { g = document.createElement('span'); h.appendChild(g); }
      g.className = 'tit' + (info.yes === false ? ' no' : info.yes ? ' yes' : ''); g.textContent = info.yes != null ? (info.yes ? L('sí', 'sí') : L('no', 'no')) : info.stop ? L('prou!', '¡basta!') : info.of ? `${info.it}/${info.of}` : `${info.it}`; }
  };
  const tick = () => {
    if (!el.isConnected || el._me !== me) return;
    const svg = el.querySelector('.bitw');
    if (!me.gen) {
      const nx = me.q.shift();
      if (nx == null) { el.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now')); const ok = !bitMiss(me.W, me.S); const s = svg && svg.querySelector('.bsp'); if (me.b3) me.b3.react(ok ? 'yay' : 'sad'); else if (s && ok) { s.classList.remove('walk', 'turn'); void s.getBoundingClientRect(); s.classList.add('yay'); }
        me.t = setTimeout(start, 2200); return; }
      if (typeof nx === 'string') { const k = nx; el.querySelectorAll('.blk').forEach(x => x.classList.toggle('on', x.dataset.b === k)); setTimeout(() => el.querySelectorAll('.blk').forEach(x => x.classList.remove('on')), 500); me.S.n = 0; me.gen = bitRun(me.W, me.S, (fns && fns['@' + k]) || [], fns); me.t = setTimeout(tick, 600); return; }
      me.gen = nx;
    }
    const r = me.gen.next();
    if (r.done) { me.gen = null; me.t = setTimeout(tick, 250); return; }
    mark(r.value.b, r.value);
    if (r.value.act) { if (me.b3) me.b3.step(me.S, me.prev); else if (svg) bitPaintState(svg, me.W, me.S, me.prev); me.prev = { x: me.S.x, y: me.S.y, d: me.S.d, ang: me.S.ang, carry: me.S.carry, led: me.S.led }; hud();
      if (r.value.b.k === 'note') { if (me.b3) me.b3.fx('note', me.S.x, me.S.y); else if (svg) bitFx(svg, me.S.x, me.S.y, 'note'); if (d.sound) bitSnd('note', r.value.b.n); } }
    if (me.S.crash) { const s = svg && svg.querySelector('.bsp'); if (me.b3) me.b3.react('hit'); else if (s) s.classList.add('hit'); me.q = []; me.gen = null; me.t = setTimeout(start, 2400); return; }
    me.t = setTimeout(tick, r.value.act ? sp : sp * .45);
  };
  start();
}

/* ---------- Animacions de concepte (unitats 2-8) ----------
   Fan servir les mateixes peces que tech-learn.js (tSvg, tA, tCard i les classes .ta). bot2Css afegeix algunes
   animacions pròpies (.b2-*) quan cal un temps diferent. */
const BOT2_BC = { mov: '#3D7BF4', act: '#F08A24', loop: '#1FA463', cond: '#F2B21B', art: '#E5489A', snd: '#14A3B8', fn: '#8B5CF6', var: '#F2683C' };
// un bloc dibuixat dins d'una animació
const bot2Blk = (x, y, w, k, label, t, cls = 'ta-in', b = {}) => { const c = BOT2_BC[BIT_CAT[k]] || BOT2_BC.mov, dark = BIT_CAT[k] === 'cond';
  return `<g ${t == null ? '' : tA(t, cls)}><g transform="translate(${x} ${y})"><rect width="${w}" height="30" rx="9" fill="${c}"/><rect width="${w}" height="30" rx="9" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="2"/><g transform="translate(5 3)" color="${dark ? '#3A2600' : '#fff'}"><svg width="24" height="24" viewBox="0 0 24 24">${(BIT_ICO[k] || '').replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="34" y="20" class="tat s${dark ? '' : ' w'}">${label || String(bitLabel({ k, ...b })).replace(/<[^>]+>/g, '')}</text></g></g>`; };
// un bucle (contenidor) dibuixat: capçalera i cos
const bot2Cont = (x, y, w, h, k, label, t) => { const c = BOT2_BC[BIT_CAT[k]];
  return `<g ${tA(t, 'ta-in')}><g transform="translate(${x} ${y})"><rect width="${w}" height="${h}" rx="12" fill="${c}" fill-opacity=".13" stroke="${c}" stroke-width="2.5"/><rect width="${w}" height="30" rx="10" fill="${c}"/><rect x="0" y="30" width="9" height="${h - 42}" fill="${c}"/><rect x="0" y="${h - 12}" width="${w}" height="12" rx="6" fill="${c}"/><g transform="translate(5 3)" color="${k === 'if' ? '#3A2600' : '#fff'}"><svg width="24" height="24" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="34" y="20" class="tat s${k === 'if' ? '' : ' w'}">${label}</text></g></g>`; };
const bot2Star = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -16L4.8 -6L16 -4.8L7.6 2.8L10 14L0 8.4L-10 14L-7.6 2.8L-16 -4.8L-4.8 -6Z" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2" stroke-linejoin="round"/></g>`;
const bot2Apple = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -8C-6 -13 -16 -10 -16 1C-16 11 -8 17 0 14C8 17 16 11 16 1C16 -10 6 -13 0 -8Z" fill="#EF4B4B" stroke="#A82A2A" stroke-width="2"/><path d="M0 -8q0 -6 3 -9" stroke="#6B3F20" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M2 -13q7 -6 11 -1q-6 4 -11 1z" fill="#4FAE45"/></g>`;
const bot2Rock = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="2" rx="22" ry="6" fill="#0B2A12" opacity=".2"/><path d="M-21 -2Q-24 -24 -6 -31Q12 -36 20 -18Q25 -4 16 -1L-14 0Q-20 0 -21 -2Z" fill="url(#bwRock)" stroke="#5E667A" stroke-width="2"/></g>`;
const bot2Flag = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="0" y="-46" width="4" height="46" rx="2" fill="#5B4636"/><path d="M4 -44 Q16 -48 28 -42 Q20 -36 30 -30 Q16 -34 4 -30Z" fill="#EF5A5A" stroke="#A9302A" stroke-width="1.6"/></g>`;
const bot2Tile = (x, y, c, w = 40) => `<rect x="${x}" y="${y}" width="${w}" height="${w}" rx="9" fill="${c}" stroke="${exvMixT(c, -.2)}" stroke-width="2"/>`;
const NOTE_COL = { do: '#EF5A5A', re: '#F08A24', mi: '#F2B21B', fa: '#3CC47C', sol: '#14A3B8', la: '#3D7BF4', si: '#8B5CF6', do2: '#E5489A' };
const TANI_ROBOT = {
  // un bucle: quatre blocs iguals es tornen un sol bloc dins de «Repeteix 4 vegades»
  loop() {
    return tSvg(214, `<text x="80" y="18" text-anchor="middle" class="tat s" ${tA(.1, 'ta-fade')}>${L('Sense bucle', 'Sin bucle')}</text>
      ${[0, 1, 2, 3].map(i => bot2Blk(14, 28 + i * 38, 132, 'fwd', null, .3 + i * .3)).join('')}
      <g ${tA(1.7, 'ta-in')}><path d="M154 106h22" stroke="#1FA463" stroke-width="5" stroke-linecap="round"/><path d="M172 96l11 10-11 10" fill="none" stroke="#1FA463" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <text x="250" y="18" text-anchor="middle" class="tat s" ${tA(2, 'ta-fade')}>${L('Amb un bucle', 'Con un bucle')}</text>
      ${bot2Cont(190, 50, 124, 92, 'rep', L('Repeteix 4', 'Repite 4'), 2.1)}${bot2Blk(208, 86, 100, 'fwd', null, 2.5)}
      <g ${tA(3.1)}><rect x="186" y="160" width="132" height="34" rx="17" fill="#E7F7EE" stroke="#1FA463" stroke-width="2"/><text x="252" y="182" text-anchor="middle" class="tat s">${L('4 blocs → 2 blocs', '4 bloques → 2 bloques')}</text></g>`);
  },
  // un patró: el tros que es repeteix
  pattern() {
    const sh = (k, x, y) => k === 0 ? `<circle cx="${x}" cy="${y}" r="12" fill="#EF5A5A"/>` : k === 1 ? `<rect x="${x - 11}" y="${y - 11}" width="22" height="22" rx="4" fill="#3D7BF4"/>` : `<path d="M${x} ${y - 13}L${x + 13} ${y + 10}H${x - 13}Z" fill="#F2B21B"/>`;
    return tSvg(214, `${[...Array(9).keys()].map(i => `<g ${tA(.2 + i * .14)}>${sh(i % 3, 28 + i * 33, 54)}</g>`).join('')}
      ${[0, 1, 2].map(g => `<g ${tA(1.7 + g * .35, 'ta-in')}><path d="M${12 + g * 99} 78q0 10 10 10h70q10 0 10 10q0 -10 10 -10h0" fill="none" stroke="#1FA463" stroke-width="3" stroke-linecap="round"/><text x="${57 + g * 99}" y="112" text-anchor="middle" class="tat s">${g + 1}</text></g>`).join('')}
      <g ${tA(2.9, 'ta-in')}><rect x="40" y="132" width="240" height="64" rx="16" fill="#E7F7EE" stroke="#1FA463" stroke-width="2.5"/><text x="160" y="158" text-anchor="middle" class="tat b">${L('El patró es repeteix 3 vegades', 'El patrón se repite 3 veces')}</text>
      ${[0, 1, 2].map(k => sh(k, 136 + k * 26, 180)).join('')}<text x="226" y="186" class="tat b">× 3</text></g>`);
  },
  // el llapis: en Bit deixa rastre per on passa
  pen() {
    const g = [...Array(16).keys()].map(i => bot2Tile(80 + (i % 4) * 42, 18 + Math.floor(i / 4) * 42, '#F3DDA6', 38)).join('');
    return tSvg(214, `${g}<path ${tA(.4, 'ta-draw')} pathLength="1" d="M99 163V37H225V163H99" fill="none" stroke="#8B5CF6" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>
      <g ${tA(.2, 'ta-fade')}>${tBitMini(99, 172, 1, .62)}</g>
      <text x="290" y="70" text-anchor="middle" class="tat s" ${tA(1.6, 'ta-fade')}>${L('per on', 'por donde')}</text><text x="290" y="90" text-anchor="middle" class="tat s" ${tA(1.6, 'ta-fade')}>${L('passa,', 'pasa,')}</text><text x="290" y="110" text-anchor="middle" class="tat s" ${tA(1.9, 'ta-fade')}>${L('pinta!', '¡pinta!')}</text>
      <text x="40" y="100" text-anchor="middle" class="tat b" ${tA(2.4)}>✏️</text>`);
  },
  // el llum d'en Bit canvia de color
  led() {
    const cs = ['r', 'g', 'u', 'y'];
    return tSvg(214, `${cs.map((c, i) => `<g class="tv tv${i}">${bot2Blk(14, 92, 150, 'light', `${L('Encén el llum', 'Enciende la luz')}`)}<circle cx="152" cy="107" r="8" fill="${BIT_COL[c]}" stroke="#fff" stroke-width="2"/><g transform="translate(240 168) scale(1.7)">${bitBot(2, c)}</g><text x="240" y="204" text-anchor="middle" class="tat b">${L(BIT_CNAME[c][0], BIT_CNAME[c][1])}</text></g>`).join('')}
      <path d="M172 107h22" stroke="#E5489A" stroke-width="4" stroke-linecap="round" stroke-dasharray="4 5" class="ta-dash"/>`, 'loop4');
  },
  // les notes: de greu a agut, cada una amb el seu color
  notes() {
    return tSvg(214, BIT_NOTES.map((n, i) => { const h = 56 + i * 15, x = 16 + i * 37; return `<g ${tA(.2 + i * .32)}><rect x="${x}" y="${190 - h}" width="31" height="${h}" rx="8" fill="${NOTE_COL[n]}"/><rect x="${x + 5}" y="${196 - h}" width="21" height="7" rx="3.5" fill="#fff" opacity=".35"/><text x="${x + 15.5}" y="182" text-anchor="middle" class="tat s w">${bitNoteName(n)}</text>
      <g transform="translate(${x + 14} ${168 - h})"><path d="M-2 6V-10l10 -3V3" stroke="${NOTE_COL[n]}" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="-5" cy="6" rx="4.5" ry="3.5" fill="${NOTE_COL[n]}"/></g></g>`; }).join('')
      + `<text x="160" y="22" text-anchor="middle" class="tat s" ${tA(3, 'ta-fade')}>${L('greu → agut', 'grave → agudo')}</text>`);
  },
  // un esdeveniment: quan premo el botó, en Bit reacciona
  event() {
    return tSvg(214, `<g ${tA(.2)}><rect x="16" y="60" width="96" height="96" rx="22" fill="#20306A"/><circle cx="64" cy="108" r="30" fill="#3A4C8F"/><circle cx="64" cy="108" r="24" fill="#E5489A" class="b2-press"/><text x="64" y="117" text-anchor="middle" class="tat b w" style="font-size:24px">A</text></g>
      <g ${tA(.7, 'ta-in')}><path d="M76 56l-8 -18M88 64l14 -14M60 52l-2 -18" stroke="#FFC531" stroke-width="4" stroke-linecap="round"/></g>
      <g ${tA(1.2, 'ta-in')}><path d="M120 108h26" stroke="#20306A" stroke-width="5" stroke-linecap="round"/><path d="M142 98l11 10-11 10" fill="none" stroke="#20306A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(1.6, 'ta-in')}><rect x="160" y="20" width="150" height="34" rx="12" fill="#24398C"/><text x="235" y="42" text-anchor="middle" class="tat s w">${L('Quan premo A', 'Cuando pulso A')}</text></g>
      ${bot2Blk(170, 58, 140, 'light', L('Encén el llum', 'Enciende la luz'), 2)}
      <g ${tA(2.6)}><g transform="translate(236 196) scale(1.15)">${bitBot(2, 'g')}</g></g>`);
  },
  // un sensor: en Bit «veu» si hi ha un obstacle davant
  sensor() {
    return tSvg(214, `<rect x="0" y="150" width="320" height="10" rx="5" fill="#E3E9FA"/>
      <g transform="translate(70 152) scale(1.5)">${bitBot(1)}</g>${bot2Rock(250, 152, 1.6)}
      <path ${tA(.5, 'ta-fade')} d="M94 122L206 96V150Z" fill="#7DF3FF" opacity=".35"/><path ${tA(.5, 'ta-fade')} d="M94 122L206 96M94 122L206 150" stroke="#2BB7D6" stroke-width="2" stroke-dasharray="5 5"/>
      <g ${tA(1.2, 'ta-in')}><rect x="20" y="10" width="196" height="40" rx="14" fill="#fff" stroke="#F2B21B" stroke-width="3"/><text x="118" y="36" text-anchor="middle" class="tat s">${L('Hi ha un obstacle davant?', '¿Hay un obstáculo delante?')}</text></g>
      <g ${tA(2.2)}><circle cx="256" cy="44" r="26" fill="#3CC47C"/><text x="256" y="51" text-anchor="middle" class="tat b w">${L('SÍ', 'SÍ')}</text></g>
      <text x="160" y="196" text-anchor="middle" class="tat s" ${tA(2.8, 'ta-fade')}>${L('El sensor li diu què hi ha', 'El sensor le dice qué hay')}</text>`);
  },
  // si…: una decisió (la branca del «sí» només es fa si es compleix)
  ifthen() {
    return tSvg(220, `<g ${tA(.2)}><path d="M160 6L256 46L160 86L64 46Z" fill="#FFF6D8" stroke="#F2B21B" stroke-width="3"/><text x="160" y="42" text-anchor="middle" class="tat s">${L('Hi ha un obstacle', 'Hay un obstáculo')}</text><text x="160" y="60" text-anchor="middle" class="tat s">${L('davant?', 'delante?')}</text></g>
      <g ${tA(.9, 'ta-in')}><path d="M256 46H286V100" fill="none" stroke="#3CC47C" stroke-width="4"/><text x="270" y="36" class="tat s">${L('sí', 'sí')}</text></g>${bot2Blk(222, 104, 96, 'right', L('Gira', 'Gira'), 1.3)}
      <g ${tA(1.9, 'ta-in')}><path d="M64 46H34V176H120" fill="none" stroke="#EF5A5A" stroke-width="4"/><text x="18" y="36" class="tat s">${L('no', 'no')}</text></g>
      <g ${tA(2.3, 'ta-in')}><path d="M270 134V176H200" fill="none" stroke="#3CC47C" stroke-width="4"/></g>
      <g ${tA(2.7)}><rect x="112" y="158" width="96" height="36" rx="12" fill="#3D7BF4"/><text x="160" y="181" text-anchor="middle" class="tat s w">${L('continua', 'continúa')}</text></g>`);
  },
  // si… si no…: sempre fa una de les dues coses
  ifelse() {
    return tSvg(214, `<g ${tA(.2)}><path d="M160 6L250 44L160 82L70 44Z" fill="#FFF6D8" stroke="#F2B21B" stroke-width="3"/><text x="160" y="40" text-anchor="middle" class="tat s">${L('El terra', 'El suelo')}</text><text x="160" y="58" text-anchor="middle" class="tat s">${L('és vermell?', 'es rojo?')}</text></g>
      <g ${tA(.9, 'ta-in')}><path d="M70 44H40V96" fill="none" stroke="#3CC47C" stroke-width="4"/><text x="36" y="34" class="tat s">${L('sí', 'sí')}</text></g>${bot2Blk(6, 100, 130, 'right', null, 1.2)}
      <g ${tA(1.8, 'ta-in')}><path d="M250 44H280V96" fill="none" stroke="#EF5A5A" stroke-width="4"/><text x="266" y="34" class="tat s">${L('no', 'no')}</text></g>${bot2Blk(196, 100, 118, 'fwd', null, 2.1)}
      <g ${tA(2.7, 'ta-in')}><rect x="50" y="150" width="220" height="52" rx="16" fill="#E8EEFF"/><text x="160" y="172" text-anchor="middle" class="tat s">${L('Sempre en fa una de les dues,', 'Siempre hace una de las dos,')}</text><text x="160" y="192" text-anchor="middle" class="tat s">${L('mai les dues alhora', 'nunca las dos a la vez')}</text></g>`);
  },
  // el sensor de color mira el terra
  floor() {
    const cs = ['r', 'g', 'y', 'u'];
    return tSvg(214, `${cs.map((c, i) => `<g transform="translate(${30 + i * 68} 150)"><path d="M0 0h60l-8 30h-60z" fill="${BIT_COL[c]}" transform="skewX(-12)"/></g>`).join('')}
      <g class="b2-slide"><g transform="translate(0 0)"><path d="M78 118L64 152H100Z" fill="#FFF3A6" opacity=".7"/><g transform="translate(80 120) scale(1.3)">${bitBot(2)}</g></g></g>
      <g class="b2-say"><rect x="190" y="14" width="120" height="40" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="250" y="40" text-anchor="middle" class="tat s">${L('Quin color?', '¿Qué color?')}</text></g>
      <text x="160" y="206" text-anchor="middle" class="tat s">${L('Un sensor sota en Bit llegeix el color del terra', 'Un sensor bajo Bit lee el color del suelo')}</text>`);
  },
  // una funció: un grup de blocs amb nom
  func() {
    return tSvg(214, `${bot2Blk(16, 26, 128, 'fwd', null, .2)}${bot2Blk(16, 62, 128, 'right', L('Gira a la dreta', 'Gira a la derecha'), .5)}${bot2Blk(16, 98, 128, 'fwd', null, .8)}
      <g ${tA(1.3, 'ta-pop')}><rect x="6" y="4" width="148" height="134" rx="14" fill="none" stroke="#8B5CF6" stroke-width="3.5" stroke-dasharray="8 6"/><rect x="38" y="150" width="84" height="32" rx="12" fill="#8B5CF6"/><text x="80" y="172" text-anchor="middle" class="tat s w">${L('Funció A', 'Función A')}</text></g>
      <g ${tA(1.9, 'ta-in')}><path d="M164 92h20" stroke="#8B5CF6" stroke-width="5" stroke-linecap="round"/><path d="M180 82l11 10-11 10" fill="none" stroke="#8B5CF6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      ${bot2Blk(200, 50, 112, 'call', L('Funció A', 'Función A'), 2.3)}${bot2Blk(200, 88, 112, 'fwd', null, 2.6)}${bot2Blk(200, 126, 112, 'call', L('Funció A', 'Función A'), 2.9)}
      <text x="256" y="196" text-anchor="middle" class="tat s" ${tA(3.3, 'ta-fade')}>${L('un nom per a 3 blocs', 'un nombre para 3 bloques')}</text>`);
  },
  // una funció dins d'un bucle fa una escala
  funcloop() {
    const st = [0, 1, 2].map(i => `<path ${tA(1.2 + i * .6, 'ta-draw')} pathLength="1" d="M${196 + i * 36} ${178 - i * 44}V${134 - i * 44}H${232 + i * 36}" fill="none" stroke="#8B5CF6" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`).join('');
    return tSvg(214, `${bot2Cont(10, 40, 160, 92, 'rep', L('Repeteix 3', 'Repite 3'), .2)}${bot2Blk(28, 76, 132, 'call', L('Funció «graó»', 'Función «escalón»'), .6)}
      <rect x="180" y="178" width="130" height="8" rx="4" fill="#E3E9FA"/>${st}
      <text x="90" y="168" text-anchor="middle" class="tat s" ${tA(3.2, 'ta-fade')}>${L('3 graons amb 3 blocs', '3 escalones con 3 bloques')}</text>`);
  },
  // el comptador: una capsa amb un número que va canviant
  counter() {
    return tSvg(214, `<g class="b2q4">${[0, 1, 2, 3].map(i => `<g class="q q${i}"><rect x="182" y="40" width="120" height="96" rx="20" fill="#FFF1EA" stroke="#F2683C" stroke-width="3"/><text x="242" y="64" text-anchor="middle" class="tat s">${L('comptador', 'contador')}</text><text x="242" y="118" text-anchor="middle" style="font:900 46px Lexend,system-ui,sans-serif;fill:#F2683C">${i}</text></g>`).join('')}
      <path d="M20 150h120l-12 46h-96z" fill="#C98A4B" stroke="#7A4A1E" stroke-width="3" stroke-linejoin="round"/><path d="M26 164h108" stroke="#7A4A1E" stroke-width="2" opacity=".5"/>
      ${[1, 2, 3].map(i => `<g class="b2f${i}">${bot2Apple(40 + i * 24, 142, .9)}</g>`).join('')}
      ${[1, 2, 3].map(i => `<g class="q q${i}">${bot2Blk(150, 158, 160, 'inc', L('Suma 1 al comptador', 'Suma 1 al contador'))}</g>`).join('')}</g>
      <text x="80" y="40" text-anchor="middle" class="tat s">${L('Cada poma:', 'Cada manzana:')}</text><text x="80" y="60" text-anchor="middle" class="tat s">${L('+1', '+1')}</text>`);
  },
  // repeteix fins que…: no saps quantes vegades, però saps quan has de parar
  until() {
    const tiles = [0, 1, 2, 3, 4].map(i => bot2Tile(20 + i * 56, 120, '#F3DDA6', 50)).join('');
    return tSvg(214, `${tiles}${bot2Flag(262, 164, .9)}<g class="b2walk"><g transform="translate(45 166)">${bitBot(1)}</g></g>
      <g class="b2q4">${['no', 'no', 'no', L('sí!', '¡sí!')].map((t, i) => `<g class="q q${i}"><rect x="40" y="14" width="240" height="42" rx="14" fill="#fff" stroke="${i === 3 ? '#3CC47C' : '#F2B21B'}" stroke-width="3"/><text x="160" y="41" text-anchor="middle" class="tat s">${L('Ja és a la bandera?', '¿Ya está en la bandera?')} <tspan style="fill:${i === 3 ? '#1D8A4E' : '#B4501A'};font-weight:900">${t}</tspan></text></g>`).join('')}</g>
      <text x="160" y="204" text-anchor="middle" class="tat s">${L('Repeteix… fins que arribi!', 'Repite… ¡hasta que llegue!')}</text>`);
  },
  // dissenyar un món: cada cosa al seu lloc
  design() {
    const g = [...Array(24).keys()].map(i => bot2Tile(52 + (i % 6) * 36, 14 + Math.floor(i / 6) * 36, (i % 6 + Math.floor(i / 6)) % 2 ? '#9EDB73' : '#8FD36C', 34)).join('');
    return tSvg(214, `${g}<g ${tA(.3)}>${bot2Rock(105, 76, .7)}</g><g ${tA(.7)}><g transform="translate(177 74)"><circle cy="-14" r="11" fill="url(#bwLeaf2)"/><rect x="-3" y="-6" width="6" height="8" fill="#8A5A33"/></g></g>
      <g ${tA(1.1)}><rect x="125" y="88" width="34" height="34" rx="9" fill="url(#bwPond)"/></g><g ${tA(1.5)}>${bot2Star(213, 104, .8)}</g><g ${tA(1.9)}>${bot2Flag(240, 154, .62)}</g><g ${tA(2.3)}><g transform="translate(69 152) scale(.6)">${bitBot(1)}</g></g>
      <g ${tA(2.8, 'ta-in')}><rect x="60" y="170" width="200" height="36" rx="14" fill="#20306A"/><text x="160" y="193" text-anchor="middle" class="tat s w">${L('Tu decideixes el repte!', '¡Tú decides el reto!')}</text></g>`);
  },
  // provar el repte d'una altra persona
  test() {
    const kid = (x, col, hair) => `<g transform="translate(${x} 150)"><rect x="-22" y="-44" width="44" height="50" rx="16" fill="${col}"/><circle cy="-64" r="20" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2"/><path d="M-20 -68q20 -26 40 0q-6 -14 -20 -14q-14 0 -20 14z" fill="${hair}"/><circle cx="-7" cy="-63" r="2.4" fill="#2B1A38"/><circle cx="7" cy="-63" r="2.4" fill="#2B1A38"/><path d="M-6 -55q6 5 12 0" stroke="#2B1A38" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>`;
    return tSvg(214, `<rect x="0" y="156" width="320" height="8" rx="4" fill="#E3E9FA"/>${kid(54, '#2F5BEA', '#6B3F20')}${kid(266, '#F08A24', '#2B1A38')}
      <g ${tA(.3)}><rect x="118" y="96" width="84" height="56" rx="8" fill="#20306A"/><rect x="124" y="102" width="72" height="44" rx="5" fill="#8FD36C"/><g transform="translate(150 140) scale(.42)">${bitBot(1)}</g>${bot2Flag(176, 140, .4)}<path d="M108 152h104l8 8H100z" fill="#3A4C8F"/></g>
      <g ${tA(1)}><rect x="10" y="8" width="140" height="48" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="80" y="37" text-anchor="middle" class="tat s">${L('Prova el meu repte!', '¡Prueba mi reto!')}</text></g>
      <g ${tA(2)}><rect x="170" y="8" width="140" height="48" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="240" y="37" text-anchor="middle" class="tat s">${L('Que bo! Tinc una idea…', '¡Qué bueno! Tengo una idea…')}</text></g>
      <text x="160" y="200" text-anchor="middle" class="tat s" ${tA(2.8, 'ta-fade')}>${L('Les opinions ajuden a millorar', 'Las opiniones ayudan a mejorar')}</text>`);
  },
  // presentar el projecte
  present() {
    const head = (x, y, c) => `<g transform="translate(${x} ${y})"><circle r="13" fill="#FFD9B8"/><path d="M-13 -3q13 -18 26 0q-4 -10 -13 -10q-9 0 -13 10z" fill="${c}"/><rect x="-16" y="13" width="32" height="20" rx="9" fill="${['#2F5BEA', '#F08A24', '#3CC47C', '#E5489A'][x % 4]}"/></g>`;
    return tSvg(214, `<g ${tA(.2)}><rect x="70" y="10" width="180" height="104" rx="12" fill="#20306A"/><rect x="78" y="18" width="164" height="88" rx="8" fill="#8FD36C"/><path d="M100 90h40v-20h40v-20h30" fill="none" stroke="#F3DDA6" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>${bot2Flag(214, 54, .45)}<g transform="translate(102 96) scale(.4)">${bitBot(1)}</g></g>
      <g ${tA(.9)}>${head(60, 150, '#6B3F20')}</g><g ${tA(1.1)}>${head(120, 160, '#2B1A38')}</g><g ${tA(1.3)}>${head(200, 160, '#B5651D')}</g><g ${tA(1.5)}>${head(260, 150, '#2B1A38')}</g>
      <g ${tA(2.2, 'ta-in')}><rect x="96" y="120" width="128" height="30" rx="12" fill="#FFC531"/><text x="160" y="141" text-anchor="middle" class="tat s">${L('El meu projecte', 'Mi proyecto')}</text></g>`);
  }
};
// tech-learn.js es carrega després: quan hi és, les animacions noves s'afegeixen a TANI (si encara no hi són)
function bot2MergeTani() { if (typeof TANI !== 'undefined') { for (const k of Object.keys(TANI_ROBOT)) if (!TANI[k]) TANI[k] = TANI_ROBOT[k]; return true; } return false; }

/* ---------- Pas «design»: l'editor de mons (unitat 8) ----------
   st: {q, size:[w,h], min (obstacles mínims, 3), name (títol per defecte)}. Es toca una eina i després les caselles.
   El món es desa a P.tech.bw (i al portafoli) i els passos amb w:'mine' el fan servir. */
const BOT2_TOOLS = [
  ['#', ['Camí', 'Camino']], ['.', ['Herba', 'Hierba']], ['R', ['Roca', 'Roca']], ['T', ['Arbre', 'Árbol']], ['~', ['Aigua', 'Agua']],
  ['*', ['Estrella', 'Estrella']], ['o', ['Fruita', 'Fruta']], ['F', ['Bandera', 'Bandera']], ['b', ['Caixa', 'Caja']], ['H', ['Casa', 'Casa']], ['c', ['Color', 'Color']], ['bot', ['En Bit', 'Bit']]
];
function bot2ToolIco(k) {
  const s = b => `<svg viewBox="-30 -30 60 60">${bitDefs()}${b}</svg>`;
  if (k === '#') return s('<rect x="-22" y="-22" width="44" height="44" rx="10" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="2"/>');
  if (k === '.') return s('<rect x="-22" y="-22" width="44" height="44" rx="10" fill="url(#bwGrass)"/><path d="M-8 10l-2 -8M-4 10v-11M0 10l2 -8" stroke="#5FA841" stroke-width="3" stroke-linecap="round"/>');
  if (k === 'R') return s(`<g transform="translate(0 16)">${bot2Rock(0, 0, .95)}</g>`);
  if (k === 'T') return s('<path d="M-3 20V4h6v16z" fill="#8A5A33"/><circle cx="-8" cy="-2" r="11" fill="url(#bwLeaf)"/><circle cx="8" cy="-4" r="11" fill="url(#bwLeaf)"/><circle cy="-14" r="13" fill="url(#bwLeaf2)"/>');
  if (k === '~') return s('<rect x="-22" y="-22" width="44" height="44" rx="12" fill="url(#bwPond)"/><path d="M-14 -2q5 -5 10 0t10 0t10 0" stroke="#BDEBFF" stroke-width="3" fill="none" stroke-linecap="round"/>');
  if (k === '*') return s(bot2Star(0, 0, 1.2));
  if (k === 'o') return s(bot2Apple(0, 2, 1.2));
  if (k === 'F') return s(bot2Flag(-12, 24, .95));
  if (k === 'b') return s('<path d="M-15 -8h30v26h-30z" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2"/><path d="M-15 -8l5 -6h30l-5 6z" fill="#EDBB7A" stroke="#7A4A1E" stroke-width="2"/><path d="M0 -8V18M-15 5H15" stroke="#F6DCA8" stroke-width="3"/>');
  if (k === 'H') return s('<rect x="-17" y="-4" width="34" height="24" rx="3" fill="url(#bwWall)" stroke="#8E6A3A" stroke-width="2"/><path d="M-22 -2L0 -20L22 -2Z" fill="url(#bwRoof)" stroke="#8E2A22" stroke-width="2" stroke-linejoin="round"/><rect x="-4" y="6" width="8" height="14" fill="#B07A3E"/>');
  if (k === 'c') return s(['r', 'g', 'y', 'u'].map((c, i) => `<rect x="${i % 2 ? 1 : -21}" y="${i > 1 ? 1 : -21}" width="20" height="20" rx="6" fill="${BIT_COL[c]}"/>`).join(''));
  return s(`<g transform="translate(0 24) scale(.62)">${bitBot(2)}</g>`);
}
// es pot arribar a tot el que demana el repte?
function bot2Reach(map) {
  const W = bitWorld({ map, paths: false }), seen = new Set([bitKey(W.bot[0], W.bot[1])]), q = [[W.bot[0], W.bot[1]]];
  while (q.length) { const [x, y] = q.shift(); for (let d = 0; d < 4; d++) { const nx = x + BIT_DX[d], ny = y + BIT_DY[d], k = bitKey(nx, ny); if (seen.has(k) || bitBlocked(W, nx, ny)) continue; seen.add(k); q.push([nx, ny]); } }
  const targets = [...W.gems, ...W.boxes, ...W.homes, ...(W.goal ? [bitKey(...W.goal)] : [])];
  return targets.every(k => seen.has(k));
}
// què li falta al món perquè sigui un bon repte (llista de criteris amb ✓)
function bot2DesignCrit(map, st) {
  const all = map.join(''), cnt = re => (all.match(re) || []).length;
  const bot = cnt(/[\^>v<]/g), obs = cnt(/[RT~]/g), goal = cnt(/F/g) + cnt(/[*o]/g), bx = cnt(/b/g), hs = cnt(/H/g), min = st.min ?? 3;
  return [
    [bot === 1, L('En Bit és al món', 'Bit está en el mundo')],
    [goal > 0 || (bx > 0 && bx === hs), L('Hi ha una missió: bandera, estrelles, fruita o caixes i cases', 'Hay una misión: bandera, estrellas, fruta o cajas y casas')],
    [bx === hs, L('Tantes caixes com cases', 'Tantas cajas como casas')],
    [obs >= min, L(`Almenys ${min} obstacles (roques, arbres o aigua)`, `Al menos ${min} obstáculos (rocas, árboles o agua)`)],
    [bot === 1 && bot2Reach(map), L('En Bit pot arribar a tot', 'Bit puede llegar a todo')]
  ];
}
function bot2DesignHTML(st, D) {
  const W = bitWorld({ map: D.map, paths: false }), S = bitSim(W), w = W.w, h = W.h, vw = w * BIT_C + 2 * BW_M, vh = h * BIT_C + 2 * BW_M + BW_TOP + BW_CL;
  const grid = `<div class="bdgrid" style="left:${(BW_M / vw * 100).toFixed(3)}%;top:${((BW_M + BW_TOP) / vh * 100).toFixed(3)}%;width:${(w * BIT_C / vw * 100).toFixed(3)}%;height:${(h * BIT_C / vh * 100).toFixed(3)}%;grid-template-columns:repeat(${w},1fr);grid-template-rows:repeat(${h},1fr)">${D.map.map((r, y) => [...r].map((_, x) => `<button data-x="${x}" data-y="${y}" aria-label="${x + 1},${y + 1}"></button>`).join('')).join('')}</div>`;
  const crit = bot2DesignCrit(D.map, st);
  return `<div class="tsq2"><span class="tsqc">${bitChar('idle')}</span><div><p>${tval(st.q)}</p></div></div>
    <div class="bdes"><div class="bdw">${D.v3 ? `<div class="b3d bd3" id="bd3" style="aspect-ratio:${(vw / vh).toFixed(3)}"></div>` : `<div class="bdsvg">${bitSVG(W, S, { still: true })}${grid}</div>`}<button class="bdv" onclick="bot2DesignView()">${D.v3 ? L('✎ Torna a editar', '✎ Vuelve a editar') : L('👁 Mira\'l en 3D', '👁 Míralo en 3D')}</button></div>
    <div class="bdside"><div class="bdtools">${BOT2_TOOLS.filter(([k]) => !st.tools || st.tools.includes(k)).map(([k, n]) => `<button class="bdt${D.tool === k ? ' on' : ''}" data-t="${k}"><span>${bot2ToolIco(k)}</span><b>${L(n[0], n[1])}</b></button>`).join('')}</div>
      <p class="bdhint">${D.tool === 'bot' ? L('Toca una casella per posar-hi en Bit. Si el toques una altra vegada, gira.', 'Toca una casilla para poner a Bit. Si lo tocas otra vez, gira.') : D.tool === 'c' ? L('Cada toc canvia el color del terra.', 'Cada toque cambia el color del suelo.') : L("Toca les caselles del món per posar-hi l'eina triada.", 'Toca las casillas del mundo para poner la herramienta elegida.')}</p>
      <label class="bdname">${L('Nom del teu repte', 'Nombre de tu reto')}<input id="bdn" maxlength="28" value="${esc0(D.name)}" placeholder="${L('p. ex. El bosc de les estrelles', 'p. ej. El bosque de las estrellas')}"></label>
      <ul class="bdcrit">${crit.map(([ok, t]) => `<li class="${ok ? 'ok' : ''}">${ok ? '✓' : '·'} ${t}</li>`).join('')}</ul></div></div>`;
}
function bot2Design(st) {
  bot2Css();
  const [w, h] = st.size || [7, 5], t = typeof TS_ === 'function' ? TS_() : {};
  const old = t.bw && Array.isArray(t.bw.map) && t.bw.map.length === h && t.bw.map[0].length === w ? t.bw.map.slice() : null;
  const D = { map: old || (st.start ? st.start.slice() : Array.from({ length: h }, (_, y) => (y === h - 1 ? '>' : '.') + '.'.repeat(w - 2) + (y === 0 ? 'F' : '.'))), tool: 'R', name: t.bwt || (st.name ? tx(st.name) : '') };
  const set = (x, y, ch) => { D.map[y] = D.map[y].slice(0, x) + ch + D.map[y].slice(x + 1); };
  const draw = () => {
    const b = $('#tsb'); b.classList.add('wide'); b.innerHTML = bot2DesignHTML(st, D);
    b.querySelectorAll('.bdt').forEach(e => e.onclick = () => { D.tool = e.dataset.t; SFX.tap && SFX.tap(); draw(); });
    b.querySelectorAll('.bdgrid button').forEach(e => e.onclick = () => {
      const x = +e.dataset.x, y = +e.dataset.y, cur = D.map[y][x];
      if (D.tool === 'bot') { if ('^>v<'.includes(cur)) set(x, y, '^>v<'['^>v<'.indexOf(cur) + 1 & 3]); else { D.map = D.map.map(r => r.replace(/[\^>v<]/g, '.')); set(x, y, '>'); } }
      else if (D.tool === 'c') set(x, y, 'rgyu'[('rgyu'.indexOf(cur) + 1) % 4]);
      else if (D.tool === 'F') { D.map = D.map.map(r => r.replace(/F/g, '.')); set(x, y, cur === 'F' ? '.' : 'F'); }
      else set(x, y, cur === D.tool && D.tool !== '.' ? '.' : D.tool);
      SFX.tap && SFX.tap(); draw();
    });
    const n = $('#bdn'); if (n) n.oninput = () => { D.name = n.value; };
    bot2DesignView = () => { D.v3 = !D.v3; draw(); };
    if (D.v3) bit3dLoad().then(M => { const box = document.getElementById('bd3'); if (!M || !box || box.querySelector('canvas')) return; try { const W3 = bitWorld({ map: D.map, paths: false }); M.create(box, W3, bitSim(W3), {}); box.classList.add('on'); } catch (e) { } });
    const ok = bot2DesignCrit(D.map, st).every(c => c[0]);
    tFoot(L('Desa el meu món', 'Guarda mi mundo'), () => {
      const tt = TS_(); tt.bw = { map: D.map.slice(), paths: false }; tt.bwt = (D.name || '').trim().slice(0, 28);
      tt.port.push({ id: 'pj' + Date.now().toString(36), sid: TSS.id, t: tt.bwt || st.name || TSS.s.t, w: { ...tt.bw }, prog: [], fns: null, kind: 'world', d: today() });
      if (tt.port.length > 60) tt.port.shift();
      save(); toast(L('Món desat! El trobaràs a «Projectes».', '¡Mundo guardado! Lo encontrarás en «Proyectos».')); addXPsafe(5); tNext();
    }, ok, `<button class="btn ghost" onclick="bot2DesignClear()">${L('Comença de nou', 'Empieza de nuevo')}</button>`);
    bot2DesignClear = () => { if (!confirm(L('Segur que vols esborrar el món i començar de nou?', '¿Seguro que quieres borrar el mundo y empezar de nuevo?'))) return; D.map = Array.from({ length: h }, (_, y) => (y === h - 1 ? '>' : '.') + '.'.repeat(w - 2) + (y === 0 ? 'F' : '.')); draw(); };
  };
  draw();
}
let bot2DesignClear = () => { }, bot2DesignView = () => { };

/* ---------- Pas «diploma»: el final del curs ---------- */
function bot2Diploma(st) {
  bot2Css();
  const t = TS_(), c = TECH.find(x => x.id === 'robot'), all = tSessions(c), done = all.filter(s => tDone(s.id)).length, nb = Object.keys(t.badges || {}).length, np = (t.port || []).length;
  const skills = c.units.map(u => tx(u.d));
  $('#tsb').innerHTML = `<div class="tcol"><div class="tdip" id="tdip"><div class="tdipb">
      <div class="tdiph"><img src="${typeof VAR !== 'undefined' && VAR.logo ? VAR.logo : 'img/brand/logo-tech.svg'}" alt="Numi Tech"><span>${tx(c.name)}</span></div>
      <p class="tdipk">${L('Diploma de', 'Diploma de')}</p><h1>${L('Programador/a de robots', 'Programador/a de robots')}</h1>
      <p class="tdipn">${esc0(P.name)}</p>
      <p class="tdipt">${tval(st.t || L("Ha après a donar ordres, repetir, decidir, crear funcions i fer servir variables per programar en Bit, i ha dissenyat el seu propi repte.", 'Ha aprendido a dar órdenes, repetir, decidir, crear funciones y usar variables para programar a Bit, y ha diseñado su propio reto.'))}</p>
      <ul class="tdips">${skills.map(s => `<li>${esc0(s)}</li>`).join('')}</ul>
      <div class="tdipnum"><span><b>${done}</b>${L('sessions', 'sesiones')}</span><span><b>${np}</b>${L('projectes', 'proyectos')}</span><span><b>${nb}</b>${L('insígnies', 'insignias')}</span></div>
      <div class="tdipf"><div><i></i><small>${L('El professor/a', 'El profesor/a')}</small></div><div class="tdipbot">${bitChar('win')}</div><div><b>${typeof today === 'function' ? today().split('-').reverse().join('/') : ''}</b><small>${L('Data', 'Fecha')}</small></div></div>
    </div></div></div>`;
  tFoot(L('Continua', 'Continúa'), tNext, true, `<button class="btn ghost" onclick="window.print()">${L('Imprimeix', 'Imprime')}</button>`);
  SFX.win && SFX.win(); typeof confetti === 'function' && confetti(120);
}

/* ---------- Connexió amb tech.js (es carrega després d'aquest fitxer) ---------- */
(function bot2Hook(n = 0) {
  if (typeof TSTEP === 'undefined' || typeof tHintBtn !== 'function' || typeof tSaveProj !== 'function') { if (n < 40 && typeof setTimeout === 'function') setTimeout(() => bot2Hook(n + 1), n ? 50 : 0); bot2MergeTani(); return; }
  bot2MergeTani();
  TSTEP.design = bot2Design;
  TSTEP.diploma = bot2Diploma;
  // «Repte extra»: un repte opcional per a qui va de pressa (es pot saltar)
  for (const k of ['build', 'parsons']) { const f0 = TSTEP[k]; TSTEP[k] = function (st) { f0(st); if (!st.extra) return; bot2Css();
    const q = document.querySelector('#tsb .tsq2 p'); if (q) q.insertAdjacentHTML('afterbegin', `<span class="txtra">⭐ ${L('Repte extra', 'Reto extra')}</span> `);
    tFoot(L('Continua', 'Continúa'), tNext, false, `<button class="btn ghost" onclick="tNext()">${L("Ara no, me'l salto", 'Ahora no, me lo salto')}</button>`); }; }
  // la pista «Mostra una solució» també posa les funcions i els botons de la solució
  const h0 = tHintBtn;
  tHintBtn = function (st) {
    h0(st); const b = document.getElementById('thint'); if (!b || !st.solFns) return;
    const oc = b.onclick; b.onclick = () => { oc(); if (!document.getElementById('thint') && TB) { TB.fns = bitClone(st.solFns); delete TB.fns._names; TB.cur = { l: TB.prog, i: TB.prog.length }; tbFresh(); tbDraw(); } };
  };
  // en desar un projecte: el món de veritat (també el de l'alumne), les funcions i els botons que ha programat
  const s0 = tSaveProj;
  tSaveProj = function (st) {
    s0(st); const t = TS_(), p = t.port[t.port.length - 1];
    if (p && TB) { p.w = TB.W.spec || p.w; if (TB.fns) { p.fns = bitClone(TB.fns); if (Object.keys(TB.fnName || {}).length) p.fns._names = { ...TB.fnName }; } if (st.w === 'mine' || (st.w && st.w.mine)) p.t = (t.bwt || tx(p.t)); save(); }
  };
})();

/* ---------- Estils de les peces noves (en línia perquè aquest fitxer sigui autònom) ---------- */
function bot2Css() {
  if (typeof document === 'undefined' || !document.head || document.getElementById('bot2css')) return;
  const s = document.createElement('style'); s.id = 'bot2css';
  s.textContent = `
:root{--b-var:#F2683C}
.tb.c-var,.tdb.c-var,.tchip.c-var{--bc:var(--b-var)}.tb.c-snd,.tdb.c-snd,.tchip.c-snd{--bc:var(--b-snd)}.tb.c-art,.tdb.c-art,.tchip.c-art{--bc:var(--b-art)}.tb.c-fn,.tdb.c-fn,.tchip.c-fn{--bc:var(--b-fn)}.tchip.c-loop{--bc:var(--b-loop)}.tchip.c-cond{--bc:var(--b-cond)}.tchip.c-act{--bc:var(--b-act)}
.tprog.multi{display:flex;flex-direction:column;gap:10px;background:#F7F9FF}
.tscript{background:#fff;border:2px solid var(--line);border-radius:16px;padding:0 8px 6px;position:relative}
.tscript.lock{background:#FAF8FF}
.thath{display:flex;align-items:center;gap:8px;margin:0 -8px 6px;padding:7px 12px 7px 7px;border-radius:14px 14px 4px 4px;background:linear-gradient(180deg,#2E46A3,#24398C);color:#fff;font-weight:900;font-size:14.5px;letter-spacing:.01em}
.thath .tbi{background:rgba(255,255,255,.2)}
.thath.h-fn{background:linear-gradient(180deg,#9B70FF,#7C4DEB)}
.thath.h-ev{background:linear-gradient(180deg,#2E46A3,#1B2B6B)}
.thath.h-ev .tbi svg{color:#FFC531}
.thath small{margin-left:auto;font-size:11.5px;font-weight:800;opacity:.85;text-transform:uppercase;letter-spacing:.05em}
.thath .tnum{color:#7C4DEB}
.tren{width:28px;height:26px;border-radius:8px;background:rgba(255,255,255,.22);color:#fff;font-size:14px}
.tscript .tempty.sm{margin:6px;font-size:13px}
.tslot.e{height:auto;min-height:40px;margin:4px 0;border:2px dashed #C4B2F5;background:#FAF7FF;color:#7C4DEB;font-size:13px;font-weight:800}.tslot.e span::before{content:"+ "}
.tit{margin-left:auto;flex:none;min-width:30px;padding:2px 8px;border-radius:99px;background:#fff;color:var(--bc);font-size:13px;font-weight:900;text-align:center;animation:b2pop .25s}
.tit.yes{background:#E3F8EC;color:#1D8A4E}.tit.no{background:#FFE9E4;color:#C2412D}
@keyframes b2pop{from{transform:scale(.4)}}
.tworld{position:relative}
.thud{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;margin-top:8px}.thud:empty{display:none}
.thud .ttune{pointer-events:auto}
.tcnt{display:inline-flex;flex-direction:column;align-items:center;min-width:76px;padding:5px 12px 6px;border-radius:16px;background:#FFF6F1;border:2.5px solid var(--b-var)}
.tcnt small{font-size:10.5px;font-weight:900;text-transform:uppercase;letter-spacing:.06em;color:#B4501A}
.tcnt b{font-size:28px;line-height:1;font-weight:900;color:var(--b-var);font-variant-numeric:tabular-nums}
.tcnt em{font-style:normal;font-size:11px;font-weight:800;color:var(--mut)}
.tcnt.pop b{animation:b2cnt .4s cubic-bezier(.3,1.6,.5,1)}@keyframes b2cnt{40%{transform:scale(1.45)}}
.tcnt.sm{min-width:60px;padding:3px 9px}.tcnt.sm b{font-size:22px}
.ttune{display:flex;flex-wrap:wrap;gap:5px;align-items:center;padding:6px;border-radius:16px;background:#EAF8FA;border:2px solid #BFE9F0}
.ttl{display:inline-flex;align-items:center;gap:5px;height:32px;padding:0 10px 0 6px;border-radius:10px;background:var(--b-snd);color:#fff;font-size:13px;font-weight:900}.ttl svg{width:18px;height:18px}
.ttn{--nc:#888;min-width:34px;height:32px;display:grid;place-items:center;padding:0 6px;border-radius:10px;background:color-mix(in srgb,var(--nc) 16%,#fff);border:2.5px solid var(--nc);color:color-mix(in srgb,var(--nc) 70%,#000);font-weight:900;font-size:13.5px}
.ttn.ok{background:var(--nc);color:#fff}.ttn.ko{background:#fff;border-style:dashed;opacity:.6}.ttn.hear{animation:b2hear .4s}
@keyframes b2hear{40%{transform:translateY(-6px) scale(1.12)}}
.ttune.sm .ttn{min-width:28px;height:26px;font-size:12px}
.n-do{--nc:#EF5A5A}.n-re{--nc:#F08A24}.n-mi{--nc:#E3A400}.n-fa{--nc:#3CC47C}.n-sol{--nc:#14A3B8}.n-la{--nc:#3D7BF4}.n-si{--nc:#8B5CF6}.n-do2{--nc:#E5489A}
.tevb{display:flex;align-items:center;gap:12px;margin-top:8px;padding:8px 12px;border-radius:16px;background:linear-gradient(180deg,#24398C,#1B2B6B);color:#fff}
.tevb small{font-size:13px;font-weight:700;opacity:.85;line-height:1.3}
.tevk{position:relative;flex:none;width:54px;height:54px;border-radius:50%;background:#3A4C8F;display:grid;place-items:center;box-shadow:inset 0 -4px 0 rgba(0,0,0,.25),0 0 0 4px rgba(255,255,255,.08)}
.tevk span{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:#E5489A;color:#fff;font-size:20px;font-weight:900;box-shadow:inset 0 -3px 0 rgba(0,0,0,.2)}
.tevk:active span,.tevk.now span{transform:translateY(2px) scale(.94);box-shadow:none}
.tevb.on .tevk{animation:b2glow 1.4s ease-in-out infinite}.tevb.on small{opacity:1;color:#FFE27A}
@keyframes b2glow{50%{box-shadow:inset 0 -4px 0 rgba(0,0,0,.25),0 0 0 7px rgba(255,197,49,.45)}}
.tevk i{position:absolute;right:-4px;top:-4px;width:20px;height:20px;border-radius:50%;background:var(--ok);color:#fff;font-style:normal;font-size:12px;font-weight:900;display:grid;place-items:center;border:2px solid #fff}
.tevk.done i{display:grid}
.blive{container-type:inline-size;display:grid;gap:10px;background:linear-gradient(180deg,#F5F8FF,#EAF0FF);border-radius:20px;padding:10px;text-align:left}
.blw{position:relative}.blw .b3d{max-height:300px}.blw .b3d:not(.on) .bitw{width:100%;height:100%;display:block}
.blhud{position:absolute;left:8px;top:8px;display:flex;gap:6px;flex-wrap:wrap}.blhud .tcnt,.blhud .ttune{box-shadow:0 3px 10px rgba(20,32,74,.15)}
.blev{position:absolute;right:8px;bottom:8px;display:flex;gap:6px}.blk{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:#E5489A;color:#fff;font-weight:900;border:4px solid #3A4C8F;transition:transform .15s}.blk.on{transform:scale(.85);box-shadow:0 0 0 5px rgba(255,197,49,.6)}
.blp{display:flex;flex-direction:column;gap:2px}.blp .tbh{min-height:30px;font-size:13px;padding:4px 10px 4px 4px;box-shadow:none}.blp .tbi{width:22px;height:22px}.blp .tbi svg{width:16px;height:16px}
.blp .tb{margin:2px 0}.blp .tbin{padding:3px 4px 3px 12px;border-left-width:6px;min-height:20px}.blp .tbend{height:8px}.blp .tscript{padding:0 6px 4px}.blp .thath{font-size:12.5px;padding:5px 10px 5px 5px;margin:0 -6px 4px}.blp .thath .tbi{width:22px;height:22px}
.blp .tit{font-size:11.5px;padding:1px 6px;min-width:24px}
@container (min-width:520px){.blive{grid-template-columns:1.3fr 1fr;align-items:center}}
.pz-ab .blive{max-width:1200px;margin:0 auto;grid-template-columns:1.4fr 1fr;padding:18px}.pz-ab .blw .bitw{max-height:520px}.pz-ab .blp .tbh{font-size:20px;min-height:44px}.pz-ab .blp .tbi{width:30px;height:30px}.pz-ab .blp .tbi svg{width:22px;height:22px}.pz-ab .blp .thath{font-size:19px}
.b2q4 .q{opacity:0;animation:b2q4 6s infinite}.b2q4 .q1{animation-delay:1.5s}.b2q4 .q2{animation-delay:3s}.b2q4 .q3{animation-delay:4.5s}
@keyframes b2q4{0%,24.9%{opacity:1}25%,100%{opacity:0}}
.tani .b2f1{animation:b2f1 6s infinite}.tani .b2f2{animation:b2f2 6s infinite}.tani .b2f3{animation:b2f3 6s infinite}
@keyframes b2f1{0%,24.9%{opacity:0;transform:translateY(-30px)}25%,100%{opacity:1;transform:none}}@keyframes b2f2{0%,49.9%{opacity:0;transform:translateY(-30px)}50%,100%{opacity:1;transform:none}}@keyframes b2f3{0%,74.9%{opacity:0;transform:translateY(-30px)}75%,100%{opacity:1;transform:none}}
.tani .b2walk{animation:b2walk 6s infinite}@keyframes b2walk{0%,10%{transform:translateX(0)}25%,35%{transform:translateX(56px)}50%,60%{transform:translateX(112px)}75%,100%{transform:translateX(168px)}}
.tani .b2slide{animation:b2slide 6s infinite}@keyframes b2slide{0%,20%{transform:translateX(0)}25%,45%{transform:translateX(68px)}50%,70%{transform:translateX(136px)}75%,100%{transform:translateX(204px)}}
.tani .b2press{transform-box:fill-box;transform-origin:50% 50%;animation:b2press 5.5s infinite}@keyframes b2press{0%,8%{transform:scale(1)}12%{transform:scale(.82)}18%,100%{transform:scale(1)}}
.tani .b2say{animation:b2say 6s infinite}@keyframes b2say{0%,100%{opacity:1}}
@media (prefers-reduced-motion:reduce){.b2q4 .q{opacity:0;animation:none}.b2q4 .q3{opacity:1}.tani .b2f1,.tani .b2f2,.tani .b2f3,.tani .b2walk,.tani .b2slide{animation:none}}
.bglow{animation:b2led 1.6s ease-in-out infinite}@keyframes b2led{50%{opacity:.08}}
.bdes{display:grid;gap:14px}
.bdw{position:relative;max-width:560px;width:100%;margin:0 auto;background:#fff;border:2px solid var(--line);border-radius:20px;padding:6px}
.bdsvg{position:relative}.bdsvg .bitw{width:100%;height:auto;display:block}
.bdgrid{position:absolute;display:grid}
.bdv{position:absolute;right:14px;top:14px;z-index:3;padding:7px 12px;border-radius:99px;background:rgba(27,43,107,.88);color:#fff;font-size:13px;font-weight:900;box-shadow:0 4px 12px rgba(0,0,0,.2)}
.bd3{max-height:none}
.bdgrid button{border-radius:8px;border:1.5px dashed rgba(255,255,255,.45);background:transparent}
.bdgrid button:hover{background:rgba(255,255,255,.25);border-color:#fff}
.bdtools{display:grid;grid-template-columns:repeat(auto-fill,minmax(78px,1fr));gap:6px}
.bdt{display:flex;flex-direction:column;align-items:center;gap:2px;padding:6px 4px;border-radius:14px;background:#fff;border:2px solid var(--line);border-bottom-width:4px;font-size:12.5px}
.bdt span svg{width:34px;height:34px;display:block}.bdt.on{border-color:var(--pri);background:var(--sky)}
.bdhint{margin:8px 2px;font-size:14px;color:var(--mut);font-weight:700}
.bdname{display:flex;flex-direction:column;gap:4px;font-size:13px;font-weight:900;color:var(--mut);text-transform:uppercase;letter-spacing:.04em}
.bdname input{font:700 16px Lexend,system-ui,sans-serif;padding:10px 12px;border-radius:12px;border:2px solid var(--line);text-transform:none;letter-spacing:0;color:var(--ink)}
.bdcrit{list-style:none;margin:10px 0 0;padding:0;display:grid;gap:5px}
.bdcrit li{font-size:14px;font-weight:700;color:var(--mut);padding:6px 10px;border-radius:10px;background:#fff;border:2px solid var(--line)}
.bdcrit li.ok{color:#1D6B3A;background:var(--ok-bg);border-color:#BFE8CF}
@media (min-width:900px){.bdes{grid-template-columns:minmax(0,1.2fr) minmax(260px,1fr);align-items:start}.bdw{position:sticky;top:0}}
.tdip{padding:6px}
.txtra{display:inline-block;vertical-align:2px;margin-right:4px;padding:2px 10px;border-radius:99px;background:linear-gradient(180deg,#FFD54A,#F5A623);color:#5A3B00;font-size:12.5px;font-weight:900;letter-spacing:.03em;text-transform:uppercase}
.tdipb{position:relative;max-width:640px;margin:0 auto;text-align:center;background:radial-gradient(120% 90% at 50% 0%,#FFFFFF 0%,#F4F7FF 70%);border-radius:24px;padding:26px 22px 20px;border:3px solid #20306A;box-shadow:0 0 0 8px #FFC531,0 0 0 11px #20306A,0 18px 40px rgba(20,32,74,.25)}
.tdiph{display:flex;justify-content:space-between;align-items:center;font-weight:900;color:var(--pri-d);font-size:14px}.tdiph img{height:30px}
.tdipk{margin:14px 0 0;font-size:14px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:#B4501A}
.tdip h1{margin:4px 0 6px;font-size:28px;color:#20306A}
.tdipn{margin:6px auto 8px;padding:4px 0 6px;max-width:80%;font-size:32px;font-weight:900;color:var(--pri);border-bottom:3px dotted #C9D6FB}
.tdipt{font-size:15.5px;line-height:1.45;font-weight:600;color:var(--ink);margin:8px 0}
.tdips{list-style:none;padding:0;margin:10px 0;display:flex;flex-wrap:wrap;gap:6px;justify-content:center}.tdips li{font-size:12.5px;font-weight:800;padding:4px 10px;border-radius:99px;background:var(--sky);color:var(--pri-d)}
.tdipnum{display:flex;justify-content:center;gap:10px;margin:8px 0}.tdipnum span{display:flex;flex-direction:column;align-items:center;min-width:84px;padding:6px 10px;border-radius:14px;background:#fff;border:2px solid var(--line);font-size:12.5px;font-weight:800;color:var(--mut)}.tdipnum b{font-size:24px;color:#20306A}
.tdipf{display:flex;justify-content:space-between;align-items:flex-end;gap:10px;margin-top:10px}.tdipf>div{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px}.tdipf i{width:80%;border-bottom:2px solid #20306A;height:26px}.tdipf small{font-size:12px;font-weight:800;color:var(--mut)}
.tdipbot{flex:0 0 96px!important}.tdipbot svg{width:96px;height:116px}
@media print{body *{visibility:hidden!important}.tdip,.tdip *{visibility:visible!important}.tdip{position:fixed;left:0;top:0;width:100%}.tdipb{box-shadow:none;border:4px solid #20306A}}
`;
  document.head.appendChild(s);
}
bot2Css();
