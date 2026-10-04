/* Tech Web · unitat 8 «La meva web» · animacions de teoria (TANI w8…)
   Dibuixos propis en SVG (viewBox 320 × alt), en bucle de 5,5 s: el públic, l'esbós en paper, el menú que porta a les
   seccions, les capes de la construcció, l'accessibilitat, la llista de revisió, les dades personals i el viatge del curs. */
Object.assign(TANI, (() => {
  // una finestra de navegador (o de mòbil) buida, amb la barra de dalt
  const win = (x, y, w, h, col = '#14A3B8') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="#fff" stroke="#C9D6F2" stroke-width="2" filter="url(#bwSh)"/><path d="M${x} ${y + 10}a10 10 0 0 1 10 -10h${w - 20}a10 10 0 0 1 10 10v8h-${w}z" fill="${col}"/>${[0, 1, 2].map(i => `<circle cx="${x + 10 + i * 9}" cy="${y + 9}" r="2.6" fill="#fff" opacity=".85"/>`).join('')}`;
  const ok = (x, y, t, r = 10) => `<g ${tA(t, 'ta-pop')}><circle cx="${x}" cy="${y}" r="${r}" fill="#1FA463"/><path d="M${x - r * .5} ${y}l${r * .35} ${r * .38} ${r * .7} -${r * .75}" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const ko = (x, y, t, r = 10) => `<g ${tA(t, 'ta-pop')}><circle cx="${x}" cy="${y}" r="${r}" fill="#E5484D"/><path d="M${x - r * .4} ${y - r * .4}l${r * .8} ${r * .8}M${x + r * .4} ${y - r * .4}l-${r * .8} ${r * .8}" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>`;
  // una persona senzilla (cap i cos)
  const person = (x, y, s, skin, shirt, hair) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-16 34a16 18 0 0 1 32 0z" fill="${shirt}"/><circle cy="4" r="13" fill="${skin}"/><path d="M-13 2a13 13 0 0 1 26 0c-4 -6 -10 -8 -13 -8s-9 2 -13 8z" fill="${hair}"/><circle cx="-4.5" cy="5" r="1.7" fill="#14204A"/><circle cx="4.5" cy="5" r="1.7" fill="#14204A"/><path d="M-4 10q4 3 8 0" fill="none" stroke="#14204A" stroke-width="1.6" stroke-linecap="round"/></g>`;
  return {
    // per a qui és la web? tres públics diferents i una web que s'adapta al que tria
    w8aud() {
      const ppl = [[34, 62, .9, '#F2C9A0', '#3D7BF4', '#5A3A1E', L('Companys/es', 'Compañeros/as')], [34, 118, .74, '#E8B48A', '#F2A516', '#2B1A0E', L('Nens petits', 'Niños pequeños')], [34, 174, .95, '#F6D2B4', '#8B5CF6', '#B9B9C6', L('Famílies', 'Familias')]];
      return tSvg(214, `<text x="160" y="20" text-anchor="middle" class="tat b" ${tA(.1, 'ta-fade')}>${L('Per a qui és la teva web?', '¿Para quién es tu web?')}</text>
        ${ppl.map(([x, y, s, sk, sh, ha, t], i) => `<g ${tA(.3 + i * .45, 'ta-in')}>${person(x, y - 20, s, sk, sh, ha)}<text x="${x + 24}" y="${y + 2}" class="tat s">${t}</text></g>`).join('')}
        <circle cx="34" cy="48" r="27" fill="none" stroke="#14A3B8" stroke-width="3.5" stroke-dasharray="6 5" ${tA(1.8, 'ta-pop')}/>
        <path d="M140 66 Q156 60 170 70" fill="none" stroke="#14A3B8" stroke-width="3" stroke-linecap="round" ${tA(2.2, 'ta-fade')}/><path d="M164 62l8 9-11 2" fill="none" stroke="#14A3B8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ${tA(2.2, 'ta-fade')}/>
        <g ${tA(2.5, 'ta-in')}>${win(180, 34, 130, 138)}
          <rect x="190" y="62" width="74" height="12" rx="4" fill="#14204A"/><rect x="190" y="80" width="108" height="7" rx="3" fill="#B7C3E0"/><rect x="190" y="92" width="92" height="7" rx="3" fill="#B7C3E0"/>
          <rect x="190" y="106" width="50" height="44" rx="8" fill="#DDF5F8"/><path d="M196 144l12 -16 10 10 6 -6 10 12z" fill="#14A3B8"/><circle cx="226" cy="118" r="5" fill="#F2A516"/>
          <rect x="248" y="108" width="50" height="7" rx="3" fill="#B7C3E0"/><rect x="248" y="120" width="42" height="7" rx="3" fill="#B7C3E0"/><rect x="248" y="136" width="48" height="14" rx="7" fill="#F2A516"/>
          <rect x="190" y="156" width="108" height="8" rx="4" fill="#EAF0FF"/></g>
        <g ${tA(3.2, 'ta-pop')}><rect x="176" y="180" width="138" height="28" rx="10" fill="#14A3B8"/><text x="245" y="199" text-anchor="middle" class="tat w s">${L('Escrita per a ells', 'Escrita para ellos')}</text></g>`);
    },
    // l'esbós en paper: es dibuixen les caixes de la pàgina i després es converteixen en una web de mòbil
    w8wire() {
      const box = (x, y, w, h, t, lab, col) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="none" stroke="#56628A" stroke-width="2.2" pathLength="1" ${tA(t, 'ta-draw')}/><text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" class="tat s" style="fill:${col}" ${tA(t + .2, 'ta-fade')}>${lab}</text>`;
      const parts = [[22, 30, 112, 24, L('capçalera', 'cabecera'), '#C2410C'], [22, 58, 112, 16, L('menú', 'menú'), '#14A3B8'], [22, 78, 112, 30, L('secció 1', 'sección 1'), '#3D7BF4'], [22, 112, 112, 30, L('secció 2', 'sección 2'), '#3D7BF4'], [22, 146, 112, 16, L('peu', 'pie'), '#56628A']];
      const real = [['#C2410C', 24], ['#14A3B8', 14], ['#DCE8FF', 30], ['#DCE8FF', 30], ['#56628A', 14]];
      let yy = 46; const phone = real.map(([c, h], i) => { const r = `<rect x="226" y="${yy}" width="68" height="${h}" rx="4" fill="${c}" ${tA(3 + i * .25, 'ta-in')}/>`; yy += h + 4; return r; }).join('');
      return tSvg(214, `<g transform="rotate(-2 80 100)"><rect x="10" y="16" width="136" height="160" rx="6" fill="#FFFDF5" stroke="#E2D6B4" stroke-width="2" filter="url(#bwSh)"/>
          ${Array.from({ length: 9 }, (_, i) => `<path d="M16 ${36 + i * 16}h124" stroke="#EFE6CC" stroke-width="1"/>`).join('')}
          ${parts.map(([x, y, w, h, l, c], i) => box(x, y, w, h, .3 + i * .45, l, c)).join('')}</g>
        <g><animateMotion dur="5.5s" repeatCount="indefinite" path="M30 30 L134 54 L30 74 L134 108 L30 142 L134 162" keyPoints="0;1;1" keyTimes="0;.5;1" calcMode="linear"/><g transform="rotate(35)"><rect x="-3" y="-30" width="7" height="28" rx="2" fill="#F2A516" stroke="#B46A00" stroke-width="1.4"/><path d="M-3 -2l3.5 8 3.5-8z" fill="#FFE2B0" stroke="#B46A00" stroke-width="1.2"/></g></g>
        <g ${tA(2.6, 'ta-in')}><path d="M158 100h30" stroke="#14A3B8" stroke-width="5" stroke-linecap="round"/><path d="M182 89l11 11-11 11" fill="none" stroke="#14A3B8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.8, 'ta-in')}><rect x="216" y="22" width="88" height="176" rx="16" fill="#20306A" filter="url(#bwSh)"/><rect x="222" y="40" width="76" height="146" rx="5" fill="#fff"/><rect x="248" y="29" width="24" height="5" rx="2.5" fill="#3A4A8A"/></g>
        ${phone}
        <text x="78" y="200" text-anchor="middle" class="tat s" ${tA(.2, 'ta-fade')}>${L('Esbós en paper', 'Boceto en papel')}</text><text x="260" y="212" text-anchor="middle" class="tat s" ${tA(3, 'ta-fade')}>${L('La web', 'La web')}</text>`);
    },
    // el menú: l'enllaç href="#fotos" fa saltar la pàgina fins a la secció id="fotos"
    w8map() {
      const sec = (y, c, t) => `<rect x="20" y="${y}" width="120" height="60" rx="8" fill="${c}"/><text x="32" y="${y + 24}" class="tat s">${t}</text><rect x="32" y="${y + 34}" width="90" height="6" rx="3" fill="#fff" opacity=".8"/><rect x="32" y="${y + 45}" width="70" height="6" rx="3" fill="#fff" opacity=".8"/>`;
      return tSvg(214, `<rect x="10" y="12" width="140" height="190" rx="14" fill="#20306A" filter="url(#bwSh)"/><clipPath id="w8mClip"><rect x="16" y="46" width="128" height="148" rx="4"/></clipPath>
        <rect x="16" y="20" width="128" height="26" rx="4" fill="#14A3B8"/>${[[L('Inici', 'Inicio'), 20], [L('Fotos', 'Fotos'), 62], [L('Mapa', 'Mapa'), 104]].map(([t, x], i) => `<text x="${x}" y="38" class="tat w s" style="font-size:13px">${t}</text>`).join('')}
        <rect x="57" y="24" width="44" height="20" rx="6" fill="none" stroke="#FFD54A" stroke-width="2.5" ${tA(.6, 'ta-pop')}/>
        <g clip-path="url(#w8mClip)"><rect x="16" y="46" width="128" height="148" fill="#F3F6FF"/><g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 -136;0 -136;0 0" keyTimes="0;.22;.36;.92;1" dur="5.5s" repeatCount="indefinite"/>
          ${sec(52, '#9BB7F0', L('Inici', 'Inicio'))}${sec(120, '#B8E2C8', L('Qui som', 'Quiénes somos'))}${sec(188, '#FFD7A8', L('Fotos', 'Fotos'))}${sec(256, '#E5C9F5', L('Mapa', 'Mapa'))}
          <rect x="18" y="186" width="124" height="64" rx="9" fill="none" stroke="#F2A516" stroke-width="3" ${tA(2.2, 'ta-pop')}/></g></g>
        <g><animateTransform attributeName="transform" type="translate" values="40 120;80 36;80 36;80 36" keyTimes="0;.12;.2;1" dur="5.5s" repeatCount="indefinite"/><path d="M0 0l0 18 5 -5 4 8 4 -2 -4 -8 7 0z" fill="#fff" stroke="#14204A" stroke-width="1.8" stroke-linejoin="round"/></g>
        <g ${tA(1, 'ta-in')}><rect x="164" y="30" width="148" height="40" rx="10" fill="#14204A"/><text x="238" y="56" text-anchor="middle" class="tat w" style="font-family:monospace">href="#fotos"</text></g>
        <g ${tA(1.6, 'ta-fade')}><path d="M238 76v40" stroke="#F2A516" stroke-width="4" stroke-dasharray="5 5" stroke-linecap="round"/><path d="M228 108l10 12 10-12" fill="none" stroke="#F2A516" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.2, 'ta-in')}><rect x="164" y="126" width="148" height="40" rx="10" fill="#14204A"/><text x="238" y="152" text-anchor="middle" class="tat w" style="font-family:monospace">id="fotos"</text></g>
        <text x="238" y="188" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(3, 'ta-fade')}>${L('El mateix nom,', 'El mismo nombre,')}</text><text x="238" y="205" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(3, 'ta-fade')}>${L('però sense #', 'pero sin #')}</text>`);
    },
    // les capes de la construcció: estructura, contingut, estil i revisió (una cada vegada)
    w8layers() {
      const rows = [[L('1. Estructura (HTML)', '1. Estructura (HTML)'), '#3D7BF4', 'M0 -8h18v5h-18zM0 0h18v10h-18z'], [L('2. Contingut: text i imatges', '2. Contenido: texto e imágenes'), '#1FA463', 'M0 -8h18v3h-18zM0 -2h14v3h-14zM0 4h18v3h-18z'], [L('3. Estil (CSS)', '3. Estilo (CSS)'), '#C2410C', 'M2 6a7 7 0 1 1 14 0c0 4 -4 3 -6 3s-8 1 -8 -3z'], [L('4. Revisió i millora', '4. Revisión y mejora'), '#8B5CF6', 'M8 0a7 7 0 1 0 0.1 0zM13 5l6 6']];
      return tSvg(214, rows.map(([t, c, d], i) => { const y = 162 - i * 46, t0 = .3 + i * 1.05; return `<g ${tA(t0, 'ta-in')}><rect x="14" y="${y}" width="292" height="38" rx="12" fill="#fff" stroke="${c}" stroke-width="2.6" filter="url(#bwSh)"/><rect x="24" y="${y + 7}" width="24" height="24" rx="7" fill="${c}"/>${i === 3 ? `<circle cx="34" cy="${y + 17}" r="5.5" fill="none" stroke="#fff" stroke-width="2.6"/><path d="M38 ${y + 21}l5 5" stroke="#fff" stroke-width="3" stroke-linecap="round"/>` : `<path transform="translate(27 ${y + 19})" d="${d}" fill="#fff"/>`}<text x="60" y="${y + 24}" class="tat s">${t}</text></g>${ok(286, y + 19, t0 + .6, 10)}`; }).join('')
        + `<text x="160" y="16" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(4.6, 'ta-fade')}>${L('Una capa cada vegada, de baix a dalt', 'Una capa cada vez, de abajo arriba')}</text>`);
    },
    // accessibilitat: el lector de pantalla llegeix l'alt i segueix els títols en ordre
    w8a11y() {
      const wave = (r, t) => `<path d="M${120 + r} 62a${r} ${r} 0 0 1 0 ${r * 1.4}" fill="none" stroke="#14A3B8" stroke-width="3" stroke-linecap="round" transform="translate(0 -${r * .7})" ${tA(t, 'ta-fade')}/>`;
      const hd = (x, y, w, tag, c, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="24" rx="7" fill="${c}"/><text x="${x + 8}" y="${y + 17}" class="tat w s" style="font-family:monospace">${tag}</text></g>`;
      return tSvg(214, `<rect x="12" y="20" width="84" height="70" rx="10" fill="#DDF5F8" stroke="#9ADBE4" stroke-width="2"/><path d="M20 82l22 -28 16 18 10 -10 22 20z" fill="#14A3B8"/><circle cx="74" cy="38" r="9" fill="#F2A516"/>
        <g ${tA(.4, 'ta-pop')}><path d="M100 50h8l10 -9v26l-10 -9h-8z" fill="#14204A"/></g>${wave(8, .7)}${wave(15, .9)}
        <g ${tA(1.2, 'ta-in')}> <rect x="10" y="98" width="152" height="46" rx="12" fill="#fff" stroke="#14A3B8" stroke-width="2.4" filter="url(#bwSh)"/><text x="20" y="117" class="tat s" style="font-family:monospace;fill:#14A3B8">alt=</text><text x="20" y="135" class="tat s">${L('«Muntanya i sol»', '«Montaña y sol»')}</text></g>
        <text x="86" y="170" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(1.6, 'ta-fade')}>${L('El lector de pantalla', 'El lector de pantalla')}</text><text x="86" y="188" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(1.6, 'ta-fade')}>${L("llegeix l'alt en veu alta", 'lee el alt en voz alta')}</text>
        ${hd(180, 20, 54, 'h1', '#3D7BF4', 2)}${hd(196, 50, 54, 'h2', '#1FA463', 2.4)}${hd(212, 80, 54, 'h3', '#1FA463', 2.8)}${hd(196, 110, 54, 'h2', '#1FA463', 3.2)}${ok(296, 92, 3.5, 11)}
        <g ${tA(4, 'ta-in')}>${hd(180, 144, 54, 'h1', '#9AA6C4', 4)}<path d="M206 170v6h14" fill="none" stroke="#9AA6C4" stroke-width="2.4"/>${hd(220, 166, 54, 'h4', '#E5484D', 4.2)}</g>${ko(296, 178, 4.5, 11)}
        <text x="238" y="208" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(4.4, 'ta-fade')}>${L('Sense saltar-ne cap', 'Sin saltarse ninguno')}</text>`);
    },
    // la llista de revisió: cinc coses que es comproven abans de publicar
    w8check() {
      const it = [L('Imatges amb alt', 'Imágenes con alt'), L('Títols en ordre', 'Títulos en orden'), L('Bon contrast', 'Buen contraste'), L('Sense faltes', 'Sin faltas'), L('Bé al mòbil', 'Bien en el móvil')];
      return tSvg(214, `<rect x="22" y="18" width="196" height="188" rx="12" fill="#FFFDF5" stroke="#E2D6B4" stroke-width="2" filter="url(#bwSh)"/><rect x="89" y="10" width="62" height="18" rx="6" fill="#B46A00"/>
        ${it.map((t, i) => `<rect x="38" y="${42 + i * 32}" width="18" height="18" rx="4" fill="#fff" stroke="#9AA6C4" stroke-width="2"/><text x="66" y="${56 + i * 32}" class="tat s">${t}</text>${ok(47, 51 + i * 32, .6 + i * .7, 9)}`).join('')}
        <g><animateTransform attributeName="transform" type="translate" values="252 40;252 40;252 72;252 104;252 136;252 168;252 168" keyTimes="0;.1;.23;.36;.49;.62;1" dur="5.5s" repeatCount="indefinite"/><circle r="22" fill="#DDF5F8" stroke="#14A3B8" stroke-width="5"/><path d="M15 15l20 20" stroke="#14A3B8" stroke-width="8" stroke-linecap="round"/><path d="M-9 -6a12 12 0 0 1 10 -7" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>
        <text x="276" y="30" text-anchor="middle" class="tat b" style="fill:#147A47" ${tA(4.3, 'ta-pop')}>${L('A punt!', '¡A punto!')}</text>`);
    },
    // les dades personals no van a una web pública: el nom de pila sí; l'adreça, el telèfon i l'escola, no
    w8safe() {
      const rows = [[L('Nom de pila: Aina', 'Nombre: Aina'), true], [L('Adreça de casa', 'Dirección de casa'), false], [L('Telèfon', 'Teléfono'), false], [L('Nom de l\'escola', 'Nombre del colegio'), false], [L('Fotos de la cara', 'Fotos de la cara'), false]];
      return tSvg(214, `${win(12, 12, 190, 192)}${rows.map(([t, g], i) => `<g ${tA(.3 + i * .5, 'ta-in')}><rect x="24" y="${40 + i * 32}" width="146" height="24" rx="7" fill="${g ? '#E6F6EC' : '#FDECEC'}"/><text x="32" y="${57 + i * 32}" class="tat s">${t}</text></g>${g ? ok(186, 52 + i * 32, .6 + i * .5, 10) : ko(186, 52 + i * 32, .6 + i * .5, 10)}`).join('')}
        <g ${tA(3.4, 'ta-pop')}><path d="M262 54l38 14v30c0 26 -18 42 -38 50c-20 -8 -38 -24 -38 -50v-30z" fill="#14A3B8" stroke="#0E7C8C" stroke-width="3"/><path d="M247 100l11 11 20 -24" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g>
        <text x="262" y="180" text-anchor="middle" class="tat s" ${tA(3.8, 'ta-fade')}>${L('La web és', 'La web es')}</text><text x="262" y="198" text-anchor="middle" class="tat s" ${tA(3.8, 'ta-fade')}>${L('pública!', '¡pública!')}</text>`);
    },
    // el viatge del curs: vuit unitats, de com funciona internet a la web pròpia
    w8journey() {
      const u = [L('Internet', 'Internet'), 'HTML', L('Imatges', 'Imágenes'), 'CSS', L('Caixes', 'Cajas'), L('Disposició', 'Disposición'), L('Mòbil', 'Móvil'), L('La meva web', 'Mi web')];
      const P = [[52, 44], [122, 44], [192, 44], [262, 44], [262, 132], [192, 132], [122, 132], [52, 132]];
      const road = 'M52 44H262C306 44 306 132 262 132H52';
      return tSvg(214, `<path d="${road}" fill="none" stroke="#E2BE76" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><path d="${road}" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="2 9" stroke-linecap="round"/>
        ${P.map(([x, y], i) => `<g ${tA(.2 + i * .45, 'ta-pop')}><circle cx="${x}" cy="${y}" r="${i === 7 ? 19 : 15}" fill="${i === 7 ? '#F2A516' : '#14A3B8'}" stroke="#fff" stroke-width="3" filter="url(#bwSh)"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w s" style="font-size:${i === 7 ? 18 : 13}px">${i === 7 ? '★' : i + 1}</text></g><text x="${x}" y="${y + (i === 7 ? 38 : 34)}" text-anchor="middle" class="tat s" style="font-size:13px" ${tA(.4 + i * .45, 'ta-fade')}>${u[i]}</text>`).join('')}
        <text x="160" y="204" text-anchor="middle" class="tat b" ${tA(4.3, 'ta-fade')}>${L('Vuit unitats, una web teva!', '¡Ocho unidades, una web tuya!')}</text>`);
    }
  };
})());
