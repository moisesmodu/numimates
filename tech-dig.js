/* ===== Numi Tech · Digital: activitats de ciutadania digital =====
   Simulacions segures per practicar sense riscos: un laboratori de contrasenyes (no es desa res del que s'hi escriu),
   missatges i webs falsos per trobar-hi les pistes, classificar, converses amb decisions, entrenar una petita
   intel·ligència artificial i configurar la privadesa d'un perfil. Tot és inventat i propi de Numi: cap marca, cap
   persona ni cap web reals.
   Tipus de pas: dpass · dspot · dsort · dchat · dai · dpriv */

/* ---------- Laboratori de contrasenyes ----------
   Valoració qualitativa i honesta (sense xifres inventades): llargada, varietat de caràcters, paraules massa
   conegudes, repeticions i seqüències, i dades personals que algú podria endevinar. */
const DIG_COMMON = ['1234', '12345', '123456', '1234567', '12345678', 'password', 'contrasenya', 'contraseña', 'qwerty', 'abc123', 'hola', 'barcelona', 'lleida', 'futbol', 'fútbol', 'messi', 'iloveyou', 'teamo', 'admin', 'usuario', 'usuari', '0000', '1111', 'aaaa', 'asdf', 'numi', 'mates', 'gat', 'gos', 'perro', 'gato'];
function digPass(pw, personal = []) {
  const s = String(pw || ''), low = s.toLowerCase(), why = [];
  const sets = [/[a-z]/.test(s), /[A-Z]/.test(s), /\d/.test(s), /[^\w\s]|_/.test(s), /\s/.test(s)].filter(Boolean).length;
  const words = s.trim().split(/[\s\-_.]+/).filter(w => w.length >= 3);
  let score = 0;
  if (s.length >= 8) score++; if (s.length >= 12) score++; if (s.length >= 16) score++;
  if (sets >= 2) score++; if (sets >= 3) score++;
  if (words.length >= 3 && s.length >= 15) score++;   // frase de contrasenya: diverses paraules
  const common = DIG_COMMON.find(c => low === c || (c.length >= 4 && low.includes(c)));
  const seq = /(.)\1\1/.test(s) || /(0123|1234|2345|3456|4567|5678|6789|abcd|qwer|asdf)/i.test(s);
  const pers = personal.filter(Boolean).map(x => String(x).toLowerCase()).find(x => x.length >= 3 && low.includes(x));
  const phrase = words.length >= 3 && s.length >= 15;   // en una frase llarga de paraules, una paraula comuna no la fa feble
  if (/^[A-Za-zÀ-ÿ]{3,}[-_.]?(19|20)\d\d[!.?]*$/.test(s)) { score = Math.min(score, 1); why.push(L('És un nom amb un any (Rufus2015, Marc2014…): és dels primers que es proven.', 'Es un nombre con un año (Rufus2015, Marc2014…): es de lo primero que se prueba.')); }
  if (common && !phrase) { score = Math.min(score, 1); why.push(L(`Conté «${esc(common)}», que és de les primeres coses que es proven.`, `Contiene «${esc(common)}», que es de lo primero que se prueba.`)); }
  if (seq) { score = Math.max(0, score - 1); why.push(L('Té repeticions o seqüències (aaa, 1234…): són fàcils d\'endevinar.', 'Tiene repeticiones o secuencias (aaa, 1234…): son fáciles de adivinar.')); }
  if (pers) { score = Math.min(score, 1); why.push(L('Conté una dada personal (un nom, el lloc on vius…): qui et coneix la podria endevinar.', 'Contiene un dato personal (un nombre, el sitio donde vives…): quien te conoce podría adivinarla.')); }
  if (s.length < 8) why.push(L('És curta: com més llarga, més difícil d\'endevinar.', 'Es corta: cuanto más larga, más difícil de adivinar.'));
  if (sets < 3 && s.length < 16) why.push(L('Barreja més tipus de caràcters (majúscules, números, símbols) o fes-la molt més llarga.', 'Mezcla más tipos de caracteres (mayúsculas, números, símbolos) o hazla mucho más larga.'));
  if (!why.length) why.push(words.length >= 3 ? L('És una frase llarga i poc habitual: forta i fàcil de recordar.', 'Es una frase larga y poco habitual: fuerte y fácil de recordar.') : L('Llarga i variada: molt bé.', 'Larga y variada: muy bien.'));
  const lv = Math.max(0, Math.min(4, score - (s.length < 6 ? 2 : 0)));
  return { lv, why, len: s.length, sets };
}
const DIG_LV = [['Molt feble', 'Muy débil', '#EF5A5A'], ['Feble', 'Débil', '#F08A24'], ['Acceptable', 'Aceptable', '#F2B21B'], ['Forta', 'Fuerte', '#3CC47C'], ['Molt forta', 'Muy fuerte', '#1E8A50']];
/* ---------- Comprovacions per al validador ---------- */
var TVALID = typeof TVALID !== 'undefined' ? TVALID : {};
TVALID.dpass = st => { const out = []; if (st.need == null) out.push('falta need (nivell mínim 0-4)'); if (st.sol && digPass(st.sol, st.personal).lv < st.need) out.push('la contrasenya d\'exemple (sol) no arriba al nivell'); return out; };
TVALID.dspot = st => { const out = [], n = (String(st.html || '').match(/data-clue="/g) || []).length; if (!st.html) out.push('falta l\'artefacte (html)'); if (n < (st.need || 1)) out.push(`hi ha ${n} pistes (data-clue) i en cal trobar ${st.need || 1}`); for (const k of (String(st.html).match(/data-clue="([^"]+)"/g) || []).map(x => x.slice(11, -1))) if (!st.clues || !st.clues[k]) out.push(`la pista «${k}» no té explicació a clues`); return out; };
TVALID.dsort = st => { const out = []; if (!st.bins || st.bins.length < 2) out.push('calen almenys 2 calaixos (bins)'); (st.items || []).forEach((it, i) => { if (!(it.b >= 0 && it.b < (st.bins || []).length)) out.push(`l'element ${i + 1} té un calaix (b) incorrecte`); }); if ((st.items || []).length < 4) out.push('calen almenys 4 elements'); return out; };
TVALID.dchat = st => { const out = [], ids = new Set((st.nodes || []).map(n => n.id)); if (!ids.has(st.start || 'a')) out.push('falta el node d\'inici'); for (const n of st.nodes || []) for (const o of n.opts || []) if (o.go && !ids.has(o.go)) out.push(`el node ${n.id} va a «${o.go}», que no existeix`); if (!(st.nodes || []).some(n => n.end)) out.push('cap node final (end)'); return out; };
TVALID.dai = st => { const out = []; if (!st.labels || st.labels.length < 2) out.push('calen almenys 2 etiquetes'); if (!(st.train || []).length || !(st.test || []).length) out.push('calen exemples d\'entrenament i de prova'); for (const it of [...(st.train || []), ...(st.test || [])]) if (!it.f || it.f.length !== (st.feats || []).length) out.push(`«${it.e}» no té les ${(st.feats || []).length} característiques`); return out; };
TVALID.dpriv = st => { const out = []; if (!(st.fields || []).length) out.push('falten els camps (fields)'); for (const f of st.fields || []) if (!['me', 'friends', 'all'].includes(f.ok) && !Array.isArray(f.ok)) out.push(`el camp ${f.k} no té ok`); return out; };

/* =====================================================================================================================
   Interfície dels passos
   ===================================================================================================================== */
const digQ = st => `<div class="tqh"><span class="tqbit">${bitChar(st.mood || 'think')}</span><h2 class="tsq">${tval(st.q)}</h2></div>`;
if (typeof TSTEP !== 'undefined') {
  // dpass: { q, need: 3, personal?: ['laia'], tip?, sol? } — el que s'escriu NO es desa ni s'envia enlloc
  TSTEP.dpass = function (st) {
    const pers = [...(st.personal || []), P && P.name, P && P.username];
    $('#tsb').innerHTML = `<div class="tcol">${digQ(st)}<div class="dpass"><p class="dwarn">🔒 ${L("És una prova: no escriguis mai aquí la teva contrasenya de veritat. No es desa ni s'envia enlloc.", 'Es una prueba: no escribas nunca aquí tu contraseña de verdad. No se guarda ni se envía a ningún sitio.')}</p>
      <div class="dpin"><input id="dpw" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${L('Escriu una contrasenya de prova', 'Escribe una contraseña de prueba')}"></div>
      <div class="dmeter"><i id="dmb"></i></div><div class="dlv" id="dlv"></div><ul class="dwhy" id="dwhy"></ul>
      ${st.tip ? `<p class="ttip">${tval(st.tip)}</p>` : ''}</div></div>`;
    const inp = $('#dpw'), upd = () => { const r = digPass(inp.value, pers), c = DIG_LV[r.lv]; $('#dmb').style.cssText = `width:${inp.value ? 20 + r.lv * 20 : 0}%;background:${c[2]}`; $('#dlv').innerHTML = inp.value ? `<b style="color:${c[2]}">${L(c[0], c[1])}</b> · ${r.len} ${L('caràcters', 'caracteres')}` : '';
      $('#dwhy').innerHTML = inp.value ? r.why.map(w => `<li>${w}</li>`).join('') : ''; tFoot(L('Continua', 'Continúa'), () => { addXPsafe(3); tNext(); }, r.lv >= (st.need ?? 3)); if (r.lv >= (st.need ?? 3) && !upd.done) { upd.done = 1; SFX.ok && SFX.ok(); } };
    inp.oninput = upd; upd(); setTimeout(() => inp.focus(), 80);
  };
  // dspot: { q, kind: 'sms'|'mail'|'web'|'post'|'news'|'chat', html (amb <span data-clue="clau">…</span>), clues: { clau: 'per què|por qué' }, need, ex? }
  TSTEP.dspot = function (st) {
    const found = new Set(), need = st.need || Object.keys(st.clues).length;
    $('#tsb').innerHTML = `<div class="tcol">${digQ(st)}<div class="dart k-${st.kind || 'mail'}">${digFrame(st)}</div><p class="dcnt" id="dcnt"></p><div class="dclues" id="dclues"></div></div>`;
    const upd = () => { $('#dcnt').innerHTML = L(`Pistes trobades: <b>${Math.min(found.size, need)}</b> de ${need}`, `Pistas encontradas: <b>${Math.min(found.size, need)}</b> de ${need}`); tFoot(L('Continua', 'Continúa'), () => { addXPsafe(3); tNext(); }, found.size >= need); };
    document.querySelectorAll('.dart [data-clue]').forEach(e => e.onclick = ev => { ev.preventDefault(); ev.stopPropagation(); const k = e.dataset.clue; if (found.has(k)) return; found.add(k); e.classList.add('found'); SFX.ok && SFX.ok();
      $('#dclues').insertAdjacentHTML('beforeend', `<div class="dclue"><span>🔎</span><div>${tval(st.clues[k])}</div></div>`); upd(); if (found.size === need && st.ex) $('#dclues').insertAdjacentHTML('beforeend', `<div class="tfbox ok"><b>${L('Molt bé!', '¡Muy bien!')}</b> ${tval(st.ex)}</div>`); });
    document.querySelector('.dart').addEventListener('click', e => { if (e.target.closest('[data-clue]')) return; const t = e.target.closest('.dbody, .dmsg, .dweb'); if (t) { t.classList.remove('nope'); void t.offsetWidth; t.classList.add('nope'); } });
    upd();
  };
  // dsort: { q, bins: ['ca|es', …], items: [{ t: 'text|texto', b: 0, ex? , ico? }] } — es toca un element i després el calaix
  TSTEP.dsort = function (st) {
    // classificar arrossegant (ratolí o dit) les targetes a cada calaix; també es pot tocar la targeta i després el calaix
    const order = shuffle(st.items.map((_, i) => i)), put = {}, COL = st.binCol || ['#3D7BF4', '#8B5CF6', '#E8812A', '#14A3B8'];
    let sel = null, phase = 'sort', wrong = [];
    const icoOf = it => it.ico || ((tval(it.t).match(/^\p{Extended_Pictographic}️?/u) || [])[0] || '');
    const txtOf = it => { const t = tval(it.t); return it.ico ? t : t.replace(/^\p{Extended_Pictographic}️?\s*/u, ''); };
    // al mòbil (o amb moltes targetes llargues) les targetes surten d'una en una, com un munt de cartes: així tot cap a la pantalla
    const deck = innerWidth < 600 || st.items.length > 8 || st.items.reduce((n, it) => n + txtOf(it).length, 0) > 260;
    const card = (i, sm, cls = '') => { const it = st.items[i], ic = icoOf(it), k = put[i], st2 = phase !== 'sort' && k != null ? (it.b === k ? 'ok' : 'ko') : '', mini = sm && deck && ic;
      return `<div class="dcard ${sm ? 'sm' : ''} ${mini ? 'mini' : ''} ${cls} ${sel === i && !deck ? 'on' : ''} ${st2}" data-i="${i}" role="button" tabindex="0" ${mini ? `title="${esc(txtOf(it).replace(/<[^>]+>/g, ''))}"` : ''}>${ic ? `<span class="dci">${ic}</span>` : ''}${mini ? '' : `<span class="dct">${txtOf(it)}</span>`}${st2 === 'ok' ? '<i class="dcm">✓</i>' : st2 === 'ko' ? '<i class="dcm">✕</i>' : ''}</div>`; };
    const draw = () => {
      const left = order.filter(i => put[i] == null), done = st.items.length - left.length;
      if (deck) sel = left.length && phase === 'sort' ? left[0] : null;
      $('#tsb').innerHTML = `<div class="tcol dsortw">${digQ(st)}
        <div class="dprog"><span style="width:${100 * done / st.items.length}%"></span><b>${done} / ${st.items.length}</b></div>
        <div class="tfb" id="tfb"></div>
        ${left.length && deck ? `<div class="ddeck"><div class="dstk">${left.length > 2 ? '<i class="dsh d2"></i>' : ''}${left.length > 1 ? '<i class="dsh d1"></i>' : ''}${card(left[0], false, 'big')}</div><p class="dhint">${L(`Queden <b>${left.length}</b>. Arrossega la targeta al calaix que toca, o toca el calaix.`, `Quedan <b>${left.length}</b>. Arrastra la tarjeta a la caja que toca, o toca la caja.`)}</p></div>`
          : left.length ? `<p class="dhint">${L('Arrossega cada targeta al calaix que toca (o toca-la i després el calaix).', 'Arrastra cada tarjeta a la caja que toca (o tócala y luego la caja).')}</p><div class="dpool">${left.map(i => card(i)).join('')}</div>` : phase === 'sort' ? `<div class="dpool empty"><p class="tempty">${L('Ja els has posat tots! Toca «Comprova».', '¡Ya los has puesto todos! Toca «Comprueba».')}</p></div>` : ''}
        <div class="dbins b${st.bins.length}${deck ? ' deckb' : ''}">${st.bins.map((b, k) => { const n = order.filter(i => put[i] === k).length;
          return `<div class="dbin" data-b="${k}" style="--bc:${COL[k % COL.length]}"><div class="dbh">${(st.binIco || [])[k] ? `<span class="dbi">${st.binIco[k]}</span>` : ''}<b>${tval(b)}</b><em>${n}</em></div><div class="dbl">${order.filter(i => put[i] === k).map(i => card(i, true)).join('') || `<p class="dbe">${deck ? L('Toca per posar-hi la targeta', 'Toca para poner la tarjeta') : L('Arrossega-hi targetes', 'Arrastra tarjetas aquí')}</p>`}</div></div>`; }).join('')}</div></div>`;
      wire();
      const all = left.length === 0;
      if (phase === 'sort') tFoot(L('Comprova', 'Comprueba'), check, all);
      else if (phase === 'retry') tFoot(L('Torna-ho a provar', 'Vuelve a intentarlo'), () => { wrong.forEach(i => delete put[i]); wrong = []; phase = 'sort'; draw(); }, true);
    };
    const place = (i, k) => { if (k == null) delete put[i]; else put[i] = k; sel = null; SFX.tap && SFX.tap(); draw();
      const e = document.querySelector(`.dbin[data-b="${k}"] .dcard[data-i="${i}"]`); if (e) { e.classList.add('drop'); setTimeout(() => e.classList.remove('drop'), 400); } };
    const check = () => {
      wrong = st.items.map((_, i) => i).filter(i => put[i] !== st.items[i].b);
      const first = !TSS.tried; TSS.tried = true;
      if (!wrong.length) { phase = 'done'; if (first) TSS.ok++; SFX.ok && SFX.ok(); typeof confetti === 'function' && confetti(60); draw();
        $('#tfb').innerHTML = `<div class="tfbox ok"><b>${L('Perfecte! Tot ben classificat.', '¡Perfecto! Todo bien clasificado.')}</b>${st.ex ? ' ' + tval(st.ex) : ''}${st.items.some(it => it.ex) ? `<ul>${st.items.filter(it => it.ex).map(it => `<li><b>${txtOf(it)}</b> → ${tval(st.bins[it.b])}: ${tval(it.ex)}</li>`).join('')}</ul>` : ''}</div>`;
        TSS.ready = true; tContinue(); return; }
      phase = 'retry'; SFX.ko && SFX.ko(); draw();
      $('#tfb').innerHTML = `<div class="tfbox ko"><b>${L(`${st.items.length - wrong.length} de ${st.items.length} ben classificats. Mira per què:`, `${st.items.length - wrong.length} de ${st.items.length} bien clasificados. Mira por qué:`)}</b><ul>${wrong.map(i => { const it = st.items[i]; return `<li><b>${txtOf(it)}</b> ${L('va a', 'va a')} <b>${tval(st.bins[it.b])}</b>${it.ex ? ': ' + tval(it.ex) : ''}</li>`; }).join('')}</ul></div>`;
      document.querySelectorAll('.dcard.ko').forEach(e => e.classList.add('shake'));
    };
    // arrossegar: una còpia de la targeta segueix el dit; el calaix de sota s'il·lumina
    const wire = () => {
      const bins = [...document.querySelectorAll('.dbin')];
      document.querySelectorAll('.dsortw .dcard').forEach(e => {
        const i = +e.dataset.i;
        e.onkeydown = ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); e.click(); } };
        e.onpointerdown = ev => {
          if (phase !== 'sort') return; ev.preventDefault(); e.setPointerCapture && e.setPointerCapture(ev.pointerId);
          const r = e.getBoundingClientRect(), ox = ev.clientX - r.left, oy = ev.clientY - r.top, x0 = ev.clientX, y0 = ev.clientY; let ghost = null, over = null;
          const move = m => { if (!ghost && Math.hypot(m.clientX - x0, m.clientY - y0) < 6) return;
            if (!ghost) { ghost = e.cloneNode(true); ghost.classList.add('ghost'); ghost.style.width = r.width + 'px'; document.body.appendChild(ghost); e.classList.add('lift'); }
            ghost.style.transform = `translate(${m.clientX - ox}px, ${m.clientY - oy}px) rotate(-3deg)`;
            const b = bins.find(z => { const q = z.getBoundingClientRect(); return m.clientX >= q.left && m.clientX <= q.right && m.clientY >= q.top && m.clientY <= q.bottom; }) || null;
            if (b !== over) { over && over.classList.remove('over'); over = b; over && over.classList.add('over'); } };
          const up = () => { e.removeEventListener('pointermove', move); e.removeEventListener('pointerup', up); e.removeEventListener('pointercancel', up);
            if (ghost) { ghost.remove(); e.classList.remove('lift'); over && over.classList.remove('over');
              if (over) place(i, +over.dataset.b); else if (put[i] != null && !e.closest('.dbin')) place(i, null); else if (put[i] != null) place(i, null); else draw(); }
            else { // un toc: selecciona (o treu del calaix)
              if (put[i] != null) place(i, null); else { sel = sel === i ? null : i; SFX.tap && SFX.tap(); draw(); } } };
          e.addEventListener('pointermove', move); e.addEventListener('pointerup', up); e.addEventListener('pointercancel', up);
        };
      });
      bins.forEach(b => b.onclick = ev => { if (phase !== 'sort' || ev.target.closest('.dcard') || sel == null) return; place(sel, +b.dataset.b); });
    };
    TSS.tried = false; draw();
  };
  // dchat: { q, who: { n: 'Nom|Nombre', av: '🦊' }, nodes: [{ id, msg: ['text|texto', …], opts: [{ t, go, fb?, good? }], end?, fb? }], start }
  TSTEP.dchat = function (st) {
    const log = []; let cur = st.start || 'a', score = 0;
    const node = id => st.nodes.find(n => n.id === id);
    const draw = (anim) => { const n = node(cur);
      $('#tsb').innerHTML = `<div class="tcol">${digQ(st)}<div class="dphone"><div class="dphh"><span class="dav">${st.who && st.who.av || '🙂'}</span><b>${tval(st.who && st.who.n || 'Xat|Chat')}</b></div><div class="dmsgs" id="dmsgs">${log.join('')}</div>
        ${n.end ? '' : `<div class="dopts">${n.opts.map((o, i) => `<button data-i="${i}">${tval(o.t)}</button>`).join('')}</div>`}</div>${n.end && n.fb ? `<div class="tfbox ${n.good === false ? 'ko' : 'ok'}">${tval(n.fb)}</div>` : ''}</div>`;
      const box = $('#dmsgs'); box.scrollTop = box.scrollHeight;
      document.querySelectorAll('.dopts button').forEach(b => b.onclick = () => { const o = n.opts[+b.dataset.i]; log.push(`<div class="dm me">${tval(o.t)}</div>`); if (o.fb) log.push(`<div class="dm fb ${o.good === false ? 'ko' : 'ok'}">${o.good === false ? '⚠️' : '💡'} ${tval(o.fb)}</div>`); if (o.good !== false) score++; SFX.tap && SFX.tap(); cur = o.go; push(); });
      if (n.end) tFoot(L('Continua', 'Continúa'), () => { addXPsafe(3); tNext(); }, true); else tFoot(L('Continua', 'Continúa'), tNext, false);
    };
    const push = () => { const n = node(cur); (n.msg || []).forEach(m => log.push(`<div class="dm them">${tval(m)}</div>`)); draw(true); };
    push();
  };
  // dai: { q, labels: ['ca|es', …], feats: ['color', 'forma'], train: [{ e: '🍎', f: [1, 0], l: 0 }], test: [{ e, f, l }], k?: 3, ex? }
  // 1) l'alumne etiqueta els exemples d'entrenament; 2) la IA aprèn (veïns més propers) i endevina els de prova
  TSTEP.dai = function (st) {
    const lab = {}, n = st.train.length; let phase = 'train';
    const guess = it => { const ex = st.train.map((t, i) => ({ l: lab[i], d: t.f.reduce((a, v, j) => a + (v - it.f[j]) ** 2, 0) })).filter(x => x.l != null).sort((a, b) => a.d - b.d).slice(0, typeof st.nn === 'number' ? st.nn : 3); const votes = {}; ex.forEach(x => votes[x.l] = (votes[x.l] || 0) + 1); return +Object.entries(votes).sort((a, b) => b[1] - a[1])[0][0]; };
    const draw = () => {
      if (phase === 'train') $('#tsb').innerHTML = `<div class="tcol">${digQ(st)}<div class="dai"><p class="dstep"><b>1</b> ${L("Ensenya a la IA: digues què és cada exemple.", 'Enseña a la IA: di qué es cada ejemplo.')}</p><div class="dtrain">${st.train.map((t, i) => `<div class="dex"><span class="de">${t.e}</span><div>${st.labels.map((l, k) => `<button class="${lab[i] === k ? 'on' : ''}" data-i="${i}" data-k="${k}">${tval(l)}</button>`).join('')}</div></div>`).join('')}</div></div></div>`;
      else { const res = st.test.map(t => ({ t, g: guess(t) })), ok = res.filter(r => r.g === r.t.l).length;
        $('#tsb').innerHTML = `<div class="tcol">${digQ(st)}<div class="dai"><p class="dstep"><b>2</b> ${L('Ara la IA endevina exemples que no ha vist mai:', 'Ahora la IA adivina ejemplos que no ha visto nunca:')}</p><div class="dtest">${res.map(r => `<div class="dex t ${r.g === r.t.l ? 'ok' : 'ko'}"><span class="de">${r.t.e}</span><b>🤖 ${tval(st.labels[r.g])}</b><small>${r.g === r.t.l ? '✓' : L(`era ${tx(st.labels[r.t.l])}`, `era ${tx(st.labels[r.t.l])}`)}</small></div>`).join('')}</div>
          <div class="tfbox ${ok === res.length ? 'ok' : 'ko'}"><b>${L(`La IA n'ha encertat ${ok} de ${res.length}.`, `La IA ha acertado ${ok} de ${res.length}.`)}</b> ${st.ex ? tval(st.ex) : L("Una IA només sap el que li ensenyem: si els exemples són pocs o estan malament, s'equivoca.", 'Una IA solo sabe lo que le enseñamos: si los ejemplos son pocos o están mal, se equivoca.')}</div>
          <button class="btn ghost" onclick="DAI.again()">${L("Torna a ensenyar-li", 'Vuelve a enseñarle')}</button></div></div>`; }
      document.querySelectorAll('.dtrain button').forEach(b => b.onclick = () => { lab[+b.dataset.i] = +b.dataset.k; SFX.tap && SFX.tap(); draw(); });
      if (phase === 'train') tFoot(L('Entrena la IA', 'Entrena la IA'), () => { phase = 'test'; SFX.ok && SFX.ok(); draw(); }, Object.keys(lab).length === n); else tContinue();
    };
    window.DAI = { again() { phase = 'train'; draw(); } };
    draw();
  };
  // dpriv: { q, fields: [{ k, t: 'Nom|Nombre', v: 'Laia', ok: 'friends' o ['me','friends'], ex? }] } — qui pot veure cada dada
  TSTEP.dpriv = function (st) {
    const lv = { me: L('Només jo', 'Solo yo'), friends: L('Amics', 'Amigos'), all: L('Tothom', 'Todo el mundo') }, set = {}; st.fields.forEach(f => set[f.k] = f.v0 || 'all');
    const okf = f => Array.isArray(f.ok) ? f.ok.includes(set[f.k]) : set[f.k] === f.ok;
    const draw = (checked) => {
      $('#tsb').innerHTML = `<div class="tcol">${digQ(st)}<div class="dpriv"><div class="dprof"><div class="dprh"><span class="dav">${st.av || '🦉'}</span><b>${tval(st.name || 'El meu perfil|Mi perfil')}</b></div>
        ${st.fields.map(f => `<div class="dpf ${checked ? (okf(f) ? 'ok' : 'ko') : ''}"><div><small>${tval(f.t)}</small><b>${tval(f.v)}</b></div><div class="dpw">${['me', 'friends', 'all'].map(o => `<button class="${set[f.k] === o ? 'on' : ''}" data-f="${f.k}" data-o="${o}">${{ me: '🔒', friends: '👥', all: '🌍' }[o]} ${lv[o]}</button>`).join('')}</div>${checked && !okf(f) && f.ex ? `<p class="dpx">${tval(f.ex)}</p>` : ''}</div>`).join('')}</div></div><div id="tfb"></div></div>`;
      document.querySelectorAll('.dpw button').forEach(b => b.onclick = () => { set[b.dataset.f] = b.dataset.o; SFX.tap && SFX.tap(); draw(false); });
      tFoot(L('Comprova', 'Comprueba'), () => { const all = st.fields.every(okf); draw(true); if (all) { SFX.ok && SFX.ok(); TSS.ok++; const fb = document.getElementById('tfb'); if (fb) fb.innerHTML = `<div class="tfbox ok"><b>${L('Molt bé!', '¡Muy bien!')}</b> ${st.ex ? tval(st.ex) : L('Has protegit bé el perfil: només comparteixes amb cada persona el que li toca.', 'Has protegido bien el perfil: solo compartes con cada persona lo que le toca.')}</div>`; tFoot(L('Continua', 'Continúa'), tNext, true); } else SFX.ko && SFX.ko(); }, true);
    };
    draw(false);
  };
}
// l'aspecte de cada artefacte (missatge, correu, web, publicació, notícia, xat): marcs inventats, sense cap marca real
function digFrame(st) {
  const k = st.kind || 'mail', h = tval(st.html);
  if (k === 'sms') return `<div class="dphone"><div class="dphh"><span class="dav">${st.av || '📱'}</span><b>${tval(st.from || 'Missatge|Mensaje')}</b></div><div class="dmsgs"><div class="dm them dmsg">${h}</div></div></div>`;
  if (k === 'chat') return `<div class="dphone"><div class="dphh"><span class="dav">${st.av || '💬'}</span><b>${tval(st.from || 'Xat|Chat')}</b></div><div class="dmsgs">${h}</div></div>`;
  if (k === 'web' || k === 'news') return `<div class="dweb"><div class="wbar"><span class="wdots"><i></i><i></i><i></i></span><span class="wurl">${st.url ? tval(st.url) : ''}</span></div><div class="dwebb">${h}</div></div>`;
  if (k === 'post') return `<div class="dpost"><div class="dphh"><span class="dav">${st.av || '🙂'}</span><b>${tval(st.from || '')}</b><small>${tval(st.when || '')}</small></div><div class="dbody">${h}</div></div>`;
  return `<div class="dmail"><div class="dmh"><p><small>${L('De', 'De')}:</small> ${st.from ? tval(st.from) : ''}</p><p><small>${L('Assumpte', 'Asunto')}:</small> <b>${st.subj ? tval(st.subj) : ''}</b></p></div><div class="dbody">${h}</div></div>`;
}
var TMEDIA = typeof TMEDIA !== 'undefined' ? TMEDIA : {};
// una demo amb un artefacte (sense pistes clicables) per a les targetes de teoria i les diapositives
TMEDIA.dig = { html: m => `<div class="dart k-${m.kind || 'mail'} still">${digFrame(m)}</div>`, slide: m => `<div class="dart k-${m.kind || 'mail'} still big">${digFrame(m)}</div>` };
TVALID['media:dig'] = m => m.html ? [] : ['la demo no té html'];
