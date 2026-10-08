/* ---------- Panell · sala projectada de les batalles en directe (de classe i per a convidats) ----------
   Pantalla completa per a la pissarra digital: codi i QR, jugadors que entren (el docent pot treure un convidat),
   compte enrere, rànquing en directe que es reordena amb animació, i podi final amb confeti. Per a les competicions,
   la classificació en directe (el millor intent de cadascú).
   La batalla de classe s'hi juga des de l'app; la de convidats, des de /juga (només amb el codi i un nom).
   S'hi arriba des de Batalles, amb l'adreça #/batalla/CODI (per obrir-la en una pestanya nova, al projector) i, si es
   tanca mentre la batalla continua, amb el botó flotant «Torna a la batalla» que surt a totes les pantalles del panell. */
let BP_T = null, BP = null;
const JOIN_B = c => `https://app.numimates.com/?b=${c}`;
// a producció, la pàgina dels convidats és a app.numimates.com/juga; a les previsualitzacions, a la mateixa adreça
const JUGA_HOST = () => /numimates\.com$/.test(location.hostname) ? 'https://app.numimates.com' : location.origin;
const JOIN_G = c => `${JUGA_HOST()}/juga?c=${c}`;
const BS_COL = { numi: '#8A4FB0', guida: '#FF8A3C', vuit: '#FF6FA3', tuga: '#3CC46A', flama: '#E8414F', estel: '#F0B400', cavaller: '#5B7BA8' };
const bsCol = p => BS_COL[p.companion] || ['#8A4FB0', '#36A9E1', '#FF6FA3', '#3CC46A', '#FF9A3C'][[...p.name].reduce((a, c) => a + c.charCodeAt(0), 0) % 5];
const bsAv = (p, cls = '') => `<span class="bs-av ${cls}" style="--c:${bsCol(p)}">${esc([...p.name.trim()][0] || '?').toUpperCase()}</span>`;
const bsQR = txt => window.qrcode ? (() => { const q = qrcode(0, 'M'); q.addData(txt); q.make(); return q.createSvgTag({ cellSize: 8, margin: 0, scalable: true }); })() : '';

