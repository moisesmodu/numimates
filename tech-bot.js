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
    path: new Set(), floor: {}, marks: {}, goal: null, bot: [0, 0, 1], target: spec.target || null, need: spec.need || null, pen: spec.pen ? (typeof spec.pen === 'string' ? spec.pen : 'p') : null, max: spec.max || 0,
    lights: spec.lights || null, melody: spec.melody || null, count: spec.count ?? null, v0: spec.v0 || 0, vname: spec.vname || null };
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
  // el dibuix que demana el repte també es pot escriure com un mapa: r g y u p = color de la casella, . = res
  if (Array.isArray(spec.target)) { W.target = {}; spec.target.forEach((r, y) => [...r].forEach((ch, x) => { if ('rgyup'.includes(ch)) W.target[bitKey(x, y)] = ch; })); }
  // si el mapa dibuixa un camí, cal anar-hi per dins: la resta són arbres (spec.paths:false ho desactiva)
  if (spec.paths !== false && rows.some(r => r.includes('#'))) rows.forEach((r, y) => [...r].forEach((ch, x) => { if (ch === '.') W.trees.add(bitKey(x, y)); }));
  return W;
}
function bitSim(W) {
  const [x, y, d] = W.bot;
  return { x, y, d, ang: d * 90, carry: 0, gems: new Set(), boxes: new Set(W.boxes), done: new Set(), paint: {}, led: null, leds: [], notes: [], v: W.v0 || 0, n: 0, crash: null, trail: [bitKey(x, y)] };
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
      if (W.pen) S.paint[c] = S.paint[c] || W.pen;
      return;
    }
    case 'left': S.d = (S.d + 3) % 4; S.ang -= 90; return;
    case 'right': S.d = (S.d + 1) % 4; S.ang += 90; return;
    case 'pick': if (S.carry) { S.crash = 'full'; return; } if (!S.boxes.has(here)) { S.crash = 'nobox'; return; } S.boxes.delete(here); S.carry = 1; return;
    case 'drop': if (!S.carry) { S.crash = 'empty'; return; } if (!W.homes.has(here) || S.done.has(here)) { S.crash = 'nohome'; return; } S.done.add(here); S.carry = 0; return;
    case 'paint': S.paint[here] = b.c || 'r'; return;
    case 'light': S.led = b.c || 'r'; S.leds.push(S.led); return;
    case 'note': S.notes.push(b.n || 'do'); return;
    case 'add': S.v += b.n ?? 1; return;
    case 'sub': S.v -= b.n ?? 1; return;
    case 'setv': S.v = b.n || 0; return;
  }
}
function bitCond(W, S, c) {
  const [nx, ny] = bitAhead(S), here = bitKey(S.x, S.y);
  if (c === 'wall') return bitBlocked(W, nx, ny);
  if (c === 'free') return !bitBlocked(W, nx, ny);
  if (c === 'freeL' || c === 'freeR') { const d = (S.d + (c === 'freeL' ? 3 : 1)) % 4; return !bitBlocked(W, S.x + BIT_DX[d], S.y + BIT_DY[d]); }
  if (c.startsWith('cnt=')) return S.v === +c.slice(4);
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
function bitNeeds(W) { return W.need || ['goal', 'gems', 'deliver', 'paint', 'lights', 'melody', 'count'].filter(n => n === 'goal' ? W.goal : n === 'gems' ? W.gems.size : n === 'deliver' ? W.homes.size : n === 'paint' ? W.target : n === 'count' ? W.count !== null : W[n]); }
function bitMiss(W, S) {
  if (S.crash) return S.crash;
  for (const n of bitNeeds(W)) {
    if (n === 'goal' && !bitCond(W, S, 'goal')) return 'nogoal';
    if (n === 'gems' && S.gems.size < W.gems.size) return 'nogems';
    if (n === 'deliver' && S.done.size < W.homes.size) return 'nodeliver';
    if (n === 'paint' && W.target && (!Object.entries(W.target).every(([c, v]) => S.paint[c] === v) || Object.keys(S.paint).some(c => !W.target[c]))) return 'nopaint';
    if (n === 'lights' && W.lights && W.lights.join() !== S.leds.join()) return 'nolights';
    if (n === 'melody' && W.melody && W.melody.join() !== S.notes.join()) return 'nomelody';
    if (n === 'count' && W.count !== null && S.v !== W.count) return 'nocount';
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
  nopaint: ['El dibuix no és ben bé igual que el model.', 'El dibujo no es igual que el modelo.'],
  nolights: ["Els llums no s'han encès en l'ordre del model.", 'Las luces no se han encendido en el orden del modelo.'],
  nomelody: ['La melodia no sona igual que la del model.', 'La melodía no suena igual que la del modelo.'],
  nocount: ['El comptador no té el número que demana el repte.', 'El contador no tiene el número que pide el reto.'],
  noev: ['Els botons encara no fan el que demana el repte.', 'Los botones aún no hacen lo que pide el reto.']
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
  return `<ellipse cx="0" cy="0" rx="20" ry="5.5" fill="#0B2A12" opacity=".25"/><g class="bsp">${v}${box}</g>`;
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
const bitPaintCell = (c, v) => { const [x, y] = c.split(',').map(Number); return `<rect class="bpc" data-c="${c}" data-v="${v}" x="${x * BIT_C + 7}" y="${y * BIT_C + 7}" width="${BIT_C - 14}" height="${BIT_C - 14}" rx="10" fill="${BIT_COL[v] || BIT_COL.p}" opacity=".92"/>`; };
// efecte d'una sola vegada (espurnes, pols, cor…) en una casella
function bitFx(svg, x, y, kind) {
  const fx = svg.querySelector('.bfx'); if (!fx || (typeof REDUCED !== 'undefined' && REDUCED)) return;
  const cx = x * BIT_C + BIT_C / 2, cy = y * BIT_C + BIT_C / 2, g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('transform', `translate(${cx} ${cy})`); g.setAttribute('class', 'bfx-' + kind);
  const n = kind === 'star' ? 10 : kind === 'dust' ? 7 : 8;
  g.innerHTML = Array.from({ length: n }, (_, i) => { const a = i / n * Math.PI * 2, r = kind === 'dust' ? 22 : 30;
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
  const pl = svg.querySelector('.bpaint'); if (pl) { [...pl.children].forEach(e => { if (S.paint[e.dataset.c] !== e.dataset.v) e.remove(); }); const have = new Set([...pl.children].map(e => e.dataset.c)); for (const [c, v] of Object.entries(S.paint)) if (!have.has(c)) pl.insertAdjacentHTML('beforeend', bitPaintCell(c, v)); }
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
  add: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
  sub: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M8 12h8" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
  setv: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M8 10h8M8 14h8" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>'
};
const BIT_CAT = { fwd: 'mov', left: 'mov', right: 'mov', pick: 'act', drop: 'act', rep: 'loop', until: 'loop', if: 'cond', paint: 'art', light: 'art', note: 'snd', call: 'fn', add: 'var', sub: 'var', setv: 'var' };
const BIT_CONDS = {
  wall: ["hi ha un obstacle davant", 'hay un obstáculo delante'], free: ['el camí és lliure', 'el camino está libre'], goal: ['arribis a la bandera', 'llegues a la bandera'],
  gem: ['hi ha una estrella', 'hay una estrella'], box: ['hi ha una caixa', 'hay una caja'],
  freeL: ["hi ha camí a l'esquerra", 'hay camino a la izquierda'], freeR: ['hi ha camí a la dreta', 'hay camino a la derecha'],
  'floor:r': ['el terra és vermell', 'el suelo es rojo'], 'floor:g': ['el terra és verd', 'el suelo es verde'], 'floor:y': ['el terra és groc', 'el suelo es amarillo'], 'floor:u': ['el terra és blau', 'el suelo es azul']
};
const BIT_CNAME = { r: ['vermell', 'rojo'], g: ['verd', 'verde'], y: ['groc', 'amarillo'], u: ['blau', 'azul'] };
const BIT_NOTES = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];
// nom de la variable (el món el pot canviar: «punts», «fruites»…) i nom de cada funció
const bitVName = () => tx((typeof TB !== 'undefined' && TB && TB.W && TB.W.vname) || 'comptador|contador');
// noms de les funcions: els de la demo que s'està dibuixant (BIT_FNCTX) o els del repte obert (TB)
var BIT_FNCTX = null;
const bitFName = f => { const m = BIT_FNCTX || (typeof TB !== 'undefined' && TB && TB.fnName); return m && m[f] ? tx(m[f]) : f; };
const bitCondLabel = c => c && c.startsWith('cnt=') ? L(`el ${bitVName()} valgui ${c.slice(4)}`, `el ${bitVName()} valga ${c.slice(4)}`) : tx((BIT_CONDS[c] || BIT_CONDS.wall).join('|'));
function bitLabel(b) {
  switch (b.k) {
    case 'fwd': return L('Endavant', 'Adelante');
    case 'left': return L("Gira a l'esquerra", 'Gira a la izquierda');
    case 'right': return L('Gira a la dreta', 'Gira a la derecha');
    case 'pick': return L('Agafa la caixa', 'Coge la caja');
    case 'drop': return L('Deixa la caixa', 'Deja la caja');
    case 'rep': { const n = b.n || 2; return L(`Repeteix <b class="tnum">${n}</b> ${n === 1 ? 'vegada' : 'vegades'}`, `Repite <b class="tnum">${n}</b> ${n === 1 ? 'vez' : 'veces'}`); }
    case 'until': return `${L('Repeteix fins que', 'Repite hasta que')} <b>${bitCondLabel(b.c || 'goal')}</b>`;
    case 'if': return `${L('Si', 'Si')} <b>${bitCondLabel(b.c || 'wall')}</b>`;
    case 'paint': return `${L('Pinta de', 'Pinta de')} <i class="tdot" style="background:${BIT_COL[b.c || 'r']}"></i>`;
    case 'light': return `${L('Llum', 'Luz')} <i class="tdot" style="background:${BIT_COL[b.c || 'r']}"></i>`;
    case 'note': return `${L('Nota', 'Nota')} <b>${b.n || 'do'}</b>`;
    case 'call': return `${L('Funció', 'Función')} <b>${bitFName(b.f || 'A')}</b>`;
    case 'add': return L(`Suma <b class="tnum">${b.n ?? 1}</b> al ${bitVName()}`, `Suma <b class="tnum">${b.n ?? 1}</b> al ${bitVName()}`);
    case 'sub': return L(`Resta <b class="tnum">${b.n ?? 1}</b> al ${bitVName()}`, `Resta <b class="tnum">${b.n ?? 1}</b> al ${bitVName()}`);
    case 'setv': return L(`Posa el ${bitVName()} a <b class="tnum">${b.n || 0}</b>`, `Pon el ${bitVName()} a <b class="tnum">${b.n || 0}</b>`);
  }
  return b.k;
}
const bitNew = k => ({ k, ...(k === 'rep' ? { n: 2, b: [] } : k === 'until' ? { c: 'goal', b: [] } : k === 'if' ? { c: 'wall', b: [], e: null } : k === 'paint' || k === 'light' ? { c: 'r' } : k === 'note' ? { n: 'do' } : k === 'call' ? { f: 'A' } : k === 'add' || k === 'sub' ? { n: 1 } : k === 'setv' ? { n: 0 } : {}) });
/* Programes escrits en text (per als reptes, les solucions i les diapositives):
   f l r p d · N{ … } repeteix · until:cond{ … } · if:cond{ … } else{ … } · A B (funcions) · paint:r light:g note:mi
   add:1 sub:1 setv:0 · un «!» al final marca el bloc per a «Investiga» (f! 3!{ … }).  Exemple: TQ('3{ f f r } if:wall{ l } else{ f }') */
function TQ(src) {
  if (Array.isArray(src)) return bitClone(src);
  const tok = String(src).match(/[{}]|[^\s{}]+/g) || []; let i = 0;
  const SIMPLE = { f: 'fwd', l: 'left', r: 'right', p: 'pick', d: 'drop' };
  const list = () => { const out = [];
    while (i < tok.length && tok[i] !== '}') {
      let t = tok[i++]; const x = t.endsWith('!') && t.length > 1; if (x) t = t.slice(0, -1);
      let b;
      if (SIMPLE[t]) b = { k: SIMPLE[t] };
      else if (/^[A-E]$/.test(t)) b = { k: 'call', f: t };
      else if (/^\d+$/.test(t)) { b = { k: 'rep', n: +t, b: body() }; }
      else { const j = t.indexOf(':'), k = j < 0 ? t : t.slice(0, j), a = j < 0 ? '' : t.slice(j + 1);
        if (k === 'until') b = { k: 'until', c: a || 'goal', b: body() };
        else if (k === 'if') { b = { k: 'if', c: a || 'wall', b: body(), e: null }; if (tok[i] === 'else') { i++; b.e = body(); } }
        else if (k === 'paint' || k === 'light') b = { k, c: a || 'r' };
        else if (k === 'note') b = { k, n: a || 'do' };
        else if (k === 'add' || k === 'sub') b = { k, n: a === '' ? 1 : +a };
        else if (k === 'setv') b = { k, n: +a || 0 };
        else throw new Error('TQ: bloc desconegut «' + t + '»'); }
      if (x) b.x = 1; out.push(b); }
    return out; };
  const body = () => { if (tok[i] !== '{') throw new Error('TQ: falta «{» a ' + src); i++; const l = list(); if (tok[i] !== '}') throw new Error('TQ: falta «}» a ' + src); i++; return l; };
  const r = list(); if (i < tok.length) throw new Error('TQ: «}» de més a ' + src); return r;
}
// funcions escrites en text: { A: 'f f r' } → { A: [...] }
const TQF = o => o ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, TQ(v)])) : null;
const bitCountAll = (prog, fns, evs) => bitCount(prog) + Object.values(fns || {}).reduce((n, l) => n + bitCount(l), 0) + Object.values(evs || {}).reduce((n, l) => n + bitCount(l), 0);
// programa amb esdeveniments: «quan comença» (prog) i després els botons premuts, en ordre (presses: 'ABA')
function bitEvRun(W, prog, fns, evs, presses) {
  const S = bitSim(W); let g = bitRun(W, S, prog, fns); while (!g.next().done);
  for (const e of presses || '') { if (S.crash) break; g = bitRun(W, S, (evs || {})[e] || [], fns); while (!g.next().done); }
  return S;
}
// les proves d'un repte amb botons: [{ p: 'A', led: 'r', notes: ['do'], goal: true, at: [x, y], v: 3 }]
function bitEvCheck(spec, prog, fns, evs) {
  for (const t of spec.evtest || []) {
    const W = bitWorld(spec), S = bitEvRun(W, prog, fns, evs, t.p);
    if (S.crash) return { ok: false, t, S, why: S.crash };
    if (t.led !== undefined && S.led !== t.led) return { ok: false, t, S };
    if (t.notes && t.notes.join() !== S.notes.join()) return { ok: false, t, S };
    if (t.goal && !bitCond(W, S, 'goal')) return { ok: false, t, S };
    if (t.at && (S.x !== t.at[0] || S.y !== t.at[1])) return { ok: false, t, S };
    if (t.v !== undefined && S.v !== t.v) return { ok: false, t, S };
  }
  return { ok: true };
}
const bitClone = p => JSON.parse(JSON.stringify(p, (k, v) => k === '_id' ? undefined : v));
const bitCount = list => (list || []).reduce((n, b) => n + 1 + bitCount(b.b) + bitCount(b.e), 0);
// paraula «blocs» amb el nombre
const bitN = n => `${n} ${n === 1 ? L('bloc', 'bloque') : L('blocs', 'bloques')}`;

/* ---------- Escenari: món + programa + execució ----------
   Només n'hi ha un de visible alhora (TB). mode: 'edit' (editor amb paleta), 'view' (programa per llegir),
   'spot' (tocar un bloc), 'parsons' (ordenar blocs donats), 'hand' (moure en Bit amb botons). */
let TB = null, TB_ID = 0;
function tbMake(spec, o = {}) {
  // illes alternatives (spec.alts): el mateix programa ha de funcionar a totes
  const alts = spec.alts && spec.alts.length ? [spec, ...spec.alts.map(a => Array.isArray(a) ? { ...spec, map: a, alts: null } : { ...spec, ...a, alts: null })] : null;
  const W = bitWorld(spec);
  const fns = o.fns || o.fnEdit ? Object.fromEntries([...new Set([...Object.keys(o.fns || {}), ...(o.fnEdit || [])])].map(f => [f, o.fns && o.fns[f] ? bitClone(o.fns[f]) : []])) : null;
  TB = { spec, W, S: bitSim(W), prog: o.prog ? bitClone(o.prog) : [], fns, fnEdit: o.fnEdit || null, fnName: o.fnName || null, pal: o.pal || ['fwd', 'left', 'right'], max: o.max || W.max || 0, mode: o.mode || 'edit',
    evs: o.ev ? Object.fromEntries(o.ev.map(e => [e, o.evs && o.evs[e] ? bitClone(o.evs[e]) : []])) : null, evtest: spec.evtest || null, alts, altI: 0, altOk: new Set(),
    cur: null, sel: null, run: null, speed: 1, onDone: o.onDone || null, onFail: o.onFail || null, lists: [], ids: {}, pool: o.pool ? bitClone(o.pool) : null, lock: !!o.lock, marks: !!o.marks, solved: false, tries: 0 };
  TB.cur = { l: TB.prog, i: TB.prog.length };
  return TB;
}
const tbFnEditable = f => !!(TB.fnEdit && TB.fnEdit.includes(f));
const tbUsed = () => bitCountAll(TB.prog, TB.fnEdit ? Object.fromEntries(TB.fnEdit.map(f => [f, TB.fns[f]])) : null, TB.evs);
// ids per als blocs i les llistes (es refan a cada dibuix)
function tbIndex() {
  TB.lists = []; TB.ids = {};
  const walk = list => { TB.lists.push(list); for (const b of list) { if (!b._id) b._id = ++TB_ID; TB.ids[b._id] = { b, list }; if (b.b) walk(b.b); if (b.e) walk(b.e); } };
  walk(TB.prog); if (TB.fns) Object.values(TB.fns).forEach(walk); if (TB.evs) Object.values(TB.evs).forEach(walk); if (TB.pool) walk(TB.pool);
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
    <button onclick="tbMove(-1)" ${!tbMoveTo(b, -1) ? 'disabled' : ''} aria-label="${L('Puja', 'Sube')}">↑</button><button onclick="tbMove(1)" ${!tbMoveTo(b, 1) ? 'disabled' : ''} aria-label="${L('Baixa', 'Baja')}">↓</button>
    ${['rep', 'add', 'sub', 'setv'].includes(b.k) ? `<button onclick="tbNum(-1)" aria-label="${L('Menys', 'Menos')}">−</button><b>${b.n ?? 1}</b><button onclick="tbNum(1)" aria-label="${L('Més', 'Más')}">+</button>` : ''}
    ${b.k === 'note' ? `<button class="wide" onclick="tbNote()">${L('Canvia la nota', 'Cambia la nota')}</button>` : ''}
    ${b.k === 'call' && TB.fns && Object.keys(TB.fns).length > 1 ? `<button class="wide" onclick="tbFn()">${L('Canvia la funció', 'Cambia la función')}</button>` : ''}
    ${(b.k === 'if' || b.k === 'until') && (TB.conds || []).length > 1 ? `<button class="wide" onclick="tbCond()">${L('Canvia la condició', 'Cambia la condición')}</button>` : ''}
    ${b.k === 'if' && TB.pal.includes('else') ? `<button class="wide" onclick="tbElse()">${b.e ? L('Treu «si no»', 'Quita «si no»') : L('Afegeix «si no»', 'Añade «si no»')}</button>` : ''}
    ${(b.k === 'paint' || b.k === 'light') ? `<button class="wide" onclick="tbColor()">${L('Canvia el color', 'Cambia el color')}</button>` : ''}
    <button class="del" onclick="tbDel()" aria-label="${L('Esborra', 'Borra')}">${L('Esborra', 'Borra')}</button></div>`;
}
function tbPalette() {
  const used = tbUsed(), full = TB.max && used >= TB.max;
  const ks = TB.pal.filter(k => k !== 'else').flatMap(k => k === 'call' ? Object.keys(TB.fns || { A: 1 }).map(f => 'call:' + f) : [k]);
  return `<div class="tpal">${ks.map(k => { const b = k.startsWith('call:') ? { k: 'call', f: k.slice(5) } : bitNew(k), kk = b.k;
    if ((kk === 'if' || kk === 'until') && TB.conds && TB.conds.length) b.c = TB.conds[0];
    return `<button class="tb c-${BIT_CAT[kk]} tpb" onclick="tbIns('${k}')" ${full ? 'disabled' : ''}><span class="tbi">${BIT_ICO[kk] || ''}</span><span class="tbl">${bitLabel(b).replace(/<b class="tnum">\d+<\/b>/, kk === 'rep' ? 'N' : '<b class="tnum">1</b>')}</span></button>`; }).join('')}</div>`;
}
// les altres llistes de blocs: funcions (es poden editar si el repte ho diu) i esdeveniments (quan premo A…)
function tbExtraLists() {
  const card = (cls, title, list, ro) => `<div class="tprog2 ${cls}"><div class="tp2h">${title}</div><div class="tprog">${tbList(list, ro || TB.mode !== 'edit')}</div></div>`;
  const fns = TB.fns ? Object.entries(TB.fns).map(([f, l]) => card('fn', `${BIT_ICO.call}<b>${L('Funció', 'Función')} ${bitFName(f)}</b>${tbFnEditable(f) ? '' : `<small>${L('ja feta', 'ya hecha')}</small>`}`, l, !tbFnEditable(f))).join('') : '';
  const evs = TB.evs ? Object.entries(TB.evs).map(([e, l]) => card('ev', `<span class="tevk sm">${e}</span><b>${L(`Quan premo ${e}`, `Al pulsar ${e}`)}</b>`, l)).join('') : '';
  return fns + evs;
}
// tot l'escenari: món a dalt (o a l'esquerra a l'ordinador) i programa + paleta a sota
function tbHTML(extra = '') {
  tbIndex();
  const used = TB.mode === 'edit' ? tbUsed() : bitCount(TB.prog);
  const clr = TB.mode === 'edit' && !TB.lock && used ? `<button class="tclr" onclick="tbClear()" aria-label="${L('Buida el programa', 'Vacía el programa')}"><svg viewBox="0 0 24 24"><path d="M6 7h12l-1 14H7zM9 3h6l1 2h4v2H4V5h4z" fill="currentColor"/></svg></button>` : '';
  const head = TB.mode === 'hand' ? '' : `<div class="tphead"><b>${TB.mode === 'parsons' ? L('El teu programa', 'Tu programa') : TB.evs ? L('Quan comença', 'Al empezar') : L('Programa', 'Programa')}</b><span class="tphr">${TB.max ? `<span class="tcount ${used >= TB.max ? 'full' : ''}">${used}/${TB.max} ${L('blocs', 'bloques')}</span>` : `<span class="tcount">${bitN(used)}</span>`}${clr}</span></div>`;
  const prog = TB.mode === 'hand' ? `<div class="thand"><button onclick="tbHand('left')" aria-label="${bitLabel({ k: 'left' })}">${BIT_ICO.left}</button><button class="big" onclick="tbHand('fwd')" aria-label="${bitLabel({ k: 'fwd' })}">${BIT_ICO.fwd}</button><button onclick="tbHand('right')" aria-label="${bitLabel({ k: 'right' })}">${BIT_ICO.right}</button></div>
      <div class="tprog mini">${TB.prog.length ? TB.prog.map(b => `<span class="tchip c-${BIT_CAT[b.k]}">${BIT_ICO[b.k]}</span>`).join('') : `<p class="tempty">${L('Els teus moviments apareixeran aquí', 'Tus movimientos aparecerán aquí')}</p>`}</div>`
    : `${head}<div class="tprog" id="tprog">${tbList(TB.prog, TB.mode === 'view' || TB.mode === 'spot')}</div>${tbExtraLists()}${TB.mode === 'edit' ? tbPalette() : ''}${TB.mode === 'parsons' ? `<div class="tpool"><small>${L('Blocs disponibles', 'Bloques disponibles')}</small><div>${TB.pool.map(b => tbBlock(b)).join('') || `<p class="tempty">${L('Ja els has posat tots', 'Ya los has puesto todos')}</p>`}</div></div>` : ''}`;
  const runbar = TB.mode !== 'hand' ? `<div class="trun">
      <button class="btn big trgo" onclick="tbGo()" id="tbgo">${TB.run ? L('Atura', 'Para') : `<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>${L('Executa', 'Ejecuta')}`}</button>
      ${TB.mode === 'edit' || TB.mode === 'parsons' ? `<button class="btn ghost" onclick="tbStep()" title="${L('Executa un sol bloc', 'Ejecuta un solo bloque')}">${L('Pas a pas', 'Paso a paso')}</button>` : ''}
      <button class="btn ghost ico" onclick="tbReset()" aria-label="${L('Torna en Bit al principi', 'Vuelve a poner a Bit al principio')}"><svg viewBox="0 0 24 24"><path d="M12 5V2L7 6l5 4V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z" fill="currentColor"/></svg></button>
      <button class="btn ghost ico" onclick="tbSpeed()" aria-label="${L('Velocitat', 'Velocidad')}" title="${L('Velocitat', 'Velocidad')}">${TB.speed === 2 ? '×2' : '×1'}</button></div>` : '';
  TB.runbar = runbar;
  return `<div class="tstage m-${TB.mode}">${tbWorldHTML()}<div class="tcode">${extra}${prog}</div></div>`;
}
// el món: en 3D si l'aparell ho permet (tech-3d.js); mentrestant, i si no hi ha WebGL, el dibuix 2D
function tbWorldHTML() {
  const ar = Math.max(.56, Math.min(1.05, (TB.W.h + 1.8) / (TB.W.w + 1.2) * .82));
  const alts = TB.alts ? `<div class="talts">${TB.alts.map((_, i) => `<button class="${i === TB.altI ? 'on' : ''} ${TB.altOk.has(i) ? 'ok' : ''}" onclick="tbAlt(${i})">${TB.altOk.has(i) ? '✓ ' : ''}${L('Illa', 'Isla')} ${i + 1}</button>`).join('')}</div>` : '';
  const evb = TB.evs && TB.mode === 'edit' ? `<div class="tevb">${Object.keys(TB.evs).map(e => `<button class="tevk" id="tev${e}" onclick="tbPress('${e}')" aria-label="${L('Prem el botó', 'Pulsa el botón')} ${e}">${e}</button>`).join('')}${TB.evtest ? `<button class="btn ghost tevt" onclick="tbEvTest()">${L('Comprova', 'Comprueba')}</button>` : ''}</div>` : '';
  return `<div class="tworld" id="tworld">${alts}<div class="b3d" id="b3d" style="aspect-ratio:${(1 / ar).toFixed(3)}">${bitSVG(TB.W, TB.S, { marks: TB.marks })}<div class="thud" id="thud">${tbHudHTML()}</div></div>${evb}<p class="tsay" id="tsay" aria-live="polite"></p>${TB.runbar || ''}</div>`;
}
// marcador sobre el món: el comptador, la melodia i els llums que demana el repte (i com van)
function tbHudHTML() {
  if (!TB) return '';
  return bitHudHTML(TB.W, TB.S, [TB.prog, ...Object.values(TB.fns || {}), ...Object.values(TB.evs || {})].some(l => bitCountK(l, ['add', 'sub', 'setv'])));
}
function bitHudHTML(W, S, usesV) {
  const h = [];
  if (usesV || W.count !== null || W.vname) h.push(`<span class="thv"><small>${bitVName()}</small><b>${S.v}</b>${W.count !== null ? `<i>/ ${W.count}</i>` : ''}</span>`);
  if (W.melody) h.push(`<span class="thm">${BIT_ICO.note}${W.melody.map((n, i) => `<i class="${S.notes[i] === n ? 'ok' : S.notes[i] ? 'ko' : ''}">${n}</i>`).join('')}</span>`);
  else if (S.notes.length) h.push(`<span class="thm">${BIT_ICO.note}${S.notes.slice(-6).map(n => `<i class="ok">${n}</i>`).join('')}</span>`);
  if (W.lights) h.push(`<span class="thl">${BIT_ICO.light}${W.lights.map((c, i) => `<i style="--c:${BIT_COL[c]}" class="${S.leds[i] === c ? 'ok' : S.leds[i] ? 'ko' : ''}"></i>`).join('')}</span>`);
  else if (S.led) h.push(`<span class="thl now">${BIT_ICO.light}<i style="--c:${BIT_COL[S.led]}" class="ok"></i></span>`);
  return h.join('');
}
const bitCountK = (list, ks) => (list || []).reduce((n, b) => n + (ks.includes(b.k) ? 1 : 0) + bitCountK(b.b, ks) + bitCountK(b.e, ks), 0);
const tbHud = () => { const e = document.getElementById('thud'); if (e) e.innerHTML = tbHudHTML(); };
// la part del programa (es refà a cada canvi sense tocar el món 3D)
function tbCodeHTML() { const h = tbHTML(TB.extra || ''); const d = document.createElement('div'); d.innerHTML = h; const c = d.querySelector('.tcode'); return c ? c.innerHTML : ''; }
function tbDraw() {
  const st = document.querySelector('.tstage'); if (!st) return;
  const sc = document.getElementById('tprog'), top = sc ? sc.scrollTop : 0;
  const code = st.querySelector('.tcode'), w = st.querySelector('#tworld');
  if (code && w) { code.innerHTML = tbCodeHTML(); const rb = w.querySelector('.trun'); if (rb && TB.runbar) rb.outerHTML = TB.runbar; if (TB.dirtyWorld) tbRedrawWorld(); else tbHud(); if (TB.dirtyAlts) tbAltTabs(); }
  else { st.outerHTML = tbHTML(TB.extra || ''); tb3dMount(); }
  TB.dirtyWorld = false;
  const sc2 = document.getElementById('tprog'); if (sc2) sc2.scrollTop = top;
}
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
  else { const w = document.querySelector('#tworld .bitw'); if (w) bitPaintState(w, TB.W, S, prev); }
  TB.prevS = { x: S.x, y: S.y, d: S.d, ang: S.ang, carry: S.carry, led: S.led };
  tbHud();
}
function tbSay(t, cls = '') { const e = document.getElementById('tsay'); if (e) { e.className = 'tsay ' + cls; e.innerHTML = t; } }

/* ---------- Editor ---------- */
function tbIns(k) {
  if (TB.run) tbStop();
  if (TB.max && tbUsed() >= TB.max) return toast(L(`Només pots fer servir ${TB.max} blocs.`, `Solo puedes usar ${TB.max} bloques.`));
  const b = k.startsWith('call:') ? { k: 'call', f: k.slice(5) } : bitNew(k); if (k === 'if' || k === 'until') b.c = (TB.conds || [b.c])[0];
  if (b.k === 'note' && TB.notes) b.n = TB.notes[0];
  const { l, i } = TB.cur; l.splice(i, 0, b);
  // dins d'un bucle o d'un «si» nou, el cursor hi entra (és el que gairebé sempre es vol fer després)
  TB.cur = b.b ? { l: b.b, i: 0 } : { l, i: i + 1 };
  TB.sel = null; SFX.tap && SFX.tap(); tbFresh(); tbDraw();
}
function tbCur(li, i) { if (TB.run) tbStop(); TB.cur = { l: TB.lists[li], i }; TB.sel = null; tbDraw(); }
function tbSel(id) { if (TB.run) tbStop(); const ix = TB.ids[id]; if (!ix) return; TB.sel = TB.sel === ix.b ? null : ix.b; TB.cur = { l: ix.list, i: ix.list.indexOf(ix.b) + 1 }; tbDraw(); }
// ↑ / ↓: el bloc passa per sobre del veí; si el veí és un bucle o un «si», hi entra, i a la vora d'un bucle en surt
const BIT_CONT = k => k === 'rep' || k === 'until' || k === 'if';
function tbParent(l) { for (const ix of Object.values(TB.ids)) if (ix.b.b === l || ix.b.e === l) return ix; return null; }
function tbMoveTo(b, d) {
  const l = TB.ids[b._id].list, i = l.indexOf(b), nb = l[i + d];
  if (nb && BIT_CONT(nb.k)) { const into = d > 0 ? nb.b : (nb.e || nb.b); return into ? { l: into, i: d > 0 ? 0 : into.length } : null; }
  if (nb) return { l, i: d > 0 ? i + 1 : i - 1 };
  const par = tbParent(l); if (!par) return null;
  if (par.b.e === l && d < 0) return { l: par.b.b, i: par.b.b.length };   // de «si no» a «si»
  if (par.b.e && par.b.b === l && d > 0) return { l: par.b.e, i: 0 };      // de «si» a «si no»
  const j = par.list.indexOf(par.b); return { l: par.list, i: d > 0 ? j + 1 : j };
}
function tbMove(d) { const b = TB.sel, l = TB.ids[b._id].list, to = tbMoveTo(b, d); if (!to) return; l.splice(l.indexOf(b), 1); to.l.splice(to.i, 0, b); TB.cur = { l: to.l, i: to.i + 1 }; tbFresh(); tbDraw(); }
function tbDel() { const b = TB.sel, l = TB.ids[b._id].list, i = l.indexOf(b); l.splice(i, 1); TB.sel = null; TB.cur = { l, i }; tbFresh(); tbDraw(); }
function tbNum(d) { const b = TB.sel, lo = b.k === 'setv' ? 0 : 1, hi = b.k === 'rep' ? 12 : 20; b.n = Math.max(lo, Math.min(hi, (b.n ?? (b.k === 'rep' ? 2 : 1)) + d)); tbFresh(); tbDraw(); }
function tbNote() { const b = TB.sel, ns = TB.notes || BIT_NOTES; b.n = ns[(ns.indexOf(b.n) + 1) % ns.length]; bitSnd('note', b.n); tbFresh(); tbDraw(); }
function tbFn() { const b = TB.sel, fs = Object.keys(TB.fns || {}); b.f = fs[(fs.indexOf(b.f) + 1) % fs.length]; tbFresh(); tbDraw(); }
function tbCond() { const b = TB.sel, cs = TB.conds || ['wall']; b.c = cs[(cs.indexOf(b.c) + 1) % cs.length]; tbFresh(); tbDraw(); }
function tbElse() { const b = TB.sel; b.e = b.e ? null : []; tbFresh(); tbDraw(); }
function tbColor() { const b = TB.sel, cs = TB.colors || ['r', 'g', 'y', 'u']; b.c = cs[(cs.indexOf(b.c) + 1) % cs.length]; tbFresh(); tbDraw(); }
function tbClear() { if (!TB.prog.length) return; TB.prog.splice(0); TB.cur = { l: TB.prog, i: 0 }; TB.sel = null; tbFresh(); tbDraw(); }
// qualsevol canvi del programa: en Bit torna a la sortida
function tbFresh() { const moved = TB.S && (TB.S.n || TB.S.trail.length > 1 || TB.S.d !== TB.W.bot[2] || TB.S.led || TB.S.v !== (TB.W.v0 || 0)); TB.S = bitSim(TB.W); TB.gen = null; TB.testing = null; if (TB.altOk.size) { TB.altOk.clear(); TB.dirtyAlts = true; } if (moved) TB.dirtyWorld = true; }
// canviar d'illa (reptes amb illes alternatives)
function tbAlt(i) {
  if (!TB.alts || i < 0 || i >= TB.alts.length) return; if (TB.run) tbStop();
  TB.altI = i; TB.W = bitWorld(TB.alts[i]); TB.S = bitSim(TB.W); TB.gen = null;
  tbRedrawWorld(); tbAltTabs(); tbSay('');
}
function tbAltTabs() { const e = document.querySelector('#tworld .talts'); if (e && TB.alts) e.innerHTML = TB.alts.map((_, i) => `<button class="${i === TB.altI ? 'on' : ''} ${TB.altOk.has(i) ? 'ok' : ''}" onclick="tbAlt(${i})">${TB.altOk.has(i) ? '✓ ' : ''}${L('Illa', 'Isla')} ${i + 1}</button>`).join(''); TB.dirtyAlts = false; }
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
  tbHud();
}
function tbGo() {
  if (TB.run) return tbStop();
  if (!TB.prog.length && !TB.evs) { tbSay(L('Primer posa algun bloc al programa.', 'Primero pon algún bloque en el programa.')); return; }
  TB.S = bitSim(TB.W); tbRedrawWorld(); TB.sel = null; TB.testing = null;
  TB.gen = bitRun(TB.W, TB.S, TB.prog, TB.fns); TB.run = true; TB.tries++; TB.phase = 'start';
  const btn = document.getElementById('tbgo'); if (btn) btn.innerHTML = L('Atura', 'Para');
  tbSay(''); document.querySelectorAll('.tb.err').forEach(e => e.classList.remove('err'));
  tbTick();
}
function tbStop() { clearTimeout(TB.t); TB.run = null; document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now')); const btn = document.getElementById('tbgo'); if (btn) btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>${L('Executa', 'Ejecuta')}`; }
function tbMark(b) { document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now')); if (b && b._id) { const e = document.getElementById('tb' + b._id); if (e) { e.classList.add('now'); const p = document.getElementById('tprog'); if (p && p.scrollHeight > p.clientHeight) { const r = e.getBoundingClientRect(), pr = p.getBoundingClientRect(); if (r.top < pr.top || r.bottom > pr.bottom) p.scrollTop += r.top - pr.top - 30; } } } }
function tbTick() {
  const r = TB.gen.next();
  if (r.done) return tbEnd();
  if (r.value.press) { const e = document.getElementById('tev' + r.value.press); if (e) { e.classList.remove('hit'); void e.offsetWidth; e.classList.add('hit'); } tbSay(L(`Premo el botó <b>${r.value.press}</b>…`, `Pulso el botón <b>${r.value.press}</b>…`)); bitSnd('act'); TB.t = setTimeout(tbTick, 650 / TB.speed); return; }
  tbMark(r.value.b);
  if (r.value.act) { tbWorld(); const k = r.value.b.k; if (!TB.S.crash) bitSnd(k === 'fwd' ? 'step' : k === 'left' || k === 'right' ? 'turn' : k === 'note' ? 'note' : 'act', r.value.b.n); }
  if (TB.S.crash) return tbEnd(r.value.b);
  TB.t = setTimeout(tbTick, (r.value.act ? 430 : 200) / TB.speed);
}
// un sol bloc cada vegada (per depurar)
function tbStep() {
  if (TB.run) tbStop();
  if (!TB.prog.length) return tbSay(L('Primer posa algun bloc al programa.', 'Primero pon algún bloque en el programa.'));
  if (!TB.gen) { TB.S = bitSim(TB.W); tbRedrawWorld(); TB.gen = bitRun(TB.W, TB.S, TB.prog, TB.fns); TB.phase = 'start'; tbSay(''); }
  let r; do { r = TB.gen.next(); } while (!r.done && !r.value.press && !r.value.act && !TB.S.crash && !r.value.b.k.match(/^(if|until)$/));
  if (!r.done && r.value.press) return;
  if (r.done) { TB.gen = null; return tbEnd(); }
  tbMark(r.value.b); tbWorld(); if (!TB.S.crash && r.value.act) bitSnd(r.value.b.k === 'fwd' ? 'step' : 'turn');
  if (TB.S.crash) { TB.gen = null; return tbEnd(r.value.b); }
}
function tbEnd(last) {
  TB.run = null; clearTimeout(TB.t);
  const btn = document.getElementById('tbgo'); if (btn) btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>${L('Executa', 'Ejecuta')}`;
  if (TB.testing) return tbEvTestEnd(last);
  const miss = bitMiss(TB.W, TB.S);
  // amb botons: el programa d'inici només prepara; el repte es resol prement els botons (o amb «Comprova»)
  if (TB.evs && !TB.S.crash && (miss || TB.evtest)) {
    document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now')); tbGlowEv();
    if (TB.evtest) tbSay(L('Prem els botons per provar què fan. Quan ho tinguis, toca <b>Comprova</b>.', 'Pulsa los botones para probar qué hacen. Cuando lo tengas, toca <b>Comprueba</b>.'));
    else tbSay(L('Ara prem els botons per guiar en Bit!', '¡Ahora pulsa los botones para guiar a Bit!'));
    return;
  }
  if (!miss) {
    document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now'));
    if (TB.alts) { TB.altOk.add(TB.altI); tbAltTabs(); const nx = TB.alts.findIndex((_, i) => !TB.altOk.has(i));
      if (nx >= 0) { bitSnd('ok'); tbBotFx('yay'); tbSay(L(`Funciona a l'illa ${TB.altI + 1}! Ara el mateix programa a l'illa ${nx + 1}…`, `¡Funciona en la isla ${TB.altI + 1}! Ahora el mismo programa en la isla ${nx + 1}…`), 'ok');
        TB.t = setTimeout(() => { if (!TB || TB.run) return; tbAlt(nx); tbGo(); }, 1500); return; } }
    return tbWin(TB.alts ? L(`Molt bé! El programa funciona a les ${TB.alts.length} illes!`, `¡Muy bien! ¡El programa funciona en las ${TB.alts.length} islas!`) : null);
  }
  if (TB.S.crash) { bitSnd('hit'); tbBotFx('hit'); const [ax, ay] = bitAhead(TB.S), w = document.querySelector('#tworld .bitw'); if (TB.b3) TB.b3.fx('dust', (TB.S.x + ax) / 2, (TB.S.y + ay) / 2); else if (w) bitFx(w, (TB.S.x + ax) / 2, (TB.S.y + ay) / 2, 'dust'); } else { SFX.ko && SFX.ko(); tbBotFx('sad'); }
  if (TB.S.crash && last && last._id) { const e = document.getElementById('tb' + last._id); if (e) { e.classList.remove('now'); e.classList.add('err'); } }
  else document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now'));
  tbSay((TB.alts ? L(`A l'illa ${TB.altI + 1}: `, `En la isla ${TB.altI + 1}: `) : '') + tx(BIT_WHY[miss].join('|')) + ' ' + L('Canvia el programa i torna-ho a provar.', 'Cambia el programa y vuelve a probar.'), 'bad');
  if (TB.onFail) TB.onFail(miss);
}
function tbWin(msg) {
  document.querySelectorAll('.tb.now').forEach(e => e.classList.remove('now'));
  TB.solved = true; SFX.win && SFX.win(); tbBotFx('yay'); typeof confetti === 'function' && confetti(90);
  tbSay(msg || L('Molt bé! Ho has aconseguit!', '¡Muy bien! ¡Lo has conseguido!'), 'ok'); if (TB.onDone) TB.onDone();
}
const tbGlowEv = () => document.querySelectorAll('.tevk').forEach(e => { e.classList.remove('glow'); void e.offsetWidth; e.classList.add('glow'); });
// prémer un botó: en Bit fa el programa d'aquell botó des d'on és
function tbPress(e) {
  if (!TB || !TB.evs || TB.run || TB.testing) return;
  if (TB.S.crash) { TB.S = bitSim(TB.W); tbRedrawWorld(); }
  TB.sel = null; document.querySelectorAll('.tb.err').forEach(x => x.classList.remove('err'));
  const b = document.getElementById('tev' + e); if (b) { b.classList.remove('hit'); void b.offsetWidth; b.classList.add('hit'); }
  if (!TB.evs[e].length) return tbSay(L(`El botó <b>${e}</b> encara no té cap bloc.`, `El botón <b>${e}</b> aún no tiene ningún bloque.`));
  TB.phase = 'ev'; TB.gen = bitRun(TB.W, TB.S, TB.evs[e], TB.fns); TB.run = true; TB.tries++; tbSay(''); tbTick();
}
// «Comprova»: proves automàtiques (cada prova comença de nou i prem els botons en ordre)
function* bitEvGen(W, S, prog, fns, evs, presses) { yield* bitRun(W, S, prog, fns); for (const e of presses || '') { if (S.crash) return; yield { press: e }; yield* bitRun(W, S, (evs || {})[e] || [], fns); } }
function tbEvTest() { if (!TB || !TB.evtest || TB.run) return; TB.testing = { i: 0 }; TB.tries++; tbEvTestRun(); }
function tbEvTestRun() {
  const t = TB.evtest[TB.testing.i]; TB.S = bitSim(TB.W); tbRedrawWorld();
  tbSay(L(`Prova ${TB.testing.i + 1} de ${TB.evtest.length}…`, `Prueba ${TB.testing.i + 1} de ${TB.evtest.length}…`));
  TB.gen = bitEvGen(TB.W, TB.S, TB.prog, TB.fns, TB.evs, t.p); TB.run = true; TB.t = setTimeout(tbTick, 500);
}
function tbEvTestEnd(last) {
  const t = TB.evtest[TB.testing.i], S = TB.S, W = TB.W;
  const bad = S.crash ? tx(BIT_WHY[S.crash].join('|')) : t.led !== undefined && S.led !== t.led ? L(`el llum havia de quedar ${tx(BIT_CNAME[t.led].join('|'))}`, `la luz tenía que quedar ${tx(BIT_CNAME[t.led].join('|'))}`)
    : t.notes && t.notes.join() !== S.notes.join() ? L(`havia de sonar: ${t.notes.join(', ')}`, `tenía que sonar: ${t.notes.join(', ')}`)
    : t.goal && !bitCond(W, S, 'goal') ? L("en Bit havia d'arribar a la bandera", 'Bit tenía que llegar a la bandera')
    : t.at && (S.x !== t.at[0] || S.y !== t.at[1]) ? L("en Bit no ha acabat a la casella que tocava", 'Bit no ha terminado en la casilla que tocaba')
    : t.v !== undefined && S.v !== t.v ? L(`el ${bitVName()} havia de valer ${t.v}`, `el ${bitVName()} tenía que valer ${t.v}`) : null;
  if (bad) { TB.testing = null; SFX.ko && SFX.ko(); tbBotFx(S.crash ? 'hit' : 'sad');
    if (last && last._id && S.crash) { const e = document.getElementById('tb' + last._id); if (e) e.classList.add('err'); }
    const pr = (t.p || '').split('').join(L(' i després ', ' y después '));
    tbSay(L(`Prova ${TB.evtest.indexOf(t) + 1}${pr ? ` (premo ${pr})` : ''}: ${bad}. Canvia els blocs i torna a comprovar.`, `Prueba ${TB.evtest.indexOf(t) + 1}${pr ? ` (pulso ${pr})` : ''}: ${bad}. Cambia los bloques y vuelve a comprobar.`), 'bad');
    if (TB.onFail) TB.onFail('noev'); return; }
  bitSnd('ok');
  if (++TB.testing.i < TB.evtest.length) { TB.t = setTimeout(() => TB && TB.testing && tbEvTestRun(), 700); return; }
  TB.testing = null; tbWin(L('Totes les proves funcionen. Els botons fan el que havien de fer!', 'Todas las pruebas funcionan. ¡Los botones hacen lo que tenían que hacer!'));
}
// animació d'en Bit: salt d'alegria, xoc o tristesa
function tbBotFx(c) { if (TB && TB.b3) return TB.b3.react(c); const sp = document.querySelector('#tworld .bbot .bsp'); if (!sp) return; sp.classList.remove('walk', 'turn', 'hit', 'yay', 'sad'); void sp.getBoundingClientRect(); sp.classList.add(c); }
function tbReset() { if (TB.run) tbStop(); tbFresh(); tbRedrawWorld(); tbSay(''); document.querySelectorAll('.tb.err,.tb.now').forEach(e => e.classList.remove('err', 'now')); }
function tbSpeed() { TB.speed = TB.speed === 2 ? 1 : 2; const b = document.querySelector('.trun .ico[aria-label="' + L('Velocitat', 'Velocidad') + '"]'); if (b) b.textContent = TB.speed === 2 ? '×2' : '×1'; }
// executa sense dibuixar (per saber on acaba un programa, per a les preguntes de «on acabarà?»)
function bitFinal(spec, prog, fns) { const W = bitWorld(spec), S = bitSim(W); const g = bitRun(W, S, prog, fns); while (!g.next().done); return { W, S }; }
// el repte es resol? (totes les illes, les proves dels botons…) → null si sí, o el motiu
function bitSolves(spec, prog, fns, evs, presses) {
  if (spec.evtest) { const r = bitEvCheck(spec, prog, fns, evs); return r.ok ? null : 'noev:' + JSON.stringify(r.t) + ' ' + (r.why || ''); }
  const all = spec.alts ? [spec, ...spec.alts.map(a => Array.isArray(a) ? { ...spec, map: a, alts: null } : { ...spec, ...a, alts: null })] : [spec];
  for (const [i, sp] of all.entries()) { const W = bitWorld(sp), S = evs ? bitEvRun(W, prog, fns, evs, presses) : bitFinal(sp, prog, fns).S; const m = bitMiss(W, S); if (m) return (all.length > 1 ? `alt${i}:` : '') + m; }
  return null;
}

/* ---------- En Bit, de cara (per a les històries) ---------- */
// en Bit de cos sencer: un render 3D (img/tech/bit-<posa>.webp, fet amb scripts/3d/portraits.mjs) dins d'un SVG,
// perquè encaixi a tots els llocs on abans hi havia el dibuix (mides, escenes i animacions)
const BIT_POSE = { idle: 'idle', happy: 'happy', win: 'win', sad: 'sad', dance: 'dance', think: 'think', wave: 'wave' };
function bitChar(mood = 'idle') {
  return `<svg class="bitc m-${mood}" viewBox="-64 -78 128 156" aria-hidden="true"><image href="img/tech/bit-${BIT_POSE[mood] || 'idle'}.webp" x="-64" y="-78" width="128" height="156" preserveAspectRatio="xMidYMax meet"/></svg>`;
}

