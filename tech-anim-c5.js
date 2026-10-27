/* Numi Tech · Tech Digital · animacions de teoria (TANI). Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */

/* ── unitat 1 ── */
/* Tech Digital · unitat 1 «Segur a la xarxa» · animacions de teoria (TANI)
   Dibuixos propis de Numi (SVG de 320 d'ample). Cap marca, app ni web reals: les pantalles i els perfils són inventats.
   d1pass  què fa forta una contrasenya (llargada, varietat)      d1frase  frase de contrasenya amb paraules sense relació
   d1dos   verificació en dos passos (el que saps + el que tens)  d1dades  dades personals i dades que es poden compartir
   d1foto  les pistes del fons d'una foto                          d1rastre l'empremta digital: cada clic deixa una petjada
   d1copia el que es publica es pot copiar (esborrar no ho treu tot) d1norma una norma general → una norma clara
   d1stop  davant d'un desconegut: no contesto, bloquejo i ho explico a un adult */
Object.assign(TANI, (() => {
  // un emoji de Numi (es converteix en la il·lustració 3D) dins d'un grup que porta l'animació
  const em = (x, y, e, fs = 26) => `<text x="${x}" y="${y}" font-size="${fs}" text-anchor="middle">${e}</text>`;
  // un cadenat: obert (vermell) o tancat (verd)
  const lock = (x, y, open, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-7 -2V-9a7 7 0 0 1 14 0${open ? 'V-14' : 'V-2'}" fill="none" stroke="${open ? '#C94A4A' : '#1E8A50'}" stroke-width="3.4" stroke-linecap="round" ${open ? 'transform="translate(5 -4) rotate(18)"' : ''}/><rect x="-10" y="-3" width="20" height="16" rx="4" fill="${open ? '#EF5A5A' : '#3CC47C'}"/><circle cy="4" r="2.6" fill="#fff"/></g>`;
  // una barra que s'omple (SMIL), sincronitzada amb l'entrada del grup
  const bar = (x, y, w, f, col, t) => `<rect x="${x}" y="${y}" width="${w}" height="10" rx="5" fill="#EEF1F8"/><rect x="${x}" y="${y}" width="0" height="10" rx="5" fill="${col}"><animate attributeName="width" values="0;0;${(w * f).toFixed(0)};${(w * f).toFixed(0)}" keyTimes="0;.06;.24;1" dur="5.5s" begin="${t}s" repeatCount="indefinite"/></rect>`;
  // un mòbil petit
  const phone = (x, y, w, h, inner = '') => `<g transform="translate(${x} ${y})"><rect width="${w}" height="${h}" rx="14" fill="#1B1F2E"/><rect x="5" y="12" width="${w - 10}" height="${h - 24}" rx="6" fill="#F3F6FF"/><rect x="${w / 2 - 9}" y="5" width="18" height="3" rx="1.5" fill="#4A5170"/>${inner}</g>`;
  return {
    // què fa forta una contrasenya: tres contrasenyes, cada vegada més llargues i variades
    d1pass() {
      const rows = [['gat', 'gato', .2, '#EF5A5A', L('Molt feble', 'Muy débil'), 1], ['gat2015', 'gato2015', .42, '#F08A24', L('Feble', 'Débil'), 1], ['Cactus-Núvol-Sopa-Trompeta', 'Cactus-Nube-Sopa-Trompeta', 1, '#1E8A50', L('Molt forta', 'Muy fuerte'), 0]];
      return tSvg(222, `<text x="160" y="22" text-anchor="middle" class="tat b">${L('Com més llarga i variada, més forta', 'Cuanto más larga y variada, más fuerte')}</text>
        ${rows.map(([ca, es, f, col, lab, open], i) => { const y = 36 + i * 62, t = .3 + i * 1.1;
          return `<g ${tA(t, 'ta-in')}><rect x="12" y="${y}" width="296" height="54" rx="14" fill="#fff" stroke="${i === 2 ? '#A8E0C0' : '#DCE4FA'}" stroke-width="2" filter="url(#bwSh)"/>
            <text x="26" y="${y + 23}" class="tat">${L(ca, es)}</text>${bar(26, y + 33, 170, f, col, t)}<text x="206" y="${y + 43}" class="tat s" fill="${col}" style="fill:${col}">${lab}</text>${lock(284, y + 18, open)}</g>`; }).join('')}`);
    },
    // frase de contrasenya: quatre paraules que no tenen res a veure i una imatge absurda per recordar-les
    d1frase() {
      const w = [['🐢', L('tortuga', 'tortuga')], ['🍊', L('taronja', 'naranja')], ['🚀', L('coet', 'cohete')], ['🎈', L('globus', 'globo')]];
      return tSvg(232, `<text x="160" y="20" text-anchor="middle" class="tat b">${L('Quatre paraules sense relació', 'Cuatro palabras sin relación')}</text>
        ${w.map(([e, t], i) => { const x = 14 + i * 75; return `<g ${tA(.3 + i * .45)}><rect x="${x}" y="32" width="67" height="74" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${em(x + 33.5, 70, e, 28)}<text x="${x + 33.5}" y="96" text-anchor="middle" class="tat s">${t}</text></g>`; }).join('')}
        <g ${tA(2.2, 'ta-in')}><path d="M160 112v14" stroke="#2F5BEA" stroke-width="4" stroke-linecap="round"/><path d="M152 120l8 8l8 -8" fill="none" stroke="#2F5BEA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.5, 'ta-in')}><rect x="12" y="134" width="296" height="52" rx="14" fill="#fff" stroke="#A8E0C0" stroke-width="2.5"/><text x="26" y="156" class="tat">${L('tortuga taronja coet globus', 'tortuga naranja cohete globo')}</text>${bar(26, 166, 190, 1, '#1E8A50', 2.5)}<text x="224" y="176" class="tat s" style="fill:#1E8A50">${L('Molt forta', 'Muy fuerte')}</text>${lock(288, 152, 0)}</g>
        <g ${tA(3.3, 'ta-fade')}><text x="160" y="210" text-anchor="middle" class="tat s">${L('Imagina una tortuga taronja que vola en coet', 'Imagina una tortuga naranja que vuela en cohete')}</text><text x="160" y="226" text-anchor="middle" class="tat s">${L('amb un globus: així no se t\'oblida!', 'con un globo: ¡así no se te olvida!')}</text></g>`);
    },
    // verificació en dos passos: la contrasenya (el que saps) + un codi al mòbil (el que tens)
    d1dos() {
      const notif = `<g ${tA(1.7)}><rect x="10" y="40" width="80" height="58" rx="10" fill="#fff" stroke="#3D7BF4" stroke-width="2"/><text x="50" y="62" text-anchor="middle" class="tat s">${L('El teu codi', 'Tu código')}</text><text x="50" y="86" text-anchor="middle" class="tat b" style="fill:#2F5BEA">482 615</text></g>`;
      return tSvg(224, `<g ${tA(.2, 'ta-in')}><rect x="12" y="14" width="186" height="172" rx="18" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><rect x="12" y="14" width="186" height="34" rx="18" fill="#2F5BEA"/><rect x="12" y="34" width="186" height="14" fill="#2F5BEA"/><text x="105" y="37" text-anchor="middle" class="tat w">${L('Entra al teu compte', 'Entra en tu cuenta')}</text></g>
        <g ${tA(.6, 'ta-in')}><text x="26" y="70" class="tat s">1 · ${L('Contrasenya', 'Contraseña')}</text><rect x="26" y="77" width="158" height="30" rx="9" fill="#F3F6FF" stroke="#C9D6FB" stroke-width="2"/><text x="38" y="98" class="tat">••••••••••</text></g>
        <g ${tA(1.1)}>${lock(168, 88, 0, .8)}</g>
        <g ${tA(2.3, 'ta-in')}><text x="26" y="128" class="tat s">2 · ${L('Codi del mòbil', 'Código del móvil')}</text><rect x="26" y="135" width="158" height="30" rx="9" fill="#F3F6FF" stroke="#C9D6FB" stroke-width="2"/><text x="38" y="156" class="tat">482 615</text></g>
        <g ${tA(2.9)}>${lock(168, 146, 0, .8)}</g>
        ${phone(214, 18, 100, 168, notif)}
        <g ${tA(2.2, 'ta-fade')}><path d="M222 110 Q200 150 190 150" fill="none" stroke="#2F5BEA" stroke-width="3" stroke-dasharray="5 5" class="ta-dash"/></g>
        <g ${tA(3.4)}><rect x="12" y="192" width="296" height="28" rx="14" fill="#3CC47C"/><text x="160" y="211" text-anchor="middle" class="tat w s">${L('Dos panys: el que saps i el que tens', 'Dos candados: lo que sabes y lo que tienes')}</text></g>`);
    },
    // dades personals (es guarden) i coses que sí que es poden compartir
    d1dades() {
      const rows = [['👤', L('Nom i cognoms', 'Nombre y apellidos')], ['🏫', L("L'escola", 'El colegio')], ['🗺️', L("L'adreça de casa", 'La dirección de casa')], ['🔢', L('El telèfon', 'El teléfono')], ['🧭', L('On ets ara', 'Dónde estás ahora')]];
      const ok = [['🖍️', L('Color preferit', 'Color favorito')], ['🐢', L('Animal preferit', 'Animal favorito')], ['✏️', L('Un dibuix', 'Un dibujo')]];
      return tSvg(226, `<text x="104" y="20" text-anchor="middle" class="tat b">${L('Dades personals', 'Datos personales')}</text><text x="262" y="20" text-anchor="middle" class="tat b" style="fill:#1E8A50">${L('Es pot dir', 'Se puede decir')}</text>
        <rect x="10" y="30" width="190" height="188" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        ${rows.map(([e, t], i) => { const y = 38 + i * 35; return `<g ${tA(.3 + i * .35, 'ta-in')}><rect x="18" y="${y}" width="174" height="29" rx="9" fill="#F3F6FF"/>${em(34, y + 22, e, 18)}<text x="52" y="${y + 20}" class="tat s">${t}</text></g>`; }).join('')}
        <g ${tA(2.3)}><rect x="10" y="30" width="190" height="188" rx="16" fill="#2F5BEA" fill-opacity=".08" stroke="#2F5BEA" stroke-width="3"/><circle cx="192" cy="34" r="19" fill="#2F5BEA" stroke="#fff" stroke-width="3"/><g transform="translate(192 32) scale(1.05)"><path d="M-7 -2V-9a7 7 0 0 1 14 0V-2" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/><rect x="-10" y="-3" width="20" height="16" rx="4" fill="#fff"/><circle cy="4" r="2.6" fill="#2F5BEA"/></g></g>
        ${ok.map(([e, t], i) => { const y = 34 + i * 62; return `<g ${tA(2.9 + i * .3, 'ta-pop')}><rect x="210" y="${y}" width="104" height="54" rx="14" fill="#E7F7EE" stroke="#A8E0C0" stroke-width="2"/>${em(232, y + 34, e, 20)}<text x="248" y="${y + 24}" class="tat s">${t.split(' ')[0]}</text><text x="248" y="${y + 41}" class="tat s">${t.split(' ').slice(1).join(' ')}</text></g>`; }).join('')}`);
    },
    // una foto pot dir on vius: el carrer, el número de la porta i l'uniforme de l'escola
    d1foto() {
      const kid = `<g transform="translate(120 140)"><path d="M-6 -20v20M6 -20v20" stroke="#34405E" stroke-width="8" stroke-linecap="round"/><rect x="-17" y="-66" width="34" height="50" rx="12" fill="#8B5CF6"/><circle cx="-6" cy="-50" r="6" fill="#FFD54A" stroke="#fff" stroke-width="1.5"/><path d="M-17 -58l-10 22M17 -58l10 22" stroke="#8B5CF6" stroke-width="9" stroke-linecap="round"/><circle cy="-82" r="18" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2"/><path d="M-18 -86q18 -26 36 0q-5 -14 -18 -14q-13 0 -18 14z" fill="#6B3F20"/><circle cx="-6" cy="-82" r="2.4" fill="#2B1A38"/><circle cx="6" cy="-82" r="2.4" fill="#2B1A38"/><path d="M-6 -74q6 5 12 0" stroke="#2B1A38" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>`;
      const pic = `<rect x="28" y="22" width="190" height="128" rx="6" fill="#BFE6FF"/><path d="M28 120h190v30H28z" fill="#9AD27A"/><path d="M28 132h190v18H28z" fill="#D8C6A4"/>
        <g transform="translate(160 70)"><rect x="0" y="12" width="50" height="50" fill="#F6E3C2" stroke="#B48A55" stroke-width="2"/><path d="M-6 14L25 -10L56 14Z" fill="#E0664F" stroke="#A9302A" stroke-width="2"/><rect x="16" y="32" width="18" height="30" rx="2" fill="#9A6538"/><rect x="18" y="20" width="14" height="10" rx="2" fill="#fff" stroke="#9A6538" stroke-width="1.5"/><text x="25" y="29" text-anchor="middle" style="font:900 9px Lexend,system-ui,sans-serif;fill:#14204A">12</text></g>
        <g transform="translate(62 50)"><rect x="-2" y="24" width="4" height="58" fill="#7A8296"/><rect x="-31" y="2" width="62" height="24" rx="4" fill="#2F7A4A" stroke="#fff" stroke-width="2"/><text x="0" y="19" text-anchor="middle" style="font:800 10.5px Lexend,system-ui,sans-serif;fill:#fff">${L('C/ dels Pins', 'C/ de los Pinos')}</text></g>${kid}`;
      const spots = [[62, 64, 1], [185, 95, 2], [114, 90, 3]], labs = [L('Carrer', 'Calle'), L('Número', 'Número'), L('Uniforme', 'Uniforme')];
      return tSvg(226, `<g ${tA(.1, 'ta-fade')}><rect x="18" y="12" width="210" height="166" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${pic}<text x="123" y="170" text-anchor="middle" class="tat s">${L('Una foto per publicar', 'Una foto para publicar')}</text></g>
        ${spots.map(([x, y, n], i) => `<g ${tA(1 + i * .8)}><circle cx="${x}" cy="${y}" r="${n === 1 ? 33 : 20}" fill="none" stroke="#F2B21B" stroke-width="3.5"/><circle cx="${x + (n === 1 ? 30 : 16)}" cy="${y - (n === 1 ? 22 : 16)}" r="10" fill="#EF5A5A"/><text x="${x + (n === 1 ? 30 : 16)}" y="${y - (n === 1 ? 17 : 11)}" text-anchor="middle" class="tat w s">${n}</text></g>`).join('')}
        ${labs.map((t, i) => `<g ${tA(1.2 + i * .8, 'ta-in')}><circle cx="240" cy="${40 + i * 44}" r="10" fill="#EF5A5A"/><text x="240" y="${45 + i * 44}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="254" y="${45 + i * 44}" class="tat s">${t}</text></g>`).join('')}
        <text x="160" y="208" text-anchor="middle" class="tat b" ${tA(3.6, 'ta-fade')}>${L('Abans de publicar, mira el fons!', '¡Antes de publicar, mira el fondo!')}</text>`);
    },
    // l'empremta digital: en Bit camina i cada cosa que fa a internet deixa una petjada
    d1rastre() {
      const path = 'M22 184 C80 184 70 122 128 122 S190 80 250 86 S292 72 298 68';
      const steps = [[46, 180], [84, 160], [120, 126], [160, 110], [200, 92], [240, 86], [276, 76]];
      const ico = [[50, 116, '📷', L('una foto', 'una foto')], [128, 72, '💬', L('un comentari', 'un comentario')], [210, 50, '😍', L("un m'agrada", 'un me gusta')], [268, 128, '🔍', L('una cerca', 'una búsqueda')]];
      const icon = (e) => e === '📷' ? `<rect x="-11" y="-8" width="22" height="16" rx="4" fill="#3D7BF4"/><circle r="5" fill="#fff"/><circle r="2.6" fill="#3D7BF4"/><rect x="-5" y="-11" width="8" height="4" rx="1.5" fill="#3D7BF4"/>` : e === '💬' ? `<path d="M-11 -8h22a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-12l-6 5v-5h-4a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3z" fill="#F08A24"/><path d="M-6 -2h12M-6 3h8" stroke="#fff" stroke-width="2" stroke-linecap="round"/>` : `<text y="9" font-size="24" text-anchor="middle">${e}</text>`;
      return tSvg(222, `<text x="160" y="20" text-anchor="middle" class="tat b">${L('Cada clic deixa una petjada', 'Cada clic deja una huella')}</text>
        <path d="${path}" fill="none" stroke="#DCE4FA" stroke-width="16" stroke-linecap="round"/>
        ${steps.map(([x, y], i) => `<g ${tA(.25 + i * .45, 'ta-fade')} transform="translate(${x} ${y}) rotate(${-25 - i * 4})"><ellipse cx="-5" cy="0" rx="4" ry="6.5" fill="#2F5BEA"/><ellipse cx="5" cy="-6" rx="4" ry="6.5" fill="#2F5BEA" opacity=".75"/></g>`).join('')}
        ${ico.map(([x, y, e, t], i) => `<g ${tA(.7 + i * .8)}><circle cx="${x}" cy="${y}" r="21" fill="#fff" stroke="#C9D6FB" stroke-width="2.5" filter="url(#bwSh)"/><g transform="translate(${x} ${y})">${icon(e)}</g><text x="${x}" y="${y + 37}" text-anchor="middle" class="tat s">${t}</text></g>`).join('')}
        <g><animateMotion dur="5.5s" repeatCount="indefinite" path="${path}" keyPoints="0;1;1" keyTimes="0;.75;1" calcMode="linear"/>${tBitMini(0, 4, 2, .36)}</g>
        <text x="160" y="214" text-anchor="middle" class="tat s" ${tA(3.4, 'ta-fade')}>${L('A internet no hi ha marea que ho esborri', 'En internet no hay marea que lo borre')}</text>`);
    },
    // el que publiques es pot copiar: l'original s'esborra, però les captures es queden
    d1copia() {
      const post = (big) => `<rect x="12" y="${big ? 30 : 22}" width="${big ? 66 : 46}" height="${big ? 50 : 34}" rx="8" fill="#FFE9C7"/><text x="${big ? 45 : 35}" y="${big ? 64 : 46}" font-size="${big ? 26 : 18}" text-anchor="middle">😍</text>`;
      const small = (x, y, t) => `<g ${tA(t, 'ta-pop')}>${phone(x, y, 70, 96, post(false))}<g transform="translate(${x + 56} ${y + 6})"><circle r="11" fill="#F08A24"/><path d="M-5 -2h10v7h-10z M-2 -2v-3h4v3" fill="none" stroke="#fff" stroke-width="2"/></g></g>`;
      return tSvg(232, `<g ${tA(.2, 'ta-in')}>${phone(14, 22, 90, 150, post(true))}<rect x="26" y="86" width="66" height="10" rx="5" fill="#DCE4FA"/><rect x="26" y="102" width="46" height="10" rx="5" fill="#DCE4FA"/><text x="59" y="190" text-anchor="middle" class="tat s">${L('Original', 'Original')}</text></g>
        ${small(128, 8, 1.2)}${small(232, 8, 1.6)}${small(180, 104, 2)}
        <g ${tA(1.1, 'ta-fade')}><path d="M108 80 Q120 60 130 60M108 100 Q170 90 224 60M108 120 Q140 150 178 160" fill="none" stroke="#F08A24" stroke-width="3" stroke-dasharray="5 6" class="ta-dash"/></g>
        <g ${tA(2.8)}><rect x="16" y="24" width="86" height="146" rx="12" fill="#F3F6FF" fill-opacity=".92" stroke="#EF5A5A" stroke-width="3" stroke-dasharray="7 5"/><text x="59" y="96" text-anchor="middle" class="tat s" style="fill:#C94A4A">${L('Esborrat', 'Borrado')}</text><g transform="translate(59 120)"><path d="M-10 -8h20l-2 20h-16z" fill="#EF5A5A"/><rect x="-13" y="-13" width="26" height="5" rx="2" fill="#C94A4A"/><path d="M-4 -4v12M4 -4v12" stroke="#fff" stroke-width="2" stroke-linecap="round"/></g></g>
        <g ${tA(3.5, 'ta-in')}><rect x="12" y="206" width="296" height="24" rx="12" fill="#14204A"/><text x="160" y="223" text-anchor="middle" class="tat w s">${L("L'has esborrat… però les captures hi són", 'Lo has borrado… pero las capturas siguen ahí')}</text></g>`);
    },
    // davant d'un desconegut que demana dades, fotos o secrets: no contesto, bloquejo i ho explico a un adult
    d1stop() {
      const bub = (y, w, t) => `<rect x="9" y="${y}" width="${w}" height="24" rx="9" fill="#FFE1E1"/><text x="${9 + w / 2}" y="${y + 17}" text-anchor="middle" style="font:700 11px Lexend,system-ui,sans-serif;fill:#8A2B2B">${t}</text>`;
      const msg = bub(22, 62, L('Foto? 🤫', '¿Foto? 🤫')) + bub(54, 66, L('On vius?', '¿Dónde?'));
      const steps = [['stop', [L('No contesto', 'No contesto')], '#EF5A5A', '#FDEBEB'], ['🔒', [L('El bloquejo', 'Lo bloqueo')], '#2F5BEA', '#EAF0FF'], ['🧑', [L('Ho explico', 'Se lo cuento'), L('a un adult', 'a un adulto')], '#1E8A50', '#E7F7EE']];
      return tSvg(226, `<g ${tA(.1, 'ta-in')}>${phone(12, 14, 84, 150, msg)}<text x="54" y="184" text-anchor="middle" class="tat s">${L('Un desconegut', 'Un desconocido')}</text></g>
        ${steps.map(([ic, t, col, bg], i) => { const y = 14 + i * 56, cy = y + 24;
          const icon = ic === 'stop' ? `<circle cx="130" cy="${cy}" r="15" fill="#EF5A5A"/><rect x="121" y="${cy - 3}" width="18" height="6" rx="3" fill="#fff"/>` : em(130, cy + 9, ic, 24);
          return `<g ${tA(.9 + i * .8, 'ta-in')}><rect x="106" y="${y}" width="204" height="48" rx="14" fill="${bg}" stroke="${col}" stroke-width="2.5"/>${icon}${t.map((l, k) => `<text x="154" y="${cy + 5 + (k - (t.length - 1) / 2) * 17}" class="tat" style="font-weight:800">${k ? '' : (i + 1) + '. '}${l}</text>`).join('')}</g>`; }).join('')}
        <g ${tA(3.4, 'ta-pop')}><rect x="36" y="194" width="248" height="28" rx="14" fill="#14204A"/><text x="160" y="213" text-anchor="middle" class="tat w s">${L('Explicar-ho és el que cal fer', 'Contarlo es lo que hay que hacer')}</text></g>`);
    },
    // una bona norma: de general i en negatiu a concreta i en positiu
    d1norma() {
      const box = (y, h, col, bg, mark, lines, t) => `<g ${tA(t, 'ta-in')}><rect x="14" y="${y}" width="292" height="${h}" rx="14" fill="${bg}" stroke="${col}" stroke-width="2.5"/><circle cx="38" cy="${y + h / 2}" r="13" fill="${col}"/><text x="38" y="${y + h / 2 + 5}" text-anchor="middle" class="tat w">${mark}</text>${lines.map((l, i) => `<text x="60" y="${y + h / 2 + 5 + (i - (lines.length - 1) / 2) * 18}" class="tat s">${l}</text>`).join('')}</g>`;
      const chips = [L('Concreta', 'Concreta'), L('En positiu', 'En positivo'), L('Curta', 'Corta')];
      return tSvg(222, `${box(12, 44, '#EF5A5A', '#FDEBEB', '✗', [L('«Sigues bo a internet»', '«Sé bueno en internet»')], .2)}
        <g ${tA(1, 'ta-fade')}><text x="160" y="76" text-anchor="middle" class="tat s" style="fill:#5A6480">${L('Què vol dir, exactament?', '¿Qué quiere decir, exactamente?')}</text></g>
        <g ${tA(1.5, 'ta-in')}><path d="M160 84v12" stroke="#2F5BEA" stroke-width="4" stroke-linecap="round"/><path d="M152 90l8 8l8 -8" fill="none" stroke="#2F5BEA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        ${box(104, 58, '#3CC47C', '#E7F7EE', '✓', [L('«Abans de publicar una foto', '«Antes de publicar una foto'), L("d'algú, li demano permís»", 'de alguien, le pido permiso»')], 2)}
        ${chips.map((c, i) => `<g ${tA(2.8 + i * .35)}><rect x="${12 + i * 100}" y="178" width="96" height="30" rx="15" fill="#2F5BEA"/><text x="${60 + i * 100}" y="198" text-anchor="middle" class="tat w s">${c}</text></g>`).join('')}`);
    }
  };
})());

/* ── unitat 2 ── */
/* Tech Digital · unitat 2 «Pensar abans de creure» · animacions de teoria (TANI)
   Dibuixos propis de Numi: mòbils, notícies, hams, la IA que aprèn d'exemples, el biaix, l'espectador/a actiu/va,
   els passos per demanar ajuda i les tres parts d'una campanya; d2repe (ciberassetjament: es repeteix) i d2noes (què no és una IA).
   Cap marca ni cap app reals. */
{
  // un emoji sol dins d'un <text>: a l'app es converteix en la icona 3D de Numi (si és al mapa)
  const d2e = (x, y, e, s = 24) => `<text x="${x}" y="${y}" font-size="${s}" text-anchor="middle">${e}</text>`;
  // un mòbil: marc fosc, pantalla blanca i una bombolla de missatge (col)
  const d2ph = (x, y, w, h, col = '#FFD7D7') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w * .2}" fill="#1B1F2E"/><rect x="${x + 3}" y="${y + 6}" width="${w - 6}" height="${h - 12}" rx="${w * .1}" fill="#fff"/>
    <rect x="${x + 6}" y="${y + h * .28}" width="${w - 12}" height="${h * .22}" rx="${w * .08}" fill="${col}"/><rect x="${x + 6}" y="${y + h * .58}" width="${(w - 12) * .7}" height="${h * .08}" rx="2" fill="#DCE4FA"/>`;
  // un sofà (lila) i un arbre (verd) dibuixats, per als exemples del biaix
  const d2sofa = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-20" y="-24" width="40" height="16" rx="6" fill="#9D74F7"/><rect x="-22" y="-12" width="44" height="14" rx="5" fill="#8B5CF6"/><rect x="-27" y="-18" width="10" height="22" rx="4" fill="#6E43DB"/><rect x="17" y="-18" width="10" height="22" rx="4" fill="#6E43DB"/><path d="M-20 4v4M20 4v4" stroke="#4B2A9C" stroke-width="3" stroke-linecap="round"/></g>`;
  const d2tree = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-26" y="2" width="52" height="6" rx="3" fill="#7CC456"/><rect x="-3" y="-14" width="6" height="18" rx="2" fill="#8A5A33"/><circle cx="-8" cy="-20" r="10" fill="#4FAE48"/><circle cx="8" cy="-22" r="10" fill="#5CBF52"/><circle cy="-32" r="11" fill="#6CCB5F"/></g>`;
  // un cor petit
  const d2heart = (x, y, s = 1, col = '#EF5A5A') => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 6C-10 -2 -10 -10 -5 -12C-2 -13 0 -11 0 -9C0 -11 2 -13 5 -12C10 -10 10 -2 0 6Z" fill="${col}"/>`;

  Object.assign(TANI, {
    // un bulo corre: un missatge passa d'un mòbil a tres, i de tres a nou… fins que algú s'atura a comprovar-ho
    d2bulo() {
      const B = [52, 100, 148], C = [204, 236, 268];
      const arrow = (x1, y1, x2, y2, t) => `<g ${tA(t, 'ta-fade')}><path d="M${x1} ${y1}L${x2} ${y2}" stroke="#F08A24" stroke-width="3" stroke-dasharray="5 5" stroke-linecap="round"/><circle cx="${x2}" cy="${y2}" r="3.5" fill="#F08A24"/></g>`;
      return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="12" y="6" width="296" height="32" rx="16" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="160" y="27" text-anchor="middle" class="tat b">${L('«Demà no hi ha escola!»', '«¡Mañana no hay cole!»')}</text></g>
        <g ${tA(.4)}>${d2ph(16, 82, 44, 72)}</g>
        ${B.map((y, i) => arrow(62, 118, 108, y + 20, .9 + i * .2)).join('')}
        ${B.map((y, i) => `<g ${tA(1.1 + i * .2)}>${d2ph(112, y, 26, 42)}</g>`).join('')}
        ${B.map((y, i) => arrow(142, y + 21, 194, y + 21, 1.8 + i * .2)).join('')}
        <g>${B.map((y, i) => C.map((x, j) => `<g ${tA(2 + i * .25 + j * .12)}>${d2ph(x, y + 4, 22, 34)}</g>`).join('')).join('')}<animate attributeName="opacity" values="1;1;.3;.3;1" keyTimes="0;.66;.74;.97;1" dur="5.5s" repeatCount="indefinite"/></g>
        <g ${tA(4.1, 'ta-pop')}><rect x="40" y="184" width="240" height="28" rx="14" fill="#3CC47C"/><text x="160" y="203" text-anchor="middle" class="tat w s">${L('Abans de compartir, comprova!', '¡Antes de compartir, comprueba!')}</text></g>`);
    },
    // les tres preguntes del caçador/a de bulos: la lupa repassa la notícia mentre surten les preguntes
    d2lupa() {
      const Q = [[L('Qui ho diu?', '¿Quién lo dice?'), L('Hi ha autor o font?', '¿Hay autor o fuente?'), '#2F5BEA'],
        [L('De quan és?', '¿De cuándo es?'), L('Mira la data', 'Mira la fecha'), '#F08A24'],
        [L('Qui més ho diu?', '¿Quién más lo dice?'), L('Busca altres fonts', 'Busca otras fuentes'), '#3CC47C']];
      return tSvg(214, `<rect x="10" y="14" width="96" height="186" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><rect x="10" y="14" width="96" height="22" rx="10" fill="#14204A"/><text x="58" y="30" text-anchor="middle" class="tat w s">${L('NOTÍCIA', 'NOTICIA')}</text>
        <rect x="20" y="44" width="76" height="8" rx="4" fill="#14204A"/><rect x="20" y="56" width="58" height="8" rx="4" fill="#14204A"/>
        <rect x="18" y="70" width="80" height="12" rx="4" fill="#FFE07A" ${tA(.5, 'ta-fade')}/><rect x="22" y="73" width="44" height="6" rx="3" fill="#8A94B8"/>
        <rect x="18" y="86" width="80" height="12" rx="4" fill="#FFE07A" ${tA(1.7, 'ta-fade')}/><rect x="22" y="89" width="30" height="6" rx="3" fill="#8A94B8"/>
        <rect x="20" y="104" width="76" height="44" rx="6" fill="#CFE3FF"/><path d="M24 144l18-22 12 14 9-9 17 17z" fill="#7FA8E8"/><circle cx="82" cy="114" r="5" fill="#FFD54A"/>
        ${[156, 166, 176, 186].map((y, i) => `<rect x="20" y="${y}" width="${[76, 70, 74, 50][i]}" height="5" rx="2.5" fill="#DCE4FA"/>`).join('')}
        <rect x="16" y="152" width="84" height="40" rx="6" fill="none" stroke="#3CC47C" stroke-width="3" stroke-dasharray="5 4" ${tA(2.9, 'ta-fade')}/>
        <g><animateTransform attributeName="transform" type="translate" values="58 74;58 74;58 92;58 92;58 172;58 172;58 74" keyTimes="0;.12;.3;.5;.6;.9;1" dur="5.5s" repeatCount="indefinite"/>
          <circle r="17" fill="#E8F4FF" fill-opacity=".45" stroke="#20306A" stroke-width="4.5"/><path d="M12 12l14 14" stroke="#20306A" stroke-width="7" stroke-linecap="round"/></g>
        ${Q.map(([a, b, c], i) => `<g ${tA(.4 + i * 1.2, 'ta-in')}><rect x="118" y="${16 + i * 62}" width="194" height="52" rx="14" fill="#fff" stroke="${c}" stroke-width="2.5" filter="url(#bwSh)"/>
          <circle cx="140" cy="${42 + i * 62}" r="13" fill="${c}"/><text x="140" y="${47 + i * 62}" text-anchor="middle" class="tat w">${i + 1}</text>
          <text x="162" y="${38 + i * 62}" class="tat b">${a}</text><text x="162" y="${56 + i * 62}" class="tat s">${b}</text></g>`).join('')}`);
    },
    // phishing: un missatge amb un «premi» fa de ham, i si escrius la contrasenya… te la pesquen
    d2ham() {
      const tag = (y, e, t, d) => `<g ${tA(d, 'ta-in')}><rect x="212" y="${y}" width="100" height="28" rx="14" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><g>${d2e(230, y + 20, e, 16)}</g><text x="244" y="${y + 19}" class="tat s">${t}</text></g>`;
      return tSvg(214, `<rect x="16" y="20" width="110" height="188" rx="22" fill="#1B1F2E"/><rect x="22" y="30" width="98" height="168" rx="14" fill="#fff"/>
        <g ${tA(.2, 'ta-pop')}><rect x="25" y="40" width="92" height="66" rx="12" fill="#F3F6FF" stroke="#DCE4FA" stroke-width="2"/><g>${d2e(71, 70, '🎁', 24)}</g><text x="71" y="96" text-anchor="middle" class="tat s">${L('Has guanyat!', '¡Has ganado!')}</text></g>
        <g ${tA(.8, 'ta-pop')}><rect x="34" y="114" width="74" height="26" rx="13" fill="#EF5A5A"/><text x="71" y="132" text-anchor="middle" class="tat w s">${L('Toca aquí', 'Toca aquí')}</text></g>
        <g ${tA(1.6, 'ta-in')}><rect x="25" y="150" width="92" height="38" rx="8" fill="#fff" stroke="#EF5A5A" stroke-width="2"/><text x="71" y="165" text-anchor="middle" class="tat s" style="fill:#8A94B8">${L('contrasenya', 'contraseña')}</text><text x="71" y="182" text-anchor="middle" class="tat">••••••</text></g>
        <g><animateTransform attributeName="transform" type="translate" values="0 -70;0 0;0 0;0 -64;0 -64" keyTimes="0;.18;.56;.76;1" dur="5.5s" repeatCount="indefinite"/>
          <path d="M184 -40V118q0 16 -14 16q-12 0 -12 -12" fill="none" stroke="#5E667A" stroke-width="3.5" stroke-linecap="round"/><path d="M158 122l-4 -8M158 122l7 -3" stroke="#5E667A" stroke-width="3" stroke-linecap="round"/></g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.44;.9;1" dur="5.5s" repeatCount="indefinite"/>
          <animateTransform attributeName="transform" type="translate" values="98 170;98 170;158 128;158 64;158 64" keyTimes="0;.42;.56;.76;1" dur="5.5s" repeatCount="indefinite"/>
          <circle cx="-8" cy="0" r="8" fill="none" stroke="#F2B21B" stroke-width="4"/><path d="M0 0h16M10 0v6M15 0v5" stroke="#F2B21B" stroke-width="4" stroke-linecap="round"/></g>
        <text x="262" y="104" text-anchor="middle" class="tat s" ${tA(2.8, 'ta-fade')}>${L("Pistes d'engany", 'Pistas de engaño')}</text>
        ${tag(114, '🎁', L('Premis', 'Premios'), 3.1)}${tag(148, '⏱', L('Presses', 'Prisas'), 3.5)}${tag(182, '😟', L('Por', 'Miedo'), 3.9)}`);
    },
    // una IA aprèn d'exemples: gats i gossos amb la resposta entren a la IA; després, davant d'una foto nova, endevina
    d2ia() {
      const ex = [['🐱', L('gat', 'gato')], ['🐶', L('gos', 'perro')], ['🐱', L('gat', 'gato')], ['🐶', L('gos', 'perro')]];
      return tSvg(214, `<text x="52" y="14" text-anchor="middle" class="tat s" ${tA(.1, 'ta-fade')}>${L('Exemples', 'Ejemplos')}</text>
        ${ex.map(([e, l], i) => `<g ${tA(.2 + i * .3, 'ta-in')}><rect x="10" y="${22 + i * 44}" width="84" height="36" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d2e(32, 48 + i * 44, e, 22)}</g><text x="50" y="${45 + i * 44}" class="tat s">${l}</text></g>
          <path d="M96 ${40 + i * 44}L128 100" stroke="#C9D6FB" stroke-width="3" ${tA(1.4 + i * .1, 'ta-fade')}/>`).join('')}
        <g ${tA(.6, 'ta-pop')}><rect x="128" y="58" width="74" height="84" rx="18" fill="#14204A"/><rect x="128" y="58" width="74" height="84" rx="18" fill="none" stroke="#9D74F7" stroke-width="4"><animate attributeName="stroke-opacity" values="0;0;1;0;0;1;0" keyTimes="0;.26;.32;.4;.6;.66;.74" dur="5.5s" repeatCount="indefinite"/></rect>
          <g>${d2e(165, 106, '🤖', 34)}</g><text x="165" y="132" text-anchor="middle" class="tat w b">IA</text></g>
        <g ${tA(2.3, 'ta-in')}><text x="262" y="14" text-anchor="middle" class="tat s">${L('Foto nova', 'Foto nueva')}</text><rect x="222" y="22" width="84" height="40" rx="10" fill="#fff" stroke="#9D74F7" stroke-width="2.5" stroke-dasharray="6 4"/><g>${d2e(250, 50, '🐱', 22)}</g><text x="276" y="48" class="tat b">?</text></g>
        <path d="M222 50L204 80" stroke="#9D74F7" stroke-width="3" stroke-linecap="round" ${tA(2.8, 'ta-fade')}/>
        <path d="M204 120L222 138" stroke="#3CC47C" stroke-width="3" stroke-linecap="round" ${tA(3.3, 'ta-fade')}/>
        <g ${tA(3.5, 'ta-pop')}><rect x="210" y="132" width="104" height="38" rx="14" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="262" y="156" text-anchor="middle" class="tat b">${L('És un gat!', '¡Es un gato!')}</text></g>
        <text x="160" y="204" text-anchor="middle" class="tat b" ${tA(4, 'ta-fade')}>${L('Aprèn dels exemples que li dones', 'Aprende de los ejemplos que le das')}</text>`);
    },
    // biaix: tots els gats dels exemples són en un sofà i tots els gossos al parc… i la IA aprèn «sofà = gat»
    d2biaix() {
      const card = (x, y, bg, e, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="58" height="58" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>${bg === 's' ? d2sofa(x + 29, y + 48, .8) : d2tree(x + 29, y + 48, .7)}<g>${d2e(x + (bg === 's' ? 29 : 20), y + (bg === 's' ? 34 : 50), e, 20)}</g></g>`;
      return tSvg(230, `${[0, 1, 2].map(i => card(10 + i * 64, 10, 's', '🐱', .2 + i * .25)).join('')}<text x="200" y="44" class="tat b" ${tA(.9, 'ta-fade')}>= ${L('gat', 'gato')}</text>
        ${[0, 1, 2].map(i => card(10 + i * 64, 76, 't', '🐶', 1 + i * .25)).join('')}<text x="200" y="110" class="tat b" ${tA(1.7, 'ta-fade')}>= ${L('gos', 'perro')}</text>
        <g ${tA(2.2, 'ta-pop')}><g>${d2e(288, 96, '🤖', 34)}</g><rect x="258" y="14" width="58" height="44" rx="14" fill="#fff" stroke="#9D74F7" stroke-width="2"/><path d="M282 58l-2 10 10-10" fill="#fff" stroke="#9D74F7" stroke-width="2" stroke-linejoin="round"/><g>${d2sofa(287, 50, .45)}</g><text x="287" y="30" text-anchor="middle" class="tat s">= ${L('gat', 'gato')}</text></g>
        <path d="M6 146H314" stroke="#DCE4FA" stroke-width="2" stroke-dasharray="4 5"/>
        <text x="40" y="164" text-anchor="middle" class="tat s" ${tA(2.7, 'ta-fade')}>${L('Prova', 'Prueba')}</text>
        <g ${tA(2.8, 'ta-pop')}><rect x="70" y="152" width="58" height="58" rx="12" fill="#fff" stroke="#9D74F7" stroke-width="2.5" stroke-dasharray="6 4"/>${d2sofa(99, 200, .8)}<g>${d2e(99, 186, '🐶', 20)}</g></g>
        <path d="M134 181h22" stroke="#EF5A5A" stroke-width="3.5" stroke-linecap="round" ${tA(3.2, 'ta-fade')}/>
        <g ${tA(3.4, 'ta-pop')}><rect x="160" y="162" width="96" height="38" rx="14" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2.5"/><text x="208" y="186" text-anchor="middle" class="tat b">${L('Gat!', '¡Gato!')}</text></g>
        <g ${tA(3.8, 'ta-wob')}><circle cx="282" cy="181" r="16" fill="#EF5A5A"/><path d="M275 174l14 14M289 174l-14 14" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g>
        <text x="160" y="226" text-anchor="middle" class="tat s" ${tA(4.2, 'ta-fade')}>${L("Ha après el sofà, no l'animal: biaix", 'Ha aprendido el sofá, no el animal: sesgo')}</text>`);
    },
    // l'espectador/a actiu/va: davant d'una burla, dona suport, no s'hi suma i ho explica a un adult; la cara canvia
    d2esp() {
      const act = [['🤝', L('Li dono suport', 'Le doy apoyo')], ['🛡', L("No m'hi sumo", 'No me sumo')], ['🧑', L('Aviso un adult', 'Aviso a un adulto')]];
      const face = (mood) => mood === 'sad' ? `<circle cx="-9" cy="-4" r="3" fill="#2B1A38"/><circle cx="9" cy="-4" r="3" fill="#2B1A38"/><path d="M-9 13q9 -8 18 0" stroke="#2B1A38" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M-12 -12l6 3M12 -12l-6 3" stroke="#2B1A38" stroke-width="2.5" stroke-linecap="round"/>`
        : `<circle cx="-9" cy="-4" r="3" fill="#2B1A38"/><circle cx="9" cy="-4" r="3" fill="#2B1A38"/><path d="M-10 7q10 10 20 0" stroke="#2B1A38" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="-16" cy="5" r="4" fill="#F7A8A8" opacity=".7"/><circle cx="16" cy="5" r="4" fill="#F7A8A8" opacity=".7"/>`;
      return tSvg(226, `<g ${tA(.1, 'ta-in')}><rect x="10" y="8" width="300" height="36" rx="16" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><text x="160" y="31" text-anchor="middle" class="tat s">${L('«Mireu quina foto més ridícula!»', '«¡Mirad qué foto más ridícula!»')}</text></g>
        <g transform="translate(66 118)"><path d="M-30 58q0 -30 30 -30t30 30z" fill="#3D7BF4"/><circle r="30" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2.5"/><path d="M-30 -6q2 -30 30 -28q28 -2 30 28q-8 -18 -30 -18t-30 18z" fill="#6B3F20"/>
          <g>${face('sad')}<animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.66;.7;.97;1" dur="5.5s" repeatCount="indefinite"/></g>
          <g opacity="0">${face('happy')}<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.66;.7;.97;1" dur="5.5s" repeatCount="indefinite"/></g></g>
        <text x="66" y="200" text-anchor="middle" class="tat s">${L("l'Àlex", 'Álex')}</text>
        ${[[34, 68, 2.4], [98, 74, 2.9], [70, 56, 3.4]].map(([x, y, t]) => `<g ${tA(t, 'ta-pop')}>${d2heart(x, y, 1.3)}</g>`).join('')}
        ${act.map(([e, t], i) => `<g ${tA(.8 + i * .6, 'ta-in')}><rect x="136" y="${58 + i * 48}" width="176" height="40" rx="14" fill="#fff" stroke="#3CC47C" stroke-width="2.5" filter="url(#bwSh)"/><g>${d2e(158, 86 + i * 48, e, 20)}</g><text x="178" y="${83 + i * 48}" class="tat s">${t}</text></g>`).join('')}
        <text x="224" y="220" text-anchor="middle" class="tat b" ${tA(3.8, 'ta-fade')}>${L('Espectador/a actiu/va', 'Espectador/a activo/a')}</text>`);
    },
    // si alguna cosa et fa mal: atura't, guarda una prova, bloqueja, explica-ho a un adult… i mai no és culpa teva
    d2ajuda() {
      const cam = `<g transform="translate(78 0)"><rect x="-13" y="-9" width="26" height="18" rx="4" fill="#5E667A"/><rect x="-6" y="-13" width="12" height="6" rx="2" fill="#5E667A"/><circle r="6" fill="#CFE3FF" stroke="#fff" stroke-width="2"/></g>`;
      const S = [['⏳', L("Atura't i no responguis", 'Para y no respondas'), '#F2B21B'], ['cam', L('Guarda una prova', 'Guarda una prueba'), '#2F5BEA'], ['🔒', L('Bloqueja i denuncia', 'Bloquea y denuncia'), '#8B5CF6'], ['🧑', L('Explica-ho a un adult', 'Cuéntaselo a un adulto'), '#3CC47C']];
      return tSvg(230, `<path d="M42 30V180" stroke="#DCE4FA" stroke-width="4" stroke-dasharray="6 6"/>
        ${S.map(([e, t, c], i) => `<g ${tA(.3 + i * .8, 'ta-in')}><rect x="18" y="${8 + i * 50}" width="294" height="42" rx="14" fill="#fff" stroke="${c}" stroke-width="2.5" filter="url(#bwSh)"/>
          <circle cx="42" cy="${29 + i * 50}" r="13" fill="${c}"/><text x="42" y="${34 + i * 50}" text-anchor="middle" class="tat w">${i + 1}</text>
          ${e === 'cam' ? `<g transform="translate(0 ${29 + i * 50})">${cam}</g>` : `<g>${d2e(78, 37 + i * 50, e, 20)}</g>`}<text x="100" y="${34 + i * 50}" class="tat">${t}</text></g>`).join('')}
        <g ${tA(3.6, 'ta-pop')}><rect x="36" y="204" width="248" height="24" rx="12" fill="#FFF0F3"/>${d2heart(62, 219, 1)}<text x="172" y="222" text-anchor="middle" class="tat b">${L('Mai no és culpa teva', 'Nunca es culpa tuya')}</text></g>`);
    },
    // una campanya té tres parts: el cartell (es veu), el missatge (es recorda) i el pla (arriba a tothom)
    d2camp() {
      const lab = (x, t, d) => `<text x="${x}" y="196" text-anchor="middle" class="tat b" ${tA(d, 'ta-fade')}>${t}</text>`;
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="18" width="94" height="156" rx="10" fill="#FFF8E6" stroke="#F2B21B" stroke-width="2.5"/><circle cx="57" cy="14" r="5" fill="#EF5A5A"/>
          <rect x="20" y="30" width="74" height="14" rx="5" fill="#EF5A5A"/><rect x="28" y="50" width="58" height="8" rx="4" fill="#F08A24"/>
          <g transform="translate(52 100)"><circle r="20" fill="#E8F4FF" stroke="#20306A" stroke-width="5"/><path d="M14 14l14 14" stroke="#20306A" stroke-width="7" stroke-linecap="round"/></g>
          <rect x="22" y="146" width="70" height="16" rx="8" fill="#3CC47C"/></g>${lab(57, L('Cartell', 'Cartel'), .5)}
        <g ${tA(1.4, 'ta-pop')}><path d="M120 40h86a14 14 0 0 1 14 14v58a14 14 0 0 1 -14 14h-54l-18 18v-18h-14a14 14 0 0 1 -14 -14v-58a14 14 0 0 1 14 -14z" fill="#fff" stroke="#2F5BEA" stroke-width="2.5"/>
          <text x="163" y="72" text-anchor="middle" class="tat b">${L('Pensa', 'Piensa')}</text><text x="163" y="92" text-anchor="middle" class="tat s">${L('abans de', 'antes de')}</text><text x="163" y="110" text-anchor="middle" class="tat b">${L('compartir!', '¡compartir!')}</text></g>${lab(163, L('Missatge', 'Mensaje'), 1.7)}
        <g ${tA(2.4, 'ta-in')}><rect x="232" y="22" width="80" height="152" rx="10" fill="#fff" stroke="#3CC47C" stroke-width="2.5"/><rect x="254" y="16" width="36" height="12" rx="4" fill="#8A94B8"/>
          ${[0, 1, 2].map(i => `<rect x="244" y="${48 + i * 40}" width="20" height="20" rx="5" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2"/><rect x="270" y="${54 + i * 40}" width="32" height="8" rx="4" fill="#DCE4FA"/>
            <path d="M248 ${58 + i * 40}l5 5 9-10" fill="none" stroke="#1E8A50" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" ${tA(2.9 + i * .45, 'ta-draw')}/>`).join('')}</g>${lab(272, L('Pla', 'Plan'), 2.7)}
        ${[[110, 160, 4.1], [222, 150, 4.3], [160, 30, 4.5]].map(([x, y, t]) => `<g ${tA(t, 'ta-pop')}>${d2e(x, y, '⭐', 18)}</g>`).join('')}`);
    },
    // ciberassetjament vs discussió: els missatges que fan mal tornen dia rere dia; una discussió s'acaba fent les paus
    d2repe() {
      const days = [L('Dilluns', 'Lunes'), L('Dimarts', 'Martes'), L('Dimecres', 'Miércoles')];
      const bad = [L('Ets un pesat', 'Eres un pesado'), L('Ningú et vol', 'Nadie te quiere'), L('😂😂 mireu-lo', '😂😂 miradlo')];
      return tSvg(226, `<text x="80" y="20" text-anchor="middle" class="tat b" style="fill:#C94A4A">${L('Es repeteix', 'Se repite')}</text><text x="244" y="20" text-anchor="middle" class="tat b" style="fill:#1E8A50">${L('Un sol dia', 'Un solo día')}</text>
        <path d="M160 30v158" stroke="#DCE4FA" stroke-width="3" stroke-dasharray="6 6"/>
        ${days.map((d, i) => { const y = 32 + i * 52; return `<g ${tA(.3 + i * .7, 'ta-in')}><text x="14" y="${y + 15}" class="tat s" style="fill:#5A6480">${d}</text><rect x="14" y="${y + 21}" width="136" height="26" rx="10" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><text x="24" y="${y + 39}" class="tat s" style="fill:#8A2B2B">${bad[i]}</text></g>`; }).join('')}
        <g ${tA(1, 'ta-in')}><rect x="172" y="52" width="136" height="26" rx="10" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="182" y="70" class="tat s">${L('Quina sèrie? 😤', '¿Qué serie? 😤')}</text></g>
        <g ${tA(1.6, 'ta-in')}><rect x="172" y="86" width="136" height="26" rx="10" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="182" y="104" class="tat s">${L('La meva guanya!', '¡La mía gana!')}</text></g>
        <g ${tA(2.4, 'ta-pop')}><rect x="172" y="124" width="136" height="44" rx="12" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/>${d2e(190, 154, '🤝', 20)}<text x="206" y="143" class="tat s" style="font-weight:800">${L('Fem les paus', 'Hacemos las paces')}</text><text x="206" y="160" class="tat s">${L('i ja està', 'y ya está')}</text></g>
        <g ${tA(3.3, 'ta-pop')}><rect x="10" y="192" width="300" height="28" rx="14" fill="#14204A"/><text x="160" y="211" text-anchor="middle" class="tat w s">${L('Mai no és culpa de qui ho pateix', 'Nunca es culpa de quien lo sufre')}</text></g>`);
    },
    // què NO és una IA: no pensa, no sent, es pot equivocar i la fan persones amb exemples
    d2noes() {
      const items = [['🧠', L('No pensa com tu', 'No piensa como tú'), '#8B5CF6'], ['😍', L('No sent res', 'No siente nada'), '#EF5A5A'], ['🔎', L('Es pot equivocar', 'Se puede equivocar'), '#F08A24'], ['🧑', L('La fan persones', 'La hacen personas'), '#1E8A50']];
      return tSvg(226, `<g ${tA(.1, 'ta-pop')}><circle cx="62" cy="100" r="50" fill="#EEF1F8"/>${tBitMini(62, 138, 2, 1)}<text x="62" y="186" text-anchor="middle" class="tat b">${L('Una IA', 'Una IA')}</text></g>
        ${items.map(([e, t, col], i) => { const y = 14 + i * 50; return `<g ${tA(.7 + i * .6, 'ta-in')}><rect x="124" y="${y}" width="186" height="42" rx="13" fill="#fff" stroke="${col}" stroke-width="2.5" filter="url(#bwSh)"/>${d2e(148, y + 30, e, 22)}<text x="170" y="${y + 26}" class="tat s" style="font-weight:800">${t}</text>${i < 2 ? `<path d="M134 ${y + 8}l28 26M162 ${y + 8}l-28 26" stroke="#EF5A5A" stroke-width="3" stroke-linecap="round" opacity=".85"/>` : ''}</g>`; }).join('')}
        <g ${tA(3.4, 'ta-fade')}><text x="160" y="220" text-anchor="middle" class="tat s">${L('Aprèn d\'exemples: no és màgia', 'Aprende de ejemplos: no es magia')}</text></g>`);
    }
  });
}

/* ── unitat 3 ── */
/* Tech Digital · unitat 3 «Benestar i vida digital» · animacions de teoria (TANI)
   Dibuixos propis de Numi: les trampes que fan que no parem (vídeo següent, notificacions), el son i les pantalles,
   les caixes sorpresa dels videojocs, la veu copiada amb IA, buscar amb paraules clau, l'autoria i el pacte digital de casa.
   Cap marca ni cap app reals. */
{
  const d3e = (x, y, e, s = 24) => `<text x="${x}" y="${y}" font-size="${s}" text-anchor="middle">${e}</text>`;
  const d3ph = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w * .16}" fill="#1B1F2E"/><rect x="${x + 4}" y="${y + 8}" width="${w - 8}" height="${h - 16}" rx="${w * .08}" fill="#fff"/>`;

  Object.assign(TANI, {
    // les trampes per no parar: el vídeo següent comença sol, arriben notificacions… i tu decideixes aturar-te
    d3trampa() {
      return tSvg(214, `${d3ph(18, 10, 112, 194)}
        <rect x="26" y="22" width="96" height="70" rx="8" fill="#CFE3FF"/><path d="M60 42v30l26-15z" fill="#fff"/>
        <g ${tA(.4, 'ta-in')}><rect x="26" y="98" width="96" height="40" rx="8" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="74" y="114" text-anchor="middle" class="tat s">${L('El següent vídeo', 'El siguiente vídeo')}</text>
          <text x="74" y="131" text-anchor="middle" class="tat b"><tspan>${L('en', 'en')} </tspan><tspan>5<animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></tspan></text></g>
        <g ${tA(1, 'ta-pop')}><circle cx="118" cy="20" r="11" fill="#EF5A5A"/><text x="118" y="25" text-anchor="middle" class="tat w s">9</text></g>
        ${[[0, '🔔', L('Tens 3 missatges nous', 'Tienes 3 mensajes nuevos')], [1, '🔥', L('No perdis la ratxa!', '¡No pierdas la racha!')], [2, '🎁', L('Premi si tornes ara', 'Premio si vuelves ahora')]].map(([i, e, t]) => `<g ${tA(1.4 + i * .5, 'ta-in')}><rect x="146" y="${14 + i * 40}" width="164" height="32" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d3e(162, 36 + i * 40, e, 16)}</g><text x="176" y="${35 + i * 40}" class="tat s">${t}</text></g>`).join('')}
        <g ${tA(3.2, 'ta-pop')}><rect x="146" y="140" width="164" height="54" rx="16" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><g>${d3e(170, 176, '✋', 24)}</g>
          <text x="188" y="160" class="tat s">${L('Estan fetes perquè', 'Están hechas para que')}</text><text x="188" y="178" class="tat s">${L('no paris.', 'no pares.')} <tspan class="b">${L('Tu decideixes!', '¡Tú decides!')}</tspan></text></g>`);
    },
    // el son: la tauleta es carrega fora de l'habitació i el cos descansa (9-12 hores per a la teva edat)
    d3son() {
      return tSvg(214, `<rect x="10" y="10" width="190" height="194" rx="18" fill="#22306E"/><g ${tA(.2, 'ta-fade')}><circle cx="52" cy="44" r="18" fill="#FFE07A"/><circle cx="60" cy="38" r="16" fill="#22306E"/></g>
        ${[[120, 30], [160, 56], [96, 66], [176, 26]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="2.5" fill="#fff" ${tA(.4 + i * .2, 'ta-fade')}/>`).join('')}
        <rect x="30" y="140" width="150" height="38" rx="10" fill="#7C5CFA"/><rect x="30" y="128" width="42" height="20" rx="8" fill="#fff"/><rect x="66" y="132" width="114" height="20" rx="8" fill="#9D74F7"/>
        <g>${d3e(50, 146, '😴', 28)}</g><text x="120" y="112" class="tat w b" ${tA(1.2, 'ta-fade')}>Z<tspan dx="6" dy="-8" font-size="12">z</tspan><tspan dx="4" dy="-6" font-size="9">z</tspan></text>
        <path d="M200 120h18" stroke="#DCE4FA" stroke-width="3" stroke-dasharray="4 4"/>
        <g ${tA(1.8, 'ta-in')}><rect x="222" y="18" width="88" height="122" rx="14" fill="#F3F6FF" stroke="#DCE4FA" stroke-width="2"/><text x="266" y="36" text-anchor="middle" class="tat s">${L('Fora de', 'Fuera de')}</text><text x="266" y="50" text-anchor="middle" class="tat s">${L("l'habitació", 'la habitación')}</text>
          ${d3ph(248, 60, 36, 60)}<path d="M266 120v14" stroke="#5E667A" stroke-width="3"/><g>${d3e(266, 98, '🔋', 16)}</g></g>
        <g ${tA(2.8, 'ta-pop')}><rect x="212" y="150" width="104" height="54" rx="14" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="264" y="172" text-anchor="middle" class="tat b">9-12 h</text><text x="264" y="192" text-anchor="middle" class="tat s">${L('de son', 'de sueño')}</text></g>`);
    },
    // una caixa sorpresa: les gemmes costen diners de veritat i no saps què hi haurà a dins
    d3caixa() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="12" y="20" width="96" height="62" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d3e(40, 60, '💶', 24)}</g><text x="66" y="46" class="tat s">${L('Diners', 'Dinero')}</text><text x="66" y="64" class="tat s">${L('de veritat', 'de verdad')}</text></g>
        <path d="M110 51h20" stroke="#F08A24" stroke-width="3" stroke-dasharray="5 4" ${tA(.8, 'ta-fade')}/>
        <g ${tA(1, 'ta-in')}><rect x="132" y="20" width="76" height="62" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d3e(170, 60, '💎', 26)}</g><text x="170" y="76" text-anchor="middle" class="tat s">${L('gemmes', 'gemas')}</text></g>
        <path d="M210 51h20" stroke="#F08A24" stroke-width="3" stroke-dasharray="5 4" ${tA(1.5, 'ta-fade')}/>
        <g ${tA(1.7, 'ta-pop')}><rect x="236" y="26" width="72" height="54" rx="10" fill="#9B6CF2"/><rect x="230" y="18" width="84" height="18" rx="6" fill="#7C4DE0"/><text x="272" y="64" text-anchor="middle" class="tat w b" font-size="26">?</text>
          <animateTransform attributeName="transform" type="rotate" values="0 272 50;-4 272 50;4 272 50;0 272 50" dur="1.2s" repeatCount="indefinite"/></g>
        ${[['🧢', 40], ['🥾', 104], ['🐉', 168], ['🧦', 232]].map(([e, x], i) => `<g ${tA(2.4 + i * .3, 'ta-pop')}><rect x="${x}" y="104" width="52" height="52" rx="12" fill="${i === 2 ? '#FFF3D6' : '#F3F6FF'}" stroke="${i === 2 ? '#F2B21B' : '#DCE4FA'}" stroke-width="2"/><g>${d3e(x + 26, 138, e, 24)}</g></g>`).join('')}
        <text x="160" y="178" text-anchor="middle" class="tat s" ${tA(3.6, 'ta-fade')}>${L('Pots tocar qualsevol cosa… o no la que volies', 'Puede tocarte cualquier cosa… o no la que querías')}</text>
        <g ${tA(4, 'ta-pop')}><rect x="40" y="186" width="240" height="26" rx="13" fill="#3CC47C"/><text x="160" y="204" text-anchor="middle" class="tat w s">${L('Abans de comprar, pregunta a un adult', 'Antes de comprar, pregunta a un adulto')}</text></g>`);
    },
    // una veu copiada amb IA: el missatge de veu sembla de l'àvia, però el fa un programa; es comprova trucant
    d3veu() {
      const wave = (x, y, col, d) => `<g ${tA(d, 'ta-in')}>${[8, 18, 26, 14, 22, 10, 20, 12].map((h, i) => `<rect x="${x + i * 9}" y="${y - h / 2}" width="5" height="${h}" rx="2.5" fill="${col}"><animate attributeName="height" values="${h};${h * .4};${h}" dur="${.8 + i * .07}s" repeatCount="indefinite"/></rect>`).join('')}</g>`;
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="12" y="14" width="140" height="70" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d3e(36, 46, '👵', 24)}</g><text x="56" y="40" class="tat b">${L("L'àvia", 'La abuela')}</text></g>${wave(56, 62, '#3CC47C', .5)}
        <g ${tA(1.2, 'ta-pop')}><rect x="168" y="20" width="62" height="58" rx="14" fill="#14204A"/><g>${d3e(199, 56, '🤖', 26)}</g></g>
        <path d="M154 50h12M232 50h12" stroke="#9D74F7" stroke-width="3" stroke-dasharray="4 4" ${tA(1.5, 'ta-fade')}/>
        <g ${tA(1.8, 'ta-in')}><rect x="246" y="14" width="66" height="70" rx="16" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><text x="279" y="40" text-anchor="middle" class="tat s">${L('Còpia', 'Copia')}</text></g>${wave(250, 62, '#EF5A5A', 2)}
        <g ${tA(2.6, 'ta-in')}><rect x="40" y="104" width="240" height="40" rx="14" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="160" y="129" text-anchor="middle" class="tat s">${L('«Envia\'m el codi que t\'ha arribat, ràpid!»', '«¡Envíame el código que te ha llegado, rápido!»')}</text></g>
        <g ${tA(3.6, 'ta-pop')}><rect x="40" y="158" width="240" height="46" rx="16" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><g>${d3e(66, 190, '📞', 22)}</g><text x="86" y="177" class="tat b">${L('Estrany o amb presses?', '¿Raro o con prisas?')}</text><text x="86" y="195" class="tat s">${L('Comprova-ho trucant a la persona', 'Compruébalo llamando a la persona')}</text></g>`);
    },
    // buscar amb cap: paraules clau al cercador, el primer resultat és un anunci i cal mirar més d'una font
    d3cerca() {
      const res = [[L('Anunci', 'Anuncio'), L('Compra prismàtics ara!', '¡Compra prismáticos ya!'), '#EF5A5A'], [L('Museu', 'Museo'), L('Els ocells del riu, amb fotos', 'Las aves del río, con fotos'), '#3CC47C'], [L('Ajuntament', 'Ayuntamiento'), L('Ruta dels ocells del riu', 'Ruta de las aves del río'), '#3CC47C']];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="12" y="8" width="296" height="34" rx="17" fill="#fff" stroke="#2F5BEA" stroke-width="2.5"/><g>${d3e(34, 32, '🔍', 17)}</g>
          <text x="52" y="31" class="tat b">${L('ocells riu Vilabit', 'aves río Vilabit')}</text></g>
        <text x="160" y="60" text-anchor="middle" class="tat s" ${tA(.9, 'ta-fade')}>${L('Poques paraules, les importants', 'Pocas palabras, las importantes')}</text>
        ${res.map(([k, t, c], i) => `<g ${tA(1.4 + i * .5, 'ta-in')}><rect x="12" y="${68 + i * 40}" width="296" height="34" rx="10" fill="#fff" stroke="${i ? '#DCE4FA' : '#F4B7B7'}" stroke-width="2"/>
          <rect x="18" y="${75 + i * 40}" width="96" height="20" rx="10" fill="${c}"/><text x="66" y="${89 + i * 40}" text-anchor="middle" class="tat w s">${k}</text><text x="122" y="${90 + i * 40}" class="tat s">${t}</text></g>`).join('')}
        <text x="160" y="204" text-anchor="middle" class="tat b" ${tA(3.2, 'ta-fade')}>${L("Salta l'anunci i compara dues fonts", 'Sáltate el anuncio y compara dos fuentes')}</text>`);
    },
    // l'autoria: un dibuix té autora; per fer-lo servir, permís o una llicència que ho deixa, i dir de qui és
    d3autor() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="12" width="112" height="150" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><rect x="18" y="20" width="96" height="100" rx="6" fill="#EAF4FF"/>
          <circle cx="48" cy="56" r="13" fill="#FFD54A"/><path d="M22 114l30-34 20 20 14-12 24 26z" fill="#7FC97A"/><text x="66" y="146" text-anchor="middle" class="tat s">${L('Dibuix: Laia', 'Dibujo: Laia')}</text></g>
        <g ${tA(1, 'ta-pop')}><circle cx="112" cy="22" r="15" fill="#14204A"/><text x="112" y="28" text-anchor="middle" class="tat w b">©</text></g>
        ${[[0, '✋', L('Demana permís', 'Pide permiso'), '#2F5BEA'], [1, '📄', L('O mira la llicència', 'O mira la licencia'), '#9B6CF2'], [2, '✍️', L('Digues de qui és', 'Di de quién es'), '#3CC47C']].map(([i, e, t, c]) => `<g ${tA(1.6 + i * .6, 'ta-in')}><rect x="134" y="${16 + i * 50}" width="178" height="40" rx="14" fill="#fff" stroke="${c}" stroke-width="2.5"/><g>${d3e(156, 43 + i * 50, e, 18)}</g><text x="174" y="${41 + i * 50}" class="tat s">${t}</text></g>`).join('')}
        <g ${tA(3.6, 'ta-pop')}><rect x="14" y="174" width="296" height="32" rx="14" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2"/><text x="160" y="195" text-anchor="middle" class="tat s">${L('Foto: Laia Puig · llicència CC BY', 'Foto: Laia Puig · licencia CC BY')}</text></g>`);
    },
    // el pacte digital de casa: acords per a tota la família, que es van marcant
    d3pacte() {
      const R = [['⏰', L('Temps i pauses', 'Tiempo y pausas')], ['🛏️', L('Sense pantalles al llit', 'Sin pantallas en la cama')], ['🎮', L('Partides i compres, amb un adult', 'Partidas y compras, con un adulto')], ['🍽️', L('Mengem sense mòbils', 'Comemos sin móviles')], ['🤝', L('Si passa alguna cosa, ho diem', 'Si pasa algo, lo decimos')]];
      return tSvg(214, `<rect x="12" y="6" width="296" height="202" rx="14" fill="#FFFDF5" stroke="#F2B21B" stroke-width="2.5"/><text x="160" y="30" text-anchor="middle" class="tat b">${L('El pacte digital de casa', 'El pacto digital de casa')}</text>
        ${R.map(([e, t], i) => `<g ${tA(.4 + i * .5, 'ta-in')}><g>${d3e(36, 60 + i * 30, e, 16)}</g><text x="54" y="${59 + i * 30}" class="tat s">${t}</text><g ${tA(.8 + i * .5, 'ta-pop')}><circle cx="288" cy="${54 + i * 30}" r="9" fill="#3CC47C"/><path d="M283 ${54 + i * 30}l4 4 6-7" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/></g></g>`).join('')}
        <g ${tA(3.4, 'ta-fade')}><text x="160" y="202" text-anchor="middle" class="tat s">${L('Ho signem tots: també els adults', 'Lo firmamos todos: también los adultos')}</text></g>`);
    }
  });
}

/* ── unitat 4 ── */
/* Tech Digital · unitat 4 «Ciberseguretat» · animacions de teoria (TANI)
   Dibuixos propis de Numi: les disfresses dels missatges trampa, els quatre passos, els permisos de les apps, el diàleg de
   permís, les wifis que imiten noms, els forats que tapen les actualitzacions, les còpies de seguretat, el bloqueig de
   pantalla i l'escape room. Cap marca ni cap app reals. */
{
  const d4e = (x, y, e, s = 24) => `<text x="${x}" y="${y}" font-size="${s}" text-anchor="middle">${e}</text>`;
  const d4ph = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w * .16}" fill="#1B1F2E"/><rect x="${x + 4}" y="${y + 8}" width="${w - 8}" height="${h - 16}" rx="${w * .08}" fill="#fff"/>`;
  const d4ok = (cx, cy, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="10" fill="${c}"/><path d="M${cx - 5} ${cy}l4 4 6-7" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
  const d4ko = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="10" fill="#EF5A5A"/><path d="M${cx - 4} ${cy - 4}l8 8M${cx + 4} ${cy - 4}l-8 8" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`;

  Object.assign(TANI, {
    // les disfresses de l'engany: paquet, premi, amic, suport… i sempre el mateix truc (que vagis de pressa)
    d4disfressa() {
      const R = [['📦', L('Paquet retingut', 'Paquete retenido')], ['🎁', L('Has guanyat!', '¡Has ganado!')], ['💬', L('«Soc en Pau»', '«Soy Pau»')], ['🛠️', L('«Suport oficial»', '«Soporte oficial»')]];
      return tSvg(226, `${R.map(([e, t], i) => `<g ${tA(.2 + i * .45, 'ta-in')}><rect x="8" y="${8 + i * 44}" width="176" height="36" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d4e(28, 33 + i * 44, e, 18)}</g><text x="46" y="${31 + i * 44}" class="tat s">${t}</text></g>
          <path d="M186 ${26 + i * 44}L204 ${88}" stroke="#F08A24" stroke-width="2.5" stroke-dasharray="4 4" ${tA(.5 + i * .45, 'ta-fade')}/>`).join('')}
        <g ${tA(2.2, 'ta-pop')}><circle cx="256" cy="88" r="50" fill="#FFF3D6" stroke="#F2B21B" stroke-width="3"/><g>${d4e(256, 86, '🎣', 34)}</g>
          <text x="256" y="110" text-anchor="middle" class="tat s">${L('Mateix truc:', 'Mismo truco:')}</text><text x="256" y="127" text-anchor="middle" class="tat b">${L('de pressa!', '¡deprisa!')}</text></g>
        <g ${tA(3.2, 'ta-pop')}><rect x="10" y="186" width="300" height="34" rx="16" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="160" y="208" text-anchor="middle" class="tat b">${L("Atura't, comprova i pregunta", 'Para, comprueba y pregunta')}</text></g>`);
    },
    // els quatre passos davant d'un missatge trampa
    d4passos() {
      const R = [['✋', L("Atura't:", 'Para:'), L('no toquis res', 'no toques nada'), '#EF5A5A'], ['🔍', L('Comprova:', 'Comprueba:'), L('per un altre camí', 'por otro camino'), '#2F5BEA'], ['🗣️', L('Explica-ho:', 'Cuéntalo:'), L('a un adult', 'a un adulto'), '#9B6CF2'], ['🚩', L('Denuncia:', 'Denuncia:'), L('bloqueja i esborra', 'bloquea y borra'), '#3CC47C']];
      return tSvg(214, `${R.map(([e, t, s, c], i) => `<g ${tA(.3 + i * .6, 'ta-in')}><rect x="10" y="${6 + i * 44}" width="300" height="38" rx="14" fill="#fff" stroke="${c}" stroke-width="2.5"/>
          <circle cx="30" cy="${25 + i * 44}" r="12" fill="${c}"/><text x="30" y="${30 + i * 44}" text-anchor="middle" class="tat w s">${i + 1}</text><g>${d4e(60, 32 + i * 44, e, 18)}</g>
          <text x="80" y="${30 + i * 44}" class="tat b">${t} <tspan style="font-size:13.5px;font-weight:700">${s}</tspan></text></g>`).join('')}
        <g ${tA(3, 'ta-pop')}><rect x="10" y="184" width="300" height="28" rx="14" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="160" y="203" text-anchor="middle" class="tat s">${L('Si ja has caigut: explica-ho de seguida', 'Si ya has caído: cuéntalo enseguida')}</text></g>`);
    },
    // un permís és una clau que deixes a una app
    d4permis() {
      const R = [['📷', L('Càmera', 'Cámara')], ['🎙️', L('Micròfon', 'Micrófono')], ['📍', L('Ubicació', 'Ubicación')], ['👥', L('Contactes', 'Contactos')], ['🖼️', L('Fotos', 'Fotos')]];
      return tSvg(216, `${d4ph(20, 14, 96, 168)}${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${32 + (i % 3) * 25}" y="${36 + Math.floor(i / 3) * 28}" width="20" height="20" rx="6" fill="${['#7C9BFF', '#3CC47C', '#F2B21B', '#EF5A5A', '#9B6CF2', '#14A3B8'][i]}"/>`).join('')}
        <g ${tA(.3, 'ta-pop')}><rect x="30" y="104" width="76" height="56" rx="10" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/>${d4e(68, 132, '🔑', 20)}<text x="68" y="152" text-anchor="middle" class="tat s">${L('Permís?', '¿Permiso?')}</text></g>
        ${R.map(([e, t], i) => `<g ${tA(.8 + i * .4, 'ta-in')}><path d="M118 ${120}L148 ${25 + i * 36}" stroke="#C9D3F2" stroke-width="2" stroke-dasharray="3 4"/><rect x="150" y="${10 + i * 36}" width="160" height="30" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d4e(170, 31 + i * 36, e, 16)}</g><text x="188" y="${30 + i * 36}" class="tat s">${t}</text></g>`).join('')}
        <g ${tA(3, 'ta-pop')}><rect x="10" y="188" width="300" height="26" rx="13" fill="#2F5BEA"/><text x="160" y="206" text-anchor="middle" class="tat w s">${L('Un permís = una clau per a una app', 'Un permiso = una llave para una app')}</text></g>`);
    },
    // té sentit? cada app, el permís que necessita (i el que no)
    d4sentit() {
      const R = [['🗺️', L('Mapes', 'Mapas'), '📍', L('Ubicació', 'Ubicación'), 1], ['📸', L('Fotos', 'Fotos'), '📷', L('Càmera', 'Cámara'), 1], ['🧮', L('Calculadora', 'Calculadora'), '👥', L('Contactes', 'Contactos'), 0]];
      return tSvg(214, `${R.map(([e1, a, e2, p, ok], i) => `<g ${tA(.3 + i * .8, 'ta-in')}><rect x="10" y="${8 + i * 52}" width="122" height="42" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d4e(32, 36 + i * 52, e1, 20)}</g><text x="50" y="${34 + i * 52}" class="tat s">${a}</text>
          <path d="M136 ${29 + i * 52}h16" stroke="#9AA6C8" stroke-width="3"/><path d="M150 ${23 + i * 52}l8 6-8 6" fill="#9AA6C8"/>
          <rect x="162" y="${8 + i * 52}" width="118" height="42" rx="14" fill="${ok ? '#E7F7EE' : '#FDEBEB'}" stroke="${ok ? '#3CC47C' : '#EF5A5A'}" stroke-width="2"/><g>${d4e(182, 36 + i * 52, e2, 18)}</g><text x="198" y="${34 + i * 52}" class="tat s">${p}</text></g>
          <g ${tA(.8 + i * .8, 'ta-pop')}>${ok ? d4ok(300, 29 + i * 52) : d4ko(300, 29 + i * 52)}</g>`).join('')}
        <g ${tA(3.2, 'ta-pop')}><rect x="40" y="166" width="240" height="40" rx="18" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2.5"/><text x="160" y="191" text-anchor="middle" class="tat b">${L('Per a què ho necessita?', '¿Para qué lo necesita?')}</text></g>`);
    },
    // el diàleg de permís: sovint hi ha més opcions que «sí» o «no»
    d4dialeg() {
      const B = [[L("Mentre faig servir l'app", 'Mientras uso la app'), 1], [L('Només aquesta vegada', 'Solo esta vez'), 0], [L('No permetre', 'No permitir'), 0]];
      return tSvg(214, `<rect x="30" y="6" width="260" height="168" rx="22" fill="#F3F6FF" stroke="#DCE4FA" stroke-width="2"/>
        <g ${tA(.2, 'ta-fade')}>${d4e(160, 34, '📍', 22)}<text x="160" y="56" text-anchor="middle" class="tat s">${L('Vols que «Mapes» sàpiga', '¿Quieres que «Mapas» sepa')}</text><text x="160" y="73" text-anchor="middle" class="tat s">${L('on ets?', 'dónde estás?')}</text></g>
        ${B.map(([t, on], i) => `<g ${tA(.8 + i * .4, 'ta-in')}><rect x="48" y="${84 + i * 30}" width="224" height="26" rx="13" fill="#fff" stroke="#C9D3F2" stroke-width="2"/><text x="160" y="${102 + i * 30}" text-anchor="middle" class="tat s">${t}</text></g>`).join('')}
        <g ${tA(2.4, 'ta-pop')}><rect x="48" y="84" width="224" height="26" rx="13" fill="none" stroke="#3CC47C" stroke-width="4"/></g>
        <g ${tA(3, 'ta-pop')}><rect x="20" y="180" width="280" height="30" rx="15" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2"/><text x="160" y="200" text-anchor="middle" class="tat s">${L('Tria la més petita que serveixi', 'Elige la más pequeña que sirva')}</text></g>`);
    },
    // la wifi de l'estació i les que n'imiten el nom; el cadenat vol dir xifrat, no «de fiar»
    d4wifi() {
      const R = [['🔒', 'Estacio_Vilabit', L("✓ La de l'estació", '✓ La de la estación'), '#1E8A50'], ['🔓', 'Estacio_Vilabit_FREE', L('? Imita el nom', '? Imita el nombre'), '#D93F45'], ['🔓', 'WIFI_GRATIS_RAPIDA', L('? De qui és?', '? ¿De quién es?'), '#D93F45']];
      return tSvg(226, `<text x="160" y="18" text-anchor="middle" class="tat b" ${tA(.1, 'ta-fade')}>📶 ${L("Wifis de l'estació", 'Wifis de la estación')}</text>
        ${R.map(([e, n, t, c], i) => `<g ${tA(.4 + i * .6, 'ta-in')}><rect x="10" y="${26 + i * 46}" width="300" height="40" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><g>${d4e(28, 52 + i * 46, e, 15)}</g><text x="44" y="${43 + i * 46}" class="tat s">${n}</text>
          <text x="44" y="${60 + i * 46}" class="tat s" style="fill:${c};font-size:11.5px" ${tA(.8 + i * .6, 'ta-fade')}>${t}</text></g>`).join('')}
        <g ${tA(2.6, 'ta-in')}><rect x="10" y="166" width="300" height="24" rx="12" fill="#F3F6FF" stroke="#C9D3F2" stroke-width="2"/><text x="24" y="183" class="tat s">🔒 https://… ${L('= xifrat, no «de fiar»', '= cifrado, no «de fiar»')}</text></g>
        <g ${tA(3.4, 'ta-pop')}><rect x="10" y="196" width="300" height="26" rx="13" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="160" y="214" text-anchor="middle" class="tat s">${L('Comptes i compres: millor a casa', 'Cuentas y compras: mejor en casa')}</text></g>`);
    },
    // els programes tenen forats; l'actualització els tapa
    d4forat() {
      const H = [[70, 70], [150, 110], [230, 60]];
      return tSvg(214, `<rect x="20" y="20" width="280" height="130" rx="14" fill="#DCE4FA"/>${[0, 1, 2, 3, 4].map(r => `<path d="M20 ${46 + r * 26}h280" stroke="#C3CEF0" stroke-width="2"/>`).join('')}
        ${H.map(([x, y], i) => `<ellipse cx="${x}" cy="${y}" rx="16" ry="12" fill="#14204A" ${tA(.2 + i * .2, 'ta-pop')}/>`).join('')}
        <g ${tA(.9, 'ta-in')}>${d4e(110, 84, '🐛', 22)}</g>
        ${H.map(([x, y], i) => `<g ${tA(1.8 + i * .4, 'ta-pop')}><rect x="${x - 22}" y="${y - 16}" width="44" height="32" rx="8" fill="#3CC47C" stroke="#fff" stroke-width="2"/><text x="${x}" y="${y + 6}" text-anchor="middle" class="tat w b">⬆️</text></g>`).join('')}
        <text x="160" y="14" text-anchor="middle" class="tat s" ${tA(.3, 'ta-fade')}>${L('Tots els programes tenen errors (forats)', 'Todos los programas tienen errores (agujeros)')}</text>
        <g ${tA(3.2, 'ta-pop')}><rect x="10" y="158" width="300" height="24" rx="12" fill="#3CC47C"/><text x="160" y="175" text-anchor="middle" class="tat w s">${L("L'actualització els tapa", 'La actualización los tapa')}</text></g>
        <text x="160" y="204" text-anchor="middle" class="tat s" ${tA(3.8, 'ta-fade')}>${L('Des de la configuració, no des d\'una web', 'Desde la configuración, no desde una web')}</text>`);
    },
    // una còpia de seguretat: les fotos també en un altre lloc
    d4copia() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${d4ph(124, 52, 72, 116)}${['🏖️', '🐶', '🎂', '🎨'].map((e, i) => `<g>${d4e(146 + (i % 2) * 28, 90 + Math.floor(i / 2) * 32, e, 18)}</g>`).join('')}</g>
        <path d="M120 96C90 80 80 60 74 48" stroke="#2F5BEA" stroke-width="3" stroke-dasharray="5 4" fill="none" ${tA(.8, 'ta-fade')}/><path d="M200 96C230 80 240 60 246 48" stroke="#2F5BEA" stroke-width="3" stroke-dasharray="5 4" fill="none" ${tA(1, 'ta-fade')}/>
        <g ${tA(1.2, 'ta-pop')}><rect x="14" y="6" width="112" height="44" rx="16" fill="#EAF4FF" stroke="#7C9BFF" stroke-width="2"/><g>${d4e(38, 36, '☁️', 22)}</g><text x="58" y="33" class="tat s">${L('Núvol', 'Nube')}</text></g>
        <g ${tA(1.4, 'ta-pop')}><rect x="182" y="6" width="130" height="44" rx="16" fill="#EAF4FF" stroke="#7C9BFF" stroke-width="2"/><g>${d4e(200, 36, '💾', 18)}</g><text x="214" y="33" class="tat s">${L('Disc extern', 'Disco externo')}</text></g>
        <g ${tA(2.4, 'ta-pop')}>${d4e(220, 140, '💥', 34)}</g>
        <g ${tA(3.2, 'ta-pop')}><rect x="10" y="176" width="300" height="32" rx="15" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="160" y="197" text-anchor="middle" class="tat s">${L("Si es trenca, les fotos són a l'altre lloc", 'Si se rompe, las fotos están a salvo')}</text></g>`);
    },
    // el bloqueig de pantalla i els dos panys del compte
    d4pany() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="16" y="8" width="118" height="196" rx="20" fill="#1B1F2E"/><rect x="22" y="16" width="106" height="180" rx="14" fill="#22306E"/>
          <g>${d4e(75, 52, '🔒', 22)}</g>${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${44 + i * 12}" cy="72" r="4" fill="#fff" ${tA(.6 + i * .2, 'ta-pop')}/>`).join('')}
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n, i) => `<circle cx="${50 + (i % 3) * 25}" cy="${98 + Math.floor(i / 3) * 26}" r="10" fill="rgba(255,255,255,.14)"/><text x="${50 + (i % 3) * 25}" y="${103 + Math.floor(i / 3) * 26}" text-anchor="middle" class="tat w s">${n}</text>`).join('')}</g>
        <g ${tA(1.8, 'ta-in')}><rect x="148" y="10" width="162" height="50" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><g>${d4e(170, 42, '⏱️', 18)}</g><text x="188" y="32" class="tat s">${L('Es bloqueja sola', 'Se bloquea sola')}</text><text x="188" y="50" class="tat b">${L('als 2 minuts', 'a los 2 minutos')}</text></g>
        <g ${tA(2.6, 'ta-in')}><rect x="148" y="72" width="162" height="78" rx="16" fill="#F3F6FF" stroke="#C9D3F2" stroke-width="2"/><text x="229" y="94" text-anchor="middle" class="tat s">${L('Dos panys:', 'Dos candados:')}</text>
          <g>${d4e(186, 132, '🔑', 22)}</g><text x="210" y="126" class="tat b">+</text><g>${d4e(240, 132, '📱', 22)}</g><text x="268" y="128" class="tat s">${L('codi', 'código')}</text></g>
        <g ${tA(3.4, 'ta-pop')}><rect x="148" y="160" width="162" height="44" rx="16" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="229" y="179" text-anchor="middle" class="tat s">${L('PIN difícil', 'PIN difícil')}</text><text x="229" y="196" text-anchor="middle" class="tat s">${L("d'endevinar", 'de adivinar')}</text></g>`);
    },
    // l'escape room: quatre sales, quatre xifres i la porta s'obre
    d4escape() {
      const S = [['🎣', '7'], ['📲', '2'], ['📶', '9'], ['🔐', '4']];
      return tSvg(214, `${S.map(([e], i) => `<g ${tA(.2 + i * .5, 'ta-in')}><rect x="${10 + i * 52}" y="10" width="44" height="44" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d4e(32 + i * 52, 40, e, 20)}</g><text x="${32 + i * 52}" y="70" text-anchor="middle" class="tat s">${L('Sala', 'Sala')} ${i + 1}</text></g>`).join('')}
        <rect x="222" y="8" width="90" height="190" rx="10" fill="#8A5A3B"/><rect x="230" y="16" width="74" height="174" rx="6" fill="#A86E47"/><circle cx="292" cy="108" r="5" fill="#FFD54A"/>
        <rect x="12" y="92" width="196" height="56" rx="14" fill="#14204A"/>
        ${S.map(([, d], i) => `<rect x="${24 + i * 46}" y="102" width="36" height="36" rx="8" fill="#22306E"/><text x="${42 + i * 46}" y="128" text-anchor="middle" class="tat w b" style="font-size:20px" ${tA(.6 + i * .5, 'ta-pop')}>${d}</text>`).join('')}
        <g ${tA(3, 'ta-pop')}><rect x="230" y="16" width="74" height="174" rx="6" fill="#FFF3D6"/>${d4e(267, 110, '🤖', 30)}</g>
        <g ${tA(3.4, 'ta-pop')}><rect x="12" y="160" width="196" height="40" rx="16" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="110" y="185" text-anchor="middle" class="tat b">${L('Porta oberta!', '¡Puerta abierta!')}</text></g>`);
    },
    // com es dissenya una bona prova
    d4prova() {
      const R = [['🏷️', L('Tema', 'Tema'), L('les wifis', 'las wifis')], ['🎬', L('Situació', 'Situación'), L('curta i clara', 'corta y clara')], ['💡', L('Pista', 'Pista'), L('ajuda, sense resoldre', 'ayuda, sin resolver')], ['✅', L('Solució', 'Solución'), L('es pot comprovar', 'se puede comprobar')]];
      return tSvg(214, `<rect x="14" y="6" width="292" height="164" rx="14" fill="#FFFDF5" stroke="#F2B21B" stroke-width="2.5"/><text x="160" y="28" text-anchor="middle" class="tat b">${L('La meva prova', 'Mi prueba')}</text>
        ${R.map(([e, k, v], i) => `<g ${tA(.4 + i * .5, 'ta-in')}><g>${d4e(38, 58 + i * 30, e, 16)}</g><text x="56" y="${57 + i * 30}" class="tat b">${k}:</text><text x="148" y="${57 + i * 30}" class="tat s">${v}</text></g>`).join('')}
        <g ${tA(2.8, 'ta-pop')}><rect x="40" y="176" width="240" height="32" rx="16" fill="#9B6CF2"/><text x="160" y="197" text-anchor="middle" class="tat w s">💡 ${L("I una idea per aprendre", 'Y una idea para aprender')}</text></g>`);
    }
  });
}

/* ── unitat 5 ── */
/* Tech Digital · unitat 5 «La IA a fons» · animacions de teoria (TANI)
   Dibuixos propis de Numi: instrucció vaga i instrucció clara, les tres peces d'un bon prompt, revisar la resposta, les
   quatre menes d'imatges, el filtre de bellesa, els passos de verificar, les dades d'entrenament, què passa amb les
   converses, la configuració de privadesa, el manual de la IA i el que no deleguem. Cap marca ni cap app reals. */
{
  const d5e = (x, y, e, s = 24) => `<text x="${x}" y="${y}" font-size="${s}" text-anchor="middle">${e}</text>`;
  const d5bub = (x, y, w, h, me) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${me ? '#2F5BEA' : '#fff'}" stroke="${me ? '#2F5BEA' : '#DCE4FA'}" stroke-width="2"/>`;
  const d5tg = (x, y, on) => `<rect x="${x}" y="${y}" width="40" height="22" rx="11" fill="${on ? '#3CC47C' : '#C9D3F2'}"/><circle cx="${on ? x + 29 : x + 11}" cy="${y + 11}" r="8" fill="#fff"/>`;

  Object.assign(TANI, {
    // instrucció vaga → resposta que no serveix; instrucció clara → resposta útil
    d5prompt() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${d5bub(196, 6, 110, 30, 1)}<text x="251" y="26" text-anchor="middle" class="tat w s">${L('volcans', 'volcanes')}</text></g>
        <g ${tA(.8, 'ta-in')}>${d5bub(14, 42, 200, 40)}<g>${d5e(34, 70, '🤖', 18)}</g>${[0, 1, 2].map(i => `<rect x="54" y="${52 + i * 9}" width="${[148, 140, 120][i]}" height="5" rx="2.5" fill="#C9D3F2"/>`).join('')}</g>
        <g ${tA(1.3, 'ta-pop')}>${d5e(240, 72, '😵', 24)}</g>
        <g ${tA(1.9, 'ta-in')}>${d5bub(48, 96, 258, 46, 1)}<text x="177" y="115" text-anchor="middle" class="tat w s">${L('Per a 5è: explica en 5 frases', 'Para 5.º: explica en 5 frases')}</text><text x="177" y="133" text-anchor="middle" class="tat w s">${L('fàcils com es forma un volcà', 'fáciles cómo se forma un volcán')}</text></g>
        <g ${tA(2.8, 'ta-in')}>${d5bub(14, 150, 200, 56)}<g>${d5e(34, 184, '🤖', 18)}</g>${[0, 1, 2, 3, 4].map(i => `<text x="54" y="${163 + i * 9.5}" font-size="9" font-weight="800" fill="#2F5BEA">${i + 1}.</text><rect x="66" y="${158 + i * 9.5}" width="${[120, 110, 128, 100, 116][i]}" height="5" rx="2.5" fill="#C9D3F2"/>`).join('')}</g>
        <g ${tA(3.4, 'ta-pop')}>${d5e(250, 186, '🙂', 26)}<circle cx="282" cy="166" r="10" fill="#3CC47C"/><path d="M277 166l4 4 6-7" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>`);
    },
    // les tres peces d'una bona instrucció: context, tasca i forma
    d5peces() {
      const P = [['🧭', L('Context', 'Contexto'), L('per a 5è', 'para 5.º'), '#2F5BEA'], ['🎯', L('Tasca', 'Tarea'), L('explica…', 'explica…'), '#9B6CF2'], ['📏', L('Forma', 'Forma'), L('en 5 frases', 'en 5 frases'), '#F08A24']];
      return tSvg(214, `${P.map(([e, k, v, c], i) => `<g ${tA(.3 + i * .6, 'ta-pop')}><rect x="${12 + i * 100}" y="14" width="94" height="96" rx="16" fill="#fff" stroke="${c}" stroke-width="3"/><circle cx="${106 + i * 100}" cy="62" r="9" fill="${i < 2 ? c : 'none'}"/>
          <g>${d5e(59 + i * 100, 50, e, 24)}</g><text x="${59 + i * 100}" y="78" text-anchor="middle" class="tat b">${k}</text><text x="${59 + i * 100}" y="98" text-anchor="middle" class="tat s">${v}</text></g>`).join('')}
        <path d="M160 116v16" stroke="#9AA6C8" stroke-width="3" ${tA(2.2, 'ta-fade')}/><path d="M153 128l7 8 7-8" fill="#9AA6C8" ${tA(2.2, 'ta-fade')}/>
        <g ${tA(2.6, 'ta-pop')}><rect x="40" y="142" width="240" height="40" rx="18" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><g>${d5e(70, 170, '🤖', 20)}</g><text x="172" y="167" text-anchor="middle" class="tat b">${L('Resposta útil!', '¡Respuesta útil!')}</text></g>
        <text x="160" y="204" text-anchor="middle" class="tat s" ${tA(3.2, 'ta-fade')}>${L('I sense dades personals', 'Y sin datos personales')}</text>`);
    },
    // revisar la resposta: demanar-ne més i tres preguntes
    d5revisa() {
      const C = [L('«més fàcil»', '«más fácil»'), L('«un exemple»', '«un ejemplo»'), L('«més curt»', '«más corto»')];
      const R = [['🔍', L('És veritat?', '¿Es verdad?'), L('ho comprovo', 'lo compruebo'), '#2F5BEA'], ['💡', L('Ho entenc?', '¿Lo entiendo?'), L('si no, pregunto', 'si no, pregunto'), '#F2B21B'], ['✍️', L('És meu?', '¿Es mío?'), L('amb les meves paraules', 'con mis palabras'), '#3CC47C']];
      return tSvg(214, `<text x="160" y="18" text-anchor="middle" class="tat s" ${tA(.1, 'ta-fade')}>${L('Demana-li més:', 'Pídele más:')}</text>
        ${C.map((t, i) => `<g ${tA(.3 + i * .3, 'ta-pop')}><rect x="${12 + i * 100}" y="26" width="94" height="28" rx="14" fill="#F3E8FF" stroke="#9B6CF2" stroke-width="2"/><text x="${59 + i * 100}" y="45" text-anchor="middle" class="tat s">${t}</text></g>`).join('')}
        ${R.map(([e, q, a, c], i) => `<g ${tA(1.4 + i * .6, 'ta-in')}><rect x="12" y="${66 + i * 48}" width="296" height="40" rx="14" fill="#fff" stroke="${c}" stroke-width="2.5"/><g>${d5e(36, 93 + i * 48, e, 18)}</g><text x="58" y="${91 + i * 48}" class="tat b">${q} <tspan style="font-size:13.5px;font-weight:700">${a}</tspan></text></g>`).join('')}`);
    },
    // quatre menes d'imatges: real, retocada, fora de context i feta amb IA
    d5quatre() {
      const T = [['📷', L('Real', 'Real'), '🌳🏠', '#3CC47C'], ['🪄', L('Retocada', 'Retocada'), '🌳🏠✨', '#F2B21B'], ['📅', L('Fora de context', 'Fuera de contexto'), '❄️🏠', '#F08A24'], ['🤖', L('Feta amb IA', 'Hecha con IA'), '🐉🏠', '#9B6CF2']];
      return tSvg(214, `${T.map(([e, t, sc, c], i) => { const x = 10 + (i % 2) * 154, y = 8 + Math.floor(i / 2) * 102; return `<g ${tA(.3 + i * .6, 'ta-pop')}><rect x="${x}" y="${y}" width="146" height="94" rx="14" fill="#fff" stroke="${c}" stroke-width="3"/>
          <rect x="${x + 8}" y="${y + 8}" width="130" height="50" rx="8" fill="#EAF4FF"/><g>${d5e(x + 73, y + 42, sc, 22)}</g><g>${d5e(x + 20, y + 82, e, 15)}</g><text x="${x + 34}" y="${y + 81}" class="tat s">${t}</text></g>`; }).join('')}`);
    },
    // un filtre canvia la cara: et compares amb una cosa que no és real
    d5filtre() {
      const face = (cx, f) => `<circle cx="${cx}" cy="78" r="46" fill="${f ? '#FFE1CF' : '#F2C4A6'}"/><path d="M${cx - 46} 70c4-34 30-48 46-48s42 14 46 48c-12-18-30-24-46-24s-34 6-46 24z" fill="#6B4430"/>
        <ellipse cx="${cx - 16}" cy="78" rx="${f ? 8 : 5}" ry="${f ? 9 : 5}" fill="#14204A"/><ellipse cx="${cx + 16}" cy="78" rx="${f ? 8 : 5}" ry="${f ? 9 : 5}" fill="#14204A"/>
        <path d="M${cx - 14} 100q14 ${f ? 12 : 8} 28 0" stroke="#B5523B" stroke-width="3" fill="none" stroke-linecap="round"/>
        ${f ? `<text x="${cx + 34}" y="40" font-size="16">✨</text><text x="${cx - 48}" y="118" font-size="14">✨</text>` : [[-22, 92], [-26, 98], [20, 94], [26, 90], [-6, 64]].map(([dx, dy]) => `<circle cx="${cx + dx}" cy="${dy}" r="2" fill="#C98B6A"/>`).join('')}`;
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${face(72, 0)}<text x="72" y="146" text-anchor="middle" class="tat b">${L('Foto real', 'Foto real')}</text></g>
        <g ${tA(1, 'ta-fade')}><rect x="132" y="66" width="56" height="10" rx="5" fill="#E3E8F6"/><circle cx="182" cy="71" r="9" fill="#9B6CF2"/><text x="160" y="58" text-anchor="middle" class="tat s">${L('filtre', 'filtro')}</text></g>
        <g ${tA(1.6, 'ta-pop')}>${face(248, 1)}<text x="248" y="146" text-anchor="middle" class="tat b">${L('Amb filtre', 'Con filtro')}</text></g>
        <g ${tA(2.8, 'ta-pop')}><rect x="14" y="160" width="292" height="46" rx="16" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2.5"/><text x="160" y="179" text-anchor="middle" class="tat s">${L('Amb un filtre et compares', 'Con un filtro te comparas')}</text><text x="160" y="197" text-anchor="middle" class="tat b">${L('amb una cosa que no és real', 'con algo que no es real')}</text></g>`);
    },
    // fer com els verificadors: sortir a buscar
    d5verif() {
      const R = [['👤', L('Qui la publica?', '¿Quién la publica?')], ['🗂️', L("On és l'original?", '¿Dónde está el original?')], ['📅', L('Quan i on es va fer?', '¿Cuándo y dónde?')], ['📰', L('Qui més ho explica?', '¿Quién más lo cuenta?')]];
      return tSvg(214, `<g ${tA(.2, 'ta-pop')}><rect x="10" y="40" width="100" height="84" rx="12" fill="#EAF4FF" stroke="#7C9BFF" stroke-width="2"/><g>${d5e(60, 92, '🌉💥', 26)}</g><text x="60" y="144" text-anchor="middle" class="tat s">${L('Foto increïble', 'Foto increíble')}</text></g>
        <g ${tA(.6, 'ta-pop')}>${d5e(100, 52, '🔎', 30)}</g>
        ${R.map(([e, t], i) => `<g ${tA(1 + i * .55, 'ta-in')}><rect x="118" y="${8 + i * 44}" width="194" height="36" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d5e(134, 32 + i * 44, e, 14)}</g><text x="148" y="${31 + i * 44}" class="tat s" style="font-size:12px">${i + 1}. ${t}</text></g>`).join('')}
        <g ${tA(3.4, 'ta-pop')}><rect x="10" y="186" width="300" height="24" rx="12" fill="#3CC47C"/><text x="160" y="203" text-anchor="middle" class="tat w s">${L('Si no és clar, no es comparteix', 'Si no está claro, no se comparte')}</text></g>`);
    },
    // les dades d'entrenament: textos, imatges, veus i converses → la IA aprèn patrons
    d5dades() {
      const D = [['📚', L('Textos', 'Textos')], ['🖼️', L('Imatges', 'Imágenes')], ['🎙️', L('Veus', 'Voces')], ['💬', L('Converses', 'Conversaciones')]];
      return tSvg(214, `${D.map(([e, t], i) => `<g ${tA(.2 + i * .45, 'ta-in')}><rect x="10" y="${8 + i * 44}" width="132" height="36" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d5e(30, 32 + i * 44, e, 17)}</g><text x="48" y="${31 + i * 44}" class="tat s">${t}</text>
          <circle r="4" fill="#9B6CF2"><animateMotion dur="1.8s" begin="${i * .4}s" repeatCount="indefinite" path="M144 ${26 + i * 44}L214 92"/></circle></g>`).join('')}
        <g ${tA(2, 'ta-pop')}><circle cx="252" cy="92" r="46" fill="#14204A"/><g>${d5e(252, 102, '🤖', 34)}</g></g>
        <text x="252" y="158" text-anchor="middle" class="tat b" ${tA(2.6, 'ta-fade')}>${L('Busca patrons', 'Busca patrones')}</text>
        <g ${tA(3.2, 'ta-pop')}><rect x="10" y="184" width="300" height="26" rx="13" fill="#F3E8FF" stroke="#9B6CF2" stroke-width="2"/><text x="160" y="202" text-anchor="middle" class="tat s">${L('Tot això ho han fet persones', 'Todo esto lo han hecho personas')}</text></g>`);
    },
    // el que escrius a una IA es pot guardar, fer servir per entrenar i llegir
    d5guarda() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${d5bub(10, 14, 128, 46, 1)}<text x="74" y="33" text-anchor="middle" class="tat w s">${L('El meu secret', 'Mi secreto')}</text><text x="74" y="50" text-anchor="middle" class="tat w s">${L('és que…', 'es que…')}</text></g>
        <path d="M140 37h30" stroke="#9AA6C8" stroke-width="3" ${tA(.8, 'ta-fade')}/><path d="M166 31l8 6-8 6" fill="#9AA6C8" ${tA(.8, 'ta-fade')}/>
        <g ${tA(1.1, 'ta-pop')}><rect x="178" y="8" width="132" height="60" rx="14" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2.5"/><g>${d5e(204, 46, '📦', 22)}</g><text x="224" y="35" class="tat s">${L('Es pot', 'Se puede')}</text><text x="224" y="53" class="tat b">${L('guardar', 'guardar')}</text></g>
        <g ${tA(1.9, 'ta-in')}><rect x="10" y="84" width="146" height="54" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><g>${d5e(32, 118, '🧠', 20)}</g><text x="52" y="106" class="tat s">${L('Per entrenar', 'Para entrenar')}</text><text x="52" y="124" class="tat s">${L('la IA', 'la IA')}</text></g>
        <g ${tA(2.4, 'ta-in')}><rect x="164" y="84" width="146" height="54" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><g>${d5e(186, 118, '👀', 20)}</g><text x="206" y="106" class="tat s">${L('Ho pot llegir', 'Lo puede leer')}</text><text x="206" y="124" class="tat s">${L('una persona', 'una persona')}</text></g>
        <g ${tA(3.2, 'ta-pop')}><rect x="10" y="150" width="300" height="56" rx="16" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="160" y="173" text-anchor="middle" class="tat b">${L('Dades personals, fotos i secrets:', 'Datos personales, fotos y secretos:')}</text><text x="160" y="194" text-anchor="middle" class="tat s">${L('fora. Els secrets, a persones de confiança', 'fuera. Los secretos, a personas de confianza')}</text></g>`);
    },
    // la configuració de privadesa d'una app d'IA: tu tries
    d5config() {
      const R = [[L('Entrenar amb les converses', 'Entrenar con las conversaciones'), 1, 0], [L("Desar l'historial", 'Guardar el historial'), 1, 0], [L('Conversa temporal', 'Conversación temporal'), 0, 1], [L('Ubicació', 'Ubicación'), 1, 0]];
      return tSvg(214, `<rect x="10" y="6" width="300" height="200" rx="18" fill="#F3F6FF" stroke="#DCE4FA" stroke-width="2"/><text x="28" y="30" class="tat b">⚙️ ${L('Privadesa', 'Privacidad')}</text>
        ${R.map(([t, a, b], i) => `<g><rect x="22" y="${40 + i * 36}" width="276" height="30" rx="12" fill="#fff"/><text x="34" y="${60 + i * 36}" class="tat s" style="font-size:12.5px">${t}</text>
          <g ${tA(.2, 'ta-fade')}>${d5tg(248, 44 + i * 36, a)}</g><g ${tA(1 + i * .5, 'ta-pop')}><rect x="246" y="${42 + i * 36}" width="44" height="26" rx="13" fill="#fff"/>${d5tg(248, 44 + i * 36, b)}</g></g>`).join('')}
        <text x="160" y="200" text-anchor="middle" class="tat s" ${tA(3.4, 'ta-fade')}>${L('Ho reviseu amb un adult', 'Lo revisáis con un adulto')}</text>`);
    },
    // el manual de la IA de la classe: sis capítols
    d5manual() {
      const C = [['💬', L('Preguntar bé', 'Preguntar bien')], ['🔍', L('Comprovar', 'Comprobar')], ['🤝', L('Honestedat', 'Honestidad')], ['🔒', L('Dades', 'Datos')], ['🖼️', L('Imatges i respecte', 'Imágenes y respeto')], ['🎂', L('Edats i permisos', 'Edades y permisos')]];
      return tSvg(214, `<rect x="10" y="8" width="300" height="198" rx="14" fill="#7C4DE0"/><rect x="18" y="16" width="138" height="182" rx="8" fill="#FFFDF5"/><rect x="164" y="16" width="138" height="182" rx="8" fill="#FFFDF5"/><path d="M160 16v182" stroke="#5B33B8" stroke-width="3"/>
        ${C.map(([e, t], i) => { const x = i < 3 ? 26 : 172, y = 30 + (i % 3) * 58; return `<g ${tA(.3 + i * .45, 'ta-in')}><rect x="${x}" y="${y}" width="122" height="48" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><circle cx="${x + 14}" cy="${y + 14}" r="9" fill="#9B6CF2"/><text x="${x + 14}" y="${y + 18}" text-anchor="middle" class="tat w s">${i + 1}</text><g>${d5e(x + 36, y + 21, e, 15)}</g><text x="${x + 61}" y="${y + 40}" text-anchor="middle" class="tat s">${t}</text></g>`; }).join('')}`);
    },
    // el que la IA pot fer amb nosaltres i el que és nostre
    d5quanno() {
      const A = [L('Idees', 'Ideas'), L('Explicacions', 'Explicaciones'), L('Repassar', 'Repasar')];
      const B = [L('Les emocions', 'Las emociones'), L('Els problemes', 'Los problemas'), L('Les decisions', 'Las decisiones'), L('Aprendre a fer-ho', 'Aprender a hacerlo')];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="8" y="6" width="304" height="88" rx="16" fill="#F3F6FF" stroke="#7C9BFF" stroke-width="2"/><g>${d5e(30, 33, '🤖', 20)}</g><text x="48" y="31" class="tat b">${L('Amb la IA (i amb permís)', 'Con la IA (y con permiso)')}</text></g>
        ${A.map((t, i) => `<g ${tA(.6 + i * .4, 'ta-pop')}><rect x="${18 + i * 98}" y="46" width="90" height="36" rx="12" fill="#fff" stroke="#C9D3F2" stroke-width="2"/><text x="${63 + i * 98}" y="69" text-anchor="middle" class="tat s" style="font-size:12px">✅ ${t}</text></g>`).join('')}
        <g ${tA(1.8, 'ta-in')}><rect x="8" y="102" width="304" height="106" rx="16" fill="#FFF3F6" stroke="#EF5A5A" stroke-width="2"/><g>${d5e(30, 129, '🧑', 20)}</g><text x="48" y="127" class="tat b">${L('Amb persones de confiança', 'Con personas de confianza')}</text></g>
        ${B.map((t, i) => `<g ${tA(2.2 + i * .4, 'ta-pop')}><rect x="${18 + (i % 2) * 146}" y="${140 + Math.floor(i / 2) * 32}" width="138" height="28" rx="12" fill="#fff" stroke="#F4B7B7" stroke-width="2"/><text x="${87 + (i % 2) * 146}" y="${159 + Math.floor(i / 2) * 32}" text-anchor="middle" class="tat s" style="font-size:12.5px">💛 ${t}</text></g>`).join('')}`);
    }
  });
}

