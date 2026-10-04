/* ===== Numi Tech · Creadors: l'escenari amb personatges i blocs =====
   Motor propi de Numi per crear animacions, històries interactives i videojocs amb blocs (per a 8-11 anys).
   · L'escenari fa 480 × 360 punts, amb el (0, 0) al centre: x creix cap a la dreta i y cap amunt (com a la recta i els
     eixos de coordenades de matemàtiques). La direcció 90 és mirar a la dreta, 0 amunt, 180 avall i -90 a l'esquerra.
   · Cada personatge té els seus guions: «quan comença» (la bandera verda), «quan toco aquest personatge», «quan premo
     una tecla», «quan rebo un missatge» i «quan començo com a clon». Tots funcionen alhora, a 30 fotogrames per segon:
     cada volta d'un bucle espera el fotograma següent (per això les animacions es veuen).
   · El motor (moure, xocar, missatges, variables, clons) no depèn del dibuix: es pot provar sense navegador i així es
     comprova que tots els reptes tenen solució. Sense eval (CSP): els programes són arbres de blocs.
   · Els personatges són dibuixos SVG propis (els de Numi i objectes de l'escenari); els fons, també. */

const STG = { W: 480, H: 360, FPS: 30 };
const stgRad = a => a * Math.PI / 180;

/* ---------- El món ----------
   spec: { bg: 'aquari', bgs?: ['aquari','espai'] (fons que es poden triar), sprites: [{ id, art, x, y, dir?, size?, costume?, hidden?,
     prog?: 'SQ' (guions que ja hi són, de només lectura), name?: 'Nom|Nombre' }], edit: ['peix'] (de qui escriu els guions
     l'alumne), vars: ['punts'], keys: ['left','right','up','down','space'], time: 8 (segons de la prova),
     input: [{ t: 1, key: 'right', dur: .5 }, { t: 2, click: 'peix' }], goal: [ comprovacions ], alts: [ variants ] } */
function stgWorld(spec) {
  const W = { ...spec, time: spec.time || 8, goal: spec.goal || [], vars: spec.vars || [], keys: spec.keys || [], input: (spec.input || []).map(i => ({ ...i })) };
  W.sprites = (spec.sprites || []).map(s => ({ dir: 90, size: 100, costume: 0, ...s }));
  W.regions = (STG_BGREG[spec.bg] || []).concat(spec.regions || []);
  return W;
}
function stgSprite(W, d, n) { const a = STG_ART[d.art] || STG_ART.estrella; return { id: d.id, art: d.art, name: d.name || null, x: d.x || 0, y: d.y || 0, dir: d.dir ?? 90, size: d.size || 100, c: d.costume || 0, hidden: !!d.hidden, ghost: 0, say: null, think: false, sayT: 0, z: n, rot: d.rot || null, clone: false, dead: false, path: 0, costumeChanges: 0, lastX: d.x || 0, lastY: d.y || 0, r: a.r || 30, ncost: a.n || 1 }; }
function stgSim(W, progs) {
  const S = { t: 0, f: 0, bg: W.bg, bgChanges: 0, vars: Object.fromEntries((W.vars || []).map(v => [v, 0])), sprites: [], threads: [], keys: {}, log: [], msgs: [], touched: new Set(), said: [], clones: 0, stopped: false, crash: null, mx: 0, my: 0, steps: 0 };
  W.sprites.forEach((d, i) => S.sprites.push(stgSprite(W, d, i)));
  S.progs = progs;
  return S;
}
const stgFind = (S, id) => S.sprites.find(s => s.id === id && !s.clone && !s.dead);
// radi de xoc segons la mida
const stgR = s => s.r * s.size / 100;
function stgTouch(S, W, s, t) {
  if (s.hidden || s.dead) return false;
  if (t === 'edge') { const r = stgR(s) * .8; return s.x - r < -STG.W / 2 || s.x + r > STG.W / 2 || s.y - r < -STG.H / 2 || s.y + r > STG.H / 2; }
  if (t === 'mouse') return Math.hypot(s.x - S.mx, s.y - S.my) < stgR(s);
  for (const o of S.sprites) if (o !== s && o.id === t && !o.hidden && !o.dead) { if (Math.hypot(s.x - o.x, s.y - o.y) < (stgR(s) + stgR(o)) * .78) return true; }
  return false;
}
// tocar un color del fons (les zones de color de cada fons estan descrites com a rectangles: així també funciona sense dibuix)
function stgTouchColor(W, s, c) { const r = stgR(s) * .7; return W.regions.some(g => g.c === c && s.x + r > g.r[0] && s.x - r < g.r[0] + g.r[2] && s.y + r > g.r[1] && s.y - r < g.r[1] + g.r[3]); }
function stgVal(S, W, s, v) {
  if (typeof v === 'number') return v; if (v == null) return 0;
  switch (v.r) {
    case 'var': return S.vars[v.v] ?? 0; case 'x': return Math.round(s.x); case 'y': return Math.round(s.y); case 'dir': return Math.round(s.dir); case 'size': return Math.round(s.size);
    case 'costume': return s.c + 1; case 'timer': return Math.round((S.t - (S.timer0 || 0)) * 10) / 10; case 'mx': return Math.round(S.mx); case 'my': return Math.round(S.my);
    case 'rnd': { const a = stgVal(S, W, s, v.a), b = stgVal(S, W, s, v.b); S.rng = (S.rng * 1103515245 + 12345) & 0x7fffffff; return Math.min(a, b) + (S.rng % (Math.abs(b - a) + 1)); }
  }
  return 0;
}
function stgCond(S, W, s, c) {
  if (!c) return false;
  if (c.and) return stgCond(S, W, s, c.and[0]) && stgCond(S, W, s, c.and[1]);
  if (c.or) return stgCond(S, W, s, c.or[0]) || stgCond(S, W, s, c.or[1]);
  if (c.not) return !stgCond(S, W, s, c.not);
  if (c.touch) { const r = stgTouch(S, W, s, c.touch); if (r && c.touch !== 'edge' && c.touch !== 'mouse') S.touched.add(s.id + '>' + c.touch); return r; }
  if (c.color) return stgTouchColor(W, s, c.color);
  if (c.key) return !!S.keys[c.key];
  const a = stgVal(S, W, s, c.a), b = stgVal(S, W, s, c.b);
  switch (c.op) { case '<': return a < b; case '>': return a > b; case '=': return a === b; case '≠': return a !== b; case '≤': return a <= b; case '≥': return a >= b; }
  return false;
}
const stgClampDir = d => { d = ((d + 180) % 360 + 360) % 360 - 180; return d === -180 ? 180 : d; };
function stgMove(s, n) { s.x += Math.sin(stgRad(s.dir)) * n; s.y += Math.cos(stgRad(s.dir)) * n; }
function stgBounce(s) {
  const r = stgR(s) * .8, hw = STG.W / 2, hh = STG.H / 2;
  if (s.x - r < -hw) { s.x = -hw + r; s.dir = stgClampDir(-s.dir); } else if (s.x + r > hw) { s.x = hw - r; s.dir = stgClampDir(-s.dir); }
  if (s.y - r < -hh) { s.y = -hh + r; s.dir = stgClampDir(180 - s.dir); } else if (s.y + r > hh) { s.y = hh - r; s.dir = stgClampDir(180 - s.dir); }
}
function stgSay(S, s, t, think) { s.say = t; s.think = !!think; S.said.push({ id: s.id, t: String(t), at: S.t }); S.log.push({ t: S.t, k: 'say', id: s.id, txt: String(t) }); }
/* ---------- Intèrpret ----------
   Blocs: move {n} · turn {n} (dreta; negatiu = esquerra) · goto {x, y} · gotorand · glide {s, x, y} · setx/sety/chx/chy {n} · point {n} · pointto {t}
   bounce · say {t, s?} · think {t, s?} · costume {n} · next · size {n} · chsize {n} · show · hide · ghost {n} · front
   wait {s} · rep {n, b} · forever {b} · if {c, b, e} · until {c, b} · waitu {c} · stop {w: all|this} · send {m} · clone · delclone
   setv {v, n} · chv {v, n} · sound {n} · bg {n} · nextbg · timer0 */