const BS_KEY = 'numi-profe-batalla';
const bsMem = { get: () => { try { return sessionStorage.getItem(BS_KEY) || ''; } catch (e) { return ''; } }, set: c => { try { c ? sessionStorage.setItem(BS_KEY, c) : sessionStorage.removeItem(BS_KEY); } catch (e) { } } };
// la mateixa pantalla en una pestanya nova (per arrossegar-la al projector i continuar fent servir el panell)
function batTab(code) { window.open(location.pathname + location.search + '#/batalla/' + encodeURIComponent(code), '_blank'); }
async function batProj(code) {
  clearInterval(BP_T); $$('.proj').forEach(x => x.remove()); $('#bspill')?.remove();
  BP = { code, screen: '', keys: new Set(), conf: false };
  document.body.insertAdjacentHTML('beforeend', `<div class="proj bstage" role="dialog" aria-label="${L('Batalla en directe', 'Batalla en directo')}">
    <div class="bs-bg" aria-hidden="true"><i class="b1"></i><i class="b2"></i><i class="b3"></i></div>
    <header class="bs-head"><span class="bs-brand">numi <b>${L('batalla', 'batalla')}</b></span><span class="bs-title" id="bst"></span>
      <span class="bs-tools"><button class="bs-ib" onclick="bsFull()" title="${L('Pantalla completa', 'Pantalla completa')}">${ico('maximize-2')}</button><button class="bs-ib" onclick="bsClose()" title="${L('Tanca', 'Cerrar')}">${ico('x')}</button></span></header>
    <div class="bs-body" id="bpb"></div></div>`);
  const draw = async () => {
    const j = await act('bat_state', { bcode: code }).catch(() => ({})), s = j.state; if (!s || !$('.bstage')) return;
    BP.s = s; if (s.msLeft != null) BP.endAt = Date.now() + s.msLeft;
    if (s.over || s.expired) { if (bsMem.get() === s.code) bsMem.set(''); } else bsMem.set(s.code);
    $('#bst').innerHTML = `${esc(s.title || (s.kind === 'comp' ? L('Competició', 'Competición') : L('Batalla de mates', 'Batalla de mates')))} <span class="mono">${s.code}</span>`;
    if (s.kind === 'comp') bsComp(s);
    else if (s.status === 'lobby') bsLobby(s);
    else if (s.over) { bsPodium(s); clearInterval(BP_T); }
    else if (s.startIn > 0) bsCount(s);
    else bsLive(s);
  };
  // la competició canvia a poc a poc (cadascú juga quan vol): no cal consultar-la tan sovint
  await draw(); BP_T = setInterval(() => { if (!$('.bstage')) return clearInterval(BP_T); draw(); }, BP.s && BP.s.kind === 'comp' ? 5000 : 1200);
}
function bsClose() {
  clearInterval(BP_T); $$('.proj').forEach(x => x.remove()); if (document.fullscreenElement) document.exitFullscreen().catch(() => { });
  if (/^#\/batalla\//.test(location.hash)) location.hash = '#/batalles'; else if (route.last === 'batalles') vBatalles(); else bsPill();
}
// botó flotant per tornar a la pantalla en directe d'una batalla que continua (es comprova, com a molt, cada 20 s)
async function bsPill() {
  const code = bsMem.get(); $('#bspill')?.remove();
  if (!code || $('.bstage') || route.last === 'batalles' || route.last === 'batalla') return;
  document.body.insertAdjacentHTML('beforeend', `<button class="bspill" id="bspill" onclick="batProj('${esc(code)}')"><i class="bs-dot" aria-hidden="true"></i>${ico('monitor-play')}<span>${L('Torna a la batalla', 'Volver a la batalla')} <b class="mono">${esc(code)}</b></span></button>`);
  if (bsPill.at && Date.now() - bsPill.at < 20000) return; bsPill.at = Date.now();
  const j = await act('bat_state', { bcode: code }).catch(() => ({}));
  if (!j.state || j.state.over || j.state.expired) { bsMem.set(''); $('#bspill')?.remove(); }
}
function bsFull() { const el = $('.bstage'); if (!el) return; document.fullscreenElement ? document.exitFullscreen().catch(() => { }) : (el.requestFullscreen || el.webkitRequestFullscreen || (() => { })).call(el); }

// 1. sala: com s'hi entra, codi i QR, i qui ha entrat
function bsLobby(s) {
  const guest = s.kind === 'oberta', url = guest ? JOIN_G(s.code) : JOIN_B(s.code), host = url.replace(/^https?:\/\//, '').replace(/\?.*$/, '');
  if (BP.screen !== 'lobby') {
    BP.screen = 'lobby'; BP.keys = new Set();
    $('#bpb').innerHTML = `<div class="bs-lobby">
      <div class="bs-join">
        <ol class="bs-steps">${guest
          ? `<li><span>1</span>${L('Obre', 'Abre')} <b>${esc(host)}</b> ${L('o escaneja el QR', 'o escanea el QR')}</li><li><span>2</span>${L('Escriu el codi', 'Escribe el código')}</li><li><span>3</span>${L('Posa el teu nom i tria personatge', 'Pon tu nombre y elige personaje')}</li>`
          : `<li><span>1</span>${L("Obre l'app", 'Abre la app')} <b>app.numimates.com</b> → ${L('Batalles', 'Batallas')}</li><li><span>2</span>${L('Escriu el codi', 'Escribe el código')}</li>`}</ol>
        <div class="bs-code">${s.code}</div>
      </div>
      <div class="bs-qr"><div class="bs-qrbox">${bsQR(url)}</div><small>${L('Escaneja per entrar', 'Escanea para entrar')}</small></div>
    </div>
    <div class="bs-crowd" id="bsc"></div>
    <footer class="bs-foot"><span class="bs-n" id="bsn"></span><span class="bs-info">${s.nq || 10} ${L('preguntes', 'preguntas')}${s.mix ? ' · ' + L('cadascú en un ordre diferent', 'cada uno en un orden distinto') : ''}</span><button class="bs-go" id="bsgo" onclick="bsStart()">${ico('swords')}${L('COMENÇA', 'EMPIEZA')}</button></footer>`;
  }
  const pl = s.players, el = $('#bsc');
  el.innerHTML = pl.length ? pl.map(p => `<span class="bs-pl ${BP.keys.size && !BP.keys.has(p.k) ? 'new' : ''} ${p.gid ? 'kick' : ''}" ${p.gid ? `onclick="bsKick(${p.gid},${js(p.name)})" title="${L('Treure de la sala', 'Sacar de la sala')}"` : ''}>${bsAv(p)}<b>${esc(p.name)}</b>${p.gid ? `<i class="bs-x">${ico('x')}</i>` : ''}</span>`).join('')
    : `<p class="bs-empty">${L('Esperant jugadors', 'Esperando jugadores')}<i class="dots"><b>.</b><b>.</b><b>.</b></i></p>`;
  BP.keys = new Set(pl.map(p => p.k)); el.classList.toggle('few', pl.length <= 20);
  $('#bsn').innerHTML = `<b>${pl.length}</b> ${pl.length === 1 ? L('jugador', 'jugador') : L('jugadors', 'jugadores')}`;
  $('#bsgo').disabled = !pl.length;
}
async function bsStart() { const b = $('#bsgo'); if (b) b.disabled = true; const j = await act('bat_start', { bcode: BP.code }); if (!j.ok) { if (b) b.disabled = false; toast(j.error === 'sols' ? L('Encara no hi ha ningú a la sala.', 'Aún no hay nadie en la sala.') : L("No s'ha pogut començar.", 'No se ha podido empezar.')); } }
async function bsKick(gid, name) {
  if (!await confirmBox(L(`Treure ${name} de la sala?`, `¿Sacar a ${name} de la sala?`), L('Podrà tornar a entrar amb el codi i un altre nom.', 'Podrá volver a entrar con el código y otro nombre.'), L('Treu-lo', 'Sacarlo'))) return;
  await act('bat_kick', { bcode: BP.code, gid });
}
// 2. compte enrere
function bsCount(s) {
  const n = Math.ceil(s.startIn / 1000);
  if (BP.screen !== 'count') { BP.screen = 'count'; $('#bpb').innerHTML = `<div class="bs-count"><p>${L('Preparats?', '¿Preparados?')}</p><div class="bs-ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="54"/></svg><b id="bscd"></b></div></div>`;
    const t0 = Date.now() + s.startIn, iv = setInterval(() => { const el = $('#bscd'); if (!el || BP.screen !== 'count') return clearInterval(iv); const left = Math.ceil((t0 - Date.now()) / 1000); const t = left > 0 ? String(left) : L('JA!', '¡YA!'); if (el.textContent !== t) { el.textContent = t; el.className = left > 0 ? 'bsp' : 'bsp go'; } }, 100); }
  return n;
}
// 3. en directe: files fixes per jugador que es mouen (posició absoluta) quan canvia el rànquing
function bsLive(s) {
  const rows = [...s.players].sort((a, b) => b.correct - a.correct || b.done - a.done || (a.finished && b.finished ? a.ms - b.ms : 0)), BQ = s.nq || 10;
  if (BP.screen !== 'live') {
    BP.screen = 'live';
    $('#bpb').innerHTML = `<div class="bs-livehead"><span class="bs-chip">${ico('clock')}<b id="bsclk">—</b></span><span class="bs-chip">${ico('check')}<b id="bsfin"></b></span><button class="bs-ghost" onclick="batEndLive('${BP.code}')">${L('Acaba la batalla', 'Terminar la batalla')}</button></div><div class="bs-rank" id="bsr"></div>`;
    clearInterval(BP.clk); BP.clk = setInterval(() => { const el = $('#bsclk'); if (!el) return clearInterval(BP.clk); const ms = Math.max(0, (BP.endAt || 0) - Date.now()), sec = Math.ceil(ms / 1000); el.textContent = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`; el.parentNode.classList.toggle('low', ms < 30000); }, 400);
  }
  // files tan grans com càpiguen a la pantalla (amb 10-15 jugadors, noms ben grans); a partir de 9, en dues columnes
  const box = $('#bsr'), n = rows.length, cols = n > 8 ? 2 : 1, per = Math.max(1, Math.ceil(n / cols)), gap = 10;
  const avail = Math.max(320, window.innerHeight - box.getBoundingClientRect().top - 28), rowH = Math.max(44, Math.min(104, Math.floor(avail / per) - gap));
  box.style.setProperty('--rh', rowH + 'px'); box.style.height = (per * (rowH + gap)) + 'px'; box.classList.toggle('two', cols === 2);
  const live = new Set();
  rows.forEach((p, i) => {
    live.add(p.k);
    let el = box.querySelector(`[data-k="${CSS.escape(p.k)}"]`);
    if (!el) { el = document.createElement('div'); el.className = 'bs-row enter'; el.dataset.k = p.k; box.appendChild(el); requestAnimationFrame(() => el.classList.remove('enter')); }
    const col = Math.floor(i / per), r = i % per;
    // adelantaments: fletxa verda uns segons quan algú puja posicions
    const prev = el.dataset.i != null ? +el.dataset.i : null;
    if (prev != null && i < prev) { el.classList.remove('bs-rise'); void el.offsetWidth; el.classList.add('bs-rise'); clearTimeout(el._up); el._up = setTimeout(() => el.classList.remove('bs-rise'), 2500); }
    if (p.finished && el.dataset.f !== '1' && prev != null) { el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); }
    el.dataset.i = i; el.dataset.f = p.finished ? '1' : '0';
    el.style.transform = `translate(${col ? "calc(100% + 16px)" : "0"}, ${r * (rowH + gap)}px)`;
    el.classList.toggle('top1', i === 0 && p.correct > 0); el.classList.toggle('top2', i === 1 && p.correct > 0); el.classList.toggle('top3', i === 2 && p.correct > 0); el.classList.toggle('fin', p.finished);
    const html = `<span class="bs-pos">${i + 1}</span>${bsAv(p)}<b class="bs-name">${esc(p.name)}</b><span class="bs-track">${[...Array(BQ).keys()].map(q => `<i class="${q < p.done ? 'on' : ''}"></i>`).join('')}</span><span class="bs-sc">${p.finished ? `<em>${bsecs(p.ms)}</em>${ico('check')}` : ''}<b>${p.correct}</b><small>/${BQ}</small></span><span class="bs-up" aria-hidden="true">▲</span>`;
    if (el.dataset.h !== html) { if (el.dataset.c != null && +el.dataset.c < p.correct) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); } el.innerHTML = html; el.dataset.h = html; el.dataset.c = p.correct; }
  });
  [...box.children].forEach(el => { if (!live.has(el.dataset.k)) el.remove(); });
  const fin = rows.filter(p => p.finished).length; $('#bsfin').textContent = `${fin}/${n} ${L('han acabat', 'han terminado')}`;
}
// 4. podi i classificació
function bsPodium(s) {
  if (BP.screen === 'podium') return; BP.screen = 'podium'; clearInterval(BP.clk);
  const top = bTop(s, 60), pod = [top[1], top[0], top[2]], rest = top.slice(3), BQ = s.nq || 10;
  $('#bpb').innerHTML = `<div class="bs-final"><h2>${L('Classificació final', 'Clasificación final')}</h2>
    <div class="bs-pod">${pod.map((p, i) => p ? `<div class="bs-ps s${p.pos}" style="--d:${[.5, 1, .2][i]}s">${p.pos === 1 ? `<span class="bs-crown">${ico('crown')}</span>` : ''}${bsAv(p, 'xl')}<b>${esc(p.name)}</b><small>${p.best.correct}/${BQ} · ${bsecs(p.best.ms)}</small><div class="bs-step">${p.pos}</div></div>` : '<div></div>').join('')}</div>
    ${rest.length ? `<ol class="bs-rest" start="4">${rest.map(p => `<li>${bsAv(p)}<b>${esc(p.name)}</b><span>${p.best.correct}/${BQ} · ${bsecs(p.best.ms)}</span></li>`).join('')}</ol>` : ''}
    <div class="bs-endbtns"><button class="bs-go" onclick="bsAgain()">${ico('repeat')}${L('Una altra batalla', 'Otra batalla')}</button><button class="bs-ghost" onclick="bsClose()">${L('Tanca', 'Cerrar')}</button></div></div>`;
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && top.length) {
    const c = document.createElement('div'); c.className = 'bs-confetti'; c.setAttribute('aria-hidden', 'true');
    c.innerHTML = Array.from({ length: 160 }, () => `<i style="left:${Math.random() * 100}%;background:${['#FFD84D', '#FF6FA3', '#36A9E1', '#3CC46A', '#B98AE0', '#FF9A3C'][Math.floor(Math.random() * 6)]};--dx:${(Math.random() * 2 - 1) * 160}px;--r:${Math.random() * 900}deg;animation-delay:${Math.random() * 1.2}s;animation-duration:${2.6 + Math.random() * 2}s"></i>`).join('');
    $('.bstage').appendChild(c); setTimeout(() => c.remove(), 7000);
  }
}
// competició: classificació en directe amb el millor intent de cadascú (només es repinta quan canvia)
function bsComp(s) {
  const BQ = s.nq || 10, rank = s.players.filter(p => p.pos).sort((a, b) => a.pos - b.pos), playing = s.players.filter(p => !p.pos);
  const pod = [rank[1], rank[0], rank[2]], rest = rank.slice(3, 40);
  const html = `<div class="bs-final bs-comp"><h2>${s.over ? L('Classificació final', 'Clasificación final') : L('Classificació en directe', 'Clasificación en directo')}</h2>
    <p class="bs-csub">${s.over ? L('Competició acabada', 'Competición terminada') : L(`Oberta fins al ${fdate(s.endsAt)}`, `Abierta hasta el ${fdate(s.endsAt)}`)} · ${s.players.length} ${L('han jugat', 'han jugado')} · ${BQ} ${L('preguntes', 'preguntas')} · ${L('compta el millor intent', 'cuenta el mejor intento')}</p>
    ${rank.length ? `<div class="bs-pod">${pod.map((p, i) => p ? `<div class="bs-ps s${p.pos}" style="--d:${[.5, 1, .2][i]}s">${p.pos === 1 ? `<span class="bs-crown">${ico('crown')}</span>` : ''}${bsAv(p, 'xl')}<b>${esc(p.name)}</b><small>${p.best.correct}/${BQ} · ${bsecs(p.best.ms)}</small><div class="bs-step">${p.pos}</div></div>` : '<div></div>').join('')}</div>` : `<p class="bs-empty">${L('Encara no ha acabat ningú', 'Aún no ha terminado nadie')}<i class="dots"><b>.</b><b>.</b><b>.</b></i></p>`}
    ${rest.length ? `<ol class="bs-rest" start="4">${rest.map(p => `<li>${bsAv(p)}<b>${esc(p.name)}</b><span>${p.best.correct}/${BQ} · ${bsecs(p.best.ms)}</span></li>`).join('')}</ol>` : ''}
    ${playing.length && !s.over ? `<p class="bs-csub">${ico('clock')} ${L('Jugant ara', 'Jugando ahora')}: ${playing.map(p => esc(p.name)).join(', ')}</p>` : ''}
    <div class="bs-endbtns"><button class="bs-ghost" onclick="bsClose()">${L('Tanca', 'Cerrar')}</button></div></div>`;
  if (BP.h === html) return; BP.h = html; BP.screen = 'comp'; $('#bpb').innerHTML = html;
}
// una altra batalla amb la mateixa configuració (els jugadors hi entren amb el codi nou)
async function bsAgain() {
  const s = BP.s; if (!s) return;
  const j = await act('bat_new', { kind: s.kind, grup: s.grup || 0, course: s.course, unit: s.unit ?? undefined, titol: s.title || '', nq: s.nq, mix: !!s.mix });
  if (!j.ok) return toast(L("No s'ha pogut crear.", 'No se ha podido crear.'));
  batProj(j.state.code);
}
async function batGo(code) { const j = await act('bat_start', { bcode: code }); if (!j.ok) toast(j.error === 'sols' ? L('Encara no hi ha ningú a la sala.', 'Aún no hay nadie en la sala.') : L("No s'ha pogut començar.", 'No se ha podido empezar.')); }
async function batEndLive(code) { if (!await confirmBox(L('Acabar la batalla ara?', '¿Terminar la batalla ahora?'), L('Compta el que cadascú ha fet fins ara.', 'Cuenta lo que cada uno ha hecho hasta ahora.'), L('Acaba-la', 'Terminarla'), false)) return; await act('bat_end', { bcode: code }); }
