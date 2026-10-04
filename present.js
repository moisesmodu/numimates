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
  const S = G.slides, PH = { inici: ['Inici', 'Inicio'], teoria: ['Teoria', 'Teoría'], desconnectat: ['Sense pantalla', 'Sin pantalla'], ordinador: ["A l'ordinador", 'En el ordenador'], crea: ['Crea', 'Crea'], tancament: ['Tancament', 'Cierre'] };
  const blockOf = id => G.plan.find(p => (p.slides || []).includes(id)) || null;
  let i = Math.max(0, Math.min(S.length - 1, (+q.get('i') || 1) - 1)), notes = q.get('n') === '1', timer = null, demo = null, b3 = null, B3M = null;
  const load3d = () => B3M ? Promise.resolve(B3M) : import('./tech-3d.js').then(m => (B3M = m.ok() ? m : null)).catch(() => null);
  document.title = `${T(F.s.t)} · Numi Tech`;

  // el món d'una demostració o de la portada: en 3D si es pot; si no, el dibuix 2D
  function world(el, spec, prog) {
    const W = bitWorld(spec), Sim = bitSim(W);
    el.innerHTML = `<div class="pz-w2d">${bitSVG(W, Sim, { marks: true })}</div>`;
    const st = { W, S: Sim, prog, gen: null, prev: null, b3: null };
    load3d().then(M => { if (!M || !el.isConnected) return; try { st.b3 = M.create(el, W, Sim, {}); el.classList.add('on3d'); if (Object.keys(W.marks).length) st.b3.marks(true); } catch (e) { } });
    return st;
  }
  const chip = (b, k) => `<span class="pz-b c-${BIT_CAT[b.k]}" data-i="${k}"><span class="tbi">${BIT_ICO[b.k]}</span>${bitLabel(b)}</span>`;
  const progOf = s => TP(s);

  const R = {
    portada: s => `<div class="pz-cover"><div class="pz-cl"><p class="pz-kick">${esc(T(F.c.name))} · ${L('Unitat', 'Unidad')} ${F.ui + 1} · ${L('Sessió', 'Sesión')} ${F.si + 1}</p>
        <h1>${esc(T(s.t))}</h1>${s.x ? `<p class="pz-lead">${T(s.x)}</p>` : ''}<div class="pz-obj"><b>${L('Al final de la sessió, cada alumne/a…', 'Al final de la sesión, cada alumno/a…')}</b><ul>${G.obj.slice(0, 3).map(o => `<li>${esc(T(o).replace(/^L'alumne\/a |^El alumno\/a /, ''))}</li>`).join('')}</ul></div></div>
      <div class="pz-cr"><div class="pz-3d" id="pzw"></div></div></div>`,
    pregunta: s => `<div class="pz-q"><div class="pz-qbot">${bitChar('idle')}</div><div class="pz-qb"><h2>${esc(T(s.t))}</h2>${s.x ? `<p>${T(s.x)}</p>` : ''}${s.punts ? `<ul class="pz-pts">${s.punts.map(p => `<li>${T(p)}</li>`).join('')}</ul>` : ''}</div></div>`,
    repas: s => R.pregunta(s),
    concepte: s => `<div class="pz-two"><div><h2>${esc(T(s.t))}</h2>${s.x ? `<p class="pz-lead">${T(s.x)}</p>` : ''}${s.punts ? `<ul class="pz-pts big">${s.punts.map(p => `<li>${T(p)}</li>`).join('')}</ul>` : ''}</div>
      <div class="pz-art">${s.anim && TANI[s.anim] ? TANI[s.anim]() : s.demo ? '<div class="pz-3d" id="pzw"></div>' : bitChar('happy')}</div></div>`,
    anim: s => `<div class="pz-anim"><h2>${esc(T(s.t))}</h2><div class="pz-ab">${TANI[s.anim] ? TANI[s.anim]() : ''}</div>${s.x ? `<p class="pz-lead c">${T(s.x)}</p>` : ''}</div>`,
    demo: s => { const p = progOf(s.demo.prog); return `<div class="pz-demo"><div class="pz-dh"><h2>${esc(T(s.t))}</h2>${s.x ? `<p class="pz-lead">${T(s.x)}</p>` : ''}</div>
      <div class="pz-db"><div class="pz-3d" id="pzw"></div><div class="pz-dp"><b>${L('Programa', 'Programa')}</b><div class="pz-chips">${p.map(chip).join('')}</div>
        <div class="pz-dbt"><button class="pz-btn go" onclick="PZ.run()">▶ ${L('Executa', 'Ejecuta')}</button><button class="pz-btn" onclick="PZ.step()">${L('Pas a pas', 'Paso a paso')}</button><button class="pz-btn" onclick="PZ.reset()">↺</button></div>
        <p class="pz-tip">${L('Abans d’executar: on creieu que acabarà en Bit?', 'Antes de ejecutar: ¿dónde creéis que terminará Bit?')}</p></div></div></div>`; },
    activitat: s => `<div class="pz-act"><div><p class="pz-kick">${esc(T((PH[(blockOf(s.id) || {}).fase] || PH.inici).join('|')))}</p><h2>${esc(T(s.t))}</h2>${s.x ? `<p class="pz-lead">${T(s.x)}</p>` : ''}
        ${s.punts ? `<ol class="pz-steps">${s.punts.map(p => `<li>${T(p)}</li>`).join('')}</ol>` : ''}</div>
      <div class="pz-side">${s.timer ? `<button class="pz-timer" id="pzt" onclick="PZ.timer(${s.timer})"><span id="pztv">${s.timer}:00</span><small>${L('Toca per començar', 'Toca para empezar')}</small></button>` : `<div class="pz-art">${bitChar('dance')}</div>`}</div></div>`,
    repte: s => `<div class="pz-act"><div><p class="pz-kick">${L("A l'ordinador", 'En el ordenador')}</p><h2>${esc(T(s.t))}</h2>${s.x ? `<p class="pz-lead">${T(s.x)}</p>` : ''}${s.punts ? `<ul class="pz-pts big">${s.punts.map(p => `<li>${T(p)}</li>`).join('')}</ul>` : ''}</div>
      <div class="pz-side"><div class="pz-laptop"><div class="pz-scr"><img src="img/brand/logo-tech.svg" alt=""><div class="pz-3d" id="pzw"></div></div><div class="pz-base"></div></div>${s.timer ? `<button class="pz-timer sm" id="pzt" onclick="PZ.timer(${s.timer})"><span id="pztv">${s.timer}:00</span></button>` : ''}</div></div>`,
    video: s => R.concepte(s),
    resum: s => `<div class="pz-sum"><h2>${esc(T(s.t))}</h2><ul class="pz-checks">${(s.punts || [s.x]).filter(Boolean).map(p => `<li><span>✓</span>${T(p)}</li>`).join('')}</ul><div class="pz-sumbot">${bitChar('win')}</div></div>`,
    tiquet: s => `<div class="pz-sum"><p class="pz-kick">${L('Tiquet de sortida', 'Ticket de salida')}</p><h2>${esc(T(s.t))}</h2><ol class="pz-tq">${(s.punts || G.aval.ticket).map(p => `<li>${T(p)}</li>`).join('')}</ol></div>`
  };
  const DEFW = { map: ['.....', '>##..', '..#..', '..##F'] };   // l'illa de la portada i dels reptes

  function draw() {
    stopAll();
    const s = S[i], bl = blockOf(s.id), ph = bl ? bl.fase : 'inici';
    deck.innerHTML = `<div class="pz-stage f-${ph} k-${s.k}" id="pzs"><div class="pz-inner">${(R[s.k] || R.concepte)(s)}</div>
      <div class="pz-foot"><img src="img/brand/logo-tech-negatiu.svg" alt="Numi Tech"><span class="pz-ph">${esc(T((PH[ph] || PH.inici).join('|')))}${bl ? ` · ${bl.min} min` : ''}</span>
        <div class="pz-dots">${S.map((_, k) => `<i class="${k === i ? 'on' : k < i ? 'done' : ''}"></i>`).join('')}</div><span class="pz-n">${i + 1}/${S.length}</span></div></div>
      <nav class="pz-ctl"><button onclick="PZ.go(-1)" aria-label="${L('Anterior', 'Anterior')}">‹</button><button onclick="PZ.go(1)" aria-label="${L('Següent', 'Siguiente')}">›</button>
        <button onclick="PZ.notes()" class="${notes ? 'on' : ''}" title="N">${L('Notes', 'Notas')}</button><button onclick="PZ.full()" title="F">⛶</button><button onclick="PZ.lang()">${LANG === 'es' ? 'CA' : 'ES'}</button></nav>
      ${notes ? `<aside class="pz-notes"><h3>${L('Notes per al professor', 'Notas para el profesor')}</h3>${s.nota ? `<p>${T(s.nota)}</p>` : ''}
        ${bl ? `<div class="pz-nb"><b>${esc(T(bl.t))} · ${bl.min} min · ${esc(T(bl.org || ''))}</b><p>${T(bl.fa)}</p>${bl.diu ? `<ul>${bl.diu.map(d => `<li>«${T(d)}»</li>`).join('')}</ul>` : ''}${bl.app ? `<p class="pz-app">📱 ${T(bl.app)}</p>` : ''}</div>` : ''}</aside>` : ''}`;
    fit();
    const w = document.getElementById('pzw');
    if (w) { const spec = s.demo ? s.demo.w : DEFW; demo = world(w, spec, s.demo ? progOf(s.demo.prog) : []); }
    try { history.replaceState(null, '', `?s=${SID}&l=${LANG}&i=${i + 1}${notes ? '&n=1' : ''}`); } catch (e) { }
  }
  function stopAll() { clearInterval(timer); timer = null; if (demo) clearTimeout(demo.t); demo = null; }
  // l'escenari és de 1600×900 i s'escala a la finestra
  function fit() { const st = document.getElementById('pzs'); if (!st) return; const sc = Math.min(innerWidth / 1600, (innerHeight - (notes ? 0 : 0)) / 900) * (notes ? .72 : 1); st.style.transform = `scale(${sc})`; st.style.left = `${notes ? 16 : (innerWidth - 1600 * sc) / 2}px`; st.style.top = `${(innerHeight - 900 * sc) / 2}px`; }
  addEventListener('resize', fit);

  function demoStep() {
    if (!demo) return false;
    if (!demo.gen) { demo.S = bitSim(demo.W); demo.gen = bitRun(demo.W, demo.S, demo.prog); demo.prev = null; if (demo.b3) demo.b3.reset(demo.W, demo.S); demo.k = 0; }
    let r; do { r = demo.gen.next(); } while (!r.done && !r.value.act && !demo.S.crash);
    document.querySelectorAll('.pz-b').forEach(c => c.classList.remove('now'));
    if (r.done) { demo.gen = null; const ok = !bitMiss(demo.W, demo.S); if (demo.b3) demo.b3.react(ok ? 'yay' : 'sad'); return false; }
    const idx = demo.prog.indexOf(r.value.b); const c = document.querySelector(`.pz-b[data-i="${idx}"]`); if (c) c.classList.add('now', 'did');
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
    reset() { if (!demo) return; clearTimeout(demo.t); demo.gen = null; demo.S = bitSim(demo.W); if (demo.b3) demo.b3.reset(demo.W, demo.S); document.querySelectorAll('.pz-b').forEach(c => c.classList.remove('did', 'now')); },
    timer(min) { const el = document.getElementById('pztv'); if (!el) return; if (timer) { clearInterval(timer); timer = null; return; } let left = el.dataset.left ? +el.dataset.left : min * 60;
      timer = setInterval(() => { left--; el.dataset.left = left; el.textContent = `${Math.floor(left / 60)}:${String(Math.max(0, left % 60)).padStart(2, '0')}`; if (left <= 0) { clearInterval(timer); timer = null; document.getElementById('pzt').classList.add('end'); } }, 1000); }
  };
  addEventListener('keydown', e => {
    if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); PZ.go(1); }
    else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); PZ.go(-1); }
    else if (e.key === 'n' || e.key === 'N') PZ.notes(); else if (e.key === 'f' || e.key === 'F') PZ.full();
    else if (e.key === 'e' || e.key === 'E') PZ.run();
  });
  draw();
})();
