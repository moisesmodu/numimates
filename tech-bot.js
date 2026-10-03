/* ===== Numi Tech · en Bit, el robot de l'illa =====
   Un món de caselles, un llenguatge de blocs i un editor per tocs pensat per al mòbil (sense arrossegar).
   · Sense eval (la CSP no ho deixa): els programes són arbres de blocs i els executa un intèrpret propi, pas a pas,
     perquè es vegi quin bloc fa cada moviment.
   · Els mons s'escriuen com un mapa de text (vegeu BIT_MAP) per poder crear-ne molts de pressa. */

const BIT_DX = [0, 1, 0, -1], BIT_DY = [-1, 0, 1, 0];   // 0 amunt · 1 dreta · 2 avall · 3 esquerra
const BIT_C = 60;                                       // mida d'una casella (unitats del dibuix)
const bitKey = (x, y) => x + ',' + y;
/* Mapa: una fila per línia
   .  herba         #  camí (només dibuix)   R  roca          ~  aigua
   *  estrella      F  bandera (meta)        b  caixa         H  casa (on es deixa la caixa)
   r g y u  terra de color (vermell, verd, groc, blau)
   ^ > v <  en Bit (sobre camí) mirant amunt, dreta, avall, esquerra
   A B C    marques per a «on acabarà?» (sobre camí) */
