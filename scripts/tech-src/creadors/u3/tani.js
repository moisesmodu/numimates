/* Tech Creadors · unitat 3 «Interacció» · animacions de teoria (TANI)
   Esdeveniments (tocar un personatge, les tecles), direccions, missatges entre personatges, diàlegs per torns i el conte
   interactiu. Dibuixos propis: els personatges són els mateixos de l'escenari (STG_ART) en petit. */
Object.assign(TANI, (() => {
  // un dibuix SVG (personatge o fons) posat dins un grup escalat: sense <svg> niats, perquè el CSS de les pàgines
  // (p. ex. «.tart svg { width: 100% }») no els faci créixer
  const inl = (sv, cx, cy, s, fit = Math.max) => { const m = /viewBox="([-\d.\s]+)"/.exec(sv), [a, b, c, d] = m ? m[1].trim().split(/\s+/).map(Number) : [0, 0, 100, 100];
    const k = s / fit(c, d), body = sv.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
    return `<g transform="translate(${(cx - c * k / 2 - a * k).toFixed(2)} ${(cy - d * k / 2 - b * k).toFixed(2)}) scale(${k.toFixed(4)})">${body}</g>`; };
  // un personatge de l'escenari dins d'un quadrat de costat s, centrat a (cx, cy)
  const spr = (art, c, cx, cy, s) => { const a = typeof STG_ART !== 'undefined' && STG_ART[art]; return a ? inl(a.svg(c % (a.n || 1)), cx, cy, s) : ''; };
  // el mateix, mirant a l'esquerra (com fa l'escenari quan la direcció és negativa)
  const sprL = (art, c, cx, cy, s) => `<g transform="translate(${2 * cx} 0) scale(-1 1)">${spr(art, c, cx, cy, s)}</g>`;
  // un fons de l'escenari en petit (480 × 360 → w × w·0,75), retallat a la vinyeta
  const bg = (n, x, y, w) => { const b = typeof STG_BG !== 'undefined' && STG_BG[n], id = 'g3c' + n + x + y; return `<defs><clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${w * .75}" rx="6"/></clipPath></defs><g clip-path="url(#${id})">${b ? inl(b.svg(), x + w / 2, y + w * .375, w, Math.min) : `<rect x="${x}" y="${y}" width="${w}" height="${w * .75}" fill="#BFE8FF"/>`}</g>`; };
  // animacions SMIL que es repeteixen
  const SM = (attr, values, kt, dur, calc = 'discrete') => `<animate attributeName="${attr}" values="${values}" keyTimes="${kt}" calcMode="${calc}" dur="${dur}s" repeatCount="indefinite"/>`;
  const show = (vals, kt, dur) => SM('opacity', vals, kt, dur);
  // capçalera d'esdeveniment (com a l'editor: color de mel per a tocar i tecles, taronja per als missatges, verd per a «quan comença»)
  const hat = (x, y, w, lines, col = '#B07A00') => { const h = 14 + lines.length * 17; return `<g filter="url(#bwSh)"><path d="M${x} ${y + 10}q0 -10 10 -10h22q8 -7 26 0h${w - 68}q10 0 10 10v${h - 10}q0 6 -6 6h-${w - 12}q-6 0 -6 -6z" fill="${col}"/></g>${lines.map((t, i) => `<text x="${x + 12}" y="${y + 21 + i * 17}" class="tat w s">${t}</text>`).join('')}`; };
  const blk = (x, y, w, txt, col, dark) => `<rect x="${x}" y="${y}" width="${w}" height="28" rx="8" fill="${col}" filter="url(#bwSh)"/><text x="${x + 10}" y="${y + 19}" class="tat s${dark ? '' : ' w'}">${txt}</text>`;
  const bub = (x, y, w, txt, tail = 'l') => `<rect x="${x}" y="${y}" width="${w}" height="30" rx="14" fill="#fff" stroke="#20306A" stroke-width="2"/><path d="M${tail === 'l' ? x + 18 : x + w - 18} ${y + 29}l${tail === 'l' ? -6 : 6} 12l${tail === 'l' ? 14 : -14} -12" fill="#fff" stroke="#20306A" stroke-width="2" stroke-linejoin="round"/><rect x="${tail === 'l' ? x + 12 : x + w - 26}" y="${y + 26}" width="14" height="4" fill="#fff"/><text x="${x + w / 2}" y="${y + 20}" text-anchor="middle" class="tat s">${txt}</text>`;
  const env = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-14" y="-10" width="28" height="20" rx="3" fill="#FFF3C4" stroke="#B46A00" stroke-width="2"/><path d="M-14 -9l14 11l14 -11" fill="none" stroke="#B46A00" stroke-width="2" stroke-linejoin="round"/></g>`;
  const finger = `<g><circle cx="0" cy="0" r="9" fill="#FFD9B8" stroke="#8A5A33" stroke-width="2"/><path d="M-6 6q-4 18 4 26h16q8 -10 2 -26z" fill="#FFD9B8" stroke="#8A5A33" stroke-width="2" stroke-linejoin="round"/></g>`;
  const ground = (x, y, w, h, top = '#BFE8FF', bot = '#E9F7FF', gr = '#7CC456') => `<defs><linearGradient id="g3sky${x}${y}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bot}"/></linearGradient></defs><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="url(#g3sky${x}${y})" stroke="#DCE4FA" stroke-width="2"/><path d="M${x} ${y + h - 34}q${w / 2} -16 ${w} 0v${18}q0 16 -16 16h-${w - 32}q-16 0 -16 -16z" fill="${gr}"/>`;

  return {
    // esdeveniment: toques el gat → el guió «Quan toco aquest personatge» comença → vestit següent i «Miau!»
    g3event() {
      const D = 5.5;
      return tSvg(214, `${ground(10, 10, 140, 150)}
        <g>${show('1;0;1', '0;.4;.94', D)}${spr('gat', 0, 80, 104, 84)}</g><g opacity="0">${show('0;1;0', '0;.4;.94', D)}${spr('gat', 1, 80, 104, 84)}</g>
        <g>${show('1;0;1', '0;.36;.94', D)}<text x="116" y="50" class="tat b" fill="#6A78A8">z</text><text x="128" y="38" class="tat" fill="#8A96C0">z</text><text x="138" y="28" class="tat s" fill="#A9B3D6">z</text></g>
        <g opacity="0">${show('0;1;0', '0;.44;.92', D)}${bub(84, 22, 64, L('Miau!', '¡Miau!'), 'l')}</g>
        <circle cx="78" cy="96" r="4" fill="none" stroke="#FFC531" stroke-width="4" opacity="0">${SM('r', '4;4;30;30', '0;.34;.48;1', D, 'linear')}${SM('opacity', '0;.95;0;0', '0;.34;.48;1', D, 'linear')}</circle>
        <g>${SM('opacity', '0;1;1;0;0', '0;.08;.4;.48;1', D, 'linear')}<g><animateTransform attributeName="transform" type="translate" values="140 176;140 176;84 102;84 102;140 176" keyTimes="0;.1;.32;.42;1" dur="${D}s" repeatCount="indefinite"/>${finger}</g></g>
        ${hat(158, 14, 156, [L('Quan toco aquest', 'Al tocar este'), L('personatge', 'personaje')])}
        ${blk(164, 70, 144, L('vestit següent', 'disfraz siguiente'), '#C447A8')}${blk(164, 102, 144, L('digues Miau!', 'di ¡Miau!'), '#C447A8')}
        <rect x="153" y="8" width="164" height="128" rx="14" fill="none" stroke="#FFC531" stroke-width="4" opacity="0">${show('0;1;0', '0;.38;.92', D)}</rect>
        <rect x="161" y="67" width="150" height="34" rx="10" fill="none" stroke="#20306A" stroke-width="3" opacity="0">${show('0;1;0', '0;.4;.46', D)}</rect>
        <rect x="161" y="99" width="150" height="34" rx="10" fill="none" stroke="#20306A" stroke-width="3" opacity="0">${show('0;1;0', '0;.46;.92', D)}</rect>
        <g ${tA(.4, 'ta-in')}><rect x="22" y="172" width="80" height="30" rx="15" fill="#B07A00"/><text x="62" y="192" text-anchor="middle" class="tat w s">${L('toc!', '¡toc!')}</text></g>
        <g ${tA(2.2, 'ta-in')}><path d="M110 187h26" stroke="#20306A" stroke-width="4" stroke-linecap="round"/><path d="M130 179l9 8l-9 8" fill="none" stroke="#20306A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="146" y="172" width="162" height="30" rx="15" fill="#1FA463"/><text x="227" y="192" text-anchor="middle" class="tat w s">${L('el guió comença', 'el guion empieza')}</text></g>`);
    },
    // la direcció: 0 amunt, 90 dreta, 180 avall, -90 esquerra (el bloc «apunta en direcció» va canviant)
    g3dir() {
      const D = 5.6, C = [104, 104], R = 74, slots = [['90', 0, 1, 90], ['180', 1, 0, 180], ['-90', 2, -1, 0], ['0', 3, 0, -1]];
      const kt = '0;.25;.5;.75', on = k => [0, 1, 2, 3].map(i => i === k ? 1 : 0).join(';');
      const arrow = (deg, col, w = 7) => `<g transform="rotate(${deg} ${C[0]} ${C[1]})"><path d="M${C[0]} ${C[1] - 40}V${C[1] - R + 8}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/><path d="M${C[0] - 12} ${C[1] - R + 20}L${C[0]} ${C[1] - R + 4}L${C[0] + 12} ${C[1] - R + 20}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/></g>`;
      const lab = (txt, x, y) => `<text x="${x}" y="${y}" text-anchor="middle" class="tat b">${txt}</text>`;
      return tSvg(214, `<circle cx="${C[0]}" cy="${C[1]}" r="${R + 14}" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        ${[0, 90, 180, 270].map(d => arrow(d, '#D5DCF0')).join('')}
        ${[[90, 0], [180, 1], [270, 2], [0, 3]].map(([d, k]) => `<g opacity="0">${show(on(k), kt, D)}${arrow(d, '#F08A24', 8)}</g>`).join('')}
        ${lab('0', C[0] + 24, C[1] - R + 22)}${lab('90', C[0] + R - 12, C[1] + 30)}${lab('180', C[0] + 30, C[1] + R - 4)}${lab('-90', C[0] - R + 16, C[1] + 30)}
        <g>${show('1;1;0;1', kt, D)}${spr('cavaller', 0, C[0], C[1], 62)}</g><g opacity="0">${show(on(2), kt, D)}${sprL('cavaller', 0, C[0], C[1], 62)}</g>
        <rect x="196" y="40" width="118" height="92" rx="14" fill="#C9DAFF" opacity=".45"/>
        <text x="255" y="62" text-anchor="middle" class="tat s">${L('apunta en', 'apunta en')}</text><text x="255" y="80" text-anchor="middle" class="tat s">${L('direcció', 'dirección')}</text>
        <rect x="222" y="90" width="66" height="32" rx="16" fill="#3D7BF4"/>
        ${slots.map(([v], k) => `<text x="255" y="112" text-anchor="middle" class="tat w b" opacity="0">${show(on(k), kt, D)}${v}</text>`).join('')}
        <text x="255" y="160" text-anchor="middle" class="tat s">${L('i després', 'y después')}</text>
        <rect x="200" y="168" width="110" height="30" rx="9" fill="#3D7BF4" filter="url(#bwSh)"/><text x="255" y="188" text-anchor="middle" class="tat w s">${L('mou-te 10', 'muévete 10')}</text>`);
    },
    // les fletxes: mentre prems →, el cavaller va a la dreta; amb ←, apunta a l'esquerra i torna
    g3keys() {
      const D = 6, kt6 = '0;.1;.45;.55;.9;1', R = '0;1;0;0;0;0', Lf = '0;0;0;1;0;0';
      const key = (x, y, w, txt, vals) => `<rect x="${x}" y="${y}" width="${w}" height="30" rx="7" fill="#fff" stroke="#9AA6C8" stroke-width="2"/><rect x="${x}" y="${y}" width="${w}" height="30" rx="7" fill="#F08A24" opacity="0">${SM('opacity', vals, kt6, D)}</rect><text x="${x + w / 2}" y="${y + 21}" text-anchor="middle" class="tat b">${txt}</text>`;
      return tSvg(222, `${ground(10, 8, 300, 96)}
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;180 0;180 0;0 0;0 0" keyTimes="${kt6}" dur="${D}s" repeatCount="indefinite"/>
          <g>${show('1;1;1;0;0;1', kt6, D)}${spr('cavaller', 1, 62, 58, 66)}</g><g opacity="0">${show('0;0;0;1;1;0', kt6, D)}${sprL('cavaller', 1, 62, 58, 66)}</g></g>
        <rect x="12" y="116" width="112" height="84" rx="14" fill="#EEF2FB" stroke="#DCE4FA" stroke-width="2"/>
        ${key(52, 124, 32, '↑', '0;0;0;0;0;0')}${key(16, 160, 32, '←', Lf)}${key(52, 160, 32, '↓', '0;0;0;0;0;0')}${key(88, 160, 32, '→', R)}
        <g>${show('1;1;1;0;0;1', kt6, D)}${hat(128, 110, 186, [L('Quan premo la tecla', 'Al pulsar la tecla'), L('→ fletxa dreta', '→ flecha derecha')], '#B07A00')}${blk(132, 162, 182, L('apunta en direcció 90', 'apunta en dirección 90'), '#3D7BF4')}${blk(132, 192, 112, L('mou-te 10', 'muévete 10'), '#3D7BF4')}</g>
        <g opacity="0">${show('0;0;0;1;1;0', kt6, D)}${hat(128, 110, 186, [L('Quan premo la tecla', 'Al pulsar la tecla'), L('← fletxa esquerra', '← flecha izquierda')], '#B07A00')}${blk(132, 162, 182, L('apunta en direcció -90', 'apunta en dirección -90'), '#3D7BF4')}${blk(132, 192, 112, L('mou-te 10', 'muévete 10'), '#3D7BF4')}</g>`);
    },
    // enviar i rebre: la Guida parla, envia «tuga», el sobre vola i la Tuga, que l'esperava, respon
    g3msg() {
      const D = 6;
      return tSvg(214, `${ground(10, 8, 300, 150)}
        ${spr('guida', 1, 68, 104, 84)}${spr('tuga', 0, 252, 108, 80)}
        <g opacity="0">${show('0;1;0;0', '0;.04;.32;1', D)}${bub(22, 16, 112, L('Hola, Tuga!', '¡Hola, Tuga!'), 'l')}</g>
        <g opacity="0">${show('0;1;0', '0;.58;.95', D)}${bub(182, 16, 124, L('Hola, Guida!', '¡Hola, Guida!'), 'r')}</g>
        <g opacity="0">${show('0;1;0', '0;.32;.56', D)}<g><animateMotion dur="${D}s" repeatCount="indefinite" path="M100 76 Q160 18 220 76" keyPoints="0;0;1;1" keyTimes="0;.32;.54;1" calcMode="linear"/>${env(0, 0, 1.15)}</g></g>
        <path d="M100 76 Q160 18 220 76" fill="none" stroke="#B46A00" stroke-width="2" stroke-dasharray="4 6" opacity=".35"/>
        <g ${tA(1.6, 'ta-in')}><rect x="10" y="168" width="150" height="40" rx="9" fill="#F2B21B" filter="url(#bwSh)"/><text x="22" y="185" class="tat s">${L('envia el missatge', 'envía el mensaje')}</text><text x="22" y="201" class="tat b">«tuga»</text></g>
        ${hat(166, 166, 146, [L('Quan rebo el', 'Al recibir el'), L('missatge «tuga»', 'mensaje «tuga»')], '#C26F18')}
        <rect x="161" y="161" width="156" height="50" rx="12" fill="none" stroke="#FFC531" stroke-width="4" opacity="0">${show('0;1;0', '0;.55;.95', D)}</rect>`);
    },
    // un missatge, molts personatges: el regal envia «sorpresa» i tothom hi reacciona alhora (l'Estel, que era amagada, apareix)
    g3many() {
      const D = 5.5, kt = '0;.36;.94';
      const ring = d => `<circle cx="160" cy="54" r="20" fill="none" stroke="#F2B21B" stroke-width="5" opacity="0">${SM('r', '20;20;128;128', `0;${.3 + d};${.52 + d};1`, D, 'linear')}${SM('opacity', `0;.9;0;0`, `0;${.3 + d};${.52 + d};1`, D, 'linear')}</circle>`;
      return tSvg(214, `${ground(10, 8, 300, 168)}
        ${ring(0)}${ring(.06)}
        <g>${show('1;0;1', '0;.3;.94', D)}${spr('regal', 0, 160, 54, 58)}</g>
        <g opacity="0">${show('0;1;0', '0;.3;.94', D)}<rect x="104" y="40" width="112" height="30" rx="15" fill="#F2B21B"/><text x="160" y="60" text-anchor="middle" class="tat s">«sorpresa»</text></g>
        <g>${show('1;0;1', kt, D)}${spr('guida', 0, 52, 130, 74)}</g><g opacity="0">${show('0;1;0', kt, D)}${spr('guida', 1, 52, 130, 74)}</g>
        <g>${show('1;0;1', kt, D)}${spr('tuga', 0, 124, 136, 70)}</g><g opacity="0">${show('0;1;0', kt, D)}${spr('tuga', 1, 124, 136, 70)}</g>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 -26;0 0;0 -26;0 0;0 0" keyTimes="0;.38;.48;.58;.68;.78;1" dur="${D}s" repeatCount="indefinite"/>${spr('ocell', 0, 204, 132, 62)}</g>
        <g opacity="0">${show('0;1;0', '0;.42;.94', D)}${spr('estel', 1, 274, 120, 70)}</g>
        <g opacity="0">${show('0;1;0', '0;.42;.94', D)}<text x="274" y="176" text-anchor="middle" class="tat s">${L('apareix!', '¡aparece!')}</text></g>
        <text x="160" y="204" text-anchor="middle" class="tat b">${L('Un missatge, molts personatges', 'Un mensaje, muchos personajes')}</text>`);
    },
    // parlar per torns: cada frase acaba amb un missatge que passa el torn a l'altre personatge
    g3dialog() {
      const row = (y, art, c) => `<rect x="10" y="${y - 24}" width="300" height="48" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>${spr(art, c, 36, y, 44)}`;
      const bar = (x, y, w, txt, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y - 14}" width="${w}" height="28" rx="14" fill="#C447A8"/><text x="${x + w / 2}" y="${y + 5}" text-anchor="middle" class="tat w s">${txt}</text></g>`;
      const pass = (x, y1, y2, t) => `<g ${tA(t, 'ta-fade')}><path d="M${x} ${y1}V${y2}" stroke="#B46A00" stroke-width="2.5" stroke-dasharray="4 4"/>${env(x, (y1 + y2) / 2, .8)}</g>`;
      return tSvg(214, `<text x="160" y="20" text-anchor="middle" class="tat b">${L('Parlar per torns', 'Hablar por turnos')}</text>
        ${row(56, 'guida', 1)}${row(124, 'tuga', 0)}
        ${bar(62, 56, 86, L('Hola!', '¡Hola!'), .3)}${pass(158, 70, 110, 1.2)}
        ${bar(150, 124, 102, L('Assagem?', '¿Ensayamos?'), 1.7)}${pass(262, 110, 70, 2.6)}
        ${bar(226, 56, 80, L('Som-hi!', '¡Vamos!'), 3.1)}
        <g ${tA(1.2, 'ta-fade')}><text x="186" y="94" class="tat s" fill="#B46A00">«tuga»</text></g><g ${tA(2.6, 'ta-fade')}><text x="256" y="94" text-anchor="end" class="tat s" fill="#B46A00">«guida»</text></g>
        <path d="M62 166H302" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round"/><path d="M296 160l8 6l-8 6" fill="none" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text x="62" y="186" class="tat s" fill="#6A78A8">${L('el temps passa', 'el tiempo pasa')}</text>
        <text x="160" y="206" text-anchor="middle" class="tat b" ${tA(3.4, 'ta-fade')}>${L('Cada missatge passa el torn', 'Cada mensaje pasa el turno')}</text>`);
    },
    // el conte interactiu: inici → nus → qui el mira tria un dels dos finals
    g3tale() {
      const page = (x, y, w, bgn, inner, t, lbl, col) => `<g ${tA(t, 'ta-in')}><rect x="${x - 3}" y="${y - 3}" width="${w + 6}" height="${w * .75 + 6}" rx="10" fill="${col}"/>${bg(bgn, x, y, w)}${inner}<text x="${x + w / 2}" y="${y + w * .75 + 22}" text-anchor="middle" class="tat s">${lbl}</text></g>`;
      const arr = (x1, y1, x2, y2, t) => `<g ${tA(t, 'ta-fade')}><path d="M${x1} ${y1}L${x2} ${y2}" stroke="#20306A" stroke-width="3.5" stroke-linecap="round"/><circle cx="${x2}" cy="${y2}" r="4.5" fill="#20306A"/></g>`;
      return tSvg(214, `${page(10, 52, 86, 'bosc', spr('cavaller', 0, 53, 86, 50), .2, L('Inici', 'Inicio'), '#3CC47C')}
        ${arr(100, 84, 112, 84, .9)}
        ${page(116, 52, 86, 'nit', spr('drac', 0, 159, 88, 54), 1.1, L('Nus', 'Nudo'), '#3D7BF4')}
        ${arr(206, 76, 220, 46, 2)}${arr(206, 98, 220, 132, 2)}
        ${page(224, 8, 86, 'parc', spr('cavaller', 1, 248, 44, 40) + spr('drac', 1, 286, 44, 46) + spr('cor', 0, 268, 22, 22), 2.4, '', '#E5489A')}
        ${page(224, 116, 86, 'cel', spr('drac', 1, 280, 140, 44) + spr('estrella', 0, 244, 136, 26), 2.8, '', '#F2B21B')}
        <g ${tA(2.4, 'ta-fade')}><text x="267" y="88" text-anchor="middle" class="tat s">${L('Final 1', 'Final 1')}</text></g>
        <g ${tA(2.8, 'ta-fade')}><text x="267" y="196" text-anchor="middle" class="tat s">${L('Final 2', 'Final 2')}</text></g>
        <g ${tA(3.4, 'ta-pop')}><rect x="14" y="10" width="190" height="30" rx="15" fill="#F08A24"/><text x="109" y="30" text-anchor="middle" class="tat w s">${L('Qui el mira tria el final', 'Quien lo mira elige el final')}</text></g>
        <g ${tA(3.6, 'ta-fade')}><g transform="translate(206 166) scale(.8)">${finger}</g></g>`);
    },
    // primer el pla: el conte dibuixat en 4 vinyetes i, després, els guions
    g3plan() {
      const cell = (x, y, n, txt, inner, t) => `<g><rect x="${x}" y="${y}" width="84" height="80" rx="8" fill="#fff" stroke="#20306A" stroke-width="2.5" pathLength="1" ${tA(t, 'ta-draw')}/>
        <g ${tA(t + .3, 'ta-pop')}>${inner}</g><g ${tA(t + .2, 'ta-fade')}><circle cx="${x + 12}" cy="${y + 12}" r="9" fill="#F08A24"/><text x="${x + 12}" y="${y + 17}" text-anchor="middle" class="tat w s">${n}</text><text x="${x + 42}" y="${y + 74}" text-anchor="middle" class="tat s">${txt}</text></g></g>`;
      return tSvg(214, `<rect x="8" y="8" width="190" height="198" rx="12" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/>
        ${cell(14, 16, 1, L('inici', 'inicio'), spr('cavaller', 0, 56, 46, 38), .2)}${cell(106, 16, 2, L('nus', 'nudo'), spr('drac', 0, 148, 46, 44), .8)}
        ${cell(14, 114, 3, L('tria', 'elige'), spr('cor', 0, 44, 144, 26) + spr('estrella', 0, 72, 144, 26), 1.4)}${cell(106, 114, 4, L('final', 'final'), spr('drac', 1, 162, 144, 40) + spr('cavaller', 1, 130, 144, 34), 2)}
        <g ${tA(2.8, 'ta-in')}><path d="M200 106h12" stroke="#20306A" stroke-width="4" stroke-linecap="round"/><path d="M207 98l8 8l-8 8" fill="none" stroke="#20306A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(3.2, 'ta-in')}>${hat(220, 50, 96, [L('Quan', 'Al'), L('comença', 'empezar')], '#1E7A42')}${blk(224, 104, 84, L('digues', 'di'), '#C447A8')}${blk(224, 136, 84, L('envia', 'envía'), '#F2B21B', true)}</g>
        <text x="268" y="190" text-anchor="middle" class="tat s" ${tA(3.6, 'ta-fade')}>${L('i ara, blocs', 'y ahora, bloques')}</text>`);
    }
  };
})());