/* ── unitat 6 ── */
/* Tech Digital · unitat 6 «Consumidors digitals» · animacions de teoria (TANI)
   Dibuixos propis de Numi: anuncis per tot arreu, publicitat disfressada, les tres preguntes davant d'un anunci, com
   guanya diners un videojoc «gratis», les monedes virtuals que amaguen euros, l'atzar de les caixes sorpresa, para-calcula-
   pregunta, l'algoritme com una recepta, les pistes que mira, la bombolla de filtre i l'anunci honest. Cap marca real. */
{
  const d6e = (x, y, e, s = 24) => `<text x="${x}" y="${y}" font-size="${s}" text-anchor="middle">${e}</text>`;
  const d6tag = (x, y, t, c = '#EF5A5A') => `<rect x="${x}" y="${y}" width="${Math.round(t.length * 6.3 + 12)}" height="18" rx="9" fill="${c}"/><text x="${x + 6}" y="${y + 13}" class="tat w s" style="font-size:11px">${t}</text>`;

  Object.assign(TANI, {
    // anuncis per tot arreu: uns es veuen i d'altres s'amaguen
    d6anuncis() {
      const A = [['📺', L('Tele', 'Tele'), L('Anunci', 'Anuncio')], ['🪧', L('Carrer', 'Calle'), L('Cartell', 'Cartel')], ['📱', L('Mòbil', 'Móvil'), '#publi'], ['▶️', L('Vídeo', 'Vídeo'), L('Patrocinat', 'Patrocinado')]];
      return tSvg(214, `${A.map(([e, t, g], i) => { const x = 10 + (i % 2) * 154, y = 8 + Math.floor(i / 2) * 86; return `<g ${tA(.2 + i * .5, 'ta-pop')}><rect x="${x}" y="${y}" width="146" height="78" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d6e(x + 34, y + 50, e, 28)}</g><text x="${x + 62}" y="${y + 32}" class="tat b">${t}</text>
          <g ${tA(.6 + i * .5, 'ta-pop')}>${d6tag(x + 58, y + 44, g, i < 2 ? '#2F5BEA' : '#EF5A5A')}</g></g>`; }).join('')}
        <g ${tA(3, 'ta-pop')}><rect x="10" y="182" width="300" height="28" rx="14" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="160" y="201" text-anchor="middle" class="tat s">${L("Uns es veuen… i d'altres s'amaguen", 'Unos se ven… y otros se esconden')}</text></g>`);
    },
    // la publicitat disfressada: caixes regalades, marques a la sèrie, resultats patrocinats i «notícies» pagades
    d6disfressa() {
      const D = [['📦', L('Obrir caixes regalades', 'Abrir cajas regaladas')], ['🎬', L('La marca, a la sèrie', 'La marca, en la serie')], ['🔍', L('Resultat patrocinat', 'Resultado patrocinado')], ['📰', L('«Notícia» pagada', '«Noticia» pagada')]];
      return tSvg(214, `${D.map(([e, t], i) => `<g ${tA(.2 + i * .5, 'ta-in')}><rect x="10" y="${8 + i * 44}" width="300" height="38" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><g>${d6e(32, 34 + i * 44, e, 18)}</g><text x="54" y="${32 + i * 44}" class="tat s">${t}</text>
          <g ${tA(.9 + i * .5, 'ta-pop')}>${d6tag(232, 18 + i * 44, L('Anunci', 'Anuncio'))}</g></g>`).join('')}
        <text x="160" y="204" text-anchor="middle" class="tat b" ${tA(3.2, 'ta-fade')}>${L('Mira la lletra petita!', '¡Mira la letra pequeña!')}</text>`);
    },
    // la lupa de l'anunci: tres preguntes
    d6lupa() {
      const Q = [['💶', L('Qui el paga?', '¿Quién lo paga?')], ['🎯', L('Què vol que faci?', '¿Qué quiere que haga?')], ['🙈', L('Què no em diu?', '¿Qué no me dice?')]];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="8" y="20" width="100" height="150" rx="14" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><g>${d6e(58, 82, '👟', 36)}</g><text x="58" y="112" text-anchor="middle" class="tat s" style="font-size:12px">${L('Les millors!', '¡Las mejores!')}</text><text x="58" y="132" text-anchor="middle" class="tat s" style="font-size:12px">${L('Només avui!', '¡Solo hoy!')}</text></g>
        <g ${tA(.7, 'ta-pop')}><circle cx="96" cy="52" r="22" fill="none" stroke="#14204A" stroke-width="5"/><path d="M111 67l12 12" stroke="#14204A" stroke-width="7" stroke-linecap="round"/></g>
        ${Q.map(([e, t], i) => `<g ${tA(1.3 + i * .6, 'ta-in')}><rect x="118" y="${14 + i * 52}" width="194" height="42" rx="14" fill="#fff" stroke="#2F5BEA" stroke-width="2.5"/><circle cx="134" cy="${35 + i * 52}" r="10" fill="#2F5BEA"/><text x="134" y="${40 + i * 52}" text-anchor="middle" class="tat w s">${i + 1}</text><g>${d6e(156, 41 + i * 52, e, 15)}</g><text x="170" y="${40 + i * 52}" class="tat s" style="font-size:12.5px">${t}</text></g>`).join('')}
        <text x="160" y="196" text-anchor="middle" class="tat s" ${tA(3.4, 'ta-fade')}>${L('Després, decideixo amb calma', 'Después, decido con calma')}</text>`);
    },
    // com guanya diners un videojoc «gratis»: compres, anuncis i dades
    d6gratis() {
      const S = [['💎', L('Compres', 'Compras'), '#9B6CF2'], ['📺', L('Anuncis', 'Anuncios'), '#F08A24'], ['📊', L('Dades', 'Datos'), '#14A3B8']];
      return tSvg(214, `<g ${tA(.2, 'ta-pop')}><rect x="96" y="6" width="128" height="58" rx="16" fill="#3CC47C"/><text x="160" y="32" text-anchor="middle" class="tat w b">🎮 ${L('GRATIS!', '¡GRATIS!')}</text><text x="160" y="52" text-anchor="middle" class="tat w s">${L('per descarregar', 'para descargar')}</text></g>
        ${S.map(([e, t, c], i) => `<g ${tA(.8 + i * .5, 'ta-in')}><rect x="${10 + i * 104}" y="86" width="96" height="58" rx="14" fill="#fff" stroke="${c}" stroke-width="3"/><g>${d6e(58 + i * 104, 114, e, 22)}</g><text x="${58 + i * 104}" y="135" text-anchor="middle" class="tat s">${t}</text>
          <circle r="5" fill="#FFD54A" stroke="#C99A00"><animateMotion dur="1.6s" begin="${i * .5}s" repeatCount="indefinite" path="M${58 + i * 104} 148L160 176"/></circle></g>`).join('')}
        <g ${tA(2.6, 'ta-pop')}><rect x="80" y="176" width="160" height="32" rx="14" fill="#14204A"/><text x="160" y="197" text-anchor="middle" class="tat w s">🏢 ${L("L'empresa guanya", 'La empresa gana')}</text></g>`);
    },
    // les monedes virtuals amaguen els euros, i els paquets no quadren
    d6moneda() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="8" width="300" height="46" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="40" y="37" class="tat b">5 €</text><text x="88" y="37" class="tat b">=</text><text x="118" y="37" class="tat b">💎 500</text><text x="206" y="37" class="tat s">${L('(paquet)', '(paquete)')}</text></g>
        <g ${tA(1, 'ta-in')}><rect x="10" y="62" width="300" height="46" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="30" y="91" class="tat b">🧢 💎 100</text><text x="140" y="91" class="tat b">=</text><text x="170" y="91" class="tat b" ${tA(1.6, 'ta-pop')}>1 € ✓</text></g>
        <g ${tA(2.2, 'ta-in')}><rect x="10" y="116" width="300" height="56" rx="14" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><text x="26" y="139" class="tat s">${L('Vestit: 💎 600 → 2 paquets (10 €)', 'Traje: 💎 600 → 2 paquetes (10 €)')}</text><text x="26" y="160" class="tat b" ${tA(2.8, 'ta-fade')}>${L('Et sobren 💎 400…', 'Te sobran 💎 400…')}</text></g>
        <g ${tA(3.4, 'ta-pop')}><rect x="40" y="180" width="240" height="30" rx="15" fill="#2F5BEA"/><text x="160" y="200" text-anchor="middle" class="tat w s">🧮 ${L('Passa sempre a euros', 'Pásalo siempre a euros')}</text></g>`);
    },
    // l'atzar: 1 de cada 100 caixes té el premi
    d6atzar() {
      return tSvg(214, `${Array.from({ length: 100 }, (_, i) => { const x = 14 + (i % 10) * 15, y = 14 + Math.floor(i / 10) * 15, g = i === 67; return `<rect x="${x}" y="${y}" width="12" height="12" rx="3" fill="${g ? '#FFC531' : '#C9B8F2'}" ${g ? tA(2, 'ta-pop') : ''}/>`; }).join('')}
        <g ${tA(2.2, 'ta-pop')}><circle cx="125" cy="110" r="13" fill="none" stroke="#F08A24" stroke-width="3"/></g>
        <g ${tA(.4, 'ta-in')}><rect x="176" y="14" width="134" height="64" rx="14" fill="#fff" stroke="#9B6CF2" stroke-width="2.5"/><text x="243" y="40" text-anchor="middle" class="tat b">${L('1 de cada 100', '1 de cada 100')}</text><text x="243" y="62" text-anchor="middle" class="tat s">${L('té el drac 🐉', 'tiene el dragón 🐉')}</text></g>
        <g ${tA(1.4, 'ta-in')}><rect x="176" y="88" width="134" height="64" rx="14" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2.5"/><text x="243" y="113" text-anchor="middle" class="tat s">${L('De mitjana, cal', 'De media, hay que')}</text><text x="243" y="134" text-anchor="middle" class="tat b">${L('obrir-ne 100', 'abrir 100')}</text></g>
        <g ${tA(3, 'ta-pop')}><rect x="14" y="170" width="296" height="38" rx="16" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2.5"/><text x="162" y="194" text-anchor="middle" class="tat s">${L("…i potser més. Decideix l'atzar.", '…y quizá más. Decide el azar.')}</text></g>`);
    },
    // para, calcula, pregunta
    d6stop() {
      const S = [['✋', L('Para', 'Para'), L('sense presses', 'sin prisas'), '#EF5A5A'], ['🧮', L('Calcula', 'Calcula'), L('quants euros?', '¿cuántos euros?'), '#F2B21B'], ['🙋', L('Pregunta', 'Pregunta'), L('a un adult', 'a un adulto'), '#3CC47C']];
      return tSvg(214, `<rect x="10" y="20" width="300" height="130" rx="65" fill="#1B1F2E"/>
        ${S.map(([e, t, s, c], i) => `<g ${tA(.4 + i * .8, 'ta-pop')}><circle cx="${62 + i * 98}" cy="85" r="44" fill="${c}"/><g>${d6e(62 + i * 98, 82, e, 30)}</g><text x="${62 + i * 98}" y="112" text-anchor="middle" class="tat w b">${t}</text></g>
          <text x="${62 + i * 98}" y="172" text-anchor="middle" class="tat s" ${tA(.8 + i * .8, 'ta-fade')}>${s}</text>`).join('')}
        <text x="160" y="204" text-anchor="middle" class="tat b" ${tA(3.2, 'ta-fade')}>${L('Abans de comprar res', 'Antes de comprar nada')}</text>`);
    },
    // un algoritme és una recepta de passos; el de recomanació tria què veus
    d6algo() {
      const P = [L('Mira què has vist', 'Mira qué has visto'), L('Busca semblants', 'Busca parecidos'), L('Els ordena', 'Los ordena'), L("Te'ls mostra", 'Te los muestra')];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="8" width="176" height="198" rx="14" fill="#FFFDF5" stroke="#F2B21B" stroke-width="2.5"/><text x="98" y="32" text-anchor="middle" class="tat b">📜 ${L('La recepta', 'La receta')}</text></g>
        ${P.map((t, i) => `<g ${tA(.6 + i * .5, 'ta-in')}><circle cx="30" cy="${58 + i * 40}" r="11" fill="#F08A24"/><text x="30" y="${63 + i * 40}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="48" y="${63 + i * 40}" class="tat s" style="font-size:12.5px">${t}</text></g>`).join('')}
        <g ${tA(2.8, 'ta-pop')}>${['🐱', '🐶', '🐰'].map((e, i) => `<rect x="200" y="${14 + i * 64}" width="110" height="54" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><rect x="208" y="${22 + i * 64}" width="44" height="38" rx="8" fill="#EAF4FF"/><g>${d6e(230, 49 + i * 64, e, 20)}</g><rect x="258" y="${28 + i * 64}" width="44" height="6" rx="3" fill="#C9D3F2"/><rect x="258" y="${42 + i * 64}" width="32" height="6" rx="3" fill="#E3E8F6"/>`).join('')}</g>`);
    },
    // les pistes que mira l'algoritme
    d6pistes() {
      const P = [['👀', L('Què mires', 'Qué miras')], ['⏱️', L('Quanta estona', 'Cuánto rato')], ['❤️', L("Què t'agrada", 'Qué te gusta')], ['🔍', L('Què busques', 'Qué buscas')], ['🕘', L('A quina hora', 'A qué hora')], ['👥', L('Gent com tu', 'Gente como tú')]];
      return tSvg(214, `${P.map(([e, t], i) => { const a = (i / 6) * Math.PI * 2 - Math.PI / 2, x = 160 + Math.cos(a) * 98, y = 100 + Math.sin(a) * 74; return `<g ${tA(.2 + i * .4, 'ta-pop')}><rect x="${x - 58}" y="${y - 17}" width="116" height="34" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d6e(x - 42, y + 6, e, 14)}</g><text x="${x - 30}" y="${y + 5}" class="tat s" style="font-size:12px">${t}</text>
          <path d="M${160 + Math.cos(a) * 40} ${100 + Math.sin(a) * 26}L${160 + Math.cos(a) * 62} ${100 + Math.sin(a) * 42}" stroke="#9B6CF2" stroke-width="2.5" stroke-dasharray="3 3"/></g>`; }).join('')}
        <g ${tA(2.6, 'ta-pop')}><circle cx="160" cy="100" r="30" fill="#14204A"/><g>${d6e(160, 110, '⚙️', 26)}</g></g>
        <text x="160" y="206" text-anchor="middle" class="tat s" ${tA(3.2, 'ta-fade')}>${L("Amb tot això, endevina què t'enganxarà", 'Con todo esto, adivina qué te enganchará')}</text>`);
    },
    // la bombolla de filtre: a dins, sempre el mateix; a fora, tot un món
    d6bombolla() {
      const O = [['🎻', 30, 30], ['🔭', 290, 34], ['🎨', 26, 150], ['🌍', 292, 156], ['🐢', 160, 22], ['🧪', 60, 96], ['📚', 262, 96]];
      return tSvg(214, `${O.map(([e, x, y], i) => `<g ${tA(1.8 + i * .2, 'ta-pop')}>${d6e(x, y, e, 22)}</g>`).join('')}
        <g ${tA(.2, 'ta-pop')}><circle cx="160" cy="96" r="66" fill="#CFE9FF" fill-opacity=".55" stroke="#7CB8F0" stroke-width="3"><animate attributeName="r" values="66;70;66" dur="3s" repeatCount="indefinite"/></circle>
          <g>${d6e(160, 108, '🧒', 34)}</g>${[[124, 62], [196, 62], [118, 128], [202, 128], [160, 48]].map(([x, y]) => `<g>${d6e(x, y, '⚽', 16)}</g>`).join('')}</g>
        <g ${tA(3, 'ta-pop')}><rect x="20" y="176" width="280" height="32" rx="16" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="160" y="197" text-anchor="middle" class="tat s">${L("El teu inici no és el món sencer", 'Tu inicio no es el mundo entero')}</text></g>`);
    },
    // l'anunci honest: què hi va i què no
    d6honest() {
      const Y = [L('Què és', 'Qué es'), L('Quant costa', 'Cuánto cuesta'), L('Qui el fa', 'Quién lo hace'), L('Per a què', 'Para qué')], N = [L('Presses falses', 'Prisas falsas'), L('Lletra petita', 'Letra pequeña'), L('«El millor del món»', '«Lo mejor del mundo»')];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="8" width="150" height="198" rx="14" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="85" y="32" text-anchor="middle" class="tat b">✅ ${L('Hi va', 'Va')}</text></g>
        ${Y.map((t, i) => `<g ${tA(.6 + i * .4, 'ta-in')}><rect x="20" y="${44 + i * 38}" width="130" height="30" rx="10" fill="#fff"/><text x="85" y="${64 + i * 38}" text-anchor="middle" class="tat s">${t}</text></g>`).join('')}
        <g ${tA(2.2, 'ta-in')}><rect x="168" y="8" width="142" height="198" rx="14" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2.5"/><text x="239" y="32" text-anchor="middle" class="tat b">🚫 ${L('No hi va', 'No va')}</text></g>
        ${N.map((t, i) => `<g ${tA(2.6 + i * .4, 'ta-in')}><rect x="176" y="${44 + i * 38}" width="126" height="30" rx="10" fill="#fff"/><text x="239" y="${64 + i * 38}" text-anchor="middle" class="tat s" style="font-size:12px">${t}</text></g>`).join('')}`);
    }
  });
}
