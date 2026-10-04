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
  const ICON = { fwd: '⬆', left: '↶', right: '↷', pick: '📦', drop: '📬' };
  // mapa petit (2D, en blanc i negre net per imprimir): caselles, roques, bandera i en Bit amb la fletxa
  const mini = (w, cls = '') => { const W = bitWorld(w), S = bitSim(W); return `<div class="pmap ${cls}">${bitSVG(W, S, { marks: true, still: true })}</div>`; };
  const chips = p => `<div class="pchips">${TP(p).map(b => `<span class="pc c-${BIT_CAT[b.k]}">${ICON[b.k] || ''} ${bitLabel(b)}</span>`).join('')}</div>`;
  const pages = [];
  if (GUIDE) {
    const list = a => `<ul>${(a || []).map(v => `<li>${T(v)}</li>`).join('')}</ul>`;
    let t0 = 0;
    pages.push(`<section class="page guide">${head(L('Guia del professor', 'Guía del profesor'))}
      <h1>${esc(T(F.s.t))}</h1><p class="lead">60 min · ${L('classe guiada', 'clase guiada')}</p>
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
  } else {
    const sols = [];
    for (const pr of G.print) {
      if (pr.k === 'targetes') {
        const cards = pr.items.flatMap(it => Array.from({ length: it.n || 1 }, () => it.t));
        for (let k = 0; k < cards.length; k += 12) pages.push(`<section class="page">${head(T(pr.t))}${k ? '' : `<p class="intro">${T(pr.intro)}</p>`}<div class="cards">${cards.slice(k, k + 12).map(t => { const [txt, ...ic] = T(t).split(' '); const icon = ic.pop() || ''; const label = [txt, ...ic].join(' '); return `<div class="card"><span class="ci">${esc(icon)}</span><b>${esc(label)}</b></div>`; }).join('')}</div></section>`);
      }
      if (pr.k === 'quadricula') {
        pages.push(`<section class="page">${head(T(pr.t))}<p class="intro">${T(pr.intro)}</p><div class="missions">${pr.items.map((it, n) => `<div class="mission"><h3>${esc(T(it.t))}</h3>${mini({ map: it.cells })}<p>${T(it.instructions)}</p>${it.prog ? `<p class="small">${L('Programa', 'Programa')}:</p>${chips(it.prog)}` : ''}</div>`).join('')}</div></section>`);
        pr.items.forEach((it, n) => sols.push([T(pr.t) + ' · ' + T(it.t), it.sol ? (/^[flrpd ]+$/.test(it.sol) ? chips(it.sol) : T(it.sol)) : '']));
      }
      if (pr.k === 'fitxa') {
        pages.push(`<section class="page">${head(T(pr.t))}<p class="intro">${T(pr.intro)}</p><p class="name">${L('Nom', 'Nombre')}: ______________________________</p><div class="exs">${pr.items.map((it, n) => `<div class="ex"><span class="en">${n + 1}</span><div><p>${T(it.q)}</p>${it.w ? mini(it.w, 'sm') : ''}${it.prog ? chips(it.prog) : ''}<div class="ans"></div></div></div>`).join('')}</div></section>`);
        pr.items.forEach((it, n) => sols.push([`${T(pr.t)} · ${n + 1}`, `${T(it.sol || '')}${it.a ? ` <b>(${esc(it.a)})</b>` : ''}${it.solProg ? chips(it.solProg) : ''}`]));
      }
    }
    if (sols.length) pages.push(`<section class="page">${head(L('Solucionari (per al professor)', 'Solucionario (para el profesor)'))}<h2>${L('Solucionari', 'Solucionario')}</h2><table class="sol">${sols.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${b}</td></tr>`).join('')}</table></section>`);
  }
  doc.innerHTML = pages.join('');
  document.title = `${T(F.s.t)} · ${GUIDE ? L('Guia', 'Guía') : L('Fitxes', 'Fichas')} · Numi Tech`;
  document.querySelector('.pbar button').textContent = L('Imprimeix o desa en PDF', 'Imprimir o guardar en PDF');
})();
