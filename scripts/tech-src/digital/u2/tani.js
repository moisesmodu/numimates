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