function* stgRun(S, W, s, list) {
  for (const b of list || []) {
    if (S.stopped || s.dead) return;
    if (++S.steps > 300000) { S.crash = 'long'; return; }
    yield { b, s };
    switch (b.k) {
      case 'move': stgMove(s, stgVal(S, W, s, b.n)); break;
      case 'turn': s.dir = stgClampDir(s.dir + stgVal(S, W, s, b.n)); break;
      case 'goto': s.x = stgVal(S, W, s, b.x); s.y = stgVal(S, W, s, b.y); break;
      case 'gotorand': s.x = stgVal(S, W, s, { r: 'rnd', a: -220, b: 220 }); s.y = stgVal(S, W, s, { r: 'rnd', a: -160, b: 160 }); break;
      case 'glide': { const T = Math.max(.05, stgVal(S, W, s, b.s)), x0 = s.x, y0 = s.y, x1 = stgVal(S, W, s, b.x), y1 = stgVal(S, W, s, b.y), n = Math.round(T * STG.FPS);
        for (let i = 1; i <= n; i++) { s.x = x0 + (x1 - x0) * i / n; s.y = y0 + (y1 - y0) * i / n; yield { frame: 1 }; if (S.stopped || s.dead) return; } break; }
      case 'setx': s.x = stgVal(S, W, s, b.n); break; case 'sety': s.y = stgVal(S, W, s, b.n); break;
      case 'chx': s.x += stgVal(S, W, s, b.n); break; case 'chy': s.y += stgVal(S, W, s, b.n); break;
      case 'point': s.dir = stgClampDir(stgVal(S, W, s, b.n)); break;
      case 'pointto': { const o = b.t === 'mouse' ? { x: S.mx, y: S.my } : stgFind(S, b.t); if (o) s.dir = stgClampDir(Math.atan2(o.x - s.x, o.y - s.y) * 180 / Math.PI); break; }
      case 'bounce': stgBounce(s); break;
      case 'say': case 'think': { const txt = typeof b.t === 'object' ? String(stgVal(S, W, s, b.t)) : b.t; stgSay(S, s, txt, b.k === 'think');
        if (b.s) { const until = S.t + stgVal(S, W, s, b.s); while (S.t < until - 1e-9) { yield { frame: 1 }; if (S.stopped || s.dead) return; } if (s.say === txt) s.say = null; } break; }
      case 'costume': { const c = Math.max(0, Math.min(s.ncost - 1, stgVal(S, W, s, b.n) - 1)); if (c !== s.c) s.costumeChanges++; s.c = c; break; }
      case 'next': s.c = (s.c + 1) % s.ncost; s.costumeChanges++; break;
      case 'size': s.size = Math.max(5, stgVal(S, W, s, b.n)); break; case 'chsize': s.size = Math.max(5, s.size + stgVal(S, W, s, b.n)); break;
      case 'show': s.hidden = false; break; case 'hide': s.hidden = true; break;
      case 'ghost': s.ghost = Math.max(0, Math.min(100, stgVal(S, W, s, b.n))); break;
      case 'front': s.z = Math.max(...S.sprites.map(o => o.z)) + 1; break;
      case 'wait': { const until = S.t + stgVal(S, W, s, b.s); do { yield { frame: 1 }; if (S.stopped || s.dead) return; } while (S.t < until - 1e-9); break; }
      case 'rep': { const n = stgVal(S, W, s, b.n); for (let i = 0; i < n; i++) { yield* stgRun(S, W, s, b.b); if (S.stopped || s.dead) return; yield { frame: 1 }; } break; }
      case 'forever': for (;;) { yield* stgRun(S, W, s, b.b); if (S.stopped || s.dead) return; yield { frame: 1 }; }
      case 'until': while (!stgCond(S, W, s, b.c)) { yield* stgRun(S, W, s, b.b); if (S.stopped || s.dead) return; yield { frame: 1 }; } break;
      case 'waitu': while (!stgCond(S, W, s, b.c)) { yield { frame: 1 }; if (S.stopped || s.dead) return; } break;
      case 'if': yield* stgRun(S, W, s, stgCond(S, W, s, b.c) ? b.b : b.e); break;
      case 'stop': if (b.w === 'this') return; S.stopped = true; S.log.push({ t: S.t, k: 'stop' }); return;
      case 'send': stgSend(S, W, b.m); break;
      case 'clone': stgClone(S, W, s); break;
      case 'delclone': if (s.clone) { s.dead = true; return; } break;
      case 'setv': S.vars[b.v] = stgVal(S, W, s, b.n); break;
      case 'chv': S.vars[b.v] = (S.vars[b.v] ?? 0) + stgVal(S, W, s, b.n); break;
      case 'sound': S.sound = { n: b.n, t: S.t }; S.log.push({ t: S.t, k: 'sound', n: b.n }); break;
      case 'bg': if (S.bg !== b.n) { S.bg = b.n; S.bgChanges++; S.log.push({ t: S.t, k: 'bg', n: b.n }); stgEvent(S, W, 'bg:' + b.n); } break;
      case 'nextbg': { const l = W.bgs || [W.bg]; S.bg = l[(l.indexOf(S.bg) + 1) % l.length]; S.bgChanges++; stgEvent(S, W, 'bg:' + S.bg); break; }
      case 'timer0': S.timer0 = S.t; break;
    }
  }
}
// llançar els guions d'un esdeveniment (a tots els personatges que en tinguin)
function stgEvent(S, W, ev, only) {
  for (const s of S.sprites.slice()) { if (s.dead || (only && s !== only)) continue; const P = S.progs[s.id] || {};
    for (const [i, scr] of (P[ev] || []).entries()) { const key = s.uid + ':' + ev + ':' + i; S.threads = S.threads.filter(t => t.key !== key || t.done); S.threads.push({ key, s, gen: stgRun(S, W, s, scr), done: false, wake: 0 }); } }
}
function stgSend(S, W, m) { S.msgs.push({ m, t: S.t }); S.log.push({ t: S.t, k: 'send', m }); stgEvent(S, W, 'msg:' + m); }
function stgClone(S, W, s) {
  if (S.sprites.filter(o => o.clone && !o.dead).length >= 40) return;
  const c = { ...s, clone: true, z: s.z + .01, say: null, uid: 'c' + (++S.uidN) }; S.sprites.push(c); S.clones++; S.log.push({ t: S.t, k: 'clone', id: s.id });
  const P = S.progs[s.id] || {}; for (const [i, scr] of (P.clone || []).entries()) S.threads.push({ key: c.uid + ':clone:' + i, s: c, gen: stgRun(S, W, c, scr), done: false });
}
// la màquina: comença amb la bandera; cada fotograma avança tots els fils fins que esperen
function stgMachine(W, progs) {
  const S = stgSim(W, progs); S.rng = 12345; S.uidN = 0; S.sprites.forEach((s, i) => s.uid = 's' + i);
  const M = { W, S };
  M.flag = () => { stgEvent(S, W, 'flag'); };
  M.key = (k, down = true) => { if (down) { if (!S.keys[k]) { S.keys[k] = true; S.keyT = S.keyT || {}; S.keyT[k] = S.t; stgEvent(S, W, 'key:' + k); stgEvent(S, W, 'key:any'); } } else S.keys[k] = false; };
  M.click = id => { const s = S.sprites.filter(o => (o.id === id || o.uid === id) && !o.hidden && !o.dead).sort((a, b) => b.z - a.z)[0]; if (s) { S.log.push({ t: S.t, k: 'click', id: s.id }); stgEvent(S, W, 'click', s); } };
  M.tick = () => {
    // entrades programades (proves): tecles mantingudes i tocs
    for (const i of W.input) { if (i.key) { const on = S.t >= i.t - 1e-9 && S.t < i.t + (i.dur || .1) - 1e-9; if (on && !S.keys[i.key]) M.key(i.key, true); else if (!on && S.keys[i.key] && S.t >= i.t + (i.dur || .1) - 1e-9 && !i.off) { i.off = true; M.key(i.key, false); } }
      if (i.click && !i.done && S.t >= i.t - 1e-9) { i.done = true; M.click(i.click); } if (i.mouse && S.t >= i.t - 1e-9) { S.mx = i.mouse[0]; S.my = i.mouse[1]; } }
    // tecles mantingudes: l'esdeveniment es repeteix (com al teclat de l'ordinador)
    for (const [k, on] of Object.entries(S.keys)) if (on && S.t - S.keyT[k] > .45 && Math.round((S.t - S.keyT[k]) * STG.FPS) % 3 === 0) { stgEvent(S, W, 'key:' + k); }
    for (const th of S.threads.slice()) {
      if (th.done || S.stopped) continue;
      let guard = 0;
      for (;;) { const r = th.gen.next(); if (r.done) { th.done = true; break; } if (r.value.b) th.cur = r.value.b; if (r.value.frame) break; if (++guard > 5000) { S.crash = 'busy'; th.done = true; break; } }
    }
    S.threads = S.threads.filter(t => !t.done);
    for (const s of S.sprites) { s.path += Math.hypot(s.x - s.lastX, s.y - s.lastY); s.lastX = s.x; s.lastY = s.y; }
    // xocs entre personatges (per a les comprovacions «touched»)
    for (const a of S.sprites) for (const b of S.sprites) if (a !== b && a.id !== b.id && !a.hidden && !b.hidden && !a.dead && !b.dead && Math.hypot(a.x - b.x, a.y - b.y) < (stgR(a) + stgR(b)) * .78) S.touched.add(a.id + '>' + b.id);
    S.t += 1 / STG.FPS; S.f++;
  };
  M.idle = () => !S.threads.length;
  return M;
}
/* ---------- Comprovar el repte ----------
   goal: [{ k: 'said', s, t? } (ha dit alguna cosa, o aquest text) · { k: 'at', s, r: [x1, y1, x2, y2] } (acaba dins el rectangle)
     { k: 'reach', s, r } (hi passa) · { k: 'moved', s, min } · { k: 'dx', s, min } / { k: 'dy', s, min } (s'ha mogut en x / y) · { k: 'costumes', s, min } · { k: 'costume', s, n } (acaba amb el vestit n, des de 1)
     { k: 'touched', a, b } · { k: 'notouch', a, b } · { k: 'var', v, eq?, min?, max? } · { k: 'bg', n } · { k: 'bgs', min } · { k: 'clones', min }
     { k: 'msg', m } · { k: 'hidden', s } · { k: 'shown', s } · { k: 'size', s, min?, max? } · { k: 'dir', s, d } · { k: 'turned', s } · { k: 'sound', n? }
     { k: 'stopped' } (el programa s'atura sol) · { k: 'running', t } (encara funciona al segon t) · { k: 'clicked', s } ] */
function stgEval(W, S, M0) {
  const bad = [], sp = id => S.sprites.find(s => s.id === id && !s.clone) || {};
  for (const g of W.goal) {
    const s = sp(g.s), st0 = W.sprites.find(d => d.id === g.s) || {};
    const inR = (x, y, r) => x >= Math.min(r[0], r[2]) && x <= Math.max(r[0], r[2]) && y >= Math.min(r[1], r[3]) && y <= Math.max(r[1], r[3]);
    switch (g.k) {
      case 'said': if (!S.said.some(x => (!g.s || x.id === g.s) && (!g.t || x.t.toLowerCase().includes(String(g.t).toLowerCase())))) bad.push(g); break;
      case 'at': if (!inR(s.x, s.y, g.r)) bad.push(g); break;
      case 'reach': if (!S.reach || !S.reach.has(W.goal.indexOf(g))) bad.push(g); break;
      case 'moved': if ((s.path || 0) < g.min) bad.push(g); break;
      case 'dx': if ((g.min >= 0 ? s.x - (st0.x || 0) : (st0.x || 0) - s.x) < Math.abs(g.min)) bad.push(g); break;
      case 'dy': if ((g.min >= 0 ? s.y - (st0.y || 0) : (st0.y || 0) - s.y) < Math.abs(g.min)) bad.push(g); break;
      case 'costumes': if ((s.costumeChanges || 0) < g.min) bad.push(g); break;
      case 'costume': if (s.c + 1 !== g.n) bad.push(g); break;   // acaba amb el vestit número n (des de 1)
      case 'touched': if (![...S.touched].some(x => x === g.a + '>' + g.b || x === g.b + '>' + g.a)) bad.push(g); break;
      case 'notouch': if ([...S.touched].some(x => x === g.a + '>' + g.b || x === g.b + '>' + g.a)) bad.push(g); break;
      case 'var': { const v = S.vars[g.v] ?? 0; if ((g.eq !== undefined && v !== g.eq) || (g.min !== undefined && v < g.min) || (g.max !== undefined && v > g.max)) bad.push(g); break; }
      case 'bg': if (S.bg !== g.n) bad.push(g); break;
      case 'bgs': if (S.bgChanges < g.min) bad.push(g); break;
      case 'clones': if (S.clones < g.min) bad.push(g); break;
      case 'msg': if (!S.msgs.some(x => x.m === g.m)) bad.push(g); break;
      case 'hidden': if (!s.hidden) bad.push(g); break;
      case 'shown': if (s.hidden) bad.push(g); break;
      case 'size': if ((g.min !== undefined && s.size < g.min) || (g.max !== undefined && s.size > g.max)) bad.push(g); break;
      case 'dir': if (Math.abs(stgClampDir(s.dir - g.d)) > 1) bad.push(g); break;
      case 'turned': if (Math.abs(stgClampDir(s.dir - (st0.dir ?? 90))) < 1) bad.push(g); break;
      case 'sound': if (!S.log.some(l => l.k === 'sound' && (!g.n || l.n === g.n))) bad.push(g); break;
      case 'stopped': if (!S.stopped && S.threads.length) bad.push(g); break;
      case 'running': if (S.stopped || S.t < g.t || (S.idleT !== undefined && S.idleT <= g.t)) bad.push(g); break;
      case 'clicked': if (!S.log.some(l => l.k === 'click' && l.id === g.s)) bad.push(g); break;
    }
  }
  return bad;
}
function stgTrack(W, S) {
  if (S.threads && !S.threads.length) { if (S.idleT === undefined) S.idleT = S.t; } else S.idleT = undefined;   // des de quan no fa res (per a { k: 'running' })
  for (const [i, g] of W.goal.entries()) if (g.k === 'reach') { const s = S.sprites.find(x => x.id === g.s && !x.clone); if (s && s.x >= Math.min(g.r[0], g.r[2]) && s.x <= Math.max(g.r[0], g.r[2]) && s.y >= Math.min(g.r[1], g.r[3]) && s.y <= Math.max(g.r[1], g.r[3])) (S.reach = S.reach || new Set()).add(i); } }
