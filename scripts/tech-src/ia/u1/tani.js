/* Tech IA · unitat 1 · animacions de teoria (TANI). Dibuixos propis de Numi: la paraula següent amb probabilitats,
   regles o dades, més dades i millors prediccions, i la temperatura. */
{
  const iaBar = (x, y, w, p, c, t) => `<rect x="${x}" y="${y}" width="${w}" height="14" rx="7" fill="#E8EEFF"/><rect x="${x}" y="${y}" width="${(w * p).toFixed(1)}" height="14" rx="7" fill="${c}"/><text x="${x + w + 8}" y="${y + 12}" class="tat s">${t}</text>`;
  Object.assign(TANI, {
    // «El gat …»: tres candidates amb la seva probabilitat; la més probable entra a la frase
    i1pred() {
      const W = [[L('dorm', 'duerme'), .67, '#8B5CF6'], [L('menja', 'come'), .25, '#22C3E6'], [L('vola', 'vuela'), .08, '#F472B6']], cx = L(92, 104);
      return tSvg(214, `<rect x="10" y="6" width="300" height="46" rx="14" fill="#0E1332"/><text x="24" y="35" class="tat w b">${L('El gat', 'El gato')}</text>
        <g ${tA(.2, 'ta-fade')}><rect x="${cx}" y="15" width="74" height="28" rx="9" fill="none" stroke="#8B9BE0" stroke-width="2" stroke-dasharray="5 4"/><text x="${cx + 37}" y="34" text-anchor="middle" class="tat w s">?</text></g>
        <g ${tA(2.8, 'ta-pop')}><rect x="${cx}" y="15" width="74" height="28" rx="9" fill="#8B5CF6"/><text x="${cx + 37}" y="35" text-anchor="middle" class="tat w b">${W[0][0]}</text></g>
        <text x="160" y="78" text-anchor="middle" class="tat s" style="fill:#56628A">${L('Quina fitxa ve després?', '¿Qué ficha viene después?')}</text>
        ${W.map(([t, p, c], i) => `<g ${tA(.5 + i * .5, 'ta-in')}><text x="24" y="${107 + i * 36}" class="tat b">${t}</text>${iaBar(104, 95 + i * 36, 150, p, c, Math.round(p * 100) + ' %')}</g>`).join('')}
        <g ${tA(2.4, 'ta-pop')}><circle cx="98" cy="102" r="11" fill="#3CC47C"/><path d="M93 102l4 4 6-7" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>`);
    },
    // regles escrites per una persona · patrons trobats a partir d'exemples
    i1regles() {
      const ex = [[34, 120, '#8B5CF6'], [52, 140, '#8B5CF6'], [40, 160, '#8B5CF6'], [62, 118, '#8B5CF6'], [104, 128, '#22C3E6'], [118, 150, '#22C3E6'], [96, 168, '#22C3E6'], [126, 116, '#22C3E6']];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="8" y="8" width="146" height="198" rx="16" fill="#F3F0FF" stroke="#D8CCFF" stroke-width="2"/><text x="81" y="32" text-anchor="middle" class="tat b">${L('Regles', 'Reglas')}</text>
          ${[L('si diu «hola»', 'si dice «hola»'), L('→ respon «hola»', '→ responde «hola»'), L('si diu «adéu»', 'si dice «adiós»'), L('→ respon «adéu»', '→ responde «adiós»')].map((t, i) => `<text x="20" y="${62 + i * 24}" style="font:700 12.5px ui-monospace,monospace;fill:${i % 2 ? '#7C3AED' : '#14204A'}" ${tA(.6 + i * .35, 'ta-fade')}>${t}</text>`).join('')}
          <g ${tA(2.3, 'ta-pop')}><text x="81" y="178" text-anchor="middle" class="tat s">${L('I si diu «bon dia»?', '¿Y si dice «buenos días»?')}</text><text x="81" y="198" text-anchor="middle" font-size="18">🤷</text></g></g>
        <g ${tA(1, 'ta-in')}><rect x="166" y="8" width="146" height="198" rx="16" fill="#E9FAFD" stroke="#B5EBF5" stroke-width="2"/><text x="239" y="32" text-anchor="middle" class="tat b">${L('Dades', 'Datos')}</text>
          <text x="239" y="54" text-anchor="middle" class="tat s" style="fill:#56628A">${L('molts exemples', 'muchos ejemplos')}</text>
          <g transform="translate(150 -40)">${ex.map(([x, y, c], i) => `<circle cx="${x}" cy="${y}" r="7" fill="${c}" ${tA(1.3 + i * .12, 'ta-pop')}/>`).join('')}
          <path d="M80 104 L80 182" stroke="#14204A" stroke-width="3" stroke-dasharray="6 5" ${tA(2.6, 'ta-fade')}/></g>
          <g ${tA(3, 'ta-pop')}><text x="239" y="182" text-anchor="middle" class="tat s">${L('El patró el troba sol', 'El patrón lo encuentra solo')}</text><text x="239" y="200" text-anchor="middle" font-size="16">✨</text></g></g>`);
    },
    // amb poques dades, una sola paraula ho és tot; amb moltes, les probabilitats s'assemblen a la llengua de veritat
    i1prob() {
      const A = [[L('plou', 'llueve'), 1]], B = [[L('fa', 'hace'), .38], [L('plou', 'llueve'), .22], [L('tenim', 'tenemos'), .16], [L('anem', 'vamos'), .14], [L('és', 'es'), .1]];
      return tSvg(214, `<text x="160" y="20" text-anchor="middle" class="tat s" style="fill:#56628A">${L('Després de «avui»…', 'Después de «hoy»…')}</text>
        <g ${tA(.3, 'ta-in')}><rect x="8" y="30" width="304" height="58" rx="14" fill="#FFF4F4" stroke="#F8C9C9" stroke-width="2"/><text x="20" y="52" class="tat s">${L('3 frases', '3 frases')} 📄</text>${A.map(([t, p], i) => `<text x="20" y="${76 + i * 20}" class="tat b">${t}</text>${iaBar(104, 64, 150, p, '#F87171', '100 %')}`).join('')}</g>
        <g ${tA(1.4, 'ta-in')}><rect x="8" y="96" width="304" height="112" rx="14" fill="#EFFBF5" stroke="#B9EBD2" stroke-width="2"/><text x="20" y="116" class="tat s">${L('300 frases', '300 frases')} 📚</text>
          ${B.map(([t, p], i) => `<g ${tA(1.8 + i * .25, 'ta-fade')}><text x="20" y="${139 + i * 15}" style="font:800 12px Lexend,system-ui,sans-serif;fill:#14204A">${t}</text><rect x="104" y="${129 + i * 15}" width="150" height="10" rx="5" fill="#DDEFE5"/><rect x="104" y="${129 + i * 15}" width="${(150 * p).toFixed(0)}" height="10" rx="5" fill="#3CC47C"/><text x="262" y="${138 + i * 15}" style="font:800 11px Lexend,system-ui,sans-serif;fill:#14204A">${Math.round(p * 100)} %</text></g>`).join('')}</g>`);
    },
    // temperatura baixa: previsible · alta: original o absurd
    i1temp() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="146" y="14" width="28" height="150" rx="14" fill="#fff" stroke="#C9D3F2" stroke-width="3"/><circle cx="160" cy="180" r="24" fill="#fff" stroke="#C9D3F2" stroke-width="3"/>
          <rect x="153" y="60" width="14" height="110" rx="7" fill="url(#iaTh)"/><circle cx="160" cy="180" r="17" fill="#EF4444"/>
          <defs><linearGradient id="iaTh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EF4444"/><stop offset="1" stop-color="#3B82F6"/></linearGradient></defs></g>
        <g ${tA(.8, 'ta-in')}><rect x="6" y="110" width="132" height="70" rx="14" fill="#EAF2FF" stroke="#BBD3FF" stroke-width="2"/><text x="72" y="130" text-anchor="middle" class="tat s">🧊 ${L('Baixa', 'Baja')}</text>
          <text x="72" y="152" text-anchor="middle" style="font:700 12px ui-monospace,monospace;fill:#1D4ED8">${L('el gat dorm.', 'el gato duerme.')}</text><text x="72" y="170" text-anchor="middle" style="font:700 12px ui-monospace,monospace;fill:#1D4ED8">${L('el gat dorm.', 'el gato duerme.')}</text></g>
        <g ${tA(1.8, 'ta-in')}><rect x="182" y="18" width="132" height="86" rx="14" fill="#FFF0F0" stroke="#FFC4C4" stroke-width="2"/><text x="248" y="38" text-anchor="middle" class="tat s">🔥 ${L('Alta', 'Alta')}</text>
          <text x="248" y="60" text-anchor="middle" style="font:700 12px ui-monospace,monospace;fill:#B91C1C">${L('el gat vola', 'el gato vuela')}</text><text x="248" y="78" text-anchor="middle" style="font:700 12px ui-monospace,monospace;fill:#B91C1C">${L('sobre la lluna', 'sobre la luna')}</text><text x="248" y="96" text-anchor="middle" style="font:700 12px ui-monospace,monospace;fill:#B91C1C">${L('de formatge.', 'de queso.')}</text></g>
        <g ${tA(2.8, 'ta-pop')}><text x="72" y="200" text-anchor="middle" class="tat s">${L('previsible', 'previsible')}</text><text x="248" y="124" text-anchor="middle" class="tat s">${L('original… o absurd', 'original… o absurdo')}</text></g>`);
    }
  });
}