function bitWorld(spec) {
  const rows = spec.map, W = { w: rows[0].length, h: rows.length, trees: new Set(), rocks: new Set(), water: new Set(), gems: new Set(), boxes: new Set(), homes: new Set(),
    path: new Set(), floor: {}, marks: {}, goal: null, bot: [0, 0, 1], target: spec.target || null, need: spec.need || null, pen: !!spec.pen, max: spec.max || 0 };
  rows.forEach((r, y) => [...r].forEach((ch, x) => {
    const c = bitKey(x, y);
    if (ch === 'R') W.rocks.add(c); else if (ch === '~') W.water.add(c);
    else if (ch === '*') { W.gems.add(c); W.path.add(c); } else if (ch === 'F') { W.goal = [x, y]; W.path.add(c); }
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
  const [x, y, d] = W.bot;
  return { x, y, d, ang: d * 90, carry: 0, gems: new Set(), boxes: new Set(W.boxes), done: new Set(), paint: {}, led: null, notes: [], n: 0, crash: null, trail: [bitKey(x, y)] };
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
      if (W.pen) S.paint[c] = S.paint[c] || 'p';
      return;
    }
    case 'left': S.d = (S.d + 3) % 4; S.ang -= 90; return;
    case 'right': S.d = (S.d + 1) % 4; S.ang += 90; return;
    case 'pick': if (S.carry) { S.crash = 'full'; return; } if (!S.boxes.has(here)) { S.crash = 'nobox'; return; } S.boxes.delete(here); S.carry = 1; return;
    case 'drop': if (!S.carry) { S.crash = 'empty'; return; } if (!W.homes.has(here) || S.done.has(here)) { S.crash = 'nohome'; return; } S.done.add(here); S.carry = 0; return;
    case 'paint': S.paint[here] = b.c || 'r'; return;
    case 'light': S.led = b.c || 'r'; return;
    case 'note': S.notes.push(b.n || 'do'); return;
  }
}
function bitCond(W, S, c) {
  const [nx, ny] = bitAhead(S), here = bitKey(S.x, S.y);
  if (c === 'wall') return bitBlocked(W, nx, ny);
  if (c === 'free') return !bitBlocked(W, nx, ny);
  if (c === 'goal') return !!W.goal && S.x === W.goal[0] && S.y === W.goal[1];
  if (c === 'gem') return W.gems.has(here) ;
  if (c === 'box') return S.boxes.has(here);
  if (c.startsWith('floor:')) return W.floor[here] === c.slice(6);
  return false;
}
// intèrpret: cada «yield» és un pas que es dibuixa (el bloc que s'executa i si ha mogut alguna cosa)
function* bitRun(W, S, list, fns, depth = 0) {
  for (const b of list || []) {
    if (S.crash) return;
    if (++S.n > 500) { S.crash = 'long'; return; }
    if (b.k === 'rep') {
      for (let i = 0; i < (b.n || 1); i++) { yield { b }; yield* bitRun(W, S, b.b, fns, depth); if (S.crash) return; }
      continue;
    }
    if (b.k === 'until') {
      let g = 0;
      while (!bitCond(W, S, b.c)) { if (++g > 80) { S.crash = 'loop'; return; } yield { b }; yield* bitRun(W, S, b.b, fns, depth); if (S.crash) return; }
      yield { b }; continue;
    }
    if (b.k === 'if') { yield { b }; yield* bitRun(W, S, bitCond(W, S, b.c) ? b.b : b.e, fns, depth); continue; }
    if (b.k === 'call') { if (depth > 8) { S.crash = 'deep'; return; } yield { b }; yield* bitRun(W, S, fns && fns[b.f], fns, depth + 1); continue; }
    bitDo(W, S, b); yield { b, act: true };
  }
}
// què demana el repte: arribar a la bandera, totes les estrelles, totes les caixes a casa, el dibuix…
function bitNeeds(W) { return W.need || ['goal', 'gems', 'deliver', 'paint'].filter(n => n === 'goal' ? W.goal : n === 'gems' ? W.gems.size : n === 'deliver' ? W.homes.size : W.target); }
function bitMiss(W, S) {
  if (S.crash) return S.crash;
  for (const n of bitNeeds(W)) {
    if (n === 'goal' && !bitCond(W, S, 'goal')) return 'nogoal';
    if (n === 'gems' && S.gems.size < W.gems.size) return 'nogems';
    if (n === 'deliver' && S.done.size < W.homes.size) return 'nodeliver';
    if (n === 'paint' && W.target && (!Object.entries(W.target).every(([c, v]) => S.paint[c] === v) || Object.keys(S.paint).some(c => !W.target[c]))) return 'nopaint';
  }
  return null;
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
  nogoal: ["El programa s'ha acabat, però no he arribat a la bandera.", 'El programa ha terminado, pero no he llegado a la bandera.'],
  nogems: ['Encara queden estrelles per recollir.', 'Aún quedan estrellas por recoger.'],
  nodeliver: ['Encara queden caixes per repartir.', 'Aún quedan cajas por repartir.'],
  nopaint: ['El dibuix no és ben bé igual que el model.', 'El dibujo no es igual que el modelo.']
};

/* ---------- Dibuix ---------- */
const BIT_COL = { r: '#EF5A5A', g: '#3CC47C', y: '#FFC531', u: '#3D8BFF', p: '#8B5CF6' };
// en Bit vist des de dalt, mirant amunt (el grup es gira segons la direcció)
function bitBot(led, carry) {
  return `<ellipse cx="0" cy="4" rx="25" ry="23" fill="#0B1838" opacity=".16"/>
    <rect x="-27" y="-13" width="9" height="27" rx="4" fill="#2A3557"/><rect x="18" y="-13" width="9" height="27" rx="4" fill="#2A3557"/>
    <path d="M-7 -21L0 -31L7 -21Z" fill="#FFC531" stroke="#20306A" stroke-width="2.5" stroke-linejoin="round"/>
    <rect x="-20" y="-20" width="40" height="40" rx="11" fill="url(#bitBody)" stroke="#20306A" stroke-width="3"/>
    <rect x="-15" y="-16" width="30" height="14" rx="6" fill="#20306A"/>
    <ellipse cx="-7" cy="-9" rx="3.6" ry="4.2" fill="#7DF3FF"/><ellipse cx="7" cy="-9" rx="3.6" ry="4.2" fill="#7DF3FF"/>
    <circle cy="8" r="5.5" fill="${led ? BIT_COL[led] : '#FFC531'}" stroke="#20306A" stroke-width="2.5"/>
    ${carry ? `<g transform="translate(0 9)"><rect x="-10" y="-7" width="20" height="16" rx="2.5" fill="#C98A4B" stroke="#7A4A1E" stroke-width="2"/><path d="M0 -7V9" stroke="#F3D9A8" stroke-width="3"/></g>` : ''}`;
}
const bitDefs = () => `<defs><radialGradient id="bitBody" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".7" stop-color="#DCE7FF"/><stop offset="1" stop-color="#AFC4F2"/></radialGradient>
  <linearGradient id="bitWater" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5BC0F5"/><stop offset="1" stop-color="#2C8FD6"/></linearGradient>
  <radialGradient id="bitRock" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#C2C7D3"/><stop offset="1" stop-color="#7C8496"/></radialGradient>
  <linearGradient id="bitGem" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE580"/><stop offset="1" stop-color="#F5A623"/></linearGradient></defs>`;
function bitTile(W, x, y) {
  const c = bitKey(x, y), X = x * BIT_C, Y = y * BIT_C, odd = (x + y) % 2;
  let h = `<rect x="${X}" y="${Y}" width="${BIT_C}" height="${BIT_C}" fill="${odd ? '#9BD77A' : '#A8DF86'}"/>`;
  if (W.water.has(c)) h = `<rect x="${X}" y="${Y}" width="${BIT_C}" height="${BIT_C}" fill="url(#bitWater)"/><path d="M${X + 10} ${Y + 24}q7 -6 14 0t14 0t14 0M${X + 6} ${Y + 42}q7 -6 14 0t14 0t14 0" fill="none" stroke="#BFE9FF" stroke-width="3" stroke-linecap="round" opacity=".8"/>`;
  else if (W.path.has(c)) h += `<rect x="${X + 3}" y="${Y + 3}" width="${BIT_C - 6}" height="${BIT_C - 6}" rx="10" fill="${W.floor[c] ? BIT_COL[W.floor[c]] : '#F2DDA9'}" ${W.floor[c] ? 'opacity=".85"' : ''}/>`;
  if (W.rocks.has(c)) h += `<ellipse cx="${X + 30}" cy="${Y + 42}" rx="22" ry="8" fill="#3C5A2A" opacity=".25"/><path d="M${X + 9} ${Y + 42}Q${X + 8} ${Y + 18} ${X + 27} ${Y + 13}Q${X + 47} ${Y + 10} ${X + 51} ${Y + 32}Q${X + 54} ${Y + 46} ${X + 40} ${Y + 47}L${X + 18} ${Y + 48}Q${X + 9} ${Y + 48} ${X + 9} ${Y + 42}Z" fill="url(#bitRock)" stroke="#5B6275" stroke-width="2"/><path d="M${X + 20} ${Y + 22}q6 -5 13 -4" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".6"/>`;
  if (W.trees.has(c)) h += `<ellipse cx="${X + 32}" cy="${Y + 40}" rx="21" ry="9" fill="#2F5A24" opacity=".28"/><circle cx="${X + 30}" cy="${Y + 30}" r="20" fill="#3E8E3A" stroke="#28632A" stroke-width="2"/><circle cx="${X + 24}" cy="${Y + 25}" r="10" fill="#57AD4C"/><circle cx="${X + 36}" cy="${Y + 33}" r="8" fill="#4A9E42"/><circle cx="${X + 22}" cy="${Y + 22}" r="4" fill="#8FD67F" opacity=".8"/>`;
  if (W.homes.has(c)) h += `<g transform="translate(${X + 30} ${Y + 32})"><path d="M-17 -2L0 -18L17 -2Z" fill="#E2574C" stroke="#8E2A22" stroke-width="2" stroke-linejoin="round"/><rect x="-13" y="-3" width="26" height="20" rx="2" fill="#FFF4DD" stroke="#8E6A3A" stroke-width="2"/><rect x="-4" y="5" width="8" height="12" fill="#B07A3E"/></g>`;
  if (W.target && W.target[c]) h += `<rect x="${X + 8}" y="${Y + 8}" width="${BIT_C - 16}" height="${BIT_C - 16}" rx="7" fill="none" stroke="${BIT_COL[W.target[c]]}" stroke-width="3" stroke-dasharray="6 5"/>`;
  return h;
}
// el que canvia mentre corre el programa: estrelles, caixes, cases fetes, pintura, rastre, bandera
function bitDyn(W, S) {
  let h = '';
  if (W.pen || Object.keys(S.paint).length) for (const [c, v] of Object.entries(S.paint)) { const [x, y] = c.split(',').map(Number); h += `<rect x="${x * BIT_C + 6}" y="${y * BIT_C + 6}" width="${BIT_C - 12}" height="${BIT_C - 12}" rx="8" fill="${BIT_COL[v]}" opacity=".9"/>`; }
  if (W.goal) { const [x, y] = W.goal, X = x * BIT_C, Y = y * BIT_C, ok = S.x === x && S.y === y;
    h += `<g transform="translate(${X + 22} ${Y + 10})"><rect x="0" y="0" width="4" height="42" rx="2" fill="#5B4636"/><path d="M4 2 L30 9 L4 17Z" fill="${ok ? '#3CC47C' : '#EF5A5A'}" stroke="#8E2A22" stroke-width="1.5" stroke-linejoin="round"/><ellipse cx="2" cy="42" rx="9" ry="3" fill="#3C5A2A" opacity=".3"/></g>`; }
  for (const c of W.gems) if (!S.gems.has(c)) { const [x, y] = c.split(',').map(Number); h += `<g class="bgem" transform="translate(${x * BIT_C + 30} ${y * BIT_C + 30})"><path d="M0 -17L5 -6L17 -5L8 3L11 15L0 9L-11 15L-8 3L-17 -5L-5 -6Z" fill="url(#bitGem)" stroke="#B9770E" stroke-width="2" stroke-linejoin="round"/></g>`; }
  for (const c of S.boxes) { const [x, y] = c.split(',').map(Number); h += `<g transform="translate(${x * BIT_C + 30} ${y * BIT_C + 32})"><rect x="-14" y="-12" width="28" height="24" rx="3" fill="#C98A4B" stroke="#7A4A1E" stroke-width="2"/><path d="M0 -12V12M-14 -3H14" stroke="#F3D9A8" stroke-width="3"/></g>`; }
  for (const c of S.done) { const [x, y] = c.split(',').map(Number); h += `<g transform="translate(${x * BIT_C + 46} ${y * BIT_C + 14})"><circle r="10" fill="#3CC47C" stroke="#fff" stroke-width="2"/><path d="M-5 0l3 4l6 -7" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`; }
  return h;
}
const bitXY = S => `translate(${S.x * BIT_C + BIT_C / 2}px,${S.y * BIT_C + BIT_C / 2}px) rotate(${S.ang}deg)`;
// opts: marks (lletres per triar), pick (es poden tocar les caselles), id
function bitSVG(W, S, o = {}) {
  let tiles = ''; for (let y = 0; y < W.h; y++) for (let x = 0; x < W.w; x++) tiles += bitTile(W, x, y);
  const marks = o.marks ? Object.entries(W.marks).map(([k, [x, y]]) => `<g class="bmark" data-m="${k}" transform="translate(${x * BIT_C + 30} ${y * BIT_C + 30})"><circle r="17" fill="#fff" stroke="#20306A" stroke-width="3"/><text y="7" text-anchor="middle" font-size="20" font-weight="800" fill="#20306A">${k}</text></g>`).join('') : '';
  return `<svg class="bitw" viewBox="-4 -4 ${W.w * BIT_C + 8} ${W.h * BIT_C + 8}" role="img" aria-label="${L('El món d\'en Bit', 'El mundo de Bit')}">${bitDefs()}
    <clipPath id="bitClip"><rect width="${W.w * BIT_C}" height="${W.h * BIT_C}" rx="10"/></clipPath><rect x="-4" y="-4" width="${W.w * BIT_C + 8}" height="${W.h * BIT_C + 8}" rx="14" fill="#5E9E4A"/><g clip-path="url(#bitClip)">${tiles}</g>
    <g class="bdyn">${bitDyn(W, S)}</g>${marks}<g class="bbot" style="transform:${bitXY(S)}">${bitBot(S.led, S.carry)}</g></svg>`;
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
  call: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M8 10h8M8 14h5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>'
};
const BIT_CAT = { fwd: 'mov', left: 'mov', right: 'mov', pick: 'act', drop: 'act', rep: 'loop', until: 'loop', if: 'cond', paint: 'art', light: 'art', note: 'snd', call: 'fn' };
const BIT_CONDS = {
  wall: ["hi ha un obstacle davant", 'hay un obstáculo delante'], free: ['el camí és lliure', 'el camino está libre'], goal: ['arribis a la bandera', 'llegues a la bandera'],
  gem: ['hi ha una estrella', 'hay una estrella'], box: ['hi ha una caixa', 'hay una caja'],
  'floor:r': ['el terra és vermell', 'el suelo es rojo'], 'floor:g': ['el terra és verd', 'el suelo es verde'], 'floor:y': ['el terra és groc', 'el suelo es amarillo'], 'floor:u': ['el terra és blau', 'el suelo es azul']
};
const BIT_CNAME = { r: ['vermell', 'rojo'], g: ['verd', 'verde'], y: ['groc', 'amarillo'], u: ['blau', 'azul'] };
function bitLabel(b) {
  switch (b.k) {
    case 'fwd': return L('Endavant', 'Adelante');
    case 'left': return L("Gira a l'esquerra", 'Gira a la izquierda');
    case 'right': return L('Gira a la dreta', 'Gira a la derecha');
    case 'pick': return L('Agafa la caixa', 'Coge la caja');
    case 'drop': return L('Deixa la caixa', 'Deja la caja');
    case 'rep': return L(`Repeteix <b class="tnum">${b.n || 2}</b> vegades`, `Repite <b class="tnum">${b.n || 2}</b> veces`);
    case 'until': return `${L('Repeteix fins que', 'Repite hasta que')} <b>${tx(BIT_CONDS[b.c || 'goal'].join('|'))}</b>`;
    case 'if': return `${L('Si', 'Si')} <b>${tx(BIT_CONDS[b.c || 'wall'].join('|'))}</b>`;
    case 'paint': return `${L('Pinta de', 'Pinta de')} <i class="tdot" style="background:${BIT_COL[b.c || 'r']}"></i>`;
    case 'light': return `${L('Llum', 'Luz')} <i class="tdot" style="background:${BIT_COL[b.c || 'r']}"></i>`;
    case 'note': return `${L('Nota', 'Nota')} <b>${b.n || 'do'}</b>`;
    case 'call': return `${L('Funció', 'Función')} <b>${b.f || 'A'}</b>`;
  }
  return b.k;
}
const bitNew = k => ({ k, ...(k === 'rep' ? { n: 2, b: [] } : k === 'until' ? { c: 'goal', b: [] } : k === 'if' ? { c: 'wall', b: [], e: null } : k === 'paint' || k === 'light' ? { c: 'r' } : k === 'note' ? { n: 'do' } : k === 'call' ? { f: 'A' } : {}) });
const bitClone = p => JSON.parse(JSON.stringify(p, (k, v) => k === '_id' ? undefined : v));
const bitCount = list => (list || []).reduce((n, b) => n + 1 + bitCount(b.b) + bitCount(b.e), 0);
// paraula «blocs» amb el nombre
const bitN = n => `${n} ${n === 1 ? L('bloc', 'bloque') : L('blocs', 'bloques')}`;

/* ---------- Escenari: món + programa + execució ----------
   Només n'hi ha un de visible alhora (TB). mode: 'edit' (editor amb paleta), 'view' (programa per llegir),
   'spot' (tocar un bloc), 'parsons' (ordenar blocs donats), 'hand' (moure en Bit amb botons). */
let TB = null, TB_ID = 0;
function tbMake(spec, o = {}) {
  const W = bitWorld(spec);
  TB = { spec, W, S: bitSim(W), prog: o.prog ? bitClone(o.prog) : [], fns: o.fns || null, pal: o.pal || ['fwd', 'left', 'right'], max: o.max || W.max || 0, mode: o.mode || 'edit',
    cur: null, sel: null, run: null, speed: 1, onDone: o.onDone || null, onFail: o.onFail || null, lists: [], ids: {}, pool: o.pool ? bitClone(o.pool) : null, lock: !!o.lock, marks: !!o.marks, solved: false, tries: 0 };
  TB.cur = { l: TB.prog, i: TB.prog.length };
  return TB;
}
// ids per als blocs i les llistes (es refan a cada dibuix)
function tbIndex() {
  TB.lists = []; TB.ids = {};
  const walk = list => { TB.lists.push(list); for (const b of list) { if (!b._id) b._id = ++TB_ID; TB.ids[b._id] = { b, list }; if (b.b) walk(b.b); if (b.e) walk(b.e); } };
  walk(TB.prog); if (TB.pool) walk(TB.pool);
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
  return list.map((b, i) => tbSlot(list, i) + tbBlock(b)).join('') + tbSlot(list, list.length);
}
function tbTools(b) {
  const ix = TB.ids[b._id], i = ix.list.indexOf(b);
  return `<div class="tbtools">
    <button onclick="tbMove(-1)" ${i === 0 ? 'disabled' : ''} aria-label="${L('Puja', 'Sube')}">↑</button><button onclick="tbMove(1)" ${i === ix.list.length - 1 ? 'disabled' : ''} aria-label="${L('Baixa', 'Baja')}">↓</button>
    ${b.k === 'rep' ? `<button onclick="tbNum(-1)" aria-label="${L('Menys', 'Menos')}">−</button><b>${b.n}</b><button onclick="tbNum(1)" aria-label="${L('Més', 'Más')}">+</button>` : ''}
    ${(b.k === 'if' || b.k === 'until') && (TB.conds || []).length > 1 ? `<button class="wide" onclick="tbCond()">${L('Canvia la condició', 'Cambia la condición')}</button>` : ''}
    ${b.k === 'if' && TB.pal.includes('else') ? `<button class="wide" onclick="tbElse()">${b.e ? L('Treu «si no»', 'Quita «si no»') : L('Afegeix «si no»', 'Añade «si no»')}</button>` : ''}
    ${(b.k === 'paint' || b.k === 'light') ? `<button class="wide" onclick="tbColor()">${L('Canvia el color', 'Cambia el color')}</button>` : ''}
    <button class="del" onclick="tbDel()" aria-label="${L('Esborra', 'Borra')}">${L('Esborra', 'Borra')}</button></div>`;
}
function tbPalette() {
  const used = bitCount(TB.prog), full = TB.max && used >= TB.max;
  return `<div class="tpal">${TB.pal.filter(k => k !== 'else').map(k => `<button class="tb c-${BIT_CAT[k]} tpb" onclick="tbIns('${k}')" ${full ? 'disabled' : ''}><span class="tbi">${BIT_ICO[k] || ''}</span><span class="tbl">${bitLabel(bitNew(k)).replace(/<b class="tnum">\d+<\/b>/, 'N')}</span></button>`).join('')}</div>`;
}
// tot l'escenari: món a dalt (o a l'esquerra a l'ordinador) i programa + paleta a sota
function tbHTML(extra = '') {
  tbIndex();
  const used = bitCount(TB.prog);
  const clr = TB.mode === 'edit' && !TB.lock && used ? `<button class="tclr" onclick="tbClear()" aria-label="${L('Buida el programa', 'Vacía el programa')}"><svg viewBox="0 0 24 24"><path d="M6 7h12l-1 14H7zM9 3h6l1 2h4v2H4V5h4z" fill="currentColor"/></svg></button>` : '';
  const head = TB.mode === 'hand' ? '' : `<div class="tphead"><b>${TB.mode === 'parsons' ? L('El teu programa', 'Tu programa') : L('Programa', 'Programa')}</b><span class="tphr">${TB.max ? `<span class="tcount ${used >= TB.max ? 'full' : ''}">${used}/${TB.max} ${L('blocs', 'bloques')}</span>` : `<span class="tcount">${bitN(used)}</span>`}${clr}</span></div>`;
  const prog = TB.mode === 'hand' ? `<div class="thand"><button onclick="tbHand('left')" aria-label="${bitLabel({ k: 'left' })}">${BIT_ICO.left}</button><button class="big" onclick="tbHand('fwd')" aria-label="${bitLabel({ k: 'fwd' })}">${BIT_ICO.fwd}</button><button onclick="tbHand('right')" aria-label="${bitLabel({ k: 'right' })}">${BIT_ICO.right}</button></div>
      <div class="tprog mini">${TB.prog.length ? TB.prog.map(b => `<span class="tchip c-${BIT_CAT[b.k]}">${BIT_ICO[b.k]}</span>`).join('') : `<p class="tempty">${L('Els teus moviments apareixeran aquí', 'Tus movimientos aparecerán aquí')}</p>`}</div>`
    : `${head}<div class="tprog" id="tprog">${tbList(TB.prog, TB.mode === 'view' || TB.mode === 'spot')}</div>${TB.mode === 'edit' ? tbPalette() : ''}${TB.mode === 'parsons' ? `<div class="tpool"><small>${L('Blocs disponibles', 'Bloques disponibles')}</small><div>${TB.pool.map(b => tbBlock(b)).join('') || `<p class="tempty">${L('Ja els has posat tots', 'Ya los has puesto todos')}</p>`}</div></div>` : ''}`;
  const runbar = TB.mode !== 'hand' ? `<div class="trun">
      <button class="btn big trgo" onclick="tbGo()" id="tbgo">${TB.run ? L('Atura', 'Para') : `<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>${L('Executa', 'Ejecuta')}`}</button>
      ${TB.mode === 'edit' || TB.mode === 'parsons' ? `<button class="btn ghost" onclick="tbStep()" title="${L('Executa un sol bloc', 'Ejecuta un solo bloque')}">${L('Pas a pas', 'Paso a paso')}</button>` : ''}
      <button class="btn ghost ico" onclick="tbReset()" aria-label="${L('Torna en Bit al principi', 'Vuelve a poner a Bit al principio')}"><svg viewBox="0 0 24 24"><path d="M12 5V2L7 6l5 4V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z" fill="currentColor"/></svg></button>
      <button class="btn ghost ico" onclick="tbSpeed()" aria-label="${L('Velocitat', 'Velocidad')}" title="${L('Velocitat', 'Velocidad')}">${TB.speed === 2 ? '×2' : '×1'}</button></div>` : '';
  return `<div class="tstage m-${TB.mode}"><div class="tworld" id="tworld">${bitSVG(TB.W, TB.S, { marks: TB.marks })}<p class="tsay" id="tsay" aria-live="polite"></p>${runbar}</div>
    <div class="tcode">${extra}${prog}</div></div>`;
}
function tbDraw() {
  const st = document.querySelector('.tstage'); if (!st) return;
  const sc = document.getElementById('tprog'), top = sc ? sc.scrollTop : 0;
  st.outerHTML = tbHTML(TB.extra || '');
  const sc2 = document.getElementById('tprog'); if (sc2) sc2.scrollTop = top;
}
// només el món (durant l'execució no es refà el programa: va més fluid)
function tbWorld() {
  const w = document.querySelector('#tworld .bitw'); if (!w) return;
  w.querySelector('.bdyn').innerHTML = bitDyn(TB.W, TB.S);
  const g = w.querySelector('.bbot'); g.style.transform = bitXY(TB.S); g.innerHTML = bitBot(TB.S.led, TB.S.carry);
}
function tbSay(t, cls = '') { const e = document.getElementById('tsay'); if (e) { e.className = 'tsay ' + cls; e.innerHTML = t; } }

/* ---------- Editor ---------- */
function tbIns(k) {
  if (TB.run) tbStop();
  if (TB.max && bitCount(TB.prog) >= TB.max) return toast(L(`Només pots fer servir ${TB.max} blocs.`, `Solo puedes usar ${TB.max} bloques.`));
  const b = bitNew(k); if (k === 'if' || k === 'until') b.c = (TB.conds || [b.c])[0];
  const { l, i } = TB.cur; l.splice(i, 0, b);
  // dins d'un bucle o d'un «si» nou, el cursor hi entra (és el que gairebé sempre es vol fer després)
  TB.cur = b.b ? { l: b.b, i: 0 } : { l, i: i + 1 };
  TB.sel = null; SFX.tap && SFX.tap(); tbFresh(); tbDraw();
}
function tbCur(li, i) { if (TB.run) tbStop(); TB.cur = { l: TB.lists[li], i }; TB.sel = null; tbDraw(); }
function tbSel(id) { if (TB.run) tbStop(); const ix = TB.ids[id]; if (!ix) return; TB.sel = TB.sel === ix.b ? null : ix.b; TB.cur = { l: ix.list, i: ix.list.indexOf(ix.b) + 1 }; tbDraw(); }
function tbMove(d) { const b = TB.sel, l = TB.ids[b._id].list, i = l.indexOf(b), j = i + d; if (j < 0 || j >= l.length) return; l.splice(i, 1); l.splice(j, 0, b); TB.cur = { l, i: j + 1 }; tbFresh(); tbDraw(); }
function tbDel() { const b = TB.sel, l = TB.ids[b._id].list, i = l.indexOf(b); l.splice(i, 1); TB.sel = null; TB.cur = { l, i }; tbFresh(); tbDraw(); }
function tbNum(d) { const b = TB.sel; b.n = Math.max(1, Math.min(12, (b.n || 2) + d)); tbFresh(); tbDraw(); }
function tbCond() { const b = TB.sel, cs = TB.conds || ['wall']; b.c = cs[(cs.indexOf(b.c) + 1) % cs.length]; tbFresh(); tbDraw(); }
function tbElse() { const b = TB.sel; b.e = b.e ? null : []; tbFresh(); tbDraw(); }
function tbColor() { const b = TB.sel, cs = TB.colors || ['r', 'g', 'y', 'u']; b.c = cs[(cs.indexOf(b.c) + 1) % cs.length]; tbFresh(); tbDraw(); }
function tbClear() { if (!TB.prog.length) return; TB.prog.splice(0); TB.cur = { l: TB.prog, i: 0 }; TB.sel = null; tbFresh(); tbDraw(); }
// qualsevol canvi del programa: en Bit torna a la sortida
function tbFresh() { TB.S = bitSim(TB.W); TB.gen = null; }
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
  const b = { k }; TB.prog.push(b); bitDo(TB.W, TB.S, b); tbWorld();
  document.querySelector('.tprog.mini').innerHTML = TB.prog.map(x => `<span class="tchip c-${BIT_CAT[x.k]}">${BIT_ICO[x.k]}</span>`).join('');
  if (TB.S.crash) { SFX.ko && SFX.ko(); tbSay(tx(BIT_WHY[TB.S.crash].join('|')), 'bad'); setTimeout(() => { TB.prog = []; tbFresh(); tbDraw(); tbSay(L('Tornem-hi des del principi!', '¡Volvamos a empezar!')); }, 1500); return; }
  SFX.tap && SFX.tap();
  if (!bitMiss(TB.W, TB.S)) { TB.solved = true; SFX.win && SFX.win(); tbSay(L('Ho has aconseguit!', '¡Lo has conseguido!'), 'ok'); TB.onDone && setTimeout(TB.onDone, 700); }
}