// els guions que ja hi són (spec.prog i el prog de cada personatge) + els de l'alumne (per als personatges que programa)
function stgProgs(spec, mine) {
  const P = {}; const add = src => { if (!src) return; const q = SQ(src); for (const [id, H] of Object.entries(q)) { P[id] = P[id] || {}; for (const [h, scr] of Object.entries(H)) P[id][h] = (P[id][h] || []).concat(scr); } };
  add(spec.prog); (spec.sprites || []).forEach(d => add(d.prog));
  for (const [id, H] of Object.entries(mine || {})) P[id] = { ...(P[id] || {}), ...JSON.parse(JSON.stringify(H)) };
  return P;
}
function stgHeadless(spec, mine) {
  const W = stgWorld(spec), M = stgMachine(W, stgProgs(spec, mine)); M.flag();
  const N = Math.round(W.time * STG.FPS);
  for (let i = 0; i < N && !M.S.crash; i++) { M.tick(); stgTrack(W, M.S); if (M.S.stopped && !W.goal.some(g => g.k === 'running')) break; if (M.idle() && !W.input.some(x => x.t + (x.dur || 0) + .05 >= M.S.t)) { if (M.S.idleT === undefined) M.S.idleT = M.S.t; break; } }
  return { S: M.S, W, bad: M.S.crash ? [{ k: 'crash' }] : stgEval(W, M.S) };
}
function stgAlts(spec) { return spec.alts && spec.alts.length ? [spec, ...spec.alts.map(a => ({ ...spec, ...a, alts: null }))] : [spec]; }
function stgSolves(spec, progs) { for (const [i, sp] of stgAlts(spec).entries()) { const r = stgHeadless(sp, progs); if (r.bad.length) return { i, bad: r.bad, S: r.S }; } return null; }

/* ---------- Programes en text ----------
   SQ('@peix flag{ forever{ move:5 bounce } } click{ say:"Hola!|¡Hola!",2 } @gat key:space{ chy:20 }')
   operands: números · $punts (variable) · x y dir size costume timer mx my · rnd:1:10
   condicions: touch:edge touch:gat touch:mouse color:red key:space $punts>=10 x>200 … · amb && o || · !cond (no)
   un «!» darrere d'un bloc (fora de cometes) el marca per a «Investiga» */
