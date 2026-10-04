/* ===== Numi Tech · presentació per a la classe (presenta.html?s=r1-1&l=ca) =====
   El professor la projecta durant la sessió de 60 minuts. Les diapositives (TGUIDE[sessió].slides) tenen animacions
   (TANI), en Bit en 3D i demostracions en directe on la classe prediu abans d'executar. N = notes del professor,
   F = pantalla completa, fletxes o espai = endavant i enrere. Res del que passa aquí es desa enlloc. */
(function () {
  const q = new URLSearchParams(location.search), SID = q.get('s') || 'r1-1';
  LANG = q.get('l') === 'es' ? 'es' : 'ca'; document.documentElement.lang = LANG;
  const G = TGUIDE[SID], F = (() => { for (const c of TECH) for (const [ui, u] of c.units.entries()) for (const [si, s] of u.s.entries()) if (s.id === SID) return { c, u, ui, s, si }; return null; })();
  const deck = document.getElementById('deck');
  if (!G || !F) { deck.innerHTML = `<p class="pz-err">${L('No hi ha material per a aquesta sessió.', 'No hay material para esta sesión.')}</p>`; return; }
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const T = v => tx(v || '');
  const S = G.slides, PH = { inici: ['Inici', 'Inicio'], teoria: ['Teoria', 'Teoría'], desconnectat: ['Sense pantalla', 'Sin pantalla'], robot: ['Robot de veritat', 'Robot de verdad'], ordinador: ["A l'ordinador", 'En el ordenador'], crea: ['Crea', 'Crea'], tancament: ['Tancament', 'Cierre'] };
  // icones de cada fase (traç blanc dins d'un cercle del color de la fase)
  const PHI = { inici: '<path d="M12 3c3 2 5 5 5 9l-2 4H9l-2-4c0-4 2-7 5-9z"/><circle cx="12" cy="10" r="1.6"/><path d="M9 16l-2 4M15 16l2 4"/>', teoria: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>', desconnectat: '<path d="M7 4h4v4a2 2 0 1 0 2 0V4h4v6h-3a2 2 0 1 0 0 4h3v6H7v-6h3a2 2 0 1 0 0-4H7z"/>', robot: '<rect x="5" y="8" width="14" height="10" rx="3"/><path d="M12 8V4"/><circle cx="12" cy="3.5" r="1"/><circle cx="9.5" cy="13" r="1.2"/><circle cx="14.5" cy="13" r="1.2"/>', ordinador: '<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M2 19h20"/>', crea: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>', tancament: '<path d="M6 21V4"/><path d="M6 4h11l-2 4 2 4H6"/>' };
  const phIco = ph => `<i class="pz-phi"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${PHI[ph] || PHI.inici}</svg></i>`;
  // formes de fons: tres composicions que es van alternant perquè cada diapositiva no sigui igual que l'anterior
  const deco = k => `<div class="pz-deco v${k % 3}" aria-hidden="true"><i class="d-blob"></i><i class="d-ring"></i><i class="d-dots"></i><i class="d-sq"></i><svg class="d-wave" viewBox="0 0 200 40"><path d="M2 20 Q 27 2 52 20 T 102 20 T 152 20 T 202 20" fill="none" stroke-width="7" stroke-linecap="round"/></svg></div>`;
  const blockOf = id => G.plan.find(p => (p.slides || []).includes(id)) || null;
  let i = Math.max(0, Math.min(S.length - 1, (+q.get('i') || 1) - 1)), notes = q.get('n') === '1', timer = null, demo = null, b3 = null, B3M = null;
  const load3d = () => B3M ? Promise.resolve(B3M) : import('./tech-3d.js').then(m => (B3M = m.ok() ? m : null)).catch(() => null);
  document.title = `${T(F.s.t)} · Numi Tech`;

  // el món d'una demostració o de la portada: en 3D si es pot; si no, el dibuix 2D
  function world(el, spec, prog) {
    const W = bitWorld(spec), Sim = bitSim(W);
    el.innerHTML = `<div class="pz-w2d">${bitSVG(W, Sim, { marks: true })}</div><div class="thud pz-hud" id="pzhud">${bitHudHTML(W, Sim, false)}</div>`;
    const st = { W, S: Sim, prog, gen: null, prev: null, b3: null };
    load3d().then(M => { if (!M || !el.isConnected) return; try { st.b3 = M.create(el, W, Sim, {}); el.classList.add('on3d'); if (Object.keys(W.marks).length) st.b3.marks(true); } catch (e) { } });
    return st;
  }
  // programes de les demostracions: text (TQ) amb bucles, condicions i funcions; cada bloc porta un número (data-d) per il·luminar-lo
  let DN = 0;
  const tag = l => (l || []).forEach(b => { b._d = ++DN; tag(b.b); tag(b.e); });
  const progOf = v => { const p = TQ(v); tag(p); return p; };
  const chips = list => (list || []).map(b => { const c = `<span class="pz-b c-${BIT_CAT[b.k]}" data-d="${b._d}"><span class="tbi">${BIT_ICO[b.k]}</span>${bitLabel(b)}</span>`;
    return b.b ? `<span class="pz-c c-${BIT_CAT[b.k]}">${c}<span class="pz-in">${chips(b.b)}</span>${b.e ? `<span class="pz-else">${L('Si no', 'Si no')}</span><span class="pz-in">${chips(b.e)}</span>` : ''}</span>` : c; }).join('');
  // camps extra de qualsevol diapositiva: code (codi per llegir) i blocks (fitxes de blocs de colors)
  const BCOL = ['mov', 'loop', 'act', 'cond', 'snd', 'art', 'fn', 'var'];
  const X = s => `${s.blocks ? `<div class="pz-blocks">${s.blocks.map((b, k) => { const o = typeof b === 'string' ? { t: b } : b; return `<span class="pz-b c-${o.c || BCOL[k % BCOL.length]}">${esc(T(o.t))}</span>`; }).join('')}</div>` : ''}${s.code ? `<pre class="pz-code"><code>${esc(T(s.code))}</code></pre>` : ''}`;

  const Xb = s => X({ ...s, code: null });   // fitxes de blocs sense el codi (el codi va a la columna de la dreta)
  const codeSide = s => `<pre class="pz-code side"><span class="pz-ctag">MakeCode</span><code>${esc(T(s.code))}</code></pre>`;
  const BIT = F.c.id === 'robot', HERO = `img/tech/scenes/hero-${F.c.id}.webp`;
  // portada: si el títol, l'entrada i els objectius són llargs, la lletra es fa més petita perquè tot hi càpiga
  const coverD = s => { const n = T(s.t).length * 3 + (s.x ? T(s.x).length : 0) + G.obj.slice(0, 3).reduce((a, o) => a + T(o).length, 0); return n > 560 ? 'd2' : n > 400 ? 'd1' : ''; };
  const R = {
    portada: s => `<div class="pz-cover ${coverD(s)}"><div class="pz-cl"><p class="pz-kick">${esc(T(F.c.name))} · ${L('Unitat', 'Unidad')} ${F.ui + 1} · ${L('Sessió', 'Sesión')} ${F.si + 1}</p>
        <h1>${esc(T(s.t))}</h1>${s.x ? `<p class="pz-lead">${T(s.x)}</p>` : ''}<div class="pz-obj"><b>${L('Al final de la sessió, cada alumne/a…', 'Al final de la sesión, cada alumno/a…')}</b><ul>${G.obj.slice(0, 3).map(o => `<li>${esc(T(o).replace(/^L'alumne\/a |^El alumno\/a /, ''))}</li>`).join('')}</ul></div></div>
      <div class="pz-cr"><div class="pz-frame">${BIT ? '<div class="pz-3d" id="pzw"></div>' : `<div class="pz-hero" style="background-image:url(${HERO})"></div>`}</div><span class="pz-badge"><small>${L('Unitat', 'Unidad')}</small>${F.ui + 1}</span></div></div>`,
    pregunta: s => `<div class="pz-q"><div class="pz-qbot">${bitChar('idle')}</div><div class="pz-qb"><h2>${esc(T(s.t))}</h2>${s.x ? `<p>${T(s.x)}</p>` : ''}${s.punts ? `<ul class="pz-pts">${s.punts.map(p => `<li>${T(p)}</li>`).join('')}</ul>` : ''}${X(s)}</div></div>`,
    repas: s => R.pregunta(s),
    concepte: s => `<div class="pz-two"><div><h2>${esc(T(s.t))}</h2>${s.x ? `<p class="pz-lead">${T(s.x)}</p>` : ''}${s.punts ? `<ul class="pz-pts big">${s.punts.map(p => `<li>${T(p)}</li>`).join('')}</ul>` : ''}${X(s)}</div>
      <div class="pz-art">${s.anim && TANI[s.anim] ? TANI[s.anim]() : s.demo ? '<div class="pz-3d" id="pzw"></div>' : s.pic ? `<img class="pz-pic" src="${esc(s.pic)}" alt="">` : bitChar('happy')}</div></div>`,
    anim: s => { const a = TANI[s.anim] ? TANI[s.anim]() : '', at = a.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').toLowerCase();
      // els punts només surten si l'animació no els diu ja
      const pts = (s.punts || []).filter(p => !at.includes(T(p).replace(/<[^>]+>/g, '').trim().toLowerCase()));
      return `<div class="pz-anim"><h2>${esc(T(s.t))}</h2><div class="pz-ab">${a}</div>${s.x ? `<p class="pz-lead c">${T(s.x)}</p>` : ''}${pts.length ? `<ul class="pz-pts pz-apts">${pts.map(p => `<li>${T(p)}</li>`).join('')}</ul>` : ''}${X(s)}</div>`; },
    demo: s => { BIT_FNCTX = s.demo.fnName || null; BIT_VCTX = (s.demo.w && s.demo.w.vname) || null; try { return R._demo(s); } finally { BIT_FNCTX = null; BIT_VCTX = null; } },
    _demo: s => { DN = 0; const p = s._p = progOf(s.demo.prog), fns = s._f = s.demo.fns ? Object.fromEntries(Object.entries(s.demo.fns).map(([f, v]) => [f, progOf(v)])) : null, evs = s._e = s.demo.evs ? Object.fromEntries(Object.entries(s.demo.evs).map(([f, v]) => [f, progOf(v)])) : null;
      return `<div class="pz-demo"><div class="pz-dh"><h2>${esc(T(s.t))}</h2>${s.x ? `<p class="pz-lead">${T(s.x)}</p>` : ''}</div>
      <div class="pz-db"><div class="pz-3d" id="pzw"></div><div class="pz-dp"><b>${evs ? L('Quan comença', 'Al empezar') : L('Programa', 'Programa')}</b><div class="pz-chips">${chips(p)}</div>
        ${Object.entries(fns || {}).map(([f, l]) => `<b>${L('Funció', 'Función')} ${esc(s.demo.fnName && s.demo.fnName[f] ? T(s.demo.fnName[f]) : f)}</b><div class="pz-chips fn">${chips(l)}</div>`).join('')}
        ${Object.entries(evs || {}).map(([e, l]) => `<b>${L(`Quan premo ${e}`, `Al pulsar ${e}`)}</b><div class="pz-chips ev">${chips(l)}</div>`).join('')}${s.demo.press ? `<p class="pz-tip">${L('Botons que premerem', 'Botones que pulsaremos')}: <b>${s.demo.press.split('').join(' → ')}</b></p>` : ''}
        <div class="pz-dbt"><button class="pz-btn go" onclick="PZ.run()">▶ ${L('Executa', 'Ejecuta')}</button><button class="pz-btn" onclick="PZ.step()">${L('Pas a pas', 'Paso a paso')}</button><button class="pz-btn" onclick="PZ.reset()">↺</button></div>
        <p class="pz-tip">${s.ask ? T(s.ask) : L('Abans d’executar: on creieu que acabarà en Bit?', 'Antes de ejecutar: ¿dónde creéis que terminará Bit?')}</p></div></div></div>`; },
    activitat: s => `<div class="pz-act"><div><p class="pz-kick">${esc(T((PH[(blockOf(s.id) || {}).fase] || PH.inici).join('|')))}</p><h2>${esc(T(s.t))}</h2>${s.x ? `<p class="pz-lead">${T(s.x)}</p>` : ''}
        ${s.punts ? `<ol class="pz-steps">${s.punts.map(p => `<li>${T(p)}</li>`).join('')}</ol>` : ''}${Xb(s)}</div>
      <div class="pz-side">${s.code ? codeSide(s) : ''}${s.timer ? `<button class="pz-timer${s.code ? ' sm' : ''}" id="pzt" onclick="PZ.timer(${s.timer})"><span id="pztv">${s.timer}:00</span>${s.code ? '' : `<small>${L('Toca per començar', 'Toca para empezar')}</small>`}</button>` : s.code ? '' : `<div class="pz-art">${bitChar('dance')}</div>`}</div></div>`,
    repte: s => `<div class="pz-act"><div><p class="pz-kick">${L("A l'ordinador", 'En el ordenador')}</p><h2>${esc(T(s.t))}</h2>${s.x ? `<p class="pz-lead">${T(s.x)}</p>` : ''}${s.punts ? `<ul class="pz-pts big">${s.punts.map(p => `<li>${T(p)}</li>`).join('')}</ul>` : ''}${Xb(s)}</div>
      <div class="pz-side">${s.code ? codeSide(s) : `<div class="pz-laptop"><div class="pz-scr"><img src="img/brand/logo-tech.svg" alt="">${BIT ? '<div class="pz-3d" id="pzw"></div>' : `<div class="pz-3d pz-hero" style="background-image:url(${HERO})"></div>`}</div><div class="pz-base"></div></div>`}${s.timer ? `<button class="pz-timer sm" id="pzt" onclick="PZ.timer(${s.timer})"><span id="pztv">${s.timer}:00</span></button>` : ''}</div></div>`,
    video: s => R.concepte(s),
    // simulador del Maqueen: l'arena i el programa (es pot executar a classe)
    robo: s => `<div class="pz-demo"><div class="pz-dh"><h2>${esc(T(s.t))}</h2>${s.x ? `<p class="pz-lead">${T(s.x)}</p>` : ''}</div>
      <div class="pz-db"><div class="pz-3d pz-robo" id="pzr"><canvas></canvas></div><div class="pz-dp"><div class="pz-rchips">${typeof rbDemoChips === 'function' ? rbDemoChips(RQ(s.robo.prog), s.robo) : ''}</div>
        <div class="pz-dbt"><button class="pz-btn go" onclick="PZ.rrun()">▶ ${L('Executa', 'Ejecuta')}</button><button class="pz-btn" onclick="PZ.rreset()">↺</button></div>
        <p class="pz-tip">${T(s.tip || "Abans d'executar: què creieu que farà el robot?|Antes de ejecutar: ¿qué creéis que hará el robot?")}</p></div></div></div>`,
    // material d'un altre motor (escenari, web, digital): el dibuixa el seu fitxer
    media: s => `<div class="pz-demo"><div class="pz-dh"><h2>${esc(T(s.t))}</h2>${s.x ? `<p class="pz-lead">${T(s.x)}</p>` : ''}</div><div class="pz-media" id="pzm">${typeof TMEDIA !== 'undefined' && TMEDIA[s.media.k] && TMEDIA[s.media.k].slide ? TMEDIA[s.media.k].slide(s.media) : ''}</div>${X(s)}</div>`,
    resum: s => `<div class="pz-sum"><h2>${esc(T(s.t))}</h2><ul class="pz-checks">${(s.punts || [s.x]).filter(Boolean).map(p => `<li><span>✓</span>${T(p)}</li>`).join('')}</ul><div class="pz-sumbot">${bitChar('win')}</div></div>`,
    tiquet: s => `<div class="pz-tick"><div class="pz-tkl">${/^(tiquet de sortida|ticket de salida)/i.test(T(s.t)) ? '' : `<p class="pz-kick">${L('Tiquet de sortida', 'Ticket de salida')}</p>`}<h2>${esc(T(s.t))}</h2><ol class="pz-tq">${(s.punts || G.aval.ticket).map(p => `<li>${T(p)}</li>`).join('')}</ol></div><div class="pz-tkr"><b>${F.ui + 1}·${F.si + 1}</b><span>${L('Abans de marxar', 'Antes de irte')}</span></div></div>`
  };
  const DEFW = { map: ['.....', '>##..', '..#..', '..##F'] };   // l'illa de la portada i dels reptes

  function draw() {
    stopAll();
    const s = S[i], bl = blockOf(s.id), ph = bl ? bl.fase : 'inici';
    deck.innerHTML = `<div class="pz-stage c-${F.c.id} f-${ph} k-${s.k}" id="pzs">${deco(i)}<div class="pz-inner">${(R[s.k] || R.concepte)(s)}</div>
      <div class="pz-foot"><img src="img/brand/logo-tech-negatiu.svg" alt="Numi Tech"><span class="pz-ph">${phIco(ph)}${esc(T((PH[ph] || PH.inici).join('|')))}${bl ? ` <em>${bl.min} min</em>` : ''}</span>
        <div class="pz-dots">${S.map((_, k) => `<i class="${k === i ? 'on' : k < i ? 'done' : ''}"></i>`).join('')}</div><span class="pz-n">${i + 1}/${S.length}</span></div></div>
      <nav class="pz-ctl"><button onclick="PZ.go(-1)" aria-label="${L('Anterior', 'Anterior')}">‹</button><button onclick="PZ.go(1)" aria-label="${L('Següent', 'Siguiente')}">›</button>
        <button onclick="PZ.notes()" class="${notes ? 'on' : ''}" title="N">${L('Notes', 'Notas')}</button><button onclick="PZ.full()" title="F">⛶</button><button onclick="PZ.lang()">${LANG === 'es' ? 'CA' : 'ES'}</button></nav>
      ${notes ? `<aside class="pz-notes"><h3>${L('Notes per al professor', 'Notas para el profesor')}</h3>${s.nota ? `<p>${T(s.nota)}</p>` : ''}
        ${bl ? `<div class="pz-nb"><b>${esc(T(bl.t))} · ${bl.min} min · ${esc(T(bl.org || ''))}</b><p>${T(bl.fa)}</p>${bl.diu ? `<ul>${bl.diu.map(d => `<li>«${T(d)}»</li>`).join('')}</ul>` : ''}${bl.app ? `<p class="pz-app">📱 ${T(bl.app)}</p>` : ''}</div>` : ''}</aside>` : ''}`;
    fit(); shrink();
    const w = document.getElementById('pzw');
    if (s.k === 'robo' || s.robo) roboSlide(s);
    if (s.k === 'media' && typeof TMEDIA !== 'undefined' && TMEDIA[s.media.k] && TMEDIA[s.media.k].slideStart) TMEDIA[s.media.k].slideStart(document.getElementById('pzm'), s.media);
    const dart = document.querySelector('#pzm > .dart');   // el material digital s'amplia tant com hi càpiga
    if (dart) { const box = dart.parentElement; dart.style.zoom = 1; const z = Math.min(1.8, (box.clientWidth - 40) / dart.offsetWidth, (box.clientHeight - 30) / dart.offsetHeight); dart.style.zoom = Math.max(.6, z).toFixed(3); }
    if (w) { const spec = s.demo ? s.demo.w : DEFW; demo = world(w, spec, s.demo ? s._p : []); if (s.demo) { demo.fns = s._f; demo.evs = s._e; demo.press = s.demo.press; } }
    try { history.replaceState(null, '', `?s=${SID}&l=${LANG}&i=${i + 1}${notes ? '&n=1' : ''}`); } catch (e) { }
  }
  function stopAll() { clearInterval(timer); timer = null; if (demo) clearTimeout(demo.t); demo = null; if (RS) { cancelAnimationFrame(RS.raf); RS = null; } }
  // la diapositiva del simulador: arena en 3D (o 2D) i el programa; Executa / Reinicia
  let RS = null, R3P = null;
  function roboSlide(s) {
    const el = document.getElementById('pzr'); if (!el || typeof roboWorld !== 'function') return;
    const me = RS = { W: roboWorld(s.robo.w), prog: RQ(s.robo.prog) }; me.M = roboMachine(me.W, me.prog);
    const cv = el.querySelector('canvas'), paint = () => { if (me.b3) me.b3.sync(me.M.S); else roboPaint(cv, me.W, me.M.S, { w: el.clientWidth }); };
    paint();
    (R3P = R3P || import('./tech-robo3d.js').then(m => m.ok() ? m : null).catch(() => null)).then(M => { if (!M || RS !== me || !el.isConnected) return; try { me.b3 = M.create(el, me.W, me.M.S, {}); el.classList.add('on3d'); } catch (e) { } });
    me.reset = () => { cancelAnimationFrame(me.raf); me.W = roboWorld(s.robo.w); me.M = roboMachine(me.W, me.prog); if (me.b3) me.b3.reset(me.W, me.M.S); paint(); };
    me.run = () => { me.reset(); let last = performance.now(), acc = 0; const step = now => { if (RS !== me) return; acc += Math.min(100, now - last); last = now; let why = null; while (acc >= 10) { acc -= 10; roboSnap(me.W, me.M.S); me.M.tick(); if ((why = roboShouldEnd(me.M))) break; } paint(); if (!why) me.raf = requestAnimationFrame(step); }; me.raf = requestAnimationFrame(step); };
  }
  // l'escenari és de 1600×900 i s'escala a la finestra
  function fit() { const st = document.getElementById('pzs'); if (!st) return; const sc = Math.min(innerWidth / 1600, (innerHeight - (notes ? 0 : 0)) / 900) * (notes ? .72 : 1); st.style.transform = `scale(${sc})`; st.style.left = `${notes ? 16 : (innerWidth - 1600 * sc) / 2}px`; st.style.top = `${(innerHeight - 900 * sc) / 2}px`; }
  addEventListener('resize', fit);
  // si el contingut no hi cap (molts punts, codi llarg), la diapositiva es redueix fins al 72 %
  function shrink() { const inn = document.querySelector('.pz-inner'), c = inn && inn.firstElementChild; if (!c) return; c.style.zoom = 1; const h = c.scrollHeight, H = inn.clientHeight; if (h > H + 4) c.style.zoom = Math.max(.72, H / h).toFixed(3); }

  function demoStep() {
    if (!demo) return false;
    if (!demo.gen) { demo.S = bitSim(demo.W); demo.gen = demo.press ? bitEvGen(demo.W, demo.S, demo.prog, demo.fns, demo.evs, demo.press) : bitRun(demo.W, demo.S, demo.prog, demo.fns); demo.prev = null; if (demo.b3) demo.b3.reset(demo.W, demo.S); else { const svg = document.querySelector('#pzw .bitw'); if (svg) svg.outerHTML = bitSVG(demo.W, demo.S, { marks: true }); } demo.k = 0; }
    let r; do { r = demo.gen.next(); } while (!r.done && !r.value.act && !r.value.press && !demo.S.crash);
    document.querySelectorAll('.pz-b').forEach(c => c.classList.remove('now'));
    if (r.done) { demo.gen = null; const ok = !bitMiss(demo.W, demo.S); if (demo.b3) demo.b3.react(ok ? 'yay' : 'sad'); return false; }
    if (r.value.press) { const t = document.querySelector('.pz-dp .pz-tip'); if (t) t.classList.add('now'); return true; }
    const c = document.querySelector(`.pz-b[data-d="${r.value.b._d}"]`); if (c) c.classList.add('now', 'did');
    if (r.value.b.k === 'note' && typeof bitSnd === 'function') bitSnd('note', r.value.b.n);
    const hud = document.getElementById('pzhud'); if (hud) hud.innerHTML = bitHudHTML(demo.W, demo.S, demo.S.v !== 0);
    if (demo.b3) demo.b3.step(demo.S, demo.prev); else { const svg = document.querySelector('#pzw .bitw'); if (svg) bitPaintState(svg, demo.W, demo.S, demo.prev); }
    demo.prev = { x: demo.S.x, y: demo.S.y, d: demo.S.d, ang: demo.S.ang, carry: demo.S.carry, led: demo.S.led };
    if (demo.S.crash && demo.b3) demo.b3.react('hit');
    return !demo.S.crash;
  }
  window.PZ = {
    go(d) { const n = i + d; if (n < 0 || n >= S.length) return; i = n; draw(); },
    notes() { notes = !notes; draw(); }, full() { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(() => { }); },
    lang() { LANG = LANG === 'es' ? 'ca' : 'es'; document.documentElement.lang = LANG; draw(); },
    run() { if (!demo) return; clearTimeout(demo.t); demo.gen = null; document.querySelectorAll('.pz-b').forEach(c => c.classList.remove('did', 'now')); const tick = () => { if (demoStep()) demo.t = setTimeout(tick, 650); else document.querySelectorAll('.pz-b').forEach(c => c.classList.remove('now')); }; tick(); },
    step() { if (demo) { clearTimeout(demo.t); demoStep(); } },
    rrun() { if (RS) RS.run(); }, rreset() { if (RS) RS.reset(); },
    reset() { if (!demo) return; clearTimeout(demo.t); demo.gen = null; demo.S = bitSim(demo.W); if (demo.b3) demo.b3.reset(demo.W, demo.S); else { const svg = document.querySelector('#pzw .bitw'); if (svg) svg.outerHTML = bitSVG(demo.W, demo.S, { marks: true }); } const hud = document.getElementById('pzhud'); if (hud) hud.innerHTML = bitHudHTML(demo.W, demo.S, false); document.querySelectorAll('.pz-b').forEach(c => c.classList.remove('did', 'now')); },
    timer(min) { const el = document.getElementById('pztv'); if (!el) return; if (timer) { clearInterval(timer); timer = null; return; } let left = el.dataset.left ? +el.dataset.left : min * 60;
      const ring = document.getElementById('pzt'); ring.classList.add('run');
      timer = setInterval(() => { left--; el.dataset.left = left; ring.style.setProperty('--p', Math.max(0, left / (min * 60)).toFixed(4)); el.textContent = `${Math.floor(left / 60)}:${String(Math.max(0, left % 60)).padStart(2, '0')}`; if (left <= 0) { clearInterval(timer); timer = null; document.getElementById('pzt').classList.add('end'); } }, 1000); }
  };
  addEventListener('keydown', e => {
    if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); PZ.go(1); }
    else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); PZ.go(-1); }
    else if (e.key === 'n' || e.key === 'N') PZ.notes(); else if (e.key === 'f' || e.key === 'F') PZ.full();
    else if (e.key === 'e' || e.key === 'E') PZ.run();
  });
  draw();
})();
