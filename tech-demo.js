/* ===== Numi Tech · demostració sense compte (enllaç del web per a centres) =====
   https://tech.numimates.com/?demo=1  (fora del domini: ?v=tech&demo=1)
   Obre la primera sessió de Tech Robot amb un perfil només en memòria: no es crea cap compte, no se sincronitza res
   i, en tornar a carregar, l'app torna al perfil que hi hagués al dispositiu. Les altres sessions es veuen tancades
   i conviden a demanar Numi Tech per al centre. */
const TVIS = (() => { try { return new URLSearchParams(location.search).has('demo') && (HOST_VAR === 'tech' || VAR_TEST === 'tech'); } catch (e) { return false; } })();
const TVIS_URL = () => LANG === 'es' ? 'https://numimates.com/es/numi-tech#contacte' : 'https://numimates.com/numi-tech#contacte';
if (TVIS) {
  // perfil de demostració: holdReg evita qualsevol sincronització amb el servidor; no s'afegeix a DB.profiles
  const tvisStart = () => {
    // l'idioma pot venir de l'enllaç del web (&lang=es)
    try { const lg = new URLSearchParams(location.search).get('lang'); if (lg === 'es' || lg === 'ca') setLang(lg, false); } catch (e) { }
    P = { id: 'demo', name: L('Visitant', 'Visitante'), goal: 20, sound: true, lang: LANG, ...freshProgress(), variant: 'tech', holdReg: true, consent: 'ok', demo: true,
      tech: { c: 'robot', s: {}, port: [], badges: {} },
      classe: { nom: L('Demostració', 'Demostración'), opts: { app: 'tech', tech: { courses: ['robot'], fins: { robot: 'r1-1' }, casa: true } } } };
    setVariant('tech');
    const st = document.createElement('style');
    st.textContent = `.tdemo-bar{position:fixed;left:50%;bottom:calc(84px + env(safe-area-inset-bottom));transform:translateX(-50%);z-index:60;display:flex;align-items:center;gap:10px;max-width:calc(100vw - 20px);padding:8px 8px 8px 14px;border-radius:999px;background:#1B2B6B;color:#fff;font:600 13.5px/1.25 inherit;box-shadow:0 10px 28px rgba(16,28,80,.35)}
.tdemo-bar a{flex:none;padding:7px 12px;border-radius:999px;background:#FFC531;color:#3A2600;font-weight:800;text-decoration:none;white-space:nowrap}
.tdemo-bar span{min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
@media (min-width:700px){.tdemo-bar{bottom:18px}}
.tdemo-end .btn,.sheet a.btn{text-decoration:none;display:flex;align-items:center;justify-content:center}
body:has(.tsess) .tdemo-bar,body:has(.modal-bg) .tdemo-bar{display:none}
.tdemo-end{margin:14px auto 0;max-width:460px;padding:16px 18px;border-radius:18px;background:#EEF2FF;border:2px solid #C9D4FF;text-align:left}
.tdemo-end b{display:block;font-size:17px;margin-bottom:4px;color:#1B2B6B}.tdemo-end p{margin:0 0 12px;color:#3B4675}
.tdemo-end .btn{width:100%}`;
    document.head.appendChild(st);
    const bar = document.createElement('div'); bar.className = 'tdemo-bar';
    bar.innerHTML = `<span>${L('Mode demostració', 'Modo demostración')}</span><a href="${TVIS_URL()}" target="_top">${L('Per al meu centre', 'Para mi centro')}</a>`;
    document.body.appendChild(bar);
    techGo('home'); tOpen('r1-1');
  };
  // en la demo, la navegació es queda sempre dins de Numi Tech (el perfil no és dels habituals)
  const g1 = go; go = function (v) { if (P && P.demo) { closeModal(); return techGo(v === 'profiles' || v === 'onboard' ? 'home' : v); } return g1.apply(this, arguments); };
  // sessions tancades: invitació per al centre en lloc de «t'ho obrirà el professor»
  tLocked = function (c) {
    modal(`<div class="sheet card cent"><div class="tsoonico" style="--cc:${c.color}">${c.ico}</div><h3>${L('A la demostració hi ha la primera sessió', 'En la demostración está la primera sesión')}</h3>
      <p>${L(`Amb Numi Tech, el centre té els cinc cursos sencers (unes trenta sessions cadascun), el panell del professor i tot el material de classe.`, `Con Numi Tech, el centro tiene los cinco cursos completos (unas treinta sesiones cada uno), el panel del profesor y todo el material de clase.`)}</p>
      <a class="btn big" href="${TVIS_URL()}" target="_top">${L('DEMANA NUMI TECH PER AL TEU CENTRE', 'PIDE NUMI TECH PARA TU CENTRO')}</a><button class="btn ghost big" onclick="closeModal()">${L('CONTINUA MIRANT', 'SIGUE MIRANDO')}</button></div>`, true);
  };
  // en acabar la sessió: la crida a demanar-ho per al centre
  const f1 = tFinish; tFinish = function () {
    f1.apply(this, arguments);
    const end = document.querySelector('.tend');
    if (end) end.insertAdjacentHTML('beforeend', `<div class="tdemo-end"><b>${L('Això és una sessió de Numi Tech', 'Esto es una sesión de Numi Tech')}</b><p>${L('Vols els cinc cursos per a les extraescolars del teu centre, amb el panell del professor i el material de cada sessió?', '¿Quieres los cinco cursos para las extraescolares de tu centro, con el panel del profesor y el material de cada sesión?')}</p><a class="btn big" href="${TVIS_URL()}" target="_top">${L('DEMANA UNA DEMOSTRACIÓ', 'PIDE UNA DEMOSTRACIÓN')}</a></div>`);
  };
  // tech.js ha programat la seva primera pantalla amb setTimeout(0): la demo va després
  setTimeout(tvisStart, 0);
}