function stgOp(t) { if (/^-?\d+(\.\d+)?$/.test(t)) return +t; if (t[0] === '$') return { r: 'var', v: t.slice(1) }; if (['x', 'y', 'dir', 'size', 'costume', 'timer', 'mx', 'my'].includes(t)) return { r: t }; const m = t.match(/^rnd:(-?[\w$.]+):(-?[\w$.]+)$/); if (m) return { r: 'rnd', a: stgOp(m[1]), b: stgOp(m[2]) }; throw new Error('SQ: operand «' + t + '»'); }
function stgCondP(t) {
  if (t.includes('&&')) { const [a, ...b] = t.split('&&'); return { and: [stgCondP(a), stgCondP(b.join('&&'))] }; }
  if (t.includes('||')) { const [a, ...b] = t.split('||'); return { or: [stgCondP(a), stgCondP(b.join('||'))] }; }
  if (t[0] === '!' && t[1] !== '=') return { not: stgCondP(t.slice(1)) };
  const k = t.match(/^(touch|color|key):(.+)$/); if (k) return { [k[1]]: k[2] };
  const m = t.match(/^(.+?)(<=|>=|!=|<|>|=)(.+)$/); if (!m) throw new Error('SQ: condició «' + t + '»');
  return { a: stgOp(m[1]), op: { '<=': '≤', '>=': '≥', '!=': '≠' }[m[2]] || m[2], b: stgOp(m[3]) };
}
const stgStr = t => t && t[0] === '"' ? t.slice(1, -1) : t;
function SQ(src) {
  if (typeof src === 'object') return JSON.parse(JSON.stringify(src));
  const tok = String(src).match(/(?:[^\s{}"]+|"[^"]*")+|[{}]/g) || []; let i = 0;
  const body = () => { if (tok[i] !== '{') throw new Error('SQ: falta «{» a ' + tok[i - 1]); i++; const l = list(); if (tok[i] !== '}') throw new Error('SQ: falta «}»'); i++; return l; };
  const args = a => { const out = []; let cur = '', q = false; for (const ch of a) { if (ch === '"') q = !q; if (ch === ',' && !q) { out.push(cur); cur = ''; } else cur += ch; } out.push(cur); return out; };
  const list = () => { const out = [];
    while (i < tok.length && tok[i] !== '}') {
      let t = tok[i++]; let x = false; if (t.endsWith('!') && !t.endsWith('"!') && !/[<>=]!$/.test(t)) { x = true; t = t.slice(0, -1); }
      const j = t.indexOf(':'), k = j < 0 ? t : t.slice(0, j), a = j < 0 ? [] : args(t.slice(j + 1)); let b;
      switch (k) {
        case 'move': case 'setx': case 'sety': case 'chx': case 'chy': case 'point': case 'size': case 'chsize': case 'ghost': case 'costume': b = { k, n: stgOp(a[0] || '10') }; break;
        case 'turn': b = { k, n: stgOp(a[0] || '15') }; break;
        case 'goto': b = { k, x: stgOp(a[0] || '0'), y: stgOp(a[1] || '0') }; break;
        case 'glide': b = { k, s: stgOp(a[0] || '1'), x: stgOp(a[1] || '0'), y: stgOp(a[2] || '0') }; break;
        case 'pointto': b = { k, t: a[0] || 'mouse' }; break;
        case 'say': case 'think': b = { k, t: a[0] && a[0][0] === '$' ? stgOp(a[0]) : stgStr(a[0] || '"Hola!|¡Hola!"'), ...(a[1] ? { s: stgOp(a[1]) } : {}) }; break;
        case 'wait': b = { k, s: stgOp(a[0] || '1') }; break;
        case 'rep': b = { k, n: stgOp(a[0] || '10'), b: body() }; break;
        case 'forever': b = { k, b: body() }; break;
        case 'until': b = { k, c: stgCondP(t.slice(j + 1)), b: body() }; break;
        case 'waitu': b = { k, c: stgCondP(t.slice(j + 1)) }; break;
        case 'if': b = { k, c: stgCondP(t.slice(j + 1)), b: body(), e: null }; if (tok[i] === 'else') { i++; b.e = body(); } break;
        case 'stop': b = { k, w: a[0] || 'all' }; break;
        case 'send': b = { k, m: a[0] }; break;
        case 'setv': case 'chv': b = { k, v: a[0], n: stgOp(a[1] || (k === 'chv' ? '1' : '0')) }; break;
        case 'sound': b = { k, n: a[0] || 'pop' }; break;
        case 'bg': b = { k, n: a[0] }; break;
        case 'gotorand': case 'bounce': case 'next': case 'show': case 'hide': case 'front': case 'clone': case 'delclone': case 'nextbg': case 'timer0': b = { k }; break;
        default: throw new Error('SQ: bloc desconegut «' + t + '»');
      }
      if (x) b.mk = 1; out.push(b); }   // marca «!» del pas sspot (no x: goto i glide ja fan servir b.x)
    return out; };
  const P = {}; let cur = null;
  while (i < tok.length) {
    const t = tok[i];
    if (t[0] === '@') { cur = t.slice(1); P[cur] = P[cur] || {}; i++; continue; }
    if (!cur) throw new Error('SQ: cal començar amb @personatge');
    if (/^(flag|click|clone|key:[\w]+|msg:[\p{L}\p{N}_-]+|bg:[\w-]+)$/u.test(t) && tok[i + 1] === '{') { i++; (P[cur][t] = P[cur][t] || []).push(body()); continue; }
    throw new Error('SQ: s\'esperava un guió (flag{ … }) i hi ha «' + t + '»');
  }
  return P;
}

/* =====================================================================================================================
   Interfície: l'escenari (fons + personatges com a SVG), la bandera verda, les tecles a la pantalla i l'editor de blocs
   ===================================================================================================================== */
const SG_CAT = { move: 'mov', turn: 'mov', goto: 'mov', gotorand: 'mov', glide: 'mov', setx: 'mov', sety: 'mov', chx: 'mov', chy: 'mov', point: 'mov', pointto: 'mov', bounce: 'mov',
  say: 'art', think: 'art', costume: 'art', next: 'art', size: 'art', chsize: 'art', show: 'art', hide: 'art', ghost: 'art', front: 'art', bg: 'art', nextbg: 'art',
  sound: 'snd', send: 'cond', wait: 'loop', rep: 'loop', forever: 'loop', until: 'loop', waitu: 'loop', stop: 'loop', clone: 'loop', delclone: 'loop', if: 'cond', setv: 'var', chv: 'var', timer0: 'var' };
const SG_ICO = {
  mov: BIT_ICO.fwd, turn: BIT_ICO.right, loop: BIT_ICO.rep, cond: BIT_ICO.if, var: BIT_ICO.setv, snd: BIT_ICO.note,
  art: '<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5" fill="currentColor"/><path d="M4 21c1-5 4-7 8-7s7 2 8 7z" fill="currentColor"/></svg>',
  say: '<svg viewBox="0 0 24 24"><path d="M4 4h16v11H9l-5 5z" fill="currentColor"/></svg>', send: '<svg viewBox="0 0 24 24"><path d="M3 11l18-8-6 18-3-7z" fill="currentColor"/></svg>',
  flag: '<svg viewBox="0 0 24 24"><path d="M5 21V3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M6 4c4-2 7 2 13 0v9c-6 2-9-2-13 0z" fill="currentColor"/></svg>',
  clone: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="12" height="12" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="9" y="3" width="12" height="12" rx="3" fill="currentColor"/></svg>'
};
const sgIco = k => SG_ICO[k] || SG_ICO[SG_CAT[k]] || SG_ICO.mov;
const SG_HAT = h => h === 'flag' ? L('Quan comença (bandera verda)', 'Al empezar (bandera verde)') : h === 'click' ? L('Quan toco aquest personatge', 'Al tocar este personaje') : h === 'clone' ? L('Quan començo com a clon', 'Al empezar como clon')
  : h.startsWith('key:') ? L(`Quan premo la tecla ${sgKeyN(h.slice(4))}`, `Al pulsar la tecla ${sgKeyN(h.slice(4))}`) : h.startsWith('msg:') ? L(`Quan rebo el missatge «${h.slice(4)}»`, `Al recibir el mensaje «${h.slice(4)}»`) : h.startsWith('bg:') ? L(`Quan el fons canvia a ${sgBgN(h.slice(3))}`, `Al cambiar el fondo a ${sgBgN(h.slice(3))}`) : h;
const SG_KEYS = { left: ['← fletxa esquerra', '← flecha izquierda'], right: ['→ fletxa dreta', '→ flecha derecha'], up: ['↑ fletxa amunt', '↑ flecha arriba'], down: ['↓ fletxa avall', '↓ flecha abajo'], space: ['espai', 'espacio'], a: ['A', 'A'], b: ['B', 'B'], any: ['qualsevol', 'cualquiera'] };
const sgKeyN = k => tx((SG_KEYS[k] || [k, k]).join('|'));
const sgBgN = b => STG_BG[b] ? tx(STG_BG[b].name) : b;
const SG_OPN = { x: ['posició x', 'posición x'], y: ['posició y', 'posición y'], dir: ['direcció', 'dirección'], size: ['mida', 'tamaño'], costume: ['número de vestit', 'número de disfraz'], timer: ['cronòmetre', 'cronómetro'], mx: ['x del ratolí', 'x del ratón'], my: ['y del ratolí', 'y del ratón'] };
const sgOpTxt = (v, st) => typeof v === 'number' ? String(v) : !v ? '0' : v.r === 'var' ? (st && st.varNames && st.varNames[v.v] ? tx(st.varNames[v.v]) : v.v) : v.r === 'rnd' ? L(`atzar ${sgOpTxt(v.a)}-${sgOpTxt(v.b)}`, `azar ${sgOpTxt(v.a)}-${sgOpTxt(v.b)}`) : tx(SG_OPN[v.r].join('|'));
const sgWho = (id, W) => id === 'edge' ? L('la vora', 'el borde') : id === 'mouse' ? L('el ratolí / el dit', 'el ratón / el dedo') : (() => { const d = (W || SG && SG.W || { sprites: [] }).sprites.find(s => s.id === id); return d ? tx(d.name || STG_ART[d.art].name) : id; })();
const SG_CN = { red: ['vermell', 'rojo'], green: ['verd', 'verde'], blue: ['blau', 'azul'], yellow: ['groc', 'amarillo'], grey: ['gris', 'gris'] };
function sgCondTxt(c, f, p, st) {
  if (c.and || c.or) return `${sgCondTxt((c.and || c.or)[0], f, p + (c.and ? '.and.0' : '.or.0'), st)} ${f(p + '.join', c.and ? L('i', 'y') : L('o', 'o'))} ${sgCondTxt((c.and || c.or)[1], f, p + (c.and ? '.and.1' : '.or.1'), st)}`;
  if (c.not) return `${L('no', 'no')} ${sgCondTxt(c.not, f, p + '.not', st)}`;
  if (c.touch) return `${L('toca', 'toca')} ${f(p + '.touch', sgWho(c.touch))}`;
  if (c.color) return `${L('toca el color', 'toca el color')} ${f(p + '.color', `<i class="rdot" style="background:${{ red: '#EF5A5A', green: '#3CC47C', blue: '#3D7BF4', yellow: '#FFC531', grey: '#A9B0C0' }[c.color]}"></i>${tx(SG_CN[c.color].join('|'))}`)}`;
  if (c.key) return `${L('tecla', 'tecla')} ${f(p + '.key', sgKeyN(c.key))} ${L('premuda', 'pulsada')}`;
  return `${f(p + '.a', sgOpTxt(c.a, st))} ${f(p + '.op', c.op)} ${f(p + '.b', sgOpTxt(c.b, st))}`;
}
function sgLabel(b, f = (p, t) => `<b>${t}</b>`, st) {
  const n = k => f(k, sgOpTxt(b[k], st));
  switch (b.k) {
    case 'move': return `${L('mou-te', 'muévete')} ${n('n')} ${L('passos', 'pasos')}`;
    case 'turn': return `${L('gira', 'gira')} ${n('n')} ${L('graus', 'grados')}`;
    case 'goto': return `${L('ves a', 've a')} x: ${n('x')} y: ${n('y')}`;
    case 'gotorand': return L('ves a un lloc a l\'atzar', 've a un sitio al azar');
    case 'glide': return `${L('llisca en', 'desliza en')} ${n('s')} s ${L('fins a', 'hasta')} x: ${n('x')} y: ${n('y')}`;
    case 'setx': return `${L('posa x a', 'pon x a')} ${n('n')}`; case 'sety': return `${L('posa y a', 'pon y a')} ${n('n')}`;
    case 'chx': return `${L('canvia x en', 'cambia x en')} ${n('n')}`; case 'chy': return `${L('canvia y en', 'cambia y en')} ${n('n')}`;
    case 'point': return `${L('apunta en direcció', 'apunta en dirección')} ${n('n')}`;
    case 'pointto': return `${L('apunta cap a', 'apunta hacia')} ${f('t', sgWho(b.t))}`;
    case 'bounce': return L('si toques la vora, rebota', 'si tocas el borde, rebota');
    case 'say': case 'think': return `${b.k === 'say' ? L('digues', 'di') : L('pensa', 'piensa')} ${f('t', typeof b.t === 'object' ? sgOpTxt(b.t, st) : esc(tx(b.t)))}${b.s ? ` ${L('durant', 'durante')} ${n('s')} s` : ''}`;
    case 'costume': return `${L('posa el vestit', 'pon el disfraz')} ${n('n')}`; case 'next': return L('vestit següent', 'disfraz siguiente');
    case 'size': return `${L('mida', 'tamaño')} ${n('n')} %`; case 'chsize': return `${L('canvia la mida en', 'cambia el tamaño en')} ${n('n')}`;
    case 'show': return L('mostra\'t', 'muéstrate'); case 'hide': return L('amaga\'t', 'escóndete');
    case 'ghost': return `${L('transparència', 'transparencia')} ${n('n')} %`; case 'front': return L('ves al davant de tot', 've delante de todo');
    case 'bg': return `${L('canvia el fons a', 'cambia el fondo a')} ${f('n', sgBgN(b.n))}`; case 'nextbg': return L('fons següent', 'fondo siguiente');
    case 'sound': return `${L('fes el so', 'haz el sonido')} ${f('n', tx(STG_SND_N[b.n].join('|')))}`;
    case 'send': return `${L('envia el missatge', 'envía el mensaje')} ${f('m', esc(b.m))}`;
    case 'wait': return `${L('espera', 'espera')} ${n('s')} ${L('segons', 'segundos')}`;
    case 'rep': return `${L('repeteix', 'repite')} ${n('n')} ${L('vegades', 'veces')}`; case 'forever': return L('per sempre', 'por siempre');
    case 'until': return `${L('repeteix fins que', 'repite hasta que')} ${sgCondTxt(b.c, f, 'c', st)}`;
    case 'waitu': return `${L('espera fins que', 'espera hasta que')} ${sgCondTxt(b.c, f, 'c', st)}`;
    case 'if': return `${L('si', 'si')} ${sgCondTxt(b.c, f, 'c', st)}`;
    case 'stop': return `${L('atura', 'para')} ${f('w', b.w === 'this' ? L('aquest guió', 'este guion') : L('tot', 'todo'))}`;
    case 'clone': return L('crea un clon de mi', 'crea un clon de mí'); case 'delclone': return L('esborra aquest clon', 'borra este clon');
    case 'setv': return `${L('posa', 'pon')} ${f('v', sgOpTxt({ r: 'var', v: b.v }, st))} ${L('a', 'a')} ${n('n')}`;
    case 'chv': return `${L('suma a', 'suma a')} ${f('v', sgOpTxt({ r: 'var', v: b.v }, st))} ${n('n')}`;
    case 'timer0': return L('posa el cronòmetre a zero', 'pon el cronómetro a cero');
  }
  return b.k;
}
const sgNew = (k, st, W) => {
  const v0 = (W && W.vars && W.vars[0]) || 'punts', other = (W && W.sprites || []).map(s => s.id).find(id => !(st.edit || []).includes(id)) || 'edge';
  return { move: { k, n: 10 }, turn: { k, n: 15 }, goto: { k, x: 0, y: 0 }, gotorand: { k }, glide: { k, s: 1, x: 0, y: 0 }, setx: { k, n: 0 }, sety: { k, n: 0 }, chx: { k, n: 10 }, chy: { k, n: 10 }, point: { k, n: 90 }, pointto: { k, t: 'mouse' }, bounce: { k },
    say: { k, t: (st.texts && st.texts[0]) || 'Hola!|¡Hola!', s: 2 }, think: { k, t: (st.texts && st.texts[0]) || 'Mmm…|Mmm…', s: 2 }, costume: { k, n: 1 }, next: { k }, size: { k, n: 100 }, chsize: { k, n: 10 }, show: { k }, hide: { k }, ghost: { k, n: 50 }, front: { k },
    bg: { k, n: (W && W.bgs && W.bgs[0]) || (W && W.bg) || 'bosc' }, nextbg: { k }, sound: { k, n: 'pop' }, send: { k, m: (st.msgs && st.msgs[0]) || 'comença' }, wait: { k, s: 1 }, rep: { k, n: 10, b: [] }, forever: { k, b: [] },
    until: { k, c: { touch: 'edge' }, b: [] }, waitu: { k, c: { touch: other } }, if: { k, c: { touch: other }, b: [], e: null }, stop: { k, w: 'all' }, clone: { k }, delclone: { k }, setv: { k, v: v0, n: 0 }, chv: { k, v: v0, n: 1 }, timer0: { k } }[k];
};
const sgCount = l => (l || []).reduce((n, b) => n + 1 + sgCount(b.b) + sgCount(b.e), 0);

/* ---------- Estat (SG) ---------- */
let SG = null, SG_ID = 0, SG_RAF = null;
function sgMake(st, o = {}) {
  const spec = st.w, alts = stgAlts(spec), W = stgWorld(alts[0]);
  const edit = st.edit || spec.edit || [W.sprites[0].id];
  const progs = stgProgs(spec, o.prog || st.prog ? SQ(o.prog || st.prog) : {}); for (const d of W.sprites) progs[d.id] = progs[d.id] || {};
  // cada personatge editable té les seves capçaleres (una llista de blocs per capçalera)
  const hats = st.hats || ['flag'];
  const hatsOf = id => (st.hatsBy && st.hatsBy[id]) || hats;   // capçaleres per personatge (opcional: hatsBy)
  for (const id of edit) { for (const h of hatsOf(id)) progs[id][h] = progs[id][h] && progs[id][h].length ? progs[id][h] : [[]]; }
  SG = { st, spec, alts, altI: 0, altOk: new Set(), W, progs, edit, hats, hatsOf, sel: null, cur: null, who: edit[0] || (W.sprites.find(d => progs[d.id] && Object.keys(progs[d.id]).length) || W.sprites[0] || {}).id, pal: st.pal || ['move', 'turn', 'wait'], mode: o.mode || 'edit', run: false, solved: false, tries: 0, max: st.max || 0, lists: [], ids: {} };
  SG.M = stgMachine(W, progs);
  { const P = progs[SG.who] || {}, sc = P[hats[0]] || Object.values(P)[0]; SG.cur = sc && sc[0] ? { l: sc[0], i: sc[0].length } : null; }
  return SG;
}
const sgUsed = () => SG.edit.reduce((n, id) => n + Object.values(SG.progs[id]).reduce((a, scr) => a + scr.reduce((b, l) => b + sgCount(l), 0), 0), 0);
function sgIndex() { SG.lists = []; SG.ids = {}; const walk = l => { SG.lists.push(l); for (const b of l) { if (!b._id) b._id = ++SG_ID; SG.ids[b._id] = { b, list: l }; if (Array.isArray(b.b)) walk(b.b); if (b.e) walk(b.e); } }; Object.values(SG.progs[SG.who]).forEach(scr => scr.forEach(walk)); }
const sgLid = l => SG.lists.indexOf(l);
function sgBlock(b, ro) {
  const cont = ['rep', 'forever', 'until', 'if'].includes(b.k), sel = SG.sel === b;
  const f = ro ? undefined : (p, t) => `<button class="rf" onclick="event.stopPropagation();sgField(${b._id},'${p}')">${t}</button>`;
  return `<div class="tb rb sb c-${SG_CAT[b.k]}${sel ? ' sel' : ''}${cont ? ' cont' : ''}" id="sg${b._id}"><div class="tbh" ${ro ? '' : `onclick="sgSel(${b._id})"`}><span class="tbi">${sgIco(b.k)}</span><span class="tbl">${sgLabel(b, f, SG.st)}</span></div>
    ${cont ? `<div class="tbin">${sgList(b.b, ro)}</div>${b.k === 'if' && b.e ? `<div class="tbelse">${L('si no', 'si no')}</div><div class="tbin">${sgList(b.e, ro)}</div>` : ''}<div class="tbend"></div>` : ''}</div>${sel && !ro ? sgTools(b) : ''}`;
}
function sgSlot(l, i) { const on = SG.cur && SG.cur.l === l && SG.cur.i === i; return `<button class="tslot${on ? ' on' : ''}" onclick="sgCurAt(${sgLid(l)},${i})">${on ? `<span>${L('els blocs nous van aquí', 'los bloques nuevos van aquí')}</span>` : ''}</button>`; }
function sgList(list, ro) { if (ro) return list.map(b => sgBlock(b, true)).join(''); return list.map((b, i) => sgSlot(list, i) + sgBlock(b)).join('') + sgSlot(list, list.length); }
function sgTools(b) {
  const ix = SG.ids[b._id], i = ix.list.indexOf(b);
  return `<div class="tbtools"><button onclick="sgMoveB(-1)" ${i === 0 ? 'disabled' : ''}>↑</button><button onclick="sgMoveB(1)" ${i === ix.list.length - 1 ? 'disabled' : ''}>↓</button>
    ${b.k === 'if' && SG.pal.includes('else') ? `<button class="wide" onclick="sgElse()">${b.e ? L('Treu «si no»', 'Quita «si no»') : L('Afegeix «si no»', 'Añade «si no»')}</button>` : ''}
    ${['if', 'until', 'waitu'].includes(b.k) && SG.pal.includes('and') ? `<button class="wide" onclick="sgJoin()">${b.c.and || b.c.or ? L('Una sola condició', 'Una sola condición') : L('Afegeix «i / o»', 'Añade «y / o»')}</button>` : ''}
    <button class="del" onclick="sgDel()">${L('Esborra', 'Borra')}</button></div>`;
}
function sgPalette() {
  const full = SG.max && sgUsed() >= SG.max;
  return `<div class="tpal rpal spal">${SG.pal.filter(k => !['else', 'and', 'cond+'].includes(k)).map(k => `<button class="tb rb sb c-${SG_CAT[k]} tpb" onclick="sgIns('${k}')" ${full ? 'disabled' : ''}><span class="tbi">${sgIco(k)}</span><span class="tbl">${sgLabel(sgNew(k, SG.st, SG.W), undefined, SG.st)}</span></button>`).join('')}</div>`;
}
function sgCode() {
  sgIndex();
  const ro = SG.mode !== 'edit', mine = SG.edit.includes(SG.who), P = SG.progs[SG.who] || {};
  const tabs = SG.W.sprites.length > 1 ? `<div class="ssel">${SG.W.sprites.map(d => `<button class="${d.id === SG.who ? 'on' : ''}" onclick="sgWhoSel('${d.id}')"><span class="sthumb">${sgCostume(d.art, d.costume || 0)}</span><b>${esc(tx(d.name || STG_ART[d.art].name))}</b>${SG.edit.includes(d.id) ? '' : `<small>${L('ja programat', 'ya programado')}</small>`}</button>`).join('')}</div>` : '';
  const scripts = Object.entries(P).filter(([h, l]) => mine ? SG.hatsOf(SG.who).includes(h) || l.some(x => x.length) : l.some(x => x.length)).map(([h, scr]) => scr.map(l => `<div class="rscript sh-${h.split(':')[0]}"><div class="rhat"><span>${sgIco(h === 'flag' ? 'flag' : h === 'clone' ? 'clone' : h.startsWith('msg') ? 'send' : 'say')}</span><b>${SG_HAT(h)}</b>${!ro && mine && l === scr[scr.length - 1] ? `<button class="rhadd" onclick="sgAddScr('${h}')" aria-label="${L('Un altre guió com aquest', 'Otro guion como este')}" title="${L('Un altre guió com aquest', 'Otro guion como este')}">+</button>` : ''}</div><div class="tprog rprog">${sgList(l, ro || !mine) || '<p class="tempty">—</p>'}</div></div>`).join('')).join('');
  return `${tabs}<div class="tphead"><b>${L('Guions', 'Guiones')}</b><span class="tphr">${SG.max ? `<span class="tcount ${sgUsed() >= SG.max ? 'full' : ''}">${sgUsed()}/${SG.max} ${L('blocs', 'bloques')}</span>` : `<span class="tcount">${bitN(sgUsed())}</span>`}</span></div>
    <div class="rscripts" id="sprog">${scripts || `<p class="tempty">${L('Aquest personatge no té guions.', 'Este personaje no tiene guiones.')}</p>`}</div>${!ro && mine ? sgPalette() : ''}`;
}
// el dibuix d'un vestit (SVG); els de Numi fan servir els degradats comuns de la pàgina
const SG_CC = {};
function sgCostume(art, c) { const a = STG_ART[art] || STG_ART.estrella, k = art + ':' + c; return SG_CC[k] || (SG_CC[k] = a.svg(c % (a.n || 1))); }
function sgStageHTML() {
  const W = SG.W, keys = W.keys || [];
  const alts = SG.alts.length > 1 ? `<div class="talts">${SG.alts.map((_, i) => `<button class="${i === SG.altI ? 'on' : ''} ${SG.altOk.has(i) ? 'ok' : ''}" onclick="sgAlt(${i})">${SG.altOk.has(i) ? '✓ ' : ''}${L('Prova', 'Prueba')} ${i + 1}</button>`).join('')}</div>` : '';
  return `<div class="tworld sworld" id="sworld">${alts}<div class="sstage" id="sstage"><div class="sbg" id="sbg">${STG_BG[SG.M.S.bg] ? STG_BG[SG.M.S.bg].svg() : ''}</div><div class="ssprites" id="ssp"></div><div class="svars" id="svars"></div>
      <div class="sctl"><button class="sgo" onclick="sgGo()" aria-label="${L('Bandera verda: comença', 'Bandera verde: empieza')}">${SG_ICO.flag}</button><button class="sst" onclick="sgStop()" aria-label="${L('Atura', 'Para')}"><i></i></button></div></div>
    ${keys.length ? `<div class="skeys">${keys.map(k => `<button data-k="${k}" onpointerdown="sgKey('${k}',true)" onpointerup="sgKey('${k}',false)" onpointerleave="sgKey('${k}',false)">${{ left: '←', right: '→', up: '↑', down: '↓', space: L('espai', 'espacio') }[k] || k.toUpperCase()}</button>`).join('')}</div>` : ''}
    <p class="tsay" id="tsay" aria-live="polite"></p>
    <div class="trun"><button class="btn big trgo" id="sggo" onclick="sgGo()">${SG_ICO.flag}${L('Comença', 'Empieza')}</button>${SG.alts.some(a => a.input && a.input.length) && SG.mode === 'edit' ? `<button class="btn ghost" onclick="sgGo(true)">${L('Comprova', 'Comprueba')}</button>` : ''}<button class="btn ghost ico" onclick="sgReset()" aria-label="${L('Torna a començar', 'Vuelve a empezar')}"><svg viewBox="0 0 24 24"><path d="M12 5V2L7 6l5 4V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z" fill="currentColor"/></svg></button></div></div>`;
}
function sgHTML(extra = '') { return `<div class="tstage rstage sstagew m-${SG.mode}">${sgStageHTML()}<div class="tcode">${extra}${sgCode()}</div></div>`; }
function sgDraw() { const c = document.querySelector('.sstagew .tcode'); if (!c) return; const sc = document.getElementById('sprog'), top = sc ? sc.scrollTop : 0; c.innerHTML = (SG.extra || '') + sgCode(); const s2 = document.getElementById('sprog'); if (s2) s2.scrollTop = top; }
function sgSay(t, cls = '') { const e = document.getElementById('tsay'); if (e) { e.className = 'tsay ' + cls; e.innerHTML = t; } }
// dibuixar els personatges al seu lloc (es fa a cada fotograma; el dibuix del vestit només canvia quan canvia el vestit)
function sgRender() {
  const box = document.getElementById('ssp'); if (!box || !SG) return; const S = SG.M.S;
  const bg = document.getElementById('sbg'); if (bg && bg.dataset.b !== S.bg) { bg.dataset.b = S.bg; bg.innerHTML = STG_BG[S.bg] ? STG_BG[S.bg].svg() : ''; }
  const live = new Set();
  for (const s of S.sprites) { if (s.dead) continue; live.add(s.uid);
    let e = box.querySelector(`[data-u="${s.uid}"]`); const a = STG_ART[s.art] || STG_ART.estrella;
    if (!e) { e = document.createElement('div'); e.className = 'ssp'; e.dataset.u = s.uid; e.innerHTML = `<div class="sspi"></div><div class="sbub"></div>`; e.onclick = () => { if (SG && SG.run) SG.M.click(s.uid); }; box.appendChild(e); }
    const im = e.firstChild; if (im.dataset.c !== String(s.c)) { im.dataset.c = s.c; im.innerHTML = sgCostume(s.art, s.c); }
    const rot = s.rot || a.rot || (a.numi || ['gat', 'peix', 'ocell', 'drac', 'cranc', 'mascota', 'bit'].includes(s.art) ? 'lr' : 'all');
    const w = (a.w || 80) * s.size / 100 / STG.W * 100;
    e.style.cssText = `left:${(s.x + STG.W / 2) / STG.W * 100}%;top:${(STG.H / 2 - s.y) / STG.H * 100}%;width:${w}%;z-index:${Math.round(s.z * 10) + 10};opacity:${s.hidden ? 0 : 1 - s.ghost / 100}`;
    im.style.transform = rot === 'all' ? `rotate(${s.dir - (a.face ?? 90)}deg)` : rot === 'lr' && s.dir < 0 ? 'scaleX(-1)' : 'none';
    const bub = e.lastChild, txt = s.say ? esc(tx(s.say)) : ''; if (bub.dataset.t !== txt + s.think) { bub.dataset.t = txt + s.think; bub.innerHTML = txt; bub.className = 'sbub' + (txt ? ' on' : '') + (s.think ? ' th' : ''); } }
  box.querySelectorAll('.ssp').forEach(e => { if (!live.has(e.dataset.u)) e.remove(); });
  const vs = document.getElementById('svars'); if (vs) vs.innerHTML = Object.entries(S.vars).map(([k, v]) => `<span><small>${esc(SG.st.varNames && SG.st.varNames[k] ? tx(SG.st.varNames[k]) : k)}</small><b>${v}</b></span>`).join('');
}
function sgMarkNow() { document.querySelectorAll('.sb.now').forEach(e => e.classList.remove('now')); if (!SG || !SG.run) return; for (const th of SG.M.S.threads) if (th.cur && th.cur._id && th.s.id === SG.who) { const e = document.getElementById('sg' + th.cur._id); if (e) e.classList.add('now'); } }
let SG_AC = null;
function sgSound(n) { if (typeof P !== 'undefined' && P && P.sound === false) return; const d = STG_SND[n]; if (!d) return; try { const ctx = SG_AC = SG_AC || new (window.AudioContext || window.webkitAudioContext)(); if (ctx.state === 'suspended') ctx.resume(); const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain(); o.type = d[2]; o.frequency.setValueAtTime(d[0], t); if (n === 'boing' || n === 'xoc') o.frequency.exponentialRampToValueAtTime(d[0] / 2, t + d[1]); if (n === 'victoria' || n === 'moneda') o.frequency.setValueAtTime(d[0] * 1.5, t + d[1] / 2); o.connect(g); g.connect(ctx.destination); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.08, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + d[1]); o.start(t); o.stop(t + d[1] + .05); } catch (e) { } }
/* ---------- Execució ---------- */
// «Comença»: l'alumne fa servir el teclat i el ratolí; si el repte té proves (input), es judica amb «Comprova» (les tecles es premen soles)
function sgGo(auto) {
  if (!SG) return; if (SG.run) sgStop();
  const spec = SG.alts[SG.altI], hasIn = !!(spec.input && spec.input.length);
  SG.W = stgWorld(hasIn && !auto ? { ...spec, input: [] } : spec); SG.auto = !!auto; SG.judge = !hasIn || !!auto;
  SG.M = stgMachine(SG.W, SG.progs); SG.run = true; SG.tries++; SG.sel = null; sgSay(auto ? L('Comprovant: les tecles es premen soles…', 'Comprobando: las teclas se pulsan solas…') : '');
  const lastSay = {}; let last = performance.now(), acc = 0, fr = 0, snd = null;
  SG.M.flag();
  const step = now => {
    if (!SG || !SG.run) return; acc += Math.min(100, now - last); last = now; const dt = 1000 / STG.FPS; let end = null;
    while (acc >= dt) { acc -= dt; SG.M.tick(); stgTrack(SG.W, SG.M.S); const S = SG.M.S;
      if (S.crash) { end = 'crash'; break; } if (SG.judge && SG.M.S.t >= SG.W.time - 1e-9 && SG.W.goal.length && !SG.free) { end = 'time'; break; } if (S.stopped) { end = 'stop'; break; }
      if (SG.judge && SG.W.goal.length && !SG.free && !SG.W.noEarly && S.t > .5 && !SG.W.goal.some(g => ['running', 'notouch', 'stopped'].includes(g.k)) && !stgEval(SG.W, S).length) { end = 'goal'; break; } }
    const S = SG.M.S; if (S.sound && S.sound !== snd) { snd = S.sound; sgSound(S.sound.n); }
    sgRender(); if (++fr % 4 === 0) sgMarkNow();
    if (end) return sgEnd(end);
    SG_RAF = requestAnimationFrame(step);
  };
  SG_RAF = requestAnimationFrame(step);
  const b = document.getElementById('sggo'); if (b) b.innerHTML = `${SG_ICO.flag}${L('Torna a començar', 'Vuelve a empezar')}`;
}
function sgStop() { if (!SG) return; SG.run = false; cancelAnimationFrame(SG_RAF); document.querySelectorAll('.sb.now').forEach(e => e.classList.remove('now')); const b = document.getElementById('sggo'); if (b) b.innerHTML = `${SG_ICO.flag}${L('Comença', 'Empieza')}`; }
function sgReset() { if (!SG) return; sgStop(); SG.W = stgWorld(SG.alts[SG.altI]); SG.M = stgMachine(SG.W, SG.progs); sgRender(); sgSay(''); }
function sgKey(k, down) { if (!SG) return; const b = document.querySelector(`.skeys [data-k="${k}"]`); if (b) b.classList.toggle('on', down); if (!SG.run && down) sgGo(); if (SG.run) SG.M.key(k, down); }
function sgAlt(i) { if (!SG || i < 0 || i >= SG.alts.length) return; sgStop(); SG.altI = i; SG.W = stgWorld(SG.alts[i]); SG.M = stgMachine(SG.W, SG.progs); document.getElementById('ssp').innerHTML = ''; sgRender(); const t = document.querySelector('#sworld .talts'); if (t) t.outerHTML = sgStageHTML().match(/<div class="talts">[\s\S]*?<\/div>/)[0]; }
const SG_WHY = g => {
  const who = g.s ? sgWho(g.s) : '';
  switch (g.k) {
    case 'said': return g.t ? L(`${who} ha de dir «${tx(g.t)}».`, `${who} tiene que decir «${tx(g.t)}».`) : L(`${who} ha de dir alguna cosa.`, `${who} tiene que decir algo.`);
    case 'at': return L(`${who} ha d'acabar a la zona que toca.`, `${who} tiene que terminar en la zona que toca.`);
    case 'reach': return L(`${who} ha d'arribar a la zona que toca.`, `${who} tiene que llegar a la zona que toca.`);
    case 'moved': case 'dx': case 'dy': return L(`${who} s'ha de moure més.`, `${who} tiene que moverse más.`);
    case 'costume': return L(`${who} ha d'acabar amb el vestit ${g.n}.`, `${who} tiene que acabar con el disfraz ${g.n}.`);
    case 'costumes': return L(`${who} ha de canviar de vestit (per semblar que es mou).`, `${who} tiene que cambiar de disfraz (para que parezca que se mueve).`);
    case 'touched': return L(`${sgWho(g.a)} i ${sgWho(g.b)} s'han de tocar.`, `${sgWho(g.a)} y ${sgWho(g.b)} se tienen que tocar.`);
    case 'notouch': return L(`${sgWho(g.a)} no pot tocar ${sgWho(g.b)}.`, `${sgWho(g.a)} no puede tocar ${sgWho(g.b)}.`);
    case 'var': return L(`La variable «${g.v}» no té el valor que demana el repte.`, `La variable «${g.v}» no tiene el valor que pide el reto.`);
    case 'bg': return L(`El fons ha de canviar a ${sgBgN(g.n)}.`, `El fondo tiene que cambiar a ${sgBgN(g.n)}.`);
    case 'bgs': return L('El fons ha de canviar més vegades.', 'El fondo tiene que cambiar más veces.');
    case 'clones': return L(`Calen almenys ${g.min} clons.`, `Hacen falta al menos ${g.min} clones.`);
    case 'msg': return L(`S'ha d'enviar el missatge «${g.m}».`, `Hay que enviar el mensaje «${g.m}».`);
    case 'hidden': return L(`${who} s'ha d'amagar.`, `${who} se tiene que esconder.`); case 'shown': return L(`${who} s'ha de veure.`, `${who} se tiene que ver.`);
    case 'size': return L(`${who} no té la mida que toca.`, `${who} no tiene el tamaño que toca.`);
    case 'dir': case 'turned': return L(`${who} ha de girar.`, `${who} tiene que girar.`);
    case 'sound': return L('Ha de sonar un so.', 'Tiene que sonar un sonido.');
    case 'stopped': return L('El programa s\'ha d\'acabar sol.', 'El programa tiene que terminar solo.');
    case 'running': return L('El programa s\'ha aturat massa aviat.', 'El programa se ha parado demasiado pronto.');
    case 'clicked': return L(`Cal tocar ${who}.`, `Hay que tocar a ${who}.`);
    case 'crash': return L('Un bucle no espera mai: posa-hi algun bloc que es vegi (moure, esperar…).', 'Un bucle no espera nunca: pon algún bloque que se vea (mover, esperar…).');
  }
  return L('Encara no fa el que demana el repte.', 'Aún no hace lo que pide el reto.');
};
function sgEnd(why) {
  sgStop(); const S = SG.M.S, W = SG.W;
  if (!W.goal.length || SG.free) { sgSay(L('Programa acabat.', 'Programa terminado.')); if (SG.onDone) SG.onDone(); return; }
  if (!SG.judge) { sgSay(L('Quan ho tinguis, toca <b>Comprova</b>.', 'Cuando lo tengas, toca <b>Comprueba</b>.')); return; }
  const bad = why === 'crash' ? [{ k: 'crash' }] : stgEval(W, S);
  if (!bad.length) {
    if (SG.alts.length > 1) { SG.altOk.add(SG.altI); const nx = SG.alts.findIndex((_, i) => !SG.altOk.has(i)); const t = document.querySelector('#sworld .talts'); if (t) t.outerHTML = sgStageHTML().match(/<div class="talts">[\s\S]*?<\/div>/)[0];
      if (nx >= 0) { SFX.ok && SFX.ok(); const au = SG.auto; sgSay(L(`La prova ${SG.altI + 1} funciona! Ara la prova ${nx + 1}…`, `¡La prueba ${SG.altI + 1} funciona! Ahora la prueba ${nx + 1}…`), 'ok'); setTimeout(() => { if (!SG || SG.run) return; sgAlt(nx); sgGo(au); }, 1300); return; } }
    SG.solved = true; SFX.win && SFX.win(); typeof confetti === 'function' && confetti(90); sgSay(L('Molt bé! Funciona!', '¡Muy bien! ¡Funciona!'), 'ok'); if (SG.onDone) SG.onDone(); return;
  }
  SFX.ko && SFX.ko(); sgSay((SG.alts.length > 1 ? L(`Prova ${SG.altI + 1}: `, `Prueba ${SG.altI + 1}: `) : '') + SG_WHY(bad[0]) + ' ' + L('Canvia els blocs i torna-ho a provar.', 'Cambia los bloques y vuelve a probar.'), 'bad');
  if (SG.onFail) SG.onFail(bad);
}
/* ---------- Editor ---------- */
function sgIns(k) {
  if (SG.run) sgStop(); if (SG.max && sgUsed() >= SG.max) return toast(L(`Només pots fer servir ${SG.max} blocs.`, `Solo puedes usar ${SG.max} bloques.`));
  if (!SG.edit.includes(SG.who)) return toast(L('Aquest personatge ja està programat. Tria el teu personatge a dalt.', 'Este personaje ya está programado. Elige tu personaje arriba.'));
  const b = sgNew(k, SG.st, SG.W), { l, i } = SG.cur; l.splice(i, 0, b); SG.cur = b.b ? { l: b.b, i: 0 } : { l, i: i + 1 }; SG.sel = null; SFX.tap && SFX.tap(); sgFresh(); sgDraw();
}
function sgCurAt(li, i) { if (SG.run) sgStop(); SG.cur = { l: SG.lists[li], i }; SG.sel = null; sgDraw(); }
function sgSel(id) { if (SG.run) sgStop(); const ix = SG.ids[id]; if (!ix) return; SG.sel = SG.sel === ix.b ? null : ix.b; SG.cur = { l: ix.list, i: ix.list.indexOf(ix.b) + 1 }; sgDraw(); }
function sgMoveB(d) { const b = SG.sel, l = SG.ids[b._id].list, i = l.indexOf(b), j = i + d; if (j < 0 || j >= l.length) return; l.splice(i, 1); l.splice(j, 0, b); SG.cur = { l, i: j + 1 }; sgFresh(); sgDraw(); }
function sgDel() { const b = SG.sel, l = SG.ids[b._id].list, i = l.indexOf(b); l.splice(i, 1); SG.sel = null; SG.cur = { l, i }; sgFresh(); sgDraw(); }
function sgElse() { const b = SG.sel; b.e = b.e ? null : []; sgFresh(); sgDraw(); }
function sgJoin() { const b = SG.sel; b.c = b.c.and || b.c.or ? (b.c.and || b.c.or)[0] : { and: [b.c, { touch: 'edge' }] }; sgFresh(); sgDraw(); }
// un altre guió amb la mateixa capçalera (p. ex. dos «quan comença» per a dos ritmes diferents)
function sgAddScr(h) { if (SG.run) sgStop(); const P = SG.progs[SG.who]; if (!P || !P[h] || P[h].length >= 4) return; const l = []; P[h].push(l); SG.cur = { l, i: 0 }; SG.sel = null; sgDraw(); }
function sgWhoSel(id) { if (SG.run) sgStop(); SG.who = id; SG.sel = null; const P = SG.progs[id], h = Object.keys(P).find(x => SG.hatsOf(id).includes(x)) || Object.keys(P)[0]; const l = h ? P[h][0] : []; SG.cur = { l, i: l.length }; sgDraw(); }
function sgFresh() { SG.M = stgMachine(SG.W, SG.progs); SG.solved = false; if (SG.altOk.size) SG.altOk.clear(); const box = document.getElementById('ssp'); if (box) box.innerHTML = ''; sgRender(); }
function sgField(id, path) {
  if (SG.run) sgStop();
  const ix = SG.ids[id]; if (!ix) return; const b = ix.b, field = path.split('.').pop(), get = p => p.split('.').reduce((a, k) => a == null ? a : a[k], b), set = (p, v) => { const k = p.split('.'), last = k.pop(); k.reduce((a, x) => a[x], b)[last] = v; };
  const cur = get(path), W = SG.W, opt = (v, label, on) => `<button class="${on ? 'on' : ''}" data-v='${JSON.stringify(v).replace(/'/g, '&#39;')}'>${label}</button>`;
  let body = '', input = null;
  if (path.endsWith('.join')) { const c = get(path.slice(0, -5)); body = opt('and', L('i (les dues)', 'y (las dos)'), !!c.and) + opt('or', L('o (alguna)', 'o (alguna)'), !!c.or); }
  else if (field === 'touch' || field === 't' && b.k === 'pointto') { body = ['edge', 'mouse', ...W.sprites.map(s => s.id).filter(i => i !== SG.who)].filter((v, i, a) => a.indexOf(v) === i && (field === 'touch' || v !== 'edge')).map(v => opt(v, sgWho(v), cur === v)).join('');
    if (field === 'touch' && SG.pal.includes('cond+')) body += `<p class="rpk">${L('o una altra condició:', 'u otra condición:')}</p>` + opt({ color: 'blue' }, L('toca un color', 'toca un color'), false) + opt({ key: (W.keys || ['space'])[0] }, L('una tecla premuda', 'una tecla pulsada'), false) + opt({ a: { r: 'var', v: W.vars[0] || 'punts' }, op: '>', b: 0 }, L('comparar números', 'comparar números'), false); }
  else if (field === 'color') body = [...new Set(W.regions.map(r => r.c))].map(v => opt(v, `<i class="rdot" style="background:${{ red: '#EF5A5A', green: '#3CC47C', blue: '#3D7BF4', yellow: '#FFC531', grey: '#A9B0C0' }[v]}"></i>${tx(SG_CN[v].join('|'))}`, cur === v)).join('') || `<p class="mut">${L('Aquest fons no té zones de color.', 'Este fondo no tiene zonas de color.')}</p>`;
  else if (field === 'key') body = (W.keys.length ? W.keys : ['space']).map(v => opt(v, sgKeyN(v), cur === v)).join('');
  else if (field === 'op') body = ['<', '>', '=', '≠'].map(v => opt(v, v, cur === v)).join('');
  else if (field === 'v') body = (W.vars.length ? W.vars : ['punts']).map(v => opt(v, sgOpTxt({ r: 'var', v }, SG.st), cur === v)).join('');
  else if (field === 'm') body = (SG.st.msgs || ['comença']).map(v => opt(v, esc(v), cur === v)).join('');
  else if (field === 'n' && b.k === 'bg') body = (W.bgs || [W.bg]).map(v => opt(v, sgBgN(v), cur === v)).join('');
  else if (field === 'n' && b.k === 'sound') body = Object.keys(STG_SND).map(v => opt(v, tx(STG_SND_N[v].join('|')), cur === v)).join('');
  else if (field === 'w') body = opt('all', L('tot', 'todo'), cur === 'all') + opt('this', L('aquest guió', 'este guion'), cur === 'this');
  else if (field === 't' && (b.k === 'say' || b.k === 'think')) { input = 'text'; body = `<div class="rnum"><input id="rnumi" type="text" maxlength="40" value="${esc(typeof cur === 'string' ? tx(cur) : '')}"><button class="btn" id="rnumok">OK</button></div>${(SG.st.texts || []).length ? `<p class="rpk">${L('o tria:', 'o elige:')}</p><div class="rpops">${SG.st.texts.map(t => opt(t, esc(tx(t)), cur === t)).join('')}</div>` : ''}${W.vars.length ? `<div class="rpops">${W.vars.map(v => opt({ r: 'var', v }, sgOpTxt({ r: 'var', v }, SG.st), false)).join('')}</div>` : ''}`; }
  else { input = 'num'; const ops = [...(SG.st.ops || []), ...W.vars.map(v => '$' + v)];
    body = `<div class="rnum"><input id="rnumi" type="number" inputmode="numeric" value="${typeof cur === 'number' ? cur : ''}"><button class="btn" id="rnumok">OK</button></div>${ops.length ? `<p class="rpk">${L('o un valor:', 'o un valor:')}</p><div class="rpops">${ops.map(o => { const v = o[0] === '$' ? { r: 'var', v: o.slice(1) } : o === 'rnd' ? { r: 'rnd', a: 1, b: 10 } : { r: o }; return opt(v, sgOpTxt(v, SG.st), false); }).join('')}</div>` : ''}`; }
  modal(`<div class="sheet card rpick"><h3>${L('Tria', 'Elige')}</h3><div class="rpopts">${body}</div><button class="btn ghost big" onclick="closeModal()">${L('Tanca', 'Cierra')}</button></div>`, true);
  const apply = v => { if (path.endsWith('.join')) { const cp = path.slice(0, -5), c = get(cp), pair = c.and || c.or; set(cp, v === 'and' ? { and: pair } : { or: pair }); }
    else if (field === 'touch' && typeof v === 'object') set(path.slice(0, -6) || 'c', v); else set(path, v); closeModal(); SFX.tap && SFX.tap(); sgFresh(); sgDraw(); };
  document.querySelectorAll('.rpick .rpopts button[data-v], .rpick .rpops button[data-v]').forEach(x => x.onclick = () => apply(JSON.parse(x.dataset.v)));
  if (input) { const inp = document.getElementById('rnumi'), ok = () => { if (input === 'text') { const t = inp.value.trim(); if (t) apply(t + '|' + t); } else { const n = parseFloat(inp.value); if (!isNaN(n)) apply(Math.round(n * 10) / 10); } };
    document.getElementById('rnumok').onclick = ok; inp.onkeydown = e => { if (e.key === 'Enter') ok(); }; setTimeout(() => inp.focus(), 50); }
}
// teclat de l'ordinador
if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.addEventListener) {
  const KM = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down', ' ': 'space', a: 'a', b: 'b' };
  document.addEventListener('keydown', e => { if (!SG || !document.getElementById('sstage') || ['INPUT', 'TEXTAREA'].includes((e.target || {}).tagName)) return; const k = KM[e.key]; if (!k || !(SG.W.keys || []).includes(k)) return; e.preventDefault(); sgKey(k, true); });
  document.addEventListener('keyup', e => { if (!SG) return; const k = KM[e.key]; if (k) sgKey(k, false); });
  // el ratolí (o el dit) damunt de l'escenari: «apunta cap al ratolí» i «toca el ratolí» quan l'alumne/a prova el programa
  const mouse = e => { const st = e.target && e.target.closest && e.target.closest('#sstage'); if (!st || !SG || !SG.M || SG.auto) return; const r = st.getBoundingClientRect();
    SG.M.S.mx = Math.max(-240, Math.min(240, (e.clientX - r.left) / r.width * 480 - 240)); SG.M.S.my = Math.max(-180, Math.min(180, 180 - (e.clientY - r.top) / r.height * 360)); };
  document.addEventListener('pointermove', mouse); document.addEventListener('pointerdown', mouse);
}
/* ---------- Tipus de pas de Creadors ----------
   stage: repte { q, w, edit?, hats, pal, ops?, texts?, msgs?, varNames?, sol (SQ), prog?, max?, hint } · screate: projecte lliure { …, name, crit, check? }
   sspot: tocar el bloc que… { w, prog (SQ amb !), ex } · sfree: escenari per provar sense missió { w, prog } */
