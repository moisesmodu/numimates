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
  if (common) { score = Math.min(score, 1); why.push(L(`Conté «${esc(common)}», que és de les primeres coses que es proven.`, `Contiene «${esc(common)}», que es de lo primero que se prueba.`)); }
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
    const upd = () => { $('#dcnt').innerHTML = L(`Pistes trobades: <b>${found.size}</b> de ${need}`, `Pistas encontradas: <b>${found.size}</b> de ${need}`); tFoot(L('Continua', 'Continúa'), () => { addXPsafe(3); tNext(); }, found.size >= need); };
    document.querySelectorAll('.dart [data-clue]').forEach(e => e.onclick = ev => { ev.preventDefault(); ev.stopPropagation(); const k = e.dataset.clue; if (found.has(k)) return; found.add(k); e.classList.add('found'); SFX.ok && SFX.ok();
      $('#dclues').insertAdjacentHTML('beforeend', `<div class="dclue"><span>🔎</span><div>${tval(st.clues[k])}</div></div>`); upd(); if (found.size >= need && st.ex) $('#dclues').insertAdjacentHTML('beforeend', `<div class="tfbox ok"><b>${L('Molt bé!', '¡Muy bien!')}</b> ${tval(st.ex)}</div>`); });
    document.querySelector('.dart').addEventListener('click', e => { if (e.target.closest('[data-clue]')) return; const t = e.target.closest('.dbody, .dmsg, .dweb'); if (t) { t.classList.remove('nope'); void t.offsetWidth; t.classList.add('nope'); } });
    upd();
  };
  // dsort: { q, bins: ['ca|es', …], items: [{ t: 'text|texto', b: 0, ex? , ico? }] } — es toca un element i després el calaix
  TSTEP.dsort = function (st) {
    const order = shuffle(st.items.map((_, i) => i)), put = {}; let sel = null;
    const draw = () => {
      $('#tsb').innerHTML = `<div class="tcol">${digQ(st)}<div class="dpool">${order.filter(i => put[i] == null).map(i => `<button class="dcard ${sel === i ? 'on' : ''}" data-i="${i}">${st.items[i].ico ? `<span>${st.items[i].ico}</span>` : ''}${tval(st.items[i].t)}</button>`).join('') || `<p class="tempty">${L('Ja els has posat tots!', '¡Ya los has puesto todos!')}</p>`}</div>
        <div class="dbins b${st.bins.length}">${st.bins.map((b, k) => `<div class="dbin" data-b="${k}"><b>${tval(b)}</b>${order.filter(i => put[i] === k).map(i => `<span class="dcard sm ${TSS.ready ? (st.items[i].b === k ? 'ok' : 'ko') : ''}" data-i="${i}">${tval(st.items[i].t)}</span>`).join('')}</div>`).join('')}</div><div class="tfb" id="tfb"></div></div>`;
      document.querySelectorAll('.dpool .dcard').forEach(e => e.onclick = () => { if (TSS.ready) return; sel = +e.dataset.i; SFX.tap && SFX.tap(); draw(); });
      document.querySelectorAll('.dbin').forEach(e => e.onclick = ev => { if (TSS.ready) return; const card = ev.target.closest('.dcard'); if (card && card.dataset.i != null && put[+card.dataset.i] != null) { delete put[+card.dataset.i]; draw(); return; } if (sel == null) return; put[sel] = +e.dataset.b; sel = null; SFX.tap && SFX.tap(); draw(); });
      const all = Object.keys(put).length === st.items.length;
      if (TSS.ready) { const bad = st.items.map((it, i) => [it, i]).filter(([it, i]) => put[i] !== it.b); $('#tfb').innerHTML = `<div class="tfbox ${bad.length ? 'ko' : 'ok'}"><b>${bad.length ? L(`${st.items.length - bad.length} de ${st.items.length} ben classificats.`, `${st.items.length - bad.length} de ${st.items.length} bien clasificados.`) : L('Perfecte!', '¡Perfecto!')}</b>${bad.length ? `<ul>${bad.map(([it]) => `<li><b>${tval(it.t)}</b> → ${tval(st.bins[it.b])}${it.ex ? ': ' + tval(it.ex) : ''}</li>`).join('')}</ul>` : st.ex ? ' ' + tval(st.ex) : ''}</div>`; tContinue(); }
      else tFoot(L('Comprova', 'Comprueba'), () => { TSS.ready = true; const ok = st.items.every((it, i) => put[i] === it.b); ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko(); draw(); }, all);
    };
    draw();
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
    const guess = it => { const ex = st.train.map((t, i) => ({ l: lab[i], d: t.f.reduce((a, v, j) => a + (v - it.f[j]) ** 2, 0) })).filter(x => x.l != null).sort((a, b) => a.d - b.d).slice(0, st.k || 3); const votes = {}; ex.forEach(x => votes[x.l] = (votes[x.l] || 0) + 1); return +Object.entries(votes).sort((a, b) => b[1] - a[1])[0][0]; };
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
        ${st.fields.map(f => `<div class="dpf ${checked ? (okf(f) ? 'ok' : 'ko') : ''}"><div><small>${tval(f.t)}</small><b>${tval(f.v)}</b></div><div class="dpw">${['me', 'friends', 'all'].map(o => `<button class="${set[f.k] === o ? 'on' : ''}" data-f="${f.k}" data-o="${o}">${{ me: '🔒', friends: '👥', all: '🌍' }[o]} ${lv[o]}</button>`).join('')}</div>${checked && !okf(f) && f.ex ? `<p class="dpx">${tval(f.ex)}</p>` : ''}</div>`).join('')}</div></div></div>`;
      document.querySelectorAll('.dpw button').forEach(b => b.onclick = () => { set[b.dataset.f] = b.dataset.o; SFX.tap && SFX.tap(); draw(false); });
      tFoot(L('Comprova', 'Comprueba'), () => { const all = st.fields.every(okf); draw(true); if (all) { SFX.ok && SFX.ok(); TSS.ok++; tFoot(L('Continua', 'Continúa'), tNext, true); } else SFX.ko && SFX.ko(); }, true);
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