/* i1-2 … i1-4: regles o exemples, probabilitats i context, temperatura, com s'entrena un model gran, fluid ≠ cert,
   i el projecte (corpus, memoritzar o generalitzar, avaluar, autoria); el taller i1-5: Quick, Draw! endevina un dibuix, les
   seves dades i l'atzar d'un xat de veritat. Tot dibuixat per Numi. */
{
  const F = (sz, c = '#14204A', w = 800) => `style="font:${w} ${sz}px Lexend,system-ui,sans-serif;fill:${c}"`;
  const M = (sz, c = '#14204A') => `style="font:700 ${sz}px ui-monospace,Menlo,monospace;fill:${c}"`;
  const box = (x, y, w, h, fill, stroke, r = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="2"` : ''}/>`;
  const arrow = (x1, y1, x2, y2, c = '#8B9BE0') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><path d="M${x2} ${y2} l-7 -4 m7 4 l-7 4" stroke="${c}" stroke-width="2.5" stroke-linecap="round" fill="none" transform="rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI).toFixed(0)} ${x2} ${y2})"/>`;
  const ok = (cx, cy, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="10" fill="${c}"/><path d="M${cx - 5} ${cy}l3.5 3.5 6-6.5" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const ko = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="10" fill="#EF5A5A"/><path d="M${cx - 4} ${cy - 4}l8 8m0 -8l-8 8" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`;
  const hbar = (x, y, w, p, c, lbl, pc, t, h = 14) => `<g ${tA(t, 'ta-in')}><text x="${x - 8}" y="${y + h - 2}" text-anchor="end" ${F(13)}>${lbl}</text><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="#E8EEFF"/><rect x="${x}" y="${y}" width="${Math.max(4, w * p).toFixed(1)}" height="${h}" rx="${h / 2}" fill="${c}"/><text x="${x + w + 8}" y="${y + h - 2}" ${F(12.5)}>${pc}</text></g>`;
  Object.assign(TANI, {
    // una regla de paraules clau atura «GRATIS» però deixa passar «GR4TIS»
    i12rule() {
      return tSvg(214, `${box(116, 34, 88, 150, '#F3F0FF', '#C4B5FD')}<text x="160" y="58" text-anchor="middle" ${F(13, '#7C3AED', 900)}>${L('REGLA', 'REGLA')}</text>
        <text x="160" y="92" text-anchor="middle" ${M(12)}>${L('si conté', 'si contiene')}</text><text x="160" y="112" text-anchor="middle" ${M(12, '#7C3AED')}>«gratis»</text><text x="160" y="136" text-anchor="middle" ${M(12)}>→ ${L('trampa', 'trampa')}</text>
        <g ${tA(.3, 'ta-in')}>${box(4, 50, 102, 34, '#fff', '#DCE4FA', 12)}<text x="55" y="72" text-anchor="middle" ${M(12)}>GRATIS! 🎁</text>${arrow(106, 67, 114, 67)}</g>
        <g ${tA(1.1, 'ta-pop')}>${arrow(206, 67, 214, 67)}${box(216, 50, 100, 34, '#FFE4E4', '#F8B4B4', 12)}<text x="266" y="72" text-anchor="middle" ${F(13, '#B91C1C')}>🚫 ${L('trampa', 'trampa')}</text></g>
        <g ${tA(1.8, 'ta-in')}>${box(4, 130, 102, 34, '#fff', '#DCE4FA', 12)}<text x="55" y="152" text-anchor="middle" ${M(12)}>GR4TIS! 🎁</text>${arrow(106, 147, 114, 147)}</g>
        <g ${tA(2.6, 'ta-pop')}>${arrow(206, 147, 214, 147)}${box(216, 130, 100, 34, '#E3F8EC', '#A7E3C2', 12)}<text x="266" y="152" text-anchor="middle" ${F(13, '#15803D')}>✅ ${L('normal', 'normal')}</text><circle cx="312" cy="132" r="10" fill="#F59E0B"/><text x="312" y="137" text-anchor="middle" ${F(13, '#fff', 900)}>!</text></g>
        <text x="160" y="206" text-anchor="middle" ${F(13, '#56628A', 700)} ${tA(3.2, 'ta-fade')}>${L('Un canvi petit i la regla ja no serveix', 'Un cambio pequeño y la regla ya no sirve')}</text>`);
    },
    // exemples etiquetats → model → un missatge nou es classifica per semblança
    i12data() {
      const ex = [[L('GRATIS!! 🎁', '¡¡GRATIS!! 🎁'), 1], [L('Quedem demà?', '¿Nos vemos?'), 0], [L('Premi per a tu 💰', 'Premio para ti 💰'), 1], [L('Deures de mates', 'Deberes de mates'), 0]];
      return tSvg(214, `<text x="72" y="20" text-anchor="middle" ${F(12, '#56628A', 700)}>${L('exemples etiquetats', 'ejemplos etiquetados')}</text>
        ${ex.map(([t, bad], i) => `<g ${tA(.2 + i * .25, 'ta-in')}>${box(4, 30 + i * 40, 140, 32, bad ? '#FFF1F1' : '#EEFBF3', bad ? '#F8C9C9' : '#B9EBD2', 10)}<text x="12" y="${51 + i * 40}" ${F(11.5, '#14204A', 700)}>${t}</text>${bad ? ko(132, 46 + i * 40) : ok(132, 46 + i * 40)}</g>`).join('')}
        <g ${tA(1.3, 'ta-fade')}>${[46, 86, 126, 166].map(y => `<path d="M146 ${y} C170 ${y} 168 112 184 112" stroke="#C9D3F2" stroke-width="2" fill="none"/>`).join('')}</g>
        <g ${tA(1.5, 'ta-pop')}><circle cx="214" cy="112" r="30" fill="#7C3AED"/><text x="214" y="122" text-anchor="middle" font-size="28">🧠</text><text x="214" y="160" text-anchor="middle" ${F(12, '#56628A', 700)}>model</text></g>
        <g ${tA(2.1, 'ta-in')}>${box(250, 24, 66, 30, '#fff', '#DCE4FA', 10)}<text x="283" y="44" text-anchor="middle" ${M(10.5)}>GR4TIS</text>${arrow(270, 56, 236, 88)}</g>
        <g ${tA(2.8, 'ta-pop')}>${arrow(240, 130, 262, 150)}${box(236, 152, 82, 44, '#FFE4E4', '#F8B4B4', 10)}<text x="277" y="171" text-anchor="middle" ${F(12.5, '#B91C1C')}>🚫 ${L('trampa', 'trampa')}</text><text x="277" y="188" text-anchor="middle" ${F(10.5, '#B91C1C', 700)}>${L('s\'hi assembla', 'se parece')}</text></g>`);
    },
    // punts forts i punts febles de cada manera
    i12when() {
      const A = [[1, L('exactes', 'exactas')], [1, L("fàcils d'explicar", 'fáciles de explicar')], [0, L('casos nous', 'casos nuevos')], [0, L('cares i veus', 'caras y voces')]];
      const B = [[1, L('cares i veus', 'caras y voces')], [1, L("s'adapten", 'se adaptan')], [0, L('calen moltes dades', 'piden muchos datos')], [0, L('costa saber per què', 'cuesta saber por qué')]];
      const col = (x, head, rows, fill, stroke, t0) => `<g ${tA(t0, 'ta-in')}>${box(x, 6, 152, 202, fill, stroke, 16)}<text x="${x + 76}" y="34" text-anchor="middle" ${F(14.5)}>${head}</text></g>
        ${rows.map(([g, t], i) => `<g ${tA(t0 + .4 + i * .45, 'ta-in')}>${g ? ok(x + 20, 66 + i * 38) : ko(x + 20, 66 + i * 38)}<text x="${x + 34}" y="${71 + i * 38}" ${F(11.5, '#14204A', 700)}>${t}</text></g>`).join('')}`;
      return tSvg(214, col(4, `📏 ${L('Regles', 'Reglas')}`, A, '#F3F0FF', '#D8CCFF', .1) + col(164, `🧠 ${L('Exemples', 'Ejemplos')}`, B, '#E9FAFD', '#B5EBF5', .3));
    },
    // les IA d'avui: dades + persones que ensenyen + normes
    i12mix() {
      const S = [['📚', L('Aprèn de moltíssims textos', 'Aprende de muchísimos textos'), L('dades', 'datos'), '#22C3E6'], ['✍️', L('Persones li ensenyen bones respostes', 'Personas le enseñan buenas respuestas'), L('exemples', 'ejemplos'), '#8B5CF6'], ['🛡️', L("S'hi afegeixen normes", 'Se añaden normas'), L('regles', 'reglas'), '#F08A24']];
      return tSvg(214, `${S.map(([e, t, k, c], i) => `<g ${tA(.3 + i * .8, 'ta-in')}>${box(6, 8 + i * 66, 308, 56, '#fff', '#DCE4FA')}<circle cx="34" cy="${36 + i * 66}" r="19" fill="${c}" opacity=".18"/><text x="34" y="${44 + i * 66}" text-anchor="middle" font-size="20">${e}</text>
          <text x="62" y="${33 + i * 66}" ${F(12.5)}>${t}</text><text x="62" y="${51 + i * 66}" ${F(11.5, c, 900)}>${k.toUpperCase()}</text></g>`).join('')}
        <g ${tA(2.9, 'ta-pop')}><circle cx="290" cy="${36 + 2 * 66}" r="13" fill="#3CC47C"/><text x="290" y="${41 + 2 * 66}" text-anchor="middle" ${F(13, '#fff', 900)}>✓</text></g>`);
    },
    // el bucle: mira el text → calcula probabilitats → en tria una → l'afegeix… i el text creix
    i13loop() {
      const st = L('el porter', 'el portero'), x0 = L(96, 106), W = [[L('atura', 'para'), 58], [L('la', 'el'), 30], [L('pilota', 'balón'), 60], ['.', 18]];
      let x = x0; const tok = W.map(([t, w], i) => { const s = `<g ${tA(2 + i * .55, 'ta-pop')}><rect x="${x}" y="15" width="${w}" height="26" rx="8" fill="#8B5CF6"/><text x="${x + w / 2}" y="33" text-anchor="middle" ${F(13, '#fff')}>${t}</text></g>`; x += w + 6; return s; }).join('');
      const N = [['👀', L('mira', 'mira'), L('el text', 'el texto')], ['📊', L('calcula', 'calcula'), L('les %', 'los %')], ['🎲', L('en tria', 'elige'), L('una', 'una')], ['➕', L("l'afegeix", 'la añade'), L('al final', 'al final')]];
      return tSvg(214, `${box(4, 6, 312, 44, '#0E1332', '', 14)}<text x="16" y="34" ${F(14.5, '#fff', 900)}>${st}</text>${tok}
        ${N.map(([e, a, b], i) => `<g ${tA(.2 + i * .3, 'ta-pop')}>${box(6 + i * 78, 78, 74, 74, '#F3F0FF', '#D8CCFF', 14)}<text x="${43 + i * 78}" y="104" text-anchor="middle" font-size="20">${e}</text><text x="${43 + i * 78}" y="124" text-anchor="middle" ${F(12)}>${a}</text><text x="${43 + i * 78}" y="140" text-anchor="middle" ${F(11, '#56628A', 700)}>${b}</text></g>${i < 3 ? `<g ${tA(.35 + i * .3, 'ta-fade')}>${arrow(80 + i * 78, 115, 83 + i * 78, 115, '#7C3AED')}</g>` : ''}`).join('')}
        <path d="M277 156 Q160 214 43 156" stroke="#7C3AED" stroke-width="3" fill="none" stroke-dasharray="7 6" ${tA(1.4, 'ta-fade')}/><path d="M43 156 l3 10 m-3 -10 l9 4" stroke="#7C3AED" stroke-width="3" fill="none" stroke-linecap="round" ${tA(1.4, 'ta-fade')}/>
        <text x="160" y="200" text-anchor="middle" ${F(12, '#7C3AED', 800)} ${tA(1.6, 'ta-fade')}>${L('i torna a començar', 'y vuelve a empezar')}</text>`);
    },
    // 1 paraula de context («blau») o 2 («porter blau»): canvia la predicció
    i13ctx() {
      const ctx1 = `<text x="16" y="52" ${F(13, '#9AA6CC', 700)}>${L('el porter', 'el portero')}</text><rect x="${L(96, 108)}" y="36" width="${L(50, 54)}" height="24" rx="8" fill="#22C3E6"/><text x="${L(121, 135)}" y="53" text-anchor="middle" ${F(13, '#fff')}>${L('blau', 'azul')}</text>`;
      const ctx2 = `<text x="16" y="146" ${F(13, '#9AA6CC', 700)}>el</text><rect x="38" y="130" width="${L(126, 140)}" height="24" rx="8" fill="#8B5CF6"/><text x="${L(101, 108)}" y="147" text-anchor="middle" ${F(13, '#fff')}>${L('porter blau', 'portero azul')}</text>`;
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 4, 312, 98, '#F2FCFF', '#B5EBF5')}<text x="16" y="24" ${F(12, '#0E7490', 900)}>${L('MIRA 1 PARAULA', 'MIRA 1 PALABRA')}</text>${ctx1}</g>
        ${hbar(L(220, 228), 30, L(56, 50), .43, '#F59E0B', L('marca', 'marca'), '43 %', .6, 12)}${hbar(L(220, 228), 52, L(56, 50), .29, '#C9D3F2', L('atura', 'para'), '29 %', .8, 12)}${hbar(L(220, 228), 74, L(56, 50), .14, '#C9D3F2', L('salta', 'salta'), '14 %', 1, 12)}
        <text x="16" y="86" ${F(11.5, '#B45309', 700)} ${tA(1.3, 'ta-fade')}>${L('😕 no sap qui és', '😕 no sabe quién es')}</text>
        <g ${tA(1.8, 'ta-in')}>${box(4, 110, 312, 98, '#F6F2FF', '#D8CCFF')}<text x="16" y="128" ${F(12, '#6D28D9', 900)}>${L('MIRA 2 PARAULES', 'MIRA 2 PALABRAS')}</text>${ctx2}</g>
        ${hbar(L(232, 240), 140, L(44, 38), .67, '#3CC47C', L('atura', 'para'), '67 %', 2.4, 12)}${hbar(L(232, 240), 162, L(44, 38), .33, '#C9D3F2', L('salta', 'salta'), '33 %', 2.6, 12)}
        <text x="16" y="194" ${F(11.5, '#15803D', 700)} ${tA(3, 'ta-fade')}>${L('😃 ara sí: és el porter', '😃 ahora sí: es el portero')}</text>`);
    },
    // la temperatura afila (0,2) o aplana (2) les mateixes probabilitats
    i13temp2() {
      const C = [['🧊 0,2', [.92, .07, .01], '#3B82F6', '#EAF2FF'], ['1', [.5, .3, .2], '#8B5CF6', '#F3F0FF'], ['🔥 2', [.42, .32, .26], '#EF4444', '#FFF0F0']], W = [L('gol', 'gol'), L('fora', 'fuera'), L('pal', 'palo')];
      return tSvg(214, C.map(([t, ps, c, bg], j) => { const x = 4 + j * 106; return `<g ${tA(.3 + j * .9, 'ta-in')}>${box(x, 4, 100, 206, bg, '', 14)}<text x="${x + 50}" y="28" text-anchor="middle" ${F(14, c, 900)}>${t}</text>
          ${ps.map((p, i) => { const h = Math.max(2, p * 120), bx = x + 12 + i * 28; return `<rect x="${bx}" y="${172 - h}" width="22" height="${h.toFixed(1)}" rx="5" fill="${c}" opacity="${1 - i * .25}"/><text x="${bx + 11}" y="${166 - h}" text-anchor="middle" ${F(10)}>${Math.round(p * 100)}%</text><text x="${bx + 11}" y="190" text-anchor="middle" ${F(9.5, '#56628A', 700)}>${W[i]}</text>`; }).join('')}</g>`; }).join(''));
    },
    // les tres fases d'entrenament d'un model gran
    i13train() {
      const S = [['📚', L('Llegeix moltíssim text', 'Lee muchísimo texto'), L('i aprèn a predir la fitxa següent', 'y aprende a predecir la ficha siguiente'), '#22C3E6'], ['✍️', L('Imita bones respostes', 'Imita buenas respuestas'), L('escrites per persones', 'escritas por personas'), '#8B5CF6'], ['👍', L('Segueix les valoracions', 'Sigue las valoraciones'), L('dona les respostes més ben valorades', 'da las respuestas mejor valoradas'), '#F08A24']];
      return tSvg(214, S.map(([e, a, b, c], i) => `<g ${tA(.3 + i * .9, 'ta-in')}>${box(6, 6 + i * 70, 308, 60, '#fff', '#DCE4FA')}<circle cx="34" cy="${36 + i * 70}" r="20" fill="${c}"/><text x="34" y="${43 + i * 70}" text-anchor="middle" font-size="19">${e}</text>
          <text x="64" y="${32 + i * 70}" ${F(13.5)}>${i + 1}. ${a}</text><text x="64" y="${50 + i * 70}" ${F(11, '#56628A', 700)}>${b}</text></g>`).join(''));
    },
    // una frase perfecta… i falsa: trossos de dues cròniques
    i13fluent() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 4, 312, 74, '#0E1332', '', 16)}<text x="18" y="26" ${F(11, '#9AA6CC', 700)}>${L('el model escriu:', 'el modelo escribe:')}</text>
          <text x="18" y="50" ${M(13, '#C4B5FD')}>${L("l'equip verd", 'el equipo verde')} <tspan fill="#fff">${L('ha', 'ha')}</tspan></text><text x="18" y="68" ${M(13, '#67E8F9')}>${L('guanyat dos a zero.', 'ganado dos a cero.')}</text></g>
        <g ${tA(1, 'ta-pop')}>${box(214, 14, 94, 26, '#3CC47C', '', 13)}<text x="261" y="32" text-anchor="middle" ${F(11.5, '#fff')}>✨ ${L('sona bé', 'suena bien')}</text></g>
        <g ${tA(1.6, 'ta-in')}>${box(4, 98, 150, 60, '#F6F2FF', '#D8CCFF', 12)}<text x="14" y="118" ${F(11, '#6D28D9', 900)}>${L('CRÒNICA 1', 'CRÓNICA 1')}</text><text x="14" y="138" ${M(11)}>${L('verd ha perdut', 'verde ha perdido')}</text><text x="14" y="152" ${M(11)}>${L('tres a u', 'tres a uno')}</text></g>
        <g ${tA(1.9, 'ta-in')}>${box(166, 98, 150, 60, '#ECFBFF', '#B5EBF5', 12)}<text x="176" y="118" ${F(11, '#0E7490', 900)}>${L('CRÒNICA 2', 'CRÓNICA 2')}</text><text x="176" y="138" ${M(11)}>${L('blau ha guanyat', 'azul ha ganado')}</text><text x="176" y="152" ${M(11)}>${L('dos a zero', 'dos a cero')}</text></g>
        <path d="M70 98 L70 80" stroke="#C4B5FD" stroke-width="3" stroke-dasharray="4 4" ${tA(2.2, 'ta-fade')}/><path d="M240 98 L170 80" stroke="#67E8F9" stroke-width="3" stroke-dasharray="4 4" ${tA(2.2, 'ta-fade')}/>
        <g ${tA(2.8, 'ta-wob')}><rect x="200" y="44" width="100" height="32" rx="6" fill="none" stroke="#EF4444" stroke-width="3" transform="rotate(-8 250 60)"/><text x="250" y="66" text-anchor="middle" ${F(17, '#EF4444', 900)} transform="rotate(-8 250 60)">${L('FALS', 'FALSO')}</text></g>
        <text x="160" y="190" text-anchor="middle" ${F(14, '#14204A', 900)} ${tA(3.3, 'ta-fade')}>${L('probable ≠ veritat', 'probable ≠ verdad')}</text>`);
    },
    // què fa un bon corpus
    i14corpus() {
      const T = [['🎭', L('Estil', 'Estilo'), L('clar', 'claro'), '#8B5CF6', '#F3F0FF'], ['🔁', L('Expressions', 'Expresiones'), L('repetides', 'repetidas'), '#22C3E6', '#E9FAFD'], ['🌈', L('Prou', 'Bastante'), L('varietat', 'variedad'), '#F08A24', '#FFF4E8'], ['🔒', L('Sense dades', 'Sin datos'), L('personals', 'personales'), '#3CC47C', '#EEFBF3']];
      return tSvg(214, T.map(([e, a, b, c, bg], i) => { const x = 6 + (i % 2) * 156, y = 6 + Math.floor(i / 2) * 104; return `<g ${tA(.3 + i * .6, 'ta-pop')}>${box(x, y, 152, 98, bg, c + '55', 16)}<text x="${x + 30}" y="${y + 44}" text-anchor="middle" font-size="26">${e}</text>
          <text x="${x + 56}" y="${y + 42}" ${F(13.5)}>${a}</text><text x="${x + 56}" y="${y + 62}" ${F(13.5, c, 900)}>${b}</text>${ok(x + 134, y + 18, c)}</g>`; }).join(''));
    },
    // poques dades: copia · més dades: combina trossos en una frase nova
    i14memo() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 4, 312, 92, '#FFF4F4', '#F8C9C9')}<text x="16" y="24" ${F(11.5, '#B91C1C', 900)}>${L('POQUES DADES → CÒPIA', 'POCOS DATOS → COPIA')}</text>
          <text x="16" y="50" ${M(12, '#9AA6CC')}>${L('ballem fins que surti el sol', 'bailamos hasta que salga el sol')}</text></g>
        <g ${tA(.9, 'ta-in')}><text x="16" y="78" ${M(12, '#B91C1C')}>${L('ballem fins que surti el sol', 'bailamos hasta que salga el sol')}</text></g><g ${tA(1.3, 'ta-pop')}>${box(256, 62, 54, 22, '#EF5A5A', '', 11)}<text x="283" y="78" text-anchor="middle" ${F(11, '#fff')}>${L('còpia', 'copia')}</text></g>
        <g ${tA(1.8, 'ta-in')}>${box(4, 104, 312, 106, '#EEFBF3', '#B9EBD2')}<text x="16" y="124" ${F(11.5, '#15803D', 900)}>${L('MÉS DADES → COMBINA', 'MÁS DATOS → COMBINA')}</text>
          <text x="16" y="146" ${M(11.5, '#7C3AED')}>${L('ballem sota la pluja', 'bailamos bajo la lluvia')}</text><text x="16" y="164" ${M(11.5, '#0E7490')}>${L('ballem amb la llum de la lluna', 'bailamos con la luz de la luna')}</text></g>
        <g ${tA(2.6, 'ta-in')}><text x="16" y="196" ${M(12.5, '#7C3AED')}>${L('ballem sota', 'bailamos bajo')} <tspan fill="#0E7490">${L('la llum de la lluna', 'la luz de la luna')}</tspan></text></g><g ${tA(3.1, 'ta-pop')}>${box(262, 180, 48, 22, '#3CC47C', '', 11)}<text x="286" y="196" text-anchor="middle" ${F(11, '#fff')}>${L('nova!', '¡nueva!')}</text></g>`);
    },
    // una avaluació senzilla: proves × (té sentit, té l'estil, és nova)
    i14eval() {
      const R = [['🧊 0,2', [1, 1, 0]], ['1', [1, 1, 1]], ['🔥 1,8', [0, 1, 1]]], H = [L('Sentit', 'Sentido'), L('Estil', 'Estilo'), L('Nova', 'Nueva')];
      return tSvg(214, `${box(4, 4, 312, 206, '#F5F8FF', '#DCE4FA', 16)}<text x="18" y="30" ${F(13)}>📋 ${L('La meva avaluació', 'Mi evaluación')}</text>
        ${H.map((h, j) => `<text x="${150 + j * 58}" y="58" text-anchor="middle" ${F(11.5, '#56628A', 800)}>${h}</text>`).join('')}
        ${R.map(([t, v], i) => `<g ${tA(.5 + i * .7, 'ta-in')}><text x="18" y="${92 + i * 36}" ${F(12.5)}>${L('Prova', 'Prueba')} ${i + 1}</text><text x="${L(80, 92)}" y="${92 + i * 36}" ${F(11, '#56628A', 700)}>${t}</text>${v.map((g, j) => g ? ok(150 + j * 58, 87 + i * 36) : ko(150 + j * 58, 87 + i * 36)).join('')}</g>`).join('')}
        <g ${tA(2.8, 'ta-pop')}>${box(92, 176, 136, 28, '#7C3AED', '', 14)}<text x="160" y="195" text-anchor="middle" ${F(12.5, '#fff')}>7 / 9 ✓</text></g>`);
    },
    // un text amb drets (©) o un text escrit per nosaltres (✍️)
    i14rights() {
      const lines = (x, y, c) => [0, 1, 2, 3].map(i => `<rect x="${x}" y="${y + i * 16}" width="${[96, 80, 104, 70][i]}" height="7" rx="3.5" fill="${c}"/>`).join('');
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(8, 10, 140, 130, '#fff', '#DCE4FA')}<text x="78" y="34" text-anchor="middle" ${F(12.5)}>♪ ${L('Cançó famosa', 'Canción famosa')}</text>${lines(24, 52, '#E3E8F7')}</g>
        <g ${tA(1, 'ta-pop')}><circle cx="128" cy="118" r="17" fill="#EF5A5A"/><text x="128" y="125" text-anchor="middle" ${F(18, '#fff', 900)}>©</text></g>
        <text x="78" y="160" text-anchor="middle" ${F(11.5, '#B91C1C', 700)} ${tA(1.3, 'ta-fade')}>${L('té autoria i drets', 'tiene autoría y derechos')}</text>
        <g ${tA(1.8, 'ta-in')}>${box(172, 10, 140, 130, '#EEFBF3', '#B9EBD2')}<text x="242" y="34" text-anchor="middle" ${F(12.5)}>♪ ${L('La nostra', 'La nuestra')}</text>${lines(188, 52, '#BDEBD0')}</g>
        <g ${tA(2.4, 'ta-pop')}><text x="296" y="132" text-anchor="middle" font-size="24">✍️</text></g>
        <text x="242" y="160" text-anchor="middle" ${F(11.5, '#15803D', 700)} ${tA(2.6, 'ta-fade')}>${L('escrita per nosaltres', 'escrita por nosotros')}</text>
        <g ${tA(3.1, 'ta-pop')}>${box(70, 176, 180, 30, '#7C3AED', '', 15)}<text x="160" y="196" text-anchor="middle" ${F(12, '#fff')}>${L("Digues d'on surten", 'Di de dónde salen')}</text></g>`);
    },

    // taller i1-5: Quick, Draw! endevina mentre dibuixes: el gat es dibuixa traç a traç i la IA diu el que veu
    i15qd() {
      const S = [['M49 106 a34 34 0 1 0 68 0 a34 34 0 1 0 -68 0', .3], ['M56 86 L58 60 L76 74', .8], ['M90 74 L108 60 L110 86', 1], ['M71 98 v6 M95 98 v6', 1.3], ['M78 114 l5 5 l5 -5', 1.5], ['M62 114 l-26 -5 M62 121 l-26 4 M104 114 l26 -5 M104 121 l26 4', 1.8]];
      const G = [[L('Veig… un cercle?', 'Veo… ¿un círculo?'), .6], [L('una pilota?', '¿una pelota?'), 1.1], [L('una cara?', '¿una cara?'), 1.6]];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(6, 6, 158, 174, '#fff', '#DCE4FA', 14)}<path d="M7 34 V20 a13 13 0 0 1 13 -13 H150 a13 13 0 0 1 13 13 V34 Z" fill="#FFF4CC"/>
          <text x="16" y="26" ${F(12)}>✏️ ${L('Dibuixa: gat', 'Dibuja: gato')}</text><text x="154" y="170" text-anchor="end" ${F(11, '#B45309', 800)}>⏱ 20 s</text></g>
        ${S.map(([d, t]) => `<path d="${d}" fill="none" stroke="#14204A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" pathLength="1" ${tA(t, 'ta-draw')}/>`).join('')}
        <text x="85" y="202" text-anchor="middle" ${F(11, '#56628A', 700)} ${tA(.4, 'ta-fade')}>${L('traç a traç, en 20 segons', 'trazo a trazo, en 20 segundos')}</text>
        <g ${tA(.2, 'ta-in')}>${box(174, 6, 140, 28, '#0E1332', '', 14)}<text x="186" y="25" ${F(12, '#fff')}>🧠 ${L('La IA diu…', 'La IA dice…')}</text></g>
        ${G.map(([t, s], i) => `<g ${tA(s, 'ta-in')}>${box(174, 42 + i * 30, 140, 24, '#F3F0FF', '#D8CCFF', 12)}<text x="186" y="${58 + i * 30}" ${F(11.5, '#6D28D9', 800)}>${t}</text></g>`).join('')}
        <g ${tA(2.4, 'ta-pop')}>${box(174, 134, 140, 30, '#DFF7E8', '#86D9A9', 15)}${ok(192, 149)}<text x="208" y="154" ${F(12, '#15803D', 900)}>${L('És un gat!', '¡Es un gato!')}</text></g>
        <g ${tA(3, 'ta-fade')}><text x="244" y="186" text-anchor="middle" ${F(10, '#56628A', 700)}>${L('sense fotos: ha après', 'sin fotos: ha aprendido')}</text><text x="244" y="201" text-anchor="middle" ${F(10, '#56628A', 700)}>${L('de milions de dibuixos', 'de millones de dibujos')}</text></g>`);
    },
    // taller i1-5: les dades de Quick, Draw!: «gat» dibuixat per moltes persones (sobretot la cara); la xarxa n'aprèn el que tenen en comú
    i15data() {
      const D = { face: '<circle cx="0" cy="3" r="13"/><path d="M-10 -4 L-9 -17 L-2 -10 M2 -10 L9 -17 L10 -4 M-5 0 v3 M5 0 v3 M-13 6 l-8 -2 M-13 10 l-8 2 M13 6 l8 -2 M13 10 l8 2"/>',
        face2: '<ellipse cx="0" cy="3" rx="14" ry="11"/><path d="M-11 -2 L-12 -15 L-4 -8 M4 -8 L12 -15 L11 -2 M-6 1 h3 M3 1 h3 M-3 7 q3 3 6 0"/>',
        body: '<ellipse cx="3" cy="6" rx="13" ry="7"/><circle cx="-12" cy="-4" r="6"/><path d="M-16 -8 l0 -6 l4 3 M-10 -10 l2 -5 l2 5 M16 4 q7 -3 5 -13 M-5 12 v6 M9 12 v6"/>',
        sit: '<path d="M-9 17 Q-13 1 -5 -4 Q0 -7 5 -4 Q13 1 9 17 Z"/><circle cx="0" cy="-11" r="6"/><path d="M-5 -15 l0 -6 l4 3 M2 -18 l3 -3 l1 6 M9 15 q9 0 7 -9"/>' };
      const tiles = ['face', 'body', 'face2', 'face', 'sit', 'face', 'face2', 'face'].map((k, i) => { const x = 8 + (i % 4) * 50, y = 28 + Math.floor(i / 4) * 50;
        return `<g ${tA(.2 + i * .18, 'ta-pop')}>${box(x, y, 44, 44, '#FFFDF5', '#EADFC0', 10)}<g transform="translate(${x + 22} ${y + 23})" fill="none" stroke="#14204A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${D[k]}</g></g>`; }).join('');
      return tSvg(214, `<text x="8" y="18" ${F(11.5, '#56628A', 800)}>${L('«gat», dibuixat per moltes persones', '«gato», dibujado por muchas personas')}</text>${tiles}
        <g ${tA(1.8, 'ta-in')}>${box(212, 28, 100, 94, '#F3F0FF', '#D8CCFF', 14)}<text x="262" y="56" text-anchor="middle" ${F(19, '#7C3AED', 900)}>50 M+</text><text x="262" y="72" text-anchor="middle" ${F(10.5, '#56628A', 700)}>${L('dibuixos', 'dibujos')}</text>
          <text x="262" y="99" text-anchor="middle" ${F(17, '#7C3AED', 900)}>345</text><text x="262" y="114" text-anchor="middle" ${F(10.5, '#56628A', 700)}>${L('paraules', 'palabras')}</text></g>
        <g ${tA(2.4, 'ta-fade')}>${arrow(160, 126, 160, 140, '#7C3AED')}</g>
        <g ${tA(2.6, 'ta-in')}>${box(8, 144, 304, 32, '#0E1332', '', 14)}<text x="160" y="165" text-anchor="middle" ${F(12, '#fff')}>🧠 ${L('la xarxa aprèn què tenen en comú', 'la red aprende qué tienen en común')}</text></g>
        <g ${tA(3.2, 'ta-pop')}><text x="160" y="200" text-anchor="middle" ${F(11.5, '#B45309', 800)}>⚠️ ${L('si surt poc a les dades, li costa més', 'si sale poco en los datos, le cuesta más')}</text></g>`);
    },
    // taller i1-5: la mateixa petició en tres converses noves: el xat sorteja la paraula següent segons les probabilitats
    i15roll() {
      const W = [[L('va', 'encontró'), .5, '#8B5CF6'], [L('es', 'se'), .3, '#0891B2'], [L('hi', 'vio'), .2, '#DB2777']];
      const R = [[0, L('trobar un pastís de xocolata.', 'un pastel de chocolate.')], [1, L('va quedar glaçat de sorpresa.', 'quedó helado de sorpresa.')], [0, L('trobar un pastís de xocolata.', 'un pastel de chocolate.')]];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(4, 4, 312, 44, '#0E1332', '', 14)}<text x="16" y="21" ${F(10, '#9AA6CC', 700)}>${L('la mateixa petició, en 3 converses noves:', 'la misma petición, en 3 conversaciones nuevas:')}</text>
          <text x="16" y="39" ${M(11.5, '#fff')}>${L('«Quan el robot va obrir la nevera,»', '«Cuando el robot abrió la nevera,»')}</text></g>
        <text x="12" y="68" ${F(11, '#56628A', 800)} ${tA(.4, 'ta-fade')}>${L('paraula següent:', 'palabra siguiente:')}</text>
        ${W.map(([t, p, c], i) => hbar(L(40, 76), 76 + i * 18, L(74, 50), p, c, t, Math.round(p * 100) + ' %', .6 + i * .2, 12)).join('')}
        <g ${tA(1.4, 'ta-wob')}>${box(176, 56, 138, 68, '#FFF7E0', '#F6D28B', 14)}<text x="200" y="101" text-anchor="middle" font-size="28">🎲</text><text x="222" y="81" ${F(12.5, '#92400E', 900)}>${L('sorteja', 'sortea')}</text>
          <text x="222" y="98" ${F(10, '#92400E', 700)}>${L('segons les', 'según las')}</text><text x="222" y="113" ${F(10, '#92400E', 700)}>${L('probabilitats', 'probabilidades')}</text></g>
        ${R.map(([w, t], i) => `<g ${tA(2 + i * .5, 'ta-in')}>${box(4, 132 + i * 27, 312, 23, '#F6F2FF', '#E2D8FF', 11)}<text x="14" y="${148 + i * 27}" ${F(10.5, '#6D28D9', 900)}>💬 ${i + 1}</text><text x="50" y="${148 + i * 27}" ${M(10.5)}><tspan fill="${W[w][2]}">${W[w][0]}</tspan> ${t}</text></g>`).join('')}`);
    }
  });
}
