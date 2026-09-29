/* ---------- Intercanvi de cartes ----------
   Només es poden canviar cartes REPETIDES i d'una en una: així ningú no perd mai cap carta de
   la col·lecció. La carta que ofereixes queda guardada fins que l'intercanvi s'acaba; si no es
   fa, et torna. */
const TRADE_DAY = 5;
const tApi = (action, extra = {}) => api('trade', { action, code: P.code, name: P.name, ...extra });
const TERR = e => ({ 'no-existeix': L("Aquest codi no existeix. Revisa'l!", 'Ese código no existe. ¡Revísalo!'), caducat: L('Aquest intercanvi ja ha caducat.', 'Este intercambio ya ha caducado.'), ocupat: L("Algú altre ja hi ha fet una oferta.", 'Otra persona ya ha hecho una oferta.'), teu: L('Aquest intercanvi és teu: envia el codi a un amic!', 'Este intercambio es tuyo: ¡envía el código a un amigo!'), massa: L('Ja tens 5 intercanvis oberts. Espera que acabin.', 'Ya tienes 5 intercambios abiertos. Espera a que terminen.') })[e] || L('No hi ha connexió. Torna-ho a provar.', 'No hay conexión. Vuelve a intentarlo.');
const dupes = () => { albumFix(); return STK.filter(s => (P.album[s[0]] || 0) >= 2); };
function tradeLimit() { if (!P.tday || P.tday.d !== today()) P.tday = { d: today(), n: 0 }; return P.tday.n >= TRADE_DAY; }
// Aplica la part que toca a aquest alumne quan un intercanvi s'acaba (una sola vegada)
function settleTrade(t) {
  P.trades = P.trades || {};
  const mine = P.trades[t.code]; if (!mine || mine.fin) return null;
  if (t.status === 'done') { const got = t.role === 'a' ? t.b_card : t.a_card; P.album[got] = (P.album[got] || 0) + 1; mine.fin = 'done'; return { got }; }
  if (['cancel', 'reject', 'expired'].includes(t.status)) { P.album[mine.gave] = (P.album[mine.gave] || 0) + 1; mine.fin = 'back'; return { back: mine.gave }; }
  return null;
}
async function renderTrades(tabs) {
  VIEW = 'album';
  if (!P.code) { app.innerHTML = shell(`<h1 class="ph1">${L('La meva col·lecció', 'Mi colección')}</h1>${tabs}<p class="empty">${L('Per intercanviar cartes cal connexió a internet.', 'Para intercambiar cartas hace falta conexión a internet.')}</p>`, 'album'); return; }
  const d = dupes();
  app.innerHTML = shell(`<h1 class="ph1">${L('La meva col·lecció', 'Mi colección')}</h1>${tabs}
    <p class="lead">${L("Canvia les teves cartes <b>repetides</b> amb els amics. És sempre una per una, i mai perds cap carta de la col·lecció.", 'Cambia tus cartas <b>repetidas</b> con tus amigos. Siempre es una por una, y nunca pierdes ninguna carta de la colección.')}</p>
    <button class="tcard trade" onclick="newTrade()" ${d.length ? '' : 'disabled'}><span class="ti">🔄</span><span><b>${L('Ofereix una carta repetida', 'Ofrece una carta repetida')}</b><small>${d.length ? L(`En tens ${d.length} de repetides. Tria'n una i envia el codi a un amic.`, `Tienes ${d.length} repetidas. Elige una y envía el código a un amigo.`) : L('Encara no tens cartes repetides. Obre sobres i en tindràs!', 'Todavía no tienes cartas repetidas. ¡Abre sobres y tendrás!')}</small></span></button>
    <div class="joinbox"><input id="tcin" class="nm" placeholder="${L('Codi: CANVI-1234', 'Código: CANVI-1234')}" aria-label="${L("Codi d'intercanvi", 'Código de intercambio')}" maxlength="12" autocapitalize="characters" onkeydown="if(event.key==='Enter')openTrade(this.value)"><button class="btn" onclick="openTrade($('#tcin').value)">${L('MIRA', 'MIRAR')}</button></div>
    <h2 class="h2">${L('Els meus intercanvis', 'Mis intercambios')}</h2><div id="tmine"><p class="empty">…</p></div>`, 'album');
  let r; try { r = await tApi('mine'); } catch (e) { return; }
  const list = r.list || [], news = [];
  list.forEach(t => { const s = settleTrade(t); if (s) news.push([t, s]); });
  if (news.length) { save(); news.forEach(([t, s]) => toast(s.got ? L(`🔄 Intercanvi fet! Nova carta: <b>${tx(cardById(s.got)[2])}</b>`, `🔄 ¡Intercambio hecho! Nueva carta: <b>${tx(cardById(s.got)[2])}</b>`) : L(`↩️ Et torna la carta ${tx(cardById(s.back)[2])}`, `↩️ Te vuelve la carta ${tx(cardById(s.back)[2])}`))); }
  const el = $('#tmine'); if (!el) return;
  el.innerHTML = list.length ? list.map(tradeRow).join('') : `<p class="empty">${L('Encara no has fet cap intercanvi.', 'Todavía no has hecho ningún intercambio.')}</p>`;
}
function miniCard(id) { const c = cardById(id); return c ? `<div class="tcard-mini">${stickerHTML(c)}</div>` : ''; }
function tradeRow(t) {
  const st = { open: L('⏳ Esperant una oferta', '⏳ Esperando una oferta'), offered: t.role === 'a' ? L('🔔 Tens una oferta!', '🔔 ¡Tienes una oferta!') : L('⏳ Esperant resposta', '⏳ Esperando respuesta'), done: L('✅ Fet', '✅ Hecho'), reject: L('✖ No acceptat', '✖ No aceptado'), cancel: L('✖ Cancel·lat', '✖ Cancelado'), expired: L('⌛ Caducat', '⌛ Caducado') }[t.status];
  const other = t.role === 'a' ? t.b_name : t.a_name;
  const act = t.role === 'a' && t.status === 'offered' ? `<div class="row2"><button class="btn sm ghost" onclick="answerTrade('${t.code}',false)">${L('NO', 'NO')}</button><button class="btn sm" onclick="answerTrade('${t.code}',true)">${L('ACCEPTA', 'ACEPTAR')}</button></div>`
    : t.role === 'a' && t.status === 'open' ? `<div class="row2"><button class="btn sm gold" onclick="shareTrade('${t.code}')">📨 ${L('ENVIA EL CODI', 'ENVIAR EL CÓDIGO')}</button><button class="btn sm ghost" onclick="answerTrade('${t.code}',null)">${L('CANCEL·LA', 'CANCELAR')}</button></div>` : '';
  return `<div class="trow"><div class="thead"><b>${t.code}</b><span>${st}</span></div>
    <div class="tpair">${miniCard(t.a_card)}<span class="tarrow">⇄</span>${t.b_card ? miniCard(t.b_card) : `<div class="tcard-mini q">?</div>`}</div>
    <small class="mut">${t.role === 'a' ? L('Tu ofereixes', 'Tú ofreces') : esc(t.a_name) + ' ' + L('ofereix', 'ofrece')}${other ? ' · ' + L('amb', 'con') + ' ' + esc(other) : ''}</small>${act}</div>`;
}
function newTrade() { if (classOff('intercanvis')) return toast(L('El teu docent ha desactivat els intercanvis per a la classe.', 'Tu docente ha desactivado los intercambios para la clase.'));
  if (tradeLimit()) return toast(L(`Avui ja has fet ${TRADE_DAY} intercanvis. Demà més!`, `Hoy ya has hecho ${TRADE_DAY} intercambios. ¡Mañana más!`));
  const d = dupes();
  modal(`<div class="sheet"><h3>${L('Quina carta repetida ofereixes?', '¿Qué carta repetida ofreces?')}</h3><p>${L("Es guarda fins que algú et fa una oferta i tu l'acceptes. Si no, et torna.", 'Se guarda hasta que alguien te hace una oferta y tú la aceptas. Si no, te vuelve.')}</p>
    <div class="agrid pickgrid">${d.map(s => `<button class="stkbtn" onclick="closeModal();createTrade('${s[0]}')">${stickerHTML(s)}<i class="cnt">×${P.album[s[0]]}</i></button>`).join('')}</div>
    <button class="btn ghost big" onclick="closeModal()">${L('TORNA', 'VOLVER')}</button></div>`);
}
async function createTrade(card) {
  if ((P.album[card] || 0) < 2 || tradeLimit()) return;
  let t; try { t = await tApi('create', { card }); } catch (e) { return toast(TERR()); }
  if (t.error) return toast(TERR(t.error));
  P.album[card]--; P.trades = P.trades || {}; P.trades[t.code] = { role: 'a', gave: card }; P.tday.n++; save();
  SFX.coin(); shareTrade(t.code); renderAlbum('trade');
}
function shareTrade(code) {
  const t = L(`Vols canviar cromos a Numi Mates? Codi: ${code}`, `¿Quieres cambiar cartas en Numi Mates? Código: ${code}`), url = location.origin + '/?t=' + code;
  if (navigator.share) navigator.share({ text: t, url }).catch(() => { }); else { try { navigator.clipboard.writeText(t + ' ' + url); toast(L('Codi copiat!', '¡Código copiado!')); } catch (e) { } }
}
async function openTrade(raw) { if (classOff('intercanvis')) return toast(L('El teu docent ha desactivat els intercanvis per a la classe.', 'Tu docente ha desactivado los intercambios para la clase.'));
  const code = String(raw || '').toUpperCase().replace(/\s+/g, '').replace(/^([A-Z]+)(\d{4})$/, '$1-$2');
  if (!/^[A-Z]{3,8}-\d{4}$/.test(code)) return toast(L('El codi és com CANVI-1234.', 'El código es como CANVI-1234.'));
  let t; try { t = await tApi('view', { tcode: code }); } catch (e) { return toast(TERR()); }
  if (t.error) return toast(TERR(t.error));
  if (t.role === 'a') return toast(TERR('teu'));
  if (t.status !== 'open') return toast(t.status === 'expired' ? TERR('caducat') : TERR('ocupat'));
  const d = dupes().filter(s => s[0] !== t.a_card);
  modal(`<div class="sheet cent"><h3>${L(`${esc(t.a_name)} ofereix aquesta carta`, `${esc(t.a_name)} ofrece esta carta`)}</h3>
    <div class="tbig">${stickerHTML(cardById(t.a_card), '', true)}</div>
    ${d.length ? `<p>${L("Tria quina carta repetida li dones a canvi. Quan l'accepti, us arribarà a tots dos.", 'Elige qué carta repetida le das a cambio. Cuando la acepte, os llegará a los dos.')}</p><div class="agrid pickgrid">${d.map(s => `<button class="stkbtn" onclick="closeModal();offerTrade('${code}','${s[0]}')">${stickerHTML(s)}<i class="cnt">×${P.album[s[0]]}</i></button>`).join('')}</div>`
      : `<p class="empty">${L('No tens cap carta repetida per donar a canvi. Obre més sobres!', 'No tienes ninguna carta repetida para dar a cambio. ¡Abre más sobres!')}</p>`}
    <button class="btn ghost big" onclick="closeModal()">${L('TORNA', 'VOLVER')}</button></div>`);
}
async function offerTrade(code, card) {
  if ((P.album[card] || 0) < 2) return;
  if (tradeLimit()) return toast(L(`Avui ja has fet ${TRADE_DAY} intercanvis. Demà més!`, `Hoy ya has hecho ${TRADE_DAY} intercambios. ¡Mañana más!`));
  let t; try { t = await tApi('offer', { tcode: code, card }); } catch (e) { return toast(TERR()); }
  if (t.error) return toast(TERR(t.error));
  P.album[card]--; P.trades = P.trades || {}; P.trades[code] = { role: 'b', gave: card }; P.tday.n++; save();
  SFX.coin(); toast(L('📨 Oferta enviada! Quan l\'accepti, tindràs la carta nova.', '📨 ¡Oferta enviada! Cuando la acepte, tendrás la carta nueva.')); renderAlbum('trade');
}
async function answerTrade(code, yes) {
  const act = yes === true ? 'accept' : yes === false ? 'reject' : 'cancel';
  let t; try { t = await tApi(act, { tcode: code }); } catch (e) { return toast(TERR()); }
  if (t.error) return toast(TERR(t.error));
  const s = settleTrade(t); save();
  if (s && s.got) { SFX.win(); confetti(120); const c = cardById(s.got); FLOW = [() => scrPack([{ s: c, dup: (P.album[s.got] || 0) > 1 }])]; FLOW.back = 'album'; return flowNext(); }
  renderAlbum('trade');
}
// Enllaç directe: mates-numi.vercel.app/?t=CANVI-1234
(() => { const t = new URLSearchParams(location.search).get('t'); if (!t) return; history.replaceState(null, '', location.pathname); if (P) setTimeout(() => { go('album'); renderAlbum('trade'); openTrade(t); }, 400); })();
