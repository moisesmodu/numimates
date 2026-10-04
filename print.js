/* ===== Numi Tech · fitxes per imprimir (imprimeix.html?s=r1-1&l=ca) i guia del professor en PDF (&g=1) =====
   Pàgines A4: targetes per retallar, missions per a la quadrícula del terra, fitxes d'exercicis amb el solucionari
   al final, i la guia sencera de la sessió. Es fa servir el diàleg d'imprimir del navegador («Desa en PDF»). */
(function () {
  const q = new URLSearchParams(location.search), SID = q.get('s') || 'r1-1', GUIDE = q.get('g') === '1';
  LANG = q.get('l') === 'es' ? 'es' : 'ca'; document.documentElement.lang = LANG;
  const G = TGUIDE[SID], doc = document.getElementById('doc');
  const F = (() => { for (const c of TECH) for (const [ui, u] of c.units.entries()) for (const [si, s] of u.s.entries()) if (s.id === SID) return { c, u, ui, s, si }; return null; })();
  if (!G || !F) { doc.innerHTML = '<p>—</p>'; return; }
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const T = v => tx(v || ''), head = sub => `<header class="ph"><img src="img/brand/logo-tech.svg" alt="Numi Tech"><div><b>${esc(T(F.s.t))}</b><span>${esc(T(F.c.name))} · ${L('Unitat', 'Unidad')} ${F.ui + 1} · ${L('Sessió', 'Sesión')} ${F.si + 1}${sub ? ' · ' + esc(sub) : ''}</span></div></header>`;
  const ICON = { fwd: '⬆', left: '↶', right: '↷', pick: '📦', drop: '📬', rep: '🔁', until: '🔁', if: '❓', paint: '🖌', light: '💡', note: '🎵', call: '🧩', add: '➕', sub: '➖', setv: '🔢' };
  // mapa petit (2D, en blanc i negre net per imprimir): caselles, roques, bandera i en Bit amb la fletxa
  const mini = (w, cls = '') => { const W = bitWorld(w), S = bitSim(W); return `<div class="pmap ${cls}">${bitSVG(W, S, { marks: true, still: true })}</div>`; };
  // programa en paper: blocs en fila; els bucles i els «si» tanquen els seus blocs en un requadre
  const chipL = l => l.map(b => { const c = `<span class="pc c-${BIT_CAT[b.k]}">${ICON[b.k] || ''} ${bitLabel(b)}</span>`;
    return b.b ? `<span class="pcc c-${BIT_CAT[b.k]}">${c}<span class="pcin">${chipL(b.b)}</span>${b.e ? `<span class="pcel">${L('Si no', 'Si no')}</span><span class="pcin">${chipL(b.e)}</span>` : ''}</span>` : c; }).join('');
  const chips = (p, fns) => `<div class="pchips">${chipL(TQ(p))}</div>${fns ? Object.entries(fns).map(([f, v]) => `<div class="pchips pfn"><b>${L('Funció', 'Función')} ${esc(f)}:</b>${chipL(TQ(v))}</div>`).join('') : ''}`;
  // programes del simulador del Maqueen (tech-robo.js)
  const rchips = p => typeof RQ === 'function' && typeof rbDemoChips === 'function' ? `<div class="prchips">${rbDemoChips(RQ(p), {})}</div>` : '';
  const isProg = v => { if (typeof v !== 'string' && !Array.isArray(v)) return false; try { return TQ(v).length > 0; } catch (e) { return false; } };
  const pages = [];
  if (GUIDE) {
    const list = a => `<ul>${(a || []).map(v => `<li>${T(v)}</li>`).join('')}</ul>`;
    let t0 = 0;
    pages.push(`<section class="page guide">${head(L('Guia del professor', 'Guía del profesor'))}
      <h1>${esc(T(F.s.t))}</h1><p class="lead">60 min · ${L('classe guiada', 'clase guiada')}</p>
      ${G.intro ? `<div class="intro"><p>${T(G.intro)}</p>${G.claus ? `<h3>${L("Idees clau que han d'entendre", 'Ideas clave que deben entender')}</h3>${list(G.claus)}` : ''}${G.prev ? `<h3>${L('Què han de saber abans', 'Qué deben saber antes')}</h3>${list(G.prev)}` : ''}</div>` : ''}
      <div class="cols"><div><h2>${L('Objectius', 'Objetivos')}</h2>${list(G.obj)}</div><div><h2>${L('Competències', 'Competencias')}</h2>${list(G.comp)}</div></div>
      <h2>${L('Materials', 'Materiales')}</h2><div class="cols"><div><h3>${L("A l'aula", 'En el aula')}</h3>${list(G.mat.aula)}</div><div><h3>${L('Abans de la classe', 'Antes de la clase')}</h3>${list(G.mat.prep)}<h3>${L('Per imprimir', 'Para imprimir')}</h3>${list(G.mat.imprimir)}</div></div>
      <h2>${L('Vocabulari', 'Vocabulario')}</h2><dl>${G.vocab.map(([a, b]) => `<dt>${esc(T(a))}</dt><dd>${T(b)}</dd>`).join('')}</dl></section>`);
    pages.push(`<section class="page guide">${head(L('Pla de la classe', 'Plan de la clase'))}<h2>${L('Pla de la classe (60 minuts)', 'Plan de la clase (60 minutos)')}</h2>
      ${G.plan.map(p => { const a = t0; t0 += p.min; return `<div class="blk"><div class="bt">${a}′–${t0}′<small>${p.min} min</small></div><div><h3>${esc(T(p.t))} <small>· ${esc(T(p.org || ''))}</small></h3><p>${T(p.fa)}</p>${p.diu ? `<p class="say">${p.diu.map(d => `«${T(d)}»`).join(' ')}</p>` : ''}${p.app ? `<p class="app">💻 ${T(p.app)}</p>` : ''}</div></div>`; }).join('')}</section>`);
    pages.push(`<section class="page guide">${head(L('Errors, diversitat i avaluació', 'Errores, diversidad y evaluación'))}
      <h2>${L('Errors típics i com ajudar', 'Errores típicos y cómo ayudar')}</h2><table>${G.errors.map(([a, b]) => `<tr><td>${T(a)}</td><td>${T(b)}</td></tr>`).join('')}</table>
      <h2>${L('Atenció a la diversitat', 'Atención a la diversidad')}</h2><p><b>${L('Per als que acaben abans', 'Para los que acaban antes')}:</b> ${T(G.diff.mes)}</p><p><b>${L('Per als que necessiten suport', 'Para los que necesitan apoyo')}:</b> ${T(G.diff.menys)}</p>
      <h2>${L('Avaluació', 'Evaluación')}</h2><h3>${L('Tiquet de sortida', 'Ticket de salida')}</h3>${list(G.aval.ticket)}
      <table><tr><th>${L('Criteri', 'Criterio')}</th><th>${L('Assolit', 'Logrado')}</th><th>${L('En procés', 'En proceso')}</th></tr>${G.aval.rubric.map(r => `<tr>${r.map(v => `<td>${T(v)}</td>`).join('')}</tr>`).join('')}</table>
      <h2>${L('A casa', 'En casa')}</h2><p>${T(G.casa)}</p></section>`);
    if (G.faq || G.tec || G.seg || G.extra || G.trans) pages.push(`<section class="page guide">${head(L('Preguntes, imprevistos i més', 'Preguntas, imprevistos y más'))}
      ${G.faq ? `<h2>${L('Preguntes que faran (i com respondre-les)', 'Preguntas que harán (y cómo responderlas)')}</h2><dl>${G.faq.map(([a, b]) => `<dt>${esc(T(a))}</dt><dd>${T(b)}</dd>`).join('')}</dl>` : ''}
      ${G.tec ? `<h2>${L('Si alguna cosa falla', 'Si algo falla')}</h2><table>${G.tec.map(([a, b]) => `<tr><td>${T(a)}</td><td>${T(b)}</td></tr>`).join('')}</table>` : ''}
      ${G.seg ? `<h2>${L('Seguretat i benestar', 'Seguridad y bienestar')}</h2>${list(G.seg)}` : ''}${G.extra ? `<h2>${L('Per anar més enllà', 'Para ir más allá')}</h2>${list(G.extra)}` : ''}${G.trans ? `<h2>${L('Connexions', 'Conexiones')}</h2>${list(G.trans)}` : ''}</section>`);
    const SO = typeof TSOL !== 'undefined' && TSOL[SID], li = LANG === 'es' ? 1 : 0;
    if (SO) pages.push(`<section class="page guide sol">${head(L('Solucionari', 'Solucionario'))}<h2>${L('Solucionari de la sessió', 'Solucionario de la sesión')}</h2>
      <p class="intro">${L('La resposta de cada pas de l\'app, en ordre. Als reptes de programar és una solució possible: n\'hi pot haver d\'altres que també funcionin.', 'La respuesta de cada paso de la app, en orden. En los retos de programar es una solución posible: puede haber otras que también funcionen.')}</p>
      ${SO.map(r => `<div class="sorow"><div class="son"><b>${r.n}</b><small>${esc(r.k[li])}</small></div><div><p class="soq">${esc(r.q[li])}</p>${r.a[li]}</div></div>`).join('')}</section>`);
  } else {
    const sols = [];
    for (const pr of G.print) {
      if (pr.k === 'targetes') {
        const cards = pr.items.flatMap(it => Array.from({ length: it.n || 1 }, () => it.t));
        for (let k = 0; k < cards.length; k += 12) pages.push(`<section class="page">${head(T(pr.t))}${k ? '' : `<p class="intro">${T(pr.intro)}</p>`}<div class="cards">${cards.slice(k, k + 12).map(t => { const [txt, ...ic] = T(t).split(' '); const icon = ic.pop() || ''; const label = [txt, ...ic].join(' '); return `<div class="card"><span class="ci">${esc(icon)}</span><b>${esc(label)}</b></div>`; }).join('')}</div></section>`);
      }
      if (pr.k === 'quadricula') {
        pages.push(`<section class="page">${head(T(pr.t))}<p class="intro">${T(pr.intro)}</p><div class="missions">${pr.items.map((it, n) => `<div class="mission"><h3>${esc(T(it.t))}</h3>${mini({ map: it.cells })}<p>${T(it.instructions)}</p>${it.prog ? `<p class="small">${L('Programa', 'Programa')}:</p>${chips(it.prog, it.fns)}` : ''}</div>`).join('')}</div></section>`);
        pr.items.forEach((it, n) => sols.push([T(pr.t) + ' · ' + T(it.t), it.sol ? (isProg(it.sol) ? chips(it.sol, it.solFns) : T(it.sol)) : '']));
      }
      if (pr.k === 'fitxa') {
        pages.push(`<section class="page">${head(T(pr.t))}<p class="intro">${T(pr.intro)}</p><p class="name">${L('Nom', 'Nombre')}: ______________________________</p><div class="exs">${pr.items.map((it, n) => `<div class="ex"><span class="en">${n + 1}</span><div><p>${T(it.q)}</p>${it.w && it.w.map ? mini(it.w, 'sm') : ''}${it.w && !it.w.map ? `<canvas class="ppista sm" data-w='${esc(JSON.stringify(it.w))}'></canvas>` : ''}${it.prog ? chips(it.prog, it.fns) : ''}${it.rprog ? rchips(it.rprog) : ''}<div class="ans${it.big ? ' big' : ''}"></div></div></div>`).join('')}</div></section>`);
        pr.items.forEach((it, n) => sols.push([`${T(pr.t)} · ${n + 1}`, `${T(it.sol || '')}${it.a ? ` <b>(${esc(it.a)})</b>` : ''}${it.solProg ? chips(it.solProg, it.solFns) : ''}`]));
      }
      // graella buida per dissenyar un repte (amb la llegenda dels símbols)
      if (pr.k === 'graella') {
        const w = pr.w || 6, h = pr.h || 6, leg = pr.legend || [['🤖', "En Bit (dibuixa una fletxa cap on mira)|Bit (dibuja una flecha hacia donde mira)"], ['🚩', 'Bandera|Bandera'], ['⭐', 'Estrella|Estrella'], ['🪨', 'Roca|Roca'], ['🌊', 'Aigua|Agua'], ['📦', 'Caixa|Caja'], ['🏠', 'Casa|Casa']];
        pages.push(`<section class="page">${head(T(pr.t))}<p class="intro">${T(pr.intro)}</p><p class="name">${L('Nom', 'Nombre')}: ______________________________ &nbsp; ${L('Nom del repte', 'Nombre del reto')}: ______________________</p>
          <div class="pgrid" style="--w:${w};--h:${h}">${Array.from({ length: w * h }, () => '<i></i>').join('')}</div><div class="pleg">${leg.map(([i, t]) => `<span><b>${i}</b>${esc(T(t))}</span>`).join('')}</div>
          ${(pr.items || []).map(it => `<p class="pq">${T(it.q)}</p><div class="ans${it.big ? ' big' : ''}"></div>`).join('')}</section>`);
      }
      // la pista per construir al terra amb cinta (dibuix a escala amb les mides)
      if (pr.k === 'pista') pages.push(`<section class="page">${head(T(pr.t))}<p class="intro">${T(pr.intro)}</p><canvas class="ppista" data-w='${esc(JSON.stringify(pr.w))}'></canvas>
        <p class="small">${L(`Mides: ${pr.w.w || 120} × ${pr.w.h || 80} cm. Cada quadre del dibuix fa 10 × 10 cm. Cinta negra de 2 cm d'amplada.`, `Medidas: ${pr.w.w || 120} × ${pr.w.h || 80} cm. Cada cuadro del dibujo mide 10 × 10 cm. Cinta negra de 2 cm de ancho.`)}</p>
        ${(pr.items || []).map(it => `<p class="pq">${T(it.q)}</p>${it.big === false ? '' : '<div class="ans"></div>'}`).join('')}</section>`);
      // el codi de MakeCode per passar el programa al robot de veritat
      if (pr.k === 'codi' && typeof roboMC === 'function') pages.push(`<section class="page">${head(T(pr.t))}<p class="intro">${T(pr.intro)}</p>${pr.items.map(it => `<h3>${esc(T(it.t))}</h3>${rchips(it.prog)}<pre class="pcode">${esc(roboMC(RQ(it.prog)))}</pre>`).join('')}</section>`);
      // diploma del curs (el professor escriu el nom)
      if (pr.k === 'diploma') {
        pages.push(`<section class="page dip"><div class="dipin"><img src="img/brand/logo-tech.svg" alt="Numi Tech"><p class="dk">${L('Diploma', 'Diploma')}</p><h1>${esc(T(F.c.name))}</h1>
          <p>${L('Aquest diploma reconeix que', 'Este diploma reconoce que')}</p><div class="dline"></div><p>${T(pr.intro)}</p>
          ${pr.items && pr.items.length ? `<ul class="dl2">${pr.items.map(it => `<li>✓ ${T(it.t || it)}</li>`).join('')}</ul>` : ''}
          <div class="dsig"><div><div class="dline sm"></div><small>${L('Professor/a', 'Profesor/a')}</small></div><div><div class="dline sm"></div><small>${L('Data', 'Fecha')}</small></div></div>
          <img class="dbit" src="img/tech/bit-win.webp" alt=""></div></section>`);
      }
    }
    if (sols.length) pages.push(`<section class="page">${head(L('Solucionari (per al professor)', 'Solucionario (para el profesor)'))}<h2>${L('Solucionari', 'Solucionario')}</h2><table class="sol">${sols.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${b}</td></tr>`).join('')}</table></section>`);
  }
  doc.innerHTML = pages.join('');
  document.querySelectorAll('canvas.ppista').forEach(cv => { if (typeof roboPaint !== 'function') return; const w = JSON.parse(cv.dataset.w), W = roboWorld(w), S = roboSim(W); roboPaint(cv, W, S, { w: cv.classList.contains('sm') ? 300 : 700, sonar: false, trail: false }); cv.style.width = '100%'; cv.style.height = 'auto'; });
  document.title = `${T(F.s.t)} · ${GUIDE ? L('Guia', 'Guía') : L('Fitxes', 'Fichas')} · Numi Tech`;
  document.querySelector('.pbar button').textContent = L('Imprimeix o desa en PDF', 'Imprimir o guardar en PDF');
})();
