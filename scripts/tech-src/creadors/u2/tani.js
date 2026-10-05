/* Tech Creadors · unitat 2 «Animació» · animacions de teoria (TANI)
   Dibuixos propis de Numi. Els personatges són els mateixos de l'escenari (STG_ART), dibuixats dins de l'animació. */
{
  // un personatge de l'escenari (vestit c) centrat a (x, y) amb amplada w
  const g2a = (k, c, x, y, w) => {
    if (typeof STG_ART === 'undefined' || !STG_ART[k]) return `<circle cx="${x}" cy="${y}" r="${w / 3}" fill="#FF9A2E"/>`;
    const s = STG_ART[k].svg(c), vb = (s.match(/viewBox="([^"]+)"/) || [])[1] || '0 0 100 100', p = vb.split(/[\s,]+/).map(Number), h = w * p[3] / p[2];
    return s.replace('<svg ', `<svg x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" `);
  };
  // dos vestits que s'alternen (canvi sec, cada dur/2 segons)
  const g2sw = (a, b, dur) => `<g>${a}<animate attributeName="opacity" values="1;0" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/></g><g opacity="0">${b}<animate attributeName="opacity" values="0;1" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/></g>`;
  // un bloc de l'escenari (color de la categoria), amb el text en blanc
  const g2b = (x, y, w, txt, col = '#C447A8', extra = '') => `<g ${extra}><rect x="${x}" y="${y}" width="${w}" height="28" rx="8" fill="${col}"/><rect x="${x}" y="${y + 22}" width="${w}" height="6" rx="3" fill="#000" opacity=".12"/><text x="${x + 10}" y="${y + 19}" class="tat w s" style="font-size:13px">${txt}</text></g>`;
  // un escenari petit (requadre amb fons de mar)
  const g2st = (x, y, w, h, id = 'g2sea') => `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FD3F7"/><stop offset="1" stop-color="#2E86DE"/></linearGradient></defs>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="url(#${id})" stroke="#1C5FA8" stroke-width="2.5"/><path d="M${x + 2} ${y + h - 14} Q${x + w / 2} ${y + h - 24} ${x + w - 2} ${y + h - 14} V${y + h - 6} Q${x + w - 2} ${y + h - 2} ${x + w - 8} ${y + h - 2} H${x + 8} Q${x + 2} ${y + h - 2} ${x + 2} ${y + h - 6}Z" fill="#F4D58D"/>
    ${[[.18, .7], [.82, .5], [.6, .3]].map(([fx, fy], i) => `<circle cx="${x + w * fx}" cy="${y + h * fy}" r="${3 + i}" fill="#fff" opacity=".55"><animate attributeName="cy" values="${y + h * fy};${y + 10};${y + h * fy}" dur="${3 + i}s" repeatCount="indefinite"/></circle>`).join('')}`;
  const VS = L('vestit següent', 'disfraz siguiente');

  Object.assign(TANI, {
    // un dibuix animat són molts dibuixos que canvien de pressa (el llibret que es passa amb el dit)
    g2flip() {
      const fish = c => g2a('peix', c, 0, 0, 92);
      const pages = [3, 2, 1, 0].map(k => `<rect x="${14 + k * 4}" y="${14 + k * 4}" width="124" height="100" rx="8" fill="#fff" stroke="#C9D6FB" stroke-width="2"/>`).join('');
      const frames = [0, 1, 0, 1].map((c, i) => `<g ${tA(.4 + i * .45, 'ta-pop')}><rect x="${24 + i * 72}" y="148" width="60" height="44" rx="5" fill="#fff"/><g transform="translate(${54 + i * 72} 170)">${g2a('peix', c, 0, 0, 50)}</g><text x="${30 + i * 72}" y="161" class="tat s" style="font-size:13px;fill:#7C8BB5">${i + 1}</text></g>`).join('');
      const holes = Array.from({ length: 19 }, (_, i) => `<rect x="${16 + i * 16}" y="${i % 2 ? 140 : 140}" width="7" height="5" rx="1.5" fill="#fff" opacity=".8"/><rect x="${16 + i * 16}" y="196" width="7" height="5" rx="1.5" fill="#fff" opacity=".8"/>`).join('');
      return tSvg(214, `${pages}
        <g transform="translate(76 64)">${g2sw(fish(0), fish(1), .5)}</g>
        <path d="M138 92 L138 114 L116 114 Z" fill="#DCE4FA"><animate attributeName="d" values="M138 92 L138 114 L116 114 Z;M138 66 L138 114 L92 114 Z;M138 92 L138 114 L116 114 Z" dur=".5s" repeatCount="indefinite"/></path>
        <g ${tA(.2, 'ta-in')}><text x="164" y="34" class="tat b">${L('Un dibuix animat', 'Un dibujo animado')}</text><text x="164" y="56" class="tat s">${L('són molts dibuixos', 'son muchos dibujos')}</text><text x="164" y="74" class="tat s">${L('que canvien', 'que cambian')}</text><text x="164" y="92" class="tat s">${L('molt de pressa.', 'muy deprisa.')}</text></g>
        <g ${tA(2.4, 'ta-pop')}><rect x="164" y="100" width="132" height="26" rx="13" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="230" y="118" text-anchor="middle" class="tat s" style="fill:#8A5A00">${L('= moviment!', '= ¡movimiento!')}</text></g>
        <rect x="10" y="134" width="300" height="74" rx="8" fill="#2A2F45"/>${holes}${frames}
        <rect x="21" y="145" width="66" height="50" rx="7" fill="none" stroke="#F2B21B" stroke-width="3.5" ${tA(2.2, 'ta-fade')}><animateTransform attributeName="transform" type="translate" values="0 0;72 0;144 0;216 0" dur="2s" calcMode="discrete" repeatCount="indefinite"/></rect>`);
    },

    // els vestits d'un personatge: vestit 1, vestit 2… i «vestit següent» passa a l'altre (i del darrer torna al primer)
    g2cost() {
      const ring = (x, on) => `<rect x="${x - 4}" y="124" width="104" height="80" rx="15" fill="none" stroke="#C447A8" stroke-width="4" opacity="${on ? 1 : 0}"><animate attributeName="opacity" values="${on ? '1;0' : '0;1'}" dur="2s" calcMode="discrete" repeatCount="indefinite"/></rect>`;
      const card = (x, c, n) => `<g ${tA(.3 + n * .4, 'ta-in')}><rect x="${x}" y="128" width="96" height="72" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g transform="translate(${x + 48} 154)">${g2a('peix', c, 0, 0, 62)}</g>
        <text x="${x + 48}" y="194" text-anchor="middle" class="tat s">${L('vestit', 'disfraz')} ${n + 1}</text></g>`;
      return tSvg(214, `${g2st(10, 10, 140, 104)}<g transform="translate(80 58)">${g2sw(g2a('peix', 0, 0, 0, 96), g2a('peix', 1, 0, 0, 96), 2)}</g>
        ${g2b(162, 22, 146, VS, '#C447A8', tA(.8, 'ta-pop'))}
        <g ${tA(1.2, 'ta-in')}><text x="164" y="74" class="tat s">${L('Canvia el dibuix', 'Cambia el dibujo')}</text><text x="164" y="94" class="tat s">${L('pel següent.', 'por el siguiente.')}</text></g>
        ${card(30, 0, 0)}${card(194, 1, 1)}${ring(30, true)}${ring(194, false)}
        <g ${tA(1.6, 'ta-fade')}><path d="M134 152 H184" stroke="#C447A8" stroke-width="3.5" stroke-linecap="round"/><path d="M178 145 L188 152 L178 159" fill="none" stroke="#C447A8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M184 182 Q160 196 136 182" fill="none" stroke="#C447A8" stroke-width="3" stroke-dasharray="5 5" class="ta-dash"/><path d="M142 176 L134 182 L143 188" fill="none" stroke="#C447A8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    },

    // sense «espera», els vestits canvien tan de pressa que no es veu res; amb «espera», sí
    g2wait() {
      const row = (y, blocks, stage, title, col, t) => `<g ${tA(t, 'ta-in')}><text x="10" y="${y}" class="tat s" style="fill:${col}">${title}</text>${blocks}${stage}</g>`;
      const med = c => g2a('medusa', c, 0, 0, 52);
      const blur = `<g transform="translate(240 64)" opacity=".55">${med(0)}</g><g transform="translate(244 64)" opacity=".55">${med(1)}</g>
        <g stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".9"><path d="M206 50h-12M206 64h-16M206 78h-12M278 50h12M278 64h16M278 78h12"><animate attributeName="opacity" values="1;.2;1" dur=".25s" repeatCount="indefinite"/></path></g>`;
      const clear = `<g transform="translate(242 162)">${g2sw(med(0), med(1), 1)}</g>`;
      const r1 = row(20, `${g2b(10, 30, 152, VS)}${g2b(10, 62, 152, VS)}`, `${g2st(172, 26, 138, 76, 'g2seaA')}${blur}`, L('Sense espera', 'Sin espera'), '#C0392B', .2);
      const r2 = row(124, `${g2b(10, 134, 152, VS)}${g2b(10, 166, 152, L('espera 0,5 segons', 'espera 0,5 segundos'), '#1FA463')}`, `${g2st(172, 124, 138, 76, 'g2seaB')}${clear}`, L('Amb espera', 'Con espera'), '#147A47', 1.6);
      return tSvg(214, `${r1}${r2}
        <g ${tA(1.2, 'ta-pop')}><rect x="176" y="2" width="128" height="22" rx="11" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><text x="240" y="18" text-anchor="middle" class="tat s" style="font-size:13px;fill:#C0392B">${L('Massa ràpid!', '¡Demasiado rápido!')}</text></g>
        <g ${tA(2.6, 'ta-pop')}><rect x="176" y="100" width="128" height="22" rx="11" fill="#E7F7EE" stroke="#1FA463" stroke-width="2"/><text x="240" y="116" text-anchor="middle" class="tat s" style="font-size:13px;fill:#147A47">${L('Ara es veu ✓', 'Ahora se ve ✓')}</text></g>`);
    },

    // 30 fotogrames per segon: cada volta del «per sempre» és un fotograma, i «mou-te 6» avança 6 punts a cada un
    g2fps() {
      const D = 2.5, kt = 'keyTimes="0;.2;.4;.6;.8" calcMode="discrete"';
      const frames = [0, 1, 2, 3, 4].map(i => `<rect x="${16 + i * 60}" y="128" width="50" height="40" rx="5" fill="#fff"/><g transform="translate(${30 + i * 60 + i * 5} 148)">${g2a('peix', i % 2, 0, 0, 26)}</g><text x="${20 + i * 60}" y="139" class="tat s" style="font-size:11px">${i + 1}</text>`).join('');
      const holes = Array.from({ length: 19 }, (_, i) => `<rect x="${14 + i * 16}" y="120" width="7" height="5" rx="1.5" fill="#fff" opacity=".8"/><rect x="${14 + i * 16}" y="171" width="7" height="5" rx="1.5" fill="#fff" opacity=".8"/>`).join('');
      return tSvg(226, `${g2st(8, 8, 150, 100, 'g2seaF')}
        <g><animateTransform attributeName="transform" type="translate" values="40 60;64 60;88 60;112 60;136 60" ${kt} dur="${D}s" repeatCount="indefinite"/>${g2a('peix', 0, 0, 0, 40)}</g>
        <g ${tA(.3, 'ta-in')}><path d="M170 12 h138 a6 6 0 0 1 6 6 v16 a6 6 0 0 1 -6 6 h-124 v34 h124 a6 6 0 0 1 6 6 v6 a6 6 0 0 1 -6 6 h-138 a6 6 0 0 1 -6 -6 v-68 a6 6 0 0 1 6 -6z" fill="#1FA463"/>
          <text x="176" y="31" class="tat w s" style="font-size:13px">${L('per sempre', 'por siempre')}</text>${g2b(184, 44, 128, L('mou-te 6 passos', 'muévete 6 pasos'), '#3D7BF4')}</g>
        <g ${tA(1, 'ta-pop')}><rect x="174" y="92" width="138" height="22" rx="11" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="243" y="108" text-anchor="middle" class="tat s" style="font-size:12.5px;fill:#8A5A00">${L('1 volta = 1 fotograma', '1 vuelta = 1 fotograma')}</text></g>
        <rect x="8" y="116" width="304" height="64" rx="8" fill="#2A2F45"/>${holes}${frames}
        <rect x="13" y="125" width="56" height="46" rx="7" fill="none" stroke="#F2B21B" stroke-width="3.5"><animateTransform attributeName="transform" type="translate" values="0 0;60 0;120 0;180 0;240 0" ${kt} dur="${D}s" repeatCount="indefinite"/></rect>
        <text x="160" y="201" text-anchor="middle" class="tat b" ${tA(1.8, 'ta-fade')}>${L("30 fotogrames cada segon", '30 fotogramas cada segundo')}</text>
        <text x="160" y="220" text-anchor="middle" class="tat s" ${tA(2.4, 'ta-fade')}>${L('6 punts × 30 = 180 punts per segon', '6 puntos × 30 = 180 puntos por segundo')}</text>`);
    },

    // «per sempre» torna a començar i no s'acaba mai: el que hi ha a sota no arriba mai
    g2never() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><path d="M14 14 h160 a6 6 0 0 1 6 6 v18 a6 6 0 0 1 -6 6 h-142 v64 h142 a6 6 0 0 1 6 6 v10 a6 6 0 0 1 -6 6 h-160 a6 6 0 0 1 -6 -6 v-104 a6 6 0 0 1 6 -6z" fill="#1FA463"/>
          <text x="22" y="34" class="tat w s">${L('per sempre', 'por siempre')}</text>${g2b(32, 50, 148, L('mou-te 5 passos', 'muévete 5 pasos'), '#3D7BF4')}${g2b(32, 80, 148, L('rebota a la vora', 'rebota en el borde'), '#3D7BF4')}
          <circle r="5" fill="#FFE27A" stroke="#fff" stroke-width="2"><animateMotion dur="1.6s" repeatCount="indefinite" path="M20 48 V112"/></circle></g>
        <g ${tA(1.4, 'ta-in')} opacity=".55">${g2b(8, 150, 172, L('digues «Adéu!»', 'di «¡Adiós!»'))}</g>
        <g ${tA(2.2, 'ta-pop')}><path d="M14 164 H174" stroke="#EF5A5A" stroke-width="3" stroke-linecap="round"/><circle cx="172" cy="152" r="10" fill="#EF5A5A"/><path d="M167 147 l10 10 M177 147 l-10 10" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><text x="94" y="202" text-anchor="middle" class="tat s" style="fill:#C0392B">${L('Mai no hi arriba!', '¡Nunca llega aquí!')}</text></g>
        ${g2st(190, 20, 122, 120, 'g2seaN')}
        <g><animateTransform attributeName="transform" type="translate" values="216 78;286 78;216 78" dur="3s" repeatCount="indefinite"/><g><animateTransform attributeName="transform" type="scale" values="-1 1;1 1" dur="3s" calcMode="discrete" repeatCount="indefinite"/>${g2a('peix', 0, 0, 0, 48)}</g></g>
        <g ${tA(.8, 'ta-in')}><text x="251" y="166" text-anchor="middle" class="tat s">${L('Neda i neda…', 'Nada y nada…')}</text><text x="251" y="186" text-anchor="middle" class="tat s">${L('i no para mai.', 'y no para nunca.')}</text></g>`);
    },

    // «si toques la vora, rebota»: arriba a la paret i dona la volta (la direcció canvia de 90 a -90)
    g2bounce() {
      const dur = 4;
      return tSvg(214, `${g2st(10, 10, 300, 128, 'g2seaR')}
        <rect x="10" y="10" width="8" height="128" rx="4" fill="#F2B21B" opacity="0"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.94;.97;.99;1" dur="${dur}s" repeatCount="indefinite"/></rect>
        <rect x="302" y="10" width="8" height="128" rx="4" fill="#F2B21B" opacity="0"><animate attributeName="opacity" values="0;1;0;0" keyTimes="0;.47;.52;1" dur="${dur}s" repeatCount="indefinite"/></rect>
        <g><animateTransform attributeName="transform" type="translate" values="60 70;262 70;60 70" keyTimes="0;.5;1" dur="${dur}s" repeatCount="indefinite"/><g><animateTransform attributeName="transform" type="scale" values="-1 1;1 1" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/>${g2a('peix', 0, 0, 0, 70)}</g></g>
        <g opacity="0"><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.48;.6;.64;1" dur="${dur}s" repeatCount="indefinite"/><path d="M286 34 l6 12 l13 2 l-10 8 l3 13 l-12 -7 l-12 7 l3 -13 l-10 -8 l13 -2z" fill="#FFE27A" stroke="#C9780E" stroke-width="2"/><text x="252" y="32" class="tat b" style="fill:#fff">boing!</text></g>
        <g><rect x="20" y="18" width="150" height="26" rx="13" fill="#14204A" opacity=".55"/><text x="32" y="36" class="tat s" style="fill:#fff">${L('direcció', 'dirección')}</text>
          <text x="116" y="36" class="tat b" style="fill:#FFE27A">90 →<animate attributeName="opacity" values="1;0" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/></text>
          <text x="116" y="36" class="tat b" style="fill:#FFE27A" opacity="0">← -90<animate attributeName="opacity" values="0;1" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/></text></g>
        ${g2b(40, 150, 240, L('si toques la vora, rebota', 'si tocas el borde, rebota'), '#3D7BF4', tA(.4, 'ta-pop'))}
        <text x="160" y="202" text-anchor="middle" class="tat s" ${tA(1, 'ta-in')}>${L('Arriba a la vora i dona la volta.', 'Llega al borde y da la vuelta.')}</text>`);
    },

    // dos guions alhora: la bandera verda els engega tots dos; un mou el peix i l'altre li canvia el vestit
    g2para() {
      const scr = (x, title, b1, b2, c1, c2, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="46" width="146" height="98" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <rect x="${x}" y="46" width="146" height="26" rx="12" fill="#FFF3D6"/><text x="${x + 12}" y="64" class="tat s" style="font-size:13px;fill:#8A5A00">${title}</text>
        ${g2b(x + 8, 80, 130, b1, c1)}${g2b(x + 8, 110, 130, b2, c2)}
        <rect x="${x + 6}" y="78" width="134" height="32" rx="9" fill="none" stroke="#F2B21B" stroke-width="3"><animate attributeName="y" values="78;108" dur="1s" calcMode="discrete" repeatCount="indefinite"/></rect></g>`;
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}><rect x="96" y="6" width="128" height="30" rx="15" fill="#1FA463"/><path d="M114 30V12" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><path d="M115 13c5-3 8 2 15 0v10c-7 2-10-3-15 0z" fill="#fff"/><text x="138" y="26" class="tat w s" style="font-size:13px">${L('Comença', 'Empieza')}</text></g>
        <g ${tA(.6, 'ta-fade')}><path d="M120 36 Q90 40 82 46" fill="none" stroke="#1FA463" stroke-width="2.6"/><path d="M200 36 Q230 40 238 46" fill="none" stroke="#1FA463" stroke-width="2.6"/></g>
        ${scr(8, L('Guió 1', 'Guion 1'), L('mou-te 3 passos', 'muévete 3 pasos'), L('rebota a la vora', 'rebota en el borde'), '#3D7BF4', '#3D7BF4', .5)}
        ${scr(166, L('Guió 2', 'Guion 2'), VS, L('espera 0,5 s', 'espera 0,5 s'), '#C447A8', '#1FA463', .9)}
        ${g2st(8, 152, 304, 56, 'g2seaP')}
        <g><animateTransform attributeName="transform" type="translate" values="40 176;280 176;40 176" dur="6s" repeatCount="indefinite"/><g><animateTransform attributeName="transform" type="scale" values="-1 1;1 1" dur="6s" calcMode="discrete" repeatCount="indefinite"/>${g2sw(g2a('peix', 0, 0, 0, 52), g2a('peix', 1, 0, 0, 52), 1)}</g></g>
        <g ${tA(1.6, 'ta-pop')}><rect x="104" y="140" width="112" height="22" rx="11" fill="#1FA463"/><text x="160" y="156" text-anchor="middle" class="tat w s" style="font-size:13px">${L('Tots dos alhora!', '¡Los dos a la vez!')}</text></g>`);
    },

    // com es fa un projecte: idea, pla, construir a trossos, provar i millorar (i tornar a provar)
    g2plan() {
      const steps = [['', L('La idea', 'La idea')], ['', L('El pla en paper', 'El plan en papel')], ['', L('Construeix a trossos', 'Construye a trozos')], ['', L('Prova-ho', 'Pruébalo')], ['', L('Millora-ho', 'Mejóralo')]];
      const cards = steps.map(([ic, t], i) => `<g ${tA(.2 + i * .45, 'ta-in')}><rect x="8" y="${8 + i * 41}" width="190" height="34" rx="11" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="28" cy="${25 + i * 41}" r="12" fill="${['#F2B21B', '#3D7BF4', '#C447A8', '#1FA463', '#E0533F'][i]}"/><text x="28" y="${30 + i * 41}" text-anchor="middle" class="tat w s" style="font-size:13px">${i + 1}</text><text x="48" y="${30 + i * 41}" class="tat s">${t}${ic}</text></g>`).join('');
      return tSvg(214, `${cards}
        <g ${tA(2.6, 'ta-pop')}><path d="M200 192 Q214 172 200 152" fill="none" stroke="#1FA463" stroke-width="3" stroke-dasharray="5 5" class="ta-dash"/><path d="M198 160 l2 -9 l8 4" fill="none" stroke="#1FA463" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
        ${g2st(214, 20, 98, 120, 'g2seaJ')}
        <g ${tA(1.3, 'ta-pop')}><g transform="translate(236 114)">${g2sw(g2a('alga', 0, 0, 0, 18), g2a('alga', 1, 0, 0, 18), 1.2)}</g></g>
        <g ${tA(1.8, 'ta-pop')}><g><animateTransform attributeName="transform" type="translate" values="240 54;288 54;240 54" dur="4s" repeatCount="indefinite"/><g><animateTransform attributeName="transform" type="scale" values="-1 1;1 1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>${g2a('peix', 0, 0, 0, 40)}</g></g></g>
        <g ${tA(2.4, 'ta-pop')}><g transform="translate(288 106)">${g2sw(g2a('medusa', 0, 0, 0, 30), g2a('medusa', 1, 0, 0, 30), 1)}</g></g>
        <text x="263" y="164" text-anchor="middle" class="tat s" ${tA(3, 'ta-in')}>${L('A poc a poc,', 'Poco a poco,')}</text><text x="263" y="184" text-anchor="middle" class="tat s" ${tA(3.2, 'ta-in')}>${L('peça a peça.', 'pieza a pieza.')}</text>`);
    }
  });
}