/* ---------- Execució ---------- */
function tbGo() {
  if (TB.run) return tbStop();
  if (!TB.prog.length) { tbSay(L('Primer posa algun bloc al programa.', 'Primero pon algún bloque en el programa.')); return; }
  TB.S = bitSim(TB.W); tbWorld(); TB.sel = null;
  TB.gen = bitRun(TB.W, TB.S, TB.prog, TB.fns); TB.run = true; TB.tries++;
  const btn = document.getElementById('tbgo'); if (btn) btn.innerHTML = L('Atura', 'Para');
  tbSay(''); document.querySelectorAll('.tb.err').forEach(e => e.classList.remove('err'));
  tbTick();
}
function tbStop() { clearTimeout(TB.t); TB.run = null; document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now')); const btn = document.getElementById('tbgo'); if (btn) btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>${L('Executa', 'Ejecuta')}`; }
function tbMark(b) { document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now')); if (b && b._id) { const e = document.getElementById('tb' + b._id); if (e) { e.classList.add('now'); const p = document.getElementById('tprog'); if (p && p.scrollHeight > p.clientHeight) { const r = e.getBoundingClientRect(), pr = p.getBoundingClientRect(); if (r.top < pr.top || r.bottom > pr.bottom) p.scrollTop += r.top - pr.top - 30; } } } }
function tbTick() {
  const r = TB.gen.next();
  if (r.done) return tbEnd();
  tbMark(r.value.b);
  if (r.value.act) { tbWorld(); if (r.value.b.k === 'note' && typeof SFX.tick === 'function') SFX.tick(); }
  if (TB.S.crash) return tbEnd(r.value.b);
  TB.t = setTimeout(tbTick, (r.value.act ? 430 : 200) / TB.speed);
}
// un sol bloc cada vegada (per depurar)
function tbStep() {
  if (TB.run) tbStop();
  if (!TB.prog.length) return tbSay(L('Primer posa algun bloc al programa.', 'Primero pon algún bloque en el programa.'));
  if (!TB.gen) { TB.S = bitSim(TB.W); tbWorld(); TB.gen = bitRun(TB.W, TB.S, TB.prog, TB.fns); tbSay(''); }
  let r; do { r = TB.gen.next(); } while (!r.done && !r.value.act && !TB.S.crash && !r.value.b.k.match(/^(if|until)$/));
  if (r.done) { TB.gen = null; return tbEnd(); }
  tbMark(r.value.b); tbWorld();
  if (TB.S.crash) { TB.gen = null; return tbEnd(r.value.b); }
}
function tbEnd(last) {
  TB.run = null; clearTimeout(TB.t);
  const btn = document.getElementById('tbgo'); if (btn) btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>${L('Executa', 'Ejecuta')}`;
  const miss = bitMiss(TB.W, TB.S);
  if (!miss) { document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now')); TB.solved = true; SFX.win && SFX.win(); tbSay(L('Molt bé! Ho has aconseguit!', '¡Muy bien! ¡Lo has conseguido!'), 'ok'); if (TB.onDone) TB.onDone(); return; }
  SFX.ko && SFX.ko();
  if (TB.S.crash && last && last._id) { const e = document.getElementById('tb' + last._id); if (e) { e.classList.remove('now'); e.classList.add('err'); } }
  else document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now'));
  tbSay(tx(BIT_WHY[miss].join('|')) + ' ' + L('Canvia el programa i torna-ho a provar.', 'Cambia el programa y vuelve a probar.'), 'bad');
  if (TB.onFail) TB.onFail(miss);
}
function tbReset() { if (TB.run) tbStop(); tbFresh(); tbWorld(); tbSay(''); document.querySelectorAll('.tb.err,.tb.now').forEach(e => e.classList.remove('err', 'now')); }
function tbSpeed() { TB.speed = TB.speed === 2 ? 1 : 2; const b = document.querySelector('.trun .ico[aria-label="' + L('Velocitat', 'Velocidad') + '"]'); if (b) b.textContent = TB.speed === 2 ? '×2' : '×1'; }
// executa sense dibuixar (per saber on acaba un programa, per a les preguntes de «on acabarà?»)
function bitFinal(spec, prog, fns) { const W = bitWorld(spec), S = bitSim(W); const g = bitRun(W, S, prog, fns); while (!g.next().done); return { W, S }; }