function sgStage(st) {
  const q = st.q ? `<div class="tsq2"><span class="tsqc">${charSVG('numi', 'idle')}</span><div><p>${tval(st.q)}</p>${st.crit ? `<ul class="tcrit">${st.crit.map(c => `<li>${tval(c)}</li>`).join('')}</ul>` : ''}</div></div>` : '';
  $('#tsb').innerHTML = `${q}${sgHTML(SG.extra || '')}`; $('#tsb').classList.add('wide'); sgRender();
}
function sgHint(st) {
  if (document.getElementById('thint') || !(st.hint || st.sol)) return;
  const f = document.getElementById('tsf'), b = document.createElement('button'); b.className = 'btn ghost'; b.id = 'thint'; b.textContent = L('Una pista', 'Una pista');
  b.onclick = () => { if (st.hint && !b.dataset.k) { b.dataset.k = 1; sgSay(`💡 ${tval(st.hint)}`); b.textContent = L('Mostra una solució', 'Muestra una solución'); return; }
    const P = SQ(st.sol); for (const id of SG.edit) for (const [h, scr] of Object.entries(P[id] || {})) SG.progs[id][h] = JSON.parse(JSON.stringify(scr)); sgWhoSel(SG.who); sgFresh(); sgSay(L('Aquí tens una solució. Prova-la i mira què fa cada bloc.', 'Aquí tienes una solución. Pruébala y mira qué hace cada bloque.')); b.remove(); };
  f.insertBefore(b, f.firstChild);
}
if (typeof TSTEP !== 'undefined') {
  TSTEP.stage = function (st) { sgMake(st); SG.onDone = () => tContinue(); SG.onFail = () => { if (SG.tries >= 2) sgHint(st); }; sgStage(st); tFoot(L('Continua', 'Continúa'), tNext, false); };
  TSTEP.screate = function (st) {
    TSTEP.stage(st);
    SG.onDone = () => { const bad = st.check && st.check(SG.progs); if (bad) { SG.solved = false; sgSay(tval(bad), 'bad'); return; }
      tFoot(L('Desa-ho i continua', 'Guárdalo y continúa'), () => { const t = TS_(); t.port.push({ id: 'pj' + Date.now().toString(36), kind: 'stage', sid: TSS.id, t: st.name || TSS.s.t, w: st.w, progs: JSON.parse(JSON.stringify(SG.progs, (k, v) => k === '_id' ? undefined : v)), st: { edit: SG.edit, hats: SG.hats, varNames: st.varNames }, d: today() }); if (t.port.length > 60) t.port.shift(); save(); toast(L('Projecte desat a «Projectes»!', '¡Proyecto guardado en «Proyectos»!')); tNext(); }, true, `<button class="btn ghost" onclick="sgGo()">${L('Torna-ho a provar', 'Vuelve a probarlo')}</button>`); };
  };
  TSTEP.sfree = function (st) { sgMake(st, { mode: 'view' }); SG.free = true; SG.onDone = () => tContinue(); sgStage(st); tFoot(L('Continua', 'Continúa'), tNext, true); };
  TSTEP.sspot = function (st) {
    sgMake({ ...st, edit: [] }, { mode: 'view' }); SG.edit = [];
    { const has = l => (l || []).some(b => b.mk || (Array.isArray(b.b) && has(b.b)) || has(b.e)), w = Object.keys(SG.progs).find(id => Object.values(SG.progs[id]).some(scr => scr.some(has))); if (w) SG.who = w; }
    sgStage(st);
    const marked = []; Object.values(SG.progs).forEach(P => Object.values(P).forEach(scr => scr.forEach(function w(l) { (l || []).forEach(b => { marked.push(b); if (Array.isArray(b.b)) w(b.b); if (b.e) w(b.e); }); })));
    const wire = () => marked.forEach(b => { const e = document.getElementById('sg' + b._id); if (!e) return; const h = e.querySelector('.tbh'); h.classList.add('rspot'); h.onclick = () => { if (TSS.ready) return; TSS.ready = true; const ok = !!b.mk; e.classList.add(ok ? 'good' : 'err'); if (!ok) { const g = marked.find(x => x.x); const ge = g && document.getElementById('sg' + g._id); if (ge) ge.classList.add('good'); }
      sgSay(ok ? L('Molt bé!', '¡Muy bien!') + (st.ex ? ' ' + tval(st.ex) : '') : (st.ex ? tval(st.ex) : L('No és aquest: és el que està marcat en verd.', 'No es este: es el que está marcado en verde.')), ok ? 'ok' : 'bad'); ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko(); tContinue(); }; });
    // el bloc marcat pot ser d'un altre personatge: en canviar de pestanya, es tornen a connectar els tocs
    const w0 = sgWhoSel; window.sgWhoSel = id => { w0(id); wire(); }; wire();
    tFoot(L('Toca un bloc', 'Toca un bloque'), () => { }, false);
    (window.TSTOPS = window.TSTOPS || []).push(() => { window.sgWhoSel = w0; });
  };
}
/* ---------- Demos i diapositives (TMEDIA.stage) ---------- */
var TMEDIA = typeof TMEDIA !== 'undefined' ? TMEDIA : {};
const SGD = { cur: null };
function sgMiniHTML(m) { return `<div class="sdemo"><div class="sstage mini"><div class="sbg">${STG_BG[m.w.bg] ? STG_BG[m.w.bg].svg() : ''}</div><div class="ssprites"></div><div class="svars"></div></div>${m.code !== false ? `<div class="sdcode">${sgDemoChips(SQ(m.prog), m)}</div>` : ''}</div>`; }
function sgDemoChips(P, m) {
  const ch = l => (l || []).map(b => `<span class="rdb c-${SG_CAT[b.k]}"><span class="tbi">${sgIco(b.k)}</span><span>${sgLabel(b, undefined, m)}</span></span>${Array.isArray(b.b) ? `<span class="rdin">${ch(b.b)}</span>${b.e ? `<span class="rdelse">${L('si no', 'si no')}</span><span class="rdin">${ch(b.e)}</span>` : ''}` : ''}`).join('');
  return Object.entries(P).flatMap(([id, H]) => Object.entries(H).flatMap(([h, scr]) => scr.map(l => `<div class="rdh"><b>${esc(sgWho(id, stgWorld(m.w)))} · ${SG_HAT(h)}</b>${ch(l)}</div>`))).join('');
}
function sgMiniStart(el, m) {
  if (SGD.cur) { cancelAnimationFrame(SGD.cur.raf); clearTimeout(SGD.cur.t); }
  const box = el.querySelector('.sdemo .sstage'); if (!box) return; const me = SGD.cur = {};
  const reset = () => { me.W = stgWorld(m.w); me.M = stgMachine(me.W, SQ(m.prog)); me.M.flag(); me.last = performance.now(); box.querySelector('.ssprites').innerHTML = ''; };
  const draw = () => { const sp = box.querySelector('.ssprites'), S = me.M.S; const keep = SG; SG = { M: me.M, W: me.W, st: m }; const prev = document.getElementById('ssp'); if (prev) prev.id = ''; sp.id = 'ssp'; const vs = box.querySelector('.svars'); vs.id = 'svars'; const bg = box.querySelector('.sbg'); bg.id = 'sbg'; sgRender(); sp.id = ''; vs.id = ''; bg.id = ''; if (prev) prev.id = 'ssp'; SG = keep; };
  reset(); draw();
  const loop = now => { if (SGD.cur !== me || !box.isConnected) return; let n = Math.floor((now - me.last) / (1000 / STG.FPS)); me.last += n * 1000 / STG.FPS; while (n-- > 0) me.M.tick(); draw();
    if (me.M.S.t > (m.time || me.W.time) || me.M.S.stopped || (me.M.idle() && me.M.S.t > .5)) { me.t = setTimeout(() => { if (SGD.cur !== me) return; reset(); me.raf = requestAnimationFrame(loop); }, 1500); return; }
    me.raf = requestAnimationFrame(loop); };
  me.raf = requestAnimationFrame(loop);
}
TMEDIA.stage = { html: m => sgMiniHTML(m), start: (el, m) => sgMiniStart(el, m), slide: m => sgMiniHTML({ ...m }), slideStart: (el, m) => sgMiniStart(el, m), stop: () => { if (SGD.cur) { cancelAnimationFrame(SGD.cur.raf); clearTimeout(SGD.cur.t); SGD.cur = null; } } };
if (typeof window !== 'undefined') (window.TSTOPS = window.TSTOPS || []).push(() => { TMEDIA.stage.stop(); if (SG) sgStop(); });
// el portafoli
if (typeof TPORT !== 'undefined') TPORT.stage = {
  thumb: p => `<span class="sthumbw">${STG_BG[p.w.bg] ? STG_BG[p.w.bg].svg() : ''}<span class="sthumbs">${(p.w.sprites || []).slice(0, 3).map(d => `<i style="left:${(d.x + 240) / 480 * 100}%;top:${(180 - d.y) / 360 * 100}%">${sgCostume(d.art, d.costume || 0)}</i>`).join('')}</span></span>`,
  open: p => { sgMake({ w: p.w, ...p.st, pal: [] }, { mode: 'view' }); SG.progs = p.progs; SG.M = stgMachine(SG.W, SG.progs); SG.free = true; return `<div class="tsbody wide">${sgHTML()}</div>`; },
  mount: () => sgRender()
};
// validació dels reptes (scripts de prova sense navegador)
var TVALID = typeof TVALID !== 'undefined' ? TVALID : {};
TVALID.stage = TVALID.screate = st => { if (!st.sol) return 'falta la solució (sol)'; let P; try { P = SQ(st.sol); stgProgs(st.w, {}); } catch (e) { return e.message; } const r = stgSolves(st.w, P); const out = [];
  if (r) out.push(`la solució NO resol el repte${r.i ? ` (prova ${r.i + 1})` : ''}: ${r.bad.map(b => b.k + (b.s ? ':' + b.s : '')).join(', ')} (t=${r.S.t.toFixed(1)} s; ${r.S.sprites.filter(s => !s.clone).map(s => `${s.id} x=${s.x.toFixed(0)} y=${s.y.toFixed(0)}`).join(', ')}; vars=${JSON.stringify(r.S.vars)})`);
  const pal = new Set(st.pal || []), ks = new Set(); const walk = l => (l || []).forEach(b => { ks.add(b.k); if (b.k === 'if' && b.e) ks.add('else'); const c = x => { if (!x) return; if (x.and || x.or) { ks.add('and'); (x.and || x.or).forEach(c); } if (x.not) c(x.not); }; c(b.c); if (Array.isArray(b.b)) walk(b.b); walk(b.e); });
  const edit = st.edit || st.w.edit || [st.w.sprites[0].id]; for (const id of Object.keys(P)) { if (!edit.includes(id)) out.push(`la solució programa «${id}», que no és editable (edit)`); for (const [h, scr] of Object.entries(P[id])) { if (!((st.hatsBy && st.hatsBy[id]) || st.hats || ['flag']).includes(h)) out.push(`la solució fa servir la capçalera «${h}», que no és a hats`); scr.forEach(walk); } }
  for (const k of ks) if (!pal.has(k)) out.push(`la solució fa servir «${k}» però no és a la paleta`);
  if (st.prog) { try { if (!stgSolves(st.w, SQ(st.prog))) out.push('el programa de partida ja resol el repte'); } catch (e) { out.push(e.message); } }
  if (st.k === 'screate' && !(st.crit || []).length) out.push('el projecte necessita criteris (crit)');
  if (st.check) { try { const m = st.check(stgProgs(st.w, P)); if (m) out.push('la solució no passa la comprovació (check): ' + tx(m)); } catch (e) { out.push('check: ' + e.message); } }
  for (const d of st.w.sprites) if (!STG_ART[d.art]) out.push(`personatge desconegut «${d.art}»`); if (!STG_BG[st.w.bg]) out.push(`fons desconegut «${st.w.bg}»`);
  return out; };
TVALID.sspot = st => { try { const P = SQ(st.prog); let n = 0; Object.values(P).forEach(H => Object.values(H).forEach(scr => scr.forEach(function w(l) { (l || []).forEach(b => { if (b.mk) n++; if (Array.isArray(b.b)) w(b.b); if (b.e) w(b.e); }); }))); return n === 1 ? [] : [`cal exactament 1 bloc marcat amb ! (n'hi ha ${n})`]; } catch (e) { return [e.message]; } };
TVALID.sfree = st => { try { SQ(st.prog || '@x flag{ }'); return STG_BG[st.w.bg] ? [] : ['fons desconegut']; } catch (e) { return [e.message]; } };
TVALID['media:stage'] = m => { try { SQ(m.prog); return STG_BG[m.w.bg] ? [] : ['fons desconegut']; } catch (e) { return [e.message]; } };
