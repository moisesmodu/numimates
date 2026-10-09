/* Tech 3D · Nivell 2 · unitat 7 «Enginyeria i fabricació» · animacions de teoria (TANI). Dibuixos propis de Numi.
   Claus amb el prefix de la sessió (p71…, p72…, p73…, p74…). Les animacions pròpies (keyframes p7…) tenen com a estat de
   repòs la imatge final: amb «reduir moviment» es veu el muntatge acabat. */
Object.assign(TANI, (() => {
  const BG = '<rect width="320" height="200" rx="20" fill="#F1F2FB"/>';
  const chip = (x, y, w, txt, col = '#14204A', t = 0) => `<g ${tA(t, 'ta-in')}><rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="13" fill="#fff" filter="url(#bwSh)"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat s" fill="${col}">${txt}</text></g>`;
  return {
    // eix i forat, pestanya i ranura: la peça de dalt baixa i encaixa a la de baix
    p71fit() {
      return tSvg(200, `<style>.p71dn{animation:p71dn 4.6s ease-in-out infinite}@keyframes p71dn{0%,14%{transform:translateY(-36px)}46%,84%{transform:none}100%{transform:translateY(-36px)}}</style>${BG}
        <text x="82" y="30" text-anchor="middle" class="tat b">${L('Eix i forat', 'Eje y agujero')}</text><text x="240" y="30" text-anchor="middle" class="tat b">${L('Pestanya i ranura', 'Pestaña y ranura')}</text>
        <ellipse cx="82" cy="172" rx="66" ry="7" fill="#14204A" opacity=".1"/><ellipse cx="240" cy="172" rx="66" ry="7" fill="#14204A" opacity=".1"/>
        <rect x="22" y="110" width="46" height="58" rx="5" fill="#7C5CFF"/><rect x="96" y="110" width="46" height="58" rx="5" fill="#7C5CFF"/><rect x="22" y="110" width="120" height="8" rx="4" fill="#9C84FF" opacity=".7"/>
        <rect x="68" y="110" width="28" height="58" fill="#E4DCFF"/>
        <g class="p71dn"><rect x="71" y="52" width="22" height="84" rx="4" fill="#2FB36D"/><rect x="71" y="52" width="8" height="84" rx="3" fill="#6FD69B"/></g>
        <rect x="180" y="118" width="120" height="50" rx="5" fill="#7C5CFF"/><rect x="226" y="118" width="28" height="30" fill="#E4DCFF"/>
        <g class="p71dn"><rect x="180" y="68" width="120" height="14" rx="4" fill="#FF8A3D"/><rect x="229" y="82" width="22" height="30" rx="3" fill="#FF8A3D"/><rect x="229" y="82" width="7" height="30" fill="#FFB47F"/></g>
        ${chip(40, 92, 56, L('eix', 'eje'), '#1F8A4C', 1.2)}${chip(120, 92, 66, L('forat', 'agujero'), '#5B3FD6', 1.6)}
        ${chip(198, 104, 70, L('pestanya', 'pestaña'), '#C25E14', 1.2)}${chip(282, 104, 62, L('ranura', 'ranura'), '#5B3FD6', 1.6)}
        <g ${tA(2.6, 'ta-in')}><text x="160" y="192" text-anchor="middle" class="tat s">${L('Les dues peces es dissenyen juntes', 'Las dos piezas se diseñan juntas')}</text></g>`);
    },
    // per què el forat surt més petit: el fil s'aixafa, s'encongeix i el cercle és un polígon
    p72why() {
      const poly = (cx, cy, r, n) => Array.from({ length: n }, (_, k) => { const a = (k + .5) * 2 * Math.PI / n; return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(' ');
      return tSvg(200, `${BG}
        <text x="84" y="26" text-anchor="middle" class="tat s">${L('vist de dalt', 'visto desde arriba')}</text><text x="236" y="26" text-anchor="middle" class="tat s">${L('el fil, de costat', 'el hilo, de lado')}</text>
        <rect x="20" y="40" width="128" height="128" rx="14" fill="#7C5CFF"/>
        <circle cx="84" cy="104" r="40" fill="#5B3FD6" opacity=".55"/>
        <g ${tA(.6, 'ta-fade')}><polygon points="${poly(84, 104, 33, 10)}" fill="#E4DCFF"/></g>
        <g ${tA(.2, 'ta-fade')}><circle cx="84" cy="104" r="38" fill="none" stroke="#E8453C" stroke-width="2.5" stroke-dasharray="6 5"/></g>
        ${chip(84, 186, 150, L('disseny ⟶ imprès: més petit', 'diseño ⟶ impreso: más pequeño'), '#C0332B', 1.4)}
        <g ${tA(1, 'ta-pop')}><path d="M214 44h44l-10 26h-24z" fill="#9AA3B5"/><rect x="230" y="70" width="12" height="10" fill="#6B7487"/></g>
        <g ${tA(1.8, 'ta-pop')}><ellipse cx="236" cy="92" rx="22" ry="8" fill="#FF8A3D"/></g>
        <g ${tA(2.1, 'ta-pop')}><ellipse cx="236" cy="109" rx="22" ry="8" fill="#F57C2A"/></g>
        <g ${tA(2.4, 'ta-pop')}><ellipse cx="236" cy="126" rx="22" ry="8" fill="#E86E1E"/></g>
        <g ${tA(2.8, 'ta-in')}><path d="M212 92h-14M260 92h14" stroke="#14204A" stroke-width="2.4" stroke-linecap="round"/><path d="M200 88l-4 4 4 4M272 88l4 4-4 4" fill="none" stroke="#14204A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(3.2, 'ta-in')}><text x="236" y="152" text-anchor="middle" class="tat s">${L("s'aixafa i s'eixampla", 'se aplasta y se ensancha')}</text><text x="236" y="170" text-anchor="middle" class="tat s">${L("i s'encongeix en refredar-se", 'y encoge al enfriarse')}</text></g>`);
    },
    // la tolerància: l'espai a cada costat de l'eix (dibuix exagerat)
    p72tol() {
      return tSvg(200, `${BG}
        <circle cx="102" cy="102" r="70" fill="#7C5CFF"/><circle cx="102" cy="102" r="56" fill="#E4DCFF"/>
        <g ${tA(.4, 'ta-pop')}><circle cx="102" cy="102" r="44" fill="#2FB36D"/><circle cx="90" cy="88" r="12" fill="#fff" opacity=".35"/></g>
        <g ${tA(1.2, 'ta-in')}><path d="M60 102h84" stroke="#fff" stroke-width="2.4"/><path d="M66 97l-6 5 6 5M138 97l6 5-6 5" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="102" y="96" text-anchor="middle" class="tat b w">d</text></g>
        <g ${tA(2, 'ta-pop')}><path d="M46 102h12M146 102h12" stroke="#E8453C" stroke-width="4" stroke-linecap="round"/><text x="52" y="128" text-anchor="middle" class="tat s" fill="#C0332B">tol</text><text x="152" y="128" text-anchor="middle" class="tat s" fill="#C0332B">tol</text></g>
        <g ${tA(2.8, 'ta-in')}><rect x="188" y="52" width="122" height="62" rx="14" fill="#fff" filter="url(#bwSh)"/><text x="249" y="76" text-anchor="middle" class="tat s">${L('forat', 'agujero')} =</text><text x="249" y="100" text-anchor="middle" class="tat b" fill="#5B3FD6">d + 2 × tol</text></g>
        <g ${tA(3.6, 'ta-in')}><text x="249" y="138" text-anchor="middle" class="tat s">8 + 2 × 0,3</text><text x="249" y="158" text-anchor="middle" class="tat b">= 8,6 mm</text></g>
        <g ${tA(4, 'ta-fade')}><text x="102" y="192" text-anchor="middle" class="tat s" fill="#6B7487">${L('(dibuix exagerat)', '(dibujo exagerado)')}</text></g>`);
    },
    // tres ajustos: a pressió, lliscant i lliure (la de la dreta gira)
    p72fits() {
      const pair = (cx, r, t) => `<g ${tA(t, 'ta-pop')}><circle cx="${cx}" cy="86" r="40" fill="#7C5CFF"/><circle cx="${cx}" cy="86" r="31" fill="#E4DCFF"/><circle cx="${cx}" cy="86" r="${r}" fill="#2FB36D"/></g>`;
      return tSvg(200, `<style>.p72rot{transform-box:fill-box;transform-origin:50% 50%;animation:p72rot 3s linear infinite}@keyframes p72rot{to{transform:rotate(360deg)}}.p72sl{animation:p72sl 1.4s ease-in-out infinite}@keyframes p72sl{50%{transform:translateY(5px)}}</style>${BG}
        ${pair(58, 30.4, .2)}${pair(160, 27.5, .7)}${pair(262, 23.5, 1.2)}
        <g ${tA(.5, 'ta-in')}><rect x="48" y="78" width="20" height="16" rx="3" fill="#fff"/><path d="M52 78v-5a6 6 0 0 1 12 0v5" fill="none" stroke="#fff" stroke-width="3"/></g>
        <g class="p72sl"><path d="M160 70v32M152 78l8-8 8 8M152 94l8 8 8-8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g class="p72rot"><circle cx="262" cy="86" r="23.5" fill="none"/><path d="M262 66v40" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="262" cy="86" r="5" fill="#fff"/></g>
        <g ${tA(1.8, 'ta-in')}><text x="58" y="148" text-anchor="middle" class="tat s">${L('a pressió', 'a presión')}</text><text x="58" y="168" text-anchor="middle" class="tat b" fill="#5B3FD6">~0,1 mm</text></g>
        <g ${tA(2.2, 'ta-in')}><text x="160" y="148" text-anchor="middle" class="tat s">${L('llisca', 'desliza')}</text><text x="160" y="168" text-anchor="middle" class="tat b" fill="#5B3FD6">0,2–0,3 mm</text></g>
        <g ${tA(2.6, 'ta-in')}><text x="262" y="148" text-anchor="middle" class="tat s">${L('gira lliure', 'gira libre')}</text><text x="262" y="168" text-anchor="middle" class="tat b" fill="#5B3FD6">~0,4 mm</text></g>
        <g ${tA(3.2, 'ta-fade')}><text x="160" y="192" text-anchor="middle" class="tat s" fill="#6B7487">${L('tolerància a cada costat · valors orientatius', 'tolerancia a cada lado · valores orientativos')}</text></g>`);
    },
    // capa a capa: vertical, a 45° (cada capa es recolza) i a 70° (les capes cauen)
    p73layers() {
      const lay = (x, y, t, col, rot = 0) => `<g ${tA(t, 'ta-pop')}><rect x="${x}" y="${y}" width="40" height="11" rx="5.5" fill="${col}" ${rot ? `transform="rotate(${rot} ${x} ${y + 5})"` : ''}/></g>`;
      let a = '', b = '', c = '';
      for (let k = 0; k < 7; k++) { const y = 150 - k * 13; a += lay(30, y, .2 + k * .3, '#7C5CFF'); b += lay(122 + k * 11, y, .2 + k * .3, '#2FB36D'); }
      for (let k = 0; k < 5; k++) { const y = 150 - k * 13; c += lay(214 + k * 22, y, .2 + k * .3, k < 3 ? '#FF8A3D' : '#E8453C', k < 3 ? 0 : 18 + (k - 3) * 10); }
      return tSvg(200, `${BG}<rect x="16" y="161" width="292" height="8" rx="4" fill="#C9D3EE"/>
        ${a}${b}${c}
        <g ${tA(2.6, 'ta-in')}><text x="50" y="40" text-anchor="middle" class="tat b">0°</text><text x="50" y="186" text-anchor="middle" class="tat s" fill="#1F8A4C">✓ ${L('recolzada', 'apoyada')}</text></g>
        <g ${tA(2.9, 'ta-in')}><text x="178" y="40" text-anchor="middle" class="tat b">45°</text><text x="166" y="186" text-anchor="middle" class="tat s" fill="#1F8A4C">✓ ${L('es recolza', 'se apoya')}</text></g>
        <g ${tA(3.2, 'ta-in')}><text x="282" y="40" text-anchor="middle" class="tat b">70°</text><text x="266" y="186" text-anchor="middle" class="tat s" fill="#C0332B">✗ ${L('cau', 'cae')}</text></g>
        <g ${tA(3.6, 'ta-pop')}><path d="M296 96q8 14 2 30" fill="none" stroke="#E8453C" stroke-width="3" stroke-dasharray="4 4"/></g>`);
    },
    // la regla dels 45°: la paleta gira; en verd s'imprimeix sola, en vermell necessita suport
    p73rule() {
      const R = 120, cx = 36, cy = 172, pt = a => [cx + R * Math.sin(a * Math.PI / 180), cy - R * Math.cos(a * Math.PI / 180)].map(v => v.toFixed(1)).join(' ');
      return tSvg(200, `<style>.p73arm{transform-box:view-box;transform-origin:${cx}px ${cy}px;animation:p73arm 5s ease-in-out infinite}@keyframes p73arm{0%,10%{transform:rotate(5deg)}45%,55%{transform:rotate(40deg)}85%,100%{transform:rotate(78deg)}}</style>${BG}
        <path d="M${cx} ${cy}L${pt(0)}A${R} ${R} 0 0 1 ${pt(45)}Z" fill="#2FB36D" opacity=".22"/><path d="M${cx} ${cy}L${pt(45)}A${R} ${R} 0 0 1 ${pt(90)}Z" fill="#E8453C" opacity=".18"/>
        <path d="M${cx} ${cy}L${pt(45)}" stroke="#14204A" stroke-width="2" stroke-dasharray="5 5"/>
        <g class="p73arm"><path d="M${cx} ${cy}V${cy - R + 6}" stroke="#14204A" stroke-width="7" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="8" fill="#14204A"/></g>
        <text x="${cx + 8}" y="${cy - R - 6}" class="tat s">0°</text><text x="${(+pt(45).split(' ')[0] + 6).toFixed(0)}" y="${(+pt(45).split(' ')[1] - 4).toFixed(0)}" class="tat b">45°</text><text x="${cx + R - 30}" y="${cy - 6}" class="tat s">90°</text>
        <g ${tA(1, 'ta-pop')}><path d="M232 150V108M232 108L208 70M232 108L256 70" stroke="#2FB36D" stroke-width="12" stroke-linecap="round" fill="none"/><text x="276" y="96" class="tat b" fill="#1F8A4C">✓</text></g>
        <g ${tA(2, 'ta-pop')}><path d="M232 52V34M206 34H258" stroke="#E8453C" stroke-width="10" stroke-linecap="round" fill="none" transform="translate(0 0)"/><text x="276" y="42" class="tat b" fill="#C0332B">✗</text></g>
        <g ${tA(2.8, 'ta-in')}><text x="232" y="180" text-anchor="middle" class="tat s">${L('Y sí, T no', 'Y sí, T no')}</text></g>`);
    },
    // la frontissa desmuntable: la peça B baixa sobre el passador d'A i després gira (vista de dalt)
    p74hinge() {
      return tSvg(200, `<style>.p74dn{animation:p74dn 5.2s ease-in-out infinite}@keyframes p74dn{0%,10%{transform:translateY(-26px)}35%,100%{transform:none}}.p74op{transform-box:view-box;transform-origin:252px 118px;animation:p74op 5.2s ease-in-out infinite}@keyframes p74op{0%,40%{transform:none}65%,85%{transform:rotate(-120deg)}100%{transform:none}}</style>${BG}
        <text x="90" y="24" text-anchor="middle" class="tat s">${L('de costat', 'de lado')}</text><text x="252" y="24" text-anchor="middle" class="tat s">${L('des de dalt', 'desde arriba')}</text>
        <ellipse cx="90" cy="176" rx="80" ry="6" fill="#14204A" opacity=".1"/>
        <rect x="22" y="112" width="66" height="60" rx="4" fill="#7C5CFF"/><rect x="88" y="112" width="30" height="60" rx="5" fill="#9C84FF"/><rect x="96" y="88" width="14" height="24" rx="3" fill="#5B3FD6"/>
        <text x="55" y="148" text-anchor="middle" class="tat b w">A</text>
        <g class="p74dn"><rect x="118" y="52" width="58" height="58" rx="4" fill="#FF8A3D"/><rect x="88" y="52" width="30" height="58" rx="5" fill="#FFA766"/><rect x="94" y="82" width="18" height="28" fill="#F1F2FB" opacity=".9"/><text x="147" y="86" text-anchor="middle" class="tat b w">B</text></g>
        <g ${tA(1.6, 'ta-in')}><path d="M128 100h22" stroke="#14204A" stroke-width="2"/><text x="152" y="104" class="tat s">${L('passador', 'pasador')}</text></g>
        <rect x="200" y="113" width="52" height="10" rx="3" fill="#7C5CFF"/>
        <g class="p74op"><rect x="252" y="113" width="52" height="10" rx="3" fill="#FF8A3D"/></g>
        <circle cx="252" cy="118" r="15" fill="#FFA766" stroke="#fff" stroke-width="2"/><circle cx="252" cy="118" r="6" fill="#5B3FD6"/>
        <g ${tA(3.4, 'ta-in')}><text x="252" y="170" text-anchor="middle" class="tat s">${L('B gira al voltant', 'B gira alrededor')}</text><text x="252" y="188" text-anchor="middle" class="tat s">${L('del passador', 'del pasador')}</text></g>`);
    }
  };
})());
