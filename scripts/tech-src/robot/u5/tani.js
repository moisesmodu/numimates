/* Tech Robot · unitat 5 «Ordres noves» · animacions de teoria (funcions) */
Object.assign(TANI, {
  // una funció és una ordre nova feta d'altres ordres: «Para taula» = estovalles, plats, gots i coberts
  u5recipe() {
    const st = [L('Estovalles', 'Mantel'), L('Plats', 'Platos'), L('Gots', 'Vasos'), L('Coberts', 'Cubiertos')];
    return tSvg(214, `<g ${tA(.2)}><rect x="14" y="14" width="146" height="50" rx="14" fill="#8B5CF6" filter="url(#bwSh)"/><g transform="translate(24 27)" color="#fff"><svg width="24" height="24" viewBox="0 0 24 24">${BIT_ICO.call.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="56" y="45" class="tat w b">${L('Para taula', 'Pon la mesa')}</text></g>
      <path d="M87 68v12" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" ${tA(.6, 'ta-fade')}/><path d="M80 76l7 8l7 -8" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" ${tA(.6, 'ta-fade')}/>
      <rect x="14" y="88" width="146" height="118" rx="14" fill="#fff" stroke="#E4DAFB" stroke-width="2" filter="url(#bwSh)" ${tA(.7, 'ta-fade')}/>
      ${st.map((s, i) => `<g ${tA(.9 + i * .5, 'ta-in')}><circle cx="36" cy="${110 + i * 27}" r="10" fill="#8B5CF6"/><text x="36" y="${115 + i * 27}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="54" y="${115 + i * 27}" class="tat s">${s}</text></g>`).join('')}
      <rect x="176" y="150" width="10" height="46" rx="3" fill="#8A5A33"/><rect x="298" y="150" width="10" height="46" rx="3" fill="#8A5A33"/>
      <rect x="170" y="134" width="144" height="20" rx="6" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2"/>
      <g ${tA(.9, 'ta-fade')}><path d="M174 136h136l-6 16h-124z" fill="#FFE1E1" stroke="#EF5A5A" stroke-width="2" stroke-linejoin="round"/><path d="M196 137v14M222 137v14M248 137v14M274 137v14" stroke="#F7A9A9" stroke-width="3"/></g>
      ${[206, 278].map(x => `<g ${tA(1.4)}><ellipse cx="${x}" cy="130" rx="22" ry="8" fill="#fff" stroke="#AEB8D2" stroke-width="2"/><ellipse cx="${x}" cy="129" rx="13" ry="4.5" fill="#EEF2FB"/></g>`).join('')}
      ${[232, 304].map(x => `<g ${tA(1.9)}><path d="M${x - 7} 100h14l-2 26h-10z" fill="#CFEFFF" stroke="#4B9FD5" stroke-width="2" stroke-linejoin="round"/><path d="M${x - 5} 112h10" stroke="#7CC6F2" stroke-width="3"/></g>`).join('')}
      ${[180, 252].map(x => `<g ${tA(2.4)}><path d="M${x} 110v22M${x - 3} 110v8M${x + 3} 110v8M${x - 3} 118h6" stroke="#7A8299" stroke-width="2.4" stroke-linecap="round"/></g>`).join('')}
      <g ${tA(2.9)}><circle cx="296" cy="72" r="15" fill="#3CC47C"/><path d="M289 72l5 5l9 -10" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(2.9, 'ta-fade')}><text x="236" y="80" text-anchor="middle" class="tat s">${L('Fet!', '¡Hecho!')}</text></g>
      <g ${tA(.3, 'ta-fade')}><text x="242" y="40" text-anchor="middle" class="tat s">${L('Una ordre…', 'Una orden…')}</text></g>
      <g ${tA(1.2, 'ta-fade')}><text x="242" y="208" text-anchor="middle" class="tat s">${L('…molts passos', '…muchos pasos')}</text></g>`);
  },
  // posar nom a un grup de blocs: quatre blocs es tanquen dins d'una funció i queden com un sol bloc
  u5pack() {
    const ks = ['fwd', 'left', 'fwd', 'right'];
    const chip = (k, x, y, t) => `<g ${tA(t)}><rect x="${x}" y="${y}" width="50" height="50" rx="12" fill="#3D7BF4" filter="url(#bwSh)"/><g transform="translate(${x + 10} ${y + 10})" color="#fff"><svg width="30" height="30" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g></g>`;
    return tSvg(214, `<rect x="30" y="10" width="260" height="74" rx="18" fill="#8B5CF6" fill-opacity=".1" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="9 7" ${tA(1.4, 'ta-fade')}/>
      ${ks.map((k, i) => chip(k, 44 + i * 60, 22, .2 + i * .3)).join('')}
      <g ${tA(1.6)}><rect x="236" y="0" width="68" height="24" rx="12" fill="#8B5CF6"/><text x="270" y="17" text-anchor="middle" class="tat w s">${L('escala', 'escalera')}</text></g>
      <g ${tA(2.1, 'ta-fade')}><path d="M160 94v18" stroke="#8B5CF6" stroke-width="5" stroke-linecap="round"/><path d="M150 106l10 11l10 -11" fill="none" stroke="#8B5CF6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(2.5)}><rect x="58" y="126" width="204" height="48" rx="13" fill="#8B5CF6" filter="url(#bwSh)"/><rect x="58" y="126" width="204" height="10" rx="5" fill="#fff" opacity=".16"/><g transform="translate(72 138)" color="#fff"><svg width="26" height="26" viewBox="0 0 24 24">${BIT_ICO.call.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="108" y="157" class="tat w b">${L('Funció escala', 'Función escalera')}</text></g>
      <g ${tA(3, 'ta-fade')}><text x="160" y="202" text-anchor="middle" class="tat s">${L('4 blocs → 1 bloc amb nom', '4 bloques → 1 bloque con nombre')}</text></g>`);
  },
  // cridar una funció: en Bit va a la funció, en fa tots els blocs i torna on era
  u5call() {
    const ico = k => BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '');
    const chip = (k, x, y, col = '#3D7BF4') => `<rect x="${x}" y="${y}" width="46" height="44" rx="11" fill="${col}"/><g transform="translate(${x + 10} ${y + 9})" color="#fff"><svg width="26" height="26" viewBox="0 0 24 24">${ico(k)}</svg></g>`;
    const xs = [16, 72, 16, 72, 128, 184, 212, 212], ys = [38, 38, 132, 132, 132, 132, 38, 38], ws = [46, 130, 46, 46, 46, 46, 46, 46];
    const kt = '0;.13;.27;.4;.53;.66;.8;1';
    return tSvg(220, `<text x="16" y="22" class="tat s b">${L('Programa', 'Programa')}</text>
      <rect x="8" y="30" width="262" height="60" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
      ${chip('fwd', 16, 38)}<rect x="72" y="38" width="130" height="44" rx="11" fill="#8B5CF6"/><g transform="translate(82 47)" color="#fff"><svg width="26" height="26" viewBox="0 0 24 24">${ico('call')}</svg></g><text x="114" y="66" class="tat w s">${L('escala', 'escalera')}</text>${chip('fwd', 212, 38)}
      <text x="16" y="120" class="tat s b" style="fill:#6D3FD8">${L('Funció escala', 'Función escalera')}</text>
      <rect x="8" y="124" width="234" height="60" rx="14" fill="#F3EEFF" stroke="#8B5CF6" stroke-width="2.5"/>
      <path d="M140 86Q150 104 150 126" fill="none" stroke="#8B5CF6" stroke-width="3.5" stroke-dasharray="6 5" class="ta-dash"/><text x="158" y="112" class="tat s" style="fill:#6D3FD8">${L('va', 'va')}</text>
      <path d="M210 128Q232 108 234 86" fill="none" stroke="#1FA463" stroke-width="3.5" stroke-dasharray="6 5" class="ta-dash"/><text x="242" y="112" class="tat s" style="fill:#14804A">${L('torna', 'vuelve')}</text>
      ${chip('fwd', 16, 132)}${chip('left', 72, 132)}${chip('fwd', 128, 132)}${chip('right', 184, 132)}
      <rect x="16" y="38" width="46" height="44" rx="12" fill="none" stroke="#FFC531" stroke-width="5"><animate attributeName="x" values="${xs.join(';')}" keyTimes="${kt}" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/><animate attributeName="y" values="${ys.join(';')}" keyTimes="${kt}" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/><animate attributeName="width" values="${ws.join(';')}" keyTimes="${kt}" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></rect>
      ${tBitMini(286, 192, 2, .95)}
      <text x="160" y="212" text-anchor="middle" class="tat s">${L('Va a la funció, la fa i torna', 'Va a la función, la hace y vuelve')}</text>`);
  },
  // una funció dins d'un bucle: Repeteix 3 vegades «escala» i en Bit puja tres esglaons
  u5loopfn() {
    const kt = '0;.16;.3;.42;.56;.68;.82;1';
    return tSvg(220, `<g ${tA(.2, 'ta-in')}><rect x="8" y="44" width="180" height="112" rx="16" fill="#1FA463" filter="url(#bwSh)"/><g transform="translate(18 52)" color="#fff"><svg width="22" height="22" viewBox="0 0 24 24">${BIT_ICO.rep.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="46" y="69" class="tat w s">${L('Repeteix 3 vegades', 'Repite 3 veces')}</text>
        <rect x="18" y="80" width="160" height="62" rx="12" fill="#E7F7EE"/></g>
      <g ${tA(.6)}><rect x="30" y="91" width="136" height="40" rx="11" fill="#8B5CF6"/><g transform="translate(40 99)" color="#fff"><svg width="24" height="24" viewBox="0 0 24 24">${BIT_ICO.call.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="70" y="117" class="tat w s">${L('escala', 'escalera')}</text></g>
      ${[0, 1, 2].map(i => `<g ${tA(1.7 + i * 1.35)}><circle cx="${60 + i * 38}" cy="182" r="15" fill="#8B5CF6"/><text x="${60 + i * 38}" y="188" text-anchor="middle" class="tat w b">${i + 1}</text></g>`).join('')}
      <path d="M196 204H226V164H256V124H286V84H316V204Z" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M196 204H226V164H256V124H286V84H316" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" pathLength="1" ${tA(.9, 'ta-draw')}/>
      <g transform="translate(312 84)"><path d="M0 0V-34" stroke="#5B4636" stroke-width="3.5"/><path d="M1 -34q10 -3 18 3q-8 5 -18 6z" fill="#EF5A5A"/></g>
      <g><animateTransform attributeName="transform" type="translate" values="210 202;210 202;241 162;241 162;271 122;271 122;299 82;299 82" keyTimes="${kt}" dur="5.5s" repeatCount="indefinite"/>${tBitMini(0, 0, 1, .62)}</g>`);
  },
  // un error dins de la funció surt cada vegada que la crides… i s'arregla en un sol lloc
  u5bugfn() {
    const ico = k => BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '');
    const chip = (k, x, col, extra = '') => `<g ${extra}><rect x="${x}" y="36" width="44" height="34" rx="9" fill="${col}"/><g transform="translate(${x + 11} ${41})" color="#fff"><svg width="22" height="22" viewBox="0 0 24 24">${ico(k)}</svg></g></g>`;
    const panel = (x, i) => `<g transform="translate(${x} 100)"><rect width="92" height="84" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><path d="M14 70H34V50H54V30H76" fill="none" stroke="#E2BE76" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
      <g ${tA(.8 + i * .4)}><circle cx="62" cy="58" r="13" fill="#EF5A5A"/><path d="M56 52l12 12M68 52l-12 12" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/></g>
      <g ${tA(3 + i * .3)}><circle cx="62" cy="58" r="14" fill="#3CC47C"/><path d="M55 58l5 5l9 -10" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      <text x="22" y="22" class="tat s">${i + 1}a</text></g>`;
    return tSvg(220, `<rect x="10" y="8" width="300" height="72" rx="16" fill="#F3EEFF" stroke="#8B5CF6" stroke-width="2.5"/>
      <text x="22" y="28" class="tat s b" style="fill:#6D3FD8">${L('Funció escala', 'Función escalera')}</text>
      ${chip('fwd', 22, '#3D7BF4')}${chip('right', 72, '#EF5A5A')}${chip('left', 72, '#3D7BF4', tA(2.6))}${chip('fwd', 122, '#3D7BF4')}${chip('right', 172, '#3D7BF4')}
      <g ${tA(.5, 'ta-wob')}><rect x="232" y="38" width="66" height="30" rx="15" fill="#EF5A5A"/><text x="265" y="58" text-anchor="middle" class="tat w s">bug!</text></g>
      <g ${tA(2.3, 'ta-wob')}><g transform="translate(104 86) rotate(-25) scale(.8)"><rect x="-4" y="-2" width="8" height="34" rx="3" fill="#8C93A6"/><path d="M-11 -12a11 11 0 1 0 22 0l-6 0l0 6l-10 0l0 -6z" fill="#8C93A6"/></g></g>
      ${[14, 114, 214].map(panel).join('')}
      <text x="160" y="210" text-anchor="middle" class="tat s" opacity="0"><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.14;.46;.5;1" dur="5.5s" repeatCount="indefinite"/>${L("L'error surt les 3 vegades", 'El error sale las 3 veces')}</text>
      <text x="160" y="210" text-anchor="middle" class="tat s" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.52;.56;.94;1" dur="5.5s" repeatCount="indefinite"/>${L("L'arregles un cop i van bé les 3!", '¡Lo arreglas una vez y van bien las 3!')}</text>`);
  },
  // pocs blocs: el mateix camí amb 12 blocs o amb una funció (6 blocs)
  u5short() {
    const bar = (x, y, w, col, t) => `<rect x="${x}" y="${y}" width="${w}" height="10" rx="5" fill="${col}" ${tA(t, 'ta-in')}/>`;
    const left = Array.from({ length: 12 }, (_, i) => bar(26, 40 + i * 13, 96, '#3D7BF4', .2 + i * .1)).join('');
    const right = bar(200, 40, 96, '#1FA463', 1.8) + bar(214, 53, 82, '#8B5CF6', 1.9) + `<rect x="192" y="76" width="112" height="70" rx="12" fill="#F3EEFF" stroke="#8B5CF6" stroke-width="2" ${tA(2.1, 'ta-fade')}/>` + [0, 1, 2, 3].map(i => bar(204, 86 + i * 14, 88, '#3D7BF4', 2.2 + i * .15)).join('');
    return tSvg(214, `<text x="74" y="26" text-anchor="middle" class="tat s b">${L('Sense funció', 'Sin función')}</text><text x="248" y="26" text-anchor="middle" class="tat s b" style="fill:#6D3FD8">${L('Amb funció', 'Con función')}</text>
      <rect x="16" y="32" width="116" height="164" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${left}
      <rect x="186" y="32" width="124" height="122" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${right}
      <g ${tA(1.5)}><circle cx="159" cy="110" r="17" fill="#FFC531"/><path d="M152 110h12M159 103l7 7l-7 7" fill="none" stroke="#14204A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(1.4)}><text x="74" y="212" text-anchor="middle" class="tat b">${L('12 blocs', '12 bloques')}</text></g>
      <g ${tA(2.9)}><rect x="200" y="164" width="96" height="34" rx="17" fill="#3CC47C"/><text x="248" y="187" text-anchor="middle" class="tat w b">${L('6 blocs', '6 bloques')}</text></g>`);
  },
  // dues funcions: «puja» i «baixa», combinades en l'ordre que calgui
  u5two() {
    const seq = ['A', 'B', 'A', 'A', 'B'], nm = { A: L('puja', 'sube'), B: L('baixa', 'baja') }, col = { A: '#8B5CF6', B: '#E5489A' };
    const card = (x, f, d, t) => `<g ${tA(t)}><rect x="${x}" y="10" width="146" height="56" rx="14" fill="${col[f]}" filter="url(#bwSh)"/><path d="${d}" transform="translate(${x + 12} 20)" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><text x="${x + 54}" y="34" class="tat w s">${L('Funció', 'Función')} ${f}</text><text x="${x + 54}" y="54" class="tat w b">${nm[f]}</text></g>`;
    let px = 22, py = 192; const pts = [[px, py]];
    seq.forEach(f => { px += 54; py += f === 'A' ? -32 : 32; pts.push([px, py]); });
    return tSvg(220, `${card(10, 'A', 'M2 34H14V22H26V10H36', .2)}${card(164, 'B', 'M2 8H14V20H26V32H36', .6)}
      ${seq.map((f, i) => `<g ${tA(1.1 + i * .3)}><rect x="${12 + i * 60}" y="80" width="56" height="30" rx="9" fill="${col[f]}"/><text x="${40 + i * 60}" y="100" text-anchor="middle" class="tat w s">${nm[f]}</text></g>`).join('')}
      <path d="M${pts.map(p => p.join(' ')).join(' L')}" fill="none" stroke="#E2BE76" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>
      ${seq.map((f, i) => `<path d="M${pts[i].join(' ')} L${pts[i + 1].join(' ')}" fill="none" stroke="${col[f]}" stroke-width="5" stroke-linecap="round" pathLength="1" ${tA(2.7 + i * .2, 'ta-draw')}/>`).join('')}
      ${pts.slice(1).map(([x, y], i) => `<g ${tA(2.8 + i * .2)}><circle cx="${x}" cy="${y}" r="8" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2"/></g>`).join('')}
      <g ${tA(3.8)}>${tBitMini(pts[5][0], pts[5][1] - 8, 1, .5)}</g>`);
  },
  // planificar amb funcions: mira què es repeteix, posa-hi nom i el programa es llegeix com una història
  u5plan() {
    const box = (x, y) => `<g transform="translate(${x} ${y}) scale(.72)"><path d="M-15 -26h30l0 26h-30z" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2.4" stroke-linejoin="round"/><path d="M-15 -26l5 -6h30l-5 6z" fill="#EDBB7A" stroke="#7A4A1E" stroke-width="2.4" stroke-linejoin="round"/><path d="M0 -26V0M-15 -13H15" stroke="#F6DCA8" stroke-width="3.2"/></g>`;
    const home = (x, y) => `<g transform="translate(${x} ${y}) scale(.7)"><rect x="-19" y="-30" width="38" height="30" rx="3" fill="url(#bwWall)" stroke="#8E6A3A" stroke-width="2.4"/><path d="M-24 -28L0 -48L24 -28Z" fill="url(#bwRoof)" stroke="#8E2A22" stroke-width="2.4" stroke-linejoin="round"/><rect x="-5" y="-17" width="10" height="17" rx="2" fill="#B07A3E"/></g>`;
    const row = (i) => { const y = 54 + i * 56; return `<g ${tA(.2 + i * .35, 'ta-in')}><rect x="10" y="${y - 44}" width="150" height="50" rx="13" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="22" y="${y - 12}" class="tat b" style="fill:#8B5CF6">${i + 1}</text>${box(52, y - 6)}<path d="M72 ${y - 18}h34" stroke="#3D7BF4" stroke-width="3.5" stroke-dasharray="5 5" stroke-linecap="round"/><path d="M102 ${y - 24}l7 6l-7 6" fill="none" stroke="#3D7BF4" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>${home(132, y - 4)}</g>`; };
    const prog = [['call', L('porta-la', 'llévala')], ['right', L('Gira', 'Gira')], ['call', L('porta-la', 'llévala')], ['right', L('Gira', 'Gira')], ['call', L('porta-la', 'llévala')]];
    return tSvg(220, `${[0, 1, 2].map(row).join('')}
      <path d="M166 12q10 0 10 12v54q0 10 8 10q-8 0 -8 10v54q0 12 -10 12" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" ${tA(1.4, 'ta-fade')}/>
      ${prog.map(([k, t], i) => `<g ${tA(1.9 + i * .3)}><rect x="${k === 'call' ? 190 : 204}" y="${12 + i * 34}" width="${k === 'call' ? 122 : 86}" height="28" rx="9" fill="${k === 'call' ? '#8B5CF6' : '#3D7BF4'}"/><g transform="translate(${k === 'call' ? 196 : 210} ${16 + i * 34})" color="#fff"><svg width="20" height="20" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="${k === 'call' ? 222 : 236}" y="${31 + i * 34}" class="tat w s">${t}</text></g>`).join('')}
      <g ${tA(3.4, 'ta-fade')}><text x="160" y="212" text-anchor="middle" class="tat s">${L('Què es repeteix? Posa-hi nom!', '¿Qué se repite? ¡Ponle nombre!')}</text></g>`);
  },
  // la funció comença on és en Bit: la mateixa «porta-la» cap a la dreta o cap avall
  u5where() {
    const box = (x, y) => `<g transform="translate(${x} ${y}) scale(.62)"><path d="M-15 -26h30l0 26h-30z" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2.4" stroke-linejoin="round"/><path d="M-15 -26l5 -6h30l-5 6z" fill="#EDBB7A" stroke="#7A4A1E" stroke-width="2.4" stroke-linejoin="round"/><path d="M0 -26V0M-15 -13H15" stroke="#F6DCA8" stroke-width="3.2"/></g>`;
    const home = (x, y) => `<g transform="translate(${x} ${y}) scale(.6)"><rect x="-19" y="-30" width="38" height="30" rx="3" fill="url(#bwWall)" stroke="#8E6A3A" stroke-width="2.4"/><path d="M-24 -28L0 -48L24 -28Z" fill="url(#bwRoof)" stroke="#8E2A22" stroke-width="2.4" stroke-linejoin="round"/><rect x="-5" y="-17" width="10" height="17" rx="2" fill="#B07A3E"/></g>`;
    const panel = (x0, down, t) => { const C = 32, gx = x0 + 11, gy = 12, cell = (i) => down ? [gx + C, gy + i * C] : [gx + i * C, gy + C * 1.5], pts = [0, 1, 2, 3].map(cell);
      return `<g ${tA(t, 'ta-in')}><rect x="${x0}" y="0" width="150" height="204" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <rect x="${gx}" y="${gy}" width="${4 * C}" height="${4 * C}" rx="10" fill="url(#bwGrass)"/>
        ${pts.map(([px, py]) => `<rect x="${px + 2}" y="${py + 2}" width="${C - 4}" height="${C - 4}" rx="8" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.5"/>`).join('')}
        <path d="M${pts[0][0] + C / 2} ${pts[0][1] + C / 2} L${pts[3][0] + C / 2} ${pts[3][1] + C / 2}" stroke="#8B5CF6" stroke-width="4" stroke-dasharray="6 6" class="ta-dash"/>
        ${box(pts[1][0] + C / 2, pts[1][1] + C - 6)}${home(pts[3][0] + C / 2, pts[3][1] + C - 4)}
        ${tBitMini(pts[0][0] + C / 2, pts[0][1] + C - 4, down ? 2 : 1, .5)}
        <text x="${x0 + 75}" y="${gy + 4 * C + 18}" text-anchor="middle" class="tat s">${down ? L('mira avall ↓', 'mira abajo ↓') : L('mira a la dreta →', 'mira a la derecha →')}</text></g>`; };
    return tSvg(230, `${panel(6, false, .2)}${panel(164, true, .8)}
      ${[6, 164].map((x, i) => `<g ${tA(1.5 + i * .4)}><rect x="${x + 14}" y="166" width="122" height="30" rx="10" fill="#8B5CF6"/><g transform="translate(${x + 20} 170)" color="#fff"><svg width="22" height="22" viewBox="0 0 24 24">${BIT_ICO.call.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="${x + 48}" y="186" class="tat w s">${L('porta-la', 'llévala')}</text></g>`).join('')}
      <g ${tA(2.4, 'ta-fade')}><text x="160" y="224" text-anchor="middle" class="tat s">${L('Mateixa funció, des d\'on és en Bit', 'Misma función, desde donde está Bit')}</text></g>`);
  }
});
